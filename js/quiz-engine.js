/**
 * Quiz Engine - Gestor da Mecânica de Perguntas e Avaliação
 */

class QuizEngine {
  constructor() {
    this.currentQuestions = [];
    this.currentIndex = 0;
    this.userAnswers = [];
    this.isAnswered = false;
    this.mode = 'topic'; // 'topic' ou 'exam'
    this.activeTopicId = null;
    this.audioEnabled = true;
    this.audioCtx = null;
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
        shuffledDistractorAnalysis[newIdx] = q.distractorAnalysis[distractorOrigIdx];
      }
    });

    return {
      originalId: q.id,
      topicId: q.topicId,
      question: q.question,
      options: shuffledOptions,
      correctIndex: newCorrectIndex,
      explanation: q.explanation,
      distractorAnalysis: shuffledDistractorAnalysis,
      nursingApplication: q.nursingApplication
    };
  }

  // Inicia um teste focado num tópico específico
  startTopicQuiz(topicId) {
    this.mode = 'topic';
    this.activeTopicId = topicId;
    const rawQuestions = QUESTIONS_DATA.filter(q => q.topicId === topicId);
    this.currentQuestions = this.shuffleArray(rawQuestions).map(q => this.prepareQuestion(q));
    this.currentIndex = 0;
    this.userAnswers = [];
    this.isAnswered = false;
    return this.getCurrentState();
  }

  // Inicia uma simulação global de exame (perguntas aleatórias de todos os tópicos)
  startExamSimulation(numQuestions = 16) {
    this.mode = 'exam';
    this.activeTopicId = null;
    // Garante representatividade de todos os tópicos disponíveis
    let selected = [];
    TOPICS_DATA.forEach(t => {
      const topicQuestions = QUESTIONS_DATA.filter(q => q.topicId === t.id);
      const shuffled = this.shuffleArray(topicQuestions);
      // Pega pelo menos 2 questões de cada um dos 8 tópicos (= 16 questões)
      selected.push(...shuffled.slice(0, 2));
    });

    // Baralha a ordem final do exame
    this.currentQuestions = this.shuffleArray(selected).map(q => this.prepareQuestion(q));
    this.currentIndex = 0;
    this.userAnswers = [];
    this.isAnswered = false;
    return this.getCurrentState();
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
      topic: topic,
      question: q.question,
      options: q.options,
      isAnswered: this.isAnswered,
      lastAnswer: this.userAnswers[this.currentIndex] || null
    };
  }

  submitAnswer(selectedIndex) {
    if (this.isAnswered) return null;

    const currentQ = this.currentQuestions[this.currentIndex];
    const isCorrect = (selectedIndex === currentQ.correctIndex);
    this.isAnswered = true;

    this.playBeep(isCorrect);

    const answerRecord = {
      questionId: currentQ.originalId,
      topicId: currentQ.topicId,
      questionText: currentQ.question,
      options: currentQ.options,
      selectedIndex: selectedIndex,
      correctIndex: currentQ.correctIndex,
      isCorrect: isCorrect,
      explanation: currentQ.explanation,
      distractorAnalysis: currentQ.distractorAnalysis,
      nursingApplication: currentQ.nursingApplication
    };

    this.userAnswers[this.currentIndex] = answerRecord;
    return answerRecord;
  }

  nextQuestion() {
    if (!this.isAnswered) return false;
    this.currentIndex++;
    this.isAnswered = false;
    return this.getCurrentState();
  }

  calculateSummary() {
    const total = this.userAnswers.length;
    const correctCount = this.userAnswers.filter(a => a.isCorrect).length;
    const percentage = total > 0 ? Math.round((correctCount / total) * 100) : 0;
    
    // Escala Portuguesa do Ensino Superior: 0 a 20 valores
    const grade20 = total > 0 ? Number(((correctCount / total) * 20).toFixed(1)) : 0;

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
      gradeClassification = "Não Aprovado (< 9.5 valores) - Necessita de reforçar o estudo com os resumos.";
      badgeClass = "badge-fail";
    }

    // Desempenho detalhado por tópico
    const topicBreakdown = {};
    TOPICS_DATA.forEach(t => {
      const topicAnswers = this.userAnswers.filter(a => a.topicId === t.id);
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
      percentage: percentage,
      grade20: grade20,
      classification: gradeClassification,
      badgeClass: badgeClass,
      topicBreakdown: topicBreakdown,
      answers: this.userAnswers
    };
  }
}
