/* =========================================================================
   Backend gratuito (Google Apps Script + Google Sheets)
   - Métricas de utilização (eventos anónimos dos alunos)
   - Biblioteca de quizzes pré-preparados do docente (folha "quizzes")
   - Resumo das sessões da Arena (folha "resultados")
   Ver README.md nesta pasta para a configuração (≈ 5 minutos).
   ========================================================================= */

// Chave só para o docente (leitura e gestão). Mude-a!
// Este ficheiro está público no GitHub: não coloque a chave real aqui.
// SHEET_ID: o ID da folha (o trecho entre /d/ e /edit no URL da folha).
const READ_KEY = 'TROQUE-ESTA-CHAVE-SECRETA';
const SHEET_ID = 'COLE-AQUI-O-ID-DA-FOLHA';
const SHEET_NAME = 'eventos';
const HEADERS = ['timestamp', 'type', 'clientId', 'mode', 'title', 'topicId', 'feedbackMode',
  'answered', 'correct', 'grade20', 'seconds', 'partial', 'answers'];
const MODES = ['topic', 'exam', 'custom'];
const QUIZ_SHEET = 'quizzes';
const QUIZ_HEADERS = ['id', 'name', 'questionIds', 'updatedAt'];
const QUIZ_SIZE = 20;
const RESULT_SHEET = 'resultados';
const RESULT_HEADERS = ['timestamp', 'sessionStart', 'roomPin', 'quizName', 'team', 'rank', 'score', 'correct', 'questionsTotal'];

// Recebe eventos dos alunos (visita ou fim de sessão) e pedidos do docente
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    if (data && typeof data.type === 'string' && (data.type.indexOf('quiz_') === 0 || data.type === 'arena_result')) {
      return teacherPost_(data);
    }

    const error = validate_(data);
    if (error) return json_({ ok: false, error: error });

    const row = [new Date(), data.type, data.clientId];
    if (data.type === 'visit') {
      row.push('', '', '', '', '', '', '', '', '', '');
    } else {
      row.push(
        data.mode,
        String(data.title || '').slice(0, 60),
        String(data.topicId || '').slice(0, 10),
        String(data.feedbackMode || '').slice(0, 20),
        data.answered,
        data.correct,
        data.grade20,
        data.seconds,
        data.partial === true,
        data.answers
      );
    }

    getSheet_().appendRow(row);
    return json_({ ok: true });
  } catch (err) {
    return json_({ ok: false, error: 'pedido inválido' });
  }
}

// Pedidos do docente (exigem a chave): gestão de quizzes e resumo de sessões
function teacherPost_(data) {
  if (data.key !== READ_KEY) return json_({ ok: false, error: 'unauthorized' });

  if (data.type === 'quiz_save') {
    const q = data.quiz || {};
    if (typeof q.id !== 'string' || !/^[A-Za-z0-9_]{1,40}$/.test(q.id)) return json_({ ok: false, error: 'id inválido' });
    if (typeof q.name !== 'string' || !q.name.trim() || q.name.length > 80) return json_({ ok: false, error: 'nome inválido' });
    if (!Array.isArray(q.questionIds) || q.questionIds.length !== QUIZ_SIZE ||
        !q.questionIds.every(function (id) { return isInt_(id, 1, 99999); })) {
      return json_({ ok: false, error: 'o quiz tem de ter ' + QUIZ_SIZE + ' perguntas' });
    }
    const sheet = getSheet_(QUIZ_SHEET, QUIZ_HEADERS);
    const row = [q.id, q.name.trim(), JSON.stringify(q.questionIds), new Date().toISOString()];
    const rowIndex = findRow_(sheet, q.id);
    if (rowIndex) sheet.getRange(rowIndex, 1, 1, row.length).setValues([row]);
    else sheet.appendRow(row);
    return json_({ ok: true });
  }

  if (data.type === 'quiz_delete') {
    const sheet = getSheet_(QUIZ_SHEET, QUIZ_HEADERS);
    const rowIndex = findRow_(sheet, String(data.id || ''));
    if (rowIndex) sheet.deleteRow(rowIndex);
    return json_({ ok: true });
  }

  if (data.type === 'arena_result') {
    const s = data.summary || {};
    const teams = Array.isArray(s.teams) ? s.teams.slice(0, 100) : [];
    const sheet = getSheet_(RESULT_SHEET, RESULT_HEADERS);
    teams.forEach(function (t) {
      sheet.appendRow([new Date(), String(s.startedAt || '').slice(0, 30), String(s.roomPin || '').slice(0, 20),
        String(s.quizName || '').slice(0, 80), String(t.teamName || '').slice(0, 60), t.rank, t.score,
        t.correct, s.questionsTotal]);
    });
    return json_({ ok: true, rows: teams.length });
  }

  return json_({ ok: false, error: 'tipo inválido' });
}

