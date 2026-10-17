/* =========================================================================
   Backend gratuito das métricas (Google Apps Script + Google Sheets)
   Ver README.md nesta pasta para a configuração (≈ 5 minutos).
   ========================================================================= */

// Chave só para leitura (o docente escreve-a no painel). Mude-a!
// Este ficheiro está publico no GitHub: não coloque a chave real aqui.
// SHEET_ID: o ID da folha (o trecho entre /d/ e /edit no URL da folha).
const READ_KEY = 'TROQUE-ESTA-CHAVE-SECRETA';
const SHEET_ID = 'COLE-AQUI-O-ID-DA-FOLHA';
const SHEET_NAME = 'eventos';
const HEADERS = ['timestamp', 'type', 'clientId', 'mode', 'title', 'topicId', 'feedbackMode',
  'answered', 'correct', 'grade20', 'seconds', 'partial', 'answers'];

// Recebe eventos dos alunos (visita ou fim de sessão)
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    if (data.type !== 'visit' && data.type !== 'session') {
      return json_({ ok: false, error: 'tipo inválido' });
    }
    const cid = String(data.clientId || '').slice(0, 64);
    const row = [new Date(), data.type, cid];

    if (data.type === 'visit') {
      row.push('', '', '', '', '', '', '', '', '', '');
    } else {
      const answers = String(data.answers || '[]').slice(0, 5000);
      row.push(
        String(data.mode || '').slice(0, 20),
        String(data.title || '').slice(0, 60),
        String(data.topicId || '').slice(0, 10),
        String(data.feedbackMode || '').slice(0, 20),
        num_(data.answered),
        num_(data.correct),
        num_(data.grade20),
        num_(data.seconds),
        data.partial === true,
        answers
      );
    }

    getSheet_().appendRow(row);
    return json_({ ok: true });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  }
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

function num_(v) {
  const n = Number(v);
  return isFinite(n) ? n : '';
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
