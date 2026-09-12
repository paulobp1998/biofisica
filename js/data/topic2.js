/**
 * Tópico 2: Alavancas, Elasticidade dos Corpos e Resistência dos Materiais
 * 50 Questões Científicas Rigorosas para o 1.º Ano de Enfermagem
 */

const TOPIC_2_QUESTIONS = [
  {
    id: 201,
    topicId: 2,
    question: "O momento de uma força (torque, τ) mede a capacidade de uma força produzir rotação de um corpo em torno de um eixo fixo ou fulcro. Matematicamente, como se expressa o módulo do momento de uma força?",
    options: [
      "τ = F · d · sen(θ), onde F é o módulo da força, d a distância ao eixo e θ o ângulo entre a linha de ação da força e o braço de alavanca.",
      "τ = F / d, onde a força é inversamente proporcional à distância perpendicular ao fulcro.",
      "τ = m · g · d², sendo diretamente proporcional ao quadrado da distância ao fulcro.",
      "τ = F · a · cos(θ), onde a é a aceleração linear transmitida ao corpo."
    ],
    correctIndex: 0,
    explanation: "O momento de uma força (ou torque) é uma grandeza vetorial cujo módulo é dado por τ = F · d · sen(θ) (ou τ = F · b, onde b = d · sen(θ) é o braço de alavanca, ou seja, a distância perpendicular do eixo de rotação à linha de ação da força). A sua unidade no Sistema Internacional é o Newton-metro (N·m).",
    distractorAnalysis: [
      "Opção B confunde momento com a fórmula da pressão ou gradiente de força; dividir força pela distância não tem significado físico de torque.",
      "Opção C introduz incorretamente uma dependência quadrática na distância (d²), o que violaria a linearidade do momento.",
      "Opção D utiliza incorretamente a aceleração e a função cosseno, quando o torque é maximizado quando a força é perpendicular (θ = 90°, sen(90°) = 1)."
    ],
    nursingApplication: "Na manipulação de manivelas de camas articuladas manuais, válvulas de garrafas de oxigénio medicinal ou chaves de rodas de macas, aplicar a força perpendicularmente à haste e na sua extremidade mais distante do fulcro maximiza o braço de alavanca, reduzindo drasticamente o esforço muscular exigido do enfermeiro."
  },
  {
    id: 202,
    topicId: 2,
    question: "Para que um corpo extenso se encontre em equilíbrio estático absoluto (sem translação nem rotação), quais são as duas condições mecânicas fundamentais que devem ser simultaneamente satisfeitas?",
    options: [
      "A resultante das forças externas deve ser nula (∑F = 0) e a soma vetorial de todos os momentos de força em relação a qualquer ponto deve ser nula (∑τ = 0).",
      "A velocidade linear do corpo deve ser constante e positiva, independentemente da soma dos momentos.",
      "Apenas a resultante das forças deve ser nula (∑F = 0), pois a ausência de translação garante automaticamente a ausência de rotação.",
      "A aceleração angular deve ser constante e diferente de zero para compensar a gravidade."
    ],
    correctIndex: 0,
    explanation: "O equilíbrio estático de um corpo rígido exige duas condições independentes: 1) Equilíbrio translacional: a soma vetorial de todas as forças externas deve ser zero (∑F = 0), garantindo aceleração linear nula (a = 0); 2) Equilíbrio rotacional: a soma vetorial dos momentos de força em relação a qualquer eixo de rotação deve ser zero (∑τ = 0), garantindo aceleração angular nula (α = 0).",
    distractorAnalysis: [
      "Opção B descreve um movimento retilíneo uniforme ou equilíbrio dinâmico, mas ignora o requisito estático e a condição de momentos nulos.",
      "Opção C é errada porque um par de forças de igual intensidade e sentidos opostos (binário) tem resultante de forças nula, mas produz rotação pura (torque não-nulo).",
      "Opção D indica aceleração angular não-nula, o que causaria rotação acelerada contínua, impossibilitando o equilíbrio estático."
    ],
    nursingApplication: "Na montagem de sistemas de tração ortopédica contínua (como a tração esquelética de Thomas ou de Russell num doente com fratura de fémur), o alinhamento dos cabos, polias e contrapesos tem de assegurar simultaneamente ∑F = 0 e ∑τ = 0 no membro, impedindo rotações indesejadas do foco de fratura."
  },
  {
    id: 203,
    topicId: 2,
    question: "A Vantagem Mecânica (VM) de um sistema de alavancas é definida teoricamente como a razão entre:",
    options: [
      "A força de resistência superada e a força de potência aplicada (VM = F_R / F_P), que no equilíbrio ideal é igual à razão entre o braço de potência e o braço de resistência (d_P / d_R).",
      "A potência metabólica consumida pelo músculo e o peso do segmento corporal mobilizado.",
      "O braço de resistência dividido pelo braço de potência (VM = d_R / d_P).",
      "A aceleração desenvolvida pela carga e a aceleração gravitacional terrestre."
    ],
    correctIndex: 0,
    explanation: "A Vantagem Mecânica (VM) expressa a amplificação da força num sistema mecânico: VM = F_R / F_P. Pelo princípio dos momentos no equilíbrio (F_P · d_P = F_R · d_R), tem-se idealmente VM = d_P / d_R. Se VM > 1, o sistema poupa força (exige menos força motora do que a carga); se VM < 1, o sistema perde em força mas ganha proporcionalmente em velocidade e amplitude de movimento.",
    distractorAnalysis: [
      "Opção B confunde vantagem mecânica com rendimento metabólico muscular.",
      "Opção C inverte a fração geométrica; d_R / d_P corresponderia ao inverso da vantagem mecânica.",
      "Opção D inventa uma relação entre acelerações sem qualquer fundamento físico no estudo de alavancas estáticas."
    ],
    nursingApplication: "Compreender a vantagem mecânica permite ao enfermeiro escolher o instrumento clínico adequado: um cortador de gesso ou alicate cirúrgico com cabos compridos e mandíbulas curtas (d_P >> d_R) proporciona VM >> 1, permitindo cortar materiais duros com modesta força manual."
  },
  {
    id: 204,
    topicId: 2,
    question: "Numa alavanca de 1.ª classe (interfixa), qual é a disposição geométrica relativa entre o ponto de apoio (fulcro), o ponto de aplicação da potência (força motora) e a resistência (carga)?",
    options: [
      "O ponto de apoio (fulcro) localiza-se entre o ponto de aplicação da potência e o da resistência.",
      "A resistência situa-se obrigatoriamente entre o ponto de apoio e a potência.",
      "A potência situa-se obrigatoriamente entre o ponto de apoio e a resistência.",
      "O ponto de apoio coincide exatamente com o centro de massa da carga, sem necessidade de potência."
    ],
    correctIndex: 0,
    explanation: "Uma alavanca de 1.ª classe (ou interfixa) caracteriza-se por ter o ponto de apoio (fulcro) situado entre a força de potência e a força de resistência (P - F - R). Dependendo da posição do fulcro, a vantagem mecânica pode ser maior, igual ou menor do que 1.",
    distractorAnalysis: [
      "Opção B descreve uma alavanca de 2.ª classe (inter-resistente).",
      "Opção C descreve uma alavanca de 3.ª classe (interpotente).",
      "Opção D é um absurdo físico, pois qualquer alavanca em equilíbrio requer forças motora e resistente para estabelecer equilíbrio de momentos."
    ],
    nursingApplication: "Instrumentos de uso frequente em enfermagem como tesouras de sutura, pinças hemostáticas (tipo Kocher ou Kelly) e corta-unhas são alavancas de 1.ª classe: o parafuso central funciona como fulcro, as mãos do enfermeiro aplicam a potência nos anéis, e o tecido ou fio exerce a resistência nas lâminas/pontas."
  },
  {
    id: 205,
    topicId: 2,
    question: "Qual das seguintes articulações do corpo humano funciona anatomicamente como uma alavanca de 1.ª classe (interfixa)?",
    options: [
      "A articulação atlanto-occipital (entre o crânio e a coluna cervical), equilibrada pelos músculos extensores da nuca contra o peso anterior da cabeça.",
      "A articulação do cotovelo durante a flexão do antebraço executada pelo músculo bicípite braquial.",
      "A articulação talocrural (tornozelo) durante a elevação do corpo sobre a ponta dos pés pelo tríceps sural.",
      "A articulação temporomandibular durante o encerramento forçado da mandíbula pelo músculo masséter."
    ],
    correctIndex: 0,
    explanation: "A articulação atlanto-occipital é o exemplo clássico de alavanca interfixa (1.ª classe) no corpo humano: o fulcro é a articulação entre os côndilos occipitais e o atlas; a resistência é o peso da porção anterior da cabeça e face (cujo centro de massa se situa à frente da articulação); a potência é a força de tração exercida pelos músculos posteriores do pescoço (esplénio da cabeça, trapézio, semiespinhoso) inseridos no occipital.",
    distractorAnalysis: [
      "Opção B descreve uma alavanca de 3.ª classe (o bicípite insere-se entre o cotovelo e a mão).",
      "Opção C descreve uma alavanca de 2.ª classe (a resistência do peso corporal cai entre as cabeças dos metatarsos e o tendão de Aquiles).",
      "Opção D funciona mecanicamente como uma alavanca de 3.ª classe modificada (o masséter insere-se à frente do côndilo mandibular e atrás dos dentes incisivos/molares anteriores)."
    ],
    nursingApplication: "Quando um doente em coma, anestesiado ou com sedação profunda perde o tónus muscular, os músculos da nuca deixam de exercer potência. A alavanca de 1.ª classe desequilibra-se: a cabeça cai para a frente em flexão cervical, o que provoca a queda posterior da base da língua e oclusão das vias aéreas. O enfermeiro previne a asfixia posicionando a cabeça em extensão moderada ('head tilt-chin lift')."
  },
  {
    id: 206,
    topicId: 2,
    question: "Numa alavanca de 2.ª classe (inter-resistente), a resistência localiza-se entre o ponto de apoio (fulcro) e o ponto de aplicação da potência. Qual é a consequência biofísica obrigatória desta geometria quanto à vantagem mecânica?",
    options: [
      "A vantagem mecânica é sempre estritamente superior a 1 (VM > 1), porque o braço de potência é sempre maior do que o braço de resistência (d_P > d_R).",
      "A vantagem mecânica é sempre estritamente inferior a 1 (VM < 1), exigindo mais força do que a resistência.",
      "A vantagem mecânica é exatamente igual a 1 em todas as circunstâncias anatómicas.",
      "A vantagem mecânica é nula porque a força resultante dissipa-se sob forma de calor no fulcro."
    ],
    correctIndex: 0,
    explanation: "Numa alavanca inter-resistente (2.ª classe), como a resistência está situada entre o fulcro e a potência, o braço de potência (d_P, distância do fulcro até à potência) é obrigatoriamente superior ao braço de resistência (d_R). Como VM = d_P / d_R, a vantagem mecânica é SEMPRE maior que 1. Isto confere uma enorme multiplicação de força motora.",
    distractorAnalysis: [
      "Opção B descreve a característica incontornável das alavancas de 3.ª classe (onde d_P < d_R).",
      "Opção C só ocorreria se a potência e a resistência coincidissem no mesmo ponto sobre a alavanca.",
      "Opção D viola o princípio de conservação de energia e a definição elementar de vantagem mecânica."
    ],
    nursingApplication: "O conhecimento da alavanca de 2.ª classe é a base do funcionamento dos carrinhos manuais de transporte de cilindros de gases medicinais (O₂, N₂O): o fulcro são as rodas no solo, o pesado cilindro de aço constitui a resistência no centro, e o enfermeiro puxa os punhos compridos na extremidade superior (d_P >> d_R), mobilizando cargas de mais de 70 kg com reduzido esforço físico."
  },
  {
    id: 207,
    topicId: 2,
    question: "O movimento de elevar o corpo sobre a ponta dos pés (flexão plantar na articulação do tornozelo) é amplamente citado em biomecânica como um exemplo anatómico de alavanca de que tipo?",
    options: [
      "Alavanca de 2.ª classe (inter-resistente), onde o apoio está nas cabeças dos metatarsos, a resistência é o peso corporal transmitido pela tíbia, e a potência é exercida pelo tendão de Aquiles.",
      "Alavanca de 1.ª classe (interfixa), onde a tíbia atua como eixo de rotação intermediário.",
      "Alavanca de 3.ª classe (interpotente), onde o músculo tibial anterior puxa o pé para cima.",
      "Sistema sem alavanca mecânica, tratando-se de tração elástica pura sem rotação articular."
    ],
    correctIndex: 0,
    explanation: "Na elevação na ponta dos pés: o ponto de apoio (fulcro) situa-se nas articulações metatarsofalângicas em contacto com o chão; a resistência é a força normal/peso do corpo transmitida através da articulação talocrural (tíbia); a potência é a força de tração exercida pelo músculo tríceps sural (gémeos e sóleo) inserido posteriormente na tuberosidade do calcâneo através do tendão de Aquiles. Como a resistência está no meio, trata-se de uma alavanca de 2.ª classe com VM > 1.",
    distractorAnalysis: [
      "Opção B confunde a localização da tíbia com um fulcro fixo; no movimento de pontas dos pés o fulcro real com o solo está na base dos dedos.",
      "Opção C refere o músculo tibial anterior, que é extensor/dorsiflexor do pé (não atua na elevação na ponta dos pés) e organiza uma alavanca de 3.ª classe para dorsiflexão.",
      "Opção D ignora a cinemática e estática articular do tornozelo, que é um sistema mecânico articulado clássico."
    ],
    nursingApplication: "A enorme vantagem mecânica da alavanca de 2.ª classe no tornozelo permite que os músculos da barriga da perna suportem repetidamente todo o peso do indivíduo. Na reabilitação e marcha de doentes após imobilização prolongada ou AVC, fraquezas no tríceps sural impedem a impulsão da marcha, exigindo assistência de enfermagem na transferência e deambulação."
  },
  {
    id: 208,
    topicId: 2,
    question: "Numa alavanca de 3.ª classe (interpotente), qual é a posição relativa dos seus componentes e qual é a sua principal característica biomecânica?",
    options: [
      "A potência localiza-se entre o fulcro e a resistência; apresenta sempre desvantagem de força (VM < 1), mas proporciona grande ganho em amplitude de movimento e velocidade.",
      "A resistência localiza-se entre o fulcro e a potência; apresenta sempre ganho de força (VM > 1).",
      "O fulcro localiza-se no centro; permite unicamente a inversão do sentido da força aplicada com VM = 1.",
      "A potência e o fulcro coincidem no mesmo ponto anatómico, eliminando qualquer momento torsor."
    ],
    correctIndex: 0,
    explanation: "Numa alavanca de 3.ª classe (interpotente), a força de potência muscular é aplicada entre o eixo articular (fulcro) e a carga a mobilizar (resistência). Como o braço de potência é menor que o braço de resistência (d_P < d_R), a vantagem mecânica é SEMPRE inferior a 1 (VM < 1). O músculo é forçado a desenvolver uma força muito superior ao peso do objeto, mas em contrapartida um pequeno encurtamento muscular produz um deslocamento amplo e veloz da extremidade distal do membro.",
    distractorAnalysis: [
      "Opção B é a descrição de uma alavanca de 2.ª classe.",
      "Opção C refere-se exclusivamente a uma alavanca de 1.ª classe simétrica.",
      "Opção D é anatomicamente impossível, pois uma inserção tendinosa não coincide com o centro de rotação da cartilagem articular."
    ],
    nursingApplication: "A vasta maioria das alavancas esqueléticas humanas são de 3.ª classe. Isso explica por que o corpo humano é uma 'máquina' concebida para velocidade e alcance espacial, e não para suportar forças brutas. Em enfermagem, ao sustentar um membro edemaciado ou gessado de um doente longe do cotovelo, o esforço muscular do enfermeiro aumenta drasticamente."
  },
  {
    id: 209,
    topicId: 2,
    question: "A flexão do antebraço sobre o braço pela contração do músculo bicípite braquial constitui o exemplo paradigmático de:",
    options: [
      "Alavanca de 3.ª classe (interpotente), onde o fulcro é o cotovelo, a potência é a inserção do tendão na tuberosidade do rádio e a resistência é o peso do antebraço e mão.",
      "Alavanca de 2.ª classe (inter-resistente), onde o peso do antebraço é superado por apoio na mão.",
      "Alavanca de 1.ª classe (interfixa), onde o cotovelo está localizado entre a mão e o ombro.",
      "Polia fixa pura, sem braço de momento mecânico mensurável."
    ],
    correctIndex: 0,
    explanation: "Na flexão do cotovelo pelo bicípite braquial: o fulcro é a articulação úmero-ulnar/radial (cotovelo); a força de potência é aplicada na tuberosidade bicipital do rádio (cerca de 3 a 5 cm distal ao cotovelo); a resistência é o peso do antebraço e do objeto seguro na mão (distante cerca de 30 a 35 cm do cotovelo). Como a potência está no meio (entre o fulcro e a carga), é uma alavanca de 3.ª classe.",
    distractorAnalysis: [
      "Opção B inverte a posição da potência e da resistência.",
      "Opção C erradamente assume que a alavanca do cotovelo é interfixa (o fulcro não está no meio da haste antebraquial, mas na sua extremidade proximal).",
      "Opção D ignora a anatomia do sistema musculoesquelético que opera por rotação de segmentos ósseos rígidos."
    ],
    nursingApplication: "Devido a esta configuração de 3.ª classe, para segurar um peso de apenas 5 kg na mão, o bicípite tem de exercer uma força interna de tração de cerca de 40 a 50 kgf (400 a 500 N). Isso elucida porque esforços sustentados ao posicionar doentes geram rápida fadiga muscular nos membros superiores da equipa de enfermagem."
  },
  {
    id: 210,
    topicId: 2,
    question: "Um doente sustenta na mão uma esfera de 4 kg (peso resistente ≈ 40 N) a uma distância horizontal de 35 cm da articulação do cotovelo. Sabendo que o tendão do bicípite braquial se insere a 5 cm do cotovelo, qual é a força muscular mínima F_P que o bicípite tem de desenvolver para manter o antebraço na horizontal (desprezando o peso do antebraço)?",
    options: [
      "280 N",
      "40 N",
      "5,7 N",
      "1400 N"
    ],
    correctIndex: 0,
    explanation: "Aplicando a condição de equilíbrio rotacional (∑τ = 0) em relação ao cotovelo (fulcro): F_P · d_P = F_R · d_R. Substituindo os valores dados: F_P · (5 cm) = (40 N) · (35 cm) => F_P = (40 × 35) / 5 = 1400 / 5 = 280 N. A força muscular exercida é 7 vezes superior ao peso do objeto sustentado (VM = 5/35 = 1/7 ≈ 0,14).",
    distractorAnalysis: [
      "Opção B (40 N) ignora a desvantagem mecânica da alavanca de 3.ª classe, assumindo erradamente VM = 1.",
      "Opção C (5,7 N) resulta de inverter a razão dos braços de alavanca (40 × 5 / 35), o que violaria o princípio do equilíbrio.",
      "Opção D (1400 N) é o valor do torque em N·cm, tendo o estudante esquecido de dividir pela distância do tendão (5 cm)."
    ],
    nursingApplication: "Este cálculo biofísico demonstra quantitativamente o enorme estresse a que tendões e inserções periosteais estão submetidos na prática clínica. Ao ajudar a levantar ou apoiar doentes dependentes, manter as cargas coladas ao corpo reduz o braço de resistência (d_R), diminuindo exponencialmente as forças internas de tração exigidas aos músculos e tendões do profissional."
  },
  {
    id: 211,
    topicId: 2,
    question: "Durante a extensão do joelho pelo músculo quadríceps femoral contra uma resistência aplicada na perna, a rótula (patela) desempenha um papel biofísico crucial. Qual é a função mecânica primária da patela neste sistema de alavanca?",
    options: [
      "Desviar o tendão do quadríceps para a frente, aumentando a distância perpendicular ao eixo articular (braço de alavanca) e, consequentemente, aumentando o torque extensor.",
      "Transformar a articulação do joelho numa alavanca de 2.ª classe permanente com vantagem mecânica infinita.",
      "Diminuir o atrito a zero e eliminar completamente a força de reação articular no fémur.",
      "Reduzir o ângulo de inserção do tendão rotuliano para que toda a força seja dissipada longitudinalmente."
    ],
    correctIndex: 0,
    explanation: "A patela é o maior osso sesamoide do corpo humano. A sua função biomecânica essencial é atuar como um espaçador que afasta o tendão do quadríceps e o ligamento patelar do centro de rotação do joelho. Ao aumentar a distância perpendicular (braço de momento d), a patela aumenta o torque gerado (τ = F · d) para a mesma força de contração muscular em até 30-50%, melhorando a eficácia mecânica do quadríceps na extensão.",
    distractorAnalysis: [
      "Opção B é incorreta; a extensão do joelho continua a ser funcionalmente uma alavanca de 3.ª classe.",
      "Opção C é falsa; a força compressiva patelofemoral durante a flexão sob carga é enorme e atinge múltiplos do peso corporal.",
      "Opção D é contrária à realidade: a patela aumenta o ângulo de tração relativo ao eixo da tíbia, tornando a força mais eficaz na rotação."
    ],
    nursingApplication: "Em doentes submetidos a patelectomia total (remoção cirúrgica da patela) após fraturas cominutivas, o braço de alavanca do quadríceps é reduzido. O doente necessita de um esforço muscular significativamente maior para estender a perna, apresentando fraqueza na deambulação e subida de escadas, exigindo cuidados acrescidos de enfermagem na prevenção de quedas."
  },
  {
    id: 212,
    topicId: 2,
    question: "Ao utilizar uma pinça de dissecação (ou pinça anatómica sem dentes) para manusear compressas esterilizadas durante um penso complexo, qual é a classe de alavanca que o enfermeiro está a operar?",
    options: [
      "Alavanca de 3.ª classe (interpotente), onde a mola da extremidade unida é o fulcro, os dedos do enfermeiro aplicam a potência a meio da haste, e a gaze segura nas pontas é a resistência.",
      "Alavanca de 1.ª classe (interfixa), porque existe um eixo cruzado tipo tesoura no meio da pinça.",
      "Alavanca de 2.ª classe (inter-resistente), porque a gaze está colocada entre os dedos e a extremidade de união.",
      "Sistema de plano inclinado duplo sem componente de alavanca."
    ],
    correctIndex: 0,
    explanation: "Uma pinça de dissecação consiste em duas lâminas flexíveis unidas numa extremidade (fulcro). Os dedos indicador e polegar do profissional comprimem as lâminas no terço médio (potência), enquanto a extremidade distal aperta a compressa ou tecido (resistência). Como a potência está situada entre o fulcro e a resistência, trata-se inequivocamente de uma alavanca de 3.ª classe.",
    distractorAnalysis: [
      "Opção B confunde pinças anatómicas com pinças hemostáticas de cremalheira (como Kelly ou Pean), que possuem articulação em X e são de 1.ª classe.",
      "Opção C inverte a posição da resistência e da potência.",
      "Opção D desconhece a classificação dos mecanismos simples elementares."
    ],
    nursingApplication: "Como a pinça anatómica é de 3.ª classe (VM < 1), ela proporciona uma sensibilidade tátil tátil e controlo de precisão milimétrica excecionais na extremidade distal, embora exija uma força digital ligeiramente maior. É ideal para manipular tecidos delicados sem provocar lacerações por excesso de força bruta."
  },
  {
    id: 213,
    topicId: 2,
    question: "Por que motivo a esmagadora maioria das articulações sinoviais do corpo humano evoluiu estruturalmente como alavancas de 3.ª classe (interpotentes), apesar de apresentarem desvantagem mecânica em termos de força (VM < 1)?",
    options: [
      "Porque permitem que um pequeno encurtamento das fibras musculares produza grandes amplitudes angulares e elevadíssimas velocidades na extremidade dos membros.",
      "Porque reduzem a tensão sobre os tendões musculares a valores próximos de zero.",
      "Porque tornam o osso imune a qualquer tipo de deformação elástica ou plástica.",
      "Porque evitam que a força da gravidade atue sobre os segmentos distais do corpo."
    ],
    correctIndex: 0,
    explanation: "Nas alavancas de 3.ª classe, a potência insere-se próxima do fulcro e a resistência na extremidade. Pela relação geométrica de arcos de círculo, a extremidade distal percorre uma distância muito maior no mesmo intervalo de tempo do que o ponto de inserção muscular. Isso confere ao ser humano agilidade, capacidade de correr, lançar objetos e manipular instrumentos com rapidez e precisão, apesar de exigir músculos mais volumosos e fortes para compensar a desvantagem de força.",
    distractorAnalysis: [
      "Opção B é rigorosamente o oposto: a desvantagem mecânica obriga o tendão a suportar tensões mecânicas altíssimas.",
      "Opção C é falsa, pois os ossos sofrem deformações elásticas contínuas sob as forças musculares de reação.",
      "Opção D viola a física elementar; a gravidade continua a atuar plenamente sobre a massa dos segmentos."
    ],
    nursingApplication: "Compreender que as alavancas anatómicas privilegiam velocidade em detrimento de força explica a vulnerabilidade osteoarticular dos profissionais de saúde: o sistema esquelético humano não foi biomecanicamente projetado para sustentar cargas estáticas pesadas prolongadas sem fadiga ou risco de lesão."
  },
  {
    id: 214,
    topicId: 2,
    question: "A Reologia é o ramo da física que se dedica ao estudo de quê?",
    options: [
      "Da deformação e do escoamento da matéria quando submetida a tensões ou forças externas.",
      "Da transmissão exclusiva de ondas eletromagnéticas no vácuo.",
      "Da desintegração radioativa do núcleo atómico ao longo do tempo.",
      "Da velocidade de filtração glomerular no néfron renal."
    ],
    correctIndex: 0,
    explanation: "A Reologia (do grego rheos, fluir) é a ciência física que estuda a deformação e o escoamento de todos os tipos de matéria — englobando desde sólidos com elasticidade de Hooke até fluidos Newtonianos e fluidos biológicos complexos não-Newtonianos (como o sangue e o muco respiratório), passando por materiais viscoelásticos.",
    distractorAnalysis: [
      "Opção B refere-se à ótica física e teoria eletromagnética de Maxwell.",
      "Opção C define a física nuclear e a radioatividade.",
      "Opção D é um parâmetro fisiológico renal específico, não uma disciplina da física mecânica."
    ],
    nursingApplication: "A reologia clínica é fundamental em enfermagem para compreender a drenagem de exsudados viscosos, a aspiração de secreções brônquicas, a fluidez de soluções entéricas e a viscoelasticidade da pele e dos tecidos moles na prevenção de escaras."
  },
  {
    id: 215,
    topicId: 2,
    question: "No contexto da mecânica dos materiais, qual é a definição formal de 'Tensão' (stress, σ) e qual é a sua unidade no Sistema Internacional (SI)?",
    options: [
      "É a razão entre a força interna ou externa aplicada e a área da secção transversal sobre a qual atua (σ = F / A); a sua unidade SI é o Pascal (Pa = N/m²).",
      "É o alongamento total absoluto sofrido pelo corpo; a sua unidade SI é o metro (m).",
      "É o produto da força pelo tempo de contacto; a sua unidade SI é o Newton-segundo (N·s).",
      "É a razão entre o volume final e a massa do material; a sua unidade SI é m³/kg."
    ],
    correctIndex: 0,
    explanation: "Tensão mecânica (stress, representada pela letra grega sigma, σ, para tensões normais, ou tau, τ, para tensões tangenciais) é definida como a força exercida por unidade de área da secção transversal: σ = F / A. A unidade oficial do SI é o Pascal (1 Pa = 1 N/m²), frequentemente expressa em MegaPascals (MPa = 10⁶ N/m² = 1 N/mm²).",
    distractorAnalysis: [
      "Opção B confunde tensão com deformação absoluta linear (ΔL), medida em metros.",
      "Opção C define a grandeza física Impulso mecânico (J = F · Δt).",
      "Opção D define o volume específico de uma substância."
    ],
    nursingApplication: "Ao administrar uma injeção intramuscular com uma agulha de pequeno diâmetro, a pequena área de secção do êmbolo da seringa gera elevadas pressões hidrostáticas se o êmbolo for forçado rapidamente, o que pode originar tensões mecânicas teciduais excessivas e dor aguda no doente."
  },
  {
    id: 216,
    topicId: 2,
    question: "A deformação relativa ou unitária longitudinal (strain, ε) sofrida por um material sob tração é calculada através de que relação?",
    options: [
      "ε = ΔL / L₀ (variação do comprimento a dividir pelo comprimento inicial), sendo uma grandeza adimensional.",
      "ε = L₀ · ΔL, expressa em metros quadrados (m²).",
      "ε = F · ΔL, expressa em Joules (J).",
      "ε = ΔL / t, expressa em metros por segundo (m/s)."
    ],
    correctIndex: 0,
    explanation: "A deformação relativa (strain, ε) representa o alongamento fracionário de um corpo: ε = (L - L₀) / L₀ = ΔL / L₀. Como é a razão entre duas medidas de comprimento (m / m), é uma grandeza puramente adimensional (frequentemente expressa em percentagem, por exemplo, 0,05 = 5% de deformação).",
    distractorAnalysis: [
      "Opção B calcula uma grandeza dimensional fictícia sem significado físico em mecânica dos sólidos.",
      "Opção C expressa uma fórmula relacionada com o trabalho mecânico realizado.",
      "Opção D mede a velocidade de deformação (taxa de deformação strain rate, s⁻¹)."
    ],
    nursingApplication: "As ligaduras elásticas utilizadas para compressão de membros inferiores em doentes com insuficiência venosa crónica baseiam o seu efeito terapêutico na deformação relativa (alongamento percentual) aplicada pelo enfermeiro durante a colocação (ex: estiramento a 50% de ε)."
  },
  {
    id: 217,
    topicId: 2,
    question: "Qual das seguintes equações traduz a Lei de Hooke para a deformação elástica linear de um sólido sob tração simples?",
    options: [
      "σ = E · ε, onde σ é a tensão, E é o Módulo de Young e ε é a deformação relativa.",
      "σ = E / ε², onde a tensão decai quadraticamente com a deformação.",
      "σ = m · v · ε, onde v é a velocidade de propagação sonora no material.",
      "σ = E · L₀ · g, onde g é a aceleração da gravidade."
    ],
    correctIndex: 0,
    explanation: "A Lei de Hooke (formulada por Robert Hooke em 1678 como 'ut tensio, sic vis') estabelece que, na região elástica de proporcionalidade, a tensão normal é linearmente proporcional à deformação relativa que provoca: σ = E · ε. A constante de proporcionalidade E é o Módulo de Young (ou Módulo de Elasticidade Longitudinal).",
    distractorAnalysis: [
      "Opção B propõe uma dependência inversamente quadrática que inexiste no comportamento elástico linear.",
      "Opção C introduz incorretamente a velocidade e momento linear num regime estático de sólidos.",
      "Opção D é dimensionalmente incorreta e mistura constantes gravitacionais irrelevantes para a rigidez intrínseca do material."
    ],
    nursingApplication: "O funcionamento de dinamómetros de reabilitação e balanças de mola utilizadas para pesar recém-nascidos baseia-se rigorosamente na Lei de Hooke: a deformação da mola é estritamente proporcional à força peso aplicada pelo bebé."
  },
  {
    id: 218,
    topicId: 2,
    question: "O Módulo de Young (E) traduz uma propriedade intrínseca do material. Fisicamente, o que representa um valor elevado de Módulo de Young?",
    options: [
      "Elevada rigidez elástica do material, significando que é necessária uma grande tensão mecânica para produzir uma pequena deformação elástica.",
      "Grande flexibilidade, significando que o corpo se deforma enormemente com forças insignificantes.",
      "Incapacidade absoluta do material para suportar qualquer força de compressão.",
      "Elevada densidade de massa atómica exclusivamente."
    ],
    correctIndex: 0,
    explanation: "O Módulo de Young (E = σ / ε) é a medida fundamental da rigidez elástica de um material. Quanto maior for o valor de E (medido em Pa ou GPa), mais 'rígido' é o corpo e mais resistente é à deformação elástica — ou seja, menor será a deformação sofrida para uma dada tensão aplicada.",
    distractorAnalysis: [
      "Opção B descreve um material de alta complacência ou flexibilidade, caracterizado por um Módulo de Young muito BAIXO (como elastómeros ou silicone).",
      "Opção C é falsa; materiais com elevado Módulo de Young (como ligas de titânio ou o osso cortical) suportam elevadíssimas forças de compressão.",
      "Opção D confunde rigidez mecânica com densidade volumétrica de massa."
    ],
    nursingApplication: "Nas próteses articulares da anca, ligas metálicas tradicionais possuem Módulo de Young muito superior ao do osso cortical (~200 GPa vs ~18 GPa). Essa discrepância gera a complicação de 'stress shielding' (blindagem contra o estresse), onde o osso não recebe carga mecânica e atrofia por desuso, exigindo monitorização radiológica e cuidados de enfermagem pós-operatórios."
  },
  {
    id: 219,
    topicId: 2,
    question: "Num ensaio de tração mecânica de um biomaterial, o que distingue fundamentalmente a 'Deformação Elástica' da 'Deformação Plástica'?",
    options: [
      "A deformação elástica é completamente reversível quando a carga é removida, enquanto a deformação plástica é permanente e residual.",
      "A deformação elástica provoca sempre a rotura imediata do corpo, enquanto a deformação plástica restaura a forma original.",
      "A deformação elástica não segue a Lei de Hooke, enquanto a plástica segue rigorosamente.",
      "A deformação elástica só ocorre em fluidos biológicos e a plástica em ossos secos."
    ],
    correctIndex: 0,
    explanation: "A deformação elástica envolve apenas o afastamento temporário dos átomos ou desenrolamento conformacional reversível de polímeros sem rutura das ligações fundamentais; cessada a força, o corpo recupera integralmente o comprimento original (L₀). Na deformação plástica, ultrapassa-se o limite elástico e ocorre escorregamento irreversível de planos atómicos ou quebra de ligações moleculares, resultando numa deformação residual permanente.",
    distractorAnalysis: [
      "Opção B inverte os conceitos de forma absurda; a rotura ocorre após o esgotamento da deformação plástica.",
      "Opção C é errada porque a Lei de Hooke rege precisamente a fase elástica linear, e não a fase plástica.",
      "Opção D limita erroneamente estados da matéria; deformação elástica e plástica são conceitos fundamentais da física dos sólidos."
    ],
    nursingApplication: "Ao dobrar manualmente o mandril metálico (guia) de um tubo endotraqueal para entubação difícil, o enfermeiro induz deformação plástica controlada no metal para que ele mantenha a curvatura desejada. Por outro lado, o balonete de vedação da traqueia deve manter deformação elástica pura para vedar sem colapsar as vias aéreas."
  },
  {
    id: 220,
    topicId: 2,
    question: "O ponto da curva tensão-deformação que marca a transição entre o regime elástico reversível e o início da deformação plástica permanente é denominado:",
    options: [
      "Limite de elasticidade (ou tensão de escoamento, yield point).",
      "Ponto de fusão endotérmica.",
      "Ponto de tensão de rotura final catastrófica.",
      "Origem de coordenadas de repouso absoluto."
    ],
    correctIndex: 0,
    explanation: "O limite de elasticidade (e de forma muito próxima na engenharia, a tensão de escoamento ou yield strength) é o valor máximo de tensão mecânica que um material pode suportar sem sofrer deformação plástica residual permanente. Se a tensão aplicada for superior a este limite, o corpo não regressa ao seu comprimento inicial após a remoção da força.",
    distractorAnalysis: [
      "Opção B refere-se a uma transição de fase termodinâmica sólido-líquido, sem relação com tensão mecânica.",
      "Opção C refere-se ao ponto final onde o material se fratura e separa em dois pedaços.",
      "Opção D é apenas o ponto zero (tensão zero, deformação zero) no início do ensaio."
    ],
    nursingApplication: "Nos clipes hemostáticos cirúrgicos e agrafos utilizados para fechar incisões, a aplicação pela pinça deve ultrapassar conscientemente o limite de elasticidade do titânio para produzir deformação plástica, garantindo que o agrafo permanece permanentemente fechado sobre a derme do doente."
  },
  {
    id: 221,
    topicId: 2,
    question: "Na ciência dos materiais e biomecânica, qual é a definição de 'Tenacidade' (toughness)?",
    options: [
      "É a capacidade do material absorver energia mecânica e deformar-se plasticamente até à fratura, correspondendo à área total sob a curva tensão-deformação.",
      "É a resistência que a superfície do material oferece ao risco e penetração por outro corpo duro.",
      "É a massa máxima que o corpo pode suportar sem alterar a sua temperatura.",
      "É a velocidade com que uma onda de choque mecânica atravessa o material."
    ],
    correctIndex: 0,
    explanation: "Tenacidade (toughness) é a quantidade total de energia mecânica por unidade de volume que um material consegue absorver antes de fraturar. No gráfico de tensão versus deformação, a tenacidade é matematicamente igual à área integral sob toda a curva (desde a origem até à rotura). Materiais tenazes combinam alta resistência mecânica com ductilidade considerável.",
    distractorAnalysis: [
      "Opção B define rigorosamente a 'Dureza' (hardness) do material (avaliada pelas escalas Mohs, Brinell ou Vickers).",
      "Opção C confunde propriedades mecânicas com capacidade térmica de calor específico.",
      "Opção D define a velocidade acústica de propagação mecânica (v = √(E/ρ))."
    ],
    nursingApplication: "O osso vivo saudável possui elevada tenacidade devido à matriz de colagénio, o que lhe permite absorver o impacto de quedas moderadas sem fraturar. Em doentes idosos ou com osteogénese imperfeita, a perda de tenacidade torna o esqueleto frágil, suscetível a fraturas de baixa energia com o simples apoio do peso corporal."
  },
  {
    id: 222,
    topicId: 2,
    question: "Um material classificado como 'Frágil' (brittle) em oposição a 'Dúctil' (ductile) caracteriza-se por fraturar com:",
    options: [
      "Praticamente nenhuma deformação plástica prévia, quebrando quase repentinamente após o término da fase elástica linear.",
      "Uma enorme extensão de deformação plástica antes da separação física.",
      "Geração espontânea de calor e fusão dos seus fragmentos.",
      "Um aumento contínuo do seu volume total sob tração axial."
    ],
    correctIndex: 0,
    explanation: "Materiais frágeis (como o vidro, a cerâmica, o gesso ortopédico seco e o mineral puro do osso sem colagénio) apresentam fratura súbita e catastrófica logo que a tensão atinge o limite elástico, sem sofrer escoamento plástico mensurável. Materiais dúcteis (como o cobre, o aço inoxidável e o titânio), pelo contrário, sofrem extensas deformações plásticas antes de quebrarem.",
    distractorAnalysis: [
      "Opção B define a essência mecânica dos materiais dúcteis.",
      "Opção C viola as leis de fratura mecânica dos materiais.",
      "Opção D descreveria um comportamento de dilatação anómala que não é definidor de fragilidade."
    ],
    nursingApplication: "As talas e aparelhos gessados de imobilização ortopédica são rígidos e extremamente frágeis. Se o doente apoiar peso excessivo sobre um gesso recente de marcha, o gesso fratura por quebra frágil imediata em vez de vergar, comprometendo a imobilização da fratura e exigindo nova colocação pelo enfermeiro."
  },
  {
    id: 223,
    topicId: 2,
    question: "O que quantifica o 'Coeficiente de Poisson' (ν) quando um corpo elástico cilíndrico é submetido a uma tensão de tração longitudinal simples?",
    options: [
      "A razão (com sinal invertido) entre a deformação transversal e a deformação longitudinal (ν = - ε_transversal / ε_longitudinal).",
      "A taxa de evaporação de fluidos intersticiais durante a tração.",
      "A força exercida pela pressão atmosférica sobre o perímetro do cilindro.",
      "A variação de temperatura decorrente da perda de elasticidade do corpo."
    ],
    correctIndex: 0,
    explanation: "Quando um sólido elástico é esticado longitudinalmente (tração, onde ε_longitudinal > 0), a sua secção transversal contrai-se lateralmente (adelgaçamento, onde ε_transversal < 0). O Coeficiente de Poisson (ν) é a razão adimensional entre essa deformação lateral e a deformação axial: ν = - ε_transversal / ε_longitudinal. Para a maioria dos materiais metálicos e ossos, ν situa-se entre 0,25 e 0,35; para a borracha e tecidos biológicos ricos em água incompressível, aproxima-se de 0,5.",
    distractorAnalysis: [
      "Opção B confunde mecânica de deformação com termodinâmica de evaporação.",
      "Opção C é incorreta porque a pressão atmosférica não entra na definição do coeficiente de Poisson.",
      "Opção D mistura termodinâmica com propriedades mecânicas elásticas."
    ],
    nursingApplication: "Ao insuflar a braçadeira de um esfigmomanómetro ou garrote elástico, a tração longitudinal do tubo de borracha provoca adelgaçamento da sua parede (efeito de Poisson). Se o material for velho ou ressecado, esse afinamento lateral gera microfissuras e rutura súbita durante procedimentos de colheita de sangue."
  },
  {
    id: 224,
    topicId: 2,
    question: "Quando uma força tangencial é aplicada paralelamente à superfície de um corpo, provocando o deslizamento relativo entre planos adjacentes de matéria, que tipo de solicitação mecânica está a ser exercida?",
    options: [
      "Tensão de Cisalhamento (ou corte, τ).",
      "Tensão de Compressão axial pura.",
      "Pressão Hidrostática isotrópica.",
      "Tração uniaxial perpendicular."
    ],
    correctIndex: 0,
    explanation: "A tensão de cisalhamento (shear stress, denotada por τ) surge quando as forças aplicadas atuam tangencialmente (paralelas) ao plano da secção de área: τ = F_tangencial / A. Ela deforma o corpo alterando os seus ângulos internos (distorção angular), como quando se empurra a capa superior de um livro grosso assente numa mesa.",
    distractorAnalysis: [
      "Opção B refere-se a forças normais dirigidas perpendicularmente para o interior do material, encurtando o seu eixo.",
      "Opção C descreve forças compressivas iguais em todas as direções espaciais aplicadas por um fluido envolvente.",
      "Opção D descreve forças normais dirigidas perpendicularmente para o exterior, alongando o corpo."
    ],
    nursingApplication: "Na pele de um doente acamado com a cabeceira elevada a mais de 30°, o corpo tende a escorregar para o fundo da cama por gravidade enquanto a pele fica retida no lençol por atrito. Isso gera tensões de cisalhamento devastadoras nos tecidos subcutâneos profundos, que deformam e ocluem os vasos perfurantes, acelerando a necrose e o surgimento de lesões por pressão."
  },
  {
    id: 225,
    topicId: 2,
    question: "A resistência à torção de uma estrutura cilíndrica (como um osso longo ou o eixo de um equipamento) depende criticamente de que parâmetro geométrico?",
    options: [
      "Do Momento Polar de Inércia da secção transversal (J), que nos cilindros circulares é diretamente proporcional à quarta potência do raio (r⁴).",
      "Apenas do comprimento do cilindro, sendo completamente independente do raio.",
      "Da cor e textura rugosa externa do revestimento da superfície.",
      "Da velocidade de rotação expressa em radianos por hora."
    ],
    correctIndex: 0,
    explanation: "A rigidez e resistência à torção dependem do Momento Polar de Inércia (J) da secção transversal (para uma haste circular maciça, J = π · r⁴ / 2). Por depender da quarta potência do raio (r⁴), duplicar o raio externo de um cilindro ou osso aumenta a sua resistência à torção em dezasseis vezes (2⁴ = 16) para o mesmo material.",
    distractorAnalysis: [
      "Opção B é falsa, pois a geometria da secção transversal (especialmente o raio) é o determinante primário da resistência à torção.",
      "Opção C refere atributos visuais superficiais sem qualquer relevância mecânica estrutural.",
      "Opção D descreve cinemática de rotação, não resistência estrutural estática."
    ],
    nursingApplication: "Ao rodar um doente na cama segurando nos pés ou pernas com o tronco imobilizado, o enfermeiro gera momentos de torção sobre a diáfise da tíbia e fémur. Em doentes com osteoporose severa (onde o osso esponjoso e cortical perderam massa interna), forças inadvertidas de torção podem provocar fraturas espiroides com facilidade."
  },
  {
    id: 226,
    topicId: 2,
    question: "Quando um elemento estrutural reto (como uma tábua de transferência ou um fémur) é submetido a uma solicitação de flexão mecânica, qual é o perfil de tensões gerado no seu interior?",
    options: [
      "O bordo côncavo (interno) fica sob compressão, o bordo convexo (externo) fica sob tração, e na linha neutra central a tensão axial é rigorosamente nula.",
      "Todas as fibras internas ficam submetidas exclusivamente a tração de intensidade uniforme.",
      "Todas as fibras internas ficam submetidas exclusivamente a compressão isotrópica.",
      "A tensão axial é máxima exatamente no centro geométrico e nula em ambas as bordas superficiais."
    ],
    correctIndex: 0,
    explanation: "Na flexão simples, a curvatura produz encurtamento das fibras longitudinais no lado interno da curva (gerando tensões de compressão) e alongamento das fibras no lado externo da curva (gerando tensões de tração). A transição suave entre tração e compressão define a 'linha neutra' (ou superfície neutra), onde não há deformação nem tensão axial (σ = 0).",
    distractorAnalysis: [
      "Opção B ignora a curvatura que obriga um dos lados a encurtar-se em compressão.",
      "Opção C ignora o alongamento imposto às fibras exteriores convexas.",
      "Opção D inverte completamente o gradiente real: a tensão na flexão é zero no centro e máxima nas periferias mais afastadas da linha neutra (σ = M · y / I)."
    ],
    nursingApplication: "Quando um doente idoso sofre uma queda de lado sobre o grande trocânter, o colo do fémur é forçado em flexão violenta: o bordo inferior fica sob compressão e o bordo superior sob tração extrema. Como o osso resiste muito menos à tração do que à compressão, a fratura inicia-se habitualmente por rasgo no bordo superior sob tração."
  },
  {
    id: 227,
    topicId: 2,
    question: "O fenómeno mecânico conhecido como 'Fadiga dos Materiais' caracteriza-se por:",
    options: [
      "Fratura catastrófica de uma estrutura após a aplicação repetida e cíclica de tensões mecânicas, cujos valores de pico são muito inferiores ao limite de rotura estático do material.",
      "Amolecimento térmico imediato provocado pela luz solar incidente em materiais metálicos.",
      "Aumento permanente da rigidez e resistência de um sólido após permanecer em repouso absoluto.",
      "Oxidação química superficial sem qualquer degradação estrutural interna."
    ],
    correctIndex: 0,
    explanation: "A fadiga dos materiais é o processo de degradação estrutural progressiva e localizada que ocorre quando um componente é submetido a tensões mecânicas oscilatórias ou cíclicas repetidas (milhares ou milhões de ciclos). Mesmo que as tensões sejam muito menores do que a tensão de rotura estática, microfissuras iniciam-se e propagam-se lentamente até causarem uma fratura súbita e imprevisível.",
    distractorAnalysis: [
      "Opção B confunde fadiga mecânica com degradação termoplástica ou fotodegradação.",
      "Opção C descreveria um endurecimento espontâneo inexistente na ausência de tratamentos metalúrgicos.",
      "Opção D descreve corrosão química passivadora simples, ignorando o colapso mecânico cíclico."
    ],
    nursingApplication: "Fraturas de stress (fadiga óssea) nos metatarsos ocorrem em atletas ou doentes que iniciam marcha intensiva após repouso prolongado. Do mesmo modo, hastes de próteses ortopédicas de anca ou joelho podem falhar por fadiga após 10 a 15 anos de ciclos diários de marcha (cerca de 1 a 2 milhões de passos por ano), exigindo monitorização clínica de dores inexplicadas na anca."
  },
  {
    id: 228,
    topicId: 2,
    question: "Os cateteres venosos periféricos modernos são frequentemente fabricados em Poliuretano (PUR) em detrimento do Teflon tradicional (FEP). Qual é a principal vantagem biofísica e reológica do poliuretano quando introduzido no corpo humano?",
    options: [
      "Possui amolecimento térmico in vivo, tornando-se mais flexível (menor Módulo de Young) à temperatura corporal de 37 °C, o que reduz o traumatismo mecânico na parede endotelial e o risco de flebite.",
      "Apresenta rigidez infinita permanente para perfurar a pele sem necessidade de agulha guia de aço.",
      "Dissolve-se espontaneamente no sangue após 48 horas de cateterização venosa.",
      "Bloqueia completamente o fluxo de sangue na veia para evitar extravasamentos."
    ],
    correctIndex: 0,
    explanation: "O poliuretano (PUR) é um polímero termossensível: à temperatura ambiente (cerca de 20-22 °C) possui rigidez suficiente para facilitar a punção e progressão venosa, mas ao entrar na corrente sanguínea e atingir 37 °C sofre um relaxamento reológico acentuado, reduzindo significativamente o seu Módulo de Young (amolece até 50-70%). Isto permite que o cateter acompanhe as curvaturas anatómicas da veia, diminuindo drasticamente a tensão de atrito sobre a íntima vascular e a incidência de flebites mecânicas.",
    distractorAnalysis: [
      "Opção B é falsa: o poliuretano flexível necessita sempre da agulha metálica introdutora para vencer a resistência da pele.",
      "Opção C descreve um material biodegradável de reabsorção rápida, totalmente desadequado para manter um acesso venoso pérvio.",
      "Opção D descreve um trombo oclusivo iatrogénico catastrófico, contrariando o objetivo da fluidoterapia."
    ],
    nursingApplication: "A escolha do material do cateter é um indicador de excelência nos cuidados de enfermagem: ao administrar terapêutica intravenosa contínua num doente agitado ou em doentes pediátricos/idosos, cateteres de poliuretano garantem maior sobrevida funcional do acesso vascular e reduzem o risco de infiltrações e flebites associadas a movimentos bruscos do membro."
  },
  {
    id: 229,
    topicId: 2,
    question: "O fenómeno de 'Kinking' (quinagem ou colapso por flexão acentuada) observado em tubos de drenagem cirúrgica ou cateteres decorre da perda de estabilidade geométrica da secção circular. Que propriedade geométrica do tubo confere maior resistência à quinagem?",
    options: [
      "Maior espessura da parede do tubo e maior diâmetro externo, o que aumenta o Momento de Inércia da secção transversal.",
      "Comprimento extremamente longo do cateter (superior a 2 metros).",
      "Transparência ótica absoluta da borracha medicinal.",
      "Secção transversal elíptica extremamente achatada sem reforço."
    ],
    correctIndex: 0,
    explanation: "A resistência de um tubo à flexão e ao colapso circunferencial (kinking) depende do momento de inércia da sua secção transversal (I = π(d_ext⁴ - d_int⁴)/64). Uma parede mais espessa ou a inclusão de estrias circunferenciais/espirais metálicas (tubos armados) aumenta enormemente a rigidez contra a ovalização e quinagem, mantendo a luz interna desobstruída mesmo em curvas apertadas.",
    distractorAnalysis: [
      "Opção B aumenta a probabilidade de dobras e laços indesejados ao longo do percurso do tubo.",
      "Opção C é uma característica ótica útil para visualizar líquidos drenados, mas sem relevância na rigidez mecânica de kinking.",
      "Opção D descreve um perfil já pré-colapsado que bloqueia o fluxo com mínima flexão adicional."
    ],
    nursingApplication: "Na vigilância de doentes com drenos torácicos ou cateteres de diálise peritoneal, a quinagem (kinking) do circuito provoca interrupção imediata da drenagem, podendo originar pneumotórax hipertensivo ou tamponamento pericárdico. O enfermeiro deve inspecionar rotineiramente a trajetória dos tubos e garantir que não ficam sob o corpo do doente."
  },
  {
    id: 230,
    topicId: 2,
    question: "Na comparação reológica entre luvas de procedimento clínico fabricadas em Látex de borracha natural, Borracha de Nitrilo e Vinil (PVC), qual das opções caracteriza com precisão o comportamento mecânico do Vinil?",
    options: [
      "O Vinil possui baixo módulo de elasticidade e elevadíssima deformação plástica permanente, o que resulta em perda rápida de adaptação anatómica à mão e menor resistência a microperfurações sob tração.",
      "O Vinil é o elastómero mais elástico do mundo, recuperando 100% da sua forma mesmo após esticado cinco vezes o seu comprimento.",
      "O Vinil é totalmente impenetrável por qualquer agulha cirúrgica devido à sua rigidez diamantífera.",
      "O Vinil reage quimicamente com o oxigénio do ar, duplicando a sua espessura a cada 10 minutos de uso."
    ],
    correctIndex: 0,
    explanation: "O policloreto de vinila (vinil) plastificado não é um elastómero verdadeiro: apresenta baixa memória elástica (alta taxa de relaxamento de tensões e deformação plástica irreversível quando esticado). Ao calçar e movimentar os dedos, a luva de vinil deforma-se permanentemente, criando folgas e microfissuras na estrutura molecular, oferecendo uma barreira mecânica significativamente inferior contra agentes biológicos do que o látex ou o nitrilo.",
    distractorAnalysis: [
      "Opção B descreve as propriedades mecânicas de excelência do látex de borracha natural (elastómero de alto retorno elástico).",
      "Opção C é falsa; nenhuma luva de procedimento resiste à perfuração de agulhas hipodérmicas afiadas.",
      "Opção D é uma afirmação fantasiosa sem sustentação química."
    ],
    nursingApplication: "Normas internacionais de controlo de infeção recomendam que os enfermeiros evitem luvas de vinil no manuseamento de fluidos corporais de alto risco (sangue, exsudados abundantes) ou citotóxicos, priorizando o nitrilo ou látex, que oferecem maior resistência à tração e retenção de integridade mecânica durante o procedimento."
  },
  {
    id: 231,
    topicId: 2,
    question: "A eficácia terapêutica das meias de compressão elástica graduada na prevenção de Trombose Venosa Profunda (TVP) é explicada biofisicamente pela Lei de Laplace. De acordo com esta lei para um cilindro oco (P = T / r), como varia a pressão de compressão (P) exercida sobre a perna?",
    options: [
      "A pressão exercida pelo tecido elástico é inversamente proporcional ao raio do membro (P = T / r); para uma mesma tensão elástica da malha (T), a pressão é máxima no tornozelo (menor raio) e diminui progressivamente em direção à coxa (maior raio).",
      "A pressão exercida aumenta com o quadrado do raio, sendo máxima na coxa e nula no tornozelo.",
      "A pressão é estritamente uniforme e independente do raio anatómico do membro.",
      "A pressão exercida depende unicamente da temperatura externa do quarto do doente."
    ],
    correctIndex: 0,
    explanation: "Pela Lei de Laplace aplicada a membranas cilíndricas elásticas em equilíbrio, a pressão transmural é dada por P = T / r, onde T é a tensão tangencial da malha têxtil e r é o raio de curvatura local do membro. Devido à conicidade natural da perna humana, o raio r é muito menor no tornozelo do que na barriga da perna ou coxa. Portanto, mesmo com tensão T uniforme ou ligeiramente decrescente, a pressão P é naturalmente mais alta no tornozelo (ex: 18-20 mmHg) e decai em direção proximal (ex: 8-10 mmHg na coxa), criando o gradiente pressórico indispensável para impulsionar o retorno venoso.",
    distractorAnalysis: [
      "Opção B descreve uma relação inversa que estrangularia o fluxo sanguíneo na coxa e provocaria estase venosa distal catastrófica.",
      "Opção C ignora a dependência geométrica do raio na Lei de Laplace.",
      "Opção D confunde leis biomecânicas fundamentais com variáveis ambientais secundárias."
    ],
    nursingApplication: "A medição correta do perímetro do tornozelo, gémeos e coxa do doente é um cuidado de enfermagem indeclinável antes de prescrever ou colocar meias de compressão. Usar meias de tamanho incorreto (ou permitir que a meia enrole na extremidade superior, reduzindo o raio e multiplicando a tensão) cria um anel de constrição que atua como garrote patológico, favorecendo a trombose venosa."
  },
  {
    id: 232,
    topicId: 2,
    question: "A calibração e especificação dos fios de sutura cirúrgica segundo a Farmacopeia Americana (escala USP, ex: 2-0, 3-0, 4-0) baseia-se fundamentalmente em quais propriedades mecânicas e físicas?",
    options: [
      "No diâmetro físico do fio e na sua carga de rotura mínima por tração (tensile strength) com e sem nó cirúrgico.",
      "No índice de refração ótica e absorção de radiação infravermelha pelo monofilamento.",
      "Na condutividade elétrica do fio quando imerso em solução salina a 0,9%.",
      "No peso molecular dos conservantes bactericidas adicionados à embalagem estéril."
    ],
    correctIndex: 0,
    explanation: "A classificação USP padroniza os fios cirúrgicos pelo seu diâmetro milimétrico e pela resistência mecânica à tração (tensão de rotura): quanto maior for o número de zeros (ex: 6-0 vs 2-0), menor é o calibre (diâmetro mais fino) e menor é a força absoluta de tração necessária para romper o fio. A norma exige ainda testes rigorosos de resistência com o nó realizado, pois o nó introduz concentrações de tensão de cisalhamento locais que reduzem a força do fio em até 50%.",
    distractorAnalysis: [
      "Opção B foca-se em propriedades óticas irrelevantes para a contenção mecânica da ferida cirúrgica.",
      "Opção C foca-se em condutividade elétrica, parâmetro sem relação com a escala de sutura.",
      "Opção D refere-se a adjuvantes químicos de acondicionamento sem correlação com o calibre USP."
    ],
    nursingApplication: "Na remoção de pontos cirúrgicos ou na colaboração em pequenas cirurgias, o enfermeiro deve reconhecer que um fio 6-0 (usado na face por razões estéticas) tem baixíssima resistência à tração e quebra facilmente com pinçamento inadequado, enquanto um fio 1 ou 2 (usado em laparotomias para encerrar aponevroses resistentes) suporta elevadíssimas tensões mecânicas de tração."
  },
  {
    id: 233,
    topicId: 2,
    question: "Na biofísica dos materiais poliméricos hospitalares, o que se entende pelo conceito de 'Relaxamento de Tensões' (stress relaxation)?",
    options: [
      "A diminuição progressiva da tensão mecânica interna ao longo do tempo quando o material é mantido sob uma deformação constante pré-estabelecida.",
      "A recuperação instantânea da forma geométrica sem dissipação de calor.",
      "A quebra espontânea das ligações peptídicas devido à luz fluorescente do quarto.",
      "O aumento contínuo da pressão interna de um balão sem entrada de gás adicional."
    ],
    correctIndex: 0,
    explanation: "O relaxamento de tensões (stress relaxation) é uma manifestação típica de materiais viscoelásticos: quando uma amostra de polímero é submetida a uma deformação instantânea fixa (ε = constante) e assim é mantida, as cadeias macromoleculares reorganizam-se lentamente internamente, aliviando o estresse elástico. Como consequência, a tensão interna σ(t) decresce monotonicamente com o tempo.",
    distractorAnalysis: [
      "Opção B descreve a elasticidade perfeita ideal de Hooke sem efeitos viscosos temporais.",
      "Opção C confunde degradação química fotoquímica com resposta mecânica viscoelástica.",
      "Opção D viola a Lei de Boyle e as leis da termodinâmica de gases ideais."
    ],
    nursingApplication: "Quando o enfermeiro aplica uma fita adesiva, ligadura compressiva ou garrote de borracha no braço de um doente, a tensão de compressão inicial é máxima nos primeiros minutos e diminui progressivamente na primeira meia hora devido ao relaxamento de tensões do polímero. Se for necessária uma compressão hemostática mantida, o enfermeiro deve reavaliar e reajustar periodicamente a pressão aplicada."
  },
  {
    id: 234,
    topicId: 2,
    question: "O fenómeno viscoelástico complementar ao relaxamento de tensões, no qual um material se deforma de modo contínuo e progressivo sob a ação de uma carga ou tensão mecânica constante ao longo do tempo, designa-se por:",
    options: [
      "Fluência mecânica (creep).",
      "Ressonância harmónica simples.",
      "Magnetostrição polarizada.",
      "Dureza de Vickers estática."
    ],
    correctIndex: 0,
    explanation: "A fluência (creep) é a deformação permanente ou dependente do tempo que um material sólido sofre quando submetido a uma tensão mecânica constante (σ = constante) durante um período prolongado. Ocorre tanto em biomateriais poliméricos (como os tubos endotraqueais e colchões) como em tecidos biológicos (ligamentos, tendões e discos intervertebrais).",
    distractorAnalysis: [
      "Opção B descreve a oscilação de alta amplitude quando a frequência externa coincide com a frequência natural de um sistema.",
      "Opção C refere-se à alteração geométrica de materiais ferromagnéticos na presença de campos magnéticos.",
      "Opção D é um método metalúrgico de ensaio de indentação para medir dureza."
    ],
    nursingApplication: "A fluência (creep) explica por que a pele de um doente obeso ou acamado continua a deformar-se e adelgaçar-se ao longo de horas de apoio estático sobre o sacro, mesmo que o peso corporal não aumente. Explica também a perda progressiva da pressão de oclusão de clamps plásticos descartáveis aplicados em linhas de infusão ao longo de vários dias."
  },
  {
    id: 235,
    topicId: 2,
    question: "Quando um elastómero (como a borracha de um tubo de látex ou o tecido elástico de uma cinta de sustentação) é submetido a um ciclo de carga (estiramento) seguido de descarga (retorno elástico), a curva do ciclo forma uma área fechada. Este fenómeno físico é conhecido como:",
    options: [
      "Histerese elástica, representando a energia mecânica dissipada sob a forma de calor durante o ciclo de deformação.",
      "Sublimação elástica, representando a perda de massa gasosa das macromoléculas.",
      "Isotropia perfeita, indicando que não há qualquer atrito molecular interno.",
      "Rigidez infinita de Young sem dependência térmica."
    ],
    correctIndex: 0,
    explanation: "A histerese mecânica (ou elástica) é a diferença entre a energia despendida para deformar um material elástico durante o carregamento e a energia devolvida por esse material durante a descompressão. A curva de descarga situa-se abaixo da curva de carga no diagrama σ-ε; a área interna deste 'laço de histerese' corresponde rigorosamente à energia dissipada internamente pelo atrito viscoso molecular sob forma de calor.",
    distractorAnalysis: [
      "Opção B confunde transição de fase sólido-gás com resposta mecânica de histerese.",
      "Opção C é incorreta: a presença de histerese comprova a existência de atrito viscoso interno e não-idealidade mecânica.",
      "Opção D contradiz a própria definição de um elastómero altamente deformável e complacente."
    ],
    nursingApplication: "Almofadas e colchões hospitalares 'viscoelásticos' (espumas tipo 'memory foam') baseiam o seu sucesso na elevada histerese: ao absorverem o impacto do peso corporal do doente, dissipam a energia mecânica em calor em vez de a devolverem elasticamente como uma mola de colchão tradicional, amortecendo picos de pressão sobre o sacro e trocânteres."
  },
  {
    id: 236,
    topicId: 2,
    question: "No contexto da rigidez e resistência de agulhas hipodérmicas e cânulas cirúrgicas fabricadas em aço inoxidável austenítico (AISI 304/316), qual das seguintes afirmações sobre a sua secção transversal é cientificamente VERDADEIRA?",
    options: [
      "Quanto maior o diâmetro externo da cânula (menor Gauge na escala Birmingham), maior é a rigidez à flexão da agulha, reduzindo a probabilidade de desvio da trajetória durante punções profundas.",
      "Agulhas finas de 30G possuem muito maior rigidez mecânica à flexão do que agulhas de 18G.",
      "O bisel trifacetado afeta a dureza atómica de todo o corpo cilíndrico do aço inoxidável.",
      "A agulha comporta-se como um fluido de Bingham quando submetida a forças de compressão."
    ],
    correctIndex: 0,
    explanation: "Na escala Birmingham Gauge utilizada internacionalmente em enfermagem e medicina, o calibre é inverso ao diâmetro numérico: agulhas de 18G ou 16G têm grande diâmetro externo (~1,2 a 1,6 mm), enquanto agulhas de 27G ou 30G têm diâmetro minúsculo (~0,3 mm). Como a rigidez à flexão de um tubo cilíndrico depende da quarta potência do diâmetro externo, uma agulha de 18G é dezenas de vezes mais rígida à flexão do que uma agulha fina, não fletindo facilmente ao perfurar tecidos densos.",
    distractorAnalysis: [
      "Opção B é um erro crassíssimo: agulhas de 30G fletem com extrema facilidade devido ao seu diâmetro microscópico.",
      "Opção C é incorreta: a geometria do bisel afeta a capacidade de corte tecidual local, não a dureza intrínseca do metal da haste.",
      "Opção D é um contrassenso: o aço inoxidável é um sólido cristalino elástico-plástico, não um fluido de escoamento."
    ],
    nursingApplication: "Na punção lombar (para colheita de líquor ou anestesia subaracnoideia), utilizam-se agulhas muito finas (25G a 27G) para minimizar a cefaleia pós-punção por perda liquórica. Contudo, devido à sua baixa rigidez à flexão, o enfermeiro que assiste o procedimento sabe que o médico utiliza um introdutor rígido metálico de maior calibre para garantir a trajetória reta inicial sem desvios ou empenamento da agulha fina."
  },
  {
    id: 237,
    topicId: 2,
    question: "Qual das seguintes pinças cirúrgicas hemostáticas frequentemente manipuladas por enfermeiros funciona como uma alavanca de 1.ª classe com sistema de travamento por cremalheira?",
    options: [
      "Pinça de Kocher (ou pinça de Pean/Kelly).",
      "Pinça anatómica de dissecação reta.",
      "Pinça de Adson com dentes de rato.",
      "Pinça de Michel para colocação de agrafos dérmicos."
    ],
    correctIndex: 0,
    explanation: "As pinças hemostáticas de Kocher, Kelly, Pean e Crile possuem duas hastes que se cruzam num parafuso central fixo (fulcro intermediário): as pegas manuais situam-se de um lado e as mandíbulas de apreensão do outro lado. Isto define rigorosamente uma alavanca de 1.ª classe (interfixa). A cremalheira na base das pegas permite travar o sistema mecânico em equilíbrio estático sob tensão elástica constante.",
    distractorAnalysis: [
      "Opção B e C são pinças de dissecção de lâminas flexíveis soldadas na base, sendo alavancas de 3.ª classe.",
      "Opção D possui mecanismo articulado complexo multieixo adaptado para dobrar lâminas de agrafos, não se enquadrando como alavanca simples elementar clássica."
    ],
    nursingApplication: "Ao clampar um dreno ou vaso sangrante com uma pinça de Kocher, a vantagem mecânica da alavanca de 1.ª classe concentra toda a força dos dedos na extremidade das mandíbulas, produzindo tensões compressivas suficientes para ocluir a luz vascular e assegurar hemostase imediata."
  },
  {
    id: 238,
    topicId: 2,
    question: "O silicone de grau medicinal é um dos biomateriais mais empregues em cateteres vesicais de longa duração (Foley) e drenos cirúrgicos. Do ponto de vista mecânico e biológico, qual é a propriedade distintiva do silicone?",
    options: [
      "Baixíssimo Módulo de Young (elevada flexibilidade elástica), excelente biocompatibilidade com os tecidos mucosos e resistência prolongada à incrustação mineral e colonização bacteriana.",
      "Extrema rigidez comparável ao titânio metálico para manter o canal uretral permanentemente dilatado.",
      "Capacidade de endurecer irreversivelmente em contacto com a urina aquosa.",
      "Natureza condutora de eletricidade estática para destruir biofilmes por eletrochoque."
    ],
    correctIndex: 0,
    explanation: "O silicone medicinal (polidimetilsiloxano reticulado) é um elastómero com baixíssimo módulo de elasticidade (~1 a 5 MPa), o que lhe confere maciez e enorme complacência elástica. Isso minimiza o trauma mecânico por atrito e erosão sobre a mucosa da uretra e bexiga. Além disso, a sua hidrofobicidade e superfície lisa reduzem a deposição de cristais de estruvite e hidroxiapatite urinários, sendo indicado para cateterismos de até 12 semanas.",
    distractorAnalysis: [
      "Opção B causaria lacerações e estenoses severas na uretra masculina se fosse rígido como titânio.",
      "Opção C descreveria uma falha gravíssima de material que impediria a remoção do cateter da bexiga.",
      "Opção D é incorreta: o silicone é um excelente isolante elétrico e dielétrico."
    ],
    nursingApplication: "Em doentes que necessitam de algaliação de longa permanência (ex: lesões medulares), o enfermeiro opta por sondas vesicais 100% silicone em detrimento de sondas de látex plastificado, reduzindo a frequência de obstruções mecânicas por incrustação e prevenindo reações anafiláticas ao látex."
  },
  {
    id: 239,
    topicId: 2,
    question: "Quando um enfermeiro utiliza um cortador de gesso mecânico manual (alicate de gesso de Stille) para retirar uma tala imobilizadora endurecida, porque é que este instrumento possui braços tão compridos e lâminas tão curtas?",
    options: [
      "Para maximizar o braço de potência em relação ao braço de resistência (d_P >> d_R), gerando uma grande vantagem mecânica (VM >> 1) que multiplica a força manual aplicada sobre o gesso.",
      "Para permitir que o enfermeiro execute cortes a grande distância sem ver o membro do doente.",
      "Para transformar o alicate numa alavanca de 3.ª classe com ganho de velocidade.",
      "Para diminuir o peso total do instrumento metálico."
    ],
    correctIndex: 0,
    explanation: "O alicate de cortar gesso é uma alavanca de 1.ª classe. A Vantagem Mecânica é dada por VM = d_P / d_R. Ao fabricar o instrumento com cabos muito longos (d_P grande, ex: 30 cm) e mordentes/lâminas muito curtos (d_R pequeno, ex: 3 cm), a vantagem mecânica atinge valores de 10 ou mais. Uma força de aperto manual de 100 N exercida pelo enfermeiro traduz-se numa força cortante de 1000 N nas lâminas, superando facilmente o limite de resistência do gesso.",
    distractorAnalysis: [
      "Opção B seria uma prática perigosa e negligente; a visualização direta é obrigatória para não lacerar a pele do doente.",
      "Opção C confunde as classes; o instrumento é de 1.ª classe e privilegia força, não velocidade.",
      "Opção D é contrária à realidade: cabos longos de aço aumentam a massa total do alicate."
    ],
    nursingApplication: "A aplicação do princípio da alavanca aos instrumentos manuais protege as articulações dos dedos e punhos do enfermeiro contra lesões por esforços repetitivos (LER/DORT), permitindo executar tarefas de grande demanda mecânica com esforço fisiológico controlado."
  },
  {
    id: 240,
    topicId: 2,
    question: "Durante a tração cutânea de Buck no membro inferior de um doente com fratura do colo femoral enquanto aguarda cirurgia, utiliza-se um sistema com corda, roldana (polia fixa) e peso suspenso de 3 kg. Qual é a função biofísica da roldana fixa neste circuito mecânico?",
    options: [
      "Alterar a direção e sentido da força de tração gerada pelo peso suspenso, sem contudo alterar a sua intensidade (módulo da força).",
      "Duplicar a força peso aplicada, funcionando como uma alavanca de 2.ª classe com VM = 2.",
      "Eliminar totalmente a aceleração da gravidade sobre o membro fraturado.",
      "Reduzir o peso do contrapeso suspenso a metade do valor real."
    ],
    correctIndex: 0,
    explanation: "Uma roldana ou polia fixa ideal não confere vantagem mecânica de força (VM = 1): a intensidade da força de tração na corda mantém-se rigorosamente igual à intensidade da força peso do contrapeso (T = P = m · g ≈ 30 N). A sua função biomecânica exclusiva é redirecionar o vetor força: a gravidade puxa o contrapeso verticalmente para baixo, e a roldana desvia a corda para tracionar o membro horizontalmente ao longo do eixo diafisário do fémur.",
    distractorAnalysis: [
      "Opção B confunde roldana fixa com roldana móvel (que é a que divide a carga e confere VM = 2).",
      "Opção C é um absurdo físico; nenhuma polia elimina o campo gravitacional terrestre.",
      "Opção D confunde mais uma vez com sistemas de talha de polias móveis."
    ],
    nursingApplication: "Na vigilância de enfermagem à tração de Buck, é vital garantir que o peso permaneça livremente suspenso no ar e que a corda deslize suavemente no sulco da roldana. Se o peso assentar no chão ou se a corda saltar da roldana, o atrito excessivo anula a tração longitudinal, originando contração espástica do fémur e dor intensa no doente."
  },
  {
    id: 241,
    topicId: 2,
    question: "O Módulo de Elasticidade Volumétrico (Bulk Modulus, K) é a grandeza mecânica que relaciona a variação de pressão hidrostática exercida sobre um corpo com a sua variação fracionária de volume. Em relação aos tecidos moles do corpo humano (músculos, vísceras e sangue) compostos maioritariamente por água líquida, o que se pode afirmar?",
    options: [
      "Apresentam elevadíssimo Módulo Volumétrico (K ≈ 2,2 GPa), comportando-se como corpos praticamente incompressíveis quando submetidos a variações de pressão isotrópica.",
      "Apresentam Módulo Volumétrico nulo, comprimindo-se instantaneamente até a 1% do seu volume inicial com a pressão atmosférica.",
      "São muito mais compressíveis do que os gases contidos nos alvéolos pulmonares.",
      "O seu volume duplica automaticamente sempre que a pressão hidrostática aumenta."
    ],
    correctIndex: 0,
    explanation: "A água líquida e os tecidos moles biológicos com alto teor hídrico têm um Módulo de Compressibilidade Volumétrica (K) extremamente alto (cerca de 2,2 × 10⁹ Pa = 2,2 GPa). Isto significa que são praticamente incompressíveis: para reduzir o volume em apenas 1%, seria necessária uma pressão colossal de centenas de atmosferas. Os gases pulmonares e intestinais, em contrapartida, são altamente compressíveis.",
    distractorAnalysis: [
      "Opção B violaria as leis elementares da densidade da matéria líquida e dos tecidos vivos.",
      "Opção C inverte a realidade física: os gases são ordens de magnitude mais compressíveis do que os líquidos teciduais.",
      "Opção D descreveria uma expansão paradoxal sob compressão, violando a termodinâmica."
    ],
    nursingApplication: "Esta incompressibilidade volumar dos tecidos líquidos explica a transmissão fiel e instantânea de ondas de pressão hidrostática no sistema vascular (onda de pulso arterial) e em compartimentos fechados (pressão intracraniana). Quando o enfermeiro monitoriza a PIC, qualquer acréscimo de volume dentro da calote craniana rígida faz a pressão disparar (Doutrina de Monro-Kellie)."
  },
  {
    id: 242,
    topicId: 2,
    question: "Num sistema de alavanca anatómico em equilíbrio, quando o braço de resistência (d_R) aumenta mantendo-se a carga resistente constante, o que acontece à força muscular motora (F_P) que o músculo necessita de exercer?",
    options: [
      "A força muscular F_P tem de aumentar na mesma proporção para restabelecer a igualdade de momentos (τ_P = τ_R).",
      "A força muscular necessária diminui drasticamente, tornando o movimento mais fácil.",
      "A força muscular permanece rigorosamente constante, pois independe da distância geométrica.",
      "O momento resistente torna-se zero devido à conservação do momento angular."
    ],
    correctIndex: 0,
    explanation: "Pela condição de equilíbrio de rotação: F_P · d_P = F_R · d_R => F_P = (F_R · d_R) / d_P. Se o braço de resistência d_R aumentar (por exemplo, ao segurar um objeto com o braço estendido em vez de junto ao corpo) mantendo F_R e d_P fixos, o momento resistente (F_R · d_R) cresce diretamente. O músculo é obrigado a aumentar proporcionalmente a sua força F_P para não deixar cair o segmento.",
    distractorAnalysis: [
      "Opção B é um erro fatal de mecânica; afastar a carga aumenta o esforço, nunca o reduz.",
      "Opção C ignora o conceito fundamental de braço de alavanca no cálculo do momento de força.",
      "Opção D confunde aumento de braço com anulação de momento."
    ],
    nursingApplication: "Este princípio é o esteio da segurança postural: ao segurar num membro de um doente pesado, quanto mais perto do corpo do enfermeiro o membro estiver assente, menor será o braço de resistência e menor o esforço muscular exigido aos membros superiores do profissional."
  },
  {
    id: 243,
    topicId: 2,
    question: "O Módulo de Cisalhamento (ou módulo de rigidez transversal, G) relaciona a tensão de corte com a deformação angular correspondente. Nos discos intervertebrais da coluna vertebral, qual é a estrutura fibrosa elástica que resiste predominantemente a estas tensões de cisalhamento e torção?",
    options: [
      "O anel fibroso (anulus fibrosus), composto por lamelas concêntricas de fibras colagénicas orientadas obliquamente em sentidos alternados a cerca de 60°.",
      "O núcleo pulposo líquido desprovido de qualquer fibra estrutural.",
      "A medula espinhal que corre no interior do canal vertebral.",
      "O líquido cefalorraquidiano que banha a cauda equina."
    ],
    correctIndex: 0,
    explanation: "O anel fibroso do disco intervertebral é uma obra-prima de engenharia tecidual: é constituído por 15 a 25 lâminas concêntricas de fibras de colagénio tipo I e II. As fibras de cada lâmina estão dispostas obliquamente a cerca de 60° em relação à vertical, e a orientação inverte-se na lâmina seguinte. Esta disposição em 'rede cruzada' confere elevadíssimo módulo de cisalhamento e rigidez contra forças de torção e corte lateral durante os movimentos do tronco.",
    distractorAnalysis: [
      "Opção B descreve o núcleo pulposo, que atua como uma almofada hidrostática incompressível (resistindo à compressão vertical, mas incapaz de resistir ao cisalhamento isolado).",
      "Opção C e D são estruturas nervosas e fluidas de condução neural e proteção hidrodinâmica, sem função mecânica de absorção de cisalhamento do disco."
    ],
    nursingApplication: "A alternância angular das fibras do anel fibroso suporta bem a flexão isolada, mas fica extremamente vulnerável quando a flexão lombar é combinada com rotação axial (torção). Essa combinação cria tensões de cisalhamento máximas que podem rasgar as fibras anulares, provocando a extrusão do núcleo pulposo (hérnia discal lombar)."
  },
  {
    id: 244,
    topicId: 2,
    question: "Na utilização de seringas descartáveis para administração medicamentosa, qual é a relação física entre a área do êmbolo e a força mecânica manual exigida para gerar uma determinada pressão no líquido?",
    options: [
      "Pela definição P = F / A, para uma mesma pressão pretendida P, uma seringa de maior secção transversal (ex: 50 mL) exige uma força manual F muito maior do que uma seringa fina (ex: 1 mL).",
      "Uma seringa de 50 mL exige sempre menor força manual do que uma seringa de 1 mL para gerar a mesma pressão.",
      "A pressão exercida no fluido independe da área do êmbolo e depende exclusivamente da cor do plástico.",
      "A força exigida é inversamente proporcional à área do êmbolo ao quadrado."
    ],
    correctIndex: 0,
    explanation: "A pressão hidrostática é dada por P = F / A => F = P · A. Para gerar a mesma pressão no líquido (por exemplo, 100 kPa para vencer a resistência de uma cânula estenosada), quanto maior for a área A do êmbolo da seringa, maior será a força muscular manual F necessária. Pelo mesmo motivo, com uma seringa de insulina fina de 1 mL (pequeníssima área A), uma força manual modesta de 10 N gera uma pressão colossal no interior do cilindro.",
    distractorAnalysis: [
      "Opção B inverte a relação matemática fundamental F = P · A.",
      "Opção C ignora o Princípio de Pascal e a definição de pressão mecânica.",
      "Opção D inventa uma dependência quadrática incorreta."
    ],
    nursingApplication: "Na desobstrução de cateteres venosos centrais (PICC ou cateter totalmente implantado / Port-a-Cath), NUNCA se deve utilizar seringas de pequeno calibre (como 1 mL ou 3 mL). A pequeníssima área do êmbolo gera pressões hidrostáticas brutais (acima de 200 psi) com facilidade na mão do enfermeiro, que podem romper o cateter no interior da veia do doente. As normas de enfermagem exigem o uso exclusivo de seringas de 10 mL ou superior."
  },
  {
    id: 245,
    topicId: 2,
    question: "O tecido ósseo é classicamente descrito em biomecânica como um material 'Anisótropo'. O que significa esta propriedade mecânica fundamental?",
    options: [
      "Que as suas propriedades mecânicas (como o Módulo de Young e a resistência à rotura) variam conforme a direção da força aplicada (longitudinal vs transversal).",
      "Que o osso tem rigorosamente o mesmo comportamento e rigidez em todas as direções espaciais possíveis.",
      "Que o osso é totalmente incapaz de sofrer remodelação celular na presença de carga.",
      "Que o osso se deforma unicamente na presença de campos magnéticos estáticos."
    ],
    correctIndex: 0,
    explanation: "Um material isotrópico possui propriedades mecânicas idênticas em qualquer direção (como o vidro ou o aço sem grão). O osso, contudo, é ANISÓTROPO: a orientação longitudinal dos ósteons e das fibras de colagénio confere-lhe um Módulo de Young e uma tensão de rotura muito maiores no sentido longitudinal (ao longo da diáfise, onde E ≈ 18 GPa) do que no sentido transversal/perpendicular (onde E ≈ 10 GPa).",
    distractorAnalysis: [
      "Opção B descreve a isotropia mecânica pura.",
      "Opção C confunde anisotropia elástica com ausência de biologia celular e Lei de Wolff.",
      "Opção D confunde mecânica de materiais com diamagnetismo."
    ],
    nursingApplication: "A anisotropia do osso explica por que o fémur suporta cargas imensas na vertical durante a corrida, mas quebra facilmente com impactos transversais perpendiculares (por exemplo, na batida lateral da anca contra o chão numa queda ou no painel de um automóvel num acidente de trânsito)."
  },
  {
    id: 246,
    topicId: 2,
    question: "Um dreno cirúrgico com reservatório de vácuo tipo Jackson-Pratt ou Redon aproveita as propriedades elásticas de que componente para gerar pressão negativa e aspirar exsudados?",
    options: [
      "Da parede de silicone ou polietileno do bulbo/fole que, após ser manualmente comprimida (deformação plástica/elástica) e fechada, tenta recuperar a sua forma esférica inicial por memória elástica, gerando subpressão interna contínua.",
      "De um motor elétrico a bateria miniaturizado acoplado ao tubo.",
      "De uma reação química endotérmica que queima o ar dentro do frasco.",
      "Da força gravitacional exercida exclusivamente pela posição dos pés do doente."
    ],
    correctIndex: 0,
    explanation: "O dreno de vácuo ativo tipo bulbo (Jackson-Pratt) ou fole (Redon) utiliza a elasticidade intrínseca do polímero: o enfermeiro comprime manualmente o reservatório esvaziando o ar e coloca a tampa de vedação. A energia de deformação elástica armazenada na parede tenta forçar a expansão do bulbo de volta ao seu volume de repouso; como está vedado, essa tendência expansiva cria uma pressão interna inferior à atmosférica (vácuo parcial de -50 a -150 mmHg), aspirando fluidos do leito cirúrgico.",
    distractorAnalysis: [
      "Opção B é incorreta; estes sistemas clássicos de drenagem cirúrgica pós-operatória são mecânicos passivos sem motores elétricos.",
      "Opção C é falsa; nenhuma combustão ou reação química exotérmica/endotérmica ocorre no frasco.",
      "Opção D descreve a drenagem postural gravitacional simples (como os drenos de Penrose ou sacos coletores por gravidade), não a aspiração ativa por vácuo elástico."
    ],
    nursingApplication: "Na manutenção de drenos cirúrgicos após mastectomias ou cirurgias ortopédicas, o enfermeiro deve esvaziar regularmente o exsudado acumulado e voltar a comprimir o bulbo antes de fechar o tampão. Se o bulbo ficar cheio de ar ou líquido, a parede elástica atinge a sua forma de repouso, cessando a sucção e favorecendo a formação de seromas e hematomas na ferida."
  },
  {
    id: 247,
    topicId: 2,
    question: "Qual das seguintes relações mecânicas quantifica a Vantagem Mecânica (VM) em qualquer alavanca em estado de equilíbrio estático sem atrito?",
    options: [
      "VM = F_R / F_P = d_P / d_R",
      "VM = F_P · F_R · d_P · d_R",
      "VM = d_R / (F_P · g)",
      "VM = (F_P - F_R) / (d_P + d_R)"
    ],
    correctIndex: 0,
    explanation: "Por definição, a vantagem mecânica real é a razão entre a carga resistente superada e a força motora aplicada: VM = F_R / F_P. No equilíbrio de momentos (F_P · d_P = F_R · d_R), dividindo ambos os lados por F_P e por d_R, obtém-se rigorosamente a igualdade com a vantagem mecânica ideal baseada na geometria: VM = d_P / d_R.",
    distractorAnalysis: [
      "Opção B multiplica grandezas arbitrariamente, gerando unidades inconsistentes de N²·m².",
      "Opção C mistura comprimentos e forças no denominador sem fundamentação dimensional.",
      "Opção D propõe uma diferença de forças dividida por soma de distâncias sem sentido físico."
    ],
    nursingApplication: "Esta fórmula permite ao enfermeiro avaliar rapidamente a eficiência de ferramentas manuais ou compreender por que aproximar o doente do seu próprio tronco reduz o braço de resistência d_R, diminuindo a força F_P exigida da musculatura do profissional para manter o membro em equilíbrio."
  },
  {
    id: 248,
    topicId: 2,
    question: "O conceito de 'Limite de Proporcionalidade' na curva de tração de um material refere-se ao ponto exato:",
    options: [
      "Até ao qual a tensão mecânica é rigorosamente linear e diretamente proporcional à deformação relativa, cessando a validade estrita da Lei de Hooke para além dele.",
      "Onde o material se funde e passa do estado sólido ao estado gasoso.",
      "Onde a deformação plástica atinge 100% do volume original.",
      "Onde a densidade do material duplica devido ao atrito quântico."
    ],
    correctIndex: 0,
    explanation: "Na curva tensão-deformação, a primeira região é uma linha reta perfeita que parte da origem. O ponto mais alto dessa reta é o Limite de Proporcionalidade: até aí, a Lei de Hooke (σ = E · ε) aplica-se com precisão matemática absoluta. Imediatamente acima deste ponto, a curva pode ainda apresentar comportamento elástico reversível por um pequeno intervalo (até ao limite de elasticidade), mas a relação deixa de ser estritamente linear.",
    distractorAnalysis: [
      "Opção B confunde mecânica dos sólidos com transições térmicas de estado físico.",
      "Opção C é absurda, pois 100% de deformação plástica só ocorre em polímeros de altíssima ductilidade próximo da rotura.",
      "Opção D inventa conceitos quânticos desprovidos de base física no ensaio de tração."
    ],
    nursingApplication: "Em aparelhos de tracção ou balanças mecânicas pediátricas de mola, a mola interna deve operar sempre estritamente abaixo do seu limite de proporcionalidade. Se uma sobrecarga pontual ultrapassar esse patamar, a calibração do instrumento fica irremediavelmente viciada, conduzindo a erros de pesagem de doentes."
  },
  {
    id: 249,
    topicId: 2,
    question: "Nas talas de imobilização ortopédica de fibra de vidro (resinas de poliuretano impregnadas em malha tricotada), o que ocorre durante o processo de presa que altera radicalmente o seu Módulo de Young?",
    options: [
      "Ocorre uma reação química exotérmica de polimerização que reticula as cadeias poliméricas na presença de água, elevando o Módulo de Young de valores muito baixos (tecido maleável) para valores de vários GPa (sólido extremamente rígido).",
      "Ocorre evaporação total de todos os átomos de oxigénio da matriz de carbono.",
      "A fita transforma-se num fluido hiperbárico incompressível.",
      "O material torna-se magnético e atrai a hemoglobina do sangue da fratura."
    ],
    correctIndex: 0,
    explanation: "A fita de fibra de vidro para gesso ortopédico vem embalada a vácuo em estado complacente e maleável (baixo módulo elástico). Ao ser mergulhada em água, a humidade catalisa uma polimerização exotérmica das resinas de poliuretano que une quimicamente as fibras de vidro numa malha tridimensional sólida e rígida. Em cerca de 3 a 5 minutos, o Módulo de Young atinge a rigidez final, garantindo a imobilização anatómica da articulação.",
    distractorAnalysis: [
      "Opção B é fisicamente impossível sob condições de temperatura e pressão ambientes de uma enfermaria.",
      "Opção C confunde um polímero rígido consolidado com fluidos sob pressão.",
      "Opção D é uma afirmação fantasiosa sem qualquer base fisiológica ou biofísica."
    ],
    nursingApplication: "O enfermeiro que aplica ou auxilia na confeção de talas sintéticas de fibra de vidro sabe que deve modelar a tala rigorosamente antes de a reação de polimerização endurecer o material. Além disso, devido ao caráter exotérmico da reação que liberta calor sensível, a água de imersão não deve ser excessivamente quente para evitar queimaduras térmicas na pele do doente."
  },
  {
    id: 250,
    topicId: 2,
    question: "Um carrinho de emergência médica (carrinho de paragem) com massa de 80 kg está parado num piso horizontal. Sabendo que o coeficiente de atrito estático entre as rodas e o piso é μ_e = 0,25, qual é a força horizontal mínima F que o enfermeiro tem de aplicar para iniciar o movimento do carrinho (adotando g = 9,8 m/s²)?",
    options: [
      "196 N",
      "80 N",
      "20 N",
      "784 N"
    ],
    correctIndex: 0,
    explanation: "A força de atrito estático máxima que impede o início do movimento é dada por F_atrito = μ_e · N. Como o piso é horizontal e não há outras forças verticais, a força normal é igual ao peso: N = P = m · g = 80 kg × 9,8 m/s² = 784 N. Calculando a força mínima para romper o atrito: F = 0,25 × 784 N = 196 N (aproximadamente o esforço muscular de sustentar 20 kg no ar).",
    distractorAnalysis: [
      "Opção B (80 N) confunde a massa em kg com o valor da força em Newtons.",
      "Opção C (20 N) multiplica erroneamente o coeficiente de atrito pela massa sem incluir a aceleração da gravidade (0,25 × 80).",
      "Opção D (784 N) é o peso vertical total do carrinho, e não a força de atrito horizontal a ser superada."
    ],
    nursingApplication: "Em situações de paragem cardiorrespiratória (PCR), cada segundo conta. Se as rodas do carrinho de paragem estiverem travadas ou se o diâmetro das rodas for demasiado pequeno (elevado atrito ao rolamento e irregularidades no solo), a força exigida do enfermeiro para acelerar o equipamento pode atrasar o transporte do desfibrilhador até ao leito do doente."
  }
];
