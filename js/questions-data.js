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
    title: "Força, Estado de Equilíbrio e Equilíbrio de Forças",
    shortTitle: "Força e Equilíbrio",
    icon: "⚖️",
    description: "Leis de Newton, vetores de força, condições de repouso/MRU e biofísica da pressão na prevenção de úlceras por pressão."
  },
  {
    id: 2,
    title: "Alavancas, Elasticidade dos Corpos e Resistência dos Materiais",
    shortTitle: "Alavancas e Elasticidade",
    icon: "📐",
    description: "Classes de alavancas anatómicas, vantagem mecânica, Lei de Hooke, Módulo de Young e comportamento reológico."
  },
  {
    id: 3,
    title: "Aplicação da Elasticidade e Resistência ao Sistema Osteomuscular",
    shortTitle: "Sistema Osteomuscular",
    icon: "🦴",
    description: "Composição bifásica do osso (hidroxiapatite vs colagénio), solicitações mecânicas, fratura do fémur e bioenergética muscular."
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
    title: "Radiações, Raios X, Aplicações Terapêuticas e Diagnóstico",
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
    title: "Isótopos, Isóbaros, Isótonos e Aplicações Terapêuticas",
    shortTitle: "Isótopos e Terapêutica",
    icon: "💊",
    description: "Famílias nucleares, radioisótopos em medicina nuclear (I-131, Tc-99m, F-18) e cuidados de enfermagem com radiofármacos."
  }
];


// Agregação de todas as 400 questões científicas divididas por módulo
const QUESTIONS_DATA = [
  ...TOPIC_1_QUESTIONS,
  ...TOPIC_2_QUESTIONS,
  ...TOPIC_3_QUESTIONS,
  ...TOPIC_4_QUESTIONS,
  ...TOPIC_5_QUESTIONS,
  ...TOPIC_6_QUESTIONS,
  ...TOPIC_7_QUESTIONS,
  ...TOPIC_8_QUESTIONS
];

