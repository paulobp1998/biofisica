/**
 * Tópico 5: Radiações, Raios X, Aplicações Terapêuticas e Meios de Diagnóstico
 * 50 Questões Científicas Rigorosas para o 1.º Ano de Enfermagem
 */

const TOPIC_5_QUESTIONS = [
  {
    id: 501,
    topicId: 5,
    question: "As radiações dividem-se fundamentalmente em ionizantes e não-ionizantes. Qual é a característica biofísica que define uma radiação como 'Ionizante'?",
    options: [
      "Possuir energia fotónica ou cinética suficiente (geralmente superior a cerca de 10 a 12 eV) para arrancar eletrões orbitais dos átomos da matéria biológica, criando pares de iões quimicamente reativos.",
      "Apresentar uma cor verde brilhante visível a olho nu na escuridão.",
      "Propagar-se exclusivamente na presença de água líquida com pH ácido.",
      "Aquecer os tecidos humanos sem alterar qualquer ligação atómica ou molecular."
    ],
    correctIndex: 0,
    explanation: "Uma radiação é classificada como ionizante quando a sua energia por fotão ou partícula supera a energia de ligação dos eletrões mais externos da matéria biológica (~10-12 eV, limiar de ionização da água e do carbono). Ao interagir com o tecido, arranca eletrões, convertendo átomos neutros estáveis em iões carregados positivos e eletrões livres, desencadeando reações químicas e quebras nas macromoléculas de DNA.",
    distractorAnalysis: [
      "Opção B confunde radiações invisíveis de alta energia com o fenómeno de fluorescência ou fosforescência quimioluminescente.",
      "Opção C é falsa; as radiações propagam-se no vácuo e em qualquer meio material.",
      "Opção D descreve o mecanismo das radiações NÃO-IONIZANTES de baixa frequência (como as micro-ondas e radiofrequência), que apenas produzem agitação térmica molecular."
    ],
    nursingApplication: "O enfermeiro identifica como radiações ionizantes hospitalares os Raios X (radiologia convencional, TAC, hemodinâmica/fluoroscopia) e os Raios Gama e partículas emitidas em Medicina Nuclear e Radioterapia. Todas exigem protocolos estritos de radioproteção para prevenir mutações celulares em profissionais e doentes."
  },
  {
    id: 502,
    topicId: 5,
    question: "A radiação eletromagnética é constituída por pacotes discretos de energia (quanta) designados por fotões. De acordo com a equação de Planck-Einstein (E = h · f = h · c / λ), como se correlaciona a energia fotónica com o comprimento de onda (λ) e a frequência (f)?",
    options: [
      "A energia do fotão é diretamente proporcional à sua frequência (f) e inversamente proporcional ao seu comprimento de onda (λ); radiações de curtíssimo comprimento de onda (como os Raios X e Gama) possuem altíssima energia fotónica.",
      "A energia é diretamente proporcional ao comprimento de onda, pelo que as ondas de rádio longas têm maior energia que os Raios X.",
      "A energia de todos os fotões é rigorosamente constante e independente da frequência.",
      "A velocidade do fotão no vácuo varia proporcionalmente com a temperatura do quarto."
    ],
    correctIndex: 0,
    explanation: "A fórmula de Max Planck e Albert Einstein estabelece que E = h · f, onde h é a constante de Planck (6,626 × 10⁻³⁴ J·s). Como a velocidade da luz é c = λ · f => f = c / λ, temos E = (h · c) / λ. Assim, quanto menor o comprimento de onda λ (Raios X com λ de 0,01 a 10 nanómetros), maior é a frequência f e colossal é a energia individual de cada fotão (dezenas a centenas de keV), conferindo-lhe poder ionizante letal para o DNA.",
    distractorAnalysis: [
      "Opção B afirma o inverso matemático da relação E ∝ 1/λ.",
      "Opção C ignora a quantização da radiação no espectro eletromagnético.",
      "Opção D viola a constante universal da velocidade da luz no vácuo (c ≈ 3 × 10⁸ m/s)."
    ],
    nursingApplication: "Esta relação biofísica explica por que os telemóveis e o Wi-Fi (micro-ondas de grande comprimento de onda e baixa energia fotónica de micro-eV) são incapazes de romper o DNA humano, ao passo que uma única exposição a Raios X de alto kvP (alta frequência e comprimento de onda subnanométrico) carrega fotões com energia suficiente para quebrar ligações fosfodiéster dos cromossomas."
  },
  {
    id: 503,
    topicId: 5,
    question: "No tubo de produção de Raios X clássico (Tubo de Coolidge), qual é a percentagem aproximada de energia cinética dos eletrões bombardeados contra o ânodo de tungsténio que é efetivamente convertida em Raios X úteis?",
    options: [
      "Apenas cerca de 1% (ou menos), sendo os restantes 99% dissipados sob a forma de calor térmico no ânodo.",
      "Aproximadamente 99% de Raios X e apenas 1% de calor.",
      "Exatamente 50% de Raios X e 50% de luz solar visível.",
      "100% de conversão direta em fotões sem qualquer libertação térmica."
    ],
    correctIndex: 0,
    explanation: "O processo de produção de Raios X por colisão eletrónica em alvos metálicos pesados é extremamente ineficiente do ponto de vista energético: cerca de 99% das colisões dos eletrões com a nuvem eletrónica dos átomos de tungsténio resultam em excitações térmicas atómicas que se dissipam como calor colossal no ânodo. Apenas cerca de 0,5% a 1% da energia cinética dos eletrões dá origem a fotões de Raios X por Bremsstrahlung ou emissão característica.",
    distractorAnalysis: [
      "Opção B inverte drasticamente o rendimento físico do tubo de Coolidge.",
      "Opção C propõe uma partição irreal que violaria a eletrodinâmica quântica do tungsténio.",
      "Opção D descreveria um emissor ideal perfeito sem entropia térmica impossível."
    ],
    nursingApplication: "Esta colossal produção de calor (99%) explica por que os tubos de Raios X e de TAC possuem pesados ânodos giratórios banhados em óleo dielétrico de refrigeração e sistemas de circulação de água: se o enfermeiro ou técnico disparar exposições repetidas de alta voltagem sem respeitar os tempos de arrefecimento da ampola, o ânodo funde-se e o equipamento avaria irreversivelmente."
  },
  {
    id: 504,
    topicId: 5,
    question: "No espetro de radiação emitido por um tubo de Raios X, como é gerada a chamada 'Radiação de Travagem' (Bremsstrahlung)?",
    options: [
      "Pela desaceleração e deflexão rápida de eletrões incidentes de alta energia cinética ao passarem próximo do campo elétrico positivo do núcleo dos átomos de tungsténio do ânodo, perdendo energia cinética que é emitida sob a forma de um fotão X de espetro contínuo.",
      "Pelo choque frontal de dois protões dentro do filamento do cátodo.",
      "Pela fusão nuclear dos núcleos de hidrogénio no interior do vácuo do tubo.",
      "Pela passagem de corrente contínua através da pele do doente."
    ],
    correctIndex: 0,
    explanation: "Bremsstrahlung (do alemão 'radiação de travagem') ocorre quando um eletrão acelerado penetra na nuvem eletrónica do alvo de tungsténio e passa junto ao núcleo de carga positiva (+74e). A atração coulombiana curva a trajetória do eletrão e desacelera-o bruscamente. Pela eletrodinâmica clássica, qualquer carga elétrica acelerada/desacelerada emite radiação eletromagnética: a perda de energia cinética do eletrão surge como um fotão X. Como a aproximação ao núcleo pode ocorrer a qualquer distância, o espetro emitido é contínuo, com energia máxima até ao valor de pico da voltagem (kVp).",
    distractorAnalysis: [
      "Opção B é incorreta; o feixe do tubo é constituído por eletrões negativos emitidos termionicamente, não por protões acelerados.",
      "Opção C descreveria uma reação termonuclear estelar de fusão.",
      "Opção D descreveria eletrocussão iatrogénica sem relação com a física interna da ampola de vácuo."
    ],
    nursingApplication: "A radiação de travagem é responsável por mais de 80% a 90% de todos os fotões do feixe primário numa radiografia convencional de tórax. O conhecimento do kVp ajustado pelo operador permite ao enfermeiro compreender a penetrância do feixe: maior kVp gera fotões Bremsstrahlung mais energéticos capazes de atravessar doentes obesos sem subexposição."
  },
  {
    id: 505,
    topicId: 5,
    question: "O segundo mecanismo de produção no tubo de Raios X é a 'Radiação Característica'. Como se origina este tipo de fotão monoenergético discreto?",
    options: [
      "Um eletrão incidente ejeta um eletrão da camada mais interna (camada K) do átomo do ânodo; a vaga aberta é imediatamente preenchida por um eletrão de uma camada mais externa (camadas L ou M), emitindo-se um fotão com energia rigorosamente igual à diferença entre os dois níveis energéticos atómicos (E = E_L - E_K).",
      "Pela quebra espontânea do núcleo de tungsténio em dois átomos de hélio.",
      "Pela evaporação de óleo térmico no interior da campânula de chumbo.",
      "Pelo reflexo da luz ambiente no vidro do tubo de Coolidge."
    ],
    correctIndex: 0,
    explanation: "A radiação característica ocorre quando a energia cinética do eletrão bombardeador supera a energia de ligação do eletrão da camada K do tungsténio (~69,5 keV). O eletrão orbital é arrancado. O átomo ionizado desexcita-se em picosssegundos: um eletrão da camada L (energia ~12 keV) ou M cai para a camada K vaga. A transição emite um fotão X com energia discreta fixa e invariável característica do tungsténio (K_alfa = 69,5 - 12,1 = 57,4 keV; K_beta ≈ 67-69 keV), formando picos finos sobrepostos ao contínuo de Bremsstrahlung.",
    distractorAnalysis: [
      "Opção B descreve fissão nuclear ou decaimento alfa, inexistente num ânodo de tungsténio estável (W-74).",
      "Opção C confunde mecanismos elétricos com avarias de isolamento dielétrico.",
      "Opção D confunde ótica geométrica visível com transições atómicas quânticas de raios X."
    ],
    nursingApplication: "Na mamografia (rastreio do cancro da mama), utilizam-se tubos de Raios X com ânodos de Molibdénio (Mo) ou Ródio (Rh) em vez de tungsténio: as radiações características do molibdénio têm energias mais baixas e precisas (~17,5 a 19,6 keV), ideais para maximizar a diferenciação de contraste entre tecido glandular denso, gordura e microcalcificações tumorais mamárias."
  },
  {
    id: 506,
    topicId: 5,
    question: "A atenuação da intensidade de um feixe monoenergético de Raios X ao atravessar um tecido absorvedor homogéneo de espessura x segue uma lei de decaimento exponencial: I = I₀ · e^(-μ·x). O que representa a grandeza física μ (mi)?",
    options: [
      "O Coeficiente de Atenuação Linear do material (unidade: cm⁻¹ ou m⁻¹), que quantifica a fração de fotões removida do feixe por unidade de espessura do tecido absorvedor.",
      "O coeficiente de atrito cinético do sangue no vaso.",
      "A massa total do esqueleto do doente dividida pelo tempo.",
      "A velocidade da luz medida dentro do osso esponjoso."
    ],
    correctIndex: 0,
    explanation: "Na equação I = I₀ · e^(-μ·x), I₀ é a intensidade incidente e I a transmitida após espessura x. O parâmetro μ é o Coeficiente de Atenuação Linear: depende criticamente do número atómico do material (Z), da sua densidade de massa (ρ) e da energia dos fotões incidentes (E). Quanto maior for μ (como no tecido ósseo compacto ou chumbo), mais rapidamente a radiação é atenuada e menor é a fração transmitida através da espessura x.",
    distractorAnalysis: [
      "Opção B confunde ótica radiológica com coeficientes mecânicos de atrito de superfícies.",
      "Opção C inventa uma razão sem qualquer sentido na física da radiação.",
      "Opção D descreve a refração eletromagnética, não a taxa de atenuação fotónica exponencial."
    ],
    nursingApplication: "A enorme diferença nos coeficientes de atenuação linear μ entre o ar pulmonar, o músculo cardíaco e o osso costal é a base física da imagem radiológica: estruturas com alto μ atenuam os Raios X e projetam uma 'sombra' branca na película (radiopacas), enquanto estruturas com baixo μ deixam passar os fotões enegrecendo o detetor (radiotransparentes)."
  },
  {
    id: 507,
    topicId: 5,
    question: "O conceito de 'Camada Hemirredutora' (HVL - Half-Value Layer) na física das radiações define-se como:",
    options: [
      "A espessura de um determinado material absorvedor necessária para reduzir a intensidade do feixe de radiação incidente exatamente para metade do seu valor inicial (I = I₀ / 2).",
      "A quantidade de chumbo necessária para bloquear 100% de todos os fotões existentes no universo.",
      "A camada de pele que sofre eritema após 1 hora de exposição radiológica.",
      "A espessura da película de plástico que envolve o detetor digital de Raios X."
    ],
    correctIndex: 0,
    explanation: "A Camada Hemirredutora (HVL) é calculada fazendo I = I₀/2 na lei exponencial: I₀/2 = I₀ · e^(-μ·HVL) => ln(1/2) = -μ·HVL => HVL = ln(2) / μ ≈ 0,693 / μ. Quanto mais penetrante ('duro') for o feixe de radiação, maior será a sua HVL. Duas HVLs reduzem a intensidade para 1/4 (25%); três HVLs reduzem para 1/8 (12,5%); e dez HVLs reduzem a intensidade para menos de 0,1% do valor incidente.",
    distractorAnalysis: [
      "Opção B é impossível porque a atenuação exponencial é assintótica (teoricamente nunca atinge o zero absoluto).",
      "Opção C confunde parâmetros físicos de blindagem com efeitos biológicos cutâneos da radiação (dose eritema).",
      "Opção D refere-se ao invólucro do chassi radiográfico sem relação com o valor hemirredutor de blindagem."
    ],
    nursingApplication: "Na construção de paredes de salas de Raios X e biombos protetores hospitalares, a espessura do chumbo ou betão baritado é calculada pelos físicos médicos em múltiplos de HVL para garantir que os postos de enfermagem vizinhos recebam menos de 1 mSv por ano, assegurando ambiente de trabalho seguro para as equipas de saúde."
  },
  {
    id: 508,
    topicId: 5,
    question: "Na faixa de baixas e médias energias diagnósticas dos Raios X (20 a 100 keV), ocorrem duas interações fundamentais dos fotões com a matéria: o 'Efeito Fotoelétrico' e o 'Efeito de Dispersão de Compton'. Qual é a característica biofísica do Efeito Fotoelétrico que o torna o responsável primordial pelo CONTRASTE nas radiografias?",
    options: [
      "A probabilidade de ocorrência do Efeito Fotoelétrico é diretamente proporcional ao CUBO do número atómico do material (Z³) e inversamente proporcional ao cubo da energia (1/E³), permitindo diferenciar fortemente o osso rico em cálcio (Z=20) dos tecidos moles (Z_médio ≈ 7,4).",
      "O Efeito Fotoelétrico ocorre exclusivamente em gases nobres e nunca no corpo humano.",
      "O Efeito Fotoelétrico produz apenas fotões dispersos que borram a imagem radiológica.",
      "A absorção fotoelétrica independe totalmente da composição química do tecido."
    ],
    correctIndex: 0,
    explanation: "No Efeito Fotoelétrico, o fotão X incidente colide com um eletrão interno e é TOTALMENTE absorvido, transferindo toda a sua energia e ejetando o fotoeletrão sem emitir radiação dispersa. A probabilidade por unidade de volume é proporcional a ρ · (Z/E)³. Como o cálcio do osso tem Z = 20 e os tecidos moles têm Z_médio ≈ 7,4, a absorção no osso é cerca de (20 / 7,4)³ ≈ 20 vezes maior por grama! Essa disparidade de absorção total cria a diferenciação nítida de contraste radiológico entre ossos e tecidos moles.",
    distractorAnalysis: [
      "Opção B é falsa; o efeito fotoelétrico é a base da radiologia médica humana.",
      "Opção C descreve o Efeito Compton, que espalha radiação e degrada a qualidade da imagem.",
      "Opção D contradiz a dependência cúbica crucial no número atómico Z³."
    ],
    nursingApplication: "A dependência em Z³ justifica o uso de meios de contraste iodados (Z=53 para o iodo) ou sulfato de bário (Z=56 para o bário) que o enfermeiro administra em urografias, angiografias ou TAC: com Z colossal, estes compostos absorvem avidamente os fotões por efeito fotoelétrico, destacando a árvore vascular ou o lúmen digestivo em branco brilhante."
  },
  {
    id: 509,
    topicId: 5,
    question: "Ao contrário do efeito fotoelétrico, o 'Efeito de Dispersão de Compton' envolve a colisão de um fotão X com um eletrão livre ou fracamente ligado da camada mais externa, ejetando o eletrão e desviando o fotão com menor energia numa trajetória oblíqua. Porque é que o Efeito Compton constitui a principal fonte de perigo radiológico para o enfermeiro no bloco operatório?",
    options: [
      "Porque o corpo do doente atua como uma fonte secundária que espalha fotões Compton em todas as direções espaciais (radiação de dispersão), atingindo a equipa de enfermagem que se encontra ao lado da mesa cirúrgica.",
      "Porque o Efeito Compton destrói instantaneamente o chumbo dos aventais de proteção.",
      "Porque os fotões Compton tornam o ar da sala radioativo durante vários dias.",
      "Porque o efeito só atua em profissionais de enfermagem, poupando os médicos cirurgiões."
    ],
    correctIndex: 0,
    explanation: "Na faixa de 70 a 120 kVp, a dispersão de Compton é o mecanismo predominante no tecido humano (Z baixo e rica densidade de eletrões externos). O feixe primário emitido pelo tubo atinge o doente; parte dos fotões não é absorvida nem atravessa em linha reta, sofrendo dispersão Compton em ângulos laterais e retrógrados. O doente comporta-se como um verdadeiro emissor difuso de radiação secundária espalhada para a sala, sendo esta a principal responsável pela dose ocupacional de enfermeiros que auxiliam procedimentos cirúrgicos ou de hemodinâmica.",
    distractorAnalysis: [
      "Opção B é falsa; o avental de chumbo atenua e absorve eficazmente os fotões Compton secundários.",
      "Opção C confunde radiação eletromagnética X instantânea com contaminação radioativa particulada residual (o ar não fica ativado nem 'radioativo').",
      "Opção D é uma afirmação discriminatória absurda que viola as leis universais da física das radiações."
    ],
    nursingApplication: "Em cirurgias ortopédicas ou hemodinâmica com uso contínuo de intensificador de imagem (arco em C / fluoroscopia), o enfermeiro deve permanecer o mais afastado possível do doente durante os disparos e posicionar-se, se possível, do lado do detetor de imagem e não do lado da ampola emissora de Raios X, minimizando a receção de radiação dispersa de Compton."
  },
  {
    id: 510,
    topicId: 5,
    question: "Na interpretação sistemática de uma Radiografia Convencional de Tórax, quais são as cinco densidades radiológicas básicas da matéria dispostas por ordem CRESCENTE de atenuação dos Raios X (do mais escuro/negro para o mais claro/branco)?",
    options: [
      "Ar (radiotransparente/negro) -> Gordura (cinzento escuro) -> Água/Tecidos Moles (cinzento claro) -> Cálcio/Osso (radiopaco/branco) -> Metal (branco brilhante absoluto).",
      "Metal -> Cálcio -> Gordura -> Água -> Ar.",
      "Ar -> Metal -> Gordura -> Cálcio -> Água.",
      "Todas as estruturas anatómicas apresentam rigorosamente a mesma tonalidade de cinzento."
    ],
    correctIndex: 0,
    explanation: "A escala fundamental de densidades radiográficas decorre da densidade mássica e número atómico: 1) AR (pulmões, traqueia): absorve quase zero fotões, os Raios X atingem o filme/detetor em pleno -> imagem negra (radiotransparente); 2) GORDURA (tecido celular subcutâneo): cinzento escuro; 3) ÁGUA / PARTES MOLES (coração, sangue, músculos, fígado): atenuação intermédia -> cinzento claro; 4) CÁLCIO / OSSO (costelas, clavículas): alto Z de cálcio -> absorção elevada -> branco; 5) METAL (próteses, pacemaker, clipes cirúrgicos): absorção quase total -> branco absoluto impenetrável.",
    distractorAnalysis: [
      "Opção B inverte completamente a ordem de densidade radiológica.",
      "Opção C coloca o metal (máxima densidade) erroneamente na segunda posição.",
      "Opção D ignora a física elementar do diagnóstico imagiológico."
    ],
    nursingApplication: "Na radiografia de tórax de controlo após colocação de uma sonda nasogástrica (SNG), o enfermeiro pesquisa a densidade metálica do fio guia e radiopaca da ponta da sonda: deve ser visível descendo pelo esófago abaixo do diafragma até à câmara de ar gástrica (densidade ar), e NUNCA na árvore brônquica, prevenindo aspirações pulmonares letais de alimentação entérica."
  },
  {
    id: 511,
    topicId: 5,
    question: "Na Tomografia Computorizada (TC ou TAC), a atenuação dos Raios X em cada vóxel tridimensional é quantificada matematicamente através da 'Escala de Unidades Hounsfield' (HU). Quais são os valores de referência fixados nesta escala para a Água pura e para o Ar?",
    options: [
      "Água pura = 0 HU e Ar = -1000 HU (com o Osso cortical denso a atingir +1000 HU ou superior).",
      "Água pura = +1000 HU e Ar = 0 HU.",
      "Água pura = 100 HU e Ar = 50 HU.",
      "Água pura = -1000 HU e Ar = +1000 HU."
    ],
    correctIndex: 0,
    explanation: "Criada por Sir Godfrey Hounsfield (Prémio Nobel de Medicina de 1979), a escala HU normaliza os coeficientes de atenuação linear dos tecidos relativamente à água: HU = 1000 × (μ_tecido - μ_água) / μ_água. Por definição internacional: a água pura é o ponto zero (0 HU); o ar atmosférico (que praticamente não atenua a radiação) corresponde a -1000 HU; a gordura situa-se entre -50 e -100 HU; os tecidos moles entre +20 e +60 HU; e o osso cortical atinge valores de +800 a +3000 HU.",
    distractorAnalysis: [
      "Opções B, C e D invertem ou distorcem os pontos de calibração universais da escala Hounsfield."
    ],
    nursingApplication: "Em doentes admitidos com suspeita de Acidente Vascular Cerebral (AVC), a TAC craniana sem contraste diferencia instantaneamente a isquemia da hemorragia: o sangue agudo extravasado de um hematoma intracraniano apresenta alta densidade espontânea (+50 a +80 HU, hiperdenso/branco), enquanto a isquemia precoce surge como edema hipodenso (<20-30 HU, escuro). Essa distinção norteia a decisão imediata de trombólise endovenosa pelo enfermeiro."
  },
  {
    id: 512,
    topicId: 5,
    question: "Antes da administração intravenosa de um Meio de Contraste Iodado para a realização de uma TAC contrastada, qual é o parâmetro analítico laboratorial que o enfermeiro deve verificar obrigatoriamente para avaliar o risco de Nefropatia Induzida por Contraste (NIC)?",
    options: [
      "A Creatinina sérica e o cálculo da Taxa de Filtração Glomerular estimada (eGFR), devendo haver precauções especiais ou contraindicação se a eGFR for inferior a 30 mL/min/1,73m².",
      "A contagem de plaquetas e o tempo de protrombina apenas.",
      "A glicemia capilar em jejum exclusivamente.",
      "O nível de ácido úrico na urina de 24 horas."
    ],
    correctIndex: 0,
    explanation: "Os meios de contraste iodados são excretados quase a 100% por filtração glomerular nos rins. Em doentes com insuficiência renal prévia, a elevada osmolaridade e viscosidade do meio de contraste causam vasoconstrição da arteríola renal e citotoxicidade direta nas células dos túbulos renais, desencadeando lesão renal aguda (nefropatia induzida por contraste). A verificação da creatinina sérica com estimativa da eGFR pelas fórmulas CKD-EPI ou MDRD é obrigatória antes de qualquer injeção intravenosa eletiva.",
    distractorAnalysis: [
      "Opção B é vital antes de procedimentos invasivos hemorrágicos (como biópsias), mas não é o indicador primário de segurança para excreção renal do contraste.",
      "Opção C é importante para ajuste da metformina (suspender antes e 48h após para evitar acidose láctica), mas a eGFR renal continua a ser o parâmetro primário decisor.",
      "Opção D não é utilizada no rastreio pré-imagiológico agudo."
    ],
    nursingApplication: "Na preparação do doente para TAC com contraste, o enfermeiro confirma o valor da eGFR recente: em doentes de risco (eGFR entre 30 e 60 mL/min), implementa o protocolo de hidratação prévia e posterior com Soro Fisiológico a 0,9% para expandir o volume intravascular e acelerar a excreção renal do iodo, e orienta a suspensão da metformina se indicado."
  },
  {
    id: 513,
    topicId: 5,
    question: "A nível radiobiológico molecular, qual é a diferença fundamental entre a 'Ação Direta' e a 'Ação Indireta' da radiação ionizante sobre o material genético (DNA)?",
    options: [
      "Na ação direta, o fotão ou partícula ioniza diretamente a molécula de DNA; na ação indireta (responsável por cerca de 70% dos danos causados por Raios X e Gama), a radiação ioniza moléculas de água (radiólise da água), gerando radicais livres altamente reativos (como o radical hidroxilo, •OH) que atacam quimicamente o DNA.",
      "A ação direta atua apenas nos ossos e a indireta no coração.",
      "A ação direta destrói o corpo em microssegundos e a indireta não produz qualquer efeito biológico.",
      "A ação direta só ocorre na radioterapia e a indireta na radiografia simples."
    ],
    correctIndex: 0,
    explanation: "Como as células humanas são compostas por cerca de 70% a 80% de água líquida, a vasta maioria dos fotões X e gama interage primariamente com as moléculas de H₂O: H₂O + radiação -> H₂O⁺ + e⁻. Estes intermediários reagem rapidamente formando radicais livres: H₂O⁺ + H₂O -> H₃O⁺ + •OH (radical hidroxilo neutro extremamente reativo e tóxico com um eletrão desemparelhado). Os radicais livres difundem-se e quebram as ligações químicas do DNA circundante (ação indireta, que responde por ~2/3 de todo o dano celular de radiações de baixo LET).",
    distractorAnalysis: [
      "Opção B restringe erroneamente mecanismos biofísicos universais a órgãos anatómicos específicos.",
      "Opção C ignora os tempos de latência biológica e subestima grosseiramente o perigo da ação indireta.",
      "Opção D confunde tipos de exames clínicos com a radiobiologia celular fundamental."
    ],
    nursingApplication: "O conhecimento da ação indireta por radicais livres explica o 'Efeito do Oxigénio' (Oxygen Enhancement Ratio - OER) em radioterapia: tumores bem vascularizados e oxigenados são muito mais sensíveis à radiação porque o oxigénio molecular 'fixa' permanentemente as lesões químicas induzidas pelos radicais livres no DNA das células cancerígenas."
  },
  {
    id: 514,
    topicId: 5,
    question: "Na classificação dos efeitos biológicos da radiação ionizante, o que distingue formalmente os 'Efeitos Estocásticos' dos 'Efeitos Determinísticos' (reações teciduais)?",
    options: [
      "Os efeitos estocásticos (como o cancro e mutações genéticas) têm natureza probabilística sem limiar de dose seguro, onde a probabilidade aumenta com a dose mas a gravidade é independente da dose; os efeitos determinísticos têm um limiar de dose claro, acima do qual a sua ocorrência é certa e a sua gravidade cresce diretamente com a dose recebida.",
      "Os efeitos estocásticos ocorrem apenas em máquinas de Raios X desligadas e os determinísticos com as máquinas ligadas.",
      "Os efeitos determinísticos transmitem-se exclusivamente aos bisnetos por via hereditária.",
      "Não existe qualquer distinção científica, sendo ambos sinónimos exatos de gripe viral."
    ],
    correctIndex: 0,
    explanation: "Os efeitos determinísticos (como radiodermite, necrose tecidual, cataratas na lente ocular, descamação epitelial e síndrome de radiação aguda) exigem a morte de uma grande fração celular: só se manifestam acima de um limiar de dose específico (ex: 2 Gy para eritema cutâneo), aumentando a severidade com a dose. Os efeitos estocásticos (carcinogénese radioinduzida) decorrem de mutações viáveis no DNA de uma única célula: rege o modelo linear sem limiar (LNT) — não existe dose tão pequena que tenha risco zero absoluto de induzir um cancro a longo prazo (latência de 5 a 30 anos).",
    distractorAnalysis: [
      "Opção B é um disparate físico; tubos desligados não emitem qualquer radiação.",
      "Opção C descreve efeitos genéticos hereditários estocásticos, não determinísticos teciduais somáticos.",
      "Opção D é uma negação absurda de toda a ciência de radioproteção médica internacional."
    ],
    nursingApplication: "A radioproteção em enfermagem combate os dois tipos de efeitos: a blindagem com aventais e protetores de tiroide impede a ocorrência de efeitos determinísticos na pele e tiroide, e a aplicação do princípio ALARA reduz ao mínimo absoluto a probabilidade probabilística de efeitos estocásticos (cancro radioinduzido) ao longo da carreira profissional."
  },
  {
    id: 515,
    topicId: 5,
    question: "A 'Lei de Bergonié e Tribondeau' (1906) é o pilar fundamental da radiobiologia médica. De acordo com esta lei, quais são as características citológicas que tornam um tecido humano altamente RADIOSSENSÍVEL à radiação ionizante?",
    options: [
      "Elevada taxa de proliferação celular (alta atividade mitótica), longo futuro reprodutivo e baixo grau de diferenciação morfológica e funcional (células indiferenciadas ou estaminais).",
      "Presença exclusiva de células mortas e ausência total de água.",
      "Tecidos que nunca se dividem e possuem diferenciação celular máxima definitiva.",
      "Estruturas compostas unicamente por minerais inorgânicos de titânio."
    ],
    correctIndex: 0,
    explanation: "Jean Bergonié e Louis Tribondeau demonstraram que as células são tanto mais sensíveis à radiação quanto: 1) Maior for a sua atividade reprodutiva/mitótica; 2) Maior for o número de divisões futuras que irão realizar; 3) Menos diferenciadas forem funcionalmente. Por esta lei, os tecidos mais radiossensíveis do corpo são a medula óssea hematopoética, as células germinativas (gónadas), a mucosa das criptas intestinais e o embrião/feto em desenvolvimento; os mais radiorresistentes são os neurónios e as fibras musculares adultas.",
    distractorAnalysis: [
      "Opção B descreveria tecidos inertes que não sofrem morte biológica adicional.",
      "Opção C é a descrição citológica dos tecidos mais RADIORRESISTENTES do corpo humano (músculo e sistema nervoso central).",
      "Opção D refere-se a próteses metálicas inorgânicas sem biologia celular."
    ],
    nursingApplication: "Esta lei elucida por que a radioterapia ataca preferencialmente as células cancerígenas (com alta proliferação e anaplasia) e explica os efeitos secundários típicos que o enfermeiro gere em oncologia: anemia, leucopenia e plaquetopenia (supressão medular), mucosite oral e diarreia (destruição do epitélio gastrointestinal). Justifica também a prioridade absoluta de proteção radiológica ao feto em grávidas."
  },
  {
    id: 516,
    topicId: 5,
    question: "Na dosimetria das radiações, qual é a definição e unidade no Sistema Internacional (SI) da grandeza 'Dose Absorvida' (D)?",
    options: [
      "É a quantidade de energia da radiação ionizante depositada por unidade de massa da matéria biológica absorvedora (D = ΔE / Δm); a sua unidade SI é o Gray (1 Gy = 1 Joule por quilograma).",
      "É a contagem de fotões que saem da lâmpada da sala por hora, expressa em Watts.",
      "É a velocidade com que a radiação se desloca no ar, expressa em nós náuticos.",
      "É a variação de peso do doente após o exame de raios X, expressa em gramas."
    ],
    correctIndex: 0,
    explanation: "A Dose Absorvida (D) mede a energia média depositada pela radiação na matéria por unidade de massa: D = dE / dm. No Sistema Internacional (SI), a unidade oficial é o Gray (Gy), definido como a absorção de 1 Joule de energia por 1 quilograma de tecido (1 Gy = 1 J/kg). A antiga unidade não-SI era o Rad (1 Gy = 100 rad; 1 rad = 0,01 Gy = 1 cGy).",
    distractorAnalysis: [
      "Opção B confunde dose absorvida com potência luminosa visível ou radiometria geral.",
      "Opção C propõe unidades de navegação marítima sem qualquer relação com a energia depositada.",
      "Opção D confunde energia ionizante molecular com alterações gravimétricas de peso macroscópico."
    ],
    nursingApplication: "Na radioterapia externa para tratamento oncológico, as doses prescritas e administradas ao tumor são rigorosamente calculadas em Grays (ex: dose total de 60 Gy fracionada em 30 sessões diárias de 2 Gy). O enfermeiro avalia a pele do campo de irradiação para prevenção precoce de radiodermite conforme a dose cumulativa em Grays recebida pelo doente."
  },
  {
    id: 517,
    topicId: 5,
    question: "A 'Dose Equivalente' (H) e a 'Dose Efetiva' (E) utilizam a unidade Sievert (Sv = J/kg). Para que servem os fatores de ponderação da radiação (w_R) e dos tecidos (w_T) associados a estas grandezas?",
    options: [
      "O fator w_R corrige a eficácia biológica de diferentes tipos de radiação (ex: w_R = 1 para Raios X/gama vs w_R = 20 para partículas alfa pesadas); o fator w_T pondera a diferente radiossensibilidade dos órgãos humanos (ex: gónadas, pulmões vs pele), permitindo quantificar o risco global de cancro radioinduzido para o corpo inteiro.",
      "Servem apenas para converter números positivos em números negativos nos computadores.",
      "Servem para calcular o custo financeiro do exame em euros.",
      "Os fatores w_R e w_T são constantes inventadas sem qualquer uso na proteção radiológica."
    ],
    correctIndex: 0,
    explanation: "A Dose Equivalente é H = D · w_R: 1 Gy de partículas alfa causa 20 vezes mais dano biológico do que 1 Gy de Raios X, logo w_R(alfa) = 20 e w_R(X/gama) = 1. A Dose Efetiva é a soma ponderada de todos os órgãos: E = ∑ w_T · H_T. Como tecidos têm sensibilidades oncológicas muito diferentes (a medula óssea e o pulmão têm w_T elevado; a pele e a superfície óssea têm w_T baixo, e ∑ w_T = 1), a Dose Efetiva em Sieverts permite comparar o risco biológico total de exames tão díspares como uma TAC torácica (~7 mSv) e um raio-X dentário (~0,005 mSv).",
    distractorAnalysis: [
      "Opção B é absurda; as doses radiológicas são magnitudes físicas estritamente positivas.",
      "Opção C confunde tabelas tarifárias de faturação hospitalar com radiobiologia da ICRP.",
      "Opção D nega o sistema internacional de grandezas e unidades de radioproteção regulamentado pela Agência Internacional de Energia Atómica (AIEA)."
    ],
    nursingApplication: "A dose média natural a que qualquer habitante da Terra está exposto pela radiação cósmica e radão do solo é de cerca de 2,4 a 3 mSv por ano. Conhecer estas grandezas permite ao enfermeiro tranquilizar um doente angustiado que vai fazer uma radiografia de tórax: a dose é de apenas ~0,02 a 0,05 mSv, o equivalente a escassos dias de radiação natural de fundo."
  },
  {
    id: 518,
    topicId: 5,
    question: "O Sistema de Proteção Radiológica preconizado pela Comissão Internacional de Proteção Radiológica (ICRP) baseia-se em três princípios éticos e científicos fundamentais. Quais são eles?",
    options: [
      "Justificação da prática, Otimização da proteção (Princípio ALARA) e Limitação de doses individuais.",
      "Isolamento absoluto, Proibição total de raios X e Eliminação da eletricidade hospitalar.",
      "Cobrança de taxas adicionais, Uso exclusivo de chumbo em todas as paredes e Repouso obrigatório.",
      "Imunização com antibióticos, Esterilização com vapor a 134 °C e Vacinação radiológica."
    ],
    correctIndex: 0,
    explanation: "Os 3 pilares do sistema ICRP são: 1) Justificação: nenhuma prática com radiação ionizante pode ser realizada a menos que produza um benefício líquido para o indivíduo ou sociedade que compense o detrimento radiológico; 2) Otimização: todas as doses devem ser mantidas 'Tão Baixas Quanto Razoavelmente Exequíveis' (As Low As Reasonably Achievable - princípio ALARA), tendo em conta fatores económicos e sociais; 3) Limitação de Dose: as doses individuais em trabalhadores e no público não podem ultrapassar limites anuais estritos regulamentados por lei.",
    distractorAnalysis: [
      "Opção B proibiria a imagiologia moderna essencial para salvar vidas humanas.",
      "Opção C propõe exigências financeiras e de engenharia despropositadas sem valor científico.",
      "Opção D confunde medidas de assepsia e microbiologia clínica com proteção contra radiação ionizante."
    ],
    nursingApplication: "Na prática diária, o enfermeiro aplica ativamente o princípio da Justificação ao verificar se o exame radiológico prescrito tem indicação clínica clara e se não há exames recentes repetidos no sistema informático, e aplica a Otimização garantindo o posicionamento correto à primeira tentativa para evitar disparos desnecessários."
  },
  {
    id: 519,
    topicId: 5,
    question: "O princípio ALARA (As Low As Reasonably Achievable - 'Tão Baixo Quanto Razoavelmente Exequível') traduz-se operacionalmente em enfermagem através de três regras práticas universais de radioproteção:",
    options: [
      "TEMPO (minimizar a duração da exposição), DISTÂNCIA (maximizar o afastamento da fonte) e BLINDAGEM (interpor barreiras protetoras como aventais de chumbo e biombos).",
      "ÁGUA, SABÃO e ÁLCOOL a 70%.",
      "LUVA, MÁSCARA CIRÚRGICA e ÓCULOS escuros.",
      "VELOCIDADE rápida da maca, LUZ apagada e JANELA aberta."
    ],
    correctIndex: 0,
    explanation: "A tríade de ouro de proteção radiológica externa contra radiações penetrantes é inegociável: 1) TEMPO: a dose recebida é diretamente proporcional ao tempo gasto junto à fonte (Dose = Taxa × t); 2) DISTÂNCIA: pelo inverso do quadrado da distância (I ∝ 1/d²), afastar-se é a forma mais barata e potente de reduzir a dose a valores desprezíveis; 3) BLINDAGEM: quando a distância não pode ser ampliada, o uso de aventais plumbíferos, protetores cervicais e biombos móveis atenua exponencialmente os fotões secundários.",
    distractorAnalysis: [
      "Opção B refere-se à higienização de mãos e desinfeção de superfícies.",
      "Opção C refere-se a Equipamento de Proteção Individual (EPI) contra agentes biológicos infecciosos por gotículas.",
      "Opção D descreve procedimentos empíricos arbitrários sem efeito atenuador sobre fotões X penetrantes."
    ],
    nursingApplication: "Quando o enfermeiro tem de conter ou acompanhar uma criança agitada durante um exame de Raios X portátil no leito: aplica os 3 princípios em simultâneo — veste o avental de chumbo e protetor de tiroide (blindagem), afasta-se o máximo possível do feixe primário esticando os braços ou dando um passo atrás (distância), e assegura a imobilização rápida para que o técnico faça o disparo num milissegundo único (tempo)."
  },
  {
    id: 520,
    topicId: 5,
    question: "A intensidade da radiação emitida por uma fonte pontual decai segundo a 'Lei do Inverso do Quadrado da Distância' (I ∝ 1 / d²). Se um enfermeiro que se encontra a 1 metro de distância do doente durante um disparo de raios X der dois passos para trás, passando a situar-se a 3 metros da fonte, a intensidade da radiação recebida pelo profissional cai para:",
    options: [
      "1/9 (cerca de 11%) do valor original (1 / 3² = 1/9).",
      "1/3 do valor original.",
      "1/2 do valor original.",
      "Zero absoluto instantaneamente."
    ],
    correctIndex: 0,
    explanation: "Pela lei do inverso do quadrado da distância: I₁ · d₁² = I₂ · d₂² => I₂ = I₁ · (d₁ / d₂)² = I₁ · (1 / 3)² = I₁ / 9. Triplicar o afastamento de 1 para 3 metros reduz a taxa de dose de radiação recebida pelo profissional para um nono (uma redução colossal de 89% na dose!), sem qualquer custo financeiro ou necessidade de blindagem adicional.",
    distractorAnalysis: [
      "Opção B considera erroneamente uma proporção linear com a distância (1/d¹), subestimando a proteção real.",
      "Opção C viola as leis geométricas de propagação esférica da energia das ondas eletromagnéticas.",
      "Opção D só ocorreria a uma distância infinita, já que a intensidade decresce de modo assintótico contínuo."
    ],
    nursingApplication: "Durante a realização de radiografias móveis na enfermaria ou UCIP, a regra de ouro do enfermeiro é dar dois ou três passos para trás em relação ao leito (colocando-se a mais de 2 a 3 metros de distância): este simples gesto biofísico reduz a exposição à radiação dispersa para valores negligenciáveis, muitas vezes inferiores à dose recebida por permanecer com avental de chumbo colado ao doente."
  },
  {
    id: 521,
    topicId: 5,
    question: "Qual é o 'Limite de Dose Efetiva' anual estabelecido por diretrizes internacionais (ICRP) e pela legislação europeia e portuguesa para Trabalhadores Profissionalmente Expostos (TPE), como enfermeiros de hemodinâmica e radiologia de intervenção?",
    options: [
      "20 mSv (milisseverts) por ano em média ao longo de períodos definidos de 5 anos (não excedendo 50 mSv em nenhum ano isolado).",
      "5000 mSv por semana.",
      "Zero mSv, sendo proibida qualquer absorção de radiação no trabalho.",
      "1000 Sv por mês."
    ],
    correctIndex: 0,
    explanation: "As normas básicas de segurança radiológica (Diretiva EURATOM e ICRP 103) fixam para os Trabalhadores Profissionalmente Expostos (TPE) um limite de dose efetiva de 20 mSv/ano (média em 5 anos, máximo de 50 mSv num ano único). Para o público geral, o limite é muito mais rigoroso: 1 mSv/ano. Estes limites destinam-se a garantir que a probabilidade de efeitos estocásticos (cancro) se mantenha dentro de níveis de risco ocupacional socialmente aceitáveis e comparáveis aos de indústrias seguras.",
    distractorAnalysis: [
      "Opção B provocaria a morte rápida por Síndrome de Radiação Aguda em escassos dias.",
      "Opção C é impraticável e impossível, pois a própria radiação natural de fundo expõe qualquer ser humano a ~2,4-3 mSv/ano.",
      "Opção D provocaria vaporização biológica e morte instantânea."
    ],
    nursingApplication: "O cumprimento destes limites é monitorizado mensalmente através do dosímetro individual oficial. Na prática moderna, enfermeiros que utilizam corretamente os aventais de chumbo e mantêm distâncias de segurança recebem habitualmente menos de 1 a 2 mSv por ano, muito abaixo do teto legal de 20 mSv."
  },
  {
    id: 522,
    topicId: 5,
    question: "No caso de uma enfermeira que trabalha num serviço de imagiologia ou bloco cirúrgico e que declare formalmente a sua gravidez (gestação), qual é a proteção e o limite de dose especial estipulado por lei para salvaguardar o embrião/feto?",
    options: [
      "A dose equivalente à superfície do abdómen materno não deve exceder 1 mSv durante todo o resto da gestação, garantindo que o feto receba uma dose insignificante e compatível com o limite do público geral.",
      "A enfermeira deve ser demitida imediatamente sem qualquer direito laboral.",
      "A dose máxima é de 100 Sv por trimestre de gravidez.",
      "O feto é imune à radiação ionizante durante os primeiros três meses de vida intrauterina."
    ],
    correctIndex: 0,
    explanation: "Logo que a gravidez é notificada ao empregador, as condições de trabalho devem ser ajustadas para que a dose equivalente acumulada no feto seja a menor possível e não exceda 1 mSv durante o resto da gestação. Como o avental de chumbo materno atenua a grande maioria dos fotões, a enfermeira grávida pode frequentemente continuar a trabalhar em funções hospitalares desde que readaptada para áreas sem intervenção radiológica pesada contínua ou com monitorização dosimétrica abdominal adicional sob o avental.",
    distractorAnalysis: [
      "Opção B viola gravosamente a legislação laboral de proteção da maternidade e igualdade de género.",
      "Opção C causaria morte embrionária e aborto espontâneo imediato com 100 Sv.",
      "Opção D é um erro perigoso: o primeiro trimestre (fase de organogénese embrionária) é precisamente a janela de máxima radiossensibilidade e maior vulnerabilidade a malformações congénitas e morte do embrião."
    ],
    nursingApplication: "A declaração precoce da gravidez pela enfermeira ao serviço de Saúde Ocupacional é um dever de radioproteção: permite a reatribuição imediata de tarefas (evitando salas de hemodinâmica ou assistência a exames móveis de fluoroscopia prolongada), garantindo a proteção integral da saúde da mãe e do feto."
  },
  {
    id: 523,
    topicId: 5,
    question: "O dosímetro pessoal de leitura diferida (dosímetro termoluminescente - TLD ou OSL) atribuído ao enfermeiro que atua em áreas com radiação deve ser utilizado de acordo com qual regra padronizada?",
    options: [
      "Deve ser usado no tronco (tórax/abdómen) por BAIXO do avental de chumbo para estimar a dose efetiva de corpo inteiro absorvida pelos órgãos vitais protegidos.",
      "Deve ser deixado permanentemente pendurado no biombo de chumbo dentro da sala para medir a radiação da parede.",
      "Deve ser partilhado rotativamente por todos os enfermeiros da equipa em cada turno.",
      "Deve ser guardado dentro de um balde de gelo para não descalibrar."
    ],
    correctIndex: 0,
    explanation: "O dosímetro pessoal é estritamente pessoal e intransmissível. A sua leitura serve de base jurídica e clínica para estimar a dose efetiva recebida pelo trabalhador. A norma padrão internacional exige que o dosímetro principal de corpo inteiro seja colocado no tronco por baixo do avental plumbífero de proteção: desta forma, os cristais termoluminescentes recebem exatamente a radiação residual atenuada que atinge os órgãos nobres (medula óssea, fígado, gónadas). Se houver risco para os olhos e tiroide, utiliza-se um segundo dosímetro adicional na gola por fora do avental.",
    distractorAnalysis: [
      "Opção B mediria a radiação ambiental da sala e não a dose ocupacional real do profissional de saúde.",
      "Opção C é uma infração regulamentar grave que invalida o registo dosimétrico individual.",
      "Opção D estragaria o dispositivo por infiltração de humidade; os dosímetros TLD/OSL operam à temperatura ambiente normal."
    ],
    nursingApplication: "O enfermeiro nunca deve expor o seu dosímetro a fontes de radiação quando não o estiver a usar no corpo (por exemplo, esquecê-lo dentro da sala de cirurgia durante um procedimento). A leitura espúria de doses artificiais elevadas desencadeia inquéritos radiológicos complexos e afastamento preventivo injustificado do trabalho."
  },
  {
    id: 524,
    topicId: 5,
    question: "Os aventais de proteção radiológica utilizados pelos profissionais de enfermagem no bloco operatório e hemodinâmica são fabricados em borracha de vinil impregnada com chumbo ou metais pesados compósitos equivalentes. Qual é a espessura de equivalência de chumbo mais comumente utilizada nestes aventais?",
    options: [
      "0,25 mm a 0,5 mm de equivalência em chumbo (Pb), que atenua mais de 90% a 98% da radiação X dispersa na faixa de energias diagnósticas.",
      "50 centímetros de chumbo puro maciço.",
      "0,001 micrómetros de plástico comum transparente.",
      "10 metros de placas de vidro comum."
    ],
    correctIndex: 0,
    explanation: "Devido ao elevado peso específico do chumbo (densidade ρ = 11,34 g/cm³), aventais com 0,25 mm de Pb equivalente pesam cerca de 2 a 3 kg e atenuam cerca de 90% a 95% da radiação dispersa a 70-80 kVp. Aventais com 0,5 mm de Pb equivalente pesam de 4 a 6 kg e conseguem atenuar mais de 98% da radiação secundária incidente. A escolha equilibra a proteção radiológica contra a fadiga musculoesquelética do enfermeiro durante procedimentos longos.",
    distractorAnalysis: [
      "Opção B pesaria várias toneladas e esmagaria o profissional no chão.",
      "Opção C não ofereceria qualquer atenuação contra fotões X penetrantes.",
      "Opção D descreve dimensões de construção de edifícios industriais inviáveis para vestuário pessoal."
    ],
    nursingApplication: "Os aventais plumbíferos NUNCA devem ser dobrados ou amarrotados ao serem guardados: a dobragem quebra as camadas internas de borracha plúmbea, criando fissuras radiotransparentes invisíveis a olho nu por onde os Raios X passam livremente. O enfermeiro deve pendurá-los sempre em cabides apropriados e inspecioná-los anualmente sob radioscopia quanto a fendas."
  },
  {
    id: 525,
    topicId: 5,
    question: "Na utilização de aparelhos de Raios X móveis (portáteis) nas enfermarias de internamento ou unidades de cuidados intensivos, qual é o procedimento de segurança que o enfermeiro deve assegurar junto dos outros doentes internados no mesmo quarto de enfermaria?",
    options: [
      "Garantir uma distância de segurança mínima (pelo menos 2 a 3 metros) entre o tubo emissor/doente radiografado e os outros doentes da enfermaria, ou interpor um biombo plumbífero móvel entre as camas se o espaço for exíguo.",
      "Evacuar todos os doentes do hospital para o exterior do edifício durante 12 horas.",
      "Mandar desligar os monitores cardíacos dos outros doentes para não explodirem com os raios X.",
      "Pedir aos outros doentes que fechem os olhos para a radiação não entrar pela retina."
    ],
    correctIndex: 0,
    explanation: "Pela Lei do Inverso do Quadrado da Distância e pela natureza da radiação dispersa Compton emitida pelo doente, a intensidade da radiação cai exponencialmente com o afastamento. A uma distância de 2 a 3 metros da cama radiografada com colimação rigorosa do feixe primário, a dose recebida pelo doente da cama ao lado é virtualmente insignificante (muitas vezes inferior a frações de microgray por disparo). Se a distância de 2 metros não puder ser mantida, interpõe-se um biombo móvel de chumbo.",
    distractorAnalysis: [
      "Opção B seria uma medida de pânico perigosa que desestabilizaria doentes graves e colapsaria o hospital.",
      "Opção C é falsa; os equipamentos biomédicos modernos são blindados contra interferências de raios X diagnósticos.",
      "Opção D é uma crendice popular infantil; as pálpebras de pele fina são incapazes de travar Raios X penetrantes."
    ],
    nursingApplication: "Antes de autorizar o técnico a realizar o disparo do aparelho de raios X portátil, o enfermeiro avisa em voz clara na enfermaria ('Atenção ao Raio-X!'), permitindo que visitantes e profissionais não-blindados se afastem para lá da distância de segurança (mínimo 2 a 3 metros) ou saiam temporariamente do quarto."
  },
  {
    id: 526,
    topicId: 5,
    question: "Em radioterapia oncológica, qual é a diferença entre a 'Teleterapia' e a 'Braquiterapia'?",
    options: [
      "Na teleterapia, a fonte de radiação situa-se a uma distância considerável do doente (acelerador linear de alta energia de 6 a 18 MV disparando contra o tumor através da pele); na braquiterapia, fontes radioativas seladas encapsuladas (como Iridio-192 ou Iodo-125) são introduzidas diretamente no interior ou em contacto íntimo com o tecido tumoral.",
      "A teleterapia é administrada através de um telefonema de apoio psicológico e a braquiterapia com comprimidos de cálcio.",
      "A teleterapia utiliza apenas luz laser visível e a braquiterapia utiliza agulhas de acupuntura frias.",
      "A teleterapia cura o cancro em 1 minuto e a braquiterapia é um método de diagnóstico imagiológico."
    ],
    correctIndex: 0,
    explanation: "Em oncologia radioterápica: 1) Teleterapia (tele = longe): a fonte de radiação (feixes de fotões de megavoltagem ou eletrões produzidos por um acelerador linear isocêntrico) localiza-se a cerca de 80 a 100 cm do doente; 2) Braquiterapia (brachy = perto): pequenos implantes radioativos selados ('sementes', fios ou agulhas) são inseridos temporária ou permanentemente dentro do tumor (ex: cancro da próstata, colo do útero ou mama), administrando doses tumoricidas colossais no tecido maligno com queda abrupta da dose nos tecidos saudáveis vizinhos (Lei de Laplace e inverso do quadrado).",
    distractorAnalysis: [
      "Opção B é um trocadilho grosseiro com o termo 'tele' sem qualquer fundamento médico.",
      "Opção C confunde a radiação ionizante penetrante com terapias alternativas ou lasers térmicos superficiais.",
      "Opção D é incorreta; ambas são modalidades terapêuticas que exigem planeamento complexo e dosimetria rigorosa ao longo de dias ou semanas."
    ],
    nursingApplication: "No pós-operatório de doentes submetidos a braquiterapia ginecológica ou de próstata com implantes radioativos temporários de alta taxa de dose (HDR), o enfermeiro deve conhecer os radioisótopos em uso, respeitar os tempos de permanência no quarto, utilizar dosímetro de pulso/tronco e garantir que as fontes foram totalmente recolhidas para o cofre blindado antes de realizar cuidados de higiene direta."
  },
  {
    id: 527,
    topicId: 5,
    question: "O conceito de 'Radiodermite' (eritema e lesões cutâneas radioinduzidas) representa um efeito determinístico com limiar de dose. Qual é o cuidado de enfermagem fundamental na proteção da pele de um doente submetido a um ciclo de radioterapia externa?",
    options: [
      "Manter a pele do campo de tratamento limpa, seca e arejada, lavando com água morna e sabão de pH neutro suave, secando por toques suaves sem fricção mecânica, evitando loções alcoólicas, perfumes ou adesivos que aumentem a irritação e protegendo a área da exposição solar direta.",
      "Esfregar vigorosamente a pele com escova cirúrgica e álcool iodado para eliminar a radiação residual da epiderme.",
      "Aplicar camadas espessas de pasta de dentes com mentol para arrefecer o tecido.",
      "Colocar sacos de gelo diretamente sobre a pele aberta durante 12 horas consecutivas."
    ],
    correctIndex: 0,
    explanation: "A radiodermite ocorre porque a radiação ionizante atinge as células estaminais da camada basal da epiderme (tecido de alta proliferação celular, Lei de Bergonié-Tribondeau). Para doses de 2 a 10 Gy surge eritema e prurido; acima de 15 a 20 Gy pode ocorrer descamação húmida exsudativa dolorosa. O cuidado de enfermagem foca-se em preservar a integridade da barreira cutânea remanescente: lavar suavemente sem esfregar, evitar agentes irritantes químicos, hidratar com cremes emolientes prescritos específicos aplicados com intervalo de segurança antes das sessões e proteger do sol.",
    distractorAnalysis: [
      "Opção B provocaria lesão mecânica e química severa com descamação e dor atroz na pele fragilizada.",
      "Opção C utilizaria substâncias cáusticas totalmente desadequadas para pele irradiada.",
      "Opção D causaria queimaduras por frio (geladura) e isquemia cutânea adicional por vasoconstrição extrema."
    ],
    nursingApplication: "A monitorização e estadiamento da radiodermite (graus 1 a 4 da escala RTOG/CTCAE) pelo enfermeiro de oncologia garante intervenções precoces com pensos hidrocolóides ou espumas de silicone suave, prevenindo infeções bacterianas secundárias e interrupções indesejadas no plano de tratamento oncológico."
  },
  {
    id: 528,
    topicId: 5,
    question: "Na colimação do feixe primário de Raios X por intermédio de diafragmas de chumbo ajustáveis (colimador luminoso do tubo), qual é o benefício duplo obtido ao restringir a área do feixe estritamente à anatomia de interesse clínico?",
    options: [
      "Reduz a dose de radiação integral absorvida pelo doente (protegendo tecidos saudáveis vizinhos) e diminui significativamente a produção de radiação de dispersão Compton, melhorando o contraste e a nitidez da imagem radiológica.",
      "Aumenta a velocidade da luz no interior do tubo para além dos limites da física.",
      "Permite fazer radiografias através de paredes de chumbo sem necessidade de ligar o aparelho.",
      "Transforma os Raios X em ondas acústicas de ecografia tridimensional."
    ],
    correctIndex: 0,
    explanation: "A colimação estrita é uma das práticas mais eficazes da radioproteção: 1) Benefício biológico: ao limitar o feixe à área anatómica estrita (ex: apenas o punho em vez de todo o membro superior), reduz-se o volume tecidual irradiado e a dose efetiva recebida pelo doente (princípio ALARA); 2) Benefício imagiológico: como um volume menor de tecido é atravessado, a quantidade total de fotões espalhados por efeito Compton cai drasticamente, reduzindo o 'véu de dispersão' e melhorando o contraste da imagem.",
    distractorAnalysis: [
      "Opções B, C e D são formulações fantasiosas e incorretas que contrariam a ótica dos raios X."
    ],
    nursingApplication: "O enfermeiro que opera ou colabora em procedimentos sob radioscopia (como na colocação de cateteres PICC ou redução ortopédica de fraturas) deve solicitar ativamente a colimação máxima do feixe aos limites da zona de interesse, protegendo tanto o doente como toda a equipa cirúrgica contra a radiação dispersa."
  },
  {
    id: 529,
    topicId: 5,
    question: "A fluoroscopia (ou radioscopia contínua) é uma modalidade radiológica em tempo real utilizada em arcos em C cirúrgicos e laboratórios de hemodinâmica vascular. O que diferencia a dose de radiação de uma fluoroscopia prolongada da dose de uma radiografia de tórax simples?",
    options: [
      "A fluoroscopia contínua administra taxas de dose cumulativas milhares de vezes superiores às de uma radiografia simples, podendo em procedimentos prolongados ultrapassar vários Grays e causar queimaduras e necrose cutânea determinística grave nas costas do doente.",
      "A fluoroscopia não utiliza radiação ionizante, operando com luz visível totalmente inócua.",
      "Uma radiografia de tórax simples tem uma dose cem vezes superior à de três horas de fluoroscopia contínua.",
      "A fluoroscopia é tão segura que pode ser realizada continuamente durante dias seguidos sem qualquer proteção."
    ],
    correctIndex: 0,
    explanation: "Enquanto uma radiografia de tórax de disparo único expõe o doente a uma dose diminuta (~0,02 a 0,05 mSv, frações de milissegundo de disparo), a fluoroscopia envolve emissão contínua ou pulsada prolongada de raios X durante minutos ou horas (ex: cateterismos cardíacos complexos, embolizações neurovasculares). A taxa de dose na pele de entrada pode atingir 20 a 50 mGy/minuto: em exames de mais de 60 minutos sob o mesmo ângulo, a dose na pele pode ultrapassar 2 a 5 Gy, provocando eritema, ulceração profunda e necrose radioinduzida na pele das costas do doente.",
    distractorAnalysis: [
      "Opção B é falsa; a fluoroscopia é gerada por um tubo potente de Raios X ionizantes.",
      "Opção C inverte absurdamente as ordens de grandeza das doses envolvidas.",
      "Opção D ignora os alertas internacionais da FDA e da AIEA sobre lesões cutâneas por radiação em doentes submetidos a intervenções fluoroscópicas prolongadas."
    ],
    nursingApplication: "No pós-procedimento de doentes submetidos a intervenções percutâneas longas sob fluoroscopia (>60-90 minutos de arco em C), o enfermeiro deve inspecionar a pele das costas e região escapular quanto a sinais precoces de eritema radioinduzido e instruir o doente e família a vigiar alterações cutâneas nas semanas seguintes, comunicando qualquer descamação persistente."
  },
  {
    id: 530,
    topicId: 5,
    question: "Em caso de reação anafilactóide grave aguda (broncoespasmo severo, estridor laríngeo, choque distributivo e angioedema) imediatamente após a injeção intravenosa de meio de contraste iodado para TAC, qual é o fármaco de primeira linha e de eleição absoluta que deve ser administrado sem demora?",
    options: [
      "Adrenalina (Epinefrina) por via intramuscular na face anterolateral da coxa (vasto lateral).",
      "Paracetamol oral em gotas.",
      "Insulina rápida subcutânea.",
      "Soro glicosado a 5% em nebulização fria."
    ],
    correctIndex: 0,
    explanation: "A anafilaxia aos contrastes iodados é uma reação idiossincrática anafilactóide não-IgE mediada por desgranulação direta de mastócitos e basófilos. A Adrenalina intramuscular (0,5 mg na concentração 1:1000 num adulto) é o único fármaco salva-vidas de primeira linha: pelos recetores alfa-1 promove vasoconstrição periférica revertendo o choque e o edema laríngeo; pelos recetores beta-2 induz broncodilatação imediata potente e bloqueia a libertação subsequente de mediadores inflamatórios pelos mastócitos.",
    distractorAnalysis: [
      "Opção B é um antipirético/analgésico menor que em nada reverte o choque anafilático ou o broncoespasmo.",
      "Opção C causaria hipoglicemia severa perigosa sem qualquer ação antialérgica.",
      "Opção D não possui ação farmacológica nos recetores adrenérgicos vitais."
    ],
    nursingApplication: "O enfermeiro que atua em serviços de imagiologia garante que o carro de emergência com adrenalina em ampola, seringas, agulhas intramusculares e material de via aérea avançada está testado e disponível imediatamente ao lado da sala de TAC, administrando adrenalina IM aos primeiros sinais de compromisso respiratório ou hemodinâmico."
  },
  {
    id: 531,
    topicId: 5,
    question: "Em doentes submetidos a cintigrafia óssea ou outros exames de Medicina Nuclear com radioisótopos emissores gama de semivida curta (como o Tecnécio-99m, T₁/₂ ≈ 6 horas), qual é a orientação de enfermagem após o exame quanto à eliminação da radioatividade residual pelo corpo?",
    options: [
      "Incentivar a ingestão abundante de líquidos (água) para acelerar a eliminação urinária do radiofármaco não-fixado e recomendar dar a descarga sanitária duas vezes consecutivas com a tampa da sanita fechada e lavar rigorosamente as mãos.",
      "Permanecer em jejum absoluto sem beber água durante uma semana inteira.",
      "Queimar todas as roupas do doente em fogueira aberta no jardim.",
      "Permanecer imóvel dentro de um sarcófago de chumbo durante um mês."
    ],
    correctIndex: 0,
    explanation: "O Tecnécio-99m marcado (ex: ⁹⁹ᵐTc-MDP para cintigrafia óssea) é excretado primariamente pelos rins. Como a sua meia-vida física é de apenas 6 horas e a biológica é ainda mais curta com boa hidratação, forçar a diurese com ingestão hídrica reduz drasticamente a dose de radiação absorvida pela bexiga e gónadas. A urina do doente contém radioatividade transitória nas primeiras 24 horas: dar duas descargas com a tampa fechada previne a dispersão de aerossóis radioativos no vaso sanitário.",
    distractorAnalysis: [
      "Opção B agravaria perigosamente a retenção de radioatividade na bexiga, aumentando a dose absorvida desnecessariamente.",
      "Opção C é uma conduta despropositada e incorreta que causaria contaminação atmosférica por fumo.",
      "Opção D confunde uma dose diagnóstica ambulatória comum com catástrofes nucleares severas."
    ],
    nursingApplication: "O enfermeiro ensina ao doente e aos familiares regras práticas de bom senso para as primeiras 24 horas: hidratação hídrica vigorosa, evitar contacto muito próximo e prolongado (abraços apertados na mesma cama) com bebés pequenos e grávidas, assegurando o retorno tranquilo às atividades normais no dia seguinte."
  },
  {
    id: 532,
    topicId: 5,
    question: "A Ressonância Magnética (RMN) utiliza campos magnéticos intensos e pulsos de radiofrequência, não recorrendo a radiações ionizantes. Qual é o risco biofísico gravíssimo que exige triagem prévia rigorosa pelo enfermeiro antes de permitir a entrada de qualquer pessoa na sala de RMN?",
    options: [
      "O campo magnético estático colossal (1,5 a 3 Tesla) atrai violentamente objetos ferromagnéticos (efeito projétil/míssil), como tesouras, botijas de O₂ e cadeiras de rodas, e pode deslocar ou avariar implantes como pacemakers e clipes de aneurismas cerebrais ferromagnéticos.",
      "O risco de o doente sofrer mutações no DNA idênticas às de uma explosão atómica.",
      "A transformação de todo o oxigénio da sala em gás mostarda tóxico.",
      "A destruição total dos dentes naturais do doente pela radiofrequência."
    ],
    correctIndex: 0,
    explanation: "A RMN opera com ímanes supercondutores gigantescos (1,5 T é cerca de 30.000 vezes o campo magnético terrestre!). Qualquer material com propriedades ferromagnéticas (ferro, aço carbono comum) sofre uma força magnética de atração avassaladora, sendo acelerado pelo ar a grande velocidade como um míssil letal contra o gantry do magneto. Adicionalmente, induz torção mecânica e migração de clipes metálicos cerebrais antigos e reprograma ou destrói circuitos elétricos de pacemakers e bombas de insulina.",
    distractorAnalysis: [
      "Opção B confunde magnetismo e ondas de rádio com radiações nucleares ionizantes de alta energia.",
      "Opção C é um disparate químico; o campo magnético não reage com os gases respiratórios.",
      "Opção D confunde pequenos desconfortos com restaurações metálicas com a destruição da dentição biológica."
    ],
    nursingApplication: "O enfermeiro aplica um questionário de segurança exaustivo antes da entrada na Zona IV da RMN: verificar presença de pacemakers cardíacos não-compatíveis com RMN, neuroestimuladores, implantes cocleares, corpos estranhos metálicos intraoculares e exigir a remoção total de adornos metálicos, telemóveis, canetas, tesouras e aparelhos auditivos."
  },
  {
    id: 533,
    topicId: 5,
    question: "O filtro de alumínio (filtração inerente e adicional, com espessura mínima equivalente a 2,5 mm de Al em equipamentos operando acima de 70 kVp) colocado na janela de saída do tubo de Raios X desempenha qual função biofísica?",
    options: [
      "Absorve seletivamente os fotões de 'baixa energia' (raios X moles) que seriam totalmente absorvidos na pele do doente sem contribuir para a imagem diagnóstica, diminuindo a dose absorvida na superfície corporal ('endurecimento do feixe').",
      "Transforma o feixe de raios X em feixe de luz azul visível.",
      "Aumenta em dez vezes a dose de radiação recebida pelo doente para queimar bactérias cutâneas.",
      "Serve unicamente para recolher poeiras do ar da sala de exames."
    ],
    correctIndex: 0,
    explanation: "O feixe de raios X emitido pelo ânodo é polienergético: contém fotões de alta energia e uma grande quantidade de fotões de baixa energia (<20-30 keV). Estes fotões de baixa energia ('raios X moles') não possuem penetrância suficiente para atravessar o corpo e atingir o detetor (não contribuem para a imagem), mas seriam 100% absorvidos na pele e tecido celular subcutâneo do doente, aumentando inutilmente a dose de radiação na pele. O filtro de alumínio retém estes fotões parasitas, 'endurecendo' o feixe útil.",
    distractorAnalysis: [
      "Opção B confunde absorção de raios X com ecrãs fluorescentes emissores de luz.",
      "Opção C violaria o princípio basilar ALARA de redução de doses.",
      "Opção D desvaloriza um componente de engenharia e radioproteção vital obrigatório por lei."
    ],
    nursingApplication: "A filtração adequada é verificada nos controlos periódicos de garantia da qualidade da ampola radiológica: um equipamento com filtração deficiente exporia os doentes internados a doses desnecessárias e mais elevadas de radiação cutânea a cada radiografia realizada no leito."
  },
  {
    id: 534,
    topicId: 5,
    question: "Na síndrome de radiação aguda (ARS - Acute Radiation Syndrome) resultante de uma exposição acidental de corpo inteiro a doses muito elevadas de radiação ionizante penetrante (>1 a 2 Gy), qual é o primeiro sistema fisiológico a sofrer colapso funcional devido à alta sensibilidade das suas células estaminais?",
    options: [
      "O Sistema Hematopoético (síndrome da medula óssea), manifestando-se por aplasia medular com neutropenia severa, trombocitopenia e anemia, deixando o indivíduo propenso a infeções oportunistas graves e hemorragias fatais.",
      "O sistema esquelético mineral com dissolução imediata dos ossos.",
      "A audição com surdez definitiva em menos de 1 segundo.",
      "A cor dos olhos que se altera permanentemente para roxo."
    ],
    correctIndex: 0,
    explanation: "Pela Lei de Bergonié e Tribondeau, as células estaminais hematopoéticas pluripotentes da medula óssea são as mais radiossensíveis do organismo. Doses de corpo inteiro acima de 1 a 2 Gy destroem estas precursoras mitóticas: os granulócitos e linfócitos desaparecem do sangue periférico em dias (linfopenia e neutropenia), seguidos de trombocitopenia grave ao fim de 2 a 3 semanas. Sem plaquetas nem glóbulos brancos, o doente falece por choque séptico ou hemorragia interna se não receber cuidados de suporte intensivo.",
    distractorAnalysis: [
      "Opção B é impossível; a matriz inorgânica de hidroxiapatite do osso é altamente radiorresistente.",
      "Opção C e D são invenções populares sem relação com os quadros clínicos das síndromes hematopoiética, gastrointestinal (>6 Gy) e cerebrovascular (>20 Gy) da ARS."
    ],
    nursingApplication: "Em acidentes radiológicos com síndrome aguda de radiação, o papel do enfermeiro é vital em unidades de isolamento estéril com fluxo laminar: vigilância estrita de sinais de neutropenia febril, administração de fatores estimuladores de colónias de granulócitos (G-CSF), transfusões de concentrados de plaquetas irradiadas e antibioterapia de largo espetro profilática."
  },
  {
    id: 535,
    topicId: 5,
    question: "O uso de óculos com vidros plumbíferos (equivalência de 0,5 a 0,75 mm Pb) por enfermeiros que trabalham rotineiramente em salas de hemodinâmica ou eletrofisiologia visa prevenir qual efeito determinístico ocular radioinduzido?",
    options: [
      "Catarata radioinduzida por opacificação progressiva do cristalino ocular.",
      "Miopia simples corrigível com lentes divergentes comuns.",
      "Alteração irreversível da cor da íris para azul.",
      "Desaparecimento permanente da glândula lacrimal em 24 horas."
    ],
    correctIndex: 0,
    explanation: "O cristalino do olho humano é composto por fibras transparentes derivadas de um epitélio anterior em mitose contínua. Ao contrário da pele, o cristalino não tem mecanismo de descamação celular: as células danificadas pela radiação migram para o polo posterior e acumulam-se como fibras anómalas desorganizadas que perdem a transparência ótica (catarata radioinduzida). Por esta razão, a ICRP reduziu o limite de dose anual no cristalino para trabalhadores expostos de 150 mSv para apenas 20 mSv/ano.",
    distractorAnalysis: [
      "Opção B é um erro refrativo comum de comprimento do globo ocular, sem relação com radiação ionizante.",
      "Opção C e D são afirmações fictícias sem base na oftalmologia radiobiológica."
    ],
    nursingApplication: "Em intervenções de hemodinâmica de longa duração onde o enfermeiro permanece junto ao arco em C ao lado da mesa do doente, o uso de óculos plumbíferos com proteção lateral é indispensável para evitar que a radiação dispersa atinja o cristalino, prevenindo cataratas precoces na meia-idade profissional."
  },
  {
    id: 536,
    topicId: 5,
    question: "O protetor de tiroide (colar cervical de chumbo) é um EPI radiológico de uso obrigatório em salas de procedimentos fluoroscópicos. Qual é a justificativa biofísica e radiobiológica para a proteção específica desta glândula?",
    options: [
      "A tiroide é uma glândula superficial de elevada radiossensibilidade e com alto fator de ponderação tecidual (w_T = 0,04), sendo muito suscetível ao desenvolvimento de carcinomas radioinduzidos por radiação dispersa.",
      "Porque a tiroide aquece até 80 °C na presença de raios X se não for arrefecida com chumbo.",
      "Porque o chumbo atua como íman que retém as hormonas T3 e T4 dentro da corrente sanguínea.",
      "Porque a tiroide é o órgão que controla a visão do profissional de saúde."
    ],
    correctIndex: 0,
    explanation: "A glândula tiroide localiza-se na face anterior do pescoço em posição muito superficial, ficando exposta diretamente à radiação dispersa proveniente do doente durante a fluoroscopia cirúrgica. A ICRP atribui-lhe um fator de ponderação w_T significativo, sendo a indução de cancro papilar da tiroide um dos efeitos estocásticos mais documentados em pessoas expostas sem proteção. Um colar de chumbo com 0,5 mm Pb atenua cerca de 95% desta radiação dispersa.",
    distractorAnalysis: [
      "Opção B é uma fantasia térmica sem fundamentação biofísica.",
      "Opção C e D misturam conceitos anatómicos e endocrinológicos errados."
    ],
    nursingApplication: "O colar de proteção tiroideia deve ser ajustado perfeitamente em redor da laringe e traqueia, sem folgas que deixem a glândula descoberta: o enfermeiro deve verificar a colocação correta antes de vestir o avental de proteção esterilizado para cirurgias e não o desapertar durante os procedimentos."
  },
  {
    id: 537,
    topicId: 5,
    question: "Qual das seguintes afirmações sobre a exposição ocupacional de enfermeiros à radiação ionizante de Raios X é rigorosamente VERDADEIRA?",
    options: [
      "Os Raios X não tornam o corpo do doente nem o ar da sala radioativos; logo que o botão de disparo do gerador é desligado, a radiação cessa instantaneamente à velocidade da luz e a sala fica 100% livre de radiação.",
      "O doente que faz uma radiografia fica a emitir raios X pelos poros durante as 48 horas seguintes.",
      "Os raios X acumulam-se nas paredes da sala e vão sendo libertados lentamente ao longo da noite.",
      "O enfermeiro deve tomar banho de álcool após cada radiografia para retirar a radiação da pele."
    ],
    correctIndex: 0,
    explanation: "Ao contrário da contaminação radioativa particulada (onde substâncias radioativas são inaladas, ingeridas ou derramadas na pele), os Raios X são ondas eletromagnéticas (fotões) geradas eletricamente numa ampola: viajam à velocidade da luz (300.000 km/s) e interagem com a matéria em nanosssegundos. No instante em que o gerador elétrico é desativado, o feixe é interrompido imediatamente. Nem o doente, nem a maca, nem as paredes nem o ar retêm qualquer radiação residual, não havendo qualquer perigo de contaminação.",
    distractorAnalysis: [
      "Opção B é um mito popular falso; um doente de radiografia convencional não tem qualquer radioatividade residual no seu corpo.",
      "Opção C confunde radiação X com substâncias fosforescentes que emitem luz fria visível.",
      "Opção D é uma prática inútil que causaria apenas dermatite química sem qualquer efeito sobre raios X que já passaram pelo corpo."
    ],
    nursingApplication: "Desmistificar o medo da radiação com base científica é essencial no acolhimento ao doente e à família: o enfermeiro tranquiliza os acompanhantes e os profissionais de que uma radiografia ou TAC não deixa o doente 'radioativo', podendo os familiares prestar cuidados físicos diretos e abraçar o doente logo a seguir ao exame sem qualquer risco de radiação."
  },
  {
    id: 538,
    topicId: 5,
    question: "A mamografia utiliza feixes de Raios X de baixa quilovoltagem de pico (kVp entre 25 e 32 kV). Qual é a razão biofísica para a seleção desta baixa energia fotónica na imagem da mama?",
    options: [
      "Porque em baixas energias prevalece o Efeito Fotoelétrico (com dependência em 1/E³ e Z³), maximizando a diferenciação subtil de atenuação entre o tecido glandular mamário, a gordura e microcalcificações patológicas ricas em cálcio (indicadoras precoces de neoplasia).",
      "Porque tubos de alta voltagem fariam a mama derreter instantaneamente.",
      "Porque o molibdénio é um metal que só funciona na presença de ar frio.",
      "Para evitar que os raios X atravessem as costelas e atinjam o pulmão."
    ],
    correctIndex: 0,
    explanation: "A mama é constituída predominantemente por tecidos moles de números atómicos e densidades muito semelhantes: tecido glandular fibroadenoso e tecido adiposo subcutâneo. Se fossem utilizados raios X de alta energia (como 100-120 kVp de um tórax), o efeito Compton dominaria, resultando numa imagem quase uniforme cinzenta sem qualquer contraste tecidual. Operando com baixas energias (25 a 30 kVp), explora-se a dependência cúbica do efeito fotoelétrico, destacando as minúsculas microcalcificações milimétricas com alto número atómico Z de cálcio em branco nítido contra o fundo cinzento.",
    distractorAnalysis: [
      "Opção B é uma afirmação exagerada sem base térmica ou física.",
      "Opção C confunde propriedades mecânicas do ânodo com o processo quântico de emissão de radiação.",
      "Opção D ignora que a compressão mamária e a colimação são os fatores que isolam a mama e protegem as estruturas torácicas profundas."
    ],
    nursingApplication: "Na consulta de saúde da mulher e rastreio de cancro de mama, o enfermeiro explica à utente a razão da compressão mecânica firme da mama durante a mamografia: a compressão adelgaça o tecido (menor espessura x na lei exponencial I = I₀ · e^(-μ·x)), reduz a dose de radiação necessária, diminui a sobreposição de estruturas glandulares e reduz a radiação de dispersão, aumentando a acuidade do diagnóstico precoce."
  },
  {
    id: 539,
    topicId: 5,
    question: "O fenómeno de 'Morte Pré-Implantação' por radiação ionizante no feto ocorre quando a exposição acidental grave ocorre em qual período cronológico da gestação?",
    options: [
      "Nas duas primeiras semanas após a conceção (fase de pré-implantação / blastocisto), operando sob a lei do 'Tudo-ou-Nada' (ou o concepto morre e é abortado espontaneamente sem malformações, ou regenera-se integralmente sem sequelas).",
      "No 9.º mês imediatamente antes do parto vaginal.",
      "Apenas durante o período de lactação após o nascimento.",
      "Aos 5 anos de idade da criança."
    ],
    correctIndex: 0,
    explanation: "A resposta radiobiológica pré-natal divide-se em 3 fases: 1) Pré-implantação (semanas 1 a 2 pós-fecundação): o embrião é composto por poucas células estaminais totipotentes. Vigora a lei do 'tudo-ou-nada' — doses significativas (>0,1 Gy) causam morte embrionária precoce e aborto subclínico espontâneo; se sobreviver, as células pluripotentes remanescentes compensam o dano e o feto desenvolve-se normalmente; 2) Organogénese (semanas 3 a 8): máxima vulnerabilidade a malformações estruturais congénitas (teratogénese); 3) Fase fetal (semanas 9 a 25): maior risco de atraso mental grave e microcefalia.",
    distractorAnalysis: [
      "Opção B descreve a fase terminal fetal onde o risco de malformações morfológicas estruturais principais é muito baixo (embora persista o risco estocástico de leucemia na infância).",
      "Opção C e D situam-se no período pós-natal exterior ao útero materno."
    ],
    nursingApplication: "A 'Regra dos 10 Dias' (ou dos 28 dias) na prescrição de radiologia médica a mulheres em idade fértil exige que o enfermeiro questione ativamente sobre a data da última menstruação (DUM) e possibilidade de gravidez antes de exames radiológicos que envolvam a pelve ou abdómen, prevenindo a irradiação inadvertida de embriões na fase crítica de clivagem e organogénese."
  },
  {
    id: 540,
    topicId: 5,
    question: "No contexto da dosimetria de pacientes pediátricos, por que motivo as crianças são significativamente mais suscetíveis aos efeitos estocásticos (cancro radioinduzido tardio) do que os adultos para a mesma dose de Raios X?",
    options: [
      "Porque as crianças possuem tecidos biológicos com taxas muito superiores de divisão celular ativa e têm uma expectativa de vida muito mais longa pela frente para manifestar os cancros de longo período de latência (risco cumulativo até 3 a 5 vezes superior ao de um adulto).",
      "Porque as crianças não possuem sistema imunitário capaz de combater bactérias.",
      "Porque os ossos pediátricos são feitos exclusivamente de urânio puro.",
      "Porque as crianças são imunes à radiação e não sofrem qualquer efeito biológico."
    ],
    correctIndex: 0,
    explanation: "Crianças são particularmente vulneráveis aos efeitos tardios da radiação por duas razões biológicas: 1) Lei de Bergonié-Tribondeau: os seus órgãos estão em pleno crescimento e mitose celular intensa, sendo muito mais suscetíveis a danos cromossómicos persistentes; 2) Fator de esperança de vida: os tumores sólidos radioinduzidos têm períodos de latência de 10 a 30 anos (e as leucemias de 2 a 10 anos). Uma criança de 5 anos viverá décadas suficientes para manifestar a neoplasia, ao passo que um indivíduo de 85 anos frequentemente não atingirá o término desse período de latência.",
    distractorAnalysis: [
      "Opção B confunde imunidade antibacteriana com reparação de danos de radiação no DNA.",
      "Opção C é um absurdo radioquímico evidente.",
      "Opção D nega a vulnerabilidade pediátrica bem documentada pela ICRP."
    ],
    nursingApplication: "A campanha internacional 'Image Gently' em pediatria norteia a atuação de enfermagem: exigir a adaptação dos parâmetros do equipamento (reduzir mA e kVp ao peso da criança), utilizar protetores gonadais de chumbo sempre que possível e priorizar métodos de diagnóstico sem radiação ionizante (como a Ecografia ou Ressonância Magnética) para investigar dores abdominais pediátricas (apendicite)."
  },
  {
    id: 541,
    topicId: 5,
    question: "A grelha antidifusora (grelha de Potter-Bucky) é colocada entre o doente e o detetor de imagem nas radiografias de partes espessas (tórax, abdómen, bacia). Qual é a sua função física primordial?",
    options: [
      "Barrar e absorver através de finas lâminas de chumbo a radiação dispersa de Compton que sai obliquamente do corpo do doente, permitindo que apenas os fotões do feixe primário retilíneo atinjam o filme, aumentando drasticamente a nitidez e o contraste da imagem.",
      "Aumentar a temperatura do detetor para acelerar o processo digital.",
      "Ampliar o tamanho da imagem dos órgãos como se fosse uma lupa gigante.",
      "Eliminar a necessidade de ligar o tubo de raios X à corrente elétrica."
    ],
    correctIndex: 0,
    explanation: "Em doentes espessos (>10 a 12 cm de espessura de tecido), a quantidade de fotões espalhados por efeito Compton supera largamente a dos fotões primários transmitidos. Se estes fotões espalhados obliquamente atingissem o detetor, criariam um nevoeiro uniforme acinzentado destruindo o contraste da imagem. A grelha antidifusora é formada por lâminas paralelas ultrafinas de chumbo espaçadas por material radiotransparente (alumínio ou carbono): os raios primários em linha reta passam pelos canais, mas os raios dispersos oblíquos colidem contra as lâminas de chumbo e são absorvidos.",
    distractorAnalysis: [
      "Opção B confunde absorção de radiação com circuitos térmicos de aquecimento.",
      "Opção C confunde propriedades geométricas de dispersão com ampliação ótica de lentes.",
      "Opção D viola os princípios básicos de funcionamento do tubo de raios X."
    ],
    nursingApplication: "Como a grelha antidifusora absorve também uma pequena fração de fotões primários úteis, o seu uso exige aumentar a dose de exposição (mAs) em relação a um exame sem grelha. O enfermeiro sabe que grelhas de Potter-Bucky não devem ser utilizadas em recém-nascidos e extremidades finas (mãos e pés), onde a radiação dispersa é insignificante, poupando doses desnecessárias ao doente."
  },
  {
    id: 542,
    topicId: 5,
    question: "O produto dose-área (DAP - Dose Area Product, expresso em Gy·cm² ou cGy·cm²) é um indicador dosimétrico comum registado em exames fluoroscópicos e radiológicos. O que quantifica este parâmetro biofísico?",
    options: [
      "O produto da dose média de radiação incidente na superfície pela área transversal da secção do feixe colimado, refletindo a quantidade total de energia de radiação entregue ao doente e correlacionando-se diretamente com o risco estocástico de cancro.",
      "A área da sala cirúrgica multiplicada pelo número de camas.",
      "A quantidade de chumbo gasta na pintura das paredes hospitalares.",
      "O peso do tubo de raios X em quilogramas dividido pelos minutos de cirurgia."
    ],
    correctIndex: 0,
    explanation: "O DAP (Dose-Area Product) é medido por uma câmara de ionização transparente montada no colimador do tubo: DAP = Dose × Área (Gy·cm²). Tem uma propriedade física notável: como a intensidade decresce com 1/d² e a área do feixe cresce com d² à medida que se afasta do foco, o produto DAP permanece CONSTANTE com a distância! Ele mede a energia radiológica total injetada no corpo do doente, sendo o melhor indicador para avaliar o risco de indução de efeitos estocásticos tardios.",
    distractorAnalysis: [
      "Opção B confunde dosimetria com arquitetura e dimensionamento civil hospitalar.",
      "Opção C é um absurdo de construção civil sem relevância dosimétrica no doente.",
      "Opção D inventa grandezas mecânicas sem correlação com a energia eletromagnética absorvida."
    ],
    nursingApplication: "O valor de DAP acumulado ao longo de procedimentos complexos de radiologia de intervenção é registado no processo clínico do doente pelo enfermeiro: valores elevados de DAP alertam a equipa médica e de enfermagem para o risco de lesões determinísticas cutâneas tardias, agendando uma consulta de vigilância da pele 30 dias após o procedimento."
  },
  {
    id: 543,
    topicId: 5,
    question: "No pós-operatório de uma artroplastia da anca ou colocação de pacemaker definitivo, qual é a razão pela qual a Tomografia Computorizada (TAC) da região operada sofre de 'Artefactos Metálicos de Endurecimento do Feixe' (metal streaking artifacts)?",
    options: [
      "Porque o titânio ou o aço das próteses possuem número atómico e densidade extremamente elevados, absorvendo 100% dos fotões X que os atingem (atenuação infinita), gerando sombras brancas e faixas escuras radiadas no algoritmo de reconstrução matemática que obscurecem os tecidos moles adjacentes.",
      "Porque os implantes metálicos começam a derreter com o calor dos raios X da TAC.",
      "Porque o metal absorve o ar da sala e cria vácuo dentro do corpo do doente.",
      "Porque os computadores da TAC não reconhecem materiais sólidos."
    ],
    correctIndex: 0,
    explanation: "Metais densos (titânio Z=22, cobalto Z=27, crómio Z=24, ouro Z=79) possuem uma densidade eletrónica colossal comparada com a água e o osso. Ao passarem pela prótese, praticamente todos os fotões de energias baixas e médias são totalmente absorvidos por efeito fotoelétrico. Esta atenuação extrema provoca o 'endurecimento severo do feixe' (apenas os fotões ultra-energéticos passam) e o fenómeno de 'starvation de fotões' (zero fotões atingem os detetores no trajeto que cruza o metal). Na reconstrução tomográfica por retroprojeção filtrada surgem as faixas brilhantes e negras características.",
    distractorAnalysis: [
      "Opção B é falsa; os raios X diagnósticos depositam energias minúsculas incapazes de alterar a temperatura do titânio.",
      "Opção C viola as leis da densidade da matéria e estanquicidade tecidual.",
      "Opção D confunde algoritmos matemáticos de transformada de Radon com incapacidade de processamento de materiais."
    ],
    nursingApplication: "O enfermeiro informa a equipa de imagiologia sobre a presença de implantes metálicos ou próteses ortopédicas: os técnicos utilizam algoritmos avançados de software de redução de artefactos metálicos (MAR / SEMAR) e aumentam a quilovoltagem (kVp) para minimizar as faixas de distorção e conseguir avaliar com precisão a presença de hematomas ou infeções periprotésicas."
  },
  {
    id: 544,
    topicId: 5,
    question: "A 'Radiografia com Bário' (ex: trânsito esofagogástrico ou enema opaco) utiliza suspensões orais ou retais de Sulfato de Bário (BaSO₄). Qual é o cuidado de enfermagem imediato e crucial após a conclusão do exame com bário?",
    options: [
      "Garantir a hidratação abundante do doente (ingestão hídrica oral ou soroterapia) e orientar sobre a emissão de fezes esbranquiçadas, para prevenir a compactação e dessecação do sulfato de bário no cólon (formação de 'baritoma' fecal) que pode causar obstipação severa ou oclusão intestinal mecânica.",
      "Manter o doente em repouso absoluto na cama sem comer nada durante cinco dias.",
      "Administrar ácido clorídrico concentrado para dissolver o bário no estômago.",
      "Exigir que o doente permaneça no escuro para não descolorar a pele."
    ],
    correctIndex: 0,
    explanation: "O sulfato de bário é um sal inorgânico insolúvel extremamente pesado e inabsorvível pela mucosa digestiva. À medida que percorre o trato gastrointestinal, o cólon absorve água do bolo fecal: se o doente não ingerir água suficiente no pós-exame, a suspensão de bário precipita e resseca numa massa pétrea dura e compacta (baritoma ou fecaloma por bário), capaz de provocar impactação fecal severa, necrose por pressão na parede do cólon ou perfuração intestinal.",
    distractorAnalysis: [
      "Opção B agravaria drasticamente a desidratação e o endurecimento do bário intraluminal.",
      "Opção C provocaria queimaduras químicas cáusticas letais no esófago e estômago.",
      "Opção D é uma crendice sem nexo biomédico."
    ],
    nursingApplication: "Na alta de doentes após exames com bário, o enfermeiro educa o doente e a família: incentivar a ingestão de pelo menos 2 litros de água nas primeiras 24 horas, esclarecer que a eliminação de fezes brancas como gesso nos dias seguintes é um processo normal de depuração do contraste, e prescrever/administrar laxantes osmóticos suaves se houver atraso na evacuação."
  },
  {
    id: 545,
    topicId: 5,
    question: "O conceito de 'Linear Energy Transfer' (LET - Transferência Linear de Energia) quantifica a taxa média de energia depositada pela radiação por unidade de comprimento percorrido no tecido (expressa em keV/μm). Em termos de LET, como se classificam os Raios X e as Radiações Gama em comparação com as Partículas Alfa?",
    options: [
      "Os Raios X e as Radiações Gama são radiações de BAIXO LET (~0,2 a 3 keV/μm), produzindo ionizações esparsas e dispersas ao longo do seu trajeto, com maior capacidade de reparação celular do DNA; as partículas Alfa são radiações de ALTO LET (~100 keV/μm), gerando densas trilhas de ionizações contíguas devastadoras.",
      "Os Raios X são radiações de alto LET e as partículas alfa de baixo LET.",
      "Todas as radiações possuem rigorosamente o mesmo valor de LET no vácuo.",
      "O LET de uma radiação diminui para zero assim que atinge uma célula viva."
    ],
    correctIndex: 0,
    explanation: "O LET mede a densidade espacial de deposição de energia ao longo da trajetória da radiação. Os fotões X e gama são radiações de baixo LET (baixo poder de transferência linear de energia): ejetam eletrões rápidos que depositam energia de forma pontual e esparsa no citoplasma e núcleo, produzindo predominantemente quebras simples de cadeia de DNA (single-strand breaks), que são facilmente reparadas pelas enzimas da célula. Partículas alfa (núcleos de hélio pesados), com alto LET, depositam pacotes brutais de energia em trajetos submicrométricos, causando quebras duplas complexas irreparáveis de DNA (double-strand breaks).",
    distractorAnalysis: [
      "Opção B inverte a física do LET entre fotões eletromagnéticos leves e iões pesados.",
      "Opção C ignora a enorme disparidade física de massas e cargas entre fotões (sem carga nem massa) e partículas carregadas pesadas.",
      "Opção D nega a própria definição de LET, que traduz a desaceleração contínua por perda de energia de colisões na matéria viva."
    ],
    nursingApplication: "Compreender que os raios X têm baixo LET fundamenta o protocolo de fracionamento da dose em radioterapia: distribuir a dose total ao longo de várias semanas permite que os tecidos normais saudáveis circundantes (com sistemas enzimáticos de reparação intactos para quebras de baixo LET) reparem o dano do DNA nos intervalos entre sessões, aumentando a tolerância clínica do doente."
  },
  {
    id: 546,
    topicId: 5,
    question: "Na sala de operações durante cirurgias ortopédicas de fixação de fraturas, se o enfermeiro instrumentista ou circulante tiver de permanecer a menos de 1 metro do doente durante disparos de escopia com arco em C, qual é o conjunto de Equipamento de Proteção Individual (EPI) radiológico indispensável?",
    options: [
      "Avental de chumbo (mínimo 0,35 a 0,5 mm Pb equivalente), Protetor de tiroide ajustado ao pescoço, Óculos de vidro plumbífero com proteção lateral e Dosímetro individual por baixo do avental.",
      "Bata cirúrgica descartável de papel e máscara de três camadas simples.",
      "Luvas de procedimento de vinil comuns e touca de algodão.",
      "Nenhum EPI é necessário se o enfermeiro fechar os olhos durante o disparo."
    ],
    correctIndex: 0,
    explanation: "A proximidade direta (<1 metro) da mesa cirúrgica coloca o enfermeiro na zona de máxima densidade de fluxo de radiação dispersa de Compton emitida pelo doente. A proteção radiológica individual abrangente é mandatória: o avental de chumbo protege a medula óssea dos ossos chatos, pulmões e gónadas; o protetor de tiroide protege a glândula contra o risco estocástico de carcinoma tiroideu; e os óculos plumbíferos blindam o cristalino contra a opacificação cataratal determinística.",
    distractorAnalysis: [
      "Opção B protege apenas contra microrganismos biológicos estéreis e fluidos, sendo totalmente transparente aos raios X.",
      "Opção C não possui densidade suficiente para atenuar fotões X.",
      "Opção D é uma negligência grave das normas de segurança no trabalho."
    ],
    nursingApplication: "O uso rigoroso de todo o conjunto de EPI de chumbo é um dever deontológico e profissional de saúde: o enfermeiro nunca deve aceitar a desculpa de 'ser apenas um disparo rápido de confirmação', pois a dose cumulativa de dezenas de pequenos disparos diários ao longo de meses atinge valores expressivos de exposição ocupacional."
  },
  {
    id: 547,
    topicId: 5,
    question: "O conceito de 'Quilovoltagem de Pico' (kVp) no comando de controlo do aparelho de Raios X determina primariamente qual característica física do feixe de radiação?",
    options: [
      "A diferença de potencial elétrico aplicada entre o cátodo e o ânodo, determinando a energia cinética máxima dos eletrões e, consequentemente, a energia e o poder de PENETRAÇÃO dos fotões X emitidos (qualidade do feixe).",
      "A corrente que atravessa o filamento, determinando apenas o número de fotões emitidos.",
      "A velocidade de rotação da mesa cirúrgica em rotações por minuto.",
      "A cor da luz piloto que se acende no painel de comando."
    ],
    correctIndex: 0,
    explanation: "A quilovoltagem de pico (kVp, variando clinicamente de 40 kV em extremidades até 150 kV em tórax/TAC) estabelece a diferença de potencial elétrico acelerador: um eletrão acelerado por 100 kV adquire 100 keV de energia cinética. Quanto maior o kVp: maior é a energia máxima dos fotões Bremsstrahlung, maior é a sua frequência, menor o seu comprimento de onda e maior a sua PENETRÂNCIA através de tecidos densos ('qualidade' do feixe). Em contrapartida, o produto corrente-tempo (mAs) controla a 'quantidade' total de fotões gerados.",
    distractorAnalysis: [
      "Opção B confunde kVp com os miliamperes-segundo (mAs, que governa a quantidade de fotões).",
      "Opção C e D referem atributos mecânicos e visuais secundários irrelevantes para a física quântica do feixe."
    ],
    nursingApplication: "Compreender que o kVp governa a penetração ajuda o enfermeiro a antecipar ajustes técnicos em doentes acamados de grande porte físico: ao radiografar um doente com derrame pleural massivo ou obesidade mórbida no leito, elevar o kVp é a única forma física de permitir que os fotões atravessem a densa camada líquida e cheguem ao detetor com contraste útil."
  },
  {
    id: 548,
    topicId: 5,
    question: "O conceito de 'Miliamperes-segundo' (mAs) no gerador de Raios X expressa o produto da corrente do filamento catódico pelo tempo de exposição em segundos. Fisicamente, o que governa a regulação dos mAs?",
    options: [
      "O número total de eletrões que colidem com o ânodo e, consequentemente, a QUANTIDADE total de fotões de Raios X emitidos pelo tubo durante o disparo (intensidade do feixe).",
      "A energia máxima que cada fotão individual transporta no vácuo.",
      "A espessura da blindagem de betão das paredes do hospital.",
      "A frequência de pulso cardíaco do doente medida no oxímetro."
    ],
    correctIndex: 0,
    explanation: "A corrente de tubo (medida em miliamperes, mA) determina o fluxo de eletrões libertados por emissão termiónica no cátodo de tungsténio aquecido. Ao multiplicar a corrente mA pelo tempo do disparo em segundos (s), obtém-se a carga total em miliCoulombs: mAs = mA · s. Como a cada eletrão incidente corresponde uma probabilidade fixa de gerar fotões X, duplicar os mAs duplica o número total de fotões do feixe primário e duplica a dose de radiação entregue ao doente, sem alterar a penetrância (kVp) individual dos fotões.",
    distractorAnalysis: [
      "Opção B é a função exclusiva da quilovoltagem de pico (kVp), não dos mAs.",
      "Opção C é um parâmetro arquitetónico e estrutural de radioproteção civil.",
      "Opção D é uma variável fisiológica independente do circuito elétrico da máquina de raios X."
    ],
    nursingApplication: "Na radiografia pediátrica e no doente agitado ou com taquipneia, os enfermeiros e técnicos priorizam tempos de exposição 's' ultracurtos (milissegundos) com mA elevado para obter os mAs necessários: isto elimina artefactos de movimento (tremor, respiração) na radiografia, prevenindo a necessidade de repetir o exame e duplicar a dose de radiação."
  },
  {
    id: 549,
    topicId: 5,
    question: "Na avaliação da radioproteção de uma sala de exames imagiológicos, a zona onde as doses de radiação podem ultrapassar os limites do público geral é devidamente delimitada e sinalizada como 'Zona Controlada' ou 'Zona Vigiada'. Qual é o símbolo internacional obrigatório afixado nas portas destas salas?",
    options: [
      "O Trifólio de Radiação Ionizante (símbolo de três pás circulares a 120° num fundo contrastante), acompanhado de sinalética de perigo de radiação.",
      "Uma cruz vermelha em fundo branco simples.",
      "A caveira clássica de pirata em fundo negro.",
      "Um semáforo verde permanentemente aceso."
    ],
    correctIndex: 0,
    explanation: "A norma internacional (ISO 361) padroniza o Trifólio de Radiação como o símbolo universal de alerta para a presença de radiações ionizantes: consiste numa lâmina circular central com três pás que se estendem a intervalos de 60° (disposição a 120° mútuos). Em hospitais, placas com o trifólio (de cor cinzenta para zona vigiada e verde/amarela/laranja para zonas controladas de maior taxa de dose) com a menção expressa de 'Acesso Condicionado' alertam profissionais e o público contra a entrada inadvertida durante disparos.",
    distractorAnalysis: [
      "Opção B é o símbolo internacional humanitário dos serviços de socorro médico e enfermagem militar da Cruz Vermelha.",
      "Opção C é o pictograma clássico para agentes químicos tóxicos venenosos ou pirataria marítima.",
      "Opção D indicaria passagem livre sem qualquer restrição de segurança."
    ],
    nursingApplication: "O enfermeiro garante que as portas das salas com sinalização de trifólio de radiação permanecem firmemente fechadas durante todos os procedimentos com emissão ativa de raios X, impedindo a entrada inadvertida de doentes desorientados, acompanhantes, estudantes ou profissionais desprotegidos."
  },
  {
    id: 550,
    topicId: 5,
    question: "Em caso de extravasamento periférico acidental de um Meio de Contraste Iodado para o tecido celular subcutâneo do braço durante uma injeção rápida por injetor automático de TAC (bolus a 3 a 5 mL/s), qual é a complicação mecânica aguda mais grave que o enfermeiro deve monitorizar?",
    options: [
      "Síndrome Compartimental aguda do antebraço provocada pela elevação drástica da pressão intersticial e efeito hiperosmolar do contraste nos compartimentos musculares fechados, com risco de isquemia muscular e necrose nervosa.",
      "Transformação instantânea do braço numa estrutura óssea sólida de hidroxiapatite.",
      "Contaminação do ar da sala de TAC por radiação ultravioleta gama.",
      "Aumento imediato da acuidade visual do doente para 200%."
    ],
    correctIndex: 0,
    explanation: "Os injetores de contraste modernos debitam volumes de 80 a 150 mL de meio de contraste iodado viscoso e hiperosmolar sob pressões elevadas (>200-300 psi) a velocidades rápidas (3 a 5 mL/s). Se o cateter venoso periférico romper ou sair da veia, um volume maciço (>50 a 100 mL) extravasa subitamente para os tecidos subcutâneos e compartimentos musculares inextensíveis do antebraço. A pressão intracompartimental dispara (agravada pela atração osmótica adicional de água), comprimindo os vasos perfurantes e o nervo mediano e radial (Síndrome Compartimental pós-extravasamento), exigindo vigilância neurovascular contínua.",
    distractorAnalysis: [
      "Opção B confunde infiltração química líquida com osteogénese acelerada de ficção.",
      "Opção C confunde um acidente mecânico com extravasamento de fármaco com fenómenos nucleares atmosféricos.",
      "Opção D é um efeito fantástico desprovido de plausibilidade fisiológica."
    ],
    nursingApplication: "Na ocorrência de um extravasamento significativo de contraste, a intervenção imediata de enfermagem inclui: suspender a infusão, tentar aspirar parte do fluido pelo cateter antes de o remover, elevar o membro acima do coração, aplicar compressas frias para diminuir o edema e a dor, medir o perímetro do membro e monitorizar os pulsos e sensibilidade dos dedos de 15 em 15 minutos, solicitando avaliação imediata da cirurgia plástica/vascular se houver suspeita de síndrome compartimental."
  }
];
