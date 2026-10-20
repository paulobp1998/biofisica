/**
 * ArenaNetwork - Camada de Comunicação em Tempo Real (100% Gratuita)
 * Suporta WebSockets sobre TLS (WSS) via brokers MQTT públicos com redundância automática
 * e Modo Simulação Local (para teste sem internet ou telemóveis).
 *
 * Robustez da ligação:
 *  - O docente liga-se a TODOS os brokers em simultâneo; cada aluno liga-se a um (escolhido ao acaso,
 *    o que também reparte a carga). Assim, uma falha num broker nunca separa alunos e docente.
 *  - Reconexão automática com espera crescente, que nunca desiste.
 *  - O aluno anuncia-se de 12 em 12 s (heartbeat) e indica a última mensagem de estado que recebeu;
 *    se estiver desatualizado, o docente reenvia-lhe o estado atual.
 *  - Ao voltar ao ecrã (telemóvel desbloqueado, rede recuperada) a ligação é renovada de imediato.
 */

const ARENA_HEARTBEAT_MS = 12000;
const ARENA_AWAY_RECONNECT_MS = 15000;
const ARENA_SESSION_KEY = 'arena_client_session';
const ARENA_SESSION_MAX_AGE_MS = 90 * 60 * 1000;

function arenaStorageGet(key) {
  try { return window.localStorage.getItem(key); } catch (e) { return null; }
}
function arenaStorageSet(key, value) {
  try { window.localStorage.setItem(key, value); } catch (e) { /* modo privado */ }
}
function arenaStorageRemove(key) {
  try { window.localStorage.removeItem(key); } catch (e) { /* modo privado */ }
}

// Sessão do aluno guardada no telemóvel para retomar após recarregar a página
function arenaLoadClientSession() {
  try {
    const s = JSON.parse(arenaStorageGet(ARENA_SESSION_KEY) || 'null');
    if (!s || !s.roomPin || !s.teamId || !s.teamName) return null;
    if (Date.now() - (s.ts || 0) > ARENA_SESSION_MAX_AGE_MS) return null;
    return s;
  } catch (e) {
    return null;
  }
}

function arenaClearClientSession() {
  arenaStorageRemove(ARENA_SESSION_KEY);
}

class ArenaNetwork {
  constructor() {
    this.links = {}; // { índiceDoBroker: { index, client, connected, attempt, timer, gen } }
    this.roomPin = null;
    this.role = null; // 'host' ou 'client'
    this.teamId = null;
    this.teamName = null;
    this.avatar = null;
    this.isSimulated = false;
    this.callbacks = {};
    this.isConnected = false;
    this.virtualTeams = [];
    this.virtualInterval = null;
    this.manualClose = false;
    this.heartbeatTimer = null;
    this.wakeLock = null;
    this.lifecycleBound = false;
    this.hiddenAt = 0;
    this.hasBeenReady = false;
    this.activeIndex = 0; // broker do aluno

    // Estado do docente: contador de mensagens de estado e último estado emitido
    this.stateSeq = 0;
    this.lastState = null;

    // Estado do aluno: última mensagem de estado aplicada e voto por entregar
    this.lastSeq = -1;
    this.lastQuestionSeq = -1;
    this.clientPhase = null;
    this.pendingAnswer = null;

    // Brokers públicos gratuitos com suporte seguro a WebSockets (WSS)
    this.brokers = [
      { host: 'broker.hivemq.com', port: 8884, path: '/mqtt' },
      { host: 'broker.emqx.io', port: 8084, path: '/mqtt' }
    ];
  }

  // Registo de eventos
  on(event, callback) {
    if (!this.callbacks[event]) this.callbacks[event] = [];
    this.callbacks[event].push(callback);
  }

  emit(event, data) {
    if (this.callbacks[event]) {
      this.callbacks[event].forEach(cb => {
        try { cb(data); } catch (e) { console.error(`Erro no listener ${event}:`, e); }
      });
    }
  }

