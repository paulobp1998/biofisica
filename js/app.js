/**
 * Aplicação Principal - BioFísica Enfermagem Hub
 * Controlador de interface, navegação de vistas, motor de quiz, persistência local,
 * pesquisa rápida, conquistas, impressão de fichas e caderno de erros.
 */

document.addEventListener('DOMContentLoaded', () => {
  const quiz = new QuizEngine();

  // =========================================================================
  // 1. Elementos do DOM
  // =========================================================================

  // Vistas
  const homeView = document.getElementById('view-home');
  const quizView = document.getElementById('view-quiz');
  const resultsView = document.getElementById('view-results');
  const studyView = document.getElementById('view-study');
  const statsView = document.getElementById('view-stats');

  // Navegação e Topo
  const navBrand = document.getElementById('nav-brand');
  const themeToggle = document.getElementById('theme-toggle');
  const audioToggle = document.getElementById('audio-toggle');
  const streakBadge = document.getElementById('streak-badge');
  const streakText = document.getElementById('streak-text');
  const btnOpenSearch = document.getElementById('btn-open-search');
  const btnFontDecrease = document.getElementById('btn-font-decrease');
  const btnFontReset = document.getElementById('btn-font-reset');
  const btnFontIncrease = document.getElementById('btn-font-increase');

  // Ações da Página Inicial
  const topicsGrid = document.getElementById('topics-grid');
  const btnStartExam = document.getElementById('btn-start-exam');
  const btnViewStudy = document.getElementById('btn-view-study');
  const btnViewStats = document.getElementById('btn-view-stats');
  const btnOpenMistakes = document.getElementById('btn-open-mistakes');
  const countMistakes = document.getElementById('count-mistakes');
  const btnOpenStarred = document.getElementById('btn-open-starred');
  const countStarred = document.getElementById('count-starred');
  const btnOpenWorksheet = document.getElementById('btn-open-worksheet');
  const btnHeroSearch = document.getElementById('btn-hero-search');

  // Ecrã do Quiz
  const quizTopicBadge = document.getElementById('quiz-topic-badge');
  const quizTimerBadge = document.getElementById('quiz-timer-badge');
  const btnStarQuestion = document.getElementById('btn-star-question');
  const btnExitQuiz = document.getElementById('btn-exit-quiz');
  const quizProgressText = document.getElementById('quiz-progress-text');
  const quizProgressBar = document.getElementById('quiz-progress-bar');
  const questionText = document.getElementById('question-text');
  const optionsContainer = document.getElementById('options-container');
  const feedbackCard = document.getElementById('feedback-card');
  const feedbackTitle = document.getElementById('feedback-title');
  const feedbackExplanation = document.getElementById('feedback-explanation');
  const feedbackDistractors = document.getElementById('feedback-distractors');
  const feedbackNursing = document.getElementById('feedback-nursing');
  const btnNext = document.getElementById('btn-next');

  // Ecrã de Resultados
  const resultGrade = document.getElementById('result-grade');
  const resultClassification = document.getElementById('result-classification');
  const resultStatsSummary = document.getElementById('result-stats-summary');
  const resultTopicBreakdown = document.getElementById('result-topic-breakdown');
  const resultReviewList = document.getElementById('result-review-list');
  const btnRetryQuiz = document.getElementById('btn-retry-quiz');
  const btnHomeFromResults = document.getElementById('btn-home-from-results');

  // Resumos e Estatísticas
  const studyTopicsAccordion = document.getElementById('study-topics-accordion');
  const btnHomeFromStudy = document.getElementById('btn-home-from-study');
  const statsContent = document.getElementById('stats-content');
  const badgesGrid = document.getElementById('badges-grid');
  const btnHomeFromStats = document.getElementById('btn-home-from-stats');
  const btnClearStats = document.getElementById('btn-clear-stats');

  // Modal de Configuração de Sessão
  const modalSession = document.getElementById('modal-session');
  const modalSessionTitle = document.getElementById('modal-session-title');
  const modalSessionSubtitle = document.getElementById('modal-session-subtitle');
  const sessionOptionsGrid = document.getElementById('session-options-grid');
  const modeBtnTrain = document.getElementById('mode-btn-train');
  const modeBtnExam = document.getElementById('mode-btn-exam');
  const checkEnableTimer = document.getElementById('check-enable-timer');
  const selectTimerDuration = document.getElementById('select-timer-duration');
  const btnCloseSessionModal = document.getElementById('btn-close-session-modal');
  const btnCancelSessionModal = document.getElementById('btn-cancel-session-modal');
  const btnConfirmSessionStart = document.getElementById('btn-confirm-session-start');

  // Modal de Pesquisa Rápida (2E)
  const modalSearch = document.getElementById('modal-search');
  const searchInput = document.getElementById('search-input');
  const searchResultsList = document.getElementById('search-results-list');
  const searchStatusText = document.getElementById('search-status-text');
  const searchCountBadge = document.getElementById('search-count-badge');
  const btnCloseSearchModal = document.getElementById('btn-close-search-modal');
  const btnCancelSearchModal = document.getElementById('btn-cancel-search-modal');

  // Modal de Ficha de Trabalho em PDF (3G)
  const modalWorksheet = document.getElementById('modal-worksheet');
  const worksheetTopicSelect = document.getElementById('worksheet-topic-select');
  const worksheetCountSelect = document.getElementById('worksheet-count-select');
  const worksheetIncludeSolutions = document.getElementById('worksheet-include-solutions');
  const btnCloseWorksheetModal = document.getElementById('btn-close-worksheet-modal');
  const btnCancelWorksheetModal = document.getElementById('btn-cancel-worksheet-modal');
  const btnGeneratePrintWorksheet = document.getElementById('btn-generate-print-worksheet');
  const printableWorksheet = document.getElementById('printable-worksheet');

  // Contentor de Notificações Toasts
  const toastContainer = document.getElementById('toast-container');

  // Variáveis de Estado
  let pendingSession = {
    mode: 'topic',
    topicId: 1,
    count: 25,
    customQuestions: null,
    customTitle: null,
    feedbackMode: 'immediate',
    timerEnabled: false,
    timerSeconds: 0
  };

  let lastSessionConfig = { ...pendingSession };
  let timerInterval = null;
  let timerSecondsRemaining = 0;
  let currentQuestionId = null;

  // =========================================================================
  // 2. Sistema de Notificações Toast
  // =========================================================================
  function showToast(message, type = 'toast-info', duration = 3800) {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = message;
    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(15px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, duration);
  }

  // =========================================================================
  // 3. Funcionalidade 4H: Controlo de Tamanho de Fonte
  // =========================================================================
  let currentFontScale = parseFloat(localStorage.getItem('biofisica_font_scale') || '1.0');
  applyFontScale(currentFontScale);

  function applyFontScale(scale) {
    currentFontScale = Math.min(1.35, Math.max(0.85, scale));
    document.documentElement.style.setProperty('--font-scale', currentFontScale);
    localStorage.setItem('biofisica_font_scale', currentFontScale.toString());
  }

  btnFontDecrease.addEventListener('click', () => {
    applyFontScale(currentFontScale - 0.1);
  });

  btnFontReset.addEventListener('click', () => {
    applyFontScale(1.0);
  });

  btnFontIncrease.addEventListener('click', () => {
    applyFontScale(currentFontScale + 0.1);
  });

  // =========================================================================
  // 4. Gestão de Tema Escuro / Claro e Áudio
  // =========================================================================
  const savedTheme = localStorage.getItem('biofisica_theme') || 'light';
  if (savedTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeToggle.textContent = '☀️';
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    themeToggle.textContent = '🌙';
  }

  themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('biofisica_theme', newTheme);
    themeToggle.textContent = newTheme === 'dark' ? '☀️' : '🌙';
  });

  audioToggle.addEventListener('click', () => {
    quiz.audioEnabled = !quiz.audioEnabled;
    audioToggle.textContent = quiz.audioEnabled ? '🔔 Som Ativo' : '🔕 Sem Som';
    audioToggle.classList.toggle('btn-muted', !quiz.audioEnabled);
  });

  // =========================================================================
  // 5. Funcionalidade 3F: Streak Diário de Estudo (🔥)
  // =========================================================================
  function updateStreak() {
    const today = new Date().toISOString().slice(0, 10);
    const raw = localStorage.getItem('biofisica_streak');
    let streakData = raw ? JSON.parse(raw) : { lastDate: '', count: 0 };

    if (streakData.lastDate) {
      const last = new Date(streakData.lastDate);
      const cur = new Date(today);
      const diffTime = cur - last;
      const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));

      if (diffDays === 0) {
        // Já visitou hoje
      } else if (diffDays === 1) {
        // Dia consecutivo
        streakData.count += 1;
        streakData.lastDate = today;
      } else {
        // Sequência quebrada
        streakData.count = 1;
        streakData.lastDate = today;
      }
    } else {
      streakData.count = 1;
      streakData.lastDate = today;
    }

    localStorage.setItem('biofisica_streak', JSON.stringify(streakData));
    streakText.textContent = `${streakData.count} ${streakData.count === 1 ? 'Dia' : 'Dias'}`;

    if (streakData.count >= 3) {
      unlockBadge('streak_3');
    }
  }

  updateStreak();

  // =========================================================================
  // 6. Funcionalidade 1A: Caderno de Erros & Perguntas Marcadas (⭐)
  // =========================================================================
  function getMistakes() {
    return JSON.parse(localStorage.getItem('biofisica_mistakes') || '[]');
  }

  function addMistakes(ids) {
    if (!ids || ids.length === 0) return;
    const current = getMistakes();
    const set = new Set([...current, ...ids]);
    localStorage.setItem('biofisica_mistakes', JSON.stringify(Array.from(set)));
    updateQuickActionCounters();
  }

  function resolveMistake(id) {
    const current = getMistakes();
    const filtered = current.filter(qId => qId !== id);
    localStorage.setItem('biofisica_mistakes', JSON.stringify(filtered));
    updateQuickActionCounters();
  }

  function getStarred() {
    return JSON.parse(localStorage.getItem('biofisica_starred') || '[]');
  }

  function toggleStar(id) {
    const current = getStarred();
    const index = current.indexOf(id);
    let isStarred = false;
    if (index === -1) {
      current.push(id);
      isStarred = true;
      showToast(`⭐ Pergunta #${id} adicionada às Marcadas!`, 'toast-info', 2000);
    } else {
      current.splice(index, 1);
      isStarred = false;
      showToast(`Pergunta #${id} removida das Marcadas.`, 'toast-info', 2000);
    }
    localStorage.setItem('biofisica_starred', JSON.stringify(current));
    updateQuickActionCounters();
    return isStarred;
  }

  function updateQuickActionCounters() {
    const mCount = getMistakes().length;
    const sCount = getStarred().length;
    countMistakes.textContent = mCount;
    countStarred.textContent = sCount;
  }

  updateQuickActionCounters();

  // Botão estrela no ecrã de quiz
  btnStarQuestion.addEventListener('click', () => {
    if (!currentQuestionId) return;
    const isStarred = toggleStar(currentQuestionId);
    btnStarQuestion.textContent = isStarred ? '⭐' : '☆';
    btnStarQuestion.classList.toggle('active', isStarred);
  });

  // Abertura do Caderno de Erros
  btnOpenMistakes.addEventListener('click', () => {
    const mistakes = getMistakes();
    if (mistakes.length === 0) {
      showToast('🎉 O teu Caderno de Erros está vazio! Parabéns pelo excelente aproveitamento.', 'toast-success');
      return;
    }
    const questions = QUESTIONS_DATA.filter(q => mistakes.includes(q.id));
    openCustomSessionModal('📕 Caderno de Erros', questions, `Tens ${questions.length} questões erradas guardadas para rever:`);
  });

  // Abertura das Perguntas Marcadas
  btnOpenStarred.addEventListener('click', () => {
    const starred = getStarred();
    if (starred.length === 0) {
      showToast('⭐ Ainda não tens perguntas marcadas! Usa o ícone ⭐ durante os testes para guardar dúvidas.', 'toast-badge');
      return;
    }
    const questions = QUESTIONS_DATA.filter(q => starred.includes(q.id));
    openCustomSessionModal('⭐ Perguntas Marcadas', questions, `Tens ${questions.length} questões favoritas guardadas:`);
  });

  // =========================================================================
  // 7. Navegação entre Vistas
  // =========================================================================
  function showView(view) {
    [homeView, quizView, resultsView, studyView, statsView].forEach(v => {
      v.classList.add('hidden');
      v.classList.remove('active-view');
    });
    view.classList.remove('hidden');
    view.classList.add('active-view');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  navBrand.addEventListener('click', (e) => {
    e.preventDefault();
    showView(homeView);
  });

  // =========================================================================
  // 8. Renderização dos Tópicos no Dashboard
  // =========================================================================
  function renderTopicCards() {
    topicsGrid.innerHTML = '';
    TOPICS_DATA.forEach(topic => {
      const qCount = QUESTIONS_DATA.filter(q => q.topicId === topic.id).length;
      const card = document.createElement('div');
      card.className = 'topic-card';
      card.innerHTML = `
        <div class="topic-header">
          <span class="topic-icon">${topic.icon}</span>
          <span class="topic-badge">Tópico ${topic.id}</span>
        </div>
        <h3 class="topic-title">${topic.title}</h3>
        <p class="topic-desc">${topic.description}</p>
        <div class="topic-footer">
          <span class="topic-count">${qCount} Questões Clínicas</span>
          <button class="btn btn-primary btn-sm btn-start-topic" data-topic="${topic.id}">
            Praticar ➔
          </button>
        </div>
      `;
      topicsGrid.appendChild(card);
    });

    document.querySelectorAll('.btn-start-topic').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const tId = parseInt(e.target.getAttribute('data-topic'), 10);
        openTopicSessionModal(tId);
      });
    });
  }

  // =========================================================================
  // 9. Configuração e Abertura do Modal de Sessão (1B)
  // =========================================================================
  function resetSessionModalModes() {
    modeBtnTrain.classList.add('selected');
    modeBtnExam.classList.remove('selected');
    pendingSession.feedbackMode = 'immediate';
    checkEnableTimer.checked = false;
    selectTimerDuration.disabled = true;
    pendingSession.timerEnabled = false;
    pendingSession.timerSeconds = 0;
  }

  // Alternadores de Modo no Modal
  modeBtnTrain.addEventListener('click', () => {
    modeBtnTrain.classList.add('selected');
    modeBtnExam.classList.remove('selected');
    pendingSession.feedbackMode = 'immediate';
  });

  modeBtnExam.addEventListener('click', () => {
    modeBtnExam.classList.add('selected');
    modeBtnTrain.classList.remove('selected');
    pendingSession.feedbackMode = 'delayed';
  });

  checkEnableTimer.addEventListener('change', () => {
    selectTimerDuration.disabled = !checkEnableTimer.checked;
    pendingSession.timerEnabled = checkEnableTimer.checked;
  });

  function openTopicSessionModal(topicId) {
    const topic = TOPICS_DATA.find(t => t.id === topicId);
    const qCount = QUESTIONS_DATA.filter(q => q.topicId === topicId).length;
    resetSessionModalModes();

    pendingSession = {
      mode: 'topic',
      topicId: topicId,
      count: 25,
      customQuestions: null,
      customTitle: null,
      feedbackMode: 'immediate',
      timerEnabled: false,
      timerSeconds: 0
    };

    modalSessionTitle.textContent = `${topic.icon} ${topic.shortTitle}`;
    modalSessionSubtitle.textContent = `Banco total: ${qCount} questões disponíveis. Configura o teu treino:`;

    sessionOptionsGrid.innerHTML = `
      <button class="session-option-card" data-count="10">
        <span class="session-icon">⚡</span>
        <div class="session-info">
          <strong>10 Questões</strong>
          <span>Treino Rápido • ~5 min</span>
        </div>
      </button>
      <button class="session-option-card selected" data-count="25">
        <span class="session-icon">🎯</span>
        <div class="session-info">
          <strong>25 Questões (Recomendado)</strong>
          <span>Sessão Equilibrada • ~15 min</span>
        </div>
      </button>
      <button class="session-option-card" data-count="50">
        <span class="session-icon">📚</span>
        <div class="session-info">
          <strong>50 Questões</strong>
          <span>Estudo Aprofundado • ~30 min</span>
        </div>
      </button>
      <button class="session-option-card" data-count="200">
        <span class="session-icon">🏆</span>
        <div class="session-info">
          <strong>200 Questões</strong>
          <span>Maratona Completa do Tópico</span>
        </div>
      </button>
    `;

    attachSessionCardListeners();
    modalSession.classList.remove('hidden');
  }

  function openExamSessionModal() {
    resetSessionModalModes();
    pendingSession = {
      mode: 'exam',
      topicId: null,
      count: 20,
      customQuestions: null,
      customTitle: null,
      feedbackMode: 'immediate',
      timerEnabled: false,
      timerSeconds: 0
    };

    modalSessionTitle.textContent = `🎯 Simulação Global de Exame`;
    modalSessionSubtitle.textContent = `Questões sorteadas proporcionalmente de todos os 8 tópicos da cadeira:`;

    sessionOptionsGrid.innerHTML = `
      <button class="session-option-card selected" data-count="20">
        <span class="session-icon">🎓</span>
        <div class="session-info">
          <strong>20 Questões (0 a 20 Val.)</strong>
          <span>2 a 3 perguntas por tópico • ~20 min</span>
        </div>
      </button>
      <button class="session-option-card" data-count="40">
        <span class="session-icon">🏆</span>
        <div class="session-info">
          <strong>40 Questões (Exame Alargado)</strong>
          <span>5 perguntas por tópico • ~40 min</span>
        </div>
      </button>
    `;

    attachSessionCardListeners();
    modalSession.classList.remove('hidden');
  }

  function openCustomSessionModal(title, questions, subtitle) {
    resetSessionModalModes();
    const count = Math.min(25, questions.length);
    pendingSession = {
      mode: 'custom',
      topicId: null,
      count: count,
      customQuestions: questions,
      customTitle: title,
      feedbackMode: 'immediate',
      timerEnabled: false,
      timerSeconds: 0
    };

    modalSessionTitle.textContent = title;
    modalSessionSubtitle.textContent = subtitle;

    let optionsHtml = '';
    if (questions.length <= 10) {
      optionsHtml = `
        <button class="session-option-card selected" data-count="${questions.length}">
          <span class="session-icon">🎯</span>
          <div class="session-info">
            <strong>Todas as ${questions.length} Questões</strong>
            <span>Rever todo o conjunto</span>
          </div>
        </button>
      `;
    } else {
      optionsHtml = `
        <button class="session-option-card selected" data-count="10">
          <span class="session-icon">⚡</span>
          <div class="session-info">
            <strong>10 Questões</strong>
            <span>Sessão Rápida</span>
          </div>
        </button>
        <button class="session-option-card" data-count="${Math.min(25, questions.length)}">
          <span class="session-icon">🎯</span>
          <div class="session-info">
            <strong>${Math.min(25, questions.length)} Questões</strong>
            <span>Sessão Padrão</span>
          </div>
        </button>
        ${questions.length > 25 ? `
          <button class="session-option-card" data-count="${questions.length}">
            <span class="session-icon">🏆</span>
            <div class="session-info">
              <strong>Todas as ${questions.length} Questões</strong>
              <span>Maratona Completa</span>
            </div>
          </button>
        ` : ''}
      `;
    }

    sessionOptionsGrid.innerHTML = optionsHtml;
    attachSessionCardListeners();
    modalSession.classList.remove('hidden');
  }

  function attachSessionCardListeners() {
    document.querySelectorAll('.session-option-card').forEach(card => {
      card.addEventListener('click', () => {
        document.querySelectorAll('.session-option-card').forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        pendingSession.count = parseInt(card.getAttribute('data-count'), 10);
      });
    });
  }

  function closeSessionModal() {
    modalSession.classList.add('hidden');
  }

  btnCloseSessionModal.addEventListener('click', closeSessionModal);
  btnCancelSessionModal.addEventListener('click', closeSessionModal);
  modalSession.addEventListener('click', (e) => {
    if (e.target === modalSession) closeSessionModal();
  });

  btnConfirmSessionStart.addEventListener('click', () => {
    closeSessionModal();
    let timerSec = 0;
    if (checkEnableTimer.checked) {
      const val = parseInt(selectTimerDuration.value, 10);
      if (val === 60 || val === 90) {
        timerSec = pendingSession.count * val;
      } else {
        timerSec = val;
      }
    }
    pendingSession.timerSeconds = timerSec;
    startQuizSession({ ...pendingSession });
  });

  // =========================================================================
  // 10. Execução da Sessão de Quiz (1A, 1B)
  // =========================================================================
  function startQuizSession(config) {
    lastSessionConfig = { ...config };
    clearInterval(timerInterval);

    let state;
    if (config.mode === 'topic') {
      state = quiz.startTopicQuiz(config.topicId, config.count, config.feedbackMode, config.timerSeconds);
    } else if (config.mode === 'exam') {
      state = quiz.startExamSimulation(config.count, config.feedbackMode, config.timerSeconds);
    } else {
      const selectedPool = (config.count && config.count < config.customQuestions.length)
        ? config.customQuestions.slice(0, config.count)
        : config.customQuestions;
      state = quiz.startCustomQuiz(selectedPool, config.customTitle, config.feedbackMode, config.timerSeconds);
    }

    // Gestão do Temporizador
    if (config.timerSeconds > 0) {
      timerSecondsRemaining = config.timerSeconds;
      quizTimerBadge.classList.remove('hidden', 'warning');
      updateTimerDisplay();

      timerInterval = setInterval(() => {
        timerSecondsRemaining--;
        updateTimerDisplay();

        if (timerSecondsRemaining <= 60) {
          quizTimerBadge.classList.add('warning');
        }

        if (timerSecondsRemaining <= 0) {
          clearInterval(timerInterval);
          showToast('⏱️ Tempo limite esgotado! O exame foi finalizado automaticamente.', 'toast-badge', 5000);
          const summary = quiz.forceFinishExam();
          showResults(summary);
        }
      }, 1000);
    } else {
      quizTimerBadge.classList.add('hidden');
    }

    showView(quizView);
    renderQuestion(state);
  }

  function updateTimerDisplay() {
    const mins = Math.floor(Math.max(0, timerSecondsRemaining) / 60);
    const secs = Math.max(0, timerSecondsRemaining) % 60;
    quizTimerBadge.textContent = `⏱️ ${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }

  // Renderiza a pergunta atual
  function renderQuestion(state) {
    if (state.isFinished) {
      clearInterval(timerInterval);
      quizTimerBadge.classList.add('hidden');
      showResults(state.summary);
      return;
    }

    currentQuestionId = state.questionId;

    // Atualiza estado da estrela
    const starredList = getStarred();
    const isStarred = starredList.includes(currentQuestionId);
    btnStarQuestion.textContent = isStarred ? '⭐' : '☆';
    btnStarQuestion.classList.toggle('active', isStarred);

    // Progresso e Título
    const currNum = state.currentIndex + 1;
    const totalNum = state.totalQuestions;
    const progressPercent = Math.round((currNum / totalNum) * 100);

    let titleText = '';
    if (state.mode === 'custom') {
      titleText = state.customTitle;
    } else if (state.topic) {
      titleText = `${state.topic.icon} ${state.topic.shortTitle}`;
    } else {
      titleText = '🎯 Simulação Global de Exame';
    }

    quizTopicBadge.textContent = titleText;
    quizProgressText.textContent = `Pergunta ${currNum} de ${totalNum} • ${state.feedbackMode === 'delayed' ? '⏱️ Frequência Real' : '🟢 Modo Treino'}`;
    quizProgressBar.style.width = `${progressPercent}%`;

    // Enunciado
    questionText.textContent = state.question;

    // Opções
    optionsContainer.innerHTML = '';
    const letters = ['A', 'B', 'C', 'D'];
    state.options.forEach((optText, idx) => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.innerHTML = `
        <span class="option-letter">${letters[idx]}</span>
        <span class="option-text">${optText}</span>
      `;
      btn.addEventListener('click', () => handleOptionClick(idx));
      optionsContainer.appendChild(btn);
    });

    // Resetar feedback
    feedbackCard.classList.add('hidden');
    feedbackCard.classList.remove('feedback-correct', 'feedback-incorrect');
    btnNext.classList.add('hidden');
  }

  // Trata a seleção de uma opção
  function handleOptionClick(selectedIndex) {
    const isDelayed = quiz.feedbackMode === 'delayed';

    if (isDelayed) {
      // Modo Simulação Real de Frequência (Feedback Retardado)
      quiz.submitAnswer(selectedIndex);
      const optionButtons = optionsContainer.querySelectorAll('.option-btn');
      optionButtons.forEach((btn, idx) => {
        btn.classList.toggle('exam-selected', idx === selectedIndex);
      });

      const isLast = quiz.currentIndex === quiz.currentQuestions.length - 1;
      btnNext.textContent = isLast ? 'Finalizar Exame e Ver Resultados ➔' : 'Próxima Pergunta ➔';
      btnNext.classList.remove('hidden');
      return;
    }

    // Modo Treino (Feedback Imediato)
    if (quiz.isAnswered) return;

    const result = quiz.submitAnswer(selectedIndex);
    if (!result) return;

    const optionButtons = optionsContainer.querySelectorAll('.option-btn');
    optionButtons.forEach((btn, idx) => {
      btn.disabled = true;
      if (idx === result.correctIndex) {
        btn.classList.add('correct');
      }
      if (idx === selectedIndex && !result.isCorrect) {
        btn.classList.add('incorrect');
      }
    });

    feedbackCard.classList.remove('hidden');
    if (result.isCorrect) {
      feedbackCard.classList.add('feedback-correct');
      feedbackTitle.innerHTML = '✅ <strong>Resposta Correta!</strong> Excelente raciocínio científico.';
    } else {
      feedbackCard.classList.add('feedback-incorrect');
      feedbackTitle.innerHTML = '❌ <strong>Resposta Incorreta.</strong> Consulta a justificação abaixo para consolidar:';
    }

    feedbackExplanation.innerHTML = `
      <p><strong>Por que está certa a opção correta:</strong> ${result.explanation}</p>
    `;

    function formatDistractorText(rawText) {
      if (!rawText) return 'Está incorreta no contexto desta questão.';
      let t = rawText.trim();
      // Remover qualquer referência prévia a letras de opções geradas antes do baralhamento
      t = t.replace(/^(?:As\s+)?Opç(?:ão|ões)\s+[A-D](?:\s*,\s*[A-D])*(?:\s+e\s+(?:Opção\s+)?[A-D])?\s*/i, '');
      t = t.replace(/^(?:A\s+)?(?:primeira|segunda|terceira)\s+opção\s+(?:incorreta\s+)?/i, '');
      t = t.replace(/^(?:A\s+)?Opção\s+[A-D]\s*/i, '');
      t = t.replace(/^(?:Opção\s+incorreta\s*:?\s*)/i, '');
      t = t.replace(/^[:\-\s]+/, '');

      const matchPq = t.match(/^(?:está\s+(?:in)?correta|está\s+errada|é\s+(?:in)?correta|é\s+falsa|é\s+errada)\s*(?:porque\s+|pois\s+|já\s+que\s+)?(.*)/i);
      if (matchPq) {
        const body = matchPq[1].trim();
        return body ? `Está incorreta porque ${body[0].toLowerCase() + body.slice(1)}` : 'Está incorreta no contexto desta questão.';
      } else if (/^(?:porque|pois|já que)\s+/i.test(t)) {
        return `Está incorreta ${t[0].toLowerCase() + t.slice(1)}`;
      } else if (t.toLowerCase().startsWith('está') || t.toLowerCase().startsWith('é incorreta')) {
        return t;
      } else if (t.startsWith('(')) {
        return `Está incorreta: ${t}`;
      } else {
        return `Está incorreta: ${t[0].toLowerCase() + t.slice(1)}`;
      }
    }

    let distractorsHtml = '<strong>Análise detalhada das restantes opções:</strong><ul>';
    const letters = ['A', 'B', 'C', 'D'];
    result.options.forEach((opt, idx) => {
      if (idx !== result.correctIndex && result.distractorAnalysis[idx]) {
        const cleanExplanation = formatDistractorText(result.distractorAnalysis[idx]);
        distractorsHtml += `<li><strong>Opção ${letters[idx]}:</strong> ${cleanExplanation}</li>`;
      }
    });
    distractorsHtml += '</ul>';
    feedbackDistractors.innerHTML = distractorsHtml;

    feedbackNursing.innerHTML = `
      <div class="nursing-tip-box">
        <span class="nursing-tip-icon">💡</span>
        <div>
          <strong>Aplicação Prática na Enfermagem:</strong>
          <p>${result.nursingApplication}</p>
        </div>
      </div>
    `;

    const isLast = quiz.currentIndex === quiz.currentQuestions.length - 1;
    btnNext.textContent = isLast ? 'Finalizar e Ver Resultados ➔' : 'Próxima Pergunta ➔';
    btnNext.classList.remove('hidden');
  }

  btnNext.addEventListener('click', () => {
    const nextState = quiz.nextQuestion();
    if (nextState) {
      renderQuestion(nextState);
    }
  });

  btnExitQuiz.addEventListener('click', () => {
    if (confirm('Desejas interromper este teste e voltar ao início?')) {
      clearInterval(timerInterval);
      quizTimerBadge.classList.add('hidden');
      showView(homeView);
    }
  });

  // =========================================================================
  // 11. Ecrã de Resultados e Relatório Completo (1A, 1B, 3F)
  // =========================================================================
  function showResults(summary) {
    clearInterval(timerInterval);
    quizTimerBadge.classList.add('hidden');
    showView(resultsView);

    // Guardar histórico e atualizar erros
    saveAttemptHistory(summary);
    if (summary.incorrectIds && summary.incorrectIds.length > 0) {
      addMistakes(summary.incorrectIds);
    }

    // Se estiver a treinar o Caderno de Erros, remove as que acertou!
    if (quiz.mode === 'custom' && quiz.customTitle === '📕 Caderno de Erros') {
      summary.answers.filter(a => a.isCorrect).forEach(a => resolveMistake(a.questionId));
    }

    // Avaliar conquistas
    checkAndAwardBadges(summary);
    updateQuickActionCounters();

    // Nota 0-20 e Classificação
    resultGrade.innerHTML = `
      <div class="grade-circle ${summary.badgeClass}">
        <span class="grade-number">${summary.grade20}</span>
        <span class="grade-scale">/ 20 valores</span>
      </div>
    `;

    let timeNotice = summary.timeFormatted ? `<span style="font-size: 0.88rem; color: var(--text-secondary); display: block; margin-top: 0.25rem;">⏱️ Tempo Total: <strong>${summary.timeFormatted}</strong></span>` : '';
    let modeNotice = summary.feedbackMode === 'delayed' ? `<span style="display: inline-block; background: var(--color-brand-light); color: var(--color-brand); padding: 0.15rem 0.5rem; border-radius: var(--radius-full); font-size: 0.75rem; font-weight: 700; margin-bottom: 0.4rem;">SIMULAÇÃO REAL DE FREQUÊNCIA</span>` : '';

    resultClassification.innerHTML = `
      ${modeNotice}
      <h3>${summary.classification}</h3>
      <p>Acertaste <strong>${summary.correctCount}</strong> de <strong>${summary.totalQuestions}</strong> questões (${summary.percentage}% de precisão).</p>
      ${timeNotice}
    `;

    // Desempenho por Tópico
    resultTopicBreakdown.innerHTML = '<h4>Desempenho por Tópico:</h4>';
    const breakdownList = document.createElement('div');
    breakdownList.className = 'topic-breakdown-list';
    
    Object.keys(summary.topicBreakdown).forEach(tId => {
      const item = summary.topicBreakdown[tId];
      const itemDiv = document.createElement('div');
      itemDiv.className = 'breakdown-item';
      itemDiv.innerHTML = `
        <div class="breakdown-info">
          <span>${item.topicTitle}</span>
          <span>${item.correct}/${item.total} (${item.percentage}%)</span>
        </div>
        <div class="progress-track">
          <div class="progress-fill" style="width: ${item.percentage}%; background-color: ${item.percentage >= 70 ? 'var(--color-success)' : item.percentage >= 50 ? 'var(--color-warning)' : 'var(--color-danger)'};"></div>
        </div>
      `;
      breakdownList.appendChild(itemDiv);
    });
    resultTopicBreakdown.appendChild(breakdownList);

    // Folha de Revisão Completa com botão estrela
    resultReviewList.innerHTML = '<h4>Revisão Completa do Teste (com explicações científicas):</h4>';
    const letters = ['A', 'B', 'C', 'D'];
    const starredList = getStarred();

    summary.answers.forEach((ans, i) => {
      const isStarred = starredList.includes(ans.questionId);
      const reviewItem = document.createElement('div');
      reviewItem.className = `review-card ${ans.isCorrect ? 'review-correct' : 'review-incorrect'}`;
      reviewItem.innerHTML = `
        <div class="review-header">
          <span class="review-status">${ans.isCorrect ? '✅ Acertou' : '❌ Errou'}</span>
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <button class="btn-star ${isStarred ? 'active' : ''}" data-qid="${ans.questionId}" title="Marcar / Desmarcar com estrela">
              ${isStarred ? '⭐' : '☆'}
            </button>
            <span class="review-qnum">Questão ${i + 1}</span>
          </div>
        </div>
        <p class="review-question"><strong>${ans.questionText}</strong></p>
        <div class="review-choices">
          <p><strong>A sua escolha:</strong> ${ans.selectedIndex >= 0 ? `Opção ${letters[ans.selectedIndex]} - ${ans.options[ans.selectedIndex]}` : '<span style="color: var(--color-danger);">(Sem resposta selecionada)</span>'}</p>
          ${!ans.isCorrect ? `<p class="correct-highlight"><strong>Resposta correta:</strong> Opção ${letters[ans.correctIndex]} - ${ans.options[ans.correctIndex]}</p>` : ''}
        </div>
        <div class="review-explanation">
          <p><strong>Justificação Científica:</strong> ${ans.explanation}</p>
        </div>
        <div class="review-nursing">
          <p><strong>💡 Relevância em Enfermagem:</strong> ${ans.nursingApplication}</p>
        </div>
      `;
      resultReviewList.appendChild(reviewItem);
    });

    // Ouvinte para as estrelas na revisão
    resultReviewList.querySelectorAll('.btn-star').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const qId = parseInt(btn.getAttribute('data-qid'), 10);
        const starred = toggleStar(qId);
        btn.textContent = starred ? '⭐' : '☆';
        btn.classList.toggle('active', starred);
      });
    });
  }

  function saveAttemptHistory(summary) {
    const history = JSON.parse(localStorage.getItem('biofisica_history') || '[]');
    const attempt = {
      date: new Date().toLocaleDateString('pt-PT', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' }),
      mode: quiz.mode,
      topicId: quiz.activeTopicId,
      customTitle: quiz.customTitle,
      feedbackMode: summary.feedbackMode,
      timeFormatted: summary.timeFormatted,
      grade20: summary.grade20,
      percentage: summary.percentage,
      correct: summary.correctCount,
      total: summary.totalQuestions
    };
    history.unshift(attempt);
    localStorage.setItem('biofisica_history', JSON.stringify(history.slice(0, 30)));
  }

  btnRetryQuiz.addEventListener('click', () => {
    startQuizSession({ ...lastSessionConfig });
  });

  btnHomeFromResults.addEventListener('click', () => {
    showView(homeView);
  });

  btnStartExam.addEventListener('click', () => {
    openExamSessionModal();
  });

  // =========================================================================
  // 12. Funcionalidade 3F: Conquistas e Medalhas de Mérito
  // =========================================================================
  const BADGES_DEFINITIONS = [
    { id: 'first_quiz', icon: '🎓', title: 'Primeiro Passo', desc: 'Completou o primeiro teste na plataforma' },
    { id: 'topic4_master', icon: '🌊', title: 'Mestre da Hemodinâmica', desc: 'Aproveitamento ≥ 80% no Tópico 4 (Hidrodinâmica)' },
    { id: 'radiation_pro', icon: '🛡️', title: 'Guardião da Radioproteção', desc: 'Aproveitamento ≥ 80% no Tópico 5 ou 7 (Radiações)' },
    { id: 'biomech_expert', icon: '🦴', title: 'Biólogo Biomecânico', desc: 'Aproveitamento ≥ 80% no Tópico 1, 2 ou 3 (Mecânica)' },
    { id: 'nuclear_expert', icon: '⚛️', title: 'Físico Nuclear Clínico', desc: 'Aproveitamento ≥ 80% no Tópico 6 ou 8 (Física Nuclear)' },
    { id: 'honor_roll', icon: '🌟', title: 'Aluno de Honra', desc: 'Nota ≥ 18,0 valores num teste de 20 ou mais questões' },
    { id: 'real_exam_pass', icon: '⏱️', title: 'Prova de Fogo', desc: 'Aprovado em Simulação Real de Frequência (≥ 9,5 val.)' },
    { id: 'clean_mistakes', icon: '🧹', title: 'Caderno Imaculado', desc: 'Treino de erros completado com 100% de acertos' },
    { id: 'marathon', icon: '🏃', title: 'Maratonista Clínico', desc: 'Completou 50 ou mais questões numa única sessão' },
    { id: 'streak_3', icon: '🔥', title: 'Dedicação Contínua', desc: 'Estudou durante 3 ou mais dias consecutivos' }
  ];

  function getUnlockedBadges() {
    return JSON.parse(localStorage.getItem('biofisica_badges') || '{}');
  }

  function unlockBadge(badgeId) {
    const badges = getUnlockedBadges();
    if (!badges[badgeId]) {
      const today = new Date().toLocaleDateString('pt-PT', { day: '2-digit', month: '2-digit', year: 'numeric' });
      badges[badgeId] = today;
      localStorage.setItem('biofisica_badges', JSON.stringify(badges));

      const def = BADGES_DEFINITIONS.find(b => b.id === badgeId);
      if (def) {
        showToast(`🎉 <strong>Nova Conquista Desbloqueada!</strong><br>${def.icon} <strong>${def.title}</strong>: ${def.desc}`, 'toast-badge', 5000);
      }
    }
  }

  function checkAndAwardBadges(summary) {
    unlockBadge('first_quiz');

    if (summary.totalQuestions >= 20 && summary.grade20 >= 18.0) {
      unlockBadge('honor_roll');
    }

    if (summary.totalQuestions >= 50) {
      unlockBadge('marathon');
    }

    if (summary.feedbackMode === 'delayed' && summary.grade20 >= 9.5) {
      unlockBadge('real_exam_pass');
    }

    if (quiz.mode === 'custom' && quiz.customTitle === '📕 Caderno de Erros' && summary.percentage === 100) {
      unlockBadge('clean_mistakes');
    }

    // Tópicos específicos
    if (summary.topicBreakdown) {
      if (summary.topicBreakdown[4] && summary.topicBreakdown[4].percentage >= 80) {
        unlockBadge('topic4_master');
      }
      if ((summary.topicBreakdown[5] && summary.topicBreakdown[5].percentage >= 80) ||
          (summary.topicBreakdown[7] && summary.topicBreakdown[7].percentage >= 80)) {
        unlockBadge('radiation_pro');
      }
      if ((summary.topicBreakdown[1] && summary.topicBreakdown[1].percentage >= 80) ||
          (summary.topicBreakdown[2] && summary.topicBreakdown[2].percentage >= 80) ||
          (summary.topicBreakdown[3] && summary.topicBreakdown[3].percentage >= 80)) {
        unlockBadge('biomech_expert');
      }
      if ((summary.topicBreakdown[6] && summary.topicBreakdown[6].percentage >= 80) ||
          (summary.topicBreakdown[8] && summary.topicBreakdown[8].percentage >= 80)) {
        unlockBadge('nuclear_expert');
      }
    }
  }

  function renderBadgesSection() {
    const unlocked = getUnlockedBadges();
    badgesGrid.innerHTML = '';

    BADGES_DEFINITIONS.forEach(b => {
      const isUnlocked = Boolean(unlocked[b.id]);
      const card = document.createElement('div');
      card.className = `badge-card ${isUnlocked ? 'unlocked' : 'locked'}`;
      card.innerHTML = `
        <span class="badge-icon">${b.icon}</span>
        <div class="badge-info">
          <h4>${b.title}</h4>
          <p>${b.desc}</p>
          ${isUnlocked ? `<span class="badge-unlocked-at">✓ Conquistado em ${unlocked[b.id]}</span>` : '<span style="font-size: 0.7rem; color: var(--text-muted);">🔒 Bloqueado</span>'}
        </div>
      `;
      badgesGrid.appendChild(card);
    });
  }

  // =========================================================================
  // 13. Funcionalidade 2E: Motor de Pesquisa Rápida e Glossário
  // =========================================================================
  function openSearchModal() {
    modalSearch.classList.remove('hidden');
    searchInput.value = '';
    searchStatusText.textContent = 'Digita pelo menos 2 caracteres para pesquisar';
    searchCountBadge.classList.add('hidden');
    searchResultsList.innerHTML = `
      <div class="empty-state" style="padding: 2rem 1rem;">
        <p>💡 Podes pesquisar por fórmulas (ex: <em>Poiseuille, Reynolds, Young</em>), conceitos (<em>isótopos, atrito, radiação</em>) ou aplicações clínicas de enfermagem.</p>
      </div>
    `;
    setTimeout(() => searchInput.focus(), 150);
  }

  function closeSearchModal() {
    modalSearch.classList.add('hidden');
  }

  btnOpenSearch.addEventListener('click', openSearchModal);
  btnHeroSearch.addEventListener('click', openSearchModal);
  btnCloseSearchModal.addEventListener('click', closeSearchModal);
  btnCancelSearchModal.addEventListener('click', closeSearchModal);
  modalSearch.addEventListener('click', (e) => {
    if (e.target === modalSearch) closeSearchModal();
  });

  // Atalho global de teclado: Ctrl+K ou Cmd+K
  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      if (modalSearch.classList.contains('hidden')) {
        openSearchModal();
      } else {
        closeSearchModal();
      }
    }
    if (e.key === 'Escape') {
      if (!modalSearch.classList.contains('hidden')) closeSearchModal();
      if (!modalSession.classList.contains('hidden')) closeSessionModal();
      if (!modalWorksheet.classList.contains('hidden')) closeWorksheetModal();
    }
  });

  // Função de destaque de termos encontrados
  function highlightText(text, query) {
    if (!query) return text;
    const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
  }

  // Executa a pesquisa em tempo real
  let searchDebounceTimeout = null;
  searchInput.addEventListener('input', () => {
    clearTimeout(searchDebounceTimeout);
    searchDebounceTimeout = setTimeout(() => {
      const q = searchInput.value.trim().toLowerCase();
      if (q.length < 2) {
        searchStatusText.textContent = 'Digita pelo menos 2 caracteres para pesquisar';
        searchCountBadge.classList.add('hidden');
        searchResultsList.innerHTML = '';
        return;
      }

      const matches = QUESTIONS_DATA.filter(item => {
        return item.question.toLowerCase().includes(q) ||
               item.explanation.toLowerCase().includes(q) ||
               item.nursingApplication.toLowerCase().includes(q) ||
               item.options.some(opt => opt.toLowerCase().includes(q));
      });

      searchStatusText.textContent = `Resultados para "${searchInput.value.trim()}":`;
      searchCountBadge.textContent = `${matches.length} encontradas`;
      searchCountBadge.classList.remove('hidden');

      if (matches.length === 0) {
        searchResultsList.innerHTML = `
          <div class="empty-state">
            <p>Nenhuma questão encontrada com o termo "<strong>${searchInput.value.trim()}</strong>".</p>
            <p>Tenta termos como <em>viscosidade, Reynolds, Bergonié, Poiseuille, iodo, atrito</em>.</p>
          </div>
        `;
        return;
      }

      // Renderizar até 40 resultados para rapidez absoluta
      const rendered = matches.slice(0, 40);
      const starredList = getStarred();
      const letters = ['A', 'B', 'C', 'D'];

      searchResultsList.innerHTML = rendered.map(item => {
        const topicMeta = TOPICS_DATA.find(t => t.id === item.topicId);
        const isStarred = starredList.includes(item.id);
        const highlightedQ = highlightText(item.question, q);
        const highlightedExp = highlightText(item.explanation, q);
        const highlightedNursing = highlightText(item.nursingApplication, q);
        const correctOpt = item.options[item.correctIndex];

        return `
          <div class="search-result-card">
            <div class="search-res-header">
              <span class="search-res-topic">${topicMeta ? `${topicMeta.icon} Tópico ${topicMeta.id}` : ''} • Questão #${item.id}</span>
              <button class="btn-star ${isStarred ? 'active' : ''}" data-qid="${item.id}" title="Marcar com estrela">
                ${isStarred ? '⭐' : '☆'}
              </button>
            </div>
            <p class="search-res-q">${highlightedQ}</p>
            <p class="search-res-answer"><strong>Opção Correta (${letters[item.correctIndex]}):</strong> ${correctOpt}</p>
            <div class="search-res-detail">
              <p><strong>Justificação:</strong> ${highlightedExp}</p>
              <p style="margin-top: 0.35rem;"><strong>💡 Enfermagem:</strong> ${highlightedNursing}</p>
            </div>
            <div style="margin-top: 0.75rem; text-align: right;">
              <button class="btn btn-sm btn-outline btn-search-practice-one" data-qid="${item.id}">
                🎯 Praticar esta Questão
              </button>
            </div>
          </div>
        `;
      }).join('');

      // Ouvintes de estrela e prática na pesquisa
      searchResultsList.querySelectorAll('.btn-star').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const qId = parseInt(btn.getAttribute('data-qid'), 10);
          const starred = toggleStar(qId);
          btn.textContent = starred ? '⭐' : '☆';
          btn.classList.toggle('active', starred);
        });
      });

      searchResultsList.querySelectorAll('.btn-search-practice-one').forEach(btn => {
        btn.addEventListener('click', () => {
          const qId = parseInt(btn.getAttribute('data-qid'), 10);
          const targetQ = QUESTIONS_DATA.find(i => i.id === qId);
          if (targetQ) {
            closeSearchModal();
            startQuizSession({
              mode: 'custom',
              customQuestions: [targetQ],
              customTitle: `Questão #${targetQ.id}`,
              count: 1,
              feedbackMode: 'immediate',
              timerSeconds: 0
            });
          }
        });
      });

    }, 150);
  });

  // =========================================================================
  // 14. Funcionalidade 3G: Ficha de Trabalho em PDF / Impressão
  // =========================================================================
  function openWorksheetModal() {
    modalWorksheet.classList.remove('hidden');
  }

  function closeWorksheetModal() {
    modalWorksheet.classList.add('hidden');
  }

  btnOpenWorksheet.addEventListener('click', openWorksheetModal);
  btnCloseWorksheetModal.addEventListener('click', closeWorksheetModal);
  btnCancelWorksheetModal.addEventListener('click', closeWorksheetModal);
  modalWorksheet.addEventListener('click', (e) => {
    if (e.target === modalWorksheet) closeWorksheetModal();
  });

  btnGeneratePrintWorksheet.addEventListener('click', () => {
    const selectedTopic = worksheetTopicSelect.value;
    const count = parseInt(worksheetCountSelect.value, 10);
    const includeSolutions = worksheetIncludeSolutions.checked;

    let pool = [];
    let sheetTitle = 'Simulação Geral Abrangente de Biofísica';

    if (selectedTopic === 'all') {
      pool = quiz.shuffleArray(QUESTIONS_DATA);
    } else if (selectedTopic === 'mistakes') {
      const mistakes = getMistakes();
      if (mistakes.length === 0) {
        showToast('Não tem erros registados no Caderno de Erros para gerar a ficha.', 'toast-info');
        return;
      }
      pool = QUESTIONS_DATA.filter(q => mistakes.includes(q.id));
      sheetTitle = 'Ficha Especial: Caderno de Erros';
    } else if (selectedTopic === 'starred') {
      const starred = getStarred();
      if (starred.length === 0) {
        showToast('Não tem perguntas marcadas com estrela para gerar a ficha.', 'toast-info');
        return;
      }
      pool = QUESTIONS_DATA.filter(q => starred.includes(q.id));
      sheetTitle = 'Ficha Especial: Perguntas Marcadas (⭐)';
    } else {
      const tId = parseInt(selectedTopic, 10);
      pool = QUESTIONS_DATA.filter(q => q.topicId === tId);
      const tMeta = TOPICS_DATA.find(t => t.id === tId);
      sheetTitle = tMeta ? `Tópico ${tMeta.id}: ${tMeta.title}` : `Tópico ${tId}`;
    }

    const selectedQuestions = quiz.shuffleArray(pool).slice(0, count);

    // Gerar o HTML imprimível profissional
    const letters = ['A', 'B', 'C', 'D'];
    let printHtml = `
      <div class="print-school-header">
        <h1 class="print-school-title">Escola Superior de Enfermagem • Biofísica Médica (1.º Ano)</h1>
        <p class="print-school-sub"><strong>FICHA DE AUTOAVALIAÇÃO E CONSOLIDAÇÃO DE CONHECIMENTOS</strong> • ${sheetTitle}</p>
        <div class="print-meta-grid">
          <div class="print-meta-field">Nome do Aluno: __________________________________________________</div>
          <div class="print-meta-field">Data: ___/___/202___</div>
          <div class="print-meta-field">Turma / Turno: ______</div>
        </div>
        <div class="print-instructions">
          <strong>Instruções:</strong> Para cada uma das ${selectedQuestions.length} questões seguintes, assinala com uma cruz ou preenchimento a única opção cientificamente correta. Tempo estimado: ${Math.round(selectedQuestions.length * 1.5)} minutos.
        </div>
      </div>

      <div class="print-questions-list">
    `;

    selectedQuestions.forEach((q, idx) => {
      printHtml += `
        <div class="print-q-card">
          <p class="print-q-title">${idx + 1}. ${q.question}</p>
          <div class="print-options-grid">
            ${q.options.map((opt, oIdx) => `
              <div class="print-option-row">
                <span class="print-checkbox"></span>
                <span><strong>(${letters[oIdx]})</strong> ${opt}</span>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    });

    printHtml += `</div>`;

    // Folha de Soluções com quebra de página
    if (includeSolutions) {
      printHtml += `
        <div class="print-solutions-section">
          <div class="print-sol-header">
            <h2 style="font-size: 13pt; text-transform: uppercase;">Folha de Soluções & Grelha de Correção</h2>
            <p style="font-size: 9.5pt; color: #555;">Verifica o teu desempenho e analisa as justificações científicas de cada questão.</p>
          </div>
      `;

      selectedQuestions.forEach((q, idx) => {
        printHtml += `
          <div class="print-sol-item">
            <p class="print-sol-q">Questão ${idx + 1}:</p>
            <p class="print-sol-ans">✓ Resposta Correta: Opção (${letters[q.correctIndex]}) - ${q.options[q.correctIndex]}</p>
            <p class="print-sol-exp"><strong>Justificação:</strong> ${q.explanation}</p>
            <p class="print-sol-exp"><strong>💡 Relevância Clínica:</strong> ${q.nursingApplication}</p>
          </div>
        `;
      });

      printHtml += `</div>`;
    }

    printableWorksheet.innerHTML = printHtml;
    closeWorksheetModal();

    // Invocar impressão nativa do navegador
    setTimeout(() => {
      window.print();
    }, 250);
  });

  // =========================================================================
  // 15. Resumos Teóricos e Fórmulas
  // =========================================================================
  function renderStudySection() {
    studyTopicsAccordion.innerHTML = '';
    TOPIC_SUMMARIES.forEach(item => {
      const topicMeta = TOPICS_DATA.find(t => t.id === item.topicId);
      const accordionItem = document.createElement('div');
      accordionItem.className = 'accordion-item';
      accordionItem.innerHTML = `
        <div class="accordion-header">
          <span>${topicMeta ? topicMeta.icon : '📖'} ${item.title}</span>
          <span class="accordion-arrow">▼</span>
        </div>
        <div class="accordion-body">
          ${item.summary}
          <div style="margin-top: 1rem; text-align: right;">
            <button class="btn btn-sm btn-primary btn-study-practice" data-topic="${item.topicId}">
              Fazer Teste deste Tópico ➔
            </button>
          </div>
        </div>
      `;
      studyTopicsAccordion.appendChild(accordionItem);
    });

    document.querySelectorAll('.accordion-header').forEach(hdr => {
      hdr.addEventListener('click', () => {
        const item = hdr.parentElement;
        item.classList.toggle('active');
      });
    });

    if (studyTopicsAccordion.firstElementChild) {
      studyTopicsAccordion.firstElementChild.classList.add('active');
    }

    document.querySelectorAll('.btn-study-practice').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const tId = parseInt(e.target.getAttribute('data-topic'), 10);
        openTopicSessionModal(tId);
      });
    });
  }

  btnViewStudy.addEventListener('click', () => {
    renderStudySection();
    showView(studyView);
  });

  btnHomeFromStudy.addEventListener('click', () => {
    showView(homeView);
  });

  // =========================================================================
  // 16. Estatísticas e Histórico
  // =========================================================================
  function renderStatsSection() {
    renderBadgesSection();

    const history = JSON.parse(localStorage.getItem('biofisica_history') || '[]');
    if (history.length === 0) {
      statsContent.innerHTML = `
        <div class="empty-state">
          <p>Ainda não realizaste nenhum teste de prática.</p>
          <p>Completa um teste por tópico ou uma simulação de exame para acompanhares aqui as tuas notas, evolução e medalhas!</p>
        </div>
      `;
      return;
    }

    const totalTests = history.length;
    const avgGrade = (history.reduce((acc, h) => acc + h.grade20, 0) / totalTests).toFixed(1);
    const passedTests = history.filter(h => h.grade20 >= 9.5).length;
    const passRate = Math.round((passedTests / totalTests) * 100);

    let html = `
      <div class="stats-cards-grid">
        <div class="stat-card">
          <span class="stat-value">${totalTests}</span>
          <span class="stat-label">Testes Realizados</span>
        </div>
        <div class="stat-card">
          <span class="stat-value">${avgGrade} <small>/20</small></span>
          <span class="stat-label">Média Global</span>
        </div>
        <div class="stat-card">
          <span class="stat-value">${passRate}%</span>
          <span class="stat-label">Taxa de Aprovação</span>
        </div>
      </div>

      <h4 style="margin-top: 2rem;">Histórico das Últimas Tentativas:</h4>
      <div class="history-table-container">
        <table class="history-table">
          <thead>
            <tr>
              <th>Data</th>
              <th>Modalidade</th>
              <th>Modo</th>
              <th>Acertos</th>
              <th>Nota (0-20)</th>
              <th>Resultado</th>
            </tr>
          </thead>
          <tbody>
    `;

    history.forEach(h => {
      const topicObj = h.topicId ? TOPICS_DATA.find(t => t.id === h.topicId) : null;
      let modeLabel = '🎯 Exame Global';
      if (h.customTitle) {
        modeLabel = h.customTitle;
      } else if (topicObj) {
        modeLabel = `${topicObj.icon} ${topicObj.shortTitle}`;
      }

      const isPassed = h.grade20 >= 9.5;
      const feedbackPill = h.feedbackMode === 'delayed' ? '⏱️ Real' : '🟢 Treino';
      html += `
        <tr>
          <td>${h.date}</td>
          <td>${modeLabel}</td>
          <td><span style="font-size: 0.75rem; font-weight: 600;">${feedbackPill}</span></td>
          <td>${h.correct} / ${h.total} (${h.percentage}%)</td>
          <td><strong>${h.grade20}</strong></td>
          <td><span class="status-pill ${isPassed ? 'status-pass' : 'status-fail'}">${isPassed ? 'Aprovado' : 'Rever'}</span></td>
        </tr>
      `;
    });

    html += `
          </tbody>
        </table>
      </div>
    `;

    statsContent.innerHTML = html;
  }

  btnViewStats.addEventListener('click', () => {
    renderStatsSection();
    showView(statsView);
  });

  btnHomeFromStats.addEventListener('click', () => {
    showView(homeView);
  });

  btnClearStats.addEventListener('click', () => {
    if (confirm('Desejas limpar todo o histórico de testes e estatísticas guardadas no teu navegador?')) {
      localStorage.removeItem('biofisica_history');
      renderStatsSection();
    }
  });

  // =========================================================================
  // 17. Inicialização da Aplicação
  // =========================================================================
  renderTopicCards();
  renderStudySection();
});
