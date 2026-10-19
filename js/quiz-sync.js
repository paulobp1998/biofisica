/* =========================================================================
   Sincronização dos quizzes do docente com o Google Sheets (gratuito).
   Usa o mesmo URL e a mesma chave de leitura das métricas (js/metrics.js).
   Se o servidor não responder, tudo continua a funcionar só neste navegador.
   ========================================================================= */

const QuizSync = (() => {
  const KEY_STORAGE = 'biofisica_metrics_key';

  const isEnabled = () => typeof METRICS_ENDPOINT === 'string' && METRICS_ENDPOINT.startsWith('https://');

  // Pede a chave uma única vez (fica guardada neste computador)
  function getKey(ask) {
    let key = null;
    try { key = localStorage.getItem(KEY_STORAGE); } catch (e) {}
    if (!key && ask) {
      key = prompt('Chave do docente (a mesma das métricas; fica guardada só neste computador):');
      if (key) {
        key = key.trim();
        try { localStorage.setItem(KEY_STORAGE, key); } catch (e) {}
      }
    }
    return key ? key.trim() : null;
  }

  async function post(body) {
    const key = getKey(false);
    if (!key) throw new Error('sem-chave');
    const res = await fetch(METRICS_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(Object.assign({ key: key }, body))
    });
    const data = await res.json();
    if (!data.ok) throw new Error(data.error || 'erro no servidor');
    return data;
  }

  async function listQuizzes(key) {
    const res = await fetch(`${METRICS_ENDPOINT}?action=quizzes&key=${encodeURIComponent(key)}`);
    const data = await res.json();
    if (!data.ok) throw new Error(data.error || 'erro no servidor');
    return data.quizzes;
  }

  // Esquece a chave guardada (por exemplo, se o servidor a recusar)
  function forgetKey() {
    try { localStorage.removeItem(KEY_STORAGE); } catch (e) {}
  }

  return {
    isEnabled,
    getKey,
    forgetKey,
    listQuizzes,
    saveQuiz: quiz => post({ type: 'quiz_save', quiz: quiz }),
    deleteQuiz: id => post({ type: 'quiz_delete', id: id }),
    saveResult: summary => post({ type: 'arena_result', summary: summary })
  };
})();
