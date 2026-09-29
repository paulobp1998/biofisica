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
      "Possuir comprimento de onda superior a cem metros que induz a oscilação térmica passiva de todas as moléculas de água sem alterar a eletrosfera atómica circundante.",
      "Possuir energia fotónica ou cinética suficiente (>10-12 eV) para arrancar eletrões orbitais dos átomos da matéria biológica, gerando pares de iões quimicamente reativos.",
      "Apresentar temperatura termodinâmica mensurável superior a quinhentos graus Celsius no momento em que o feixe de energia atinge a epiderme queratinizada do indivíduo.",
      "Emitir luz visível monocromática polarizada capaz de ativar a síntese de melanina sem transferir quantidade de movimento para as macromoléculas do citoplasma celular."
    ],
    "correctIndex": 1,
    "explanation": "Uma radiação é classificada como ionizante quando a sua energia por fotão ou partícula supera a energia de ligação dos eletrões mais externos da matéria biológica (~10-12 eV, limiar de ionização da água e do carbono). Ao interagir com o tecido, arranca eletrões, convertendo átomos neutros estáveis em iões carregados positivos e eletrões livres, desencadeando reações químicas e quebras nas macromoléculas de DNA.",
    "distractorAnalysis": [
      "Está incorreta: ondas com comprimentos de onda de dezenas de metros são radiações não-ionizantes (rádio/televisão), que não possuem energia quântica suficiente para ejetar eletrões.",
      "Está incorreta: a radiação ionizante não se define por temperatura macroscópica em graus Celsius, mas sim pela energia individual de cada fotão ou partícula em eletrão-volts (eV).",
      "Está incorreta: a luz visível é radiação não-ionizante; a capacidade de arrancar eletrões orbitais e criar iões requer níveis de energia substancialmente mais elevados (>10-12 eV)."
    ],
    "nursingApplication": "O enfermeiro identifica como radiações ionizantes hospitalares os Raios X (radiologia convencional, TAC, hemodinâmica/fluoroscopia) e os Raios Gama e partículas emitidas em Medicina Nuclear e Radioterapia. Todas exigem protocolos estritos de radioproteção para prevenir mutações celulares em profissionais e doentes."
  },
  {
    "id": 5002,
    "topicId": 5,
    "question": "A radiação eletromagnética é constituída por pacotes discretos de energia (quanta) designados por fotões. De acordo com a equação de Planck-Einstein (E = h · f = h · c / λ), como se correlaciona a energia fotónica com o comprimento de onda (λ) e a frequência (f)?",
    "options": [
      "A energia do fotão é diretamente proporcional ao comprimento de onda e inversamente proporcional à frequência, de modo que radiações infravermelhas teriam maior energia que os raios X.",
      "A energia fotónica mantém-se rigorosamente idêntica em todo o espetro eletromagnético, dependendo a penetração tecidual exclusivamente da humidade relativa do ar circundante.",
      "A energia fotónica é proporcional à frequência (f) e inversamente proporcional ao comprimento de onda (λ); comprimentos de onda muito curtos (raios X) possuem altíssima energia.",
      "O comprimento de onda é diretamente proporcional à frequência de oscilação, mantendo o produto h · f invariável perante quaisquer variações quânticas de emissão radiológica."
    ],
    "correctIndex": 2,
    "explanation": "A fórmula de Max Planck e Albert Einstein estabelece que E = h · f, onde h é a constante de Planck (6,626 × 10⁻³⁴ J·s). Como a velocidade da luz é c = λ · f => f = c / λ, temos E = (h · c) / λ. Assim, quanto menor o comprimento de onda λ (Raios X com λ de 0,01 a 10 nanómetros), maior é a frequência f e colossal é a energia individual de cada fotão (dezenas a centenas de keV), conferindo-lhe poder ionizante letal para o DNA.",
    "distractorAnalysis": [
      "Está incorreta: pela relação E = h · c / λ, comprimentos de onda mais longos correspondem a energias fotónicas menores e frequências mais baixas.",
      "Está incorreta: os fotões do espetro eletromagnético variam de energia em muitas ordens de grandeza (de microeletrão-volts nas frequências hertzianas a megaeletrão-volts nos raios gama).",
      "Está incorreta: a velocidade da luz é constante (c = λ · f); logo, o comprimento de onda e a frequência são inversamente proporcionais entre si e não diretamente proporcionais."
    ],
    "nursingApplication": "Esta relação biofísica explica por que os telemóveis e o Wi-Fi (micro-ondas de grande comprimento de onda e baixa energia fotónica de micro-eV) são incapazes de romper o DNA humano, ao passo que uma única exposição a Raios X de alto kvP (alta frequência e comprimento de onda subnanométrico) carrega fotões com energia suficiente para quebrar ligações fosfodiéster dos cromossomas."
  },
  {
    "id": 5003,
    "topicId": 5,
    "question": "No tubo de produção de Raios X clássico (Tubo de Coolidge), qual é a percentagem aproximada de energia cinética dos eletrões bombardeados contra o ânodo de tungsténio que é efetivamente convertida em Raios X úteis?",
    "options": [
      "Aproximadamente 95% da energia é convertida em raios X de alta penetração, dissipando-se apenas 5% sob a forma de calor graças ao sistema de arrefecimento elétrico a vácuo.",
      "Cinquenta por cento da energia cinética transforma-se em fotões X e cinquenta por cento é convertida em emissão contínua de neutrões de alta energia na ampola de vidro.",
      "Cem por cento da energia dos eletrões incidentes é convertida em radiação ionizante diagnóstica, sem qualquer produção de energia térmica no ânodo durante a exposição.",
      "Apenas cerca de 1% (ou menos) da energia cinética é convertida em raios X úteis, sendo os restantes 99% dissipados como calor térmico no ânodo de tungsténio do tubo radiológico."
    ],
    "correctIndex": 3,
    "explanation": "O processo de produção de Raios X por colisão eletrónica em alvos metálicos pesados é extremamente ineficiente do ponto de vista energético: cerca de 99% das colisões dos eletrões com a nuvem eletrónica dos átomos de tungsténio resultam em excitações térmicas atómicas que se dissipam como calor colossal no ânodo. Apenas cerca de 0,5% a 1% da energia cinética dos eletrões dá origem a fotões de Raios X por Bremsstrahlung ou emissão característica.",
    "distractorAnalysis": [
      "Está incorreta: o tubo de raios X tem uma eficiência de conversão extremamente baixa (~1%), gerando elevadíssimas cargas térmicas que exigem ânodos rotativos para dissipação.",
      "Está incorreta: os tubos de raios X de uso médico diagnóstico não produzem nem emitem feixes de neutrões durante o bombardeamento dos alvos metálicos de tungsténio.",
      "Está incorreta: a grande maioria dos eletrões incidentes colide com eletrões das camadas mais externas do ânodo gerando apenas agitação térmica (calor) e não fotões X úteis."
    ],
    "nursingApplication": "Esta colossal produção de calor (99%) explica por que os tubos de Raios X e de TAC possuem pesados ânodos giratórios banhados em óleo dielétrico de refrigeração e sistemas de circulação de água: se o enfermeiro ou técnico disparar exposições repetidas de alta voltagem sem respeitar os tempos de arrefecimento da ampola, o ânodo funde-se e o equipamento avaria irreversivelmente."
  },
  {
    "id": 5004,
    "topicId": 5,
    "question": "No espetro de radiação emitido por um tubo de Raios X, como é gerada a chamada 'Radiação de Travagem' (Bremsstrahlung)?",
    "options": [
      "Pela desaceleração e deflexão de eletrões incidentes perto do campo elétrico positivo do núcleo atómico do tungsténio, emitindo fotões X num espetro contínuo de energias.",
      "Pela colisão elástica frontal entre fotões de luz visível e eletrões de condução do filamento catódico, acelerando os núcleos de tungsténio até à velocidade do som.",
      "Pela transição de eletrões livres entre as órbitas dos átomos de hélio gasoso aprisionados na câmara selada de vácuo do tubo de emissão radiológica médica hospitalar.",
      "Pela aniquilação espontânea de positrões emitidos pelo filamento de tungsténio quando este atinge temperaturas de incandescência sob vácuo durante a rotação anódica."
    ],
    "correctIndex": 0,
    "explanation": "Bremsstrahlung (do alemão 'radiação de travagem') ocorre quando um eletrão acelerado penetra na nuvem eletrónica do alvo de tungsténio e passa junto ao núcleo de carga positiva (+74e). A atração coulombiana curva a trajetória do eletrão e desacelera-o bruscamente. Pela eletrodinâmica clássica, qualquer carga elétrica acelerada/desacelerada emite radiação eletromagnética: a perda de energia cinética do eletrão surge como um fotão X. Como a aproximação ao núcleo pode ocorrer a qualquer distância, o espetro emitido é contínuo, com energia máxima até ao valor de pico da voltagem (kVp).",
    "distractorAnalysis": [
      "Está incorreta: a radiação de travagem (Bremsstrahlung) resulta da desaceleração coulombiana de eletrões rápidos pelo núcleo do ânodo e não de colisões de luz visível com o cátodo.",
      "Está incorreta: o interior da ampola de raios X opera sob vácuo elevado sem gases nobres como hélio para evitar a atenuação e dispersão prematura do feixe de eletrões.",
      "Está incorreta: o cátodo emite eletrões comuns por efeito termiónico e não antipartículas (positrões); a aniquilação de positrões é o princípio da tomografia por emissão de positrões (PET)."
    ],
    "nursingApplication": "A radiação de travagem é responsável por mais de 80% a 90% de todos os fotões do feixe primário numa radiografia convencional de tórax. O conhecimento do kVp ajustado pelo operador permite ao enfermeiro compreender a penetrância do feixe: maior kVp gera fotões Bremsstrahlung mais energéticos capazes de atravessar doentes obesos sem subexposição."
  },
  {
    "id": 5005,
    "topicId": 5,
    "question": "O segundo mecanismo de produção no tubo de Raios X é a 'Radiação Característica'. Como se origina este tipo de fotão monoenergético discreto?",
    "options": [
      "Fusão de dois eletrões das camadas mais periféricas do átomo para criar um neutrão livre que escapa da estrutura cristalina sob a forma de radiação de onda contínua.",
      "Ejeção de um eletrão da camada interna (camada K) por um eletrão incidente, seguida da transição de um eletrão de camada externa com emissão de fotão monoenergético (E = E_L - E_K).",
      "Desaceleração lenta de fotões incidentes no campo gravítico do núcleo de tungsténio sem qualquer ejeção ou transição eletrónica entre níveis de energia orbitais.",
      "Emissão aleatória de fotões de baixa frequência gerados pelo aquecimento elétrico do filamento catódico antes da aplicação da alta tensão de aceleração anódica."
    ],
    "correctIndex": 1,
    "explanation": "A radiação característica ocorre quando a energia cinética do eletrão bombardeador supera a energia de ligação do eletrão da camada K do tungsténio (~69,5 keV). O eletrão orbital é arrancado. O átomo ionizado desexcita-se em picosssegundos: um eletrão da camada L (energia ~12 keV) ou M cai para a camada K vaga. A transição emite um fotão X com energia discreta fixa e invariável característica do tungsténio (K_alfa = 69,5 - 12,1 = 57,4 keV; K_beta ≈ 67-69 keV), formando picos finos sobrepostos ao contínuo de Bremsstrahlung.",
    "distractorAnalysis": [
      "Está incorreta: eletrões possuem a mesma carga negativa e repelem-se mutuamente, sendo fisicamente impossível fundirem-se para formar neutrões na nuvem eletrónica.",
      "Está incorreta: a desaceleração de cargas sem ejeção orbital produz radiação de travagem (Bremsstrahlung) com espetro contínuo, e não radiação característica com linhas discretas.",
      "Está incorreta: a radiação característica depende da energia de ligação específica das camadas atómicas do material do alvo (K-shell) e não da incandescência térmica do cátodo."
    ],
    "nursingApplication": "Na mamografia (rastreio do cancro da mama), utilizam-se tubos de Raios X com ânodos de Molibdénio (Mo) ou Ródio (Rh) em vez de tungsténio: as radiações características do molibdénio têm energias mais baixas e precisas (~17,5 a 19,6 keV), ideais para maximizar a diferenciação de contraste entre tecido glandular denso, gordura e microcalcificações tumorais mamárias."
  },
  {
    "id": 5006,
    "topicId": 5,
    "question": "A atenuação da intensidade de um feixe monoenergético de Raios X ao atravessar um tecido absorvedor homogéneo de espessura x segue uma lei de decaimento exponencial: I = I₀ · e^(-μ·x). O que representa a grandeza física μ (mi)?",
    "options": [
      "A velocidade de propagação das ondas eletromagnéticas no vácuo expressa em quilómetros por segundo através da constante de proporcionalidade universal de Einstein.",
      "O tempo em segundos necessário para que o tubo de raios X arrefeça até à temperatura de equilíbrio com o ambiente do serviço de imagiologia médica hospitalar.",
      "O Coeficiente de Atenuação Linear do material (cm⁻¹ ou m⁻¹), quantificando a fração relativa de fotões removidos do feixe incidente por unidade de espessura atravessada.",
      "A dose biológica de radiação acumulada pelo operador do equipamento radiológico expressa em unidades de atividade de decaimento nuclear por segundo (Becquerel)."
    ],
    "correctIndex": 2,
    "explanation": "Na equação I = I₀ · e^(-μ·x), I₀ é a intensidade incidente e I a transmitida após espessura x. O parâmetro μ é o Coeficiente de Atenuação Linear: depende criticamente do número atómico do material (Z), da sua densidade de massa (ρ) e da energia dos fotões incidentes (E). Quanto maior for μ (como no tecido ósseo compacto ou chumbo), mais rapidamente a radiação é atenuada e menor é a fração transmitida através da espessura x.",
    "distractorAnalysis": [
      "Está incorreta: a velocidade da luz é representada pela letra c (~300 000 km/s); μ representa a probabilidade de interação por unidade de comprimento do material absorvedor.",
      "Está incorreta: o arrefecimento térmico rege-se por curvas térmicas de dissipação em Joules ou Heat Units e não pelo coeficiente linear de atenuação fotónica.",
      "Está incorreta: o Becquerel (Bq) mede a atividade radioativa de uma fonte emissora nuclear e não a atenuação de um feixe de raios X por um meio material."
    ],
    "nursingApplication": "A enorme diferença nos coeficientes de atenuação linear μ entre o ar pulmonar, o músculo cardíaco e o osso costal é a base física da imagem radiológica: estruturas com alto μ atenuam os Raios X e projetam uma 'sombra' branca na película (radiopacas), enquanto estruturas com baixo μ deixam passar os fotões enegrecendo o detetor (radiotransparentes)."
  },
  {
    "id": 5007,
    "topicId": 5,
    "question": "O conceito de 'Camada Hemirredutora' (HVL - Half-Value Layer) na física das radiações define-se como:",
    "options": [
      "A distância que um profissional de saúde deve manter do tubo de raios X para anular integralmente qualquer interação de fotões ionizantes com as suas células corporais.",
      "O tempo de espera necessário após um disparo de raios X para que a radiação ambiental desapareça completamente da sala de exames antes da entrada da equipa.",
      "A espessura de tecido adiposo subcutâneo necessária para transformar o feixe de raios X diagnósticos numa corrente de eletrões de condução de baixa frequência.",
      "A espessura de um material absorvedor necessária para atenuar a intensidade do feixe de radiação incidente exatamente para metade do seu valor original (I = I₀ / 2)."
    ],
    "correctIndex": 3,
    "explanation": "A Camada Hemirredutora (HVL) é calculada fazendo I = I₀/2 na lei exponencial: I₀/2 = I₀ · e^(-μ·HVL) => ln(1/2) = -μ·HVL => HVL = ln(2) / μ ≈ 0,693 / μ. Quanto mais penetrante ('duro') for o feixe de radiação, maior será a sua HVL. Duas HVLs reduzem a intensidade para 1/4 (25%); três HVLs reduzem para 1/8 (12,5%); e dez HVLs reduzem a intensidade para menos de 0,1% do valor incidente.",
    "distractorAnalysis": [
      "Está incorreta: a atenuação segue uma lei exponencial decrescente e nunca atinge o valor zero a uma distância finita; a HVL mede a espessura física de um meio absorvedor.",
      "Está incorreta: os raios X viajam à velocidade da luz e desaparecem instantaneamente logo que o circuito de disparo é desligado, não permanecendo no ar após o feixe cessar.",
      "Está incorreta: os tecidos biológicos atenuam o feixe por absorção fotoelétrica e dispersão Compton, não convertendo o feixe de fotões X numa corrente elétrica condutora contínua."
    ],
    "nursingApplication": "Na construção de paredes de salas de Raios X e biombos protetores hospitalares, a espessura do chumbo ou betão baritado é calculada pelos físicos médicos em múltiplos de HVL para garantir que os postos de enfermagem vizinhos recebam menos de 1 mSv por ano, assegurando ambiente de trabalho seguro para as equipas de saúde."
  },
  {
    "id": 5008,
    "topicId": 5,
    "question": "Na faixa de baixas e médias energias diagnósticas dos Raios X (20 a 100 keV), ocorrem duas interações fundamentais dos fotões com a matéria: o 'Efeito Fotoelétrico' e o 'Efeito de Dispersão de Compton'. Qual é a característica biofísica do Efeito Fotoelétrico que o torna o responsável primordial pelo CONTRASTE nas radiografias?",
    "options": [
      "A probabilidade varia com o cubo do número atómico (Z³) e o inverso do cubo da energia (1/E³), permitindo diferenciar fortemente o osso com cálcio (Z=20) dos tecidos moles (Z≈7,4).",
      "A probabilidade independe do número atómico dos tecidos, ocorrendo com a mesma frequência no ar pulmonar, na gordura, na água e nas estruturas ósseas calcificadas.",
      "O Efeito Fotoelétrico ocorre exclusivamente em energias superiores a dez megaeletrão-volts, gerando a criação de pares de partículas de matéria e antimatéria no doente.",
      "A interação produz apenas fotões dispersos que continuam na mesma direção original do feixe sem qualquer transferência de energia cinética aos eletrões dos átomos absorvedores."
    ],
    "correctIndex": 0,
    "explanation": "No Efeito Fotoelétrico, o fotão X incidente colide com um eletrão interno e é TOTALMENTE absorvido, transferindo toda a sua energia e ejetando o fotoeletrão sem emitir radiação dispersa. A probabilidade por unidade de volume é proporcional a ρ · (Z/E)³. Como o cálcio do osso tem Z = 20 e os tecidos moles têm Z_médio ≈ 7,4, a absorção no osso é cerca de (20 / 7,4)³ ≈ 20 vezes maior por grama! Essa disparidade de absorção total cria a diferenciação nítida de contraste radiológico entre ossos e tecidos moles.",
    "distractorAnalysis": [
      "Está incorreta: a forte dependência em Z³ é precisamente a razão pela qual o cálcio (Z=20) absorve muito mais radiação que os tecidos moles (Z≈7,4), gerando o contraste da imagem.",
      "Está incorreta: a produção de pares exige energias fotónicas superiores a 1,022 MeV (comum na radioterapia e astrofísica) e não a faixa diagnóstica de 20 a 100 keV.",
      "Está incorreta: no efeito fotoelétrico o fotão incidente é totalmente absorvido, transferindo toda a sua energia para ejetar um eletrão interno com energia cinética residual."
    ],
    "nursingApplication": "A dependência em Z³ justifica o uso de meios de contraste iodados (Z=53 para o iodo) ou sulfato de bário (Z=56 para o bário) que o enfermeiro administra em urografias, angiografias ou TAC: com Z colossal, estes compostos absorvem avidamente os fotões por efeito fotoelétrico, destacando a árvore vascular ou o lúmen digestivo em branco brilhante."
  },
  {
    "id": 5009,
    "topicId": 5,
    "question": "Ao contrário do efeito fotoelétrico, o 'Efeito de Dispersão de Compton' envolve a colisão de um fotão X com um eletrão livre ou fracamente ligado da camada mais externa, ejetando o eletrão e desviando o fotão com menor energia numa trajetória oblíqua. Porque é que o Efeito Compton constitui a principal fonte de perigo radiológico para o enfermeiro no bloco operatório?",
    "options": [
      "Os fotões de Compton ionizam o ar da sala de operações transformando o oxigénio gasoso em ácido clorídrico concentrado que queima a mucosa ocular dos profissionais presentes.",
      "O doente atua como fonte secundária de radiação dispersa que ejeta fotões Compton em todas as direções espaciais, atingindo a equipa de enfermagem junto à mesa cirúrgica.",
      "O efeito Compton induz a radioatividade artificial permanente nos instrumentos cirúrgicos metálicos, exigindo o seu descarte definitivo em contentores de lixo radioativo.",
      "A dispersão Compton bloqueia a transmissão de sinais de eletrocardiografia nos monitores vitais através da reflexão de micro-ondas polarizadas nas paredes da sala."
    ],
    "correctIndex": 1,
    "explanation": "Na faixa de 70 a 120 kVp, a dispersão de Compton é o mecanismo predominante no tecido humano (Z baixo e rica densidade de eletrões externos). O feixe primário emitido pelo tubo atinge o doente; parte dos fotões não é absorvida nem atravessa em linha reta, sofrendo dispersão Compton em ângulos laterais e retrógrados. O doente comporta-se como um verdadeiro emissor difuso de radiação secundária espalhada para a sala, sendo esta a principal responsável pela dose ocupacional de enfermeiros que auxiliam procedimentos cirúrgicos ou de hemodinâmica.",
    "distractorAnalysis": [
      "Está incorreta: a radiação dispersa por efeito Compton no corpo do doente não produz ácido clorídrico no ar; o perigo é a dose cumulativa de radiação ionizante absorvida.",
      "Está incorreta: fotões na faixa diagnóstica de raios X (keV) não possuem energia suficiente para induzir ativação nuclear nem tornam materiais metálicos radioativos.",
      "Está incorreta: o efeito Compton é uma interação de fotões X a nível atómico e não interfere na transmissão eletromecânica dos sinais de monitorização cardíaca convencionais."
    ],
    "nursingApplication": "Em cirurgias ortopédicas ou hemodinâmica com uso contínuo de intensificador de imagem (arco em C / fluoroscopia), o enfermeiro deve permanecer o mais afastado possível do doente durante os disparos e posicionar-se, se possível, do lado do detetor de imagem e não do lado da ampola emissora de Raios X, minimizando a receção de radiação dispersa de Compton."
  },
  {
    "id": 5010,
    "topicId": 5,
    "question": "Na interpretação sistemática de uma Radiografia Convencional de Tórax, quais são as cinco densidades radiológicas básicas da matéria dispostas por ordem CRESCENTE de atenuação dos Raios X (do mais escuro/negro para o mais claro/branco)?",
    "options": [
      "Metal (negro profundo) -> Osso (cinzento escuro) -> Gordura (cinzento intermédio) -> Água (cinzento claro) -> Ar (branco luminoso de alta densidade óptica).",
      "Ar (branco radiopaco) -> Gordura (cinzento claro) -> Tecidos Moles (cinzento escuro) -> Osso (negro absoluto) -> Metal (transparente aos raios X diagnósticos).",
      "Ar (radiotransparente/negro) -> Gordura (cinzento escuro) -> Tecidos Moles/Água (cinzento claro) -> Osso/Cálcio (radiopaco/branco) -> Metal (branco brilhante absoluto).",
      "Tecidos Moles (negro) -> Gordura (branco) -> Ar (cinzento médio) -> Metal (cinzento homogéneo) -> Osso (radiotransparência microscópica total em repouso)."
    ],
    "correctIndex": 2,
    "explanation": "A escala fundamental de densidades radiográficas decorre da densidade mássica e número atómico: 1) AR (pulmões, traqueia): absorve quase zero fotões, os Raios X atingem o filme/detetor em pleno -> imagem negra (radiotransparente); 2) GORDURA (tecido celular subcutâneo): cinzento escuro; 3) ÁGUA / PARTES MOLES (coração, sangue, músculos, fígado): atenuação intermédia -> cinzento claro; 4) CÁLCIO / OSSO (costelas, clavículas): alto Z de cálcio -> absorção elevada -> branco; 5) METAL (próteses, pacemaker, clipes cirúrgicos): absorção quase total -> branco absoluto impenetrável.",
    "distractorAnalysis": [
      "Está incorreta: inverte totalmente as densidades radiológicas; o ar atenua fracamente os raios X (radiotransparente/negro) e os metais atenuam quase na totalidade (branco brilhante).",
      "Está incorreta: confunde a opacidade óptica com a atenuação aos raios X; o osso e o cálcio aparecem claros/brancos no filme ou ecrã devido à forte atenuação do feixe de fotões.",
      "Está incorreta: tecidos moles atenuam mais que o ar e menos que o osso, surgindo em tons de cinzento; o ar alveolar pulmonar é caracteristicamente radiotransparente e negro."
    ],
    "nursingApplication": "Na radiografia de tórax de controlo após colocação de uma sonda nasogástrica (SNG), o enfermeiro pesquisa a densidade metálica do fio guia e radiopaca da ponta da sonda: deve ser visível descendo pelo esófago abaixo do diafragma até à câmara de ar gástrica (densidade ar), e NUNCA na árvore brônquica, prevenindo aspirações pulmonares letais de alimentação entérica."
  },
  {
    "id": 5011,
    "topicId": 5,
    "question": "Na Tomografia Computorizada (TC ou TAC), a atenuação dos Raios X em cada vóxel tridimensional é quantificada matematicamente através da 'Escala de Unidades Hounsfield' (HU). Quais são os valores de referência fixados nesta escala para a Água pura e para o Ar?",
    "options": [
      "Água pura = +1000 HU e Ar atmosférico = 0 HU, sendo a gordura corporal calibrada no valor padronizado de +500 HU em equipamentos tomográficos modernos.",
      "Água pura = -1000 HU e Ar atmosférico = +1000 HU, correspondendo o valor zero à atenuação do osso esponjoso trabecular nos estudos axiais computorizados.",
      "A escala varia unicamente entre 0 e 100 HU, sendo atribuído o valor de 50 HU tanto à água pura como ao parênquima pulmonar arejado em inspiração máxima.",
      "Água pura = 0 HU e Ar atmosférico = -1000 HU na escala de calibração tomográfica (com o osso cortical denso a atingir valores na faixa de +1000 HU ou superiores)."
    ],
    "correctIndex": 3,
    "explanation": "Criada por Sir Godfrey Hounsfield (Prémio Nobel de Medicina de 1979), a escala HU normaliza os coeficientes de atenuação linear dos tecidos relativamente à água: HU = 1000 × (μ_tecido - μ_água) / μ_água. Por definição internacional: a água pura é o ponto zero (0 HU); o ar atmosférico (que praticamente não atenua a radiação) corresponde a -1000 HU; a gordura situa-se entre -50 e -100 HU; os tecidos moles entre +20 e +60 HU; e o osso cortical atinge valores de +800 a +3000 HU.",
    "distractorAnalysis": [
      "Está incorreta: na escala Hounsfield a água é a referência zero (0 HU) e o ar tem atenuação quase nula correspondente a -1000 HU; a gordura situa-se entre -50 e -100 HU.",
      "Está incorreta: inverte a convenção matemática de Hounsfield; tecidos menos atenuantes que a água recebem valores negativos e tecidos mais atenuantes valores positivos.",
      "Está incorreta: a escala de Hounsfield é ampla (de -1000 HU para o ar a mais de +3000 HU para implantes metálicos densos), permitindo excelente diferenciação de tecidos moles."
    ],
    "nursingApplication": "Em doentes admitidos com suspeita de Acidente Vascular Cerebral (AVC), a TAC craniana sem contraste diferencia instantaneamente a isquemia da hemorragia: o sangue agudo extravasado de um hematoma intracraniano apresenta alta densidade espontânea (+50 a +80 HU, hiperdenso/branco), enquanto a isquemia precoce surge como edema hipodenso (<20-30 HU, escuro). Essa distinção norteia a decisão imediata de trombólise endovenosa pelo enfermeiro."
  },
  {
    "id": 5012,
    "topicId": 5,
    "question": "Antes da administração intravenosa de um Meio de Contraste Iodado para a realização de uma TAC contrastada, qual é o parâmetro analítico laboratorial que o enfermeiro deve verificar obrigatoriamente para avaliar o risco de Nefropatia Induzida por Contraste (NIC)?",
    "options": [
      "A creatinina sérica e o cálculo da Taxa de Filtração Glomerular estimada (eGFR), exigindo precauções e hidratação rigorosa se a eGFR for inferior a 30 mL/min/1,73m².",
      "A contagem total de plaquetas e o tempo de protrombina, suspendendo o exame radiológico caso a contagem plaquetária seja superior a quatrocentos mil por microlitro.",
      "A concentração de sódio e potássio na urina de 24 horas, contraindicando formalmente o contraste se o doente apresentar densidade urinária inferior a 1,005.",
      "O nível sérico de transaminases hepáticas (ALT e AST), exigindo dieta zero lipídica nas duas semanas que antecedem o estudo tomográfico com contraste vascular."
    ],
    "correctIndex": 0,
    "explanation": "Os meios de contraste iodados são excretados quase a 100% por filtração glomerular nos rins. Em doentes com insuficiência renal prévia, a elevada osmolaridade e viscosidade do meio de contraste causam vasoconstrição da arteríola renal e citotoxicidade direta nas células dos túbulos renais, desencadeando lesão renal aguda (nefropatia induzida por contraste). A verificação da creatinina sérica com estimativa da eGFR pelas fórmulas CKD-EPI ou MDRD é obrigatória antes de qualquer injeção intravenosa eletiva.",
    "distractorAnalysis": [
      "Está incorreta: a avaliação plaquetária isolada não prediz a nefropatia por contraste; a disfunção renal pré-existente (avaliada por eGFR/creatinina) é o principal fator de risco.",
      "Está incorreta: a avaliação de emergência ou de rotina pré-contraste foca-se na função renal através da taxa de filtração glomerular estimada e não na ionometria urinária de 24 horas.",
      "Está incorreta: as transaminases avaliam a integridade dos hepatócitos; a via principal de depuração e toxicidade do contraste iodado diagnóstico hidrossolúvel é renal."
    ],
    "nursingApplication": "Na preparação do doente para TAC com contraste, o enfermeiro confirma o valor da eGFR recente: em doentes de risco (eGFR entre 30 e 60 mL/min), implementa o protocolo de hidratação prévia e posterior com Soro Fisiológico a 0,9% para expandir o volume intravascular e acelerar a excreção renal do iodo, e orienta a suspensão da metformina se indicado."
  },
  {
    "id": 5013,
    "topicId": 5,
    "question": "A nível radiobiológico molecular, qual é a diferença fundamental entre a 'Ação Direta' e a 'Ação Indireta' da radiação ionizante sobre o material genético (DNA)?",
    "options": [
      "Na ação direta a radiação atua apenas sobre os lípidos da membrana; na indireta atua exclusivamente acelerando a velocidade circulatória nos capilares periféricos.",
      "Na ação direta o fotão ioniza o DNA; na indireta (~70% do dano de raios X) a radiação ioniza a água gerando radicais livres hidroxilo (•OH) que atacam quimicamente o genoma.",
      "A ação indireta ocorre apenas perante radiação não-ionizante de baixa frequência, sendo a ação direta o único mecanismo de lesão produzido por feixes de raios X e gama.",
      "A ação direta destrói exclusivamente o citoplasma celular por coagulação térmica instantânea, mantendo o DNA nuclear perfeitamente intacto e protegido contra mutações."
    ],
    "correctIndex": 1,
    "explanation": "Como as células humanas são compostas por cerca de 70% a 80% de água líquida, a vasta maioria dos fotões X e gama interage primariamente com as moléculas de H₂O: H₂O + radiação -> H₂O⁺ + e⁻. Estes intermediários reagem rapidamente formando radicais livres: H₂O⁺ + H₂O -> H₃O⁺ + •OH (radical hidroxilo neutro extremamente reativo e tóxico com um eletrão desemparelhado). Os radicais livres difundem-se e quebram as ligações químicas do DNA circundante (ação indireta, que responde por ~2/3 de todo o dano celular de radiações de baixo LET).",
    "distractorAnalysis": [
      "Está incorreta: o alvo biológico crítico da radiação ionizante é o DNA cromossómico no núcleo celular, cuja integridade dita a viabilidade e estabilidade proliferativa da célula.",
      "Está incorreta: radiações de baixa densidade de ionização (como raios X) atuam predominantemente por via indireta via radiólise da água intracelular gerando radicais oxidantes livres.",
      "Está incorreta: tanto a ação direta como a indireta afetam o DNA; a ação indireta não produz coagulação térmica grosseira, mas sim quebras de cadeia simples e dupla no DNA."
    ],
    "nursingApplication": "O conhecimento da ação indireta por radicais livres explica o 'Efeito do Oxigénio' (Oxygen Enhancement Ratio - OER) em radioterapia: tumores bem vascularizados e oxigenados são muito mais sensíveis à radiação porque o oxigénio molecular 'fixa' permanentemente as lesões químicas induzidas pelos radicais livres no DNA das células cancerígenas."
  },
  {
    "id": 5014,
    "topicId": 5,
    "question": "Na classificação dos efeitos biológicos da radiação ionizante, o que distingue formalmente os 'Efeitos Estocásticos' dos 'Efeitos Determinísticos' (reações teciduais)?",
    "options": [
      "Efeitos estocásticos têm limiar de dose bem estabelecido e manifestam-se em poucas horas; efeitos determinísticos são puramente genéticos e ocorrem sem qualquer dose absorvida.",
      "Os efeitos determinísticos surgem exclusivamente nas gerações futuras de descendentes, enquanto os estocásticos causam necrose cutânea imediata por queimadura térmica.",
      "Efeitos estocásticos (cancro) são probabilísticos sem dose limiar de segurança; efeitos determinísticos têm limiar claro, acima do qual a gravidade cresce com a dose.",
      "Ambos os efeitos possuem rigorosamente o mesmo limiar de segurança estipulado em dois Gray de dose absorvida para qualquer órgão ou tecido do corpo humano adulto."
    ],
    "correctIndex": 2,
    "explanation": "Os efeitos determinísticos (como radiodermite, necrose tecidual, cataratas na lente ocular, descamação epitelial e síndrome de radiação aguda) exigem a morte de uma grande fração celular: só se manifestam acima de um limiar de dose específico (ex: 2 Gy para eritema cutâneo), aumentando a severidade com a dose. Os efeitos estocásticos (carcinogénese radioinduzida) decorrem de mutações viáveis no DNA de uma única célula: rege o modelo linear sem limiar (LNT) — não existe dose tão pequena que tenha risco zero absoluto de induzir um cancro a longo prazo (latência de 5 a 30 anos).",
    "distractorAnalysis": [
      "Está incorreta: os efeitos determinísticos (reações teciduais como eritema cutâneo e cataratas) têm limiar; os estocásticos (cancro radioinduzido) assumem modelo linear sem limiar seguro.",
      "Está incorreta: mutações hereditárias são efeitos estocásticos; necrose tecidual e eritema são reações determinísticas decorrentes da morte celular massiva acima de uma dose limiar.",
      "Está incorreta: os efeitos estocásticos regem-se pela hipótese linear sem limiar (LNT); os efeitos determinísticos têm limiares variáveis segundo o tecido (ex: 0,5 Gy para cristalino)."
    ],
    "nursingApplication": "A radioproteção em enfermagem combate os dois tipos de efeitos: a blindagem com aventais e protetores de tiroide impede a ocorrência de efeitos determinísticos na pele e tiroide, e a aplicação do princípio ALARA reduz ao mínimo absoluto a probabilidade probabilística de efeitos estocásticos (cancro radioinduzido) ao longo da carreira profissional."
  },
  {
    "id": 5015,
    "topicId": 5,
    "question": "A 'Lei de Bergonié e Tribondeau' (1906) é o pilar fundamental da radiobiologia médica. De acordo com esta lei, quais são as características citológicas que tornam um tecido humano altamente RADIOSSENSÍVEL à radiação ionizante?",
    "options": [
      "Ausência total de divisões celulares, taxa metabólica estritamente nula e presença de uma espessa camada de queratina e sais minerais no citoplasma celular.",
      "Células altamente diferenciadas com especialização permanente terminal, tais como os neurónios corticais maduros e as fibras musculares esqueléticas esqueléticas.",
      "Presença de vacúolos de lípidos insolúveis que impermeabilizam a carioteca e impedem a penetração de qualquer fotão da radiação eletromagnética ionizante.",
      "Elevada atividade mitótica (proliferação frequente), longo futuro reprodutivo e baixo grau de diferenciação morfológica e funcional (células indiferenciadas ou estaminais)."
    ],
    "correctIndex": 3,
    "explanation": "Jean Bergonié e Louis Tribondeau demonstraram que as células são tanto mais sensíveis à radiação quanto: 1) Maior for a sua atividade reprodutiva/mitótica; 2) Maior for o número de divisões futuras que irão realizar; 3) Menos diferenciadas forem funcionalmente. Por esta lei, os tecidos mais radiossensíveis do corpo são a medula óssea hematopoética, as células germinativas (gónadas), a mucosa das criptas intestinais e o embrião/feto em desenvolvimento; os mais radiorresistentes são os neurónios e as fibras musculares adultas.",
    "distractorAnalysis": [
      "Está incorreta: células que não se dividem e com baixo metabolismo são as mais radiorresistentes (ex: neurónios); a radiossensibilidade exige divisão celular ativa.",
      "Está incorreta: tecidos altamente diferenciados (como neurónios e miócitos cardíacos) toleram doses elevadas de radiação sem morte aguda imediata em comparação com tecidos estaminais.",
      "Está incorreta: a membrana nuclear e os lípidos não barram fotões de raios X de alta energia; a radiossensibilidade assenta no ciclo celular e capacidade de reparação do DNA."
    ],
    "nursingApplication": "Esta lei elucida por que a radioterapia ataca preferencialmente as células cancerígenas (com alta proliferação e anaplasia) e explica os efeitos secundários típicos que o enfermeiro gere em oncologia: anemia, leucopenia e plaquetopenia (supressão medular), mucosite oral e diarreia (destruição do epitélio gastrointestinal). Justifica também a prioridade absoluta de proteção radiológica ao feto em grávidas."
  },
  {
    "id": 5016,
    "topicId": 5,
    "question": "Na dosimetria das radiações, qual é a definição e unidade no Sistema Internacional (SI) da grandeza 'Dose Absorvida' (D)?",
    "options": [
      "Quantidade de energia da radiação depositada por unidade de massa da matéria biológica absorvedora (D = ΔE / Δm); a sua unidade SI é o Gray (1 Gy = 1 Joule por quilograma).",
      "Número total de fotões emitidos por uma ampola de raios X por segundo, sendo expressa no Sistema Internacional em unidades de rotações por minuto do ânodo giratório.",
      "Grau de aquecimento térmico registado na superfície do detetor digital de radiografia, medido no Sistema Internacional de Unidades em graus Kelvin por centímetro cúbico.",
      "Potencial de colapso eletrostático da membrana citoplasmática dos eritrócitos, medido no SI em milivolts por cada centímetro quadrado de área de exposição direta."
    ],
    "correctIndex": 0,
    "explanation": "A Dose Absorvida (D) mede a energia média depositada pela radiação na matéria por unidade de massa: D = dE / dm. No Sistema Internacional (SI), a unidade oficial é o Gray (Gy), definido como a absorção de 1 Joule de energia por 1 quilograma de tecido (1 Gy = 1 J/kg). A antiga unidade não-SI era o Rad (1 Gy = 100 rad; 1 rad = 0,01 Gy = 1 cGy).",
    "distractorAnalysis": [
      "Está incorreta: a taxa de emissão de fotões ou atividade rege-se por outras grandezas; a dose absorvida quantifica a energia física efetivamente retida no tecido (J/kg = Gray).",
      "Está incorreta: a dose absorvida mede energia depositada por massa biológica e não calor superficial ou temperatura em Kelvin na placa detetora do equipamento.",
      "Está incorreta: confunde a deposição de energia radiológica ionizante com potenciais elétricos transmembranares ou condutância iónica de células excitáveis."
    ],
    "nursingApplication": "Na radioterapia externa para tratamento oncológico, as doses prescritas e administradas ao tumor são rigorosamente calculadas em Grays (ex: dose total de 60 Gy fracionada em 30 sessões diárias de 2 Gy). O enfermeiro avalia a pele do campo de irradiação para prevenção precoce de radiodermite conforme a dose cumulativa em Grays recebida pelo doente."
  },
  {
    "id": 5017,
    "topicId": 5,
    "question": "A 'Dose Equivalente' (H) e a 'Dose Efetiva' (E) utilizam a unidade Sievert (Sv = J/kg). Para que servem os fatores de ponderação da radiação (w_R) e dos tecidos (w_T) associados a estas grandezas?",
    "options": [
      "O fator w_R corrige a temperatura do paciente e o fator w_T ajusta a voltagem do tubo radiológico de acordo com a distância focal medida entre o colimador e o chassis.",
      "O fator w_R corrige a eficácia biológica da radiação (ex: 1 para raios X vs 20 para partículas alfa); o fator w_T pondera a diferente sensibilidade dos tecidos ao risco de cancro.",
      "Ambos os fatores servem unicamente para converter a dose expressa em Gray para unidades de pressão arterial periférica em doentes monitorizados em cuidados intensivos.",
      "O fator w_R aplica-se exclusivamente a radiações solares infravermelhas e w_T a campos eletromagnéticos gerados por cabos de alta tensão na via pública exterior."
    ],
    "correctIndex": 1,
    "explanation": "A Dose Equivalente é H = D · w_R: 1 Gy de partículas alfa causa 20 vezes mais dano biológico do que 1 Gy de Raios X, logo w_R(alfa) = 20 e w_R(X/gama) = 1. A Dose Efetiva é a soma ponderada de todos os órgãos: E = ∑ w_T · H_T. Como tecidos têm sensibilidades oncológicas muito diferentes (a medula óssea e o pulmão têm w_T elevado; a pele e a superfície óssea têm w_T baixo, e ∑ w_T = 1), a Dose Efetiva em Sieverts permite comparar o risco biológico total de exames tão díspares como uma TAC torácica (~7 mSv) e um raio-X dentário (~0,005 mSv).",
    "distractorAnalysis": [
      "Está incorreta: w_R (fator de ponderação da radiação) traduz a densidade de ionização (LET); w_T (fator de ponderação tecidual) traduz a radiossensibilidade relativa de cada órgão.",
      "Está incorreta: os fatores de ponderação são grandezas adimensionais de radioproteção para estimativa de risco biológico e detrimento estocástico em Sieverts (Sv).",
      "Está incorreta: aplicam-se a radiações ionizantes (raios X, gama, neutrões, partículas alfa e beta) no cálculo das doses equivalente e efetiva estabelecidas pela ICRP."
    ],
    "nursingApplication": "A dose média natural a que qualquer habitante da Terra está exposto pela radiação cósmica e radão do solo é de cerca de 2,4 a 3 mSv por ano. Conhecer estas grandezas permite ao enfermeiro tranquilizar um doente angustiado que vai fazer uma radiografia de tórax: a dose é de apenas ~0,02 a 0,05 mSv, o equivalente a escassos dias de radiação natural de fundo."
  },
  {
    "id": 5018,
    "topicId": 5,
    "question": "O Sistema de Proteção Radiológica preconizado pela Comissão Internacional de Proteção Radiológica (ICRP) baseia-se em três princípios éticos e científicos fundamentais. Quais são eles?",
    "options": [
      "Imobilização permanente do utente, amplificação contínua da corrente anódica e eliminação de qualquer blindagem de chumbo nas salas de imagiologia médica.",
      "Maximização da dose absorvida pelos órgãos vitais, redução da distância entre o operador e o tubo e supressão do registo dosimétrico institucional de enfermagem.",
      "Justificação da prática (benefício líquido positivo), Otimização da proteção radiológica (princípio ALARA) e Limitação de doses individuais a trabalhadores e ao público.",
      "Realização obrigatória de exames radiológicos preventivos diários a toda a população sem necessidade de qualquer prescrição clínica ou indicação médica fundamentada."
    ],
    "correctIndex": 2,
    "explanation": "Os 3 pilares do sistema ICRP são: 1) Justificação: nenhuma prática com radiação ionizante pode ser realizada a menos que produza um benefício líquido para o indivíduo ou sociedade que compense o detrimento radiológico; 2) Otimização: todas as doses devem ser mantidas 'Tão Baixas Quanto Razoavelmente Exequíveis' (As Low As Reasonably Achievable - princípio ALARA), tendo em conta fatores económicos e sociais; 3) Limitação de Dose: as doses individuais em trabalhadores e no público não podem ultrapassar limites anuais estritos regulamentados por lei.",
    "distractorAnalysis": [
      "Está incorreta: violaria todos os preceitos de proteção radiológica; a blindagem é obrigatória e a imobilização do doente deve recorrer a dispositivos mecânicos de apoio.",
      "Está incorreta: o princípio básico é manter as doses tão baixas quanto razoavelmente exequível (ALARA), minimizando a exposição e monitorizando as doses com dosímetros.",
      "Está incorreta: qualquer exposição médica a radiação ionizante exige estrita justificação clínica (o benefício diagnóstico ou terapêutico deve superar o risco biológico potencial)."
    ],
    "nursingApplication": "Na prática diária, o enfermeiro aplica ativamente o princípio da Justificação ao verificar se o exame radiológico prescrito tem indicação clínica clara e se não há exames recentes repetidos no sistema informático, e aplica a Otimização garantindo o posicionamento correto à primeira tentativa para evitar disparos desnecessários."
  },
  {
    "id": 5019,
    "topicId": 5,
    "question": "O princípio ALARA (As Low As Reasonably Achievable - 'Tão Baixo Quanto Razoavelmente Exequível') traduz-se operacionalmente em enfermagem através de três regras práticas universais de radioproteção:",
    "options": [
      "TEMPERATURA (arrefecer a sala para zero graus), PRESSÃO (elevar a pressão atmosférica da sala de exames) e VELOCIDADE (correr em direção ao feixe de raios X durante o disparo).",
      "CONFORTO (evitar o uso de aventais de chumbo pelo peso), PROXIMIDADE (permanecer encostado ao tubo emissor) e FREQUÊNCIA (repetir radiografias até obter imagem nítida).",
      "POTÊNCIA (aumentar a dose no máximo para encurtar o tempo), ILUMINAÇÃO (apagar todas as luzes da sala) e VENTILAÇÃO (manter janelas abertas para dispersar fotões).",
      "TEMPO (minimizar a duração da exposição), DISTÂNCIA (maximizar o afastamento da fonte) e BLINDAGEM (interpor barreiras protetoras como aventais de chumbo e biombos)."
    ],
    "correctIndex": 3,
    "explanation": "A tríade de ouro de proteção radiológica externa contra radiações penetrantes é inegociável: 1) TEMPO: a dose recebida é diretamente proporcional ao tempo gasto junto à fonte (Dose = Taxa × t); 2) DISTÂNCIA: pelo inverso do quadrado da distância (I ∝ 1/d²), afastar-se é a forma mais barata e potente de reduzir a dose a valores desprezíveis; 3) BLINDAGEM: quando a distância não pode ser ampliada, o uso de aventais plumbíferos, protetores cervicais e biombos móveis atenua exponencialmente os fotões secundários.",
    "distractorAnalysis": [
      "Está incorreta: temperatura e pressão atmosférica ambiental não atenuam feixes de raios X diagnósticos; aproximar-se da fonte aumenta geometricamente a dose recebida.",
      "Está incorreta: aventais plumbíferos são equipamento de proteção individual indispensável; a aproximação e repetição desnecessária de disparos violam a radioproteção básica.",
      "Está incorreta: a dose deve ser otimizada segundo o princípio ALARA; a luz da sala e ventilação não afetam a trajetória nem a atenuação dos fotões de raios X."
    ],
    "nursingApplication": "Quando o enfermeiro tem de conter ou acompanhar uma criança agitada durante um exame de Raios X portátil no leito: aplica os 3 princípios em simultâneo — veste o avental de chumbo e protetor de tiroide (blindagem), afasta-se o máximo possível do feixe primário esticando os braços ou dando um passo atrás (distância), e assegura a imobilização rápida para que o técnico faça o disparo num milissegundo único (tempo)."
  },
  {
    "id": 5020,
    "topicId": 5,
    "question": "A intensidade da radiação emitida por uma fonte pontual decai segundo a 'Lei do Inverso do Quadrado da Distância' (I ∝ 1 / d²). Se um enfermeiro que se encontra a 1 metro de distância do doente durante um disparo de raios X der dois passos para trás, passando a situar-se a 3 metros da fonte, a intensidade da radiação recebida pelo profissional cai para:",
    "options": [
      "A intensidade da radiação cai para 1/9 (cerca de 11%) do valor inicial, visto que a intensidade é inversamente proporcional ao quadrado da distância à fonte (1 / 3² = 1/9).",
      "A intensidade da radiação cai para exatamente um terço (33%) do valor original, de acordo com o princípio da proporcionalidade linear simples do afastamento espacial.",
      "A intensidade da radiação mantém-se rigorosamente idêntica porque os fotões de raios X propagam-se em feixe estritamente colimado sem divergência geométrica angular.",
      "A intensidade da radiação triplica devido à reflexão do feixe no ar da sala de exames, aumentando a dose absorvida pelo profissional à medida que este se afasta do doente."
    ],
    "correctIndex": 0,
    "explanation": "Pela lei do inverso do quadrado da distância: I₁ · d₁² = I₂ · d₂² => I₂ = I₁ · (d₁ / d₂)² = I₁ · (1 / 3)² = I₁ / 9. Triplicar o afastamento de 1 para 3 metros reduz a taxa de dose de radiação recebida pelo profissional para um nono (uma redução colossal de 89% na dose!), sem qualquer custo financeiro ou necessidade de blindagem adicional.",
    "distractorAnalysis": [
      "Está incorreta: a atenuação com a distância é quadrática (1/d²) e não linear (1/d¹); triplicar a distância (3 m) reduz a dose para 1/3² = 1/9 (~11%) e não para 1/3 (~33%).",
      "Está incorreta: os fotões dispersos no corpo do doente são emitidos isotropicamente em todas as direções espaciais, sofrendo dispersão geométrica proporcional à área esférica (4πd²).",
      "Está incorreta: afastar-se da fonte de radiação reduz drasticamente a taxa de dose recebida, sendo o aumento da distância a medida de proteção mais simples e eficaz."
    ],
    "nursingApplication": "Durante a realização de radiografias móveis na enfermaria ou UCIP, a regra de ouro do enfermeiro é dar dois ou três passos para trás em relação ao leito (colocando-se a mais de 2 a 3 metros de distância): este simples gesto biofísico reduz a exposição à radiação dispersa para valores negligenciáveis, muitas vezes inferiores à dose recebida por permanecer com avental de chumbo colado ao doente."
  },
  {
    "id": 5021,
    "topicId": 5,
    "question": "Qual é o 'Limite de Dose Efetiva' anual estabelecido por diretrizes internacionais (ICRP) e pela legislação europeia e portuguesa para Trabalhadores Profissionalmente Expostos (TPE), como enfermeiros de hemodinâmica e radiologia de intervenção?",
    "options": [
      "500 mSv por ano para qualquer profissional de saúde em hospitais, desde que os exames sejam realizados durante o período de trabalho diurno entre as oito e as vinte horas.",
      "20 mSv por ano em média ao longo de períodos definidos de 5 anos (com o limite de não exceder 50 mSv em nenhum ano individual isolado), para Trabalhadores Expostos (TPE).",
      "1 mSv por ano para profissionais expostos, correspondendo exatamente ao mesmo limite de dose atribuído a indivíduos do público em geral que não contactam com radiações.",
      "Não existe limite de dose anual regulamentar para enfermeiros de bloco ou hemodinâmica, desde que utilizem farda hospitalar de algodão lavada a altas temperaturas."
    ],
    "correctIndex": 1,
    "explanation": "As normas básicas de segurança radiológica (Diretiva EURATOM e ICRP 103) fixam para os Trabalhadores Profissionalmente Expostos (TPE) um limite de dose efetiva de 20 mSv/ano (média em 5 anos, máximo de 50 mSv num ano único). Para o público geral, o limite é muito mais rigoroso: 1 mSv/ano. Estes limites destinam-se a garantir que a probabilidade de efeitos estocásticos (cancro) se mantenha dentro de níveis de risco ocupacional socialmente aceitáveis e comparáveis aos de indústrias seguras.",
    "distractorAnalysis": [
      "Está incorreta: 500 mSv é um valor extremamente elevado que causaria efeitos determinísticos; o limite anual legal da ICRP e diretiva europeia para TPE é de 20 mSv/ano.",
      "Está incorreta: 1 mSv por ano é o limite de dose efetiva anual para membros do público em geral; para TPE ocupacionalmente expostos o limite legal é de 20 mSv/ano.",
      "Está incorreta: a legislação nacional (DL 108/2018) e internacional impõe limites estritos de dose monitorizados individualmente com dosímetro oficial para todos os TPE."
    ],
    "nursingApplication": "O cumprimento destes limites é monitorizado mensalmente através do dosímetro individual oficial. Na prática moderna, enfermeiros que utilizam corretamente os aventais de chumbo e mantêm distâncias de segurança recebem habitualmente menos de 1 a 2 mSv por ano, muito abaixo do teto legal de 20 mSv."
  },
  {
    "id": 5022,
    "topicId": 5,
    "question": "No caso de uma enfermeira que trabalha num serviço de imagiologia ou bloco cirúrgico e que declare formalmente a sua gravidez (gestação), qual é a proteção e o limite de dose especial estipulado por lei para salvaguardar o embrião/feto?",
    "options": [
      "A enfermeira grávida pode receber doses cumulativas de até 50 mSv no abdómen durante o primeiro trimestre gestacional por ser a fase de menor sensibilidade biológica fetal.",
      "A declaração de gravidez exige a cessação imediata de qualquer atividade de enfermagem no hospital e isolamento profilático em câmara de chumbo durante nove meses.",
      "A dose equivalente à superfície do abdómen materno não deve exceder 1 mSv durante o resto da gestação, garantindo ao embrião/feto proteção equivalente ao público geral.",
      "O limite para o feto é fixado em 100 mSv por mês, permitindo que a profissional participe ativamente na contenção manual de doentes durante radiografias com aparelho móvel."
    ],
    "correctIndex": 2,
    "explanation": "Logo que a gravidez é notificada ao empregador, as condições de trabalho devem ser ajustadas para que a dose equivalente acumulada no feto seja a menor possível e não exceda 1 mSv durante o resto da gestação. Como o avental de chumbo materno atenua a grande maioria dos fotões, a enfermeira grávida pode frequentemente continuar a trabalhar em funções hospitalares desde que readaptada para áreas sem intervenção radiológica pesada contínua ou com monitorização dosimétrica abdominal adicional sob o avental.",
    "distractorAnalysis": [
      "Está incorreta: o primeiro trimestre gestacional (organogénese) é o período de maior radiossensibilidade fetal; a dose no feto deve ser mantida tão baixa quanto possível (<1 mSv).",
      "Está incorreta: a lei não impõe o afastamento hospitalar total, mas sim a adaptação das condições de trabalho para garantir que a dose no abdómen materno não exceda 1 mSv.",
      "Está incorreta: 100 mSv é uma dose teratogénica potencialmente letal para o embrião; o limite de dose ao longo de toda a gravidez para o feto é rigorosamente de 1 mSv."
    ],
    "nursingApplication": "A declaração precoce da gravidez pela enfermeira ao serviço de Saúde Ocupacional é um dever de radioproteção: permite a reatribuição imediata de tarefas (evitando salas de hemodinâmica ou assistência a exames móveis de fluoroscopia prolongada), garantindo a proteção integral da saúde da mãe e do feto."
  },
  {
    "id": 5023,
    "topicId": 5,
    "question": "O dosímetro pessoal de leitura diferida (dosímetro termoluminescente - TLD ou OSL) atribuído ao enfermeiro que atua em áreas com radiação deve ser utilizado de acordo com qual regra padronizada?",
    "options": [
      "Deve ser pendurado no exterior da sala de exames junto à porta de entrada para medir a radiação de fundo dos corredores hospitalares durante os turnos de enfermagem.",
      "Deve ser fixado no calçado hospitalar sem qualquer proteção para quantificar a radiação absorvida pelas unhas e ossos dos metatarsos durante os procedimentos cirúrgicos.",
      "O dosímetro deve ser partilhado rotativamente por todos os enfermeiros da mesma equipa de trabalho, sendo suficiente um único dispositivo de leitura por enfermaria.",
      "Deve ser utilizado no tronco (tórax/abdómen) por BAIXO do avental de chumbo para estimar a dose efetiva absorvida pelos órgãos vitais do corpo que se encontram protegidos."
    ],
    "correctIndex": 3,
    "explanation": "O dosímetro pessoal é estritamente pessoal e intransmissível. A sua leitura serve de base jurídica e clínica para estimar a dose efetiva recebida pelo trabalhador. A norma padrão internacional exige que o dosímetro principal de corpo inteiro seja colocado no tronco por baixo do avental plumbífero de proteção: desta forma, os cristais termoluminescentes recebem exatamente a radiação residual atenuada que atinge os órgãos nobres (medula óssea, fígado, gónadas). Se houver risco para os olhos e tiroide, utiliza-se um segundo dosímetro adicional na gola por fora do avental.",
    "distractorAnalysis": [
      "Está incorreta: o dosímetro mede a dose individual ocupacional e tem de ser usado pelo profissional durante o trabalho; medir o corredor anularia o controlo de segurança individual.",
      "Está incorreta: o dosímetro principal de corpo inteiro usa-se no tronco (por baixo do avental); para extremidades usam-se dosímetros adicionais dedicados de punho ou anel.",
      "Está incorreta: o dosímetro é de uso pessoal e intransmissível; partilhar dispositivos impede a avaliação fidedigna da dose individual de cada trabalhador exposto."
    ],
    "nursingApplication": "O enfermeiro nunca deve expor o seu dosímetro a fontes de radiação quando não o estiver a usar no corpo (por exemplo, esquecê-lo dentro da sala de cirurgia durante um procedimento). A leitura espúria de doses artificiais elevadas desencadeia inquéritos radiológicos complexos e afastamento preventivo injustificado do trabalho."
  },
  {
    "id": 5024,
    "topicId": 5,
    "question": "Os aventais de proteção radiológica utilizados pelos profissionais de enfermagem no bloco operatório e hemodinâmica são fabricados em borracha de vinil impregnada com chumbo ou metais pesados compósitos equivalentes. Qual é a espessura de equivalência de chumbo mais comumente utilizada nestes aventais?",
    "options": [
      "Espessura de 0,25 mm a 0,5 mm de equivalência em chumbo (Pb), que atenua mais de 90% a 98% da radiação X dispersa na faixa de energias de radiodiagnóstico.",
      "Espessura de 50 mm (cinco centímetros) de chumbo puro maciço, conferindo aos profissionais um peso de equipamento de proteção individual superior a oitenta quilos.",
      "Espessura de 0,001 mm de alumínio eletrolítico simples, suficiente para bloquear a totalidade dos raios X e de neutrões térmicos com peso de algumas gramas.",
      "Os aventais não possuem chumbo nem materiais pesados, sendo confecionados em tecido de algodão hidrófilo comum embebido em soro fisiológico a 0,9% para absorção iónica."
    ],
    "correctIndex": 0,
    "explanation": "Devido ao elevado peso específico do chumbo (densidade ρ = 11,34 g/cm³), aventais com 0,25 mm de Pb equivalente pesam cerca de 2 a 3 kg e atenuam cerca de 90% a 95% da radiação dispersa a 70-80 kVp. Aventais com 0,5 mm de Pb equivalente pesam de 4 a 6 kg e conseguem atenuar mais de 98% da radiação secundária incidente. A escolha equilibra a proteção radiológica contra a fadiga musculoesquelética do enfermeiro durante procedimentos longos.",
    "distractorAnalysis": [
      "Está incorreta: aventais com 5 cm de chumbo seriam incomportáveis mecanicamente e inviabilizariam a mobilidade; a espessura padrão de 0,25-0,5 mm Pb oferece proteção ótima com peso tolerável.",
      "Está incorreta: películas milimétricas de alumínio não possuem número atómico nem densidade suficientes para atenuar raios X diagnósticos; exige-se chumbo ou compósitos equivalentes.",
      "Está incorreta: o tecido têxtil ou algodão aquoso oferece atenuação desprezável aos raios X diagnósticos; o avental é fabricado com compostos elastoméricos densos de chumbo."
    ],
    "nursingApplication": "Os aventais plumbíferos NUNCA devem ser dobrados ou amarrotados ao serem guardados: a dobragem quebra as camadas internas de borracha plúmbea, criando fissuras radiotransparentes invisíveis a olho nu por onde os Raios X passam livremente. O enfermeiro deve pendurá-los sempre em cabides apropriados e inspecioná-los anualmente sob radioscopia quanto a fendas."
  },
  {
    "id": 5025,
    "topicId": 5,
    "question": "Na utilização de aparelhos de Raios X móveis (portáteis) nas enfermarias de internamento ou unidades de cuidados intensivos, qual é o procedimento de segurança que o enfermeiro deve assegurar junto dos outros doentes internados no mesmo quarto de enfermaria?",
    "options": [
      "Evacuar obrigatoriamente a totalidade da enfermaria e transferir todos os doentes internados para outro piso do hospital antes de efetuar um disparo com aparelho móvel.",
      "Garantir uma distância mínima de segurança (pelo menos 2 a 3 metros) entre o feixe/doente radiografado e os restantes doentes, ou interpor um biombo plumbífero móvel entre camas.",
      "Cobrir todos os outros doentes da enfermaria com cobertores de lã grossa para evitar que a radiação dispersa penetre através do tecido das camisolas de internamento.",
      "Solicitar ao outro doente da cama vizinha que segure manualmente o chassis de radiografia atrás do tórax do doente radiografado para acelerar o procedimento técnico."
    ],
    "correctIndex": 1,
    "explanation": "Pela Lei do Inverso do Quadrado da Distância e pela natureza da radiação dispersa Compton emitida pelo doente, a intensidade da radiação cai exponencialmente com o afastamento. A uma distância de 2 a 3 metros da cama radiografada com colimação rigorosa do feixe primário, a dose recebida pelo doente da cama ao lado é virtualmente insignificante (muitas vezes inferior a frações de microgray por disparo). Se a distância de 2 metros não puder ser mantida, interpõe-se um biombo móvel de chumbo.",
    "distractorAnalysis": [
      "Está incorreta: a evacuação total do piso hospitalar é desnecessária; a lei do inverso do quadrado da distância (2-3 metros) associada à colimação adequada torna o exame seguro na enfermaria.",
      "Está incorreta: cobertores de lã não atenuam radiação ionizante de raios X; a proteção faz-se por distância e blindagem de materiais pesados plumbíferos.",
      "Está incorreta: nunca se deve pedir a outro doente ou acompanhante para segurar detetores ou chassis; a contenção, se estritamente necessária, exige profissionais com EPI completo."
    ],
    "nursingApplication": "Antes de autorizar o técnico a realizar o disparo do aparelho de raios X portátil, o enfermeiro avisa em voz clara na enfermaria ('Atenção ao Raio-X!'), permitindo que visitantes e profissionais não-blindados se afastem para lá da distância de segurança (mínimo 2 a 3 metros) ou saiam temporariamente do quarto."
  },
  {
    "id": 5026,
    "topicId": 5,
    "question": "Em radioterapia oncológica, qual é a diferença entre a 'Teleterapia' e a 'Braquiterapia'?",
    "options": [
      "Teleterapia utiliza unicamente emissores beta por via oral sistémica, enquanto a braquiterapia recorre a feixes externos de protões de alta energia gerados em ciclotrões hospitalares especializados de grande porte.",
      "Teleterapia é indicada apenas para lesões cutâneas superficiais benignas, ao passo que a braquiterapia exige intervenção cirúrgica com irradiação corporal total sob anestesia geral e suporte ventilatório mecânico invasivo.",
      "Teleterapia aplica radiação a partir de uma fonte externa distante do corpo (ex: acelerador linear), enquanto a braquiterapia coloca fontes radioativas seladas em contacto direto ou no interior do tecido tumoral.",
      "Teleterapia requer o implante definitivo de sementes radioativas no parênquima orgânico, enquanto a braquiterapia emite fotões X colimados a vários metros de distância da marquesa onde o doente se encontra deitado."
    ],
    "correctIndex": 2,
    "explanation": "Em oncologia radioterápica: 1) Teleterapia (tele = longe): a fonte de radiação (feixes de fotões de megavoltagem ou eletrões produzidos por um acelerador linear isocêntrico) localiza-se a cerca de 80 a 100 cm do doente; 2) Braquiterapia (brachy = perto): pequenos implantes radioativos selados ('sementes', fios ou agulhas) são inseridos temporária ou permanentemente dentro do tumor (ex: cancro da próstata, colo do útero ou mama), administrando doses tumoricidas colossais no tecido maligno com queda abrupta da dose nos tecidos saudáveis vizinhos (Lei de Laplace e inverso do quadrado).",
    "distractorAnalysis": [
      "Está incorreta: a teleterapia não é uma terapêutica oral metabólica; a administração oral de isótopos não selados (ex: I-131) constitui terapia metabólica em medicina nuclear.",
      "Está incorreta: a teleterapia trata tumores profundos ou superficiais com feixes externos; a braquiterapia não envolve irradiação corporal total, mas sim radiação altamente localizada.",
      "Está incorreta: o implante de sementes intersticiais é a definição de braquiterapia (curta distância); a teleterapia opera à distância (tele = longe) com aceleradores lineares."
    ],
    "nursingApplication": "No pós-operatório de doentes submetidos a braquiterapia ginecológica ou de próstata com implantes radioativos temporários de alta taxa de dose (HDR), o enfermeiro deve conhecer os radioisótopos em uso, respeitar os tempos de permanência no quarto, utilizar dosímetro de pulso/tronco e garantir que as fontes foram totalmente recolhidas para o cofre blindado antes de realizar cuidados de higiene direta."
  },
  {
    "id": 5027,
    "topicId": 5,
    "question": "O conceito de 'Radiodermite' (eritema e lesões cutâneas radioinduzidas) representa um efeito determinístico com limiar de dose. Qual é o cuidado de enfermagem fundamental na proteção da pele de um doente submetido a um ciclo de radioterapia externa?",
    "options": [
      "Efeito estocástico sem qualquer valor de limiar de dose biológico, exigindo da equipa de enfermagem a desinfeção diária rigorosa com iodopovidona alcoólica tópica e oclusão estanque contínua com pensos adesivos impermeáveis.",
      "Efeito biológico de natureza hereditária com transmissão aos descendentes, recomendando-se a fricção vigorosa da epiderme com esponjas esfoliantes para acelerar a descamação fisiológica do estrato córneo lesado.",
      "Efeito puramente térmico superficial decorrente de convecção do ar ambiente, devendo o enfermeiro aplicar compressas de gelo direto durante três horas consecutivas para induzir vasoconstrição prolongada dos vasos dérmicos.",
      "Efeito determinístico com limiar de dose, devendo a enfermagem orientar a lavagem com água tépida e sabão neutro sem fricção mecânica, evitando a aplicação de cremes com óxido de zinco ou metais antes da sessão de tratamento."
    ],
    "correctIndex": 3,
    "explanation": "A radiodermite ocorre porque a radiação ionizante atinge as células estaminais da camada basal da epiderme (tecido de alta proliferação celular, Lei de Bergonié-Tribondeau). Para doses de 2 a 10 Gy surge eritema e prurido; acima de 15 a 20 Gy pode ocorrer descamação húmida exsudativa dolorosa. O cuidado de enfermagem foca-se em preservar a integridade da barreira cutânea remanescente: lavar suavemente sem esfregar, evitar agentes irritantes químicos, hidratar com cremes emolientes prescritos específicos aplicados com intervalo de segurança antes das sessões e proteger do sol.",
    "distractorAnalysis": [
      "Está incorreta: a radiodermite é determinística (severidade proporcional à dose acima do limiar); pensos oclusivos e soluções alcoólicas irritantes estão formalmente contraindicados.",
      "Está incorreta: a radiodermite é uma lesão somática tecidual e não hereditária; friccionar a pele exposta destrói a camada basal em regeneração e agrava a descamação húmida.",
      "Está incorreta: a radiodermite resulta da ionização e morte das células basais epidérmicas e não de calor; o gelo direto causa vasoconstrição extrema e risco de necrose isquémica."
    ],
    "nursingApplication": "A monitorização e estadiamento da radiodermite (graus 1 a 4 da escala RTOG/CTCAE) pelo enfermeiro de oncologia garante intervenções precoces com pensos hidrocolóides ou espumas de silicone suave, prevenindo infeções bacterianas secundárias e interrupções indesejadas no plano de tratamento oncológico."
  },
  {
    "id": 5028,
    "topicId": 5,
    "question": "Na colimação do feixe primário de Raios X por intermédio de diafragmas de chumbo ajustáveis (colimador luminoso do tubo), qual é o benefício duplo obtido ao restringir a área do feixe estritamente à anatomia de interesse clínico?",
    "options": [
      "Reduz a dose integral absorvida pelo doente (protegendo tecidos saudáveis adjacentes) e diminui a radiação dispersa Compton, melhorando expressivamente o contraste e a nitidez da imagem diagnóstica final.",
      "Aumenta a proporção de dispersão Compton no interior do feixe útil, permitindo compensar perdas de densidade ótica sem necessidade de aumentar a quilovoltagem de pico ou o tempo de exposição no comando técnico.",
      "Substitui na totalidade a necessidade de filtração de alumínio à saída da ampola, absorvendo todos os fotões com comprimentos de onda correspondentes à radiação de travagem contínua gerada no ânodo metálico.",
      "Elimina por completo a produção de radiação secundária no interior do corpo do utente, dispensando o afastamento físico da equipa cirúrgica durante o disparo radiológico do arco em C no bloco operatório."
    ],
    "correctIndex": 0,
    "explanation": "A colimação estrita é uma das práticas mais eficazes da radioproteção: 1) Benefício biológico: ao limitar o feixe à área anatómica estrita (ex: apenas o punho em vez de todo o membro superior), reduz-se o volume tecidual irradiado e a dose efetiva recebida pelo doente (princípio ALARA); 2) Benefício imagiológico: como um volume menor de tecido é atravessado, a quantidade total de fotões espalhados por efeito Compton cai drasticamente, reduzindo o 'véu de dispersão' e melhorando o contraste da imagem.",
    "distractorAnalysis": [
      "Está incorreta: a colimação reduz a dispersão Compton ao diminuir o volume corporal irradiado; a dispersão degrada o contraste da imagem e não serve para compensar densidade.",
      "Está incorreta: a colimação delimita a geometria do campo mas não filtra os fotões moles de baixa energia do feixe primário, papel desempenhado pela filtração de alumínio.",
      "Está incorreta: a colimação diminui o volume de tecido que dispersa radiação, mas os tecidos irradiados continuam a produzir radiação secundária de dispersão de Compton."
    ],
    "nursingApplication": "O enfermeiro que opera ou colabora em procedimentos sob radioscopia (como na colocação de cateteres PICC ou redução ortopédica de fraturas) deve solicitar ativamente a colimação máxima do feixe aos limites da zona de interesse, protegendo tanto o doente como toda a equipa cirúrgica contra a radiação dispersa."
  },
  {
    "id": 5029,
    "topicId": 5,
    "question": "A fluoroscopia (ou radioscopia contínua) é uma modalidade radiológica em tempo real utilizada em arcos em C cirúrgicos e laboratórios de hemodinâmica vascular. O que diferencia a dose de radiação de uma fluoroscopia prolongada da dose de uma radiografia de tórax simples?",
    "options": [
      "A fluoroscopia contínua emite taxas de dose muito inferiores às de uma radiografia de tórax simples por operar exclusivamente com radiação secundária retrodispersa de reduzidíssimo miliamperagem.",
      "A fluoroscopia contínua administra taxas de dose cumulativas elevadas ao longo do tempo, podendo em procedimentos intervencionais longos provocar radiodermite, ulceração ou necrose tecidual profunda.",
      "A taxa de emissão de radiação na fluoroscopia decresce exponencialmente após os primeiros sessenta segundos de escopia contínua, tornando o procedimento totalmente isento de qualquer risco de lesão tecidual.",
      "O feixe fluoroscópico é formado por radiação eletromagnética não-ionizante de baixa frequência, limitando os danos biológicos cutâneos a uma ligeira hiperemia vasomotora transitória e autolimitada."
    ],
    "correctIndex": 1,
    "explanation": "Enquanto uma radiografia de tórax de disparo único expõe o doente a uma dose diminuta (~0,02 a 0,05 mSv, frações de milissegundo de disparo), a fluoroscopia envolve emissão contínua ou pulsada prolongada de raios X durante minutos ou horas (ex: cateterismos cardíacos complexos, embolizações neurovasculares). A taxa de dose na pele de entrada pode atingir 20 a 50 mGy/minuto: em exames de mais de 60 minutos sob o mesmo ângulo, a dose na pele pode ultrapassar 2 a 5 Gy, provocando eritema, ulceração profunda e necrose radioinduzida na pele das costas do doente.",
    "distractorAnalysis": [
      "Está incorreta: a fluoroscopia pode debitar entre 20 a 50 mGy/min (ou mais em modo de alto débito), acumulando em minutos doses equivalentes a centenas de radiografias simples.",
      "Está incorreta: a taxa de dose é contínua e não diminui com o tempo de exame; doses cutâneas cumulativas superiores a 2 Gy podem provocar eritema e acima de 12-15 Gy necroses graves.",
      "Está incorreta: a fluoroscopia utiliza raios X convencionais (radiação ionizante de alta frequência); os efeitos determinísticos cutâneos e estocásticos são riscos reais."
    ],
    "nursingApplication": "No pós-procedimento de doentes submetidos a intervenções percutâneas longas sob fluoroscopia (>60-90 minutos de arco em C), o enfermeiro deve inspecionar a pele das costas e região escapular quanto a sinais precoces de eritema radioinduzido e instruir o doente e família a vigiar alterações cutâneas nas semanas seguintes, comunicando qualquer descamação persistente."
  },
  {
    "id": 5030,
    "topicId": 5,
    "question": "Em caso de reação anafilactóide grave aguda (broncoespasmo severo, estridor laríngeo, choque distributivo e angioedema) imediatamente após a injeção intravenosa de meio de contraste iodado para TAC, qual é o fármaco de primeira linha e de eleição absoluta que deve ser administrado sem demora?",
    "options": [
      "Hidrocortisona por via endovenosa lenta como terapêutica isolada de primeira linha, protelando a administração de adrenalina até à confirmação laboratorial de anafilaxia mediada por anticorpos IgE.",
      "Anti-histamínico H1 oral em associação com broncodilatador inalado, mantendo o doente sentado em repouso na sala de exames até à estabilização espontânea de todos os parâmetros hemodinâmicos e ventilatórios.",
      "Adrenalina (epinefrina) por via intramuscular imediata na face anterolateral da coxa (músculo vasto lateral), associada a oxigenoterapia suplementar e reposição volémica com cristalóides endovenosos.",
      "Furosemida endovenosa em alta dose com restrição de fluidos, visando acelerar a depuração renal das moléculas de contraste e reduzir a pressão hidrostática no leito capilar da circulação pulmonar."
    ],
    "correctIndex": 2,
    "explanation": "A anafilaxia aos contrastes iodados é uma reação idiossincrática anafilactóide não-IgE mediada por desgranulação direta de mastócitos e basófilos. A Adrenalina intramuscular (0,5 mg na concentração 1:1000 num adulto) é o único fármaco salva-vidas de primeira linha: pelos recetores alfa-1 promove vasoconstrição periférica revertendo o choque e o edema laríngeo; pelos recetores beta-2 induz broncodilatação imediata potente e bloqueia a libertação subsequente de mediadores inflamatórios pelos mastócitos.",
    "distractorAnalysis": [
      "Está incorreta: a adrenalina intramuscular é a primeira linha inadiável na anafilaxia grave; os corticóides demoram horas a atuar e não revertem o broncospasmo ou o choque agudo.",
      "Está incorreta: anti-histamínicos orais e inaladores são insuficientes no choque e edema de glote; protelar a adrenalina aumenta dramaticamente o risco de paragem cardiorrespiratória.",
      "Está incorreta: no choque anafilactóide há vasodilatação maciça e extravasamento plasmático, pelo que a furosemida agravaria o colapso hemodinâmico com choque hipovolémico letal."
    ],
    "nursingApplication": "O enfermeiro que atua em serviços de imagiologia garante que o carro de emergência com adrenalina em ampola, seringas, agulhas intramusculares e material de via aérea avançada está testado e disponível imediatamente ao lado da sala de TAC, administrando adrenalina IM aos primeiros sinais de compromisso respiratório ou hemodinâmico."
  },
  {
    "id": 5031,
    "topicId": 5,
    "question": "Em doentes submetidos a cintigrafia óssea ou outros exames de Medicina Nuclear com radioisótopos emissores gama de semivida curta (como o Tecnécio-99m, T₁/₂ ≈ 6 horas), qual é a orientação de enfermagem após o exame quanto à eliminação da radioatividade residual pelo corpo?",
    "options": [
      "Restringir a ingestão hídrica durante 24 horas para prolongar a permanência do isótopo na circulação sistémica e maximizar a captação osteoblástica diagnóstica tardia em cintigrafias esqueléticas.",
      "Recomendar o isolamento microbiológico de contacto em quarto com pressão negativa, dado que o doente exala aerossóis radioativos contínuos durante as primeiras doze horas pós-administração endovenosa.",
      "Manter repouso absoluto no leito com algaliação vesical mandatória e recolha de toda a urina em recipientes de chumbo de espessura milimétrica para subsequente incineração de resíduos perigosos.",
      "Incentivar ingestão abundante de água para acelerar a excreção urinária do radiofármaco livre e descarregar a sanita duas vezes consecutivas com o tampo fechado, higienizando rigorosamente as mãos."
    ],
    "correctIndex": 3,
    "explanation": "O Tecnécio-99m marcado (ex: ⁹⁹ᵐTc-MDP para cintigrafia óssea) é excretado primariamente pelos rins. Como a sua meia-vida física é de apenas 6 horas e a biológica é ainda mais curta com boa hidratação, forçar a diurese com ingestão hídrica reduz drasticamente a dose de radiação absorvida pela bexiga e gónadas. A urina do doente contém radioatividade transitória nas primeiras 24 horas: dar duas descargas com a tampa fechada previne a dispersão de aerossóis radioativos no vaso sanitário.",
    "distractorAnalysis": [
      "Está incorreta: a hiper-hidratação e micções frequentes reduzem a dose absorvida na mucosa vesical (órgão crítico de eliminação); a restrição aumentaria a irradiação da bexiga.",
      "Está incorreta: os radiofármacos como o 99mTc-MDP são excretados por via renal e não por via respiratória em forma de aerossóis voláteis; não há necessidade de isolamento respiratório.",
      "Está incorreta: a algaliação de rotina não é indicada pelo risco de infeção associada aos cuidados de saúde; a urina hospitalar de medicina nuclear segue protocolos próprios da instalação."
    ],
    "nursingApplication": "O enfermeiro ensina ao doente e aos familiares regras práticas de bom senso para as primeiras 24 horas: hidratação hídrica vigorosa, evitar contacto muito próximo e prolongado (abraços apertados na mesma cama) com bebés pequenos e grávidas, assegurando o retorno tranquilo às atividades normais no dia seguinte."
  },
  {
    "id": 5032,
    "topicId": 5,
    "question": "A Ressonância Magnética (RMN) utiliza campos magnéticos intensos e pulsos de radiofrequência, não recorrendo a radiações ionizantes. Qual é o risco biofísico gravíssimo que exige triagem prévia rigorosa pelo enfermeiro antes de permitir a entrada de qualquer pessoa na sala de RMN?",
    "options": [
      "O campo magnético estático (1,5 a 3 T) atrai violentamente corpos ferromagnéticos (efeito projétil) e pode desprogramar pacemakers e deslocar clipes vasculares intracranianos ferromagnéticos.",
      "O feixe de radiofrequência induz radioatividade transitória nos núcleos de hidrogénio teciduais, exigindo isolamento radiológico do utente durante as vinte e quatro horas subsequentes à ressonância.",
      "O campo magnético estático dissocia as ligações covalentes da molécula de água tecidual, provocando acidose metabólica grave por acumulação maciça de radicais livres hidroxilo no citoplasma celular.",
      "Os gradientes de campo magnético geram correntes induzidas capazes de despolarizar e desmagnetizar permanentemente a hemoglobina, bloqueando a capacidade de transporte de oxigénio tecidual."
    ],
    "correctIndex": 0,
    "explanation": "A RMN opera com ímanes supercondutores gigantescos (1,5 T é cerca de 30.000 vezes o campo magnético terrestre!). Qualquer material com propriedades ferromagnéticas (ferro, aço carbono comum) sofre uma força magnética de atração avassaladora, sendo acelerado pelo ar a grande velocidade como um míssil letal contra o gantry do magneto. Adicionalmente, induz torção mecânica e migração de clipes metálicos cerebrais antigos e reprograma ou destrói circuitos elétricos de pacemakers e bombas de insulina.",
    "distractorAnalysis": [
      "Está incorreta: a RMN utiliza radiação não ionizante (ondas de radiofrequência e campos magnéticos); não há produção de qualquer radioatividade no doente ou no meio circundante.",
      "Está incorreta: a ressonância magnética não dissocia ligações moleculares de água nem induz radiólise aquosa, atuando apenas no alinhamento do spin dos protões de hidrogénio.",
      "Está incorreta: os campos magnéticos não afetam a estrutura globular ou a função de transporte de oxigénio da hemoglobina; o perigo primário imediato reside no efeito projétil de metais."
    ],
    "nursingApplication": "O enfermeiro aplica um questionário de segurança exaustivo antes da entrada na Zona IV da RMN: verificar presença de pacemakers cardíacos não-compatíveis com RMN, neuroestimuladores, implantes cocleares, corpos estranhos metálicos intraoculares e exigir a remoção total de adornos metálicos, telemóveis, canetas, tesouras e aparelhos auditivos."
  },
  {
    "id": 5033,
    "topicId": 5,
    "question": "O filtro de alumínio (filtração inerente e adicional, com espessura mínima equivalente a 2,5 mm de Al em equipamentos operando acima de 70 kVp) colocado na janela de saída do tubo de Raios X desempenha qual função biofísica?",
    "options": [
      "Desvia os fotões de alta energia para as paredes da cúpula de chumbo, aumentando a proporção de radiação de longo comprimento de onda para melhorar a resolução espacial do sensor digital.",
      "Absorve seletivamente fotões de baixa energia (raios X moles) que seriam absorvidos na pele sem contribuir para a imagem diagnóstica, diminuindo a dose cutânea (endurecimento do feixe).",
      "Modifica o espetro de emissão do ânodo através da indução de radiação de aniquilação positrónica, aumentando a sensibilidade dos detetores digitais planos de conversão indireta.",
      "Reduz a corrente elétrica que atravessa o filamento catódico, evitando a sobrecarga térmica e a fusão do tungsténio durante séries de exposições consecutivas prolongadas no bloco."
    ],
    "correctIndex": 1,
    "explanation": "O feixe de raios X emitido pelo ânodo é polienergético: contém fotões de alta energia e uma grande quantidade de fotões de baixa energia (<20-30 keV). Estes fotões de baixa energia ('raios X moles') não possuem penetrância suficiente para atravessar o corpo e atingir o detetor (não contribuem para a imagem), mas seriam 100% absorvidos na pele e tecido celular subcutâneo do doente, aumentando inutilmente a dose de radiação na pele. O filtro de alumínio retém estes fotões parasitas, 'endurecendo' o feixe útil.",
    "distractorAnalysis": [
      "Está incorreta: a filtração remove fotões de baixa energia (pouco penetrantes) e não os de alta energia; fotões moles apenas irradiam a pele do doente sem atingir o detetor.",
      "Está incorreta: a aniquilação positrónica ocorre na medicina nuclear (PET) com emissores de positrões; em radiologia diagnóstica convencional de 100 kVp esse fenómeno não existe.",
      "Está incorreta: o filtro de alumínio é uma barreira mecânica passiva colocada à saída do feixe luminoso e não interfere com o circuito elétrico ou com o aquecimento do cátodo."
    ],
    "nursingApplication": "A filtração adequada é verificada nos controlos periódicos de garantia da qualidade da ampola radiológica: um equipamento com filtração deficiente exporia os doentes internados a doses desnecessárias e mais elevadas de radiação cutânea a cada radiografia realizada no leito."
  },
  {
    "id": 5034,
    "topicId": 5,
    "question": "Na síndrome de radiação aguda (ARS - Acute Radiation Syndrome) resultante de uma exposição acidental de corpo inteiro a doses muito elevadas de radiação ionizante penetrante (>1 a 2 Gy), qual é o primeiro sistema fisiológico a sofrer colapso funcional devido à alta sensibilidade das suas células estaminais?",
    "options": [
      "O sistema gastrointestinal com destruição imediata de todas as vilosidades ileais e choque hipovolémico fulminante secundário a enteropatia exsudativa difusa nas primeiras quatro horas pós-exposição.",
      "O sistema neurovascular com edema cerebral generalizado, convulsões incoercíveis e colapso circulatório irreversível nas primeiras três horas após a absorção corporal integral de radiação.",
      "O sistema hematopoiético (síndrome da medula óssea), gerando aplasia com neutropenia severa, trombocitopenia e anemia, com risco crítico de infeções oportunistas e hemorragias agudas graves.",
      "O sistema músculo-esquelético com necrose enzimática das miofibrilhas e insuficiência renal aguda por rabdomiólise traumática de todo o compartimento axial e apendicular do organismo exposto."
    ],
    "correctIndex": 2,
    "explanation": "Pela Lei de Bergonié e Tribondeau, as células estaminais hematopoéticas pluripotentes da medula óssea são as mais radiossensíveis do organismo. Doses de corpo inteiro acima de 1 a 2 Gy destroem estas precursoras mitóticas: os granulócitos e linfócitos desaparecem do sangue periférico em dias (linfopenia e neutropenia), seguidos de trombocitopenia grave ao fim de 2 a 3 semanas. Sem plaquetas nem glóbulos brancos, o doente falece por choque séptico ou hemorragia interna se não receber cuidados de suporte intensivo.",
    "distractorAnalysis": [
      "Está incorreta: a síndrome gastrointestinal manifesta-se tipicamente com doses mais elevadas (6 a 10 Gy), levando à destruição do epitélio mucoso intestinal em 5 a 10 dias.",
      "Está incorreta: a síndrome do sistema nervoso central / neurovascular requer doses maciças superiores a 20-50 Gy, resultando em colapso e morte rápida em 24 a 48 horas.",
      "Está incorreta: o tecido muscular e ósseo maduro é altamente radiorresistente devido à baixíssima taxa de proliferação celular, não sofrendo lise primária nesta faixa de doses."
    ],
    "nursingApplication": "Em acidentes radiológicos com síndrome aguda de radiação, o papel do enfermeiro é vital em unidades de isolamento estéril com fluxo laminar: vigilância estrita de sinais de neutropenia febril, administração de fatores estimuladores de colónias de granulócitos (G-CSF), transfusões de concentrados de plaquetas irradiadas e antibioterapia de largo espetro profilática."
  },
  {
    "id": 5035,
    "topicId": 5,
    "question": "O uso de óculos com vidros plumbíferos (equivalência de 0,5 a 0,75 mm Pb) por enfermeiros que trabalham rotineiramente em salas de hemodinâmica ou eletrofisiologia visa prevenir qual efeito determinístico ocular radioinduzido?",
    "options": [
      "Degenerescência macular exsudativa com neovascularização coroidal sub-retiniana, de natureza puramente estocástica e sem qualquer valor de dose de limiar biológico descritível.",
      "Neuropatia ótica isquémica anterior por espasmo das arteríolas ciliares posteriores da retina, induzida pelo contacto direto de fotões X de dispersão retrograda em procedimentos longos.",
      "Glaucoma agudo de ângulo fechado secundário à hipertrofia do corpo ciliar provocada pela ionização contínua do humor aquoso na câmara anterior do globo ocular dos profissionais.",
      "Catarata radioinduzida por opacificação progressiva das fibras do cristalino ocular, sendo este um efeito determinístico com limiar de dose cumulativa bem documentado na literatura clínica."
    ],
    "correctIndex": 3,
    "explanation": "O cristalino do olho humano é composto por fibras transparentes derivadas de um epitélio anterior em mitose contínua. Ao contrário da pele, o cristalino não tem mecanismo de descamação celular: as células danificadas pela radiação migram para o polo posterior e acumulam-se como fibras anómalas desorganizadas que perdem a transparência ótica (catarata radioinduzida). Por esta razão, a ICRP reduziu o limite de dose anual no cristalino para trabalhadores expostos de 150 mSv para apenas 20 mSv/ano.",
    "distractorAnalysis": [
      "Está incorreta: o cristalino ocular é a estrutura crítica protegida pelos óculos plumbíferos; a ICRP reduziu o limite de dose no cristalino para 20 mSv/ano devido ao risco de catarata.",
      "Está incorreta: a maculopatia exsudativa tem etiologia vascular e degenerativa relacionada com a idade e fatores genéticos, não sendo a lesão sentinela de radioproteção ocular.",
      "Está incorreta: a radiação dispersa em fluoroscopia atinge em doses baixas o cristalino (tecido avascular sem regeneração eficaz), provocando opacificação subcapsular posterior."
    ],
    "nursingApplication": "Em intervenções de hemodinâmica de longa duração onde o enfermeiro permanece junto ao arco em C ao lado da mesa do doente, o uso de óculos plumbíferos com proteção lateral é indispensável para evitar que a radiação dispersa atinja o cristalino, prevenindo cataratas precoces na meia-idade profissional."
  },
  {
    "id": 5036,
    "topicId": 5,
    "question": "O protetor de tiroide (colar cervical de chumbo) é um EPI radiológico de uso obrigatório em salas de procedimentos fluoroscópicos. Qual é a justificativa biofísica e radiobiológica para a proteção específica desta glândula?",
    "options": [
      "A tiroide é superficial e altamente radiossensível com fator de ponderação tecidual relevante (w_T = 0,04), tendo risco aumentado de carcinoma radioinduzido por radiação dispersa.",
      "A tiroide acumula radiação por efeito fotoelétrico em cadeia que converte os seus folículos em emissores secundários contínuos de partículas gama penetrantes para o mediastino.",
      "A radiação dispersa inativa de forma irreversível os recetores de TSH na membrana tirocitária, provocando coma mixedematoso em poucas horas de exposição em bloco operatório.",
      "O protetor de tiroide atua primariamente prevenindo a perda térmica das artérias carótidas durante intervenções ortopédicas em salas operatórias dotadas de fluxo laminar estéril frio."
    ],
    "correctIndex": 0,
    "explanation": "A glândula tiroide localiza-se na face anterior do pescoço em posição muito superficial, ficando exposta diretamente à radiação dispersa proveniente do doente durante a fluoroscopia cirúrgica. A ICRP atribui-lhe um fator de ponderação w_T significativo, sendo a indução de cancro papilar da tiroide um dos efeitos estocásticos mais documentados em pessoas expostas sem proteção. Um colar de chumbo com 0,5 mm Pb atenua cerca de 95% desta radiação dispersa.",
    "distractorAnalysis": [
      "Está incorreta: a tiroide não se torna radioativa nem emite radiação secundária; o risco biológico é estocástico (desenvolvimento de nódulos ou neoplasias malignas tiroideias a longo prazo).",
      "Está incorreta: a radiação dispersa diagnóstica não causa destruição hormonal aguda nem coma mixedematoso imediato; os efeitos funcionais hormonais exigem doses ablativas de radioterapia.",
      "Está incorreta: o colar cervical plumbífero é um EPI puramente radiológico destinado a barrar a radiação dispersa de Compton e não um dispositivo de isolamento térmico vascular."
    ],
    "nursingApplication": "O colar de proteção tiroideia deve ser ajustado perfeitamente em redor da laringe e traqueia, sem folgas que deixem a glândula descoberta: o enfermeiro deve verificar a colocação correta antes de vestir o avental de proteção esterilizado para cirurgias e não o desapertar durante os procedimentos."
  },
  {
    "id": 5037,
    "topicId": 5,
    "question": "Qual das seguintes afirmações sobre a exposição ocupacional de enfermeiros à radiação ionizante de Raios X é rigorosamente VERDADEIRA?",
    "options": [
      "O ar atmosférico circundante retém fotões X secundários durante cerca de dez a quinze minutos após o corte da alta tensão, exigindo ventilação forçada contínua antes da entrada da equipa.",
      "Os Raios X não tornam o doente nem o ar radioativos; logo que o disparo cessa, a radiação desaparece à velocidade da luz e a sala fica imediatamente livre de qualquer radiação ionizante.",
      "O organismo do utente emite radiação ionizante de baixa energia por desexcitação fosforescente durante várias horas após a realização de uma tomografia computorizada de corpo inteiro.",
      "O mobiliário e as superfícies metálicas da sala de hemodinâmica sofrem ativação neutrónica permanente, devendo ser descontaminados periodicamente com agentes quelantes químicos."
    ],
    "correctIndex": 1,
    "explanation": "Ao contrário da contaminação radioativa particulada (onde substâncias radioativas são inaladas, ingeridas ou derramadas na pele), os Raios X são ondas eletromagnéticas (fotões) geradas eletricamente numa ampola: viajam à velocidade da luz (300.000 km/s) e interagem com a matéria em nanosssegundos. No instante em que o gerador elétrico é desativado, o feixe é interrompido imediatamente. Nem o doente, nem a maca, nem as paredes nem o ar retêm qualquer radiação residual, não havendo qualquer perigo de contaminação.",
    "distractorAnalysis": [
      "Está incorreta: os raios X são ondas eletromagnéticas que viajam à velocidade da luz; no microssegundo em que o tubo desliga, os fotões já foram totalmente absorvidos ou dispersos.",
      "Está incorreta: o doente submetido a exames de raios X (RX ou TAC) não retém radiação nem se torna radioativo; os cuidados de contacto por emissão radioativa aplicam-se à medicina nuclear.",
      "Está incorreta: a ativação neutrónica requer feixes de partículas pesadas ou energias superiores a dezenas de MeV (aceleradores de alta energia), impossíveis em raios X diagnósticos."
    ],
    "nursingApplication": "Desmistificar o medo da radiação com base científica é essencial no acolhimento ao doente e à família: o enfermeiro tranquiliza os acompanhantes e os profissionais de que uma radiografia ou TAC não deixa o doente 'radioativo', podendo os familiares prestar cuidados físicos diretos e abraçar o doente logo a seguir ao exame sem qualquer risco de radiação."
  },
  {
    "id": 5038,
    "topicId": 5,
    "question": "A mamografia utiliza feixes de Raios X de baixa quilovoltagem de pico (kVp entre 25 e 32 kV). Qual é a razão biofísica para a seleção desta baixa energia fotónica na imagem da mama?",
    "options": [
      "Em baixas energias prevalece a dispersão Compton quase pura, o que reduz substancialmente a produção de radiação secundária dispersa em direção ao detetor digital de alta resolução.",
      "A baixa quilovoltagem visa exclusivamente diminuir o tempo de exposição da mama, evitando artefactos de movimento decorrentes da dor causada pela compressão mecânica entre as placas.",
      "Em baixas energias predomina o Efeito Fotoelétrico (dependente de Z³ e 1/E³), maximizando a diferenciação de contraste entre tecido glandular, gordura e microcalcificações patológicas.",
      "Feixes de raios X de alta energia seriam totalmente refletidos pela densidade fibroglandular da mama, impedindo a formação de qualquer imagem latente percetível no sensor radiográfico."
    ],
    "correctIndex": 2,
    "explanation": "A mama é constituída predominantemente por tecidos moles de números atómicos e densidades muito semelhantes: tecido glandular fibroadenoso e tecido adiposo subcutâneo. Se fossem utilizados raios X de alta energia (como 100-120 kVp de um tórax), o efeito Compton dominaria, resultando numa imagem quase uniforme cinzenta sem qualquer contraste tecidual. Operando com baixas energias (25 a 30 kVp), explora-se a dependência cúbica do efeito fotoelétrico, destacando as minúsculas microcalcificações milimétricas com alto número atómico Z de cálcio em branco nítido contra o fundo cinzento.",
    "distractorAnalysis": [
      "Está incorreta: a dispersão Compton predomina em energias mais elevadas e atenua com base na densidade eletrónica, conferindo pouco contraste entre tecidos moles de Z próximo.",
      "Está incorreta: reduzir kVp exige mAs mais elevado para obter sinal adequado no detetor, o que tipicamente aumenta o tempo de exposição em vez de o encurtar.",
      "Está incorreta: tecidos biológicos não refletem raios X como espelhos; feixes de alta energia atravessariam a mama sem atenuação diferencial apreciável, gerando imagem desprovida de contraste."
    ],
    "nursingApplication": "Na consulta de saúde da mulher e rastreio de cancro de mama, o enfermeiro explica à utente a razão da compressão mecânica firme da mama durante a mamografia: a compressão adelgaça o tecido (menor espessura x na lei exponencial I = I₀ · e^(-μ·x)), reduz a dose de radiação necessária, diminui a sobreposição de estruturas glandulares e reduz a radiação de dispersão, aumentando a acuidade do diagnóstico precoce."
  },
  {
    "id": 5039,
    "topicId": 5,
    "question": "O fenómeno de 'Morte Pré-Implantação' por radiação ionizante no feto ocorre quando a exposição acidental grave ocorre em qual período cronológico da gestação?",
    "options": [
      "Entre a terceira e a oitava semanas gestacionais (fase de organogénese), período no qual a irradiação induz preferencialmente abortamento imediato em vez de anomalias estruturais congénitas.",
      "A partir da vigésima semana de gestação, quando a diferenciação histológica avançada torna as membranas amnióticas impermeáveis à radiação ionizante de feixes eletromagnéticos externos.",
      "Exclusivamente no último trimestre gestacional, momento em que o encerramento fisiológico das placas de crescimento ósseo fetal desencadeia falência de múltiplos órgãos no feto.",
      "Nas duas primeiras semanas após a conceção (fase de pré-implantação), sob a lei do 'Tudo-ou-Nada': ou ocorre morte e aborto espontâneo, ou há regeneração completa sem malformações anatómicas."
    ],
    "correctIndex": 3,
    "explanation": "A resposta radiobiológica pré-natal divide-se em 3 fases: 1) Pré-implantação (semanas 1 a 2 pós-fecundação): o embrião é composto por poucas células estaminais totipotentes. Vigora a lei do 'tudo-ou-nada' — doses significativas (>0,1 Gy) causam morte embrionária precoce e aborto subclínico espontâneo; se sobreviver, as células pluripotentes remanescentes compensam o dano e o feto desenvolve-se normalmente; 2) Organogénese (semanas 3 a 8): máxima vulnerabilidade a malformações estruturais congénitas (teratogénese); 3) Fase fetal (semanas 9 a 25): maior risco de atraso mental grave e microcefalia.",
    "distractorAnalysis": [
      "Está incorreta: na organogénese (semanas 3 a 8) o risco predominante é a teratogénese (malformações estruturais em órgãos em formação, como microcefalia), e não o efeito tudo-ou-nada.",
      "Está incorreta: as membranas amnióticas são tecidos finos e não bloqueiam radiações ionizantes de alta penetração; o risco principal no 2º e 3º trimestres é o cancro infantil estocástico.",
      "Está incorreta: o fenómeno da morte de pré-implantação restringe-se estritamente aos primeiros dias pós-fertilização, antes da fixação do blastocisto no endométrio uterino."
    ],
    "nursingApplication": "A 'Regra dos 10 Dias' (ou dos 28 dias) na prescrição de radiologia médica a mulheres em idade fértil exige que o enfermeiro questione ativamente sobre a data da última menstruação (DUM) e possibilidade de gravidez antes de exames radiológicos que envolvam a pelve ou abdómen, prevenindo a irradiação inadvertida de embriões na fase crítica de clivagem e organogénese."
  },
  {
    "id": 5040,
    "topicId": 5,
    "question": "No contexto da dosimetria de pacientes pediátricos, por que motivo as crianças são significativamente mais suscetíveis aos efeitos estocásticos (cancro radioinduzido tardio) do que os adultos para a mesma dose de Raios X?",
    "options": [
      "As crianças têm maior taxa de proliferação celular ativa nos tecidos em crescimento e maior esperança de vida pela frente para manifestar cancros com longo período de latência clínica.",
      "O sistema enzimático pediátrico não possui capacidade de reparar quebras simples da cadeia de DNA, inviabilizando qualquer processo fisiológico de recuperação celular pós-irradiação.",
      "A densidade mineral óssea das crianças é três vezes superior à do esqueleto de um adulto, promovendo a retrodispersão interna de fotões X secundários para todos os órgãos nobres adjacentes.",
      "A menor espessura tecidual infantil anula a atenuação do feixe primário, fazendo com que a dose absorvida por unidade de massa corporal seja dez vezes superior à dose incidente no ar."
    ],
    "correctIndex": 0,
    "explanation": "Crianças são particularmente vulneráveis aos efeitos tardios da radiação por duas razões biológicas: 1) Lei de Bergonié-Tribondeau: os seus órgãos estão em pleno crescimento e mitose celular intensa, sendo muito mais suscetíveis a danos cromossómicos persistentes; 2) Fator de esperança de vida: os tumores sólidos radioinduzidos têm períodos de latência de 10 a 30 anos (e as leucemias de 2 a 10 anos). Uma criança de 5 anos viverá décadas suficientes para manifestar a neoplasia, ao passo que um indivíduo de 85 anos frequentemente não atingirá o término desse período de latência.",
    "distractorAnalysis": [
      "Está incorreta: as células pediátricas possuem vias enzimáticas ativas de reparação de DNA (ex: NHEJ, BER); o risco acrescido decorre da proliferação acelerada (Lei de Bergonié e Tribondeau).",
      "Está incorreta: os ossos das crianças contêm menor mineralização relativa (em ossificação) e maior proporção de cartilagem, não havendo aumento anormal de densidade mineral.",
      "Está incorreta: corpos menores atenuam menos o feixe (o que reduz a radiação dispersa interna), mas o risco biológico relativo por unidade de dose é 2 a 5 vezes maior devido à radiossensibilidade."
    ],
    "nursingApplication": "A campanha internacional 'Image Gently' em pediatria norteia a atuação de enfermagem: exigir a adaptação dos parâmetros do equipamento (reduzir mA e kVp ao peso da criança), utilizar protetores gonadais de chumbo sempre que possível e priorizar métodos de diagnóstico sem radiação ionizante (como a Ecografia ou Ressonância Magnética) para investigar dores abdominais pediátricas (apendicite)."
  },
  {
    "id": 5041,
    "topicId": 5,
    "question": "A grelha antidifusora (grelha de Potter-Bucky) é colocada entre o doente e o detetor de imagem nas radiografias de partes espessas (tórax, abdómen, bacia). Qual é a sua função física primordial?",
    "options": [
      "Reduzir a dose de radiação administrada à pele do utente através da atenuação seletiva dos fotões característicos de tungsténio emitidos pelo ânodo na abertura da ampola radiológica.",
      "Absorver através de lâminas de chumbo a radiação de dispersão Compton que sai obliquamente do doente, impedindo que atinja o detetor e aumentando expressivamente o contraste da imagem.",
      "Compensar a divergência geométrica do feixe primário de modo a eliminar a penumbra focal e ampliar a profundidade de campo radiológica em projeções oblíquas complexas de tórax.",
      "Converter os fotões X de alta penetração em fotões de luz visível para sensibilizar diretamente as matrizes de fósforo fotoestimulável no interior do chassis radiográfico digital."
    ],
    "correctIndex": 1,
    "explanation": "Em doentes espessos (>10 a 12 cm de espessura de tecido), a quantidade de fotões espalhados por efeito Compton supera largamente a dos fotões primários transmitidos. Se estes fotões espalhados obliquamente atingissem o detetor, criariam um nevoeiro uniforme acinzentado destruindo o contraste da imagem. A grelha antidifusora é formada por lâminas paralelas ultrafinas de chumbo espaçadas por material radiotransparente (alumínio ou carbono): os raios primários em linha reta passam pelos canais, mas os raios dispersos oblíquos colidem contra as lâminas de chumbo e são absorvidos.",
    "distractorAnalysis": [
      "Está incorreta: a grelha antidifusora fica atrás do doente (entre este e o detetor) e absorve fotões dispersos; de facto, exige um aumento de mAs para compensar a atenuação, elevando a dose.",
      "Está incorreta: a geometria do ponto focal e a penumbra dependem do tamanho do foco do ânodo e das distâncias foco-objeto e objeto-detetor, não sendo corrigidas pela grelha de Bucky.",
      "Está incorreta: a conversão de raios X em fotões de luz visível é a função do ecrã intensificador cintilador (ex: iodeto de césio) e não da grelha antidifusora de lâminas de chumbo."
    ],
    "nursingApplication": "Como a grelha antidifusora absorve também uma pequena fração de fotões primários úteis, o seu uso exige aumentar a dose de exposição (mAs) em relação a um exame sem grelha. O enfermeiro sabe que grelhas de Potter-Bucky não devem ser utilizadas em recém-nascidos e extremidades finas (mãos e pés), onde a radiação dispersa é insignificante, poupando doses desnecessárias ao doente."
  },
  {
    "id": 5042,
    "topicId": 5,
    "question": "O produto dose-área (DAP - Dose Area Product, expresso em Gy·cm² ou cGy·cm²) é um indicador dosimétrico comum registado em exames fluoroscópicos e radiológicos. O que quantifica este parâmetro biofísico?",
    "options": [
      "A razão matemática entre a dose absorvida na pele e a espessura anatómica atravessada pelo feixe, usada para aferir o risco imediato de radiodermite eritematosa grave pós-exposição.",
      "A taxa horária de emissão de radiação secundária dispersa medida a um metro de distância do foco emissor, empregue para delimitar o perímetro físico de segurança das zonas vigiadas.",
      "O produto da dose média incidente pela área transversal do feixe (Gy·cm²), quantificando a energia total de radiação entregue ao doente e correlacionando-se com o risco estocástico.",
      "O valor de quilovoltagem de pico ajustado dinamicamente em função do índice de massa corporal do utente para padronizar a exposição radiográfica em recém-nascidos e lactentes."
    ],
    "correctIndex": 2,
    "explanation": "O DAP (Dose-Area Product) é medido por uma câmara de ionização transparente montada no colimador do tubo: DAP = Dose × Área (Gy·cm²). Tem uma propriedade física notável: como a intensidade decresce com 1/d² e a área do feixe cresce com d² à medida que se afasta do foco, o produto DAP permanece CONSTANTE com a distância! Ele mede a energia radiológica total injetada no corpo do doente, sendo o melhor indicador para avaliar o risco de indução de efeitos estocásticos tardios.",
    "distractorAnalysis": [
      "Está incorreta: o DAP (Dose Area Product) é expresso pelo produto da dose no ar pela área iluminada (Gy·cm² ou mGy·cm²), medindo a energia radiante total incidente no paciente.",
      "Está incorreta: o DAP não avalia a taxa horária de fuga da ampola nem a radiação dispersa a um metro; a avaliação de radiação de fuga segue normas de dosimetria ambiental da cúpula.",
      "Está incorreta: a quilovoltagem de pico ajustada pelo biotipo é um parâmetro técnico de aquisição de imagem e não uma grandeza dosimétrica calculada em Gy·cm²."
    ],
    "nursingApplication": "O valor de DAP acumulado ao longo de procedimentos complexos de radiologia de intervenção é registado no processo clínico do doente pelo enfermeiro: valores elevados de DAP alertam a equipa médica e de enfermagem para o risco de lesões determinísticas cutâneas tardias, agendando uma consulta de vigilância da pele 30 dias após o procedimento."
  },
  {
    "id": 5043,
    "topicId": 5,
    "question": "No pós-operatório de uma artroplastia da anca ou colocação de pacemaker definitivo, qual é a razão pela qual a Tomografia Computorizada (TAC) da região operada sofre de 'Artefactos Metálicos de Endurecimento do Feixe' (metal streaking artifacts)?",
    "options": [
      "O metal induz campos magnéticos parasitas no interior do paciente que distorcem o alinhamento espacial dos fotões de raios X durante o processo de reconstrução tomográfica axial.",
      "O titânio emite radiação de travagem secundária contínua que satura os detetores do gantry com impulsos elétricos de frequência desfasada em relação ao feixe do tubo radiológico.",
      "O algoritmo de retroprojeção filtrada elimina artificialmente os dados do volume ósseo adjacente para evitar a sobrecarga de memória do computador central de processamento de imagem.",
      "O metal tem número atómico e densidade física muito elevados, absorvendo quase 100% dos fotões (endurecimento de feixe e atenuação extrema), gerando faixas pretas e brancas na imagem."
    ],
    "correctIndex": 3,
    "explanation": "Metais densos (titânio Z=22, cobalto Z=27, crómio Z=24, ouro Z=79) possuem uma densidade eletrónica colossal comparada com a água e o osso. Ao passarem pela prótese, praticamente todos os fotões de energias baixas e médias são totalmente absorvidos por efeito fotoelétrico. Esta atenuação extrema provoca o 'endurecimento severo do feixe' (apenas os fotões ultra-energéticos passam) e o fenómeno de 'starvation de fotões' (zero fotões atingem os detetores no trajeto que cruza o metal). Na reconstrução tomográfica por retroprojeção filtrada surgem as faixas brilhantes e negras características.",
    "distractorAnalysis": [
      "Está incorreta: raios X são ondas eletromagnéticas não afetadas por campos magnéticos fracos em tecidos biológicos; os artefactos derivam de atenuação extrema e endurecimento do feixe.",
      "Está incorreta: a radiação de travagem é produzida pela desaceleração de eletrões no ânodo da ampola e não por materiais metálicos implantados que apenas absorvem o feixe incidente.",
      "Está incorreta: os artefactos de feixe estrela e estrias escuras resultam de carência de dados matemáticos de fotões transmitidos (starvation de fotões) e não de eliminação de memória."
    ],
    "nursingApplication": "O enfermeiro informa a equipa de imagiologia sobre a presença de implantes metálicos ou próteses ortopédicas: os técnicos utilizam algoritmos avançados de software de redução de artefactos metálicos (MAR / SEMAR) e aumentam a quilovoltagem (kVp) para minimizar as faixas de distorção e conseguir avaliar com precisão a presença de hematomas ou infeções periprotésicas."
  },
  {
    "id": 5044,
    "topicId": 5,
    "question": "A 'Radiografia com Bário' (ex: trânsito esofagogástrico ou enema opaco) utiliza suspensões orais ou retais de Sulfato de Bário (BaSO₄). Qual é o cuidado de enfermagem imediato e crucial após a conclusão do exame com bário?",
    "options": [
      "Garantir hidratação abundante e alertar para fezes esbranquiçadas, prevenindo a dessecação e compactação do bário no lúmen do cólon (baritoma) com risco de oclusão intestinal mecânica.",
      "Prescrever repouso estrito no leito com restrição hídrica moderada durante quarenta e oito horas para favorecer a reabsorção transmucosa gradual do sulfato de bário acumulado no cólon.",
      "Administrar quelantes orais de metais pesados por via profilática para evitar a intoxicação sistémica aguda e a falência hepática grave por biodisponibilidade do catião bário livre.",
      "Isolar a urina eliminada pelo utente em contentores blindados de chumbo durante setenta e duas horas devido à eliminação urinária ativa de metabolitos baritados hidrossolúveis."
    ],
    "correctIndex": 0,
    "explanation": "O sulfato de bário é um sal inorgânico insolúvel extremamente pesado e inabsorvível pela mucosa digestiva. À medida que percorre o trato gastrointestinal, o cólon absorve água do bolo fecal: se o doente não ingerir água suficiente no pós-exame, a suspensão de bário precipita e resseca numa massa pétrea dura e compacta (baritoma ou fecaloma por bário), capaz de provocar impactação fecal severa, necrose por pressão na parede do cólon ou perfuração intestinal.",
    "distractorAnalysis": [
      "Está incorreta: a restrição hídrica agravaria a dessecação do bário, que absorve água no cólon e forma massas endurecidas (baritomas) capazes de causar perfuração e obstrução intestinal.",
      "Está incorreta: o sulfato de bário (BaSO4) é extremamente insolúvel e não é absorvido pela mucosa gastrointestinal intacta, não havendo risco de toxicidade sistémica se não perfurar.",
      "Está incorreta: o bário insolúvel não é absorvido nem excretado pelos rins, sendo eliminado integralmente pelas fezes (que se tornam brancas ou acinzentadas nos dias seguintes)."
    ],
    "nursingApplication": "Na alta de doentes após exames com bário, o enfermeiro educa o doente e a família: incentivar a ingestão de pelo menos 2 litros de água nas primeiras 24 horas, esclarecer que a eliminação de fezes brancas como gesso nos dias seguintes é um processo normal de depuração do contraste, e prescrever/administrar laxantes osmóticos suaves se houver atraso na evacuação."
  },
  {
    "id": 5045,
    "topicId": 5,
    "question": "O conceito de 'Linear Energy Transfer' (LET - Transferência Linear de Energia) quantifica a taxa média de energia depositada pela radiação por unidade de comprimento percorrido no tecido (expressa em keV/μm). Em termos de LET, como se classificam os Raios X e as Radiações Gama em comparação com as Partículas Alfa?",
    "options": [
      "Raios X e partículas alfa apresentam valores rigorosamente idênticos de LET (~50 keV/μm), diferenciando-se unicamente pela sua velocidade de propagação cinemática no vácuo intersticial.",
      "Raios X e gama são de BAIXO LET (~0,2 a 3 keV/μm) com ionizações esparsas e maior capacidade de reparação do DNA; partículas alfa são de ALTO LET (~100 keV/μm) com dano biológico denso.",
      "Raios X são considerados radiações de alto LET devido ao seu longo alcance tecidual milimétrico, enquanto as partículas alfa são de baixo LET em virtude da sua reduzida penetrabilidade.",
      "A grandeza LET avalia exclusivamente a dose absorvida total expressa em grays, não fornecendo qualquer informação sobre o padrão microscópico espacial de transferência de energia linear."
    ],
    "correctIndex": 1,
    "explanation": "O LET mede a densidade espacial de deposição de energia ao longo da trajetória da radiação. Os fotões X e gama são radiações de baixo LET (baixo poder de transferência linear de energia): ejetam eletrões rápidos que depositam energia de forma pontual e esparsa no citoplasma e núcleo, produzindo predominantemente quebras simples de cadeia de DNA (single-strand breaks), que são facilmente reparadas pelas enzimas da célula. Partículas alfa (núcleos de hélio pesados), com alto LET, depositam pacotes brutais de energia em trajetos submicrométricos, causando quebras duplas complexas irreparáveis de DNA (double-strand breaks).",
    "distractorAnalysis": [
      "Está incorreta: o LET (energia depositada por unidade de distância) difere amplamente entre fotões (baixo LET, ionização esparsa) e partículas alfa com massa e carga +2 (alto LET, ionização densa).",
      "Está incorreta: confundir penetrabilidade macroscópica com LET é frequente; fotões penetram mais porque depositam pouca energia por micrómetro (baixo LET); alfas depositam tudo em escassos micrómetros.",
      "Está incorreta: a dose absorvida mede energia macroscópica por massa (J/kg = Gy); o LET quantifica a densidade microscópica de energia transferida ao longo da trajetória (keV/μm)."
    ],
    "nursingApplication": "Compreender que os raios X têm baixo LET fundamenta o protocolo de fracionamento da dose em radioterapia: distribuir a dose total ao longo de várias semanas permite que os tecidos normais saudáveis circundantes (com sistemas enzimáticos de reparação intactos para quebras de baixo LET) reparem o dano do DNA nos intervalos entre sessões, aumentando a tolerância clínica do doente."
  },
  {
    "id": 5046,
    "topicId": 5,
    "question": "Na sala de operações durante cirurgias ortopédicas de fixação de fraturas, se o enfermeiro instrumentista ou circulante tiver de permanecer a menos de 1 metro do doente durante disparos de escopia com arco em C, qual é o conjunto de Equipamento de Proteção Individual (EPI) radiológico indispensável?",
    "options": [
      "Avental de chumbo de face frontal simples sem proteção posterior, protetor gonadal externo e dosímetro de extremidade no punho sem qualquer monitorização da dose no tronco corporal.",
      "Bata cirúrgica hidrorrepelente descartável de barreira reforçada com luvas duplas de látex cirúrgico e máscara facial com viseira plástica transparente anti-salpicos de fluidos biológicos.",
      "Avental de chumbo envolvente (0,35 a 0,5 mm Pb), protetor de tiroide ajustado, óculos com vidros plumbíferos com abas laterais e dosímetro individual colocado sob o avental na zona torácica.",
      "Fato de isolamento impermeável a partículas virais com respirador purificador FFP3 e proteção auricular mecânica para atenuação do ruído de rotação do intensificador de imagem cirúrgico."
    ],
    "correctIndex": 2,
    "explanation": "A proximidade direta (<1 metro) da mesa cirúrgica coloca o enfermeiro na zona de máxima densidade de fluxo de radiação dispersa de Compton emitida pelo doente. A proteção radiológica individual abrangente é mandatória: o avental de chumbo protege a medula óssea dos ossos chatos, pulmões e gónadas; o protetor de tiroide protege a glândula contra o risco estocástico de carcinoma tiroideu; e os óculos plumbíferos blindam o cristalino contra a opacificação cataratal determinística.",
    "distractorAnalysis": [
      "Está incorreta: no bloco o enfermeiro movimenta-se frequentemente em torno do campo; um avental aberto atrás deixaria a medula óssea das vértebras desprotegida; dosímetro de tronco é obrigatório.",
      "Está incorreta: equipamento de proteção biológica comum (máscara, bata têxtil ou plástica) não oferece qualquer atenuação contra a radiação ionizante de raios X de dispersão.",
      "Está incorreta: fatos impermeáveis e respiradores FFP3 protegem contra agentes patogénicos biológicos ou químicos em aerossol, mas são permeáveis a fotões de raios X de alta energia."
    ],
    "nursingApplication": "O uso rigoroso de todo o conjunto de EPI de chumbo é um dever deontológico e profissional de saúde: o enfermeiro nunca deve aceitar a desculpa de 'ser apenas um disparo rápido de confirmação', pois a dose cumulativa de dezenas de pequenos disparos diários ao longo de meses atinge valores expressivos de exposição ocupacional."
  },
  {
    "id": 5047,
    "topicId": 5,
    "question": "O conceito de 'Quilovoltagem de Pico' (kVp) no comando de controlo do aparelho de Raios X determina primariamente qual característica física do feixe de radiação?",
    "options": [
      "A intensidade da corrente elétrica no filamento catódico, controlando diretamente o número total de fotões gerados sem exercer qualquer influência sobre a sua energia máxima emitida.",
      "A frequência de rotação mecânica do disco anódico de tungsténio, concebida para dissipar o calor gerado pelo impacto contínuo do feixe de eletrões acelerados sobre o foco térmico.",
      "A largura geométrica do colimador de feixe ajustável à saída da ampola, definindo as dimensões milimétricas do ponto focal ótico projetado sobre a superfície do detetor digital.",
      "A diferença de potencial aplicada entre cátodo e ânodo, determinando a energia cinética dos eletrões e a energia/poder de PENETRAÇÃO dos fotões X produzidos (qualidade do feixe radiológico)."
    ],
    "correctIndex": 3,
    "explanation": "A quilovoltagem de pico (kVp, variando clinicamente de 40 kV em extremidades até 150 kV em tórax/TAC) estabelece a diferença de potencial elétrico acelerador: um eletrão acelerado por 100 kV adquire 100 keV de energia cinética. Quanto maior o kVp: maior é a energia máxima dos fotões Bremsstrahlung, maior é a sua frequência, menor o seu comprimento de onda e maior a sua PENETRÂNCIA através de tecidos densos ('qualidade' do feixe). Em contrapartida, o produto corrente-tempo (mAs) controla a 'quantidade' total de fotões gerados.",
    "distractorAnalysis": [
      "Está incorreta: o número de fotões sem alteração da energia máxima é controlado pelo miliamperagem (mA e mAs); a quilovoltagem (kVp) define a energia máxima e a qualidade penetrante do feixe.",
      "Está incorreta: a rotação do ânodo visa a dissipação térmica em sistemas anódicos rotativos, mas é regulada por um motor de indução e não pela quilovoltagem de aceleração eletrónica.",
      "Está incorreta: a abertura do colimador controla as dimensões da área anatómica iluminada e o ponto focal depende da geometria da pista anódica e da taça de focagem catódica."
    ],
    "nursingApplication": "Compreender que o kVp governa a penetração ajuda o enfermeiro a antecipar ajustes técnicos em doentes acamados de grande porte físico: ao radiografar um doente com derrame pleural massivo ou obesidade mórbida no leito, elevar o kVp é a única forma física de permitir que os fotões atravessem a densa camada líquida e cheguem ao detetor com contraste útil."
  },
  {
    "id": 5048,
    "topicId": 5,
    "question": "O conceito de 'Miliamperes-segundo' (mAs) no gerador de Raios X expressa o produto da corrente do filamento catódico pelo tempo de exposição em segundos. Fisicamente, o que governa a regulação dos mAs?",
    "options": [
      "O número total de eletrões que colidem com o ânodo e a QUANTIDADE total de fotões de Raios X emitidos pelo tubo durante o disparo (intensidade e fluência global do feixe radiológico).",
      "A voltagem máxima estabelecida entre os elétrodos da ampola, que determina a energia cinética limite e a capacidade de penetração tecidual de cada fotão individual do feixe.",
      "A taxa de arrefecimento térmico do óleo dielétrico isolante na cúpula protetora do tubo, expressa em unidades de calor dissipadas por unidade de tempo de funcionamento do sistema.",
      "A distância focal ideal entre o tubo radiológico e o chassis de imagem, estabelecida para minimizar a distorção geométrica e a ampliação da projeção anatómica pretendida."
    ],
    "correctIndex": 0,
    "explanation": "A corrente de tubo (medida em miliamperes, mA) determina o fluxo de eletrões libertados por emissão termiónica no cátodo de tungsténio aquecido. Ao multiplicar a corrente mA pelo tempo do disparo em segundos (s), obtém-se a carga total em miliCoulombs: mAs = mA · s. Como a cada eletrão incidente corresponde uma probabilidade fixa de gerar fotões X, duplicar os mAs duplica o número total de fotões do feixe primário e duplica a dose de radiação entregue ao doente, sem alterar a penetrância (kVp) individual dos fotões.",
    "distractorAnalysis": [
      "Está incorreta: a voltagem máxima e o poder penetrante dos fotões são determinados pelo kVp (quilovoltagem de pico) e não pelo produto corrente-tempo expresso em mAs.",
      "Está incorreta: a capacidade de dissipação térmica da cúpula é expressa em unidades de calor (HU - Heat Units) ou Joules, dependendo do design do sistema de arrefecimento por óleo.",
      "Está incorreta: a distância foco-filme (ou foco-recetor) é um parâmetro geométrico posicional (ex: 100 cm ou 180 cm no tórax) e não uma variável elétrica de carga catódica."
    ],
    "nursingApplication": "Na radiografia pediátrica e no doente agitado ou com taquipneia, os enfermeiros e técnicos priorizam tempos de exposição 's' ultracurtos (milissegundos) com mA elevado para obter os mAs necessários: isto elimina artefactos de movimento (tremor, respiração) na radiografia, prevenindo a necessidade de repetir o exame e duplicar a dose de radiação."
  },
  {
    "id": 5049,
    "topicId": 5,
    "question": "Na avaliação da radioproteção de uma sala de exames imagiológicos, a zona onde as doses de radiação podem ultrapassar os limites do público geral é devidamente delimitada e sinalizada como 'Zona Controlada' ou 'Zona Vigiada'. Qual é o símbolo internacional obrigatório afixado nas portas destas salas?",
    "options": [
      "O símbolo internacional de risco biológico acompanhado de sinalização luminosa intermitente amarela que alerta para a presença contínua de microrganismos patogénicos viáveis.",
      "O Trifólio de Radiação Ionizante (símbolo internacional de três pás circulares a 120° sobre fundo contrastante), acompanhado de sinalética regulamentar que especifica a zona controlada.",
      "O pictograma triangular de perigo elétrico de alta tensão sobreposto a fundo vermelho para avisar do risco iminente de contacto acidental com condutores elétricos desnudados.",
      "A marcação octogonal vermelha com barra transversal que proíbe o transporte e a presença de materiais condutores de eletricidade e ligas metálicas com propriedades ferrosas."
    ],
    "correctIndex": 1,
    "explanation": "A norma internacional (ISO 361) padroniza o Trifólio de Radiação como o símbolo universal de alerta para a presença de radiações ionizantes: consiste numa lâmina circular central com três pás que se estendem a intervalos de 60° (disposição a 120° mútuos). Em hospitais, placas com o trifólio (de cor cinzenta para zona vigiada e verde/amarela/laranja para zonas controladas de maior taxa de dose) com a menção expressa de 'Acesso Condicionado' alertam profissionais e o público contra a entrada inadvertida durante disparos.",
    "distractorAnalysis": [
      "Está incorreta: o pictograma de risco biológico sinaliza risco de infeção microbiológica (ex: laboratórios ou salas de isolamento) e não risco de exposição a radiação ionizante.",
      "Está incorreta: a sinalética de alta tensão adverte contra perigos de eletrocussão na alimentação industrial do gerador e não identifica zonas de monitorização dosimétrica ocupacional.",
      "Está incorreta: restrições a materiais ferromagnéticos utilizam sinalização específica de ressonância magnética (campo magnético estático) e não a delimitação de áreas de radiação ionizante."
    ],
    "nursingApplication": "O enfermeiro garante que as portas das salas com sinalização de trifólio de radiação permanecem firmemente fechadas durante todos os procedimentos com emissão ativa de raios X, impedindo a entrada inadvertida de doentes desorientados, acompanhantes, estudantes ou profissionais desprotegidos."
  },
  {
    "id": 5050,
    "topicId": 5,
    "question": "Em caso de extravasamento periférico acidental de um Meio de Contraste Iodado para o tecido celular subcutâneo do braço durante uma injeção rápida por injetor automático de TAC (bolus a 3 a 5 mL/s), qual é a complicação mecânica aguda mais grave que o enfermeiro deve monitorizar?",
    "options": [
      "Embolia gasosa arterial fulminante decorrente da volatilização imediata das moléculas de iodo sob a temperatura fisiológica do espaço intersticial no tecido celular subcutâneo do membro.",
      "Tromboembolismo venoso pulmonar maciço provocado pela precipitação química instantânea de cristais insolúveis de iodo nas válvulas do sistema venoso superficial da extremidade afetada.",
      "Síndrome Compartimental aguda do membro por elevação extrema da pressão tecidual intracompartimental e efeito hiperosmolar do contraste, com risco de isquemia muscular e necrose nervosa.",
      "Necrose óssea avascular imediata da epífise umeral distal provocada pela difusão retrograda do meio de contraste iodado através dos canais corticais de nutrição vascular profunda."
    ],
    "correctIndex": 2,
    "explanation": "Os injetores de contraste modernos debitam volumes de 80 a 150 mL de meio de contraste iodado viscoso e hiperosmolar sob pressões elevadas (>200-300 psi) a velocidades rápidas (3 a 5 mL/s). Se o cateter venoso periférico romper ou sair da veia, um volume maciço (>50 a 100 mL) extravasa subitamente para os tecidos subcutâneos e compartimentos musculares inextensíveis do antebraço. A pressão intracompartimental dispara (agravada pela atração osmótica adicional de água), comprimindo os vasos perfurantes e o nervo mediano e radial (Síndrome Compartimental pós-extravasamento), exigindo vigilância neurovascular contínua.",
    "distractorAnalysis": [
      "Está incorreta: o meio de contraste líquido extravasado para o subcutâneo não se volatiliza em gás nem entra na circulação arterial como embolia gasosa direta.",
      "Está incorreta: os meios de contraste iodados modernos não precipitam em cristais venosos sólidos na corrente sanguínea; o extravasamento causa toxicidade química e osmolar tecidual local.",
      "Está incorreta: a complicação imediata mais temida é a síndrome de compartimento pela pressão mecânica do volume extravasado (>50-100 mL) nos compartimentos fasciais fechados."
    ],
    "nursingApplication": "Na ocorrência de um extravasamento significativo de contraste, a intervenção imediata de enfermagem inclui: suspender a infusão, tentar aspirar parte do fluido pelo cateter antes de o remover, elevar o membro acima do coração, aplicar compressas frias para diminuir o edema e a dor, medir o perímetro do membro e monitorizar os pulsos e sensibilidade dos dedos de 15 em 15 minutos, solicitando avaliação imediata da cirurgia plástica/vascular se houver suspeita de síndrome compartimental."
  },
  {
    "id": 5051,
    "topicId": 5,
    "question": "Na física das radiações ionizantes e Raios X aplicada ao contexto hospitalar, em relação a 'natureza fotónica ondulatória-corpuscular dos Raios X', qual é a fundamentação científica exata?",
    "options": [
      "Feixes de partículas subatómicas com carga elétrica positiva constituídas por protões acelerados no vácuo, altamente suscetíveis a desvios cinemáticos sob campos magnéticos ambientais intensos.",
      "Ondas mecânicas longitudinais de frequência ultrassónica elevada que se propagam através de ciclos de compressão e refração dos tecidos biológicos, necessitando de um meio material elástico.",
      "Feixes contínuos de eletrões térmicos livres de alta energia cinética que se propagam em linha reta através do parênquima celular tecidual sem sofrer qualquer atenuação por dispersão elástica.",
      "Radiações eletromagnéticas constituídas por fotões de alta energia e comprimento de onda subnanométrico (0,01 a 10 nm), sem carga elétrica ou massa de repouso, que viajam à velocidade da luz."
    ],
    "correctIndex": 3,
    "explanation": "Em física das radiações e imagiologia médica, natureza fotónica ondulatória-corpuscular dos Raios X explica-se pelo facto de que são radiações eletromagnéticas constituídas por fotões de alta energia, com comprimentos de onda extremamente curtos (0,01 a 10 nanómetros) e altas frequências (3·10¹⁶ a 3·10¹⁹ Hz). Propagam-se no vácuo à velocidade da luz (c ≈ 300.000 km/s), não possuem massa de repouso nem carga elétrica e não são desviados por campos elétricos ou magnéticos.",
    "distractorAnalysis": [
      "Está incorreta: raios X são fotões (onda eletromagnética) e não partículas pesadas carregadas; não possuem massa de repouso nem carga elétrica e não são desviados por campos elétricos ou magnéticos.",
      "Está incorreta: ondas mecânicas que requerem meio elástico de propagação constituem ultrassons; os raios X são ondas eletromagnéticas que se propagam inclusive no vácuo.",
      "Está incorreta: eletrões livres são partículas com carga e massa que constituem o feixe catódico no interior do tubo; os raios X emitidos após o impacto no ânodo são fotões neutros."
    ],
    "nursingApplication": "O enfermeiro sabe que, ao desligar o interruptor elétrico do aparelho de Raios X, a emissão de fotões cessa instantaneamente, não ficando qualquer radiação residual no ar da sala."
  },
  {
    "id": 5052,
    "topicId": 5,
    "question": "Durante os cuidados de enfermagem a um doente submetido a procedimentos imagiológicos com radiações, como se aplica na prática o conceito de 'natureza fotónica ondulatória-corpuscular dos Raios X'?",
    "options": [
      "O enfermeiro compreende que, ao interromper o circuito elétrico do gerador de raios X, a emissão de fotões cessa no mesmo instante, não ficando qualquer radiação residual no ar ambiente.",
      "O enfermeiro deve aguardar que a radiação ionizante acumulada no ar da sala de isolamento seja gradualmente exaurida através de ventilação forçada contínua por filtros HEPA durante trinta minutos.",
      "O enfermeiro necessita de promover a descontaminação química de todas as superfícies do leito hospitalar com solução quelante específica após a realização de uma radiografia de tórax portátil.",
      "O enfermeiro deve manter o doente em repouso no leito sob barreira de contacto estrita durante doze horas até que a carga elétrica induzida nas roupas hospitalares seja totalmente neutralizada."
    ],
    "correctIndex": 0,
    "explanation": "A aplicação de enfermagem para natureza fotónica ondulatória-corpuscular dos Raios X baseia-se no princípio: O enfermeiro sabe que, ao desligar o interruptor elétrico do aparelho de Raios X, a emissão de fotões cessa instantaneamente, não ficando qualquer radiação residual no ar da sala. Esta intervenção garante a segurança radiológica do doente e do profissional.",
    "distractorAnalysis": [
      "Está incorreta: no microssegundo em que o disparo é desligado, os fotões já atingiram os detetores ou foram atenuados; o ar atmosférico não fica radioativo nem requer ventilação diferida.",
      "Está incorreta: exames diagnósticos com tubos de raios X não utilizam substâncias radioativas; não há contaminação de superfícies nem indicação para soluções químicas quelantes de descontaminação.",
      "Está incorreta: a irradiação por raios X não induz cargas elétricas estáveis nem radioatividade nas roupas ou no corpo do doente, dispensando isolamentos de contacto."
    ],
    "nursingApplication": "O enfermeiro sabe que, ao desligar o interruptor elétrico do aparelho de Raios X, a emissão de fotões cessa instantaneamente, não ficando qualquer radiação residual no ar da sala."
  },
  {
    "id": 5053,
    "topicId": 5,
    "question": "Um enfermeiro analisa os parâmetros biofísicos e os mecanismos de interação em 'natureza fotónica ondulatória-corpuscular dos Raios X'. Qual das seguintes afirmações expressa a correlação científica correta?",
    "options": [
      "Por apresentarem carga elétrica negativa nítida, os fotões de raios X sofrem intensos desvios de rota pelo campo magnético da Terra, exigindo correção matemática nos detetores digitais.",
      "Por não possuírem carga elétrica nem massa de repouso, os fotões de raios X não sofrem qualquer desvio de trajetória retilínea quando atravessam campos elétricos ou magnéticos estáticos.",
      "Por possuírem massa de repouso apreciável, os fotões sofrem desaceleração gravitacional descendente mensurável quando atravessam espessuras teciduais densas superiores a vinte centímetros.",
      "A trajetória retilínea observada nos fotões X decorre da sua baixíssima velocidade de propagação nos tecidos biológicos, que é cerca de cem vezes inferior à velocidade da luz no vácuo."
    ],
    "correctIndex": 1,
    "explanation": "A correlação científica correta demonstra que Propagam-se no vácuo à velocidade da luz (c ≈ 300.000 km/s), não possuem massa de repouso nem carga elétrica e não são desviados por campos elétricos ou magnéticos. O domínio destes fundamentos permite ao enfermeiro assegurar a correta radioproteção e a interpretação dos riscos radiológicos.",
    "distractorAnalysis": [
      "Está incorreta: fotões têm carga nula (q = 0), pelo que a força de Lorentz (F = q(E + v x B)) é rigorosamente nula; campos eletromagnéticos externos não curvam o feixe de raios X.",
      "Está incorreta: os fotões não possuem massa de repouso (m0 = 0); a atenuação sofrida nos tecidos decorre de processos de absorção fotoelétrica e dispersão Compton, e não de gravidade.",
      "Está incorreta: os raios X são ondas eletromagnéticas que se propagam à velocidade c no vácuo e com velocidade impercetivelmente próxima de c nos tecidos corporais."
    ],
    "nursingApplication": "O enfermeiro sabe que, ao desligar o interruptor elétrico do aparelho de Raios X, a emissão de fotões cessa instantaneamente, não ficando qualquer radiação residual no ar da sala."
  },
  {
    "id": 5054,
    "topicId": 5,
    "question": "Na física das radiações ionizantes e Raios X aplicada ao contexto hospitalar, em relação a 'espetro eletromagnético e fronteira com a luz ultravioleta', qual é a fundamentação científica exata?",
    "options": [
      "Os raios X ocupam a região de transição entre as micro-ondas de alta frequência e a radiação infravermelha distante, apresentando energias quânticas individuais inferiores a um milieletrão-volt.",
      "Os raios X situam-se na faixa de frequências abaixo das telecomunicações de frequência modulada, conferindo-lhes a capacidade biofísica de contornar barreiras ósseas sem sofrer reflexão.",
      "Os raios X situam-se no espetro eletromagnético entre a radiação ultravioleta extrema e os raios gama, com energias fotónicas situadas entre cerca de 1 keV e centenas de keV em contexto clínico.",
      "Os raios X correspondem exatamente ao mesmo intervalo espetral da luz visível na banda do verde monocromático, distinguindo-se apenas pela sua intensidade de fluxo térmico por metro quadrado."
    ],
    "correctIndex": 2,
    "explanation": "Em física das radiações e imagiologia médica, espetro eletromagnético e fronteira com a luz ultravioleta explica-se pelo facto de que os Raios X situam-se no espetro eletromagnético entre a radiação ultravioleta extrema e os raios gama de origem nuclear. A energia individual de cada fotão de Raios X (E = h · f) situa-se tipicamente entre 1 keV e centenas de keV no diagnóstico médico convencional.",
    "distractorAnalysis": [
      "Está incorreta: radiações na gama de micro-ondas e infravermelhos são não-ionizantes de baixíssima frequência, enquanto os raios X são ionizantes de alta frequência e alta energia.",
      "Está incorreta: telecomunicações utilizam frequências muito baixas; os raios X têm comprimentos de onda subnanométricos (0,01 a 10 nm) e frequências na ordem dos exa-hertz.",
      "Está incorreta: a luz visível situa-se entre 400 e 700 nm com energias de 1,8 a 3,1 eV, cerca de mil a cem mil vezes inferiores à energia típica de um fotão de raios X diagnósticos."
    ],
    "nursingApplication": "O enfermeiro distingue radiações ionizantes (Raios X e Gama, que quebram ligações moleculares) de radiações não-ionizantes (ressonância magnética e ecografia, seguras na gravidez)."
  },
  {
    "id": 5055,
    "topicId": 5,
    "question": "Durante os cuidados de enfermagem a um doente submetido a procedimentos imagiológicos com radiações, como se aplica na prática o conceito de 'espetro eletromagnético e fronteira com a luz ultravioleta'?",
    "options": [
      "O enfermeiro considera que a ecografia emite radiação ionizante de baixa frequência, recomendando a aplicação de protetores plumbíferos pélvicos em todas as grávidas submetidas a ecodoppler.",
      "O enfermeiro assume que a ressonância magnética e os raios X partilham o mesmo mecanismo de quebra de duplas cadeias de DNA celular, exigindo consentimento informado para radiação ionizante.",
      "O enfermeiro classifica todos os métodos de diagnóstico por imagem como fontes emissores de radiação não-ionizante, dispensando qualquer justificação clínica radiológica em idade fértil.",
      "O enfermeiro distingue radiações ionizantes (raios X e gama, com energia para ejetar eletrões atómicos) de ondas não-ionizantes (ecografia e ressonância magnética, seguras na gestação)."
    ],
    "correctIndex": 3,
    "explanation": "A aplicação de enfermagem para espetro eletromagnético e fronteira com a luz ultravioleta baseia-se no princípio: O enfermeiro distingue radiações ionizantes (Raios X e Gama, que quebram ligações moleculares) de radiações não-ionizantes (ressonância magnética e ecografia, seguras na gravidez). Esta intervenção garante a segurança radiológica do doente e do profissional.",
    "distractorAnalysis": [
      "Está incorreta: a ecografia utiliza ondas acústicas mecânicas de ultrassom (não-ionizantes), sendo completamente isenta de radiação ionizante e segura na monitorização pré-natal.",
      "Está incorreta: a ressonância magnética baseia-se em campos magnéticos estáticos e radiofrequência, não causando ionização atómica nem quebras estruturais primárias no DNA cromossómico.",
      "Está incorreta: raios X e gama são formalmente ionizantes, exigindo o princípio da justificação e controlo rigoroso de doses em mulheres em idade fértil ou grávidas."
    ],
    "nursingApplication": "O enfermeiro distingue radiações ionizantes (Raios X e Gama, que quebram ligações moleculares) de radiações não-ionizantes (ressonância magnética e ecografia, seguras na gravidez)."
  },
  {
    "id": 5056,
    "topicId": 5,
    "question": "Um enfermeiro analisa os parâmetros biofísicos e os mecanismos de interação em 'espetro eletromagnético e fronteira com a luz ultravioleta'. Qual das seguintes afirmações expressa a correlação científica correta?",
    "options": [
      "Na radiologia diagnóstica convencional e tomografia computorizada, os fotões X utilizados apresentam energias médias na ordem dos 20 a 140 keV, capazes de provocar ionizações na matéria.",
      "Na imagiologia médica moderna, os fotões X operam na gama dos megaeletrões-volt (>10 MeV), induzindo reações de transmutação isotópica nos átomos dos tecidos moles atravessados.",
      "A energia individual de cada fotão X hospitalar situa-se entre zero e dez eletrões-volt, valor rigorosamente coincidente com o patamar de excitação térmica do oxigénio celular em repouso.",
      "O espetro de energia dos raios X diagnósticos é exclusivamente monocromático e contínuo, apresentando todos os fotões rigorosamente o mesmo comprimento de onda de emissão atómica."
    ],
    "correctIndex": 0,
    "explanation": "A correlação científica correta demonstra que A energia individual de cada fotão de Raios X (E = h · f) situa-se tipicamente entre 1 keV e centenas de keV no diagnóstico médico convencional. O domínio destes fundamentos permite ao enfermeiro assegurar a correta radioproteção e a interpretação dos riscos radiológicos.",
    "distractorAnalysis": [
      "Está incorreta: energias superiores a 10 MeV são utilizadas em aceleradores lineares para radioterapia externa e não em diagnóstico; fotões diagnósticos situam-se tipicamente entre 20 e 140 keV.",
      "Está incorreta: energias de 0 a 10 eV correspondem à luz ultravioleta próxima e visível, insuficientes para a penetração tecidual diagnóstica e ionização profunda do esqueleto.",
      "Está incorreta: o feixe de raios X diagnósticos é policromático (contínuo de radiação de travagem com picos de radiação característica), não existindo feixe puramente monocromático no tubo comum."
    ],
    "nursingApplication": "O enfermeiro distingue radiações ionizantes (Raios X e Gama, que quebram ligações moleculares) de radiações não-ionizantes (ressonância magnética e ecografia, seguras na gravidez)."
  },
  {
    "id": 5057,
    "topicId": 5,
    "question": "Na física das radiações ionizantes e Raios X aplicada ao contexto hospitalar, em relação a 'relação de Planck-Einstein (E = h · f = h · c / λ)', qual é a fundamentação científica exata?",
    "options": [
      "A energia de cada fotão é diretamente proporcional ao comprimento de onda e inversamente proporcional à frequência, conferindo às ondas longas a capacidade máxima de penetração óssea.",
      "A energia de cada fotão é diretamente proporcional à frequência e inversamente proporcional ao comprimento de onda; menores comprimentos de onda conferem maior energia e penetração.",
      "A energia quântica do fotão é totalmente independente da sua frequência, dependendo em exclusivo da espessura em milímetros de alumínio da janela de saída da ampola radiológica.",
      "O produto entre frequência e comprimento de onda varia com a temperatura da sala de exames, tornando os fotões emitidos no inverno biologicamente menos agressivos e penetrantes."
    ],
    "correctIndex": 1,
    "explanation": "Em física das radiações e imagiologia médica, relação de Planck-Einstein (E = h · f = h · c / λ) explica-se pelo facto de que a energia do fotão é diretamente proporcional à frequência (f) e inversamente proporcional ao comprimento de onda (λ). Fotões de menor comprimento de onda possuem maior energia fotónica e, portanto, maior poder de penetração nos tecidos densos do corpo humano.",
    "distractorAnalysis": [
      "Está incorreta: pela equação de Planck-Einstein E = h·f = h·c/λ, quanto menor o comprimento de onda λ, maior é a frequência f e mais energético e penetrante é o fotão.",
      "Está incorreta: a energia quântica fundamental do fotão depende intrinsecamente da frequência da onda eletromagnética através da constante fundamental de Planck (h).",
      "Está incorreta: a velocidade da luz c = λ·f é uma constante universal invariável no vácuo, não sofrendo alterações com variações térmicas climáticas do ambiente hospitalar."
    ],
    "nursingApplication": "Ao selecionar o 'feixe duro' (alta quilovoltagem kVp), o técnico e o enfermeiro sabem que o feixe se torna mais penetrante para radiografar regiões espessas como a bacia ou coluna lombo-sagrada."
  },
  {
    "id": 5058,
    "topicId": 5,
    "question": "Durante os cuidados de enfermagem a um doente submetido a procedimentos imagiológicos com radiações, como se aplica na prática o conceito de 'relação de Planck-Einstein (E = h · f = h · c / λ)'?",
    "options": [
      "Ao selecionar feixes de baixa energia (feixe mole), garante-se uma penetração profunda e uniforme através de próteses metálicas volumosas sem sobreaquecer o detetor digital moderno.",
      "O uso de feixes duros de alta quilovoltagem elimina por completo a produção de radiação secundária de espalhamento Compton nos tecidos moles retroperitoneais da cavidade abdominal.",
      "Ao ajustar para uma quilovoltagem de pico mais elevada (feixe duro), obtém-se maior penetração do feixe para avaliar estruturas densas ou utentes obesos, reduzindo a dose cutânea relativa.",
      "A quilovoltagem elevada deve ser evitada em radiografias de coluna lombar porque induz radioatividade induzida temporária nos discos intervertebrais fibrocartilagíneos do doente."
    ],
    "correctIndex": 2,
    "explanation": "A aplicação de enfermagem para relação de Planck-Einstein (E = h · f = h · c / λ) baseia-se no princípio: Ao selecionar o 'feixe duro' (alta quilovoltagem kVp), o técnico e o enfermeiro sabem que o feixe se torna mais penetrante para radiografar regiões espessas como a bacia ou coluna lombo-sagrada. Esta intervenção garante a segurança radiológica do doente e do profissional.",
    "distractorAnalysis": [
      "Está incorreta: feixes moles de baixa quilovoltagem são absorvidos superficialmente na pele e gordura, sendo inadequados para atravessar estruturas espessas ou próteses densas.",
      "Está incorreta: quanto maior o kVp (feixe duro), maior é a fração relativa de interações por dispersão Compton em comparação com o efeito fotoelétrico, aumentando a radiação dispersa.",
      "Está incorreta: feixes de raios X diagnósticos (kVp < 150) não possuem energia suficiente para provocar reações fotonucleares ou induzir radioatividade nos tecidos biológicos."
    ],
    "nursingApplication": "Ao selecionar o 'feixe duro' (alta quilovoltagem kVp), o técnico e o enfermeiro sabem que o feixe se torna mais penetrante para radiografar regiões espessas como a bacia ou coluna lombo-sagrada."
  },
  {
    "id": 5059,
    "topicId": 5,
    "question": "Um enfermeiro analisa os parâmetros biofísicos e os mecanismos de interação em 'relação de Planck-Einstein (E = h · f = h · c / λ)'. Qual das seguintes afirmações expressa a correlação científica correta?",
    "options": [
      "Quanto mais curto for o comprimento de onda do fotão X, menor é a sua frequência vibracional e menor é a sua capacidade de atravessar a barreira hematocraniana encefálica.",
      "A atenuação tecidual aumenta exponencialmente com a diminuição do comprimento de onda do fotão, tornando feixes de 0,01 nm incapazes de penetrar o estrato córneo cutâneo.",
      "O comprimento de onda determina unicamente a velocidade de propagação do feixe nos órgãos internos, viajando os fotões duros duas vezes mais rápido do que os fotões moles.",
      "Quanto mais curto for o comprimento de onda do fotão X, maior é a sua energia quântica associada e menor é a probabilidade de absorção fotoelétrica total na derme superficial."
    ],
    "correctIndex": 3,
    "explanation": "A correlação científica correta demonstra que Fotões de menor comprimento de onda possuem maior energia fotónica e, portanto, maior poder de penetração nos tecidos densos do corpo humano. O domínio destes fundamentos permite ao enfermeiro assegurar a correta radioproteção e a interpretação dos riscos radiológicos.",
    "distractorAnalysis": [
      "Está incorreta: menor comprimento de onda implica maior frequência (f = c/λ) e maior energia; fotões de alta energia penetram mais profundamente nos tecidos orgânicos.",
      "Está incorreta: a probabilidade de efeito fotoelétrico decresce com 1/E³; fotões de menor comprimento de onda têm maior E e são menos atenuados na derme, penetrando muito mais.",
      "Está incorreta: todos os fotões eletromagnéticos viajam com a mesma velocidade da luz no mesmo meio; a diferença entre fotões duros e moles reside na energia e não na velocidade."
    ],
    "nursingApplication": "Ao selecionar o 'feixe duro' (alta quilovoltagem kVp), o técnico e o enfermeiro sabem que o feixe se torna mais penetrante para radiografar regiões espessas como a bacia ou coluna lombo-sagrada."
  },
  {
    "id": 5060,
    "topicId": 5,
    "question": "Na física das radiações ionizantes e Raios X aplicada ao contexto hospitalar, em relação a 'ausência de reflexão ou refração convencional dos Raios X', qual é a fundamentação científica exata?",
    "options": [
      "Com índice de refração tecidual praticamente igual a um, os raios X não sofrem refração ótica convencional por lentes de vidro, exigindo diafragmas e lamelas de chumbo para colimação.",
      "Os raios X comportam-se como feixes de luz visível convergente, sendo focados com precisão milimétrica por prismas e lentes de vidro acrílico espessadas montadas no colimador.",
      "A reflexão total dos raios X na epiderme humana é o mecanismo biofísico primário que impede a penetração de radiações ionizantes na cavidade abdominal dos doentes operados.",
      "Os fotões X sofrem desvio refrativo em ângulos retos na camada córnea, gerando feixes secundários que circulam paralelamente à superfície corporal do doente no leito."
    ],
    "correctIndex": 0,
    "explanation": "Em física das radiações e imagiologia médica, ausência de reflexão ou refração convencional dos Raios X explica-se pelo facto de que devido ao seu comprimento de onda minúsculo da ordem do raio atómico, os Raios X não podem ser focados por lentes de vidro óptico convencionais. A colimação e direcionamento do feixe clínico são conseguidos através de diafragmas e lâminas absorventes de chumbo denso.",
    "distractorAnalysis": [
      "Está incorreta: o índice de refração dos raios X na matéria é ligeiramente inferior a 1 por uma fração de 10⁻⁵ a 10⁻⁶; não podem ser focados por lentes convencionais de vidro.",
      "Está incorreta: tecidos biológicos não funcionam como espelhos de reflexão total de raios X; os fotões penetram nos tecidos sofrendo absorção fotoelétrica e dispersão Compton.",
      "Está incorreta: os raios X não sofrem refração em ângulo reto na epiderme; propagam-se em linha reta até sofrerem colisões atómicas com transferência de momento ou absorção."
    ],
    "nursingApplication": "O enfermeiro verifica a correta colimação do campo luminoso de Raios X antes do disparo no leito, garantindo que apenas a área anatómica prescrita é exposta ao feixe útil."
  },
  {
    "id": 5061,
    "topicId": 5,
    "question": "Durante os cuidados de enfermagem a um doente submetido a procedimentos imagiológicos com radiações, como se aplica na prática o conceito de 'ausência de reflexão ou refração convencional dos Raios X'?",
    "options": [
      "O enfermeiro abre ao máximo o colimador luminoso para assegurar que a totalidade da marquesa hospitalar recebe radiação profilática esterilizante contra agentes patogénicos.",
      "O enfermeiro verifica e ajusta o feixe luminoso de colimação antes do disparo radiológico, assegurando que apenas o segmento anatómico de interesse clínico é exposto ao feixe primário.",
      "O enfermeiro dispensa o ajuste dos diafragmas de chumbo do colimador em exames no leito hospitalar, visto que a radiação X apenas atinge as estruturas focadas pelo operador.",
      "O enfermeiro utiliza compressas cirúrgicas humedecidas à frente do feixe radiológico para desviar os fotões secundários e aumentar a convergência focal do ponto luminoso."
    ],
    "correctIndex": 1,
    "explanation": "A aplicação de enfermagem para ausência de reflexão ou refração convencional dos Raios X baseia-se no princípio: O enfermeiro verifica a correta colimação do campo luminoso de Raios X antes do disparo no leito, garantindo que apenas a área anatómica prescrita é exposta ao feixe útil. Esta intervenção garante a segurança radiológica do doente e do profissional.",
    "distractorAnalysis": [
      "Está incorreta: a radiação X diagnóstica não tem função desinfetante ou esterilizante de marquesas; abrir o campo desnecessariamente expõe tecidos saudáveis e degrada a imagem.",
      "Está incorreta: a radiação X propaga-se de forma divergente em cone; se o colimador estiver excessivamente aberto, irradiará áreas anatómicas fora do objetivo com riscos radiobiológicos.",
      "Está incorreta: compressas húmidas de algodão atenuam minimamente o feixe e apenas dispersam radiação indevidamente, não servindo para focar ou colimar raios X."
    ],
    "nursingApplication": "O enfermeiro verifica a correta colimação do campo luminoso de Raios X antes do disparo no leito, garantindo que apenas a área anatómica prescrita é exposta ao feixe útil."
  },
  {
    "id": 5062,
    "topicId": 5,
    "question": "Um enfermeiro analisa os parâmetros biofísicos e os mecanismos de interação em 'ausência de reflexão ou refração convencional dos Raios X'. Qual das seguintes afirmações expressa a correlação científica correta?",
    "options": [
      "A forma do campo luminoso é moldada pela polarização magnética dos fotões incidentes através de espelhos dielétricos refletores instalados no cabeçalho do aparelho móvel.",
      "A colimação ocorre por difração em cristais de quartzo semicondutor que retardam a velocidade dos fotões periféricos até os anular por recombinação de pares eletrónicos.",
      "A definição geométrica do campo de irradiação baseia-se na absorção atómica quase total da radiação periférica não pretendida por lâminas móveis de chumbo denso no colimador.",
      "As lamelas do colimador atuam aumentando a energia cinética média dos fotões centrais através da compressão aerodinâmica do feixe de raios X durante o disparo elétrico."
    ],
    "correctIndex": 2,
    "explanation": "A correlação científica correta demonstra que A colimação e direcionamento do feixe clínico são conseguidos através de diafragmas e lâminas absorventes de chumbo denso. O domínio destes fundamentos permite ao enfermeiro assegurar a correta radioproteção e a interpretação dos riscos radiológicos.",
    "distractorAnalysis": [
      "Está incorreta: a colimação é puramente mecânica e absortiva através de lâminas espessas de chumbo (alto Z e alta densidade); espelhos dielétricos orientam apenas a luz de centragem visível.",
      "Está incorreta: a difração em cristais é utilizada em espectrometria de laboratório de alta precisão (lei de Bragg) e não na colimação do feixe diagnóstico hospitalar comum.",
      "Está incorreta: o feixe de fotões não sofre compressão aerodinâmica; os fotões não são fluidos compressíveis e a sua energia depende da quilovoltagem de aceleração eletrónica."
    ],
    "nursingApplication": "O enfermeiro verifica a correta colimação do campo luminoso de Raios X antes do disparo no leito, garantindo que apenas a área anatómica prescrita é exposta ao feixe útil."
  },
  {
    "id": 5063,
    "topicId": 5,
    "question": "Na física das radiações ionizantes e Raios X aplicada ao contexto hospitalar, em relação a 'capacidade de ionização de átomos e moléculas biológicas', qual é a fundamentação científica exata?",
    "options": [
      "Os fotões X causam danos biológicos primariamente por aquecimento térmico imediato das proteínas plasmáticas, coagulando a circulação capilar periférica por hipertermia local.",
      "A interação com a matéria biológica assenta na fixação química irreversível dos fotões X na molécula de hemoglobina, bloqueando o transporte fisiológico de oxigénio molecular.",
      "A radiação X atua como um soluto osmoticamente ativo que desidrata as células epiteliais por gradiente de pressão transmembranar sem alterar ligações químicas covalentes.",
      "Ao atravessarem os tecidos, os fotões X transferem energia e arrancam eletrões orbitais dos átomos neutros, gerando pares iónicos reativos e induzindo ruturas nas moléculas de DNA."
    ],
    "correctIndex": 3,
    "explanation": "Em física das radiações e imagiologia médica, capacidade de ionização de átomos e moléculas biológicas explica-se pelo facto de que ao atravessarem a matéria, os fotões de Raios X arrancam eletrões orbitais dos átomos neutros, gerando pares de iões altamente reativos. Esta capacidade de quebrar ligações químicas é o mecanismo fundamental dos seus efeitos biológicos nocivos e do seu potencial mutagénico.",
    "distractorAnalysis": [
      "Está incorreta: a dose de energia térmica depositada por exames diagnósticos é minúscula (<0,001 °C de aumento térmico); o dano celular reside na ionização e rutura química molecular.",
      "Está incorreta: fotões X não se fixam quimicamente à hemoglobina nem são substâncias solúveis; a sua ação é puramente física e radioquímica imediata.",
      "Está incorreta: a radiação X é uma onda eletromagnética ionizante e não um soluto químico com pressão osmótica; o efeito lesivo provém da ejeção de eletrões orbitais."
    ],
    "nursingApplication": "O enfermeiro implementa medidas estritas de proteção radiológica para evitar exposições desnecessárias do doente e da equipa de saúde a este agente ionizante."
  },
  {
    "id": 5064,
    "topicId": 5,
    "question": "Durante os cuidados de enfermagem a um doente submetido a procedimentos imagiológicos com radiações, como se aplica na prática o conceito de 'capacidade de ionização de átomos e moléculas biológicas'?",
    "options": [
      "O enfermeiro implementa medidas estritas de radioproteção (tempo, distância e blindagem) para minimizar a dose absorvida e reduzir a probabilidade de mutações e cancros radioinduzidos.",
      "O enfermeiro limita as medidas de radioproteção aos doentes com sintomas de radiotoxicidade manifesta, dispensando precauções dosimétricas em exames de controlo rotineiro no leito.",
      "O enfermeiro substitui o uso de barreiras de chumbo pelo aumento da velocidade de movimentação da marquesa durante o disparo radiológico na unidade de cuidados intensivos.",
      "O enfermeiro desvaloriza a exposição ocupacional contínua a doses baixas de radiação dispersa, assumindo que os efeitos estocásticos possuem um limiar de dose mínimo clinicamente seguro."
    ],
    "correctIndex": 0,
    "explanation": "A aplicação de enfermagem para capacidade de ionização de átomos e moléculas biológicas baseia-se no princípio: O enfermeiro implementa medidas estritas de proteção radiológica para evitar exposições desnecessárias do doente e da equipa de saúde a este agente ionizante. Esta intervenção garante a segurança radiológica do doente e do profissional.",
    "distractorAnalysis": [
      "Está incorreta: a proteção radiológica baseia-se no modelo linear sem limiar (LNT); mesmo doses baixas conferem um risco estocástico proporcional, exigindo radioproteção em todos os exames.",
      "Está incorreta: movimentar a marquesa durante a exposição causa artefactos de movimento graves que inutilizam o exame, forçando a repetição e duplicando a dose de radiação no doente.",
      "Está incorreta: efeitos estocásticos (como leucemias e carcinomas) não possuem limiar seguro conhecido; a radioproteção ocupacional visa manter a dose tão baixa quanto razoavelmente possível (ALARA)."
    ],
    "nursingApplication": "O enfermeiro implementa medidas estritas de proteção radiológica para evitar exposições desnecessárias do doente e da equipa de saúde a este agente ionizante."
  },
  {
    "id": 5065,
    "topicId": 5,
    "question": "Um enfermeiro analisa os parâmetros biofísicos e os mecanismos de interação em 'capacidade de ionização de átomos e moléculas biológicas'. Qual das seguintes afirmações expressa a correlação científica correta?",
    "options": [
      "A ionização biológica consiste na transformação espontânea da água intracelular em gás ozono molecular estável, que atua como agente antioxidante fisiológico protetor do citoplasma.",
      "A ionização tecidual induz a radiólise da água celular com produção de espécies reativas de oxigénio (como o radical hidroxilo •OH), promovendo dano biológico indireto no genoma.",
      "A absorção de fotões X promove a fusão de moléculas lipídicas da membrana plasmática, tornando a barreira celular totalmente impermeável à difusão passiva de água e metabolitos.",
      "O efeito ionizante circunscreve-se estritamente às proteínas citoplasmáticas estruturais, permanecendo o material genético cromossómico imune a qualquer rutura química de cadeias."
    ],
    "correctIndex": 1,
    "explanation": "A correlação científica correta demonstra que Esta capacidade de quebrar ligações químicas é o mecanismo fundamental dos seus efeitos biológicos nocivos e do seu potencial mutagénico. O domínio destes fundamentos permite ao enfermeiro assegurar a correta radioproteção e a interpretação dos riscos radiológicos.",
    "distractorAnalysis": [
      "Está incorreta: a radiólise da água (H2O -> H2O+ + e- -> •OH + H+) gera radicais hidroxilo altamente citotóxicos e mutagénicos, e não gases antioxidantes protetores.",
      "Está incorreta: o dano radiobiológico primário mais relevante não é a impermeabilização lipídica da membrana, mas sim as quebras simples e duplas de cadeias de DNA nuclear.",
      "Está incorreta: o DNA é a molécula-alvo mais crítica para os efeitos radioinduzidos biológicos (mutagénese, carcinogénese e morte celular mitoticamente ligada)."
    ],
    "nursingApplication": "O enfermeiro implementa medidas estritas de proteção radiológica para evitar exposições desnecessárias do doente e da equipa de saúde a este agente ionizante."
  },
  {
    "id": 5066,
    "topicId": 5,
    "question": "Na física das radiações ionizantes e Raios X aplicada ao contexto hospitalar, em relação a 'emissão termiónica no filamento catódico', qual é a fundamentação científica exata?",
    "options": [
      "O campo magnético alternado induz o decaimento radioativo beta do tungsténio catódico, originando partículas energéticas emitidas espontaneamente em direção ao ânodo metálico.",
      "A passagem de luz laser de alta intensidade através do cátodo desencadeia a fotoionização instantânea dos gases atmosféricos retidos no interior da ampola de raios X cirúrgica.",
      "Uma corrente elétrica aquece o filamento de tungsténio no cátodo a mais de 2000 °C, promovendo a libertação de eletrões livres por efeito termiónico na taça de focagem.",
      "O filamento de tungsténio é submetido a arrefecimento criogénico profundo para libertar eletrões estáticos através da anulação da resistência condutora do circuito catódico."
    ],
    "correctIndex": 2,
    "explanation": "Em física das radiações e imagiologia médica, emissão termiónica no filamento catódico explica-se pelo facto de que uma corrente elétrica de baixa voltagem aquece um filamento de tungsténio no cátodo (polo negativo) a mais de 2000 °C, 'fervendo' e libertando uma nuvem de eletrões livres. A intensidade da corrente do filamento (miliamperagem, mA) determina o número total de eletrões emitidos por segundo e, consequentemente, a quantidade de fotões de Raios X gerados.",
    "distractorAnalysis": [
      "Está incorreta: a emissão no filamento é térmica (efeito Richardson-Dushman / emissão termiónica) e não radioativa; o tungsténio é estável e não sofre decaimento beta no tubo.",
      "Está incorreta: os tubos de raios X operam sob vácuo rigoroso e não contêm gases atmosféricos; não se utilizam lasers fotoionizantes para gerar os eletrões do feixe primário.",
      "Está incorreta: a libertação de eletrões requer o fornecimento de energia térmica para superar a função trabalho do tungsténio, necessitando de temperaturas elevadas (>2000 °C)."
    ],
    "nursingApplication": "O enfermeiro compreende que o parâmetro 'mAs' (miliampere-segundo) controla a dose total de radiação fotográfica fornecida durante o tempo de exposição."
  },
  {
    "id": 5067,
    "topicId": 5,
    "question": "Durante os cuidados de enfermagem a um doente submetido a procedimentos imagiológicos com radiações, como se aplica na prática o conceito de 'emissão termiónica no filamento catódico'?",
    "options": [
      "O enfermeiro assume que o valor de mAs regula exclusivamente a capacidade penetrante dos fotões de raios X, permitindo atravessar espessuras ósseas maiores sem elevar a dose biológica.",
      "O enfermeiro considera que duplicar o mAs selecionado reduz a dose cutânea do utente para metade, devido ao encurtamento proporcional da duração do pulso de emissão útil no leito.",
      "O enfermeiro desconsidera o mAs na avaliação da dose radiológica, acreditando que apenas a voltagem do gerador elétrico tem repercussão na quantidade de energia entregue ao utente.",
      "O enfermeiro compreende que o parâmetro mAs (corrente em mA multiplicada pelo tempo em segundos) controla a quantidade de fotões gerados e a dose total de radiação no exame."
    ],
    "correctIndex": 3,
    "explanation": "A aplicação de enfermagem para emissão termiónica no filamento catódico baseia-se no princípio: O enfermeiro compreende que o parâmetro 'mAs' (miliampere-segundo) controla a dose total de radiação fotográfica fornecida durante o tempo de exposição. Esta intervenção garante a segurança radiológica do doente e do profissional.",
    "distractorAnalysis": [
      "Está incorreta: a energia e o poder penetrante dependem do kVp (qualidade); o mAs governa a quantidade total de fotões emitidos (intensidade) e é proporcional à dose no doente.",
      "Está incorreta: duplicar o mAs duplica o número total de eletrões e fotões emitidos, duplicando a dose de radiação absorvida pelo paciente se os restantes fatores forem constantes.",
      "Está incorreta: a dose de radiação depende criticamente do mAs; minimizar o produto corrente-tempo sem comprometer o diagnóstico é essencial para cumprir o princípio ALARA."
    ],
    "nursingApplication": "O enfermeiro compreende que o parâmetro 'mAs' (miliampere-segundo) controla a dose total de radiação fotográfica fornecida durante o tempo de exposição."
  },
  {
    "id": 5068,
    "topicId": 5,
    "question": "Um enfermeiro analisa os parâmetros biofísicos e os mecanismos de interação em 'emissão termiónica no filamento catódico'. Qual das seguintes afirmações expressa a correlação científica correta?",
    "options": [
      "A taxa de emissão de eletrões do filamento catódico é regulada pela corrente de filamento em amperes, influenciando diretamente a fluência e o número total de fotões produzidos no ânodo.",
      "A corrente de filamento determina a velocidade cinética final com que os eletrões colidem com o disco anódico de tungsténio no interior da ampola de vidro pyrex radiológica.",
      "O aquecimento do cátodo controla o ângulo de incidência dos fotões emitidos sobre a grelha antidifusora, corrigindo eventuais desalinhamentos mecânicos da estativa porta-tubos.",
      "A taxa de emissão termiónica depende unicamente da pressão atmosférica externa na sala de exames, variando em função das condições meteorológicas barométricas diárias hospitalares."
    ],
    "correctIndex": 0,
    "explanation": "A correlação científica correta demonstra que A intensidade da corrente do filamento (miliamperagem, mA) determina o número total de eletrões emitidos por segundo e, consequentemente, a quantidade de fotões de Raios X gerados. O domínio destes fundamentos permite ao enfermeiro assegurar a correta radioproteção e a interpretação dos riscos radiológicos.",
    "distractorAnalysis": [
      "Está incorreta: a velocidade terminal dos eletrões depende exclusivamente da diferença de potencial aceleradora (kVp) aplicada entre o cátodo e o ânodo, e não da corrente de filamento.",
      "Está incorreta: o filamento emite eletrões isotrópicos na taça de focagem; a direção dos raios X depende do ângulo da pista anódica (efeito anódico) e do colimador de chumbo.",
      "Está incorreta: o tubo de raios X é selado em vácuo estanque; a emissão eletrónica depende da temperatura interna do filamento e não da pressão atmosférica externa."
    ],
    "nursingApplication": "O enfermeiro compreende que o parâmetro 'mAs' (miliampere-segundo) controla a dose total de radiação fotográfica fornecida durante o tempo de exposição."
  },
  {
    "id": 5069,
    "topicId": 5,
    "question": "Na física das radiações ionizantes e Raios X aplicada ao contexto hospitalar, em relação a 'alta diferença de potencial elétrico (quilovoltagem, kVp)', qual é a fundamentação científica exata?",
    "options": [
      "A diferença de potencial aplicada tem a função exclusiva de manter o filamento catódico a uma temperatura de segurança para evitar a evaporação prematura do tungsténio metálico.",
      "Uma alta diferença de potencial (40 a 150 kVp) acelera os eletrões livres do cátodo ao ânodo, determinando a sua energia cinética máxima e a capacidade penetrante dos fotões gerados.",
      "A quilovoltagem de pico determina a velocidade mecânica de rotação do motor anódico, assegurando que o ponto focal não sofra sobreaquecimento térmico durante o disparo radiológico.",
      "A alta tensão é selecionada unicamente para energizar os circuitos luminosos de centragem no colimador exterior, não exercendo qualquer efeito sobre o espetro de energia do feixe."
    ],
    "correctIndex": 1,
    "explanation": "Em física das radiações e imagiologia médica, alta diferença de potencial elétrico (quilovoltagem, kVp) explica-se pelo facto de que uma alta tensão entre 40.000 e 150.000 Volts (40 a 150 kVp) é aplicada entre o cátodo e o ânodo, acelerando violentamente os eletrões em direção ao alvo metálico. A quilovoltagem de pico (kVp) determina a energia cinética máxima que os eletrões atingem e a 'qualidade' ou poder de penetração dos fotões de Raios X produzidos.",
    "distractorAnalysis": [
      "Está incorreta: o aquecimento do cátodo é feito por um circuito de baixa voltagem (cerca de 10 V) e alguns amperes; a alta tensão (kVp) é aplicada entre cátodo e ânodo para aceleração.",
      "Está incorreta: a rotação do ânodo é impulsionada por um motor de indução magnética com alimentação própria; a quilovoltagem de pico acelera o feixe de eletrões no vácuo.",
      "Está incorreta: as lâmpadas do colimador utilizam voltagens comuns (12 V ou 24 V); os kilovolts (kVp) aceleram os eletrões até frações significativas da velocidade da luz."
    ],
    "nursingApplication": "Para um tórax hiperinsuflado de doente com DPOC ou obesidade mórbida, são selecionados kVp mais elevados para garantir que os fotões penetrem o gradil costal e atinjam o detetor digital."
  },
  {
    "id": 5070,
    "topicId": 5,
    "question": "Durante os cuidados de enfermagem a um doente submetido a procedimentos imagiológicos com radiações, como se aplica na prática o conceito de 'alta diferença de potencial elétrico (quilovoltagem, kVp)'?",
    "options": [
      "Em utentes com grande espessura corporal, deve diminuir-se o kVp para valores inferiores a 30 kVp para impedir que os fotões sejam inteiramente refletidos pelo tecido adiposo.",
      "O aumento da quilovoltagem de pico em doentes obesos é contraindicado por saturar termicamente os sensores digitais planos, provocando a perda total de imagem por branqueamento.",
      "Em doentes obesos ou estruturas anatómicas espessas (bacia ou coluna), selecionam-se kVp mais elevados para garantir que os fotões penetrem o tecido e sensibilizem o detetor digital.",
      "A quilovoltagem deve ser mantida absolutamente fixa em todos os exames e utentes, compensando-se as variações de densidade unicamente pela aproximação física do tubo ao corpo."
    ],
    "correctIndex": 2,
    "explanation": "A aplicação de enfermagem para alta diferença de potencial elétrico (quilovoltagem, kVp) baseia-se no princípio: Para um tórax hiperinsuflado de doente com DPOC ou obesidade mórbida, são selecionados kVp mais elevados para garantir que os fotões penetrem o gradil costal e atinjam o detetor digital. Esta intervenção garante a segurança radiológica do doente e do profissional.",
    "distractorAnalysis": [
      "Está incorreta: baixar o kVp em utentes obesos resultaria em subpenetração total (starvation de fotões), gerando imagens ruidosas sem valor diagnóstico e aumento da dose na pele.",
      "Está incorreta: os detetores modernos têm ampla gama dinâmica e não saturam por seleções adequadas de kVp; o kVp mais alto assegura transmissão de fotões com menor dose à entrada.",
      "Está incorreta: o protocolo radiológico adapta o kVp à espessura da estrutura anatómica; aproximar o tubo excessivamente aumentaria a dose cutânea pela lei do inverso do quadrado."
    ],
    "nursingApplication": "Para um tórax hiperinsuflado de doente com DPOC ou obesidade mórbida, são selecionados kVp mais elevados para garantir que os fotões penetrem o gradil costal e atinjam o detetor digital."
  },
  {
    "id": 5071,
    "topicId": 5,
    "question": "Um enfermeiro analisa os parâmetros biofísicos e os mecanismos de interação em 'alta diferença de potencial elétrico (quilovoltagem, kVp)'. Qual das seguintes afirmações expressa a correlação científica correta?",
    "options": [
      "A elevação dos kVp diminui a frequência média dos fotões produzidos, tornando o feixe útil de raios X progressivamente menos penetrante através das partes moles do organismo.",
      "A quilovoltagem regula exclusivamente o número absoluto de fotões emitidos por segundo, mantendo rigorosamente inalterada a energia cinética individual máxima de cada fotão.",
      "Valores de quilovoltagem superiores a 90 kVp anulam totalmente as interações por espalhamento Compton, fazendo com que todo o feixe interaja apenas por produção de pares nucleares.",
      "O aumento da quilovoltagem de pico eleva a energia média do espetro de fotões emitidos, aumentando a transmissão tecidual e reduzindo a fração de interações por efeito fotoelétrico puro."
    ],
    "correctIndex": 3,
    "explanation": "A correlação científica correta demonstra que A quilovoltagem de pico (kVp) determina a energia cinética máxima que os eletrões atingem e a 'qualidade' ou poder de penetração dos fotões de Raios X produzidos. O domínio destes fundamentos permite ao enfermeiro assegurar a correta radioproteção e a interpretação dos riscos radiológicos.",
    "distractorAnalysis": [
      "Está incorreta: maior kVp confere maior energia cinética aos eletrões, gerando fotões com comprimentos de onda mais curtos, frequências mais altas e maior poder de penetração.",
      "Está incorreta: o número de fotões por unidade de tempo é regulado pelo miliamperagem (mA); o kVp dita a energia máxima dos fotões individuais e a qualidade do feixe.",
      "Está incorreta: a dispersão Compton é o mecanismo predominante em energias diagnósticas médias e altas nos tecidos moles; a produção de pares requer limiar mínimo de 1,022 MeV."
    ],
    "nursingApplication": "Para um tórax hiperinsuflado de doente com DPOC ou obesidade mórbida, são selecionados kVp mais elevados para garantir que os fotões penetrem o gradil costal e atinjam o detetor digital."
  },
  {
    "id": 5072,
    "topicId": 5,
    "question": "Na física das radiações ionizantes e Raios X aplicada ao contexto hospitalar, em relação a 'baixo rendimento energético do tubo de Raios X (~1% vs 99%)', qual é a fundamentação científica exata?",
    "options": [
      "Mais de 99% da energia cinética dos eletrões incidentes no alvo é convertida em calor por colisões inelásticas com eletrões atómicos, sendo menos de 1% convertida em raios X úteis.",
      "Cerca de 99% da energia cinética dos eletrões incidentes é convertida com alta eficiência em fotões de raios X, sendo as perdas energéticas térmicas inferiores a um por cento do total.",
      "Metade da energia dos eletrões converte-se em emissão de neutrões rápidos e a outra metade em radiação ultravioleta contínua que é retida pela estrutura metálica da ampola.",
      "O rendimento de conversão em raios X atinge cem por cento de eficiência quântica quando se utilizam ânodos estáticos de cobre puro sem necessidade de circuitos de arrefecimento."
    ],
    "correctIndex": 0,
    "explanation": "Em física das radiações e imagiologia médica, baixo rendimento energético do tubo de Raios X (~1% vs 99%) explica-se pelo facto de que mais de 99% da energia cinética dos eletrões incidentes no alvo é convertida em energia térmica (calor extremo), e menos de 1% é convertida em Raios X úteis. Por esta razão, os tubos clínicos utilizam ânodos rotativos maciços de tungsténio com ligas de rénio arrefecidos por banhos de óleo dielétrico em circulação contínua.",
    "distractorAnalysis": [
      "Está incorreta: a eficiência de produção de raios X na gama diagnóstica é extremamente baixa (~0,5 a 1% dado por η ≈ 10⁻⁹·Z·V); a esmagadora maioria (>99%) dissipa-se em calor.",
      "Está incorreta: os tubos de raios X não produzem neutrões em voltagens diagnósticas; a energia dos eletrões acelera-se apenas até dezenas ou centenas de keV, gerando calor e fotões X.",
      "Está incorreta: nenhum tubo atinge 100% de rendimento; os ânodos de cobre têm baixa resistência ao calor extremo, exigindo ligas de tungsténio-rénio e dissipação em banho de óleo."
    ],
    "nursingApplication": "O enfermeiro respeita os intervalos de arrefecimento do equipamento móvel de Raios X no internamento para evitar o sobreaquecimento e avaria do tubo de raios anódico."
  },
  {
    "id": 5073,
    "topicId": 5,
    "question": "Durante os cuidados de enfermagem a um doente submetido a procedimentos imagiológicos com radiações, como se aplica na prática o conceito de 'baixo rendimento energético do tubo de Raios X (~1% vs 99%)'?",
    "options": [
      "O enfermeiro desativa o sistema de ventilação forçada do aparelho portátil durante séries sucessivas de disparos no leito para acelerar a acumulação térmica interna necessária.",
      "O enfermeiro compreende e respeita os tempos de pausa e os limites térmicos do equipamento de raios X móvel no internamento, prevenindo avarias da ampola por sobreaquecimento.",
      "O enfermeiro desconsidera os avisos de sobreaquecimento no painel de comando do equipamento, uma vez que o ânodo dissipa todo o calor acumulado por absorção atómica instantânea.",
      "O enfermeiro deve pulverizar soluções alcoólicas sobre a cúpula do tubo radiológico entre cada exposição no quarto para acelerar o processo de dissipação térmica por evaporação."
    ],
    "correctIndex": 1,
    "explanation": "A aplicação de enfermagem para baixo rendimento energético do tubo de Raios X (~1% vs 99%) baseia-se no princípio: O enfermeiro respeita os intervalos de arrefecimento do equipamento móvel de Raios X no internamento para evitar o sobreaquecimento e avaria do tubo de raios anódico. Esta intervenção garante a segurança radiológica do doente e do profissional.",
    "distractorAnalysis": [
      "Está incorreta: bloquear a ventilação forçada aprisiona o calor no interior da cúpula, levando ao sobreaquecimento do óleo dielétrico e risco iminente de fusão do filamento ou ânodo.",
      "Está incorreta: os avisos térmicos protegem componentes caros contra choque térmico e quebra; ignorar os limites pode destruir a pista de tungsténio do ânodo rotativo.",
      "Está incorreta: aplicar álcool ou líquidos na cúpula exterior acarreta grave risco de choque elétrico e ignição por vapor inflamável, estando formalmente contraindicado."
    ],
    "nursingApplication": "O enfermeiro respeita os intervalos de arrefecimento do equipamento móvel de Raios X no internamento para evitar o sobreaquecimento e avaria do tubo de raios anódico."
  },
  {
    "id": 5074,
    "topicId": 5,
    "question": "Um enfermeiro analisa os parâmetros biofísicos e os mecanismos de interação em 'baixo rendimento energético do tubo de Raios X (~1% vs 99%)'. Qual das seguintes afirmações expressa a correlação científica correta?",
    "options": [
      "A rotação do ânodo tem como finalidade prioritária confinar o impacto dos eletrões num único ponto fixo de menores dimensões para aumentar a nitidez geométrica dos ossos longos.",
      "O ânodo rotativo funciona como uma turbina pneumática que extrai o oxigénio atmosférico da ampola selada para manter o vácuo dinâmico durante a execução de radiografias.",
      "Para suportar a enorme carga térmica concentrada, os tubos clínicos utilizam ânodos rotativos de tungsténio-rénio arrefecidos por circulação contínua de óleo dielétrico na cúpula.",
      "Os ânodos rotativos são fabricados em alumínio de baixo ponto de fusão para permitir a evaporação superficial contínua do alvo sem originar dilatações térmicas estruturais."
    ],
    "correctIndex": 2,
    "explanation": "A correlação científica correta demonstra que Por esta razão, os tubos clínicos utilizam ânodos rotativos maciços de tungsténio com ligas de rénio arrefecidos por banhos de óleo dielétrico em circulação contínua. O domínio destes fundamentos permite ao enfermeiro assegurar a correta radioproteção e a interpretação dos riscos radiológicos.",
    "distractorAnalysis": [
      "Está incorreta: a rotação distribui o feixe de eletrões ao longo de uma pista circular anular ampla, multiplicando a área efetiva de dissipação térmica sem aumentar o ponto focal ótico.",
      "Está incorreta: a ampola de raios X é selada sob vácuo estático extremo; o ânodo não funciona como compressor de vácuo nem extrai gases por ação mecânica.",
      "Está incorreta: o alumínio funde a cerca de 660 °C, sendo inviável no ponto focal anódico que atinge >1500-2000 °C; utiliza-se tungsténio (ponto de fusão de 3422 °C)."
    ],
    "nursingApplication": "O enfermeiro respeita os intervalos de arrefecimento do equipamento móvel de Raios X no internamento para evitar o sobreaquecimento e avaria do tubo de raios anódico."
  },
  {
    "id": 5075,
    "topicId": 5,
    "question": "Na física das radiações ionizantes e Raios X aplicada ao contexto hospitalar, em relação a 'vácuo rigoroso no interior da ampola de vidro ou metal', qual é a fundamentação científica exata?",
    "options": [
      "A presença de ar atmosférico no interior da ampola é necessária para assegurar a oxidação controlada do tungsténio metálico durante a libertação contínua de radiação ionizante no disparo.",
      "O vácuo é estabelecido para impedir a fuga de fotões X da ampola em direção à cúpula de chumbo, mantendo os fotões em reflexão interna contínua até ao acionamento elétrico do operador.",
      "A ampola deve conter gás árgon rarefeito sob pressão positiva para conduzir os eletrões do filamento ao alvo anódico por via iónica contínua sem recurso a diferença de potencial elétrico.",
      "O vácuo rigoroso no interior da ampola permite que os eletrões acelerem do cátodo ao ânodo sem colidirem com moléculas de ar, prevenindo a perda de energia e a destruição do filamento."
    ],
    "correctIndex": 3,
    "explanation": "Em física das radiações e imagiologia médica, vácuo rigoroso no interior da ampola de vidro ou metal explica-se pelo facto de que o invólucro do tubo mantém um vácuo ultrassilencioso para que os eletrões acelerados percorram o trajeto do cátodo ao ânodo sem colidirem com moléculas de ar. Se ocorresse perda de vácuo, os eletrões colidiriam com o oxigénio e azoto, desacelerando antes do alvo e provocando arcos elétricos que destruiriam o filamento.",
    "distractorAnalysis": [
      "Está incorreta: se houvesse ar no interior da ampola, o filamento aquecido a 2000 °C oxidaria e arderia de imediato (queimaria); o vácuo impede a oxidação e queima do filamento.",
      "Está incorreta: os fotões X atravessam a matéria e não sofrem reflexão interna total; a emissão do feixe é controlada pela produção de eletrões no cátodo e alta tensão aplicada.",
      "Está incorreta: o interior da ampola é sob vácuo estrito (10⁻⁶ a 10⁻⁷ mmHg); gases internos provocariam ionizações dispersas, arcos elétricos e destruição imediata do tubo."
    ],
    "nursingApplication": "O manuseamento do equipamento radiológico requer cuidados no transporte para evitar choques mecânicos violentos que possam fissurar a ampola de vácuo."
  },
  {
    "id": 5076,
    "topicId": 5,
    "question": "Durante os cuidados de enfermagem a um doente submetido a procedimentos imagiológicos com radiações, como se aplica na prática o conceito de 'vácuo rigoroso no interior da ampola de vidro ou metal'?",
    "options": [
      "O manuseamento do equipamento radiológico requer cuidados no transporte para evitar impactos mecânicos violentos que possam fissurar o invólucro de vácuo da ampola de vidro.",
      "O equipamento portátil deve ser mantido sempre em posição vertical para impedir que o fluido de vácuo no interior da ampola se acumule junto ao polo catódico de emissão.",
      "O enfermeiro deve abrir periodicamente a válvula de ventilação da cúpula para purgar os gases residuais de vácuo acumulados durante os disparos sucessivos no internamento.",
      "O transporte do aparelho de raios X dispensa qualquer cuidado mecânico com trepidações, dado que a ampola metálica interna é mecanicamente rígida e imune a fissuras."
    ],
    "correctIndex": 0,
    "explanation": "A aplicação de enfermagem para vácuo rigoroso no interior da ampola de vidro ou metal baseia-se no princípio: O manuseamento do equipamento radiológico requer cuidados no transporte para evitar choques mecânicos violentos que possam fissurar a ampola de vácuo. Esta intervenção garante a segurança radiológica do doente e do profissional.",
    "distractorAnalysis": [
      "Está incorreta: o vácuo é a ausência de matéria gasosa (espaço rarefeito) e não um líquido químico condensado que escorre com a inclinação do equipamento.",
      "Está incorreta: a ampola de raios X é selada sob vácuo estanque permanente; não existem válvulas de purga manuais nem o operador deve abrir a cúpula selada com óleo.",
      "Está incorreta: choques mecânicos podem quebrar a ampola de vidro pyrex, desalinhando o ânodo e provocando perda catastrófica de vácuo e avaria irreparável do tubo."
    ],
    "nursingApplication": "O manuseamento do equipamento radiológico requer cuidados no transporte para evitar choques mecânicos violentos que possam fissurar a ampola de vácuo."
  },
  {
    "id": 5077,
    "topicId": 5,
    "question": "Um enfermeiro analisa os parâmetros biofísicos e os mecanismos de interação em 'vácuo rigoroso no interior da ampola de vidro ou metal'. Qual das seguintes afirmações expressa a correlação científica correta?",
    "options": [
      "A perda de vácuo provocaria a transformação imediata dos raios X em partículas alfa de alta energia que contaminariam o piso e o mobiliário circundante da enfermaria hospitalar.",
      "Se ocorresse perda do vácuo interno, os eletrões colidiriam com moléculas de oxigénio e azoto, desacelerando antes do alvo e gerando arcos elétricos que fundiriam o filamento.",
      "O contacto do feixe com o ar atmosférico no interior da ampola aceleraria a velocidade dos eletrões para além da velocidade da luz, emitindo radiação de Cherenkov ultravioleta.",
      "Na ausência de vácuo, o tubo de raios X passaria a emitir um feixe contínuo de ondas sonoras de baixa frequência audíveis, sem qualquer alteração na qualidade da imagem médica."
    ],
    "correctIndex": 1,
    "explanation": "A correlação científica correta demonstra que Se ocorresse perda de vácuo, os eletrões colidiriam com o oxigénio e azoto, desacelerando antes do alvo e provocando arcos elétricos que destruiriam o filamento. O domínio destes fundamentos permite ao enfermeiro assegurar a correta radioproteção e a interpretação dos riscos radiológicos.",
    "distractorAnalysis": [
      "Está incorreta: a perda de vácuo no tubo causa ionização dos gases residuais, provocando faíscas e arcos de alta tensão que queimam o filamento catódico sem gerar partículas alfa.",
      "Está incorreta: partículas materiais não podem ultrapassar a velocidade da luz no vácuo; a colisão com gases reduz a energia cinética dos eletrões em vez de acelerá-los.",
      "Está incorreta: o fenómeno em causa é puramente eletrodinâmico no vácuo; a perda de vácuo anula a produção de raios X por destruição imediata dos componentes catódicos."
    ],
    "nursingApplication": "O manuseamento do equipamento radiológico requer cuidados no transporte para evitar choques mecânicos violentos que possam fissurar a ampola de vácuo."
  },
  {
    "id": 5078,
    "topicId": 5,
    "question": "Na física das radiações ionizantes e Raios X aplicada ao contexto hospitalar, em relação a 'filtração do feixe (filtração inerente e adicional de alumínio)', qual é a fundamentação científica exata?",
    "options": [
      "A filtração de alumínio tem como função primária reter os fotões de maior energia do feixe primário para evitar que estes atravessem estruturas ósseas espessas do esqueleto humano.",
      "O filtro de alumínio serve unicamente para converter a radiação ionizante de raios X em radiação visível fotossensível para melhorar o brilho do visor digital da consola médica.",
      "O feixe de raios X atravessa lâminas de alumínio (mínimo de 2,5 mm Al equivalente para >70 kVp) para absorver fotões de baixa energia que aumentariam inutilmente a dose cutânea.",
      "A utilização de lâminas de alumínio no cabeçalho do tubo visa arrefecer mecanicamente o disco anódico através do contacto físico direto com a pista circular de tungsténio."
    ],
    "correctIndex": 2,
    "explanation": "Em física das radiações e imagiologia médica, filtração do feixe (filtração inerente e adicional de alumínio) explica-se pelo facto de que o feixe de Raios X emergente atravessa filtros de folhas de alumínio (mínimo legal de 2,5 mm de Al equivalente) colocados na saída do tubo. A filtração remove os fotões de 'baixa energia' ('radiação mole') que seriam totalmente absorvidos pela pele do doente sem contribuir para a imagem radiológica útil.",
    "distractorAnalysis": [
      "Está incorreta: a filtração absorve preferencialmente fotões de baixa energia (radiação mole), endurecendo o feixe e permitindo a passagem dos fotões úteis mais penetrantes.",
      "Está incorreta: o filtro não converte raios X em luz visível; a cintilação ocorre no recetor de imagem (ecrã de iodeto de césio) e não na filtração à saída do cabeçote.",
      "Está incorreta: o filtro de alumínio fica posicionado no colimador exterior à ampola, não tendo qualquer contacto físico com o ânodo rotativo que opera em vácuo interno."
    ],
    "nursingApplication": "O enfermeiro reconhece que a filtração adequada é um requisito de segurança do doente, poupando a pele a doses superficiais estéreis de radiação ionizante."
  },
  {
    "id": 5079,
    "topicId": 5,
    "question": "Durante os cuidados de enfermagem a um doente submetido a procedimentos imagiológicos com radiações, como se aplica na prática o conceito de 'filtração do feixe (filtração inerente e adicional de alumínio)'?",
    "options": [
      "O enfermeiro deve solicitar a remoção dos filtros de alumínio da máquina antes de radiografar membros com gesso para aumentar a exposição biológica do tecido ósseo periférico.",
      "O enfermeiro assume que a filtração do feixe elimina a necessidade de usar avental de chumbo ao prestar apoio a doentes agitados durante a realização de radiografias de rotina.",
      "O enfermeiro entende que a filtração adicional é indicada apenas em crianças prematuras, devendo ser desativada em doentes adultos com índice de massa corporal superior a trinta.",
      "O enfermeiro reconhece que a filtração adequada é um imperativo de segurança do utente, poupando os tecidos superficiais da pele a doses absorvidas estéreis sem benefício diagnóstico."
    ],
    "correctIndex": 3,
    "explanation": "A aplicação de enfermagem para filtração do feixe (filtração inerente e adicional de alumínio) baseia-se no princípio: O enfermeiro reconhece que a filtração adequada é um requisito de segurança do doente, poupando a pele a doses superficiais estéreis de radiação ionizante. Esta intervenção garante a segurança radiológica do doente e do profissional.",
    "distractorAnalysis": [
      "Está incorreta: a filtração inerente e adicional é regulamentar e fixa no equipamento; retirar filtros aumentaria a dose cutânea sem melhorar o sinal que atinge o detetor.",
      "Está incorreta: a filtração reduz a dose do doente mas não impede a dispersão de radiação secundária nos tecidos; o uso de EPI plumbífero pelo profissional continua obrigatório.",
      "Está incorreta: a filtração mínima de 2,5 mm Al eq é obrigatória em todos os tubos médicos acima de 70 kVp, tanto em pediatria como em exames de adultos."
    ],
    "nursingApplication": "O enfermeiro reconhece que a filtração adequada é um requisito de segurança do doente, poupando a pele a doses superficiais estéreis de radiação ionizante."
  },
  {
    "id": 5080,
    "topicId": 5,
    "question": "Um enfermeiro analisa os parâmetros biofísicos e os mecanismos de interação em 'filtração do feixe (filtração inerente e adicional de alumínio)'. Qual das seguintes afirmações expressa a correlação científica correta?",
    "options": [
      "A filtração remove seletivamente os fotões moles de longo comprimento de onda, aumentando a energia média e o poder penetrante do feixe transmitido (endurecimento do feixe).",
      "A filtração atenua de forma idêntica todas as frequências do espetro eletromagnético, mantendo rigorosamente inalterada a energia média dos fotões que emergem da janela do tubo.",
      "A filtração do feixe atua diminuindo a velocidade linear de propagação dos fotões de raios X até que estes atinjam a velocidade de propagação das ondas sonoras nos tecidos.",
      "A filtração por alumínio aumenta a percentagem de dispersão Compton no feixe incidente antes mesmo de este colidir com as estruturas anatómicas do tórax do utente examinado."
    ],
    "correctIndex": 0,
    "explanation": "A correlação científica correta demonstra que A filtração remove os fotões de 'baixa energia' ('radiação mole') que seriam totalmente absorvidos pela pele do doente sem contribuir para a imagem radiológica útil. O domínio destes fundamentos permite ao enfermeiro assegurar a correta radioproteção e a interpretação dos riscos radiológicos.",
    "distractorAnalysis": [
      "Está incorreta: a atenuação fotoelétrica no alumínio decresce com o cubo da energia (1/E³), de modo que fotões de baixa energia são absorvidos e os de alta energia passam (endurecimento).",
      "Está incorreta: os fotões de raios X viajam sempre à velocidade da luz c no vácuo e não são retardados até velocidades sonoras subsónicas pela passagem no alumínio.",
      "Está incorreta: o filtro atenua por absorção fotoelétrica e dispersão sem aumentar o scatter no feixe útil transmitido, reduzindo a dose global entregue ao paciente."
    ],
    "nursingApplication": "O enfermeiro reconhece que a filtração adequada é um requisito de segurança do doente, poupando a pele a doses superficiais estéreis de radiação ionizante."
  },
  {
    "id": 5081,
    "topicId": 5,
    "question": "Na física das radiações ionizantes e Raios X aplicada ao contexto hospitalar, em relação a 'mecanismo da Radiação de Travagem (Bremsstrahlung)', qual é a fundamentação científica exata?",
    "options": [
      "Um fotão solar atinge o núcleo do átomo de tungsténio provocando a libertação em cadeia de três neutrões rápidos que colidem com os eletrões das camadas mais externas do alvo.",
      "Um eletrão livre acelerado sofre desaceleração brusca pelo campo elétrico do núcleo pesado de tungsténio, perdendo energia cinética que é emitida sob a forma de um fotão de raios X.",
      "Dois eletrões livres colidem frontalmente no vácuo anódico, aniquilando a sua massa de repouso e convertendo-se num par de fotões gama de altíssima energia penetrante no alvo.",
      "O núcleo atómico de tungsténio sofre fissão nuclear induzida pelo campo magnético da ampola, libertando fragmentos radioativos instáveis que emitem radiação de travagem contínua."
    ],
    "correctIndex": 1,
    "explanation": "Em física das radiações e imagiologia médica, mecanismo da Radiação de Travagem (Bremsstrahlung) explica-se pelo facto de que um eletrão incidente de alta energia aproxima-se do núcleo pesado de tungsténio do ânodo; a atração coulombiana do núcleo desacelera e desvia a trajetória do eletrão, emitindo a energia perdida como um fotão de Raios X. Produz um espetro contínuo de energias que vai desde valores mínimos até à energia cinética máxima do eletrão acelerado ($E_{max} = e \\cdot kVp$).",
    "distractorAnalysis": [
      "Está incorreta: a radiação de travagem (Bremsstrahlung) decorre da desaceleração de eletrões pelo campo coulombiano nuclear; não envolve fotões solares nem ejeção de neutrões.",
      "Está incorreta: aniquilação de matéria ocorre na colisão entre um eletrão e um positrão (antimatéria), gerando fotões gama de 511 keV em PET, e não na ampola de raios X comum.",
      "Está incorreta: nos tubos diagnósticos convencionais não ocorrem reações nucleares de fissão; o tungsténio permanece estável sob a interação coulombiana dos eletrões acelerados."
    ],
    "nursingApplication": "Constitui cerca de 80 a 90% de todos os fotões de Raios X emitidos num exame radiológico diagnóstico típico."
  },
  {
    "id": 5082,
    "topicId": 5,
    "question": "Durante os cuidados de enfermagem a um doente submetido a procedimentos imagiológicos com radiações, como se aplica na prática o conceito de 'mecanismo da Radiação de Travagem (Bremsstrahlung)'?",
    "options": [
      "A radiação de travagem representa menos de cinco por cento dos fotões emitidos em radiologia, sendo a sua presença indesejável por degradar o sinal útil detetado na imagem digital.",
      "A radiação de travagem só é produzida em tubos de raios X dentários de baixa voltagem, cessando por completo em geradores hospitalares operados acima de cinquenta quilovolts.",
      "A radiação de travagem constitui cerca de 80% a 90% da totalidade dos fotões de raios X emitidos no feixe diagnóstico convencional de um tubo com ânodo de tungsténio acima de 70 kVp.",
      "A emissão de radiação de travagem é ativada exclusivamente quando se realizam exames com contraste baritado, não se manifestando em radiografias convencionais de tórax no leito."
    ],
    "correctIndex": 2,
    "explanation": "A aplicação de enfermagem para mecanismo da Radiação de Travagem (Bremsstrahlung) baseia-se no princípio: Constitui cerca de 80 a 90% de todos os fotões de Raios X emitidos num exame radiológico diagnóstico típico. Esta intervenção garante a segurança radiológica do doente e do profissional.",
    "distractorAnalysis": [
      "Está incorreta: o mecanismo de Bremsstrahlung é predominante e responsável pela grande maioria (80-90%) do espetro radiológico médico a 70-120 kVp, formando a base do feixe.",
      "Está incorreta: a radiação de travagem está presente em qualquer tubo de raios X onde eletrões colidem com um alvo metálico, aumentando a sua eficiência com a voltagem.",
      "Está incorreta: a produção de Bremsstrahlung ocorre no ânodo metálico da ampola do tubo e independe de o doente ter ou não ingerido meios de contraste radiológico."
    ],
    "nursingApplication": "Constitui cerca de 80 a 90% de todos os fotões de Raios X emitidos num exame radiológico diagnóstico típico."
  },
  {
    "id": 5083,
    "topicId": 5,
    "question": "Um enfermeiro analisa os parâmetros biofísicos e os mecanismos de interação em 'mecanismo da Radiação de Travagem (Bremsstrahlung)'. Qual das seguintes afirmações expressa a correlação científica correta?",
    "options": [
      "A radiação de travagem emite unicamente três linhas espetrais perfeitamente monocromáticas cuja frequência depende da velocidade angular de rotação mecânica do prato anódico.",
      "O espetro de energia da radiação de travagem apresenta distribuição uniforme constante em todos os comprimentos de onda, estendendo-se sem limite superior até à gama dos raios cósmicos.",
      "A energia dos fotões de radiação de travagem é inversamente proporcional à diferença de potencial elétrico estabelecida entre os elétrodos condutores da ampola de raios X médica.",
      "A radiação de travagem gera um espetro contínuo de energias com limite superior estritamente definido pela energia cinética máxima dos eletrões incidentes acelerados no tubo (E_max = e·kVp)."
    ],
    "correctIndex": 3,
    "explanation": "A correlação científica correta demonstra que Produz um espetro contínuo de energias que vai desde valores mínimos até à energia cinética máxima do eletrão acelerado ($E_{max} = e \\cdot kVp$). O domínio destes fundamentos permite ao enfermeiro assegurar a correta radioproteção e a interpretação dos riscos radiológicos.",
    "distractorAnalysis": [
      "Está incorreta: a emissão de Bremsstrahlung é contínua porque os eletrões passam a distâncias variáveis do núcleo, perdendo desde frações minúsculas até 100% da sua energia cinética.",
      "Está incorreta: linhas monocromáticas discretas caracterizam a radiação característica e não a radiação de travagem; a rotação do ânodo não altera as energias quânticas dos fotões.",
      "Está incorreta: o espetro possui corte nítido de Duane-Hunt em E_max = e·kVp; nenhum fotão pode ter energia superior à energia cinética do eletrão que o originou."
    ],
    "nursingApplication": "Constitui cerca de 80 a 90% de todos os fotões de Raios X emitidos num exame radiológico diagnóstico típico."
  },
  {
    "id": 5084,
    "topicId": 5,
    "question": "Na física das radiações ionizantes e Raios X aplicada ao contexto hospitalar, em relação a 'mecanismo dos Raios X Característicos', qual é a fundamentação científica exata?",
    "options": [
      "Um eletrão acelerado ejeta um eletrão da camada interna (K) do átomo de tungsténio; a transição de um eletrão de camada mais externa para preencher a vaga liberta um fotão característico.",
      "Um eletrão incidente funde-se com o núcleo de tungsténio do ânodo, provocando a expulsão de um fotão ultravioleta que é convertido em raios X por fluorescência no vidro da ampola.",
      "O fotão primário colide com a grelha antidifusora de chumbo e liberta eletrões secundários que circulam em redor do doente sem penetrar as estruturas viscerais anatómicas profundas.",
      "A rotação do ânodo comprime o campo elétrico do filamento catódico, originando ondas eletromagnéticas contínuas de frequência modulada que atravessam os filtros de colimação."
    ],
    "correctIndex": 0,
    "explanation": "Em física das radiações e imagiologia médica, mecanismo dos Raios X Característicos explica-se pelo facto de que um eletrão incidente colide e ejeta um eletrão orbital de uma camada interna (camada K) do átomo de tungsténio; a vacância é preenchida por um eletrão de uma camada superior (L ou M), emitindo um fotão com energia exatamente igual à diferença de níveis quânticos. Produz um espetro de linhas discretas (picos monocromáticos característicos do tungsténio, como a linha $K_\\alpha \\approx 59$ keV e $K_\\beta \\approx 67$ keV).",
    "distractorAnalysis": [
      "Está incorreta: a radiação característica decorre da desexcitação eletrónica quando eletrões de camadas L ou M descem para a camada K, emitindo a diferença de energia de ligação atómica.",
      "Está incorreta: eletrões em energias diagnósticas não se fundem com núcleos atómicos nem geram fluorescência no vidro pyrex para produzir feixes de raios X característicos.",
      "Está incorreta: a produção de raios X característicos do alvo ocorre no ânodo da ampola e não na grelha antidifusora de Potter-Bucky posicionada junto ao recetor de imagem."
    ],
    "nursingApplication": "Apenas ocorre se a quilovoltagem aplicada for superior à energia de ligação dos eletrões da camada K do alvo (mínimo de 69,5 kV para o tungsténio)."
  },
  {
    "id": 5085,
    "topicId": 5,
    "question": "Durante os cuidados de enfermagem a um doente submetido a procedimentos imagiológicos com radiações, como se aplica na prática o conceito de 'mecanismo dos Raios X Característicos'?",
    "options": [
      "A radiação característica da camada K do tungsténio pode ser gerada com qualquer valor de voltagem no painel de comando, inclusive com tensões ultrabaixas de quinze quilovolts de pico.",
      "A produção de raios X característicos da camada K do tungsténio exige que a quilovoltagem aplicada no tubo seja superior à energia de ligação dessa camada orbital (mínimo de 69,5 keV).",
      "A emissão de fotões característicos requer que a temperatura do filamento catódico atinja valores criogénicos inferiores a zero graus Celsius para estabilizar os eletrões orbitais livres.",
      "Os picos de emissão característica só ocorrem se o doente for colocado em decúbito dorsal estrito sobre a mesa de exames radiológicos com a marquesa alinhada ao eixo do gantry."
    ],
    "correctIndex": 1,
    "explanation": "A aplicação de enfermagem para mecanismo dos Raios X Característicos baseia-se no princípio: Apenas ocorre se a quilovoltagem aplicada for superior à energia de ligação dos eletrões da camada K do alvo (mínimo de 69,5 kV para o tungsténio). Esta intervenção garante a segurança radiológica do doente e do profissional.",
    "distractorAnalysis": [
      "Está incorreta: para ejetar um eletrão da camada K do tungsténio (energia de ligação de 69,5 keV), o eletrão incidente tem de ter pelo menos 69,5 keV, exigindo kVp ≥ 70.",
      "Está incorreta: a 15 kVp os eletrões só atingem 15 keV de energia cinética, insuficiente para ionizar a camada K do tungsténio; apenas camadas externas de baixa energia seriam excitadas.",
      "Está incorreta: a radiação característica depende da física atómica do alvo metálico no ânodo e independe da posição corporal de decúbito do doente na sala de observação."
    ],
    "nursingApplication": "Apenas ocorre se a quilovoltagem aplicada for superior à energia de ligação dos eletrões da camada K do alvo (mínimo de 69,5 kV para o tungsténio)."
  },
  {
    "id": 5086,
    "topicId": 5,
    "question": "Um enfermeiro analisa os parâmetros biofísicos e os mecanismos de interação em 'mecanismo dos Raios X Característicos'. Qual das seguintes afirmações expressa a correlação científica correta?",
    "options": [
      "A radiação característica forma uma curva sinuosa puramente plana sem picos de ressonância, distribuindo a sua energia uniformemente por todo o espetro de radiofrequências audíveis.",
      "Os picos característicos deslocam-se aleatoriamente no gráfico de emissão ao longo do dia em virtude de variações da humidade relativa do ar atmosférico na sala de comandos técnicos.",
      "A radiação característica manifesta-se no gráfico de espetro como picos discretos e estreitos de energia bem definida (linhas K-alfa e K-beta), sobrepostos ao espetro contínuo de travagem.",
      "A radiação característica apresenta comprimentos de onda milimétricos idênticos aos das micro-ondas industriais, conferindo-lhe poder de aquecimento dérmico sem ionização atómica."
    ],
    "correctIndex": 2,
    "explanation": "A correlação científica correta demonstra que Produz um espetro de linhas discretas (picos monocromáticos característicos do tungsténio, como a linha $K_\\alpha \\approx 59$ keV e $K_\\beta \\approx 67$ keV). O domínio destes fundamentos permite ao enfermeiro assegurar a correta radioproteção e a interpretação dos riscos radiológicos.",
    "distractorAnalysis": [
      "Está incorreta: as energias dos fotões característicos são fixas e discretas (ex: Kα ≈ 59 keV e Kβ ≈ 67 keV no tungsténio), correspondendo às diferenças orbitais exatas do elemento Z=74.",
      "Está incorreta: as linhas espectrais do alvo são imutáveis e independem da humidade ambiente da sala, dependendo apenas do elemento químico constituinte do ânodo metálico.",
      "Está incorreta: raios X característicos possuem comprimentos de onda na escala dos picómetros (subnanométricos) e são formalmente radiações ionizantes de alta frequência."
    ],
    "nursingApplication": "Apenas ocorre se a quilovoltagem aplicada for superior à energia de ligação dos eletrões da camada K do alvo (mínimo de 69,5 kV para o tungsténio)."
  },
  {
    "id": 5087,
    "topicId": 5,
    "question": "Na física das radiações ionizantes e Raios X aplicada ao contexto hospitalar, em relação a 'influência do material do ânodo (número atómico Z elevado)', qual é a fundamentação científica exata?",
    "options": [
      "O tungsténio é utilizado exclusivamente pelo seu custo reduzido e facilidade de moldagem a frio, apesar de possuir ponto de fusão comparável ao do chumbo e baixa condutividade térmica.",
      "O material do ânodo é escolhido com número atómico o mais baixo possível (ex: lítio, Z = 3) para evitar a desaceleração excessiva dos eletrões e anular as perdas por calor no tubo.",
      "Utiliza-se tungsténio porque este metal emite espontaneamente partículas alfa de alta energia sem necessidade de aplicar qualquer diferença de potencial elétrico entre os elétrodos.",
      "A escolha do tungsténio (Z = 74) baseia-se no seu elevado número atómico que otimiza o rendimento de raios X e no altíssimo ponto de fusão (3422 °C) que tolera cargas térmicas maciças."
    ],
    "correctIndex": 3,
    "explanation": "Em física das radiações e imagiologia médica, influência do material do ânodo (número atómico Z elevado) explica-se pelo facto de que a eficiência da produção de radiação de travagem é proporcional ao número atómico do alvo ($Z$) e à voltagem aplicada. Utiliza-se o tungsténio (Z = 74) devido ao seu alto número atómico que maximiza a travagem dos eletrões e ao seu altíssimo ponto de fusão (3422 °C) que suporta o calor extremo.",
    "distractorAnalysis": [
      "Está incorreta: o chumbo tem baixo ponto de fusão (327 °C) e derreteria instantaneamente no foco anódico; o tungsténio resiste a mais de 3400 °C de temperatura extrema.",
      "Está incorreta: a eficiência de produção de Bremsstrahlung é proporcional a Z; elementos de baixo Z gerariam praticamente apenas calor sem produzir quantidade útil de raios X diagnósticos.",
      "Está incorreta: o tungsténio é um metal estável que não possui radioatividade natural alfa; a produção de raios X requer aceleração de eletrões por alta tensão elétrica."
    ],
    "nursingApplication": "Na mamografia utilizam-se alvos de molibdénio (Z = 42) ou ródio (Z = 45) para gerar Raios X característicos de menor energia (17 a 20 keV), ideais para contrastar os tecidos moles da mama."
  },
  {
    "id": 5088,
    "topicId": 5,
    "question": "Durante os cuidados de enfermagem a um doente submetido a procedimentos imagiológicos com radiações, como se aplica na prática o conceito de 'influência do material do ânodo (número atómico Z elevado)'?",
    "options": [
      "Em mamografia utilizam-se alvos de molibdénio (Z = 42) ou ródio (Z = 45) para gerar fotões característicos de 17 a 23 keV, ideais para o contraste de tecidos moles na glândula mamária.",
      "Na mamografia clínica recorre-se a ânodos de ouro maciço operados a 140 kVp para garantir que os fotões atravessem próteses mamárias sem interagir com o tecido glandular adjacente.",
      "O alvo em mamografia deve ser feito de chumbo espesso para assegurar que todos os fotões emitidos sejam de alta energia, reduzindo o tempo de compressão mamária a um milissegundo.",
      "A mamografia dispensa a utilização de alvos metálicos no tubo, gerando radiação através da ionização direta do óleo dielétrico de arrefecimento presente na cúpula do aparelho."
    ],
    "correctIndex": 0,
    "explanation": "A aplicação de enfermagem para influência do material do ânodo (número atómico Z elevado) baseia-se no princípio: Na mamografia utilizam-se alvos de molibdénio (Z = 42) ou ródio (Z = 45) para gerar Raios X característicos de menor energia (17 a 20 keV), ideais para contrastar os tecidos moles da mama. Esta intervenção garante a segurança radiológica do doente e do profissional.",
    "distractorAnalysis": [
      "Está incorreta: molibdénio (Kα a 17,5 keV) e ródio (Kα a 20,2 keV) produzem fotões de energia ótima para o efeito fotoelétrico em tecidos moles e calcificações mamárias finas.",
      "Está incorreta: ouro e 140 kVp gerariam radiação excessivamente dura e penetrante com perda total do contraste de partes moles indispensável na mamografia de rastreio.",
      "Está incorreta: sem alvo metálico no vácuo não ocorre colisão de eletrões acelerados nem emissão de raios X; o óleo de arrefecimento circunda a ampola externamente e atua como isolante."
    ],
    "nursingApplication": "Na mamografia utilizam-se alvos de molibdénio (Z = 42) ou ródio (Z = 45) para gerar Raios X característicos de menor energia (17 a 20 keV), ideais para contrastar os tecidos moles da mama."
  },
  {
    "id": 5089,
    "topicId": 5,
    "question": "Um enfermeiro analisa os parâmetros biofísicos e os mecanismos de interação em 'influência do material do ânodo (número atómico Z elevado)'. Qual das seguintes afirmações expressa a correlação científica correta?",
    "options": [
      "Alvos com maior número atómico reduzem a produção de raios X devido à repulsão magnética que repele os eletrões catódicos antes de estes tocarem na superfície da pista metálica.",
      "O número atómico (Z) elevado do alvo aumenta a força coulombiana atrativa exercida sobre os eletrões incidentes, elevando proporcionalmente a taxa de emissão de radiação de travagem.",
      "O número atómico do ânodo determina unicamente a resistência à corrosão bacteriana hospitalar do equipamento móvel, não influenciando a física das emissões de radiação ionizante.",
      "A escolha de elementos com alto Z visa diminuir a energia de ligação dos eletrões orbitais para que o alvo se desintegre e seja consumido a cada ciclo de cinquenta disparos."
    ],
    "correctIndex": 1,
    "explanation": "A correlação científica correta demonstra que Utiliza-se o tungsténio (Z = 74) devido ao seu alto número atómico que maximiza a travagem dos eletrões e ao seu altíssimo ponto de fusão (3422 °C) que suporta o calor extremo. O domínio destes fundamentos permite ao enfermeiro assegurar a correta radioproteção e a interpretação dos riscos radiológicos.",
    "distractorAnalysis": [
      "Está incorreta: a probabilidade de radiação de travagem é proporcional a Z² do alvo atómico; alvos de alto Z aceleram a deflexão coulombiana e aumentam a taxa de produção de fotões.",
      "Está incorreta: o núcleo atómico tem carga positiva (+Ze) que atrai os eletrões carregados negativamente em vez de os repelir; a atração curva a trajetória do eletrão com emissão de Bremsstrahlung.",
      "Está incorreta: o ânodo metálico opera em vácuo estéril; a seleção de tungsténio é estritamente ditada pela física nuclear-atómica e propriedades térmicas e não por corrosão microbiana."
    ],
    "nursingApplication": "Na mamografia utilizam-se alvos de molibdénio (Z = 42) ou ródio (Z = 45) para gerar Raios X característicos de menor energia (17 a 20 keV), ideais para contrastar os tecidos moles da mama."
  },
  {
    "id": 5090,
    "topicId": 5,
    "question": "Na física das radiações ionizantes e Raios X aplicada ao contexto hospitalar, em relação a 'limite de Duane-Hunt e comprimento de onda mínimo (λ_min)', qual é a fundamentação científica exata?",
    "options": [
      "O limite de Duane-Hunt representa a distância física máxima em metros que um doente pode permanecer afastado do aparelho de raios X sem sofrer contaminação atmosférica permanente.",
      "O valor de λ_min traduz o tempo de vida médio das partículas radioativas contidas no ânodo de tungsténio antes de estas sofrerem decaimento espontâneo para isótopos estáveis de chumbo.",
      "O limite de Duane-Hunt (comprimento de onda mínimo λ_min = hc/e·kVp) define o fotão mais energético possível, gerado quando um eletrão perde 100% da sua energia cinética numa única colisão.",
      "O limite de Duane-Hunt define a espessura milimétrica mínima de chumbo que o biombo da sala deve ter para atenuar as radiações sonoras emitidas pelo gerador de alta frequência."
    ],
    "correctIndex": 2,
    "explanation": "Em física das radiações e imagiologia médica, limite de Duane-Hunt e comprimento de onda mínimo (λ_min) explica-se pelo facto de que o comprimento de onda mais curto (fotão mais energético) possível é atingido quando toda a energia cinética do eletrão é convertida num único fotão: $\\lambda_{min} = \\frac{h \\cdot c}{e \\cdot V}$. Aumentar o kVp diminui o $\\lambda_{min}$ e desloca todo o espetro de emissão para frequências e energias mais elevadas.",
    "distractorAnalysis": [
      "Está incorreta: Duane-Hunt decorre da conservação da energia (h·c/λ_min = e·kVp); o fotão mais energético (menor λ) corresponde à desaceleração total do eletrão num único impacto frontal.",
      "Está incorreta: o limite de Duane-Hunt é um parâmetro quântico do espetro eletromagnético de raios X e não uma distância física métrica de radioproteção ambiental.",
      "Está incorreta: o ânodo de tungsténio é constituído por isótopos estáveis não sujeitos a decaimento radioativo com tempo de meia-vida durante o funcionamento da ampola médica."
    ],
    "nursingApplication": "O enfermeiro compreende que mexer no comando da máquina altera fisicamente o espetro fotónico emitido sobre o corpo da pessoa cuidada."
  },
  {
    "id": 5091,
    "topicId": 5,
    "question": "Durante os cuidados de enfermagem a um doente submetido a procedimentos imagiológicos com radiações, como se aplica na prática o conceito de 'limite de Duane-Hunt e comprimento de onda mínimo (λ_min)'?",
    "options": [
      "O enfermeiro assume que alterar a quilovoltagem modifica apenas o tempo que a lâmpada do colimador permanece acesa na sala de exames, sem exercer qualquer efeito sobre o feixe de raios X.",
      "O enfermeiro deduz que aumentar o kVp no comando elétrico reduz a energia dos fotões emitidos para valores inferiores aos da luz visível monocromática do negatoscópio.",
      "O enfermeiro entende que o limite de Duane-Hunt obriga a equipa a ventilar a sala durante duas horas para permitir a dispersão no ar dos fotões de comprimento de onda mais curto.",
      "O enfermeiro compreende que regular a quilovoltagem altera diretamente a energia máxima dos fotões (reduzindo λ_min), tornando o feixe mais penetrante para avaliar tecidos mais espessos."
    ],
    "correctIndex": 3,
    "explanation": "A aplicação de enfermagem para limite de Duane-Hunt e comprimento de onda mínimo (λ_min) baseia-se no princípio: O enfermeiro compreende que mexer no comando da máquina altera fisicamente o espetro fotónico emitido sobre o corpo da pessoa cuidada. Esta intervenção garante a segurança radiológica do doente e do profissional.",
    "distractorAnalysis": [
      "Está incorreta: o aumento de kVp diminui λ_min (λ_min = 1,24/kVp em nm) e eleva a energia média do feixe, aumentando a capacidade penetrante e diminuindo a dose cutânea relativa.",
      "Está incorreta: o comando de kVp regula a alta tensão aceleradora da ampola, ditando a física de penetração dos raios X e a qualidade intrínseca do exame de diagnóstico.",
      "Está incorreta: os fotões de raios X não permanecem suspensos no ar após o feixe cessar nem exigem tempo de ventilação; deslocam-se à velocidade c e extinguem-se no impacto com a matéria."
    ],
    "nursingApplication": "O enfermeiro compreende que mexer no comando da máquina altera fisicamente o espetro fotónico emitido sobre o corpo da pessoa cuidada."
  },
  {
    "id": 5092,
    "topicId": 5,
    "question": "Um enfermeiro analisa os parâmetros biofísicos e os mecanismos de interação em 'limite de Duane-Hunt e comprimento de onda mínimo (λ_min)'. Qual das seguintes afirmações expressa a correlação científica correta?",
    "options": [
      "Aumentar o valor de kVp diminui o comprimento de onda mínimo (λ_min) e desloca todo o espetro contínuo de emissão para frequências e energias fotónicas médias mais elevadas.",
      "Aumentar o valor de kVp prolonga o comprimento de onda mínimo (λ_min), reduzindo a frequência quântica dos fotões emitidos e tornando o feixe completamente incapaz de penetração tecidual.",
      "A alteração da alta tensão aplicada não modifica o espetro de energias do feixe de raios X, atuando em exclusivo na rotação mecânica das pás da grelha de Potter-Bucky do chassis.",
      "O comprimento de onda mínimo do espetro é rigorosamente independente da voltagem de pico aplicada, dependendo unicamente da espessura da camada de gordura do abdómen do utente."
    ],
    "correctIndex": 0,
    "explanation": "A correlação científica correta demonstra que Aumentar o kVp diminui o $\\lambda_{min}$ e desloca todo o espetro de emissão para frequências e energias mais elevadas. O domínio destes fundamentos permite ao enfermeiro assegurar a correta radioproteção e a interpretação dos riscos radiológicos.",
    "distractorAnalysis": [
      "Está incorreta: pela relação λ_min = hc/(e·kVp), λ_min é inversamente proporcional a kVp; elevar kVp diminui λ_min, expande o espetro para maiores energias e aumenta a área sob a curva.",
      "Está incorreta: a alta tensão (kVp) acelera os eletrões no tubo e determina a qualidade do feixe de radiação primário, não estando acoplada ao mecanismo mecânico da grelha de Bucky.",
      "Está incorreta: o valor de λ_min é determinado na ampola pela diferença de potencial entre cátodo e ânodo, antes mesmo de o feixe interagir com o tecido do utente examinado."
    ],
    "nursingApplication": "O enfermeiro compreende que mexer no comando da máquina altera fisicamente o espetro fotónico emitido sobre o corpo da pessoa cuidada."
  },
  {
    "id": 5093,
    "topicId": 5,
    "question": "Na física das radiações ionizantes e Raios X aplicada ao contexto hospitalar, em relação a 'relevância clínica da fração de radiação de travagem', qual é a fundamentação científica exata?",
    "options": [
      "A emissão de feixes estritamente monocromáticos de energia única é o fator biofísico indispensável para a visualização simultânea de tecidos moles e parênquima pulmonar radiografado.",
      "A radiação de travagem gera um espetro policromático contínuo com ampla gama de energias, permitindo atenuação diferencial em tecidos de diferentes densidades (osso, músculo, gordura e ar).",
      "A heterogeneidade de energias do feixe policromático é um defeito técnico que impede a identificação de fraturas ósseas, forçando a repetição de exames com radiação ultravioleta pura.",
      "O feixe policromático atua uniformizando a densidade ótica do recetor digital, tornando todos os órgãos anatómicos com a mesma tonalidade cinzenta homogénea na película final."
    ],
    "correctIndex": 1,
    "explanation": "Em física das radiações e imagiologia médica, relevância clínica da fração de radiação de travagem explica-se pelo facto de que a radiação de travagem gera uma ampla distribuição de energias que permite a atenuação diferenciada através de vários tipos de tecidos humanos de densidades heterogéneas. Esta heterogeneidade do feixe policromático é aproveitada para a formação da imagem em níveis de cinzento nos detetores digitais.",
    "distractorAnalysis": [
      "Está incorreta: o espetro policromático policromático atravessa as diferentes densidades anatómicas sofrendo absorção e dispersão diferenciadas, criando o mapa de contrastes da imagem.",
      "Está incorreta: tubos clínicos convencionais emitem feixes policromáticos; a ampla gama de fotões permite que componentes moles e duros do corpo atenuem seletivamente o feixe.",
      "Está incorreta: se todos os órgãos atenuassem de forma idêntica, a imagem não conteria qualquer contraste e seria clinicamente inútil para o diagnóstico de enfermagem ou médico."
    ],
    "nursingApplication": "O enfermeiro apoia na imobilização suave do doente durante a aquisição da imagem para evitar artefactos de movimento que degradam o contraste das densidades de travagem."
  },
  {
    "id": 5094,
    "topicId": 5,
    "question": "Durante os cuidados de enfermagem a um doente submetido a procedimentos imagiológicos com radiações, como se aplica na prática o conceito de 'relevância clínica da fração de radiação de travagem'?",
    "options": [
      "O enfermeiro deve orientar o utente a inspirar e expirar rapidamente e sem interrupção durante o disparo do tórax para aumentar a dispersão de fotões através do parênquima pulmonar.",
      "O enfermeiro orienta a colocação de objetos metálicos na zona de incidência do feixe para que estes sirvam de padrão de referência geométrica em todas as radiografias pediátricas.",
      "O enfermeiro apoia na imobilização suave do doente durante a aquisição, prevenindo artefactos de movimento que degradariam a diferenciação subtil de contrastes do feixe policromático.",
      "O enfermeiro afasta o doente do detetor de imagem em pelo menos dois metros para permitir que os fotões secundários de baixa energia sofram recombinação térmica no trajeto aéreo."
    ],
    "correctIndex": 2,
    "explanation": "A aplicação de enfermagem para relevância clínica da fração de radiação de travagem baseia-se no princípio: O enfermeiro apoia na imobilização suave do doente durante a aquisição da imagem para evitar artefactos de movimento que degradam o contraste das densidades de travagem. Esta intervenção garante a segurança radiológica do doente e do profissional.",
    "distractorAnalysis": [
      "Está incorreta: o doente deve realizar apneia inspiratória no exame de tórax; respirar durante o disparo causa desfoque de movimento severo e degrada a resolução da imagem.",
      "Está incorreta: objetos metálicos causam sombras densas e artefactos que ocultam patologias anatómicas subjacentes, devendo ser retirados antes da realização da radiografia.",
      "Está incorreta: o doente deve ficar o mais próximo possível do detetor para minimizar a ampliação geométrica e a penumbra focal, garantindo máxima nitidez radiográfica."
    ],
    "nursingApplication": "O enfermeiro apoia na imobilização suave do doente durante a aquisição da imagem para evitar artefactos de movimento que degradam o contraste das densidades de travagem."
  },
  {
    "id": 5095,
    "topicId": 5,
    "question": "Um enfermeiro analisa os parâmetros biofísicos e os mecanismos de interação em 'relevância clínica da fração de radiação de travagem'. Qual das seguintes afirmações expressa a correlação científica correta?",
    "options": [
      "A formação da imagem médica de raios X baseia-se na emissão radioativa secundária induzida nos tecidos do utente, que continuam a irradiar luz após o término do feixe primário.",
      "A diferenciação de tecidos numa radiografia ocorre porque o ar alveolar absorve cem por cento dos fotões de raios X enquanto o osso cortical transmite a totalidade do feixe incidente.",
      "O contraste da imagem independe das características de absorção do tecido examinado, dependendo em exclusivo do tipo de verniz protetor aplicado na face frontal do chassi digital.",
      "A imagem radiográfica final resulta da atenuação diferencial sofrida pelo feixe policromático ao atravessar tecidos com diferentes números atómicos médios, espessuras e densidades físicas."
    ],
    "correctIndex": 3,
    "explanation": "A correlação científica correta demonstra que Esta heterogeneidade do feixe policromático é aproveitada para a formação da imagem em níveis de cinzento nos detetores digitais. O domínio destes fundamentos permite ao enfermeiro assegurar a correta radioproteção e a interpretação dos riscos radiológicos.",
    "distractorAnalysis": [
      "Está incorreta: a imagem radiográfica é um mapa de transmissão/atenuação de fotões transmitidos e não de emissão radioativa induzida no paciente.",
      "Está incorreta: o ar pulmonar possui baixíssima densidade e quase não atenua os raios X (surge escuro/radiolúcido); o osso denso com cálcio absorve intensamente (surge branco/radiopaco).",
      "Está incorreta: o contraste baseia-se na atenuação exponencial (I = I0·e^(-μx)), que depende do número atómico Z, da densidade física do tecido e da energia dos fotões do feixe."
    ],
    "nursingApplication": "O enfermeiro apoia na imobilização suave do doente durante a aquisição da imagem para evitar artefactos de movimento que degradam o contraste das densidades de travagem."
  },
  {
    "id": 5096,
    "topicId": 5,
    "question": "Na física das radiações ionizantes e Raios X aplicada ao contexto hospitalar, em relação a 'mecanismo biofísico do Efeito Fotoelétrico', qual é a fundamentação científica exata?",
    "options": [
      "No Efeito Fotoelétrico, o fotão de raios X transfere a totalidade da sua energia a um eletrão de uma camada orbital interna, desaparecendo e ejetando esse eletrão como fotoeletrão livre.",
      "No Efeito Fotoelétrico, o fotão de raios X colide elasticamente com o núcleo atómico sem transferir energia, mantendo a sua frequência inalterada após emergir desviado em ângulo reto.",
      "No Efeito Fotoelétrico, a absorção de radiação ionizante provoca a transmutação imediata do átomo de cálcio ósseo num isótopo de radão radioativo gasoso de curta duração.",
      "No Efeito Fotoelétrico, o fotão de raios X funde-se com um positrão do citoplasma celular, gerando dois neutrões secundários que aquecem as moléculas de água circundantes."
    ],
    "correctIndex": 0,
    "explanation": "Em física das radiações e imagiologia médica, mecanismo biofísico do Efeito Fotoelétrico explica-se pelo facto de que o fotão de Raios X colide com um eletrão da camada interna do tecido biológico, transfere toda a sua energia, desaparece completamente (absorção pura) e ejeta o eletrão como fotoeletrão. A probabilidade de ocorrência varia diretamente com o cubo do número atómico do tecido e inversamente com o cubo da energia do fotão ($P \\propto Z^3 / E^3$).",
    "distractorAnalysis": [
      "Está incorreta: no efeito fotoelétrico o fotão incidente desaparece completamente (absorção pura) e o fotoeletrão é ejetado com energia cinética E_cin = E_fotão - E_ligação.",
      "Está incorreta: a colisão elástica com o núcleo sem perda de energia ou ionização denomina-se dispersão coerente (de Rayleigh) e não efeito fotoelétrico.",
      "Está incorreta: o efeito fotoelétrico atua na nuvem eletrónica orbital e não no núcleo atómico, não induzindo reações de transmutação nuclear nem gerando gás radão nos ossos."
    ],
    "nursingApplication": "É o principal responsável pelo excelente contraste radiológico entre o osso ($Z_{médio} \\approx 13,8$) e os tecidos moles circundantes ($Z_{médio} \\approx 7,4$)."
  },
  {
    "id": 5097,
    "topicId": 5,
    "question": "Durante os cuidados de enfermagem a um doente submetido a procedimentos imagiológicos com radiações, como se aplica na prática o conceito de 'mecanismo biofísico do Efeito Fotoelétrico'?",
    "options": [
      "O Efeito Fotoelétrico degrada expressivamente o contraste da imagem radiológica, sendo a principal fonte de radiação difusa e velatura acinzentada detetada nos exames tomográficos.",
      "O Efeito Fotoelétrico é o principal mecanismo biofísico responsável pelo contraste radiográfico, diferenciando o osso do tecido mole e permitindo a ação dos contrastes iodados e baritados.",
      "O Efeito Fotoelétrico manifesta-se com maior intensidade em tecidos com baixo número atómico como os pulmões insuflados, tornando o parênquima pulmonar radiopaco esbranquiçado.",
      "O Efeito Fotoelétrico é o fenómeno através do qual o detetor radiológico emite fotões em direção ao doente para compensar perdas de densidade ótica na exposição manual."
    ],
    "correctIndex": 1,
    "explanation": "A aplicação de enfermagem para mecanismo biofísico do Efeito Fotoelétrico baseia-se no princípio: É o principal responsável pelo excelente contraste radiológico entre o osso ($Z_{médio} \\approx 13,8$) e os tecidos moles circundantes ($Z_{médio} \\approx 7,4$). Esta intervenção garante a segurança radiológica do doente e do profissional.",
    "distractorAnalysis": [
      "Está incorreta: o efeito fotoelétrico remove fotões do feixe primário por absorção total em tecidos com maior Z (como osso e meios de contraste), criando o contraste diagnóstico.",
      "Está incorreta: o fenómeno responsável pelo véu acinzentado e dispersão de radiação secundária é o efeito Compton e não a absorção fotoelétrica.",
      "Está incorreta: o ar pulmonar tem baixo Z efetivo e baixa densidade, apresentando probabilidade fotoelétrica mínima e transmitindo a maioria dos fotões (imagem radiotransparente escura)."
    ],
    "nursingApplication": "É o principal responsável pelo excelente contraste radiológico entre o osso ($Z_{médio} \\approx 13,8$) e os tecidos moles circundantes ($Z_{médio} \\approx 7,4$)."
  },
  {
    "id": 5098,
    "topicId": 5,
    "question": "Um enfermeiro analisa os parâmetros biofísicos e os mecanismos de interação em 'mecanismo biofísico do Efeito Fotoelétrico'. Qual das seguintes afirmações expressa a correlação científica correta?",
    "options": [
      "A probabilidade de ocorrência do Efeito Fotoelétrico é estritamente proporcional à energia do fotão (E³) e inversamente proporcional ao quadrado do número atómico do tecido (1/Z²).",
      "A probabilidade do Efeito Fotoelétrico independe do número atómico ou da energia dos fotões, sendo determinada unicamente pela velocidade de rotação do detetor tomográfico.",
      "A probabilidade de ocorrência do Efeito Fotoelétrico é proporcional ao cubo do número atómico do meio (Z³) e inversamente proporcional ao cubo da energia do fotão incidente (1/E³).",
      "A probabilidade de absorção fotoelétrica aumenta linearmente com a temperatura corporal do utente, cessando se o indivíduo apresentar temperatura axilar inferior a trinta e cinco graus."
    ],
    "correctIndex": 2,
    "explanation": "A correlação científica correta demonstra que A probabilidade de ocorrência varia diretamente com o cubo do número atómico do tecido e inversamente com o cubo da energia do fotão ($P \\propto Z^3 / E^3$). O domínio destes fundamentos permite ao enfermeiro assegurar a correta radioproteção e a interpretação dos riscos radiológicos.",
    "distractorAnalysis": [
      "Está incorreta: a relação física fundamental é P_PE ∝ Z³/E³; isto explica por que razão o osso (Z ≈ 13,8) absorve muito mais do que tecidos moles (Z ≈ 7,4) em baixas energias.",
      "Está incorreta: o efeito fotoelétrico decresce muito rapidamente com o aumento da energia do feixe (1/E³), tornando-se secundário em relação ao Compton para altas energias (>100 keV).",
      "Está incorreta: a absorção atómica fotoelétrica é um processo quântico microscópico totalmente independente da temperatura fisiológica ou de parâmetros mecânicos externos."
    ],
    "nursingApplication": "É o principal responsável pelo excelente contraste radiológico entre o osso ($Z_{médio} \\approx 13,8$) e os tecidos moles circundantes ($Z_{médio} \\approx 7,4$)."
  },
  {
    "id": 5099,
    "topicId": 5,
    "question": "Na física das radiações ionizantes e Raios X aplicada ao contexto hospitalar, em relação a 'mecanismo biofísico do Efeito de Compton (espalhamento Compton)', qual é a fundamentação científica exata?",
    "options": [
      "No Efeito Compton, o fotão de raios X é totalmente absorvido pelo núcleo atómico celular, originando a libertação de dois protões e um neutrão em direção à pele do operador.",
      "No Efeito Compton, os fotões X transformam-se espontaneamente em ondas acústicas transversais que se dissipam no ar sem provocar qualquer ionização atómica adicional.",
      "No Efeito Compton, o eletrão atómico acelerado colide com o filamento de tungsténio do cátodo para restabelecer a corrente elétrica do circuito primário de alta tensão.",
      "No Efeito Compton, um fotão X colide com um eletrão fracamente ligado da camada externa, ejetando-o (eletrão de recuo) e emergindo desviado da trajetória com menor energia."
    ],
    "correctIndex": 3,
    "explanation": "Em física das radiações e imagiologia médica, mecanismo biofísico do Efeito de Compton (espalhamento Compton) explica-se pelo facto de que o fotão de Raios X colide com um eletrão fracamente ligado da camada externa do átomo biológico, ejeta o eletrão e é desviado da sua rota original com menor energia sob a forma de fotão disperso. A probabilidade depende quase exclusivamente da densidade eletrónica do meio e é predominante para energias intermédias e altas de diagnóstico (acima de 70-80 keV).",
    "distractorAnalysis": [
      "Está incorreta: o efeito Compton é uma colisão inelástica fotão-eletrão orbital externo; o fotão não desaparece mas sofre espalhamento angular com redução de frequência (h·f' < h·f).",
      "Está incorreta: o efeito Compton envolve eletrões periféricos e não o núcleo atómico; não há emissão de partículas nucleares como protões ou neutrões em radiodiagnóstico.",
      "Está incorreta: o fotão disperso continua a ser radiação eletromagnética ionizante, capaz de produzir ionizações subsequentes no doente ou na equipa de saúde."
    ],
    "nursingApplication": "Constitui a fonte primária de 'radiação dispersa' difusa na sala de radiologia e a principal causa de exposição ocupacional da equipa cirúrgica e de enfermagem."
  },
  {
    "id": 5100,
    "topicId": 5,
    "question": "Durante os cuidados de enfermagem a um doente submetido a procedimentos imagiológicos com radiações, como se aplica na prática o conceito de 'mecanismo biofísico do Efeito de Compton (espalhamento Compton)'?",
    "options": [
      "O Efeito Compton constitui a principal fonte de radiação dispersa no bloco operatório e sala de exames, representando a maior fonte de exposição ocupacional para a equipa de enfermagem.",
      "O Efeito Compton só ocorre no interior do detetor digital de imagem, não tendo qualquer significado na dosimetria ocupacional dos profissionais que acompanham procedimentos cirúrgicos.",
      "O Efeito Compton melhora consideravelmente o contraste radiográfico e a nitidez das bordas das fraturas ósseas, devendo ser maximizado através do alargamento do colimador de luz.",
      "A radiação resultante do Efeito Compton é totalmente inócua e desprovida de poder ionizante, não justificando o uso de aventais plumbíferos ou protetores cervicais no bloco."
    ],
    "correctIndex": 0,
    "explanation": "A aplicação de enfermagem para mecanismo biofísico do Efeito de Compton (espalhamento Compton) baseia-se no princípio: Constitui a fonte primária de 'radiação dispersa' difusa na sala de radiologia e a principal causa de exposição ocupacional da equipa cirúrgica e de enfermagem. Esta intervenção garante a segurança radiológica do doente e do profissional.",
    "distractorAnalysis": [
      "Está incorreta: os fotões dispersos por Compton que saem do corpo do paciente viajam em todas as direções e formam a radiação de dispersão que atinge os profissionais de saúde.",
      "Está incorreta: o efeito Compton degrada a qualidade da imagem ao produzir véu cinzento difuso de radiação espalhada sobre o sensor, além de expor a equipa cirúrgica.",
      "Está incorreta: a radiação dispersa é ionizante e constitui a maior componente da dose recebida pela equipa; o uso de avental de chumbo, protetor de tiroide e óculos é essencial."
    ],
    "nursingApplication": "Constitui a fonte primária de 'radiação dispersa' difusa na sala de radiologia e a principal causa de exposição ocupacional da equipa cirúrgica e de enfermagem."
  },
  {
    "id": 5101,
    "topicId": 5,
    "question": "Um enfermeiro analisa os parâmetros biofísicos e os mecanismos de interação em 'mecanismo biofísico do Efeito de Compton (espalhamento Compton)'. Qual das seguintes afirmações expressa a correlação científica correta?",
    "options": [
      "A ocorrência do Efeito Compton é estritamente proporcional ao cubo do número atómico Z do tecido, cessando por completo em estruturas biológicas moles como os músculos ou parênquima pulmonar.",
      "A probabilidade de dispersão Compton depende primariamente da densidade eletrónica do meio e é quase independente do número atómico Z, predominando em energias diagnósticas médias e altas.",
      "O Efeito Compton ocorre com probabilidade inversamente proporcional à espessura física do tecido atravessado, sendo expressivo apenas em biópsias milimétricas examinadas ao microscópio.",
      "A taxa de dispersão Compton eleva-se linearmente com a taxa de filtração glomerular renal do doente, variando em função do estado de hidratação volémica periférica avaliado pela enfermagem."
    ],
    "correctIndex": 1,
    "explanation": "A correlação científica correta demonstra que A probabilidade depende quase exclusivamente da densidade eletrónica do meio e é predominante para energias intermédias e altas de diagnóstico (acima de 70-80 keV). O domínio destes fundamentos permite ao enfermeiro assegurar a correta radioproteção e a interpretação dos riscos radiológicos.",
    "distractorAnalysis": [
      "Está incorreta: a dispersão Compton quase não depende de Z porque a maioria dos elementos biológicos possui densidade eletrónica semelhante (~3·10²³ eletrões/g); o efeito fotoelétrico é que depende de Z³.",
      "Está incorreta: o efeito Compton aumenta com o volume e espessura do tecido irradiado, pois maior massa de tecido contém maior número total de eletrões para interagir com os fotões.",
      "Está incorreta: a interação física de Compton decorre a nível atómico nos tecidos durante o feixe e independe da função excretora renal fisiológica do doente."
    ],
    "nursingApplication": "Constitui a fonte primária de 'radiação dispersa' difusa na sala de radiologia e a principal causa de exposição ocupacional da equipa cirúrgica e de enfermagem."
  },
  {
    "id": 5102,
    "topicId": 5,
    "question": "Na física das radiações ionizantes e Raios X aplicada ao contexto hospitalar, em relação a 'dependência em Z³ no Efeito Fotoelétrico e contraste ósseo', qual é a fundamentação científica exata?",
    "options": [
      "O osso atenua mais os raios X porque as trabéculas ósseas refletem a totalidade dos fotões incidentes como espelhos metálicos convexos, impedindo qualquer penetração até ao canal medular.",
      "Os tecidos moles absorvem mais radiação ionizante do que os ossos em virtude do seu elevado teor aquoso, o que faz com que a musculatura surja totalmente branca e radiopaca nas radiografias.",
      "Como o cálcio ósseo tem número atómico efetivo muito superior ao dos tecidos moles (Z≈13,8 vs Z≈7,4), a absorção fotoelétrica é cerca de seis a oito vezes maior no osso, gerando radiopacidade.",
      "A diferenciação entre osso e músculo na radiografia analógica ou digital depende unicamente da velocidade angular com que a mesa de exames roda durante o disparo do tubo gerador."
    ],
    "correctIndex": 2,
    "explanation": "Em física das radiações e imagiologia médica, dependência em Z³ no Efeito Fotoelétrico e contraste ósseo explica-se pelo facto de que como o cálcio e o fósforo dos ossos possuem $Z$ muito mais elevado do que o hidrogénio, carbono e oxigénio dos tecidos moles, a absorção fotoelétrica no osso é cerca de 6 a 8 vezes superior. Os fotões são quase todos absorvidos pelo osso e não chegam ao detetor, criando as áreas brancas (radiopacas) na radiografia que evidenciam fraturas com nitidez.",
    "distractorAnalysis": [
      "Está incorreta: pela dependência em Z³ da absorção fotoelétrica, (13,8/7,4)³ ≈ 6,5; o osso absorve muito mais fotões por unidade de massa do que os tecidos moles, projetando-se branco (radiopaco).",
      "Está incorreta: tecidos biológicos não funcionam como espelhos refletores; a atenuação óssea decorre de absorção fotoelétrica e densidade física superior.",
      "Está incorreta: a água tem baixo número atómico efetivo (Z≈7,4) e densidade menor que o osso mineralizado (Z≈13,8), atenuando menos o feixe e surgindo em tons de cinzento."
    ],
    "nursingApplication": "O enfermeiro analisa o relatório radiográfico sabendo que fraturas osteoporóticas com perda de cálcio exibem menor contraste fotoelétrico por diminuição da densidade mineral efetiva."
  },
  {
    "id": 5103,
    "topicId": 5,
    "question": "Durante os cuidados de enfermagem a um doente submetido a procedimentos imagiológicos com radiações, como se aplica na prática o conceito de 'dependência em Z³ no Efeito Fotoelétrico e contraste ósseo'?",
    "options": [
      "O enfermeiro deduz que uma fratura com desvio produz uma mancha branca de radiopacidade extrema devido à fuga imediata de oxigénio gasoso a partir do canal medular para o foco lesional.",
      "O enfermeiro assume que a consolidação óssea normal se manifesta pelo desaparecimento progressivo da radiopacidade do calo ósseo, tornando o foco de fratura totalmente transparente aos raios X.",
      "O enfermeiro orienta a colocação de talas gessadas antes da radiografia diagnóstica inicial para aumentar a transparência dos tecidos moles e facilitar a visualização de fissuras finas.",
      "O enfermeiro analisa o relatório radiográfico sabendo que fraturas ósseas recentes surgem como linhas de radiotransparência (escuras) decorrentes da descontinuidade da matriz mineralizada."
    ],
    "correctIndex": 3,
    "explanation": "A aplicação de enfermagem para dependência em Z³ no Efeito Fotoelétrico e contraste ósseo baseia-se no princípio: O enfermeiro analisa o relatório radiográfico sabendo que fraturas osteoporóticas com perda de cálcio exibem menor contraste fotoelétrico por diminuição da densidade mineral efetiva. Esta intervenção garante a segurança radiológica do doente e do profissional.",
    "distractorAnalysis": [
      "Está incorreta: na linha de fratura há interrupção do osso denso (preenchida por sangue/hematoma de menor Z e densidade), permitindo maior passagem de fotões, surgindo mais escura.",
      "Está incorreta: hematoma de fratura tem menor atenuação do que o osso cortical íntegro; não há produção de oxigénio gasoso no foco de fratura a menos que haja infeção por anaeróbios gasosos.",
      "Está incorreta: a consolidação produz calo ósseo mineralizado com depósito progressivo de sais de cálcio, tornando a região progressivamente mais radiopaca (branca) com o tempo."
    ],
    "nursingApplication": "O enfermeiro analisa o relatório radiográfico sabendo que fraturas osteoporóticas com perda de cálcio exibem menor contraste fotoelétrico por diminuição da densidade mineral efetiva."
  },
  {
    "id": 5104,
    "topicId": 5,
    "question": "Um enfermeiro analisa os parâmetros biofísicos e os mecanismos de interação em 'dependência em Z³ no Efeito Fotoelétrico e contraste ósseo'. Qual das seguintes afirmações expressa a correlação científica correta?",
    "options": [
      "A elevada absorção fotoelétrica no osso cortical impede que a maioria dos fotões atinja o sensor digital sob a estrutura, projetando uma sombra anatómica clara e bem delimitada na imagem.",
      "A interação fotoelétrica no osso transforma os fotões incidentes em eletrões de condução estática que sensibilizam diretamente os circuitos semicondutores da placa detetora externa.",
      "A absorção fotoelétrica ocorre exclusivamente na medula óssea hematopoiética, atravessando os fotões a camada cortical periférica sem qualquer diminuição da sua fluência original.",
      "O número atómico dos tecidos só influencia a transmissão de raios X em feixes de radioterapia de alta energia (megaeletrões-volt), sendo irrelevante na gama radiológica diagnóstica."
    ],
    "correctIndex": 0,
    "explanation": "A correlação científica correta demonstra que Os fotões são quase todos absorvidos pelo osso e não chegam ao detetor, criando as áreas brancas (radiopacas) na radiografia que evidenciam fraturas com nitidez. O domínio destes fundamentos permite ao enfermeiro assegurar a correta radioproteção e a interpretação dos riscos radiológicos.",
    "distractorAnalysis": [
      "Está incorreta: os fotões absorvidos pelo osso não chegam ao recetor; menor número de fotões emergentes traduz-se em menor exposição do detetor, originando áreas claras (radiopacas).",
      "Está incorreta: fotoeletrões ejetados no osso têm alcance microscópico (<0,1 mm) no tecido e dissipam-se localmente sem alcançar o detetor de imagem situado atrás do paciente.",
      "Está incorreta: a cortical óssea é rica em hidroxiapatite de cálcio com alta densidade e alto Z, sendo o principal responsável pela acentuada absorção fotoelétrica dos raios X."
    ],
    "nursingApplication": "O enfermeiro analisa o relatório radiográfico sabendo que fraturas osteoporóticas com perda de cálcio exibem menor contraste fotoelétrico por diminuição da densidade mineral efetiva."
  },
  {
    "id": 5105,
    "topicId": 5,
    "question": "Na física das radiações ionizantes e Raios X aplicada ao contexto hospitalar, em relação a 'grelha antidifusora (potter-bucky) e eliminação da dispersão Compton', qual é a fundamentação científica exata?",
    "options": [
      "A grelha antidifusora é uma malha metálica ligada à terra que atrai os eletrões estáticos acumulados na pele do doente para prevenir descargas galvânicas durante a exposição ao feixe.",
      "A grelha antidifusora é um dispositivo com lamelas de chumbo intercaladas que absorve fotões dispersos oblíquos por efeito Compton, melhorando o contraste e a nitidez da imagem médica.",
      "A grelha antidifusora é uma barreira de vidro plumbífero colocada entre o tubo e o doente com a finalidade de acelerar os fotões primários e diminuir o tempo necessário de exposição.",
      "A grelha antidifusora funciona como um filtro ótico polarizador que alinha o campo elétrico dos fotões X em rotações helicoidais para anular a produção de calor nos tecidos biológicos."
    ],
    "correctIndex": 1,
    "explanation": "Em física das radiações e imagiologia médica, grelha antidifusora (potter-bucky) e eliminação da dispersão Compton explica-se pelo facto de que uma grelha de finas lamelas de chumbo colocada entre o doente e o detetor de imagem que absorve os fotões Compton que viajam em trajetórias oblíquas dispersas. Permite apenas a passagem dos fotões primários que viajaram em linha reta da fonte, melhorando drasticamente o contraste e nitidez da imagem em partes espessas do corpo.",
    "distractorAnalysis": [
      "Está incorreta: a grelha de Potter-Bucky é posicionada entre o paciente e o detetor; as suas lamelas de chumbo barram os fotões que saem em trajetórias oblíquas (scatter).",
      "Está incorreta: a grelha atua sobre a radiação eletromagnética dispersa por efeito Compton e não sobre cargas eletrostáticas cutâneas do paciente.",
      "Está incorreta: a grelha não acelera fotões (a radiação propaga-se à velocidade c) nem fica entre o tubo e o doente, mas sim atrás do doente antes do detetor de imagem."
    ],
    "nursingApplication": "O enfermeiro sabe que o uso de grelha exige um aumento modesto na dose de radiação administrada ao doente para compensar os fotões absorvidos pelas lamelas de chumbo."
  },
  {
    "id": 5106,
    "topicId": 5,
    "question": "Durante os cuidados de enfermagem a um doente submetido a procedimentos imagiológicos com radiações, como se aplica na prática o conceito de 'grelha antidifusora (potter-bucky) e eliminação da dispersão Compton'?",
    "options": [
      "A utilização da grelha de Potter-Bucky permite reduzir o valor de mAs para metade sem comprometer o sinal útil detetado, diminuindo expressivamente a dose cutânea entregue ao doente.",
      "O enfermeiro sabe que a grelha antidifusora é aplicada rotineiramente em radiografias de extremidades finas como dedos e punhos pediátricos para evitar sobredosagem da pele.",
      "O uso da grelha antidifusora exige um aumento na técnica de exposição (fator de Bucky), elevando a dose de radiação absorvida pelo utente para compensar a absorção de radiação primária.",
      "A grelha antidifusora elimina totalmente a dispersão de radiação na sala, permitindo ao enfermeiro prescindir do afastamento e da blindagem durante procedimentos cirúrgicos com escopia."
    ],
    "correctIndex": 2,
    "explanation": "A aplicação de enfermagem para grelha antidifusora (potter-bucky) e eliminação da dispersão Compton baseia-se no princípio: O enfermeiro sabe que o uso de grelha exige um aumento modesto na dose de radiação administrada ao doente para compensar os fotões absorvidos pelas lamelas de chumbo. Esta intervenção garante a segurança radiológica do doente e do profissional.",
    "distractorAnalysis": [
      "Está incorreta: as lamelas de chumbo absorvem não só a radiação dispersa mas também uma fração dos fotões primários retos; o fator de Bucky (tipicamente 2 a 5) exige maior mAs e maior dose.",
      "Está incorreta: em partes anatómicas finas (<10-12 cm), a dispersão Compton é reduzida e o uso de grelha não se justifica, pois aumentaria desnecessariamente a dose no paciente.",
      "Está incorreta: a grelha protege apenas o detetor de imagem contra radiação dispersa; a dispersão lateral que atinge os profissionais de saúde não é eliminada pela grelha de Bucky."
    ],
    "nursingApplication": "O enfermeiro sabe que o uso de grelha exige um aumento modesto na dose de radiação administrada ao doente para compensar os fotões absorvidos pelas lamelas de chumbo."
  },
  {
    "id": 5107,
    "topicId": 5,
    "question": "Um enfermeiro analisa os parâmetros biofísicos e os mecanismos de interação em 'grelha antidifusora (potter-bucky) e eliminação da dispersão Compton'. Qual das seguintes afirmações expressa a correlação científica correta?",
    "options": [
      "A grelha antidifusora converte os fotões dispersos de baixa energia em fotões primários de alta penetração através de ressonância paramagnética nas tiras intermediárias de alumínio.",
      "A eficácia da grelha antidifusora é diretamente proporcional à velocidade com que as lâminas de chumbo rodam em torno do eixo transversal do paciente durante o exame radiológico.",
      "As lamelas da grelha atuam armazenando a radiação espalhada sob a forma de radioatividade residual que é descarregada por indução eletrostática no final do dia de trabalho.",
      "A grelha antidifusora permite a passagem preferencial dos fotões que viajaram em linha reta a partir do foco emissor, bloqueando seletivamente os fotões que mudaram de direção por Compton."
    ],
    "correctIndex": 3,
    "explanation": "A correlação científica correta demonstra que Permite apenas a passagem dos fotões primários que viajaram em linha reta da fonte, melhorando drasticamente o contraste e nitidez da imagem em partes espessas do corpo. O domínio destes fundamentos permite ao enfermeiro assegurar a correta radioproteção e a interpretação dos riscos radiológicos.",
    "distractorAnalysis": [
      "Está incorreta: a grelha utiliza geometria linear de colimação angular; os fotões retos passam entre as lamelas e os oblíquos colidem com o chumbo e são atenuados.",
      "Está incorreta: materiais passivos não aumentam a energia de fotões dispersos nem revertem a dispersão Compton; o espalhamento Compton é um processo termodinamicamente irreversível.",
      "Está incorreta: a grelha antidifusora oscilante (Bucky) move-se linearmente apenas alguns milímetros para esbater a sombra das lamelas na imagem, não rodando em torno do paciente."
    ],
    "nursingApplication": "O enfermeiro sabe que o uso de grelha exige um aumento modesto na dose de radiação administrada ao doente para compensar os fotões absorvidos pelas lamelas de chumbo."
  },
  {
    "id": 5108,
    "topicId": 5,
    "question": "Na física das radiações ionizantes e Raios X aplicada ao contexto hospitalar, em relação a 'radiação dispersa e segurança da equipa de enfermagem em bloco operatório', qual é a fundamentação científica exata?",
    "options": [
      "Durante procedimentos fluoroscópicos no bloco operatório, a maior parte da radiação que atinge a equipa de enfermagem provém do espalhamento Compton gerado no próprio corpo do doente.",
      "A radiação dispersa que atinge os profissionais no bloco resulta exclusivamente da reflexão ótica dos fotões nas superfícies metálicas brilhantes dos instrumentais cirúrgicos do campo.",
      "A dispersão Compton na sala operatória cessa por completo se o feixe de fluoroscopia for direcionado com o tubo emissor localizado na parte superior e o detetor sob a mesa cirúrgica.",
      "A radiação secundária gerada no doente é constituída por neutrões de baixa energia que atravessam livremente os aventais de chumbo convencionais utilizados pelos profissionais."
    ],
    "correctIndex": 0,
    "explanation": "Em física das radiações e imagiologia médica, radiação dispersa e segurança da equipa de enfermagem em bloco operatório explica-se pelo facto de que durante cirurgias ortopédicas ou hemodinâmica com fluoroscopia contínua (arco em C), a maior parte da radiação que atinge o enfermeiro provém do espalhamento Compton dentro do próprio corpo do doente. O corpo do doente atua fisicamente como uma fonte secundária que dispersa radiação em todas as direções da sala de operações.",
    "distractorAnalysis": [
      "Está incorreta: o corpo do paciente é a fonte primária de radiação dispersa (scatter) no bloco; os instrumentais metálicos atenuam o feixe e produzem dispersão negligenciável.",
      "Está incorreta: posicionar o tubo emissor acima da mesa cirúrgica aumenta dramaticamente a dispersão para a cabeça, olhos e tiroide da equipa; o tubo deve ficar sob a mesa.",
      "Está incorreta: a radiação dispersa em fluoroscopia diagnóstica é eletromagnética (fotões X secundários) e é eficientemente atenuada por aventais plumbíferos de 0,35-0,5 mm Pb."
    ],
    "nursingApplication": "O enfermeiro instrumentista e circulante afasta-se pelo menos 2 metros do tubo e do doente durante o disparo do arco em C e utiliza rigorosamente o avental plúmbeo de proteção."
  },
  {
    "id": 5109,
    "topicId": 5,
    "question": "Durante os cuidados de enfermagem a um doente submetido a procedimentos imagiológicos com radiações, como se aplica na prática o conceito de 'radiação dispersa e segurança da equipa de enfermagem em bloco operatório'?",
    "options": [
      "O enfermeiro deve aproximar-se da cabeceira do utente durante o disparo para que o seu tronco sirva de barreira de blindagem física e proteja a tiroide do doente sob sedação profunda.",
      "O enfermeiro afasta-se pelo menos dois metros da mesa de operações sempre que a sua intervenção direta no campo não for necessária, tirando partido da Lei do Inverso do Quadrado da Distância.",
      "O enfermeiro afasta-se para junto da porta do bloco mas remove previamente o avental de chumbo para evitar o desgaste ergonómico das articulações da coluna lombo-sagrada.",
      "O enfermeiro orienta a equipa a desativar a colimação do arco em C durante intervenções vasculares complexas para dispersar a radiação uniformemente por toda a sala operatória."
    ],
    "correctIndex": 1,
    "explanation": "A aplicação de enfermagem para radiação dispersa e segurança da equipa de enfermagem em bloco operatório baseia-se no princípio: O enfermeiro instrumentista e circulante afasta-se pelo menos 2 metros do tubo e do doente durante o disparo do arco em C e utiliza rigorosamente o avental plúmbeo de proteção. Esta intervenção garante a segurança radiológica do doente e do profissional.",
    "distractorAnalysis": [
      "Está incorreta: a lei do inverso do quadrado (I ∝ 1/d²) dita que duplicar a distância reduz a taxa de dose para 25%; a dois metros a exposição é residual comparada com a proximidade do campo.",
      "Está incorreta: o profissional nunca deve utilizar o seu próprio corpo como blindagem para o paciente; a radioproteção exige redução da dose de todos segundo o princípio ALARA.",
      "Está incorreta: mesmo a dois metros de distância, enquanto a fluoroscopia estiver ativa no bloco operatório, a equipa deve manter o equipamento de proteção individual plumbífero colocado."
    ],
    "nursingApplication": "O enfermeiro instrumentista e circulante afasta-se pelo menos 2 metros do tubo e do doente durante o disparo do arco em C e utiliza rigorosamente o avental plúmbeo de proteção."
  },
  {
    "id": 5110,
    "topicId": 5,
    "question": "Um enfermeiro analisa os parâmetros biofísicos e os mecanismos de interação em 'radiação dispersa e segurança da equipa de enfermagem em bloco operatório'. Qual das seguintes afirmações expressa a correlação científica correta?",
    "options": [
      "O corpo do utente absorve cem por cento dos fotões incidentes sem emitir qualquer radiação secundária para o ambiente, tornando o bloco operatório totalmente isento de radiação fora do feixe útil.",
      "A radiação dispersa propaga-se exclusivamente em linha reta no mesmo sentido do feixe primário, não atingindo os profissionais posicionados lateralmente à mesa de exames cirúrgicos.",
      "O corpo do utente atua como uma fonte volumétrica secundária de radiação dispersa isotrópica em todas as direções espaciais, justificando a utilização rigorosa de EPIs plumbíferos pela equipa.",
      "A quantidade de radiação dispersa emitida pelo paciente é independente do tamanho do campo de colimação e da espessura corporal do indivíduo submetido ao procedimento intervencional."
    ],
    "correctIndex": 2,
    "explanation": "A correlação científica correta demonstra que O corpo do doente atua fisicamente como uma fonte secundária que dispersa radiação em todas as direções da sala de operações. O domínio destes fundamentos permite ao enfermeiro assegurar a correta radioproteção e a interpretação dos riscos radiológicos.",
    "distractorAnalysis": [
      "Está incorreta: os fotões dispersos por efeito Compton saem em todas as direções angulares (com pico em retrodispersão na entrada do feixe), irradiando a equipa ao redor da mesa.",
      "Está incorreta: a dispersão lateral e retrógrada atinge precisamente quem está ao lado da marquesa cirúrgica (cirurgião e enfermeiro instrumentista ou circulante).",
      "Está incorreta: a taxa de radiação dispersa é diretamente proporcional à área do campo colimado e ao volume de tecido irradiado; colimar o feixe reduz a dispersão para a equipa."
    ],
    "nursingApplication": "O enfermeiro instrumentista e circulante afasta-se pelo menos 2 metros do tubo e do doente durante o disparo do arco em C e utiliza rigorosamente o avental plúmbeo de proteção."
  },
  {
    "id": 5111,
    "topicId": 5,
    "question": "Na física das radiações ionizantes e Raios X aplicada ao contexto hospitalar, em relação a 'conceito de radiopacidade vs radiotransparência', qual é a fundamentação científica exata?",
    "options": [
      "Estruturas ósseas surgem escuras na película radiográfica por absorverem menos radiação do que o ar alveolar dos pulmões, o qual retém os fotões por atração magnética intrínseca.",
      "A radiopacidade traduz a capacidade de um tecido vivo emitir fotões de luz visível quando excitado por raios X, iluminando as zonas densas do sensor digital de trás para a frente.",
      "Todos os órgãos abdominais apresentam a mesma radiopacidade nativa porque o teor lipídico subcutâneo anula a atenuação fotoelétrica em todas as quilovoltagens clínicas diagnósticas.",
      "Estruturas com alto número atómico e densidade (osso e metal) atenuam fortemente os raios X, surgindo brancas (radiopacas); estruturas pouco densas (ar) deixam passar fotões, surgindo pretas (radiolúcidas)."
    ],
    "correctIndex": 3,
    "explanation": "Em física das radiações e imagiologia médica, conceito de radiopacidade vs radiotransparência explica-se pelo facto de que estruturas de alta densidade e alto $Z$ (como ossos e metais) atenuam fortemente os Raios X, surgindo brancas ou claras na radiografia (radiopacas); estruturas de baixa densidade (como o ar nos pulmões) deixam passar os fotões, surgindo pretas (radiotransparentes). Os tecidos moles (músculos, coração, fígado) e a gordura apresentam tons intermédios de cinzento radiológico.",
    "distractorAnalysis": [
      "Está incorreta: osso atenua fortemente e surge branco (radiopaco); tecidos aéreos como os pulmões quase não atenuam, transmitindo a maioria dos fotões que enegrecem o detetor (radiolúcidos).",
      "Está incorreta: o ar não retém fotões magneticamente; o ar atmosférico e pulmonar é de baixíssima densidade (~0,001 g/cm³), oferecendo mínima atenuação aos raios X.",
      "Está incorreta: os diferentes órgãos (fígado, rins, músculo, gordura peritoneal) têm densidades e teores hídricos distintos que produzem tonalidades intermédias de cinzento na imagem."
    ],
    "nursingApplication": "O enfermeiro reconhece num raio-X de tórax normal a hipertransparência bilateral dos campos pulmonares e a opacidade branca da silhueta cardíaca e gradil costal."
  },
  {
    "id": 5112,
    "topicId": 5,
    "question": "Durante os cuidados de enfermagem a um doente submetido a procedimentos imagiológicos com radiações, como se aplica na prática o conceito de 'conceito de radiopacidade vs radiotransparência'?",
    "options": [
      "O enfermeiro identifica no raio-X de tórax a radiotransparência pulmonar normal (escura) e reconhece que condensações pneumónicas ou derrames pleurais surgem como opacidades radiopacas (claras).",
      "O enfermeiro considera que um derrame pleural volumoso deve manifestar-se como uma grande área de hipertransparência escura brilhante no hemitórax afetado pelo acúmulo de líquido.",
      "O enfermeiro interpreta um pneumotórax hipertensivo como uma zona densamente radiopaca branca devido à acumulação de pressão de gás comprimido no espaço intrapleural.",
      "O enfermeiro assume que a silhueta cardiovascular normal de um adulto jovem deve ser invisível na radiografia de tórax por ter a mesma densidade física exata do ar brônquico."
    ],
    "correctIndex": 0,
    "explanation": "A aplicação de enfermagem para conceito de radiopacidade vs radiotransparência baseia-se no princípio: O enfermeiro reconhece num raio-X de tórax normal a hipertransparência bilateral dos campos pulmonares e a opacidade branca da silhueta cardíaca e gradil costal. Esta intervenção garante a segurança radiológica do doente e do profissional.",
    "distractorAnalysis": [
      "Está incorreta: líquido pleural (água, sangue ou exsudado) tem densidade muito superior à do ar pulmonar, atenuando mais o feixe e surgindo radiopaco (branco) com apagamento dos seios costofrénicos.",
      "Está incorreta: ar no espaço pleural (pneumotórax) atenua minimamente a radiação e não contém vasos sanguíneos, surgindo hipertransparente (área preta avascular) e não branca radiopaca.",
      "Está incorreta: o coração é preenchido por sangue e músculo cardíaco (densidade aquosa), atenuando mais do que o parênquima pulmonar aerado, delimitando a silhueta cardíaca nítida."
    ],
    "nursingApplication": "O enfermeiro reconhece num raio-X de tórax normal a hipertransparência bilateral dos campos pulmonares e a opacidade branca da silhueta cardíaca e gradil costal."
  },
  {
    "id": 5113,
    "topicId": 5,
    "question": "Um enfermeiro analisa os parâmetros biofísicos e os mecanismos de interação em 'conceito de radiopacidade vs radiotransparência'. Qual das seguintes afirmações expressa a correlação científica correta?",
    "options": [
      "O tecido muscular esquelético atenua a totalidade dos fotões incidentes, surgindo com a mesma radiopacidade absoluta das próteses de titânio ou ligas metálicas de osteossíntese.",
      "Os tecidos moles (músculo e vísceras parenquimatosas) e a gordura apresentam densidades radiológicas intermediárias, permitindo a sua delimitação mútua quando existe interfaces gordurosas de separação.",
      "O tecido adiposo subcutâneo tem densidade superior à do osso cortical devido à sua riqueza em colesterol cristalizado, projetando-se branco intenso em radiografias convencionais.",
      "A diferenciação anatómica na radiografia digital independe dos contrastes de densidade tecidual, sendo reconstruída unicamente por estimativa probabilística de inteligência artificial."
    ],
    "correctIndex": 1,
    "explanation": "A correlação científica correta demonstra que Os tecidos moles (músculos, coração, fígado) e a gordura apresentam tons intermédios de cinzento radiológico. O domínio destes fundamentos permite ao enfermeiro assegurar a correta radioproteção e a interpretação dos riscos radiológicos.",
    "distractorAnalysis": [
      "Está incorreta: tecidos moles são permeáveis aos raios X diagnósticos; metais possuem densidade (4 a 8 g/cm³) e Z muito mais elevados, surgindo muito mais brancos do que músculo.",
      "Está incorreta: a gordura tem menor densidade física (~0,9 g/cm³) e menor Z efetivo do que o músculo (~1,04 g/cm³) e muito menor do que o osso (~1,85 g/cm³), sendo mais radiotransparente.",
      "Está incorreta: o contraste baseia-se em diferenças físicas reais de atenuação do feixe de raios X transmitido e não em imagens inventadas por computador."
    ],
    "nursingApplication": "O enfermeiro reconhece num raio-X de tórax normal a hipertransparência bilateral dos campos pulmonares e a opacidade branca da silhueta cardíaca e gradil costal."
  },
  {
    "id": 5114,
    "topicId": 5,
    "question": "Na física das radiações ionizantes e Raios X aplicada ao contexto hospitalar, em relação a 'meios de contraste iodados hidrossolúveis em angiografia e TC', qual é a fundamentação científica exata?",
    "options": [
      "O iodo é utilizado em imagiologia por ser um emissor natural contínuo de radiação beta negativa que sensibiliza os cristais cintiladores do equipamento de tomografia computorizada.",
      "As moléculas de contraste iodado atuam emitindo ultrassons de alta frequência que entram em ressonância mecânica com os fotões X transmitidos através do lúmen das artérias coronárias.",
      "O iodo possui número atómico elevado (Z = 53) e uma energia de ligação da camada K de 33,2 keV que coincide favoravelmente com o espetro de energias diagnósticas, maximizando o efeito fotoelétrico.",
      "O iodo apresenta número atómico idêntico ao do hidrogénio tecidual (Z = 1), o que permite a sua diluição homogénea no plasma sem alterar a densidade ótica do sangue circulante."
    ],
    "correctIndex": 2,
    "explanation": "Em física das radiações e imagiologia médica, meios de contraste iodados hidrossolúveis em angiografia e TC explica-se pelo facto de que o iodo possui um elevado número atómico (Z = 53) e uma energia de ligação da camada K de 33,2 keV que coincide idealmente com o espetro diagnóstico. Quando injetado por via endovenosa, preenche o lúmen dos vasos e órgãos irrigados, tornando-os intensamente radiopacos e opacos aos Raios X.",
    "distractorAnalysis": [
      "Está incorreta: compostos de iodo não são radioativos na radiologia diagnóstica (utiliza-se o isótopo estável I-127); o contraste radiológico decorre da elevada atenuação fotoelétrica (Z=53).",
      "Está incorreta: os meios de contraste radiológicos não emitem ultrassons; a opacificação vascular decorre da absorção fotoelétrica seletiva dos raios X no lúmen do vaso.",
      "Está incorreta: o iodo tem Z = 53 (muito superior ao hidrogénio Z = 1); esta disparidade em Z³ confere a enorme radiopacidade necessária para delinear a árvore vascular na angiografia."
    ],
    "nursingApplication": "O enfermeiro administra o contraste iodado por cateter venoso periférico calibroso (18G ou 20G) com bomba injetora de alta pressão, vigiando a permeabilidade da veia para prevenir extravasamentos."
  },
  {
    "id": 5115,
    "topicId": 5,
    "question": "Durante os cuidados de enfermagem a um doente submetido a procedimentos imagiológicos com radiações, como se aplica na prática o conceito de 'meios de contraste iodados hidrossolúveis em angiografia e TC'?",
    "options": [
      "O enfermeiro deve instruir o doente a conter a respiração durante dez minutos após a injeção do contraste para permitir que as moléculas de iodo se fixem na matriz óssea periférica.",
      "O enfermeiro administra o contraste iodado por via subcutânea na região glútea para assegurar uma absorção sistémica lenta e gradual ao longo de vinte e quatro horas de exame.",
      "O enfermeiro dispensa a vigilância pós-administração de contraste em doentes com antecedentes de atopia, assumindo que as formulações não-iónicas modernas são totalmente isentas de riscos.",
      "O enfermeiro administra o contraste iodado por cateter venoso periférico calibroso adequado e monitoriza continuamente sinais de reação anafilactóide ou extravasamento tecidual."
    ],
    "correctIndex": 3,
    "explanation": "A aplicação de enfermagem para meios de contraste iodados hidrossolúveis em angiografia e TC baseia-se no princípio: O enfermeiro administra o contraste iodado por cateter venoso periférico calibroso (18G ou 20G) com bomba injetora de alta pressão, vigiando a permeabilidade da veia para prevenir extravasamentos. Esta intervenção garante a segurança radiológica do doente e do profissional.",
    "distractorAnalysis": [
      "Está incorreta: em exames com injeção automática rápida (2 a 5 mL/s), é imperativo cateter venoso de calibre adequado (18G ou 20G) e teste de refluxo venoso para evitar extravasamento grave.",
      "Está incorreta: o contraste iodado circula em segundos pela circulação vascular; reações alérgicas ou extravasamento ocorrem nos minutos imediatos, exigindo vigilância ativa.",
      "Está incorreta: contrastes endovenosos não são administrados por via subcutânea; mesmo formulações não-iónicas e de baixa osmolalidade acarretam risco de reações anafilactóides."
    ],
    "nursingApplication": "O enfermeiro administra o contraste iodado por cateter venoso periférico calibroso (18G ou 20G) com bomba injetora de alta pressão, vigiando a permeabilidade da veia para prevenir extravasamentos."
  },
  {
    "id": 5116,
    "topicId": 5,
    "question": "Um enfermeiro analisa os parâmetros biofísicos e os mecanismos de interação em 'meios de contraste iodados hidrossolúveis em angiografia e TC'. Qual das seguintes afirmações expressa a correlação científica correta?",
    "options": [
      "Quando injetado por via intravascular, o contraste iodado preenche o lúmen dos vasos e o interstício de órgãos vascularizados, permitindo evidenciar lesões hipervasculares e perfusão tecidual.",
      "O contraste iodado administrado por via venosa precipita instantaneamente nas paredes arteriais formando uma placa metálica sólida e permanente que facilita a visualização ecográfica.",
      "A passagem do contraste pelos capilares renais provoca a calcificação imediata do córtex renal, gerando uma imagem de nefrografia permanente sem necessidade de eliminação urinária.",
      "O contraste iodado destina-se exclusivamente a alterar o pH plasmático para induzir fluorescência endógena na corrente sanguínea detetável por câmaras de vídeo no bloco operatório."
    ],
    "correctIndex": 0,
    "explanation": "A correlação científica correta demonstra que Quando injetado por via endovenosa, preenche o lúmen dos vasos e órgãos irrigados, tornando-os intensamente radiopacos e opacos aos Raios X. O domínio destes fundamentos permite ao enfermeiro assegurar a correta radioproteção e a interpretação dos riscos radiológicos.",
    "distractorAnalysis": [
      "Está incorreta: o contraste iodado hidrossolúvel não precipita em sólidos; viaja dissolvido no plasma e é filtrado rapidamente pelos glomérulos renais sem aderir como placa definitiva.",
      "Está incorreta: a calcificação renal seria uma catástrofe patológica (nefrocalcinose); a fase nefrográfica decorre da presença temporária do iodo filtrado nos túbulos antes da micção.",
      "Está incorreta: os meios de contraste não funcionam por fluorescência nem por alteração de pH; atuam como atenuadores densos dos fotões X em estudos de TAC e angiografia."
    ],
    "nursingApplication": "O enfermeiro administra o contraste iodado por cateter venoso periférico calibroso (18G ou 20G) com bomba injetora de alta pressão, vigiando a permeabilidade da veia para prevenir extravasamentos."
  },
  {
    "id": 5117,
    "topicId": 5,
    "question": "Na física das radiações ionizantes e Raios X aplicada ao contexto hospitalar, em relação a 'risco de nefropatia induzida por contraste (NIC) e hidratação prévia', qual é a fundamentação científica exata?",
    "options": [
      "A lesão renal aguda por contraste é provocada pela ativação radioativa do tecido tubular decorrente da emissão contínua de fotões gama pelo isótopo de iodo estável administrado.",
      "A nefropatia induzida por contraste decorre de vasoconstrição medular renal e toxicidade tubular citotóxica direta, associada à osmolalidade e viscosidade dos compostos iodados administrados.",
      "O risco de toxicidade renal por contraste manifesta-se exclusivamente em utentes com rins saudáveis que mantenham ingestão de mais de quatro litros de água nas vinte e quatro horas prévias.",
      "Os meios de contraste iodados modernos são metabolizados pelo fígado e eliminados por via biliar em noventa e nove por cento da dose, sendo completamente inócuos para a função renal."
    ],
    "correctIndex": 1,
    "explanation": "Em física das radiações e imagiologia médica, risco de nefropatia induzida por contraste (NIC) e hidratação prévia explica-se pelo facto de que as moléculas de contraste iodado têm alta osmolalidade e viscosidade, induzindo vasoconstrição renal sustentada e toxicidade tubular direta nas células dos túbulos renais. Em doentes diabéticos ou com insuficiência renal prévia, o risco de lesão renal aguda após TC contrastada é significativo.",
    "distractorAnalysis": [
      "Está incorreta: a patogénese envolve vasoconstrição isquémica na medula renal, stresse oxidativo e toxicidade tubular celular direta, agravada por estados de desidratação e doença renal.",
      "Está incorreta: o iodo utilizado é estável (não emite fotões gama ou radioatividade); a lesão é puramente química, osmolar e hemodinâmica sobre os néfrons.",
      "Está incorreta: a eliminação do contraste iodado é quase exclusivamente renal (>98% por filtração glomerular); a insuficiência renal prévia é o principal fator de risco."
    ],
    "nursingApplication": "O enfermeiro verifica previamente os valores de creatinina e taxa de filtração glomerular (TFG) e administra o protocolo de hidratação endovenosa profilática com soro fisiológico a 0,9% antes e após o exame."
  },
  {
    "id": 5118,
    "topicId": 5,
    "question": "Durante os cuidados de enfermagem a um doente submetido a procedimentos imagiológicos com radiações, como se aplica na prática o conceito de 'risco de nefropatia induzida por contraste (NIC) e hidratação prévia'?",
    "options": [
      "O enfermeiro deve incentivar a restrição hídrica absoluta durante as vinte e quatro horas anteriores ao exame contrastado para concentrar o fármaco e poupar o volume urinário do doente.",
      "O enfermeiro administra diuréticos de ansa em bólus endovenoso antes do contraste para forçar a anúria temporária do utente durante a realização da tomografia computorizada.",
      "O enfermeiro verifica previamente a taxa de filtração glomerular estimada (eGFR) e os valores de creatinina, garantindo hidratação profilática endovenosa em utentes de risco sob protocolo clínico.",
      "O enfermeiro cancela todos os exames com contraste iodado se a eGFR for superior a sessenta mL/min/1,73m², por considerar que rins normais não toleram a passagem de moléculas de iodo."
    ],
    "correctIndex": 2,
    "explanation": "A aplicação de enfermagem para risco de nefropatia induzida por contraste (NIC) e hidratação prévia baseia-se no princípio: O enfermeiro verifica previamente os valores de creatinina e taxa de filtração glomerular (TFG) e administra o protocolo de hidratação endovenosa profilática com soro fisiológico a 0,9% antes e após o exame. Esta intervenção garante a segurança radiológica do doente e do profissional.",
    "distractorAnalysis": [
      "Está incorreta: a hidratação oral ou endovenosa (com soro fisiológico a 0,9%) é a medida preventiva mais eficaz; a desidratação aumenta a toxicidade e a concentração tubular do contraste.",
      "Está incorreta: diuréticos causam depleção de volume plasmático e pioram a vasoconstrição renal, estando contraindicados na profilaxia da lesão renal por contraste.",
      "Está incorreta: uma eGFR > 60 mL/min/1,73m² reflete função renal normal ou quase normal, sendo a faixa de menor risco para a realização segura de exames contrastados."
    ],
    "nursingApplication": "O enfermeiro verifica previamente os valores de creatinina e taxa de filtração glomerular (TFG) e administra o protocolo de hidratação endovenosa profilática com soro fisiológico a 0,9% antes e após o exame."
  },
  {
    "id": 5119,
    "topicId": 5,
    "question": "Um enfermeiro analisa os parâmetros biofísicos e os mecanismos de interação em 'risco de nefropatia induzida por contraste (NIC) e hidratação prévia'. Qual das seguintes afirmações expressa a correlação científica correta?",
    "options": [
      "Doentes com nefropatia terminal em programa de hemodiálise regular têm risco aumentado de falência funcional dos nefrónios residuais, exigindo suspensão definitiva de qualquer diálise.",
      "A diabetes mellitus sem compromisso da função renal confere imunidade biológica total contra a toxicidade tubular dos meios de contraste hiperosmolares injetados por via arterial.",
      "A administração de contraste iodado induz sempre recuperação espontânea da taxa de filtração glomerular no espaço de trinta minutos, não necessitando de qualquer vigilância clínica.",
      "Em utentes com insuficiência renal prévia moderada a grave ou nefropatia diabética concomitante, o risco de lesão renal aguda induzida por contraste está substancialmente aumentado."
    ],
    "correctIndex": 3,
    "explanation": "A correlação científica correta demonstra que Em doentes diabéticos ou com insuficiência renal prévia, o risco de lesão renal aguda após TC contrastada é significativo. O domínio destes fundamentos permite ao enfermeiro assegurar a correta radioproteção e a interpretação dos riscos radiológicos.",
    "distractorAnalysis": [
      "Está incorreta: a redução prévia da taxa de filtração glomerular (eGFR < 30-45 mL/min) e a nefropatia diabética são os dois fatores de risco independentes mais relevantes para NIC.",
      "Está incorreta: em anúricos em hemodiálise a preocupação principal é a sobrecarga hídrica volémica decorrente do volume do contraste e descompensação cardíaca, mantendo-se a diálise.",
      "Está incorreta: a lesão renal por contraste tipicamente surge 24 a 48 horas após a exposição, com pico de creatinina aos 3-5 dias, exigindo vigilância do débito urinário e análises."
    ],
    "nursingApplication": "O enfermeiro verifica previamente os valores de creatinina e taxa de filtração glomerular (TFG) e administra o protocolo de hidratação endovenosa profilática com soro fisiológico a 0,9% antes e após o exame."
  },
  {
    "id": 5120,
    "topicId": 5,
    "question": "Na física das radiações ionizantes e Raios X aplicada ao contexto hospitalar, em relação a 'meios de contraste de sulfato de bário na radiologia digestiva', qual é a fundamentação científica exata?",
    "options": [
      "O bário (Z = 56) é administrado por via digestiva sob a forma de suspensão aquosa insolúvel de sulfato de bário (BaSO₄) para opacificar o lúmen do esófago, estômago e cólon.",
      "O sulfato de bário é administrado por via intravenosa rápida em bólus para permitir a visualização de aneurismas da artéria aorta abdominal em tomografia computorizada vascular.",
      "O bário é utilizado sob a forma de sais de cloreto de bário altamente solúveis para facilitar a sua absorção transmucosa e metabolização rápida pelas células do fígado humano.",
      "O meio de contraste baritado atua como um agente gasoso expansivo que enche o tubo digestivo de azoto comprimido para repelir os raios X através de reflexão mecânica pura."
    ],
    "correctIndex": 0,
    "explanation": "Em física das radiações e imagiologia médica, meios de contraste de sulfato de bário na radiologia digestiva explica-se pelo facto de que o bário (Z = 56) é administrado por via oral ou retal sob a forma de suspensão insolúvel de sulfato de bário (BaSO₄) para opacificar o esófago, estômago e cólon. Por ser totalmente insolúvel em água, não é absorvido pela mucosa gastrointestinal íntegra e não atinge a circulação sistémica.",
    "distractorAnalysis": [
      "Está incorreta: o sulfato de bário nunca deve ser administrado por via intravenosa; causaria embolia mecânica letal imediata na circulação pulmonar; o seu uso é estritamente entérico.",
      "Está incorreta: sais solúveis de bário (como o cloreto de bário) são venenos metabólicos altamente tóxicos; utiliza-se exclusivamente a forma de sulfato de bário (BaSO4) por ser insolúvel.",
      "Está incorreta: o bário não é um gás expansivo mas sim um contraste positivo de alto Z (Z=56) que atenua fortemente os raios X por efeito fotoelétrico, desenhando o lúmen digestivo."
    ],
    "nursingApplication": "É formalmente contraindicado perante suspeita de perfuração do trato digestivo: o enfermeiro alerta que a saída de bário para a cavidade peritoneal causa peritonite química gravíssima com choque séptico."
  },
  {
    "id": 5121,
    "topicId": 5,
    "question": "Durante os cuidados de enfermagem a um doente submetido a procedimentos imagiológicos com radiações, como se aplica na prática o conceito de 'meios de contraste de sulfato de bário na radiologia digestiva'?",
    "options": [
      "O sulfato de bário deve ser utilizado preferencialmente em caso de rotura esofágica aguda por ter propriedades cicatrizantes e esterilizantes comprovadas sobre as pleuras viscerais.",
      "O sulfato de bário é formalmente contraindicado em caso de suspeita de perfuração do trato digestivo, pelo risco de peritonite química granulomatosa grave ou mediastinite fibrosante.",
      "Perante a suspeita de perfuração gástrica ou intestinal, o enfermeiro deve aquecer a suspensão de bário a sessenta graus Celsius antes de a administrar por sonda nasogástrica.",
      "A contraindicação do bário na perfuração intestinal reside unicamente no risco de atrair campos magnéticos externos que possam perfurar a parede do bloco cirúrgico hospitalar."
    ],
    "correctIndex": 1,
    "explanation": "A aplicação de enfermagem para meios de contraste de sulfato de bário na radiologia digestiva baseia-se no princípio: É formalmente contraindicado perante suspeita de perfuração do trato digestivo: o enfermeiro alerta que a saída de bário para a cavidade peritoneal causa peritonite química gravíssima com choque séptico. Esta intervenção garante a segurança radiológica do doente e do profissional.",
    "distractorAnalysis": [
      "Está incorreta: se houver perfuração, o bário extravasa para o peritoneu ou mediastino, originando reação granulomatosa grave de corpo estranho, aderências e choque; usa-se contraste iodado hidrossolúvel.",
      "Está incorreta: o bário não possui ação cicatrizante ou antissética nas serosas; o extravasamento peritoneal é uma emergência cirúrgica de alta mortalidade.",
      "Está incorreta: o bário é inerte magneticamente; a contraindicação baseia-se na gravíssima toxicidade tecidual inflamatória e infecciosa na cavidade peritoneal estéril."
    ],
    "nursingApplication": "É formalmente contraindicado perante suspeita de perfuração do trato digestivo: o enfermeiro alerta que a saída de bário para a cavidade peritoneal causa peritonite química gravíssima com choque séptico."
  },
  {
    "id": 5122,
    "topicId": 5,
    "question": "Um enfermeiro analisa os parâmetros biofísicos e os mecanismos de interação em 'meios de contraste de sulfato de bário na radiologia digestiva'. Qual das seguintes afirmações expressa a correlação científica correta?",
    "options": [
      "O sulfato de bário é rapidamente absorvido pelos enterócitos da mucosa do cólon e excretado por via biliar e renal nas duas horas seguintes à conclusão do exame radiográfico.",
      "O bário ingerido é convertido em cálcio ósseo pelos osteoblastos através de transmutação biológica atómica estimulada pelos fotões da radiação ionizante de baixa quilovoltagem.",
      "Por ser praticamente insolúvel em água, o sulfato de bário não é absorvido pela mucosa gastrointestinal íntegra, sendo eliminado integralmente pelas fezes após o trânsito digestivo.",
      "A eliminação do sulfato de bário ocorre predominantemente por via respiratória após a sua volatilização enzimática no interior do estômago por ação do ácido clorídrico gástrico."
    ],
    "correctIndex": 2,
    "explanation": "A correlação científica correta demonstra que Por ser totalmente insolúvel em água, não é absorvido pela mucosa gastrointestinal íntegra e não atinge a circulação sistémica. O domínio destes fundamentos permite ao enfermeiro assegurar a correta radioproteção e a interpretação dos riscos radiológicos.",
    "distractorAnalysis": [
      "Está incorreta: o BaSO4 tem produto de solubilidade (Ksp) extremamente baixo (~10⁻¹⁰), o que impede a absorção sistémica do catião bário através da mucosa gastrointestinal intacta.",
      "Está incorreta: o bário não sofre reações de transmutação atómica em cálcio no organismo humano; a sua eliminação é puramente mecânica através do trânsito fecal.",
      "Está incorreta: o sulfato de bário é estável e inerte face ao ácido clorídrico gástrico, mantendo-se insolúvel até ser expelido no bolo fecal sob forma de fezes claras."
    ],
    "nursingApplication": "É formalmente contraindicado perante suspeita de perfuração do trato digestivo: o enfermeiro alerta que a saída de bário para a cavidade peritoneal causa peritonite química gravíssima com choque séptico."
  },
  {
    "id": 5123,
    "topicId": 5,
    "question": "Na física das radiações ionizantes e Raios X aplicada ao contexto hospitalar, em relação a 'reações anafilactoides a meios de contraste e cuidados de emergência', qual é a fundamentação científica exata?",
    "options": [
      "As reações anafilactóides a contrastes iodados ocorrem exclusivamente em doentes que apresentem anticorpos específicos contra a molécula elementar de iodo da glândula tiroide.",
      "A reação alérgica ao contraste iodado é desencadeada pela colisão dos fotões de raios X com os grânulos de mastócitos cutâneos durante o disparo elétrico do gerador da máquina.",
      "As reações graves a contrastes manifestam-se unicamente decorridos quinze dias após a administração endovenosa, não existindo risco de broncospasmo agudo ou colapso precoce.",
      "As reações agudas graves aos meios de contraste iodados são maioritariamente reações anafilactóides (não mediadas por IgE), resultantes da libertação direta de histamina e mediadores inflamatórios."
    ],
    "correctIndex": 3,
    "explanation": "Em física das radiações e imagiologia médica, reações anafilactoides a meios de contraste e cuidados de emergência explica-se pelo facto de que os contrastes iodados podem desencadear reações pseudoalérgicas por desgranulação direta de mastócitos e basófilos com libertação súbita de histamina. Os sintomas variam desde urticária e rubor ligeiro até broncoespasmo severo, edema da glote e choque anafilactoide com colapso cardiovascular.",
    "distractorAnalysis": [
      "Está incorreta: as reações são anafilactóides (pseudoalérgicas); a desgranulação de mastócitos e basófilos decorre de quimiotaxia e hiperosmolalidade direta sem necessidade de sensibilização prévia por IgE.",
      "Está incorreta: o iodo elementar é um micronutriente essencial e não um antigénio; a reação deve-se à estrutura química molecular do composto orgânico iodado e não ao iodo em si.",
      "Está incorreta: as reações imediatas mais severas manifestam-se nos primeiros 5 a 20 minutos após a injeção, exigindo intervenção rápida e suporte avançado de vida."
    ],
    "nursingApplication": "O enfermeiro mantém o carrinho de emergência devidamente equipado na sala de imagiologia com adrenalina, corticosteroides, anti-histamínicos e equipamento de oxigenoterapia e aspiração de vias aéreas."
  },
  {
    "id": 5124,
    "topicId": 5,
    "question": "Durante os cuidados de enfermagem a um doente submetido a procedimentos imagiológicos com radiações, como se aplica na prática o conceito de 'reações anafilactoides a meios de contraste e cuidados de emergência'?",
    "options": [
      "O enfermeiro assegura a prontidão do carro de emergência com adrenalina, oxigénio, corticóides e equipamento de via aérea, mantendo o doente sob observação durante o período crítico inicial.",
      "O enfermeiro orienta o doente a abandonar a unidade de imagiologia médica imediatamente após a retirada do cateter venoso periférico para evitar a inalação de odores hospitalares.",
      "O enfermeiro administra profilaticamente adrenalina intramuscular a todos os doentes que realizam tomografia computorizada contrastada, independentemente de sinais clínicos de anafilaxia.",
      "O enfermeiro substitui a presença de material de emergência médica pela aplicação preventiva de ligaduras compressivas elásticas nos quatro membros antes da injeção do contraste."
    ],
    "correctIndex": 0,
    "explanation": "A aplicação de enfermagem para reações anafilactoides a meios de contraste e cuidados de emergência baseia-se no princípio: O enfermeiro mantém o carrinho de emergência devidamente equipado na sala de imagiologia com adrenalina, corticosteroides, anti-histamínicos e equipamento de oxigenoterapia e aspiração de vias aéreas. Esta intervenção garante a segurança radiológica do doente e do profissional.",
    "distractorAnalysis": [
      "Está incorreta: a maioria das reações anafilactóides agudas manifesta-se nos primeiros 20 a 30 minutos pós-injeção, devendo o paciente permanecer em vigilância nesse intervalo crítico.",
      "Está incorreta: a adrenalina é o fármaco de primeira linha perante anafilaxia clínica manifesta, mas não se administra por rotina profilática devido aos riscos cardiovasculares graves.",
      "Está incorreta: ligaduras compressivas nos membros não previnem edema de glote ou choque anafilactóide; a prontidão de fármacos e via aérea é a garantia de segurança do utente."
    ],
    "nursingApplication": "O enfermeiro mantém o carrinho de emergência devidamente equipado na sala de imagiologia com adrenalina, corticosteroides, anti-histamínicos e equipamento de oxigenoterapia e aspiração de vias aéreas."
  },
  {
    "id": 5125,
    "topicId": 5,
    "question": "Um enfermeiro analisa os parâmetros biofísicos e os mecanismos de interação em 'reações anafilactoides a meios de contraste e cuidados de emergência'. Qual das seguintes afirmações expressa a correlação científica correta?",
    "options": [
      "A única manifestação clínica de reação ao contraste iodado consiste no escurecimento permanente da esclera ocular acompanhado de hiperacusia sensorial bilateral reversível.",
      "Os sinais de reação anafilactóide variam desde manifestações ligeiras (urticária e rubor) até quadros graves com broncospasmo agudo, estridor laríngeo por edema de glote e choque circulatório.",
      "As reações anafilactóides graves ao meio de contraste manifestam-se invariavelmente por hipertensão arterial maligna fulminante e taquicardia supraventricular autolimitada.",
      "A presença de tosse ligeira ou prurido cutâneo nasal após injeção de contraste é um sinal patognomónico de paragem cardiorrespiratória em assistolia em escassos cinco segundos."
    ],
    "correctIndex": 1,
    "explanation": "A correlação científica correta demonstra que Os sintomas variam desde urticária e rubor ligeiro até broncoespasmo severo, edema da glote e choque anafilactoide com colapso cardiovascular. O domínio destes fundamentos permite ao enfermeiro assegurar a correta radioproteção e a interpretação dos riscos radiológicos.",
    "distractorAnalysis": [
      "Está incorreta: os quadros clínicos dividem-se em ligeiros (náuseas, urticária limitada), moderados (broncospasmo ligeiro, vómitos repetidos) e graves (choque, edema de laringe, paragem).",
      "Está incorreta: no choque anafilactóide grave ocorre vasodilatação sistémica profunda com hipotensão arterial severa e colapso circulatório, e não hipertensão maligna.",
      "Está incorreta: tosse ligeira e prurido são manifestações ligeiras que exigem vigilância atenta, pois podem progredir, mas não significam paragem cardíaca instantânea."
    ],
    "nursingApplication": "O enfermeiro mantém o carrinho de emergência devidamente equipado na sala de imagiologia com adrenalina, corticosteroides, anti-histamínicos e equipamento de oxigenoterapia e aspiração de vias aéreas."
  },
  {
    "id": 5126,
    "topicId": 5,
    "question": "Na física das radiações ionizantes e Raios X aplicada ao contexto hospitalar, em relação a 'princípio de funcionamento e reconstrução tomográfica', qual é a fundamentação científica exata?",
    "options": [
      "Um feixe fixo de neutrões térmicos atravessa o corpo do utente em repouso absoluto, sendo os dados captados por câmaras de vídeo óticas de alta resolução montadas no teto da sala.",
      "O equipamento gera campos magnéticos alternados que aceleram os protões celulares, emitindo ondas sonoras captadas por microfones piezoelétricos na abertura circular do gantry.",
      "Um tubo de raios X e detetores eletrónicos rodam em sincronia em redor do utente enquanto a marquesa translada, recolhendo perfis de atenuação transversal multidirecionais.",
      "A tomografia baseia-se na injeção de radioisótopos emissores de positrões de meia-vida ultracurta que aniquilam eletrões teciduais para formar imagens anatómicas bidimensionais."
    ],
    "correctIndex": 2,
    "explanation": "Em física das radiações e imagiologia médica, princípio de funcionamento e reconstrução tomográfica explica-se pelo facto de que um tubo de Raios X e uma coroa de detetores eletrónicos rodam a alta velocidade em redor do corpo do doente enquanto a mesa desliza (aquisição helicoidal multislice). Algoritmos matemáticos complexos (como a retroprojeção filtrada) convertem os múltiplos perfis de atenuação linear num mapa bidimensional e tridimensional de píxeis anatómicos.",
    "distractorAnalysis": [
      "Está incorreta: a TAC diagnóstica utiliza tubos emissores de raios X e detetores digitais rotativos montados no gantry e não neutrões ou câmaras óticas de vídeo.",
      "Está incorreta: campos magnéticos e radiofrequência caracterizam a ressonância magnética nuclear (RMN) e não a tomografia computorizada por raios X.",
      "Está incorreta: a emissão de positrões e aniquilação eletrónica constitui o princípio da tomografia por emissão de positrões (PET) em medicina nuclear e não da TAC convencional."
    ],
    "nursingApplication": "O enfermeiro posiciona o doente na mesa de TC, alinha os lasers de centragem e explica a necessidade de manter a apneia temporária solicitada pelo aparelho para evitar artefactos respiratórios."
  },
  {
    "id": 5127,
    "topicId": 5,
    "question": "Durante os cuidados de enfermagem a um doente submetido a procedimentos imagiológicos com radiações, como se aplica na prática o conceito de 'princípio de funcionamento e reconstrução tomográfica'?",
    "options": [
      "O enfermeiro orienta o utente a manter tosse ativa contínua durante a rotação do gantry para favorecer a expansão mecânica dos lobos pulmonares inferiores nos cortes axiais.",
      "O enfermeiro aplica gel condutor de ultrassons em toda a superfície corporal do utente para facilitar a penetração dos fotões de raios X através da epiderme queratinizada.",
      "O enfermeiro desliga os monitores multiparamétricos de vigilância vital antes de iniciar a aquisição, assumindo que qualquer circuito eletrónico sofre curto-circuito no gantry.",
      "O enfermeiro posiciona o utente na marquesa da TAC, alinha os lasers de centragem anatómica e assegura a imobilização adequada para prevenir artefactos cinéticos de movimento."
    ],
    "correctIndex": 3,
    "explanation": "A aplicação de enfermagem para princípio de funcionamento e reconstrução tomográfica baseia-se no princípio: O enfermeiro posiciona o doente na mesa de TC, alinha os lasers de centragem e explica a necessidade de manter a apneia temporária solicitada pelo aparelho para evitar artefactos respiratórios. Esta intervenção garante a segurança radiológica do doente e do profissional.",
    "distractorAnalysis": [
      "Está incorreta: tossir ou movimentar-se gera artefactos cinéticos graves que degradam a imagem; o enfermeiro orienta a apneia ventilatória no momento indicado pelo sistema sonoro.",
      "Está incorreta: gel condutor é utilizado em ecografia para acoplamento acústico; raios X são ondas eletromagnéticas que não necessitam de meio condutor na pele.",
      "Está incorreta: em doentes críticos o enfermeiro mantém a monitorização contínua de ECG, oximetria e tensão arterial com equipamentos compatíveis e extensões longas."
    ],
    "nursingApplication": "O enfermeiro posiciona o doente na mesa de TC, alinha os lasers de centragem e explica a necessidade de manter a apneia temporária solicitada pelo aparelho para evitar artefactos respiratórios."
  },
  {
    "id": 5128,
    "topicId": 5,
    "question": "Um enfermeiro analisa os parâmetros biofísicos e os mecanismos de interação em 'princípio de funcionamento e reconstrução tomográfica'. Qual das seguintes afirmações expressa a correlação científica correta?",
    "options": [
      "Algoritmos de reconstrução matemática (como a retroprojeção filtrada e métodos iterativos) convertem as projeções de atenuação de raios X numa matriz volumétrica de vóxeis.",
      "A imagem tomográfica é obtida por revelação química direta de uma película radiográfica circular montada no interior do gantry que roda em banho contínuo de tiossulfato de sódio.",
      "O computador calcula a imagem através da contagem do número de batimentos cardíacos do utente divididos pela frequência de rotação mecânica do prato anódico da ampola médica.",
      "A matriz tomográfica resulta da fusão de registos termográficos infravermelhos da pele com a velocidade de condução nervosa dos membros inferiores registada na marquesa."
    ],
    "correctIndex": 0,
    "explanation": "A correlação científica correta demonstra que Algoritmos matemáticos complexos (como a retroprojeção filtrada) convertem os múltiplos perfis de atenuação linear num mapa bidimensional e tridimensional de píxeis anatómicos. O domínio destes fundamentos permite ao enfermeiro assegurar a correta radioproteção e a interpretação dos riscos radiológicos.",
    "distractorAnalysis": [
      "Está incorreta: a TAC moderna é totalmente digital; os detetores convertem fotões X em sinais elétricos digitais processados por algoritmos matemáticos avançados.",
      "Está incorreta: a reconstrução volumétrica baseia-se na teoria da transformada de Radon e retroprojeção filtrada, associando a atenuação de cada feixe ao vóxel correspondente.",
      "Está incorreta: a tomografia não mede termografia cutânea ou condução nervosa motora; quantifica unicamente o coeficiente de atenuação linear dos tecidos para raios X."
    ],
    "nursingApplication": "O enfermeiro posiciona o doente na mesa de TC, alinha os lasers de centragem e explica a necessidade de manter a apneia temporária solicitada pelo aparelho para evitar artefactos respiratórios."
  },
  {
    "id": 5129,
    "topicId": 5,
    "question": "Na física das radiações ionizantes e Raios X aplicada ao contexto hospitalar, em relação a 'escala de Unidades Hounsfield (HU) e pontos de calibração', qual é a fundamentação científica exata?",
    "options": [
      "A escala Hounsfield mede a temperatura tecidual em graus Celsius, variando entre zero graus na pele do utente e cem graus nas estruturas ósseas mais profundas da bacia.",
      "A escala de Unidades Hounsfield (HU) é uma escala numérica internacional de coeficientes de atenuação calibrada com a água pura a 0 HU e o ar atmosférico calibrado em -1000 HU.",
      "A escala HU quantifica a concentração de glicose celular nos tecidos vivos, apresentando valores negativos em células tumorais e valores positivos em tecidos inflamatórios agudos.",
      "A escala de Hounsfield avalia a dose absorvida cumulativa de radiação, indicando zero HU para o operador e mil HU para o paciente exposto ao feixe útil do tubo tomográfico."
    ],
    "correctIndex": 1,
    "explanation": "Em física das radiações e imagiologia médica, escala de Unidades Hounsfield (HU) e pontos de calibração explica-se pelo facto de que é a escala numérica internacional de coeficientes de atenuação tomográfica calibrada com água pura a 0 HU e ar atmosférico a -1000 HU. A gordura situa-se entre -50 e -100 HU, os tecidos moles/músculo entre +30 e +50 HU, o sangue coagulado em hematomas entre +60 e +80 HU, e o osso cortical denso entre +1000 e +3000 HU.",
    "distractorAnalysis": [
      "Está incorreta: HU = 1000 × (μ_tecido - μ_água) / μ_água; define 0 HU para a água e -1000 HU para o ar, permitindo quantificar densidades radiológicas teciduais relativas.",
      "Está incorreta: a escala de Hounsfield não mede temperatura metabólica nem calor tecidual; reflete a atenuação linear dos raios X em relação à água pura.",
      "Está incorreta: o valor em HU não expressa dose dosimétrica de radiação (que se mede em mGy ou mSv), mas sim a radiodensidade anatómica de cada elemento de volume."
    ],
    "nursingApplication": "O enfermeiro de neurologia e emergência compreende que no AVC hemorrágico o sangue fresco do hematoma intraparenquimatoso surge branco brilhante e hiperdenso (+70 HU) na TC cerebral sem contraste."
  },
  {
    "id": 5130,
    "topicId": 5,
    "question": "Durante os cuidados de enfermagem a um doente submetido a procedimentos imagiológicos com radiações, como se aplica na prática o conceito de 'escala de Unidades Hounsfield (HU) e pontos de calibração'?",
    "options": [
      "No acidente vascular cerebral isquémico agudo as primeiras horas caracterizam-se por calcificação imediata maciça (+1000 HU) de todo o hemisfério cerebral homolateral.",
      "O sangue fresco extravasado no espaço subaracnoideu apresenta atenuação idêntica à do ar livre (-1000 HU), manifestando-se como manchas pretas radiotransparentes no encéfalo.",
      "No AVC hemorrágico agudo o sangue extravasado apresenta alta densidade espontânea (+50 a +80 HU), surgindo hiperdenso (claro) em contraste com o parênquima cerebral normal.",
      "A presença de sangue coagulado no parênquima cerebral produz artefactos metálicos em estrela decorrentes da alta radioatividade natural do ferro hemoglobínico do utente."
    ],
    "correctIndex": 2,
    "explanation": "A aplicação de enfermagem para escala de Unidades Hounsfield (HU) e pontos de calibração baseia-se no princípio: O enfermeiro de neurologia e emergência compreende que no AVC hemorrágico o sangue fresco do hematoma intraparenquimatoso surge branco brilhante e hiperdenso (+70 HU) na TC cerebral sem contraste. Esta intervenção garante a segurança radiológica do doente e do profissional.",
    "distractorAnalysis": [
      "Está incorreta: o sangue hemorrágico fresco tem alta concentração proteica e de hemoglobina com ferro, conferindo densidade de +50 a +80 HU (hiperdenso/branco na janela de parênquima).",
      "Está incorreta: o AVC isquémico precoce manifesta-se por hipodensidade subtil (edema citotóxico com menor atenuação) ou apagamento de sulcos, e nunca por calcificação óssea imediata.",
      "Está incorreta: o ar tem -1000 HU (negro profundo); o sangue extravasado é hiperdenso (+50 a +80 HU) comparado com o líquido cefalorraquidiano (0 a +10 HU) e parênquima (+30 a +40 HU)."
    ],
    "nursingApplication": "O enfermeiro de neurologia e emergência compreende que no AVC hemorrágico o sangue fresco do hematoma intraparenquimatoso surge branco brilhante e hiperdenso (+70 HU) na TC cerebral sem contraste."
  },
  {
    "id": 5131,
    "topicId": 5,
    "question": "Um enfermeiro analisa os parâmetros biofísicos e os mecanismos de interação em 'escala de Unidades Hounsfield (HU) e pontos de calibração'. Qual das seguintes afirmações expressa a correlação científica correta?",
    "options": [
      "O parênquima pulmonar aerado apresenta densidade de +500 HU, situando-se a gordura subcutânea em +1500 HU e o osso cortical na faixa de valores negativos de -200 HU.",
      "Todos os tecidos biológicos humanos apresentam valores fixos rigorosamente coincidentes com 0 HU, não existindo qualquer variação numérica de atenuação entre órgãos internos.",
      "A densidade em unidades Hounsfield depende exclusivamente da pressão osmótica plasmática, variando entre -5000 HU na desidratação e +5000 HU na sobrecarga de volume circulatório.",
      "A gordura situa-se tipicamente entre -50 e -100 HU, o músculo entre +30 e +50 HU, o sangue coagulado entre +50 e +80 HU e o osso cortical mineralizado atinge valores de +1000 a +3000 HU."
    ],
    "correctIndex": 3,
    "explanation": "A correlação científica correta demonstra que A gordura situa-se entre -50 e -100 HU, os tecidos moles/músculo entre +30 e +50 HU, o sangue coagulado em hematomas entre +60 e +80 HU, e o osso cortical denso entre +1000 e +3000 HU. O domínio destes fundamentos permite ao enfermeiro assegurar a correta radioproteção e a interpretação dos riscos radiológicos.",
    "distractorAnalysis": [
      "Está incorreta: pulmão aerado tem ar predominante (-500 a -900 HU); gordura tem menor atenuação que a água (-50 a -100 HU) e o osso cortical rico em cálcio atinge +1000 a +3000 HU.",
      "Está incorreta: os tecidos têm coeficientes de atenuação distintos decorrentes das suas composições atómicas e densidades físicas, originando a escala espectral de Hounsfield.",
      "Está incorreta: a escala HU é uma constante física calibrada pela densidade eletrónica e atenuação de raios X, não oscilando em amplitudes de milhares de HU por volemia."
    ],
    "nursingApplication": "O enfermeiro de neurologia e emergência compreende que no AVC hemorrágico o sangue fresco do hematoma intraparenquimatoso surge branco brilhante e hiperdenso (+70 HU) na TC cerebral sem contraste."
  },
  {
    "id": 5132,
    "topicId": 5,
    "question": "Na física das radiações ionizantes e Raios X aplicada ao contexto hospitalar, em relação a 'conceito de janela tomográfica (Window Width e Window Level)', qual é a fundamentação científica exata?",
    "options": [
      "O janelamento tomográfico seleciona um intervalo de HU (largura de janela / WW) centrado num nível específico (nível / WL) para otimizar o contraste visual das estruturas de interesse.",
      "O janelamento é uma técnica cirúrgica que consiste na abertura de orifícios ósseos no crânio do utente para permitir a penetração direta dos feixes de raios X na fossa posterior.",
      "A largura de janela define o tempo em minutos que a marquesa permanece imóvel no interior do gantry antes de se iniciar a transmissão dos fotões de raios X através do corpo.",
      "O nível de janela corresponde à dose total em milisieverts prescrita para o exame tomográfico, determinando a voltagem de corte elétrico dos fusíveis industriais do equipamento."
    ],
    "correctIndex": 0,
    "explanation": "Em física das radiações e imagiologia médica, conceito de janela tomográfica (Window Width e Window Level) explica-se pelo facto de que a janela tomográfica permite selecionar uma faixa restrita de valores HU (Largura, WW) centrada num determinado valor de atenuação (Nível, WL) para maximizar o contraste da estrutura alvo. Por exemplo, a janela óssea utiliza WW ampla para ver detalhe trabecular e cortical, enquanto a janela de mediastino ou cerebral evidencia pequenas diferenças entre tecidos moles.",
    "distractorAnalysis": [
      "Está incorreta: o janelamento (windowing) é um processamento puramente digital de pós-processamento de imagem que mapeia uma faixa de HU nos 256 níveis de cinzento do monitor.",
      "Está incorreta: a TAC é um exame não invasivo; janelamento não envolve procedimentos cirúrgicos de trepanação ou abertura de janelas ósseas no esqueleto.",
      "Está incorreta: o nível da janela (WL) é o ponto central em HU e a largura (WW) é o intervalo em HU exibido; não têm relação com tempos de marquesa ou doses de radiação."
    ],
    "nursingApplication": "O enfermeiro sabe que uma TC cerebral pode aparentar normalidade em janela óssea mas revelar isquemia precoce ou edema citotóxico na janela de parênquima cerebral."
  },
  {
    "id": 5133,
    "topicId": 5,
    "question": "Durante os cuidados de enfermagem a um doente submetido a procedimentos imagiológicos com radiações, como se aplica na prática o conceito de 'conceito de janela tomográfica (Window Width e Window Level)'?",
    "options": [
      "O enfermeiro reconhece que a janela óssea serve unicamente para quantificar a taxa de oxigenação arterial do sangue do encéfalo durante a administração de contraste iodado.",
      "O enfermeiro sabe que uma TC cerebral pode parecer normal numa janela de partes moles comum mas revelar fraturas cranianas cominutivas evidentes quando visualizada em janela óssea.",
      "O enfermeiro deduz que todas as patologias encefálicas agudas são visualizadas com máxima nitidez selecionando uma janela pulmonar de altíssimo contraste com nível de -600 HU.",
      "O enfermeiro orienta a alteração manual do janelamento do monitor para eliminar a necessidade de realizar radiografias de controlo pós-operatório em próteses ortopédicas."
    ],
    "correctIndex": 1,
    "explanation": "A aplicação de enfermagem para conceito de janela tomográfica (Window Width e Window Level) baseia-se no princípio: O enfermeiro sabe que uma TC cerebral pode aparentar normalidade em janela óssea mas revelar isquemia precoce ou edema citotóxico na janela de parênquima cerebral. Esta intervenção garante a segurança radiológica do doente e do profissional.",
    "distractorAnalysis": [
      "Está incorreta: a janela de partes moles (WW ≈ 80, WL ≈ 40) otimiza o parênquima mas satura o osso em branco uniforme; para avaliar a cortical óssea é indispensável a janela óssea (WW ≈ 2000, WL ≈ 500).",
      "Está incorreta: a janela óssea expande a gama de cinzentos sobre valores elevados de HU para diferenciar trabéculas e corticais fraturadas, não avaliando gases arteriais.",
      "Está incorreta: janelas pulmonares (-600 HU) são adequadas para o parênquima pulmonar rico em ar e não para diferenciar substância branca e cinzenta cerebral (+30 a +40 HU)."
    ],
    "nursingApplication": "O enfermeiro sabe que uma TC cerebral pode aparentar normalidade em janela óssea mas revelar isquemia precoce ou edema citotóxico na janela de parênquima cerebral."
  },
  {
    "id": 5134,
    "topicId": 5,
    "question": "Um enfermeiro analisa os parâmetros biofísicos e os mecanismos de interação em 'conceito de janela tomográfica (Window Width e Window Level)'. Qual das seguintes afirmações expressa a correlação científica correta?",
    "options": [
      "A janela óssea opera com largura estreita de cinco HU para converter todas as estruturas calcificadas numa única tonalidade negra profunda que facilita a leitura de fissuras anatómicas.",
      "A seleção de janelas altera a quantidade física de radiação ionizante emitida pelo tubo, reduzindo a dose entregue ao doente em noventa por cento na visualização pulmonar.",
      "A janela óssea utiliza uma largura alargada (WW elevada) para visualizar detalhe trabecular, enquanto a janela de parênquima usa janela estreita para separar tecidos com HU muito próximos.",
      "O janelamento tomográfico aplica-se apenas a imagens analógicas impressas em acetato, sendo desnecessário em estações de trabalho médicas com visualizadores computorizados modernos."
    ],
    "correctIndex": 2,
    "explanation": "A correlação científica correta demonstra que Por exemplo, a janela óssea utiliza WW ampla para ver detalhe trabecular e cortical, enquanto a janela de mediastino ou cerebral evidencia pequenas diferenças entre tecidos moles. O domínio destes fundamentos permite ao enfermeiro assegurar a correta radioproteção e a interpretação dos riscos radiológicos.",
    "distractorAnalysis": [
      "Está incorreta: tecidos moles com densidades próximas (ex: substância cinzenta ~40 HU vs branca ~30 HU) exigem janela estreita (WW 80-100) para maximizar o contraste percebido pelo olho humano.",
      "Está incorreta: o janelamento é uma operação de software de ecrã após a aquisição dos dados; não modifica a dose de radiação que o paciente já absorveu durante o disparo.",
      "Está incorreta: o ajuste interativo de WW e WL é a ferramenta mais utilizada em sistemas PACS digitais para explorar diferentes patologias a partir do mesmo conjunto de dados brutos."
    ],
    "nursingApplication": "O enfermeiro sabe que uma TC cerebral pode aparentar normalidade em janela óssea mas revelar isquemia precoce ou edema citotóxico na janela de parênquima cerebral."
  },
  {
    "id": 5135,
    "topicId": 5,
    "question": "Na física das radiações ionizantes e Raios X aplicada ao contexto hospitalar, em relação a 'doses de radiação em Tomografia Computorizada comparadas com radiografia convencional', qual é a fundamentação científica exata?",
    "options": [
      "Uma tomografia de corpo inteiro administra uma dose de radiação ionizante rigorosamente idêntica à de uma ecografia obstétrica comum realizada com transdutor convexo de baixa frequência.",
      "A dose de radiação ionizante numa TAC é insignificante e inferior à radiação de fundo natural absorvida em dois segundos de respiração normal ao ar livre ao nível do mar.",
      "Os aparelhos tomográficos modernos operam através de radiação puramente luminosa infravermelha, dispensando qualquer monitorização dosimétrica ou controlo de dose no utente.",
      "Uma tomografia computorizada de tórax ou abdómen administra doses efetivas típicas de 5 a 15 mSv, equivalendo à exposição de dezenas a centenas de radiografias simples convencionais."
    ],
    "correctIndex": 3,
    "explanation": "Em física das radiações e imagiologia médica, doses de radiação em Tomografia Computorizada comparadas com radiografia convencional explica-se pelo facto de que uma TC de tórax ou de abdómen-pélvis transfere uma dose efetiva de radiação entre 5 e 15 mSv, equivalente a centenas de radiografias simples de tórax convencionais. A grande exposição à radiação exige rigorosa justificação clínica segundo as diretrizes ALARA, evitando exames repetitivos em doentes jovens ou pediátricos.",
    "distractorAnalysis": [
      "Está incorreta: uma radiografia de tórax debita ~0,02 a 0,1 mSv; uma TC de tórax (~7 mSv) ou abdómen-pélvis (~10-15 mSv) confere dose substancialmente mais alta, exigindo justificação clínica.",
      "Está incorreta: a ecografia utiliza ultrassons (ondas mecânicas não ionizantes) e tem dose zero de radiação ionizante; comparar uma TC a ecografia é um equívoco biológico grave.",
      "Está incorreta: a dose efetiva em TC representa a maior fonte individual de exposição médica a radiação artificial na população, requerendo otimização contínua de protocolos."
    ],
    "nursingApplication": "O enfermeiro questiona a existência de exames imagiológicos prévios recentes e verifica a correta justificação médica antes de encaminhar o doente para exames de TC sucessivos."
  },
  {
    "id": 5136,
    "topicId": 5,
    "question": "Durante os cuidados de enfermagem a um doente submetido a procedimentos imagiológicos com radiações, como se aplica na prática o conceito de 'doses de radiação em Tomografia Computorizada comparadas com radiografia convencional'?",
    "options": [
      "O enfermeiro questiona a existência de exames imagiológicos prévios e o motivo clínico da requisição para prevenir a repetição desnecessária de exames tomográficos de alta dose.",
      "O enfermeiro recomenda que todos os utentes internados realizem uma tomografia computorizada de corpo inteiro a cada quarenta e oito horas como método de vigilância assintomática.",
      "O enfermeiro orienta o utente a tomar suplementos de chumbo oral antes da realização da tomografia para absorver a radiação ionizante a partir do interior do trato gastrointestinal.",
      "O enfermeiro assegura que a repetição sucessiva de exames de TAC no mesmo internamento melhora a resposta imunológica das células da medula óssea contra infeções nosocomiais."
    ],
    "correctIndex": 0,
    "explanation": "A aplicação de enfermagem para doses de radiação em Tomografia Computorizada comparadas com radiografia convencional baseia-se no princípio: O enfermeiro questiona a existência de exames imagiológicos prévios recentes e verifica a correta justificação médica antes de encaminhar o doente para exames de TC sucessivos. Esta intervenção garante a segurança radiológica do doente e do profissional.",
    "distractorAnalysis": [
      "Está incorreta: o princípio da justificação e a prevenção de exames redundantes são centrais na segurança do doente; evitar TC repetidas desnecessárias reduz a dose cumulativa estocástica.",
      "Está incorreta: rastreios repetidos com TC em assintomáticos sem indicação clínica clara violam os princípios éticos e legais de radioproteção (justificação e ALARA).",
      "Está incorreta: o chumbo é um metal pesado altamente tóxico e tóxico por via oral (saturnismo); nunca deve ser ingerido por doentes em nenhuma circunstância médica."
    ],
    "nursingApplication": "O enfermeiro questiona a existência de exames imagiológicos prévios recentes e verifica a correta justificação médica antes de encaminhar o doente para exames de TC sucessivos."
  },
  {
    "id": 5137,
    "topicId": 5,
    "question": "Um enfermeiro analisa os parâmetros biofísicos e os mecanismos de interação em 'doses de radiação em Tomografia Computorizada comparadas com radiografia convencional'. Qual das seguintes afirmações expressa a correlação científica correta?",
    "options": [
      "A dose em tomografia computorizada é independente da rotação do tubo e da espessura do corte, dependendo em exclusivo do peso do técnico de radiologia que opera a consola técnica.",
      "A magnitude da dose em tomografia exige justificação clínica rigorosa (critérios de adequação) e otimização dos parâmetros técnicos (como modulação de corrente mA com base na atenuação corporal).",
      "Os protocolos de tomografia pediátrica utilizam exatamente os mesmos parâmetros elétricos e dosimétricos aplicados a indivíduos adultos de noventa quilogramas com obesidade mórbida.",
      "A diretiva de radioproteção proíbe a realização de qualquer tomografia computorizada em doentes hospitalizados com idade inferior a cinquenta anos, mesmo perante politraumatismo grave."
    ],
    "correctIndex": 1,
    "explanation": "A correlação científica correta demonstra que A grande exposição à radiação exige rigorosa justificação clínica segundo as diretrizes ALARA, evitando exames repetitivos em doentes jovens ou pediátricos. O domínio destes fundamentos permite ao enfermeiro assegurar a correta radioproteção e a interpretação dos riscos radiológicos.",
    "distractorAnalysis": [
      "Está incorreta: a modulação automática de corrente do tubo (ex: Care Dose, Sure Exposure) ajusta os mA à geometria e espessura do paciente em cada ângulo, poupando até 30-50% de dose.",
      "Está incorreta: protocolos pediátricos devem ser rigorosamente adaptados ao tamanho e peso da criança (reduzindo kVp e mAs) para evitar sobredosagem desnecessária.",
      "Está incorreta: perante indicação clínica vital (ex: traumatismo cranioencefálico, suspeita de hemorragia ou politrauma), o exame é plenamente justificado em qualquer idade."
    ],
    "nursingApplication": "O enfermeiro questiona a existência de exames imagiológicos prévios recentes e verifica a correta justificação médica antes de encaminhar o doente para exames de TC sucessivos."
  },
  {
    "id": 5138,
    "topicId": 5,
    "question": "Na física das radiações ionizantes e Raios X aplicada ao contexto hospitalar, em relação a 'artefactos de endurecimento do feixe e corpos estranhos metálicos', qual é a fundamentação científica exata?",
    "options": [
      "O metal de implantes ortopédicos reage quimicamente com os raios X libertando gás hidrogénio explosivo que deforma a arquitetura anatómica do campo cirúrgico periprotésico.",
      "Os artefactos metálicos resultam da fusão superficial do titânio no interior do doente devido à temperatura criogénica atingida pelos detetores digitais durante a rotação.",
      "Ao atravessar estruturas metálicas densas (próteses de anca ou agrafos), ocorre endurecimento extremo do feixe e atenuação quase total, gerando bandas escuras e claras radiadas (em estrela).",
      "A presença de uma prótese metálica converte os fotões de raios X em ultrassons transversais que apagam permanentemente os ficheiros informáticos armazenados no servidor hospitalar."
    ],
    "correctIndex": 2,
    "explanation": "Em física das radiações e imagiologia médica, artefactos de endurecimento do feixe e corpos estranhos metálicos explica-se pelo facto de que ao atravessar objetos densos (próteses metálicas de anca, agrafos cirúrgicos ou amálgamas dentárias), os Raios X de menor energia são todos absorvidos, sobrando apenas os de alta energia. Isto gera riscas escuras e claras radiadas (artefactos em estrela) que ofuscam completamente as estruturas teciduais anatómicas vizinhas.",
    "distractorAnalysis": [
      "Está incorreta: o metal absorve quase todos os fotões (starvation de fotões) e endurece o feixe restante; a reconstrução matemática sem dados de transmissão gera as estrias escuras e claras típicas.",
      "Está incorreta: implantes metálicos de titânio ou aço cirúrgico são biologicamente inertes e não libertam gases ou sofrem fusão durante a exposição diagnóstica a raios X.",
      "Está incorreta: raios X diagnósticos não danificam servidores de rede ou bases de dados de imagem digital; os artefactos são distorções visuais intrínsecas ao corte tomográfico."
    ],
    "nursingApplication": "O enfermeiro retira todas as joias, próteses dentárias amovíveis, clipes e objetos metálicos da região a examinar antes de iniciar a aquisição tomográfica."
  },
  {
    "id": 5139,
    "topicId": 5,
    "question": "Durante os cuidados de enfermagem a um doente submetido a procedimentos imagiológicos com radiações, como se aplica na prática o conceito de 'artefactos de endurecimento do feixe e corpos estranhos metálicos'?",
    "options": [
      "O enfermeiro orienta a colocação de moedas metálicas sobre o tórax do doente para servir de referência anatómica de calibração automática de cores na estação de diagnóstico médico.",
      "O enfermeiro deve tentar retirar próteses ortopédicas de anca cirurgicamente implantadas na enfermaria antes de enviar o doente para a realização de tomografia de rotina.",
      "O enfermeiro dispensa a verificação de adornos metálicos corporais antes de tomografias computorizadas, dado que os artefactos por metal ocorrem apenas em ressonância magnética nuclear.",
      "O enfermeiro solicita a remoção de adornos metálicos, próteses dentárias amovíveis e fios ou elétrodos de monitorização da área de corte, prevenindo artefactos que obscureçam o diagnóstico."
    ],
    "correctIndex": 3,
    "explanation": "A aplicação de enfermagem para artefactos de endurecimento do feixe e corpos estranhos metálicos baseia-se no princípio: O enfermeiro retira todas as joias, próteses dentárias amovíveis, clipes e objetos metálicos da região a examinar antes de iniciar a aquisição tomográfica. Esta intervenção garante a segurança radiológica do doente e do profissional.",
    "distractorAnalysis": [
      "Está incorreta: objetos metálicos externos (piercings, ganchos, colares, elétrodos com fios) degradam gravemente a imagem tomográfica por artefactos de estrela e devem ser removidos do campo.",
      "Está incorreta: moedas ou metais sobre a pele criam estrias metálicas severas que ocultam patologias e forçam a repetição do exame com aumento injustificado da dose de radiação.",
      "Está incorreta: implantes internos fixos não se removem; o técnico utiliza algoritmos de redução de artefactos metálicos (MAR); apenas adereços externos amovíveis devem ser retirados."
    ],
    "nursingApplication": "O enfermeiro retira todas as joias, próteses dentárias amovíveis, clipes e objetos metálicos da região a examinar antes de iniciar a aquisição tomográfica."
  },
  {
    "id": 5140,
    "topicId": 5,
    "question": "Um enfermeiro analisa os parâmetros biofísicos e os mecanismos de interação em 'artefactos de endurecimento do feixe e corpos estranhos metálicos'. Qual das seguintes afirmações expressa a correlação científica correta?",
    "options": [
      "As estrias em estrela e áreas de extinção de fotões causadas por próteses metálicas podem ocultar coleções purulentas periprotésicas, hematomas ou sinais precoces de osteólise infecciosa.",
      "Os artefactos metálicos aumentam a nitidez das estruturas anatómicas vizinhas, facilitando a identificação de pequenas bactérias no interior da cápsula articular reconstruída.",
      "O aparecimento de bandas escuras em redor de uma prótese metálica numa TAC é uma prova laboratorial inequívoca de rejeição imune celular com destruição de anticorpos séricos.",
      "Os artefactos por metal são corrigidos automaticamente através do aquecimento prévio da sala de exames tomográficos para temperaturas superiores a quarenta e cinco graus Celsius."
    ],
    "correctIndex": 0,
    "explanation": "A correlação científica correta demonstra que Isto gera riscas escuras e claras radiadas (artefactos em estrela) que ofuscam completamente as estruturas teciduais anatómicas vizinhas. O domínio destes fundamentos permite ao enfermeiro assegurar a correta radioproteção e a interpretação dos riscos radiológicos.",
    "distractorAnalysis": [
      "Está incorreta: as estrias escuras de hipoatenuação e faixas brancas sobrepostas obscurecem os tecidos periprotésicos, dificultando a deteção de infeções ou abcessos junto ao implante.",
      "Está incorreta: artefactos metálicos degradam a resolução e ocultam patologias, não tendo qualquer poder de ampliação microscópica de bactérias ou microrganismos.",
      "Está incorreta: as estrias radiadas são artefactos biofísicos de aquisição/reconstrução computorizada e não lesões biológicas teciduais de rejeição imunológica de implantes."
    ],
    "nursingApplication": "O enfermeiro retira todas as joias, próteses dentárias amovíveis, clipes e objetos metálicos da região a examinar antes de iniciar a aquisição tomográfica."
  },
  {
    "id": 5141,
    "topicId": 5,
    "question": "Na física das radiações ionizantes e Raios X aplicada ao contexto hospitalar, em relação a 'ação direta da radiação ionizante no DNA', qual é a fundamentação científica exata?",
    "options": [
      "Na ação direta da radiação, os fotões interagem exclusivamente com as moléculas de água extracelulares, transformando o líquido intersticial em gelatina condensada impermeável.",
      "Na ação direta da radiação ionizante, o fotão ou um eletrão secundário acelerado colide e ioniza diretamente átomos da molécula de DNA, induzindo quebras na sua cadeia de nucleótidos.",
      "A ação direta consiste na atração mecânica dos cromossomas nucleares em direção à pele pela passagem de campos magnéticos estáticos provenientes da consola do operador.",
      "A ação direta caracteriza-se pela neutralização de todas as cargas elétricas das membranas celulares, fazendo com que a célula se desintegre espontaneamente em escassos segundos."
    ],
    "correctIndex": 1,
    "explanation": "Em física das radiações e imagiologia médica, ação direta da radiação ionizante no DNA explica-se pelo facto de que o fotão de radiação ou um eletrão secundário colide fisicamente e ioniza diretamente a molécula de ácido desoxirribonucleico (DNA), quebrando ligações fosfodiéster da cadeia. Produz quebras de cadeia simples (SSB) e quebras de cadeia dupla (DSB); as quebras duplas contíguas são as mais difíceis de reparar pelas enzimas celulares e as mais letais.",
    "distractorAnalysis": [
      "Está incorreta: ação direta significa deposição de energia diretamente na molécula biológica alvo (DNA, RNA ou proteínas críticas), sem intermediação de radicais livres aquosos.",
      "Está incorreta: a interação com a água extracelular e intracelular com geração de radicais livres reativos constitui a ação indireta e não a ação direta da radiação.",
      "Está incorreta: a radiação ionizante não atua por atração mecânica magnética sobre os cromossomas, mas sim por quebras químicas de ligações covalentes fosfodiéster."
    ],
    "nursingApplication": "É o mecanismo predominante em radiações com alta densidade de ionização linear (alto LET), como partículas alfa e iões pesados."
  },
  {
    "id": 5142,
    "topicId": 5,
    "question": "Durante os cuidados de enfermagem a um doente submetido a procedimentos imagiológicos com radiações, como se aplica na prática o conceito de 'ação direta da radiação ionizante no DNA'?",
    "options": [
      "A ação direta é exclusiva de radiações não-ionizantes de baixa frequência como a luz visível de lâmpadas incandescentes comuns e as emissões de monitores de computadores hospitalares.",
      "A ação direta manifesta-se unicamente quando o doente se encontra sob anestesia geral profunda em bloco cirúrgico, cessando nos doentes que permanecem conscientes no internamento.",
      "A ação direta é o mecanismo de dano predominante em radiações de alta densidade de ionização (alto LET, como partículas alfa e neutrões), provocando lesões complexas agrupadas no DNA.",
      "A ação direta da radiação não é capaz de produzir quebras na molécula de DNA, limitando a sua repercussão biológica ao aumento da síntese de colagénio cicatrizante nos tecidos."
    ],
    "correctIndex": 2,
    "explanation": "A aplicação de enfermagem para ação direta da radiação ionizante no DNA baseia-se no princípio: É o mecanismo predominante em radiações com alta densidade de ionização linear (alto LET), como partículas alfa e iões pesados. Esta intervenção garante a segurança radiológica do doente e do profissional.",
    "distractorAnalysis": [
      "Está incorreta: partículas pesadas de alto LET (como núcleos de hélio/alfa) depositam energia densamente ao longo da sua trajetória, ionizando diretamente a dupla hélice de DNA com alta eficácia biológica.",
      "Está incorreta: luz visível não possui energia fotónica suficiente (>12 eV) para ejetar eletrões orbitais e quebrar diretamente o esqueleto molecular do DNA cromossómico.",
      "Está incorreta: os processos biofísicos de deposição de energia atómica ocorrem em fentossegundos (10⁻¹⁵ s) e são independentes do estado de vigília ou sedação do doente."
    ],
    "nursingApplication": "É o mecanismo predominante em radiações com alta densidade de ionização linear (alto LET), como partículas alfa e iões pesados."
  },
  {
    "id": 5143,
    "topicId": 5,
    "question": "Um enfermeiro analisa os parâmetros biofísicos e os mecanismos de interação em 'ação direta da radiação ionizante no DNA'. Qual das seguintes afirmações expressa a correlação científica correta?",
    "options": [
      "As quebras de cadeia dupla no DNA celular são corrigidas instantaneamente e sem qualquer margem de erro por simples difusão passiva de sais minerais de sódio no citoplasma.",
      "A ação direta induz unicamente a duplicação espontânea do número total de cromossomas em células adultas diferenciadas, sem originar qualquer perda de material genético.",
      "As lesões produzidas no DNA pela ação direta da radiação desaparecem espontaneamente no momento em que o feixe de raios X do tubo radiológico é desligado pelo operador.",
      "A ação direta produz quebras de cadeia simples (SSB) e quebras de cadeia dupla (DSB); as quebras de cadeia dupla não reparadas ou mal reparadas são as lesões mais letais e mutagénicas."
    ],
    "correctIndex": 3,
    "explanation": "A correlação científica correta demonstra que Produz quebras de cadeia simples (SSB) e quebras de cadeia dupla (DSB); as quebras duplas contíguas são as mais difíceis de reparar pelas enzimas celulares e as mais letais. O domínio destes fundamentos permite ao enfermeiro assegurar a correta radioproteção e a interpretação dos riscos radiológicos.",
    "distractorAnalysis": [
      "Está incorreta: as quebras de cadeia dupla (DSB - double strand breaks) são a lesão sentinela mais grave; se não forem fielmente reparadas, desencadeiam aberrações cromossómicas, apoptose ou carcinogénese.",
      "Está incorreta: as quebras de DNA requerem complexas vias enzimáticas celulares de reparação (como NHEJ e HR); falhas nestes sistemas levam à morte celular mitoticamente ligada.",
      "Está incorreta: o dano estrutural no DNA persiste na célula após a passagem da radiação, podendo manifestar-se anos ou décadas mais tarde sob a forma de neoplasia radioinduzida."
    ],
    "nursingApplication": "É o mecanismo predominante em radiações com alta densidade de ionização linear (alto LET), como partículas alfa e iões pesados."
  },
  {
    "id": 5144,
    "topicId": 5,
    "question": "Na física das radiações ionizantes e Raios X aplicada ao contexto hospitalar, em relação a 'ação indireta via radiólise da água e radicais livres', qual é a fundamentação científica exata?",
    "options": [
      "Como as células são compostas por 70% a 80% de água, os raios X ionizam primariamente o H₂O (radiólise da água), gerando radicais livres reativos que difundem e danificam o DNA secundariamente.",
      "A ação indireta da radiação baseia-se na transformação da água celular em gás azoto líquido criogénico que congela instantaneamente as membranas lipídicas citoplasmáticas.",
      "Na ação indireta os fotões de raios X são convertidos em fotões térmicos que aquecem a água tecidual até à fervura, destruindo as células exclusivamente por choque térmico macroscópico.",
      "A radiólise da água é um processo exclusivo de doentes submetidos a hemodiálise crónica, não ocorrendo em indivíduos com função renal fisiológica conservada."
    ],
    "correctIndex": 0,
    "explanation": "Em física das radiações e imagiologia médica, ação indireta via radiólise da água e radicais livres explica-se pelo facto de que como a célula é constituída em cerca de 70-80% por água, a radiação ioniza primariamente as moléculas de H₂O intracelular ($H_2O \\rightarrow H_2O^+ + e^-$), gerando radicais livres altamente tóxicos. Destaca-se o radical hidroxilo ($OH^\bullet$), o átomo de hidrogénio ($H^\bullet$) e o peróxido de hidrogénio ($H_2O_2$), que difundem até ao DNA e atacam quimicamente as bases azotadas.",
    "distractorAnalysis": [
      "Está incorreta: a radiólise da água (ionização de H2O gerando radicais livres altamente oxidantes que reagem com o DNA) constitui a base fundamental da ação indireta da radiação.",
      "Está incorreta: a energia depositada por doses diagnósticas ou terapêuticas comuns é insuficiente para a ebulição térmica da água tecidual; o dano biológico é químico-radicalar e não por choque térmico.",
      "Está incorreta: a radiólise da água ocorre em qualquer meio aquoso irradiado, sendo universal a todas as células e tecidos vivos biológicos independentemente de comorbilidades."
    ],
    "nursingApplication": "Representa aproximadamente dois terços (cerca de 70%) de todo o dano biológico induzido por radiações de baixo LET como os Raios X e radiações gama."
  },
  {
    "id": 5145,
    "topicId": 5,
    "question": "Durante os cuidados de enfermagem a um doente submetido a procedimentos imagiológicos com radiações, como se aplica na prática o conceito de 'ação indireta via radiólise da água e radicais livres'?",
    "options": [
      "A ação indireta representa menos de um por cento do efeito biológico dos raios X, sendo as suas consequências desprezíveis na génese de mutações genéticas radioinduzidas.",
      "A ação indireta mediada por radicais livres de radiólise da água é responsável por cerca de dois terços (cerca de 65-70%) do dano biológico global produzido por raios X diagnósticos e radiação gama.",
      "O dano indireto por radicais livres ocorre unicamente no compartimento plasmático intravascular, permanecendo o interior das células perfeitamente protegido por barreiras lipídicas.",
      "A ação indireta só se manifesta em indivíduos com deficiência congénita de vitamina C, sendo neutralizada a cem por cento em qualquer pessoa que mantenha alimentação equilibrada."
    ],
    "correctIndex": 1,
    "explanation": "A aplicação de enfermagem para ação indireta via radiólise da água e radicais livres baseia-se no princípio: Representa aproximadamente dois terços (cerca de 70%) de todo o dano biológico induzido por radiações de baixo LET como os Raios X e radiações gama. Esta intervenção garante a segurança radiológica do doente e do profissional.",
    "distractorAnalysis": [
      "Está incorreta: em radiações de baixo LET (raios X e gama), cerca de 2/3 das lesões celulares derivam da ação indireta (mediada por espécies reativas derivadas da água) e 1/3 de ação direta.",
      "Está incorreta: a água está presente no citoplasma e no núcleo celular (em redor da cromatina); os radicais livres difundem distâncias de 2 a 4 nm e colidem com o esqueleto do DNA.",
      "Está incorreta: os sistemas antioxidantes endógenos atenuam uma fração dos radicais livres, mas não impedem a formação de lesões no DNA induzidas por doses de radiação ionizante."
    ],
    "nursingApplication": "Representa aproximadamente dois terços (cerca de 70%) de todo o dano biológico induzido por radiações de baixo LET como os Raios X e radiações gama."
  },
  {
    "id": 5146,
    "topicId": 5,
    "question": "Um enfermeiro analisa os parâmetros biofísicos e os mecanismos de interação em 'ação indireta via radiólise da água e radicais livres'. Qual das seguintes afirmações expressa a correlação científica correta?",
    "options": [
      "O principal produto biológico da radiólise da água celular é o cloreto de sódio isotónico que atua acelerando a condução dos potenciais de ação nas fibras musculares cardíacas.",
      "Os radicais livres formados pela passagem dos raios X são partículas magnéticas com carga positiva permanente que atraem os glóbulos vermelhos para o interior do retículo endoplasmático.",
      "Entre os radicais formados na radiólise aquosa, destaca-se o radical hidroxilo (•OH), que possui um eletrão desemparelhado altamente reativo capaz de quebrar ligações na molécula de DNA.",
      "A radiólise celular liberta exclusivamente fotões de luz ultravioleta que estimulam a produção endógena de calcitriol nas células da medula óssea dos ossos longos."
    ],
    "correctIndex": 2,
    "explanation": "A correlação científica correta demonstra que Destaca-se o radical hidroxilo ($OH^\bullet$), o átomo de hidrogénio ($H^\bullet$) e o peróxido de hidrogénio ($H_2O_2$), que difundem até ao DNA e atacam quimicamente as bases azotadas. O domínio destes fundamentos permite ao enfermeiro assegurar a correta radioproteção e a interpretação dos riscos radiológicos.",
    "distractorAnalysis": [
      "Está incorreta: o radical hidroxilo (•OH) é quimicamente muito agressivo e tem semi-vida de nanossegundos, reagindo avidamente com as bases nitrogenadas e desoxirribose do DNA.",
      "Está incorreta: a radiólise decompõe a molécula de água em espécies reativas (H2O+ -> •OH + H+; e-aquoso, H2O2) e não produz sal mineral de cloreto de sódio.",
      "Está incorreta: radicais livres são entidades químicas com eletrões desemparelhados na orbital externa e não fotões ultravioleta ou partículas macroscópicas magnéticas."
    ],
    "nursingApplication": "Representa aproximadamente dois terços (cerca de 70%) de todo o dano biológico induzido por radiações de baixo LET como os Raios X e radiações gama."
  },
  {
    "id": 5147,
    "topicId": 5,
    "question": "Na física das radiações ionizantes e Raios X aplicada ao contexto hospitalar, em relação a 'efeito do oxigénio na radiossensibilidade celular (Oxygen Enhancement Ratio - OER)', qual é a fundamentação científica exata?",
    "options": [
      "O oxigénio molecular tecidual atua como uma barreira protetora contra a radiação ionizante, absorvendo a totalidade dos fotões de raios X antes de estes atingirem o núcleo celular.",
      "Tecidos em hipóxia grave com fraca oxigenação vascular são cinco vezes mais sensíveis à destruição por raios X do que tecidos normais com oxigenação arterial fisiológica.",
      "O oxigénio celular converte os fotões de raios X em fotões de luz infravermelha, anulando qualquer capacidade de provocar quebras simples ou duplas na hélice de DNA.",
      "A presença de oxigénio molecular tecidual 'fixa' quimicamente os danos provocados pelos radicais livres no DNA (peroxidação), tornando as lesões muito mais difíceis de reparar pelas enzimas celulares."
    ],
    "correctIndex": 3,
    "explanation": "Em física das radiações e imagiologia médica, efeito do oxigénio na radiossensibilidade celular (Oxygen Enhancement Ratio - OER) explica-se pelo facto de que a presença de oxigénio molecular molecular (O₂) na célula 'fixa' permanentemente o dano químico causado pelos radicais livres nas extremidades do DNA quebrado (reação de peroxidação lipídica e do DNA). Tecidos bem oxigenados e vascularizados são cerca de 2 a 3 vezes mais sensíveis à radiação ionizante do que tecidos hipóxicos ou necrosados.",
    "distractorAnalysis": [
      "Está incorreta: a hipótese da fixação pelo oxigénio (R• + O2 -> RO2•) demonstra que o oxigénio torna o dano permanente e quimicamente irreversível pelas vias de reparação enzimática.",
      "Está incorreta: tecidos hipóxicos são significativamente mais radiorresistentes (exigem 2 a 3 vezes mais dose para o mesmo nível de destruição celular tumoral) do que tecidos bem oxigenados.",
      "Está incorreta: o oxigénio atua como um potente radiossensibilizador biológico tecidual e não como barreira mecânica ou conversor atenuante de radiação ionizante."
    ],
    "nursingApplication": "Na radioterapia oncológica, o enfermeiro sabe que manter níveis adequados de hemoglobina (> 10 g/dL) no doente assegura a oxigenação tumoral indispensável à eficácia da radioterapia."
  },
  {
    "id": 5148,
    "topicId": 5,
    "question": "Durante os cuidados de enfermagem a um doente submetido a procedimentos imagiológicos com radiações, como se aplica na prática o conceito de 'efeito do oxigénio na radiossensibilidade celular (Oxygen Enhancement Ratio - OER)'?",
    "options": [
      "Na radioterapia oncológica, o enfermeiro sabe que manter níveis adequados de hemoglobina e oxigenação tecidual é crítico para maximizar a eficácia antitumoral da radiação ionizante.",
      "O enfermeiro deve incentivar a hipóxia dos doentes oncológicos através de hipoventilação voluntária prolongada antes de cada sessão de radioterapia externa para poupar as mucosas.",
      "O enfermeiro orienta a administração de agentes redutores e quelantes de oxigénio antes da tomografia computorizada para impedir a visualização dos vasos arteriais patológicos.",
      "A saturação periférica de oxigénio não tem qualquer influência na radiossensibilidade celular, sendo desnecessária a sua avaliação em utentes submetidos a tratamentos de radioterapia."
    ],
    "correctIndex": 0,
    "explanation": "A aplicação de enfermagem para efeito do oxigénio na radiossensibilidade celular (Oxygen Enhancement Ratio - OER) baseia-se no princípio: Na radioterapia oncológica, o enfermeiro sabe que manter níveis adequados de hemoglobina (> 10 g/dL) no doente assegura a oxigenação tumoral indispensável à eficácia da radioterapia. Esta intervenção garante a segurança radiológica do doente e do profissional.",
    "distractorAnalysis": [
      "Está incorreta: doentes anémicos (com Hb baixa) apresentam hipóxia tumoral que reduz a resposta à radioterapia; corrigir a anemia com transfusão ou eritropoietina melhora a oxigenação e eficácia.",
      "Está incorreta: induzir hipóxia protegeria as células tumorais contra a morte radioinduzida, tornando o tratamento radioterapêutico ineficaz na erradicação tumoral.",
      "Está incorreta: a oxigenação tecidual e os níveis de hemoglobina são determinantes major na resposta radiobiológica celular e sobrevida livre de doença em oncologia."
    ],
    "nursingApplication": "Na radioterapia oncológica, o enfermeiro sabe que manter níveis adequados de hemoglobina (> 10 g/dL) no doente assegura a oxigenação tumoral indispensável à eficácia da radioterapia."
  },
  {
    "id": 5149,
    "topicId": 5,
    "question": "Um enfermeiro analisa os parâmetros biofísicos e os mecanismos de interação em 'efeito do oxigénio na radiossensibilidade celular (Oxygen Enhancement Ratio - OER)'. Qual das seguintes afirmações expressa a correlação científica correta?",
    "options": [
      "O valor de OER para raios X diagnósticos é rigorosamente igual a zero vírgula um, comprovando que a presença de oxigénio reduz a morte celular radioinduzida para um décimo.",
      "O Fator de Amplificação pelo Oxigénio (OER) situa-se tipicamente entre 2,5 e 3,0 para radiações de baixo LET (como raios X), indicando que células oxigenadas são cerca de três vezes mais sensíveis.",
      "O efeito oxigénio é máximo em radiações de altíssimo LET como os iões pesados de carbono, onde o OER atinge valores médios na ordem dos dez a quinze em tecido pulmonar.",
      "O OER quantifica a velocidade de difusão do oxigénio alveolar para a corrente capilar durante a realização de manobras de reanimação cardiorrespiratória em doentes críticos."
    ],
    "correctIndex": 1,
    "explanation": "A correlação científica correta demonstra que Tecidos bem oxigenados e vascularizados são cerca de 2 a 3 vezes mais sensíveis à radiação ionizante do que tecidos hipóxicos ou necrosados. O domínio destes fundamentos permite ao enfermeiro assegurar a correta radioproteção e a interpretação dos riscos radiológicos.",
    "distractorAnalysis": [
      "Está incorreta: OER = Dose em hipóxia / Dose em normóxia para o mesmo efeito biológico; em raios X de baixo LET é de 2,5 a 3,0; em radiações de alto LET aproxima-se de 1,0 (independente de oxigénio).",
      "Está incorreta: o oxigénio amplifica o dano (OER > 1) e não protege a célula contra a morte radiobiológica.",
      "Está incorreta: o OER é um conceito fundamental de radiobiologia quantitativa e não um parâmetro pneumológico de difusão gasosa de cuidados intensivos."
    ],
    "nursingApplication": "Na radioterapia oncológica, o enfermeiro sabe que manter níveis adequados de hemoglobina (> 10 g/dL) no doente assegura a oxigenação tumoral indispensável à eficácia da radioterapia."
  },
  {
    "id": 5150,
    "topicId": 5,
    "question": "Na física das radiações ionizantes e Raios X aplicada ao contexto hospitalar, em relação a 'mecanismos de reparação celular do DNA e aberrações cromossómicas', qual é a fundamentação científica exata?",
    "options": [
      "A reparação do DNA nas células humanas é um processo puramente físico e espontâneo que não envolve enzimas, ocorrendo pela reconstituição térmica passiva das pontes de hidrogénio.",
      "As células neoplásicas malignas possuem vias de reparação de DNA consideravelmente mais eficientes do que os tecidos saudáveis, regenerando todas as quebras cromossómicas sem erros residuais.",
      "As células dispõem de mecanismos enzimáticos de reparação do DNA (como a junção de extremidades não-homólogas NHEJ e a recombinação homóloga HR) para corrigir quebras radioinduzidas.",
      "Qualquer dose de radiação ionizante, por mínima que seja, inativa de forma permanente todos os complexos enzimáticos de reparação celular em todos os tecidos biológicos expostos."
    ],
    "correctIndex": 2,
    "explanation": "Em física das radiações e imagiologia médica, mecanismos de reparação celular do DNA e aberrações cromossómicas explica-se pelo facto de que as células possuem enzimas de reparação por junção de extremidades não-homólogas (NHEJ) e recombinação homóloga (HR) que corrigem quebras de cadeias de DNA. Se a taxa de lesão for demasiado elevada ou se a reparação for incorreta (mismatch), ocorrem translocações cromossómicas, formação de cromossomas dicêntricos e morte celular por catástrofe mitótica.",
    "distractorAnalysis": [
      "Está incorreta: as células humanas possuem complexas maquinarias moleculares de deteção e reparação de danos genéticos; quebras de cadeia simples e duplas são ativamente reparadas por NHEJ e HR.",
      "Está incorreta: os tumores frequentemente apresentam mutações ou defeitos nas vias de reparação de DNA (ex: mutações BRCA1/2, ataxia telangiectasia), o que os torna suscetíveis ao fracionamento da dose.",
      "Está incorreta: a maioria das lesões em doses diagnósticas baixas é reparada com sucesso pelos sistemas celulares; o risco estocástico decorre da possibilidade rara de mutação por reparação errónea."
    ],
    "nursingApplication": "O enfermeiro compreende que o fracionamento da dose em radioterapia (administrar doses diárias de 2 Gy em vez de uma dose única massiva) permite aos tecidos saudáveis reparar os danos entre sessões."
  },
  {
    "id": 5151,
    "topicId": 5,
    "question": "Durante os cuidados de enfermagem a um doente submetido a procedimentos imagiológicos com radiações, como se aplica na prática o conceito de 'mecanismos de reparação celular do DNA e aberrações cromossómicas'?",
    "options": [
      "O fracionamento visa exclusivamente contornar a capacidade elétrica dos disjuntores da rede hospitalar, dividindo a voltagem por várias semanas para poupar os geradores elétricos.",
      "A administração fracionada tem como finalidade primordial acelerar a multiplicação das células tumorais para que o tumor atinja maiores dimensões facilitando a cirurgia posterior.",
      "O espaçamento entre sessões é concebido para permitir que as radiações ionizantes acumuladas no corpo do doente arrefeçam termicamente antes da aplicação da fração subsequente.",
      "O fracionamento da dose em radioterapia explora a capacidade superior dos tecidos saudáveis para reparar o DNA subletal entre sessões, aumentando a tolerância biológica tecidual."
    ],
    "correctIndex": 3,
    "explanation": "A aplicação de enfermagem para mecanismos de reparação celular do DNA e aberrações cromossómicas baseia-se no princípio: O enfermeiro compreende que o fracionamento da dose em radioterapia (administrar doses diárias de 2 Gy em vez de uma dose única massiva) permite aos tecidos saudáveis reparar os danos entre sessões. Esta intervenção garante a segurança radiológica do doente e do profissional.",
    "distractorAnalysis": [
      "Está incorreta: o fracionamento permite a reparação do dano subletal em tecidos normais (com vias de reparação intactas), reoxigenação tumoral e redistribuição no ciclo celular.",
      "Está incorreta: a decisão de fracionar a dose é estritamente biofísica e radiobiológica (modelo linear-quadrático), não tendo relação com custos de eletricidade predial.",
      "Está incorreta: os raios X não se acumulam termicamente no organismo; os intervalos de 24 horas servem para permitir a reparação enzimática celular do DNA e repovoamento de tecidos sãos."
    ],
    "nursingApplication": "O enfermeiro compreende que o fracionamento da dose em radioterapia (administrar doses diárias de 2 Gy em vez de uma dose única massiva) permite aos tecidos saudáveis reparar os danos entre sessões."
  },
  {
    "id": 5152,
    "topicId": 5,
    "question": "Um enfermeiro analisa os parâmetros biofísicos e os mecanismos de interação em 'mecanismos de reparação celular do DNA e aberrações cromossómicas'. Qual das seguintes afirmações expressa a correlação científica correta?",
    "options": [
      "Se a taxa de lesão for excessiva ou a reparação do DNA for imperfeita (mutação por reparação errónea), a célula pode sobreviver com anomalias genómicas, aumentando o risco de carcinogénese.",
      "Qualquer erro enzimático no processo de reparação do DNA é invariavelmente corrigido pela absorção de sais minerais de ferro através da circulação linfática nas horas seguintes.",
      "As mutações estruturais induzidas por reparação anómala de quebras duplas são totalmente eliminadas se o utente realizar exercício físico aeróbio moderado após a exposição.",
      "A reparação errónea de cadeias de nucleótidos é impossível em humanos, dado que as ligases celulares possuem mecanismos quânticos de fidelidade com zero por cento de taxa de erro."
    ],
    "correctIndex": 0,
    "explanation": "A correlação científica correta demonstra que Se a taxa de lesão for demasiado elevada ou se a reparação for incorreta (mismatch), ocorrem translocações cromossómicas, formação de cromossomas dicêntricos e morte celular por catástrofe mitótica. O domínio destes fundamentos permite ao enfermeiro assegurar a correta radioproteção e a interpretação dos riscos radiológicos.",
    "distractorAnalysis": [
      "Está incorreta: a união incorreta de quebras de cadeia dupla (misrepair) por NHEJ gera rearranjos, translocações cromossómicas ou mutações pontuais que conduzem ao cancro radioinduzido.",
      "Está incorreta: a integridade genética depende de fidelidade enzimática molecular; o exercício ou suplementos de ferro não reparam deleções ou translocações cromossómicas.",
      "Está incorreta: a reparação celular, particularmente por ligação de extremidades não-homólogas (NHEJ), é propensa a erros (error-prone), sendo a origem de mutações estocásticas somáticas."
    ],
    "nursingApplication": "O enfermeiro compreende que o fracionamento da dose em radioterapia (administrar doses diárias de 2 Gy em vez de uma dose única massiva) permite aos tecidos saudáveis reparar os danos entre sessões."
  },
  {
    "id": 5153,
    "topicId": 5,
    "question": "Na física das radiações ionizantes e Raios X aplicada ao contexto hospitalar, em relação a 'apoptose induzida pela proteína supressora tumoral p53', qual é a fundamentação científica exata?",
    "options": [
      "A presença de lesões no genoma ativa a síntese maciça de colagénio extracelular, o qual invade o núcleo celular para envolver os cromossomas numa bainha impermeável à radiação.",
      "Quebras de cadeia dupla de DNA não reparadas ativam a quinase ATM, que estabiliza e fosforila a proteína p53, desencadeando paragem do ciclo celular em G1/S ou morte por apoptose.",
      "A proteína p53 é ativada unicamente em situações de choque anafilactóide a contrastes, não desempenhando qualquer papel no controlo do ciclo celular após exposição a radiações.",
      "A ativação da via apoptótica por radiação ionizante provoca a calcificação instantânea de todas as mitocôndrias celulares, tornando o citoplasma inteiramente radiopaco à tomografia."
    ],
    "correctIndex": 1,
    "explanation": "Em física das radiações e imagiologia médica, apoptose induzida pela proteína supressora tumoral p53 explica-se pelo facto de que a presença de quebras duplas não reparadas ativa a via da quinase ATM, fosforilando e acumulando a proteína p53 no núcleo. A p53 bloqueia o ciclo celular na fase G1/S para permitir a reparação; se o dano for irreparável, a p53 desencadeia a transcrição de genes pró-apoptóticos (como BAX), ordenando a morte celular programada.",
    "distractorAnalysis": [
      "Está incorreta: a via ATM-p53-p21 é o sensor central de quebras de cadeia dupla; a p53 induz paragem em G1 para permitir reparação ou transativa genes pró-apoptóticos (BAX, PUMA).",
      "Está incorreta: o colagénio é uma proteína da matriz extracelular produzida por fibroblastos e não penetra o núcleo celular para encadear cromossomas danificados.",
      "Está incorreta: a p53 é o 'guardião do genoma' e atua centralmente na resposta radiobiológica a danos no DNA; a sua inativação tumoral confere radiorresistência à apoptose."
    ],
    "nursingApplication": "O enfermeiro identifica reações de mucosite e epidermite durante a radioterapia como manifestações clínicas da apoptose de células basais da pele e mucosas estimulada por esta cascata molecular."
  },
  {
    "id": 5154,
    "topicId": 5,
    "question": "Durante os cuidados de enfermagem a um doente submetido a procedimentos imagiológicos com radiações, como se aplica na prática o conceito de 'apoptose induzida pela proteína supressora tumoral p53'?",
    "options": [
      "O enfermeiro deduz que a mucosite em radioterapia de cabeça e pescoço resulta de uma infeção viral primária transmitida pelo feixe do acelerador linear através do ar da sala.",
      "O enfermeiro orienta a remoção cirúrgica imediata de toda a mucosa oral afetada por mucosite para impedir que as células irradiadas contaminem as glândulas salivares vizinhas.",
      "O enfermeiro identifica reações agudas de mucosite e epidermite durante a radioterapia como manifestações clínicas decorrentes da morte celular por apoptose e catástrofe mitótica na camada basal.",
      "O enfermeiro desvaloriza queixas de odinofagia e disfagia em doentes irradiados, considerando que a radiação ionizante externa não produz lesões em mucosas do trato digestivo."
    ],
    "correctIndex": 2,
    "explanation": "A aplicação de enfermagem para apoptose induzida pela proteína supressora tumoral p53 baseia-se no princípio: O enfermeiro identifica reações de mucosite e epidermite durante a radioterapia como manifestações clínicas da apoptose de células basais da pele e mucosas estimulada por esta cascata molecular. Esta intervenção garante a segurança radiológica do doente e do profissional.",
    "distractorAnalysis": [
      "Está incorreta: as células basais da mucosa e epiderme têm alta taxa proliferativa (Bergonié e Tribondeau) e sofrem apoptose/morte mitótica em doses cumulativas elevadas de radioterapia.",
      "Está incorreta: a mucosite radioinduzida é uma lesão tecidual estéril inflamatória decorrente da depleção de células estaminais epiteliais basais pela radiação ionizante fracionada.",
      "Está incorreta: o tratamento da mucosite assenta em higiene oral rigorosa, analgesia escalonada, nutrição adequada e profilaxia de superinfeções secundárias, sem excisão cirúrgica."
    ],
    "nursingApplication": "O enfermeiro identifica reações de mucosite e epidermite durante a radioterapia como manifestações clínicas da apoptose de células basais da pele e mucosas estimulada por esta cascata molecular."
  },
  {
    "id": 5155,
    "topicId": 5,
    "question": "Um enfermeiro analisa os parâmetros biofísicos e os mecanismos de interação em 'apoptose induzida pela proteína supressora tumoral p53'. Qual das seguintes afirmações expressa a correlação científica correta?",
    "options": [
      "A p53 atua acelerando a passagem da célula para a mitose com máxima rapidez para expelir os cromossomas lesados para o espaço extracelular antes da replicação do genoma.",
      "A ausência funcional de p53 em tumores torna as células extremamente sensíveis à morte por radiação ionizante em virtude da ausência de reservas energéticas de glicogénio.",
      "A proteína p53 reverte o efeito estocástico das radiações ionizantes através da conversão dos fotões X em ondas mecânicas inócuas para o citoesqueleto microtubular.",
      "A proteína p53 bloqueia o ciclo celular na fase G1/S através da indução de p21 para facultar tempo de reparação; se as quebras persistirem sem reparação, a célula é encaminhada para apoptose."
    ],
    "correctIndex": 3,
    "explanation": "A correlação científica correta demonstra que A p53 bloqueia o ciclo celular na fase G1/S para permitir a reparação; se o dano for irreparável, a p53 desencadeia a transcrição de genes pró-apoptóticos (como BAX), ordenando a morte celular programada. O domínio destes fundamentos permite ao enfermeiro assegurar a correta radioproteção e a interpretação dos riscos radiológicos.",
    "distractorAnalysis": [
      "Está incorreta: a p53 transativa a p21 (inibidor de quinases dependentes de ciclina), induzindo paragem em G1; perante dano genómico irreparável, ativa a via intrínseca mitocondrial da apoptose.",
      "Está incorreta: tumores mutados em p53 não conseguem induzir apoptose eficiente após radiação, tornando-se mais radiorresistentes à morte celular precoce intermitótica.",
      "Está incorreta: a p53 é uma proteína intracelular de regulação génica e não um refletor ou transdutor de fotões X de alta frequência."
    ],
    "nursingApplication": "O enfermeiro identifica reações de mucosite e epidermite durante a radioterapia como manifestações clínicas da apoptose de células basais da pele e mucosas estimulada por esta cascata molecular."
  },
  {
    "id": 5156,
    "topicId": 5,
    "question": "Na física das radiações ionizantes e Raios X aplicada ao contexto hospitalar, em relação a 'definição e características dos efeitos estocásticos', qual é a fundamentação científica exata?",
    "options": [
      "Efeitos estocásticos são efeitos probabilísticos sem limiar de dose: qualquer dose de radiação transporta um risco proporcional, aumentando a probabilidade de cancro com a dose acumulada.",
      "Efeitos estocásticos manifestam-se apenas se o utente absorver uma dose pontual superior a dois grays de radiação de corpo inteiro num único disparo radiológico hospitalar.",
      "Nos efeitos estocásticos a gravidade da patologia clínica aumenta proporcionalmente com a dose absorvida, sendo o cancro mais grave se a exposição tiver sido mais elevada.",
      "Efeitos estocásticos circunscrevem-se estritamente à destruição mecânica da derme superficial em procedimentos de fluoroscopia prolongada no bloco operatório de ortopedia."
    ],
    "correctIndex": 0,
    "explanation": "Em física das radiações e imagiologia médica, definição e características dos efeitos estocásticos explica-se pelo facto de que são efeitos probabilísticos que não possuem qualquer limiar de dose de radiação (modelo linear sem limiar, LNT): qualquer dose infinitesimal de radiação transporta um risco teórico de ocorrência. A probabilidade de ocorrência do efeito aumenta linearmente com a dose acumulada, mas a gravidade clínica do efeito independe da dose recebida.",
    "distractorAnalysis": [
      "Está incorreta: efeitos estocásticos (como carcinogénese e mutações hereditárias) não têm dose de limiar; a sua probabilidade aumenta com a dose, mas a severidade é independente da dose.",
      "Está incorreta: ter um limiar de dose e severidade dependente da dose define os efeitos determinísticos (reações teciduais) e não os efeitos estocásticos probabilísticos.",
      "Está incorreta: a gravidade de uma neoplasia radioinduzida é a mesma que a de um cancro espontâneo de mesma histologia; a dose recebida não torna a neoplasia mais ou menos agressiva."
    ],
    "nursingApplication": "Os exemplos clássicos são a indução de cancro radioinduzido (como leucemias ou carcinomas sólidos) e mutações genéticas hereditárias transmitidas à descendência."
  },
  {
    "id": 5157,
    "topicId": 5,
    "question": "Durante os cuidados de enfermagem a um doente submetido a procedimentos imagiológicos com radiações, como se aplica na prática o conceito de 'definição e características dos efeitos estocásticos'?",
    "options": [
      "Os exemplos típicos de efeitos estocásticos incluem o eritema cutâneo precoce, a necrose dérmica profunda e a perda definitiva dos folículos capilares no couro cabeludo.",
      "Os exemplos clássicos de efeitos estocásticos são o cancro radioinduzido (como leucemias ou carcinomas papilares da tiroide) e os efeitos hereditários transmitidos à descendência.",
      "Constituem efeitos estocásticos as queimaduras térmicas induzidas pelo contacto físico da pele com lâmpadas incandescentes do negatoscópio da sala de observação clínica.",
      "A catarata radioinduzida no cristalino ocular é o exemplo mais puro de efeito estocástico por apresentar limiar de dose estabelecido em vinte milisieverts anuais obrigatórios."
    ],
    "correctIndex": 1,
    "explanation": "A aplicação de enfermagem para definição e características dos efeitos estocásticos baseia-se no princípio: Os exemplos clássicos são a indução de cancro radioinduzido (como leucemias ou carcinomas sólidos) e mutações genéticas hereditárias transmitidas à descendência. Esta intervenção garante a segurança radiológica do doente e do profissional.",
    "distractorAnalysis": [
      "Está incorreta: eritema, necrose e alopecia são efeitos determinísticos (reações teciduais) que surgem acima de limiares de dose bem definidos e com severidade proporcional à dose.",
      "Está incorreta: queimaduras térmicas decorrem de calor condutivo e não de interações ionizantes quânticas probabilísticas com o material genético das células estaminais.",
      "Está incorreta: a catarata radioinduzida é uma reação tecidual (efeito determinístico) com dose de limiar comprovada (~0,5 Gy), exigindo proteção com óculos plumbíferos."
    ],
    "nursingApplication": "Os exemplos clássicos são a indução de cancro radioinduzido (como leucemias ou carcinomas sólidos) e mutações genéticas hereditárias transmitidas à descendência."
  },
  {
    "id": 5158,
    "topicId": 5,
    "question": "Um enfermeiro analisa os parâmetros biofísicos e os mecanismos de interação em 'definição e características dos efeitos estocásticos'. Qual das seguintes afirmações expressa a correlação científica correta?",
    "options": [
      "A probabilidade do efeito estocástico decresce exponencialmente com o número de radiografias realizadas, conferindo imunidade biológica total após o décimo exame tomográfico anual.",
      "O período de latência de um efeito estocástico é de escassos dez segundos após o feixe cessar, manifestando-se invariavelmente por febre alta e taquicardia em repouso no leito.",
      "A probabilidade de ocorrência do efeito estocástico aumenta linearmente com a dose efetiva acumulada (modelo LNT), mas a gravidade clínica da doença independe da dose que a originou.",
      "Os efeitos estocásticos afetam unicamente as células senescentes que já perderam a capacidade de divisão celular, poupando integralmente as células estaminais jovens em mitose."
    ],
    "correctIndex": 2,
    "explanation": "A correlação científica correta demonstra que A probabilidade de ocorrência do efeito aumenta linearmente com a dose acumulada, mas a gravidade clínica do efeito independe da dose recebida. O domínio destes fundamentos permite ao enfermeiro assegurar a correta radioproteção e a interpretação dos riscos radiológicos.",
    "distractorAnalysis": [
      "Está incorreta: a probabilidade é linear sem limiar; um cancro radioinduzido provocado por 10 mSv tem a mesma evolução clínica de um provocado por 100 mSv.",
      "Está incorreta: doses de radiação ionizante são cumulativas ao longo da vida para o risco estocástico; não existe 'imunização' ou tolerância adquirida à carcinogénese por irradiação prévia.",
      "Está incorreta: os períodos de latência clínica são longos: 2 a 5 anos para leucemias e 10 a 30 anos (ou mais) para tumores sólidos, tornando o diagnóstico desfasado no tempo."
    ],
    "nursingApplication": "Os exemplos clássicos são a indução de cancro radioinduzido (como leucemias ou carcinomas sólidos) e mutações genéticas hereditárias transmitidas à descendência."
  },
  {
    "id": 5159,
    "topicId": 5,
    "question": "Na física das radiações ionizantes e Raios X aplicada ao contexto hospitalar, em relação a 'definição e características dos efeitos determinísticos (reações teciduais)', qual é a fundamentação científica exata?",
    "options": [
      "Efeitos determinísticos ocorrem com igual probabilidade em qualquer valor de dose, inclusive em exposições ultrabaixas de radiação cósmica durante viagens de avião comercial.",
      "A gravidade de um efeito determinístico é sempre constante e ligeira, não dependendo de a dose administrada ser de dois grays ou de cinquenta grays de corpo inteiro no doente.",
      "Efeitos determinísticos caracterizam-se por transmissão hereditária transgeracional aos filhos e netos através de mutações no DNA das células da linha germinativa humana.",
      "Efeitos determinísticos (reações teciduais) possuem um limiar de dose bem definido: só ocorrem se a dose absorvida exceder esse valor, aumentando a sua gravidade com a magnitude da dose."
    ],
    "correctIndex": 3,
    "explanation": "Em física das radiações e imagiologia médica, definição e características dos efeitos determinísticos (reações teciduais) explica-se pelo facto de que são efeitos biológicos que possuem um limiar de dose bem definido: só ocorrem se a dose de radiação absorvida exceder esse limiar específico no tecido. Acima do limiar, a gravidade clínica da lesão aumenta proporcionalmente com a dose absorvida, devido à morte de uma fração crítica de células funcionais do órgão.",
    "distractorAnalysis": [
      "Está incorreta: efeitos determinísticos decorrem de morte de frações significativas de células funcionais; abaixo do limiar os tecidos regeneram sem perda funcional; acima dele surge lesão clínica.",
      "Está incorreta: abaixo do limiar (ex: <2 Gy na pele) não ocorre eritema clínico; a gravidade (eritema -> descamação seca -> descamação húmida -> necrose) escala com a dose recebida.",
      "Está incorreta: efeitos determinísticos são lesões somáticas teciduais que afetam o indivíduo exposto; as mutações transmitidas à descendência constituem efeitos estocásticos hereditários."
    ],
    "nursingApplication": "Os exemplos incluem o eritema cutâneo (limiar ~2 Gy), descamação húmida, cataratas na lente ocular (limiar ~0,5 Gy), esterilidade gonadal temporária ou permanente e síndrome aguda de radiação."
  },
  {
    "id": 5160,
    "topicId": 5,
    "question": "Durante os cuidados de enfermagem a um doente submetido a procedimentos imagiológicos com radiações, como se aplica na prática o conceito de 'definição e características dos efeitos determinísticos (reações teciduais)'?",
    "options": [
      "Os exemplos clássicos de reações teciduais determinísticas incluem o eritema cutâneo (limiar ~2 Gy), descamação húmida (~15 Gy), necrose dérmica (>18 Gy) e a catarata ocular (~0,5 Gy).",
      "São exemplos de reações teciduais determinísticas o carcinoma basocelular do nariz e a leucemia linfoblástica aguda que surgem vinte anos após a realização de uma radiografia de tórax.",
      "O eritema cutâneo em radiologia constitui um efeito estocástico sem dose de limiar que pode ser desencadeado por um único fotão de raios X transmitido através da pele da mão.",
      "A formação de catarata no cristalino ocular é um efeito hereditário recessivo ligado ao cromossoma X que se manifesta unicamente em enfermeiros do sexo masculino em idade fértil."
    ],
    "correctIndex": 0,
    "explanation": "A aplicação de enfermagem para definição e características dos efeitos determinísticos (reações teciduais) baseia-se no princípio: Os exemplos incluem o eritema cutâneo (limiar ~2 Gy), descamação húmida, cataratas na lente ocular (limiar ~0,5 Gy), esterilidade gonadal temporária ou permanente e síndrome aguda de radiação. Esta intervenção garante a segurança radiológica do doente e do profissional.",
    "distractorAnalysis": [
      "Está incorreta: cancros radioinduzidos com latência de décadas são efeitos estocásticos e não reações determinísticas; não possuem limiar e a sua gravidade independe da dose.",
      "Está incorreta: eritema requer a destruição de uma proporção crítica de células da camada basal epidérmica, o que exige doses elevadas superiores a cerca de 2 Gy de dose absorvida.",
      "Está incorreta: a catarata por radiação resulta da opacificação de fibras do cristalino danificadas (tecido avascular sem regeneração eficaz), sendo um efeito determinístico somático ocular."
    ],
    "nursingApplication": "Os exemplos incluem o eritema cutâneo (limiar ~2 Gy), descamação húmida, cataratas na lente ocular (limiar ~0,5 Gy), esterilidade gonadal temporária ou permanente e síndrome aguda de radiação."
  },
  {
    "id": 5161,
    "topicId": 5,
    "question": "Um enfermeiro analisa os parâmetros biofísicos e os mecanismos de interação em 'definição e características dos efeitos determinísticos (reações teciduais)'. Qual das seguintes afirmações expressa a correlação científica correta?",
    "options": [
      "Acima do limiar de dose, a lesão tecidual desaparece instantaneamente por feedback metabólico positivo ativado pelas glândulas suprarrenais em resposta à secreção de adrenalina.",
      "Acima da dose de limiar tecidual, a gravidade clínica da lesão aumenta proporcionalmente com a dose absorvida devido à perda massiva e irreparável de células clonogénicas no tecido.",
      "O limiar de dose de um tecido biológico é imutável perante a taxa de dose, produzindo a mesma resposta se administrada em um segundo ou fracionada ao longo de seis meses.",
      "A gravidade dos efeitos determinísticos independe da dose absorvida, variando unicamente em função da cor da pele e da concentração sérica de melanócitos na derme reticular."
    ],
    "correctIndex": 1,
    "explanation": "A correlação científica correta demonstra que Acima do limiar, a gravidade clínica da lesão aumenta proporcionalmente com a dose absorvida, devido à morte de uma fração crítica de células funcionais do órgão. O domínio destes fundamentos permite ao enfermeiro assegurar a correta radioproteção e a interpretação dos riscos radiológicos.",
    "distractorAnalysis": [
      "Está incorreta: quanto maior a dose acima do limiar, maior a percentagem de células progenitoras destruídas, agravando a severidade da falência tecidual e o tempo de cicatrização.",
      "Está incorreta: doses maciças causam lise celular e necrose isquémica irreversível, não sendo neutralizadas por secreção hormonal endógena de catecolaminas.",
      "Está incorreta: a taxa de dose e o fracionamento influenciam muito o limiar determinístico; doses administradas lentamente permitem reparação celular contínua, elevando o limiar de tolerância."
    ],
    "nursingApplication": "Os exemplos incluem o eritema cutâneo (limiar ~2 Gy), descamação húmida, cataratas na lente ocular (limiar ~0,5 Gy), esterilidade gonadal temporária ou permanente e síndrome aguda de radiação."
  },
  {
    "id": 5162,
    "topicId": 5,
    "question": "Na física das radiações ionizantes e Raios X aplicada ao contexto hospitalar, em relação a 'modelo Linear Sem Limiar (LNT - Linear No-Threshold) na radioproteção', qual é a fundamentação científica exata?",
    "options": [
      "O modelo LNT postula a existência de um limiar universal de cem milisieverts abaixo do qual a radiação ionizante é totalmente inofensiva e acelera a renovação biológica celular.",
      "O modelo LNT define que a radiação em doses baixas previne o aparecimento de qualquer mutação genética, recomendando a exposição diária de profissionais de saúde em bloco.",
      "O modelo Linear Sem Limiar (LNT) assume que qualquer dose de radiação ionizante, por mais baixa que seja, acarreta um risco incremental proporcional de induzir efeitos estocásticos.",
      "O modelo LNT é aplicável exclusivamente ao cálculo de doses térmicas de ultrassons fisiátricos, sendo rejeitado por todas as comissões internacionais de proteção radiológica."
    ],
    "correctIndex": 2,
    "explanation": "Em física das radiações e imagiologia médica, modelo Linear Sem Limiar (LNT - Linear No-Threshold) na radioproteção explica-se pelo facto de que o modelo regulatório internacional que assume que não existe nenhuma dose de radiação ionizante totalmente isenta de risco biológico potencial. Mesmo a dose de uma única radiografia periapical ou de tórax transporta uma probabilidade estatística teórica mínima de mutação no DNA celular.",
    "distractorAnalysis": [
      "Está incorreta: o modelo LNT (Linear No-Threshold) é a base prudente da radioproteção internacional (ICRP); assume que a probabilidade de cancro escala em linha reta desde a dose zero.",
      "Está incorreta: postular que abaixo de 100 mSv o risco é nulo viola o modelo LNT adotado pelos regulamentos hospitalares e códigos de radioproteção clínica em vigor.",
      "Está incorreta: o LNT estabelece a relação entre dose e cancro radioinduzido na proteção radiológica, sustentando os princípios ALARA, justificação médica e otimização das doses."
    ],
    "nursingApplication": "Este modelo científico fundamenta a conduta deontológica do enfermeiro: nunca realizar um exame radiológico sem indicação clínica formalmente justificada por um médico."
  },
  {
    "id": 5163,
    "topicId": 5,
    "question": "Durante os cuidados de enfermagem a um doente submetido a procedimentos imagiológicos com radiações, como se aplica na prática o conceito de 'modelo Linear Sem Limiar (LNT - Linear No-Threshold) na radioproteção'?",
    "options": [
      "Este modelo autoriza o enfermeiro a dispensar o uso de dosímetro individual no serviço de hemodinâmica, desde que o número total de exames semanais seja inferior a dez procedimentos.",
      "Este modelo determina que os enfermeiros grávidos devem ser transferidos para unidades de radiologia intervencional de alta dose para beneficiar da hormese celular profilática.",
      "Este modelo estabelece que a proteção radiológica é desnecessária em crianças porque o seu organismo em desenvolvimento regenera integralmente todas as mutações no DNA nuclear.",
      "Este modelo fundamenta a prática de enfermagem e o princípio ALARA: mesmo perante doses diagnósticas mínimas, devem aplicar-se tempo, distância e blindagem para reduzir exposições."
    ],
    "correctIndex": 3,
    "explanation": "A aplicação de enfermagem para modelo Linear Sem Limiar (LNT - Linear No-Threshold) na radioproteção baseia-se no princípio: Este modelo científico fundamenta a conduta deontológica do enfermeiro: nunca realizar um exame radiológico sem indicação clínica formalmente justificada por um médico. Esta intervenção garante a segurança radiológica do doente e do profissional.",
    "distractorAnalysis": [
      "Está incorreta: sob o modelo LNT, cada milisievert evitado representa uma redução real no risco de cancro ao longo da vida; o princípio ALARA é consequência direta desta premissa biofísica.",
      "Está incorreta: a monitorização dosimétrica individual com dosímetro de corpo inteiro e de extremidades em hemodinâmica é obrigatória por lei e essencial para a segurança ocupacional.",
      "Está incorreta: a gravidez exige proteção acrescida do feto (limite de 1 mSv ao longo de toda a gestação); grávidas devem ser protegidas de tarefas com risco de alta exposição."
    ],
    "nursingApplication": "Este modelo científico fundamenta a conduta deontológica do enfermeiro: nunca realizar um exame radiológico sem indicação clínica formalmente justificada por um médico."
  },
  {
    "id": 5164,
    "topicId": 5,
    "question": "Um enfermeiro analisa os parâmetros biofísicos e os mecanismos de interação em 'modelo Linear Sem Limiar (LNT - Linear No-Threshold) na radioproteção'. Qual das seguintes afirmações expressa a correlação científica correta?",
    "options": [
      "Mesmo uma radiografia simples com dose efetiva de 0,02 mSv encerra uma probabilidade matemática infinitesimal, mas não rigorosamente nula, de iniciar uma mutação carcinogénica.",
      "Doses inferiores a cinco milisieverts são física e biologicamente incapazes de quebrar qualquer ligação química, atuando no organismo como agentes antioxidantes sistémicos puros.",
      "O modelo LNT comprova que realizar uma radiografia dentária no início da vida reduz para metade a incidência de leucemias agudas durante toda a idade adulta avançada.",
      "A probabilidade de dano estocástico atinge cem por cento em qualquer exame de imagem que utilize meios de contraste hidrossolúveis administrados por cateter venoso periférico."
    ],
    "correctIndex": 0,
    "explanation": "A correlação científica correta demonstra que Mesmo a dose de uma única radiografia periapical ou de tórax transporta uma probabilidade estatística teórica mínima de mutação no DNA celular. O domínio destes fundamentos permite ao enfermeiro assegurar a correta radioproteção e a interpretação dos riscos radiológicos.",
    "distractorAnalysis": [
      "Está incorreta: pela teoria do impacto quântico do modelo LNT, um único fotão de raios X tem o potencial físico de provocar uma quebra dupla não reparada que leve à transformação maligna.",
      "Está incorreta: mesmo um único fotão de 50 keV carrega energia suficiente para ionizar centenas de átomos; doses baixas produzem poucas ionizações, mas cada uma quebra ligações químicas.",
      "Está incorreta: meios de contraste aumentam a atenuação dos raios X nos vasos, mas não elevam a probabilidade de mutação para 100%; o risco estocástico mantém-se proporcional à dose absorvida."
    ],
    "nursingApplication": "Este modelo científico fundamenta a conduta deontológica do enfermeiro: nunca realizar um exame radiológico sem indicação clínica formalmente justificada por um médico."
  },
  {
    "id": 5165,
    "topicId": 5,
    "question": "Na física das radiações ionizantes e Raios X aplicada ao contexto hospitalar, em relação a 'Síndrome Aguda de Radiação (SAR) e as suas três formas clínicas', qual é a fundamentação científica exata?",
    "options": [
      "A Síndrome Aguda de Radiação desenvolve-se exclusivamente em doentes submetidos a ressonância magnética do crânio com administração de agentes de contraste paramagnético de gadolínio.",
      "A Síndrome Aguda de Radiação (ARS) ocorre após exposição corporal total massiva com doses elevadas (>1 Gy) num curto intervalo temporal, evoluindo por fases clínicas bem caracterizadas.",
      "A ARS é uma reação alérgica cutânea de hipersensibilidade tardia desencadeada pelo contacto com as lamelas de chumbo da grelha de Potter-Bucky durante radiografias de tórax no leito.",
      "A Síndrome Aguda de Radiação manifesta-se unicamente decorridos trinta anos após uma exposição acidental, iniciando-se por perda progressiva da acuidade auditiva bilateral."
    ],
    "correctIndex": 1,
    "explanation": "Em física das radiações e imagiologia médica, Síndrome Aguda de Radiação (SAR) e as suas três formas clínicas explica-se pelo facto de que ocorre após irradiação corporal total massiva com doses elevadas (> 1 Gy) num curto intervalo de tempo (acidentes nucleares). Evolui através da forma hematopoética (1 a 6 Gy, aplasia medular e neutropenia), forma gastrointestinal (6 a 20 Gy, destruição das criptas intestinais, diarreia profusa e sépsis) e neurovascular (> 20 Gy, colapso circulatório, edema cerebral e óbito em 24-48h).",
    "distractorAnalysis": [
      "Está incorreta: a ARS (Acute Radiation Syndrome) resulta de irradiação penetrante aguda de todo o corpo (>1 Gy) em acidentes nucleares ou radiológicos graves, evoluindo em dias ou semanas.",
      "Está incorreta: a RMN utiliza radiação não ionizante (campos magnéticos e radiofrequência); gadolínio pode causar fibrose sistémica nefrogénica em insuficiência renal, mas não ARS.",
      "Está incorreta: a ARS é uma patologia sistémica letal aguda decorrente de destruição massiva de tecidos de rápida renovação (medula óssea, epitélio digestivo e sistema cardiovascular)."
    ],
    "nursingApplication": "Em caso de catástrofe radioativa, o enfermeiro em isolamento protetor reverso cuida do doente aplásico com medidas rigorosas de barreira, suporte transfusional, antibióticos e fatores de crescimento hematopoiético (G-CSF)."
  },
  {
    "id": 5166,
    "topicId": 5,
    "question": "Durante os cuidados de enfermagem a um doente submetido a procedimentos imagiológicos com radiações, como se aplica na prática o conceito de 'Síndrome Aguda de Radiação (SAR) e as suas três formas clínicas'?",
    "options": [
      "O enfermeiro deve administrar grandes volumes de leite morno oral a todas as vítimas de irradiação aguda para promover a absorção gástrica de cálcio e neutralizar a radiação interna.",
      "O enfermeiro coloca as vítimas de irradiação aguda em enfermarias comuns abertas sem qualquer precaução de assepsia, pois os leucócitos mantêm-se totalmente imunes à radiação.",
      "Em vítimas de acidente de radiação aguda em fase de aplasia medular, o enfermeiro institui isolamento protetor estrito, monitorização hemodinâmica rigorosa e vigilância febril ativa.",
      "O enfermeiro orienta a equipa a despir o equipamento de proteção individual dentro da zona de contaminação radioativa quente para evitar a acumulação de resíduos na triagem médica."
    ],
    "correctIndex": 2,
    "explanation": "A aplicação de enfermagem para Síndrome Aguda de Radiação (SAR) e as suas três formas clínicas baseia-se no princípio: Em caso de catástrofe radioativa, o enfermeiro em isolamento protetor reverso cuida do doente aplásico com medidas rigorosas de barreira, suporte transfusional, antibióticos e fatores de crescimento hematopoiético (G-CSF). Esta intervenção garante a segurança radiológica do doente e do profissional.",
    "distractorAnalysis": [
      "Está incorreta: a neutropenia profunda e trombocitopenia na síndrome hematopoiética exigem isolamento reverso/protetor, profilaxia antimicrobiana, transfusão de plaquetas e fatores de crescimento (G-CSF).",
      "Está incorreta: ingestão de leite não atua na irradiação aguda externa; medidas médicas incluem suporte hemodinâmico, suporte transfusional e descontaminação de pele se houver partículas.",
      "Está incorreta: o desnudamento e descontaminação de vítimas contaminadas decorre na fronteira entre a zona controlada e a zona limpa, evitando a dispersão de radionuclídeos."
    ],
    "nursingApplication": "Em caso de catástrofe radioativa, o enfermeiro em isolamento protetor reverso cuida do doente aplásico com medidas rigorosas de barreira, suporte transfusional, antibióticos e fatores de crescimento hematopoiético (G-CSF)."
  },
  {
    "id": 5167,
    "topicId": 5,
    "question": "Um enfermeiro analisa os parâmetros biofísicos e os mecanismos de interação em 'Síndrome Aguda de Radiação (SAR) e as suas três formas clínicas'. Qual das seguintes afirmações expressa a correlação científica correta?",
    "options": [
      "A forma hematopoiética manifesta-se com doses superiores a cinquenta grays, levando à morte imediata do utente por colapso cardiovascular agudo em escassos trinta segundos pós-exposição.",
      "A forma gastrointestinal da ARS atua estimulando o apetite e promovendo a regeneração acelerada de todas as vilosidades do intestino delgado nas primeiras vinte e quatro horas.",
      "A síndrome aguda de radiação apresenta taxa de cura de cem por cento sem qualquer intervenção clínica, mesmo quando a dose corporal total absorvida ultrapassa trinta grays de radiação gama.",
      "A ARS evolui sequencialmente na forma hematopoiética (1 a 6 Gy, aplasia e neutropenia grave), gastrointestinal (6 a 10 Gy, diarreia e desidratação letal) e neurovascular (>20 Gy, colapso e morte rápida)."
    ],
    "correctIndex": 3,
    "explanation": "A correlação científica correta demonstra que Evolui através da forma hematopoética (1 a 6 Gy, aplasia medular e neutropenia), forma gastrointestinal (6 a 20 Gy, destruição das criptas intestinais, diarreia profusa e sépsis) e neurovascular (> 20 Gy, colapso circulatório, edema cerebral e óbito em 24-48h). O domínio destes fundamentos permite ao enfermeiro assegurar a correta radioproteção e a interpretação dos riscos radiológicos.",
    "distractorAnalysis": [
      "Está incorreta: as síndromes clássicas da ARS são dependentes da dose: hematopoiética (1-6 Gy, pico de mortalidade às 2-6 semanas), gastrointestinal (6-10 Gy, letal em 1-2 semanas) e neurovascular (>20 Gy, fatal em 24-48h).",
      "Está incorreta: doses de 50 Gy provocam a síndrome neurovascular fulminante (edema cerebral maciço, colapso hemodinâmico e coma) e não a forma hematopoiética pura.",
      "Está incorreta: a síndrome gastrointestinal causa descamação total do epitélio mucoso do intestino delgado, levando a hemorragia, translocação bacteriana maciça e choque séptico hipovolémico."
    ],
    "nursingApplication": "Em caso de catástrofe radioativa, o enfermeiro em isolamento protetor reverso cuida do doente aplásico com medidas rigorosas de barreira, suporte transfusional, antibióticos e fatores de crescimento hematopoiético (G-CSF)."
  },
  {
    "id": 5168,
    "topicId": 5,
    "question": "Na física das radiações ionizantes e Raios X aplicada ao contexto hospitalar, em relação a 'eritema cutâneo e radiodermite em intervenções fluoroscópicas prolongadas', qual é a fundamentação científica exata?",
    "options": [
      "Procedimentos intervencionais longos com fluoroscopia contínua (como embolizações ou cateterismos difíceis) podem ultrapassar limiares cutâneos e induzir eritema ou radiodermite grave.",
      "A fluoroscopia operatória é desprovida de risco para a pele do utente porque os feixes contínuos arrefecem o estrato córneo epidérmico através de convecção forçada de eletrões.",
      "Lesões cutâneas radioinduzidas em hemodinâmica manifestam-se invariavelmente durante a intervenção cirúrgica, permitindo ao cirurgião interromper o procedimento ao primeiro sinal de rubor.",
      "O risco de lesão cutânea em fluoroscopia surge exclusivamente se a pele do doente tiver sido desinfetada com álcool etílico a setenta por cento antes da punção vascular percutânea."
    ],
    "correctIndex": 0,
    "explanation": "Em física das radiações e imagiologia médica, eritema cutâneo e radiodermite em intervenções fluoroscópicas prolongadas explica-se pelo facto de que procedimentos endovasculares complexos (como cateterismos cardíacos difíceis ou embolizações com fluoroscopia contínua de várias horas) podem aplicar doses cutâneas locais superiores a 2 a 5 Gy. A morte das células estaminais da camada basal da epiderme origina eritema que surge 1 a 3 semanas após o exame, podendo evoluir para ulceração necrótica dolorosa.",
    "distractorAnalysis": [
      "Está incorreta: escopia prolongada pode acumular doses cutâneas superiores a 2 Gy (eritema temporário), 5-8 Gy (eritema prolongado/alopecia) ou >12-15 Gy (descamação húmida e necrose).",
      "Está incorreta: as lesões cutâneas por radiação têm período de latência: o eritema pode surgir horas a dias depois e a descamação ou ulceração tipicamente manifesta-se 2 a 4 semanas após o exame.",
      "Está incorreta: a radiolesão decorre da ionização física das células progenitoras epidérmicas pela dose absorvida cumulativa de radiação X e não de reações químicas com antisséticos cutâneos."
    ],
    "nursingApplication": "O enfermeiro de hemodinâmica regista e monitoriza a dose de produto dose-área (DAP) e o tempo total de fluoroscopia, inspecionando a pele lombar e torácica do doente antes da alta hospitalar."
  },
  {
    "id": 5169,
    "topicId": 5,
    "question": "Durante os cuidados de enfermagem a um doente submetido a procedimentos imagiológicos com radiações, como se aplica na prática o conceito de 'eritema cutâneo e radiodermite em intervenções fluoroscópicas prolongadas'?",
    "options": [
      "O enfermeiro deve aplicar gelo comprimido diretamente sobre a pele do tórax durante a cirurgia com arco em C para neutralizar a radiação dispersa antes que esta atinja o músculo cardíaco.",
      "O enfermeiro de hemodinâmica regista a dose cumulativa e o produto dose-área (DAP) e assegura que doentes com procedimentos longos têm alta com vigilância e registo do local de incidência cutânea.",
      "O enfermeiro omite os tempos de fluoroscopia prolongada no processo clínico para evitar preocupações desnecessárias na equipa cirúrgica responsável pelo procedimento vascular.",
      "O enfermeiro orienta a aplicação precoce de pomadas esfoliantes com ácido salicílico na pele do dorso para acelerar a renovação mecânica das camadas epidérmicas irradiadas."
    ],
    "correctIndex": 1,
    "explanation": "A aplicação de enfermagem para eritema cutâneo e radiodermite em intervenções fluoroscópicas prolongadas baseia-se no princípio: O enfermeiro de hemodinâmica regista e monitoriza a dose de produto dose-área (DAP) e o tempo total de fluoroscopia, inspecionando a pele lombar e torácica do doente antes da alta hospitalar. Esta intervenção garante a segurança radiológica do doente e do profissional.",
    "distractorAnalysis": [
      "Está incorreta: procedimentos complexos de radiologia de intervenção exigem registo de grandezas dosimétricas (DAP, tempo de fluoroscopia e dose acumulada no ponto de entrada) e seguimento clínico.",
      "Está incorreta: gelo direto pode provocar vasoconstrição isquémica grave e agravar as lesões cutâneas; o seguimento da pele na área de entrada do feixe (dorso ou flanco) é a conduta correta.",
      "Está incorreta: pomadas esfoliantes ou abrasivas agridem a pele desvitalizada pela radiação ionizante e precipitam a descamação precoce e infeção bacteriana secundária."
    ],
    "nursingApplication": "O enfermeiro de hemodinâmica regista e monitoriza a dose de produto dose-área (DAP) e o tempo total de fluoroscopia, inspecionando a pele lombar e torácica do doente antes da alta hospitalar."
  },
  {
    "id": 5170,
    "topicId": 5,
    "question": "Um enfermeiro analisa os parâmetros biofísicos e os mecanismos de interação em 'eritema cutâneo e radiodermite em intervenções fluoroscópicas prolongadas'. Qual das seguintes afirmações expressa a correlação científica correta?",
    "options": [
      "O eritema cutâneo por radiação ionizante é provocado pela contração permanente de todos os capilares dérmicos com isquemia arterial fulminante de todo o tegumento corporal periférico.",
      "A pele irradiada cicatriza sempre em vinte e quatro horas sem qualquer sequela tecidual, mesmo quando submetida a doses cumulativas locais superiores a cem grays de radiação contínua.",
      "A morte radioinduzida das células estaminais da camada basal da epiderme origina eritema precoce (~2 Gy), descamação seca (~10 Gy) e ulceração ou necrose tecidual profunda (>15 Gy).",
      "A lesão cutânea por raios X caracteriza-se por proliferação descontrolada imediata de folículos pilosos que induz hipertricose densa na área anatómica submetida ao exame radiológico."
    ],
    "correctIndex": 2,
    "explanation": "A correlação científica correta demonstra que A morte das células estaminais da camada basal da epiderme origina eritema que surge 1 a 3 semanas após o exame, podendo evoluir para ulceração necrótica dolorosa. O domínio destes fundamentos permite ao enfermeiro assegurar a correta radioproteção e a interpretação dos riscos radiológicos.",
    "distractorAnalysis": [
      "Está incorreta: a camada basal epidérmica repovoa a epiderme a cada 14-28 dias; a sua destruição massiva por radiação ionizante despoja a pele do estrato córneo protetor, gerando úlceras e necroses.",
      "Está incorreta: o eritema inicial decorre de vasodilatação inflamatória histamínica capilar e não de oclusão espástica fulminante de todo o tegumento.",
      "Está incorreta: doses cutâneas elevadas causam alopecia transitória (3 Gy) ou definitiva (>7 Gy), atrofia cutânea e telangiectasias permanentes, e nunca crescimento piloso aumentado."
    ],
    "nursingApplication": "O enfermeiro de hemodinâmica regista e monitoriza a dose de produto dose-área (DAP) e o tempo total de fluoroscopia, inspecionando a pele lombar e torácica do doente antes da alta hospitalar."
  },
  {
    "id": 5171,
    "topicId": 5,
    "question": "Na física das radiações ionizantes e Raios X aplicada ao contexto hospitalar, em relação a 'enunciado científico da Lei de Bergonié e Tribondeau (1906)', qual é a fundamentação científica exata?",
    "options": [
      "A Lei de Bergonié e Tribondeau determina que células completamente diferenciadas e sem divisão (como neurónios) são as estruturas mais radiossensíveis do organismo humano.",
      "A referida lei postula que a sensibilidade à radiação ionizante depende exclusivamente do teor de cálcio na membrana plasmática, sendo os ossos as células mais vulneráveis à apoptose.",
      "A Lei de Bergonié e Tribondeau define que as radiações ionizantes só causam lesões biológicas se forem administradas na presença de campos magnéticos constantes de três teslas.",
      "A Lei de Bergonié e Tribondeau estabelece que a radiossensibilidade celular é diretamente proporcional à taxa mitótica e inversamente proporcional ao grau de diferenciação morfológica e funcional."
    ],
    "correctIndex": 3,
    "explanation": "Em física das radiações e imagiologia médica, enunciado científico da Lei de Bergonié e Tribondeau (1906) explica-se pelo facto de que a radiossensibilidade de uma célula biológica é diretamente proporcional à sua capacidade e taxa de divisão mitótica e inversamente proporcional ao seu grau de diferenciação morfológica e funcional. Células indiferenciadas (como células estaminais e percursoras hematopoiéticas) que se dividem ativamente e têm longo futuro reprodutivo são extremamente sensíveis à morte por radiação.",
    "distractorAnalysis": [
      "Está incorreta: a lei clássica da radiobiologia (1906) postula que células com alta atividade mitótica, longo futuro proliferativo e indiferenciadas (como blastos medulares) são as mais radiossensíveis.",
      "Está incorreta: células adultas altamente diferenciadas que raramente ou nunca se dividem (neurónios motores e miócitos cardíacos) são altamente radiorresistentes.",
      "Está incorreta: a sensibilidade depende das características biológicas de divisão e proliferação celular e não do conteúdo de cálcio ou da presença de ressonância magnética."
    ],
    "nursingApplication": "O enfermeiro compreende que a medula óssea, o epitélio de revestimento intestinal e as células germinativas dos testículos e ovários são os alvos biológicos mais vulneráveis do corpo humano."
  },
  {
    "id": 5172,
    "topicId": 5,
    "question": "Durante os cuidados de enfermagem a um doente submetido a procedimentos imagiológicos com radiações, como se aplica na prática o conceito de 'enunciado científico da Lei de Bergonié e Tribondeau (1906)'?",
    "options": [
      "O enfermeiro compreende que a medula óssea hematopoiética, o epitélio intestinal e as gónadas são muito radiossensíveis, ao passo que o tecido muscular e nervoso maduro são muito radiorresistentes.",
      "O enfermeiro assume que o córtex cerebral do adulto é o órgão mais radiossensível do corpo, sofrendo necrose celular imediata após qualquer radiografia simples de tórax.",
      "O enfermeiro classifica o sistema hematopoiético como o tecido mais radiorresistente do organismo, tolerando sem alterações doses corporais totais superiores a trinta grays.",
      "O enfermeiro considera que todos os tecidos e órgãos do corpo humano possuem rigorosamente a mesma sensibilidade biológica à radiação ionizante em qualquer faixa etária."
    ],
    "correctIndex": 0,
    "explanation": "A aplicação de enfermagem para enunciado científico da Lei de Bergonié e Tribondeau (1906) baseia-se no princípio: O enfermeiro compreende que a medula óssea, o epitélio de revestimento intestinal e as células germinativas dos testículos e ovários são os alvos biológicos mais vulneráveis do corpo humano. Esta intervenção garante a segurança radiológica do doente e do profissional.",
    "distractorAnalysis": [
      "Está incorreta: tecidos de renovação rápida e células estaminais indiferenciadas (medula óssea, criptas intestinais, epitélio germinativo) têm sensibilidade extrema; músculos e neurónios são radiorresistentes.",
      "Está incorreta: neurónios maduros não entram em divisão e são muito resistentes; a síndrome neurovascular requer doses extremas (>20-50 Gy); uma radiografia comum debita <0,1 mGy.",
      "Está incorreta: a medula óssea é um dos tecidos mais radiossensíveis do corpo humano (sensibilidade a partir de 0,5 Gy, com aplasia medular franca a 2-4 Gy)."
    ],
    "nursingApplication": "O enfermeiro compreende que a medula óssea, o epitélio de revestimento intestinal e as células germinativas dos testículos e ovários são os alvos biológicos mais vulneráveis do corpo humano."
  },
  {
    "id": 5173,
    "topicId": 5,
    "question": "Um enfermeiro analisa os parâmetros biofísicos e os mecanismos de interação em 'enunciado científico da Lei de Bergonié e Tribondeau (1906)'. Qual das seguintes afirmações expressa a correlação científica correta?",
    "options": [
      "Células indiferenciadas são imunes à radiação ionizante porque o seu DNA nuclear encontra-se protegido por uma dupla camada de queratina impermeável a fotões eletromagnéticos.",
      "Células indiferenciadas ou em proliferação ativa (células estaminais precursoras) são muito suscetíveis à morte mitótica por radiação porque entram em mitose antes de repararem o genoma.",
      "A alta taxa mitótica acelera a expulsão física dos fotões de raios X do citoplasma celular antes que estes consigam colidir com as cadeias de fosfodiéster do DNA.",
      "O grau de diferenciação celular é irrelevante para a radiobiologia moderna, dependendo a destruição tecidual unicamente do volume de ar inalado pelo doente durante a aquisição."
    ],
    "correctIndex": 1,
    "explanation": "A correlação científica correta demonstra que Células indiferenciadas (como células estaminais e percursoras hematopoiéticas) que se dividem ativamente e têm longo futuro reprodutivo são extremamente sensíveis à morte por radiação. O domínio destes fundamentos permite ao enfermeiro assegurar a correta radioproteção e a interpretação dos riscos radiológicos.",
    "distractorAnalysis": [
      "Está incorreta: a morte celular induzida por radiação ocorre predominantemente na tentativa de mitose (catástrofe mitótica); células que se dividem frequentemente sofrem morte precoce.",
      "Está incorreta: células estaminais não possuem queratina nuclear protetora; a sua cromatina descondensada para replicação torna o DNA ainda mais vulnerável a quebras radioinduzidas.",
      "Está incorreta: fotões X viajam à velocidade da luz e interagem em microssegundos; a divisão celular não expele fotões do citoplasma por ação mecânica."
    ],
    "nursingApplication": "O enfermeiro compreende que a medula óssea, o epitélio de revestimento intestinal e as células germinativas dos testículos e ovários são os alvos biológicos mais vulneráveis do corpo humano."
  },
  {
    "id": 5174,
    "topicId": 5,
    "question": "Na física das radiações ionizantes e Raios X aplicada ao contexto hospitalar, em relação a 'alta radiossensibilidade da medula óssea hematopoética', qual é a fundamentação científica exata?",
    "options": [
      "A irradiação aguda da medula óssea estimula a proliferação imediata de eritrócitos, provocando policitemia grave com hiperviscosidade sanguínea na primeira hora pós-exposição.",
      "Os linfócitos do sangue periférico são as células mais radiorresistentes da circulação sistémica, sobrevivendo sem qualquer dano celular a doses superiores a quarenta grays.",
      "Os precursores hematopoiéticos da medula sofrem apoptose rápida sob doses baixas de radiação, gerando declínio sequencial de linfócitos, neutrófilos e plaquetas na circulação periférica.",
      "A medula óssea amarela dos ossos longos converte-se espontaneamente em chumbo biológico metálico para impedir a passagem de fotões X através da cavidade medular diafisária."
    ],
    "correctIndex": 2,
    "explanation": "Em física das radiações e imagiologia médica, alta radiossensibilidade da medula óssea hematopoética explica-se pelo facto de que os mieloblastos, eritroblastos e megacariócitos sofrem apoptose rápida sob doses de radiação ionizante de apenas poucas frações de Gray. A consequente pancitopenia manifesta-se clinicamente após a latência dos elementos circulantes: linfopenia quase imediata (horas), neutropenia (dias) com risco de infeções graves, trombocitopenia com hemorragias e anemia.",
    "distractorAnalysis": [
      "Está incorreta: linfócitos são a exceção marcante: embora não proliferem ativamente no sangue periférico, sofrem apoptose intermitótica rápida em escassas horas mesmo em doses de 0,5 Gy.",
      "Está incorreta: a radiação suprime a hematopoiese na medula óssea; os glóbulos vermelhos circulam 120 dias, mas a falta de produção de reticulócitos conduz a anemia tardia.",
      "Está incorreta: a contagem absoluta de linfócitos nas primeiras 24 a 48 horas após um acidente de radiação é o melhor biomarcador precoce de dose absorvida corporal (cinética de Andrews)."
    ],
    "nursingApplication": "O enfermeiro monitoriza rigorosamente a contagem de neutrófilos e plaquetas em doentes submetidos a quimiorradioterapia, aplicando protocolos de isolamento neutropénico perante contagens < 500 neutrófilos/mm³."
  },
  {
    "id": 5175,
    "topicId": 5,
    "question": "Durante os cuidados de enfermagem a um doente submetido a procedimentos imagiológicos com radiações, como se aplica na prática o conceito de 'alta radiossensibilidade da medula óssea hematopoética'?",
    "options": [
      "O enfermeiro suspende a vigilância de sinais vitais e temperatura axilar em utentes com neutropenia pós-irradiação, por considerar que a aplasia medular impede o aparecimento de febre.",
      "O enfermeiro orienta a administração de vacinas de vírus vivos atenuados durante o nadir de neutrófilos para estimular a produção imediata de anticorpos pela medula aplásica.",
      "O enfermeiro prescreve repouso em isolamento sem máscara nem higiene das mãos, assumindo que as bactérias hospitalares são destruídas pela radiação dispersa acumulada no leito.",
      "O enfermeiro monitoriza rigorosamente a contagem de neutrófilos e plaquetas em doentes submetidos a irradiação medular, identificando o período de nadir e vigiando sinais de neutropenia febril."
    ],
    "correctIndex": 3,
    "explanation": "A aplicação de enfermagem para alta radiossensibilidade da medula óssea hematopoética baseia-se no princípio: O enfermeiro monitoriza rigorosamente a contagem de neutrófilos e plaquetas em doentes submetidos a quimiorradioterapia, aplicando protocolos de isolamento neutropénico perante contagens < 500 neutrófilos/mm³. Esta intervenção garante a segurança radiológica do doente e do profissional.",
    "distractorAnalysis": [
      "Está incorreta: o nadir (queda máxima) de neutrófilos e plaquetas surge tipicamente 10 a 20 dias após a irradiação; a neutropenia febril é uma emergência médica que exige antibióticos imediatos.",
      "Está incorreta: em neutropénicos a febre pode ser a única manifestação de infeção grave com bacteriemia fulminante, sendo imperativa a medição regular da temperatura corporal.",
      "Está incorreta: vacinas de vírus vivos são formalmente contraindicadas em indivíduos imunocomprometidos devido ao risco letal de infeção vacinal disseminada incontrolável."
    ],
    "nursingApplication": "O enfermeiro monitoriza rigorosamente a contagem de neutrófilos e plaquetas em doentes submetidos a quimiorradioterapia, aplicando protocolos de isolamento neutropénico perante contagens < 500 neutrófilos/mm³."
  },
  {
    "id": 5176,
    "topicId": 5,
    "question": "Um enfermeiro analisa os parâmetros biofísicos e os mecanismos de interação em 'alta radiossensibilidade da medula óssea hematopoética'. Qual das seguintes afirmações expressa a correlação científica correta?",
    "options": [
      "A pancitopenia manifesta-se após um período de latência variável condicionado pelo tempo de vida média dos elementos figurados maduros circulantes (dias nos neutrófilos e meses nos eritrócitos).",
      "A anemia hemolítica fulminante instala-se em escassos trinta segundos pós-irradiação devido à lise mecânica instantânea de todos os eritrócitos maduros na circulação venosa periférica.",
      "A contagem de plaquetas atinge valores indetetáveis de zero logo após a passagem do feixe de raios X por precipitação osmótica irreversível do fibrinogénio no interior dos capilares hepáticos.",
      "A medula óssea hematopoiética compensa a radiação ionizante aumentando a síntese de leucócitos para o quádruplo, impedindo qualquer episódio de neutropenia ou febre durante a aplasia."
    ],
    "correctIndex": 0,
    "explanation": "A correlação científica correta demonstra que A consequente pancitopenia manifesta-se clinicamente após a latência dos elementos circulantes: linfopenia quase imediata (horas), neutropenia (dias) com risco de infeções graves, trombocitopenia com hemorragias e anemia. O domínio destes fundamentos permite ao enfermeiro assegurar a correta radioproteção e a interpretação dos riscos radiológicos.",
    "distractorAnalysis": [
      "Está incorreta: os elementos circulantes maduros já diferenciados são mais resistentes; o sangue sofre depleção conforme as células velhas morrem e as células estaminais irradiadas não as repõem.",
      "Está incorreta: a vida média dos neutrófilos é de horas/dias, das plaquetas de cerca de 7-10 dias e das hemácias de 120 dias; a pancitopenia desenvolve-se progressivamente ao longo de semanas.",
      "Está incorreta: a radiação aguda deprime a hematopoiese e não estimula leucocitose protetora contínua; a consequência inevitável de doses elevadas é a neutropenia grave e risco de sepsis."
    ],
    "nursingApplication": "O enfermeiro monitoriza rigorosamente a contagem de neutrófilos e plaquetas em doentes submetidos a quimiorradioterapia, aplicando protocolos de isolamento neutropénico perante contagens < 500 neutrófilos/mm³."
  },
  {
    "id": 5177,
    "topicId": 5,
    "question": "Na física das radiações ionizantes e Raios X aplicada ao contexto hospitalar, em relação a 'radiossensibilidade do embrião e feto nas diferentes fases da gestação', qual é a fundamentação científica exata?",
    "options": [
      "O feto é imune à radiação ionizante externa porque o líquido amniótico atua como uma blindagem equivalente a cinquenta centímetros de chumbo maciço de alta pureza atómica.",
      "O embrião e o feto em rápido desenvolvimento possuem células com máxima taxa de divisão mitótica e mínima diferenciação, enquadrando-se no perfil de máxima radiossensibilidade biológica.",
      "A suscetibilidade fetal limita-se estritamente ao momento do parto, não existindo qualquer risco de teratogénese ou malformação estrutural durante as primeiras oito semanas gestacionais.",
      "A irradiação do útero grávido em baixas doses acelera a maturação pulmonar fetal, dispensando o recurso a corticosteróides profiláticos em ameaças de parto prematuro iminente."
    ],
    "correctIndex": 1,
    "explanation": "Em física das radiações e imagiologia médica, radiossensibilidade do embrião e feto nas diferentes fases da gestação explica-se pelo facto de que o embrião e o feto em rápido desenvolvimento possuem células com máxima taxa proliferativa e mínima diferenciação, enquadrando-se no pico de sensibilidade de Bergonié-Tribondeau. O período de organogénese precoce (2.ª à 8.ª semana pós-conceção) é o mais suscetível à indução de malformações congénitas major estruturais e microcefalia; no período pré-implantação (0 a 2 semanas) vigora a regra do 'tudo ou nada' (morte embrionária ou desenvolvimento sem defeitos).",
    "distractorAnalysis": [
      "Está incorreta: pela Lei de Bergonié e Tribondeau, tecidos indiferenciados em intensa proliferação celular ativa (como no blastocisto e embrião) apresentam a máxima vulnerabilidade à radiação.",
      "Está incorreta: o líquido amniótico é uma solução aquosa diluída com atenuação semelhante à da água comum; fotões X atravessam facilmente a parede uterina e o líquido amniótico.",
      "Está incorreta: o primeiro trimestre (em particular as semanas 2 a 8, correspondentes à organogénese) é a fase crítica para a indução de malformações congénitas e microcefalia."
    ],
    "nursingApplication": "O enfermeiro aplica obrigatoriamente a 'Regra dos 10 Dias' ou questiona a data da última menstruação (DUM) e realiza teste de gravidez a todas as mulheres em idade fértil antes de qualquer exame radiológico pélvico."
  },
  {
    "id": 5178,
    "topicId": 5,
    "question": "Durante os cuidados de enfermagem a um doente submetido a procedimentos imagiológicos com radiações, como se aplica na prática o conceito de 'radiossensibilidade do embrião e feto nas diferentes fases da gestação'?",
    "options": [
      "O enfermeiro realiza um teste rápido de urina exclusivamente se a doente tiver idade superior a cinquenta e cinco anos e apresentar ciclo menstrual regular sem interrupções.",
      "O enfermeiro orienta a utente em início de gestação confirmada a realizar radiografias abdominais mensais de rotina para avaliar a taxa de mineralização óssea do feto.",
      "O enfermeiro aplica a regra dos dez dias ou questiona sistematicamente sobre a possibilidade de gravidez a todas as mulheres em idade fértil antes de exames radiológicos da bacia ou abdómen.",
      "O enfermeiro dispensa o inquérito sobre gravidez em exames de tomografia computorizada pélvica, considerando que o gantry tomográfico é totalmente impermeável a fotões X."
    ],
    "correctIndex": 2,
    "explanation": "A aplicação de enfermagem para radiossensibilidade do embrião e feto nas diferentes fases da gestação baseia-se no princípio: O enfermeiro aplica obrigatoriamente a 'Regra dos 10 Dias' ou questiona a data da última menstruação (DUM) e realiza teste de gravidez a todas as mulheres em idade fértil antes de qualquer exame radiológico pélvico. Esta intervenção garante a segurança radiológica do doente e do profissional.",
    "distractorAnalysis": [
      "Está incorreta: a regra dos 10 dias (realizar exames radiológicos com feixe direto na pelve nos primeiros 10 dias após o início da menstruação) e o inquérito de gravidez evitam a irradiação embrionária inadvertida.",
      "Está incorreta: mulheres em idade fértil (15 aos 49-50 anos) são o grupo-alvo da triagem obrigatória de gravidez antes de procedimentos que envolvam radiação ionizante no abdómen ou bacia.",
      "Está incorreta: exames com radiação pélvica em grávidas exigem estrita justificação médica (emergência ou risco materno grave); quando viável, opta-se por ecografia ou ressonância magnética."
    ],
    "nursingApplication": "O enfermeiro aplica obrigatoriamente a 'Regra dos 10 Dias' ou questiona a data da última menstruação (DUM) e realiza teste de gravidez a todas as mulheres em idade fértil antes de qualquer exame radiológico pélvico."
  },
  {
    "id": 5179,
    "topicId": 5,
    "question": "Um enfermeiro analisa os parâmetros biofísicos e os mecanismos de interação em 'radiossensibilidade do embrião e feto nas diferentes fases da gestação'. Qual das seguintes afirmações expressa a correlação científica correta?",
    "options": [
      "A fase embrionária precoce caracteriza-se por resistência biológica total à radiação, tolerando doses fetais superiores a cinco grays sem originar qualquer anomalia de desenvolvimento.",
      "As malformações teratogénicas estruturais manifestam-se unicamente se a irradiação do concepto ocorrer nas últimas vinte e quatro horas que antecedem o termo fisiológico da gravidez.",
      "A exposição fetal a raios X durante o primeiro trimestre de gestação atua exclusivamente prevenindo o aparecimento de doenças alérgicas respiratórias na infância do recém-nascido.",
      "O período de organogénese precoce (da 2.ª à 8.ª semana pós-conceção) é o mais suscetível à indução de malformações anatómicas graves (como microcefalia, disgenesia ocular e espinha bífida)."
    ],
    "correctIndex": 3,
    "explanation": "A correlação científica correta demonstra que O período de organogénese precoce (2.ª à 8.ª semana pós-conceção) é o mais suscetível à indução de malformações congénitas major estruturais e microcefalia; no período pré-implantação (0 a 2 semanas) vigora a regra do 'tudo ou nada' (morte embrionária ou desenvolvimento sem defeitos). O domínio destes fundamentos permite ao enfermeiro assegurar a correta radioproteção e a interpretação dos riscos radiológicos.",
    "distractorAnalysis": [
      "Está incorreta: na organogénese os órgãos estão a ser esculpidos por diferenciação e migração celular activa; lesões celulares localizadas induzem malformações graves com limiar de ~100 mGy.",
      "Está incorreta: a pré-implantação responde pela lei do 'tudo-ou-nada' e a organogénese pela teratogénese com anomalias congénitas estruturais severas e atraso de desenvolvimento mental.",
      "Está incorreta: no final da gestação os órgãos já estão formados; o risco predominante no 2º e 3º trimestres é o risco estocástico de indução de neoplasias pediátricas (leucemias)."
    ],
    "nursingApplication": "O enfermeiro aplica obrigatoriamente a 'Regra dos 10 Dias' ou questiona a data da última menstruação (DUM) e realiza teste de gravidez a todas as mulheres em idade fértil antes de qualquer exame radiológico pélvico."
  },
  {
    "id": 5180,
    "topicId": 5,
    "question": "Na física das radiações ionizantes e Raios X aplicada ao contexto hospitalar, em relação a 'baixa radiossensibilidade de tecidos maduros altamente diferenciados', qual é a fundamentação científica exata?",
    "options": [
      "Células altamente diferenciadas e sem divisão ativa (como neurónios corticais adultos e cardiomiócitos) são muito radiorresistentes, tolerando doses celulares elevadas sem lise aguda.",
      "Os neurónios adultos e as células musculares estriadas cardíacas sofrem lise celular imediata quando submetidos a doses diagnósticas de radiação inferiores a um microgray.",
      "O tecido muscular cardíaco apresenta a taxa mitótica mais acelerada do organismo humano, sendo o tecido mais vulnerável à indução de apoptose precoce em radiologia médica.",
      "As células nervosas e cardíacas regeneram todas as suas estruturas através de divisão mitótica contínua a cada trinta minutos, o que anula qualquer efeito cumulativo de radiação."
    ],
    "correctIndex": 0,
    "explanation": "Em física das radiações e imagiologia médica, baixa radiossensibilidade de tecidos maduros altamente diferenciados explica-se pelo facto de que células permanentemente pós-mitóticas como os neurónios corticais do sistema nervoso central e as fibras musculares cardíacas (cardiomiócitos) possuem altíssima radioresistência intrínseca. Requerem doses locais maciças (> 20 a 50 Gy) para apresentarem necrose celular aguda, pois não entram em divisão mitótica que desmascare as quebras do DNA.",
    "distractorAnalysis": [
      "Está incorreta: neurónios motores e cardiomiócitos são células permanentemente pós-mitóticas (G0 terminal); como não tentam realizar mitose, toleram doses maciças sem sofrer morte mitótica.",
      "Está incorreta: a síndrome neurovascular do sistema nervoso central requer doses extremas (>20 a 50 Gy de corpo inteiro) para manifestar colapso microvascular e edema cerebral fatal.",
      "Está incorreta: miócitos e neurónios têm proliferação praticamente nula no adulto; a Lei de Bergonié e Tribondeau classifica-os no topo da escala de radiorresistência somática."
    ],
    "nursingApplication": "O enfermeiro reconhece que a toxicidade aguda da radiação afeta primariamente as mucosas e a pele, e não o tecido nervoso ou miocárdico imediato."
  },
  {
    "id": 5181,
    "topicId": 5,
    "question": "Durante os cuidados de enfermagem a um doente submetido a procedimentos imagiológicos com radiações, como se aplica na prática o conceito de 'baixa radiossensibilidade de tecidos maduros altamente diferenciados'?",
    "options": [
      "O enfermeiro antecipa paragem cardiorrespiratória por enfarte agudo do miocárdio imediato em todos os doentes submetidos a uma radiografia convencional de coluna lombar no leito.",
      "O enfermeiro compreende que a toxicidade aguda da radiação afeta precocemente epitélios e células do sangue, ao passo que danos miocárdicos ou encefálicos só ocorrem com doses muito elevadas.",
      "O enfermeiro prioriza a avaliação da condução nervosa periférica em doentes com radiodermite ligeira, assumindo que as sinapses motoras são destruídas antes da camada basal epidérmica.",
      "O enfermeiro desconsidera a monitorização hematológica em doentes oncológicos irradiados na pélvis, focalizando a vigilância unicamente na força muscular dos membros superiores."
    ],
    "correctIndex": 1,
    "explanation": "A aplicação de enfermagem para baixa radiossensibilidade de tecidos maduros altamente diferenciados baseia-se no princípio: O enfermeiro reconhece que a toxicidade aguda da radiação afeta primariamente as mucosas e a pele, e não o tecido nervoso ou miocárdico imediato. Esta intervenção garante a segurança radiológica do doente e do profissional.",
    "distractorAnalysis": [
      "Está incorreta: mucosite, radiodermite e leucopenia são as manifestações precoces de radiotoxicidade; danos cardíacos ou radionecrose cerebral exigem doses cumulativas de dezenas de grays.",
      "Está incorreta: exames de diagnóstico comuns debitam frações de milisievert, ordens de grandeza abaixo de qualquer dose capaz de perturbar o músculo cardíaco ou a condução nervosa.",
      "Está incorreta: a pele e a medula óssea são os órgãos sentinela de toxicidade precoce; a vigilância hematológica periódica é mandatória em radioterapia pélvica extensa."
    ],
    "nursingApplication": "O enfermeiro reconhece que a toxicidade aguda da radiação afeta primariamente as mucosas e a pele, e não o tecido nervoso ou miocárdico imediato."
  },
  {
    "id": 5182,
    "topicId": 5,
    "question": "Um enfermeiro analisa os parâmetros biofísicos e os mecanismos de interação em 'baixa radiossensibilidade de tecidos maduros altamente diferenciados'. Qual das seguintes afirmações expressa a correlação científica correta?",
    "options": [
      "Tecidos sem proliferação sofrem catástrofe mitótica em doses ultrabaixas de meio miligray, sendo esta a via fisiopatológica que origina a paralisia espástica dos membros inferiores.",
      "A radiorresistência dos neurónios é dependente do teor de colesterol dietético plasmático, desaparecendo em indivíduos que cumpram dietas vegetarianas estritas prolongadas.",
      "Tecidos com reduzida proliferação requerem doses fracionadas cumulativas muito elevadas (>50 Gy) para manifestarem alterações tardias como endarterite obliterante, fibrose e necrose tecidual.",
      "O tecido nervoso adulto converte a radiação ionizante incidente em impulsos elétricos de dopamina que aceleram a velocidade de raciocínio lógico dos doentes intervencionados."
    ],
    "correctIndex": 2,
    "explanation": "A correlação científica correta demonstra que Requerem doses locais maciças (> 20 a 50 Gy) para apresentarem necrose celular aguda, pois não entram em divisão mitótica que desmascare as quebras do DNA. O domínio destes fundamentos permite ao enfermeiro assegurar a correta radioproteção e a interpretação dos riscos radiológicos.",
    "distractorAnalysis": [
      "Está incorreta: lesões tardias em tecidos radiorresistentes (coração, cérebro, pulmão maduro) ocorrem por dano vascular microcapilar lento (endarterite) e fibrose estromal após doses elevadas.",
      "Está incorreta: catástrofe mitótica ocorre em células em divisão activa (como epitélios e tumores); neurónios pós-mitóticos não sofrem catástrofe mitótica.",
      "Está incorreta: a radiorresistência neurológica é uma propriedade intrínseca da biologia celular e da ausência de ciclo replicativo, e não de fatores nutricionais lipídicos."
    ],
    "nursingApplication": "O enfermeiro reconhece que a toxicidade aguda da radiação afeta primariamente as mucosas e a pele, e não o tecido nervoso ou miocárdico imediato."
  },
  {
    "id": 5183,
    "topicId": 5,
    "question": "Na física das radiações ionizantes e Raios X aplicada ao contexto hospitalar, em relação a 'radiossensibilidade do epitélio gastrointestinal e mucosite', qual é a fundamentação científica exata?",
    "options": [
      "A mucosa gastrointestinal é revestida por placas mineralizadas de hidroxiapatite que impedem a penetração de qualquer fotão de raios X através da parede das anilhas do cólon.",
      "As células do epitélio digestivo dividem-se unicamente uma vez a cada vinte anos, sendo consideradas as estruturas mais radiorresistentes de todo o aparelho visceral esplâncnico.",
      "A renovação mucosa intestinal ocorre exclusivamente por atração magnética passiva de aminoácidos a partir do ar atmosférico inalado durante a respiração bucal forçada.",
      "As células estaminais nas criptas intestinais de Lieberkühn e na camada basal da mucosa oral renovam-se continuamente a cada poucos dias, tornando os epitélios altamente vulneráveis à radiação."
    ],
    "correctIndex": 3,
    "explanation": "Em física das radiações e imagiologia médica, radiossensibilidade do epitélio gastrointestinal e mucosite explica-se pelo facto de que as células estaminais nas criptas de Lieberkühn do intestino delgado e no estrato basal da mucosa oral dividem-se a cada 24 horas para renovar o epitélio. A irradiação pélvica ou cervical destrói estas células regenerativas, provocando denudação epitelial, dor intensa, diarreia secretora e disfagia.",
    "distractorAnalysis": [
      "Está incorreta: o epitélio do intestino delgado renova-se integralmente a cada 3 a 5 dias a partir das células estaminais das criptas; a radiação destrói as criptas, causando desnudamento mucoso e diarreia.",
      "Está incorreta: a mucosa digestiva é tecido mole não mineralizado; a perda da barreira epitelial expõe o organismo a perda hídrica maciça, hemorragia e sepsis bacteriana.",
      "Está incorreta: os epitélios mucosos apresentam uma das taxas mitóticas mais aceleradas do corpo humano, sendo altamente radiossensíveis segundo a Lei de Bergonié e Tribondeau."
    ],
    "nursingApplication": "O enfermeiro institui cuidados orais profiláticos com elixires sem álcool, analgesia escalonada, hidratação e suplementação nutricional líquida em doentes com mucosite radioinduzida."
  },
  {
    "id": 5184,
    "topicId": 5,
    "question": "Durante os cuidados de enfermagem a um doente submetido a procedimentos imagiológicos com radiações, como se aplica na prática o conceito de 'radiossensibilidade do epitélio gastrointestinal e mucosite'?",
    "options": [
      "O enfermeiro institui cuidados orais com elixires sem álcool, hidratação frequente e vigilância de lesões ulceradas, prevenindo a superinfeção bacteriana ou fúngica da mucosa oral desnudada.",
      "O enfermeiro recomenda bochechos frequentes com soluções alcoólicas concentradas a noventa por cento para queimar as terminações nervosas livres da mucosa oral irradiada.",
      "O enfermeiro orienta o utente a escovar a cavidade oral com escovas de dentes metálicas rígidas para desbridar mecanicamente as membranas de fibrina sobre as úlceras mucosas.",
      "O enfermeiro suspende a alimentação e hidratação oral por completo durante dois meses após a radioterapia cervical, alimentando o doente unicamente por lavagens gástricas salinas."
    ],
    "correctIndex": 0,
    "explanation": "A aplicação de enfermagem para radiossensibilidade do epitélio gastrointestinal e mucosite baseia-se no princípio: O enfermeiro institui cuidados orais profiláticos com elixires sem álcool, analgesia escalonada, hidratação e suplementação nutricional líquida em doentes com mucosite radioinduzida. Esta intervenção garante a segurança radiológica do doente e do profissional.",
    "distractorAnalysis": [
      "Está incorreta: elixires com álcool provocam dor intensa e queimadura química na mucosa ulcerada; utilizam-se soluções salinas suaves, bicarbonatadas ou à base de camomila.",
      "Está incorreta: escovas rígidas causam traumatismo mecânico e hemorragia na mucosa friável e trombocitopénica; recomendam-se escovas cirúrgicas extra-suaves ou esponjas.",
      "Está incorreta: o suporte nutricional é essencial na mucosite (dieta mole, fria, hipercalórica ou nutrição entérica por sonda se disfagia grave), mantendo o aporte hidro-eletrolítico."
    ],
    "nursingApplication": "O enfermeiro institui cuidados orais profiláticos com elixires sem álcool, analgesia escalonada, hidratação e suplementação nutricional líquida em doentes com mucosite radioinduzida."
  },
  {
    "id": 5185,
    "topicId": 5,
    "question": "Um enfermeiro analisa os parâmetros biofísicos e os mecanismos de interação em 'radiossensibilidade do epitélio gastrointestinal e mucosite'. Qual das seguintes afirmações expressa a correlação científica correta?",
    "options": [
      "A exposição da cavidade pélvica a radiações ionizantes estimula a absorção massiva de água no cólon descendente, originando obstipação espástica permanente com fecaloma obstrutivo.",
      "A irradiação pélvica ou abdominal em radioterapia destrói as células das criptas intestinais, provocando atrofia das vilosidades, diarreia exsudativa e risco de má-absorção ou translocação bacteriana.",
      "A destruição das criptas intestinais por radiação X é prevenida a cem por cento através da ingestão de comprimidos de carvão ativado trinta minutos antes de cada sessão terapêutica.",
      "O epitélio intestinal desnudado regenera de forma instantânea através da solidificação plasmática de fibrina, impedindo qualquer perda de eletrólitos ou proteínas na diarreia."
    ],
    "correctIndex": 1,
    "explanation": "A correlação científica correta demonstra que A irradiação pélvica ou cervical destrói estas células regenerativas, provocando denudação epitelial, dor intensa, diarreia secretora e disfagia. O domínio destes fundamentos permite ao enfermeiro assegurar a correta radioproteção e a interpretação dos riscos radiológicos.",
    "distractorAnalysis": [
      "Está incorreta: a enterite actínica aguda manifesta-se por cólicas, diarreia frequente e tenesmo devido à perda das vilosidades absortivas e inflamação da lâmina própria mucosa.",
      "Está incorreta: a irradiação intestinal causa diarreia e não obstipação, devido à falência absortiva de água e sais biliares no íleo terminal lesado pelo feixe radioterápico.",
      "Está incorreta: carvão ativado não protege as células estaminais das criptas contra danos no DNA; a prevenção assenta em técnicas modernas de IMRT e delimitação precisa de volumes-alvo."
    ],
    "nursingApplication": "O enfermeiro institui cuidados orais profiláticos com elixires sem álcool, analgesia escalonada, hidratação e suplementação nutricional líquida em doentes com mucosite radioinduzida."
  },
  {
    "id": 5186,
    "topicId": 5,
    "question": "Na física das radiações ionizantes e Raios X aplicada ao contexto hospitalar, em relação a 'filosofia ALARA (As Low As Reasonably Achievable)', qual é a fundamentação científica exata?",
    "options": [
      "O princípio ALARA determina que a radiação ionizante só deve ser utilizada em centros hospitalares se a dose administrada ao utente for rigorosamente igual a zero vírgula zero miligrays.",
      "A filosofia ALARA obriga ao encerramento imediato de todos os serviços hospitalares de imagiologia médica sempre que a dose de fundo natural ambiental ultrapassar um microgray anual.",
      "O princípio ALARA (As Low As Reasonably Achievable) estabelece que todas as doses de radiação devem ser mantidas tão baixas quanto razoavelmente exequível, ponderando fatores económicos e sociais.",
      "O conceito ALARA postula que quanto mais elevada for a dose de radiação administrada ao doente no exame diagnóstico, maior é o benefício terapêutico curativo direto para a sua saúde."
    ],
    "correctIndex": 2,
    "explanation": "Em física das radiações e imagiologia médica, filosofia ALARA (As Low As Reasonably Achievable) explica-se pelo facto de que princípio fundamental da radioproteção que estabelece que todas as exposições médicas à radiação ionizante devem ser mantidas tão baixas quanto razoavelmente exequível, considerando fatores económicos e sociais. Assenta na tríade de princípios da Comissão Internacional de Proteção Radiológica (ICRP): Justificação da prática, Otimização da proteção e Limitação de doses ocupacionais.",
    "distractorAnalysis": [
      "Está incorreta: ALARA não exige dose zero (o que impediria exames imagiológicos essenciais à vida); exige otimização técnica para obter imagem diagnóstica válida com a menor dose possível.",
      "Está incorreta: a radiação de fundo natural ambiental média é de ~2,4 a 3 mSv/ano no mundo; o ALARA gere a exposição adicional médica e ocupacional segundo a prudência do modelo LNT.",
      "Está incorreta: em exames de diagnóstico a radiação não cura patologias; a dose é um custo biológico que deve ser minimizado para reduzir o risco estocástico associado."
    ],
    "nursingApplication": "O enfermeiro adota a cultura de segurança ALARA como padrão ético diário, recusando exposições desnecessárias e colaborando na minimização das doses administradas."
  },
  {
    "id": 5187,
    "topicId": 5,
    "question": "Durante os cuidados de enfermagem a um doente submetido a procedimentos imagiológicos com radiações, como se aplica na prática o conceito de 'filosofia ALARA (As Low As Reasonably Achievable)'?",
    "options": [
      "O enfermeiro cumpre o ALARA solicitando o aumento deliberado de mAs e kVp em todas as radiografias simples para garantir imagens com contraste supérfluo sem ruído visual.",
      "O enfermeiro aplica o ALARA posicionando-se sempre em linha direta entre o tubo gerador de raios X e o detetor de imagem durante a realização de exames cirúrgicos na enfermaria.",
      "O enfermeiro considera que o princípio ALARA é da responsabilidade exclusiva do médico radiologista, dispensando qualquer conduta de radioproteção por parte da equipa de enfermagem.",
      "O enfermeiro adota o princípio ALARA ao colimar o feixe de forma rigorosa, evitar a repetição injustificada de exposições e manter a maior distância possível durante disparos móveis no internamento."
    ],
    "correctIndex": 3,
    "explanation": "A aplicação de enfermagem para filosofia ALARA (As Low As Reasonably Achievable) baseia-se no princípio: O enfermeiro adota a cultura de segurança ALARA como padrão ético diário, recusando exposições desnecessárias e colaborando na minimização das doses administradas. Esta intervenção garante a segurança radiológica do doente e do profissional.",
    "distractorAnalysis": [
      "Está incorreta: colimação estrita, não repetição de exames e proteção à distância e com chumbo são práticas diretas de enfermagem alinhadas com o princípio ALARA.",
      "Está incorreta: aumentar mAs e kVp sem necessidade clínica viola frontalmente o ALARA ao sobre-irradiar desnecessariamente os tecidos biológicos do paciente (overexposure).",
      "Está incorreta: o profissional nunca se posiciona no feixe primário direto; a cultura de segurança radiológica é multidisciplinar e vincula todos os profissionais de saúde envolvidos."
    ],
    "nursingApplication": "O enfermeiro adota a cultura de segurança ALARA como padrão ético diário, recusando exposições desnecessárias e colaborando na minimização das doses administradas."
  },
  {
    "id": 5188,
    "topicId": 5,
    "question": "Um enfermeiro analisa os parâmetros biofísicos e os mecanismos de interação em 'filosofia ALARA (As Low As Reasonably Achievable)'. Qual das seguintes afirmações expressa a correlação científica correta?",
    "options": [
      "O sistema de radioproteção da ICRP assenta em três pilares fundamentais: Justificação da prática (benefício superior ao dano), Otimização da proteção (ALARA) e Limitação de doses individuais.",
      "O sistema internacional da ICRP baseia-se exclusivamente no princípio da Justificação, autorizando a administração de doses ilimitadas aos operadores técnicos sem qualquer necessidade de EPI.",
      "Os três princípios da ICRP determinam que a radiação médica deve ser aplicada preferencialmente em recém-nascidos assintomáticos para imunizar o timo contra mutações hereditárias.",
      "O pilar da Limitação de Doses estipula limites máximos estritos de dose para os doentes em diagnóstico médico, proibindo a realização de exames de urgência vital após o limite anual."
    ],
    "correctIndex": 0,
    "explanation": "A correlação científica correta demonstra que Assenta na tríade de princípios da Comissão Internacional de Proteção Radiológica (ICRP): Justificação da prática, Otimização da proteção e Limitação de doses ocupacionais. O domínio destes fundamentos permite ao enfermeiro assegurar a correta radioproteção e a interpretação dos riscos radiológicos.",
    "distractorAnalysis": [
      "Está incorreta: os três princípios são indissociáveis (Justificação, Otimização e Limitação de Dose); a limitação de dose aplica-se a trabalhadores expostos e ao público, mas não a doentes.",
      "Está incorreta: nos doentes em diagnóstico não se aplicam limites de dose individuais (a dose necessária para salvar a vida é justificada), aplicando-se níveis de referência de diagnóstico (DRLs).",
      "Está incorreta: trabalhadores ocupacionalmente expostos têm limites estritos (20 mSv/ano em média); a justificação e otimização são obrigatórias em todos os atos médicos radiológicos."
    ],
    "nursingApplication": "O enfermeiro adota a cultura de segurança ALARA como padrão ético diário, recusando exposições desnecessárias e colaborando na minimização das doses administradas."
  },
  {
    "id": 5189,
    "topicId": 5,
    "question": "Na física das radiações ionizantes e Raios X aplicada ao contexto hospitalar, em relação a 'três regras fundamentais de radioproteção: Tempo, Distância e Blindagem', qual é a fundamentação científica exata?",
    "options": [
      "As regras de ouro da radioproteção consistem em: maximizar o tempo de permanência no feixe, reduzir a distância ao tubo emissor a zero e desativar todos os biombos plumbíferos móveis.",
      "As três regras de ouro da proteção radiológica externa consistem em: minimizar o Tempo de exposição, maximizar a Distância à fonte emissora e utilizar Blindagens adequadas (chumbo).",
      "A tríade de radioproteção exige a desinfeção da sala com compostos de amónio quaternário, a aspiração brônquica profilática da equipa e a ventilação do piso com arrefecimento forçado contínuo.",
      "As regras fundamentais determinam o posicionamento de espelhos refletores nas paredes da sala, a humidificação do ar ambiente e a aplicação cutânea de óleos vegetais antes do procedimento."
    ],
    "correctIndex": 1,
    "explanation": "Em física das radiações e imagiologia médica, três regras fundamentais de radioproteção: Tempo, Distância e Blindagem explica-se pelo facto de que Reduzir o Tempo de permanência na área de exposição ao estritamente necessário; Maximizar a Distância da fonte de radiação; e Interpor Blindagem plúmbea eficaz entre o corpo e o feixe. A combinação destas três barreiras físicas é o método mais simples e poderoso para atenuar as doses absorvidas pelos profissionais de saúde.",
    "distractorAnalysis": [
      "Está incorreta: Tempo, Distância e Blindagem são os três pilares físicos universais para reduzir a dose externa de radiação ionizante recebida por qualquer profissional ou utente.",
      "Está incorreta: maximizar o tempo ou aproximar-se da fonte aumenta linearmente e quadraticamente a dose absorvida, constituindo conduta de gravíssimo risco de irradiação ocupacional.",
      "Está incorreta: espelhos ou humidificação do ar não atenuam nem desviam fotões ionizantes de raios X de alta energia; apenas materiais densos (chumbo) barram a radiação."
    ],
    "nursingApplication": "O enfermeiro treina previamente todos os passos técnicos de uma intervenção antes de entrar na sala de radiologia para executar o procedimento no menor tempo possível."
  },
  {
    "id": 5190,
    "topicId": 5,
    "question": "Durante os cuidados de enfermagem a um doente submetido a procedimentos imagiológicos com radiações, como se aplica na prática o conceito de 'três regras fundamentais de radioproteção: Tempo, Distância e Blindagem'?",
    "options": [
      "O enfermeiro deve permanecer com as mãos desnudadas diretamente sob o feixe primário para segurar a agulha de biópsia durante o disparo contínuo de escopia cirúrgica em tempo real.",
      "O enfermeiro desliga o alarme sonoro de cinco minutos de fluoroscopia acumulada no arco cirúrgico para evitar a distração auditiva do cirurgião durante a intervenção ortopédica.",
      "O enfermeiro treina previamente os passos de um procedimento intervencional para reduzir o tempo de fluoroscopia e mantém-se a pelo menos dois metros de distância do campo sempre que exequível.",
      "O enfermeiro orienta a colocação do tubo emissor de raios X por cima da marquesa do doente para que a radiação dispersa seja direcionada para o teto da sala de operações."
    ],
    "correctIndex": 2,
    "explanation": "A aplicação de enfermagem para três regras fundamentais de radioproteção: Tempo, Distância e Blindagem baseia-se no princípio: O enfermeiro treina previamente todos os passos técnicos de uma intervenção antes de entrar na sala de radiologia para executar o procedimento no menor tempo possível. Esta intervenção garante a segurança radiológica do doente e do profissional.",
    "distractorAnalysis": [
      "Está incorreta: planeamento rápido (menos tempo), recuo físico da mesa (mais distância) e avental/biombo (blindagem) aplicam com precisão as três regras de radioproteção ocupacional.",
      "Está incorreta: as mãos nunca devem entrar no feixe primário direto; a dose no feixe primário é ordens de grandeza superior à dispersão, causando radiodermite e necrose periungueal.",
      "Está incorreta: o sinal sonoro de 5 minutos na fluoroscopia é uma exigência legal de segurança para alertar a equipa sobre o tempo cumulativo de exposição e evitar sobredoses."
    ],
    "nursingApplication": "O enfermeiro treina previamente todos os passos técnicos de uma intervenção antes de entrar na sala de radiologia para executar o procedimento no menor tempo possível."
  },
  {
    "id": 5191,
    "topicId": 5,
    "question": "Um enfermeiro analisa os parâmetros biofísicos e os mecanismos de interação em 'três regras fundamentais de radioproteção: Tempo, Distância e Blindagem'. Qual das seguintes afirmações expressa a correlação científica correta?",
    "options": [
      "O uso de blindagem de chumbo permite ao enfermeiro permanecer indefinidamente no feixe primário direto sem acumular qualquer dose de radiação ionizante no organismo.",
      "O aumento da distância física à fonte emissora é ineficaz em salas fechadas porque os raios X acumulam-se em vórtices circulares de radiação estática no teto da instalação médica.",
      "A redução do tempo de exposição só protege o profissional se a marquesa hospitalar for previamente isolada com mantas térmicas de alumínio de resgate rodoviário comum.",
      "A conjugação sinérgica de tempo, distância e blindagem permite reduzir a exposição ocupacional do profissional de enfermagem a níveis residuais perfeitamente seguros e conformes à lei."
    ],
    "correctIndex": 3,
    "explanation": "A correlação científica correta demonstra que A combinação destas três barreiras físicas é o método mais simples e poderoso para atenuar as doses absorvidas pelos profissionais de saúde. O domínio destes fundamentos permite ao enfermeiro assegurar a correta radioproteção e a interpretação dos riscos radiológicos.",
    "distractorAnalysis": [
      "Está incorreta: o avental de chumbo atenua cerca de 90-95% da dispersão, mas não bloqueia 100% do feixe primário direto; a distância e o tempo reduzido continuam indispensáveis.",
      "Está incorreta: os raios X viajam em linha reta à velocidade c e são atenuados no ar; a intensidade diminui com o quadrado da distância (1/d²), sem formação de vórtices no ar.",
      "Está incorreta: mantas térmicas finas de alumínio isolam calor radiante infravermelho de doentes em hipotermia, mas não têm número atómico ou massa para atenuar fotões X ionizantes."
    ],
    "nursingApplication": "O enfermeiro treina previamente todos os passos técnicos de uma intervenção antes de entrar na sala de radiologia para executar o procedimento no menor tempo possível."
  },
  {
    "id": 5192,
    "topicId": 5,
    "question": "Na física das radiações ionizantes e Raios X aplicada ao contexto hospitalar, em relação a 'Lei do Inverso do Quadrado da Distância (I ∝ 1 / d²)', qual é a fundamentação científica exata?",
    "options": [
      "A Lei do Inverso do Quadrado da Distância estipula que a intensidade da radiação de uma fonte pontual é inversamente proporcional ao quadrado da distância (I ∝ 1/d²).",
      "A Lei do Inverso do Quadrado define que duplicar a distância física a um aparelho de raios X duplica a intensidade da dose absorvida pelos tecidos biológicos do operador.",
      "A intensidade da radiação ionizante diminui de forma estritamente linear com a distância, reduzindo-se em dez por cento a cada dez metros de afastamento no corredor hospitalar.",
      "A Lei do Inverso do Quadrado aplica-se unicamente a emissões sonoras de campainhas de emergência, sendo inválida para feixes eletromagnéticos de radiação ionizante médica."
    ],
    "correctIndex": 0,
    "explanation": "Em física das radiações e imagiologia médica, Lei do Inverso do Quadrado da Distância (I ∝ 1 / d²) explica-se pelo facto de que a intensidade (I) da radiação dispersa por uma fonte pontual é inversamente proporcional ao quadrado da distância (d) à fonte. Ao dobrar a distância da fonte (de 1 metro para 2 metros), a intensidade da radiação cai para um quarto (redução de 75%); ao triplicar a distância (de 1 para 3 metros), a dose cai para um nono (apenas 11% da inicial!).",
    "distractorAnalysis": [
      "Está incorreta: pela lei I1·(d1)² = I2·(d2)², duplicar a distância (de 1 m para 2 m) reduz a intensidade do feixe de radiação para 1/4 (25% do valor original).",
      "Está incorreta: o decréscimo é inversamente quadrático e não linear; o recuo físico de escassos passos proporciona uma redução dramática na taxa de dose recebida pela equipa.",
      "Está incorreta: a lei do inverso do quadrado é uma lei geométrica fundamental que rege todas as radiações emanadas isotropicamente de fontes pontuais no espaço tridimensional."
    ],
    "nursingApplication": "Durante o disparo de um aparelho móvel de Raios X na enfermaria, o enfermeiro recua pelo menos 2 a 3 metros para trás do feixe primário caso não possa sair do quarto."
  },
  {
    "id": 5193,
    "topicId": 5,
    "question": "Durante os cuidados de enfermagem a um doente submetido a procedimentos imagiológicos com radiações, como se aplica na prática o conceito de 'Lei do Inverso do Quadrado da Distância (I ∝ 1 / d²)'?",
    "options": [
      "O enfermeiro deve encostar o seu tórax ao doente durante o disparo portátil para garantir que o chassis radiográfico digital não deslize sobre a superfície do colchão do leito.",
      "Durante disparos de raios X portáteis na enfermaria, o enfermeiro afasta-se pelo menos 2 metros do doente (ou permanece atrás de biombo de chumbo), protegendo outros doentes no quarto.",
      "O enfermeiro posiciona-se a cinquenta centímetros do foco emissor e vira-se de costas para a máquina, considerando que a musculatura dorsal atenua cem por cento dos raios X.",
      "O enfermeiro deve solicitar a evacuação de todo o edifício hospitalar antes de realizar uma radiografia simples de punho no serviço de urgência com aparelho portátil."
    ],
    "correctIndex": 1,
    "explanation": "A aplicação de enfermagem para Lei do Inverso do Quadrado da Distância (I ∝ 1 / d²) baseia-se no princípio: Durante o disparo de um aparelho móvel de Raios X na enfermaria, o enfermeiro recua pelo menos 2 a 3 metros para trás do feixe primário caso não possa sair do quarto. Esta intervenção garante a segurança radiológica do doente e do profissional.",
    "distractorAnalysis": [
      "Está incorreta: o cabo disparador do aparelho móvel tem pelo menos 2 metros de comprimento exatamente para permitir que o operador utilize a distância como blindagem eficaz.",
      "Está incorreta: se o utente precisar de imobilização e o doente não cooperar, utiliza-se dispositivos mecânicos de fixação ou acompanhante devidamente protegido com avental plumbífero.",
      "Está incorreta: as costas não protegem contra raios X; os ossos da coluna e rins seriam irradiados sem proteção; virar as costas a 50 cm resultaria em alta exposição ocupacional."
    ],
    "nursingApplication": "Durante o disparo de um aparelho móvel de Raios X na enfermaria, o enfermeiro recua pelo menos 2 a 3 metros para trás do feixe primário caso não possa sair do quarto."
  },
  {
    "id": 5194,
    "topicId": 5,
    "question": "Um enfermeiro analisa os parâmetros biofísicos e os mecanismos de interação em 'Lei do Inverso do Quadrado da Distância (I ∝ 1 / d²)'. Qual das seguintes afirmações expressa a correlação científica correta?",
    "options": [
      "Ao triplicar a distância da fonte emissora (de 1 metro para 3 metros), a taxa de dose recebida pelo enfermeiro diminui para um terço (33,3%) da taxa de dose inicial de referência.",
      "Ao aumentar a distância de um metro para dois metros, a intensidade da radiação eleva-se para o quádruplo em virtude da condensação espacial das linhas de fluxo eletromagnético no ar.",
      "Ao dobrar a distância da fonte de radiação (passando de 1 metro para 2 metros), a intensidade da radiação dispersa incidente sobre o profissional é reduzida para um quarto (25%).",
      "A distância do operador ao tubo de raios X não altera a dose de radiação absorvida, dependendo esta unicamente do tipo de detergente utilizado na lavagem do piso da enfermaria."
    ],
    "correctIndex": 2,
    "explanation": "A correlação científica correta demonstra que Ao dobrar a distância da fonte (de 1 metro para 2 metros), a intensidade da radiação cai para um quarto (redução de 75%); ao triplicar a distância (de 1 para 3 metros), a dose cai para um nono (apenas 11% da inicial!). O domínio destes fundamentos permite ao enfermeiro assegurar a correta radioproteção e a interpretação dos riscos radiológicos.",
    "distractorAnalysis": [
      "Está incorreta: triplicar a distância (fator 3) reduz a intensidade por 3² = 9 (passando para 1/9 ou cerca de 11,1% do valor a 1 metro), e não para 1/3.",
      "Está incorreta: a intensidade diminui com o quadrado da distância (1/d²); afastar-se reduz drasticamente a radiação incidente, sendo um dos métodos mais económicos e eficazes.",
      "Está incorreta: a dose ocupacional depende criticamente da geometria espacial e distância física à fonte dispersora (doente), sendo governada pela física de campos divergentes."
    ],
    "nursingApplication": "Durante o disparo de um aparelho móvel de Raios X na enfermaria, o enfermeiro recua pelo menos 2 a 3 metros para trás do feixe primário caso não possa sair do quarto."
  },
  {
    "id": 5195,
    "topicId": 5,
    "question": "Na física das radiações ionizantes e Raios X aplicada ao contexto hospitalar, em relação a 'equipamentos de proteção individual (EPI) plúmbeos para enfermagem', qual é a fundamentação científica exata?",
    "options": [
      "Os equipamentos de proteção individual radiológica incluem bata cirúrgica descartável de polipropileno, óculos de sol polarizados comuns e luvas de algodão esterilizadas.",
      "A proteção radiológica ocupacional requer fato integral de mergulho de borracha espessa com botas de borracha cano alto para isolamento elétrico contra as baterias do aparelho móvel.",
      "Os EPIs plumbíferos destinam-se exclusivamente aos doentes anestesiados, estando a equipa de enfermagem do bloco operatório isenta do seu uso por normas sindicais hospitalares.",
      "Os EPIs plumbíferos fundamentais incluem avental de chumbo (0,25 a 0,5 mm Pb equivalente), colar protetor da tiroide, óculos com vidros plumbíferos com proteção lateral e luvas plumbíferas."
    ],
    "correctIndex": 3,
    "explanation": "Em física das radiações e imagiologia médica, equipamentos de proteção individual (EPI) plúmbeos para enfermagem explica-se pelo facto de que incluem avental de chumbo (com espessura mínima de 0,25 a 0,5 mm de chumbo equivalente, Pb), colar protetor da tiroide, óculos plumbíferos com proteção lateral e luvas plumbíferas. O avental com 0,5 mm Pb atenua em mais de 90 a 95% a radiação dispersa na faixa de energias de diagnóstico radiológico.",
    "distractorAnalysis": [
      "Está incorreta: avental plumbífero, colar cervical e óculos com proteção lateral de chumbo são os EPIs comprovados para atenuar fotões de raios X de dispersão Compton no bloco.",
      "Está incorreta: batas descartáveis e óculos de sol comuns oferecem zero atenuação contra fotões ionizantes de alta frequência; materiais densos como chumbo são insubstituíveis.",
      "Está incorreta: fatos de borracha não atenuam raios X e os profissionais de saúde expostos têm a obrigação legal e deontológica de utilizar EPIs de radioproteção certificados."
    ],
    "nursingApplication": "O enfermeiro nunca dobra nem amassa o avental de chumbo, pendurando-o sempre em cabides próprios dedicados para evitar fissuras invisíveis no lençol interno de chumbo que permitiriam a fuga de radiação."
  },
  {
    "id": 5196,
    "topicId": 5,
    "question": "Durante os cuidados de enfermagem a um doente submetido a procedimentos imagiológicos com radiações, como se aplica na prática o conceito de 'equipamentos de proteção individual (EPI) plúmbeos para enfermagem'?",
    "options": [
      "O enfermeiro nunca deve dobrar ou amarrotar o avental de chumbo, devendo pendurá-lo sempre em cabides próprios para prevenir fissuras internas invisíveis na borracha plumbífera.",
      "O enfermeiro deve dobrar o avental de chumbo em quatro partes e armazená-lo prensado no fundo de gavetas metálicas apertadas para compactar o chumbo interno.",
      "O enfermeiro deve esterilizar o avental de chumbo semanalmente em autoclave de calor húmido a cento e trinta e quatro graus Celsius sob alta pressão de vapor saturado.",
      "O enfermeiro dispensa o controlo radiológico periódico dos aventais de chumbo, dado que o chumbo biológico é um elemento químico incorruptível que nunca sofre fraturas."
    ],
    "correctIndex": 0,
    "explanation": "A aplicação de enfermagem para equipamentos de proteção individual (EPI) plúmbeos para enfermagem baseia-se no princípio: O enfermeiro nunca dobra nem amassa o avental de chumbo, pendurando-o sempre em cabides próprios dedicados para evitar fissuras invisíveis no lençol interno de chumbo que permitiriam a fuga de radiação. Esta intervenção garante a segurança radiológica do doente e do profissional.",
    "distractorAnalysis": [
      "Está incorreta: dobrar o avental quebra o compósito de borracha e chumbo interno, criando fendas invisíveis por onde a radiação passa sem atenuação; deve ser pendurado em cabides largos.",
      "Está incorreta: a esterilização por calor em autoclave derrete ou danifica a matriz elastomérica do avental; a higienização é feita com toalhetes desinfetantes suaves de superfície.",
      "Está incorreta: os EPIs plumbíferos devem ser submetidos a inspeção visual e rastreio radioscópico periódico anual para detetar fissuras ou quebras na integridade da blindagem."
    ],
    "nursingApplication": "O enfermeiro nunca dobra nem amassa o avental de chumbo, pendurando-o sempre em cabides próprios dedicados para evitar fissuras invisíveis no lençol interno de chumbo que permitiriam a fuga de radiação."
  },
  {
    "id": 5197,
    "topicId": 5,
    "question": "Um enfermeiro analisa os parâmetros biofísicos e os mecanismos de interação em 'equipamentos de proteção individual (EPI) plúmbeos para enfermagem'. Qual das seguintes afirmações expressa a correlação científica correta?",
    "options": [
      "Um avental de chumbo com 0,5 mm Pb atenua menos de dois por cento da radiação dispersa, exigindo a utilização simultânea de vinte aventais sobrepostos pelo profissional.",
      "Um avental de chumbo com espessura equivalente a 0,5 mm Pb atenua entre 90% e 99% da radiação dispersa na faixa de energias diagnósticas comuns (60 a 100 kVp).",
      "A espessura de chumbo do avental atua acelerando os fotões para que estes atravessem o corpo do enfermeiro em velocidade supersónica sem tempo para ionizar átomos.",
      "O avental plumbífero é dispensável em procedimentos com arco em C desde que a sala de operações mantenha as portas corta-fogo totalmente abertas durante todo o procedimento."
    ],
    "correctIndex": 1,
    "explanation": "A correlação científica correta demonstra que O avental com 0,5 mm Pb atenua em mais de 90 a 95% a radiação dispersa na faixa de energias de diagnóstico radiológico. O domínio destes fundamentos permite ao enfermeiro assegurar a correta radioproteção e a interpretação dos riscos radiológicos.",
    "distractorAnalysis": [
      "Está incorreta: 0,5 mm Pb equivalente confere uma enorme camada semirredutora face ao espetro de radiação dispersa diagnóstica, retendo mais de 90-95% dos fotões incidentes.",
      "Está incorreta: sobrepor vinte aventais seria fisicamente incomportável (pesaria mais de 100 kg) e ergonomicamente devastador; um avental íntegro de 0,35-0,5 mm Pb é altamente eficaz.",
      "Está incorreta: o chumbo atenua por absorção fotoelétrica e dispersão devido ao seu elevado número atómico (Z = 82) e alta densidade física (11,34 g/cm³), barrando os fotões X."
    ],
    "nursingApplication": "O enfermeiro nunca dobra nem amassa o avental de chumbo, pendurando-o sempre em cabides próprios dedicados para evitar fissuras invisíveis no lençol interno de chumbo que permitiriam a fuga de radiação."
  },
  {
    "id": 5198,
    "topicId": 5,
    "question": "Na física das radiações ionizantes e Raios X aplicada ao contexto hospitalar, em relação a 'dosímetros individuais de monitorização ocupacional (TLD e filme)', qual é a fundamentação científica exata?",
    "options": [
      "Os dosímetros individuais são pequenos microfones que emitem um sinal sonoro estridente contínuo sempre que um único fotão de raios X atravessa o ar da sala de exames.",
      "Os dosímetros termoluminescentes atuam expelindo radiação de volta para o doente através de descargas elétricas induzidas pelo movimento corporal do enfermeiro no bloco.",
      "Dosímetros individuais contêm cristais termoluminescentes (TLD) ou opticamente estimulados (OSL) que acumulam energia de radiação para quantificar a dose ocupacional do profissional.",
      "O dosímetro de radiação tem a função de neutralizar magneticamente os raios X antes de estes atingirem o tórax do enfermeiro que permanece junto à marquesa cirúrgica."
    ],
    "correctIndex": 2,
    "explanation": "Em física das radiações e imagiologia médica, dosímetros individuais de monitorização ocupacional (TLD e filme) explica-se pelo facto de que dispositivos pessoais obrigatórios por lei contendo cristais termoluminescentes (como fluoreto de lítio, LiF) que acumulam a dose de radiação ionizante absorvida pelo profissional. O dosímetro de corpo inteiro deve ser utilizado no tronco, na altura do peito, obrigatoriamente SOB o avental de chumbo (para medir a dose efetiva recebida pelos órgãos internos vitais).",
    "distractorAnalysis": [
      "Está incorreta: TLDs (como LiF:Mg,Ti) e dosímetros OSL armazenam eletrões em armadilhas de rede cristalina proporcionais à dose de radiação ionizante recebida, lidos em laboratório especializado.",
      "Está incorreta: dosímetros TLD/OSL são integradores passivos de dose e não possuem baterias, sirenes ou circuitos emissores de alarme em tempo real; a leitura é diferida.",
      "Está incorreta: o dosímetro não é uma blindagem ou escudo atenuador ativo; mede e monitoriza a dose absorvida pelo profissional para controlo de limites regulamentares legais."
    ],
    "nursingApplication": "O enfermeiro nunca empresta o seu dosímetro individual, não o expõe a calor ou luz solar direta e não o deixa dentro da sala de raio-X quando não está a trabalhar, garantindo leituras dosimétricas fidedignas."
  },
  {
    "id": 5199,
    "topicId": 5,
    "question": "Durante os cuidados de enfermagem a um doente submetido a procedimentos imagiológicos com radiações, como se aplica na prática o conceito de 'dosímetros individuais de monitorização ocupacional (TLD e filme)'?",
    "options": [
      "O enfermeiro deve emprestar o seu dosímetro a colegas de serviço que não possuam monitorização dosimétrica para partilhar o registo estatístico de doses acumuladas no mês.",
      "O enfermeiro deve fixar o seu dosímetro no cabeçalho do aparelho móvel de raios X durante o fim-de-semana para acelerar a acumulação de créditos de pontuação dosimétrica.",
      "O dosímetro individual deve ser lavado semanalmente na máquina de lavar roupa hospitalar a noventa graus com detergente enzimático para remover a radiação acumulada no sensor.",
      "O enfermeiro nunca deve partilhar o seu dosímetro individual, não o deve expor deliberadamente ao feixe direto e não o deve levar para o exterior do hospital após o término do turno."
    ],
    "correctIndex": 3,
    "explanation": "A aplicação de enfermagem para dosímetros individuais de monitorização ocupacional (TLD e filme) baseia-se no princípio: O enfermeiro nunca empresta o seu dosímetro individual, não o expõe a calor ou luz solar direta e não o deixa dentro da sala de raio-X quando não está a trabalhar, garantindo leituras dosimétricas fidedignas. Esta intervenção garante a segurança radiológica do doente e do profissional.",
    "distractorAnalysis": [
      "Está incorreta: o dosímetro é de uso pessoal e intransmissível, guardado no painel da instituição fora da área controlada ao sair do hospital para evitar falsas leituras ambientais.",
      "Está incorreta: partilhar dosímetros invalida o histórico legal dosimétrico individual do trabalhador e viola os regulamentos nacionais de proteção radiológica ocupacional.",
      "Está incorreta: lavar o dosímetro danifica os filtros metálicos e cristais e anula o processamento óptico/térmico; o dosímetro não se lava e é enviado periodicamente ao laboratório."
    ],
    "nursingApplication": "O enfermeiro nunca empresta o seu dosímetro individual, não o expõe a calor ou luz solar direta e não o deixa dentro da sala de raio-X quando não está a trabalhar, garantindo leituras dosimétricas fidedignas."
  },
  {
    "id": 5200,
    "topicId": 5,
    "question": "Um enfermeiro analisa os parâmetros biofísicos e os mecanismos de interação em 'dosímetros individuais de monitorização ocupacional (TLD e filme)'. Qual das seguintes afirmações expressa a correlação científica correta?",
    "options": [
      "O dosímetro de corpo inteiro deve ser utilizado no tronco (ao nível do peito ou cintura) por baixo do avental de chumbo, para estimar a dose efetiva recebida pelos órgãos internos protegidos.",
      "O dosímetro de corpo inteiro deve ser fixado na sola do sapato cirúrgico do enfermeiro para avaliar a radioatividade acumulada nas poeiras do chão da sala de operações ortopédicas.",
      "O dosímetro principal deve ser guardado permanentemente dentro do cofre blindado de chumbo da farmácia hospitalar para impedir que receba qualquer irradiação ocupacional.",
      "Em intervenções de hemodinâmica com risco de doses elevadas no cristalino e tiroide, é estritamente proibido utilizar dosímetros adicionais colocados por fora do avental de chumbo."
    ],
    "correctIndex": 0,
    "explanation": "A correlação científica correta demonstra que O dosímetro de corpo inteiro deve ser utilizado no tronco, na altura do peito, obrigatoriamente SOB o avental de chumbo (para medir a dose efetiva recebida pelos órgãos internos vitais). O domínio destes fundamentos permite ao enfermeiro assegurar a correta radioproteção e a interpretação dos riscos radiológicos.",
    "distractorAnalysis": [
      "Está incorreta: o dosímetro sob o avental no tronco monitoriza a dose efetiva no corpo protegido; em serviços de alta exposição (hemodinâmica) recomenda-se um 2º dosímetro na gola/sobre o avental.",
      "Está incorreta: a dosimetria de tronco visa os órgãos nobres com fatores de ponderação tecidual mais relevantes (medula óssea, pulmões, gónadas, cólon) e não a sola dos sapatos.",
      "Está incorreta: o uso de um segundo dosímetro por cima do avental (na gola cervical) ou dosímetro de anel na mão é frequente e recomendado em radiologia de intervenção e hemodinâmica."
    ],
    "nursingApplication": "O enfermeiro nunca empresta o seu dosímetro individual, não o expõe a calor ou luz solar direta e não o deixa dentro da sala de raio-X quando não está a trabalhar, garantindo leituras dosimétricas fidedignas."
  }
];
