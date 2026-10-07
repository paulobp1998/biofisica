/**
 * ArenaEngine - Motor Lógico da Arena BioFísica (Formato B: Batalha Síncrona)
 * Gere o fluxo completo de jogo: Lobby, Pergunta com Temporizador, Revelação Pedagógica,
 * Placar ao Vivo, Pódio Final e Relatório de Dificuldade da Turma ("Raio-X da Aula").
 */

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
    this.net.on('team_joined', (data) => {
      if (this.role !== 'host') return;
      if (!this.teams[data.teamId]) {
        this.teams[data.teamId] = {
          teamId: data.teamId,
          teamName: data.teamName || 'Equipa ' + (Object.keys(this.teams).length + 1),
          avatar: data.avatar || '🩺',
          score: 0,
          streak: 0,
          correctCount: 0,
          answers: {}
        };
        this.emitUI('teams_updated', this.getTeamsList());
        this.broadcastLobbyState();
      }
    });

    this.net.on('answer_received', (data) => {
      if (this.role !== 'host' || this.phase !== 'QUESTION') return;
      
      const team = this.teams[data.teamId];
      if (team) {
        this.currentAnswers[data.teamId] = {
          optionIndex: data.optionIndex,
          timeRemaining: data.timeRemaining,
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
      if (this.role !== 'host') return;
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
  startHostSession({ topicId = 1, count = 20, timePerQuestion = 45, isSimulated = false, customQuestions = null }) {
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
    this.currentAnswers = {};
    this.questionStats = [];
    this.phase = 'LOBBY';

    // Gerar PIN da Sala amigável de 4 dígitos (ex.: BF-4829)
    const pinDigits = Math.floor(1000 + Math.random() * 9000);
    const roomPin = `BF-${pinDigits}`;

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
    if (typeof TOPICS_DATA !== 'undefined') {
      const t = TOPICS_DATA.find(item => item.id == topicId);
      if (t) return t.title;
    }
    return 'Tópico ' + topicId;
  }

  getTeamsList() {
    return Object.values(this.teams).sort((a, b) => b.score - a.score);
  }

  broadcastLobbyState() {
    this.net.broadcastState({
      phase: 'LOBBY',
      teamsCount: Object.keys(this.teams).length,
      teams: this.getTeamsList().map(t => ({ teamId: t.teamId, teamName: t.teamName, avatar: t.avatar }))
    });
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
      totalQuestions: this.questions.length
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
    this.net.sendAnswer(optionIndex, this.timeRemaining);
    this.playSound('tick');
    this.emitUI('client_answer_submitted', { optionIndex });
  }

  handleClientStateUpdate(state) {
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
        timeRemaining: state.timeRemaining
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
      this.playSound('fanfare');
    }
  }

  sendSyncStateToTeam(targetTeamId) {
    // Envia o estado atual caso uma equipa tenha recarregado a página
    const currentQ = this.questions[this.currentQuestionIndex];
    this.net.sendSyncResponse(targetTeamId, {
      phase: this.phase,
      questionIndex: this.currentQuestionIndex + 1,
      totalQuestions: this.questions.length,
      question: currentQ ? currentQ.question : '',
      options: currentQ ? currentQ.options : [],
      timeRemaining: this.timeRemaining
    });
  }

  cleanup() {
    clearInterval(this.timerInterval);
    this.net.disconnect();
    this.phase = 'IDLE';
  }
}
