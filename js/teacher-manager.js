/**
 * Painel do Docente: Gestão e Auditoria do Banco de Questões de Biofísica Médica
 * Permite ao docente rever as perguntas do repositório (Tópicos 1 e 2 - 400 questões)
 * e selecionar questões para eliminação, com proteção obrigatória por PIN Mestre (456123).
 */

const TEACHER_MASTER_PIN_HASH = 'c1cf024576e9c756b252bd5035efc64c72c17affe236909ded190d266a5bfdf1';

class TeacherManager {
  constructor() {
    this.isAuthenticated = false;
    this.currentTopic = 'all';
    this.currentTab = 'all'; // 'all', 'active', 'excluded', 'selected'
    this.searchQuery = '';
    this.sortOrder = 'id-asc'; // 'id-asc', 'id-desc'
    this.renderLimit = 50;
    this.allQuestions = [];
    this.selectedIds = new Set();
    this.excludedIds = new Set();
    this.isExpandedAll = false;

    this.loadExcludedIds();
  }

  init() {
    this.bindDOM();
    this.bindEvents();
  }

  // Carregar IDs excluídos do localStorage
  loadExcludedIds() {
    try {
      const saved = localStorage.getItem('biofisica_excluded_question_ids');
      if (saved) {
        const arr = JSON.parse(saved);
        if (Array.isArray(arr)) {
          this.excludedIds = new Set(arr.map(Number));
        }
      }
    } catch (e) {
      this.excludedIds = new Set();
    }
  }

  saveExcludedIds() {
    try {
      localStorage.setItem('biofisica_excluded_question_ids', JSON.stringify([...this.excludedIds]));
      if (typeof refreshQuestionsDataExclusions === 'function') {
        refreshQuestionsDataExclusions();
      }
    } catch (e) {}
  }

  // Carregar as perguntas de todos os tópicos disponíveis
  loadAllQuestions() {
    if (this.allQuestions.length > 0) return;
    const pool = [];
    if (typeof ALL_TOPIC_COLLECTIONS !== 'undefined') {
      for (let t = 1; t <= 8; t++) {
        if (ALL_TOPIC_COLLECTIONS[t] && Array.isArray(ALL_TOPIC_COLLECTIONS[t])) {
          pool.push(...ALL_TOPIC_COLLECTIONS[t]);
        }
      }
    } else if (typeof TOPIC_1_QUESTIONS !== 'undefined') {
      pool.push(...TOPIC_1_QUESTIONS);
    }
    this.allQuestions = pool;
  }

  // Verificação de autenticação de sessão
  isAuth() {
    try {
      return sessionStorage.getItem('arena_host_authenticated') === 'true';
    } catch (e) {
      return false;
    }
  }

  setAuth() {
    try {
      sessionStorage.setItem('arena_host_authenticated', 'true');
    } catch (e) {}
    this.isAuthenticated = true;
  }

  clearAuth() {
    try {
      sessionStorage.removeItem('arena_host_authenticated');
    } catch (e) {}
    this.isAuthenticated = false;
  }

  // Pedir PIN e abrir painel
  requestAuthAndOpen() {
    if (this.isAuth()) {
      this.openView();
      return;
    }

    if (window.arenaUI && typeof window.arenaUI.requestTeacherAuth === 'function') {
      window.arenaUI.requestTeacherAuth(() => {
        this.setAuth();
        this.openView();
      });
      return;
    }

    const modal = document.getElementById('modal-teacher-auth');
    const input = document.getElementById('input-teacher-pin');
    const err = document.getElementById('teacher-pin-error');

    if (!modal) {
      const pin = prompt("Área Reservada ao Docente. Introduza o PIN:");
      if (pin === '456123') {
        this.setAuth();
        this.openView();
      } else if (pin !== null) {
        alert("PIN incorreto. Acesso reservado ao docente.");
      }
      return;
    }

    if (input) input.value = '';
    if (err) {
      err.classList.add('hidden');
      err.style.display = 'none';
    }
    modal.classList.remove('hidden');

    window.__teacherPendingAction = () => {
      this.setAuth();
      this.openView();
    };

    setTimeout(() => {
      if (input) input.focus();
    }, 100);
  }