// Resumo conciso de cada tópico para revisão rápida do estudante
const TOPIC_SUMMARIES = [
  {
    topicId: 1,
    title: "Tópico 1: Força, Estado de Equilíbrio e Equilíbrio de Forças",
    summary: `
      <ul>
        <li><strong>Conceito de Força:</strong> Grandeza vetorial caracterizada por módulo (intensidade), direção, sentido e ponto de aplicação. Unidade SI: Newton (N = kg·m/s²).</li>
        <li><strong>1.ª Lei de Newton (Inércia):</strong> Se ∑F = 0, o corpo permanece em repouso ou em Movimento Retilíneo e Uniforme (MRU, velocidade vetorial constante).</li>
        <li><strong>2.ª Lei de Newton (F = m·a):</strong> A aceleração é diretamente proporcional à força resultante e inversamente proporcional à massa.</li>
        <li><strong>3.ª Lei de Newton (Ação-Reação):</strong> Pares de forças de igual intensidade, mesma linha de ação e sentidos opostos, atuando <em>sempre em corpos diferentes</em> (nunca se anulam mutuamente).</li>
        <li><strong>Pressão Mecânica e Enfermagem (P = F / A):</strong> Para o mesmo peso corporal (F), diminuir a área de apoio (A) nas proeminências ósseas (sacro, calcanhares) faz a pressão local disparar acima da pressão capilar (~32 mmHg), originando isquemia e lesões por pressão (escaras). Superfícies de redistribuição aumentam A para reduzir P.</li>
      </ul>
    `
  },
  {
    topicId: 2,
    title: "Tópico 2: Alavancas, Elasticidade dos Corpos e Resistência dos Materiais",
    summary: `
      <ul>
        <li><strong>Alavancas no Corpo Humano:</strong>
          <ul>
            <li><em>1.ª Classe (Interfixa):</em> Fulcro no meio (Potência - Apoio - Resistência). Ex: Articulação atlanto-occipital (cabeça/pescoço). Equilíbrio.</li>
            <li><em>2.ª Classe (Inter-resistente):</em> Resistência no meio (Apoio - Resistência - Potência). Ex: Fletir na ponta dos pés (tornozelo). Vantagem mecânica de força (VM > 1).</li>
            <li><em>3.ª Classe (Interpotente):</em> Potência no meio (Apoio - Potência - Resistência). Ex: Bicípite braquial ao fletir o cotovelo. Desvantagem de força (VM < 1), mas ganho espetacular de velocidade e amplitude.</li>
          </ul>
        </li>
        <li><strong>Reologia:</strong> Estudo da deformação da matéria: corpos indeformáveis (modelo teórico), sólidos elásticos (Hooke), corpos plásticos (deformação permanente irreversível) e corpos viscosos (escoamento sob tensão).</li>
        <li><strong>Lei de Hooke e Módulo de Young (σ = E · ε):</strong> A tensão σ (N/m²) é proporcional à deformação relativa ε (ΔL/L₀). O Módulo de Young E traduz a <em>rigidez elástica</em> do material.</li>
      </ul>
    `
  },
  {
    topicId: 3,
    title: "Tópico 3: Aplicação da Elasticidade e Resistência ao Sistema Osteomuscular",
    summary: `
      <ul>
        <li><strong>Estrutura Bifásica do Tecido Ósseo:</strong>
          <ul>
            <li><em>Fase Inorgânica (60-65%):</em> Cristais de Hidroxiapatite [Ca₁₀(PO₄)₆(OH)₂] - confere dureza e enorme resistência à <strong>compressão</strong>.</li>
            <li><em>Fase Orgânica (35%):</em> Fibras de Colagénio - confere flexibilidade, tenacidade e resistência à <strong>tração</strong>.</li>
          </ul>
        </li>
        <li><strong>Solicitações Mecânicas nos Ossos:</strong> O osso resiste muito bem à compressão axial, razoavelmente à tração e <em>muito mal à torção e ao cisalhamento transversal</em>.</li>
        <li><strong>Geometria Tubular:</strong> Os ossos longos ocos maximizam o momento de inércia da secção transversal, oferecendo muito maior resistência à flexão com peso corporal mínimo.</li>
        <li><strong>Fratura do Colo do Fémur:</strong> Na osteoporose senil, a reabsorção trabecular no colo femoral fragiliza a transmissão de cargas, provocando fraturas frequentes com quedas simples.</li>
        <li><strong>Músculo:</strong> Converte energia química (hidrólise de ATP) em trabalho mecânico (~20-25%) e calor corporal (~75-80%, essencial na termorregulação).</li>
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
        <li><strong>Número de Reynolds (Re = (ρ · v · d) / η):</strong> Adimensional. Re > 2000 favorece a turbulência. Aumenta com maior velocidade (v), maior diâmetro (d), maior densidade (ρ) e <em>menor viscosidade (η)</em>.</li>
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
        <li><strong>Força Nuclear Forte:</strong> Força extremamente intensa de curto alcance (< 10⁻¹³ cm) que mantém os nucleões unidos, superando a potente repulsão eletrostática de Coulomb entre protões. É atrativa e independente da carga.</li>
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
            <li><strong>Iodo-131 (¹³¹I):</strong> Emissor beta e gama. Tratamento e rastreio de cancro da tiroide e hipertiroidismo. Requer isolamento do doente e gestão estrita de urina/saliva.</li>
            <li><strong>Tecnécio-99m (⁹⁹ᵐTc):</strong> Emissor gama puro ideal (140 keV), meia-vida perfeita de 6 horas, sem partículas beta lesivas. Padrão de ouro em cintigrafias diagnósticas.</li>
            <li><strong>Flúor-18 (¹⁸F / ¹⁸F-FDG):</strong> Emissor de positrões (β⁺). A aniquilação com eletrões teciduais produz dois fotões opostos de 511 keV para tomografia PET no rastreio oncológico.</li>
          </ul>
        </li>
      </ul>
    `
  }
];
