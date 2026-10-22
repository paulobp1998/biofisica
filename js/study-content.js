/**
 * Conteúdo de estudo estruturado (Tópicos 1 e 2) e glossário de termos.
 *
 * - STUDY_BLOCKS: resumo teórico dividido em conceitos. Cada conceito tem fórmulas,
 *   corpo, erro comum e aplicação em enfermagem. Os conceitos são ligados às perguntas
 *   através de CONCEPT_RANGES (intervalos de IDs), sem alterar os ficheiros do banco.
 * - GLOSSARY: definições curtas pesquisáveis (Ctrl+K).
 */

const STUDY_BLOCKS = [
  // ---------------------------------------------------------------- Tópico 1
  {
    id: 't1-forca',
    topicId: 1,
    icon: '🧭',
    title: 'Força, massa e peso',
    formulas: [
      { expr: '1 N = 1 kg · m/s²', note: 'unidade SI de força' },
      { expr: 'P = m · g', note: 'peso (N) = massa (kg) × 9,8 m/s²' }
    ],
    example: 'Uma carga de 15 kg tem peso P = 15 × 9,8 = 147 N.',
    body: `
      <ul>
        <li><strong>Mecânica:</strong> estuda as relações entre os movimentos dos corpos e as forças a eles associadas.</li>
        <li><strong>Força:</strong> grandeza vetorial caracterizada por quatro elementos: módulo (intensidade), direção, sentido e ponto de aplicação. Unidade SI: newton (N).</li>
        <li><strong>Efeitos de uma força:</strong> uma força pode deformar um corpo; se a resultante não for nula, altera também o seu estado de movimento.</li>
        <li><strong>Forças colineares:</strong> com o mesmo sentido somam-se; com sentidos opostos subtraem-se.</li>
        <li><strong>Massa</strong> (kg, escalar) mede a quantidade de matéria e a inércia de um corpo e não depende do local. O <strong>peso</strong> (N, vetor) é a força com que a Terra atrai o corpo e varia com g (na Lua é cerca de 1/6 do peso na Terra).</li>
        <li><strong>Pressão</strong> é uma grandeza escalar: p = F / A, em pascal (Pa = N/m²). A força é perpendicular à superfície, mas a pressão não tem direção própria.</li>
      </ul>`,
    pitfall: 'Massa e peso não são a mesma grandeza: a massa mede-se em kg e o peso em N. Diz-se «carga de 15 kg», nunca «peso de 15 kg».',
    nursing: 'O dinamómetro manual mede a força de preensão do utente: o valor lido é uma força (em N; alguns aparelhos apresentam-na em kgf), com direção e sentido.'
  },
  {
    id: 't1-newton',
    topicId: 1,
    icon: '🍎',
    title: 'Leis de Newton',
    formulas: [
      { expr: '∑F = 0  ⇒  repouso ou MRU', note: '1.ª lei (inércia)' },
      { expr: 'F<sub>R</sub> = m · a', note: '2.ª lei; a = F<sub>R</sub> / m' },
      { expr: 'F<sub>AB</sub> = −F<sub>BA</sub>', note: '3.ª lei: ação e reação, em corpos diferentes' }
    ],
    example: 'Uma força resultante de 100 N sobre um carrinho de 20 kg dá a = 100 / 20 = 5 m/s².',
    body: `
      <ul>
        <li><strong>1.ª Lei (Inércia):</strong> a menos que atue uma força resultante não nula, um corpo em repouso permanece em repouso e um corpo em movimento mantém o <strong>MRU</strong> (Movimento Retilíneo e Uniforme: velocidade vetorial constante, aceleração nula). A inércia é a resistência a mudar de velocidade e a sua medida é a massa.</li>
        <li><strong>2.ª Lei (F = m · a):</strong> a aceleração é diretamente proporcional à força resultante e inversamente proporcional à massa. Com a mesma força, o corpo de maior massa acelera menos.</li>
        <li><strong>3.ª Lei (Ação-Reação):</strong> quando um corpo exerce uma força sobre outro, este exerce sobre o primeiro uma força de igual intensidade, mesma direção e sentido oposto. As duas forças atuam em corpos diferentes e, por isso, não se anulam.</li>
        <li><strong>Forças fundamentais:</strong> gravítica, eletromagnética, nuclear forte e nuclear fraca. Atrito e força normal são manifestações macroscópicas da interação eletromagnética entre as superfícies.</li>
      </ul>`,
    pitfall: 'Um corpo em MRU não precisa de força resultante para se manter em movimento. A normal N e o peso P atuam no mesmo corpo e não formam um par ação-reação.',
    nursing: 'Mobilizar um utente bariátrico exige forças maiores para vencer a inércia (m maior). Num travão brusco da ambulância, um ocupante sem cinto continua em movimento por inércia até ser parado pelo obstáculo; o cinto aplica a força de travagem sobre zonas resistentes do corpo (bacia e tórax), numa área maior e durante mais tempo do que o impacto contra o obstáculo.'
  },
  {
    id: 't1-atrito',
    topicId: 1,
    icon: '🛏️',
    title: 'Força normal, atrito e plano inclinado',
    formulas: [
      { expr: 'N = P', note: 'em plano horizontal, sem outras forças verticais' },
      { expr: 'F<sub>a</sub> ≤ μ<sub>e</sub> · N', note: 'atrito estático (máximo: μ<sub>e</sub> · N)' },
      { expr: 'F<sub>a</sub> = μ<sub>c</sub> · N', note: 'atrito cinético (em deslizamento)' },
      { expr: 'P<sub>n</sub> = P · cos θ  e  P<sub>t</sub> = P · sen θ', note: 'componentes do peso perpendicular e paralela ao plano' }
    ],
    example: 'Utente de 70 kg em plano horizontal: N = P = 70 × 9,8 = 686 N. Com μ<sub>e</sub> = 0,3, o atrito estático máximo é 0,3 × 686 ≈ 206 N.',
    body: `
      <ul>
        <li><strong>Força normal (N):</strong> força de contacto exercida pela superfície, perpendicular a ela. É a reação do apoio à ação do corpo sobre a superfície, e não a reação ao peso (esse par seria a atração do corpo sobre a Terra).</li>
        <li><strong>Atrito estático:</strong> opõe-se ao início do deslizamento e <em>adapta-se</em> à força aplicada, até ao valor máximo μ<sub>e</sub> · N. Se não houver tendência para deslizar, vale zero.</li>
        <li><strong>Atrito cinético:</strong> atua durante o deslizamento, com sentido oposto ao do movimento relativo, e vale μ<sub>c</sub> · N.</li>
        <li><strong>Plano inclinado:</strong> o peso decompõe-se numa componente perpendicular ao plano (P<sub>n</sub>, equilibrada por N) e numa componente paralela ao plano (P<sub>t</sub>). O corpo só desliza se P<sub>t</sub> exceder o atrito estático máximo.</li>
        <li><strong>Reduzir o atrito:</strong> lençóis de transferência ou folhas deslizantes diminuem o esforço ao deslocar um utente acamado.</li>
      </ul>`,
    pitfall: 'O que é maior do que o atrito cinético é o atrito estático máximo (μ<sub>e</sub> · N), e não o atrito estático em qualquer situação. P<sub>n</sub> e P<sub>t</sub> são perpendicular e paralela ao plano, não «vertical» e «horizontal».',
    nursing: 'Ao elevar a cabeceira da cama, P<sub>t</sub> tende a fazer o utente deslizar para os pés da cama, com atrito e cisalhamento na pele. O calçado antiderrapante assegura um bom coeficiente de atrito estático com o piso.'
  },
  {
    id: 't1-equilibrio',
    topicId: 1,
    icon: '⚖️',
    title: 'Equilíbrio, centro de gravidade e estabilidade',
    formulas: [
      { expr: '∑F = 0  e  ∑M = 0', note: 'equilíbrio completo de um corpo extenso' },
      { expr: 'linha de gravidade dentro da base de sustentação', note: 'condição de estabilidade' }
    ],
    body: `
      <ul>
        <li><strong>Equilíbrio mecânico:</strong> um corpo extenso só está em equilíbrio quando a resultante das forças <em>e</em> a soma dos momentos são nulas.</li>
        <li><strong>Equilíbrio estável:</strong> ao ser afastado, o corpo regressa à posição inicial (esfera no fundo de uma taça). <strong>Instável:</strong> afasta-se ainda mais (caneta apoiada na ponta). <strong>Indiferente:</strong> mantém a nova posição (bola num piso plano).</li>
        <li><strong>Centro de gravidade (CG):</strong> ponto de aplicação do peso do corpo. Num adulto em pé situa-se anterior à 2.ª vértebra sagrada (S2), e nas crianças pequenas é mais alto, porque a cabeça é proporcionalmente maior.</li>
        <li><strong>Base de sustentação (BS):</strong> região delimitada pelos pontos de apoio no solo, incluindo o espaço entre eles.</li>
        <li><strong>Maior margem de estabilidade:</strong>
          <ul>
            <li>CG o mais baixo possível (flexão controlada dos joelhos);</li>
            <li>base de sustentação ampla (pés afastados 30 a 40 cm, à largura dos ombros);</li>
            <li>linha de gravidade (vertical que passa no CG) bem centrada dentro da base de sustentação.</li>
          </ul>
        </li>
        <li><strong>Dispositivos de apoio</strong> (andarilhos, canadianas) ampliam a base de sustentação.</li>
      </ul>`,
    pitfall: 'F<sub>R</sub> = 0 não garante equilíbrio: um binário de forças tem F<sub>R</sub> = 0 mas M<sub>R</sub> ≠ 0, e faz o corpo rodar. É preciso F<sub>R</sub> = 0 e M<sub>R</sub> = 0.',
    nursing: 'Ao mobilizar utentes, o enfermeiro afasta os pés e flete os joelhos para baixar o CG e alargar a base de sustentação, e mantém a carga junto ao corpo para a linha de gravidade ficar dentro da base.'
  },
  {
    id: 't1-alavancas',
    topicId: 1,
    icon: '🦾',
    title: 'Momento de uma força e alavancas',
    formulas: [
      { expr: 'M = F · b', note: 'momento (N·m); b = braço da força' },
      { expr: 'F<sub>Potente</sub> · b<sub>Potente</sub> = F<sub>Resis.</sub> · b<sub>Resis.</sub>', note: 'equilíbrio de rotação (∑M = 0)' },
      { expr: 'VM = b<sub>Potente</sub> / b<sub>Resis.</sub>', note: 'vantagem mecânica' }
    ],
    example: 'Carga F<sub>Resis.</sub> = 10 N a b<sub>Resis.</sub> = 0,4 m do fulcro, equilibrada a b<sub>Potente</sub> = 0,1 m: F<sub>Potente</sub> = (10 × 0,4) / 0,1 = 40 N.',
    body: `
      <ul>
        <li><strong>Momento de uma força (torque):</strong> mede a capacidade de uma força provocar rotação em torno de um eixo. O <strong>braço</strong> (b) é a distância perpendicular da linha de ação da força ao eixo. Se a linha de ação passar pelo eixo, M = 0.</li>
        <li><strong>Alavanca:</strong> barra rígida que roda em torno de um <strong>fulcro</strong> (ponto de apoio), sob a ação de uma <strong>força potente</strong> F<sub>Potente</sub> (no corpo, a força muscular) e de uma <strong>força resistente</strong> F<sub>Resis.</sub> (peso do segmento ou da carga).</li>
        <li><strong>1.ª classe, interfixa</strong> (F<sub>Potente</sub> – apoio – F<sub>Resis.</sub>): o apoio fica no meio. Ex.: articulação atlanto-occipital, onde os músculos extensores da nuca equilibram a tendência de queda da cabeça para a frente.</li>
        <li><strong>2.ª classe, inter-resistente</strong> (apoio – F<sub>Resis.</sub> – F<sub>Potente</sub>): a resistência fica no meio e b<sub>Potente</sub> &gt; b<sub>Resis.</sub> (VM &gt; 1). Ex.: elevação na ponta dos pés. É um exemplo discutível: neste modelo a resistência é a força da tíbia sobre o tálus, que é maior do que o peso. Em relação ao tornozelo, o braço do tendão de Aquiles é bem menor do que o do peso, e a tensão no tendão ronda 2 a 2,5 vezes o peso corporal (com uma perna). Apesar de VM &gt; 1, não exige «pouco esforço».</li>
        <li><strong>3.ª classe, interpotente</strong> (apoio – F<sub>Potente</sub> – F<sub>Resis.</sub>): a potência fica no meio e b<sub>Potente</sub> &lt; b<sub>Resis.</sub> (VM &lt; 1). É a mais comum no corpo humano (bíceps a fletir o antebraço, com o cotovelo como fulcro): sacrifica força a favor da velocidade e da amplitude de movimento.</li>
      </ul>`,
    pitfall: 'O braço é a distância perpendicular da linha de ação ao fulcro, e não o comprimento do osso. Truque para as classes: a que fica «no meio» dá o nome (1.ª apoio, 2.ª resistência, 3.ª potência).',
    nursing: 'Uma carga mantida afastada do tronco aumenta o braço da resistência e cria um momento flexor sobre a coluna lombar, que os músculos extensores têm de equilibrar. Segurar o utente ou o material junto ao corpo reduz essa sobrecarga.'
  },

  // ---------------------------------------------------------------- Tópico 2
  {
    id: 't2-reologia',
    topicId: 2,
    icon: '🧪',
    title: 'Reologia: como os materiais respondem à força',
    formulas: [
      { expr: 'τ = η · γ̇', note: 'corpo viscoso: τ = tensão de corte (Pa); η = viscosidade (Pa·s); γ̇ = velocidade de deformação de corte (s⁻¹)' }
    ],
    body: `
      <ul>
        <li><strong>Reologia:</strong> estuda a reação dos corpos às forças deformadoras aplicadas.</li>
        <li><strong>Sólido de Euclides:</strong> modelo teórico indeformável (a distância entre partículas nunca varia).</li>
        <li><strong>Sólido de Hooke:</strong> perfeitamente elástico; a deformação é proporcional à tensão e é totalmente recuperada quando a força cessa (ex.: mola). <strong>Elasticidade</strong> é a propriedade de recuperar a forma original.</li>
        <li><strong>Corpo plástico:</strong> acima de um limiar de escoamento deforma-se de modo permanente (ex.: plasticina, argila).</li>
        <li><strong>Corpo viscoso:</strong> a velocidade de deformação é proporcional à tensão; a deformação acumula-se e não é recuperada (ex.: água, mel, plasma).</li>
        <li><strong>Corpo viscoelástico:</strong> resposta elástica e viscosa em simultâneo, dependente do tempo; dissipa energia sob a forma de calor num ciclo de carga e descarga (histerese). Ex.: cartilagem, osso, discos intervertebrais, tendões e músculos.</li>
        <li><strong>Fluência e relaxação:</strong> num corpo viscoelástico, sob carga constante a deformação aumenta com o tempo (fluência); sob deformação constante, a tensão diminui com o tempo (relaxação de tensões).</li>
        <li><strong>Corpo plastoviscoelástico:</strong> combina comportamento elástico, viscoso e plástico: recupera de deformações pequenas e breves, mas acima de um limiar crítico de tensão deforma-se de modo permanente e dependente do tempo (ex.: massa de pão).</li>
      </ul>`,
    pitfall: 'Elástico não significa «difícil de deformar»: elasticidade é recuperar a forma; a rigidez mede-se pelo módulo de Young. Um corpo plástico não recupera a forma; um viscoelástico recupera-a de forma dependente do tempo.',
    nursing: 'Os tecidos biológicos são viscoelásticos: tendões e cartilagem respondem de modo diferente a cargas rápidas e a cargas prolongadas, e por isso a mobilização e o alongamento devem ser graduais.'
  },
  {
    id: 't2-deformacoes',
    topicId: 2,
    icon: '🔩',
    title: 'As cinco deformações mecânicas',
    formulas: [],
    body: `
      <ul>
        <li><strong>1. Compressão:</strong> forças convergentes ao longo do eixo; o comprimento diminui e a secção aumenta. Ex.: fémur e corpos vertebrais a suportar o peso do corpo.</li>
        <li><strong>2. Tração:</strong> forças divergentes ao longo do eixo; o comprimento aumenta e a secção diminui. Ex.: tendão durante a contração muscular.</li>
        <li><strong>3. Flexão:</strong> forças transversais curvam a barra; o lado côncavo fica comprimido e o convexo traciona-se. No <strong>plano neutro</strong>, a meio da espessura, a tensão normal é nula.</li>
        <li><strong>4. Cisalhamento (corte):</strong> deformação angular entre camadas paralelas por forças tangenciais de sentidos opostos.</li>
        <li><strong>5. Torção:</strong> deformação rotacional em torno do eixo longitudinal por um momento torsor; a tensão é nula no eixo e máxima na periferia.</li>
      </ul>`,
    pitfall: 'Tração e compressão são ao longo do eixo; cisalhamento é paralelo às camadas. Forças divergentes = tração, forças convergentes = compressão.',
    nursing: 'Quando o utente desliza na cama com a cabeceira elevada, o atrito e o cisalhamento na interface pele-lençol deformam os tecidos e comprometem a microcirculação da pele, sendo um fator de risco para lesões por pressão.'
  },
  {
    id: 't2-hooke',
    topicId: 2,
    icon: '📏',
    title: 'Lei de Hooke e módulo de Young',
    formulas: [
      { expr: 'F = k · ΔL', note: 'lei de Hooke para uma mola (k em N/m)' },
      { expr: 'σ = F / A', note: 'tensão mecânica (Pa)' },
      { expr: 'ε = ΔL / L₀', note: 'deformação relativa (sem unidades)' },
      { expr: 'σ = E · ε', note: 'lei de Hooke generalizada (E em Pa)' },
      { expr: 'k = E · A / L₀', note: 'relação entre k e E' }
    ],
    example: 'Mola com k = 200 N/m e F = 10 N: ΔL = 10 / 200 = 0,05 m (5 cm). Força de 600 N sobre 2,0 × 10⁻⁴ m²: σ = 600 / 2,0×10⁻⁴ = 3,0 × 10⁶ Pa.',
    body: `
      <ul>
        <li><strong>Lei de Hooke (1678), «Ut tensio, sic vis»:</strong> o alongamento (ΔL) é proporcional à força aplicada, até ao limite de proporcionalidade (zona linear do regime elástico).</li>
        <li><strong>k</strong> mede a rigidez de um <em>corpo</em> com geometria definida: depende do material, do comprimento e da secção.</li>
        <li><strong>E (módulo de Young)</strong> mede a rigidez do <em>material</em>, independentemente da forma. Ordem crescente: borracha &lt; osso &lt; vidro &lt; aço.</li>
        <li><strong>Valores de referência:</strong> aço 20 × 10¹⁰ Pa; vidro 7 × 10¹⁰ Pa; prata 7,5 × 10¹⁰ Pa; osso 2 × 10¹⁰ Pa (cerca de dez vezes menor que o aço); borracha 0,1 a 10 × 10⁷ Pa.</li>
        <li><strong>Gráfico σ–ε:</strong> na zona linear, o declive é E. Ultrapassado o limite de proporcionalidade, a relação deixa de ser linear, mas o corpo pode ainda recuperar a forma até ao limite elástico. Acima deste fica com deformação permanente e, por fim, rompe.</li>
        <li><strong>Comparação:</strong> com a mesma tensão, o material de menor E deforma mais. Com a mesma força, uma secção menor dá tensão maior.</li>
      </ul>`,
    pitfall: 'k depende da geometria do corpo e E é uma propriedade do material. Ao converter: 1 cm² = 10⁻⁴ m², 1 MPa = 10⁶ Pa e 1 GPa = 10⁹ Pa. Não esquecer de passar cm para m.',
    nursing: 'Os materiais de próteses e fixações devem ter rigidez o mais próxima possível da do osso (o titânio, por exemplo, é bastante mais rígido). As meias de compressão e as ligaduras elásticas funcionam no regime elástico: se forem esticadas em excesso, deixam de recuperar a forma.'
  },
  {
    id: 't2-osso',
    topicId: 2,
    icon: '🦴',
    title: 'Osso e tecidos: aplicação ao sistema osteomedular',
    formulas: [],
    body: `
      <ul>
        <li><strong>Osso, material compósito:</strong> a fase mineral (hidroxiapatite, cerca de 65% do peso seco) dá dureza e resistência à <strong>compressão</strong>; a matriz orgânica (sobretudo colagénio tipo I, cerca de 35%) dá elasticidade, tenacidade e resistência à <strong>tração</strong>.</li>
        <li><strong>Anisotropia:</strong> as propriedades do osso dependem da direção da carga: o osso cortical é mais rígido e resistente segundo o eixo longitudinal do que na direção transversal.</li>
        <li><strong>Resistência consoante o tipo de carga:</strong> o osso cortical resiste melhor à compressão longitudinal (130 a 190 MPa), menos à tração axial (80 a 130 MPa) e muito pouco ao cisalhamento e à torção (rotura a 50 a 70 MPa). Daí as fraturas espiroidais da tíbia em torções com o pé bloqueado.</li>
        <li><strong>Ossos longos tubulares:</strong> o osso concentra-se na periferia, onde as tensões de flexão e torção são máximas, e falta junto ao plano neutro (flexão) e ao eixo central (torção), onde a tensão é nula. Obtém-se grande resistência com pouca massa.</li>
        <li><strong>Cortical vs. trabecular:</strong> o osso cortical é compacto e rígido (E cerca de 14 a 20 GPa); o trabecular é poroso (E aparente cerca de 0,1 a 4 GPa) e amortece os impactos nas epífises.</li>
        <li><strong>Lei de Wolff:</strong> o osso remodela-se em resposta às solicitações mecânicas. Sem carga (ex.: acamamento prolongado) perde massa; as trabéculas orientam-se segundo as linhas de força.</li>
        <li><strong>Osteoporose e prótese de anca:</strong> a perda trabecular fragiliza o colo do fémur. Uma haste metálica muito rígida pode absorver a carga que caberia ao osso (<em>blindagem de tensões</em>), com reabsorção óssea à volta da prótese.</li>
      </ul>`,
    pitfall: 'Mineral = compressão e dureza; colagénio = tração e tenacidade. Um osso sem colagénio fica rígido mas frágil, e um osso com pouco mineral fica flexível.',
    nursing: 'No utente acamado há perda de massa óssea por ausência de carga: o levante precoce e o apoio gradual, conforme indicação clínica, estimulam o osso. Em idosos com osteoporose, uma queda da própria altura pode fraturar o colo do fémur.'
  }
];

