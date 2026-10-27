/**
 * ArenaEngine - Motor Lógico da Arena BioFísica (Formato B: Batalha Síncrona)
 * Gere o fluxo completo de jogo: Lobby, Pergunta com Temporizador, Revelação Pedagógica,
 * Placar ao Vivo, Pódio Final e Relatório de Dificuldade da Turma ("Raio-X da Aula").
 */

const ARENA_MAX_TEAMS = 80;

class ArenaEngine {
  constructor(network) {
    this.net = network;
    this.role = null; // 'host' ou 'client'
    
    // Estado do Jogo
    this.phase = 'IDLE'; // IDLE, LOBBY, QUESTION, REVEAL, LEADERBOARD, PODIUM
    this.topicId = 1;
    this.questionCount = 20;
    this.timePerQuestion = 45; // segundos recomendados para debate em grupo de 4
    this.questions = [];
    this.currentQuestionIndex = 0;
    this.timeRemaining = 0;
    this.timerInterval = null;
    this.isPaused = false;
    
    // Dados das Equipas
    this.lastSyncAt = {}; // { teamId: instante da última sincronização enviada }
    this.questionSeq = -1; // seq da mensagem de estado da pergunta atual
    this.teams = {}; // { teamId: { teamId, teamName, avatar, score, streak, correctCount, answers: {} } }
    this.currentAnswers = {}; // { teamId: { optionIndex, timeRemaining, points, isCorrect } }
    
    // Estatísticas da Aula para o Docente
    this.questionStats = []; // { questionIndex, questionId, questionText, correctIndex, errorRate, teamAnswers }
    
    // Som
    this.audioEnabled = true;
    this.audioCtx = null;

    // Registo de Listeners de UI
    this.uiCallbacks = {};

    this.initNetworkListeners();
  }

  onUI(event, callback) {
    if (!this.uiCallbacks[event]) this.uiCallbacks[event] = [];
    this.uiCallbacks[event].push(callback);
  }

  emitUI(event, data) {
    if (this.uiCallbacks[event]) {
      this.uiCallbacks[event].forEach(cb => {
        try { cb(data); } catch (e) { console.error(`Erro UI ${event}:`, e); }
      });
    }
  }

