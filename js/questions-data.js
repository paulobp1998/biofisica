/**
 * Banco de Perguntas Científicas - Biofísica para Enfermagem (1º Ano)
 * Conteúdo estritamente alinhado com o Programa da Unidade Curricular.
 *
 * Cada questão contém:
 * - id: Identificador único
 * - topicId: ID do tópico (1 a 8)
 * - question: Enunciado claro e cientificamente rigoroso
 * - options: Array com exatamente 4 opções de resposta
 * - correctIndex: Índice da resposta correta (0 a 3)
 * - explanation: Justificação científica detalhada da opção correta
 * - distractorAnalysis: Explicação do porquê de cada distrator estar incorreto
 * - nursingApplication: Aplicação clínica direta à prática diária de Enfermagem
 */

const TOPICS_DATA = [
  {
    id: 1,
    title: "Força, Estado de Equilíbrio, Equilíbrio de Forças e Alavancas",
    shortTitle: "Força, Equilíbrio e Alavancas",
    icon: "⚖️",
    description: "Conceito de Mecânica e Força, Leis de Newton, Forças Fundamentais e Atrito, Condições de Equilíbrio, Centro de Gravidade e Alavancas Biomecânicas (1.ª, 2.ª e 3.ª classe, braços de força, momentos e vantagem mecânica)."
  },
  {
    id: 2,
    title: "Elasticidade dos Corpos, Resistência dos Materiais e Aplicação ao Sistema Osteomedular",
    shortTitle: "Elasticidade e Sistema Osteomedular",
    icon: "📐",
    description: "Reologia e comportamento mecânico dos materiais, sólidos de Euclides e Hooke, plasticidade e viscoelasticidade, as 5 grandes deformações, Lei de Hooke (F = k·ΔL) e Módulo de Young (σ = E·ε), estrutura bifásica do osso e resistência do sistema osteomedular."
  },
  {
    id: 3,
    title: "Leis Fundamentais da Hidrostática",
    shortTitle: "Hidrostática",
    icon: "💧",
    description: "Pressão hidrostática fundamental (Δp = ρ·g·h), Princípio de Pascal, Princípio de Arquimedes e aplicações clínicas à pressão arterial e venosa, coluna hidrostática gravitacional, fluidoterapia e punções."
  },
  {
    id: 4,
    title: "Hidrodinâmica e Aplicações ao Sistema Circulatório",
    shortTitle: "Hidrodinâmica Circulatória",
    icon: "❤️",
    description: "Regimes laminar e turbulento, Número de Reynolds, viscosidade/hematócrito, Lei de Poiseuille e génese dos ruídos de Korotkoff."
  },
  {
    id: 5,
    title: "Radiações, Raios X, Meios de Diagnóstico e Aplicações Terapêuticas",
    shortTitle: "Radiações e Raios X",
    icon: "☢️",
    description: "Natureza dos Raios X, efeitos biológicos ionizantes, meios imagiológicos e princípios de radioproteção (ALARA) em enfermagem."
  },
  {
    id: 6,
    title: "Núcleo Atómico e Propriedades das Forças Nucleares",
    shortTitle: "Núcleo e Forças Nucleares",
    icon: "⚛️",
    description: "Estrutura nuclear, força nuclear forte vs repulsão eletrostática, estabilidade atómica e energia de ligação nuclear."
  },
  {
    id: 7,
    title: "Partículas α, β e Radiações Gama",
    shortTitle: "Partículas α, β e Gama",
    icon: "🛡️",
    description: "Poder de penetração e ionização de emissões alfa, beta e gama, tipos de blindagem e medidas de segurança clínica."
  },
  {
    id: 8,
    title: "Isótopos, Isóbaros, Isótonos e Respetivas Aplicações Terapêuticas",
    shortTitle: "Isótopos e Terapêutica",
    icon: "💊",
    description: "Famílias nucleares, radioisótopos em medicina nuclear (I-131, Tc-99m, F-18) e cuidados de enfermagem com radiofármacos."
  }
];


// =========================================================================
// CONTROLO DE ACESSO DO DOCENTE POR TÓPICO
// =========================================================================
// Define quais os tópicos atualmente acessíveis aos estudantes (1 a 8).
// Tópicos 1 e 2 ativos e disponibilizados (200 questões cada).
// Tópicos 3 a 8 temporariamente bloqueados pelo docente.
const UNLOCKED_TOPIC_IDS = [1, 2];

