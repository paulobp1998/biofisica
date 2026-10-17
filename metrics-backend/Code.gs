/* =========================================================================
   Backend gratuito das métricas (Google Apps Script + Google Sheets)
   Ver README.md nesta pasta para a configuração (≈ 5 minutos).
   ========================================================================= */

// Chave só para leitura (o docente escreve-a no painel). Mude-a!
// Este ficheiro está público no GitHub: não coloque a chave real aqui.
// SHEET_ID: o ID da folha (o trecho entre /d/ e /edit no URL da folha).
const READ_KEY = 'TROQUE-ESTA-CHAVE-SECRETA';
const SHEET_ID = 'COLE-AQUI-O-ID-DA-FOLHA';
const SHEET_NAME = 'eventos';
const HEADERS = ['timestamp', 'type', 'clientId', 'mode', 'title', 'topicId', 'feedbackMode',
  'answered', 'correct', 'grade20', 'seconds', 'partial', 'answers'];
const MODES = ['topic', 'exam', 'custom'];

// Recebe eventos dos alunos (visita ou fim de sessão)
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
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

// Devolve todos os registos ao painel do docente (exige a chave)
function doGet(e) {
  if (!e.parameter.key || e.parameter.key !== READ_KEY) {
    return json_({ ok: false, error: 'unauthorized' });
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

function getSheet_() {
  const ss = SpreadsheetApp.openById(SHEET_ID);
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow(HEADERS);
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