// Intervalos de IDs das perguntas associados a cada conceito.
// Tópico 1: IDs 1001 a 1200 (posição = id - 1000). Tópico 2: IDs 2201 a 2400 (posição = id - 2200).
const CONCEPT_RANGES = {
  't1-forca': [[1, 20], [61, 70], [91, 100]],
  't1-newton': [[21, 60], [101, 110]],
  't1-atrito': [[71, 90], [121, 130]],
  't1-equilibrio': [[111, 120], [181, 200]],
  't1-alavancas': [[131, 180]]
};

// Tópico 2: listas explícitas; as restantes perguntas pertencem a «Lei de Hooke e módulo de Young».
const T2_CONCEPT_ALLOCATION = (() => {
  const expand = list => list.flatMap(x => Array.isArray(x) ? Array.from({ length: x[1] - x[0] + 1 }, (_, i) => x[0] + i) : [x]);
  return {
    't2-reologia': expand([[1, 11], [16, 19], 59, 60, 70, 74, 79, 83, 86, 96, [162, 168], 184, [192, 195]]),
    't2-deformacoes': expand([15, 27, [41, 55], 57, 68, 69, 82, 126, [136, 144], 198]),
    't2-osso': expand([14, [101, 121], 135, 145, [147, 161], [178, 183], 196, 197])
  };
})();