// Banco integral de questões por tópico (totalmente preservado para desbloqueio futuro)
const ALL_TOPIC_COLLECTIONS = {
  1: TOPIC_1_QUESTIONS,
  2: typeof TOPIC_2_QUESTIONS !== 'undefined' ? TOPIC_2_QUESTIONS : (typeof TOPIC2_QUESTIONS !== 'undefined' ? TOPIC2_QUESTIONS : []),
  3: typeof TOPIC_3_QUESTIONS !== 'undefined' ? TOPIC_3_QUESTIONS : [],
  4: TOPIC_4_QUESTIONS,
  5: TOPIC_5_QUESTIONS,
  6: TOPIC_6_QUESTIONS,
  7: TOPIC_7_QUESTIONS,
  8: TOPIC_8_QUESTIONS
};

// Função global para carregar IDs de questões excluídas/eliminadas pelo docente
function getExcludedQuestionIds() {
  try {
    if (typeof localStorage !== 'undefined') {
      const saved = localStorage.getItem('biofisica_excluded_question_ids');
      if (saved) {
        const arr = JSON.parse(saved);
        if (Array.isArray(arr)) return new Set(arr.map(Number));
      }
    }
  } catch (e) {}
  return new Set();
}

// Questões ativas disponibilizadas aos estudantes na plataforma (excluindo as eliminadas pelo docente)
const ALL_UNLOCKED_RAW = UNLOCKED_TOPIC_IDS.flatMap(id => ALL_TOPIC_COLLECTIONS[id] || []);
const QUESTIONS_DATA = ALL_UNLOCKED_RAW.filter(q => !getExcludedQuestionIds().has(q.id));

function refreshQuestionsDataExclusions() {
  const excluded = getExcludedQuestionIds();
  QUESTIONS_DATA.length = 0;
  ALL_UNLOCKED_RAW.forEach(q => {
    if (!excluded.has(q.id)) {
      QUESTIONS_DATA.push(q);
    }
  });
}

