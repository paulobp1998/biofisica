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
      answers: JSON.stringify(answered.map(a => [a.questionId, a.topicId, a.isCorrect ? 1 : 0]))
    });
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
      let list = [];
      try { list = JSON.parse(s.answers || '[]'); } catch (e) {}
      list.forEach(([qid, topic, ok]) => {
        answered++; correct += ok;
        const q = perQ[qid] = perQ[qid] || { topic, n: 0, ok: 0 };
        q.n++; q.ok += ok;
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

  function render(a) {
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

    const hardest = Object.entries(a.perQ)
      .filter(([, q]) => q.n >= 5)
      .map(([id, q]) => ({ id, topic: q.topic, n: q.n, p: q.ok / q.n }))
      .sort((x, y) => x.p - y.p || y.n - x.n)
      .slice(0, 10);
    $('metrics-hardest').innerHTML = hardest.length
      ? `<div class="metrics-table-wrap"><table class="metrics-table"><thead><tr><th>Pergunta</th><th>Tópico</th><th>Respostas</th><th>Acerto</th></tr></thead><tbody>${
          hardest.map(h => `<tr><td>${esc(h.id)}</td><td>${esc(h.topic)}</td><td>${h.n}</td><td>${Math.round(h.p * 100)} %</td></tr>`).join('')
        }</tbody></table></div>`
      : '<p class="metrics-empty">Precisa de pelo menos 5 respostas por pergunta.</p>';

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
      render(aggregate(data.rows));
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

  return { trackVisit, trackSession, open };
})();
