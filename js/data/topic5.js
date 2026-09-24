/**
 * Tópico 5: Radiações, Raios X, Aplicações Terapêuticas e Diagnóstico
 * 200 Questões Clínicas Rigorosas para o 1.º Ano de Enfermagem (IDs 5001 a 5200)
 */

const TOPIC_5_QUESTIONS = [
  {
    "id": 5001,
    "topicId": 5,
    "question": "As radiações dividem-se fundamentalmente em ionizantes e não-ionizantes. Qual é a característica biofísica que define uma radiação como 'Ionizante'?",
    "options": [
      "Possuir energia fotónica ou cinética suficiente (geralmente superior a cerca de 10 a 12 eV) para arrancar eletrões orbitais dos átomos da matéria biológica, criando pares de iões quimicamente reativos.",
      "Apresentar uma cor verde brilhante visível a olho nu na escuridão.",
      "Propagar-se exclusivamente na presença de água líquida com pH ácido.",
      "Aquecer os tecidos humanos sem alterar qualquer ligação atómica ou molecular."
    ],
    "correctIndex": 0,
    "explanation": "Uma radiação é classificada como ionizante quando a sua energia por fotão ou partícula supera a energia de ligação dos eletrões mais externos da matéria biológica (~10-12 eV, limiar de ionização da água e do carbono). Ao interagir com o tecido, arranca eletrões, convertendo átomos neutros estáveis em iões carregados positivos e eletrões livres, desencadeando reações químicas e quebras nas macromoléculas de DNA.",
    "distractorAnalysis": [
      "Está incorreta: confunde radiações invisíveis de alta energia com o fenómeno de fluorescência ou fosforescência quimioluminescente.",
      "Está incorreta porque ; as radiações propagam-se no vácuo e em qualquer meio material.",
      "Está incorreta: descreve o mecanismo das radiações NÃO-IONIZANTES de baixa frequência (como as micro-ondas e radiofrequência), que apenas produzem agitação térmica molecular."
    ],
    "nursingApplication": "O enfermeiro identifica como radiações ionizantes hospitalares os Raios X (radiologia convencional, TAC, hemodinâmica/fluoroscopia) e os Raios Gama e partículas emitidas em Medicina Nuclear e Radioterapia. Todas exigem protocolos estritos de radioproteção para prevenir mutações celulares em profissionais e doentes."
  },
  {
    "id": 5002,
    "topicId": 5,
    "question": "A radiação eletromagnética é constituída por pacotes discretos de energia (quanta) designados por fotões. De acordo com a equação de Planck-Einstein (E = h · f = h · c / λ), como se correlaciona a energia fotónica com o comprimento de onda (λ) e a frequência (f)?",
    "options": [
      "A energia do fotão é diretamente proporcional à sua frequência (f) e inversamente proporcional ao seu comprimento de onda (λ); radiações de curtíssimo comprimento de onda (como os Raios X e Gama) possuem altíssima energia fotónica.",
      "A energia é diretamente proporcional ao comprimento de onda, pelo que as ondas de rádio longas têm maior energia que os Raios X.",
      "A energia de todos os fotões é rigorosamente constante e independente da frequência.",
      "A velocidade do fotão no vácuo varia proporcionalmente com a temperatura do quarto."
    ],
    "correctIndex": 0,
    "explanation": "A fórmula de Max Planck e Albert Einstein estabelece que E = h · f, onde h é a constante de Planck (6,626 × 10⁻³⁴ J·s). Como a velocidade da luz é c = λ · f => f = c / λ, temos E = (h · c) / λ. Assim, quanto menor o comprimento de onda λ (Raios X com λ de 0,01 a 10 nanómetros), maior é a frequência f e colossal é a energia individual de cada fotão (dezenas a centenas de keV), conferindo-lhe poder ionizante letal para o DNA.",
    "distractorAnalysis": [
      "Está incorreta: afirma o inverso matemático da relação E ∝ 1/λ.",
      "Está incorreta: ignora a quantização da radiação no espectro eletromagnético.",
      "Está incorreta: viola a constante universal da velocidade da luz no vácuo (c ≈ 3 × 10⁸ m/s)."
    ],
    "nursingApplication": "Esta relação biofísica explica por que os telemóveis e o Wi-Fi (micro-ondas de grande comprimento de onda e baixa energia fotónica de micro-eV) são incapazes de romper o DNA humano, ao passo que uma única exposição a Raios X de alto kvP (alta frequência e comprimento de onda subnanométrico) carrega fotões com energia suficiente para quebrar ligações fosfodiéster dos cromossomas."
  },
  {
    "id": 5003,
    "topicId": 5,
    "question": "No tubo de produção de Raios X clássico (Tubo de Coolidge), qual é a percentagem aproximada de energia cinética dos eletrões bombardeados contra o ânodo de tungsténio que é efetivamente convertida em Raios X úteis?",
    "options": [
      "Apenas cerca de 1% (ou menos), sendo os restantes 99% dissipados sob a forma de calor térmico no ânodo.",
      "Aproximadamente 99% de Raios X e apenas 1% de calor.",
      "Exatamente 50% de Raios X e 50% de luz solar visível.",
      "100% de conversão direta em fotões sem qualquer libertação térmica."
    ],
    "correctIndex": 0,
    "explanation": "O processo de produção de Raios X por colisão eletrónica em alvos metálicos pesados é extremamente ineficiente do ponto de vista energético: cerca de 99% das colisões dos eletrões com a nuvem eletrónica dos átomos de tungsténio resultam em excitações térmicas atómicas que se dissipam como calor colossal no ânodo. Apenas cerca de 0,5% a 1% da energia cinética dos eletrões dá origem a fotões de Raios X por Bremsstrahlung ou emissão característica.",
    "distractorAnalysis": [
      "Está incorreta: inverte drasticamente o rendimento físico do tubo de Coolidge.",
      "Está incorreta: propõe uma partição irreal que violaria a eletrodinâmica quântica do tungsténio.",
      "Está incorreta: descreveria um emissor ideal perfeito sem entropia térmica impossível."
    ],
    "nursingApplication": "Esta colossal produção de calor (99%) explica por que os tubos de Raios X e de TAC possuem pesados ânodos giratórios banhados em óleo dielétrico de refrigeração e sistemas de circulação de água: se o enfermeiro ou técnico disparar exposições repetidas de alta voltagem sem respeitar os tempos de arrefecimento da ampola, o ânodo funde-se e o equipamento avaria irreversivelmente."
  },
  {
    "id": 5004,
    "topicId": 5,
    "question": "No espetro de radiação emitido por um tubo de Raios X, como é gerada a chamada 'Radiação de Travagem' (Bremsstrahlung)?",
    "options": [
      "Pela desaceleração e deflexão rápida de eletrões incidentes de alta energia cinética ao passarem próximo do campo elétrico positivo do núcleo dos átomos de tungsténio do ânodo, perdendo energia cinética que é emitida sob a forma de um fotão X de espetro contínuo.",
      "Pelo choque frontal de dois protões dentro do filamento do cátodo.",
      "Pela fusão nuclear dos núcleos de hidrogénio no interior do vácuo do tubo.",
      "Pela passagem de corrente contínua através da pele do doente."
    ],
    "correctIndex": 0,
    "explanation": "Bremsstrahlung (do alemão 'radiação de travagem') ocorre quando um eletrão acelerado penetra na nuvem eletrónica do alvo de tungsténio e passa junto ao núcleo de carga positiva (+74e). A atração coulombiana curva a trajetória do eletrão e desacelera-o bruscamente. Pela eletrodinâmica clássica, qualquer carga elétrica acelerada/desacelerada emite radiação eletromagnética: a perda de energia cinética do eletrão surge como um fotão X. Como a aproximação ao núcleo pode ocorrer a qualquer distância, o espetro emitido é contínuo, com energia máxima até ao valor de pico da voltagem (kVp).",
    "distractorAnalysis": [
      "Está incorreta porque ; o feixe do tubo é constituído por eletrões negativos emitidos termionicamente, não por protões acelerados.",
      "Está incorreta: descreveria uma reação termonuclear estelar de fusão.",
      "Está incorreta: descreveria eletrocussão iatrogénica sem relação com a física interna da ampola de vácuo."
    ],
    "nursingApplication": "A radiação de travagem é responsável por mais de 80% a 90% de todos os fotões do feixe primário numa radiografia convencional de tórax. O conhecimento do kVp ajustado pelo operador permite ao enfermeiro compreender a penetrância do feixe: maior kVp gera fotões Bremsstrahlung mais energéticos capazes de atravessar doentes obesos sem subexposição."
  },
  {
    "id": 5005,
    "topicId": 5,
    "question": "O segundo mecanismo de produção no tubo de Raios X é a 'Radiação Característica'. Como se origina este tipo de fotão monoenergético discreto?",
    "options": [
      "Um eletrão incidente ejeta um eletrão da camada mais interna (camada K) do átomo do ânodo; a vaga aberta é imediatamente preenchida por um eletrão de uma camada mais externa (camadas L ou M), emitindo-se um fotão com energia rigorosamente igual à diferença entre os dois níveis energéticos atómicos (E = E_L - E_K).",
      "Pela quebra espontânea do núcleo de tungsténio em dois átomos de hélio.",
      "Pela evaporação de óleo térmico no interior da campânula de chumbo.",
      "Pelo reflexo da luz ambiente no vidro do tubo de Coolidge."
    ],
    "correctIndex": 0,
    "explanation": "A radiação característica ocorre quando a energia cinética do eletrão bombardeador supera a energia de ligação do eletrão da camada K do tungsténio (~69,5 keV). O eletrão orbital é arrancado. O átomo ionizado desexcita-se em picosssegundos: um eletrão da camada L (energia ~12 keV) ou M cai para a camada K vaga. A transição emite um fotão X com energia discreta fixa e invariável característica do tungsténio (K_alfa = 69,5 - 12,1 = 57,4 keV; K_beta ≈ 67-69 keV), formando picos finos sobrepostos ao contínuo de Bremsstrahlung.",
    "distractorAnalysis": [
      "Está incorreta: descreve fissão nuclear ou decaimento alfa, inexistente num ânodo de tungsténio estável (W-74).",
      "Está incorreta: confunde mecanismos elétricos com avarias de isolamento dielétrico.",
      "Está incorreta: confunde ótica geométrica visível com transições atómicas quânticas de raios X."
    ],
    "nursingApplication": "Na mamografia (rastreio do cancro da mama), utilizam-se tubos de Raios X com ânodos de Molibdénio (Mo) ou Ródio (Rh) em vez de tungsténio: as radiações características do molibdénio têm energias mais baixas e precisas (~17,5 a 19,6 keV), ideais para maximizar a diferenciação de contraste entre tecido glandular denso, gordura e microcalcificações tumorais mamárias."
  },
  {
    "id": 5006,
    "topicId": 5,
    "question": "A atenuação da intensidade de um feixe monoenergético de Raios X ao atravessar um tecido absorvedor homogéneo de espessura x segue uma lei de decaimento exponencial: I = I₀ · e^(-μ·x). O que representa a grandeza física μ (mi)?",
    "options": [
      "O Coeficiente de Atenuação Linear do material (unidade: cm⁻¹ ou m⁻¹), que quantifica a fração de fotões removida do feixe por unidade de espessura do tecido absorvedor.",
      "O coeficiente de atrito cinético do sangue no vaso.",
      "A massa total do esqueleto do doente dividida pelo tempo.",
      "A velocidade da luz medida dentro do osso esponjoso."
    ],
    "correctIndex": 0,
    "explanation": "Na equação I = I₀ · e^(-μ·x), I₀ é a intensidade incidente e I a transmitida após espessura x. O parâmetro μ é o Coeficiente de Atenuação Linear: depende criticamente do número atómico do material (Z), da sua densidade de massa (ρ) e da energia dos fotões incidentes (E). Quanto maior for μ (como no tecido ósseo compacto ou chumbo), mais rapidamente a radiação é atenuada e menor é a fração transmitida através da espessura x.",
    "distractorAnalysis": [
      "Está incorreta: confunde ótica radiológica com coeficientes mecânicos de atrito de superfícies.",
      "Está incorreta: inventa uma razão sem qualquer sentido na física da radiação.",
      "Está incorreta: descreve a refração eletromagnética, não a taxa de atenuação fotónica exponencial."
    ],
    "nursingApplication": "A enorme diferença nos coeficientes de atenuação linear μ entre o ar pulmonar, o músculo cardíaco e o osso costal é a base física da imagem radiológica: estruturas com alto μ atenuam os Raios X e projetam uma 'sombra' branca na película (radiopacas), enquanto estruturas com baixo μ deixam passar os fotões enegrecendo o detetor (radiotransparentes)."
  },
  {
    "id": 5007,
    "topicId": 5,
    "question": "O conceito de 'Camada Hemirredutora' (HVL - Half-Value Layer) na física das radiações define-se como:",
    "options": [
      "A espessura de um determinado material absorvedor necessária para reduzir a intensidade do feixe de radiação incidente exatamente para metade do seu valor inicial (I = I₀ / 2).",
      "A quantidade de chumbo necessária para bloquear 100% de todos os fotões existentes no universo.",
      "A camada de pele que sofre eritema após 1 hora de exposição radiológica.",
      "A espessura da película de plástico que envolve o detetor digital de Raios X."
    ],
    "correctIndex": 0,
    "explanation": "A Camada Hemirredutora (HVL) é calculada fazendo I = I₀/2 na lei exponencial: I₀/2 = I₀ · e^(-μ·HVL) => ln(1/2) = -μ·HVL => HVL = ln(2) / μ ≈ 0,693 / μ. Quanto mais penetrante ('duro') for o feixe de radiação, maior será a sua HVL. Duas HVLs reduzem a intensidade para 1/4 (25%); três HVLs reduzem para 1/8 (12,5%); e dez HVLs reduzem a intensidade para menos de 0,1% do valor incidente.",
    "distractorAnalysis": [
      "Está incorreta: é impossível porque a atenuação exponencial é assintótica (teoricamente nunca atinge o zero absoluto).",
      "Está incorreta: confunde parâmetros físicos de blindagem com efeitos biológicos cutâneos da radiação (dose eritema).",
      "Está incorreta: refere-se ao invólucro do chassi radiográfico sem relação com o valor hemirredutor de blindagem."
    ],
    "nursingApplication": "Na construção de paredes de salas de Raios X e biombos protetores hospitalares, a espessura do chumbo ou betão baritado é calculada pelos físicos médicos em múltiplos de HVL para garantir que os postos de enfermagem vizinhos recebam menos de 1 mSv por ano, assegurando ambiente de trabalho seguro para as equipas de saúde."
  },
  {
    "id": 5008,
    "topicId": 5,
    "question": "Na faixa de baixas e médias energias diagnósticas dos Raios X (20 a 100 keV), ocorrem duas interações fundamentais dos fotões com a matéria: o 'Efeito Fotoelétrico' e o 'Efeito de Dispersão de Compton'. Qual é a característica biofísica do Efeito Fotoelétrico que o torna o responsável primordial pelo CONTRASTE nas radiografias?",
    "options": [
      "A probabilidade de ocorrência do Efeito Fotoelétrico é diretamente proporcional ao CUBO do número atómico do material (Z³) e inversamente proporcional ao cubo da energia (1/E³), permitindo diferenciar fortemente o osso rico em cálcio (Z=20) dos tecidos moles (Z_médio ≈ 7,4).",
      "O Efeito Fotoelétrico ocorre exclusivamente em gases nobres e nunca no corpo humano.",
      "O Efeito Fotoelétrico produz apenas fotões dispersos que borram a imagem radiológica.",
      "A absorção fotoelétrica independe totalmente da composição química do tecido."
    ],
    "correctIndex": 0,
    "explanation": "No Efeito Fotoelétrico, o fotão X incidente colide com um eletrão interno e é TOTALMENTE absorvido, transferindo toda a sua energia e ejetando o fotoeletrão sem emitir radiação dispersa. A probabilidade por unidade de volume é proporcional a ρ · (Z/E)³. Como o cálcio do osso tem Z = 20 e os tecidos moles têm Z_médio ≈ 7,4, a absorção no osso é cerca de (20 / 7,4)³ ≈ 20 vezes maior por grama! Essa disparidade de absorção total cria a diferenciação nítida de contraste radiológico entre ossos e tecidos moles.",
    "distractorAnalysis": [
      "Está incorreta porque ; o efeito fotoelétrico é a base da radiologia médica humana.",
      "Está incorreta: descreve o Efeito Compton, que espalha radiação e degrada a qualidade da imagem.",
      "Está incorreta: contradiz a dependência cúbica crucial no número atómico Z³."
    ],
    "nursingApplication": "A dependência em Z³ justifica o uso de meios de contraste iodados (Z=53 para o iodo) ou sulfato de bário (Z=56 para o bário) que o enfermeiro administra em urografias, angiografias ou TAC: com Z colossal, estes compostos absorvem avidamente os fotões por efeito fotoelétrico, destacando a árvore vascular ou o lúmen digestivo em branco brilhante."
  },
  {
    "id": 5009,
    "topicId": 5,
    "question": "Ao contrário do efeito fotoelétrico, o 'Efeito de Dispersão de Compton' envolve a colisão de um fotão X com um eletrão livre ou fracamente ligado da camada mais externa, ejetando o eletrão e desviando o fotão com menor energia numa trajetória oblíqua. Porque é que o Efeito Compton constitui a principal fonte de perigo radiológico para o enfermeiro no bloco operatório?",
    "options": [
      "Porque o corpo do doente atua como uma fonte secundária que espalha fotões Compton em todas as direções espaciais (radiação de dispersão), atingindo a equipa de enfermagem que se encontra ao lado da mesa cirúrgica.",
      "Porque o Efeito Compton destrói instantaneamente o chumbo dos aventais de proteção.",
      "Porque os fotões Compton tornam o ar da sala radioativo durante vários dias.",
      "Porque o efeito só atua em profissionais de enfermagem, poupando os médicos cirurgiões."
    ],
    "correctIndex": 0,
    "explanation": "Na faixa de 70 a 120 kVp, a dispersão de Compton é o mecanismo predominante no tecido humano (Z baixo e rica densidade de eletrões externos). O feixe primário emitido pelo tubo atinge o doente; parte dos fotões não é absorvida nem atravessa em linha reta, sofrendo dispersão Compton em ângulos laterais e retrógrados. O doente comporta-se como um verdadeiro emissor difuso de radiação secundária espalhada para a sala, sendo esta a principal responsável pela dose ocupacional de enfermeiros que auxiliam procedimentos cirúrgicos ou de hemodinâmica.",
    "distractorAnalysis": [
      "Está incorreta porque ; o avental de chumbo atenua e absorve eficazmente os fotões Compton secundários.",
      "Está incorreta: confunde radiação eletromagnética X instantânea com contaminação radioativa particulada residual (o ar não fica ativado nem 'radioativo').",
      "Está incorreta: é uma afirmação discriminatória absurda que viola as leis universais da física das radiações."
    ],
    "nursingApplication": "Em cirurgias ortopédicas ou hemodinâmica com uso contínuo de intensificador de imagem (arco em C / fluoroscopia), o enfermeiro deve permanecer o mais afastado possível do doente durante os disparos e posicionar-se, se possível, do lado do detetor de imagem e não do lado da ampola emissora de Raios X, minimizando a receção de radiação dispersa de Compton."
  },
  {
    "id": 5010,
    "topicId": 5,
    "question": "Na interpretação sistemática de uma Radiografia Convencional de Tórax, quais são as cinco densidades radiológicas básicas da matéria dispostas por ordem CRESCENTE de atenuação dos Raios X (do mais escuro/negro para o mais claro/branco)?",
    "options": [
      "Ar (radiotransparente/negro) -> Gordura (cinzento escuro) -> Água/Tecidos Moles (cinzento claro) -> Cálcio/Osso (radiopaco/branco) -> Metal (branco brilhante absoluto).",
      "Metal -> Cálcio -> Gordura -> Água -> Ar.",
      "Ar -> Metal -> Gordura -> Cálcio -> Água.",
      "Todas as estruturas anatómicas apresentam rigorosamente a mesma tonalidade de cinzento."
    ],
    "correctIndex": 0,
    "explanation": "A escala fundamental de densidades radiográficas decorre da densidade mássica e número atómico: 1) AR (pulmões, traqueia): absorve quase zero fotões, os Raios X atingem o filme/detetor em pleno -> imagem negra (radiotransparente); 2) GORDURA (tecido celular subcutâneo): cinzento escuro; 3) ÁGUA / PARTES MOLES (coração, sangue, músculos, fígado): atenuação intermédia -> cinzento claro; 4) CÁLCIO / OSSO (costelas, clavículas): alto Z de cálcio -> absorção elevada -> branco; 5) METAL (próteses, pacemaker, clipes cirúrgicos): absorção quase total -> branco absoluto impenetrável.",
    "distractorAnalysis": [
      "Está incorreta: inverte completamente a ordem de densidade radiológica.",
      "Está incorreta: coloca o metal (máxima densidade) erroneamente na segunda posição.",
      "Está incorreta: ignora a física elementar do diagnóstico imagiológico."
    ],
    "nursingApplication": "Na radiografia de tórax de controlo após colocação de uma sonda nasogástrica (SNG), o enfermeiro pesquisa a densidade metálica do fio guia e radiopaca da ponta da sonda: deve ser visível descendo pelo esófago abaixo do diafragma até à câmara de ar gástrica (densidade ar), e NUNCA na árvore brônquica, prevenindo aspirações pulmonares letais de alimentação entérica."
  },
  {
    "id": 5011,
    "topicId": 5,
    "question": "Na Tomografia Computorizada (TC ou TAC), a atenuação dos Raios X em cada vóxel tridimensional é quantificada matematicamente através da 'Escala de Unidades Hounsfield' (HU). Quais são os valores de referência fixados nesta escala para a Água pura e para o Ar?",
    "options": [
      "Água pura = 0 HU e Ar = -1000 HU (com o Osso cortical denso a atingir +1000 HU ou superior).",
      "Água pura = +1000 HU e Ar = 0 HU.",
      "Água pura = 100 HU e Ar = 50 HU.",
      "Água pura = -1000 HU e Ar = +1000 HU."
    ],
    "correctIndex": 0,
    "explanation": "Criada por Sir Godfrey Hounsfield (Prémio Nobel de Medicina de 1979), a escala HU normaliza os coeficientes de atenuação linear dos tecidos relativamente à água: HU = 1000 × (μ_tecido - μ_água) / μ_água. Por definição internacional: a água pura é o ponto zero (0 HU); o ar atmosférico (que praticamente não atenua a radiação) corresponde a -1000 HU; a gordura situa-se entre -50 e -100 HU; os tecidos moles entre +20 e +60 HU; e o osso cortical atinge valores de +800 a +3000 HU.",
    "distractorAnalysis": [
      "Está incorreta: invertem ou distorcem os pontos de calibração universais da escala Hounsfield.",
      "Está incorreta: invertem ou distorcem os pontos de calibração universais da escala Hounsfield.",
      "Está incorreta: invertem ou distorcem os pontos de calibração universais da escala Hounsfield."
    ],
    "nursingApplication": "Em doentes admitidos com suspeita de Acidente Vascular Cerebral (AVC), a TAC craniana sem contraste diferencia instantaneamente a isquemia da hemorragia: o sangue agudo extravasado de um hematoma intracraniano apresenta alta densidade espontânea (+50 a +80 HU, hiperdenso/branco), enquanto a isquemia precoce surge como edema hipodenso (<20-30 HU, escuro). Essa distinção norteia a decisão imediata de trombólise endovenosa pelo enfermeiro."
  },
  {
    "id": 5012,
    "topicId": 5,
    "question": "Antes da administração intravenosa de um Meio de Contraste Iodado para a realização de uma TAC contrastada, qual é o parâmetro analítico laboratorial que o enfermeiro deve verificar obrigatoriamente para avaliar o risco de Nefropatia Induzida por Contraste (NIC)?",
    "options": [
      "A Creatinina sérica e o cálculo da Taxa de Filtração Glomerular estimada (eGFR), devendo haver precauções especiais ou contraindicação se a eGFR for inferior a 30 mL/min/1,73m².",
      "A contagem de plaquetas e o tempo de protrombina apenas.",
      "A glicemia capilar em jejum exclusivamente.",
      "O nível de ácido úrico na urina de 24 horas."
    ],
    "correctIndex": 0,
    "explanation": "Os meios de contraste iodados são excretados quase a 100% por filtração glomerular nos rins. Em doentes com insuficiência renal prévia, a elevada osmolaridade e viscosidade do meio de contraste causam vasoconstrição da arteríola renal e citotoxicidade direta nas células dos túbulos renais, desencadeando lesão renal aguda (nefropatia induzida por contraste). A verificação da creatinina sérica com estimativa da eGFR pelas fórmulas CKD-EPI ou MDRD é obrigatória antes de qualquer injeção intravenosa eletiva.",
    "distractorAnalysis": [
      "Está incorreta: é vital antes de procedimentos invasivos hemorrágicos (como biópsias), mas não é o indicador primário de segurança para excreção renal do contraste.",
      "Está incorreta: é importante para ajuste da metformina (suspender antes e 48h após para evitar acidose láctica), mas a eGFR renal continua a ser o parâmetro primário decisor.",
      "Está incorreta: não é utilizada no rastreio pré-imagiológico agudo."
    ],
    "nursingApplication": "Na preparação do doente para TAC com contraste, o enfermeiro confirma o valor da eGFR recente: em doentes de risco (eGFR entre 30 e 60 mL/min), implementa o protocolo de hidratação prévia e posterior com Soro Fisiológico a 0,9% para expandir o volume intravascular e acelerar a excreção renal do iodo, e orienta a suspensão da metformina se indicado."
  },
  {
    "id": 5013,
    "topicId": 5,
    "question": "A nível radiobiológico molecular, qual é a diferença fundamental entre a 'Ação Direta' e a 'Ação Indireta' da radiação ionizante sobre o material genético (DNA)?",
    "options": [
      "Na ação direta, o fotão ou partícula ioniza diretamente a molécula de DNA; na ação indireta (responsável por cerca de 70% dos danos causados por Raios X e Gama), a radiação ioniza moléculas de água (radiólise da água), gerando radicais livres altamente reativos (como o radical hidroxilo, •OH) que atacam quimicamente o DNA.",
      "A ação direta atua apenas nos ossos e a indireta no coração.",
      "A ação direta destrói o corpo em microssegundos e a indireta não produz qualquer efeito biológico.",
      "A ação direta só ocorre na radioterapia e a indireta na radiografia simples."
    ],
    "correctIndex": 0,
    "explanation": "Como as células humanas são compostas por cerca de 70% a 80% de água líquida, a vasta maioria dos fotões X e gama interage primariamente com as moléculas de H₂O: H₂O + radiação -> H₂O⁺ + e⁻. Estes intermediários reagem rapidamente formando radicais livres: H₂O⁺ + H₂O -> H₃O⁺ + •OH (radical hidroxilo neutro extremamente reativo e tóxico com um eletrão desemparelhado). Os radicais livres difundem-se e quebram as ligações químicas do DNA circundante (ação indireta, que responde por ~2/3 de todo o dano celular de radiações de baixo LET).",
    "distractorAnalysis": [
      "Está incorreta: restringe erroneamente mecanismos biofísicos universais a órgãos anatómicos específicos.",
      "Está incorreta: ignora os tempos de latência biológica e subestima grosseiramente o perigo da ação indireta.",
      "Está incorreta: confunde tipos de exames clínicos com a radiobiologia celular fundamental."
    ],
    "nursingApplication": "O conhecimento da ação indireta por radicais livres explica o 'Efeito do Oxigénio' (Oxygen Enhancement Ratio - OER) em radioterapia: tumores bem vascularizados e oxigenados são muito mais sensíveis à radiação porque o oxigénio molecular 'fixa' permanentemente as lesões químicas induzidas pelos radicais livres no DNA das células cancerígenas."
  },
  {
    "id": 5014,
    "topicId": 5,
    "question": "Na classificação dos efeitos biológicos da radiação ionizante, o que distingue formalmente os 'Efeitos Estocásticos' dos 'Efeitos Determinísticos' (reações teciduais)?",
    "options": [
      "Os efeitos estocásticos (como o cancro e mutações genéticas) têm natureza probabilística sem limiar de dose seguro, onde a probabilidade aumenta com a dose mas a gravidade é independente da dose; os efeitos determinísticos têm um limiar de dose claro, acima do qual a sua ocorrência é certa e a sua gravidade cresce diretamente com a dose recebida.",
      "Os efeitos estocásticos ocorrem apenas em máquinas de Raios X desligadas e os determinísticos com as máquinas ligadas.",
      "Os efeitos determinísticos transmitem-se exclusivamente aos bisnetos por via hereditária.",
      "Não existe qualquer distinção científica, sendo ambos sinónimos exatos de gripe viral."
    ],
    "correctIndex": 0,
    "explanation": "Os efeitos determinísticos (como radiodermite, necrose tecidual, cataratas na lente ocular, descamação epitelial e síndrome de radiação aguda) exigem a morte de uma grande fração celular: só se manifestam acima de um limiar de dose específico (ex: 2 Gy para eritema cutâneo), aumentando a severidade com a dose. Os efeitos estocásticos (carcinogénese radioinduzida) decorrem de mutações viáveis no DNA de uma única célula: rege o modelo linear sem limiar (LNT) — não existe dose tão pequena que tenha risco zero absoluto de induzir um cancro a longo prazo (latência de 5 a 30 anos).",
    "distractorAnalysis": [
      "Está incorreta: é um disparate físico; tubos desligados não emitem qualquer radiação.",
      "Está incorreta: descreve efeitos genéticos hereditários estocásticos, não determinísticos teciduais somáticos.",
      "Está incorreta: é uma negação absurda de toda a ciência de radioproteção médica internacional."
    ],
    "nursingApplication": "A radioproteção em enfermagem combate os dois tipos de efeitos: a blindagem com aventais e protetores de tiroide impede a ocorrência de efeitos determinísticos na pele e tiroide, e a aplicação do princípio ALARA reduz ao mínimo absoluto a probabilidade probabilística de efeitos estocásticos (cancro radioinduzido) ao longo da carreira profissional."
  },
  {
    "id": 5015,
    "topicId": 5,
    "question": "A 'Lei de Bergonié e Tribondeau' (1906) é o pilar fundamental da radiobiologia médica. De acordo com esta lei, quais são as características citológicas que tornam um tecido humano altamente RADIOSSENSÍVEL à radiação ionizante?",
    "options": [
      "Elevada taxa de proliferação celular (alta atividade mitótica), longo futuro reprodutivo e baixo grau de diferenciação morfológica e funcional (células indiferenciadas ou estaminais).",
      "Presença exclusiva de células mortas e ausência total de água.",
      "Tecidos que nunca se dividem e possuem diferenciação celular máxima definitiva.",
      "Estruturas compostas unicamente por minerais inorgânicos de titânio."
    ],
    "correctIndex": 0,
    "explanation": "Jean Bergonié e Louis Tribondeau demonstraram que as células são tanto mais sensíveis à radiação quanto: 1) Maior for a sua atividade reprodutiva/mitótica; 2) Maior for o número de divisões futuras que irão realizar; 3) Menos diferenciadas forem funcionalmente. Por esta lei, os tecidos mais radiossensíveis do corpo são a medula óssea hematopoética, as células germinativas (gónadas), a mucosa das criptas intestinais e o embrião/feto em desenvolvimento; os mais radiorresistentes são os neurónios e as fibras musculares adultas.",
    "distractorAnalysis": [
      "Está incorreta: descreveria tecidos inertes que não sofrem morte biológica adicional.",
      "Está incorreta: é a descrição citológica dos tecidos mais RADIORRESISTENTES do corpo humano (músculo e sistema nervoso central).",
      "Está incorreta: refere-se a próteses metálicas inorgânicas sem biologia celular."
    ],
    "nursingApplication": "Esta lei elucida por que a radioterapia ataca preferencialmente as células cancerígenas (com alta proliferação e anaplasia) e explica os efeitos secundários típicos que o enfermeiro gere em oncologia: anemia, leucopenia e plaquetopenia (supressão medular), mucosite oral e diarreia (destruição do epitélio gastrointestinal). Justifica também a prioridade absoluta de proteção radiológica ao feto em grávidas."
  },
  {
    "id": 5016,
    "topicId": 5,
    "question": "Na dosimetria das radiações, qual é a definição e unidade no Sistema Internacional (SI) da grandeza 'Dose Absorvida' (D)?",
    "options": [
      "É a quantidade de energia da radiação ionizante depositada por unidade de massa da matéria biológica absorvedora (D = ΔE / Δm); a sua unidade SI é o Gray (1 Gy = 1 Joule por quilograma).",
      "É a contagem de fotões que saem da lâmpada da sala por hora, expressa em Watts.",
      "É a velocidade com que a radiação se desloca no ar, expressa em nós náuticos.",
      "É a variação de peso do doente após o exame de raios X, expressa em gramas."
    ],
    "correctIndex": 0,
    "explanation": "A Dose Absorvida (D) mede a energia média depositada pela radiação na matéria por unidade de massa: D = dE / dm. No Sistema Internacional (SI), a unidade oficial é o Gray (Gy), definido como a absorção de 1 Joule de energia por 1 quilograma de tecido (1 Gy = 1 J/kg). A antiga unidade não-SI era o Rad (1 Gy = 100 rad; 1 rad = 0,01 Gy = 1 cGy).",
    "distractorAnalysis": [
      "Está incorreta: confunde dose absorvida com potência luminosa visível ou radiometria geral.",
      "Está incorreta: propõe unidades de navegação marítima sem qualquer relação com a energia depositada.",
      "Está incorreta: confunde energia ionizante molecular com alterações gravimétricas de peso macroscópico."
    ],
    "nursingApplication": "Na radioterapia externa para tratamento oncológico, as doses prescritas e administradas ao tumor são rigorosamente calculadas em Grays (ex: dose total de 60 Gy fracionada em 30 sessões diárias de 2 Gy). O enfermeiro avalia a pele do campo de irradiação para prevenção precoce de radiodermite conforme a dose cumulativa em Grays recebida pelo doente."
  },
  {
    "id": 5017,
    "topicId": 5,
    "question": "A 'Dose Equivalente' (H) e a 'Dose Efetiva' (E) utilizam a unidade Sievert (Sv = J/kg). Para que servem os fatores de ponderação da radiação (w_R) e dos tecidos (w_T) associados a estas grandezas?",
    "options": [
      "O fator w_R corrige a eficácia biológica de diferentes tipos de radiação (ex: w_R = 1 para Raios X/gama vs w_R = 20 para partículas alfa pesadas); o fator w_T pondera a diferente radiossensibilidade dos órgãos humanos (ex: gónadas, pulmões vs pele), permitindo quantificar o risco global de cancro radioinduzido para o corpo inteiro.",
      "Servem apenas para converter números positivos em números negativos nos computadores.",
      "Servem para calcular o custo financeiro do exame em euros.",
      "Os fatores w_R e w_T são constantes inventadas sem qualquer uso na proteção radiológica."
    ],
    "correctIndex": 0,
    "explanation": "A Dose Equivalente é H = D · w_R: 1 Gy de partículas alfa causa 20 vezes mais dano biológico do que 1 Gy de Raios X, logo w_R(alfa) = 20 e w_R(X/gama) = 1. A Dose Efetiva é a soma ponderada de todos os órgãos: E = ∑ w_T · H_T. Como tecidos têm sensibilidades oncológicas muito diferentes (a medula óssea e o pulmão têm w_T elevado; a pele e a superfície óssea têm w_T baixo, e ∑ w_T = 1), a Dose Efetiva em Sieverts permite comparar o risco biológico total de exames tão díspares como uma TAC torácica (~7 mSv) e um raio-X dentário (~0,005 mSv).",
    "distractorAnalysis": [
      "Está incorreta: é absurda; as doses radiológicas são magnitudes físicas estritamente positivas.",
      "Está incorreta: confunde tabelas tarifárias de faturação hospitalar com radiobiologia da ICRP.",
      "Está incorreta: nega o sistema internacional de grandezas e unidades de radioproteção regulamentado pela Agência Internacional de Energia Atómica (AIEA)."
    ],
    "nursingApplication": "A dose média natural a que qualquer habitante da Terra está exposto pela radiação cósmica e radão do solo é de cerca de 2,4 a 3 mSv por ano. Conhecer estas grandezas permite ao enfermeiro tranquilizar um doente angustiado que vai fazer uma radiografia de tórax: a dose é de apenas ~0,02 a 0,05 mSv, o equivalente a escassos dias de radiação natural de fundo."
  },
  {
    "id": 5018,
    "topicId": 5,
    "question": "O Sistema de Proteção Radiológica preconizado pela Comissão Internacional de Proteção Radiológica (ICRP) baseia-se em três princípios éticos e científicos fundamentais. Quais são eles?",
    "options": [
      "Justificação da prática, Otimização da proteção (Princípio ALARA) e Limitação de doses individuais.",
      "Isolamento absoluto, Proibição total de raios X e Eliminação da eletricidade hospitalar.",
      "Cobrança de taxas adicionais, Uso exclusivo de chumbo em todas as paredes e Repouso obrigatório.",
      "Imunização com antibióticos, Esterilização com vapor a 134 °C e Vacinação radiológica."
    ],
    "correctIndex": 0,
    "explanation": "Os 3 pilares do sistema ICRP são: 1) Justificação: nenhuma prática com radiação ionizante pode ser realizada a menos que produza um benefício líquido para o indivíduo ou sociedade que compense o detrimento radiológico; 2) Otimização: todas as doses devem ser mantidas 'Tão Baixas Quanto Razoavelmente Exequíveis' (As Low As Reasonably Achievable - princípio ALARA), tendo em conta fatores económicos e sociais; 3) Limitação de Dose: as doses individuais em trabalhadores e no público não podem ultrapassar limites anuais estritos regulamentados por lei.",
    "distractorAnalysis": [
      "Está incorreta: proibiria a imagiologia moderna essencial para salvar vidas humanas.",
      "Está incorreta: propõe exigências financeiras e de engenharia despropositadas sem valor científico.",
      "Está incorreta: confunde medidas de assepsia e microbiologia clínica com proteção contra radiação ionizante."
    ],
    "nursingApplication": "Na prática diária, o enfermeiro aplica ativamente o princípio da Justificação ao verificar se o exame radiológico prescrito tem indicação clínica clara e se não há exames recentes repetidos no sistema informático, e aplica a Otimização garantindo o posicionamento correto à primeira tentativa para evitar disparos desnecessários."
  },
  {
    "id": 5019,
    "topicId": 5,
    "question": "O princípio ALARA (As Low As Reasonably Achievable - 'Tão Baixo Quanto Razoavelmente Exequível') traduz-se operacionalmente em enfermagem através de três regras práticas universais de radioproteção:",
    "options": [
      "TEMPO (minimizar a duração da exposição), DISTÂNCIA (maximizar o afastamento da fonte) e BLINDAGEM (interpor barreiras protetoras como aventais de chumbo e biombos).",
      "ÁGUA, SABÃO e ÁLCOOL a 70%.",
      "LUVA, MÁSCARA CIRÚRGICA e ÓCULOS escuros.",
      "VELOCIDADE rápida da maca, LUZ apagada e JANELA aberta."
    ],
    "correctIndex": 0,
    "explanation": "A tríade de ouro de proteção radiológica externa contra radiações penetrantes é inegociável: 1) TEMPO: a dose recebida é diretamente proporcional ao tempo gasto junto à fonte (Dose = Taxa × t); 2) DISTÂNCIA: pelo inverso do quadrado da distância (I ∝ 1/d²), afastar-se é a forma mais barata e potente de reduzir a dose a valores desprezíveis; 3) BLINDAGEM: quando a distância não pode ser ampliada, o uso de aventais plumbíferos, protetores cervicais e biombos móveis atenua exponencialmente os fotões secundários.",
    "distractorAnalysis": [
      "Está incorreta: refere-se à higienização de mãos e desinfeção de superfícies.",
      "Está incorreta: refere-se a Equipamento de Proteção Individual (EPI) contra agentes biológicos infecciosos por gotículas.",
      "Está incorreta: descreve procedimentos empíricos arbitrários sem efeito atenuador sobre fotões X penetrantes."
    ],
    "nursingApplication": "Quando o enfermeiro tem de conter ou acompanhar uma criança agitada durante um exame de Raios X portátil no leito: aplica os 3 princípios em simultâneo — veste o avental de chumbo e protetor de tiroide (blindagem), afasta-se o máximo possível do feixe primário esticando os braços ou dando um passo atrás (distância), e assegura a imobilização rápida para que o técnico faça o disparo num milissegundo único (tempo)."
  },
  {
    "id": 5020,
    "topicId": 5,
    "question": "A intensidade da radiação emitida por uma fonte pontual decai segundo a 'Lei do Inverso do Quadrado da Distância' (I ∝ 1 / d²). Se um enfermeiro que se encontra a 1 metro de distância do doente durante um disparo de raios X der dois passos para trás, passando a situar-se a 3 metros da fonte, a intensidade da radiação recebida pelo profissional cai para:",
    "options": [
      "1/9 (cerca de 11%) do valor original (1 / 3² = 1/9).",
      "1/3 do valor original.",
      "1/2 do valor original.",
      "Zero absoluto instantaneamente."
    ],
    "correctIndex": 0,
    "explanation": "Pela lei do inverso do quadrado da distância: I₁ · d₁² = I₂ · d₂² => I₂ = I₁ · (d₁ / d₂)² = I₁ · (1 / 3)² = I₁ / 9. Triplicar o afastamento de 1 para 3 metros reduz a taxa de dose de radiação recebida pelo profissional para um nono (uma redução colossal de 89% na dose!), sem qualquer custo financeiro ou necessidade de blindagem adicional.",
    "distractorAnalysis": [
      "Está incorreta: considera erroneamente uma proporção linear com a distância (1/d¹), subestimando a proteção real.",
      "Está incorreta: viola as leis geométricas de propagação esférica da energia das ondas eletromagnéticas.",
      "Está incorreta: só ocorreria a uma distância infinita, já que a intensidade decresce de modo assintótico contínuo."
    ],
    "nursingApplication": "Durante a realização de radiografias móveis na enfermaria ou UCIP, a regra de ouro do enfermeiro é dar dois ou três passos para trás em relação ao leito (colocando-se a mais de 2 a 3 metros de distância): este simples gesto biofísico reduz a exposição à radiação dispersa para valores negligenciáveis, muitas vezes inferiores à dose recebida por permanecer com avental de chumbo colado ao doente."
  },
  {
    "id": 5021,
    "topicId": 5,
    "question": "Qual é o 'Limite de Dose Efetiva' anual estabelecido por diretrizes internacionais (ICRP) e pela legislação europeia e portuguesa para Trabalhadores Profissionalmente Expostos (TPE), como enfermeiros de hemodinâmica e radiologia de intervenção?",
    "options": [
      "20 mSv (milisseverts) por ano em média ao longo de períodos definidos de 5 anos (não excedendo 50 mSv em nenhum ano isolado).",
      "5000 mSv por semana.",
      "Zero mSv, sendo proibida qualquer absorção de radiação no trabalho.",
      "1000 Sv por mês."
    ],
    "correctIndex": 0,
    "explanation": "As normas básicas de segurança radiológica (Diretiva EURATOM e ICRP 103) fixam para os Trabalhadores Profissionalmente Expostos (TPE) um limite de dose efetiva de 20 mSv/ano (média em 5 anos, máximo de 50 mSv num ano único). Para o público geral, o limite é muito mais rigoroso: 1 mSv/ano. Estes limites destinam-se a garantir que a probabilidade de efeitos estocásticos (cancro) se mantenha dentro de níveis de risco ocupacional socialmente aceitáveis e comparáveis aos de indústrias seguras.",
    "distractorAnalysis": [
      "Está incorreta: provocaria a morte rápida por Síndrome de Radiação Aguda em escassos dias.",
      "Está incorreta: é impraticável e impossível, pois a própria radiação natural de fundo expõe qualquer ser humano a ~2,4-3 mSv/ano.",
      "Está incorreta: provocaria vaporização biológica e morte instantânea."
    ],
    "nursingApplication": "O cumprimento destes limites é monitorizado mensalmente através do dosímetro individual oficial. Na prática moderna, enfermeiros que utilizam corretamente os aventais de chumbo e mantêm distâncias de segurança recebem habitualmente menos de 1 a 2 mSv por ano, muito abaixo do teto legal de 20 mSv."
  },
  {
    "id": 5022,
    "topicId": 5,
    "question": "No caso de uma enfermeira que trabalha num serviço de imagiologia ou bloco cirúrgico e que declare formalmente a sua gravidez (gestação), qual é a proteção e o limite de dose especial estipulado por lei para salvaguardar o embrião/feto?",
    "options": [
      "A dose equivalente à superfície do abdómen materno não deve exceder 1 mSv durante todo o resto da gestação, garantindo que o feto receba uma dose insignificante e compatível com o limite do público geral.",
      "A enfermeira deve ser demitida imediatamente sem qualquer direito laboral.",
      "A dose máxima é de 100 Sv por trimestre de gravidez.",
      "O feto é imune à radiação ionizante durante os primeiros três meses de vida intrauterina."
    ],
    "correctIndex": 0,
    "explanation": "Logo que a gravidez é notificada ao empregador, as condições de trabalho devem ser ajustadas para que a dose equivalente acumulada no feto seja a menor possível e não exceda 1 mSv durante o resto da gestação. Como o avental de chumbo materno atenua a grande maioria dos fotões, a enfermeira grávida pode frequentemente continuar a trabalhar em funções hospitalares desde que readaptada para áreas sem intervenção radiológica pesada contínua ou com monitorização dosimétrica abdominal adicional sob o avental.",
    "distractorAnalysis": [
      "Está incorreta: viola gravosamente a legislação laboral de proteção da maternidade e igualdade de género.",
      "Está incorreta: causaria morte embrionária e aborto espontâneo imediato com 100 Sv.",
      "Está incorreta: é um erro perigoso: o primeiro trimestre (fase de organogénese embrionária) é precisamente a janela de máxima radiossensibilidade e maior vulnerabilidade a malformações congénitas e morte do embrião."
    ],
    "nursingApplication": "A declaração precoce da gravidez pela enfermeira ao serviço de Saúde Ocupacional é um dever de radioproteção: permite a reatribuição imediata de tarefas (evitando salas de hemodinâmica ou assistência a exames móveis de fluoroscopia prolongada), garantindo a proteção integral da saúde da mãe e do feto."
  },
  {
    "id": 5023,
    "topicId": 5,
    "question": "O dosímetro pessoal de leitura diferida (dosímetro termoluminescente - TLD ou OSL) atribuído ao enfermeiro que atua em áreas com radiação deve ser utilizado de acordo com qual regra padronizada?",
    "options": [
      "Deve ser usado no tronco (tórax/abdómen) por BAIXO do avental de chumbo para estimar a dose efetiva de corpo inteiro absorvida pelos órgãos vitais protegidos.",
      "Deve ser deixado permanentemente pendurado no biombo de chumbo dentro da sala para medir a radiação da parede.",
      "Deve ser partilhado rotativamente por todos os enfermeiros da equipa em cada turno.",
      "Deve ser guardado dentro de um balde de gelo para não descalibrar."
    ],
    "correctIndex": 0,
    "explanation": "O dosímetro pessoal é estritamente pessoal e intransmissível. A sua leitura serve de base jurídica e clínica para estimar a dose efetiva recebida pelo trabalhador. A norma padrão internacional exige que o dosímetro principal de corpo inteiro seja colocado no tronco por baixo do avental plumbífero de proteção: desta forma, os cristais termoluminescentes recebem exatamente a radiação residual atenuada que atinge os órgãos nobres (medula óssea, fígado, gónadas). Se houver risco para os olhos e tiroide, utiliza-se um segundo dosímetro adicional na gola por fora do avental.",
    "distractorAnalysis": [
      "Está incorreta: mediria a radiação ambiental da sala e não a dose ocupacional real do profissional de saúde.",
      "Está incorreta: é uma infração regulamentar grave que invalida o registo dosimétrico individual.",
      "Está incorreta: estragaria o dispositivo por infiltração de humidade; os dosímetros TLD/OSL operam à temperatura ambiente normal."
    ],
    "nursingApplication": "O enfermeiro nunca deve expor o seu dosímetro a fontes de radiação quando não o estiver a usar no corpo (por exemplo, esquecê-lo dentro da sala de cirurgia durante um procedimento). A leitura espúria de doses artificiais elevadas desencadeia inquéritos radiológicos complexos e afastamento preventivo injustificado do trabalho."
  },
  {
    "id": 5024,
    "topicId": 5,
    "question": "Os aventais de proteção radiológica utilizados pelos profissionais de enfermagem no bloco operatório e hemodinâmica são fabricados em borracha de vinil impregnada com chumbo ou metais pesados compósitos equivalentes. Qual é a espessura de equivalência de chumbo mais comumente utilizada nestes aventais?",
    "options": [
      "0,25 mm a 0,5 mm de equivalência em chumbo (Pb), que atenua mais de 90% a 98% da radiação X dispersa na faixa de energias diagnósticas.",
      "50 centímetros de chumbo puro maciço.",
      "0,001 micrómetros de plástico comum transparente.",
      "10 metros de placas de vidro comum."
    ],
    "correctIndex": 0,
    "explanation": "Devido ao elevado peso específico do chumbo (densidade ρ = 11,34 g/cm³), aventais com 0,25 mm de Pb equivalente pesam cerca de 2 a 3 kg e atenuam cerca de 90% a 95% da radiação dispersa a 70-80 kVp. Aventais com 0,5 mm de Pb equivalente pesam de 4 a 6 kg e conseguem atenuar mais de 98% da radiação secundária incidente. A escolha equilibra a proteção radiológica contra a fadiga musculoesquelética do enfermeiro durante procedimentos longos.",
    "distractorAnalysis": [
      "Está incorreta: pesaria várias toneladas e esmagaria o profissional no chão.",
      "Está incorreta: não ofereceria qualquer atenuação contra fotões X penetrantes.",
      "Está incorreta: descreve dimensões de construção de edifícios industriais inviáveis para vestuário pessoal."
    ],
    "nursingApplication": "Os aventais plumbíferos NUNCA devem ser dobrados ou amarrotados ao serem guardados: a dobragem quebra as camadas internas de borracha plúmbea, criando fissuras radiotransparentes invisíveis a olho nu por onde os Raios X passam livremente. O enfermeiro deve pendurá-los sempre em cabides apropriados e inspecioná-los anualmente sob radioscopia quanto a fendas."
  },
  {
    "id": 5025,
    "topicId": 5,
    "question": "Na utilização de aparelhos de Raios X móveis (portáteis) nas enfermarias de internamento ou unidades de cuidados intensivos, qual é o procedimento de segurança que o enfermeiro deve assegurar junto dos outros doentes internados no mesmo quarto de enfermaria?",
    "options": [
      "Garantir uma distância de segurança mínima (pelo menos 2 a 3 metros) entre o tubo emissor/doente radiografado e os outros doentes da enfermaria, ou interpor um biombo plumbífero móvel entre as camas se o espaço for exíguo.",
      "Evacuar todos os doentes do hospital para o exterior do edifício durante 12 horas.",
      "Mandar desligar os monitores cardíacos dos outros doentes para não explodirem com os raios X.",
      "Pedir aos outros doentes que fechem os olhos para a radiação não entrar pela retina."
    ],
    "correctIndex": 0,
    "explanation": "Pela Lei do Inverso do Quadrado da Distância e pela natureza da radiação dispersa Compton emitida pelo doente, a intensidade da radiação cai exponencialmente com o afastamento. A uma distância de 2 a 3 metros da cama radiografada com colimação rigorosa do feixe primário, a dose recebida pelo doente da cama ao lado é virtualmente insignificante (muitas vezes inferior a frações de microgray por disparo). Se a distância de 2 metros não puder ser mantida, interpõe-se um biombo móvel de chumbo.",
    "distractorAnalysis": [
      "Está incorreta: seria uma medida de pânico perigosa que desestabilizaria doentes graves e colapsaria o hospital.",
      "Está incorreta porque ; os equipamentos biomédicos modernos são blindados contra interferências de raios X diagnósticos.",
      "Está incorreta: é uma crendice popular infantil; as pálpebras de pele fina são incapazes de travar Raios X penetrantes."
    ],
    "nursingApplication": "Antes de autorizar o técnico a realizar o disparo do aparelho de raios X portátil, o enfermeiro avisa em voz clara na enfermaria ('Atenção ao Raio-X!'), permitindo que visitantes e profissionais não-blindados se afastem para lá da distância de segurança (mínimo 2 a 3 metros) ou saiam temporariamente do quarto."
  },
  {
    "id": 5026,
    "topicId": 5,
    "question": "Em radioterapia oncológica, qual é a diferença entre a 'Teleterapia' e a 'Braquiterapia'?",
    "options": [
      "Na teleterapia, a fonte de radiação situa-se a uma distância considerável do doente (acelerador linear de alta energia de 6 a 18 MV disparando contra o tumor através da pele); na braquiterapia, fontes radioativas seladas encapsuladas (como Iridio-192 ou Iodo-125) são introduzidas diretamente no interior ou em contacto íntimo com o tecido tumoral.",
      "A teleterapia é administrada através de um telefonema de apoio psicológico e a braquiterapia com comprimidos de cálcio.",
      "A teleterapia utiliza apenas luz laser visível e a braquiterapia utiliza agulhas de acupuntura frias.",
      "A teleterapia cura o cancro em 1 minuto e a braquiterapia é um método de diagnóstico imagiológico."
    ],
    "correctIndex": 0,
    "explanation": "Em oncologia radioterápica: 1) Teleterapia (tele = longe): a fonte de radiação (feixes de fotões de megavoltagem ou eletrões produzidos por um acelerador linear isocêntrico) localiza-se a cerca de 80 a 100 cm do doente; 2) Braquiterapia (brachy = perto): pequenos implantes radioativos selados ('sementes', fios ou agulhas) são inseridos temporária ou permanentemente dentro do tumor (ex: cancro da próstata, colo do útero ou mama), administrando doses tumoricidas colossais no tecido maligno com queda abrupta da dose nos tecidos saudáveis vizinhos (Lei de Laplace e inverso do quadrado).",
    "distractorAnalysis": [
      "Está incorreta: é um trocadilho grosseiro com o termo 'tele' sem qualquer fundamento médico.",
      "Está incorreta: confunde a radiação ionizante penetrante com terapias alternativas ou lasers térmicos superficiais.",
      "Está incorreta porque ; ambas são modalidades terapêuticas que exigem planeamento complexo e dosimetria rigorosa ao longo de dias ou semanas."
    ],
    "nursingApplication": "No pós-operatório de doentes submetidos a braquiterapia ginecológica ou de próstata com implantes radioativos temporários de alta taxa de dose (HDR), o enfermeiro deve conhecer os radioisótopos em uso, respeitar os tempos de permanência no quarto, utilizar dosímetro de pulso/tronco e garantir que as fontes foram totalmente recolhidas para o cofre blindado antes de realizar cuidados de higiene direta."
  },
  {
    "id": 5027,
    "topicId": 5,
    "question": "O conceito de 'Radiodermite' (eritema e lesões cutâneas radioinduzidas) representa um efeito determinístico com limiar de dose. Qual é o cuidado de enfermagem fundamental na proteção da pele de um doente submetido a um ciclo de radioterapia externa?",
    "options": [
      "Manter a pele do campo de tratamento limpa, seca e arejada, lavando com água morna e sabão de pH neutro suave, secando por toques suaves sem fricção mecânica, evitando loções alcoólicas, perfumes ou adesivos que aumentem a irritação e protegendo a área da exposição solar direta.",
      "Esfregar vigorosamente a pele com escova cirúrgica e álcool iodado para eliminar a radiação residual da epiderme.",
      "Aplicar camadas espessas de pasta de dentes com mentol para arrefecer o tecido.",
      "Colocar sacos de gelo diretamente sobre a pele aberta durante 12 horas consecutivas."
    ],
    "correctIndex": 0,
    "explanation": "A radiodermite ocorre porque a radiação ionizante atinge as células estaminais da camada basal da epiderme (tecido de alta proliferação celular, Lei de Bergonié-Tribondeau). Para doses de 2 a 10 Gy surge eritema e prurido; acima de 15 a 20 Gy pode ocorrer descamação húmida exsudativa dolorosa. O cuidado de enfermagem foca-se em preservar a integridade da barreira cutânea remanescente: lavar suavemente sem esfregar, evitar agentes irritantes químicos, hidratar com cremes emolientes prescritos específicos aplicados com intervalo de segurança antes das sessões e proteger do sol.",
    "distractorAnalysis": [
      "Está incorreta: provocaria lesão mecânica e química severa com descamação e dor atroz na pele fragilizada.",
      "Está incorreta: utilizaria substâncias cáusticas totalmente desadequadas para pele irradiada.",
      "Está incorreta: causaria queimaduras por frio (geladura) e isquemia cutânea adicional por vasoconstrição extrema."
    ],
    "nursingApplication": "A monitorização e estadiamento da radiodermite (graus 1 a 4 da escala RTOG/CTCAE) pelo enfermeiro de oncologia garante intervenções precoces com pensos hidrocolóides ou espumas de silicone suave, prevenindo infeções bacterianas secundárias e interrupções indesejadas no plano de tratamento oncológico."
  },
  {
    "id": 5028,
    "topicId": 5,
    "question": "Na colimação do feixe primário de Raios X por intermédio de diafragmas de chumbo ajustáveis (colimador luminoso do tubo), qual é o benefício duplo obtido ao restringir a área do feixe estritamente à anatomia de interesse clínico?",
    "options": [
      "Reduz a dose de radiação integral absorvida pelo doente (protegendo tecidos saudáveis vizinhos) e diminui significativamente a produção de radiação de dispersão Compton, melhorando o contraste e a nitidez da imagem radiológica.",
      "Aumenta a velocidade da luz no interior do tubo para além dos limites da física.",
      "Permite fazer radiografias através de paredes de chumbo sem necessidade de ligar o aparelho.",
      "Transforma os Raios X em ondas acústicas de ecografia tridimensional."
    ],
    "correctIndex": 0,
    "explanation": "A colimação estrita é uma das práticas mais eficazes da radioproteção: 1) Benefício biológico: ao limitar o feixe à área anatómica estrita (ex: apenas o punho em vez de todo o membro superior), reduz-se o volume tecidual irradiado e a dose efetiva recebida pelo doente (princípio ALARA); 2) Benefício imagiológico: como um volume menor de tecido é atravessado, a quantidade total de fotões espalhados por efeito Compton cai drasticamente, reduzindo o 'véu de dispersão' e melhorando o contraste da imagem.",
    "distractorAnalysis": [
      "Está incorreta: são formulações fantasiosas e incorretas que contrariam a ótica dos raios X.",
      "Está incorreta: são formulações fantasiosas e incorretas que contrariam a ótica dos raios X.",
      "Está incorreta: são formulações fantasiosas e incorretas que contrariam a ótica dos raios X."
    ],
    "nursingApplication": "O enfermeiro que opera ou colabora em procedimentos sob radioscopia (como na colocação de cateteres PICC ou redução ortopédica de fraturas) deve solicitar ativamente a colimação máxima do feixe aos limites da zona de interesse, protegendo tanto o doente como toda a equipa cirúrgica contra a radiação dispersa."
  },
  {
    "id": 5029,
    "topicId": 5,
    "question": "A fluoroscopia (ou radioscopia contínua) é uma modalidade radiológica em tempo real utilizada em arcos em C cirúrgicos e laboratórios de hemodinâmica vascular. O que diferencia a dose de radiação de uma fluoroscopia prolongada da dose de uma radiografia de tórax simples?",
    "options": [
      "A fluoroscopia contínua administra taxas de dose cumulativas milhares de vezes superiores às de uma radiografia simples, podendo em procedimentos prolongados ultrapassar vários Grays e causar queimaduras e necrose cutânea determinística grave nas costas do doente.",
      "A fluoroscopia não utiliza radiação ionizante, operando com luz visível totalmente inócua.",
      "Uma radiografia de tórax simples tem uma dose cem vezes superior à de três horas de fluoroscopia contínua.",
      "A fluoroscopia é tão segura que pode ser realizada continuamente durante dias seguidos sem qualquer proteção."
    ],
    "correctIndex": 0,
    "explanation": "Enquanto uma radiografia de tórax de disparo único expõe o doente a uma dose diminuta (~0,02 a 0,05 mSv, frações de milissegundo de disparo), a fluoroscopia envolve emissão contínua ou pulsada prolongada de raios X durante minutos ou horas (ex: cateterismos cardíacos complexos, embolizações neurovasculares). A taxa de dose na pele de entrada pode atingir 20 a 50 mGy/minuto: em exames de mais de 60 minutos sob o mesmo ângulo, a dose na pele pode ultrapassar 2 a 5 Gy, provocando eritema, ulceração profunda e necrose radioinduzida na pele das costas do doente.",
    "distractorAnalysis": [
      "Está incorreta porque ; a fluoroscopia é gerada por um tubo potente de Raios X ionizantes.",
      "Está incorreta: inverte absurdamente as ordens de grandeza das doses envolvidas.",
      "Está incorreta: ignora os alertas internacionais da FDA e da AIEA sobre lesões cutâneas por radiação em doentes submetidos a intervenções fluoroscópicas prolongadas."
    ],
    "nursingApplication": "No pós-procedimento de doentes submetidos a intervenções percutâneas longas sob fluoroscopia (>60-90 minutos de arco em C), o enfermeiro deve inspecionar a pele das costas e região escapular quanto a sinais precoces de eritema radioinduzido e instruir o doente e família a vigiar alterações cutâneas nas semanas seguintes, comunicando qualquer descamação persistente."
  },
  {
    "id": 5030,
    "topicId": 5,
    "question": "Em caso de reação anafilactóide grave aguda (broncoespasmo severo, estridor laríngeo, choque distributivo e angioedema) imediatamente após a injeção intravenosa de meio de contraste iodado para TAC, qual é o fármaco de primeira linha e de eleição absoluta que deve ser administrado sem demora?",
    "options": [
      "Adrenalina (Epinefrina) por via intramuscular na face anterolateral da coxa (vasto lateral).",
      "Paracetamol oral em gotas.",
      "Insulina rápida subcutânea.",
      "Soro glicosado a 5% em nebulização fria."
    ],
    "correctIndex": 0,
    "explanation": "A anafilaxia aos contrastes iodados é uma reação idiossincrática anafilactóide não-IgE mediada por desgranulação direta de mastócitos e basófilos. A Adrenalina intramuscular (0,5 mg na concentração 1:1000 num adulto) é o único fármaco salva-vidas de primeira linha: pelos recetores alfa-1 promove vasoconstrição periférica revertendo o choque e o edema laríngeo; pelos recetores beta-2 induz broncodilatação imediata potente e bloqueia a libertação subsequente de mediadores inflamatórios pelos mastócitos.",
    "distractorAnalysis": [
      "Está incorreta: é um antipirético/analgésico menor que em nada reverte o choque anafilático ou o broncoespasmo.",
      "Está incorreta: causaria hipoglicemia severa perigosa sem qualquer ação antialérgica.",
      "Está incorreta: não possui ação farmacológica nos recetores adrenérgicos vitais."
    ],
    "nursingApplication": "O enfermeiro que atua em serviços de imagiologia garante que o carro de emergência com adrenalina em ampola, seringas, agulhas intramusculares e material de via aérea avançada está testado e disponível imediatamente ao lado da sala de TAC, administrando adrenalina IM aos primeiros sinais de compromisso respiratório ou hemodinâmico."
  },
  {
    "id": 5031,
    "topicId": 5,
    "question": "Em doentes submetidos a cintigrafia óssea ou outros exames de Medicina Nuclear com radioisótopos emissores gama de semivida curta (como o Tecnécio-99m, T₁/₂ ≈ 6 horas), qual é a orientação de enfermagem após o exame quanto à eliminação da radioatividade residual pelo corpo?",
    "options": [
      "Incentivar a ingestão abundante de líquidos (água) para acelerar a eliminação urinária do radiofármaco não-fixado e recomendar dar a descarga sanitária duas vezes consecutivas com a tampa da sanita fechada e lavar rigorosamente as mãos.",
      "Permanecer em jejum absoluto sem beber água durante uma semana inteira.",
      "Queimar todas as roupas do doente em fogueira aberta no jardim.",
      "Permanecer imóvel dentro de um sarcófago de chumbo durante um mês."
    ],
    "correctIndex": 0,
    "explanation": "O Tecnécio-99m marcado (ex: ⁹⁹ᵐTc-MDP para cintigrafia óssea) é excretado primariamente pelos rins. Como a sua meia-vida física é de apenas 6 horas e a biológica é ainda mais curta com boa hidratação, forçar a diurese com ingestão hídrica reduz drasticamente a dose de radiação absorvida pela bexiga e gónadas. A urina do doente contém radioatividade transitória nas primeiras 24 horas: dar duas descargas com a tampa fechada previne a dispersão de aerossóis radioativos no vaso sanitário.",
    "distractorAnalysis": [
      "Está incorreta: agravaria perigosamente a retenção de radioatividade na bexiga, aumentando a dose absorvida desnecessariamente.",
      "Está incorreta: é uma conduta despropositada e incorreta que causaria contaminação atmosférica por fumo.",
      "Está incorreta: confunde uma dose diagnóstica ambulatória comum com catástrofes nucleares severas."
    ],
    "nursingApplication": "O enfermeiro ensina ao doente e aos familiares regras práticas de bom senso para as primeiras 24 horas: hidratação hídrica vigorosa, evitar contacto muito próximo e prolongado (abraços apertados na mesma cama) com bebés pequenos e grávidas, assegurando o retorno tranquilo às atividades normais no dia seguinte."
  },
  {
    "id": 5032,
    "topicId": 5,
    "question": "A Ressonância Magnética (RMN) utiliza campos magnéticos intensos e pulsos de radiofrequência, não recorrendo a radiações ionizantes. Qual é o risco biofísico gravíssimo que exige triagem prévia rigorosa pelo enfermeiro antes de permitir a entrada de qualquer pessoa na sala de RMN?",
    "options": [
      "O campo magnético estático colossal (1,5 a 3 Tesla) atrai violentamente objetos ferromagnéticos (efeito projétil/míssil), como tesouras, botijas de O₂ e cadeiras de rodas, e pode deslocar ou avariar implantes como pacemakers e clipes de aneurismas cerebrais ferromagnéticos.",
      "O risco de o doente sofrer mutações no DNA idênticas às de uma explosão atómica.",
      "A transformação de todo o oxigénio da sala em gás mostarda tóxico.",
      "A destruição total dos dentes naturais do doente pela radiofrequência."
    ],
    "correctIndex": 0,
    "explanation": "A RMN opera com ímanes supercondutores gigantescos (1,5 T é cerca de 30.000 vezes o campo magnético terrestre!). Qualquer material com propriedades ferromagnéticas (ferro, aço carbono comum) sofre uma força magnética de atração avassaladora, sendo acelerado pelo ar a grande velocidade como um míssil letal contra o gantry do magneto. Adicionalmente, induz torção mecânica e migração de clipes metálicos cerebrais antigos e reprograma ou destrói circuitos elétricos de pacemakers e bombas de insulina.",
    "distractorAnalysis": [
      "Está incorreta: confunde magnetismo e ondas de rádio com radiações nucleares ionizantes de alta energia.",
      "Está incorreta: é um disparate químico; o campo magnético não reage com os gases respiratórios.",
      "Está incorreta: confunde pequenos desconfortos com restaurações metálicas com a destruição da dentição biológica."
    ],
    "nursingApplication": "O enfermeiro aplica um questionário de segurança exaustivo antes da entrada na Zona IV da RMN: verificar presença de pacemakers cardíacos não-compatíveis com RMN, neuroestimuladores, implantes cocleares, corpos estranhos metálicos intraoculares e exigir a remoção total de adornos metálicos, telemóveis, canetas, tesouras e aparelhos auditivos."
  },
  {
    "id": 5033,
    "topicId": 5,
    "question": "O filtro de alumínio (filtração inerente e adicional, com espessura mínima equivalente a 2,5 mm de Al em equipamentos operando acima de 70 kVp) colocado na janela de saída do tubo de Raios X desempenha qual função biofísica?",
    "options": [
      "Absorve seletivamente os fotões de 'baixa energia' (raios X moles) que seriam totalmente absorvidos na pele do doente sem contribuir para a imagem diagnóstica, diminuindo a dose absorvida na superfície corporal ('endurecimento do feixe').",
      "Transforma o feixe de raios X em feixe de luz azul visível.",
      "Aumenta em dez vezes a dose de radiação recebida pelo doente para queimar bactérias cutâneas.",
      "Serve unicamente para recolher poeiras do ar da sala de exames."
    ],
    "correctIndex": 0,
    "explanation": "O feixe de raios X emitido pelo ânodo é polienergético: contém fotões de alta energia e uma grande quantidade de fotões de baixa energia (<20-30 keV). Estes fotões de baixa energia ('raios X moles') não possuem penetrância suficiente para atravessar o corpo e atingir o detetor (não contribuem para a imagem), mas seriam 100% absorvidos na pele e tecido celular subcutâneo do doente, aumentando inutilmente a dose de radiação na pele. O filtro de alumínio retém estes fotões parasitas, 'endurecendo' o feixe útil.",
    "distractorAnalysis": [
      "Está incorreta: confunde absorção de raios X com ecrãs fluorescentes emissores de luz.",
      "Está incorreta: violaria o princípio basilar ALARA de redução de doses.",
      "Está incorreta: desvaloriza um componente de engenharia e radioproteção vital obrigatório por lei."
    ],
    "nursingApplication": "A filtração adequada é verificada nos controlos periódicos de garantia da qualidade da ampola radiológica: um equipamento com filtração deficiente exporia os doentes internados a doses desnecessárias e mais elevadas de radiação cutânea a cada radiografia realizada no leito."
  },
  {
    "id": 5034,
    "topicId": 5,
    "question": "Na síndrome de radiação aguda (ARS - Acute Radiation Syndrome) resultante de uma exposição acidental de corpo inteiro a doses muito elevadas de radiação ionizante penetrante (>1 a 2 Gy), qual é o primeiro sistema fisiológico a sofrer colapso funcional devido à alta sensibilidade das suas células estaminais?",
    "options": [
      "O Sistema Hematopoético (síndrome da medula óssea), manifestando-se por aplasia medular com neutropenia severa, trombocitopenia e anemia, deixando o indivíduo propenso a infeções oportunistas graves e hemorragias fatais.",
      "O sistema esquelético mineral com dissolução imediata dos ossos.",
      "A audição com surdez definitiva em menos de 1 segundo.",
      "A cor dos olhos que se altera permanentemente para roxo."
    ],
    "correctIndex": 0,
    "explanation": "Pela Lei de Bergonié e Tribondeau, as células estaminais hematopoéticas pluripotentes da medula óssea são as mais radiossensíveis do organismo. Doses de corpo inteiro acima de 1 a 2 Gy destroem estas precursoras mitóticas: os granulócitos e linfócitos desaparecem do sangue periférico em dias (linfopenia e neutropenia), seguidos de trombocitopenia grave ao fim de 2 a 3 semanas. Sem plaquetas nem glóbulos brancos, o doente falece por choque séptico ou hemorragia interna se não receber cuidados de suporte intensivo.",
    "distractorAnalysis": [
      "Está incorreta: é impossível; a matriz inorgânica de hidroxiapatite do osso é altamente radiorresistente.",
      "Está incorreta: são invenções populares sem relação com os quadros clínicos das síndromes hematopoiética, gastrointestinal (>6 Gy) e cerebrovascular (>20 Gy) da ARS.",
      "Está incorreta: são invenções populares sem relação com os quadros clínicos das síndromes hematopoiética, gastrointestinal (>6 Gy) e cerebrovascular (>20 Gy) da ARS."
    ],
    "nursingApplication": "Em acidentes radiológicos com síndrome aguda de radiação, o papel do enfermeiro é vital em unidades de isolamento estéril com fluxo laminar: vigilância estrita de sinais de neutropenia febril, administração de fatores estimuladores de colónias de granulócitos (G-CSF), transfusões de concentrados de plaquetas irradiadas e antibioterapia de largo espetro profilática."
  },
  {
    "id": 5035,
    "topicId": 5,
    "question": "O uso de óculos com vidros plumbíferos (equivalência de 0,5 a 0,75 mm Pb) por enfermeiros que trabalham rotineiramente em salas de hemodinâmica ou eletrofisiologia visa prevenir qual efeito determinístico ocular radioinduzido?",
    "options": [
      "Catarata radioinduzida por opacificação progressiva do cristalino ocular.",
      "Miopia simples corrigível com lentes divergentes comuns.",
      "Alteração irreversível da cor da íris para azul.",
      "Desaparecimento permanente da glândula lacrimal em 24 horas."
    ],
    "correctIndex": 0,
    "explanation": "O cristalino do olho humano é composto por fibras transparentes derivadas de um epitélio anterior em mitose contínua. Ao contrário da pele, o cristalino não tem mecanismo de descamação celular: as células danificadas pela radiação migram para o polo posterior e acumulam-se como fibras anómalas desorganizadas que perdem a transparência ótica (catarata radioinduzida). Por esta razão, a ICRP reduziu o limite de dose anual no cristalino para trabalhadores expostos de 150 mSv para apenas 20 mSv/ano.",
    "distractorAnalysis": [
      "Está incorreta: é um erro refrativo comum de comprimento do globo ocular, sem relação com radiação ionizante.",
      "Está incorreta: são afirmações fictícias sem base na oftalmologia radiobiológica.",
      "Está incorreta: são afirmações fictícias sem base na oftalmologia radiobiológica."
    ],
    "nursingApplication": "Em intervenções de hemodinâmica de longa duração onde o enfermeiro permanece junto ao arco em C ao lado da mesa do doente, o uso de óculos plumbíferos com proteção lateral é indispensável para evitar que a radiação dispersa atinja o cristalino, prevenindo cataratas precoces na meia-idade profissional."
  },
  {
    "id": 5036,
    "topicId": 5,
    "question": "O protetor de tiroide (colar cervical de chumbo) é um EPI radiológico de uso obrigatório em salas de procedimentos fluoroscópicos. Qual é a justificativa biofísica e radiobiológica para a proteção específica desta glândula?",
    "options": [
      "A tiroide é uma glândula superficial de elevada radiossensibilidade e com alto fator de ponderação tecidual (w_T = 0,04), sendo muito suscetível ao desenvolvimento de carcinomas radioinduzidos por radiação dispersa.",
      "Porque a tiroide aquece até 80 °C na presença de raios X se não for arrefecida com chumbo.",
      "Porque o chumbo atua como íman que retém as hormonas T3 e T4 dentro da corrente sanguínea.",
      "Porque a tiroide é o órgão que controla a visão do profissional de saúde."
    ],
    "correctIndex": 0,
    "explanation": "A glândula tiroide localiza-se na face anterior do pescoço em posição muito superficial, ficando exposta diretamente à radiação dispersa proveniente do doente durante a fluoroscopia cirúrgica. A ICRP atribui-lhe um fator de ponderação w_T significativo, sendo a indução de cancro papilar da tiroide um dos efeitos estocásticos mais documentados em pessoas expostas sem proteção. Um colar de chumbo com 0,5 mm Pb atenua cerca de 95% desta radiação dispersa.",
    "distractorAnalysis": [
      "Está incorreta: é uma fantasia térmica sem fundamentação biofísica.",
      "Está incorreta: misturam conceitos anatómicos e endocrinológicos errados.",
      "Está incorreta: misturam conceitos anatómicos e endocrinológicos errados."
    ],
    "nursingApplication": "O colar de proteção tiroideia deve ser ajustado perfeitamente em redor da laringe e traqueia, sem folgas que deixem a glândula descoberta: o enfermeiro deve verificar a colocação correta antes de vestir o avental de proteção esterilizado para cirurgias e não o desapertar durante os procedimentos."
  },
  {
    "id": 5037,
    "topicId": 5,
    "question": "Qual das seguintes afirmações sobre a exposição ocupacional de enfermeiros à radiação ionizante de Raios X é rigorosamente VERDADEIRA?",
    "options": [
      "Os Raios X não tornam o corpo do doente nem o ar da sala radioativos; logo que o botão de disparo do gerador é desligado, a radiação cessa instantaneamente à velocidade da luz e a sala fica 100% livre de radiação.",
      "O doente que faz uma radiografia fica a emitir raios X pelos poros durante as 48 horas seguintes.",
      "Os raios X acumulam-se nas paredes da sala e vão sendo libertados lentamente ao longo da noite.",
      "O enfermeiro deve tomar banho de álcool após cada radiografia para retirar a radiação da pele."
    ],
    "correctIndex": 0,
    "explanation": "Ao contrário da contaminação radioativa particulada (onde substâncias radioativas são inaladas, ingeridas ou derramadas na pele), os Raios X são ondas eletromagnéticas (fotões) geradas eletricamente numa ampola: viajam à velocidade da luz (300.000 km/s) e interagem com a matéria em nanosssegundos. No instante em que o gerador elétrico é desativado, o feixe é interrompido imediatamente. Nem o doente, nem a maca, nem as paredes nem o ar retêm qualquer radiação residual, não havendo qualquer perigo de contaminação.",
    "distractorAnalysis": [
      "Está incorreta: é um mito popular falso; um doente de radiografia convencional não tem qualquer radioatividade residual no seu corpo.",
      "Está incorreta: confunde radiação X com substâncias fosforescentes que emitem luz fria visível.",
      "Está incorreta: é uma prática inútil que causaria apenas dermatite química sem qualquer efeito sobre raios X que já passaram pelo corpo."
    ],
    "nursingApplication": "Desmistificar o medo da radiação com base científica é essencial no acolhimento ao doente e à família: o enfermeiro tranquiliza os acompanhantes e os profissionais de que uma radiografia ou TAC não deixa o doente 'radioativo', podendo os familiares prestar cuidados físicos diretos e abraçar o doente logo a seguir ao exame sem qualquer risco de radiação."
  },
  {
    "id": 5038,
    "topicId": 5,
    "question": "A mamografia utiliza feixes de Raios X de baixa quilovoltagem de pico (kVp entre 25 e 32 kV). Qual é a razão biofísica para a seleção desta baixa energia fotónica na imagem da mama?",
    "options": [
      "Porque em baixas energias prevalece o Efeito Fotoelétrico (com dependência em 1/E³ e Z³), maximizando a diferenciação subtil de atenuação entre o tecido glandular mamário, a gordura e microcalcificações patológicas ricas em cálcio (indicadoras precoces de neoplasia).",
      "Porque tubos de alta voltagem fariam a mama derreter instantaneamente.",
      "Porque o molibdénio é um metal que só funciona na presença de ar frio.",
      "Para evitar que os raios X atravessem as costelas e atinjam o pulmão."
    ],
    "correctIndex": 0,
    "explanation": "A mama é constituída predominantemente por tecidos moles de números atómicos e densidades muito semelhantes: tecido glandular fibroadenoso e tecido adiposo subcutâneo. Se fossem utilizados raios X de alta energia (como 100-120 kVp de um tórax), o efeito Compton dominaria, resultando numa imagem quase uniforme cinzenta sem qualquer contraste tecidual. Operando com baixas energias (25 a 30 kVp), explora-se a dependência cúbica do efeito fotoelétrico, destacando as minúsculas microcalcificações milimétricas com alto número atómico Z de cálcio em branco nítido contra o fundo cinzento.",
    "distractorAnalysis": [
      "Está incorreta: é uma afirmação exagerada sem base térmica ou física.",
      "Está incorreta: confunde propriedades mecânicas do ânodo com o processo quântico de emissão de radiação.",
      "Está incorreta: ignora que a compressão mamária e a colimação são os fatores que isolam a mama e protegem as estruturas torácicas profundas."
    ],
    "nursingApplication": "Na consulta de saúde da mulher e rastreio de cancro de mama, o enfermeiro explica à utente a razão da compressão mecânica firme da mama durante a mamografia: a compressão adelgaça o tecido (menor espessura x na lei exponencial I = I₀ · e^(-μ·x)), reduz a dose de radiação necessária, diminui a sobreposição de estruturas glandulares e reduz a radiação de dispersão, aumentando a acuidade do diagnóstico precoce."
  },
  {
    "id": 5039,
    "topicId": 5,
    "question": "O fenómeno de 'Morte Pré-Implantação' por radiação ionizante no feto ocorre quando a exposição acidental grave ocorre em qual período cronológico da gestação?",
    "options": [
      "Nas duas primeiras semanas após a conceção (fase de pré-implantação / blastocisto), operando sob a lei do 'Tudo-ou-Nada' (ou o concepto morre e é abortado espontaneamente sem malformações, ou regenera-se integralmente sem sequelas).",
      "No 9.º mês imediatamente antes do parto vaginal.",
      "Apenas durante o período de lactação após o nascimento.",
      "Aos 5 anos de idade da criança."
    ],
    "correctIndex": 0,
    "explanation": "A resposta radiobiológica pré-natal divide-se em 3 fases: 1) Pré-implantação (semanas 1 a 2 pós-fecundação): o embrião é composto por poucas células estaminais totipotentes. Vigora a lei do 'tudo-ou-nada' — doses significativas (>0,1 Gy) causam morte embrionária precoce e aborto subclínico espontâneo; se sobreviver, as células pluripotentes remanescentes compensam o dano e o feto desenvolve-se normalmente; 2) Organogénese (semanas 3 a 8): máxima vulnerabilidade a malformações estruturais congénitas (teratogénese); 3) Fase fetal (semanas 9 a 25): maior risco de atraso mental grave e microcefalia.",
    "distractorAnalysis": [
      "Está incorreta: descreve a fase terminal fetal onde o risco de malformações morfológicas estruturais principais é muito baixo (embora persista o risco estocástico de leucemia na infância).",
      "Está incorreta: situam-se no período pós-natal exterior ao útero materno.",
      "Está incorreta: situam-se no período pós-natal exterior ao útero materno."
    ],
    "nursingApplication": "A 'Regra dos 10 Dias' (ou dos 28 dias) na prescrição de radiologia médica a mulheres em idade fértil exige que o enfermeiro questione ativamente sobre a data da última menstruação (DUM) e possibilidade de gravidez antes de exames radiológicos que envolvam a pelve ou abdómen, prevenindo a irradiação inadvertida de embriões na fase crítica de clivagem e organogénese."
  },
  {
    "id": 5040,
    "topicId": 5,
    "question": "No contexto da dosimetria de pacientes pediátricos, por que motivo as crianças são significativamente mais suscetíveis aos efeitos estocásticos (cancro radioinduzido tardio) do que os adultos para a mesma dose de Raios X?",
    "options": [
      "Porque as crianças possuem tecidos biológicos com taxas muito superiores de divisão celular ativa e têm uma expectativa de vida muito mais longa pela frente para manifestar os cancros de longo período de latência (risco cumulativo até 3 a 5 vezes superior ao de um adulto).",
      "Porque as crianças não possuem sistema imunitário capaz de combater bactérias.",
      "Porque os ossos pediátricos são feitos exclusivamente de urânio puro.",
      "Porque as crianças são imunes à radiação e não sofrem qualquer efeito biológico."
    ],
    "correctIndex": 0,
    "explanation": "Crianças são particularmente vulneráveis aos efeitos tardios da radiação por duas razões biológicas: 1) Lei de Bergonié-Tribondeau: os seus órgãos estão em pleno crescimento e mitose celular intensa, sendo muito mais suscetíveis a danos cromossómicos persistentes; 2) Fator de esperança de vida: os tumores sólidos radioinduzidos têm períodos de latência de 10 a 30 anos (e as leucemias de 2 a 10 anos). Uma criança de 5 anos viverá décadas suficientes para manifestar a neoplasia, ao passo que um indivíduo de 85 anos frequentemente não atingirá o término desse período de latência.",
    "distractorAnalysis": [
      "Está incorreta: confunde imunidade antibacteriana com reparação de danos de radiação no DNA.",
      "Está incorreta: é um absurdo radioquímico evidente.",
      "Está incorreta: nega a vulnerabilidade pediátrica bem documentada pela ICRP."
    ],
    "nursingApplication": "A campanha internacional 'Image Gently' em pediatria norteia a atuação de enfermagem: exigir a adaptação dos parâmetros do equipamento (reduzir mA e kVp ao peso da criança), utilizar protetores gonadais de chumbo sempre que possível e priorizar métodos de diagnóstico sem radiação ionizante (como a Ecografia ou Ressonância Magnética) para investigar dores abdominais pediátricas (apendicite)."
  },
  {
    "id": 5041,
    "topicId": 5,
    "question": "A grelha antidifusora (grelha de Potter-Bucky) é colocada entre o doente e o detetor de imagem nas radiografias de partes espessas (tórax, abdómen, bacia). Qual é a sua função física primordial?",
    "options": [
      "Barrar e absorver através de finas lâminas de chumbo a radiação dispersa de Compton que sai obliquamente do corpo do doente, permitindo que apenas os fotões do feixe primário retilíneo atinjam o filme, aumentando drasticamente a nitidez e o contraste da imagem.",
      "Aumentar a temperatura do detetor para acelerar o processo digital.",
      "Ampliar o tamanho da imagem dos órgãos como se fosse uma lupa gigante.",
      "Eliminar a necessidade de ligar o tubo de raios X à corrente elétrica."
    ],
    "correctIndex": 0,
    "explanation": "Em doentes espessos (>10 a 12 cm de espessura de tecido), a quantidade de fotões espalhados por efeito Compton supera largamente a dos fotões primários transmitidos. Se estes fotões espalhados obliquamente atingissem o detetor, criariam um nevoeiro uniforme acinzentado destruindo o contraste da imagem. A grelha antidifusora é formada por lâminas paralelas ultrafinas de chumbo espaçadas por material radiotransparente (alumínio ou carbono): os raios primários em linha reta passam pelos canais, mas os raios dispersos oblíquos colidem contra as lâminas de chumbo e são absorvidos.",
    "distractorAnalysis": [
      "Está incorreta: confunde absorção de radiação com circuitos térmicos de aquecimento.",
      "Está incorreta: confunde propriedades geométricas de dispersão com ampliação ótica de lentes.",
      "Está incorreta: viola os princípios básicos de funcionamento do tubo de raios X."
    ],
    "nursingApplication": "Como a grelha antidifusora absorve também uma pequena fração de fotões primários úteis, o seu uso exige aumentar a dose de exposição (mAs) em relação a um exame sem grelha. O enfermeiro sabe que grelhas de Potter-Bucky não devem ser utilizadas em recém-nascidos e extremidades finas (mãos e pés), onde a radiação dispersa é insignificante, poupando doses desnecessárias ao doente."
  },
  {
    "id": 5042,
    "topicId": 5,
    "question": "O produto dose-área (DAP - Dose Area Product, expresso em Gy·cm² ou cGy·cm²) é um indicador dosimétrico comum registado em exames fluoroscópicos e radiológicos. O que quantifica este parâmetro biofísico?",
    "options": [
      "O produto da dose média de radiação incidente na superfície pela área transversal da secção do feixe colimado, refletindo a quantidade total de energia de radiação entregue ao doente e correlacionando-se diretamente com o risco estocástico de cancro.",
      "A área da sala cirúrgica multiplicada pelo número de camas.",
      "A quantidade de chumbo gasta na pintura das paredes hospitalares.",
      "O peso do tubo de raios X em quilogramas dividido pelos minutos de cirurgia."
    ],
    "correctIndex": 0,
    "explanation": "O DAP (Dose-Area Product) é medido por uma câmara de ionização transparente montada no colimador do tubo: DAP = Dose × Área (Gy·cm²). Tem uma propriedade física notável: como a intensidade decresce com 1/d² e a área do feixe cresce com d² à medida que se afasta do foco, o produto DAP permanece CONSTANTE com a distância! Ele mede a energia radiológica total injetada no corpo do doente, sendo o melhor indicador para avaliar o risco de indução de efeitos estocásticos tardios.",
    "distractorAnalysis": [
      "Está incorreta: confunde dosimetria com arquitetura e dimensionamento civil hospitalar.",
      "Está incorreta: é um absurdo de construção civil sem relevância dosimétrica no doente.",
      "Está incorreta: inventa grandezas mecânicas sem correlação com a energia eletromagnética absorvida."
    ],
    "nursingApplication": "O valor de DAP acumulado ao longo de procedimentos complexos de radiologia de intervenção é registado no processo clínico do doente pelo enfermeiro: valores elevados de DAP alertam a equipa médica e de enfermagem para o risco de lesões determinísticas cutâneas tardias, agendando uma consulta de vigilância da pele 30 dias após o procedimento."
  },
  {
    "id": 5043,
    "topicId": 5,
    "question": "No pós-operatório de uma artroplastia da anca ou colocação de pacemaker definitivo, qual é a razão pela qual a Tomografia Computorizada (TAC) da região operada sofre de 'Artefactos Metálicos de Endurecimento do Feixe' (metal streaking artifacts)?",
    "options": [
      "Porque o titânio ou o aço das próteses possuem número atómico e densidade extremamente elevados, absorvendo 100% dos fotões X que os atingem (atenuação infinita), gerando sombras brancas e faixas escuras radiadas no algoritmo de reconstrução matemática que obscurecem os tecidos moles adjacentes.",
      "Porque os implantes metálicos começam a derreter com o calor dos raios X da TAC.",
      "Porque o metal absorve o ar da sala e cria vácuo dentro do corpo do doente.",
      "Porque os computadores da TAC não reconhecem materiais sólidos."
    ],
    "correctIndex": 0,
    "explanation": "Metais densos (titânio Z=22, cobalto Z=27, crómio Z=24, ouro Z=79) possuem uma densidade eletrónica colossal comparada com a água e o osso. Ao passarem pela prótese, praticamente todos os fotões de energias baixas e médias são totalmente absorvidos por efeito fotoelétrico. Esta atenuação extrema provoca o 'endurecimento severo do feixe' (apenas os fotões ultra-energéticos passam) e o fenómeno de 'starvation de fotões' (zero fotões atingem os detetores no trajeto que cruza o metal). Na reconstrução tomográfica por retroprojeção filtrada surgem as faixas brilhantes e negras características.",
    "distractorAnalysis": [
      "Está incorreta porque ; os raios X diagnósticos depositam energias minúsculas incapazes de alterar a temperatura do titânio.",
      "Está incorreta: viola as leis da densidade da matéria e estanquicidade tecidual.",
      "Está incorreta: confunde algoritmos matemáticos de transformada de Radon com incapacidade de processamento de materiais."
    ],
    "nursingApplication": "O enfermeiro informa a equipa de imagiologia sobre a presença de implantes metálicos ou próteses ortopédicas: os técnicos utilizam algoritmos avançados de software de redução de artefactos metálicos (MAR / SEMAR) e aumentam a quilovoltagem (kVp) para minimizar as faixas de distorção e conseguir avaliar com precisão a presença de hematomas ou infeções periprotésicas."
  },
  {
    "id": 5044,
    "topicId": 5,
    "question": "A 'Radiografia com Bário' (ex: trânsito esofagogástrico ou enema opaco) utiliza suspensões orais ou retais de Sulfato de Bário (BaSO₄). Qual é o cuidado de enfermagem imediato e crucial após a conclusão do exame com bário?",
    "options": [
      "Garantir a hidratação abundante do doente (ingestão hídrica oral ou soroterapia) e orientar sobre a emissão de fezes esbranquiçadas, para prevenir a compactação e dessecação do sulfato de bário no cólon (formação de 'baritoma' fecal) que pode causar obstipação severa ou oclusão intestinal mecânica.",
      "Manter o doente em repouso absoluto na cama sem comer nada durante cinco dias.",
      "Administrar ácido clorídrico concentrado para dissolver o bário no estômago.",
      "Exigir que o doente permaneça no escuro para não descolorar a pele."
    ],
    "correctIndex": 0,
    "explanation": "O sulfato de bário é um sal inorgânico insolúvel extremamente pesado e inabsorvível pela mucosa digestiva. À medida que percorre o trato gastrointestinal, o cólon absorve água do bolo fecal: se o doente não ingerir água suficiente no pós-exame, a suspensão de bário precipita e resseca numa massa pétrea dura e compacta (baritoma ou fecaloma por bário), capaz de provocar impactação fecal severa, necrose por pressão na parede do cólon ou perfuração intestinal.",
    "distractorAnalysis": [
      "Está incorreta: agravaria drasticamente a desidratação e o endurecimento do bário intraluminal.",
      "Está incorreta: provocaria queimaduras químicas cáusticas letais no esófago e estômago.",
      "Está incorreta: é uma crendice sem nexo biomédico."
    ],
    "nursingApplication": "Na alta de doentes após exames com bário, o enfermeiro educa o doente e a família: incentivar a ingestão de pelo menos 2 litros de água nas primeiras 24 horas, esclarecer que a eliminação de fezes brancas como gesso nos dias seguintes é um processo normal de depuração do contraste, e prescrever/administrar laxantes osmóticos suaves se houver atraso na evacuação."
  },
  {
    "id": 5045,
    "topicId": 5,
    "question": "O conceito de 'Linear Energy Transfer' (LET - Transferência Linear de Energia) quantifica a taxa média de energia depositada pela radiação por unidade de comprimento percorrido no tecido (expressa em keV/μm). Em termos de LET, como se classificam os Raios X e as Radiações Gama em comparação com as Partículas Alfa?",
    "options": [
      "Os Raios X e as Radiações Gama são radiações de BAIXO LET (~0,2 a 3 keV/μm), produzindo ionizações esparsas e dispersas ao longo do seu trajeto, com maior capacidade de reparação celular do DNA; as partículas Alfa são radiações de ALTO LET (~100 keV/μm), gerando densas trilhas de ionizações contíguas devastadoras.",
      "Os Raios X são radiações de alto LET e as partículas alfa de baixo LET.",
      "Todas as radiações possuem rigorosamente o mesmo valor de LET no vácuo.",
      "O LET de uma radiação diminui para zero assim que atinge uma célula viva."
    ],
    "correctIndex": 0,
    "explanation": "O LET mede a densidade espacial de deposição de energia ao longo da trajetória da radiação. Os fotões X e gama são radiações de baixo LET (baixo poder de transferência linear de energia): ejetam eletrões rápidos que depositam energia de forma pontual e esparsa no citoplasma e núcleo, produzindo predominantemente quebras simples de cadeia de DNA (single-strand breaks), que são facilmente reparadas pelas enzimas da célula. Partículas alfa (núcleos de hélio pesados), com alto LET, depositam pacotes brutais de energia em trajetos submicrométricos, causando quebras duplas complexas irreparáveis de DNA (double-strand breaks).",
    "distractorAnalysis": [
      "Está incorreta: inverte a física do LET entre fotões eletromagnéticos leves e iões pesados.",
      "Está incorreta: ignora a enorme disparidade física de massas e cargas entre fotões (sem carga nem massa) e partículas carregadas pesadas.",
      "Está incorreta: nega a própria definição de LET, que traduz a desaceleração contínua por perda de energia de colisões na matéria viva."
    ],
    "nursingApplication": "Compreender que os raios X têm baixo LET fundamenta o protocolo de fracionamento da dose em radioterapia: distribuir a dose total ao longo de várias semanas permite que os tecidos normais saudáveis circundantes (com sistemas enzimáticos de reparação intactos para quebras de baixo LET) reparem o dano do DNA nos intervalos entre sessões, aumentando a tolerância clínica do doente."
  },
  {
    "id": 5046,
    "topicId": 5,
    "question": "Na sala de operações durante cirurgias ortopédicas de fixação de fraturas, se o enfermeiro instrumentista ou circulante tiver de permanecer a menos de 1 metro do doente durante disparos de escopia com arco em C, qual é o conjunto de Equipamento de Proteção Individual (EPI) radiológico indispensável?",
    "options": [
      "Avental de chumbo (mínimo 0,35 a 0,5 mm Pb equivalente), Protetor de tiroide ajustado ao pescoço, Óculos de vidro plumbífero com proteção lateral e Dosímetro individual por baixo do avental.",
      "Bata cirúrgica descartável de papel e máscara de três camadas simples.",
      "Luvas de procedimento de vinil comuns e touca de algodão.",
      "Nenhum EPI é necessário se o enfermeiro fechar os olhos durante o disparo."
    ],
    "correctIndex": 0,
    "explanation": "A proximidade direta (<1 metro) da mesa cirúrgica coloca o enfermeiro na zona de máxima densidade de fluxo de radiação dispersa de Compton emitida pelo doente. A proteção radiológica individual abrangente é mandatória: o avental de chumbo protege a medula óssea dos ossos chatos, pulmões e gónadas; o protetor de tiroide protege a glândula contra o risco estocástico de carcinoma tiroideu; e os óculos plumbíferos blindam o cristalino contra a opacificação cataratal determinística.",
    "distractorAnalysis": [
      "Está incorreta: protege apenas contra microrganismos biológicos estéreis e fluidos, sendo totalmente transparente aos raios X.",
      "Está incorreta: não possui densidade suficiente para atenuar fotões X.",
      "Está incorreta: é uma negligência grave das normas de segurança no trabalho."
    ],
    "nursingApplication": "O uso rigoroso de todo o conjunto de EPI de chumbo é um dever deontológico e profissional de saúde: o enfermeiro nunca deve aceitar a desculpa de 'ser apenas um disparo rápido de confirmação', pois a dose cumulativa de dezenas de pequenos disparos diários ao longo de meses atinge valores expressivos de exposição ocupacional."
  },
  {
    "id": 5047,
    "topicId": 5,
    "question": "O conceito de 'Quilovoltagem de Pico' (kVp) no comando de controlo do aparelho de Raios X determina primariamente qual característica física do feixe de radiação?",
    "options": [
      "A diferença de potencial elétrico aplicada entre o cátodo e o ânodo, determinando a energia cinética máxima dos eletrões e, consequentemente, a energia e o poder de PENETRAÇÃO dos fotões X emitidos (qualidade do feixe).",
      "A corrente que atravessa o filamento, determinando apenas o número de fotões emitidos.",
      "A velocidade de rotação da mesa cirúrgica em rotações por minuto.",
      "A cor da luz piloto que se acende no painel de comando."
    ],
    "correctIndex": 0,
    "explanation": "A quilovoltagem de pico (kVp, variando clinicamente de 40 kV em extremidades até 150 kV em tórax/TAC) estabelece a diferença de potencial elétrico acelerador: um eletrão acelerado por 100 kV adquire 100 keV de energia cinética. Quanto maior o kVp: maior é a energia máxima dos fotões Bremsstrahlung, maior é a sua frequência, menor o seu comprimento de onda e maior a sua PENETRÂNCIA através de tecidos densos ('qualidade' do feixe). Em contrapartida, o produto corrente-tempo (mAs) controla a 'quantidade' total de fotões gerados.",
    "distractorAnalysis": [
      "Está incorreta: confunde kVp com os miliamperes-segundo (mAs, que governa a quantidade de fotões).",
      "Está incorreta: referem atributos mecânicos e visuais secundários irrelevantes para a física quântica do feixe.",
      "Está incorreta: referem atributos mecânicos e visuais secundários irrelevantes para a física quântica do feixe."
    ],
    "nursingApplication": "Compreender que o kVp governa a penetração ajuda o enfermeiro a antecipar ajustes técnicos em doentes acamados de grande porte físico: ao radiografar um doente com derrame pleural massivo ou obesidade mórbida no leito, elevar o kVp é a única forma física de permitir que os fotões atravessem a densa camada líquida e cheguem ao detetor com contraste útil."
  },
  {
    "id": 5048,
    "topicId": 5,
    "question": "O conceito de 'Miliamperes-segundo' (mAs) no gerador de Raios X expressa o produto da corrente do filamento catódico pelo tempo de exposição em segundos. Fisicamente, o que governa a regulação dos mAs?",
    "options": [
      "O número total de eletrões que colidem com o ânodo e, consequentemente, a QUANTIDADE total de fotões de Raios X emitidos pelo tubo durante o disparo (intensidade do feixe).",
      "A energia máxima que cada fotão individual transporta no vácuo.",
      "A espessura da blindagem de betão das paredes do hospital.",
      "A frequência de pulso cardíaco do doente medida no oxímetro."
    ],
    "correctIndex": 0,
    "explanation": "A corrente de tubo (medida em miliamperes, mA) determina o fluxo de eletrões libertados por emissão termiónica no cátodo de tungsténio aquecido. Ao multiplicar a corrente mA pelo tempo do disparo em segundos (s), obtém-se a carga total em miliCoulombs: mAs = mA · s. Como a cada eletrão incidente corresponde uma probabilidade fixa de gerar fotões X, duplicar os mAs duplica o número total de fotões do feixe primário e duplica a dose de radiação entregue ao doente, sem alterar a penetrância (kVp) individual dos fotões.",
    "distractorAnalysis": [
      "Está incorreta: é a função exclusiva da quilovoltagem de pico (kVp), não dos mAs.",
      "Está incorreta: é um parâmetro arquitetónico e estrutural de radioproteção civil.",
      "Está incorreta: é uma variável fisiológica independente do circuito elétrico da máquina de raios X."
    ],
    "nursingApplication": "Na radiografia pediátrica e no doente agitado ou com taquipneia, os enfermeiros e técnicos priorizam tempos de exposição 's' ultracurtos (milissegundos) com mA elevado para obter os mAs necessários: isto elimina artefactos de movimento (tremor, respiração) na radiografia, prevenindo a necessidade de repetir o exame e duplicar a dose de radiação."
  },
  {
    "id": 5049,
    "topicId": 5,
    "question": "Na avaliação da radioproteção de uma sala de exames imagiológicos, a zona onde as doses de radiação podem ultrapassar os limites do público geral é devidamente delimitada e sinalizada como 'Zona Controlada' ou 'Zona Vigiada'. Qual é o símbolo internacional obrigatório afixado nas portas destas salas?",
    "options": [
      "O Trifólio de Radiação Ionizante (símbolo de três pás circulares a 120° num fundo contrastante), acompanhado de sinalética de perigo de radiação.",
      "Uma cruz vermelha em fundo branco simples.",
      "A caveira clássica de pirata em fundo negro.",
      "Um semáforo verde permanentemente aceso."
    ],
    "correctIndex": 0,
    "explanation": "A norma internacional (ISO 361) padroniza o Trifólio de Radiação como o símbolo universal de alerta para a presença de radiações ionizantes: consiste numa lâmina circular central com três pás que se estendem a intervalos de 60° (disposição a 120° mútuos). Em hospitais, placas com o trifólio (de cor cinzenta para zona vigiada e verde/amarela/laranja para zonas controladas de maior taxa de dose) com a menção expressa de 'Acesso Condicionado' alertam profissionais e o público contra a entrada inadvertida durante disparos.",
    "distractorAnalysis": [
      "Está incorreta: é o símbolo internacional humanitário dos serviços de socorro médico e enfermagem militar da Cruz Vermelha.",
      "Está incorreta: é o pictograma clássico para agentes químicos tóxicos venenosos ou pirataria marítima.",
      "Está incorreta: indicaria passagem livre sem qualquer restrição de segurança."
    ],
    "nursingApplication": "O enfermeiro garante que as portas das salas com sinalização de trifólio de radiação permanecem firmemente fechadas durante todos os procedimentos com emissão ativa de raios X, impedindo a entrada inadvertida de doentes desorientados, acompanhantes, estudantes ou profissionais desprotegidos."
  },
  {
    "id": 5050,
    "topicId": 5,
    "question": "Em caso de extravasamento periférico acidental de um Meio de Contraste Iodado para o tecido celular subcutâneo do braço durante uma injeção rápida por injetor automático de TAC (bolus a 3 a 5 mL/s), qual é a complicação mecânica aguda mais grave que o enfermeiro deve monitorizar?",
    "options": [
      "Síndrome Compartimental aguda do antebraço provocada pela elevação drástica da pressão intersticial e efeito hiperosmolar do contraste nos compartimentos musculares fechados, com risco de isquemia muscular e necrose nervosa.",
      "Transformação instantânea do braço numa estrutura óssea sólida de hidroxiapatite.",
      "Contaminação do ar da sala de TAC por radiação ultravioleta gama.",
      "Aumento imediato da acuidade visual do doente para 200%."
    ],
    "correctIndex": 0,
    "explanation": "Os injetores de contraste modernos debitam volumes de 80 a 150 mL de meio de contraste iodado viscoso e hiperosmolar sob pressões elevadas (>200-300 psi) a velocidades rápidas (3 a 5 mL/s). Se o cateter venoso periférico romper ou sair da veia, um volume maciço (>50 a 100 mL) extravasa subitamente para os tecidos subcutâneos e compartimentos musculares inextensíveis do antebraço. A pressão intracompartimental dispara (agravada pela atração osmótica adicional de água), comprimindo os vasos perfurantes e o nervo mediano e radial (Síndrome Compartimental pós-extravasamento), exigindo vigilância neurovascular contínua.",
    "distractorAnalysis": [
      "Está incorreta: confunde infiltração química líquida com osteogénese acelerada de ficção.",
      "Está incorreta: confunde um acidente mecânico com extravasamento de fármaco com fenómenos nucleares atmosféricos.",
      "Está incorreta: é um efeito fantástico desprovido de plausibilidade fisiológica."
    ],
    "nursingApplication": "Na ocorrência de um extravasamento significativo de contraste, a intervenção imediata de enfermagem inclui: suspender a infusão, tentar aspirar parte do fluido pelo cateter antes de o remover, elevar o membro acima do coração, aplicar compressas frias para diminuir o edema e a dor, medir o perímetro do membro e monitorizar os pulsos e sensibilidade dos dedos de 15 em 15 minutos, solicitando avaliação imediata da cirurgia plástica/vascular se houver suspeita de síndrome compartimental."
  },
  {
    "id": 5051,
    "topicId": 5,
    "question": "Na física das radiações ionizantes e Raios X aplicada ao contexto hospitalar, em relação a 'natureza fotónica ondulatória-corpuscular dos Raios X', qual é a fundamentação científica exata?",
    "options": [
      "são radiações eletromagnéticas constituídas por fotões de alta energia, com comprimentos de onda extremamente curtos (0,01 a 10 nanómetros) e altas frequências (3·10¹⁶ a 3·10¹⁹ Hz). Propagam-se no vácuo à velocidade da luz (c ≈ 300.000 km/s), não possuem massa de repouso nem carga elétrica e não são desviados por campos elétricos ou magnéticos.",
      "Os Raios X são constituídos por partículas gasosas de oxigénio líquido que evaporam instantaneamente à temperatura da sala.",
      "Trata-se de uma radiação puramente acústica e ultrassónica inaudível gerada pelo atrito das rodas da cama hospitalar.",
      "A radiação ionizante anula todas as ligações químicas do organismo humano transformando o doente num holograma sem massa."
    ],
    "correctIndex": 0,
    "explanation": "Em física das radiações e imagiologia médica, natureza fotónica ondulatória-corpuscular dos Raios X explica-se pelo facto de que são radiações eletromagnéticas constituídas por fotões de alta energia, com comprimentos de onda extremamente curtos (0,01 a 10 nanómetros) e altas frequências (3·10¹⁶ a 3·10¹⁹ Hz). Propagam-se no vácuo à velocidade da luz (c ≈ 300.000 km/s), não possuem massa de repouso nem carga elétrica e não são desviados por campos elétricos ou magnéticos.",
    "distractorAnalysis": [
      "Está incorreta: confunde radiação eletromagnética fotónica com matéria gasosa comum.",
      "Está incorreta: confunde Raios X com ondas mecânicas sonoras ou ultrassons.",
      "Está incorreta: é uma fantasia pseudocientífica que viola as leis da conservação da massa e da matéria."
    ],
    "nursingApplication": "O enfermeiro sabe que, ao desligar o interruptor elétrico do aparelho de Raios X, a emissão de fotões cessa instantaneamente, não ficando qualquer radiação residual no ar da sala."
  },
  {
    "id": 5052,
    "topicId": 5,
    "question": "Durante os cuidados de enfermagem a um doente submetido a procedimentos imagiológicos com radiações, como se aplica na prática o conceito de 'natureza fotónica ondulatória-corpuscular dos Raios X'?",
    "options": [
      "Implica que o enfermeiro retire toda a blindagem de chumbo para que o seu corpo absorva a radiação em substituição do doente.",
      "Traduz-se na seguinte intervenção clínica fundamentada: O enfermeiro sabe que, ao desligar o interruptor elétrico do aparelho de Raios X, a emissão de fotões cessa instantaneamente, não ficando qualquer radiação residual no ar da sala.",
      "Exige a imersão do doente numa banheira com lixívia concentrada durante 3 horas após o exame radiológico.",
      "Requer a proibição permanente de contacto humano com o doente radiografado durante 6 meses após a radiografia de tórax."
    ],
    "correctIndex": 1,
    "explanation": "A aplicação de enfermagem para natureza fotónica ondulatória-corpuscular dos Raios X baseia-se no princípio: O enfermeiro sabe que, ao desligar o interruptor elétrico do aparelho de Raios X, a emissão de fotões cessa instantaneamente, não ficando qualquer radiação residual no ar da sala. Esta intervenção garante a segurança radiológica do doente e do profissional.",
    "distractorAnalysis": [
      "Está incorreta: é perigosa e absurda: os profissionais devem proteger-se ativamente e não expor-se voluntariamente à radiação.",
      "Está incorreta: provocaria queimaduras químicas graves; não há qualquer radiação externa que justifique lixívia após Raios X.",
      "Está incorreta: confunde radiografia simples externa (onde não fica qualquer radioatividade no corpo) com contaminação radioativa interna."
    ],
    "nursingApplication": "O enfermeiro sabe que, ao desligar o interruptor elétrico do aparelho de Raios X, a emissão de fotões cessa instantaneamente, não ficando qualquer radiação residual no ar da sala."
  },
  {
    "id": 5053,
    "topicId": 5,
    "question": "Um enfermeiro analisa os parâmetros biofísicos e os mecanismos de interação em 'natureza fotónica ondulatória-corpuscular dos Raios X'. Qual das seguintes afirmações expressa a correlação científica correta?",
    "options": [
      "A atenuação da radiação é rigorosamente nula em qualquer material, atravessando 10 metros de chumbo maciço sem qualquer perda de intensidade.",
      "O efeito fotoelétrico ocorre com igual probabilidade no ar, na gordura, no músculo e no osso, sendo independente do número atómico Z.",
      "A análise biofísica correta confirma que Propagam-se no vácuo à velocidade da luz (c ≈ 300.000 km/s), não possuem massa de repouso nem carga elétrica e não são desviados por campos elétricos ou magnéticos.",
      "A radiação dispersa por espalhamento Compton desaparece espontaneamente se as janelas da sala de exames estiverem abertas."
    ],
    "correctIndex": 2,
    "explanation": "A correlação científica correta demonstra que Propagam-se no vácuo à velocidade da luz (c ≈ 300.000 km/s), não possuem massa de repouso nem carga elétrica e não são desviados por campos elétricos ou magnéticos. O domínio destes fundamentos permite ao enfermeiro assegurar a correta radioproteção e a interpretação dos riscos radiológicos.",
    "distractorAnalysis": [
      "Está incorreta: ignora a Lei de atenuação exponencial da radiação e a eficácia comprovada do chumbo como blindagem protetora.",
      "Está incorreta: nega a dependência estrita em Z³ do efeito fotoelétrico, que é a base física do contraste ósseo.",
      "Está incorreta: confunde radiação eletromagnética ionizante em linha reta com correntes de ar atmosférico."
    ],
    "nursingApplication": "O enfermeiro sabe que, ao desligar o interruptor elétrico do aparelho de Raios X, a emissão de fotões cessa instantaneamente, não ficando qualquer radiação residual no ar da sala."
  },
  {
    "id": 5054,
    "topicId": 5,
    "question": "Na física das radiações ionizantes e Raios X aplicada ao contexto hospitalar, em relação a 'espetro eletromagnético e fronteira com a luz ultravioleta', qual é a fundamentação científica exata?",
    "options": [
      "Os Raios X são constituídos por partículas gasosas de oxigénio líquido que evaporam instantaneamente à temperatura da sala.",
      "Trata-se de uma radiação puramente acústica e ultrassónica inaudível gerada pelo atrito das rodas da cama hospitalar.",
      "A radiação ionizante anula todas as ligações químicas do organismo humano transformando o doente num holograma sem massa.",
      "os Raios X situam-se no espetro eletromagnético entre a radiação ultravioleta extrema e os raios gama de origem nuclear. A energia individual de cada fotão de Raios X (E = h · f) situa-se tipicamente entre 1 keV e centenas de keV no diagnóstico médico convencional."
    ],
    "correctIndex": 3,
    "explanation": "Em física das radiações e imagiologia médica, espetro eletromagnético e fronteira com a luz ultravioleta explica-se pelo facto de que os Raios X situam-se no espetro eletromagnético entre a radiação ultravioleta extrema e os raios gama de origem nuclear. A energia individual de cada fotão de Raios X (E = h · f) situa-se tipicamente entre 1 keV e centenas de keV no diagnóstico médico convencional.",
    "distractorAnalysis": [
      "Está incorreta: confunde radiação eletromagnética fotónica com matéria gasosa comum.",
      "Está incorreta: confunde Raios X com ondas mecânicas sonoras ou ultrassons.",
      "Está incorreta: é uma fantasia pseudocientífica que viola as leis da conservação da massa e da matéria."
    ],
    "nursingApplication": "O enfermeiro distingue radiações ionizantes (Raios X e Gama, que quebram ligações moleculares) de radiações não-ionizantes (ressonância magnética e ecografia, seguras na gravidez)."
  },
  {
    "id": 5055,
    "topicId": 5,
    "question": "Durante os cuidados de enfermagem a um doente submetido a procedimentos imagiológicos com radiações, como se aplica na prática o conceito de 'espetro eletromagnético e fronteira com a luz ultravioleta'?",
    "options": [
      "Traduz-se na seguinte intervenção clínica fundamentada: O enfermeiro distingue radiações ionizantes (Raios X e Gama, que quebram ligações moleculares) de radiações não-ionizantes (ressonância magnética e ecografia, seguras na gravidez).",
      "Implica que o enfermeiro retire toda a blindagem de chumbo para que o seu corpo absorva a radiação em substituição do doente.",
      "Exige a imersão do doente numa banheira com lixívia concentrada durante 3 horas após o exame radiológico.",
      "Requer a proibição permanente de contacto humano com o doente radiografado durante 6 meses após a radiografia de tórax."
    ],
    "correctIndex": 0,
    "explanation": "A aplicação de enfermagem para espetro eletromagnético e fronteira com a luz ultravioleta baseia-se no princípio: O enfermeiro distingue radiações ionizantes (Raios X e Gama, que quebram ligações moleculares) de radiações não-ionizantes (ressonância magnética e ecografia, seguras na gravidez). Esta intervenção garante a segurança radiológica do doente e do profissional.",
    "distractorAnalysis": [
      "Está incorreta: é perigosa e absurda: os profissionais devem proteger-se ativamente e não expor-se voluntariamente à radiação.",
      "Está incorreta: provocaria queimaduras químicas graves; não há qualquer radiação externa que justifique lixívia após Raios X.",
      "Está incorreta: confunde radiografia simples externa (onde não fica qualquer radioatividade no corpo) com contaminação radioativa interna."
    ],
    "nursingApplication": "O enfermeiro distingue radiações ionizantes (Raios X e Gama, que quebram ligações moleculares) de radiações não-ionizantes (ressonância magnética e ecografia, seguras na gravidez)."
  },
  {
    "id": 5056,
    "topicId": 5,
    "question": "Um enfermeiro analisa os parâmetros biofísicos e os mecanismos de interação em 'espetro eletromagnético e fronteira com a luz ultravioleta'. Qual das seguintes afirmações expressa a correlação científica correta?",
    "options": [
      "A atenuação da radiação é rigorosamente nula em qualquer material, atravessando 10 metros de chumbo maciço sem qualquer perda de intensidade.",
      "A análise biofísica correta confirma que A energia individual de cada fotão de Raios X (E = h · f) situa-se tipicamente entre 1 keV e centenas de keV no diagnóstico médico convencional.",
      "O efeito fotoelétrico ocorre com igual probabilidade no ar, na gordura, no músculo e no osso, sendo independente do número atómico Z.",
      "A radiação dispersa por espalhamento Compton desaparece espontaneamente se as janelas da sala de exames estiverem abertas."
    ],
    "correctIndex": 1,
    "explanation": "A correlação científica correta demonstra que A energia individual de cada fotão de Raios X (E = h · f) situa-se tipicamente entre 1 keV e centenas de keV no diagnóstico médico convencional. O domínio destes fundamentos permite ao enfermeiro assegurar a correta radioproteção e a interpretação dos riscos radiológicos.",
    "distractorAnalysis": [
      "Está incorreta: ignora a Lei de atenuação exponencial da radiação e a eficácia comprovada do chumbo como blindagem protetora.",
      "Está incorreta: nega a dependência estrita em Z³ do efeito fotoelétrico, que é a base física do contraste ósseo.",
      "Está incorreta: confunde radiação eletromagnética ionizante em linha reta com correntes de ar atmosférico."
    ],
    "nursingApplication": "O enfermeiro distingue radiações ionizantes (Raios X e Gama, que quebram ligações moleculares) de radiações não-ionizantes (ressonância magnética e ecografia, seguras na gravidez)."
  },
  {
    "id": 5057,
    "topicId": 5,
    "question": "Na física das radiações ionizantes e Raios X aplicada ao contexto hospitalar, em relação a 'relação de Planck-Einstein (E = h · f = h · c / λ)', qual é a fundamentação científica exata?",
    "options": [
      "Os Raios X são constituídos por partículas gasosas de oxigénio líquido que evaporam instantaneamente à temperatura da sala.",
      "Trata-se de uma radiação puramente acústica e ultrassónica inaudível gerada pelo atrito das rodas da cama hospitalar.",
      "a energia do fotão é diretamente proporcional à frequência (f) e inversamente proporcional ao comprimento de onda (λ). Fotões de menor comprimento de onda possuem maior energia fotónica e, portanto, maior poder de penetração nos tecidos densos do corpo humano.",
      "A radiação ionizante anula todas as ligações químicas do organismo humano transformando o doente num holograma sem massa."
    ],
    "correctIndex": 2,
    "explanation": "Em física das radiações e imagiologia médica, relação de Planck-Einstein (E = h · f = h · c / λ) explica-se pelo facto de que a energia do fotão é diretamente proporcional à frequência (f) e inversamente proporcional ao comprimento de onda (λ). Fotões de menor comprimento de onda possuem maior energia fotónica e, portanto, maior poder de penetração nos tecidos densos do corpo humano.",
    "distractorAnalysis": [
      "Está incorreta: confunde radiação eletromagnética fotónica com matéria gasosa comum.",
      "Está incorreta: confunde Raios X com ondas mecânicas sonoras ou ultrassons.",
      "Está incorreta: é uma fantasia pseudocientífica que viola as leis da conservação da massa e da matéria."
    ],
    "nursingApplication": "Ao selecionar o 'feixe duro' (alta quilovoltagem kVp), o técnico e o enfermeiro sabem que o feixe se torna mais penetrante para radiografar regiões espessas como a bacia ou coluna lombo-sagrada."
  },
  {
    "id": 5058,
    "topicId": 5,
    "question": "Durante os cuidados de enfermagem a um doente submetido a procedimentos imagiológicos com radiações, como se aplica na prática o conceito de 'relação de Planck-Einstein (E = h · f = h · c / λ)'?",
    "options": [
      "Implica que o enfermeiro retire toda a blindagem de chumbo para que o seu corpo absorva a radiação em substituição do doente.",
      "Exige a imersão do doente numa banheira com lixívia concentrada durante 3 horas após o exame radiológico.",
      "Requer a proibição permanente de contacto humano com o doente radiografado durante 6 meses após a radiografia de tórax.",
      "Traduz-se na seguinte intervenção clínica fundamentada: Ao selecionar o 'feixe duro' (alta quilovoltagem kVp), o técnico e o enfermeiro sabem que o feixe se torna mais penetrante para radiografar regiões espessas como a bacia ou coluna lombo-sagrada."
    ],
    "correctIndex": 3,
    "explanation": "A aplicação de enfermagem para relação de Planck-Einstein (E = h · f = h · c / λ) baseia-se no princípio: Ao selecionar o 'feixe duro' (alta quilovoltagem kVp), o técnico e o enfermeiro sabem que o feixe se torna mais penetrante para radiografar regiões espessas como a bacia ou coluna lombo-sagrada. Esta intervenção garante a segurança radiológica do doente e do profissional.",
    "distractorAnalysis": [
      "Está incorreta: é perigosa e absurda: os profissionais devem proteger-se ativamente e não expor-se voluntariamente à radiação.",
      "Está incorreta: provocaria queimaduras químicas graves; não há qualquer radiação externa que justifique lixívia após Raios X.",
      "Está incorreta: confunde radiografia simples externa (onde não fica qualquer radioatividade no corpo) com contaminação radioativa interna."
    ],
    "nursingApplication": "Ao selecionar o 'feixe duro' (alta quilovoltagem kVp), o técnico e o enfermeiro sabem que o feixe se torna mais penetrante para radiografar regiões espessas como a bacia ou coluna lombo-sagrada."
  },
  {
    "id": 5059,
    "topicId": 5,
    "question": "Um enfermeiro analisa os parâmetros biofísicos e os mecanismos de interação em 'relação de Planck-Einstein (E = h · f = h · c / λ)'. Qual das seguintes afirmações expressa a correlação científica correta?",
    "options": [
      "A análise biofísica correta confirma que Fotões de menor comprimento de onda possuem maior energia fotónica e, portanto, maior poder de penetração nos tecidos densos do corpo humano.",
      "A atenuação da radiação é rigorosamente nula em qualquer material, atravessando 10 metros de chumbo maciço sem qualquer perda de intensidade.",
      "O efeito fotoelétrico ocorre com igual probabilidade no ar, na gordura, no músculo e no osso, sendo independente do número atómico Z.",
      "A radiação dispersa por espalhamento Compton desaparece espontaneamente se as janelas da sala de exames estiverem abertas."
    ],
    "correctIndex": 0,
    "explanation": "A correlação científica correta demonstra que Fotões de menor comprimento de onda possuem maior energia fotónica e, portanto, maior poder de penetração nos tecidos densos do corpo humano. O domínio destes fundamentos permite ao enfermeiro assegurar a correta radioproteção e a interpretação dos riscos radiológicos.",
    "distractorAnalysis": [
      "Está incorreta: ignora a Lei de atenuação exponencial da radiação e a eficácia comprovada do chumbo como blindagem protetora.",
      "Está incorreta: nega a dependência estrita em Z³ do efeito fotoelétrico, que é a base física do contraste ósseo.",
      "Está incorreta: confunde radiação eletromagnética ionizante em linha reta com correntes de ar atmosférico."
    ],
    "nursingApplication": "Ao selecionar o 'feixe duro' (alta quilovoltagem kVp), o técnico e o enfermeiro sabem que o feixe se torna mais penetrante para radiografar regiões espessas como a bacia ou coluna lombo-sagrada."
  },
  {
    "id": 5060,
    "topicId": 5,
    "question": "Na física das radiações ionizantes e Raios X aplicada ao contexto hospitalar, em relação a 'ausência de reflexão ou refração convencional dos Raios X', qual é a fundamentação científica exata?",
    "options": [
      "Os Raios X são constituídos por partículas gasosas de oxigénio líquido que evaporam instantaneamente à temperatura da sala.",
      "devido ao seu comprimento de onda minúsculo da ordem do raio atómico, os Raios X não podem ser focados por lentes de vidro óptico convencionais. A colimação e direcionamento do feixe clínico são conseguidos através de diafragmas e lâminas absorventes de chumbo denso.",
      "Trata-se de uma radiação puramente acústica e ultrassónica inaudível gerada pelo atrito das rodas da cama hospitalar.",
      "A radiação ionizante anula todas as ligações químicas do organismo humano transformando o doente num holograma sem massa."
    ],
    "correctIndex": 1,
    "explanation": "Em física das radiações e imagiologia médica, ausência de reflexão ou refração convencional dos Raios X explica-se pelo facto de que devido ao seu comprimento de onda minúsculo da ordem do raio atómico, os Raios X não podem ser focados por lentes de vidro óptico convencionais. A colimação e direcionamento do feixe clínico são conseguidos através de diafragmas e lâminas absorventes de chumbo denso.",
    "distractorAnalysis": [
      "Está incorreta: confunde radiação eletromagnética fotónica com matéria gasosa comum.",
      "Está incorreta: confunde Raios X com ondas mecânicas sonoras ou ultrassons.",
      "Está incorreta: é uma fantasia pseudocientífica que viola as leis da conservação da massa e da matéria."
    ],
    "nursingApplication": "O enfermeiro verifica a correta colimação do campo luminoso de Raios X antes do disparo no leito, garantindo que apenas a área anatómica prescrita é exposta ao feixe útil."
  },
  {
    "id": 5061,
    "topicId": 5,
    "question": "Durante os cuidados de enfermagem a um doente submetido a procedimentos imagiológicos com radiações, como se aplica na prática o conceito de 'ausência de reflexão ou refração convencional dos Raios X'?",
    "options": [
      "Implica que o enfermeiro retire toda a blindagem de chumbo para que o seu corpo absorva a radiação em substituição do doente.",
      "Exige a imersão do doente numa banheira com lixívia concentrada durante 3 horas após o exame radiológico.",
      "Traduz-se na seguinte intervenção clínica fundamentada: O enfermeiro verifica a correta colimação do campo luminoso de Raios X antes do disparo no leito, garantindo que apenas a área anatómica prescrita é exposta ao feixe útil.",
      "Requer a proibição permanente de contacto humano com o doente radiografado durante 6 meses após a radiografia de tórax."
    ],
    "correctIndex": 2,
    "explanation": "A aplicação de enfermagem para ausência de reflexão ou refração convencional dos Raios X baseia-se no princípio: O enfermeiro verifica a correta colimação do campo luminoso de Raios X antes do disparo no leito, garantindo que apenas a área anatómica prescrita é exposta ao feixe útil. Esta intervenção garante a segurança radiológica do doente e do profissional.",
    "distractorAnalysis": [
      "Está incorreta: é perigosa e absurda: os profissionais devem proteger-se ativamente e não expor-se voluntariamente à radiação.",
      "Está incorreta: provocaria queimaduras químicas graves; não há qualquer radiação externa que justifique lixívia após Raios X.",
      "Está incorreta: confunde radiografia simples externa (onde não fica qualquer radioatividade no corpo) com contaminação radioativa interna."
    ],
    "nursingApplication": "O enfermeiro verifica a correta colimação do campo luminoso de Raios X antes do disparo no leito, garantindo que apenas a área anatómica prescrita é exposta ao feixe útil."
  },
  {
    "id": 5062,
    "topicId": 5,
    "question": "Um enfermeiro analisa os parâmetros biofísicos e os mecanismos de interação em 'ausência de reflexão ou refração convencional dos Raios X'. Qual das seguintes afirmações expressa a correlação científica correta?",
    "options": [
      "A atenuação da radiação é rigorosamente nula em qualquer material, atravessando 10 metros de chumbo maciço sem qualquer perda de intensidade.",
      "O efeito fotoelétrico ocorre com igual probabilidade no ar, na gordura, no músculo e no osso, sendo independente do número atómico Z.",
      "A radiação dispersa por espalhamento Compton desaparece espontaneamente se as janelas da sala de exames estiverem abertas.",
      "A análise biofísica correta confirma que A colimação e direcionamento do feixe clínico são conseguidos através de diafragmas e lâminas absorventes de chumbo denso."
    ],
    "correctIndex": 3,
    "explanation": "A correlação científica correta demonstra que A colimação e direcionamento do feixe clínico são conseguidos através de diafragmas e lâminas absorventes de chumbo denso. O domínio destes fundamentos permite ao enfermeiro assegurar a correta radioproteção e a interpretação dos riscos radiológicos.",
    "distractorAnalysis": [
      "Está incorreta: ignora a Lei de atenuação exponencial da radiação e a eficácia comprovada do chumbo como blindagem protetora.",
      "Está incorreta: nega a dependência estrita em Z³ do efeito fotoelétrico, que é a base física do contraste ósseo.",
      "Está incorreta: confunde radiação eletromagnética ionizante em linha reta com correntes de ar atmosférico."
    ],
    "nursingApplication": "O enfermeiro verifica a correta colimação do campo luminoso de Raios X antes do disparo no leito, garantindo que apenas a área anatómica prescrita é exposta ao feixe útil."
  },
  {
    "id": 5063,
    "topicId": 5,
    "question": "Na física das radiações ionizantes e Raios X aplicada ao contexto hospitalar, em relação a 'capacidade de ionização de átomos e moléculas biológicas', qual é a fundamentação científica exata?",
    "options": [
      "ao atravessarem a matéria, os fotões de Raios X arrancam eletrões orbitais dos átomos neutros, gerando pares de iões altamente reativos. Esta capacidade de quebrar ligações químicas é o mecanismo fundamental dos seus efeitos biológicos nocivos e do seu potencial mutagénico.",
      "Os Raios X são constituídos por partículas gasosas de oxigénio líquido que evaporam instantaneamente à temperatura da sala.",
      "Trata-se de uma radiação puramente acústica e ultrassónica inaudível gerada pelo atrito das rodas da cama hospitalar.",
      "A radiação ionizante anula todas as ligações químicas do organismo humano transformando o doente num holograma sem massa."
    ],
    "correctIndex": 0,
    "explanation": "Em física das radiações e imagiologia médica, capacidade de ionização de átomos e moléculas biológicas explica-se pelo facto de que ao atravessarem a matéria, os fotões de Raios X arrancam eletrões orbitais dos átomos neutros, gerando pares de iões altamente reativos. Esta capacidade de quebrar ligações químicas é o mecanismo fundamental dos seus efeitos biológicos nocivos e do seu potencial mutagénico.",
    "distractorAnalysis": [
      "Está incorreta: confunde radiação eletromagnética fotónica com matéria gasosa comum.",
      "Está incorreta: confunde Raios X com ondas mecânicas sonoras ou ultrassons.",
      "Está incorreta: é uma fantasia pseudocientífica que viola as leis da conservação da massa e da matéria."
    ],
    "nursingApplication": "O enfermeiro implementa medidas estritas de proteção radiológica para evitar exposições desnecessárias do doente e da equipa de saúde a este agente ionizante."
  },
  {
    "id": 5064,
    "topicId": 5,
    "question": "Durante os cuidados de enfermagem a um doente submetido a procedimentos imagiológicos com radiações, como se aplica na prática o conceito de 'capacidade de ionização de átomos e moléculas biológicas'?",
    "options": [
      "Implica que o enfermeiro retire toda a blindagem de chumbo para que o seu corpo absorva a radiação em substituição do doente.",
      "Traduz-se na seguinte intervenção clínica fundamentada: O enfermeiro implementa medidas estritas de proteção radiológica para evitar exposições desnecessárias do doente e da equipa de saúde a este agente ionizante.",
      "Exige a imersão do doente numa banheira com lixívia concentrada durante 3 horas após o exame radiológico.",
      "Requer a proibição permanente de contacto humano com o doente radiografado durante 6 meses após a radiografia de tórax."
    ],
    "correctIndex": 1,
    "explanation": "A aplicação de enfermagem para capacidade de ionização de átomos e moléculas biológicas baseia-se no princípio: O enfermeiro implementa medidas estritas de proteção radiológica para evitar exposições desnecessárias do doente e da equipa de saúde a este agente ionizante. Esta intervenção garante a segurança radiológica do doente e do profissional.",
    "distractorAnalysis": [
      "Está incorreta: é perigosa e absurda: os profissionais devem proteger-se ativamente e não expor-se voluntariamente à radiação.",
      "Está incorreta: provocaria queimaduras químicas graves; não há qualquer radiação externa que justifique lixívia após Raios X.",
      "Está incorreta: confunde radiografia simples externa (onde não fica qualquer radioatividade no corpo) com contaminação radioativa interna."
    ],
    "nursingApplication": "O enfermeiro implementa medidas estritas de proteção radiológica para evitar exposições desnecessárias do doente e da equipa de saúde a este agente ionizante."
  },
  {
    "id": 5065,
    "topicId": 5,
    "question": "Um enfermeiro analisa os parâmetros biofísicos e os mecanismos de interação em 'capacidade de ionização de átomos e moléculas biológicas'. Qual das seguintes afirmações expressa a correlação científica correta?",
    "options": [
      "A atenuação da radiação é rigorosamente nula em qualquer material, atravessando 10 metros de chumbo maciço sem qualquer perda de intensidade.",
      "O efeito fotoelétrico ocorre com igual probabilidade no ar, na gordura, no músculo e no osso, sendo independente do número atómico Z.",
      "A análise biofísica correta confirma que Esta capacidade de quebrar ligações químicas é o mecanismo fundamental dos seus efeitos biológicos nocivos e do seu potencial mutagénico.",
      "A radiação dispersa por espalhamento Compton desaparece espontaneamente se as janelas da sala de exames estiverem abertas."
    ],
    "correctIndex": 2,
    "explanation": "A correlação científica correta demonstra que Esta capacidade de quebrar ligações químicas é o mecanismo fundamental dos seus efeitos biológicos nocivos e do seu potencial mutagénico. O domínio destes fundamentos permite ao enfermeiro assegurar a correta radioproteção e a interpretação dos riscos radiológicos.",
    "distractorAnalysis": [
      "Está incorreta: ignora a Lei de atenuação exponencial da radiação e a eficácia comprovada do chumbo como blindagem protetora.",
      "Está incorreta: nega a dependência estrita em Z³ do efeito fotoelétrico, que é a base física do contraste ósseo.",
      "Está incorreta: confunde radiação eletromagnética ionizante em linha reta com correntes de ar atmosférico."
    ],
    "nursingApplication": "O enfermeiro implementa medidas estritas de proteção radiológica para evitar exposições desnecessárias do doente e da equipa de saúde a este agente ionizante."
  },
  {
    "id": 5066,
    "topicId": 5,
    "question": "Na física das radiações ionizantes e Raios X aplicada ao contexto hospitalar, em relação a 'emissão termiónica no filamento catódico', qual é a fundamentação científica exata?",
    "options": [
      "Os Raios X são constituídos por partículas gasosas de oxigénio líquido que evaporam instantaneamente à temperatura da sala.",
      "Trata-se de uma radiação puramente acústica e ultrassónica inaudível gerada pelo atrito das rodas da cama hospitalar.",
      "A radiação ionizante anula todas as ligações químicas do organismo humano transformando o doente num holograma sem massa.",
      "uma corrente elétrica de baixa voltagem aquece um filamento de tungsténio no cátodo (polo negativo) a mais de 2000 °C, 'fervendo' e libertando uma nuvem de eletrões livres. A intensidade da corrente do filamento (miliamperagem, mA) determina o número total de eletrões emitidos por segundo e, consequentemente, a quantidade de fotões de Raios X gerados."
    ],
    "correctIndex": 3,
    "explanation": "Em física das radiações e imagiologia médica, emissão termiónica no filamento catódico explica-se pelo facto de que uma corrente elétrica de baixa voltagem aquece um filamento de tungsténio no cátodo (polo negativo) a mais de 2000 °C, 'fervendo' e libertando uma nuvem de eletrões livres. A intensidade da corrente do filamento (miliamperagem, mA) determina o número total de eletrões emitidos por segundo e, consequentemente, a quantidade de fotões de Raios X gerados.",
    "distractorAnalysis": [
      "Está incorreta: confunde radiação eletromagnética fotónica com matéria gasosa comum.",
      "Está incorreta: confunde Raios X com ondas mecânicas sonoras ou ultrassons.",
      "Está incorreta: é uma fantasia pseudocientífica que viola as leis da conservação da massa e da matéria."
    ],
    "nursingApplication": "O enfermeiro compreende que o parâmetro 'mAs' (miliampere-segundo) controla a dose total de radiação fotográfica fornecida durante o tempo de exposição."
  },
  {
    "id": 5067,
    "topicId": 5,
    "question": "Durante os cuidados de enfermagem a um doente submetido a procedimentos imagiológicos com radiações, como se aplica na prática o conceito de 'emissão termiónica no filamento catódico'?",
    "options": [
      "Traduz-se na seguinte intervenção clínica fundamentada: O enfermeiro compreende que o parâmetro 'mAs' (miliampere-segundo) controla a dose total de radiação fotográfica fornecida durante o tempo de exposição.",
      "Implica que o enfermeiro retire toda a blindagem de chumbo para que o seu corpo absorva a radiação em substituição do doente.",
      "Exige a imersão do doente numa banheira com lixívia concentrada durante 3 horas após o exame radiológico.",
      "Requer a proibição permanente de contacto humano com o doente radiografado durante 6 meses após a radiografia de tórax."
    ],
    "correctIndex": 0,
    "explanation": "A aplicação de enfermagem para emissão termiónica no filamento catódico baseia-se no princípio: O enfermeiro compreende que o parâmetro 'mAs' (miliampere-segundo) controla a dose total de radiação fotográfica fornecida durante o tempo de exposição. Esta intervenção garante a segurança radiológica do doente e do profissional.",
    "distractorAnalysis": [
      "Está incorreta: é perigosa e absurda: os profissionais devem proteger-se ativamente e não expor-se voluntariamente à radiação.",
      "Está incorreta: provocaria queimaduras químicas graves; não há qualquer radiação externa que justifique lixívia após Raios X.",
      "Está incorreta: confunde radiografia simples externa (onde não fica qualquer radioatividade no corpo) com contaminação radioativa interna."
    ],
    "nursingApplication": "O enfermeiro compreende que o parâmetro 'mAs' (miliampere-segundo) controla a dose total de radiação fotográfica fornecida durante o tempo de exposição."
  },
  {
    "id": 5068,
    "topicId": 5,
    "question": "Um enfermeiro analisa os parâmetros biofísicos e os mecanismos de interação em 'emissão termiónica no filamento catódico'. Qual das seguintes afirmações expressa a correlação científica correta?",
    "options": [
      "A atenuação da radiação é rigorosamente nula em qualquer material, atravessando 10 metros de chumbo maciço sem qualquer perda de intensidade.",
      "A análise biofísica correta confirma que A intensidade da corrente do filamento (miliamperagem, mA) determina o número total de eletrões emitidos por segundo e, consequentemente, a quantidade de fotões de Raios X gerados.",
      "O efeito fotoelétrico ocorre com igual probabilidade no ar, na gordura, no músculo e no osso, sendo independente do número atómico Z.",
      "A radiação dispersa por espalhamento Compton desaparece espontaneamente se as janelas da sala de exames estiverem abertas."
    ],
    "correctIndex": 1,
    "explanation": "A correlação científica correta demonstra que A intensidade da corrente do filamento (miliamperagem, mA) determina o número total de eletrões emitidos por segundo e, consequentemente, a quantidade de fotões de Raios X gerados. O domínio destes fundamentos permite ao enfermeiro assegurar a correta radioproteção e a interpretação dos riscos radiológicos.",
    "distractorAnalysis": [
      "Está incorreta: ignora a Lei de atenuação exponencial da radiação e a eficácia comprovada do chumbo como blindagem protetora.",
      "Está incorreta: nega a dependência estrita em Z³ do efeito fotoelétrico, que é a base física do contraste ósseo.",
      "Está incorreta: confunde radiação eletromagnética ionizante em linha reta com correntes de ar atmosférico."
    ],
    "nursingApplication": "O enfermeiro compreende que o parâmetro 'mAs' (miliampere-segundo) controla a dose total de radiação fotográfica fornecida durante o tempo de exposição."
  },
  {
    "id": 5069,
    "topicId": 5,
    "question": "Na física das radiações ionizantes e Raios X aplicada ao contexto hospitalar, em relação a 'alta diferença de potencial elétrico (quilovoltagem, kVp)', qual é a fundamentação científica exata?",
    "options": [
      "Os Raios X são constituídos por partículas gasosas de oxigénio líquido que evaporam instantaneamente à temperatura da sala.",
      "Trata-se de uma radiação puramente acústica e ultrassónica inaudível gerada pelo atrito das rodas da cama hospitalar.",
      "uma alta tensão entre 40.000 e 150.000 Volts (40 a 150 kVp) é aplicada entre o cátodo e o ânodo, acelerando violentamente os eletrões em direção ao alvo metálico. A quilovoltagem de pico (kVp) determina a energia cinética máxima que os eletrões atingem e a 'qualidade' ou poder de penetração dos fotões de Raios X produzidos.",
      "A radiação ionizante anula todas as ligações químicas do organismo humano transformando o doente num holograma sem massa."
    ],
    "correctIndex": 2,
    "explanation": "Em física das radiações e imagiologia médica, alta diferença de potencial elétrico (quilovoltagem, kVp) explica-se pelo facto de que uma alta tensão entre 40.000 e 150.000 Volts (40 a 150 kVp) é aplicada entre o cátodo e o ânodo, acelerando violentamente os eletrões em direção ao alvo metálico. A quilovoltagem de pico (kVp) determina a energia cinética máxima que os eletrões atingem e a 'qualidade' ou poder de penetração dos fotões de Raios X produzidos.",
    "distractorAnalysis": [
      "Está incorreta: confunde radiação eletromagnética fotónica com matéria gasosa comum.",
      "Está incorreta: confunde Raios X com ondas mecânicas sonoras ou ultrassons.",
      "Está incorreta: é uma fantasia pseudocientífica que viola as leis da conservação da massa e da matéria."
    ],
    "nursingApplication": "Para um tórax hiperinsuflado de doente com DPOC ou obesidade mórbida, são selecionados kVp mais elevados para garantir que os fotões penetrem o gradil costal e atinjam o detetor digital."
  },
  {
    "id": 5070,
    "topicId": 5,
    "question": "Durante os cuidados de enfermagem a um doente submetido a procedimentos imagiológicos com radiações, como se aplica na prática o conceito de 'alta diferença de potencial elétrico (quilovoltagem, kVp)'?",
    "options": [
      "Implica que o enfermeiro retire toda a blindagem de chumbo para que o seu corpo absorva a radiação em substituição do doente.",
      "Exige a imersão do doente numa banheira com lixívia concentrada durante 3 horas após o exame radiológico.",
      "Requer a proibição permanente de contacto humano com o doente radiografado durante 6 meses após a radiografia de tórax.",
      "Traduz-se na seguinte intervenção clínica fundamentada: Para um tórax hiperinsuflado de doente com DPOC ou obesidade mórbida, são selecionados kVp mais elevados para garantir que os fotões penetrem o gradil costal e atinjam o detetor digital."
    ],
    "correctIndex": 3,
    "explanation": "A aplicação de enfermagem para alta diferença de potencial elétrico (quilovoltagem, kVp) baseia-se no princípio: Para um tórax hiperinsuflado de doente com DPOC ou obesidade mórbida, são selecionados kVp mais elevados para garantir que os fotões penetrem o gradil costal e atinjam o detetor digital. Esta intervenção garante a segurança radiológica do doente e do profissional.",
    "distractorAnalysis": [
      "Está incorreta: é perigosa e absurda: os profissionais devem proteger-se ativamente e não expor-se voluntariamente à radiação.",
      "Está incorreta: provocaria queimaduras químicas graves; não há qualquer radiação externa que justifique lixívia após Raios X.",
      "Está incorreta: confunde radiografia simples externa (onde não fica qualquer radioatividade no corpo) com contaminação radioativa interna."
    ],
    "nursingApplication": "Para um tórax hiperinsuflado de doente com DPOC ou obesidade mórbida, são selecionados kVp mais elevados para garantir que os fotões penetrem o gradil costal e atinjam o detetor digital."
  },
  {
    "id": 5071,
    "topicId": 5,
    "question": "Um enfermeiro analisa os parâmetros biofísicos e os mecanismos de interação em 'alta diferença de potencial elétrico (quilovoltagem, kVp)'. Qual das seguintes afirmações expressa a correlação científica correta?",
    "options": [
      "A análise biofísica correta confirma que A quilovoltagem de pico (kVp) determina a energia cinética máxima que os eletrões atingem e a 'qualidade' ou poder de penetração dos fotões de Raios X produzidos.",
      "A atenuação da radiação é rigorosamente nula em qualquer material, atravessando 10 metros de chumbo maciço sem qualquer perda de intensidade.",
      "O efeito fotoelétrico ocorre com igual probabilidade no ar, na gordura, no músculo e no osso, sendo independente do número atómico Z.",
      "A radiação dispersa por espalhamento Compton desaparece espontaneamente se as janelas da sala de exames estiverem abertas."
    ],
    "correctIndex": 0,
    "explanation": "A correlação científica correta demonstra que A quilovoltagem de pico (kVp) determina a energia cinética máxima que os eletrões atingem e a 'qualidade' ou poder de penetração dos fotões de Raios X produzidos. O domínio destes fundamentos permite ao enfermeiro assegurar a correta radioproteção e a interpretação dos riscos radiológicos.",
    "distractorAnalysis": [
      "Está incorreta: ignora a Lei de atenuação exponencial da radiação e a eficácia comprovada do chumbo como blindagem protetora.",
      "Está incorreta: nega a dependência estrita em Z³ do efeito fotoelétrico, que é a base física do contraste ósseo.",
      "Está incorreta: confunde radiação eletromagnética ionizante em linha reta com correntes de ar atmosférico."
    ],
    "nursingApplication": "Para um tórax hiperinsuflado de doente com DPOC ou obesidade mórbida, são selecionados kVp mais elevados para garantir que os fotões penetrem o gradil costal e atinjam o detetor digital."
  },
  {
    "id": 5072,
    "topicId": 5,
    "question": "Na física das radiações ionizantes e Raios X aplicada ao contexto hospitalar, em relação a 'baixo rendimento energético do tubo de Raios X (~1% vs 99%)', qual é a fundamentação científica exata?",
    "options": [
      "Os Raios X são constituídos por partículas gasosas de oxigénio líquido que evaporam instantaneamente à temperatura da sala.",
      "mais de 99% da energia cinética dos eletrões incidentes no alvo é convertida em energia térmica (calor extremo), e menos de 1% é convertida em Raios X úteis. Por esta razão, os tubos clínicos utilizam ânodos rotativos maciços de tungsténio com ligas de rénio arrefecidos por banhos de óleo dielétrico em circulação contínua.",
      "Trata-se de uma radiação puramente acústica e ultrassónica inaudível gerada pelo atrito das rodas da cama hospitalar.",
      "A radiação ionizante anula todas as ligações químicas do organismo humano transformando o doente num holograma sem massa."
    ],
    "correctIndex": 1,
    "explanation": "Em física das radiações e imagiologia médica, baixo rendimento energético do tubo de Raios X (~1% vs 99%) explica-se pelo facto de que mais de 99% da energia cinética dos eletrões incidentes no alvo é convertida em energia térmica (calor extremo), e menos de 1% é convertida em Raios X úteis. Por esta razão, os tubos clínicos utilizam ânodos rotativos maciços de tungsténio com ligas de rénio arrefecidos por banhos de óleo dielétrico em circulação contínua.",
    "distractorAnalysis": [
      "Está incorreta: confunde radiação eletromagnética fotónica com matéria gasosa comum.",
      "Está incorreta: confunde Raios X com ondas mecânicas sonoras ou ultrassons.",
      "Está incorreta: é uma fantasia pseudocientífica que viola as leis da conservação da massa e da matéria."
    ],
    "nursingApplication": "O enfermeiro respeita os intervalos de arrefecimento do equipamento móvel de Raios X no internamento para evitar o sobreaquecimento e avaria do tubo de raios anódico."
  },
  {
    "id": 5073,
    "topicId": 5,
    "question": "Durante os cuidados de enfermagem a um doente submetido a procedimentos imagiológicos com radiações, como se aplica na prática o conceito de 'baixo rendimento energético do tubo de Raios X (~1% vs 99%)'?",
    "options": [
      "Implica que o enfermeiro retire toda a blindagem de chumbo para que o seu corpo absorva a radiação em substituição do doente.",
      "Exige a imersão do doente numa banheira com lixívia concentrada durante 3 horas após o exame radiológico.",
      "Traduz-se na seguinte intervenção clínica fundamentada: O enfermeiro respeita os intervalos de arrefecimento do equipamento móvel de Raios X no internamento para evitar o sobreaquecimento e avaria do tubo de raios anódico.",
      "Requer a proibição permanente de contacto humano com o doente radiografado durante 6 meses após a radiografia de tórax."
    ],
    "correctIndex": 2,
    "explanation": "A aplicação de enfermagem para baixo rendimento energético do tubo de Raios X (~1% vs 99%) baseia-se no princípio: O enfermeiro respeita os intervalos de arrefecimento do equipamento móvel de Raios X no internamento para evitar o sobreaquecimento e avaria do tubo de raios anódico. Esta intervenção garante a segurança radiológica do doente e do profissional.",
    "distractorAnalysis": [
      "Está incorreta: é perigosa e absurda: os profissionais devem proteger-se ativamente e não expor-se voluntariamente à radiação.",
      "Está incorreta: provocaria queimaduras químicas graves; não há qualquer radiação externa que justifique lixívia após Raios X.",
      "Está incorreta: confunde radiografia simples externa (onde não fica qualquer radioatividade no corpo) com contaminação radioativa interna."
    ],
    "nursingApplication": "O enfermeiro respeita os intervalos de arrefecimento do equipamento móvel de Raios X no internamento para evitar o sobreaquecimento e avaria do tubo de raios anódico."
  },
  {
    "id": 5074,
    "topicId": 5,
    "question": "Um enfermeiro analisa os parâmetros biofísicos e os mecanismos de interação em 'baixo rendimento energético do tubo de Raios X (~1% vs 99%)'. Qual das seguintes afirmações expressa a correlação científica correta?",
    "options": [
      "A atenuação da radiação é rigorosamente nula em qualquer material, atravessando 10 metros de chumbo maciço sem qualquer perda de intensidade.",
      "O efeito fotoelétrico ocorre com igual probabilidade no ar, na gordura, no músculo e no osso, sendo independente do número atómico Z.",
      "A radiação dispersa por espalhamento Compton desaparece espontaneamente se as janelas da sala de exames estiverem abertas.",
      "A análise biofísica correta confirma que Por esta razão, os tubos clínicos utilizam ânodos rotativos maciços de tungsténio com ligas de rénio arrefecidos por banhos de óleo dielétrico em circulação contínua."
    ],
    "correctIndex": 3,
    "explanation": "A correlação científica correta demonstra que Por esta razão, os tubos clínicos utilizam ânodos rotativos maciços de tungsténio com ligas de rénio arrefecidos por banhos de óleo dielétrico em circulação contínua. O domínio destes fundamentos permite ao enfermeiro assegurar a correta radioproteção e a interpretação dos riscos radiológicos.",
    "distractorAnalysis": [
      "Está incorreta: ignora a Lei de atenuação exponencial da radiação e a eficácia comprovada do chumbo como blindagem protetora.",
      "Está incorreta: nega a dependência estrita em Z³ do efeito fotoelétrico, que é a base física do contraste ósseo.",
      "Está incorreta: confunde radiação eletromagnética ionizante em linha reta com correntes de ar atmosférico."
    ],
    "nursingApplication": "O enfermeiro respeita os intervalos de arrefecimento do equipamento móvel de Raios X no internamento para evitar o sobreaquecimento e avaria do tubo de raios anódico."
  },
  {
    "id": 5075,
    "topicId": 5,
    "question": "Na física das radiações ionizantes e Raios X aplicada ao contexto hospitalar, em relação a 'vácuo rigoroso no interior da ampola de vidro ou metal', qual é a fundamentação científica exata?",
    "options": [
      "o invólucro do tubo mantém um vácuo ultrassilencioso para que os eletrões acelerados percorram o trajeto do cátodo ao ânodo sem colidirem com moléculas de ar. Se ocorresse perda de vácuo, os eletrões colidiriam com o oxigénio e azoto, desacelerando antes do alvo e provocando arcos elétricos que destruiriam o filamento.",
      "Os Raios X são constituídos por partículas gasosas de oxigénio líquido que evaporam instantaneamente à temperatura da sala.",
      "Trata-se de uma radiação puramente acústica e ultrassónica inaudível gerada pelo atrito das rodas da cama hospitalar.",
      "A radiação ionizante anula todas as ligações químicas do organismo humano transformando o doente num holograma sem massa."
    ],
    "correctIndex": 0,
    "explanation": "Em física das radiações e imagiologia médica, vácuo rigoroso no interior da ampola de vidro ou metal explica-se pelo facto de que o invólucro do tubo mantém um vácuo ultrassilencioso para que os eletrões acelerados percorram o trajeto do cátodo ao ânodo sem colidirem com moléculas de ar. Se ocorresse perda de vácuo, os eletrões colidiriam com o oxigénio e azoto, desacelerando antes do alvo e provocando arcos elétricos que destruiriam o filamento.",
    "distractorAnalysis": [
      "Está incorreta: confunde radiação eletromagnética fotónica com matéria gasosa comum.",
      "Está incorreta: confunde Raios X com ondas mecânicas sonoras ou ultrassons.",
      "Está incorreta: é uma fantasia pseudocientífica que viola as leis da conservação da massa e da matéria."
    ],
    "nursingApplication": "O manuseamento do equipamento radiológico requer cuidados no transporte para evitar choques mecânicos violentos que possam fissurar a ampola de vácuo."
  },
  {
    "id": 5076,
    "topicId": 5,
    "question": "Durante os cuidados de enfermagem a um doente submetido a procedimentos imagiológicos com radiações, como se aplica na prática o conceito de 'vácuo rigoroso no interior da ampola de vidro ou metal'?",
    "options": [
      "Implica que o enfermeiro retire toda a blindagem de chumbo para que o seu corpo absorva a radiação em substituição do doente.",
      "Traduz-se na seguinte intervenção clínica fundamentada: O manuseamento do equipamento radiológico requer cuidados no transporte para evitar choques mecânicos violentos que possam fissurar a ampola de vácuo.",
      "Exige a imersão do doente numa banheira com lixívia concentrada durante 3 horas após o exame radiológico.",
      "Requer a proibição permanente de contacto humano com o doente radiografado durante 6 meses após a radiografia de tórax."
    ],
    "correctIndex": 1,
    "explanation": "A aplicação de enfermagem para vácuo rigoroso no interior da ampola de vidro ou metal baseia-se no princípio: O manuseamento do equipamento radiológico requer cuidados no transporte para evitar choques mecânicos violentos que possam fissurar a ampola de vácuo. Esta intervenção garante a segurança radiológica do doente e do profissional.",
    "distractorAnalysis": [
      "Está incorreta: é perigosa e absurda: os profissionais devem proteger-se ativamente e não expor-se voluntariamente à radiação.",
      "Está incorreta: provocaria queimaduras químicas graves; não há qualquer radiação externa que justifique lixívia após Raios X.",
      "Está incorreta: confunde radiografia simples externa (onde não fica qualquer radioatividade no corpo) com contaminação radioativa interna."
    ],
    "nursingApplication": "O manuseamento do equipamento radiológico requer cuidados no transporte para evitar choques mecânicos violentos que possam fissurar a ampola de vácuo."
  },
  {
    "id": 5077,
    "topicId": 5,
    "question": "Um enfermeiro analisa os parâmetros biofísicos e os mecanismos de interação em 'vácuo rigoroso no interior da ampola de vidro ou metal'. Qual das seguintes afirmações expressa a correlação científica correta?",
    "options": [
      "A atenuação da radiação é rigorosamente nula em qualquer material, atravessando 10 metros de chumbo maciço sem qualquer perda de intensidade.",
      "O efeito fotoelétrico ocorre com igual probabilidade no ar, na gordura, no músculo e no osso, sendo independente do número atómico Z.",
      "A análise biofísica correta confirma que Se ocorresse perda de vácuo, os eletrões colidiriam com o oxigénio e azoto, desacelerando antes do alvo e provocando arcos elétricos que destruiriam o filamento.",
      "A radiação dispersa por espalhamento Compton desaparece espontaneamente se as janelas da sala de exames estiverem abertas."
    ],
    "correctIndex": 2,
    "explanation": "A correlação científica correta demonstra que Se ocorresse perda de vácuo, os eletrões colidiriam com o oxigénio e azoto, desacelerando antes do alvo e provocando arcos elétricos que destruiriam o filamento. O domínio destes fundamentos permite ao enfermeiro assegurar a correta radioproteção e a interpretação dos riscos radiológicos.",
    "distractorAnalysis": [
      "Está incorreta: ignora a Lei de atenuação exponencial da radiação e a eficácia comprovada do chumbo como blindagem protetora.",
      "Está incorreta: nega a dependência estrita em Z³ do efeito fotoelétrico, que é a base física do contraste ósseo.",
      "Está incorreta: confunde radiação eletromagnética ionizante em linha reta com correntes de ar atmosférico."
    ],
    "nursingApplication": "O manuseamento do equipamento radiológico requer cuidados no transporte para evitar choques mecânicos violentos que possam fissurar a ampola de vácuo."
  },
  {
    "id": 5078,
    "topicId": 5,
    "question": "Na física das radiações ionizantes e Raios X aplicada ao contexto hospitalar, em relação a 'filtração do feixe (filtração inerente e adicional de alumínio)', qual é a fundamentação científica exata?",
    "options": [
      "Os Raios X são constituídos por partículas gasosas de oxigénio líquido que evaporam instantaneamente à temperatura da sala.",
      "Trata-se de uma radiação puramente acústica e ultrassónica inaudível gerada pelo atrito das rodas da cama hospitalar.",
      "A radiação ionizante anula todas as ligações químicas do organismo humano transformando o doente num holograma sem massa.",
      "o feixe de Raios X emergente atravessa filtros de folhas de alumínio (mínimo legal de 2,5 mm de Al equivalente) colocados na saída do tubo. A filtração remove os fotões de 'baixa energia' ('radiação mole') que seriam totalmente absorvidos pela pele do doente sem contribuir para a imagem radiológica útil."
    ],
    "correctIndex": 3,
    "explanation": "Em física das radiações e imagiologia médica, filtração do feixe (filtração inerente e adicional de alumínio) explica-se pelo facto de que o feixe de Raios X emergente atravessa filtros de folhas de alumínio (mínimo legal de 2,5 mm de Al equivalente) colocados na saída do tubo. A filtração remove os fotões de 'baixa energia' ('radiação mole') que seriam totalmente absorvidos pela pele do doente sem contribuir para a imagem radiológica útil.",
    "distractorAnalysis": [
      "Está incorreta: confunde radiação eletromagnética fotónica com matéria gasosa comum.",
      "Está incorreta: confunde Raios X com ondas mecânicas sonoras ou ultrassons.",
      "Está incorreta: é uma fantasia pseudocientífica que viola as leis da conservação da massa e da matéria."
    ],
    "nursingApplication": "O enfermeiro reconhece que a filtração adequada é um requisito de segurança do doente, poupando a pele a doses superficiais estéreis de radiação ionizante."
  },
  {
    "id": 5079,
    "topicId": 5,
    "question": "Durante os cuidados de enfermagem a um doente submetido a procedimentos imagiológicos com radiações, como se aplica na prática o conceito de 'filtração do feixe (filtração inerente e adicional de alumínio)'?",
    "options": [
      "Traduz-se na seguinte intervenção clínica fundamentada: O enfermeiro reconhece que a filtração adequada é um requisito de segurança do doente, poupando a pele a doses superficiais estéreis de radiação ionizante.",
      "Implica que o enfermeiro retire toda a blindagem de chumbo para que o seu corpo absorva a radiação em substituição do doente.",
      "Exige a imersão do doente numa banheira com lixívia concentrada durante 3 horas após o exame radiológico.",
      "Requer a proibição permanente de contacto humano com o doente radiografado durante 6 meses após a radiografia de tórax."
    ],
    "correctIndex": 0,
    "explanation": "A aplicação de enfermagem para filtração do feixe (filtração inerente e adicional de alumínio) baseia-se no princípio: O enfermeiro reconhece que a filtração adequada é um requisito de segurança do doente, poupando a pele a doses superficiais estéreis de radiação ionizante. Esta intervenção garante a segurança radiológica do doente e do profissional.",
    "distractorAnalysis": [
      "Está incorreta: é perigosa e absurda: os profissionais devem proteger-se ativamente e não expor-se voluntariamente à radiação.",
      "Está incorreta: provocaria queimaduras químicas graves; não há qualquer radiação externa que justifique lixívia após Raios X.",
      "Está incorreta: confunde radiografia simples externa (onde não fica qualquer radioatividade no corpo) com contaminação radioativa interna."
    ],
    "nursingApplication": "O enfermeiro reconhece que a filtração adequada é um requisito de segurança do doente, poupando a pele a doses superficiais estéreis de radiação ionizante."
  },
  {
    "id": 5080,
    "topicId": 5,
    "question": "Um enfermeiro analisa os parâmetros biofísicos e os mecanismos de interação em 'filtração do feixe (filtração inerente e adicional de alumínio)'. Qual das seguintes afirmações expressa a correlação científica correta?",
    "options": [
      "A atenuação da radiação é rigorosamente nula em qualquer material, atravessando 10 metros de chumbo maciço sem qualquer perda de intensidade.",
      "A análise biofísica correta confirma que A filtração remove os fotões de 'baixa energia' ('radiação mole') que seriam totalmente absorvidos pela pele do doente sem contribuir para a imagem radiológica útil.",
      "O efeito fotoelétrico ocorre com igual probabilidade no ar, na gordura, no músculo e no osso, sendo independente do número atómico Z.",
      "A radiação dispersa por espalhamento Compton desaparece espontaneamente se as janelas da sala de exames estiverem abertas."
    ],
    "correctIndex": 1,
    "explanation": "A correlação científica correta demonstra que A filtração remove os fotões de 'baixa energia' ('radiação mole') que seriam totalmente absorvidos pela pele do doente sem contribuir para a imagem radiológica útil. O domínio destes fundamentos permite ao enfermeiro assegurar a correta radioproteção e a interpretação dos riscos radiológicos.",
    "distractorAnalysis": [
      "Está incorreta: ignora a Lei de atenuação exponencial da radiação e a eficácia comprovada do chumbo como blindagem protetora.",
      "Está incorreta: nega a dependência estrita em Z³ do efeito fotoelétrico, que é a base física do contraste ósseo.",
      "Está incorreta: confunde radiação eletromagnética ionizante em linha reta com correntes de ar atmosférico."
    ],
    "nursingApplication": "O enfermeiro reconhece que a filtração adequada é um requisito de segurança do doente, poupando a pele a doses superficiais estéreis de radiação ionizante."
  },
  {
    "id": 5081,
    "topicId": 5,
    "question": "Na física das radiações ionizantes e Raios X aplicada ao contexto hospitalar, em relação a 'mecanismo da Radiação de Travagem (Bremsstrahlung)', qual é a fundamentação científica exata?",
    "options": [
      "Os Raios X são constituídos por partículas gasosas de oxigénio líquido que evaporam instantaneamente à temperatura da sala.",
      "Trata-se de uma radiação puramente acústica e ultrassónica inaudível gerada pelo atrito das rodas da cama hospitalar.",
      "um eletrão incidente de alta energia aproxima-se do núcleo pesado de tungsténio do ânodo; a atração coulombiana do núcleo desacelera e desvia a trajetória do eletrão, emitindo a energia perdida como um fotão de Raios X. Produz um espetro contínuo de energias que vai desde valores mínimos até à energia cinética máxima do eletrão acelerado ($E_{max} = e \\cdot kVp$).",
      "A radiação ionizante anula todas as ligações químicas do organismo humano transformando o doente num holograma sem massa."
    ],
    "correctIndex": 2,
    "explanation": "Em física das radiações e imagiologia médica, mecanismo da Radiação de Travagem (Bremsstrahlung) explica-se pelo facto de que um eletrão incidente de alta energia aproxima-se do núcleo pesado de tungsténio do ânodo; a atração coulombiana do núcleo desacelera e desvia a trajetória do eletrão, emitindo a energia perdida como um fotão de Raios X. Produz um espetro contínuo de energias que vai desde valores mínimos até à energia cinética máxima do eletrão acelerado ($E_{max} = e \\cdot kVp$).",
    "distractorAnalysis": [
      "Está incorreta: confunde radiação eletromagnética fotónica com matéria gasosa comum.",
      "Está incorreta: confunde Raios X com ondas mecânicas sonoras ou ultrassons.",
      "Está incorreta: é uma fantasia pseudocientífica que viola as leis da conservação da massa e da matéria."
    ],
    "nursingApplication": "Constitui cerca de 80 a 90% de todos os fotões de Raios X emitidos num exame radiológico diagnóstico típico."
  },
  {
    "id": 5082,
    "topicId": 5,
    "question": "Durante os cuidados de enfermagem a um doente submetido a procedimentos imagiológicos com radiações, como se aplica na prática o conceito de 'mecanismo da Radiação de Travagem (Bremsstrahlung)'?",
    "options": [
      "Implica que o enfermeiro retire toda a blindagem de chumbo para que o seu corpo absorva a radiação em substituição do doente.",
      "Exige a imersão do doente numa banheira com lixívia concentrada durante 3 horas após o exame radiológico.",
      "Requer a proibição permanente de contacto humano com o doente radiografado durante 6 meses após a radiografia de tórax.",
      "Traduz-se na seguinte intervenção clínica fundamentada: Constitui cerca de 80 a 90% de todos os fotões de Raios X emitidos num exame radiológico diagnóstico típico."
    ],
    "correctIndex": 3,
    "explanation": "A aplicação de enfermagem para mecanismo da Radiação de Travagem (Bremsstrahlung) baseia-se no princípio: Constitui cerca de 80 a 90% de todos os fotões de Raios X emitidos num exame radiológico diagnóstico típico. Esta intervenção garante a segurança radiológica do doente e do profissional.",
    "distractorAnalysis": [
      "Está incorreta: é perigosa e absurda: os profissionais devem proteger-se ativamente e não expor-se voluntariamente à radiação.",
      "Está incorreta: provocaria queimaduras químicas graves; não há qualquer radiação externa que justifique lixívia após Raios X.",
      "Está incorreta: confunde radiografia simples externa (onde não fica qualquer radioatividade no corpo) com contaminação radioativa interna."
    ],
    "nursingApplication": "Constitui cerca de 80 a 90% de todos os fotões de Raios X emitidos num exame radiológico diagnóstico típico."
  },
  {
    "id": 5083,
    "topicId": 5,
    "question": "Um enfermeiro analisa os parâmetros biofísicos e os mecanismos de interação em 'mecanismo da Radiação de Travagem (Bremsstrahlung)'. Qual das seguintes afirmações expressa a correlação científica correta?",
    "options": [
      "A análise biofísica correta confirma que Produz um espetro contínuo de energias que vai desde valores mínimos até à energia cinética máxima do eletrão acelerado ($E_{max} = e \\cdot kVp$).",
      "A atenuação da radiação é rigorosamente nula em qualquer material, atravessando 10 metros de chumbo maciço sem qualquer perda de intensidade.",
      "O efeito fotoelétrico ocorre com igual probabilidade no ar, na gordura, no músculo e no osso, sendo independente do número atómico Z.",
      "A radiação dispersa por espalhamento Compton desaparece espontaneamente se as janelas da sala de exames estiverem abertas."
    ],
    "correctIndex": 0,
    "explanation": "A correlação científica correta demonstra que Produz um espetro contínuo de energias que vai desde valores mínimos até à energia cinética máxima do eletrão acelerado ($E_{max} = e \\cdot kVp$). O domínio destes fundamentos permite ao enfermeiro assegurar a correta radioproteção e a interpretação dos riscos radiológicos.",
    "distractorAnalysis": [
      "Está incorreta: ignora a Lei de atenuação exponencial da radiação e a eficácia comprovada do chumbo como blindagem protetora.",
      "Está incorreta: nega a dependência estrita em Z³ do efeito fotoelétrico, que é a base física do contraste ósseo.",
      "Está incorreta: confunde radiação eletromagnética ionizante em linha reta com correntes de ar atmosférico."
    ],
    "nursingApplication": "Constitui cerca de 80 a 90% de todos os fotões de Raios X emitidos num exame radiológico diagnóstico típico."
  },
  {
    "id": 5084,
    "topicId": 5,
    "question": "Na física das radiações ionizantes e Raios X aplicada ao contexto hospitalar, em relação a 'mecanismo dos Raios X Característicos', qual é a fundamentação científica exata?",
    "options": [
      "Os Raios X são constituídos por partículas gasosas de oxigénio líquido que evaporam instantaneamente à temperatura da sala.",
      "um eletrão incidente colide e ejeta um eletrão orbital de uma camada interna (camada K) do átomo de tungsténio; a vacância é preenchida por um eletrão de uma camada superior (L ou M), emitindo um fotão com energia exatamente igual à diferença de níveis quânticos. Produz um espetro de linhas discretas (picos monocromáticos característicos do tungsténio, como a linha $K_\\alpha \\approx 59$ keV e $K_\\beta \\approx 67$ keV).",
      "Trata-se de uma radiação puramente acústica e ultrassónica inaudível gerada pelo atrito das rodas da cama hospitalar.",
      "A radiação ionizante anula todas as ligações químicas do organismo humano transformando o doente num holograma sem massa."
    ],
    "correctIndex": 1,
    "explanation": "Em física das radiações e imagiologia médica, mecanismo dos Raios X Característicos explica-se pelo facto de que um eletrão incidente colide e ejeta um eletrão orbital de uma camada interna (camada K) do átomo de tungsténio; a vacância é preenchida por um eletrão de uma camada superior (L ou M), emitindo um fotão com energia exatamente igual à diferença de níveis quânticos. Produz um espetro de linhas discretas (picos monocromáticos característicos do tungsténio, como a linha $K_\\alpha \\approx 59$ keV e $K_\\beta \\approx 67$ keV).",
    "distractorAnalysis": [
      "Está incorreta: confunde radiação eletromagnética fotónica com matéria gasosa comum.",
      "Está incorreta: confunde Raios X com ondas mecânicas sonoras ou ultrassons.",
      "Está incorreta: é uma fantasia pseudocientífica que viola as leis da conservação da massa e da matéria."
    ],
    "nursingApplication": "Apenas ocorre se a quilovoltagem aplicada for superior à energia de ligação dos eletrões da camada K do alvo (mínimo de 69,5 kV para o tungsténio)."
  },
  {
    "id": 5085,
    "topicId": 5,
    "question": "Durante os cuidados de enfermagem a um doente submetido a procedimentos imagiológicos com radiações, como se aplica na prática o conceito de 'mecanismo dos Raios X Característicos'?",
    "options": [
      "Implica que o enfermeiro retire toda a blindagem de chumbo para que o seu corpo absorva a radiação em substituição do doente.",
      "Exige a imersão do doente numa banheira com lixívia concentrada durante 3 horas após o exame radiológico.",
      "Traduz-se na seguinte intervenção clínica fundamentada: Apenas ocorre se a quilovoltagem aplicada for superior à energia de ligação dos eletrões da camada K do alvo (mínimo de 69,5 kV para o tungsténio).",
      "Requer a proibição permanente de contacto humano com o doente radiografado durante 6 meses após a radiografia de tórax."
    ],
    "correctIndex": 2,
    "explanation": "A aplicação de enfermagem para mecanismo dos Raios X Característicos baseia-se no princípio: Apenas ocorre se a quilovoltagem aplicada for superior à energia de ligação dos eletrões da camada K do alvo (mínimo de 69,5 kV para o tungsténio). Esta intervenção garante a segurança radiológica do doente e do profissional.",
    "distractorAnalysis": [
      "Está incorreta: é perigosa e absurda: os profissionais devem proteger-se ativamente e não expor-se voluntariamente à radiação.",
      "Está incorreta: provocaria queimaduras químicas graves; não há qualquer radiação externa que justifique lixívia após Raios X.",
      "Está incorreta: confunde radiografia simples externa (onde não fica qualquer radioatividade no corpo) com contaminação radioativa interna."
    ],
    "nursingApplication": "Apenas ocorre se a quilovoltagem aplicada for superior à energia de ligação dos eletrões da camada K do alvo (mínimo de 69,5 kV para o tungsténio)."
  },
  {
    "id": 5086,
    "topicId": 5,
    "question": "Um enfermeiro analisa os parâmetros biofísicos e os mecanismos de interação em 'mecanismo dos Raios X Característicos'. Qual das seguintes afirmações expressa a correlação científica correta?",
    "options": [
      "A atenuação da radiação é rigorosamente nula em qualquer material, atravessando 10 metros de chumbo maciço sem qualquer perda de intensidade.",
      "O efeito fotoelétrico ocorre com igual probabilidade no ar, na gordura, no músculo e no osso, sendo independente do número atómico Z.",
      "A radiação dispersa por espalhamento Compton desaparece espontaneamente se as janelas da sala de exames estiverem abertas.",
      "A análise biofísica correta confirma que Produz um espetro de linhas discretas (picos monocromáticos característicos do tungsténio, como a linha $K_\\alpha \\approx 59$ keV e $K_\\beta \\approx 67$ keV)."
    ],
    "correctIndex": 3,
    "explanation": "A correlação científica correta demonstra que Produz um espetro de linhas discretas (picos monocromáticos característicos do tungsténio, como a linha $K_\\alpha \\approx 59$ keV e $K_\\beta \\approx 67$ keV). O domínio destes fundamentos permite ao enfermeiro assegurar a correta radioproteção e a interpretação dos riscos radiológicos.",
    "distractorAnalysis": [
      "Está incorreta: ignora a Lei de atenuação exponencial da radiação e a eficácia comprovada do chumbo como blindagem protetora.",
      "Está incorreta: nega a dependência estrita em Z³ do efeito fotoelétrico, que é a base física do contraste ósseo.",
      "Está incorreta: confunde radiação eletromagnética ionizante em linha reta com correntes de ar atmosférico."
    ],
    "nursingApplication": "Apenas ocorre se a quilovoltagem aplicada for superior à energia de ligação dos eletrões da camada K do alvo (mínimo de 69,5 kV para o tungsténio)."
  },
  {
    "id": 5087,
    "topicId": 5,
    "question": "Na física das radiações ionizantes e Raios X aplicada ao contexto hospitalar, em relação a 'influência do material do ânodo (número atómico Z elevado)', qual é a fundamentação científica exata?",
    "options": [
      "a eficiência da produção de radiação de travagem é proporcional ao número atómico do alvo ($Z$) e à voltagem aplicada. Utiliza-se o tungsténio (Z = 74) devido ao seu alto número atómico que maximiza a travagem dos eletrões e ao seu altíssimo ponto de fusão (3422 °C) que suporta o calor extremo.",
      "Os Raios X são constituídos por partículas gasosas de oxigénio líquido que evaporam instantaneamente à temperatura da sala.",
      "Trata-se de uma radiação puramente acústica e ultrassónica inaudível gerada pelo atrito das rodas da cama hospitalar.",
      "A radiação ionizante anula todas as ligações químicas do organismo humano transformando o doente num holograma sem massa."
    ],
    "correctIndex": 0,
    "explanation": "Em física das radiações e imagiologia médica, influência do material do ânodo (número atómico Z elevado) explica-se pelo facto de que a eficiência da produção de radiação de travagem é proporcional ao número atómico do alvo ($Z$) e à voltagem aplicada. Utiliza-se o tungsténio (Z = 74) devido ao seu alto número atómico que maximiza a travagem dos eletrões e ao seu altíssimo ponto de fusão (3422 °C) que suporta o calor extremo.",
    "distractorAnalysis": [
      "Está incorreta: confunde radiação eletromagnética fotónica com matéria gasosa comum.",
      "Está incorreta: confunde Raios X com ondas mecânicas sonoras ou ultrassons.",
      "Está incorreta: é uma fantasia pseudocientífica que viola as leis da conservação da massa e da matéria."
    ],
    "nursingApplication": "Na mamografia utilizam-se alvos de molibdénio (Z = 42) ou ródio (Z = 45) para gerar Raios X característicos de menor energia (17 a 20 keV), ideais para contrastar os tecidos moles da mama."
  },
  {
    "id": 5088,
    "topicId": 5,
    "question": "Durante os cuidados de enfermagem a um doente submetido a procedimentos imagiológicos com radiações, como se aplica na prática o conceito de 'influência do material do ânodo (número atómico Z elevado)'?",
    "options": [
      "Implica que o enfermeiro retire toda a blindagem de chumbo para que o seu corpo absorva a radiação em substituição do doente.",
      "Traduz-se na seguinte intervenção clínica fundamentada: Na mamografia utilizam-se alvos de molibdénio (Z = 42) ou ródio (Z = 45) para gerar Raios X característicos de menor energia (17 a 20 keV), ideais para contrastar os tecidos moles da mama.",
      "Exige a imersão do doente numa banheira com lixívia concentrada durante 3 horas após o exame radiológico.",
      "Requer a proibição permanente de contacto humano com o doente radiografado durante 6 meses após a radiografia de tórax."
    ],
    "correctIndex": 1,
    "explanation": "A aplicação de enfermagem para influência do material do ânodo (número atómico Z elevado) baseia-se no princípio: Na mamografia utilizam-se alvos de molibdénio (Z = 42) ou ródio (Z = 45) para gerar Raios X característicos de menor energia (17 a 20 keV), ideais para contrastar os tecidos moles da mama. Esta intervenção garante a segurança radiológica do doente e do profissional.",
    "distractorAnalysis": [
      "Está incorreta: é perigosa e absurda: os profissionais devem proteger-se ativamente e não expor-se voluntariamente à radiação.",
      "Está incorreta: provocaria queimaduras químicas graves; não há qualquer radiação externa que justifique lixívia após Raios X.",
      "Está incorreta: confunde radiografia simples externa (onde não fica qualquer radioatividade no corpo) com contaminação radioativa interna."
    ],
    "nursingApplication": "Na mamografia utilizam-se alvos de molibdénio (Z = 42) ou ródio (Z = 45) para gerar Raios X característicos de menor energia (17 a 20 keV), ideais para contrastar os tecidos moles da mama."
  },
  {
    "id": 5089,
    "topicId": 5,
    "question": "Um enfermeiro analisa os parâmetros biofísicos e os mecanismos de interação em 'influência do material do ânodo (número atómico Z elevado)'. Qual das seguintes afirmações expressa a correlação científica correta?",
    "options": [
      "A atenuação da radiação é rigorosamente nula em qualquer material, atravessando 10 metros de chumbo maciço sem qualquer perda de intensidade.",
      "O efeito fotoelétrico ocorre com igual probabilidade no ar, na gordura, no músculo e no osso, sendo independente do número atómico Z.",
      "A análise biofísica correta confirma que Utiliza-se o tungsténio (Z = 74) devido ao seu alto número atómico que maximiza a travagem dos eletrões e ao seu altíssimo ponto de fusão (3422 °C) que suporta o calor extremo.",
      "A radiação dispersa por espalhamento Compton desaparece espontaneamente se as janelas da sala de exames estiverem abertas."
    ],
    "correctIndex": 2,
    "explanation": "A correlação científica correta demonstra que Utiliza-se o tungsténio (Z = 74) devido ao seu alto número atómico que maximiza a travagem dos eletrões e ao seu altíssimo ponto de fusão (3422 °C) que suporta o calor extremo. O domínio destes fundamentos permite ao enfermeiro assegurar a correta radioproteção e a interpretação dos riscos radiológicos.",
    "distractorAnalysis": [
      "Está incorreta: ignora a Lei de atenuação exponencial da radiação e a eficácia comprovada do chumbo como blindagem protetora.",
      "Está incorreta: nega a dependência estrita em Z³ do efeito fotoelétrico, que é a base física do contraste ósseo.",
      "Está incorreta: confunde radiação eletromagnética ionizante em linha reta com correntes de ar atmosférico."
    ],
    "nursingApplication": "Na mamografia utilizam-se alvos de molibdénio (Z = 42) ou ródio (Z = 45) para gerar Raios X característicos de menor energia (17 a 20 keV), ideais para contrastar os tecidos moles da mama."
  },
  {
    "id": 5090,
    "topicId": 5,
    "question": "Na física das radiações ionizantes e Raios X aplicada ao contexto hospitalar, em relação a 'limite de Duane-Hunt e comprimento de onda mínimo (λ_min)', qual é a fundamentação científica exata?",
    "options": [
      "Os Raios X são constituídos por partículas gasosas de oxigénio líquido que evaporam instantaneamente à temperatura da sala.",
      "Trata-se de uma radiação puramente acústica e ultrassónica inaudível gerada pelo atrito das rodas da cama hospitalar.",
      "A radiação ionizante anula todas as ligações químicas do organismo humano transformando o doente num holograma sem massa.",
      "o comprimento de onda mais curto (fotão mais energético) possível é atingido quando toda a energia cinética do eletrão é convertida num único fotão: $\\lambda_{min} = \\frac{h \\cdot c}{e \\cdot V}$. Aumentar o kVp diminui o $\\lambda_{min}$ e desloca todo o espetro de emissão para frequências e energias mais elevadas."
    ],
    "correctIndex": 3,
    "explanation": "Em física das radiações e imagiologia médica, limite de Duane-Hunt e comprimento de onda mínimo (λ_min) explica-se pelo facto de que o comprimento de onda mais curto (fotão mais energético) possível é atingido quando toda a energia cinética do eletrão é convertida num único fotão: $\\lambda_{min} = \\frac{h \\cdot c}{e \\cdot V}$. Aumentar o kVp diminui o $\\lambda_{min}$ e desloca todo o espetro de emissão para frequências e energias mais elevadas.",
    "distractorAnalysis": [
      "Está incorreta: confunde radiação eletromagnética fotónica com matéria gasosa comum.",
      "Está incorreta: confunde Raios X com ondas mecânicas sonoras ou ultrassons.",
      "Está incorreta: é uma fantasia pseudocientífica que viola as leis da conservação da massa e da matéria."
    ],
    "nursingApplication": "O enfermeiro compreende que mexer no comando da máquina altera fisicamente o espetro fotónico emitido sobre o corpo da pessoa cuidada."
  },
  {
    "id": 5091,
    "topicId": 5,
    "question": "Durante os cuidados de enfermagem a um doente submetido a procedimentos imagiológicos com radiações, como se aplica na prática o conceito de 'limite de Duane-Hunt e comprimento de onda mínimo (λ_min)'?",
    "options": [
      "Traduz-se na seguinte intervenção clínica fundamentada: O enfermeiro compreende que mexer no comando da máquina altera fisicamente o espetro fotónico emitido sobre o corpo da pessoa cuidada.",
      "Implica que o enfermeiro retire toda a blindagem de chumbo para que o seu corpo absorva a radiação em substituição do doente.",
      "Exige a imersão do doente numa banheira com lixívia concentrada durante 3 horas após o exame radiológico.",
      "Requer a proibição permanente de contacto humano com o doente radiografado durante 6 meses após a radiografia de tórax."
    ],
    "correctIndex": 0,
    "explanation": "A aplicação de enfermagem para limite de Duane-Hunt e comprimento de onda mínimo (λ_min) baseia-se no princípio: O enfermeiro compreende que mexer no comando da máquina altera fisicamente o espetro fotónico emitido sobre o corpo da pessoa cuidada. Esta intervenção garante a segurança radiológica do doente e do profissional.",
    "distractorAnalysis": [
      "Está incorreta: é perigosa e absurda: os profissionais devem proteger-se ativamente e não expor-se voluntariamente à radiação.",
      "Está incorreta: provocaria queimaduras químicas graves; não há qualquer radiação externa que justifique lixívia após Raios X.",
      "Está incorreta: confunde radiografia simples externa (onde não fica qualquer radioatividade no corpo) com contaminação radioativa interna."
    ],
    "nursingApplication": "O enfermeiro compreende que mexer no comando da máquina altera fisicamente o espetro fotónico emitido sobre o corpo da pessoa cuidada."
  },
  {
    "id": 5092,
    "topicId": 5,
    "question": "Um enfermeiro analisa os parâmetros biofísicos e os mecanismos de interação em 'limite de Duane-Hunt e comprimento de onda mínimo (λ_min)'. Qual das seguintes afirmações expressa a correlação científica correta?",
    "options": [
      "A atenuação da radiação é rigorosamente nula em qualquer material, atravessando 10 metros de chumbo maciço sem qualquer perda de intensidade.",
      "A análise biofísica correta confirma que Aumentar o kVp diminui o $\\lambda_{min}$ e desloca todo o espetro de emissão para frequências e energias mais elevadas.",
      "O efeito fotoelétrico ocorre com igual probabilidade no ar, na gordura, no músculo e no osso, sendo independente do número atómico Z.",
      "A radiação dispersa por espalhamento Compton desaparece espontaneamente se as janelas da sala de exames estiverem abertas."
    ],
    "correctIndex": 1,
    "explanation": "A correlação científica correta demonstra que Aumentar o kVp diminui o $\\lambda_{min}$ e desloca todo o espetro de emissão para frequências e energias mais elevadas. O domínio destes fundamentos permite ao enfermeiro assegurar a correta radioproteção e a interpretação dos riscos radiológicos.",
    "distractorAnalysis": [
      "Está incorreta: ignora a Lei de atenuação exponencial da radiação e a eficácia comprovada do chumbo como blindagem protetora.",
      "Está incorreta: nega a dependência estrita em Z³ do efeito fotoelétrico, que é a base física do contraste ósseo.",
      "Está incorreta: confunde radiação eletromagnética ionizante em linha reta com correntes de ar atmosférico."
    ],
    "nursingApplication": "O enfermeiro compreende que mexer no comando da máquina altera fisicamente o espetro fotónico emitido sobre o corpo da pessoa cuidada."
  },
  {
    "id": 5093,
    "topicId": 5,
    "question": "Na física das radiações ionizantes e Raios X aplicada ao contexto hospitalar, em relação a 'relevância clínica da fração de radiação de travagem', qual é a fundamentação científica exata?",
    "options": [
      "Os Raios X são constituídos por partículas gasosas de oxigénio líquido que evaporam instantaneamente à temperatura da sala.",
      "Trata-se de uma radiação puramente acústica e ultrassónica inaudível gerada pelo atrito das rodas da cama hospitalar.",
      "a radiação de travagem gera uma ampla distribuição de energias que permite a atenuação diferenciada através de vários tipos de tecidos humanos de densidades heterogéneas. Esta heterogeneidade do feixe policromático é aproveitada para a formação da imagem em níveis de cinzento nos detetores digitais.",
      "A radiação ionizante anula todas as ligações químicas do organismo humano transformando o doente num holograma sem massa."
    ],
    "correctIndex": 2,
    "explanation": "Em física das radiações e imagiologia médica, relevância clínica da fração de radiação de travagem explica-se pelo facto de que a radiação de travagem gera uma ampla distribuição de energias que permite a atenuação diferenciada através de vários tipos de tecidos humanos de densidades heterogéneas. Esta heterogeneidade do feixe policromático é aproveitada para a formação da imagem em níveis de cinzento nos detetores digitais.",
    "distractorAnalysis": [
      "Está incorreta: confunde radiação eletromagnética fotónica com matéria gasosa comum.",
      "Está incorreta: confunde Raios X com ondas mecânicas sonoras ou ultrassons.",
      "Está incorreta: é uma fantasia pseudocientífica que viola as leis da conservação da massa e da matéria."
    ],
    "nursingApplication": "O enfermeiro apoia na imobilização suave do doente durante a aquisição da imagem para evitar artefactos de movimento que degradam o contraste das densidades de travagem."
  },
  {
    "id": 5094,
    "topicId": 5,
    "question": "Durante os cuidados de enfermagem a um doente submetido a procedimentos imagiológicos com radiações, como se aplica na prática o conceito de 'relevância clínica da fração de radiação de travagem'?",
    "options": [
      "Implica que o enfermeiro retire toda a blindagem de chumbo para que o seu corpo absorva a radiação em substituição do doente.",
      "Exige a imersão do doente numa banheira com lixívia concentrada durante 3 horas após o exame radiológico.",
      "Requer a proibição permanente de contacto humano com o doente radiografado durante 6 meses após a radiografia de tórax.",
      "Traduz-se na seguinte intervenção clínica fundamentada: O enfermeiro apoia na imobilização suave do doente durante a aquisição da imagem para evitar artefactos de movimento que degradam o contraste das densidades de travagem."
    ],
    "correctIndex": 3,
    "explanation": "A aplicação de enfermagem para relevância clínica da fração de radiação de travagem baseia-se no princípio: O enfermeiro apoia na imobilização suave do doente durante a aquisição da imagem para evitar artefactos de movimento que degradam o contraste das densidades de travagem. Esta intervenção garante a segurança radiológica do doente e do profissional.",
    "distractorAnalysis": [
      "Está incorreta: é perigosa e absurda: os profissionais devem proteger-se ativamente e não expor-se voluntariamente à radiação.",
      "Está incorreta: provocaria queimaduras químicas graves; não há qualquer radiação externa que justifique lixívia após Raios X.",
      "Está incorreta: confunde radiografia simples externa (onde não fica qualquer radioatividade no corpo) com contaminação radioativa interna."
    ],
    "nursingApplication": "O enfermeiro apoia na imobilização suave do doente durante a aquisição da imagem para evitar artefactos de movimento que degradam o contraste das densidades de travagem."
  },
  {
    "id": 5095,
    "topicId": 5,
    "question": "Um enfermeiro analisa os parâmetros biofísicos e os mecanismos de interação em 'relevância clínica da fração de radiação de travagem'. Qual das seguintes afirmações expressa a correlação científica correta?",
    "options": [
      "A análise biofísica correta confirma que Esta heterogeneidade do feixe policromático é aproveitada para a formação da imagem em níveis de cinzento nos detetores digitais.",
      "A atenuação da radiação é rigorosamente nula em qualquer material, atravessando 10 metros de chumbo maciço sem qualquer perda de intensidade.",
      "O efeito fotoelétrico ocorre com igual probabilidade no ar, na gordura, no músculo e no osso, sendo independente do número atómico Z.",
      "A radiação dispersa por espalhamento Compton desaparece espontaneamente se as janelas da sala de exames estiverem abertas."
    ],
    "correctIndex": 0,
    "explanation": "A correlação científica correta demonstra que Esta heterogeneidade do feixe policromático é aproveitada para a formação da imagem em níveis de cinzento nos detetores digitais. O domínio destes fundamentos permite ao enfermeiro assegurar a correta radioproteção e a interpretação dos riscos radiológicos.",
    "distractorAnalysis": [
      "Está incorreta: ignora a Lei de atenuação exponencial da radiação e a eficácia comprovada do chumbo como blindagem protetora.",
      "Está incorreta: nega a dependência estrita em Z³ do efeito fotoelétrico, que é a base física do contraste ósseo.",
      "Está incorreta: confunde radiação eletromagnética ionizante em linha reta com correntes de ar atmosférico."
    ],
    "nursingApplication": "O enfermeiro apoia na imobilização suave do doente durante a aquisição da imagem para evitar artefactos de movimento que degradam o contraste das densidades de travagem."
  },
  {
    "id": 5096,
    "topicId": 5,
    "question": "Na física das radiações ionizantes e Raios X aplicada ao contexto hospitalar, em relação a 'mecanismo biofísico do Efeito Fotoelétrico', qual é a fundamentação científica exata?",
    "options": [
      "Os Raios X são constituídos por partículas gasosas de oxigénio líquido que evaporam instantaneamente à temperatura da sala.",
      "o fotão de Raios X colide com um eletrão da camada interna do tecido biológico, transfere toda a sua energia, desaparece completamente (absorção pura) e ejeta o eletrão como fotoeletrão. A probabilidade de ocorrência varia diretamente com o cubo do número atómico do tecido e inversamente com o cubo da energia do fotão ($P \\propto Z^3 / E^3$).",
      "Trata-se de uma radiação puramente acústica e ultrassónica inaudível gerada pelo atrito das rodas da cama hospitalar.",
      "A radiação ionizante anula todas as ligações químicas do organismo humano transformando o doente num holograma sem massa."
    ],
    "correctIndex": 1,
    "explanation": "Em física das radiações e imagiologia médica, mecanismo biofísico do Efeito Fotoelétrico explica-se pelo facto de que o fotão de Raios X colide com um eletrão da camada interna do tecido biológico, transfere toda a sua energia, desaparece completamente (absorção pura) e ejeta o eletrão como fotoeletrão. A probabilidade de ocorrência varia diretamente com o cubo do número atómico do tecido e inversamente com o cubo da energia do fotão ($P \\propto Z^3 / E^3$).",
    "distractorAnalysis": [
      "Está incorreta: confunde radiação eletromagnética fotónica com matéria gasosa comum.",
      "Está incorreta: confunde Raios X com ondas mecânicas sonoras ou ultrassons.",
      "Está incorreta: é uma fantasia pseudocientífica que viola as leis da conservação da massa e da matéria."
    ],
    "nursingApplication": "É o principal responsável pelo excelente contraste radiológico entre o osso ($Z_{médio} \\approx 13,8$) e os tecidos moles circundantes ($Z_{médio} \\approx 7,4$)."
  },
  {
    "id": 5097,
    "topicId": 5,
    "question": "Durante os cuidados de enfermagem a um doente submetido a procedimentos imagiológicos com radiações, como se aplica na prática o conceito de 'mecanismo biofísico do Efeito Fotoelétrico'?",
    "options": [
      "Implica que o enfermeiro retire toda a blindagem de chumbo para que o seu corpo absorva a radiação em substituição do doente.",
      "Exige a imersão do doente numa banheira com lixívia concentrada durante 3 horas após o exame radiológico.",
      "Traduz-se na seguinte intervenção clínica fundamentada: É o principal responsável pelo excelente contraste radiológico entre o osso ($Z_{médio} \\approx 13,8$) e os tecidos moles circundantes ($Z_{médio} \\approx 7,4$).",
      "Requer a proibição permanente de contacto humano com o doente radiografado durante 6 meses após a radiografia de tórax."
    ],
    "correctIndex": 2,
    "explanation": "A aplicação de enfermagem para mecanismo biofísico do Efeito Fotoelétrico baseia-se no princípio: É o principal responsável pelo excelente contraste radiológico entre o osso ($Z_{médio} \\approx 13,8$) e os tecidos moles circundantes ($Z_{médio} \\approx 7,4$). Esta intervenção garante a segurança radiológica do doente e do profissional.",
    "distractorAnalysis": [
      "Está incorreta: é perigosa e absurda: os profissionais devem proteger-se ativamente e não expor-se voluntariamente à radiação.",
      "Está incorreta: provocaria queimaduras químicas graves; não há qualquer radiação externa que justifique lixívia após Raios X.",
      "Está incorreta: confunde radiografia simples externa (onde não fica qualquer radioatividade no corpo) com contaminação radioativa interna."
    ],
    "nursingApplication": "É o principal responsável pelo excelente contraste radiológico entre o osso ($Z_{médio} \\approx 13,8$) e os tecidos moles circundantes ($Z_{médio} \\approx 7,4$)."
  },
  {
    "id": 5098,
    "topicId": 5,
    "question": "Um enfermeiro analisa os parâmetros biofísicos e os mecanismos de interação em 'mecanismo biofísico do Efeito Fotoelétrico'. Qual das seguintes afirmações expressa a correlação científica correta?",
    "options": [
      "A atenuação da radiação é rigorosamente nula em qualquer material, atravessando 10 metros de chumbo maciço sem qualquer perda de intensidade.",
      "O efeito fotoelétrico ocorre com igual probabilidade no ar, na gordura, no músculo e no osso, sendo independente do número atómico Z.",
      "A radiação dispersa por espalhamento Compton desaparece espontaneamente se as janelas da sala de exames estiverem abertas.",
      "A análise biofísica correta confirma que A probabilidade de ocorrência varia diretamente com o cubo do número atómico do tecido e inversamente com o cubo da energia do fotão ($P \\propto Z^3 / E^3$)."
    ],
    "correctIndex": 3,
    "explanation": "A correlação científica correta demonstra que A probabilidade de ocorrência varia diretamente com o cubo do número atómico do tecido e inversamente com o cubo da energia do fotão ($P \\propto Z^3 / E^3$). O domínio destes fundamentos permite ao enfermeiro assegurar a correta radioproteção e a interpretação dos riscos radiológicos.",
    "distractorAnalysis": [
      "Está incorreta: ignora a Lei de atenuação exponencial da radiação e a eficácia comprovada do chumbo como blindagem protetora.",
      "Está incorreta: nega a dependência estrita em Z³ do efeito fotoelétrico, que é a base física do contraste ósseo.",
      "Está incorreta: confunde radiação eletromagnética ionizante em linha reta com correntes de ar atmosférico."
    ],
    "nursingApplication": "É o principal responsável pelo excelente contraste radiológico entre o osso ($Z_{médio} \\approx 13,8$) e os tecidos moles circundantes ($Z_{médio} \\approx 7,4$)."
  },
  {
    "id": 5099,
    "topicId": 5,
    "question": "Na física das radiações ionizantes e Raios X aplicada ao contexto hospitalar, em relação a 'mecanismo biofísico do Efeito de Compton (espalhamento Compton)', qual é a fundamentação científica exata?",
    "options": [
      "o fotão de Raios X colide com um eletrão fracamente ligado da camada externa do átomo biológico, ejeta o eletrão e é desviado da sua rota original com menor energia sob a forma de fotão disperso. A probabilidade depende quase exclusivamente da densidade eletrónica do meio e é predominante para energias intermédias e altas de diagnóstico (acima de 70-80 keV).",
      "Os Raios X são constituídos por partículas gasosas de oxigénio líquido que evaporam instantaneamente à temperatura da sala.",
      "Trata-se de uma radiação puramente acústica e ultrassónica inaudível gerada pelo atrito das rodas da cama hospitalar.",
      "A radiação ionizante anula todas as ligações químicas do organismo humano transformando o doente num holograma sem massa."
    ],
    "correctIndex": 0,
    "explanation": "Em física das radiações e imagiologia médica, mecanismo biofísico do Efeito de Compton (espalhamento Compton) explica-se pelo facto de que o fotão de Raios X colide com um eletrão fracamente ligado da camada externa do átomo biológico, ejeta o eletrão e é desviado da sua rota original com menor energia sob a forma de fotão disperso. A probabilidade depende quase exclusivamente da densidade eletrónica do meio e é predominante para energias intermédias e altas de diagnóstico (acima de 70-80 keV).",
    "distractorAnalysis": [
      "Está incorreta: confunde radiação eletromagnética fotónica com matéria gasosa comum.",
      "Está incorreta: confunde Raios X com ondas mecânicas sonoras ou ultrassons.",
      "Está incorreta: é uma fantasia pseudocientífica que viola as leis da conservação da massa e da matéria."
    ],
    "nursingApplication": "Constitui a fonte primária de 'radiação dispersa' difusa na sala de radiologia e a principal causa de exposição ocupacional da equipa cirúrgica e de enfermagem."
  },
  {
    "id": 5100,
    "topicId": 5,
    "question": "Durante os cuidados de enfermagem a um doente submetido a procedimentos imagiológicos com radiações, como se aplica na prática o conceito de 'mecanismo biofísico do Efeito de Compton (espalhamento Compton)'?",
    "options": [
      "Implica que o enfermeiro retire toda a blindagem de chumbo para que o seu corpo absorva a radiação em substituição do doente.",
      "Traduz-se na seguinte intervenção clínica fundamentada: Constitui a fonte primária de 'radiação dispersa' difusa na sala de radiologia e a principal causa de exposição ocupacional da equipa cirúrgica e de enfermagem.",
      "Exige a imersão do doente numa banheira com lixívia concentrada durante 3 horas após o exame radiológico.",
      "Requer a proibição permanente de contacto humano com o doente radiografado durante 6 meses após a radiografia de tórax."
    ],
    "correctIndex": 1,
    "explanation": "A aplicação de enfermagem para mecanismo biofísico do Efeito de Compton (espalhamento Compton) baseia-se no princípio: Constitui a fonte primária de 'radiação dispersa' difusa na sala de radiologia e a principal causa de exposição ocupacional da equipa cirúrgica e de enfermagem. Esta intervenção garante a segurança radiológica do doente e do profissional.",
    "distractorAnalysis": [
      "Está incorreta: é perigosa e absurda: os profissionais devem proteger-se ativamente e não expor-se voluntariamente à radiação.",
      "Está incorreta: provocaria queimaduras químicas graves; não há qualquer radiação externa que justifique lixívia após Raios X.",
      "Está incorreta: confunde radiografia simples externa (onde não fica qualquer radioatividade no corpo) com contaminação radioativa interna."
    ],
    "nursingApplication": "Constitui a fonte primária de 'radiação dispersa' difusa na sala de radiologia e a principal causa de exposição ocupacional da equipa cirúrgica e de enfermagem."
  },
  {
    "id": 5101,
    "topicId": 5,
    "question": "Um enfermeiro analisa os parâmetros biofísicos e os mecanismos de interação em 'mecanismo biofísico do Efeito de Compton (espalhamento Compton)'. Qual das seguintes afirmações expressa a correlação científica correta?",
    "options": [
      "A atenuação da radiação é rigorosamente nula em qualquer material, atravessando 10 metros de chumbo maciço sem qualquer perda de intensidade.",
      "O efeito fotoelétrico ocorre com igual probabilidade no ar, na gordura, no músculo e no osso, sendo independente do número atómico Z.",
      "A análise biofísica correta confirma que A probabilidade depende quase exclusivamente da densidade eletrónica do meio e é predominante para energias intermédias e altas de diagnóstico (acima de 70-80 keV).",
      "A radiação dispersa por espalhamento Compton desaparece espontaneamente se as janelas da sala de exames estiverem abertas."
    ],
    "correctIndex": 2,
    "explanation": "A correlação científica correta demonstra que A probabilidade depende quase exclusivamente da densidade eletrónica do meio e é predominante para energias intermédias e altas de diagnóstico (acima de 70-80 keV). O domínio destes fundamentos permite ao enfermeiro assegurar a correta radioproteção e a interpretação dos riscos radiológicos.",
    "distractorAnalysis": [
      "Está incorreta: ignora a Lei de atenuação exponencial da radiação e a eficácia comprovada do chumbo como blindagem protetora.",
      "Está incorreta: nega a dependência estrita em Z³ do efeito fotoelétrico, que é a base física do contraste ósseo.",
      "Está incorreta: confunde radiação eletromagnética ionizante em linha reta com correntes de ar atmosférico."
    ],
    "nursingApplication": "Constitui a fonte primária de 'radiação dispersa' difusa na sala de radiologia e a principal causa de exposição ocupacional da equipa cirúrgica e de enfermagem."
  },
  {
    "id": 5102,
    "topicId": 5,
    "question": "Na física das radiações ionizantes e Raios X aplicada ao contexto hospitalar, em relação a 'dependência em Z³ no Efeito Fotoelétrico e contraste ósseo', qual é a fundamentação científica exata?",
    "options": [
      "Os Raios X são constituídos por partículas gasosas de oxigénio líquido que evaporam instantaneamente à temperatura da sala.",
      "Trata-se de uma radiação puramente acústica e ultrassónica inaudível gerada pelo atrito das rodas da cama hospitalar.",
      "A radiação ionizante anula todas as ligações químicas do organismo humano transformando o doente num holograma sem massa.",
      "como o cálcio e o fósforo dos ossos possuem $Z$ muito mais elevado do que o hidrogénio, carbono e oxigénio dos tecidos moles, a absorção fotoelétrica no osso é cerca de 6 a 8 vezes superior. Os fotões são quase todos absorvidos pelo osso e não chegam ao detetor, criando as áreas brancas (radiopacas) na radiografia que evidenciam fraturas com nitidez."
    ],
    "correctIndex": 3,
    "explanation": "Em física das radiações e imagiologia médica, dependência em Z³ no Efeito Fotoelétrico e contraste ósseo explica-se pelo facto de que como o cálcio e o fósforo dos ossos possuem $Z$ muito mais elevado do que o hidrogénio, carbono e oxigénio dos tecidos moles, a absorção fotoelétrica no osso é cerca de 6 a 8 vezes superior. Os fotões são quase todos absorvidos pelo osso e não chegam ao detetor, criando as áreas brancas (radiopacas) na radiografia que evidenciam fraturas com nitidez.",
    "distractorAnalysis": [
      "Está incorreta: confunde radiação eletromagnética fotónica com matéria gasosa comum.",
      "Está incorreta: confunde Raios X com ondas mecânicas sonoras ou ultrassons.",
      "Está incorreta: é uma fantasia pseudocientífica que viola as leis da conservação da massa e da matéria."
    ],
    "nursingApplication": "O enfermeiro analisa o relatório radiográfico sabendo que fraturas osteoporóticas com perda de cálcio exibem menor contraste fotoelétrico por diminuição da densidade mineral efetiva."
  },
  {
    "id": 5103,
    "topicId": 5,
    "question": "Durante os cuidados de enfermagem a um doente submetido a procedimentos imagiológicos com radiações, como se aplica na prática o conceito de 'dependência em Z³ no Efeito Fotoelétrico e contraste ósseo'?",
    "options": [
      "Traduz-se na seguinte intervenção clínica fundamentada: O enfermeiro analisa o relatório radiográfico sabendo que fraturas osteoporóticas com perda de cálcio exibem menor contraste fotoelétrico por diminuição da densidade mineral efetiva.",
      "Implica que o enfermeiro retire toda a blindagem de chumbo para que o seu corpo absorva a radiação em substituição do doente.",
      "Exige a imersão do doente numa banheira com lixívia concentrada durante 3 horas após o exame radiológico.",
      "Requer a proibição permanente de contacto humano com o doente radiografado durante 6 meses após a radiografia de tórax."
    ],
    "correctIndex": 0,
    "explanation": "A aplicação de enfermagem para dependência em Z³ no Efeito Fotoelétrico e contraste ósseo baseia-se no princípio: O enfermeiro analisa o relatório radiográfico sabendo que fraturas osteoporóticas com perda de cálcio exibem menor contraste fotoelétrico por diminuição da densidade mineral efetiva. Esta intervenção garante a segurança radiológica do doente e do profissional.",
    "distractorAnalysis": [
      "Está incorreta: é perigosa e absurda: os profissionais devem proteger-se ativamente e não expor-se voluntariamente à radiação.",
      "Está incorreta: provocaria queimaduras químicas graves; não há qualquer radiação externa que justifique lixívia após Raios X.",
      "Está incorreta: confunde radiografia simples externa (onde não fica qualquer radioatividade no corpo) com contaminação radioativa interna."
    ],
    "nursingApplication": "O enfermeiro analisa o relatório radiográfico sabendo que fraturas osteoporóticas com perda de cálcio exibem menor contraste fotoelétrico por diminuição da densidade mineral efetiva."
  },
  {
    "id": 5104,
    "topicId": 5,
    "question": "Um enfermeiro analisa os parâmetros biofísicos e os mecanismos de interação em 'dependência em Z³ no Efeito Fotoelétrico e contraste ósseo'. Qual das seguintes afirmações expressa a correlação científica correta?",
    "options": [
      "A atenuação da radiação é rigorosamente nula em qualquer material, atravessando 10 metros de chumbo maciço sem qualquer perda de intensidade.",
      "A análise biofísica correta confirma que Os fotões são quase todos absorvidos pelo osso e não chegam ao detetor, criando as áreas brancas (radiopacas) na radiografia que evidenciam fraturas com nitidez.",
      "O efeito fotoelétrico ocorre com igual probabilidade no ar, na gordura, no músculo e no osso, sendo independente do número atómico Z.",
      "A radiação dispersa por espalhamento Compton desaparece espontaneamente se as janelas da sala de exames estiverem abertas."
    ],
    "correctIndex": 1,
    "explanation": "A correlação científica correta demonstra que Os fotões são quase todos absorvidos pelo osso e não chegam ao detetor, criando as áreas brancas (radiopacas) na radiografia que evidenciam fraturas com nitidez. O domínio destes fundamentos permite ao enfermeiro assegurar a correta radioproteção e a interpretação dos riscos radiológicos.",
    "distractorAnalysis": [
      "Está incorreta: ignora a Lei de atenuação exponencial da radiação e a eficácia comprovada do chumbo como blindagem protetora.",
      "Está incorreta: nega a dependência estrita em Z³ do efeito fotoelétrico, que é a base física do contraste ósseo.",
      "Está incorreta: confunde radiação eletromagnética ionizante em linha reta com correntes de ar atmosférico."
    ],
    "nursingApplication": "O enfermeiro analisa o relatório radiográfico sabendo que fraturas osteoporóticas com perda de cálcio exibem menor contraste fotoelétrico por diminuição da densidade mineral efetiva."
  },
  {
    "id": 5105,
    "topicId": 5,
    "question": "Na física das radiações ionizantes e Raios X aplicada ao contexto hospitalar, em relação a 'grelha antidifusora (potter-bucky) e eliminação da dispersão Compton', qual é a fundamentação científica exata?",
    "options": [
      "Os Raios X são constituídos por partículas gasosas de oxigénio líquido que evaporam instantaneamente à temperatura da sala.",
      "Trata-se de uma radiação puramente acústica e ultrassónica inaudível gerada pelo atrito das rodas da cama hospitalar.",
      "uma grelha de finas lamelas de chumbo colocada entre o doente e o detetor de imagem que absorve os fotões Compton que viajam em trajetórias oblíquas dispersas. Permite apenas a passagem dos fotões primários que viajaram em linha reta da fonte, melhorando drasticamente o contraste e nitidez da imagem em partes espessas do corpo.",
      "A radiação ionizante anula todas as ligações químicas do organismo humano transformando o doente num holograma sem massa."
    ],
    "correctIndex": 2,
    "explanation": "Em física das radiações e imagiologia médica, grelha antidifusora (potter-bucky) e eliminação da dispersão Compton explica-se pelo facto de que uma grelha de finas lamelas de chumbo colocada entre o doente e o detetor de imagem que absorve os fotões Compton que viajam em trajetórias oblíquas dispersas. Permite apenas a passagem dos fotões primários que viajaram em linha reta da fonte, melhorando drasticamente o contraste e nitidez da imagem em partes espessas do corpo.",
    "distractorAnalysis": [
      "Está incorreta: confunde radiação eletromagnética fotónica com matéria gasosa comum.",
      "Está incorreta: confunde Raios X com ondas mecânicas sonoras ou ultrassons.",
      "Está incorreta: é uma fantasia pseudocientífica que viola as leis da conservação da massa e da matéria."
    ],
    "nursingApplication": "O enfermeiro sabe que o uso de grelha exige um aumento modesto na dose de radiação administrada ao doente para compensar os fotões absorvidos pelas lamelas de chumbo."
  },
  {
    "id": 5106,
    "topicId": 5,
    "question": "Durante os cuidados de enfermagem a um doente submetido a procedimentos imagiológicos com radiações, como se aplica na prática o conceito de 'grelha antidifusora (potter-bucky) e eliminação da dispersão Compton'?",
    "options": [
      "Implica que o enfermeiro retire toda a blindagem de chumbo para que o seu corpo absorva a radiação em substituição do doente.",
      "Exige a imersão do doente numa banheira com lixívia concentrada durante 3 horas após o exame radiológico.",
      "Requer a proibição permanente de contacto humano com o doente radiografado durante 6 meses após a radiografia de tórax.",
      "Traduz-se na seguinte intervenção clínica fundamentada: O enfermeiro sabe que o uso de grelha exige um aumento modesto na dose de radiação administrada ao doente para compensar os fotões absorvidos pelas lamelas de chumbo."
    ],
    "correctIndex": 3,
    "explanation": "A aplicação de enfermagem para grelha antidifusora (potter-bucky) e eliminação da dispersão Compton baseia-se no princípio: O enfermeiro sabe que o uso de grelha exige um aumento modesto na dose de radiação administrada ao doente para compensar os fotões absorvidos pelas lamelas de chumbo. Esta intervenção garante a segurança radiológica do doente e do profissional.",
    "distractorAnalysis": [
      "Está incorreta: é perigosa e absurda: os profissionais devem proteger-se ativamente e não expor-se voluntariamente à radiação.",
      "Está incorreta: provocaria queimaduras químicas graves; não há qualquer radiação externa que justifique lixívia após Raios X.",
      "Está incorreta: confunde radiografia simples externa (onde não fica qualquer radioatividade no corpo) com contaminação radioativa interna."
    ],
    "nursingApplication": "O enfermeiro sabe que o uso de grelha exige um aumento modesto na dose de radiação administrada ao doente para compensar os fotões absorvidos pelas lamelas de chumbo."
  },
  {
    "id": 5107,
    "topicId": 5,
    "question": "Um enfermeiro analisa os parâmetros biofísicos e os mecanismos de interação em 'grelha antidifusora (potter-bucky) e eliminação da dispersão Compton'. Qual das seguintes afirmações expressa a correlação científica correta?",
    "options": [
      "A análise biofísica correta confirma que Permite apenas a passagem dos fotões primários que viajaram em linha reta da fonte, melhorando drasticamente o contraste e nitidez da imagem em partes espessas do corpo.",
      "A atenuação da radiação é rigorosamente nula em qualquer material, atravessando 10 metros de chumbo maciço sem qualquer perda de intensidade.",
      "O efeito fotoelétrico ocorre com igual probabilidade no ar, na gordura, no músculo e no osso, sendo independente do número atómico Z.",
      "A radiação dispersa por espalhamento Compton desaparece espontaneamente se as janelas da sala de exames estiverem abertas."
    ],
    "correctIndex": 0,
    "explanation": "A correlação científica correta demonstra que Permite apenas a passagem dos fotões primários que viajaram em linha reta da fonte, melhorando drasticamente o contraste e nitidez da imagem em partes espessas do corpo. O domínio destes fundamentos permite ao enfermeiro assegurar a correta radioproteção e a interpretação dos riscos radiológicos.",
    "distractorAnalysis": [
      "Está incorreta: ignora a Lei de atenuação exponencial da radiação e a eficácia comprovada do chumbo como blindagem protetora.",
      "Está incorreta: nega a dependência estrita em Z³ do efeito fotoelétrico, que é a base física do contraste ósseo.",
      "Está incorreta: confunde radiação eletromagnética ionizante em linha reta com correntes de ar atmosférico."
    ],
    "nursingApplication": "O enfermeiro sabe que o uso de grelha exige um aumento modesto na dose de radiação administrada ao doente para compensar os fotões absorvidos pelas lamelas de chumbo."
  },
  {
    "id": 5108,
    "topicId": 5,
    "question": "Na física das radiações ionizantes e Raios X aplicada ao contexto hospitalar, em relação a 'radiação dispersa e segurança da equipa de enfermagem em bloco operatório', qual é a fundamentação científica exata?",
    "options": [
      "Os Raios X são constituídos por partículas gasosas de oxigénio líquido que evaporam instantaneamente à temperatura da sala.",
      "durante cirurgias ortopédicas ou hemodinâmica com fluoroscopia contínua (arco em C), a maior parte da radiação que atinge o enfermeiro provém do espalhamento Compton dentro do próprio corpo do doente. O corpo do doente atua fisicamente como uma fonte secundária que dispersa radiação em todas as direções da sala de operações.",
      "Trata-se de uma radiação puramente acústica e ultrassónica inaudível gerada pelo atrito das rodas da cama hospitalar.",
      "A radiação ionizante anula todas as ligações químicas do organismo humano transformando o doente num holograma sem massa."
    ],
    "correctIndex": 1,
    "explanation": "Em física das radiações e imagiologia médica, radiação dispersa e segurança da equipa de enfermagem em bloco operatório explica-se pelo facto de que durante cirurgias ortopédicas ou hemodinâmica com fluoroscopia contínua (arco em C), a maior parte da radiação que atinge o enfermeiro provém do espalhamento Compton dentro do próprio corpo do doente. O corpo do doente atua fisicamente como uma fonte secundária que dispersa radiação em todas as direções da sala de operações.",
    "distractorAnalysis": [
      "Está incorreta: confunde radiação eletromagnética fotónica com matéria gasosa comum.",
      "Está incorreta: confunde Raios X com ondas mecânicas sonoras ou ultrassons.",
      "Está incorreta: é uma fantasia pseudocientífica que viola as leis da conservação da massa e da matéria."
    ],
    "nursingApplication": "O enfermeiro instrumentista e circulante afasta-se pelo menos 2 metros do tubo e do doente durante o disparo do arco em C e utiliza rigorosamente o avental plúmbeo de proteção."
  },
  {
    "id": 5109,
    "topicId": 5,
    "question": "Durante os cuidados de enfermagem a um doente submetido a procedimentos imagiológicos com radiações, como se aplica na prática o conceito de 'radiação dispersa e segurança da equipa de enfermagem em bloco operatório'?",
    "options": [
      "Implica que o enfermeiro retire toda a blindagem de chumbo para que o seu corpo absorva a radiação em substituição do doente.",
      "Exige a imersão do doente numa banheira com lixívia concentrada durante 3 horas após o exame radiológico.",
      "Traduz-se na seguinte intervenção clínica fundamentada: O enfermeiro instrumentista e circulante afasta-se pelo menos 2 metros do tubo e do doente durante o disparo do arco em C e utiliza rigorosamente o avental plúmbeo de proteção.",
      "Requer a proibição permanente de contacto humano com o doente radiografado durante 6 meses após a radiografia de tórax."
    ],
    "correctIndex": 2,
    "explanation": "A aplicação de enfermagem para radiação dispersa e segurança da equipa de enfermagem em bloco operatório baseia-se no princípio: O enfermeiro instrumentista e circulante afasta-se pelo menos 2 metros do tubo e do doente durante o disparo do arco em C e utiliza rigorosamente o avental plúmbeo de proteção. Esta intervenção garante a segurança radiológica do doente e do profissional.",
    "distractorAnalysis": [
      "Está incorreta: é perigosa e absurda: os profissionais devem proteger-se ativamente e não expor-se voluntariamente à radiação.",
      "Está incorreta: provocaria queimaduras químicas graves; não há qualquer radiação externa que justifique lixívia após Raios X.",
      "Está incorreta: confunde radiografia simples externa (onde não fica qualquer radioatividade no corpo) com contaminação radioativa interna."
    ],
    "nursingApplication": "O enfermeiro instrumentista e circulante afasta-se pelo menos 2 metros do tubo e do doente durante o disparo do arco em C e utiliza rigorosamente o avental plúmbeo de proteção."
  },
  {
    "id": 5110,
    "topicId": 5,
    "question": "Um enfermeiro analisa os parâmetros biofísicos e os mecanismos de interação em 'radiação dispersa e segurança da equipa de enfermagem em bloco operatório'. Qual das seguintes afirmações expressa a correlação científica correta?",
    "options": [
      "A atenuação da radiação é rigorosamente nula em qualquer material, atravessando 10 metros de chumbo maciço sem qualquer perda de intensidade.",
      "O efeito fotoelétrico ocorre com igual probabilidade no ar, na gordura, no músculo e no osso, sendo independente do número atómico Z.",
      "A radiação dispersa por espalhamento Compton desaparece espontaneamente se as janelas da sala de exames estiverem abertas.",
      "A análise biofísica correta confirma que O corpo do doente atua fisicamente como uma fonte secundária que dispersa radiação em todas as direções da sala de operações."
    ],
    "correctIndex": 3,
    "explanation": "A correlação científica correta demonstra que O corpo do doente atua fisicamente como uma fonte secundária que dispersa radiação em todas as direções da sala de operações. O domínio destes fundamentos permite ao enfermeiro assegurar a correta radioproteção e a interpretação dos riscos radiológicos.",
    "distractorAnalysis": [
      "Está incorreta: ignora a Lei de atenuação exponencial da radiação e a eficácia comprovada do chumbo como blindagem protetora.",
      "Está incorreta: nega a dependência estrita em Z³ do efeito fotoelétrico, que é a base física do contraste ósseo.",
      "Está incorreta: confunde radiação eletromagnética ionizante em linha reta com correntes de ar atmosférico."
    ],
    "nursingApplication": "O enfermeiro instrumentista e circulante afasta-se pelo menos 2 metros do tubo e do doente durante o disparo do arco em C e utiliza rigorosamente o avental plúmbeo de proteção."
  },
  {
    "id": 5111,
    "topicId": 5,
    "question": "Na física das radiações ionizantes e Raios X aplicada ao contexto hospitalar, em relação a 'conceito de radiopacidade vs radiotransparência', qual é a fundamentação científica exata?",
    "options": [
      "estruturas de alta densidade e alto $Z$ (como ossos e metais) atenuam fortemente os Raios X, surgindo brancas ou claras na radiografia (radiopacas); estruturas de baixa densidade (como o ar nos pulmões) deixam passar os fotões, surgindo pretas (radiotransparentes). Os tecidos moles (músculos, coração, fígado) e a gordura apresentam tons intermédios de cinzento radiológico.",
      "Os Raios X são constituídos por partículas gasosas de oxigénio líquido que evaporam instantaneamente à temperatura da sala.",
      "Trata-se de uma radiação puramente acústica e ultrassónica inaudível gerada pelo atrito das rodas da cama hospitalar.",
      "A radiação ionizante anula todas as ligações químicas do organismo humano transformando o doente num holograma sem massa."
    ],
    "correctIndex": 0,
    "explanation": "Em física das radiações e imagiologia médica, conceito de radiopacidade vs radiotransparência explica-se pelo facto de que estruturas de alta densidade e alto $Z$ (como ossos e metais) atenuam fortemente os Raios X, surgindo brancas ou claras na radiografia (radiopacas); estruturas de baixa densidade (como o ar nos pulmões) deixam passar os fotões, surgindo pretas (radiotransparentes). Os tecidos moles (músculos, coração, fígado) e a gordura apresentam tons intermédios de cinzento radiológico.",
    "distractorAnalysis": [
      "Está incorreta: confunde radiação eletromagnética fotónica com matéria gasosa comum.",
      "Está incorreta: confunde Raios X com ondas mecânicas sonoras ou ultrassons.",
      "Está incorreta: é uma fantasia pseudocientífica que viola as leis da conservação da massa e da matéria."
    ],
    "nursingApplication": "O enfermeiro reconhece num raio-X de tórax normal a hipertransparência bilateral dos campos pulmonares e a opacidade branca da silhueta cardíaca e gradil costal."
  },
  {
    "id": 5112,
    "topicId": 5,
    "question": "Durante os cuidados de enfermagem a um doente submetido a procedimentos imagiológicos com radiações, como se aplica na prática o conceito de 'conceito de radiopacidade vs radiotransparência'?",
    "options": [
      "Implica que o enfermeiro retire toda a blindagem de chumbo para que o seu corpo absorva a radiação em substituição do doente.",
      "Traduz-se na seguinte intervenção clínica fundamentada: O enfermeiro reconhece num raio-X de tórax normal a hipertransparência bilateral dos campos pulmonares e a opacidade branca da silhueta cardíaca e gradil costal.",
      "Exige a imersão do doente numa banheira com lixívia concentrada durante 3 horas após o exame radiológico.",
      "Requer a proibição permanente de contacto humano com o doente radiografado durante 6 meses após a radiografia de tórax."
    ],
    "correctIndex": 1,
    "explanation": "A aplicação de enfermagem para conceito de radiopacidade vs radiotransparência baseia-se no princípio: O enfermeiro reconhece num raio-X de tórax normal a hipertransparência bilateral dos campos pulmonares e a opacidade branca da silhueta cardíaca e gradil costal. Esta intervenção garante a segurança radiológica do doente e do profissional.",
    "distractorAnalysis": [
      "Está incorreta: é perigosa e absurda: os profissionais devem proteger-se ativamente e não expor-se voluntariamente à radiação.",
      "Está incorreta: provocaria queimaduras químicas graves; não há qualquer radiação externa que justifique lixívia após Raios X.",
      "Está incorreta: confunde radiografia simples externa (onde não fica qualquer radioatividade no corpo) com contaminação radioativa interna."
    ],
    "nursingApplication": "O enfermeiro reconhece num raio-X de tórax normal a hipertransparência bilateral dos campos pulmonares e a opacidade branca da silhueta cardíaca e gradil costal."
  },
  {
    "id": 5113,
    "topicId": 5,
    "question": "Um enfermeiro analisa os parâmetros biofísicos e os mecanismos de interação em 'conceito de radiopacidade vs radiotransparência'. Qual das seguintes afirmações expressa a correlação científica correta?",
    "options": [
      "A atenuação da radiação é rigorosamente nula em qualquer material, atravessando 10 metros de chumbo maciço sem qualquer perda de intensidade.",
      "O efeito fotoelétrico ocorre com igual probabilidade no ar, na gordura, no músculo e no osso, sendo independente do número atómico Z.",
      "A análise biofísica correta confirma que Os tecidos moles (músculos, coração, fígado) e a gordura apresentam tons intermédios de cinzento radiológico.",
      "A radiação dispersa por espalhamento Compton desaparece espontaneamente se as janelas da sala de exames estiverem abertas."
    ],
    "correctIndex": 2,
    "explanation": "A correlação científica correta demonstra que Os tecidos moles (músculos, coração, fígado) e a gordura apresentam tons intermédios de cinzento radiológico. O domínio destes fundamentos permite ao enfermeiro assegurar a correta radioproteção e a interpretação dos riscos radiológicos.",
    "distractorAnalysis": [
      "Está incorreta: ignora a Lei de atenuação exponencial da radiação e a eficácia comprovada do chumbo como blindagem protetora.",
      "Está incorreta: nega a dependência estrita em Z³ do efeito fotoelétrico, que é a base física do contraste ósseo.",
      "Está incorreta: confunde radiação eletromagnética ionizante em linha reta com correntes de ar atmosférico."
    ],
    "nursingApplication": "O enfermeiro reconhece num raio-X de tórax normal a hipertransparência bilateral dos campos pulmonares e a opacidade branca da silhueta cardíaca e gradil costal."
  },
  {
    "id": 5114,
    "topicId": 5,
    "question": "Na física das radiações ionizantes e Raios X aplicada ao contexto hospitalar, em relação a 'meios de contraste iodados hidrossolúveis em angiografia e TC', qual é a fundamentação científica exata?",
    "options": [
      "Os Raios X são constituídos por partículas gasosas de oxigénio líquido que evaporam instantaneamente à temperatura da sala.",
      "Trata-se de uma radiação puramente acústica e ultrassónica inaudível gerada pelo atrito das rodas da cama hospitalar.",
      "A radiação ionizante anula todas as ligações químicas do organismo humano transformando o doente num holograma sem massa.",
      "o iodo possui um elevado número atómico (Z = 53) e uma energia de ligação da camada K de 33,2 keV que coincide idealmente com o espetro diagnóstico. Quando injetado por via endovenosa, preenche o lúmen dos vasos e órgãos irrigados, tornando-os intensamente radiopacos e opacos aos Raios X."
    ],
    "correctIndex": 3,
    "explanation": "Em física das radiações e imagiologia médica, meios de contraste iodados hidrossolúveis em angiografia e TC explica-se pelo facto de que o iodo possui um elevado número atómico (Z = 53) e uma energia de ligação da camada K de 33,2 keV que coincide idealmente com o espetro diagnóstico. Quando injetado por via endovenosa, preenche o lúmen dos vasos e órgãos irrigados, tornando-os intensamente radiopacos e opacos aos Raios X.",
    "distractorAnalysis": [
      "Está incorreta: confunde radiação eletromagnética fotónica com matéria gasosa comum.",
      "Está incorreta: confunde Raios X com ondas mecânicas sonoras ou ultrassons.",
      "Está incorreta: é uma fantasia pseudocientífica que viola as leis da conservação da massa e da matéria."
    ],
    "nursingApplication": "O enfermeiro administra o contraste iodado por cateter venoso periférico calibroso (18G ou 20G) com bomba injetora de alta pressão, vigiando a permeabilidade da veia para prevenir extravasamentos."
  },
  {
    "id": 5115,
    "topicId": 5,
    "question": "Durante os cuidados de enfermagem a um doente submetido a procedimentos imagiológicos com radiações, como se aplica na prática o conceito de 'meios de contraste iodados hidrossolúveis em angiografia e TC'?",
    "options": [
      "Traduz-se na seguinte intervenção clínica fundamentada: O enfermeiro administra o contraste iodado por cateter venoso periférico calibroso (18G ou 20G) com bomba injetora de alta pressão, vigiando a permeabilidade da veia para prevenir extravasamentos.",
      "Implica que o enfermeiro retire toda a blindagem de chumbo para que o seu corpo absorva a radiação em substituição do doente.",
      "Exige a imersão do doente numa banheira com lixívia concentrada durante 3 horas após o exame radiológico.",
      "Requer a proibição permanente de contacto humano com o doente radiografado durante 6 meses após a radiografia de tórax."
    ],
    "correctIndex": 0,
    "explanation": "A aplicação de enfermagem para meios de contraste iodados hidrossolúveis em angiografia e TC baseia-se no princípio: O enfermeiro administra o contraste iodado por cateter venoso periférico calibroso (18G ou 20G) com bomba injetora de alta pressão, vigiando a permeabilidade da veia para prevenir extravasamentos. Esta intervenção garante a segurança radiológica do doente e do profissional.",
    "distractorAnalysis": [
      "Está incorreta: é perigosa e absurda: os profissionais devem proteger-se ativamente e não expor-se voluntariamente à radiação.",
      "Está incorreta: provocaria queimaduras químicas graves; não há qualquer radiação externa que justifique lixívia após Raios X.",
      "Está incorreta: confunde radiografia simples externa (onde não fica qualquer radioatividade no corpo) com contaminação radioativa interna."
    ],
    "nursingApplication": "O enfermeiro administra o contraste iodado por cateter venoso periférico calibroso (18G ou 20G) com bomba injetora de alta pressão, vigiando a permeabilidade da veia para prevenir extravasamentos."
  },
  {
    "id": 5116,
    "topicId": 5,
    "question": "Um enfermeiro analisa os parâmetros biofísicos e os mecanismos de interação em 'meios de contraste iodados hidrossolúveis em angiografia e TC'. Qual das seguintes afirmações expressa a correlação científica correta?",
    "options": [
      "A atenuação da radiação é rigorosamente nula em qualquer material, atravessando 10 metros de chumbo maciço sem qualquer perda de intensidade.",
      "A análise biofísica correta confirma que Quando injetado por via endovenosa, preenche o lúmen dos vasos e órgãos irrigados, tornando-os intensamente radiopacos e opacos aos Raios X.",
      "O efeito fotoelétrico ocorre com igual probabilidade no ar, na gordura, no músculo e no osso, sendo independente do número atómico Z.",
      "A radiação dispersa por espalhamento Compton desaparece espontaneamente se as janelas da sala de exames estiverem abertas."
    ],
    "correctIndex": 1,
    "explanation": "A correlação científica correta demonstra que Quando injetado por via endovenosa, preenche o lúmen dos vasos e órgãos irrigados, tornando-os intensamente radiopacos e opacos aos Raios X. O domínio destes fundamentos permite ao enfermeiro assegurar a correta radioproteção e a interpretação dos riscos radiológicos.",
    "distractorAnalysis": [
      "Está incorreta: ignora a Lei de atenuação exponencial da radiação e a eficácia comprovada do chumbo como blindagem protetora.",
      "Está incorreta: nega a dependência estrita em Z³ do efeito fotoelétrico, que é a base física do contraste ósseo.",
      "Está incorreta: confunde radiação eletromagnética ionizante em linha reta com correntes de ar atmosférico."
    ],
    "nursingApplication": "O enfermeiro administra o contraste iodado por cateter venoso periférico calibroso (18G ou 20G) com bomba injetora de alta pressão, vigiando a permeabilidade da veia para prevenir extravasamentos."
  },
  {
    "id": 5117,
    "topicId": 5,
    "question": "Na física das radiações ionizantes e Raios X aplicada ao contexto hospitalar, em relação a 'risco de nefropatia induzida por contraste (NIC) e hidratação prévia', qual é a fundamentação científica exata?",
    "options": [
      "Os Raios X são constituídos por partículas gasosas de oxigénio líquido que evaporam instantaneamente à temperatura da sala.",
      "Trata-se de uma radiação puramente acústica e ultrassónica inaudível gerada pelo atrito das rodas da cama hospitalar.",
      "as moléculas de contraste iodado têm alta osmolalidade e viscosidade, induzindo vasoconstrição renal sustentada e toxicidade tubular direta nas células dos túbulos renais. Em doentes diabéticos ou com insuficiência renal prévia, o risco de lesão renal aguda após TC contrastada é significativo.",
      "A radiação ionizante anula todas as ligações químicas do organismo humano transformando o doente num holograma sem massa."
    ],
    "correctIndex": 2,
    "explanation": "Em física das radiações e imagiologia médica, risco de nefropatia induzida por contraste (NIC) e hidratação prévia explica-se pelo facto de que as moléculas de contraste iodado têm alta osmolalidade e viscosidade, induzindo vasoconstrição renal sustentada e toxicidade tubular direta nas células dos túbulos renais. Em doentes diabéticos ou com insuficiência renal prévia, o risco de lesão renal aguda após TC contrastada é significativo.",
    "distractorAnalysis": [
      "Está incorreta: confunde radiação eletromagnética fotónica com matéria gasosa comum.",
      "Está incorreta: confunde Raios X com ondas mecânicas sonoras ou ultrassons.",
      "Está incorreta: é uma fantasia pseudocientífica que viola as leis da conservação da massa e da matéria."
    ],
    "nursingApplication": "O enfermeiro verifica previamente os valores de creatinina e taxa de filtração glomerular (TFG) e administra o protocolo de hidratação endovenosa profilática com soro fisiológico a 0,9% antes e após o exame."
  },
  {
    "id": 5118,
    "topicId": 5,
    "question": "Durante os cuidados de enfermagem a um doente submetido a procedimentos imagiológicos com radiações, como se aplica na prática o conceito de 'risco de nefropatia induzida por contraste (NIC) e hidratação prévia'?",
    "options": [
      "Implica que o enfermeiro retire toda a blindagem de chumbo para que o seu corpo absorva a radiação em substituição do doente.",
      "Exige a imersão do doente numa banheira com lixívia concentrada durante 3 horas após o exame radiológico.",
      "Requer a proibição permanente de contacto humano com o doente radiografado durante 6 meses após a radiografia de tórax.",
      "Traduz-se na seguinte intervenção clínica fundamentada: O enfermeiro verifica previamente os valores de creatinina e taxa de filtração glomerular (TFG) e administra o protocolo de hidratação endovenosa profilática com soro fisiológico a 0,9% antes e após o exame."
    ],
    "correctIndex": 3,
    "explanation": "A aplicação de enfermagem para risco de nefropatia induzida por contraste (NIC) e hidratação prévia baseia-se no princípio: O enfermeiro verifica previamente os valores de creatinina e taxa de filtração glomerular (TFG) e administra o protocolo de hidratação endovenosa profilática com soro fisiológico a 0,9% antes e após o exame. Esta intervenção garante a segurança radiológica do doente e do profissional.",
    "distractorAnalysis": [
      "Está incorreta: é perigosa e absurda: os profissionais devem proteger-se ativamente e não expor-se voluntariamente à radiação.",
      "Está incorreta: provocaria queimaduras químicas graves; não há qualquer radiação externa que justifique lixívia após Raios X.",
      "Está incorreta: confunde radiografia simples externa (onde não fica qualquer radioatividade no corpo) com contaminação radioativa interna."
    ],
    "nursingApplication": "O enfermeiro verifica previamente os valores de creatinina e taxa de filtração glomerular (TFG) e administra o protocolo de hidratação endovenosa profilática com soro fisiológico a 0,9% antes e após o exame."
  },
  {
    "id": 5119,
    "topicId": 5,
    "question": "Um enfermeiro analisa os parâmetros biofísicos e os mecanismos de interação em 'risco de nefropatia induzida por contraste (NIC) e hidratação prévia'. Qual das seguintes afirmações expressa a correlação científica correta?",
    "options": [
      "A análise biofísica correta confirma que Em doentes diabéticos ou com insuficiência renal prévia, o risco de lesão renal aguda após TC contrastada é significativo.",
      "A atenuação da radiação é rigorosamente nula em qualquer material, atravessando 10 metros de chumbo maciço sem qualquer perda de intensidade.",
      "O efeito fotoelétrico ocorre com igual probabilidade no ar, na gordura, no músculo e no osso, sendo independente do número atómico Z.",
      "A radiação dispersa por espalhamento Compton desaparece espontaneamente se as janelas da sala de exames estiverem abertas."
    ],
    "correctIndex": 0,
    "explanation": "A correlação científica correta demonstra que Em doentes diabéticos ou com insuficiência renal prévia, o risco de lesão renal aguda após TC contrastada é significativo. O domínio destes fundamentos permite ao enfermeiro assegurar a correta radioproteção e a interpretação dos riscos radiológicos.",
    "distractorAnalysis": [
      "Está incorreta: ignora a Lei de atenuação exponencial da radiação e a eficácia comprovada do chumbo como blindagem protetora.",
      "Está incorreta: nega a dependência estrita em Z³ do efeito fotoelétrico, que é a base física do contraste ósseo.",
      "Está incorreta: confunde radiação eletromagnética ionizante em linha reta com correntes de ar atmosférico."
    ],
    "nursingApplication": "O enfermeiro verifica previamente os valores de creatinina e taxa de filtração glomerular (TFG) e administra o protocolo de hidratação endovenosa profilática com soro fisiológico a 0,9% antes e após o exame."
  },
  {
    "id": 5120,
    "topicId": 5,
    "question": "Na física das radiações ionizantes e Raios X aplicada ao contexto hospitalar, em relação a 'meios de contraste de sulfato de bário na radiologia digestiva', qual é a fundamentação científica exata?",
    "options": [
      "Os Raios X são constituídos por partículas gasosas de oxigénio líquido que evaporam instantaneamente à temperatura da sala.",
      "o bário (Z = 56) é administrado por via oral ou retal sob a forma de suspensão insolúvel de sulfato de bário (BaSO₄) para opacificar o esófago, estômago e cólon. Por ser totalmente insolúvel em água, não é absorvido pela mucosa gastrointestinal íntegra e não atinge a circulação sistémica.",
      "Trata-se de uma radiação puramente acústica e ultrassónica inaudível gerada pelo atrito das rodas da cama hospitalar.",
      "A radiação ionizante anula todas as ligações químicas do organismo humano transformando o doente num holograma sem massa."
    ],
    "correctIndex": 1,
    "explanation": "Em física das radiações e imagiologia médica, meios de contraste de sulfato de bário na radiologia digestiva explica-se pelo facto de que o bário (Z = 56) é administrado por via oral ou retal sob a forma de suspensão insolúvel de sulfato de bário (BaSO₄) para opacificar o esófago, estômago e cólon. Por ser totalmente insolúvel em água, não é absorvido pela mucosa gastrointestinal íntegra e não atinge a circulação sistémica.",
    "distractorAnalysis": [
      "Está incorreta: confunde radiação eletromagnética fotónica com matéria gasosa comum.",
      "Está incorreta: confunde Raios X com ondas mecânicas sonoras ou ultrassons.",
      "Está incorreta: é uma fantasia pseudocientífica que viola as leis da conservação da massa e da matéria."
    ],
    "nursingApplication": "É formalmente contraindicado perante suspeita de perfuração do trato digestivo: o enfermeiro alerta que a saída de bário para a cavidade peritoneal causa peritonite química gravíssima com choque séptico."
  },
  {
    "id": 5121,
    "topicId": 5,
    "question": "Durante os cuidados de enfermagem a um doente submetido a procedimentos imagiológicos com radiações, como se aplica na prática o conceito de 'meios de contraste de sulfato de bário na radiologia digestiva'?",
    "options": [
      "Implica que o enfermeiro retire toda a blindagem de chumbo para que o seu corpo absorva a radiação em substituição do doente.",
      "Exige a imersão do doente numa banheira com lixívia concentrada durante 3 horas após o exame radiológico.",
      "Traduz-se na seguinte intervenção clínica fundamentada: É formalmente contraindicado perante suspeita de perfuração do trato digestivo: o enfermeiro alerta que a saída de bário para a cavidade peritoneal causa peritonite química gravíssima com choque séptico.",
      "Requer a proibição permanente de contacto humano com o doente radiografado durante 6 meses após a radiografia de tórax."
    ],
    "correctIndex": 2,
    "explanation": "A aplicação de enfermagem para meios de contraste de sulfato de bário na radiologia digestiva baseia-se no princípio: É formalmente contraindicado perante suspeita de perfuração do trato digestivo: o enfermeiro alerta que a saída de bário para a cavidade peritoneal causa peritonite química gravíssima com choque séptico. Esta intervenção garante a segurança radiológica do doente e do profissional.",
    "distractorAnalysis": [
      "Está incorreta: é perigosa e absurda: os profissionais devem proteger-se ativamente e não expor-se voluntariamente à radiação.",
      "Está incorreta: provocaria queimaduras químicas graves; não há qualquer radiação externa que justifique lixívia após Raios X.",
      "Está incorreta: confunde radiografia simples externa (onde não fica qualquer radioatividade no corpo) com contaminação radioativa interna."
    ],
    "nursingApplication": "É formalmente contraindicado perante suspeita de perfuração do trato digestivo: o enfermeiro alerta que a saída de bário para a cavidade peritoneal causa peritonite química gravíssima com choque séptico."
  },
  {
    "id": 5122,
    "topicId": 5,
    "question": "Um enfermeiro analisa os parâmetros biofísicos e os mecanismos de interação em 'meios de contraste de sulfato de bário na radiologia digestiva'. Qual das seguintes afirmações expressa a correlação científica correta?",
    "options": [
      "A atenuação da radiação é rigorosamente nula em qualquer material, atravessando 10 metros de chumbo maciço sem qualquer perda de intensidade.",
      "O efeito fotoelétrico ocorre com igual probabilidade no ar, na gordura, no músculo e no osso, sendo independente do número atómico Z.",
      "A radiação dispersa por espalhamento Compton desaparece espontaneamente se as janelas da sala de exames estiverem abertas.",
      "A análise biofísica correta confirma que Por ser totalmente insolúvel em água, não é absorvido pela mucosa gastrointestinal íntegra e não atinge a circulação sistémica."
    ],
    "correctIndex": 3,
    "explanation": "A correlação científica correta demonstra que Por ser totalmente insolúvel em água, não é absorvido pela mucosa gastrointestinal íntegra e não atinge a circulação sistémica. O domínio destes fundamentos permite ao enfermeiro assegurar a correta radioproteção e a interpretação dos riscos radiológicos.",
    "distractorAnalysis": [
      "Está incorreta: ignora a Lei de atenuação exponencial da radiação e a eficácia comprovada do chumbo como blindagem protetora.",
      "Está incorreta: nega a dependência estrita em Z³ do efeito fotoelétrico, que é a base física do contraste ósseo.",
      "Está incorreta: confunde radiação eletromagnética ionizante em linha reta com correntes de ar atmosférico."
    ],
    "nursingApplication": "É formalmente contraindicado perante suspeita de perfuração do trato digestivo: o enfermeiro alerta que a saída de bário para a cavidade peritoneal causa peritonite química gravíssima com choque séptico."
  },
  {
    "id": 5123,
    "topicId": 5,
    "question": "Na física das radiações ionizantes e Raios X aplicada ao contexto hospitalar, em relação a 'reações anafilactoides a meios de contraste e cuidados de emergência', qual é a fundamentação científica exata?",
    "options": [
      "os contrastes iodados podem desencadear reações pseudoalérgicas por desgranulação direta de mastócitos e basófilos com libertação súbita de histamina. Os sintomas variam desde urticária e rubor ligeiro até broncoespasmo severo, edema da glote e choque anafilactoide com colapso cardiovascular.",
      "Os Raios X são constituídos por partículas gasosas de oxigénio líquido que evaporam instantaneamente à temperatura da sala.",
      "Trata-se de uma radiação puramente acústica e ultrassónica inaudível gerada pelo atrito das rodas da cama hospitalar.",
      "A radiação ionizante anula todas as ligações químicas do organismo humano transformando o doente num holograma sem massa."
    ],
    "correctIndex": 0,
    "explanation": "Em física das radiações e imagiologia médica, reações anafilactoides a meios de contraste e cuidados de emergência explica-se pelo facto de que os contrastes iodados podem desencadear reações pseudoalérgicas por desgranulação direta de mastócitos e basófilos com libertação súbita de histamina. Os sintomas variam desde urticária e rubor ligeiro até broncoespasmo severo, edema da glote e choque anafilactoide com colapso cardiovascular.",
    "distractorAnalysis": [
      "Está incorreta: confunde radiação eletromagnética fotónica com matéria gasosa comum.",
      "Está incorreta: confunde Raios X com ondas mecânicas sonoras ou ultrassons.",
      "Está incorreta: é uma fantasia pseudocientífica que viola as leis da conservação da massa e da matéria."
    ],
    "nursingApplication": "O enfermeiro mantém o carrinho de emergência devidamente equipado na sala de imagiologia com adrenalina, corticosteroides, anti-histamínicos e equipamento de oxigenoterapia e aspiração de vias aéreas."
  },
  {
    "id": 5124,
    "topicId": 5,
    "question": "Durante os cuidados de enfermagem a um doente submetido a procedimentos imagiológicos com radiações, como se aplica na prática o conceito de 'reações anafilactoides a meios de contraste e cuidados de emergência'?",
    "options": [
      "Implica que o enfermeiro retire toda a blindagem de chumbo para que o seu corpo absorva a radiação em substituição do doente.",
      "Traduz-se na seguinte intervenção clínica fundamentada: O enfermeiro mantém o carrinho de emergência devidamente equipado na sala de imagiologia com adrenalina, corticosteroides, anti-histamínicos e equipamento de oxigenoterapia e aspiração de vias aéreas.",
      "Exige a imersão do doente numa banheira com lixívia concentrada durante 3 horas após o exame radiológico.",
      "Requer a proibição permanente de contacto humano com o doente radiografado durante 6 meses após a radiografia de tórax."
    ],
    "correctIndex": 1,
    "explanation": "A aplicação de enfermagem para reações anafilactoides a meios de contraste e cuidados de emergência baseia-se no princípio: O enfermeiro mantém o carrinho de emergência devidamente equipado na sala de imagiologia com adrenalina, corticosteroides, anti-histamínicos e equipamento de oxigenoterapia e aspiração de vias aéreas. Esta intervenção garante a segurança radiológica do doente e do profissional.",
    "distractorAnalysis": [
      "Está incorreta: é perigosa e absurda: os profissionais devem proteger-se ativamente e não expor-se voluntariamente à radiação.",
      "Está incorreta: provocaria queimaduras químicas graves; não há qualquer radiação externa que justifique lixívia após Raios X.",
      "Está incorreta: confunde radiografia simples externa (onde não fica qualquer radioatividade no corpo) com contaminação radioativa interna."
    ],
    "nursingApplication": "O enfermeiro mantém o carrinho de emergência devidamente equipado na sala de imagiologia com adrenalina, corticosteroides, anti-histamínicos e equipamento de oxigenoterapia e aspiração de vias aéreas."
  },
  {
    "id": 5125,
    "topicId": 5,
    "question": "Um enfermeiro analisa os parâmetros biofísicos e os mecanismos de interação em 'reações anafilactoides a meios de contraste e cuidados de emergência'. Qual das seguintes afirmações expressa a correlação científica correta?",
    "options": [
      "A atenuação da radiação é rigorosamente nula em qualquer material, atravessando 10 metros de chumbo maciço sem qualquer perda de intensidade.",
      "O efeito fotoelétrico ocorre com igual probabilidade no ar, na gordura, no músculo e no osso, sendo independente do número atómico Z.",
      "A análise biofísica correta confirma que Os sintomas variam desde urticária e rubor ligeiro até broncoespasmo severo, edema da glote e choque anafilactoide com colapso cardiovascular.",
      "A radiação dispersa por espalhamento Compton desaparece espontaneamente se as janelas da sala de exames estiverem abertas."
    ],
    "correctIndex": 2,
    "explanation": "A correlação científica correta demonstra que Os sintomas variam desde urticária e rubor ligeiro até broncoespasmo severo, edema da glote e choque anafilactoide com colapso cardiovascular. O domínio destes fundamentos permite ao enfermeiro assegurar a correta radioproteção e a interpretação dos riscos radiológicos.",
    "distractorAnalysis": [
      "Está incorreta: ignora a Lei de atenuação exponencial da radiação e a eficácia comprovada do chumbo como blindagem protetora.",
      "Está incorreta: nega a dependência estrita em Z³ do efeito fotoelétrico, que é a base física do contraste ósseo.",
      "Está incorreta: confunde radiação eletromagnética ionizante em linha reta com correntes de ar atmosférico."
    ],
    "nursingApplication": "O enfermeiro mantém o carrinho de emergência devidamente equipado na sala de imagiologia com adrenalina, corticosteroides, anti-histamínicos e equipamento de oxigenoterapia e aspiração de vias aéreas."
  },
  {
    "id": 5126,
    "topicId": 5,
    "question": "Na física das radiações ionizantes e Raios X aplicada ao contexto hospitalar, em relação a 'princípio de funcionamento e reconstrução tomográfica', qual é a fundamentação científica exata?",
    "options": [
      "Os Raios X são constituídos por partículas gasosas de oxigénio líquido que evaporam instantaneamente à temperatura da sala.",
      "Trata-se de uma radiação puramente acústica e ultrassónica inaudível gerada pelo atrito das rodas da cama hospitalar.",
      "A radiação ionizante anula todas as ligações químicas do organismo humano transformando o doente num holograma sem massa.",
      "um tubo de Raios X e uma coroa de detetores eletrónicos rodam a alta velocidade em redor do corpo do doente enquanto a mesa desliza (aquisição helicoidal multislice). Algoritmos matemáticos complexos (como a retroprojeção filtrada) convertem os múltiplos perfis de atenuação linear num mapa bidimensional e tridimensional de píxeis anatómicos."
    ],
    "correctIndex": 3,
    "explanation": "Em física das radiações e imagiologia médica, princípio de funcionamento e reconstrução tomográfica explica-se pelo facto de que um tubo de Raios X e uma coroa de detetores eletrónicos rodam a alta velocidade em redor do corpo do doente enquanto a mesa desliza (aquisição helicoidal multislice). Algoritmos matemáticos complexos (como a retroprojeção filtrada) convertem os múltiplos perfis de atenuação linear num mapa bidimensional e tridimensional de píxeis anatómicos.",
    "distractorAnalysis": [
      "Está incorreta: confunde radiação eletromagnética fotónica com matéria gasosa comum.",
      "Está incorreta: confunde Raios X com ondas mecânicas sonoras ou ultrassons.",
      "Está incorreta: é uma fantasia pseudocientífica que viola as leis da conservação da massa e da matéria."
    ],
    "nursingApplication": "O enfermeiro posiciona o doente na mesa de TC, alinha os lasers de centragem e explica a necessidade de manter a apneia temporária solicitada pelo aparelho para evitar artefactos respiratórios."
  },
  {
    "id": 5127,
    "topicId": 5,
    "question": "Durante os cuidados de enfermagem a um doente submetido a procedimentos imagiológicos com radiações, como se aplica na prática o conceito de 'princípio de funcionamento e reconstrução tomográfica'?",
    "options": [
      "Traduz-se na seguinte intervenção clínica fundamentada: O enfermeiro posiciona o doente na mesa de TC, alinha os lasers de centragem e explica a necessidade de manter a apneia temporária solicitada pelo aparelho para evitar artefactos respiratórios.",
      "Implica que o enfermeiro retire toda a blindagem de chumbo para que o seu corpo absorva a radiação em substituição do doente.",
      "Exige a imersão do doente numa banheira com lixívia concentrada durante 3 horas após o exame radiológico.",
      "Requer a proibição permanente de contacto humano com o doente radiografado durante 6 meses após a radiografia de tórax."
    ],
    "correctIndex": 0,
    "explanation": "A aplicação de enfermagem para princípio de funcionamento e reconstrução tomográfica baseia-se no princípio: O enfermeiro posiciona o doente na mesa de TC, alinha os lasers de centragem e explica a necessidade de manter a apneia temporária solicitada pelo aparelho para evitar artefactos respiratórios. Esta intervenção garante a segurança radiológica do doente e do profissional.",
    "distractorAnalysis": [
      "Está incorreta: é perigosa e absurda: os profissionais devem proteger-se ativamente e não expor-se voluntariamente à radiação.",
      "Está incorreta: provocaria queimaduras químicas graves; não há qualquer radiação externa que justifique lixívia após Raios X.",
      "Está incorreta: confunde radiografia simples externa (onde não fica qualquer radioatividade no corpo) com contaminação radioativa interna."
    ],
    "nursingApplication": "O enfermeiro posiciona o doente na mesa de TC, alinha os lasers de centragem e explica a necessidade de manter a apneia temporária solicitada pelo aparelho para evitar artefactos respiratórios."
  },
  {
    "id": 5128,
    "topicId": 5,
    "question": "Um enfermeiro analisa os parâmetros biofísicos e os mecanismos de interação em 'princípio de funcionamento e reconstrução tomográfica'. Qual das seguintes afirmações expressa a correlação científica correta?",
    "options": [
      "A atenuação da radiação é rigorosamente nula em qualquer material, atravessando 10 metros de chumbo maciço sem qualquer perda de intensidade.",
      "A análise biofísica correta confirma que Algoritmos matemáticos complexos (como a retroprojeção filtrada) convertem os múltiplos perfis de atenuação linear num mapa bidimensional e tridimensional de píxeis anatómicos.",
      "O efeito fotoelétrico ocorre com igual probabilidade no ar, na gordura, no músculo e no osso, sendo independente do número atómico Z.",
      "A radiação dispersa por espalhamento Compton desaparece espontaneamente se as janelas da sala de exames estiverem abertas."
    ],
    "correctIndex": 1,
    "explanation": "A correlação científica correta demonstra que Algoritmos matemáticos complexos (como a retroprojeção filtrada) convertem os múltiplos perfis de atenuação linear num mapa bidimensional e tridimensional de píxeis anatómicos. O domínio destes fundamentos permite ao enfermeiro assegurar a correta radioproteção e a interpretação dos riscos radiológicos.",
    "distractorAnalysis": [
      "Está incorreta: ignora a Lei de atenuação exponencial da radiação e a eficácia comprovada do chumbo como blindagem protetora.",
      "Está incorreta: nega a dependência estrita em Z³ do efeito fotoelétrico, que é a base física do contraste ósseo.",
      "Está incorreta: confunde radiação eletromagnética ionizante em linha reta com correntes de ar atmosférico."
    ],
    "nursingApplication": "O enfermeiro posiciona o doente na mesa de TC, alinha os lasers de centragem e explica a necessidade de manter a apneia temporária solicitada pelo aparelho para evitar artefactos respiratórios."
  },
  {
    "id": 5129,
    "topicId": 5,
    "question": "Na física das radiações ionizantes e Raios X aplicada ao contexto hospitalar, em relação a 'escala de Unidades Hounsfield (HU) e pontos de calibração', qual é a fundamentação científica exata?",
    "options": [
      "Os Raios X são constituídos por partículas gasosas de oxigénio líquido que evaporam instantaneamente à temperatura da sala.",
      "Trata-se de uma radiação puramente acústica e ultrassónica inaudível gerada pelo atrito das rodas da cama hospitalar.",
      "é a escala numérica internacional de coeficientes de atenuação tomográfica calibrada com água pura a 0 HU e ar atmosférico a -1000 HU. A gordura situa-se entre -50 e -100 HU, os tecidos moles/músculo entre +30 e +50 HU, o sangue coagulado em hematomas entre +60 e +80 HU, e o osso cortical denso entre +1000 e +3000 HU.",
      "A radiação ionizante anula todas as ligações químicas do organismo humano transformando o doente num holograma sem massa."
    ],
    "correctIndex": 2,
    "explanation": "Em física das radiações e imagiologia médica, escala de Unidades Hounsfield (HU) e pontos de calibração explica-se pelo facto de que é a escala numérica internacional de coeficientes de atenuação tomográfica calibrada com água pura a 0 HU e ar atmosférico a -1000 HU. A gordura situa-se entre -50 e -100 HU, os tecidos moles/músculo entre +30 e +50 HU, o sangue coagulado em hematomas entre +60 e +80 HU, e o osso cortical denso entre +1000 e +3000 HU.",
    "distractorAnalysis": [
      "Está incorreta: confunde radiação eletromagnética fotónica com matéria gasosa comum.",
      "Está incorreta: confunde Raios X com ondas mecânicas sonoras ou ultrassons.",
      "Está incorreta: é uma fantasia pseudocientífica que viola as leis da conservação da massa e da matéria."
    ],
    "nursingApplication": "O enfermeiro de neurologia e emergência compreende que no AVC hemorrágico o sangue fresco do hematoma intraparenquimatoso surge branco brilhante e hiperdenso (+70 HU) na TC cerebral sem contraste."
  },
  {
    "id": 5130,
    "topicId": 5,
    "question": "Durante os cuidados de enfermagem a um doente submetido a procedimentos imagiológicos com radiações, como se aplica na prática o conceito de 'escala de Unidades Hounsfield (HU) e pontos de calibração'?",
    "options": [
      "Implica que o enfermeiro retire toda a blindagem de chumbo para que o seu corpo absorva a radiação em substituição do doente.",
      "Exige a imersão do doente numa banheira com lixívia concentrada durante 3 horas após o exame radiológico.",
      "Requer a proibição permanente de contacto humano com o doente radiografado durante 6 meses após a radiografia de tórax.",
      "Traduz-se na seguinte intervenção clínica fundamentada: O enfermeiro de neurologia e emergência compreende que no AVC hemorrágico o sangue fresco do hematoma intraparenquimatoso surge branco brilhante e hiperdenso (+70 HU) na TC cerebral sem contraste."
    ],
    "correctIndex": 3,
    "explanation": "A aplicação de enfermagem para escala de Unidades Hounsfield (HU) e pontos de calibração baseia-se no princípio: O enfermeiro de neurologia e emergência compreende que no AVC hemorrágico o sangue fresco do hematoma intraparenquimatoso surge branco brilhante e hiperdenso (+70 HU) na TC cerebral sem contraste. Esta intervenção garante a segurança radiológica do doente e do profissional.",
    "distractorAnalysis": [
      "Está incorreta: é perigosa e absurda: os profissionais devem proteger-se ativamente e não expor-se voluntariamente à radiação.",
      "Está incorreta: provocaria queimaduras químicas graves; não há qualquer radiação externa que justifique lixívia após Raios X.",
      "Está incorreta: confunde radiografia simples externa (onde não fica qualquer radioatividade no corpo) com contaminação radioativa interna."
    ],
    "nursingApplication": "O enfermeiro de neurologia e emergência compreende que no AVC hemorrágico o sangue fresco do hematoma intraparenquimatoso surge branco brilhante e hiperdenso (+70 HU) na TC cerebral sem contraste."
  },
  {
    "id": 5131,
    "topicId": 5,
    "question": "Um enfermeiro analisa os parâmetros biofísicos e os mecanismos de interação em 'escala de Unidades Hounsfield (HU) e pontos de calibração'. Qual das seguintes afirmações expressa a correlação científica correta?",
    "options": [
      "A análise biofísica correta confirma que A gordura situa-se entre -50 e -100 HU, os tecidos moles/músculo entre +30 e +50 HU, o sangue coagulado em hematomas entre +60 e +80 HU, e o osso cortical denso entre +1000 e +3000 HU.",
      "A atenuação da radiação é rigorosamente nula em qualquer material, atravessando 10 metros de chumbo maciço sem qualquer perda de intensidade.",
      "O efeito fotoelétrico ocorre com igual probabilidade no ar, na gordura, no músculo e no osso, sendo independente do número atómico Z.",
      "A radiação dispersa por espalhamento Compton desaparece espontaneamente se as janelas da sala de exames estiverem abertas."
    ],
    "correctIndex": 0,
    "explanation": "A correlação científica correta demonstra que A gordura situa-se entre -50 e -100 HU, os tecidos moles/músculo entre +30 e +50 HU, o sangue coagulado em hematomas entre +60 e +80 HU, e o osso cortical denso entre +1000 e +3000 HU. O domínio destes fundamentos permite ao enfermeiro assegurar a correta radioproteção e a interpretação dos riscos radiológicos.",
    "distractorAnalysis": [
      "Está incorreta: ignora a Lei de atenuação exponencial da radiação e a eficácia comprovada do chumbo como blindagem protetora.",
      "Está incorreta: nega a dependência estrita em Z³ do efeito fotoelétrico, que é a base física do contraste ósseo.",
      "Está incorreta: confunde radiação eletromagnética ionizante em linha reta com correntes de ar atmosférico."
    ],
    "nursingApplication": "O enfermeiro de neurologia e emergência compreende que no AVC hemorrágico o sangue fresco do hematoma intraparenquimatoso surge branco brilhante e hiperdenso (+70 HU) na TC cerebral sem contraste."
  },
  {
    "id": 5132,
    "topicId": 5,
    "question": "Na física das radiações ionizantes e Raios X aplicada ao contexto hospitalar, em relação a 'conceito de janela tomográfica (Window Width e Window Level)', qual é a fundamentação científica exata?",
    "options": [
      "Os Raios X são constituídos por partículas gasosas de oxigénio líquido que evaporam instantaneamente à temperatura da sala.",
      "a janela tomográfica permite selecionar uma faixa restrita de valores HU (Largura, WW) centrada num determinado valor de atenuação (Nível, WL) para maximizar o contraste da estrutura alvo. Por exemplo, a janela óssea utiliza WW ampla para ver detalhe trabecular e cortical, enquanto a janela de mediastino ou cerebral evidencia pequenas diferenças entre tecidos moles.",
      "Trata-se de uma radiação puramente acústica e ultrassónica inaudível gerada pelo atrito das rodas da cama hospitalar.",
      "A radiação ionizante anula todas as ligações químicas do organismo humano transformando o doente num holograma sem massa."
    ],
    "correctIndex": 1,
    "explanation": "Em física das radiações e imagiologia médica, conceito de janela tomográfica (Window Width e Window Level) explica-se pelo facto de que a janela tomográfica permite selecionar uma faixa restrita de valores HU (Largura, WW) centrada num determinado valor de atenuação (Nível, WL) para maximizar o contraste da estrutura alvo. Por exemplo, a janela óssea utiliza WW ampla para ver detalhe trabecular e cortical, enquanto a janela de mediastino ou cerebral evidencia pequenas diferenças entre tecidos moles.",
    "distractorAnalysis": [
      "Está incorreta: confunde radiação eletromagnética fotónica com matéria gasosa comum.",
      "Está incorreta: confunde Raios X com ondas mecânicas sonoras ou ultrassons.",
      "Está incorreta: é uma fantasia pseudocientífica que viola as leis da conservação da massa e da matéria."
    ],
    "nursingApplication": "O enfermeiro sabe que uma TC cerebral pode aparentar normalidade em janela óssea mas revelar isquemia precoce ou edema citotóxico na janela de parênquima cerebral."
  },
  {
    "id": 5133,
    "topicId": 5,
    "question": "Durante os cuidados de enfermagem a um doente submetido a procedimentos imagiológicos com radiações, como se aplica na prática o conceito de 'conceito de janela tomográfica (Window Width e Window Level)'?",
    "options": [
      "Implica que o enfermeiro retire toda a blindagem de chumbo para que o seu corpo absorva a radiação em substituição do doente.",
      "Exige a imersão do doente numa banheira com lixívia concentrada durante 3 horas após o exame radiológico.",
      "Traduz-se na seguinte intervenção clínica fundamentada: O enfermeiro sabe que uma TC cerebral pode aparentar normalidade em janela óssea mas revelar isquemia precoce ou edema citotóxico na janela de parênquima cerebral.",
      "Requer a proibição permanente de contacto humano com o doente radiografado durante 6 meses após a radiografia de tórax."
    ],
    "correctIndex": 2,
    "explanation": "A aplicação de enfermagem para conceito de janela tomográfica (Window Width e Window Level) baseia-se no princípio: O enfermeiro sabe que uma TC cerebral pode aparentar normalidade em janela óssea mas revelar isquemia precoce ou edema citotóxico na janela de parênquima cerebral. Esta intervenção garante a segurança radiológica do doente e do profissional.",
    "distractorAnalysis": [
      "Está incorreta: é perigosa e absurda: os profissionais devem proteger-se ativamente e não expor-se voluntariamente à radiação.",
      "Está incorreta: provocaria queimaduras químicas graves; não há qualquer radiação externa que justifique lixívia após Raios X.",
      "Está incorreta: confunde radiografia simples externa (onde não fica qualquer radioatividade no corpo) com contaminação radioativa interna."
    ],
    "nursingApplication": "O enfermeiro sabe que uma TC cerebral pode aparentar normalidade em janela óssea mas revelar isquemia precoce ou edema citotóxico na janela de parênquima cerebral."
  },
  {
    "id": 5134,
    "topicId": 5,
    "question": "Um enfermeiro analisa os parâmetros biofísicos e os mecanismos de interação em 'conceito de janela tomográfica (Window Width e Window Level)'. Qual das seguintes afirmações expressa a correlação científica correta?",
    "options": [
      "A atenuação da radiação é rigorosamente nula em qualquer material, atravessando 10 metros de chumbo maciço sem qualquer perda de intensidade.",
      "O efeito fotoelétrico ocorre com igual probabilidade no ar, na gordura, no músculo e no osso, sendo independente do número atómico Z.",
      "A radiação dispersa por espalhamento Compton desaparece espontaneamente se as janelas da sala de exames estiverem abertas.",
      "A análise biofísica correta confirma que Por exemplo, a janela óssea utiliza WW ampla para ver detalhe trabecular e cortical, enquanto a janela de mediastino ou cerebral evidencia pequenas diferenças entre tecidos moles."
    ],
    "correctIndex": 3,
    "explanation": "A correlação científica correta demonstra que Por exemplo, a janela óssea utiliza WW ampla para ver detalhe trabecular e cortical, enquanto a janela de mediastino ou cerebral evidencia pequenas diferenças entre tecidos moles. O domínio destes fundamentos permite ao enfermeiro assegurar a correta radioproteção e a interpretação dos riscos radiológicos.",
    "distractorAnalysis": [
      "Está incorreta: ignora a Lei de atenuação exponencial da radiação e a eficácia comprovada do chumbo como blindagem protetora.",
      "Está incorreta: nega a dependência estrita em Z³ do efeito fotoelétrico, que é a base física do contraste ósseo.",
      "Está incorreta: confunde radiação eletromagnética ionizante em linha reta com correntes de ar atmosférico."
    ],
    "nursingApplication": "O enfermeiro sabe que uma TC cerebral pode aparentar normalidade em janela óssea mas revelar isquemia precoce ou edema citotóxico na janela de parênquima cerebral."
  },
  {
    "id": 5135,
    "topicId": 5,
    "question": "Na física das radiações ionizantes e Raios X aplicada ao contexto hospitalar, em relação a 'doses de radiação em Tomografia Computorizada comparadas com radiografia convencional', qual é a fundamentação científica exata?",
    "options": [
      "uma TC de tórax ou de abdómen-pélvis transfere uma dose efetiva de radiação entre 5 e 15 mSv, equivalente a centenas de radiografias simples de tórax convencionais. A grande exposição à radiação exige rigorosa justificação clínica segundo as diretrizes ALARA, evitando exames repetitivos em doentes jovens ou pediátricos.",
      "Os Raios X são constituídos por partículas gasosas de oxigénio líquido que evaporam instantaneamente à temperatura da sala.",
      "Trata-se de uma radiação puramente acústica e ultrassónica inaudível gerada pelo atrito das rodas da cama hospitalar.",
      "A radiação ionizante anula todas as ligações químicas do organismo humano transformando o doente num holograma sem massa."
    ],
    "correctIndex": 0,
    "explanation": "Em física das radiações e imagiologia médica, doses de radiação em Tomografia Computorizada comparadas com radiografia convencional explica-se pelo facto de que uma TC de tórax ou de abdómen-pélvis transfere uma dose efetiva de radiação entre 5 e 15 mSv, equivalente a centenas de radiografias simples de tórax convencionais. A grande exposição à radiação exige rigorosa justificação clínica segundo as diretrizes ALARA, evitando exames repetitivos em doentes jovens ou pediátricos.",
    "distractorAnalysis": [
      "Está incorreta: confunde radiação eletromagnética fotónica com matéria gasosa comum.",
      "Está incorreta: confunde Raios X com ondas mecânicas sonoras ou ultrassons.",
      "Está incorreta: é uma fantasia pseudocientífica que viola as leis da conservação da massa e da matéria."
    ],
    "nursingApplication": "O enfermeiro questiona a existência de exames imagiológicos prévios recentes e verifica a correta justificação médica antes de encaminhar o doente para exames de TC sucessivos."
  },
  {
    "id": 5136,
    "topicId": 5,
    "question": "Durante os cuidados de enfermagem a um doente submetido a procedimentos imagiológicos com radiações, como se aplica na prática o conceito de 'doses de radiação em Tomografia Computorizada comparadas com radiografia convencional'?",
    "options": [
      "Implica que o enfermeiro retire toda a blindagem de chumbo para que o seu corpo absorva a radiação em substituição do doente.",
      "Traduz-se na seguinte intervenção clínica fundamentada: O enfermeiro questiona a existência de exames imagiológicos prévios recentes e verifica a correta justificação médica antes de encaminhar o doente para exames de TC sucessivos.",
      "Exige a imersão do doente numa banheira com lixívia concentrada durante 3 horas após o exame radiológico.",
      "Requer a proibição permanente de contacto humano com o doente radiografado durante 6 meses após a radiografia de tórax."
    ],
    "correctIndex": 1,
    "explanation": "A aplicação de enfermagem para doses de radiação em Tomografia Computorizada comparadas com radiografia convencional baseia-se no princípio: O enfermeiro questiona a existência de exames imagiológicos prévios recentes e verifica a correta justificação médica antes de encaminhar o doente para exames de TC sucessivos. Esta intervenção garante a segurança radiológica do doente e do profissional.",
    "distractorAnalysis": [
      "Está incorreta: é perigosa e absurda: os profissionais devem proteger-se ativamente e não expor-se voluntariamente à radiação.",
      "Está incorreta: provocaria queimaduras químicas graves; não há qualquer radiação externa que justifique lixívia após Raios X.",
      "Está incorreta: confunde radiografia simples externa (onde não fica qualquer radioatividade no corpo) com contaminação radioativa interna."
    ],
    "nursingApplication": "O enfermeiro questiona a existência de exames imagiológicos prévios recentes e verifica a correta justificação médica antes de encaminhar o doente para exames de TC sucessivos."
  },
  {
    "id": 5137,
    "topicId": 5,
    "question": "Um enfermeiro analisa os parâmetros biofísicos e os mecanismos de interação em 'doses de radiação em Tomografia Computorizada comparadas com radiografia convencional'. Qual das seguintes afirmações expressa a correlação científica correta?",
    "options": [
      "A atenuação da radiação é rigorosamente nula em qualquer material, atravessando 10 metros de chumbo maciço sem qualquer perda de intensidade.",
      "O efeito fotoelétrico ocorre com igual probabilidade no ar, na gordura, no músculo e no osso, sendo independente do número atómico Z.",
      "A análise biofísica correta confirma que A grande exposição à radiação exige rigorosa justificação clínica segundo as diretrizes ALARA, evitando exames repetitivos em doentes jovens ou pediátricos.",
      "A radiação dispersa por espalhamento Compton desaparece espontaneamente se as janelas da sala de exames estiverem abertas."
    ],
    "correctIndex": 2,
    "explanation": "A correlação científica correta demonstra que A grande exposição à radiação exige rigorosa justificação clínica segundo as diretrizes ALARA, evitando exames repetitivos em doentes jovens ou pediátricos. O domínio destes fundamentos permite ao enfermeiro assegurar a correta radioproteção e a interpretação dos riscos radiológicos.",
    "distractorAnalysis": [
      "Está incorreta: ignora a Lei de atenuação exponencial da radiação e a eficácia comprovada do chumbo como blindagem protetora.",
      "Está incorreta: nega a dependência estrita em Z³ do efeito fotoelétrico, que é a base física do contraste ósseo.",
      "Está incorreta: confunde radiação eletromagnética ionizante em linha reta com correntes de ar atmosférico."
    ],
    "nursingApplication": "O enfermeiro questiona a existência de exames imagiológicos prévios recentes e verifica a correta justificação médica antes de encaminhar o doente para exames de TC sucessivos."
  },
  {
    "id": 5138,
    "topicId": 5,
    "question": "Na física das radiações ionizantes e Raios X aplicada ao contexto hospitalar, em relação a 'artefactos de endurecimento do feixe e corpos estranhos metálicos', qual é a fundamentação científica exata?",
    "options": [
      "Os Raios X são constituídos por partículas gasosas de oxigénio líquido que evaporam instantaneamente à temperatura da sala.",
      "Trata-se de uma radiação puramente acústica e ultrassónica inaudível gerada pelo atrito das rodas da cama hospitalar.",
      "A radiação ionizante anula todas as ligações químicas do organismo humano transformando o doente num holograma sem massa.",
      "ao atravessar objetos densos (próteses metálicas de anca, agrafos cirúrgicos ou amálgamas dentárias), os Raios X de menor energia são todos absorvidos, sobrando apenas os de alta energia. Isto gera riscas escuras e claras radiadas (artefactos em estrela) que ofuscam completamente as estruturas teciduais anatómicas vizinhas."
    ],
    "correctIndex": 3,
    "explanation": "Em física das radiações e imagiologia médica, artefactos de endurecimento do feixe e corpos estranhos metálicos explica-se pelo facto de que ao atravessar objetos densos (próteses metálicas de anca, agrafos cirúrgicos ou amálgamas dentárias), os Raios X de menor energia são todos absorvidos, sobrando apenas os de alta energia. Isto gera riscas escuras e claras radiadas (artefactos em estrela) que ofuscam completamente as estruturas teciduais anatómicas vizinhas.",
    "distractorAnalysis": [
      "Está incorreta: confunde radiação eletromagnética fotónica com matéria gasosa comum.",
      "Está incorreta: confunde Raios X com ondas mecânicas sonoras ou ultrassons.",
      "Está incorreta: é uma fantasia pseudocientífica que viola as leis da conservação da massa e da matéria."
    ],
    "nursingApplication": "O enfermeiro retira todas as joias, próteses dentárias amovíveis, clipes e objetos metálicos da região a examinar antes de iniciar a aquisição tomográfica."
  },
  {
    "id": 5139,
    "topicId": 5,
    "question": "Durante os cuidados de enfermagem a um doente submetido a procedimentos imagiológicos com radiações, como se aplica na prática o conceito de 'artefactos de endurecimento do feixe e corpos estranhos metálicos'?",
    "options": [
      "Traduz-se na seguinte intervenção clínica fundamentada: O enfermeiro retira todas as joias, próteses dentárias amovíveis, clipes e objetos metálicos da região a examinar antes de iniciar a aquisição tomográfica.",
      "Implica que o enfermeiro retire toda a blindagem de chumbo para que o seu corpo absorva a radiação em substituição do doente.",
      "Exige a imersão do doente numa banheira com lixívia concentrada durante 3 horas após o exame radiológico.",
      "Requer a proibição permanente de contacto humano com o doente radiografado durante 6 meses após a radiografia de tórax."
    ],
    "correctIndex": 0,
    "explanation": "A aplicação de enfermagem para artefactos de endurecimento do feixe e corpos estranhos metálicos baseia-se no princípio: O enfermeiro retira todas as joias, próteses dentárias amovíveis, clipes e objetos metálicos da região a examinar antes de iniciar a aquisição tomográfica. Esta intervenção garante a segurança radiológica do doente e do profissional.",
    "distractorAnalysis": [
      "Está incorreta: é perigosa e absurda: os profissionais devem proteger-se ativamente e não expor-se voluntariamente à radiação.",
      "Está incorreta: provocaria queimaduras químicas graves; não há qualquer radiação externa que justifique lixívia após Raios X.",
      "Está incorreta: confunde radiografia simples externa (onde não fica qualquer radioatividade no corpo) com contaminação radioativa interna."
    ],
    "nursingApplication": "O enfermeiro retira todas as joias, próteses dentárias amovíveis, clipes e objetos metálicos da região a examinar antes de iniciar a aquisição tomográfica."
  },
  {
    "id": 5140,
    "topicId": 5,
    "question": "Um enfermeiro analisa os parâmetros biofísicos e os mecanismos de interação em 'artefactos de endurecimento do feixe e corpos estranhos metálicos'. Qual das seguintes afirmações expressa a correlação científica correta?",
    "options": [
      "A atenuação da radiação é rigorosamente nula em qualquer material, atravessando 10 metros de chumbo maciço sem qualquer perda de intensidade.",
      "A análise biofísica correta confirma que Isto gera riscas escuras e claras radiadas (artefactos em estrela) que ofuscam completamente as estruturas teciduais anatómicas vizinhas.",
      "O efeito fotoelétrico ocorre com igual probabilidade no ar, na gordura, no músculo e no osso, sendo independente do número atómico Z.",
      "A radiação dispersa por espalhamento Compton desaparece espontaneamente se as janelas da sala de exames estiverem abertas."
    ],
    "correctIndex": 1,
    "explanation": "A correlação científica correta demonstra que Isto gera riscas escuras e claras radiadas (artefactos em estrela) que ofuscam completamente as estruturas teciduais anatómicas vizinhas. O domínio destes fundamentos permite ao enfermeiro assegurar a correta radioproteção e a interpretação dos riscos radiológicos.",
    "distractorAnalysis": [
      "Está incorreta: ignora a Lei de atenuação exponencial da radiação e a eficácia comprovada do chumbo como blindagem protetora.",
      "Está incorreta: nega a dependência estrita em Z³ do efeito fotoelétrico, que é a base física do contraste ósseo.",
      "Está incorreta: confunde radiação eletromagnética ionizante em linha reta com correntes de ar atmosférico."
    ],
    "nursingApplication": "O enfermeiro retira todas as joias, próteses dentárias amovíveis, clipes e objetos metálicos da região a examinar antes de iniciar a aquisição tomográfica."
  },
  {
    "id": 5141,
    "topicId": 5,
    "question": "Na física das radiações ionizantes e Raios X aplicada ao contexto hospitalar, em relação a 'ação direta da radiação ionizante no DNA', qual é a fundamentação científica exata?",
    "options": [
      "Os Raios X são constituídos por partículas gasosas de oxigénio líquido que evaporam instantaneamente à temperatura da sala.",
      "Trata-se de uma radiação puramente acústica e ultrassónica inaudível gerada pelo atrito das rodas da cama hospitalar.",
      "o fotão de radiação ou um eletrão secundário colide fisicamente e ioniza diretamente a molécula de ácido desoxirribonucleico (DNA), quebrando ligações fosfodiéster da cadeia. Produz quebras de cadeia simples (SSB) e quebras de cadeia dupla (DSB); as quebras duplas contíguas são as mais difíceis de reparar pelas enzimas celulares e as mais letais.",
      "A radiação ionizante anula todas as ligações químicas do organismo humano transformando o doente num holograma sem massa."
    ],
    "correctIndex": 2,
    "explanation": "Em física das radiações e imagiologia médica, ação direta da radiação ionizante no DNA explica-se pelo facto de que o fotão de radiação ou um eletrão secundário colide fisicamente e ioniza diretamente a molécula de ácido desoxirribonucleico (DNA), quebrando ligações fosfodiéster da cadeia. Produz quebras de cadeia simples (SSB) e quebras de cadeia dupla (DSB); as quebras duplas contíguas são as mais difíceis de reparar pelas enzimas celulares e as mais letais.",
    "distractorAnalysis": [
      "Está incorreta: confunde radiação eletromagnética fotónica com matéria gasosa comum.",
      "Está incorreta: confunde Raios X com ondas mecânicas sonoras ou ultrassons.",
      "Está incorreta: é uma fantasia pseudocientífica que viola as leis da conservação da massa e da matéria."
    ],
    "nursingApplication": "É o mecanismo predominante em radiações com alta densidade de ionização linear (alto LET), como partículas alfa e iões pesados."
  },
  {
    "id": 5142,
    "topicId": 5,
    "question": "Durante os cuidados de enfermagem a um doente submetido a procedimentos imagiológicos com radiações, como se aplica na prática o conceito de 'ação direta da radiação ionizante no DNA'?",
    "options": [
      "Implica que o enfermeiro retire toda a blindagem de chumbo para que o seu corpo absorva a radiação em substituição do doente.",
      "Exige a imersão do doente numa banheira com lixívia concentrada durante 3 horas após o exame radiológico.",
      "Requer a proibição permanente de contacto humano com o doente radiografado durante 6 meses após a radiografia de tórax.",
      "Traduz-se na seguinte intervenção clínica fundamentada: É o mecanismo predominante em radiações com alta densidade de ionização linear (alto LET), como partículas alfa e iões pesados."
    ],
    "correctIndex": 3,
    "explanation": "A aplicação de enfermagem para ação direta da radiação ionizante no DNA baseia-se no princípio: É o mecanismo predominante em radiações com alta densidade de ionização linear (alto LET), como partículas alfa e iões pesados. Esta intervenção garante a segurança radiológica do doente e do profissional.",
    "distractorAnalysis": [
      "Está incorreta: é perigosa e absurda: os profissionais devem proteger-se ativamente e não expor-se voluntariamente à radiação.",
      "Está incorreta: provocaria queimaduras químicas graves; não há qualquer radiação externa que justifique lixívia após Raios X.",
      "Está incorreta: confunde radiografia simples externa (onde não fica qualquer radioatividade no corpo) com contaminação radioativa interna."
    ],
    "nursingApplication": "É o mecanismo predominante em radiações com alta densidade de ionização linear (alto LET), como partículas alfa e iões pesados."
  },
  {
    "id": 5143,
    "topicId": 5,
    "question": "Um enfermeiro analisa os parâmetros biofísicos e os mecanismos de interação em 'ação direta da radiação ionizante no DNA'. Qual das seguintes afirmações expressa a correlação científica correta?",
    "options": [
      "A análise biofísica correta confirma que Produz quebras de cadeia simples (SSB) e quebras de cadeia dupla (DSB); as quebras duplas contíguas são as mais difíceis de reparar pelas enzimas celulares e as mais letais.",
      "A atenuação da radiação é rigorosamente nula em qualquer material, atravessando 10 metros de chumbo maciço sem qualquer perda de intensidade.",
      "O efeito fotoelétrico ocorre com igual probabilidade no ar, na gordura, no músculo e no osso, sendo independente do número atómico Z.",
      "A radiação dispersa por espalhamento Compton desaparece espontaneamente se as janelas da sala de exames estiverem abertas."
    ],
    "correctIndex": 0,
    "explanation": "A correlação científica correta demonstra que Produz quebras de cadeia simples (SSB) e quebras de cadeia dupla (DSB); as quebras duplas contíguas são as mais difíceis de reparar pelas enzimas celulares e as mais letais. O domínio destes fundamentos permite ao enfermeiro assegurar a correta radioproteção e a interpretação dos riscos radiológicos.",
    "distractorAnalysis": [
      "Está incorreta: ignora a Lei de atenuação exponencial da radiação e a eficácia comprovada do chumbo como blindagem protetora.",
      "Está incorreta: nega a dependência estrita em Z³ do efeito fotoelétrico, que é a base física do contraste ósseo.",
      "Está incorreta: confunde radiação eletromagnética ionizante em linha reta com correntes de ar atmosférico."
    ],
    "nursingApplication": "É o mecanismo predominante em radiações com alta densidade de ionização linear (alto LET), como partículas alfa e iões pesados."
  },
  {
    "id": 5144,
    "topicId": 5,
    "question": "Na física das radiações ionizantes e Raios X aplicada ao contexto hospitalar, em relação a 'ação indireta via radiólise da água e radicais livres', qual é a fundamentação científica exata?",
    "options": [
      "Os Raios X são constituídos por partículas gasosas de oxigénio líquido que evaporam instantaneamente à temperatura da sala.",
      "como a célula é constituída em cerca de 70-80% por água, a radiação ioniza primariamente as moléculas de H₂O intracelular ($H_2O \\rightarrow H_2O^+ + e^-$), gerando radicais livres altamente tóxicos. Destaca-se o radical hidroxilo ($OH^\\bullet$), o átomo de hidrogénio ($H^\\bullet$) e o peróxido de hidrogénio ($H_2O_2$), que difundem até ao DNA e atacam quimicamente as bases azotadas.",
      "Trata-se de uma radiação puramente acústica e ultrassónica inaudível gerada pelo atrito das rodas da cama hospitalar.",
      "A radiação ionizante anula todas as ligações químicas do organismo humano transformando o doente num holograma sem massa."
    ],
    "correctIndex": 1,
    "explanation": "Em física das radiações e imagiologia médica, ação indireta via radiólise da água e radicais livres explica-se pelo facto de que como a célula é constituída em cerca de 70-80% por água, a radiação ioniza primariamente as moléculas de H₂O intracelular ($H_2O \\rightarrow H_2O^+ + e^-$), gerando radicais livres altamente tóxicos. Destaca-se o radical hidroxilo ($OH^\\bullet$), o átomo de hidrogénio ($H^\\bullet$) e o peróxido de hidrogénio ($H_2O_2$), que difundem até ao DNA e atacam quimicamente as bases azotadas.",
    "distractorAnalysis": [
      "Está incorreta: confunde radiação eletromagnética fotónica com matéria gasosa comum.",
      "Está incorreta: confunde Raios X com ondas mecânicas sonoras ou ultrassons.",
      "Está incorreta: é uma fantasia pseudocientífica que viola as leis da conservação da massa e da matéria."
    ],
    "nursingApplication": "Representa aproximadamente dois terços (cerca de 70%) de todo o dano biológico induzido por radiações de baixo LET como os Raios X e radiações gama."
  },
  {
    "id": 5145,
    "topicId": 5,
    "question": "Durante os cuidados de enfermagem a um doente submetido a procedimentos imagiológicos com radiações, como se aplica na prática o conceito de 'ação indireta via radiólise da água e radicais livres'?",
    "options": [
      "Implica que o enfermeiro retire toda a blindagem de chumbo para que o seu corpo absorva a radiação em substituição do doente.",
      "Exige a imersão do doente numa banheira com lixívia concentrada durante 3 horas após o exame radiológico.",
      "Traduz-se na seguinte intervenção clínica fundamentada: Representa aproximadamente dois terços (cerca de 70%) de todo o dano biológico induzido por radiações de baixo LET como os Raios X e radiações gama.",
      "Requer a proibição permanente de contacto humano com o doente radiografado durante 6 meses após a radiografia de tórax."
    ],
    "correctIndex": 2,
    "explanation": "A aplicação de enfermagem para ação indireta via radiólise da água e radicais livres baseia-se no princípio: Representa aproximadamente dois terços (cerca de 70%) de todo o dano biológico induzido por radiações de baixo LET como os Raios X e radiações gama. Esta intervenção garante a segurança radiológica do doente e do profissional.",
    "distractorAnalysis": [
      "Está incorreta: é perigosa e absurda: os profissionais devem proteger-se ativamente e não expor-se voluntariamente à radiação.",
      "Está incorreta: provocaria queimaduras químicas graves; não há qualquer radiação externa que justifique lixívia após Raios X.",
      "Está incorreta: confunde radiografia simples externa (onde não fica qualquer radioatividade no corpo) com contaminação radioativa interna."
    ],
    "nursingApplication": "Representa aproximadamente dois terços (cerca de 70%) de todo o dano biológico induzido por radiações de baixo LET como os Raios X e radiações gama."
  },
  {
    "id": 5146,
    "topicId": 5,
    "question": "Um enfermeiro analisa os parâmetros biofísicos e os mecanismos de interação em 'ação indireta via radiólise da água e radicais livres'. Qual das seguintes afirmações expressa a correlação científica correta?",
    "options": [
      "A atenuação da radiação é rigorosamente nula em qualquer material, atravessando 10 metros de chumbo maciço sem qualquer perda de intensidade.",
      "O efeito fotoelétrico ocorre com igual probabilidade no ar, na gordura, no músculo e no osso, sendo independente do número atómico Z.",
      "A radiação dispersa por espalhamento Compton desaparece espontaneamente se as janelas da sala de exames estiverem abertas.",
      "A análise biofísica correta confirma que Destaca-se o radical hidroxilo ($OH^\\bullet$), o átomo de hidrogénio ($H^\\bullet$) e o peróxido de hidrogénio ($H_2O_2$), que difundem até ao DNA e atacam quimicamente as bases azotadas."
    ],
    "correctIndex": 3,
    "explanation": "A correlação científica correta demonstra que Destaca-se o radical hidroxilo ($OH^\\bullet$), o átomo de hidrogénio ($H^\\bullet$) e o peróxido de hidrogénio ($H_2O_2$), que difundem até ao DNA e atacam quimicamente as bases azotadas. O domínio destes fundamentos permite ao enfermeiro assegurar a correta radioproteção e a interpretação dos riscos radiológicos.",
    "distractorAnalysis": [
      "Está incorreta: ignora a Lei de atenuação exponencial da radiação e a eficácia comprovada do chumbo como blindagem protetora.",
      "Está incorreta: nega a dependência estrita em Z³ do efeito fotoelétrico, que é a base física do contraste ósseo.",
      "Está incorreta: confunde radiação eletromagnética ionizante em linha reta com correntes de ar atmosférico."
    ],
    "nursingApplication": "Representa aproximadamente dois terços (cerca de 70%) de todo o dano biológico induzido por radiações de baixo LET como os Raios X e radiações gama."
  },
  {
    "id": 5147,
    "topicId": 5,
    "question": "Na física das radiações ionizantes e Raios X aplicada ao contexto hospitalar, em relação a 'efeito do oxigénio na radiossensibilidade celular (Oxygen Enhancement Ratio - OER)', qual é a fundamentação científica exata?",
    "options": [
      "a presença de oxigénio molecular molecular (O₂) na célula 'fixa' permanentemente o dano químico causado pelos radicais livres nas extremidades do DNA quebrado (reação de peroxidação lipídica e do DNA). Tecidos bem oxigenados e vascularizados são cerca de 2 a 3 vezes mais sensíveis à radiação ionizante do que tecidos hipóxicos ou necrosados.",
      "Os Raios X são constituídos por partículas gasosas de oxigénio líquido que evaporam instantaneamente à temperatura da sala.",
      "Trata-se de uma radiação puramente acústica e ultrassónica inaudível gerada pelo atrito das rodas da cama hospitalar.",
      "A radiação ionizante anula todas as ligações químicas do organismo humano transformando o doente num holograma sem massa."
    ],
    "correctIndex": 0,
    "explanation": "Em física das radiações e imagiologia médica, efeito do oxigénio na radiossensibilidade celular (Oxygen Enhancement Ratio - OER) explica-se pelo facto de que a presença de oxigénio molecular molecular (O₂) na célula 'fixa' permanentemente o dano químico causado pelos radicais livres nas extremidades do DNA quebrado (reação de peroxidação lipídica e do DNA). Tecidos bem oxigenados e vascularizados são cerca de 2 a 3 vezes mais sensíveis à radiação ionizante do que tecidos hipóxicos ou necrosados.",
    "distractorAnalysis": [
      "Está incorreta: confunde radiação eletromagnética fotónica com matéria gasosa comum.",
      "Está incorreta: confunde Raios X com ondas mecânicas sonoras ou ultrassons.",
      "Está incorreta: é uma fantasia pseudocientífica que viola as leis da conservação da massa e da matéria."
    ],
    "nursingApplication": "Na radioterapia oncológica, o enfermeiro sabe que manter níveis adequados de hemoglobina (> 10 g/dL) no doente assegura a oxigenação tumoral indispensável à eficácia da radioterapia."
  },
  {
    "id": 5148,
    "topicId": 5,
    "question": "Durante os cuidados de enfermagem a um doente submetido a procedimentos imagiológicos com radiações, como se aplica na prática o conceito de 'efeito do oxigénio na radiossensibilidade celular (Oxygen Enhancement Ratio - OER)'?",
    "options": [
      "Implica que o enfermeiro retire toda a blindagem de chumbo para que o seu corpo absorva a radiação em substituição do doente.",
      "Traduz-se na seguinte intervenção clínica fundamentada: Na radioterapia oncológica, o enfermeiro sabe que manter níveis adequados de hemoglobina (> 10 g/dL) no doente assegura a oxigenação tumoral indispensável à eficácia da radioterapia.",
      "Exige a imersão do doente numa banheira com lixívia concentrada durante 3 horas após o exame radiológico.",
      "Requer a proibição permanente de contacto humano com o doente radiografado durante 6 meses após a radiografia de tórax."
    ],
    "correctIndex": 1,
    "explanation": "A aplicação de enfermagem para efeito do oxigénio na radiossensibilidade celular (Oxygen Enhancement Ratio - OER) baseia-se no princípio: Na radioterapia oncológica, o enfermeiro sabe que manter níveis adequados de hemoglobina (> 10 g/dL) no doente assegura a oxigenação tumoral indispensável à eficácia da radioterapia. Esta intervenção garante a segurança radiológica do doente e do profissional.",
    "distractorAnalysis": [
      "Está incorreta: é perigosa e absurda: os profissionais devem proteger-se ativamente e não expor-se voluntariamente à radiação.",
      "Está incorreta: provocaria queimaduras químicas graves; não há qualquer radiação externa que justifique lixívia após Raios X.",
      "Está incorreta: confunde radiografia simples externa (onde não fica qualquer radioatividade no corpo) com contaminação radioativa interna."
    ],
    "nursingApplication": "Na radioterapia oncológica, o enfermeiro sabe que manter níveis adequados de hemoglobina (> 10 g/dL) no doente assegura a oxigenação tumoral indispensável à eficácia da radioterapia."
  },
  {
    "id": 5149,
    "topicId": 5,
    "question": "Um enfermeiro analisa os parâmetros biofísicos e os mecanismos de interação em 'efeito do oxigénio na radiossensibilidade celular (Oxygen Enhancement Ratio - OER)'. Qual das seguintes afirmações expressa a correlação científica correta?",
    "options": [
      "A atenuação da radiação é rigorosamente nula em qualquer material, atravessando 10 metros de chumbo maciço sem qualquer perda de intensidade.",
      "O efeito fotoelétrico ocorre com igual probabilidade no ar, na gordura, no músculo e no osso, sendo independente do número atómico Z.",
      "A análise biofísica correta confirma que Tecidos bem oxigenados e vascularizados são cerca de 2 a 3 vezes mais sensíveis à radiação ionizante do que tecidos hipóxicos ou necrosados.",
      "A radiação dispersa por espalhamento Compton desaparece espontaneamente se as janelas da sala de exames estiverem abertas."
    ],
    "correctIndex": 2,
    "explanation": "A correlação científica correta demonstra que Tecidos bem oxigenados e vascularizados são cerca de 2 a 3 vezes mais sensíveis à radiação ionizante do que tecidos hipóxicos ou necrosados. O domínio destes fundamentos permite ao enfermeiro assegurar a correta radioproteção e a interpretação dos riscos radiológicos.",
    "distractorAnalysis": [
      "Está incorreta: ignora a Lei de atenuação exponencial da radiação e a eficácia comprovada do chumbo como blindagem protetora.",
      "Está incorreta: nega a dependência estrita em Z³ do efeito fotoelétrico, que é a base física do contraste ósseo.",
      "Está incorreta: confunde radiação eletromagnética ionizante em linha reta com correntes de ar atmosférico."
    ],
    "nursingApplication": "Na radioterapia oncológica, o enfermeiro sabe que manter níveis adequados de hemoglobina (> 10 g/dL) no doente assegura a oxigenação tumoral indispensável à eficácia da radioterapia."
  },
  {
    "id": 5150,
    "topicId": 5,
    "question": "Na física das radiações ionizantes e Raios X aplicada ao contexto hospitalar, em relação a 'mecanismos de reparação celular do DNA e aberrações cromossómicas', qual é a fundamentação científica exata?",
    "options": [
      "Os Raios X são constituídos por partículas gasosas de oxigénio líquido que evaporam instantaneamente à temperatura da sala.",
      "Trata-se de uma radiação puramente acústica e ultrassónica inaudível gerada pelo atrito das rodas da cama hospitalar.",
      "A radiação ionizante anula todas as ligações químicas do organismo humano transformando o doente num holograma sem massa.",
      "as células possuem enzimas de reparação por junção de extremidades não-homólogas (NHEJ) e recombinação homóloga (HR) que corrigem quebras de cadeias de DNA. Se a taxa de lesão for demasiado elevada ou se a reparação for incorreta (mismatch), ocorrem translocações cromossómicas, formação de cromossomas dicêntricos e morte celular por catástrofe mitótica."
    ],
    "correctIndex": 3,
    "explanation": "Em física das radiações e imagiologia médica, mecanismos de reparação celular do DNA e aberrações cromossómicas explica-se pelo facto de que as células possuem enzimas de reparação por junção de extremidades não-homólogas (NHEJ) e recombinação homóloga (HR) que corrigem quebras de cadeias de DNA. Se a taxa de lesão for demasiado elevada ou se a reparação for incorreta (mismatch), ocorrem translocações cromossómicas, formação de cromossomas dicêntricos e morte celular por catástrofe mitótica.",
    "distractorAnalysis": [
      "Está incorreta: confunde radiação eletromagnética fotónica com matéria gasosa comum.",
      "Está incorreta: confunde Raios X com ondas mecânicas sonoras ou ultrassons.",
      "Está incorreta: é uma fantasia pseudocientífica que viola as leis da conservação da massa e da matéria."
    ],
    "nursingApplication": "O enfermeiro compreende que o fracionamento da dose em radioterapia (administrar doses diárias de 2 Gy em vez de uma dose única massiva) permite aos tecidos saudáveis reparar os danos entre sessões."
  },
  {
    "id": 5151,
    "topicId": 5,
    "question": "Durante os cuidados de enfermagem a um doente submetido a procedimentos imagiológicos com radiações, como se aplica na prática o conceito de 'mecanismos de reparação celular do DNA e aberrações cromossómicas'?",
    "options": [
      "Traduz-se na seguinte intervenção clínica fundamentada: O enfermeiro compreende que o fracionamento da dose em radioterapia (administrar doses diárias de 2 Gy em vez de uma dose única massiva) permite aos tecidos saudáveis reparar os danos entre sessões.",
      "Implica que o enfermeiro retire toda a blindagem de chumbo para que o seu corpo absorva a radiação em substituição do doente.",
      "Exige a imersão do doente numa banheira com lixívia concentrada durante 3 horas após o exame radiológico.",
      "Requer a proibição permanente de contacto humano com o doente radiografado durante 6 meses após a radiografia de tórax."
    ],
    "correctIndex": 0,
    "explanation": "A aplicação de enfermagem para mecanismos de reparação celular do DNA e aberrações cromossómicas baseia-se no princípio: O enfermeiro compreende que o fracionamento da dose em radioterapia (administrar doses diárias de 2 Gy em vez de uma dose única massiva) permite aos tecidos saudáveis reparar os danos entre sessões. Esta intervenção garante a segurança radiológica do doente e do profissional.",
    "distractorAnalysis": [
      "Está incorreta: é perigosa e absurda: os profissionais devem proteger-se ativamente e não expor-se voluntariamente à radiação.",
      "Está incorreta: provocaria queimaduras químicas graves; não há qualquer radiação externa que justifique lixívia após Raios X.",
      "Está incorreta: confunde radiografia simples externa (onde não fica qualquer radioatividade no corpo) com contaminação radioativa interna."
    ],
    "nursingApplication": "O enfermeiro compreende que o fracionamento da dose em radioterapia (administrar doses diárias de 2 Gy em vez de uma dose única massiva) permite aos tecidos saudáveis reparar os danos entre sessões."
  },
  {
    "id": 5152,
    "topicId": 5,
    "question": "Um enfermeiro analisa os parâmetros biofísicos e os mecanismos de interação em 'mecanismos de reparação celular do DNA e aberrações cromossómicas'. Qual das seguintes afirmações expressa a correlação científica correta?",
    "options": [
      "A atenuação da radiação é rigorosamente nula em qualquer material, atravessando 10 metros de chumbo maciço sem qualquer perda de intensidade.",
      "A análise biofísica correta confirma que Se a taxa de lesão for demasiado elevada ou se a reparação for incorreta (mismatch), ocorrem translocações cromossómicas, formação de cromossomas dicêntricos e morte celular por catástrofe mitótica.",
      "O efeito fotoelétrico ocorre com igual probabilidade no ar, na gordura, no músculo e no osso, sendo independente do número atómico Z.",
      "A radiação dispersa por espalhamento Compton desaparece espontaneamente se as janelas da sala de exames estiverem abertas."
    ],
    "correctIndex": 1,
    "explanation": "A correlação científica correta demonstra que Se a taxa de lesão for demasiado elevada ou se a reparação for incorreta (mismatch), ocorrem translocações cromossómicas, formação de cromossomas dicêntricos e morte celular por catástrofe mitótica. O domínio destes fundamentos permite ao enfermeiro assegurar a correta radioproteção e a interpretação dos riscos radiológicos.",
    "distractorAnalysis": [
      "Está incorreta: ignora a Lei de atenuação exponencial da radiação e a eficácia comprovada do chumbo como blindagem protetora.",
      "Está incorreta: nega a dependência estrita em Z³ do efeito fotoelétrico, que é a base física do contraste ósseo.",
      "Está incorreta: confunde radiação eletromagnética ionizante em linha reta com correntes de ar atmosférico."
    ],
    "nursingApplication": "O enfermeiro compreende que o fracionamento da dose em radioterapia (administrar doses diárias de 2 Gy em vez de uma dose única massiva) permite aos tecidos saudáveis reparar os danos entre sessões."
  },
  {
    "id": 5153,
    "topicId": 5,
    "question": "Na física das radiações ionizantes e Raios X aplicada ao contexto hospitalar, em relação a 'apoptose induzida pela proteína supressora tumoral p53', qual é a fundamentação científica exata?",
    "options": [
      "Os Raios X são constituídos por partículas gasosas de oxigénio líquido que evaporam instantaneamente à temperatura da sala.",
      "Trata-se de uma radiação puramente acústica e ultrassónica inaudível gerada pelo atrito das rodas da cama hospitalar.",
      "a presença de quebras duplas não reparadas ativa a via da quinase ATM, fosforilando e acumulando a proteína p53 no núcleo. A p53 bloqueia o ciclo celular na fase G1/S para permitir a reparação; se o dano for irreparável, a p53 desencadeia a transcrição de genes pró-apoptóticos (como BAX), ordenando a morte celular programada.",
      "A radiação ionizante anula todas as ligações químicas do organismo humano transformando o doente num holograma sem massa."
    ],
    "correctIndex": 2,
    "explanation": "Em física das radiações e imagiologia médica, apoptose induzida pela proteína supressora tumoral p53 explica-se pelo facto de que a presença de quebras duplas não reparadas ativa a via da quinase ATM, fosforilando e acumulando a proteína p53 no núcleo. A p53 bloqueia o ciclo celular na fase G1/S para permitir a reparação; se o dano for irreparável, a p53 desencadeia a transcrição de genes pró-apoptóticos (como BAX), ordenando a morte celular programada.",
    "distractorAnalysis": [
      "Está incorreta: confunde radiação eletromagnética fotónica com matéria gasosa comum.",
      "Está incorreta: confunde Raios X com ondas mecânicas sonoras ou ultrassons.",
      "Está incorreta: é uma fantasia pseudocientífica que viola as leis da conservação da massa e da matéria."
    ],
    "nursingApplication": "O enfermeiro identifica reações de mucosite e epidermite durante a radioterapia como manifestações clínicas da apoptose de células basais da pele e mucosas estimulada por esta cascata molecular."
  },
  {
    "id": 5154,
    "topicId": 5,
    "question": "Durante os cuidados de enfermagem a um doente submetido a procedimentos imagiológicos com radiações, como se aplica na prática o conceito de 'apoptose induzida pela proteína supressora tumoral p53'?",
    "options": [
      "Implica que o enfermeiro retire toda a blindagem de chumbo para que o seu corpo absorva a radiação em substituição do doente.",
      "Exige a imersão do doente numa banheira com lixívia concentrada durante 3 horas após o exame radiológico.",
      "Requer a proibição permanente de contacto humano com o doente radiografado durante 6 meses após a radiografia de tórax.",
      "Traduz-se na seguinte intervenção clínica fundamentada: O enfermeiro identifica reações de mucosite e epidermite durante a radioterapia como manifestações clínicas da apoptose de células basais da pele e mucosas estimulada por esta cascata molecular."
    ],
    "correctIndex": 3,
    "explanation": "A aplicação de enfermagem para apoptose induzida pela proteína supressora tumoral p53 baseia-se no princípio: O enfermeiro identifica reações de mucosite e epidermite durante a radioterapia como manifestações clínicas da apoptose de células basais da pele e mucosas estimulada por esta cascata molecular. Esta intervenção garante a segurança radiológica do doente e do profissional.",
    "distractorAnalysis": [
      "Está incorreta: é perigosa e absurda: os profissionais devem proteger-se ativamente e não expor-se voluntariamente à radiação.",
      "Está incorreta: provocaria queimaduras químicas graves; não há qualquer radiação externa que justifique lixívia após Raios X.",
      "Está incorreta: confunde radiografia simples externa (onde não fica qualquer radioatividade no corpo) com contaminação radioativa interna."
    ],
    "nursingApplication": "O enfermeiro identifica reações de mucosite e epidermite durante a radioterapia como manifestações clínicas da apoptose de células basais da pele e mucosas estimulada por esta cascata molecular."
  },
  {
    "id": 5155,
    "topicId": 5,
    "question": "Um enfermeiro analisa os parâmetros biofísicos e os mecanismos de interação em 'apoptose induzida pela proteína supressora tumoral p53'. Qual das seguintes afirmações expressa a correlação científica correta?",
    "options": [
      "A análise biofísica correta confirma que A p53 bloqueia o ciclo celular na fase G1/S para permitir a reparação; se o dano for irreparável, a p53 desencadeia a transcrição de genes pró-apoptóticos (como BAX), ordenando a morte celular programada.",
      "A atenuação da radiação é rigorosamente nula em qualquer material, atravessando 10 metros de chumbo maciço sem qualquer perda de intensidade.",
      "O efeito fotoelétrico ocorre com igual probabilidade no ar, na gordura, no músculo e no osso, sendo independente do número atómico Z.",
      "A radiação dispersa por espalhamento Compton desaparece espontaneamente se as janelas da sala de exames estiverem abertas."
    ],
    "correctIndex": 0,
    "explanation": "A correlação científica correta demonstra que A p53 bloqueia o ciclo celular na fase G1/S para permitir a reparação; se o dano for irreparável, a p53 desencadeia a transcrição de genes pró-apoptóticos (como BAX), ordenando a morte celular programada. O domínio destes fundamentos permite ao enfermeiro assegurar a correta radioproteção e a interpretação dos riscos radiológicos.",
    "distractorAnalysis": [
      "Está incorreta: ignora a Lei de atenuação exponencial da radiação e a eficácia comprovada do chumbo como blindagem protetora.",
      "Está incorreta: nega a dependência estrita em Z³ do efeito fotoelétrico, que é a base física do contraste ósseo.",
      "Está incorreta: confunde radiação eletromagnética ionizante em linha reta com correntes de ar atmosférico."
    ],
    "nursingApplication": "O enfermeiro identifica reações de mucosite e epidermite durante a radioterapia como manifestações clínicas da apoptose de células basais da pele e mucosas estimulada por esta cascata molecular."
  },
  {
    "id": 5156,
    "topicId": 5,
    "question": "Na física das radiações ionizantes e Raios X aplicada ao contexto hospitalar, em relação a 'definição e características dos efeitos estocásticos', qual é a fundamentação científica exata?",
    "options": [
      "Os Raios X são constituídos por partículas gasosas de oxigénio líquido que evaporam instantaneamente à temperatura da sala.",
      "são efeitos probabilísticos que não possuem qualquer limiar de dose de radiação (modelo linear sem limiar, LNT): qualquer dose infinitesimal de radiação transporta um risco teórico de ocorrência. A probabilidade de ocorrência do efeito aumenta linearmente com a dose acumulada, mas a gravidade clínica do efeito independe da dose recebida.",
      "Trata-se de uma radiação puramente acústica e ultrassónica inaudível gerada pelo atrito das rodas da cama hospitalar.",
      "A radiação ionizante anula todas as ligações químicas do organismo humano transformando o doente num holograma sem massa."
    ],
    "correctIndex": 1,
    "explanation": "Em física das radiações e imagiologia médica, definição e características dos efeitos estocásticos explica-se pelo facto de que são efeitos probabilísticos que não possuem qualquer limiar de dose de radiação (modelo linear sem limiar, LNT): qualquer dose infinitesimal de radiação transporta um risco teórico de ocorrência. A probabilidade de ocorrência do efeito aumenta linearmente com a dose acumulada, mas a gravidade clínica do efeito independe da dose recebida.",
    "distractorAnalysis": [
      "Está incorreta: confunde radiação eletromagnética fotónica com matéria gasosa comum.",
      "Está incorreta: confunde Raios X com ondas mecânicas sonoras ou ultrassons.",
      "Está incorreta: é uma fantasia pseudocientífica que viola as leis da conservação da massa e da matéria."
    ],
    "nursingApplication": "Os exemplos clássicos são a indução de cancro radioinduzido (como leucemias ou carcinomas sólidos) e mutações genéticas hereditárias transmitidas à descendência."
  },
  {
    "id": 5157,
    "topicId": 5,
    "question": "Durante os cuidados de enfermagem a um doente submetido a procedimentos imagiológicos com radiações, como se aplica na prática o conceito de 'definição e características dos efeitos estocásticos'?",
    "options": [
      "Implica que o enfermeiro retire toda a blindagem de chumbo para que o seu corpo absorva a radiação em substituição do doente.",
      "Exige a imersão do doente numa banheira com lixívia concentrada durante 3 horas após o exame radiológico.",
      "Traduz-se na seguinte intervenção clínica fundamentada: Os exemplos clássicos são a indução de cancro radioinduzido (como leucemias ou carcinomas sólidos) e mutações genéticas hereditárias transmitidas à descendência.",
      "Requer a proibição permanente de contacto humano com o doente radiografado durante 6 meses após a radiografia de tórax."
    ],
    "correctIndex": 2,
    "explanation": "A aplicação de enfermagem para definição e características dos efeitos estocásticos baseia-se no princípio: Os exemplos clássicos são a indução de cancro radioinduzido (como leucemias ou carcinomas sólidos) e mutações genéticas hereditárias transmitidas à descendência. Esta intervenção garante a segurança radiológica do doente e do profissional.",
    "distractorAnalysis": [
      "Está incorreta: é perigosa e absurda: os profissionais devem proteger-se ativamente e não expor-se voluntariamente à radiação.",
      "Está incorreta: provocaria queimaduras químicas graves; não há qualquer radiação externa que justifique lixívia após Raios X.",
      "Está incorreta: confunde radiografia simples externa (onde não fica qualquer radioatividade no corpo) com contaminação radioativa interna."
    ],
    "nursingApplication": "Os exemplos clássicos são a indução de cancro radioinduzido (como leucemias ou carcinomas sólidos) e mutações genéticas hereditárias transmitidas à descendência."
  },
  {
    "id": 5158,
    "topicId": 5,
    "question": "Um enfermeiro analisa os parâmetros biofísicos e os mecanismos de interação em 'definição e características dos efeitos estocásticos'. Qual das seguintes afirmações expressa a correlação científica correta?",
    "options": [
      "A atenuação da radiação é rigorosamente nula em qualquer material, atravessando 10 metros de chumbo maciço sem qualquer perda de intensidade.",
      "O efeito fotoelétrico ocorre com igual probabilidade no ar, na gordura, no músculo e no osso, sendo independente do número atómico Z.",
      "A radiação dispersa por espalhamento Compton desaparece espontaneamente se as janelas da sala de exames estiverem abertas.",
      "A análise biofísica correta confirma que A probabilidade de ocorrência do efeito aumenta linearmente com a dose acumulada, mas a gravidade clínica do efeito independe da dose recebida."
    ],
    "correctIndex": 3,
    "explanation": "A correlação científica correta demonstra que A probabilidade de ocorrência do efeito aumenta linearmente com a dose acumulada, mas a gravidade clínica do efeito independe da dose recebida. O domínio destes fundamentos permite ao enfermeiro assegurar a correta radioproteção e a interpretação dos riscos radiológicos.",
    "distractorAnalysis": [
      "Está incorreta: ignora a Lei de atenuação exponencial da radiação e a eficácia comprovada do chumbo como blindagem protetora.",
      "Está incorreta: nega a dependência estrita em Z³ do efeito fotoelétrico, que é a base física do contraste ósseo.",
      "Está incorreta: confunde radiação eletromagnética ionizante em linha reta com correntes de ar atmosférico."
    ],
    "nursingApplication": "Os exemplos clássicos são a indução de cancro radioinduzido (como leucemias ou carcinomas sólidos) e mutações genéticas hereditárias transmitidas à descendência."
  },
  {
    "id": 5159,
    "topicId": 5,
    "question": "Na física das radiações ionizantes e Raios X aplicada ao contexto hospitalar, em relação a 'definição e características dos efeitos determinísticos (reações teciduais)', qual é a fundamentação científica exata?",
    "options": [
      "são efeitos biológicos que possuem um limiar de dose bem definido: só ocorrem se a dose de radiação absorvida exceder esse limiar específico no tecido. Acima do limiar, a gravidade clínica da lesão aumenta proporcionalmente com a dose absorvida, devido à morte de uma fração crítica de células funcionais do órgão.",
      "Os Raios X são constituídos por partículas gasosas de oxigénio líquido que evaporam instantaneamente à temperatura da sala.",
      "Trata-se de uma radiação puramente acústica e ultrassónica inaudível gerada pelo atrito das rodas da cama hospitalar.",
      "A radiação ionizante anula todas as ligações químicas do organismo humano transformando o doente num holograma sem massa."
    ],
    "correctIndex": 0,
    "explanation": "Em física das radiações e imagiologia médica, definição e características dos efeitos determinísticos (reações teciduais) explica-se pelo facto de que são efeitos biológicos que possuem um limiar de dose bem definido: só ocorrem se a dose de radiação absorvida exceder esse limiar específico no tecido. Acima do limiar, a gravidade clínica da lesão aumenta proporcionalmente com a dose absorvida, devido à morte de uma fração crítica de células funcionais do órgão.",
    "distractorAnalysis": [
      "Está incorreta: confunde radiação eletromagnética fotónica com matéria gasosa comum.",
      "Está incorreta: confunde Raios X com ondas mecânicas sonoras ou ultrassons.",
      "Está incorreta: é uma fantasia pseudocientífica que viola as leis da conservação da massa e da matéria."
    ],
    "nursingApplication": "Os exemplos incluem o eritema cutâneo (limiar ~2 Gy), descamação húmida, cataratas na lente ocular (limiar ~0,5 Gy), esterilidade gonadal temporária ou permanente e síndrome aguda de radiação."
  },
  {
    "id": 5160,
    "topicId": 5,
    "question": "Durante os cuidados de enfermagem a um doente submetido a procedimentos imagiológicos com radiações, como se aplica na prática o conceito de 'definição e características dos efeitos determinísticos (reações teciduais)'?",
    "options": [
      "Implica que o enfermeiro retire toda a blindagem de chumbo para que o seu corpo absorva a radiação em substituição do doente.",
      "Traduz-se na seguinte intervenção clínica fundamentada: Os exemplos incluem o eritema cutâneo (limiar ~2 Gy), descamação húmida, cataratas na lente ocular (limiar ~0,5 Gy), esterilidade gonadal temporária ou permanente e síndrome aguda de radiação.",
      "Exige a imersão do doente numa banheira com lixívia concentrada durante 3 horas após o exame radiológico.",
      "Requer a proibição permanente de contacto humano com o doente radiografado durante 6 meses após a radiografia de tórax."
    ],
    "correctIndex": 1,
    "explanation": "A aplicação de enfermagem para definição e características dos efeitos determinísticos (reações teciduais) baseia-se no princípio: Os exemplos incluem o eritema cutâneo (limiar ~2 Gy), descamação húmida, cataratas na lente ocular (limiar ~0,5 Gy), esterilidade gonadal temporária ou permanente e síndrome aguda de radiação. Esta intervenção garante a segurança radiológica do doente e do profissional.",
    "distractorAnalysis": [
      "Está incorreta: é perigosa e absurda: os profissionais devem proteger-se ativamente e não expor-se voluntariamente à radiação.",
      "Está incorreta: provocaria queimaduras químicas graves; não há qualquer radiação externa que justifique lixívia após Raios X.",
      "Está incorreta: confunde radiografia simples externa (onde não fica qualquer radioatividade no corpo) com contaminação radioativa interna."
    ],
    "nursingApplication": "Os exemplos incluem o eritema cutâneo (limiar ~2 Gy), descamação húmida, cataratas na lente ocular (limiar ~0,5 Gy), esterilidade gonadal temporária ou permanente e síndrome aguda de radiação."
  },
  {
    "id": 5161,
    "topicId": 5,
    "question": "Um enfermeiro analisa os parâmetros biofísicos e os mecanismos de interação em 'definição e características dos efeitos determinísticos (reações teciduais)'. Qual das seguintes afirmações expressa a correlação científica correta?",
    "options": [
      "A atenuação da radiação é rigorosamente nula em qualquer material, atravessando 10 metros de chumbo maciço sem qualquer perda de intensidade.",
      "O efeito fotoelétrico ocorre com igual probabilidade no ar, na gordura, no músculo e no osso, sendo independente do número atómico Z.",
      "A análise biofísica correta confirma que Acima do limiar, a gravidade clínica da lesão aumenta proporcionalmente com a dose absorvida, devido à morte de uma fração crítica de células funcionais do órgão.",
      "A radiação dispersa por espalhamento Compton desaparece espontaneamente se as janelas da sala de exames estiverem abertas."
    ],
    "correctIndex": 2,
    "explanation": "A correlação científica correta demonstra que Acima do limiar, a gravidade clínica da lesão aumenta proporcionalmente com a dose absorvida, devido à morte de uma fração crítica de células funcionais do órgão. O domínio destes fundamentos permite ao enfermeiro assegurar a correta radioproteção e a interpretação dos riscos radiológicos.",
    "distractorAnalysis": [
      "Está incorreta: ignora a Lei de atenuação exponencial da radiação e a eficácia comprovada do chumbo como blindagem protetora.",
      "Está incorreta: nega a dependência estrita em Z³ do efeito fotoelétrico, que é a base física do contraste ósseo.",
      "Está incorreta: confunde radiação eletromagnética ionizante em linha reta com correntes de ar atmosférico."
    ],
    "nursingApplication": "Os exemplos incluem o eritema cutâneo (limiar ~2 Gy), descamação húmida, cataratas na lente ocular (limiar ~0,5 Gy), esterilidade gonadal temporária ou permanente e síndrome aguda de radiação."
  },
  {
    "id": 5162,
    "topicId": 5,
    "question": "Na física das radiações ionizantes e Raios X aplicada ao contexto hospitalar, em relação a 'modelo Linear Sem Limiar (LNT - Linear No-Threshold) na radioproteção', qual é a fundamentação científica exata?",
    "options": [
      "Os Raios X são constituídos por partículas gasosas de oxigénio líquido que evaporam instantaneamente à temperatura da sala.",
      "Trata-se de uma radiação puramente acústica e ultrassónica inaudível gerada pelo atrito das rodas da cama hospitalar.",
      "A radiação ionizante anula todas as ligações químicas do organismo humano transformando o doente num holograma sem massa.",
      "o modelo regulatório internacional que assume que não existe nenhuma dose de radiação ionizante totalmente isenta de risco biológico potencial. Mesmo a dose de uma única radiografia periapical ou de tórax transporta uma probabilidade estatística teórica mínima de mutação no DNA celular."
    ],
    "correctIndex": 3,
    "explanation": "Em física das radiações e imagiologia médica, modelo Linear Sem Limiar (LNT - Linear No-Threshold) na radioproteção explica-se pelo facto de que o modelo regulatório internacional que assume que não existe nenhuma dose de radiação ionizante totalmente isenta de risco biológico potencial. Mesmo a dose de uma única radiografia periapical ou de tórax transporta uma probabilidade estatística teórica mínima de mutação no DNA celular.",
    "distractorAnalysis": [
      "Está incorreta: confunde radiação eletromagnética fotónica com matéria gasosa comum.",
      "Está incorreta: confunde Raios X com ondas mecânicas sonoras ou ultrassons.",
      "Está incorreta: é uma fantasia pseudocientífica que viola as leis da conservação da massa e da matéria."
    ],
    "nursingApplication": "Este modelo científico fundamenta a conduta deontológica do enfermeiro: nunca realizar um exame radiológico sem indicação clínica formalmente justificada por um médico."
  },
  {
    "id": 5163,
    "topicId": 5,
    "question": "Durante os cuidados de enfermagem a um doente submetido a procedimentos imagiológicos com radiações, como se aplica na prática o conceito de 'modelo Linear Sem Limiar (LNT - Linear No-Threshold) na radioproteção'?",
    "options": [
      "Traduz-se na seguinte intervenção clínica fundamentada: Este modelo científico fundamenta a conduta deontológica do enfermeiro: nunca realizar um exame radiológico sem indicação clínica formalmente justificada por um médico.",
      "Implica que o enfermeiro retire toda a blindagem de chumbo para que o seu corpo absorva a radiação em substituição do doente.",
      "Exige a imersão do doente numa banheira com lixívia concentrada durante 3 horas após o exame radiológico.",
      "Requer a proibição permanente de contacto humano com o doente radiografado durante 6 meses após a radiografia de tórax."
    ],
    "correctIndex": 0,
    "explanation": "A aplicação de enfermagem para modelo Linear Sem Limiar (LNT - Linear No-Threshold) na radioproteção baseia-se no princípio: Este modelo científico fundamenta a conduta deontológica do enfermeiro: nunca realizar um exame radiológico sem indicação clínica formalmente justificada por um médico. Esta intervenção garante a segurança radiológica do doente e do profissional.",
    "distractorAnalysis": [
      "Está incorreta: é perigosa e absurda: os profissionais devem proteger-se ativamente e não expor-se voluntariamente à radiação.",
      "Está incorreta: provocaria queimaduras químicas graves; não há qualquer radiação externa que justifique lixívia após Raios X.",
      "Está incorreta: confunde radiografia simples externa (onde não fica qualquer radioatividade no corpo) com contaminação radioativa interna."
    ],
    "nursingApplication": "Este modelo científico fundamenta a conduta deontológica do enfermeiro: nunca realizar um exame radiológico sem indicação clínica formalmente justificada por um médico."
  },
  {
    "id": 5164,
    "topicId": 5,
    "question": "Um enfermeiro analisa os parâmetros biofísicos e os mecanismos de interação em 'modelo Linear Sem Limiar (LNT - Linear No-Threshold) na radioproteção'. Qual das seguintes afirmações expressa a correlação científica correta?",
    "options": [
      "A atenuação da radiação é rigorosamente nula em qualquer material, atravessando 10 metros de chumbo maciço sem qualquer perda de intensidade.",
      "A análise biofísica correta confirma que Mesmo a dose de uma única radiografia periapical ou de tórax transporta uma probabilidade estatística teórica mínima de mutação no DNA celular.",
      "O efeito fotoelétrico ocorre com igual probabilidade no ar, na gordura, no músculo e no osso, sendo independente do número atómico Z.",
      "A radiação dispersa por espalhamento Compton desaparece espontaneamente se as janelas da sala de exames estiverem abertas."
    ],
    "correctIndex": 1,
    "explanation": "A correlação científica correta demonstra que Mesmo a dose de uma única radiografia periapical ou de tórax transporta uma probabilidade estatística teórica mínima de mutação no DNA celular. O domínio destes fundamentos permite ao enfermeiro assegurar a correta radioproteção e a interpretação dos riscos radiológicos.",
    "distractorAnalysis": [
      "Está incorreta: ignora a Lei de atenuação exponencial da radiação e a eficácia comprovada do chumbo como blindagem protetora.",
      "Está incorreta: nega a dependência estrita em Z³ do efeito fotoelétrico, que é a base física do contraste ósseo.",
      "Está incorreta: confunde radiação eletromagnética ionizante em linha reta com correntes de ar atmosférico."
    ],
    "nursingApplication": "Este modelo científico fundamenta a conduta deontológica do enfermeiro: nunca realizar um exame radiológico sem indicação clínica formalmente justificada por um médico."
  },
  {
    "id": 5165,
    "topicId": 5,
    "question": "Na física das radiações ionizantes e Raios X aplicada ao contexto hospitalar, em relação a 'Síndrome Aguda de Radiação (SAR) e as suas três formas clínicas', qual é a fundamentação científica exata?",
    "options": [
      "Os Raios X são constituídos por partículas gasosas de oxigénio líquido que evaporam instantaneamente à temperatura da sala.",
      "Trata-se de uma radiação puramente acústica e ultrassónica inaudível gerada pelo atrito das rodas da cama hospitalar.",
      "ocorre após irradiação corporal total massiva com doses elevadas (> 1 Gy) num curto intervalo de tempo (acidentes nucleares). Evolui através da forma hematopoética (1 a 6 Gy, aplasia medular e neutropenia), forma gastrointestinal (6 a 20 Gy, destruição das criptas intestinais, diarreia profusa e sépsis) e neurovascular (> 20 Gy, colapso circulatório, edema cerebral e óbito em 24-48h).",
      "A radiação ionizante anula todas as ligações químicas do organismo humano transformando o doente num holograma sem massa."
    ],
    "correctIndex": 2,
    "explanation": "Em física das radiações e imagiologia médica, Síndrome Aguda de Radiação (SAR) e as suas três formas clínicas explica-se pelo facto de que ocorre após irradiação corporal total massiva com doses elevadas (> 1 Gy) num curto intervalo de tempo (acidentes nucleares). Evolui através da forma hematopoética (1 a 6 Gy, aplasia medular e neutropenia), forma gastrointestinal (6 a 20 Gy, destruição das criptas intestinais, diarreia profusa e sépsis) e neurovascular (> 20 Gy, colapso circulatório, edema cerebral e óbito em 24-48h).",
    "distractorAnalysis": [
      "Está incorreta: confunde radiação eletromagnética fotónica com matéria gasosa comum.",
      "Está incorreta: confunde Raios X com ondas mecânicas sonoras ou ultrassons.",
      "Está incorreta: é uma fantasia pseudocientífica que viola as leis da conservação da massa e da matéria."
    ],
    "nursingApplication": "Em caso de catástrofe radioativa, o enfermeiro em isolamento protetor reverso cuida do doente aplásico com medidas rigorosas de barreira, suporte transfusional, antibióticos e fatores de crescimento hematopoiético (G-CSF)."
  },
  {
    "id": 5166,
    "topicId": 5,
    "question": "Durante os cuidados de enfermagem a um doente submetido a procedimentos imagiológicos com radiações, como se aplica na prática o conceito de 'Síndrome Aguda de Radiação (SAR) e as suas três formas clínicas'?",
    "options": [
      "Implica que o enfermeiro retire toda a blindagem de chumbo para que o seu corpo absorva a radiação em substituição do doente.",
      "Exige a imersão do doente numa banheira com lixívia concentrada durante 3 horas após o exame radiológico.",
      "Requer a proibição permanente de contacto humano com o doente radiografado durante 6 meses após a radiografia de tórax.",
      "Traduz-se na seguinte intervenção clínica fundamentada: Em caso de catástrofe radioativa, o enfermeiro em isolamento protetor reverso cuida do doente aplásico com medidas rigorosas de barreira, suporte transfusional, antibióticos e fatores de crescimento hematopoiético (G-CSF)."
    ],
    "correctIndex": 3,
    "explanation": "A aplicação de enfermagem para Síndrome Aguda de Radiação (SAR) e as suas três formas clínicas baseia-se no princípio: Em caso de catástrofe radioativa, o enfermeiro em isolamento protetor reverso cuida do doente aplásico com medidas rigorosas de barreira, suporte transfusional, antibióticos e fatores de crescimento hematopoiético (G-CSF). Esta intervenção garante a segurança radiológica do doente e do profissional.",
    "distractorAnalysis": [
      "Está incorreta: é perigosa e absurda: os profissionais devem proteger-se ativamente e não expor-se voluntariamente à radiação.",
      "Está incorreta: provocaria queimaduras químicas graves; não há qualquer radiação externa que justifique lixívia após Raios X.",
      "Está incorreta: confunde radiografia simples externa (onde não fica qualquer radioatividade no corpo) com contaminação radioativa interna."
    ],
    "nursingApplication": "Em caso de catástrofe radioativa, o enfermeiro em isolamento protetor reverso cuida do doente aplásico com medidas rigorosas de barreira, suporte transfusional, antibióticos e fatores de crescimento hematopoiético (G-CSF)."
  },
  {
    "id": 5167,
    "topicId": 5,
    "question": "Um enfermeiro analisa os parâmetros biofísicos e os mecanismos de interação em 'Síndrome Aguda de Radiação (SAR) e as suas três formas clínicas'. Qual das seguintes afirmações expressa a correlação científica correta?",
    "options": [
      "A análise biofísica correta confirma que Evolui através da forma hematopoética (1 a 6 Gy, aplasia medular e neutropenia), forma gastrointestinal (6 a 20 Gy, destruição das criptas intestinais, diarreia profusa e sépsis) e neurovascular (> 20 Gy, colapso circulatório, edema cerebral e óbito em 24-48h).",
      "A atenuação da radiação é rigorosamente nula em qualquer material, atravessando 10 metros de chumbo maciço sem qualquer perda de intensidade.",
      "O efeito fotoelétrico ocorre com igual probabilidade no ar, na gordura, no músculo e no osso, sendo independente do número atómico Z.",
      "A radiação dispersa por espalhamento Compton desaparece espontaneamente se as janelas da sala de exames estiverem abertas."
    ],
    "correctIndex": 0,
    "explanation": "A correlação científica correta demonstra que Evolui através da forma hematopoética (1 a 6 Gy, aplasia medular e neutropenia), forma gastrointestinal (6 a 20 Gy, destruição das criptas intestinais, diarreia profusa e sépsis) e neurovascular (> 20 Gy, colapso circulatório, edema cerebral e óbito em 24-48h). O domínio destes fundamentos permite ao enfermeiro assegurar a correta radioproteção e a interpretação dos riscos radiológicos.",
    "distractorAnalysis": [
      "Está incorreta: ignora a Lei de atenuação exponencial da radiação e a eficácia comprovada do chumbo como blindagem protetora.",
      "Está incorreta: nega a dependência estrita em Z³ do efeito fotoelétrico, que é a base física do contraste ósseo.",
      "Está incorreta: confunde radiação eletromagnética ionizante em linha reta com correntes de ar atmosférico."
    ],
    "nursingApplication": "Em caso de catástrofe radioativa, o enfermeiro em isolamento protetor reverso cuida do doente aplásico com medidas rigorosas de barreira, suporte transfusional, antibióticos e fatores de crescimento hematopoiético (G-CSF)."
  },
  {
    "id": 5168,
    "topicId": 5,
    "question": "Na física das radiações ionizantes e Raios X aplicada ao contexto hospitalar, em relação a 'eritema cutâneo e radiodermite em intervenções fluoroscópicas prolongadas', qual é a fundamentação científica exata?",
    "options": [
      "Os Raios X são constituídos por partículas gasosas de oxigénio líquido que evaporam instantaneamente à temperatura da sala.",
      "procedimentos endovasculares complexos (como cateterismos cardíacos difíceis ou embolizações com fluoroscopia contínua de várias horas) podem aplicar doses cutâneas locais superiores a 2 a 5 Gy. A morte das células estaminais da camada basal da epiderme origina eritema que surge 1 a 3 semanas após o exame, podendo evoluir para ulceração necrótica dolorosa.",
      "Trata-se de uma radiação puramente acústica e ultrassónica inaudível gerada pelo atrito das rodas da cama hospitalar.",
      "A radiação ionizante anula todas as ligações químicas do organismo humano transformando o doente num holograma sem massa."
    ],
    "correctIndex": 1,
    "explanation": "Em física das radiações e imagiologia médica, eritema cutâneo e radiodermite em intervenções fluoroscópicas prolongadas explica-se pelo facto de que procedimentos endovasculares complexos (como cateterismos cardíacos difíceis ou embolizações com fluoroscopia contínua de várias horas) podem aplicar doses cutâneas locais superiores a 2 a 5 Gy. A morte das células estaminais da camada basal da epiderme origina eritema que surge 1 a 3 semanas após o exame, podendo evoluir para ulceração necrótica dolorosa.",
    "distractorAnalysis": [
      "Está incorreta: confunde radiação eletromagnética fotónica com matéria gasosa comum.",
      "Está incorreta: confunde Raios X com ondas mecânicas sonoras ou ultrassons.",
      "Está incorreta: é uma fantasia pseudocientífica que viola as leis da conservação da massa e da matéria."
    ],
    "nursingApplication": "O enfermeiro de hemodinâmica regista e monitoriza a dose de produto dose-área (DAP) e o tempo total de fluoroscopia, inspecionando a pele lombar e torácica do doente antes da alta hospitalar."
  },
  {
    "id": 5169,
    "topicId": 5,
    "question": "Durante os cuidados de enfermagem a um doente submetido a procedimentos imagiológicos com radiações, como se aplica na prática o conceito de 'eritema cutâneo e radiodermite em intervenções fluoroscópicas prolongadas'?",
    "options": [
      "Implica que o enfermeiro retire toda a blindagem de chumbo para que o seu corpo absorva a radiação em substituição do doente.",
      "Exige a imersão do doente numa banheira com lixívia concentrada durante 3 horas após o exame radiológico.",
      "Traduz-se na seguinte intervenção clínica fundamentada: O enfermeiro de hemodinâmica regista e monitoriza a dose de produto dose-área (DAP) e o tempo total de fluoroscopia, inspecionando a pele lombar e torácica do doente antes da alta hospitalar.",
      "Requer a proibição permanente de contacto humano com o doente radiografado durante 6 meses após a radiografia de tórax."
    ],
    "correctIndex": 2,
    "explanation": "A aplicação de enfermagem para eritema cutâneo e radiodermite em intervenções fluoroscópicas prolongadas baseia-se no princípio: O enfermeiro de hemodinâmica regista e monitoriza a dose de produto dose-área (DAP) e o tempo total de fluoroscopia, inspecionando a pele lombar e torácica do doente antes da alta hospitalar. Esta intervenção garante a segurança radiológica do doente e do profissional.",
    "distractorAnalysis": [
      "Está incorreta: é perigosa e absurda: os profissionais devem proteger-se ativamente e não expor-se voluntariamente à radiação.",
      "Está incorreta: provocaria queimaduras químicas graves; não há qualquer radiação externa que justifique lixívia após Raios X.",
      "Está incorreta: confunde radiografia simples externa (onde não fica qualquer radioatividade no corpo) com contaminação radioativa interna."
    ],
    "nursingApplication": "O enfermeiro de hemodinâmica regista e monitoriza a dose de produto dose-área (DAP) e o tempo total de fluoroscopia, inspecionando a pele lombar e torácica do doente antes da alta hospitalar."
  },
  {
    "id": 5170,
    "topicId": 5,
    "question": "Um enfermeiro analisa os parâmetros biofísicos e os mecanismos de interação em 'eritema cutâneo e radiodermite em intervenções fluoroscópicas prolongadas'. Qual das seguintes afirmações expressa a correlação científica correta?",
    "options": [
      "A atenuação da radiação é rigorosamente nula em qualquer material, atravessando 10 metros de chumbo maciço sem qualquer perda de intensidade.",
      "O efeito fotoelétrico ocorre com igual probabilidade no ar, na gordura, no músculo e no osso, sendo independente do número atómico Z.",
      "A radiação dispersa por espalhamento Compton desaparece espontaneamente se as janelas da sala de exames estiverem abertas.",
      "A análise biofísica correta confirma que A morte das células estaminais da camada basal da epiderme origina eritema que surge 1 a 3 semanas após o exame, podendo evoluir para ulceração necrótica dolorosa."
    ],
    "correctIndex": 3,
    "explanation": "A correlação científica correta demonstra que A morte das células estaminais da camada basal da epiderme origina eritema que surge 1 a 3 semanas após o exame, podendo evoluir para ulceração necrótica dolorosa. O domínio destes fundamentos permite ao enfermeiro assegurar a correta radioproteção e a interpretação dos riscos radiológicos.",
    "distractorAnalysis": [
      "Está incorreta: ignora a Lei de atenuação exponencial da radiação e a eficácia comprovada do chumbo como blindagem protetora.",
      "Está incorreta: nega a dependência estrita em Z³ do efeito fotoelétrico, que é a base física do contraste ósseo.",
      "Está incorreta: confunde radiação eletromagnética ionizante em linha reta com correntes de ar atmosférico."
    ],
    "nursingApplication": "O enfermeiro de hemodinâmica regista e monitoriza a dose de produto dose-área (DAP) e o tempo total de fluoroscopia, inspecionando a pele lombar e torácica do doente antes da alta hospitalar."
  },
  {
    "id": 5171,
    "topicId": 5,
    "question": "Na física das radiações ionizantes e Raios X aplicada ao contexto hospitalar, em relação a 'enunciado científico da Lei de Bergonié e Tribondeau (1906)', qual é a fundamentação científica exata?",
    "options": [
      "a radiossensibilidade de uma célula biológica é diretamente proporcional à sua capacidade e taxa de divisão mitótica e inversamente proporcional ao seu grau de diferenciação morfológica e funcional. Células indiferenciadas (como células estaminais e percursoras hematopoiéticas) que se dividem ativamente e têm longo futuro reprodutivo são extremamente sensíveis à morte por radiação.",
      "Os Raios X são constituídos por partículas gasosas de oxigénio líquido que evaporam instantaneamente à temperatura da sala.",
      "Trata-se de uma radiação puramente acústica e ultrassónica inaudível gerada pelo atrito das rodas da cama hospitalar.",
      "A radiação ionizante anula todas as ligações químicas do organismo humano transformando o doente num holograma sem massa."
    ],
    "correctIndex": 0,
    "explanation": "Em física das radiações e imagiologia médica, enunciado científico da Lei de Bergonié e Tribondeau (1906) explica-se pelo facto de que a radiossensibilidade de uma célula biológica é diretamente proporcional à sua capacidade e taxa de divisão mitótica e inversamente proporcional ao seu grau de diferenciação morfológica e funcional. Células indiferenciadas (como células estaminais e percursoras hematopoiéticas) que se dividem ativamente e têm longo futuro reprodutivo são extremamente sensíveis à morte por radiação.",
    "distractorAnalysis": [
      "Está incorreta: confunde radiação eletromagnética fotónica com matéria gasosa comum.",
      "Está incorreta: confunde Raios X com ondas mecânicas sonoras ou ultrassons.",
      "Está incorreta: é uma fantasia pseudocientífica que viola as leis da conservação da massa e da matéria."
    ],
    "nursingApplication": "O enfermeiro compreende que a medula óssea, o epitélio de revestimento intestinal e as células germinativas dos testículos e ovários são os alvos biológicos mais vulneráveis do corpo humano."
  },
  {
    "id": 5172,
    "topicId": 5,
    "question": "Durante os cuidados de enfermagem a um doente submetido a procedimentos imagiológicos com radiações, como se aplica na prática o conceito de 'enunciado científico da Lei de Bergonié e Tribondeau (1906)'?",
    "options": [
      "Implica que o enfermeiro retire toda a blindagem de chumbo para que o seu corpo absorva a radiação em substituição do doente.",
      "Traduz-se na seguinte intervenção clínica fundamentada: O enfermeiro compreende que a medula óssea, o epitélio de revestimento intestinal e as células germinativas dos testículos e ovários são os alvos biológicos mais vulneráveis do corpo humano.",
      "Exige a imersão do doente numa banheira com lixívia concentrada durante 3 horas após o exame radiológico.",
      "Requer a proibição permanente de contacto humano com o doente radiografado durante 6 meses após a radiografia de tórax."
    ],
    "correctIndex": 1,
    "explanation": "A aplicação de enfermagem para enunciado científico da Lei de Bergonié e Tribondeau (1906) baseia-se no princípio: O enfermeiro compreende que a medula óssea, o epitélio de revestimento intestinal e as células germinativas dos testículos e ovários são os alvos biológicos mais vulneráveis do corpo humano. Esta intervenção garante a segurança radiológica do doente e do profissional.",
    "distractorAnalysis": [
      "Está incorreta: é perigosa e absurda: os profissionais devem proteger-se ativamente e não expor-se voluntariamente à radiação.",
      "Está incorreta: provocaria queimaduras químicas graves; não há qualquer radiação externa que justifique lixívia após Raios X.",
      "Está incorreta: confunde radiografia simples externa (onde não fica qualquer radioatividade no corpo) com contaminação radioativa interna."
    ],
    "nursingApplication": "O enfermeiro compreende que a medula óssea, o epitélio de revestimento intestinal e as células germinativas dos testículos e ovários são os alvos biológicos mais vulneráveis do corpo humano."
  },
  {
    "id": 5173,
    "topicId": 5,
    "question": "Um enfermeiro analisa os parâmetros biofísicos e os mecanismos de interação em 'enunciado científico da Lei de Bergonié e Tribondeau (1906)'. Qual das seguintes afirmações expressa a correlação científica correta?",
    "options": [
      "A atenuação da radiação é rigorosamente nula em qualquer material, atravessando 10 metros de chumbo maciço sem qualquer perda de intensidade.",
      "O efeito fotoelétrico ocorre com igual probabilidade no ar, na gordura, no músculo e no osso, sendo independente do número atómico Z.",
      "A análise biofísica correta confirma que Células indiferenciadas (como células estaminais e percursoras hematopoiéticas) que se dividem ativamente e têm longo futuro reprodutivo são extremamente sensíveis à morte por radiação.",
      "A radiação dispersa por espalhamento Compton desaparece espontaneamente se as janelas da sala de exames estiverem abertas."
    ],
    "correctIndex": 2,
    "explanation": "A correlação científica correta demonstra que Células indiferenciadas (como células estaminais e percursoras hematopoiéticas) que se dividem ativamente e têm longo futuro reprodutivo são extremamente sensíveis à morte por radiação. O domínio destes fundamentos permite ao enfermeiro assegurar a correta radioproteção e a interpretação dos riscos radiológicos.",
    "distractorAnalysis": [
      "Está incorreta: ignora a Lei de atenuação exponencial da radiação e a eficácia comprovada do chumbo como blindagem protetora.",
      "Está incorreta: nega a dependência estrita em Z³ do efeito fotoelétrico, que é a base física do contraste ósseo.",
      "Está incorreta: confunde radiação eletromagnética ionizante em linha reta com correntes de ar atmosférico."
    ],
    "nursingApplication": "O enfermeiro compreende que a medula óssea, o epitélio de revestimento intestinal e as células germinativas dos testículos e ovários são os alvos biológicos mais vulneráveis do corpo humano."
  },
  {
    "id": 5174,
    "topicId": 5,
    "question": "Na física das radiações ionizantes e Raios X aplicada ao contexto hospitalar, em relação a 'alta radiossensibilidade da medula óssea hematopoética', qual é a fundamentação científica exata?",
    "options": [
      "Os Raios X são constituídos por partículas gasosas de oxigénio líquido que evaporam instantaneamente à temperatura da sala.",
      "Trata-se de uma radiação puramente acústica e ultrassónica inaudível gerada pelo atrito das rodas da cama hospitalar.",
      "A radiação ionizante anula todas as ligações químicas do organismo humano transformando o doente num holograma sem massa.",
      "os mieloblastos, eritroblastos e megacariócitos sofrem apoptose rápida sob doses de radiação ionizante de apenas poucas frações de Gray. A consequente pancitopenia manifesta-se clinicamente após a latência dos elementos circulantes: linfopenia quase imediata (horas), neutropenia (dias) com risco de infeções graves, trombocitopenia com hemorragias e anemia."
    ],
    "correctIndex": 3,
    "explanation": "Em física das radiações e imagiologia médica, alta radiossensibilidade da medula óssea hematopoética explica-se pelo facto de que os mieloblastos, eritroblastos e megacariócitos sofrem apoptose rápida sob doses de radiação ionizante de apenas poucas frações de Gray. A consequente pancitopenia manifesta-se clinicamente após a latência dos elementos circulantes: linfopenia quase imediata (horas), neutropenia (dias) com risco de infeções graves, trombocitopenia com hemorragias e anemia.",
    "distractorAnalysis": [
      "Está incorreta: confunde radiação eletromagnética fotónica com matéria gasosa comum.",
      "Está incorreta: confunde Raios X com ondas mecânicas sonoras ou ultrassons.",
      "Está incorreta: é uma fantasia pseudocientífica que viola as leis da conservação da massa e da matéria."
    ],
    "nursingApplication": "O enfermeiro monitoriza rigorosamente a contagem de neutrófilos e plaquetas em doentes submetidos a quimiorradioterapia, aplicando protocolos de isolamento neutropénico perante contagens < 500 neutrófilos/mm³."
  },
  {
    "id": 5175,
    "topicId": 5,
    "question": "Durante os cuidados de enfermagem a um doente submetido a procedimentos imagiológicos com radiações, como se aplica na prática o conceito de 'alta radiossensibilidade da medula óssea hematopoética'?",
    "options": [
      "Traduz-se na seguinte intervenção clínica fundamentada: O enfermeiro monitoriza rigorosamente a contagem de neutrófilos e plaquetas em doentes submetidos a quimiorradioterapia, aplicando protocolos de isolamento neutropénico perante contagens < 500 neutrófilos/mm³.",
      "Implica que o enfermeiro retire toda a blindagem de chumbo para que o seu corpo absorva a radiação em substituição do doente.",
      "Exige a imersão do doente numa banheira com lixívia concentrada durante 3 horas após o exame radiológico.",
      "Requer a proibição permanente de contacto humano com o doente radiografado durante 6 meses após a radiografia de tórax."
    ],
    "correctIndex": 0,
    "explanation": "A aplicação de enfermagem para alta radiossensibilidade da medula óssea hematopoética baseia-se no princípio: O enfermeiro monitoriza rigorosamente a contagem de neutrófilos e plaquetas em doentes submetidos a quimiorradioterapia, aplicando protocolos de isolamento neutropénico perante contagens < 500 neutrófilos/mm³. Esta intervenção garante a segurança radiológica do doente e do profissional.",
    "distractorAnalysis": [
      "Está incorreta: é perigosa e absurda: os profissionais devem proteger-se ativamente e não expor-se voluntariamente à radiação.",
      "Está incorreta: provocaria queimaduras químicas graves; não há qualquer radiação externa que justifique lixívia após Raios X.",
      "Está incorreta: confunde radiografia simples externa (onde não fica qualquer radioatividade no corpo) com contaminação radioativa interna."
    ],
    "nursingApplication": "O enfermeiro monitoriza rigorosamente a contagem de neutrófilos e plaquetas em doentes submetidos a quimiorradioterapia, aplicando protocolos de isolamento neutropénico perante contagens < 500 neutrófilos/mm³."
  },
  {
    "id": 5176,
    "topicId": 5,
    "question": "Um enfermeiro analisa os parâmetros biofísicos e os mecanismos de interação em 'alta radiossensibilidade da medula óssea hematopoética'. Qual das seguintes afirmações expressa a correlação científica correta?",
    "options": [
      "A atenuação da radiação é rigorosamente nula em qualquer material, atravessando 10 metros de chumbo maciço sem qualquer perda de intensidade.",
      "A análise biofísica correta confirma que A consequente pancitopenia manifesta-se clinicamente após a latência dos elementos circulantes: linfopenia quase imediata (horas), neutropenia (dias) com risco de infeções graves, trombocitopenia com hemorragias e anemia.",
      "O efeito fotoelétrico ocorre com igual probabilidade no ar, na gordura, no músculo e no osso, sendo independente do número atómico Z.",
      "A radiação dispersa por espalhamento Compton desaparece espontaneamente se as janelas da sala de exames estiverem abertas."
    ],
    "correctIndex": 1,
    "explanation": "A correlação científica correta demonstra que A consequente pancitopenia manifesta-se clinicamente após a latência dos elementos circulantes: linfopenia quase imediata (horas), neutropenia (dias) com risco de infeções graves, trombocitopenia com hemorragias e anemia. O domínio destes fundamentos permite ao enfermeiro assegurar a correta radioproteção e a interpretação dos riscos radiológicos.",
    "distractorAnalysis": [
      "Está incorreta: ignora a Lei de atenuação exponencial da radiação e a eficácia comprovada do chumbo como blindagem protetora.",
      "Está incorreta: nega a dependência estrita em Z³ do efeito fotoelétrico, que é a base física do contraste ósseo.",
      "Está incorreta: confunde radiação eletromagnética ionizante em linha reta com correntes de ar atmosférico."
    ],
    "nursingApplication": "O enfermeiro monitoriza rigorosamente a contagem de neutrófilos e plaquetas em doentes submetidos a quimiorradioterapia, aplicando protocolos de isolamento neutropénico perante contagens < 500 neutrófilos/mm³."
  },
  {
    "id": 5177,
    "topicId": 5,
    "question": "Na física das radiações ionizantes e Raios X aplicada ao contexto hospitalar, em relação a 'radiossensibilidade do embrião e feto nas diferentes fases da gestação', qual é a fundamentação científica exata?",
    "options": [
      "Os Raios X são constituídos por partículas gasosas de oxigénio líquido que evaporam instantaneamente à temperatura da sala.",
      "Trata-se de uma radiação puramente acústica e ultrassónica inaudível gerada pelo atrito das rodas da cama hospitalar.",
      "o embrião e o feto em rápido desenvolvimento possuem células com máxima taxa proliferativa e mínima diferenciação, enquadrando-se no pico de sensibilidade de Bergonié-Tribondeau. O período de organogénese precoce (2.ª à 8.ª semana pós-conceção) é o mais suscetível à indução de malformações congénitas major estruturais e microcefalia; no período pré-implantação (0 a 2 semanas) vigora a regra do 'tudo ou nada' (morte embrionária ou desenvolvimento sem defeitos).",
      "A radiação ionizante anula todas as ligações químicas do organismo humano transformando o doente num holograma sem massa."
    ],
    "correctIndex": 2,
    "explanation": "Em física das radiações e imagiologia médica, radiossensibilidade do embrião e feto nas diferentes fases da gestação explica-se pelo facto de que o embrião e o feto em rápido desenvolvimento possuem células com máxima taxa proliferativa e mínima diferenciação, enquadrando-se no pico de sensibilidade de Bergonié-Tribondeau. O período de organogénese precoce (2.ª à 8.ª semana pós-conceção) é o mais suscetível à indução de malformações congénitas major estruturais e microcefalia; no período pré-implantação (0 a 2 semanas) vigora a regra do 'tudo ou nada' (morte embrionária ou desenvolvimento sem defeitos).",
    "distractorAnalysis": [
      "Está incorreta: confunde radiação eletromagnética fotónica com matéria gasosa comum.",
      "Está incorreta: confunde Raios X com ondas mecânicas sonoras ou ultrassons.",
      "Está incorreta: é uma fantasia pseudocientífica que viola as leis da conservação da massa e da matéria."
    ],
    "nursingApplication": "O enfermeiro aplica obrigatoriamente a 'Regra dos 10 Dias' ou questiona a data da última menstruação (DUM) e realiza teste de gravidez a todas as mulheres em idade fértil antes de qualquer exame radiológico pélvico."
  },
  {
    "id": 5178,
    "topicId": 5,
    "question": "Durante os cuidados de enfermagem a um doente submetido a procedimentos imagiológicos com radiações, como se aplica na prática o conceito de 'radiossensibilidade do embrião e feto nas diferentes fases da gestação'?",
    "options": [
      "Implica que o enfermeiro retire toda a blindagem de chumbo para que o seu corpo absorva a radiação em substituição do doente.",
      "Exige a imersão do doente numa banheira com lixívia concentrada durante 3 horas após o exame radiológico.",
      "Requer a proibição permanente de contacto humano com o doente radiografado durante 6 meses após a radiografia de tórax.",
      "Traduz-se na seguinte intervenção clínica fundamentada: O enfermeiro aplica obrigatoriamente a 'Regra dos 10 Dias' ou questiona a data da última menstruação (DUM) e realiza teste de gravidez a todas as mulheres em idade fértil antes de qualquer exame radiológico pélvico."
    ],
    "correctIndex": 3,
    "explanation": "A aplicação de enfermagem para radiossensibilidade do embrião e feto nas diferentes fases da gestação baseia-se no princípio: O enfermeiro aplica obrigatoriamente a 'Regra dos 10 Dias' ou questiona a data da última menstruação (DUM) e realiza teste de gravidez a todas as mulheres em idade fértil antes de qualquer exame radiológico pélvico. Esta intervenção garante a segurança radiológica do doente e do profissional.",
    "distractorAnalysis": [
      "Está incorreta: é perigosa e absurda: os profissionais devem proteger-se ativamente e não expor-se voluntariamente à radiação.",
      "Está incorreta: provocaria queimaduras químicas graves; não há qualquer radiação externa que justifique lixívia após Raios X.",
      "Está incorreta: confunde radiografia simples externa (onde não fica qualquer radioatividade no corpo) com contaminação radioativa interna."
    ],
    "nursingApplication": "O enfermeiro aplica obrigatoriamente a 'Regra dos 10 Dias' ou questiona a data da última menstruação (DUM) e realiza teste de gravidez a todas as mulheres em idade fértil antes de qualquer exame radiológico pélvico."
  },
  {
    "id": 5179,
    "topicId": 5,
    "question": "Um enfermeiro analisa os parâmetros biofísicos e os mecanismos de interação em 'radiossensibilidade do embrião e feto nas diferentes fases da gestação'. Qual das seguintes afirmações expressa a correlação científica correta?",
    "options": [
      "A análise biofísica correta confirma que O período de organogénese precoce (2.ª à 8.ª semana pós-conceção) é o mais suscetível à indução de malformações congénitas major estruturais e microcefalia; no período pré-implantação (0 a 2 semanas) vigora a regra do 'tudo ou nada' (morte embrionária ou desenvolvimento sem defeitos).",
      "A atenuação da radiação é rigorosamente nula em qualquer material, atravessando 10 metros de chumbo maciço sem qualquer perda de intensidade.",
      "O efeito fotoelétrico ocorre com igual probabilidade no ar, na gordura, no músculo e no osso, sendo independente do número atómico Z.",
      "A radiação dispersa por espalhamento Compton desaparece espontaneamente se as janelas da sala de exames estiverem abertas."
    ],
    "correctIndex": 0,
    "explanation": "A correlação científica correta demonstra que O período de organogénese precoce (2.ª à 8.ª semana pós-conceção) é o mais suscetível à indução de malformações congénitas major estruturais e microcefalia; no período pré-implantação (0 a 2 semanas) vigora a regra do 'tudo ou nada' (morte embrionária ou desenvolvimento sem defeitos). O domínio destes fundamentos permite ao enfermeiro assegurar a correta radioproteção e a interpretação dos riscos radiológicos.",
    "distractorAnalysis": [
      "Está incorreta: ignora a Lei de atenuação exponencial da radiação e a eficácia comprovada do chumbo como blindagem protetora.",
      "Está incorreta: nega a dependência estrita em Z³ do efeito fotoelétrico, que é a base física do contraste ósseo.",
      "Está incorreta: confunde radiação eletromagnética ionizante em linha reta com correntes de ar atmosférico."
    ],
    "nursingApplication": "O enfermeiro aplica obrigatoriamente a 'Regra dos 10 Dias' ou questiona a data da última menstruação (DUM) e realiza teste de gravidez a todas as mulheres em idade fértil antes de qualquer exame radiológico pélvico."
  },
  {
    "id": 5180,
    "topicId": 5,
    "question": "Na física das radiações ionizantes e Raios X aplicada ao contexto hospitalar, em relação a 'baixa radiossensibilidade de tecidos maduros altamente diferenciados', qual é a fundamentação científica exata?",
    "options": [
      "Os Raios X são constituídos por partículas gasosas de oxigénio líquido que evaporam instantaneamente à temperatura da sala.",
      "células permanentemente pós-mitóticas como os neurónios corticais do sistema nervoso central e as fibras musculares cardíacas (cardiomiócitos) possuem altíssima radioresistência intrínseca. Requerem doses locais maciças (> 20 a 50 Gy) para apresentarem necrose celular aguda, pois não entram em divisão mitótica que desmascare as quebras do DNA.",
      "Trata-se de uma radiação puramente acústica e ultrassónica inaudível gerada pelo atrito das rodas da cama hospitalar.",
      "A radiação ionizante anula todas as ligações químicas do organismo humano transformando o doente num holograma sem massa."
    ],
    "correctIndex": 1,
    "explanation": "Em física das radiações e imagiologia médica, baixa radiossensibilidade de tecidos maduros altamente diferenciados explica-se pelo facto de que células permanentemente pós-mitóticas como os neurónios corticais do sistema nervoso central e as fibras musculares cardíacas (cardiomiócitos) possuem altíssima radioresistência intrínseca. Requerem doses locais maciças (> 20 a 50 Gy) para apresentarem necrose celular aguda, pois não entram em divisão mitótica que desmascare as quebras do DNA.",
    "distractorAnalysis": [
      "Está incorreta: confunde radiação eletromagnética fotónica com matéria gasosa comum.",
      "Está incorreta: confunde Raios X com ondas mecânicas sonoras ou ultrassons.",
      "Está incorreta: é uma fantasia pseudocientífica que viola as leis da conservação da massa e da matéria."
    ],
    "nursingApplication": "O enfermeiro reconhece que a toxicidade aguda da radiação afeta primariamente as mucosas e a pele, e não o tecido nervoso ou miocárdico imediato."
  },
  {
    "id": 5181,
    "topicId": 5,
    "question": "Durante os cuidados de enfermagem a um doente submetido a procedimentos imagiológicos com radiações, como se aplica na prática o conceito de 'baixa radiossensibilidade de tecidos maduros altamente diferenciados'?",
    "options": [
      "Implica que o enfermeiro retire toda a blindagem de chumbo para que o seu corpo absorva a radiação em substituição do doente.",
      "Exige a imersão do doente numa banheira com lixívia concentrada durante 3 horas após o exame radiológico.",
      "Traduz-se na seguinte intervenção clínica fundamentada: O enfermeiro reconhece que a toxicidade aguda da radiação afeta primariamente as mucosas e a pele, e não o tecido nervoso ou miocárdico imediato.",
      "Requer a proibição permanente de contacto humano com o doente radiografado durante 6 meses após a radiografia de tórax."
    ],
    "correctIndex": 2,
    "explanation": "A aplicação de enfermagem para baixa radiossensibilidade de tecidos maduros altamente diferenciados baseia-se no princípio: O enfermeiro reconhece que a toxicidade aguda da radiação afeta primariamente as mucosas e a pele, e não o tecido nervoso ou miocárdico imediato. Esta intervenção garante a segurança radiológica do doente e do profissional.",
    "distractorAnalysis": [
      "Está incorreta: é perigosa e absurda: os profissionais devem proteger-se ativamente e não expor-se voluntariamente à radiação.",
      "Está incorreta: provocaria queimaduras químicas graves; não há qualquer radiação externa que justifique lixívia após Raios X.",
      "Está incorreta: confunde radiografia simples externa (onde não fica qualquer radioatividade no corpo) com contaminação radioativa interna."
    ],
    "nursingApplication": "O enfermeiro reconhece que a toxicidade aguda da radiação afeta primariamente as mucosas e a pele, e não o tecido nervoso ou miocárdico imediato."
  },
  {
    "id": 5182,
    "topicId": 5,
    "question": "Um enfermeiro analisa os parâmetros biofísicos e os mecanismos de interação em 'baixa radiossensibilidade de tecidos maduros altamente diferenciados'. Qual das seguintes afirmações expressa a correlação científica correta?",
    "options": [
      "A atenuação da radiação é rigorosamente nula em qualquer material, atravessando 10 metros de chumbo maciço sem qualquer perda de intensidade.",
      "O efeito fotoelétrico ocorre com igual probabilidade no ar, na gordura, no músculo e no osso, sendo independente do número atómico Z.",
      "A radiação dispersa por espalhamento Compton desaparece espontaneamente se as janelas da sala de exames estiverem abertas.",
      "A análise biofísica correta confirma que Requerem doses locais maciças (> 20 a 50 Gy) para apresentarem necrose celular aguda, pois não entram em divisão mitótica que desmascare as quebras do DNA."
    ],
    "correctIndex": 3,
    "explanation": "A correlação científica correta demonstra que Requerem doses locais maciças (> 20 a 50 Gy) para apresentarem necrose celular aguda, pois não entram em divisão mitótica que desmascare as quebras do DNA. O domínio destes fundamentos permite ao enfermeiro assegurar a correta radioproteção e a interpretação dos riscos radiológicos.",
    "distractorAnalysis": [
      "Está incorreta: ignora a Lei de atenuação exponencial da radiação e a eficácia comprovada do chumbo como blindagem protetora.",
      "Está incorreta: nega a dependência estrita em Z³ do efeito fotoelétrico, que é a base física do contraste ósseo.",
      "Está incorreta: confunde radiação eletromagnética ionizante em linha reta com correntes de ar atmosférico."
    ],
    "nursingApplication": "O enfermeiro reconhece que a toxicidade aguda da radiação afeta primariamente as mucosas e a pele, e não o tecido nervoso ou miocárdico imediato."
  },
  {
    "id": 5183,
    "topicId": 5,
    "question": "Na física das radiações ionizantes e Raios X aplicada ao contexto hospitalar, em relação a 'radiossensibilidade do epitélio gastrointestinal e mucosite', qual é a fundamentação científica exata?",
    "options": [
      "as células estaminais nas criptas de Lieberkühn do intestino delgado e no estrato basal da mucosa oral dividem-se a cada 24 horas para renovar o epitélio. A irradiação pélvica ou cervical destrói estas células regenerativas, provocando denudação epitelial, dor intensa, diarreia secretora e disfagia.",
      "Os Raios X são constituídos por partículas gasosas de oxigénio líquido que evaporam instantaneamente à temperatura da sala.",
      "Trata-se de uma radiação puramente acústica e ultrassónica inaudível gerada pelo atrito das rodas da cama hospitalar.",
      "A radiação ionizante anula todas as ligações químicas do organismo humano transformando o doente num holograma sem massa."
    ],
    "correctIndex": 0,
    "explanation": "Em física das radiações e imagiologia médica, radiossensibilidade do epitélio gastrointestinal e mucosite explica-se pelo facto de que as células estaminais nas criptas de Lieberkühn do intestino delgado e no estrato basal da mucosa oral dividem-se a cada 24 horas para renovar o epitélio. A irradiação pélvica ou cervical destrói estas células regenerativas, provocando denudação epitelial, dor intensa, diarreia secretora e disfagia.",
    "distractorAnalysis": [
      "Está incorreta: confunde radiação eletromagnética fotónica com matéria gasosa comum.",
      "Está incorreta: confunde Raios X com ondas mecânicas sonoras ou ultrassons.",
      "Está incorreta: é uma fantasia pseudocientífica que viola as leis da conservação da massa e da matéria."
    ],
    "nursingApplication": "O enfermeiro institui cuidados orais profiláticos com elixires sem álcool, analgesia escalonada, hidratação e suplementação nutricional líquida em doentes com mucosite radioinduzida."
  },
  {
    "id": 5184,
    "topicId": 5,
    "question": "Durante os cuidados de enfermagem a um doente submetido a procedimentos imagiológicos com radiações, como se aplica na prática o conceito de 'radiossensibilidade do epitélio gastrointestinal e mucosite'?",
    "options": [
      "Implica que o enfermeiro retire toda a blindagem de chumbo para que o seu corpo absorva a radiação em substituição do doente.",
      "Traduz-se na seguinte intervenção clínica fundamentada: O enfermeiro institui cuidados orais profiláticos com elixires sem álcool, analgesia escalonada, hidratação e suplementação nutricional líquida em doentes com mucosite radioinduzida.",
      "Exige a imersão do doente numa banheira com lixívia concentrada durante 3 horas após o exame radiológico.",
      "Requer a proibição permanente de contacto humano com o doente radiografado durante 6 meses após a radiografia de tórax."
    ],
    "correctIndex": 1,
    "explanation": "A aplicação de enfermagem para radiossensibilidade do epitélio gastrointestinal e mucosite baseia-se no princípio: O enfermeiro institui cuidados orais profiláticos com elixires sem álcool, analgesia escalonada, hidratação e suplementação nutricional líquida em doentes com mucosite radioinduzida. Esta intervenção garante a segurança radiológica do doente e do profissional.",
    "distractorAnalysis": [
      "Está incorreta: é perigosa e absurda: os profissionais devem proteger-se ativamente e não expor-se voluntariamente à radiação.",
      "Está incorreta: provocaria queimaduras químicas graves; não há qualquer radiação externa que justifique lixívia após Raios X.",
      "Está incorreta: confunde radiografia simples externa (onde não fica qualquer radioatividade no corpo) com contaminação radioativa interna."
    ],
    "nursingApplication": "O enfermeiro institui cuidados orais profiláticos com elixires sem álcool, analgesia escalonada, hidratação e suplementação nutricional líquida em doentes com mucosite radioinduzida."
  },
  {
    "id": 5185,
    "topicId": 5,
    "question": "Um enfermeiro analisa os parâmetros biofísicos e os mecanismos de interação em 'radiossensibilidade do epitélio gastrointestinal e mucosite'. Qual das seguintes afirmações expressa a correlação científica correta?",
    "options": [
      "A atenuação da radiação é rigorosamente nula em qualquer material, atravessando 10 metros de chumbo maciço sem qualquer perda de intensidade.",
      "O efeito fotoelétrico ocorre com igual probabilidade no ar, na gordura, no músculo e no osso, sendo independente do número atómico Z.",
      "A análise biofísica correta confirma que A irradiação pélvica ou cervical destrói estas células regenerativas, provocando denudação epitelial, dor intensa, diarreia secretora e disfagia.",
      "A radiação dispersa por espalhamento Compton desaparece espontaneamente se as janelas da sala de exames estiverem abertas."
    ],
    "correctIndex": 2,
    "explanation": "A correlação científica correta demonstra que A irradiação pélvica ou cervical destrói estas células regenerativas, provocando denudação epitelial, dor intensa, diarreia secretora e disfagia. O domínio destes fundamentos permite ao enfermeiro assegurar a correta radioproteção e a interpretação dos riscos radiológicos.",
    "distractorAnalysis": [
      "Está incorreta: ignora a Lei de atenuação exponencial da radiação e a eficácia comprovada do chumbo como blindagem protetora.",
      "Está incorreta: nega a dependência estrita em Z³ do efeito fotoelétrico, que é a base física do contraste ósseo.",
      "Está incorreta: confunde radiação eletromagnética ionizante em linha reta com correntes de ar atmosférico."
    ],
    "nursingApplication": "O enfermeiro institui cuidados orais profiláticos com elixires sem álcool, analgesia escalonada, hidratação e suplementação nutricional líquida em doentes com mucosite radioinduzida."
  },
  {
    "id": 5186,
    "topicId": 5,
    "question": "Na física das radiações ionizantes e Raios X aplicada ao contexto hospitalar, em relação a 'filosofia ALARA (As Low As Reasonably Achievable)', qual é a fundamentação científica exata?",
    "options": [
      "Os Raios X são constituídos por partículas gasosas de oxigénio líquido que evaporam instantaneamente à temperatura da sala.",
      "Trata-se de uma radiação puramente acústica e ultrassónica inaudível gerada pelo atrito das rodas da cama hospitalar.",
      "A radiação ionizante anula todas as ligações químicas do organismo humano transformando o doente num holograma sem massa.",
      "princípio fundamental da radioproteção que estabelece que todas as exposições médicas à radiação ionizante devem ser mantidas tão baixas quanto razoavelmente exequível, considerando fatores económicos e sociais. Assenta na tríade de princípios da Comissão Internacional de Proteção Radiológica (ICRP): Justificação da prática, Otimização da proteção e Limitação de doses ocupacionais."
    ],
    "correctIndex": 3,
    "explanation": "Em física das radiações e imagiologia médica, filosofia ALARA (As Low As Reasonably Achievable) explica-se pelo facto de que princípio fundamental da radioproteção que estabelece que todas as exposições médicas à radiação ionizante devem ser mantidas tão baixas quanto razoavelmente exequível, considerando fatores económicos e sociais. Assenta na tríade de princípios da Comissão Internacional de Proteção Radiológica (ICRP): Justificação da prática, Otimização da proteção e Limitação de doses ocupacionais.",
    "distractorAnalysis": [
      "Está incorreta: confunde radiação eletromagnética fotónica com matéria gasosa comum.",
      "Está incorreta: confunde Raios X com ondas mecânicas sonoras ou ultrassons.",
      "Está incorreta: é uma fantasia pseudocientífica que viola as leis da conservação da massa e da matéria."
    ],
    "nursingApplication": "O enfermeiro adota a cultura de segurança ALARA como padrão ético diário, recusando exposições desnecessárias e colaborando na minimização das doses administradas."
  },
  {
    "id": 5187,
    "topicId": 5,
    "question": "Durante os cuidados de enfermagem a um doente submetido a procedimentos imagiológicos com radiações, como se aplica na prática o conceito de 'filosofia ALARA (As Low As Reasonably Achievable)'?",
    "options": [
      "Traduz-se na seguinte intervenção clínica fundamentada: O enfermeiro adota a cultura de segurança ALARA como padrão ético diário, recusando exposições desnecessárias e colaborando na minimização das doses administradas.",
      "Implica que o enfermeiro retire toda a blindagem de chumbo para que o seu corpo absorva a radiação em substituição do doente.",
      "Exige a imersão do doente numa banheira com lixívia concentrada durante 3 horas após o exame radiológico.",
      "Requer a proibição permanente de contacto humano com o doente radiografado durante 6 meses após a radiografia de tórax."
    ],
    "correctIndex": 0,
    "explanation": "A aplicação de enfermagem para filosofia ALARA (As Low As Reasonably Achievable) baseia-se no princípio: O enfermeiro adota a cultura de segurança ALARA como padrão ético diário, recusando exposições desnecessárias e colaborando na minimização das doses administradas. Esta intervenção garante a segurança radiológica do doente e do profissional.",
    "distractorAnalysis": [
      "Está incorreta: é perigosa e absurda: os profissionais devem proteger-se ativamente e não expor-se voluntariamente à radiação.",
      "Está incorreta: provocaria queimaduras químicas graves; não há qualquer radiação externa que justifique lixívia após Raios X.",
      "Está incorreta: confunde radiografia simples externa (onde não fica qualquer radioatividade no corpo) com contaminação radioativa interna."
    ],
    "nursingApplication": "O enfermeiro adota a cultura de segurança ALARA como padrão ético diário, recusando exposições desnecessárias e colaborando na minimização das doses administradas."
  },
  {
    "id": 5188,
    "topicId": 5,
    "question": "Um enfermeiro analisa os parâmetros biofísicos e os mecanismos de interação em 'filosofia ALARA (As Low As Reasonably Achievable)'. Qual das seguintes afirmações expressa a correlação científica correta?",
    "options": [
      "A atenuação da radiação é rigorosamente nula em qualquer material, atravessando 10 metros de chumbo maciço sem qualquer perda de intensidade.",
      "A análise biofísica correta confirma que Assenta na tríade de princípios da Comissão Internacional de Proteção Radiológica (ICRP): Justificação da prática, Otimização da proteção e Limitação de doses ocupacionais.",
      "O efeito fotoelétrico ocorre com igual probabilidade no ar, na gordura, no músculo e no osso, sendo independente do número atómico Z.",
      "A radiação dispersa por espalhamento Compton desaparece espontaneamente se as janelas da sala de exames estiverem abertas."
    ],
    "correctIndex": 1,
    "explanation": "A correlação científica correta demonstra que Assenta na tríade de princípios da Comissão Internacional de Proteção Radiológica (ICRP): Justificação da prática, Otimização da proteção e Limitação de doses ocupacionais. O domínio destes fundamentos permite ao enfermeiro assegurar a correta radioproteção e a interpretação dos riscos radiológicos.",
    "distractorAnalysis": [
      "Está incorreta: ignora a Lei de atenuação exponencial da radiação e a eficácia comprovada do chumbo como blindagem protetora.",
      "Está incorreta: nega a dependência estrita em Z³ do efeito fotoelétrico, que é a base física do contraste ósseo.",
      "Está incorreta: confunde radiação eletromagnética ionizante em linha reta com correntes de ar atmosférico."
    ],
    "nursingApplication": "O enfermeiro adota a cultura de segurança ALARA como padrão ético diário, recusando exposições desnecessárias e colaborando na minimização das doses administradas."
  },
  {
    "id": 5189,
    "topicId": 5,
    "question": "Na física das radiações ionizantes e Raios X aplicada ao contexto hospitalar, em relação a 'três regras fundamentais de radioproteção: Tempo, Distância e Blindagem', qual é a fundamentação científica exata?",
    "options": [
      "Os Raios X são constituídos por partículas gasosas de oxigénio líquido que evaporam instantaneamente à temperatura da sala.",
      "Trata-se de uma radiação puramente acústica e ultrassónica inaudível gerada pelo atrito das rodas da cama hospitalar.",
      "Reduzir o Tempo de permanência na área de exposição ao estritamente necessário; Maximizar a Distância da fonte de radiação; e Interpor Blindagem plúmbea eficaz entre o corpo e o feixe. A combinação destas três barreiras físicas é o método mais simples e poderoso para atenuar as doses absorvidas pelos profissionais de saúde.",
      "A radiação ionizante anula todas as ligações químicas do organismo humano transformando o doente num holograma sem massa."
    ],
    "correctIndex": 2,
    "explanation": "Em física das radiações e imagiologia médica, três regras fundamentais de radioproteção: Tempo, Distância e Blindagem explica-se pelo facto de que Reduzir o Tempo de permanência na área de exposição ao estritamente necessário; Maximizar a Distância da fonte de radiação; e Interpor Blindagem plúmbea eficaz entre o corpo e o feixe. A combinação destas três barreiras físicas é o método mais simples e poderoso para atenuar as doses absorvidas pelos profissionais de saúde.",
    "distractorAnalysis": [
      "Está incorreta: confunde radiação eletromagnética fotónica com matéria gasosa comum.",
      "Está incorreta: confunde Raios X com ondas mecânicas sonoras ou ultrassons.",
      "Está incorreta: é uma fantasia pseudocientífica que viola as leis da conservação da massa e da matéria."
    ],
    "nursingApplication": "O enfermeiro treina previamente todos os passos técnicos de uma intervenção antes de entrar na sala de radiologia para executar o procedimento no menor tempo possível."
  },
  {
    "id": 5190,
    "topicId": 5,
    "question": "Durante os cuidados de enfermagem a um doente submetido a procedimentos imagiológicos com radiações, como se aplica na prática o conceito de 'três regras fundamentais de radioproteção: Tempo, Distância e Blindagem'?",
    "options": [
      "Implica que o enfermeiro retire toda a blindagem de chumbo para que o seu corpo absorva a radiação em substituição do doente.",
      "Exige a imersão do doente numa banheira com lixívia concentrada durante 3 horas após o exame radiológico.",
      "Requer a proibição permanente de contacto humano com o doente radiografado durante 6 meses após a radiografia de tórax.",
      "Traduz-se na seguinte intervenção clínica fundamentada: O enfermeiro treina previamente todos os passos técnicos de uma intervenção antes de entrar na sala de radiologia para executar o procedimento no menor tempo possível."
    ],
    "correctIndex": 3,
    "explanation": "A aplicação de enfermagem para três regras fundamentais de radioproteção: Tempo, Distância e Blindagem baseia-se no princípio: O enfermeiro treina previamente todos os passos técnicos de uma intervenção antes de entrar na sala de radiologia para executar o procedimento no menor tempo possível. Esta intervenção garante a segurança radiológica do doente e do profissional.",
    "distractorAnalysis": [
      "Está incorreta: é perigosa e absurda: os profissionais devem proteger-se ativamente e não expor-se voluntariamente à radiação.",
      "Está incorreta: provocaria queimaduras químicas graves; não há qualquer radiação externa que justifique lixívia após Raios X.",
      "Está incorreta: confunde radiografia simples externa (onde não fica qualquer radioatividade no corpo) com contaminação radioativa interna."
    ],
    "nursingApplication": "O enfermeiro treina previamente todos os passos técnicos de uma intervenção antes de entrar na sala de radiologia para executar o procedimento no menor tempo possível."
  },
  {
    "id": 5191,
    "topicId": 5,
    "question": "Um enfermeiro analisa os parâmetros biofísicos e os mecanismos de interação em 'três regras fundamentais de radioproteção: Tempo, Distância e Blindagem'. Qual das seguintes afirmações expressa a correlação científica correta?",
    "options": [
      "A análise biofísica correta confirma que A combinação destas três barreiras físicas é o método mais simples e poderoso para atenuar as doses absorvidas pelos profissionais de saúde.",
      "A atenuação da radiação é rigorosamente nula em qualquer material, atravessando 10 metros de chumbo maciço sem qualquer perda de intensidade.",
      "O efeito fotoelétrico ocorre com igual probabilidade no ar, na gordura, no músculo e no osso, sendo independente do número atómico Z.",
      "A radiação dispersa por espalhamento Compton desaparece espontaneamente se as janelas da sala de exames estiverem abertas."
    ],
    "correctIndex": 0,
    "explanation": "A correlação científica correta demonstra que A combinação destas três barreiras físicas é o método mais simples e poderoso para atenuar as doses absorvidas pelos profissionais de saúde. O domínio destes fundamentos permite ao enfermeiro assegurar a correta radioproteção e a interpretação dos riscos radiológicos.",
    "distractorAnalysis": [
      "Está incorreta: ignora a Lei de atenuação exponencial da radiação e a eficácia comprovada do chumbo como blindagem protetora.",
      "Está incorreta: nega a dependência estrita em Z³ do efeito fotoelétrico, que é a base física do contraste ósseo.",
      "Está incorreta: confunde radiação eletromagnética ionizante em linha reta com correntes de ar atmosférico."
    ],
    "nursingApplication": "O enfermeiro treina previamente todos os passos técnicos de uma intervenção antes de entrar na sala de radiologia para executar o procedimento no menor tempo possível."
  },
  {
    "id": 5192,
    "topicId": 5,
    "question": "Na física das radiações ionizantes e Raios X aplicada ao contexto hospitalar, em relação a 'Lei do Inverso do Quadrado da Distância (I ∝ 1 / d²)', qual é a fundamentação científica exata?",
    "options": [
      "Os Raios X são constituídos por partículas gasosas de oxigénio líquido que evaporam instantaneamente à temperatura da sala.",
      "a intensidade (I) da radiação dispersa por uma fonte pontual é inversamente proporcional ao quadrado da distância (d) à fonte. Ao dobrar a distância da fonte (de 1 metro para 2 metros), a intensidade da radiação cai para um quarto (redução de 75%); ao triplicar a distância (de 1 para 3 metros), a dose cai para um nono (apenas 11% da inicial!).",
      "Trata-se de uma radiação puramente acústica e ultrassónica inaudível gerada pelo atrito das rodas da cama hospitalar.",
      "A radiação ionizante anula todas as ligações químicas do organismo humano transformando o doente num holograma sem massa."
    ],
    "correctIndex": 1,
    "explanation": "Em física das radiações e imagiologia médica, Lei do Inverso do Quadrado da Distância (I ∝ 1 / d²) explica-se pelo facto de que a intensidade (I) da radiação dispersa por uma fonte pontual é inversamente proporcional ao quadrado da distância (d) à fonte. Ao dobrar a distância da fonte (de 1 metro para 2 metros), a intensidade da radiação cai para um quarto (redução de 75%); ao triplicar a distância (de 1 para 3 metros), a dose cai para um nono (apenas 11% da inicial!).",
    "distractorAnalysis": [
      "Está incorreta: confunde radiação eletromagnética fotónica com matéria gasosa comum.",
      "Está incorreta: confunde Raios X com ondas mecânicas sonoras ou ultrassons.",
      "Está incorreta: é uma fantasia pseudocientífica que viola as leis da conservação da massa e da matéria."
    ],
    "nursingApplication": "Durante o disparo de um aparelho móvel de Raios X na enfermaria, o enfermeiro recua pelo menos 2 a 3 metros para trás do feixe primário caso não possa sair do quarto."
  },
  {
    "id": 5193,
    "topicId": 5,
    "question": "Durante os cuidados de enfermagem a um doente submetido a procedimentos imagiológicos com radiações, como se aplica na prática o conceito de 'Lei do Inverso do Quadrado da Distância (I ∝ 1 / d²)'?",
    "options": [
      "Implica que o enfermeiro retire toda a blindagem de chumbo para que o seu corpo absorva a radiação em substituição do doente.",
      "Exige a imersão do doente numa banheira com lixívia concentrada durante 3 horas após o exame radiológico.",
      "Traduz-se na seguinte intervenção clínica fundamentada: Durante o disparo de um aparelho móvel de Raios X na enfermaria, o enfermeiro recua pelo menos 2 a 3 metros para trás do feixe primário caso não possa sair do quarto.",
      "Requer a proibição permanente de contacto humano com o doente radiografado durante 6 meses após a radiografia de tórax."
    ],
    "correctIndex": 2,
    "explanation": "A aplicação de enfermagem para Lei do Inverso do Quadrado da Distância (I ∝ 1 / d²) baseia-se no princípio: Durante o disparo de um aparelho móvel de Raios X na enfermaria, o enfermeiro recua pelo menos 2 a 3 metros para trás do feixe primário caso não possa sair do quarto. Esta intervenção garante a segurança radiológica do doente e do profissional.",
    "distractorAnalysis": [
      "Está incorreta: é perigosa e absurda: os profissionais devem proteger-se ativamente e não expor-se voluntariamente à radiação.",
      "Está incorreta: provocaria queimaduras químicas graves; não há qualquer radiação externa que justifique lixívia após Raios X.",
      "Está incorreta: confunde radiografia simples externa (onde não fica qualquer radioatividade no corpo) com contaminação radioativa interna."
    ],
    "nursingApplication": "Durante o disparo de um aparelho móvel de Raios X na enfermaria, o enfermeiro recua pelo menos 2 a 3 metros para trás do feixe primário caso não possa sair do quarto."
  },
  {
    "id": 5194,
    "topicId": 5,
    "question": "Um enfermeiro analisa os parâmetros biofísicos e os mecanismos de interação em 'Lei do Inverso do Quadrado da Distância (I ∝ 1 / d²)'. Qual das seguintes afirmações expressa a correlação científica correta?",
    "options": [
      "A atenuação da radiação é rigorosamente nula em qualquer material, atravessando 10 metros de chumbo maciço sem qualquer perda de intensidade.",
      "O efeito fotoelétrico ocorre com igual probabilidade no ar, na gordura, no músculo e no osso, sendo independente do número atómico Z.",
      "A radiação dispersa por espalhamento Compton desaparece espontaneamente se as janelas da sala de exames estiverem abertas.",
      "A análise biofísica correta confirma que Ao dobrar a distância da fonte (de 1 metro para 2 metros), a intensidade da radiação cai para um quarto (redução de 75%); ao triplicar a distância (de 1 para 3 metros), a dose cai para um nono (apenas 11% da inicial!)."
    ],
    "correctIndex": 3,
    "explanation": "A correlação científica correta demonstra que Ao dobrar a distância da fonte (de 1 metro para 2 metros), a intensidade da radiação cai para um quarto (redução de 75%); ao triplicar a distância (de 1 para 3 metros), a dose cai para um nono (apenas 11% da inicial!). O domínio destes fundamentos permite ao enfermeiro assegurar a correta radioproteção e a interpretação dos riscos radiológicos.",
    "distractorAnalysis": [
      "Está incorreta: ignora a Lei de atenuação exponencial da radiação e a eficácia comprovada do chumbo como blindagem protetora.",
      "Está incorreta: nega a dependência estrita em Z³ do efeito fotoelétrico, que é a base física do contraste ósseo.",
      "Está incorreta: confunde radiação eletromagnética ionizante em linha reta com correntes de ar atmosférico."
    ],
    "nursingApplication": "Durante o disparo de um aparelho móvel de Raios X na enfermaria, o enfermeiro recua pelo menos 2 a 3 metros para trás do feixe primário caso não possa sair do quarto."
  },
  {
    "id": 5195,
    "topicId": 5,
    "question": "Na física das radiações ionizantes e Raios X aplicada ao contexto hospitalar, em relação a 'equipamentos de proteção individual (EPI) plúmbeos para enfermagem', qual é a fundamentação científica exata?",
    "options": [
      "incluem avental de chumbo (com espessura mínima de 0,25 a 0,5 mm de chumbo equivalente, Pb), colar protetor da tiroide, óculos plumbíferos com proteção lateral e luvas plumbíferas. O avental com 0,5 mm Pb atenua em mais de 90 a 95% a radiação dispersa na faixa de energias de diagnóstico radiológico.",
      "Os Raios X são constituídos por partículas gasosas de oxigénio líquido que evaporam instantaneamente à temperatura da sala.",
      "Trata-se de uma radiação puramente acústica e ultrassónica inaudível gerada pelo atrito das rodas da cama hospitalar.",
      "A radiação ionizante anula todas as ligações químicas do organismo humano transformando o doente num holograma sem massa."
    ],
    "correctIndex": 0,
    "explanation": "Em física das radiações e imagiologia médica, equipamentos de proteção individual (EPI) plúmbeos para enfermagem explica-se pelo facto de que incluem avental de chumbo (com espessura mínima de 0,25 a 0,5 mm de chumbo equivalente, Pb), colar protetor da tiroide, óculos plumbíferos com proteção lateral e luvas plumbíferas. O avental com 0,5 mm Pb atenua em mais de 90 a 95% a radiação dispersa na faixa de energias de diagnóstico radiológico.",
    "distractorAnalysis": [
      "Está incorreta: confunde radiação eletromagnética fotónica com matéria gasosa comum.",
      "Está incorreta: confunde Raios X com ondas mecânicas sonoras ou ultrassons.",
      "Está incorreta: é uma fantasia pseudocientífica que viola as leis da conservação da massa e da matéria."
    ],
    "nursingApplication": "O enfermeiro nunca dobra nem amassa o avental de chumbo, pendurando-o sempre em cabides próprios dedicados para evitar fissuras invisíveis no lençol interno de chumbo que permitiriam a fuga de radiação."
  },
  {
    "id": 5196,
    "topicId": 5,
    "question": "Durante os cuidados de enfermagem a um doente submetido a procedimentos imagiológicos com radiações, como se aplica na prática o conceito de 'equipamentos de proteção individual (EPI) plúmbeos para enfermagem'?",
    "options": [
      "Implica que o enfermeiro retire toda a blindagem de chumbo para que o seu corpo absorva a radiação em substituição do doente.",
      "Traduz-se na seguinte intervenção clínica fundamentada: O enfermeiro nunca dobra nem amassa o avental de chumbo, pendurando-o sempre em cabides próprios dedicados para evitar fissuras invisíveis no lençol interno de chumbo que permitiriam a fuga de radiação.",
      "Exige a imersão do doente numa banheira com lixívia concentrada durante 3 horas após o exame radiológico.",
      "Requer a proibição permanente de contacto humano com o doente radiografado durante 6 meses após a radiografia de tórax."
    ],
    "correctIndex": 1,
    "explanation": "A aplicação de enfermagem para equipamentos de proteção individual (EPI) plúmbeos para enfermagem baseia-se no princípio: O enfermeiro nunca dobra nem amassa o avental de chumbo, pendurando-o sempre em cabides próprios dedicados para evitar fissuras invisíveis no lençol interno de chumbo que permitiriam a fuga de radiação. Esta intervenção garante a segurança radiológica do doente e do profissional.",
    "distractorAnalysis": [
      "Está incorreta: é perigosa e absurda: os profissionais devem proteger-se ativamente e não expor-se voluntariamente à radiação.",
      "Está incorreta: provocaria queimaduras químicas graves; não há qualquer radiação externa que justifique lixívia após Raios X.",
      "Está incorreta: confunde radiografia simples externa (onde não fica qualquer radioatividade no corpo) com contaminação radioativa interna."
    ],
    "nursingApplication": "O enfermeiro nunca dobra nem amassa o avental de chumbo, pendurando-o sempre em cabides próprios dedicados para evitar fissuras invisíveis no lençol interno de chumbo que permitiriam a fuga de radiação."
  },
  {
    "id": 5197,
    "topicId": 5,
    "question": "Um enfermeiro analisa os parâmetros biofísicos e os mecanismos de interação em 'equipamentos de proteção individual (EPI) plúmbeos para enfermagem'. Qual das seguintes afirmações expressa a correlação científica correta?",
    "options": [
      "A atenuação da radiação é rigorosamente nula em qualquer material, atravessando 10 metros de chumbo maciço sem qualquer perda de intensidade.",
      "O efeito fotoelétrico ocorre com igual probabilidade no ar, na gordura, no músculo e no osso, sendo independente do número atómico Z.",
      "A análise biofísica correta confirma que O avental com 0,5 mm Pb atenua em mais de 90 a 95% a radiação dispersa na faixa de energias de diagnóstico radiológico.",
      "A radiação dispersa por espalhamento Compton desaparece espontaneamente se as janelas da sala de exames estiverem abertas."
    ],
    "correctIndex": 2,
    "explanation": "A correlação científica correta demonstra que O avental com 0,5 mm Pb atenua em mais de 90 a 95% a radiação dispersa na faixa de energias de diagnóstico radiológico. O domínio destes fundamentos permite ao enfermeiro assegurar a correta radioproteção e a interpretação dos riscos radiológicos.",
    "distractorAnalysis": [
      "Está incorreta: ignora a Lei de atenuação exponencial da radiação e a eficácia comprovada do chumbo como blindagem protetora.",
      "Está incorreta: nega a dependência estrita em Z³ do efeito fotoelétrico, que é a base física do contraste ósseo.",
      "Está incorreta: confunde radiação eletromagnética ionizante em linha reta com correntes de ar atmosférico."
    ],
    "nursingApplication": "O enfermeiro nunca dobra nem amassa o avental de chumbo, pendurando-o sempre em cabides próprios dedicados para evitar fissuras invisíveis no lençol interno de chumbo que permitiriam a fuga de radiação."
  },
  {
    "id": 5198,
    "topicId": 5,
    "question": "Na física das radiações ionizantes e Raios X aplicada ao contexto hospitalar, em relação a 'dosímetros individuais de monitorização ocupacional (TLD e filme)', qual é a fundamentação científica exata?",
    "options": [
      "Os Raios X são constituídos por partículas gasosas de oxigénio líquido que evaporam instantaneamente à temperatura da sala.",
      "Trata-se de uma radiação puramente acústica e ultrassónica inaudível gerada pelo atrito das rodas da cama hospitalar.",
      "A radiação ionizante anula todas as ligações químicas do organismo humano transformando o doente num holograma sem massa.",
      "dispositivos pessoais obrigatórios por lei contendo cristais termoluminescentes (como fluoreto de lítio, LiF) que acumulam a dose de radiação ionizante absorvida pelo profissional. O dosímetro de corpo inteiro deve ser utilizado no tronco, na altura do peito, obrigatoriamente SOB o avental de chumbo (para medir a dose efetiva recebida pelos órgãos internos vitais)."
    ],
    "correctIndex": 3,
    "explanation": "Em física das radiações e imagiologia médica, dosímetros individuais de monitorização ocupacional (TLD e filme) explica-se pelo facto de que dispositivos pessoais obrigatórios por lei contendo cristais termoluminescentes (como fluoreto de lítio, LiF) que acumulam a dose de radiação ionizante absorvida pelo profissional. O dosímetro de corpo inteiro deve ser utilizado no tronco, na altura do peito, obrigatoriamente SOB o avental de chumbo (para medir a dose efetiva recebida pelos órgãos internos vitais).",
    "distractorAnalysis": [
      "Está incorreta: confunde radiação eletromagnética fotónica com matéria gasosa comum.",
      "Está incorreta: confunde Raios X com ondas mecânicas sonoras ou ultrassons.",
      "Está incorreta: é uma fantasia pseudocientífica que viola as leis da conservação da massa e da matéria."
    ],
    "nursingApplication": "O enfermeiro nunca empresta o seu dosímetro individual, não o expõe a calor ou luz solar direta e não o deixa dentro da sala de raio-X quando não está a trabalhar, garantindo leituras dosimétricas fidedignas."
  },
  {
    "id": 5199,
    "topicId": 5,
    "question": "Durante os cuidados de enfermagem a um doente submetido a procedimentos imagiológicos com radiações, como se aplica na prática o conceito de 'dosímetros individuais de monitorização ocupacional (TLD e filme)'?",
    "options": [
      "Traduz-se na seguinte intervenção clínica fundamentada: O enfermeiro nunca empresta o seu dosímetro individual, não o expõe a calor ou luz solar direta e não o deixa dentro da sala de raio-X quando não está a trabalhar, garantindo leituras dosimétricas fidedignas.",
      "Implica que o enfermeiro retire toda a blindagem de chumbo para que o seu corpo absorva a radiação em substituição do doente.",
      "Exige a imersão do doente numa banheira com lixívia concentrada durante 3 horas após o exame radiológico.",
      "Requer a proibição permanente de contacto humano com o doente radiografado durante 6 meses após a radiografia de tórax."
    ],
    "correctIndex": 0,
    "explanation": "A aplicação de enfermagem para dosímetros individuais de monitorização ocupacional (TLD e filme) baseia-se no princípio: O enfermeiro nunca empresta o seu dosímetro individual, não o expõe a calor ou luz solar direta e não o deixa dentro da sala de raio-X quando não está a trabalhar, garantindo leituras dosimétricas fidedignas. Esta intervenção garante a segurança radiológica do doente e do profissional.",
    "distractorAnalysis": [
      "Está incorreta: é perigosa e absurda: os profissionais devem proteger-se ativamente e não expor-se voluntariamente à radiação.",
      "Está incorreta: provocaria queimaduras químicas graves; não há qualquer radiação externa que justifique lixívia após Raios X.",
      "Está incorreta: confunde radiografia simples externa (onde não fica qualquer radioatividade no corpo) com contaminação radioativa interna."
    ],
    "nursingApplication": "O enfermeiro nunca empresta o seu dosímetro individual, não o expõe a calor ou luz solar direta e não o deixa dentro da sala de raio-X quando não está a trabalhar, garantindo leituras dosimétricas fidedignas."
  },
  {
    "id": 5200,
    "topicId": 5,
    "question": "Um enfermeiro analisa os parâmetros biofísicos e os mecanismos de interação em 'dosímetros individuais de monitorização ocupacional (TLD e filme)'. Qual das seguintes afirmações expressa a correlação científica correta?",
    "options": [
      "A atenuação da radiação é rigorosamente nula em qualquer material, atravessando 10 metros de chumbo maciço sem qualquer perda de intensidade.",
      "A análise biofísica correta confirma que O dosímetro de corpo inteiro deve ser utilizado no tronco, na altura do peito, obrigatoriamente SOB o avental de chumbo (para medir a dose efetiva recebida pelos órgãos internos vitais).",
      "O efeito fotoelétrico ocorre com igual probabilidade no ar, na gordura, no músculo e no osso, sendo independente do número atómico Z.",
      "A radiação dispersa por espalhamento Compton desaparece espontaneamente se as janelas da sala de exames estiverem abertas."
    ],
    "correctIndex": 1,
    "explanation": "A correlação científica correta demonstra que O dosímetro de corpo inteiro deve ser utilizado no tronco, na altura do peito, obrigatoriamente SOB o avental de chumbo (para medir a dose efetiva recebida pelos órgãos internos vitais). O domínio destes fundamentos permite ao enfermeiro assegurar a correta radioproteção e a interpretação dos riscos radiológicos.",
    "distractorAnalysis": [
      "Está incorreta: ignora a Lei de atenuação exponencial da radiação e a eficácia comprovada do chumbo como blindagem protetora.",
      "Está incorreta: nega a dependência estrita em Z³ do efeito fotoelétrico, que é a base física do contraste ósseo.",
      "Está incorreta: confunde radiação eletromagnética ionizante em linha reta com correntes de ar atmosférico."
    ],
    "nursingApplication": "O enfermeiro nunca empresta o seu dosímetro individual, não o expõe a calor ou luz solar direta e não o deixa dentro da sala de raio-X quando não está a trabalhar, garantindo leituras dosimétricas fidedignas."
  }
];