// Resumo conciso de cada tópico para revisão rápida do estudante
const TOPIC_SUMMARIES = [
  {
    topicId: 1,
    title: "Tópico 1: Força, Estado de Equilíbrio, Equilíbrio de Forças e Alavancas",
    // Conteúdo estruturado em blocos: ver STUDY_BLOCKS em js/study-content.js
    summary: ''
  },
  {
    topicId: 2,
    title: "Tópico 2: Elasticidade dos Corpos, Resistência dos Materiais e Aplicação ao Sistema Osteomedular",
    // Conteúdo estruturado em blocos: ver STUDY_BLOCKS em js/study-content.js
    summary: ''
  },
  {
    topicId: 3,
    title: "Tópico 3: Leis Fundamentais da Hidrostática",
    summary: `
      <ul>
        <li><strong>Conceito Fundamental de Pressão:</strong> Relação entre a intensidade da força perpendicular aplicada e a área da superfície de contacto: <strong>p = F / A</strong>. Unidade no SI: N/m². Em contextos clínicos utiliza-se frequentemente o milímetro de mercúrio (1 mmHg ≈ 133,32 N/m²) ou o centímetro de água (1 cmH₂O ≈ 98,06 N/m²).</li>
        <li><strong>Lei Fundamental da Hidrostática (Pressão Hidrostática, Δp = ρ · g · h):</strong> A pressão no seio de um líquido incompressível em repouso aumenta linearmente com a profundidade: a diferença de pressão entre dois pontos separados por um desnível h é Δp = ρ · g · h, proporcional à massa volúmica do fluido (ρ), à aceleração da gravidade (g) e ao desnível (h).</li>
        <li><strong>Princípio de Pascal:</strong> O acréscimo de pressão aplicado a um ponto de um fluido incompressível em repouso transmite-se integralmente e com igual intensidade a todos os pontos do líquido e às paredes do recipiente que o contém. Fundamenta o funcionamento de sistemas hidráulicos, seringas médicas e bombas de infusão.</li>
        <li><strong>Princípio de Arquimedes (Impulsão):</strong> Qualquer corpo imerso total ou parcialmente num fluido em repouso sofre a ação de uma força vertical de baixo para cima (impulsão, I = ρ<sub>fluido</sub> · V<sub>deslocado</sub> · g) igual ao peso do volume de fluido deslocado. Aplicação em hidroterapia e reabilitação motora para diminuir a sobrecarga mecânica articular dos utentes.</li>
        <li><strong>Aplicações Clínicas aos Cuidados de Enfermagem:</strong>
          <ul>
            <li><em>Efeito da Gravidade na Pressão Venosa:</em> Em decúbito dorsal horizontal, quase não há diferenças hidrostáticas entre a cabeça e os pés: a pressão venosa periférica ronda 10 a 15 mmHg e desce até cerca de 0 a 5 mmHg na aurícula direita. Em ortostatismo (em pé), a coluna hidrostática de sangue (~1,3 m) adiciona um gradiente hidrostático (Δp = ρ·g·h) que eleva a pressão venosa nos membros inferiores para cerca de 90 mmHg, predispondo a estase venosa, edema e hipotensão ortostática na bipedestação súbita.</li>
            <li><em>Altura da Bolsa de Perfusão Intravenosa:</em> Para que uma infusão endovenosa ocorra por gravidade, a bolsa de soro deve ser suspensa a uma altura vertical (~80 a 100 cm acima do ponto de punção venosa) cuja pressão hidrostática exercida (Δp = ρ·g·h) supere a pressão intravascular da veia periférica (~10 a 15 mmHg), garantindo o fluxo anterógrado e prevenindo o refluxo de sangue na linha de infusão.</li>
            <li><em>Dinâmica de Pressão em Seringas de Menor Calibre:</em> Pela relação p = F / A, para uma mesma força manual (F) exercida pelo polegar do enfermeiro no êmbolo, quanto menor for a área transversal (A) do êmbolo, inversamente maior será a pressão gerada no líquido (a pressão é inversamente proporcional à área). Por isso, uma seringa pequena (ex: 1 mL ou 3 mL) gera pressões bastante superiores às de uma seringa de 10 mL com a mesma força, o que obriga a cuidado redobrado na lavagem (*flush*) de acessos vasculares centrais, em que se recomenda seringas de 10 mL ou superiores, conforme o protocolo da instituição.</li>
          </ul>
        </li>
      </ul>
    `
  },
  {
    topicId: 4,
    title: "Tópico 4: Hidrodinâmica e Aplicações ao Sistema Circulatório",
    summary: `
      <ul>
        <li><strong>Regime Laminar vs Turbulento:</strong>
          <ul>
            <li><em>Laminar:</em> Escoamento em lâminas concêntricas sem mistura, perfil parabólico com velocidade máxima no centro e nula na parede. Silencioso e de baixo gasto energético.</li>
            <li><em>Turbulento:</em> Formação de turbilhões e vórtices desordenados. Ruidoso e com grande dissipação de energia sob forma de calor e som.</li>
          </ul>
        </li>
        <li><strong>Número de Reynolds (Re = (ρ · v · d) / η):</strong> Adimensional. Re > 2000 favorece a turbulência. Aumenta com maior velocidade (v), maior diâmetro (d), maior massa volúmica (ρ) e <em>menor viscosidade (η)</em>.</li>
        <li><strong>Viscosidade Sanguínea e Hematócrito:</strong> A viscosidade do sangue é ~3 a 4 vezes superior à da água, dependendo essencialmente do hematócrito (volume globular) e proteínas plasmáticas.</li>
        <li><strong>Lei de Poiseuille (R ∝ 1 / r⁴):</strong> A resistência vascular depende inversamente da 4.ª potência do raio. Reduzir o raio a metade aumenta a resistência vascular periférica 16 vezes!</li>
        <li><strong>Ruídos de Korotkoff na Medição da PA:</strong> Quando a braçadeira do esfigmomanómetro comprime a artéria, o jato de sangue a alta velocidade gera turbulência audível no estetoscópio entre a pressão sistólica e diastólica.</li>
      </ul>
    `
  },
  {
    topicId: 5,
    title: "Tópico 5: Radiações, Raios X, Aplicações Terapêuticas e Diagnóstico",
    summary: `
      <ul>
        <li><strong>Natureza dos Raios X:</strong> Radiação eletromagnética ionizante com pequeno comprimento de onda e alta energia fotónica (descoberta por Röntgen em 1895). Propaga-se à velocidade da luz.</li>
        <li><strong>Atenuação e Imagem:</strong> O osso (Z alto, cálcio) absorve fotões e surge branco (radiopaco); o pulmão (baixa densidade, ar) deixa passar os fotões e surge negro (radiotransparente).</li>
        <li><strong>Lei de Bergonié-Tribondeau:</strong> Células com alta atividade mitótica, elevado potencial reprodutivo e pouco diferenciadas são as mais radiossensíveis (medula óssea, mucosas, gónadas, embrião).</li>
        <li><strong>Radioproteção em Enfermagem (Princípio ALARA):</strong>
          <ul>
            <li><em>Tempo:</em> Minimizar o tempo na área de radiação.</li>
            <li><em>Distância:</em> Maximizar o afastamento (a intensidade decai com o inverso do quadrado da distância: I ∝ 1/d²; dobrar a distância reduz a radiação para 1/4!).</li>
            <li><em>Blindagem:</em> Uso rigoroso de aventais plúmbeos, biombos e protetores de tiroide.</li>
          </ul>
        </li>
      </ul>
    `
  },
  {
    topicId: 6,
    title: "Tópico 6: Núcleo Atómico e Propriedades das Forças Nucleares",
    summary: `
      <ul>
        <li><strong>Constituição do Átomo:</strong> Núcleo com protões (Z, carga +1) e neutrões (N, neutros). Número de Massa A = Z + N. Eletrões na nuvem orbital.</li>
        <li><strong>Força Nuclear Forte:</strong> Força extremamente intensa e de curto alcance (da ordem de 10⁻¹⁵ m, cerca de 1 a 3 fm) que mantém os nucleões unidos, superando a potente repulsão eletrostática de Coulomb entre protões. É atrativa a essas distâncias (torna-se repulsiva a distâncias ainda menores) e independente da carga.</li>
        <li><strong>Defeito de Massa e Energia de Ligação (E = Δm · c²):</strong> A massa de um núcleo ligado é menor que a soma dos nucleões livres. A energia equivalente é a energia necessária para desagregar o núcleo.</li>
        <li><strong>Estabilidade Nuclear:</strong> Em átomos com Z > 20, a relação de estabilidade N/Z cresce até ~1,5 para fornecer atração nuclear forte adicional contra a repulsão elétrica dos protões.</li>
        <li><strong>Postulados de Bohr:</strong> Transições eletrónicas entre órbitas quantizadas emitem ou absorvem fotões de energia E = h · f. Saltos para camadas internas no ânodo geram Raios X Característicos.</li>
      </ul>
    `
  },
  {
    topicId: 7,
    title: "Tópico 7: Partículas α, β e Radiações Gama",
    summary: `
      <ul>
        <li><strong>Partícula Alfa (α):</strong> Núcleo de Hélio (⁴₂He²⁺, 2p + 2n). Carga +2, massa ~4 u.m.a. Altíssimo poder de ionização (alto LET), mas <em>baixíssimo poder de penetração</em> (travada por folha de papel ou epiderme). Perigo letal se houver contaminação interna (inalação/ingestão).</li>
        <li><strong>Partícula Beta (β⁻ e β⁺):</strong> Eletrão ou positrão de alta velocidade. Carga -1 ou +1, massa muito pequena. Poder de penetração e ionização médios (travada por lâminas de alumínio ou placas de acrílico). Usada em braquiterapia e PET.</li>
        <li><strong>Radiação Gama (γ):</strong> Radiação eletromagnética pura (fotões sem massa nem carga). Emitida após desexcitação nuclear. <em>Altíssimo poder de penetração</em> (necessita de espessas blindagens de chumbo ou betão denso). Ideal para cintigrafias de diagnóstico.</li>
        <li><strong>Regra de Ouro de Proteção:</strong> Blindagem para radiação beta deve ser feita com plástico/acrílico (o chumbo com partículas beta rápidas geraria radiação de travagem - Raios X secundários indesejados).</li>
      </ul>
    `
  },
  {
    topicId: 8,
    title: "Tópico 8: Isótopos, Isóbaros, Isótonos e Respetivas Aplicações Terapêuticas",
    summary: `
      <ul>
        <li><strong>Famílias Nucleares:</strong>
          <ul>
            <li><em>Isótopos (mesmo Z):</em> Mesmo elemento químico, mesmo n.º de protões, massas A diferentes (ex: ¹³¹₅₃I e ¹²⁷₅₃I). Idêntico comportamento bioquímico!</li>
            <li><em>Isóbaros (mesmo A):</em> Mesma massa A, diferente número atómico Z (ex: ⁴⁰₁₉K e ⁴⁰₂₀Ca).</li>
            <li><em>Isótonos (mesmo N):</em> Mesmo número de neutrões N = A - Z (ex: ³⁰₁₄Si e ³¹₁₅P, ambos com N = 16).</li>
          </ul>
        </li>
        <li><strong>Radioisótopos Clínicos Chave:</strong>
          <ul>
            <li><strong>Iodo-131 (¹³¹I):</strong> Emissor beta e gama. Tratamento (ablação) e seguimento do carcinoma diferenciado da tiroide e tratamento do hipertiroidismo. Requer isolamento do doente e gestão estrita de urina/saliva.</li>
            <li><strong>Tecnécio-99m (⁹⁹ᵐTc):</strong> Emissor gama puro ideal (140 keV), meia-vida perfeita de 6 horas, sem partículas beta lesivas. Padrão de ouro em cintigrafias diagnósticas.</li>
            <li><strong>Flúor-18 (¹⁸F / ¹⁸F-FDG):</strong> Emissor de positrões (β⁺). A aniquilação com eletrões teciduais produz dois fotões opostos de 511 keV para tomografia PET no diagnóstico, estadiamento e avaliação da resposta ao tratamento oncológico.</li>
          </ul>
        </li>
      </ul>
    `
  }
];
