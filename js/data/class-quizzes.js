// Quizzes da aula (Arena): 5 quizzes fixos (A–E) × 20 perguntas concetuais, sem cálculos (45 s por pergunta).
// Banco separado do banco dos alunos. IDs 9001–9100; o campo "quiz" agrupa as perguntas.
const CLASS_QUIZ_QUESTIONS = [
  {
    "id": 9001,
    "topicId": 1,
    "quiz": "A",
    "question": "Ao planear a força que vai aplicar para empurrar uma cama, que conjunto de elementos caracteriza completamente essa força?",
    "options": [
      "Ponto de aplicação, direção, sentido e intensidade.",
      "Intensidade e direção, já que o sentido decorre da direção.",
      "Massa da cama, velocidade e intensidade da força aplicada.",
      "Apenas a intensidade da força, medida em newtons."
    ],
    "correctIndex": 0,
    "explanation": "A força é um vetor ligado: fica definida pelo ponto de aplicação, pela direção (linha de ação), pelo sentido e pela intensidade (em N).",
    "distractorAnalysis": [
      "Está incorreta: A direção é só a linha de ação; o sentido indica para que lado atua e é um elemento independente. Falta ainda o ponto de aplicação.",
      "Está incorreta: A massa e a velocidade são grandezas do corpo, não elementos da força.",
      "Está incorreta: A força é uma grandeza vetorial: a intensidade, sozinha, não diz onde, em que linha nem para que lado atua."
    ],
    "nursingApplication": "Ao planear uma mobilização, o enfermeiro define onde apoia as mãos, em que direção e sentido puxa e com que intensidade, ou seja, os quatro elementos da força."
  },
  {
    "id": 9002,
    "topicId": 1,
    "quiz": "A",
    "question": "Ao deslizar um utente sobre um lençol, os enfermeiros notam que custa mais iniciar o movimento do que mantê-lo. Porquê?",
    "options": [
      "O atrito estático máximo é maior do que o atrito cinético.",
      "O atrito cinético é maior do que o atrito estático máximo.",
      "O peso do utente diminui depois de começar a deslizar.",
      "Durante o deslizamento deixa de existir atrito entre as superfícies."
    ],
    "correctIndex": 0,
    "explanation": "Para iniciar o deslizamento é preciso vencer o atrito estático máximo (μ<sub>e</sub>·N), que é superior ao atrito cinético (μ<sub>c</sub>·N) que atua depois.",
    "distractorAnalysis": [
      "Está incorreta: Inverte a relação: se o cinético fosse maior, seria mais difícil manter o movimento do que iniciá-lo.",
      "Está incorreta: O peso, P = m·g, não depende de o corpo estar parado ou em movimento.",
      "Está incorreta: Continua a existir atrito cinético; apenas é menor do que o atrito estático máximo."
    ],
    "nursingApplication": "Usar um lençol de transferência de baixo atrito e manter o deslizamento contínuo, sem paragens, evita ter de vencer repetidamente o atrito estático máximo."
  },
  {
    "id": 9003,
    "topicId": 1,
    "quiz": "A",
    "question": "Na flexão do antebraço pelo bíceps, segurando um copo na mão, como se dispõem o fulcro, a força potente e a força resistente?",
    "options": [
      "Fulcro no cotovelo e força potente entre o fulcro e a carga.",
      "Fulcro entre a força potente e a carga, como numa balança.",
      "Carga entre o fulcro e a força potente, como num carrinho de mão.",
      "Força potente aplicada na mão e carga junto ao cotovelo."
    ],
    "correctIndex": 0,
    "explanation": "É uma alavanca de 3.ª classe: o fulcro é a articulação do cotovelo, a força potente (bíceps) atua perto dele e a força resistente (carga) está na mão.",
    "distractorAnalysis": [
      "Está incorreta: Essa disposição é a de uma alavanca de 1.ª classe; no cotovelo o fulcro fica numa extremidade.",
      "Está incorreta: Essa é a disposição de 2.ª classe; o bíceps insere-se entre o cotovelo e a mão.",
      "Está incorreta: Inverte as posições: a carga está na mão e o bíceps insere-se no rádio, perto do cotovelo."
    ],
    "nursingApplication": "Por ser uma alavanca de 3.ª classe, segurar objetos com o antebraço afastado do corpo exige grande força do bíceps, o que importa ao ensinar a transportar cargas."
  },
  {
    "id": 9004,
    "topicId": 1,
    "quiz": "A",
    "question": "Num adulto de pé, em posição anatómica, onde se localiza aproximadamente o centro de gravidade?",
    "options": [
      "No tórax, aproximadamente ao nível do coração.",
      "À superfície da pele, ao nível do umbigo.",
      "Na pelve, à frente da 2.ª vértebra sagrada.",
      "Nos pés, por serem a base de sustentação."
    ],
    "correctIndex": 2,
    "explanation": "No adulto de pé, o centro de gravidade situa-se na pelve, ligeiramente anterior à 2.ª vértebra sagrada (S2).",
    "distractorAnalysis": [
      "Está incorreta: Fica mais abaixo: a massa dos membros inferiores e da pelve baixa o centro de gravidade.",
      "Está incorreta: O centro de gravidade de um adulto de pé fica no interior da pelve, não à superfície.",
      "Está incorreta: Confunde o centro de gravidade com a base; é a vertical do centro de gravidade que deve cair dentro da base."
    ],
    "nursingApplication": "Como o centro de gravidade fica na pelve, segurar o utente pela cintura, com cinto de transferência, ajuda a controlar o seu equilíbrio."
  },
  {
    "id": 9005,
    "topicId": 1,
    "quiz": "A",
    "question": "Dois enfermeiros aplicam a mesma força resultante horizontal a duas macas iguais, uma vazia e outra com um utente. Qual adquire maior aceleração?",
    "options": [
      "A maca com o utente, porque tem maior peso.",
      "A maca vazia, porque tem menor massa.",
      "Igual nas duas, porque a força resultante é a mesma.",
      "Nenhuma, porque a força resultante é horizontal."
    ],
    "correctIndex": 1,
    "explanation": "A 2.ª lei de Newton, F<sub>R</sub> = m·a, mostra que, para a mesma força resultante, a aceleração é inversamente proporcional à massa.",
    "distractorAnalysis": [
      "Está incorreta: Pela 2.ª lei, a = F<sub>R</sub>/m: mais massa significa menor aceleração para a mesma força.",
      "Está incorreta: A aceleração depende da força resultante e também da massa.",
      "Está incorreta: Uma força resultante horizontal produz aceleração na horizontal."
    ],
    "nursingApplication": "Uma maca com utente exige mais força para atingir a mesma aceleração e para travar, por isso deve ser manobrada com antecedência."
  },
  {
    "id": 9006,
    "topicId": 2,
    "quiz": "A",
    "question": "Em Biofísica, a reologia é a área que estuda:",
    "options": [
      "A composição química dos tecidos e a sua mineralização.",
      "A deformação e o escoamento da matéria sob ação de forças.",
      "A propagação do som nos tecidos moles e no osso.",
      "O movimento dos corpos rígidos, sem qualquer deformação."
    ],
    "correctIndex": 1,
    "explanation": "A reologia estuda como a matéria se deforma e escoa quando sujeita a forças, o que inclui sólidos elásticos, plásticos, viscosos e viscoelásticos.",
    "distractorAnalysis": [
      "Está incorreta: A composição química e a mineralização pertencem à bioquímica e à histologia, não à reologia.",
      "Está incorreta: A propagação do som é estudada pela acústica.",
      "Está incorreta: Os corpos rígidos ideais não se deformam; a reologia estuda precisamente a deformação e o escoamento."
    ],
    "nursingApplication": "Ajuda a compreender como a pele, os tendões e o osso se deformam quando sujeitos a pressão, tração ou cisalhamento durante a mobilização."
  },
  {
    "id": 9007,
    "topicId": 2,
    "quiz": "A",
    "question": "A estatura de uma pessoa é ligeiramente menor à noite do que de manhã, porque os discos intervertebrais se comprimem sob carga constante ao longo do dia. Que fenómeno é este?",
    "options": [
      "Relaxação de tensões.",
      "Histerese.",
      "Fluência.",
      "Deformação plástica."
    ],
    "correctIndex": 2,
    "explanation": "Fluência é o aumento progressivo da deformação de um material viscoelástico sujeito a uma carga constante.",
    "distractorAnalysis": [
      "Está incorreta: Na relaxação a deformação é mantida constante e a tensão diminui; aqui a carga é constante e a deformação aumenta.",
      "Está incorreta: A histerese é a diferença entre as curvas de carga e descarga, não o aumento da deformação sob carga constante.",
      "Está incorreta: A deformação dos discos recupera durante o repouso noturno, logo não é permanente."
    ],
    "nursingApplication": "Ao medir a altura em consultas de seguimento convém fazê-lo à mesma hora do dia, porque a fluência dos discos altera ligeiramente a estatura."
  },
  {
    "id": 9008,
    "topicId": 2,
    "quiz": "A",
    "question": "Qual das sequências ordena os materiais por ordem crescente de módulo de Young (rigidez)?",
    "options": [
      "Osso < borracha < aço < vidro",
      "Borracha < osso < vidro < aço",
      "Borracha < vidro < osso < aço",
      "Aço < vidro < osso < borracha"
    ],
    "correctIndex": 1,
    "explanation": "O módulo de Young mede a rigidez: a borracha deforma-se muito (E baixo), o osso tem E intermédio, e o vidro e o aço são muito rígidos.",
    "distractorAnalysis": [
      "Está incorreta: A borracha é muito menos rígida do que o osso, e o aço é mais rígido do que o vidro.",
      "Está incorreta: O vidro é mais rígido do que o osso.",
      "Está incorreta: Inverte a ordem: confunde rigidez com flexibilidade; o aço é o mais rígido."
    ],
    "nursingApplication": "Placas de aço, muito mais rígidas do que o osso, suportam grande parte da carga, o que se relaciona com a blindagem de tensões."
  },
  {
    "id": 9009,
    "topicId": 2,
    "quiz": "A",
    "question": "O osso é um material compósito. Que componentes lhe dão, respetivamente, resistência à compressão e resistência à tração?",
    "options": [
      "Colagénio e hidroxiapatite (mineral).",
      "Hidroxiapatite (mineral) e colagénio.",
      "Medula óssea e periósteo.",
      "Água e cartilagem articular."
    ],
    "correctIndex": 1,
    "explanation": "No osso, os cristais de hidroxiapatite dão rigidez e resistência à compressão, e as fibras de colagénio dão flexibilidade e resistência à tração.",
    "distractorAnalysis": [
      "Está incorreta: Troca os papéis: o mineral resiste à compressão e as fibras de colagénio à tração.",
      "Está incorreta: A medula e o periósteo não são os componentes da matriz responsáveis por estas resistências.",
      "Está incorreta: A cartilagem articular não faz parte da matriz óssea, e a água não confere estas resistências."
    ],
    "nursingApplication": "Na osteoporose, a diminuição da massa óssea reduz a resistência à compressão e aumenta o risco de fraturas vertebrais."
  },
  {
    "id": 9010,
    "topicId": 2,
    "quiz": "A",
    "question": "Um utente fica várias semanas imobilizado no leito. Segundo a lei de Wolff, o que tende a acontecer ao seu osso?",
    "options": [
      "Ganha massa óssea por estar em repouso.",
      "Mantém-se igual, porque o osso adulto não se remodela.",
      "Perde massa óssea por falta de cargas mecânicas.",
      "Torna-se mais rígido devido à fluência."
    ],
    "correctIndex": 2,
    "explanation": "A lei de Wolff diz que o osso se adapta às cargas a que é sujeito: ganha massa onde é solicitado e perde-a quando deixa de o ser.",
    "distractorAnalysis": [
      "Está incorreta: O repouso retira estímulo mecânico, o que leva a reabsorção e não a ganho ósseo.",
      "Está incorreta: O osso remodela-se ao longo de toda a vida.",
      "Está incorreta: A fluência é um comportamento viscoelástico sob carga e não explica a resposta à imobilização."
    ],
    "nursingApplication": "A mobilização precoce e o levante, quando clinicamente possíveis, ajudam a preservar a massa óssea do utente."
  },
  {
    "id": 9011,
    "topicId": 3,
    "quiz": "A",
    "question": "Em hidrodinâmica, a viscosidade de um líquido traduz:",
    "options": [
      "A massa por unidade de volume do líquido.",
      "A pressão que o líquido exerce sobre as paredes.",
      "A velocidade com que o líquido escoa num tubo.",
      "O atrito interno entre camadas do fluido."
    ],
    "correctIndex": 3,
    "explanation": "A viscosidade (η) mede o atrito interno entre camadas de fluido que deslizam umas sobre as outras; quanto maior, maior a resistência ao escoamento.",
    "distractorAnalysis": [
      "Está incorreta: Isso é a densidade; um líquido pode ser denso e pouco viscoso.",
      "Está incorreta: A pressão é força por unidade de área e não mede a resistência interna ao escoamento.",
      "Está incorreta: A velocidade depende da viscosidade, mas não é a viscosidade."
    ],
    "nursingApplication": "Uma alimentação entérica espessa, mais viscosa, escoa mais lentamente pela sonda e pode exigir bomba de perfusão."
  },
  {
    "id": 9012,
    "topicId": 3,
    "quiz": "A",
    "question": "Que característica distingue o escoamento turbulento do laminar?",
    "options": [
      "Camadas paralelas que deslizam umas sobre as outras.",
      "Perfil de velocidades parabólico bem definido.",
      "Redemoinhos e mistura das camadas, com ruído.",
      "Menor dissipação de energia para o mesmo caudal."
    ],
    "correctIndex": 2,
    "explanation": "No escoamento turbulento formam-se redemoinhos, as camadas misturam-se, dissipa-se mais energia e surgem vibrações audíveis.",
    "distractorAnalysis": [
      "Está incorreta: Camadas paralelas e ordenadas caracterizam o escoamento laminar.",
      "Está incorreta: O perfil parabólico é próprio do escoamento laminar.",
      "Está incorreta: O escoamento turbulento dissipa mais energia, não menos."
    ],
    "nursingApplication": "O ruído do escoamento turbulento permite auscultar sopros cardíacos e vasculares com o estetoscópio."
  },
  {
    "id": 9013,
    "topicId": 3,
    "quiz": "A",
    "question": "O que é o caudal crítico de um tubo?",
    "options": [
      "O caudal acima do qual deixa de ser laminar.",
      "O caudal máximo que um cateter suporta sem romper.",
      "O caudal a partir do qual o fluido deixa de escoar.",
      "O caudal em que a viscosidade do líquido se anula."
    ],
    "correctIndex": 0,
    "explanation": "O caudal crítico é o caudal para o qual Re atinge cerca de 2000; acima dele o escoamento deixa de ser laminar e passa a transição e, depois, a turbulência.",
    "distractorAnalysis": [
      "Está incorreta: O caudal crítico refere-se à mudança de regime, não à resistência mecânica do tubo.",
      "Está incorreta: Acima do caudal crítico o fluido continua a escoar, mas em regime de transição ou turbulento.",
      "Está incorreta: A viscosidade é uma propriedade do líquido e não se anula com o caudal."
    ],
    "nursingApplication": "Em perfusões muito rápidas por cateteres finos pode aproximar-se o caudal crítico, com turbulência e maior resistência ao fluxo."
  },
  {
    "id": 9014,
    "topicId": 3,
    "quiz": "A",
    "question": "Para uma reposição rápida de volume, que cateter venoso periférico permite maior caudal, mantendo as restantes condições?",
    "options": [
      "22 G, porque tem maior diâmetro interno.",
      "22 G, por ser mais fino e acelerar o líquido.",
      "Igual nos dois, porque o soro é o mesmo.",
      "14 G, porque tem maior diâmetro interno."
    ],
    "correctIndex": 3,
    "explanation": "Quanto menor o número gauge, maior o diâmetro; como D depende de R<sup>4</sup>, o 14 G permite um caudal muito maior.",
    "distractorAnalysis": [
      "Está incorreta: Na escala gauge, um número maior corresponde a um cateter mais fino.",
      "Está incorreta: Um cateter mais fino tem maior resistência e menor caudal.",
      "Está incorreta: O caudal depende fortemente do raio do cateter."
    ],
    "nursingApplication": "Em hemorragia ou choque, privilegia-se o cateter de maior calibre possível, como 14 G ou 16 G."
  },
  {
    "id": 9015,
    "topicId": 3,
    "quiz": "A",
    "question": "Em que condição é válida a lei de Poiseuille e o cálculo de R<sub>h</sub> a partir dela?",
    "options": [
      "Em escoamento turbulento, com redemoinhos.",
      "Em qualquer regime, laminar ou turbulento.",
      "Apenas em líquidos sem qualquer viscosidade.",
      "Em escoamento laminar de fluido viscoso."
    ],
    "correctIndex": 3,
    "explanation": "A lei de Poiseuille, e a resistência hidrodinâmica dela derivada, descreve o escoamento laminar de um fluido viscoso num tubo cilíndrico.",
    "distractorAnalysis": [
      "Está incorreta: Com turbulência há dissipação adicional de energia que a lei de Poiseuille não contempla.",
      "Está incorreta: A lei de Poiseuille só se aplica ao regime laminar.",
      "Está incorreta: A lei de Poiseuille depende precisamente da viscosidade η."
    ],
    "nursingApplication": "Em zonas com turbulência, como estenoses, o caudal real é menor do que o previsto pela lei de Poiseuille."
  },
  {
    "id": 9016,
    "topicId": 4,
    "quiz": "A",
    "question": "O que estuda a hidrostática?",
    "options": [
      "Os fluidos em movimento e o seu caudal.",
      "A deformação dos sólidos sob tensão.",
      "Os fluidos em repouso e a sua pressão.",
      "Apenas os gases, que são compressíveis."
    ],
    "correctIndex": 2,
    "explanation": "A hidrostática estuda os fluidos em equilíbrio (em repouso) e as pressões que exercem, incluindo a pressão a diferentes profundidades.",
    "distractorAnalysis": [
      "Está incorreta: Os fluidos em movimento são objeto da hidrodinâmica.",
      "Está incorreta: A deformação dos sólidos é estudada pela elasticidade.",
      "Está incorreta: A hidrostática estuda líquidos e gases em repouso."
    ],
    "nursingApplication": "A diferença de pressão entre um saco de soro elevado e a veia é um problema de hidrostática."
  },
  {
    "id": 9017,
    "topicId": 4,
    "quiz": "A",
    "question": "Na experiência de Torricelli, o que existe no espaço acima da coluna de mercúrio no tubo invertido?",
    "options": [
      "Ar à pressão atmosférica.",
      "Vapor de água à pressão atmosférica.",
      "Mercúrio no estado gasoso a alta pressão.",
      "Praticamente vácuo."
    ],
    "correctIndex": 3,
    "explanation": "Acima da coluna fica um espaço quase sem matéria (vácuo de Torricelli); a coluna é sustentada pela pressão atmosférica sobre a tina.",
    "distractorAnalysis": [
      "Está incorreta: Se houvesse ar à pressão atmosférica, a coluna desceria até ao nível da tina.",
      "Está incorreta: O tubo é cheio de mercúrio, e esse espaço tem pressão quase nula.",
      "Está incorreta: A pressão desse espaço é quase nula, não elevada."
    ],
    "nursingApplication": "A experiência de Torricelli explica porque se mede a pressão arterial em mmHg."
  },
  {
    "id": 9018,
    "topicId": 4,
    "quiz": "A",
    "question": "Durante uma perfusão por gravidade, o saco de soro é colocado ao nível da veia do utente. O que pode acontecer?",
    "options": [
      "O soro para e o sangue pode refluir.",
      "O soro entra mais depressa, porque há menos resistência.",
      "O soro entra ao mesmo ritmo, porque a gravidade não muda.",
      "A pressão venosa passa a ser nula."
    ],
    "correctIndex": 0,
    "explanation": "Sem desnível, a pressão do soro na veia não supera a pressão venosa, pelo que a perfusão para e o sangue pode refluir.",
    "distractorAnalysis": [
      "Está incorreta: Sem desnível, deixa de haver diferença de pressão a favor da veia.",
      "Está incorreta: O caudal depende do desnível entre o saco e a veia.",
      "Está incorreta: A pressão venosa mantém-se e passa a superar a do soro."
    ],
    "nursingApplication": "Por isso o saco é colocado bastante acima do ponto de punção, de acordo com o caudal pretendido."
  },
  {
    "id": 9019,
    "topicId": 4,
    "quiz": "A",
    "question": "Numa maca hidráulica, o enfermeiro desloca o pedal (êmbolo pequeno) muitas vezes, mas a maca sobe pouco. Porquê?",
    "options": [
      "A pressão no êmbolo grande é maior.",
      "Perde-se líquido em cada deslocamento do pedal.",
      "A força no êmbolo grande é menor do que no pequeno.",
      "O volume deslocado espalha-se por um êmbolo maior."
    ],
    "correctIndex": 3,
    "explanation": "O volume de líquido deslocado é igual nos dois lados; num êmbolo maior, esse volume corresponde a uma subida menor.",
    "distractorAnalysis": [
      "Está incorreta: Pela lei de Pascal, a pressão é a mesma nos dois êmbolos.",
      "Está incorreta: Num sistema hidráulico fechado não há perda de líquido.",
      "Está incorreta: A força no êmbolo grande é maior, por ter maior área."
    ],
    "nursingApplication": "O sistema hidráulico permite elevar um utente com pouca força no pedal, à custa de um maior número de movimentos."
  },
  {
    "id": 9020,
    "topicId": 4,
    "quiz": "A",
    "question": "Um mergulhador sobe para a superfície sem expirar, com a respiração suspensa. Que risco hidrostático corre?",
    "options": [
      "O ar nos pulmões comprime-se e os pulmões colapsam.",
      "O ar nos pulmões expande-se e pode lesar os alvéolos.",
      "A pressão sobre o corpo aumenta e esmaga o tórax.",
      "Não há risco, porque a pressão é igual em todo o corpo."
    ],
    "correctIndex": 1,
    "explanation": "Ao subir, a pressão hidrostática diminui e o volume do gás aumenta; com a glote fechada, a distensão pode causar barotrauma pulmonar.",
    "distractorAnalysis": [
      "Está incorreta: Ao subir a pressão diminui, pelo que o gás se expande, não se comprime.",
      "Está incorreta: Ao subir, a pressão exterior diminui.",
      "Está incorreta: A diminuição de pressão expande o gás dentro dos pulmões."
    ],
    "nursingApplication": "Por isso os mergulhadores são ensinados a expirar continuamente durante uma subida de emergência."
  },
  {
    "id": 9021,
    "topicId": 1,
    "quiz": "B",
    "question": "Um astronauta com 70 kg de massa viaja da Terra para a Lua, onde a aceleração da gravidade é menor. O que acontece à sua massa e ao seu peso?",
    "options": [
      "A massa mantém-se e o peso diminui.",
      "A massa e o peso diminuem na mesma proporção.",
      "A massa diminui e o peso mantém-se igual.",
      "A massa e o peso mantêm-se, pois o corpo é o mesmo."
    ],
    "correctIndex": 0,
    "explanation": "A massa (kg) é uma propriedade do corpo; o peso (N) é a força com que o astro o atrai, P = m·g, e diminui na Lua porque g é menor.",
    "distractorAnalysis": [
      "Está incorreta: A massa é a quantidade de matéria (medida da inércia) e não depende do local onde o corpo está.",
      "Está incorreta: Inverte os conceitos: é o peso que depende de g; a massa não muda.",
      "Está incorreta: O peso é a força gravitacional P = m·g e diminui quando g diminui."
    ],
    "nursingApplication": "Nos registos clínicos, o valor da balança é registado em kg, isto é, como massa; o peso, sendo uma força, exprime-se em newtons."
  },
  {
    "id": 9022,
    "topicId": 1,
    "quiz": "B",
    "question": "Um utente está numa cadeira de rodas travada numa rampa. Se a inclinação da rampa aumentar, o que acontece à componente do peso paralela ao plano (P<sub>t</sub>)?",
    "options": [
      "Diminui, porque o peso passa a atuar mais na vertical.",
      "Aumenta, e cresce a tendência para descer a rampa.",
      "Mantém-se, porque o peso do utente não se altera.",
      "Aumenta, e a componente perpendicular ao plano também aumenta."
    ],
    "correctIndex": 1,
    "explanation": "No plano inclinado, P<sub>t</sub> = P·sin θ (paralela ao plano) aumenta e P<sub>n</sub> = P·cos θ (perpendicular ao plano) diminui quando θ aumenta.",
    "distractorAnalysis": [
      "Está incorreta: O peso é sempre vertical; a sua componente paralela, P<sub>t</sub> = P·sin θ, aumenta com o ângulo.",
      "Está incorreta: O peso total não muda, mas a forma como se decompõe depende da inclinação.",
      "Está incorreta: A componente perpendicular, P<sub>n</sub> = P·cos θ, diminui quando o ângulo aumenta."
    ],
    "nursingApplication": "Em rampas mais inclinadas é preciso mais força para segurar a cadeira de rodas, pelo que a descida deve ser controlada e os travões acionados nas paragens."
  },
  {
    "id": 9023,
    "topicId": 1,
    "quiz": "B",
    "question": "A articulação atlanto-occipital, em que o crânio se equilibra sobre o atlas pela ação dos músculos posteriores do pescoço, é que classe de alavanca?",
    "options": [
      "2.ª classe, com a resistência entre o fulcro e a potência.",
      "1.ª classe, com o fulcro entre a potência e a resistência.",
      "3.ª classe, com a potência entre o fulcro e a resistência.",
      "Não é uma alavanca, porque a cabeça está em equilíbrio."
    ],
    "correctIndex": 1,
    "explanation": "O peso da cabeça atua à frente da articulação e os músculos cervicais posteriores atrás, com o fulcro no meio: alavanca de 1.ª classe.",
    "distractorAnalysis": [
      "Está incorreta: O fulcro (articulação) está entre o peso da cabeça, à frente, e os músculos, atrás; não é a resistência que fica no meio.",
      "Está incorreta: Os músculos posteriores não ficam entre a articulação e o centro de gravidade da cabeça.",
      "Está incorreta: Uma alavanca pode estar em equilíbrio; é precisamente o equilíbrio de momentos em torno do fulcro."
    ],
    "nursingApplication": "Quando um utente adormece sentado, os músculos posteriores do pescoço relaxam e a cabeça cai para a frente, o que justifica um apoio cervical adequado."
  },
  {
    "id": 9024,
    "topicId": 1,
    "quiz": "B",
    "question": "Um saco de soro pendurado num gancho, com o centro de gravidade abaixo do ponto de suspensão, é ligeiramente afastado e volta à posição inicial. Que equilíbrio apresenta?",
    "options": [
      "Equilíbrio instável.",
      "Equilíbrio indiferente.",
      "Não está em equilíbrio, porque oscila.",
      "Equilíbrio estável."
    ],
    "correctIndex": 3,
    "explanation": "Com o centro de gravidade abaixo do ponto de suspensão, um pequeno afastamento eleva-o e o peso gera um momento que faz o corpo regressar: equilíbrio estável.",
    "distractorAnalysis": [
      "Está incorreta: No equilíbrio instável o corpo, ligeiramente afastado, não volta à posição inicial; o centro de gravidade estaria acima do apoio.",
      "Está incorreta: No equilíbrio indiferente o corpo fica na nova posição, porque o centro de gravidade não muda de altura.",
      "Está incorreta: A oscilação em torno da posição inicial é típica do equilíbrio estável; em repouso, o saco estava em equilíbrio."
    ],
    "nursingApplication": "Um saco de soro tocado acidentalmente volta à posição vertical no gancho, porque o seu centro de gravidade fica abaixo do ponto de suspensão."
  },
  {
    "id": 9025,
    "topicId": 1,
    "quiz": "B",
    "question": "As forças de contacto do dia a dia, como a reação normal de um colchão ou o atrito de um lençol, resultam, à escala atómica, de que interação fundamental?",
    "options": [
      "Interação eletromagnética entre os átomos das superfícies.",
      "Interação gravitacional entre o utente e o colchão.",
      "Interação nuclear forte entre os núcleos em contacto.",
      "Interação nuclear fraca entre os eletrões das superfícies."
    ],
    "correctIndex": 0,
    "explanation": "As forças de contacto (normal, atrito, tensão) resultam das repulsões e atrações eletromagnéticas entre os eletrões e núcleos dos átomos das superfícies.",
    "distractorAnalysis": [
      "Está incorreta: A atração gravitacional entre o utente e o colchão é desprezável; o peso é a atração da Terra.",
      "Está incorreta: A interação forte tem alcance muito curto e atua apenas dentro do núcleo atómico.",
      "Está incorreta: A interação fraca está associada a decaimentos radioativos, não às forças de contacto."
    ],
    "nursingApplication": "A escolha de lençóis e superfícies de apoio altera as forças de contacto, como o atrito, que atuam sobre a pele do utente."
  },
  {
    "id": 9026,
    "topicId": 2,
    "quiz": "B",
    "question": "Um sólido de Hooke (elástico ideal) é submetido a uma força, que depois é retirada. Como se comporta?",
    "options": [
      "Deforma-se em proporção à força e recupera totalmente a forma.",
      "Não se deforma, qualquer que seja a força aplicada.",
      "Deforma-se e mantém a deformação depois de retirada a força.",
      "Deforma-se lentamente e recupera a forma com atraso."
    ],
    "correctIndex": 0,
    "explanation": "No sólido de Hooke a deformação é instantânea, proporcional à força e totalmente reversível.",
    "distractorAnalysis": [
      "Está incorreta: Esse é o sólido de Euclides (rígido ideal), não o de Hooke.",
      "Está incorreta: Manter a deformação é o comportamento plástico.",
      "Está incorreta: A dependência do tempo caracteriza o comportamento viscoelástico."
    ],
    "nursingApplication": "Um elástico de garrote recupera a forma depois de usado enquanto não for esticado para além do seu limite elástico."
  },
  {
    "id": 9027,
    "topicId": 2,
    "quiz": "B",
    "question": "Uma ligadura elástica é aplicada com certo estiramento e fixada. Com o tempo, a compressão que exerce diminui, embora o comprimento não mude. Que fenómeno explica isto?",
    "options": [
      "Fluência.",
      "Lei de Hooke.",
      "Blindagem de tensões.",
      "Relaxação de tensões."
    ],
    "correctIndex": 3,
    "explanation": "Na relaxação de tensões, um material viscoelástico mantido com deformação constante vê a sua tensão interna diminuir ao longo do tempo.",
    "distractorAnalysis": [
      "Está incorreta: Na fluência a carga é constante e a deformação aumenta; aqui a deformação é constante e a tensão diminui.",
      "Está incorreta: Num sólido de Hooke a tensão manter-se-ia constante para a mesma deformação, sem dependência do tempo.",
      "Está incorreta: A blindagem de tensões refere-se à perda óssea junto a implantes rígidos."
    ],
    "nursingApplication": "As ligaduras de compressão devem ser reavaliadas e, se necessário, reaplicadas, porque a tensão do material diminui com o tempo."
  },
  {
    "id": 9028,
    "topicId": 2,
    "quiz": "B",
    "question": "No gráfico tensão–deformação, o que acontece a um ligamento se a tensão ultrapassar o limite elástico, sem chegar à rutura?",
    "options": [
      "Fica com deformação permanente depois de retirada a carga.",
      "Rompe imediatamente ao ultrapassar esse limite.",
      "Recupera totalmente a forma inicial ao retirar a carga.",
      "Torna-se mais rígido e o seu módulo de Young aumenta."
    ],
    "correctIndex": 0,
    "explanation": "Acima do limite elástico entra-se na zona plástica: retirada a carga, o material não regressa ao comprimento inicial.",
    "distractorAnalysis": [
      "Está incorreta: Entre o limite elástico e o ponto de rutura existe a zona de deformação plástica.",
      "Está incorreta: A recuperação total só acontece abaixo do limite elástico.",
      "Está incorreta: O módulo de Young é definido na zona elástica e não aumenta por se ultrapassar o limite elástico."
    ],
    "nursingApplication": "Numa entorse grave, o ligamento estirado para além do limite elástico pode ficar alongado e a articulação instável, mesmo sem rutura completa."
  },
  {
    "id": 9029,
    "topicId": 2,
    "quiz": "B",
    "question": "Diz-se que o osso cortical é anisotrópico. O que significa isto?",
    "options": [
      "Tem as mesmas propriedades em todas as direções.",
      "Deforma-se de modo permanente com qualquer carga.",
      "É formado por um único material homogéneo.",
      "As propriedades mecânicas variam com a direção."
    ],
    "correctIndex": 3,
    "explanation": "Num material anisotrópico, a resistência e a rigidez variam com a direção da carga; o osso cortical resiste mais ao longo do seu eixo.",
    "distractorAnalysis": [
      "Está incorreta: Isso define um material isotrópico.",
      "Está incorreta: Isso descreveria um material plástico, não anisotrópico.",
      "Está incorreta: O osso é um compósito; anisotropia refere-se à dependência da direção, não à homogeneidade."
    ],
    "nursingApplication": "O fémur resiste melhor às cargas ao longo do eixo, como na posição de pé, do que a impactos laterais, como numa queda sobre a anca."
  },
  {
    "id": 9030,
    "topicId": 2,
    "quiz": "B",
    "question": "Após a colocação de uma placa metálica muito rígida, o osso subjacente pode perder densidade. Como se chama este fenómeno?",
    "options": [
      "Fluência.",
      "Histerese.",
      "Blindagem de tensões.",
      "Relaxação de tensões."
    ],
    "correctIndex": 2,
    "explanation": "O implante rígido suporta grande parte da carga e o osso fica menos solicitado; pela lei de Wolff, este perde massa (blindagem de tensões).",
    "distractorAnalysis": [
      "Está incorreta: A fluência é o aumento da deformação sob carga constante.",
      "Está incorreta: A histerese é a diferença entre as curvas de carga e descarga.",
      "Está incorreta: A relaxação é a diminuição da tensão sob deformação constante."
    ],
    "nursingApplication": "Por isso se procuram implantes com rigidez mais próxima da do osso e, em alguns casos, se remove o material após a consolidação."
  },
  {
    "id": 9031,
    "topicId": 3,
    "quiz": "B",
    "question": "Como se compara a viscosidade do sangue com a da água?",
    "options": [
      "O sangue e a água têm a mesma viscosidade.",
      "O sangue é cerca de 3 a 4 vezes menos viscoso.",
      "O sangue é cerca de 3 a 4 vezes mais viscoso.",
      "O sangue é cerca de 100 vezes mais viscoso."
    ],
    "correctIndex": 2,
    "explanation": "Devido sobretudo aos eritrócitos, a viscosidade do sangue é cerca de 3 a 4 vezes a da água.",
    "distractorAnalysis": [
      "Está incorreta: As células e as proteínas plasmáticas tornam o sangue bastante mais viscoso do que a água.",
      "Está incorreta: Inverte a relação: é o sangue o mais viscoso.",
      "Está incorreta: Exagera muito a diferença; a viscosidade do sangue é apenas algumas vezes superior."
    ],
    "nursingApplication": "A maior viscosidade do sangue aumenta a resistência ao fluxo, o que se nota ao colher sangue através de agulhas finas."
  },
  {
    "id": 9032,
    "topicId": 3,
    "quiz": "B",
    "question": "Na experiência de Reynolds, injeta-se um corante num líquido que escoa num tubo de vidro. O que se observa quando a velocidade ultrapassa certo valor?",
    "options": [
      "O filete de corante mantém-se fino e retilíneo.",
      "O filete de corante dispersa-se no líquido.",
      "O corante acumula-se junto às paredes do tubo.",
      "O corante fica parado no centro do tubo."
    ],
    "correctIndex": 1,
    "explanation": "A baixa velocidade o corante forma um filete retilíneo (laminar); acima de um valor crítico dispersa-se por redemoinhos (turbulento).",
    "distractorAnalysis": [
      "Está incorreta: Isso observa-se a velocidades baixas, em regime laminar.",
      "Está incorreta: Não há acumulação na parede; acima do limiar o corante espalha-se por toda a secção.",
      "Está incorreta: No centro a velocidade é máxima; o corante não fica parado."
    ],
    "nursingApplication": "Tal como na experiência, o aumento da velocidade do sangue numa estenose pode tornar o escoamento turbulento."
  },
  {
    "id": 9033,
    "topicId": 3,
    "quiz": "B",
    "question": "Na medição da pressão arterial com estetoscópio, porque se ouvem os sons de Korotkoff?",
    "options": [
      "A artéria totalmente ocluída deixa passar sangue em regime laminar.",
      "O escoamento laminar normal da artéria produz som.",
      "A braçadeira vibra quando a pressão iguala a atmosférica.",
      "A artéria parcialmente comprimida gera escoamento turbulento."
    ],
    "correctIndex": 3,
    "explanation": "Com a artéria parcialmente comprimida, o sangue passa em jato por uma secção estreita, com velocidade elevada, e torna-se turbulento e audível.",
    "distractorAnalysis": [
      "Está incorreta: Com a artéria totalmente ocluída não passa sangue, e o escoamento laminar é silencioso.",
      "Está incorreta: O escoamento laminar é silencioso; o som surge com a turbulência.",
      "Está incorreta: Os sons vêm do sangue na artéria, não de vibrações da braçadeira."
    ],
    "nursingApplication": "Os sons desaparecem quando a artéria deixa de estar comprimida e o escoamento volta a ser laminar, o que marca a pressão diastólica."
  },
  {
    "id": 9034,
    "topicId": 3,
    "quiz": "B",
    "question": "Acrescenta-se um prolongamento ao sistema de soro, mantendo a altura do saco e o cateter. O que acontece ao caudal?",
    "options": [
      "Aumenta, porque o líquido ganha velocidade no tubo.",
      "Mantém-se, porque o raio interno não muda.",
      "Diminui, porque a viscosidade aumenta no tubo longo.",
      "Diminui, porque a resistência aumenta."
    ],
    "correctIndex": 3,
    "explanation": "Na lei de Poiseuille, o caudal é inversamente proporcional ao comprimento L; um prolongamento aumenta a resistência hidrodinâmica.",
    "distractorAnalysis": [
      "Está incorreta: Um tubo mais longo aumenta a resistência e reduz o caudal.",
      "Está incorreta: O caudal depende também do comprimento, e não só do raio.",
      "Está incorreta: A viscosidade é uma propriedade do líquido e não depende do comprimento do tubo."
    ],
    "nursingApplication": "Evitar prolongamentos desnecessários ajuda a manter o caudal pretendido nas perfusões por gravidade."
  },
  {
    "id": 9035,
    "topicId": 3,
    "quiz": "B",
    "question": "O que exprime o caudal (D) programado numa bomba perfusora em mL/h?",
    "options": [
      "A velocidade do líquido na ponta do cateter.",
      "A pressão exercida pelo líquido sobre a veia.",
      "O volume de líquido administrado por hora.",
      "A massa de líquido contida no sistema."
    ],
    "correctIndex": 2,
    "explanation": "O caudal é o volume que passa numa secção por unidade de tempo, por exemplo em mL/h ou cm³/s.",
    "distractorAnalysis": [
      "Está incorreta: A velocidade mede distância por unidade de tempo (por exemplo cm/s), não volume.",
      "Está incorreta: A pressão é força por unidade de área e não se exprime em mL/h.",
      "Está incorreta: A massa contida no sistema não é uma grandeza por unidade de tempo."
    ],
    "nursingApplication": "Programar 125 mL/h significa que, em cada hora, passam 125 mL de solução pelo sistema."
  },
  {
    "id": 9036,
    "topicId": 4,
    "quiz": "B",
    "question": "Porque é que uma agulha fina perfura a pele com mais facilidade do que uma agulha grossa, com a mesma força?",
    "options": [
      "A área de contacto é menor, logo a pressão é menor.",
      "A área de contacto é menor, logo a pressão é maior.",
      "A força aplicada aumenta quando a agulha é fina.",
      "A pressão não depende da área de contacto."
    ],
    "correctIndex": 1,
    "explanation": "Pela definição P = F/S, com a mesma força, uma área menor produz uma pressão maior sobre a pele.",
    "distractorAnalysis": [
      "Está incorreta: A pressão é inversamente proporcional à área: P = F/S.",
      "Está incorreta: A força é a mesma; o que muda é a área sobre a qual atua.",
      "Está incorreta: A pressão depende da força e da área (P = F/S)."
    ],
    "nursingApplication": "Agulhas de bisel fino e afiado reduzem a força necessária para a punção venosa e o desconforto do utente."
  },
  {
    "id": 9037,
    "topicId": 4,
    "quiz": "B",
    "question": "Um barómetro de mercúrio é levado do nível do mar para o alto de uma montanha. O que acontece à altura da coluna?",
    "options": [
      "Diminui, porque a pressão atmosférica é menor.",
      "Aumenta, porque a pressão atmosférica é menor.",
      "Mantém-se nos 760 mm em qualquer altitude.",
      "Aumenta, porque o ar está mais frio."
    ],
    "correctIndex": 0,
    "explanation": "A altura da coluna é proporcional à pressão atmosférica, que diminui com a altitude, porque há menos ar acima.",
    "distractorAnalysis": [
      "Está incorreta: Uma pressão menor sustenta uma coluna mais baixa, não mais alta.",
      "Está incorreta: 760 mmHg só correspondem à pressão ao nível do mar.",
      "Está incorreta: A altura da coluna depende da pressão atmosférica, que diminui com a altitude."
    ],
    "nursingApplication": "Em altitude, a menor pressão atmosférica reduz a pressão parcial de oxigénio, o que importa em doentes respiratórios."
  },
  {
    "id": 9038,
    "topicId": 4,
    "quiz": "B",
    "question": "O enfermeiro eleva o saco de soro de uma perfusão por gravidade. Em termos hidrostáticos, o que aumenta?",
    "options": [
      "A massa volúmica do soro.",
      "A pressão atmosférica sobre o saco.",
      "A pressão no ponto de punção.",
      "O volume de soro dentro do saco."
    ],
    "correctIndex": 2,
    "explanation": "Pela lei fundamental, ΔP = ρ·g·h; elevando o saco aumenta h e, com ela, a pressão do soro no ponto de punção.",
    "distractorAnalysis": [
      "Está incorreta: A massa volúmica é uma propriedade do soro e não muda com a altura.",
      "Está incorreta: A pressão atmosférica não muda significativamente ao elevar o saco.",
      "Está incorreta: O volume de soro é o mesmo; apenas muda a posição do saco."
    ],
    "nursingApplication": "Elevar o saco ajuda a vencer a pressão venosa quando a perfusão abranda por razões hidrostáticas."
  },
  {
    "id": 9039,
    "topicId": 4,
    "quiz": "B",
    "question": "Numa prensa hidráulica com dois êmbolos de áreas diferentes, o que é igual nos dois êmbolos?",
    "options": [
      "A força.",
      "O deslocamento.",
      "A pressão.",
      "A área."
    ],
    "correctIndex": 2,
    "explanation": "Pela lei de Pascal, a pressão é a mesma nos dois êmbolos (F<sub>1</sub>/S<sub>1</sub> = F<sub>2</sub>/S<sub>2</sub>); a força é maior onde a área é maior.",
    "distractorAnalysis": [
      "Está incorreta: A força é maior no êmbolo de maior área.",
      "Está incorreta: O êmbolo maior desloca-se menos.",
      "Está incorreta: Os êmbolos têm, por definição, áreas diferentes."
    ],
    "nursingApplication": "As camas e as cadeiras hidráulicas usam este princípio para elevar utentes com pouco esforço."
  },
  {
    "id": 9040,
    "topicId": 4,
    "quiz": "B",
    "question": "Como varia a pressão sobre um mergulhador à medida que desce no mar?",
    "options": [
      "Diminui com a profundidade.",
      "Aumenta cerca de 1 atm por cada 10 m de profundidade.",
      "Aumenta cerca de 1 atm por cada 100 m de profundidade.",
      "Mantém-se igual à pressão atmosférica."
    ],
    "correctIndex": 1,
    "explanation": "Pela lei fundamental (ΔP = ρ·g·h), cada 10 m de água acrescentam cerca de 1 atm à pressão atmosférica.",
    "distractorAnalysis": [
      "Está incorreta: A pressão hidrostática aumenta com a profundidade.",
      "Está incorreta: O aumento é de cerca de 1 atm por cada 10 m de água, não por cada 100 m.",
      "Está incorreta: À pressão atmosférica soma-se a pressão da coluna de água."
    ],
    "nursingApplication": "A câmara hiperbárica usa pressões semelhantes às de 10 a 20 m de profundidade para tratar, por exemplo, a intoxicação por monóxido de carbono."
  },
  {
    "id": 9041,
    "topicId": 1,
    "quiz": "C",
    "question": "Uma maca desliza num corredor horizontal. Se, a partir de certo instante, a força resultante sobre ela fosse nula, como se moveria a maca?",
    "options": [
      "Manteria um movimento retilíneo e uniforme.",
      "Pararia de imediato, por deixar de haver força.",
      "Abrandaria gradualmente até ficar parada.",
      "Aceleraria, porque já nada a estaria a travar."
    ],
    "correctIndex": 0,
    "explanation": "Pela 1.ª lei de Newton, um corpo mantém o repouso ou o MRU a menos que atue sobre ele uma força resultante não nula.",
    "distractorAnalysis": [
      "Está incorreta: Confunde ausência de força com ausência de movimento; sem força resultante a velocidade mantém-se.",
      "Está incorreta: Abrandar exige uma força resultante não nula oposta ao movimento, como o atrito real.",
      "Está incorreta: Acelerar exige uma força resultante não nula no sentido do movimento."
    ],
    "nursingApplication": "Uma maca em movimento tende a continuar a mover-se por inércia, pelo que é preciso aplicar força para a travar antes de curvas e portas."
  },
  {
    "id": 9042,
    "topicId": 1,
    "quiz": "C",
    "question": "Para que um corpo rígido esteja em equilíbrio estático completo, sem translação nem rotação, que condições têm de se verificar?",
    "options": [
      "Apenas F<sub>R</sub> = 0",
      "Apenas M<sub>R</sub> = 0",
      "F<sub>R</sub> igual ao peso e M<sub>R</sub> = 0",
      "F<sub>R</sub> = 0 e M<sub>R</sub> = 0"
    ],
    "correctIndex": 3,
    "explanation": "O equilíbrio completo exige resultante das forças nula (sem translação acelerada) e momento resultante nulo (sem rotação acelerada).",
    "distractorAnalysis": [
      "Está incorreta: Com F<sub>R</sub> = 0 o corpo pode rodar, por exemplo sob a ação de um binário.",
      "Está incorreta: Com M<sub>R</sub> = 0 mas F<sub>R</sub> ≠ 0, o corpo não roda mas acelera em translação.",
      "Está incorreta: Se a resultante fosse igual ao peso não seria nula e o corpo aceleraria; o peso já entra no cálculo de F<sub>R</sub>."
    ],
    "nursingApplication": "Na tração ortopédica, pesos e roldanas são montados para que as forças e os momentos sobre o membro se anulem."
  },
  {
    "id": 9043,
    "topicId": 1,
    "quiz": "C",
    "question": "As alavancas de 3.ª classe são as mais comuns no corpo humano, apesar de exigirem uma força muscular maior do que a carga. Que vantagem oferecem?",
    "options": [
      "Maior força na extremidade com menor esforço muscular.",
      "Maior velocidade e amplitude do movimento na extremidade.",
      "Maior estabilidade, porque o fulcro fica no centro da alavanca.",
      "Eliminam o momento da carga sobre a articulação."
    ],
    "correctIndex": 1,
    "explanation": "Na 3.ª classe sacrifica-se força: uma pequena contração muscular junto ao fulcro produz um deslocamento grande e rápido na extremidade.",
    "distractorAnalysis": [
      "Está incorreta: Essa é a vantagem da 2.ª classe; na 3.ª classe o braço potente é menor e a força muscular é maior do que a carga.",
      "Está incorreta: Na 3.ª classe o fulcro fica numa extremidade, não no centro.",
      "Está incorreta: A carga continua a produzir momento resistente, que o músculo tem de equilibrar."
    ],
    "nursingApplication": "Movimentos rápidos e amplos, como levar a mão à boca para comer, são possíveis à custa de forças musculares elevadas no cotovelo."
  },
  {
    "id": 9044,
    "topicId": 1,
    "quiz": "C",
    "question": "Ao fletir os joelhos para ajudar um utente a levantar-se, o enfermeiro baixa o seu centro de gravidade. Porque é que isto aumenta a estabilidade?",
    "options": [
      "O peso do enfermeiro diminui quando ele se baixa.",
      "A base de sustentação deixa de ser necessária.",
      "Tolera mais inclinação sem perder o equilíbrio.",
      "O centro de gravidade passa a ficar fora do corpo."
    ],
    "correctIndex": 2,
    "explanation": "Quanto mais baixo o centro de gravidade, maior o ângulo de inclinação necessário para a sua vertical sair da base de sustentação, logo maior a margem de estabilidade.",
    "distractorAnalysis": [
      "Está incorreta: O peso, P = m·g, não depende da postura.",
      "Está incorreta: A estabilidade depende sempre da posição da vertical do centro de gravidade em relação à base.",
      "Está incorreta: Baixar o centro de gravidade não o coloca fora do corpo, e não é isso que aumenta a estabilidade."
    ],
    "nursingApplication": "Fletir os joelhos e manter as costas direitas na mobilização dá mais estabilidade e transfere o esforço para os músculos dos membros inferiores."
  },
  {
    "id": 9045,
    "topicId": 1,
    "quiz": "C",
    "question": "Um enfermeiro empurra horizontalmente um armário pesado, mas este não se move. Como se compara a força de atrito estático com a força aplicada?",
    "options": [
      "É igual à força aplicada e de sentido oposto.",
      "É maior do que a força aplicada, por isso não se move.",
      "É nula, porque o armário está parado.",
      "É igual ao atrito estático máximo em qualquer caso."
    ],
    "correctIndex": 0,
    "explanation": "Em repouso, F<sub>R</sub> = 0: o atrito estático iguala a força aplicada, até ao valor máximo μ<sub>e</sub>·N.",
    "distractorAnalysis": [
      "Está incorreta: Se o atrito fosse maior, a resultante não seria nula e o armário aceleraria no sentido oposto.",
      "Está incorreta: Sem atrito, qualquer força horizontal poria o armário em movimento.",
      "Está incorreta: O atrito estático ajusta-se à força aplicada e só atinge o máximo no limiar do deslizamento."
    ],
    "nursingApplication": "Se um armário não se move, a força ainda não superou o atrito estático máximo; pedir ajuda é mais seguro do que forçar com a coluna fletida."
  },
  {
    "id": 9046,
    "topicId": 2,
    "quiz": "C",
    "question": "Nos problemas de alavancas, os ossos são tratados como barras que não se deformam. Que modelo reológico se está a usar?",
    "options": [
      "Sólido de Euclides (rígido ideal).",
      "Sólido de Hooke (elástico ideal).",
      "Corpo plástico ideal.",
      "Corpo viscoelástico."
    ],
    "correctIndex": 0,
    "explanation": "O sólido de Euclides é o modelo de corpo rígido: não se deforma sob a ação de forças. É uma simplificação útil no estudo das alavancas.",
    "distractorAnalysis": [
      "Está incorreta: O sólido de Hooke deforma-se em proporção à força; aqui admite-se que não há deformação.",
      "Está incorreta: Um corpo plástico fica deformado após a força; aqui admite-se ausência de deformação.",
      "Está incorreta: Um corpo viscoelástico deforma-se de modo dependente do tempo; aqui a deformação é ignorada."
    ],
    "nursingApplication": "Tratar o osso como rígido simplifica o cálculo das forças musculares, mas o osso real deforma-se e pode fraturar."
  },
  {
    "id": 9047,
    "topicId": 2,
    "quiz": "C",
    "question": "No gráfico tensão–deformação de um tendão, a curva de carga e a de descarga não coincidem. O que representa a área entre as duas curvas?",
    "options": [
      "Energia armazenada que é totalmente devolvida.",
      "A deformação plástica permanente do tendão.",
      "Energia dissipada, sobretudo como calor.",
      "O módulo de Young do tendão."
    ],
    "correctIndex": 2,
    "explanation": "Este fenómeno chama-se histerese: num ciclo de carga e descarga, parte da energia fornecida é dissipada (sobretudo como calor) e não é recuperada.",
    "distractorAnalysis": [
      "Está incorreta: Se toda a energia fosse devolvida, as curvas de carga e descarga coincidiriam.",
      "Está incorreta: A histerese pode ocorrer com recuperação total da forma; a área representa energia, não deformação.",
      "Está incorreta: O módulo de Young é o declive da zona linear da curva, não uma área."
    ],
    "nursingApplication": "Em movimentos repetitivos, parte da energia é dissipada nos tecidos viscoelásticos, o que contribui para o aquecimento dos tendões."
  },
  {
    "id": 9048,
    "topicId": 2,
    "quiz": "C",
    "question": "Em biomecânica, a tensão (σ) num tendão define-se como:",
    "options": [
      "A variação relativa do comprimento do tendão.",
      "O produto da força pela área de secção.",
      "A força aplicada por unidade de área de secção.",
      "A força multiplicada pelo comprimento inicial."
    ],
    "correctIndex": 2,
    "explanation": "A tensão é σ = F/A e exprime-se em N/m²; para a mesma força, uma secção maior fica sujeita a menor tensão.",
    "distractorAnalysis": [
      "Está incorreta: Isso é a deformação relativa (ε), não a tensão.",
      "Está incorreta: A tensão é o quociente σ = F/A, não o produto.",
      "Está incorreta: O comprimento inicial entra na deformação relativa, não na tensão."
    ],
    "nursingApplication": "Um tendão mais espesso distribui a mesma força por uma área maior, ficando sujeito a menor tensão."
  },
  {
    "id": 9049,
    "topicId": 2,
    "quiz": "C",
    "question": "O osso cortical resiste de forma diferente aos vários tipos de solicitação. Qual é a ordem correta, da maior para a menor resistência?",
    "options": [
      "Tração > compressão > cisalhamento",
      "Compressão > tração > cisalhamento",
      "Cisalhamento > tração > compressão",
      "Compressão > cisalhamento > tração"
    ],
    "correctIndex": 1,
    "explanation": "O osso cortical suporta melhor a compressão, depois a tração, e resiste menos ao cisalhamento (e à torção).",
    "distractorAnalysis": [
      "Está incorreta: O osso resiste mais à compressão do que à tração.",
      "Está incorreta: Inverte a ordem: o cisalhamento é a solicitação a que o osso menos resiste.",
      "Está incorreta: O osso resiste mais à tração do que ao cisalhamento."
    ],
    "nursingApplication": "Por isso, quedas com rotação ou com forças de corte podem fraturar o osso com cargas menores do que a compressão axial."
  },
  {
    "id": 9050,
    "topicId": 2,
    "quiz": "C",
    "question": "Quando um utente desliza na cama com a cabeceira elevada, a pele fica presa ao lençol enquanto os tecidos profundos se deslocam. Que deformação ocorre?",
    "options": [
      "Compressão.",
      "Tração.",
      "Torção.",
      "Cisalhamento."
    ],
    "correctIndex": 3,
    "explanation": "No cisalhamento, forças paralelas à superfície fazem deslizar camadas umas em relação às outras, distorcendo os tecidos e os vasos.",
    "distractorAnalysis": [
      "Está incorreta: Na compressão as forças atuam perpendicularmente à superfície, empurrando-a; aqui as camadas deslizam paralelamente.",
      "Está incorreta: Na tração as forças alongam o tecido na direção da força, sem deslizamento entre camadas.",
      "Está incorreta: Na torção há rotação em torno de um eixo, o que não acontece aqui."
    ],
    "nursingApplication": "Limitar a elevação da cabeceira, quando clinicamente possível, reduz o cisalhamento sobre a região sagrada e o risco de lesão por pressão."
  },
  {
    "id": 9051,
    "topicId": 3,
    "quiz": "C",
    "question": "Num utente com policitemia (hematócrito elevado), o que acontece à viscosidade do sangue e à resistência ao fluxo?",
    "options": [
      "Ambas diminuem.",
      "Ambas aumentam.",
      "A viscosidade aumenta e a resistência diminui.",
      "A viscosidade diminui e a resistência aumenta."
    ],
    "correctIndex": 1,
    "explanation": "O hematócrito é o principal determinante da viscosidade do sangue; ao aumentar, aumenta a viscosidade e, com ela, a resistência ao fluxo.",
    "distractorAnalysis": [
      "Está incorreta: Mais eritrócitos tornam o sangue mais viscoso, não menos.",
      "Está incorreta: A resistência hidrodinâmica é diretamente proporcional à viscosidade.",
      "Está incorreta: Um hematócrito elevado aumenta a viscosidade."
    ],
    "nursingApplication": "Na policitemia, o sangue mais viscoso aumenta o trabalho cardíaco e o risco de trombose, o que justifica vigilância e hidratação adequada."
  },
  {
    "id": 9052,
    "topicId": 3,
    "quiz": "C",
    "question": "Quais das alterações seguintes favorecem a passagem de escoamento laminar a turbulento?",
    "options": [
      "Diminuição da velocidade e aumento da viscosidade.",
      "Diminuição do diâmetro e da densidade.",
      "Aumento da velocidade e diminuição da viscosidade.",
      "Aumento da viscosidade e da densidade."
    ],
    "correctIndex": 2,
    "explanation": "Re = ρ·v·d/η aumenta com a densidade, a velocidade e o diâmetro e diminui com a viscosidade; quanto maior Re, mais provável a turbulência.",
    "distractorAnalysis": [
      "Está incorreta: Ambas as alterações diminuem Re e favorecem o regime laminar.",
      "Está incorreta: Ambas diminuem Re, favorecendo o regime laminar.",
      "Está incorreta: O aumento da viscosidade diminui Re e contraria o efeito da densidade."
    ],
    "nursingApplication": "Durante o exercício intenso, o aumento da velocidade do sangue na aorta pode originar turbulência transitória."
  },
  {
    "id": 9053,
    "topicId": 3,
    "quiz": "C",
    "question": "No sistema circulatório saudável, em que local é mais provável existir escoamento turbulento?",
    "options": [
      "Nos capilares, onde a velocidade do sangue é baixa.",
      "Nas pequenas vénulas, onde o diâmetro é pequeno.",
      "Na raiz da aorta, junto à válvula, durante a ejeção.",
      "Em todos os vasos, porque o sangue é viscoso."
    ],
    "correctIndex": 2,
    "explanation": "Na raiz da aorta coincidem o maior diâmetro e as maiores velocidades durante a ejeção, pelo que Re é mais elevado.",
    "distractorAnalysis": [
      "Está incorreta: Nos capilares o diâmetro e a velocidade são muito pequenos, logo Re é muito baixo.",
      "Está incorreta: Um diâmetro pequeno diminui Re e favorece o escoamento laminar.",
      "Está incorreta: A viscosidade favorece o regime laminar; na maior parte dos vasos o escoamento é laminar."
    ],
    "nursingApplication": "A auscultação no foco aórtico permite detetar sopros associados a alterações valvulares."
  },
  {
    "id": 9054,
    "topicId": 3,
    "quiz": "C",
    "question": "Com o mesmo cateter e a mesma altura do saco, porque é que um concentrado eritrocitário escoa mais devagar do que o soro fisiológico?",
    "options": [
      "Tem menor viscosidade, logo menor resistência ao escoamento.",
      "Tem maior viscosidade, logo maior resistência ao escoamento.",
      "Ocupa um raio de escoamento maior no cateter.",
      "Cria uma diferença de pressão menor no sistema."
    ],
    "correctIndex": 1,
    "explanation": "O caudal é inversamente proporcional à viscosidade; o concentrado eritrocitário, muito mais viscoso, tem maior resistência hidrodinâmica.",
    "distractorAnalysis": [
      "Está incorreta: Com menor resistência escoaria mais depressa, não mais devagar.",
      "Está incorreta: O raio é o do cateter, igual nos dois casos.",
      "Está incorreta: Com a mesma altura, a diferença de pressão é praticamente igual (até ligeiramente maior para o sangue)."
    ],
    "nursingApplication": "Nas transfusões usa-se um cateter de calibre adequado e, se necessário, uma bomba, porque o concentrado eritrocitário escoa lentamente."
  },
  {
    "id": 9055,
    "topicId": 3,
    "quiz": "C",
    "question": "Porque é que o escoamento nos capilares é laminar?",
    "options": [
      "A viscosidade do sangue é nula nos capilares.",
      "O diâmetro é muito pequeno, logo Re é muito alto.",
      "A pressão é muito elevada, o que impede redemoinhos.",
      "Diâmetro e velocidade pequenos dão Re baixo."
    ],
    "correctIndex": 3,
    "explanation": "Nos capilares, diâmetro e velocidade muito pequenos tornam Re muito inferior a 2000, pelo que o escoamento é laminar.",
    "distractorAnalysis": [
      "Está incorreta: O sangue continua a ser viscoso nos capilares.",
      "Está incorreta: Re é proporcional ao diâmetro; um diâmetro pequeno dá Re baixo.",
      "Está incorreta: A pressão nos capilares é baixa, e o regime depende de Re, não da pressão."
    ],
    "nursingApplication": "Nos capilares, o escoamento lento e laminar favorece as trocas de gases e nutrientes entre o sangue e os tecidos."
  },
  {
    "id": 9056,
    "topicId": 4,
    "quiz": "C",
    "question": "Um colchão de redistribuição de pressão aumenta a área de contacto com o corpo do utente. O que acontece à pressão de interface?",
    "options": [
      "Aumenta, porque há mais área em contacto com o corpo.",
      "Mantém-se, porque o peso do utente não muda.",
      "Diminui, porque o peso do utente diminui.",
      "Diminui, porque o peso se reparte por mais área."
    ],
    "correctIndex": 3,
    "explanation": "Como P = F/S, distribuir o mesmo peso por uma área maior reduz a pressão de interface sobre as proeminências ósseas.",
    "distractorAnalysis": [
      "Está incorreta: Inverte a relação: para a mesma força, mais área significa menos pressão.",
      "Está incorreta: O peso é o mesmo, mas a pressão depende também da área de contacto.",
      "Está incorreta: O peso do utente não se altera com o tipo de colchão."
    ],
    "nursingApplication": "Superfícies de redistribuição de pressão ajudam a prevenir lesões por pressão em utentes acamados de risco elevado."
  },
  {
    "id": 9057,
    "topicId": 4,
    "quiz": "C",
    "question": "Porque se usa mercúrio, e não água, num barómetro?",
    "options": [
      "É mais denso, logo a coluna é mais baixa.",
      "É menos denso, logo a coluna é mais baixa.",
      "É mais viscoso, logo não se move.",
      "Não é afetado pela pressão atmosférica."
    ],
    "correctIndex": 0,
    "explanation": "Para a mesma pressão, h = P/(ρ·g): com massa volúmica muito maior, o mercúrio dá uma coluna de cerca de 76 cm em vez de mais de 10 m de água.",
    "distractorAnalysis": [
      "Está incorreta: O mercúrio é cerca de 13,6 vezes mais denso do que a água.",
      "Está incorreta: A altura da coluna em repouso depende da massa volúmica, não da viscosidade.",
      "Está incorreta: O barómetro funciona precisamente porque o mercúrio é empurrado pela pressão atmosférica."
    ],
    "nursingApplication": "A pressão venosa central, por ser baixa, pode medir-se em cmH<sub>2</sub>O; a arterial mede-se em mmHg."
  },
  {
    "id": 9058,
    "topicId": 4,
    "quiz": "C",
    "question": "Num regador, a água no bico atinge o mesmo nível que no reservatório. Que princípio explica isto?",
    "options": [
      "O princípio de Pascal sobre a transmissão de pressão.",
      "A tensão superficial da água.",
      "A viscosidade da água em repouso.",
      "O princípio dos vasos comunicantes."
    ],
    "correctIndex": 3,
    "explanation": "Em vasos comunicantes com o mesmo líquido em repouso, a superfície livre fica ao mesmo nível em todos os ramos, sob a mesma pressão atmosférica.",
    "distractorAnalysis": [
      "Está incorreta: Pascal explica a transmissão de pressão aplicada, não a igualdade de níveis.",
      "Está incorreta: A tensão superficial não determina o nível em recipientes largos.",
      "Está incorreta: A viscosidade só intervém em fluidos em movimento."
    ],
    "nursingApplication": "O mesmo princípio aplica-se ao nivelamento do manómetro de pressão venosa central com o ponto de referência."
  },
  {
    "id": 9059,
    "topicId": 4,
    "quiz": "C",
    "question": "Num recipiente com água abrem-se dois orifícios, um perto da superfície e outro perto do fundo. De qual sai a água com maior velocidade?",
    "options": [
      "Do orifício perto da superfície.",
      "Do orifício perto do fundo.",
      "Dos dois com igual velocidade.",
      "Do orifício maior, independentemente da posição."
    ],
    "correctIndex": 1,
    "explanation": "Pela lei de Torricelli, a velocidade de saída aumenta com a altura de líquido acima do orifício (v = √(2·g·h)).",
    "distractorAnalysis": [
      "Está incorreta: Perto da superfície a altura de líquido acima é menor, logo a velocidade de saída é menor.",
      "Está incorreta: A velocidade de saída depende da profundidade do orifício.",
      "Está incorreta: Pela lei de Torricelli, a velocidade depende da profundidade, não do tamanho do orifício."
    ],
    "nursingApplication": "Num frasco rígido de irrigação com saída livre, o caudal diminui à medida que o nível do líquido baixa, porque diminui a altura acima do orifício."
  },
  {
    "id": 9060,
    "topicId": 4,
    "quiz": "C",
    "question": "Quando se regista uma pressão arterial sistólica de 120 mmHg, a que se refere este valor?",
    "options": [
      "Ao excesso de pressão sobre a atmosférica.",
      "À pressão absoluta dentro da artéria.",
      "À pressão que a braçadeira exerce sobre a pele.",
      "À pressão atmosférica ao nível do coração."
    ],
    "correctIndex": 0,
    "explanation": "As pressões arteriais são pressões manométricas: medem quanto a pressão do sangue excede a pressão atmosférica.",
    "distractorAnalysis": [
      "Está incorreta: A pressão absoluta incluiria cerca de 760 mmHg da pressão atmosférica.",
      "Está incorreta: A pressão da braçadeira é só o meio de medição: no 1.º som iguala a pressão sistólica do sangue, e o valor registado refere-se a essa pressão arterial, acima da atmosférica.",
      "Está incorreta: A pressão atmosférica é cerca de 760 mmHg, não 120 mmHg."
    ],
    "nursingApplication": "Por isso os transdutores de pressão arterial invasiva são calibrados a zero abertos ao ar, ao nível do coração."
  },
  {
    "id": 9061,
    "topicId": 1,
    "quiz": "D",
    "question": "Um utente acamado puxa a grade lateral da cama para se reposicionar. Segundo a 3.ª lei de Newton, a força que a grade exerce sobre o utente é:",
    "options": [
      "Menor do que a força do utente, porque a grade não se move.",
      "Igual em intensidade, de sentido oposto e aplicada no utente.",
      "Igual em intensidade, com o mesmo sentido e aplicada na grade.",
      "Maior do que a força do utente, para conseguir deslocá-lo."
    ],
    "correctIndex": 1,
    "explanation": "A 3.ª lei de Newton diz que, se A exerce uma força sobre B, B exerce sobre A uma força com a mesma intensidade e direção e sentido oposto.",
    "distractorAnalysis": [
      "Está incorreta: A grade não se move porque está fixa à cama, e não porque as forças do par sejam diferentes.",
      "Está incorreta: As forças de um par ação–reação têm sentidos opostos e atuam em corpos diferentes; a reação atua no utente.",
      "Está incorreta: Ação e reação têm a mesma intensidade; o movimento do utente depende da resultante das forças que atuam nele."
    ],
    "nursingApplication": "Ao ensinar o utente a usar a grade ou o trapézio, é a força exercida pela grade sobre ele que lhe permite deslocar o próprio corpo."
  },
  {
    "id": 9062,
    "topicId": 1,
    "quiz": "D",
    "question": "Para abrir a tampa de um frasco, aplicam-se com os dedos duas forças de igual intensidade, sentidos opostos e linhas de ação paralelas. O que acontece à tampa?",
    "options": [
      "Fica em equilíbrio, porque a força resultante é nula.",
      "Desloca-se no sentido da força com maior braço.",
      "Roda, embora a força resultante seja nula.",
      "Não roda, porque as duas forças se anulam no mesmo ponto."
    ],
    "correctIndex": 2,
    "explanation": "Duas forças iguais, opostas e com linhas de ação paralelas distintas formam um binário: F<sub>R</sub> = 0 mas M<sub>R</sub> ≠ 0, logo há rotação.",
    "distractorAnalysis": [
      "Está incorreta: F<sub>R</sub> = 0 não garante M<sub>R</sub> = 0: as duas forças formam um binário.",
      "Está incorreta: As forças têm a mesma intensidade e anulam-se em translação; o binário apenas faz rodar.",
      "Está incorreta: As forças têm linhas de ação diferentes, não se aplicam no mesmo ponto e produzem momento."
    ],
    "nursingApplication": "Rodar uma torneira de três vias ou a tampa de um frasco de solução são exemplos de binários que provocam rotação sem deslocar o objeto."
  },
  {
    "id": 9063,
    "topicId": 1,
    "quiz": "D",
    "question": "Ao levantar uma caixa de material, porque se recomenda mantê-la junto ao tronco, em vez de a segurar com os braços estendidos?",
    "options": [
      "Reduz o peso da caixa que a coluna tem de suportar.",
      "Reduz o braço da carga e o momento flexor na coluna lombar.",
      "Aumenta o momento extensor que a carga produz na coluna.",
      "Coloca a carga sobre o fulcro, anulando o esforço muscular."
    ],
    "correctIndex": 1,
    "explanation": "O momento da carga é M = F·b. Aproximá-la do tronco reduz b, logo o momento flexor e a força exigida aos músculos extensores lombares.",
    "distractorAnalysis": [
      "Está incorreta: O peso da caixa é o mesmo; o que diminui é a distância à coluna e, portanto, o momento.",
      "Está incorreta: Uma carga à frente do tronco produz um momento flexor; são os músculos extensores que o equilibram.",
      "Está incorreta: A carga fica mais perto, mas não sobre o fulcro; continua a ser necessário esforço muscular."
    ],
    "nursingApplication": "Nas transferências, aproximar o utente do próprio corpo diminui o momento sobre a coluna lombar do enfermeiro."
  },
  {
    "id": 9064,
    "topicId": 1,
    "quiz": "D",
    "question": "Um utente idoso inclina-se muito para a frente para apanhar um objeto, sem apoio, e cai. Do ponto de vista físico, o que aconteceu?",
    "options": [
      "O centro de gravidade desceu abaixo da base de sustentação.",
      "O peso do utente aumentou ao inclinar-se para a frente.",
      "A vertical do centro de gravidade saiu da base de sustentação.",
      "A reação normal do chão tornou-se maior do que o peso."
    ],
    "correctIndex": 2,
    "explanation": "Enquanto a vertical do centro de gravidade cai dentro da base de sustentação há equilíbrio; quando sai, o peso cria um momento que faz o corpo tombar.",
    "distractorAnalysis": [
      "Está incorreta: Baixar o centro de gravidade aumenta a estabilidade; a queda depende da posição da sua vertical em relação à base.",
      "Está incorreta: O peso não varia com a postura.",
      "Está incorreta: A reação normal não é o que provoca a queda; o desequilíbrio resulta do momento do peso em torno do bordo da base."
    ],
    "nursingApplication": "Na prevenção de quedas, colocam-se os objetos de uso frequente ao alcance do utente para evitar que se incline para fora da base de sustentação."
  },
  {
    "id": 9065,
    "topicId": 1,
    "quiz": "D",
    "question": "Duas forças com a mesma intensidade, direção e sentido são aplicadas a uma cama: uma no centro da cabeceira e outra num canto. Porque podem ter efeitos diferentes?",
    "options": [
      "As intensidades efetivas diferem consoante o local.",
      "A força no canto perde intensidade devido ao atrito.",
      "Os pontos de aplicação diferem e uma pode fazer rodar a cama.",
      "Não podem, porque forças iguais têm sempre o mesmo efeito."
    ],
    "correctIndex": 2,
    "explanation": "Aplicada fora da linha que passa pelo centro de massa, a força produz momento e pode provocar rotação além de translação.",
    "distractorAnalysis": [
      "Está incorreta: As duas forças têm, por definição, a mesma intensidade.",
      "Está incorreta: O atrito não altera a força aplicada; o efeito diferente vem do momento em relação ao centro de massa.",
      "Está incorreta: A força é um vetor ligado: o ponto de aplicação faz parte da sua caracterização e muda o efeito."
    ],
    "nursingApplication": "Empurrar a cama pelo centro da cabeceira tende a deslocá-la em linha reta, enquanto empurrar por um canto tende a fazê-la rodar."
  },
  {
    "id": 9066,
    "topicId": 2,
    "quiz": "D",
    "question": "Uma tala moldável de alumínio é dobrada para se adaptar ao dedo de um utente e mantém a nova forma. Que comportamento apresenta o material?",
    "options": [
      "Elástico: a deformação desaparece ao retirar a força.",
      "Viscoelástico: recupera lentamente a forma inicial.",
      "Rígido: não sofre qualquer deformação com a força.",
      "Plástico: a deformação mantém-se após retirar a força."
    ],
    "correctIndex": 3,
    "explanation": "Acima do limite elástico, o metal sofre deformação plástica: a nova forma mantém-se depois de retirada a força.",
    "distractorAnalysis": [
      "Está incorreta: Se fosse elástico, a tala voltaria à forma inicial depois de moldada.",
      "Está incorreta: A tala não recupera a forma com o tempo; a deformação é permanente.",
      "Está incorreta: A tala foi dobrada, logo deformou-se."
    ],
    "nursingApplication": "As talas moldáveis aproveitam a deformação plástica do metal para se adaptarem à anatomia do utente e manterem a imobilização."
  },
  {
    "id": 9067,
    "topicId": 2,
    "quiz": "D",
    "question": "Segundo a lei de Hooke («Ut tensio, sic vis»), dentro do limite de proporcionalidade, como se relaciona a deformação de uma mola com a força aplicada?",
    "options": [
      "A deformação é diretamente proporcional à força.",
      "A deformação é inversamente proporcional à força.",
      "A deformação é proporcional ao quadrado da força.",
      "A deformação não depende da força, só do material."
    ],
    "correctIndex": 0,
    "explanation": "A lei de Hooke diz que, até ao limite de proporcionalidade, a deformação é diretamente proporcional à força (ou a tensão à deformação relativa).",
    "distractorAnalysis": [
      "Está incorreta: Mais força produz mais deformação, não menos.",
      "Está incorreta: Na zona de proporcionalidade a relação é linear, não quadrática.",
      "Está incorreta: O material define a constante de proporcionalidade, mas a deformação varia com a força."
    ],
    "nursingApplication": "Os dinamómetros de mola, usados para medir forças, baseiam-se nesta proporcionalidade entre força e deformação."
  },
  {
    "id": 9068,
    "topicId": 2,
    "quiz": "D",
    "question": "Um esquiador cai com o pé preso ao esqui enquanto o corpo roda, e sofre uma fratura em espiral da tíbia. Que tipo de solicitação a provocou?",
    "options": [
      "Torção.",
      "Compressão.",
      "Tração.",
      "Flexão."
    ],
    "correctIndex": 0,
    "explanation": "Na torção, as extremidades do osso rodam em sentidos opostos em torno do eixo longitudinal, o que gera fraturas em espiral.",
    "distractorAnalysis": [
      "Está incorreta: A compressão causa sobretudo fraturas por esmagamento, como as vertebrais.",
      "Está incorreta: A tração tende a provocar fraturas por avulsão, junto às inserções de tendões e ligamentos.",
      "Está incorreta: A flexão tende a provocar fraturas transversais ou oblíquas, não em espiral."
    ],
    "nursingApplication": "Na colheita da história de um traumatismo, um mecanismo de rotação com o pé fixo faz suspeitar de fratura em espiral."
  },
  {
    "id": 9069,
    "topicId": 2,
    "quiz": "D",
    "question": "Porque é que a estrutura tubular (oca) dos ossos longos é mecanicamente vantajosa?",
    "options": [
      "Aumenta a massa do osso e, com ela, a sua resistência.",
      "Resiste bem à flexão e à torção com menos massa óssea.",
      "Concentra o material junto ao eixo, onde a tensão é maior.",
      "Torna o osso isotrópico, igualmente resistente em todas as direções."
    ],
    "correctIndex": 1,
    "explanation": "Na flexão e na torção, as tensões são máximas longe do eixo. Um tubo coloca o material nessa periferia e obtém grande resistência com pouca massa.",
    "distractorAnalysis": [
      "Está incorreta: Um tubo tem menos massa do que um cilindro maciço do mesmo diâmetro.",
      "Está incorreta: Na flexão e na torção a tensão é maior na periferia, e é aí que o tubo concentra o material.",
      "Está incorreta: A forma tubular não elimina a anisotropia do osso."
    ],
    "nursingApplication": "Muletas e bengalas tubulares usam o mesmo princípio para serem resistentes e leves."
  },
  {
    "id": 9070,
    "topicId": 2,
    "quiz": "D",
    "question": "O osso é elástico para cargas pequenas, deforma-se de modo permanente para cargas elevadas e a sua resposta depende do tempo. Como se classifica?",
    "options": [
      "Sólido de Hooke.",
      "Plastoviscoelástico.",
      "Sólido de Euclides.",
      "Plástico ideal."
    ],
    "correctIndex": 1,
    "explanation": "Os tecidos biológicos combinam comportamentos elástico, plástico e viscoso, pelo que se classificam como plastoviscoelásticos.",
    "distractorAnalysis": [
      "Está incorreta: O sólido de Hooke é apenas elástico e não tem deformação permanente nem dependência do tempo.",
      "Está incorreta: O sólido de Euclides é rígido e não se deforma.",
      "Está incorreta: O plástico ideal não descreve a fase elástica nem a dependência do tempo."
    ],
    "nursingApplication": "Explica porque é que o osso recupera das cargas habituais mas pode ficar deformado ou fraturar com cargas excessivas, como numa queda."
  },
  {
    "id": 9071,
    "topicId": 3,
    "quiz": "D",
    "question": "Num utente com anemia grave, a viscosidade do sangue diminui. Que efeito tem isto sobre o número de Reynolds e o tipo de escoamento?",
    "options": [
      "Re aumenta e a turbulência torna-se mais provável.",
      "Re diminui e o escoamento torna-se mais laminar.",
      "Re não se altera, porque só depende da velocidade.",
      "Re aumenta, mas o escoamento fica mais laminar."
    ],
    "correctIndex": 0,
    "explanation": "Re = ρ·v·d/η: com menor viscosidade (e, na anemia, maior velocidade do sangue), Re aumenta e a turbulência torna-se mais provável.",
    "distractorAnalysis": [
      "Está incorreta: A viscosidade está no denominador de Re; se diminui, Re aumenta.",
      "Está incorreta: Re depende da densidade, da velocidade, do diâmetro e da viscosidade.",
      "Está incorreta: Um Re maior aproxima o escoamento do regime turbulento."
    ],
    "nursingApplication": "Na anemia podem auscultar-se sopros cardíacos funcionais, relacionados com a menor viscosidade e o maior débito cardíaco."
  },
  {
    "id": 9072,
    "topicId": 3,
    "quiz": "D",
    "question": "Um escoamento sanguíneo tem um número de Reynolds de cerca de 1200. Como se classifica?",
    "options": [
      "Turbulento.",
      "De transição.",
      "Laminar.",
      "Não é possível classificar sem conhecer o caudal."
    ],
    "correctIndex": 2,
    "explanation": "Re < 2000 corresponde a escoamento laminar; entre 2000 e 4000, transição; acima de 4000, turbulento.",
    "distractorAnalysis": [
      "Está incorreta: O regime turbulento corresponde a Re superior a 4000.",
      "Está incorreta: A transição corresponde a Re entre 2000 e 4000.",
      "Está incorreta: O número de Reynolds basta para classificar o regime."
    ],
    "nursingApplication": "Na maioria dos vasos o escoamento é laminar e silencioso, pelo que um sopro sugere uma alteração local."
  },
  {
    "id": 9073,
    "topicId": 3,
    "quiz": "D",
    "question": "Numa estenose da artéria carótida, a velocidade do sangue aumenta na zona estreitada. O que pode o enfermeiro detetar com o estetoscópio?",
    "options": [
      "Silêncio total, porque o escoamento é laminar.",
      "Os sons de Korotkoff da pressão sistólica.",
      "Um som causado pelo aumento da viscosidade.",
      "Um sopro, devido ao escoamento turbulento."
    ],
    "correctIndex": 3,
    "explanation": "Na estenose a velocidade aumenta e Re pode ultrapassar o limiar laminar; a turbulência produz vibrações audíveis (sopro).",
    "distractorAnalysis": [
      "Está incorreta: O aumento da velocidade na estenose favorece a turbulência, que é audível.",
      "Está incorreta: Os sons de Korotkoff surgem com a compressão da braçadeira, não numa estenose carotídea.",
      "Está incorreta: A estenose não altera a viscosidade do sangue; o som resulta da turbulência."
    ],
    "nursingApplication": "A auscultação de um sopro carotídeo é um achado a comunicar, porque pode indicar estenose."
  },
  {
    "id": 9074,
    "topicId": 3,
    "quiz": "D",
    "question": "Numa perfusão por gravidade, o enfermeiro eleva o saco de soro. Segundo a lei de Poiseuille, porque aumenta o caudal?",
    "options": [
      "Aumenta a diferença de pressão (ΔP).",
      "Diminui a viscosidade do soro dentro do sistema.",
      "Aumenta o raio interno do cateter venoso.",
      "Diminui o comprimento do sistema de perfusão."
    ],
    "correctIndex": 0,
    "explanation": "Elevar o saco aumenta a diferença de pressão (ΔP) entre o saco e a veia; pela lei de Poiseuille, o caudal é proporcional a ΔP.",
    "distractorAnalysis": [
      "Está incorreta: A altura do saco não altera a viscosidade do soro.",
      "Está incorreta: O cateter é o mesmo; o seu raio não muda.",
      "Está incorreta: O comprimento do sistema não muda ao elevar o saco."
    ],
    "nursingApplication": "Se o caudal de uma perfusão por gravidade diminuir, verificar a altura do saco em relação ao utente é um dos primeiros passos."
  },
  {
    "id": 9075,
    "topicId": 3,
    "quiz": "D",
    "question": "Na vasoconstrição periférica, o raio das arteríolas diminui ligeiramente. Como varia a resistência hidrodinâmica?",
    "options": [
      "Aumenta muito (depende de 1/R<sup>4</sup>).",
      "Diminui, porque o sangue passa mais depressa.",
      "Aumenta pouco, porque depende só de 1/R.",
      "Não varia, porque só depende da viscosidade."
    ],
    "correctIndex": 0,
    "explanation": "R<sub>h</sub> = 8·η·L/(π·R<sup>4</sup>): uma pequena redução do raio provoca um grande aumento da resistência.",
    "distractorAnalysis": [
      "Está incorreta: Um raio menor aumenta a resistência, não a diminui.",
      "Está incorreta: A resistência depende de 1/R<sup>4</sup>, não de 1/R.",
      "Está incorreta: A resistência depende da viscosidade, do comprimento e, sobretudo, do raio."
    ],
    "nursingApplication": "A vasoconstrição periférica no choque aumenta muito a resistência ao fluxo, o que contribui para extremidades frias e preenchimento capilar lento."
  },
  {
    "id": 9076,
    "topicId": 4,
    "quiz": "D",
    "question": "Num líquido em repouso, num dado ponto, como atua a pressão?",
    "options": [
      "Só de cima para baixo, por causa do peso.",
      "Só na horizontal, contra as paredes.",
      "Igualmente em todas as direções.",
      "Só de baixo para cima, como impulsão."
    ],
    "correctIndex": 2,
    "explanation": "Num fluido em equilíbrio, a pressão num ponto tem o mesmo valor em todas as direções e atua perpendicularmente às superfícies.",
    "distractorAnalysis": [
      "Está incorreta: Num fluido em repouso, a pressão num ponto atua com igual valor em todas as direções.",
      "Está incorreta: A pressão também atua na vertical, por exemplo sobre o fundo e sobre objetos imersos.",
      "Está incorreta: A pressão num ponto não tem uma única direção preferencial."
    ],
    "nursingApplication": "Por isso, um balão de cateter insuflado sofre a pressão do líquido envolvente em toda a sua superfície."
  },
  {
    "id": 9077,
    "topicId": 4,
    "quiz": "D",
    "question": "Ao medir a pressão arterial, o braço do utente fica bastante abaixo do nível do coração. Como se altera o valor lido?",
    "options": [
      "Fica mais baixo do que o real.",
      "Não se altera, porque a pressão arterial é igual em todo o corpo.",
      "Fica igual, porque a braçadeira compensa a diferença.",
      "Fica mais alto do que o real."
    ],
    "correctIndex": 3,
    "explanation": "Abaixo do nível do coração, soma-se a pressão hidrostática da coluna de sangue (ΔP = ρ·g·h), pelo que a leitura sobrestima a pressão.",
    "distractorAnalysis": [
      "Está incorreta: Abaixo do coração soma-se a pressão da coluna de sangue, o que aumenta a leitura.",
      "Está incorreta: A pressão hidrostática varia com a altura em relação ao coração.",
      "Está incorreta: A braçadeira não corrige a diferença de altura."
    ],
    "nursingApplication": "Para uma medição correta, a braçadeira deve ficar ao nível do coração, com o braço apoiado."
  },
  {
    "id": 9078,
    "topicId": 4,
    "quiz": "D",
    "question": "Num manómetro de coluna de água, usa-se um tubo de diâmetro maior. O que acontece à altura da coluna para a mesma pressão?",
    "options": [
      "Diminui, porque o tubo é mais largo.",
      "Aumenta, porque há mais água no tubo.",
      "Diminui para metade, se o diâmetro duplicar.",
      "Mantém-se a mesma."
    ],
    "correctIndex": 3,
    "explanation": "Pela lei fundamental, h = ΔP/(ρ·g): a altura não depende da largura do tubo.",
    "distractorAnalysis": [
      "Está incorreta: A altura depende só da pressão e da massa volúmica, não do diâmetro.",
      "Está incorreta: Mais volume de água não muda a altura de equilíbrio.",
      "Está incorreta: Não há relação entre o diâmetro e a altura da coluna."
    ],
    "nursingApplication": "Os manómetros de pressão venosa central de vários fabricantes dão leituras equivalentes, apesar de terem tubos de calibres diferentes."
  },
  {
    "id": 9079,
    "topicId": 4,
    "quiz": "D",
    "question": "No trabalho realizado pelo coração em cada contração, que componente é dominante em repouso?",
    "options": [
      "O trabalho para dar velocidade ao sangue (energia cinética).",
      "O trabalho de pressão (P·V) contra a pressão arterial.",
      "O trabalho para vencer a pressão atmosférica.",
      "O trabalho para elevar o sangue até à cabeça."
    ],
    "correctIndex": 1,
    "explanation": "O trabalho sistólico é dominado pelo produto da pressão arterial pelo volume ejetado (P·V); a energia cinética é uma pequena fração em repouso.",
    "distractorAnalysis": [
      "Está incorreta: Em repouso, a parcela cinética é pequena face ao trabalho de pressão.",
      "Está incorreta: O coração trabalha contra a pressão arterial, não contra a atmosférica.",
      "Está incorreta: Em circuito fechado, a parcela gravitacional anula-se praticamente ao longo do ciclo."
    ],
    "nursingApplication": "Na hipertensão, o trabalho de pressão aumenta, o que ajuda a explicar a hipertrofia ventricular esquerda."
  },
  {
    "id": 9080,
    "topicId": 4,
    "quiz": "D",
    "question": "Uma garrafa de plástico fechada no alto de uma montanha aparece amolgada ao chegar ao nível do mar. Porquê?",
    "options": [
      "O ar dentro da garrafa aumentou de pressão.",
      "A pressão exterior diminuiu ao nível do mar.",
      "O plástico contraiu com o aumento da temperatura.",
      "A pressão exterior supera a do ar interior."
    ],
    "correctIndex": 3,
    "explanation": "O ar interior ficou à pressão da montanha, mais baixa; ao nível do mar a pressão exterior é maior e comprime a garrafa.",
    "distractorAnalysis": [
      "Está incorreta: O ar interior não aumentou de pressão; foi a pressão exterior que aumentou.",
      "Está incorreta: A pressão atmosférica é maior ao nível do mar do que em altitude.",
      "Está incorreta: A deformação resulta da diferença de pressão, não da temperatura."
    ],
    "nursingApplication": "Pelo mesmo motivo, em transportes aéreos a pressão do cuff de um tubo endotraqueal cheio de ar pode aumentar com a altitude e deve ser vigiada."
  },
  {
    "id": 9081,
    "topicId": 1,
    "quiz": "E",
    "question": "Um utente está deitado em repouso num colchão horizontal. Qual das afirmações sobre o peso (P) e a reação normal (N) é correta?",
    "options": [
      "Formam um par ação–reação, porque são iguais e opostos.",
      "O peso atua no colchão e a normal atua no utente.",
      "A normal é maior do que o peso, para conseguir sustentá-lo.",
      "Atuam ambos no utente e não formam um par ação–reação."
    ],
    "correctIndex": 3,
    "explanation": "P (exercido pela Terra) e N (exercida pelo colchão) atuam no mesmo corpo e anulam-se por equilíbrio. A reação ao peso atua na Terra e a reação à normal atua no colchão.",
    "distractorAnalysis": [
      "Está incorreta: São iguais e opostos por o utente estar em equilíbrio (1.ª lei); um par ação–reação atua em corpos diferentes.",
      "Está incorreta: O peso atua no utente e é exercido pela Terra; sobre o colchão atua a força de contacto do utente.",
      "Está incorreta: Em repouso num plano horizontal, N = P; se N fosse maior, o utente aceleraria para cima."
    ],
    "nursingApplication": "Distinguir o peso do utente da força de contacto sobre o colchão ajuda a perceber como se gera a pressão de interface sobre o sacro."
  },
  {
    "id": 9082,
    "topicId": 1,
    "quiz": "E",
    "question": "Uma porta de enfermaria abre-se com menos esforço quando se empurra junto ao puxador, longe das dobradiças. Qual é a razão física?",
    "options": [
      "O braço é maior, logo o momento é maior para a mesma força.",
      "A força aplicada longe das dobradiças torna-se mais intensa.",
      "O atrito nas dobradiças diminui quando se empurra longe delas.",
      "O momento depende apenas da força e não da distância ao eixo."
    ],
    "correctIndex": 0,
    "explanation": "O momento de uma força é M = F·b. Com um braço maior obtém-se o mesmo momento com menos força.",
    "distractorAnalysis": [
      "Está incorreta: A intensidade da força é a mesma; o que muda é a distância ao eixo de rotação.",
      "Está incorreta: O efeito deve-se ao momento da força, M = F·b, e não a uma variação do atrito nas dobradiças.",
      "Está incorreta: O momento é M = F·b: depende também do braço, a distância perpendicular ao eixo."
    ],
    "nursingApplication": "Em manípulos como os travões de camas ou as manivelas de ajuste, aplicar a força na extremidade reduz o esforço necessário."
  },
  {
    "id": 9083,
    "topicId": 1,
    "quiz": "E",
    "question": "Antes de mobilizar um utente, o enfermeiro afasta os pés, um ligeiramente à frente do outro. Qual é o efeito principal desta postura?",
    "options": [
      "Eleva o centro de gravidade, tornando o corpo mais estável.",
      "Diminui o peso que o enfermeiro exerce sobre o chão.",
      "Reduz a base de sustentação para facilitar o movimento.",
      "Alarga a base e aumenta a margem de estabilidade."
    ],
    "correctIndex": 3,
    "explanation": "Com uma base de sustentação mais larga, a vertical do centro de gravidade pode deslocar-se mais sem sair da base, o que dá maior margem de estabilidade.",
    "distractorAnalysis": [
      "Está incorreta: Afastar os pés não eleva o centro de gravidade; e um centro de gravidade mais alto reduz a estabilidade.",
      "Está incorreta: O peso não depende da posição dos pés.",
      "Está incorreta: Afastar os pés aumenta a área da base de sustentação, não a reduz."
    ],
    "nursingApplication": "Uma base larga, alinhada com a direção do movimento, permite transferir o peso de um pé para o outro durante a mobilização sem perder o equilíbrio."
  },
  {
    "id": 9084,
    "topicId": 1,
    "quiz": "E",
    "question": "Num carrinho de mão, a carga fica entre a roda (fulcro) e as pegas, onde se aplica a força. Que característica tem esta alavanca?",
    "options": [
      "É de 1.ª classe e a força potente é menor do que a carga.",
      "É de 3.ª classe e a força potente é maior do que a carga.",
      "É de 2.ª classe e a força potente é maior do que a carga.",
      "É de 2.ª classe e a força potente é menor do que a carga."
    ],
    "correctIndex": 3,
    "explanation": "Com a resistência entre o fulcro e a potência, o braço potente é sempre maior, pelo que a alavanca de 2.ª classe amplia a força.",
    "distractorAnalysis": [
      "Está incorreta: Na 1.ª classe o fulcro fica entre a potência e a resistência; aqui está numa extremidade.",
      "Está incorreta: Na 3.ª classe é a potência que fica no meio; aqui é a carga.",
      "Está incorreta: Na 2.ª classe o braço potente é maior do que o resistente, logo a força potente é menor do que a carga."
    ],
    "nursingApplication": "Colocar a carga mais pesada junto à roda do carrinho de material reduz o braço resistente e o esforço de quem o transporta."
  },
  {
    "id": 9085,
    "topicId": 1,
    "quiz": "E",
    "question": "Um utente com marcha instável passa a usar uma bengala. Do ponto de vista da estabilidade, qual é o principal efeito?",
    "options": [
      "Baixa o centro de gravidade do utente ao nível da mão.",
      "Alarga a base de sustentação, que inclui o apoio da bengala.",
      "Reduz a base de sustentação e torna os passos mais curtos.",
      "Desloca a vertical do centro de gravidade para fora da base."
    ],
    "correctIndex": 1,
    "explanation": "O ponto de apoio da bengala passa a fazer parte da base de sustentação, que fica maior, aumentando a margem de estabilidade.",
    "distractorAnalysis": [
      "Está incorreta: Segurar a bengala não desloca significativamente o centro de gravidade do corpo.",
      "Está incorreta: O apoio adicional aumenta a área da base de sustentação, não a reduz.",
      "Está incorreta: Com a vertical do centro de gravidade fora da base o utente cairia; a bengala ajuda a mantê-la dentro."
    ],
    "nursingApplication": "Ao ensinar a usar a bengala, o enfermeiro explica que o apoio adicional alarga a base de sustentação e dá maior margem de estabilidade na marcha."
  },
  {
    "id": 9086,
    "topicId": 2,
    "quiz": "E",
    "question": "O que distingue um material viscoelástico, como um tendão, de um sólido elástico ideal?",
    "options": [
      "A resposta depende da velocidade de aplicação da força.",
      "Fica permanentemente deformado depois de qualquer carga.",
      "Não se deforma até ser atingido o ponto de rutura.",
      "Deforma-se instantaneamente na proporção da força."
    ],
    "correctIndex": 0,
    "explanation": "Os materiais viscoelásticos combinam elasticidade e viscosidade: a deformação depende do tempo, o que origina fluência, relaxação de tensões e histerese.",
    "distractorAnalysis": [
      "Está incorreta: Isso descreve um material plástico; um viscoelástico pode recuperar a forma, embora com atraso.",
      "Está incorreta: Isso descreve um sólido rígido; o tendão deforma-se antes de romper.",
      "Está incorreta: A resposta instantânea e proporcional é a do sólido de Hooke."
    ],
    "nursingApplication": "Um colchão de espuma viscoelástica vai-se adaptando lentamente ao corpo do utente, redistribuindo melhor a carga."
  },
  {
    "id": 9087,
    "topicId": 2,
    "quiz": "E",
    "question": "Duas amostras do mesmo material, uma fina e outra espessa, são ensaiadas à tração. O que se pode afirmar sobre o módulo de Young (E) de ambas?",
    "options": [
      "É maior na amostra espessa, por ser mais resistente.",
      "É igual, porque é uma propriedade do material.",
      "É maior na amostra fina, porque se deforma mais.",
      "Depende da força aplicada a cada amostra."
    ],
    "correctIndex": 1,
    "explanation": "O módulo de Young, E = σ/ε, relaciona tensão e deformação relativa e caracteriza o material, independentemente da forma e do tamanho da peça.",
    "distractorAnalysis": [
      "Está incorreta: A amostra espessa suporta mais força, mas para a mesma tensão deforma-se igual; E não depende das dimensões.",
      "Está incorreta: Para a mesma força a fina deforma-se mais, mas a relação entre tensão e deformação relativa é a mesma.",
      "Está incorreta: Na zona elástica linear, E é constante e não depende da força aplicada."
    ],
    "nursingApplication": "Peças de titânio ou de aço têm o módulo de Young do respetivo material, seja qual for a forma do implante."
  },
  {
    "id": 9088,
    "topicId": 2,
    "quiz": "E",
    "question": "Quando um osso longo é sujeito a flexão, como se distribuem as tensões na sua secção?",
    "options": [
      "Toda a secção do osso fica sujeita a compressão uniforme.",
      "Toda a secção do osso fica sujeita a tração uniforme.",
      "Compressão de um lado e tração do outro.",
      "A tensão é máxima no plano neutro e nula nas superfícies."
    ],
    "correctIndex": 2,
    "explanation": "Na flexão, o lado côncavo fica em compressão e o convexo em tração; entre ambos há um plano neutro sem tensão.",
    "distractorAnalysis": [
      "Está incorreta: Na flexão, o lado convexo é esticado (tração); não há compressão uniforme.",
      "Está incorreta: Na flexão, o lado côncavo é comprimido; não há tração uniforme.",
      "Está incorreta: É o contrário: a tensão é nula no plano neutro e máxima nas superfícies."
    ],
    "nursingApplication": "Como o osso resiste pior à tração do que à compressão, numa fratura por flexão a rutura começa geralmente no lado sujeito a tração."
  },
  {
    "id": 9089,
    "topicId": 2,
    "quiz": "E",
    "question": "Em que difere o osso trabecular (esponjoso) do osso cortical?",
    "options": [
      "É mais denso e forma a camada externa dos ossos longos.",
      "Não suporta cargas e serve apenas para alojar a medula.",
      "É mais poroso e deforma-se mais antes de fraturar.",
      "Tem um módulo de Young maior, sendo mais rígido."
    ],
    "correctIndex": 2,
    "explanation": "O osso trabecular é poroso, menos rígido do que o cortical e tolera deformações relativas maiores antes da rutura; predomina nas vértebras e epífises.",
    "distractorAnalysis": [
      "Está incorreta: Essa descrição corresponde ao osso cortical.",
      "Está incorreta: O osso trabecular suporta cargas importantes, por exemplo nos corpos vertebrais.",
      "Está incorreta: O osso cortical, mais denso, é o mais rígido."
    ],
    "nursingApplication": "As vértebras, ricas em osso trabecular, são locais frequentes de fratura por compressão na osteoporose."
  },
  {
    "id": 9090,
    "topicId": 2,
    "quiz": "E",
    "question": "Um ligamento viscoelástico é carregado rapidamente num caso e lentamente noutro. Como tende a comportar-se na carga rápida?",
    "options": [
      "Mais rígido, deformando-se menos para a mesma força.",
      "Mais flexível, deformando-se mais para a mesma força.",
      "Exatamente igual, porque o módulo de Young é constante.",
      "Sem qualquer deformação, como um sólido de Euclides."
    ],
    "correctIndex": 0,
    "explanation": "Num material viscoelástico, a resposta depende da velocidade de carga: carregado depressa, comporta-se de forma mais rígida.",
    "distractorAnalysis": [
      "Está incorreta: Nos tecidos viscoelásticos, cargas rápidas deixam menos tempo para a componente viscosa se deformar.",
      "Está incorreta: Um material viscoelástico tem resposta dependente da velocidade de aplicação da carga.",
      "Está incorreta: O ligamento deforma-se sempre; apenas se deforma menos na carga rápida."
    ],
    "nursingApplication": "Nos alongamentos terapêuticos, aplicar a força de forma lenta e mantida permite maior deformação dos tecidos com menor risco de lesão."
  },
  {
    "id": 9091,
    "topicId": 3,
    "quiz": "E",
    "question": "Num escoamento laminar num vaso sanguíneo, como varia a velocidade do sangue ao longo do diâmetro?",
    "options": [
      "É igual em todos os pontos da secção do vaso.",
      "É máxima no centro e quase nula na parede.",
      "É máxima junto às paredes e nula no centro.",
      "Varia de forma irregular, com redemoinhos."
    ],
    "correctIndex": 1,
    "explanation": "No escoamento laminar as camadas deslizam paralelamente e o perfil de velocidades é parabólico: máximo no eixo e quase nulo na parede.",
    "distractorAnalysis": [
      "Está incorreta: Um perfil de velocidades quase plano é típico do escoamento turbulento.",
      "Está incorreta: Inverte o perfil: o atrito com a parede torna a velocidade mínima junto a ela.",
      "Está incorreta: Redemoinhos caracterizam o escoamento turbulento."
    ],
    "nursingApplication": "Na ecografia Doppler vascular, a velocidade de pico registada corresponde ao centro do vaso, onde o sangue escoa mais depressa."
  },
  {
    "id": 9092,
    "topicId": 3,
    "quiz": "E",
    "question": "Se o diâmetro de um vaso duplicar, mantendo-se a velocidade, a densidade e a viscosidade do sangue, o que acontece ao número de Reynolds?",
    "options": [
      "Reduz-se a metade.",
      "Quadruplica.",
      "Duplica.",
      "Não se altera."
    ],
    "correctIndex": 2,
    "explanation": "Re = ρ·v·d/η é diretamente proporcional ao diâmetro: duplicando d, duplica Re.",
    "distractorAnalysis": [
      "Está incorreta: Re é diretamente proporcional ao diâmetro, não inversamente.",
      "Está incorreta: Re depende do diâmetro à primeira potência, não ao quadrado.",
      "Está incorreta: O diâmetro é um dos fatores de Re."
    ],
    "nursingApplication": "Por isso a turbulência surge mais facilmente em vasos de grande calibre, como a aorta, do que em vasos pequenos."
  },
  {
    "id": 9093,
    "topicId": 3,
    "quiz": "E",
    "question": "Segundo a lei de Poiseuille, que fator tem maior influência no caudal através de um cateter?",
    "options": [
      "O comprimento, porque o caudal depende de L<sup>4</sup>.",
      "A viscosidade, porque o caudal depende de η<sup>2</sup>.",
      "O raio interno, porque o caudal depende de R<sup>4</sup>.",
      "A diferença de pressão, porque o caudal depende de ΔP<sup>2</sup>."
    ],
    "correctIndex": 2,
    "explanation": "Pela lei de Poiseuille, D = π·ΔP·R<sup>4</sup>/(8·η·L): o raio, elevado à quarta potência, é o fator dominante.",
    "distractorAnalysis": [
      "Está incorreta: O caudal é inversamente proporcional a L, à primeira potência.",
      "Está incorreta: O caudal é inversamente proporcional a η, à primeira potência.",
      "Está incorreta: O caudal é diretamente proporcional a ΔP, à primeira potência."
    ],
    "nursingApplication": "Para uma perfusão rápida, escolher um cateter de maior calibre é mais eficaz do que subir o saco de soro."
  },
  {
    "id": 9094,
    "topicId": 3,
    "quiz": "E",
    "question": "Numa perfusão, a resistência hidrodinâmica do sistema aumenta por uma dobra parcial do tubo, mantendo-se a diferença de pressão. O que acontece ao caudal?",
    "options": [
      "Aumenta, porque D = ΔP·R<sub>h</sub>.",
      "Mantém-se, porque ΔP não muda.",
      "Aumenta, porque o líquido acelera na dobra.",
      "Diminui, porque D = ΔP/R<sub>h</sub>."
    ],
    "correctIndex": 3,
    "explanation": "A resistência hidrodinâmica define-se por R<sub>h</sub> = ΔP/D; com ΔP constante, o caudal varia na razão inversa de R<sub>h</sub>.",
    "distractorAnalysis": [
      "Está incorreta: Inverte a relação: o caudal é o quociente entre ΔP e R<sub>h</sub>, não o produto.",
      "Está incorreta: Com ΔP constante, um aumento de R<sub>h</sub> reduz o caudal.",
      "Está incorreta: Mesmo que a velocidade local aumente na dobra, o caudal total diminui por haver mais resistência."
    ],
    "nursingApplication": "Quando o alarme de oclusão de uma bomba perfusora dispara, procura-se uma dobra ou compressão do tubo, que aumenta a resistência ao fluxo."
  },
  {
    "id": 9095,
    "topicId": 3,
    "quiz": "E",
    "question": "Para manter o mesmo caudal, porque é necessária uma diferença de pressão maior em escoamento turbulento do que em laminar?",
    "options": [
      "Parte da energia é dissipada nos redemoinhos.",
      "A viscosidade do líquido aumenta na turbulência.",
      "O raio do tubo diminui com a turbulência.",
      "O líquido torna-se mais denso na turbulência."
    ],
    "correctIndex": 0,
    "explanation": "No escoamento turbulento, a energia gasta em redemoinhos e mistura aumenta as perdas, pelo que é preciso maior ΔP para o mesmo caudal.",
    "distractorAnalysis": [
      "Está incorreta: A viscosidade é uma propriedade do líquido; a perda extra vem dos redemoinhos.",
      "Está incorreta: O tubo mantém o raio; é o tipo de escoamento que muda.",
      "Está incorreta: A densidade do líquido não muda com o tipo de escoamento."
    ],
    "nursingApplication": "Numa estenose, a turbulência aumenta as perdas de energia e o coração tem de gerar mais pressão para manter o fluxo."
  },
  {
    "id": 9096,
    "topicId": 4,
    "quiz": "E",
    "question": "Três recipientes de formas diferentes contêm água até à mesma altura. Como é a pressão no fundo de cada um?",
    "options": [
      "Maior no recipiente com mais volume de água.",
      "Maior no recipiente com a base mais larga.",
      "Igual nos três, pois só depende da altura.",
      "Maior no recipiente mais estreito."
    ],
    "correctIndex": 2,
    "explanation": "Pela lei fundamental (ΔP = ρ·g·h), a pressão no fundo depende apenas da massa volúmica, de g e da altura, não da forma (paradoxo hidrostático).",
    "distractorAnalysis": [
      "Está incorreta: A pressão hidrostática depende da altura, não do volume total.",
      "Está incorreta: A largura da base não altera a pressão no fundo.",
      "Está incorreta: Para a mesma altura e o mesmo líquido, a forma não altera a pressão."
    ],
    "nursingApplication": "Num manómetro de coluna de água para pressão venosa central, interessa a altura da coluna, não a largura do tubo."
  },
  {
    "id": 9097,
    "topicId": 4,
    "quiz": "E",
    "question": "Num adulto de pé, como se compara a pressão venosa nos pés com a pressão venosa no pescoço?",
    "options": [
      "É muito maior nos pés.",
      "É muito maior no pescoço.",
      "É igual, porque o sangue está no mesmo circuito.",
      "É maior nos pés só quando o utente caminha."
    ],
    "correctIndex": 0,
    "explanation": "Em pé, os pés ficam muito abaixo do coração; a coluna de sangue acrescenta pressão hidrostática (cerca de 0,78 mmHg por cm de desnível).",
    "distractorAnalysis": [
      "Está incorreta: No pescoço a coluna de sangue acima é menor, logo a pressão é menor.",
      "Está incorreta: A pressão varia com a profundidade da coluna de sangue.",
      "Está incorreta: A diferença existe mesmo em repouso, devido à coluna de sangue."
    ],
    "nursingApplication": "Isto ajuda a explicar o edema dos membros inferiores em pessoas que passam muitas horas de pé."
  },
  {
    "id": 9098,
    "topicId": 4,
    "quiz": "E",
    "question": "Uma manga de pressão em volta de um saco de soro aumenta a pressão em todo o líquido. Que lei descreve esta transmissão?",
    "options": [
      "Lei de Poiseuille.",
      "Lei de Pascal.",
      "Lei de Hooke.",
      "Lei de Torricelli."
    ],
    "correctIndex": 1,
    "explanation": "Segundo a lei de Pascal, uma pressão aplicada a um líquido confinado transmite-se integralmente a todos os pontos do líquido.",
    "distractorAnalysis": [
      "Está incorreta: Poiseuille relaciona o caudal com a resistência de um tubo, não a transmissão de pressão num líquido em repouso.",
      "Está incorreta: Hooke descreve a deformação elástica dos sólidos.",
      "Está incorreta: Torricelli descreve a pressão atmosférica e a velocidade de saída de um líquido por um orifício."
    ],
    "nursingApplication": "As mangas de pressão permitem perfusões rápidas em situações de emergência ou manter a pressão em sistemas de monitorização invasiva."
  },
  {
    "id": 9099,
    "topicId": 4,
    "quiz": "E",
    "question": "Na descida de um avião, um passageiro sente o tímpano empurrado para dentro. Porquê?",
    "options": [
      "A pressão exterior diminui e fica menor do que no ouvido médio.",
      "A pressão no ouvido médio aumenta durante a descida.",
      "A pressão não muda; o desconforto deve-se ao ruído.",
      "A pressão exterior aumenta e fica maior do que no ouvido médio."
    ],
    "correctIndex": 3,
    "explanation": "Ao descer, a pressão exterior aumenta; até a trompa de Eustáquio abrir, a pressão no ouvido médio é menor e o tímpano é empurrado para dentro.",
    "distractorAnalysis": [
      "Está incorreta: Na descida a pressão exterior aumenta; o tímpano é empurrado para fora quando a exterior é menor.",
      "Está incorreta: O ouvido médio mantém a pressão até a trompa de Eustáquio abrir.",
      "Está incorreta: A pressão atmosférica aumenta à medida que a altitude diminui."
    ],
    "nursingApplication": "Engolir ou bocejar abre a trompa de Eustáquio e iguala as pressões, o que se pode recomendar a passageiros com desconforto."
  },
  {
    "id": 9100,
    "topicId": 4,
    "quiz": "E",
    "question": "Para o mesmo desnível vertical, em que coluna de líquido é maior a diferença de pressão: mercúrio ou água?",
    "options": [
      "Na água, porque tem menor massa volúmica.",
      "No mercúrio, por ser mais denso.",
      "É igual, porque o desnível é o mesmo.",
      "Na água, porque é menos viscosa."
    ],
    "correctIndex": 1,
    "explanation": "ΔP = ρ·g·h: com h igual, a diferença de pressão é proporcional à massa volúmica; o mercúrio (13 600 kg/m³) dá cerca de 13,6 vezes mais do que a água.",
    "distractorAnalysis": [
      "Está incorreta: ΔP é diretamente proporcional à massa volúmica, logo o líquido menos denso dá menor ΔP.",
      "Está incorreta: Para o mesmo desnível, ΔP depende também da massa volúmica do líquido.",
      "Está incorreta: Em repouso, a viscosidade não intervém na pressão hidrostática."
    ],
    "nursingApplication": "No sangue (1060 kg/m³), cada centímetro de desnível corresponde a cerca de 0,78 mmHg, o que explica as diferenças de pressão com a posição."
  }
];
