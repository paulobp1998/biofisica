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

// Hash SHA-256 do PIN Mestre de Docente (456123)
const ARENA_HOST_PIN_HASH = 'c1cf024576e9c756b252bd5035efc64c72c17affe236909ded190d266a5bfdf1';

class ArenaUI {
  constructor() {
    this.net = new ArenaNetwork();
    this.engine = new ArenaEngine(this.net);
    this.currentScreen = 'arena-screen-select';
    this.isMuted = false;
    this.selectedAvatar = '🩺';
    this.pendingTeacherAction = null;
    this.myCurrentVote = null;
    this.initDOMElements();
    this.initEventListeners();
    this.initEngineListeners();
  }

  initDOMElements() {
    // Ecrãs da Arena
    this.screens = {
      select: document.getElementById('arena-screen-select'),
      hostConfig: document.getElementById('arena-screen-host-config'),
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

    // Ecrã 2: Configuração Docente
    this.arenaConfigTopic = document.getElementById('arena-config-topic');
    this.arenaConfigCountGroup = document.getElementById('arena-config-count-group');
    this.arenaConfigTimeGroup = document.getElementById('arena-config-time-group');
    this.btnBackFromConfig = document.getElementById('btn-back-from-config');
    this.btnCreateArenaRoom = document.getElementById('btn-create-arena-room');

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

  requestTeacherAuth(onSuccessAction) {
    if (this.isTeacherAuthenticated()) {
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
    if (hashed === ARENA_HOST_PIN_HASH) {
      try {
        sessionStorage.setItem('arena_host_authenticated', 'true');
      } catch (e) {}

      const action = this.pendingTeacherAction;
      this.closeTeacherAuthModal();
      if (typeof action === 'function') {
        action();
      }
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
          this.showScreen('hostConfig');
        });
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
            this.showScreen('hostConfig');
          });
          return;
        }

        const topicId = parseInt(this.arenaConfigTopic ? this.arenaConfigTopic.value : '1', 10);
        const countBtn = this.arenaConfigCountGroup ? this.arenaConfigCountGroup.querySelector('.active') : null;
        const count = countBtn ? parseInt(countBtn.getAttribute('data-value'), 10) : 20;
        const timeBtn = this.arenaConfigTimeGroup ? this.arenaConfigTimeGroup.querySelector('.active') : null;
        const time = timeBtn ? parseInt(timeBtn.getAttribute('data-value'), 10) : 45;

        this.engine.startHostSession({
          topicId: topicId,
          count: count,
          timePerQuestion: time,
          isSimulated: false
        });
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

      // Gerar QR Code via API pública do QR Server
      if (this.arenaQrImage) {
        const currentUrl = window.location.origin + window.location.pathname;
        const joinUrl = `${currentUrl}#arena?pin=${encodeURIComponent(data.roomPin)}`;
        this.arenaQrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(joinUrl)}`;
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
      if (this.arenaLiveQIndex) this.arenaLiveQIndex.textContent = `Pergunta ${data.questionIndex} de ${data.totalQuestions}`;
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
          if (idx !== data.question.correctIndex && data.question.distractorAnalysis && data.question.distractorAnalysis[idx]) {
            daHtml += `<li><strong>Opção ${letters[idx]}:</strong> ${data.question.distractorAnalysis[idx]}</li>`;
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
      if (this.clientVotingQBadge) this.clientVotingQBadge.textContent = `P${data.questionIndex}/${data.totalQuestions}`;
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
            labelSpan.textContent = data.options && data.options[idx] ? data.options[idx] : `Opção ${letters[idx]}`;
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
        this.clientRevealExpText.textContent = data.explanation || '';
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
          <span style="font-size: 1.4rem;">${t.avatar || '🩺'}</span>
          <span style="font-weight: 700; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${t.teamName}</span>
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
        <div class="arena-rank-avatar">${t.avatar || '🩺'}</div>
        <div class="arena-rank-name">${t.teamName}</div>
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
          <div class="podium-avatar">🥈 ${p2.avatar}</div>
          <div class="podium-name">${p2.teamName}</div>
          <div class="podium-score">${p2.score.toLocaleString()} pts</div>
          <div class="podium-block block-silver">2.º Lugar</div>
        ` : ''}
      </div>

      <div class="arena-pedestal-slot slot-first">
        ${p1 ? `
          <div class="podium-crown">👑</div>
          <div class="podium-avatar">🥇 ${p1.avatar}</div>
          <div class="podium-name">${p1.teamName}</div>
          <div class="podium-score">${p1.score.toLocaleString()} pts</div>
          <div class="podium-block block-gold">1.º VENCEDOR</div>
        ` : ''}
      </div>

      <div class="arena-pedestal-slot slot-third">
        ${p3 ? `
          <div class="podium-avatar">🥉 ${p3.avatar}</div>
          <div class="podium-name">${p3.teamName}</div>
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
          <span style="font-size: 0.85rem; color: var(--text-muted);">Questão #${q.questionId}</span>
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
}
