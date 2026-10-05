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
    description: "Conceito de Mecânica e Força, Leis de Newton, Forças Fundamentais e Atrito, Condições de Equilíbrio, Alavancas Biomecânicas e Centro de Gravidade."
  },
  {
    id: 2,
    title: "Elasticidade e Resistência dos Materiais",
    shortTitle: "Elasticidade e Resistência",
    icon: "📐",
    description: "Reologia e comportamento mecânico dos materiais, sólidos de Euclides e Hooke, plasticidade e viscoelasticidade, forças de compressão, tração, flexão, cisalhamento e torção, Lei de Hooke (F = k·ΔL) e Módulo de Young (σ = E·ε)."
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


// =========================================================================
// CONTROLO DE ACESSO DO DOCENTE POR TÓPICO
// =========================================================================
// Define quais os tópicos atualmente acessíveis aos estudantes (1 a 8).
// Tópicos 1 e 2 ativos e disponibilizados com 500 questões clínicas cada (total: 1.000 questões).
// Tópicos 3 a 8 temporariamente bloqueados pelo docente para foco do estudo.
const UNLOCKED_TOPIC_IDS = [1, 2];

// Banco integral de questões por tópico (totalmente preservado para desbloqueio futuro)
const ALL_TOPIC_COLLECTIONS = {
  1: TOPIC_1_QUESTIONS,
  2: TOPIC_2_QUESTIONS,
  3: TOPIC_3_QUESTIONS,
  4: TOPIC_4_QUESTIONS,
  5: TOPIC_5_QUESTIONS,
  6: TOPIC_6_QUESTIONS,
  7: TOPIC_7_QUESTIONS,
  8: TOPIC_8_QUESTIONS
};

// Questões ativas disponibilizadas aos estudantes na plataforma
const QUESTIONS_DATA = UNLOCKED_TOPIC_IDS.flatMap(id => ALL_TOPIC_COLLECTIONS[id] || []);

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
        <li><strong>Centro de Gravidade e Estabilidade Postural:</strong> O Centro de Gravidade situa-se anterior a S2. A estabilidade máxima exige CG baixo (joelhos semifletidos), base de sustentação ampla (pés afastados 30-40 cm), linha de gravidade centrada e elevado atrito solo-calçado com calçado antiderrapante. Dispositivos de apoio (andarilhos) ampliam a base de sustentação em 3 a 5 vezes.</li>
      </ul>
    `
  },
  {
    topicId: 2,
    title: "Tópico 2: Elasticidade e Resistência dos Materiais",
    summary: `
      <ul>
        <li><strong>Reologia:</strong> Estuda as reações dos corpos a forças deformadoras.
          <ul>
            <li><em>Sólidos de Euclides:</em> Modelos teóricos indeformáveis; distância interpartículas invariável sob qualquer força.</li>
            <li><em>Sólidos de Hooke:</em> Deformação elástica diretamente proporcional à tensão; restituição integral da forma original após remoção da força (ex: mola).</li>
            <li><em>Elasticidade:</em> Propriedade responsável pelo retorno de um corpo à sua forma original aquando do fim da força deformadora.</li>
            <li><em>Corpos Plásticos:</em> Apenas ocorre deformação a partir de um determinado valor de tensão; mantêm permanentemente a deformação máxima (ex: plasticina).</li>
            <li><em>Corpos Viscosos:</em> Deformação proporcional à tensão e ao tempo de aplicação; não restituem a sua forma original (ex: água, mel).</li>
            <li><em>Corpos Viscoelásticos:</em> Deformação depende da tensão e do tempo de aplicação; dissipação de energia por histerese (ex: esponja, cartilagem, ossos e músculos).</li>
            <li><em>Corpos Plastoviscoelásticos:</em> Comportam-se como corpos elásticos sob pequenas tensões; acima desse limiar, comportam-se como corpos plásticos (ex: massa de pão).</li>
          </ul>
        </li>
        <li><strong>Cinco Grandes Deformações Mecânicas:</strong>
          <ul>
            <li><em>1. Compressão:</em> Forças convergentes; diminuição do comprimento (L) e aumento da área de secção (S). Exemplo canónico: fémur a suportar a carga corporal diária.</li>
            <li><em>2. Tração:</em> Forças divergentes; aumento do comprimento (L) e diminuição da área de secção (S). Exemplo canónico: tração do tendão pelo músculo esquelético.</li>
            <li><em>3. Flexão:</em> Deformação das arestas retilíneas em linhas curvas por ação de forças perpendiculares (transversais); plano neutro central onde a tensão a meio de um osso é nula!</li>
            <li><em>4. Cisalhamento:</em> Deformação entre superfícies planas paralelas por ação de forças tangenciais opostas paralelas. Aplicação clínica: atrito tecidual no leito hospitalar.</li>
            <li><em>5. Torção:</em> Rotação de um sólido em torno do seu eixo por ação de um momento de força (torque); tensão no eixo central é nula e tensão máxima concentrada na periferia do osso tubular oco.</li>
          </ul>
        </li>
        <li><strong>Lei Fundamental da Elasticidade (Robert Hooke, 1660):</strong>
          <ul>
            <li><em>Ut tensio, sic vis:</em> “Como a extensão, assim a força.” O alongamento das molas sujeitas a forças mecânicas é diretamente proporcional à intensidade das mesmas: <strong>F = k · ΔL</strong>.</li>
            <li><em>k (N/m):</em> Constante elástica que mede a rigidez do corpo elástico em estudo (aplica-se a corpos com tamanho e espessura definidos e não exclusivamente ao material de que são feitos).</li>
          </ul>
        </li>
        <li><strong>Lei de Hooke Generalizada e Módulo de Young (E):</strong>
          <ul>
            <li><strong>σ = E · ε</strong>, onde σ é a tensão mecânica (F/A, em N/m² ou Pa), ε é a deformação relativa (ΔL/L₀, adimensional) e E é o Módulo de Young (rigidez intrínseca do material). Relação: <strong>k = (E · A) / L₀</strong>.</li>
            <li><em>Aço (20 × 10¹⁰ N/m²):</em> Material extremamente rígido; suporta esforços massivos com mínima deformação estrutural.</li>
            <li><em>Vidro (7 × 10¹⁰ N/m²):</em> Elevada rigidez teórica; contudo, apresenta grande fragilidade e fratura sem deformação plástica.</li>
            <li><em>Prata (7,5 × 10¹⁰ N/m²):</em> Metal nobre com elevada rigidez mecânica e ductilidade sob solicitações controladas.</li>
            <li><em>Osso (2 × 10¹⁰ N/m²):</em> Módulo 10 vezes menor que o aço; confere rigidez com extraordinária capacidade elástica de amortecimento.</li>
            <li><em>Borracha (0,1 a 10 × 10⁷ N/m²):</em> Módulo extremamente baixo; sofre grandes deformações elásticas reversíveis sob cargas mínimas.</li>
            <li><em>Implicações Clínicas:</em> O fenómeno de <strong>blindagem de tensões (stress shielding)</strong> ocorre quando próteses de aço (10× mais rígidas que o osso) absorvem as cargas, provocando reabsorção óssea periprotética pela Lei de Wolff.</li>
          </ul>
        </li>
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
