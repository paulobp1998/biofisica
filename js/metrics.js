/* =========================================================================
   Métricas de utilização (gratuito: Google Sheets + Google Apps Script)
   - Os alunos enviam eventos anónimos (visita diária e fim de sessão).
   - Só o docente, dentro da área protegida por PIN, vê o painel.
   - Configuração: ver metrics-backend/README.md
   ========================================================================= */

// URL da Web App do Google Apps Script (vazio = métricas desativadas).
const METRICS_ENDPOINT = 'https://script.google.com/macros/s/AKfycbyxJm3g0Cn1JCQWTQwf9lTmWYhRl87ZwXYLvcEnTZSmdyFn3f9lCm4VAfcaCazp-8x4gw/exec';

const Metrics = (() => {
  const CID_KEY = 'biofisica_metrics_cid';
  const DAY_KEY = 'biofisica_metrics_last_day';
  const READ_KEY_STORAGE = 'biofisica_metrics_key';
  const MODE_LABELS = { topic: 'Tópico', exam: 'Exame', custom: 'Personalizado' };
  let lastSentAnswers = null;

  const isEnabled = () => typeof METRICS_ENDPOINT === 'string' && METRICS_ENDPOINT.startsWith('https://');
  const isTeacher = () => !!(window.teacherManager && window.teacherManager.isAuth && window.teacherManager.isAuth());

  const randomId = () => Array.from(crypto.getRandomValues(new Uint8Array(12)), b => b.toString(16).padStart(2, '0')).join('');

  function clientId() {
    try {
      let cid = localStorage.getItem(CID_KEY);
      if (!cid) {
        cid = randomId();
        localStorage.setItem(CID_KEY, cid);
      }
      return cid;
    } catch (e) {
      return randomId(); // sem armazenamento: identificador efémero
    }
  }

  function send(payload) {
    if (!isEnabled() || isTeacher()) return;
    try {
      fetch(METRICS_ENDPOINT, {
        method: 'POST',
        mode: 'no-cors', // resposta opaca: basta enviar
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(payload),
        keepalive: true
      }).catch(() => {});
    } catch (e) { /* métricas nunca devem afetar o quiz */ }
  }

  // Uma visita por navegador e por dia
  function trackVisit() {
    try {
      const today = dayKey(new Date());
      if (localStorage.getItem(DAY_KEY) === today) return;
      localStorage.setItem(DAY_KEY, today);
    } catch (e) { /* sem armazenamento: envia sempre */ }
    send({ type: 'visit', clientId: clientId() });
  }

  // Chamado no fim do teste (ou ao interromper, com partial = true)
  function trackSession(quiz, summary, partial) {
    const answered = (quiz.userAnswers || []).filter(a => a && !a.isRetry);
    if (!answered.length || quiz.userAnswers === lastSentAnswers) return;
    lastSentAnswers = quiz.userAnswers;

    const correct = answered.filter(a => a.isCorrect).length;
    const seconds = quiz.startTime ? Math.round((Date.now() - quiz.startTime) / 1000) : 0;
    send({
      type: 'session',
      clientId: clientId(),
      mode: quiz.mode,
      title: (quiz.customTitle || '').slice(0, 60),
      topicId: quiz.activeTopicId || '',
      feedbackMode: quiz.feedbackMode,
      answered: answered.length,
      correct: correct,
      grade20: summary ? summary.grade20 : Number(((correct / answered.length) * 20).toFixed(1)),
      seconds: seconds,
      partial: !!partial,
      // [id da pergunta, tópico, 1 = certa / 0 = errada]
      answers: JSON.stringify(answered.map(a => [a.questionId, a.topicId, a.isCorrect ? 1 : 0])),
      // opção escolhida, na ordem do banco (0–3; -1 = sem resposta): mostra que distratores atraem mais
      choices: JSON.stringify(answered.map(a => Number.isInteger(a.originalSelected) ? a.originalSelected : -1))
    });
  }

  // Reporte de um problema numa pergunta (anónimo). Devolve false se não puder ser enviado.
  const REPORTS_KEY = 'biofisica_reports_sent';
  const REPORTS_PER_DAY = 10;
  const REPORT_REASONS = ['chave', 'enunciado', 'calculo', 'escrita', 'outro'];

  function reportsSentToday() {
    try {
      const data = JSON.parse(localStorage.getItem(REPORTS_KEY) || '{}');
      return data.day === dayKey(new Date()) ? data : { day: dayKey(new Date()), ids: [] };
    } catch (e) {
      return { day: dayKey(new Date()), ids: [] };
    }
  }

  function canReport(questionId) {
    if (!isEnabled()) return 'disabled';
    const sent = reportsSentToday();
    if (sent.ids.includes(questionId)) return 'duplicate';
    if (sent.ids.length >= REPORTS_PER_DAY) return 'limit';
    return 'ok';
  }

  function report(questionId, reason, comment) {
    if (canReport(questionId) !== 'ok' || REPORT_REASONS.indexOf(reason) < 0) return false;
    const sent = reportsSentToday();
    sent.ids.push(questionId);
    try { localStorage.setItem(REPORTS_KEY, JSON.stringify(sent)); } catch (e) {}
    // Enviado mesmo com a sessão do docente aberta (útil para testar)
    try {
      fetch(METRICS_ENDPOINT, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({
          type: 'report',
          clientId: clientId(),
          questionId: questionId,
          reason: reason,
          comment: String(comment || '').trim().slice(0, 300)
        }),
        keepalive: true
      }).catch(() => {});
    } catch (e) { return false; }
    return true;
  }

  // ---------- Painel do docente ----------

  const $ = id => document.getElementById(id);
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const pct = (ok, n) => n ? Math.round((ok / n) * 100) + ' %' : '—';
  const MONTHS = 30;

  function dayKey(d) {
    return d.toLocaleDateString('sv-SE'); // AAAA-MM-DD, hora local
  }

  function readKey(forcePrompt) {
    let key = null;
    try { key = localStorage.getItem(READ_KEY_STORAGE); } catch (e) {}
    if (!key || forcePrompt) {
      key = prompt('Chave de leitura das métricas (fica guardada só neste computador):');
      if (!key) return null;
      try { localStorage.setItem(READ_KEY_STORAGE, key.trim()); } catch (e) {}
      key = key.trim();
    }
    return key;
  }

  function aggregate(rows) {
    const visits = rows.filter(r => r.type === 'visit');
    const sessions = rows.filter(r => r.type === 'session');
    const finished = sessions.filter(s => !s.partial);
    const days = {};
    visits.forEach(v => {
      const k = dayKey(new Date(v.timestamp));
      days[k] = days[k] || { visits: 0 };
      days[k].visits++;
    });

    const perQ = {}, perTopic = {};
    let answered = 0, correct = 0;
    sessions.forEach(s => {
      let list = [], choices = [];
      try { list = JSON.parse(s.answers || '[]'); } catch (e) {}
      try { choices = JSON.parse(s.choices || '[]'); } catch (e) {}
      if (!Array.isArray(choices) || choices.length !== list.length) choices = [];
      list.forEach(([qid, topic, ok], i) => {
        answered++; correct += ok;
        const q = perQ[qid] = perQ[qid] || { topic, n: 0, ok: 0, picks: [0, 0, 0, 0], nPicks: 0 };
        q.n++; q.ok += ok;
        const c = choices[i];
        if (Number.isInteger(c) && c >= 0 && c <= 3) { q.picks[c]++; q.nPicks++; }
        const t = perTopic[topic] = perTopic[topic] || { n: 0, ok: 0 };
        t.n++; t.ok += ok;
      });
    });

    const exams = finished.filter(s => s.mode === 'exam');
    const avgGrade = exams.length ? exams.reduce((a, s) => a + Number(s.grade20), 0) / exams.length : null;
    const avgMinutes = finished.length ? finished.reduce((a, s) => a + Number(s.seconds), 0) / finished.length / 60 : 0;

    return {
      visits: visits.length,
      students: new Set(rows.map(r => r.clientId)).size,
      answered, correct, days,
      sessions: finished.length,
      avgGrade, avgMinutes, perQ, perTopic,
      recent: sessions.slice().sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp)).slice(0, 20),
      exams: exams.length
    };
  }

  function barRows(items, max, fmtLabel, fmtValue) {
    return items.map(([label, value]) => `
      <div class="metrics-bar-row">
        <span class="metrics-bar-label">${esc(fmtLabel(label))}</span>
        <div class="metrics-bar-track"><div class="metrics-bar-fill" style="width:${max ? Math.round(value / max * 100) : 0}%"></div></div>
        <span class="metrics-bar-value">${esc(fmtValue(value))}</span>
      </div>`).join('') || '<p class="metrics-empty">Ainda sem dados.</p>';
  }

  // Análise das perguntas: sinaliza as que convém rever (muito difíceis, muito fáceis,
  // um distrator que atrai mais do que a resposta certa, ou com reportes dos alunos).
  const MIN_ANSWERS = 10;
  const REASON_LABELS = {
    chave: 'A resposta marcada parece errada',
    enunciado: 'Enunciado ambíguo ou com dados em falta',
    calculo: 'Erro de cálculo ou de unidades',
    escrita: 'Gralha ou erro de português',
    outro: 'Outro'
  };
  const LETTERS = ['A', 'B', 'C', 'D'];
  const questionById = id => (typeof ALL_UNLOCKED_RAW !== 'undefined' ? ALL_UNLOCKED_RAW : QUESTIONS_DATA).find(q => q.id === Number(id));
  const short = (html, n) => {
    const t = String(html || '').replace(/<[^>]+>/g, '');
    return t.length > n ? t.slice(0, n - 1) + '…' : t;
  };

  function renderItemReview(a, reports) {
    const reportCount = {};
    (reports || []).forEach(r => { reportCount[r.questionId] = (reportCount[r.questionId] || 0) + 1; });
    const ids = new Set([...Object.keys(a.perQ), ...Object.keys(reportCount)]);
    const items = [];
    ids.forEach(id => {
      const st = a.perQ[id] || { n: 0, ok: 0, picks: [0, 0, 0, 0], nPicks: 0 };
      const q = questionById(id);
      const flags = [];
      let score = 0;
      if (reportCount[id]) { flags.push(`🚩 ${reportCount[id]} reporte(s)`); score += 3 * reportCount[id]; }
      if (st.n >= MIN_ANSWERS) {
        const p = st.ok / st.n;
        if (p < 0.3) { flags.push('Muito difícil (< 30 %): confirmar a chave e o enunciado'); score += 2; }
        if (p > 0.95) { flags.push('Muito fácil (> 95 %)'); score += 0.5; }
        if (q && st.nPicks >= MIN_ANSWERS) {
          const right = st.picks[q.correctIndex];
          st.picks.forEach((k, i) => {
            if (i !== q.correctIndex && k > 0 && (k >= right || k / st.nPicks >= 0.4)) {
              flags.push(`Distrator ${LETTERS[i]} escolhido por ${Math.round(k / st.nPicks * 100)} % (certa: ${Math.round(right / st.nPicks * 100)} %): «${esc(short(q.options[i], 70))}»`);
              score += 1.5;
            }
          });
        }
      }
      if (flags.length) items.push({ id, q, st, flags, score });
    });
    items.sort((x, y) => y.score - x.score || x.st.ok / (x.st.n || 1) - y.st.ok / (y.st.n || 1));

    $('metrics-hardest').innerHTML = items.length
      ? `<p class="metrics-note">As letras referem-se à ordem das opções no banco de perguntas (no quiz aparecem baralhadas). Sinais calculados com pelo menos ${MIN_ANSWERS} respostas.</p>
        <div class="metrics-table-wrap"><table class="metrics-table"><thead><tr><th>Pergunta</th><th>Respostas</th><th>Acerto</th><th>Porque rever</th></tr></thead><tbody>${
          items.slice(0, 25).map(it => `<tr>
            <td><strong>${esc(it.id)}</strong>${it.q ? `<br><span class="metrics-q-snippet">${esc(short(it.q.question, 90))}</span>` : ''}</td>
            <td>${it.st.n}</td>
            <td>${it.st.n ? Math.round(it.st.ok / it.st.n * 100) + ' %' : '—'}</td>
            <td>${it.flags.map(f => `<div>${f.startsWith('Distrator') ? f : esc(f)}</div>`).join('')}</td></tr>`).join('')
        }</tbody></table></div>`
      : `<p class="metrics-empty">Nenhuma pergunta sinalizada (cada pergunta precisa de pelo menos ${MIN_ANSWERS} respostas).</p>`;

    const box = $('metrics-reports');
    if (!box) return;
    if (reports === null) {
      box.innerHTML = '<p class="metrics-empty">Para ver os reportes dos alunos, atualize o Apps Script (ver metrics-backend/README.md, "Nova versão").</p>';
      return;
    }
    const recent = reports.slice().sort((x, y) => new Date(y.timestamp) - new Date(x.timestamp)).slice(0, 40);
    box.innerHTML = recent.length
      ? `<div class="metrics-table-wrap"><table class="metrics-table"><thead><tr><th>Data</th><th>Pergunta</th><th>Motivo</th><th>Comentário</th></tr></thead><tbody>${
          recent.map(r => `<tr>
            <td>${esc(new Date(r.timestamp).toLocaleString('pt-PT', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' }))}</td>
            <td>${esc(r.questionId)}</td>
            <td>${esc(REASON_LABELS[r.reason] || r.reason)}</td>
            <td>${esc(r.comment) || '—'}</td></tr>`).join('')
        }</tbody></table></div>`
      : '<p class="metrics-empty">Ainda sem reportes.</p>';
  }

  function render(a, reports) {
    const today = dayKey(new Date());
    const last = [];
    for (let i = MONTHS - 1; i >= 0; i--) {
      const d = new Date(); d.setDate(d.getDate() - i);
      last.push(dayKey(d));
    }
    const t7 = last.slice(-7);
    const visits7 = t7.reduce((s, k) => s + (a.days[k] ? a.days[k].visits : 0), 0);
    const visits30 = last.reduce((s, k) => s + (a.days[k] ? a.days[k].visits : 0), 0);
    const visitsToday = a.days[today] ? a.days[today].visits : 0;

    $('metrics-kpis').innerHTML = [
      ['📅', visitsToday, 'Visitas hoje'],
      ['📈', visits7, 'Visitas (7 dias)'],
      ['👥', a.students, 'Alunos distintos'],
      ['✍️', a.answered, 'Perguntas respondidas'],
      ['🎯', pct(a.correct, a.answered), 'Taxa de acerto global'],
      ['✅', a.sessions, 'Sessões concluídas'],
      ['⏱️', a.avgMinutes.toFixed(0) + ' min', 'Tempo médio por sessão'],
      ['🏅', a.avgGrade == null ? '—' : a.avgGrade.toFixed(1), `Nota média (${a.exams} exames)`]
    ].map(([icon, num, label]) => `
      <div class="teacher-kpi-card">
        <span class="teacher-kpi-icon">${icon}</span>
        <div class="teacher-kpi-info">
          <span class="teacher-kpi-num">${esc(num)}</span>
          <span class="teacher-kpi-label">${esc(label)}</span>
        </div>
      </div>`).join('');

    $('metrics-daily').innerHTML = barRows(
      last.map(k => [k, a.days[k] ? a.days[k].visits : 0]),
      Math.max(1, ...last.map(k => a.days[k] ? a.days[k].visits : 0)),
      k => k.slice(8) + '/' + k.slice(5, 7),
      v => v + ' vis.'
    );

    $('metrics-daily-note').textContent = `Últimos ${MONTHS} dias · ${visits30} visitas no total do período.`;

    const topics = Object.keys(a.perTopic).sort((x, y) => x - y).map(t => [t, a.perTopic[t].ok / a.perTopic[t].n * 100]);
    const topicCounts = Object.keys(a.perTopic).sort((x, y) => x - y).map(t => [t, a.perTopic[t].n]);
    $('metrics-topics').innerHTML = topics.length
      ? topics.map(([t, p], i) => `
        <div class="metrics-bar-row">
          <span class="metrics-bar-label">Tópico ${esc(t)}</span>
          <div class="metrics-bar-track"><div class="metrics-bar-fill" style="width:${Math.round(p)}%"></div></div>
          <span class="metrics-bar-value">${Math.round(p)} % · ${topicCounts[i][1]} resp.</span>
        </div>`).join('')
      : '<p class="metrics-empty">Ainda sem respostas.</p>';

    renderItemReview(a, reports);

    const modeName = m => MODE_LABELS[m] || m;
    $('metrics-sessions').innerHTML = a.recent.length
      ? `<div class="metrics-table-wrap"><table class="metrics-table"><thead><tr><th>Data</th><th>Modo</th><th>Respondidas</th><th>Acerto</th><th>Nota</th><th>Estado</th></tr></thead><tbody>${
          a.recent.map(s => `<tr>
            <td>${esc(new Date(s.timestamp).toLocaleString('pt-PT', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' }))}</td>
            <td>${esc(modeName(s.mode))}${s.title ? ' · ' + esc(s.title) : ''}</td>
            <td>${s.answered}</td><td>${pct(s.correct, s.answered)}</td>
            <td>${Number(s.grade20).toFixed(1)}</td>
            <td>${s.partial ? 'Interrompida' : 'Concluída'}</td></tr>`).join('')
        }</tbody></table></div>`
      : '<p class="metrics-empty">Ainda sem sessões.</p>';
  }

  async function load(forcePrompt) {
    const note = $('metrics-status');
    if (!isEnabled()) {
      note.textContent = 'Métricas desativadas: falta configurar METRICS_ENDPOINT em js/metrics.js (ver metrics-backend/README.md).';
      return;
    }
    const key = readKey(forcePrompt);
    if (!key) { note.textContent = 'Sem chave: não é possível carregar os dados.'; return; }
    note.textContent = 'A carregar…';
    try {
      const res = await fetch(`${METRICS_ENDPOINT}?key=${encodeURIComponent(key)}`);
      const data = await res.json();
      if (!data.ok) {
        note.textContent = data.error === 'unauthorized' ? 'Chave incorreta. Tente novamente.' : 'Erro: ' + data.error;
        if (data.error === 'unauthorized') try { localStorage.removeItem(READ_KEY_STORAGE); } catch (e) {}
        return;
      }
      // Reportes: um Apps Script antigo ignora "action" e não devolve "reports" (null = não disponível)
      let reports = null;
      try {
        const r = await (await fetch(`${METRICS_ENDPOINT}?key=${encodeURIComponent(key)}&action=reports`)).json();
        if (r.ok && Array.isArray(r.reports)) reports = r.reports;
      } catch (e) {}
      render(aggregate(data.rows), reports);
      note.textContent = `Atualizado às ${new Date().toLocaleTimeString('pt-PT', { hour: '2-digit', minute: '2-digit' })} · ${data.rows.length} registos.`;
    } catch (e) {
      note.textContent = 'Não foi possível contactar o servidor de métricas. Verifique a ligação à internet.';
    }
  }

  function open() {
    document.querySelectorAll('main > section').forEach(s => { s.classList.add('hidden'); s.classList.remove('active-view'); });
    const view = $('view-metrics');
    view.classList.remove('hidden');
    view.classList.add('active-view');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    load(false);
  }

  function bind() {
    const btn = $('btn-teacher-metrics');
    if (btn) btn.addEventListener('click', open);
    const back = $('btn-metrics-back');
    if (back) back.addEventListener('click', () => window.teacherManager && window.teacherManager.openView());
    const refresh = $('btn-metrics-refresh');
    if (refresh) refresh.addEventListener('click', () => load(false));
    const forget = $('btn-metrics-forget-key');
    if (forget) forget.addEventListener('click', () => {
      try { localStorage.removeItem(READ_KEY_STORAGE); } catch (e) {}
      load(true);
    });
    if (!isEnabled() || isTeacher()) return;
    trackVisit();
  }

  document.addEventListener('DOMContentLoaded', bind);

  return { trackVisit, trackSession, open, report, canReport };
})();
