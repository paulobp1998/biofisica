/**
 * Quiz Engine - Gestor da Mecânica de Perguntas e Avaliação
 */

// Rótulo visível de uma pergunta. O ID interno (ex.: 1041) mantém-se nos dados;
// o número mostrado é a posição dentro do tópico (1041 -> Pergunta 41 · Tópico 1).
function questionLabel(id) {
  return `Pergunta ${id % 1000} · Tópico ${Math.floor(id / 1000)}`;
}

// Texto de perguntas com índices (<sub>) e expoentes (<sup>): escapa tudo o resto.
// Os índices escrevem-se F<sub>P</sub> nos dados, nunca F_P.
function richText(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
    .replace(/&lt;(\/?)(sub|sup)&gt;/g, '<$1$2>');
}

// Versão em texto simples (pesquisa, exportações): F<sub>P</sub> -> FP, ou F_P com marker = true.
function plainMathText(str, marker = false) {
  return String(str == null ? '' : str)
    .replace(/<sub>(.*?)<\/sub>/g, marker ? '_$1' : '$1')
    .replace(/<sup>(.*?)<\/sup>/g, marker ? '^$1' : '$1');
}

class QuizEngine {
  constructor() {
    this.currentQuestions = [];
    this.currentIndex = 0;
    this.userAnswers = [];
    this.isAnswered = false;
    this.mode = 'topic'; // 'topic', 'exam' ou 'custom'
    this.feedbackMode = 'immediate'; // 'immediate' (Treino) ou 'delayed' (Frequência Real)
    this.activeTopicId = null;
    this.customTitle = null;
    this.audioEnabled = true;
    this.audioCtx = null;
    this.timerDuration = 0; // segundos
    this.startTime = null;
  }

