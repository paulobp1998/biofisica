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
    description: "Pressão hidrostática fundamental (P = ρ·g·h), Princípio de Pascal, Princípio de Arquimedes e aplicações clínicas à pressão arterial e venosa, coluna hidrostática gravitacional, fluidoterapia e punções."
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
// Tópicos 1 e 2 ativos e disponibilizados com 500 questões clínicas cada (total: 1.000 questões).
// Tópicos 3 a 8 temporariamente bloqueados pelo docente para foco do estudo.
const UNLOCKED_TOPIC_IDS = [1, 2];

// Banco integral de questões por tópico (totalmente preservado para desbloqueio futuro)
const ALL_TOPIC_COLLECTIONS = {
  1: TOPIC_1_QUESTIONS,
  2: TOPIC_2_QUESTIONS,
  3: typeof TOPIC_3_QUESTIONS !== 'undefined' ? TOPIC_3_QUESTIONS : [],
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
    title: "Tópico 1: Força, Estado de Equilíbrio, Equilíbrio de Forças e Alavancas",
    summary: `
      <ul>
        <li><strong>Conceito de Força:</strong> Grandeza vetorial caracterizada por módulo (intensidade), direção, sentido e ponto de aplicação. Unidade SI: Newton (N = kg·m/s²).</li>
        <li><strong>1.ª Lei de Newton (Inércia):</strong> Se ∑F = 0, o corpo permanece em repouso ou em Movimento Retilíneo e Uniforme (MRU, velocidade vetorial constante). Os corpos possuem inércia intrínseca (resistência à variação do movimento) proporcional à sua massa.</li>
        <li><strong>2.ª Lei de Newton (F = m·a):</strong> A aceleração adquirida é diretamente proporcional à força resultante aplicada e inversamente proporcional à massa do corpo (a = F/m). Transferir um utente bariátrico exige forças consideravelmente superiores para vencer a inércia e acelerar a massa com segurança.</li>
        <li><strong>3.ª Lei de Newton (Ação-Reação):</strong> Sempre que um corpo exerce uma força sobre outro, este exerce simultaneamente uma força de igual intensidade, mesma linha de ação e sentido oposto. Estas forças atuam <em>sempre em corpos diferentes</em> (nunca se anulam mutuamente).</li>
        <li><strong>Força Normal e Força de Atrito:</strong> A força normal (N) atua perpendicularmente à superfície de contacto. O atrito estático (Fa ≤ μs · N) impede o início do escorregamento relativo, enquanto o atrito cinético (Fa = μc · N) atua durante o movimento relativo. Na enfermagem, o calçado antiderrapante assegura elevado coeficiente de atrito estático com o solo hospitalar.</li>
        <li><strong>Centro de Gravidade e Estabilidade Postural:</strong> O Centro de Gravidade (CG) do corpo humano situa-se anatomicamente anterior à 2.ª vértebra sagrada (S2). A estabilidade postural máxima requer:
          <ul>
            <li>CG o mais rebaixado possível (flexão controlada dos joelhos);</li>
            <li>Base de sustentação (BS) ampla (pés afastados cerca de 30 a 40 cm na largura dos ombros);</li>
            <li>Linha de gravidade (vertical que passa no CG) estritamente centrada no interior da base de sustentação;</li>
            <li>Dispositivos de apoio (ex: andarilhos) ampliam a área poligonal da base de sustentação em 3 a 5 vezes, prevenindo quedas graves.</li>
          </ul>
        </li>
        <li><strong>Alavancas Biomecânicas e Momentos de Força:</strong>
          <ul>
            <li><em>Conceito de Alavanca:</em> Estrutura rígida que roda em torno de um eixo fixo (Fulcro ou Ponto de Apoio - PA), equilibrando uma Força Potente (FP, gerada pela contração muscular) contra uma Força Resistente (FR, peso do segmento corporal ou carga externa).</li>
            <li><em>Momento de Força (Torque, M = F · d):</em> Mede a capacidade rotacional de uma força em relação ao eixo. Depende da intensidade da força e do braço de alavanca (distância perpendicular da linha de ação da força ao fulcro). Em equilíbrio estático rotacional: ∑M = 0 (FP · bp = FR · br).</li>
            <li><em>1.ª Classe (Interfixas - Equilíbrio):</em> O fulcro situa-se entre a potência e a resistência (F - PA - R). Exemplo canónico no corpo humano: articulação atlanto-occipital (fulcro), onde os músculos extensores da nuca (potência) equilibram a tendência de queda anterior da cabeça (resistência gravitacional).</li>
            <li><em>2.ª Classe (Inter-resistentes - Vantagem de Força):</em> A resistência situa-se entre o fulcro e a potência (PA - R - F). O braço de potência é sempre maior que o de resistência (Vantagem Mecânica VM = bp / br > 1). Exemplo: apoio na ponta dos pés (apoio metatarsal como fulcro, peso corporal na tíbia como resistência e tríceps sural/gémeos como potência). Permite elevar todo o peso corporal com menor tensão muscular.</li>
            <li><em>3.ª Classe (Interpotentes - Velocidade e Amplitude):</em> A potência muscular situa-se entre o fulcro e a resistência (PA - F - R). O braço de potência é menor que o braço de resistência (VM < 1). É a alavanca mais prevalente no corpo humano (ex: flexão do antebraço pelo bicípite braquial com o cotovelo como fulcro). Sacrifica força em favor de grande velocidade angular e ampla amplitude de movimento das extremidades.</li>
          </ul>
        </li>
      </ul>
    `
  },
  {
    topicId: 2,
    title: "Tópico 2: Elasticidade dos Corpos, Resistência dos Materiais e Aplicação ao Sistema Osteomedular",
    summary: `
      <ul>
        <li><strong>Reologia:</strong> Ramo da física e biofísica que estuda as reações dos corpos à ação de forças deformadoras aplicadas.
          <ul>
            <li><em>Sólidos de Euclides:</em> Modelos teóricos indeformáveis; distância interpartículas rigorosamente invariável perante qualquer intensidade de força.</li>
            <li><em>Sólidos de Hooke:</em> Corpos perfeitamente elásticos; a deformação elástica é diretamente proporcional à intensidade da tensão mecânica aplicada, com restituição instantânea e integral da geometria original após remoção da força (ex: mola).</li>
            <li><em>Elasticidade:</em> Propriedade física responsável pelo retorno de um corpo à sua forma original aquando do fim da força deformadora.</li>
            <li><em>Corpos Plásticos:</em> Apresentam um limiar de escoamento a partir do qual sofrem deformação permanente irrecuperável, mantendo a forma deformada máxima mesmo após a remoção da carga (ex: plasticina).</li>
            <li><em>Corpos Viscosos:</em> A taxa de deformação é diretamente proporcional à tensão e ao tempo de aplicação da força; não restituem a sua forma original (ex: água, mel, plasma).</li>
            <li><em>Corpos Viscoelásticos:</em> Apresentam respostas elásticas e viscosas simultâneas dependentes do tempo de aplicação da tensão; dissipam energia mecânica sob forma de calor durante o ciclo de carga e descarga (histerese mecânica). Tecidos biológicos canónicos: cartilagem articular, ossos, discos intervertebrais, tendões e músculos.</li>
            <li><em>Corpos Plastoviscoelásticos:</em> Comportam-se como corpos elásticos sob pequenas tensões mecânicas transitórias; acima de um determinado limiar crítico de tensão, passam a comportar-se como materiais plásticos deformáveis permanentemente (ex: massa de pão, polímeros biológicos complexos).</li>
          </ul>
        </li>
        <li><strong>Cinco Grandes Deformações Mecânicas:</strong>
          <ul>
            <li><em>1. Compressão:</em> Atuação de forças convergentes axiais; ocorre encurtamento longitudinal do comprimento (L) e aumento compensatório da área de secção transversal (S). Exemplo canónico biológico: o fémur e os corpos vertebrais a suportar a carga corporal gravitacional diária.</li>
            <li><em>2. Tração:</em> Atuação de forças divergentes axiais; ocorre alongamento longitudinal do comprimento (L) e diminuição da área de secção transversal (S). Exemplo canónico: tração axial exercida sobre um tendão colagénico durante a contração muscular ativa.</li>
            <li><em>3. Flexão:</em> Deformação de eixos retilíneos em perfis curvos devido à ação de forças transversais (perpendiculares); gera compressão no lado côncavo e tração no lado convexo, existindo um <strong>plano neutro central</strong> onde a tensão mecânica a meio da espessura do osso é estritamente nula!</li>
            <li><em>4. Cisalhamento (Corte):</em> Deformação angular entre camadas planas paralelas induzida por forças tangenciais coplanares em sentidos opostos. Aplicação clínica direta em enfermagem: forças de atrito e cisalhamento na interface pele-lençol no leito hospitalar, cisalhando a microcirculação dérmica.</li>
            <li><em>5. Torção:</em> Deformação rotacional em torno do eixo longitudinal originada por um momento de força torsor (torque); a tensão no eixo geométrico central é nula e a tensão mecânica máxima concentra-se na periferia da parede do osso tubular oco.</li>
          </ul>
        </li>
        <li><strong>Lei Fundamental da Elasticidade (Robert Hooke, 1660):</strong>
          <ul>
            <li><em>Ut tensio, sic vis:</em> “Como a extensão, assim a força.” O alongamento (ou compressão) de um corpo elástico sujeito a solicitações mecânicas é diretamente proporcional à intensidade da força aplicada: <strong>F = k · ΔL</strong>.</li>
            <li><em>k (N/m):</em> Constante elástica que mede a rigidez mecânica de um corpo elástico em estudo. Aplica-se exclusivamente a corpos com geometria, tamanho e espessura definidos (e não apenas ao material intrínseco de que são constituídos).</li>
          </ul>
        </li>
        <li><strong>Lei de Hooke Generalizada e Módulo de Young (E):</strong>
          <ul>
            <li><strong>σ = E · ε</strong>, onde σ é a tensão mecânica normal (F / A, expressa em N/m² ou Pascal [Pa]), ε é a deformação relativa adimensional (ΔL / L₀) e E é o Módulo de Young (medida da rigidez intrínseca do material). Relação com a constante elástica do corpo: <strong>k = (E · A) / L₀</strong>.</li>
            <li><em>Aço (20 × 10¹⁰ N/m²):</em> Material de elevadíssima rigidez elástica; suporta tensões mecânicas extremas com deformação quase impercetível.</li>
            <li><em>Vidro (7 × 10¹⁰ N/m²):</em> Elevada rigidez teórica; contudo, apresenta fragilidade estrutural, atingindo a fratura catastrófica sem fase plástica.</li>
            <li><em>Prata (7,5 × 10¹⁰ N/m²):</em> Metal com elevada rigidez mecânica e ductilidade sob solicitações controladas.</li>
            <li><em>Osso (2 × 10¹⁰ N/m²):</em> Rigidez intrínseca dez vezes menor que a do aço metálico; confere estabilidade esquelética com excelente capacidade de amortecimento de choques mecânicos.</li>
            <li><em>Borracha (0,1 a 10 × 10⁷ N/m²):</em> Módulo extremamente baixo; exibe extensibilidade monumental e deformações reversíveis sob cargas diminutas.</li>
          </ul>
        </li>
        <li><strong>Aplicação da Elasticidade e Resistência ao Sistema Osteomedular:</strong>
          <ul>
            <li><em>Estrutura Bifásica do Tecido Ósseo:</em> O osso é um biomaterial compósito que conjuga a fase mineral inorgânica (cristais de hidroxiapatite [Ca₁₀(PO₄)₆(OH)₂], ~65% do peso seco), que confere dureza mineral e extraordinária resistência à <strong>compressão</strong>, com a matriz orgânica (fibras de colagénio tipo I, ~35%), que confere elasticidade, tenacidade e resistência à <strong>tração</strong>.</li>
            <li><em>Hierarquia de Resistência do Osso Cortical:</em> O osso humano apresenta anisotropia mecânica acentuada: resiste em grau máximo à <strong>compressão longitudinal</strong> (130 a 190 MPa), de forma intermédia à <strong>tração axial</strong> (80 a 130 MPa) e é muito vulnerável ao <strong>cisalhamento transversal e à torção</strong> (rotura a apenas 50 a 70 MPa, explicando por que movimentos de torção com o pé bloqueado causam fraturas espiroidais da tíbia).</li>
            <li><em>Arquitetura Tubular Oca dos Ossos Longos:</em> Os ossos longos diafisários (fémur, tíbia, úmero) possuem formato tubular oco com canal medular central. Esta morfologia concentra a massa óssea na periferia (onde as tensões de flexão e torção são máximas) e reduz a massa no eixo neutro (onde a tensão é nula), maximizando o momento de inércia da secção transversal e conferindo máxima resistência mecânica com peso biológico mínimo.</li>
            <li><em>Osso Cortical (Compacto) vs. Osso Trabecular (Esponjoso):</em> O osso cortical compacto (baixa porosidade, 5-10%) apresenta elevado Módulo de Young (~14-20 GPa) para sustentação de carga; o osso esponjoso trabecular (alta porosidade, 50-90% preenchida por medula óssea) tem menor módulo aparente (~0,1-4 GPa), funcionando como uma estrutura celular porosa com extraordinária capacidade viscoelástica de amortecimento elástico e absorção de impactos articulares nas epífises.</li>
            <li><em>Implicações Clínicas em Enfermagem:</em> Na osteoporose senil, a reabsorção trabecular acelerada no colo do fémur compromete severamente as linhas de transmissão de forças compressivas e de flexão, tornando o fémur proximal suscetível a fraturas graves com simples quedas da própria altura. Em artroplastias da anca, o fenómeno de <strong>blindagem de tensões (stress shielding)</strong> manifesta-se quando hastes femorais metálicas rígidas de aço (E = 20 × 10¹⁰ N/m²) absorvem a maioria das cargas mecânicas que deveriam incidir no osso cortical (E = 2 × 10¹⁰ N/m²); de acordo com a Lei de Wolff (o osso remodela-se em resposta às solicitações funcionais), a ausência de carga induz osteopenia e reabsorção óssea periprotética progressiva, aumentando o risco de soltura da prótese.</li>
          </ul>
        </li>
      </ul>
    `
  },
  {
    topicId: 3,
    title: "Tópico 3: Leis Fundamentais da Hidrostática",
    summary: `
      <ul>
        <li><strong>Conceito Fundamental de Pressão:</strong> Relação entre a intensidade da força perpendicular aplicada e a área da superfície de contacto: <strong>P = F / A</strong>. Unidade no SI: Pascal (1 Pa = 1 N/m²). Em contextos clínicos utiliza-se frequentemente o milímetro de mercúrio (1 mmHg ≈ 133,32 Pa) ou o centímetro de água (1 cmH₂O ≈ 98,06 Pa).</li>
        <li><strong>Lei Fundamental da Hidrostática (Pressão Hidrostática, P = ρ · g · h):</strong> A pressão no seio de um líquido incompressível em repouso aumenta linearmente com a profundidade (h), sendo diretamente proporcional à densidade do fluido (ρ), à aceleração da gravidade (g) e à altura da coluna líquida.</li>
        <li><strong>Princípio de Pascal:</strong> O acréscimo de pressão aplicado a um ponto de um fluido incompressível em repouso transmite-se integralmente e com igual intensidade a todos os pontos do líquido e às paredes do recipiente que o contém. Fundamenta o funcionamento de sistemas hidráulicos, seringas médicas e bombas de infusão.</li>
        <li><strong>Princípio de Arquimedes (Impulsão):</strong> Qualquer corpo imerso total ou parcialmente num fluido em repouso sofre a ação de uma força vertical de baixo para cima (impulsão, I = ρ_fluido · V_deslocado · g) igual ao peso do volume de fluido deslocado. Aplicação em hidroterapia e reabilitação motora para diminuir a sobrecarga mecânica articular dos utentes.</li>
        <li><strong>Aplicações Clínicas aos Cuidados de Enfermagem:</strong>
          <ul>
            <li><em>Efeito da Gravidade na Pressão Venosa:</em> Em decúbito dorsal horizontal, a pressão venosa sistémica é homogénea (~5 a 10 mmHg). Em ortostatismo (em pé), a coluna hidrostática de sangue (~1,3 m) adiciona um gradiente hidrostático (P = ρ·g·h) que eleva a pressão venosa nos membros inferiores para cerca de 90 mmHg, predispondo a estase venosa, edema e hipotensão ortostática na bipedestação súbita.</li>
            <li><em>Altura da Bolsa de Perfusão Intravenosa:</em> Para que uma infusão endovenosa ocorra por gravidade, a bolsa de soro deve ser suspensa a uma altura vertical (~80 a 100 cm acima do ponto de punção venosa) cuja pressão hidrostática exercida (ΔP = ρ·g·h) supere a pressão intravascular da veia periférica (~10 a 15 mmHg), garantindo o fluxo anterógrado e prevenindo o refluxo de sangue na linha de infusão.</li>
            <li><em>Dinâmica de Pressão em Seringas de Menor Calibre:</em> Pela relação P = F / A, para uma mesma força manual (F) exercida pelo polegar do enfermeiro no êmbolo, quanto menor for a área transversal (A) do êmbolo, exponencialmente maior será a pressão hidrostática interna gerada. Seringas pequenas (ex: 1 mL ou 3 mL) podem gerar pressões superiores a 200 psi (capazes de romper cateteres centrais como PICC, cujo limite de segurança é 25-30 psi), sendo mandatório o uso de seringas de 10 mL ou superiores para lavagem (*flush*) de acessos vasculares centrais.</li>
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