  // Iniciar ligação
  connect({ roomPin, role, teamName = '', avatar = '🩺', isSimulated = false }) {
    this.closeAllLinks();
    this.roomPin = roomPin.toUpperCase().trim();
    this.role = role;
    this.teamName = teamName.trim();
    this.avatar = avatar;
    this.isSimulated = isSimulated;
    this.manualClose = false;
    this.hasBeenReady = false;
    this.stateSeq = 0;
    this.lastState = role === 'host' ? { phase: 'LOBBY', teamsCount: 0, seq: 0 } : null;
    this.lastSeq = -1;
    this.lastQuestionSeq = -1;
    this.clientPhase = null;
    this.pendingAnswer = null;

    if (role === 'client') {
      // Na mesma sala a equipa mantém sempre o mesmo identificador, para não perder a pontuação
      const saved = arenaLoadClientSession();
      this.teamId = (saved && saved.roomPin === this.roomPin)
        ? saved.teamId
        : 'team_' + Math.random().toString(36).substring(2, 9);
      this.saveClientSession();
    } else {
      this.teamId = 'host_' + Math.random().toString(36).substring(2, 9);
    }

    if (this.isSimulated) {
      this.setupSimulation();
      return;
    }

    if (typeof Paho === 'undefined') {
      console.warn("Paho MQTT não encontrado. A ativar modo simulação local como fallback seguro.");
      this.setupSimulation();
      return;
    }

    this.bindLifecycleEvents();
    this.requestWakeLock();

    if (role === 'host') {
      this.brokers.forEach((b, i) => this.openLink(i));
    } else {
      this.activeIndex = Math.floor(Math.random() * this.brokers.length);
      this.openLink(this.activeIndex);
    }
  }

  saveClientSession() {
    if (this.role !== 'client') return;
    arenaStorageSet(ARENA_SESSION_KEY, JSON.stringify({
      roomPin: this.roomPin,
      teamId: this.teamId,
      teamName: this.teamName,
      avatar: this.avatar,
      ts: Date.now()
    }));
  }

  // -------------------------------------------------------------------------
  // Ligações aos brokers
  // -------------------------------------------------------------------------
  openLink(index, attempt = 0) {
    const broker = this.brokers[index];
    const link = this.links[index] || { index, client: null, connected: false, attempt: 0, timer: null, gen: 0 };
    this.links[index] = link;
    link.attempt = attempt;
    link.gen++;
    const gen = link.gen;
    if (link.timer) { clearTimeout(link.timer); link.timer = null; }
    this.detachClient(link);

    try {
      const clientId = `biof_${this.role}_${Math.random().toString(36).substring(2, 10)}`;
      const client = new Paho.MQTT.Client(broker.host, broker.port, broker.path, clientId);
      link.client = client;

      client.onConnectionLost = () => {
        if (gen !== link.gen) return;
        this.onLinkDown(link);
      };
      client.onMessageArrived = (message) => {
        if (gen !== link.gen) return;
        this.handleIncomingMessage(message.destinationName, message.payloadString);
      };

      client.connect({
        useSSL: true,
        timeout: 8,
        keepAliveInterval: 20,
        cleanSession: true,
        onSuccess: () => {
          if (gen !== link.gen) return;
          this.onLinkUp(link);
        },
        onFailure: (err) => {
          if (gen !== link.gen) return;
          console.warn(`Falha na ligação ao broker ${broker.host}:`, err);
          this.onLinkDown(link);
        }
      });
    } catch (err) {
      console.error("Erro ao inicializar cliente MQTT:", err);
      this.onLinkDown(link);
    }
  }

  detachClient(link) {
    if (!link.client) return;
    const old = link.client;
    link.client = null;
    old.onConnectionLost = () => {};
    old.onMessageArrived = () => {};
    try { old.disconnect(); } catch (e) { /* já desligado */ }
  }

  closeAllLinks() {
    this.manualClose = true;
    this.stopHeartbeat();
    Object.values(this.links).forEach(link => {
      link.gen++;
      if (link.timer) clearTimeout(link.timer);
      link.timer = null;
      link.connected = false;
      this.detachClient(link);
    });
    this.links = {};
    this.isConnected = false;
  }

  onLinkUp(link) {
    link.connected = true;
    link.attempt = 0;
    this.refreshConnectedFlag();
    this.subscribeTopics(link);

    this.emit('connection_status', { connected: true, message: 'Conectado à Arena em tempo real!' });

    if (this.role === 'client') {
      this.startHeartbeat();
      this.sendJoin();
      this.resendPendingAnswer();
    } else if (!this.hasBeenReady) {
      this.hasBeenReady = true;
      this.emit('host_ready', { roomPin: this.roomPin });
    }
  }

  onLinkDown(link) {
    link.connected = false;
    this.detachClient(link);
    this.refreshConnectedFlag();
    if (this.manualClose) return;

    if (!this.isConnected) {
      this.emit('connection_status', { connected: false, message: 'Ligação interrompida. A reconectar...' });
    }
    this.scheduleRetry(link);
  }

  refreshConnectedFlag() {
    this.isConnected = Object.values(this.links).some(l => l.connected);
    if (!this.isConnected) this.stopHeartbeat();
  }

