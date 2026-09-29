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
      "τ = F / d · cos(θ), onde a força é dividida pela distância perpendicular ao fulcro articular do membro.",
      "τ = F · d · sen(θ), onde F é o módulo da força, d a distância ao eixo e θ o ângulo entre a força e o braço.",
      "τ = m · g · d², sendo diretamente proporcional ao quadrado da distância geométrica ao ponto de apoio.",
      "τ = F · a · sen(θ), onde a é a aceleração linear instantânea transmitida ao segmento esquelético móvel."
    ],
    "correctIndex": 1,
    "explanation": "O momento de uma força (ou torque) é uma grandeza vetorial cujo módulo é dado por τ = F · d · sen(θ) (ou τ = F · b, onde b = d · sen(θ) é o braço de alavanca, ou seja, a distância perpendicular do eixo de rotação à linha de ação da força). A sua unidade no Sistema Internacional é o Newton-metro (N·m).",
    "distractorAnalysis": [
      "Está incorreta: o momento de uma força é o produto da força pelo braço (F · d) e não a sua divisão.",
      "Está incorreta: o torque varia linearmente com a distância (d) e não com o seu quadrado (d²).",
      "Está incorreta: o torque depende da força aplicada e do braço de alavanca e não da aceleração linear pura."
    ],
    "nursingApplication": "Na manipulação de manivelas de camas articuladas manuais, válvulas de garrafas de oxigénio medicinal ou chaves de rodas de macas, aplicar a força perpendicularmente à haste e na sua extremidade mais distante do fulcro maximiza o braço de alavanca, reduzindo drasticamente o esforço muscular exigido do enfermeiro."
  },
  {
    "id": 2002,
    "topicId": 2,
    "question": "Para que um corpo extenso se encontre em equilíbrio estático absoluto (sem translação nem rotação), quais são as duas condições mecânicas fundamentais que devem ser simultaneamente satisfeitas?",
    "options": [
      "A velocidade linear do corpo deve ser constante e positiva, independentemente do somatório dos momentos de torção.",
      "Apenas a resultante das forças deve ser nula (∑F = 0), pois a ausência de translação anula automaticamente a rotação.",
      "A resultante das forças externas deve ser nula (∑F = 0) e a soma de todos os momentos de força deve ser nula (∑τ = 0).",
      "A aceleração angular deve ser estritamente constante e diferente de zero para contrabalançar o efeito da gravidade."
    ],
    "correctIndex": 2,
    "explanation": "O equilíbrio estático de um corpo rígido exige duas condições independentes: 1) Equilíbrio translacional: a soma vetorial de todas as forças externas deve ser zero (∑F = 0), garantindo aceleração linear nula (a = 0); 2) Equilíbrio rotacional: a soma vetorial dos momentos de força em relação a qualquer eixo de rotação deve ser zero (∑τ = 0), garantindo aceleração angular nula (α = 0).",
    "distractorAnalysis": [
      "Está incorreta: velocidade constante não nula caracteriza movimento e não equilíbrio estático absoluto de repouso.",
      "Está incorreta: um corpo pode ter ∑F = 0 e sofrer rotação acelerada se houver um binário de forças com ∑τ ≠ 0.",
      "Está incorreta: aceleração angular não nula (α ≠ 0) significa desequilíbrio rotacional e rotação acelerada."
    ],
    "nursingApplication": "Na montagem de sistemas de tração ortopédica contínua (como a tração esquelética de Thomas ou de Russell num doente com fratura de fémur), o alinhamento dos cabos, polias e contrapesos tem de assegurar simultaneamente ∑F = 0 e ∑τ = 0 no membro, impedindo rotações indesejadas do foco de fratura."
  },
  {
    "id": 2003,
    "topicId": 2,
    "question": "A Vantagem Mecânica (VM) de um sistema de alavancas é definida teoricamente como a razão entre:",
    "options": [
      "A potência metabólica consumida pelo músculo dividida pelo peso do segmento corporal mobilizado no espaço.",
      "O quociente entre o braço de resistência e o braço de potência (VM = d_R / d_P), expressando o ganho de força.",
      "A aceleração angular desenvolvida pela carga a dividir pela aceleração da gravidade terrestre de 9,8 m/s².",
      "A razão entre a força de resistência e a força de potência (VM = F_R / F_P = d_P / d_R) em equilíbrio estático."
    ],
    "correctIndex": 3,
    "explanation": "A Vantagem Mecânica (VM) expressa a amplificação da força num sistema mecânico: VM = F_R / F_P. Pelo princípio dos momentos no equilíbrio (F_P · d_P = F_R · d_R), tem-se idealmente VM = d_P / d_R. Se VM > 1, o sistema poupa força (exige menos força motora do que a carga); se VM < 1, o sistema perde em força mas ganha proporcionalmente em velocidade e amplitude de movimento.",
    "distractorAnalysis": [
      "Está incorreta: confunde vantagem mecânica estática com o rendimento ou consumo bioenergético muscular.",
      "Está incorreta: inverte a fração: a vantagem mecânica ideal é d_P / d_R e não d_R / d_P.",
      "Está incorreta: a vantagem mecânica é uma razão geométrica ou estática de forças e não de acelerações."
    ],
    "nursingApplication": "Compreender a vantagem mecânica permite ao enfermeiro escolher o instrumento clínico adequado: um cortador de gesso ou alicate cirúrgico com cabos compridos e mandíbulas curtas (d_P >> d_R) proporciona VM >> 1, permitindo cortar materiais duros com modesta força manual."
  },
  {
    "id": 2004,
    "topicId": 2,
    "question": "Numa alavanca de 1.ª classe (interfixa), qual é a disposição geométrica relativa entre o ponto de apoio (fulcro), o ponto de aplicação da potência (força motora) e a resistência (carga)?",
    "options": [
      "O ponto de apoio (fulcro) localiza-se entre o ponto de aplicação da potência motora e o da resistência de carga.",
      "A resistência de carga situa-se obrigatoriamente entre o ponto de apoio articular e a potência muscular motora.",
      "A potência muscular situa-se obrigatoriamente entre o ponto de apoio articular e a resistência da carga externa.",
      "O ponto de apoio coincide exatamente com o centro de massa da carga resistente, dispensando a força motora."
    ],
    "correctIndex": 0,
    "explanation": "Uma alavanca de 1.ª classe (ou interfixa) caracteriza-se por ter o ponto de apoio (fulcro) situado entre a força de potência e a força de resistência (P - F - R). Dependendo da posição do fulcro, a vantagem mecânica pode ser maior, igual ou menor do que 1.",
    "distractorAnalysis": [
      "Está incorreta: descreve uma alavanca de 2.ª classe (inter-resistente) e não de 1.ª classe.",
      "Está incorreta: descreve uma alavanca de 3.ª classe (interpotente) e não de 1.ª classe.",
      "Está incorreta: uma alavanca necessita de forças concorrentes com braços de alavanca para estabelecer equilíbrio."
    ],
    "nursingApplication": "Instrumentos de uso frequente em enfermagem como tesouras de sutura, pinças hemostáticas (tipo Kocher ou Kelly) e corta-unhas são alavancas de 1.ª classe: o parafuso central funciona como fulcro, as mãos do enfermeiro aplicam a potência nos anéis, e o tecido ou fio exerce a resistência nas lâminas/pontas."
  },
  {
    "id": 2005,
    "topicId": 2,
    "question": "Qual das seguintes articulações do corpo humano funciona anatomicamente como uma alavanca de 1.ª classe (interfixa)?",
    "options": [
      "A articulação do cotovelo durante a flexão do antebraço executada pela contração ativa do músculo bicípite braquial.",
      "A articulação atlanto-occipital (crânio-cervical), com os músculos da nuca a equilibrar o peso anterior da cabeça.",
      "A articulação do tornozelo na elevação sobre a ponta dos pés, com o tendão de Aquiles a tracionar o calcâneo.",
      "A articulação temporomandibular durante o encerramento forçado da mandíbula pela contração potente do masséter."
    ],
    "correctIndex": 1,
    "explanation": "A articulação atlanto-occipital é o exemplo clássico de alavanca interfixa (1.ª classe) no corpo humano: o fulcro é a articulação entre os côndilos occipitais e o atlas; a resistência é o peso da porção anterior da cabeça e face (cujo centro de massa se situa à frente da articulação); a potência é a força de tração exercida pelos músculos posteriores do pescoço (esplénio da cabeça, trapézio, semiespinhoso) inseridos no occipital.",
    "distractorAnalysis": [
      "Está incorreta: a flexão do cotovelo pelo bicípite é o exemplo clássico de alavanca de 3.ª classe.",
      "Está incorreta: a flexão plantar na ponta dos pés é o exemplo clássico de alavanca de 2.ª classe.",
      "Está incorreta: a mandíbula opera primariamente como alavanca de 3.ª classe com o masséter entre o côndilo e os dentes."
    ],
    "nursingApplication": "Quando um doente em coma, anestesiado ou com sedação profunda perde o tónus muscular, os músculos da nuca deixam de exercer potência. A alavanca de 1.ª classe desequilibra-se: a cabeça cai para a frente em flexão cervical, o que provoca a queda posterior da base da língua e oclusão das vias aéreas. O enfermeiro previne a asfixia posicionando a cabeça em extensão moderada ('head tilt-chin lift')."
  },
  {
    "id": 2006,
    "topicId": 2,
    "question": "Numa alavanca de 2.ª classe (inter-resistente), a resistência localiza-se entre o ponto de apoio (fulcro) e o ponto de aplicação da potência. Qual é a consequência biofísica obrigatória desta geometria quanto à vantagem mecânica?",
    "options": [
      "A vantagem mecânica é sempre inferior a 1 (VM < 1), exigindo que a força muscular seja maior do que a carga resistente.",
      "A vantagem mecânica é estritamente igual a 1 (VM = 1) em qualquer circunstância anatómica de suporte postural corporal.",
      "A vantagem mecânica é sempre superior a 1 (VM > 1), porque o braço de potência é maior que o de resistência (d_P > d_R).",
      "A vantagem mecânica é nula (VM = 0) porque a totalidade da força muscular dissipa-se sob a forma de calor no fulcro."
    ],
    "correctIndex": 2,
    "explanation": "Numa alavanca inter-resistente (2.ª classe), como a resistência está situada entre o fulcro e a potência, o braço de potência (d_P, distância do fulcro até à potência) é obrigatoriamente superior ao braço de resistência (d_R). Como VM = d_P / d_R, a vantagem mecânica é SEMPRE maior que 1. Isto confere uma enorme multiplicação de força motora.",
    "distractorAnalysis": [
      "Está incorreta: VM < 1 é a característica definidora das alavancas de 3.ª classe (interpotentes).",
      "Está incorreta: VM = 1 só ocorre em alavancas de 1.ª classe simétricas onde d_P = d_R.",
      "Está incorreta: as alavancas de 2.ª classe multiplicam a força e transmitem trabalho útil com alta eficiência mecânica."
    ],
    "nursingApplication": "O conhecimento da alavanca de 2.ª classe é a base do funcionamento dos carrinhos manuais de transporte de cilindros de gases medicinais (O₂, N₂O): o fulcro são as rodas no solo, o pesado cilindro de aço constitui a resistência no centro, e o enfermeiro puxa os punhos compridos na extremidade superior (d_P >> d_R), mobilizando cargas de mais de 70 kg com reduzido esforço físico."
  },
  {
    "id": 2007,
    "topicId": 2,
    "question": "O movimento de elevar o corpo sobre a ponta dos pés (flexão plantar na articulação do tornozelo) é amplamente citado em biomecânica como um exemplo anatómico de alavanca de que tipo?",
    "options": [
      "Alavanca de 1.ª classe (interfixa), onde a tíbia atua como o eixo de rotação articular central entre o pé e a perna.",
      "Alavanca de 3.ª classe (interpotente), onde o músculo tibial anterior puxa o dorso do pé contra a gravidade.",
      "Sistema mecânico sem alavanca, atuando unicamente por tração elástica pura sem rotação em torno de fulcro.",
      "Alavanca de 2.ª classe (inter-resistente), onde o apoio está nos metatarsos e a potência no tendão de Aquiles."
    ],
    "correctIndex": 3,
    "explanation": "Na elevação na ponta dos pés: o ponto de apoio (fulcro) situa-se nas articulações metatarsofalângicas em contacto com o chão; a resistência é a força normal/peso do corpo transmitida através da articulação talocrural (tíbia); a potência é a força de tração exercida pelo músculo tríceps sural (gémeos e sóleo) inserido posteriormente na tuberosidade do calcâneo através do tendão de Aquiles. Como a resistência está no meio, trata-se de uma alavanca de 2.ª classe com VM > 1.",
    "distractorAnalysis": [
      "Está incorreta: no apoio sobre as pontas dos pés o fulcro de contacto com o solo está nas cabeças dos metatarsos.",
      "Está incorreta: o tibial anterior é o flexor dorsal do pé e não atua na elevação na ponta dos pés.",
      "Está incorreta: o tornozelo é um sistema articulado com momento de forças e braços de alavanca clássicos."
    ],
    "nursingApplication": "A enorme vantagem mecânica da alavanca de 2.ª classe no tornozelo permite que os músculos da barriga da perna suportem repetidamente todo o peso do indivíduo. Na reabilitação e marcha de doentes após imobilização prolongada ou AVC, fraquezas no tríceps sural impedem a impulsão da marcha, exigindo assistência de enfermagem na transferência e deambulação."
  },
  {
    "id": 2008,
    "topicId": 2,
    "question": "Numa alavanca de 3.ª classe (interpotente), qual é a posição relativa dos seus componentes e qual é a sua principal característica biomecânica?",
    "options": [
      "A potência situa-se entre o fulcro e a resistência; apresenta VM < 1, mas proporciona grande amplitude e velocidade.",
      "A resistência situa-se entre o fulcro e a potência; apresenta sempre ganho mecânico de força com valor de VM > 1.",
      "O fulcro situa-se obrigatoriamente no centro; inverte unicamente o sentido da força motora mantendo sempre VM = 1.",
      "A potência e o fulcro coincidem no mesmo ponto anatómico, eliminando qualquer momento de torção ou rotação articular."
    ],
    "correctIndex": 0,
    "explanation": "Numa alavanca de 3.ª classe (interpotente), a força de potência muscular é aplicada entre o eixo articular (fulcro) e a carga a mobilizar (resistência). Como o braço de potência é menor que o braço de resistência (d_P < d_R), a vantagem mecânica é SEMPRE inferior a 1 (VM < 1). O músculo é forçado a desenvolver uma força muito superior ao peso do objeto, mas em contrapartida um pequeno encurtamento muscular produz um deslocamento amplo e veloz da extremidade distal do membro.",
    "distractorAnalysis": [
      "Está incorreta: descreve a geometria e características das alavancas de 2.ª classe (inter-resistentes).",
      "Está incorreta: descreve uma alavanca de 1.ª classe simétrica com braços rigorosamente iguais.",
      "Está incorreta: a inserção tendinosa é fisicamente separada do eixo articular de rotação por uma distância finita."
    ],
    "nursingApplication": "A vasta maioria das alavancas esqueléticas humanas são de 3.ª classe. Isso explica por que o corpo humano é uma 'máquina' concebida para velocidade e alcance espacial, e não para suportar forças brutas. Em enfermagem, ao sustentar um membro edemaciado ou gessado de um doente longe do cotovelo, o esforço muscular do enfermeiro aumenta drasticamente."
  },
  {
    "id": 2009,
    "topicId": 2,
    "question": "A flexão do antebraço sobre o braço pela contração do músculo bicípite braquial constitui o exemplo paradigmático de:",
    "options": [
      "Alavanca de 2.ª classe, onde a resistência do antebraço se situa distalmente em relação à mão e aos dedos.",
      "Alavanca de 3.ª classe, com o fulcro no cotovelo, potência no tendão do rádio e resistência no peso sustentado.",
      "Alavanca de 1.ª classe, onde a articulação do cotovelo se localiza a meio da distância entre a mão e o ombro.",
      "Sistema de roldana simples fixa sem qualquer braço de momento mecânico mensurável na flexão articular."
    ],
    "correctIndex": 1,
    "explanation": "Na flexão do cotovelo pelo bicípite braquial: o fulcro é a articulação úmero-ulnar/radial (cotovelo); a força de potência é aplicada na tuberosidade bicipital do rádio (cerca de 3 a 5 cm distal ao cotovelo); a resistência é o peso do antebraço e do objeto seguro na mão (distante cerca de 30 a 35 cm do cotovelo). Como a potência está no meio (entre o fulcro e a carga), é uma alavanca de 3.ª classe.",
    "distractorAnalysis": [
      "Está incorreta: na flexão do cotovelo a força do bicípite insere-se entre o cotovelo (fulcro) e o centro de massa da mão (carga).",
      "Está incorreta: o fulcro não está no meio do membro, mas na extremidade proximal da alavanca antebraquial.",
      "Está incorreta: os segmentos ósseos operam como hastes rígidas girando em torno de eixos articulares como alavancas."
    ],
    "nursingApplication": "Devido a esta configuração de 3.ª classe, para segurar um peso de apenas 5 kg na mão, o bicípite tem de exercer uma força interna de tração de cerca de 40 a 50 kgf (400 a 500 N). Isso elucida porque esforços sustentados ao posicionar doentes geram rápida fadiga muscular nos membros superiores da equipa de enfermagem."
  },
  {
    "id": 2010,
    "topicId": 2,
    "question": "Um doente sustenta na mão uma esfera de 4 kg (peso resistente ≈ 40 N) a uma distância horizontal de 35 cm da articulação do cotovelo. Sabendo que o tendão do bicípite braquial se insere a 5 cm do cotovelo, qual é a força muscular mínima F_P que o bicípite tem de desenvolver para manter o antebraço na horizontal (desprezando o peso do antebraço)?",
    "options": [
      "Uma força muscular motora mínima de 40 N desenvolvida pelo tendão do bicípite braquial.",
      "Uma força muscular motora mínima de 5,7 N desenvolvida pelo tendão do bicípite braquial.",
      "Uma força muscular motora mínima de 280 N desenvolvida pelo tendão do bicípite braquial.",
      "Uma força muscular motora mínima de 1400 N desenvolvida pelo tendão do bicípite braquial."
    ],
    "correctIndex": 2,
    "explanation": "Aplicando a condição de equilíbrio rotacional (∑τ = 0) em relação ao cotovelo (fulcro): F_P · d_P = F_R · d_R. Substituindo os valores dados: F_P · (5 cm) = (40 N) · (35 cm) => F_P = (40 × 35) / 5 = 1400 / 5 = 280 N. A força muscular exercida é 7 vezes superior ao peso do objeto sustentado (VM = 5/35 = 1/7 ≈ 0,14).",
    "distractorAnalysis": [
      "Está incorreta: 40 N assumiria erradamente VM = 1, ignorando que o braço de resistência é 7 vezes maior que o de potência.",
      "Está incorreta: 5,7 N resulta de inverter a razão dos braços de alavanca (40 × 5 / 35), violando o equilíbrio de momentos.",
      "Está incorreta: 1400 N corresponde ao torque em N·cm (40 N × 35 cm) esquecendo de dividir pelo braço de potência de 5 cm."
    ],
    "nursingApplication": "Este cálculo biofísico demonstra quantitativamente o enorme estresse a que tendões e inserções periosteais estão submetidos na prática clínica. Ao ajudar a levantar ou apoiar doentes dependentes, manter as cargas coladas ao corpo reduz o braço de resistência (d_R), diminuindo exponencialmente as forças internas de tração exigidas aos músculos e tendões do profissional."
  },
  {
    "id": 2011,
    "topicId": 2,
    "question": "Durante a extensão do joelho pelo músculo quadríceps femoral contra uma resistência aplicada na perna, a rótula (patela) desempenha um papel biofísico crucial. Qual é a função mecânica primária da patela neste sistema de alavanca?",
    "options": [
      "Transformar a articulação do joelho numa alavanca de 2.ª classe com vantagem mecânica infinita para erguer cargas.",
      "Diminuir o atrito a zero e eliminar completamente a força de reação normal sobre os côndilos cartilagíneos femorais.",
      "Reduzir o ângulo de inserção do tendão rotuliano para que a força muscular seja dissipada axialmente sem torque.",
      "Desviar o tendão do quadríceps para a frente, aumentando o braço de alavanca e elevando o torque extensor do joelho."
    ],
    "correctIndex": 3,
    "explanation": "A patela é o maior osso sesamoide do corpo humano. A sua função biomecânica essencial é atuar como um espaçador que afasta o tendão do quadríceps e o ligamento patelar do centro de rotação do joelho. Ao aumentar a distância perpendicular (braço de momento d), a patela aumenta o torque gerado (τ = F · d) para a mesma força de contração muscular em até 30-50%, melhorando a eficácia mecânica do quadríceps na extensão.",
    "distractorAnalysis": [
      "Está incorreta: a patela não confere vantagem mecânica infinita nem transforma o joelho numa alavanca de 2.ª classe.",
      "Está incorreta: a força de reação patelofemoral é elevada durante a flexão sob carga e o atrito sinovial não é zero.",
      "Está incorreta: a patela aumenta o ângulo de inserção e afasta o tendão do eixo articular, aumentando o torque útil."
    ],
    "nursingApplication": "Em doentes submetidos a patelectomia total (remoção cirúrgica da patela) após fraturas cominutivas, o braço de alavanca do quadríceps é reduzido. O doente necessita de um esforço muscular significativamente maior para estender a perna, apresentando fraqueza na deambulação e subida de escadas, exigindo cuidados acrescidos de enfermagem na prevenção de quedas."
  },
  {
    "id": 2012,
    "topicId": 2,
    "question": "Ao utilizar uma pinça de dissecação (ou pinça anatómica sem dentes) para manusear compressas esterilizadas durante um penso complexo, qual é a classe de alavanca que o enfermeiro está a operar?",
    "options": [
      "Alavanca de 3.ª classe, onde a mola da extremidade é o fulcro, os dedos aplicam potência e a gaze é a resistência.",
      "Alavanca de 1.ª classe, porque existe um parafuso giratório intermediário cruzado à semelhança de uma tesoura.",
      "Alavanca de 2.ª classe, porque a gaze comprimida se situa obrigatoriamente entre os dedos e a mola da extremidade.",
      "Sistema de cunha mecânica pura sem braço de alavanca, atuando exclusivamente por atrito de preensão estática."
    ],
    "correctIndex": 0,
    "explanation": "Uma pinça de dissecação consiste em duas lâminas flexíveis unidas numa extremidade (fulcro). Os dedos indicador e polegar do profissional comprimem as lâminas no terço médio (potência), enquanto a extremidade distal aperta a compressa ou tecido (resistência). Como a potência está situada entre o fulcro e a resistência, trata-se inequivocamente de uma alavanca de 3.ª classe.",
    "distractorAnalysis": [
      "Está incorreta: pinças de dissecação sem travão não têm eixo cruzado intermediário; o fulcro é a extremidade unida elástica.",
      "Está incorreta: a carga (gaze) fica na ponta distal e a força dos dedos atua no terço médio da haste (interpotente).",
      "Está incorreta: as hastes funcionam como vigas em consola articuladas na base, constituindo alavancas de 3.ª classe."
    ],
    "nursingApplication": "Como a pinça anatómica é de 3.ª classe (VM < 1), ela proporciona uma sensibilidade tátil tátil e controlo de precisão milimétrica excecionais na extremidade distal, embora exija uma força digital ligeiramente maior. É ideal para manipular tecidos delicados sem provocar lacerações por excesso de força bruta."
  },
  {
    "id": 2013,
    "topicId": 2,
    "question": "Por que motivo a esmagadora maioria das articulações sinoviais do corpo humano evoluiu estruturalmente como alavancas de 3.ª classe (interpotentes), apesar de apresentarem desvantagem mecânica em termos de força (VM < 1)?",
    "options": [
      "Porque reduzem as forças de compressão sobre as superfícies cartilagíneas articulares para valores próximos de zero.",
      "Porque permitem que um pequeno encurtamento muscular produza grandes amplitudes e altas velocidades nas extremidades.",
      "Porque conferem vantagem mecânica de força (VM > 1), permitindo erguer cargas muito superiores ao peso dos músculos.",
      "Porque protegem os tendões contra qualquer deformação elástica reversível durante movimentos desportivos rápidos."
    ],
    "correctIndex": 1,
    "explanation": "Nas alavancas de 3.ª classe, a potência insere-se próxima do fulcro e a resistência na extremidade. Pela relação geométrica de arcos de círculo, a extremidade distal percorre uma distância muito maior no mesmo intervalo de tempo do que o ponto de inserção muscular. Isso confere ao ser humano agilidade, capacidade de correr, lançar objetos e manipular instrumentos com rapidez e precisão, apesar de exigir músculos mais volumosos e fortes para compensar a desvantagem de força.",
    "distractorAnalysis": [
      "Está incorreta: a desvantagem mecânica (VM < 1) exige forças musculares enormes que aumentam a compressão articular.",
      "Está incorreta: as alavancas de 3.ª classe têm VM < 1, exigindo mais força muscular do que o peso da carga sustentada.",
      "Está incorreta: os tendões sofrem deformação elástica fisiológica crucial para o armazenamento e devolução de energia."
    ],
    "nursingApplication": "Compreender que as alavancas anatómicas privilegiam velocidade em detrimento de força explica a vulnerabilidade osteoarticular dos profissionais de saúde: o sistema esquelético humano não foi biomecanicamente projetado para sustentar cargas estáticas pesadas prolongadas sem fadiga ou risco de lesão."
  },
  {
    "id": 2014,
    "topicId": 2,
    "question": "A Reologia é o ramo da física que se dedica ao estudo de quê?",
    "options": [
      "Da propagação de ondas eletromagnéticas e fotões através de meios dielétricos transparentes ou opacos no vácuo.",
      "Da transferência condutiva de calor e termodinâmica de equilíbrio em sistemas biológicos fechados à temperatura basal.",
      "Da deformação e do escoamento da matéria quando submetida a tensões mecânicas ou forças de cisalhamento externas.",
      "Da condutividade elétrica de soluções iónicas e diferenciais de potencial de membrana em células neuronais excitáveis."
    ],
    "correctIndex": 2,
    "explanation": "A Reologia (do grego rheos, fluir) é a ciência física que estuda a deformação e o escoamento de todos os tipos de matéria — englobando desde sólidos com elasticidade de Hooke até fluidos Newtonianos e fluidos biológicos complexos não-Newtonianos (como o sangue e o muco respiratório), passando por materiais viscoelásticos.",
    "distractorAnalysis": [
      "Está incorreta: o estudo de ondas eletromagnéticas pertence à ótica e ao eletromagnetismo clássico e quântico.",
      "Está incorreta: a transferência de calor e equilíbrio térmico são objeto da termodinâmica e biofísica térmica.",
      "Está incorreta: potenciais de membrana e condutividade iónica são estudados no âmbito da bioeletricidade celular."
    ],
    "nursingApplication": "A reologia clínica é fundamental em enfermagem para compreender a drenagem de exsudados viscosos, a aspiração de secreções brônquicas, a fluidez de soluções entéricas e a viscoelasticidade da pele e dos tecidos moles na prevenção de escaras."
  },
  {
    "id": 2015,
    "topicId": 2,
    "question": "No contexto da mecânica dos materiais, qual é a definição formal de 'Tensão' (stress, σ) e qual é a sua unidade no Sistema Internacional (SI)?",
    "options": [
      "É o alongamento absoluto total sofrido pelo segmento do corpo sob tração, medido rigorosamente em metros lineares (m).",
      "É o produto da força motora aplicada pelo intervalo de tempo de impacto mecânico, expresso em Newtons-segundo (N·s).",
      "É o trabalho mecânico consumido por unidade de deformação angular transversa, expresso em Joules por radiano (J/rad).",
      "É a razão entre a força aplicada e a área da secção transversal sobre a qual atua (σ = F / A), expressa em Pascal (Pa)."
    ],
    "correctIndex": 3,
    "explanation": "Tensão mecânica (stress, representada pela letra grega sigma, σ, para tensões normais, ou tau, τ, para tensões tangenciais) é definida como a força exercida por unidade de área da secção transversal: σ = F / A. A unidade oficial do SI é o Pascal (1 Pa = 1 N/m²), frequentemente expressa em MegaPascals (MPa = 10⁶ N/m² = 1 N/mm²).",
    "distractorAnalysis": [
      "Está incorreta: o alongamento absoluto em metros é a deformação linear (ΔL) e não a tensão mecânica interna (σ).",
      "Está incorreta: a força multiplicada pelo tempo (F · Δt) define o impulso mecânico ou variação do momento linear.",
      "Está incorreta: trabalho por radiano expressa torque ou energia rotacional e não tensão mecânica sobre uma secção."
    ],
    "nursingApplication": "Ao administrar uma injeção intramuscular com uma agulha de pequeno diâmetro, a pequena área de secção do êmbolo da seringa gera elevadas pressões hidrostáticas se o êmbolo for forçado rapidamente, o que pode originar tensões mecânicas teciduais excessivas e dor aguda no doente."
  },
  {
    "id": 2016,
    "topicId": 2,
    "question": "A deformação relativa ou unitária longitudinal (strain, ε) sofrida por um material sob tração é calculada através de que relação?",
    "options": [
      "ε = ΔL / L₀ (variação do comprimento a dividir pelo comprimento inicial), sendo uma grandeza adimensional pura.",
      "ε = L₀ · ΔL (produto do comprimento inicial pelo alongamento deformado), sendo expressa em metros quadrados (m²).",
      "ε = F · ΔL (produto da força de tração axial pelo alongamento linear sofrido), sendo expressa em Joules de trabalho.",
      "ε = ΔL / Δt (taxa de variação do comprimento por unidade de tempo de ensaio), sendo expressa em metros por segundo."
    ],
    "correctIndex": 0,
    "explanation": "A deformação relativa (strain, ε) representa o alongamento fracionário de um corpo: ε = (L - L₀) / L₀ = ΔL / L₀. Como é a razão entre duas medidas de comprimento (m / m), é uma grandeza puramente adimensional (frequentemente expressa em percentagem, por exemplo, 0,05 = 5% de deformação).",
    "distractorAnalysis": [
      "Está incorreta: o produto L₀ · ΔL não tem significado físico na teoria da elasticidade e teria unidade de área (m²).",
      "Está incorreta: o produto de força por variação de comprimento define trabalho mecânico (Joules) e não deformação relativa.",
      "Está incorreta: a taxa de variação no tempo define a velocidade de deformação (strain rate) e não a deformação relativa ε."
    ],
    "nursingApplication": "As ligaduras elásticas utilizadas para compressão de membros inferiores em doentes com insuficiência venosa crónica baseiam o seu efeito terapêutico na deformação relativa (alongamento percentual) aplicada pelo enfermeiro durante a colocação (ex: estiramento a 50% de ε)."
  },
  {
    "id": 2017,
    "topicId": 2,
    "question": "Qual das seguintes equações traduz a Lei de Hooke para a deformação elástica linear de um sólido sob tração simples?",
    "options": [
      "σ = E / ε², onde a tensão aplicada decai de forma inversamente quadrática com o alongamento elástico sofrido pelo corpo.",
      "σ = E · ε, onde σ é a tensão mecânica, E é o Módulo de Young característico e ε é a deformação relativa longitudinal.",
      "σ = m · g · ε, onde m é a massa do provete e g a aceleração da gravidade, tornando a elasticidade dependente do peso.",
      "σ = E · v · Δt, onde v é a velocidade de propagação mecânica do som e Δt é o tempo de aplicação do esforço de tração."
    ],
    "correctIndex": 1,
    "explanation": "A Lei de Hooke (formulada por Robert Hooke em 1678 como 'ut tensio, sic vis') estabelece que, na região elástica de proporcionalidade, a tensão normal é linearmente proporcional à deformação relativa que provoca: σ = E · ε. A constante de proporcionalidade E é o Módulo de Young (ou Módulo de Elasticidade Longitudinal).",
    "distractorAnalysis": [
      "Está incorreta: a Lei de Hooke estabelece uma relação diretamente proporcional linear e não inversamente quadrática.",
      "Está incorreta: a rigidez elástica intrínseca de um material não depende da massa do provete nem da gravidade local.",
      "Está incorreta: a elasticidade de Hooke trata de equilíbrios estáticos sob deformação e não da velocidade de ondas acústicas."
    ],
    "nursingApplication": "O funcionamento de dinamómetros de reabilitação e balanças de mola utilizadas para pesar recém-nascidos baseia-se rigorosamente na Lei de Hooke: a deformação da mola é estritamente proporcional à força peso aplicada pelo bebé."
  },
  {
    "id": 2018,
    "topicId": 2,
    "question": "O Módulo de Young (E) traduz uma propriedade intrínseca do material. Fisicamente, o que representa um valor elevado de Módulo de Young?",
    "options": [
      "Grande flexibilidade mecânica, indicando que o material sofre alongamentos elásticos enormes sob forças mínimas.",
      "Incapacidade intrínseca do material para resistir a esforços de compressão uniaxial, fraturando de forma catastrófica.",
      "Elevada rigidez elástica do material, exigindo grande tensão mecânica para produzir uma pequena deformação relativa.",
      "Uma densidade de massa volúmica extrema que impede a propagação de ondas acústicas no interior da estrutura sólida."
    ],
    "correctIndex": 2,
    "explanation": "O Módulo de Young (E = σ / ε) é a medida fundamental da rigidez elástica de um material. Quanto maior for o valor de E (medido em Pa ou GPa), mais 'rígido' é o corpo e mais resistente é à deformação elástica — ou seja, menor será a deformação sofrida para uma dada tensão aplicada.",
    "distractorAnalysis": [
      "Está incorreta: materiais com grande flexibilidade elástica (como elastómeros) possuem Módulo de Young muito baixo.",
      "Está incorreta: materiais com alto Módulo de Young (como osso cortical ou titânio) suportam elevadas cargas de compressão.",
      "Está incorreta: o Módulo de Young traduz rigidez mecânica e não se correlaciona estritamente com a densidade volúmica atómica."
    ],
    "nursingApplication": "Nas próteses articulares da anca, ligas metálicas tradicionais possuem Módulo de Young muito superior ao do osso cortical (~200 GPa vs ~18 GPa). Essa discrepância gera a complicação de 'stress shielding' (blindagem contra o estresse), onde o osso não recebe carga mecânica e atrofia por desuso, exigindo monitorização radiológica e cuidados de enfermagem pós-operatórios."
  },
  {
    "id": 2019,
    "topicId": 2,
    "question": "Num ensaio de tração mecânica de um biomaterial, o que distingue fundamentalmente a 'Deformação Elástica' da 'Deformação Plástica'?",
    "options": [
      "A deformação elástica conduz sempre à rotura catastrófica do corpo, enquanto a plástica recupera a forma primitiva.",
      "A deformação elástica viola a Lei de Hooke por apresentar histerese, enquanto a plástica mantém linearidade estrita.",
      "A deformação elástica ocorre apenas em biomateriais poliméricos, enquanto a plástica é exclusiva do osso cortical.",
      "A deformação elástica é reversível com a remoção da carga, enquanto a deformação plástica é permanente e residual."
    ],
    "correctIndex": 3,
    "explanation": "A deformação elástica envolve apenas o afastamento temporário dos átomos ou desenrolamento conformacional reversível de polímeros sem rutura das ligações fundamentais; cessada a força, o corpo recupera integralmente o comprimento original (L₀). Na deformação plástica, ultrapassa-se o limite elástico e ocorre escorregamento irreversível de planos atómicos ou quebra de ligações moleculares, resultando numa deformação residual permanente.",
    "distractorAnalysis": [
      "Está incorreta: inverte os conceitos: a deformação elástica é que permite a recuperação e a plástica é que é irreversível.",
      "Está incorreta: a fase elástica linear é que obedece à Lei de Hooke, cessando essa proporcionalidade na fase plástica.",
      "Está incorreta: tanto polímeros como metais e tecidos biológicos exibem regimes elásticos e plásticos consoante a carga."
    ],
    "nursingApplication": "Ao dobrar manualmente o mandril metálico (guia) de um tubo endotraqueal para entubação difícil, o enfermeiro induz deformação plástica controlada no metal para que ele mantenha a curvatura desejada. Por outro lado, o balonete de vedação da traqueia deve manter deformação elástica pura para vedar sem colapsar as vias aéreas."
  },
  {
    "id": 2020,
    "topicId": 2,
    "question": "O ponto da curva tensão-deformação que marca a transição entre o regime elástico reversível e o início da deformação plástica permanente é denominado:",
    "options": [
      "Limite de elasticidade (ou tensão de cedência/escoamento, yield point), além do qual as deformações são permanentes.",
      "Ponto de transição vítrea endotérmica, onde o material amolece e se converte num gel amorfo incompressível no leito.",
      "Ponto de tensão de rotura final catastrófica, correspondente à separação mecânica física completa dos fragmentos.",
      "Módulo de resiliência elástica máxima, ponto geométrico onde a taxa de dissipação de energia mecânica se anula."
    ],
    "correctIndex": 0,
    "explanation": "O limite de elasticidade (e de forma muito próxima na engenharia, a tensão de escoamento ou yield strength) é o valor máximo de tensão mecânica que um material pode suportar sem sofrer deformação plástica residual permanente. Se a tensão aplicada for superior a este limite, o corpo não regressa ao seu comprimento inicial após a remoção da força.",
    "distractorAnalysis": [
      "Está incorreta: a transição vítrea é um fenómeno térmico de mobilidade de cadeias poliméricas e não o limite mecânico de escoamento.",
      "Está incorreta: o ponto de rotura final situa-se no término da curva de tração, bem depois da fase plástica.",
      "Está incorreta: a resiliência é a área sob a curva elástica e não um ponto que define a transição para deformação plástica."
    ],
    "nursingApplication": "Nos clipes hemostáticos cirúrgicos e agrafos utilizados para fechar incisões, a aplicação pela pinça deve ultrapassar conscientemente o limite de elasticidade do titânio para produzir deformação plástica, garantindo que o agrafo permanece permanentemente fechado sobre a derme do doente."
  },
  {
    "id": 2021,
    "topicId": 2,
    "question": "Na ciência dos materiais e biomecânica, qual é a definição de 'Tenacidade' (toughness)?",
    "options": [
      "A resistência mecânica superficial que o material oferece à penetração e ao risco provocado por outro corpo duro.",
      "Capacidade do material absorver energia mecânica e deformar-se plasticamente até à fratura (área sob a curva σ-ε).",
      "A capacidade do material recuperar elasticamente a sua forma original sem dissipar energia mecânica em calor.",
      "A tensão máxima de corte tangencial que o material suporta antes de iniciar a formação de microfissuras de fadiga."
    ],
    "correctIndex": 1,
    "explanation": "Tenacidade (toughness) é a quantidade total de energia mecânica por unidade de volume que um material consegue absorver antes de fraturar. No gráfico de tensão versus deformação, a tenacidade é matematicamente igual à área integral sob toda a curva (desde a origem até à rotura). Materiais tenazes combinam alta resistência mecânica com ductilidade considerável.",
    "distractorAnalysis": [
      "Está incorreta: a resistência ao risco e penetração superficial define a Dureza (hardness) e não a Tenacidade.",
      "Está incorreta: a capacidade de absorver e restituir energia elástica na fase reversível define a Resiliência (resilience).",
      "Está incorreta: a resistência ao corte antes de fissuração de fadiga define o limite de fadiga ou resistência à torção."
    ],
    "nursingApplication": "O osso vivo saudável possui elevada tenacidade devido à matriz de colagénio, o que lhe permite absorver o impacto de quedas moderadas sem fraturar. Em doentes idosos ou com osteogénese imperfeita, a perda de tenacidade torna o esqueleto frágil, suscetível a fraturas de baixa energia com o simples apoio do peso corporal."
  },
  {
    "id": 2022,
    "topicId": 2,
    "question": "Um material classificado como 'Frágil' (brittle) em oposição a 'Dúctil' (ductile) caracteriza-se por fraturar com:",
    "options": [
      "Uma extensa deformação plástica irreversível com estricção localizada antes da separação mecânica definitiva.",
      "Uma alteração dimensional acompanhada por libertação endotérmica contínua de calor que funde os bordos da fratura.",
      "Praticamente nenhuma deformação plástica prévia, fraturando subitamente logo após o término da fase elástica linear.",
      "Um aumento exponencial e espontâneo do seu volume total sob tração axial sem redução da secção transversal."
    ],
    "correctIndex": 2,
    "explanation": "Materiais frágeis (como o vidro, a cerâmica, o gesso ortopédico seco e o mineral puro do osso sem colagénio) apresentam fratura súbita e catastrófica logo que a tensão atinge o limite elástico, sem sofrer escoamento plástico mensurável. Materiais dúcteis (como o cobre, o aço inoxidável e o titânio), pelo contrário, sofrem extensas deformações plásticas antes de quebrarem.",
    "distractorAnalysis": [
      "Está incorreta: sofrer grande deformação plástica com estricção prévia à fratura é a definição de material Dúctil.",
      "Está incorreta: a fratura mecânica frágil decorre da propagação rápida de fendas e não de fusão térmica endotérmica.",
      "Está incorreta: sob tração uniaxial os materiais tendem a manter ou contrair ligeiramente a secção lateral (Poisson)."
    ],
    "nursingApplication": "As talas e aparelhos gessados de imobilização ortopédica são rígidos e extremamente frágeis. Se o doente apoiar peso excessivo sobre um gesso recente de marcha, o gesso fratura por quebra frágil imediata em vez de vergar, comprometendo a imobilização da fratura e exigindo nova colocação pelo enfermeiro."
  },
  {
    "id": 2023,
    "topicId": 2,
    "question": "O que quantifica o 'Coeficiente de Poisson' (ν) quando um corpo elástico cilíndrico é submetido a uma tensão de tração longitudinal simples?",
    "options": [
      "A razão direta entre a tensão de corte tangencial e a deformação angular correspondente sob esforços de torção pura.",
      "A fração volumétrica de energia elástica dissipada sob a forma de calor durante ciclos de carga e descarga dinâmica.",
      "O quociente entre a força compressiva normal exercida nas bases e a variação da densidade volúmica do biomaterial.",
      "A razão (com sinal invertido) entre a deformação transversal e a deformação longitudinal (ν = - ε_transversal / ε_long)."
    ],
    "correctIndex": 3,
    "explanation": "Quando um sólido elástico é esticado longitudinalmente (tração, onde ε_longitudinal > 0), a sua secção transversal contrai-se lateralmente (adelgaçamento, onde ε_transversal < 0). O Coeficiente de Poisson (ν) é a razão adimensional entre essa deformação lateral e a deformação axial: ν = - ε_transversal / ε_longitudinal. Para a maioria dos materiais metálicos e ossos, ν situa-se entre 0,25 e 0,35; para a borracha e tecidos biológicos ricos em água incompressível, aproxima-se de 0,5.",
    "distractorAnalysis": [
      "Está incorreta: a razão entre tensão de cisalhamento e deformação angular define o Módulo de Corte ou Rigidez (G).",
      "Está incorreta: a energia dissipada em ciclos de carga e descarga define a histerese mecânica do material.",
      "Está incorreta: a resposta volumétrica a tensões isotrópicas define o Módulo de Elasticidade Volumétrico (K)."
    ],
    "nursingApplication": "Ao insuflar a braçadeira de um esfigmomanómetro ou garrote elástico, a tração longitudinal do tubo de borracha provoca adelgaçamento da sua parede (efeito de Poisson). Se o material for velho ou ressecado, esse afinamento lateral gera microfissuras e rutura súbita durante procedimentos de colheita de sangue."
  },
  {
    "id": 2024,
    "topicId": 2,
    "question": "Quando uma força tangencial é aplicada paralelamente à superfície de um corpo, provocando o deslizamento relativo entre planos adjacentes de matéria, que tipo de solicitação mecânica está a ser exercida?",
    "options": [
      "Tensão de Cisalhamento (ou tensão de corte, τ = F_paralela / A), que deforma o corpo angularmente por deslizamento.",
      "Tensão de Compressão axial pura, que atua perpendicularmente à secção transversal reduzindo o comprimento do eixo.",
      "Pressão Hidrostática isotrópica, que comprime o volume do corpo com a mesma intensidade em todas as direções espaciais.",
      "Tração uniaxial pura, que atua perpendicularmente à secção transversal afastando os planos atómicos longitudinalmente."
    ],
    "correctIndex": 0,
    "explanation": "A tensão de cisalhamento (shear stress, denotada por τ) surge quando as forças aplicadas atuam tangencialmente (paralelas) ao plano da secção de área: τ = F_tangencial / A. Ela deforma o corpo alterando os seus ângulos internos (distorção angular), como quando se empurra a capa superior de um livro grosso assente numa mesa.",
    "distractorAnalysis": [
      "Está incorreta: a compressão pura atua perpendicularmente (normal) à superfície e não tangencialmente por deslizamento.",
      "Está incorreta: a pressão hidrostática é uma solicitação normal multidirecional uniforme e não uma tensão de corte superficial.",
      "Está incorreta: a tração uniaxial atua perpendicularmente afastando as camadas da secção transversal e não tangencialmente."
    ],
    "nursingApplication": "Na pele de um doente acamado com a cabeceira elevada a mais de 30°, o corpo tende a escorregar para o fundo da cama por gravidade enquanto a pele fica retida no lençol por atrito. Isso gera tensões de cisalhamento devastadoras nos tecidos subcutâneos profundos, que deformam e ocluem os vasos perfurantes, acelerando a necrose e o surgimento de lesões por pressão."
  },
  {
    "id": 2025,
    "topicId": 2,
    "question": "A resistência à torção de uma estrutura cilíndrica (como um osso longo ou o eixo de um equipamento) depende criticamente de que parâmetro geométrico?",
    "options": [
      "Do comprimento longitudinal total do cilindro, sendo a rigidez à torção estritamente independente do seu diâmetro.",
      "Do Momento Polar de Inércia da secção transversal (J), que nos cilindros é proporcional à quarta potência do raio (r⁴).",
      "Da rugosidade superficial e do coeficiente de atrito estático desenvolvido entre a face externa e os tecidos vizinhos.",
      "Da velocidade angular de rotação expressa em radianos por minuto, independendo da geometria da secção transversal."
    ],
    "correctIndex": 1,
    "explanation": "A rigidez e resistência à torção dependem do Momento Polar de Inércia (J) da secção transversal (para uma haste circular maciça, J = π · r⁴ / 2). Por depender da quarta potência do raio (r⁴), duplicar o raio externo de um cilindro ou osso aumenta a sua resistência à torção em dezasseis vezes (2⁴ = 16) para o mesmo material.",
    "distractorAnalysis": [
      "Está incorreta: o diâmetro da secção transversal é o fator dominante na resistência à torção através do termo r⁴.",
      "Está incorreta: o atrito superficial externo não altera a resistência mecânica interna à torção estrutural do cilindro.",
      "Está incorreta: a resistência à torção é uma propriedade de rigidez geométrica e elástica e não da velocidade cinemática."
    ],
    "nursingApplication": "Ao rodar um doente na cama segurando nos pés ou pernas com o tronco imobilizado, o enfermeiro gera momentos de torção sobre a diáfise da tíbia e fémur. Em doentes com osteoporose severa (onde o osso esponjoso e cortical perderam massa interna), forças inadvertidas de torção podem provocar fraturas espiroides com facilidade."
  },
  {
    "id": 2026,
    "topicId": 2,
    "question": "Quando um elemento estrutural reto (como uma tábua de transferência ou um fémur) é submetido a uma solicitação de flexão mecânica, qual é o perfil de tensões gerado no seu interior?",
    "options": [
      "Tensões de compressão pura e uniforme em toda a secção transversal, sem que ocorra qualquer gradiente de deformação.",
      "Tensões de cisalhamento isotrópico puras que anulam a linha neutra central e duplicam a espessura da estrutura.",
      "Tensões de tração na superfície convexa superior e tensões de compressão na superfície côncava inferior da viga.",
      "Ausência de tensões internas mensuráveis devido à redistribuição hidrostática da carga ao longo do comprimento total."
    ],
    "correctIndex": 2,
    "explanation": "Na flexão simples, a curvatura produz encurtamento das fibras longitudinais no lado interno da curva (gerando tensões de compressão) e alongamento das fibras no lado externo da curva (gerando tensões de tração). A transição suave entre tração e compressão define a 'linha neutra' (ou superfície neutra), onde não há deformação nem tensão axial (σ = 0).",
    "distractorAnalysis": [
      "Está incorreta: na flexão existe sempre um gradiente: tração numa face e compressão na oposta, separadas pela linha neutra.",
      "Está incorreta: o cisalhamento na flexão é máximo na linha neutra e não uniforme em toda a estrutura nem isotrópico.",
      "Está incorreta: qualquer flexão sob carga gera momentos fletores que produzem tensões internas mensuráveis na peça."
    ],
    "nursingApplication": "Quando um doente idoso sofre uma queda de lado sobre o grande trocânter, o colo do fémur é forçado em flexão violenta: o bordo inferior fica sob compressão e o bordo superior sob tração extrema. Como o osso resiste muito menos à tração do que à compressão, a fratura inicia-se habitualmente por rasgo no bordo superior sob tração."
  },
  {
    "id": 2027,
    "topicId": 2,
    "question": "O fenómeno mecânico conhecido como 'Fadiga dos Materiais' caracteriza-se por:",
    "options": [
      "A perda instantânea de elasticidade linear induzida pela oxidação eletroquímica acelerada do biomaterial metálico.",
      "O aumento progressivo do Módulo de Young provocado pela absorção contínua de iões de cálcio e fosfato plasmáticos.",
      "A deformação plástica massiva instantânea que ocorre logo no primeiro ciclo de solicitação biomecânica normal.",
      "A falha mecânica estrutural sob cargas cíclicas repetitivas com tensões inferiores à resistência à tração estática."
    ],
    "correctIndex": 3,
    "explanation": "A fadiga dos materiais é o processo de degradação estrutural progressiva e localizada que ocorre quando um componente é submetido a tensões mecânicas oscilatórias ou cíclicas repetidas (milhares ou milhões de ciclos). Mesmo que as tensões sejam muito menores do que a tensão de rotura estática, microfissuras iniciam-se e propagam-se lentamente até causarem uma fratura súbita e imprevisível.",
    "distractorAnalysis": [
      "Está incorreta: a fadiga é um processo mecânico de propagação de microfissuras cíclicas e não corrosão química pura.",
      "Está incorreta: a fadiga não aumenta a rigidez (Módulo de Young), provocando antes a perda de integridade mecânica.",
      "Está incorreta: a fadiga caracteriza-se precisamente por ocorrer após muitos ciclos de carga e não no primeiro ciclo."
    ],
    "nursingApplication": "Fraturas de stress (fadiga óssea) nos metatarsos ocorrem em atletas ou doentes que iniciam marcha intensiva após repouso prolongado. Do mesmo modo, hastes de próteses ortopédicas de anca ou joelho podem falhar por fadiga após 10 a 15 anos de ciclos diários de marcha (cerca de 1 a 2 milhões de passos por ano), exigindo monitorização clínica de dores inexplicadas na anca."
  },
  {
    "id": 2028,
    "topicId": 2,
    "question": "Os cateteres venosos periféricos modernos são frequentemente fabricados em Poliuretano (PUR) em detrimento do Teflon tradicional (FEP). Qual é a principal vantagem biofísica e reológica do poliuretano quando introduzido no corpo humano?",
    "options": [
      "Apresenta amolecimento térmico à temperatura de 37 °C, reduzindo o Módulo de Young e a irritação mecânica vascular.",
      "Comporta-se como um biomaterial metálico inerte com rigidez de duzentos GPa que impede qualquer deformação da veia.",
      "Endurece bruscamente no sangue para manter o calibre do vaso desobstruído contra o colapso venoso circundante.",
      "Dissolve-se enzimaticamente ao fim de vinte e quatro horas por ação das esterases do plasma sanguíneo periférico."
    ],
    "correctIndex": 0,
    "explanation": "O poliuretano (PUR) é um polímero termossensível: à temperatura ambiente (cerca de 20-22 °C) possui rigidez suficiente para facilitar a punção e progressão venosa, mas ao entrar na corrente sanguínea e atingir 37 °C sofre um relaxamento reológico acentuado, reduzindo significativamente o seu Módulo de Young (amolece até 50-70%). Isto permite que o cateter acompanhe as curvaturas anatómicas da veia, diminuindo drasticamente a tensão de atrito sobre a íntima vascular e a incidência de flebites mecânicas.",
    "distractorAnalysis": [
      "Está incorreta: o poliuretano é um elastómero polimérico flexível com Módulo de Young de dezenas a centenas de MPa e não 200 GPa.",
      "Está incorreta: o cateter amolece com a temperatura corporal (comportamento termoplástico favorável) e não endurece.",
      "Está incorreta: cateteres intravasculares são polímeros não degradáveis a curto prazo para garantir permanência segura."
    ],
    "nursingApplication": "A escolha do material do cateter é um indicador de excelência nos cuidados de enfermagem: ao administrar terapêutica intravenosa contínua num doente agitado ou em doentes pediátricos/idosos, cateteres de poliuretano garantem maior sobrevida funcional do acesso vascular e reduzem o risco de infiltrações e flebites associadas a movimentos bruscos do membro."
  },
  {
    "id": 2029,
    "topicId": 2,
    "question": "O fenómeno de 'Kinking' (quinagem ou colapso por flexão acentuada) observado em tubos de drenagem cirúrgica ou cateteres decorre da perda de estabilidade geométrica da secção circular. Que propriedade geométrica do tubo confere maior resistência à quinagem?",
    "options": [
      "A rotura microscópica precoce de todas as pontes cruzadas entre moléculas de tropocolagénio no tendão biológico.",
      "O recrutamento e estiramento progressivo das fibras de colagénio onduladas ('toe region'), aumentando a rigidez.",
      "Uma fase de deformação plástica irreversível que impede o ligamento de recuperar o seu comprimento inicial em repouso.",
      "Um aumento exponencial da energia térmica dissipada por fricção atómica entre os fascículos de fibrina celular."
    ],
    "correctIndex": 1,
    "explanation": "A resistência de um tubo à flexão e ao colapso circunferencial (kinking) depende do momento de inércia da sua secção transversal (I = π(d_ext⁴ - d_int⁴)/64). Uma parede mais espessa ou a inclusão de estrias circunferenciais/espirais metálicas (tubos armados) aumenta enormemente a rigidez contra a ovalização e quinagem, mantendo a luz interna desobstruída mesmo em curvas apertadas.",
    "distractorAnalysis": [
      "Está incorreta: a região inicial de 'toe region' é perfeitamente elástica e fisiológica, sem rotura estrutural de fibras.",
      "Está incorreta: a deformação nessa fase é reversível e elástica, longe do limite elástico de escoamento plástico.",
      "Está incorreta: a resposta inicial visa o alinhamento das ondulações das fibrilas de colagénio e não a dissipação térmica."
    ],
    "nursingApplication": "Na vigilância de doentes com drenos torácicos ou cateteres de diálise peritoneal, a quinagem (kinking) do circuito provoca interrupção imediata da drenagem, podendo originar pneumotórax hipertensivo ou tamponamento pericárdico. O enfermeiro deve inspecionar rotineiramente a trajetória dos tubos e garantir que não ficam sob o corpo do doente."
  },
  {
    "id": 2030,
    "topicId": 2,
    "question": "Na comparação reológica entre luvas de procedimento clínico fabricadas em Látex de borracha natural, Borracha de Nitrilo e Vinil (PVC), qual das opções caracteriza com precisão o comportamento mecânico do Vinil?",
    "options": [
      "A recuperação instantânea da forma geométrica primitiva logo que a solicitação mecânica externa atinge o pico.",
      "A diminuição da massa inercial do biomaterial provocada pela evaporação contínua de água intersticial confinada.",
      "A deformação lenta, progressiva e contínua do polímero ao longo do tempo sob uma tensão mecânica constante mantida.",
      "A fratura frágil repentina do implante sem qualquer alteração prévia mensurável das dimensões da peça protética."
    ],
    "correctIndex": 2,
    "explanation": "O policloreto de vinila (vinil) plastificado não é um elastómero verdadeiro: apresenta baixa memória elástica (alta taxa de relaxamento de tensões e deformação plástica irreversível quando esticado). Ao calçar e movimentar os dedos, a luva de vinil deforma-se permanentemente, criando folgas e microfissuras na estrutura molecular, oferecendo uma barreira mecânica significativamente inferior contra agentes biológicos do que o látex ou o nitrilo.",
    "distractorAnalysis": [
      "Está incorreta: a recuperação elástica instantânea é o oposto da fluência (que é um fenómeno viscoelástico com atraso temporal).",
      "Está incorreta: a fluência em sólidos poliméricos não envolve perda de massa atómica ou evaporação de componentes.",
      "Está incorreta: a fluência envolve deformação viscoelástica gradual dependente do tempo e não uma fratura frágil imediata."
    ],
    "nursingApplication": "Normas internacionais de controlo de infeção recomendam que os enfermeiros evitem luvas de vinil no manuseamento de fluidos corporais de alto risco (sangue, exsudados abundantes) ou citotóxicos, priorizando o nitrilo ou látex, que oferecem maior resistência à tração e retenção de integridade mecânica durante o procedimento."
  },
  {
    "id": 2031,
    "topicId": 2,
    "question": "A eficácia terapêutica das meias de compressão elástica graduada na prevenção de Trombose Venosa Profunda (TVP) é explicada biofisicamente pela Lei de Laplace. De acordo com esta lei para um cilindro oco (P = T / r), como varia a pressão de compressão (P) exercida sobre a perna?",
    "options": [
      "O aumento contínuo da resistência à tração do tecido biológico quando submetido a um alongamento estático mantido.",
      "A conversão espontânea da deformação viscoelástica reversível numa fratura frágil por clivagem molecular rápida.",
      "A elevação contínua da pressão osmótica intersticial que atrai fluido aquoso para o interior do ligamento lesado.",
      "A diminuição progressiva da tensão necessária para manter uma deformação constante ao longo do tempo no material."
    ],
    "correctIndex": 3,
    "explanation": "Pela Lei de Laplace aplicada a membranas cilíndricas elásticas em equilíbrio, a pressão transmural é dada por P = T / r, onde T é a tensão tangencial da malha têxtil e r é o raio de curvatura local do membro. Devido à conicidade natural da perna humana, o raio r é muito menor no tornozelo do que na barriga da perna ou coxa. Portanto, mesmo com tensão T uniforme ou ligeiramente decrescente, a pressão P é naturalmente mais alta no tornozelo (ex: 18-20 mmHg) e decai em direção proximal (ex: 8-10 mmHg na coxa), criando o gradiente pressórico indispensável para impulsionar o retorno venoso.",
    "distractorAnalysis": [
      "Está incorreta: na relaxação de tensão a força necessária para manter o comprimento diminui e não aumenta com o tempo.",
      "Está incorreta: a relaxação é um fenómeno viscoelástico de dissipação interna de tensões e não fratura mecânica por clivagem.",
      "Está incorreta: a relaxação de tensões descreve o comportamento mecânico da matriz sólida e não a pressão osmótica capilar."
    ],
    "nursingApplication": "A medição correta do perímetro do tornozelo, gémeos e coxa do doente é um cuidado de enfermagem indeclinável antes de prescrever ou colocar meias de compressão. Usar meias de tamanho incorreto (ou permitir que a meia enrole na extremidade superior, reduzindo o raio e multiplicando a tensão) cria um anel de constrição que atua como garrote patológico, favorecendo a trombose venosa."
  },
  {
    "id": 2032,
    "topicId": 2,
    "question": "A calibração e especificação dos fios de sutura cirúrgica segundo a Farmacopeia Americana (escala USP, ex: 2-0, 3-0, 4-0) baseia-se fundamentalmente em quais propriedades mecânicas e físicas?",
    "options": [
      "A área entre as curvas de carga e descarga que quantifica a energia mecânica dissipada sob a forma de calor.",
      "A rigidez elástica máxima do material que define a velocidade de propagação de ondas ultrassónicas transversais.",
      "O tempo decorrido entre a aplicação inicial da força de tração e a ocorrência da fratura catastrófica final.",
      "A variação do Módulo de Young que ocorre exclusivamente durante a transição da fase plástica para o estado líquido."
    ],
    "correctIndex": 0,
    "explanation": "A classificação USP padroniza os fios cirúrgicos pelo seu diâmetro milimétrico e pela resistência mecânica à tração (tensão de rotura): quanto maior for o número de zeros (ex: 6-0 vs 2-0), menor é o calibre (diâmetro mais fino) e menor é a força absoluta de tração necessária para romper o fio. A norma exige ainda testes rigorosos de resistência com o nó realizado, pois o nó introduz concentrações de tensão de cisalhamento locais que reduzem a força do fio em até 50%.",
    "distractorAnalysis": [
      "Está incorreta: a rigidez máxima corresponde ao declive na fase elástica (Módulo de Young) e não à área do ciclo de histerese.",
      "Está incorreta: o tempo até à fratura em fadiga é a vida em fadiga (ciclos N) e não a histerese de um ciclo elástico.",
      "Está incorreta: a histerese mede a energia mecânica não devolvida no retorno elástico e ocorre no estado sólido elástico."
    ],
    "nursingApplication": "Na remoção de pontos cirúrgicos ou na colaboração em pequenas cirurgias, o enfermeiro deve reconhecer que um fio 6-0 (usado na face por razões estéticas) tem baixíssima resistência à tração e quebra facilmente com pinçamento inadequado, enquanto um fio 1 ou 2 (usado em laparotomias para encerrar aponevroses resistentes) suporta elevadíssimas tensões mecânicas de tração."
  },
  {
    "id": 2033,
    "topicId": 2,
    "question": "Na biofísica dos materiais poliméricos hospitalares, o que se entende pelo conceito de 'Relaxamento de Tensões' (stress relaxation)?",
    "options": [
      "A tensão na parede é inversamente proporcional ao raio, diminuindo significativamente quando a artéria se dilata em aneurisma.",
      "A tensão na parede aumenta com o raio do vaso e com a pressão transmural, sendo inversamente proporcional à espessura.",
      "A espessura da parede não tem qualquer efeito mecânico sobre a tensão de tração circunferencial suportada pelos tecidos.",
      "A tensão na parede depende exclusivamente da viscosidade do sangue, sendo independente da pressão hidrostática interna."
    ],
    "correctIndex": 1,
    "explanation": "O relaxamento de tensões (stress relaxation) é uma manifestação típica de materiais viscoelásticos: quando uma amostra de polímero é submetida a uma deformação instantânea fixa (ε = constante) e assim é mantida, as cadeias macromoleculares reorganizam-se lentamente internamente, aliviando o estresse elástico. Como consequência, a tensão interna σ(t) decresce monotonicamente com o tempo.",
    "distractorAnalysis": [
      "Está incorreta: segundo Laplace (T = P·r / e), o aumento do raio eleva a tensão circunferencial na parede vascular.",
      "Está incorreta: a espessura parietal (e) surge no denominador da equação, aliviando a tensão de corte circunferencial.",
      "Está incorreta: a viscosidade sanguínea afeta a perda de carga ao longo do tubo e não a tensão estática da parede vascular."
    ],
    "nursingApplication": "Quando o enfermeiro aplica uma fita adesiva, ligadura compressiva ou garrote de borracha no braço de um doente, a tensão de compressão inicial é máxima nos primeiros minutos e diminui progressivamente na primeira meia hora devido ao relaxamento de tensões do polímero. Se for necessária uma compressão hemostática mantida, o enfermeiro deve reavaliar e reajustar periodicamente a pressão aplicada."
  },
  {
    "id": 2034,
    "topicId": 2,
    "question": "O fenómeno viscoelástico complementar ao relaxamento de tensões, no qual um material se deforma de modo contínuo e progressivo sob a ação de uma carga ou tensão mecânica constante ao longo do tempo, designa-se por:",
    "options": [
      "O colagénio é responsável pela elasticidade reversível a baixas cargas e a elastina confere rigidez estrutural máxima.",
      "Ambas as proteínas apresentam rigorosamente o mesmo Módulo de Young e a mesma capacidade de deformação sob tração.",
      "O colagénio confere elevada resistência à tração e rigidez, enquanto a elastina proporciona grande extensibilidade e recuo.",
      "A elastina é um mineral cristalino incompressível e o colagénio comporta-se como um fluido puramente newtoniano."
    ],
    "correctIndex": 2,
    "explanation": "A fluência (creep) é a deformação permanente ou dependente do tempo que um material sólido sofre quando submetido a uma tensão mecânica constante (σ = constante) durante um período prolongado. Ocorre tanto em biomateriais poliméricos (como os tubos endotraqueais e colchões) como em tecidos biológicos (ligamentos, tendões e discos intervertebrais).",
    "distractorAnalysis": [
      "Está incorreta: inverte os papéis fisiológicos: o colagénio é rígido (E ~ 1 GPa) e a elastina é muito distensível (E ~ 1 MPa).",
      "Está incorreta: o Módulo de Young do colagénio é cerca de mil vezes superior ao da elastina em tecidos saudáveis.",
      "Está incorreta: tanto a elastina como o colagénio são proteínas fibrosas estruturais e não minerais ou fluidos viscosos."
    ],
    "nursingApplication": "A fluência (creep) explica por que a pele de um doente obeso ou acamado continua a deformar-se e adelgaçar-se ao longo de horas de apoio estático sobre o sacro, mesmo que o peso corporal não aumente. Explica também a perda progressiva da pressão de oclusão de clamps plásticos descartáveis aplicados em linhas de infusão ao longo de vários dias."
  },
  {
    "id": 2035,
    "topicId": 2,
    "question": "Quando um elastómero (como a borracha de um tubo de látex ou o tecido elástico de uma cinta de sustentação) é submetido a um ciclo de carga (estiramento) seguido de descarga (retorno elástico), a curva do ciclo forma uma área fechada. Este fenómeno físico é conhecido como:",
    "options": [
      "Módulo de Young de cerca de 200 GPa, apresentando rigidez idêntica ao aço cirúrgico inoxidável utilizado em placas.",
      "Módulo de Young inferior a 1 MPa, comportando-se com elasticidade semelhante à da cartilagem articular hialina.",
      "Módulo de Young nulo, porque o osso é um elemento vivo que não obedece aos princípios da mecânica dos materiais.",
      "Módulo de Young de cerca de 15 a 20 GPa, significativamente menor do que ligas de titânio (110 GPa) ou aço (200 GPa)."
    ],
    "correctIndex": 3,
    "explanation": "A histerese mecânica (ou elástica) é a diferença entre a energia despendida para deformar um material elástico durante o carregamento e a energia devolvida por esse material durante a descompressão. A curva de descarga situa-se abaixo da curva de carga no diagrama σ-ε; a área interna deste 'laço de histerese' corresponde rigorosamente à energia dissipada internamente pelo atrito viscoso molecular sob forma de calor.",
    "distractorAnalysis": [
      "Está incorreta: o osso cortical humano tem Módulo de Young em torno de 15-20 GPa e não 200 GPa (que é a rigidez do aço).",
      "Está incorreta: 1 MPa é a ordem de grandeza da rigidez da cartilagem articular ou elastina e não do osso cortical rígido.",
      "Está incorreta: os tecidos biológicos obedecem plenamente às leis da física, mecânica contínua e elasticidade clássica."
    ],
    "nursingApplication": "Almofadas e colchões hospitalares 'viscoelásticos' (espumas tipo 'memory foam') baseiam o seu sucesso na elevada histerese: ao absorverem o impacto do peso corporal do doente, dissipam a energia mecânica em calor em vez de a devolverem elasticamente como uma mola de colchão tradicional, amortecendo picos de pressão sobre o sacro e trocânteres."
  },
  {
    "id": 2036,
    "topicId": 2,
    "question": "No contexto da rigidez e resistência de agulhas hipodérmicas e cânulas cirúrgicas fabricadas em aço inoxidável austenítico (AISI 304/316), qual das seguintes afirmações sobre a sua secção transversal é cientificamente VERDADEIRA?",
    "options": [
      "A haste metálica mais rígida assume a carga mecânica, privando o osso de tensão e induzindo reabsorção óssea periprotética.",
      "O osso periprotético sofre hipertrofia acelerada devido ao aumento excessivo da estimulação piezoelétrica pela prótese.",
      "A prótese dissipa a totalidade da força peso do doente sob a forma de calor metabólico na medula óssea diafisária.",
      "Ocorre consolidação óssea precoce porque o titânio atua como catalisador químico na síntese de hidroxiapatite pelos osteoblastos."
    ],
    "correctIndex": 0,
    "explanation": "Na escala Birmingham Gauge utilizada internacionalmente em enfermagem e medicina, o calibre é inverso ao diâmetro numérico: agulhas de 18G ou 16G têm grande diâmetro externo (~1,2 a 1,6 mm), enquanto agulhas de 27G ou 30G têm diâmetro minúsculo (~0,3 mm). Como a rigidez à flexão de um tubo cilíndrico depende da quarta potência do diâmetro externo, uma agulha de 18G é dezenas de vezes mais rígida à flexão do que uma agulha fina, não fletindo facilmente ao perfurar tecidos densos.",
    "distractorAnalysis": [
      "Está incorreta: pela Lei de Wolff a falta de estímulo mecânico gera reabsorção e osteopenia (atrofia) e não hipertrofia.",
      "Está incorreta: a prótese suporta as cargas por deformação elástica mecânica e não por conversão energética em calor.",
      "Está incorreta: o titânio é biocompatível e osteocondutor mas não atua como catalisador metabólico de síntese mineral."
    ],
    "nursingApplication": "Na punção lombar (para colheita de líquor ou anestesia subaracnoideia), utilizam-se agulhas muito finas (25G a 27G) para minimizar a cefaleia pós-punção por perda liquórica. Contudo, devido à sua baixa rigidez à flexão, o enfermeiro que assiste o procedimento sabe que o médico utiliza um introdutor rígido metálico de maior calibre para garantir a trajetória reta inicial sem desvios ou empenamento da agulha fina."
  },
  {
    "id": 2037,
    "topicId": 2,
    "question": "Qual das seguintes pinças cirúrgicas hemostáticas frequentemente manipuladas por enfermeiros funciona como uma alavanca de 1.ª classe com sistema de travamento por cremalheira?",
    "options": [
      "O polipropileno dissolve-se no sangue em quarenta e oito horas, enquanto a poliglactina permanece inerte durante toda a vida.",
      "O polipropileno é um monofilamento não reabsorvível, enquanto a poliglactina é um polímero trançado reabsorvível por hidrólise.",
      "Ambos são fios de seda biológica trançada que perdem a resistência mecânica de tração logo na primeira semana pós-cirúrgica.",
      "O polipropileno é absorvido por fagocitose celular e a poliglactina é expelida intacta através das glândulas sudoríparas."
    ],
    "correctIndex": 1,
    "explanation": "As pinças hemostáticas de Kocher, Kelly, Pean e Crile possuem duas hastes que se cruzam num parafuso central fixo (fulcro intermediário): as pegas manuais situam-se de um lado e as mandíbulas de apreensão do outro lado. Isto define rigorosamente uma alavanca de 1.ª classe (interfixa). A cremalheira na base das pegas permite travar o sistema mecânico em equilíbrio estático sob tensão elástica constante.",
    "distractorAnalysis": [
      "Está incorreta: o polipropileno (Prolene) é um material não degradável sintético e não se dissolve em quarenta e oito horas.",
      "Está incorreta: nenhum deles é seda natural; são polímeros sintéticos desenvolvidos com perfis mecânicos controlados.",
      "Está incorreta: a poliglactina (Vicryl) é hidrolisada na água tecidual e o polipropileno não é eliminado por via sudorípara."
    ],
    "nursingApplication": "Ao clampar um dreno ou vaso sangrante com uma pinça de Kocher, a vantagem mecânica da alavanca de 1.ª classe concentra toda a força dos dedos na extremidade das mandíbulas, produzindo tensões compressivas suficientes para ocluir a luz vascular e assegurar hemostase imediata."
  },
  {
    "id": 2038,
    "topicId": 2,
    "question": "O silicone de grau medicinal é um dos biomateriais mais empregues em cateteres vesicais de longa duração (Foley) e drenos cirúrgicos. Do ponto de vista mecânico e biológico, qual é a propriedade distintiva do silicone?",
    "options": [
      "Extrema rigidez mecânica equivalente ao titânio metálico para manter o canal uretral permanentemente dilatado e tenso.",
      "Capacidade intrínseca de sofrer polimerização e endurecer irreversivelmente em contacto íntimo com o fluxo de urina.",
      "Baixíssimo Módulo de Young (alta flexibilidade), excelente biocompatibilidade mucosa e resistência à incrustação mineral.",
      "Natureza condutora de eletricidade estática para destruir biofilmes bacterianos intraluminais por microdescargas contínuas."
    ],
    "correctIndex": 2,
    "explanation": "O silicone medicinal (polidimetilsiloxano reticulado) é um elastómero com baixíssimo módulo de elasticidade (~1 a 5 MPa), o que lhe confere maciez e enorme complacência elástica. Isso minimiza o trauma mecânico por atrito e erosão sobre a mucosa da uretra e bexiga. Além disso, a sua hidrofobicidade e superfície lisa reduzem a deposição de cristais de estruvite e hidroxiapatite urinários, sendo indicado para cateterismos de até 12 semanas.",
    "distractorAnalysis": [
      "Está incorreta: sondas uretrais requerem flexibilidade e conformabilidade elástica para não lesionar a mucosa uretral.",
      "Está incorreta: o silicone é estável e mantém a flexibilidade elástica inalterada sem endurecer no trato urinário.",
      "Está incorreta: o silicone é um excelente isolador dielétrico e não gera descargas elétricas na bexiga do doente."
    ],
    "nursingApplication": "Em doentes que necessitam de algaliação de longa permanência (ex: lesões medulares), o enfermeiro opta por sondas vesicais 100% silicone em detrimento de sondas de látex plastificado, reduzindo a frequência de obstruções mecânicas por incrustação e prevenindo reações anafiláticas ao látex."
  },
  {
    "id": 2039,
    "topicId": 2,
    "question": "Quando um enfermeiro utiliza um cortador de gesso mecânico manual (alicate de gesso de Stille) para retirar uma tala imobilizadora endurecida, porque é que este instrumento possui braços tão compridos e lâminas tão curtas?",
    "options": [
      "Para permitir que o enfermeiro aplique forças a grande distância sem necessidade de inspecionar a pele sob a imobilização.",
      "Para transformar o alicate numa alavanca de 3.ª classe com prioridade para a velocidade de deslocamento das pontas de corte.",
      "Para reduzir a massa inercial total do equipamento metálico tornando a sua esterilização em autoclave mais económica.",
      "Para maximizar o braço de potência em relação ao de resistência (d_P >> d_R), gerando grande vantagem mecânica (VM >> 1)."
    ],
    "correctIndex": 3,
    "explanation": "O alicate de cortar gesso é uma alavanca de 1.ª classe. A Vantagem Mecânica é dada por VM = d_P / d_R. Ao fabricar o instrumento com cabos muito longos (d_P grande, ex: 30 cm) e mordentes/lâminas muito curtos (d_R pequeno, ex: 3 cm), a vantagem mecânica atinge valores de 10 ou mais. Uma força de aperto manual de 100 N exercida pelo enfermeiro traduz-se numa força cortante de 1000 N nas lâminas, superando facilmente o limite de resistência do gesso.",
    "distractorAnalysis": [
      "Está incorreta: a segurança da técnica exige supervisão visual contínua para prevenir ferimentos cortantes na pele do doente.",
      "Está incorreta: o alicate de gesso é uma alavanca de 1.ª classe interfixa com VM >> 1 e não uma alavanca de 3.ª classe.",
      "Está incorreta: hastes compridas aumentam a massa do instrumento, sendo justificadas unicamente pelo ganho mecânico de força."
    ],
    "nursingApplication": "A aplicação do princípio da alavanca aos instrumentos manuais protege as articulações dos dedos e punhos do enfermeiro contra lesões por esforços repetitivos (LER/DORT), permitindo executar tarefas de grande demanda mecânica com esforço fisiológico controlado."
  },
  {
    "id": 2040,
    "topicId": 2,
    "question": "Durante a tração cutânea de Buck no membro inferior de um doente com fratura do colo femoral enquanto aguarda cirurgia, utiliza-se um sistema com corda, roldana (polia fixa) e peso suspenso de 3 kg. Qual é a função biofísica da roldana fixa neste circuito mecânico?",
    "options": [
      "Alterar a direção e sentido da força de tração axial mantendo rigorosamente inalterada a sua intensidade (módulo da força).",
      "Duplicar a força útil de tração sobre o colo femoral, atuando biomecanicamente como uma alavanca de 2.ª classe com VM = 2.",
      "Eliminar totalmente o efeito da aceleração gravítica local sobre o segmento anatómico ósseo fraturado em repouso.",
      "Reduzir o peso do contrapeso suspenso a metade do seu valor real através do amortecimento elástico dos nós da corda."
    ],
    "correctIndex": 0,
    "explanation": "Uma roldana ou polia fixa ideal não confere vantagem mecânica de força (VM = 1): a intensidade da força de tração na corda mantém-se rigorosamente igual à intensidade da força peso do contrapeso (T = P = m · g ≈ 30 N). A sua função biomecânica exclusiva é redirecionar o vetor força: a gravidade puxa o contrapeso verticalmente para baixo, e a roldana desvia a corda para tracionar o membro horizontalmente ao longo do eixo diafisário do fémur.",
    "distractorAnalysis": [
      "Está incorreta: uma roldana simples fixa não duplica a força motora (VM = 1), servindo apenas para redirecionar o cabo.",
      "Está incorreta: a roldana fixa não anula o campo gravítico terrestre que atua sobre o membro e o peso suspenso.",
      "Está incorreta: a tensão no cabo mantém-se uniforme em toda a extensão desprezando o atrito estático nos mancais."
    ],
    "nursingApplication": "Na vigilância de enfermagem à tração de Buck, é vital garantir que o peso permaneça livremente suspenso no ar e que a corda deslize suavemente no sulco da roldana. Se o peso assentar no chão ou se a corda saltar da roldana, o atrito excessivo anula a tração longitudinal, originando contração espástica do fémur e dor intensa no doente."
  },
  {
    "id": 2041,
    "topicId": 2,
    "question": "O Módulo de Elasticidade Volumétrico (Bulk Modulus, K) é a grandeza mecânica que relaciona a variação de pressão hidrostática exercida sobre um corpo com a sua variação fracionária de volume. Em relação aos tecidos moles do corpo humano (músculos, vísceras e sangue) compostos maioritariamente por água líquida, o que se pode afirmar?",
    "options": [
      "Módulo Volumétrico nulo, comprimindo-se instantaneamente até a 1% do seu volume inicial com a pressão atmosférica normal.",
      "Elevadíssimo Módulo Volumétrico (K ≈ 2,2 GPa), comportando-se como corpos praticamente incompressíveis sob pressão hidrostática.",
      "Comportamento altamente compressível com redução acentuada de volume idêntica à dos gases contidos nos alvéolos pulmonares.",
      "Aumento exponencial do volume tecidual total que duplica espontaneamente sempre que a pressão hidrostática ambiente se eleva."
    ],
    "correctIndex": 1,
    "explanation": "A água líquida e os tecidos moles biológicos com alto teor hídrico têm um Módulo de Compressibilidade Volumétrica (K) extremamente alto (cerca de 2,2 × 10⁹ Pa = 2,2 GPa). Isto significa que são praticamente incompressíveis: para reduzir o volume em apenas 1%, seria necessária uma pressão colossal de centenas de atmosferas. Os gases pulmonares e intestinais, em contrapartida, são altamente compressíveis.",
    "distractorAnalysis": [
      "Está incorreta: fluidos e tecidos moles à base de água são quase incompressíveis sob pressões fisiológicas normais (K elevado).",
      "Está incorreta: os gases alveolares são altamente compressíveis, ao contrário dos tecidos biológicos líquidos e sólidos.",
      "Está incorreta: sob aumento de pressão isotrópica o volume diminui ligeiramente ou mantém-se, nunca aumentando."
    ],
    "nursingApplication": "Esta incompressibilidade volumar dos tecidos líquidos explica a transmissão fiel e instantânea de ondas de pressão hidrostática no sistema vascular (onda de pulso arterial) e em compartimentos fechados (pressão intracraniana). Quando o enfermeiro monitoriza a PIC, qualquer acréscimo de volume dentro da calote craniana rígida faz a pressão disparar (Doutrina de Monro-Kellie)."
  },
  {
    "id": 2042,
    "topicId": 2,
    "question": "Num sistema de alavanca anatómico em equilíbrio, quando o braço de resistência (d_R) aumenta mantendo-se a carga resistente constante, o que acontece à força muscular motora (F_P) que o músculo necessita de exercer?",
    "options": [
      "A força muscular necessária diminui proporcionalmente, facilitando a sustentação postural do membro em extensão.",
      "A força muscular permanece rigorosamente constante, pois independe da distância geométrica dos braços de alavanca.",
      "A força muscular F_P tem de aumentar na mesma proporção para restabelecer a igualdade de momentos (τ_P = τ_R).",
      "O momento de força resistente anula-se espontaneamente devido à conservação do momento angular na articulação sinovial."
    ],
    "correctIndex": 2,
    "explanation": "Pela condição de equilíbrio de rotação: F_P · d_P = F_R · d_R => F_P = (F_R · d_R) / d_P. Se o braço de resistência d_R aumentar (por exemplo, ao segurar um objeto com o braço estendido em vez de junto ao corpo) mantendo F_R e d_P fixos, o momento resistente (F_R · d_R) cresce diretamente. O músculo é obrigado a aumentar proporcionalmente a sua força F_P para não deixar cair o segmento.",
    "distractorAnalysis": [
      "Está incorreta: pelo equilíbrio de torque (F_P · d_P = F_R · d_R), se d_R cresce, a força F_P tem de aumentar.",
      "Está incorreta: o esforço muscular depende criticamente da distância da carga ao fulcro articular de rotação.",
      "Está incorreta: o torque resistente é o produto F_R · d_R e aumenta com o afastamento geométrico da carga."
    ],
    "nursingApplication": "Este princípio é o esteio da segurança postural: ao segurar num membro de um doente pesado, quanto mais perto do corpo do enfermeiro o membro estiver assente, menor será o braço de resistência e menor o esforço muscular exigido aos membros superiores do profissional."
  },
  {
    "id": 2043,
    "topicId": 2,
    "question": "O Módulo de Cisalhamento (ou módulo de rigidez transversal, G) relaciona a tensão de corte com a deformação angular correspondente. Nos discos intervertebrais da coluna vertebral, qual é a estrutura fibrosa elástica que resiste predominantemente a estas tensões de cisalhamento e torção?",
    "options": [
      "O núcleo pulposo central, composto por gel hidrofílico viscoso desprovido de qualquer fibra estrutural de colagénio.",
      "A medula espinhal que transita no canal raquidiano sem contacto mecânico direto com a periferia do disco intervertebral.",
      "As lâminas ósseas dos pedículos vertebrais que absorvem a totalidade das forças de corte sem deformação do disco.",
      "O anel fibroso periférico, constituído por lamelas concêntricas de colagénio orientadas obliquamente a cerca de 60 graus."
    ],
    "correctIndex": 3,
    "explanation": "O anel fibroso do disco intervertebral é uma obra-prima de engenharia tecidual: é constituído por 15 a 25 lâminas concêntricas de fibras de colagénio tipo I e II. As fibras de cada lâmina estão dispostas obliquamente a cerca de 60° em relação à vertical, e a orientação inverte-se na lâmina seguinte. Esta disposição em 'rede cruzada' confere elevadíssimo módulo de cisalhamento e rigidez contra forças de torção e corte lateral durante os movimentos do tronco.",
    "distractorAnalysis": [
      "Está incorreta: o núcleo pulposo líquido resiste a compressões axiais redistribuindo pressão hidrostática e não cisalhamento puro.",
      "Está incorreta: a medula espinhal é tecido nervoso nobre vulnerável e não uma estrutura mecânica de suporte articular.",
      "Está incorreta: os pedículos formam os arcos vertebrais posteriores e não a estrutura elástica intersomática do disco."
    ],
    "nursingApplication": "A alternância angular das fibras do anel fibroso suporta bem a flexão isolada, mas fica extremamente vulnerável quando a flexão lombar é combinada com rotação axial (torção). Essa combinação cria tensões de cisalhamento máximas que podem rasgar as fibras anulares, provocando a extrusão do núcleo pulposo (hérnia discal lombar)."
  },
  {
    "id": 2044,
    "topicId": 2,
    "question": "Na utilização de seringas descartáveis para administração medicamentosa, qual é a relação física entre a área do êmbolo e a força mecânica manual exigida para gerar uma determinada pressão no líquido?",
    "options": [
      "Pela relação P = F / A, para uma mesma pressão pretendida, uma seringa de área maior (50 mL) exige maior força manual.",
      "Uma seringa de 50 mL exige sempre menor força manual do que uma seringa de 1 mL para gerar a mesma pressão intraluminal.",
      "A pressão gerada no fluido independe da área transversal do êmbolo, dependendo exclusivamente da viscosidade do líquido.",
      "A força exigida no êmbolo varia de forma inversamente proporcional ao quadrado da área de secção do cilindro de plástico."
    ],
    "correctIndex": 0,
    "explanation": "A pressão hidrostática é dada por P = F / A => F = P · A. Para gerar a mesma pressão no líquido (por exemplo, 100 kPa para vencer a resistência de uma cânula estenosada), quanto maior for a área A do êmbolo da seringa, maior será a força muscular manual F necessária. Pelo mesmo motivo, com uma seringa de insulina fina de 1 mL (pequeníssima área A), uma força manual modesta de 10 N gera uma pressão colossal no interior do cilindro.",
    "distractorAnalysis": [
      "Está incorreta: F = P · A; para uma dada pressão P, quanto maior for a área A do êmbolo, maior terá de ser a força aplicada F.",
      "Está incorreta: a área transversal do êmbolo governa diretamente a relação entre a força aplicada e a pressão hidráulica gerada.",
      "Está incorreta: a força é diretamente proporcional à área (F = P·A) e não inversamente proporcional ao quadrado da área."
    ],
    "nursingApplication": "Na desobstrução de cateteres venosos centrais (PICC ou cateter totalmente implantado / Port-a-Cath), NUNCA se deve utilizar seringas de pequeno calibre (como 1 mL ou 3 mL). A pequeníssima área do êmbolo gera pressões hidrostáticas brutais (acima de 200 psi) com facilidade na mão do enfermeiro, que podem romper o cateter no interior da veia do doente. As normas de enfermagem exigem o uso exclusivo de seringas de 10 mL ou superior."
  },
  {
    "id": 2045,
    "topicId": 2,
    "question": "O tecido ósseo é classicamente descrito em biomecânica como um material 'Anisótropo'. O que significa esta propriedade mecânica fundamental?",
    "options": [
      "O osso apresenta rigidez mecânica perfeitamente uniforme e idêntica em qualquer direção espacial tridimensional avaliada.",
      "As suas propriedades mecânicas (Módulo de Young e resistência) variam consoante a direção da força aplicada.",
      "O osso é totalmente incapaz de sofrer remodelação celular ou alteração de densidade quando submetido a solicitações.",
      "O osso deforma-se plasticamente apenas quando sujeito a tração uniaxial, sendo totalmente rígido em qualquer flexão."
    ],
    "correctIndex": 1,
    "explanation": "Um material isotrópico possui propriedades mecânicas idênticas em qualquer direção (como o vidro ou o aço sem grão). O osso, contudo, é ANISÓTROPO: a orientação longitudinal dos ósteons e das fibras de colagénio confere-lhe um Módulo de Young e uma tensão de rotura muito maiores no sentido longitudinal (ao longo da diáfise, onde E ≈ 18 GPa) do que no sentido transversal/perpendicular (onde E ≈ 10 GPa).",
    "distractorAnalysis": [
      "Está incorreta: apresentar o mesmo comportamento em todas as direções é a definição de material Isótropo e não Anisótropo.",
      "Está incorreta: a remodelação celular óssea sob carga mecânica é universal e governed pela Lei de Wolff.",
      "Está incorreta: o osso sofre deformação elástica e plástica sob flexão, cisalhamento e torção, não apenas sob tração pura."
    ],
    "nursingApplication": "A anisotropia do osso explica por que o fémur suporta cargas imensas na vertical durante a corrida, mas quebra facilmente com impactos transversais perpendiculares (por exemplo, na batida lateral da anca contra o chão numa queda ou no painel de um automóvel num acidente de trânsito)."
  },
  {
    "id": 2046,
    "topicId": 2,
    "question": "Um dreno cirúrgico com reservatório de vácuo tipo Jackson-Pratt ou Redon aproveita as propriedades elásticas de que componente para gerar pressão negativa e aspirar exsudados?",
    "options": [
      "De um micromotor elétrico incorporado na base plástica que aciona uma bomba peristáltica minúscula alimentada a bateria.",
      "De uma reação endotérmica contínua no interior do reservatório que consome os gases do ar rarefeito por combustão.",
      "Da memória elástica do bulbo ou fole que, após ser comprimido e fechado, tenta recuperar a forma esférica inicial.",
      "Da força gravitacional descendente que atua na coluna líquida independentemente da altura do frasco coletor no leito."
    ],
    "correctIndex": 2,
    "explanation": "O dreno de vácuo ativo tipo bulbo (Jackson-Pratt) ou fole (Redon) utiliza a elasticidade intrínseca do polímero: o enfermeiro comprime manualmente o reservatório esvaziando o ar e coloca a tampa de vedação. A energia de deformação elástica armazenada na parede tenta forçar a expansão do bulbo de volta ao seu volume de repouso; como está vedado, essa tendência expansiva cria uma pressão interna inferior à atmosférica (vácuo parcial de -50 a -150 mmHg), aspirando fluidos do leito cirúrgico.",
    "distractorAnalysis": [
      "Está incorreta: drenos de vácuo tipo Redon ou JP são sistemas passivos sem motores elétricos ou componentes eletrónicos.",
      "Está incorreta: a subpressão é mecânica e decorre da expansão elástica das paredes poliméricas e não de reações de combustão.",
      "Está incorreta: a sucção nos drenos de fole depende da recuperação elástica das suas paredes e não da gravidade."
    ],
    "nursingApplication": "Na manutenção de drenos cirúrgicos após mastectomias ou cirurgias ortopédicas, o enfermeiro deve esvaziar regularmente o exsudado acumulado e voltar a comprimir o bulbo antes de fechar o tampão. Se o bulbo ficar cheio de ar ou líquido, a parede elástica atinge a sua forma de repouso, cessando a sucção e favorecendo a formação de seromas e hematomas na ferida."
  },
  {
    "id": 2047,
    "topicId": 2,
    "question": "Qual das seguintes relações mecânicas quantifica a Vantagem Mecânica (VM) em qualquer alavanca em estado de equilíbrio estático sem atrito?",
    "options": [
      "VM = F_P · F_R · d_P · d_R (produto escalar quádruplo das forças e distâncias aplicadas nos dois lados do fulcro).",
      "VM = d_R / (F_P · g) (quociente entre o braço de resistência e o peso associado à aceleração da gravidade local).",
      "VM = (F_P - F_R) / (d_P + d_R) (diferença entre forças dividida pela soma dos comprimentos dos dois segmentos da haste).",
      "VM = F_R / F_P = d_P / d_R (razão entre a carga superada e a força motora, igual à razão entre os braços de alavanca)."
    ],
    "correctIndex": 3,
    "explanation": "Por definição, a vantagem mecânica real é a razão entre a carga resistente superada e a força motora aplicada: VM = F_R / F_P. No equilíbrio de momentos (F_P · d_P = F_R · d_R), dividindo ambos os lados por F_P e por d_R, obtém-se rigorosamente a igualdade com a vantagem mecânica ideal baseada na geometria: VM = d_P / d_R.",
    "distractorAnalysis": [
      "Está incorreta: multiplicar todas as grandezas resultaria numa unidade física incoerente (N²·m²) e não numa grandeza adimensional.",
      "Está incorreta: a vantagem mecânica relaciona razões de grandezas homólogas sem envolver a aceleração da gravidade no denominador.",
      "Está incorreta: fórmulas de diferenças divididas por somas violam a definição de vantagem mecânica e equilíbrio de momentos."
    ],
    "nursingApplication": "Esta fórmula permite ao enfermeiro avaliar rapidamente a eficiência de ferramentas manuais ou compreender por que aproximar o doente do seu próprio tronco reduz o braço de resistência d_R, diminuindo a força F_P exigida da musculatura do profissional para manter o membro em equilíbrio."
  },
  {
    "id": 2048,
    "topicId": 2,
    "question": "O conceito de 'Limite de Proporcionalidade' na curva de tração de um material refere-se ao ponto exato:",
    "options": [
      "Até ao qual a tensão mecânica é linearmente proporcional à deformação, cessando a validade estrita da Lei de Hooke.",
      "Onde o biomaterial atinge a temperatura crítica de fusão e passa do estado sólido compacto ao estado líquido viscoso.",
      "Onde a deformação plástica irreversível atinge cem por cento da extensão longitudinal do segmento esquelético analisado.",
      "Onde a densidade volumétrica do material duplica subitamente em virtude de forças microscópicas interatómicas atrativas."
    ],
    "correctIndex": 0,
    "explanation": "Na curva tensão-deformação, a primeira região é uma linha reta perfeita que parte da origem. O ponto mais alto dessa reta é o Limite de Proporcionalidade: até aí, a Lei de Hooke (σ = E · ε) aplica-se com precisão matemática absoluta. Imediatamente acima deste ponto, a curva pode ainda apresentar comportamento elástico reversível por um pequeno intervalo (até ao limite de elasticidade), mas a relação deixa de ser estritamente linear.",
    "distractorAnalysis": [
      "Está incorreta: o limite de proporcionalidade é um marco mecânico à temperatura ambiente e não um ponto térmico de fusão.",
      "Está incorreta: além do limite de proporcionalidade inicia-se a não linearidade, situando-se a deformação plástica mais adiante.",
      "Está incorreta: a densidade do material sob tração elástica não sofre duplicações súbitas na curva tensão-deformação."
    ],
    "nursingApplication": "Em aparelhos de tracção ou balanças mecânicas pediátricas de mola, a mola interna deve operar sempre estritamente abaixo do seu limite de proporcionalidade. Se uma sobrecarga pontual ultrapassar esse patamar, a calibração do instrumento fica irremediavelmente viciada, conduzindo a erros de pesagem de doentes."
  },
  {
    "id": 2049,
    "topicId": 2,
    "question": "Nas talas de imobilização ortopédica de fibra de vidro (resinas de poliuretano impregnadas em malha tricotada), o que ocorre durante o processo de presa que altera radicalmente o seu Módulo de Young?",
    "options": [
      "Ocorre uma desidratação osmótica que cristaliza os sais minerais da resina sintética sem formar ligações cruzadas poliméricas.",
      "Ocorre polimerização exotérmica das resinas de poliuretano com água, elevando o Módulo de Young para a rigidez de um sólido.",
      "Ocorre evaporação do solvente volátil à temperatura cutânea, reduzindo a densidade do compósito para aumentar a flexibilidade.",
      "Ocorre um alinhamento magnético das fibras de vidro com o campo eletrostático da pele que enrijece a malha por atração."
    ],
    "correctIndex": 1,
    "explanation": "A fita de fibra de vidro para gesso ortopédico vem embalada a vácuo em estado complacente e maleável (baixo módulo elástico). Ao ser mergulhada em água, a humidade catalisa uma polimerização exotérmica das resinas de poliuretano que une quimicamente as fibras de vidro numa malha tridimensional sólida e rígida. Em cerca de 3 a 5 minutos, o Módulo de Young atinge a rigidez final, garantindo a imobilização anatómica da articulação.",
    "distractorAnalysis": [
      "Está incorreta: o endurecimento decorre da polimerização por reticulação covalente ativada pela água e não de cristalização osmótica.",
      "Está incorreta: a cura da fibra de vidro é uma reação química de polimerização de pré-polímeros de isocianato e não simples evaporação de solvente.",
      "Está incorreta: a fibra de vidro é um material diamagnético não polarizável por eletrostática cutânea, operando por coesão polimérica."
    ],
    "nursingApplication": "O enfermeiro que aplica ou auxilia na confeção de talas sintéticas de fibra de vidro sabe que deve modelar a tala rigorosamente antes de a reação de polimerização endurecer o material. Além disso, devido ao caráter exotérmico da reação que liberta calor sensível, a água de imersão não deve ser excessivamente quente para evitar queimaduras térmicas na pele do doente."
  },
  {
    "id": 2050,
    "topicId": 2,
    "question": "Um carrinho de emergência médica (carrinho de paragem) com massa de 80 kg está parado num piso horizontal. Sabendo que o coeficiente de atrito estático entre as rodas e o piso é μ_e = 0,25, qual é a força horizontal mínima F que o enfermeiro tem de aplicar para iniciar o movimento do carrinho (adotando g = 9,8 m/s²)?",
    "options": [
      "Uma força horizontal mínima de 80 N aplicada pelo profissional, correspondendo unicamente ao valor escalar da massa inercial.",
      "Uma força horizontal mínima de 20 N aplicada pelo profissional, decorrente do produto simples do coeficiente pela massa em kg.",
      "Uma força horizontal mínima de 196 N aplicada pelo profissional (F = μ_e · m · g = 0,25 × 80 kg × 9,8 m/s²).",
      "Uma força horizontal mínima de 784 N aplicada pelo profissional, correspondendo à magnitude integral da força peso vertical."
    ],
    "correctIndex": 2,
    "explanation": "A força de atrito estático máxima que impede o início do movimento é dada por F_atrito = μ_e · N. Como o piso é horizontal e não há outras forças verticais, a força normal é igual ao peso: N = P = m · g = 80 kg × 9,8 m/s² = 784 N. Calculando a força mínima para romper o atrito: F = 0,25 × 784 N = 196 N (aproximadamente o esforço muscular de sustentar 20 kg no ar).",
    "distractorAnalysis": [
      "Está incorreta: 80 N confunde o valor numérico da massa (80 kg) com a força de atrito horizontal necessária.",
      "Está incorreta: 20 N resulta de multiplicar μ_e pela massa (0,25 × 80) esquecendo de multiplicar pela aceleração da gravidade g (9,8 m/s²).",
      "Está incorreta: 784 N é a força normal vertical (P = 80 × 9,8) e a força horizontal necessária para iniciar o movimento é apenas F = μ_e·N = 196 N."
    ],
    "nursingApplication": "Em situações de paragem cardiorrespiratória (PCR), cada segundo conta. Se as rodas do carrinho de paragem estiverem travadas ou se o diâmetro das rodas for demasiado pequeno (elevado atrito ao rolamento e irregularidades no solo), a força exigida do enfermeiro para acelerar o equipamento pode atrasar o transporte do desfibrilhador até ao leito do doente."
  },
  {
    "id": 2051,
    "topicId": 2,
    "question": "O Momento de uma Força (ou Torque, τ) em relação a um eixo de rotação articular é definido fisicamente pelo produto:",
    "options": [
      "τ = F / d · cos(θ), onde a intensidade da força é dividida pelo comprimento do segmento anatómico do membro.",
      "τ = m · a · d², sendo o torque diretamente proporcional à inércia de massa e ao quadrado da distância linear.",
      "τ = F · v · tg(θ), onde v é a velocidade angular instantânea com que a extremidade óssea se desloca no espaço.",
      "τ = F · d · sen(θ), onde F é o módulo da força, d a distância do ponto de aplicação ao eixo e θ o ângulo entre ambos."
    ],
    "correctIndex": 3,
    "explanation": "O torque quantifica a tendência de uma força para produzir rotação em torno de um ponto de apoio (fulcro). A sua intensidade máxima ocorre quando a força é perpendicular ao braço de alavanca (θ = 90°, sen 90° = 1), sendo expresso em Newton-metro (N·m) no SI.",
    "distractorAnalysis": [
      "Está incorreta: o torque é o produto da força pelo braço (F · d) e não a divisão da força pela distância.",
      "Está incorreta: o torque varia linearmente com o braço d e depende da força aplicada e não da aceleração e distância ao quadrado.",
      "Está incorreta: o momento de uma força estático independe da velocidade angular cinemática de rotação."
    ],
    "nursingApplication": "Ao mobilizar passivamente o membro de um doente com contraturas espásticas, segurar o membro na extremidade distal (maior braço d) permite ao enfermeiro aplicar um torque articular eficaz com mínimo esforço muscular manual."
  },
  {
    "id": 2052,
    "topicId": 2,
    "question": "Qual é a unidade oficial do Sistema Internacional (SI) para medir o Momento de uma Força (Torque)?",
    "options": [
      "Newton-metro (N·m), resultante do produto dimensional de uma força (Newtons) por uma distância (metros).",
      "Joule (J), porque o momento de uma força é uma grandeza puramente escalar idêntica à energia mecânica.",
      "Pascal (Pa = N/m²), expressando a pressão mecânica exercida pela força no ponto de rotação articular.",
      "Watt (W = J/s), quantificando a taxa temporal com que a energia mecânica é transferida durante a rotação."
    ],
    "correctIndex": 0,
    "explanation": "Como o torque resulta do produto de uma força (Newton) por uma distância de braço de alavanca (metro), a sua unidade dimensional é o Newton-metro (N·m). Embora dimensionalmente equivalente ao Joule, por convenção física reserva-se o N·m para grandezas vetoriais rotacionais e o Joule para energia escalar.",
    "distractorAnalysis": [
      "Está incorreta: Está incorreta porque, embora dimensionalmente equivalente a Joules, o torque é grandeza vetorial e mede-se em N·m para se distinguir do trabalho escalar (J).",
      "Está incorreta: Pascal (N/m²) é a unidade de pressão e tensão mecânica (força por área) e não de torque (força por distância).",
      "Está incorreta: Watt é a unidade de potência mecânica (taxa de trabalho por unidade de tempo) e não de momento de uma força."
    ],
    "nursingApplication": "Manuais de aparelhos cirúrgicos e camas articuladas motorizadas especificam os limites de torque dos motores em N·m; respeitar estes limites evita a queima dos motores elétricos ao elevar doentes com sobrepeso."
  },
  {
    "id": 2053,
    "topicId": 2,
    "question": "Para que um segmento corporal ou um instrumento cirúrgico em forma de alavanca permaneça em equilíbrio rotacional estático (sem rodar), a condição física indispensável é:",
    "options": [
      "A força motora muscular aplicada na extremidade da haste deve ser estritamente superior ao peso da carga.",
      "A soma algébrica de todos os momentos de força em relação a qualquer ponto do sistema deve ser nula (∑τ = 0).",
      "A velocidade angular de rotação do segmento esquelético deve ser mantida num valor constante e positivo.",
      "O momento angular total deve crescer a uma taxa constante de modo a contrabalançar o atrito sinovial."
    ],
    "correctIndex": 1,
    "explanation": "A 2.ª condição de equilíbrio estático estabelece que o somatório dos torques no sentido horário tem de igualar exatamente o somatório dos torques no sentido anti-horário: ∑τ_horário = ∑τ_anti-horário, o que equivale a ∑τ = 0.",
    "distractorAnalysis": [
      "Está incorreta: o equilíbrio rotacional estático exige equilíbrio de momentos (∑τ = 0) e não que a força motora supere a resistência.",
      "Está incorreta: velocidade angular diferente de zero implica movimento rotacional e não repouso estático absoluto.",
      "Está incorreta: a variação do momento angular implica a existência de torque resultante não nulo, violando o equilíbrio estático."
    ],
    "nursingApplication": "Ao ajustar a posição de um membro fraturado mantido numa calha de Braun com tração contínua, o enfermeiro equilibra os momentos de força dos pesos para que o membro repouse estável sem rodar lateralmente."
  },
  {
    "id": 2054,
    "topicId": 2,
    "question": "Um enfermeiro aplica uma força perpendicular de 20 N na extremidade da pega de uma manivela de regulação de altura de uma cama hospitalar, a uma distância de 0,25 metros do eixo de rotação. Qual é o torque gerado na manivela?",
    "options": [
      "Um torque de 80 N·m em virtude da divisão da força mecânica aplicada pelo comprimento da pega (20 / 0,25).",
      "Um torque de 0,8 N·m decorrente da conversão da força muscular para a aceleração normal de rotação.",
      "Um torque de 5 N·m em relação ao eixo giratório da torneira (τ = F · d = 20 N × 0,25 m).",
      "Um torque nulo (0 N·m) visto que a força perpendicular anula o momento torsor no fulcro da válvula."
    ],
    "correctIndex": 2,
    "explanation": "Como a força é perpendicular (θ = 90°, sen 90° = 1), o torque é calculado diretamente por τ = F · d = 20 N × 0,25 m = 5 N·m.",
    "distractorAnalysis": [
      "Está incorreta: 80 N·m resulta de dividir a força pela distância em vez de a multiplicar (τ = 20 × 0,25 = 5 N·m).",
      "Está incorreta: 0,8 N·m resulta de um erro no cálculo algébrico das grandezas de força e comprimento.",
      "Está incorreta: uma força perpendicular ao braço (θ = 90°) produz o torque máximo possível (sen 90° = 1)."
    ],
    "nursingApplication": "Compreender que o torque aumenta com o comprimento da pega da manivela elucida por que razão alavancas compridas facilitam a rotação de estrados mecânicos em camas manuais em caso de falha de energia elétrica."
  },
  {
    "id": 2055,
    "topicId": 2,
    "question": "O que acontece ao torque gerado por uma força muscular se a linha de ação da força passar exatamente PELO CENTRO do eixo articular de rotação (braço de alavanca d = 0)?",
    "options": [
      "O torque atinge o seu valor máximo porque a distância linear ao eixo de rotação é minimizada.",
      "O torque inverte instantaneamente o seu sentido vetorial sem alterar a sua magnitude numérica.",
      "O torque duplica de intensidade devido ao aumento da força de compressão exercida na cartilagem.",
      "O torque é rigorosamente zero (τ = 0), sendo a força totalmente ineficaz para produzir rotação articular."
    ],
    "correctIndex": 3,
    "explanation": "Pela fórmula τ = F · d · sen θ, se a distância d entre a linha de ação da força e o centro de rotação for nula (d = 0), o torque é nulo: τ = F · 0 = 0. A força passa pelo fulcro e atua exclusivamente como força de estabilização articular (compressão ou distração), sem qualquer componente de rotação.",
    "distractorAnalysis": [
      "Está incorreta: se a linha de ação passa no fulcro, o braço de momento perpendicular é nulo (d = 0), logo τ = 0.",
      "Está incorreta: forças que passam no fulcro geram apenas compressão ou tração articular axial, sem produzir torque.",
      "Está incorreta: não há torque nem duplicação de momento rotacional quando a linha de ação interseta o fulcro."
    ],
    "nursingApplication": "Na reabilitação articular pós-cirúrgica, o enfermeiro sabe que em certos ângulos articulares os tendões aplicam forças quase puramente estabilizadoras na cavidade glenoideia ou cotilóideia, protegendo a prótese recém-implantada."
  },
  {
    "id": 2056,
    "topicId": 2,
    "question": "Um corta-gesso ortopédico manual possui lâminas curtas de 3 cm (d_R = 0,03 m) e cabos longos de 30 cm (d_P = 0,30 m). Se o enfermeiro aplicar uma força manual de 50 N nas pegas dos cabos, que força de corte é exercida sobre a ligadura gessada rígida?",
    "options": [
      "Uma força de corte de 500 N exercida sobre o gesso (F_R = F_P · d_P / d_R = 100 × 0,15 / 0,03).",
      "Uma força de corte de 20 N exercida sobre o gesso em virtude da perda mecânica de atrito nas lâminas.",
      "Uma força de corte de 100 N exercida sobre o gesso mantendo a mesma magnitude da força das mãos.",
      "Uma força de corte de 1500 N decorrente da multiplicação direta dos comprimentos pela força manual."
    ],
    "correctIndex": 0,
    "explanation": "Numa alavanca em equilíbrio rotacional, F_P · d_P = F_R · d_R ⇒ F_R = F_P · (d_P / d_R). A relação d_P / d_R = 30 / 3 = 10 (Vantagem Mecânica = 10). Logo, F_R = 50 N × 10 = 500 N. A força é multiplicada 10 vezes pelas mandíbulas de corte.",
    "distractorAnalysis": [
      "Está incorreta: 20 N resultaria de inverter os braços de alavanca (100 × 0,03 / 0,15), assumindo desvantagem mecânica.",
      "Está incorreta: a alavanca interfixa com d_P > d_R multiplica a força por 5 vezes (VM = 5), não sendo igual a 100 N.",
      "Está incorreta: 1500 N corresponderia a uma vantagem de 15 vezes, quando a razão geométrica real dos braços é 5 (15 cm / 3 cm)."
    ],
    "nursingApplication": "A vantagem mecânica de 10 do corta-gesso permite ao enfermeiro cortar com segurança ligaduras espessas de resina ou gesso sem fadiga na mão, aplicando apenas moderada força de preensão manual."
  },
  {
    "id": 2057,
    "topicId": 2,
    "question": "Dois pesos são colocados numa barra equilibrada em torno de um fulcro central: uma massa m₁ = 10 kg está a uma distância d₁ = 0,5 m à esquerda do apoio. A que distância d₂ à direita do apoio deve ser colocada uma massa m₂ = 5 kg para restabelecer o equilíbrio horizontal?",
    "options": [
      "d₂ = 0,16 metros da carga de 20 N ao fulcro através da divisão simples das cargas aplicadas.",
      "d₂ = 1,0 metro da carga de 20 N ao fulcro para igualar os momentos (50 N × 0,4 m = 20 N × d₂).",
      "d₂ = 2,5 metros da carga de 20 N ao fulcro para duplicar a estabilidade do sistema em repouso.",
      "d₂ = 0,4 metros da carga de 20 N ao fulcro mantendo obrigatoriamente distâncias geométricas simétricas."
    ],
    "correctIndex": 1,
    "explanation": "Para haver equilíbrio de momentos: P₁ · d₁ = P₂ · d₂ ⇒ (m₁ · g) · d₁ = (m₂ · g) · d₂. Como g cancela: 10 kg × 0,5 m = 5 kg × d₂ ⇒ 5 = 5 · d₂ ⇒ d₂ = 1,0 m. A massa mais leve precisa do dobro da distância para gerar o mesmo torque.",
    "distractorAnalysis": [
      "Está incorreta: 0,16 m (20 × 0,4 / 50) resulta de trocar erradamente as posições das variáveis no equilíbrio de torque.",
      "Está incorreta: 2,5 m geraria um torque de 50 N·m (20 × 2,5), superando largamente o torque de 20 N·m da outra carga.",
      "Está incorreta: distâncias simétricas (d₁ = d₂) só equilibrariam a barra se as duas forças fossem rigorosamente iguais."
    ],
    "nursingApplication": "Este cálculo fundamenta o funcionamento das balanças mecânicas hospitalares de peso com cursor deslizante: pequenos pesos metálicos equilibram a massa de doentes pesados deslocando-se ao longo da escala graduada."
  },
  {
    "id": 2058,
    "topicId": 2,
    "question": "Quando a articulação do cotovelo é fletida a 90°, o ângulo de inserção do tendão do bicípite braquial no rádio é muito próximo de 90° (sen 90° = 1). O que sucede à eficiência rotacional do músculo bicípite neste ângulo?",
    "options": [
      "É nula, porque a força muscular é consumida integralmente na compressão axial da tróclea umeral.",
      "É reduzida a metade em comparação com a extensão completa do antebraço a cento e oitenta graus.",
      "É máxima, porque todo o vetor da força muscular é perpendicular ao rádio (sen 90° = 1, torque máximo).",
      "É governada exclusivamente pela resistência elástica do tendão do tríceps na face posterior do braço."
    ],
    "correctIndex": 2,
    "explanation": "Como τ = F · d · sen θ, quando θ = 90°, sen θ = 1,0 (valor máximo da função seno). Em ângulos mais abertos (ex: 170° com braço estendido) ou mais fechados (30°), sen θ é pequeno e a maior parte da força muscular atua como força compressiva articular, perdendo eficácia rotacional.",
    "distractorAnalysis": [
      "Está incorreta: a 90° a componente perpendicular é máxima (sen 90° = 1), sendo o torque rotacional o mais eficiente do arco de movimento.",
      "Está incorreta: na extensão completa o tendão fica quase paralelo ao osso (sen θ reduzido), tendo torque menor do que a 90°.",
      "Está incorreta: a eficácia mecânica do bicípite decorre da geometria da sua inserção e não da resistência do tríceps."
    ],
    "nursingApplication": "Ao testar a força motora dos membros superiores na avaliação neurológica de enfermagem (Escala de Força do Medical Research Council - MRC), o cotovelo é posicionado a 90° para testar a potência muscular no seu ponto de máxima vantagem mecânica."
  },
  {
    "id": 2059,
    "topicId": 2,
    "question": "Se um músculo esquelético aplicar uma força de 300 N num tendão inserido a 4 cm (0,04 m) do eixo da articulação com um ângulo de 30° (sen 30° = 0,5), qual é o torque rotacional produzido?",
    "options": [
      "Um torque de 12 N·m decorrente da multiplicação direta da força pela distância sem o fator angular.",
      "Um torque de 1200 N·m em virtude do erro no cálculo dos centímetros para metros no Sistema Internacional.",
      "Um torque nulo (0 N·m) visto que ângulos inferiores a quarenta e cinco graus anulam o momento muscular.",
      "Um torque de 6 N·m gerado na articulação (τ = F · d · sen θ = 300 N × 0,04 m × sen 30° = 12 × 0,5)."
    ],
    "correctIndex": 3,
    "explanation": "Calculando pelo produto trigonométrico: τ = F · d · sen(θ) = 300 N × 0,04 m × 0,5 = 12 × 0,5 = 6 N·m. Dos 300 N gerados pelo músculo, metade dissipa-se em tração articular e apenas 6 N·m realizam trabalho rotacional.",
    "distractorAnalysis": [
      "Está incorreta: 12 N·m esquece de multiplicar pelo sen 30° (0,5), correspondendo ao torque apenas se a força fosse a 90°.",
      "Está incorreta: 1200 N·m resulta de calcular a distância em centímetros (300 × 4) sem converter para metros (0,04 m).",
      "Está incorreta: sen 30° = 0,5, produzindo um torque real e mensurável de 6 N·m na articulação."
    ],
    "nursingApplication": "Este cálculo elucida o enfermeiro de reabilitação sobre por que motivo os doentes sentem mais facilidade em manter contrações musculares em determinados ângulos articulares específicos durante a fisioterapia."
  },
  {
    "id": 2060,
    "topicId": 2,
    "question": "Um binário de forças (ou casal de forças) é definido na mecânica como um par de forças que:",
    "options": [
      "Têm intensidades iguais, linhas de ação paralelas diferentes e sentidos opostos, gerando rotação pura.",
      "Têm intensidades diferentes, mesma linha de ação e mesmo sentido, produzindo aceleração linear pura.",
      "Têm intensidades iguais e atuam concorrentemente no mesmo ponto anulando todos os efeitos mecânicos.",
      "Têm sentidos perpendiculares entre si, convergindo no fulcro articular para aumentar a força normal."
    ],
    "correctIndex": 0,
    "explanation": "Num binário de forças, a resultante translacional é nula (F - F = 0), mas como não atuam na mesma reta suporte, os seus momentos somam-se: τ_binário = F · d_separação. O efeito mecânico de um binário é produzir rotação pura em torno do centro de massa.",
    "distractorAnalysis": [
      "Está incorreta: forças colineares no mesmo sentido produzem translação pura e não constituem um binário de forças rotacional.",
      "Está incorreta: forças aplicadas no mesmo ponto anulam tanto a translação como a rotação, não formando binário.",
      "Está incorreta: um binário exige forças estritamente paralelas de sentidos contrários com separação linear."
    ],
    "nursingApplication": "O movimento de rodar uma torneira de oxigénio medicinal, abrir um frasco estéril de medicamento ou desatarraxar uma tampa de cateter de três vias com o polegar e indicador é a aplicação clássica de um binário de forças em enfermagem."
  },
  {
    "id": 2061,
    "topicId": 2,
    "question": "O momento de inércia rotacional (I) de um segmento corporal em torno de um eixo articular depende da distribuição da sua massa em relação ao eixo (I = ∑ m_i · r_i²). Dobrar a distância r de uma massa ao eixo faz o seu momento de inércia aumentar:",
    "options": [
      "Aumenta exatamente 2 vezes, apresentando uma proporcionalidade linear estrita com o raio articular.",
      "Aumenta 4 vezes em torno do eixo de rotação, porque o momento de inércia varia com o quadrado da distância.",
      "Diminui para metade devido à redistribuição da massa inercial ao longo do novo perímetro espacial.",
      "Permanece constante porque o momento de inércia depende exclusivamente do valor escalar da massa."
    ],
    "correctIndex": 1,
    "explanation": "O momento de inércia depende quadraticamente da distância ao eixo de rotação: I ∝ r². Se a distância duplica (2r), o momento de inércia quadruplica: (2r)² = 4r². Quanto mais afastada estiver a massa do fulcro, mais difícil é acelerar ou travar a rotação.",
    "distractorAnalysis": [
      "Está incorreta: a relação é quadrática (I = m · r²): duplicar o raio (2r) multiplica o momento de inércia por 4 (2² = 4) e não por 2.",
      "Está incorreta: o afastamento da massa em relação ao eixo aumenta a inércia rotacional e nunca a reduz.",
      "Está incorreta: a distribuição geométrica da massa em relação ao eixo é o fator determinante do momento de inércia."
    ],
    "nursingApplication": "Ao mobilizar a perna estendida de um doente pesado, o enfermeiro flete o joelho do doente: flexionar a perna aproxima a massa do pé do eixo da anca (reduz r), diminuindo dramaticamente o momento de inércia e tornando a manobra muito mais leve e segura."
  },
  {
    "id": 2062,
    "topicId": 2,
    "question": "Numa pinça hemostática tipo Kocher de 16 cm, o eixo central (parafuso) atua como fulcro. Se o enfermeiro aplicar 20 N nas argolas a 12 cm do eixo, qual é o torque transmitido às mandíbulas de preensão?",
    "options": [
      "Um torque de 240 N·m decorrente do cálculo com o comprimento expresso em centímetros sem conversão ao SI.",
      "Um torque de 1,66 N·m resultante da divisão simples da força manual pela distância geométrica ao parafuso.",
      "Um torque de 2,4 N·m na haste de fecho da pinça hemostática (τ = F · d = 20 N × 0,12 m = 2,4 N·m de momento torsor).",
      "Um torque nulo (0 N·m) visto que as pinças cirúrgicas hemostáticas operam em equilíbrio puramente estático."
    ],
    "correctIndex": 2,
    "explanation": "O torque de potência gerado pela mão do enfermeiro é o produto da força aplicada pelo braço de potência em metros: τ = 20 N × 0,12 m = 2,4 N·m. Esse mesmo torque é transmitido às mandíbulas que prendem o vaso sanguíneo.",
    "distractorAnalysis": [
      "Está incorreta: 240 N·m decorre de esquecer a conversão de 12 cm para 0,12 m, resultando num erro de cem vezes.",
      "Está incorreta: o torque é o produto da força pela distância (20 × 0,12) e não a divisão da força pelo comprimento.",
      "Está incorreta: o aperto da pinça envolve a aplicação de torque ativo pelas hastes até ao engate da cremalheira."
    ],
    "nursingApplication": "O desenho ergonómico das pinças cirúrgicas hemostáticas assegura que um torque de 2,4 N·m se concentra numa ponta de lâmina muito curta (ex: 3 cm), gerando forças oclusivas elevadas que esmagam o vaso sangrante e estabelecem hemostase imediata."
  },
  {
    "id": 2063,
    "topicId": 2,
    "question": "A articulação têmporo-mandibular (ATM) e a mastigação humana funcionam como uma alavanca. Quando mordemos com os dentes molares posteriores (mais próximos da ATM) em vez dos incisivos anteriores, a força mastigatória de esmagamento é:",
    "options": [
      "Muito maior nos dentes incisivos, porque a distância ao fulcro articular da mandíbula é máxima.",
      "Rigorosamente igual em todos os dentes da arcada dentária em virtude da rigidez óssea mandibular.",
      "Inversamente proporcional à massa do músculo masséter, atingindo o valor mínimo junto à sínfise mentoniana.",
      "Muito maior nos molares, porque o braço de resistência d_R é menor, aumentando a força de esmagamento."
    ],
    "correctIndex": 3,
    "explanation": "A mandíbula funciona como alavanca de 3.ª classe com o fulcro na ATM. Como os molares estão mais perto da ATM do que os incisivos (menor braço resistente d_R), a força resistente que a mandíbula consegue vencer é substancialmente superior (F_R = F_P · d_P / d_R).",
    "distractorAnalysis": [
      "Está incorreta: nos incisivos o braço de resistência d_R é maior, o que reduz a força mecânica de corte (F_R = τ / d_R).",
      "Está incorreta: a força exercida varia inversamente com a distância ao fulcro para o mesmo torque do masséter.",
      "Está incorreta: a força mastigatória é máxima junto aos dentes molares posteriores mais próximos do fulcro da ATM."
    ],
    "nursingApplication": "Em doentes idosos desdentados parciais sem molares posteriores, o enfermeiro adapta a consistência da dieta (dieta triturada ou pastosa), pois os dentes anteriores não geram torque mastigatório suficiente para desintegrar carnes e fibras duras, prevenindo engasgamentos e asfixia por bolo alimentar."
  },
  {
    "id": 2064,
    "topicId": 2,
    "question": "Quando uma força tem uma linha de ação que forma um ângulo de 180° com o braço de alavanca (força puxa na direção oposta ao fulcro, em linha reta), o torque produzido é:",
    "options": [
      "Exatamente 0 N·m de torque, visto que sen(180°) = 0 e a força atua em alinhamento axial com a alavanca.",
      "O torque máximo possível porque a força se propaga longitudinalmente ao longo de toda a haste rígida.",
      "Um torque negativo constante de módulo igual à força multiplicada pelo comprimento total do braço.",
      "Um torque que varia de forma diretamente proporcional à velocidade angular da articulação sinovial."
    ],
    "correctIndex": 0,
    "explanation": "Como sen(180°) = 0, a fórmula τ = F · d · sen(180°) resulta rigorosamente em zero. A força puxa axialmente a haste para fora do eixo, provocando apenas tração mecânica do pino sem qualquer rotação.",
    "distractorAnalysis": [
      "Está incorreta: forças com ângulo de 180° são colineares com o braço e produzem apenas tração pura, com torque nulo.",
      "Está incorreta: o torque depende da componente perpendicular (sen θ), sendo nulo quando a força tem direção axial a 180°.",
      "Está incorreta: o torque independe da velocidade angular e anula-se estritamente pela geometria do ângulo de 180°."
    ],
    "nursingApplication": "Ao tracionar um membro em alinhamento ortopédico estrito (ângulo de 180°), o enfermeiro sabe que a força de tração atua puramente no sentido longitudinal sem induzir desvios rotacionais indesejados no foco da fratura."
  },
  {
    "id": 2065,
    "topicId": 2,
    "question": "O 'braço de momento' (ou braço da força, d_perpendicular) é geometricamente definido como:",
    "options": [
      "O comprimento longitudinal total do osso medido da epífise proximal até à epífise distal articular.",
      "A distância perpendicular mais curta medida entre o eixo de rotação e a linha de ação da força aplicada.",
      "A distância em linha reta entre o ponto de inserção tendinosa e o centro de massa do segmento corporal.",
      "O raio de curvatura da superfície cartilagínea articular medido em decúbito dorsal durante o repouso."
    ],
    "correctIndex": 1,
    "explanation": "O braço de momento d_perp = d · sen(θ) é o segmento perpendicular baixado desde o fulcro até à reta suporte da força. Permite calcular o torque de forma simplificada: τ = F · d_perp.",
    "distractorAnalysis": [
      "Está incorreta: o comprimento anatómico do osso não coincide com o braço de momento perpendicular da força (d · sen θ).",
      "Está incorreta: o braço de momento é medido em relação à linha de ação da força e não ao centro de massa.",
      "Está incorreta: o raio de curvatura cartilagíneo é uma dimensão articular local e não o braço de alavanca da força."
    ],
    "nursingApplication": "A biomecânica moderna utiliza o conceito de braço de momento para modelar cirurgias ortopédicas de transferência tendinosa, permitindo ao enfermeiro especialista antecipar o ganho funcional motor do doente no pós-operatório."
  },
  {
    "id": 2066,
    "topicId": 2,
    "question": "A Vantagem Mecânica (VM) de uma alavanca é quantificada pela razão entre:",
    "options": [
      "A força motora muscular e o coeficiente de atrito cinético desenvolvido entre as superfícies ósseas.",
      "O comprimento do membro anatómico e a aceleração gravítica local expressa em metros por segundo.",
      "O braço de potência e o braço de resistência (VM = d_P / d_R = F_R / F_P) em equilíbrio de alavanca.",
      "A energia mecânica elástica armazenada no tendão e a potência metabólica consumida em repouso."
    ],
    "correctIndex": 2,
    "explanation": "A vantagem mecânica ideal exprime o fator pelo qual uma máquina simples multiplica a força aplicada: VM = d_P / d_R. Se d_P > d_R, a VM > 1 (ganho de força); se d_P < d_R, a VM < 1 (desvantagem de força, mas ganho de velocidade e amplitude angular).",
    "distractorAnalysis": [
      "Está incorreta: a vantagem mecânica relaciona grandezas de alavancas e independe do coeficiente de atrito articular.",
      "Está incorreta: comprimento e aceleração gravitacional não traduzem a definição estática de vantagem mecânica.",
      "Está incorreta: energia e potência metabólica pertencem à termodinâmica e não à vantagem mecânica estática."
    ],
    "nursingApplication": "O conhecimento da vantagem mecânica permite ao enfermeiro selecionar alicates e tesouras com cabos compridos e mandíbulas curtas quando precisa de cortar fios cirúrgicos ou talas duras com mínimo esforço da mão."
  },
  {
    "id": 2067,
    "topicId": 2,
    "question": "Quando uma alavanca possui Vantagem Mecânica menor do que 1 (VM < 1), como sucede na maioria das articulações do corpo humano, que benefício biomecânico compensatório é obtido?",
    "options": [
      "Multiplicação da força muscular, permitindo erguer cargas muito maiores do que a força desenvolvida.",
      "Anulação das forças de compressão que atuam na cartilagem da articulação durante o movimento móvel.",
      "Redução a metade do consumo metabólico de adenosina trifosfato (ATP) nas fibras musculares ativas.",
      "Grande ganho em amplitude de movimento e velocidade na extremidade do membro à custa de maior força."
    ],
    "correctIndex": 3,
    "explanation": "Pelo princípio da conservação da energia e do trabalho mecânico (W = F · d), se o braço de potência é menor que o de resistência (d_P < d_R), o músculo tem de gerar forças muito superiores ao peso sustentado (VM < 1), mas ganha em amplitude geométrica: uma pequena contração de 1 cm do bicípite faz a mão deslocar-se 8 a 10 cm com alta velocidade.",
    "distractorAnalysis": [
      "Está incorreta: VM < 1 exige maior força muscular do que a carga (desvantagem de força), proporcionando ganho de velocidade.",
      "Está incorreta: a elevada força muscular exigida por VM < 1 aumenta a força de reação e compressão articular.",
      "Está incorreta: a desvantagem de força não reduz o gasto metabólico de ATP, exigindo maior recrutamento motor."
    ],
    "nursingApplication": "Compreender que o corpo humano é otimizado para velocidade e amplitude (e não para força bruta) explica por que razão os tendões musculares suportam tensões internas de centenas de Newtons para segurar pesos modestos na mão do doente."
  },
  {
    "id": 2068,
    "topicId": 2,
    "question": "Se uma ferramenta cirúrgica tiver braço de potência de 20 cm e braço de resistência de 4 cm, qual é a sua Vantagem Mecânica teórica?",
    "options": [
      "VM = 5, significando que o instrumento multiplica a força manual aplicada pelo operador por cinco vezes.",
      "VM = 0,2, indicando que a força útil exercida na extremidade é cinco vezes menor do que a força manual.",
      "VM = 1, mantendo rigorosamente inalterada a magnitude da força aplicada entre as pegas e as pontas.",
      "VM = 80, resultante do produto da distância de potência pela distância de resistência no instrumento."
    ],
    "correctIndex": 0,
    "explanation": "Calculando a vantagem mecânica: VM = d_P / d_R = 20 cm / 4 cm = 5. Isto significa que uma força manual de 10 N aplicada pelo operador gera uma força de corte ou compressão de 50 N na extremidade resistente.",
    "distractorAnalysis": [
      "Está incorreta: VM = d_P / d_R = 20 cm / 4 cm = 5 e não 0,2 (que resultaria de inverter erradamente a fração).",
      "Está incorreta: VM = 1 exigiria braços de igual comprimento (d_P = d_R = 20 cm).",
      "Está incorreta: a vantagem mecânica é uma razão pura (divisão) e não o produto dos dois comprimentos (20 × 4)."
    ],
    "nursingApplication": "Em procedimentos de emergência para remoção de anéis encravados em dedos edemaciados, os corta-anéis com VM entre 5 e 8 permitem ao enfermeiro cortar aros de ouro ou titânio com segurança sem lesionar o dedo isquemiado."
  },
  {
    "id": 2069,
    "topicId": 2,
    "question": "Um instrumento de alavanca com VM = 1 (Vantagem Mecânica unitária) caracteriza-se por:",
    "options": [
      "A multiplicação da força motora por um fator infinito que anula o esforço mecânico do profissional.",
      "O braço de potência rigorosamente igual ao braço de resistência (d_P = d_R), alterando apenas a direção.",
      "A impossibilidade física de transmitir qualquer trabalho mecânico entre as suas duas extremidades.",
      "Uma desvantagem mecânica severa que exige dez vezes mais força para superar uma carga resistente."
    ],
    "correctIndex": 1,
    "explanation": "Quando d_P = d_R, a VM = 1: a força potente tem exatamente o mesmo módulo da força resistente (F_P = F_R). A sua utilidade mecânica reside em transferir a força para um ponto anatómico distante ou inverter o sentido de atuação.",
    "distractorAnalysis": [
      "Está incorreta: vantagem mecânica infinita é uma impossibilidade física em sistemas mecânicos reais.",
      "Está incorreta: alavancas com VM = 1 transmitem o trabalho mecânico integralmente (ex: tesoura simétrica, balança).",
      "Está incorreta: desvantagem de força corresponde a VM < 1 e não a VM = 1 (onde a força motora iguala a resistente)."
    ],
    "nursingApplication": "Determinadas pinças de preensão direta e roldanas fixas simples possuem VM = 1: facilitam o acesso visual do cirurgião e do enfermeiro instrumentista em cavidades profundas mantendo a precisão tátil 1:1."
  },
  {
    "id": 2070,
    "topicId": 2,
    "question": "A Lei da Conservação do Trabalho Mecânico aplicada às alavancas ideais (sem atrito) dita que o produto da força pelo deslocamento é constante (F_P · Δs_P = F_R · Δs_R). Isto implica que:",
    "options": [
      "O ganho em força permite aumentar simultaneamente a amplitude e velocidade de deslocamento da carga útil.",
      "O trabalho mecânico útil de saída é sempre dez vezes superior ao trabalho mecânico de entrada no sistema.",
      "O que se ganha em força motora perde-se obrigatoriamente em deslocamento da carga (W = F_P · d_P = F_R · d_R).",
      "A energia mecânica total dissipa-se espontaneamente sob a forma de deformação puramente elástica e calor de atrito."
    ],
    "correctIndex": 2,
    "explanation": "As máquinas simples não criam energia nem trabalho mecânico (W_entrada = W_saída na ausência de perdas). Uma alavanca que multiplica a força por 4 exige que a extremidade potente se desloque 4 vezes mais longe do que a carga resistente.",
    "distractorAnalysis": [
      "Está incorreta: pelo princípio da conservação da energia é impossível multiplicar força e velocidade simultaneamente.",
      "Está incorreta: nenhuma alavanca passiva pode gerar mais trabalho do que a energia que nela é introduzida.",
      "Está incorreta: em mecanismos macroscópicos a energia dissipada degrada-se em calor por atrito e não em luz."
    ],
    "nursingApplication": "Ao operar camas de manivela ou elevadores hidráulicos de doentes, o enfermeiro sabe que bombear várias vezes a alavanca com percursos amplos permite erguer doentes pesados com esforço muscular suave e controlado."
  },
  {
    "id": 2071,
    "topicId": 2,
    "question": "A articulação atlanto-occipital (entre o crânio e a 1.ª vértebra cervical C1 - Atlas) é o exemplo anatómico clássico de:",
    "options": [
      "Alavanca de 2.ª Classe (Inter-resistente), onde o peso da cabeça se situa entre a coluna e os músculos da nuca.",
      "Alavanca de 3.ª Classe (Interpotente), com os músculos da nuca inseridos à frente dos dentes incisivos superiores.",
      "Sistema de polia móvel pura sem ponto de apoio articular no topo da primeira vértebra cervical.",
      "Alavanca de 1.ª Classe (Interfixa), com o ponto de apoio articular situado entre a potência e a resistência."
    ],
    "correctIndex": 3,
    "explanation": "Na alavanca de 1.ª classe (interfixa), o fulcro F localiza-se entre a potência P e a resistência R (P - F - R). Na cabeça, os côndilos occipitais funcionam como fulcro; o peso da cabeça anterior tenta tombar a cabeça para a frente e os músculos da nuca (esplénio e trapézio) aplicam a força para trás mantendo o equilíbrio.",
    "distractorAnalysis": [
      "Está incorreta: a resistência (peso do crânio) fica à frente dos côndilos e a potência muscular atrás (interfixa).",
      "Está incorreta: os músculos extensores da nuca inserem-se no occipital posteriormente ao fulcro dos côndilos da C1.",
      "Está incorreta: a articulação atlanto-occipital é uma junta sinovial clássica que atua como fulcro mecânico."
    ],
    "nursingApplication": "Em doentes sob anestesia geral ou coma neurológico com perda do tónus muscular da nuca, a cabeça tomba imediatamente para a frente sob a gravidade, colapsando a via aérea; o enfermeiro realiza a manobra de extensão da cabeça (chin-lift) para abrir a via aérea."
  },
  {
    "id": 2072,
    "topicId": 2,
    "question": "Nas tesouras cirúrgicas de dissecação (tipo Metzenbaum ou Mayo), a disposição mecânica do parafuso central, das pegas dos dedos e das lâminas afiadas classifica-as como:",
    "options": [
      "Alavanca dupla de 1.ª Classe (Interfixa), com o parafuso central a funcionar como fulcro entre as pegas e as pontas.",
      "Alavanca de 2.ª Classe (Inter-resistente), com a gaze cortada situada entre os dedos do cirurgião e o fulcro.",
      "Alavanca de 3.ª Classe (Interpotente), com as lâminas soldadas na extremidade anterior sem ponto de giro.",
      "Dispositivo hidráulico de corte por pressão estática sem componente de momentos de rotação."
    ],
    "correctIndex": 0,
    "explanation": "Uma tesoura é composta por duas alavancas de 1.ª classe opostas unidas no eixo central (fulcro). A força dos dedos nas argolas (potência) fecha as lâminas sobre o tecido biológico (resistência), concentrando a pressão no ponto de corte.",
    "distractorAnalysis": [
      "Está incorreta: o parafuso intermediário fica entre os anéis (potência) e as lâminas (resistência), definindo 1.ª classe.",
      "Está incorreta: tesouras não têm lâminas soldadas na ponta, cruzando-se em torno do parafuso central articulado.",
      "Está incorreta: as tesouras cirúrgicas são alavancas mecânicas manuais clássicas sem circuitos hidráulicos."
    ],
    "nursingApplication": "O enfermeiro instrumentista empunha a tesoura cirúrgica inserindo apenas as pontas das falanges distais do polegar e do anelar nas argolas, usando o indicador como guia de estabilização do fulcro para máxima precisão de corte sem tremores."
  },
  {
    "id": 2073,
    "topicId": 2,
    "question": "Na alavanca de 1.ª classe, dependendo da posição do fulcro (ponto de apoio), a Vantagem Mecânica pode ser:",
    "options": [
      "É obrigatoriamente sempre superior a 1 (VM > 1) em qualquer montagem mecânica de instrumentos interfixos.",
      "Pode ser maior que 1, igual a 1 ou menor que 1, consoante a posição relativa do fulcro entre as duas forças.",
      "É obrigatoriamente sempre inferior a 1 (VM < 1), provocando sempre perda de força e ganho de amplitude.",
      "É estritamente constante e igual a 0,5 devido à simetria axial de todos os pontos de apoio interfixos."
    ],
    "correctIndex": 1,
    "explanation": "Como o fulcro está no meio, a sua posição relativa pode variar livremente: se d_P > d_R (como num alicate), VM > 1; se d_P = d_R (como numa balança clássica), VM = 1; se d_P < d_R (como numa tesoura de poda com lâminas longas), VM < 1. É a única classe de alavancas com esta versatilidade completa.",
    "distractorAnalysis": [
      "Está incorreta: se o fulcro estiver mais próximo da resistência (d_P > d_R), VM > 1; se estiver no meio, VM = 1; se d_P < d_R, VM < 1.",
      "Está incorreta: alavancas de 1.ª classe com braço de potência longo multiplicam força com VM > 1 (ex: pé-de-cabra).",
      "Está incorreta: a vantagem mecânica depende da localização do fulcro, não tendo um valor universal fixado em 0,5."
    ],
    "nursingApplication": "Compreender esta versatilidade permite ao enfermeiro escolher o instrumento certo: alicates cirúrgicos com fulcro colado às mandíbulas (VM > 5) para cortar pinos metálicos e tesouras de sutura balanceadas para manobras delicadas."
  },
  {
    "id": 2074,
    "topicId": 2,
    "question": "A flexão plantar do tornozelo quando uma pessoa se eleva na ponta dos pés (ao apoiar-se nas cabeças dos metatarsos) é o exemplo clássico de:",
    "options": [
      "Alavanca de 1.ª Classe (Interfixa), com a tíbia a funcionar como fulcro articular central entre os dedos e o calcanhar.",
      "Alavanca de 3.ª Classe (Interpotente), com a inserção tendinosa na parte anterior das cabeças dos metatarsos.",
      "Alavanca de 2.ª Classe (Inter-resistente), com o peso transmitido pela tíbia situado entre os metatarsos e o calcâneo.",
      "Sistema de amortecimento puramente viscoelástico sem momentos de rotação em torno dos eixos do pé."
    ],
    "correctIndex": 2,
    "explanation": "Na alavanca de 2.ª classe, a resistência R localiza-se entre o ponto de apoio F e a força potente P (F - R - P). Na ponta dos pés, o fulcro está no solo sob os metatarsos, o peso de todo o corpo desce pelo tornozelo na articulação tibiotársica (ao meio) e o tendão de Aquiles traciona a tuberosidade do calcâneo na extremidade posterior.",
    "distractorAnalysis": [
      "Está incorreta: o fulcro com o solo está nas cabeças dos metatarsos, ficando a carga tibial entre o fulcro e o tendão de Aquiles.",
      "Está incorreta: o tendão de Aquiles insere-se na tuberosidade posterior do calcâneo e não nos metatarsos anteriores.",
      "Está incorreta: o pé atua como uma viga biomecânica com momentos de rotação bem definidos sobre o solo."
    ],
    "nursingApplication": "Como a alavanca de 2.ª classe tem SEMPRE VM > 1 (d_P > d_R), o músculo da barriga da perna (gémeos e sóleo) consegue erguer facilmente o peso corporal total de um doente de 80 kg com modesta tensão muscular, sendo essencial na reabilitação da marcha pós-fratura."
  },
  {
    "id": 2075,
    "topicId": 2,
    "question": "A característica biomecânica invariante de TODAS as Alavancas de 2.ª Classe (Inter-resistentes) é que a sua Vantagem Mecânica é:",
    "options": [
      "A Vantagem Mecânica é sempre inferior a 1 (VM < 1), exigindo grande força muscular para mover cargas leves.",
      "A Vantagem Mecânica é nula (VM = 0), sendo impossível obter equilíbrio mecânico de rotação com cargas pesadas.",
      "A Vantagem Mecânica inverte o seu sinal algébrico periodicamente a cada ciclo de mobilização articular.",
      "A Vantagem Mecânica é sempre superior a 1 (VM > 1), porque o braço de potência é sempre maior que o de resistência."
    ],
    "correctIndex": 3,
    "explanation": "Como a resistência está entre o fulcro e a potência, o braço de potência estende-se desde o fulcro até à extremidade oposta, sendo obrigatoriamente mais longo do que o braço de resistência (d_P > d_R). Logo, a razão VM = d_P / d_R é estritamente superior a 1 em qualquer circunstância física.",
    "distractorAnalysis": [
      "Está incorreta: na 2.ª classe a resistência está no meio, logo d_P é a distância total ao fulcro e supera d_R (VM > 1).",
      "Está incorreta: VM < 1 é a propriedade exclusiva das alavancas de 3.ª classe (interpotentes).",
      "Está incorreta: as alavancas de 2.ª classe são sistemas de alta eficiência multiplicadora de força estática."
    ],
    "nursingApplication": "Dispositivos hospitalares concebidos como alavancas de 2.ª classe (como elevadores manuais de transferência de doentes ou carrinhos de transporte de garrafas de oxigénio) permitem ao enfermeiro manusear cargas pesadas com segurança sem sobrecarregar a musculatura."
  },
  {
    "id": 2076,
    "topicId": 2,
    "question": "A flexão do cotovelo pelo músculo bicípite braquial ao segurar um objeto na mão é o exemplo mais comum no corpo humano de:",
    "options": [
      "Alavanca de 3.ª Classe (Interpotente), com a potência aplicada entre a articulação do cotovelo e a mão de suporte.",
      "Alavanca de 1.ª Classe (Interfixa), com a tróclea umeral localizada no centro geométrico entre o punho e o ombro.",
      "Alavanca de 2.ª Classe (Inter-resistente), onde a carga resistente na mão fica posicionada entre o fulcro e o bicípite.",
      "Sistema de roldana móvel pura que divide a força resistente por dois sem necessidade de rotação articular sinovial."
    ],
    "correctIndex": 0,
    "explanation": "Na alavanca de 3.ª classe, a potência P está situada entre o fulcro F e a resistência R (F - P - R). O cotovelo é o eixo (F), o tendão do bicípite insere-se a apenas 3-4 cm do cotovelo (P), e a carga está na mão a cerca de 30-35 cm de distância (R).",
    "distractorAnalysis": [
      "Está incorreta: na flexão do cotovelo o fulcro é a articulação proximal e a potência tendinosa atua distalmente ao fulcro.",
      "Está incorreta: a resistência da mão fica na extremidade distal e a força muscular atua no meio (interpotente).",
      "Está incorreta: as articulações esqueléticas operam como alavancas anatómicas rígidas e não roldanas móveis suspensas."
    ],
    "nursingApplication": "Como d_P << d_R (ex: 4 cm vs 35 cm), a VM é de apenas ~0,11: para segurar um medicamento de 2 kg na mão (~20 N), o bicípite braquial tem de produzir uma força de mais de 175 N no tendão! O enfermeiro compreende por que razão manter cargas pesadas com o antebraço fletido causa fadiga muscular tão rápida."
  },
  {
    "id": 2077,
    "topicId": 2,
    "question": "As pinças anatómicas e pinças de dissecação cirúrgica sem travão utilizadas em enfermagem (tipo pinça com dentes de rato ou pinça Adson) são classificadas como:",
    "options": [
      "Alavancas de 1.ª Classe (Interfixas), com um eixo articulado intermediário cruzado idêntico ao de uma tesoura cirúrgica.",
      "Alavancas de 3.ª Classe (Interpotentes), com o fulcro na extremidade unida e os dedos a exercer força no terço médio.",
      "Alavancas de 2.ª Classe (Inter-resistentes), com o tecido biológico apreendido entre as pegas digitais e o ponto de mola.",
      "Cunhas mecânicas simples que atuam por atrito estático puro sem qualquer componente de momento de rotação angular."
    ],
    "correctIndex": 1,
    "explanation": "Numa pinça de dissecação, a mola soldada no topo é o ponto de apoio (fulcro F). Os dedos do enfermeiro comprimem as hastes no meio (potência P), e as pontas da pinça agarram a compressa ou o tecido biológico na extremidade oposta (resistência R).",
    "distractorAnalysis": [
      "Está incorreta: as pinças de dissecação convencionais não têm eixo articulado intermediário; o fulcro é a extremidade unida.",
      "Está incorreta: a carga fica na ponta livre distal e os dedos atuam no meio das hastes elásticas flexíveis.",
      "Está incorreta: as pinças funcionam como vigas elásticas fletidas em alavanca de 3.ª classe com sensibilidade tátil fina."
    ],
    "nursingApplication": "A vantagem mecânica menor que 1 das pinças de dissecação proporciona ao enfermeiro sensibilidade tátil tátil e precisão milimétrica durante o manuseio asséptico de tecidos em feridas complexas sem esmagar as estruturas celulares delicadas."
  },
  {
    "id": 2078,
    "topicId": 2,
    "question": "Qual é a classe de alavancas MAIS ABUNDANTE no sistema musculoesquelético do corpo humano?",
    "options": [
      "Alavancas de 2.ª Classe (Inter-resistentes), priorizando a multiplicação da força em todos os gestos corporais diários.",
      "Alavancas de 1.ª Classe (Interfixas), distribuindo simetricamente as forças musculares em redor de eixos esqueléticos centrais.",
      "Alavancas de 3.ª Classe (Interpotentes), privilegiando a velocidade de movimento e amplitude articular das extremidades.",
      "Sistemas mecânicos de plano inclinado puro que dispensam a existência de eixos articulares de rotação anatómicos."
    ],
    "correctIndex": 2,
    "explanation": "A evolução biológica favoreceu a velocidade e a versatilidade: quase todas as articulações dos membros superiores e inferiores (cotovelo, joelho, ombro, anca, dedos) funcionam como alavancas de 3.ª classe, onde os tendões se inserem muito próximos das articulações para permitir movimentos amplos e ágeis com pequenas excursões musculares.",
    "distractorAnalysis": [
      "Está incorreta: as alavancas de 2.ª classe são raras no corpo humano, restringindo-se essencialmente à flexão plantar do tornozelo.",
      "Está incorreta: as alavancas de 1.ª classe constituem uma minoria no esqueleto (ex: articulação atlanto-occipital, extensão do cotovelo).",
      "Está incorreta: a esmagadora maioria das articulações sinoviais móveis opera sob o princípio de alavancas de 3.ª classe."
    ],
    "nursingApplication": "O predomínio de alavancas de 3.ª classe demonstra ao enfermeiro que o sistema musculoesquelético humano não foi projetado para atuar como guindaste de carga estática: transferências manuais repetidas de doentes pesados sem auxílio mecânico sobrecarregam os tendões, fundamentando o uso de tecnologias de apoio."
  },
  {
    "id": 2079,
    "topicId": 2,
    "question": "Ao utilizar um alicate corta-unhas cirúrgico de podologia para cortar unhas espessadas (onicogrifose) de doentes geriátricos, a elevada força de corte é conseguida através de:",
    "options": [
      "Alavanca de 3.ª classe pura que reduz a força aplicada na lâmina para evitar a penetração excessiva no leito ungueal.",
      "Dispositivo pneumático passivo que converte a humidade da lâmina ungueal em pressão hidrostática de separação mecânica.",
      "Alavanca de 1.ª classe simétrica com braços rigorosamente iguais que apenas inverte o sentido da força motora manual.",
      "Combinação de alavancas com grande Vantagem Mecânica (d_P >> d_R) que multiplica a força manual sobre a lâmina de corte."
    ],
    "correctIndex": 3,
    "explanation": "O alicate corta-unhas maximiza a razão d_P / d_R: cabos longos operados pela mão geram um torque elevado que é transferido para lâminas muito curtas, multiplicando a força muscular manual em dezenas de vezes e gerando tensões de corte superiores à resistência da queratina hipertrofiada.",
    "distractorAnalysis": [
      "Está incorreta: alicates de podologia para unhas espessadas requerem grande multiplicação de força (VM >> 1) e não VM < 1.",
      "Está incorreta: o alicate é um instrumento puramente mecânico de alavancas metálicas sem mecanismos pneumáticos ou hidrostáticos.",
      "Está incorreta: alavancas simétricas teriam VM = 1, sendo insuficientes para cortar placas de queratina hipertrófica."
    ],
    "nursingApplication": "O enfermeiro no pé diabético e podologia geriátrica utiliza alicates com mola dupla e alta vantagem mecânica para cortar unhas patológicas sem aplicar força excessiva, prevenindo o escorregamento do instrumento e feridas acidentais na pele periungueal frágil."
  },
  {
    "id": 2080,
    "topicId": 2,
    "question": "Um doente com paralisia do músculo tríceps braquial tem dificuldade em estender o cotovelo contra a resistência. A extensão do cotovelo pelo tríceps em torno do olécrano funciona biomecanicamente como uma alavanca de:",
    "options": [
      "Alavanca de 1.ª Classe (Interfixa), com o fulcro na tróclea umeral situado entre o olecrânio e a mão que sustenta a carga.",
      "Alavanca de 2.ª Classe (Inter-resistente), com a inserção tendinosa do tríceps a atuar distalmente à articulação do punho.",
      "Alavanca de 3.ª Classe (Interpotente), com o tendão do tríceps inserido entre a cartilagem do cotovelo e a ponta dos dedos.",
      "Sistema mecânico sem alavanca que opera exclusivamente por compressão hidrostática da bursa sinovial olecraniana."
    ],
    "correctIndex": 0,
    "explanation": "Na extensão do cotovelo, a tróclea do úmero é o fulcro no meio: o tendão do tríceps puxa o olécrano para trás/cima (potência) e a resistência (antebraço) move-se para a frente/baixo, configurando uma alavanca de 1.ª classe clássica.",
    "distractorAnalysis": [
      "Está incorreta: o olecrânio situa-se posteriormente ao fulcro umeral, ficando a articulação entre o tendão e o antebraço (interfixa).",
      "Está incorreta: o tríceps não se insere no punho, terminando na tuberosidade posterior do olecrânio da ulna.",
      "Está incorreta: a extensão do cotovelo contra resistência opera por tração do olecrânio numa alavanca de 1.ª classe."
    ],
    "nursingApplication": "Avaliar o reflexo tricipital e a força extensora do cotovelo permite ao enfermeiro testar a integridade das raízes nervosas cervicais C7 e C8 e do nervo radial no exame neurológico de doentes com traumatismo vertebro-medular."
  },
  {
    "id": 2081,
    "topicId": 2,
    "question": "Um enfermeiro usa uma pinça hemostática de Pean para clampar uma tubuladura de soro espessa. A distância do eixo central (parafuso) às argolas onde a mão aperta é de 10 cm e a distância do eixo à ponta ativa é de 2 cm. Qual é a força de aperto transmitida à tubuladura se o enfermeiro aplicar 30 N nas argolas?",
    "options": [
      "Uma força de aperto de 6 N decorrente da divisão errada da força aplicada pela vantagem mecânica teórica (30 / 5).",
      "Uma força de aperto de 150 N nas pontas ativas da pinça (VM = d_P / d_R = 10 / 2 = 5; F_R = 30 N × 5 = 150 N).",
      "Uma força de aperto de 30 N mantendo estritamente o mesmo módulo da força exercida pelos dedos do enfermeiro.",
      "Uma força de aperto de 300 N resultante do produto direto do comprimento total pelo valor da força manual exercida."
    ],
    "correctIndex": 1,
    "explanation": "Na alavanca de 1.ª classe em equilíbrio: F_P · d_P = F_R · d_R ⇒ F_R = F_P · (d_P / d_R) = 30 N × (10 cm / 2 cm) = 30 × 5 = 150 N. A força é multiplicada por 5 nas pontas ativas.",
    "distractorAnalysis": [
      "Está incorreta: 6 N corresponderia a uma desvantagem de força (VM = 0,2), o que não ocorre numa alavanca com d_P = 10 e d_R = 2 cm.",
      "Está incorreta: a pinça hemostática de Pean tem braço de potência maior que o braço de resistência, multiplicando a força (VM = 5).",
      "Está incorreta: 300 N decorre de multiplicar 30 N por 10 cm sem dividir pelo braço de resistência de 2 cm nas mandíbulas."
    ],
    "nursingApplication": "A amplificação de força para 150 N oclui completamente o lúmen da tubuladura plástica espessa de perfusão, permitindo interromper imediatamente fluxos indesejados sem fuga de medicamentos."
  },
  {
    "id": 2082,
    "topicId": 2,
    "question": "Ao utilizar uma alavanca de 1.ª classe para remover um penso rígido aderido, se o ponto de apoio for deslocado para mais perto da ponta ativa (diminuindo o braço resistente d_R), o que acontece à força necessária nas mãos do enfermeiro?",
    "options": [
      "A força necessária aumenta exponencialmente, porque braços mais compridos dissipam mais energia mecânica em atrito interno.",
      "A força necessária mantém-se inalterada, visto que o torque de descolamento independe da distância ao ponto de apoio.",
      "A força necessária diminui proporcionalmente, porque a Vantagem Mecânica aumenta com o comprimento da haste de esforço.",
      "O momento de força torsor anula-se espontaneamente devido ao alongamento elástico da estrutura metálica da espátula."
    ],
    "correctIndex": 2,
    "explanation": "Como F_P = F_R · (d_R / d_P), diminuir d_R faz diminuir diretamente a força motora F_P necessária para vencer a mesma resistência. Aproximar o fulcro da carga multiplica a vantagem mecânica.",
    "distractorAnalysis": [
      "Está incorreta: aumentar o braço de potência d_P aumenta o torque para a mesma força ou reduz a força exigida (F_P = τ / d_P).",
      "Está incorreta: a distância ao fulcro governa linearmente o momento da força (τ = F · d), não sendo independente do braço.",
      "Está incorreta: instrumentos metálicos rígidos transmitem torque de forma eficiente sem anulação do momento mecânico."
    ],
    "nursingApplication": "Ao posicionar espátulas ou instrumentos de alívio mecânico, aproximar o ponto de apoio da zona de maior resistência poupa as mãos do enfermeiro e proporciona maior controlo e suavidade."
  },
  {
    "id": 2083,
    "topicId": 2,
    "question": "Qual das seguintes ações biomecânicas do corpo humano NÃO é um exemplo de alavanca de 1.ª classe?",
    "options": [
      "A extensão do cotovelo pelo músculo tríceps braquial ao empurrar uma superfície, que opera como alavanca interfixa.",
      "A extensão da cabeça pelos músculos esplénios da nuca na articulação atlanto-occipital contra o peso anterior da face.",
      "A oscilação do pé na articulação do tornozelo quando o membro inferior está suspenso no ar livre sem apoio no solo.",
      "A flexão do cotovelo pelo músculo bicípite braquial ao erguer um copo, que é um exemplo clássico de 3.ª classe."
    ],
    "correctIndex": 3,
    "explanation": "A flexão do cotovelo pelo bicípite é o exemplo clássico de alavanca de 3.ª classe (potência no meio entre o cotovelo e a mão). As outras opções são exemplos legítimos de alavancas de 1.ª classe (fulcro no meio).",
    "distractorAnalysis": [
      "Está incorreta: a extensão do cotovelo pelo tríceps é uma alavanca de 1.ª classe com o fulcro umeral entre o olecrânio e a mão.",
      "Está incorreta: o equilíbrio da cabeça no atlas é o exemplo anatómico primordial de alavanca de 1.ª classe interfixa.",
      "Está incorreta: com o pé suspenso a tíbia atua como fulcro entre os flexores e extensores antagónicos em 1.ª classe."
    ],
    "nursingApplication": "Diferenciar as classes de alavancas anatómicas permite ao enfermeiro compreender quais as articulações suscetíveis a fadiga por desvantagem mecânica (3.ª classe) e quais possuem vantagem de equilíbrio (1.ª classe)."
  },
  {
    "id": 2084,
    "topicId": 2,
    "question": "Numa alavanca de 1.ª classe simétrica (d_P = d_R = 15 cm), se for aplicada uma força potente de 80 N para baixo, qual é a força resistente equilibrada e qual a força total suportada pelo fulcro central?",
    "options": [
      "Força resistente de 80 N para cima; o fulcro central suporta uma força normal compressiva resultante de 160 N para cima.",
      "Força resistente de 40 N para cima; o fulcro central suporta uma força compressiva nula por simetria geométrica de eixos.",
      "Força resistente de 160 N para cima; o fulcro central suporta uma força descendente de oitenta Newtons no solo.",
      "Força resistente nula (0 N); o fulcro central suporta a totalidade da massa inercial sem transmissão de momento torsor."
    ],
    "correctIndex": 0,
    "explanation": "Pelo equilíbrio rotacional: F_R = F_P · (15 / 15) = 80 N. Pelo equilíbrio translacional vertical: ∑Fy = 0 ⇒ N_fulcro - F_P - F_R = 0 ⇒ N_fulcro = 80 + 80 = 160 N. O ponto de apoio suporta a soma das duas forças.",
    "distractorAnalysis": [
      "Está incorreta: braços de alavanca iguais (VM = 1) equilibram forças de igual módulo (80 N = 80 N) e a reação no fulcro é a soma (160 N).",
      "Está incorreta: a força resistente não se duplica para 160 N com braços perfeitamente simétricos (d_P = d_R = 15 cm).",
      "Está incorreta: para haver equilíbrio estático de translação e rotação a força resistente deve ser 80 N e a reação no fulcro 160 N."
    ],
    "nursingApplication": "Nas articulações que funcionam como alavancas de 1.ª classe (como a articulação atlanto-occipital), as superfícies cartilagíneas articulares do fulcro suportam a soma da carga do peso da cabeça com a força dos músculos da nuca, justificando a ocorrência de artrose cervical com o envelhecimento."
  },
  {
    "id": 2085,
    "topicId": 2,
    "question": "A balança romana tradicional utilizada historicamente em hospitais é uma alavanca de 1.ª classe com braço de potência variável. Como é feito o equilíbrio nessa balança?",
    "options": [
      "O braço de potência é rigorosamente fixo, variando-se a massa inercial do contrapeso através da adição de água líquida.",
      "O contrapeso padrão tem peso fixo, mas a sua distância ao fulcro (d_P) é variada ao longo da haste graduada até ao equilíbrio.",
      "A balança atua como uma alavanca de 3.ª classe com desvantagem mecânica constante que amplifica a leitura da massa.",
      "O ponto de apoio articular desloca-se continuamente por ação de um motor elétrico alimentado por pilhas de lítio."
    ],
    "correctIndex": 1,
    "explanation": "Como τ = F · d, para equilibrar uma carga variável com uma força fixa (contrapeso), varia-se a distância d_P. A leitura na escala graduada traduz diretamente a distância em quilogramas correspondentes.",
    "distractorAnalysis": [
      "Está incorreta: na balança romana o peso padrão é constante e desloca-se ao longo da haste graduada variando d_P (τ_P = P_padrao · d_P).",
      "Está incorreta: a balança romana é uma alavanca de 1.ª classe interfixa e não de 3.ª classe interpotente.",
      "Está incorreta: o fulcro da balança romana é estático (gancho de suspensão fixo), sem componentes motorizados ou elétricos."
    ],
    "nursingApplication": "O princípio da balança romana demonstra como o ajuste de distância (braço de alavanca) permite contrabalançar forças pesadas sem necessitar de contrapesos volumosos."
  },
  {
    "id": 2086,
    "topicId": 2,
    "question": "Um carrinho manual hospitalar de transporte de garrafas pesadas de oxigénio medicinal funciona como uma alavanca de 2.ª classe. Onde se localizam o fulcro, a carga e o operador?",
    "options": [
      "Alavanca de 1.ª classe, com a garrafa pesada de oxigénio posicionada entre as rodas dianteiras e o pavimento da enfermaria.",
      "Alavanca de 3.ª classe, com o enfermeiro a empurrar uma zona situada obrigatoriamente entre as rodas e a base da garrafa.",
      "Alavanca de 2.ª classe, com o fulcro nas rodas, a garrafa pesada no meio e o esforço do enfermeiro nas pegas superiores.",
      "Sistema mecânico puro de cunha sem vantagem mecânica mensurável na elevação ou transporte de equipamentos móveis."
    ],
    "correctIndex": 2,
    "explanation": "Num carrinho de transporte (semelhante a um carrinho de mão clássico), a ordem é Fulcro (rodas) - Resistência (garrafa pesada) - Potência (mãos do operador). Como d_P é o comprimento total e d_R é a distância das rodas à garrafa (d_P > d_R), a VM é sempre > 1.",
    "distractorAnalysis": [
      "Está incorreta: o peso da carga situa-se entre as rodas (apoio) e as pegas onde o operador atua, configurando 2.ª classe.",
      "Está incorreta: nas alavancas interpotentes (3.ª classe) o esforço fica no meio, o que não ocorre no carrinho de garrafas.",
      "Está incorreta: o carrinho hospitalar de transporte é um exemplo clássico de engenharia biomecânica de alavanca de 2.ª classe."
    ],
    "nursingApplication": "O transporte seguro de garrafas de oxigénio de 50 kg em carrinhos de 2.ª classe reduz a força que o enfermeiro tem de suportar para menos de 15 kgf, prevenindo lesões da coluna e quedas de garrafas pressurizadas."
  },
  {
    "id": 2087,
    "topicId": 2,
    "question": "Se um carrinho de transporte de resíduos hospitalares de 2.ª classe tiver braço de potência de 1,2 metros e a carga estiver situada a 0,3 metros das rodas (fulcro), qual é a força que o profissional tem de exercer para erguer uma carga de 400 N?",
    "options": [
      "Uma força motora de 400 N aplicada nas pegas, mantendo rigorosamente inalterada a magnitude do peso dos resíduos.",
      "Uma força motora de 1600 N aplicada nas pegas em virtude da multiplicação errada da carga pela razão geométrica dos braços.",
      "Uma força motora de 25 N aplicada nas pegas decorrente da divisão do peso pelo quadrado da distância de deslocamento.",
      "Uma força motora de 100 N aplicada nas pegas (VM = d_P / d_R = 1,2 / 0,3 = 4; F_P = F_R / VM = 400 N / 4 = 100 N)."
    ],
    "correctIndex": 3,
    "explanation": "Pela condição de equilíbrio: F_P · d_P = F_R · d_R ⇒ F_P = 400 N × (0,3 m / 1,2 m) = 400 × 0,25 = 100 N. A vantagem mecânica de 4 reduz o esforço do operador para apenas um quarto da carga.",
    "distractorAnalysis": [
      "Está incorreta: 400 N ignoraria a vantagem mecânica do carrinho de 2.ª classe (VM = 4), que reduz o esforço para um quarto.",
      "Está incorreta: 1600 N resultaria de multiplicar a carga pela vantagem mecânica em vez de a dividir (F_P = F_R / VM).",
      "Está incorreta: 25 N decorre de dividir 400 por 16 (quadrado da razão), violando a lei de equilíbrio estático de alavancas."
    ],
    "nursingApplication": "Esta redução biofísica de 400 N para 100 N permite aos profissionais de apoio e enfermagem transportar contentores pesados de resíduos biológicos com postura correta e mínimo desgaste físico."
  },
  {
    "id": 2088,
    "topicId": 2,
    "question": "Numa maca articulada de ambulância com sistema de pernas dobráveis, ao erguer a traseira da maca apoiada nas rodas dianteiras no solo, o sistema comporta-se como uma alavanca de:",
    "options": [
      "Alavanca de 2.ª Classe, com as rodas dianteiras como fulcro, o peso do doente no meio e a força do operador na peseira.",
      "Alavanca de 1.ª Classe, com o peso do doente posicionado num ponto anterior ao fulcro giratório das rodas da maca.",
      "Alavanca de 3.ª Classe, com o profissional a aplicar força no centro do colchão enquanto o doente repousa na extremidade.",
      "Sistema articulado inerte sem momentos de força em virtude do amortecimento pneumático das suspensões do leito móvel."
    ],
    "correctIndex": 0,
    "explanation": "O fulcro no solo (rodas dianteiras travadas), a carga do doente no leito da maca (ao meio) e os operadores a puxar pelas pegas traseiras (potência na ponta) configuram rigorosamente a geometria F - R - P da 2.ª classe.",
    "distractorAnalysis": [
      "Está incorreta: o fulcro de rotação com o solo são as rodas anteriores, a carga fica a meio e a força nas pegas traseiras (2.ª classe).",
      "Está incorreta: o operador atua na extremidade posterior da maca e não no centro do estrado sob o corpo do doente.",
      "Está incorreta: erguer a extremidade de uma maca sobre rodas envolve torque e equilíbrio de alavanca clássico."
    ],
    "nursingApplication": "Aproveitar a vantagem mecânica da 2.ª classe ao carregar a maca na ambulância permite que dois socorristas ergam com segurança doentes com mais de 90 kg sem sofrerem traumatismos agudos na coluna lombar."
  },
  {
    "id": 2089,
    "topicId": 2,
    "question": "O músculo quadríceps femoral atua através do tendão rotuliano inserido na tuberosidade anterior da tíbia (a cerca de 4 cm do eixo da articulação do joelho) para estender a perna contra o peso do pé (a 40 cm do joelho). Esta alavanca é de:",
    "options": [
      "Alavanca de 2.ª Classe (Inter-resistente), com VM = 40 / 4 = 10, multiplicando a força muscular por dez vezes no pé.",
      "Alavanca de 3.ª Classe (Interpotente), com VM = 4 / 40 = 0,1, exigindo que o quadríceps exerça dez vezes mais força que a carga.",
      "Alavanca de 1.ª Classe (Interfixa), com a patela a funcionar como fulcro central entre a anca e o tendão de Aquiles distal.",
      "Sistema de roldana simples móvel com vantagem mecânica unitária que divide a força de extensão por dois na tíbia."
    ],
    "correctIndex": 1,
    "explanation": "O fulcro é o joelho, a potência é o tendão rotuliano (a 4 cm) e a resistência é o peso da perna e pé (a 40 cm). Como a potência está entre o fulcro e a resistência (F - P - R), é de 3.ª classe com VM = 0,1. Para segurar 50 N no pé, o quadríceps produz 500 N de força!",
    "distractorAnalysis": [
      "Está incorreta: a inserção tendinosa fica a 4 cm do joelho e o pé a 40 cm, logo d_P < d_R (VM = 0,1, alavanca de 3.ª classe).",
      "Está incorreta: o joelho é o fulcro proximal e a força do quadríceps atua entre o fulcro e o pé, sendo interpotente.",
      "Está incorreta: a articulação femorotibial é uma alavanca óssea anatómica e não uma roldana móvel de cabo contínuo."
    ],
    "nursingApplication": "Compreender que o quadríceps opera com enorme desvantagem mecânica (VM = 0,1) justifica por que motivo as forças de compressão na cartilagem articular da rótula e meniscos atingem múltiplos do peso corporal durante a marcha e ao subir escadas."
  },
  {
    "id": 2090,
    "topicId": 2,
    "question": "A abdução do braço pelo músculo deltoide na articulação glenoumeral (ombro) funciona como uma alavanca de 3.ª classe. A principal consequência biomecânica desta configuração para o ombro do enfermeiro é:",
    "options": [
      "O músculo deltoide trabalha com grande vantagem de força (VM >> 1), operando com forças inferiores a dez Newtons.",
      "A força de compressão na cavidade glenoideia é nula porque o músculo atua com alinhamento puramente tangencial sem corte.",
      "O deltoide tem de gerar forças muito elevadas na tuberosidade deltoideia para vencer o peso do membro e cargas na mão.",
      "O braço de potência do deltoide é três vezes maior do que o comprimento total do membro superior do indivíduo."
    ],
    "correctIndex": 2,
    "explanation": "Como a inserção do deltoide fica próxima da articulação glenoumeral e o braço é longo (alavanca de 3.ª classe com VM << 1), segurar um membro ou equipamento com os braços abertos exige forças musculares e articulares de centenas de Newtons.",
    "distractorAnalysis": [
      "Está incorreta: o deltoide insere-se a poucos centímetros da cabeça umeral (d_P pequeno), tendo VM << 1 e exigindo grande força muscular.",
      "Está incorreta: as forças de contração muscular elevadas comprimem fortemente a cabeça umeral contra a glenoide da escápula.",
      "Está incorreta: o braço de potência muscular é muito mais curto do que o comprimento ósseo do membro até à mão."
    ],
    "nursingApplication": "O enfermeiro aprende na prática clínica a manter os braços e cotovelos colados ao tronco ao manipular doentes: afastar os braços aumenta o braço resistente e multiplica a tensão no deltoide e tendão da coifa dos rotadores, prevenindo tendinites ocupacionais."
  },
  {
    "id": 2091,
    "topicId": 2,
    "question": "Por que razão as pinças cirúrgicas de dissecação sem travão (alavancas de 3.ª classe) são preferidas para manipular vasos sanguíneos delicados, nervos periféricos e intestinos durante cirurgias?",
    "options": [
      "Porque multiplicam a força manual em mais de cem vezes permitindo cortar tecidos calcificados sem qualquer esforço.",
      "Porque o seu mecanismo impede que o cirurgião sinta a resistência tecidual mecânica durante a manobra operatória.",
      "Porque anulam as leis da elasticidade ao serem submetidas a ciclos rápidos de esterilização química em autoclave.",
      "Porque a Vantagem Mecânica reduzida (VM < 1) confere extraordinária sensibilidade tátil e precisão de aperto nas pontas."
    ],
    "correctIndex": 3,
    "explanation": "Numa alavanca de 3.ª classe, como a força de saída nas pontas é menor do que a força dos dedos, o profissional tem um controlo ultra-sensível da pressão exercida: pequenos movimentos dos dedos resultam em movimentos precisos nas pontas, prevenindo lacerações iatrogénicas.",
    "distractorAnalysis": [
      "Está incorreta: pinças de dissecação têm VM < 1 e não multiplicam a força, destinando-se a preensão delicada e precisa.",
      "Está incorreta: o objetivo primordial em cirurgia e enfermagem é precisamente fornecer feedback tátil refinado ao profissional.",
      "Está incorreta: instrumentos metálicos obedecem rigorosamente à elasticidade e resistência dos materiais hospitalares."
    ],
    "nursingApplication": "O enfermeiro instrumentista seleciona pinças de dissecação sem dentes (tipo Debakey) para cirurgia vascular e cardíaca: a mecânica de 3.ª classe com pontas atraumáticas permite manipular a aorta e coronárias com segurança máxima."
  },
  {
    "id": 2092,
    "topicId": 2,
    "question": "A Reologia é o ramo da física e da biofísica que estuda especificamente:",
    "options": [
      "A deformação e o escoamento da matéria sob a ação de tensões mecânicas em materiais elásticos, plásticos e fluidos.",
      "A velocidade de sedimentação globular das hemácias em colunas verticais sob ação exclusiva da aceleração gravítica.",
      "A condutividade térmica de gases medicinais comprimidos em botijas de alta pressão à temperatura ambiente hospitalar.",
      "A cinética enzimática de polimerização dos fatores de coagulação plasmática na formação do trombo de fibrina inicial."
    ],
    "correctIndex": 0,
    "explanation": "A reologia (do grego 'rheos' = fluir) estuda a resposta mecânica de materiais quando submetidos a tensões de corte ou tração: descreve como os corpos se deformam (elasticidade/plasticidade) ou fluem (viscosidade) no tempo.",
    "distractorAnalysis": [
      "Está incorreta: a velocidade de sedimentação (VS) é um teste laboratorial clínico e não a definição abrangente da Reologia.",
      "Está incorreta: a condução térmica em gases comprimidos é estudada na termodinâmica clássica e física dos gases.",
      "Está incorreta: a cinética de reações enzimáticas é domínio da bioquímica médica e bioenergética molecular."
    ],
    "nursingApplication": "A reologia é indispensável em enfermagem para compreender o comportamento do sangue (fluido reológico não-newtoniano), do muco brônquico, do líquido sinovial articular e de biomateriais como géis de hidrogel para tratamento de feridas."
  },
  {
    "id": 2093,
    "topicId": 2,
    "question": "Na física dos materiais, o conceito de 'Corpo Perfeitamente Rígido' (ou estritamente rígido) corresponde a:",
    "options": [
      "Um biomaterial metálico de titânio que não sofre qualquer deformação mecânica mesmo sob tensões de gigapascals.",
      "Uma idealização teórica matemática onde a distância entre quaisquer dois pontos do corpo permanece rigorosamente constante.",
      "Um elemento estrutural que dissipa a totalidade da energia mecânica convertendo-a em compressão hidráulica interna.",
      "Um estado mecânico onde a deformação transversal supera em dez vezes a deformação longitudinal sofrida sob tração axial."
    ],
    "correctIndex": 1,
    "explanation": "Na natureza não existe nenhum corpo perfeitamente indeformável: todos os materiais reais sofrem deformações microscópicas elásticas ou plásticas quando sujeitos a forças. O corpo rígido é uma aproximação teórica newtoniana útil para analisar o equilíbrio estático macroscópico.",
    "distractorAnalysis": [
      "Está incorreta: na física real todos os materiais macroscópicos (incluindo ligas de titânio e diamante) sofrem deformação sob carga.",
      "Está incorreta: nenhum corpo converte choques mecânicos em potencial gravitacional sem alteração postural no espaço.",
      "Está incorreta: essa relação descreve um coeficiente de Poisson anómalo e não a definição geométrica de corpo rígido."
    ],
    "nursingApplication": "O enfermeiro compreende que na biomecânica clínica os ossos, próteses e ligamentos nunca são totalmente rígidos: deformam-se sob carga fisiológica, e essa deformação elástica é essencial para absorver impactos e prevenir fraturas."
  },
  {
    "id": 2094,
    "topicId": 2,
    "question": "Um material possui 'Comportamento Elástico' quando:",
    "options": [
      "Mantém uma deformação residual permanente e irreversível mesmo após a cessação completa da carga mecânica externa.",
      "Apresenta escoamento viscoso contínuo à taxa constante enquanto a tensão de corte se mantiver superior a zero no provete.",
      "Retoma espontaneamente a sua forma e dimensões geométricas originais assim que a força externa de deformação é removida.",
      "Fratura de forma catastrófica logo que qualquer solicitação mecânica mínima é exercida na sua superfície transversal."
    ],
    "correctIndex": 2,
    "explanation": "A elasticidade é a propriedade mecânica reversível: a energia fornecida durante a deformação é armazenada como energia potencial elástica e devolvida na totalidade durante a recuperação da forma primitiva (reversibilidade microscópica das ligações químicas).",
    "distractorAnalysis": [
      "Está incorreta: a deformação permanente que persiste após a remoção da força define o comportamento plástico.",
      "Está incorreta: o escoamento contínuo dependente do tempo sob tensão mantida traduz comportamento viscoso ou de fluência.",
      "Está incorreta: a rotura imediata sem deformação mensurável prévia caracteriza a fratura frágil de biomateriais frágeis."
    ],
    "nursingApplication": "As luvas cirúrgicas, torniquetes de borracha, tubos endotraqueais com cuff e ligaduras elásticas baseiam a sua função no comportamento elástico reversível, adaptando-se às estruturas anatómicas com pressão de contacto constante."
  },
  {
    "id": 2095,
    "topicId": 2,
    "question": "O 'Comportamento Plástico' de um material hospitalar ou biológico é caracterizado por:",
    "options": [
      "A recuperação dimensional imediata e completa da forma geométrica primitiva assim que a força mecânica externa é retirada.",
      "Uma alteração dimensional reversível governada estritamente pela Lei de Hooke onde a deformação é proporcional à tensão.",
      "Um aumento espontâneo do Módulo de Young acompanhado por absorção endotérmica contínua sem alteração geométrica dos eixos.",
      "Uma deformação permanente e irreversível que persiste no material mesmo após a remoção completa da tensão mecânica aplicada."
    ],
    "correctIndex": 3,
    "explanation": "Na plasticidade, as tensões ultrapassam o limite elástico do material, provocando o deslizamento irreversível de planos atómicos ou cadeias poliméricas (escoamento plástico). Quando a carga é retirada, o material não regressa ao comprimento inicial, mantendo uma deformação residual.",
    "distractorAnalysis": [
      "Está incorreta: a recuperação completa da forma inicial é a definição de comportamento elástico e não plástico.",
      "Está incorreta: a proporcionalidade linear da Lei de Hooke aplica-se na região elástica e cessa na fase plástica.",
      "Está incorreta: a deformação plástica ocorre após o limite elástico e não envolve aumento espontâneo do Módulo de Young."
    ],
    "nursingApplication": "O comportamento plástico é aproveitado pelo ortopedista e enfermeiro ao moldar talas maleáveis de alumínio com espuma ou placas de imobilização: a força manual deforma o metal plasticamente, adaptando-o com precisão anatómica ao membro fraturado."
  },
  {
    "id": 2096,
    "topicId": 2,
    "question": "Um fluido é classificado como 'Fluido Newtoniano' quando a sua viscosidade dinâmica (η):",
    "options": [
      "Permanece estritamente constante a uma dada temperatura e pressão, independentemente da taxa de cisalhamento aplicada.",
      "Diminui exponencialmente à medida que a taxa de cisalhamento aumenta ao longo do gradiente de velocidade no leito.",
      "Aumenta de forma linear com a velocidade do fluido, tornando-se extremamente viscoso sob agitação mecânica rápida.",
      "Anula-se na totalidade sempre que o escoamento laminar atinge o regime turbulento com número de Reynolds superior a 4000."
    ],
    "correctIndex": 0,
    "explanation": "Nos fluidos newtonianos (como a água pura, o soro fisiológico a 0,9% e o ar), a tensão de cisalhamento é linearmente proporcional ao gradiente de velocidade: τ = η · (dv/dy). A viscosidade η é uma constante física que não varia com a agitação mecânica.",
    "distractorAnalysis": [
      "Está incorreta: fluidos cuja viscosidade diminui com a taxa de cisalhamento são classificados como pseudoplásticos (não-newtonianos).",
      "Está incorreta: fluidos cuja viscosidade aumenta com a taxa de cisalhamento são dilatantes (também não-newtonianos).",
      "Está incorreta: no regime turbulento a viscosidade do fluido continua a existir, aumentando a perda de carga por atrito viscoso."
    ],
    "nursingApplication": "Soluções cristalóides intravenosas como o soro fisiológico e o soro glicosado são fluidos newtonianos perfeitos: a sua resistência ao escoamento através de cateteres e agulhas é linear e previsível pelas bombas infusoras volumétricas."
  },
  {
    "id": 2097,
    "topicId": 2,
    "question": "O sangue total humano é classificado reologicamente como um 'Fluido Não-Newtoniano Pseudoplástico' (com comportamento de 'shear-thinning'). O que significa isto na prática circulatória?",
    "options": [
      "A viscosidade dinâmica do sangue é perfeitamente constante e independe da deformabilidade dos eritrócitos na circulação.",
      "A viscosidade aparente do sangue diminui à medida que a taxa de cisalhamento aumenta (comportamento pseudoplástico).",
      "O sangue comporta-se como um fluido dilatante cuja viscosidade duplica em artérias onde a velocidade de fluxo é máxima.",
      "A viscosidade sanguínea depende exclusivamente da temperatura ambiente da enfermaria, sendo imune ao hematócrito."
    ],
    "correctIndex": 1,
    "explanation": "A baixas velocidades de escoamento (baixa taxa de cisalhamento), as hemácias agregam-se em pilhas de moedas ('rouleaux'), aumentando a viscosidade. Quando o sangue corre velozmente sob altas taxas de cisalhamento (sístole arterial), as pilhas desfazem-se e as hemácias elásticas deformam-se em elipsóides alinhados com o fluxo, diminuindo substancialmente a viscosidade (efeito de pseudoplasticidade).",
    "distractorAnalysis": [
      "Está incorreta: o sangue é não-newtoniano: a sua viscosidade varia com a velocidade de corte e com o alinhamento das hemácias.",
      "Está incorreta: o sangue é pseudoplástico (shear-thinning) e não dilatante (shear-thickening).",
      "Está incorreta: a concentração de hemácias (hematócrito) e as proteínas plasmáticas são os principais determinantes da viscosidade."
    ],
    "nursingApplication": "Em doentes em choque hipovolémico com estase circulatória periférica (escoamento lentificado), a viscosidade do sangue aumenta na microcirculação, agravando a oclusão dos capilares; o enfermeiro administra fluidoterapia de ressuscitação para restaurar a velocidade e diminuir a viscosidade aparente."
  },
  {
    "id": 2098,
    "topicId": 2,
    "question": "O muco traqueobrônquico humano é um gel reológico tixotrópico. A 'Tixotropia' é a propriedade física pela qual um material:",
    "options": [
      "Endurece instantaneamente como um sólido compacto e inelástico quando submetido a fluxos aéreos respiratórios rápidos.",
      "Mantém a mesma viscosidade dinâmica absoluta independentemente de qualquer solicitação de cisalhamento no tempo.",
      "Torna-se temporariamente menos viscoso (mais fluido) quando sujeito a agitação mecânica contínua ou tosse vigorosa.",
      "Evapora-se espontaneamente para o espaço alveolar diminuindo o volume total das secreções brônquicas retidas."
    ],
    "correctIndex": 2,
    "explanation": "A tixotropia é a dependência temporal da viscosidade sob cisalhamento contínuo: a estrutura em rede das mucinas no muco desentrelaça-se com a agitação e vibração mecânica, liquefazendo o muco e facilitando o seu transporte pelo epitélio ciliar.",
    "distractorAnalysis": [
      "Está incorreta: a tixotropia caracteriza-se precisamente pela fluidificação induzida pelo cisalhamento sustentado e não pelo endurecimento.",
      "Está incorreta: a viscosidade invariante define o comportamento newtoniano e não a tixotropia viscoelástica do muco.",
      "Está incorreta: o muco brônquico é um gel aquoso polimérico estável que é expelido mecanicamente pela tosse e transporte mucociliar."
    ],
    "nursingApplication": "Este fundamento biofísico justifica as técnicas de cinesiterapia respiratória de enfermagem (vibrocompressão torácica e dispositivos oscilatórios como o Flutter): a vibração mecânica de 10 a 20 Hz fluidifica o muco tixotrópico brônquico, facilitando a expetoração em doentes com hipersecreção pulmonar."
  },
  {
    "id": 2099,
    "topicId": 2,
    "question": "Um penso de 'Hidrogel amorfo' utilizado no tratamento e desbridamento de feridas é um biomaterial viscoelástico composto por mais de 90% de água. Na biofísica da cicatrização, a sua principal função reológica e biológica é:",
    "options": [
      "Desidratar agressivamente os tecidos da úlcera para criar uma crosta espessa e rígida que bloqueie o exsudado seroso.",
      "Aplicar uma tensão de tração mecânica de cinquenta Pascals nas bordas da ferida para acelerar a aproximação elástica.",
      "Esterilizar quimicamente a pele circundante através da libertação contínua de iões de cloro livre altamente oxidantes.",
      "Fornecer humidade constante ao leito da ferida para hidratar a necrose e favorecer o desbridamento autolítico celular."
    ],
    "correctIndex": 3,
    "explanation": "Os hidrogéis são redes poliméricas tridimensionais hidrofílicas inchadas em água. Doam água a tecidos secos desvitalizados, ativando as enzimas endógenas (colagenases e elastases) que dissolvem a necrose de forma indolor (desbridamento autolítico suave).",
    "distractorAnalysis": [
      "Está incorreta: os hidrogéis são doadores de humidade hidrofílicos que evitam a desidratação e facilitam a fibrinólise autóloga.",
      "Está incorreta: o penso de hidrogel atua por hidratação química e não como dispositivo mecânico de tração cutânea.",
      "Está incorreta: os hidrogéis são biocompatíveis e atóxicos, não contendo cloro oxidante que lesionaria os tecidos de granulação."
    ],
    "nursingApplication": "O enfermeiro aplica hidrogel amorfo em esfacelos e necroses secas de úlceras por pressão e pés diabéticos, cobrindo com penso secundário oclusivo para manter o microambiente húmido e acelerar a limpeza da ferida."
  },
  {
    "id": 2100,
    "topicId": 2,
    "question": "A Tensão Mecânica Normal (σ, expressa em Pascal ou N/m²) gerada no interior de um fio de sutura cirúrgico tracionado por uma força axial F é calculada por:",
    "options": [
      "σ = F / A_seccao (onde F é a força de tração axial e A_seccao é a área da secção transversal da parede cilíndrica).",
      "σ = F · L₀ · A_seccao (produto da força motora pelo comprimento inicial e pela área do lúmen interno do tubo).",
      "σ = F / (m · g) (razão entre a força de tração e a força peso calculada pela aceleração gravítica terrestre).",
      "σ = ΔL / (A_seccao · t) (deformação dividida pelo produto da área pelo tempo decorrido durante o procedimento clínico)."
    ],
    "correctIndex": 0,
    "explanation": "Tensão mecânica é a intensidade das forças internas distribuídas por unidade de área transversal da secção de um corpo elástico (σ = F / A). A sua unidade no SI é o Pascal (1 Pa = 1 N/m²; nos materiais utiliza-se frequentemente megapascais: 1 MPa = 10⁶ N/m²).",
    "distractorAnalysis": [
      "Está incorreta: a tensão é uma força distribuída por uma área (σ = F / A) e não o produto de força por comprimento por área.",
      "Está incorreta: dividir a força pelo peso daria uma grandeza adimensional e não uma tensão mecânica em Pascals (N/m²).",
      "Está incorreta: deformação dividida por área e tempo resultaria numa unidade dimensional incoerente sem relação com tensão."
    ],
    "nursingApplication": "Para o mesmo nó cirúrgico feito com 20 N de tração, um fio de sutura fino (ex: 5-0) sofre uma tensão interna σ muito superior à de um fio grosso (ex: 1-0); se a tensão ultrapassar a resistência do material, o fio rompe nas mãos do enfermeiro instrumentista."
  },
  {
    "id": 2101,
    "topicId": 2,
    "question": "A Deformação Relativa Longitudinal (ε, strain) de um tubo elétrico de silicone sujeito a tração mecânica é calculada pela razão adimensional:",
    "options": [
      "ε = L₀ / ΔL, correspondendo à razão inversa entre a dimensão em repouso e o alongamento elástico sofrido pelo tubo.",
      "ε = ΔL / L₀, correspondendo à razão adimensional entre a variação de comprimento e a dimensão inicial em repouso.",
      "ε = ΔL · L₀, calculando o produto escalar da extensão linear pela dimensão basal do polímero em repouso.",
      "ε = F · ΔL / A, multiplicando a tração aplicada pela deformação e normalizando pela secção reta transversal."
    ],
    "correctIndex": 1,
    "explanation": "A deformação relativa ε mede a extensão proporcional sofrida pelo corpo: é uma grandeza puramente adimensional (metros divididos por metros). Multiplicada por 100 expressa a deformação percentual (ex: ε = 0,20 corresponde a um estiramento de 20%).",
    "distractorAnalysis": [
      "Está incorreta: a deformação relativa divide o alongamento pelo comprimento inicial e não o inverso.",
      "Está incorreta: expressa o produto do alongamento pelo comprimento em vez da sua razão adimensional.",
      "Está incorreta: confunde a deformação relativa com a energia de deformação mecânica por unidade de área."
    ],
    "nursingApplication": "Ao alongar tiras de ligaduras de compressão elástica ou torniquetes de silicone, o enfermeiro estica a faixa em cerca de 50 a 100% (ε = 0,5 a 1,0), sabendo que a tensão de retração gerada sobre a pele é diretamente proporcional a essa deformação relativa."
  },
  {
    "id": 2102,
    "topicId": 2,
    "question": "Um cateter venoso periférico de 4 cm de comprimento (L₀ = 0,04 m) é acidentalmente tracionado durante a mudança de roupa de cama, atingindo 4,4 cm antes de recuperar a forma. Qual foi a deformação relativa máxima ε sofrida?",
    "options": [
      "ε = 0,40 (ou 40%), calculada tomando o valor absoluto do alongamento sofrido sem normalizar pela dimensão basal.",
      "ε = 1,10 (ou 110%), dividindo erroneamente o comprimento final esticado de 4,4 cm pelo comprimento original de 4,0 cm.",
      "ε = 0,10 (ou 10%), calculada dividindo o alongamento de 0,4 cm pelo comprimento inicial em repouso de 4,0 cm.",
      "ε = 0,01 (ou 1%), dividindo a variação milimétrica de 0,4 cm pela dimensão em repouso expressa em metros."
    ],
    "correctIndex": 2,
    "explanation": "O alongamento foi ΔL = L_final - L₀ = 4,4 cm - 4,0 cm = 0,4 cm. A deformação relativa é ε = ΔL / L₀ = 0,4 cm / 4,0 cm = 0,10 (isto é, 10%).",
    "distractorAnalysis": [
      "Está incorreta: confunde o valor absoluto do alongamento em centímetros (0,4 cm) com a percentagem relativa de 40%.",
      "Está incorreta: divide a dimensão final estirada (L) pelo comprimento inicial (L₀) em vez do alongamento (ΔL).",
      "Está incorreta: comete um erro de unidades ao misturar centímetros com metros no denominador sem conversão."
    ],
    "nursingApplication": "Polímeros de cateteres intravenosos de poliuretano têm elevada capacidade elástica e toleram deformações de 10% a 20% sem fissurar; o enfermeiro inspeciona a integridade do cateter para garantir que não houve estrangulamento do lúmen ou microfissuras após trações acidentais."
  },
  {
    "id": 2103,
    "topicId": 2,
    "question": "O 'Coeficiente de Poisson' (ν) de um biomaterial descreve a relação mecânica entre:",
    "options": [
      "A relação entre a força tangencial de cisalhamento e o gradiente de velocidade no escoamento laminar do fluido biológico.",
      "A proporção entre a energia elástica recuperável no retorno mecânico e a energia plástica total dissipada na fratura.",
      "O quociente entre a tensão hidrostática interna na parede tubular e a espessura da membrana sob regime de escoamento.",
      "A razão entre a contração transversal lateral e a extensão longitudinal no regime elástico de tração (ν = - ε_trans / ε_long)."
    ],
    "correctIndex": 3,
    "explanation": "O coeficiente de Poisson (tipicamente entre 0,3 e 0,5 para elastómeros e tecidos moles biológicos quase incompressíveis) quantifica o adelgaçamento lateral que acompanha o estiramento longitudinal. Quando puxamos uma mangueira elástica, o seu raio diminui.",
    "distractorAnalysis": [
      "Está incorreta: essa relação define o coeficiente de viscosidade dinâmica num fluido e não o coeficiente de Poisson.",
      "Está incorreta: essa proporção caracteriza a resiliência elástica relativa e o rendimento mecânico do material.",
      "Está incorreta: essa razão relaciona-se com o cálculo de tensão circunferencial pela Lei de Laplace."
    ],
    "nursingApplication": "Ao esticar longitudinalmente um cateter maleável para forçar a sua passagem através de um introdutor valvulado estreito, o efeito de Poisson diminui o seu diâmetro exterior facilitando a progressão; contudo, o enfermeiro sabe que tracionar em excesso pode diminuir temporariamente o lúmen interno."
  },
  {
    "id": 2104,
    "topicId": 2,
    "question": "A Lei de Hooke para a elasticidade unidimensional linear estabelece que a tensão mecânica σ é diretamente proporcional à deformação relativa ε no regime elástico, sendo expressa por:",
    "options": [
      "σ = E · ε, indicando que a tensão normal é o produto direto do Módulo de Young pela deformação linear relativa sofrida.",
      "σ = E / ε², indicando que a tensão normal decresce com o quadrado da deformação unitária sofrida na secção elástica.",
      "σ = E · ΔL², estabelecendo que a tensão desenvolvida varia quadraticamente com a elongação linear do biomaterial.",
      "σ = E / (A · ε), dividindo o módulo de elasticidade pela área transversal e pela deformação percentual do material."
    ],
    "correctIndex": 0,
    "explanation": "Formulada originalmente por Robert Hooke em 1676 ('Ut tensio, sic vis' - 'Qual a extensão, tal a força'), a relação tensão-deformação é linear no regime elástico: a constante de proporcionalidade E (Módulo de Young) mede a rigidez intrínseca do material e expressa-se em Pascal (N/m²).",
    "distractorAnalysis": [
      "Está incorreta: a Lei de Hooke linear estabelece uma relação direta proporcional de 1.ª ordem e não um inverso quadrático.",
      "Está incorreta: a tensão depende linearmente da deformação relativa adimensional (ε) e não do quadrado do alongamento.",
      "Está incorreta: a área transversal já se encontra incorporada no conceito de tensão (σ = F/A)."
    ],
    "nursingApplication": "A Lei de Hooke é a base da física de molas em seringas automáticas, dinamómetros e camas hospitalares: dentro do limite elástico, duplicar a força aplicada duplica com rigor a deformação elástica do componente."
  },
  {
    "id": 2105,
    "topicId": 2,
    "question": "O Módulo de Young (E) é uma propriedade mecânica intrínseca que quantifica:",
    "options": [
      "A ductilidade plástica do sólido: quanto maior for E, maior será a extensão suportada antes da rutura estrutural.",
      "A rigidez elástica intrínseca: quanto maior for E, menor será a deformação sofrida sob uma dada tensão aplicada.",
      "A tenacidade mecânica total: quanto maior for E, maior será a energia total absorvida até à fragmentação final.",
      "A viscosidade dinâmica tecidual: quanto maior for E, mais rápida será a dissipação interna de calor sob atrito."
    ],
    "correctIndex": 1,
    "explanation": "O Módulo de Young traduz a resistência que as ligações interatómicas e intermoleculares opõem ao estiramento. O diamante tem E ~ 1200 GPa (extremamente rígido), o aço cirúrgico tem E ~ 200 GPa, o osso cortical tem E ~ 18 GPa e a borracha de silicone tem E ~ 0,005 GPa (muito elástica e flexível).",
    "distractorAnalysis": [
      "Está incorreta: a ductilidade mede a capacidade de sofrer deformação plástica antes da rutura e não o Módulo de Young.",
      "Está incorreta: a tenacidade corresponde à área integral sob a curva tensão-deformação e não à rigidez elástica inicial.",
      "Está incorreta: a viscosidade caracteriza a resistência ao escoamento em meios fluidos ou componentes amortecedores."
    ],
    "nursingApplication": "Cateteres de silicone têm baixo Módulo de Young (macios e atraumáticos para permanência venosa prolongada), enquanto cateteres de poliuretano têm Módulo de Young inicial mais alto (maior rigidez para facilitar a punção sem dobrar, amolecendo à temperatura do sangue)."
  },
  {
    "id": 2106,
    "topicId": 2,
    "question": "Comparando uma sonda gástrica rígida de PVC com uma sonda de nutrição entérica de poliuretano/silicone de mesmo calibre, o silicone possui um Módulo de Young muito inferior ao PVC. Qual é a repercussão clínica no conforto do doente?",
    "options": [
      "O menor Módulo de Young permite que a sonda colapse totalmente sob pressão atmosférica, impedindo a progressão gástrica.",
      "O menor Módulo de Young eleva a rigidez à flexão da tubuladura, provocando maior trauma mecânico na parede esofágica.",
      "O baixo Módulo de Young do silicone reduz as forças de reação sobre os tecidos, prevenindo úlceras de pressão e necrose mucosa.",
      "O baixo Módulo de Young impede a infusão de nutrientes hidrossolúveis devido à absorção osmótica pela parede de silicone."
    ],
    "correctIndex": 2,
    "explanation": "Materiais com baixo Módulo de Young deformam-se com facilidade perante pequenas forças de contacto, exercendo pressões reduzidas sobre as paredes da mucosa nasal e digestiva. O PVC, com Módulo de Young elevado, mantém rigidez e pode causar úlceras por decúbito no esófago se deixado por semanas.",
    "distractorAnalysis": [
      "Está incorreta: a flexibilidade da sonda não provoca colapso espontâneo do lúmen sob condições fisiológicas normais.",
      "Está incorreta: um baixo Módulo de Young significa menor rigidez e não maior rigidez ou trauma na mucosa.",
      "Está incorreta: o módulo de elasticidade mecânico do polímero não bloqueia o fluxo de solutos nutritivos no lúmen."
    ],
    "nursingApplication": "Para nutrição entérica de média a longa duração (> 4 semanas), o enfermeiro escolhe sempre sondas de poliuretano com fio-guia metálico (mandril): o mandril fornece a rigidez transitória para a inserção e a sonda flexível permanece no doente sem agredir a mucosa."
  },
  {
    "id": 2107,
    "topicId": 2,
    "question": "Na Curva Tensão-Deformação típica de um material dúctil, o que representa o 'Limite Elástico' (ou Ponto de Cedência / Tensão de Escoamento)?",
    "options": [
      "A tensão na qual o material atinge a fratura catastrófica imediata com separação completa dos segmentos moleculares.",
      "O ponto exato onde a velocidade de deformação do biomaterial se torna independente da carga mecânica instantânea aplicada.",
      "A transição térmica na qual o polímero perde a sua integridade sólida e se converte num líquido viscoso amorfo.",
      "A tensão máxima suportada sem que ocorra deformação plástica permanente, permitindo a total recuperação geométrica."
    ],
    "correctIndex": 3,
    "explanation": "Abaixo do limite elástico, o material obedece ao comportamento elástico reversível. Se a tensão aplicada ultrapassar este patamar (tensão de cedência σ_y), ocorre escorregamento microscópico de planos atómicos e o material entra em escoamento plástico, não recuperando o tamanho original quando a carga for retirada.",
    "distractorAnalysis": [
      "Está incorreta: o limite de fratura ocorre na tensão de rotura (UTS), muito além do limite de proporcionalidade elástica.",
      "Está incorreta: a independência da velocidade de deformação define um escoamento plástico perfeito ou regime de fluência.",
      "Está incorreta: descreve a temperatura de transição vítrea ou fusão térmica e não o limite elástico mecânico."
    ],
    "nursingApplication": "Ao aplicar um torniquete elástico ou moldar um fixador ortopédico, o enfermeiro sabe que se puxar o elástico para além do seu limite elástico, o material sofre 'escoamento plástico' e perde a capacidade de comprimir o membro de forma eficaz nos turnos seguintes."
  },
  {
    "id": 2108,
    "topicId": 2,
    "question": "O 'Balão de Retenção de uma Sonda Vesical de Foley' é fabricado em látex ou silicone de alta elasticidade. O que acontece se o enfermeiro insuflar o balão de 10 mL com 50 mL de água destilada?",
    "options": [
      "A tensão circunferencial excede a tensão de rutura do elastómero, provocando a rotura mecânica com risco de retenção.",
      "O balão sofre endurecimento por relaxamento de tensões, fixando-se rigidamente na parede vesical sem expandir mais.",
      "O excesso de volume é drenado automaticamente pelo canal urinário por ação de válvulas hidrostáticas de escape.",
      "A parede do balão sofre contração elástica paradoxal, reduzindo o seu diâmetro efetivo para metade do volume basal."
    ],
    "correctIndex": 0,
    "explanation": "Insuflar 50 mL num balão calibrado para 10 mL produz uma deformação relativa excessiva (ε >> ε_limite): a tensão tangencial de estiramento excede a tensão de rutura do material, rasgando o balão de forma abrupta.",
    "distractorAnalysis": [
      "Está incorreta: a sobredistensão contínua gera rotura mecânica do elastómero e não endurecimento estrutural protetor.",
      "Está incorreta: as sondas de Foley comuns não possuem válvulas de alívio ou bypass de sobrepressão interna.",
      "Está incorreta: a elasticidade positiva impede contrações paradoxais quando submetida a aumento de pressão interna."
    ],
    "nursingApplication": "O enfermeiro insufla o balão de Foley estritamente com o volume exato especificado pelo fabricante no conector da sonda (geralmente 10 mL de água bidestilada estéril, nunca soro fisiológico que pode cristalizar na válvula), evitando ruturas traumáticas e espasmos vesicais."
  },
  {
    "id": 2109,
    "topicId": 2,
    "question": "Um material 'Tenaz' (como o fio de sutura cirúrgica de polipropileno - Prolene) distingue-se de um material 'Frágil' (como o vidro ou a porcelana) porque:",
    "options": [
      "Fratura com mínima deformação prévia logo que atinge o limite elástico, libertando energia de forma instantânea.",
      "Apresenta grande capacidade de absorver energia mecânica e deformar-se plasticamente antes de sofrer fratura estrutural.",
      "Possui um Módulo de Young praticamente nulo, comportando-se como um fluido viscoso incompressível sob tração axial.",
      "Recupera 100% da sua forma original mesmo após ser submetido a tensões que ultrapassam a sua tensão de cedência."
    ],
    "correctIndex": 1,
    "explanation": "A tenacidade mecânica é medida pela integral da curva tensão-deformação (energia de deformação por unidade de volume absorvida até à rutura). Materiais frágeis partem sem aviso e quase sem deformação plástica; materiais tenazes deformam-se plasticamente de forma ampla, dissipando energia antes de romperem.",
    "distractorAnalysis": [
      "Está incorreta: a fratura com mínima deformação plástica após o limite elástico define um comportamento frágil.",
      "Está incorreta: materiais tenazes são sólidos estruturais com módulo de rigidez elástica bem definido e não fluidos.",
      "Está incorreta: a recuperação total além da tensão de cedência violaria as leis fundamentais da plasticidade mecânica."
    ],
    "nursingApplication": "Em suturas vasculares de grandes artérias pulsáteis (aorta, artéria femoral), o cirurgião e o enfermeiro utilizam fios monofilamentares tenazes de polipropileno: suportam ciclos contínuos de estiramento pulsátil sistólico sem sofrerem rutura frágil por fadiga mecânica."
  },
  {
    "id": 2110,
    "topicId": 2,
    "question": "A maioria dos tecidos biológicos humanos (tendões, ligamentos, pele, cartilagem e vasos sanguíneos) é classificada mecanicamente como 'Viscoelástica'. A Viscoelasticidade caracteriza-se por:",
    "options": [
      "Comporta-se de forma perfeitamente elástica e isotrópica, com resposta instantânea e independente do tempo de solicitação.",
      "Apresenta plasticidade pura e irreversível logo no início da carga mecânica, sem qualquer componente de retorno elástico.",
      "Apresenta comportamento dependente do tempo, associando rigidez elástica com amortecimento e relaxamento viscoso.",
      "Comporta-se como um fluido newtoniano ideal cuja resistência mecânica varia exclusivamente com a pressão barométrica."
    ],
    "correctIndex": 2,
    "explanation": "Materiais viscoelásticos exibem três fenómenos típicos dependentes do tempo: 1) Fluência (creep - aumento da deformação sob tensão constante); 2) Relaxamento de tensão (stress relaxation - diminuição da tensão sob deformação constante); 3) Histerese elástica (dissipação de energia térmica no ciclo de carga e descarga).",
    "distractorAnalysis": [
      "Está incorreta: tecidos biológicos exibem dependência do tempo (histerese e fluência), não sendo puramente elásticos.",
      "Está incorreta: os tecidos biológicos recuperam a sua deformação em baixas cargas, tendo componente elástica evidente.",
      "Está incorreta: os tecidos vivos são sólidos viscoelásticos e não fluidos ideais dependentes da pressão barométrica."
    ],
    "nursingApplication": "Compreender a viscoelasticidade é crucial no posicionamento: quando se coloca uma tala ou tração, a resistência do tecido muscular e fascial diminui ligeiramente ao longo dos primeiros 20 minutos (relaxamento de tensões), exigindo que o enfermeiro reavalie o aperto da imobilização."
  },
  {
    "id": 2111,
    "topicId": 2,
    "question": "O fenómeno da 'Histerese Elástica' num ciclo de estiramento e relaxamento de uma ligadura elástica ou tendão biológico é evidenciado por:",
    "options": [
      "O retorno exato pela mesma trajetória geométrica de deformação sem que haja qualquer perda energética mensurável.",
      "O aumento contínuo do Módulo de Young à medida que a frequência de ciclos mecânicos de estiramento se aproxima de zero.",
      "A perda irreversível da integridade molecular do polímero imediatamente após a aplicação do primeiro ciclo de tração.",
      "A não coincidência entre a curva de carga e a de descarga, cuja área interna reflete a energia dissipada sob calor."
    ],
    "correctIndex": 3,
    "explanation": "Na histerese, a força exercida durante a recuperação elástica é menor do que a força necessária para deformar o material na ida. A área delimitada pelo ciclo de histerese representa a perda viscosa de energia mecânica por atrito intermolecular, convertida em calor tecidual.",
    "distractorAnalysis": [
      "Está incorreta: o retorno pela mesma curva sem perdas caracteriza um comportamento puramente elástico ideal.",
      "Está incorreta: a rigidez elástica em materiais viscoelásticos tende a aumentar com a frequência e não a diminuir.",
      "Está incorreta: a histerese fisiológica é reversível e não implica a destruição molecular precoce do material."
    ],
    "nursingApplication": "A histerese do colagénio e elastina na pele e tendões atua como um amortecedor biológico que dissipa o choque mecânico de saltos e impactos; o enfermeiro sabe que tendões inflamados ou envelhecidos perdem água e tenacidade, tornando-se vulneráveis a microrroturas."
  },
  {
    "id": 2112,
    "topicId": 2,
    "question": "As meias de compressão elástica graduada perdem gradualmente a sua elasticidade e tensão terapêutica ao longo de meses de uso e lavagens repetidas. Este fenómeno mecânico é designado por:",
    "options": [
      "Fadiga mecânica do polímero, caracterizada pela degradação microscópica das fibras sob múltiplos ciclos de tensão.",
      "Fluência instantânea por perda acelerada da massa volátil dos monómeros de borracha durante o uso continuado.",
      "Relaxamento de Hooke por aumento descontrolado do Módulo de Young induzido pelo contacto com a queratina cutânea.",
      "Transição dúctil-frágil gerada pelo aquecimento uniforme do membro inferior até à temperatura corporal de 37 °C."
    ],
    "correctIndex": 0,
    "explanation": "Milhares de ciclos de estiramento diário e a agressão térmica/química das lavagens provocam fadiga mecânica dos filamentos elastoméricos: o módulo elástico cai e a pressão aplicada no tornozelo desce abaixo da faixa terapêutica prescrita (ex: de 20-30 mmHg para menos de 10 mmHg).",
    "distractorAnalysis": [
      "Está incorreta: a fadiga não decorre de perda de massa por evaporação, mas de microdanos nas cadeias moleculares.",
      "Está incorreta: o Módulo de Young do elastano diminui com a perda de tensão elástica e não aumenta.",
      "Está incorreta: a transição para frágil não é desencadeada pela temperatura corporal fisiológica do paciente."
    ],
    "nursingApplication": "O enfermeiro ensina o doente com insuficiência venosa crónica ou linfedema a substituir as meias elásticas de compressão a cada 4 a 6 meses de uso diário, pois mesmo parecendo inteiras, meias velhas perdem o gradiente de pressão biofísico que previne o edema e as úlceras venosas."
  },
  {
    "id": 2113,
    "topicId": 2,
    "question": "O 'Relaxamento de Tensões' (Stress Relaxation) de um garrote elétrico de látex ou silicone mantido esticado à volta do braço do doente durante 5 minutos significa que:",
    "options": [
      "A pressão de compressão circunferencial aumenta continuamente no membro, mantendo-se inalterada a sua espessura.",
      "A tensão mecânica exercida sobre o membro diminui ao longo do tempo, mantendo-se constante a extensão do garrote.",
      "O garrote sofre alongamento espontâneo contínuo, mesmo mantendo a tensão mecânica aplicada rigorosamente fixa.",
      "O material do garrote perde instantaneamente a sua secção transversal, entrando em deformação plástica irreversível."
    ],
    "correctIndex": 1,
    "explanation": "O relaxamento de tensão é a diminuição progressiva da tensão interna num material viscoelástico sujeito a uma deformação constante (ε = constante). O rearranjo molecular das cadeias poliméricas dissipa o stress mecânico interno, relaxando a força externa exercida.",
    "distractorAnalysis": [
      "Está incorreta: o relaxamento de tensões implica a diminuição da tensão com o tempo e nunca o seu aumento.",
      "Está incorreta: o alongamento sob tensão constante define o fenómeno de fluência (creep) e não o relaxamento.",
      "Está incorreta: o fenómeno é viscoelástico e progressivo no tempo, não envolvendo rotura plástica instantânea."
    ],
    "nursingApplication": "O relaxamento de tensão em tubos elásticos e ligaduras alerta o enfermeiro: ligaduras compressivas aplicadas em membros com edema precisam de ser reavaliadas periodicamente, pois o relaxamento do tecido e a reabsorção do edema reduzem a pressão terapêutica necessária."
  },
  {
    "id": 2114,
    "topicId": 2,
    "question": "A síntese biofísica do Tópico 2 estabelece que os conceitos de Alavanca, Vantagem Mecânica, Elasticidade e Reologia fornecem ao enfermeiro:",
    "options": [
      "Fórmulas teóricas puras que dispensam adaptação ao contexto hospitalar diário e à variabilidade anatómica humana.",
      "Regras laboratoriais restritas à manipulação de equipamentos eletrónicos sem relevância direta para a prestação de cuidados.",
      "Fundamentos físicos para manusear instrumentos clínicos com segurança, otimizar cargas e prevenir lesões mecânicas.",
      "Critérios exclusivamente químicos para esterilização de materiais cirúrgicos sem aplicação na ergonomia de doentes."
    ],
    "correctIndex": 2,
    "explanation": "A biofísica das alavancas e da elasticidade dos corpos é a linguagem da engenharia médica aplicada à biologia humana: desde a alavanca que corta um gesso ou drena um abcesso até à elasticidade dos cateteres venosos e balões de Foley, estes princípios garantem a segurança do doente e a excelência profissional da enfermagem.",
    "distractorAnalysis": [
      "Está incorreta: os princípios mecânicos são diretamente aplicáveis à biomecânica dos cuidados e manuseamento do doente.",
      "Está incorreta: a biomecânica de alavancas e biomateriais é indispensável para prevenir lesões musculoesqueléticas.",
      "Está incorreta: a resistência de materiais e alavancas aborda a mecânica de forças e não protocolos químicos de desinfeção."
    ],
    "nursingApplication": "Compreender os princípios do Tópico 2 consolida no futuro enfermeiro uma mente analítica e científica, capaz de correlacionar a mecânica newtoniana e a ciência dos polímeros com o conforto, segurança e recuperação clínica de cada doente a seu cargo."
  },
  {
    "id": 2115,
    "topicId": 2,
    "question": "Na análise biomecânica e reológica de biomateriais em enfermagem, o/a cateter venoso central de poliuretano desempenha um papel clínico crucial. Como se explica o seu comportamento à luz das propriedades mecânicas de tensão, elasticidade e materiais?",
    "options": [
      "Material compósito com elevado coeficiente de Poisson que mantém rigidez constante independentemente do calor corporal.",
      "Elastómero amorfo que sofre expansão circunferencial volumétrica irreversível logo após o contacto com o sangue venoso.",
      "Filamento rígido metálico que dissipa a pressão hidrostática através de escoamento plástico progressivo no vaso sanguíneo.",
      "Polímero termoplástico cujo Módulo de Young diminui à temperatura corporal, tornando-se mais flexível no leito vascular."
    ],
    "correctIndex": 3,
    "explanation": "O/A cateter venoso central de poliuretano caracteriza-se biofisicamente por ser um polímero termoplástico com E inicial de ~300 MPa que amolece à temperatura corporal de 37 °C para E ~30 MPa, reduzindo a irritação mecânica endotelial e o risco de flebite ou perfuração venosa. Esta propriedade garante a adaptação funcional e a segurança do doente durante a intervenção clínica.",
    "distractorAnalysis": [
      "Está incorreta: o poliuretano moderno é termossensível e amolece significativamente à temperatura do corpo (37 °C).",
      "Está incorreta: o cateter não sofre expansão volumétrica descontrolada na corrente sanguínea.",
      "Está incorreta: os cateteres venosos são tubos poliméricos e não filamentos metálicos com deformação plástica."
    ],
    "nursingApplication": "O enfermeiro aplica este princípio ao manipular o/a cateter venoso central de poliuretano: compreender a sua elasticidade, módulo de deformação e limites de resistência evita falhas mecânicas iatrogénicas, roturas acidentais e lesões teciduais na pessoa cuidada."
  },
  {
    "id": 2116,
    "topicId": 2,
    "question": "Na análise biomecânica e reológica de biomateriais em enfermagem, o/a fio de sutura absorvível de ácido poliglicólico (Dexon) desempenha um papel clínico crucial. Como se explica o seu comportamento à luz das propriedades mecânicas de tensão, elasticidade e materiais?",
    "options": [
      "Polímero absorvível que perde gradualmente a sua resistência tênsil ao longo de semanas por hidrólise das cadeias éster.",
      "Filamento inabsorvível com alta resiliência elástica que mantém a sua força de tensão intacta por períodos superiores a anos.",
      "Monofilamento metálico inoxidável que veda a ferida cirúrgica exclusivamente através de deformação plástica rígida.",
      "Fio cirúrgico inerte de polipropileno monofilamentar que sofre quebra mecânica imediata sob tração axial reduzida."
    ],
    "correctIndex": 0,
    "explanation": "O/A fio de sutura absorvível de ácido poliglicólico (Dexon) caracteriza-se biofisicamente por ser um polímero multifilamentar trançado que perde a sua tensão de rutura elástica em cerca de 3 a 4 semanas por hidrólise química gradual das pontes éster. Esta propriedade garante a adaptação funcional e a segurança do doente durante a intervenção clínica.",
    "distractorAnalysis": [
      "Está incorreta: o ácido poliglicólico (Dexon) é um polímero absorvível que perde força tênsil em 3 a 4 semanas.",
      "Está incorreta: o Dexon é um polímero sintético trançado absorvível e não um fio metálico maleável.",
      "Está incorreta: a perda de resistência decorre de hidrólise química gradual e não de quebra mecânica precoce."
    ],
    "nursingApplication": "O enfermeiro aplica este princípio ao manipular o/a fio de sutura absorvível de ácido poliglicólico (Dexon): compreender a sua elasticidade, módulo de deformação e limites de resistência evita falhas mecânicas iatrogénicas, roturas acidentais e lesões teciduais na pessoa cuidada."
  },
  {
    "id": 2117,
    "topicId": 2,
    "question": "Na análise biomecânica e reológica de biomateriais em enfermagem, o/a tubuladura de perfusão em PVC plastificado desempenha um papel clínico crucial. Como se explica o seu comportamento à luz das propriedades mecânicas de tensão, elasticidade e materiais?",
    "options": [
      "Tubuladura inerte de politetrafluoroetileno (PTFE) com rigidez absoluta que impede qualquer dobra mecânica da linha.",
      "Polímero com plastificantes que conferem flexibilidade mecânica, mas com risco de adsorção de fármacos altamente lipofílicos.",
      "Tubo de borracha vulcanizada vulcanizado com enxofre que liberta iões metálicos que aceleram a coagulação intravascular.",
      "Linha de polietileno de alta densidade sem complacência elástica concebida unicamente para infusões em alta pressão arterial."
    ],
    "correctIndex": 1,
    "explanation": "O/A tubuladura de perfusão em PVC plastificado caracteriza-se biofisicamente por ser um material com plastificantes (como o DEHP) que aumentam a flexibilidade mecânica, mas que podem adsorver fármacos lipofílicos como o diazepam e nitroglicerina, exigindo linhas de polietileno dedicadas. Esta propriedade garante a adaptação funcional e a segurança do doente durante a intervenção clínica.",
    "distractorAnalysis": [
      "Está incorreta: as linhas comuns de infusão venosa utilizam PVC plastificado e não PTFE rígido.",
      "Está incorreta: o PVC médico não utiliza vulcanização com enxofre nem liberta iões coagulantes na corrente sanguínea.",
      "Está incorreta: o polietileno é utilizado especificamente para fármacos lipofílicos e não em todas as infusões rotineiras."
    ],
    "nursingApplication": "O enfermeiro aplica este princípio ao manipular o/a tubuladura de perfusão em PVC plastificado: compreender a sua elasticidade, módulo de deformação e limites de resistência evita falhas mecânicas iatrogénicas, roturas acidentais e lesões teciduais na pessoa cuidada."
  },
  {
    "id": 2118,
    "topicId": 2,
    "question": "Na análise biomecânica e reológica de biomateriais em enfermagem, o/a balão de cateter de angioplastia coronária desempenha um papel clínico crucial. Como se explica o seu comportamento à luz das propriedades mecânicas de tensão, elasticidade e materiais?",
    "options": [
      "Elastómero altamente elástico que duplica continuamente o seu diâmetro à medida que a pressão manométrica aumenta.",
      "Tubo termoplástico autoexpansível que atinge a dilatação máxima unicamente através do aquecimento local da artéria.",
      "Biomaterial não complacente de elevado módulo que expande até um diâmetro rígido fixo sob altas pressões sem sobredilatar.",
      "Malha metálica reabsorvível que sofre fratura frágil intencional para libertar nanopartículas anticoagulantes na placa."
    ],
    "correctIndex": 2,
    "explanation": "O/A balão de cateter de angioplastia coronária caracteriza-se biofisicamente por ser um polímero com Módulo de Young elevadíssimo (não-complacente) para suportar pressões internas de 15 a 20 atmosferas sem dilatar de diâmetro, esmagando a placa de ateroma. Esta propriedade garante a adaptação funcional e a segurança do doente durante a intervenção clínica.",
    "distractorAnalysis": [
      "Está incorreta: os balões de angioplastia coronária são não-complacentes precisamente para evitar rutura vascular.",
      "Está incorreta: a dilatação é mecânica sob pressão hidráulica manométrica e não por aquecimento endotelial.",
      "Está incorreta: descreve incorretamente um stent farmacológico misturado com propriedades de fratura frágil."
    ],
    "nursingApplication": "O enfermeiro aplica este princípio ao manipular o/a balão de cateter de angioplastia coronária: compreender a sua elasticidade, módulo de deformação e limites de resistência evita falhas mecânicas iatrogénicas, roturas acidentais e lesões teciduais na pessoa cuidada."
  },
  {
    "id": 2119,
    "topicId": 2,
    "question": "Na análise biomecânica e reológica de biomateriais em enfermagem, o/a sonda endotraqueal com cuff de baixa pressão e alto volume desempenha um papel clínico crucial. Como se explica o seu comportamento à luz das propriedades mecânicas de tensão, elasticidade e materiais?",
    "options": [
      "Balão de baixa complacência que veda a via aérea exercendo pressões focais superiores à pressão arterial média sistémica.",
      "Manga rígida de silicone reforçado que expande por memória de forma térmica quando em contacto com o gás ventilatório.",
      "Anel metálico articulado que se adapta ao calibre da traqueia através de um mecanismo de cremalheira mecânica interna.",
      "Membrana complacente de alto volume que distribui a pressão na parede traqueal, prevenindo isquemia mucosa microvascular."
    ],
    "correctIndex": 3,
    "explanation": "O/A sonda endotraqueal com cuff de baixa pressão e alto volume caracteriza-se biofisicamente por ser um membrana de PVC ou poliuretano de alta complacência elástica que veda a traqueia com pressão de contacto controlada entre 20 e 30 cmH₂O, prevenindo isquemia da mucosa traqueal. Esta propriedade garante a adaptação funcional e a segurança do doente durante a intervenção clínica.",
    "distractorAnalysis": [
      "Está incorreta: cuffs de alto volume e baixa pressão evitam pressões focais excessivas que causariam necrose traqueal.",
      "Está incorreta: o cuff funciona por insuflação pneumática elástica controlada e não por memória térmica.",
      "Está incorreta: cuffs endotraqueais são membranas poliméricas flexíveis e não anéis metálicos mecânicos."
    ],
    "nursingApplication": "O enfermeiro aplica este princípio ao manipular o/a sonda endotraqueal com cuff de baixa pressão e alto volume: compreender a sua elasticidade, módulo de deformação e limites de resistência evita falhas mecânicas iatrogénicas, roturas acidentais e lesões teciduais na pessoa cuidada."
  },
  {
    "id": 2120,
    "topicId": 2,
    "question": "Na análise biomecânica e reológica de biomateriais em enfermagem, o/a meia de compressão elástica graduada Classe 2 desempenha um papel clínico crucial. Como se explica o seu comportamento à luz das propriedades mecânicas de tensão, elasticidade e materiais?",
    "options": [
      "Malha elástica com compressão decrescente no sentido distal-proximal, favorecendo o retorno venoso sem garroteamento.",
      "Dispositivo inelástico que aplica pressão crescente do tornozelo à coxa para acelerar o fluxo arterial periférico.",
      "Manga de tecido térmico que atua exclusivamente por vasodilatação periférica sem exercer força mecânica de contenção.",
      "Faixa compresiva que aplica pressão uniforme constante ao longo de todo o membro, dispensando qualquer gradiente de tensão."
    ],
    "correctIndex": 0,
    "explanation": "O/A meia de compressão elástica graduada Classe 2 caracteriza-se biofisicamente por ser um malha elástica circular com elastano que aplica uma pressão decrescente de 23-32 mmHg no tornozelo, promovendo o retorno venoso e reduzindo o diâmetro das veias para acelerar a velocidade do sangue. Esta propriedade garante a adaptação funcional e a segurança do doente durante a intervenção clínica.",
    "distractorAnalysis": [
      "Está incorreta: o gradiente pressórico terapêutico é decrescente (maior no tornozelo e menor na coxa) para evitar garrote.",
      "Está incorreta: as meias de compressão atuam mecanicamente por redução do diâmetro venoso e não por calor metabólico.",
      "Está incorreta: uma pressão uniforme sem gradiente favoreceria o represamento de sangue proximal ou garroteamento poplíteo."
    ],
    "nursingApplication": "O enfermeiro aplica este princípio ao manipular o/a meia de compressão elástica graduada Classe 2: compreender a sua elasticidade, módulo de deformação e limites de resistência evita falhas mecânicas iatrogénicas, roturas acidentais e lesões teciduais na pessoa cuidada."
  },
  {
    "id": 2121,
    "topicId": 2,
    "question": "Na análise biomecânica e reológica de biomateriais em enfermagem, o/a penso de alginato de cálcio em ferida cavitária exsudativa desempenha um papel clínico crucial. Como se explica o seu comportamento à luz das propriedades mecânicas de tensão, elasticidade e materiais?",
    "options": [
      "Estrutura inabsorvível de poliéster que adere firmemente ao tecido de granulação para desbridamento mecânico agressivo.",
      "Matriz de polissacarídeos que troca iões Ca²⁺ por Na⁺ no exsudado, convertendo-se num hidrogel macio que protege o leito.",
      "Esponja compressiva hidrofóbica que repousa sobre a ferida para impermeabilizar o leito contra qualquer secreção líquida.",
      "Membrana colágena reticulada que atua exclusivamente como barreira física estanque sem interagir com as secreções locais."
    ],
    "correctIndex": 1,
    "explanation": "O/A penso de alginato de cálcio em ferida cavitária exsudativa caracteriza-se biofisicamente por ser um biomaterial fibroso de algas castanhas que sofre troca iónica com o sódio do exsudado (Ca²⁺ por Na⁺), convertendo-se num gel reológico macio que preenche o espaço morto sem comprimir o leito microvascular. Esta propriedade garante a adaptação funcional e a segurança do doente durante a intervenção clínica.",
    "distractorAnalysis": [
      "Está incorreta: o alginato não deve aderir ao leito cruento nem é desenhado para desbridamento por avulsão traumática.",
      "Está incorreta: o alginato é altamente hidrofílico e absorvente, formando um gel húmido no leito da lesão.",
      "Está incorreta: o alginato interage ativamente por troca catiónica com o sódio do exsudado exsudativo da ferida."
    ],
    "nursingApplication": "O enfermeiro aplica este princípio ao manipular o/a penso de alginato de cálcio em ferida cavitária exsudativa: compreender a sua elasticidade, módulo de deformação e limites de resistência evita falhas mecânicas iatrogénicas, roturas acidentais e lesões teciduais na pessoa cuidada."
  },
  {
    "id": 2122,
    "topicId": 2,
    "question": "Na análise biomecânica e reológica de biomateriais em enfermagem, o/a dreno cirúrgico de sucção fechada (tipo Jackson-Pratt ou Redon) desempenha um papel clínico crucial. Como se explica o seu comportamento à luz das propriedades mecânicas de tensão, elasticidade e materiais?",
    "options": [
      "Câmara rígida estática que aspira fluidos através de um êmbolo acionado por motor elétrico de alta potência contínua.",
      "Saco coletor puramente gravitacional que não exerce qualquer tensão de sucção ou pressão negativa sobre os tecidos.",
      "Reservatório elástico resiliente que gera pressão negativa contínua suave por recuperação elástica das suas paredes.",
      "Válvula unidirecional sem complacência que expande sob pressão hidrostática positiva gerada pelo sangramento arterial."
    ],
    "correctIndex": 2,
    "explanation": "O/A dreno cirúrgico de sucção fechada (tipo Jackson-Pratt ou Redon) caracteriza-se biofisicamente por ser um fole elástico de silicone que atua como reservatório de vácuo mecânico sob a Lei de Hooke, mantendo pressão negativa suave constante para drenagem de hematomas pós-operatórios. Esta propriedade garante a adaptação funcional e a segurança do doente durante a intervenção clínica.",
    "distractorAnalysis": [
      "Está incorreta: os sistemas Jackson-Pratt ou Redon operam por colapso mecânico prévio manual e recuperação elástica.",
      "Está incorreta: estes drenos fechados exercem pressão negativa e não funcionam apenas por drenagem gravitacional passiva.",
      "Está incorreta: o fole gera sucção ativa e não depende unicamente da pressão hidrostática positiva do hematoma."
    ],
    "nursingApplication": "O enfermeiro aplica este princípio ao manipular o/a dreno cirúrgico de sucção fechada (tipo Jackson-Pratt ou Redon): compreender a sua elasticidade, módulo de deformação e limites de resistência evita falhas mecânicas iatrogénicas, roturas acidentais e lesões teciduais na pessoa cuidada."
  },
  {
    "id": 2123,
    "topicId": 2,
    "question": "Na análise biomecânica e reológica de biomateriais em enfermagem, o/a prótese articular de anca com cabeça de cerâmica de zircónia desempenha um papel clínico crucial. Como se explica o seu comportamento à luz das propriedades mecânicas de tensão, elasticidade e materiais?",
    "options": [
      "Polímero viscoelástico de baixa rigidez estrutural que amolece com a temperatura para amortecer os impactos na marcha.",
      "Liga de chumbo e estanho de elevada ductilidade que se deforma progressivamente para copiar a cavidade do cotilóide.",
      "Matriz metálica porosa flexível que dissipa energia mecânica através de deformação plástica contínua em cada passo.",
      "Biocerâmica inerte com elevada dureza, baixo coeficiente de atrito e alta resistência ao desgaste por deslizamento articular."
    ],
    "correctIndex": 3,
    "explanation": "O/A prótese articular de anca com cabeça de cerâmica de zircónia caracteriza-se biofisicamente por ser um biomaterial inorgânico com Módulo de Young extremo (E ~ 210 GPa) e baixíssimo coeficiente de atrito (μ < 0,02 contra polietileno), minimizando o desgaste e a libertação de partículas que causam osteólise asséptica. Esta propriedade garante a adaptação funcional e a segurança do doente durante a intervenção clínica.",
    "distractorAnalysis": [
      "Está incorreta: as cerâmicas protésicas são materiais extremamente rígidos com alto Módulo de Young e não polímeros macios.",
      "Está incorreta: as cabeças femorais de zircónia não contêm chumbo ou estanho, elementos biologicamente tóxicos.",
      "Está incorreta: a cabeça protésica deve resistir a deformações sem entrar em regime plástico durante a locomoção."
    ],
    "nursingApplication": "O enfermeiro aplica este princípio ao manipular o/a prótese articular de anca com cabeça de cerâmica de zircónia: compreender a sua elasticidade, módulo de deformação e limites de resistência evita falhas mecânicas iatrogénicas, roturas acidentais e lesões teciduais na pessoa cuidada."
  },
  {
    "id": 2124,
    "topicId": 2,
    "question": "Na análise biomecânica e reológica de biomateriais em enfermagem, o/a ligadura de gesso sintético de fibra de vidro impregnada com poliuretano desempenha um papel clínico crucial. Como se explica o seu comportamento à luz das propriedades mecânicas de tensão, elasticidade e materiais?",
    "options": [
      "Compósito de malha e resina poliuretânica que atinge alta rigidez por polimerização exotérmica após imersão em água.",
      "Faixa puramente viscoelástica que se mantém flexível após a cura para permitir a mobilização articular da fratura.",
      "Estrutura metálica trançada que endurece unicamente por arrefecimento térmico após exposição ao ar condicionado hospitalar.",
      "Revestimento biológico à base de colagénio animal que mineraliza espontaneamente através da deposição de sais de cálcio."
    ],
    "correctIndex": 0,
    "explanation": "O/A ligadura de gesso sintético de fibra de vidro impregnada com poliuretano caracteriza-se biofisicamente por ser um material compósito que atinge elevada rigidez e resistência à flexão ao fim de 20 minutos de reação de polimerização com água, sendo três vezes mais leve que o gesso de Paris tradicional. Esta propriedade garante a adaptação funcional e a segurança do doente durante a intervenção clínica.",
    "distractorAnalysis": [
      "Está incorreta: o gesso sintético destina-se à imobilização rígida ortopédica e não a manter a articulação móvel.",
      "Está incorreta: a polimerização da fibra de vidro sintética é ativada por água à temperatura ambiente e não por ar frio.",
      "Está incorreta: o material é sintético (fibra de vidro e pré-polímero de poliuretano) e não colagénio mineralizável."
    ],
    "nursingApplication": "O enfermeiro aplica este princípio ao manipular o/a ligadura de gesso sintético de fibra de vidro impregnada com poliuretano: compreender a sua elasticidade, módulo de deformação e limites de resistência evita falhas mecânicas iatrogénicas, roturas acidentais e lesões teciduais na pessoa cuidada."
  },
  {
    "id": 2125,
    "topicId": 2,
    "question": "Na análise biomecânica e reológica de biomateriais em enfermagem, o/a pinça de Kocher hemostática com cremalheira desempenha um papel clínico crucial. Como se explica o seu comportamento à luz das propriedades mecânicas de tensão, elasticidade e materiais?",
    "options": [
      "Alavanca interpotente de 3.ª classe com vantagem mecânica inferior a 1, concebida para ampliar a velocidade à custa da força.",
      "Alavanca interfixa de 1.ª classe com vantagem mecânica que multiplica a força dos dedos nas extremidades ativas de preensão.",
      "Estrutura elástica simples sem fulcro mecânico que funciona exclusivamente por flexão das suas hastes sob compressão.",
      "Alavanca inter-resistente de 2.ª classe cujo fulcro se localiza na cremalheira de travamento automático do cabo distal."
    ],
    "correctIndex": 1,
    "explanation": "O/A pinça de Kocher hemostática com cremalheira caracteriza-se biofisicamente por ser um alavanca de 1.ª classe com d_P = 12 cm e d_R = 3 cm (VM = 4) que multiplica a força do polegar para ocluir firmemente pedículos vasculares sangrantes. Esta propriedade garante a adaptação funcional e a segurança do doente durante a intervenção clínica.",
    "distractorAnalysis": [
      "Está incorreta: pinças hemostáticas são alavancas de 1.ª classe interfixas com VM > 1 para multiplicar a força de aperto.",
      "Está incorreta: o instrumento possui fulcro articular (parafuso central) e não funciona como simples mola elástica.",
      "Está incorreta: a cremalheira é um travão mecânico nos braços de potência e não o fulcro geométrico da alavanca."
    ],
    "nursingApplication": "O enfermeiro aplica este princípio ao manipular o/a pinça de Kocher hemostática com cremalheira: compreender a sua elasticidade, módulo de deformação e limites de resistência evita falhas mecânicas iatrogénicas, roturas acidentais e lesões teciduais na pessoa cuidada."
  },
  {
    "id": 2126,
    "topicId": 2,
    "question": "Na análise biomecânica e reológica de biomateriais em enfermagem, o/a articulação do tornozelo no salto e corrida desempenha um papel clínico crucial. Como se explica o seu comportamento à luz das propriedades mecânicas de tensão, elasticidade e materiais?",
    "options": [
      "Alavanca de 3.ª classe com potência aplicada além da carga, priorizando a amplitude angular sobre o esforço muscular.",
      "Alavanca interfixa de 1.ª classe com fulcro localizado exatamente a meio caminho entre a tíbia e o calcâneo posterior.",
      "Alavanca de 2.ª classe onde a resistência corporal situa-se entre o fulcro nos metatarsos e a potência nos gémeos.",
      "Estrutura rígida sem fulcro móvel que transmite forças verticais diretamente aos ossos do tarso por compressão pura."
    ],
    "correctIndex": 2,
    "explanation": "O/A articulação do tornozelo no salto e corrida caracteriza-se biofisicamente por ser um alavanca de 2.ª classe onde o tendão de Aquiles ergue todo o peso corporal com VM > 1, multiplicando a força muscular em detrimento do deslocamento angular. Esta propriedade garante a adaptação funcional e a segurança do doente durante a intervenção clínica.",
    "distractorAnalysis": [
      "Está incorreta: a elevação nos pés opera como alavanca de 2.ª classe (inter-resistente) com vantagem mecânica favorável.",
      "Está incorreta: o fulcro situa-se na extremidade anterior dos metatarsos e não entre as forças concorrentes.",
      "Está incorreta: o tornozelo possui um fulcro articular articular dinâmico com momentos de torção bem definidos."
    ],
    "nursingApplication": "O enfermeiro aplica este princípio ao manipular o/a articulação do tornozelo no salto e corrida: compreender a sua elasticidade, módulo de deformação e limites de resistência evita falhas mecânicas iatrogénicas, roturas acidentais e lesões teciduais na pessoa cuidada."
  },
  {
    "id": 2127,
    "topicId": 2,
    "question": "Na análise biomecânica e reológica de biomateriais em enfermagem, o/a músculo braquial ao fletir o cotovelo em pronação desempenha um papel clínico crucial. Como se explica o seu comportamento à luz das propriedades mecânicas de tensão, elasticidade e materiais?",
    "options": [
      "Alavanca de 1.ª classe que inverte a rotação articular, multiplicando a força muscular em detrimento do espaço percorrido.",
      "Alavanca de 2.ª classe com vantagem mecânica superior a 1, permitindo erguer cargas extremas com mínima tensão na ulna.",
      "Mecanismo passivo de tração elástica que depende unicamente do recuo viscoelástico dos tendões extensores do antebraço.",
      "Alavanca de 3.ª classe que insere na tuberosidade da ulna perto do cotovelo, ganhando amplitude e velocidade de movimento."
    ],
    "correctIndex": 3,
    "explanation": "O/A músculo braquial ao fletir o cotovelo em pronação caracteriza-se biofisicamente por ser um alavanca de 3.ª classe com inserção na apófise coronóideia da ulna (d_P = 3 cm) e resistência na mão (d_R = 32 cm, VM = 0,09), exigindo 11 vezes mais força muscular do que o peso sustentado. Esta propriedade garante a adaptação funcional e a segurança do doente durante a intervenção clínica.",
    "distractorAnalysis": [
      "Está incorreta: o bíceps e o braquial formam alavancas interpotentes de 3.ª classe no cotovelo e não de 1.ª classe.",
      "Está incorreta: as alavancas de 3.ª classe têm VM < 1, exigindo que o músculo produza força superior à carga erguida.",
      "Está incorreta: a flexão articular ativa decorre da contração motora de sarcómeros e não de recuo tendinoso passivo."
    ],
    "nursingApplication": "O enfermeiro aplica este princípio ao manipular o/a músculo braquial ao fletir o cotovelo em pronação: compreender a sua elasticidade, módulo de deformação e limites de resistência evita falhas mecânicas iatrogénicas, roturas acidentais e lesões teciduais na pessoa cuidada."
  },
  {
    "id": 2128,
    "topicId": 2,
    "question": "Na análise biomecânica e reológica de biomateriais em enfermagem, o/a articulação da anca no apoio unipodal (músculo glúteo médio) desempenha um papel clínico crucial. Como se explica o seu comportamento à luz das propriedades mecânicas de tensão, elasticidade e materiais?",
    "options": [
      "Alavanca de 1.ª classe com fulcro na cabeça femoral, gerando forças compressivas articulares de 2,5 a 3 vezes o peso corporal.",
      "Alavanca de 2.ª classe com fulcro na sínfise púbica que anula a necessidade de esforço muscular dos abdutores durante a marcha.",
      "Mecanismo de tração pura sem momento de torção onde a reação na articulação da anca se iguala exatamente ao peso do tronco.",
      "Alavanca de 3.ª classe em que o glúteo médio puxa o fémur para baixo com força inferior à metade da gravidade corporal."
    ],
    "correctIndex": 0,
    "explanation": "O/A articulação da anca no apoio unipodal (músculo glúteo médio) caracteriza-se biofisicamente por ser um alavanca de 1.ª classe com fulcro na cabeça femoral, o peso do tronco desce medialmente e o glúteo médio traciona lateralmente o trocânter maior para nivelar a bacia. Esta propriedade garante a adaptação funcional e a segurança do doente durante a intervenção clínica.",
    "distractorAnalysis": [
      "Está incorreta: o fulcro mecânico situa-se na anca de apoio e o glúteo médio necessita de gerar grande força tensora.",
      "Está incorreta: a força de reação articular atinge múltiplos do peso corporal devido ao pequeno braço de potência muscular.",
      "Está incorreta: o músculo atua com alavanca interfixa de 1.ª classe equilibrando o momento gerado pelo peso do corpo."
    ],
    "nursingApplication": "O enfermeiro aplica este princípio ao manipular o/a articulação da anca no apoio unipodal (músculo glúteo médio): compreender a sua elasticidade, módulo de deformação e limites de resistência evita falhas mecânicas iatrogénicas, roturas acidentais e lesões teciduais na pessoa cuidada."
  },
  {
    "id": 2129,
    "topicId": 2,
    "question": "Na análise biomecânica e reológica de biomateriais em enfermagem, o/a tesoura de corte de ligaduras de Lister com ponta romba desempenha um papel clínico crucial. Como se explica o seu comportamento à luz das propriedades mecânicas de tensão, elasticidade e materiais?",
    "options": [
      "Dupla alavanca de 3.ª classe com vantagem mecânica reduzida concebida unicamente para acelerar a velocidade do corte cirúrgico.",
      "Dupla alavanca de 1.ª classe com cabos longos e lâminas curtas que multiplica a força manual aplicada no corte de materiais.",
      "Mecanismo de cunha simples sem ponto de rotação que divide as fibras do penso por pressão puramente hidrostática contínua.",
      "Alavanca de 2.ª classe cujo fulcro se localiza na ponta romba distal que desliza por baixo do penso aderido à pele."
    ],
    "correctIndex": 1,
    "explanation": "O/A tesoura de corte de ligaduras de Lister com ponta romba caracteriza-se biofisicamente por ser um alavanca de 1.ª classe com lâminas anguladas que permitem deslizar sob a ligadura rente à pele sem ferir o doente, concentrando a força na extremidade de corte. Esta propriedade garante a adaptação funcional e a segurança do doente durante a intervenção clínica.",
    "distractorAnalysis": [
      "Está incorreta: as tesouras cirúrgicas são alavancas interfixas de 1.ª classe projetadas para multiplicar a força manual.",
      "Está incorreta: o instrumento possui um parafuso de rotação (fulcro) bem demarcado, não operando como cunha cega.",
      "Está incorreta: o fulcro da tesoura é o parafuso central de articulação e não a ponta romba protetora inferior."
    ],
    "nursingApplication": "O enfermeiro aplica este princípio ao manipular o/a tesoura de corte de ligaduras de Lister com ponta romba: compreender a sua elasticidade, módulo de deformação e limites de resistência evita falhas mecânicas iatrogénicas, roturas acidentais e lesões teciduais na pessoa cuidada."
  },
  {
    "id": 2130,
    "topicId": 2,
    "question": "Na análise biomecânica e reológica de biomateriais em enfermagem, o/a porta-agulhas de Mayo-Hegar com mandíbulas de carboneto de tungsténio desempenha um papel clínico crucial. Como se explica o seu comportamento à luz das propriedades mecânicas de tensão, elasticidade e materiais?",
    "options": [
      "Alavanca de 3.ª classe que reduz a força aplicada na pega para evitar a deformação mecânica do fio de sutura monofilamentar.",
      "Instrumento inelástico sem articulação mecânica que atua por adesão magnética entre o bico de tungsténio e a agulha de aço.",
      "Alavanca de 1.ª classe com braço de potência longo que amplifica o momento de torção, impedindo a rotação da agulha curva.",
      "Dispositivo de cremalheira que converte o movimento rotativo em translação linear contínua para perfuração do tecido dérmico."
    ],
    "correctIndex": 2,
    "explanation": "O/A porta-agulhas de Mayo-Hegar com mandíbulas de carboneto de tungsténio caracteriza-se biofisicamente por ser um alavanca de 1.ª classe com hastes compridas e bicos curtos estriados que geram enorme torque de preensão impedindo que a agulha cirúrgica curve ou deslize durante a sutura de tecidos espessos. Esta propriedade garante a adaptação funcional e a segurança do doente durante a intervenção clínica.",
    "distractorAnalysis": [
      "Está incorreta: o porta-agulhas é uma alavanca interfixa com braço de potência muito maior que o de resistência para travar a agulha.",
      "Está incorreta: a preensão da agulha é puramente mecânica e por atrito rugoso com tungsténio, não por atração magnética.",
      "Está incorreta: a cremalheira é um travão estático que bloqueia a compressão sem gerar translação helicoidal."
    ],
    "nursingApplication": "O enfermeiro aplica este princípio ao manipular o/a porta-agulhas de Mayo-Hegar com mandíbulas de carboneto de tungsténio: compreender a sua elasticidade, módulo de deformação e limites de resistência evita falhas mecânicas iatrogénicas, roturas acidentais e lesões teciduais na pessoa cuidada."
  },
  {
    "id": 2131,
    "topicId": 2,
    "question": "Na análise biomecânica e reológica de biomateriais em enfermagem, o/a mandíbula e músculo masséter ao morder um comprimido desempenha um papel clínico crucial. Como se explica o seu comportamento à luz das propriedades mecânicas de tensão, elasticidade e materiais?",
    "options": [
      "Alavanca de 2.ª classe cujo fulcro articular se situa nos incisivos centrais, reduzindo a carga transmitida à base craniana.",
      "Alavanca de 1.ª classe que divide a força muscular entre a maxila e a mandíbula de forma estritamente simétrica e inercial.",
      "Estrutura puramente rígida sem braço de momento que gera pressões trituradoras constantes ao longo de toda a arcada dentária.",
      "Alavanca de 3.ª classe onde a força oclusal é máxima nos molares devido ao menor braço de momento da resistência mecânica."
    ],
    "correctIndex": 3,
    "explanation": "O/A mandíbula e músculo masséter ao morder um comprimido caracteriza-se biofisicamente por ser um alavanca de 3.ª classe onde a força nos molares posteriores é muito maior do que nos incisivos anteriores devido ao menor braço de resistência. Esta propriedade garante a adaptação funcional e a segurança do doente durante a intervenção clínica.",
    "distractorAnalysis": [
      "Está incorreta: o fulcro anatómico situa-se na articulação temporomandibular (ATM) e não na linha dos dentes incisivos.",
      "Está incorreta: a força mastigatória é uma alavanca de 3.ª classe com o músculo inserido entre o fulcro e a carga dentária.",
      "Está incorreta: a pressão varia com a distância ao fulcro, sendo substancialmente maior nos molares que nos dentes anteriores."
    ],
    "nursingApplication": "O enfermeiro aplica este princípio ao manipular o/a mandíbula e músculo masséter ao morder um comprimido: compreender a sua elasticidade, módulo de deformação e limites de resistência evita falhas mecânicas iatrogénicas, roturas acidentais e lesões teciduais na pessoa cuidada."
  },
  {
    "id": 2132,
    "topicId": 2,
    "question": "Na análise biomecânica e reológica de biomateriais em enfermagem, o/a movimento de abdução da coxa pelo tensor da fáscia lata desempenha um papel clínico crucial. Como se explica o seu comportamento à luz das propriedades mecânicas de tensão, elasticidade e materiais?",
    "options": [
      "Alavanca de 3.ª classe com potência entre o fulcro articular e o membro, priorizando velocidade linear e amplitude de passo.",
      "Alavanca de 2.ª classe com elevada vantagem mecânica que permite afastar a perna com um esforço muscular quase impercetível.",
      "Alavanca de 1.ª classe que transfere a carga gravitacional diretamente para o menisco lateral sem gerar tensão no fémur.",
      "Cabo de tração elástica pura que mantém a bacia alinhada sem consumo de energia metabólica durante a fase de apoio unipodal."
    ],
    "correctIndex": 0,
    "explanation": "O/A movimento de abdução da coxa pelo tensor da fáscia lata caracteriza-se biofisicamente por ser um alavanca de 3.ª classe adaptada para estabilidade lateral e marcha bípede rápida com ampla amplitude de movimento pélvico. Esta propriedade garante a adaptação funcional e a segurança do doente durante a intervenção clínica.",
    "distractorAnalysis": [
      "Está incorreta: a abdução opera com alavanca de 3.ª classe (VM < 1), privilegiando amplitude de movimento e não ganho de força.",
      "Está incorreta: o músculo insere-se lateralmente na anca proximal, não atuando como alavanca interfixa sobre o menisco.",
      "Está incorreta: a estabilização ativa da bacia exige contração muscular contínua com consumo efetivo de ATP metabólico."
    ],
    "nursingApplication": "O enfermeiro aplica este princípio ao manipular o/a movimento de abdução da coxa pelo tensor da fáscia lata: compreender a sua elasticidade, módulo de deformação e limites de resistência evita falhas mecânicas iatrogénicas, roturas acidentais e lesões teciduais na pessoa cuidada."
  },
  {
    "id": 2133,
    "topicId": 2,
    "question": "Na análise biomecânica e reológica de biomateriais em enfermagem, o/a espátula lingual na inspeção da orofaringe pelo enfermeiro desempenha um papel clínico crucial. Como se explica o seu comportamento à luz das propriedades mecânicas de tensão, elasticidade e materiais?",
    "options": [
      "Alavanca interpotente de 3.ª classe com fulcro na orofaringe posterior que puxa a base da língua em direção ao palato mole.",
      "Alavanca com ponto de apoio nos dentes ou lábio que deprime a base lingual mediante aplicação de força na extremidade livre.",
      "Mecanismo de dilatação pneumática que afasta as paredes laterais da faringe por gradiente de pressão hidrostática negativa.",
      "Instrumento rígido que atua por vibração sónica transversal para relaxar a musculatura intrínseca da cavidade bucal."
    ],
    "correctIndex": 1,
    "explanation": "O/A espátula lingual na inspeção da orofaringe pelo enfermeiro caracteriza-se biofisicamente por ser um alavanca de 1.ª classe usando os lábios/dentes como fulcro para deprimir suavemente a base da língua com pequeno esforço na haste exterior. Esta propriedade garante a adaptação funcional e a segurança do doente durante a intervenção clínica.",
    "distractorAnalysis": [
      "Está incorreta: a espátula lingual é apoiada anteriormente ou atua em cantilever, deprimindo a língua para baixo e não puxando para o palato.",
      "Está incorreta: a depressão da língua é mecânica e direta, não envolvendo bombas de vácuo ou expansão pneumática.",
      "Está incorreta: a espátula convencional de madeira ou plástico não emite ondas ultrassónicas de relaxamento motor."
    ],
    "nursingApplication": "O enfermeiro aplica este princípio ao manipular o/a espátula lingual na inspeção da orofaringe pelo enfermeiro: compreender a sua elasticidade, módulo de deformação e limites de resistência evita falhas mecânicas iatrogénicas, roturas acidentais e lesões teciduais na pessoa cuidada."
  },
  {
    "id": 2134,
    "topicId": 2,
    "question": "Na análise biomecânica e reológica de biomateriais em enfermagem, o/a carrinho elevador elétrico de transferência de doentes (guindaste com braço mecânico) desempenha um papel clínico crucial. Como se explica o seu comportamento à luz das propriedades mecânicas de tensão, elasticidade e materiais?",
    "options": [
      "Dispositivo pendular simples cujo centro de massa corporal pode sair do polígono de sustentação sem risco de capotamento.",
      "Mecanismo de elevação por mola helicoidal que dispensa travões mecânicos nos rodízios durante a manobra com o paciente.",
      "Sistema de alavanca com coluna de suporte que exige base alargada para manter a projeção vertical do centro de massa estável.",
      "Estrutura estática perfeitamente rígida que anula totalmente os momentos de força gerados pelo peso do doente transferido no ar."
    ],
    "correctIndex": 2,
    "explanation": "O/A carrinho elevador elétrico de transferência de doentes (guindaste com braço mecânico) caracteriza-se biofisicamente por ser um alavanca móvel atuada por pistão hidráulico que distribui a carga de elevação com vantagem mecânica de engenharia para transferir doentes tetraplégicos. Esta propriedade garante a adaptação funcional e a segurança do doente durante a intervenção clínica.",
    "distractorAnalysis": [
      "Está incorreta: se a linha de gravidade do conjunto ultrapassar a base de sustentação, o elevador tomba inevitavelmente.",
      "Está incorreta: o travamento dos rodízios e a abertura da base são obrigatórios para garantir estabilidade biomecânica.",
      "Está incorreta: o peso do doente gera um binário de força considerável que atua diretamente sobre o mastro do aparelho."
    ],
    "nursingApplication": "O enfermeiro aplica este princípio ao manipular o/a carrinho elevador elétrico de transferência de doentes (guindaste com braço mecânico): compreender a sua elasticidade, módulo de deformação e limites de resistência evita falhas mecânicas iatrogénicas, roturas acidentais e lesões teciduais na pessoa cuidada."
  },
  {
    "id": 2135,
    "topicId": 2,
    "question": "Na análise biomecânica e reológica de biomateriais em enfermagem, o/a fio de sutura monofilamentar de poliamida (Nylon) 3-0 desempenha um papel clínico crucial. Como se explica o seu comportamento à luz das propriedades mecânicas de tensão, elasticidade e materiais?",
    "options": [
      "Fio multifilamentar entrançado com baixíssima resiliência que mantém o nó cirúrgico firme através de uma única laçada simples.",
      "Material reabsorvível que sofre lise enzimática imediata em contacto com o fluido intersticial, perdendo a força em 24 horas.",
      "Monofilamento metálico maleável que retém a curvatura plástica imposta pelas mãos do cirurgião sem qualquer retorno elástico.",
      "Polímero monofilamentar sem capilaridade com elevada memória elástica, exigindo múltiplos nós para evitar o deslizamento."
    ],
    "correctIndex": 3,
    "explanation": "O/A fio de sutura monofilamentar de poliamida (Nylon) 3-0 caracteriza-se biofisicamente por ser um tensão máxima de tração de cerca de 450 MPa com elevada memória elástica, exigindo nós cirúrgicos múltiplos (3 a 4 nós) para evitar que o nó escorregue e desfaça a sutura. Esta propriedade garante a adaptação funcional e a segurança do doente durante a intervenção clínica.",
    "distractorAnalysis": [
      "Está incorreta: o nylon 3-0 é monofilamentar e possui alta memória elástica, exigindo nós adicionais de travamento seguro.",
      "Está incorreta: o nylon cirúrgico é não absorvível a curto prazo e retém a integridade mecânica durante semanas.",
      "Está incorreta: o fio é uma poliamida sintética polimérica e não uma liga metálica maleável sem elasticidade."
    ],
    "nursingApplication": "O enfermeiro aplica este princípio ao manipular o/a fio de sutura monofilamentar de poliamida (Nylon) 3-0: compreender a sua elasticidade, módulo de deformação e limites de resistência evita falhas mecânicas iatrogénicas, roturas acidentais e lesões teciduais na pessoa cuidada."
  },
  {
    "id": 2136,
    "topicId": 2,
    "question": "Na análise biomecânica e reológica de biomateriais em enfermagem, o/a pele humana jovem vs pele senil com dermatoporose desempenha um papel clínico crucial. Como se explica o seu comportamento à luz das propriedades mecânicas de tensão, elasticidade e materiais?",
    "options": [
      "A perda de elastina e colagénio tipo I reduz a resiliência dérmica, aumentando a vulnerabilidade a forças de cisalhamento e tração.",
      "A pele senil ganha rigidez e espessura elástica, tornando-se mais resistente à formação de lacerações por remoção de pensos.",
      "O envelhecimento transforma a pele num sólido perfeitamente elástico que recupera instantaneamente de qualquer deformação mecânica.",
      "A perda celular torna a derme impermeável a pressões externas, impedindo a oclusão capilar sob apoio corporal prolongado."
    ],
    "correctIndex": 0,
    "explanation": "O/A pele humana jovem vs pele senil com dermatoporose caracteriza-se biofisicamente por ser um a pele jovem tem rica matriz de fibras de elastina e colagénio tipo I com curva tensão-deformação ampla e alta resiliência; a pele senil perde 80% da elastina, tornando-se frágil com rotura à mínima tensão tangencial. Esta propriedade garante a adaptação funcional e a segurança do doente durante a intervenção clínica.",
    "distractorAnalysis": [
      "Está incorreta: a dermatoporose senil afina a derme e reduz a resistência tênsil, facilitando a formação de skin tears.",
      "Está incorreta: a pele perde fibras elásticas e torna-se menos complacente, incapaz de recuperação elástica instantânea.",
      "Está incorreta: a atrofia dérmica facilita a compressão e colapso microvascular sob proeminências ósseas acamadas."
    ],
    "nursingApplication": "O enfermeiro aplica este princípio ao manipular o/a pele humana jovem vs pele senil com dermatoporose: compreender a sua elasticidade, módulo de deformação e limites de resistência evita falhas mecânicas iatrogénicas, roturas acidentais e lesões teciduais na pessoa cuidada."
  },
  {
    "id": 2137,
    "topicId": 2,
    "question": "Na análise biomecânica e reológica de biomateriais em enfermagem, o/a tendão calcâneo (tendão de Aquiles) sob carga máxima desempenha um papel clínico crucial. Como se explica o seu comportamento à luz das propriedades mecânicas de tensão, elasticidade e materiais?",
    "options": [
      "Estrutura puramente frágil que se rompe catastrophicamente quando a tensão mecânica excede um por cento da carga corporal.",
      "Tecido fibroso viscoelástico com fibras de colagénio onduladas que absorve e devolve energia elástica durante a locomoção humana.",
      "Cabo inelástico de rigidez infinita que transmite a força dos gémeos sem qualquer amortecimento ou deformação mensurável.",
      "Material plástico amorfo que sofre alongamento irreversível permanente logo no primeiro passo da marcha matinal rotineira."
    ],
    "correctIndex": 1,
    "explanation": "O/A tendão calcâneo (tendão de Aquiles) sob carga máxima caracteriza-se biofisicamente por ser um suporta tensões de tração superiores a 100 MPa e forças de até 8000 N durante a corrida, deformando-se elasticamente 6 a 8% antes de atingir o limiar de microrrotura. Esta propriedade garante a adaptação funcional e a segurança do doente durante a intervenção clínica.",
    "distractorAnalysis": [
      "Está incorreta: o tendão de Aquiles é resistente e tenaz, suportando cargas dinâmicas até 6 a 8 vezes o peso corporal.",
      "Está incorreta: o tendão possui complacência elástica mensurável (deformando-se cerca de 4 a 6% sob carga fisiológica).",
      "Está incorreta: em cargas fisiológicas normais o tendão opera na zona elástica reversível, recuperando a sua forma."
    ],
    "nursingApplication": "O enfermeiro aplica este princípio ao manipular o/a tendão calcâneo (tendão de Aquiles) sob carga máxima: compreender a sua elasticidade, módulo de deformação e limites de resistência evita falhas mecânicas iatrogénicas, roturas acidentais e lesões teciduais na pessoa cuidada."
  },
  {
    "id": 2138,
    "topicId": 2,
    "question": "Na análise biomecânica e reológica de biomateriais em enfermagem, o/a artéria aorta elástica humana e efeito Windkessel desempenha um papel clínico crucial. Como se explica o seu comportamento à luz das propriedades mecânicas de tensão, elasticidade e materiais?",
    "options": [
      "A parede aórtica é perfeitamente rígida e inelástica, convertendo a onda de pressão ventricular num jato puramente intermitente e pulsátil.",
      "As fibras musculares da aorta contraem-se ativamente na sístole para travar a saída do sangue e reduzir a velocidade arterial.",
      "A elastina da túnica média confere alta complacência elástica, amortecendo a pulsação sistólica e assegurando o fluxo diastólico.",
      "A aorta comporta-se como um tubo puramente plástico que dilata a cada batimento cardíaco sem nunca recuperar o calibre basal."
    ],
    "correctIndex": 2,
    "explanation": "O/A artéria aorta elástica humana e efeito Windkessel caracteriza-se biofisicamente por ser um a parede da aorta possui alto teor de elastina (baixo Módulo de Young), expandindo-se elasticamente na sístole para absorver a onda de pressão e retraindo-se passivamente na diástole para manter o fluxo contínuo. Esta propriedade garante a adaptação funcional e a segurança do doente durante a intervenção clínica.",
    "distractorAnalysis": [
      "Está incorreta: a complacência aórtica é indispensável para amortecer a sístole e manter a perfusão diastólica contínua.",
      "Está incorreta: a aorta proximal não trava o sangue por contração ativa na sístole, expandindo elasticamente de forma passiva.",
      "Está incorreta: a deformação aórtica fisiológica é elástica e reversível, não sofrendo dilatação plástica permanente num vaso são."
    ],
    "nursingApplication": "O enfermeiro aplica este princípio ao manipular o/a artéria aorta elástica humana e efeito Windkessel: compreender a sua elasticidade, módulo de deformação e limites de resistência evita falhas mecânicas iatrogénicas, roturas acidentais e lesões teciduais na pessoa cuidada."
  },
  {
    "id": 2139,
    "topicId": 2,
    "question": "Na análise biomecânica e reológica de biomateriais em enfermagem, o/a ligamento cruzado anterior (LCA) do joelho desempenha um papel clínico crucial. Como se explica o seu comportamento à luz das propriedades mecânicas de tensão, elasticidade e materiais?",
    "options": [
      "Estrutura cartilagínea isotrópica cuja resistência à tração mecânica é rigorosamente idêntica em todos os planos espaciais.",
      "Feixe muscular contrátil autónomo que estabiliza o joelho através de reflexos motores rápidos gerados no próprio tendão.",
      "Membrana sinovial flexível sem resistência à tração cuja função mecânica consiste unicamente na produção de líquido articular.",
      "Ligamento viscoelástico e anisotrópico que resiste à translação anterior tibial, falhando sob rotação e valgo excessivos."
    ],
    "correctIndex": 3,
    "explanation": "O/A ligamento cruzado anterior (LCA) do joelho caracteriza-se biofisicamente por ser um comportamento viscoelástico com limite elástico em torno de 15% de deformação; torções bruscas com o pé fixo no solo ultrapassam a tensão de rutura, provocando rotura completa dos fascículos colagénicos. Esta propriedade garante a adaptação funcional e a segurança do doente durante a intervenção clínica.",
    "distractorAnalysis": [
      "Está incorreta: o ligamento é anisotrópico (com fibras colágenas alinhadas com as linhas de tração) e não isotrópico.",
      "Está incorreta: o LCA é um ligamento passivo fibroso denso e não possui sarcómeros ou contratilidade muscular ativa.",
      "Está incorreta: o ligamento cruzado anterior possui elevada resistência tênsil e é o principal restritor mecânico da tíbia."
    ],
    "nursingApplication": "O enfermeiro aplica este princípio ao manipular o/a ligamento cruzado anterior (LCA) do joelho: compreender a sua elasticidade, módulo de deformação e limites de resistência evita falhas mecânicas iatrogénicas, roturas acidentais e lesões teciduais na pessoa cuidada."
  },
  {
    "id": 2140,
    "topicId": 2,
    "question": "Na análise biomecânica e reológica de biomateriais em enfermagem, o/a balão de embolectomia de Fogarty para remoção de trombos arteriais desempenha um papel clínico crucial. Como se explica o seu comportamento à luz das propriedades mecânicas de tensão, elasticidade e materiais?",
    "options": [
      "Balão elastomérico complacente que deve ser insuflado com volume rigoroso para ocluir a luz sem lesionar a íntima vascular.",
      "Estrutura metálica rígida autoexpansível que desobstrui o vaso sanguíneo através de fragmentação mecânica de alta frequência.",
      "Tubo de látex poroso que liberta soluções trombolíticas no lúmen arterial através de escoamento capilar contínuo e rápido.",
      "Dispositivo de sucção helicoidal sem balão que aspira o coágulo mediante rotação de alta velocidade da ponta distal flexível."
    ],
    "correctIndex": 0,
    "explanation": "O/A balão de embolectomia de Fogarty para remoção de trombos arteriais caracteriza-se biofisicamente por ser um balão de elastómero de látex com calibração volumétrica rigorosa para ocluir a artéria sem exceder a tensão elástica da túnica média do vaso, prevenindo dissecções arteriais iatrogénicas. Esta propriedade garante a adaptação funcional e a segurança do doente durante a intervenção clínica.",
    "distractorAnalysis": [
      "Está incorreta: o cateter de Fogarty possui um balão distal de borracha macia e não uma fresa metálica rotativa de alta velocidade.",
      "Está incorreta: o balão extrai o trombo por tração mecânica suave e oclusiva, não sendo uma membrana perfurada de lise.",
      "Está incorreta: a embolectomia de Fogarty baseia-se na insuflação de balão retrógrado e não em trado giratório de aspiração."
    ],
    "nursingApplication": "O enfermeiro aplica este princípio ao manipular o/a balão de embolectomia de Fogarty para remoção de trombos arteriais: compreender a sua elasticidade, módulo de deformação e limites de resistência evita falhas mecânicas iatrogénicas, roturas acidentais e lesões teciduais na pessoa cuidada."
  },
  {
    "id": 2141,
    "topicId": 2,
    "question": "Na análise biomecânica e reológica de biomateriais em enfermagem, o/a compressas de gaze de algodão hidrófilo desempenha um papel clínico crucial. Como se explica o seu comportamento à luz das propriedades mecânicas de tensão, elasticidade e materiais?",
    "options": [
      "Matriz hidrofóbica sintética que repele qualquer fluido da ferida para manter a superfície lesada totalmente ressequida.",
      "Fibras celulósicas hidrófilas que absorvem exsudado por capilaridade, exigindo humidificação para não arrancar tecido novo.",
      "Membrana colágena reabsorvível que se funde quimicamente com as células epiteliais sem necessidade de mudança periódica.",
      "Filamento inorgânico condutor que dissipa cargas eletrostáticas para estimular a migração acelerada de queratinócitos basais."
    ],
    "correctIndex": 1,
    "explanation": "O/A compressas de gaze de algodão hidrófilo caracteriza-se biofisicamente por ser um estrutura têxtil com comportamento mecânico de absorção por capilaridade e retenção de fluidos sem libertação de resíduos de fibras no leito cirúrgico. Esta propriedade garante a adaptação funcional e a segurança do doente durante a intervenção clínica.",
    "distractorAnalysis": [
      "Está incorreta: o algodão hidrófilo tem forte afinidade por água e secreções, absorvendo grandes volumes de exsudado.",
      "Está incorreta: a gaze simples não é um curativo reabsorvível e requer troca mecânica regular nos cuidados a feridas.",
      "Está incorreta: a compressa de algodão é um penso passivo tradicional e não um curativo bioelétrico de estimulação celular."
    ],
    "nursingApplication": "O enfermeiro aplica este princípio ao manipular o/a compressas de gaze de algodão hidrófilo: compreender a sua elasticidade, módulo de deformação e limites de resistência evita falhas mecânicas iatrogénicas, roturas acidentais e lesões teciduais na pessoa cuidada."
  },
  {
    "id": 2142,
    "topicId": 2,
    "question": "Na análise biomecânica e reológica de biomateriais em enfermagem, o/a fio de sutura farpado unidirecional sem necessidade de nós (tipo V-Loc) desempenha um papel clínico crucial. Como se explica o seu comportamento à luz das propriedades mecânicas de tensão, elasticidade e materiais?",
    "options": [
      "Fio elástico contínuo que encolhe gradualmente por ação do calor corporal, aumentando a compressão na ferida cirúrgica.",
      "Sutura condutora que funde as margens teciduais através de correntes de radiofrequência emitidas ao longo dos microganchos.",
      "Microfarpas que ancoram na derme, distribuindo a tensão tênsil ao longo da sutura e eliminando a isquemia focal dos nós.",
      "Fio tubular oco concebido especificamente para injetar analgésicos locais diretamente no interior dos lábios da incisão."
    ],
    "correctIndex": 2,
    "explanation": "O/A fio de sutura farpado unidirecional sem necessidade de nós (tipo V-Loc) caracteriza-se biofisicamente por ser um fio sintético absorvível com microfarpas que ancoram nas fibras de colagénio, distribuindo a tensão de aproximação tecidual uniformemente ao longo de toda a ferida. Esta propriedade garante a adaptação funcional e a segurança do doente durante a intervenção clínica.",
    "distractorAnalysis": [
      "Está incorreta: o fio farpado não contrai termicamente, retendo o comprimento imposto durante a aproximação dos tecidos.",
      "Está incorreta: a aproximação das bordas é puramente mecânica e de ancoragem física, sem emissão de correntes térmicas.",
      "Está incorreta: o fio de sutura farpado é sólido e destina-se ao encerramento tecidual e não à infusão de medicamentos."
    ],
    "nursingApplication": "O enfermeiro aplica este princípio ao manipular o/a fio de sutura farpado unidirecional sem necessidade de nós (tipo V-Loc): compreender a sua elasticidade, módulo de deformação e limites de resistência evita falhas mecânicas iatrogénicas, roturas acidentais e lesões teciduais na pessoa cuidada."
  },
  {
    "id": 2143,
    "topicId": 2,
    "question": "Na análise biomecânica e reológica de biomateriais em enfermagem, o/a tubo de drenagem pleural torácico de silicone com linha radiopaca desempenha um papel clínico crucial. Como se explica o seu comportamento à luz das propriedades mecânicas de tensão, elasticidade e materiais?",
    "options": [
      "Tubo de poliuretano com baixíssimo Módulo de Young que colapsa totalmente durante a inspiração para reter o líquido pleural.",
      "Cânula metálica rígida concebida para resistir a impactos torácicos diretos sem permitir qualquer curvatura anatómica no doente.",
      "Condutor osmótico poroso que permite a troca bidirecional de gases entre a cavidade torácica e a atmosfera hospitalar livre.",
      "Elastómero de silicone com resiliência elástica adequada para evitar o colapso do lúmen sob a pressão negativa intrapleural."
    ],
    "correctIndex": 3,
    "explanation": "O/A tubo de drenagem pleural torácico de silicone com linha radiopaca caracteriza-se biofisicamente por ser um tubo com rigidez calculada para não colabar sob a pressão negativa intrapleural de -20 cmH₂O durante a inspiração profunda, mantendo a drenagem de ar ou sangue desobstruída. Esta propriedade garante a adaptação funcional e a segurança do doente durante a intervenção clínica.",
    "distractorAnalysis": [
      "Está incorreta: a tubuladura torácica deve manter a permeabilidade do lúmen sob vácuo sem colapsar na inspiração profunda.",
      "Está incorreta: os drenos torácicos são constituídos por polímeros flexíveis biocompatíveis e não por canos metálicos rígidos.",
      "Está incorreta: o dreno pleural deve ser ligado a um selo de água ou sistema valvular fechado para evitar pneumotórax aberto."
    ],
    "nursingApplication": "O enfermeiro aplica este princípio ao manipular o/a tubo de drenagem pleural torácico de silicone com linha radiopaca: compreender a sua elasticidade, módulo de deformação e limites de resistência evita falhas mecânicas iatrogénicas, roturas acidentais e lesões teciduais na pessoa cuidada."
  },
  {
    "id": 2144,
    "topicId": 2,
    "question": "Na análise biomecânica e reológica de biomateriais em enfermagem, o/a luvas cirúrgicas de biopolímero de neoprene desempenha um papel clínico crucial. Como se explica o seu comportamento à luz das propriedades mecânicas de tensão, elasticidade e materiais?",
    "options": [
      "Polímero sintético livre de proteínas de látex com resiliência e flexibilidade que preservam a sensibilidade tátil e a proteção.",
      "Filamento de cloreto de polivinilo rígido com memória mecânica permanente que anula as forças musculares intrínsecas da mão.",
      "Borracha natural vulcanizada enriquecida com queratina pura concebida para dissolver resíduos orgânicos por hidrólise direta.",
      "Membrana metálica micrométrica que protege os tecidos através do bloqueio total de qualquer deformação elástica dos dedos."
    ],
    "correctIndex": 0,
    "explanation": "O/A luvas cirúrgicas de biopolímero de neoprene caracteriza-se biofisicamente por ser um oferecem elasticidade e tensão de deformação semelhantes ao látex natural com taxa de deformação relativa ε > 600% antes da rutura, sendo isentas das proteínas alergénicas do látex. Esta propriedade garante a adaptação funcional e a segurança do doente durante a intervenção clínica.",
    "distractorAnalysis": [
      "Está incorreta: o policloropreno (neoprene) é um elastómero altamente flexível e adaptável aos movimentos articulares da mão.",
      "Está incorreta: o neoprene é um composto 100% sintético e não contém queratina nem enzimas de digestão biológica de sujidade.",
      "Está incorreta: luvas médicas não utilizam blindagem metálica rígida, a qual impediria a sensibilidade tátil do enfermeiro."
    ],
    "nursingApplication": "O enfermeiro aplica este princípio ao manipular o/a luvas cirúrgicas de biopolímero de neoprene: compreender a sua elasticidade, módulo de deformação e limites de resistência evita falhas mecânicas iatrogénicas, roturas acidentais e lesões teciduais na pessoa cuidada."
  },
  {
    "id": 2145,
    "topicId": 2,
    "question": "Na física aplicada aos materiais e dispositivos de saúde, como se caracteriza o comportamento do/a módulo elástico de Young de próteses de titânio (E ~ 110 GPa) sob solicitações mecânicas?",
    "options": [
      "Possui rigidez inferior à do tecido adiposo subcutâneo, deformando-se extensamente sob qualquer carga gravitacional na marcha.",
      "Apresenta rigidez intermédia entre o osso cortical e o aço, atenuando o stress shielding e a reabsorção óssea periprotésica.",
      "Apresenta comportamento superelástico que converte 100% do impacto mecânico do passo em energia térmica dissipada no osso.",
      "Comporta-se como um compósito frágil que fratura espontaneamente se for submetido a esforços normais de flexão articular."
    ],
    "correctIndex": 1,
    "explanation": "O/A módulo elástico de Young de próteses de titânio (E ~ 110 GPa) atua na prática clínica através do seguinte mecanismo biomecânico: rigidez intermediária entre o osso cortical (18 GPa) e o aço cirúrgico (200 GPa), reduzindo o fenómeno de 'stress shielding' ou reabsorção óssea periprotésica por desuso mecânico.",
    "distractorAnalysis": [
      "Está incorreta: o titânio médico possui Módulo de Young de cerca de 110 GPa, muito superior ao tecido adiposo ou tecidos moles.",
      "Está incorreta: as próteses femorais de titânio atuam como suporte estrutural resistente e não como amortecedores superelásticos térmicos.",
      "Está incorreta: as ligas de titânio biocompatíveis possuem elevada tenacidade à fratura e resistência à fadiga mecânica."
    ],
    "nursingApplication": "O enfermeiro vigia o desempenho do/a módulo elástico de Young de próteses de titânio (E ~ 110 GPa): o domínio destas propriedades assegura a prevenção de complicações vasculares, necrose de tecidos e falhas mecânicas durante os cuidados diários de saúde."
  },
  {
    "id": 2146,
    "topicId": 2,
    "question": "Na física aplicada aos materiais e dispositivos de saúde, como se caracteriza o comportamento do/a propriedades de fluência (creep) dos discos intervertebrais sob solicitações mecânicas?",
    "options": [
      "Aumento contínuo da altura intervertebral durante o dia de pé devido à atração hidrostática osmótica contínua dos proteoglicanos.",
      "Deformação plástica irreversível que provoca perda definitiva de 1 cm de estatura corporal em cada ciclo de 24 horas consecutivas.",
      "Perda progressiva de água no núcleo pulposo sob carga compressiva diária, recuperando espessura elástica no repouso noturno.",
      "Comportamento puramente rígido que mantém a espessura e a hidratação dos discos inalteradas independentemente da carga aplicada."
    ],
    "correctIndex": 2,
    "explanation": "O/A propriedades de fluência (creep) dos discos intervertebrais atua na prática clínica através do seguinte mecanismo biomecânico: perda progressiva de água sob a carga vertical durante o dia com diminuição da altura do disco, recuperando a hidratação e a espessura elástica durante o repouso noturno no leito.",
    "distractorAnalysis": [
      "Está incorreta: a compressão contínua expele água lentamente do disco ao longo do dia, reduzindo a sua altura em 1 a 2 cm.",
      "Está incorreta: a perda diária de altura por fluência mecânica é reversível durante o repouso em decúbito no leito.",
      "Está incorreta: o disco intervertebral é viscoelástico e sofre deformação dependente do tempo (creep) sob a gravidade."
    ],
    "nursingApplication": "O enfermeiro vigia o desempenho do/a propriedades de fluência (creep) dos discos intervertebrais: o domínio destas propriedades assegura a prevenção de complicações vasculares, necrose de tecidos e falhas mecânicas durante os cuidados diários de saúde."
  },
  {
    "id": 2147,
    "topicId": 2,
    "question": "Na física aplicada aos materiais e dispositivos de saúde, como se caracteriza o comportamento do/a elasticidade das paredes arteriais no envelhecimento (arteriosclerose) sob solicitações mecânicas?",
    "options": [
      "A degradação do colagénio vascular torna as artérias extremamente complacentes, reduzindo a pressão sistólica em idosos.",
      "A perda de tónus venoso na periferia dilata a aorta e estabiliza a pressão diferencial entre a sístole e a diástole sistémica.",
      "O envelhecimento vascular restringe a condutividade elétrica do endotélio, bloqueando o influxo osmótico de sódio para o lúmen.",
      "A substituição de elastina por colagénio rígido eleva o Módulo de Young arterial, aumentando a amplitude da pressão de pulso."
    ],
    "correctIndex": 3,
    "explanation": "O/A elasticidade das paredes arteriais no envelhecimento (arteriosclerose) atua na prática clínica através do seguinte mecanismo biomecânico: substituição das fibras de elastina por fibras rígidas de colagénio, aumentando o Módulo de Young arterial e elevando a pressão arterial de pulso (sistólica muito alta com diastólica normal ou baixa).",
    "distractorAnalysis": [
      "Está incorreta: o envelhecimento arteriosclerótico enrijece as paredes da aorta e aumenta a pressão sistólica e a de pulso.",
      "Está incorreta: a dilatação venosa periférica não altera a rigidez intrínseca intrínseca (Módulo de Young) das artérias elásticas.",
      "Está incorreta: o mecanismo da hipertensão sistólica isolada é puramente mecânico-estrutural (perda de elasticidade parietal)."
    ],
    "nursingApplication": "O enfermeiro vigia o desempenho do/a elasticidade das paredes arteriais no envelhecimento (arteriosclerose): o domínio destas propriedades assegura a prevenção de complicações vasculares, necrose de tecidos e falhas mecânicas durante os cuidados diários de saúde."
  },
  {
    "id": 2148,
    "topicId": 2,
    "question": "Na física aplicada aos materiais e dispositivos de saúde, como se caracteriza o comportamento do/a suturas metálicas de agrafos cirúrgicos de aço sob solicitações mecânicas?",
    "options": [
      "Sofrem deformação plástica irreversível sob a compressão do aplicador, mantendo os bordos da incisão coaptados sem recuo.",
      "Apresentam retorno elástico instantâneo após o disparo, afastando as margens cirúrgicas da pele por tração divergente.",
      "Fundem-se por reação endotérmica com a queratina cutânea, dissolvendo a sua estrutura metálica ao fim de setenta e duas horas.",
      "Comportam-se como molas viscoelásticas que aumentam continuamente a sua compressão conforme a ferida cirúrgica cicatriza."
    ],
    "correctIndex": 0,
    "explanation": "O/A suturas metálicas de agrafos cirúrgicos de aço atua na prática clínica através do seguinte mecanismo biomecânico: apresentam comportamento puramente plástico no fecho com o agrafador mecânico, mantendo as bordas da pele coaptadas sem retorno elástico.",
    "distractorAnalysis": [
      "Está incorreta: os agrafos cirúrgicos de aço sofrem deformação plástica permanente para manter a ferida fechada sem reabrir.",
      "Está incorreta: os agrafos de aço são inertes e inabsorvíveis, exigindo remoção mecânica com extrator próprio de agrafos.",
      "Está incorreta: o agrafo mantém a sua conformação geométrica fixa e não aumenta a compressão com a cicatrização."
    ],
    "nursingApplication": "O enfermeiro vigia o desempenho do/a suturas metálicas de agrafos cirúrgicos de aço: o domínio destas propriedades assegura a prevenção de complicações vasculares, necrose de tecidos e falhas mecânicas durante os cuidados diários de saúde."
  },
  {
    "id": 2149,
    "topicId": 2,
    "question": "Na física aplicada aos materiais e dispositivos de saúde, como se caracteriza o comportamento do/a comportamento reológico do líquido sinovial articular sob solicitações mecânicas?",
    "options": [
      "Fluido newtoniano clássico cuja viscosidade mecânica se mantém estritamente constante independentemente da velocidade articular.",
      "Fluido pseudoplástico rico em hialuronato que é viscoso em repouso e torna-se fluido com o aumento da taxa de cisalhamento.",
      "Líquido puramente incompressível que solidifica instantaneamente em contacto com a cartilagem hialina durante a corrida humana.",
      "Suspensão aquosa de lípidos que atua exclusivamente por atrito de Coulomb em superfícies articulares perfeitamente ressequidas."
    ],
    "correctIndex": 1,
    "explanation": "O/A comportamento reológico do líquido sinovial articular atua na prática clínica através do seguinte mecanismo biomecânico: fluido pseudoplástico rico em ácido hialurónico que é altamente viscoso em repouso (lubrificação protetora) e torna-se fluido e pouco viscoso sob movimento rápido (mínima fricção articular).",
    "distractorAnalysis": [
      "Está incorreta: o líquido sinovial é não-newtoniano (pseudoplástico) e a sua viscosidade diminui com a velocidade de movimento.",
      "Está incorreta: o líquido sinovial não solidifica com o movimento, preservando a sua função lubrificante fluida em alta taxa de deformação.",
      "Está incorreta: a lubrificação articular biológica é hidrodinâmica e limite, mantida por matriz altamente hidratada com hialuronato."
    ],
    "nursingApplication": "O enfermeiro vigia o desempenho do/a comportamento reológico do líquido sinovial articular: o domínio destas propriedades assegura a prevenção de complicações vasculares, necrose de tecidos e falhas mecânicas durante os cuidados diários de saúde."
  },
  {
    "id": 2150,
    "topicId": 2,
    "question": "Na física aplicada aos materiais e dispositivos de saúde, como se caracteriza o comportamento do/a tubos de aspiração cirúrgica de silicone médico reforçado com espiral sob solicitações mecânicas?",
    "options": [
      "A espiral interna atua como condutora de calor que mantém o sangue aspirado permanentemente à temperatura de 37 °C no tubo.",
      "A espiral foi desenhada unicamente para aumentar a flexibilidade elástica longitudinal, permitindo esticar o tubo até ao dobro.",
      "A espiral metálica ou plástica incorporada reforça a parede tubular contra o colapso transmural gerado pela sucção negativa.",
      "O reforço helicoidal gera um campo magnético rotativo que impede a coagulação de fluidos viscosos ao longo da tubuladura."
    ],
    "correctIndex": 2,
    "explanation": "O/A tubos de aspiração cirúrgica de silicone médico reforçado com espiral atua na prática clínica através do seguinte mecanismo biomecânico: a espiral rígida de aço ou polímero impede o colapso do tubo sob vácuo de alta sucção (resistência à pressão negativa de colapso).",
    "distractorAnalysis": [
      "Está incorreta: a finalidade primária da armação em espiral é mecânica: resistir à pressão de colapso transmural sob vácuo.",
      "Está incorreta: a espiral não tem função de aquecimento térmico nem é ligada a nenhuma fonte de corrente elétrica ativa.",
      "Está incorreta: o reforço espiralado não possui propriedades magnéticas nem afeta a cascata bioquímica da coagulação."
    ],
    "nursingApplication": "O enfermeiro vigia o desempenho do/a tubos de aspiração cirúrgica de silicone médico reforçado com espiral: o domínio destas propriedades assegura a prevenção de complicações vasculares, necrose de tecidos e falhas mecânicas durante os cuidados diários de saúde."
  },
  {
    "id": 2151,
    "topicId": 2,
    "question": "Na física aplicada aos materiais e dispositivos de saúde, como se caracteriza o comportamento do elastómero de vedação em seringas pré-cheias sob solicitações mecânicas?",
    "options": [
      "Elastómero altamente adesivo que se funde quimicamente com as paredes da seringa, exigindo impacto inicial violento no êmbolo.",
      "Polímero termoplástico que expande continuamente sob temperatura ambiente, bloqueando o avanço do êmbolo sob pressão manual.",
      "Membrana metálica semipermeável concebida para permitir a saída contínua de água e manter o fármaco concentrado no cilindro.",
      "Borracha sintética com baixo atrito cinético que assegura vedação estanque e deslizamento suave sem solavancos no cilindro."
    ],
    "correctIndex": 3,
    "explanation": "O/A elastómero de vedação em seringas pré-cheias de heparina atua na prática clínica através do seguinte mecanismo biomecânico: borracha sintética de alta estanquicidade que mantém a esterilidade e impede a entrada de ar com coeficiente de atrito cinético constante no cilindro.",
    "distractorAnalysis": [
      "Está incorreta: o êmbolo deve deslizar com atrito constante e suave para permitir uma administração precisa e sem bloqueios.",
      "Está incorreta: os materiais de vedação são concebidos com grande estabilidade dimensional para não encravar no cilindro.",
      "Está incorreta: o êmbolo é um elastómero estanque e impermeável e não uma membrana metálica porosa de concentração osmótica."
    ],
    "nursingApplication": "O enfermeiro vigia o desempenho do/a elastómero de vedação em seringas pré-cheias de heparina: o domínio destas propriedades assegura a prevenção de complicações vasculares, necrose de tecidos e falhas mecânicas durante os cuidados diários de saúde."
  },
  {
    "id": 2152,
    "topicId": 2,
    "question": "Na física aplicada aos materiais e dispositivos de saúde, como se caracteriza o comportamento mecânico dos fixadores externos ortopédicos de fibra de carbono?",
    "options": [
      "Compósito de carbono com elevada rigidez mecânica e radiotransparência, viabilizando o controlo radiológico sem artefactos.",
      "Material isotrópico com baixa tenacidade que sofre deformação plástica contínua sob o peso do membro para acelerar o calo ósseo.",
      "Liga metálica condutora concebida para dissipar o calor gerado pelas contrações musculares através de radiação infravermelha.",
      "Polímero reabsorvível que perde gradualmente a sua integridade estrutural em três dias de exposição à humidade do ar ambiente."
    ],
    "correctIndex": 0,
    "explanation": "O/A fixador externo ortopédico de carbono atua na prática clínica através do seguinte mecanismo biomecânico: material compósito de fibra de carbono com altíssima rigidez e radiotransparência, permitindo o controlo radiológico da fratura sem artefactos metálicos opacos.",
    "distractorAnalysis": [
      "Está incorreta: o fixador deve manter rigidez elástica estrita para estabilizar a fratura sem sofrer deformação plástica.",
      "Está incorreta: a fibra de carbono em matriz polimérica é um compósito leve e não uma liga metálica de dissipação térmica.",
      "Está incorreta: os fixadores de carbono são materiais duráveis e não degradáveis durante todo o tratamento ortopédico."
    ],
    "nursingApplication": "O enfermeiro vigia o desempenho do/a fixador externo ortopédico de carbono: o domínio destas propriedades assegura a prevenção de complicações vasculares, necrose de tecidos e falhas mecânicas durante os cuidados diários de saúde."
  },
  {
    "id": 2153,
    "topicId": 2,
    "question": "Na física aplicada aos materiais e dispositivos de saúde, como se caracteriza a atuação biofísica das meias anti-embolia cirúrgicas em doentes acamados?",
    "options": [
      "Aplicam pressão constante superior a 40 mmHg em todo o membro para interromper temporariamente a circulação venosa profunda.",
      "Exercem compressão graduada decrescente de cerca de 18 mmHg no tornozelo e 8 mmHg na coxa, acelerando o retorno venoso no leito.",
      "Atuam por aquecimento endotérmico da musculatura da perna, estimulando a vasodilatação arteriolar sem qualquer ação mecânica.",
      "Exercem maior pressão na coxa do que no tornozelo para empurrar o sangue venoso por gravidade invertida até à extremidade do pé."
    ],
    "correctIndex": 1,
    "explanation": "O/A meias anti-embolia cirúrgicas brancas (TED stockings) atua na prática clínica através do seguinte mecanismo biomecânico: exercem pressão profilática de 18 mmHg no tornozelo e 8 mmHg na coxa para doentes acamados em pós-operatório sem mobilidade ativa.",
    "distractorAnalysis": [
      "Está incorreta: pressões de 40 mmHg em doentes acamados poderiam causar isquemia tecidual e colapso microvascular arterial.",
      "Está incorreta: a ação terapêutica é puramente hemodinâmica pela redução mecânica do raio venoso e não térmica.",
      "Está incorreta: um gradiente com pressão maior proximal atuaria como garrote venoso, impedindo a subida do sangue ao coração."
    ],
    "nursingApplication": "O enfermeiro vigia o desempenho do/a meias anti-embolia cirúrgicas brancas (TED stockings): o domínio destas propriedades assegura a prevenção de complicações vasculares, necrose de tecidos e falhas mecânicas durante os cuidados diários de saúde."
  },
  {
    "id": 2154,
    "topicId": 2,
    "question": "Na física aplicada aos materiais e dispositivos de saúde, como se caracteriza a resposta mecânica das tiras adesivas de aproximação cutânea (Steri-Strips)?",
    "options": [
      "Constituem películas plásticas de alta complacência que esticam livremente até três vezes o tamanho para alargar a cicatriz.",
      "Fitas metálicas que realizam a aproximação das margens cutâneas por fusão térmica direta com as proteínas epidérmicas locais.",
      "Apresentam reforço com filamentos de poliéster para assegurar tensão tênsil constante e evitar o afastamento das margens.",
      "Membranas hidrofílicas que se dissolvem completamente nas primeiras duas horas após aplicação para libertar antibióticos tópicos."
    ],
    "correctIndex": 2,
    "explanation": "O/A tiras adesivas esterilizadas de aproximação cutânea (Steri-Strips) atua na prática clínica através do seguinte mecanismo biomecânico: reforçadas com filamentos de poliéster para manter tensão de tração constante nas bordas da ferida após remoção precoce de pontos de sutura.",
    "distractorAnalysis": [
      "Está incorreta: os filamentos de poliéster conferem baixa complacência para manter a ferida aproximada sem deiscência.",
      "Está incorreta: a adesão é química por polímero acrílico sensível à pressão e não por soldadura metálica térmica.",
      "Está incorreta: as tiras são estruturais e devem permanecer aderidas durante dias para garantir a coaptação das margens."
    ],
    "nursingApplication": "O enfermeiro vigia o desempenho do/a tiras adesivas esterilizadas de aproximação cutânea (Steri-Strips): o domínio destas propriedades assegura a prevenção de complicações vasculares, necrose de tecidos e falhas mecânicas durante os cuidados diários de saúde."
  },
  {
    "id": 2155,
    "topicId": 2,
    "question": "Na biomecânica do posicionamento no leito, qual é o efeito físico de elevar a cabeceira a mais de 30° sem suporte adequado nos membros inferiores?",
    "options": [
      "O peso corporal é transferido integralmente para a região cervical, anulando qualquer compressão mecânica sobre o sacro e cóccix.",
      "A pressão hidrostática intracapilar duplica nos pés do doente, impedindo qualquer alteração isquémica nos tecidos moles glúteos.",
      "O atrito entre a pele e o lençol anula-se espontaneamente, convertendo o movimento corporal num deslizamento sem qualquer tensão.",
      "O tronco desliza para a frente enquanto a pele fica retida no lençol, gerando forças de cisalhamento que ocluem arteríolas profundas."
    ],
    "correctIndex": 3,
    "explanation": "O/A módulo elástico de Young de próteses de titânio (E ~ 110 GPa) atua na prática clínica através do seguinte mecanismo biomecânico: rigidez intermediária entre o osso cortical (18 GPa) e o aço cirúrgico (200 GPa), reduzindo o fenómeno de 'stress shielding' ou reabsorção óssea periprotésica por desuso mecânico.",
    "distractorAnalysis": [
      "Está incorreta: a elevação da cabeceira concentra a carga gravitacional e o cisalhamento nos tecidos sacrais profundos.",
      "Está incorreta: o deslizamento no leito agrava o cisalhamento nos tecidos glúteos e sacrais e não nos pés.",
      "Está incorreta: o atrito estático retém a epiderme enquanto o esqueleto desce, provocando deformação e oclusão vascular."
    ],
    "nursingApplication": "O enfermeiro vigia o desempenho do/a módulo elástico de Young de próteses de titânio (E ~ 110 GPa): o domínio destas propriedades assegura a prevenção de complicações vasculares, necrose de tecidos e falhas mecânicas durante os cuidados diários de saúde."
  },
  {
    "id": 2156,
    "topicId": 2,
    "question": "Ao levantar um peso do chão ou transferir um doente, por que razão a flexão dos joelhos com tronco ereto é biomecanicamente protetora da coluna?",
    "options": [
      "Aproxima a carga do eixo articular do corpo, encurtando o braço de momento da resistência e reduzindo a compressão no disco L5-S1.",
      "Transfere toda a força gravitacional para os meniscos do joelho, anulando completamente a necessidade de esforço contrátil muscular.",
      "Converte a coluna lombar numa alavanca de 2.ª classe com vantagem mecânica infinita, dispensando a contração dos músculos eretores.",
      "Permite que a linha de gravidade do tronco saia da base de sustentação sem comprometer o equilíbrio postural dinâmico do cuidador."
    ],
    "correctIndex": 0,
    "explanation": "O/A propriedades de fluência (creep) dos discos intervertebrais atua na prática clínica através do seguinte mecanismo biomecânico: perda progressiva de água sob a carga vertical durante o dia com diminuição da altura do disco, recuperando a hidratação e a espessura elástica durante o repouso noturno no leito.",
    "distractorAnalysis": [
      "Está incorreta: os músculos dos membros inferiores continuam a exercer trabalho mecânico vigoroso para erguer o corpo.",
      "Está incorreta: a coluna funciona essencialmente como alavanca interfixa de 1.ª classe com braço de esforço muscular curto.",
      "Está incorreta: a linha de gravidade deve permanecer rigorosamente dentro do polígono de apoio para evitar desequilíbrios e quedas."
    ],
    "nursingApplication": "O enfermeiro vigia o desempenho do/a propriedades de fluência (creep) dos discos intervertebrais: o domínio destas propriedades assegura a prevenção de complicações vasculares, necrose de tecidos e falhas mecânicas durante os cuidados diários de saúde."
  },
  {
    "id": 2157,
    "topicId": 2,
    "question": "Do ponto de vista da física do atrito, qual é a principal vantagem de utilizar um lençol de transferência ou tábua deslizante no reposicionamento?",
    "options": [
      "Converte a massa corporal do doente numa força ascendente que anula temporariamente a atração da gravidade exercida pela Terra.",
      "Diminui o coeficiente de atrito de deslizamento entre o doente e o leito, reduzindo a força horizontal exigida para a mobilização.",
      "Transforma a tração horizontal do enfermeiro em compressão vertical pura, aumentando o atrito para travar o paciente no colchão.",
      "Aumenta a resistência mecânica da pele através da transmissão contínua de cargas eletrostáticas libertadas pelo material polimérico."
    ],
    "correctIndex": 1,
    "explanation": "O/A elasticidade das paredes arteriais no envelhecimento (arteriosclerose) atua na prática clínica através do seguinte mecanismo biomecânico: substituição das fibras de elastina por fibras rígidas de colagénio, aumentando o Módulo de Young arterial e elevando a pressão arterial de pulso (sistólica muito alta com diastólica normal ou baixa).",
    "distractorAnalysis": [
      "Está incorreta: o dispositivo atua na redução do atrito mecânico de interface (F = μ·N) e não altera a massa ou gravidade.",
      "Está incorreta: o objetivo é facilitar o deslizamento suave e proteger os tecidos moles contra tensões tangenciais de corte.",
      "Está incorreta: o efeito é tribológico de baixo atrito superficial e não envolve estimulação eletrostática da pele."
    ],
    "nursingApplication": "O enfermeiro vigia o desempenho do/a elasticidade das paredes arteriais no envelhecimento (arteriosclerose): o domínio destas propriedades assegura a prevenção de complicações vasculares, necrose de tecidos e falhas mecânicas durante os cuidados diários de saúde."
  },
  {
    "id": 2158,
    "topicId": 2,
    "question": "Num doente com fratura do fémur submetido a tração cutânea de Buck com polia simples fixa, qual é o papel físico dessa polia no sistema?",
    "options": [
      "Duplica a força de tração mecânica aplicada na perna fraturada sem necessidade de acrescentar massa ao peso suspenso no sistema.",
      "Reduz a aceleração gravítica local pela metade para diminuir o espasmo muscular involuntário associado à instabilidade óssea.",
      "Altera a direção da linha de ação da força peso para o plano horizontal do membro, mantendo o módulo da força inalterado (VM = 1).",
      "Converte a força peso contínua numa oscilação ressonante periódica que acelera a deposição de cálcio no hematoma da fratura."
    ],
    "correctIndex": 2,
    "explanation": "O/A suturas metálicas de agrafos cirúrgicos de aço atua na prática clínica através do seguinte mecanismo biomecânico: apresentam comportamento puramente plástico no fecho com o agrafador mecânico, mantendo as bordas da pele coaptadas sem retorno elástico.",
    "distractorAnalysis": [
      "Está incorreta: polias fixas simples apenas redirecionam a força sem gerar vantagem mecânica de multiplicação (VM = 1).",
      "Está incorreta: as polias mecânicas não possuem qualquer capacidade de alterar a aceleração gravítica da Terra.",
      "Está incorreta: a tração de Buck aplica uma força estática contínua para alinhamento e redução do espasmo muscular doloroso."
    ],
    "nursingApplication": "O enfermeiro vigia o desempenho do/a suturas metálicas de agrafos cirúrgicos de aço: o domínio destas propriedades assegura a prevenção de complicações vasculares, necrose de tecidos e falhas mecânicas durante os cuidados diários de saúde."
  },
  {
    "id": 2159,
    "topicId": 2,
    "question": "Num sistema ortopédico de tração que utiliza uma polia móvel ligada ao estribo de tração esquelética, qual é a vantagem mecânica ideal (VM)?",
    "options": [
      "VM = 1, mantendo rigorosamente a mesma intensidade de tração mecânica independentemente do número de segmentos de cabo de suporte.",
      "VM = 0,5, reduzindo a força mecânica exercida no membro fraturado para metade da massa suspensa na extremidade livre da corda.",
      "VM = 4, quadruplicando a intensidade da força mecânica de tração através da subdivisão geométrica do diâmetro da roldana móvel.",
      "VM = 2, permitindo que uma massa suspensa de 4 kg produza uma força de tração resultante de cerca de 8 kgf (aproximadamente 78 N)."
    ],
    "correctIndex": 3,
    "explanation": "O/A comportamento reológico do líquido sinovial articular atua na prática clínica através do seguinte mecanismo biomecânico: fluido pseudoplástico rico em ácido hialurónico que é altamente viscoso em repouso (lubrificação protetora) e torna-se fluido e pouco viscoso sob movimento rápido (mínima fricção articular).",
    "distractorAnalysis": [
      "Está incorreta: a polia móvel divide a sustentação por duas cordas, gerando uma vantagem mecânica de duplicação (VM = 2).",
      "Está incorreta: uma vantagem mecânica de 0,5 reduziria a tração, ao passo que a polia móvel multiplica a força por dois.",
      "Está incorreta: a obtenção de VM = 4 exigiria um cadernal composto com duas polias móveis em paralelo e não apenas uma."
    ],
    "nursingApplication": "O enfermeiro vigia o desempenho do/a comportamento reológico do líquido sinovial articular: o domínio destas propriedades assegura a prevenção de complicações vasculares, necrose de tecidos e falhas mecânicas durante os cuidados diários de saúde."
  },
  {
    "id": 2160,
    "topicId": 2,
    "question": "Qual é o princípio biofísico dos colchões de ar alternado na prevenção de lesões por pressão em doentes acamados de alto risco?",
    "options": [
      "Alternam o enchimento pneumático de células para aliviar periodicamente a pressão abaixo da perfusão capilar, restaurando o fluxo.",
      "Mantêm uma pressão contínua superior a 80 mmHg em todos os pontos anatómicos de contacto para drenar o edema dos tecidos moles.",
      "Aquecem a epiderme a 42 °C para acelerar o metabolismo celular e compensar a redução local do fluxo sanguíneo nas áreas de apoio.",
      "Convertem as pressões corporais em vibrações ultrassónicas para desfazer microtrombos nos capilares do tecido celular subcutâneo."
    ],
    "correctIndex": 0,
    "explanation": "O/A tubos de aspiração cirúrgica de silicone médico reforçado com espiral atua na prática clínica através do seguinte mecanismo biomecânico: a espiral rígida de aço ou polímero impede o colapso do tubo sob vácuo de alta sucção (resistência à pressão negativa de colapso).",
    "distractorAnalysis": [
      "Está incorreta: pressões de 80 mmHg causariam isquemia tecidual e colapso microvascular arterial em vez de alívio.",
      "Está incorreta: o calor aumentaria o consumo metabólico de oxigénio em tecidos já hipóxicos, acelerando a necrose.",
      "Está incorreta: estes colchões operam por redistribuição passiva de ar e não por emissão de vibrações ultrassónicas ativas."
    ],
    "nursingApplication": "O enfermeiro vigia o desempenho do/a tubos de aspiração cirúrgica de silicone médico reforçado com espiral: o domínio destas propriedades assegura a prevenção de complicações vasculares, necrose de tecidos e falhas mecânicas durante os cuidados diários de saúde."
  },
  {
    "id": 2161,
    "topicId": 2,
    "question": "De acordo com a Lei de Laplace aplicada a vasos cilíndricos (T = P · r), por que razão o risco de rotura aumenta criticamente com a dilatação do aneurisma?",
    "options": [
      "O aumento do raio diminui a tensão na parede arterial, tornando o vaso dilatado imune a qualquer risco de laceração mecânica.",
      "O aumento do raio interno r eleva proporcionalmente a tensão circunferencial T na parede vascular para a mesma pressão arterial P.",
      "A pressão sanguínea cai para valores hidrostáticos negativos na zona dilatada devido ao colapso mecânico pela Lei de Bernoulli.",
      "O Módulo de Young da elastina aumenta para o infinito com a dilatação do vaso, convertendo a túnica média num tubo rígido indestrutível."
    ],
    "correctIndex": 1,
    "explanation": "O/A elastómero de vedação em seringas pré-cheias de heparina atua na prática clínica através do seguinte mecanismo biomecânico: borracha sintética de alta estanquicidade que mantém a esterilidade e impede a entrada de ar com coeficiente de atrito cinético constante no cilindro.",
    "distractorAnalysis": [
      "Está incorreta: pela Lei de Laplace a tensão circunferencial é proporcional ao raio (T = P·r), aumentando a tração na parede.",
      "Está incorreta: a pressão lateral permanece elevada e o aumento do raio eleva substancialmente o esforço de tensão da parede.",
      "Está incorreta: a fragmentação da elastina e colagénio enfraquece a parede arterial, tornando-a muito mais suscetível à rotura."
    ],
    "nursingApplication": "O enfermeiro vigia o desempenho do/a elastómero de vedação em seringas pré-cheias de heparina: o domínio destas propriedades assegura a prevenção de complicações vasculares, necrose de tecidos e falhas mecânicas durante os cuidados diários de saúde."
  },
  {
    "id": 2162,
    "topicId": 2,
    "question": "Num doente ventilado com Síndrome de Dificuldade Respiratória Aguda (SDRA), como se traduz a diminuição da complacência pulmonar elástica?",
    "options": [
      "Os pulmões expandem-se muito mais facilmente com baixas pressões ventilatórias, exigindo redução extrema da frequência respiratória.",
      "A resistência das vias aéreas ao fluxo laminar anula-se, permitindo ventilação alveolar com pressões expiratórias negativas contínuas.",
      "Exige uma maior variação de pressão nas vias aéreas (ΔP) para insuflar o mesmo volume corrente (ΔV), aumentando o risco de barotrauma.",
      "O Módulo de Young do tecido pulmonar decresce drasticamente, comportando-se o parênquima pulmonar como um balão de alta elasticidade."
    ],
    "correctIndex": 2,
    "explanation": "O/A fixador externo ortopédico de carbono atua na prática clínica através do seguinte mecanismo biomecânico: material compósito de fibra de carbono com altíssima rigidez e radiotransparência, permitindo o controlo radiológico da fratura sem artefactos metálicos opacos.",
    "distractorAnalysis": [
      "Está incorreta: baixa complacência pulmonar (C = ΔV/ΔP) significa pulmões mais rígidos que requerem maiores pressões de insuflação.",
      "Está incorreta: na SDRA a resistência pulmonar e a elastância elástica aumentam significativamente as pressões de pico.",
      "Está incorreta: a perda de complacência reflete o aumento da rigidez do parênquima alveolar e não a sua redução."
    ],
    "nursingApplication": "O enfermeiro vigia o desempenho do/a fixador externo ortopédico de carbono: o domínio destas propriedades assegura a prevenção de complicações vasculares, necrose de tecidos e falhas mecânicas durante os cuidados diários de saúde."
  },
  {
    "id": 2163,
    "topicId": 2,
    "question": "De acordo com a Lei de Laplace nos alvéolos esféricos (P = 2γ/r), qual é o papel biofísico primordial do surfactante pulmonar exógeno em neonatos?",
    "options": [
      "Aumenta a tensão superficial γ em todos os alvéolos para facilitar a difusão do oxigénio gasoso através da membrana alvéolo-capilar.",
      "Transforma os alvéolos em câmaras rígidas de alta pressão que expelem o ar expirado sem auxílio da contração muscular respiratória.",
      "Bloqueia a entrada de gás nos alvéolos de menor raio, canalizando o volume inspirado para os lobos pulmonares superiores hiperinsuflados.",
      "Reduz a tensão superficial γ de forma mais acentuada nos alvéolos menores, igualando as pressões e prevenindo a atelectasia."
    ],
    "correctIndex": 3,
    "explanation": "O/A meias anti-embolia cirúrgicas brancas (TED stockings) atua na prática clínica através do seguinte mecanismo biomecânico: exercem pressão profilática de 18 mmHg no tornozelo e 8 mmHg na coxa para doentes acamados em pós-operatório sem mobilidade ativa.",
    "distractorAnalysis": [
      "Está incorreta: o aumento da tensão superficial provocaria o esvaziamento dos alvéolos menores para os maiores e colapso pulmonar.",
      "Está incorreta: os alvéolos devem manter-se flexíveis e complacentes para permitir as trocas gasosas na respiração.",
      "Está incorreta: a função biológica do surfactante é justamente assegurar a expansão estável e homogénea de todos os alvéolos."
    ],
    "nursingApplication": "O enfermeiro vigia o desempenho do/a meias anti-embolia cirúrgicas brancas (TED stockings): o domínio destas propriedades assegura a prevenção de complicações vasculares, necrose de tecidos e falhas mecânicas durante os cuidados diários de saúde."
  },
  {
    "id": 2164,
    "topicId": 2,
    "question": "O osso cortical é um material biomecânico com comportamento anisotrópico. Isso significa que a sua resistência mecânica à fratura:",
    "options": [
      "Varia com a direção da carga, sendo máxima na compressão longitudinal, intermediária na tração e mínima sob forças de cisalhamento.",
      "É rigorosamente constante quer seja submetido a compressão axial, tração unidirecional, torção helicoidal ou flexão transversal.",
      "Depende exclusivamente da temperatura ambiente da enfermaria e não da orientação das osteonas e fibras de colagénio na matriz.",
      "É substancialmente superior sob forças de cisalhamento puro do que sob esforços compressivos paralelos ao longo eixo diafisário."
    ],
    "correctIndex": 0,
    "explanation": "O/A tiras adesivas esterilizadas de aproximação cutânea (Steri-Strips) atua na prática clínica através do seguinte mecanismo biomecânico: reforçadas com filamentos de poliéster para manter tensão de tração constante nas bordas da ferida após remoção precoce de pontos de sutura.",
    "distractorAnalysis": [
      "Está incorreta: materiais anisotrópicos apresentam propriedades mecânicas distintas em função do eixo e modo de carregamento.",
      "Está incorreta: a anisotropia óssea depende do alinhamento histológico das osteonas e fibras de colagénio e não do ar da sala.",
      "Está incorreta: o osso cortical suporta pressões compressivas muito maiores (~190 MPa) do que forças de corte (~60 MPa)."
    ],
    "nursingApplication": "O enfermeiro vigia o desempenho do/a tiras adesivas esterilizadas de aproximação cutânea (Steri-Strips): o domínio destas propriedades assegura a prevenção de complicações vasculares, necrose de tecidos e falhas mecânicas durante os cuidados diários de saúde."
  },
  {
    "id": 2165,
    "topicId": 2,
    "question": "Como se explica biofisicamente o desenvolvimento de uma fratura de stresse no segundo metatarso de um profissional de saúde após longos turnos?",
    "options": [
      "Fratura catastrófica instantânea causada por um único impacto mecânico que ultrapassou a tensão de rotura do osso cortical são.",
      "Acumulação progressiva de microfraturas trabeculares sob cargas cíclicas repetidas que supera a taxa de reparação osteoblástica.",
      "Descalcificação osmótica aguda do osso decorrente da perda rápida de sais minerais através da transpiração dos pés na marcha diária.",
      "Conversão das trabéculas ósseas em tecido puramente cartilagíneo que perde a capacidade de suportar o peso corporal em repouso."
    ],
    "correctIndex": 1,
    "explanation": "O/A módulo elástico de Young de próteses de titânio (E ~ 110 GPa) atua na prática clínica através do seguinte mecanismo biomecânico: rigidez intermediária entre o osso cortical (18 GPa) e o aço cirúrgico (200 GPa), reduzindo o fenómeno de 'stress shielding' ou reabsorção óssea periprotésica por desuso mecânico.",
    "distractorAnalysis": [
      "Está incorreta: a fratura de stresse resulta da fadiga mecânica por sobrecargas repetitivas e não de um trauma agudo único.",
      "Está incorreta: a perda de sais minerais pelo suor não desmineraliza subitamente o osso nem causa fraturas locais.",
      "Está incorreta: o tecido ósseo mantém a sua matriz mineralizada, sofrendo fissuras microscópicas mecânicas por fadiga."
    ],
    "nursingApplication": "O enfermeiro vigia o desempenho do/a módulo elástico de Young de próteses de titânio (E ~ 110 GPa): o domínio destas propriedades assegura a prevenção de complicações vasculares, necrose de tecidos e falhas mecânicas durante os cuidados diários de saúde."
  },
  {
    "id": 2166,
    "topicId": 2,
    "question": "Na osteoporose, a diminuição da massa óssea e a perda de conectividade trabecular afetam a integridade estrutural do osso porque:",
    "options": [
      "Aumentam a ductilidade plástica do tecido ósseo, permitindo que os ossos longos dobrem livremente sem partir sob o peso corporal.",
      "Elevam a densidade de massa do osso cortical, conferindo-lhe proteção total contra fraturas da anca em quedas da própria altura.",
      "Reduzem drasticamente a tenacidade e a resiliência elástica do osso, tornando-o frágil e vulnerável a impactos mecânicos ligeiros.",
      "Substituem o fosfato de cálcio mineral por uma matriz polimérica flexível que absorve toda a energia mecânica do impacto articular."
    ],
    "correctIndex": 2,
    "explanation": "O/A propriedades de fluência (creep) dos discos intervertebrais atua na prática clínica através do seguinte mecanismo biomecânico: perda progressiva de água sob a carga vertical durante o dia com diminuição da altura do disco, recuperando a hidratação e a espessura elástica durante o repouso noturno no leito.",
    "distractorAnalysis": [
      "Está incorreta: o osso osteoporótico torna-se quebradiço e frágil com pouca deformação antes da fratura e não mais dúctil.",
      "Está incorreta: a osteoporose traduz-se em perda de massa e degradação microarquitetural com grande aumento da fragilidade.",
      "Está incorreta: a patologia não introduz polímeros flexíveis, ocorrendo apenas perda líquida de trabéculas e afilamento cortical."
    ],
    "nursingApplication": "O enfermeiro vigia o desempenho do/a propriedades de fluência (creep) dos discos intervertebrais: o domínio destas propriedades assegura a prevenção de complicações vasculares, necrose de tecidos e falhas mecânicas durante os cuidados diários de saúde."
  },
  {
    "id": 2167,
    "topicId": 2,
    "question": "Por que razão a punção do reservatório de um cateter totalmente implantado (Port-a-Cath) exige estritamente o uso de agulha com bisel de Huber?",
    "options": [
      "A agulha emite pulsos térmicos que selam o canal de penetração no silicone para evitar extravasamento de fármacos citotóxicos.",
      "A agulha convencional não possui resistência mecânica suficiente para perfurar a pele do doente sobre a câmara do reservatório.",
      "O bisel tradicional apresenta um diâmetro interno que impede o escoamento de soluções quimioterápicas viscosas para o cateter.",
      "O bisel não cortante afasta as fibras de silicone sem extrair fragmentos, preservando a autorrecuperação elástica do septo após a punção."
    ],
    "correctIndex": 3,
    "explanation": "O/A elasticidade das paredes arteriais no envelhecimento (arteriosclerose) atua na prática clínica através do seguinte mecanismo biomecânico: substituição das fibras de elastina por fibras rígidas de colagénio, aumentando o Módulo de Young arterial e elevando a pressão arterial de pulso (sistólica muito alta com diastólica normal ou baixa).",
    "distractorAnalysis": [
      "Está incorreta: a conservação do septo de silicone deve-se à geometria do bisel não cortante e não a nenhum aquecimento térmico.",
      "Está incorreta: agulhas normais perfuram a pele com facilidade, mas o seu bisel em cunha arrancaria pedaços de silicone do septo.",
      "Está incorreta: as agulhas comuns conduzem fármacos perfeitamente, mas causariam fugas definitivas por fragmentação do silicone."
    ],
    "nursingApplication": "O enfermeiro vigia o desempenho do/a elasticidade das paredes arteriais no envelhecimento (arteriosclerose): o domínio destas propriedades assegura a prevenção de complicações vasculares, necrose de tecidos e falhas mecânicas durante os cuidados diários de saúde."
  },
  {
    "id": 2168,
    "topicId": 2,
    "question": "Na contenção de hemorragia digestiva por rotura de varizes esofágicas, qual é o mecanismo físico da sonda de Sengstaken-Blakemore?",
    "options": [
      "Tamponamento por compressão mecânica direta quando o balão esofágico é insuflado a pressão superior à pressão venosa das varizes.",
      "Coagulação térmica gerada pela introdução de líquido aquecido a 60 °C no interior do balão para queimar a mucosa vascular sangrante.",
      "Sucção por pressão manométrica negativa contínua nas paredes do esófago para colapsar as varizes contra o mediastino torácico.",
      "Injeção contínua de ar sob alta pressão nas artérias coronárias para desviar o fluxo sanguíneo longe do sistema vascular venoso."
    ],
    "correctIndex": 0,
    "explanation": "O/A suturas metálicas de agrafos cirúrgicos de aço atua na prática clínica através do seguinte mecanismo biomecânico: apresentam comportamento puramente plástico no fecho com o agrafador mecânico, mantendo as bordas da pele coaptadas sem retorno elástico.",
    "distractorAnalysis": [
      "Está incorreta: os balões da sonda são insuflados com ar sob controlo manométrico estrito (30-45 mmHg) e nunca com líquidos quentes.",
      "Está incorreta: a sonda atua por compressão positiva direta sobre os vasos submucosos e não por sucção ou pressão negativa.",
      "Está incorreta: a insuflação é puramente intraluminal gastroesofágica e não tem qualquer contacto com a circulação coronária."
    ],
    "nursingApplication": "O enfermeiro vigia o desempenho do/a suturas metálicas de agrafos cirúrgicos de aço: o domínio destas propriedades assegura a prevenção de complicações vasculares, necrose de tecidos e falhas mecânicas durante os cuidados diários de saúde."
  },
  {
    "id": 2169,
    "topicId": 2,
    "question": "Qual é o fundamento mecânico da geometria trifacetada e afiada no bisel de agulhas hipodérmicas descartáveis de enfermagem?",
    "options": [
      "Aumenta a resistência de atrito na pele para evitar que a agulha penetre acidentalmente para além do tecido celular subcutâneo.",
      "Reduz a área de contacto inicial e a força de inserção requerida, diminuindo a deformação tecidual e o desconforto na penetração.",
      "Permite que a haste metálica dobre em ângulo reto no interior do músculo para impedir a dispersão indesejada do fármaco injetado.",
      "Converte a agulha num canal de sucção capilar passiva que dispensa o avanço manual do êmbolo da seringa na administração da dose."
    ],
    "correctIndex": 1,
    "explanation": "O/A comportamento reológico do líquido sinovial articular atua na prática clínica através do seguinte mecanismo biomecânico: fluido pseudoplástico rico em ácido hialurónico que é altamente viscoso em repouso (lubrificação protetora) e torna-se fluido e pouco viscoso sob movimento rápido (mínima fricção articular).",
    "distractorAnalysis": [
      "Está incorreta: o bisel trifacetado foi desenhado especificamente para diminuir o atrito e a resistência à penetração dérmica.",
      "Está incorreta: a agulha de aço inoxidável rígido deve penetrar retilínea sem sofrer deformações plásticas no músculo.",
      "Está incorreta: a administração terapêutica de soluções exige sempre aplicação de pressão mecânica positiva no êmbolo."
    ],
    "nursingApplication": "O enfermeiro vigia o desempenho do/a comportamento reológico do líquido sinovial articular: o domínio destas propriedades assegura a prevenção de complicações vasculares, necrose de tecidos e falhas mecânicas durante os cuidados diários de saúde."
  },
  {
    "id": 2170,
    "topicId": 2,
    "question": "Qual é o objetivo biofísico de aplicar um revestimento lubrificante (como poliglactina 370 e estearato de cálcio) em fios trançados?",
    "options": [
      "Aumenta a aderência do fio aos tecidos envolventes para impedir que o cirurgião consiga deslizar as laçadas do nó cirúrgico.",
      "Converte o fio de sutura num condutor de eletricidade estática para neutralizar microrganismos bacterianos na ferida operatória.",
      "Diminui o coeficiente de atrito cinético na passagem tecidual, minimizando o efeito de serra e o trauma nas bordas da ferida.",
      "Transforma a estrutura do polímero num monofilamento inabsorvível que permanece inerte no corpo humano por vários anos seguidos."
    ],
    "correctIndex": 2,
    "explanation": "O/A tubos de aspiração cirúrgica de silicone médico reforçado com espiral atua na prática clínica através do seguinte mecanismo biomecânico: a espiral rígida de aço ou polímero impede o colapso do tubo sob vácuo de alta sucção (resistência à pressão negativa de colapso).",
    "distractorAnalysis": [
      "Está incorreta: a lubrificação visa facilitar a passagem suave sem prender prematuramente os nós durante o encerramento.",
      "Está incorreta: o recobrimento tem finalidade mecânica e de atrito e não possui propriedades biocidas de condução elétrica.",
      "Está incorreta: o recobrimento não altera a degradação hidrolítica da sutura, mantendo o seu caráter absorvível programado."
    ],
    "nursingApplication": "O enfermeiro vigia o desempenho do/a tubos de aspiração cirúrgica de silicone médico reforçado com espiral: o domínio destas propriedades assegura a prevenção de complicações vasculares, necrose de tecidos e falhas mecânicas durante os cuidados diários de saúde."
  },
  {
    "id": 2171,
    "topicId": 2,
    "question": "Em perfusões intravenosas simultâneas em Y, qual é a função biofísica da válvula antirefluxo de silicone colocada na linha secundária?",
    "options": [
      "Aumenta a velocidade do fluxo na linha através da conversão deliberada do escoamento laminar suave em escoamento turbulento.",
      "Neutraliza quimicamente quaisquer incompatibilidades físico-químicas entre as soluções farmacológicas que contactem na via comum.",
      "Gera uma pressão manométrica negativa no lúmen venoso que substitui com segurança a necessidade de bombas infusoras no serviço.",
      "Abre sob gradiente de pressão anterógrado e veda com contrapressão, impedindo o refluxo de medicação para a linha secundária."
    ],
    "correctIndex": 3,
    "explanation": "O/A elastómero de vedação em seringas pré-cheias de heparina atua na prática clínica através do seguinte mecanismo biomecânico: borracha sintética de alta estanquicidade que mantém a esterilidade e impede a entrada de ar com coeficiente de atrito cinético constante no cilindro.",
    "distractorAnalysis": [
      "Está incorreta: a turbulência aumentaria a resistência hidráulica ao fluxo, sendo indesejável numa linha de perfusão venosa.",
      "Está incorreta: a válvula atua unicamente como barreira mecânica unidirecional, sem propriedades de neutralização química.",
      "Está incorreta: a válvula não gera pressão nem sucção e não substitui os sistemas de controlo volumétrico por bomba."
    ],
    "nursingApplication": "O enfermeiro vigia o desempenho do/a elastómero de vedação em seringas pré-cheias de heparina: o domínio destas propriedades assegura a prevenção de complicações vasculares, necrose de tecidos e falhas mecânicas durante os cuidados diários de saúde."
  },
  {
    "id": 2172,
    "topicId": 2,
    "question": "Por que razão as bandagens de curta extensão (baixa complacência elástica) são recomendadas para doentes com edema venoso que deambulam?",
    "options": [
      "Oferecem alta resistência rígida à expansão dos gémeos na marcha gerando alta pressão de trabalho, com baixa pressão no repouso.",
      "Apresentam altíssima elasticidade passiva que exerce compressão extrema e constante durante a noite mesmo sem movimento muscular.",
      "Dissolvem ativamente a fibrina perivascular através da libertação contínua de iões minerais ativados pelo movimento articular.",
      "Bloqueiam totalmente o fluxo arterial na perna durante a passada para estimular a formação de novos capilares compensatórios."
    ],
    "correctIndex": 0,
    "explanation": "O/A fixador externo ortopédico de carbono atua na prática clínica através do seguinte mecanismo biomecânico: material compósito de fibra de carbono com altíssima rigidez e radiotransparência, permitindo o controlo radiológico da fratura sem artefactos metálicos opacos.",
    "distractorAnalysis": [
      "Está incorreta: as ligaduras de baixa complacência têm baixa pressão de repouso, sendo seguras com o doente acamado.",
      "Está incorreta: a ação terapêutica é hemodinâmica por suporte mecânico à bomba muscular e não por libertação iónica química.",
      "Está incorreta: a compressão nunca deve comprometer a perfusão arterial dos membros inferiores sob pena de necrose isquémica."
    ],
    "nursingApplication": "O enfermeiro vigia o desempenho do/a fixador externo ortopédico de carbono: o domínio destas propriedades assegura a prevenção de complicações vasculares, necrose de tecidos e falhas mecânicas durante os cuidados diários de saúde."
  },
  {
    "id": 2173,
    "topicId": 2,
    "question": "Qual é a característica biofísica das ligaduras elásticas de longa extensão (alta complacência) que exige vigilância no doente acamado?",
    "options": [
      "Perdem totalmente a sua elasticidade logo após a colocação no leito, tornando-se completamente soltas e ineficazes no edema.",
      "Mantêm tensão elástica contínua, gerando pressão de repouso elevada que pode comprometer a perfusão arterial durante o sono.",
      "Aquecem a pele acima de 45 °C devido à dissipação contínua de calor por histerese elástica mecânica durante o repouso absoluto.",
      "Convertem-se numa armadura perfeitamente rígida e estática após algumas horas de contacto com a temperatura do corpo humano."
    ],
    "correctIndex": 1,
    "explanation": "O/A meias anti-embolia cirúrgicas brancas (TED stockings) atua na prática clínica através do seguinte mecanismo biomecânico: exercem pressão profilática de 18 mmHg no tornozelo e 8 mmHg na coxa para doentes acamados em pós-operatório sem mobilidade ativa.",
    "distractorAnalysis": [
      "Está incorreta: as ligaduras de longa extensão continuam sob tensão elástica de retração, mantendo alta pressão no repouso.",
      "Está incorreta: a dissipação térmica em ligaduras elásticas estáticas no repouso é totalmente impercetível e desprezável.",
      "Está incorreta: o elastano preserva as suas propriedades viscoelásticas sem solidificar numa estrutura metálica rígida."
    ],
    "nursingApplication": "O enfermeiro vigia o desempenho do/a meias anti-embolia cirúrgicas brancas (TED stockings): o domínio destas propriedades assegura a prevenção de complicações vasculares, necrose de tecidos e falhas mecânicas durante os cuidados diários de saúde."
  },
  {
    "id": 2174,
    "topicId": 2,
    "question": "Qual é o mecanismo biomecânico através do qual uma cinta de suporte lombar ajustada alivia a sobrecarga nos discos intervertebrais?",
    "options": [
      "Anula completamente a força gravítica sobre o tronco superior, permitindo que o peso atue unicamente da cintura para baixo.",
      "Interrompe a circulação nos músculos lombares para induzir um estado transitório de dormência analgésica durante o esforço físico.",
      "Aumenta a rigidez da parede e a pressão intra-abdominal, criando um suporte hidrostático que partilha a carga compressiva axial.",
      "Transforma a coluna lombar numa alavanca de 3.ª classe com fulcro nas costelas, impedindo a flexão fisiológica da articulação da anca."
    ],
    "correctIndex": 2,
    "explanation": "O/A tiras adesivas esterilizadas de aproximação cutânea (Steri-Strips) atua na prática clínica através do seguinte mecanismo biomecânico: reforçadas com filamentos de poliéster para manter tensão de tração constante nas bordas da ferida após remoção precoce de pontos de sutura.",
    "distractorAnalysis": [
      "Está incorreta: a cinta não anula a gravidade nem o peso do tronco, apenas apoia na redistribuição das cargas axiais.",
      "Está incorreta: o objetivo de uma órtese lombar nunca é causar isquemia ou comprometer a perfusão dos músculos paravertebrais.",
      "Está incorreta: a anatomia básica e as alavancas do esqueleto axial continuam inalteradas nas suas relações biomecânicas."
    ],
    "nursingApplication": "O enfermeiro vigia o desempenho do/a tiras adesivas esterilizadas de aproximação cutânea (Steri-Strips): o domínio destas propriedades assegura a prevenção de complicações vasculares, necrose de tecidos e falhas mecânicas durante os cuidados diários de saúde."
  },
  {
    "id": 2175,
    "topicId": 2,
    "question": "Em procedimentos cirúrgicos com posicionamento complexo da cabeça, qual é a vantagem biofísica dos tubos endotraqueais aramados?",
    "options": [
      "Permite que o diâmetro do tubo aumente até ao triplo do calibre original quando submetido a pressões ventilatórias elevadas.",
      "Transmite impulsos elétricos para o músculo cricotiroideu através da espiral condutora para forçar a abertura das cordas vocais.",
      "Reduz a massa do tubo para um valor inferior ao ar circundante, fazendo com que a cânula flutue livremente no lúmen traqueal.",
      "A espiral metálica incorporada na parede impede a oclusão por acotovelamento mecânico durante curvaturas ou flexões acentuadas."
    ],
    "correctIndex": 3,
    "explanation": "O/A módulo elástico de Young de próteses de titânio (E ~ 110 GPa) atua na prática clínica através do seguinte mecanismo biomecânico: rigidez intermediária entre o osso cortical (18 GPa) e o aço cirúrgico (200 GPa), reduzindo o fenómeno de 'stress shielding' ou reabsorção óssea periprotésica por desuso mecânico.",
    "distractorAnalysis": [
      "Está incorreta: os tubos reforçados têm calibre calibrado e fixo, não sofrendo dilatação circunferencial descontrolada.",
      "Está incorreta: a armação metálica helicoidal tem função puramente mecânica anti-colapso e não conduz correntes elétricas.",
      "Está incorreta: a cânula aramada é mais pesada que os tubos comuns e necessita de fixação externa segura pelo enfermeiro."
    ],
    "nursingApplication": "O enfermeiro vigia o desempenho do/a módulo elástico de Young de próteses de titânio (E ~ 110 GPa): o domínio destas propriedades assegura a prevenção de complicações vasculares, necrose de tecidos e falhas mecânicas durante os cuidados diários de saúde."
  },
  {
    "id": 2176,
    "topicId": 2,
    "question": "Na física dos biomateriais cardiovasculares, qual é a principal diferença mecânica entre próteses valvulares mecânicas e biológicas?",
    "options": [
      "As válvulas mecânicas têm durabilidade indefinida mas geram picos de cisalhamento que causam hemólise e exigem anticoagulação contínua.",
      "As próteses biológicas de pericárdio bovino são indeformáveis e duram mais de cinquenta anos sem qualquer calcificação tecidual.",
      "As válvulas mecânicas de carbono pirolítico quebram espontaneamente após três meses de funcionamento no ventrículo esquerdo.",
      "As próteses biológicas convertem o sangue em gel viscoelástico através da libertação contínua de heparina sintetizada nos folhetos."
    ],
    "correctIndex": 0,
    "explanation": "O/A propriedades de fluência (creep) dos discos intervertebrais atua na prática clínica através do seguinte mecanismo biomecânico: perda progressiva de água sob a carga vertical durante o dia com diminuição da altura do disco, recuperando a hidratação e a espessura elástica durante o repouso noturno no leito.",
    "distractorAnalysis": [
      "Está incorreta: as válvulas biológicas sofrem fadiga estrutural e calcificação ao fim de 10 a 15 anos, tendo menor durabilidade.",
      "Está incorreta: o carbono pirolítico das próteses mecânicas tem altíssima tenacidade e excelente resistência à fadiga por ciclos.",
      "Está incorreta: o tecido biológico pericárdico não produz nem sintetiza heparina na corrente sanguínea do doente."
    ],
    "nursingApplication": "O enfermeiro vigia o desempenho do/a propriedades de fluência (creep) dos discos intervertebrais: o domínio destas propriedades assegura a prevenção de complicações vasculares, necrose de tecidos e falhas mecânicas durante os cuidados diários de saúde."
  },
  {
    "id": 2177,
    "topicId": 2,
    "question": "Como atua o disco intervertebral na absorção de impactos mecânicos verticais durante a locomoção e saltos?",
    "options": [
      "O disco funciona como uma barra rígida de aço cirúrgico que transmite integralmente os impactos mecânicos para a base craniana.",
      "O núcleo pulposo hidratado e o anel fibroso laminado atuam como elemento viscoelástico com alta histerese, dissipando energia.",
      "O anel fibroso sofre deformação plástica irreversível em cada passo, perdendo definitivamente a sua integridade na primeira marcha.",
      "O líquido discal evapora através dos poros vertebrais durante o impacto, gerando uma bolsa gasosa de amortecimento pneumático puro."
    ],
    "correctIndex": 1,
    "explanation": "O/A elasticidade das paredes arteriais no envelhecimento (arteriosclerose) atua na prática clínica através do seguinte mecanismo biomecânico: substituição das fibras de elastina por fibras rígidas de colagénio, aumentando o Módulo de Young arterial e elevando a pressão arterial de pulso (sistólica muito alta com diastólica normal ou baixa).",
    "distractorAnalysis": [
      "Está incorreta: o disco intervertebral é uma estrutura deformável e amortecedora, não um condutor perfeitamente rígido.",
      "Está incorreta: as estruturas do anel fibroso e proteoglicanos dissipam choques elasticamente sem deformação plástica destrutiva.",
      "Está incorreta: a água do disco desloca-se sob pressão intersticial na matriz sem qualquer fenómeno de vaporização térmica."
    ],
    "nursingApplication": "O enfermeiro vigia o desempenho do/a elasticidade das paredes arteriais no envelhecimento (arteriosclerose): o domínio destas propriedades assegura a prevenção de complicações vasculares, necrose de tecidos e falhas mecânicas durante os cuidados diários de saúde."
  },
  {
    "id": 2178,
    "topicId": 2,
    "question": "Nas articulações sinoviais humanas saudáveis (como o joelho e anca), o coeficiente de atrito cinético (μ) atinge valores tão baixos quanto 0,002 devido a:",
    "options": [
      "Contacto direto de osso subcondral desprovido de qualquer revestimento, gerando atrito seco puramente inercial de Coulomb.",
      "Aquecimento contínuo da cavidade articular a temperaturas superiores a 50 °C para liquefazer lípidos no espaço intracapsular.",
      "Presença de líquido sinovial com hialuronato e lubricina associada à cartilagem hialina bifásica sob regime de lubrificação fluida.",
      "Presença de uma camada gasosa subcondral pressurizada que mantém as extremidades ósseas afastadas sem qualquer contacto biológico."
    ],
    "correctIndex": 2,
    "explanation": "O/A suturas metálicas de agrafos cirúrgicos de aço atua na prática clínica através do seguinte mecanismo biomecânico: apresentam comportamento puramente plástico no fecho com o agrafador mecânico, mantendo as bordas da pele coaptadas sem retorno elástico.",
    "distractorAnalysis": [
      "Está incorreta: o atrito seco osso com osso ocorre na artrose terminal e gera atrito elevado com destruição articular e dor.",
      "Está incorreta: a temperatura intra-articular é homeotérmica fisiológica (cerca de 33 a 36 °C) e nunca atinge 50 °C.",
      "Está incorreta: a lubrificação articular baseia-se em mecanismos hidrodinâmicos e reológicos no meio líquido e não em camadas de gás."
    ],
    "nursingApplication": "O enfermeiro vigia o desempenho do/a suturas metálicas de agrafos cirúrgicos de aço: o domínio destas propriedades assegura a prevenção de complicações vasculares, necrose de tecidos e falhas mecânicas durante os cuidados diários de saúde."
  },
  {
    "id": 2179,
    "topicId": 2,
    "question": "Durante a extração cefálica em obstetrícia, como se caracteriza fisicamente o funcionamento de um fórceps obstétrico articulado?",
    "options": [
      "Alavanca de 3.ª classe com vantagem mecânica nula concebida unicamente para acelerar a rotação espontânea da pelve materna no parto.",
      "Mecanismo de aspiração por vácuo contínuo pneumático que dispensa qualquer ponto de apoio mecânico nas colheres metálicas.",
      "Estrutura tubular elástica de silicone concebida para dilatar a cavidade uterina através de infusão de soro aquecido sob pressão.",
      "Dupla alavanca interfixa de 1.ª classe com fulcro no fecho central articulado que amplifica o binário de preensão e a tração manual."
    ],
    "correctIndex": 3,
    "explanation": "O/A comportamento reológico do líquido sinovial articular atua na prática clínica através do seguinte mecanismo biomecânico: fluido pseudoplástico rico em ácido hialurónico que é altamente viscoso em repouso (lubrificação protetora) e torna-se fluido e pouco viscoso sob movimento rápido (mínima fricção articular).",
    "distractorAnalysis": [
      "Está incorreta: o fórceps possui fulcro articular cruzado funcionando como alavanca de 1.ª classe para multiplicação e controlo de tração.",
      "Está incorreta: descreve o princípio do vácuo-extrator obstétrico (ventosa) e não o mecanismo metálico de colheres do fórceps.",
      "Está incorreta: as colheres do fórceps são de aço inoxidável rígido para conferir tração e direção e não tubos infláveis."
    ],
    "nursingApplication": "O enfermeiro vigia o desempenho do/a comportamento reológico do líquido sinovial articular: o domínio destas propriedades assegura a prevenção de complicações vasculares, necrose de tecidos e falhas mecânicas durante os cuidados diários de saúde."
  },
  {
    "id": 2180,
    "topicId": 2,
    "question": "Por que razão as fraturas causadas por forças de torção em ossos longos (como a tíbia de esquiadores) assumem tipicamente uma geometria em espiral?",
    "options": [
      "O momento de torção gera tensões máximas de tração e corte em planos helicoidais inclinados a 45° em relação ao longo eixo diafisário.",
      "O osso longo funde-se instantaneamente sob torção mecânica, reorganizando a sua estrutura cristalina numa espiral de DNA celular.",
      "As forças de torção afetam exclusivamente os nervos periféricos, cuja contração reflexa esmaga o osso numa linha transversal cega.",
      "O canal medular expande-se centrifugamente sob pressão pneumática, partindo o córtex ósseo em fatias perfeitamente circulares."
    ],
    "correctIndex": 0,
    "explanation": "O/A tubos de aspiração cirúrgica de silicone médico reforçado com espiral atua na prática clínica através do seguinte mecanismo biomecânico: a espiral rígida de aço ou polímero impede o colapso do tubo sob vácuo de alta sucção (resistência à pressão negativa de colapso).",
    "distractorAnalysis": [
      "Está incorreta: a falha em espiral obedece aos princípios mecânicos de tensões principais de tração a 45° sob torção pura.",
      "Está incorreta: o mecanismo da fratura é estritamente mecânico sobre o tecido mineralizado e não causado por reflexo neural isolado.",
      "Está incorreta: não ocorre expansão pneumática no canal medular, sendo a rotura originada por tensões de corte e tração na parede."
    ],
    "nursingApplication": "O enfermeiro vigia o desempenho do/a tubos de aspiração cirúrgica de silicone médico reforçado com espiral: o domínio destas propriedades assegura a prevenção de complicações vasculares, necrose de tecidos e falhas mecânicas durante os cuidados diários de saúde."
  },
  {
    "id": 2181,
    "topicId": 2,
    "question": "Na avaliação da fragilidade e sarcopenia em idosos através da dinamometria manual com dinamómetro de Jamar, que princípio físico é utilizado?",
    "options": [
      "Medição da condutividade elétrica da pele do antebraço após estimulação galvânica dolorosa dos nervos motores superficiais.",
      "Deformação elástica calibrada de uma lâmina ou célula de carga sob força isométrica máxima de preensão manual desenvolvida pelo doente.",
      "Determinação da variação do volume de ar expirado pelos pulmões durante a manobra de contração dos dedos sobre a pega metálica.",
      "Avaliação da aceleração gravitacional gerada no pavimento hospitalar pela queda balística de um peso padronizado de teste clínico."
    ],
    "correctIndex": 1,
    "explanation": "O/A elastómero de vedação em seringas pré-cheias de heparina atua na prática clínica através do seguinte mecanismo biomecânico: borracha sintética de alta estanquicidade que mantém a esterilidade e impede a entrada de ar com coeficiente de atrito cinético constante no cilindro.",
    "distractorAnalysis": [
      "Está incorreta: a dinamometria de Jamar quantifica a força mecânica de preensão e não a resistência galvânica ou elétrica da pele.",
      "Está incorreta: o aparelho mede a força estática dos músculos flexores dos dedos e não parâmetros ventilatórios pulmonares.",
      "Está incorreta: o teste baseia-se na força muscular isométrica aplicada na pega do dinamómetro e não em impactos balísticos."
    ],
    "nursingApplication": "O enfermeiro vigia o desempenho do/a elastómero de vedação em seringas pré-cheias de heparina: o domínio destas propriedades assegura a prevenção de complicações vasculares, necrose de tecidos e falhas mecânicas durante os cuidados diários de saúde."
  },
  {
    "id": 2182,
    "topicId": 2,
    "question": "Na génese da flebite mecânica associada a cateteres venosos periféricos, qual é o papel desempenhado pela tensão de corte na parede venosa?",
    "options": [
      "A ponta do cateter atrai as hemácias por polarização eletrostática negativa contínua, obstruindo a veia por aglutinação iónica pura.",
      "A rigidez do tubo converte o fluxo laminar de sangue num plasma gasoso de alta temperatura que queima quimicamente a camada íntima.",
      "O atrito e o movimento repetido da ponta rígida contra o endotélio geram tensão de corte tangencial que desencadeia inflamação mecânica.",
      "O cateter exerce uma força de sucção centrípeta que colapsa permanentemente a parede venosa em torno do canhão de fixação externa."
    ],
    "correctIndex": 2,
    "explanation": "O/A fixador externo ortopédico de carbono atua na prática clínica através do seguinte mecanismo biomecânico: material compósito de fibra de carbono com altíssima rigidez e radiotransparência, permitindo o controlo radiológico da fratura sem artefactos metálicos opacos.",
    "distractorAnalysis": [
      "Está incorreta: a causa da flebite mecânica é o trauma físico e fricção da ponta contra o vaso e não atração eletrostática de hemácias.",
      "Está incorreta: o cateter não eleva a temperatura do sangue nem produz vaporização endotelial térmica no leito venoso.",
      "Está incorreta: o cateter infunde soluções e não gera sucção centrípeta que colapse as paredes venosas vizinhas."
    ],
    "nursingApplication": "O enfermeiro vigia o desempenho do/a fixador externo ortopédico de carbono: o domínio destas propriedades assegura a prevenção de complicações vasculares, necrose de tecidos e falhas mecânicas durante os cuidados diários de saúde."
  },
  {
    "id": 2183,
    "topicId": 2,
    "question": "Comparando o gesso tradicional de Paris (sulfato de cálcio) com as ligaduras de fibra de vidro sintética em ortopedia, qual é a vantagem mecânica da fibra de vidro?",
    "options": [
      "Possui rigidez nula e comporta-se como borracha elástica, permitindo ao doente correr e saltar sem qualquer restrição articular.",
      "Aumenta a densidade do membro em cerca de dez vezes para obrigar o doente a permanecer estritamente em repouso no leito.",
      "Dissolve-se espontaneamente através da transpiração cutânea do doente ao fim de quarenta e oito horas de imobilização ortopédica.",
      "Apresenta maior relação rigidez/peso e excelente resistência à flexão, sendo mais leve e resistente à quebra quando exposta à água."
    ],
    "correctIndex": 3,
    "explanation": "O/A meias anti-embolia cirúrgicas brancas (TED stockings) atua na prática clínica através do seguinte mecanismo biomecânico: exercem pressão profilática de 18 mmHg no tornozelo e 8 mmHg na coxa para doentes acamados em pós-operatório sem mobilidade ativa.",
    "distractorAnalysis": [
      "Está incorreta: a fibra de vidro visa a imobilização rígida de fraturas e não permitir mobilização desportiva descontrolada.",
      "Está incorreta: a fibra de vidro é cerca de três vezes mais leve que o gesso de Paris, reduzindo a fadiga do doente.",
      "Está incorreta: a resina de poliuretano polimerizada é resistente à água e ao suor, mantendo a imobilização durante semanas."
    ],
    "nursingApplication": "O enfermeiro vigia o desempenho do/a meias anti-embolia cirúrgicas brancas (TED stockings): o domínio destas propriedades assegura a prevenção de complicações vasculares, necrose de tecidos e falhas mecânicas durante os cuidados diários de saúde."
  },
  {
    "id": 2184,
    "topicId": 2,
    "question": "Na mecânica da marcha humana, durante a fase de impulsão (elevação do calcanhar), que esforço físico atua sobre o tendão de Aquiles?",
    "options": [
      "Grande tensão de tração mecânica que pode atingir duas a três vezes o peso corporal, com o pé atuando como alavanca de 2.ª classe.",
      "Tensão pura de compressão axial exercida pelos ossos do tarso que empurra o tendão contra o pavimento da superfície de apoio.",
      "Força de cisalhamento nula decorrente da levitação inercial do calcâneo provocada pela contração dos músculos anteriores da perna.",
      "Tensão mecânica inferior a 5 N que é dissipada inteiramente pela flexão das articulações interfalângicas dos dedos do pé."
    ],
    "correctIndex": 0,
    "explanation": "O/A tiras adesivas esterilizadas de aproximação cutânea (Steri-Strips) atua na prática clínica através do seguinte mecanismo biomecânico: reforçadas com filamentos de poliéster para manter tensão de tração constante nas bordas da ferida após remoção precoce de pontos de sutura.",
    "distractorAnalysis": [
      "Está incorreta: os tendões transmitem essencialmente forças mecânicas de tração uniaxial e não compressão axial de empurrão.",
      "Está incorreta: a impulsão exige forças intensas produzidas pelo tríceps sural, atingindo centenas a milhares de Newtons.",
      "Está incorreta: as forças exercidas no tendão de Aquiles são extraordinariamente elevadas durante a fase propulsiva da marcha."
    ],
    "nursingApplication": "O enfermeiro vigia o desempenho do/a tiras adesivas esterilizadas de aproximação cutânea (Steri-Strips): o domínio destas propriedades assegura a prevenção de complicações vasculares, necrose de tecidos e falhas mecânicas durante os cuidados diários de saúde."
  },
  {
    "id": 2185,
    "topicId": 2,
    "question": "Por que razão biomecânica um doente com artrose dolorosa na anca direita deve utilizar a bengala de apoio na mão contralateral (esquerda)?",
    "options": [
      "Anula a força da gravidade sobre o lado direito do corpo através da criação de um campo elétrico de blindagem no membro inferior afetado.",
      "Aumenta o braço de momento da força de apoio em relação à anca direita, reduzindo a força exigida aos abdutores e a compressão articular.",
      "Obriga o doente a inclinar o tronco para o lado lesado para sobrecarregar a cabeça do fémur inflamada e estimular a cicatrização.",
      "Reduz a base de sustentação do corpo para um único ponto de contacto, acelerando a velocidade de passada nos corredores hospitalares."
    ],
    "correctIndex": 1,
    "explanation": "O/A módulo elástico de Young de próteses de titânio (E ~ 110 GPa) atua na prática clínica através do seguinte mecanismo biomecânico: rigidez intermediária entre o osso cortical (18 GPa) e o aço cirúrgico (200 GPa), reduzindo o fenómeno de 'stress shielding' ou reabsorção óssea periprotésica por desuso mecânico.",
    "distractorAnalysis": [
      "Está incorreta: o efeito da bengala contralateral é puramente mecânico de binário de forças e alavancas e não gravitacional elétrico.",
      "Está incorreta: o objetivo terapêutico é justamente diminuir a carga compressiva na cabeça femoral lesada para aliviar a dor.",
      "Está incorreta: o uso da bengala alarga a base de sustentação postural, melhorando o equilíbrio e a estabilidade dinâmica."
    ],
    "nursingApplication": "O enfermeiro vigia o desempenho do/a módulo elástico de Young de próteses de titânio (E ~ 110 GPa): o domínio destas propriedades assegura a prevenção de complicações vasculares, necrose de tecidos e falhas mecânicas durante os cuidados diários de saúde."
  },
  {
    "id": 2186,
    "topicId": 2,
    "question": "O fio de sutura monofilamentar de polidioxanona (PDS) é frequentemente escolhido para o encerramento da parede abdominal porque:",
    "options": [
      "Perde toda a sua resistência tênsil em quarenta e oito horas para que a parede muscular suporte imediatamente a carga pressórica.",
      "Apresenta memória plástica nula e comporta-se como um fluido lubrificante que cola as fibras musculares por adesão celular direta.",
      "Mantém a resistência tênsil por um período prolongado de várias semanas através de degradação hidrolítica lenta sem capilaridade.",
      "Liberta continuamente iões de titânio metálico que transformam as bordas da fáscia muscular numa placa mineralizada rígida."
    ],
    "correctIndex": 2,
    "explanation": "O/A propriedades de fluência (creep) dos discos intervertebrais atua na prática clínica através do seguinte mecanismo biomecânico: perda progressiva de água sob a carga vertical durante o dia com diminuição da altura do disco, recuperando a hidratação e a espessura elástica durante o repouso noturno no leito.",
    "distractorAnalysis": [
      "Está incorreta: a fáscia abdominal necessita de suporte prolongado (semanas) e uma sutura que falhasse em 48 h causaria evisceração.",
      "Está incorreta: o PDS é um sólido polimérico estrutural resistente e não um líquido lubrificante adesivo de contacto.",
      "Está incorreta: o PDS é um polímero sintético biodegradável (poliéster) e não contém iões metálicos de titânio mineral."
    ],
    "nursingApplication": "O enfermeiro vigia o desempenho do/a propriedades de fluência (creep) dos discos intervertebrais: o domínio destas propriedades assegura a prevenção de complicações vasculares, necrose de tecidos e falhas mecânicas durante os cuidados diários de saúde."
  },
  {
    "id": 2187,
    "topicId": 2,
    "question": "Nos circuitos de circulação extracorporal e hemodiálise, o que sucede se a taxa de cisalhamento do sangue ultrapassar o limiar crítico (150 a 300 Pa)?",
    "options": [
      "As hemácias cristalizam instantaneamente numa matriz sólida que interrompe o fluxo de sangue no dialisador por solidificação pura.",
      "O oxigénio gasoso desliga-se covalentemente dos núcleos atómicos de ferro, evaporando sob a forma de bolhas gasosas no oxigenador.",
      "A viscosidade sanguínea aumenta para o infinito de acordo com a Lei de Poiseuille, bloqueando os filtros arteriais do circuito.",
      "Ocorre deformação mecânica excessiva e rotura da membrana dos eritrócitos com hemólise intravascular e libertação de hemoglobina livre."
    ],
    "correctIndex": 3,
    "explanation": "O/A elasticidade das paredes arteriais no envelhecimento (arteriosclerose) atua na prática clínica através do seguinte mecanismo biomecânico: substituição das fibras de elastina por fibras rígidas de colagénio, aumentando o Módulo de Young arterial e elevando a pressão arterial de pulso (sistólica muito alta com diastólica normal ou baixa).",
    "distractorAnalysis": [
      "Está incorreta: as células sanguíneas não cristalizam, sofrendo laceração mecânica e fragmentação traumática (hemólise).",
      "Está incorreta: a ligação oxigénio-hemoglobina é de coordenação química e a hemólise decorre de rotura mecânica parietal.",
      "Está incorreta: em altas taxas de cisalhamento o sangue (fluido pseudoplástico) diminui a sua viscosidade aparente até um patamar."
    ],
    "nursingApplication": "O enfermeiro vigia o desempenho do/a elasticidade das paredes arteriais no envelhecimento (arteriosclerose): o domínio destas propriedades assegura a prevenção de complicações vasculares, necrose de tecidos e falhas mecânicas durante os cuidados diários de saúde."
  },
  {
    "id": 2188,
    "topicId": 2,
    "question": "No tratamento de feridas complexas, os hidrogéis amorfos exibem comportamento reológico tixotrópico. Isso significa clinicamente que:",
    "options": [
      "A sua viscosidade diminui sob tensão de corte ao passar pela cânula aplicadora e aumenta em repouso, fixando-se no leito da lesão.",
      "O gel endurece permanentemente como cimento dentário logo após contactar com o oxigénio atmosférico da ferida cirúrgica.",
      "O produto transforma-se num vapor volátil que se dissipa no ar ambiente em menos de dez segundos após a saída da embalagem.",
      "A densidade do composto varia de acordo com as fases lunares, exigindo aplicação restrita a horários de maré alta fisiológica."
    ],
    "correctIndex": 0,
    "explanation": "O/A suturas metálicas de agrafos cirúrgicos de aço atua na prática clínica através do seguinte mecanismo biomecânico: apresentam comportamento puramente plástico no fecho com o agrafador mecânico, mantendo as bordas da pele coaptadas sem retorno elástico.",
    "distractorAnalysis": [
      "Está incorreta: o hidrogel deve manter-se maleável e hidratado para criar um ambiente húmido favorável à cicatrização.",
      "Está incorreta: o gel é constituído maioritariamente por água purificada retida em matriz polimérica e não evapora subitamente.",
      "Está incorreta: a tixotropia é uma propriedade reológica mecânica intrínseca e não tem relação com ciclos gravitacionais lunares."
    ],
    "nursingApplication": "O enfermeiro vigia o desempenho do/a suturas metálicas de agrafos cirúrgicos de aço: o domínio destas propriedades assegura a prevenção de complicações vasculares, necrose de tecidos e falhas mecânicas durante os cuidados diários de saúde."
  },
  {
    "id": 2189,
    "topicId": 2,
    "question": "Na substituição de grandes vasos por enxertos sintéticos de PTFE expandido (ePTFE) ou Dacron, qual é a relevância do seu Módulo de Young?",
    "options": [
      "Deve ser estritamente igual a zero para permitir que a prótese colapse completamente a cada ciclo de pulsação arterial sistólica.",
      "Deve ser equilibrado para evitar a dilatação aneurismática por fadiga mecânica sem gerar desfasamento de complacência na anastomose.",
      "Tem de ser cem vezes superior ao do diamante para impedir que qualquer agulha cirúrgica consiga trespassar a parede do enxerto.",
      "Diminui continuamente até que a prótese se dissolva por completo no prazo de uma semana após o restabelecimento da circulação."
    ],
    "correctIndex": 1,
    "explanation": "O/A comportamento reológico do líquido sinovial articular atua na prática clínica através do seguinte mecanismo biomecânico: fluido pseudoplástico rico em ácido hialurónico que é altamente viscoso em repouso (lubrificação protetora) e torna-se fluido e pouco viscoso sob movimento rápido (mínima fricção articular).",
    "distractorAnalysis": [
      "Está incorreta: uma prótese que colapsasse na sístole causaria oclusão vascular imediata e isquemia do território irrigado.",
      "Está incorreta: o enxerto deve ser suturável pelo cirurgião, exigindo penetração limpa da agulha sem rasgar as fibras da parede.",
      "Está incorreta: os enxertos sintéticos arteriais são definitivos e devem manter a sua integridade mecânica ao longo da vida do doente."
    ],
    "nursingApplication": "O enfermeiro vigia o desempenho do/a comportamento reológico do líquido sinovial articular: o domínio destas propriedades assegura a prevenção de complicações vasculares, necrose de tecidos e falhas mecânicas durante os cuidados diários de saúde."
  },
  {
    "id": 2190,
    "topicId": 2,
    "question": "Do ponto de vista da mecânica de contacto na articulação do joelho, qual é o papel essencial dos meniscos interno e externo?",
    "options": [
      "Eliminam por completo a transmissão de forças axiais da coxa para a perna, fazendo com que a tíbia flutue livremente no espaço.",
      "Funcionam como rolamentos metálicos que giram a alta velocidade para liquefazer o osso subcondral durante a fase de apoio.",
      "Aumentam a área de contacto articular tíbio-femoral, reduzindo a tensão de compressão média (tensão = F/A) sobre a cartilagem hialina.",
      "Produzem hormonas de crescimento ósseo em resposta a estímulos dolorosos de torção mecânica aplicados na cápsula articular."
    ],
    "correctIndex": 2,
    "explanation": "O/A tubos de aspiração cirúrgica de silicone médico reforçado com espiral atua na prática clínica através do seguinte mecanismo biomecânico: a espiral rígida de aço ou polímero impede o colapso do tubo sob vácuo de alta sucção (resistência à pressão negativa de colapso).",
    "distractorAnalysis": [
      "Está incorreta: os meniscos transmitem cerca de 50 a 70% da carga axial do joelho, redistribuindo-a por uma área mais ampla.",
      "Está incorreta: os meniscos são estruturas fibrocartilaginosas sem componentes metálicos que amortecem e estabilizam a articulação.",
      "Está incorreta: a sua função primordial é mecânica de transmissão e absorção de carga e não de síntese endócrina primária."
    ],
    "nursingApplication": "O enfermeiro vigia o desempenho do/a tubos de aspiração cirúrgica de silicone médico reforçado com espiral: o domínio destas propriedades assegura a prevenção de complicações vasculares, necrose de tecidos e falhas mecânicas durante os cuidados diários de saúde."
  },
  {
    "id": 2191,
    "topicId": 2,
    "question": "Durante as manobras de Suporte Básico de Vida (SBV), por que razão a descompressão torácica completa é tão crucial quanto a compressão esternal de 5 a 6 cm?",
    "options": [
      "Evita que as costelas entrem em fusão química permanente com o músculo peitoral maior por excesso de calor gerado na fricção manual.",
      "Permite que o ar atmosférico seja expelido passivamente pelas artérias pulmonares em direção ao exterior da traqueia do doente.",
      "Anula a inércia gravítica do corpo humano, facilitando o transporte do doente na maca hospitalar durante as manobras de reanimação.",
      "Permite o recuo elástico do tórax gerando pressão intratorácica negativa que promove o retorno venoso e o enchimento ventricular."
    ],
    "correctIndex": 3,
    "explanation": "O/A elastómero de vedação em seringas pré-cheias de heparina atua na prática clínica através do seguinte mecanismo biomecânico: borracha sintética de alta estanquicidade que mantém a esterilidade e impede a entrada de ar com coeficiente de atrito cinético constante no cilindro.",
    "distractorAnalysis": [
      "Está incorreta: a massagem cardíaca não gera calor capaz de provocar fusão química entre tecidos musculoesqueléticos.",
      "Está incorreta: o fluxo sanguíneo segue o circuito vascular fechado e o ar entra e sai exclusivamente pelas vias aéreas.",
      "Está incorreta: o objetivo hemodinâmico do alívio entre compressões é a recarga diastólica das câmaras cardíacas."
    ],
    "nursingApplication": "O enfermeiro vigia o desempenho do/a elastómero de vedação em seringas pré-cheias de heparina: o domínio destas propriedades assegura a prevenção de complicações vasculares, necrose de tecidos e falhas mecânicas durante os cuidados diários de saúde."
  },
  {
    "id": 2192,
    "topicId": 2,
    "question": "Nos primeiros 15° de abdução do braço, por que razão o músculo supraespinhoso é indispensável antes da ação vigorosa do deltoide?",
    "options": [
      "A linha de ação do deltoide é quase paralela ao úmero nessa posição, gerando cisalhamento superior em vez de rotação articular.",
      "O deltoide encontra-se totalmente paralisado em repouso e só pode ser ativado voluntariamente se a mão estiver acima da cabeça.",
      "O supraespinhoso atua como alavanca de 2.ª classe que reduz o peso do membro superior para um valor estritamente nulo.",
      "A articulação glenoumeral roda no sentido oposto nos primeiros graus devido à atração gravitacional do músculo grande dorsal."
    ],
    "correctIndex": 0,
    "explanation": "O/A fixador externo ortopédico de carbono atua na prática clínica através do seguinte mecanismo biomecânico: material compósito de fibra de carbono com altíssima rigidez e radiotransparência, permitindo o controlo radiológico da fratura sem artefactos metálicos opacos.",
    "distractorAnalysis": [
      "Está incorreta: o deltoide está inervado e ativo, mas a sua orientação vetorial inicial puxa a cabeça do úmero contra o acrómio.",
      "Está incorreta: nenhum músculo anula a massa do membro, necessitando o supraespinhoso de produzir o binário rotacional inicial.",
      "Está incorreta: o movimento fisiológico de abdução é coordenado pelo manguito rotador para centralizar a cabeça na cavidade glenoide."
    ],
    "nursingApplication": "O enfermeiro vigia o desempenho do/a fixador externo ortopédico de carbono: o domínio destas propriedades assegura a prevenção de complicações vasculares, necrose de tecidos e falhas mecânicas durante os cuidados diários de saúde."
  },
  {
    "id": 2193,
    "topicId": 2,
    "question": "Nas cânulas de traqueostomia com balão (cuff) de silicone de alta complacência, qual é a vantagem da sua resiliência elástica em ventilação invasiva?",
    "options": [
      "Expande livremente até rasgar as cartilagens traqueais para criar uma abertura cirúrgica secundária de ventilação mecânica.",
      "Permite vedação hermética com pressões parietais controladas (20 a 30 cmH₂O), minimizando o risco de estenose e necrose traqueal.",
      "Impede a passagem de oxigénio gasoso através do tubo, obrigando o doente a respirar unicamente por difusão cutânea periestomal.",
      "Endurece progressivamente com a humidade da via aérea, convertendo-se num anel cerâmico permanente e rígido no pescoço."
    ],
    "correctIndex": 1,
    "explanation": "O/A meias anti-embolia cirúrgicas brancas (TED stockings) atua na prática clínica através do seguinte mecanismo biomecânico: exercem pressão profilática de 18 mmHg no tornozelo e 8 mmHg na coxa para doentes acamados em pós-operatório sem mobilidade ativa.",
    "distractorAnalysis": [
      "Está incorreta: pressões superiores à pressão de perfusão capilar traqueal (> 30 cmH₂O) causariam isquemia e fístulas graves.",
      "Está incorreta: o objetivo do cuff é vedar o espaço peritubo para garantir que o volume corrente entra pela cânula traqueal.",
      "Está incorreta: o silicone médico é inerte e mantém a sua flexibilidade elástica sem sofrer calcificação cerâmica na traqueia."
    ],
    "nursingApplication": "O enfermeiro vigia o desempenho do/a meias anti-embolia cirúrgicas brancas (TED stockings): o domínio destas propriedades assegura a prevenção de complicações vasculares, necrose de tecidos e falhas mecânicas durante os cuidados diários de saúde."
  },
  {
    "id": 2194,
    "topicId": 2,
    "question": "Na biomecânica postural humana em posição de pé (ortostatismo bipodal), como é transmitida a força peso do tronco à bacia e membros inferiores?",
    "options": [
      "Transfere-se integralmente para a sínfise púbica anterior que suporta 100% da carga gravitacional através de tração pura.",
      "É anulada pelos ligamentos sacroisquiáticos, de modo que nenhuma força compressiva atinge os ossos do fémur e tíbia.",
      "Divide-se pela articulação sacroilíaca para as asas ilíacas e cabeças femorais, funcionando a bacia como um arco estrutural de suporte.",
      "Flui exclusivamente através do cóccix para o tecido celular subcutâneo perineal sem qualquer envolvimento dos ossos da cintura pélvica."
    ],
    "correctIndex": 2,
    "explanation": "O/A tiras adesivas esterilizadas de aproximação cutânea (Steri-Strips) atua na prática clínica através do seguinte mecanismo biomecânico: reforçadas com filamentos de poliéster para manter tensão de tração constante nas bordas da ferida após remoção precoce de pontos de sutura.",
    "distractorAnalysis": [
      "Está incorreta: a sínfise púbica fecha o anel pélvico anteriormente mas a linha de carga passa pelas articulações sacroilíacas e anca.",
      "Está incorreta: os membros inferiores suportam diretamente o peso do tronco, cabeça e membros superiores através do fémur.",
      "Está incorreta: a transmissão óssea de carga realiza-se pelo anel pélvico e cabeças femorais e não pelas vértebras coccígeas."
    ],
    "nursingApplication": "O enfermeiro vigia o desempenho do/a tiras adesivas esterilizadas de aproximação cutânea (Steri-Strips): o domínio destas propriedades assegura a prevenção de complicações vasculares, necrose de tecidos e falhas mecânicas durante os cuidados diários de saúde."
  },
  {
    "id": 2195,
    "topicId": 2,
    "question": "A abertura de frascos de medicamentos com tampas de segurança resistentes a crianças exige aplicação simultânea de duas forças mecânicas:",
    "options": [
      "Força de tração ascendente de alta velocidade combinada com vibração sónica gerada pelo impacto dos dedos na embalagem.",
      "Pressão hidrostática contínua aplicada com seringa de água estéril para dissolver o lacre plástico por eletrólise química.",
      "Momento de torção exclusivamente horário com intensidade dez vezes superior ao peso corporal do profissional de saúde.",
      "Força de compressão axial para engatar as cremalheiras internas combinada com um momento de torção para vencer o atrito da rosca."
    ],
    "correctIndex": 3,
    "explanation": "O/A módulo elástico de Young de próteses de titânio (E ~ 110 GPa) atua na prática clínica através do seguinte mecanismo biomecânico: rigidez intermediária entre o osso cortical (18 GPa) e o aço cirúrgico (200 GPa), reduzindo o fenómeno de 'stress shielding' ou reabsorção óssea periprotésica por desuso mecânico.",
    "distractorAnalysis": [
      "Está incorreta: o sistema de segurança (push-and-turn) requer pressão axial descendente de engate e rotação e não tração sónica.",
      "Está incorreta: o mecanismo é puramente físico de engrenagem mecânica e não depende de dissolução eletrolítica por água.",
      "Está incorreta: o desaperto da tampa faz-se habitualmente no sentido anti-horário com forças manuais perfeitamente acessíveis."
    ],
    "nursingApplication": "O enfermeiro vigia o desempenho do/a módulo elástico de Young de próteses de titânio (E ~ 110 GPa): o domínio destas propriedades assegura a prevenção de complicações vasculares, necrose de tecidos e falhas mecânicas durante os cuidados diários de saúde."
  },
  {
    "id": 2196,
    "topicId": 2,
    "question": "Qual é o princípio biofísico de funcionamento das almofadas de espuma viscoelástica moldada para utilizadores de cadeira de rodas?",
    "options": [
      "Deformam-se lentamente sob as tuberosidades isquiáticas maximizando a área de contacto, o que reduz os picos locais de pressão tecidual.",
      "Exercem uma força ascendente ativa que mantém o doente permanentemente suspenso sem qualquer contacto físico com o assento.",
      "Apresentam Módulo de Young infinito que impede qualquer deformação geométrica da almofada sob o peso do paciente acamado.",
      "Convertem a energia gravitacional do utilizador em calor a 45 °C para aumentar a sudorese e reduzir o peso corporal por desidratação."
    ],
    "correctIndex": 0,
    "explanation": "O/A propriedades de fluência (creep) dos discos intervertebrais atua na prática clínica através do seguinte mecanismo biomecânico: perda progressiva de água sob a carga vertical durante o dia com diminuição da altura do disco, recuperando a hidratação e a espessura elástica durante o repouso noturno no leito.",
    "distractorAnalysis": [
      "Está incorreta: a almofada atua por distribuição passiva da força peso sobre uma área ampliada (P = F/A) e não por levitação.",
      "Está incorreta: a eficácia da espuma viscoelástica reside justamente na sua complacência e capacidade de adaptação anatómica.",
      "Está incorreta: o sobreaquecimento da pele e a maceração pelo suor agravariam o risco de desenvolvimento de lesões por pressão."
    ],
    "nursingApplication": "O enfermeiro vigia o desempenho do/a propriedades de fluência (creep) dos discos intervertebrais: o domínio destas propriedades assegura a prevenção de complicações vasculares, necrose de tecidos e falhas mecânicas durante os cuidados diários de saúde."
  },
  {
    "id": 2197,
    "topicId": 2,
    "question": "Devido ao comportamento viscoelástico dos ligamentos articulares humanos, o que sucede quando a taxa de deformação (velocidade de carga) aumenta?",
    "options": [
      "O ligamento amolece instantaneamente e rompe-se com uma força tênsil significativamente inferior à suportada em repouso estático.",
      "O ligamento torna-se mais rígido e suporta maior carga de tração antes da rotura, transferindo frequentemente a lesão para o osso.",
      "O tecido perde todo o seu colagénio tipo I por vaporização celular instantânea provocada pelo atrito biomecânico intra-articular.",
      "A resposta mecânica é estritamente idêntica independentemente da velocidade do movimento, pois os ligamentos são perfeitamente elásticos."
    ],
    "correctIndex": 1,
    "explanation": "O/A elasticidade das paredes arteriais no envelhecimento (arteriosclerose) atua na prática clínica através do seguinte mecanismo biomecânico: substituição das fibras de elastina por fibras rígidas de colagénio, aumentando o Módulo de Young arterial e elevando a pressão arterial de pulso (sistólica muito alta com diastólica normal ou baixa).",
    "distractorAnalysis": [
      "Está incorreta: materiais viscoelásticos aumentam a sua rigidez (Módulo de Young aparente) com a velocidade de deformação.",
      "Está incorreta: o aumento da taxa de carga reforça a rigidez tênsil ligamentar, resultando muitas vezes em arrancamento ósseo (avulsão).",
      "Está incorreta: tecidos biológicos exibem dependência viscoelástica do tempo e taxa de deformação, não sendo puramente elásticos."
    ],
    "nursingApplication": "O enfermeiro vigia o desempenho do/a elasticidade das paredes arteriais no envelhecimento (arteriosclerose): o domínio destas propriedades assegura a prevenção de complicações vasculares, necrose de tecidos e falhas mecânicas durante os cuidados diários de saúde."
  },
  {
    "id": 2198,
    "topicId": 2,
    "question": "Na cirurgia vascular e procedimentos de enfermagem, qual é a finalidade das molas calibradas em pinças de clampeamento temporário (Bulldog)?",
    "options": [
      "Aumentar progressivamente a força de compressão ao longo do tempo até cortar transversalmente o vaso sanguíneo como uma guilhotina.",
      "Transmitir corrente galvânica para cauterizar as artérias circundantes através de choque elétrico gerado pela mola metálica.",
      "Exercer uma pressão de oclusão endotelial controlada suficiente para travar o fluxo sem esmagar ou lacerar a parede do vaso.",
      "Injetar soluções anticoagulantes diretamente no lúmen arterial através de microcanais porosos situados nos dentes de aperto."
    ],
    "correctIndex": 2,
    "explanation": "O/A suturas metálicas de agrafos cirúrgicos de aço atua na prática clínica através do seguinte mecanismo biomecânico: apresentam comportamento puramente plástico no fecho com o agrafador mecânico, mantendo as bordas da pele coaptadas sem retorno elástico.",
    "distractorAnalysis": [
      "Está incorreta: as pinças Bulldog destinam-se à hemostase temporária reversível e atraumática sem corte ou esmagamento vascular.",
      "Está incorreta: o dispositivo é puramente mecânico de contenção elástica por mola e não emite correntes elétricas de cauterização.",
      "Está incorreta: a pinça é um instrumento de preensão externa sólida sem circuitos de infusão farmacológica intraluminal."
    ],
    "nursingApplication": "O enfermeiro vigia o desempenho do/a suturas metálicas de agrafos cirúrgicos de aço: o domínio destas propriedades assegura a prevenção de complicações vasculares, necrose de tecidos e falhas mecânicas durante os cuidados diários de saúde."
  },
  {
    "id": 2199,
    "topicId": 2,
    "question": "Em intervenções de saúde prolongadas, por que razão as luvas cirúrgicas de látex ou borracha sintética devem ser trocadas periodicamente?",
    "options": [
      "As luvas sofrem um aumento descontrolado de espessura que bloqueia totalmente a sensibilidade tátil e a circulação dos dedos.",
      "O material polimérico funde-se irreversivelmente com as proteínas da pele do profissional ao fim de trinta minutos contínuos.",
      "As luvas perdem a sua massa atómica por evaporação dos monómeros de borracha no ar condicionado da sala operatória.",
      "A fadiga mecânica elástica e o estiramento repetido provocam microperfurações microscópicas que comprometem a barreira biológica estanque."
    ],
    "correctIndex": 3,
    "explanation": "O/A comportamento reológico do líquido sinovial articular atua na prática clínica através do seguinte mecanismo biomecânico: fluido pseudoplástico rico em ácido hialurónico que é altamente viscoso em repouso (lubrificação protetora) e torna-se fluido e pouco viscoso sob movimento rápido (mínima fricção articular).",
    "distractorAnalysis": [
      "Está incorreta: as luvas sofrem atenuação e perda de espessura por estiramento mecânico e fadiga e não dilatação volumétrica.",
      "Está incorreta: os elastómeros médicos não se fundem à pele humana nem colam irreversivelmente sob temperaturas fisiológicas normais.",
      "Está incorreta: a troca periódica recomendada visa prevenir a quebra da barreira estéril por microfissuras decorrentes de fadiga mecânica."
    ],
    "nursingApplication": "O enfermeiro vigia o desempenho do/a comportamento reológico do líquido sinovial articular: o domínio destas propriedades assegura a prevenção de complicações vasculares, necrose de tecidos e falhas mecânicas durante os cuidados diários de saúde."
  },
  {
    "id": 2200,
    "topicId": 2,
    "question": "Como se sintetiza a importância dos conceitos de alavancas, elasticidade e biomateriais para a prática avançada de enfermagem?",
    "options": [
      "Permitem fundamentar a ergonomia de posicionamento e transferências, operar instrumentos com segurança e escolher biomateriais adequados.",
      "Constituem conhecimentos puramente abstratos destinados apenas a cálculos teóricos de física sem aplicação na assistência ao doente.",
      "Servem exclusivamente para dispensar o uso de luvas, batas e equipamento de proteção em doentes com infeções multirresistentes.",
      "Permitem aos enfermeiros calcular a órbita de satélites espaciais para monitorização remota de electrocardiogramas hospitalares."
    ],
    "correctIndex": 0,
    "explanation": "O/A tubos de aspiração cirúrgica de silicone médico reforçado com espiral atua na prática clínica através do seguinte mecanismo biomecânico: a espiral rígida de aço ou polímero impede o colapso do tubo sob vácuo de alta sucção (resistência à pressão negativa de colapso).",
    "distractorAnalysis": [
      "Está incorreta: a física e biomecânica aplicada são alicerces essenciais dos cuidados de enfermagem e da segurança dos doentes e profissionais.",
      "Está incorreta: as regras de assepsia e equipamentos de proteção individual são independentes das leis biomecânicas da matéria.",
      "Está incorreta: os conceitos abordados focam a biomecânica humana, instrumentação e dispositivos médicos no contexto da saúde."
    ],
    "nursingApplication": "O enfermeiro vigia o desempenho do/a tubos de aspiração cirúrgica de silicone médico reforçado com espiral: o domínio destas propriedades assegura a prevenção de complicações vasculares, necrose de tecidos e falhas mecânicas durante os cuidados diários de saúde."
  }
];
