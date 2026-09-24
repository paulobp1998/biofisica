// Tópico 2: Alavancas, Elasticidade dos Corpos e Resistência dos Materiais
const TOPIC_2_QUESTIONS = [
  {
    "id": 2001,
    "topicId": 2,
    "question": "O momento de uma força (torque, τ) mede a capacidade de uma força produzir rotação de um corpo em torno de um eixo fixo ou fulcro. Matematicamente, como se expressa o módulo do momento de uma força?",
    "options": [
      "τ = F · d · sen(θ), onde F é o módulo da força, d a distância ao eixo e θ o ângulo entre a linha de ação da força e o braço de alavanca.",
      "τ = F / d, onde a força é inversamente proporcional à distância perpendicular ao fulcro.",
      "τ = m · g · d², sendo diretamente proporcional ao quadrado da distância ao fulcro.",
      "τ = F · a · cos(θ), onde a é a aceleração linear transmitida ao corpo."
    ],
    "correctIndex": 0,
    "explanation": "O momento de uma força (ou torque) é uma grandeza vetorial cujo módulo é dado por τ = F · d · sen(θ) (ou τ = F · b, onde b = d · sen(θ) é o braço de alavanca, ou seja, a distância perpendicular do eixo de rotação à linha de ação da força). A sua unidade no Sistema Internacional é o Newton-metro (N·m).",
    "distractorAnalysis": [
      "Está incorreta: confunde momento com a fórmula da pressão ou gradiente de força; dividir força pela distância não tem significado físico de torque.",
      "Está incorreta: introduz incorretamente uma dependência quadrática na distância (d²), o que violaria a linearidade do momento.",
      "Está incorreta: utiliza incorretamente a aceleração e a função cosseno, quando o torque é maximizado quando a força é perpendicular (θ = 90°, sen(90°) = 1)."
    ],
    "nursingApplication": "Na manipulação de manivelas de camas articuladas manuais, válvulas de garrafas de oxigénio medicinal ou chaves de rodas de macas, aplicar a força perpendicularmente à haste e na sua extremidade mais distante do fulcro maximiza o braço de alavanca, reduzindo drasticamente o esforço muscular exigido do enfermeiro."
  },
  {
    "id": 2002,
    "topicId": 2,
    "question": "Para que um corpo extenso se encontre em equilíbrio estático absoluto (sem translação nem rotação), quais são as duas condições mecânicas fundamentais que devem ser simultaneamente satisfeitas?",
    "options": [
      "A resultante das forças externas deve ser nula (∑F = 0) e a soma vetorial de todos os momentos de força em relação a qualquer ponto deve ser nula (∑τ = 0).",
      "A velocidade linear do corpo deve ser constante e positiva, independentemente da soma dos momentos.",
      "Apenas a resultante das forças deve ser nula (∑F = 0), pois a ausência de translação garante automaticamente a ausência de rotação.",
      "A aceleração angular deve ser constante e diferente de zero para compensar a gravidade."
    ],
    "correctIndex": 0,
    "explanation": "O equilíbrio estático de um corpo rígido exige duas condições independentes: 1) Equilíbrio translacional: a soma vetorial de todas as forças externas deve ser zero (∑F = 0), garantindo aceleração linear nula (a = 0); 2) Equilíbrio rotacional: a soma vetorial dos momentos de força em relação a qualquer eixo de rotação deve ser zero (∑τ = 0), garantindo aceleração angular nula (α = 0).",
    "distractorAnalysis": [
      "Está incorreta: descreve um movimento retilíneo uniforme ou equilíbrio dinâmico, mas ignora o requisito estático e a condição de momentos nulos.",
      "Está incorreta porque um par de forças de igual intensidade e sentidos opostos (binário) tem resultante de forças nula, mas produz rotação pura (torque não-nulo).",
      "Está incorreta: indica aceleração angular não-nula, o que causaria rotação acelerada contínua, impossibilitando o equilíbrio estático."
    ],
    "nursingApplication": "Na montagem de sistemas de tração ortopédica contínua (como a tração esquelética de Thomas ou de Russell num doente com fratura de fémur), o alinhamento dos cabos, polias e contrapesos tem de assegurar simultaneamente ∑F = 0 e ∑τ = 0 no membro, impedindo rotações indesejadas do foco de fratura."
  },
  {
    "id": 2003,
    "topicId": 2,
    "question": "A Vantagem Mecânica (VM) de um sistema de alavancas é definida teoricamente como a razão entre:",
    "options": [
      "A força de resistência superada e a força de potência aplicada (VM = F_R / F_P), que no equilíbrio ideal é igual à razão entre o braço de potência e o braço de resistência (d_P / d_R).",
      "A potência metabólica consumida pelo músculo e o peso do segmento corporal mobilizado.",
      "O braço de resistência dividido pelo braço de potência (VM = d_R / d_P).",
      "A aceleração desenvolvida pela carga e a aceleração gravitacional terrestre."
    ],
    "correctIndex": 0,
    "explanation": "A Vantagem Mecânica (VM) expressa a amplificação da força num sistema mecânico: VM = F_R / F_P. Pelo princípio dos momentos no equilíbrio (F_P · d_P = F_R · d_R), tem-se idealmente VM = d_P / d_R. Se VM > 1, o sistema poupa força (exige menos força motora do que a carga); se VM < 1, o sistema perde em força mas ganha proporcionalmente em velocidade e amplitude de movimento.",
    "distractorAnalysis": [
      "Está incorreta: confunde vantagem mecânica com rendimento metabólico muscular.",
      "Está incorreta: inverte a fração geométrica; d_R / d_P corresponderia ao inverso da vantagem mecânica.",
      "Está incorreta: inventa uma relação entre acelerações sem qualquer fundamento físico no estudo de alavancas estáticas."
    ],
    "nursingApplication": "Compreender a vantagem mecânica permite ao enfermeiro escolher o instrumento clínico adequado: um cortador de gesso ou alicate cirúrgico com cabos compridos e mandíbulas curtas (d_P >> d_R) proporciona VM >> 1, permitindo cortar materiais duros com modesta força manual."
  },
  {
    "id": 2004,
    "topicId": 2,
    "question": "Numa alavanca de 1.ª classe (interfixa), qual é a disposição geométrica relativa entre o ponto de apoio (fulcro), o ponto de aplicação da potência (força motora) e a resistência (carga)?",
    "options": [
      "O ponto de apoio (fulcro) localiza-se entre o ponto de aplicação da potência e o da resistência.",
      "A resistência situa-se obrigatoriamente entre o ponto de apoio e a potência.",
      "A potência situa-se obrigatoriamente entre o ponto de apoio e a resistência.",
      "O ponto de apoio coincide exatamente com o centro de massa da carga, sem necessidade de potência."
    ],
    "correctIndex": 0,
    "explanation": "Uma alavanca de 1.ª classe (ou interfixa) caracteriza-se por ter o ponto de apoio (fulcro) situado entre a força de potência e a força de resistência (P - F - R). Dependendo da posição do fulcro, a vantagem mecânica pode ser maior, igual ou menor do que 1.",
    "distractorAnalysis": [
      "Está incorreta: descreve uma alavanca de 2.ª classe (inter-resistente).",
      "Está incorreta: descreve uma alavanca de 3.ª classe (interpotente).",
      "Está incorreta: é um absurdo físico, pois qualquer alavanca em equilíbrio requer forças motora e resistente para estabelecer equilíbrio de momentos."
    ],
    "nursingApplication": "Instrumentos de uso frequente em enfermagem como tesouras de sutura, pinças hemostáticas (tipo Kocher ou Kelly) e corta-unhas são alavancas de 1.ª classe: o parafuso central funciona como fulcro, as mãos do enfermeiro aplicam a potência nos anéis, e o tecido ou fio exerce a resistência nas lâminas/pontas."
  },
  {
    "id": 2005,
    "topicId": 2,
    "question": "Qual das seguintes articulações do corpo humano funciona anatomicamente como uma alavanca de 1.ª classe (interfixa)?",
    "options": [
      "A articulação atlanto-occipital (entre o crânio e a coluna cervical), equilibrada pelos músculos extensores da nuca contra o peso anterior da cabeça.",
      "A articulação do cotovelo durante a flexão do antebraço executada pelo músculo bicípite braquial.",
      "A articulação talocrural (tornozelo) durante a elevação do corpo sobre a ponta dos pés pelo tríceps sural.",
      "A articulação temporomandibular durante o encerramento forçado da mandíbula pelo músculo masséter."
    ],
    "correctIndex": 0,
    "explanation": "A articulação atlanto-occipital é o exemplo clássico de alavanca interfixa (1.ª classe) no corpo humano: o fulcro é a articulação entre os côndilos occipitais e o atlas; a resistência é o peso da porção anterior da cabeça e face (cujo centro de massa se situa à frente da articulação); a potência é a força de tração exercida pelos músculos posteriores do pescoço (esplénio da cabeça, trapézio, semiespinhoso) inseridos no occipital.",
    "distractorAnalysis": [
      "Está incorreta: descreve uma alavanca de 3.ª classe (o bicípite insere-se entre o cotovelo e a mão).",
      "Está incorreta: descreve uma alavanca de 2.ª classe (a resistência do peso corporal cai entre as cabeças dos metatarsos e o tendão de Aquiles).",
      "Está incorreta: funciona mecanicamente como uma alavanca de 3.ª classe modificada (o masséter insere-se à frente do côndilo mandibular e atrás dos dentes incisivos/molares anteriores)."
    ],
    "nursingApplication": "Quando um doente em coma, anestesiado ou com sedação profunda perde o tónus muscular, os músculos da nuca deixam de exercer potência. A alavanca de 1.ª classe desequilibra-se: a cabeça cai para a frente em flexão cervical, o que provoca a queda posterior da base da língua e oclusão das vias aéreas. O enfermeiro previne a asfixia posicionando a cabeça em extensão moderada ('head tilt-chin lift')."
  },
  {
    "id": 2006,
    "topicId": 2,
    "question": "Numa alavanca de 2.ª classe (inter-resistente), a resistência localiza-se entre o ponto de apoio (fulcro) e o ponto de aplicação da potência. Qual é a consequência biofísica obrigatória desta geometria quanto à vantagem mecânica?",
    "options": [
      "A vantagem mecânica é sempre estritamente superior a 1 (VM > 1), porque o braço de potência é sempre maior do que o braço de resistência (d_P > d_R).",
      "A vantagem mecânica é sempre estritamente inferior a 1 (VM < 1), exigindo mais força do que a resistência.",
      "A vantagem mecânica é exatamente igual a 1 em todas as circunstâncias anatómicas.",
      "A vantagem mecânica é nula porque a força resultante dissipa-se sob forma de calor no fulcro."
    ],
    "correctIndex": 0,
    "explanation": "Numa alavanca inter-resistente (2.ª classe), como a resistência está situada entre o fulcro e a potência, o braço de potência (d_P, distância do fulcro até à potência) é obrigatoriamente superior ao braço de resistência (d_R). Como VM = d_P / d_R, a vantagem mecânica é SEMPRE maior que 1. Isto confere uma enorme multiplicação de força motora.",
    "distractorAnalysis": [
      "Está incorreta: descreve a característica incontornável das alavancas de 3.ª classe (onde d_P < d_R).",
      "Está incorreta: só ocorreria se a potência e a resistência coincidissem no mesmo ponto sobre a alavanca.",
      "Está incorreta: viola o princípio de conservação de energia e a definição elementar de vantagem mecânica."
    ],
    "nursingApplication": "O conhecimento da alavanca de 2.ª classe é a base do funcionamento dos carrinhos manuais de transporte de cilindros de gases medicinais (O₂, N₂O): o fulcro são as rodas no solo, o pesado cilindro de aço constitui a resistência no centro, e o enfermeiro puxa os punhos compridos na extremidade superior (d_P >> d_R), mobilizando cargas de mais de 70 kg com reduzido esforço físico."
  },
  {
    "id": 2007,
    "topicId": 2,
    "question": "O movimento de elevar o corpo sobre a ponta dos pés (flexão plantar na articulação do tornozelo) é amplamente citado em biomecânica como um exemplo anatómico de alavanca de que tipo?",
    "options": [
      "Alavanca de 2.ª classe (inter-resistente), onde o apoio está nas cabeças dos metatarsos, a resistência é o peso corporal transmitido pela tíbia, e a potência é exercida pelo tendão de Aquiles.",
      "Alavanca de 1.ª classe (interfixa), onde a tíbia atua como eixo de rotação intermediário.",
      "Alavanca de 3.ª classe (interpotente), onde o músculo tibial anterior puxa o pé para cima.",
      "Sistema sem alavanca mecânica, tratando-se de tração elástica pura sem rotação articular."
    ],
    "correctIndex": 0,
    "explanation": "Na elevação na ponta dos pés: o ponto de apoio (fulcro) situa-se nas articulações metatarsofalângicas em contacto com o chão; a resistência é a força normal/peso do corpo transmitida através da articulação talocrural (tíbia); a potência é a força de tração exercida pelo músculo tríceps sural (gémeos e sóleo) inserido posteriormente na tuberosidade do calcâneo através do tendão de Aquiles. Como a resistência está no meio, trata-se de uma alavanca de 2.ª classe com VM > 1.",
    "distractorAnalysis": [
      "Está incorreta: confunde a localização da tíbia com um fulcro fixo; no movimento de pontas dos pés o fulcro real com o solo está na base dos dedos.",
      "Está incorreta: refere o músculo tibial anterior, que é extensor/dorsiflexor do pé (não atua na elevação na ponta dos pés) e organiza uma alavanca de 3.ª classe para dorsiflexão.",
      "Está incorreta: ignora a cinemática e estática articular do tornozelo, que é um sistema mecânico articulado clássico."
    ],
    "nursingApplication": "A enorme vantagem mecânica da alavanca de 2.ª classe no tornozelo permite que os músculos da barriga da perna suportem repetidamente todo o peso do indivíduo. Na reabilitação e marcha de doentes após imobilização prolongada ou AVC, fraquezas no tríceps sural impedem a impulsão da marcha, exigindo assistência de enfermagem na transferência e deambulação."
  },
  {
    "id": 2008,
    "topicId": 2,
    "question": "Numa alavanca de 3.ª classe (interpotente), qual é a posição relativa dos seus componentes e qual é a sua principal característica biomecânica?",
    "options": [
      "A potência localiza-se entre o fulcro e a resistência; apresenta sempre desvantagem de força (VM < 1), mas proporciona grande ganho em amplitude de movimento e velocidade.",
      "A resistência localiza-se entre o fulcro e a potência; apresenta sempre ganho de força (VM > 1).",
      "O fulcro localiza-se no centro; permite unicamente a inversão do sentido da força aplicada com VM = 1.",
      "A potência e o fulcro coincidem no mesmo ponto anatómico, eliminando qualquer momento torsor."
    ],
    "correctIndex": 0,
    "explanation": "Numa alavanca de 3.ª classe (interpotente), a força de potência muscular é aplicada entre o eixo articular (fulcro) e a carga a mobilizar (resistência). Como o braço de potência é menor que o braço de resistência (d_P < d_R), a vantagem mecânica é SEMPRE inferior a 1 (VM < 1). O músculo é forçado a desenvolver uma força muito superior ao peso do objeto, mas em contrapartida um pequeno encurtamento muscular produz um deslocamento amplo e veloz da extremidade distal do membro.",
    "distractorAnalysis": [
      "Está incorreta: é a descrição de uma alavanca de 2.ª classe.",
      "Está incorreta: refere-se exclusivamente a uma alavanca de 1.ª classe simétrica.",
      "Está incorreta: é anatomicamente impossível, pois uma inserção tendinosa não coincide com o centro de rotação da cartilagem articular."
    ],
    "nursingApplication": "A vasta maioria das alavancas esqueléticas humanas são de 3.ª classe. Isso explica por que o corpo humano é uma 'máquina' concebida para velocidade e alcance espacial, e não para suportar forças brutas. Em enfermagem, ao sustentar um membro edemaciado ou gessado de um doente longe do cotovelo, o esforço muscular do enfermeiro aumenta drasticamente."
  },
  {
    "id": 2009,
    "topicId": 2,
    "question": "A flexão do antebraço sobre o braço pela contração do músculo bicípite braquial constitui o exemplo paradigmático de:",
    "options": [
      "Alavanca de 3.ª classe (interpotente), onde o fulcro é o cotovelo, a potência é a inserção do tendão na tuberosidade do rádio e a resistência é o peso do antebraço e mão.",
      "Alavanca de 2.ª classe (inter-resistente), onde o peso do antebraço é superado por apoio na mão.",
      "Alavanca de 1.ª classe (interfixa), onde o cotovelo está localizado entre a mão e o ombro.",
      "Polia fixa pura, sem braço de momento mecânico mensurável."
    ],
    "correctIndex": 0,
    "explanation": "Na flexão do cotovelo pelo bicípite braquial: o fulcro é a articulação úmero-ulnar/radial (cotovelo); a força de potência é aplicada na tuberosidade bicipital do rádio (cerca de 3 a 5 cm distal ao cotovelo); a resistência é o peso do antebraço e do objeto seguro na mão (distante cerca de 30 a 35 cm do cotovelo). Como a potência está no meio (entre o fulcro e a carga), é uma alavanca de 3.ª classe.",
    "distractorAnalysis": [
      "Está incorreta: inverte a posição da potência e da resistência.",
      "Está incorreta: erradamente assume que a alavanca do cotovelo é interfixa (o fulcro não está no meio da haste antebraquial, mas na sua extremidade proximal).",
      "Está incorreta: ignora a anatomia do sistema musculoesquelético que opera por rotação de segmentos ósseos rígidos."
    ],
    "nursingApplication": "Devido a esta configuração de 3.ª classe, para segurar um peso de apenas 5 kg na mão, o bicípite tem de exercer uma força interna de tração de cerca de 40 a 50 kgf (400 a 500 N). Isso elucida porque esforços sustentados ao posicionar doentes geram rápida fadiga muscular nos membros superiores da equipa de enfermagem."
  },
  {
    "id": 2010,
    "topicId": 2,
    "question": "Um doente sustenta na mão uma esfera de 4 kg (peso resistente ≈ 40 N) a uma distância horizontal de 35 cm da articulação do cotovelo. Sabendo que o tendão do bicípite braquial se insere a 5 cm do cotovelo, qual é a força muscular mínima F_P que o bicípite tem de desenvolver para manter o antebraço na horizontal (desprezando o peso do antebraço)?",
    "options": [
      "280 N",
      "40 N",
      "5,7 N",
      "1400 N"
    ],
    "correctIndex": 0,
    "explanation": "Aplicando a condição de equilíbrio rotacional (∑τ = 0) em relação ao cotovelo (fulcro): F_P · d_P = F_R · d_R. Substituindo os valores dados: F_P · (5 cm) = (40 N) · (35 cm) => F_P = (40 × 35) / 5 = 1400 / 5 = 280 N. A força muscular exercida é 7 vezes superior ao peso do objeto sustentado (VM = 5/35 = 1/7 ≈ 0,14).",
    "distractorAnalysis": [
      "Está incorreta: (40 N) ignora a desvantagem mecânica da alavanca de 3.ª classe, assumindo erradamente VM = 1.",
      "Está incorreta: (5,7 N) resulta de inverter a razão dos braços de alavanca (40 × 5 / 35), o que violaria o princípio do equilíbrio.",
      "Está incorreta: (1400 N) é o valor do torque em N·cm, tendo o estudante esquecido de dividir pela distância do tendão (5 cm)."
    ],
    "nursingApplication": "Este cálculo biofísico demonstra quantitativamente o enorme estresse a que tendões e inserções periosteais estão submetidos na prática clínica. Ao ajudar a levantar ou apoiar doentes dependentes, manter as cargas coladas ao corpo reduz o braço de resistência (d_R), diminuindo exponencialmente as forças internas de tração exigidas aos músculos e tendões do profissional."
  },
  {
    "id": 2011,
    "topicId": 2,
    "question": "Durante a extensão do joelho pelo músculo quadríceps femoral contra uma resistência aplicada na perna, a rótula (patela) desempenha um papel biofísico crucial. Qual é a função mecânica primária da patela neste sistema de alavanca?",
    "options": [
      "Desviar o tendão do quadríceps para a frente, aumentando a distância perpendicular ao eixo articular (braço de alavanca) e, consequentemente, aumentando o torque extensor.",
      "Transformar a articulação do joelho numa alavanca de 2.ª classe permanente com vantagem mecânica infinita.",
      "Diminuir o atrito a zero e eliminar completamente a força de reação articular no fémur.",
      "Reduzir o ângulo de inserção do tendão rotuliano para que toda a força seja dissipada longitudinalmente."
    ],
    "correctIndex": 0,
    "explanation": "A patela é o maior osso sesamoide do corpo humano. A sua função biomecânica essencial é atuar como um espaçador que afasta o tendão do quadríceps e o ligamento patelar do centro de rotação do joelho. Ao aumentar a distância perpendicular (braço de momento d), a patela aumenta o torque gerado (τ = F · d) para a mesma força de contração muscular em até 30-50%, melhorando a eficácia mecânica do quadríceps na extensão.",
    "distractorAnalysis": [
      "Está incorreta porque ; a extensão do joelho continua a ser funcionalmente uma alavanca de 3.ª classe.",
      "Está incorreta porque ; a força compressiva patelofemoral durante a flexão sob carga é enorme e atinge múltiplos do peso corporal.",
      "Está incorreta: é contrária à realidade: a patela aumenta o ângulo de tração relativo ao eixo da tíbia, tornando a força mais eficaz na rotação."
    ],
    "nursingApplication": "Em doentes submetidos a patelectomia total (remoção cirúrgica da patela) após fraturas cominutivas, o braço de alavanca do quadríceps é reduzido. O doente necessita de um esforço muscular significativamente maior para estender a perna, apresentando fraqueza na deambulação e subida de escadas, exigindo cuidados acrescidos de enfermagem na prevenção de quedas."
  },
  {
    "id": 2012,
    "topicId": 2,
    "question": "Ao utilizar uma pinça de dissecação (ou pinça anatómica sem dentes) para manusear compressas esterilizadas durante um penso complexo, qual é a classe de alavanca que o enfermeiro está a operar?",
    "options": [
      "Alavanca de 3.ª classe (interpotente), onde a mola da extremidade unida é o fulcro, os dedos do enfermeiro aplicam a potência a meio da haste, e a gaze segura nas pontas é a resistência.",
      "Alavanca de 1.ª classe (interfixa), porque existe um eixo cruzado tipo tesoura no meio da pinça.",
      "Alavanca de 2.ª classe (inter-resistente), porque a gaze está colocada entre os dedos e a extremidade de união.",
      "Sistema de plano inclinado duplo sem componente de alavanca."
    ],
    "correctIndex": 0,
    "explanation": "Uma pinça de dissecação consiste em duas lâminas flexíveis unidas numa extremidade (fulcro). Os dedos indicador e polegar do profissional comprimem as lâminas no terço médio (potência), enquanto a extremidade distal aperta a compressa ou tecido (resistência). Como a potência está situada entre o fulcro e a resistência, trata-se inequivocamente de uma alavanca de 3.ª classe.",
    "distractorAnalysis": [
      "Está incorreta: confunde pinças anatómicas com pinças hemostáticas de cremalheira (como Kelly ou Pean), que possuem articulação em X e são de 1.ª classe.",
      "Está incorreta: inverte a posição da resistência e da potência.",
      "Está incorreta: desconhece a classificação dos mecanismos simples elementares."
    ],
    "nursingApplication": "Como a pinça anatómica é de 3.ª classe (VM < 1), ela proporciona uma sensibilidade tátil tátil e controlo de precisão milimétrica excecionais na extremidade distal, embora exija uma força digital ligeiramente maior. É ideal para manipular tecidos delicados sem provocar lacerações por excesso de força bruta."
  },
  {
    "id": 2013,
    "topicId": 2,
    "question": "Por que motivo a esmagadora maioria das articulações sinoviais do corpo humano evoluiu estruturalmente como alavancas de 3.ª classe (interpotentes), apesar de apresentarem desvantagem mecânica em termos de força (VM < 1)?",
    "options": [
      "Porque permitem que um pequeno encurtamento das fibras musculares produza grandes amplitudes angulares e elevadíssimas velocidades na extremidade dos membros.",
      "Porque reduzem a tensão sobre os tendões musculares a valores próximos de zero.",
      "Porque tornam o osso imune a qualquer tipo de deformação elástica ou plástica.",
      "Porque evitam que a força da gravidade atue sobre os segmentos distais do corpo."
    ],
    "correctIndex": 0,
    "explanation": "Nas alavancas de 3.ª classe, a potência insere-se próxima do fulcro e a resistência na extremidade. Pela relação geométrica de arcos de círculo, a extremidade distal percorre uma distância muito maior no mesmo intervalo de tempo do que o ponto de inserção muscular. Isso confere ao ser humano agilidade, capacidade de correr, lançar objetos e manipular instrumentos com rapidez e precisão, apesar de exigir músculos mais volumosos e fortes para compensar a desvantagem de força.",
    "distractorAnalysis": [
      "Está incorreta: é rigorosamente o oposto: a desvantagem mecânica obriga o tendão a suportar tensões mecânicas altíssimas.",
      "Está incorreta porque , pois os ossos sofrem deformações elásticas contínuas sob as forças musculares de reação.",
      "Está incorreta: viola a física elementar; a gravidade continua a atuar plenamente sobre a massa dos segmentos."
    ],
    "nursingApplication": "Compreender que as alavancas anatómicas privilegiam velocidade em detrimento de força explica a vulnerabilidade osteoarticular dos profissionais de saúde: o sistema esquelético humano não foi biomecanicamente projetado para sustentar cargas estáticas pesadas prolongadas sem fadiga ou risco de lesão."
  },
  {
    "id": 2014,
    "topicId": 2,
    "question": "A Reologia é o ramo da física que se dedica ao estudo de quê?",
    "options": [
      "Da deformação e do escoamento da matéria quando submetida a tensões ou forças externas.",
      "Da transmissão exclusiva de ondas eletromagnéticas no vácuo.",
      "Da desintegração radioativa do núcleo atómico ao longo do tempo.",
      "Da velocidade de filtração glomerular no néfron renal."
    ],
    "correctIndex": 0,
    "explanation": "A Reologia (do grego rheos, fluir) é a ciência física que estuda a deformação e o escoamento de todos os tipos de matéria — englobando desde sólidos com elasticidade de Hooke até fluidos Newtonianos e fluidos biológicos complexos não-Newtonianos (como o sangue e o muco respiratório), passando por materiais viscoelásticos.",
    "distractorAnalysis": [
      "Está incorreta: refere-se à ótica física e teoria eletromagnética de Maxwell.",
      "Está incorreta: define a física nuclear e a radioatividade.",
      "Está incorreta: é um parâmetro fisiológico renal específico, não uma disciplina da física mecânica."
    ],
    "nursingApplication": "A reologia clínica é fundamental em enfermagem para compreender a drenagem de exsudados viscosos, a aspiração de secreções brônquicas, a fluidez de soluções entéricas e a viscoelasticidade da pele e dos tecidos moles na prevenção de escaras."
  },
  {
    "id": 2015,
    "topicId": 2,
    "question": "No contexto da mecânica dos materiais, qual é a definição formal de 'Tensão' (stress, σ) e qual é a sua unidade no Sistema Internacional (SI)?",
    "options": [
      "É a razão entre a força interna ou externa aplicada e a área da secção transversal sobre a qual atua (σ = F / A); a sua unidade SI é o Pascal (Pa = N/m²).",
      "É o alongamento total absoluto sofrido pelo corpo; a sua unidade SI é o metro (m).",
      "É o produto da força pelo tempo de contacto; a sua unidade SI é o Newton-segundo (N·s).",
      "É a razão entre o volume final e a massa do material; a sua unidade SI é m³/kg."
    ],
    "correctIndex": 0,
    "explanation": "Tensão mecânica (stress, representada pela letra grega sigma, σ, para tensões normais, ou tau, τ, para tensões tangenciais) é definida como a força exercida por unidade de área da secção transversal: σ = F / A. A unidade oficial do SI é o Pascal (1 Pa = 1 N/m²), frequentemente expressa em MegaPascals (MPa = 10⁶ N/m² = 1 N/mm²).",
    "distractorAnalysis": [
      "Está incorreta: confunde tensão com deformação absoluta linear (ΔL), medida em metros.",
      "Está incorreta: define a grandeza física Impulso mecânico (J = F · Δt).",
      "Está incorreta: define o volume específico de uma substância."
    ],
    "nursingApplication": "Ao administrar uma injeção intramuscular com uma agulha de pequeno diâmetro, a pequena área de secção do êmbolo da seringa gera elevadas pressões hidrostáticas se o êmbolo for forçado rapidamente, o que pode originar tensões mecânicas teciduais excessivas e dor aguda no doente."
  },
  {
    "id": 2016,
    "topicId": 2,
    "question": "A deformação relativa ou unitária longitudinal (strain, ε) sofrida por um material sob tração é calculada através de que relação?",
    "options": [
      "ε = ΔL / L₀ (variação do comprimento a dividir pelo comprimento inicial), sendo uma grandeza adimensional.",
      "ε = L₀ · ΔL, expressa em metros quadrados (m²).",
      "ε = F · ΔL, expressa em Joules (J).",
      "ε = ΔL / t, expressa em metros por segundo (m/s)."
    ],
    "correctIndex": 0,
    "explanation": "A deformação relativa (strain, ε) representa o alongamento fracionário de um corpo: ε = (L - L₀) / L₀ = ΔL / L₀. Como é a razão entre duas medidas de comprimento (m / m), é uma grandeza puramente adimensional (frequentemente expressa em percentagem, por exemplo, 0,05 = 5% de deformação).",
    "distractorAnalysis": [
      "Está incorreta: calcula uma grandeza dimensional fictícia sem significado físico em mecânica dos sólidos.",
      "Está incorreta: expressa uma fórmula relacionada com o trabalho mecânico realizado.",
      "Está incorreta: mede a velocidade de deformação (taxa de deformação strain rate, s⁻¹)."
    ],
    "nursingApplication": "As ligaduras elásticas utilizadas para compressão de membros inferiores em doentes com insuficiência venosa crónica baseiam o seu efeito terapêutico na deformação relativa (alongamento percentual) aplicada pelo enfermeiro durante a colocação (ex: estiramento a 50% de ε)."
  },
  {
    "id": 2017,
    "topicId": 2,
    "question": "Qual das seguintes equações traduz a Lei de Hooke para a deformação elástica linear de um sólido sob tração simples?",
    "options": [
      "σ = E · ε, onde σ é a tensão, E é o Módulo de Young e ε é a deformação relativa.",
      "σ = E / ε², onde a tensão decai quadraticamente com a deformação.",
      "σ = m · v · ε, onde v é a velocidade de propagação sonora no material.",
      "σ = E · L₀ · g, onde g é a aceleração da gravidade."
    ],
    "correctIndex": 0,
    "explanation": "A Lei de Hooke (formulada por Robert Hooke em 1678 como 'ut tensio, sic vis') estabelece que, na região elástica de proporcionalidade, a tensão normal é linearmente proporcional à deformação relativa que provoca: σ = E · ε. A constante de proporcionalidade E é o Módulo de Young (ou Módulo de Elasticidade Longitudinal).",
    "distractorAnalysis": [
      "Está incorreta: propõe uma dependência inversamente quadrática que inexiste no comportamento elástico linear.",
      "Está incorreta: introduz incorretamente a velocidade e momento linear num regime estático de sólidos.",
      "Está incorreta: é dimensionalmente incorreta e mistura constantes gravitacionais irrelevantes para a rigidez intrínseca do material."
    ],
    "nursingApplication": "O funcionamento de dinamómetros de reabilitação e balanças de mola utilizadas para pesar recém-nascidos baseia-se rigorosamente na Lei de Hooke: a deformação da mola é estritamente proporcional à força peso aplicada pelo bebé."
  },
  {
    "id": 2018,
    "topicId": 2,
    "question": "O Módulo de Young (E) traduz uma propriedade intrínseca do material. Fisicamente, o que representa um valor elevado de Módulo de Young?",
    "options": [
      "Elevada rigidez elástica do material, significando que é necessária uma grande tensão mecânica para produzir uma pequena deformação elástica.",
      "Grande flexibilidade, significando que o corpo se deforma enormemente com forças insignificantes.",
      "Incapacidade absoluta do material para suportar qualquer força de compressão.",
      "Elevada densidade de massa atómica exclusivamente."
    ],
    "correctIndex": 0,
    "explanation": "O Módulo de Young (E = σ / ε) é a medida fundamental da rigidez elástica de um material. Quanto maior for o valor de E (medido em Pa ou GPa), mais 'rígido' é o corpo e mais resistente é à deformação elástica — ou seja, menor será a deformação sofrida para uma dada tensão aplicada.",
    "distractorAnalysis": [
      "Está incorreta: descreve um material de alta complacência ou flexibilidade, caracterizado por um Módulo de Young muito BAIXO (como elastómeros ou silicone).",
      "Está incorreta porque ; materiais com elevado Módulo de Young (como ligas de titânio ou o osso cortical) suportam elevadíssimas forças de compressão.",
      "Está incorreta: confunde rigidez mecânica com densidade volumétrica de massa."
    ],
    "nursingApplication": "Nas próteses articulares da anca, ligas metálicas tradicionais possuem Módulo de Young muito superior ao do osso cortical (~200 GPa vs ~18 GPa). Essa discrepância gera a complicação de 'stress shielding' (blindagem contra o estresse), onde o osso não recebe carga mecânica e atrofia por desuso, exigindo monitorização radiológica e cuidados de enfermagem pós-operatórios."
  },
  {
    "id": 2019,
    "topicId": 2,
    "question": "Num ensaio de tração mecânica de um biomaterial, o que distingue fundamentalmente a 'Deformação Elástica' da 'Deformação Plástica'?",
    "options": [
      "A deformação elástica é completamente reversível quando a carga é removida, enquanto a deformação plástica é permanente e residual.",
      "A deformação elástica provoca sempre a rotura imediata do corpo, enquanto a deformação plástica restaura a forma original.",
      "A deformação elástica não segue a Lei de Hooke, enquanto a plástica segue rigorosamente.",
      "A deformação elástica só ocorre em fluidos biológicos e a plástica em ossos secos."
    ],
    "correctIndex": 0,
    "explanation": "A deformação elástica envolve apenas o afastamento temporário dos átomos ou desenrolamento conformacional reversível de polímeros sem rutura das ligações fundamentais; cessada a força, o corpo recupera integralmente o comprimento original (L₀). Na deformação plástica, ultrapassa-se o limite elástico e ocorre escorregamento irreversível de planos atómicos ou quebra de ligações moleculares, resultando numa deformação residual permanente.",
    "distractorAnalysis": [
      "Está incorreta: inverte os conceitos de forma absurda; a rotura ocorre após o esgotamento da deformação plástica.",
      "Está incorreta porque a Lei de Hooke rege precisamente a fase elástica linear, e não a fase plástica.",
      "Está incorreta: limita erroneamente estados da matéria; deformação elástica e plástica são conceitos fundamentais da física dos sólidos."
    ],
    "nursingApplication": "Ao dobrar manualmente o mandril metálico (guia) de um tubo endotraqueal para entubação difícil, o enfermeiro induz deformação plástica controlada no metal para que ele mantenha a curvatura desejada. Por outro lado, o balonete de vedação da traqueia deve manter deformação elástica pura para vedar sem colapsar as vias aéreas."
  },
  {
    "id": 2020,
    "topicId": 2,
    "question": "O ponto da curva tensão-deformação que marca a transição entre o regime elástico reversível e o início da deformação plástica permanente é denominado:",
    "options": [
      "Limite de elasticidade (ou tensão de escoamento, yield point).",
      "Ponto de fusão endotérmica.",
      "Ponto de tensão de rotura final catastrófica.",
      "Origem de coordenadas de repouso absoluto."
    ],
    "correctIndex": 0,
    "explanation": "O limite de elasticidade (e de forma muito próxima na engenharia, a tensão de escoamento ou yield strength) é o valor máximo de tensão mecânica que um material pode suportar sem sofrer deformação plástica residual permanente. Se a tensão aplicada for superior a este limite, o corpo não regressa ao seu comprimento inicial após a remoção da força.",
    "distractorAnalysis": [
      "Está incorreta: refere-se a uma transição de fase termodinâmica sólido-líquido, sem relação com tensão mecânica.",
      "Está incorreta: refere-se ao ponto final onde o material se fratura e separa em dois pedaços.",
      "Está incorreta: é apenas o ponto zero (tensão zero, deformação zero) no início do ensaio."
    ],
    "nursingApplication": "Nos clipes hemostáticos cirúrgicos e agrafos utilizados para fechar incisões, a aplicação pela pinça deve ultrapassar conscientemente o limite de elasticidade do titânio para produzir deformação plástica, garantindo que o agrafo permanece permanentemente fechado sobre a derme do doente."
  },
  {
    "id": 2021,
    "topicId": 2,
    "question": "Na ciência dos materiais e biomecânica, qual é a definição de 'Tenacidade' (toughness)?",
    "options": [
      "É a capacidade do material absorver energia mecânica e deformar-se plasticamente até à fratura, correspondendo à área total sob a curva tensão-deformação.",
      "É a resistência que a superfície do material oferece ao risco e penetração por outro corpo duro.",
      "É a massa máxima que o corpo pode suportar sem alterar a sua temperatura.",
      "É a velocidade com que uma onda de choque mecânica atravessa o material."
    ],
    "correctIndex": 0,
    "explanation": "Tenacidade (toughness) é a quantidade total de energia mecânica por unidade de volume que um material consegue absorver antes de fraturar. No gráfico de tensão versus deformação, a tenacidade é matematicamente igual à área integral sob toda a curva (desde a origem até à rotura). Materiais tenazes combinam alta resistência mecânica com ductilidade considerável.",
    "distractorAnalysis": [
      "Está incorreta: define rigorosamente a 'Dureza' (hardness) do material (avaliada pelas escalas Mohs, Brinell ou Vickers).",
      "Está incorreta: confunde propriedades mecânicas com capacidade térmica de calor específico.",
      "Está incorreta: define a velocidade acústica de propagação mecânica (v = √(E/ρ))."
    ],
    "nursingApplication": "O osso vivo saudável possui elevada tenacidade devido à matriz de colagénio, o que lhe permite absorver o impacto de quedas moderadas sem fraturar. Em doentes idosos ou com osteogénese imperfeita, a perda de tenacidade torna o esqueleto frágil, suscetível a fraturas de baixa energia com o simples apoio do peso corporal."
  },
  {
    "id": 2022,
    "topicId": 2,
    "question": "Um material classificado como 'Frágil' (brittle) em oposição a 'Dúctil' (ductile) caracteriza-se por fraturar com:",
    "options": [
      "Praticamente nenhuma deformação plástica prévia, quebrando quase repentinamente após o término da fase elástica linear.",
      "Uma enorme extensão de deformação plástica antes da separação física.",
      "Geração espontânea de calor e fusão dos seus fragmentos.",
      "Um aumento contínuo do seu volume total sob tração axial."
    ],
    "correctIndex": 0,
    "explanation": "Materiais frágeis (como o vidro, a cerâmica, o gesso ortopédico seco e o mineral puro do osso sem colagénio) apresentam fratura súbita e catastrófica logo que a tensão atinge o limite elástico, sem sofrer escoamento plástico mensurável. Materiais dúcteis (como o cobre, o aço inoxidável e o titânio), pelo contrário, sofrem extensas deformações plásticas antes de quebrarem.",
    "distractorAnalysis": [
      "Está incorreta: define a essência mecânica dos materiais dúcteis.",
      "Está incorreta: viola as leis de fratura mecânica dos materiais.",
      "Está incorreta: descreveria um comportamento de dilatação anómala que não é definidor de fragilidade."
    ],
    "nursingApplication": "As talas e aparelhos gessados de imobilização ortopédica são rígidos e extremamente frágeis. Se o doente apoiar peso excessivo sobre um gesso recente de marcha, o gesso fratura por quebra frágil imediata em vez de vergar, comprometendo a imobilização da fratura e exigindo nova colocação pelo enfermeiro."
  },
  {
    "id": 2023,
    "topicId": 2,
    "question": "O que quantifica o 'Coeficiente de Poisson' (ν) quando um corpo elástico cilíndrico é submetido a uma tensão de tração longitudinal simples?",
    "options": [
      "A razão (com sinal invertido) entre a deformação transversal e a deformação longitudinal (ν = - ε_transversal / ε_longitudinal).",
      "A taxa de evaporação de fluidos intersticiais durante a tração.",
      "A força exercida pela pressão atmosférica sobre o perímetro do cilindro.",
      "A variação de temperatura decorrente da perda de elasticidade do corpo."
    ],
    "correctIndex": 0,
    "explanation": "Quando um sólido elástico é esticado longitudinalmente (tração, onde ε_longitudinal > 0), a sua secção transversal contrai-se lateralmente (adelgaçamento, onde ε_transversal < 0). O Coeficiente de Poisson (ν) é a razão adimensional entre essa deformação lateral e a deformação axial: ν = - ε_transversal / ε_longitudinal. Para a maioria dos materiais metálicos e ossos, ν situa-se entre 0,25 e 0,35; para a borracha e tecidos biológicos ricos em água incompressível, aproxima-se de 0,5.",
    "distractorAnalysis": [
      "Está incorreta: confunde mecânica de deformação com termodinâmica de evaporação.",
      "Está incorreta porque a pressão atmosférica não entra na definição do coeficiente de Poisson.",
      "Está incorreta: mistura termodinâmica com propriedades mecânicas elásticas."
    ],
    "nursingApplication": "Ao insuflar a braçadeira de um esfigmomanómetro ou garrote elástico, a tração longitudinal do tubo de borracha provoca adelgaçamento da sua parede (efeito de Poisson). Se o material for velho ou ressecado, esse afinamento lateral gera microfissuras e rutura súbita durante procedimentos de colheita de sangue."
  },
  {
    "id": 2024,
    "topicId": 2,
    "question": "Quando uma força tangencial é aplicada paralelamente à superfície de um corpo, provocando o deslizamento relativo entre planos adjacentes de matéria, que tipo de solicitação mecânica está a ser exercida?",
    "options": [
      "Tensão de Cisalhamento (ou corte, τ).",
      "Tensão de Compressão axial pura.",
      "Pressão Hidrostática isotrópica.",
      "Tração uniaxial perpendicular."
    ],
    "correctIndex": 0,
    "explanation": "A tensão de cisalhamento (shear stress, denotada por τ) surge quando as forças aplicadas atuam tangencialmente (paralelas) ao plano da secção de área: τ = F_tangencial / A. Ela deforma o corpo alterando os seus ângulos internos (distorção angular), como quando se empurra a capa superior de um livro grosso assente numa mesa.",
    "distractorAnalysis": [
      "Está incorreta: refere-se a forças normais dirigidas perpendicularmente para o interior do material, encurtando o seu eixo.",
      "Está incorreta: descreve forças compressivas iguais em todas as direções espaciais aplicadas por um fluido envolvente.",
      "Está incorreta: descreve forças normais dirigidas perpendicularmente para o exterior, alongando o corpo."
    ],
    "nursingApplication": "Na pele de um doente acamado com a cabeceira elevada a mais de 30°, o corpo tende a escorregar para o fundo da cama por gravidade enquanto a pele fica retida no lençol por atrito. Isso gera tensões de cisalhamento devastadoras nos tecidos subcutâneos profundos, que deformam e ocluem os vasos perfurantes, acelerando a necrose e o surgimento de lesões por pressão."
  },
  {
    "id": 2025,
    "topicId": 2,
    "question": "A resistência à torção de uma estrutura cilíndrica (como um osso longo ou o eixo de um equipamento) depende criticamente de que parâmetro geométrico?",
    "options": [
      "Do Momento Polar de Inércia da secção transversal (J), que nos cilindros circulares é diretamente proporcional à quarta potência do raio (r⁴).",
      "Apenas do comprimento do cilindro, sendo completamente independente do raio.",
      "Da cor e textura rugosa externa do revestimento da superfície.",
      "Da velocidade de rotação expressa em radianos por hora."
    ],
    "correctIndex": 0,
    "explanation": "A rigidez e resistência à torção dependem do Momento Polar de Inércia (J) da secção transversal (para uma haste circular maciça, J = π · r⁴ / 2). Por depender da quarta potência do raio (r⁴), duplicar o raio externo de um cilindro ou osso aumenta a sua resistência à torção em dezasseis vezes (2⁴ = 16) para o mesmo material.",
    "distractorAnalysis": [
      "Está incorreta porque , pois a geometria da secção transversal (especialmente o raio) é o determinante primário da resistência à torção.",
      "Está incorreta: refere atributos visuais superficiais sem qualquer relevância mecânica estrutural.",
      "Está incorreta: descreve cinemática de rotação, não resistência estrutural estática."
    ],
    "nursingApplication": "Ao rodar um doente na cama segurando nos pés ou pernas com o tronco imobilizado, o enfermeiro gera momentos de torção sobre a diáfise da tíbia e fémur. Em doentes com osteoporose severa (onde o osso esponjoso e cortical perderam massa interna), forças inadvertidas de torção podem provocar fraturas espiroides com facilidade."
  },
  {
    "id": 2026,
    "topicId": 2,
    "question": "Quando um elemento estrutural reto (como uma tábua de transferência ou um fémur) é submetido a uma solicitação de flexão mecânica, qual é o perfil de tensões gerado no seu interior?",
    "options": [
      "O bordo côncavo (interno) fica sob compressão, o bordo convexo (externo) fica sob tração, e na linha neutra central a tensão axial é rigorosamente nula.",
      "Todas as fibras internas ficam submetidas exclusivamente a tração de intensidade uniforme.",
      "Todas as fibras internas ficam submetidas exclusivamente a compressão isotrópica.",
      "A tensão axial é máxima exatamente no centro geométrico e nula em ambas as bordas superficiais."
    ],
    "correctIndex": 0,
    "explanation": "Na flexão simples, a curvatura produz encurtamento das fibras longitudinais no lado interno da curva (gerando tensões de compressão) e alongamento das fibras no lado externo da curva (gerando tensões de tração). A transição suave entre tração e compressão define a 'linha neutra' (ou superfície neutra), onde não há deformação nem tensão axial (σ = 0).",
    "distractorAnalysis": [
      "Está incorreta: ignora a curvatura que obriga um dos lados a encurtar-se em compressão.",
      "Está incorreta: ignora o alongamento imposto às fibras exteriores convexas.",
      "Está incorreta: inverte completamente o gradiente real: a tensão na flexão é zero no centro e máxima nas periferias mais afastadas da linha neutra (σ = M · y / I)."
    ],
    "nursingApplication": "Quando um doente idoso sofre uma queda de lado sobre o grande trocânter, o colo do fémur é forçado em flexão violenta: o bordo inferior fica sob compressão e o bordo superior sob tração extrema. Como o osso resiste muito menos à tração do que à compressão, a fratura inicia-se habitualmente por rasgo no bordo superior sob tração."
  },
  {
    "id": 2027,
    "topicId": 2,
    "question": "O fenómeno mecânico conhecido como 'Fadiga dos Materiais' caracteriza-se por:",
    "options": [
      "Fratura catastrófica de uma estrutura após a aplicação repetida e cíclica de tensões mecânicas, cujos valores de pico são muito inferiores ao limite de rotura estático do material.",
      "Amolecimento térmico imediato provocado pela luz solar incidente em materiais metálicos.",
      "Aumento permanente da rigidez e resistência de um sólido após permanecer em repouso absoluto.",
      "Oxidação química superficial sem qualquer degradação estrutural interna."
    ],
    "correctIndex": 0,
    "explanation": "A fadiga dos materiais é o processo de degradação estrutural progressiva e localizada que ocorre quando um componente é submetido a tensões mecânicas oscilatórias ou cíclicas repetidas (milhares ou milhões de ciclos). Mesmo que as tensões sejam muito menores do que a tensão de rotura estática, microfissuras iniciam-se e propagam-se lentamente até causarem uma fratura súbita e imprevisível.",
    "distractorAnalysis": [
      "Está incorreta: confunde fadiga mecânica com degradação termoplástica ou fotodegradação.",
      "Está incorreta: descreveria um endurecimento espontâneo inexistente na ausência de tratamentos metalúrgicos.",
      "Está incorreta: descreve corrosão química passivadora simples, ignorando o colapso mecânico cíclico."
    ],
    "nursingApplication": "Fraturas de stress (fadiga óssea) nos metatarsos ocorrem em atletas ou doentes que iniciam marcha intensiva após repouso prolongado. Do mesmo modo, hastes de próteses ortopédicas de anca ou joelho podem falhar por fadiga após 10 a 15 anos de ciclos diários de marcha (cerca de 1 a 2 milhões de passos por ano), exigindo monitorização clínica de dores inexplicadas na anca."
  },
  {
    "id": 2028,
    "topicId": 2,
    "question": "Os cateteres venosos periféricos modernos são frequentemente fabricados em Poliuretano (PUR) em detrimento do Teflon tradicional (FEP). Qual é a principal vantagem biofísica e reológica do poliuretano quando introduzido no corpo humano?",
    "options": [
      "Possui amolecimento térmico in vivo, tornando-se mais flexível (menor Módulo de Young) à temperatura corporal de 37 °C, o que reduz o traumatismo mecânico na parede endotelial e o risco de flebite.",
      "Apresenta rigidez infinita permanente para perfurar a pele sem necessidade de agulha guia de aço.",
      "Dissolve-se espontaneamente no sangue após 48 horas de cateterização venosa.",
      "Bloqueia completamente o fluxo de sangue na veia para evitar extravasamentos."
    ],
    "correctIndex": 0,
    "explanation": "O poliuretano (PUR) é um polímero termossensível: à temperatura ambiente (cerca de 20-22 °C) possui rigidez suficiente para facilitar a punção e progressão venosa, mas ao entrar na corrente sanguínea e atingir 37 °C sofre um relaxamento reológico acentuado, reduzindo significativamente o seu Módulo de Young (amolece até 50-70%). Isto permite que o cateter acompanhe as curvaturas anatómicas da veia, diminuindo drasticamente a tensão de atrito sobre a íntima vascular e a incidência de flebites mecânicas.",
    "distractorAnalysis": [
      "Está incorreta porque : o poliuretano flexível necessita sempre da agulha metálica introdutora para vencer a resistência da pele.",
      "Está incorreta: descreve um material biodegradável de reabsorção rápida, totalmente desadequado para manter um acesso venoso pérvio.",
      "Está incorreta: descreve um trombo oclusivo iatrogénico catastrófico, contrariando o objetivo da fluidoterapia."
    ],
    "nursingApplication": "A escolha do material do cateter é um indicador de excelência nos cuidados de enfermagem: ao administrar terapêutica intravenosa contínua num doente agitado ou em doentes pediátricos/idosos, cateteres de poliuretano garantem maior sobrevida funcional do acesso vascular e reduzem o risco de infiltrações e flebites associadas a movimentos bruscos do membro."
  },
  {
    "id": 2029,
    "topicId": 2,
    "question": "O fenómeno de 'Kinking' (quinagem ou colapso por flexão acentuada) observado em tubos de drenagem cirúrgica ou cateteres decorre da perda de estabilidade geométrica da secção circular. Que propriedade geométrica do tubo confere maior resistência à quinagem?",
    "options": [
      "Maior espessura da parede do tubo e maior diâmetro externo, o que aumenta o Momento de Inércia da secção transversal.",
      "Comprimento extremamente longo do cateter (superior a 2 metros).",
      "Transparência ótica absoluta da borracha medicinal.",
      "Secção transversal elíptica extremamente achatada sem reforço."
    ],
    "correctIndex": 0,
    "explanation": "A resistência de um tubo à flexão e ao colapso circunferencial (kinking) depende do momento de inércia da sua secção transversal (I = π(d_ext⁴ - d_int⁴)/64). Uma parede mais espessa ou a inclusão de estrias circunferenciais/espirais metálicas (tubos armados) aumenta enormemente a rigidez contra a ovalização e quinagem, mantendo a luz interna desobstruída mesmo em curvas apertadas.",
    "distractorAnalysis": [
      "Está incorreta: aumenta a probabilidade de dobras e laços indesejados ao longo do percurso do tubo.",
      "Está incorreta: é uma característica ótica útil para visualizar líquidos drenados, mas sem relevância na rigidez mecânica de kinking.",
      "Está incorreta: descreve um perfil já pré-colapsado que bloqueia o fluxo com mínima flexão adicional."
    ],
    "nursingApplication": "Na vigilância de doentes com drenos torácicos ou cateteres de diálise peritoneal, a quinagem (kinking) do circuito provoca interrupção imediata da drenagem, podendo originar pneumotórax hipertensivo ou tamponamento pericárdico. O enfermeiro deve inspecionar rotineiramente a trajetória dos tubos e garantir que não ficam sob o corpo do doente."
  },
  {
    "id": 2030,
    "topicId": 2,
    "question": "Na comparação reológica entre luvas de procedimento clínico fabricadas em Látex de borracha natural, Borracha de Nitrilo e Vinil (PVC), qual das opções caracteriza com precisão o comportamento mecânico do Vinil?",
    "options": [
      "O Vinil possui baixo módulo de elasticidade e elevadíssima deformação plástica permanente, o que resulta em perda rápida de adaptação anatómica à mão e menor resistência a microperfurações sob tração.",
      "O Vinil é o elastómero mais elástico do mundo, recuperando 100% da sua forma mesmo após esticado cinco vezes o seu comprimento.",
      "O Vinil é totalmente impenetrável por qualquer agulha cirúrgica devido à sua rigidez diamantífera.",
      "O Vinil reage quimicamente com o oxigénio do ar, duplicando a sua espessura a cada 10 minutos de uso."
    ],
    "correctIndex": 0,
    "explanation": "O policloreto de vinila (vinil) plastificado não é um elastómero verdadeiro: apresenta baixa memória elástica (alta taxa de relaxamento de tensões e deformação plástica irreversível quando esticado). Ao calçar e movimentar os dedos, a luva de vinil deforma-se permanentemente, criando folgas e microfissuras na estrutura molecular, oferecendo uma barreira mecânica significativamente inferior contra agentes biológicos do que o látex ou o nitrilo.",
    "distractorAnalysis": [
      "Está incorreta: descreve as propriedades mecânicas de excelência do látex de borracha natural (elastómero de alto retorno elástico).",
      "Está incorreta porque ; nenhuma luva de procedimento resiste à perfuração de agulhas hipodérmicas afiadas.",
      "Está incorreta: é uma afirmação fantasiosa sem sustentação química."
    ],
    "nursingApplication": "Normas internacionais de controlo de infeção recomendam que os enfermeiros evitem luvas de vinil no manuseamento de fluidos corporais de alto risco (sangue, exsudados abundantes) ou citotóxicos, priorizando o nitrilo ou látex, que oferecem maior resistência à tração e retenção de integridade mecânica durante o procedimento."
  },
  {
    "id": 2031,
    "topicId": 2,
    "question": "A eficácia terapêutica das meias de compressão elástica graduada na prevenção de Trombose Venosa Profunda (TVP) é explicada biofisicamente pela Lei de Laplace. De acordo com esta lei para um cilindro oco (P = T / r), como varia a pressão de compressão (P) exercida sobre a perna?",
    "options": [
      "A pressão exercida pelo tecido elástico é inversamente proporcional ao raio do membro (P = T / r); para uma mesma tensão elástica da malha (T), a pressão é máxima no tornozelo (menor raio) e diminui progressivamente em direção à coxa (maior raio).",
      "A pressão exercida aumenta com o quadrado do raio, sendo máxima na coxa e nula no tornozelo.",
      "A pressão é estritamente uniforme e independente do raio anatómico do membro.",
      "A pressão exercida depende unicamente da temperatura externa do quarto do doente."
    ],
    "correctIndex": 0,
    "explanation": "Pela Lei de Laplace aplicada a membranas cilíndricas elásticas em equilíbrio, a pressão transmural é dada por P = T / r, onde T é a tensão tangencial da malha têxtil e r é o raio de curvatura local do membro. Devido à conicidade natural da perna humana, o raio r é muito menor no tornozelo do que na barriga da perna ou coxa. Portanto, mesmo com tensão T uniforme ou ligeiramente decrescente, a pressão P é naturalmente mais alta no tornozelo (ex: 18-20 mmHg) e decai em direção proximal (ex: 8-10 mmHg na coxa), criando o gradiente pressórico indispensável para impulsionar o retorno venoso.",
    "distractorAnalysis": [
      "Está incorreta: descreve uma relação inversa que estrangularia o fluxo sanguíneo na coxa e provocaria estase venosa distal catastrófica.",
      "Está incorreta: ignora a dependência geométrica do raio na Lei de Laplace.",
      "Está incorreta: confunde leis biomecânicas fundamentais com variáveis ambientais secundárias."
    ],
    "nursingApplication": "A medição correta do perímetro do tornozelo, gémeos e coxa do doente é um cuidado de enfermagem indeclinável antes de prescrever ou colocar meias de compressão. Usar meias de tamanho incorreto (ou permitir que a meia enrole na extremidade superior, reduzindo o raio e multiplicando a tensão) cria um anel de constrição que atua como garrote patológico, favorecendo a trombose venosa."
  },
  {
    "id": 2032,
    "topicId": 2,
    "question": "A calibração e especificação dos fios de sutura cirúrgica segundo a Farmacopeia Americana (escala USP, ex: 2-0, 3-0, 4-0) baseia-se fundamentalmente em quais propriedades mecânicas e físicas?",
    "options": [
      "No diâmetro físico do fio e na sua carga de rotura mínima por tração (tensile strength) com e sem nó cirúrgico.",
      "No índice de refração ótica e absorção de radiação infravermelha pelo monofilamento.",
      "Na condutividade elétrica do fio quando imerso em solução salina a 0,9%.",
      "No peso molecular dos conservantes bactericidas adicionados à embalagem estéril."
    ],
    "correctIndex": 0,
    "explanation": "A classificação USP padroniza os fios cirúrgicos pelo seu diâmetro milimétrico e pela resistência mecânica à tração (tensão de rotura): quanto maior for o número de zeros (ex: 6-0 vs 2-0), menor é o calibre (diâmetro mais fino) e menor é a força absoluta de tração necessária para romper o fio. A norma exige ainda testes rigorosos de resistência com o nó realizado, pois o nó introduz concentrações de tensão de cisalhamento locais que reduzem a força do fio em até 50%.",
    "distractorAnalysis": [
      "Está incorreta: foca-se em propriedades óticas irrelevantes para a contenção mecânica da ferida cirúrgica.",
      "Está incorreta: foca-se em condutividade elétrica, parâmetro sem relação com a escala de sutura.",
      "Está incorreta: refere-se a adjuvantes químicos de acondicionamento sem correlação com o calibre USP."
    ],
    "nursingApplication": "Na remoção de pontos cirúrgicos ou na colaboração em pequenas cirurgias, o enfermeiro deve reconhecer que um fio 6-0 (usado na face por razões estéticas) tem baixíssima resistência à tração e quebra facilmente com pinçamento inadequado, enquanto um fio 1 ou 2 (usado em laparotomias para encerrar aponevroses resistentes) suporta elevadíssimas tensões mecânicas de tração."
  },
  {
    "id": 2033,
    "topicId": 2,
    "question": "Na biofísica dos materiais poliméricos hospitalares, o que se entende pelo conceito de 'Relaxamento de Tensões' (stress relaxation)?",
    "options": [
      "A diminuição progressiva da tensão mecânica interna ao longo do tempo quando o material é mantido sob uma deformação constante pré-estabelecida.",
      "A recuperação instantânea da forma geométrica sem dissipação de calor.",
      "A quebra espontânea das ligações peptídicas devido à luz fluorescente do quarto.",
      "O aumento contínuo da pressão interna de um balão sem entrada de gás adicional."
    ],
    "correctIndex": 0,
    "explanation": "O relaxamento de tensões (stress relaxation) é uma manifestação típica de materiais viscoelásticos: quando uma amostra de polímero é submetida a uma deformação instantânea fixa (ε = constante) e assim é mantida, as cadeias macromoleculares reorganizam-se lentamente internamente, aliviando o estresse elástico. Como consequência, a tensão interna σ(t) decresce monotonicamente com o tempo.",
    "distractorAnalysis": [
      "Está incorreta: descreve a elasticidade perfeita ideal de Hooke sem efeitos viscosos temporais.",
      "Está incorreta: confunde degradação química fotoquímica com resposta mecânica viscoelástica.",
      "Está incorreta: viola a Lei de Boyle e as leis da termodinâmica de gases ideais."
    ],
    "nursingApplication": "Quando o enfermeiro aplica uma fita adesiva, ligadura compressiva ou garrote de borracha no braço de um doente, a tensão de compressão inicial é máxima nos primeiros minutos e diminui progressivamente na primeira meia hora devido ao relaxamento de tensões do polímero. Se for necessária uma compressão hemostática mantida, o enfermeiro deve reavaliar e reajustar periodicamente a pressão aplicada."
  },
  {
    "id": 2034,
    "topicId": 2,
    "question": "O fenómeno viscoelástico complementar ao relaxamento de tensões, no qual um material se deforma de modo contínuo e progressivo sob a ação de uma carga ou tensão mecânica constante ao longo do tempo, designa-se por:",
    "options": [
      "Fluência mecânica (creep).",
      "Ressonância harmónica simples.",
      "Magnetostrição polarizada.",
      "Dureza de Vickers estática."
    ],
    "correctIndex": 0,
    "explanation": "A fluência (creep) é a deformação permanente ou dependente do tempo que um material sólido sofre quando submetido a uma tensão mecânica constante (σ = constante) durante um período prolongado. Ocorre tanto em biomateriais poliméricos (como os tubos endotraqueais e colchões) como em tecidos biológicos (ligamentos, tendões e discos intervertebrais).",
    "distractorAnalysis": [
      "Está incorreta: descreve a oscilação de alta amplitude quando a frequência externa coincide com a frequência natural de um sistema.",
      "Está incorreta: refere-se à alteração geométrica de materiais ferromagnéticos na presença de campos magnéticos.",
      "Está incorreta: é um método metalúrgico de ensaio de indentação para medir dureza."
    ],
    "nursingApplication": "A fluência (creep) explica por que a pele de um doente obeso ou acamado continua a deformar-se e adelgaçar-se ao longo de horas de apoio estático sobre o sacro, mesmo que o peso corporal não aumente. Explica também a perda progressiva da pressão de oclusão de clamps plásticos descartáveis aplicados em linhas de infusão ao longo de vários dias."
  },
  {
    "id": 2035,
    "topicId": 2,
    "question": "Quando um elastómero (como a borracha de um tubo de látex ou o tecido elástico de uma cinta de sustentação) é submetido a um ciclo de carga (estiramento) seguido de descarga (retorno elástico), a curva do ciclo forma uma área fechada. Este fenómeno físico é conhecido como:",
    "options": [
      "Histerese elástica, representando a energia mecânica dissipada sob a forma de calor durante o ciclo de deformação.",
      "Sublimação elástica, representando a perda de massa gasosa das macromoléculas.",
      "Isotropia perfeita, indicando que não há qualquer atrito molecular interno.",
      "Rigidez infinita de Young sem dependência térmica."
    ],
    "correctIndex": 0,
    "explanation": "A histerese mecânica (ou elástica) é a diferença entre a energia despendida para deformar um material elástico durante o carregamento e a energia devolvida por esse material durante a descompressão. A curva de descarga situa-se abaixo da curva de carga no diagrama σ-ε; a área interna deste 'laço de histerese' corresponde rigorosamente à energia dissipada internamente pelo atrito viscoso molecular sob forma de calor.",
    "distractorAnalysis": [
      "Está incorreta: confunde transição de fase sólido-gás com resposta mecânica de histerese.",
      "Está incorreta porque : a presença de histerese comprova a existência de atrito viscoso interno e não-idealidade mecânica.",
      "Está incorreta: contradiz a própria definição de um elastómero altamente deformável e complacente."
    ],
    "nursingApplication": "Almofadas e colchões hospitalares 'viscoelásticos' (espumas tipo 'memory foam') baseiam o seu sucesso na elevada histerese: ao absorverem o impacto do peso corporal do doente, dissipam a energia mecânica em calor em vez de a devolverem elasticamente como uma mola de colchão tradicional, amortecendo picos de pressão sobre o sacro e trocânteres."
  },
  {
    "id": 2036,
    "topicId": 2,
    "question": "No contexto da rigidez e resistência de agulhas hipodérmicas e cânulas cirúrgicas fabricadas em aço inoxidável austenítico (AISI 304/316), qual das seguintes afirmações sobre a sua secção transversal é cientificamente VERDADEIRA?",
    "options": [
      "Quanto maior o diâmetro externo da cânula (menor Gauge na escala Birmingham), maior é a rigidez à flexão da agulha, reduzindo a probabilidade de desvio da trajetória durante punções profundas.",
      "Agulhas finas de 30G possuem muito maior rigidez mecânica à flexão do que agulhas de 18G.",
      "O bisel trifacetado afeta a dureza atómica de todo o corpo cilíndrico do aço inoxidável.",
      "A agulha comporta-se como um fluido de Bingham quando submetida a forças de compressão."
    ],
    "correctIndex": 0,
    "explanation": "Na escala Birmingham Gauge utilizada internacionalmente em enfermagem e medicina, o calibre é inverso ao diâmetro numérico: agulhas de 18G ou 16G têm grande diâmetro externo (~1,2 a 1,6 mm), enquanto agulhas de 27G ou 30G têm diâmetro minúsculo (~0,3 mm). Como a rigidez à flexão de um tubo cilíndrico depende da quarta potência do diâmetro externo, uma agulha de 18G é dezenas de vezes mais rígida à flexão do que uma agulha fina, não fletindo facilmente ao perfurar tecidos densos.",
    "distractorAnalysis": [
      "Está incorreta: é um erro crassíssimo: agulhas de 30G fletem com extrema facilidade devido ao seu diâmetro microscópico.",
      "Está incorreta porque : a geometria do bisel afeta a capacidade de corte tecidual local, não a dureza intrínseca do metal da haste.",
      "Está incorreta: é um contrassenso: o aço inoxidável é um sólido cristalino elástico-plástico, não um fluido de escoamento."
    ],
    "nursingApplication": "Na punção lombar (para colheita de líquor ou anestesia subaracnoideia), utilizam-se agulhas muito finas (25G a 27G) para minimizar a cefaleia pós-punção por perda liquórica. Contudo, devido à sua baixa rigidez à flexão, o enfermeiro que assiste o procedimento sabe que o médico utiliza um introdutor rígido metálico de maior calibre para garantir a trajetória reta inicial sem desvios ou empenamento da agulha fina."
  },
  {
    "id": 2037,
    "topicId": 2,
    "question": "Qual das seguintes pinças cirúrgicas hemostáticas frequentemente manipuladas por enfermeiros funciona como uma alavanca de 1.ª classe com sistema de travamento por cremalheira?",
    "options": [
      "Pinça de Kocher (ou pinça de Pean/Kelly).",
      "Pinça anatómica de dissecação reta.",
      "Pinça de Adson com dentes de rato.",
      "Pinça de Michel para colocação de agrafos dérmicos."
    ],
    "correctIndex": 0,
    "explanation": "As pinças hemostáticas de Kocher, Kelly, Pean e Crile possuem duas hastes que se cruzam num parafuso central fixo (fulcro intermediário): as pegas manuais situam-se de um lado e as mandíbulas de apreensão do outro lado. Isto define rigorosamente uma alavanca de 1.ª classe (interfixa). A cremalheira na base das pegas permite travar o sistema mecânico em equilíbrio estático sob tensão elástica constante.",
    "distractorAnalysis": [
      "Está incorreta: são pinças de dissecção de lâminas flexíveis soldadas na base, sendo alavancas de 3.ª classe.",
      "Está incorreta: possui mecanismo articulado complexo multieixo adaptado para dobrar lâminas de agrafos, não se enquadrando como alavanca simples elementar clássica.",
      "Está incorreta: possui mecanismo articulado complexo multieixo adaptado para dobrar lâminas de agrafos, não se enquadrando como alavanca simples elementar clássica."
    ],
    "nursingApplication": "Ao clampar um dreno ou vaso sangrante com uma pinça de Kocher, a vantagem mecânica da alavanca de 1.ª classe concentra toda a força dos dedos na extremidade das mandíbulas, produzindo tensões compressivas suficientes para ocluir a luz vascular e assegurar hemostase imediata."
  },
  {
    "id": 2038,
    "topicId": 2,
    "question": "O silicone de grau medicinal é um dos biomateriais mais empregues em cateteres vesicais de longa duração (Foley) e drenos cirúrgicos. Do ponto de vista mecânico e biológico, qual é a propriedade distintiva do silicone?",
    "options": [
      "Baixíssimo Módulo de Young (elevada flexibilidade elástica), excelente biocompatibilidade com os tecidos mucosos e resistência prolongada à incrustação mineral e colonização bacteriana.",
      "Extrema rigidez comparável ao titânio metálico para manter o canal uretral permanentemente dilatado.",
      "Capacidade de endurecer irreversivelmente em contacto com a urina aquosa.",
      "Natureza condutora de eletricidade estática para destruir biofilmes por eletrochoque."
    ],
    "correctIndex": 0,
    "explanation": "O silicone medicinal (polidimetilsiloxano reticulado) é um elastómero com baixíssimo módulo de elasticidade (~1 a 5 MPa), o que lhe confere maciez e enorme complacência elástica. Isso minimiza o trauma mecânico por atrito e erosão sobre a mucosa da uretra e bexiga. Além disso, a sua hidrofobicidade e superfície lisa reduzem a deposição de cristais de estruvite e hidroxiapatite urinários, sendo indicado para cateterismos de até 12 semanas.",
    "distractorAnalysis": [
      "Está incorreta: causaria lacerações e estenoses severas na uretra masculina se fosse rígido como titânio.",
      "Está incorreta: descreveria uma falha gravíssima de material que impediria a remoção do cateter da bexiga.",
      "Está incorreta porque : o silicone é um excelente isolante elétrico e dielétrico."
    ],
    "nursingApplication": "Em doentes que necessitam de algaliação de longa permanência (ex: lesões medulares), o enfermeiro opta por sondas vesicais 100% silicone em detrimento de sondas de látex plastificado, reduzindo a frequência de obstruções mecânicas por incrustação e prevenindo reações anafiláticas ao látex."
  },
  {
    "id": 2039,
    "topicId": 2,
    "question": "Quando um enfermeiro utiliza um cortador de gesso mecânico manual (alicate de gesso de Stille) para retirar uma tala imobilizadora endurecida, porque é que este instrumento possui braços tão compridos e lâminas tão curtas?",
    "options": [
      "Para maximizar o braço de potência em relação ao braço de resistência (d_P >> d_R), gerando uma grande vantagem mecânica (VM >> 1) que multiplica a força manual aplicada sobre o gesso.",
      "Para permitir que o enfermeiro execute cortes a grande distância sem ver o membro do doente.",
      "Para transformar o alicate numa alavanca de 3.ª classe com ganho de velocidade.",
      "Para diminuir o peso total do instrumento metálico."
    ],
    "correctIndex": 0,
    "explanation": "O alicate de cortar gesso é uma alavanca de 1.ª classe. A Vantagem Mecânica é dada por VM = d_P / d_R. Ao fabricar o instrumento com cabos muito longos (d_P grande, ex: 30 cm) e mordentes/lâminas muito curtos (d_R pequeno, ex: 3 cm), a vantagem mecânica atinge valores de 10 ou mais. Uma força de aperto manual de 100 N exercida pelo enfermeiro traduz-se numa força cortante de 1000 N nas lâminas, superando facilmente o limite de resistência do gesso.",
    "distractorAnalysis": [
      "Está incorreta: seria uma prática perigosa e negligente; a visualização direta é obrigatória para não lacerar a pele do doente.",
      "Está incorreta: confunde as classes; o instrumento é de 1.ª classe e privilegia força, não velocidade.",
      "Está incorreta: é contrária à realidade: cabos longos de aço aumentam a massa total do alicate."
    ],
    "nursingApplication": "A aplicação do princípio da alavanca aos instrumentos manuais protege as articulações dos dedos e punhos do enfermeiro contra lesões por esforços repetitivos (LER/DORT), permitindo executar tarefas de grande demanda mecânica com esforço fisiológico controlado."
  },
  {
    "id": 2040,
    "topicId": 2,
    "question": "Durante a tração cutânea de Buck no membro inferior de um doente com fratura do colo femoral enquanto aguarda cirurgia, utiliza-se um sistema com corda, roldana (polia fixa) e peso suspenso de 3 kg. Qual é a função biofísica da roldana fixa neste circuito mecânico?",
    "options": [
      "Alterar a direção e sentido da força de tração gerada pelo peso suspenso, sem contudo alterar a sua intensidade (módulo da força).",
      "Duplicar a força peso aplicada, funcionando como uma alavanca de 2.ª classe com VM = 2.",
      "Eliminar totalmente a aceleração da gravidade sobre o membro fraturado.",
      "Reduzir o peso do contrapeso suspenso a metade do valor real."
    ],
    "correctIndex": 0,
    "explanation": "Uma roldana ou polia fixa ideal não confere vantagem mecânica de força (VM = 1): a intensidade da força de tração na corda mantém-se rigorosamente igual à intensidade da força peso do contrapeso (T = P = m · g ≈ 30 N). A sua função biomecânica exclusiva é redirecionar o vetor força: a gravidade puxa o contrapeso verticalmente para baixo, e a roldana desvia a corda para tracionar o membro horizontalmente ao longo do eixo diafisário do fémur.",
    "distractorAnalysis": [
      "Está incorreta: confunde roldana fixa com roldana móvel (que é a que divide a carga e confere VM = 2).",
      "Está incorreta: é um absurdo físico; nenhuma polia elimina o campo gravitacional terrestre.",
      "Está incorreta: confunde mais uma vez com sistemas de talha de polias móveis."
    ],
    "nursingApplication": "Na vigilância de enfermagem à tração de Buck, é vital garantir que o peso permaneça livremente suspenso no ar e que a corda deslize suavemente no sulco da roldana. Se o peso assentar no chão ou se a corda saltar da roldana, o atrito excessivo anula a tração longitudinal, originando contração espástica do fémur e dor intensa no doente."
  },
  {
    "id": 2041,
    "topicId": 2,
    "question": "O Módulo de Elasticidade Volumétrico (Bulk Modulus, K) é a grandeza mecânica que relaciona a variação de pressão hidrostática exercida sobre um corpo com a sua variação fracionária de volume. Em relação aos tecidos moles do corpo humano (músculos, vísceras e sangue) compostos maioritariamente por água líquida, o que se pode afirmar?",
    "options": [
      "Apresentam elevadíssimo Módulo Volumétrico (K ≈ 2,2 GPa), comportando-se como corpos praticamente incompressíveis quando submetidos a variações de pressão isotrópica.",
      "Apresentam Módulo Volumétrico nulo, comprimindo-se instantaneamente até a 1% do seu volume inicial com a pressão atmosférica.",
      "São muito mais compressíveis do que os gases contidos nos alvéolos pulmonares.",
      "O seu volume duplica automaticamente sempre que a pressão hidrostática aumenta."
    ],
    "correctIndex": 0,
    "explanation": "A água líquida e os tecidos moles biológicos com alto teor hídrico têm um Módulo de Compressibilidade Volumétrica (K) extremamente alto (cerca de 2,2 × 10⁹ Pa = 2,2 GPa). Isto significa que são praticamente incompressíveis: para reduzir o volume em apenas 1%, seria necessária uma pressão colossal de centenas de atmosferas. Os gases pulmonares e intestinais, em contrapartida, são altamente compressíveis.",
    "distractorAnalysis": [
      "Está incorreta: violaria as leis elementares da densidade da matéria líquida e dos tecidos vivos.",
      "Está incorreta: inverte a realidade física: os gases são ordens de magnitude mais compressíveis do que os líquidos teciduais.",
      "Está incorreta: descreveria uma expansão paradoxal sob compressão, violando a termodinâmica."
    ],
    "nursingApplication": "Esta incompressibilidade volumar dos tecidos líquidos explica a transmissão fiel e instantânea de ondas de pressão hidrostática no sistema vascular (onda de pulso arterial) e em compartimentos fechados (pressão intracraniana). Quando o enfermeiro monitoriza a PIC, qualquer acréscimo de volume dentro da calote craniana rígida faz a pressão disparar (Doutrina de Monro-Kellie)."
  },
  {
    "id": 2042,
    "topicId": 2,
    "question": "Num sistema de alavanca anatómico em equilíbrio, quando o braço de resistência (d_R) aumenta mantendo-se a carga resistente constante, o que acontece à força muscular motora (F_P) que o músculo necessita de exercer?",
    "options": [
      "A força muscular F_P tem de aumentar na mesma proporção para restabelecer a igualdade de momentos (τ_P = τ_R).",
      "A força muscular necessária diminui drasticamente, tornando o movimento mais fácil.",
      "A força muscular permanece rigorosamente constante, pois independe da distância geométrica.",
      "O momento resistente torna-se zero devido à conservação do momento angular."
    ],
    "correctIndex": 0,
    "explanation": "Pela condição de equilíbrio de rotação: F_P · d_P = F_R · d_R => F_P = (F_R · d_R) / d_P. Se o braço de resistência d_R aumentar (por exemplo, ao segurar um objeto com o braço estendido em vez de junto ao corpo) mantendo F_R e d_P fixos, o momento resistente (F_R · d_R) cresce diretamente. O músculo é obrigado a aumentar proporcionalmente a sua força F_P para não deixar cair o segmento.",
    "distractorAnalysis": [
      "Está incorreta: é um erro fatal de mecânica; afastar a carga aumenta o esforço, nunca o reduz.",
      "Está incorreta: ignora o conceito fundamental de braço de alavanca no cálculo do momento de força.",
      "Está incorreta: confunde aumento de braço com anulação de momento."
    ],
    "nursingApplication": "Este princípio é o esteio da segurança postural: ao segurar num membro de um doente pesado, quanto mais perto do corpo do enfermeiro o membro estiver assente, menor será o braço de resistência e menor o esforço muscular exigido aos membros superiores do profissional."
  },
  {
    "id": 2043,
    "topicId": 2,
    "question": "O Módulo de Cisalhamento (ou módulo de rigidez transversal, G) relaciona a tensão de corte com a deformação angular correspondente. Nos discos intervertebrais da coluna vertebral, qual é a estrutura fibrosa elástica que resiste predominantemente a estas tensões de cisalhamento e torção?",
    "options": [
      "O anel fibroso (anulus fibrosus), composto por lamelas concêntricas de fibras colagénicas orientadas obliquamente em sentidos alternados a cerca de 60°.",
      "O núcleo pulposo líquido desprovido de qualquer fibra estrutural.",
      "A medula espinhal que corre no interior do canal vertebral.",
      "O líquido cefalorraquidiano que banha a cauda equina."
    ],
    "correctIndex": 0,
    "explanation": "O anel fibroso do disco intervertebral é uma obra-prima de engenharia tecidual: é constituído por 15 a 25 lâminas concêntricas de fibras de colagénio tipo I e II. As fibras de cada lâmina estão dispostas obliquamente a cerca de 60° em relação à vertical, e a orientação inverte-se na lâmina seguinte. Esta disposição em 'rede cruzada' confere elevadíssimo módulo de cisalhamento e rigidez contra forças de torção e corte lateral durante os movimentos do tronco.",
    "distractorAnalysis": [
      "Está incorreta: descreve o núcleo pulposo, que atua como uma almofada hidrostática incompressível (resistindo à compressão vertical, mas incapaz de resistir ao cisalhamento isolado).",
      "Está incorreta: são estruturas nervosas e fluidas de condução neural e proteção hidrodinâmica, sem função mecânica de absorção de cisalhamento do disco.",
      "Está incorreta: são estruturas nervosas e fluidas de condução neural e proteção hidrodinâmica, sem função mecânica de absorção de cisalhamento do disco."
    ],
    "nursingApplication": "A alternância angular das fibras do anel fibroso suporta bem a flexão isolada, mas fica extremamente vulnerável quando a flexão lombar é combinada com rotação axial (torção). Essa combinação cria tensões de cisalhamento máximas que podem rasgar as fibras anulares, provocando a extrusão do núcleo pulposo (hérnia discal lombar)."
  },
  {
    "id": 2044,
    "topicId": 2,
    "question": "Na utilização de seringas descartáveis para administração medicamentosa, qual é a relação física entre a área do êmbolo e a força mecânica manual exigida para gerar uma determinada pressão no líquido?",
    "options": [
      "Pela definição P = F / A, para uma mesma pressão pretendida P, uma seringa de maior secção transversal (ex: 50 mL) exige uma força manual F muito maior do que uma seringa fina (ex: 1 mL).",
      "Uma seringa de 50 mL exige sempre menor força manual do que uma seringa de 1 mL para gerar a mesma pressão.",
      "A pressão exercida no fluido independe da área do êmbolo e depende exclusivamente da cor do plástico.",
      "A força exigida é inversamente proporcional à área do êmbolo ao quadrado."
    ],
    "correctIndex": 0,
    "explanation": "A pressão hidrostática é dada por P = F / A => F = P · A. Para gerar a mesma pressão no líquido (por exemplo, 100 kPa para vencer a resistência de uma cânula estenosada), quanto maior for a área A do êmbolo da seringa, maior será a força muscular manual F necessária. Pelo mesmo motivo, com uma seringa de insulina fina de 1 mL (pequeníssima área A), uma força manual modesta de 10 N gera uma pressão colossal no interior do cilindro.",
    "distractorAnalysis": [
      "Está incorreta: inverte a relação matemática fundamental F = P · A.",
      "Está incorreta: ignora o Princípio de Pascal e a definição de pressão mecânica.",
      "Está incorreta: inventa uma dependência quadrática incorreta."
    ],
    "nursingApplication": "Na desobstrução de cateteres venosos centrais (PICC ou cateter totalmente implantado / Port-a-Cath), NUNCA se deve utilizar seringas de pequeno calibre (como 1 mL ou 3 mL). A pequeníssima área do êmbolo gera pressões hidrostáticas brutais (acima de 200 psi) com facilidade na mão do enfermeiro, que podem romper o cateter no interior da veia do doente. As normas de enfermagem exigem o uso exclusivo de seringas de 10 mL ou superior."
  },
  {
    "id": 2045,
    "topicId": 2,
    "question": "O tecido ósseo é classicamente descrito em biomecânica como um material 'Anisótropo'. O que significa esta propriedade mecânica fundamental?",
    "options": [
      "Que as suas propriedades mecânicas (como o Módulo de Young e a resistência à rotura) variam conforme a direção da força aplicada (longitudinal vs transversal).",
      "Que o osso tem rigorosamente o mesmo comportamento e rigidez em todas as direções espaciais possíveis.",
      "Que o osso é totalmente incapaz de sofrer remodelação celular na presença de carga.",
      "Que o osso se deforma unicamente na presença de campos magnéticos estáticos."
    ],
    "correctIndex": 0,
    "explanation": "Um material isotrópico possui propriedades mecânicas idênticas em qualquer direção (como o vidro ou o aço sem grão). O osso, contudo, é ANISÓTROPO: a orientação longitudinal dos ósteons e das fibras de colagénio confere-lhe um Módulo de Young e uma tensão de rotura muito maiores no sentido longitudinal (ao longo da diáfise, onde E ≈ 18 GPa) do que no sentido transversal/perpendicular (onde E ≈ 10 GPa).",
    "distractorAnalysis": [
      "Está incorreta: descreve a isotropia mecânica pura.",
      "Está incorreta: confunde anisotropia elástica com ausência de biologia celular e Lei de Wolff.",
      "Está incorreta: confunde mecânica de materiais com diamagnetismo."
    ],
    "nursingApplication": "A anisotropia do osso explica por que o fémur suporta cargas imensas na vertical durante a corrida, mas quebra facilmente com impactos transversais perpendiculares (por exemplo, na batida lateral da anca contra o chão numa queda ou no painel de um automóvel num acidente de trânsito)."
  },
  {
    "id": 2046,
    "topicId": 2,
    "question": "Um dreno cirúrgico com reservatório de vácuo tipo Jackson-Pratt ou Redon aproveita as propriedades elásticas de que componente para gerar pressão negativa e aspirar exsudados?",
    "options": [
      "Da parede de silicone ou polietileno do bulbo/fole que, após ser manualmente comprimida (deformação plástica/elástica) e fechada, tenta recuperar a sua forma esférica inicial por memória elástica, gerando subpressão interna contínua.",
      "De um motor elétrico a bateria miniaturizado acoplado ao tubo.",
      "De uma reação química endotérmica que queima o ar dentro do frasco.",
      "Da força gravitacional exercida exclusivamente pela posição dos pés do doente."
    ],
    "correctIndex": 0,
    "explanation": "O dreno de vácuo ativo tipo bulbo (Jackson-Pratt) ou fole (Redon) utiliza a elasticidade intrínseca do polímero: o enfermeiro comprime manualmente o reservatório esvaziando o ar e coloca a tampa de vedação. A energia de deformação elástica armazenada na parede tenta forçar a expansão do bulbo de volta ao seu volume de repouso; como está vedado, essa tendência expansiva cria uma pressão interna inferior à atmosférica (vácuo parcial de -50 a -150 mmHg), aspirando fluidos do leito cirúrgico.",
    "distractorAnalysis": [
      "Está incorreta porque ; estes sistemas clássicos de drenagem cirúrgica pós-operatória são mecânicos passivos sem motores elétricos.",
      "Está incorreta porque ; nenhuma combustão ou reação química exotérmica/endotérmica ocorre no frasco.",
      "Está incorreta: descreve a drenagem postural gravitacional simples (como os drenos de Penrose ou sacos coletores por gravidade), não a aspiração ativa por vácuo elástico."
    ],
    "nursingApplication": "Na manutenção de drenos cirúrgicos após mastectomias ou cirurgias ortopédicas, o enfermeiro deve esvaziar regularmente o exsudado acumulado e voltar a comprimir o bulbo antes de fechar o tampão. Se o bulbo ficar cheio de ar ou líquido, a parede elástica atinge a sua forma de repouso, cessando a sucção e favorecendo a formação de seromas e hematomas na ferida."
  },
  {
    "id": 2047,
    "topicId": 2,
    "question": "Qual das seguintes relações mecânicas quantifica a Vantagem Mecânica (VM) em qualquer alavanca em estado de equilíbrio estático sem atrito?",
    "options": [
      "VM = F_R / F_P = d_P / d_R",
      "VM = F_P · F_R · d_P · d_R",
      "VM = d_R / (F_P · g)",
      "VM = (F_P - F_R) / (d_P + d_R)"
    ],
    "correctIndex": 0,
    "explanation": "Por definição, a vantagem mecânica real é a razão entre a carga resistente superada e a força motora aplicada: VM = F_R / F_P. No equilíbrio de momentos (F_P · d_P = F_R · d_R), dividindo ambos os lados por F_P e por d_R, obtém-se rigorosamente a igualdade com a vantagem mecânica ideal baseada na geometria: VM = d_P / d_R.",
    "distractorAnalysis": [
      "Está incorreta: multiplica grandezas arbitrariamente, gerando unidades inconsistentes de N²·m².",
      "Está incorreta: mistura comprimentos e forças no denominador sem fundamentação dimensional.",
      "Está incorreta: propõe uma diferença de forças dividida por soma de distâncias sem sentido físico."
    ],
    "nursingApplication": "Esta fórmula permite ao enfermeiro avaliar rapidamente a eficiência de ferramentas manuais ou compreender por que aproximar o doente do seu próprio tronco reduz o braço de resistência d_R, diminuindo a força F_P exigida da musculatura do profissional para manter o membro em equilíbrio."
  },
  {
    "id": 2048,
    "topicId": 2,
    "question": "O conceito de 'Limite de Proporcionalidade' na curva de tração de um material refere-se ao ponto exato:",
    "options": [
      "Até ao qual a tensão mecânica é rigorosamente linear e diretamente proporcional à deformação relativa, cessando a validade estrita da Lei de Hooke para além dele.",
      "Onde o material se funde e passa do estado sólido ao estado gasoso.",
      "Onde a deformação plástica atinge 100% do volume original.",
      "Onde a densidade do material duplica devido ao atrito quântico."
    ],
    "correctIndex": 0,
    "explanation": "Na curva tensão-deformação, a primeira região é uma linha reta perfeita que parte da origem. O ponto mais alto dessa reta é o Limite de Proporcionalidade: até aí, a Lei de Hooke (σ = E · ε) aplica-se com precisão matemática absoluta. Imediatamente acima deste ponto, a curva pode ainda apresentar comportamento elástico reversível por um pequeno intervalo (até ao limite de elasticidade), mas a relação deixa de ser estritamente linear.",
    "distractorAnalysis": [
      "Está incorreta: confunde mecânica dos sólidos com transições térmicas de estado físico.",
      "Está incorreta: é absurda, pois 100% de deformação plástica só ocorre em polímeros de altíssima ductilidade próximo da rotura.",
      "Está incorreta: inventa conceitos quânticos desprovidos de base física no ensaio de tração."
    ],
    "nursingApplication": "Em aparelhos de tracção ou balanças mecânicas pediátricas de mola, a mola interna deve operar sempre estritamente abaixo do seu limite de proporcionalidade. Se uma sobrecarga pontual ultrapassar esse patamar, a calibração do instrumento fica irremediavelmente viciada, conduzindo a erros de pesagem de doentes."
  },
  {
    "id": 2049,
    "topicId": 2,
    "question": "Nas talas de imobilização ortopédica de fibra de vidro (resinas de poliuretano impregnadas em malha tricotada), o que ocorre durante o processo de presa que altera radicalmente o seu Módulo de Young?",
    "options": [
      "Ocorre uma reação química exotérmica de polimerização que reticula as cadeias poliméricas na presença de água, elevando o Módulo de Young de valores muito baixos (tecido maleável) para valores de vários GPa (sólido extremamente rígido).",
      "Ocorre evaporação total de todos os átomos de oxigénio da matriz de carbono.",
      "A fita transforma-se num fluido hiperbárico incompressível.",
      "O material torna-se magnético e atrai a hemoglobina do sangue da fratura."
    ],
    "correctIndex": 0,
    "explanation": "A fita de fibra de vidro para gesso ortopédico vem embalada a vácuo em estado complacente e maleável (baixo módulo elástico). Ao ser mergulhada em água, a humidade catalisa uma polimerização exotérmica das resinas de poliuretano que une quimicamente as fibras de vidro numa malha tridimensional sólida e rígida. Em cerca de 3 a 5 minutos, o Módulo de Young atinge a rigidez final, garantindo a imobilização anatómica da articulação.",
    "distractorAnalysis": [
      "Está incorreta: é fisicamente impossível sob condições de temperatura e pressão ambientes de uma enfermaria.",
      "Está incorreta: confunde um polímero rígido consolidado com fluidos sob pressão.",
      "Está incorreta: é uma afirmação fantasiosa sem qualquer base fisiológica ou biofísica."
    ],
    "nursingApplication": "O enfermeiro que aplica ou auxilia na confeção de talas sintéticas de fibra de vidro sabe que deve modelar a tala rigorosamente antes de a reação de polimerização endurecer o material. Além disso, devido ao caráter exotérmico da reação que liberta calor sensível, a água de imersão não deve ser excessivamente quente para evitar queimaduras térmicas na pele do doente."
  },
  {
    "id": 2050,
    "topicId": 2,
    "question": "Um carrinho de emergência médica (carrinho de paragem) com massa de 80 kg está parado num piso horizontal. Sabendo que o coeficiente de atrito estático entre as rodas e o piso é μ_e = 0,25, qual é a força horizontal mínima F que o enfermeiro tem de aplicar para iniciar o movimento do carrinho (adotando g = 9,8 m/s²)?",
    "options": [
      "196 N",
      "80 N",
      "20 N",
      "784 N"
    ],
    "correctIndex": 0,
    "explanation": "A força de atrito estático máxima que impede o início do movimento é dada por F_atrito = μ_e · N. Como o piso é horizontal e não há outras forças verticais, a força normal é igual ao peso: N = P = m · g = 80 kg × 9,8 m/s² = 784 N. Calculando a força mínima para romper o atrito: F = 0,25 × 784 N = 196 N (aproximadamente o esforço muscular de sustentar 20 kg no ar).",
    "distractorAnalysis": [
      "Está incorreta: (80 N) confunde a massa em kg com o valor da força em Newtons.",
      "Está incorreta: (20 N) multiplica erroneamente o coeficiente de atrito pela massa sem incluir a aceleração da gravidade (0,25 × 80).",
      "Está incorreta: (784 N) é o peso vertical total do carrinho, e não a força de atrito horizontal a ser superada."
    ],
    "nursingApplication": "Em situações de paragem cardiorrespiratória (PCR), cada segundo conta. Se as rodas do carrinho de paragem estiverem travadas ou se o diâmetro das rodas for demasiado pequeno (elevado atrito ao rolamento e irregularidades no solo), a força exigida do enfermeiro para acelerar o equipamento pode atrasar o transporte do desfibrilhador até ao leito do doente."
  },
  {
    "id": 2051,
    "topicId": 2,
    "question": "O Momento de uma Força (ou Torque, τ) em relação a um eixo de rotação articular é definido fisicamente pelo produto:",
    "options": [
      "τ = F · d · sen(θ), onde F é o módulo da força, d é a distância do ponto de aplicação ao eixo (braço de alavanca) e θ é o ângulo entre a linha de força e o braço.",
      "τ = m · v², produto da massa pela velocidade ao quadrado.",
      "τ = P / A, força dividida pela área.",
      "τ = F / t, força dividida pelo tempo."
    ],
    "correctIndex": 0,
    "explanation": "O torque quantifica a tendência de uma força para produzir rotação em torno de um ponto de apoio (fulcro). A sua intensidade máxima ocorre quando a força é perpendicular ao braço de alavanca (θ = 90°, sen 90° = 1), sendo expresso em Newton-metro (N·m) no SI.",
    "distractorAnalysis": [
      "Está incorreta: é a ordem de grandeza da energia cinética (½ m v²).",
      "Está incorreta: é a definição de pressão mecânica em Pascal.",
      "Está incorreta: é a taxa temporal de variação de força."
    ],
    "nursingApplication": "Ao mobilizar passivamente o membro de um doente com contraturas espásticas, segurar o membro na extremidade distal (maior braço d) permite ao enfermeiro aplicar um torque articular eficaz com mínimo esforço muscular manual."
  },
  {
    "id": 2052,
    "topicId": 2,
    "question": "Qual é a unidade oficial do Sistema Internacional (SI) para medir o Momento de uma Força (Torque)?",
    "options": [
      "Newton-metro (N·m)",
      "Joule por segundo (J/s)",
      "Pascal (Pa)",
      "Newton por metro quadrado (N/m²)"
    ],
    "correctIndex": 0,
    "explanation": "Como o torque resulta do produto de uma força (Newton) por uma distância de braço de alavanca (metro), a sua unidade dimensional é o Newton-metro (N·m). Embora dimensionalmente equivalente ao Joule, por convenção física reserva-se o N·m para grandezas vetoriais rotacionais e o Joule para energia escalar.",
    "distractorAnalysis": [
      "Está incorreta: (J/s) corresponde a Watt (unidade de potência).",
      "Está incorreta: são unidades de pressão e tensão mecânica.",
      "Está incorreta: são unidades de pressão e tensão mecânica."
    ],
    "nursingApplication": "Manuais de aparelhos cirúrgicos e camas articuladas motorizadas especificam os limites de torque dos motores em N·m; respeitar estes limites evita a queima dos motores elétricos ao elevar doentes com sobrepeso."
  },
  {
    "id": 2053,
    "topicId": 2,
    "question": "Para que um segmento corporal ou um instrumento cirúrgico em forma de alavanca permaneça em equilíbrio rotacional estático (sem rodar), a condição física indispensável é:",
    "options": [
      "A soma algébrica de todos os momentos de força em relação a qualquer ponto de rotação tem de ser rigorosamente nula (∑τ = 0).",
      "O braço de potência tem de ser obrigatoriamente igual a zero.",
      "A força resistente tem de ser o triplo da força potente.",
      "A velocidade angular tem de ser máxima e constante."
    ],
    "correctIndex": 0,
    "explanation": "A 2.ª condição de equilíbrio estático estabelece que o somatório dos torques no sentido horário tem de igualar exatamente o somatório dos torques no sentido anti-horário: ∑τ_horário = ∑τ_anti-horário, o que equivale a ∑τ = 0.",
    "distractorAnalysis": [
      "Está incorreta: impediria a existência de qualquer torque motriz.",
      "Está incorreta: causaria rotação acelerada no sentido da resistência.",
      "Está incorreta: descreve equilíbrio rotacional dinâmico, não estático em repouso."
    ],
    "nursingApplication": "Ao ajustar a posição de um membro fraturado mantido numa calha de Braun com tração contínua, o enfermeiro equilibra os momentos de força dos pesos para que o membro repouse estável sem rodar lateralmente."
  },
  {
    "id": 2054,
    "topicId": 2,
    "question": "Um enfermeiro aplica uma força perpendicular de 20 N na extremidade da pega de uma manivela de regulação de altura de uma cama hospitalar, a uma distância de 0,25 metros do eixo de rotação. Qual é o torque gerado na manivela?",
    "options": [
      "5 N·m",
      "80 N·m",
      "0,0125 N·m",
      "50 N·m"
    ],
    "correctIndex": 0,
    "explanation": "Como a força é perpendicular (θ = 90°, sen 90° = 1), o torque é calculado diretamente por τ = F · d = 20 N × 0,25 m = 5 N·m.",
    "distractorAnalysis": [
      "Está incorreta: (80 N·m) divide erradamente a força pela distância (20 / 0,25).",
      "Está incorreta: (0,0125 N·m) divide a distância pela força.",
      "Está incorreta: multiplica por 2,5 em vez de 0,25."
    ],
    "nursingApplication": "Compreender que o torque aumenta com o comprimento da pega da manivela elucida por que razão alavancas compridas facilitam a rotação de estrados mecânicos em camas manuais em caso de falha de energia elétrica."
  },
  {
    "id": 2055,
    "topicId": 2,
    "question": "O que acontece ao torque gerado por uma força muscular se a linha de ação da força passar exatamente PELO CENTRO do eixo articular de rotação (braço de alavanca d = 0)?",
    "options": [
      "O torque é rigorosamente zero (τ = 0), sendo a força totalmente ineficaz para produzir rotação articular, gerando apenas compressão ou tração pura na articulação.",
      "O torque atinge o valor máximo infinito.",
      "A articulação roda a uma velocidade constante de 100 rad/s.",
      "O músculo rompe imediatamente."
    ],
    "correctIndex": 0,
    "explanation": "Pela fórmula τ = F · d · sen θ, se a distância d entre a linha de ação da força e o centro de rotação for nula (d = 0), o torque é nulo: τ = F · 0 = 0. A força passa pelo fulcro e atua exclusivamente como força de estabilização articular (compressão ou distração), sem qualquer componente de rotação.",
    "distractorAnalysis": [
      "Está incorreta: viola a multiplicação direta por zero.",
      "Está incorreta: exigiria um torque acelerador não-nulo.",
      "Está incorreta: não tem base fisiológica em contrações isométricas normais."
    ],
    "nursingApplication": "Na reabilitação articular pós-cirúrgica, o enfermeiro sabe que em certos ângulos articulares os tendões aplicam forças quase puramente estabilizadoras na cavidade glenoideia ou cotilóideia, protegendo a prótese recém-implantada."
  },
  {
    "id": 2056,
    "topicId": 2,
    "question": "Um corta-gesso ortopédico manual possui lâminas curtas de 3 cm (d_R = 0,03 m) e cabos longos de 30 cm (d_P = 0,30 m). Se o enfermeiro aplicar uma força manual de 50 N nas pegas dos cabos, que força de corte é exercida sobre a ligadura gessada rígida?",
    "options": [
      "500 N",
      "5 N",
      "50 N",
      "150 N"
    ],
    "correctIndex": 0,
    "explanation": "Numa alavanca em equilíbrio rotacional, F_P · d_P = F_R · d_R ⇒ F_R = F_P · (d_P / d_R). A relação d_P / d_R = 30 / 3 = 10 (Vantagem Mecânica = 10). Logo, F_R = 50 N × 10 = 500 N. A força é multiplicada 10 vezes pelas mandíbulas de corte.",
    "distractorAnalysis": [
      "Está incorreta: dividiria a força em vez de multiplicar (50 / 10).",
      "Está incorreta: consideraria uma vantagem mecânica unitária sem efeito de alavanca.",
      "Está incorreta: é um cálculo incoerente."
    ],
    "nursingApplication": "A vantagem mecânica de 10 do corta-gesso permite ao enfermeiro cortar com segurança ligaduras espessas de resina ou gesso sem fadiga na mão, aplicando apenas moderada força de preensão manual."
  },
  {
    "id": 2057,
    "topicId": 2,
    "question": "Dois pesos são colocados numa barra equilibrada em torno de um fulcro central: uma massa m₁ = 10 kg está a uma distância d₁ = 0,5 m à esquerda do apoio. A que distância d₂ à direita do apoio deve ser colocada uma massa m₂ = 5 kg para restabelecer o equilíbrio horizontal?",
    "options": [
      "d₂ = 1,0 metro.",
      "d₂ = 0,25 metros.",
      "d₂ = 0,5 metros.",
      "d₂ = 2,0 metros."
    ],
    "correctIndex": 0,
    "explanation": "Para haver equilíbrio de momentos: P₁ · d₁ = P₂ · d₂ ⇒ (m₁ · g) · d₁ = (m₂ · g) · d₂. Como g cancela: 10 kg × 0,5 m = 5 kg × d₂ ⇒ 5 = 5 · d₂ ⇒ d₂ = 1,0 m. A massa mais leve precisa do dobro da distância para gerar o mesmo torque.",
    "distractorAnalysis": [
      "Está incorreta: (0,25 m) colocaria a massa menor ainda mais próxima, agravando o desequilíbrio.",
      "Está incorreta: só equilibraria se as massas fossem iguais.",
      "Está incorreta: quadruplicaria o torque do lado direito."
    ],
    "nursingApplication": "Este cálculo fundamenta o funcionamento das balanças mecânicas hospitalares de peso com cursor deslizante: pequenos pesos metálicos equilibram a massa de doentes pesados deslocando-se ao longo da escala graduada."
  },
  {
    "id": 2058,
    "topicId": 2,
    "question": "Quando a articulação do cotovelo é fletida a 90°, o ângulo de inserção do tendão do bicípite braquial no rádio é muito próximo de 90° (sen 90° = 1). O que sucede à eficiência rotacional do músculo bicípite neste ângulo?",
    "options": [
      "É MÁXIMA, porque todo o vetor da força muscular é perpendicular ao rádio, convertendo 100% da tensão muscular em torque de rotação flexora da articulação.",
      "É mínima, porque o tendão relaxa totalmente a 90°.",
      "O torque é zero porque o braço e o antebraço se anulam mutuamente.",
      "A articulação desloca-se espontaneamente para fora da cápsula."
    ],
    "correctIndex": 0,
    "explanation": "Como τ = F · d · sen θ, quando θ = 90°, sen θ = 1,0 (valor máximo da função seno). Em ângulos mais abertos (ex: 170° com braço estendido) ou mais fechados (30°), sen θ é pequeno e a maior parte da força muscular atua como força compressiva articular, perdendo eficácia rotacional.",
    "distractorAnalysis": [
      "Está incorreta: confunde pico de eficiência mecânica com relaxamento.",
      "Está incorreta: nega a trigonometria do torque articular.",
      "Está incorreta: descreve luxação incompatível com a fisiologia articular sadia."
    ],
    "nursingApplication": "Ao testar a força motora dos membros superiores na avaliação neurológica de enfermagem (Escala de Força do Medical Research Council - MRC), o cotovelo é posicionado a 90° para testar a potência muscular no seu ponto de máxima vantagem mecânica."
  },
  {
    "id": 2059,
    "topicId": 2,
    "question": "Se um músculo esquelético aplicar uma força de 300 N num tendão inserido a 4 cm (0,04 m) do eixo da articulação com um ângulo de 30° (sen 30° = 0,5), qual é o torque rotacional produzido?",
    "options": [
      "6 N·m",
      "12 N·m",
      "24 N·m",
      "600 N·m"
    ],
    "correctIndex": 0,
    "explanation": "Calculando pelo produto trigonométrico: τ = F · d · sen(θ) = 300 N × 0,04 m × 0,5 = 12 × 0,5 = 6 N·m. Dos 300 N gerados pelo músculo, metade dissipa-se em tração articular e apenas 6 N·m realizam trabalho rotacional.",
    "distractorAnalysis": [
      "Está incorreta: (12 N·m) esqueceria o ângulo de 30° (considerando sen θ = 1).",
      "Está incorreta: cometem erros grosseiros de cálculo e conversão métrica de centímetros para metros.",
      "Está incorreta: cometem erros grosseiros de cálculo e conversão métrica de centímetros para metros."
    ],
    "nursingApplication": "Este cálculo elucida o enfermeiro de reabilitação sobre por que motivo os doentes sentem mais facilidade em manter contrações musculares em determinados ângulos articulares específicos durante a fisioterapia."
  },
  {
    "id": 2060,
    "topicId": 2,
    "question": "Um binário de forças (ou casal de forças) é definido na mecânica como um par de forças que:",
    "options": [
      "Têm intensidades iguais, linhas de ação paralelas diferentes e sentidos estritamente opostos, produzindo rotação pura sem translação (∑F = 0 e ∑τ ≠ 0).",
      "Têm a mesma direção e mesmo sentido, acelerando o corpo para a frente.",
      "Atuam em ângulo reto gerando força centrípeta pura.",
      "Anulam o peso e a massa de qualquer corpo."
    ],
    "correctIndex": 0,
    "explanation": "Num binário de forças, a resultante translacional é nula (F - F = 0), mas como não atuam na mesma reta suporte, os seus momentos somam-se: τ_binário = F · d_separação. O efeito mecânico de um binário é produzir rotação pura em torno do centro de massa.",
    "distractorAnalysis": [
      "Está incorreta: descreve forças paralelas unidirecionais que produzem translação acelerada.",
      "Está incorreta: descreve forças ortogonais.",
      "Está incorreta: é uma impossibilidade física."
    ],
    "nursingApplication": "O movimento de rodar uma torneira de oxigénio medicinal, abrir um frasco estéril de medicamento ou desatarraxar uma tampa de cateter de três vias com o polegar e indicador é a aplicação clássica de um binário de forças em enfermagem."
  },
  {
    "id": 2061,
    "topicId": 2,
    "question": "O momento de inércia rotacional (I) de um segmento corporal em torno de um eixo articular depende da distribuição da sua massa em relação ao eixo (I = ∑ m_i · r_i²). Dobrar a distância r de uma massa ao eixo faz o seu momento de inércia aumentar:",
    "options": [
      "4 vezes (aumento com o quadrado da distância).",
      "2 vezes (aumento linear).",
      "8 vezes (ao cubo).",
      "Permanece inalterado."
    ],
    "correctIndex": 0,
    "explanation": "O momento de inércia depende quadraticamente da distância ao eixo de rotação: I ∝ r². Se a distância duplica (2r), o momento de inércia quadruplica: (2r)² = 4r². Quanto mais afastada estiver a massa do fulcro, mais difícil é acelerar ou travar a rotação.",
    "distractorAnalysis": [
      "Está incorreta: confunde dependência quadrática com linear.",
      "Está incorreta: confunde com dependência cúbica.",
      "Está incorreta: ignora a geometria rotacional newtoniana."
    ],
    "nursingApplication": "Ao mobilizar a perna estendida de um doente pesado, o enfermeiro flete o joelho do doente: flexionar a perna aproxima a massa do pé do eixo da anca (reduz r), diminuindo dramaticamente o momento de inércia e tornando a manobra muito mais leve e segura."
  },
  {
    "id": 2062,
    "topicId": 2,
    "question": "Numa pinça hemostática tipo Kocher de 16 cm, o eixo central (parafuso) atua como fulcro. Se o enfermeiro aplicar 20 N nas argolas a 12 cm do eixo, qual é o torque transmitido às mandíbulas de preensão?",
    "options": [
      "τ = 20 N × 0,12 m = 2,4 N·m.",
      "τ = 20 N × 16 m = 320 N·m.",
      "τ = 0 N·m.",
      "τ = 1,67 N·m."
    ],
    "correctIndex": 0,
    "explanation": "O torque de potência gerado pela mão do enfermeiro é o produto da força aplicada pelo braço de potência em metros: τ = 20 N × 0,12 m = 2,4 N·m. Esse mesmo torque é transmitido às mandíbulas que prendem o vaso sanguíneo.",
    "distractorAnalysis": [
      "Está incorreta: comete o erro de não converter centímetros para metros.",
      "Está incorreta: anularia a capacidade de preensão do instrumento.",
      "Está incorreta: divide a força pelo comprimento."
    ],
    "nursingApplication": "O desenho ergonómico das pinças cirúrgicas hemostáticas assegura que um torque de 2,4 N·m se concentra numa ponta de lâmina muito curta (ex: 3 cm), gerando forças oclusivas elevadas que esmagam o vaso sangrante e estabelecem hemostase imediata."
  },
  {
    "id": 2063,
    "topicId": 2,
    "question": "A articulação têmporo-mandibular (ATM) e a mastigação humana funcionam como uma alavanca. Quando mordemos com os dentes molares posteriores (mais próximos da ATM) em vez dos incisivos anteriores, a força mastigatória de esmagamento é:",
    "options": [
      "MUITO MAIOR nos molares, porque o braço de resistência d_R é muito mais curto, aumentando a vantagem mecânica da musculatura mastigatória (masséter e temporal).",
      "Muito menor nos molares devido ao número de raízes dentárias.",
      "Rigorosamente igual em todos os dentes da arcada dentária.",
      "Nula porque os dentes não possuem nervos motores."
    ],
    "correctIndex": 0,
    "explanation": "A mandíbula funciona como alavanca de 3.ª classe com o fulcro na ATM. Como os molares estão mais perto da ATM do que os incisivos (menor braço resistente d_R), a força resistente que a mandíbula consegue vencer é substancialmente superior (F_R = F_P · d_P / d_R).",
    "distractorAnalysis": [
      "Está incorreta: inverte o efeito da redução do braço resistente.",
      "Está incorreta: ignora a variação do braço de alavanca ao longo da mandíbula.",
      "Está incorreta: é uma afirmação anatomicamente incorreta."
    ],
    "nursingApplication": "Em doentes idosos desdentados parciais sem molares posteriores, o enfermeiro adapta a consistência da dieta (dieta triturada ou pastosa), pois os dentes anteriores não geram torque mastigatório suficiente para desintegrar carnes e fibras duras, prevenindo engasgamentos e asfixia por bolo alimentar."
  },
  {
    "id": 2064,
    "topicId": 2,
    "question": "Quando uma força tem uma linha de ação que forma um ângulo de 180° com o braço de alavanca (força puxa na direção oposta ao fulcro, em linha reta), o torque produzido é:",
    "options": [
      "Exatamente 0 N·m (porque sen 180° = 0).",
      "Máximo positivo.",
      "Infinito negativo.",
      "Igual ao peso do corpo dividido por π."
    ],
    "correctIndex": 0,
    "explanation": "Como sen(180°) = 0, a fórmula τ = F · d · sen(180°) resulta rigorosamente em zero. A força puxa axialmente a haste para fora do eixo, provocando apenas tração mecânica do pino sem qualquer rotação.",
    "distractorAnalysis": [
      "Está incorreta: ignoram o valor trigonométrico nulo do seno de 180 graus.",
      "Está incorreta: ignoram o valor trigonométrico nulo do seno de 180 graus.",
      "Está incorreta: ignoram o valor trigonométrico nulo do seno de 180 graus."
    ],
    "nursingApplication": "Ao tracionar um membro em alinhamento ortopédico estrito (ângulo de 180°), o enfermeiro sabe que a força de tração atua puramente no sentido longitudinal sem induzir desvios rotacionais indesejados no foco da fratura."
  },
  {
    "id": 2065,
    "topicId": 2,
    "question": "O 'braço de momento' (ou braço da força, d_perpendicular) é geometricamente definido como:",
    "options": [
      "A distância perpendicular mais curta medida entre o eixo de rotação e a linha de ação da força.",
      "O comprimento total do osso onde o músculo se insere.",
      "A distância entre o coração e a mão do doente.",
      "A espessura da cápsula articular sinovial."
    ],
    "correctIndex": 0,
    "explanation": "O braço de momento d_perp = d · sen(θ) é o segmento perpendicular baixado desde o fulcro até à reta suporte da força. Permite calcular o torque de forma simplificada: τ = F · d_perp.",
    "distractorAnalysis": [
      "Está incorreta: confunde comprimento anatómico bruto com braço perpendicular trigonométrico.",
      "Está incorreta: não têm correlação geométrica com o torque.",
      "Está incorreta: não têm correlação geométrica com o torque."
    ],
    "nursingApplication": "A biomecânica moderna utiliza o conceito de braço de momento para modelar cirurgias ortopédicas de transferência tendinosa, permitindo ao enfermeiro especialista antecipar o ganho funcional motor do doente no pós-operatório."
  },
  {
    "id": 2066,
    "topicId": 2,
    "question": "A Vantagem Mecânica (VM) de uma alavanca é quantificada pela razão entre:",
    "options": [
      "O braço de potência e o braço de resistência (VM = d_P / d_R = F_R / F_P em equilíbrio).",
      "A energia cinética e a energia potencial gravítica.",
      "A massa do músculo e o comprimento do osso.",
      "A pressão arterial sistólica e a pressão arterial diastólica."
    ],
    "correctIndex": 0,
    "explanation": "A vantagem mecânica ideal exprime o fator pelo qual uma máquina simples multiplica a força aplicada: VM = d_P / d_R. Se d_P > d_R, a VM > 1 (ganho de força); se d_P < d_R, a VM < 1 (desvantagem de força, mas ganho de velocidade e amplitude angular).",
    "distractorAnalysis": [
      "Está incorreta: confundem o rácio mecânico de alavancas com variáveis energéticas, anatómicas ou cardiovasculares.",
      "Está incorreta: confundem o rácio mecânico de alavancas com variáveis energéticas, anatómicas ou cardiovasculares.",
      "Está incorreta: confundem o rácio mecânico de alavancas com variáveis energéticas, anatómicas ou cardiovasculares."
    ],
    "nursingApplication": "O conhecimento da vantagem mecânica permite ao enfermeiro selecionar alicates e tesouras com cabos compridos e mandíbulas curtas quando precisa de cortar fios cirúrgicos ou talas duras com mínimo esforço da mão."
  },
  {
    "id": 2067,
    "topicId": 2,
    "question": "Quando uma alavanca possui Vantagem Mecânica menor do que 1 (VM < 1), como sucede na maioria das articulações do corpo humano, que benefício biomecânico compensatório é obtido?",
    "options": [
      "Grande ganho em amplitude de movimento e velocidade na extremidade do membro (um pequeno encurtamento do músculo produz um deslocamento amplo e rápido da mão ou do pé).",
      "Economia total de energia metabólica de ATP.",
      "Imunidade completa contra fraturas ósseas.",
      "Multiplicação da força do peso por dez."
    ],
    "correctIndex": 0,
    "explanation": "Pelo princípio da conservação da energia e do trabalho mecânico (W = F · d), se o braço de potência é menor que o de resistência (d_P < d_R), o músculo tem de gerar forças muito superiores ao peso sustentado (VM < 1), mas ganha em amplitude geométrica: uma pequena contração de 1 cm do bicípite faz a mão deslocar-se 8 a 10 cm com alta velocidade.",
    "distractorAnalysis": [
      "Está incorreta porque ; VM < 1 exige maior consumo de ATP pelo músculo para gerar forças elevadas.",
      "Está incorreta: são alegações sem fundamento físico.",
      "Está incorreta: são alegações sem fundamento físico."
    ],
    "nursingApplication": "Compreender que o corpo humano é otimizado para velocidade e amplitude (e não para força bruta) explica por que razão os tendões musculares suportam tensões internas de centenas de Newtons para segurar pesos modestos na mão do doente."
  },
  {
    "id": 2068,
    "topicId": 2,
    "question": "Se uma ferramenta cirúrgica tiver braço de potência de 20 cm e braço de resistência de 4 cm, qual é a sua Vantagem Mecânica teórica?",
    "options": [
      "VM = 5 (multiplica a força da mão por 5 vezes).",
      "VM = 0,2 (reduz a força para um quinto).",
      "VM = 80.",
      "VM = 16."
    ],
    "correctIndex": 0,
    "explanation": "Calculando a vantagem mecânica: VM = d_P / d_R = 20 cm / 4 cm = 5. Isto significa que uma força manual de 10 N aplicada pelo operador gera uma força de corte ou compressão de 50 N na extremidade resistente.",
    "distractorAnalysis": [
      "Está incorreta: (0,2) inverte a fração dividindo d_R por d_P.",
      "Está incorreta: multiplica os comprimentos (20 × 4).",
      "Está incorreta: subtrai os comprimentos (20 - 4)."
    ],
    "nursingApplication": "Em procedimentos de emergência para remoção de anéis encravados em dedos edemaciados, os corta-anéis com VM entre 5 e 8 permitem ao enfermeiro cortar aros de ouro ou titânio com segurança sem lesionar o dedo isquemiado."
  },
  {
    "id": 2069,
    "topicId": 2,
    "question": "Um instrumento de alavanca com VM = 1 (Vantagem Mecânica unitária) caracteriza-se por:",
    "options": [
      "Ter o braço de potência exatamente igual ao braço de resistência (d_P = d_R), não alterando a magnitude da força, mas podendo alterar a direção ou o sentido de aplicação.",
      "Eliminar completamente o atrito com o ar.",
      "Multiplicar a força motora por infinito.",
      "Parar instantaneamente qualquer movimento."
    ],
    "correctIndex": 0,
    "explanation": "Quando d_P = d_R, a VM = 1: a força potente tem exatamente o mesmo módulo da força resistente (F_P = F_R). A sua utilidade mecânica reside em transferir a força para um ponto anatómico distante ou inverter o sentido de atuação.",
    "distractorAnalysis": [
      "Está incorreta: são propriedades irreais sem cabimento na teoria das alavancas.",
      "Está incorreta: são propriedades irreais sem cabimento na teoria das alavancas.",
      "Está incorreta: são propriedades irreais sem cabimento na teoria das alavancas."
    ],
    "nursingApplication": "Determinadas pinças de preensão direta e roldanas fixas simples possuem VM = 1: facilitam o acesso visual do cirurgião e do enfermeiro instrumentista em cavidades profundas mantendo a precisão tátil 1:1."
  },
  {
    "id": 2070,
    "topicId": 2,
    "question": "A Lei da Conservação do Trabalho Mecânico aplicada às alavancas ideais (sem atrito) dita que o produto da força pelo deslocamento é constante (F_P · Δs_P = F_R · Δs_R). Isto implica que:",
    "options": [
      "O que se ganha em força perde-se obrigatoriamente em deslocamento (distância percorrida), e vice-versa.",
      "Uma alavanca consegue criar energia mecânica a partir do vácuo.",
      "A massa da alavanca desaparece durante o uso.",
      "O tempo de movimento para enquanto a alavanca roda."
    ],
    "correctIndex": 0,
    "explanation": "As máquinas simples não criam energia nem trabalho mecânico (W_entrada = W_saída na ausência de perdas). Uma alavanca que multiplica a força por 4 exige que a extremidade potente se desloque 4 vezes mais longe do que a carga resistente.",
    "distractorAnalysis": [
      "Está incorreta: violaria a 1.ª Lei da Termodinâmica.",
      "Está incorreta: introduzem fenómenos mágicos e disparatados.",
      "Está incorreta: introduzem fenómenos mágicos e disparatados."
    ],
    "nursingApplication": "Ao operar camas de manivela ou elevadores hidráulicos de doentes, o enfermeiro sabe que bombear várias vezes a alavanca com percursos amplos permite erguer doentes pesados com esforço muscular suave e controlado."
  },
  {
    "id": 2071,
    "topicId": 2,
    "question": "A articulação atlanto-occipital (entre o crânio e a 1.ª vértebra cervical C1 - Atlas) é o exemplo anatómico clássico de:",
    "options": [
      "Alavanca de 1.ª Classe (Interfixa), com o ponto de apoio (côndilos occipitais) situado entre a resistência (peso da face e crânio anterior) e a potência (músculos extensores da nuca).",
      "Alavanca de 2.ª Classe (Inter-resistente).",
      "Alavanca de 3.ª Classe (Interpotente).",
      "Um plano inclinado com atrito hidrodinâmico nulo."
    ],
    "correctIndex": 0,
    "explanation": "Na alavanca de 1.ª classe (interfixa), o fulcro F localiza-se entre a potência P e a resistência R (P - F - R). Na cabeça, os côndilos occipitais funcionam como fulcro; o peso da cabeça anterior tenta tombar a cabeça para a frente e os músculos da nuca (esplénio e trapézio) aplicam a força para trás mantendo o equilíbrio.",
    "distractorAnalysis": [
      "Está incorreta: confundem a posição relativa do ponto de apoio com a carga ou o músculo.",
      "Está incorreta: descreve outra máquina simples que não corresponde à anatomia craniovertebral.",
      "Está incorreta: descreve outra máquina simples que não corresponde à anatomia craniovertebral."
    ],
    "nursingApplication": "Em doentes sob anestesia geral ou coma neurológico com perda do tónus muscular da nuca, a cabeça tomba imediatamente para a frente sob a gravidade, colapsando a via aérea; o enfermeiro realiza a manobra de extensão da cabeça (chin-lift) para abrir a via aérea."
  },
  {
    "id": 2072,
    "topicId": 2,
    "question": "Nas tesouras cirúrgicas de dissecação (tipo Metzenbaum ou Mayo), a disposição mecânica do parafuso central, das pegas dos dedos e das lâminas afiadas classifica-as como:",
    "options": [
      "Alavanca dupla de 1.ª Classe (Interfixa), com o parafuso central a funcionar como fulcro comum entre a potência dos dedos e a resistência do tecido.",
      "Alavanca de 2.ª classe simples.",
      "Alavanca de 3.ª classe exclusiva.",
      "Cunha hidrostática sem momento de rotação."
    ],
    "correctIndex": 0,
    "explanation": "Uma tesoura é composta por duas alavancas de 1.ª classe opostas unidas no eixo central (fulcro). A força dos dedos nas argolas (potência) fecha as lâminas sobre o tecido biológico (resistência), concentrando a pressão no ponto de corte.",
    "distractorAnalysis": [
      "Está incorreta: não correspondem à posição intermediária do eixo de articulação.",
      "Está incorreta: ignora a mecânica de alavanca com fulcro evidente.",
      "Está incorreta: ignora a mecânica de alavanca com fulcro evidente."
    ],
    "nursingApplication": "O enfermeiro instrumentista empunha a tesoura cirúrgica inserindo apenas as pontas das falanges distais do polegar e do anelar nas argolas, usando o indicador como guia de estabilização do fulcro para máxima precisão de corte sem tremores."
  },
  {
    "id": 2073,
    "topicId": 2,
    "question": "Na alavanca de 1.ª classe, dependendo da posição do fulcro (ponto de apoio), a Vantagem Mecânica pode ser:",
    "options": [
      "Maior que 1 (VM > 1), igual a 1 (VM = 1) ou menor que 1 (VM < 1), conforme o fulcro esteja mais próximo da resistência, a meio ou mais próximo da potência.",
      "Estritamente menor que 1 em todos os casos físicos.",
      "Obrigatoriamente maior que 10 em qualquer instrumento.",
      "Zero em qualquer circunstância anatómica."
    ],
    "correctIndex": 0,
    "explanation": "Como o fulcro está no meio, a sua posição relativa pode variar livremente: se d_P > d_R (como num alicate), VM > 1; se d_P = d_R (como numa balança clássica), VM = 1; se d_P < d_R (como numa tesoura de poda com lâminas longas), VM < 1. É a única classe de alavancas com esta versatilidade completa.",
    "distractorAnalysis": [
      "Está incorreta: é a característica estrita das alavancas de 3.ª classe.",
      "Está incorreta porque , pois a maioria das alavancas de 1.ª classe tem valores moderados de VM.",
      "Está incorreta: anularia qualquer capacidade de transmissão mecânica."
    ],
    "nursingApplication": "Compreender esta versatilidade permite ao enfermeiro escolher o instrumento certo: alicates cirúrgicos com fulcro colado às mandíbulas (VM > 5) para cortar pinos metálicos e tesouras de sutura balanceadas para manobras delicadas."
  },
  {
    "id": 2074,
    "topicId": 2,
    "question": "A flexão plantar do tornozelo quando uma pessoa se eleva na ponta dos pés (ao apoiar-se nas cabeças dos metatarsos) é o exemplo clássico de:",
    "options": [
      "Alavanca de 2.ª Classe (Inter-resistente), com a resistência (peso do corpo transmitido pela tíbia) situada entre o fulcro (cabeças dos metatarsos) e a potência (músculo tríceps sural / tendão de Aquiles).",
      "Alavanca de 1.ª Classe (Interfixa).",
      "Alavanca de 3.ª Classe (Interpotente).",
      "Equilíbrio hidrostático de Boyle-Mariotte."
    ],
    "correctIndex": 0,
    "explanation": "Na alavanca de 2.ª classe, a resistência R localiza-se entre o ponto de apoio F e a força potente P (F - R - P). Na ponta dos pés, o fulcro está no solo sob os metatarsos, o peso de todo o corpo desce pelo tornozelo na articulação tibiotársica (ao meio) e o tendão de Aquiles traciona a tuberosidade do calcâneo na extremidade posterior.",
    "distractorAnalysis": [
      "Está incorreta: colocaria o fulcro no meio, o que não é o caso anatómico da tíbia.",
      "Está incorreta: colocaria o músculo a puxar no meio da carga.",
      "Está incorreta: é uma lei dos gases sem ligação à mecânica articular."
    ],
    "nursingApplication": "Como a alavanca de 2.ª classe tem SEMPRE VM > 1 (d_P > d_R), o músculo da barriga da perna (gémeos e sóleo) consegue erguer facilmente o peso corporal total de um doente de 80 kg com modesta tensão muscular, sendo essencial na reabilitação da marcha pós-fratura."
  },
  {
    "id": 2075,
    "topicId": 2,
    "question": "A característica biomecânica invariante de TODAS as Alavancas de 2.ª Classe (Inter-resistentes) é que a sua Vantagem Mecânica é:",
    "options": [
      "SEMPRE MAIOR DO QUE 1 (VM > 1), garantindo sempre multiplicação de força muscular e alívio de esforço em detrimento de amplitude e velocidade.",
      "Sempre menor do que 1 (VM < 1).",
      "Sempre rigorosamente igual a zero.",
      "Variável entre valores negativos e positivos conforme a temperatura."
    ],
    "correctIndex": 0,
    "explanation": "Como a resistência está entre o fulcro e a potência, o braço de potência estende-se desde o fulcro até à extremidade oposta, sendo obrigatoriamente mais longo do que o braço de resistência (d_P > d_R). Logo, a razão VM = d_P / d_R é estritamente superior a 1 em qualquer circunstância física.",
    "distractorAnalysis": [
      "Está incorreta: descreve as alavancas de 3.ª classe.",
      "Está incorreta: violam as relações geométricas básicas das máquinas simples.",
      "Está incorreta: violam as relações geométricas básicas das máquinas simples."
    ],
    "nursingApplication": "Dispositivos hospitalares concebidos como alavancas de 2.ª classe (como elevadores manuais de transferência de doentes ou carrinhos de transporte de garrafas de oxigénio) permitem ao enfermeiro manusear cargas pesadas com segurança sem sobrecarregar a musculatura."
  },
  {
    "id": 2076,
    "topicId": 2,
    "question": "A flexão do cotovelo pelo músculo bicípite braquial ao segurar um objeto na mão é o exemplo mais comum no corpo humano de:",
    "options": [
      "Alavanca de 3.ª Classe (Interpotente), com o ponto de aplicação da potência (inserção do tendão do bicípite na tuberosidade radial) situado entre o fulcro (articulação do cotovelo) e a resistência (peso do antebraço e do objeto na mão).",
      "Alavanca de 1.ª Classe (Interfixa).",
      "Alavanca de 2.ª Classe (Inter-resistente).",
      "Plano inclinado puramente elástico."
    ],
    "correctIndex": 0,
    "explanation": "Na alavanca de 3.ª classe, a potência P está situada entre o fulcro F e a resistência R (F - P - R). O cotovelo é o eixo (F), o tendão do bicípite insere-se a apenas 3-4 cm do cotovelo (P), e a carga está na mão a cerca de 30-35 cm de distância (R).",
    "distractorAnalysis": [
      "Está incorreta: exigiria o cotovelo situado no meio entre o músculo e a mão.",
      "Está incorreta: exigiria a carga posicionada entre o cotovelo e o tendão muscular.",
      "Está incorreta: não corresponde a um modelo de alavanca com fulcro e rotação."
    ],
    "nursingApplication": "Como d_P << d_R (ex: 4 cm vs 35 cm), a VM é de apenas ~0,11: para segurar um medicamento de 2 kg na mão (~20 N), o bicípite braquial tem de produzir uma força de mais de 175 N no tendão! O enfermeiro compreende por que razão manter cargas pesadas com o antebraço fletido causa fadiga muscular tão rápida."
  },
  {
    "id": 2077,
    "topicId": 2,
    "question": "As pinças anatómicas e pinças de dissecação cirúrgica sem travão utilizadas em enfermagem (tipo pinça com dentes de rato ou pinça Adson) são classificadas como:",
    "options": [
      "Alavancas de 3.ª Classe (Interpotentes), com o fulcro soldado na extremidade posterior, a potência aplicada pelos dedos no terço médio e a resistência do tecido nas pontas ativas.",
      "Alavancas de 1.ª classe duplas.",
      "Alavancas de 2.ª classe simples.",
      "Alavancas de 4.ª classe termodinâmica."
    ],
    "correctIndex": 0,
    "explanation": "Numa pinça de dissecação, a mola soldada no topo é o ponto de apoio (fulcro F). Os dedos do enfermeiro comprimem as hastes no meio (potência P), e as pontas da pinça agarram a compressa ou o tecido biológico na extremidade oposta (resistência R).",
    "distractorAnalysis": [
      "Está incorreta: descreve tesouras e pinças com parafuso cruzado central.",
      "Está incorreta: exigiria as pontas no meio e os dedos no topo.",
      "Está incorreta: é uma classe inexistente na mecânica clássica (existem apenas 3 classes de alavancas)."
    ],
    "nursingApplication": "A vantagem mecânica menor que 1 das pinças de dissecação proporciona ao enfermeiro sensibilidade tátil tátil e precisão milimétrica durante o manuseio asséptico de tecidos em feridas complexas sem esmagar as estruturas celulares delicadas."
  },
  {
    "id": 2078,
    "topicId": 2,
    "question": "Qual é a classe de alavancas MAIS ABUNDANTE no sistema musculoesquelético do corpo humano?",
    "options": [
      "Alavancas de 3.ª Classe (Interpotentes), privilegiando a velocidade de contração e a grande amplitude angular de movimentos nos membros em detrimento da economia de força muscular.",
      "Alavancas de 2.ª Classe exclusivamente.",
      "Alavancas de 1.ª Classe com vantagens mecânicas superiores a 20.",
      "Não existem alavancas no corpo humano."
    ],
    "correctIndex": 0,
    "explanation": "A evolução biológica favoreceu a velocidade e a versatilidade: quase todas as articulações dos membros superiores e inferiores (cotovelo, joelho, ombro, anca, dedos) funcionam como alavancas de 3.ª classe, onde os tendões se inserem muito próximos das articulações para permitir movimentos amplos e ágeis com pequenas excursões musculares.",
    "distractorAnalysis": [
      "Está incorreta: é rara no corpo humano (o exemplo quase único é a flexão plantar do tornozelo).",
      "Está incorreta porque , pois as alavancas de 1.ª classe anatómicas têm VM moderada ou baixa.",
      "Está incorreta: ignora a biomecânica clássica descrita por Giovanni Borelli no século XVII."
    ],
    "nursingApplication": "O predomínio de alavancas de 3.ª classe demonstra ao enfermeiro que o sistema musculoesquelético humano não foi projetado para atuar como guindaste de carga estática: transferências manuais repetidas de doentes pesados sem auxílio mecânico sobrecarregam os tendões, fundamentando o uso de tecnologias de apoio."
  },
  {
    "id": 2079,
    "topicId": 2,
    "question": "Ao utilizar um alicate corta-unhas cirúrgico de podologia para cortar unhas espessadas (onicogrifose) de doentes geriátricos, a elevada força de corte é conseguida através de:",
    "options": [
      "Uma combinação de alavancas com grande Vantagem Mecânica (braço de potência longo nas hastes e braço de resistência curtíssimo nas lâminas de corte afiadas).",
      "Um aumento da temperatura do metal acima de 100 °C.",
      "Emissão de ondas de choque acústicas pelos cabos.",
      "Uma diminuição transitória da massa atómica da queratina da unha."
    ],
    "correctIndex": 0,
    "explanation": "O alicate corta-unhas maximiza a razão d_P / d_R: cabos longos operados pela mão geram um torque elevado que é transferido para lâminas muito curtas, multiplicando a força muscular manual em dezenas de vezes e gerando tensões de corte superiores à resistência da queratina hipertrofiada.",
    "distractorAnalysis": [
      "Está incorreta: descrevem processos físicos ou térmicos inexistentes em instrumentos manuais comuns.",
      "Está incorreta: descrevem processos físicos ou térmicos inexistentes em instrumentos manuais comuns.",
      "Está incorreta: descrevem processos físicos ou térmicos inexistentes em instrumentos manuais comuns."
    ],
    "nursingApplication": "O enfermeiro no pé diabético e podologia geriátrica utiliza alicates com mola dupla e alta vantagem mecânica para cortar unhas patológicas sem aplicar força excessiva, prevenindo o escorregamento do instrumento e feridas acidentais na pele periungueal frágil."
  },
  {
    "id": 2080,
    "topicId": 2,
    "question": "Um doente com paralisia do músculo tríceps braquial tem dificuldade em estender o cotovelo contra a resistência. A extensão do cotovelo pelo tríceps em torno do olécrano funciona biomecanicamente como uma alavanca de:",
    "options": [
      "1.ª Classe (Interfixa), com o fulcro na tróclea umeral situado entre a inserção do tendão do tríceps no olécrano (potência) e o peso do antebraço (resistência).",
      "2.ª Classe (Inter-resistente).",
      "3.ª Classe (Interpotente).",
      "Polia móvel de quatro cordas."
    ],
    "correctIndex": 0,
    "explanation": "Na extensão do cotovelo, a tróclea do úmero é o fulcro no meio: o tendão do tríceps puxa o olécrano para trás/cima (potência) e a resistência (antebraço) move-se para a frente/baixo, configurando uma alavanca de 1.ª classe clássica.",
    "distractorAnalysis": [
      "Está incorreta: não refletem a anatomia da fossa do olécrano e tróclea umeral.",
      "Está incorreta: introduz uma máquina de polias inexistente nesta articulação.",
      "Está incorreta: introduz uma máquina de polias inexistente nesta articulação."
    ],
    "nursingApplication": "Avaliar o reflexo tricipital e a força extensora do cotovelo permite ao enfermeiro testar a integridade das raízes nervosas cervicais C7 e C8 e do nervo radial no exame neurológico de doentes com traumatismo vertebro-medular."
  },
  {
    "id": 2081,
    "topicId": 2,
    "question": "Um enfermeiro usa uma pinça hemostática de Pean para clampar uma tubuladura de soro espessa. A distância do eixo central (parafuso) às argolas onde a mão aperta é de 10 cm e a distância do eixo à ponta ativa é de 2 cm. Qual é a força de aperto transmitida à tubuladura se o enfermeiro aplicar 30 N nas argolas?",
    "options": [
      "150 N (Vantagem Mecânica = 10 / 2 = 5; 30 N × 5 = 150 N).",
      "6 N.",
      "30 N.",
      "600 N."
    ],
    "correctIndex": 0,
    "explanation": "Na alavanca de 1.ª classe em equilíbrio: F_P · d_P = F_R · d_R ⇒ F_R = F_P · (d_P / d_R) = 30 N × (10 cm / 2 cm) = 30 × 5 = 150 N. A força é multiplicada por 5 nas pontas ativas.",
    "distractorAnalysis": [
      "Está incorreta: divide a força pela vantagem mecânica (30 / 5).",
      "Está incorreta: assume vantagem mecânica unitária.",
      "Está incorreta: multiplica por 20 em vez de 5."
    ],
    "nursingApplication": "A amplificação de força para 150 N oclui completamente o lúmen da tubuladura plástica espessa de perfusão, permitindo interromper imediatamente fluxos indesejados sem fuga de medicamentos."
  },
  {
    "id": 2082,
    "topicId": 2,
    "question": "Ao utilizar uma alavanca de 1.ª classe para remover um penso rígido aderido, se o ponto de apoio for deslocado para mais perto da ponta ativa (diminuindo o braço resistente d_R), o que acontece à força necessária nas mãos do enfermeiro?",
    "options": [
      "A força necessária diminui proporcionalmente, porque a Vantagem Mecânica (d_P / d_R) aumenta.",
      "A força necessária aumenta drasticamente.",
      "A força necessária mantém-se idêntica.",
      "A força torna-se infinita."
    ],
    "correctIndex": 0,
    "explanation": "Como F_P = F_R · (d_R / d_P), diminuir d_R faz diminuir diretamente a força motora F_P necessária para vencer a mesma resistência. Aproximar o fulcro da carga multiplica a vantagem mecânica.",
    "distractorAnalysis": [
      "Está incorreta: confunde aproximar o fulcro da carga com aproximar da mão.",
      "Está incorreta: contrariam a mecânica básica de alavancas.",
      "Está incorreta: contrariam a mecânica básica de alavancas."
    ],
    "nursingApplication": "Ao posicionar espátulas ou instrumentos de alívio mecânico, aproximar o ponto de apoio da zona de maior resistência poupa as mãos do enfermeiro e proporciona maior controlo e suavidade."
  },
  {
    "id": 2083,
    "topicId": 2,
    "question": "Qual das seguintes ações biomecânicas do corpo humano NÃO é um exemplo de alavanca de 1.ª classe?",
    "options": [
      "A flexão do cotovelo pelo músculo bicípite braquial ao erguer um copo de água.",
      "O movimento de acenar com a cabeça dizendo 'sim' (articulação atlanto-occipital).",
      "A extensão do antebraço pelo músculo tríceps braquial no olécrano.",
      "O uso de uma tesoura cirúrgica Mayo."
    ],
    "correctIndex": 0,
    "explanation": "A flexão do cotovelo pelo bicípite é o exemplo clássico de alavanca de 3.ª classe (potência no meio entre o cotovelo e a mão). As outras opções são exemplos legítimos de alavancas de 1.ª classe (fulcro no meio).",
    "distractorAnalysis": [
      "Está incorreta: são alavancas de 1.ª classe com o fulcro situado entre a potência e a resistência.",
      "Está incorreta: são alavancas de 1.ª classe com o fulcro situado entre a potência e a resistência.",
      "Está incorreta: são alavancas de 1.ª classe com o fulcro situado entre a potência e a resistência."
    ],
    "nursingApplication": "Diferenciar as classes de alavancas anatómicas permite ao enfermeiro compreender quais as articulações suscetíveis a fadiga por desvantagem mecânica (3.ª classe) e quais possuem vantagem de equilíbrio (1.ª classe)."
  },
  {
    "id": 2084,
    "topicId": 2,
    "question": "Numa alavanca de 1.ª classe simétrica (d_P = d_R = 15 cm), se for aplicada uma força potente de 80 N para baixo, qual é a força resistente equilibrada e qual a força total suportada pelo fulcro central?",
    "options": [
      "Força resistente de 80 N para cima; o fulcro central suporta uma força total de compressão de 160 N para cima (N = F_P + F_R).",
      "Força resistente de 160 N; o fulcro suporta 0 N.",
      "Força resistente de 40 N; o fulcro suporta 80 N.",
      "Força resistente de 0 N; o fulcro suporta 80 N."
    ],
    "correctIndex": 0,
    "explanation": "Pelo equilíbrio rotacional: F_R = F_P · (15 / 15) = 80 N. Pelo equilíbrio translacional vertical: ∑Fy = 0 ⇒ N_fulcro - F_P - F_R = 0 ⇒ N_fulcro = 80 + 80 = 160 N. O ponto de apoio suporta a soma das duas forças.",
    "distractorAnalysis": [
      "Está incorreta: violam a 1.ª ou a 2.ª condições de equilíbrio estático da mecânica newtoniana.",
      "Está incorreta: violam a 1.ª ou a 2.ª condições de equilíbrio estático da mecânica newtoniana.",
      "Está incorreta: violam a 1.ª ou a 2.ª condições de equilíbrio estático da mecânica newtoniana."
    ],
    "nursingApplication": "Nas articulações que funcionam como alavancas de 1.ª classe (como a articulação atlanto-occipital), as superfícies cartilagíneas articulares do fulcro suportam a soma da carga do peso da cabeça com a força dos músculos da nuca, justificando a ocorrência de artrose cervical com o envelhecimento."
  },
  {
    "id": 2085,
    "topicId": 2,
    "question": "A balança romana tradicional utilizada historicamente em hospitais é uma alavanca de 1.ª classe com braço de potência variável. Como é feito o equilíbrio nessa balança?",
    "options": [
      "O contrapeso padrão tem peso fixo, mas a sua distância ao fulcro d_P é alterada deslocando-o ao longo da haste graduada até que o torque potente iguale o torque da carga do doente (P_padrão · d_P = P_doente · d_R).",
      "Aumenta-se a temperatura da haste de metal.",
      "Muda-se a gravidade local com um íman.",
      "O doente segura a haste com as duas mãos."
    ],
    "correctIndex": 0,
    "explanation": "Como τ = F · d, para equilibrar uma carga variável com uma força fixa (contrapeso), varia-se a distância d_P. A leitura na escala graduada traduz diretamente a distância em quilogramas correspondentes.",
    "distractorAnalysis": [
      "Está incorreta: não possuem fundamento na física clássica de alavancas estáticas.",
      "Está incorreta: não possuem fundamento na física clássica de alavancas estáticas.",
      "Está incorreta: não possuem fundamento na física clássica de alavancas estáticas."
    ],
    "nursingApplication": "O princípio da balança romana demonstra como o ajuste de distância (braço de alavanca) permite contrabalançar forças pesadas sem necessitar de contrapesos volumosos."
  },
  {
    "id": 2086,
    "topicId": 2,
    "question": "Um carrinho manual hospitalar de transporte de garrafas pesadas de oxigénio medicinal funciona como uma alavanca de 2.ª classe. Onde se localizam o fulcro, a carga e o operador?",
    "options": [
      "O fulcro está no eixo das rodas no solo, a carga pesada da garrafa está situada ao meio sobre a base, e o enfermeiro aplica a força potente nas pegas compridas na extremidade superior.",
      "O enfermeiro está no meio entre a garrafa e as rodas.",
      "As rodas estão no meio entre o operador e a garrafa.",
      "A garrafa atua como fulcro e as rodas flutuam no ar."
    ],
    "correctIndex": 0,
    "explanation": "Num carrinho de transporte (semelhante a um carrinho de mão clássico), a ordem é Fulcro (rodas) - Resistência (garrafa pesada) - Potência (mãos do operador). Como d_P é o comprimento total e d_R é a distância das rodas à garrafa (d_P > d_R), a VM é sempre > 1.",
    "distractorAnalysis": [
      "Está incorreta: seria alavanca de 3.ª classe com grande desvantagem de força.",
      "Está incorreta: seria alavanca de 1.ª classe.",
      "Está incorreta: é fisicamente incoerente."
    ],
    "nursingApplication": "O transporte seguro de garrafas de oxigénio de 50 kg em carrinhos de 2.ª classe reduz a força que o enfermeiro tem de suportar para menos de 15 kgf, prevenindo lesões da coluna e quedas de garrafas pressurizadas."
  },
  {
    "id": 2087,
    "topicId": 2,
    "question": "Se um carrinho de transporte de resíduos hospitalares de 2.ª classe tiver braço de potência de 1,2 metros e a carga estiver situada a 0,3 metros das rodas (fulcro), qual é a força que o profissional tem de exercer para erguer uma carga de 400 N?",
    "options": [
      "100 N (VM = 1,2 / 0,3 = 4; F_P = 400 N / 4 = 100 N).",
      "1600 N.",
      "400 N.",
      "33,3 N."
    ],
    "correctIndex": 0,
    "explanation": "Pela condição de equilíbrio: F_P · d_P = F_R · d_R ⇒ F_P = 400 N × (0,3 m / 1,2 m) = 400 × 0,25 = 100 N. A vantagem mecânica de 4 reduz o esforço do operador para apenas um quarto da carga.",
    "distractorAnalysis": [
      "Está incorreta: multiplicaria em vez de dividir a carga.",
      "Está incorreta: ignora o efeito multiplicador da alavanca.",
      "Está incorreta: calcula erradamente por fator de 3."
    ],
    "nursingApplication": "Esta redução biofísica de 400 N para 100 N permite aos profissionais de apoio e enfermagem transportar contentores pesados de resíduos biológicos com postura correta e mínimo desgaste físico."
  },
  {
    "id": 2088,
    "topicId": 2,
    "question": "Numa maca articulada de ambulância com sistema de pernas dobráveis, ao erguer a traseira da maca apoiada nas rodas dianteiras no solo, o sistema comporta-se como uma alavanca de:",
    "options": [
      "2.ª Classe, com as rodas dianteiras como fulcro, o peso do doente no meio e a força dos enfermeiros na extremidade traseira.",
      "1.ª Classe exclusiva.",
      "3.ª Classe com desvantagem mecânica.",
      "Cunha puramente hidrostática."
    ],
    "correctIndex": 0,
    "explanation": "O fulcro no solo (rodas dianteiras travadas), a carga do doente no leito da maca (ao meio) e os operadores a puxar pelas pegas traseiras (potência na ponta) configuram rigorosamente a geometria F - R - P da 2.ª classe.",
    "distractorAnalysis": [
      "Está incorreta: exigiria o eixo de rodas no meio da maca.",
      "Está incorreta: exigiria os enfermeiros a erguer a maca pelo meio por baixo do corpo do doente.",
      "Está incorreta: não faz sentido biomecânico."
    ],
    "nursingApplication": "Aproveitar a vantagem mecânica da 2.ª classe ao carregar a maca na ambulância permite que dois socorristas ergam com segurança doentes com mais de 90 kg sem sofrerem traumatismos agudos na coluna lombar."
  },
  {
    "id": 2089,
    "topicId": 2,
    "question": "O músculo quadríceps femoral atua através do tendão rotuliano inserido na tuberosidade anterior da tíbia (a cerca de 4 cm do eixo da articulação do joelho) para estender a perna contra o peso do pé (a 40 cm do joelho). Esta alavanca é de:",
    "options": [
      "3.ª Classe (Interpotente), com VM = 4 / 40 = 0,1, exigindo que o quadríceps exerça uma força 10 vezes maior que a carga no pé.",
      "1.ª Classe com ganho de força de 10 vezes.",
      "2.ª Classe com vantagem mecânica de 5.",
      "Uma máquina sem fulcro articular."
    ],
    "correctIndex": 0,
    "explanation": "O fulcro é o joelho, a potência é o tendão rotuliano (a 4 cm) e a resistência é o peso da perna e pé (a 40 cm). Como a potência está entre o fulcro e a resistência (F - P - R), é de 3.ª classe com VM = 0,1. Para segurar 50 N no pé, o quadríceps produz 500 N de força!",
    "distractorAnalysis": [
      "Está incorreta: confundem a classe de alavanca e invertem a relação de força.",
      "Está incorreta: ignora que a articulação fémoro-tibial é o fulcro evidente.",
      "Está incorreta: ignora que a articulação fémoro-tibial é o fulcro evidente."
    ],
    "nursingApplication": "Compreender que o quadríceps opera com enorme desvantagem mecânica (VM = 0,1) justifica por que motivo as forças de compressão na cartilagem articular da rótula e meniscos atingem múltiplos do peso corporal durante a marcha e ao subir escadas."
  },
  {
    "id": 2090,
    "topicId": 2,
    "question": "A abdução do braço pelo músculo deltoide na articulação glenoumeral (ombro) funciona como uma alavanca de 3.ª classe. A principal consequência biomecânica desta configuração para o ombro do enfermeiro é:",
    "options": [
      "O músculo deltoide tem de gerar forças muito elevadas na tuberosidade deltoideia do úmero para suportar mesmo cargas leves na mão, gerando altas forças de compressão na cabeça do úmero contra a cavidade glenoideia.",
      "O deltoide nunca se cansa porque a gravidade é cancelada.",
      "O ombro ganha uma vantagem mecânica de 20 vezes em força.",
      "A cabeça do úmero flutua sem tocar na omoplata."
    ],
    "correctIndex": 0,
    "explanation": "Como a inserção do deltoide fica próxima da articulação glenoumeral e o braço é longo (alavanca de 3.ª classe com VM << 1), segurar um membro ou equipamento com os braços abertos exige forças musculares e articulares de centenas de Newtons.",
    "distractorAnalysis": [
      "Está incorreta: contraria a fadiga muscular rápida na abdução mantida.",
      "Está incorreta: inverte a desvantagem mecânica em vantagem impossível.",
      "Está incorreta: é uma situação incompatível com a estabilidade anatómica articular."
    ],
    "nursingApplication": "O enfermeiro aprende na prática clínica a manter os braços e cotovelos colados ao tronco ao manipular doentes: afastar os braços aumenta o braço resistente e multiplica a tensão no deltoide e tendão da coifa dos rotadores, prevenindo tendinites ocupacionais."
  },
  {
    "id": 2091,
    "topicId": 2,
    "question": "Por que razão as pinças cirúrgicas de dissecação sem travão (alavancas de 3.ª classe) são preferidas para manipular vasos sanguíneos delicados, nervos periféricos e intestinos durante cirurgias?",
    "options": [
      "Porque a Vantagem Mecânica reduzida (VM < 1) confere uma extraordinária sensibilidade proprioceptiva e controlo tátil refinado ao cirurgião, evitando esmagamentos acidentais de tecidos frágeis.",
      "Porque multiplicam a força do polegar por 50 vezes esmagando tudo.",
      "Porque cortam o tecido automaticamente por calor de indução.",
      "Porque são totalmente transparentes aos raios X."
    ],
    "correctIndex": 0,
    "explanation": "Numa alavanca de 3.ª classe, como a força de saída nas pontas é menor do que a força dos dedos, o profissional tem um controlo ultra-sensível da pressão exercida: pequenos movimentos dos dedos resultam em movimentos precisos nas pontas, prevenindo lacerações iatrogénicas.",
    "distractorAnalysis": [
      "Está incorreta: seria a pior característica possível para manipular vasos e nervos.",
      "Está incorreta: não correspondem a pinças manuais convencionais.",
      "Está incorreta: não correspondem a pinças manuais convencionais."
    ],
    "nursingApplication": "O enfermeiro instrumentista seleciona pinças de dissecação sem dentes (tipo Debakey) para cirurgia vascular e cardíaca: a mecânica de 3.ª classe com pontas atraumáticas permite manipular a aorta e coronárias com segurança máxima."
  },
  {
    "id": 2092,
    "topicId": 2,
    "question": "A Reologia é o ramo da física e da biofísica que estuda especificamente:",
    "options": [
      "A deformação e o escoamento da matéria sob a ação de tensões mecânicas aplicadas, abrangendo tanto sólidos elásticos e plásticos como fluidos viscosos e viscoelasticidade biológica.",
      "Apenas a temperatura de fusão dos metais industriais.",
      "A velocidade da transmissão dos impulsos nervosos no axónio.",
      "A quantidade de glóbulos brancos no exsudado purulento."
    ],
    "correctIndex": 0,
    "explanation": "A reologia (do grego 'rheos' = fluir) estuda a resposta mecânica de materiais quando submetidos a tensões de corte ou tração: descreve como os corpos se deformam (elasticidade/plasticidade) ou fluem (viscosidade) no tempo.",
    "distractorAnalysis": [
      "Está incorreta: é metalurgia térmica estrita.",
      "Está incorreta: é neurofisiologia eletrofisiológica.",
      "Está incorreta: é citologia e patologia clínica hematológica."
    ],
    "nursingApplication": "A reologia é indispensável em enfermagem para compreender o comportamento do sangue (fluido reológico não-newtoniano), do muco brônquico, do líquido sinovial articular e de biomateriais como géis de hidrogel para tratamento de feridas."
  },
  {
    "id": 2093,
    "topicId": 2,
    "question": "Na física dos materiais, o conceito de 'Corpo Perfeitamente Rígido' (ou indeformável) corresponde a:",
    "options": [
      "Uma idealização teórica matemática na qual a distância entre quaisquer dois pontos materiais do corpo permanece estritamente invariável sob qualquer força aplicada.",
      "Um bloco maciço de osso esponjoso humano.",
      "Um plástico de PVC maleável aquecido a 37 °C.",
      "Qualquer material hospitalar feito de aço inoxidável."
    ],
    "correctIndex": 0,
    "explanation": "Na natureza não existe nenhum corpo perfeitamente indeformável: todos os materiais reais sofrem deformações microscópicas elásticas ou plásticas quando sujeitos a forças. O corpo rígido é uma aproximação teórica newtoniana útil para analisar o equilíbrio estático macroscópico.",
    "distractorAnalysis": [
      "Está incorreta porque ; o osso esponjoso é deformável e absorve choque mecânico.",
      "Está incorreta: é um polímero flexível dúctil.",
      "Está incorreta porque , pois mesmo o aço cirúrgico deforma elasticamente sob grandes cargas."
    ],
    "nursingApplication": "O enfermeiro compreende que na biomecânica clínica os ossos, próteses e ligamentos nunca são totalmente rígidos: deformam-se sob carga fisiológica, e essa deformação elástica é essencial para absorver impactos e prevenir fraturas."
  },
  {
    "id": 2094,
    "topicId": 2,
    "question": "Um material possui 'Comportamento Elástico' quando:",
    "options": [
      "Retoma espontaneamente a sua forma e dimensões geométricas originais assim que a força de deformação externa é totalmente removida.",
      "Fica permanentemente deformado mesmo após a remoção da força.",
      "Flui continuamente como um líquido à temperatura ambiente.",
      "Desintegra-se em pó ao primeiro toque."
    ],
    "correctIndex": 0,
    "explanation": "A elasticidade é a propriedade mecânica reversível: a energia fornecida durante a deformação é armazenada como energia potencial elástica e devolvida na totalidade durante a recuperação da forma primitiva (reversibilidade microscópica das ligações químicas).",
    "distractorAnalysis": [
      "Está incorreta: define o comportamento plástico (deformação irreversível).",
      "Está incorreta: define o comportamento viscoso de fluidos.",
      "Está incorreta: descreve fratura frágil catastrófica."
    ],
    "nursingApplication": "As luvas cirúrgicas, torniquetes de borracha, tubos endotraqueais com cuff e ligaduras elásticas baseiam a sua função no comportamento elástico reversível, adaptando-se às estruturas anatómicas com pressão de contacto constante."
  },
  {
    "id": 2095,
    "topicId": 2,
    "question": "O 'Comportamento Plástico' de um material hospitalar ou biológico é caracterizado por:",
    "options": [
      "Uma deformação permanente e irreversível que persiste mesmo após a remoção completa da tensão mecânica externa aplicada.",
      "Uma capacidade de esticar infinitamente sem nunca deformar.",
      "A recuperação instantânea da forma primitiva sem atraso temporal.",
      "A emissão de fotões de radiação gama durante a tração."
    ],
    "correctIndex": 0,
    "explanation": "Na plasticidade, as tensões ultrapassam o limite elástico do material, provocando o deslizamento irreversível de planos atómicos ou cadeias poliméricas (escoamento plástico). Quando a carga é retirada, o material não regressa ao comprimento inicial, mantendo uma deformação residual.",
    "distractorAnalysis": [
      "Está incorreta: é uma fantasia mecânica.",
      "Está incorreta: define comportamento puramente elástico ideal.",
      "Está incorreta: confunde processos de deformação molecular com física nuclear."
    ],
    "nursingApplication": "O comportamento plástico é aproveitado pelo ortopedista e enfermeiro ao moldar talas maleáveis de alumínio com espuma ou placas de imobilização: a força manual deforma o metal plasticamente, adaptando-o com precisão anatómica ao membro fraturado."
  },
  {
    "id": 2096,
    "topicId": 2,
    "question": "Um fluido é classificado como 'Fluido Newtoniano' quando a sua viscosidade dinâmica (η):",
    "options": [
      "Permanece estritamente constante a uma dada temperatura e pressão, independentemente da taxa de cisalhamento ou da velocidade com que o fluido é agitado ou forçado a escoar.",
      "Aumenta exponencialmente com a velocidade do vento.",
      "Diminui para zero assim que o fluido entra no corpo humano.",
      "Varia aleatoriamente a cada segundo."
    ],
    "correctIndex": 0,
    "explanation": "Nos fluidos newtonianos (como a água pura, o soro fisiológico a 0,9% e o ar), a tensão de cisalhamento é linearmente proporcional ao gradiente de velocidade: τ = η · (dv/dy). A viscosidade η é uma constante física que não varia com a agitação mecânica.",
    "distractorAnalysis": [
      "Está incorreta: descrevem comportamentos não-newtonianos ou incoerentes.",
      "Está incorreta: descrevem comportamentos não-newtonianos ou incoerentes.",
      "Está incorreta: descrevem comportamentos não-newtonianos ou incoerentes."
    ],
    "nursingApplication": "Soluções cristalóides intravenosas como o soro fisiológico e o soro glicosado são fluidos newtonianos perfeitos: a sua resistência ao escoamento através de cateteres e agulhas é linear e previsível pelas bombas infusoras volumétricas."
  },
  {
    "id": 2097,
    "topicId": 2,
    "question": "O sangue total humano é classificado reologicamente como um 'Fluido Não-Newtoniano Pseudoplástico' (com comportamento de 'shear-thinning'). O que significa isto na prática circulatória?",
    "options": [
      "A viscosidade aparente do sangue DIMINUI à medida que a taxa de cisalhamento (velocidade de escoamento nos vasos) aumenta, porque as hemácias se deformam e alinham no sentido do fluxo.",
      "A viscosidade do sangue aumenta quando corre depressa, coagulando nos grandes vasos.",
      "O sangue comporta-se como um sólido rígido indeformável nas artérias.",
      "A densidade do sangue cai para zero na sístole ventricular."
    ],
    "correctIndex": 0,
    "explanation": "A baixas velocidades de escoamento (baixa taxa de cisalhamento), as hemácias agregam-se em pilhas de moedas ('rouleaux'), aumentando a viscosidade. Quando o sangue corre velozmente sob altas taxas de cisalhamento (sístole arterial), as pilhas desfazem-se e as hemácias elásticas deformam-se em elipsóides alinhados com o fluxo, diminuindo substancialmente a viscosidade (efeito de pseudoplasticidade).",
    "distractorAnalysis": [
      "Está incorreta: descreve um fluido dilatante (espessamento por cisalhamento), oposto ao sangue.",
      "Está incorreta: contrariam a hemodinâmica dos fluidos biológicos.",
      "Está incorreta: contrariam a hemodinâmica dos fluidos biológicos."
    ],
    "nursingApplication": "Em doentes em choque hipovolémico com estase circulatória periférica (escoamento lentificado), a viscosidade do sangue aumenta na microcirculação, agravando a oclusão dos capilares; o enfermeiro administra fluidoterapia de ressuscitação para restaurar a velocidade e diminuir a viscosidade aparente."
  },
  {
    "id": 2098,
    "topicId": 2,
    "question": "O muco traqueobrônquico humano é um gel reológico tixotrópico. A 'Tixotropia' é a propriedade física pela qual um material:",
    "options": [
      "Torna-se temporariamente menos viscoso (mais fluido) quando sujeito a agitação mecânica sustentada ou vibração, recuperando a alta viscosidade e consistência gelatinosa em repouso.",
      "Transforma-se em vapor instantaneamente com a tosse.",
      "Endurece como pedra quando é agitado pelo ventilador.",
      "Dissolve as células ciliadas da traqueia."
    ],
    "correctIndex": 0,
    "explanation": "A tixotropia é a dependência temporal da viscosidade sob cisalhamento contínuo: a estrutura em rede das mucinas no muco desentrelaça-se com a agitação e vibração mecânica, liquefazendo o muco e facilitando o seu transporte pelo epitélio ciliar.",
    "distractorAnalysis": [
      "Está incorreta: descrevem propriedades absurdas que violam a fisiologia respiratória.",
      "Está incorreta: descrevem propriedades absurdas que violam a fisiologia respiratória.",
      "Está incorreta: descrevem propriedades absurdas que violam a fisiologia respiratória."
    ],
    "nursingApplication": "Este fundamento biofísico justifica as técnicas de cinesiterapia respiratória de enfermagem (vibrocompressão torácica e dispositivos oscilatórios como o Flutter): a vibração mecânica de 10 a 20 Hz fluidifica o muco tixotrópico brônquico, facilitando a expetoração em doentes com hipersecreção pulmonar."
  },
  {
    "id": 2099,
    "topicId": 2,
    "question": "Um penso de 'Hidrogel amorfo' utilizado no tratamento e desbridamento de feridas é um biomaterial viscoelástico composto por mais de 90% de água. Na biofísica da cicatrização, a sua principal função reológica e biológica é:",
    "options": [
      "Fornecer humidade constante ao leito da ferida para hidratar a necrose seca (desbridamento autolítico), absorvendo pequenas quantidades de exsudado sem aderir aos tecidos de granulação dérmica recém-formados.",
      "Secar completamente a ferida para formar uma crosta espessa dura.",
      "Cauterizar quimicamente as bactérias por acidez extrema.",
      "Substituir o tecido ósseo por calcificação precoce."
    ],
    "correctIndex": 0,
    "explanation": "Os hidrogéis são redes poliméricas tridimensionais hidrofílicas inchadas em água. Doam água a tecidos secos desvitalizados, ativando as enzimas endógenas (colagenases e elastases) que dissolvem a necrose de forma indolor (desbridamento autolítico suave).",
    "distractorAnalysis": [
      "Está incorreta: descreve o tratamento antigo obsoleto da dessecação, refutado pela teoria do ambiente húmido de Winter.",
      "Está incorreta: atribuem propriedades cáusticas ou osteogénicas despropositadas aos hidrogéis.",
      "Está incorreta: atribuem propriedades cáusticas ou osteogénicas despropositadas aos hidrogéis."
    ],
    "nursingApplication": "O enfermeiro aplica hidrogel amorfo em esfacelos e necroses secas de úlceras por pressão e pés diabéticos, cobrindo com penso secundário oclusivo para manter o microambiente húmido e acelerar a limpeza da ferida."
  },
  {
    "id": 2100,
    "topicId": 2,
    "question": "A Tensão Mecânica Normal (σ, expressa em Pascal ou N/m²) gerada no interior de um fio de sutura cirúrgico tracionado por uma força axial F é calculada por:",
    "options": [
      "σ = F / A_seccao (onde F é a força de tração e A_seccao é a área da secção transversal do fio).",
      "σ = F · A_seccao",
      "σ = A_seccao / F",
      "σ = F · L₀"
    ],
    "correctIndex": 0,
    "explanation": "Tensão mecânica é a intensidade das forças internas distribuídas por unidade de área transversal da secção de um corpo elástico (σ = F / A). A sua unidade no SI é o Pascal (1 Pa = 1 N/m²; nos materiais utiliza-se frequentemente megapascais: 1 MPa = 10⁶ N/m²).",
    "distractorAnalysis": [
      "Está incorreta: multiplica a força pela área, violando a análise dimensional.",
      "Está incorreta: inverte a fração.",
      "Está incorreta: calcula trabalho ou momento axial."
    ],
    "nursingApplication": "Para o mesmo nó cirúrgico feito com 20 N de tração, um fio de sutura fino (ex: 5-0) sofre uma tensão interna σ muito superior à de um fio grosso (ex: 1-0); se a tensão ultrapassar a resistência do material, o fio rompe nas mãos do enfermeiro instrumentista."
  },
  {
    "id": 2101,
    "topicId": 2,
    "question": "A Deformação Relativa Longitudinal (ε, strain) de um tubo elétrico de silicone sujeito a tração mecânica é calculada pela razão adimensional:",
    "options": [
      "ε = ΔL / L₀ (variação de comprimento ΔL dividida pelo comprimento inicial em repouso L₀).",
      "ε = L₀ / ΔL",
      "ε = ΔL · L₀",
      "ε = F · ΔL"
    ],
    "correctIndex": 0,
    "explanation": "A deformação relativa ε mede a extensão proporcional sofrida pelo corpo: é uma grandeza puramente adimensional (metros divididos por metros). Multiplicada por 100 expressa a deformação percentual (ex: ε = 0,20 corresponde a um estiramento de 20%).",
    "distractorAnalysis": [
      "Está incorreta: inverte a relação matemática.",
      "Está incorreta: calcula produto de comprimentos com dimensão de área (m²).",
      "Está incorreta: é a fórmula de trabalho mecânico (W = F · d)."
    ],
    "nursingApplication": "Ao alongar tiras de ligaduras de compressão elástica ou torniquetes de silicone, o enfermeiro estica a faixa em cerca de 50 a 100% (ε = 0,5 a 1,0), sabendo que a tensão de retração gerada sobre a pele é diretamente proporcional a essa deformação relativa."
  },
  {
    "id": 2102,
    "topicId": 2,
    "question": "Um cateter venoso periférico de 4 cm de comprimento (L₀ = 0,04 m) é acidentalmente tracionado durante a mudança de roupa de cama, atingindo 4,4 cm antes de recuperar a forma. Qual foi a deformação relativa máxima ε sofrida?",
    "options": [
      "ε = 0,10 (ou 10% de deformação relativa).",
      "ε = 0,40.",
      "ε = 1,10.",
      "ε = 0,01."
    ],
    "correctIndex": 0,
    "explanation": "O alongamento foi ΔL = L_final - L₀ = 4,4 cm - 4,0 cm = 0,4 cm. A deformação relativa é ε = ΔL / L₀ = 0,4 cm / 4,0 cm = 0,10 (isto é, 10%).",
    "distractorAnalysis": [
      "Está incorreta: confunde o alongamento absoluto de 0,4 cm com a fração relativa 0,10.",
      "Está incorreta: divide o comprimento final pelo inicial (L_final / L₀ = 1,10).",
      "Está incorreta: comete um erro decimal por fator de 10."
    ],
    "nursingApplication": "Polímeros de cateteres intravenosos de poliuretano têm elevada capacidade elástica e toleram deformações de 10% a 20% sem fissurar; o enfermeiro inspeciona a integridade do cateter para garantir que não houve estrangulamento do lúmen ou microfissuras após trações acidentais."
  },
  {
    "id": 2103,
    "topicId": 2,
    "question": "O 'Coeficiente de Poisson' (ν) de um biomaterial descreve a relação mecânica entre:",
    "options": [
      "A deformação transversal de contração lateral e a deformação longitudinal de tração (ν = - ε_transversal / ε_longitudinal): quando esticamos um tubo de borracha no comprimento, ele estreita o seu diâmetro.",
      "A temperatura da pele e a pressão atmosférica.",
      "A frequência cardíaca e a frequência respiratória.",
      "O volume de urina e a ingestão de água."
    ],
    "correctIndex": 0,
    "explanation": "O coeficiente de Poisson (tipicamente entre 0,3 e 0,5 para elastómeros e tecidos moles biológicos quase incompressíveis) quantifica o adelgaçamento lateral que acompanha o estiramento longitudinal. Quando puxamos uma mangueira elástica, o seu raio diminui.",
    "distractorAnalysis": [
      "Está incorreta: não possuem relação com a mecânica de materiais elásticos.",
      "Está incorreta: não possuem relação com a mecânica de materiais elásticos.",
      "Está incorreta: não possuem relação com a mecânica de materiais elásticos."
    ],
    "nursingApplication": "Ao esticar longitudinalmente um cateter maleável para forçar a sua passagem através de um introdutor valvulado estreito, o efeito de Poisson diminui o seu diâmetro exterior facilitando a progressão; contudo, o enfermeiro sabe que tracionar em excesso pode diminuir temporariamente o lúmen interno."
  },
  {
    "id": 2104,
    "topicId": 2,
    "question": "A Lei de Hooke para a elasticidade unidimensional linear estabelece que a tensão mecânica σ é diretamente proporcional à deformação relativa ε no regime elástico, sendo expressa por:",
    "options": [
      "σ = E · ε (onde E é o Módulo de Young ou Módulo de Elasticidade Longitudinal).",
      "σ = E / ε²",
      "σ = m · g · ε",
      "σ = P · V / n·R·T"
    ],
    "correctIndex": 0,
    "explanation": "Formulada originalmente por Robert Hooke em 1676 ('Ut tensio, sic vis' - 'Qual a extensão, tal a força'), a relação tensão-deformação é linear no regime elástico: a constante de proporcionalidade E (Módulo de Young) mede a rigidez intrínseca do material e expressa-se em Pascal (N/m²).",
    "distractorAnalysis": [
      "Está incorreta: introduz uma dependência não-linear incorreta.",
      "Está incorreta: mistura a aceleração gravitacional com a lei constitutiva do material.",
      "Está incorreta: é a lei dos gases perfeitos."
    ],
    "nursingApplication": "A Lei de Hooke é a base da física de molas em seringas automáticas, dinamómetros e camas hospitalares: dentro do limite elástico, duplicar a força aplicada duplica com rigor a deformação elástica do componente."
  },
  {
    "id": 2105,
    "topicId": 2,
    "question": "O Módulo de Young (E) é uma propriedade mecânica intrínseca que quantifica:",
    "options": [
      "A RIGIDEZ elástica do material: quanto maior o Módulo de Young, mais rígido é o material e menor é a deformação sofrida para uma dada força aplicada.",
      "A velocidade máxima com que o material se dissolve na água.",
      "A quantidade de calorias nutricionais contidas no polímero.",
      "A radioatividade natural do núcleo atómico do composto."
    ],
    "correctIndex": 0,
    "explanation": "O Módulo de Young traduz a resistência que as ligações interatómicas e intermoleculares opõem ao estiramento. O diamante tem E ~ 1200 GPa (extremamente rígido), o aço cirúrgico tem E ~ 200 GPa, o osso cortical tem E ~ 18 GPa e a borracha de silicone tem E ~ 0,005 GPa (muito elástica e flexível).",
    "distractorAnalysis": [
      "Está incorreta: confundem rigidez mecânica com solubilidade química, bioenergética alimentar ou radioatividade.",
      "Está incorreta: confundem rigidez mecânica com solubilidade química, bioenergética alimentar ou radioatividade.",
      "Está incorreta: confundem rigidez mecânica com solubilidade química, bioenergética alimentar ou radioatividade."
    ],
    "nursingApplication": "Cateteres de silicone têm baixo Módulo de Young (macios e atraumáticos para permanência venosa prolongada), enquanto cateteres de poliuretano têm Módulo de Young inicial mais alto (maior rigidez para facilitar a punção sem dobrar, amolecendo à temperatura do sangue)."
  },
  {
    "id": 2106,
    "topicId": 2,
    "question": "Comparando uma sonda gástrica rígida de PVC com uma sonda de nutrição entérica de poliuretano/silicone de mesmo calibre, o silicone possui um Módulo de Young muito inferior ao PVC. Qual é a repercussão clínica no conforto do doente?",
    "options": [
      "A sonda de silicone/poliuretano de baixo Módulo de Young deforma-se com muito menor tensão mecânica, adaptando-se com extrema suavidade às curvaturas anatómicas da faringe e esófago sem provocar escaras na mucosa.",
      "A sonda de silicone torna-se rígida como aço no estômago.",
      "A sonda de PVC é mais macia e não causa lesões.",
      "Nenhuma repercussão, pois todas as sondas têm exatamente a mesma rigidez."
    ],
    "correctIndex": 0,
    "explanation": "Materiais com baixo Módulo de Young deformam-se com facilidade perante pequenas forças de contacto, exercendo pressões reduzidas sobre as paredes da mucosa nasal e digestiva. O PVC, com Módulo de Young elevado, mantém rigidez e pode causar úlceras por decúbito no esófago se deixado por semanas.",
    "distractorAnalysis": [
      "Está incorreta: inverte as propriedades elásticas do silicone.",
      "Está incorreta: nega a dureza plástica conhecida do policloreto de vinilo (PVC).",
      "Está incorreta: ignora a vasta gama de módulos elásticos dos biomateriais."
    ],
    "nursingApplication": "Para nutrição entérica de média a longa duração (> 4 semanas), o enfermeiro escolhe sempre sondas de poliuretano com fio-guia metálico (mandril): o mandril fornece a rigidez transitória para a inserção e a sonda flexível permanece no doente sem agredir a mucosa."
  },
  {
    "id": 2107,
    "topicId": 2,
    "question": "Na Curva Tensão-Deformação típica de um material dúctil, o que representa o 'Limite Elástico' (ou Ponto de Cedência / Tensão de Escoamento)?",
    "options": [
      "O valor limite de tensão a partir do qual as deformações deixam de ser reversíveis e o material começa a sofrer deformação plástica permanente irreversível.",
      "O ponto exato onde o material parte instantaneamente ao meio.",
      "A temperatura onde o material entra em ebulição.",
      "O início do regime perfeitamente linear de Hooke."
    ],
    "correctIndex": 0,
    "explanation": "Abaixo do limite elástico, o material obedece ao comportamento elástico reversível. Se a tensão aplicada ultrapassar este patamar (tensão de cedência σ_y), ocorre escorregamento microscópico de planos atómicos e o material entra em escoamento plástico, não recuperando o tamanho original quando a carga for retirada.",
    "distractorAnalysis": [
      "Está incorreta: é a Tensão de Rutura (Ponto de Fratura), que ocorre muito depois do limite elástico.",
      "Está incorreta: confunde propriedades mecânicas com mudança de fase termodinâmica.",
      "Está incorreta: descreve a origem da curva no limite de proporcionalidade."
    ],
    "nursingApplication": "Ao aplicar um torniquete elástico ou moldar um fixador ortopédico, o enfermeiro sabe que se puxar o elástico para além do seu limite elástico, o material sofre 'escoamento plástico' e perde a capacidade de comprimir o membro de forma eficaz nos turnos seguintes."
  },
  {
    "id": 2108,
    "topicId": 2,
    "question": "O 'Balão de Retenção de uma Sonda Vesical de Foley' é fabricado em látex ou silicone de alta elasticidade. O que acontece se o enfermeiro insuflar o balão de 10 mL com 50 mL de água destilada?",
    "options": [
      "A tensão na parede elástica ultrapassa a Tensão Máxima de Rutura do elastómero (Ultimate Tensile Strength), provocando a explosão mecânica do balão no interior da bexiga com risco de retenção de fragmentos e hematúria.",
      "O balão encolhe espontaneamente para 5 mL por termodinâmica inversa.",
      "A bexiga converte a água destilada em urina concentrada instantaneamente.",
      "O silicone transforma-se em metal biocompatível."
    ],
    "correctIndex": 0,
    "explanation": "Insuflar 50 mL num balão calibrado para 10 mL produz uma deformação relativa excessiva (ε >> ε_limite): a tensão tangencial de estiramento excede a tensão de rutura do material, rasgando o balão de forma abrupta.",
    "distractorAnalysis": [
      "Está incorreta: descrevem fenómenos inexistentes que violam a física dos materiais e a anatomofisiologia urinária.",
      "Está incorreta: descrevem fenómenos inexistentes que violam a física dos materiais e a anatomofisiologia urinária.",
      "Está incorreta: descrevem fenómenos inexistentes que violam a física dos materiais e a anatomofisiologia urinária."
    ],
    "nursingApplication": "O enfermeiro insufla o balão de Foley estritamente com o volume exato especificado pelo fabricante no conector da sonda (geralmente 10 mL de água bidestilada estéril, nunca soro fisiológico que pode cristalizar na válvula), evitando ruturas traumáticas e espasmos vesicais."
  },
  {
    "id": 2109,
    "topicId": 2,
    "question": "Um material 'Tenaz' (como o fio de sutura cirúrgica de polipropileno - Prolene) distingue-se de um material 'Frágil' (como o vidro ou a porcelana) porque:",
    "options": [
      "Possui uma grande capacidade de absorver energia mecânica e sofrer extensa deformação plástica antes de fraturar (área total sob a curva tensão-deformação elevada).",
      "Fratura instantaneamente à mínima deformação elástica com σ = 0.",
      "É solúvel em água salgada hospitalar.",
      "Não tem massa atómica."
    ],
    "correctIndex": 0,
    "explanation": "A tenacidade mecânica é medida pela integral da curva tensão-deformação (energia de deformação por unidade de volume absorvida até à rutura). Materiais frágeis partem sem aviso e quase sem deformação plástica; materiais tenazes deformam-se plasticamente de forma ampla, dissipando energia antes de romperem.",
    "distractorAnalysis": [
      "Está incorreta: define materiais frágeis.",
      "Está incorreta: são afirmações erróneas sem sentido reológico.",
      "Está incorreta: são afirmações erróneas sem sentido reológico."
    ],
    "nursingApplication": "Em suturas vasculares de grandes artérias pulsáteis (aorta, artéria femoral), o cirurgião e o enfermeiro utilizam fios monofilamentares tenazes de polipropileno: suportam ciclos contínuos de estiramento pulsátil sistólico sem sofrerem rutura frágil por fadiga mecânica."
  },
  {
    "id": 2110,
    "topicId": 2,
    "question": "A maioria dos tecidos biológicos humanos (tendões, ligamentos, pele, cartilagem e vasos sanguíneos) é classificada mecanicamente como 'Viscoelástica'. A Viscoelasticidade caracteriza-se por:",
    "options": [
      "Apresentar uma resposta mista dependente do tempo que combina propriedades de sólido elástico (rigidez e capacidade de restauração) com propriedades de líquido viscoso (dissipação de energia, fluência e relaxamento de tensões).",
      "Comportar-se estritamente como metal inerte a qualquer temperatura.",
      "Ser totalmente impermeável à luz e aos raios X.",
      "Perder 100% da sua massa durante a contração."
    ],
    "correctIndex": 0,
    "explanation": "Materiais viscoelásticos exibem três fenómenos típicos dependentes do tempo: 1) Fluência (creep - aumento da deformação sob tensão constante); 2) Relaxamento de tensão (stress relaxation - diminuição da tensão sob deformação constante); 3) Histerese elástica (dissipação de energia térmica no ciclo de carga e descarga).",
    "distractorAnalysis": [
      "Está incorreta: ignoram a biofísica reológica dos tecidos vivos hidratados ricos em colagénio e água.",
      "Está incorreta: ignoram a biofísica reológica dos tecidos vivos hidratados ricos em colagénio e água.",
      "Está incorreta: ignoram a biofísica reológica dos tecidos vivos hidratados ricos em colagénio e água."
    ],
    "nursingApplication": "Compreender a viscoelasticidade é crucial no posicionamento: quando se coloca uma tala ou tração, a resistência do tecido muscular e fascial diminui ligeiramente ao longo dos primeiros 20 minutos (relaxamento de tensões), exigindo que o enfermeiro reavalie o aperto da imobilização."
  },
  {
    "id": 2111,
    "topicId": 2,
    "question": "O fenómeno da 'Histerese Elástica' num ciclo de estiramento e relaxamento de uma ligadura elástica ou tendão biológico é evidenciado por:",
    "options": [
      "A curva de descarga (retorno) não coincidir com a curva de carga, formando um ciclo cuja área interna representa a energia mecânica dissipada sob a forma de calor.",
      "O retorno exato pela mesma linha sem qualquer perda de energia.",
      "O congelamento instantâneo do material elástico a 0 °C.",
      "A transformação do elástico em gás carbónico."
    ],
    "correctIndex": 0,
    "explanation": "Na histerese, a força exercida durante a recuperação elástica é menor do que a força necessária para deformar o material na ida. A área delimitada pelo ciclo de histerese representa a perda viscosa de energia mecânica por atrito intermolecular, convertida em calor tecidual.",
    "distractorAnalysis": [
      "Está incorreta: descreve elasticidade puramente conservativa sem perdas viscosas.",
      "Está incorreta: são alegações termodinâmicas estapafúrdias.",
      "Está incorreta: são alegações termodinâmicas estapafúrdias."
    ],
    "nursingApplication": "A histerese do colagénio e elastina na pele e tendões atua como um amortecedor biológico que dissipa o choque mecânico de saltos e impactos; o enfermeiro sabe que tendões inflamados ou envelhecidos perdem água e tenacidade, tornando-se vulneráveis a microrroturas."
  },
  {
    "id": 2112,
    "topicId": 2,
    "question": "As meias de compressão elástica graduada perdem gradualmente a sua elasticidade e tensão terapêutica ao longo de meses de uso e lavagens repetidas. Este fenómeno mecânico é designado por:",
    "options": [
      "Fadiga elástica do material polimérico (despolimerização e quebra de cadeias de elastano/spandex por ciclos mecânicos e detergentes térmicos).",
      "Evaporação do oxigénio das fibras da meia.",
      "Fusão nuclear do algodão com a queratina da pele.",
      "Aumento espontâneo da gravidade nas pernas do doente."
    ],
    "correctIndex": 0,
    "explanation": "Milhares de ciclos de estiramento diário e a agressão térmica/química das lavagens provocam fadiga mecânica dos filamentos elastoméricos: o módulo elástico cai e a pressão aplicada no tornozelo desce abaixo da faixa terapêutica prescrita (ex: de 20-30 mmHg para menos de 10 mmHg).",
    "distractorAnalysis": [
      "Está incorreta: descrevem processos físicos ou atómicos impossíveis nas roupas hospitalares.",
      "Está incorreta: descrevem processos físicos ou atómicos impossíveis nas roupas hospitalares.",
      "Está incorreta: descrevem processos físicos ou atómicos impossíveis nas roupas hospitalares."
    ],
    "nursingApplication": "O enfermeiro ensina o doente com insuficiência venosa crónica ou linfedema a substituir as meias elásticas de compressão a cada 4 a 6 meses de uso diário, pois mesmo parecendo inteiras, meias velhas perdem o gradiente de pressão biofísico que previne o edema e as úlceras venosas."
  },
  {
    "id": 2113,
    "topicId": 2,
    "question": "O 'Relaxamento de Tensões' (Stress Relaxation) de um garrote elétrico de látex ou silicone mantido esticado à volta do braço do doente durante 5 minutos significa que:",
    "options": [
      "A força e a pressão de aperto exercidas pelo garrote diminuem espontaneamente com o tempo, mesmo mantendo o mesmo diâmetro e comprimento esticado.",
      "O garrote aperta cada vez mais até quebrar os ossos do braço.",
      "O garrote transforma-se num fluido newtoniano incompressível.",
      "A temperatura da borracha desce para o zero absoluto."
    ],
    "correctIndex": 0,
    "explanation": "O relaxamento de tensão é a diminuição progressiva da tensão interna num material viscoelástico sujeito a uma deformação constante (ε = constante). O rearranjo molecular das cadeias poliméricas dissipa o stress mecânico interno, relaxando a força externa exercida.",
    "distractorAnalysis": [
      "Está incorreta: violaria a viscoelasticidade, descrevendo uma contração ativa impossível na borracha passiva.",
      "Está incorreta: são disparates mecânicos e térmicos.",
      "Está incorreta: são disparates mecânicos e térmicos."
    ],
    "nursingApplication": "O relaxamento de tensão em tubos elásticos e ligaduras alerta o enfermeiro: ligaduras compressivas aplicadas em membros com edema precisam de ser reavaliadas periodicamente, pois o relaxamento do tecido e a reabsorção do edema reduzem a pressão terapêutica necessária."
  },
  {
    "id": 2114,
    "topicId": 2,
    "question": "A síntese biofísica do Tópico 2 estabelece que os conceitos de Alavanca, Vantagem Mecânica, Elasticidade e Reologia fornecem ao enfermeiro:",
    "options": [
      "As bases científicas rigorosas para operar instrumentos cirúrgicos com precisão, prescrever dispositivos de compressão e alívio com fundamento reológico e prevenir lesões no doente e no profissional através do domínio do binário de forças e deformação de biomateriais.",
      "Apenas uma lista de nomes gregos e latinos para decorar sem utilidade hospitalar.",
      "A capacidade de substituir os médicos cirurgiões em transplantes cardíacos.",
      "A permissão para abolir o uso de luvas e equipamentos de proteção individual."
    ],
    "correctIndex": 0,
    "explanation": "A biofísica das alavancas e da elasticidade dos corpos é a linguagem da engenharia médica aplicada à biologia humana: desde a alavanca que corta um gesso ou drena um abcesso até à elasticidade dos cateteres venosos e balões de Foley, estes princípios garantem a segurança do doente e a excelência profissional da enfermagem.",
    "distractorAnalysis": [
      "Está incorreta: são afirmações cínicas, antiéticas ou ilegais que contrariam o propósito da formação universitária de enfermagem.",
      "Está incorreta: são afirmações cínicas, antiéticas ou ilegais que contrariam o propósito da formação universitária de enfermagem.",
      "Está incorreta: são afirmações cínicas, antiéticas ou ilegais que contrariam o propósito da formação universitária de enfermagem."
    ],
    "nursingApplication": "Compreender os princípios do Tópico 2 consolida no futuro enfermeiro uma mente analítica e científica, capaz de correlacionar a mecânica newtoniana e a ciência dos polímeros com o conforto, segurança e recuperação clínica de cada doente a seu cargo."
  },
  {
    "id": 2115,
    "topicId": 2,
    "question": "Na análise biomecânica e reológica de biomateriais em enfermagem, o/a cateter venoso central de poliuretano desempenha um papel clínico crucial. Como se explica o seu comportamento à luz das propriedades mecânicas de tensão, elasticidade e materiais?",
    "options": [
      "Comporta-se como um biomaterial específico: polímero termoplástico com E inicial de ~300 MPa que amolece à temperatura corporal de 37 °C para E ~30 MPa, reduzindo a irritação mecânica endotelial e o risco de flebite ou perfuração venosa.",
      "Comporta-se como um elastómero com módulo de Young que aumenta acentuadamente à temperatura corporal, tornando-se mais rígido e friável no sangue do que à temperatura ambiente.",
      "Sofre deformação plástica irreversível imediata ao contacto com soros aquosos, colapsando o lúmen vascular sob qualquer fluxo de perfusão.",
      "Exibe histerese nula e rigidez idêntica ao aço cirúrgico, mantendo o mesmo módulo elástico inalterado quer dentro quer fora do leito vascular."
    ],
    "correctIndex": 0,
    "explanation": "O/A cateter venoso central de poliuretano caracteriza-se biofisicamente por ser um polímero termoplástico com E inicial de ~300 MPa que amolece à temperatura corporal de 37 °C para E ~30 MPa, reduzindo a irritação mecânica endotelial e o risco de flebite ou perfuração venosa. Esta propriedade garante a adaptação funcional e a segurança do doente durante a intervenção clínica.",
    "distractorAnalysis": [
      "Está incorreta porque o poliuretano termoplástico amolece com o calor corporal (diminui o Módulo de Young), reduzindo a rigidez e não aumentando-a.",
      "Está incorreta porque os cateteres venosos são polímeros projetados para operar na região elástica, mantendo o lúmen pérvio sem colapso plástico.",
      "Está incorreta porque o poliuretano é um polímero viscoelástico com histerese mensurável e flexibilidade muito superior à dos metais."
    ],
    "nursingApplication": "O enfermeiro aplica este princípio ao manipular o/a cateter venoso central de poliuretano: compreender a sua elasticidade, módulo de deformação e limites de resistência evita falhas mecânicas iatrogénicas, roturas acidentais e lesões teciduais na pessoa cuidada."
  },
  {
    "id": 2116,
    "topicId": 2,
    "question": "Na análise biomecânica e reológica de biomateriais em enfermagem, o/a fio de sutura absorvível de ácido poliglicólico (Dexon) desempenha um papel clínico crucial. Como se explica o seu comportamento à luz das propriedades mecânicas de tensão, elasticidade e materiais?",
    "options": [
      "Comporta-se como um biomaterial específico: polímero multifilamentar trançado que perde a sua tensão de rutura elástica em cerca de 3 a 4 semanas por hidrólise química gradual das pontes éster.",
      "Mantém a sua tensão de tração máxima intacta indefinidamente por ser um polímero não-biodegradável inerte.",
      "Sofre hidrólise instantânea nos primeiros 5 minutos após implantação, perdendo 100% da resistência mecânica antes de qualquer hemostase.",
      "Apresenta comportamento superelástico com recuperação de 1000% de deformação, comportando-se como borracha de silicone vulcanizada."
    ],
    "correctIndex": 0,
    "explanation": "O/A fio de sutura absorvível de ácido poliglicólico (Dexon) caracteriza-se biofisicamente por ser um polímero multifilamentar trançado que perde a sua tensão de rutura elástica em cerca de 3 a 4 semanas por hidrólise química gradual das pontes éster. Esta propriedade garante a adaptação funcional e a segurança do doente durante a intervenção clínica.",
    "distractorAnalysis": [
      "Está incorreta porque o ácido poliglicólico é absorvível e perde cerca de 50% da sua força de tensão às 2 a 3 semanas.",
      "Está incorreta porque a degradação hidrolítica é gradual e programada, retendo suporte mecânico essencial durante a fase crítica de cicatrização.",
      "Está incorreta porque o PGA é um polímero rígido multifilamentar com deformação elástica limitada (~15-30%), não um elastómero vulcanizado."
    ],
    "nursingApplication": "O enfermeiro aplica este princípio ao manipular o/a fio de sutura absorvível de ácido poliglicólico (Dexon): compreender a sua elasticidade, módulo de deformação e limites de resistência evita falhas mecânicas iatrogénicas, roturas acidentais e lesões teciduais na pessoa cuidada."
  },
  {
    "id": 2117,
    "topicId": 2,
    "question": "Na análise biomecânica e reológica de biomateriais em enfermagem, o/a tubuladura de perfusão em PVC plastificado desempenha um papel clínico crucial. Como se explica o seu comportamento à luz das propriedades mecânicas de tensão, elasticidade e materiais?",
    "options": [
      "Comporta-se como um biomaterial específico: material com plastificantes (como o DEHP) que aumentam a flexibilidade mecânica, mas que podem adsorver fármacos lipofílicos como o diazepam e nitroglicerina, exigindo linhas de polietileno dedicadas.",
      "Apresenta um módulo elástico infinitamente elevado, quebrando por fratura frágil com qualquer curvatura suave.",
      "É composto por borracha natural vulcanizada que liberta toxinas quando em contacto com soluções salinas a 0,9%.",
      "Tem comportamento reológico de metal líquido com escoamento sob gravidade que impede a calibragem de gotas no infusor."
    ],
    "correctIndex": 0,
    "explanation": "O/A tubuladura de perfusão em PVC plastificado caracteriza-se biofisicamente por ser um material com plastificantes (como o DEHP) que aumentam a flexibilidade mecânica, mas que podem adsorver fármacos lipofílicos como o diazepam e nitroglicerina, exigindo linhas de polietileno dedicadas. Esta propriedade garante a adaptação funcional e a segurança do doente durante a intervenção clínica.",
    "distractorAnalysis": [
      "Está incorreta porque o PVC plastificado é altamente flexível e dúctil, dobrando-se facilmente sem fraturar.",
      "Está incorreta porque as tubuladuras são fabricadas em PVC grau médico livre de látex para compatibilidade intravenosa.",
      "Está incorreta porque o PVC é um material sólido amorfo termoplástico, não um líquido condutor."
    ],
    "nursingApplication": "O enfermeiro aplica este princípio ao manipular o/a tubuladura de perfusão em PVC plastificado: compreender a sua elasticidade, módulo de deformação e limites de resistência evita falhas mecânicas iatrogénicas, roturas acidentais e lesões teciduais na pessoa cuidada."
  },
  {
    "id": 2118,
    "topicId": 2,
    "question": "Na análise biomecânica e reológica de biomateriais em enfermagem, o/a balão de cateter de angioplastia coronária desempenha um papel clínico crucial. Como se explica o seu comportamento à luz das propriedades mecânicas de tensão, elasticidade e materiais?",
    "options": [
      "Comporta-se como um biomaterial específico: polímero com Módulo de Young elevadíssimo (não-complacente) para suportar pressões internas de 15 a 20 atmosferas sem dilatar de diâmetro, esmagando a placa de ateroma.",
      "Expande indefinidamente de forma linear com a pressão, duplicando de diâmetro a cada atmosfera adicional e dissecando a coronária.",
      "Comporta-se como um balão de elastómero de látex que atinge volumes descontrolados nas áreas de menor resistência da artéria.",
      "Apresenta limite elástico nulo, quebrando por estilhaçamento cerâmico logo aos 2 bar de pressão manométrica."
    ],
    "correctIndex": 0,
    "explanation": "O/A balão de cateter de angioplastia coronária caracteriza-se biofisicamente por ser um polímero com Módulo de Young elevadíssimo (não-complacente) para suportar pressões internas de 15 a 20 atmosferas sem dilatar de diâmetro, esmagando a placa de ateroma. Esta propriedade garante a adaptação funcional e a segurança do doente durante a intervenção clínica.",
    "distractorAnalysis": [
      "Está incorreta porque os balões de angioplastia coronária são semi-complacentes ou não-complacentes (ex: PET ou nylon), limitando a expansão radial exata.",
      "Está incorreta porque o látex é altamente complacente e inadequado para dilatar estenoses calcificadas com precisão milimétrica.",
      "Está incorreta porque os polímeros de angioplastia suportam pressões de 14 a 20 atm com elevada resistência à tração circunferencial."
    ],
    "nursingApplication": "O enfermeiro aplica este princípio ao manipular o/a balão de cateter de angioplastia coronária: compreender a sua elasticidade, módulo de deformação e limites de resistência evita falhas mecânicas iatrogénicas, roturas acidentais e lesões teciduais na pessoa cuidada."
  },
  {
    "id": 2119,
    "topicId": 2,
    "question": "Na análise biomecânica e reológica de biomateriais em enfermagem, o/a sonda endotraqueal com cuff de baixa pressão e alto volume desempenha um papel clínico crucial. Como se explica o seu comportamento à luz das propriedades mecânicas de tensão, elasticidade e materiais?",
    "options": [
      "Comporta-se como um biomaterial específico: membrana de PVC ou poliuretano de alta complacência elástica que veda a traqueia com pressão de contacto controlada entre 20 e 30 cmH₂O, prevenindo isquemia da mucosa traqueal.",
      "Exige pressões de enchimento de 80 a 100 mmHg para selar a via aérea, sem qualquer impacto na microcirculação traqueal.",
      "Apresenta uma membrana hiper-rígida de baixa complacência que só expande quando a pressão ultrapassa a pressão arterial sistólica do doente.",
      "Colapsa espontaneamente a cada ciclo de ventilação mecânica positiva por ter módulo de Young negativo."
    ],
    "correctIndex": 0,
    "explanation": "O/A sonda endotraqueal com cuff de baixa pressão e alto volume caracteriza-se biofisicamente por ser um membrana de PVC ou poliuretano de alta complacência elástica que veda a traqueia com pressão de contacto controlada entre 20 e 30 cmH₂O, prevenindo isquemia da mucosa traqueal. Esta propriedade garante a adaptação funcional e a segurança do doente durante a intervenção clínica.",
    "distractorAnalysis": [
      "Está incorreta porque pressões de cuff acima de 30 cmH₂O (~22 mmHg) provocam isquemia da mucosa traqueal e estenose pós-intubação.",
      "Está incorreta porque os cuffs HVLP têm parede fina e grande complacência para selar com baixas pressões transmurais.",
      "Está incorreta porque materiais com módulo elástico negativo não existem na engenharia de biomateriais clínicos comuns."
    ],
    "nursingApplication": "O enfermeiro aplica este princípio ao manipular o/a sonda endotraqueal com cuff de baixa pressão e alto volume: compreender a sua elasticidade, módulo de deformação e limites de resistência evita falhas mecânicas iatrogénicas, roturas acidentais e lesões teciduais na pessoa cuidada."
  },
  {
    "id": 2120,
    "topicId": 2,
    "question": "Na análise biomecânica e reológica de biomateriais em enfermagem, o/a meia de compressão elástica graduada Classe 2 desempenha um papel clínico crucial. Como se explica o seu comportamento à luz das propriedades mecânicas de tensão, elasticidade e materiais?",
    "options": [
      "Comporta-se como um biomaterial específico: malha elástica circular com elastano que aplica uma pressão decrescente de 23-32 mmHg no tornozelo, promovendo o retorno venoso e reduzindo o diâmetro das veias para acelerar a velocidade do sangue.",
      "Aplica pressão máxima na raiz da coxa (30 mmHg) e pressão nula no tornozelo, promovendo o represamento venoso distal.",
      "Funciona como um torniquete hemostático rígido de compressão uniforme de 120 mmHg ao longo de todo o membro inferior.",
      "Perde toda a elasticidade nos primeiros 10 segundos de uso, tornando-se um tubo inerte desprovido de tensão compressiva."
    ],
    "correctIndex": 0,
    "explanation": "O/A meia de compressão elástica graduada Classe 2 caracteriza-se biofisicamente por ser um malha elástica circular com elastano que aplica uma pressão decrescente de 23-32 mmHg no tornozelo, promovendo o retorno venoso e reduzindo o diâmetro das veias para acelerar a velocidade do sangue. Esta propriedade garante a adaptação funcional e a segurança do doente durante a intervenção clínica.",
    "distractorAnalysis": [
      "Está incorreta porque a compressão elástica graduada aplica pressão decrescente do tornozelo para a coxa para favorecer o retorno venoso.",
      "Está incorreta porque pressões de 120 mmHg ocluiriam o fluxo arterial, causando isquemia aguda grave do membro.",
      "Está incorreta porque as meias elásticas são tecidas com elastómeros com elevada memória e recuperação elástica prolongada."
    ],
    "nursingApplication": "O enfermeiro aplica este princípio ao manipular o/a meia de compressão elástica graduada Classe 2: compreender a sua elasticidade, módulo de deformação e limites de resistência evita falhas mecânicas iatrogénicas, roturas acidentais e lesões teciduais na pessoa cuidada."
  },
  {
    "id": 2121,
    "topicId": 2,
    "question": "Na análise biomecânica e reológica de biomateriais em enfermagem, o/a penso de alginato de cálcio em ferida cavitária exsudativa desempenha um papel clínico crucial. Como se explica o seu comportamento à luz das propriedades mecânicas de tensão, elasticidade e materiais?",
    "options": [
      "Comporta-se como um biomaterial específico: biomaterial fibroso de algas castanhas que sofre troca iónica com o sódio do exsudado (Ca²⁺ por Na⁺), convertendo-se num gel reológico macio que preenche o espaço morto sem comprimir o leito microvascular.",
      "Atua como uma resina epóxi impermeável que sela hermeticamente a ferida e impede qualquer troca gasosa ou drenagem.",
      "Comporta-se como uma folha metálica rígida que exerce pressão constante de 50 mmHg sobre o leito de granulação.",
      "Solidifica instantaneamente num bloco cerâmico abrasivo que lacera os bordos da lesão durante o penso."
    ],
    "correctIndex": 0,
    "explanation": "O/A penso de alginato de cálcio em ferida cavitária exsudativa caracteriza-se biofisicamente por ser um biomaterial fibroso de algas castanhas que sofre troca iónica com o sódio do exsudado (Ca²⁺ por Na⁺), convertendo-se num gel reológico macio que preenche o espaço morto sem comprimir o leito microvascular. Esta propriedade garante a adaptação funcional e a segurança do doente durante a intervenção clínica.",
    "distractorAnalysis": [
      "Está incorreta porque o alginato forma um gel hidrofílico biocompatível que mantém ambiente húmido favorável à cicatrização.",
      "Está incorreta porque o penso de alginato é macio e maleável, conformando-se às cavidades sem exercer compressão metálica.",
      "Está incorreta porque a troca iónica cálcio-sódio gelifica o curativo, permitindo remoção indolor sem traumatizar tecidos neoformados."
    ],
    "nursingApplication": "O enfermeiro aplica este princípio ao manipular o/a penso de alginato de cálcio em ferida cavitária exsudativa: compreender a sua elasticidade, módulo de deformação e limites de resistência evita falhas mecânicas iatrogénicas, roturas acidentais e lesões teciduais na pessoa cuidada."
  },
  {
    "id": 2122,
    "topicId": 2,
    "question": "Na análise biomecânica e reológica de biomateriais em enfermagem, o/a dreno cirúrgico de sucção fechada (tipo Jackson-Pratt ou Redon) desempenha um papel clínico crucial. Como se explica o seu comportamento à luz das propriedades mecânicas de tensão, elasticidade e materiais?",
    "options": [
      "Comporta-se como um biomaterial específico: fole elástico de silicone que atua como reservatório de vácuo mecânico sob a Lei de Hooke, mantendo pressão negativa suave constante para drenagem de hematomas pós-operatórios.",
      "Gera vácuo através de uma turbina mecânica ativa de 220 V embutida no fole de recolha de secreções.",
      "Depende exclusivamente da força gravitacional descendente, perdendo toda a eficácia se o reservatório estiver ao nível do leito.",
      "Apresenta fole sem memória elástica que permanece permanentemente esmagado sem gerar qualquer diferencial de pressão."
    ],
    "correctIndex": 0,
    "explanation": "O/A dreno cirúrgico de sucção fechada (tipo Jackson-Pratt ou Redon) caracteriza-se biofisicamente por ser um fole elástico de silicone que atua como reservatório de vácuo mecânico sob a Lei de Hooke, mantendo pressão negativa suave constante para drenagem de hematomas pós-operatórios. Esta propriedade garante a adaptação funcional e a segurança do doente durante a intervenção clínica.",
    "distractorAnalysis": [
      "Está incorreta porque os drenos de aspiração fechada funcionam por retorno elástico passivo do reservatório comprimido manualmente.",
      "Está incorreta porque a pressão negativa intra-reservatório aspira ativamente os fluidos mesmo contra gradientes hidrostáticos moderados.",
      "Está incorreta porque o fole de silicone ou polietileno possui memória elástica projetada para manter vácuo suave (-50 a -100 mmHg)."
    ],
    "nursingApplication": "O enfermeiro aplica este princípio ao manipular o/a dreno cirúrgico de sucção fechada (tipo Jackson-Pratt ou Redon): compreender a sua elasticidade, módulo de deformação e limites de resistência evita falhas mecânicas iatrogénicas, roturas acidentais e lesões teciduais na pessoa cuidada."
  },
  {
    "id": 2123,
    "topicId": 2,
    "question": "Na análise biomecânica e reológica de biomateriais em enfermagem, o/a prótese articular de anca com cabeça de cerâmica de zircónia desempenha um papel clínico crucial. Como se explica o seu comportamento à luz das propriedades mecânicas de tensão, elasticidade e materiais?",
    "options": [
      "Comporta-se como um biomaterial específico: biomaterial inorgânico com Módulo de Young extremo (E ~ 210 GPa) e baixíssimo coeficiente de atrito (μ < 0,02 contra polietileno), minimizando o desgaste e a libertação de partículas que causam osteólise asséptica.",
      "Possui módulo de elasticidade idêntico ao da cartilagem hialina (~5 MPa), deformando-se elasticamente em vários milímetros a cada passo.",
      "Apresenta coeficiente de atrito superior ao da lixa industrial, desgastando o componente acetabular em poucos dias.",
      "Sofre fratura por estilhaçamento frágil inevitável sob qualquer impacto ligeiro de marcha normal do doente."
    ],
    "correctIndex": 0,
    "explanation": "O/A prótese articular de anca com cabeça de cerâmica de zircónia caracteriza-se biofisicamente por ser um biomaterial inorgânico com Módulo de Young extremo (E ~ 210 GPa) e baixíssimo coeficiente de atrito (μ < 0,02 contra polietileno), minimizando o desgaste e a libertação de partículas que causam osteólise asséptica. Esta propriedade garante a adaptação funcional e a segurança do doente durante a intervenção clínica.",
    "distractorAnalysis": [
      "Está incorreta porque as cerâmicas de zircónia/alumina são extremamente rígidas (E > 200 GPa) com deformação elástica microscópica.",
      "Está incorreta porque as cabeças cerâmicas são polidas com rugosidade nanométrica e têm coeficiente de atrito articular baixíssimo com UHMWPE.",
      "Está incorreta porque a zircónia estabilizada com ítria possui elevada tenacidade à fratura para suportar picos de carga fisiológicos."
    ],
    "nursingApplication": "O enfermeiro aplica este princípio ao manipular o/a prótese articular de anca com cabeça de cerâmica de zircónia: compreender a sua elasticidade, módulo de deformação e limites de resistência evita falhas mecânicas iatrogénicas, roturas acidentais e lesões teciduais na pessoa cuidada."
  },
  {
    "id": 2124,
    "topicId": 2,
    "question": "Na análise biomecânica e reológica de biomateriais em enfermagem, o/a ligadura de gesso sintético de fibra de vidro impregnada com poliuretano desempenha um papel clínico crucial. Como se explica o seu comportamento à luz das propriedades mecânicas de tensão, elasticidade e materiais?",
    "options": [
      "Comporta-se como um biomaterial específico: material compósito que atinge elevada rigidez e resistência à flexão ao fim de 20 minutos de reação de polimerização com água, sendo três vezes mais leve que o gesso de Paris tradicional.",
      "Permanece indefinidamente maleável e flexível como borracha de silicone, sem conferir qualquer estabilidade mecânica ao membro.",
      "Atinge temperaturas de cura superiores a 150 °C provocando queimaduras de 3.º grau nos tecidos moles subjacentes.",
      "Reverte a sua rigidez tornando-se líquido caso o doente sue ou entre em contacto com a humidade do ar ambiente."
    ],
    "correctIndex": 0,
    "explanation": "O/A ligadura de gesso sintético de fibra de vidro impregnada com poliuretano caracteriza-se biofisicamente por ser um material compósito que atinge elevada rigidez e resistência à flexão ao fim de 20 minutos de reação de polimerização com água, sendo três vezes mais leve que o gesso de Paris tradicional. Esta propriedade garante a adaptação funcional e a segurança do doente durante a intervenção clínica.",
    "distractorAnalysis": [
      "Está incorreta porque a fibra de vidro polimeriza numa estrutura compósita rígida com elevado módulo de flexão.",
      "Está incorreta porque as resinas de poliuretano modernas apresentam reação exotérmica controlada e segura para a pele humana.",
      "Está incorreta porque a polimerização por humidade é uma reação química irreversível e o gesso sintético é resistente à água."
    ],
    "nursingApplication": "O enfermeiro aplica este princípio ao manipular o/a ligadura de gesso sintético de fibra de vidro impregnada com poliuretano: compreender a sua elasticidade, módulo de deformação e limites de resistência evita falhas mecânicas iatrogénicas, roturas acidentais e lesões teciduais na pessoa cuidada."
  },
  {
    "id": 2125,
    "topicId": 2,
    "question": "Na análise biomecânica e reológica de biomateriais em enfermagem, o/a pinça de Kocher hemostática com cremalheira desempenha um papel clínico crucial. Como se explica o seu comportamento à luz das propriedades mecânicas de tensão, elasticidade e materiais?",
    "options": [
      "Comporta-se como um biomaterial específico: alavanca de 1.ª classe com d_P = 12 cm e d_R = 3 cm (VM = 4) que multiplica a força do polegar para ocluir firmemente pedículos vasculares sangrantes.",
      "É uma alavanca de 3.ª classe onde a força aplicada nos anéis é sempre menor que a força exercida nas pontas hemostáticas.",
      "Carece de cremalheira de bloqueio, exigindo que o enfermeiro mantenha pressão digital máxima contínua durante toda a cirurgia.",
      "Tem mandíbulas de chumbo macio que se deformam plasticamente ao primeiro contacto com qualquer vaso sanguíneo."
    ],
    "correctIndex": 0,
    "explanation": "O/A pinça de Kocher hemostática com cremalheira caracteriza-se biofisicamente por ser um alavanca de 1.ª classe com d_P = 12 cm e d_R = 3 cm (VM = 4) que multiplica a força do polegar para ocluir firmemente pedículos vasculares sangrantes. Esta propriedade garante a adaptação funcional e a segurança do doente durante a intervenção clínica.",
    "distractorAnalysis": [
      "Está incorreta porque a pinça de Kocher é uma alavanca de 1.ª classe com ganho mecânico de força devido aos braços de potência longos.",
      "Está incorreta porque a cremalheira no cabo trava os dentes sob tensão elástica de torção das hastes, mantendo oclusão hemostática constante.",
      "Está incorreta porque o instrumento é forjado em aço inoxidável cirúrgico temperado com alta resistência mecânica e dureza."
    ],
    "nursingApplication": "O enfermeiro aplica este princípio ao manipular o/a pinça de Kocher hemostática com cremalheira: compreender a sua elasticidade, módulo de deformação e limites de resistência evita falhas mecânicas iatrogénicas, roturas acidentais e lesões teciduais na pessoa cuidada."
  },
  {
    "id": 2126,
    "topicId": 2,
    "question": "Na análise biomecânica e reológica de biomateriais em enfermagem, o/a articulação do tornozelo no salto e corrida desempenha um papel clínico crucial. Como se explica o seu comportamento à luz das propriedades mecânicas de tensão, elasticidade e materiais?",
    "options": [
      "Comporta-se como um biomaterial específico: alavanca de 2.ª classe onde o tendão de Aquiles ergue todo o peso corporal com VM > 1, multiplicando a força muscular em detrimento do deslocamento angular.",
      "Trata-se de uma alavanca de 3.ª classe com desvantagem mecânica severa que exige forças musculares 20 vezes superiores ao peso corporal.",
      "Funciona como alavanca de 1.ª classe com o fulcro localizado no joelho e a resistência na anca durante a impulsão.",
      "Carece de articulação ou fulcro biomecânico, deslocando o corpo por forças de repulsão eletrostática entre o pé e o pavimento."
    ],
    "correctIndex": 0,
    "explanation": "O/A articulação do tornozelo no salto e corrida caracteriza-se biofisicamente por ser um alavanca de 2.ª classe onde o tendão de Aquiles ergue todo o peso corporal com VM > 1, multiplicando a força muscular em detrimento do deslocamento angular. Esta propriedade garante a adaptação funcional e a segurança do doente durante a intervenção clínica.",
    "distractorAnalysis": [
      "Está incorreta porque a elevação na ponta do pé é o exemplo clássico de alavanca de 2.ª classe com vantagem mecânica de força (VM > 1).",
      "Está incorreta porque o fulcro situa-se na articulação metatarsofalângica e a carga desce pelo eixo da tíbia.",
      "Está incorreta porque o movimento locomotor humano é puramente mecânico-newtoniano e governado por forças de contacto e reação do solo."
    ],
    "nursingApplication": "O enfermeiro aplica este princípio ao manipular o/a articulação do tornozelo no salto e corrida: compreender a sua elasticidade, módulo de deformação e limites de resistência evita falhas mecânicas iatrogénicas, roturas acidentais e lesões teciduais na pessoa cuidada."
  },
  {
    "id": 2127,
    "topicId": 2,
    "question": "Na análise biomecânica e reológica de biomateriais em enfermagem, o/a músculo braquial ao fletir o cotovelo em pronação desempenha um papel clínico crucial. Como se explica o seu comportamento à luz das propriedades mecânicas de tensão, elasticidade e materiais?",
    "options": [
      "Comporta-se como um biomaterial específico: alavanca de 3.ª classe com inserção na apófise coronóideia da ulna (d_P = 3 cm) e resistência na mão (d_R = 32 cm, VM = 0,09), exigindo 11 vezes mais força muscular do que o peso sustentado.",
      "Comporta-se como uma alavanca de 2.ª classe com vantagem mecânica de força de 10, permitindo fletir o cotovelo sem esforço muscular.",
      "Atua como alavanca de 1.ª classe com o fulcro posicionado na palma da mão e a resistência aplicada no ombro.",
      "Apresenta vantagem mecânica igual a 1 porque a distância da inserção do tendão é rigorosamente igual ao comprimento do antebraço."
    ],
    "correctIndex": 0,
    "explanation": "O/A músculo braquial ao fletir o cotovelo em pronação caracteriza-se biofisicamente por ser um alavanca de 3.ª classe com inserção na apófise coronóideia da ulna (d_P = 3 cm) e resistência na mão (d_R = 32 cm, VM = 0,09), exigindo 11 vezes mais força muscular do que o peso sustentado. Esta propriedade garante a adaptação funcional e a segurança do doente durante a intervenção clínica.",
    "distractorAnalysis": [
      "Está incorreta porque o músculo braquial tem a potência entre o fulcro e a resistência, constituindo uma alavanca de 3.ª classe com VM < 1.",
      "Está incorreta porque o fulcro da flexão do cotovelo é a articulação umerocubital, não a extremidade distal do membro.",
      "Está incorreta porque a tuberosidade de inserção está a escassos centímetros do fulcro (3 cm) enquanto a mão dista mais de 30 cm."
    ],
    "nursingApplication": "O enfermeiro aplica este princípio ao manipular o/a músculo braquial ao fletir o cotovelo em pronação: compreender a sua elasticidade, módulo de deformação e limites de resistência evita falhas mecânicas iatrogénicas, roturas acidentais e lesões teciduais na pessoa cuidada."
  },
  {
    "id": 2128,
    "topicId": 2,
    "question": "Na análise biomecânica e reológica de biomateriais em enfermagem, o/a articulação da anca no apoio unipodal (músculo glúteo médio) desempenha um papel clínico crucial. Como se explica o seu comportamento à luz das propriedades mecânicas de tensão, elasticidade e materiais?",
    "options": [
      "Comporta-se como um biomaterial específico: alavanca de 1.ª classe com fulcro na cabeça femoral, o peso do tronco desce medialmente e o glúteo médio traciona lateralmente o trocânter maior para nivelar a bacia.",
      "Constitui uma alavanca de 2.ª classe onde o fulcro se localiza no joelho ipsilateral e a potência no músculo gémeo.",
      "Funciona como alavanca de 3.ª classe com o fulcro na sínfise púbica e a resistência concentrada na coluna cervical.",
      "Tem braço de potência dez vezes mais longo do que o braço de resistência, tornando a força no glúteo médio desprezível."
    ],
    "correctIndex": 0,
    "explanation": "O/A articulação da anca no apoio unipodal (músculo glúteo médio) caracteriza-se biofisicamente por ser um alavanca de 1.ª classe com fulcro na cabeça femoral, o peso do tronco desce medialmente e o glúteo médio traciona lateralmente o trocânter maior para nivelar a bacia. Esta propriedade garante a adaptação funcional e a segurança do doente durante a intervenção clínica.",
    "distractorAnalysis": [
      "Está incorreta porque o fulcro está na cabeça femoral (articulação coxofemoral) entre a linha de peso e a inserção do glúteo (alavanca de 1.ª classe).",
      "Está incorreta porque a sínfise púbica não é o fulcro de rotação pélvica no apoio unipodal durante a marcha.",
      "Está incorreta porque o braço de potência do glúteo médio é mais curto que o braço de resistência do peso do tronco, exigindo força muscular superior ao peso."
    ],
    "nursingApplication": "O enfermeiro aplica este princípio ao manipular o/a articulação da anca no apoio unipodal (músculo glúteo médio): compreender a sua elasticidade, módulo de deformação e limites de resistência evita falhas mecânicas iatrogénicas, roturas acidentais e lesões teciduais na pessoa cuidada."
  },
  {
    "id": 2129,
    "topicId": 2,
    "question": "Na análise biomecânica e reológica de biomateriais em enfermagem, o/a tesoura de corte de ligaduras de Lister com ponta romba desempenha um papel clínico crucial. Como se explica o seu comportamento à luz das propriedades mecânicas de tensão, elasticidade e materiais?",
    "options": [
      "Comporta-se como um biomaterial específico: alavanca de 1.ª classe com lâminas anguladas que permitem deslizar sob a ligadura rente à pele sem ferir o doente, concentrando a força na extremidade de corte.",
      "É uma alavanca de 3.ª classe com as lâminas muito mais longas que os cabos, perdendo toda a força de corte na ponta.",
      "Funciona como plano inclinado puro sem fulcro de rotação nem eixos de charneira articulados.",
      "Exerce corte por fusão térmica por aquecimento friccional instantâneo que cauteriza os tecidos ao cortar ligaduras."
    ],
    "correctIndex": 0,
    "explanation": "O/A tesoura de corte de ligaduras de Lister com ponta romba caracteriza-se biofisicamente por ser um alavanca de 1.ª classe com lâminas anguladas que permitem deslizar sob a ligadura rente à pele sem ferir o doente, concentrando a força na extremidade de corte. Esta propriedade garante a adaptação funcional e a segurança do doente durante a intervenção clínica.",
    "distractorAnalysis": [
      "Está incorreta porque a tesoura de Lister é uma alavanca de 1.ª classe (interfixa) articulada por um parafuso central de rotação.",
      "Está incorreta porque a tesoura opera através do binário de rotação de duas alavancas de 1.ª classe opostas.",
      "Está incorreta porque o corte de ligaduras é puramente mecânico por tensão de cisalhamento entre as duas arestas metálicas afiadas."
    ],
    "nursingApplication": "O enfermeiro aplica este princípio ao manipular o/a tesoura de corte de ligaduras de Lister com ponta romba: compreender a sua elasticidade, módulo de deformação e limites de resistência evita falhas mecânicas iatrogénicas, roturas acidentais e lesões teciduais na pessoa cuidada."
  },
  {
    "id": 2130,
    "topicId": 2,
    "question": "Na análise biomecânica e reológica de biomateriais em enfermagem, o/a porta-agulhas de Mayo-Hegar com mandíbulas de carboneto de tungsténio desempenha um papel clínico crucial. Como se explica o seu comportamento à luz das propriedades mecânicas de tensão, elasticidade e materiais?",
    "options": [
      "Comporta-se como um biomaterial específico: alavanca de 1.ª classe com hastes compridas e bicos curtos estriados que geram enorme torque de preensão impedindo que a agulha cirúrgica curve ou deslize durante a sutura de tecidos espessos.",
      "É uma alavanca de 3.ª classe com hastes curtas e bicos longos que minimiza a força de preensão sobre a agulha.",
      "Tem fulcro elástico de borracha que amortece o aperto, permitindo que a agulha cirúrgica rode livremente nos pontos de sutura.",
      "Aplica força exclusivamente por magnetismo permanente nas mandíbulas, dispensando o torque mecânico manual do cirurgião."
    ],
    "correctIndex": 0,
    "explanation": "O/A porta-agulhas de Mayo-Hegar com mandíbulas de carboneto de tungsténio caracteriza-se biofisicamente por ser um alavanca de 1.ª classe com hastes compridas e bicos curtos estriados que geram enorme torque de preensão impedindo que a agulha cirúrgica curve ou deslize durante a sutura de tecidos espessos. Esta propriedade garante a adaptação funcional e a segurança do doente durante a intervenção clínica.",
    "distractorAnalysis": [
      "Está incorreta porque o porta-agulhas é uma alavanca de 1.ª classe com hastes longas e bicos curtos para amplificar fortemente a força de preensão.",
      "Está incorreta porque a charneira é de aço rígido de alta precisão e as pastilhas de carboneto de tungsténio evitam qualquer rotação da agulha.",
      "Está incorreta porque a retenção da agulha é garantida pelo atrito mecânico e engate mecânico das estrias diamantadas sob pressão."
    ],
    "nursingApplication": "O enfermeiro aplica este princípio ao manipular o/a porta-agulhas de Mayo-Hegar com mandíbulas de carboneto de tungsténio: compreender a sua elasticidade, módulo de deformação e limites de resistência evita falhas mecânicas iatrogénicas, roturas acidentais e lesões teciduais na pessoa cuidada."
  },
  {
    "id": 2131,
    "topicId": 2,
    "question": "Na análise biomecânica e reológica de biomateriais em enfermagem, o/a mandíbula e músculo masséter ao morder um comprimido desempenha um papel clínico crucial. Como se explica o seu comportamento à luz das propriedades mecânicas de tensão, elasticidade e materiais?",
    "options": [
      "Comporta-se como um biomaterial específico: alavanca de 3.ª classe onde a força nos molares posteriores é muito maior do que nos incisivos anteriores devido ao menor braço de resistência.",
      "Constitui uma alavanca de 2.ª classe onde os dentes incisivos exercem o triplo da força de esmagamento dos dentes molares.",
      "Funciona sem articulação fixa, dependendo de forças pneumáticas da cavidade oral para triturar os comprimidos.",
      "Apresenta vantagem mecânica infinitamente grande em todos os pontos da arcada dentária, quebrando qualquer material sem tensão muscular."
    ],
    "correctIndex": 0,
    "explanation": "O/A mandíbula e músculo masséter ao morder um comprimido caracteriza-se biofisicamente por ser um alavanca de 3.ª classe onde a força nos molares posteriores é muito maior do que nos incisivos anteriores devido ao menor braço de resistência. Esta propriedade garante a adaptação funcional e a segurança do doente durante a intervenção clínica.",
    "distractorAnalysis": [
      "Está incorreta porque a mandíbula é uma alavanca de 3.ª classe (músculos mastigatórios entre ATM e dentes); os molares, mais próximos do fulcro, geram maior força.",
      "Está incorreta porque a mastigação é governada pela articulação temporomandibular (ATM) e contração dos músculos masséter e temporal.",
      "Está incorreta porque a força mastigatória humana máxima nos molares ronda os 500-700 N, com vantagem mecânica finita dependente da posição dentária."
    ],
    "nursingApplication": "O enfermeiro aplica este princípio ao manipular o/a mandíbula e músculo masséter ao morder um comprimido: compreender a sua elasticidade, módulo de deformação e limites de resistência evita falhas mecânicas iatrogénicas, roturas acidentais e lesões teciduais na pessoa cuidada."
  },
  {
    "id": 2132,
    "topicId": 2,
    "question": "Na análise biomecânica e reológica de biomateriais em enfermagem, o/a movimento de abdução da coxa pelo tensor da fáscia lata desempenha um papel clínico crucial. Como se explica o seu comportamento à luz das propriedades mecânicas de tensão, elasticidade e materiais?",
    "options": [
      "Comporta-se como um biomaterial específico: alavanca de 3.ª classe adaptada para estabilidade lateral e marcha bípede rápida com ampla amplitude de movimento pélvico.",
      "Funciona como uma alavanca de 2.ª classe onde a força do tensor é sempre metade do peso do membro inferior.",
      "Constitui uma alavanca de 1.ª classe com o fulcro posicionado na articulação do tornozelo contralateral.",
      "Tem vantagem mecânica de força de 15, permitindo abduzir a perna sem qualquer recrutamento bioenergético de ATP."
    ],
    "correctIndex": 0,
    "explanation": "O/A movimento de abdução da coxa pelo tensor da fáscia lata caracteriza-se biofisicamente por ser um alavanca de 3.ª classe adaptada para estabilidade lateral e marcha bípede rápida com ampla amplitude de movimento pélvico. Esta propriedade garante a adaptação funcional e a segurança do doente durante a intervenção clínica.",
    "distractorAnalysis": [
      "Está incorreta porque a potência insere-se lateralmente na fáscia lata perto da anca entre o fulcro e o membro, configurando uma alavanca de 3.ª classe.",
      "Está incorreta porque o fulcro de abdução da coxa é a articulação coxofemoral do mesmo membro.",
      "Está incorreta porque todas as alavancas de 3.ª classe têm VM < 1, requerendo trabalho muscular ativo com consumo estrito de ATP."
    ],
    "nursingApplication": "O enfermeiro aplica este princípio ao manipular o/a movimento de abdução da coxa pelo tensor da fáscia lata: compreender a sua elasticidade, módulo de deformação e limites de resistência evita falhas mecânicas iatrogénicas, roturas acidentais e lesões teciduais na pessoa cuidada."
  },
  {
    "id": 2133,
    "topicId": 2,
    "question": "Na análise biomecânica e reológica de biomateriais em enfermagem, o/a espátula lingual na inspeção da orofaringe pelo enfermeiro desempenha um papel clínico crucial. Como se explica o seu comportamento à luz das propriedades mecânicas de tensão, elasticidade e materiais?",
    "options": [
      "Comporta-se como um biomaterial específico: alavanca de 1.ª classe usando os lábios/dentes como fulcro para deprimir suavemente a base da língua com pequeno esforço na haste exterior.",
      "É uma alavanca de 3.ª classe que exige força de 200 N do enfermeiro para conseguir afastar a ponta da língua do doente.",
      "Funciona como um sistema de roldana móvel que inverte o vetor de força da gravidade dentro da boca.",
      "Comporta-se como um elastómero complacente que se enrola sobre a língua sem oferecer qualquer resistência mecânica à flexão."
    ],
    "correctIndex": 0,
    "explanation": "O/A espátula lingual na inspeção da orofaringe pelo enfermeiro caracteriza-se biofisicamente por ser um alavanca de 1.ª classe usando os lábios/dentes como fulcro para deprimir suavemente a base da língua com pequeno esforço na haste exterior. Esta propriedade garante a adaptação funcional e a segurança do doente durante a intervenção clínica.",
    "distractorAnalysis": [
      "Está incorreta porque a espátula rígida atua como alavanca de 1.ª classe com apoio labial/dentário e requer forças suaves (~5 a 10 N).",
      "Está incorreta porque a espátula é uma barra rígida de flexão, não um sistema de cabos e roldanas.",
      "Está incorreta porque as espátulas de madeira ou plástico rígido têm módulo de Young suficiente para deprimir a língua com mínima deflexão."
    ],
    "nursingApplication": "O enfermeiro aplica este princípio ao manipular o/a espátula lingual na inspeção da orofaringe pelo enfermeiro: compreender a sua elasticidade, módulo de deformação e limites de resistência evita falhas mecânicas iatrogénicas, roturas acidentais e lesões teciduais na pessoa cuidada."
  },
  {
    "id": 2134,
    "topicId": 2,
    "question": "Na análise biomecânica e reológica de biomateriais em enfermagem, o/a carrinho elevador elétrico de transferência de doentes (guindaste com braço mecânico) desempenha um papel clínico crucial. Como se explica o seu comportamento à luz das propriedades mecânicas de tensão, elasticidade e materiais?",
    "options": [
      "Comporta-se como um biomaterial específico: alavanca móvel atuada por pistão hidráulico que distribui a carga de elevação com vantagem mecânica de engenharia para transferir doentes tetraplégicos.",
      "Depende de alavanca interpotente com braço de resistência 20 vezes maior que o braço de esforço, exigindo esforço físico hercúleo do operador.",
      "Anula a inércia da massa do doente através de forças eletrostáticas de repulsão entre a tela e o pavimento.",
      "Opera sem qualquer sistema de alavanca ou hidráulica, funcionando por levitação por colchão de ar sob pressão de 10 atmosferas."
    ],
    "correctIndex": 0,
    "explanation": "O/A carrinho elevador elétrico de transferência de doentes (guindaste com braço mecânico) caracteriza-se biofisicamente por ser um alavanca móvel atuada por pistão hidráulico que distribui a carga de elevação com vantagem mecânica de engenharia para transferir doentes tetraplégicos. Esta propriedade garante a adaptação funcional e a segurança do doente durante a intervenção clínica.",
    "distractorAnalysis": [
      "Está incorreta porque o guindaste mecânico utiliza braço de alavanca e pistão hidráulico com enorme vantagem mecânica para proteger a coluna do cuidador.",
      "Está incorreta porque a massa e o peso do doente continuam sujeitos à aceleração da gravidade (P = m·g), sendo a carga suportada pela estrutura do guindaste.",
      "Está incorreta porque os elevadores de transferência hospitalares comuns utilizam braços articulados de aço acionados por atuador elétrico linear ou cilindro hidráulico."
    ],
    "nursingApplication": "O enfermeiro aplica este princípio ao manipular o/a carrinho elevador elétrico de transferência de doentes (guindaste com braço mecânico): compreender a sua elasticidade, módulo de deformação e limites de resistência evita falhas mecânicas iatrogénicas, roturas acidentais e lesões teciduais na pessoa cuidada."
  },
  {
    "id": 2135,
    "topicId": 2,
    "question": "Na análise biomecânica e reológica de biomateriais em enfermagem, o/a fio de sutura monofilamentar de poliamida (Nylon) 3-0 desempenha um papel clínico crucial. Como se explica o seu comportamento à luz das propriedades mecânicas de tensão, elasticidade e materiais?",
    "options": [
      "Comporta-se como um biomaterial específico: tensão máxima de tração de cerca de 450 MPa com elevada memória elástica, exigindo nós cirúrgicos múltiplos (3 a 4 nós) para evitar que o nó escorregue e desfaça a sutura.",
      "Apresenta memória elástica nula e comportamento de plasticidade perfeita, mantendo o nó fechado sem necessidade de contravoltas.",
      "Tem resistência à tração inferior à de uma linha de algodão hidrófilo, partindo-se espontaneamente com a pulsação capilar.",
      "Degrada-se por dissolução enzimática nas primeiras 48 horas após a sutura, sendo inadequado para encerramento cutâneo."
    ],
    "correctIndex": 0,
    "explanation": "O/A fio de sutura monofilamentar de poliamida (Nylon) 3-0 caracteriza-se biofisicamente por ser um tensão máxima de tração de cerca de 450 MPa com elevada memória elástica, exigindo nós cirúrgicos múltiplos (3 a 4 nós) para evitar que o nó escorregue e desfaça a sutura. Esta propriedade garante a adaptação funcional e a segurança do doente durante a intervenção clínica.",
    "distractorAnalysis": [
      "Está incorreta porque o fio de poliamida monofilamentar (Nylon) tem elevada memória elástica e rigidez de flexão, exigindo múltiplos nós para fixar.",
      "Está incorreta porque o nylon 3-0 tem elevada resistência à tração (~450 MPa), suportando facilmente as tensões de encerramento da ferida.",
      "Está incorreta porque o nylon é um fio não-absorvível (ou de degradação extremamente lenta ao longo de anos), ideal para suturas de pele a remover aos 7-14 dias."
    ],
    "nursingApplication": "O enfermeiro aplica este princípio ao manipular o/a fio de sutura monofilamentar de poliamida (Nylon) 3-0: compreender a sua elasticidade, módulo de deformação e limites de resistência evita falhas mecânicas iatrogénicas, roturas acidentais e lesões teciduais na pessoa cuidada."
  },
  {
    "id": 2136,
    "topicId": 2,
    "question": "Na análise biomecânica e reológica de biomateriais em enfermagem, o/a pele humana jovem vs pele senil com dermatoporose desempenha um papel clínico crucial. Como se explica o seu comportamento à luz das propriedades mecânicas de tensão, elasticidade e materiais?",
    "options": [
      "Comporta-se como um biomaterial específico: a pele jovem tem rica matriz de fibras de elastina e colagénio tipo I com curva tensão-deformação ampla e alta resiliência; a pele senil perde 80% da elastina, tornando-se frágil com rotura à mínima tensão tangencial.",
      "A pele senil tem o dobro da elastina da pele jovem, tornando-se imune a lacerações cutâneas por fricção ou remoção de adesivos.",
      "O envelhecimento cutâneo transforma a derme num biomaterial perfeitamente elástico sem qualquer limite de proporcionalidade.",
      "A pele humana não apresenta colagénio nem elastina, sendo a sua resistência mecânica governada por depósitos de hidroxiapatite cristalina."
    ],
    "correctIndex": 0,
    "explanation": "O/A pele humana jovem vs pele senil com dermatoporose caracteriza-se biofisicamente por ser um a pele jovem tem rica matriz de fibras de elastina e colagénio tipo I com curva tensão-deformação ampla e alta resiliência; a pele senil perde 80% da elastina, tornando-se frágil com rotura à mínima tensão tangencial. Esta propriedade garante a adaptação funcional e a segurança do doente durante a intervenção clínica.",
    "distractorAnalysis": [
      "Está incorreta porque a pele senil com dermatoporose perde grande parte da elastina e colagénio, tornando-se frágil a forças de cisalhamento.",
      "Está incorreta porque a pele idosa tem menor limite de elasticidade e menor resiliência, sofrendo ruturas (skin tears) com facilidade.",
      "Está incorreta porque a pele é um tecido mole composto por matriz de colagénio e elastina; a hidroxiapatite é exclusiva de tecidos mineralizados (ossos e dentes)."
    ],
    "nursingApplication": "O enfermeiro aplica este princípio ao manipular o/a pele humana jovem vs pele senil com dermatoporose: compreender a sua elasticidade, módulo de deformação e limites de resistência evita falhas mecânicas iatrogénicas, roturas acidentais e lesões teciduais na pessoa cuidada."
  },
  {
    "id": 2137,
    "topicId": 2,
    "question": "Na análise biomecânica e reológica de biomateriais em enfermagem, o/a tendão calcâneo (tendão de Aquiles) sob carga máxima desempenha um papel clínico crucial. Como se explica o seu comportamento à luz das propriedades mecânicas de tensão, elasticidade e materiais?",
    "options": [
      "Comporta-se como um biomaterial específico: suporta tensões de tração superiores a 100 MPa e forças de até 8000 N durante a corrida, deformando-se elasticamente 6 a 8% antes de atingir o limiar de microrrotura.",
      "Tem comportamento frágil idêntico ao vidro, fraturando-se de forma catastrófica com qualquer alongamento microscópico superior a 0,1%.",
      "Suporta tensões máximas de apenas 0,5 MPa, sendo incapaz de sustentar o peso do corpo humano sem auxílio de órteses externas.",
      "É formado por elastina pura sem colagénio, alongando 300% com forças ligeiras de 10 N durante a deambulação."
    ],
    "correctIndex": 0,
    "explanation": "O/A tendão calcâneo (tendão de Aquiles) sob carga máxima caracteriza-se biofisicamente por ser um suporta tensões de tração superiores a 100 MPa e forças de até 8000 N durante a corrida, deformando-se elasticamente 6 a 8% antes de atingir o limiar de microrrotura. Esta propriedade garante a adaptação funcional e a segurança do doente durante a intervenção clínica.",
    "distractorAnalysis": [
      "Está incorreta porque o tendão calcâneo é um biomaterial tenaz e viscoelástico, deformando-se elasticamente 6 a 8% antes de sofrer microrroturas.",
      "Está incorreta porque o tendão de Aquiles suporta tensões superiores a 100 MPa e cargas mecânicas de vários milhares de Newtons no desporto.",
      "Está incorreta porque os tendões são constituídos por cerca de 86% de colagénio tipo I com alinhamento paralelo denso e menos de 2% de elastina."
    ],
    "nursingApplication": "O enfermeiro aplica este princípio ao manipular o/a tendão calcâneo (tendão de Aquiles) sob carga máxima: compreender a sua elasticidade, módulo de deformação e limites de resistência evita falhas mecânicas iatrogénicas, roturas acidentais e lesões teciduais na pessoa cuidada."
  },
  {
    "id": 2138,
    "topicId": 2,
    "question": "Na análise biomecânica e reológica de biomateriais em enfermagem, o/a artéria aorta elástica humana e efeito Windkessel desempenha um papel clínico crucial. Como se explica o seu comportamento à luz das propriedades mecânicas de tensão, elasticidade e materiais?",
    "options": [
      "Comporta-se como um biomaterial específico: a parede da aorta possui alto teor de elastina (baixo Módulo de Young), expandindo-se elasticamente na sístole para absorver a onda de pressão e retraindo-se passivamente na diástole para manter o fluxo contínuo.",
      "A parede da aorta é composta por placas de cartilagem hialina indeformáveis que impedem qualquer expansão durante a ejeção ventricular.",
      "Apresenta rigidez infinita, funcionando como um tubo de chumbo onde a pressão diastólica cai abruptamente para 0 mmHg em cada ciclo.",
      "Colapsa na sístole e dilata na diástole devido a uma inversão térmica das propriedades mecânicas do endotélio a 37 °C."
    ],
    "correctIndex": 0,
    "explanation": "O/A artéria aorta elástica humana e efeito Windkessel caracteriza-se biofisicamente por ser um a parede da aorta possui alto teor de elastina (baixo Módulo de Young), expandindo-se elasticamente na sístole para absorver a onda de pressão e retraindo-se passivamente na diástole para manter o fluxo contínuo. Esta propriedade garante a adaptação funcional e a segurança do doente durante a intervenção clínica.",
    "distractorAnalysis": [
      "Está incorreta porque a aorta proximal é uma artéria elástica complacente rica em membranas elásticas fenestradas na túnica média.",
      "Está incorreta porque se a aorta fosse rígida, a pressão sistólica dispararia para valores perigosos e a diastólica cairia a zero (ausência de amortecimento Windkessel).",
      "Está incorreta porque a aorta expande-se elasticamente na sístole pelo pico pressórico ventricular e retrai-se passivamente na diástole."
    ],
    "nursingApplication": "O enfermeiro aplica este princípio ao manipular o/a artéria aorta elástica humana e efeito Windkessel: compreender a sua elasticidade, módulo de deformação e limites de resistência evita falhas mecânicas iatrogénicas, roturas acidentais e lesões teciduais na pessoa cuidada."
  },
  {
    "id": 2139,
    "topicId": 2,
    "question": "Na análise biomecânica e reológica de biomateriais em enfermagem, o/a ligamento cruzado anterior (LCA) do joelho desempenha um papel clínico crucial. Como se explica o seu comportamento à luz das propriedades mecânicas de tensão, elasticidade e materiais?",
    "options": [
      "Comporta-se como um biomaterial específico: comportamento viscoelástico com limite elástico em torno de 15% de deformação; torções bruscas com o pé fixo no solo ultrapassam a tensão de rutura, provocando rotura completa dos fascículos colagénicos.",
      "Comporta-se como um cabo de aço isotrópico com alongamento máximo à fratura inferior a 0,01%, rompendo com qualquer flexão normal do joelho.",
      "Suporta torções ilimitadas sem sofrer deformação porque as suas fibras colagénicas rodam livremente sem atrito interno.",
      "Não possui função mecânica articular, servindo unicamente como reservatório de cálcio e sais minerais no espaço intra-articular."
    ],
    "correctIndex": 0,
    "explanation": "O/A ligamento cruzado anterior (LCA) do joelho caracteriza-se biofisicamente por ser um comportamento viscoelástico com limite elástico em torno de 15% de deformação; torções bruscas com o pé fixo no solo ultrapassam a tensão de rutura, provocando rotura completa dos fascículos colagénicos. Esta propriedade garante a adaptação funcional e a segurança do doente durante a intervenção clínica.",
    "distractorAnalysis": [
      "Está incorreta porque o LCA é um biomaterial viscoelástico com deformação elástica de até 12-15% antes de atingir a tensão de cedência.",
      "Está incorreta porque movimentos rotacionais com valgo forçado e pé fixo ultrapassam facilmente a tensão de rutura dos fascículos do LCA.",
      "Está incorreta porque o ligamento cruzado anterior é o estabilizador primário contra a translação anterior da tíbia relativamente ao fémur."
    ],
    "nursingApplication": "O enfermeiro aplica este princípio ao manipular o/a ligamento cruzado anterior (LCA) do joelho: compreender a sua elasticidade, módulo de deformação e limites de resistência evita falhas mecânicas iatrogénicas, roturas acidentais e lesões teciduais na pessoa cuidada."
  },
  {
    "id": 2140,
    "topicId": 2,
    "question": "Na análise biomecânica e reológica de biomateriais em enfermagem, o/a balão de embolectomia de Fogarty para remoção de trombos arteriais desempenha um papel clínico crucial. Como se explica o seu comportamento à luz das propriedades mecânicas de tensão, elasticidade e materiais?",
    "options": [
      "Comporta-se como um biomaterial específico: balão de elastómero de látex com calibração volumétrica rigorosa para ocluir a artéria sem exceder a tensão elástica da túnica média do vaso, prevenindo dissecções arteriais iatrogénicas.",
      "É insuflado com agulhas de alta pressão até rebentar o vaso para criar um novo trajeto arterial colateral.",
      "Tem parede rígida de aço cirúrgico que esmaga as placas de ateroma por impacto percussivo a 100 Hz.",
      "Opera por sucção magnética direta dos eritrócitos sem necessitar de qualquer oclusão mecânica do lúmen arterial."
    ],
    "correctIndex": 0,
    "explanation": "O/A balão de embolectomia de Fogarty para remoção de trombos arteriais caracteriza-se biofisicamente por ser um balão de elastómero de látex com calibração volumétrica rigorosa para ocluir a artéria sem exceder a tensão elástica da túnica média do vaso, prevenindo dissecções arteriais iatrogénicas. Esta propriedade garante a adaptação funcional e a segurança do doente durante a intervenção clínica.",
    "distractorAnalysis": [
      "Está incorreta porque o balão de Fogarty é preenchido com volume rigoroso de líquido para tracionar o trombo suavemente sem dissecar a parede arterial.",
      "Está incorreta porque o balão de Fogarty é feito de elastómero flexível de látex/silicone e destina-se a extrair êmbolos moles, não a esmagar placas calcificadas.",
      "Está incorreta porque o cateter de embolectomia atua mecanicamente, arrastando o coágulo ao ser retirado com o balão insuflado distalmente ao trombo."
    ],
    "nursingApplication": "O enfermeiro aplica este princípio ao manipular o/a balão de embolectomia de Fogarty para remoção de trombos arteriais: compreender a sua elasticidade, módulo de deformação e limites de resistência evita falhas mecânicas iatrogénicas, roturas acidentais e lesões teciduais na pessoa cuidada."
  },
  {
    "id": 2141,
    "topicId": 2,
    "question": "Na análise biomecânica e reológica de biomateriais em enfermagem, o/a compressas de gaze de algodão hidrófilo desempenha um papel clínico crucial. Como se explica o seu comportamento à luz das propriedades mecânicas de tensão, elasticidade e materiais?",
    "options": [
      "Comporta-se como um biomaterial específico: estrutura têxtil com comportamento mecânico de absorção por capilaridade e retenção de fluidos sem libertação de resíduos de fibras no leito cirúrgico.",
      "Comportam-se como películas plásticas não-porosas com taxa de absorção de exsudado estritamente nula.",
      "São constituídas por filamentos contínuos de cobre metálico condutor para dissipar cargas eletrostáticas da ferida operatória.",
      "Liberam formaldeído sob tração suave, devendo ser evitadas em pensos cirúrgicos e no bloco operatório."
    ],
    "correctIndex": 0,
    "explanation": "O/A compressas de gaze de algodão hidrófilo caracteriza-se biofisicamente por ser um estrutura têxtil com comportamento mecânico de absorção por capilaridade e retenção de fluidos sem libertação de resíduos de fibras no leito cirúrgico. Esta propriedade garante a adaptação funcional e a segurança do doente durante a intervenção clínica.",
    "distractorAnalysis": [
      "Está incorreta porque o algodão hidrófilo tem microestrutura fibrosa com elevada capilaridade e capacidade de absorção de fluidos sero-hemáticos.",
      "Está incorreta porque as compressas cirúrgicas são têxteis de celulose 100% algodão purificado com fio radiopaco de bário/polipropileno.",
      "Está incorreta porque as gazes cirúrgicas hospitalares são estéreis, biocompatíveis e livres de químicos tóxicos."
    ],
    "nursingApplication": "O enfermeiro aplica este princípio ao manipular o/a compressas de gaze de algodão hidrófilo: compreender a sua elasticidade, módulo de deformação e limites de resistência evita falhas mecânicas iatrogénicas, roturas acidentais e lesões teciduais na pessoa cuidada."
  },
  {
    "id": 2142,
    "topicId": 2,
    "question": "Na análise biomecânica e reológica de biomateriais em enfermagem, o/a fio de sutura farpado unidirecional sem necessidade de nós (tipo V-Loc) desempenha um papel clínico crucial. Como se explica o seu comportamento à luz das propriedades mecânicas de tensão, elasticidade e materiais?",
    "options": [
      "Comporta-se como um biomaterial específico: fio sintético absorvível com microfarpas que ancoram nas fibras de colagénio, distribuindo a tensão de aproximação tecidual uniformemente ao longo de toda a ferida.",
      "Exige nós cirúrgicos a cada 2 milímetros devido à superfície perfeitamente lisa e oleosa do polímero sintético.",
      "Comporta-se como um fio de metal rígido que impede a expansão da caixa torácica quando usado em laparotomias abdominais.",
      "Desfaz-se em contacto com o sangue em menos de 30 segundos, exigindo colas de fibrina de reforço imediato."
    ],
    "correctIndex": 0,
    "explanation": "O/A fio de sutura farpado unidirecional sem necessidade de nós (tipo V-Loc) caracteriza-se biofisicamente por ser um fio sintético absorvível com microfarpas que ancoram nas fibras de colagénio, distribuindo a tensão de aproximação tecidual uniformemente ao longo de toda a ferida. Esta propriedade garante a adaptação funcional e a segurança do doente durante a intervenção clínica.",
    "distractorAnalysis": [
      "Está incorreta porque o fio farpado unidirecional ancora-se por microfarpas que travam nos tecidos, eliminando a necessidade de dar nós.",
      "Está incorreta porque o material é um polímero absorvível complacente (ex: polidioxanona ou copolímero glicólico) com flexibilidade adequada aos tecidos moles.",
      "Está incorreta porque os fios farpados retêm tensão mecânica durante semanas para garantir a cicatrização fascial e dérmica."
    ],
    "nursingApplication": "O enfermeiro aplica este princípio ao manipular o/a fio de sutura farpado unidirecional sem necessidade de nós (tipo V-Loc): compreender a sua elasticidade, módulo de deformação e limites de resistência evita falhas mecânicas iatrogénicas, roturas acidentais e lesões teciduais na pessoa cuidada."
  },
  {
    "id": 2143,
    "topicId": 2,
    "question": "Na análise biomecânica e reológica de biomateriais em enfermagem, o/a tubo de drenagem pleural torácico de silicone com linha radiopaca desempenha um papel clínico crucial. Como se explica o seu comportamento à luz das propriedades mecânicas de tensão, elasticidade e materiais?",
    "options": [
      "Comporta-se como um biomaterial específico: tubo com rigidez calculada para não colabar sob a pressão negativa intrapleural de -20 cmH₂O durante a inspiração profunda, mantendo a drenagem de ar ou sangue desobstruída.",
      "Apresenta parede extremamente fina e maleável que colapsa completamente sob qualquer gradiente pressórico de -2 cmH₂O.",
      "É fabricado em vidro pyrex rígido e quebradiço que se estilhaça com as oscilações respiratórias do diafragma.",
      "Não permite identificar o seu posicionamento radiológico porque a linha de sulfato de bário é transparente aos Raios X."
    ],
    "correctIndex": 0,
    "explanation": "O/A tubo de drenagem pleural torácico de silicone com linha radiopaca caracteriza-se biofisicamente por ser um tubo com rigidez calculada para não colabar sob a pressão negativa intrapleural de -20 cmH₂O durante a inspiração profunda, mantendo a drenagem de ar ou sangue desobstruída. Esta propriedade garante a adaptação funcional e a segurança do doente durante a intervenção clínica.",
    "distractorAnalysis": [
      "Está incorreta porque o tubo torácico de silicone possui espessura de parede calibrada para resistir ao vácuo pleural sem sofrer colapso mecânico.",
      "Está incorreta porque os drenos torácicos são elastómeros biocompatíveis e flexíveis que acompanham a mobilidade torácica sem traumatizar o parênquima.",
      "Está incorreta porque a linha radiopaca é impregnada com sulfato de bário com elevado número atómico (Z=56), claramente visível na radiografia de tórax."
    ],
    "nursingApplication": "O enfermeiro aplica este princípio ao manipular o/a tubo de drenagem pleural torácico de silicone com linha radiopaca: compreender a sua elasticidade, módulo de deformação e limites de resistência evita falhas mecânicas iatrogénicas, roturas acidentais e lesões teciduais na pessoa cuidada."
  },
  {
    "id": 2144,
    "topicId": 2,
    "question": "Na análise biomecânica e reológica de biomateriais em enfermagem, o/a luvas cirúrgicas de biopolímero de neoprene desempenha um papel clínico crucial. Como se explica o seu comportamento à luz das propriedades mecânicas de tensão, elasticidade e materiais?",
    "options": [
      "Comporta-se como um biomaterial específico: oferecem elasticidade e tensão de deformação semelhantes ao látex natural com taxa de deformação relativa ε > 600% antes da rutura, sendo isentas das proteínas alergénicas do látex.",
      "Apresentam deformação elástica máxima de apenas 5%, rompendo-se quando o enfermeiro flete os dedos para calçar a luva.",
      "São condutores elétricos de baixíssima resistência que facilitam a passagem de correntes elétricas de bisturis elétricos monopolares.",
      "Contêm as mesmas proteínas alergénicas do látex da Hevea brasiliensis, causando reações anafiláticas cruzadas em doentes atópicos."
    ],
    "correctIndex": 0,
    "explanation": "O/A luvas cirúrgicas de biopolímero de neoprene caracteriza-se biofisicamente por ser um oferecem elasticidade e tensão de deformação semelhantes ao látex natural com taxa de deformação relativa ε > 600% antes da rutura, sendo isentas das proteínas alergénicas do látex. Esta propriedade garante a adaptação funcional e a segurança do doente durante a intervenção clínica.",
    "distractorAnalysis": [
      "Está incorreta porque o policloropreno (neoprene) é um elastómero sintético com alongamento à rotura superior a 600%, conferindo excelente adaptação anatómica.",
      "Está incorreta porque as luvas cirúrgicas de neoprene são excelentes isolantes dielétricos para proteção contra riscos biológicos e elétricos.",
      "Está incorreta porque o neoprene é um polímero sintético totalmente isento de proteínas vegetais do látex natural, sendo seguro para alérgicos ao látex."
    ],
    "nursingApplication": "O enfermeiro aplica este princípio ao manipular o/a luvas cirúrgicas de biopolímero de neoprene: compreender a sua elasticidade, módulo de deformação e limites de resistência evita falhas mecânicas iatrogénicas, roturas acidentais e lesões teciduais na pessoa cuidada."
  },
  {
    "id": 2145,
    "topicId": 2,
    "question": "Na aplicação cirúrgica de agrafos metálicos para encerramento de incisões cutâneas, o cirurgião deforma o agrafo através do agrafador. Em termos da curva tensão-deformação dos materiais, que transição mecânica é essencial que o agrafo sofra para manter as bordas da ferida aproximadas permanentemente?",
    "options": [
      "Deve ultrapassar o limite elástico (tensão de cedência) e entrar na zona de deformação plástica, retendo a nova geometria fechada sem retorno elástico completo.",
      "Deve operar estritamente dentro da zona elástica linear de Hooke para que a mola do agrafo continue a abrir e fechar espontaneamente com a respiração.",
      "Deve atingir a tensão máxima de rotura para que o metal se fragmente em microcristais hemostáticos dentro da derme.",
      "Deve sofrer exclusivamente deformação viscoelástica reversível com tempo de relaxação inferior a um milissegundo."
    ],
    "correctIndex": 0,
    "explanation": "Para que um agrafo ou clipe hemostático retenha a sua forma fechada após a aplicação mecânica, a força aplicada deve ultrapassar o limite de proporcionalidade/elástico do metal (tensão de cedência ou yield point), provocando deformação plástica permanente. Se permanecesse puramente na região elástica, o material sofreria recuo elástico (springback) e reabriria a incisão.",
    "distractorAnalysis": [
      "Está incorreta porque a deformação puramente elástica reverteria completamente assim que o agrafador fosse retirado, abrindo a ferida.",
      "Está incorreta porque atingir a tensão de rotura fraturaria o agrafo, impedindo a coaptação das bordas teciduais.",
      "Está incorreta porque os agrafos cirúrgicos são fabricados em ligas metálicas (titânio ou aço cirúrgico) que apresentam plasticidade clássica e não comportamento viscoelástico fluido."
    ],
    "nursingApplication": "Compreender a deformação plástica dos agrafos cutâneos ajuda o enfermeiro na remoção de suturas mecânicas: o saca-agrafos aplica uma força inversa que deforma plasticamente o centro do agrafo, abrindo as hastes laterais sem lacerar a pele cicatrizada."
  },
  {
    "id": 2146,
    "topicId": 2,
    "question": "A curva tensão-deformação do osso cortical humano sujeito a tração longitudinal exibe uma zona elástica seguida de uma zona plástica antes da fratura. O que representa fisicamente o 'Limite Elástico' (ou Tensão de Cedência) neste tecido musculoesquelético?",
    "options": [
      "A tensão máxima a partir da qual ocorrem microlesões estruturais e deformações permanentes irreversíveis na microarquitetura dos osteónios.",
      "A força estritamente necessária para que o osso duplique o seu comprimento original em conformidade com a Lei de Hooke.",
      "O ponto exato em que a velocidade de propagação das ondas sonoras no tecido ósseo atinge o valor zero.",
      "O valor de deformação a partir do qual a densidade mineral óssea diminui espontaneamente para metade por descalcificação instantânea."
    ],
    "correctIndex": 0,
    "explanation": "O limite elástico (tensão de cedência) marca o limiar entre o comportamento elástico reversível (onde a remoção da carga permite ao osso recuperar a sua dimensão original) e o início do escoamento plástico com microrroturas interlamelares e falha das fibras de colagénio. Tensões acima deste limiar produzem deformação residual e aumento drástico do risco de fratura completa.",
    "distractorAnalysis": [
      "Está incorreta porque o osso é um material mineralizado rígido que sofre fratura com deformações inferiores a 2-3%, sendo fisicamente impossível duplicar de comprimento.",
      "Está incorreta porque o limite elástico é uma propriedade tensional mecânica (medida em MPa ou N/m²), não tendo relação com a anulação de ondas sonoras.",
      "Está incorreta porque a desmineralização óssea é um processo biológico celular mediado por osteoclastos ao longo de semanas/meses, não ocorrendo de forma mecânica instantânea."
    ],
    "nursingApplication": "Em doentes acamados com osteoporose, a mobilização no leito e os levantes devem ser realizados com movimentos suaves e alinhamento biomecânico para evitar que picos tensionais momentâneos ultrapassem o reduzido limite elástico do osso osteopénico."
  },
  {
    "id": 2147,
    "topicId": 2,
    "question": "Nas próteses totais da anca, o inserto acetabular é frequentemente fabricado em Polietileno de Ultra Elevado Peso Molecular (UHMWPE). Em comparação com uma cerâmica de alumina, como se classifica o UHMWPE na sua curva tensão-deformação?",
    "options": [
      "É um material dúctil com elevada capacidade de deformação plástica antes da fratura e moderada rigidez.",
      "É um material perfeitamente frágil que não tolera qualquer deformação além do regime linear, quebrando sem aviso prévio.",
      "É um sólido indeformável com Módulo de Young superior ao do diamante (~1500 GPa).",
      "É um fluido newtoniano puro cuja viscosidade depende exclusivamente da pressão atmosférica externa."
    ],
    "correctIndex": 0,
    "explanation": "O UHMWPE é um polímero semicristalino termoplástico dúctil: apresenta módulo de Young relativamente baixo (~1 GPa), elevada tenacidade e grande capacidade de sofrer deformação plástica antes da rutura. Isto confere-lhe excelente capacidade de absorver choques articulares e resistência ao impacto, ao contrário das cerâmicas que são extremamente duras mas frágeis.",
    "distractorAnalysis": [
      "Está incorreta porque a ausência de deformação plástica com fratura catastrófica rápida é a assinatura dos materiais frágeis (como as cerâmicas ou vidro), não dos polímeros como o UHMWPE.",
      "Está incorreta porque o Módulo de Young do polietileno (~0,8 a 1,5 GPa) é centenas de vezes inferior ao do osso e dos metais, muito longe do diamante.",
      "Está incorreta porque o UHMWPE é um biomaterial sólido polimérico estrutural, não um líquido fluido."
    ],
    "nursingApplication": "O enfermeiro deve orientar o doente com artroplastia da anca sobre a importância de evitar impactos repetidos de alta intensidade (como saltos), pois a ductilidade do UHMWPE predispõe a desgaste abrasivo e deformação gradual (creep) com o tempo."
  },
  {
    "id": 2148,
    "topicId": 2,
    "question": "Na fixação interna de fraturas do fémur, as hastes intramedulares de liga de titânio (Ti-6Al-4V) são frequentemente preferidas ao aço inoxidável 316L. Do ponto de vista biofísico, qual é a principal vantagem do titânio no que respeita ao fenómeno de 'Stress Shielding' (proteção contra a tensão)?",
    "options": [
      "O titânio possui um Módulo de Young (~110 GPa) mais próximo do osso cortical (~18 GPa) do que o aço (~200 GPa), permitindo que o osso partilhe mais carga mecânica e prevenindo a reabsorção óssea por desuso.",
      "O titânio anula completamente todas as linhas de tensão mecânica na perna, tornando o fémur imune a qualquer compressão da gravidade.",
      "O titânio tem rigidez vinte vezes superior ao aço cirúrgico, bloqueando totalmente a passagem de qualquer estímulo mecânico ao calo ósseo.",
      "O titânio atua como um condutor térmico que aquece continuamente o fémur a 45 °C para acelerar os osteoblastos."
    ],
    "correctIndex": 0,
    "explanation": "A Lei de Wolff estabelece que o osso remodela e mantém a densidade em resposta às cargas mecânicas que suporta. Se um implante for excessivamente rígido (como o aço inoxidável a ~200 GPa), ele absorve quase toda a tensão mecânica, 'protegendo' o osso em excesso (stress shielding) e causando osteopenia e descolamento do implante. O titânio, tendo um Módulo de Young mais baixo (~110 GPa), flete mais em sintonia com o osso cortical (~10-25 GPa), estimulando a osteogénese fisiológica.",
    "distractorAnalysis": [
      "Está incorreta porque nenhuma haste metálica suprime a atração gravítica nem a transmissão de forças axiais da marcha.",
      "Está incorreta porque o titânio é cerca de 50% menos rígido (menor módulo elástico) do que o aço inoxidável, e não vinte vezes mais rígido.",
      "Está incorreta porque temperaturas de 45 °C causariam necrose térmica óssea dos osteócitos e osteoblastos."
    ],
    "nursingApplication": "Ao cuidar de doentes com próteses ou fixações de titânio, o enfermeiro apoia o plano de carga ponderal progressiva precoce na deambulação, sabendo que as microdeformações elásticas toleradas pela haste estimulam a consolidação óssea natural."
  },
  {
    "id": 2149,
    "topicId": 2,
    "question": "Um penso de compressão elástica ou um ligamento submetido a uma tensão de tração constante ao longo do tempo exibe uma deformação progressiva e contínua. Como se designa este fenómeno reológico típico dos biomateriais viscoelásticos?",
    "options": [
      "Fluência mecânica (Creep).",
      "Limite de escoamento instantâneo.",
      "Ressonância harmónica transversal.",
      "Elasticidade perfeita de Hooke."
    ],
    "correctIndex": 0,
    "explanation": "A fluência (creep) é a propriedade dos materiais viscoelásticos em que a deformação continua a aumentar ao longo do tempo sob a aplicação de uma tensão mecânica constante. Observa-se em tecidos biológicos (tendões, cartilagens, pele) e em polímeros biomédicos (ligaduras elásticas, insertos de polietileno).",
    "distractorAnalysis": [
      "Está incorreta porque o limite de escoamento é a tensão que inicia a plasticidade, não a deformação dependente do tempo sob carga constante.",
      "Está incorreta porque a ressonância harmónica é um fenómeno vibratório de ondas e oscilações, não uma resposta reológica lenta de materiais.",
      "Está incorreta porque a elasticidade ideal de Hooke é instantânea e independente do tempo (deformação constante para tensão constante)."
    ],
    "nursingApplication": "Ao aplicar ligaduras elásticas em úlceras venosas, o enfermeiro sabe que a fluência do material e a relaxação tecidual reduzem a pressão sub-ligadura ao fim de algumas horas/dias, exigindo reavaliação periódica do penso compressivo."
  },
  {
    "id": 2150,
    "topicId": 2,
    "question": "Quando um ligamento articular ou uma sutura cirúrgica é esticado e mantido fixo a um determinado comprimento constante (deformação constante), a força interna de tensão decresce progressivamente com o tempo. Qual é a designação biofísica deste comportamento viscoelástico?",
    "options": [
      "Relaxação de tensões (Stress Relaxation).",
      "Tenacidade de impacto frágil.",
      "Piezoeletricidade de cisalhamento.",
      "Dureza superficial de Brinell."
    ],
    "correctIndex": 0,
    "explanation": "A relaxação de tensões (stress relaxation) é a diminuição progressiva da tensão interna observada num material viscoelástico mantido sob uma deformação constante. As cadeias moleculares reorganizam-se internamente dissipando energia mecânica, o que reduz a força necessária para manter essa mesma deformação.",
    "distractorAnalysis": [
      "Está incorreta porque tenacidade de impacto mede a energia absorvida durante um choque dinâmico súbito até à fratura.",
      "Está incorreta porque piezoeletricidade é a geração de potencial elétrico sob pressão mecânica, não a queda tensional no tempo.",
      "Está incorreta porque a dureza Brinell avalia a resistência à penetração superficial por uma esfera metálica calibrada."
    ],
    "nursingApplication": "Em trações cutâneas ou alinhamento de membros pós-luxação, a relaxação de tensões dos ligamentos e cápsula articular permite que a resistência inicial dos tecidos diminua gradualmente, facilitando o conforto do doente sob vigilância do enfermeiro."
  },
  {
    "id": 2151,
    "topicId": 2,
    "question": "Durante a marcha, a cartilagem articular do joelho e os discos intervertebrais são submetidos a ciclos repetidos de compressão e descompressão. A curva de carga não coincide com a curva de descarga, formando uma área fechada que representa energia dissipada sob forma de calor. Que fenómeno mecânico traduz este ciclo?",
    "options": [
      "Histerese elástica.",
      "Fluência nula.",
      "Deformação supercondutora.",
      "Módulo de Young infinito."
    ],
    "correctIndex": 0,
    "explanation": "A histerese elástica é a diferença entre a energia despendida para deformar um material viscoelástico durante a fase de carga e a energia devolvida durante a fase de descompressão (descarga). A área interna do ciclo de histerese representa a energia mecânica dissipada internamente sob a forma de calor, funcionando como um amortecedor biológico essencial contra impactos nas articulações.",
    "distractorAnalysis": [
      "Está incorreta porque a cartilagem apresenta fluência significativa e a histerese mede a perda de energia em ciclos de carga/descarga.",
      "Está incorreta porque supercondutividade é um fenómeno quântico-elétrico a temperaturas criogénicas, sem aplicação à viscoelasticidade cartilagínea.",
      "Está incorreta porque um material com módulo de Young infinito seria perfeitamente rígido, não sofrendo qualquer deformação nem exibindo ciclo de histerese."
    ],
    "nursingApplication": "O enfermeiro valoriza o uso de calçado com solas viscoelásticas absorventes de impacto para doentes com osteoartrose, pois estas solas aumentam a histerese externa e reduzem os choques mecânicos transmitidos às articulações degeneradas."
  },
  {
    "id": 2152,
    "topicId": 2,
    "question": "O tendão calcâneo (tendão de Aquiles) tem a capacidade de armazenar grande quantidade de energia mecânica elástica durante a fase de apoio da marcha e devolvê-la eficientemente na fase de impulsão. Que grandeza biofísica, correspondente à área sob a curva tensão-deformação dentro do regime puramente elástico, quantifica esta propriedade?",
    "options": [
      "Resiliência mecânica (Módulo de Resiliência).",
      "Fragilidade de Vickers.",
      "Condutibilidade eletrolítica tecidual.",
      "Ponto de fusão endotérmico."
    ],
    "correctIndex": 0,
    "explanation": "O módulo de resiliência é a quantidade máxima de energia elástica por unidade de volume que um material consegue absorver sem sofrer qualquer deformação plástica ou permanente (calculada integrando a tensão em relação à deformação até ao limite elástico). Os tendões humanos têm altíssima resiliência, permitindo poupança de cerca de 50% do custo metabólico da locomoção através do retorno elástico passivo.",
    "distractorAnalysis": [
      "Está incorreta porque a escala de Vickers mede a dureza superficial à indentação, não a capacidade de armazenar e devolver energia elástica.",
      "Está incorreta porque a condutibilidade eletrolítica quantifica a passagem de corrente iónica em soluções aquosas.",
      "Está incorreta porque ponto de fusão refere-se à transição termodinâmica de fase sólida para líquida por calor."
    ],
    "nursingApplication": "Na reabilitação motora e no levante de doentes com imobilização prolongada, o enfermeiro sabe que a atrofia do tendão reduz a sua resiliência elástica, aumentando o risco de tendinopatias e roturas se a retoma da marcha for demasiado brusca."
  },
  {
    "id": 2153,
    "topicId": 2,
    "question": "A 'Tenacidade' (Toughness) de um biomaterial é uma propriedade mecânica crucial na seleção de implantes ortopédicos e próteses. Em termos gráficos da curva tensão-deformação, como se define a tenacidade mecânica?",
    "options": [
      "A área total sob a curva tensão-deformação desde a origem até ao ponto de fratura completa do material.",
      "O declive inicial da reta de proporcionalidade que obedece estritamente à Lei de Hooke.",
      "A pressão hidrostática máxima necessária para comprimir o volume do biomaterial a metade.",
      "A diferença entre a temperatura de ebulição do material e a temperatura da sala de operações."
    ],
    "correctIndex": 0,
    "explanation": "A tenacidade representa a capacidade total de um material absorver energia mecânica e deformar-se (elástica e plasticamente) antes de sofrer fratura. Corresponde à área total sob toda a curva tensão-deformação. Um material muito tenaz (como o osso saudável ou o titânio) exige uma quantidade maciça de energia externa para ser fraturado, combinando elevada resistência com ductilidade.",
    "distractorAnalysis": [
      "Está incorreta porque o declive inicial da reta elástica representa o Módulo de Young (rigidez do material), não a sua tenacidade total.",
      "Está incorreta porque a resistência à compressão volumétrica hidrostática é medida pelo Módulo Volumétrico (Bulk Modulus, K).",
      "Está incorreta porque a tenacidade é estritamente uma propriedade mecânica de absorção de trabalho e energia de deformação, não uma variável térmica."
    ],
    "nursingApplication": "Compreender que o osso idoso perde tenacidade (torna-se mais frágil, diminuindo a área sob a curva de tensão) reforça a vigilância de enfermagem para medidas de prevenção de quedas no internamento e no domicílio."
  },
  {
    "id": 2154,
    "topicId": 2,
    "question": "Em cirurgia ortopédica, utilizam-se componentes cerâmicos e componentes metálicos. Qual é a diferença fundamental no comportamento mecânico entre um material 'frágil' (brittle) e um material 'dúctil' (ductile) quando sujeitos a cargas crescentes?",
    "options": [
      "O material frágil fratura-se repentinamente quase sem sofrer deformação plástica prévia, enquanto o dúctil sofre grande deformação plástica antes da rutura.",
      "O material frágil flete elasticamente como borracha até 500% de alongamento, enquanto o dúctil quebra com choque microscópico.",
      "O material frágil anula o atrito articular a 100%, enquanto o dúctil adere quimicamente ao cimento ósseo.",
      "Não existe qualquer diferença biomecânica, sendo termos sinónimos aplicados indistintamente na seleção de ligas cirúrgicas."
    ],
    "correctIndex": 0,
    "explanation": "Materiais frágeis (como as cerâmicas de óxido de alumínio ou zircónia) têm elevado limite de resistência à compressão, mas sofrem propagação catastrófica de fendas com mínima ou nula deformação plástica assim que o limite elástico é ultrapassado. Em contrapartida, os materiais dúcteis (como ligas de titânio ou aços austeníticos) sofrem escoamento plástico substancial antes da fratura, dissipando energia e permitindo aviso visual de deformação antes do colapso estrutural.",
    "distractorAnalysis": [
      "Está incorreta porque os materiais frágeis têm quase zero deformação plástica; alongamentos de 500% são exclusivos de elastómeros.",
      "Está incorreta porque a fragilidade não tem relação com coeficientes de atrito nulos (o atrito zero não existe em biomateriais).",
      "Está incorreta porque a ductilidade e a fragilidade são comportamentos reológicos opostos e fundamentais no dimensionamento de próteses médicas."
    ],
    "nursingApplication": "O enfermeiro instrumentista deve manusear componentes de cerâmica (cabeças femorais ou insertos) com extremo cuidado assético e mecânico, evitando batimentos ou impactos que possam criar microfissuras promotoras de fratura frágil sob carga corporal."
  },
  {
    "id": 2155,
    "topicId": 2,
    "question": "A Lei de Hooke (F = k · Δx) é aplicada biofisicamente em dinamómetros e sistemas de tração esquelética calibrados por molas. Se uma mola de tração com constante elástica k = 500 N/m sofrer um alongamento Δx de 4 cm (0,04 m), qual é a força de tração exata exercida sobre o membro do doente?",
    "options": [
      "20 N.",
      "200 N.",
      "12,5 N.",
      "2000 N."
    ],
    "correctIndex": 0,
    "explanation": "Pela Lei de Hooke, F = k · Δx. Substituindo os valores em unidades SI: F = 500 N/m · 0,04 m = 20 N. Esta força equivale aproximadamente ao peso de uma massa suspensa de 2,04 kg sob a aceleração gravítica terrestre (g ≈ 9,8 m/s²).",
    "distractorAnalysis": [
      "Está incorreta porque resultaria de usar incorretamente 0,4 m em vez de 4 cm (0,04 m).",
      "Está incorreta porque resultaria de dividir k por Δx em vez de multiplicar (500 / 0,04 = 12500).",
      "Está incorreta porque resultaria de um erro de cálculo com potência de dez desfasada por dois fatores de grandeza."
    ],
    "nursingApplication": "Na vigilância de trações ortopédicas esqueléticas ou cutâneas no leito, o enfermeiro verifica se o alongamento das molas ou os pesos suspensos correspondem com rigor à prescrição médica, garantindo a magnitude exata da força de redução da fratura."
  },
  {
    "id": 2156,
    "topicId": 2,
    "question": "Em camas hospitalares especializadas e estrados ortopédicos de reabilitação, vários conjuntos de molas elásticas são montados 'em paralelo' para suportar o peso do colchão e do doente. Se duas molas com constantes elásticas k₁ = 300 N/m e k₂ = 500 N/m estiverem associadas em paralelo, qual é a constante elástica equivalente (k_eq) do sistema?",
    "options": [
      "800 N/m.",
      "187,5 N/m.",
      "200 N/m.",
      "150000 N/m."
    ],
    "correctIndex": 0,
    "explanation": "Na associação de molas em paralelo, a deformação sofrida por ambas é idêntica (Δx) e a força total aplicada reparte-se pelas duas molas: F_total = F₁ + F₂ = k₁·Δx + k₂·Δx = (k₁ + k₂)·Δx. Logo, a constante elástica equivalente é a soma direta das constantes individuais: k_eq = k₁ + k₂ = 300 + 500 = 800 N/m. O sistema torna-se mais rígido.",
    "distractorAnalysis": [
      "Está incorreta porque 187,5 N/m corresponde ao cálculo de duas molas ligadas em série: 1/k_eq = 1/300 + 1/500, o que reduz a rigidez em vez de somar.",
      "Está incorreta porque resultaria de uma subtração errónea das constantes elásticas (500 - 300 = 200).",
      "Está incorreta porque resultaria de uma multiplicação dimensionalmente incorreta das constantes."
    ],
    "nursingApplication": "Compreender que elementos elásticos em paralelo aumentam a rigidez global ajuda a equipa de enfermagem a selecionar estrados e suportes com conformidade biomecânica correta para o peso e perfil do doente."
  },
  {
    "id": 2157,
    "topicId": 2,
    "question": "Na biomecânica muscular, as unidades sarcoplasmáticas contráteis e as bandas tendinosas conectam-se 'em série'. Se duas estruturas elásticas forem associadas em série, o que acontece à constante elástica equivalente (k_eq) e à complacência total do conjunto?",
    "options": [
      "A constante elástica equivalente diminui (1/k_eq = 1/k₁ + 1/k₂), tornando o conjunto mais complacente e mais fácil de deformar do que qualquer uma das molas isoladas.",
      "A constante elástica equivalente duplica obrigatoriamente, tornando o conjunto perfeitamente rígido e indeformável.",
      "A complacência total anula-se, impedindo qualquer alongamento sob tração mecânica.",
      "A força transmitida ao longo da cadeia em série dissipa-se para zero no ponto de junção das duas estruturas."
    ],
    "correctIndex": 0,
    "explanation": "Na associação de molas em série, a mesma força F atua uniformemente ao longo de todos os elementos, e o alongamento total é a soma dos alongamentos individuais: Δx_total = Δx₁ + Δx₂ = F/k₁ + F/k₂ = F·(1/k₁ + 1/k₂). Assim, 1/k_eq = 1/k₁ + 1/k₂. Isto significa que a constante elástica equivalente em série é sempre menor do que a menor das constantes individuais, aumentando a complacência e elasticidade global.",
    "distractorAnalysis": [
      "Está incorreta porque a constante equivalente só aumentaria se os elementos fossem montados em paralelo, nunca em série.",
      "Está incorreta porque a complacência (facilidade de deformação) aumenta na associação em série, não se anula.",
      "Está incorreta porque, pela 3.ª Lei de Newton, a tensão de tração propaga-se integralmente através de todos os elementos alinhados em série."
    ],
    "nursingApplication": "O complexo músculo-tendão combina fibras musculares e tecido conectivo em série; o enfermeiro sabe que tendões rígidos transmitem força rapidamente, mas um músculo fatigado perde capacidade de amortecimento, aumentando a suscetibilidade a estiramentos."
  },
  {
    "id": 2158,
    "topicId": 2,
    "question": "A articulação atlanto-occipital, na sustentação e movimento da cabeça humana no plano sagital, é o exemplo anatómico canónico de que classe de alavanca?",
    "options": [
      "Alavanca de 1.ª classe (interfixa), onde o fulcro se situa nos côndilos occipitais, entre o peso da cabeça (resistência) e a força dos músculos extensores da nuca (potência).",
      "Alavanca de 2.ª classe (inter-resistente), onde o fulcro se situa no queixo e a força de potência é aplicada nos dentes molares.",
      "Alavanca de 3.ª classe (interpotente), onde os músculos da nuca se inserem entre os olhos e o nariz para puxar a fronte para baixo.",
      "Alavanca hidráulica sem qualquer fulcro ósseo rígido nem braços mecânicos mensuráveis."
    ],
    "correctIndex": 0,
    "explanation": "Na alavanca de 1.ª classe (interfixa), o ponto de apoio (fulcro) situa-se entre o ponto de aplicação da força potente e o ponto de aplicação da força resistente. Na cabeça humana, os côndilos occipitais articulam com o atlas formando o fulcro central; o centro de gravidade da cabeça situa-se ligeiramente anterior a este ponto (resistência que tende a fazer cair o queixo no peito), sendo equilibrado posteriormente pela tração dos músculos esplénio e trapézio da nuca (potência).",
    "distractorAnalysis": [
      "Está incorreta porque na alavanca de 2.ª classe a resistência está no meio; no crânio, o fulcro ósseo está entre a resistência anterior e a potência posterior.",
      "Está incorreta porque na alavanca de 3.ª classe a potência situa-se no meio; os músculos da nuca inserem-se na linha nucal posterior do occipital, fora do espaço intermédio.",
      "Está incorreta porque a articulação craniocervical é uma articulação sinovial condilar com fulcro e braços anatómicos perfeitamente mensuráveis."
    ],
    "nursingApplication": "Ao posicionar doentes em coma ou sedados na cama, o enfermeiro recorda que a perda de tónus dos extensores da nuca desequilibra esta alavanca de 1.ª classe, fazendo a cabeça fletir anteriormente e ocluir as vias aéreas superiores, sendo essencial a extensão neutra com coxim."
  },
  {
    "id": 2159,
    "topicId": 2,
    "question": "A elevação do corpo humano na ponta dos pés (flexão plantar realizada pelo tríceps sural - gémeos e sóleo) é o exemplo mais frequentemente citado de que tipo de alavanca anatómica e qual a sua característica mecânica?",
    "options": [
      "Alavanca de 2.ª classe (inter-resistente), onde a resistência (peso do corpo transmitido pela tíbia) está entre o fulcro (cabeças dos metatarsos) e a potência (tendão de Aquiles), garantindo sempre Vantagem Mecânica > 1.",
      "Alavanca de 3.ª classe (interpotente), onde o tendão de Aquiles se insere entre os dedos e o tornozelo, com desvantagem mecânica severa de força.",
      "Alavanca de 1.ª classe (interfixa), onde o tornozelo anula todas as forças normais do solo.",
      "Alavanca puramente rotacional sem qualquer vantagem mecânica em relação à carga estática."
    ],
    "correctIndex": 0,
    "explanation": "Na elevação na ponta dos pés, o ponto de apoio (fulcro) situa-se na articulação metatarsofalângica no solo; o peso de todo o corpo desce pelo tornozelo através da tíbia (resistência, no meio); a força muscular potente é aplicada posteriormente no calcâneo pelo tendão de Aquiles (potência). Como a resistência está no meio (alavanca de 2.ª classe), o braço de potência (d_P) é necessariamente maior do que o braço de resistência (d_R), resultando numa Vantagem Mecânica de força superior a 1 (VM = d_P / d_R > 1).",
    "distractorAnalysis": [
      "Está incorreta porque na alavanca de 3.ª classe a potência estaria no meio e a VM seria sempre menor que 1; no tornozelo a potência está na extremidade posterior.",
      "Está incorreta porque na alavanca de 1.ª classe o fulcro estaria entre a carga e a força muscular; na ponta dos pés o fulcro está no solo na extremidade anterior.",
      "Está incorreta porque a alavanca inter-resistente confere uma clara vantagem mecânica de força, permitindo erguer 70-80 kg de peso corporal com menor tensão muscular do que o peso total."
    ],
    "nursingApplication": "Compreender esta alavanca de 2.ª classe é vital na reabilitação pós-operatória da marcha: qualquer lesão ou imobilização que encurte o tendão de Aquiles compromete o braço de potência, impedindo o impulso mecânico normal do passo."
  },
  {
    "id": 2160,
    "topicId": 2,
    "question": "A flexão do cotovelo humano pelo músculo bicípite braquial ao levantar um peso colocado na mão constitui uma alavanca de 3.ª classe (interpotente). Qual é a principal consequência biofísica deste arranjo anatómico para o sistema neuromuscular?",
    "options": [
      "Desvantagem mecânica de força (VM < 1), exigindo que o músculo exerça uma força muito superior ao peso do objeto, mas proporcionando grande ganho de velocidade e amplitude de movimento na mão.",
      "Vantagem mecânica de força maciça (VM = 15), permitindo levantar pesos pesados sem qualquer esforço metabólico.",
      "Anulação total do momento de torção na articulação umerocubital por alinhamento axial perfeito.",
      "Inversão do vetor gravítico que faz o antebraço levitar espontaneamente em direção ao ombro."
    ],
    "correctIndex": 0,
    "explanation": "Nas alavancas de 3.ª classe (interpotentes), a força potente é aplicada entre o fulcro e a resistência. Na flexão do cotovelo, o fulcro é a articulação umerocubital; o tendão bicipital insere-se na tuberosidade radial a cerca de 4-5 cm do fulcro (braço de potência, d_P); a carga na mão situa-se a cerca de 35 cm do fulcro (braço de resistência, d_R). Como d_P < d_R, a vantagem mecânica é muito inferior a 1 (VM ≈ 4/35 ≈ 0,11), exigindo que o bíceps puxe com cerca de 9 a 10 vezes mais força do que o peso sustentado na mão. Em contrapartida, um pequeno encurtamento muscular de 1 cm traduz-se num movimento amplo e rápido de quase 10 cm na mão.",
    "distractorAnalysis": [
      "Está incorreta porque as alavancas de 3.ª classe têm sempre desvantagem de força (VM < 1), nunca ganho de força.",
      "Está incorreta porque o torque articular é precisamente o produto da força muscular pelo seu braço de alavanca, sendo o motor da rotação.",
      "Está incorreta porque a gravidade atua de forma constante em direção ao centro da Terra e tem de ser superada pelo trabalho muscular."
    ],
    "nursingApplication": "Ao mobilizar doentes hemiplégicos ou posicionar membros paréticos, o enfermeiro sabe que a sustentação de objetos com o antebraço em extensão parcial impõe enormes tensões reativas ao tendão do bíceps e à articulação, devendo o membro ser suportado com braçadeiras ou coxins."
  },
  {
    "id": 2161,
    "topicId": 2,
    "question": "A extensão do joelho no plano sagital pelo músculo quadríceps femoral ao chutar uma bola ou elevar a perna contra a gravidade funciona biomecanicamente como que classe de alavanca?",
    "options": [
      "Alavanca de 3.ª classe (interpotente), onde o tendão rotuliano se insere na tuberosidade anterior da tíbia entre o fulcro articular do joelho e o peso do pé/perna.",
      "Alavanca de 2.ª classe (inter-resistente), onde o pé atua como fulcro fixo imutável no espaço aéreo.",
      "Alavanca de 1.ª classe com o fulcro posicionado na sínfise púbica.",
      "Alavanca de deformação puramente plástica que calcifica a rótula após cada ciclo de extensão."
    ],
    "correctIndex": 0,
    "explanation": "Na extensão do joelho em cadeia cinética aberta (perna livre no ar), o fulcro de rotação situa-se nos côndilos femorotibiais; a força de potência é aplicada pelo ligamento/tendão rotuliano na tuberosidade anterior da tíbia (a escassos centímetros do fulcro); a força resistente é o peso da perna e pé (distribuído ao longo do membro inferior). Como a potência está entre o fulcro e a carga, trata-se de uma alavanca de 3.ª classe, otimizada para velocidade linear na ponta do pé.",
    "distractorAnalysis": [
      "Está incorreta porque numa perna livre no ar o pé não é ponto de apoio (fulcro), mas sim o ponto onde a carga/resistência se manifesta.",
      "Está incorreta porque o fulcro da extensão do joelho é a própria articulação do joelho, não a bacia ou o púbis.",
      "Está incorreta porque a rótula é um osso sesamóide que desliza na tróclea femoral sem calcificação plástica patológica no movimento normal."
    ],
    "nursingApplication": "A rótula atua como uma roldana biológica que afasta o tendão rotuliano do centro de rotação do joelho, aumentando o braço de potência do quadríceps; o enfermeiro sabe que após patelectomia, a força de extensão do doente diminui cerca de 30-40% devido à redução desse braço de alavanca."
  },
  {
    "id": 2162,
    "topicId": 2,
    "question": "Ao realizar a abdução do braço a 90° em relação ao tronco, o músculo deltoide contrai-se para suster o membro superior. Como se classifica esta alavanca articular e qual é o papel do seu braço mecânico?",
    "options": [
      "Alavanca de 3.ª classe: o deltoide insere-se na tuberosidade deltoideia do úmero (braço de potência muito curto ~4 cm) entre a articulação glenoumeral (fulcro) e o centro de gravidade do braço (braço de resistência ~30 cm), exigindo intensa força muscular de tração.",
      "Alavanca de 1.ª classe com ganho mecânico infinito que permite manter o braço aberto durante 24 horas sem qualquer fadiga muscular.",
      "Alavanca de 2.ª classe onde o peso da mão atua como o fulcro de apoio de todo o tronco.",
      "Sistema elástico passivo sem consumo de energia metabólica por atuar em regime estático de repouso."
    ],
    "correctIndex": 0,
    "explanation": "A abdução do ombro é um clássico exemplo de alavanca de 3.ª classe: fulcro na articulação glenoumeral, potência no terço médio do úmero (tuberosidade deltoideia) e resistência no peso do membro superior. Devido ao reduzido braço de potência relativamente ao comprimento do membro, a força exercida pelo deltoide para manter o braço horizontal é frequentemente 8 a 10 vezes superior ao peso do próprio membro superior, gerando também uma enorme força de compressão na cavidade glenoideia.",
    "distractorAnalysis": [
      "Está incorreta porque o esforço isométrico é elevado e a fadiga instala-se rapidamente devido à baixa vantagem mecânica de força.",
      "Está incorreta porque a mão é a extremidade livre resistente, estando o fulcro localizado no ombro.",
      "Está incorreta porque a contração muscular isométrica gasta ativamente ATP para manter os ciclos de pontes cruzadas de actina-miosina."
    ],
    "nursingApplication": "Ao posicionar ou transferir um doente dependente, o enfermeiro deve manter o corpo do doente próximo do seu próprio centro de gravidade: afastar os braços durante o levante transforma os braços do enfermeiro em alavancas de 3.ª classe com braço de resistência longo, sobrecarregando criticamente a musculatura do ombro e da coluna."
  },
  {
    "id": 2163,
    "topicId": 2,
    "question": "A extensão ativa do cotovelo realizada pelo músculo tríceps braquial (por exemplo, ao empurrar uma cadeira de rodas ou apoiar as mãos na cama para se levantar) constitui que classe de alavanca biomecânica?",
    "options": [
      "Alavanca de 1.ª classe (interfixa): o fulcro situa-se na articulação umerocubital, a potência atua posteriormente no olecrânio da ulna e a resistência atua anteriormente na mão/antebraço.",
      "Alavanca de 2.ª classe: a resistência situa-se no ombro e o fulcro na ponta dos dedos da mão.",
      "Alavanca de 3.ª classe: o tendão do tríceps insere-se na palma da mão atravessando todo o antebraço.",
      "Sistema desprovido de torque rotacional com movimento exclusivo de translação pura sem eixo articular."
    ],
    "correctIndex": 0,
    "explanation": "Na extensão do cotovelo, o fulcro é a articulação umerocubital (entre o úmero e a ulna); o músculo tríceps braquial insere-se no olecrânio da ulna, que se projeta posteriormente em relação ao eixo articular (braço de potência); a força resistente atua no antebraço ou mão, anteriormente ao fulcro. Com o fulcro posicionado entre a força potente e a força resistente, esta articulação configura perfeitamente uma alavanca de 1.ª classe (interfixa).",
    "distractorAnalysis": [
      "Está incorreta porque a alavanca de 2.ª classe exige que a resistência esteja no meio; na extensão do cotovelo o eixo articular (fulcro) situa-se no meio.",
      "Está incorreta porque o tríceps braquial termina na apófise olecraniana da ulna (no cotovelo), não na palma da mão.",
      "Está incorreta porque a extensão articular é um movimento angular de rotação em torno do eixo transversal da tróclea umeral, gerando torque."
    ],
    "nursingApplication": "Para doentes paraplégicos ou amputados que utilizam os tríceps para transferências de cadeira para o leito, a integridade da inserção do olecrânio é essencial; o enfermeiro treina o fortalecimento desta alavanca de 1.ª classe para promover a autonomia de mobilidade."
  },
  {
    "id": 2164,
    "topicId": 2,
    "question": "Uma pinça hemostática de Kelly ou Halsted-Mosquito utilizada no bloco operatório e no tratamento de feridas é concebida como uma alavanca de 1.ª classe articulada. Como se explica biofisicamente a grande força de aperto gerada nas suas mandíbulas?",
    "options": [
      "A haste com os anéis de preensão (braço de potência) é significativamente mais longa do que a ponta ativa com as mandíbulas (braço de resistência), resultando numa Vantagem Mecânica de força superior a 1 (VM > 1).",
      "A pinça utiliza energia nuclear fraca para fundir as paredes dos vasos sanguíneos sem qualquer pressão mecânica.",
      "As mandíbulas são uma alavanca de 3.ª classe com braço de potência cem vezes mais longo do que a haste exterior.",
      "A força de oclusão advém exclusivamente de um campo magnético gerado pelo aço inoxidável quando esterilizado em autoclave."
    ],
    "correctIndex": 0,
    "explanation": "A pinça hemostática funciona através de duas alavancas de 1.ª classe unidas por um parafuso central (fulcro). O enfermeiro ou cirurgião aplica a força com os dedos nos anéis a uma distância d_P considerável do fulcro; as mandíbulas que pinçam o vaso sanguíneo distam apenas d_R (muito mais curto) do fulcro. Pelo princípio dos momentos em equilíbrio (F_P · d_P = F_R · d_R), a força exercida nas mandíbulas é F_R = F_P · (d_P / d_R). Como d_P > d_R, a vantagem mecânica VM > 1 amplifica a força digital do operador, garantindo colapso e hemostase vascular segura.",
    "distractorAnalysis": [
      "Está incorreta porque as pinças manuais hemostáticas funcionam por compressão mecânica newtoniana pura, sem envolvimento de física nuclear.",
      "Está incorreta porque o fulcro situa-se na charneira articulada entre os anéis e as pontas, sendo uma alavanca de 1.ª classe e não de 3.ª classe.",
      "Está incorreta porque o aço inoxidável cirúrgico comum (grau austenítico ou martensítico) é passivo e não atua como íman permanente hemostático."
    ],
    "nursingApplication": "O enfermeiro instrumentista verifica sempre a calibração da cremalheira e o alinhamento das mandíbulas das pinças: o desgaste da charneira desloca o fulcro efetivo e reduz a vantagem mecânica, podendo originar hemorragias iatrogénicas por perda de hemostase."
  },
  {
    "id": 2165,
    "topicId": 2,
    "question": "Em cirurgia, a tesoura de Metzenbaum caracteriza-se por ter hastes longas e lâminas curtas e finas, sendo indicada para dissecção delicada de tecidos moles. Como se compara a sua vantagem mecânica com uma tesoura de Mayo (de lâminas mais robustas e curtas)?",
    "options": [
      "A tesoura de Metzenbaum privilegia o alcance anatómico profundo e o controlo tátil delicado, enquanto a tesoura de Mayo possui maior vantagem mecânica de força para cortar estruturas densas como fáscias e tendões.",
      "A tesoura de Metzenbaum tem vantagem mecânica nula porque as suas lâminas são de plástico maleável descartável.",
      "A tesoura de Mayo é uma alavanca de 2.ª classe e a de Metzenbaum é uma alavanca de 3.ª classe sem qualquer ponto de apoio.",
      "Não existe diferença biomecânica entre os dois instrumentos, sendo uma questão estritamente de cor e acabamento de fábrica."
    ],
    "correctIndex": 0,
    "explanation": "Ambas as tesouras são alavancas de 1.ª classe com lâminas opostas. Contudo, a tesoura de Mayo possui hastes reforçadas e uma relação entre braço de potência e braço de corte projetada para gerar elevadíssima tensão de cisalhamento, cortando tecidos densos e suturas pesadas. A tesoura de Metzenbaum possui hastes finas e alongadas com lâminas delicadas, permitindo alcançar planos profundos com excelente sensibilidade tátil e menor força de corte, ideal para dissecção precisa de planos fasciais sem laceração inadvertida de vasos.",
    "distractorAnalysis": [
      "Está incorreta porque as tesouras cirúrgicas de Metzenbaum são instrumentos de alta precisão em aço inoxidável ou pontas de tungsténio com vantagem mecânica definida.",
      "Está incorreta porque ambas são alavancas de 1.ª classe articuladas por parafuso central.",
      "Está incorreta porque a geometria dos braços de alavanca dita diretamente a força de cisalhamento e o propósito clínico do instrumento no bloco operatório."
    ],
    "nursingApplication": "O enfermeiro instrumentista nunca deve fornecer uma tesoura de Metzenbaum para o corte de fios de sutura ou drenos de borracha: materiais duros desafiam a delicada relação de alavanca das suas pontas, descalibrando as lâminas e estragando o fio de corte de dissecção."
  },
  {
    "id": 2166,
    "topicId": 2,
    "question": "No bloco operatório de ortopedia, os alicates corta-fios ósseos utilizam frequentemente um sistema de 'dupla articulação' mecânica (compound action). Qual é a finalidade biofísica desta conceção de engenharia?",
    "options": [
      "Multiplicar a vantagem mecânica associando duas alavancas de 1.ª classe em cascata, permitindo ao operador cortar fios de aço inoxidável ou Kirschner de alta dureza com esforço manual confortável.",
      "Diminuir a força de corte para evitar que o fio de metal corte o osso fraturado.",
      "Transformar o alicate num instrumento de alavanca de 3.ª classe que reduz a força em 90% para segurança do doente.",
      "Eliminar completamente o atrito cinético através de lubrificação por ar comprimido estéril a 50 bar."
    ],
    "correctIndex": 0,
    "explanation": "Um alicate de corte com dupla articulação (compound lever) conecta duas alavancas mecânicas em série: a força aplicada nos cabos é amplificada pela primeira alavanca e essa força de saída serve como entrada para a segunda alavanca mais curta nas lâminas de corte. A Vantagem Mecânica total é o produto das vantagens mecânicas individuais (VM_total = VM₁ · VM₂), atingindo frequentemente valores superiores a 15-20. Isto permite gerar forças de cisalhamento de milhares de Newtons nas arestas de corte aplicando apenas 100-200 N com a mão.",
    "distractorAnalysis": [
      "Está incorreta porque o objetivo de cortar fios rígidos de osteossíntese exige a maior força mecânica de cisalhamento possível.",
      "Está incorreta porque as alavancas de 3.ª classe diminuem a força de saída; um alicate corta-fios necessita de maximizar a força.",
      "Está incorreta porque são instrumentos cirúrgicos mecânicos manuais não-pneumáticos, esterilizáveis em autoclave."
    ],
    "nursingApplication": "Conhecer a mecânica da dupla articulação permite ao enfermeiro selecionar o instrumento correto para fios de Kirschner espessos, prevenindo lesões por esforço repetitivo (LER/DORT) e fadiga muscular na equipa cirúrgica."
  },
  {
    "id": 2167,
    "topicId": 2,
    "question": "A pinça anatómica de dissecção comum (sem travão nem cremalheira), segurada entre o polegar e o indicador para manuseamento delicado de tecidos, comporta-se biofisicamente como que classe de alavanca?",
    "options": [
      "Alavanca de 3.ª classe (interpotente), com o fulcro na extremidade unida posterior, a força dos dedos aplicada no meio das hastes e a carga resistente nas pontas de preensão.",
      "Alavanca de 1.ª classe com o fulcro posicionado exatamente no meio da ferida do doente.",
      "Alavanca de 2.ª classe onde o tecido seguro esmaga os dedos do cirurgião com força amplificada.",
      "Plano inclinado móvel que funciona por cunha rotativa automática."
    ],
    "correctIndex": 0,
    "explanation": "A pinça de dissecção consiste em duas lâminas flexíveis de aço soldadas na base posterior. A base unida atua como o ponto de apoio elástico (fulcro); a força dos dedos do enfermeiro é aplicada a meio do comprimento das hastes (potência); as pontas da pinça que contactam o tecido ou a gaze constituem a resistência. Com a força potente aplicada entre o fulcro e a carga resistente, trata-se inequivocamente de uma alavanca de 3.ª classe (interpotente).",
    "distractorAnalysis": [
      "Está incorreta porque o fulcro situa-se na extremidade fundida posterior da pinça, não na ferida nem entre os dedos e a ponta.",
      "Está incorreta porque na alavanca de 2.ª classe a carga estaria no meio e os dedos na extremidade livre.",
      "Está incorreta porque a pinça é uma alavanca elástica flexível de preensão, não um plano inclinado ou parafuso."
    ],
    "nursingApplication": "Por ser uma alavanca de 3.ª classe com desvantagem de força (VM < 1), a pinça de dissecção garante uma excelente sensibilidade tátil e feedback proprioceptivo, permitindo ao enfermeiro apreender bordos cutâneos ou tecidos nobres sem aplicar pressão esmagadora excessiva."
  },
  {
    "id": 2168,
    "topicId": 2,
    "question": "A pinça de Adson com dentes de rato (1x2 dentes) é amplamente utilizada em cirurgia para preensão da derme e fáscia. Do ponto de vista biofísico da pressão (P = F / A), qual é a vantagem dos dentes de rato sobre uma pinça de ponta plana e lisa?",
    "options": [
      "Como a área de contacto dos dentes pontiagudos é minúscula, uma força muscular muito ligeira do enfermeiro gera pressão pontual suficiente para engatar firmemente a derme sem necessidade de esmagar ischemicamente toda a área tecidual.",
      "Os dentes aumentam a área de contacto em 500 vezes, reduzindo a pressão exercida para zero.",
      "Os dentes emitem um microchoque piezoelétrico que coagula os capilares dérmicos instantaneamente.",
      "A pinça com dentes perde a sua condição de alavanca mecânica, comportando-se como um imã de neodímio."
    ],
    "correctIndex": 0,
    "explanation": "A fórmula da pressão é P = F / A. Uma pinça lisa e plana, para segurar a pele sem que esta escorregue durante a sutura, exige que o operador aperte com grande força (F), gerando uma pressão de esmagamento contínua sobre uma área plana que causa isquemia e necrose dos bordos da ferida. Pelo contrário, os microdentes da pinça de Adson (1x2 dentes) têm uma área de vértice extremamente pequena (A muito reduzido); uma força suave (F baixa) gera pressão local suficiente para penetrar superficialmente e engatar o estrato colagénico dérmico por interbloqueio mecânico, prevenindo o escorregamento e poupando a vascularização circundante.",
    "distractorAnalysis": [
      "Está incorreta porque dentes afilados diminuem drasticamente a área de contacto, aumentando a pressão local em vez de reduzi-la a zero.",
      "Está incorreta porque as pinças de Adson convencionais são puramente mecânicas, sem circuitos de eletrocoagulação piezoelétrica.",
      "Está incorreta porque o instrumento mantém a sua estrutura física de alavanca elástica interpotente de 3.ª classe."
    ],
    "nursingApplication": "Ao auxiliar em suturas de pele no serviço de urgência ou consulta externa, o enfermeiro sabe que a pinça de Adson com dentes é paradoxalmente mais atraumática para a derme do que a pinça serrilhada plana, desde que utilizada apenas para aproximação suave e não para esmagamento."
  },
  {
    "id": 2169,
    "topicId": 2,
    "question": "Ao transferir um doente dependente da cama para a cadeira, um enfermeiro flete os cotovelos mantendo o tronco do doente junto ao seu próprio peito (d_R = 20 cm do eixo lombar L5-S1). Se o enfermeiro afastar o doente esticando os braços para a frente a uma distância d_R = 60 cm, o que acontece ao Momento de Torção (Torque de flexão) exercido sobre as vértebras lombares e à força necessária nos músculos eretores da espinha?",
    "options": [
      "O braço de resistência triplica, fazendo triplicar o torque lombar e exigindo o triplo da força de contração dos músculos eretores da espinha para manter o equilíbrio.",
      "O torque diminui para um terço porque a distância dissipa a gravidade do corpo do doente.",
      "A força muscular lombar permanece inalterada porque o peso do doente em Newtons não se modificou.",
      "A coluna lombar deixa de funcionar como alavanca e passa a atuar como um fluido incompressível."
    ],
    "correctIndex": 0,
    "explanation": "O torque ou momento de uma força é dado por τ = F · d. O peso do doente (F = m·g) gera um momento flexor na coluna lombar proporcional à distância horizontal até ao disco L5-S1 (braço de resistência, d_R). Se a distância passar de 20 cm para 60 cm (fator de 3), o momento resistente triplica: τ_res = F_peso · 0,60 m. Para manter o equilíbrio rotacional (Στ = 0), os músculos eretores da espinha (que possuem um braço de potência muito curto de apenas 5 cm) têm de gerar um torque oposto igual: F_muscular · 0,05 m = τ_res. Logo, a força muscular requerida triplica, gerando forças de compressão axial gigantescas que podem ultrapassar os 4000 a 6000 N no disco intervertebral.",
    "distractorAnalysis": [
      "Está incorreta porque aumentar a distância ao eixo de rotação aumenta o momento de força e a sobrecarga mecânica, não a diminui.",
      "Está incorreta porque, embora a massa do doente seja a mesma, o torque depende diretamente da distância perpendicular (braço de alavanca).",
      "Está incorreta porque a coluna vertebral humana atua biomecanicamente como uma coluna estrutural articulada governada por alavancas de 1.ª e 3.ª classes."
    ],
    "nursingApplication": "Este cálculo biofísico é o pilar da ergonomia em enfermagem: manter a carga colada ao centro de gravidade do corpo do enfermeiro minimiza o braço de alavanca da carga, prevenindo hérnias discais e lesões musculoesqueléticas incapacitantes na equipa."
  },
  {
    "id": 2170,
    "topicId": 2,
    "question": "A fórmula do momento de uma força é τ = F · d · sen(θ). Na biomecânica da articulação do cotovelo, para que ângulo de flexão articular (θ entre o tendão do bíceps e o rádio) a eficácia mecânica de rotação da contração muscular é máxima?",
    "options": [
      "90°, porque sen(90°) = 1, fazendo com que 100% da força muscular seja convertida em momento de rotação articular sem desperdício em forças de compressão axial desnecessárias.",
      "0° (braço totalmente esticado), porque sen(0°) = 1 e a força puxa em linha reta ao longo do osso.",
      "180° (braço em hiperextensão), porque o torque atinge valor infinito por ressonância magnética.",
      "45°, porque divide a força equitativamente entre rotação e calor metabólico."
    ],
    "correctIndex": 0,
    "explanation": "O momento rotacional depende do seno do ângulo de inserção: τ = F · d · sen(θ). A função seno tem o seu valor máximo de 1 quando o ângulo θ é de 90° (perpendicular ao segmento ósseo). A 90° de flexão do cotovelo, toda a força de tração do bíceps atua tangencialmente para rodar o antebraço. Quando o braço está quase esticado (ex: θ = 10° ou 20°), sen(θ) é muito pequeno e a grande maioria da força muscular atua paralelamente ao osso comprimindo a ulna contra o úmero (força de estabilização articular) em vez de fletir o cotovelo.",
    "distractorAnalysis": [
      "Está incorreta porque sen(0°) = 0; com o braço a 0°, o torque rotacional do músculo é matematicamente zero (toda a força é compressiva axial).",
      "Está incorreta porque sen(180°) = 0 e a hiperextensão bloqueia o movimento articular sem gerar torque positivo.",
      "Está incorreta porque a 45° o sen(45°) ≈ 0,707, sendo significativamente inferior ao valor máximo unitário a 90°."
    ],
    "nursingApplication": "O enfermeiro ensina o doente a iniciar movimentos de esforço de elevação ou tracção a partir de ângulos articulares próximos de 90°, onde a vantagem mecânica rotacional do músculo é ótima, evitando lesões tendinosas por tração em extensão máxima."
  },
  {
    "id": 2171,
    "topicId": 2,
    "question": "Em doentes acamados, a elevação da cabeceira da cama acima de 30° sem fletir os joelhos provoca o deslizamento do tronco em direção aos pés. Biofisicamente, que tipo de tensão mecânica tangencial se desenvolve entre a pele fixa ao lençol e as fáscias musculares profundas sob o sacro, sendo o principal detonador de Lesões por Pressão (LPP) categoria profunda?",
    "options": [
      "Tensão de Cisalhamento (Shear Stress), que distorce, estira e oclui mecanicamente os vasos perfurantes profundos da microcirculação por deformação angular tecidual.",
      "Tensão de tração isotrópica hidrostática que oxigena os tecidos por vácuo superficial.",
      "Tensão compressiva axial pura sem qualquer componente de vetor tangencial de atrito.",
      "Tensão piezoelétrica regenerativa que previne a formação de qualquer escara."
    ],
    "correctIndex": 0,
    "explanation": "A tensão de cisalhamento (shear stress, τ = F_tangencial / A) atua paralelamente à superfície tecidual. Quando a cabeceira da cama é elevada, o peso do doente cria uma componente gravitacional paralela ao estrado; o atrito estático do lençol segura a epiderme no mesmo sítio, mas a gravidade puxa a bacia e os músculos para baixo. Esta deformação por cisalhamento torce, estica e oclui os vasos sanguíneos perfurantes na interface músculo-fáscia profunda, causando trombose microvascular e necrose isquémica profunda muito mais rápida do que a compressão perpendicular isolada.",
    "distractorAnalysis": [
      "Está incorreta porque a tração hidrostática não oxigena tecidos nem impede a isquemia gerada pelo deslizamento corporal.",
      "Está incorreta porque a elevação da cabeceira decompõe a gravidade numa componente normal e numa componente tangencial de cisalhamento considerável.",
      "Está incorreta porque as forças mecânicas sustentadas no leito são a etiologia comprovada das lesões por pressão (escaras de decúbito), não fatores regenerativos."
    ],
    "nursingApplication": "Para prevenir lesões por cisalhamento, as diretrizes de enfermagem recomendam manter a cabeceira a ≤ 30° sempre que clinicamente admissível e elevar a secção dos joelhos da cama elétrica antes de subir a cabeceira, travando o deslizamento da bacia."
  },
  {
    "id": 2172,
    "topicId": 2,
    "question": "A compressão mecânica perpendicular (tensão compressiva, σ = F / A) exercida por uma proeminência óssea (como o sacro ou calcâneo) contra um colchão hospitalar rígido é perigosa quando ultrapassa que limiar biofísico de pressão capilar média?",
    "options": [
      "Aproximadamente 32 mmHg (~4,3 kPa), valor que corresponde à pressão hidrostática na extremidade arteriolar dos capilares sanguíneos, provocando o colapso do vaso e anóxia tecidual.",
      "Aproximadamente 120 mmHg (~16 kPa), pressão que coincide com o colapso exclusivo da artéria femoral profunda.",
      "Aproximadamente 0,5 mmHg (~0,07 kPa), valor abaixo do qual as hemácias perdem a sua carga elétrica negativa.",
      "Qualquer pressão superior a 760 mmHg (pressão de 1 atmosfera absoluta de ar)."
    ],
    "correctIndex": 0,
    "explanation": "Biofisicamente, a microcirculação capilar na derme e tecido subcutâneo opera com pressões hidrostáticas intraluminais que variam entre ~32 mmHg no lado arteriolar e ~12-15 mmHg no lado venular. Se a pressão externa de compressão interface-tecido ultrapassar cerca de 32 mmHg (ou ~4,3 kPa) de forma sustentada por mais de 2 horas, a tensão extravascular colapsa o lúmen dos capilares arteriolares. O fluxo sanguíneo cessa (isquemia focal), acumulando-se metabolitos tóxicos ácidos e instalando-se a necrose tecidual típica da Lesão por Pressão (LPP).",
    "distractorAnalysis": [
      "Está incorreta porque 120 mmHg é a pressão arterial sistólica sistémica nas grandes artérias; os capilares têm paredes muito mais finas e colapsam a pressões muito mais baixas (~32 mmHg).",
      "Está incorreta porque 0,5 mmHg é uma pressão microscópica incapaz de ocluir o leito vascular dérmico.",
      "Está incorreta porque pressões de 760 mmHg equivalem à pressão atmosférica ambiental e não têm relação com o limiar de oclusão arteriolar humana."
    ],
    "nursingApplication": "Este limiar biofísico de 32 mmHg fundamenta toda a prática de enfermagem de alternância de decúbitos a cada 2 horas e a utilização de colchões de ar com redistribuição contínua ou alternada de pressão em doentes imobilizados."
  },
  {
    "id": 2173,
    "topicId": 2,
    "question": "Os tendões e ligamentos humanos são constituídos predominantemente por fibras de colagénio tipo I orientadas em feixes paralelos. Sob uma tensão de tração longitudinal (σ = F / A), como se comporta a sua curva de deformação na fase inicial de carga (zona de curvatura ou 'Toe Region')?",
    "options": [
      "Apresenta baixa rigidez inicial porque os feixes ondulados de colagénio estão a alinhar-se e a esticar as suas dobras naturais, antes de oferecerem grande resistência linear à tração.",
      "Apresenta fratura catastrófica imediata com quebra das ligações covalentes nos primeiros 0,01% de estiramento.",
      "Comporta-se como um líquido com viscosidade zero que escorre em direção à fáscia muscular.",
      "Exibe contração espontânea que encurta o tendão para metade do comprimento anatómico em repouso."
    ],
    "correctIndex": 0,
    "explanation": "Na curva tensão-deformação dos tendões e ligamentos, a fase inicial (designada 'Toe Region' ou zona de ponta do pé) caracteriza-se por um estiramento fácil com pouco esforço (baixa rigidez). Isto ocorre porque as fibrilas de colagénio, que em repouso possuem uma conformação natural ondulada (crimp pattern), estão simplesmente a endireitar-se e a alinhar-se na direção da tração mecânica. Uma vez retificadas (cerca de 2 a 4% de deformação), o tendão entra na zona elástica linear com elevado Módulo de Young.",
    "distractorAnalysis": [
      "Está incorreta porque a fase inicial de retificação não causa lesão nem fratura, sendo a zona fisiológica habitual do movimento humano normal.",
      "Está incorreta porque o tendão é um tecido conectivo denso estrutural viscoelástico, não um líquido fluido.",
      "Está incorreta porque o estiramento passivo sob tração alonga o tecido, sendo a contração ativa exclusiva do tecido muscular contrátil dependente de ATP."
    ],
    "nursingApplication": "Compreender a 'Toe Region' fundamenta a prática de enfermagem de reabilitação com exercícios de aquecimento e alongamento passivo suave: mobilizar suavemente a articulação alinha as fibrilas de colagénio sem atingir a fase de sobrecarga linear ou microrrotura."
  },
  {
    "id": 2174,
    "topicId": 2,
    "question": "Na cirurgia de osteossíntese para fixação de uma fratura óssea com placa, o cirurgião utiliza uma chave de parafusos para apertar parafusos corticais de titânio. Que tipo de solicitação mecânica combinada sofre a haste do parafuso durante o aperto final?",
    "options": [
      "Tensão de torção (torque rotacional) combinada com tensão de tração axial ao longo do eixo do parafuso, comprimindo a placa contra o córtex ósseo.",
      "Pressão osmótica negativa pura sem qualquer força de contacto físico.",
      "Exclusivamente tensão de radiação fotoelétrica com emissão de calor infravermelho.",
      "Tensão de flexão hidrodinâmica gerada pela corrente sanguínea perióstea."
    ],
    "correctIndex": 0,
    "explanation": "Ao apertar o parafuso com a chave, o momento rotacional aplicado na cabeça gera tensão de torção pura ao longo do corpo do parafuso. À medida que a rosca avança no osso e a cabeça é travada contra o orifício da placa, a haste é estirada longitudinalmente sofrendo elevada tensão de tração axial (pre-load). Esta tensão de tração na haste gera uma força de compressão recíproca entre a placa metálica e o osso, garantindo estabilidade absoluta da fratura. Se o cirurgião aplicar torque excessivo, a tensão de torção ultrapassa o limite de rutura e a cabeça do parafuso cisalha e parte-se.",
    "distractorAnalysis": [
      "Está incorreta porque a fixação óssea é um procedimento estritamente de engenharia mecânica de sólidos, sem relação com gradientes osmóticos.",
      "Está incorreta porque o aperto do parafuso é um processo mecânico de torção e atrito, não um fenómeno fotoelétrico quântico.",
      "Está incorreta porque o sangue periósteo não gera momentos mecânicos capazes de solicitar parafusos de osteossíntese."
    ],
    "nursingApplication": "O enfermeiro no bloco de ortopedia assegura a correta calibração e funcionamento das chaves dinamométricas e parafusos: cabeças de parafuso moídas por excesso de torque comprometem a estabilidade da montagem e aumentam o tempo cirúrgico."
  },
  {
    "id": 2175,
    "topicId": 2,
    "question": "O tecido ósseo cortical humano é biomecanicamente classificado como um material 'anisotrópico'. O que significa esta propriedade mecânica na resistência a fraturas?",
    "options": [
      "As suas propriedades mecânicas e o seu Módulo de Young variam conforme a direção de aplicação da carga, sendo o osso mais resistente à compressão longitudinal e muito menos resistente à torção e ao cisalhamento.",
      "O osso apresenta rigorosamente a mesma rigidez e resistência mecânica em todas as direções espaciais tridimensionais (isotropia perfeita).",
      "O osso só se deforma quando submerso em água do mar a temperaturas negativas.",
      "A resistência do osso é imutável e independe da sua microestrutura osteónica ou conteúdo mineral."
    ],
    "correctIndex": 0,
    "explanation": "A anisotropia é a dependência das propriedades mecânicas em relação à direção da força aplicada. No osso cortical longo (como o fémur ou tíbia), os osteónios e as fibras de colagénio alinham-se predominantemente ao longo do eixo longitudinal de carga. Por isso, o osso é extremamente forte sob compressão axial longitudinal (~190-205 MPa), significativamente menos forte sob tração longitudinal (~130 MPa) e muito mais fraco sob forças de torção e cisalhamento transversal (~60-70 MPa). É por este motivo que forças rotacionais (torção com pé preso no solo) provocam fraturas espiroides com relativa facilidade.",
    "distractorAnalysis": [
      "Está incorreta porque propriedades iguais em todas as direções caracterizam materiais 'isotrópicos' (como vidros e metais fundidos não-trabalhados), o oposto do osso.",
      "Está incorreta porque o osso humano opera in vivo a 37 °C no meio intersticial fisiológico.",
      "Está incorreta porque a resistência mecânica óssea é diretamente ditada pela fração mineral de hidroxiapatite, organização do colagénio e porosidade."
    ],
    "nursingApplication": "Ao mobilizar doentes idosos ou pós-operados de fraturas, o enfermeiro evita rigorosamente movimentos de torção forçada sobre o membro: o osso suporta o peso corporal em compressão axial direta, mas fratura facilmente perante momentos de torção lateral."
  },
  {
    "id": 2176,
    "topicId": 2,
    "question": "Uma placa de osteossíntese ou uma haste de prótese da anca pode partir-se subitamente após meses de uso no doente, mesmo suportando forças musculares e de marcha que são muito inferiores à tensão máxima de rotura estática do metal. Qual é o mecanismo biofísico responsável por esta falha mecânica?",
    "options": [
      "Fadiga mecânica (Fatigue failure), resultante da acumulação e propagação microscópica de fendas sob milhões de ciclos repetidos de carga mecânica dinâmica.",
      "Evaporação térmica espontânea das moléculas da liga metálica induzida pela febre do doente.",
      "Ação bacteriana que metaboliza os átomos de titânio como fonte primária de glicose biológica.",
      "Perda súbita da gravidade que estilhaça a estrutura cristalina do implante."
    ],
    "correctIndex": 0,
    "explanation": "A fratura por fadiga ocorre quando um material é submetido a tensões cíclicas ou flutuantes repetidas (como os milhares de passos dados por um doente todos os dias). Cada ciclo de carga pode gerar concentrações de tensão em microimperfeições da superfície do implante (ou num orifício de parafuso), iniciando uma microfissura. Com o passar de meses e milhões de ciclos, a fenda propaga-se silenciosamente até que a secção transversal de metal intacto remanescente é tão pequena que sofre fratura catastrófica sob uma carga normal de marcha.",
    "distractorAnalysis": [
      "Está incorreta porque o ponto de fusão do titânio e do aço ultrapassa os 1400-1600 °C, sendo imunes a evaporação corporal.",
      "Está incorreta porque os metais de osteossíntese são inorgânicos e resistentes à colonização lítica bacteriana.",
      "Está incorreta porque a gravidade é constante e a fadiga é um fenómeno puramente mecânico de propagação de fendas sob carregamento cíclico."
    ],
    "nursingApplication": "Se uma fratura óssea demorar a consolidar (pseudoartrose), o implante continuará a suportar toda a carga cíclica do peso corporal; o enfermeiro alerta para queixas de dor súbita na marcha e insiste no uso de canadianas para proteger a placa de uma fratura por fadiga."
  },
  {
    "id": 2177,
    "topicId": 2,
    "question": "Na curva de Wöhler (tensão versus número de ciclos até à fratura, S-N curve), o que representa o 'Limite de Fadiga' (Endurance Limit) de um biomaterial metálico utilizado em próteses?",
    "options": [
      "O nível de tensão cíclica abaixo do qual o material pode teoricamente ser submetido a um número infinito de ciclos sem nunca sofrer fratura por fadiga.",
      "A carga estática pontual que deforma o implante à velocidade da luz.",
      "O número máximo de vezes que o doente pode pisar o chão antes de a prótese se dissolver.",
      "O tempo exato que um cateter periférico pode permanecer na veia antes de causar flebite química."
    ],
    "correctIndex": 0,
    "explanation": "Muitas ligas de aço e materiais exibem na curva S-N um patamar horizontal denominado Limite de Fadiga (Endurance Limit ou Fatigue Limit). Se a amplitude das tensões mecânicas cíclicas aplicadas ao dispositivo mantiver-se rigorosamente abaixo deste valor limiar, as microfissuras não se propagam e a estrutura tem uma vida útil teoricamente infinita. No projeto de próteses articulares e hastes femorais, os engenheiros dimensionam a espessura do componente para que as tensões da marcha normal permaneçam abaixo deste limite.",
    "distractorAnalysis": [
      "Está incorreta porque a velocidade da luz é uma constante relativista da física quântica e ondulatória, não uma taxa de deformação mecânica de sólidos.",
      "Está incorreta porque próteses sólidas biocompatíveis não se dissolvem no organismo.",
      "Está incorreta porque flebite química em cateteres venosos relaciona-se com pH e osmolaridade de fármacos, não com a curva de fadiga mecânica S-N de metais ortopédicos."
    ],
    "nursingApplication": "O controlo do peso corporal em doentes com próteses articulares é um ensinamento de enfermagem basilar: a obesidade aumenta a amplitude das tensões cíclicas a cada passo, podendo empurrar as cargas acima do limite de fadiga e abreviar a vida útil do implante."
  },
  {
    "id": 2178,
    "topicId": 2,
    "question": "Ao tracionar longitudinalmente um fio de sutura cirúrgica, um tendão ou uma tira de ligadura elástica, observa-se que o seu comprimento aumenta, mas a sua espessura ou largura transversal diminui visivelmente. Que grandeza biofísica adimensional relaciona a deformação transversal com a deformação longitudinal (ν = - ε_transversal / ε_longitudinal)?",
    "options": [
      "Coeficiente de Poisson.",
      "Índice de refração corneana.",
      "Constante de Planck transversal.",
      "Pressão venosa central de decúbito."
    ],
    "correctIndex": 0,
    "explanation": "O Coeficiente de Poisson (denotado pela letra grega ν, 'nu') mede a razão entre a deformação transversal (afinamento lateral) e a deformação longitudinal (alongamento axial) de um material sujeito a tração uniaxial: ν = - (Δd/d₀) / (ΔL/L₀). Para a maioria dos materiais e tecidos biológicos, ν varia tipicamente entre 0,2 e 0,5. Quando um fio ou ligamento estica, ele afina transversalmente, o que reduz a sua área de secção e altera a distribuição de pressões de aperto sobre os tecidos adjacentes.",
    "distractorAnalysis": [
      "Está incorreta porque o índice de refração mede a razão entre a velocidade da luz no vácuo e no meio ótico (física da visão).",
      "Está incorreta porque a constante de Planck relaciona a frequência de um fotão com a sua energia quântica (E = h·f).",
      "Está incorreta porque a pressão venosa central (PVC) mede a pressão hidrostática na aurícula direita em mmHg ou cmH₂O."
    ],
    "nursingApplication": "Ao dar nós de sutura ou apertar tiras elásticas de contenção ou torniquetes, o enfermeiro sabe que o estiramento axial afina o material, concentrando a tensão mecânica em bordas mais finas e afiadas que podem lacerar tecidos dérmicos friáveis."
  },
  {
    "id": 2179,
    "topicId": 2,
    "question": "O 'Módulo de Cisalhamento' (Shear Modulus, G) relaciona a tensão de cisalhamento aplicada tangencialmente com a deformação angular tecidual. Nos tecidos moles humanos e na cartilagem, qual é a relação aproximada entre o Módulo de Cisalhamento (G) e o Módulo de Young (E), sabendo que o tecido biológico hidratado tem coeficiente de Poisson próximo de 0,5 (material praticamente incompressível no curto prazo)?",
    "options": [
      "E ≈ 3 · G (o Módulo de Young é cerca de três vezes o Módulo de Cisalhamento).",
      "G é sempre mil vezes superior ao Módulo de Young em qualquer tecido sólido.",
      "G é igual a zero porque os tecidos moles não resistem a nenhuma força transversal.",
      "E e G são grandezas inversamente proporcionais que se anulam mutuamente no sangue."
    ],
    "correctIndex": 0,
    "explanation": "Pela teoria da elasticidade clássica para materiais isotrópicos homogénios, a relação entre o Módulo de Young (E), o Módulo de Cisalhamento (G) e o Coeficiente de Poisson (ν) é dada pela equação fundamental: E = 2 · G · (1 + ν). Como a maioria dos tecidos moles biológicos hidratados (músculo, fígado, pele, cartilagem sob deformação rápida) é rica em água e comporta-se como praticamente incompressível em termos volumétricos, o seu coeficiente de Poisson aproxima-se do limite de 0,5 (ν ≈ 0,5). Substituindo na fórmula: E = 2 · G · (1 + 0,5) = 2 · G · 1,5 = 3 · G. Assim, E ≈ 3·G.",
    "distractorAnalysis": [
      "Está incorreta porque o módulo de cisalhamento é sempre uma fração do Módulo de Young (G = E / [2(1+ν)]), sendo matematicamente inferior a E.",
      "Está incorreta porque os tecidos moles oferecem resistência elástica finita e mensurável ao cisalhamento devido à sua matriz extracelular colagénica.",
      "Está incorreta porque ambos são módulos de rigidez elástica que aumentam juntos consoante o tecido seja mais denso e fibroso."
    ],
    "nursingApplication": "Na elastografia por ultrassons (técnica moderna para estadiamento de fibrose hepática ou nódulos mamários), a velocidade das ondas de cisalhamento permite ao clínico e ao enfermeiro quantificar o módulo de elasticidade G e E, detetando endurecimento tecidual patológico de forma não invasiva."
  },
  {
    "id": 2180,
    "topicId": 2,
    "question": "A cartilagem articular humana é submetida a elevadas pressões hidrostáticas durante a marcha e o salto. Que grandeza biofísica, denominada 'Módulo Volumétrico' (Bulk Modulus, K), traduz a resistência de um material à diminuição do seu volume sob uma pressão hidrostática uniforme (K = - ΔP / (ΔV/V₀))?",
    "options": [
      "A resistência à compressão volumétrica, que na cartilagem é extraordinariamente elevada devido ao seu alto conteúdo de água intersticial (~70-80%), tornando-a quase incompressível sob impactos rápidos.",
      "A velocidade de sedimentação eritrocitária das hemácias na cartilagem articular avascular.",
      "A capacidade da cartilagem gerar um campo de gravidade artificial para repelir o osso subcondral.",
      "A taxa de evaporação de líquido sinovial através dos poros da pele do joelho."
    ],
    "correctIndex": 0,
    "explanation": "O Módulo Volumétrico (Bulk Modulus, K) quantifica a resistência de uma substância a variações do seu volume quando submetida a uma pressão hidrostática omnidirecional: K = - ΔP / (ΔV/V₀). A água possui um módulo volumétrico altíssimo (~2,2 GPa), significando que é extremamente difícil comprimir o seu volume. Como a cartilagem articular saudável é constituída por cerca de 75-80% de água pressurizada no interior de uma malha densa de proteoglicanos carregados negativamente, sob impactos mecânicos súbitos (como a corrida), a água suporta instantaneamente mais de 90% da carga como pressão hidrostática, protegendo os condrócitos e o osso.",
    "distractorAnalysis": [
      "Está incorreta porque a velocidade de sedimentação é um teste hematológico em tubo de ensaio, não uma propriedade de compressão elástica de volume.",
      "Está incorreta porque os tecidos biológicos não geram forças gravitacionais ativas repulsoras.",
      "Está incorreta porque a cartilagem articular está contida hermeticamente dentro da cápsula articular selada pela membrana sinovial, sem qualquer evaporação para o exterior."
    ],
    "nursingApplication": "O enfermeiro ensina doentes com lesões articulares sobre a importância da hidratação sistémica e do movimento suave contínuo: a imobilização absoluta prolongada drena a água intersticial da cartilagem, diminuindo o seu módulo volumétrico e a sua tolerância mecânica à carga."
  },
  {
    "id": 2181,
    "topicId": 2,
    "question": "A aplicação de ligaduras elásticas compressivas em membros inferiores no tratamento de úlceras venosas é governada pela Lei de Laplace adaptada: P = (T · N · C) / (R · W), onde P é a pressão sub-ligadura, T a tensão de estiramento do tecido, N o número de camadas, R o raio de curvatura do membro e W a largura da faixa. De acordo com esta lei biofísica, em que região do membro a pressão exercida é naturalmente MAIOR para a mesma tensão de aplicação?",
    "options": [
      "No tornozelo, porque apresenta o menor raio de curvatura (R pequeno), fazendo com que a pressão seja inversamente proporcional a R (pressão mais elevada).",
      "Na coxa, porque o raio de curvatura é muito maior (R grande), amplificando a pressão de compressão.",
      "A pressão é exatamente igual em todos os pontos do membro, independentemente da anatomia óssea ou do perímetro da perna.",
      "Na planta do pé onde a ligadura não toca, por indução eletrostática à distância."
    ],
    "correctIndex": 0,
    "explanation": "Pela Lei de Laplace, a pressão transmitida por uma membrana curva é inversamente proporcional ao raio de curvatura da superfície: P ∝ 1/R. Uma superfície com raio pequeno (como o tornozelo ou a crista anterior da tíbia) concentra a tensão da ligadura numa curvatura apertada, gerando uma pressão de compressão sub-ligadura muito mais elevada. Pelo contrário, na coxa ou na barriga da perna, o raio R é muito maior, resultando numa pressão significativamente menor para a mesma força de estiramento da ligadura. Este princípio físico cria naturalmente um gradiente pressórico decrescente distal-proximal favorável ao retorno venoso.",
    "distractorAnalysis": [
      "Está incorreta porque quanto maior o raio R (como na coxa), menor é a pressão sub-ligadura (P ∝ 1/R).",
      "Está incorreta porque a pressão varia fortemente ao longo da perna em função das variações anatómicas do raio e das proeminências ósseas.",
      "Está incorreta porque a pressão é uma grandeza de contacto mecânico direto entre a faixa esticada e a superfície cutânea."
    ],
    "nursingApplication": "O enfermeiro aplica acolchoamento de algodão sob a ligadura sobre o tendão de Aquiles, crista da tíbia e maléolos (onde o raio R é minúsculo) para evitar picos de pressão excessivos que provocariam necrose cutânea por compressão iatrogénica."
  },
  {
    "id": 2182,
    "topicId": 2,
    "question": "Na insuflação do balão de retenção de um cateter vesical de Foley de duas vias, a Lei de Laplace para superfícies esféricas elásticas estabelece que a pressão intraluminal necessária para manter a curvatura é P = 2 · T / r, onde T é a tensão parietal da borracha e r o raio do balão. Por que motivo é estritamente proibido insuflar o balão com ar ou com soluções hipertónicas em vez de água destilada/estéril apirogénica?",
    "options": [
      "O ar é um gás altamente compressível que pode colapsar sob a pressão vesical ou sofrer microfuga por difusão através dos poros do silicone/látex fazendo o cateter exteriorizar-se, enquanto soluções hipertónicas podem cristalizar no microcanal de drenagem bloqueando a desinsuflação posterior.",
      "O ar anula o peso da bexiga, fazendo com que o doente sinta náuseas contínuas por alteração da gravidade pélvica.",
      "A água destilada dissipa correntes elétricas de 220 V que circulam habitualmente na urina humana.",
      "Qualquer líquido que não seja ar reage quimicamente com o látex convertendo-o em mercúrio tóxico."
    ],
    "correctIndex": 0,
    "explanation": "A biofísica dos elastómeros de silicone e látex mostra que os gases sofrem difusão transmembranar passiva ao longo de dias através da fina parede do balão; além disso, sendo o ar um fluido compressível (ao contrário dos líquidos praticamente incompressíveis), as variações de pressão vesical provocam flutuações de volume com perda precoce da retenção do cateter. Por outro lado, soluções cristaloides (como cloreto de sódio a 0,9% ou glicosadas) sofrem evaporação microscópica de água ou gradientes osmóticos com a urina, precipitando cristais de sal ou açúcar no lúmen capilar de insuflação, o que impede a futura aspiração e remoção atraumática do cateter pelo enfermeiro.",
    "distractorAnalysis": [
      "Está incorreta porque o cateter não altera a gravidade corporal nem o centro de massa vesical.",
      "Está incorreta porque a urina é um eletrólito biológico normal sem tensões perigosas de alta voltagem.",
      "Está incorreta porque a água estéril é quimicamente estável e inerte com o silicone e látex grau médico."
    ],
    "nursingApplication": "O enfermeiro insufla sempre o balão de Foley exclusivamente com água estéril e com o volume exato gravado na haste do cateter (ex: 10 mL), prevenindo exteriorizações acidentais dolorosas ou retenções mecânicas por bloqueio da válvula."
  },
  {
    "id": 2183,
    "topicId": 2,
    "question": "A pele humana senil perde grande parte da sua densidade de colagénio e elastina, exibindo acentuada perda de resiliência e comportamento viscoelástico degradado. Ao remover um penso com adesivo acrílico tradicional a alta velocidade (puxão rápido), que fenómeno biofísico da viscoelasticidade aumenta drasticamente o risco de provocar uma 'Skin Tear' (laceração cutânea traumática)?",
    "options": [
      "Os biomateriais viscoelásticos aumentam a sua rigidez aparente e tornam-se muito mais frágeis sob taxas de deformação elevadas (deformação rápida), concentrando a tensão na epiderme desidratada que fratura em vez de se esticar suavemente.",
      "A remoção rápida arrefece a pele a temperaturas criogénicas que congelam os queratinócitos.",
      "A velocidade rápida diminui a força de adesão para zero absoluto, impedindo qualquer lesão cutânea.",
      "O adesivo acrílico funde-se quimicamente com os ossos da bacia se for puxado com pressa."
    ],
    "correctIndex": 0,
    "explanation": "Os tecidos viscoelásticos (como a derme) são altamente dependentes da taxa de deformação (strain rate sensitivity): quando sujeitos a uma força rápida e brusca, as macromoléculas de elastina e colagénio não têm tempo para se desdobrar e reorganizar plasticamente; o tecido comporta-se como um sólido rígido e frágil com baixo alongamento à fratura, concentrando tensões de tração e cisalhamento na junção dermo-epidérmica atrófica, o que resulta no descolamento catastrófico da epiderme (skin tear). Quando a tração é muito lenta e paralela à pele, o tecido dissipa a energia por relaxação de tensões e descola sem rotura mecânica.",
    "distractorAnalysis": [
      "Está incorreta porque a remoção mecânica rápida de adesivos não gera arrefecimento criogénico na derme.",
      "Está incorreta porque puxar rapidamente aumenta a taxa de tensão e a força de cisalhamento transmitida às células basais da pele.",
      "Está incorreta porque os adesivos cirúrgicos atuam estritamente sobre as camadas superficiais da epiderme, sem qualquer penetração óssea."
    ],
    "nursingApplication": "Em doentes idosos ou polimedicados com corticóides, o enfermeiro utiliza pensos com adesivo de silicone suave e remove-os sempre lentamente, puxando o adesivo rente e paralelamente à superfície cutânea com apoio da pele adjacente (técnica de 'baixo ângulo e baixa velocidade') para proteger a integridade tecidual."
  },
  {
    "id": 2184,
    "topicId": 2,
    "question": "Na cirurgia vascular e plástica, os fios de sutura monofilamentares de polipropileno (Prolene) apresentam grande 'Memória Elástica' em comparação com fios de seda cirúrgica trançada. O que significa biofisicamente a memória elástica de um fio de sutura?",
    "options": [
      "A tendência do polímero de regressar espontaneamente à sua forma linear e rígida original de fabrico após ter sido enrolado ou dobrado para dar o nó cirúrgico, exigindo mais nós de segurança para evitar o afrouxamento.",
      "A capacidade do fio memorizar o nome do doente através de chips magnéticos embutidos no polímero.",
      "A perda total de toda a elasticidade do fio logo que entra em contacto com soro fisiológico.",
      "A degradação química completa do fio em dióxido de carbono no espaço de 10 segundos."
    ],
    "correctIndex": 0,
    "explanation": "A 'memória elástica' de um fio cirúrgico é a propriedade física que reflete a rigidez à flexão e a recuperação elástica do material: os fios com elevada memória elástica (como o polipropileno monofilamentar ou o nylon) tendem a desfazer a curvatura imposta pelo cirurgião e a voltar à sua conformação retilínea de embalagem. Como resultado, os laços do nó cirúrgico tendem a escorregar e a desatar-se espontaneamente por descompressão elástica, sendo obrigatório aplicar nós de cirurgião adicionais (tipicamente 5 a 6 contravoltas) para travar a sutura com segurança.",
    "distractorAnalysis": [
      "Está incorreta porque os fios cirúrgicos comuns são biomateriais poliméricos inertes passivos, sem microchips eletrónicos.",
      "Está incorreta porque os polímeros sintéticos mantêm as suas propriedades elásticas na presença de soluções aquosas normais.",
      "Está incorreta porque o polipropileno é um material permanente não-absorvível que persiste inalterado nos tecidos durante anos."
    ],
    "nursingApplication": "Ao preparar mesas cirúrgicas e inspecionar linhas de sutura de drenos ou acessos vasculares periféricos e centrais, o enfermeiro sabe que fios com alta memória exigem nós bem calibrados e contravoltas duplas para evitar exteriorizações acidentais de cateteres."
  },
  {
    "id": 2185,
    "topicId": 2,
    "question": "Os tubos endotraqueais modernos possuem balonetes (cuffs) concebidos segundo o princípio de 'Alto Volume e Baixa Pressão' (HVLP). Por que razão a pressão do cuff deve ser rotineiramente monitorizada pela equipa de enfermagem com manómetro calibrado para se manter rigorosamente na faixa de 20 a 30 cmH₂O (15 a 22 mmHg)?",
    "options": [
      "Pressões abaixo de 20 cmH₂O permitem microaspiração de secreções orofaríngeas (risco de Pneumonia Associada à Ventilação Mecânica), enquanto pressões acima de 30 cmH₂O ultrapassam a pressão de perfusão capilar da mucosa traqueal, causando isquemia, ulceração e futura estenose traqueal.",
      "Pressões acima de 30 cmH₂O arrefecem o oxigénio a temperaturas de congelamento no interior dos brônquios.",
      "A pressão de 20 cmH₂O serve unicamente para afinar a voz do doente caso este tente falar com o tubo colocado.",
      "Abaixo de 20 cmH₂O o cuff explode por depressão barométrica pulmonar instantânea."
    ],
    "correctIndex": 0,
    "explanation": "A microcirculação arterial da mucosa que reveste os anéis cartilagíneos traqueais possui uma pressão capilar de perfusão de cerca de 30 a 32 cmH₂O (~22 mmHg). Se a pressão mecânica de compressão exercida pela parede elástica do cuff do tubo endotraqueal exceder os 30 cmH₂O de forma contínua, o fluxo sanguíneo capilar é ocluído (isquemia isquémica por compressão), levando a necrose da mucosa, destruição da cartilagem traqueal e estenose cicatricial grave ou fístula traqueoesofágica. Por outro lado, se a pressão for inferior a 20 cmH₂O (~15 mmHg), o balonete não veda as vias aéreas adequadamente, surgindo fugas de volume corrente e aspiração silenciosa de secreções contaminadas para os pulmões.",
    "distractorAnalysis": [
      "Está incorreta porque a pressão mecânica estática do cuff não gera variações térmicas criogénicas no fluxo ventilatório.",
      "Está incorreta porque o doente com tubo endotraqueal translaringeal não consegue emitir voz porque as cordas vocais estão imobilizadas pelo tubo.",
      "Está incorreta porque pressões baixas significam menor tensão na parede elástica do cuff, com risco zero de explosão."
    ],
    "nursingApplication": "A monitorização da pressão do cuff com manómetro de pressão (cuffômetro) em cada turno é uma intervenção essencial de enfermagem nos cuidados intensivos, protegendo o doente contra lesões isquémicas traqueais e prevenindo infeções nosocomiais."
  },
  {
    "id": 2186,
    "topicId": 2,
    "question": "Um colchão de pressão alternada (APAM) para doentes de alto risco de úlceras de pressão opera através de células tubulares pneumáticas insufladas e desinsufladas ciclicamente por um compressor (ciclo de 10 a 15 minutos). Qual é o fundamento biofísico desta tecnologia na prevenção de necrose tecidual?",
    "options": [
      "Ao desinsuflar alternadamente células de ar sob determinadas regiões anatómicas, a pressão de interface cai temporariamente a zero, permitindo a reperfusão sanguínea dos capilares dérmicos antes que a anóxia celular atinja o limiar de morte tecidual irreversível.",
      "O compressor gera ondas de ultrassons que destroem as bactérias da pele sem necessidade de higiene.",
      "O ar alternado arrefece o doente a 15 °C para diminuir a circulação sanguínea na bacia.",
      "O sistema altera a composição química do ar hospitalar, convertendo o oxigénio em hélio no colchão."
    ],
    "correctIndex": 0,
    "explanation": "A isquemia tecidual sob proeminências ósseas é um processo dependente do binómio 'pressão versus tempo'. Mesmo que a pressão compressiva aplicada seja moderadamente elevada durante o ciclo de insuflação de uma célula do colchão, a subsequente desinsuflação dessa câmara (cerca de 5 a 7 minutos depois) anula a carga mecânica externa sobre essa área de pele. Isto permite a abertura imediata dos esfíncteres pré-capilares com hiperemia reativa (reperfusão sanguínea abundante), fornecendo oxigénio e glicose e lavando os ácidos metabólicos acumulados antes que ocorra necrose tecidual irreversível.",
    "distractorAnalysis": [
      "Está incorreta porque os colchões pneumáticos alternados operam por mecânica dos fluidos compressíveis de baixa pressão, sem emissão de ultrassons bactericidas.",
      "Está incorreta porque o ar dos colchões é mantido à temperatura ambiente ou corporal, sendo a hipotermia grave um risco a evitar estritamente.",
      "Está incorreta porque o compressor utiliza o ar ambiente normal sem transmutação gasosa para hélio."
    ],
    "nursingApplication": "O enfermeiro verifica regularmente se o compressor está regulado para o peso correto do doente e se as células estão a alternar ciclicamente: um colchão de ar descalibrado pode colapsar ('bottoming out') ou permanecer hiperinsuflado e rígido, anulando a prevenção biofísica de LPP."
  },
  {
    "id": 2187,
    "topicId": 2,
    "question": "Um colchão hospitalar estático de espuma viscoelástica termo-reativa ('Memory Foam') conforma-se ao contorno corporal do doente com o calor e a pressão sustentada. De que forma a relação biofísica fundamental da pressão (P = F / A) explica a sua eficácia preventiva nas Lesões por Pressão (LPP)?",
    "options": [
      "Ao moldar-se às curvaturas anatómicas do corpo, a área de superfície de contacto eficaz (A) aumenta significativamente; para o mesmo peso corporal (F), a pressão de interface (P) distribui-se de forma muito mais homogénea e os picos de pressão nas proeminências ósseas são reduzidos.",
      "O colchão anula 90% da massa do doente através de levitação térmica de convecção.",
      "A espuma reduz a área de contacto para focar o peso num único ponto sagrado, acelerando a circulação sanguínea.",
      "O material endurece instantaneamente tornando-se rígido como granito para impedir qualquer afundamento corporal."
    ],
    "correctIndex": 0,
    "explanation": "Pela fórmula P = F / A, a pressão exercida sobre os tecidos é inversamente proporcional à área de contacto para uma força constante (peso do doente, F = m·g). Num colchão convencional de espuma densa e rígida, apenas as proeminências ósseas (sacro, calcâneos, trocânteres) tocam no leito, resultando numa área de suporte muito pequena (A reduzido) e em picos de pressão focais superiores a 60-80 mmHg que causam isquemia tecidual rápida. A espuma viscoelástica amolece com a temperatura corporal e deforma-se lentamente por fluência, 'abraçando' o tronco, coxas e flancos; ao expandir a área de contacto (A maior), a pressão distribui-se homogeneamente e cai para níveis seguros (< 25-30 mmHg) em quase toda a superfície corporal.",
    "distractorAnalysis": [
      "Está incorreta porque o peso e a massa do doente continuam sujeitos à aceleração da gravidade sem qualquer levitação térmica.",
      "Está incorreta porque concentrar a carga numa área menor aumentaria a pressão a níveis extremos e causaria escaras graves imediatas.",
      "Está incorreta porque a espuma viscoelástica conforma-se e afunda suavemente com o calor, o oposto de endurecer como pedra."
    ],
    "nursingApplication": "O enfermeiro sabe que mesmo num colchão viscoelástico de alta especificação, doentes totalmente imóveis continuam a necessitar de reposicionamento regular, pois a redistribuição de pressão minimiza picos, mas não elimina a necessidade de reperfusão capilar periódica."
  },
  {
    "id": 2188,
    "topicId": 2,
    "question": "Os pensos hidrocoloides e hidrogéis utilizados no tratamento de feridas complexas são polímeros hidrofílicos que exibem propriedades reológicas específicas ao absorver exsudado. Qual é o comportamento mecânico característico de um hidrogel amorfo?",
    "options": [
      "Comporta-se como um biomaterial viscoelástico semi-sólido com capacidade de reter grande fração de água na sua rede polimérica tridimensional sem se dissolver, adaptando-se elasticamente ao leito irregular da ferida.",
      "Transforma-se num pó abrasivo seco e cortante que escarifica a ferida a cada batimento cardíaco.",
      "Solidifica numa placa cerâmica impermeável que necessita de broca cirúrgica para ser removida.",
      "Apresenta viscosidade infinita que impede qualquer difusão de moléculas de água ou enzimas de desbridamento autolítico."
    ],
    "correctIndex": 0,
    "explanation": "Os hidrogéis são redes tridimensionais de polímeros hidrofílicos (como carboximetilcelulose, alginato ou poliacrilatos) interligados por ligações cruzadas. Mecanicamente, exibem comportamento viscoelástico: têm consistência maleável e elástica que lhes permite conformar-se intimamente às cavidades anatómicas de feridas complexas, absorvendo exsudado ou doando humidade controlada a tecidos necróticos secos para favorecer o desbridamento autolítico sem perder a integridade estrutural coesiva.",
    "distractorAnalysis": [
      "Está incorreta porque os hidrogéis mantêm hidratação e ambiente húmido atraumático, nunca formando pós secos cortantes.",
      "Está incorreta porque o penso é facilmente irrigável e lavável com soro fisiológico a 0,9% sem danificar o tecido de granulação.",
      "Está incorreta porque a permeabilidade da matriz de hidrogel permite a difusão controlada de água, oxigénio e enzimas biológicas essenciais."
    ],
    "nursingApplication": "Ao aplicar hidrogel numa úlcera com necrose seca ou fibrina, o enfermeiro sabe que a reologia do gel mantém a humidade no leito tecidual durante dias sem escorrer para a pele perilesional sã, protegendo os bordos contra a maceração mecânica e química."
  },
  {
    "id": 2189,
    "topicId": 2,
    "question": "A parede das grandes artérias elásticas (como a aorta) exibe uma curva tensão-deformação característica em forma de 'J' (J-shaped curve). Em termos dos biomateriais estruturais da túnica média, como se explica esta transição mecânica entre baixas e altas pressões arteriais?",
    "options": [
      "A baixas pressões fisiológicas, a elastina (com Módulo de Young baixo ~1 MPa) domina a deformação e confere grande complacência elástica; a pressões elevadas, as fibras de colagénio (com Módulo de Young elevado ~1000 MPa) são recrutadas e retificadas, tornando a parede muito rígida para proteger o vaso contra a rotura por dilatação aneurismática.",
      "A aorta é formada exclusivamente por filamentos de vidro que quebram com pressões superiores a 80 mmHg.",
      "As fibras de colagénio esticam a baixas pressões e a elastina só atua quando a pressão arterial ultrapassa os 300 mmHg.",
      "A artéria não possui qualquer resposta elástica, mantendo um diâmetro rígido fixo idêntico a um tubo de ferro fundido."
    ],
    "correctIndex": 0,
    "explanation": "A curva em forma de 'J' das artérias traduz a cooperação biomecânica bifásica entre dois biomateriais com propriedades mecânicas muito contrastantes na matriz extracelular da túnica média: a elastina (muito extensível, com baixo Módulo de Young E ≈ 0,5 a 1 MPa) e o colagénio (muito resistente e rígido, com E ≈ 1000 MPa). A pressões normais (diastólica e sistólica ~80-120 mmHg), a parede é dominada pela elastina, amortecendo a ejeção cardíaca com grande distensibilidade elástica (efeito Windkessel). Se a pressão arterial subir perigosamente, as fibras de colagénio retificam-se e assumem a carga: a parede torna-se bruscamente muito mais rígida (o declive da curva tensão-deformação sobe verticalmente), impedindo a sobredistensão e protegendo a artéria da dissecção ou rutura.",
    "distractorAnalysis": [
      "Está incorreta porque a aorta humana é um biomaterial orgânico altamente elástico e tolerante a sobrecargas fisiológicas contínuas.",
      "Está incorreta porque a elastina é a primeira a esticar (menor módulo de Young); o colagénio é recrutado apenas no final como travão de segurança tensional.",
      "Está incorreta porque se a aorta fosse rígida como ferro, não haveria efeito Windkessel e a circulação tecidual periférica cessaria na diástole."
    ],
    "nursingApplication": "Compreender a curva em 'J' permite ao enfermeiro reconhecer o perigo de crises hipertensivas súbitas: pressões extremas empurram o vaso para o limite da sua zona de proteção colagénica, aumentando a pós-carga cardíaca e o risco de rotura de aneurismas prévios."
  },
  {
    "id": 2190,
    "topicId": 2,
    "question": "Com o envelhecimento fisiológico e a arteriosclerose, a aorta humana perde fibras de elastina funcionais por fadiga mecânica cíclica ao longo de décadas e acumula colagénio rígido e calcificações na parede. Qual é a consequência biofísica direta na 'Velocidade da Onda de Pulso' (VOP / PWV) e na pressão arterial do idoso?",
    "options": [
      "O Módulo de Young da parede aórtica aumenta (artéria mais rígida), fazendo com que a Velocidade da Onda de Pulso aumente significativamente (pela equação de Moens-Korteweg), antecipando a onda de reflexão sistólica e aumentando a Pressão Arterial Sistólica e a Pressão de Pulso no idoso.",
      "A velocidade da onda de pulso cai para zero e o sangue arterial deixa de circular no corpo humano.",
      "A aorta torna-se infinitamente complacente como um balão de látex fino, diminuindo a pressão sistólica para 40 mmHg.",
      "A rigidez arterial faz com que a pressão diastólica suba obrigatoriamente para valores superiores a 150 mmHg em todos os idosos."
    ],
    "correctIndex": 0,
    "explanation": "A equação biofísica de Moens-Korteweg estabelece que a velocidade de propagação da onda de pulso é proporcional à raiz quadrada do Módulo de Young da parede arterial: VOP = √((E · h) / (2 · r · ρ)), onde E é o módulo elástico, h a espessura da parede, r o raio e ρ a densidade do sangue. Quando a aorta envelhece e enrijece (E aumenta), a VOP sobe de ~5 m/s num jovem para mais de 10-14 m/s num idoso. A onda de pressão refletida nas bifurcações arteriais periféricas regressa à aorta precocemente durante a sístole (em vez da diástole), somando-se à onda incidente e gerando o padrão clássico de Hipertensão Sistólica Isolada do idoso com alargamento da pressão de pulso (PAS muito elevada com PAD normal ou baixa).",
    "distractorAnalysis": [
      "Está incorreta porque a rigidez arterial acelera a propagação da onda mecânica de pulso, nunca a anulando a zero.",
      "Está incorreta porque o envelhecimento reduz a complacência elástica (artérias tornam-se mais duras, não mais elásticas como látex).",
      "Está incorreta porque na hipertensão sistólica do idoso a pressão diastólica tende frequentemente a descer ou manter-se normal por perda de retração elástica na diástole."
    ],
    "nursingApplication": "O enfermeiro monitoriza a Pressão de Pulso (diferença entre sistólica e diastólica) nos doentes geriátricos como um biomarcador clínico prático da rigidez arterial e do risco cardiovascular, adaptando o controlo tensional e a prevenção de hipotensão ortostática."
  },
  {
    "id": 2191,
    "topicId": 2,
    "question": "Na manobra de desobstrução de via aérea conhecida como 'Subluxação da Mandíbula' (Jaw-Thrust maneuver), indicada em doentes com suspeita de traumatismo vertebro-medular cervical, o enfermeiro apoia os dedos indicadores e médios nos ângulos da mandíbula e traciona a mandíbula para a frente e para cima. Como se classifica esta alavanca articular e qual a sua finalidade biomecânica?",
    "options": [
      "Alavanca de 3.ª classe com fulcro nas fossas mandibulares do osso temporal (ATM), onde a força potente aplicada no ângulo mandibular desloca a base da língua anteriormente sem necessitar de fletir nem estender a coluna cervical.",
      "Alavanca de 1.ª classe com o fulcro posicionado na cartilagem tiroideia que esmaga as cordas vocais para abrir a glote.",
      "Alavanca de 2.ª classe que roda os dentes incisivos em torno do nariz para fechar as narinas com força compressiva.",
      "Manobra puramente passiva que utiliza sucção magnética para desobstruir a laringe sem aplicação de força manual externa."
    ],
    "correctIndex": 0,
    "explanation": "Na manobra de subluxação da mandíbula (Jaw-thrust), o fulcro anatómico situa-se nas articulações temporomandibulares (ATM); a força manual potente do enfermeiro é aplicada bilateralmente nos ângulos mandibulares posteriores; a resistência mecânica é o peso da mandíbula e a tensão dos tecidos moles do pavimento da boca e língua. A tração anterior do arco mandibular traciona o músculo genioglosso e o osso hioide, afastando a base da língua da parede posterior da faringe. Como não exige hiperextensão do pescoço, é a técnica de eleição para manter a via aérea aberta sem movimentar o segmento ósseo instável da coluna cervical traumatizada.",
    "distractorAnalysis": [
      "Está incorreta porque a cartilagem tiroideia nunca é utilizada como fulcro de alavanca, o que causaria fratura laríngea e asfixia imediata.",
      "Está incorreta porque o objetivo da manobra é anteriorizar a mandíbula para desobstrução respiratória e não rodar os dentes contra a face.",
      "Está incorreta porque a manobra exige força manual vetorial precisa e contínua do profissional de emergência para superar o tónus dos tecidos relaxados."
    ],
    "nursingApplication": "O enfermeiro de emergência e cuidados intensivos treina a subluxação mandibular como procedimento de suporte avançado de vida em vítimas de politraumatismo, assegurando a oxigenação urgente com estabilização bimanual da coluna cervical alinhada."
  },
  {
    "id": 2192,
    "topicId": 2,
    "question": "Os afastadores cirúrgicos autoestáticos (como o afastador de Weitlaner ou Gelpi), utilizados para expor planos anatómicos em cirurgias ortopédicas ou abdominais, dispõem de hastes com dentes articuladas por um fulcro e travadas por uma cremalheira curva com mola. Que princípio biofísico de equilíbrio estático da mecânica fundamenta o seu funcionamento?",
    "options": [
      "A cremalheira mecânica bloqueia o recuo elástico das hastes aplicando uma reação normal que neutraliza o momento resistente dos tecidos retraídos, mantendo a condição de equilíbrio estático (Στ = 0) sem necessidade de esforço contínuo do enfermeiro ou cirurgião.",
      "O instrumento funciona como um dínamo elétrico que converte o calor do sangue em força cinética perpétua de abertura.",
      "O afastador cancela a inércia dos músculos através de campos gravitacionais locais no campo operatório.",
      "O instrumento atua exclusivamente como uma roldana móvel que duplica o peso corporal do doente na mesa cirúrgica."
    ],
    "correctIndex": 0,
    "explanation": "Quando as lâminas do afastador de Weitlaner empurram os bordos musculares e fasciais da incisão cirúrgica, os tecidos biológicos elásticos esticados exercem uma força de retração oposta (reação elástica resistente) que tende a fechar o instrumento. Ao travar a cremalheira num determinado dente com mola, o mecanismo metálico rígido fornece uma força de bloqueio oposta que anula o torque de retorno elástico dos tecidos. Desta forma, a soma vetorial dos momentos de força em torno do fulcro é estritamente zero (Στ = 0), mantendo a ferida aberta em equilíbrio estático estável e libertando as mãos da equipa cirúrgica.",
    "distractorAnalysis": [
      "Está incorreta porque o afastador autoestático é um dispositivo estritamente mecânico de alavanca passiva com bloqueio por dentes, sem geradores elétricos.",
      "Está incorreta porque o afastador opera segundo as leis da estática de Newton, sem qualquer alteração de campos gravitacionais.",
      "Está incorreta porque não utiliza cabos nem roldanas, operando através de barras rígidas de alavanca articulada."
    ],
    "nursingApplication": "O enfermeiro instrumentista verifica a calibração da mola e a ausência de folgas nos dentes da cremalheira: uma cremalheira com dentes gastos pode ceder subitamente sob a tensão dos tecidos retraídos, desestabilizando o campo cirúrgico e podendo traumatizar estruturas adjacentes."
  },
  {
    "id": 2193,
    "topicId": 2,
    "question": "Na seleção de ligas metálicas para a cabeça femoral de próteses articulares de suporte de carga, as ligas de Cobalto-Crómio-Molibdénio (Co-Cr-Mo) são frequentemente escolhidas em vez do titânio para a superfície articular devido à sua 'Dureza Superficial' superior (escala Vickers). Por que motivo é a dureza mecânica um parâmetro crítico na interface de desgaste com o polietileno (UHMWPE)?",
    "options": [
      "A maior dureza superficial confere elevada resistência a riscos e arranhões microscópicos causados por partículas de osso ou cimento (terceiro corpo); uma superfície perfeitamente lisa e polida minimiza a taxa de desgaste abrasivo do inserto polimérico ao longo dos anos.",
      "A dureza elevada faz com que a cabeça da prótese amoleça e se torne líquida para lubrificar a anca a 37 °C.",
      "Quanto mais dura for a liga metálica, maior é a sua capacidade de absorver água intersticial como uma esponja hidrófila.",
      "A dureza superficial anula o coeficiente de atrito cinético, garantindo que o atrito articular seja matematicamente zero."
    ],
    "correctIndex": 0,
    "explanation": "A dureza mede a resistência de um material à deformação plástica localizada na superfície (como indentação, riscos e abrasão). Embora o titânio tenha excelente biocompatibilidade e módulo elástico favorável na haste femoral, ele possui baixa dureza superficial e risca-se facilmente na presença de microfragmentos de cimento ósseo ou hidroxiapatite (desgaste por terceiro corpo). Se uma cabeça articular metálica ficar riscada, as suas arestas microscópicas atuam como uma lima contra o polietileno (UHMWPE), acelerando o desgaste abrasivo e libertando milhões de micropartículas poliméricas que desencadeiam osteólise macrofágica e descolamento precoce da prótese. A liga de Co-Cr-Mo (ou cerâmicas) é muito mais dura e preserva o polimento especular espelhado durante décadas.",
    "distractorAnalysis": [
      "Está incorreta porque os metais cirúrgicos mantêm a sua estrutura sólida cristalina a temperaturas corporais normais ou febris.",
      "Está incorreta porque as ligas metálicas são impermeáveis e não absorvem água líquida.",
      "Está incorreta porque o coeficiente de atrito cinético de superfícies articulares artificiais é sempre superior a zero (típico de 0,05 a 0,10 entre metal e UHMWPE)."
    ],
    "nursingApplication": "O enfermeiro instrumentista manipula as cabeças femorais com extremo cuidado e exclusivamente com pinças de ponta protegida por teflon/silicone antes do encaixe: qualquer arranhão acidental de contacto com outro instrumento de aço acelera o desgaste futuro do polietileno no doente."
  },
  {
    "id": 2194,
    "topicId": 2,
    "question": "O líquido sinovial que preenche e lubrifica as articulações diartrodiais saudáveis (como o joelho) é um fluido biológico 'Não-Newtoniano Pseudoplástico e Tixotrópico' rico em ácido hialurónico e lubricina. Como se traduz esta propriedade reológica única na proteção articular durante o repouso versus a corrida?",
    "options": [
      "Em repouso ou a velocidades de movimento lentas (baixas taxas de cisalhamento), o líquido é viscoso e elástico como um gel, sustentando o peso corporal e amortecendo pressões; durante movimentos rápidos e intensos como a corrida (altas taxas de cisalhamento), a sua viscosidade diminui drasticamente, facilitando o deslizamento articular com mínimo atrito.",
      "O líquido sinovial mantém rigorosamente a mesma viscosidade constante sob qualquer velocidade de movimento como se fosse água pura.",
      "Sob movimento rápido o líquido sinovial evapora instantaneamente criando uma almofada de vapor a 100 °C dentro da cápsula articular.",
      "Em repouso o líquido solidifica num bloco cristalino frágil que fratura a cápsula articular ao primeiro passo da manhã."
    ],
    "correctIndex": 0,
    "explanation": "Um fluido pseudoplástico (shear-thinning) caracteriza-se por uma viscosidade aparente que diminui à medida que a taxa de deformação ou velocidade de cisalhamento (shear rate) aumenta. Nas articulações humanas, as longas cadeias enroladas de hialuronano e glicoproteínas oferecem grande resistência mecânica ao escoamento em repouso e a baixas velocidades, atuando como um gel viscoelástico absorvente de choque hidrostático. Quando a articulação se move rapidamente (como na corrida ou salto), as forças de corte orientam as cadeias moleculares paralelamente à direção do fluxo; a viscosidade aparente cai em várias ordens de grandeza, permitindo um deslizamento articular suave com baixíssimo coeficiente de atrito e mínima dissipação térmica de energia.",
    "distractorAnalysis": [
      "Está incorreta porque fluidos com viscosidade constante independente da taxa de cisalhamento são designados 'fluidos Newtonianos' (como a água pura ou soros aquosos), o que não se aplica ao líquido sinovial.",
      "Está incorreta porque o fluido sinovial permanece sempre em fase líquida viscoelástica à temperatura corporal fisiológica.",
      "Está incorreta porque o líquido sinovial nunca solidifica em cristais sólidos no organismo saudável."
    ],
    "nursingApplication": "Na artrocentese ou administração intra-articular de ácido hialurónico (viscossuplementação) pelo médico/enfermeiro especialista em reumatologia, o objetivo é precisamente restaurar estas propriedades reológicas pseudoplásticas e viscoelásticas perdidas na osteoartrose."
  },
  {
    "id": 2195,
    "topicId": 2,
    "question": "Na transferência lateral de um doente acamado da cama para a maca de transporte, os profissionais de enfermagem utilizam frequentemente uma 'Prancha de Transferência Deslizante' (Roller Board ou prancha plástica de baixo atrito) em vez de puxar diretamente o doente sobre o lençol. Que princípio biofísico da mecânica do atrito fundamenta a redução drástica da força exigida à equipa?",
    "options": [
      "A prancha reduz substancialmente o Coeficiente de Atrito Cinético (μ_k) entre as superfícies de contacto; como a Força de Atrito é F_atrito = μ_k · N (onde N é a força normal devida ao peso do doente), diminuir o coeficiente reduz diretamente a força de tração necessária para mover o doente.",
      "A prancha atua anulando 100% da massa corporal do doente durante a passagem através da maca.",
      "A prancha gera uma força de propulsão eletromagnética que atira o doente autonomamente para o outro leito.",
      "A prancha transforma a força de atrito numa força gravitacional dirigida para o teto da enfermaria."
    ],
    "correctIndex": 0,
    "explanation": "A força de atrito cinético que se opõe ao deslizamento de um corpo é governada pela lei de Amontons-Coulomb: F_atrito = μ_k · N, onde μ_k é o coeficiente de atrito cinético entre os materiais e N é a força normal de compressão (igual ao peso do doente numa superfície horizontal, N = m·g). O atrito direto tecido-tecido entre lençóis hospitalares de algodão tem um coeficiente μ_k elevado (~0,4 a 0,6), exigindo forças de tração superiores a 300-400 N para mover um doente de 80 kg. As pranchas plásticas especializadas com revestimento de polietileno de baixo atrito ou roletes rotativos reduzem o coeficiente μ_k para menos de 0,1 a 0,15, diminuindo a força de tração muscular necessária em mais de 60-70% e protegendo a coluna dos enfermeiros.",
    "distractorAnalysis": [
      "Está incorreta porque a massa e o peso do doente continuam rigorosamente os mesmos (a força normal N não se anula).",
      "Está incorreta porque as pranchas deslizantes são dispositivos puramente mecânicos passivos desprovidos de motores ou magnetos.",
      "Está incorreta porque o atrito atua sempre no plano tangencial paralelamente às superfícies de contacto e opõe-se ao movimento relativo, não apontando para cima."
    ],
    "nursingApplication": "A utilização sistemática de auxiliares mecânicos de baixo atrito (pranchas deslizantes e lençóis de transferência tubular de náilon) é uma norma fundamental de saúde ocupacional em enfermagem, prevenindo lesões da coluna lombar nos profissionais e evitando forças de cisalhamento na pele do doente."
  },
  {
    "id": 2196,
    "topicId": 2,
    "question": "Na entubação nasogástrica para nutrição entérica prolongada, utilizam-se sondas finas (calibre 8 a 10 Fr) fabricadas em poliuretano flexível com um 'Fio-Guia' (mandril metálico ou estilete de aço). Qual é a justificação biofísica da mecânica dos materiais para o uso do estilete metálico durante a inserção e a sua obrigatoriedade de remoção após a colocação?",
    "options": [
      "O poliuretano é extremamente maleável e possui baixa rigidez à flexão; o fio-guia de aço fornece temporariamente a rigidez axial e a resistência à flexão necessárias para empurrar a sonda através da orofaringe sem que esta dobre ou enrole na boca; após a colocação correta, o estilete é removido para que a sonda recupere a sua flexibilidade atraumática.",
      "O fio-guia serve unicamente para conduzir eletricidade estática do estômago para o exterior da narina.",
      "A sonda de poliuretano dissolve-se espontaneamente caso o fio metálico permaneça no seu interior por mais de 5 minutos.",
      "O estilete deve ser deixado permanentemente dentro da sonda durante toda a alimentação para manter a fórmula alimentar morna."
    ],
    "correctIndex": 0,
    "explanation": "A rigidez à flexão de um tubo cilíndrico depende do Módulo de Young (E) do material e do seu momento de inércia de área (I): Rigidez = E · I. As sondas entéricas de poliuretano de pequeno calibre (8-10 Fr) têm paredes muito finas e baixo módulo elástico para garantir o conforto do doente e prevenir necrose das asas do nariz e esofagite por decúbito. Contudo, essa extrema maleabilidade faz com que a sonda sofra encurvamento e colapso por flambagem (buckling) sob qualquer resistência suave na faringe. O fio-guia de aço inoxidável possui um Módulo de Young cerca de 70 a 100 vezes superior ao do poliuretano (~200 GPa vs ~2 GPa), conferindo a rigidez longitudinal indispensável para direcionar a ponta atraumática até ao estômago. Uma vez no estômago e confirmada a posição por radiografia/pH, o estilete tem de ser retirado para devolver à sonda a sua segurança biológica flexível.",
    "distractorAnalysis": [
      "Está incorreta porque as sondas nasogástricas não conduzem cargas elétricas nem têm finalidade eletrostática.",
      "Está incorreta porque o poliuretano médico é quimicamente inerte e estável em contacto com aço inoxidável e secreções digestivas.",
      "Está incorreta porque deixar o fio-guia durante a alimentação causaria obstrução do lúmen, perfuração esofágica por rigidez e impossibilitaria a perfusão de dieta entérica."
    ],
    "nursingApplication": "O enfermeiro nunca deve reintroduzir o fio-guia metálico com a sonda já colocada no doente: se a sonda tiver dobrado ou saído parcialmente, a ponta rígida do estilete pode perfurar a parede lateral da sonda e causar uma laceração ou perfuração esofágica/brônquica fatal."
  },
  {
    "id": 2197,
    "topicId": 2,
    "question": "Nas próteses externas modernas de membros inferiores para doentes amputados (como próteses transtibiais de corrida ou marcha rápida), a lâmina elástica do pé protético é habitualmente fabricada em material compósito de 'Fibra de Carbono reforçada com resina epóxi' (CFRP). Que propriedades mecânicas combinadas tornam este compósito superior ao aço ou madeira?",
    "options": [
      "Excepcional relação rigidez/peso (elevado Módulo de Young específico), alta resistência à fadiga cíclica e grande capacidade de devolução de energia elástica (alta resiliência com baixa histerese).",
      "É um material líquido inflamável que se expande por combustão espontânea a cada passo do doente.",
      "Comporta-se como um imã supercondutor que repele o solo por levitação magnética gravitacional.",
      "Apresenta rigidez estritamente nula, dobrando-se como papel fino sem conseguir suster qualquer fração do peso corporal."
    ],
    "correctIndex": 0,
    "explanation": "Os materiais compósitos de fibra de carbono combinam filamentos de carbono com elevadíssima resistência à tração e rigidez (alinhados na direção das linhas de carga) embebidos numa matriz de resina polimérica. Esta estrutura anisotrópica proporciona um Módulo de Young e uma resistência mecânica comparáveis ou superiores aos dos melhores aços cirúrgicos, mas com uma densidade cerca de quatro a cinco vezes menor (peso muito reduzido). Além disso, a fibra de carbono apresenta excelente resistência à fadiga mecânica após milhões de ciclos de impacto e comporta-se como uma mola de alta resiliência (com baixíssima perda de energia por histerese), absorvendo a energia cinética da descida do calcanhar e devolvendo-a elasticamente como impulso na fase de descolamento dos dedos na marcha.",
    "distractorAnalysis": [
      "Está incorreta porque os compósitos de fibra de carbono polimerizados são biomateriais sólidos estruturais estáveis e seguros, totalmente não-inflamáveis em uso clínico.",
      "Está incorreta porque o pé protético opera por mecânica newtoniana de contacto elástico e atrito com o solo, sem levitação supercondutora.",
      "Está incorreta porque a lâmina de carbono suporta forças de impacto de mais de 2000 a 3000 N na corrida sem quebra estrutural."
    ],
    "nursingApplication": "Ao promover o treino de marcha com prótese no doente amputado, o enfermeiro ensina o doente a confiar na flexão elástica da lâmina de carbono, aproveitando a devolução biomecânica de energia para poupar o consumo metabólico de oxigénio na locomoção."
  },
  {
    "id": 2198,
    "topicId": 2,
    "question": "Na drenagem torácica fechada com aspiração ativa contínua (ex: sistema de três câmaras ligado a vácuo hospitalar com pressão negativa de -15 a -20 cmH₂O), o tubo do dreno deve possuir uma geometria e módulo elástico calibrados para não sofrer 'Colapso por Pressão Negativa Transmural'. O que dita biofisicamente a resistência de um tubo flexível ao colapso mecânico sob vácuo externo?",
    "options": [
      "A espessura da parede do tubo em relação ao seu raio interno e o Módulo de Young do material; um tubo com parede suficientemente espessa e módulo adequado resiste à pressão transmural sem que o seu lúmen oclua sob sucção.",
      "A cor da linha radiopaca pintada na superfície externa do cateter torácico.",
      "A quantidade de glóbulos brancos presentes no líquido de drenagem sero-hemático.",
      "A temperatura ambiente da sala de recobro onde o doente se encontra deitado."
    ],
    "correctIndex": 0,
    "explanation": "A pressão crítica de colapso (buckling) de uma tubuladura cilíndrica sob gradiente de pressão transmural externa/interna é governada pela teoria da estabilidade elástica: a resistência ao colapso é diretamente proporcional ao Módulo de Young (E) do elastómero (silicone de grau médico com dureza Shore adequada) e proporcional ao cubo da razão entre a espessura da parede (h) e o raio (r) do tubo: P_crítico ∝ E · (h/r)³. Se a parede de um dreno torácico for demasiado fina ou maleável, a pressão negativa intrapleural e de aspiração colapsa as paredes do tubo, bloqueando a luz do cateter e impedindo a evacuação de ar ou sangue, o que pode culminar num pneumotórax hipertensivo fatal.",
    "distractorAnalysis": [
      "Está incorreta porque a linha radiopaca tem apenas finalidade de visualização em radiografia de tórax, não alterando a rigidez estrutural ao colapso.",
      "Está incorreta porque a resistência mecânica do tubo é uma propriedade intrínseca da parede do polímero, independente da contagem celular do fluido drenado.",
      "Está incorreta porque variações térmicas ambientes normais têm efeito negligenciável na rigidez da parede de silicone vulcanizado."
    ],
    "nursingApplication": "O enfermeiro monitoriza visualmente todo o trajeto do sistema de drenagem torácica para assegurar que não existem acotovelamentos, colapsos de parede ou pinçamentos acidentais da tubuladura, mantendo a descompressão torácica contínua e segura."
  },
  {
    "id": 2199,
    "topicId": 2,
    "question": "No pós-operatório de cirurgia ortopédica dos membros com risco elevado de edema tecidual volumoso, o enfermeiro aplica pensos compressivos utilizando fitas cirúrgicas de 'Microespuma Elástica' (Microfoam) com capacidade de alongamento multidirecional. Qual é o benefício biofísico deste biomaterial elástico comparativamente a fitas adesivas rígidas de papel ou seda?",
    "options": [
      "A fita de microespuma possui baixo Módulo de Young e elevada complacência elástica bidirecional, expandindo-se suavemente à medida que o membro edemacia; isto evita o desenvolvimento de tensões extremas de cisalhamento dérmico na interface adesivo-pele, prevenindo a formação de flictenas (bolhas de tração epiteliais).",
      "A microespuma atua gerando vácuo absoluto que impede qualquer formação de edema biológico inflamatório.",
      "A fita de espuma queima a pele por libertação de ácido clorídrico esterilizante controlado.",
      "O material é indeformável e aplica uma compressão de 300 mmHg que bloqueia totalmente a circulação arterial do membro operado."
    ],
    "correctIndex": 0,
    "explanation": "Quando um membro operado desenvolve edema pós-cirúrgico, o seu perímetro e volume aumentam progressivamente. Se o penso estiver fixado com fita adesiva inelástica rígida (alto Módulo de Young, como adesivo de tecido de seda ou papel convencional), a expansão dos tecidos estica a pele contra a fita que não cede; na borda do adesivo desenvolve-se uma enorme concentração de tensão de cisalhamento tangencial (shear stress) que separa a epiderme da derme, originando bolhas de tensão traumáticas (flictenas por tração / tape blisters) e risco de infeção. As fitas de microespuma elástica de célula fechada esticam elasticamente em todas as direções acompanhando o aumento do raio do membro com tensão suave e controlada, dissipando as forças de cisalhamento.",
    "distractorAnalysis": [
      "Está incorreta porque o edema é uma resposta fisiológica vascular e osmótica normal que nenhum adesivo estático consegue anular.",
      "Está incorreta porque os adesivos de microespuma hospitalares são biocompatíveis, hipoalergénicos e isentos de ácidos tóxicos.",
      "Está incorreta porque pressões de 300 mmHg ocluiriam todo o fluxo arterial provocando isquemia aguda do membro, sendo clinicamente inaceitáveis."
    ],
    "nursingApplication": "Ao fixar pensos pós-operatórios sobre articulações ou áreas suscetíveis a edema, o enfermeiro aplica a fita elástica de microespuma sem estirar excessivamente durante a colagem ('aplicação sem tensão prévia'), permitindo que a reserva elástica do material acomode o edema subsequente do doente sem lesões cutâneas."
  },
  {
    "id": 2200,
    "topicId": 2,
    "question": "Um carrinho elevador elétrico de transferência de doentes (guindaste hospitalar) utiliza um atuador linear elétrico ou pistão hidráulico ligado a um braço mecânico de aço longo articulado na coluna vertical de suporte. Como se explica a Vantagem Mecânica (VM) deste dispositivo que permite a um único profissional de enfermagem erguer com segurança e suavidade um doente bariátrico de 150 kg (~1470 N)?",
    "options": [
      "O sistema atua como uma alavanca mecânica combinada com uma prensa hidráulica/atuador mecânico de parafuso sem-fim com elevadíssima Vantagem Mecânica (VM = F_saída / F_entrada >> 1), onde uma força motriz relativamente pequena do motor/pistão aplicada com pequeno deslocamento gera um momento de força massivo capaz de elevar e equilibrar grandes cargas na tela de suspensão.",
      "O guindaste opera por equilíbrio de planos inclinados passivos onde o atrito estático da tela dissipa a totalidade do peso do doente.",
      "O doente perde 99% da sua massa assim que é acomodado na tela de tecido de poliéster do guindaste.",
      "O sistema funciona como uma alavanca de 3.ª classe com desvantagem mecânica severa que exige que o enfermeiro puxe a tela com força equivalente a 5000 N."
    ],
    "correctIndex": 0,
    "explanation": "Os elevadores mecânicos de doentes combinam princípios fundamentais da mecânica das alavancas e da transmissão de potência fluídica ou eletromecânica. O braço de elevação é uma barra rígida de aço articulada num ponto de rotação (fulcro); o pistão ou atuador linear acoplado ao motor elétrico aplica uma força de entrada potente de grande magnitude com avanço milimétrico controlado num ponto do braço, gerando um momento de força angular que ergue a extremidade livre onde a tela com o doente está suspensa. A Vantagem Mecânica global do sistema (relação entre a força de elevação da carga e a força despendida pelo operador ou bateria) é muito superior a 1, permitindo a transferência controlada de doentes pesados com risco mecânico zero para a musculatura lombar da equipa de saúde.",
    "distractorAnalysis": [
      "Está incorreta porque o plano inclinado e o atrito não anulam a força peso (P = m·g), sendo a carga sustentada pelo braço de aço e pelo mecanismo hidráulico.",
      "Está incorreta porque a massa do doente é invariante e o peso (F = m·g) mantém-se integralmente.",
      "Está incorreta porque os guindastes hospitalares são desenhados para proteger o trabalhador, dispensando esforços físicos manuais pesados."
    ],
    "nursingApplication": "O uso de guindastes mecânicos para doentes dependentes é uma competência essencial de enfermagem ergonómica: o profissional deve sempre verificar a estabilidade da base aberta das rodas e o correto engate das tiras da tela antes de iniciar a elevação biomecânica."
  }
];