  // Espera crescente (1 s, 2 s, 4 s, 8 s...) com um pouco de aleatoriedade; nunca desiste.
  // O aluno alterna de broker a partir da segunda tentativa; o docente fica ligado a todos.
  scheduleRetry(link) {
    if (this.manualClose || link.timer) return;
    link.attempt++;
    const delay = Math.min(1000 * Math.pow(2, Math.min(link.attempt - 1, 3)), 8000) + Math.random() * 600;
    const attempt = link.attempt;
    link.timer = setTimeout(() => {
      link.timer = null;
      if (this.manualClose || link.connected) return;
      if (this.role === 'client' && attempt > 1) {
        const next = (link.index + 1) % this.brokers.length;
        delete this.links[link.index];
        this.activeIndex = next;
        this.openLink(next, attempt);
      } else {
        this.openLink(link.index, attempt);
      }
    }, delay);
  }

  // Renova todas as ligações já (telemóvel desbloqueado, rede recuperada...)
  reviveLinks() {
    if (this.manualClose || this.isSimulated || !this.roomPin) return;
    if (this.role === 'host') {
      this.brokers.forEach((b, i) => this.openLink(i));
    } else {
      Object.keys(this.links).forEach(k => {
        if (+k !== this.activeIndex) {
          const l = this.links[k];
          l.gen++;
          if (l.timer) clearTimeout(l.timer);
          this.detachClient(l);
          delete this.links[k];
        }
      });
      this.openLink(this.activeIndex);
    }
  }