  // Inicializa o contexto de áudio web (sem ficheiros externos)
  initAudio() {
    if (!this.audioCtx && (window.AudioContext || window.webkitAudioContext)) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      this.audioCtx = new AudioContextClass();
    }
  }

  playBeep(isSuccess) {
    if (!this.audioEnabled) return;
    try {
      this.initAudio();
      if (!this.audioCtx) return;
      if (this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      const now = this.audioCtx.currentTime;
      if (isSuccess) {
        // Dois tons harmónicos ascendentes
        osc.frequency.setValueAtTime(587.33, now); // D5
        osc.frequency.exponentialRampToValueAtTime(880, now + 0.12); // A5
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
        osc.start(now);
        osc.stop(now + 0.35);
      } else {
        // Tom descendente suave
        osc.frequency.setValueAtTime(280, now);
        osc.frequency.exponentialRampToValueAtTime(180, now + 0.2);
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
        osc.start(now);
        osc.stop(now + 0.3);
      }
    } catch (e) {
      console.warn("Audio playback not supported or blocked", e);
    }
  }

  playNeutralTap() {
    if (!this.audioEnabled) return;
    try {
      this.initAudio();
      if (!this.audioCtx) return;
      if (this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      const now = this.audioCtx.currentTime;
      osc.frequency.setValueAtTime(440, now);
      gain.gain.setValueAtTime(0.05, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
      osc.start(now);
      osc.stop(now + 0.08);
    } catch (e) {
      // Ignorar erros de áudio
    }
  }

  // Algoritmo de baralhamento de Fisher-Yates
  shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  // Prepara uma questão mantendo o mapeamento da resposta certa e das explicações
  prepareQuestion(q) {
    const indices = [0, 1, 2, 3];
    const shuffledIndices = this.shuffleArray(indices);
    const shuffledOptions = shuffledIndices.map(i => q.options[i]);
    const newCorrectIndex = shuffledIndices.indexOf(q.correctIndex);

    // Mapear também as justificações dos distratores
    const shuffledDistractorAnalysis = [];
    shuffledIndices.forEach((origIdx, newIdx) => {
      if (origIdx === q.correctIndex) {
        shuffledDistractorAnalysis[newIdx] = null; // É a correta
      } else {
        // Determina o índice correspondente no array de distratores original
        const distractorOrigIdx = origIdx > q.correctIndex ? origIdx - 1 : origIdx;
        const analysis = (q.distractorAnalysis && q.distractorAnalysis.length > 0)
          ? (q.distractorAnalysis[distractorOrigIdx] || q.distractorAnalysis[0])
          : 'Está incorreta no contexto desta questão.';
        shuffledDistractorAnalysis[newIdx] = analysis;
      }
    });

    return {
      originalId: q.id,
      topicId: q.topicId,
      question: q.question,
      isRetry: !!q.isRetry,
      figure: q.figure,
      options: shuffledOptions,
      correctIndex: newCorrectIndex,
      explanation: q.explanation,
      distractorAnalysis: shuffledDistractorAnalysis,
      solution: q.solution,
      nursingApplication: q.nursingApplication,
      optionOrder: shuffledIndices // posição original (no banco) de cada opção mostrada
    };
  }

  // Inicia um teste focado num tópico específico com suporte a quantidade personalizada e modo
  startTopicQuiz(topicId, count = 25, feedbackMode = 'immediate', timerSeconds = 0) {
    this.mode = 'topic';
    this.feedbackMode = feedbackMode;
    this.activeTopicId = topicId;
    this.customTitle = null;
    this.timerDuration = timerSeconds;
    this.startTime = Date.now();

    const rawQuestions = QUESTIONS_DATA.filter(q => q.topicId === topicId);
    const shuffled = this.shuffleArray(rawQuestions);
    const selected = (count && count > 0 && count < shuffled.length) ? shuffled.slice(0, count) : shuffled;
    this.currentQuestions = selected.map(q => this.prepareQuestion(q));
    this.currentIndex = 0;
    this.userAnswers = [];
    this.isAnswered = false;
    return this.getCurrentState();
  }

  // Inicia uma simulação de exame (20 ou 40 perguntas dos tópicos ativos autorizados pelo docente)
  startExamSimulation(numQuestions = 20, feedbackMode = 'immediate', timerSeconds = 0) {
    this.mode = 'exam';
    this.feedbackMode = feedbackMode;
    this.activeTopicId = null;
    this.customTitle = null;
    this.timerDuration = timerSeconds;
    this.startTime = Date.now();

    const activeTopics = (typeof UNLOCKED_TOPIC_IDS !== 'undefined')
      ? TOPICS_DATA.filter(t => UNLOCKED_TOPIC_IDS.includes(t.id))
      : TOPICS_DATA;

    let pool = [];
    if (activeTopics.length === 1) {
      const topicQuestions = QUESTIONS_DATA.filter(q => q.topicId === activeTopics[0].id);
      pool = this.shuffleArray(topicQuestions).slice(0, numQuestions);
    } else {
      const perTopic = Math.floor(numQuestions / activeTopics.length);
      activeTopics.forEach(t => {
        const topicQuestions = QUESTIONS_DATA.filter(q => q.topicId === t.id);
        const shuffled = this.shuffleArray(topicQuestions);
        pool.push(...shuffled.slice(0, perTopic));
      });
      const needed = numQuestions - pool.length;
      if (needed > 0) {
        const remaining = QUESTIONS_DATA.filter(q => !pool.some(p => p.id === q.id));
        const extra = this.shuffleArray(remaining).slice(0, needed);
        pool.push(...extra);
      }
    }
    const selected = this.shuffleArray(pool);

    // Baralha a ordem final do exame
    this.currentQuestions = selected.map(q => this.prepareQuestion(q));
    this.currentIndex = 0;
    this.userAnswers = [];
    this.isAnswered = false;
    return this.getCurrentState();
  }

  // Inicia um teste customizado (ex: Caderno de Erros ou Marcadas)
  startCustomQuiz(questions, title = 'Treino Personalizado', feedbackMode = 'immediate', timerSeconds = 0) {
    this.mode = 'custom';
    this.feedbackMode = feedbackMode;
    this.activeTopicId = null;
    this.customTitle = title;
    this.timerDuration = timerSeconds;
    this.startTime = Date.now();

    const shuffled = this.shuffleArray(questions);
    this.currentQuestions = shuffled.map(q => this.prepareQuestion(q));
    this.currentIndex = 0;
    this.userAnswers = [];
    this.isAnswered = false;
    return this.getCurrentState();
  }

  // Instantâneo do teste em curso (para o retomar após recarregar a página)
  serialize() {
    return {
      mode: this.mode,
      feedbackMode: this.feedbackMode,
      activeTopicId: this.activeTopicId,
      customTitle: this.customTitle,
      timerDuration: this.timerDuration,
      elapsedMs: this.startTime ? Date.now() - this.startTime : 0,
      currentQuestions: this.currentQuestions,
      currentIndex: this.currentIndex,
      userAnswers: this.userAnswers,
      isAnswered: this.isAnswered
    };
  }

  // Repõe um instantâneo; devolve false se estiver incompleto ou corrompido
  restore(snap) {
    if (!snap || !Array.isArray(snap.currentQuestions) || !snap.currentQuestions.length ||
        !Array.isArray(snap.userAnswers) || !Number.isInteger(snap.currentIndex) ||
        snap.currentIndex < 0 || snap.currentIndex >= snap.currentQuestions.length) {
      return false;
    }
    this.mode = snap.mode;
    this.feedbackMode = snap.feedbackMode;
    this.activeTopicId = snap.activeTopicId;
    this.customTitle = snap.customTitle;
    this.timerDuration = snap.timerDuration || 0;
    this.startTime = Date.now() - (snap.elapsedMs || 0);
    this.currentQuestions = snap.currentQuestions;
    this.currentIndex = snap.currentIndex;
    // JSON transforma posições vazias em null: normaliza para undefined
    this.userAnswers = snap.userAnswers.map(a => a || undefined);
    this.isAnswered = !!snap.isAnswered && !!this.userAnswers[this.currentIndex];
    return true;
  }

  getCurrentState() {
    if (this.currentIndex >= this.currentQuestions.length) {
      return {
        isFinished: true,
        summary: this.calculateSummary()
      };
    }

    const q = this.currentQuestions[this.currentIndex];
    const topic = TOPICS_DATA.find(t => t.id === q.topicId);

    return {
      isFinished: false,
      currentIndex: this.currentIndex,
      totalQuestions: this.currentQuestions.length,
      mode: this.mode,
      feedbackMode: this.feedbackMode,
      customTitle: this.customTitle,
      topic: topic,
      questionId: q.originalId,
      isRetry: !!q.isRetry,
      question: q.question,
      figure: q.figure,
      options: q.options,
      isAnswered: this.isAnswered,
      lastAnswer: this.userAnswers[this.currentIndex] || null
    };
  }

  // Índice da opção escolhida no banco (antes de baralhar); -1 se não houver resposta ou mapeamento
  originalOptionIndex(q, shownIndex) {
    return shownIndex >= 0 && Array.isArray(q.optionOrder) ? q.optionOrder[shownIndex] : -1;
  }

  submitAnswer(selectedIndex) {
    const currentQ = this.currentQuestions[this.currentIndex];
    const isCorrect = (selectedIndex === currentQ.correctIndex);

    if (this.feedbackMode === 'delayed') {
      // Modo Frequência Real (Feedback retardado, seleção alterável antes de avançar)
      this.playNeutralTap();
      this.isAnswered = true;
      const answerRecord = {
        questionId: currentQ.originalId,
        topicId: currentQ.topicId,
        questionText: currentQ.question,
        figure: currentQ.figure,
        options: currentQ.options,
        selectedIndex: selectedIndex,
        correctIndex: currentQ.correctIndex,
        isCorrect: isCorrect,
        explanation: currentQ.explanation,
        distractorAnalysis: currentQ.distractorAnalysis,
        solution: currentQ.solution,
        nursingApplication: currentQ.nursingApplication,
        originalSelected: this.originalOptionIndex(currentQ, selectedIndex),
        isRetry: !!currentQ.isRetry
      };
      this.userAnswers[this.currentIndex] = answerRecord;
      return {
        isDelayed: true,
        selectedIndex: selectedIndex
      };
    }

    // Modo Treino (Feedback Imediato)
    if (this.isAnswered) return null;
    this.isAnswered = true;

    this.playBeep(isCorrect);

    const answerRecord = {
      questionId: currentQ.originalId,
      topicId: currentQ.topicId,
      questionText: currentQ.question,
      figure: currentQ.figure,
      options: currentQ.options,
      selectedIndex: selectedIndex,
      correctIndex: currentQ.correctIndex,
      isCorrect: isCorrect,
      explanation: currentQ.explanation,
      distractorAnalysis: currentQ.distractorAnalysis,
      solution: currentQ.solution,
      nursingApplication: currentQ.nursingApplication,
      originalSelected: this.originalOptionIndex(currentQ, selectedIndex),
      isRetry: !!currentQ.isRetry
    };

    this.userAnswers[this.currentIndex] = answerRecord;
    if (!isCorrect && !currentQ.isRetry && this.mode !== 'exam') this.scheduleRetry(currentQ);
    return answerRecord;
  }

  // Modo Treino: uma pergunta errada volta a aparecer daqui a poucas perguntas (opções baralhadas
  // de novo), para o aluno a tentar outra vez enquanto a explicação ainda está fresca.
  // Só repete uma vez (no máximo 10 por sessão) e não conta para a nota nem para as métricas.
  scheduleRetry(q) {
    const original = QUESTIONS_DATA.find(x => x.id === q.originalId);
    if (!original || this.currentQuestions.filter(x => x.isRetry).length >= 10) return;
    const retry = this.prepareQuestion({ ...original, isRetry: true });
    const at = Math.min(this.currentIndex + 4, this.currentQuestions.length);
    this.currentQuestions.splice(at, 0, retry);
  }

  nextQuestion() {
    if (!this.isAnswered) return false;
    this.currentIndex++;
    this.isAnswered = false;
    return this.getCurrentState();
  }

  // Finalização imediata forçada (ex: quando o cronómetro chega a 00:00)
  forceFinishExam() {
    for (let i = 0; i < this.currentQuestions.length; i++) {
      if (!this.userAnswers[i]) {
        const q = this.currentQuestions[i];
        this.userAnswers[i] = {
          questionId: q.originalId,
          topicId: q.topicId,
          questionText: q.question,
          figure: q.figure,
          options: q.options,
          selectedIndex: -1, // Sem resposta
          correctIndex: q.correctIndex,
          isCorrect: false,
          explanation: q.explanation,
          distractorAnalysis: q.distractorAnalysis,
          solution: q.solution,
          nursingApplication: q.nursingApplication,
          originalSelected: -1,
          isRetry: !!q.isRetry
        };
      }
    }
    this.currentIndex = this.currentQuestions.length;
    return this.calculateSummary();
  }

  calculateSummary() {
    const allAnswers = this.userAnswers.filter(Boolean);
    const retries = allAnswers.filter(a => a.isRetry);
    const answers = allAnswers.filter(a => !a.isRetry);
    const total = answers.length;
    const correctCount = answers.filter(a => a.isCorrect).length;
    const percentage = total > 0 ? Math.round((correctCount / total) * 100) : 0;
    
    // Escala Portuguesa do Ensino Superior: 0 a 20 valores
    const grade20 = total > 0 ? Number(((correctCount / total) * 20).toFixed(1)) : 0;

    const elapsedSeconds = this.startTime ? Math.round((Date.now() - this.startTime) / 1000) : 0;
    const minutes = Math.floor(elapsedSeconds / 60);
    const seconds = elapsedSeconds % 60;
    const timeFormatted = `${minutes}m ${seconds.toString().padStart(2, '0')}s`;

    const incorrectIds = answers.filter(a => !a.isCorrect).map(a => a.questionId);

    let gradeClassification = "";
    let badgeClass = "";
    if (grade20 >= 17.5) {
      gradeClassification = "Excelente (18 a 20 valores) - Domínio extraordinário dos conceitos de Biofísica!";
      badgeClass = "badge-excellent";
    } else if (grade20 >= 15.5) {
      gradeClassification = "Muito Bom (16 a 17 valores) - Sólida preparação científica para enfermagem.";
      badgeClass = "badge-verygood";
    } else if (grade20 >= 13.5) {
      gradeClassification = "Bom (14 a 15 valores) - Bom aproveitamento geral nos conteúdos.";
      badgeClass = "badge-good";
    } else if (grade20 >= 9.5) {
      gradeClassification = "Suficiente (10 a 13 valores) - Aprovado, mas recomenda-se rever as explicações.";
      badgeClass = "badge-pass";
    } else {
      gradeClassification = "Não Aprovado (< 9,5 valores) - Necessita de reforçar o estudo com os resumos.";
      badgeClass = "badge-fail";
    }

    // Desempenho detalhado por tópico
    const topicBreakdown = {};
    TOPICS_DATA.forEach(t => {
      const topicAnswers = answers.filter(a => a.topicId === t.id);
      if (topicAnswers.length > 0) {
        const c = topicAnswers.filter(a => a.isCorrect).length;
        topicBreakdown[t.id] = {
          topicTitle: t.shortTitle,
          total: topicAnswers.length,
          correct: c,
          percentage: Math.round((c / topicAnswers.length) * 100)
        };
      }
    });

    return {
      totalQuestions: total,
      correctCount: correctCount,
      incorrectCount: total - correctCount,
      incorrectIds: incorrectIds,
      percentage: percentage,
      grade20: grade20,
      classification: gradeClassification,
      badgeClass: badgeClass,
      topicBreakdown: topicBreakdown,
      answers: answers,
      retryTotal: retries.length,
      retryCorrect: retries.filter(a => a.isCorrect).length,
      feedbackMode: this.feedbackMode,
      mode: this.mode,
      customTitle: this.customTitle,
      elapsedSeconds: elapsedSeconds,
      timeFormatted: timeFormatted
    };
  }
}
