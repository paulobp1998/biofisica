/**
 * Tópico 2: Alavancas, Elasticidade dos Corpos e Resistência dos Materiais
 * 200 Questões Clínicas Rigorosas para o 1.º Ano de Enfermagem (IDs 2001 a 2200)
 */

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
      "Opção B confunde momento com a fórmula da pressão ou gradiente de força; dividir força pela distância não tem significado físico de torque.",
      "Opção C introduz incorretamente uma dependência quadrática na distância (d²), o que violaria a linearidade do momento.",
      "Opção D utiliza incorretamente a aceleração e a função cosseno, quando o torque é maximizado quando a força é perpendicular (θ = 90°, sen(90°) = 1)."
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
      "Opção B descreve um movimento retilíneo uniforme ou equilíbrio dinâmico, mas ignora o requisito estático e a condição de momentos nulos.",
      "Opção C é errada porque um par de forças de igual intensidade e sentidos opostos (binário) tem resultante de forças nula, mas produz rotação pura (torque não-nulo).",
      "Opção D indica aceleração angular não-nula, o que causaria rotação acelerada contínua, impossibilitando o equilíbrio estático."
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
      "Opção B confunde vantagem mecânica com rendimento metabólico muscular.",
      "Opção C inverte a fração geométrica; d_R / d_P corresponderia ao inverso da vantagem mecânica.",
      "Opção D inventa uma relação entre acelerações sem qualquer fundamento físico no estudo de alavancas estáticas."
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
      "Opção B descreve uma alavanca de 2.ª classe (inter-resistente).",
      "Opção C descreve uma alavanca de 3.ª classe (interpotente).",
      "Opção D é um absurdo físico, pois qualquer alavanca em equilíbrio requer forças motora e resistente para estabelecer equilíbrio de momentos."
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
      "Opção B descreve uma alavanca de 3.ª classe (o bicípite insere-se entre o cotovelo e a mão).",
      "Opção C descreve uma alavanca de 2.ª classe (a resistência do peso corporal cai entre as cabeças dos metatarsos e o tendão de Aquiles).",
      "Opção D funciona mecanicamente como uma alavanca de 3.ª classe modificada (o masséter insere-se à frente do côndilo mandibular e atrás dos dentes incisivos/molares anteriores)."
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
      "Opção B descreve a característica incontornável das alavancas de 3.ª classe (onde d_P < d_R).",
      "Opção C só ocorreria se a potência e a resistência coincidissem no mesmo ponto sobre a alavanca.",
      "Opção D viola o princípio de conservação de energia e a definição elementar de vantagem mecânica."
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
      "Opção B confunde a localização da tíbia com um fulcro fixo; no movimento de pontas dos pés o fulcro real com o solo está na base dos dedos.",
      "Opção C refere o músculo tibial anterior, que é extensor/dorsiflexor do pé (não atua na elevação na ponta dos pés) e organiza uma alavanca de 3.ª classe para dorsiflexão.",
      "Opção D ignora a cinemática e estática articular do tornozelo, que é um sistema mecânico articulado clássico."
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
      "Opção B é a descrição de uma alavanca de 2.ª classe.",
      "Opção C refere-se exclusivamente a uma alavanca de 1.ª classe simétrica.",
      "Opção D é anatomicamente impossível, pois uma inserção tendinosa não coincide com o centro de rotação da cartilagem articular."
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
      "Opção B inverte a posição da potência e da resistência.",
      "Opção C erradamente assume que a alavanca do cotovelo é interfixa (o fulcro não está no meio da haste antebraquial, mas na sua extremidade proximal).",
      "Opção D ignora a anatomia do sistema musculoesquelético que opera por rotação de segmentos ósseos rígidos."
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
      "Opção B (40 N) ignora a desvantagem mecânica da alavanca de 3.ª classe, assumindo erradamente VM = 1.",
      "Opção C (5,7 N) resulta de inverter a razão dos braços de alavanca (40 × 5 / 35), o que violaria o princípio do equilíbrio.",
      "Opção D (1400 N) é o valor do torque em N·cm, tendo o estudante esquecido de dividir pela distância do tendão (5 cm)."
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
      "Opção B é incorreta; a extensão do joelho continua a ser funcionalmente uma alavanca de 3.ª classe.",
      "Opção C é falsa; a força compressiva patelofemoral durante a flexão sob carga é enorme e atinge múltiplos do peso corporal.",
      "Opção D é contrária à realidade: a patela aumenta o ângulo de tração relativo ao eixo da tíbia, tornando a força mais eficaz na rotação."
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
      "Opção B confunde pinças anatómicas com pinças hemostáticas de cremalheira (como Kelly ou Pean), que possuem articulação em X e são de 1.ª classe.",
      "Opção C inverte a posição da resistência e da potência.",
      "Opção D desconhece a classificação dos mecanismos simples elementares."
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
      "Opção B é rigorosamente o oposto: a desvantagem mecânica obriga o tendão a suportar tensões mecânicas altíssimas.",
      "Opção C é falsa, pois os ossos sofrem deformações elásticas contínuas sob as forças musculares de reação.",
      "Opção D viola a física elementar; a gravidade continua a atuar plenamente sobre a massa dos segmentos."
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
      "Opção B refere-se à ótica física e teoria eletromagnética de Maxwell.",
      "Opção C define a física nuclear e a radioatividade.",
      "Opção D é um parâmetro fisiológico renal específico, não uma disciplina da física mecânica."
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
      "Opção B confunde tensão com deformação absoluta linear (ΔL), medida em metros.",
      "Opção C define a grandeza física Impulso mecânico (J = F · Δt).",
      "Opção D define o volume específico de uma substância."
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
      "Opção B calcula uma grandeza dimensional fictícia sem significado físico em mecânica dos sólidos.",
      "Opção C expressa uma fórmula relacionada com o trabalho mecânico realizado.",
      "Opção D mede a velocidade de deformação (taxa de deformação strain rate, s⁻¹)."
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
      "Opção B propõe uma dependência inversamente quadrática que inexiste no comportamento elástico linear.",
      "Opção C introduz incorretamente a velocidade e momento linear num regime estático de sólidos.",
      "Opção D é dimensionalmente incorreta e mistura constantes gravitacionais irrelevantes para a rigidez intrínseca do material."
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
      "Opção B descreve um material de alta complacência ou flexibilidade, caracterizado por um Módulo de Young muito BAIXO (como elastómeros ou silicone).",
      "Opção C é falsa; materiais com elevado Módulo de Young (como ligas de titânio ou o osso cortical) suportam elevadíssimas forças de compressão.",
      "Opção D confunde rigidez mecânica com densidade volumétrica de massa."
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
      "Opção B inverte os conceitos de forma absurda; a rotura ocorre após o esgotamento da deformação plástica.",
      "Opção C é errada porque a Lei de Hooke rege precisamente a fase elástica linear, e não a fase plástica.",
      "Opção D limita erroneamente estados da matéria; deformação elástica e plástica são conceitos fundamentais da física dos sólidos."
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
      "Opção B refere-se a uma transição de fase termodinâmica sólido-líquido, sem relação com tensão mecânica.",
      "Opção C refere-se ao ponto final onde o material se fratura e separa em dois pedaços.",
      "Opção D é apenas o ponto zero (tensão zero, deformação zero) no início do ensaio."
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
      "Opção B define rigorosamente a 'Dureza' (hardness) do material (avaliada pelas escalas Mohs, Brinell ou Vickers).",
      "Opção C confunde propriedades mecânicas com capacidade térmica de calor específico.",
      "Opção D define a velocidade acústica de propagação mecânica (v = √(E/ρ))."
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
      "Opção B define a essência mecânica dos materiais dúcteis.",
      "Opção C viola as leis de fratura mecânica dos materiais.",
      "Opção D descreveria um comportamento de dilatação anómala que não é definidor de fragilidade."
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
      "Opção B confunde mecânica de deformação com termodinâmica de evaporação.",
      "Opção C é incorreta porque a pressão atmosférica não entra na definição do coeficiente de Poisson.",
      "Opção D mistura termodinâmica com propriedades mecânicas elásticas."
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
      "Opção B refere-se a forças normais dirigidas perpendicularmente para o interior do material, encurtando o seu eixo.",
      "Opção C descreve forças compressivas iguais em todas as direções espaciais aplicadas por um fluido envolvente.",
      "Opção D descreve forças normais dirigidas perpendicularmente para o exterior, alongando o corpo."
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
      "Opção B é falsa, pois a geometria da secção transversal (especialmente o raio) é o determinante primário da resistência à torção.",
      "Opção C refere atributos visuais superficiais sem qualquer relevância mecânica estrutural.",
      "Opção D descreve cinemática de rotação, não resistência estrutural estática."
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
      "Opção B ignora a curvatura que obriga um dos lados a encurtar-se em compressão.",
      "Opção C ignora o alongamento imposto às fibras exteriores convexas.",
      "Opção D inverte completamente o gradiente real: a tensão na flexão é zero no centro e máxima nas periferias mais afastadas da linha neutra (σ = M · y / I)."
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
      "Opção B confunde fadiga mecânica com degradação termoplástica ou fotodegradação.",
      "Opção C descreveria um endurecimento espontâneo inexistente na ausência de tratamentos metalúrgicos.",
      "Opção D descreve corrosão química passivadora simples, ignorando o colapso mecânico cíclico."
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
      "Opção B é falsa: o poliuretano flexível necessita sempre da agulha metálica introdutora para vencer a resistência da pele.",
      "Opção C descreve um material biodegradável de reabsorção rápida, totalmente desadequado para manter um acesso venoso pérvio.",
      "Opção D descreve um trombo oclusivo iatrogénico catastrófico, contrariando o objetivo da fluidoterapia."
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
      "Opção B aumenta a probabilidade de dobras e laços indesejados ao longo do percurso do tubo.",
      "Opção C é uma característica ótica útil para visualizar líquidos drenados, mas sem relevância na rigidez mecânica de kinking.",
      "Opção D descreve um perfil já pré-colapsado que bloqueia o fluxo com mínima flexão adicional."
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
      "Opção B descreve as propriedades mecânicas de excelência do látex de borracha natural (elastómero de alto retorno elástico).",
      "Opção C é falsa; nenhuma luva de procedimento resiste à perfuração de agulhas hipodérmicas afiadas.",
      "Opção D é uma afirmação fantasiosa sem sustentação química."
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
      "Opção B descreve uma relação inversa que estrangularia o fluxo sanguíneo na coxa e provocaria estase venosa distal catastrófica.",
      "Opção C ignora a dependência geométrica do raio na Lei de Laplace.",
      "Opção D confunde leis biomecânicas fundamentais com variáveis ambientais secundárias."
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
      "Opção B foca-se em propriedades óticas irrelevantes para a contenção mecânica da ferida cirúrgica.",
      "Opção C foca-se em condutividade elétrica, parâmetro sem relação com a escala de sutura.",
      "Opção D refere-se a adjuvantes químicos de acondicionamento sem correlação com o calibre USP."
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
      "Opção B descreve a elasticidade perfeita ideal de Hooke sem efeitos viscosos temporais.",
      "Opção C confunde degradação química fotoquímica com resposta mecânica viscoelástica.",
      "Opção D viola a Lei de Boyle e as leis da termodinâmica de gases ideais."
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
      "Opção B descreve a oscilação de alta amplitude quando a frequência externa coincide com a frequência natural de um sistema.",
      "Opção C refere-se à alteração geométrica de materiais ferromagnéticos na presença de campos magnéticos.",
      "Opção D é um método metalúrgico de ensaio de indentação para medir dureza."
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
      "Opção B confunde transição de fase sólido-gás com resposta mecânica de histerese.",
      "Opção C é incorreta: a presença de histerese comprova a existência de atrito viscoso interno e não-idealidade mecânica.",
      "Opção D contradiz a própria definição de um elastómero altamente deformável e complacente."
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
      "Opção B é um erro crassíssimo: agulhas de 30G fletem com extrema facilidade devido ao seu diâmetro microscópico.",
      "Opção C é incorreta: a geometria do bisel afeta a capacidade de corte tecidual local, não a dureza intrínseca do metal da haste.",
      "Opção D é um contrassenso: o aço inoxidável é um sólido cristalino elástico-plástico, não um fluido de escoamento."
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
      "Opção B e C são pinças de dissecção de lâminas flexíveis soldadas na base, sendo alavancas de 3.ª classe.",
      "Opção D possui mecanismo articulado complexo multieixo adaptado para dobrar lâminas de agrafos, não se enquadrando como alavanca simples elementar clássica."
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
      "Opção B causaria lacerações e estenoses severas na uretra masculina se fosse rígido como titânio.",
      "Opção C descreveria uma falha gravíssima de material que impediria a remoção do cateter da bexiga.",
      "Opção D é incorreta: o silicone é um excelente isolante elétrico e dielétrico."
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
      "Opção B seria uma prática perigosa e negligente; a visualização direta é obrigatória para não lacerar a pele do doente.",
      "Opção C confunde as classes; o instrumento é de 1.ª classe e privilegia força, não velocidade.",
      "Opção D é contrária à realidade: cabos longos de aço aumentam a massa total do alicate."
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
      "Opção B confunde roldana fixa com roldana móvel (que é a que divide a carga e confere VM = 2).",
      "Opção C é um absurdo físico; nenhuma polia elimina o campo gravitacional terrestre.",
      "Opção D confunde mais uma vez com sistemas de talha de polias móveis."
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
      "Opção B violaria as leis elementares da densidade da matéria líquida e dos tecidos vivos.",
      "Opção C inverte a realidade física: os gases são ordens de magnitude mais compressíveis do que os líquidos teciduais.",
      "Opção D descreveria uma expansão paradoxal sob compressão, violando a termodinâmica."
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
      "Opção B é um erro fatal de mecânica; afastar a carga aumenta o esforço, nunca o reduz.",
      "Opção C ignora o conceito fundamental de braço de alavanca no cálculo do momento de força.",
      "Opção D confunde aumento de braço com anulação de momento."
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
      "Opção B descreve o núcleo pulposo, que atua como uma almofada hidrostática incompressível (resistindo à compressão vertical, mas incapaz de resistir ao cisalhamento isolado).",
      "Opção C e D são estruturas nervosas e fluidas de condução neural e proteção hidrodinâmica, sem função mecânica de absorção de cisalhamento do disco."
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
      "Opção B inverte a relação matemática fundamental F = P · A.",
      "Opção C ignora o Princípio de Pascal e a definição de pressão mecânica.",
      "Opção D inventa uma dependência quadrática incorreta."
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
      "Opção B descreve a isotropia mecânica pura.",
      "Opção C confunde anisotropia elástica com ausência de biologia celular e Lei de Wolff.",
      "Opção D confunde mecânica de materiais com diamagnetismo."
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
      "Opção B é incorreta; estes sistemas clássicos de drenagem cirúrgica pós-operatória são mecânicos passivos sem motores elétricos.",
      "Opção C é falsa; nenhuma combustão ou reação química exotérmica/endotérmica ocorre no frasco.",
      "Opção D descreve a drenagem postural gravitacional simples (como os drenos de Penrose ou sacos coletores por gravidade), não a aspiração ativa por vácuo elástico."
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
      "Opção B multiplica grandezas arbitrariamente, gerando unidades inconsistentes de N²·m².",
      "Opção C mistura comprimentos e forças no denominador sem fundamentação dimensional.",
      "Opção D propõe uma diferença de forças dividida por soma de distâncias sem sentido físico."
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
      "Opção B confunde mecânica dos sólidos com transições térmicas de estado físico.",
      "Opção C é absurda, pois 100% de deformação plástica só ocorre em polímeros de altíssima ductilidade próximo da rotura.",
      "Opção D inventa conceitos quânticos desprovidos de base física no ensaio de tração."
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
      "Opção B é fisicamente impossível sob condições de temperatura e pressão ambientes de uma enfermaria.",
      "Opção C confunde um polímero rígido consolidado com fluidos sob pressão.",
      "Opção D é uma afirmação fantasiosa sem qualquer base fisiológica ou biofísica."
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
      "Opção B (80 N) confunde a massa em kg com o valor da força em Newtons.",
      "Opção C (20 N) multiplica erroneamente o coeficiente de atrito pela massa sem incluir a aceleração da gravidade (0,25 × 80).",
      "Opção D (784 N) é o peso vertical total do carrinho, e não a força de atrito horizontal a ser superada."
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
      "Opção B é a ordem de grandeza da energia cinética (½ m v²).",
      "Opção C é a definição de pressão mecânica em Pascal.",
      "Opção D é a taxa temporal de variação de força."
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
      "Opção B (J/s) corresponde a Watt (unidade de potência).",
      "Opções C e D são unidades de pressão e tensão mecânica."
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
      "Opção B impediria a existência de qualquer torque motriz.",
      "Opção C causaria rotação acelerada no sentido da resistência.",
      "Opção D descreve equilíbrio rotacional dinâmico, não estático em repouso."
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
      "Opção B (80 N·m) divide erradamente a força pela distância (20 / 0,25).",
      "Opção C (0,0125 N·m) divide a distância pela força.",
      "Opção D multiplica por 2,5 em vez de 0,25."
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
      "Opção B viola a multiplicação direta por zero.",
      "Opção C exigiria um torque acelerador não-nulo.",
      "Opção D não tem base fisiológica em contrações isométricas normais."
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
      "Opção B dividiria a força em vez de multiplicar (50 / 10).",
      "Opção C consideraria uma vantagem mecânica unitária sem efeito de alavanca.",
      "Opção D é um cálculo incoerente."
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
      "Opção B (0,25 m) colocaria a massa menor ainda mais próxima, agravando o desequilíbrio.",
      "Opção C só equilibraria se as massas fossem iguais.",
      "Opção D quadruplicaria o torque do lado direito."
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
      "Opção B confunde pico de eficiência mecânica com relaxamento.",
      "Opção C nega a trigonometria do torque articular.",
      "Opção D descreve luxação incompatível com a fisiologia articular sadia."
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
      "Opção B (12 N·m) esqueceria o ângulo de 30° (considerando sen θ = 1).",
      "Opções C e D cometem erros grosseiros de cálculo e conversão métrica de centímetros para metros."
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
      "Opção B descreve forças paralelas unidirecionais que produzem translação acelerada.",
      "Opção C descreve forças ortogonais.",
      "Opção D é uma impossibilidade física."
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
      "Opção B confunde dependência quadrática com linear.",
      "Opção C confunde com dependência cúbica.",
      "Opção D ignora a geometria rotacional newtoniana."
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
      "Opção B comete o erro de não converter centímetros para metros.",
      "Opção C anularia a capacidade de preensão do instrumento.",
      "Opção D divide a força pelo comprimento."
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
      "Opção B inverte o efeito da redução do braço resistente.",
      "Opção C ignora a variação do braço de alavanca ao longo da mandíbula.",
      "Opção D é uma afirmação anatomicamente incorreta."
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
      "Opções B, C e D ignoram o valor trigonométrico nulo do seno de 180 graus."
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
      "Opção B confunde comprimento anatómico bruto com braço perpendicular trigonométrico.",
      "Opções C e D não têm correlação geométrica com o torque."
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
      "Opções B, C e D confundem o rácio mecânico de alavancas com variáveis energéticas, anatómicas ou cardiovasculares."
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
      "Opção B é falsa; VM < 1 exige maior consumo de ATP pelo músculo para gerar forças elevadas.",
      "Opções C e D são alegações sem fundamento físico."
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
      "Opção B (0,2) inverte a fração dividindo d_R por d_P.",
      "Opção C multiplica os comprimentos (20 × 4).",
      "Opção D subtrai os comprimentos (20 - 4)."
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
      "Opções B, C e D são propriedades irreais sem cabimento na teoria das alavancas."
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
      "Opção B violaria a 1.ª Lei da Termodinâmica.",
      "Opções C e D introduzem fenómenos mágicos e disparatados."
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
      "Opções B e C confundem a posição relativa do ponto de apoio com a carga ou o músculo.",
      "Opção D descreve outra máquina simples que não corresponde à anatomia craniovertebral."
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
      "Opções B e C não correspondem à posição intermediária do eixo de articulação.",
      "Opção D ignora a mecânica de alavanca com fulcro evidente."
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
      "Opção B é a característica estrita das alavancas de 3.ª classe.",
      "Opção C é incorreta, pois a maioria das alavancas de 1.ª classe tem valores moderados de VM.",
      "Opção D anularia qualquer capacidade de transmissão mecânica."
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
      "Opção B colocaria o fulcro no meio, o que não é o caso anatómico da tíbia.",
      "Opção C colocaria o músculo a puxar no meio da carga.",
      "Opção D é uma lei dos gases sem ligação à mecânica articular."
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
      "Opção B descreve as alavancas de 3.ª classe.",
      "Opções C e D violam as relações geométricas básicas das máquinas simples."
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
      "Opção B exigiria o cotovelo situado no meio entre o músculo e a mão.",
      "Opção C exigiria a carga posicionada entre o cotovelo e o tendão muscular.",
      "Opção D não corresponde a um modelo de alavanca com fulcro e rotação."
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
      "Opção B descreve tesouras e pinças com parafuso cruzado central.",
      "Opção C exigiria as pontas no meio e os dedos no topo.",
      "Opção D é uma classe inexistente na mecânica clássica (existem apenas 3 classes de alavancas)."
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
      "Opção B é rara no corpo humano (o exemplo quase único é a flexão plantar do tornozelo).",
      "Opção C é incorreta, pois as alavancas de 1.ª classe anatómicas têm VM moderada ou baixa.",
      "Opção D ignora a biomecânica clássica descrita por Giovanni Borelli no século XVII."
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
      "Opções B, C e D descrevem processos físicos ou térmicos inexistentes em instrumentos manuais comuns."
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
      "Opções B e C não refletem a anatomia da fossa do olécrano e tróclea umeral.",
      "Opção D introduz uma máquina de polias inexistente nesta articulação."
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
      "Opção B divide a força pela vantagem mecânica (30 / 5).",
      "Opção C assume vantagem mecânica unitária.",
      "Opção D multiplica por 20 em vez de 5."
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
      "Opção B confunde aproximar o fulcro da carga com aproximar da mão.",
      "Opções C e D contrariam a mecânica básica de alavancas."
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
      "Opções B, C e D são alavancas de 1.ª classe com o fulcro situado entre a potência e a resistência."
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
      "Opções B, C e D violam a 1.ª ou a 2.ª condições de equilíbrio estático da mecânica newtoniana."
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
      "Opções B, C e D não possuem fundamento na física clássica de alavancas estáticas."
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
      "Opção B seria alavanca de 3.ª classe com grande desvantagem de força.",
      "Opção C seria alavanca de 1.ª classe.",
      "Opção D é fisicamente incoerente."
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
      "Opção B multiplicaria em vez de dividir a carga.",
      "Opção C ignora o efeito multiplicador da alavanca.",
      "Opção D calcula erradamente por fator de 3."
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
      "Opção B exigiria o eixo de rodas no meio da maca.",
      "Opção C exigiria os enfermeiros a erguer a maca pelo meio por baixo do corpo do doente.",
      "Opção D não faz sentido biomecânico."
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
      "Opções B e C confundem a classe de alavanca e invertem a relação de força.",
      "Opção D ignora que a articulação fémoro-tibial é o fulcro evidente."
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
      "Opção B contraria a fadiga muscular rápida na abdução mantida.",
      "Opção C inverte a desvantagem mecânica em vantagem impossível.",
      "Opção D é uma situação incompatível com a estabilidade anatómica articular."
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
      "Opção B seria a pior característica possível para manipular vasos e nervos.",
      "Opções C e D não correspondem a pinças manuais convencionais."
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
      "Opção B é metalurgia térmica estrita.",
      "Opção C é neurofisiologia eletrofisiológica.",
      "Opção D é citologia e patologia clínica hematológica."
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
      "Opção B é falsa; o osso esponjoso é deformável e absorve choque mecânico.",
      "Opção C é um polímero flexível dúctil.",
      "Opção D é incorreta, pois mesmo o aço cirúrgico deforma elasticamente sob grandes cargas."
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
      "Opção B define o comportamento plástico (deformação irreversível).",
      "Opção C define o comportamento viscoso de fluidos.",
      "Opção D descreve fratura frágil catastrófica."
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
      "Opção B é uma fantasia mecânica.",
      "Opção C define comportamento puramente elástico ideal.",
      "Opção D confunde processos de deformação molecular com física nuclear."
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
      "Opções B, C e D descrevem comportamentos não-newtonianos ou incoerentes."
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
      "Opção B descreve um fluido dilatante (espessamento por cisalhamento), oposto ao sangue.",
      "Opções C e D contrariam a hemodinâmica dos fluidos biológicos."
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
      "Opções B, C e D descrevem propriedades absurdas que violam a fisiologia respiratória."
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
      "Opção B descreve o tratamento antigo obsoleto da dessecação, refutado pela teoria do ambiente húmido de Winter.",
      "Opções C e D atribuem propriedades cáusticas ou osteogénicas despropositadas aos hidrogéis."
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
      "Opção B multiplica a força pela área, violando a análise dimensional.",
      "Opção C inverte a fração.",
      "Opção D calcula trabalho ou momento axial."
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
      "Opção B inverte a relação matemática.",
      "Opção C calcula produto de comprimentos com dimensão de área (m²).",
      "Opção D é a fórmula de trabalho mecânico (W = F · d)."
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
      "Opção B confunde o alongamento absoluto de 0,4 cm com a fração relativa 0,10.",
      "Opção C divide o comprimento final pelo inicial (L_final / L₀ = 1,10).",
      "Opção D comete um erro decimal por fator de 10."
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
      "Opções B, C e D não possuem relação com a mecânica de materiais elásticos."
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
      "Opção B introduz uma dependência não-linear incorreta.",
      "Opção C mistura a aceleração gravitacional com a lei constitutiva do material.",
      "Opção D é a lei dos gases perfeitos."
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
      "Opções B, C e D confundem rigidez mecânica com solubilidade química, bioenergética alimentar ou radioatividade."
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
      "Opção B inverte as propriedades elásticas do silicone.",
      "Opção C nega a dureza plástica conhecida do policloreto de vinilo (PVC).",
      "Opção D ignora a vasta gama de módulos elásticos dos biomateriais."
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
      "Opção B é a Tensão de Rutura (Ponto de Fratura), que ocorre muito depois do limite elástico.",
      "Opção C confunde propriedades mecânicas com mudança de fase termodinâmica.",
      "Opção D descreve a origem da curva no limite de proporcionalidade."
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
      "Opções B, C e D descrevem fenómenos inexistentes que violam a física dos materiais e a anatomofisiologia urinária."
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
      "Opção B define materiais frágeis.",
      "Opções C e D são afirmações erróneas sem sentido reológico."
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
      "Opções B, C e D ignoram a biofísica reológica dos tecidos vivos hidratados ricos em colagénio e água."
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
      "Opção B descreve elasticidade puramente conservativa sem perdas viscosas.",
      "Opções C e D são alegações termodinâmicas estapafúrdias."
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
      "Opções B, C e D descrevem processos físicos ou atómicos impossíveis nas roupas hospitalares."
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
      "Opção B violaria a viscoelasticidade, descrevendo uma contração ativa impossível na borracha passiva.",
      "Opções C e D são disparates mecânicos e térmicos."
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
      "Opções B, C e D são afirmações cínicas, antiéticas ou ilegais que contrariam o propósito da formação universitária de enfermagem."
    ],
    "nursingApplication": "Compreender os princípios do Tópico 2 consolida no futuro enfermeiro uma mente analítica e científica, capaz de correlacionar a mecânica newtoniana e a ciência dos polímeros com o conforto, segurança e recuperação clínica de cada doente a seu cargo."
  },
  {
    "id": 2115,
    "topicId": 2,
    "question": "Na análise biomecânica e reológica de biomateriais em enfermagem, o/a cateter venoso central de poliuretano desempenha um papel clínico crucial. Como se explica o seu comportamento à luz das propriedades mecânicas de tensão, elasticidade e materiais?",
    "options": [
      "Comporta-se como um biomaterial específico: polímero termoplástico com E inicial de ~300 MPa que amolece à temperatura corporal de 37 °C para E ~30 MPa, reduzindo a irritação mecânica endotelial e o risco de flebite ou perfuração venosa.",
      "Comporta-se como um corpo rígido perfeitamente indeformável que anula todas as forças da gravidade.",
      "Decompõe-se instantaneamente em vapor d'água ao atingir 37 °C no corpo.",
      "Atua como um condutor elétrico de alta voltagem que queima a mucosa do doente."
    ],
    "correctIndex": 0,
    "explanation": "O/A cateter venoso central de poliuretano caracteriza-se biofisicamente por ser um polímero termoplástico com E inicial de ~300 MPa que amolece à temperatura corporal de 37 °C para E ~30 MPa, reduzindo a irritação mecânica endotelial e o risco de flebite ou perfuração venosa. Esta propriedade garante a adaptação funcional e a segurança do doente durante a intervenção clínica.",
    "distractorAnalysis": [
      "Opção incorreta: afirma que o/a cateter venoso central de poliuretano atua como um fluido perfeitamente newtoniano incompressível à temperatura do zero absoluto.",
      "Opção incorreta: confunde a resposta elástica do material com decomposição radioativa espontânea por emissão gama.",
      "Opção incorreta: sugere que o/a cateter venoso central de poliuretano perde a sua massa inercial quando entra em contacto com os tecidos humanos."
    ],
    "nursingApplication": "O enfermeiro aplica este princípio ao manipular o/a cateter venoso central de poliuretano: compreender a sua elasticidade, módulo de deformação e limites de resistência evita falhas mecânicas iatrogénicas, roturas acidentais e lesões teciduais na pessoa cuidada."
  },
  {
    "id": 2116,
    "topicId": 2,
    "question": "Na análise biomecânica e reológica de biomateriais em enfermagem, o/a fio de sutura absorvível de ácido poliglicólico (Dexon) desempenha um papel clínico crucial. Como se explica o seu comportamento à luz das propriedades mecânicas de tensão, elasticidade e materiais?",
    "options": [
      "Comporta-se como um biomaterial específico: polímero multifilamentar trançado que perde a sua tensão de rutura elástica em cerca de 3 a 4 semanas por hidrólise química gradual das pontes éster.",
      "Comporta-se como um corpo rígido perfeitamente indeformável que anula todas as forças da gravidade.",
      "Decompõe-se instantaneamente em vapor d'água ao atingir 37 °C no corpo.",
      "Atua como um condutor elétrico de alta voltagem que queima a mucosa do doente."
    ],
    "correctIndex": 0,
    "explanation": "O/A fio de sutura absorvível de ácido poliglicólico (Dexon) caracteriza-se biofisicamente por ser um polímero multifilamentar trançado que perde a sua tensão de rutura elástica em cerca de 3 a 4 semanas por hidrólise química gradual das pontes éster. Esta propriedade garante a adaptação funcional e a segurança do doente durante a intervenção clínica.",
    "distractorAnalysis": [
      "Opção incorreta: afirma que o/a fio de sutura absorvível de ácido poliglicólico (Dexon) atua como um fluido perfeitamente newtoniano incompressível à temperatura do zero absoluto.",
      "Opção incorreta: confunde a resposta elástica do material com decomposição radioativa espontânea por emissão gama.",
      "Opção incorreta: sugere que o/a fio de sutura absorvível de ácido poliglicólico (Dexon) perde a sua massa inercial quando entra em contacto com os tecidos humanos."
    ],
    "nursingApplication": "O enfermeiro aplica este princípio ao manipular o/a fio de sutura absorvível de ácido poliglicólico (Dexon): compreender a sua elasticidade, módulo de deformação e limites de resistência evita falhas mecânicas iatrogénicas, roturas acidentais e lesões teciduais na pessoa cuidada."
  },
  {
    "id": 2117,
    "topicId": 2,
    "question": "Na análise biomecânica e reológica de biomateriais em enfermagem, o/a tubuladura de perfusão em PVC plastificado desempenha um papel clínico crucial. Como se explica o seu comportamento à luz das propriedades mecânicas de tensão, elasticidade e materiais?",
    "options": [
      "Comporta-se como um biomaterial específico: material com plastificantes (como o DEHP) que aumentam a flexibilidade mecânica, mas que podem adsorver fármacos lipofílicos como o diazepam e nitroglicerina, exigindo linhas de polietileno dedicadas.",
      "Comporta-se como um corpo rígido perfeitamente indeformável que anula todas as forças da gravidade.",
      "Decompõe-se instantaneamente em vapor d'água ao atingir 37 °C no corpo.",
      "Atua como um condutor elétrico de alta voltagem que queima a mucosa do doente."
    ],
    "correctIndex": 0,
    "explanation": "O/A tubuladura de perfusão em PVC plastificado caracteriza-se biofisicamente por ser um material com plastificantes (como o DEHP) que aumentam a flexibilidade mecânica, mas que podem adsorver fármacos lipofílicos como o diazepam e nitroglicerina, exigindo linhas de polietileno dedicadas. Esta propriedade garante a adaptação funcional e a segurança do doente durante a intervenção clínica.",
    "distractorAnalysis": [
      "Opção incorreta: afirma que o/a tubuladura de perfusão em PVC plastificado atua como um fluido perfeitamente newtoniano incompressível à temperatura do zero absoluto.",
      "Opção incorreta: confunde a resposta elástica do material com decomposição radioativa espontânea por emissão gama.",
      "Opção incorreta: sugere que o/a tubuladura de perfusão em PVC plastificado perde a sua massa inercial quando entra em contacto com os tecidos humanos."
    ],
    "nursingApplication": "O enfermeiro aplica este princípio ao manipular o/a tubuladura de perfusão em PVC plastificado: compreender a sua elasticidade, módulo de deformação e limites de resistência evita falhas mecânicas iatrogénicas, roturas acidentais e lesões teciduais na pessoa cuidada."
  },
  {
    "id": 2118,
    "topicId": 2,
    "question": "Na análise biomecânica e reológica de biomateriais em enfermagem, o/a balão de cateter de angioplastia coronária desempenha um papel clínico crucial. Como se explica o seu comportamento à luz das propriedades mecânicas de tensão, elasticidade e materiais?",
    "options": [
      "Comporta-se como um biomaterial específico: polímero com Módulo de Young elevadíssimo (não-complacente) para suportar pressões internas de 15 a 20 atmosferas sem dilatar de diâmetro, esmagando a placa de ateroma.",
      "Comporta-se como um corpo rígido perfeitamente indeformável que anula todas as forças da gravidade.",
      "Decompõe-se instantaneamente em vapor d'água ao atingir 37 °C no corpo.",
      "Atua como um condutor elétrico de alta voltagem que queima a mucosa do doente."
    ],
    "correctIndex": 0,
    "explanation": "O/A balão de cateter de angioplastia coronária caracteriza-se biofisicamente por ser um polímero com Módulo de Young elevadíssimo (não-complacente) para suportar pressões internas de 15 a 20 atmosferas sem dilatar de diâmetro, esmagando a placa de ateroma. Esta propriedade garante a adaptação funcional e a segurança do doente durante a intervenção clínica.",
    "distractorAnalysis": [
      "Opção incorreta: afirma que o/a balão de cateter de angioplastia coronária atua como um fluido perfeitamente newtoniano incompressível à temperatura do zero absoluto.",
      "Opção incorreta: confunde a resposta elástica do material com decomposição radioativa espontânea por emissão gama.",
      "Opção incorreta: sugere que o/a balão de cateter de angioplastia coronária perde a sua massa inercial quando entra em contacto com os tecidos humanos."
    ],
    "nursingApplication": "O enfermeiro aplica este princípio ao manipular o/a balão de cateter de angioplastia coronária: compreender a sua elasticidade, módulo de deformação e limites de resistência evita falhas mecânicas iatrogénicas, roturas acidentais e lesões teciduais na pessoa cuidada."
  },
  {
    "id": 2119,
    "topicId": 2,
    "question": "Na análise biomecânica e reológica de biomateriais em enfermagem, o/a sonda endotraqueal com cuff de baixa pressão e alto volume desempenha um papel clínico crucial. Como se explica o seu comportamento à luz das propriedades mecânicas de tensão, elasticidade e materiais?",
    "options": [
      "Comporta-se como um biomaterial específico: membrana de PVC ou poliuretano de alta complacência elástica que veda a traqueia com pressão de contacto controlada entre 20 e 30 cmH₂O, prevenindo isquemia da mucosa traqueal.",
      "Comporta-se como um corpo rígido perfeitamente indeformável que anula todas as forças da gravidade.",
      "Decompõe-se instantaneamente em vapor d'água ao atingir 37 °C no corpo.",
      "Atua como um condutor elétrico de alta voltagem que queima a mucosa do doente."
    ],
    "correctIndex": 0,
    "explanation": "O/A sonda endotraqueal com cuff de baixa pressão e alto volume caracteriza-se biofisicamente por ser um membrana de PVC ou poliuretano de alta complacência elástica que veda a traqueia com pressão de contacto controlada entre 20 e 30 cmH₂O, prevenindo isquemia da mucosa traqueal. Esta propriedade garante a adaptação funcional e a segurança do doente durante a intervenção clínica.",
    "distractorAnalysis": [
      "Opção incorreta: afirma que o/a sonda endotraqueal com cuff de baixa pressão e alto volume atua como um fluido perfeitamente newtoniano incompressível à temperatura do zero absoluto.",
      "Opção incorreta: confunde a resposta elástica do material com decomposição radioativa espontânea por emissão gama.",
      "Opção incorreta: sugere que o/a sonda endotraqueal com cuff de baixa pressão e alto volume perde a sua massa inercial quando entra em contacto com os tecidos humanos."
    ],
    "nursingApplication": "O enfermeiro aplica este princípio ao manipular o/a sonda endotraqueal com cuff de baixa pressão e alto volume: compreender a sua elasticidade, módulo de deformação e limites de resistência evita falhas mecânicas iatrogénicas, roturas acidentais e lesões teciduais na pessoa cuidada."
  },
  {
    "id": 2120,
    "topicId": 2,
    "question": "Na análise biomecânica e reológica de biomateriais em enfermagem, o/a meia de compressão elástica graduada Classe 2 desempenha um papel clínico crucial. Como se explica o seu comportamento à luz das propriedades mecânicas de tensão, elasticidade e materiais?",
    "options": [
      "Comporta-se como um biomaterial específico: malha elástica circular com elastano que aplica uma pressão decrescente de 23-32 mmHg no tornozelo, promovendo o retorno venoso e reduzindo o diâmetro das veias para acelerar a velocidade do sangue.",
      "Comporta-se como um corpo rígido perfeitamente indeformável que anula todas as forças da gravidade.",
      "Decompõe-se instantaneamente em vapor d'água ao atingir 37 °C no corpo.",
      "Atua como um condutor elétrico de alta voltagem que queima a mucosa do doente."
    ],
    "correctIndex": 0,
    "explanation": "O/A meia de compressão elástica graduada Classe 2 caracteriza-se biofisicamente por ser um malha elástica circular com elastano que aplica uma pressão decrescente de 23-32 mmHg no tornozelo, promovendo o retorno venoso e reduzindo o diâmetro das veias para acelerar a velocidade do sangue. Esta propriedade garante a adaptação funcional e a segurança do doente durante a intervenção clínica.",
    "distractorAnalysis": [
      "Opção incorreta: afirma que o/a meia de compressão elástica graduada Classe 2 atua como um fluido perfeitamente newtoniano incompressível à temperatura do zero absoluto.",
      "Opção incorreta: confunde a resposta elástica do material com decomposição radioativa espontânea por emissão gama.",
      "Opção incorreta: sugere que o/a meia de compressão elástica graduada Classe 2 perde a sua massa inercial quando entra em contacto com os tecidos humanos."
    ],
    "nursingApplication": "O enfermeiro aplica este princípio ao manipular o/a meia de compressão elástica graduada Classe 2: compreender a sua elasticidade, módulo de deformação e limites de resistência evita falhas mecânicas iatrogénicas, roturas acidentais e lesões teciduais na pessoa cuidada."
  },
  {
    "id": 2121,
    "topicId": 2,
    "question": "Na análise biomecânica e reológica de biomateriais em enfermagem, o/a penso de alginato de cálcio em ferida cavitária exsudativa desempenha um papel clínico crucial. Como se explica o seu comportamento à luz das propriedades mecânicas de tensão, elasticidade e materiais?",
    "options": [
      "Comporta-se como um biomaterial específico: biomaterial fibroso de algas castanhas que sofre troca iónica com o sódio do exsudado (Ca²⁺ por Na⁺), convertendo-se num gel reológico macio que preenche o espaço morto sem comprimir o leito microvascular.",
      "Comporta-se como um corpo rígido perfeitamente indeformável que anula todas as forças da gravidade.",
      "Decompõe-se instantaneamente em vapor d'água ao atingir 37 °C no corpo.",
      "Atua como um condutor elétrico de alta voltagem que queima a mucosa do doente."
    ],
    "correctIndex": 0,
    "explanation": "O/A penso de alginato de cálcio em ferida cavitária exsudativa caracteriza-se biofisicamente por ser um biomaterial fibroso de algas castanhas que sofre troca iónica com o sódio do exsudado (Ca²⁺ por Na⁺), convertendo-se num gel reológico macio que preenche o espaço morto sem comprimir o leito microvascular. Esta propriedade garante a adaptação funcional e a segurança do doente durante a intervenção clínica.",
    "distractorAnalysis": [
      "Opção incorreta: afirma que o/a penso de alginato de cálcio em ferida cavitária exsudativa atua como um fluido perfeitamente newtoniano incompressível à temperatura do zero absoluto.",
      "Opção incorreta: confunde a resposta elástica do material com decomposição radioativa espontânea por emissão gama.",
      "Opção incorreta: sugere que o/a penso de alginato de cálcio em ferida cavitária exsudativa perde a sua massa inercial quando entra em contacto com os tecidos humanos."
    ],
    "nursingApplication": "O enfermeiro aplica este princípio ao manipular o/a penso de alginato de cálcio em ferida cavitária exsudativa: compreender a sua elasticidade, módulo de deformação e limites de resistência evita falhas mecânicas iatrogénicas, roturas acidentais e lesões teciduais na pessoa cuidada."
  },
  {
    "id": 2122,
    "topicId": 2,
    "question": "Na análise biomecânica e reológica de biomateriais em enfermagem, o/a dreno cirúrgico de sucção fechada (tipo Jackson-Pratt ou Redon) desempenha um papel clínico crucial. Como se explica o seu comportamento à luz das propriedades mecânicas de tensão, elasticidade e materiais?",
    "options": [
      "Comporta-se como um biomaterial específico: fole elástico de silicone que atua como reservatório de vácuo mecânico sob a Lei de Hooke, mantendo pressão negativa suave constante para drenagem de hematomas pós-operatórios.",
      "Comporta-se como um corpo rígido perfeitamente indeformável que anula todas as forças da gravidade.",
      "Decompõe-se instantaneamente em vapor d'água ao atingir 37 °C no corpo.",
      "Atua como um condutor elétrico de alta voltagem que queima a mucosa do doente."
    ],
    "correctIndex": 0,
    "explanation": "O/A dreno cirúrgico de sucção fechada (tipo Jackson-Pratt ou Redon) caracteriza-se biofisicamente por ser um fole elástico de silicone que atua como reservatório de vácuo mecânico sob a Lei de Hooke, mantendo pressão negativa suave constante para drenagem de hematomas pós-operatórios. Esta propriedade garante a adaptação funcional e a segurança do doente durante a intervenção clínica.",
    "distractorAnalysis": [
      "Opção incorreta: afirma que o/a dreno cirúrgico de sucção fechada (tipo Jackson-Pratt ou Redon) atua como um fluido perfeitamente newtoniano incompressível à temperatura do zero absoluto.",
      "Opção incorreta: confunde a resposta elástica do material com decomposição radioativa espontânea por emissão gama.",
      "Opção incorreta: sugere que o/a dreno cirúrgico de sucção fechada (tipo Jackson-Pratt ou Redon) perde a sua massa inercial quando entra em contacto com os tecidos humanos."
    ],
    "nursingApplication": "O enfermeiro aplica este princípio ao manipular o/a dreno cirúrgico de sucção fechada (tipo Jackson-Pratt ou Redon): compreender a sua elasticidade, módulo de deformação e limites de resistência evita falhas mecânicas iatrogénicas, roturas acidentais e lesões teciduais na pessoa cuidada."
  },
  {
    "id": 2123,
    "topicId": 2,
    "question": "Na análise biomecânica e reológica de biomateriais em enfermagem, o/a prótese articular de anca com cabeça de cerâmica de zircónia desempenha um papel clínico crucial. Como se explica o seu comportamento à luz das propriedades mecânicas de tensão, elasticidade e materiais?",
    "options": [
      "Comporta-se como um biomaterial específico: biomaterial inorgânico com Módulo de Young extremo (E ~ 210 GPa) e baixíssimo coeficiente de atrito (μ < 0,02 contra polietileno), minimizando o desgaste e a libertação de partículas que causam osteólise asséptica.",
      "Comporta-se como um corpo rígido perfeitamente indeformável que anula todas as forças da gravidade.",
      "Decompõe-se instantaneamente em vapor d'água ao atingir 37 °C no corpo.",
      "Atua como um condutor elétrico de alta voltagem que queima a mucosa do doente."
    ],
    "correctIndex": 0,
    "explanation": "O/A prótese articular de anca com cabeça de cerâmica de zircónia caracteriza-se biofisicamente por ser um biomaterial inorgânico com Módulo de Young extremo (E ~ 210 GPa) e baixíssimo coeficiente de atrito (μ < 0,02 contra polietileno), minimizando o desgaste e a libertação de partículas que causam osteólise asséptica. Esta propriedade garante a adaptação funcional e a segurança do doente durante a intervenção clínica.",
    "distractorAnalysis": [
      "Opção incorreta: afirma que o/a prótese articular de anca com cabeça de cerâmica de zircónia atua como um fluido perfeitamente newtoniano incompressível à temperatura do zero absoluto.",
      "Opção incorreta: confunde a resposta elástica do material com decomposição radioativa espontânea por emissão gama.",
      "Opção incorreta: sugere que o/a prótese articular de anca com cabeça de cerâmica de zircónia perde a sua massa inercial quando entra em contacto com os tecidos humanos."
    ],
    "nursingApplication": "O enfermeiro aplica este princípio ao manipular o/a prótese articular de anca com cabeça de cerâmica de zircónia: compreender a sua elasticidade, módulo de deformação e limites de resistência evita falhas mecânicas iatrogénicas, roturas acidentais e lesões teciduais na pessoa cuidada."
  },
  {
    "id": 2124,
    "topicId": 2,
    "question": "Na análise biomecânica e reológica de biomateriais em enfermagem, o/a ligadura de gesso sintético de fibra de vidro impregnada com poliuretano desempenha um papel clínico crucial. Como se explica o seu comportamento à luz das propriedades mecânicas de tensão, elasticidade e materiais?",
    "options": [
      "Comporta-se como um biomaterial específico: material compósito que atinge elevada rigidez e resistência à flexão ao fim de 20 minutos de reação de polimerização com água, sendo três vezes mais leve que o gesso de Paris tradicional.",
      "Comporta-se como um corpo rígido perfeitamente indeformável que anula todas as forças da gravidade.",
      "Decompõe-se instantaneamente em vapor d'água ao atingir 37 °C no corpo.",
      "Atua como um condutor elétrico de alta voltagem que queima a mucosa do doente."
    ],
    "correctIndex": 0,
    "explanation": "O/A ligadura de gesso sintético de fibra de vidro impregnada com poliuretano caracteriza-se biofisicamente por ser um material compósito que atinge elevada rigidez e resistência à flexão ao fim de 20 minutos de reação de polimerização com água, sendo três vezes mais leve que o gesso de Paris tradicional. Esta propriedade garante a adaptação funcional e a segurança do doente durante a intervenção clínica.",
    "distractorAnalysis": [
      "Opção incorreta: afirma que o/a ligadura de gesso sintético de fibra de vidro impregnada com poliuretano atua como um fluido perfeitamente newtoniano incompressível à temperatura do zero absoluto.",
      "Opção incorreta: confunde a resposta elástica do material com decomposição radioativa espontânea por emissão gama.",
      "Opção incorreta: sugere que o/a ligadura de gesso sintético de fibra de vidro impregnada com poliuretano perde a sua massa inercial quando entra em contacto com os tecidos humanos."
    ],
    "nursingApplication": "O enfermeiro aplica este princípio ao manipular o/a ligadura de gesso sintético de fibra de vidro impregnada com poliuretano: compreender a sua elasticidade, módulo de deformação e limites de resistência evita falhas mecânicas iatrogénicas, roturas acidentais e lesões teciduais na pessoa cuidada."
  },
  {
    "id": 2125,
    "topicId": 2,
    "question": "Na análise biomecânica e reológica de biomateriais em enfermagem, o/a pinça de Kocher hemostática com cremalheira desempenha um papel clínico crucial. Como se explica o seu comportamento à luz das propriedades mecânicas de tensão, elasticidade e materiais?",
    "options": [
      "Comporta-se como um biomaterial específico: alavanca de 1.ª classe com d_P = 12 cm e d_R = 3 cm (VM = 4) que multiplica a força do polegar para ocluir firmemente pedículos vasculares sangrantes.",
      "Comporta-se como um corpo rígido perfeitamente indeformável que anula todas as forças da gravidade.",
      "Decompõe-se instantaneamente em vapor d'água ao atingir 37 °C no corpo.",
      "Atua como um condutor elétrico de alta voltagem que queima a mucosa do doente."
    ],
    "correctIndex": 0,
    "explanation": "O/A pinça de Kocher hemostática com cremalheira caracteriza-se biofisicamente por ser um alavanca de 1.ª classe com d_P = 12 cm e d_R = 3 cm (VM = 4) que multiplica a força do polegar para ocluir firmemente pedículos vasculares sangrantes. Esta propriedade garante a adaptação funcional e a segurança do doente durante a intervenção clínica.",
    "distractorAnalysis": [
      "Opção incorreta: afirma que o/a pinça de Kocher hemostática com cremalheira atua como um fluido perfeitamente newtoniano incompressível à temperatura do zero absoluto.",
      "Opção incorreta: confunde a resposta elástica do material com decomposição radioativa espontânea por emissão gama.",
      "Opção incorreta: sugere que o/a pinça de Kocher hemostática com cremalheira perde a sua massa inercial quando entra em contacto com os tecidos humanos."
    ],
    "nursingApplication": "O enfermeiro aplica este princípio ao manipular o/a pinça de Kocher hemostática com cremalheira: compreender a sua elasticidade, módulo de deformação e limites de resistência evita falhas mecânicas iatrogénicas, roturas acidentais e lesões teciduais na pessoa cuidada."
  },
  {
    "id": 2126,
    "topicId": 2,
    "question": "Na análise biomecânica e reológica de biomateriais em enfermagem, o/a articulação do tornozelo no salto e corrida desempenha um papel clínico crucial. Como se explica o seu comportamento à luz das propriedades mecânicas de tensão, elasticidade e materiais?",
    "options": [
      "Comporta-se como um biomaterial específico: alavanca de 2.ª classe onde o tendão de Aquiles ergue todo o peso corporal com VM > 1, multiplicando a força muscular em detrimento do deslocamento angular.",
      "Comporta-se como um corpo rígido perfeitamente indeformável que anula todas as forças da gravidade.",
      "Decompõe-se instantaneamente em vapor d'água ao atingir 37 °C no corpo.",
      "Atua como um condutor elétrico de alta voltagem que queima a mucosa do doente."
    ],
    "correctIndex": 0,
    "explanation": "O/A articulação do tornozelo no salto e corrida caracteriza-se biofisicamente por ser um alavanca de 2.ª classe onde o tendão de Aquiles ergue todo o peso corporal com VM > 1, multiplicando a força muscular em detrimento do deslocamento angular. Esta propriedade garante a adaptação funcional e a segurança do doente durante a intervenção clínica.",
    "distractorAnalysis": [
      "Opção incorreta: afirma que o/a articulação do tornozelo no salto e corrida atua como um fluido perfeitamente newtoniano incompressível à temperatura do zero absoluto.",
      "Opção incorreta: confunde a resposta elástica do material com decomposição radioativa espontânea por emissão gama.",
      "Opção incorreta: sugere que o/a articulação do tornozelo no salto e corrida perde a sua massa inercial quando entra em contacto com os tecidos humanos."
    ],
    "nursingApplication": "O enfermeiro aplica este princípio ao manipular o/a articulação do tornozelo no salto e corrida: compreender a sua elasticidade, módulo de deformação e limites de resistência evita falhas mecânicas iatrogénicas, roturas acidentais e lesões teciduais na pessoa cuidada."
  },
  {
    "id": 2127,
    "topicId": 2,
    "question": "Na análise biomecânica e reológica de biomateriais em enfermagem, o/a músculo braquial ao fletir o cotovelo em pronação desempenha um papel clínico crucial. Como se explica o seu comportamento à luz das propriedades mecânicas de tensão, elasticidade e materiais?",
    "options": [
      "Comporta-se como um biomaterial específico: alavanca de 3.ª classe com inserção na apófise coronóideia da ulna (d_P = 3 cm) e resistência na mão (d_R = 32 cm, VM = 0,09), exigindo 11 vezes mais força muscular do que o peso sustentado.",
      "Comporta-se como um corpo rígido perfeitamente indeformável que anula todas as forças da gravidade.",
      "Decompõe-se instantaneamente em vapor d'água ao atingir 37 °C no corpo.",
      "Atua como um condutor elétrico de alta voltagem que queima a mucosa do doente."
    ],
    "correctIndex": 0,
    "explanation": "O/A músculo braquial ao fletir o cotovelo em pronação caracteriza-se biofisicamente por ser um alavanca de 3.ª classe com inserção na apófise coronóideia da ulna (d_P = 3 cm) e resistência na mão (d_R = 32 cm, VM = 0,09), exigindo 11 vezes mais força muscular do que o peso sustentado. Esta propriedade garante a adaptação funcional e a segurança do doente durante a intervenção clínica.",
    "distractorAnalysis": [
      "Opção incorreta: afirma que o/a músculo braquial ao fletir o cotovelo em pronação atua como um fluido perfeitamente newtoniano incompressível à temperatura do zero absoluto.",
      "Opção incorreta: confunde a resposta elástica do material com decomposição radioativa espontânea por emissão gama.",
      "Opção incorreta: sugere que o/a músculo braquial ao fletir o cotovelo em pronação perde a sua massa inercial quando entra em contacto com os tecidos humanos."
    ],
    "nursingApplication": "O enfermeiro aplica este princípio ao manipular o/a músculo braquial ao fletir o cotovelo em pronação: compreender a sua elasticidade, módulo de deformação e limites de resistência evita falhas mecânicas iatrogénicas, roturas acidentais e lesões teciduais na pessoa cuidada."
  },
  {
    "id": 2128,
    "topicId": 2,
    "question": "Na análise biomecânica e reológica de biomateriais em enfermagem, o/a articulação da anca no apoio unipodal (músculo glúteo médio) desempenha um papel clínico crucial. Como se explica o seu comportamento à luz das propriedades mecânicas de tensão, elasticidade e materiais?",
    "options": [
      "Comporta-se como um biomaterial específico: alavanca de 1.ª classe com fulcro na cabeça femoral, o peso do tronco desce medialmente e o glúteo médio traciona lateralmente o trocânter maior para nivelar a bacia.",
      "Comporta-se como um corpo rígido perfeitamente indeformável que anula todas as forças da gravidade.",
      "Decompõe-se instantaneamente em vapor d'água ao atingir 37 °C no corpo.",
      "Atua como um condutor elétrico de alta voltagem que queima a mucosa do doente."
    ],
    "correctIndex": 0,
    "explanation": "O/A articulação da anca no apoio unipodal (músculo glúteo médio) caracteriza-se biofisicamente por ser um alavanca de 1.ª classe com fulcro na cabeça femoral, o peso do tronco desce medialmente e o glúteo médio traciona lateralmente o trocânter maior para nivelar a bacia. Esta propriedade garante a adaptação funcional e a segurança do doente durante a intervenção clínica.",
    "distractorAnalysis": [
      "Opção incorreta: afirma que o/a articulação da anca no apoio unipodal (músculo glúteo médio) atua como um fluido perfeitamente newtoniano incompressível à temperatura do zero absoluto.",
      "Opção incorreta: confunde a resposta elástica do material com decomposição radioativa espontânea por emissão gama.",
      "Opção incorreta: sugere que o/a articulação da anca no apoio unipodal (músculo glúteo médio) perde a sua massa inercial quando entra em contacto com os tecidos humanos."
    ],
    "nursingApplication": "O enfermeiro aplica este princípio ao manipular o/a articulação da anca no apoio unipodal (músculo glúteo médio): compreender a sua elasticidade, módulo de deformação e limites de resistência evita falhas mecânicas iatrogénicas, roturas acidentais e lesões teciduais na pessoa cuidada."
  },
  {
    "id": 2129,
    "topicId": 2,
    "question": "Na análise biomecânica e reológica de biomateriais em enfermagem, o/a tesoura de corte de ligaduras de Lister com ponta romba desempenha um papel clínico crucial. Como se explica o seu comportamento à luz das propriedades mecânicas de tensão, elasticidade e materiais?",
    "options": [
      "Comporta-se como um biomaterial específico: alavanca de 1.ª classe com lâminas anguladas que permitem deslizar sob a ligadura rente à pele sem ferir o doente, concentrando a força na extremidade de corte.",
      "Comporta-se como um corpo rígido perfeitamente indeformável que anula todas as forças da gravidade.",
      "Decompõe-se instantaneamente em vapor d'água ao atingir 37 °C no corpo.",
      "Atua como um condutor elétrico de alta voltagem que queima a mucosa do doente."
    ],
    "correctIndex": 0,
    "explanation": "O/A tesoura de corte de ligaduras de Lister com ponta romba caracteriza-se biofisicamente por ser um alavanca de 1.ª classe com lâminas anguladas que permitem deslizar sob a ligadura rente à pele sem ferir o doente, concentrando a força na extremidade de corte. Esta propriedade garante a adaptação funcional e a segurança do doente durante a intervenção clínica.",
    "distractorAnalysis": [
      "Opção incorreta: afirma que o/a tesoura de corte de ligaduras de Lister com ponta romba atua como um fluido perfeitamente newtoniano incompressível à temperatura do zero absoluto.",
      "Opção incorreta: confunde a resposta elástica do material com decomposição radioativa espontânea por emissão gama.",
      "Opção incorreta: sugere que o/a tesoura de corte de ligaduras de Lister com ponta romba perde a sua massa inercial quando entra em contacto com os tecidos humanos."
    ],
    "nursingApplication": "O enfermeiro aplica este princípio ao manipular o/a tesoura de corte de ligaduras de Lister com ponta romba: compreender a sua elasticidade, módulo de deformação e limites de resistência evita falhas mecânicas iatrogénicas, roturas acidentais e lesões teciduais na pessoa cuidada."
  },
  {
    "id": 2130,
    "topicId": 2,
    "question": "Na análise biomecânica e reológica de biomateriais em enfermagem, o/a porta-agulhas de Mayo-Hegar com mandíbulas de carboneto de tungsténio desempenha um papel clínico crucial. Como se explica o seu comportamento à luz das propriedades mecânicas de tensão, elasticidade e materiais?",
    "options": [
      "Comporta-se como um biomaterial específico: alavanca de 1.ª classe com hastes compridas e bicos curtos estriados que geram enorme torque de preensão impedindo que a agulha cirúrgica curve ou deslize durante a sutura de tecidos espessos.",
      "Comporta-se como um corpo rígido perfeitamente indeformável que anula todas as forças da gravidade.",
      "Decompõe-se instantaneamente em vapor d'água ao atingir 37 °C no corpo.",
      "Atua como um condutor elétrico de alta voltagem que queima a mucosa do doente."
    ],
    "correctIndex": 0,
    "explanation": "O/A porta-agulhas de Mayo-Hegar com mandíbulas de carboneto de tungsténio caracteriza-se biofisicamente por ser um alavanca de 1.ª classe com hastes compridas e bicos curtos estriados que geram enorme torque de preensão impedindo que a agulha cirúrgica curve ou deslize durante a sutura de tecidos espessos. Esta propriedade garante a adaptação funcional e a segurança do doente durante a intervenção clínica.",
    "distractorAnalysis": [
      "Opção incorreta: afirma que o/a porta-agulhas de Mayo-Hegar com mandíbulas de carboneto de tungsténio atua como um fluido perfeitamente newtoniano incompressível à temperatura do zero absoluto.",
      "Opção incorreta: confunde a resposta elástica do material com decomposição radioativa espontânea por emissão gama.",
      "Opção incorreta: sugere que o/a porta-agulhas de Mayo-Hegar com mandíbulas de carboneto de tungsténio perde a sua massa inercial quando entra em contacto com os tecidos humanos."
    ],
    "nursingApplication": "O enfermeiro aplica este princípio ao manipular o/a porta-agulhas de Mayo-Hegar com mandíbulas de carboneto de tungsténio: compreender a sua elasticidade, módulo de deformação e limites de resistência evita falhas mecânicas iatrogénicas, roturas acidentais e lesões teciduais na pessoa cuidada."
  },
  {
    "id": 2131,
    "topicId": 2,
    "question": "Na análise biomecânica e reológica de biomateriais em enfermagem, o/a mandíbula e músculo masséter ao morder um comprimido desempenha um papel clínico crucial. Como se explica o seu comportamento à luz das propriedades mecânicas de tensão, elasticidade e materiais?",
    "options": [
      "Comporta-se como um biomaterial específico: alavanca de 3.ª classe onde a força nos molares posteriores é muito maior do que nos incisivos anteriores devido ao menor braço de resistência.",
      "Comporta-se como um corpo rígido perfeitamente indeformável que anula todas as forças da gravidade.",
      "Decompõe-se instantaneamente em vapor d'água ao atingir 37 °C no corpo.",
      "Atua como um condutor elétrico de alta voltagem que queima a mucosa do doente."
    ],
    "correctIndex": 0,
    "explanation": "O/A mandíbula e músculo masséter ao morder um comprimido caracteriza-se biofisicamente por ser um alavanca de 3.ª classe onde a força nos molares posteriores é muito maior do que nos incisivos anteriores devido ao menor braço de resistência. Esta propriedade garante a adaptação funcional e a segurança do doente durante a intervenção clínica.",
    "distractorAnalysis": [
      "Opção incorreta: afirma que o/a mandíbula e músculo masséter ao morder um comprimido atua como um fluido perfeitamente newtoniano incompressível à temperatura do zero absoluto.",
      "Opção incorreta: confunde a resposta elástica do material com decomposição radioativa espontânea por emissão gama.",
      "Opção incorreta: sugere que o/a mandíbula e músculo masséter ao morder um comprimido perde a sua massa inercial quando entra em contacto com os tecidos humanos."
    ],
    "nursingApplication": "O enfermeiro aplica este princípio ao manipular o/a mandíbula e músculo masséter ao morder um comprimido: compreender a sua elasticidade, módulo de deformação e limites de resistência evita falhas mecânicas iatrogénicas, roturas acidentais e lesões teciduais na pessoa cuidada."
  },
  {
    "id": 2132,
    "topicId": 2,
    "question": "Na análise biomecânica e reológica de biomateriais em enfermagem, o/a movimento de abdução da coxa pelo tensor da fáscia lata desempenha um papel clínico crucial. Como se explica o seu comportamento à luz das propriedades mecânicas de tensão, elasticidade e materiais?",
    "options": [
      "Comporta-se como um biomaterial específico: alavanca de 3.ª classe adaptada para estabilidade lateral e marcha bípede rápida com ampla amplitude de movimento pélvico.",
      "Comporta-se como um corpo rígido perfeitamente indeformável que anula todas as forças da gravidade.",
      "Decompõe-se instantaneamente em vapor d'água ao atingir 37 °C no corpo.",
      "Atua como um condutor elétrico de alta voltagem que queima a mucosa do doente."
    ],
    "correctIndex": 0,
    "explanation": "O/A movimento de abdução da coxa pelo tensor da fáscia lata caracteriza-se biofisicamente por ser um alavanca de 3.ª classe adaptada para estabilidade lateral e marcha bípede rápida com ampla amplitude de movimento pélvico. Esta propriedade garante a adaptação funcional e a segurança do doente durante a intervenção clínica.",
    "distractorAnalysis": [
      "Opção incorreta: afirma que o/a movimento de abdução da coxa pelo tensor da fáscia lata atua como um fluido perfeitamente newtoniano incompressível à temperatura do zero absoluto.",
      "Opção incorreta: confunde a resposta elástica do material com decomposição radioativa espontânea por emissão gama.",
      "Opção incorreta: sugere que o/a movimento de abdução da coxa pelo tensor da fáscia lata perde a sua massa inercial quando entra em contacto com os tecidos humanos."
    ],
    "nursingApplication": "O enfermeiro aplica este princípio ao manipular o/a movimento de abdução da coxa pelo tensor da fáscia lata: compreender a sua elasticidade, módulo de deformação e limites de resistência evita falhas mecânicas iatrogénicas, roturas acidentais e lesões teciduais na pessoa cuidada."
  },
  {
    "id": 2133,
    "topicId": 2,
    "question": "Na análise biomecânica e reológica de biomateriais em enfermagem, o/a espátula lingual na inspeção da orofaringe pelo enfermeiro desempenha um papel clínico crucial. Como se explica o seu comportamento à luz das propriedades mecânicas de tensão, elasticidade e materiais?",
    "options": [
      "Comporta-se como um biomaterial específico: alavanca de 1.ª classe usando os lábios/dentes como fulcro para deprimir suavemente a base da língua com pequeno esforço na haste exterior.",
      "Comporta-se como um corpo rígido perfeitamente indeformável que anula todas as forças da gravidade.",
      "Decompõe-se instantaneamente em vapor d'água ao atingir 37 °C no corpo.",
      "Atua como um condutor elétrico de alta voltagem que queima a mucosa do doente."
    ],
    "correctIndex": 0,
    "explanation": "O/A espátula lingual na inspeção da orofaringe pelo enfermeiro caracteriza-se biofisicamente por ser um alavanca de 1.ª classe usando os lábios/dentes como fulcro para deprimir suavemente a base da língua com pequeno esforço na haste exterior. Esta propriedade garante a adaptação funcional e a segurança do doente durante a intervenção clínica.",
    "distractorAnalysis": [
      "Opção incorreta: afirma que o/a espátula lingual na inspeção da orofaringe pelo enfermeiro atua como um fluido perfeitamente newtoniano incompressível à temperatura do zero absoluto.",
      "Opção incorreta: confunde a resposta elástica do material com decomposição radioativa espontânea por emissão gama.",
      "Opção incorreta: sugere que o/a espátula lingual na inspeção da orofaringe pelo enfermeiro perde a sua massa inercial quando entra em contacto com os tecidos humanos."
    ],
    "nursingApplication": "O enfermeiro aplica este princípio ao manipular o/a espátula lingual na inspeção da orofaringe pelo enfermeiro: compreender a sua elasticidade, módulo de deformação e limites de resistência evita falhas mecânicas iatrogénicas, roturas acidentais e lesões teciduais na pessoa cuidada."
  },
  {
    "id": 2134,
    "topicId": 2,
    "question": "Na análise biomecânica e reológica de biomateriais em enfermagem, o/a carrinho elevador elétrico de transferência de doentes (guindaste com braço mecânico) desempenha um papel clínico crucial. Como se explica o seu comportamento à luz das propriedades mecânicas de tensão, elasticidade e materiais?",
    "options": [
      "Comporta-se como um biomaterial específico: alavanca móvel atuada por pistão hidráulico que distribui a carga de elevação com vantagem mecânica de engenharia para transferir doentes tetraplégicos.",
      "Comporta-se como um corpo rígido perfeitamente indeformável que anula todas as forças da gravidade.",
      "Decompõe-se instantaneamente em vapor d'água ao atingir 37 °C no corpo.",
      "Atua como um condutor elétrico de alta voltagem que queima a mucosa do doente."
    ],
    "correctIndex": 0,
    "explanation": "O/A carrinho elevador elétrico de transferência de doentes (guindaste com braço mecânico) caracteriza-se biofisicamente por ser um alavanca móvel atuada por pistão hidráulico que distribui a carga de elevação com vantagem mecânica de engenharia para transferir doentes tetraplégicos. Esta propriedade garante a adaptação funcional e a segurança do doente durante a intervenção clínica.",
    "distractorAnalysis": [
      "Opção incorreta: afirma que o/a carrinho elevador elétrico de transferência de doentes (guindaste com braço mecânico) atua como um fluido perfeitamente newtoniano incompressível à temperatura do zero absoluto.",
      "Opção incorreta: confunde a resposta elástica do material com decomposição radioativa espontânea por emissão gama.",
      "Opção incorreta: sugere que o/a carrinho elevador elétrico de transferência de doentes (guindaste com braço mecânico) perde a sua massa inercial quando entra em contacto com os tecidos humanos."
    ],
    "nursingApplication": "O enfermeiro aplica este princípio ao manipular o/a carrinho elevador elétrico de transferência de doentes (guindaste com braço mecânico): compreender a sua elasticidade, módulo de deformação e limites de resistência evita falhas mecânicas iatrogénicas, roturas acidentais e lesões teciduais na pessoa cuidada."
  },
  {
    "id": 2135,
    "topicId": 2,
    "question": "Na análise biomecânica e reológica de biomateriais em enfermagem, o/a fio de sutura monofilamentar de poliamida (Nylon) 3-0 desempenha um papel clínico crucial. Como se explica o seu comportamento à luz das propriedades mecânicas de tensão, elasticidade e materiais?",
    "options": [
      "Comporta-se como um biomaterial específico: tensão máxima de tração de cerca de 450 MPa com elevada memória elástica, exigindo nós cirúrgicos múltiplos (3 a 4 nós) para evitar que o nó escorregue e desfaça a sutura.",
      "Comporta-se como um corpo rígido perfeitamente indeformável que anula todas as forças da gravidade.",
      "Decompõe-se instantaneamente em vapor d'água ao atingir 37 °C no corpo.",
      "Atua como um condutor elétrico de alta voltagem que queima a mucosa do doente."
    ],
    "correctIndex": 0,
    "explanation": "O/A fio de sutura monofilamentar de poliamida (Nylon) 3-0 caracteriza-se biofisicamente por ser um tensão máxima de tração de cerca de 450 MPa com elevada memória elástica, exigindo nós cirúrgicos múltiplos (3 a 4 nós) para evitar que o nó escorregue e desfaça a sutura. Esta propriedade garante a adaptação funcional e a segurança do doente durante a intervenção clínica.",
    "distractorAnalysis": [
      "Opção incorreta: afirma que o/a fio de sutura monofilamentar de poliamida (Nylon) 3-0 atua como um fluido perfeitamente newtoniano incompressível à temperatura do zero absoluto.",
      "Opção incorreta: confunde a resposta elástica do material com decomposição radioativa espontânea por emissão gama.",
      "Opção incorreta: sugere que o/a fio de sutura monofilamentar de poliamida (Nylon) 3-0 perde a sua massa inercial quando entra em contacto com os tecidos humanos."
    ],
    "nursingApplication": "O enfermeiro aplica este princípio ao manipular o/a fio de sutura monofilamentar de poliamida (Nylon) 3-0: compreender a sua elasticidade, módulo de deformação e limites de resistência evita falhas mecânicas iatrogénicas, roturas acidentais e lesões teciduais na pessoa cuidada."
  },
  {
    "id": 2136,
    "topicId": 2,
    "question": "Na análise biomecânica e reológica de biomateriais em enfermagem, o/a pele humana jovem vs pele senil com dermatoporose desempenha um papel clínico crucial. Como se explica o seu comportamento à luz das propriedades mecânicas de tensão, elasticidade e materiais?",
    "options": [
      "Comporta-se como um biomaterial específico: a pele jovem tem rica matriz de fibras de elastina e colagénio tipo I com curva tensão-deformação ampla e alta resiliência; a pele senil perde 80% da elastina, tornando-se frágil com rotura à mínima tensão tangencial.",
      "Comporta-se como um corpo rígido perfeitamente indeformável que anula todas as forças da gravidade.",
      "Decompõe-se instantaneamente em vapor d'água ao atingir 37 °C no corpo.",
      "Atua como um condutor elétrico de alta voltagem que queima a mucosa do doente."
    ],
    "correctIndex": 0,
    "explanation": "O/A pele humana jovem vs pele senil com dermatoporose caracteriza-se biofisicamente por ser um a pele jovem tem rica matriz de fibras de elastina e colagénio tipo I com curva tensão-deformação ampla e alta resiliência; a pele senil perde 80% da elastina, tornando-se frágil com rotura à mínima tensão tangencial. Esta propriedade garante a adaptação funcional e a segurança do doente durante a intervenção clínica.",
    "distractorAnalysis": [
      "Opção incorreta: afirma que o/a pele humana jovem vs pele senil com dermatoporose atua como um fluido perfeitamente newtoniano incompressível à temperatura do zero absoluto.",
      "Opção incorreta: confunde a resposta elástica do material com decomposição radioativa espontânea por emissão gama.",
      "Opção incorreta: sugere que o/a pele humana jovem vs pele senil com dermatoporose perde a sua massa inercial quando entra em contacto com os tecidos humanos."
    ],
    "nursingApplication": "O enfermeiro aplica este princípio ao manipular o/a pele humana jovem vs pele senil com dermatoporose: compreender a sua elasticidade, módulo de deformação e limites de resistência evita falhas mecânicas iatrogénicas, roturas acidentais e lesões teciduais na pessoa cuidada."
  },
  {
    "id": 2137,
    "topicId": 2,
    "question": "Na análise biomecânica e reológica de biomateriais em enfermagem, o/a tendão calcâneo (tendão de Aquiles) sob carga máxima desempenha um papel clínico crucial. Como se explica o seu comportamento à luz das propriedades mecânicas de tensão, elasticidade e materiais?",
    "options": [
      "Comporta-se como um biomaterial específico: suporta tensões de tração superiores a 100 MPa e forças de até 8000 N durante a corrida, deformando-se elasticamente 6 a 8% antes de atingir o limiar de microrrotura.",
      "Comporta-se como um corpo rígido perfeitamente indeformável que anula todas as forças da gravidade.",
      "Decompõe-se instantaneamente em vapor d'água ao atingir 37 °C no corpo.",
      "Atua como um condutor elétrico de alta voltagem que queima a mucosa do doente."
    ],
    "correctIndex": 0,
    "explanation": "O/A tendão calcâneo (tendão de Aquiles) sob carga máxima caracteriza-se biofisicamente por ser um suporta tensões de tração superiores a 100 MPa e forças de até 8000 N durante a corrida, deformando-se elasticamente 6 a 8% antes de atingir o limiar de microrrotura. Esta propriedade garante a adaptação funcional e a segurança do doente durante a intervenção clínica.",
    "distractorAnalysis": [
      "Opção incorreta: afirma que o/a tendão calcâneo (tendão de Aquiles) sob carga máxima atua como um fluido perfeitamente newtoniano incompressível à temperatura do zero absoluto.",
      "Opção incorreta: confunde a resposta elástica do material com decomposição radioativa espontânea por emissão gama.",
      "Opção incorreta: sugere que o/a tendão calcâneo (tendão de Aquiles) sob carga máxima perde a sua massa inercial quando entra em contacto com os tecidos humanos."
    ],
    "nursingApplication": "O enfermeiro aplica este princípio ao manipular o/a tendão calcâneo (tendão de Aquiles) sob carga máxima: compreender a sua elasticidade, módulo de deformação e limites de resistência evita falhas mecânicas iatrogénicas, roturas acidentais e lesões teciduais na pessoa cuidada."
  },
  {
    "id": 2138,
    "topicId": 2,
    "question": "Na análise biomecânica e reológica de biomateriais em enfermagem, o/a artéria aorta elástica humana e efeito Windkessel desempenha um papel clínico crucial. Como se explica o seu comportamento à luz das propriedades mecânicas de tensão, elasticidade e materiais?",
    "options": [
      "Comporta-se como um biomaterial específico: a parede da aorta possui alto teor de elastina (baixo Módulo de Young), expandindo-se elasticamente na sístole para absorver a onda de pressão e retraindo-se passivamente na diástole para manter o fluxo contínuo.",
      "Comporta-se como um corpo rígido perfeitamente indeformável que anula todas as forças da gravidade.",
      "Decompõe-se instantaneamente em vapor d'água ao atingir 37 °C no corpo.",
      "Atua como um condutor elétrico de alta voltagem que queima a mucosa do doente."
    ],
    "correctIndex": 0,
    "explanation": "O/A artéria aorta elástica humana e efeito Windkessel caracteriza-se biofisicamente por ser um a parede da aorta possui alto teor de elastina (baixo Módulo de Young), expandindo-se elasticamente na sístole para absorver a onda de pressão e retraindo-se passivamente na diástole para manter o fluxo contínuo. Esta propriedade garante a adaptação funcional e a segurança do doente durante a intervenção clínica.",
    "distractorAnalysis": [
      "Opção incorreta: afirma que o/a artéria aorta elástica humana e efeito Windkessel atua como um fluido perfeitamente newtoniano incompressível à temperatura do zero absoluto.",
      "Opção incorreta: confunde a resposta elástica do material com decomposição radioativa espontânea por emissão gama.",
      "Opção incorreta: sugere que o/a artéria aorta elástica humana e efeito Windkessel perde a sua massa inercial quando entra em contacto com os tecidos humanos."
    ],
    "nursingApplication": "O enfermeiro aplica este princípio ao manipular o/a artéria aorta elástica humana e efeito Windkessel: compreender a sua elasticidade, módulo de deformação e limites de resistência evita falhas mecânicas iatrogénicas, roturas acidentais e lesões teciduais na pessoa cuidada."
  },
  {
    "id": 2139,
    "topicId": 2,
    "question": "Na análise biomecânica e reológica de biomateriais em enfermagem, o/a ligamento cruzado anterior (LCA) do joelho desempenha um papel clínico crucial. Como se explica o seu comportamento à luz das propriedades mecânicas de tensão, elasticidade e materiais?",
    "options": [
      "Comporta-se como um biomaterial específico: comportamento viscoelástico com limite elástico em torno de 15% de deformação; torções bruscas com o pé fixo no solo ultrapassam a tensão de rutura, provocando rotura completa dos fascículos colagénicos.",
      "Comporta-se como um corpo rígido perfeitamente indeformável que anula todas as forças da gravidade.",
      "Decompõe-se instantaneamente em vapor d'água ao atingir 37 °C no corpo.",
      "Atua como um condutor elétrico de alta voltagem que queima a mucosa do doente."
    ],
    "correctIndex": 0,
    "explanation": "O/A ligamento cruzado anterior (LCA) do joelho caracteriza-se biofisicamente por ser um comportamento viscoelástico com limite elástico em torno de 15% de deformação; torções bruscas com o pé fixo no solo ultrapassam a tensão de rutura, provocando rotura completa dos fascículos colagénicos. Esta propriedade garante a adaptação funcional e a segurança do doente durante a intervenção clínica.",
    "distractorAnalysis": [
      "Opção incorreta: afirma que o/a ligamento cruzado anterior (LCA) do joelho atua como um fluido perfeitamente newtoniano incompressível à temperatura do zero absoluto.",
      "Opção incorreta: confunde a resposta elástica do material com decomposição radioativa espontânea por emissão gama.",
      "Opção incorreta: sugere que o/a ligamento cruzado anterior (LCA) do joelho perde a sua massa inercial quando entra em contacto com os tecidos humanos."
    ],
    "nursingApplication": "O enfermeiro aplica este princípio ao manipular o/a ligamento cruzado anterior (LCA) do joelho: compreender a sua elasticidade, módulo de deformação e limites de resistência evita falhas mecânicas iatrogénicas, roturas acidentais e lesões teciduais na pessoa cuidada."
  },
  {
    "id": 2140,
    "topicId": 2,
    "question": "Na análise biomecânica e reológica de biomateriais em enfermagem, o/a balão de embolectomia de Fogarty para remoção de trombos arteriais desempenha um papel clínico crucial. Como se explica o seu comportamento à luz das propriedades mecânicas de tensão, elasticidade e materiais?",
    "options": [
      "Comporta-se como um biomaterial específico: balão de elastómero de látex com calibração volumétrica rigorosa para ocluir a artéria sem exceder a tensão elástica da túnica média do vaso, prevenindo dissecções arteriais iatrogénicas.",
      "Comporta-se como um corpo rígido perfeitamente indeformável que anula todas as forças da gravidade.",
      "Decompõe-se instantaneamente em vapor d'água ao atingir 37 °C no corpo.",
      "Atua como um condutor elétrico de alta voltagem que queima a mucosa do doente."
    ],
    "correctIndex": 0,
    "explanation": "O/A balão de embolectomia de Fogarty para remoção de trombos arteriais caracteriza-se biofisicamente por ser um balão de elastómero de látex com calibração volumétrica rigorosa para ocluir a artéria sem exceder a tensão elástica da túnica média do vaso, prevenindo dissecções arteriais iatrogénicas. Esta propriedade garante a adaptação funcional e a segurança do doente durante a intervenção clínica.",
    "distractorAnalysis": [
      "Opção incorreta: afirma que o/a balão de embolectomia de Fogarty para remoção de trombos arteriais atua como um fluido perfeitamente newtoniano incompressível à temperatura do zero absoluto.",
      "Opção incorreta: confunde a resposta elástica do material com decomposição radioativa espontânea por emissão gama.",
      "Opção incorreta: sugere que o/a balão de embolectomia de Fogarty para remoção de trombos arteriais perde a sua massa inercial quando entra em contacto com os tecidos humanos."
    ],
    "nursingApplication": "O enfermeiro aplica este princípio ao manipular o/a balão de embolectomia de Fogarty para remoção de trombos arteriais: compreender a sua elasticidade, módulo de deformação e limites de resistência evita falhas mecânicas iatrogénicas, roturas acidentais e lesões teciduais na pessoa cuidada."
  },
  {
    "id": 2141,
    "topicId": 2,
    "question": "Na análise biomecânica e reológica de biomateriais em enfermagem, o/a compressas de gaze de algodão hidrófilo desempenha um papel clínico crucial. Como se explica o seu comportamento à luz das propriedades mecânicas de tensão, elasticidade e materiais?",
    "options": [
      "Comporta-se como um biomaterial específico: estrutura têxtil com comportamento mecânico de absorção por capilaridade e retenção de fluidos sem libertação de resíduos de fibras no leito cirúrgico.",
      "Comporta-se como um corpo rígido perfeitamente indeformável que anula todas as forças da gravidade.",
      "Decompõe-se instantaneamente em vapor d'água ao atingir 37 °C no corpo.",
      "Atua como um condutor elétrico de alta voltagem que queima a mucosa do doente."
    ],
    "correctIndex": 0,
    "explanation": "O/A compressas de gaze de algodão hidrófilo caracteriza-se biofisicamente por ser um estrutura têxtil com comportamento mecânico de absorção por capilaridade e retenção de fluidos sem libertação de resíduos de fibras no leito cirúrgico. Esta propriedade garante a adaptação funcional e a segurança do doente durante a intervenção clínica.",
    "distractorAnalysis": [
      "Opção incorreta: afirma que o/a compressas de gaze de algodão hidrófilo atua como um fluido perfeitamente newtoniano incompressível à temperatura do zero absoluto.",
      "Opção incorreta: confunde a resposta elástica do material com decomposição radioativa espontânea por emissão gama.",
      "Opção incorreta: sugere que o/a compressas de gaze de algodão hidrófilo perde a sua massa inercial quando entra em contacto com os tecidos humanos."
    ],
    "nursingApplication": "O enfermeiro aplica este princípio ao manipular o/a compressas de gaze de algodão hidrófilo: compreender a sua elasticidade, módulo de deformação e limites de resistência evita falhas mecânicas iatrogénicas, roturas acidentais e lesões teciduais na pessoa cuidada."
  },
  {
    "id": 2142,
    "topicId": 2,
    "question": "Na análise biomecânica e reológica de biomateriais em enfermagem, o/a fio de sutura farpado unidirecional sem necessidade de nós (tipo V-Loc) desempenha um papel clínico crucial. Como se explica o seu comportamento à luz das propriedades mecânicas de tensão, elasticidade e materiais?",
    "options": [
      "Comporta-se como um biomaterial específico: fio sintético absorvível com microfarpas que ancoram nas fibras de colagénio, distribuindo a tensão de aproximação tecidual uniformemente ao longo de toda a ferida.",
      "Comporta-se como um corpo rígido perfeitamente indeformável que anula todas as forças da gravidade.",
      "Decompõe-se instantaneamente em vapor d'água ao atingir 37 °C no corpo.",
      "Atua como um condutor elétrico de alta voltagem que queima a mucosa do doente."
    ],
    "correctIndex": 0,
    "explanation": "O/A fio de sutura farpado unidirecional sem necessidade de nós (tipo V-Loc) caracteriza-se biofisicamente por ser um fio sintético absorvível com microfarpas que ancoram nas fibras de colagénio, distribuindo a tensão de aproximação tecidual uniformemente ao longo de toda a ferida. Esta propriedade garante a adaptação funcional e a segurança do doente durante a intervenção clínica.",
    "distractorAnalysis": [
      "Opção incorreta: afirma que o/a fio de sutura farpado unidirecional sem necessidade de nós (tipo V-Loc) atua como um fluido perfeitamente newtoniano incompressível à temperatura do zero absoluto.",
      "Opção incorreta: confunde a resposta elástica do material com decomposição radioativa espontânea por emissão gama.",
      "Opção incorreta: sugere que o/a fio de sutura farpado unidirecional sem necessidade de nós (tipo V-Loc) perde a sua massa inercial quando entra em contacto com os tecidos humanos."
    ],
    "nursingApplication": "O enfermeiro aplica este princípio ao manipular o/a fio de sutura farpado unidirecional sem necessidade de nós (tipo V-Loc): compreender a sua elasticidade, módulo de deformação e limites de resistência evita falhas mecânicas iatrogénicas, roturas acidentais e lesões teciduais na pessoa cuidada."
  },
  {
    "id": 2143,
    "topicId": 2,
    "question": "Na análise biomecânica e reológica de biomateriais em enfermagem, o/a tubo de drenagem pleural torácico de silicone com linha radiopaca desempenha um papel clínico crucial. Como se explica o seu comportamento à luz das propriedades mecânicas de tensão, elasticidade e materiais?",
    "options": [
      "Comporta-se como um biomaterial específico: tubo com rigidez calculada para não colabar sob a pressão negativa intrapleural de -20 cmH₂O durante a inspiração profunda, mantendo a drenagem de ar ou sangue desobstruída.",
      "Comporta-se como um corpo rígido perfeitamente indeformável que anula todas as forças da gravidade.",
      "Decompõe-se instantaneamente em vapor d'água ao atingir 37 °C no corpo.",
      "Atua como um condutor elétrico de alta voltagem que queima a mucosa do doente."
    ],
    "correctIndex": 0,
    "explanation": "O/A tubo de drenagem pleural torácico de silicone com linha radiopaca caracteriza-se biofisicamente por ser um tubo com rigidez calculada para não colabar sob a pressão negativa intrapleural de -20 cmH₂O durante a inspiração profunda, mantendo a drenagem de ar ou sangue desobstruída. Esta propriedade garante a adaptação funcional e a segurança do doente durante a intervenção clínica.",
    "distractorAnalysis": [
      "Opção incorreta: afirma que o/a tubo de drenagem pleural torácico de silicone com linha radiopaca atua como um fluido perfeitamente newtoniano incompressível à temperatura do zero absoluto.",
      "Opção incorreta: confunde a resposta elástica do material com decomposição radioativa espontânea por emissão gama.",
      "Opção incorreta: sugere que o/a tubo de drenagem pleural torácico de silicone com linha radiopaca perde a sua massa inercial quando entra em contacto com os tecidos humanos."
    ],
    "nursingApplication": "O enfermeiro aplica este princípio ao manipular o/a tubo de drenagem pleural torácico de silicone com linha radiopaca: compreender a sua elasticidade, módulo de deformação e limites de resistência evita falhas mecânicas iatrogénicas, roturas acidentais e lesões teciduais na pessoa cuidada."
  },
  {
    "id": 2144,
    "topicId": 2,
    "question": "Na análise biomecânica e reológica de biomateriais em enfermagem, o/a luvas cirúrgicas de biopolímero de neoprene desempenha um papel clínico crucial. Como se explica o seu comportamento à luz das propriedades mecânicas de tensão, elasticidade e materiais?",
    "options": [
      "Comporta-se como um biomaterial específico: oferecem elasticidade e tensão de deformação semelhantes ao látex natural com taxa de deformação relativa ε > 600% antes da rutura, sendo isentas das proteínas alergénicas do látex.",
      "Comporta-se como um corpo rígido perfeitamente indeformável que anula todas as forças da gravidade.",
      "Decompõe-se instantaneamente em vapor d'água ao atingir 37 °C no corpo.",
      "Atua como um condutor elétrico de alta voltagem que queima a mucosa do doente."
    ],
    "correctIndex": 0,
    "explanation": "O/A luvas cirúrgicas de biopolímero de neoprene caracteriza-se biofisicamente por ser um oferecem elasticidade e tensão de deformação semelhantes ao látex natural com taxa de deformação relativa ε > 600% antes da rutura, sendo isentas das proteínas alergénicas do látex. Esta propriedade garante a adaptação funcional e a segurança do doente durante a intervenção clínica.",
    "distractorAnalysis": [
      "Opção incorreta: afirma que o/a luvas cirúrgicas de biopolímero de neoprene atua como um fluido perfeitamente newtoniano incompressível à temperatura do zero absoluto.",
      "Opção incorreta: confunde a resposta elástica do material com decomposição radioativa espontânea por emissão gama.",
      "Opção incorreta: sugere que o/a luvas cirúrgicas de biopolímero de neoprene perde a sua massa inercial quando entra em contacto com os tecidos humanos."
    ],
    "nursingApplication": "O enfermeiro aplica este princípio ao manipular o/a luvas cirúrgicas de biopolímero de neoprene: compreender a sua elasticidade, módulo de deformação e limites de resistência evita falhas mecânicas iatrogénicas, roturas acidentais e lesões teciduais na pessoa cuidada."
  },
  {
    "id": 2145,
    "topicId": 2,
    "question": "Na física aplicada aos materiais e dispositivos de saúde, como se caracteriza o comportamento do/a módulo elástico de Young de próteses de titânio (E ~ 110 GPa) sob solicitações mecânicas?",
    "options": [
      "Caracteriza-se por: rigidez intermediária entre o osso cortical (18 GPa) e o aço cirúrgico (200 GPa), reduzindo o fenómeno de 'stress shielding' ou reabsorção óssea periprotésica por desuso mecânico.",
      "Caracteriza-se por ser infinitamente compressível como um gás ideal rarefeito.",
      "Caracteriza-se por quebrar instantaneamente ao toque de uma gota de água.",
      "Caracteriza-se por emitir ondas de rádio moduladas em frequência."
    ],
    "correctIndex": 0,
    "explanation": "O/A módulo elástico de Young de próteses de titânio (E ~ 110 GPa) atua na prática clínica através do seguinte mecanismo biomecânico: rigidez intermediária entre o osso cortical (18 GPa) e o aço cirúrgico (200 GPa), reduzindo o fenómeno de 'stress shielding' ou reabsorção óssea periprotésica por desuso mecânico.",
    "distractorAnalysis": [
      "Opção incorreta: considera que o/a módulo elástico de Young de próteses de titânio (E ~ 110 GPa) não obedece às leis da mecânica clássica por ser um material biológico.",
      "Opção incorreta: confunde módulo elástico com radioatividade nuclear artificial.",
      "Opção incorreta: sugere que o material perde a totalidade do seu peso ao ser desinfetado com álcool a 70%."
    ],
    "nursingApplication": "O enfermeiro vigia o desempenho do/a módulo elástico de Young de próteses de titânio (E ~ 110 GPa): o domínio destas propriedades assegura a prevenção de complicações vasculares, necrose de tecidos e falhas mecânicas durante os cuidados diários de saúde."
  },
  {
    "id": 2146,
    "topicId": 2,
    "question": "Na física aplicada aos materiais e dispositivos de saúde, como se caracteriza o comportamento do/a propriedades de fluência (creep) dos discos intervertebrais sob solicitações mecânicas?",
    "options": [
      "Caracteriza-se por: perda progressiva de água sob a carga vertical durante o dia com diminuição da altura do disco, recuperando a hidratação e a espessura elástica durante o repouso noturno no leito.",
      "Caracteriza-se por ser infinitamente compressível como um gás ideal rarefeito.",
      "Caracteriza-se por quebrar instantaneamente ao toque de uma gota de água.",
      "Caracteriza-se por emitir ondas de rádio moduladas em frequência."
    ],
    "correctIndex": 0,
    "explanation": "O/A propriedades de fluência (creep) dos discos intervertebrais atua na prática clínica através do seguinte mecanismo biomecânico: perda progressiva de água sob a carga vertical durante o dia com diminuição da altura do disco, recuperando a hidratação e a espessura elástica durante o repouso noturno no leito.",
    "distractorAnalysis": [
      "Opção incorreta: considera que o/a propriedades de fluência (creep) dos discos intervertebrais não obedece às leis da mecânica clássica por ser um material biológico.",
      "Opção incorreta: confunde módulo elástico com radioatividade nuclear artificial.",
      "Opção incorreta: sugere que o material perde a totalidade do seu peso ao ser desinfetado com álcool a 70%."
    ],
    "nursingApplication": "O enfermeiro vigia o desempenho do/a propriedades de fluência (creep) dos discos intervertebrais: o domínio destas propriedades assegura a prevenção de complicações vasculares, necrose de tecidos e falhas mecânicas durante os cuidados diários de saúde."
  },
  {
    "id": 2147,
    "topicId": 2,
    "question": "Na física aplicada aos materiais e dispositivos de saúde, como se caracteriza o comportamento do/a elasticidade das paredes arteriais no envelhecimento (arteriosclerose) sob solicitações mecânicas?",
    "options": [
      "Caracteriza-se por: substituição das fibras de elastina por fibras rígidas de colagénio, aumentando o Módulo de Young arterial e elevando a pressão arterial de pulso (sistólica muito alta com diastólica normal ou baixa).",
      "Caracteriza-se por ser infinitamente compressível como um gás ideal rarefeito.",
      "Caracteriza-se por quebrar instantaneamente ao toque de uma gota de água.",
      "Caracteriza-se por emitir ondas de rádio moduladas em frequência."
    ],
    "correctIndex": 0,
    "explanation": "O/A elasticidade das paredes arteriais no envelhecimento (arteriosclerose) atua na prática clínica através do seguinte mecanismo biomecânico: substituição das fibras de elastina por fibras rígidas de colagénio, aumentando o Módulo de Young arterial e elevando a pressão arterial de pulso (sistólica muito alta com diastólica normal ou baixa).",
    "distractorAnalysis": [
      "Opção incorreta: considera que o/a elasticidade das paredes arteriais no envelhecimento (arteriosclerose) não obedece às leis da mecânica clássica por ser um material biológico.",
      "Opção incorreta: confunde módulo elástico com radioatividade nuclear artificial.",
      "Opção incorreta: sugere que o material perde a totalidade do seu peso ao ser desinfetado com álcool a 70%."
    ],
    "nursingApplication": "O enfermeiro vigia o desempenho do/a elasticidade das paredes arteriais no envelhecimento (arteriosclerose): o domínio destas propriedades assegura a prevenção de complicações vasculares, necrose de tecidos e falhas mecânicas durante os cuidados diários de saúde."
  },
  {
    "id": 2148,
    "topicId": 2,
    "question": "Na física aplicada aos materiais e dispositivos de saúde, como se caracteriza o comportamento do/a suturas metálicas de agrafos cirúrgicos de aço sob solicitações mecânicas?",
    "options": [
      "Caracteriza-se por: apresentam comportamento puramente plástico no fecho com o agrafador mecânico, mantendo as bordas da pele coaptadas sem retorno elástico.",
      "Caracteriza-se por ser infinitamente compressível como um gás ideal rarefeito.",
      "Caracteriza-se por quebrar instantaneamente ao toque de uma gota de água.",
      "Caracteriza-se por emitir ondas de rádio moduladas em frequência."
    ],
    "correctIndex": 0,
    "explanation": "O/A suturas metálicas de agrafos cirúrgicos de aço atua na prática clínica através do seguinte mecanismo biomecânico: apresentam comportamento puramente plástico no fecho com o agrafador mecânico, mantendo as bordas da pele coaptadas sem retorno elástico.",
    "distractorAnalysis": [
      "Opção incorreta: considera que o/a suturas metálicas de agrafos cirúrgicos de aço não obedece às leis da mecânica clássica por ser um material biológico.",
      "Opção incorreta: confunde módulo elástico com radioatividade nuclear artificial.",
      "Opção incorreta: sugere que o material perde a totalidade do seu peso ao ser desinfetado com álcool a 70%."
    ],
    "nursingApplication": "O enfermeiro vigia o desempenho do/a suturas metálicas de agrafos cirúrgicos de aço: o domínio destas propriedades assegura a prevenção de complicações vasculares, necrose de tecidos e falhas mecânicas durante os cuidados diários de saúde."
  },
  {
    "id": 2149,
    "topicId": 2,
    "question": "Na física aplicada aos materiais e dispositivos de saúde, como se caracteriza o comportamento do/a comportamento reológico do líquido sinovial articular sob solicitações mecânicas?",
    "options": [
      "Caracteriza-se por: fluido pseudoplástico rico em ácido hialurónico que é altamente viscoso em repouso (lubrificação protetora) e torna-se fluido e pouco viscoso sob movimento rápido (mínima fricção articular).",
      "Caracteriza-se por ser infinitamente compressível como um gás ideal rarefeito.",
      "Caracteriza-se por quebrar instantaneamente ao toque de uma gota de água.",
      "Caracteriza-se por emitir ondas de rádio moduladas em frequência."
    ],
    "correctIndex": 0,
    "explanation": "O/A comportamento reológico do líquido sinovial articular atua na prática clínica através do seguinte mecanismo biomecânico: fluido pseudoplástico rico em ácido hialurónico que é altamente viscoso em repouso (lubrificação protetora) e torna-se fluido e pouco viscoso sob movimento rápido (mínima fricção articular).",
    "distractorAnalysis": [
      "Opção incorreta: considera que o/a comportamento reológico do líquido sinovial articular não obedece às leis da mecânica clássica por ser um material biológico.",
      "Opção incorreta: confunde módulo elástico com radioatividade nuclear artificial.",
      "Opção incorreta: sugere que o material perde a totalidade do seu peso ao ser desinfetado com álcool a 70%."
    ],
    "nursingApplication": "O enfermeiro vigia o desempenho do/a comportamento reológico do líquido sinovial articular: o domínio destas propriedades assegura a prevenção de complicações vasculares, necrose de tecidos e falhas mecânicas durante os cuidados diários de saúde."
  },
  {
    "id": 2150,
    "topicId": 2,
    "question": "Na física aplicada aos materiais e dispositivos de saúde, como se caracteriza o comportamento do/a tubos de aspiração cirúrgica de silicone médico reforçado com espiral sob solicitações mecânicas?",
    "options": [
      "Caracteriza-se por: a espiral rígida de aço ou polímero impede o colapso do tubo sob vácuo de alta sucção (resistência à pressão negativa de colapso).",
      "Caracteriza-se por ser infinitamente compressível como um gás ideal rarefeito.",
      "Caracteriza-se por quebrar instantaneamente ao toque de uma gota de água.",
      "Caracteriza-se por emitir ondas de rádio moduladas em frequência."
    ],
    "correctIndex": 0,
    "explanation": "O/A tubos de aspiração cirúrgica de silicone médico reforçado com espiral atua na prática clínica através do seguinte mecanismo biomecânico: a espiral rígida de aço ou polímero impede o colapso do tubo sob vácuo de alta sucção (resistência à pressão negativa de colapso).",
    "distractorAnalysis": [
      "Opção incorreta: considera que o/a tubos de aspiração cirúrgica de silicone médico reforçado com espiral não obedece às leis da mecânica clássica por ser um material biológico.",
      "Opção incorreta: confunde módulo elástico com radioatividade nuclear artificial.",
      "Opção incorreta: sugere que o material perde a totalidade do seu peso ao ser desinfetado com álcool a 70%."
    ],
    "nursingApplication": "O enfermeiro vigia o desempenho do/a tubos de aspiração cirúrgica de silicone médico reforçado com espiral: o domínio destas propriedades assegura a prevenção de complicações vasculares, necrose de tecidos e falhas mecânicas durante os cuidados diários de saúde."
  },
  {
    "id": 2151,
    "topicId": 2,
    "question": "Na física aplicada aos materiais e dispositivos de saúde, como se caracteriza o comportamento do/a elastómero de vedação em seringas pré-cheias de heparina sob solicitações mecânicas?",
    "options": [
      "Caracteriza-se por: borracha sintética de alta estanquicidade que mantém a esterilidade e impede a entrada de ar com coeficiente de atrito cinético constante no cilindro.",
      "Caracteriza-se por ser infinitamente compressível como um gás ideal rarefeito.",
      "Caracteriza-se por quebrar instantaneamente ao toque de uma gota de água.",
      "Caracteriza-se por emitir ondas de rádio moduladas em frequência."
    ],
    "correctIndex": 0,
    "explanation": "O/A elastómero de vedação em seringas pré-cheias de heparina atua na prática clínica através do seguinte mecanismo biomecânico: borracha sintética de alta estanquicidade que mantém a esterilidade e impede a entrada de ar com coeficiente de atrito cinético constante no cilindro.",
    "distractorAnalysis": [
      "Opção incorreta: considera que o/a elastómero de vedação em seringas pré-cheias de heparina não obedece às leis da mecânica clássica por ser um material biológico.",
      "Opção incorreta: confunde módulo elástico com radioatividade nuclear artificial.",
      "Opção incorreta: sugere que o material perde a totalidade do seu peso ao ser desinfetado com álcool a 70%."
    ],
    "nursingApplication": "O enfermeiro vigia o desempenho do/a elastómero de vedação em seringas pré-cheias de heparina: o domínio destas propriedades assegura a prevenção de complicações vasculares, necrose de tecidos e falhas mecânicas durante os cuidados diários de saúde."
  },
  {
    "id": 2152,
    "topicId": 2,
    "question": "Na física aplicada aos materiais e dispositivos de saúde, como se caracteriza o comportamento do/a fixador externo ortopédico de carbono sob solicitações mecânicas?",
    "options": [
      "Caracteriza-se por: material compósito de fibra de carbono com altíssima rigidez e radiotransparência, permitindo o controlo radiológico da fratura sem artefactos metálicos opacos.",
      "Caracteriza-se por ser infinitamente compressível como um gás ideal rarefeito.",
      "Caracteriza-se por quebrar instantaneamente ao toque de uma gota de água.",
      "Caracteriza-se por emitir ondas de rádio moduladas em frequência."
    ],
    "correctIndex": 0,
    "explanation": "O/A fixador externo ortopédico de carbono atua na prática clínica através do seguinte mecanismo biomecânico: material compósito de fibra de carbono com altíssima rigidez e radiotransparência, permitindo o controlo radiológico da fratura sem artefactos metálicos opacos.",
    "distractorAnalysis": [
      "Opção incorreta: considera que o/a fixador externo ortopédico de carbono não obedece às leis da mecânica clássica por ser um material biológico.",
      "Opção incorreta: confunde módulo elástico com radioatividade nuclear artificial.",
      "Opção incorreta: sugere que o material perde a totalidade do seu peso ao ser desinfetado com álcool a 70%."
    ],
    "nursingApplication": "O enfermeiro vigia o desempenho do/a fixador externo ortopédico de carbono: o domínio destas propriedades assegura a prevenção de complicações vasculares, necrose de tecidos e falhas mecânicas durante os cuidados diários de saúde."
  },
  {
    "id": 2153,
    "topicId": 2,
    "question": "Na física aplicada aos materiais e dispositivos de saúde, como se caracteriza o comportamento do/a meias anti-embolia cirúrgicas brancas (TED stockings) sob solicitações mecânicas?",
    "options": [
      "Caracteriza-se por: exercem pressão profilática de 18 mmHg no tornozelo e 8 mmHg na coxa para doentes acamados em pós-operatório sem mobilidade ativa.",
      "Caracteriza-se por ser infinitamente compressível como um gás ideal rarefeito.",
      "Caracteriza-se por quebrar instantaneamente ao toque de uma gota de água.",
      "Caracteriza-se por emitir ondas de rádio moduladas em frequência."
    ],
    "correctIndex": 0,
    "explanation": "O/A meias anti-embolia cirúrgicas brancas (TED stockings) atua na prática clínica através do seguinte mecanismo biomecânico: exercem pressão profilática de 18 mmHg no tornozelo e 8 mmHg na coxa para doentes acamados em pós-operatório sem mobilidade ativa.",
    "distractorAnalysis": [
      "Opção incorreta: considera que o/a meias anti-embolia cirúrgicas brancas (TED stockings) não obedece às leis da mecânica clássica por ser um material biológico.",
      "Opção incorreta: confunde módulo elástico com radioatividade nuclear artificial.",
      "Opção incorreta: sugere que o material perde a totalidade do seu peso ao ser desinfetado com álcool a 70%."
    ],
    "nursingApplication": "O enfermeiro vigia o desempenho do/a meias anti-embolia cirúrgicas brancas (TED stockings): o domínio destas propriedades assegura a prevenção de complicações vasculares, necrose de tecidos e falhas mecânicas durante os cuidados diários de saúde."
  },
  {
    "id": 2154,
    "topicId": 2,
    "question": "Na física aplicada aos materiais e dispositivos de saúde, como se caracteriza o comportamento do/a tiras adesivas esterilizadas de aproximação cutânea (Steri-Strips) sob solicitações mecânicas?",
    "options": [
      "Caracteriza-se por: reforçadas com filamentos de poliéster para manter tensão de tração constante nas bordas da ferida após remoção precoce de pontos de sutura.",
      "Caracteriza-se por ser infinitamente compressível como um gás ideal rarefeito.",
      "Caracteriza-se por quebrar instantaneamente ao toque de uma gota de água.",
      "Caracteriza-se por emitir ondas de rádio moduladas em frequência."
    ],
    "correctIndex": 0,
    "explanation": "O/A tiras adesivas esterilizadas de aproximação cutânea (Steri-Strips) atua na prática clínica através do seguinte mecanismo biomecânico: reforçadas com filamentos de poliéster para manter tensão de tração constante nas bordas da ferida após remoção precoce de pontos de sutura.",
    "distractorAnalysis": [
      "Opção incorreta: considera que o/a tiras adesivas esterilizadas de aproximação cutânea (Steri-Strips) não obedece às leis da mecânica clássica por ser um material biológico.",
      "Opção incorreta: confunde módulo elástico com radioatividade nuclear artificial.",
      "Opção incorreta: sugere que o material perde a totalidade do seu peso ao ser desinfetado com álcool a 70%."
    ],
    "nursingApplication": "O enfermeiro vigia o desempenho do/a tiras adesivas esterilizadas de aproximação cutânea (Steri-Strips): o domínio destas propriedades assegura a prevenção de complicações vasculares, necrose de tecidos e falhas mecânicas durante os cuidados diários de saúde."
  },
  {
    "id": 2155,
    "topicId": 2,
    "question": "Na física aplicada aos materiais e dispositivos de saúde, como se caracteriza o comportamento do/a módulo elástico de Young de próteses de titânio (E ~ 110 GPa) sob solicitações mecânicas?",
    "options": [
      "Caracteriza-se por: rigidez intermediária entre o osso cortical (18 GPa) e o aço cirúrgico (200 GPa), reduzindo o fenómeno de 'stress shielding' ou reabsorção óssea periprotésica por desuso mecânico.",
      "Caracteriza-se por ser infinitamente compressível como um gás ideal rarefeito.",
      "Caracteriza-se por quebrar instantaneamente ao toque de uma gota de água.",
      "Caracteriza-se por emitir ondas de rádio moduladas em frequência."
    ],
    "correctIndex": 0,
    "explanation": "O/A módulo elástico de Young de próteses de titânio (E ~ 110 GPa) atua na prática clínica através do seguinte mecanismo biomecânico: rigidez intermediária entre o osso cortical (18 GPa) e o aço cirúrgico (200 GPa), reduzindo o fenómeno de 'stress shielding' ou reabsorção óssea periprotésica por desuso mecânico.",
    "distractorAnalysis": [
      "Opção incorreta: considera que o/a módulo elástico de Young de próteses de titânio (E ~ 110 GPa) não obedece às leis da mecânica clássica por ser um material biológico.",
      "Opção incorreta: confunde módulo elástico com radioatividade nuclear artificial.",
      "Opção incorreta: sugere que o material perde a totalidade do seu peso ao ser desinfetado com álcool a 70%."
    ],
    "nursingApplication": "O enfermeiro vigia o desempenho do/a módulo elástico de Young de próteses de titânio (E ~ 110 GPa): o domínio destas propriedades assegura a prevenção de complicações vasculares, necrose de tecidos e falhas mecânicas durante os cuidados diários de saúde."
  },
  {
    "id": 2156,
    "topicId": 2,
    "question": "Na física aplicada aos materiais e dispositivos de saúde, como se caracteriza o comportamento do/a propriedades de fluência (creep) dos discos intervertebrais sob solicitações mecânicas?",
    "options": [
      "Caracteriza-se por: perda progressiva de água sob a carga vertical durante o dia com diminuição da altura do disco, recuperando a hidratação e a espessura elástica durante o repouso noturno no leito.",
      "Caracteriza-se por ser infinitamente compressível como um gás ideal rarefeito.",
      "Caracteriza-se por quebrar instantaneamente ao toque de uma gota de água.",
      "Caracteriza-se por emitir ondas de rádio moduladas em frequência."
    ],
    "correctIndex": 0,
    "explanation": "O/A propriedades de fluência (creep) dos discos intervertebrais atua na prática clínica através do seguinte mecanismo biomecânico: perda progressiva de água sob a carga vertical durante o dia com diminuição da altura do disco, recuperando a hidratação e a espessura elástica durante o repouso noturno no leito.",
    "distractorAnalysis": [
      "Opção incorreta: considera que o/a propriedades de fluência (creep) dos discos intervertebrais não obedece às leis da mecânica clássica por ser um material biológico.",
      "Opção incorreta: confunde módulo elástico com radioatividade nuclear artificial.",
      "Opção incorreta: sugere que o material perde a totalidade do seu peso ao ser desinfetado com álcool a 70%."
    ],
    "nursingApplication": "O enfermeiro vigia o desempenho do/a propriedades de fluência (creep) dos discos intervertebrais: o domínio destas propriedades assegura a prevenção de complicações vasculares, necrose de tecidos e falhas mecânicas durante os cuidados diários de saúde."
  },
  {
    "id": 2157,
    "topicId": 2,
    "question": "Na física aplicada aos materiais e dispositivos de saúde, como se caracteriza o comportamento do/a elasticidade das paredes arteriais no envelhecimento (arteriosclerose) sob solicitações mecânicas?",
    "options": [
      "Caracteriza-se por: substituição das fibras de elastina por fibras rígidas de colagénio, aumentando o Módulo de Young arterial e elevando a pressão arterial de pulso (sistólica muito alta com diastólica normal ou baixa).",
      "Caracteriza-se por ser infinitamente compressível como um gás ideal rarefeito.",
      "Caracteriza-se por quebrar instantaneamente ao toque de uma gota de água.",
      "Caracteriza-se por emitir ondas de rádio moduladas em frequência."
    ],
    "correctIndex": 0,
    "explanation": "O/A elasticidade das paredes arteriais no envelhecimento (arteriosclerose) atua na prática clínica através do seguinte mecanismo biomecânico: substituição das fibras de elastina por fibras rígidas de colagénio, aumentando o Módulo de Young arterial e elevando a pressão arterial de pulso (sistólica muito alta com diastólica normal ou baixa).",
    "distractorAnalysis": [
      "Opção incorreta: considera que o/a elasticidade das paredes arteriais no envelhecimento (arteriosclerose) não obedece às leis da mecânica clássica por ser um material biológico.",
      "Opção incorreta: confunde módulo elástico com radioatividade nuclear artificial.",
      "Opção incorreta: sugere que o material perde a totalidade do seu peso ao ser desinfetado com álcool a 70%."
    ],
    "nursingApplication": "O enfermeiro vigia o desempenho do/a elasticidade das paredes arteriais no envelhecimento (arteriosclerose): o domínio destas propriedades assegura a prevenção de complicações vasculares, necrose de tecidos e falhas mecânicas durante os cuidados diários de saúde."
  },
  {
    "id": 2158,
    "topicId": 2,
    "question": "Na física aplicada aos materiais e dispositivos de saúde, como se caracteriza o comportamento do/a suturas metálicas de agrafos cirúrgicos de aço sob solicitações mecânicas?",
    "options": [
      "Caracteriza-se por: apresentam comportamento puramente plástico no fecho com o agrafador mecânico, mantendo as bordas da pele coaptadas sem retorno elástico.",
      "Caracteriza-se por ser infinitamente compressível como um gás ideal rarefeito.",
      "Caracteriza-se por quebrar instantaneamente ao toque de uma gota de água.",
      "Caracteriza-se por emitir ondas de rádio moduladas em frequência."
    ],
    "correctIndex": 0,
    "explanation": "O/A suturas metálicas de agrafos cirúrgicos de aço atua na prática clínica através do seguinte mecanismo biomecânico: apresentam comportamento puramente plástico no fecho com o agrafador mecânico, mantendo as bordas da pele coaptadas sem retorno elástico.",
    "distractorAnalysis": [
      "Opção incorreta: considera que o/a suturas metálicas de agrafos cirúrgicos de aço não obedece às leis da mecânica clássica por ser um material biológico.",
      "Opção incorreta: confunde módulo elástico com radioatividade nuclear artificial.",
      "Opção incorreta: sugere que o material perde a totalidade do seu peso ao ser desinfetado com álcool a 70%."
    ],
    "nursingApplication": "O enfermeiro vigia o desempenho do/a suturas metálicas de agrafos cirúrgicos de aço: o domínio destas propriedades assegura a prevenção de complicações vasculares, necrose de tecidos e falhas mecânicas durante os cuidados diários de saúde."
  },
  {
    "id": 2159,
    "topicId": 2,
    "question": "Na física aplicada aos materiais e dispositivos de saúde, como se caracteriza o comportamento do/a comportamento reológico do líquido sinovial articular sob solicitações mecânicas?",
    "options": [
      "Caracteriza-se por: fluido pseudoplástico rico em ácido hialurónico que é altamente viscoso em repouso (lubrificação protetora) e torna-se fluido e pouco viscoso sob movimento rápido (mínima fricção articular).",
      "Caracteriza-se por ser infinitamente compressível como um gás ideal rarefeito.",
      "Caracteriza-se por quebrar instantaneamente ao toque de uma gota de água.",
      "Caracteriza-se por emitir ondas de rádio moduladas em frequência."
    ],
    "correctIndex": 0,
    "explanation": "O/A comportamento reológico do líquido sinovial articular atua na prática clínica através do seguinte mecanismo biomecânico: fluido pseudoplástico rico em ácido hialurónico que é altamente viscoso em repouso (lubrificação protetora) e torna-se fluido e pouco viscoso sob movimento rápido (mínima fricção articular).",
    "distractorAnalysis": [
      "Opção incorreta: considera que o/a comportamento reológico do líquido sinovial articular não obedece às leis da mecânica clássica por ser um material biológico.",
      "Opção incorreta: confunde módulo elástico com radioatividade nuclear artificial.",
      "Opção incorreta: sugere que o material perde a totalidade do seu peso ao ser desinfetado com álcool a 70%."
    ],
    "nursingApplication": "O enfermeiro vigia o desempenho do/a comportamento reológico do líquido sinovial articular: o domínio destas propriedades assegura a prevenção de complicações vasculares, necrose de tecidos e falhas mecânicas durante os cuidados diários de saúde."
  },
  {
    "id": 2160,
    "topicId": 2,
    "question": "Na física aplicada aos materiais e dispositivos de saúde, como se caracteriza o comportamento do/a tubos de aspiração cirúrgica de silicone médico reforçado com espiral sob solicitações mecânicas?",
    "options": [
      "Caracteriza-se por: a espiral rígida de aço ou polímero impede o colapso do tubo sob vácuo de alta sucção (resistência à pressão negativa de colapso).",
      "Caracteriza-se por ser infinitamente compressível como um gás ideal rarefeito.",
      "Caracteriza-se por quebrar instantaneamente ao toque de uma gota de água.",
      "Caracteriza-se por emitir ondas de rádio moduladas em frequência."
    ],
    "correctIndex": 0,
    "explanation": "O/A tubos de aspiração cirúrgica de silicone médico reforçado com espiral atua na prática clínica através do seguinte mecanismo biomecânico: a espiral rígida de aço ou polímero impede o colapso do tubo sob vácuo de alta sucção (resistência à pressão negativa de colapso).",
    "distractorAnalysis": [
      "Opção incorreta: considera que o/a tubos de aspiração cirúrgica de silicone médico reforçado com espiral não obedece às leis da mecânica clássica por ser um material biológico.",
      "Opção incorreta: confunde módulo elástico com radioatividade nuclear artificial.",
      "Opção incorreta: sugere que o material perde a totalidade do seu peso ao ser desinfetado com álcool a 70%."
    ],
    "nursingApplication": "O enfermeiro vigia o desempenho do/a tubos de aspiração cirúrgica de silicone médico reforçado com espiral: o domínio destas propriedades assegura a prevenção de complicações vasculares, necrose de tecidos e falhas mecânicas durante os cuidados diários de saúde."
  },
  {
    "id": 2161,
    "topicId": 2,
    "question": "Na física aplicada aos materiais e dispositivos de saúde, como se caracteriza o comportamento do/a elastómero de vedação em seringas pré-cheias de heparina sob solicitações mecânicas?",
    "options": [
      "Caracteriza-se por: borracha sintética de alta estanquicidade que mantém a esterilidade e impede a entrada de ar com coeficiente de atrito cinético constante no cilindro.",
      "Caracteriza-se por ser infinitamente compressível como um gás ideal rarefeito.",
      "Caracteriza-se por quebrar instantaneamente ao toque de uma gota de água.",
      "Caracteriza-se por emitir ondas de rádio moduladas em frequência."
    ],
    "correctIndex": 0,
    "explanation": "O/A elastómero de vedação em seringas pré-cheias de heparina atua na prática clínica através do seguinte mecanismo biomecânico: borracha sintética de alta estanquicidade que mantém a esterilidade e impede a entrada de ar com coeficiente de atrito cinético constante no cilindro.",
    "distractorAnalysis": [
      "Opção incorreta: considera que o/a elastómero de vedação em seringas pré-cheias de heparina não obedece às leis da mecânica clássica por ser um material biológico.",
      "Opção incorreta: confunde módulo elástico com radioatividade nuclear artificial.",
      "Opção incorreta: sugere que o material perde a totalidade do seu peso ao ser desinfetado com álcool a 70%."
    ],
    "nursingApplication": "O enfermeiro vigia o desempenho do/a elastómero de vedação em seringas pré-cheias de heparina: o domínio destas propriedades assegura a prevenção de complicações vasculares, necrose de tecidos e falhas mecânicas durante os cuidados diários de saúde."
  },
  {
    "id": 2162,
    "topicId": 2,
    "question": "Na física aplicada aos materiais e dispositivos de saúde, como se caracteriza o comportamento do/a fixador externo ortopédico de carbono sob solicitações mecânicas?",
    "options": [
      "Caracteriza-se por: material compósito de fibra de carbono com altíssima rigidez e radiotransparência, permitindo o controlo radiológico da fratura sem artefactos metálicos opacos.",
      "Caracteriza-se por ser infinitamente compressível como um gás ideal rarefeito.",
      "Caracteriza-se por quebrar instantaneamente ao toque de uma gota de água.",
      "Caracteriza-se por emitir ondas de rádio moduladas em frequência."
    ],
    "correctIndex": 0,
    "explanation": "O/A fixador externo ortopédico de carbono atua na prática clínica através do seguinte mecanismo biomecânico: material compósito de fibra de carbono com altíssima rigidez e radiotransparência, permitindo o controlo radiológico da fratura sem artefactos metálicos opacos.",
    "distractorAnalysis": [
      "Opção incorreta: considera que o/a fixador externo ortopédico de carbono não obedece às leis da mecânica clássica por ser um material biológico.",
      "Opção incorreta: confunde módulo elástico com radioatividade nuclear artificial.",
      "Opção incorreta: sugere que o material perde a totalidade do seu peso ao ser desinfetado com álcool a 70%."
    ],
    "nursingApplication": "O enfermeiro vigia o desempenho do/a fixador externo ortopédico de carbono: o domínio destas propriedades assegura a prevenção de complicações vasculares, necrose de tecidos e falhas mecânicas durante os cuidados diários de saúde."
  },
  {
    "id": 2163,
    "topicId": 2,
    "question": "Na física aplicada aos materiais e dispositivos de saúde, como se caracteriza o comportamento do/a meias anti-embolia cirúrgicas brancas (TED stockings) sob solicitações mecânicas?",
    "options": [
      "Caracteriza-se por: exercem pressão profilática de 18 mmHg no tornozelo e 8 mmHg na coxa para doentes acamados em pós-operatório sem mobilidade ativa.",
      "Caracteriza-se por ser infinitamente compressível como um gás ideal rarefeito.",
      "Caracteriza-se por quebrar instantaneamente ao toque de uma gota de água.",
      "Caracteriza-se por emitir ondas de rádio moduladas em frequência."
    ],
    "correctIndex": 0,
    "explanation": "O/A meias anti-embolia cirúrgicas brancas (TED stockings) atua na prática clínica através do seguinte mecanismo biomecânico: exercem pressão profilática de 18 mmHg no tornozelo e 8 mmHg na coxa para doentes acamados em pós-operatório sem mobilidade ativa.",
    "distractorAnalysis": [
      "Opção incorreta: considera que o/a meias anti-embolia cirúrgicas brancas (TED stockings) não obedece às leis da mecânica clássica por ser um material biológico.",
      "Opção incorreta: confunde módulo elástico com radioatividade nuclear artificial.",
      "Opção incorreta: sugere que o material perde a totalidade do seu peso ao ser desinfetado com álcool a 70%."
    ],
    "nursingApplication": "O enfermeiro vigia o desempenho do/a meias anti-embolia cirúrgicas brancas (TED stockings): o domínio destas propriedades assegura a prevenção de complicações vasculares, necrose de tecidos e falhas mecânicas durante os cuidados diários de saúde."
  },
  {
    "id": 2164,
    "topicId": 2,
    "question": "Na física aplicada aos materiais e dispositivos de saúde, como se caracteriza o comportamento do/a tiras adesivas esterilizadas de aproximação cutânea (Steri-Strips) sob solicitações mecânicas?",
    "options": [
      "Caracteriza-se por: reforçadas com filamentos de poliéster para manter tensão de tração constante nas bordas da ferida após remoção precoce de pontos de sutura.",
      "Caracteriza-se por ser infinitamente compressível como um gás ideal rarefeito.",
      "Caracteriza-se por quebrar instantaneamente ao toque de uma gota de água.",
      "Caracteriza-se por emitir ondas de rádio moduladas em frequência."
    ],
    "correctIndex": 0,
    "explanation": "O/A tiras adesivas esterilizadas de aproximação cutânea (Steri-Strips) atua na prática clínica através do seguinte mecanismo biomecânico: reforçadas com filamentos de poliéster para manter tensão de tração constante nas bordas da ferida após remoção precoce de pontos de sutura.",
    "distractorAnalysis": [
      "Opção incorreta: considera que o/a tiras adesivas esterilizadas de aproximação cutânea (Steri-Strips) não obedece às leis da mecânica clássica por ser um material biológico.",
      "Opção incorreta: confunde módulo elástico com radioatividade nuclear artificial.",
      "Opção incorreta: sugere que o material perde a totalidade do seu peso ao ser desinfetado com álcool a 70%."
    ],
    "nursingApplication": "O enfermeiro vigia o desempenho do/a tiras adesivas esterilizadas de aproximação cutânea (Steri-Strips): o domínio destas propriedades assegura a prevenção de complicações vasculares, necrose de tecidos e falhas mecânicas durante os cuidados diários de saúde."
  },
  {
    "id": 2165,
    "topicId": 2,
    "question": "Na física aplicada aos materiais e dispositivos de saúde, como se caracteriza o comportamento do/a módulo elástico de Young de próteses de titânio (E ~ 110 GPa) sob solicitações mecânicas?",
    "options": [
      "Caracteriza-se por: rigidez intermediária entre o osso cortical (18 GPa) e o aço cirúrgico (200 GPa), reduzindo o fenómeno de 'stress shielding' ou reabsorção óssea periprotésica por desuso mecânico.",
      "Caracteriza-se por ser infinitamente compressível como um gás ideal rarefeito.",
      "Caracteriza-se por quebrar instantaneamente ao toque de uma gota de água.",
      "Caracteriza-se por emitir ondas de rádio moduladas em frequência."
    ],
    "correctIndex": 0,
    "explanation": "O/A módulo elástico de Young de próteses de titânio (E ~ 110 GPa) atua na prática clínica através do seguinte mecanismo biomecânico: rigidez intermediária entre o osso cortical (18 GPa) e o aço cirúrgico (200 GPa), reduzindo o fenómeno de 'stress shielding' ou reabsorção óssea periprotésica por desuso mecânico.",
    "distractorAnalysis": [
      "Opção incorreta: considera que o/a módulo elástico de Young de próteses de titânio (E ~ 110 GPa) não obedece às leis da mecânica clássica por ser um material biológico.",
      "Opção incorreta: confunde módulo elástico com radioatividade nuclear artificial.",
      "Opção incorreta: sugere que o material perde a totalidade do seu peso ao ser desinfetado com álcool a 70%."
    ],
    "nursingApplication": "O enfermeiro vigia o desempenho do/a módulo elástico de Young de próteses de titânio (E ~ 110 GPa): o domínio destas propriedades assegura a prevenção de complicações vasculares, necrose de tecidos e falhas mecânicas durante os cuidados diários de saúde."
  },
  {
    "id": 2166,
    "topicId": 2,
    "question": "Na física aplicada aos materiais e dispositivos de saúde, como se caracteriza o comportamento do/a propriedades de fluência (creep) dos discos intervertebrais sob solicitações mecânicas?",
    "options": [
      "Caracteriza-se por: perda progressiva de água sob a carga vertical durante o dia com diminuição da altura do disco, recuperando a hidratação e a espessura elástica durante o repouso noturno no leito.",
      "Caracteriza-se por ser infinitamente compressível como um gás ideal rarefeito.",
      "Caracteriza-se por quebrar instantaneamente ao toque de uma gota de água.",
      "Caracteriza-se por emitir ondas de rádio moduladas em frequência."
    ],
    "correctIndex": 0,
    "explanation": "O/A propriedades de fluência (creep) dos discos intervertebrais atua na prática clínica através do seguinte mecanismo biomecânico: perda progressiva de água sob a carga vertical durante o dia com diminuição da altura do disco, recuperando a hidratação e a espessura elástica durante o repouso noturno no leito.",
    "distractorAnalysis": [
      "Opção incorreta: considera que o/a propriedades de fluência (creep) dos discos intervertebrais não obedece às leis da mecânica clássica por ser um material biológico.",
      "Opção incorreta: confunde módulo elástico com radioatividade nuclear artificial.",
      "Opção incorreta: sugere que o material perde a totalidade do seu peso ao ser desinfetado com álcool a 70%."
    ],
    "nursingApplication": "O enfermeiro vigia o desempenho do/a propriedades de fluência (creep) dos discos intervertebrais: o domínio destas propriedades assegura a prevenção de complicações vasculares, necrose de tecidos e falhas mecânicas durante os cuidados diários de saúde."
  },
  {
    "id": 2167,
    "topicId": 2,
    "question": "Na física aplicada aos materiais e dispositivos de saúde, como se caracteriza o comportamento do/a elasticidade das paredes arteriais no envelhecimento (arteriosclerose) sob solicitações mecânicas?",
    "options": [
      "Caracteriza-se por: substituição das fibras de elastina por fibras rígidas de colagénio, aumentando o Módulo de Young arterial e elevando a pressão arterial de pulso (sistólica muito alta com diastólica normal ou baixa).",
      "Caracteriza-se por ser infinitamente compressível como um gás ideal rarefeito.",
      "Caracteriza-se por quebrar instantaneamente ao toque de uma gota de água.",
      "Caracteriza-se por emitir ondas de rádio moduladas em frequência."
    ],
    "correctIndex": 0,
    "explanation": "O/A elasticidade das paredes arteriais no envelhecimento (arteriosclerose) atua na prática clínica através do seguinte mecanismo biomecânico: substituição das fibras de elastina por fibras rígidas de colagénio, aumentando o Módulo de Young arterial e elevando a pressão arterial de pulso (sistólica muito alta com diastólica normal ou baixa).",
    "distractorAnalysis": [
      "Opção incorreta: considera que o/a elasticidade das paredes arteriais no envelhecimento (arteriosclerose) não obedece às leis da mecânica clássica por ser um material biológico.",
      "Opção incorreta: confunde módulo elástico com radioatividade nuclear artificial.",
      "Opção incorreta: sugere que o material perde a totalidade do seu peso ao ser desinfetado com álcool a 70%."
    ],
    "nursingApplication": "O enfermeiro vigia o desempenho do/a elasticidade das paredes arteriais no envelhecimento (arteriosclerose): o domínio destas propriedades assegura a prevenção de complicações vasculares, necrose de tecidos e falhas mecânicas durante os cuidados diários de saúde."
  },
  {
    "id": 2168,
    "topicId": 2,
    "question": "Na física aplicada aos materiais e dispositivos de saúde, como se caracteriza o comportamento do/a suturas metálicas de agrafos cirúrgicos de aço sob solicitações mecânicas?",
    "options": [
      "Caracteriza-se por: apresentam comportamento puramente plástico no fecho com o agrafador mecânico, mantendo as bordas da pele coaptadas sem retorno elástico.",
      "Caracteriza-se por ser infinitamente compressível como um gás ideal rarefeito.",
      "Caracteriza-se por quebrar instantaneamente ao toque de uma gota de água.",
      "Caracteriza-se por emitir ondas de rádio moduladas em frequência."
    ],
    "correctIndex": 0,
    "explanation": "O/A suturas metálicas de agrafos cirúrgicos de aço atua na prática clínica através do seguinte mecanismo biomecânico: apresentam comportamento puramente plástico no fecho com o agrafador mecânico, mantendo as bordas da pele coaptadas sem retorno elástico.",
    "distractorAnalysis": [
      "Opção incorreta: considera que o/a suturas metálicas de agrafos cirúrgicos de aço não obedece às leis da mecânica clássica por ser um material biológico.",
      "Opção incorreta: confunde módulo elástico com radioatividade nuclear artificial.",
      "Opção incorreta: sugere que o material perde a totalidade do seu peso ao ser desinfetado com álcool a 70%."
    ],
    "nursingApplication": "O enfermeiro vigia o desempenho do/a suturas metálicas de agrafos cirúrgicos de aço: o domínio destas propriedades assegura a prevenção de complicações vasculares, necrose de tecidos e falhas mecânicas durante os cuidados diários de saúde."
  },
  {
    "id": 2169,
    "topicId": 2,
    "question": "Na física aplicada aos materiais e dispositivos de saúde, como se caracteriza o comportamento do/a comportamento reológico do líquido sinovial articular sob solicitações mecânicas?",
    "options": [
      "Caracteriza-se por: fluido pseudoplástico rico em ácido hialurónico que é altamente viscoso em repouso (lubrificação protetora) e torna-se fluido e pouco viscoso sob movimento rápido (mínima fricção articular).",
      "Caracteriza-se por ser infinitamente compressível como um gás ideal rarefeito.",
      "Caracteriza-se por quebrar instantaneamente ao toque de uma gota de água.",
      "Caracteriza-se por emitir ondas de rádio moduladas em frequência."
    ],
    "correctIndex": 0,
    "explanation": "O/A comportamento reológico do líquido sinovial articular atua na prática clínica através do seguinte mecanismo biomecânico: fluido pseudoplástico rico em ácido hialurónico que é altamente viscoso em repouso (lubrificação protetora) e torna-se fluido e pouco viscoso sob movimento rápido (mínima fricção articular).",
    "distractorAnalysis": [
      "Opção incorreta: considera que o/a comportamento reológico do líquido sinovial articular não obedece às leis da mecânica clássica por ser um material biológico.",
      "Opção incorreta: confunde módulo elástico com radioatividade nuclear artificial.",
      "Opção incorreta: sugere que o material perde a totalidade do seu peso ao ser desinfetado com álcool a 70%."
    ],
    "nursingApplication": "O enfermeiro vigia o desempenho do/a comportamento reológico do líquido sinovial articular: o domínio destas propriedades assegura a prevenção de complicações vasculares, necrose de tecidos e falhas mecânicas durante os cuidados diários de saúde."
  },
  {
    "id": 2170,
    "topicId": 2,
    "question": "Na física aplicada aos materiais e dispositivos de saúde, como se caracteriza o comportamento do/a tubos de aspiração cirúrgica de silicone médico reforçado com espiral sob solicitações mecânicas?",
    "options": [
      "Caracteriza-se por: a espiral rígida de aço ou polímero impede o colapso do tubo sob vácuo de alta sucção (resistência à pressão negativa de colapso).",
      "Caracteriza-se por ser infinitamente compressível como um gás ideal rarefeito.",
      "Caracteriza-se por quebrar instantaneamente ao toque de uma gota de água.",
      "Caracteriza-se por emitir ondas de rádio moduladas em frequência."
    ],
    "correctIndex": 0,
    "explanation": "O/A tubos de aspiração cirúrgica de silicone médico reforçado com espiral atua na prática clínica através do seguinte mecanismo biomecânico: a espiral rígida de aço ou polímero impede o colapso do tubo sob vácuo de alta sucção (resistência à pressão negativa de colapso).",
    "distractorAnalysis": [
      "Opção incorreta: considera que o/a tubos de aspiração cirúrgica de silicone médico reforçado com espiral não obedece às leis da mecânica clássica por ser um material biológico.",
      "Opção incorreta: confunde módulo elástico com radioatividade nuclear artificial.",
      "Opção incorreta: sugere que o material perde a totalidade do seu peso ao ser desinfetado com álcool a 70%."
    ],
    "nursingApplication": "O enfermeiro vigia o desempenho do/a tubos de aspiração cirúrgica de silicone médico reforçado com espiral: o domínio destas propriedades assegura a prevenção de complicações vasculares, necrose de tecidos e falhas mecânicas durante os cuidados diários de saúde."
  },
  {
    "id": 2171,
    "topicId": 2,
    "question": "Na física aplicada aos materiais e dispositivos de saúde, como se caracteriza o comportamento do/a elastómero de vedação em seringas pré-cheias de heparina sob solicitações mecânicas?",
    "options": [
      "Caracteriza-se por: borracha sintética de alta estanquicidade que mantém a esterilidade e impede a entrada de ar com coeficiente de atrito cinético constante no cilindro.",
      "Caracteriza-se por ser infinitamente compressível como um gás ideal rarefeito.",
      "Caracteriza-se por quebrar instantaneamente ao toque de uma gota de água.",
      "Caracteriza-se por emitir ondas de rádio moduladas em frequência."
    ],
    "correctIndex": 0,
    "explanation": "O/A elastómero de vedação em seringas pré-cheias de heparina atua na prática clínica através do seguinte mecanismo biomecânico: borracha sintética de alta estanquicidade que mantém a esterilidade e impede a entrada de ar com coeficiente de atrito cinético constante no cilindro.",
    "distractorAnalysis": [
      "Opção incorreta: considera que o/a elastómero de vedação em seringas pré-cheias de heparina não obedece às leis da mecânica clássica por ser um material biológico.",
      "Opção incorreta: confunde módulo elástico com radioatividade nuclear artificial.",
      "Opção incorreta: sugere que o material perde a totalidade do seu peso ao ser desinfetado com álcool a 70%."
    ],
    "nursingApplication": "O enfermeiro vigia o desempenho do/a elastómero de vedação em seringas pré-cheias de heparina: o domínio destas propriedades assegura a prevenção de complicações vasculares, necrose de tecidos e falhas mecânicas durante os cuidados diários de saúde."
  },
  {
    "id": 2172,
    "topicId": 2,
    "question": "Na física aplicada aos materiais e dispositivos de saúde, como se caracteriza o comportamento do/a fixador externo ortopédico de carbono sob solicitações mecânicas?",
    "options": [
      "Caracteriza-se por: material compósito de fibra de carbono com altíssima rigidez e radiotransparência, permitindo o controlo radiológico da fratura sem artefactos metálicos opacos.",
      "Caracteriza-se por ser infinitamente compressível como um gás ideal rarefeito.",
      "Caracteriza-se por quebrar instantaneamente ao toque de uma gota de água.",
      "Caracteriza-se por emitir ondas de rádio moduladas em frequência."
    ],
    "correctIndex": 0,
    "explanation": "O/A fixador externo ortopédico de carbono atua na prática clínica através do seguinte mecanismo biomecânico: material compósito de fibra de carbono com altíssima rigidez e radiotransparência, permitindo o controlo radiológico da fratura sem artefactos metálicos opacos.",
    "distractorAnalysis": [
      "Opção incorreta: considera que o/a fixador externo ortopédico de carbono não obedece às leis da mecânica clássica por ser um material biológico.",
      "Opção incorreta: confunde módulo elástico com radioatividade nuclear artificial.",
      "Opção incorreta: sugere que o material perde a totalidade do seu peso ao ser desinfetado com álcool a 70%."
    ],
    "nursingApplication": "O enfermeiro vigia o desempenho do/a fixador externo ortopédico de carbono: o domínio destas propriedades assegura a prevenção de complicações vasculares, necrose de tecidos e falhas mecânicas durante os cuidados diários de saúde."
  },
  {
    "id": 2173,
    "topicId": 2,
    "question": "Na física aplicada aos materiais e dispositivos de saúde, como se caracteriza o comportamento do/a meias anti-embolia cirúrgicas brancas (TED stockings) sob solicitações mecânicas?",
    "options": [
      "Caracteriza-se por: exercem pressão profilática de 18 mmHg no tornozelo e 8 mmHg na coxa para doentes acamados em pós-operatório sem mobilidade ativa.",
      "Caracteriza-se por ser infinitamente compressível como um gás ideal rarefeito.",
      "Caracteriza-se por quebrar instantaneamente ao toque de uma gota de água.",
      "Caracteriza-se por emitir ondas de rádio moduladas em frequência."
    ],
    "correctIndex": 0,
    "explanation": "O/A meias anti-embolia cirúrgicas brancas (TED stockings) atua na prática clínica através do seguinte mecanismo biomecânico: exercem pressão profilática de 18 mmHg no tornozelo e 8 mmHg na coxa para doentes acamados em pós-operatório sem mobilidade ativa.",
    "distractorAnalysis": [
      "Opção incorreta: considera que o/a meias anti-embolia cirúrgicas brancas (TED stockings) não obedece às leis da mecânica clássica por ser um material biológico.",
      "Opção incorreta: confunde módulo elástico com radioatividade nuclear artificial.",
      "Opção incorreta: sugere que o material perde a totalidade do seu peso ao ser desinfetado com álcool a 70%."
    ],
    "nursingApplication": "O enfermeiro vigia o desempenho do/a meias anti-embolia cirúrgicas brancas (TED stockings): o domínio destas propriedades assegura a prevenção de complicações vasculares, necrose de tecidos e falhas mecânicas durante os cuidados diários de saúde."
  },
  {
    "id": 2174,
    "topicId": 2,
    "question": "Na física aplicada aos materiais e dispositivos de saúde, como se caracteriza o comportamento do/a tiras adesivas esterilizadas de aproximação cutânea (Steri-Strips) sob solicitações mecânicas?",
    "options": [
      "Caracteriza-se por: reforçadas com filamentos de poliéster para manter tensão de tração constante nas bordas da ferida após remoção precoce de pontos de sutura.",
      "Caracteriza-se por ser infinitamente compressível como um gás ideal rarefeito.",
      "Caracteriza-se por quebrar instantaneamente ao toque de uma gota de água.",
      "Caracteriza-se por emitir ondas de rádio moduladas em frequência."
    ],
    "correctIndex": 0,
    "explanation": "O/A tiras adesivas esterilizadas de aproximação cutânea (Steri-Strips) atua na prática clínica através do seguinte mecanismo biomecânico: reforçadas com filamentos de poliéster para manter tensão de tração constante nas bordas da ferida após remoção precoce de pontos de sutura.",
    "distractorAnalysis": [
      "Opção incorreta: considera que o/a tiras adesivas esterilizadas de aproximação cutânea (Steri-Strips) não obedece às leis da mecânica clássica por ser um material biológico.",
      "Opção incorreta: confunde módulo elástico com radioatividade nuclear artificial.",
      "Opção incorreta: sugere que o material perde a totalidade do seu peso ao ser desinfetado com álcool a 70%."
    ],
    "nursingApplication": "O enfermeiro vigia o desempenho do/a tiras adesivas esterilizadas de aproximação cutânea (Steri-Strips): o domínio destas propriedades assegura a prevenção de complicações vasculares, necrose de tecidos e falhas mecânicas durante os cuidados diários de saúde."
  },
  {
    "id": 2175,
    "topicId": 2,
    "question": "Na física aplicada aos materiais e dispositivos de saúde, como se caracteriza o comportamento do/a módulo elástico de Young de próteses de titânio (E ~ 110 GPa) sob solicitações mecânicas?",
    "options": [
      "Caracteriza-se por: rigidez intermediária entre o osso cortical (18 GPa) e o aço cirúrgico (200 GPa), reduzindo o fenómeno de 'stress shielding' ou reabsorção óssea periprotésica por desuso mecânico.",
      "Caracteriza-se por ser infinitamente compressível como um gás ideal rarefeito.",
      "Caracteriza-se por quebrar instantaneamente ao toque de uma gota de água.",
      "Caracteriza-se por emitir ondas de rádio moduladas em frequência."
    ],
    "correctIndex": 0,
    "explanation": "O/A módulo elástico de Young de próteses de titânio (E ~ 110 GPa) atua na prática clínica através do seguinte mecanismo biomecânico: rigidez intermediária entre o osso cortical (18 GPa) e o aço cirúrgico (200 GPa), reduzindo o fenómeno de 'stress shielding' ou reabsorção óssea periprotésica por desuso mecânico.",
    "distractorAnalysis": [
      "Opção incorreta: considera que o/a módulo elástico de Young de próteses de titânio (E ~ 110 GPa) não obedece às leis da mecânica clássica por ser um material biológico.",
      "Opção incorreta: confunde módulo elástico com radioatividade nuclear artificial.",
      "Opção incorreta: sugere que o material perde a totalidade do seu peso ao ser desinfetado com álcool a 70%."
    ],
    "nursingApplication": "O enfermeiro vigia o desempenho do/a módulo elástico de Young de próteses de titânio (E ~ 110 GPa): o domínio destas propriedades assegura a prevenção de complicações vasculares, necrose de tecidos e falhas mecânicas durante os cuidados diários de saúde."
  },
  {
    "id": 2176,
    "topicId": 2,
    "question": "Na física aplicada aos materiais e dispositivos de saúde, como se caracteriza o comportamento do/a propriedades de fluência (creep) dos discos intervertebrais sob solicitações mecânicas?",
    "options": [
      "Caracteriza-se por: perda progressiva de água sob a carga vertical durante o dia com diminuição da altura do disco, recuperando a hidratação e a espessura elástica durante o repouso noturno no leito.",
      "Caracteriza-se por ser infinitamente compressível como um gás ideal rarefeito.",
      "Caracteriza-se por quebrar instantaneamente ao toque de uma gota de água.",
      "Caracteriza-se por emitir ondas de rádio moduladas em frequência."
    ],
    "correctIndex": 0,
    "explanation": "O/A propriedades de fluência (creep) dos discos intervertebrais atua na prática clínica através do seguinte mecanismo biomecânico: perda progressiva de água sob a carga vertical durante o dia com diminuição da altura do disco, recuperando a hidratação e a espessura elástica durante o repouso noturno no leito.",
    "distractorAnalysis": [
      "Opção incorreta: considera que o/a propriedades de fluência (creep) dos discos intervertebrais não obedece às leis da mecânica clássica por ser um material biológico.",
      "Opção incorreta: confunde módulo elástico com radioatividade nuclear artificial.",
      "Opção incorreta: sugere que o material perde a totalidade do seu peso ao ser desinfetado com álcool a 70%."
    ],
    "nursingApplication": "O enfermeiro vigia o desempenho do/a propriedades de fluência (creep) dos discos intervertebrais: o domínio destas propriedades assegura a prevenção de complicações vasculares, necrose de tecidos e falhas mecânicas durante os cuidados diários de saúde."
  },
  {
    "id": 2177,
    "topicId": 2,
    "question": "Na física aplicada aos materiais e dispositivos de saúde, como se caracteriza o comportamento do/a elasticidade das paredes arteriais no envelhecimento (arteriosclerose) sob solicitações mecânicas?",
    "options": [
      "Caracteriza-se por: substituição das fibras de elastina por fibras rígidas de colagénio, aumentando o Módulo de Young arterial e elevando a pressão arterial de pulso (sistólica muito alta com diastólica normal ou baixa).",
      "Caracteriza-se por ser infinitamente compressível como um gás ideal rarefeito.",
      "Caracteriza-se por quebrar instantaneamente ao toque de uma gota de água.",
      "Caracteriza-se por emitir ondas de rádio moduladas em frequência."
    ],
    "correctIndex": 0,
    "explanation": "O/A elasticidade das paredes arteriais no envelhecimento (arteriosclerose) atua na prática clínica através do seguinte mecanismo biomecânico: substituição das fibras de elastina por fibras rígidas de colagénio, aumentando o Módulo de Young arterial e elevando a pressão arterial de pulso (sistólica muito alta com diastólica normal ou baixa).",
    "distractorAnalysis": [
      "Opção incorreta: considera que o/a elasticidade das paredes arteriais no envelhecimento (arteriosclerose) não obedece às leis da mecânica clássica por ser um material biológico.",
      "Opção incorreta: confunde módulo elástico com radioatividade nuclear artificial.",
      "Opção incorreta: sugere que o material perde a totalidade do seu peso ao ser desinfetado com álcool a 70%."
    ],
    "nursingApplication": "O enfermeiro vigia o desempenho do/a elasticidade das paredes arteriais no envelhecimento (arteriosclerose): o domínio destas propriedades assegura a prevenção de complicações vasculares, necrose de tecidos e falhas mecânicas durante os cuidados diários de saúde."
  },
  {
    "id": 2178,
    "topicId": 2,
    "question": "Na física aplicada aos materiais e dispositivos de saúde, como se caracteriza o comportamento do/a suturas metálicas de agrafos cirúrgicos de aço sob solicitações mecânicas?",
    "options": [
      "Caracteriza-se por: apresentam comportamento puramente plástico no fecho com o agrafador mecânico, mantendo as bordas da pele coaptadas sem retorno elástico.",
      "Caracteriza-se por ser infinitamente compressível como um gás ideal rarefeito.",
      "Caracteriza-se por quebrar instantaneamente ao toque de uma gota de água.",
      "Caracteriza-se por emitir ondas de rádio moduladas em frequência."
    ],
    "correctIndex": 0,
    "explanation": "O/A suturas metálicas de agrafos cirúrgicos de aço atua na prática clínica através do seguinte mecanismo biomecânico: apresentam comportamento puramente plástico no fecho com o agrafador mecânico, mantendo as bordas da pele coaptadas sem retorno elástico.",
    "distractorAnalysis": [
      "Opção incorreta: considera que o/a suturas metálicas de agrafos cirúrgicos de aço não obedece às leis da mecânica clássica por ser um material biológico.",
      "Opção incorreta: confunde módulo elástico com radioatividade nuclear artificial.",
      "Opção incorreta: sugere que o material perde a totalidade do seu peso ao ser desinfetado com álcool a 70%."
    ],
    "nursingApplication": "O enfermeiro vigia o desempenho do/a suturas metálicas de agrafos cirúrgicos de aço: o domínio destas propriedades assegura a prevenção de complicações vasculares, necrose de tecidos e falhas mecânicas durante os cuidados diários de saúde."
  },
  {
    "id": 2179,
    "topicId": 2,
    "question": "Na física aplicada aos materiais e dispositivos de saúde, como se caracteriza o comportamento do/a comportamento reológico do líquido sinovial articular sob solicitações mecânicas?",
    "options": [
      "Caracteriza-se por: fluido pseudoplástico rico em ácido hialurónico que é altamente viscoso em repouso (lubrificação protetora) e torna-se fluido e pouco viscoso sob movimento rápido (mínima fricção articular).",
      "Caracteriza-se por ser infinitamente compressível como um gás ideal rarefeito.",
      "Caracteriza-se por quebrar instantaneamente ao toque de uma gota de água.",
      "Caracteriza-se por emitir ondas de rádio moduladas em frequência."
    ],
    "correctIndex": 0,
    "explanation": "O/A comportamento reológico do líquido sinovial articular atua na prática clínica através do seguinte mecanismo biomecânico: fluido pseudoplástico rico em ácido hialurónico que é altamente viscoso em repouso (lubrificação protetora) e torna-se fluido e pouco viscoso sob movimento rápido (mínima fricção articular).",
    "distractorAnalysis": [
      "Opção incorreta: considera que o/a comportamento reológico do líquido sinovial articular não obedece às leis da mecânica clássica por ser um material biológico.",
      "Opção incorreta: confunde módulo elástico com radioatividade nuclear artificial.",
      "Opção incorreta: sugere que o material perde a totalidade do seu peso ao ser desinfetado com álcool a 70%."
    ],
    "nursingApplication": "O enfermeiro vigia o desempenho do/a comportamento reológico do líquido sinovial articular: o domínio destas propriedades assegura a prevenção de complicações vasculares, necrose de tecidos e falhas mecânicas durante os cuidados diários de saúde."
  },
  {
    "id": 2180,
    "topicId": 2,
    "question": "Na física aplicada aos materiais e dispositivos de saúde, como se caracteriza o comportamento do/a tubos de aspiração cirúrgica de silicone médico reforçado com espiral sob solicitações mecânicas?",
    "options": [
      "Caracteriza-se por: a espiral rígida de aço ou polímero impede o colapso do tubo sob vácuo de alta sucção (resistência à pressão negativa de colapso).",
      "Caracteriza-se por ser infinitamente compressível como um gás ideal rarefeito.",
      "Caracteriza-se por quebrar instantaneamente ao toque de uma gota de água.",
      "Caracteriza-se por emitir ondas de rádio moduladas em frequência."
    ],
    "correctIndex": 0,
    "explanation": "O/A tubos de aspiração cirúrgica de silicone médico reforçado com espiral atua na prática clínica através do seguinte mecanismo biomecânico: a espiral rígida de aço ou polímero impede o colapso do tubo sob vácuo de alta sucção (resistência à pressão negativa de colapso).",
    "distractorAnalysis": [
      "Opção incorreta: considera que o/a tubos de aspiração cirúrgica de silicone médico reforçado com espiral não obedece às leis da mecânica clássica por ser um material biológico.",
      "Opção incorreta: confunde módulo elástico com radioatividade nuclear artificial.",
      "Opção incorreta: sugere que o material perde a totalidade do seu peso ao ser desinfetado com álcool a 70%."
    ],
    "nursingApplication": "O enfermeiro vigia o desempenho do/a tubos de aspiração cirúrgica de silicone médico reforçado com espiral: o domínio destas propriedades assegura a prevenção de complicações vasculares, necrose de tecidos e falhas mecânicas durante os cuidados diários de saúde."
  },
  {
    "id": 2181,
    "topicId": 2,
    "question": "Na física aplicada aos materiais e dispositivos de saúde, como se caracteriza o comportamento do/a elastómero de vedação em seringas pré-cheias de heparina sob solicitações mecânicas?",
    "options": [
      "Caracteriza-se por: borracha sintética de alta estanquicidade que mantém a esterilidade e impede a entrada de ar com coeficiente de atrito cinético constante no cilindro.",
      "Caracteriza-se por ser infinitamente compressível como um gás ideal rarefeito.",
      "Caracteriza-se por quebrar instantaneamente ao toque de uma gota de água.",
      "Caracteriza-se por emitir ondas de rádio moduladas em frequência."
    ],
    "correctIndex": 0,
    "explanation": "O/A elastómero de vedação em seringas pré-cheias de heparina atua na prática clínica através do seguinte mecanismo biomecânico: borracha sintética de alta estanquicidade que mantém a esterilidade e impede a entrada de ar com coeficiente de atrito cinético constante no cilindro.",
    "distractorAnalysis": [
      "Opção incorreta: considera que o/a elastómero de vedação em seringas pré-cheias de heparina não obedece às leis da mecânica clássica por ser um material biológico.",
      "Opção incorreta: confunde módulo elástico com radioatividade nuclear artificial.",
      "Opção incorreta: sugere que o material perde a totalidade do seu peso ao ser desinfetado com álcool a 70%."
    ],
    "nursingApplication": "O enfermeiro vigia o desempenho do/a elastómero de vedação em seringas pré-cheias de heparina: o domínio destas propriedades assegura a prevenção de complicações vasculares, necrose de tecidos e falhas mecânicas durante os cuidados diários de saúde."
  },
  {
    "id": 2182,
    "topicId": 2,
    "question": "Na física aplicada aos materiais e dispositivos de saúde, como se caracteriza o comportamento do/a fixador externo ortopédico de carbono sob solicitações mecânicas?",
    "options": [
      "Caracteriza-se por: material compósito de fibra de carbono com altíssima rigidez e radiotransparência, permitindo o controlo radiológico da fratura sem artefactos metálicos opacos.",
      "Caracteriza-se por ser infinitamente compressível como um gás ideal rarefeito.",
      "Caracteriza-se por quebrar instantaneamente ao toque de uma gota de água.",
      "Caracteriza-se por emitir ondas de rádio moduladas em frequência."
    ],
    "correctIndex": 0,
    "explanation": "O/A fixador externo ortopédico de carbono atua na prática clínica através do seguinte mecanismo biomecânico: material compósito de fibra de carbono com altíssima rigidez e radiotransparência, permitindo o controlo radiológico da fratura sem artefactos metálicos opacos.",
    "distractorAnalysis": [
      "Opção incorreta: considera que o/a fixador externo ortopédico de carbono não obedece às leis da mecânica clássica por ser um material biológico.",
      "Opção incorreta: confunde módulo elástico com radioatividade nuclear artificial.",
      "Opção incorreta: sugere que o material perde a totalidade do seu peso ao ser desinfetado com álcool a 70%."
    ],
    "nursingApplication": "O enfermeiro vigia o desempenho do/a fixador externo ortopédico de carbono: o domínio destas propriedades assegura a prevenção de complicações vasculares, necrose de tecidos e falhas mecânicas durante os cuidados diários de saúde."
  },
  {
    "id": 2183,
    "topicId": 2,
    "question": "Na física aplicada aos materiais e dispositivos de saúde, como se caracteriza o comportamento do/a meias anti-embolia cirúrgicas brancas (TED stockings) sob solicitações mecânicas?",
    "options": [
      "Caracteriza-se por: exercem pressão profilática de 18 mmHg no tornozelo e 8 mmHg na coxa para doentes acamados em pós-operatório sem mobilidade ativa.",
      "Caracteriza-se por ser infinitamente compressível como um gás ideal rarefeito.",
      "Caracteriza-se por quebrar instantaneamente ao toque de uma gota de água.",
      "Caracteriza-se por emitir ondas de rádio moduladas em frequência."
    ],
    "correctIndex": 0,
    "explanation": "O/A meias anti-embolia cirúrgicas brancas (TED stockings) atua na prática clínica através do seguinte mecanismo biomecânico: exercem pressão profilática de 18 mmHg no tornozelo e 8 mmHg na coxa para doentes acamados em pós-operatório sem mobilidade ativa.",
    "distractorAnalysis": [
      "Opção incorreta: considera que o/a meias anti-embolia cirúrgicas brancas (TED stockings) não obedece às leis da mecânica clássica por ser um material biológico.",
      "Opção incorreta: confunde módulo elástico com radioatividade nuclear artificial.",
      "Opção incorreta: sugere que o material perde a totalidade do seu peso ao ser desinfetado com álcool a 70%."
    ],
    "nursingApplication": "O enfermeiro vigia o desempenho do/a meias anti-embolia cirúrgicas brancas (TED stockings): o domínio destas propriedades assegura a prevenção de complicações vasculares, necrose de tecidos e falhas mecânicas durante os cuidados diários de saúde."
  },
  {
    "id": 2184,
    "topicId": 2,
    "question": "Na física aplicada aos materiais e dispositivos de saúde, como se caracteriza o comportamento do/a tiras adesivas esterilizadas de aproximação cutânea (Steri-Strips) sob solicitações mecânicas?",
    "options": [
      "Caracteriza-se por: reforçadas com filamentos de poliéster para manter tensão de tração constante nas bordas da ferida após remoção precoce de pontos de sutura.",
      "Caracteriza-se por ser infinitamente compressível como um gás ideal rarefeito.",
      "Caracteriza-se por quebrar instantaneamente ao toque de uma gota de água.",
      "Caracteriza-se por emitir ondas de rádio moduladas em frequência."
    ],
    "correctIndex": 0,
    "explanation": "O/A tiras adesivas esterilizadas de aproximação cutânea (Steri-Strips) atua na prática clínica através do seguinte mecanismo biomecânico: reforçadas com filamentos de poliéster para manter tensão de tração constante nas bordas da ferida após remoção precoce de pontos de sutura.",
    "distractorAnalysis": [
      "Opção incorreta: considera que o/a tiras adesivas esterilizadas de aproximação cutânea (Steri-Strips) não obedece às leis da mecânica clássica por ser um material biológico.",
      "Opção incorreta: confunde módulo elástico com radioatividade nuclear artificial.",
      "Opção incorreta: sugere que o material perde a totalidade do seu peso ao ser desinfetado com álcool a 70%."
    ],
    "nursingApplication": "O enfermeiro vigia o desempenho do/a tiras adesivas esterilizadas de aproximação cutânea (Steri-Strips): o domínio destas propriedades assegura a prevenção de complicações vasculares, necrose de tecidos e falhas mecânicas durante os cuidados diários de saúde."
  },
  {
    "id": 2185,
    "topicId": 2,
    "question": "Na física aplicada aos materiais e dispositivos de saúde, como se caracteriza o comportamento do/a módulo elástico de Young de próteses de titânio (E ~ 110 GPa) sob solicitações mecânicas?",
    "options": [
      "Caracteriza-se por: rigidez intermediária entre o osso cortical (18 GPa) e o aço cirúrgico (200 GPa), reduzindo o fenómeno de 'stress shielding' ou reabsorção óssea periprotésica por desuso mecânico.",
      "Caracteriza-se por ser infinitamente compressível como um gás ideal rarefeito.",
      "Caracteriza-se por quebrar instantaneamente ao toque de uma gota de água.",
      "Caracteriza-se por emitir ondas de rádio moduladas em frequência."
    ],
    "correctIndex": 0,
    "explanation": "O/A módulo elástico de Young de próteses de titânio (E ~ 110 GPa) atua na prática clínica através do seguinte mecanismo biomecânico: rigidez intermediária entre o osso cortical (18 GPa) e o aço cirúrgico (200 GPa), reduzindo o fenómeno de 'stress shielding' ou reabsorção óssea periprotésica por desuso mecânico.",
    "distractorAnalysis": [
      "Opção incorreta: considera que o/a módulo elástico de Young de próteses de titânio (E ~ 110 GPa) não obedece às leis da mecânica clássica por ser um material biológico.",
      "Opção incorreta: confunde módulo elástico com radioatividade nuclear artificial.",
      "Opção incorreta: sugere que o material perde a totalidade do seu peso ao ser desinfetado com álcool a 70%."
    ],
    "nursingApplication": "O enfermeiro vigia o desempenho do/a módulo elástico de Young de próteses de titânio (E ~ 110 GPa): o domínio destas propriedades assegura a prevenção de complicações vasculares, necrose de tecidos e falhas mecânicas durante os cuidados diários de saúde."
  },
  {
    "id": 2186,
    "topicId": 2,
    "question": "Na física aplicada aos materiais e dispositivos de saúde, como se caracteriza o comportamento do/a propriedades de fluência (creep) dos discos intervertebrais sob solicitações mecânicas?",
    "options": [
      "Caracteriza-se por: perda progressiva de água sob a carga vertical durante o dia com diminuição da altura do disco, recuperando a hidratação e a espessura elástica durante o repouso noturno no leito.",
      "Caracteriza-se por ser infinitamente compressível como um gás ideal rarefeito.",
      "Caracteriza-se por quebrar instantaneamente ao toque de uma gota de água.",
      "Caracteriza-se por emitir ondas de rádio moduladas em frequência."
    ],
    "correctIndex": 0,
    "explanation": "O/A propriedades de fluência (creep) dos discos intervertebrais atua na prática clínica através do seguinte mecanismo biomecânico: perda progressiva de água sob a carga vertical durante o dia com diminuição da altura do disco, recuperando a hidratação e a espessura elástica durante o repouso noturno no leito.",
    "distractorAnalysis": [
      "Opção incorreta: considera que o/a propriedades de fluência (creep) dos discos intervertebrais não obedece às leis da mecânica clássica por ser um material biológico.",
      "Opção incorreta: confunde módulo elástico com radioatividade nuclear artificial.",
      "Opção incorreta: sugere que o material perde a totalidade do seu peso ao ser desinfetado com álcool a 70%."
    ],
    "nursingApplication": "O enfermeiro vigia o desempenho do/a propriedades de fluência (creep) dos discos intervertebrais: o domínio destas propriedades assegura a prevenção de complicações vasculares, necrose de tecidos e falhas mecânicas durante os cuidados diários de saúde."
  },
  {
    "id": 2187,
    "topicId": 2,
    "question": "Na física aplicada aos materiais e dispositivos de saúde, como se caracteriza o comportamento do/a elasticidade das paredes arteriais no envelhecimento (arteriosclerose) sob solicitações mecânicas?",
    "options": [
      "Caracteriza-se por: substituição das fibras de elastina por fibras rígidas de colagénio, aumentando o Módulo de Young arterial e elevando a pressão arterial de pulso (sistólica muito alta com diastólica normal ou baixa).",
      "Caracteriza-se por ser infinitamente compressível como um gás ideal rarefeito.",
      "Caracteriza-se por quebrar instantaneamente ao toque de uma gota de água.",
      "Caracteriza-se por emitir ondas de rádio moduladas em frequência."
    ],
    "correctIndex": 0,
    "explanation": "O/A elasticidade das paredes arteriais no envelhecimento (arteriosclerose) atua na prática clínica através do seguinte mecanismo biomecânico: substituição das fibras de elastina por fibras rígidas de colagénio, aumentando o Módulo de Young arterial e elevando a pressão arterial de pulso (sistólica muito alta com diastólica normal ou baixa).",
    "distractorAnalysis": [
      "Opção incorreta: considera que o/a elasticidade das paredes arteriais no envelhecimento (arteriosclerose) não obedece às leis da mecânica clássica por ser um material biológico.",
      "Opção incorreta: confunde módulo elástico com radioatividade nuclear artificial.",
      "Opção incorreta: sugere que o material perde a totalidade do seu peso ao ser desinfetado com álcool a 70%."
    ],
    "nursingApplication": "O enfermeiro vigia o desempenho do/a elasticidade das paredes arteriais no envelhecimento (arteriosclerose): o domínio destas propriedades assegura a prevenção de complicações vasculares, necrose de tecidos e falhas mecânicas durante os cuidados diários de saúde."
  },
  {
    "id": 2188,
    "topicId": 2,
    "question": "Na física aplicada aos materiais e dispositivos de saúde, como se caracteriza o comportamento do/a suturas metálicas de agrafos cirúrgicos de aço sob solicitações mecânicas?",
    "options": [
      "Caracteriza-se por: apresentam comportamento puramente plástico no fecho com o agrafador mecânico, mantendo as bordas da pele coaptadas sem retorno elástico.",
      "Caracteriza-se por ser infinitamente compressível como um gás ideal rarefeito.",
      "Caracteriza-se por quebrar instantaneamente ao toque de uma gota de água.",
      "Caracteriza-se por emitir ondas de rádio moduladas em frequência."
    ],
    "correctIndex": 0,
    "explanation": "O/A suturas metálicas de agrafos cirúrgicos de aço atua na prática clínica através do seguinte mecanismo biomecânico: apresentam comportamento puramente plástico no fecho com o agrafador mecânico, mantendo as bordas da pele coaptadas sem retorno elástico.",
    "distractorAnalysis": [
      "Opção incorreta: considera que o/a suturas metálicas de agrafos cirúrgicos de aço não obedece às leis da mecânica clássica por ser um material biológico.",
      "Opção incorreta: confunde módulo elástico com radioatividade nuclear artificial.",
      "Opção incorreta: sugere que o material perde a totalidade do seu peso ao ser desinfetado com álcool a 70%."
    ],
    "nursingApplication": "O enfermeiro vigia o desempenho do/a suturas metálicas de agrafos cirúrgicos de aço: o domínio destas propriedades assegura a prevenção de complicações vasculares, necrose de tecidos e falhas mecânicas durante os cuidados diários de saúde."
  },
  {
    "id": 2189,
    "topicId": 2,
    "question": "Na física aplicada aos materiais e dispositivos de saúde, como se caracteriza o comportamento do/a comportamento reológico do líquido sinovial articular sob solicitações mecânicas?",
    "options": [
      "Caracteriza-se por: fluido pseudoplástico rico em ácido hialurónico que é altamente viscoso em repouso (lubrificação protetora) e torna-se fluido e pouco viscoso sob movimento rápido (mínima fricção articular).",
      "Caracteriza-se por ser infinitamente compressível como um gás ideal rarefeito.",
      "Caracteriza-se por quebrar instantaneamente ao toque de uma gota de água.",
      "Caracteriza-se por emitir ondas de rádio moduladas em frequência."
    ],
    "correctIndex": 0,
    "explanation": "O/A comportamento reológico do líquido sinovial articular atua na prática clínica através do seguinte mecanismo biomecânico: fluido pseudoplástico rico em ácido hialurónico que é altamente viscoso em repouso (lubrificação protetora) e torna-se fluido e pouco viscoso sob movimento rápido (mínima fricção articular).",
    "distractorAnalysis": [
      "Opção incorreta: considera que o/a comportamento reológico do líquido sinovial articular não obedece às leis da mecânica clássica por ser um material biológico.",
      "Opção incorreta: confunde módulo elástico com radioatividade nuclear artificial.",
      "Opção incorreta: sugere que o material perde a totalidade do seu peso ao ser desinfetado com álcool a 70%."
    ],
    "nursingApplication": "O enfermeiro vigia o desempenho do/a comportamento reológico do líquido sinovial articular: o domínio destas propriedades assegura a prevenção de complicações vasculares, necrose de tecidos e falhas mecânicas durante os cuidados diários de saúde."
  },
  {
    "id": 2190,
    "topicId": 2,
    "question": "Na física aplicada aos materiais e dispositivos de saúde, como se caracteriza o comportamento do/a tubos de aspiração cirúrgica de silicone médico reforçado com espiral sob solicitações mecânicas?",
    "options": [
      "Caracteriza-se por: a espiral rígida de aço ou polímero impede o colapso do tubo sob vácuo de alta sucção (resistência à pressão negativa de colapso).",
      "Caracteriza-se por ser infinitamente compressível como um gás ideal rarefeito.",
      "Caracteriza-se por quebrar instantaneamente ao toque de uma gota de água.",
      "Caracteriza-se por emitir ondas de rádio moduladas em frequência."
    ],
    "correctIndex": 0,
    "explanation": "O/A tubos de aspiração cirúrgica de silicone médico reforçado com espiral atua na prática clínica através do seguinte mecanismo biomecânico: a espiral rígida de aço ou polímero impede o colapso do tubo sob vácuo de alta sucção (resistência à pressão negativa de colapso).",
    "distractorAnalysis": [
      "Opção incorreta: considera que o/a tubos de aspiração cirúrgica de silicone médico reforçado com espiral não obedece às leis da mecânica clássica por ser um material biológico.",
      "Opção incorreta: confunde módulo elástico com radioatividade nuclear artificial.",
      "Opção incorreta: sugere que o material perde a totalidade do seu peso ao ser desinfetado com álcool a 70%."
    ],
    "nursingApplication": "O enfermeiro vigia o desempenho do/a tubos de aspiração cirúrgica de silicone médico reforçado com espiral: o domínio destas propriedades assegura a prevenção de complicações vasculares, necrose de tecidos e falhas mecânicas durante os cuidados diários de saúde."
  },
  {
    "id": 2191,
    "topicId": 2,
    "question": "Na física aplicada aos materiais e dispositivos de saúde, como se caracteriza o comportamento do/a elastómero de vedação em seringas pré-cheias de heparina sob solicitações mecânicas?",
    "options": [
      "Caracteriza-se por: borracha sintética de alta estanquicidade que mantém a esterilidade e impede a entrada de ar com coeficiente de atrito cinético constante no cilindro.",
      "Caracteriza-se por ser infinitamente compressível como um gás ideal rarefeito.",
      "Caracteriza-se por quebrar instantaneamente ao toque de uma gota de água.",
      "Caracteriza-se por emitir ondas de rádio moduladas em frequência."
    ],
    "correctIndex": 0,
    "explanation": "O/A elastómero de vedação em seringas pré-cheias de heparina atua na prática clínica através do seguinte mecanismo biomecânico: borracha sintética de alta estanquicidade que mantém a esterilidade e impede a entrada de ar com coeficiente de atrito cinético constante no cilindro.",
    "distractorAnalysis": [
      "Opção incorreta: considera que o/a elastómero de vedação em seringas pré-cheias de heparina não obedece às leis da mecânica clássica por ser um material biológico.",
      "Opção incorreta: confunde módulo elástico com radioatividade nuclear artificial.",
      "Opção incorreta: sugere que o material perde a totalidade do seu peso ao ser desinfetado com álcool a 70%."
    ],
    "nursingApplication": "O enfermeiro vigia o desempenho do/a elastómero de vedação em seringas pré-cheias de heparina: o domínio destas propriedades assegura a prevenção de complicações vasculares, necrose de tecidos e falhas mecânicas durante os cuidados diários de saúde."
  },
  {
    "id": 2192,
    "topicId": 2,
    "question": "Na física aplicada aos materiais e dispositivos de saúde, como se caracteriza o comportamento do/a fixador externo ortopédico de carbono sob solicitações mecânicas?",
    "options": [
      "Caracteriza-se por: material compósito de fibra de carbono com altíssima rigidez e radiotransparência, permitindo o controlo radiológico da fratura sem artefactos metálicos opacos.",
      "Caracteriza-se por ser infinitamente compressível como um gás ideal rarefeito.",
      "Caracteriza-se por quebrar instantaneamente ao toque de uma gota de água.",
      "Caracteriza-se por emitir ondas de rádio moduladas em frequência."
    ],
    "correctIndex": 0,
    "explanation": "O/A fixador externo ortopédico de carbono atua na prática clínica através do seguinte mecanismo biomecânico: material compósito de fibra de carbono com altíssima rigidez e radiotransparência, permitindo o controlo radiológico da fratura sem artefactos metálicos opacos.",
    "distractorAnalysis": [
      "Opção incorreta: considera que o/a fixador externo ortopédico de carbono não obedece às leis da mecânica clássica por ser um material biológico.",
      "Opção incorreta: confunde módulo elástico com radioatividade nuclear artificial.",
      "Opção incorreta: sugere que o material perde a totalidade do seu peso ao ser desinfetado com álcool a 70%."
    ],
    "nursingApplication": "O enfermeiro vigia o desempenho do/a fixador externo ortopédico de carbono: o domínio destas propriedades assegura a prevenção de complicações vasculares, necrose de tecidos e falhas mecânicas durante os cuidados diários de saúde."
  },
  {
    "id": 2193,
    "topicId": 2,
    "question": "Na física aplicada aos materiais e dispositivos de saúde, como se caracteriza o comportamento do/a meias anti-embolia cirúrgicas brancas (TED stockings) sob solicitações mecânicas?",
    "options": [
      "Caracteriza-se por: exercem pressão profilática de 18 mmHg no tornozelo e 8 mmHg na coxa para doentes acamados em pós-operatório sem mobilidade ativa.",
      "Caracteriza-se por ser infinitamente compressível como um gás ideal rarefeito.",
      "Caracteriza-se por quebrar instantaneamente ao toque de uma gota de água.",
      "Caracteriza-se por emitir ondas de rádio moduladas em frequência."
    ],
    "correctIndex": 0,
    "explanation": "O/A meias anti-embolia cirúrgicas brancas (TED stockings) atua na prática clínica através do seguinte mecanismo biomecânico: exercem pressão profilática de 18 mmHg no tornozelo e 8 mmHg na coxa para doentes acamados em pós-operatório sem mobilidade ativa.",
    "distractorAnalysis": [
      "Opção incorreta: considera que o/a meias anti-embolia cirúrgicas brancas (TED stockings) não obedece às leis da mecânica clássica por ser um material biológico.",
      "Opção incorreta: confunde módulo elástico com radioatividade nuclear artificial.",
      "Opção incorreta: sugere que o material perde a totalidade do seu peso ao ser desinfetado com álcool a 70%."
    ],
    "nursingApplication": "O enfermeiro vigia o desempenho do/a meias anti-embolia cirúrgicas brancas (TED stockings): o domínio destas propriedades assegura a prevenção de complicações vasculares, necrose de tecidos e falhas mecânicas durante os cuidados diários de saúde."
  },
  {
    "id": 2194,
    "topicId": 2,
    "question": "Na física aplicada aos materiais e dispositivos de saúde, como se caracteriza o comportamento do/a tiras adesivas esterilizadas de aproximação cutânea (Steri-Strips) sob solicitações mecânicas?",
    "options": [
      "Caracteriza-se por: reforçadas com filamentos de poliéster para manter tensão de tração constante nas bordas da ferida após remoção precoce de pontos de sutura.",
      "Caracteriza-se por ser infinitamente compressível como um gás ideal rarefeito.",
      "Caracteriza-se por quebrar instantaneamente ao toque de uma gota de água.",
      "Caracteriza-se por emitir ondas de rádio moduladas em frequência."
    ],
    "correctIndex": 0,
    "explanation": "O/A tiras adesivas esterilizadas de aproximação cutânea (Steri-Strips) atua na prática clínica através do seguinte mecanismo biomecânico: reforçadas com filamentos de poliéster para manter tensão de tração constante nas bordas da ferida após remoção precoce de pontos de sutura.",
    "distractorAnalysis": [
      "Opção incorreta: considera que o/a tiras adesivas esterilizadas de aproximação cutânea (Steri-Strips) não obedece às leis da mecânica clássica por ser um material biológico.",
      "Opção incorreta: confunde módulo elástico com radioatividade nuclear artificial.",
      "Opção incorreta: sugere que o material perde a totalidade do seu peso ao ser desinfetado com álcool a 70%."
    ],
    "nursingApplication": "O enfermeiro vigia o desempenho do/a tiras adesivas esterilizadas de aproximação cutânea (Steri-Strips): o domínio destas propriedades assegura a prevenção de complicações vasculares, necrose de tecidos e falhas mecânicas durante os cuidados diários de saúde."
  },
  {
    "id": 2195,
    "topicId": 2,
    "question": "Na física aplicada aos materiais e dispositivos de saúde, como se caracteriza o comportamento do/a módulo elástico de Young de próteses de titânio (E ~ 110 GPa) sob solicitações mecânicas?",
    "options": [
      "Caracteriza-se por: rigidez intermediária entre o osso cortical (18 GPa) e o aço cirúrgico (200 GPa), reduzindo o fenómeno de 'stress shielding' ou reabsorção óssea periprotésica por desuso mecânico.",
      "Caracteriza-se por ser infinitamente compressível como um gás ideal rarefeito.",
      "Caracteriza-se por quebrar instantaneamente ao toque de uma gota de água.",
      "Caracteriza-se por emitir ondas de rádio moduladas em frequência."
    ],
    "correctIndex": 0,
    "explanation": "O/A módulo elástico de Young de próteses de titânio (E ~ 110 GPa) atua na prática clínica através do seguinte mecanismo biomecânico: rigidez intermediária entre o osso cortical (18 GPa) e o aço cirúrgico (200 GPa), reduzindo o fenómeno de 'stress shielding' ou reabsorção óssea periprotésica por desuso mecânico.",
    "distractorAnalysis": [
      "Opção incorreta: considera que o/a módulo elástico de Young de próteses de titânio (E ~ 110 GPa) não obedece às leis da mecânica clássica por ser um material biológico.",
      "Opção incorreta: confunde módulo elástico com radioatividade nuclear artificial.",
      "Opção incorreta: sugere que o material perde a totalidade do seu peso ao ser desinfetado com álcool a 70%."
    ],
    "nursingApplication": "O enfermeiro vigia o desempenho do/a módulo elástico de Young de próteses de titânio (E ~ 110 GPa): o domínio destas propriedades assegura a prevenção de complicações vasculares, necrose de tecidos e falhas mecânicas durante os cuidados diários de saúde."
  },
  {
    "id": 2196,
    "topicId": 2,
    "question": "Na física aplicada aos materiais e dispositivos de saúde, como se caracteriza o comportamento do/a propriedades de fluência (creep) dos discos intervertebrais sob solicitações mecânicas?",
    "options": [
      "Caracteriza-se por: perda progressiva de água sob a carga vertical durante o dia com diminuição da altura do disco, recuperando a hidratação e a espessura elástica durante o repouso noturno no leito.",
      "Caracteriza-se por ser infinitamente compressível como um gás ideal rarefeito.",
      "Caracteriza-se por quebrar instantaneamente ao toque de uma gota de água.",
      "Caracteriza-se por emitir ondas de rádio moduladas em frequência."
    ],
    "correctIndex": 0,
    "explanation": "O/A propriedades de fluência (creep) dos discos intervertebrais atua na prática clínica através do seguinte mecanismo biomecânico: perda progressiva de água sob a carga vertical durante o dia com diminuição da altura do disco, recuperando a hidratação e a espessura elástica durante o repouso noturno no leito.",
    "distractorAnalysis": [
      "Opção incorreta: considera que o/a propriedades de fluência (creep) dos discos intervertebrais não obedece às leis da mecânica clássica por ser um material biológico.",
      "Opção incorreta: confunde módulo elástico com radioatividade nuclear artificial.",
      "Opção incorreta: sugere que o material perde a totalidade do seu peso ao ser desinfetado com álcool a 70%."
    ],
    "nursingApplication": "O enfermeiro vigia o desempenho do/a propriedades de fluência (creep) dos discos intervertebrais: o domínio destas propriedades assegura a prevenção de complicações vasculares, necrose de tecidos e falhas mecânicas durante os cuidados diários de saúde."
  },
  {
    "id": 2197,
    "topicId": 2,
    "question": "Na física aplicada aos materiais e dispositivos de saúde, como se caracteriza o comportamento do/a elasticidade das paredes arteriais no envelhecimento (arteriosclerose) sob solicitações mecânicas?",
    "options": [
      "Caracteriza-se por: substituição das fibras de elastina por fibras rígidas de colagénio, aumentando o Módulo de Young arterial e elevando a pressão arterial de pulso (sistólica muito alta com diastólica normal ou baixa).",
      "Caracteriza-se por ser infinitamente compressível como um gás ideal rarefeito.",
      "Caracteriza-se por quebrar instantaneamente ao toque de uma gota de água.",
      "Caracteriza-se por emitir ondas de rádio moduladas em frequência."
    ],
    "correctIndex": 0,
    "explanation": "O/A elasticidade das paredes arteriais no envelhecimento (arteriosclerose) atua na prática clínica através do seguinte mecanismo biomecânico: substituição das fibras de elastina por fibras rígidas de colagénio, aumentando o Módulo de Young arterial e elevando a pressão arterial de pulso (sistólica muito alta com diastólica normal ou baixa).",
    "distractorAnalysis": [
      "Opção incorreta: considera que o/a elasticidade das paredes arteriais no envelhecimento (arteriosclerose) não obedece às leis da mecânica clássica por ser um material biológico.",
      "Opção incorreta: confunde módulo elástico com radioatividade nuclear artificial.",
      "Opção incorreta: sugere que o material perde a totalidade do seu peso ao ser desinfetado com álcool a 70%."
    ],
    "nursingApplication": "O enfermeiro vigia o desempenho do/a elasticidade das paredes arteriais no envelhecimento (arteriosclerose): o domínio destas propriedades assegura a prevenção de complicações vasculares, necrose de tecidos e falhas mecânicas durante os cuidados diários de saúde."
  },
  {
    "id": 2198,
    "topicId": 2,
    "question": "Na física aplicada aos materiais e dispositivos de saúde, como se caracteriza o comportamento do/a suturas metálicas de agrafos cirúrgicos de aço sob solicitações mecânicas?",
    "options": [
      "Caracteriza-se por: apresentam comportamento puramente plástico no fecho com o agrafador mecânico, mantendo as bordas da pele coaptadas sem retorno elástico.",
      "Caracteriza-se por ser infinitamente compressível como um gás ideal rarefeito.",
      "Caracteriza-se por quebrar instantaneamente ao toque de uma gota de água.",
      "Caracteriza-se por emitir ondas de rádio moduladas em frequência."
    ],
    "correctIndex": 0,
    "explanation": "O/A suturas metálicas de agrafos cirúrgicos de aço atua na prática clínica através do seguinte mecanismo biomecânico: apresentam comportamento puramente plástico no fecho com o agrafador mecânico, mantendo as bordas da pele coaptadas sem retorno elástico.",
    "distractorAnalysis": [
      "Opção incorreta: considera que o/a suturas metálicas de agrafos cirúrgicos de aço não obedece às leis da mecânica clássica por ser um material biológico.",
      "Opção incorreta: confunde módulo elástico com radioatividade nuclear artificial.",
      "Opção incorreta: sugere que o material perde a totalidade do seu peso ao ser desinfetado com álcool a 70%."
    ],
    "nursingApplication": "O enfermeiro vigia o desempenho do/a suturas metálicas de agrafos cirúrgicos de aço: o domínio destas propriedades assegura a prevenção de complicações vasculares, necrose de tecidos e falhas mecânicas durante os cuidados diários de saúde."
  },
  {
    "id": 2199,
    "topicId": 2,
    "question": "Na física aplicada aos materiais e dispositivos de saúde, como se caracteriza o comportamento do/a comportamento reológico do líquido sinovial articular sob solicitações mecânicas?",
    "options": [
      "Caracteriza-se por: fluido pseudoplástico rico em ácido hialurónico que é altamente viscoso em repouso (lubrificação protetora) e torna-se fluido e pouco viscoso sob movimento rápido (mínima fricção articular).",
      "Caracteriza-se por ser infinitamente compressível como um gás ideal rarefeito.",
      "Caracteriza-se por quebrar instantaneamente ao toque de uma gota de água.",
      "Caracteriza-se por emitir ondas de rádio moduladas em frequência."
    ],
    "correctIndex": 0,
    "explanation": "O/A comportamento reológico do líquido sinovial articular atua na prática clínica através do seguinte mecanismo biomecânico: fluido pseudoplástico rico em ácido hialurónico que é altamente viscoso em repouso (lubrificação protetora) e torna-se fluido e pouco viscoso sob movimento rápido (mínima fricção articular).",
    "distractorAnalysis": [
      "Opção incorreta: considera que o/a comportamento reológico do líquido sinovial articular não obedece às leis da mecânica clássica por ser um material biológico.",
      "Opção incorreta: confunde módulo elástico com radioatividade nuclear artificial.",
      "Opção incorreta: sugere que o material perde a totalidade do seu peso ao ser desinfetado com álcool a 70%."
    ],
    "nursingApplication": "O enfermeiro vigia o desempenho do/a comportamento reológico do líquido sinovial articular: o domínio destas propriedades assegura a prevenção de complicações vasculares, necrose de tecidos e falhas mecânicas durante os cuidados diários de saúde."
  },
  {
    "id": 2200,
    "topicId": 2,
    "question": "Na física aplicada aos materiais e dispositivos de saúde, como se caracteriza o comportamento do/a tubos de aspiração cirúrgica de silicone médico reforçado com espiral sob solicitações mecânicas?",
    "options": [
      "Caracteriza-se por: a espiral rígida de aço ou polímero impede o colapso do tubo sob vácuo de alta sucção (resistência à pressão negativa de colapso).",
      "Caracteriza-se por ser infinitamente compressível como um gás ideal rarefeito.",
      "Caracteriza-se por quebrar instantaneamente ao toque de uma gota de água.",
      "Caracteriza-se por emitir ondas de rádio moduladas em frequência."
    ],
    "correctIndex": 0,
    "explanation": "O/A tubos de aspiração cirúrgica de silicone médico reforçado com espiral atua na prática clínica através do seguinte mecanismo biomecânico: a espiral rígida de aço ou polímero impede o colapso do tubo sob vácuo de alta sucção (resistência à pressão negativa de colapso).",
    "distractorAnalysis": [
      "Opção incorreta: considera que o/a tubos de aspiração cirúrgica de silicone médico reforçado com espiral não obedece às leis da mecânica clássica por ser um material biológico.",
      "Opção incorreta: confunde módulo elástico com radioatividade nuclear artificial.",
      "Opção incorreta: sugere que o material perde a totalidade do seu peso ao ser desinfetado com álcool a 70%."
    ],
    "nursingApplication": "O enfermeiro vigia o desempenho do/a tubos de aspiração cirúrgica de silicone médico reforçado com espiral: o domínio destas propriedades assegura a prevenção de complicações vasculares, necrose de tecidos e falhas mecânicas durante os cuidados diários de saúde."
  }
];
