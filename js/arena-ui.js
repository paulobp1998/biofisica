/**
 * ArenaUI - Controlador de Interface da Arena BioFísica
 * Liga a UI dos ecrãs (Docente no Projetor e Aluno no Telemóvel) ao ArenaEngine e ArenaNetwork.
 */

/**
 * SHA-256 síncrono puro em JavaScript para validação segura do PIN de Docente
 */
function arenaSha256(ascii) {
  function rightRotate(value, amount) {
    return (value >>> amount) | (value << (32 - amount));
  }
  var mathPow = Math.pow;
  var maxWord = mathPow(2, 32);
  var lengthProperty = 'length';
  var i, j;
  var result = '';
  var words = [];
  var asciiBitLength = ascii[lengthProperty] * 8;
  var hash = [];
  var k = [];
  var primeCounter = 0;

  var isComposite = {};
  for (var candidate = 2; primeCounter < 64; candidate++) {
    if (!isComposite[candidate]) {
      for (i = 0; i < 313; i += candidate) {
        isComposite[i] = candidate;
      }
      hash[primeCounter] = (mathPow(candidate, 0.5) * maxWord) | 0;
      k[primeCounter++] = (mathPow(candidate, 1 / 3) * maxWord) | 0;
    }
  }

  ascii += '\x80';
  while (ascii[lengthProperty] % 64 - 56) ascii += '\x00';
  for (i = 0; i < ascii[lengthProperty]; i++) {
    j = ascii.charCodeAt(i);
    if (j >> 8) return;
    words[i >> 2] |= j << ((3 - i) % 4) * 8;
  }
  words[words[lengthProperty]] = (asciiBitLength / maxWord) | 0;
  words[words[lengthProperty]] = asciiBitLength;

  for (j = 0; j < words[lengthProperty]; ) {
    var w = words.slice(j, (j += 16));
    var oldHash = hash;
    hash = hash.slice(0, 8);

    for (i = 0; i < 64; i++) {
      var i2 = i + j;
      var w15 = w[i - 15],
        w2 = w[i - 2];
      var a = hash[0],
        e = hash[4];
      var temp1 =
        hash[7] +
        (rightRotate(e, 6) ^ rightRotate(e, 11) ^ rightRotate(e, 25)) +
        ((e & hash[5]) ^ (~e & hash[6])) +
        k[i] +
        (w[i] =
          i < 16
            ? w[i]
            : (w[i - 16] +
                (rightRotate(w15, 7) ^ rightRotate(w15, 18) ^ (w15 >>> 3)) +
                w[i - 7] +
                (rightRotate(w2, 17) ^ rightRotate(w2, 19) ^ (w2 >>> 10))) |
              0);
      var temp2 =
        (rightRotate(a, 2) ^ rightRotate(a, 13) ^ rightRotate(a, 22)) +
        ((a & hash[1]) ^ (a & hash[2]) ^ (hash[1] & hash[2]));

      hash = [(temp1 + temp2) | 0].concat(hash);
      hash[4] = (hash[4] + temp1) | 0;
    }

    for (i = 0; i < 8; i++) {
      hash[i] = (hash[i] + oldHash[i]) | 0;
    }
  }

  for (i = 0; i < 8; i++) {
    for (j = 3; j + 1; j--) {
      var b = (hash[i] >> (j * 8)) & 255;
      result += (b < 16 ? 0 : '') + b.toString(16);
    }
  }
  return result;
}

// Hash SHA-256 criptográfico do PIN Mestre de Docente
const ARENA_HOST_PIN_HASH = '7275efded424740efd68321692c99c485bb9648e802a1c1387eea032c3729aa6';

// Número de perguntas de cada quiz pré-preparado
const ARENA_QUIZ_SIZE = 20;