  openView() {
    this.loadAllQuestions();
    this.loadExcludedIds();

    const teacherView = document.getElementById('view-teacher');
    if (typeof showView === 'function') {
      showView(teacherView);
    } else {
      document.querySelectorAll('main > section').forEach(s => s.classList.add('hidden'));
      if (teacherView) {
        teacherView.classList.remove('hidden');
        teacherView.classList.add('active-view');
      }
    }

    this.renderLimit = 50;
    this.render();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  bindDOM() {
    // Elementos principais
    this.topicSelect = document.getElementById('teacher-select-topic');
    this.searchInput = document.getElementById('teacher-search-input');
    this.clearSearchBtn = document.getElementById('btn-teacher-clear-search');
    this.sortSelect = document.getElementById('teacher-sort-select');
    this.questionsList = document.getElementById('teacher-questions-list');
    this.loadMoreBox = document.getElementById('teacher-load-more-box');
    this.loadMoreBtn = document.getElementById('btn-teacher-load-more');
    this.resultsCount = document.getElementById('teacher-results-count');

    // KPIs
    this.statTotal = document.getElementById('teacher-stat-total');
    this.statTopicCount = document.getElementById('teacher-stat-topic-count');
    this.statTopicLabel = document.getElementById('teacher-stat-topic-label');
    this.statActive = document.getElementById('teacher-stat-active');
    this.statExcluded = document.getElementById('teacher-stat-excluded');
    this.statSelected = document.getElementById('teacher-stat-selected');

    // Abas de estado
    this.tabs = {
      all: document.getElementById('tab-teacher-all'),
      active: document.getElementById('tab-teacher-active'),
      excluded: document.getElementById('tab-teacher-excluded'),
      selected: document.getElementById('tab-teacher-selected')
    };
    this.tabBadges = {
      all: document.getElementById('badge-tab-teacher-all'),
      active: document.getElementById('badge-tab-teacher-active'),
      excluded: document.getElementById('badge-tab-teacher-excluded'),
      selected: document.getElementById('badge-tab-teacher-selected')
    };

    // Ações em massa
    this.selectAllCheckbox = document.getElementById('teacher-checkbox-select-all');
    this.selectAllText = document.getElementById('teacher-select-all-text');
    this.selectionIndicator = document.getElementById('teacher-selection-indicator');
    this.btnEliminateSelected = document.getElementById('btn-teacher-eliminate-selected');
    this.btnRestoreSelected = document.getElementById('btn-teacher-restore-selected');
    this.btnCopyRepoIds = document.getElementById('btn-teacher-copy-repo-ids');
    this.btnDownloadClean = document.getElementById('btn-teacher-download-clean');
    this.btnExportReport = document.getElementById('btn-teacher-export-report');
    this.btnResetExclusions = document.getElementById('btn-teacher-reset-exclusions');

    // Expansão
    this.btnExpandAll = document.getElementById('btn-teacher-expand-all');
    this.btnCollapseAll = document.getElementById('btn-teacher-collapse-all');

    // Botões de topo
    this.btnBackHome = document.getElementById('btn-teacher-back-home');
    this.btnLockSession = document.getElementById('btn-teacher-lock-session');

    // Modal de IDs para repositório
    this.modalRepoIds = document.getElementById('modal-repo-ids');
    this.textareaRepoIds = document.getElementById('textarea-repo-ids');
    this.btnCloseRepoIds = document.getElementById('btn-close-repo-ids-modal');
    this.btnCancelRepoIds = document.getElementById('btn-cancel-repo-ids-modal');
    this.btnCopyClipboardRepoIds = document.getElementById('btn-copy-clipboard-repo-ids');
  }

  bindEvents() {
    // Navegação e bloqueio
    if (this.btnBackHome) {
      this.btnBackHome.addEventListener('click', () => {
        const homeView = document.getElementById('view-home');
        if (typeof showView === 'function') showView(homeView);
      });
    }

    if (this.btnLockSession) {
      this.btnLockSession.addEventListener('click', () => {
        this.clearAuth();
        this.toast('🔒 Sessão de docente bloqueada com sucesso.', 'toast-info');
        const homeView = document.getElementById('view-home');
        if (typeof showView === 'function') showView(homeView);
      });
    }

    // Filtros
    if (this.topicSelect) {
      this.topicSelect.addEventListener('change', () => {
        this.currentTopic = this.topicSelect.value;
        this.renderLimit = 50;
        this.render();
      });
    }

    if (this.sortSelect) {
      this.sortSelect.addEventListener('change', () => {
        this.sortOrder = this.sortSelect.value;
        this.render();
      });
    }

    if (this.searchInput) {
      this.searchInput.addEventListener('input', () => {
        this.searchQuery = this.searchInput.value;
        if (this.clearSearchBtn) {
          this.clearSearchBtn.classList.toggle('hidden', !this.searchQuery);
        }
        this.renderLimit = 50;
        this.render();
      });
    }

    if (this.clearSearchBtn) {
      this.clearSearchBtn.addEventListener('click', () => {
        this.searchInput.value = '';
        this.searchQuery = '';
        this.clearSearchBtn.classList.add('hidden');
        this.renderLimit = 50;
        this.render();
      });
    }

    // Abas de estado
    Object.keys(this.tabs).forEach(tabKey => {
      const btn = this.tabs[tabKey];
      if (btn) {
        btn.addEventListener('click', () => {
          Object.values(this.tabs).forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          this.currentTab = tabKey;
          this.renderLimit = 50;
          this.render();
        });
      }
    });

    // Carregar mais
    if (this.loadMoreBtn) {
      this.loadMoreBtn.addEventListener('click', () => {
        this.renderLimit += 50;
        this.render(false);
      });
    }

    // Selecionar todas as visíveis
    if (this.selectAllCheckbox) {
      this.selectAllCheckbox.addEventListener('change', () => {
        const visible = this.getFilteredQuestions();
        if (this.selectAllCheckbox.checked) {
          visible.forEach(q => this.selectedIds.add(q.id));
        } else {
          visible.forEach(q => this.selectedIds.delete(q.id));
        }
        this.updateSelectionUI();
        this.renderQuestionCards();
      });
    }

    // Eliminar selecionadas
    if (this.btnEliminateSelected) {
      this.btnEliminateSelected.addEventListener('click', () => {
        const count = this.selectedIds.size;
        if (count === 0) return;
        if (confirm(`Tens a certeza de que queres marcar ${count} pergunta(s) selecionada(s) para eliminação do repositório?`)) {
          this.selectedIds.forEach(id => this.excludedIds.add(id));
          this.selectedIds.clear();
          this.saveExcludedIds();
          this.render();
          this.toast(`🗑️ ${count} pergunta(s) marcada(s) para eliminação com sucesso.`, 'toast-success');
        }
      });
    }

    // Restaurar selecionadas
    if (this.btnRestoreSelected) {
      this.btnRestoreSelected.addEventListener('click', () => {
        const count = this.selectedIds.size;
        if (count === 0) return;
        this.selectedIds.forEach(id => this.excludedIds.delete(id));
        this.selectedIds.clear();
        this.saveExcludedIds();
        this.render();
        this.toast(`↩️ ${count} pergunta(s) restaurada(s) para ativas com sucesso.`, 'toast-success');
      });
    }

    // Copiar IDs para Assistente AI
    if (this.btnCopyRepoIds) {
      this.btnCopyRepoIds.addEventListener('click', () => {
        this.openRepoIdsModal();
      });
    }

    // Modal de IDs
    if (this.btnCloseRepoIds) {
      this.btnCloseRepoIds.addEventListener('click', () => this.closeRepoIdsModal());
    }
    if (this.btnCancelRepoIds) {
      this.btnCancelRepoIds.addEventListener('click', () => this.closeRepoIdsModal());
    }
    if (this.btnCopyClipboardRepoIds) {
      this.btnCopyClipboardRepoIds.addEventListener('click', () => {
        if (this.textareaRepoIds) {
          navigator.clipboard.writeText(this.textareaRepoIds.value).then(() => {
            this.toast('📋 Texto copiado para a área de transferência! Cola agora na nossa conversa.', 'toast-success');
            this.closeRepoIdsModal();
          }).catch(() => {
            this.textareaRepoIds.select();
            document.execCommand('copy');
            this.toast('📋 Texto copiado!', 'toast-success');
            this.closeRepoIdsModal();
          });
        }
      });
    }

    // Descarregar ficheiro limpo
    if (this.btnDownloadClean) {
      this.btnDownloadClean.addEventListener('click', () => {
        this.downloadCleanTopicFile();
      });
    }

    // Exportar relatório
    if (this.btnExportReport) {
      this.btnExportReport.addEventListener('click', () => {
        this.exportAuditReport();
      });
    }

    // Repor todas as exclusões
    if (this.btnResetExclusions) {
      this.btnResetExclusions.addEventListener('click', () => {
        if (this.excludedIds.size === 0) {
          this.toast('Não existem perguntas marcadas para eliminação.', 'toast-info');
          return;
        }
        if (confirm(`Tens a certeza de que queres anular todas as ${this.excludedIds.size} marcações de eliminação e repor o banco integral?`)) {
          this.excludedIds.clear();
          this.selectedIds.clear();
          this.saveExcludedIds();
          this.render();
          this.toast('🔄 Todas as perguntas foram repostas no banco ativo.', 'toast-success');
        }
      });
    }

    // Expandir / Recolher Todas
    if (this.btnExpandAll) {
      this.btnExpandAll.addEventListener('click', () => {
        this.isExpandedAll = true;
        document.querySelectorAll('.teacher-q-details').forEach(el => el.classList.remove('hidden'));
        document.querySelectorAll('.teacher-btn-toggle-details').forEach(b => b.textContent = '▲ Ocultar Explicações');
      });
    }

    if (this.btnCollapseAll) {
      this.btnCollapseAll.addEventListener('click', () => {
        this.isExpandedAll = false;
        document.querySelectorAll('.teacher-q-details').forEach(el => el.classList.add('hidden'));
        document.querySelectorAll('.teacher-btn-toggle-details').forEach(b => b.textContent = '▼ Ver Explicações Detalhadas');
      });
    }
  }

  // Filtragem de perguntas
  getFilteredQuestions() {
    this.loadAllQuestions();
    const topic = this.currentTopic;
    const tab = this.currentTab;
    const query = (this.searchQuery || '').trim().toLowerCase();

    let list = this.allQuestions.filter(q => {
      // 1. Filtro por Tópico
      if (topic !== 'all' && q.topicId != topic) {
        return false;
      }

      // 2. Filtro por Aba de Estado
      const isExcluded = this.excludedIds.has(q.id);
      const isSelected = this.selectedIds.has(q.id);

      if (tab === 'active' && isExcluded) return false;
      if (tab === 'excluded' && !isExcluded) return false;
      if (tab === 'selected' && !isSelected) return false;

      // 3. Pesquisa por Texto ou ID
      if (query) {
        const idMatch = String(q.id).toLowerCase().includes(query);
        const qMatch = (q.question || '').toLowerCase().includes(query);
        const expMatch = (q.explanation || '').toLowerCase().includes(query);
        const nursingMatch = (q.nursingApplication || '').toLowerCase().includes(query);
        const optMatch = Array.isArray(q.options) && q.options.some(opt => (opt || '').toLowerCase().includes(query));
        const daMatch = Array.isArray(q.distractorAnalysis) && q.distractorAnalysis.some(da => (da || '').toLowerCase().includes(query));

        if (!idMatch && !qMatch && !expMatch && !nursingMatch && !optMatch && !daMatch) {
          return false;
        }
      }

      return true;
    });

    // Ordenação
    if (this.sortOrder === 'id-desc') {
      list.sort((a, b) => b.id - a.id);
    } else {
      list.sort((a, b) => a.id - b.id);
    }

    return list;
  }

  render(resetScroll = true) {
    this.loadAllQuestions();
    this.updateKPIs();
    this.updateSelectionUI();
    this.renderQuestionCards();
  }

  updateKPIs() {
    const total = this.allQuestions.length;
    const excludedCount = this.excludedIds.size;
    const activeCount = total - excludedCount;
    const selectedCount = this.selectedIds.size;

    let topicPool = this.allQuestions;
    if (this.currentTopic !== 'all') {
      topicPool = this.allQuestions.filter(q => q.topicId == this.currentTopic);
    }

    if (this.statTotal) this.statTotal.textContent = total.toLocaleString();
    if (this.statActive) this.statActive.textContent = activeCount.toLocaleString();
    if (this.statExcluded) this.statExcluded.textContent = excludedCount.toLocaleString();
    if (this.statSelected) this.statSelected.textContent = selectedCount.toLocaleString();

    if (this.statTopicCount) this.statTopicCount.textContent = topicPool.length.toLocaleString();
    if (this.statTopicLabel) {
      this.statTopicLabel.textContent = this.currentTopic === 'all' 
        ? 'Todos os Tópicos' 
        : `No Tópico ${this.currentTopic}`;
    }

    // Contadores das abas no contexto do tópico selecionado
    const allFilteredInTopic = this.allQuestions.filter(q => this.currentTopic === 'all' || q.topicId == this.currentTopic);
    const activeInTopic = allFilteredInTopic.filter(q => !this.excludedIds.has(q.id)).length;
    const excludedInTopic = allFilteredInTopic.filter(q => this.excludedIds.has(q.id)).length;

    if (this.tabBadges.all) this.tabBadges.all.textContent = allFilteredInTopic.length.toLocaleString();
    if (this.tabBadges.active) this.tabBadges.active.textContent = activeInTopic.toLocaleString();
    if (this.tabBadges.excluded) this.tabBadges.excluded.textContent = excludedInTopic.toLocaleString();
    if (this.tabBadges.selected) this.tabBadges.selected.textContent = selectedCount.toLocaleString();
  }

  updateSelectionUI() {
    const count = this.selectedIds.size;
    if (this.selectionIndicator) {
      this.selectionIndicator.textContent = `${count} ${count === 1 ? 'pergunta selecionada' : 'perguntas selecionadas'}`;
    }
    if (this.btnEliminateSelected) {
      this.btnEliminateSelected.disabled = count === 0;
    }
    if (this.btnRestoreSelected) {
      this.btnRestoreSelected.disabled = count === 0;
    }
  }

  renderQuestionCards() {
    if (!this.questionsList) return;
    const filtered = this.getFilteredQuestions();
    const visible = filtered.slice(0, this.renderLimit);

    if (this.resultsCount) {
      this.resultsCount.textContent = `A mostrar ${visible.length} de ${filtered.length} perguntas filtradas (Total no banco: ${this.allQuestions.length})`;
    }

    if (this.loadMoreBox) {
      this.loadMoreBox.classList.toggle('hidden', visible.length >= filtered.length);
    }

    if (filtered.length === 0) {
      this.questionsList.innerHTML = `
        <div class="teacher-empty-state">
          <div style="font-size: 3rem; margin-bottom: 0.5rem;">🔍</div>
          <h3>Nenhuma pergunta encontrada</h3>
          <p style="color: var(--text-secondary); max-width: 460px; margin: 0 auto 1rem;">
            Nenhuma questão corresponde aos filtros ou pesquisa atuais. Tenta alterar o tópico ou limpar a caixa de pesquisa.
          </p>
        </div>
      `;
      return;
    }

    const letters = ['A', 'B', 'C', 'D'];
    let html = '';

    visible.forEach(q => {
      const isExcluded = this.excludedIds.has(q.id);
      const isSelected = this.selectedIds.has(q.id);
      const isExpanded = this.isExpandedAll;

      html += `
        <div class="teacher-q-card ${isExcluded ? 'is-excluded' : ''} ${isSelected ? 'is-selected' : ''}" data-id="${q.id}">
          <div class="teacher-q-card-header">
            <div class="teacher-q-card-meta">
              <label class="teacher-q-checkbox-label" title="Selecionar para ação em massa">
                <input type="checkbox" class="teacher-q-checkbox" data-id="${q.id}" ${isSelected ? 'checked' : ''}>
                <span class="teacher-q-id">#${q.id}</span>
              </label>
              <span class="teacher-topic-badge">Tópico ${q.topicId}</span>
              ${isExcluded 
                ? '<span class="teacher-status-badge badge-danger">🗑️ Para Eliminar do Repositório</span>' 
                : '<span class="teacher-status-badge badge-success">✅ Ativa no Banco</span>'}
            </div>
            <div class="teacher-q-card-actions">
              ${isExcluded 
                ? `<button type="button" class="btn btn-sm btn-outline btn-restore-single" data-id="${q.id}">↩️ Restaurar</button>`
                : `<button type="button" class="btn btn-sm btn-danger-outline btn-eliminate-single" data-id="${q.id}">🗑️ Eliminar</button>`}
            </div>
          </div>

          <h3 class="teacher-q-statement">${this.escape(q.question)}</h3>

          <div class="teacher-options-grid">
            ${q.options.map((opt, idx) => {
              const isCorrect = idx === q.correctIndex;
              const ltr = letters[idx];
              return `
                <div class="teacher-opt-item ${isCorrect ? 'is-correct' : ''}">
                  <span class="teacher-opt-badge ${isCorrect ? 'correct-badge' : ''}">${ltr}</span>
                  <span class="teacher-opt-text">${this.escape(opt)}</span>
                  ${isCorrect ? '<span class="teacher-opt-tag-correct">✓ Resposta Correta</span>' : ''}
                </div>
              `;
            }).join('')}
          </div>

          <!-- Botão para Expandir/Recolher Detalhes -->
          <div style="margin-top: 0.75rem;">
            <button type="button" class="teacher-btn-toggle-details btn-link" data-id="${q.id}">
              ${isExpanded ? '▲ Ocultar Explicações' : '▼ Ver Explicações Detalhadas'}
            </button>
          </div>

          <!-- Secção Pedagógica Completa -->
          <div class="teacher-q-details ${isExpanded ? '' : 'hidden'}" id="details-q-${q.id}">
            <div class="teacher-exp-box">
              <strong style="color: var(--color-success); display: block; margin-bottom: 0.25rem;">
                ✓ Por que está certa a Opção (${letters[q.correctIndex]}):
              </strong>
              <p style="margin: 0; line-height: 1.45; font-size: 0.9rem;">${this.escape(q.explanation)}</p>
            </div>

            <div class="teacher-distractors-box">
              <strong style="color: var(--color-danger); display: block; margin-bottom: 0.35rem;">
                ✗ Análise Detalhada dos 3 Distratores Incorretos:
              </strong>
              <ul style="margin: 0 0 0 1.25rem; padding: 0; font-size: 0.88rem; color: var(--text-secondary); line-height: 1.45;">
                ${q.options.map((opt, idx) => {
                  if (idx === q.correctIndex) return '';
                  const daText = this.getDistractorText(q, idx);
                  return `<li style="margin-bottom: 0.35rem;"><strong>Opção (${letters[idx]}):</strong> ${this.escape(daText)}</li>`;
                }).join('')}
              </ul>
            </div>

            ${q.nursingApplication ? `
              <div class="teacher-nursing-box">
                <strong style="color: var(--color-brand); display: block; margin-bottom: 0.25rem;">
                  🏥 Aplicação Prática aos Cuidados de Enfermagem:
                </strong>
                <p style="margin: 0; line-height: 1.45; font-size: 0.88rem;">${this.escape(q.nursingApplication)}</p>
              </div>
            ` : ''}
          </div>
        </div>
      `;
    });

    this.questionsList.innerHTML = html;
    this.bindCardEvents();
  }

  bindCardEvents() {
    // Checkbox de cada pergunta
    this.questionsList.querySelectorAll('.teacher-q-checkbox').forEach(cb => {
      cb.addEventListener('change', (e) => {
        const id = parseInt(e.target.getAttribute('data-id'), 10);
        if (e.target.checked) {
          this.selectedIds.add(id);
        } else {
          this.selectedIds.delete(id);
        }
        const card = e.target.closest('.teacher-q-card');
        if (card) card.classList.toggle('is-selected', e.target.checked);
        this.updateSelectionUI();
        if (this.statSelected) this.statSelected.textContent = this.selectedIds.size;
      });
    });

    // Botão Eliminar individual
    this.questionsList.querySelectorAll('.btn-eliminate-single').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = parseInt(e.target.getAttribute('data-id'), 10);
        this.excludedIds.add(id);
        this.selectedIds.delete(id);
        this.saveExcludedIds();
        this.render();
        this.toast(`🗑️ Pergunta #${id} marcada para eliminação.`, 'toast-success');
      });
    });

    // Botão Restaurar individual
    this.questionsList.querySelectorAll('.btn-restore-single').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = parseInt(e.target.getAttribute('data-id'), 10);
        this.excludedIds.delete(id);
        this.selectedIds.delete(id);
        this.saveExcludedIds();
        this.render();
        this.toast(`↩️ Pergunta #${id} restaurada com sucesso.`, 'toast-success');
      });
    });

    // Toggle de detalhes
    this.questionsList.querySelectorAll('.teacher-btn-toggle-details').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.target.getAttribute('data-id');
        const details = document.getElementById(`details-q-${id}`);
        if (details) {
          const isHidden = details.classList.contains('hidden');
          details.classList.toggle('hidden', !isHidden);
          e.target.textContent = isHidden ? '▲ Ocultar Explicações' : '▼ Ver Explicações Detalhadas';
        }
      });
    });
  }

  getDistractorText(q, optIdx) {
    if (optIdx === q.correctIndex) return null;
    const da = q.distractorAnalysis;
    if (!da) return 'Opção cientificamente incorreta no contexto da questão apresentada.';

    if (Array.isArray(da) && da.length === 4) {
      if (da[optIdx]) return da[optIdx];
    } else if (Array.isArray(da) && da.length === 3) {
      const dIdx = optIdx > q.correctIndex ? optIdx - 1 : optIdx;
      if (da[dIdx]) return da[dIdx];
    }
    return 'Opção cientificamente incorreta no contexto da questão apresentada.';
  }

  // Modal para Copiar IDs para o repositório
  openRepoIdsModal() {
    if (!this.modalRepoIds || !this.textareaRepoIds) return;
    const excludedArray = [...this.excludedIds].sort((a, b) => a - b);

    if (excludedArray.length === 0) {
      this.toast('Não tens nenhuma pergunta marcada para eliminação no momento.', 'toast-info');
      return;
    }

    // Agrupar por Tópico
    const byTopic = {};
    for (let t = 1; t <= 8; t++) byTopic[t] = [];

    excludedArray.forEach(id => {
      const q = this.allQuestions.find(item => item.id === id);
      const tId = q ? q.topicId : Math.floor(id / 1000);
      if (byTopic[tId]) byTopic[tId].push(id);
      else byTopic[tId] = [id];
    });

    let text = `Por favor elimina do repositório as seguintes perguntas selecionadas no Painel do Docente:\n\n`;
    let totalCount = 0;
    for (let t = 1; t <= 8; t++) {
      if (byTopic[t] && byTopic[t].length > 0) {
        text += `- Tópico ${t} (${byTopic[t].length} perguntas): [${byTopic[t].join(', ')}]\n`;
        totalCount += byTopic[t].length;
      }
    }
    text += `\nTotal: ${totalCount} perguntas a remover permanentemente dos ficheiros topicX.js no repositório GitHub.`;

    this.textareaRepoIds.value = text;
    this.modalRepoIds.classList.remove('hidden');
  }

  closeRepoIdsModal() {
    if (this.modalRepoIds) {
      this.modalRepoIds.classList.add('hidden');
    }
  }

  // Descarregar ficheiro do tópico limpo (sem as perguntas eliminadas)
  downloadCleanTopicFile() {
    let tId = this.currentTopic === 'all' ? 1 : parseInt(this.currentTopic, 10);
    const questionsInTopic = this.allQuestions.filter(q => q.topicId === tId);
    const remaining = questionsInTopic.filter(q => !this.excludedIds.has(q.id));
    const excludedCount = questionsInTopic.length - remaining.length;

    const fileContent = `const TOPIC_${tId}_QUESTIONS = ${JSON.stringify(remaining, null, 2)};\n`;
    const blob = new Blob([fileContent], { type: 'application/javascript;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `topic${tId}.js`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    this.toast(`💾 Ficheiro topic${tId}.js descarregado com sucesso (${remaining.length} perguntas guardadas, ${excludedCount} eliminadas)!`, 'toast-success');
  }

  // Exportar relatório de auditoria
  exportAuditReport() {
    const excludedArray = [...this.excludedIds].sort((a, b) => a - b);
    let report = `RELATÓRIO DE AUDITORIA E ELIMINAÇÃO DE QUESTÕES - BIOFÍSICA MÉDICA\n`;
    report += `Data de Emissão: ${new Date().toLocaleString('pt-PT')}\n`;
    report += `Total de Questões no Banco: ${this.allQuestions.length}\n`;
    report += `Total de Questões Marcadas para Eliminação: ${excludedArray.length}\n`;
    report += `Total de Questões Ativas: ${this.allQuestions.length - excludedArray.length}\n`;
    report += `-------------------------------------------------------------\n\n`;

    if (excludedArray.length === 0) {
      report += `Nenhuma pergunta marcada para eliminação no momento.\n`;
    } else {
      excludedArray.forEach((id, idx) => {
        const q = this.allQuestions.find(item => item.id === id);
        if (q) {
          report += `[${idx + 1}] ID #${q.id} (Tópico ${q.topicId})\n`;
          report += `Enunciado: ${q.question}\n`;
          report += `Resposta Correta: (${['A', 'B', 'C', 'D'][q.correctIndex]}) ${q.options[q.correctIndex]}\n`;
          report += `Motivo da Eliminação: Decisão Docente de Auditoria\n\n`;
        }
      });
    }

    const blob = new Blob([report], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `relatorio-auditoria-questoes-${new Date().toISOString().slice(0, 10)}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    this.toast('📄 Relatório de auditoria exportado com sucesso.', 'toast-success');
  }

  escape(str) {
    if (typeof str !== 'string') return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  toast(msg, type = 'toast-info', duration = 4000) {
    if (typeof showToast === 'function') {
      showToast(msg, type, duration);
    } else {
      alert(msg.replace(/<[^>]*>?/gm, ''));
    }
  }
}

// Inicializar globalmente
window.teacherManager = new TeacherManager();