  bindLifecycleEvents() {
    if (this.lifecycleBound || typeof document === 'undefined') return;
    this.lifecycleBound = true;

    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        this.hiddenAt = Date.now();
      } else {
        this.onResume(false);
      }
    });
    window.addEventListener('online', () => this.onResume(true));
    window.addEventListener('pageshow', (e) => { if (e.persisted) this.onResume(true); });
  }

  onResume(force) {
    if (this.manualClose || this.isSimulated || !this.roomPin) return;
    const away = this.hiddenAt ? Date.now() - this.hiddenAt : 0;
    this.hiddenAt = 0;
    this.requestWakeLock();
    // Depois de algum tempo em segundo plano a ligação pode estar morta sem o navegador o saber
    if (force || away > ARENA_AWAY_RECONNECT_MS || !this.isConnected) {
      this.reviveLinks();
    } else if (this.role === 'client') {
      this.sendJoin();
    }
  }

  // Mantém o ecrã ligado durante o quiz (API gratuita do navegador, quando disponível)
  requestWakeLock() {
    try {
      if (!('wakeLock' in navigator) || (this.wakeLock && !this.wakeLock.released)) return;
      navigator.wakeLock.request('screen').then(lock => {
        this.wakeLock = lock;
      }).catch(() => {});
    } catch (e) { /* não suportado */ }
  }

  releaseWakeLock() {
    try {
      if (this.wakeLock) this.wakeLock.release();
    } catch (e) { /* ignorar */ }
    this.wakeLock = null;
  }

  startHeartbeat() {
    if (this.heartbeatTimer || this.role !== 'client') return;
    this.heartbeatTimer = setInterval(() => {
      if (this.isConnected) {
        this.sendJoin();
        if (this.clientPhase !== 'PODIUM') this.saveClientSession();
      }
    }, ARENA_HEARTBEAT_MS);
  }

  stopHeartbeat() {
    if (this.heartbeatTimer) clearInterval(this.heartbeatTimer);
    this.heartbeatTimer = null;
  }

  subscribeTopics(link) {
    const baseTopic = `biofisica/arena/${this.roomPin}`;
    const opts = { qos: 1 };

    try {
      if (this.role === 'host') {
        // O Docente escuta novos participantes, votos e pedidos de sincronização
        link.client.subscribe(`${baseTopic}/join`, opts);
        link.client.subscribe(`${baseTopic}/answers`, opts);
        link.client.subscribe(`${baseTopic}/sync_req`, opts);
      } else {
        // O Aluno escuta o estado da partida e revelações
        link.client.subscribe(`${baseTopic}/state`, opts);
        link.client.subscribe(`${baseTopic}/sync_resp/${this.teamId}`, opts);
      }
    } catch (e) {
      console.warn("Erro ao subscrever tópicos:", e);
    }
  }

  publish(subTopic, payloadObj) {
    if (this.isSimulated) {
      this.handleSimulatedPublish(subTopic, payloadObj);
      return;
    }

    const topic = `biofisica/arena/${this.roomPin}/${subTopic}`;
    const msgStr = JSON.stringify(payloadObj);
    let sent = false;

    // O docente publica em todos os brokers; o aluno usa o seu
    Object.values(this.links).forEach(link => {
      if (!link.connected || !link.client) return;
      try {
        const message = new Paho.MQTT.Message(msgStr);
        message.destinationName = topic;
        message.qos = 1; // Entrega garantida pelo menos uma vez
        link.client.send(message);
        sent = true;
      } catch (e) {
        console.error("Erro ao publicar mensagem:", e);
      }
    });
    return sent;
  }

  // Handlers de Mensagens
  handleIncomingMessage(topic, payloadStr) {
    try {
      const data = JSON.parse(payloadStr);
      const parts = topic.split('/');
      const action = parts[parts.length - 2] === 'sync_resp' ? 'sync_resp' : parts[parts.length - 1];

      if (this.role === 'host') {
        if (action === 'join') {
          this.emit('team_joined', data);
        } else if (action === 'answers') {
          this.emit('answer_received', data);
        } else if (action === 'sync_req') {
          this.emit('sync_requested', data);
        }
      } else if (action === 'state' || action === 'sync_resp') {
        // Ignora mensagens repetidas ou fora de ordem (o estado só avança)
        if (typeof data.seq === 'number') {
          if (data.seq <= this.lastSeq) return;
          this.lastSeq = data.seq;
        }
        this.clientPhase = data.phase;
        if (data.phase === 'QUESTION') this.lastQuestionSeq = data.seq;
        this.emit('state_updated', data);
      }
    } catch (e) {
      console.warn("Mensagem MQTT inválida:", e);
    }
  }

  // Ações de Mensagens
  sendJoin() {
    this.publish('join', {
      teamId: this.teamId,
      teamName: this.teamName,
      avatar: this.avatar,
      joinedAt: Date.now(),
      seq: this.lastSeq
    });
  }

  sendAnswer(optionIndex) {
    const payload = {
      teamId: this.teamId,
      teamName: this.teamName,
      avatar: this.avatar,
      optionIndex: optionIndex,
      qSeq: this.lastQuestionSeq,
      submittedAt: Date.now()
    };
    // Se a ligação estiver em baixo, o voto fica guardado e segue assim que ela voltar
    this.pendingAnswer = payload;
    this.publish('answers', payload);
  }

  resendPendingAnswer() {
    const p = this.pendingAnswer;
    if (p && this.clientPhase === 'QUESTION' && p.qSeq === this.lastQuestionSeq) {
      this.publish('answers', p);
    }
  }

  broadcastState(statePayload) {
    const state = { ...statePayload, seq: ++this.stateSeq };
    this.lastState = state;
    this.publish('state', state);
  }

  sendSyncResponse(targetTeamId, statePayload) {
    this.publish(`sync_resp/${targetTeamId}`, statePayload);
  }

  disconnect() {
    if (this.virtualInterval) clearInterval(this.virtualInterval);
    this.closeAllLinks();
    this.releaseWakeLock();
    this.pendingAnswer = null;
  }

  // =========================================================================
  // Modo de Simulação Local (Para testes pelo Docente sem telemóveis reais)
  // =========================================================================
  setupSimulation() {
    this.isSimulated = true;
    this.isConnected = true;
    this.emit('connection_status', {
      connected: true,
      message: 'Modo Simulação Ativo (3 Equipas Virtuais Prontas)'
    });

    if (this.role === 'host') {
      this.virtualTeams = [
        { teamId: 'sim_1', teamName: 'Equipa Alavancas (Simulada)', avatar: '🩺' },
        { teamId: 'sim_2', teamName: 'Seringas de Pascal (Simulada)', avatar: '💉' },
        { teamId: 'sim_3', teamName: 'Centro de Gravidade (Simulada)', avatar: '🦴' }
      ];

      // Simular entrada das equipas com pequeno intervalo
      this.virtualTeams.forEach((t, i) => {
        setTimeout(() => {
          this.emit('team_joined', t);
        }, (i + 1) * 600);
      });
    }
  }

  handleSimulatedPublish(subTopic, payloadObj) {
    // Se o host enviou uma nova pergunta no modo simulação, agendar respostas das equipas virtuais
    if (subTopic === 'state') {
      const state = payloadObj;
      if (state.phase === 'QUESTION') {
        const correctIdx = state.correctIndex;
        this.virtualTeams.forEach(vt => {
          // 80% probabilidade de acertar para criar competição realista
          const willBeCorrect = Math.random() < 0.8;
          const chosenOpt = willBeCorrect ? correctIdx : (correctIdx + 1 + Math.floor(Math.random() * 3)) % 4;
          const delayMs = 3000 + Math.random() * (Math.max(5000, (state.timeRemaining - 5) * 1000));

          setTimeout(() => {
            this.emit('answer_received', {
              teamId: vt.teamId,
              teamName: vt.teamName,
              optionIndex: chosenOpt,
              submittedAt: Date.now()
            });
          }, delayMs);
        });
      }
    }
  }
}