  // =========================================================================
  // Inicialização do Áudio Sintetizado (Web Audio API - 0 Ficheiros Externos)
  // =========================================================================
  initAudio() {
    if (!this.audioCtx && typeof window !== 'undefined') {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) this.audioCtx = new AudioContextClass();
    }
  }

  playSound(type) {
    if (!this.audioEnabled) return;
    try {
      this.initAudio();
      if (!this.audioCtx) return;
      if (this.audioCtx.state === 'suspended') this.audioCtx.resume();

      const now = this.audioCtx.currentTime;
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      if (type === 'tick') {
        osc.frequency.setValueAtTime(600, now);
        gain.gain.setValueAtTime(0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
        osc.start(now);
        osc.stop(now + 0.08);
      } else if (type === 'correct') {
        osc.frequency.setValueAtTime(523.25, now); // C5
        osc.frequency.setValueAtTime(659.25, now + 0.1); // E5
        osc.frequency.setValueAtTime(783.99, now + 0.2); // G5
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);
        osc.start(now);
        osc.stop(now + 0.45);
      } else if (type === 'wrong') {
        osc.frequency.setValueAtTime(311.13, now); // Eb4
        osc.frequency.setValueAtTime(293.66, now + 0.15); // D4
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
        osc.start(now);
        osc.stop(now + 0.35);
      } else if (type === 'fanfare') {
        // Sequência festiva para o Pódio
        [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => {
          const o = this.audioCtx.createOscillator();
          const g = this.audioCtx.createGain();
          o.connect(g);
          g.connect(this.audioCtx.destination);
          o.frequency.setValueAtTime(freq, now + i * 0.12);
          g.gain.setValueAtTime(0.15, now + i * 0.12);
          g.gain.exponentialRampToValueAtTime(0.001, now + i * 0.12 + 0.4);
          o.start(now + i * 0.12);
          o.stop(now + i * 0.12 + 0.4);
        });
      }
    } catch (e) {
      console.warn("Erro no áudio:", e);
    }
  }

  // =========================================================================
  // Listeners de Rede
  // =========================================================================
  initNetworkListeners() {
    // Entrada de uma equipa, e também o "sinal de vida" que cada telemóvel envia de 12 em 12 s
    this.net.on('team_joined', (data) => {
      if (this.role !== 'host' || !data) return;
      const isKnown = !!this.teams[data.teamId];
      const team = this.registerTeam(data);
      if (!team) {
        if (typeof data.seq === 'number') {
          this.net.sendSyncResponse(data.teamId, { phase: 'FULL', maxTeams: ARENA_MAX_TEAMS });
        }
        return;
      }

      // Equipa nova, ou telemóvel com o estado desatualizado (ligação perdida, página recarregada):
      // reenviar o estado atual para que volte ao ponto certo do jogo
      if (typeof data.seq === 'number' && (!isKnown || data.seq !== this.net.stateSeq)) {
        const now = Date.now();
        if (now - (this.lastSyncAt[data.teamId] || 0) > 2500) {
          this.lastSyncAt[data.teamId] = now;
          this.sendSyncStateToTeam(data.teamId);
        }
      }
    });

    this.net.on('answer_received', (data) => {
      if (this.role !== 'host' || this.phase !== 'QUESTION' || !data) return;
      // O anfitrião não confia nos valores enviados pelos telemóveis
      if (!Number.isInteger(data.optionIndex) || data.optionIndex < 0 || data.optionIndex > 3) return;
      // Voto tardio de uma pergunta anterior (reenviado após reconexão): ignorar
      if (typeof data.qSeq === 'number' && data.qSeq !== this.questionSeq) return;
      // Relógio do docente: o tempo restante não vem do telemóvel (que não tem contagem decrescente)
      const timeRemaining = Math.min(Math.max(this.timeRemaining, 0), this.timePerQuestion);

      // Se o registo de entrada se perdeu, o voto regista a equipa em vez de ser descartado
      const team = this.teams[data.teamId] || this.registerTeam(data);
      if (team) {
        this.currentAnswers[data.teamId] = {
          optionIndex: data.optionIndex,
          timeRemaining: timeRemaining,
          submittedAt: data.submittedAt
        };

        const totalTeams = Object.keys(this.teams).length;
        const answeredCount = Object.keys(this.currentAnswers).length;
        this.emitUI('answers_progress', { answeredCount, totalTeams, teamId: data.teamId });

        // Se todas as equipas responderam antes de esgotar o tempo, avançar automaticamente para a revelação!
        if (totalTeams > 0 && answeredCount >= totalTeams) {
          clearInterval(this.timerInterval);
          setTimeout(() => this.revealQuestion(), 800);
        }
      }
    });

    this.net.on('sync_requested', (data) => {
      if (this.role !== 'host' || !data) return;
      if (!this.registerTeam(data)) return;
      this.sendSyncStateToTeam(data.teamId);
    });

    this.net.on('state_updated', (state) => {
      if (this.role !== 'client') return;
      this.handleClientStateUpdate(state);
    });
  }

  // =========================================================================
  // FLUXO DO DOCENTE (HOST)
  // =========================================================================
  startHostSession({ topicId = 1, count = 20, timePerQuestion = 45, isSimulated = false, customQuestions = null, quizName = null }) {
    try {
      if (typeof window !== 'undefined' && window.sessionStorage) {
        if (window.sessionStorage.getItem('arena_host_authenticated') !== 'true') {
          console.warn('[ArenaEngine] Acesso não autenticado como docente.');
          return;
        }
      }
    } catch (e) {}

    this.role = 'host';
    this.topicId = topicId;
    this.timePerQuestion = timePerQuestion;
    this.currentQuestionIndex = 0;
    this.teams = {};
    this.lastSyncAt = {};
    this.questionSeq = -1;
    this.currentAnswers = {};
    this.questionStats = [];
    this.sessionLog = []; // uma linha por equipa e por pergunta (exportação CSV)
    this.quizName = quizName;
    this.sessionStartedAt = new Date().toISOString();
    this.phase = 'LOBBY';

    // Gerar PIN da Sala com 6 caracteres aleatórios (ex.: BF-7KQ4M2), sem caracteres ambíguos
    const pinAlphabet = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    const pinBytes = crypto.getRandomValues(new Uint8Array(6));
    const pinChars = Array.from(pinBytes, b => pinAlphabet[b % pinAlphabet.length]).join('');
    const roomPin = `BF-${pinChars}`;
    this.roomPin = roomPin;

    // Selecionar perguntas: lista personalizada pelo docente OU sorteio aleatório
    if (Array.isArray(customQuestions) && customQuestions.length > 0) {
      this.questions = [...customQuestions];
      this.questionCount = this.questions.length;
    } else {
      this.questionCount = count;
      this.questions = this.pickQuestions(this.topicId, this.questionCount);
    }

    // Ligar à rede
    this.net.connect({
      roomPin: roomPin,
      role: 'host',
      isSimulated: isSimulated
    });

    const topicLabel = (Array.isArray(customQuestions) && customQuestions.length > 0)
      ? `Seleção Manual do Docente (${this.questions.length} Perguntas)`
      : this.getTopicName(this.topicId);

    this.emitUI('host_lobby_ready', {
      roomPin: roomPin,
      questionCount: this.questions.length,
      timePerQuestion: this.timePerQuestion,
      topicName: topicLabel
    });
  }

  pickQuestions(topicId, count) {
    let pool = [];
    if ((topicId === 'all' || topicId === 'all-unlocked') && typeof QUESTIONS_DATA !== 'undefined') {
      pool = [...QUESTIONS_DATA];
    } else if (String(topicId).includes(',') && typeof QUESTIONS_DATA !== 'undefined') {
      // Combinação de tópicos (ex.: "1,2")
      const ids = String(topicId).split(',').map(Number);
      pool = QUESTIONS_DATA.filter(q => ids.includes(q.topicId));
    } else if (typeof ALL_TOPIC_COLLECTIONS !== 'undefined' && ALL_TOPIC_COLLECTIONS[topicId]) {
      pool = [...ALL_TOPIC_COLLECTIONS[topicId]];
    } else if (typeof TOPIC_1_QUESTIONS !== 'undefined') {
      pool = [...TOPIC_1_QUESTIONS];
    }

    if (pool.length === 0) return [];

    // Embaralhar com algoritmo Fisher-Yates
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }

    return pool.slice(0, Math.min(count, pool.length));
  }

  getTopicName(topicId) {
    if (topicId === 'all' || topicId === 'all-unlocked') {
      return 'Todos os Tópicos Ativos';
    }
    if (String(topicId).includes(',')) {
      const ids = String(topicId).split(',');
      return 'Tópicos ' + ids.slice(0, -1).join(', ') + ' e ' + ids[ids.length - 1];
    }
    if (typeof TOPICS_DATA !== 'undefined') {
      const t = TOPICS_DATA.find(item => item.id == topicId);
      if (t) return t.title;
    }
    return 'Tópico ' + topicId;
  }

  getTeamsList() {
    return Object.values(this.teams).sort((a, b) => b.score - a.score);
  }

  // Regista uma equipa (ou devolve a que já existe). Devolve null se a sala estiver cheia ou os dados forem inválidos.
  registerTeam(data) {
    const id = data && typeof data.teamId === 'string' ? data.teamId : '';
    if (!id || id.length > 64) return null;
    if (this.teams[id]) return this.teams[id];
    if (Object.keys(this.teams).length >= ARENA_MAX_TEAMS) return null;

    this.teams[id] = {
      teamId: id,
      teamName: String(data.teamName || '').slice(0, 25) || 'Equipa ' + (Object.keys(this.teams).length + 1),
      avatar: Array.from(String(data.avatar || '')).slice(0, 6).join('') || '🩺',
      score: 0,
      streak: 0,
      correctCount: 0,
      answers: {}
    };
    this.emitUI('teams_updated', this.getTeamsList());
    return this.teams[id];
  }

  // Iniciar a primeira pergunta
  startBattle() {
    if (this.role !== 'host') return;
    if (Object.keys(this.teams).length === 0 && !this.net.isSimulated) {
      alert("Aguarde que pelo menos uma equipa entre na sala antes de iniciar a batalha!");
      return;
    }

    this.currentQuestionIndex = 0;
    this.loadQuestion(0);
  }

  // Carregar e transmitir uma pergunta
  loadQuestion(index) {
    if (index >= this.questions.length) {
      this.finishBattle();
      return;
    }

    this.phase = 'QUESTION';
    this.currentQuestionIndex = index;
    this.currentAnswers = {};
    this.timeRemaining = this.timePerQuestion;
    this.isPaused = false;
    clearInterval(this.timerInterval);

    const q = this.questions[index];

    // Payload transmitido às equipas (SEM correctIndex nem distractorAnalysis para evitar batota!)
    const publicQuestionPayload = {
      phase: 'QUESTION',
      questionIndex: index + 1,
      totalQuestions: this.questions.length,
      id: q.id,
      question: q.question,
      options: q.options,
      timeRemaining: this.timeRemaining,
      // Passar correctIndex internamente apenas se estiver no modo simulação para as equipas virtuais responderem
      correctIndex: this.net.isSimulated ? q.correctIndex : undefined
    };

    this.net.broadcastState(publicQuestionPayload);
    this.questionSeq = this.net.stateSeq;

    this.emitUI('question_started', {
      questionIndex: index + 1,
      totalQuestions: this.questions.length,
      question: q,
      timeRemaining: this.timeRemaining,
      teams: this.getTeamsList()
    });

    // Iniciar temporizador síncrono
    this.timerInterval = setInterval(() => {
      if (this.isPaused) return;

      this.timeRemaining--;
      if (this.timeRemaining <= 5 && this.timeRemaining > 0) {
        this.playSound('tick');
      }

      this.emitUI('timer_tick', { timeRemaining: this.timeRemaining, totalTime: this.timePerQuestion });

      if (this.timeRemaining <= 0) {
        clearInterval(this.timerInterval);
        this.revealQuestion();
      }
    }, 1000);
  }

  togglePause() {
    this.isPaused = !this.isPaused;
    return this.isPaused;
  }

  skipQuestionTimer() {
    clearInterval(this.timerInterval);
    this.revealQuestion();
  }

  // Revelação da Resposta e Explicação Clínica
  revealQuestion() {
    if (this.phase !== 'QUESTION') return;
    this.phase = 'REVEAL';
    clearInterval(this.timerInterval);

    const q = this.questions[this.currentQuestionIndex];
    const correctIdx = q.correctIndex;

    // Distribuição de respostas por opção
    const optionCounts = [0, 0, 0, 0];
    let correctTeamsCount = 0;
    const totalTeams = Object.keys(this.teams).length;

    // Calcular pontuação de cada equipa
    Object.keys(this.teams).forEach(teamId => {
      const team = this.teams[teamId];
      const answer = this.currentAnswers[teamId];

      if (answer) {
        optionCounts[answer.optionIndex]++;

        if (answer.optionIndex === correctIdx) {
          correctTeamsCount++;
          team.streak++;
          team.correctCount++;

          // Fórmula de Pontuação Justa & Estimulante:
          // 1.000 pts base + até 500 pts por rapidez + bónus de streak (+100, +200...)
          const speedFactor = answer.timeRemaining / this.timePerQuestion;
          const speedBonus = Math.round(500 * Math.max(0, speedFactor));
          const streakBonus = (team.streak - 1) * 100;
          const pointsEarned = 1000 + speedBonus + streakBonus;

          team.score += pointsEarned;
          answer.points = pointsEarned;
          answer.isCorrect = true;
        } else {
          team.streak = 0;
          answer.points = 0;
          answer.isCorrect = false;
        }
      } else {
        // Não respondeu a tempo
        team.streak = 0;
      }
    });

    // Registo de cada equipa nesta pergunta (para a exportação CSV)
    Object.keys(this.teams).forEach(teamId => {
      const answer = this.currentAnswers[teamId];
      this.sessionLog.push({
        questionIndex: this.currentQuestionIndex + 1,
        questionId: q.id,
        teamName: this.teams[teamId].teamName,
        option: answer ? answer.optionIndex : null,
        correctIndex: correctIdx,
        correct: !!(answer && answer.isCorrect),
        points: answer ? (answer.points || 0) : 0,
        timeRemaining: answer ? answer.timeRemaining : null
      });
    });

    const errorRate = totalTeams > 0 ? Math.round(((totalTeams - correctTeamsCount) / totalTeams) * 100) : 0;

    // Guardar para o Raio-X pedagógico pós-jogo
    this.questionStats.push({
      questionIndex: this.currentQuestionIndex + 1,
      questionId: q.id,
      questionText: q.question,
      correctIndex: correctIdx,
      explanation: q.explanation,
      distractorAnalysis: q.distractorAnalysis,
      nursingApplication: q.nursingApplication,
      errorRate: errorRate,
      correctTeamsCount: correctTeamsCount,
      totalTeams: totalTeams
    });

    // Transmitir revelação a todos os telemóveis
    this.net.broadcastState({
      phase: 'REVEAL',
      questionIndex: this.currentQuestionIndex + 1,
      question: q.question,
      options: q.options,
      correctIndex: correctIdx,
      explanation: q.explanation,
      distractorAnalysis: q.distractorAnalysis,
      nursingApplication: q.nursingApplication,
      optionCounts: optionCounts,
      resultsByTeam: Object.keys(this.currentAnswers).reduce((acc, tId) => {
        acc[tId] = {
          isCorrect: this.currentAnswers[tId].isCorrect,
          points: this.currentAnswers[tId].points,
          currentScore: this.teams[tId].score,
          streak: this.teams[tId].streak
        };
        return acc;
      }, {})
    });

    this.playSound(correctTeamsCount > totalTeams / 2 ? 'correct' : 'wrong');

    this.emitUI('question_revealed', {
      question: q,
      optionCounts: optionCounts,
      correctTeamsCount: correctTeamsCount,
      totalTeams: totalTeams,
      rankings: this.getTeamsList()
    });
  }

  // Mostrar Leaderboard Parcial
  showLeaderboard() {
    this.phase = 'LEADERBOARD';
    const rankings = this.getTeamsList();

    this.net.broadcastState({
      phase: 'LEADERBOARD',
      rankings: rankings.map((t, idx) => ({
        rank: idx + 1,
        teamId: t.teamId,
        teamName: t.teamName,
        avatar: t.avatar,
        score: t.score,
        streak: t.streak
      }))
    });

    this.emitUI('leaderboard_updated', {
      rankings: rankings,
      isLastQuestion: this.currentQuestionIndex + 1 >= this.questions.length
    });
  }

  // Avançar para a próxima pergunta
  nextQuestion() {
    this.loadQuestion(this.currentQuestionIndex + 1);
  }

  // Finalizar e Apresentar Pódio + Raio-X Pedagógico
  // Resumo da sessão: ranking por equipa e registo por equipa e pergunta
  buildSessionResult(rankings) {
    return {
      startedAt: this.sessionStartedAt,
      roomPin: this.roomPin || '',
      quizName: this.quizName || this.getTopicName(this.topicId),
      questionsTotal: this.questions.length,
      teams: rankings.map((t, idx) => ({
        rank: idx + 1,
        teamName: t.teamName,
        score: t.score,
        correct: t.correctCount
      })),
      log: this.sessionLog
    };
  }

  finishBattle() {
    this.phase = 'PODIUM';
    const rankings = this.getTeamsList();
    const winners = rankings.slice(0, 3);

    // Encontrar as 3 perguntas com maior taxa de erro para o professor rever em aula
    const hardestQuestions = [...this.questionStats]
      .sort((a, b) => b.errorRate - a.errorRate)
      .slice(0, 3);

    this.net.broadcastState({
      phase: 'PODIUM',
      winners: winners.map((t, i) => ({ rank: i + 1, teamName: t.teamName, avatar: t.avatar, score: t.score })),
      rankings: rankings
    });

    this.playSound('fanfare');

    this.emitUI('podium_ready', {
      winners: winners,
      rankings: rankings,
      hardestQuestions: hardestQuestions,
      totalQuestions: this.questions.length,
      session: this.buildSessionResult(rankings)
    });
  }

  // =========================================================================
  // FLUXO DA EQUIPA / ALUNO (CLIENTE)
  // =========================================================================
  joinClientSession({ roomPin, teamName, avatar = '🩺' }) {
    this.role = 'client';
    this.net.connect({
      roomPin: roomPin,
      role: 'client',
      teamName: teamName,
      avatar: avatar
    });

    this.emitUI('client_connected', {
      roomPin: roomPin,
      teamName: teamName,
      avatar: avatar
    });
  }

  submitClientAnswer(optionIndex) {
    if (this.role !== 'client') return;
    this.net.sendAnswer(optionIndex);
    this.playSound('tick');
    this.emitUI('client_answer_submitted', { optionIndex });
  }

  handleClientStateUpdate(state) {
    if (state.phase === 'FULL') {
      // Sala com o número máximo de equipas: deixar de tentar entrar
      arenaClearClientSession();
      this.net.disconnect();
      this.emitUI('client_room_full', { maxTeams: state.maxTeams || ARENA_MAX_TEAMS });
      return;
    }
    this.phase = state.phase;

    if (state.phase === 'LOBBY') {
      this.emitUI('client_lobby_waiting', { teamsCount: state.teamsCount });
    } else if (state.phase === 'QUESTION') {
      this.timeRemaining = state.timeRemaining;
      this.emitUI('client_question_ready', {
        questionIndex: state.questionIndex,
        totalQuestions: state.totalQuestions,
        id: state.id,
        question: state.question,
        options: state.options,
        timeRemaining: state.timeRemaining,
        myVote: Number.isInteger(state.myVote) ? state.myVote : null
      });
    } else if (state.phase === 'REVEAL') {
      const myTeamId = this.net.teamId;
      const myResult = state.resultsByTeam && state.resultsByTeam[myTeamId];
      this.emitUI('client_round_result', {
        question: state.question,
        options: state.options,
        correctIndex: state.correctIndex,
        explanation: state.explanation,
        distractorAnalysis: state.distractorAnalysis,
        nursingApplication: state.nursingApplication,
        myResult: myResult || { isCorrect: false, points: 0, currentScore: 0 }
      });
      if (myResult && myResult.isCorrect) {
        this.playSound('correct');
      } else {
        this.playSound('wrong');
      }
    } else if (state.phase === 'LEADERBOARD') {
      const myTeamId = this.net.teamId;
      const myRankInfo = (state.rankings || []).find(r => r.teamId === myTeamId);
      this.emitUI('client_leaderboard', {
        rankings: state.rankings,
        myRankInfo: myRankInfo
      });
    } else if (state.phase === 'PODIUM') {
      const myTeamId = this.net.teamId;
      const myFinalRank = (state.rankings || []).findIndex(r => r.teamId === myTeamId) + 1;
      this.emitUI('client_podium_final', {
        winners: state.winners,
        myFinalRank: myFinalRank > 0 ? myFinalRank : null
      });
      arenaClearClientSession(); // jogo terminado: não retomar na próxima visita
      this.playSound('fanfare');
    }
  }

  sendSyncStateToTeam(targetTeamId) {
    // Reenvia a última mensagem de estado (completa) a uma equipa que perdeu a ligação ou recarregou a página
    const last = this.net.lastState;
    if (!last) return;
    const payload = { ...last };
    if (payload.phase === 'LOBBY') {
      payload.teamsCount = Object.keys(this.teams).length;
    } else if (payload.phase === 'QUESTION') {
      payload.timeRemaining = Math.max(this.timeRemaining, 0);
      const answer = this.currentAnswers[targetTeamId];
      if (answer) payload.myVote = answer.optionIndex;
    }
    this.net.sendSyncResponse(targetTeamId, payload);
  }

  cleanup() {
    if (this.role === 'client') arenaClearClientSession();
    clearInterval(this.timerInterval);
    this.net.disconnect();
    this.phase = 'IDLE';
  }
}