// Rejeita eventos mal formados ou incoerentes (ex.: acertos > respostas)
function validate_(d) {
  if (!d || typeof d !== 'object') return 'pedido inválido';
  if (typeof d.clientId !== 'string' || !/^[a-f0-9]{24}$/.test(d.clientId)) return 'clientId inválido';
  if (d.type === 'visit') return null;
  if (d.type !== 'session') return 'tipo inválido';
  if (MODES.indexOf(d.mode) < 0) return 'modo inválido';
  if (!isInt_(d.answered, 1, 200)) return 'answered inválido';
  if (!isInt_(d.correct, 0, d.answered)) return 'correct inválido';
  if (typeof d.grade20 !== 'number' || d.grade20 < 0 || d.grade20 > 20) return 'grade20 inválido';
  if (!isInt_(d.seconds, 0, 86400)) return 'seconds inválido';
  if (typeof d.answers !== 'string' || d.answers.length > 5000) return 'answers inválido';

  let list;
  try { list = JSON.parse(d.answers); } catch (err) { return 'answers inválido'; }
  if (!Array.isArray(list) || list.length !== d.answered) return 'answers inconsistente';

  let ok = 0;
  for (let i = 0; i < list.length; i++) {
    const a = list[i];
    if (!Array.isArray(a) || a.length !== 3 || (a[2] !== 0 && a[2] !== 1)) return 'answers inválido';
    ok += a[2];
  }
  if (ok !== d.correct) return 'correct inconsistente';
  return null;
}

function isInt_(v, min, max) {
  return typeof v === 'number' && v === Math.floor(v) && v >= min && v <= max;
}

// Leitura pelo painel do docente (exige a chave)
function doGet(e) {
  if (!e.parameter.key || e.parameter.key !== READ_KEY) {
    return json_({ ok: false, error: 'unauthorized' });
  }
  if (e.parameter.action === 'quizzes') {
    const values = getSheet_(QUIZ_SHEET, QUIZ_HEADERS).getDataRange().getValues();
    values.shift();
    const quizzes = values.filter(function (r) { return r[0]; }).map(function (r) {
      let ids = [];
      try { ids = JSON.parse(r[2]); } catch (err) {}
      return { id: String(r[0]), name: String(r[1]), questionIds: ids, updatedAt: String(r[3]) };
    });
    return json_({ ok: true, quizzes: quizzes });
  }
  const values = getSheet_().getDataRange().getValues();
  const headers = values.shift();
  const rows = values.map(r => {
    const o = {};
    headers.forEach((h, i) => { o[h] = r[i]; });
    return o;
  });
  return json_({ ok: true, rows: rows });
}

// Devolve a linha (1-based, com cabeçalho) do quiz com este id, ou 0
function findRow_(sheet, id) {
  const ids = sheet.getRange(1, 1, Math.max(sheet.getLastRow(), 1), 1).getValues();
  for (let i = 1; i < ids.length; i++) {
    if (String(ids[i][0]) === id) return i + 1;
  }
  return 0;
}

function getSheet_(name, headers) {
  const ss = SpreadsheetApp.openById(SHEET_ID);
  const sheetName = name || SHEET_NAME;
  let sheet = ss.getSheetByName(sheetName);
  if (!sheet) {
    sheet = ss.insertSheet(sheetName);
    sheet.appendRow(headers || HEADERS);
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
