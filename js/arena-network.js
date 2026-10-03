/**
 * ArenaNetwork - Camada de Comunicação em Tempo Real (100% Gratuita)
 * Suporta WebSockets sobre TLS (WSS) via brokers MQTT públicos com redundância automática
 * e Modo Simulação Local (para teste sem internet ou telemóveis).
 */

class ArenaNetwork {
  constructor() {
    this.client = null;
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

    // Brokers públicos gratuitos com suporte seguro a WebSockets (WSS)
    this.brokers = [
      { host: 'broker.hivemq.com', port: 8884, path: '/mqtt' },
      { host: 'broker.emqx.io', port: 8084, path: '/mqtt' }
    ];
    this.currentBrokerIndex = 0;
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
    this.roomPin = roomPin.toUpperCase().trim();
    this.role = role;
    this.teamName = teamName.trim();
    this.avatar = avatar;
    this.isSimulated = isSimulated;
    this.teamId = role === 'client' 
      ? (sessionStorage.getItem('arena_team_id') || 'team_' + Math.random().toString(36).substring(2, 9))
      : 'host_' + Math.random().toString(36).substring(2, 9);
    
    if (role === 'client') {
      sessionStorage.setItem('arena_team_id', this.teamId);
      sessionStorage.setItem('arena_team_name', this.teamName);
      sessionStorage.setItem('arena_team_avatar', this.avatar);
      sessionStorage.setItem('arena_room_pin', this.roomPin);
    }

    if (this.isSimulated) {
      this.setupSimulation();
      return;
    }

    this.connectToBroker(0);
  }

  connectToBroker(index) {
    if (typeof Paho === 'undefined') {
      console.warn("Paho MQTT não encontrado. A ativar modo simulação local como fallback seguro.");
      this.setupSimulation();
      return;
    }

    this.currentBrokerIndex = index;
    const broker = this.brokers[index];
    const clientId = `biof_${this.role}_${Math.random().toString(36).substring(2, 10)}`;

    try {
      this.client = new Paho.MQTT.Client(broker.host, broker.port, broker.path, clientId);

      this.client.onConnectionLost = (responseObject) => {
        this.isConnected = false;
        this.emit('connection_status', { connected: false, message: 'Ligação interrompida. A reconectar...' });
        if (responseObject.errorCode !== 0) {
          console.warn("Ligação MQTT perdida:", responseObject.errorMessage);
          // Tentar reconectar após 2 segundos
          setTimeout(() => this.reconnect(), 2000);
        }
      };

      this.client.onMessageArrived = (message) => {
        this.handleIncomingMessage(message.destinationName, message.payloadString);
      };

      const options = {
        useSSL: true,
        timeout: 6,
        keepAliveInterval: 30,
        cleanSession: true,
        onSuccess: () => {
          this.isConnected = true;
          this.subscribeTopics();
          this.emit('connection_status', { connected: true, message: 'Conectado à Arena em tempo real!' });

          // Se for cliente, enviar anúncio de entrada
          if (this.role === 'client') {
            this.sendJoin();
          } else {
            // Host solicita eventuais equipas
            this.emit('host_ready', { roomPin: this.roomPin });
          }
        },
        onFailure: (err) => {
          console.warn(`Falha na ligação ao broker ${broker.host}:`, err);
          if (index + 1 < this.brokers.length) {
            // Tentar próximo broker
            this.connectToBroker(index + 1);
          } else {
            this.emit('connection_status', { 
              connected: false, 
              message: 'Não foi possível ligar ao servidor ao vivo. Podes ativar o Modo Simulação para testar sem rede.' 
            });
          }
        }
      };

      this.client.connect(options);
    } catch (err) {
      console.error("Erro ao inicializar cliente MQTT:", err);
      this.setupSimulation();
    }
  }

  reconnect() {
    if (this.client && !this.isConnected && !this.isSimulated) {
      try {
        this.client.connect({
          useSSL: true,
          timeout: 5,
          onSuccess: () => {
            this.isConnected = true;
            this.subscribeTopics();
            if (this.role === 'client') this.sendJoin();
          },
          onFailure: () => {
            // Alternar de broker
            const nextIdx = (this.currentBrokerIndex + 1) % this.brokers.length;
            this.connectToBroker(nextIdx);
          }
        });
      } catch (e) {
        console.warn("Erro ao tentar reconectar:", e);
      }
    }
  }

  subscribeTopics() {
    if (!this.client || !this.isConnected) return;
    const baseTopic = `biofisica/arena/${this.roomPin}`;

    if (this.role === 'host') {
      // O Docente escuta novos participantes e votos
      this.client.subscribe(`${baseTopic}/join`);
      this.client.subscribe(`${baseTopic}/answers`);
      this.client.subscribe(`${baseTopic}/sync_req`);
    } else {
      // O Aluno escuta o estado da partida e revelações
      this.client.subscribe(`${baseTopic}/state`);
      this.client.subscribe(`${baseTopic}/sync_resp/${this.teamId}`);
    }
  }

  publish(subTopic, payloadObj) {
    if (this.isSimulated) {
      this.handleSimulatedPublish(subTopic, payloadObj);
      return;
    }
    if (!this.client || !this.isConnected) return;

    try {
      const topic = `biofisica/arena/${this.roomPin}/${subTopic}`;
      const msgStr = JSON.stringify(payloadObj);
      const message = new Paho.MQTT.Message(msgStr);
      message.destinationName = topic;
      message.qos = 1; // Entrega garantida pelo menos uma vez
      this.client.send(message);
    } catch (e) {
      console.error("Erro ao publicar mensagem:", e);
    }
  }

  // Handlers de Mensagens
  handleIncomingMessage(topic, payloadStr) {
    try {
      const data = JSON.parse(payloadStr);
      const parts = topic.split('/');
      const action = parts[parts.length - 1];

      if (this.role === 'host') {
        if (action === 'join') {
          this.emit('team_joined', data);
        } else if (action === 'answers') {
          this.emit('answer_received', data);
        } else if (action === 'sync_req') {
          this.emit('sync_requested', data);
        }
      } else {
        if (action === 'state' || action.startsWith('sync_resp')) {
          this.emit('state_updated', data);
        }
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
      joinedAt: Date.now()
    });
  }

  sendAnswer(optionIndex, timeRemaining) {
    this.publish('answers', {
      teamId: this.teamId,
      teamName: this.teamName,
      optionIndex: optionIndex,
      timeRemaining: timeRemaining,
      submittedAt: Date.now()
    });
  }

  broadcastState(statePayload) {
    this.publish('state', statePayload);
  }

  sendSyncResponse(targetTeamId, statePayload) {
    this.publish(`sync_resp/${targetTeamId}`, statePayload);
  }

  disconnect() {
    if (this.virtualInterval) clearInterval(this.virtualInterval);
    if (this.client && this.isConnected) {
      try { this.client.disconnect(); } catch (e) {}
    }
    this.isConnected = false;
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
              timeRemaining: Math.max(1, Math.round(state.timeRemaining - (delayMs / 1000))),
              submittedAt: Date.now()
            });
          }, delayMs);
        });
      }
    }
  }
}
