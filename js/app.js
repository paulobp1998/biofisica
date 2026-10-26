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
  const arenaView = document.getElementById('view-arena');
  const teacherView = document.getElementById('view-teacher');

  // Navegação e Topo
  const navBrand = document.getElementById('nav-brand');
  const btnNavArena = document.getElementById('btn-nav-arena');
  const btnNavTeacher = document.getElementById('btn-nav-teacher');
  const btnOpenTeacherAudit = document.getElementById('btn-open-teacher-audit');
  const linkFooterTeacher = document.getElementById('link-footer-teacher');
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
  const btnOpenArena = document.getElementById('btn-open-arena');
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
  const quizAiBanner = document.getElementById('quiz-ai-banner');
  const quizQidBannerTag = document.getElementById('quiz-qid-banner-tag');
  const quizQidBadge = document.getElementById('quiz-qid-badge');
  const btnCopyQid = document.getElementById('btn-copy-qid');
  const questionText = document.getElementById('question-text');
  const optionsContainer = document.getElementById('options-container');
  const feedbackCard = document.getElementById('feedback-card');
  const feedbackQidTag = document.getElementById('feedback-qid-tag');
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

  // Revisão espaçada, confiança, resultados e teoria
  const reviewDueCard = document.getElementById('review-due-card');
  const reviewDueTitle = document.getElementById('review-due-title');
  const reviewDueSub = document.getElementById('review-due-sub');
  const btnReviewDue = document.getElementById('btn-review-due');
  const confidenceRow = document.getElementById('confidence-row');
  const resultFocus = document.getElementById('result-focus');
  const modalTheory = document.getElementById('modal-theory');
  const modalTheoryTitle = document.getElementById('modal-theory-title');
  const modalTheorySub = document.getElementById('modal-theory-sub');
  const modalTheoryBody = document.getElementById('modal-theory-body');
  const btnTheoryPractice = document.getElementById('btn-theory-practice');
  const btnCloseTheoryModal = document.getElementById('btn-close-theory-modal');
  const btnCancelTheoryModal = document.getElementById('btn-cancel-theory-modal');
  const heroTag = document.getElementById('hero-tag');
  const heroDesc = document.getElementById('hero-desc');

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
  let timerRemainingMs = 0;
  let timerLastTick = 0;
  let currentQuestionId = null;
  let currentConfidence = null;

  // =========================================================================
  // Aviso Temporário do Docente (Plataforma Cluny) - Validade: 72 Horas
  // Ativo de 2026-10-09T17:13:04+01:00 até 2026-10-12T17:13:04+01:00
  // =========================================================================
  const CLUNY_NOTICE_EXPIRY = 1791821584000; // 2026-10-12T17:13:04+01:00

  function initTemporaryTeacherNotice() {
    const banner = document.getElementById('cluny-notice-banner');
    if (!banner) return;

    const now = Date.now();
    if (now >= CLUNY_NOTICE_EXPIRY) {
      // 72 horas ultrapassadas: remove completamente o aviso do site
      banner.remove();
      return;
    }

    // Permitir fechar o aviso na sessão atual
    const btnClose = document.getElementById('btn-close-cluny-notice');
    if (btnClose) {
      btnClose.addEventListener('click', () => {
        banner.style.opacity = '0';
        banner.style.transform = 'translateY(-8px)';
        setTimeout(() => banner.remove(), 300);
      });
    }

    // Auto-remoção em tempo real se a sessão permanecer aberta além das 72h
    const remainingMs = CLUNY_NOTICE_EXPIRY - now;
    if (remainingMs > 0 && remainingMs < 0x7FFFFFFF) {
      setTimeout(() => {
        const el = document.getElementById('cluny-notice-banner');
        if (el) el.remove();
      }, remainingMs);
    }
  }

  initTemporaryTeacherNotice();

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

  // Revisão espaçada do Caderno de Erros.
  // Errar volta a agendar a pergunta para o dia seguinte (ou para hoje, se havia certeza).
  // A pergunta só sai do caderno depois de 2 respostas certas em dias diferentes,
  // a primeira reagendando a revisão para daí a 3 dias.
  const SRS_REVIEW_DAYS = 3;
  const SRS_CORRECT_TO_MASTER = 2;

  function localDateStr(date = new Date()) {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
  }

  function addDaysStr(dateStr, days) {
    const [y, m, d] = dateStr.split('-').map(Number);
    return localDateStr(new Date(y, m - 1, d + days));
  }

  function getSrs() {
    try {
      return JSON.parse(localStorage.getItem('biofisica_srs') || '{}') || {};
    } catch (e) {
      return {};
    }
  }

  function saveSrs(srs) {
    localStorage.setItem('biofisica_srs', JSON.stringify(srs));
  }

  function isMistakeDue(id) {
    const entry = getSrs()[id];
    return !entry || entry.due <= localDateStr();
  }

  function addMistakes(ids, urgentIds = []) {
    if (!ids || ids.length === 0) return;
    const current = getMistakes();
    const set = new Set([...current, ...ids]);
    localStorage.setItem('biofisica_mistakes', JSON.stringify(Array.from(set)));

    const srs = getSrs();
    const today = localDateStr();
    ids.forEach(id => {
      srs[id] = { box: 0, due: urgentIds.includes(id) ? today : addDaysStr(today, 1), lastCorrect: null };
    });
    saveSrs(srs);
    updateQuickActionCounters();
  }

  function resolveMistake(id) {
    const current = getMistakes();
    const filtered = current.filter(qId => qId !== id);
    localStorage.setItem('biofisica_mistakes', JSON.stringify(filtered));
    const srs = getSrs();
    delete srs[id];
    saveSrs(srs);
    updateQuickActionCounters();
  }

  // Regista uma resposta certa a uma pergunta do caderno. Devolve true se a pergunta ficou dominada.
  function recordCorrectReview(id) {
    if (!getMistakes().includes(id)) return false;
    const srs = getSrs();
    const today = localDateStr();
    const entry = srs[id] || { box: 0, due: today, lastCorrect: null };
    if (entry.lastCorrect === today) return false; // só conta um acerto por dia
    entry.box += 1;
    entry.lastCorrect = today;
    if (entry.box >= SRS_CORRECT_TO_MASTER) {
      resolveMistake(id);
      return true;
    }
    entry.due = addDaysStr(today, SRS_REVIEW_DAYS);
    srs[id] = entry;
    saveSrs(srs);
    return false;
  }

  function getActiveMistakeQuestions() {
    const ids = new Set(getMistakes());
    const active = QUESTIONS_DATA.filter(q => ids.has(q.id));
    // As que já é altura de rever vêm primeiro
    return [...active.filter(q => isMistakeDue(q.id)), ...active.filter(q => !isMistakeDue(q.id))];
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
    const mistakeQuestions = getActiveMistakeQuestions();
    const sCount = getStarred().length;
    countMistakes.textContent = mistakeQuestions.length;
    countStarred.textContent = sCount;

    const dueCount = mistakeQuestions.filter(q => isMistakeDue(q.id)).length;
    if (dueCount > 0) {
      reviewDueTitle.textContent = `📅 Hoje tens ${dueCount} ${dueCount === 1 ? 'pergunta' : 'perguntas'} para rever`;
      reviewDueSub.textContent = 'O Caderno de Erros volta a testar o que erraste ao fim de alguns dias. Uma pergunta só sai do caderno depois de 2 respostas certas em dias diferentes.';
      reviewDueCard.classList.remove('hidden');
    } else {
      reviewDueCard.classList.add('hidden');
    }
  }

  updateQuickActionCounters();

  // Botão estrela no ecrã de quiz
  btnStarQuestion.addEventListener('click', () => {
    if (!currentQuestionId) return;
    const isStarred = toggleStar(currentQuestionId);
    btnStarQuestion.textContent = isStarred ? '⭐' : '☆';
    btnStarQuestion.classList.toggle('active', isStarred);
  });

  // Funções de cópia para a área de transferência com fallback
  function copyTextToClipboard(text, successMessage) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        showToast(successMessage || `📋 Copiado: <strong>${text}</strong>`, 'toast-success', 2800);
      }).catch(() => {
        fallbackCopyText(text, successMessage);
      });
    } else {
      fallbackCopyText(text, successMessage);
    }
  }

  function fallbackCopyText(text, successMessage) {
    const tempInput = document.createElement('input');
    tempInput.value = text;
    tempInput.style.position = 'fixed';
    tempInput.style.opacity = '0';
    document.body.appendChild(tempInput);
    tempInput.select();
    try {
      document.execCommand('copy');
      showToast(successMessage || `📋 Copiado: <strong>${text}</strong>`, 'toast-success', 2800);
    } catch (e) {
      showToast(`Número da pergunta: <strong>${text}</strong>`, 'toast-info', 3500);
    }
    document.body.removeChild(tempInput);
  }

  // Ação de copiar o ID da pergunta atual no quiz
  const handleCopyCurrentQid = () => {
    if (!currentQuestionId) return;
    const qidStr = questionLabel(currentQuestionId);
    copyTextToClipboard(qidStr, `📋 Copiado para a área de transferência: <strong>${qidStr}</strong>`);
  };

  if (btnCopyQid) {
    btnCopyQid.addEventListener('click', handleCopyCurrentQid);
  }
  if (quizQidBadge) {
    quizQidBadge.addEventListener('click', handleCopyCurrentQid);
  }

  // Abertura do Caderno de Erros
  function openMistakesSession(onlyDue = false) {
    const all = getActiveMistakeQuestions();
    if (all.length === 0) {
      showToast('🎉 O teu Caderno de Erros está vazio! Parabéns pelo excelente aproveitamento.', 'toast-success');
      return;
    }
    const due = all.filter(q => isMistakeDue(q.id));
    const questions = onlyDue && due.length > 0 ? due : all;
    const subtitle = due.length > 0
      ? `Tens ${all.length} questões guardadas, ${due.length} para rever hoje (aparecem primeiro):`
      : `Tens ${all.length} questões guardadas. Nenhuma está agendada para hoje, mas podes treinar à vontade:`;
    openCustomSessionModal('📕 Caderno de Erros', questions, subtitle);
  }

  btnOpenMistakes.addEventListener('click', () => openMistakesSession(false));
  btnReviewDue.addEventListener('click', () => openMistakesSession(true));

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
    [homeView, quizView, resultsView, studyView, statsView, arenaView, teacherView].forEach(v => {
      if (v) {
        v.classList.add('hidden');
        v.classList.remove('active-view');
      }
    });
    if (view) {
      view.classList.remove('hidden');
      view.classList.add('active-view');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
    renderResumeBanner();
  }
  window.showView = showView;

  navBrand.addEventListener('click', (e) => {
    e.preventDefault();
    showView(homeView);
  });

  if (btnNavArena) {
    btnNavArena.addEventListener('click', () => {
      showView(arenaView);
      if (window.arenaUI) window.arenaUI.showScreen('select');
    });
  }

  if (btnOpenArena) {
    btnOpenArena.addEventListener('click', () => {
      showView(arenaView);
      if (window.arenaUI) window.arenaUI.showScreen('select');
    });
  }

  // Abertura Segura do Painel do Docente (Requer Autenticação por PIN Mestre)
  const openTeacherPanel = () => {
    if (window.teacherManager) {
      window.teacherManager.requestAuthAndOpen();
    }
  };

  if (btnNavTeacher) {
    btnNavTeacher.addEventListener('click', openTeacherPanel);
  }
  if (btnOpenTeacherAudit) {
    btnOpenTeacherAudit.addEventListener('click', openTeacherPanel);
  }
  if (linkFooterTeacher) {
    linkFooterTeacher.addEventListener('click', (e) => {
      e.preventDefault();
      openTeacherPanel();
    });
  }

  // =========================================================================
  // 7b. Textos dinâmicos, aviso minimizável e conceitos de estudo
  // =========================================================================
  function activeFocusPhrase() {
    const ids = typeof UNLOCKED_TOPIC_IDS !== 'undefined' ? UNLOCKED_TOPIC_IDS : [1];
    const n = QUESTIONS_DATA.length;
    return ids.length === 1
      ? `Foca o teu estudo nas ${n} questões ativas do Tópico ${ids[0]}!`
      : `Foca o teu estudo nas ${n} questões dos tópicos ativos!`;
  }

  function renderDynamicTexts() {
    const ids = typeof UNLOCKED_TOPIC_IDS !== 'undefined' ? UNLOCKED_TOPIC_IDS : [1];
    const n = QUESTIONS_DATA.length;
    const topics = ids.map(id => TOPICS_DATA.find(t => t.id === id)).filter(Boolean);
    const topicsShort = ids.length === 1 ? `Tópico ${ids[0]}` : `Tópicos ${ids.slice(0, -1).join(', ')} e ${ids[ids.length - 1]}`;
    const topicsLong = topics.map(t => `Tópico ${t.id} (${t.shortTitle})`).join(' e ');

    if (heroTag) heroTag.textContent = `✨ 100% Gratuito • ${n} Questões de Biofísica Ativas (${topicsShort}) • Ensino Superior`;
    if (heroDesc) {
      heroDesc.innerHTML = `Consolida os conteúdos das tuas aulas com <strong>${n} questões de Biofísica</strong> rigorosas do <strong>${topicsLong}</strong>, com justificações científicas completas, análise detalhada de distratores e notas de aplicação prática.`;
    }
    const footerInfo = document.getElementById('footer-info');
    if (footerInfo) {
      footerInfo.textContent = ` • ${n} Questões de Biofísica Ativas (${topicsShort}) • Os restantes tópicos estão temporariamente bloqueados aos alunos`;
    }
  }

  renderDynamicTexts();

  // Comunicado sobre IA: depois de lido, fica numa linha só (a preferência fica guardada no navegador)
  function initAiNotice() {
    const notice = document.getElementById('site-notice-banner');
    const btnCollapse = document.getElementById('btn-notice-collapse');
    const btnExpand = document.getElementById('btn-notice-expand');
    if (!notice || !btnCollapse || !btnExpand) return;
    const KEY = 'biofisica_ai_notice_collapsed';
    let collapsed = false;
    try { collapsed = localStorage.getItem(KEY) === '1'; } catch (e) { /* sem armazenamento */ }
    const apply = (value) => {
      notice.classList.toggle('collapsed', value);
      btnExpand.setAttribute('aria-expanded', String(!value));
      try { localStorage.setItem(KEY, value ? '1' : '0'); } catch (e) { /* sem armazenamento */ }
    };
    notice.classList.toggle('collapsed', collapsed);
    btnCollapse.addEventListener('click', () => apply(true));
    btnExpand.addEventListener('click', () => apply(false));
  }

  initAiNotice();

  function conceptQuestions(conceptId) {
    return QUESTIONS_DATA.filter(q => getConceptId(q.id) === conceptId);
  }

  function renderBlockHtml(block) {
    const formulas = block.formulas && block.formulas.length
      ? `<div class="formula-box"><div class="formula-box-title">Fórmulas</div>${block.formulas.map(f =>
          `<div class="formula-row"><code>${f.expr}</code><span>${f.note}</span></div>`).join('')}</div>`
      : '';
    const example = block.example ? `<div class="study-example"><strong>Exemplo:</strong> ${block.example}</div>` : '';
    const fig = (typeof STUDY_FIGURES !== 'undefined' && STUDY_FIGURES[block.id])
      ? `<figure class="study-figure">${STUDY_FIGURES[block.id].svg}<figcaption>${STUDY_FIGURES[block.id].caption}</figcaption></figure>`
      : '';
    return `
      ${formulas}
      ${fig}
      <div class="study-block-body">${block.body}</div>
      ${example}
      <div class="study-pitfall"><strong>⚠️ Erro comum:</strong> ${block.pitfall}</div>
      <div class="study-nursing"><strong>🩺 Em enfermagem:</strong> ${block.nursing}</div>
    `;
  }

  let theoryConceptId = null;

  function openTheoryModal(conceptId) {
    const block = getStudyBlock(conceptId);
    if (!block) return;
    theoryConceptId = conceptId;
    const topicMeta = TOPICS_DATA.find(t => t.id === block.topicId);
    modalTheoryTitle.textContent = `${block.icon} ${block.title}`;
    modalTheorySub.textContent = topicMeta ? `Tópico ${topicMeta.id}: ${topicMeta.shortTitle}` : '';
    modalTheoryBody.innerHTML = renderBlockHtml(block);
    const count = conceptQuestions(conceptId).length;
    btnTheoryPractice.classList.toggle('hidden', count === 0);
    btnTheoryPractice.textContent = `🎯 Praticar este conceito (${count})`;
    modalTheory.classList.remove('hidden');
    modalTheoryBody.scrollTop = 0;
  }

  function closeTheoryModal() {
    modalTheory.classList.add('hidden');
  }

  function openConceptSession(conceptId) {
    const block = getStudyBlock(conceptId);
    const questions = conceptQuestions(conceptId);
    if (!block || questions.length === 0) {
      showToast('Ainda não há perguntas ativas para este conceito.', 'toast-info', 2500);
      return;
    }
    openCustomSessionModal(
      `${block.icon} ${block.title}`,
      quiz.shuffleArray(questions),
      `${questions.length} questões sobre este conceito:`
    );
  }

  btnCloseTheoryModal.addEventListener('click', closeTheoryModal);
  btnCancelTheoryModal.addEventListener('click', closeTheoryModal);
  modalTheory.addEventListener('click', (e) => {
    if (e.target === modalTheory) closeTheoryModal();
  });
  btnTheoryPractice.addEventListener('click', () => {
    const id = theoryConceptId;
    closeTheoryModal();
    if (typeof closeSearchModal === 'function') closeSearchModal();
    if (id) openConceptSession(id);
  });

  // Delegação de eventos para botões gerados dinamicamente (quiz, resultados, estatísticas, pesquisa)
  document.addEventListener('click', (e) => {
    const theoryBtn = e.target.closest('[data-open-theory]');
    if (theoryBtn) {
      openTheoryModal(theoryBtn.getAttribute('data-open-theory'));
      return;
    }
    const practiceBtn = e.target.closest('[data-practice-concept]');
    if (practiceBtn) {
      openConceptSession(practiceBtn.getAttribute('data-practice-concept'));
    }
  });

  // =========================================================================
  // 8. Renderização dos Tópicos no Dashboard
  // =========================================================================
  function renderTopicCards() {
    topicsGrid.innerHTML = '';
    TOPICS_DATA.forEach(topic => {
      const isUnlocked = typeof UNLOCKED_TOPIC_IDS !== 'undefined' ? UNLOCKED_TOPIC_IDS.includes(topic.id) : (topic.id === 1);
      const qCount = (ALL_TOPIC_COLLECTIONS[topic.id] || []).length;
      const card = document.createElement('div');
      card.className = `topic-card ${isUnlocked ? '' : 'topic-card-locked'}`;

      if (isUnlocked) {
        card.innerHTML = `
          <div class="topic-header">
            <span class="topic-icon">${topic.icon}</span>
            <span class="topic-badge">Tópico ${topic.id} • Ativo</span>
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
      } else {
        card.innerHTML = `
          <div class="topic-header">
            <span class="topic-icon" style="filter: grayscale(1); opacity: 0.5;">${topic.icon}</span>
            <span class="topic-badge topic-badge-locked" style="background: rgba(148, 163, 184, 0.15); color: var(--text-muted); border: 1px solid rgba(148, 163, 184, 0.35);">🔒 Bloqueado</span>
          </div>
          <h3 class="topic-title" style="color: var(--text-muted);">${topic.title}</h3>
          <p class="topic-desc" style="color: var(--text-muted); opacity: 0.85;">${topic.description}</p>
          <div class="topic-footer">
            <span class="topic-count text-muted" style="color: var(--text-muted); font-size: 0.85rem;">🔒 Acesso Bloqueado pelo Docente</span>
            <button class="btn btn-secondary btn-sm btn-locked-topic" data-topic="${topic.id}" style="opacity: 0.7; cursor: not-allowed;">
              🔒 Bloqueado
            </button>
          </div>
        `;
      }
      topicsGrid.appendChild(card);
    });

    document.querySelectorAll('.btn-start-topic').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const tId = parseInt(e.target.getAttribute('data-topic'), 10);
        openTopicSessionModal(tId);
      });
    });

    document.querySelectorAll('.btn-locked-topic, .topic-card-locked').forEach(el => {
      el.addEventListener('click', (e) => {
        e.stopPropagation();
        showToast(`🔒 <strong>Tópico Bloqueado pelo Professor</strong><br>O acesso às questões deste tópico está suspenso até nova indicação do docente. ${activeFocusPhrase()}`, 'toast-info', 4500);
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
    if (typeof UNLOCKED_TOPIC_IDS !== 'undefined' && !UNLOCKED_TOPIC_IDS.includes(topicId)) {
      showToast('🔒 <strong>Acesso Bloqueado</strong><br>Este tópico está temporariamente bloqueado pelo professor. Estuda os tópicos ativos!', 'toast-warning', 4000);
      return;
    }
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
      <button class="session-option-card" data-count="${qCount}">
        <span class="session-icon">🏆</span>
        <div class="session-info">
          <strong>${qCount} Questões</strong>
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

    const isSingleTopic = typeof UNLOCKED_TOPIC_IDS !== 'undefined' && UNLOCKED_TOPIC_IDS.length === 1;
    if (isSingleTopic) {
      modalSessionTitle.textContent = `🎯 Simulação de Exame: Tópico 1`;
      modalSessionSubtitle.textContent = `20 ou 40 questões sorteadas das ${QUESTIONS_DATA.length} questões ativas do Tópico 1 (os restantes tópicos estão temporariamente bloqueados pelo docente):`;

      sessionOptionsGrid.innerHTML = `
        <button class="session-option-card selected" data-count="20">
          <span class="session-icon">🎓</span>
          <div class="session-info">
            <strong>20 Questões (0 a 20 Val.)</strong>
            <span>Simulação Padrão Tópico 1 • ~20 min</span>
          </div>
        </button>
        <button class="session-option-card" data-count="40">
          <span class="session-icon">🏆</span>
          <div class="session-info">
            <strong>40 Questões (Exame Alargado)</strong>
            <span>Simulação Aprofundada Tópico 1 • ~40 min</span>
          </div>
        </button>
      `;
    } else {
      modalSessionTitle.textContent = `🎯 Simulação Global de Exame`;
      modalSessionSubtitle.textContent = `Questões sorteadas proporcionalmente dos tópicos ativos da cadeira:`;

      sessionOptionsGrid.innerHTML = `
        <button class="session-option-card selected" data-count="20">
          <span class="session-icon">🎓</span>
          <div class="session-info">
            <strong>20 Questões (0 a 20 Val.)</strong>
            <span>${Math.floor(20 / UNLOCKED_TOPIC_IDS.length)} perguntas por tópico ativo • ~20 min</span>
          </div>
        </button>
        <button class="session-option-card" data-count="40">
          <span class="session-icon">🏆</span>
          <div class="session-info">
            <strong>40 Questões (Exame Alargado)</strong>
            <span>${Math.floor(40 / UNLOCKED_TOPIC_IDS.length)} perguntas por tópico ativo • ~40 min</span>
          </div>
        </button>
      `;
    }

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
      startQuizTimer(config.timerSeconds);
    } else {
      quizTimerBadge.classList.add('hidden');
    }

    acquireWakeLock();
    saveQuizProgress();
    showView(quizView);
    renderQuestion(state);
  }

  // O cronómetro só corre enquanto a página está visível: se o aluno trocar de separador,
  // bloquear o telemóvel ou fechar a página, o tempo fica parado e retoma onde ficou.
  function startQuizTimer(seconds) {
    clearInterval(timerInterval);
    timerRemainingMs = seconds * 1000;
    timerLastTick = Date.now();
    timerSecondsRemaining = Math.ceil(timerRemainingMs / 1000);
    quizTimerBadge.classList.remove('hidden');
    quizTimerBadge.classList.toggle('warning', timerSecondsRemaining <= 60);
    updateTimerDisplay();
    timerInterval = setInterval(tickQuizTimer, 1000);
  }

  function tickQuizTimer() {
    const now = Date.now();
    if (!document.hidden) timerRemainingMs -= now - timerLastTick;
    timerLastTick = now;
    timerSecondsRemaining = Math.ceil(timerRemainingMs / 1000);
    updateTimerDisplay();

    if (timerSecondsRemaining <= 60) {
      quizTimerBadge.classList.add('warning');
    }

    if (timerRemainingMs <= 0) {
      clearInterval(timerInterval);
      showToast('⏱️ Tempo limite esgotado! O exame foi finalizado automaticamente.', 'toast-badge', 5000);
      const summary = quiz.forceFinishExam();
      showResults(summary);
    } else if (timerSecondsRemaining % 5 === 0) {
      saveQuizProgress();
    }
  }

  // ---- Persistência do teste em curso (sobrevive a recarregar, fechar o separador ou perder rede) ----
  const QUIZ_PROGRESS_KEY = 'biofisica_quiz_progress';
  const QUIZ_PROGRESS_MAX_AGE = 14 * 24 * 3600 * 1000;

  function saveQuizProgress() {
    if (!quiz.currentQuestions.length || quiz.currentIndex >= quiz.currentQuestions.length) return;
    try {
      localStorage.setItem(QUIZ_PROGRESS_KEY, JSON.stringify({
        v: 1,
        savedAt: Date.now(),
        config: lastSessionConfig,
        timerRemainingMs: quiz.timerDuration > 0 ? Math.max(0, timerRemainingMs) : 0,
        quiz: quiz.serialize()
      }));
    } catch (e) { /* sem armazenamento: o teste continua a funcionar em memória */ }
  }

  function clearQuizProgress() {
    try { localStorage.removeItem(QUIZ_PROGRESS_KEY); } catch (e) {}
    releaseWakeLock();
    renderResumeBanner();
  }

  function loadQuizProgress() {
    try {
      const snap = JSON.parse(localStorage.getItem(QUIZ_PROGRESS_KEY) || 'null');
      if (!snap || snap.v !== 1 || Date.now() - snap.savedAt > QUIZ_PROGRESS_MAX_AGE) return null;
      return snap;
    } catch (e) { return null; }
  }

  let wakeLock = null;
  async function acquireWakeLock() {
    try {
      if ('wakeLock' in navigator && !wakeLock && !document.hidden) {
        wakeLock = await navigator.wakeLock.request('screen');
        wakeLock.addEventListener('release', () => { wakeLock = null; });
      }
    } catch (e) { wakeLock = null; }
  }
  function releaseWakeLock() {
    try { if (wakeLock) wakeLock.release(); } catch (e) {}
    wakeLock = null;
  }

  // Repõe o teste guardado e mostra a pergunta onde o aluno ficou
  function resumeQuizSession() {
    const snap = loadQuizProgress();
    if (!snap || !quiz.restore(snap.quiz)) {
      clearQuizProgress();
      return false;
    }
    lastSessionConfig = snap.config || lastSessionConfig;
    clearInterval(timerInterval);
    if (quiz.timerDuration > 0) startQuizTimer(Math.max(1, Math.ceil(snap.timerRemainingMs / 1000)));
    else quizTimerBadge.classList.add('hidden');

    showView(quizView);
    const state = quiz.getCurrentState();
    renderQuestion(state);
    const answer = quiz.userAnswers[quiz.currentIndex];
    if (quiz.isAnswered && answer) {
      const isLast = quiz.currentIndex === quiz.currentQuestions.length - 1;
      if (quiz.feedbackMode === 'delayed') {
        optionsContainer.querySelectorAll('.option-btn').forEach((btn, idx) => {
          btn.classList.toggle('exam-selected', idx === answer.selectedIndex);
        });
        btnNext.textContent = isLast ? 'Finalizar Exame e Ver Resultados ➔' : 'Próxima Pergunta ➔';
        btnNext.classList.remove('hidden');
      } else {
        currentConfidence = answer.confidence || null;
        showTrainingFeedback(answer, answer.selectedIndex);
      }
    }
    acquireWakeLock();
    return true;
  }

  // Aviso no início quando há um teste por terminar (ex.: o aluno foi ao início a meio)
  function renderResumeBanner() {
    let banner = document.getElementById('resume-quiz-banner');
    const snap = loadQuizProgress();
    const onQuiz = quizView && quizView.classList.contains('active-view');
    if (!snap || onQuiz) {
      if (banner) banner.remove();
      return;
    }
    if (!banner) {
      banner = document.createElement('div');
      banner.id = 'resume-quiz-banner';
      banner.className = 'focus-card';
      banner.style.cssText = 'display:flex;flex-wrap:wrap;gap:0.75rem;align-items:center;justify-content:space-between;margin-bottom:1rem;';
      homeView.insertBefore(banner, homeView.firstChild);
    }
    const total = snap.quiz.currentQuestions.length;
    const done = snap.quiz.userAnswers.filter(Boolean).length;
    banner.innerHTML = '';
    const text = document.createElement('span');
    text.innerHTML = `📝 Tens um teste por terminar (<strong>${done} de ${total}</strong> respondidas). O progresso está guardado.`;
    const actions = document.createElement('span');
    actions.style.cssText = 'display:flex;gap:0.5rem;';
    const btnResume = document.createElement('button');
    btnResume.className = 'btn btn-primary btn-sm';
    btnResume.textContent = 'Continuar teste ➔';
    btnResume.addEventListener('click', resumeQuizSession);
    const btnDiscard = document.createElement('button');
    btnDiscard.className = 'btn btn-outline btn-sm';
    btnDiscard.textContent = 'Descartar';
    btnDiscard.addEventListener('click', () => {
      if (confirm('Descartar o teste por terminar? O progresso será perdido.')) {
        Metrics.trackSession(quiz, null, true);
        clearQuizProgress();
      }
    });
    actions.append(btnResume, btnDiscard);
    banner.append(text, actions);
  }

  document.addEventListener('visibilitychange', () => {
    timerLastTick = Date.now();
    if (document.hidden) {
      if (quizView.classList.contains('active-view')) saveQuizProgress();
    } else if (quizView.classList.contains('active-view')) {
      acquireWakeLock();
    }
  });
  window.addEventListener('pagehide', () => {
    if (quizView.classList.contains('active-view')) saveQuizProgress();
  });

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
    const qidLabel = questionLabel(state.questionId);

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
    quizProgressText.textContent = `Pergunta ${currNum} de ${totalNum} • ${state.isRetry ? '🔁 Repetição de um erro' : state.feedbackMode === 'delayed' ? '⏱️ Frequência Real' : '🟢 Modo Treino'}`;
    quizProgressBar.style.width = `${progressPercent}%`;

    // Atualizar indicadores visuais com o número da pergunta
    if (quizQidBadge) {
      quizQidBadge.textContent = `🏷️ ${qidLabel}`;
      quizQidBadge.title = `Identificador no repositório: ${qidLabel} (Clica para copiar)`;
    }
    if (quizQidBannerTag) {
      quizQidBannerTag.textContent = qidLabel;
    }
    if (feedbackQidTag) {
      feedbackQidTag.textContent = `🏷️ ${qidLabel}`;
    }

    // Enunciado
    questionText.innerHTML = richText(state.question);

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

    // Autoavaliação de confiança (só no Modo Treino)
    currentConfidence = null;
    confidenceRow.querySelectorAll('.confidence-chip').forEach(chip => {
      chip.classList.remove('selected');
      chip.setAttribute('aria-pressed', 'false');
    });
    confidenceRow.classList.toggle('hidden', state.feedbackMode === 'delayed');

    // Resetar feedback
    feedbackCard.classList.add('hidden');
    feedbackCard.classList.remove('feedback-correct', 'feedback-incorrect');
    btnNext.classList.add('hidden');
  }

  confidenceRow.querySelectorAll('.confidence-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      if (quiz.isAnswered) return;
      const value = chip.getAttribute('data-conf');
      currentConfidence = currentConfidence === value ? null : value;
      confidenceRow.querySelectorAll('.confidence-chip').forEach(c => {
        const on = c.getAttribute('data-conf') === currentConfidence;
        c.classList.toggle('selected', on);
        c.setAttribute('aria-pressed', String(on));
      });
    });
  });

  function formatDistractorText(rawText) {
    if (!rawText) return 'Está incorreta no contexto desta questão.';
    let t = rawText.trim();
    // Remover qualquer referência prévia a letras de opções geradas antes do baralhamento
    t = t.replace(/^(?:As\s+)?Opç(?:ão|ões)\s+[A-D](?:\s*,\s*[A-D])*(?:\s+e\s+(?:Opção\s+)?[A-D])?\s*/i, '');
    t = t.replace(/^(?:A\s+)?(?:primeira|segunda|terceira)\s+opção\s+(?:incorreta\s+)?/i, '');
    t = t.replace(/^(?:A\s+)?Opção\s+[A-D]\s*/i, '');
    t = t.replace(/^(?:Opção\s+incorreta\s*:?\s*)/i, '');
    t = t.replace(/^[:\-\s]+/, '');

    // Formato do banco: «Está incorreta: motivo». Mantém-se tal como está (sem «porque :»).
    const matchColon = t.match(/^está\s+(?:in)?correta\s*:\s*([\s\S]+)$/i);
    if (matchColon) return `Está incorreta: ${matchColon[1].trim()}`;

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

  function getOptionDistractorExplanation(questionObj, optIdx) {
    if (optIdx === questionObj.correctIndex) return null;
    const da = questionObj.distractorAnalysis;
    if (!da) return 'Esta opção é cientificamente incorreta no contexto da questão apresentada.';

    let explanation = null;

    // 1. Array de 4 posições indexado diretamente por opção (preparado por quizEngine.prepareQuestion, onde a opção correta tem null)
    if (Array.isArray(da) && da.length === 4) {
      explanation = da[optIdx];
    }
    // 2. Array de 3 posições (formato bruto nativo do banco de dados na ordem de aparição dos distratores)
    else if (Array.isArray(da) && da.length === 3) {
      const dIdx = optIdx > questionObj.correctIndex ? optIdx - 1 : optIdx;
      explanation = da[dIdx];
    }
    // 3. Objeto indexado por letras ou números
    else if (typeof da === 'object' && !Array.isArray(da)) {
      const lettersList = ['A', 'B', 'C', 'D'];
      explanation = da[lettersList[optIdx]] || da[optIdx];
    }

    // 4. Fallback de proteção caso explanation seja nulo/vazio
    if (!explanation && Array.isArray(da) && da.length > 0) {
      const validItems = da.filter(x => typeof x === 'string' && x.trim().length > 0);
      if (validItems.length > 0) {
        const fallbackIdx = optIdx > questionObj.correctIndex ? optIdx - 1 : optIdx;
        explanation = validItems[fallbackIdx % validItems.length];
      }
    }

    if (!explanation || typeof explanation !== 'string') {
      explanation = 'Esta opção é cientificamente incorreta no contexto da questão apresentada.';
    }

    return explanation;
  }

  // Análise dos distratores: a opção escolhida pelo aluno aparece à vista,
  // as restantes ficam recolhidas (quando acerta, ficam todas recolhidas).
  function buildDistractorsHtml(result, letters, selectedIndex, startOpen = false) {
    const item = idx => `<li><strong>Opção ${letters[idx]}:</strong> ${formatDistractorText(getOptionDistractorExplanation(result, idx))}</li>`;
    const wrongIdx = result.options.map((_, i) => i).filter(i => i !== result.correctIndex);
    const picked = selectedIndex !== result.correctIndex && selectedIndex >= 0 ? selectedIndex : null;
    const others = wrongIdx.filter(i => i !== picked);

    let html = '';
    if (picked !== null) {
      html += `<div class="picked-analysis"><strong>A tua escolha, opção ${letters[picked]}:</strong> ${formatDistractorText(getOptionDistractorExplanation(result, picked))}</div>`;
    }
    if (others.length > 0) {
      const label = picked !== null
        ? `Ver porque é que ${others.length === 1 ? 'a outra opção está errada' : `as outras ${others.length} opções estão erradas`}`
        : 'Porque é que as outras 3 opções estão erradas?';
      html += `<details class="distractor-fold"${startOpen ? ' open' : ''}><summary>${label}</summary><ul>${others.map(item).join('')}</ul></details>`;
    }
    return html;
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
      saveQuizProgress();
      return;
    }

    // Modo Treino (Feedback Imediato)
    if (quiz.isAnswered) return;

    const result = quiz.submitAnswer(selectedIndex);
    if (!result) return;

    result.confidence = currentConfidence;
    showTrainingFeedback(result, selectedIndex);
    saveQuizProgress();
  }

  // Mostra o feedback imediato (Modo Treino); também usado ao retomar um teste guardado
  function showTrainingFeedback(result, selectedIndex) {
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
    const letters = ['A', 'B', 'C', 'D'];
    const correctLetter = letters[result.correctIndex];
    if (result.isRetry) {
      feedbackCard.classList.add(result.isCorrect ? 'feedback-correct' : 'feedback-incorrect');
      feedbackTitle.innerHTML = result.isCorrect
        ? '✅ <strong>Corrigiste o erro de há pouco!</strong> Esta repetição não conta para a nota.'
        : '❌ <strong>Ainda não.</strong> Lê a justificação com calma e abre a teoria; a pergunta fica no Caderno de Erros.';
    } else if (result.isCorrect) {
      feedbackCard.classList.add('feedback-correct');
      feedbackTitle.innerHTML = currentConfidence === 'low'
        ? '✅ <strong>Resposta Correta!</strong> Acertaste, mas sem certeza: lê a justificação para a fixares.'
        : '✅ <strong>Resposta Correta!</strong> Excelente raciocínio científico.';
    } else {
      feedbackCard.classList.add('feedback-incorrect');
      feedbackTitle.innerHTML = currentConfidence === 'high'
        ? '❌ <strong>Resposta Incorreta,</strong> e estavas com certeza. É um bom sinal de um conceito a rever com atenção:'
        : '❌ <strong>Resposta Incorreta.</strong> Consulta a justificação abaixo para consolidar:';
    }

    feedbackExplanation.innerHTML = `
      <p><strong>Por que está certa a opção ${correctLetter}:</strong> ${result.explanation}</p>
    `;

    feedbackDistractors.innerHTML = buildDistractorsHtml(result, letters, selectedIndex);

    const conceptId = getConceptId(currentQuestionId);
    const theoryButton = conceptId && getStudyBlock(conceptId)
      ? `<button type="button" class="btn btn-sm ${result.isCorrect ? 'btn-outline' : 'btn-primary'} btn-theory-link" data-open-theory="${conceptId}">📖 Rever esta parte da teoria</button>`
      : '';

    feedbackNursing.innerHTML = `
      <div class="nursing-tip-box">
        <span class="nursing-tip-icon">💡</span>
        <div>
          <strong>Aplicação Prática na Enfermagem:</strong>
          <p>${result.nursingApplication}</p>
        </div>
      </div>
      ${theoryButton ? `<div class="feedback-theory-row">${theoryButton}</div>` : ''}
    `;

    const isLast = quiz.currentIndex === quiz.currentQuestions.length - 1;
    btnNext.textContent = isLast ? 'Finalizar e Ver Resultados ➔' : 'Próxima Pergunta ➔';
    btnNext.classList.remove('hidden');
  }

  btnNext.addEventListener('click', () => {
    const nextState = quiz.nextQuestion();
    if (nextState) {
      renderQuestion(nextState);
      saveQuizProgress();
    }
  });

  btnExitQuiz.addEventListener('click', () => {
    if (confirm('Desejas interromper este teste e voltar ao início?')) {
      Metrics.trackSession(quiz, null, true);
      clearInterval(timerInterval);
      quizTimerBadge.classList.add('hidden');
      clearQuizProgress();
      showView(homeView);
    }
  });

  // =========================================================================
  // 11. Ecrã de Resultados e Relatório Completo (1A, 1B, 3F)
  // =========================================================================
  // Desempenho por conceito (para o ponto fraco e as estatísticas): { conceptId: [certas, total] }
  function conceptStatsFromAnswers(answers) {
    const stats = {};
    answers.forEach(a => {
      const cid = getConceptId(a.questionId);
      if (!cid) return;
      stats[cid] = stats[cid] || [0, 0];
      stats[cid][1] += 1;
      if (a.isCorrect) stats[cid][0] += 1;
    });
    return stats;
  }

  // Confiança declarada vs. acerto: { high|mid|low: [certas, total] } (só respostas com confiança indicada)
  function confidenceStatsFromAnswers(answers) {
    const stats = { high: [0, 0], mid: [0, 0], low: [0, 0] };
    answers.forEach(a => {
      if (!a.confidence || !stats[a.confidence]) return;
      stats[a.confidence][1] += 1;
      if (a.isCorrect) stats[a.confidence][0] += 1;
    });
    return stats;
  }

  const CONFIDENCE_LABELS = { high: 'Tenho a certeza', mid: 'Acho que sim', low: 'Estou a adivinhar' };

  function conceptBarColor(pct) {
    return pct >= 70 ? 'var(--color-success)' : pct >= 50 ? 'var(--color-warning)' : 'var(--color-danger)';
  }

  function renderResultFocus(summary) {
    const conceptStats = conceptStatsFromAnswers(summary.answers);
    const entries = Object.entries(conceptStats)
      .map(([id, [c, t]]) => ({ id, c, t, wrong: t - c, pct: Math.round((c / t) * 100), block: getStudyBlock(id) }))
      .filter(e => e.block);
    let html = '';

    const withErrors = entries.filter(e => e.wrong > 0);
    const solid = withErrors.filter(e => e.t >= 2);
    const weak = (solid.length ? solid : withErrors).sort((a, b) => (a.pct - b.pct) || (b.t - a.t))[0];

    if (weak) {
      const available = conceptQuestions(weak.id).length;
      html += `
        <div class="focus-card focus-weak">
          <h4>🎯 Ponto fraco desta sessão</h4>
          <p><strong>${weak.block.icon} ${weak.block.title}</strong>: ${weak.c} de ${weak.t} certas (${weak.pct}%).</p>
          <div class="focus-actions">
            <button type="button" class="btn btn-sm btn-primary" data-open-theory="${weak.id}">📖 Rever a teoria</button>
            ${available > 0 ? `<button type="button" class="btn btn-sm btn-outline" data-practice-concept="${weak.id}">🎯 Praticar este conceito (${available})</button>` : ''}
          </div>
        </div>`;
    } else if (entries.length > 0) {
      html += '<div class="focus-card focus-good"><h4>✅ Sem pontos fracos nesta sessão</h4><p>Acertaste tudo o que foi perguntado em cada conceito.</p></div>';
    }

    if (entries.length > 1) {
      html += '<h4>Desempenho por conceito:</h4><div class="topic-breakdown-list">';
      entries.sort((a, b) => a.pct - b.pct).forEach(e => {
        html += `
          <div class="breakdown-item">
            <div class="breakdown-info"><span>${e.block.icon} ${e.block.title}</span><span>${e.c}/${e.t} (${e.pct}%)</span></div>
            <div class="progress-track"><div class="progress-fill" style="width: ${e.pct}%; background-color: ${conceptBarColor(e.pct)};"></div></div>
          </div>`;
      });
      html += '</div>';
    }

    const conf = confidenceStatsFromAnswers(summary.answers);
    const confTotal = conf.high[1] + conf.mid[1] + conf.low[1];
    if (confTotal > 0) {
      const rows = ['high', 'mid', 'low'].filter(k => conf[k][1] > 0)
        .map(k => `<li><strong>${CONFIDENCE_LABELS[k]}:</strong> ${conf[k][0]} de ${conf[k][1]} certas</li>`).join('');
      const overconfident = summary.answers.filter(a => !a.isCorrect && a.confidence === 'high');
      html += `
        <div class="focus-card">
          <h4>🧭 A tua confiança vs. os resultados</h4>
          <ul class="focus-list">${rows}</ul>
          ${overconfident.length > 0 ? `<p class="focus-note">Erraste ${overconfident.length} ${overconfident.length === 1 ? 'pergunta' : 'perguntas'} com certeza (${overconfident.map(a => questionLabel(a.questionId)).join('; ')}). São as que mais vale rever, e voltam hoje ao Caderno de Erros.</p>` : ''}
        </div>`;
    }

    const notes = [];
    if (summary.masteredCount > 0) {
      notes.push(`📕 ${summary.masteredCount} ${summary.masteredCount === 1 ? 'pergunta saiu' : 'perguntas saíram'} do Caderno de Erros (2 acertos em dias diferentes).`);
    }
    if (summary.retryTotal > 0) {
      notes.push(`🔁 Repetição de erros: acertaste ${summary.retryCorrect} de ${summary.retryTotal} ao tentar outra vez (não conta para a nota).`);
    }
    const guessed = summary.answers.filter(a => a.isCorrect && a.confidence === 'low').length;
    if (guessed > 0) {
      notes.push(`🎲 ${guessed} ${guessed === 1 ? 'resposta certa foi dada' : 'respostas certas foram dadas'} sem certeza: estão assinaladas na revisão, logo a seguir aos erros.`);
    }
    if (summary.incorrectCount > 0) {
      notes.push(`📕 ${summary.incorrectCount} ${summary.incorrectCount === 1 ? 'pergunta guardada' : 'perguntas guardadas'} no Caderno de Erros para rever nos próximos dias.`);
    }
    if (notes.length) {
      html += `<div class="focus-card focus-note-card">${notes.map(n => `<p>${n}</p>`).join('')}</div>`;
    }

    resultFocus.innerHTML = html;
  }

  function showResults(summary) {
    clearInterval(timerInterval);
    quizTimerBadge.classList.add('hidden');
    clearQuizProgress();
    showView(resultsView);

    // Guardar histórico e atualizar erros
    saveAttemptHistory(summary);
    Metrics.trackSession(quiz, summary, false);

    // Caderno de Erros com revisão espaçada: os acertos às perguntas do caderno contam
    // (em qualquer sessão); os erros voltam a ser agendados.
    const masteredIds = summary.answers
      .filter(a => a.isCorrect && recordCorrectReview(a.questionId))
      .map(a => a.questionId);
    if (summary.incorrectIds && summary.incorrectIds.length > 0) {
      const overconfident = summary.answers
        .filter(a => !a.isCorrect && a.confidence === 'high')
        .map(a => a.questionId);
      addMistakes(summary.incorrectIds, overconfident);
    }
    summary.masteredCount = masteredIds.length;

    // Avaliar conquistas
    checkAndAwardBadges(summary);
    updateQuickActionCounters();

    // Nota 0-20 e Classificação
    resultGrade.innerHTML = `
      <div class="grade-circle ${summary.badgeClass}">
        <span class="grade-number">${String(summary.grade20).replace('.', ',')}</span>
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
    renderResultFocus(summary);

    // Folha de Revisão Completa com botão estrela
    const isGuess = a => a.isCorrect && a.confidence === 'low';
    const nWrong = summary.answers.filter(a => !a.isCorrect).length;
    const nGuess = summary.answers.filter(isGuess).length;
    resultReviewList.innerHTML = `<h4>Revisão do teste: começa pelos erros${nGuess ? ' e pelas respostas incertas' : ''}</h4>`;
    const correctFold = document.createElement('details');
    correctFold.className = 'review-correct-fold';
    const letters = ['A', 'B', 'C', 'D'];
    const starredList = getStarred();

    const rank = a => (!a.isCorrect ? 0 : isGuess(a) ? 1 : 2);
    const order = summary.answers.map((ans, i) => ({ ans, i })).sort((x, y) => rank(x.ans) - rank(y.ans) || x.i - y.i);
    order.forEach(({ ans, i }) => {
      const isStarred = starredList.includes(ans.questionId);
      const qidLabel = questionLabel(ans.questionId);
      const reviewConceptId = getConceptId(ans.questionId);
      const reviewItem = document.createElement('div');
      reviewItem.className = `review-card ${ans.isCorrect ? 'review-correct' : 'review-incorrect'}`;
      reviewItem.innerHTML = `
        <div class="review-header">
          <span class="review-status">${ans.isCorrect ? (isGuess(ans) ? '✅ Acertou, mas sem certeza' : '✅ Acertou') : '❌ Errou'}</span>
          <div style="display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap;">
            <button class="btn-star ${isStarred ? 'active' : ''}" data-qid="${ans.questionId}" title="Marcar / Desmarcar com estrela">
              ${isStarred ? '⭐' : '☆'}
            </button>
            <span class="review-qnum">Questão ${i + 1} • ${qidLabel}</span>
            <button type="button" class="btn-copy-review-qid btn-outline btn-sm" data-qid="${qidLabel}" title="Copiar número desta pergunta para informar o docente" style="padding: 0.15rem 0.5rem; font-size: 0.75rem; border-radius: var(--radius-sm);">
              📋 Copiar ID
            </button>
          </div>
        </div>
        <p class="review-question"><strong>${ans.questionText}</strong></p>
        <div class="review-choices">
          <p><strong>A sua escolha:</strong> ${ans.selectedIndex >= 0 ? `Opção ${letters[ans.selectedIndex]} - ${ans.options[ans.selectedIndex]}` : '<span style="color: var(--color-danger);">(Sem resposta selecionada)</span>'}</p>
          ${!ans.isCorrect ? `<p class="correct-highlight"><strong>Resposta correta:</strong> Opção ${letters[ans.correctIndex]} - ${ans.options[ans.correctIndex]}</p>` : ''}
        </div>
        <div class="review-explanation">
          <p><strong>Por que está certa a opção ${letters[ans.correctIndex]}:</strong> ${ans.explanation}</p>
        </div>
        <div class="review-distractors">
          ${buildDistractorsHtml(ans, letters, ans.selectedIndex)}
        </div>
        <div class="review-nursing">
          <p><strong>💡 Relevância em Enfermagem:</strong> ${ans.nursingApplication}</p>
        </div>
        ${reviewConceptId && getStudyBlock(reviewConceptId) ? `<div class="feedback-theory-row"><button type="button" class="btn btn-sm btn-outline btn-theory-link" data-open-theory="${reviewConceptId}">📖 Rever esta parte da teoria</button></div>` : ''}
      `;
      (rank(ans) === 2 ? correctFold : resultReviewList).appendChild(reviewItem);
    });
    const nCertain = summary.answers.length - nWrong - nGuess;
    if (nCertain > 0) {
      const sum = document.createElement('summary');
      sum.textContent = `Ver as ${nCertain} ${nCertain === 1 ? 'resposta certa' : 'respostas certas'}`;
      correctFold.prepend(sum);
      if (nWrong + nGuess === 0) correctFold.open = true;
      resultReviewList.appendChild(correctFold);
    }

    // Ouvinte para as estrelas na revisão
    resultReviewList.querySelectorAll('.btn-star').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const qId = parseInt(btn.getAttribute('data-qid'), 10);
        const starred = toggleStar(qId);
        btn.textContent = starred ? '⭐' : '☆';
        btn.classList.toggle('active', starred);
      });
    });

    // Ouvinte para cópia rápida do número da pergunta na revisão
    resultReviewList.querySelectorAll('.btn-copy-review-qid').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const textToCopy = e.currentTarget.getAttribute('data-qid');
        if (textToCopy) {
          copyTextToClipboard(textToCopy, `📋 Copiado para a área de transferência: <strong>${textToCopy}</strong>`);
        }
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
      total: summary.totalQuestions,
      concepts: conceptStatsFromAnswers(summary.answers),
      confidence: confidenceStatsFromAnswers(summary.answers)
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
  const SEARCH_SUGGESTIONS = ['atrito', 'momento', 'alavanca', 'centro de gravidade', 'inércia', 'binário'];

  function openSearchModal() {
    modalSearch.classList.remove('hidden');
    searchInput.value = '';
    searchStatusText.textContent = 'Digita pelo menos 2 caracteres para pesquisar';
    searchCountBadge.classList.add('hidden');
    searchResultsList.innerHTML = `
      <div class="empty-state" style="padding: 2rem 1rem;">
        <p>💡 Procura um termo para ver a <strong>definição curta</strong> e as <strong>perguntas</strong> relacionadas.</p>
        <div class="search-suggestions">
          ${SEARCH_SUGGESTIONS.map(t => `<button type="button" class="search-chip" data-term="${t}">${t}</button>`).join('')}
        </div>
      </div>
    `;
    searchResultsList.querySelectorAll('.search-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        searchInput.value = chip.getAttribute('data-term');
        searchInput.dispatchEvent(new Event('input'));
        searchInput.focus();
      });
    });
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
      // A teoria pode estar aberta por cima da pesquisa: fecha-se primeiro
      if (!modalTheory.classList.contains('hidden')) {
        closeTheoryModal();
        return;
      }
      if (!modalSearch.classList.contains('hidden')) closeSearchModal();
      if (!modalSession.classList.contains('hidden')) closeSessionModal();
      if (!modalWorksheet.classList.contains('hidden')) closeWorksheetModal();
    }
  });

  // Atalhos do quiz: A–D ou 1–4 escolhem a opção, Enter avança
  document.addEventListener('keydown', (e) => {
    if (quizView.classList.contains('hidden')) return;
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    if (document.querySelector('.modal-backdrop:not(.hidden)')) return;
    const tag = (e.target && e.target.tagName) || '';
    if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;

    const key = e.key.toLowerCase();
    const optionIdx = ['a', 'b', 'c', 'd'].indexOf(key) !== -1 ? ['a', 'b', 'c', 'd'].indexOf(key) : ['1', '2', '3', '4'].indexOf(key);
    if (optionIdx !== -1) {
      const btn = optionsContainer.querySelectorAll('.option-btn')[optionIdx];
      if (btn && !btn.disabled) {
        e.preventDefault();
        btn.click();
      }
      return;
    }

    if ((e.key === 'Enter' || e.key === 'ArrowRight') && !btnNext.classList.contains('hidden')) {
      e.preventDefault();
      btnNext.click();
    }
  });

  function normalizeSearchText(text) {
    // Ignora índices (F<sub>P</sub> = FP) e sublinhados, para «F_P» e «FP» encontrarem o mesmo
    return plainMathText(text).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f_]/g, '');
  }

  // Função de destaque de termos encontrados
  function highlightText(text, query) {
    if (!query) return text;
    const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    // Só realça fora das etiquetas (<sub>, <sup>), para não as estragar
    return text.split(/(<\/?(?:sub|sup)>)/).map((part, i) => (i % 2 === 1 ? part : part.replace(regex, '<mark>$1</mark>'))).join('');
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

      const nq = normalizeSearchText(q);
      const matches = QUESTIONS_DATA.filter(item => {
        return normalizeSearchText(item.question).includes(nq) ||
               normalizeSearchText(item.explanation).includes(nq) ||
               normalizeSearchText(item.nursingApplication).includes(nq) ||
               item.options.some(opt => normalizeSearchText(opt).includes(nq));
      });
      const glossaryMatches = GLOSSARY.filter(g =>
        normalizeSearchText(g.t).includes(nq) ||
        (g.a || []).some(alias => normalizeSearchText(alias).includes(nq)) ||
        normalizeSearchText(g.d).includes(nq)
      ).sort((x, y) => {
        // Termos cujo nome corresponde à pesquisa vêm primeiro
        const rx = normalizeSearchText(x.t).includes(nq) ? 0 : 1;
        const ry = normalizeSearchText(y.t).includes(nq) ? 0 : 1;
        return rx - ry;
      }).slice(0, 6);

      const glossaryHtml = glossaryMatches.length === 0 ? '' : `
        <div class="glossary-section">
          <h4 class="search-section-title">📘 Glossário</h4>
          ${glossaryMatches.map(g => `
            <div class="glossary-card">
              <div class="glossary-head">
                <strong>${highlightText(g.t, q)}</strong>
                ${getStudyBlock(g.c) ? `<button type="button" class="btn-link" data-open-theory="${g.c}">📖 Ver na teoria</button>` : ''}
              </div>
              <p>${highlightText(g.d, q)}</p>
            </div>`).join('')}
        </div>`;

      searchStatusText.textContent = `Resultados para "${searchInput.value.trim()}":`;
      searchCountBadge.textContent = `${glossaryMatches.length} no glossário • ${matches.length} perguntas`;
      searchCountBadge.classList.remove('hidden');

      if (matches.length === 0) {
        searchResultsList.innerHTML = glossaryHtml + `
          <div class="empty-state">
            <p>Nenhuma pergunta encontrada com o termo "<strong>${richText(searchInput.value.trim())}</strong>".</p>
            ${glossaryMatches.length === 0 ? '<p>Tenta termos como <em>atrito, momento, alavanca, inércia, Hooke, módulo de Young</em>.</p>' : ''}
          </div>
        `;
        return;
      }

      // Renderizar até 40 resultados para rapidez absoluta
      const rendered = matches.slice(0, 40);
      const starredList = getStarred();
      const letters = ['A', 'B', 'C', 'D'];

      searchResultsList.innerHTML = glossaryHtml + (glossaryHtml ? '<h4 class="search-section-title">❓ Perguntas</h4>' : '') + rendered.map(item => {
        const topicMeta = TOPICS_DATA.find(t => t.id === item.topicId);
        const isStarred = starredList.includes(item.id);
        const highlightedQ = highlightText(item.question, q);
        const highlightedExp = highlightText(item.explanation, q);
        const highlightedNursing = highlightText(item.nursingApplication, q);
        const correctOpt = item.options[item.correctIndex];

        return `
          <div class="search-result-card">
            <div class="search-res-header">
              <div style="display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap;">
                <span class="search-res-topic">${topicMeta ? `${topicMeta.icon} Tópico ${topicMeta.id}` : ''} • Pergunta ${item.id % 1000}</span>
                <button type="button" class="btn-copy-review-qid btn-outline btn-sm" data-qid="${questionLabel(item.id)}" title="Copiar ID da pergunta" style="padding: 0.12rem 0.5rem; font-size: 0.74rem;">
                  📋 Copiar ID
                </button>
              </div>
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

      // Ouvinte de cópia de ID na pesquisa
      searchResultsList.querySelectorAll('.btn-copy-review-qid').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const textToCopy = e.currentTarget.getAttribute('data-qid');
          if (textToCopy) {
            copyTextToClipboard(textToCopy, `📋 Copiado: <strong>${textToCopy}</strong>`);
          }
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
              customTitle: questionLabel(targetQ.id),
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
      const isSingleTopic = typeof UNLOCKED_TOPIC_IDS !== 'undefined' && UNLOCKED_TOPIC_IDS.length === 1;
      sheetTitle = isSingleTopic ? 'Ficha de Avaliação e Treino: Tópico 1' : 'Simulação Geral Abrangente de Biofísica';
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
      if (typeof UNLOCKED_TOPIC_IDS !== 'undefined' && !UNLOCKED_TOPIC_IDS.includes(tId)) {
        showToast(`🔒 <strong>Tópico Bloqueado pelo Professor</strong><br>O acesso às questões deste tópico está suspenso temporariamente. ${activeFocusPhrase()}`, 'toast-warning', 4000);
        return;
      }
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
          <p class="print-q-title">${idx + 1}. <span style="font-size: 0.85em; font-weight: 600; color: #475569;">[${questionLabel(q.id)}]</span> ${q.question}</p>
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
            <p class="print-sol-q">Questão ${idx + 1} (${questionLabel(q.id)}):</p>
            <p class="print-sol-ans">✓ Resposta Correta: Opção (${letters[q.correctIndex]}) - ${q.options[q.correctIndex]}</p>
            <p class="print-sol-exp"><strong>Por que está certa a opção ${letters[q.correctIndex]}:</strong> ${q.explanation}</p>
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
      const isUnlocked = typeof UNLOCKED_TOPIC_IDS !== 'undefined' ? UNLOCKED_TOPIC_IDS.includes(item.topicId) : (item.topicId === 1);
      const blocks = STUDY_BLOCKS.filter(b => b.topicId === item.topicId);
      const bodyHtml = blocks.length
        ? blocks.map(b => {
            const count = isUnlocked ? conceptQuestions(b.id).length : 0;
            return `
              <article class="study-block" id="study-block-${b.id}">
                <h4 class="study-block-title">${b.icon} ${b.title}</h4>
                ${renderBlockHtml(b)}
                ${count > 0 ? `<div class="study-block-actions"><button type="button" class="btn btn-sm btn-outline" data-practice-concept="${b.id}">🎯 Praticar este conceito (${count} ${count === 1 ? 'pergunta' : 'perguntas'})</button></div>` : ''}
              </article>`;
          }).join('')
        : item.summary;
      const accordionItem = document.createElement('div');
      accordionItem.className = 'accordion-item';
      accordionItem.innerHTML = `
        <div class="accordion-header">
          <span>${topicMeta ? topicMeta.icon : '📖'} ${item.title} ${isUnlocked ? '' : '<span style="font-size:0.75rem; background:rgba(148,163,184,0.18); padding:2px 8px; border-radius:12px; margin-left:8px; color:var(--text-muted); border:1px solid rgba(148,163,184,0.3);">🔒 Questões Bloqueadas</span>'}</span>
          <span class="accordion-arrow">▼</span>
        </div>
        <div class="accordion-body">
          ${bodyHtml}
          <div style="margin-top: 1rem; text-align: right;">
            ${isUnlocked ? `
              <button class="btn btn-sm btn-primary btn-study-practice" data-topic="${item.topicId}">
                Fazer Teste deste Tópico ➔
              </button>
            ` : `
              <button class="btn btn-sm btn-secondary btn-study-locked" data-topic="${item.topicId}" style="opacity: 0.7; cursor: not-allowed;">
                🔒 Questões Bloqueadas pelo Docente
              </button>
            `}
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

    document.querySelectorAll('.btn-study-locked').forEach(btn => {
      btn.addEventListener('click', () => {
        showToast(`🔒 <strong>Tópico Bloqueado pelo Professor</strong><br>O treino prático deste tópico está suspenso temporariamente. ${activeFocusPhrase()}`, 'toast-info', 4500);
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
  // Evolução das notas (últimas 15 tentativas, da mais antiga para a mais recente)
  function buildTrendChartHtml(history) {
    const points = history.slice(0, 15).reverse();
    if (points.length < 2) {
      return '<div class="stats-panel"><h4>📈 Evolução das notas</h4><p class="stats-hint">Faz pelo menos dois testes para ver aqui a evolução das tuas notas.</p></div>';
    }
    const W = 600, H = 210, left = 34, right = 14, top = 14, bottom = 28;
    const plotW = W - left - right, plotH = H - top - bottom;
    const x = i => left + (i * plotW) / (points.length - 1);
    const y = v => top + (1 - v / 20) * plotH;
    const grid = [0, 5, 10, 15, 20].map(v =>
      `<line x1="${left}" y1="${y(v)}" x2="${W - right}" y2="${y(v)}" class="trend-grid"/><text x="${left - 6}" y="${y(v) + 4}" text-anchor="end" class="trend-axis">${v}</text>`).join('');
    const pass = `<line x1="${left}" y1="${y(9.5)}" x2="${W - right}" y2="${y(9.5)}" class="trend-pass"/><text x="${W - right}" y="${y(9.5) - 4}" text-anchor="end" class="trend-axis">9,5 (aprovação)</text>`;
    const poly = points.map((h, i) => `${x(i).toFixed(1)},${y(h.grade20).toFixed(1)}`).join(' ');
    const dots = points.map((h, i) =>
      `<circle cx="${x(i).toFixed(1)}" cy="${y(h.grade20).toFixed(1)}" r="4" class="trend-dot"><title>${h.date}: ${String(h.grade20).replace('.', ',')} / 20</title></circle>`).join('');
    const first = points[0].date.split(',')[0].split(' ')[0];
    const last = points[points.length - 1].date.split(',')[0].split(' ')[0];
    const avgFirst = points.slice(0, Math.ceil(points.length / 2));
    const avgLast = points.slice(Math.floor(points.length / 2));
    const mean = arr => arr.reduce((a, h) => a + h.grade20, 0) / arr.length;
    const delta = mean(avgLast) - mean(avgFirst);
    const trendText = Math.abs(delta) < 0.5
      ? 'As tuas notas mantêm-se estáveis.'
      : delta > 0 ? `As notas mais recentes estão, em média, ${String(delta.toFixed(1)).replace('.', ',')} valores acima das iniciais. Bom caminho!`
        : `As notas mais recentes estão, em média, ${String(Math.abs(delta).toFixed(1)).replace('.', ',')} valores abaixo das iniciais: vale a pena rever o Caderno de Erros.`;
    return `
      <div class="stats-panel">
        <h4>📈 Evolução das notas (últimas ${points.length} tentativas)</h4>
        <svg viewBox="0 0 ${W} ${H}" class="trend-chart" role="img" aria-label="Gráfico da evolução das notas, de ${first} a ${last}">
          ${grid}${pass}
          <polyline points="${poly}" class="trend-line"/>
          ${dots}
          <text x="${left}" y="${H - 6}" class="trend-axis">${first}</text>
          <text x="${W - right}" y="${H - 6}" text-anchor="end" class="trend-axis">${last}</text>
        </svg>
        <p class="stats-hint">${trendText}</p>
      </div>`;
  }

  // Desempenho acumulado por conceito, calculado a partir das tentativas guardadas
  function buildConceptStatsHtml(history) {
    const totals = {};
    history.forEach(h => {
      Object.entries(h.concepts || {}).forEach(([id, [c, t]]) => {
        totals[id] = totals[id] || [0, 0];
        totals[id][0] += c;
        totals[id][1] += t;
      });
    });
    const rows = Object.entries(totals)
      .map(([id, [c, t]]) => ({ id, c, t, pct: Math.round((c / t) * 100), block: getStudyBlock(id) }))
      .filter(r => r.block && r.t > 0)
      .sort((a, b) => a.pct - b.pct);
    if (rows.length === 0) return '';
    return `
      <div class="stats-panel">
        <h4>🧩 Desempenho por conceito</h4>
        <p class="stats-hint">Dos conceitos mais fracos para os mais fortes, com base nas tentativas guardadas.</p>
        <div class="topic-breakdown-list">
          ${rows.map(r => `
            <div class="breakdown-item concept-row">
              <div class="breakdown-info"><span>${r.block.icon} ${r.block.title}</span><span>${r.c}/${r.t} (${r.pct}%)</span></div>
              <div class="progress-track"><div class="progress-fill" style="width: ${r.pct}%; background-color: ${conceptBarColor(r.pct)};"></div></div>
              <div class="concept-row-actions">
                <button type="button" class="btn-link" data-open-theory="${r.id}">📖 Teoria</button>
                <button type="button" class="btn-link" data-practice-concept="${r.id}">🎯 Praticar</button>
              </div>
            </div>`).join('')}
        </div>
      </div>`;
  }

  function buildConfidenceStatsHtml(history) {
    const total = { high: [0, 0], mid: [0, 0], low: [0, 0] };
    history.forEach(h => {
      if (!h.confidence) return;
      ['high', 'mid', 'low'].forEach(k => {
        const v = h.confidence[k];
        if (v) { total[k][0] += v[0]; total[k][1] += v[1]; }
      });
    });
    if (total.high[1] + total.mid[1] + total.low[1] === 0) return '';
    const rows = ['high', 'mid', 'low'].filter(k => total[k][1] > 0).map(k => {
      const pct = Math.round((total[k][0] / total[k][1]) * 100);
      return `<tr><td>${CONFIDENCE_LABELS[k]}</td><td>${total[k][0]} / ${total[k][1]}</td><td><strong>${pct}%</strong></td></tr>`;
    }).join('');
    return `
      <div class="stats-panel">
        <h4>🧭 Confiança vs. acertos</h4>
        <div class="history-table-container">
          <table class="history-table"><thead><tr><th>Quando disseste…</th><th>Acertos</th><th>Taxa</th></tr></thead><tbody>${rows}</tbody></table>
        </div>
        <p class="stats-hint">Se a taxa de «Tenho a certeza» for baixa, há conceitos que pareces dominar e ainda não dominas. Ideal: mais acertos quanto maior a confiança.</p>
      </div>`;
  }

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
    const avgGrade = (history.reduce((acc, h) => acc + h.grade20, 0) / totalTests).toFixed(1).replace('.', ',');
    const passedTests = history.filter(h => h.grade20 >= 9.5).length;
    const passRate = Math.round((passedTests / totalTests) * 100);

    const trendHtml = buildTrendChartHtml(history);
    const conceptHtml = buildConceptStatsHtml(history);
    const confidenceHtml = buildConfidenceStatsHtml(history);

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

      ${trendHtml}
      ${conceptHtml}
      ${confidenceHtml}

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
          <td><strong>${String(h.grade20).replace('.', ',')}</strong></td>
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

  // Inicializar Arena BioFísica (Modo Batalha em Grupo ao Vivo)
  if (typeof ArenaUI !== 'undefined') {
    try {
      window.arenaUI = new ArenaUI();

      // Verificação de Parâmetros de URL (Deep Linking via QR Code ou Link Direto)
      const urlParams = new URLSearchParams(window.location.search);
      const hash = window.location.hash || '';
      let pinFromUrl = urlParams.get('pin');
      if (!pinFromUrl && hash.includes('pin=')) {
        pinFromUrl = hash.split('pin=')[1].split('&')[0];
      }

      // Telemóvel que recarregou a meio do jogo: voltar à mesma equipa sem pedir os dados outra vez
      if (window.arenaUI.tryResumeClient(pinFromUrl)) {
        showView(arenaView);
      } else if (pinFromUrl) {
        showView(arenaView);
        window.arenaUI.showScreen('clientJoin');
        const pinInput = document.getElementById('client-input-pin');
        if (pinInput) pinInput.value = pinFromUrl.toUpperCase();
      } else if (hash.includes('arena')) {
        showView(arenaView);
        window.arenaUI.showScreen('select');
      }
    } catch (err) {
      console.warn("Aviso ao carregar ArenaUI:", err);
    }
  }

  // Inicializar Painel do Docente (Gestão e Auditoria do Banco de Questões)
  if (window.teacherManager && typeof window.teacherManager.init === 'function') {
    try {
      window.teacherManager.init();
    } catch (err) {
      console.warn("Aviso ao inicializar TeacherManager:", err);
    }
  }

  // Teste por terminar (página recarregada ou fechada a meio): volta à pergunta onde o aluno ficou,
  // a menos que tenha aberto a Arena (ligação por PIN/hash)
  if (!arenaView || arenaView.classList.contains('hidden')) {
    resumeQuizSession();
  }
});