function arenaEscapeHtml(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Texto de perguntas (conteúdo da aplicação): escapa tudo, exceto índices e expoentes
function arenaRichText(str) {
  return arenaEscapeHtml(str).replace(/&lt;(\/?)(sub|sup)&gt;/g, '<$1$2>');
}

class ArenaUI {
  constructor() {
    this.net = new ArenaNetwork();
    this.engine = new ArenaEngine(this.net);
    this.currentScreen = 'arena-screen-select';
    this.isMuted = false;
    this.selectedAvatar = '🩺';
    this.pendingTeacherAction = null;
    this.myCurrentVote = null;

    // Estado da Seleção Manual de Perguntas do Docente
    this.selectedCustomQuestionIds = new Set();
    this.customFilterTopic = 'all-unlocked';
    this.customSearchQuery = '';
    this.customActiveTab = 'all';
    this.customRenderLimit = 50;
    this.allQuestionsPool = [];
    this.loadSavedCustomQuestionIds();
    this.activeSavedQuizId = this.getActiveSavedQuizId();
    this.lastSessionResult = null;
    this.quizSyncing = false;

    this.initDOMElements();
    this.initEventListeners();
    this.initEngineListeners();
    this.updateHostConfigCustomBadge();
  }

  initDOMElements() {
    // Ecrãs da Arena
    this.screens = {
      select: document.getElementById('arena-screen-select'),
      hostConfig: document.getElementById('arena-screen-host-config'),
      hostCustomQuestions: document.getElementById('arena-screen-host-custom-questions'),
      hostLobby: document.getElementById('arena-screen-host-lobby'),
      hostQuestion: document.getElementById('arena-screen-host-question'),
      hostReveal: document.getElementById('arena-screen-host-reveal'),
      hostLeaderboard: document.getElementById('arena-screen-host-leaderboard'),
      hostPodium: document.getElementById('arena-screen-host-podium'),
      clientJoin: document.getElementById('arena-screen-client-join'),
      clientLobby: document.getElementById('arena-screen-client-lobby'),
      clientQuestion: document.getElementById('arena-screen-client-question'),
      clientResult: document.getElementById('arena-screen-client-result'),
      clientPodium: document.getElementById('arena-screen-client-podium')
    };

    // Botões e Controlos do Cabeçalho da Arena
    this.btnArenaSoundToggle = document.getElementById('btn-arena-sound-toggle');
    this.btnArenaExit = document.getElementById('btn-arena-exit');

    // Ecrã 1: Seleção de Papel
    this.btnRoleHost = document.getElementById('btn-role-host');
    this.btnRoleClient = document.getElementById('btn-role-client');
    this.btnRoleSimulation = document.getElementById('btn-role-simulation');
    this.btnRoleCustomQuestions = document.getElementById('btn-role-custom-questions');

    // Ecrã 2: Configuração Docente
    this.arenaConfigTopic = document.getElementById('arena-config-topic');
    this.arenaConfigCountGroup = document.getElementById('arena-config-count-group');
    this.arenaConfigTimeGroup = document.getElementById('arena-config-time-group');
    this.btnBackFromConfig = document.getElementById('btn-back-from-config');
    this.btnCreateArenaRoom = document.getElementById('btn-create-arena-room');
    this.btnOpenCustomQuestions = document.getElementById('btn-open-custom-questions');
    this.btnClearCustomQuestions = document.getElementById('btn-clear-custom-questions');
    this.arenaCustomActiveBadge = document.getElementById('arena-custom-active-badge');
    this.arenaCustomConfigDesc = document.getElementById('arena-custom-config-desc');
    this.arenaConfigCountContainer = document.getElementById('arena-config-count-container');

    // Ecrã 2B: Seleção Manual de Perguntas (Docente)
    this.btnCustomQBack = document.getElementById('btn-custom-q-back');
    this.arenaCustomPillCount = document.getElementById('arena-custom-pill-count');
    this.arenaCustomPillTime = document.getElementById('arena-custom-pill-time');
    this.arenaCustomFilterTopic = document.getElementById('arena-custom-filter-topic');
    this.arenaCustomSearchInput = document.getElementById('arena-custom-search-input');
    this.btnCustomClearSearch = document.getElementById('btn-custom-clear-search');
    this.tabCustomAll = document.getElementById('tab-custom-all');
    this.tabCustomSelected = document.getElementById('tab-custom-selected');
    this.countTabAll = document.getElementById('count-tab-all');
    this.countTabSelected = document.getElementById('count-tab-selected');
    this.btnQuickSelect5 = document.getElementById('btn-quick-select-5');
    this.btnQuickSelect10 = document.getElementById('btn-quick-select-10');
    this.btnQuickSelect20 = document.getElementById('btn-quick-select-20');
    this.btnCustomSelectFiltered = document.getElementById('btn-custom-select-filtered');
    this.btnCustomClearAll = document.getElementById('btn-custom-clear-all');
    this.arenaCustomQuestionsList = document.getElementById('arena-custom-questions-list');
    this.arenaCustomPagination = document.getElementById('arena-custom-pagination');
    this.btnCustomLoadMore = document.getElementById('btn-custom-load-more');
    this.arenaCustomFooterBadge = document.getElementById('arena-custom-footer-badge');
    this.btnCustomFooterCancel = document.getElementById('btn-custom-footer-cancel');
    this.btnCustomFooterSave = document.getElementById('btn-custom-footer-save');
    this.btnCustomQuizSave = document.getElementById('btn-custom-quiz-save');
    this.btnCustomQuizUpdate = document.getElementById('btn-custom-quiz-update');
    this.arenaSavedQuizSelect = document.getElementById('arena-saved-quiz-select');
    this.btnDeleteSavedQuiz = document.getElementById('btn-delete-saved-quiz');
    this.btnNewSavedQuiz = document.getElementById('btn-new-saved-quiz');
    this.btnEditSavedQuiz = document.getElementById('btn-edit-saved-quiz');
    this.btnDuplicateSavedQuiz = document.getElementById('btn-duplicate-saved-quiz');
    this.btnPreviewSavedQuiz = document.getElementById('btn-preview-saved-quiz');
    this.btnExportQuizzes = document.getElementById('btn-export-quizzes');
    this.btnImportQuizzes = document.getElementById('btn-import-quizzes');
    this.quizImportFile = document.getElementById('arena-quiz-import-file');
    this.quizSyncStatus = document.getElementById('arena-quiz-sync-status');
    this.quizPreview = document.getElementById('arena-quiz-preview');
    this.btnExportCsv = document.getElementById('btn-arena-export-csv');
    this.podiumSaveStatus = document.getElementById('arena-podium-save-status');

    // Ecrã 3: Lobby Docente
    this.arenaDisplayPin = document.getElementById('arena-display-pin');
    this.arenaQrImage = document.getElementById('arena-qr-image');
    this.arenaLobbyMeta = document.getElementById('arena-lobby-meta');
    this.arenaTeamsCount = document.getElementById('arena-teams-count');
    this.arenaLobbyTeamsGrid = document.getElementById('arena-lobby-teams-grid');
    this.btnAddMockTeam = document.getElementById('btnAddMockTeam') || document.getElementById('btn-add-mock-team');
    this.btnHostStartBattle = document.getElementById('btn-host-start-battle');

    // Ecrã 4: Pergunta no Projetor
    this.arenaLiveQIndex = document.getElementById('arena-live-q-index');
    this.arenaLiveQTopic = document.getElementById('arena-live-q-topic');
    this.arenaLiveTimer = document.getElementById('arena-live-timer');
    this.arenaTimerFill = document.getElementById('arena-timer-fill');
    this.arenaLiveQuestionText = document.getElementById('arena-live-question-text');
    this.arenaAnswersCounter = document.getElementById('arena-answers-counter');
    this.btnHostPauseTimer = document.getElementById('btn-host-pause-timer');
    this.btnHostSkipTimer = document.getElementById('btn-host-skip-timer');
    this.arenaLiveOptionsGrid = document.getElementById('arena-live-options-grid');

    // Ecrã 5: Revelação Pedagógica
    this.arenaRevealCorrectLetter = document.getElementById('arena-reveal-correct-letter');
    this.arenaRevealQText = document.getElementById('arena-reveal-q-text');
    this.arenaRevealOptionsGrid = document.getElementById('arena-reveal-options-grid');
    this.arenaBarsGrid = document.getElementById('arena-bars-grid');
    this.arenaRevealExplanation = document.getElementById('arena-reveal-explanation');
    this.arenaRevealDistractors = document.getElementById('arena-reveal-distractors');
    this.arenaRevealNursing = document.getElementById('arena-reveal-nursing');
    this.clientRevealSection = document.getElementById('arena-client-reveal-section');
    this.clientRevealQText = document.getElementById('client-reveal-q-text');
    this.clientRevealOptions = document.getElementById('client-reveal-options');
    this.clientRevealExpText = document.getElementById('client-reveal-exp-text');
    this.clientRevealDistractors = document.getElementById('client-reveal-distractors');
    this.btnHostShowLeaderboard = document.getElementById('btn-host-show-leaderboard');

    // Ecrã 6: Leaderboard
    this.arenaRankingsTable = document.getElementById('arena-rankings-table');
    this.btnHostNextQuestion = document.getElementById('btn-host-next-question');

    // Ecrã 7: Pódio Final
    this.arenaPodiumPedestal = document.getElementById('arena-podium-pedestal');
    this.arenaFinalRankingsTable = document.getElementById('arena-final-rankings-table');
    this.arenaHardestList = document.getElementById('arena-hardest-list');
    this.btnArenaFinishToHome = document.getElementById('btn-arena-finish-to-home');
    this.arenaConfettiCanvas = document.getElementById('arena-confetti-canvas');

    // Ecrãs Aluno (Cliente)
    this.clientInputPin = document.getElementById('client-input-pin');
    this.clientInputName = document.getElementById('client-input-name');
    this.clientAvatarPicker = document.getElementById('client-avatar-picker');
    this.btnClientSubmitJoin = document.getElementById('btn-client-submit-join');
    this.btnClientBackToSelect = document.getElementById('btn-client-back-to-select');
    this.clientLobbyAvatar = document.getElementById('client-lobby-avatar');
    this.clientLobbyTeamName = document.getElementById('client-lobby-team-name');
    this.clientVotingTeamBadge = document.getElementById('client-voting-team-badge');
    this.clientVotingQBadge = document.getElementById('client-voting-q-badge');
    this.clientVotingTimer = document.getElementById('client-voting-timer');
    this.clientQPreview = document.getElementById('client-q-preview');
    this.clientVoteStatus = document.getElementById('client-vote-status');
    this.clientResultIcon = document.getElementById('client-result-icon');
    this.clientResultTitle = document.getElementById('client-result-title');
    this.clientResultPoints = document.getElementById('client-result-points');
    this.clientResultStreak = document.getElementById('client-result-streak');
    this.clientResultTotalScore = document.getElementById('client-result-total-score');
    this.clientPodiumRankDisplay = document.getElementById('client-podium-rank-display');
    this.btnClientExitToHome = document.getElementById('btn-client-exit-to-home');

    // Modal de Autenticação do Docente (PIN Mestre)
    this.modalTeacherAuth = document.getElementById('modal-teacher-auth');
    this.formTeacherAuth = document.getElementById('form-teacher-auth');
    this.inputTeacherPin = document.getElementById('input-teacher-pin');
    this.teacherPinError = document.getElementById('teacher-pin-error');
    this.btnCloseTeacherModal = document.getElementById('btn-close-teacher-modal');
    this.btnCancelTeacherModal = document.getElementById('btn-cancel-teacher-modal');
    this.btnConfirmTeacherPin = document.getElementById('btn-confirm-teacher-pin');

    // Botões tácteis de voto (A, B, C, D)
    this.tactileBtns = [
      document.getElementById('btn-opt-0'),
      document.getElementById('btn-opt-1'),
      document.getElementById('btn-opt-2'),
      document.getElementById('btn-opt-3')
    ];
  }

  isTeacherAuthenticated() {
    try {
      return sessionStorage.getItem('arena_host_authenticated') === 'true';
    } catch (e) {
      return false;
    }
  }

  requestTeacherAuth(onSuccessAction, forcePrompt = false) {
    if (!forcePrompt && this.isTeacherAuthenticated()) {
      if (typeof onSuccessAction === 'function') onSuccessAction();
      return;
    }
    this.pendingTeacherAction = onSuccessAction;
    if (this.inputTeacherPin) this.inputTeacherPin.value = '';
    if (this.teacherPinError) {
      this.teacherPinError.classList.add('hidden');
      this.teacherPinError.style.display = 'none';
    }
    if (this.modalTeacherAuth) {
      this.modalTeacherAuth.classList.remove('hidden');
      setTimeout(() => {
        if (this.inputTeacherPin) this.inputTeacherPin.focus();
      }, 100);
    }
  }

  closeTeacherAuthModal() {
    if (this.modalTeacherAuth) {
      this.modalTeacherAuth.classList.add('hidden');
    }
    this.pendingTeacherAction = null;
    if (this.inputTeacherPin) this.inputTeacherPin.value = '';
  }

  verifyTeacherPin() {
    if (!this.inputTeacherPin) return;
    const pin = this.inputTeacherPin.value.trim();
    if (!pin) {
      this.showTeacherPinError("Por favor introduza o PIN de Docente.");
      return;
    }

    const hashed = arenaSha256(pin);
    const hashedLower = arenaSha256(pin.toLowerCase());
    if (hashed === ARENA_HOST_PIN_HASH || hashedLower === ARENA_HOST_PIN_HASH) {
      try {
        sessionStorage.setItem('arena_host_authenticated', 'true');
      } catch (e) {}

      const action = this.pendingTeacherAction || window.__teacherPendingAction;
      this.closeTeacherAuthModal();
      if (typeof action === 'function') {
        action();
      }
      window.__teacherPendingAction = null;
    } else {
      this.showTeacherPinError("PIN incorreto. Acesso restrito ao docente.");
      this.inputTeacherPin.value = '';
      this.inputTeacherPin.focus();
    }
  }

  showTeacherPinError(msg) {
    if (this.teacherPinError) {
      const span = this.teacherPinError.querySelector('span:last-child');
      if (span) span.textContent = msg;
      this.teacherPinError.classList.remove('hidden');
      this.teacherPinError.style.display = 'flex';
    }
  }

  showScreen(screenId) {
    Object.values(this.screens).forEach(scr => {
      if (scr) scr.classList.add('hidden');
    });
    if (this.screens[screenId]) {
      this.screens[screenId].classList.remove('hidden');
      this.currentScreen = screenId;
    }
  }

  initEventListeners() {
    // Alternar Som da Arena
    if (this.btnArenaSoundToggle) {
      this.btnArenaSoundToggle.addEventListener('click', () => {
        this.isMuted = !this.isMuted;
        this.engine.audioEnabled = !this.isMuted;
        this.btnArenaSoundToggle.textContent = this.isMuted ? '🔕 Mudo' : '🔔 Som';
      });
    }

    // Sair da Arena
    if (this.btnArenaExit) {
      this.btnArenaExit.addEventListener('click', () => {
        if (confirm("Tens a certeza de que queres sair da Arena BioFísica?")) {
          this.engine.cleanup();
          const homeView = document.getElementById('view-home');
          const arenaView = document.getElementById('view-arena');
          if (arenaView && homeView) {
            arenaView.classList.add('hidden');
            arenaView.classList.remove('active-view');
            homeView.classList.remove('hidden');
            homeView.classList.add('active-view');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }
      });
    }

    // Escolha de Papel (Docente protegido com PIN Mestre)
    if (this.btnRoleHost) {
      this.btnRoleHost.addEventListener('click', () => {
        this.requestTeacherAuth(() => {
          this.updateHostConfigCustomBadge();
          this.showScreen('hostConfig');
          this.syncQuizzesWithServer();
        });
      });
    }

    // Atalho direto para Seleção Manual de Perguntas (REQUER SEMPRE PIN)
    if (this.btnRoleCustomQuestions) {
      this.btnRoleCustomQuestions.addEventListener('click', () => {
        this.openCustomQuestionsSection();
      });
    }

    if (this.btnRoleClient) {
      this.btnRoleClient.addEventListener('click', () => {
        this.showScreen('clientJoin');
      });
    }

    if (this.btnRoleSimulation) {
      this.btnRoleSimulation.addEventListener('click', () => {
        this.requestTeacherAuth(() => {
          this.startSimulationSession();
        });
      });
    }

    // Modal de Autenticação do Docente (PIN Mestre)
    if (this.btnCloseTeacherModal) {
      this.btnCloseTeacherModal.addEventListener('click', () => this.closeTeacherAuthModal());
    }
    if (this.btnCancelTeacherModal) {
      this.btnCancelTeacherModal.addEventListener('click', () => this.closeTeacherAuthModal());
    }
    if (this.formTeacherAuth) {
      this.formTeacherAuth.addEventListener('submit', (e) => {
        e.preventDefault();
        this.verifyTeacherPin();
      });
    }
    if (this.btnConfirmTeacherPin) {
      this.btnConfirmTeacherPin.addEventListener('click', (e) => {
        e.preventDefault();
        this.verifyTeacherPin();
      });
    }

    // Configuração Docente: Seleção Manual de Perguntas (REQUER SEMPRE PIN)
    if (this.btnOpenCustomQuestions) {
      this.btnOpenCustomQuestions.addEventListener('click', () => {
        this.openCustomQuestionsSection();
      });
    }

    if (this.btnClearCustomQuestions) {
      this.btnClearCustomQuestions.addEventListener('click', () => {
        if (confirm("Tens a certeza de que queres limpar as perguntas personalizadas e voltar ao modo aleatório?")) {
          this.selectedCustomQuestionIds.clear();
          this.saveCustomQuestionIds();
          this.updateHostConfigCustomBadge();
          this.updateCustomSelectionSummary();
        }
      });
    }

    // Configuração Docente: Seletor de botões de contagem e tempo
    if (this.arenaConfigCountGroup) {
      this.arenaConfigCountGroup.querySelectorAll('.btn-group-item').forEach(btn => {
        btn.addEventListener('click', () => {
          this.arenaConfigCountGroup.querySelectorAll('.btn-group-item').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
        });
      });
    }

    if (this.arenaConfigTimeGroup) {
      this.arenaConfigTimeGroup.querySelectorAll('.btn-group-item').forEach(btn => {
        btn.addEventListener('click', () => {
          this.arenaConfigTimeGroup.querySelectorAll('.btn-group-item').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
        });
      });
    }

    if (this.btnBackFromConfig) {
      this.btnBackFromConfig.addEventListener('click', () => {
        this.showScreen('select');
      });
    }

    if (this.btnCreateArenaRoom) {
      this.btnCreateArenaRoom.addEventListener('click', () => {
        if (!this.isTeacherAuthenticated()) {
          this.requestTeacherAuth(() => {
            this.updateHostConfigCustomBadge();
            this.showScreen('hostConfig');
          });
          return;
        }

        const topicId = this.arenaConfigTopic ? this.arenaConfigTopic.value : '1';
        const countBtn = this.arenaConfigCountGroup ? this.arenaConfigCountGroup.querySelector('.active') : null;
        const count = countBtn ? parseInt(countBtn.getAttribute('data-value'), 10) : 20;
        const timeBtn = this.arenaConfigTimeGroup ? this.arenaConfigTimeGroup.querySelector('.active') : null;
        const time = timeBtn ? parseInt(timeBtn.getAttribute('data-value'), 10) : 45;

        // Se houver perguntas selecionadas manualmente pelo docente, usa-as!
        const customQuestions = this.selectedCustomQuestionIds.size > 0 
          ? this.getSelectedCustomQuestionsArray() 
          : null;

        this.engine.startHostSession({
          topicId: topicId,
          count: count,
          timePerQuestion: time,
          isSimulated: false,
          customQuestions: customQuestions,
          quizName: customQuestions ? (this.getActiveSavedQuiz() ? this.getActiveSavedQuiz().name : 'Seleção manual') : null
        });
      });
    }

    // Ecrã 2B: Navegação e Ações da Seleção Manual de Perguntas
    if (this.btnCustomQBack) {
      this.btnCustomQBack.addEventListener('click', () => {
        this.updateHostConfigCustomBadge();
        this.showScreen('hostConfig');
      });
    }

    if (this.btnCustomFooterCancel) {
      this.btnCustomFooterCancel.addEventListener('click', () => {
        this.updateHostConfigCustomBadge();
        this.showScreen('hostConfig');
      });
    }

    if (this.btnCustomQuizSave) {
      this.btnCustomQuizSave.addEventListener('click', () => this.saveDraftAsNewQuiz());
    }

    if (this.btnCustomQuizUpdate) {
      this.btnCustomQuizUpdate.addEventListener('click', () => this.updateActiveSavedQuiz());
    }

    if (this.arenaSavedQuizSelect) {
      this.arenaSavedQuizSelect.addEventListener('change', () => {
        const val = this.arenaSavedQuizSelect.value;
        if (val === '__draft__') return;
        if (val) {
          this.applySavedQuiz(val);
        } else {
          if (this.selectedCustomQuestionIds.size > 0 && !this.getActiveSavedQuiz() &&
              !confirm('Descartar a seleção manual atual (não guardada) e usar sorteio aleatório?')) {
            this.renderSavedQuizSelect();
            return;
          }
          this.selectedCustomQuestionIds.clear();
          this.saveCustomQuestionIds();
          this.setActiveSavedQuizId('');
        }
        this.updateHostConfigCustomBadge();
      });
    }

    if (this.btnNewSavedQuiz) {
      this.btnNewSavedQuiz.addEventListener('click', () => this.startNewSavedQuiz());
    }

    if (this.btnEditSavedQuiz) {
      this.btnEditSavedQuiz.addEventListener('click', () => {
        if (this.getActiveSavedQuiz()) this.openCustomQuestionsSection();
      });
    }

    if (this.btnDuplicateSavedQuiz) {
      this.btnDuplicateSavedQuiz.addEventListener('click', () => this.duplicateActiveQuiz());
    }

    if (this.btnPreviewSavedQuiz) {
      this.btnPreviewSavedQuiz.addEventListener('click', () => {
        if (!this.quizPreview) return;
        const open = this.quizPreview.classList.contains('hidden');
        this.quizPreview.classList.toggle('hidden', !open);
        this.btnPreviewSavedQuiz.textContent = open ? '🙈 Ocultar perguntas' : '👁️ Ver perguntas';
        if (open) this.renderQuizPreview();
      });
    }

    if (this.btnExportQuizzes) {
      this.btnExportQuizzes.addEventListener('click', () => this.exportQuizzesJson());
    }

    if (this.btnImportQuizzes && this.quizImportFile) {
      this.btnImportQuizzes.addEventListener('click', () => this.quizImportFile.click());
      this.quizImportFile.addEventListener('change', () => {
        const file = this.quizImportFile.files && this.quizImportFile.files[0];
        this.quizImportFile.value = '';
        if (file) this.importQuizzesFile(file);
      });
    }

    if (this.btnExportCsv) {
      this.btnExportCsv.addEventListener('click', () => this.exportSessionCsv());
    }

    if (this.btnDeleteSavedQuiz) {
      this.btnDeleteSavedQuiz.addEventListener('click', () => {
        if (this.activeSavedQuizId) this.deleteSavedQuiz(this.activeSavedQuizId);
      });
    }

    if (this.btnCustomFooterSave) {
      this.btnCustomFooterSave.addEventListener('click', () => {
        this.saveCustomQuestionIds();
        this.updateHostConfigCustomBadge();
        this.showScreen('hostConfig');
      });
    }

    // Filtro por Tópico no Seletor Manual
    if (this.arenaCustomFilterTopic) {
      this.arenaCustomFilterTopic.addEventListener('change', () => {
        this.customFilterTopic = this.arenaCustomFilterTopic.value;
        this.customRenderLimit = 50;
        this.renderCustomQuestionsList();
      });
    }

    // Pesquisa Instantânea com Debounce
    let searchDebounceTimer = null;
    if (this.arenaCustomSearchInput) {
      this.arenaCustomSearchInput.addEventListener('input', () => {
        const val = this.arenaCustomSearchInput.value;
        if (this.btnCustomClearSearch) {
          if (val.trim()) this.btnCustomClearSearch.classList.remove('hidden');
          else this.btnCustomClearSearch.classList.add('hidden');
        }
        clearTimeout(searchDebounceTimer);
        searchDebounceTimer = setTimeout(() => {
          this.customSearchQuery = val;
          this.customRenderLimit = 50;
          this.renderCustomQuestionsList();
        }, 150);
      });
    }

    if (this.btnCustomClearSearch) {
      this.btnCustomClearSearch.addEventListener('click', () => {
        if (this.arenaCustomSearchInput) {
          this.arenaCustomSearchInput.value = '';
          this.customSearchQuery = '';
          this.btnCustomClearSearch.classList.add('hidden');
          this.customRenderLimit = 50;
          this.renderCustomQuestionsList();
        }
      });
    }

    // Abas de Filtro: Todas as Perguntas vs Apenas Selecionadas
    if (this.tabCustomAll) {
      this.tabCustomAll.addEventListener('click', () => {
        this.customActiveTab = 'all';
        this.tabCustomAll.classList.add('active');
        if (this.tabCustomSelected) this.tabCustomSelected.classList.remove('active');
        this.customRenderLimit = 50;
        this.renderCustomQuestionsList();
      });
    }

    if (this.tabCustomSelected) {
      this.tabCustomSelected.addEventListener('click', () => {
        this.customActiveTab = 'selected';
        this.tabCustomSelected.classList.add('active');
        if (this.tabCustomAll) this.tabCustomAll.classList.remove('active');
        this.customRenderLimit = 50;
        this.renderCustomQuestionsList();
      });
    }

    // Ações Rápidas de Seleção (+5, +10, +20, Marcar Visíveis, Desmarcar Todas)
    const addQuickCount = (countToAdd) => {
      this.addCustomQuestionIds(this.getFilteredQuestions().map(q => q.id), countToAdd);
    };

    if (this.btnQuickSelect5) this.btnQuickSelect5.addEventListener('click', () => addQuickCount(5));
    if (this.btnQuickSelect10) this.btnQuickSelect10.addEventListener('click', () => addQuickCount(10));
    if (this.btnQuickSelect20) this.btnQuickSelect20.addEventListener('click', () => addQuickCount(20));

    if (this.btnCustomSelectFiltered) {
      this.btnCustomSelectFiltered.addEventListener('click', () => {
        this.addCustomQuestionIds(this.getFilteredQuestions().map(q => q.id));
      });
    }

    if (this.btnCustomClearAll) {
      this.btnCustomClearAll.addEventListener('click', () => {
        if (confirm("Tens a certeza de que queres desmarcar todas as perguntas selecionadas?")) {
          this.selectedCustomQuestionIds.clear();
          this.saveCustomQuestionIds();
          this.updateHostConfigCustomBadge();
          this.renderCustomQuestionsList();
        }
      });
    }

    // Paginação: Carregar Mais
    if (this.btnCustomLoadMore) {
      this.btnCustomLoadMore.addEventListener('click', () => {
        this.customRenderLimit += 50;
        this.renderCustomQuestionsList();
      });
    }

    // Delegação de Eventos na Lista de Perguntas (Checkbox & Expandir Detalhes)
    if (this.arenaCustomQuestionsList) {
      this.arenaCustomQuestionsList.addEventListener('change', (e) => {
        if (e.target && e.target.classList.contains('arena-custom-q-check')) {
          const qid = parseInt(e.target.getAttribute('data-qid'), 10);
          if (e.target.checked) {
            if (this.selectedCustomQuestionIds.size >= ARENA_QUIZ_SIZE) {
              e.target.checked = false;
              alert(`Cada quiz tem ${ARENA_QUIZ_SIZE} perguntas. Já tens ${ARENA_QUIZ_SIZE} selecionadas: desmarca alguma para adicionar outra.`);
              return;
            }
            this.selectedCustomQuestionIds.add(qid);
          } else {
            this.selectedCustomQuestionIds.delete(qid);
          }
          const card = e.target.closest('.arena-custom-q-card');
          if (card) {
            if (e.target.checked) card.classList.add('is-selected');
            else card.classList.remove('is-selected');
          }
          this.saveCustomQuestionIds();
          this.updateCustomSelectionSummary();
          this.updateHostConfigCustomBadge();
        }
      });

      this.arenaCustomQuestionsList.addEventListener('click', (e) => {
        const toggleBtn = e.target.closest('.arena-custom-q-toggle-btn');
        if (toggleBtn) {
          const qid = toggleBtn.getAttribute('data-qid');
          const details = document.getElementById(`details-q-${qid}`);
          if (details) {
            const isHidden = details.classList.contains('hidden');
            if (isHidden) {
              details.classList.remove('hidden');
              toggleBtn.innerHTML = '<span>🔼 Ocultar Detalhes</span>';
            } else {
              details.classList.add('hidden');
              toggleBtn.innerHTML = '<span>👁️ Ver Opções & Justificação</span>';
            }
          }
        }
      });
    }

    // Lobby Docente
    if (this.btnAddMockTeam) {
      this.btnAddMockTeam.addEventListener('click', () => {
        const mockNames = ['Equipa Alavancas', 'Seringas de Pascal', 'Centro de Gravidade', 'Atrito Estático', 'Força Normal'];
        const mockAvatars = ['🩺', '💉', '🫀', '🦴', '⚡'];
        const existingCount = Object.keys(this.engine.teams).length;
        const name = mockNames[existingCount % mockNames.length] + ' (Simulada ' + (existingCount + 1) + ')';
        const avatar = mockAvatars[existingCount % mockAvatars.length];
        const teamId = 'mock_' + (existingCount + 1);

        this.net.emit('team_joined', { teamId, teamName: name, avatar });
      });
    }

    if (this.btnHostStartBattle) {
      this.btnHostStartBattle.addEventListener('click', () => {
        this.engine.startBattle();
      });
    }

    // Controlos durante a Pergunta
    if (this.btnHostPauseTimer) {
      this.btnHostPauseTimer.addEventListener('click', () => {
        const isPaused = this.engine.togglePause();
        this.btnHostPauseTimer.textContent = isPaused ? '▶️ Retomar' : '⏸️ Pausar';
      });
    }

    if (this.btnHostSkipTimer) {
      this.btnHostSkipTimer.addEventListener('click', () => {
        this.engine.skipQuestionTimer();
      });
    }

    // Revelação -> Leaderboard
    if (this.btnHostShowLeaderboard) {
      this.btnHostShowLeaderboard.addEventListener('click', () => {
        this.engine.showLeaderboard();
      });
    }

    // Leaderboard -> Próxima Pergunta
    if (this.btnHostNextQuestion) {
      this.btnHostNextQuestion.addEventListener('click', () => {
        this.engine.nextQuestion();
      });
    }

    // Pódio -> Voltar ao Início
    if (this.btnArenaFinishToHome) {
      this.btnArenaFinishToHome.addEventListener('click', () => {
        this.engine.cleanup();
        this.showScreen('select');
        const homeView = document.getElementById('view-home');
        const arenaView = document.getElementById('view-arena');
        if (arenaView && homeView) {
          arenaView.classList.add('hidden');
          arenaView.classList.remove('active-view');
          homeView.classList.remove('hidden');
          homeView.classList.add('active-view');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });
    }

    // Aluno: Escolha de Avatar
    if (this.clientAvatarPicker) {
      this.clientAvatarPicker.querySelectorAll('.avatar-opt').forEach(btn => {
        btn.addEventListener('click', () => {
          this.clientAvatarPicker.querySelectorAll('.avatar-opt').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          this.selectedAvatar = btn.getAttribute('data-avatar') || '🩺';
        });
      });
    }

    // Aluno: Submeter Entrada na Sala
    if (this.btnClientSubmitJoin) {
      this.btnClientSubmitJoin.addEventListener('click', () => {
        const pin = this.clientInputPin ? this.clientInputPin.value.trim().toUpperCase() : '';
        const name = this.clientInputName ? this.clientInputName.value.trim() : '';

        if (!pin) {
          alert("Por favor, introduz o PIN da sala projetado no quadro!");
          return;
        }
        if (!name) {
          alert("Por favor, introduz o nome da vossa equipa!");
          return;
        }

        this.engine.joinClientSession({
          roomPin: pin,
          teamName: name,
          avatar: this.selectedAvatar
        });
      });
    }

    if (this.btnClientBackToSelect) {
      this.btnClientBackToSelect.addEventListener('click', () => {
        this.showScreen('select');
      });
    }

    // Aluno: Voto Táctil nos botões A, B, C, D
    this.tactileBtns.forEach((btn, idx) => {
      if (btn) {
        btn.addEventListener('click', () => {
          this.tactileBtns.forEach(b => b.classList.remove('selected'));
          btn.classList.add('selected');
          this.myCurrentVote = idx;
          this.engine.submitClientAnswer(idx);

          const letters = ['A', 'B', 'C', 'D'];
          if (this.clientVoteStatus) {
            this.clientVoteStatus.innerHTML = `✅ <strong>Opção ${letters[idx]} registada!</strong> Podem mudar até o tempo terminar.`;
            this.clientVoteStatus.classList.add('voted');
          }
        });
      }
    });

    if (this.btnClientExitToHome) {
      this.btnClientExitToHome.addEventListener('click', () => {
        this.engine.cleanup();
        this.showScreen('select');
        const homeView = document.getElementById('view-home');
        const arenaView = document.getElementById('view-arena');
        if (arenaView && homeView) {
          arenaView.classList.add('hidden');
          arenaView.classList.remove('active-view');
          homeView.classList.remove('hidden');
          homeView.classList.add('active-view');
        }
      });
    }
  }

  // =========================================================================
  // Listeners do Engine (Atualizações de Estado e UI)
  // =========================================================================
  initEngineListeners() {
    // 1. Host Lobby Pronto
    this.engine.onUI('host_lobby_ready', (data) => {
      if (this.arenaDisplayPin) this.arenaDisplayPin.textContent = data.roomPin;
      if (this.arenaLobbyMeta) {
        this.arenaLobbyMeta.textContent = `${data.topicName} • ${data.questionCount} Perguntas • ${data.timePerQuestion}s por Pergunta`;
      }

      // Gerar QR Code localmente (sem enviar o link da sala a serviços externos)
      if (this.arenaQrImage && typeof qrcode === 'function') {
        const currentUrl = window.location.origin + window.location.pathname;
        const joinUrl = `${currentUrl}#arena?pin=${encodeURIComponent(data.roomPin)}`;
        const qr = qrcode(0, 'M');
        qr.addData(joinUrl);
        qr.make();
        this.arenaQrImage.src = qr.createDataURL(8, 2);
      }

      this.renderLobbyTeams([]);
      this.showScreen('hostLobby');
    });

    // 2. Atualização de Equipas no Lobby
    this.engine.onUI('teams_updated', (teams) => {
      this.renderLobbyTeams(teams);
    });

    // 3. Início de Pergunta no Projetor
    this.engine.onUI('question_started', (data) => {
      if (this.arenaLiveQIndex) this.arenaLiveQIndex.textContent = `Pergunta ${data.questionIndex} de ${data.totalQuestions} • Tópico ${Math.floor(data.question.id / 1000)}`;
      if (this.arenaLiveQTopic) this.arenaLiveQTopic.textContent = `Tópico ${data.question.topicId}: Biomecânica`;
      if (this.arenaLiveQuestionText) this.arenaLiveQuestionText.textContent = data.question.question;
      if (this.arenaLiveTimer) this.arenaLiveTimer.textContent = `⏱️ ${data.timeRemaining}s`;
      if (this.arenaTimerFill) this.arenaTimerFill.style.width = '100%';
      if (this.arenaAnswersCounter) {
        this.arenaAnswersCounter.textContent = `📥 0 de ${data.teams.length} equipas responderam`;
      }
      if (this.btnHostPauseTimer) this.btnHostPauseTimer.textContent = '⏸️ Pausar';

      // Renderizar as 4 Opções A, B, C, D
      if (this.arenaLiveOptionsGrid) {
        this.arenaLiveOptionsGrid.innerHTML = '';
        const letters = ['A', 'B', 'C', 'D'];
        data.question.options.forEach((opt, idx) => {
          const optCard = document.createElement('div');
          optCard.className = `arena-live-opt opt-color-${letters[idx].toLowerCase()}`;
          optCard.innerHTML = `
            <span class="arena-opt-letter-tag">${letters[idx]}</span>
            <span class="arena-opt-text">${opt}</span>
          `;
          this.arenaLiveOptionsGrid.appendChild(optCard);
        });
      }

      this.showScreen('hostQuestion');
    });

    // 4. Temporizador a correr
    this.engine.onUI('timer_tick', (data) => {
      if (this.arenaLiveTimer) this.arenaLiveTimer.textContent = `⏱️ ${data.timeRemaining}s`;
      if (this.arenaTimerFill) {
        const pct = Math.max(0, (data.timeRemaining / data.totalTime) * 100);
        this.arenaTimerFill.style.width = `${pct}%`;
        if (data.timeRemaining <= 5) {
          this.arenaTimerFill.style.backgroundColor = 'var(--color-danger)';
        } else {
          this.arenaTimerFill.style.backgroundColor = 'var(--color-brand)';
        }
      }
    });

    // 5. Progresso de Respostas
    this.engine.onUI('answers_progress', (data) => {
      if (this.arenaAnswersCounter) {
        this.arenaAnswersCounter.textContent = `📥 ${data.answeredCount} de ${data.totalTeams} equipas responderam`;
      }
    });

    // 6. Revelação da Pergunta
    this.engine.onUI('question_revealed', (data) => {
      const letters = ['A', 'B', 'C', 'D'];
      const correctLtr = letters[data.question.correctIndex];
      
      if (this.arenaRevealCorrectLetter) {
        this.arenaRevealCorrectLetter.innerHTML = `Opção <span style="font-size: 1.6rem; text-decoration: underline;">${correctLtr}</span> está Correta! (${data.correctTeamsCount} de ${data.totalTeams} equipas acertaram)`;
      }

      // Pergunta no Ecrã de Revelação do Anfitrião
      if (this.arenaRevealQText) {
        this.arenaRevealQText.textContent = data.question.question;
      }

      // As 4 opções A, B, C, D no Ecrã de Revelação do Anfitrião
      if (this.arenaRevealOptionsGrid) {
        this.arenaRevealOptionsGrid.innerHTML = '';
        data.question.options.forEach((optText, idx) => {
          const isCorrect = idx === data.question.correctIndex;
          const ltr = letters[idx];
          const optCard = document.createElement('div');
          optCard.className = `arena-reveal-option-card ${isCorrect ? 'is-correct' : 'is-wrong'}`;
          optCard.innerHTML = `
            <div class="arena-reveal-option-badge opt-badge-bg-${ltr.toLowerCase()}">${ltr}</div>
            <div class="arena-reveal-option-text">${optText}</div>
            ${isCorrect ? '<span class="arena-reveal-correct-tag">✓ Correta</span>' : ''}
          `;
          this.arenaRevealOptionsGrid.appendChild(optCard);
        });
      }

      // Gráfico de Barras
      if (this.arenaBarsGrid) {
        this.arenaBarsGrid.innerHTML = '';
        data.optionCounts.forEach((count, idx) => {
          const isCorrect = idx === data.question.correctIndex;
          const pct = data.totalTeams > 0 ? Math.round((count / data.totalTeams) * 100) : 0;
          const barItem = document.createElement('div');
          barItem.className = `arena-bar-item ${isCorrect ? 'bar-correct' : ''}`;
          barItem.innerHTML = `
            <div class="arena-bar-track">
              <div class="arena-bar-fill" style="height: ${Math.max(12, pct)}%;">
                <span class="arena-bar-count">${count}</span>
              </div>
            </div>
            <div class="arena-bar-letter opt-badge-${letters[idx].toLowerCase()}">${letters[idx]}</div>
          `;
          this.arenaBarsGrid.appendChild(barItem);
        });
      }

      // Explicação e Distratores
      if (this.arenaRevealExplanation) {
        this.arenaRevealExplanation.innerHTML = `<strong>Fundamentação:</strong> ${data.question.explanation}`;
      }

      if (this.arenaRevealDistractors) {
        let daHtml = '<strong>Análise das opções incorretas:</strong><ul style="margin: 0.4rem 0 0 1.25rem; font-size: 0.92rem; color: var(--text-secondary);">';
        data.question.options.forEach((opt, idx) => {
          if (idx !== data.question.correctIndex) {
            const daText = this.getOptionDistractorExplanation(data.question, idx);
            daHtml += `<li><strong>Opção ${letters[idx]}:</strong> ${daText}</li>`;
          }
        });
        daHtml += '</ul>';
        this.arenaRevealDistractors.innerHTML = daHtml;
      }

      if (this.arenaRevealNursing) {
        this.arenaRevealNursing.innerHTML = data.question.nursingApplication 
          ? `<strong>🏥 Aplicação aos Cuidados de Enfermagem:</strong> ${data.question.nursingApplication}` 
          : '';
      }

      this.showScreen('hostReveal');
    });

    // 7. Leaderboard Atualizado
    this.engine.onUI('leaderboard_updated', (data) => {
      this.renderRankingsTable(data.rankings, this.arenaRankingsTable);
      if (this.btnHostNextQuestion) {
        this.btnHostNextQuestion.textContent = data.isLastQuestion ? 'Ver Grande Pódio Final 🏆' : 'Próxima Pergunta ➔';
      }
      this.showScreen('hostLeaderboard');
    });

    // 8. Pódio Final
    this.engine.onUI('podium_ready', (data) => {
      this.lastSessionResult = data.session || null;
      this.setStatusText(this.podiumSaveStatus, '');
      const isSimulated = !!(this.engine.net && this.engine.net.isSimulated);
      if (data.session && !isSimulated) this.saveSessionToServer(data.session);
      this.renderPodium(data.winners);
      this.renderRankingsTable(data.rankings, this.arenaFinalRankingsTable);
      this.renderHardestQuestions(data.hardestQuestions);
      this.triggerConfetti();
      this.showScreen('hostPodium');
    });

    // =======================================================================
    // Eventos do Aluno (Cliente)
    // =======================================================================
    this.engine.onUI('client_connected', (data) => {
      if (this.clientLobbyAvatar) this.clientLobbyAvatar.textContent = data.avatar;
      if (this.clientLobbyTeamName) this.clientLobbyTeamName.textContent = data.teamName;
      this.showScreen('clientLobby');
    });

    this.engine.onUI('client_lobby_waiting', (data) => {
      // Aluno à espera
      this.showScreen('clientLobby');
    });

    this.engine.onUI('client_question_ready', (data) => {
      this.myCurrentVote = null;
      if (this.clientVotingTeamBadge) this.clientVotingTeamBadge.textContent = `${this.net.avatar} ${this.net.teamName}`;
      if (this.clientVotingQBadge) this.clientVotingQBadge.textContent = data.id ? `P${data.questionIndex}/${data.totalQuestions} • ${questionLabel(data.id)}` : `P${data.questionIndex}/${data.totalQuestions}`;
      if (this.clientVotingTimer) this.clientVotingTimer.textContent = `⏱️ ${data.timeRemaining}s`;
      if (this.clientQPreview) {
        this.clientQPreview.textContent = data.question || 'Olhem para o projetor da sala para ler o enunciado!';
      }

      const letters = ['A', 'B', 'C', 'D'];
      this.tactileBtns.forEach((btn, idx) => {
        if (btn) {
          btn.classList.remove('selected');
          const labelSpan = btn.querySelector('.btn-tactile-label');
          if (labelSpan) {
            // Texto completo da opção no telemóvel, sem truncagem
            labelSpan.innerHTML = data.options && data.options[idx] ? data.options[idx] : `Opção ${letters[idx]}`;
          }
        }
      });

      if (this.clientVoteStatus) {
        this.clientVoteStatus.innerHTML = `👆 Toquem na opção consensual da vossa equipa`;
        this.clientVoteStatus.classList.remove('voted');
      }

      this.showScreen('clientQuestion');
    });

    this.engine.onUI('client_round_result', (data) => {
      const letters = ['A', 'B', 'C', 'D'];
      const isCorrect = data.myResult.isCorrect;
      
      if (this.clientResultIcon) this.clientResultIcon.textContent = isCorrect ? '🎉' : '❌';
      if (this.clientResultTitle) {
        this.clientResultTitle.textContent = isCorrect ? 'Resposta Certa!' : `Opção Incorreta (Era a ${letters[data.correctIndex]})`;
        this.clientResultTitle.style.color = isCorrect ? 'var(--color-success)' : 'var(--color-danger)';
      }
      if (this.clientResultPoints) {
        this.clientResultPoints.textContent = isCorrect ? `+${data.myResult.points} Pontos` : '+0 Pontos';
        this.clientResultPoints.style.color = isCorrect ? 'var(--color-success)' : 'var(--text-muted)';
      }
      if (this.clientResultStreak) {
        const streak = data.myResult.streak || 0;
        this.clientResultStreak.textContent = streak > 1 ? `🔥 Sequência de ${streak} acertos!` : (isCorrect ? '✅ 1.º acerto!' : '💪 Próxima corre melhor!');
      }
      if (this.clientResultTotalScore) {
        this.clientResultTotalScore.textContent = `${data.myResult.currentScore || 0} pts`;
      }

      // Pergunta no Telemóvel do Aluno
      if (this.clientRevealQText) {
        this.clientRevealQText.textContent = data.question || '';
      }

      // As 4 opções A, B, C, D com a correta em verde no Telemóvel
      if (this.clientRevealOptions) {
        this.clientRevealOptions.innerHTML = '';
        if (data.options && Array.isArray(data.options)) {
          data.options.forEach((optText, idx) => {
            const isThisCorrect = idx === data.correctIndex;
            const isMyChoice = idx === this.myCurrentVote;
            const ltr = letters[idx];
            const optDiv = document.createElement('div');
            optDiv.className = `arena-client-opt-item ${isThisCorrect ? 'is-correct' : (isMyChoice && !isCorrect ? 'is-my-wrong' : '')}`;
            optDiv.innerHTML = `
              <span class="arena-client-opt-badge opt-badge-bg-${ltr.toLowerCase()}">${ltr}</span>
              <span class="arena-client-opt-text" style="flex: 1;">${optText}</span>
              ${isThisCorrect ? '<span style="color: var(--color-success); font-weight: 700; font-size: 0.8rem; margin-left: 0.35rem;">✓ Correta</span>' : ''}
              ${isMyChoice && !isCorrect ? '<span style="color: var(--color-danger); font-weight: 700; font-size: 0.8rem; margin-left: 0.35rem;">✗ A vossa</span>' : ''}
            `;
            this.clientRevealOptions.appendChild(optDiv);
          });
        }
      }

      // Explicação Científica no Telemóvel
      if (this.clientRevealExpText) {
        this.clientRevealExpText.innerHTML = data.explanation || '';
      }

      // Distratores no Telemóvel do Aluno
      if (this.clientRevealDistractors) {
        let daHtml = '<strong style="color: var(--text-secondary); display: block; margin-bottom: 0.3rem;">🔍 Porque estão incorretas as restantes 3 opções:</strong><ul style="margin: 0 0 0 1.15rem; padding: 0; color: var(--text-secondary); line-height: 1.4;">';
        data.options.forEach((opt, idx) => {
          if (idx !== data.correctIndex) {
            const daText = this.getOptionDistractorExplanation(data, idx);
            daHtml += `<li style="margin-bottom: 0.3rem;"><strong>Opção ${letters[idx]}:</strong> ${daText}</li>`;
          }
        });
        daHtml += '</ul>';
        this.clientRevealDistractors.innerHTML = daHtml;
      }

      this.showScreen('clientResult');
    });

    this.engine.onUI('client_podium_final', (data) => {
      if (this.clientPodiumRankDisplay) {
        if (data.myFinalRank === 1) {
          this.clientPodiumRankDisplay.textContent = '🥇 1.º LUGAR! CAMPEÕES DA AULA! 🏆';
        } else if (data.myFinalRank === 2) {
          this.clientPodiumRankDisplay.textContent = '🥈 2.º Lugar no Pódio! Parabéns!';
        } else if (data.myFinalRank === 3) {
          this.clientPodiumRankDisplay.textContent = '🥉 3.º Lugar no Pódio! Excelente debate!';
        } else if (data.myFinalRank) {
          this.clientPodiumRankDisplay.textContent = `${data.myFinalRank}.º Lugar na Classificação Geral`;
        }
      }
      this.showScreen('clientPodium');
    });
  }

  // =========================================================================
  // Helpers de Renderização
  // =========================================================================
  getOptionDistractorExplanation(questionObj, optIdx) {
    if (!questionObj || optIdx === questionObj.correctIndex) return null;
    const da = questionObj.distractorAnalysis;
    if (!da) return 'Esta opção é cientificamente incorreta no contexto da questão apresentada.';

    let explanation = null;

    // 1. Array com 4 posições indexado por opção
    if (Array.isArray(da) && da.length === 4) {
      explanation = da[optIdx];
    }
    // 2. Array com 3 posições (formato bruto na ordem de aparição dos distratores)
    else if (Array.isArray(da) && da.length === 3) {
      const dIdx = optIdx > questionObj.correctIndex ? optIdx - 1 : optIdx;
      explanation = da[dIdx];
    }
    // 3. Objeto
    else if (typeof da === 'object' && !Array.isArray(da)) {
      const lettersList = ['A', 'B', 'C', 'D'];
      explanation = da[lettersList[optIdx]] || da[optIdx];
    }

    // 4. Fallback de proteção
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

  renderLobbyTeams(teams) {
    if (this.arenaTeamsCount) this.arenaTeamsCount.textContent = teams.length;
    if (this.arenaLobbyTeamsGrid) {
      this.arenaLobbyTeamsGrid.innerHTML = '';
      if (teams.length === 0) {
        this.arenaLobbyTeamsGrid.innerHTML = `
          <div style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 2rem;">
            Aguardando que as equipas leiam o QR Code ou insiram o PIN...
          </div>
        `;
        return;
      }

      teams.forEach(t => {
        const card = document.createElement('div');
        card.className = 'arena-team-card';
        card.innerHTML = `
          <span style="font-size: 1.4rem;">${arenaEscapeHtml(t.avatar || '🩺')}</span>
          <span style="font-weight: 700; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${arenaEscapeHtml(t.teamName)}</span>
          <span style="color: var(--color-success); font-size: 0.8rem; margin-left: auto;">● Online</span>
        `;
        this.arenaLobbyTeamsGrid.appendChild(card);
      });
    }
  }

  renderRankingsTable(rankings, tableContainer) {
    if (!tableContainer) return;
    tableContainer.innerHTML = '';

    rankings.forEach((t, idx) => {
      const row = document.createElement('div');
      row.className = `arena-ranking-row ${idx === 0 ? 'rank-gold' : idx === 1 ? 'rank-silver' : idx === 2 ? 'rank-bronze' : ''}`;
      
      let medal = `${idx + 1}.º`;
      if (idx === 0) medal = '🥇 1.º';
      else if (idx === 1) medal = '🥈 2.º';
      else if (idx === 2) medal = '🥉 3.º';

      row.innerHTML = `
        <div class="arena-rank-pos">${medal}</div>
        <div class="arena-rank-avatar">${arenaEscapeHtml(t.avatar || '🩺')}</div>
        <div class="arena-rank-name">${arenaEscapeHtml(t.teamName)}</div>
        <div class="arena-rank-streak">${t.streak > 1 ? `🔥 ${t.streak}` : ''}</div>
        <div class="arena-rank-score">${(t.score || 0).toLocaleString()} pts</div>
      `;
      tableContainer.appendChild(row);
    });
  }

  renderPodium(winners) {
    if (!this.arenaPodiumPedestal) return;
    this.arenaPodiumPedestal.innerHTML = '';

    // Ordem visual clássica: 2.º (esquerda), 1.º (centro, mais alto), 3.º (direita)
    const p1 = winners[0];
    const p2 = winners[1];
    const p3 = winners[2];

    const podiumHtml = `
      <div class="arena-pedestal-slot slot-second">
        ${p2 ? `
          <div class="podium-avatar">🥈 ${arenaEscapeHtml(p2.avatar)}</div>
          <div class="podium-name">${arenaEscapeHtml(p2.teamName)}</div>
          <div class="podium-score">${p2.score.toLocaleString()} pts</div>
          <div class="podium-block block-silver">2.º Lugar</div>
        ` : ''}
      </div>

      <div class="arena-pedestal-slot slot-first">
        ${p1 ? `
          <div class="podium-crown">👑</div>
          <div class="podium-avatar">🥇 ${arenaEscapeHtml(p1.avatar)}</div>
          <div class="podium-name">${arenaEscapeHtml(p1.teamName)}</div>
          <div class="podium-score">${p1.score.toLocaleString()} pts</div>
          <div class="podium-block block-gold">1.º VENCEDOR</div>
        ` : ''}
      </div>

      <div class="arena-pedestal-slot slot-third">
        ${p3 ? `
          <div class="podium-avatar">🥉 ${arenaEscapeHtml(p3.avatar)}</div>
          <div class="podium-name">${arenaEscapeHtml(p3.teamName)}</div>
          <div class="podium-score">${p3.score.toLocaleString()} pts</div>
          <div class="podium-block block-bronze">3.º Lugar</div>
        ` : ''}
      </div>
    `;

    this.arenaPodiumPedestal.innerHTML = podiumHtml;
  }

  renderHardestQuestions(hardestQuestions) {
    if (!this.arenaHardestList) return;
    this.arenaHardestList.innerHTML = '';

    if (hardestQuestions.length === 0) {
      this.arenaHardestList.innerHTML = '<p style="color: var(--color-success);">🎉 Parabéns! A turma dominou todas as questões sem taxas de erro significativas.</p>';
      return;
    }

    const letters = ['A', 'B', 'C', 'D'];
    hardestQuestions.forEach(q => {
      const card = document.createElement('div');
      card.className = 'arena-hardest-card';
      card.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
          <span class="arena-badge-danger">⚠️ Taxa de Erro: ${q.errorRate}% da turma</span>
          <span style="font-size: 0.85rem; color: var(--text-muted); font-weight: 600;">${questionLabel(q.questionId)}</span>
        </div>
        <p style="font-weight: 700; margin-bottom: 0.5rem;">${q.questionText}</p>
        <p style="font-size: 0.92rem; color: var(--text-secondary); margin-bottom: 0.4rem;">
          <strong>Opção Correta (${letters[q.correctIndex]}):</strong> ${q.explanation}
        </p>
        ${q.nursingApplication ? `<p style="font-size: 0.88rem; color: var(--color-brand);"><strong>🏥 Foco Clínico:</strong> ${q.nursingApplication}</p>` : ''}
      `;
      this.arenaHardestList.appendChild(card);
    });
  }

  triggerConfetti() {
    if (!this.arenaConfettiCanvas) return;
    const canvas = this.arenaConfettiCanvas;
    const ctx = canvas.getContext('2d');
    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = canvas.parentElement.clientHeight || 500;

    const pieces = [];
    const colors = ['#f59e0b', '#ef4444', '#10b981', '#3b82f6', '#8b5cf6', '#ec4899'];
    for (let i = 0; i < 90; i++) {
      pieces.push({
        x: Math.random() * canvas.width,
        y: Math.random() * -canvas.height,
        w: 6 + Math.random() * 8,
        h: 8 + Math.random() * 8,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: -2 + Math.random() * 4,
        vy: 2 + Math.random() * 5,
        rotation: Math.random() * 360,
        vr: -5 + Math.random() * 10
      });
    }

    let frames = 0;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pieces.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.vr;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx.restore();
      });

      frames++;
      if (frames < 240) {
        requestAnimationFrame(animate);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    };
    requestAnimationFrame(animate);
  }

  startSimulationSession() {
    if (!this.isTeacherAuthenticated()) {
      this.requestTeacherAuth(() => {
        this.startSimulationSession();
      });
      return;
    }
    this.engine.startHostSession({
      topicId: 1,
      count: 5, // 5 perguntas para demonstração rápida
      timePerQuestion: 25,
      isSimulated: true
    });
  }

  // =========================================================================
  // GESTÃO E SELEÇÃO MANUAL DE PERGUNTAS (DOCENTE - REQUER PIN MESTRE)
  // =========================================================================

  loadSavedCustomQuestionIds() {
    try {
      const saved = localStorage.getItem('arena_custom_question_ids');
      if (saved) {
        const arr = JSON.parse(saved);
        if (Array.isArray(arr)) {
          this.selectedCustomQuestionIds = new Set(arr);
        }
      }
    } catch (e) {
      this.selectedCustomQuestionIds = new Set();
    }
  }

  saveCustomQuestionIds() {
    try {
      localStorage.setItem('arena_custom_question_ids', JSON.stringify([...this.selectedCustomQuestionIds]));
    } catch (e) {}
  }

  // ----- Quizzes pré-preparados (guardados neste navegador) -----

  loadSavedQuizzes() {
    try {
      const arr = JSON.parse(localStorage.getItem('arena_saved_quizzes') || '[]');
      return Array.isArray(arr) ? arr : [];
    } catch (e) {
      return [];
    }
  }

  persistSavedQuizzes(list) {
    try {
      localStorage.setItem('arena_saved_quizzes', JSON.stringify(list));
    } catch (e) {}
  }

  getActiveSavedQuizId() {
    try {
      return localStorage.getItem('arena_active_saved_quiz') || '';
    } catch (e) {
      return '';
    }
  }

  setActiveSavedQuizId(id) {
    this.activeSavedQuizId = id || '';
    try {
      localStorage.setItem('arena_active_saved_quiz', this.activeSavedQuizId);
    } catch (e) {}
  }

  getActiveSavedQuiz() {
    return this.loadSavedQuizzes().find(q => q.id === this.activeSavedQuizId) || null;
  }

  // Carrega um quiz guardado para o rascunho usado pela sala
  applySavedQuiz(id) {
    const quiz = this.loadSavedQuizzes().find(q => q.id === id);
    if (!quiz) return;
    this.selectedCustomQuestionIds = new Set(quiz.questionIds);
    this.saveCustomQuestionIds();
    this.setActiveSavedQuizId(id);
  }

  // Adiciona perguntas ao rascunho, sem ultrapassar ARENA_QUIZ_SIZE
  addCustomQuestionIds(ids, limit = Infinity) {
    let added = 0;
    let full = false;
    for (const id of ids) {
      if (added >= limit) break;
      if (this.selectedCustomQuestionIds.has(id)) continue;
      if (this.selectedCustomQuestionIds.size >= ARENA_QUIZ_SIZE) {
        full = true;
        break;
      }
      this.selectedCustomQuestionIds.add(id);
      added++;
    }
    if (full) {
      alert(`Cada quiz tem ${ARENA_QUIZ_SIZE} perguntas. Já tens ${ARENA_QUIZ_SIZE} selecionadas: desmarca alguma para adicionar outra.`);
    }
    this.saveCustomQuestionIds();
    this.updateHostConfigCustomBadge();
    this.renderCustomQuestionsList();
    return added;
  }

  // Verifica se o rascunho tem exatamente ARENA_QUIZ_SIZE perguntas antes de guardar
  isDraftQuizComplete() {
    const count = this.selectedCustomQuestionIds.size;
    if (count === ARENA_QUIZ_SIZE) return true;
    alert(`Um quiz tem de ter exatamente ${ARENA_QUIZ_SIZE} perguntas (tens ${count} selecionadas).`);
    return false;
  }

  saveDraftAsNewQuiz() {
    if (!this.isDraftQuizComplete()) return;
    const name = (prompt('Nome do quiz (ex.: "Aula 3 - Alavancas"):', '') || '').trim();
    if (!name) return;
    const quiz = {
      id: 'quiz_' + Date.now(),
      name: name,
      questionIds: [...this.selectedCustomQuestionIds],
      createdAt: new Date().toISOString()
    };
    this.persistSavedQuizzes([...this.loadSavedQuizzes(), quiz]);
    this.syncQuizSave(quiz.id);
    // Esvazia o rascunho para o próximo quiz começar do zero
    this.selectedCustomQuestionIds.clear();
    this.saveCustomQuestionIds();
    this.setActiveSavedQuizId('');
    this.updateHostConfigCustomBadge();
    this.renderCustomQuestionsList();
    alert(`Quiz "${name}" guardado. Total de quizzes guardados: ${this.loadSavedQuizzes().length}. Podes preparar o próximo.`);
  }

  // ----- Sincronização com o servidor (Google Sheets) -----

  setStatusText(el, msg) {
    if (el) el.textContent = msg;
  }

  getTombstones() {
    try {
      const arr = JSON.parse(localStorage.getItem('arena_quiz_tombstones') || '[]');
      return Array.isArray(arr) ? arr : [];
    } catch (e) {
      return [];
    }
  }

  setTombstones(list) {
    try {
      localStorage.setItem('arena_quiz_tombstones', JSON.stringify(list));
    } catch (e) {}
  }

  // Envia um quiz para o servidor. Se falhar, fica marcado como pendente (dirty)
  async syncQuizSave(id) {
    if (!QuizSync.isEnabled()) return;
    const setDirty = dirty => this.persistSavedQuizzes(this.loadSavedQuizzes().map(q =>
      q.id === id ? { ...q, dirty: dirty } : q));
    const quiz = this.loadSavedQuizzes().find(q => q.id === id);
    if (!quiz) return;
    try {
      await QuizSync.saveQuiz(quiz);
      setDirty(false);
      this.setStatusText(this.quizSyncStatus, '✅ Guardado no servidor.');
    } catch (e) {
      setDirty(true);
      this.setStatusText(this.quizSyncStatus, '⚠️ Sem ligação ao servidor: guardado só neste navegador. Será enviado na próxima sincronização.');
    }
  }

  async syncDeleteQuiz(id) {
    if (!QuizSync.isEnabled()) return;
    const tombstones = this.getTombstones();
    if (!tombstones.includes(id)) this.setTombstones([...tombstones, id]);
    try {
      await QuizSync.deleteQuiz(id);
      this.setTombstones(this.getTombstones().filter(x => x !== id));
      this.setStatusText(this.quizSyncStatus, '✅ Apagado no servidor.');
    } catch (e) {
      this.setStatusText(this.quizSyncStatus, '⚠️ Apagado só neste navegador; será removido do servidor na próxima sincronização.');
    }
  }

  // Junta os quizzes do servidor com os locais. O servidor prevalece,
  // exceto nos quizzes com alterações locais pendentes (dirty).
  async syncQuizzesWithServer() {
    if (!QuizSync.isEnabled() || this.quizSyncing) return;
    if (!QuizSync.getKey(true)) {
      this.setStatusText(this.quizSyncStatus, 'Sem chave: os quizzes ficam só neste navegador.');
      return;
    }
    this.quizSyncing = true;
    this.setStatusText(this.quizSyncStatus, 'A sincronizar com o servidor…');
    try {
      for (const id of this.getTombstones()) {
        try {
          await QuizSync.deleteQuiz(id);
          this.setTombstones(this.getTombstones().filter(x => x !== id));
        } catch (e) {}
      }
      const remote = await QuizSync.listQuizzes(QuizSync.getKey(false));
      if (!Array.isArray(remote)) throw new Error('resposta inválida');
      const tombstones = this.getTombstones();
      const local = this.loadSavedQuizzes();
      const merged = new Map(remote
        .filter(r => !tombstones.includes(r.id))
        .map(r => [r.id, { id: r.id, name: r.name, questionIds: r.questionIds, updatedAt: r.updatedAt, dirty: false }]));
      local.filter(q => q.dirty).forEach(q => merged.set(q.id, q));
      this.persistSavedQuizzes([...merged.values()]);
      for (const q of local.filter(q => q.dirty)) await this.syncQuizSave(q.id);
      this.updateHostConfigCustomBadge();
      this.setStatusText(this.quizSyncStatus, `✅ Sincronizado com o servidor (${merged.size} quizzes).`);
    } catch (e) {
      this.setStatusText(this.quizSyncStatus, '⚠️ Não foi possível sincronizar. Os quizzes continuam guardados neste navegador.');
    } finally {
      this.quizSyncing = false;
    }
  }

  // Envia o resumo da sessão (ranking por equipa) para a folha "resultados"
  async saveSessionToServer(session) {
    if (!QuizSync.isEnabled() || !QuizSync.getKey(false)) {
      this.setStatusText(this.podiumSaveStatus, 'Resumo não enviado ao servidor (sem chave). Use o CSV.');
      return;
    }
    try {
      await QuizSync.saveResult({
        startedAt: session.startedAt,
        roomPin: session.roomPin,
        quizName: session.quizName,
        questionsTotal: session.questionsTotal,
        teams: session.teams
      });
      this.setStatusText(this.podiumSaveStatus, '✅ Resumo guardado no servidor (folha "resultados").');
    } catch (e) {
      this.setStatusText(this.podiumSaveStatus, '⚠️ Não foi possível guardar no servidor. Exporte o CSV.');
    }
  }

  // ----- Ações sobre a biblioteca de quizzes -----

  duplicateActiveQuiz() {
    const active = this.getActiveSavedQuiz();
    if (!active) return;
    const copy = {
      id: 'quiz_' + Date.now(),
      name: (active.name + ' (cópia)').slice(0, 80),
      questionIds: [...active.questionIds],
      createdAt: new Date().toISOString()
    };
    this.persistSavedQuizzes([...this.loadSavedQuizzes(), copy]);
    this.applySavedQuiz(copy.id);
    this.syncQuizSave(copy.id);
    this.updateHostConfigCustomBadge();
  }

  // Preenche a pré-visualização com o enunciado de cada pergunta
  renderQuizPreview() {
    if (!this.quizPreview) return;
    this.loadAllQuestionsPool();
    const active = this.getActiveSavedQuiz();
    const ids = active ? active.questionIds : [...this.selectedCustomQuestionIds];
    const byId = new Map(this.allQuestionsPool.map(q => [q.id, q]));
    if (ids.length === 0) {
      this.quizPreview.innerHTML = '<p style="margin:0;">Ainda não há perguntas selecionadas.</p>';
      return;
    }
    this.quizPreview.innerHTML = ids.map((id, i) => {
      const q = byId.get(id);
      const text = q ? (q.question || '') : '(pergunta não encontrada)';
      const short = text.length > 110 ? text.slice(0, 110) + '…' : text;
      return `<div style="padding: 0.3rem 0; border-bottom: 1px solid rgba(128,128,128,0.2);">
        <strong>${i + 1}.</strong> <span style="color: var(--text-secondary);">#${id}</span> ${arenaEscapeHtml(short)}
      </div>`;
    }).join('');
  }

  downloadFile(content, type, fileName) {
    const blob = new Blob([content], { type: type });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  exportQuizzesJson() {
    const quizzes = this.loadSavedQuizzes().map(({ id, name, questionIds, createdAt, updatedAt }) =>
      ({ id, name, questionIds, createdAt, updatedAt }));
    if (quizzes.length === 0) {
      alert('Ainda não há quizzes guardados para exportar.');
      return;
    }
    const data = { app: 'biofisica-quizzes', version: 1, exportedAt: new Date().toISOString(), quizzes: quizzes };
    this.downloadFile(JSON.stringify(data, null, 2), 'application/json',
      `quizzes-biofisica-${new Date().toISOString().slice(0, 10)}.json`);
  }

  async importQuizzesFile(file) {
    let data;
    try {
      data = JSON.parse(await file.text());
    } catch (e) {
      alert('O ficheiro não é um JSON válido.');
      return;
    }
    const list = Array.isArray(data) ? data : (data && Array.isArray(data.quizzes) ? data.quizzes : null);
    if (!list) {
      alert('O ficheiro não contém quizzes.');
      return;
    }
    this.loadAllQuestionsPool();
    const known = new Set(this.allQuestionsPool.map(q => q.id));
    const imported = [];
    let rejected = 0;
    list.forEach((q, i) => {
      const name = q && typeof q.name === 'string' ? q.name.trim() : '';
      const ids = q && Array.isArray(q.questionIds) ? q.questionIds : [];
      const valid = name && ids.length === ARENA_QUIZ_SIZE && new Set(ids).size === ARENA_QUIZ_SIZE
        && ids.every(id => known.has(id));
      if (!valid) {
        rejected++;
        return;
      }
      imported.push({
        id: 'quiz_' + Date.now() + '_' + i,
        name: name.slice(0, 80),
        questionIds: [...ids],
        createdAt: new Date().toISOString(),
        dirty: true
      });
    });
    this.persistSavedQuizzes([...this.loadSavedQuizzes(), ...imported]);
    for (const q of imported) await this.syncQuizSave(q.id);
    this.updateHostConfigCustomBadge();
    alert(`${imported.length} quiz(zes) importado(s).` +
      (rejected ? ` ${rejected} ignorado(s): não têm ${ARENA_QUIZ_SIZE} perguntas válidas.` : ''));
  }

  // CSV com dois blocos: classificação por equipa e registo por pergunta
  exportSessionCsv() {
    const s = this.lastSessionResult;
    if (!s) return;
    const esc = v => {
      const t = v === null || v === undefined ? '' : String(v);
      return /[;"\n]/.test(t) ? '"' + t.replace(/"/g, '""') + '"' : t;
    };
    const letters = ['A', 'B', 'C', 'D'];
    const lines = [
      ['Início', s.startedAt, 'Sala', s.roomPin, 'Quiz', s.quizName].map(esc).join(';'),
      '',
      ['Classificação', 'Equipa', 'Pontos', 'Respostas certas', 'Perguntas'].map(esc).join(';'),
      ...s.teams.map(t => [t.rank, t.teamName, t.score, t.correct, s.questionsTotal].map(esc).join(';')),
      '',
      ['Pergunta nº', 'ID da pergunta', 'Equipa', 'Resposta', 'Opção correta', 'Correta', 'Pontos', 'Tempo restante (s)'].map(esc).join(';'),
      ...s.log.map(r => [
        r.questionIndex,
        r.questionId,
        r.teamName,
        r.option === null ? 'Sem resposta' : letters[r.option],
        letters[r.correctIndex],
        r.correct ? 'Sim' : 'Não',
        r.points,
        r.timeRemaining === null ? '' : r.timeRemaining
      ].map(esc).join(';'))
    ];
    const date = new Date().toISOString().slice(0, 16).replace(/[:T]/g, '-');
    this.downloadFile('﻿' + lines.join('\r\n'), 'text/csv;charset=utf-8', `resultados-arena-${date}.csv`);
  }

  // Começa um quiz novo: esvazia o rascunho e abre a seleção (pede PIN)
  startNewSavedQuiz() {
    if (this.selectedCustomQuestionIds.size > 0 && !this.getActiveSavedQuiz() &&
        !confirm('Descartar a seleção manual atual (não guardada) e começar um quiz novo?')) {
      return;
    }
    this.selectedCustomQuestionIds.clear();
    this.saveCustomQuestionIds();
    this.setActiveSavedQuizId('');
    this.openCustomQuestionsSection();
  }

  updateActiveSavedQuiz() {
    const active = this.getActiveSavedQuiz();
    if (!active || !this.isDraftQuizComplete()) return;
    const list = this.loadSavedQuizzes().map(q =>
      q.id === active.id ? { ...q, questionIds: [...this.selectedCustomQuestionIds], updatedAt: new Date().toISOString() } : q
    );
    this.persistSavedQuizzes(list);
    this.syncQuizSave(active.id);
    this.updateHostConfigCustomBadge();
    alert(`Quiz "${active.name}" atualizado.`);
  }

  deleteSavedQuiz(id) {
    const quiz = this.loadSavedQuizzes().find(q => q.id === id);
    if (!quiz) return;
    if (!confirm(`Apagar o quiz "${quiz.name}"? Esta ação não pode ser desfeita.`)) return;
    this.persistSavedQuizzes(this.loadSavedQuizzes().filter(q => q.id !== id));
    this.syncDeleteQuiz(id);
    if (this.activeSavedQuizId === id) {
      this.setActiveSavedQuizId('');
      this.selectedCustomQuestionIds.clear();
      this.saveCustomQuestionIds();
    }
    this.updateHostConfigCustomBadge();
  }

  renderSavedQuizSelect() {
    if (!this.arenaSavedQuizSelect) return;
    const list = this.loadSavedQuizzes();
    const active = this.getActiveSavedQuiz();
    let html = '<option value="">🎲 Sorteio aleatório (sem quiz)</option>';
    if (!active && this.selectedCustomQuestionIds.size > 0) {
      html += `<option value="__draft__" disabled selected>✏️ Seleção manual atual (não guardada)</option>`;
    }
    list.forEach(q => {
      html += `<option value="${arenaEscapeHtml(q.id)}">${arenaEscapeHtml(q.name)} (${q.questionIds.length} perguntas)</option>`;
    });
    this.arenaSavedQuizSelect.innerHTML = html;
    this.arenaSavedQuizSelect.value = active ? active.id : (this.selectedCustomQuestionIds.size > 0 ? '__draft__' : '');
    if (this.btnDeleteSavedQuiz) this.btnDeleteSavedQuiz.classList.toggle('hidden', !active);
    if (this.btnEditSavedQuiz) this.btnEditSavedQuiz.classList.toggle('hidden', !active);
    if (this.btnDuplicateSavedQuiz) this.btnDuplicateSavedQuiz.classList.toggle('hidden', !active);
  }

  loadAllQuestionsPool() {
    if (this.allQuestionsPool && this.allQuestionsPool.length > 0) return;
    let all = [];
    if (typeof ALL_TOPIC_COLLECTIONS !== 'undefined') {
      for (let t = 1; t <= 8; t++) {
        if (ALL_TOPIC_COLLECTIONS[t] && Array.isArray(ALL_TOPIC_COLLECTIONS[t])) {
          all.push(...ALL_TOPIC_COLLECTIONS[t]);
        }
      }
    } else if (typeof TOPIC_1_QUESTIONS !== 'undefined') {
      all = [...TOPIC_1_QUESTIONS];
    }
    this.allQuestionsPool = all;
  }

  getFilteredQuestions() {
    this.loadAllQuestionsPool();
    const topicFilter = this.customFilterTopic;
    const query = (this.customSearchQuery || '').trim().toLowerCase();

    return this.allQuestionsPool.filter(q => {
      // 1. Filtro por Tópico
      if (topicFilter === 'all-unlocked') {
        const unlocked = typeof UNLOCKED_TOPIC_IDS !== 'undefined' ? UNLOCKED_TOPIC_IDS : [1];
        if (!unlocked.includes(q.topicId)) return false;
      } else if (topicFilter !== 'all') {
        if (q.topicId != topicFilter) return false;
      }

      // 2. Filtro por Aba
      if (this.customActiveTab === 'selected') {
        if (!this.selectedCustomQuestionIds.has(q.id)) return false;
      }

      // 3. Pesquisa por Texto ou ID
      if (query) {
        const idMatch = String(q.id).toLowerCase().includes(query);
        const textMatch = (q.question || '').toLowerCase().includes(query);
        const nursingMatch = (q.nursingApplication || '').toLowerCase().includes(query);
        const optionsMatch = Array.isArray(q.options) && q.options.some(opt => (opt || '').toLowerCase().includes(query));
        if (!idMatch && !textMatch && !nursingMatch && !optionsMatch) {
          return false;
        }
      }

      return true;
    });
  }

  getSelectedCustomQuestionsArray() {
    this.loadAllQuestionsPool();
    if (this.selectedCustomQuestionIds.size === 0) return [];
    const qMap = new Map();
    this.allQuestionsPool.forEach(q => qMap.set(q.id, q));
    const res = [];
    for (const id of this.selectedCustomQuestionIds) {
      if (qMap.has(id)) {
        res.push(qMap.get(id));
      }
    }
    return res;
  }

  openCustomQuestionsSection() {
    // SEMPRE exigir o PIN Mestre numérico (forcePrompt = true)
    this.requestTeacherAuth(() => {
      this.loadAllQuestionsPool();
      this.customRenderLimit = 50;
      this.renderCustomQuestionsList();
      this.showScreen('hostCustomQuestions');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, true);
  }

  updateCustomSelectionSummary() {
    const count = this.selectedCustomQuestionIds.size;
    if (this.arenaCustomPillCount) this.arenaCustomPillCount.textContent = count;
    if (this.arenaCustomPillTime) {
      const estimatedMinutes = Math.round((count * 45) / 60);
      this.arenaCustomPillTime.textContent = `~${estimatedMinutes} min estimados`;
    }
    if (this.arenaCustomFooterBadge) {
      this.arenaCustomFooterBadge.textContent = `${count} ${count === 1 ? 'pergunta selecionada' : 'perguntas selecionadas'}`;
    }
    if (this.countTabSelected) {
      this.countTabSelected.textContent = count;
    }
  }

  updateHostConfigCustomBadge() {
    const count = this.selectedCustomQuestionIds.size;
    if (count === 0 && this.activeSavedQuizId) this.setActiveSavedQuizId('');
    const active = this.getActiveSavedQuiz();
    // Com perguntas escolhidas, a quantidade é a do quiz (o sorteio não é usado)
    const countBox = document.getElementById('arena-config-count-container');
    if (countBox) countBox.classList.toggle('hidden', count > 0);
    if (this.arenaCustomFooterBadge) {
      this.arenaCustomFooterBadge.textContent = `${count}/${ARENA_QUIZ_SIZE} ${count === 1 ? 'pergunta selecionada' : 'perguntas selecionadas'}`;
    }
    if (this.btnCustomQuizUpdate) {
      this.btnCustomQuizUpdate.classList.toggle('hidden', !active);
      if (active) this.btnCustomQuizUpdate.textContent = `🔄 Atualizar "${active.name}"`;
    }
    this.renderSavedQuizSelect();
    if (this.quizPreview && !this.quizPreview.classList.contains('hidden')) this.renderQuizPreview();
    if (!this.arenaCustomActiveBadge) return;
    if (count > 0) {
      this.arenaCustomActiveBadge.innerHTML = `
        <span class="arena-custom-badge-pill is-active">
          <span>✅</span> <strong>${count} ${count === 1 ? 'pergunta manual ativa' : 'perguntas manuais ativas'}</strong> (substitui o sorteio aleatório)
        </span>
      `;
      if (this.btnClearCustomQuestions) this.btnClearCustomQuestions.classList.remove('hidden');
      if (this.arenaCustomConfigDesc) {
        this.arenaCustomConfigDesc.textContent = `Estão ${count} perguntas personalizadas prontas a projetar. Podes alterá-las ou limpar para sorteio aleatório.`;
      }
    } else {
      this.arenaCustomActiveBadge.innerHTML = `
        <span class="arena-custom-badge-pill is-default">
          <span>🎲</span> Modo aleatório ativo (o sistema sorteará perguntas do tópico escolhido)
        </span>
      `;
      if (this.btnClearCustomQuestions) this.btnClearCustomQuestions.classList.add('hidden');
      if (this.arenaCustomConfigDesc) {
        this.arenaCustomConfigDesc.textContent = `Escolhe a dedo as perguntas exatas que vão aparecer no projetor da aula.`;
      }
    }
  }

  renderCustomQuestionsList() {
    if (!this.arenaCustomQuestionsList) return;

    const filtered = this.getFilteredQuestions();
    const totalMatching = filtered.length;

    // Atualizar contadores das abas
    if (this.countTabAll) {
      const unlocked = typeof UNLOCKED_TOPIC_IDS !== 'undefined' ? UNLOCKED_TOPIC_IDS : [1];
      const poolSize = this.customFilterTopic === 'all-unlocked' 
        ? this.allQuestionsPool.filter(q => unlocked.includes(q.topicId)).length 
        : (this.customFilterTopic === 'all' ? this.allQuestionsPool.length : this.allQuestionsPool.filter(q => q.topicId == this.customFilterTopic).length);
      this.countTabAll.textContent = poolSize;
    }
    if (this.countTabSelected) {
      this.countTabSelected.textContent = this.selectedCustomQuestionIds.size;
    }

    this.updateCustomSelectionSummary();

    if (totalMatching === 0) {
      this.arenaCustomQuestionsList.innerHTML = `
        <div style="text-align: center; padding: 3rem 1rem; color: var(--text-secondary); background: var(--bg-surface); border-radius: var(--radius-md); border: 1px dashed var(--border-subtle);">
          <span style="font-size: 2.2rem; display: block; margin-bottom: 0.5rem;">🔍</span>
          <h4 style="margin: 0; color: var(--text-primary); font-size: 1.1rem;">Nenhuma pergunta encontrada</h4>
          <p style="margin: 0.35rem 0 0; font-size: 0.9rem;">
            ${this.customActiveTab === 'selected' 
              ? 'Ainda não selecionaste nenhuma pergunta nesta vista. Clica na aba "Todas as Perguntas" para pesquisar e marcar questões.' 
              : 'Tenta ajustar o termo de pesquisa ou o filtro de tópicos.'}
          </p>
        </div>
      `;
      if (this.arenaCustomPagination) this.arenaCustomPagination.style.display = 'none';
      return;
    }

    const itemsToDisplay = filtered.slice(0, this.customRenderLimit);
    const letters = ['A', 'B', 'C', 'D'];

    let html = '';
    itemsToDisplay.forEach(q => {
      const isSelected = this.selectedCustomQuestionIds.has(q.id);
      let topicShort = `Tópico ${q.topicId}`;
      if (typeof TOPICS_DATA !== 'undefined') {
        const t = TOPICS_DATA.find(item => item.id == q.topicId);
        if (t) topicShort = t.shortTitle || t.title;
      }

      html += `
        <div class="arena-custom-q-card ${isSelected ? 'is-selected' : ''}" data-qid="${q.id}">
          <div class="arena-custom-q-header">
            <label class="arena-custom-checkbox-label" for="q-check-${q.id}">
              <input type="checkbox" id="q-check-${q.id}" class="arena-custom-q-check" data-qid="${q.id}" ${isSelected ? 'checked' : ''}>
              <span class="arena-custom-q-badge">${questionLabel(q.id)}</span>
              <span class="arena-custom-q-topic-tag">${arenaEscapeHtml(topicShort)}</span>
            </label>
            <button type="button" class="arena-custom-q-toggle-btn" data-qid="${q.id}">
              <span>👁️ Ver Opções & Justificação</span>
            </button>
          </div>
          <div class="arena-custom-q-body">
            <p class="arena-custom-q-text">${arenaRichText(q.question)}</p>
          </div>
          <div class="arena-custom-q-details hidden" id="details-q-${q.id}">
            <div class="arena-custom-options-preview">
              ${(q.options || []).map((opt, i) => `
                <div class="arena-custom-opt-preview-item ${i === q.correctIndex ? 'is-correct' : ''}">
                  <span class="arena-custom-opt-letter">${letters[i]}</span>
                  <span class="arena-custom-opt-text">${arenaRichText(opt)}</span>
                  ${i === q.correctIndex ? '<span class="arena-custom-correct-badge">✓ Correta</span>' : ''}
                </div>
              `).join('')}
            </div>
            <div class="arena-custom-exp-preview">
              <strong>🩺 Justificação Científica:</strong> ${arenaRichText(q.explanation || '')}
            </div>
            ${q.nursingApplication ? `
              <div class="arena-custom-nursing-preview">
                <strong>🏥 Aplicação aos Cuidados de Enfermagem:</strong> ${arenaRichText(q.nursingApplication)}
              </div>
            ` : ''}
          </div>
        </div>
      `;
    });

    this.arenaCustomQuestionsList.innerHTML = html;

    // Controlar botão Carregar Mais
    if (this.arenaCustomPagination) {
      if (filtered.length > this.customRenderLimit) {
        this.arenaCustomPagination.style.display = 'block';
        if (this.btnCustomLoadMore) {
          const remaining = filtered.length - this.customRenderLimit;
          this.btnCustomLoadMore.textContent = `Mostrar Mais Perguntas (${remaining} restantes)...`;
        }
      } else {
        this.arenaCustomPagination.style.display = 'none';
      }
    }
  }
}
