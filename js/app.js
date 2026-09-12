/**
 * Aplicação Principal - BioFísica Enfermagem Hub
 * Controlador de interface, navegação de vistas e persistência local.
 */

document.addEventListener('DOMContentLoaded', () => {
  const quiz = new QuizEngine();

  // Elementos do DOM
  const homeView = document.getElementById('view-home');
  const quizView = document.getElementById('view-quiz');
  const resultsView = document.getElementById('view-results');
  const studyView = document.getElementById('view-study');
  const statsView = document.getElementById('view-stats');

  const topicsGrid = document.getElementById('topics-grid');
  const btnStartExam = document.getElementById('btn-start-exam');
  const btnViewStudy = document.getElementById('btn-view-study');
  const btnViewStats = document.getElementById('btn-view-stats');
  const navBrand = document.getElementById('nav-brand');
  const themeToggle = document.getElementById('theme-toggle');
  const audioToggle = document.getElementById('audio-toggle');

  // Elementos do Quiz
  const quizTopicBadge = document.getElementById('quiz-topic-badge');
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
  const btnExitQuiz = document.getElementById('btn-exit-quiz');

  // Elementos dos Resultados
  const resultGrade = document.getElementById('result-grade');
  const resultClassification = document.getElementById('result-classification');
  const resultStatsSummary = document.getElementById('result-stats-summary');
  const resultTopicBreakdown = document.getElementById('result-topic-breakdown');
  const resultReviewList = document.getElementById('result-review-list');
  const btnRetryQuiz = document.getElementById('btn-retry-quiz');
  const btnHomeFromResults = document.getElementById('btn-home-from-results');

  // Elementos dos Resumos e Estatísticas
  const studyTopicsAccordion = document.getElementById('study-topics-accordion');
  const btnHomeFromStudy = document.getElementById('btn-home-from-study');
  const statsContent = document.getElementById('stats-content');
  const btnHomeFromStats = document.getElementById('btn-home-from-stats');
  const btnClearStats = document.getElementById('btn-clear-stats');

  // Gestão de Tema Escuro / Claro
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

  // Gestão de Áudio
  audioToggle.addEventListener('click', () => {
    quiz.audioEnabled = !quiz.audioEnabled;
    audioToggle.textContent = quiz.audioEnabled ? '🔔 Som Ativo' : '🔕 Sem Som';
    audioToggle.classList.toggle('btn-muted', !quiz.audioEnabled);
  });

  // Gestão de Navegação entre Vistas
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

  // Renderiza os cards de tópicos no ecrã inicial
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
        startQuizSession('topic', tId);
      });
    });
  }

  // Início de Sessão de Teste
  function startQuizSession(mode, topicId = null) {
    let state;
    if (mode === 'topic') {
      state = quiz.startTopicQuiz(topicId);
    } else {
      state = quiz.startExamSimulation();
    }
    showView(quizView);
    renderQuestion(state);
  }

  // Renderiza a pergunta atual no quiz
  function renderQuestion(state) {
    if (state.isFinished) {
      showResults(state.summary);
      return;
    }

    // Progresso e cabeçalho
    const currNum = state.currentIndex + 1;
    const totalNum = state.totalQuestions;
    const progressPercent = Math.round((currNum / totalNum) * 100);

    quizTopicBadge.textContent = state.topic ? `${state.topic.icon} ${state.topic.shortTitle}` : 'Simulação Global de Exame';
    quizProgressText.textContent = `Pergunta ${currNum} de ${totalNum}`;
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

    // Resetar caixa de feedback
    feedbackCard.classList.add('hidden');
    feedbackCard.classList.remove('feedback-correct', 'feedback-incorrect');
    btnNext.classList.add('hidden');
  }

  // Trata a seleção de uma opção
  function handleOptionClick(selectedIndex) {
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

    // Apresenta a caixa de explicação detalhada
    feedbackCard.classList.remove('hidden');
    if (result.isCorrect) {
      feedbackCard.classList.add('feedback-correct');
      feedbackTitle.innerHTML = '✅ <strong>Resposta Correta!</strong> Excelente raciocínio científico.';
    } else {
      feedbackCard.classList.add('feedback-incorrect');
      feedbackTitle.innerHTML = '❌ <strong>Resposta Incorreta.</strong> Consulte a justificação abaixo para consolidar:';
    }

    // Explicação científica da opção correta
    feedbackExplanation.innerHTML = `
      <p><strong>Por que está certa a opção correta:</strong> ${result.explanation}</p>
    `;

    // Análise dos distratores
    let distractorsHtml = '<strong>Análise detalhada das restantes opções:</strong><ul>';
    const letters = ['A', 'B', 'C', 'D'];
    result.options.forEach((opt, idx) => {
      if (idx !== result.correctIndex && result.distractorAnalysis[idx]) {
        distractorsHtml += `<li><strong>Opção ${letters[idx]}:</strong> ${result.distractorAnalysis[idx]}</li>`;
      }
    });
    distractorsHtml += '</ul>';
    feedbackDistractors.innerHTML = distractorsHtml;

    // Facto biofísico de enfermagem
    feedbackNursing.innerHTML = `
      <div class="nursing-tip-box">
        <span class="nursing-tip-icon">💡</span>
        <div>
          <strong>Aplicação Prática na Enfermagem:</strong>
          <p>${result.nursingApplication}</p>
        </div>
      </div>
    `;

    // Atualiza botão de avançar
    const isLast = quiz.currentIndex === quiz.currentQuestions.length - 1;
    btnNext.textContent = isLast ? 'Finalizar e Ver Resultados ➔' : 'Próxima Pergunta ➔';
    btnNext.classList.remove('hidden');
  }

  // Avançar para a próxima pergunta
  btnNext.addEventListener('click', () => {
    const nextState = quiz.nextQuestion();
    if (nextState) {
      renderQuestion(nextState);
    }
  });

  // Sair do quiz para a home com confirmação
  btnExitQuiz.addEventListener('click', () => {
    if (confirm('Tem a certeza de que deseja interromper este teste e voltar ao início?')) {
      showView(homeView);
    }
  });

  // Apresenta o relatório de resultados finais
  function showResults(summary) {
    showView(resultsView);

    // Salvar no histórico local
    saveAttemptHistory(summary);

    // Nota de 0 a 20 e Classificação
    resultGrade.innerHTML = `
      <div class="grade-circle ${summary.badgeClass}">
        <span class="grade-number">${summary.grade20}</span>
        <span class="grade-scale">/ 20 valores</span>
      </div>
    `;

    resultClassification.innerHTML = `
      <h3>${summary.classification}</h3>
      <p>Acertou <strong>${summary.correctCount}</strong> de <strong>${summary.totalQuestions}</strong> questões (${summary.percentage}% de aproveitamento).</p>
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

    // Lista de Revisão de Todas as Questões Respondidas
    resultReviewList.innerHTML = '<h4>Revisão Completa do Teste:</h4>';
    const letters = ['A', 'B', 'C', 'D'];
    summary.answers.forEach((ans, i) => {
      const reviewItem = document.createElement('div');
      reviewItem.className = `review-card ${ans.isCorrect ? 'review-correct' : 'review-incorrect'}`;
      reviewItem.innerHTML = `
        <div class="review-header">
          <span class="review-status">${ans.isCorrect ? '✅ Acertou' : '❌ Errou'}</span>
          <span class="review-qnum">Questão ${i + 1}</span>
        </div>
        <p class="review-question"><strong>${ans.questionText}</strong></p>
        <div class="review-choices">
          <p><strong>A sua escolha:</strong> Opção ${letters[ans.selectedIndex]} - ${ans.options[ans.selectedIndex]}</p>
          ${!ans.isCorrect ? `<p class="correct-highlight"><strong>Resposta correta:</strong> Opção ${letters[ans.correctIndex]} - ${ans.options[ans.correctIndex]}</p>` : ''}
        </div>
        <div class="review-explanation">
          <p><strong>Explicação:</strong> ${ans.explanation}</p>
        </div>
        <div class="review-nursing">
          <p><strong>💡 Relevância em Enfermagem:</strong> ${ans.nursingApplication}</p>
        </div>
      `;
      resultReviewList.appendChild(reviewItem);
    });
  }

  // Guardar tentativa no localStorage
  function saveAttemptHistory(summary) {
    const history = JSON.parse(localStorage.getItem('biofisica_history') || '[]');
    const attempt = {
      date: new Date().toLocaleDateString('pt-PT', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' }),
      mode: quiz.mode,
      topicId: quiz.activeTopicId,
      grade20: summary.grade20,
      percentage: summary.percentage,
      correct: summary.correctCount,
      total: summary.totalQuestions
    };
    history.unshift(attempt);
    // Guarda os últimos 25 testes
    localStorage.setItem('biofisica_history', JSON.stringify(history.slice(0, 25)));
  }

  // Ações a partir do ecrã de resultados
  btnRetryQuiz.addEventListener('click', () => {
    if (quiz.mode === 'topic') {
      startQuizSession('topic', quiz.activeTopicId);
    } else {
      startQuizSession('exam');
    }
  });

  btnHomeFromResults.addEventListener('click', () => {
    showView(homeView);
  });

  // Iniciar Simulação Global de Exame a partir da Home
  btnStartExam.addEventListener('click', () => {
    startQuizSession('exam');
  });

  // Renderiza os Resumos Teóricos dos Tópicos
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

    // Abrir/fechar acordeão
    document.querySelectorAll('.accordion-header').forEach(hdr => {
      hdr.addEventListener('click', () => {
        const item = hdr.parentElement;
        item.classList.toggle('active');
      });
    });

    // Abrir o primeiro por defeito
    if (studyTopicsAccordion.firstElementChild) {
      studyTopicsAccordion.firstElementChild.classList.add('active');
    }

    // Botões de praticar dentro dos resumos
    document.querySelectorAll('.btn-study-practice').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const tId = parseInt(e.target.getAttribute('data-topic'), 10);
        startQuizSession('topic', tId);
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

  // Renderiza Histórico e Estatísticas
  function renderStatsSection() {
    const history = JSON.parse(localStorage.getItem('biofisica_history') || '[]');
    if (history.length === 0) {
      statsContent.innerHTML = `
        <div class="empty-state">
          <p>Ainda não realizou nenhum teste de prática.</p>
          <p>Complete um teste por tópico ou uma simulação de exame para visualizar aqui as suas notas e evolução!</p>
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
              <th>Acertos</th>
              <th>Nota (0-20)</th>
              <th>Resultado</th>
            </tr>
          </thead>
          <tbody>
    `;

    history.forEach(h => {
      const topicObj = h.topicId ? TOPICS_DATA.find(t => t.id === h.topicId) : null;
      const modeLabel = topicObj ? `${topicObj.icon} ${topicObj.shortTitle}` : '🎯 Exame Global';
      const isPassed = h.grade20 >= 9.5;
      html += `
        <tr>
          <td>${h.date}</td>
          <td>${modeLabel}</td>
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
    if (confirm('Deseja limpar todo o histórico de testes guardado no seu computador?')) {
      localStorage.removeItem('biofisica_history');
      renderStatsSection();
    }
  });

  // Inicialização
  renderTopicCards();
  renderStudySection();
});
