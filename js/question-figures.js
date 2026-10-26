// Esquemas SVG das perguntas (gerados em linha, sem imagens externas nem serviços).
// Cada pergunta pode ter um campo "figure": { "type": "...", ... } que é desenhado aqui.
// O esquema mostra só os dados do enunciado (o que se pede aparece como "?"), nunca a resolução.
// As cores vêm das classes .f-* em css/style.css, para funcionarem nos modos claro e escuro.
const QUESTION_FIGURES = (() => {
  const r = n => Math.round(n * 10) / 10;
  const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

  // Texto com <sub> e <sup> convertidos em tspans (o resto é escapado).
  function sv(s) {
    let shift = 0;
    return String(s).split(/(<sub>.*?<\/sub>|<sup>.*?<\/sup>)/).map(part => {
      const m = part.match(/^<(sub|sup)>(.*)<\/\1>$/);
      if (m) {
        const dy = m[1] === 'sub' ? 3 : -4;
        const out = `<tspan dy="${dy - shift}" font-size="8">${esc(m[2])}</tspan>`;
        shift = dy;
        return out;
      }
      if (!part) return '';
      const out = shift ? `<tspan dy="${-shift}">${esc(part)}</tspan>` : esc(part);
      shift = 0;
      return out;
    }).join('');
  }

  function text(x, y, s, opt = {}) {
    const anchor = opt.anchor || 'middle';
    const size = opt.size || 10.5;
    return `<text x="${r(x)}" y="${r(y)}" text-anchor="${anchor}" font-size="${size}"${opt.bold ? ' font-weight="700"' : ''}>${sv(s)}</text>`;
  }

  function arrow(x1, y1, x2, y2, kind, w = 2.2) {
    const dx = x2 - x1, dy = y2 - y1, L = Math.hypot(dx, dy);
    const ux = dx / L, uy = dy / L;
    const bx = x2 - ux * 8.5, by = y2 - uy * 8.5, px = -uy * 3.6, py = ux * 3.6;
    return `<line x1="${r(x1)}" y1="${r(y1)}" x2="${r(x2 - ux * 6.4)}" y2="${r(y2 - uy * 6.4)}" class="f-st-${kind}" stroke-width="${w}"/>` +
      `<polygon points="${r(x2)},${r(y2)} ${r(bx + px)},${r(by + py)} ${r(bx - px)},${r(by - py)}" class="f-fill-${kind}"/>`;
  }

  // Linha de cota horizontal com marcas nas pontas; o rótulo fica por cima.
  function dim(xa, xb, y, label, kind) {
    const lo = Math.min(xa, xb), hi = Math.max(xa, xb);
    return `<line x1="${r(lo)}" y1="${y}" x2="${r(hi)}" y2="${y}" class="f-st-${kind}" stroke-width="1.6"/>` +
      `<line x1="${r(lo)}" y1="${y - 4}" x2="${r(lo)}" y2="${y + 4}" class="f-st-${kind}" stroke-width="1.6"/>` +
      `<line x1="${r(hi)}" y1="${y - 4}" x2="${r(hi)}" y2="${y + 4}" class="f-st-${kind}" stroke-width="1.6"/>` +
      text((lo + hi) / 2, y - 5, label, { size: 10 });
  }

  function svg(w, h, alt, body) {
    return `<svg viewBox="0 0 ${w} ${h}" role="img" aria-label="${esc(alt)}" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">${body}</svg>`;
  }

  // Alavanca de 1.ª, 2.ª ou 3.ª classe. a, r: braços potente e resistente (só para a proporção do desenho).
  function lever(s) {
    const cls = s.cls, a = s.a, rr = s.r;
    // Na 2.ª classe a resistência fica entre o apoio e a potência (r < a); na 3.ª é o contrário (a < r)
    if ((cls === 2 && rr >= a) || (cls === 3 && a >= rr)) console.warn('Esquema de alavanca incoerente com a classe', s);
    const left = cls === 1 ? -a : 0;
    const span = (cls === 1 ? rr : Math.max(a, rr)) - left;
    const u = 250 / span, x0 = 55;
    const xf = x0 - left * u;
    const xp = cls === 1 ? xf - a * u : xf + a * u;
    const xr = xf + rr * u;
    const top = 74;
    let b = `<rect x="${x0 - 14}" y="${top}" width="${250 + 28}" height="8" rx="2" class="f-body"/>`;
    b += `<polygon points="${r(xf)},82 ${r(xf - 10)},100 ${r(xf + 10)},100" class="f-fill-neu"/>`;
    b += text(xf, 113, 'apoio', { size: 9.5 });
    b += arrow(xr, 22, xr, top - 2, 'res') + text(xr, 14, s.fRes);
    if (cls === 1) {
      b += arrow(xp, 22, xp, top - 2, 'pot') + text(xp, 14, s.fPot);
    } else {
      b += arrow(xp, 134, xp, 84, 'pot') + text(xp, 148, s.fPot);
    }
    let y = cls === 1 ? 142 : 186;
    b += dim(xf, xp, y, s.bPot, 'pot');
    if (cls !== 1) y += 16;
    b += dim(xf, xr, y, s.bRes, 'res');
    if (s.total) {
      y += 18;
      b += dim(Math.min(xp, xf, xr), Math.max(xp, xf, xr), y, s.total, 'neu');
    }
    return svg(360, y + 12, s.alt || 'Esquema de uma alavanca com apoio, força potente e força resistente', b);
  }

  // Uma ou mais barras presas a um eixo, cada uma com uma força perpendicular a uma distância b.
  function moment(s) {
    let b = '', y = 0;
    s.items.forEach(it => {
      const len = 200 * it.len, xF = 50 + len;
      b += `<rect x="42" y="${y + 44}" width="${r(len + 8)}" height="8" rx="2" class="f-body"/>`;
      b += `<polygon points="50,${y + 52} 41,${y + 66} 59,${y + 66}" class="f-fill-neu"/>`;
      b += text(76, y + 64, 'eixo', { size: 9.5 });
      b += arrow(xF, y + 6, xF, y + 42, 'pot') + text(xF + 9, y + 20, it.F, { anchor: 'start' });
      b += dim(50, xF, y + 80, it.b, 'neu');
      y += 94;
    });
    return svg(360, y, s.alt || 'Esquema de forças aplicadas perpendicularmente a alavancas, a uma distância do eixo', b);
  }

  // Plano inclinado com um corpo e o seu peso (sem decompor o peso).
  function incline(s) {
    const th = s.angle * Math.PI / 180, c = Math.cos(th), sn = Math.sin(th);
    const x0 = 40, y0 = 168;
    const B = Math.min(260, 120 / Math.tan(th)), H = B * Math.tan(th), hyp = B / c;
    const t = 0.55 * hyp, hh = 18;
    const cx = x0 + t * c - hh * sn, cy = y0 - t * sn - hh * c;
    let b = `<polygon points="${x0},${y0} ${r(x0 + B)},${y0} ${r(x0 + B)},${r(y0 - H)}" class="f-ground"/>`;
    b += `<path d="M ${x0 + 42},${y0} A 42 42 0 0 0 ${r(x0 + 42 * c)},${r(y0 - 42 * sn)}" class="f-line" stroke-width="1.2"/>`;
    b += text(x0 + 48, y0 - 6, s.angleLabel || 'θ', { anchor: 'start', size: 11 });
    b += `<g transform="translate(${r(cx)},${r(cy)}) rotate(${-s.angle})"><rect x="-28" y="-${hh}" width="56" height="${hh * 2}" rx="3" class="f-body"/>` +
      (s.body ? text(0, 4, s.body, { size: 9.5 }) : '') + '</g>';
    b += arrow(cx, cy, cx, cy + 56, 'res') + text(cx + 8, cy + 56, 'P', { anchor: 'start', size: 12, bold: true });
    (s.notes || []).forEach((n, i) => { b += text(14, 18 + i * 15, n, { anchor: 'start', size: 10 }); });
    return svg(360, 184, s.alt || 'Corpo num plano inclinado com o seu peso', b);
  }

  // Barra sujeita a tração ou compressão, com cotas opcionais.
  function bar(s) {
    const pull = s.mode !== 'compression';
    const x0 = 96, len = 150, top = 60, h = 44, ym = top + h / 2;
    const body = s.dL || s.L ? len + (pull ? 20 : -20) : len;
    const x1 = x0 + body;
    let b = '';
    if (s.dL || s.L) {
      b += `<rect x="${x0}" y="${top}" width="${len}" height="${h}" rx="2" class="f-line" stroke-dasharray="4 3" stroke-width="1"/>`;
    }
    b += `<rect x="${x0}" y="${top}" width="${body}" height="${h}" rx="2" class="f-body"/>`;
    (s.inside || []).forEach((l, i) => { b += text((x0 + x1) / 2, top + 19 + i * 16, l, { size: 10 }); });
    if (pull) {
      b += arrow(x0, ym, x0 - 46, ym, 'pot') + arrow(x1, ym, x1 + 46, ym, 'pot');
    } else {
      b += arrow(x0 - 46, ym, x0, ym, 'pot') + arrow(x1 + 46, ym, x1, ym, 'pot');
    }
    b += text(x0 - 2, ym - 9, s.F, { anchor: 'end' }) + text(Math.max(x1, s.dL || s.L ? x0 + len : x1) + 2, ym - 9, s.F, { anchor: 'start' });
    if (s.dL) {
      const xa = Math.min(x1, x0 + len), xb = Math.max(x1, x0 + len);
      b += dim(xa, xb, top - 12, s.dL, 'res');
    }
    let y = top + h + 22;
    if (s.L0) { b += dim(x0, x0 + len, y, s.L0, 'neu'); y += 20; }
    if (s.L) { b += dim(x0, x1, y, s.L, 'res'); y += 20; }
    return svg(360, y + 4, s.alt || 'Barra sujeita a uma força axial', b);
  }

  // Viga apoiada nas duas extremidades com uma carga. Com a carga fora do centro as reações
  // são diferentes: usar reactL e reactR (react serve só para a carga ao centro).
  function beam(s) {
    const xL = 60, xR = 300, xc = s.pos ? xL + (xR - xL) * s.pos : 180;
    let b = `<rect x="40" y="70" width="280" height="8" rx="2" class="f-body"/>`;
    b += `<polygon points="${xL},78 ${xL - 10},96 ${xL + 10},96" class="f-fill-neu"/><polygon points="${xR},78 ${xR - 10},96 ${xR + 10},96" class="f-fill-neu"/>`;
    b += arrow(xc, 22, xc, 68, 'res') + text(xc, 14, s.load);
    const offCentre = s.pos !== undefined && s.pos !== 0.5;
    b += arrow(xL, 140, xL, 100, 'ok') + text(xL, 154, s.reactL || (offCentre ? 'R<sub>1</sub>' : s.react));
    b += arrow(xR, 140, xR, 100, 'ok') + text(xR, 154, s.reactR || (offCentre ? 'R<sub>2</sub>' : s.react));
    return svg(360, 162, s.alt || 'Viga apoiada nas duas extremidades com uma carga', b);
  }

  const builders = { lever, moment, incline, bar, beam };

  function render(spec) {
    if (!spec || !builders[spec.type]) return '';
    const cap = spec.caption === undefined ? 'Esquema ilustrativo, não está à escala.' : spec.caption;
    return `<figure class="study-figure question-figure">${builders[spec.type](spec)}${cap ? `<figcaption>${cap}</figcaption>` : ''}</figure>`;
  }

  return { render };
})();