function getConceptId(questionId) {
  const topic = Math.floor(questionId / 1000);
  if (topic === 1) {
    const pos = questionId - 1000;
    for (const [cid, ranges] of Object.entries(CONCEPT_RANGES)) {
      if (ranges.some(([a, b]) => pos >= a && pos <= b)) return cid;
    }
    return null;
  }
  if (topic === 2) {
    const pos = questionId - 2200;
    for (const [cid, list] of Object.entries(T2_CONCEPT_ALLOCATION)) {
      if (list.includes(pos)) return cid;
    }
    return 't2-hooke';
  }
  return null;
}

function getStudyBlock(conceptId) {
  return STUDY_BLOCKS.find(b => b.id === conceptId) || null;
}

// ------------------------------------------------------------------ Glossário
const GLOSSARY = [
  { t: 'Mecânica', d: 'Ramo da física que estuda as relações entre os movimentos dos corpos e as forças a eles associadas.', c: 't1-forca' },
  { t: 'Força', a: ['vetor', 'grandeza vetorial'], d: 'Grandeza vetorial, caracterizada por módulo, direção, sentido e ponto de aplicação. Unidade SI: newton (N).', c: 't1-forca' },
  { t: 'Newton (N)', a: ['unidade de força'], d: '1 N = 1 kg · m/s²: a força que comunica a um corpo de 1 kg a aceleração de 1 m/s².', c: 't1-forca' },
  { t: 'Massa', d: 'Medida da quantidade de matéria e da inércia de um corpo. Grandeza escalar, em kg, que não depende do local.', c: 't1-forca' },
  { t: 'Peso', a: ['P = m·g', 'gravidade'], d: 'Força com que a Terra atrai um corpo: P = m · g, em N (com g = 9,8 m/s²). Varia com o local, ao contrário da massa.', c: 't1-forca' },
  { t: 'Pressão', a: ['pascal'], d: 'p = F / A, em pascal (Pa = N/m²). É uma grandeza escalar.', c: 't1-forca' },
  { t: 'Dinamómetro', d: 'Instrumento que mede forças. Os de mola baseiam-se na lei de Hooke (alongamento proporcional da mola); os de preensão podem ser hidráulicos ou eletrónicos.', c: 't1-forca' },
  { t: 'Inércia', a: ['1.ª lei de Newton'], d: 'Tendência de um corpo a manter o repouso ou o MRU, sem força resultante. A massa mede-a.', c: 't1-newton' },
  { t: 'MRU', a: ['movimento retilíneo e uniforme'], d: 'Movimento retilíneo e uniforme: velocidade vetorial constante, aceleração nula e força resultante nula.', c: 't1-newton' },
  { t: 'Força resultante', a: ['F<sub>R</sub>', 'resultante'], d: 'Soma vetorial de todas as forças que atuam sobre um corpo. Determina a aceleração (F<sub>R</sub> = m · a).', c: 't1-newton' },
  { t: '2.ª lei de Newton', a: ['F = m·a', 'aceleração'], d: 'A aceleração é proporcional à força resultante e inversamente proporcional à massa: a = F<sub>R</sub> / m.', c: 't1-newton' },
  { t: 'Ação-reação', a: ['3.ª lei de Newton'], d: 'Forças de igual intensidade e sentidos opostos, aplicadas em corpos diferentes. Por isso não se anulam.', c: 't1-newton' },
  { t: 'Força normal', a: ['N', 'reação do apoio'], d: 'Força de contacto exercida por uma superfície, perpendicular a ela.', c: 't1-atrito' },
  { t: 'Atrito estático', d: 'Opõe-se ao início do deslizamento e adapta-se à força aplicada até ao máximo μ<sub>e</sub> · N.', c: 't1-atrito' },
  { t: 'Atrito cinético', a: ['atrito dinâmico'], d: 'Atua durante o deslizamento: F<sub>a</sub> = μ<sub>c</sub> · N. É em geral inferior ao atrito estático máximo.', c: 't1-atrito' },
  { t: 'Coeficiente de atrito', a: ['μ', 'mu'], d: 'Número sem unidades que depende das superfícies em contacto (μ<sub>e</sub> para estático, μ<sub>c</sub> para cinético).', c: 't1-atrito' },
  { t: 'Plano inclinado', a: ['rampa', 'P<sub>n</sub>', 'P<sub>t</sub>', 'componentes do peso'], d: 'O peso decompõe-se em P<sub>n</sub> = P · cos θ (perpendicular ao plano) e P<sub>t</sub> = P · sen θ (paralela ao plano).', c: 't1-atrito' },
  { t: 'Equilíbrio mecânico', a: ['equilíbrio', 'estática'], d: 'Condição de ∑F = 0 e ∑M = 0. O repouso é um caso particular.', c: 't1-equilibrio' },
  { t: 'Equilíbrio estável, instável e indiferente', a: ['estável', 'instável', 'indiferente'], d: 'Estável: regressa à posição inicial. Instável: afasta-se mais. Indiferente: mantém a nova posição.', c: 't1-equilibrio' },
  { t: 'Binário de forças', a: ['binário', 'par de forças'], d: 'Duas forças paralelas, iguais e de sentidos opostos, com linhas de ação distintas: F<sub>R</sub> = 0, mas M<sub>R</sub> ≠ 0, e produz rotação.', c: 't1-equilibrio' },
  { t: 'Centro de gravidade (CG)', a: ['centro de massa'], d: 'Ponto de aplicação do peso de um corpo. No adulto em pé fica anterior a S2.', c: 't1-equilibrio' },
  { t: 'Base de sustentação', a: ['BS', 'polígono de apoio'], d: 'Região delimitada pelos pontos de apoio no solo, incluindo o espaço entre eles.', c: 't1-equilibrio' },
  { t: 'Linha de gravidade', d: 'Vertical que passa pelo CG. Para haver estabilidade tem de cair dentro da base de sustentação.', c: 't1-equilibrio' },
  { t: 'Momento de uma força', a: ['torque', 'M = F·b', 'M<sub>Resis.</sub>', 'M<sub>Potente</sub>'], d: 'M = F · b, em N·m: capacidade de uma força para provocar rotação em torno de um eixo.', c: 't1-alavancas' },
  { t: 'Braço da força', a: ['braço de alavanca', 'b', 'b<sub>Resis.</sub>', 'b<sub>Potente</sub>'], d: 'Distância perpendicular da linha de ação da força ao eixo de rotação.', c: 't1-alavancas' },
  { t: 'Alavanca', a: ['fulcro', 'ponto de apoio'], d: 'Barra rígida que roda em torno de um fulcro sob ação de uma força potente e de uma força resistente.', c: 't1-alavancas' },
  { t: 'Força potente e força resistente', a: ['F<sub>Potente</sub>', 'F<sub>Resis.</sub>', 'potência', 'resistência'], d: 'F<sub>Potente</sub> é a força que move a alavanca (no corpo, a muscular); F<sub>Resis.</sub> é a que se opõe (peso do segmento ou da carga).', c: 't1-alavancas' },
  { t: 'Vantagem mecânica', a: ['VM'], d: 'VM = b<sub>Potente</sub> / b<sub>Resis.</sub>. Maior que 1 favorece a força; menor que 1 favorece a velocidade e a amplitude.', c: 't1-alavancas' },
  { t: 'Alavanca interfixa (1.ª classe)', a: ['1.ª classe', 'interfixa'], d: 'O apoio fica entre a potência e a resistência. Ex.: articulação atlanto-occipital.', c: 't1-alavancas' },
  { t: 'Alavanca inter-resistente (2.ª classe)', a: ['2.ª classe', 'inter-resistente'], d: 'A resistência fica entre o apoio e a potência (b<sub>Potente</sub> &gt; b<sub>Resis.</sub>). Ex.: carrinho de mão; elevação na ponta dos pés.', c: 't1-alavancas' },
  { t: 'Alavanca interpotente (3.ª classe)', a: ['3.ª classe', 'interpotente'], d: 'A potência fica entre o apoio e a resistência (b<sub>Potente</sub> &lt; b<sub>Resis.</sub>). Ex.: bíceps no cotovelo. É a mais comum no corpo.', c: 't1-alavancas' },
  { t: 'Reologia', d: 'Estudo das reações dos corpos às forças deformadoras (deformação e escoamento).', c: 't2-reologia' },
  { t: 'Elasticidade', a: ['elástico'], d: 'Propriedade de um corpo recuperar a forma original quando a força deformadora cessa.', c: 't2-reologia' },
  { t: 'Sólido de Euclides', a: ['indeformável'], d: 'Modelo teórico de sólido indeformável.', c: 't2-reologia' },
  { t: 'Sólido de Hooke', d: 'Corpo perfeitamente elástico: deformação proporcional à tensão e totalmente recuperável.', c: 't2-reologia' },
  { t: 'Corpo plástico', a: ['plasticidade', 'limiar de escoamento'], d: 'Acima de um limiar de escoamento, sofre deformação permanente.', c: 't2-reologia' },
  { t: 'Corpo viscoso', a: ['viscosidade'], d: 'A velocidade de deformação é proporcional à tensão e a deformação não é recuperada.', c: 't2-reologia' },
  { t: 'Corpo viscoelástico', a: ['viscoelasticidade', 'histerese'], d: 'Responde de forma elástica e viscosa em simultâneo, dependente do tempo, e dissipa energia em calor (histerese).', c: 't2-reologia' },
  { t: 'Tensão mecânica', a: ['σ', 'stress'], d: 'σ = F / A, em Pa: força por unidade de área da secção.', c: 't2-hooke' },
  { t: 'Deformação relativa', a: ['ε', 'deformação específica'], d: 'ε = ΔL / L₀: grandeza sem unidades.', c: 't2-hooke' },
  { t: 'Lei de Hooke', a: ['Ut tensio, sic vis', 'F = k·ΔL'], d: 'Até ao limite de proporcionalidade, a deformação é proporcional à força: F = k · ΔL, ou σ = E · ε.', c: 't2-hooke' },
  { t: 'Constante elástica (k)', a: ['k', 'rigidez da mola'], d: 'Rigidez de um corpo concreto, em N/m. Depende do material e da geometria.', c: 't2-hooke' },
  { t: 'Módulo de Young (E)', a: ['E', 'módulo de elasticidade'], d: 'Rigidez do material, em Pa: σ = E · ε. Borracha &lt; osso &lt; vidro &lt; aço.', c: 't2-hooke' },
  { t: 'Compressão', d: 'Forças convergentes ao longo do eixo: o comprimento diminui e a secção aumenta.', c: 't2-deformacoes' },
  { t: 'Tração', a: ['esforço de tração'], d: 'Forças divergentes ao longo do eixo: o comprimento aumenta e a secção diminui.', c: 't2-deformacoes' },
  { t: 'Flexão', d: 'Forças transversais curvam a barra: comprime um lado e traciona o outro.', c: 't2-deformacoes' },
  { t: 'Plano neutro', d: 'Na flexão, camada onde a tensão normal é nula.', c: 't2-deformacoes' },
  { t: 'Cisalhamento', a: ['corte', 'forças tangenciais'], d: 'Deformação angular entre camadas paralelas, por forças tangenciais de sentidos opostos.', c: 't2-deformacoes' },
  { t: 'Torção', a: ['momento torsor'], d: 'Deformação rotacional em torno do eixo longitudinal; a tensão é máxima na periferia.', c: 't2-deformacoes' },
  { t: 'Anisotropia', d: 'Propriedades que dependem da direção da carga. O osso cortical é mais rígido e resistente segundo o eixo longitudinal do que na direção transversal.', c: 't2-osso' },
  { t: 'Hidroxiapatite', a: ['fase mineral'], d: 'Mineral do osso (fosfato de cálcio) que dá dureza e resistência à compressão.', c: 't2-osso' },
  { t: 'Colagénio tipo I', a: ['colagénio', 'matriz orgânica'], d: 'Proteína da matriz óssea que dá elasticidade, tenacidade e resistência à tração.', c: 't2-osso' },
  { t: 'Osso cortical e trabecular', a: ['compacto', 'esponjoso', 'cortical', 'trabecular'], d: 'O cortical é compacto e rígido; o trabecular é poroso e amortece impactos.', c: 't2-osso' },
  { t: 'Lei de Wolff', a: ['remodelação óssea'], d: 'O osso remodela-se em resposta às solicitações mecânicas a que está sujeito.', c: 't2-osso' }
];
