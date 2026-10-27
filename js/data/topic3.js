/**
 * BANCO DE QUESTÕES - TÓPICO 3
 * Hidrodinâmica: viscosidade, regimes laminar e turbulento, número de Reynolds,
 * sistema circulatório, caudal, lei de Poiseuille, resistência hidráulica e sons de Korotkoff
 * Revisto por especialista (validade científica)
 * Total de Questões: 200 (IDs 3001 a 3200)
 */

const TOPIC_3_QUESTIONS = [
  {
    "id": 3001,
    "topicId": 3,
    "question": "Um enfermeiro passa 100 mL de soro de um copo alto e estreito para uma taça larga e baixa. O que acontece à forma e ao volume do líquido?",
    "options": [
      "A forma passa a ser a da taça e o volume mantém-se constante.",
      "A forma e o volume mantêm-se exatamente iguais aos do copo.",
      "A forma mantém-se a do copo e o volume passa a ser o da taça.",
      "A forma e o volume passam a ser os da taça, ocupando-a por completo."
    ],
    "correctIndex": 0,
    "explanation": "Os líquidos não têm forma própria e tomam a forma do recipiente, mas têm volume constante. Por isso, os 100 mL passam a ter a forma da taça sem que o volume se altere.",
    "distractorAnalysis": [
      "Está incorreta: a forma de um líquido não é própria: ajusta-se ao recipiente que o contém.",
      "Está incorreta: é o contrário: a forma adapta-se ao recipiente e o volume do líquido não se altera.",
      "Está incorreta: o volume do líquido é constante, por isso 100 mL não enchem uma taça maior só por mudarem de recipiente."
    ],
    "nursingApplication": "Ao preparar uma medicação, o enfermeiro pode transferir um líquido entre recipientes sabendo que a quantidade (volume) é a mesma, apenas muda a forma."
  },
  {
    "id": 3002,
    "topicId": 3,
    "question": "O sangue que enche um vaso ocupa toda a secção desse vaso e adota a forma cilíndrica do condutor. Que propriedade dos líquidos explica este facto?",
    "options": [
      "Têm forma própria, que se mantém dentro de qualquer condutor.",
      "Não têm forma própria e tomam a forma do recipiente.",
      "Têm viscosidade nula, por isso espalham-se por toda a secção.",
      "Têm volume variável, que se ajusta ao tamanho de cada vaso."
    ],
    "correctIndex": 1,
    "explanation": "Os líquidos não têm forma própria: tomam a forma do recipiente ou do condutor onde se encontram. É por isso que o sangue adota a forma cilíndrica do vaso, mantendo o seu volume.",
    "distractorAnalysis": [
      "Está incorreta: se os líquidos tivessem forma própria, não se adaptariam à forma do vaso; é precisamente o contrário que se observa.",
      "Está incorreta: a viscosidade é a resistência ao escoamento e nenhum líquido real a tem nula; a adaptação à forma do vaso deve-se à ausência de forma própria.",
      "Está incorreta: o volume de um líquido é constante; o que se adapta ao condutor é a forma, e não o volume."
    ],
    "nursingApplication": "Num prolongamento ou num cateter, o soro ocupa toda a secção do tubo, tomando a sua forma cilíndrica, sem que o volume administrado se altere."
  },
  {
    "id": 3003,
    "topicId": 3,
    "question": "Um estudante de Enfermagem pretende compreender como o sangue se desloca no interior de um vaso. Que ramo da Física estuda este tipo de situação?",
    "options": [
      "A hidrostática, que estuda apenas líquidos em repouso em recipientes.",
      "A termologia, que estuda a transmissão de calor entre corpos.",
      "A hidrodinâmica, que estuda os líquidos em movimento em condutores.",
      "A ótica, que estuda a propagação da luz em meios transparentes."
    ],
    "correctIndex": 2,
    "explanation": "A hidrodinâmica (do grego hydor, água) estuda os líquidos em movimento. Aplica-se aqui ao escoamento do sangue no interior dos vasos.",
    "distractorAnalysis": [
      "Está incorreta: a hidrostática ocupa-se de líquidos em repouso, e aqui o sangue está em movimento.",
      "Está incorreta: a termologia trata de calor e temperatura, não do escoamento de um líquido num tubo.",
      "Está incorreta: a ótica estuda a luz e não o movimento de líquidos."
    ],
    "nursingApplication": "Compreender o escoamento do sangue nos vasos é a base para interpretar o efeito da alteração do calibre dos vasos ou do tipo de líquido numa perfusão."
  },
  {
    "id": 3004,
    "topicId": 3,
    "question": "Qual é o principal objetivo do estudo da hidrodinâmica de líquidos em condutores cilíndricos, no contexto do curso de Enfermagem?",
    "options": [
      "Calcular a forma que um líquido adota quando está em repouso num recipiente.",
      "Determinar a composição química do plasma sanguíneo de cada utente.",
      "Descrever apenas o movimento de sólidos que se deslocam dentro dos vasos.",
      "Estudar o escoamento de líquidos em tubos e aplicá-lo à circulação."
    ],
    "correctIndex": 3,
    "explanation": "Os condutores cilíndricos servem de modelo simples para os vasos sanguíneos. Assim, o estudo do escoamento de líquidos em tubos aplica-se ao sistema circulatório.",
    "distractorAnalysis": [
      "Está incorreta: a hidrodinâmica ocupa-se de líquidos em movimento e não da forma em repouso.",
      "Está incorreta: a composição química é matéria de outras áreas, não do estudo do movimento dos líquidos em tubos.",
      "Está incorreta: a hidrodinâmica estuda líquidos em movimento e não sólidos."
    ],
    "nursingApplication": "Este modelo ajuda a perceber porque é que a alteração do calibre de um vaso ou de um cateter modifica o modo como o líquido escoa."
  },
  {
    "id": 3005,
    "topicId": 3,
    "question": "Ao inclinar dois frascos idênticos com igual volume, observa-se que o óleo escorre mais lentamente do que a água. Que propriedade explica esta diferença?",
    "options": [
      "O óleo tem menor viscosidade, isto é, menor resistência ao escoamento.",
      "O óleo tem maior viscosidade, isto é, maior resistência ao escoamento.",
      "O óleo não tem forças entre as moléculas vizinhas, ao contrário da água.",
      "O óleo tem volume variável, ao contrário da água, que o mantém."
    ],
    "correctIndex": 1,
    "explanation": "A viscosidade é a resistência que um fluido oferece ao seu escoamento. Um líquido que escoa mais devagar nas mesmas condições é mais viscoso.",
    "distractorAnalysis": [
      "Está incorreta: o óleo escoa mais devagar, o que indica maior viscosidade e não menor.",
      "Está incorreta: as forças intermoleculares existem em todos os líquidos e são a causa da viscosidade, não a sua ausência.",
      "Está incorreta: todos os líquidos têm volume constante, e isso não explica a diferença na rapidez de escoamento."
    ],
    "nursingApplication": "Soluções mais viscosas passam com mais dificuldade por agulhas e cateteres, o que se nota na facilidade com que o líquido escorre no sistema."
  },
  {
    "id": 3006,
    "topicId": 3,
    "question": "A que se deve a viscosidade de um líquido?",
    "options": [
      "Às forças intermoleculares entre moléculas vizinhas.",
      "Ao peso e ao material do recipiente onde o líquido se encontra.",
      "Ao atrito do líquido com o ar acima da superfície livre.",
      "À força exercida pelo êmbolo da seringa que empurra o líquido."
    ],
    "correctIndex": 0,
    "explanation": "As moléculas vizinhas de um líquido exercem forças entre si, que se opõem ao deslizamento relativo das camadas. É esta a origem da resistência ao escoamento.",
    "distractorAnalysis": [
      "Está incorreta: o recipiente não determina a viscosidade, que é uma propriedade do próprio líquido.",
      "Está incorreta: a viscosidade existe no interior do líquido, devido à interação entre as suas moléculas, e não ao ar.",
      "Está incorreta: o êmbolo provoca o escoamento, mas a viscosidade é uma característica do líquido, independente da força aplicada."
    ],
    "nursingApplication": "Líquidos com forças intermoleculares mais intensas oferecem maior resistência à passagem por agulhas e cateteres."
  },
  {
    "id": 3007,
    "topicId": 3,
    "question": "Um frasco de solução injetável é retirado do frigorífico e fica algum tempo à temperatura ambiente. Depois, dissolve-se nele mais um soluto. Que afirmação sobre a viscosidade está correta?",
    "options": [
      "A viscosidade depende apenas da forma do frasco usado.",
      "A viscosidade é constante e não é afetada pela temperatura.",
      "A viscosidade pode variar com a temperatura e com a composição.",
      "A viscosidade só se altera se o volume de líquido mudar."
    ],
    "correctIndex": 2,
    "explanation": "A viscosidade de um líquido varia com a temperatura e com a composição. Alterações em qualquer um destes fatores podem modificar a resistência ao escoamento.",
    "distractorAnalysis": [
      "Está incorreta: a forma do recipiente não influencia a viscosidade, uma propriedade do líquido.",
      "Está incorreta: a viscosidade varia com a temperatura, por isso não é uma constante para cada líquido.",
      "Está incorreta: a viscosidade não depende do volume, mas sim da temperatura e da composição do líquido."
    ],
    "nursingApplication": "Ao preparar soluções ou ao usar medicação guardada no frigorífico, a temperatura e a composição podem alterar a facilidade com que o líquido escoa."
  },
  {
    "id": 3008,
    "topicId": 3,
    "question": "Qual é a unidade de viscosidade no sistema c.g.s.?",
    "options": [
      "O dyn/cm².",
      "O cm³/s.",
      "O g/cm³.",
      "O poise."
    ],
    "correctIndex": 3,
    "explanation": "No sistema c.g.s., a viscosidade exprime-se em poise. As outras opções são unidades de pressão, caudal e densidade.",
    "distractorAnalysis": [
      "Está incorreta: o dyn/cm² mede pressão e não viscosidade.",
      "Está incorreta: o cm³/s mede caudal, isto é, volume por unidade de tempo.",
      "Está incorreta: o g/cm³ mede densidade, grandeza diferente da viscosidade."
    ],
    "nursingApplication": "Ao ler a ficha técnica de uma solução, o enfermeiro distingue a viscosidade (poise) do caudal (cm³/s) e da densidade (g/cm³)."
  },
  {
    "id": 3009,
    "topicId": 3,
    "question": "Um líquido tem viscosidade de 0,004 poiseuille. Sabendo que 1 poiseuille = 10 poise, qual é a viscosidade em poise?",
    "options": [
      "0,04 poise",
      "0,0004 poise",
      "0,4 poise",
      "4 poise"
    ],
    "correctIndex": 0,
    "explanation": "Como 1 poiseuille equivale a 10 poise, o valor em poise obtém-se multiplicando por 10. Esta relação entre unidades é apenas uma curiosidade da matéria.",
    "solution": [
      "Dados: η = 0,004 poiseuille; 1 poiseuille = 10 poise.",
      "Fórmula: η (poise) = η (poiseuille) × 10.",
      "Substituição: η = 0,004 × 10.",
      "Resultado: 0,04 poise"
    ],
    "distractorAnalysis": [
      "Está incorreta: dividiu por 10 em vez de multiplicar; como 1 poiseuille equivale a 10 poise, o valor em poise é maior.",
      "Está incorreta: multiplicou por 100 em vez de por 10.",
      "Está incorreta: multiplicou por 1000 em vez de por 10."
    ],
    "nursingApplication": "Se uma ficha técnica indicar a viscosidade de uma solução em poiseuille, o enfermeiro pode convertê-la para poise."
  },
  {
    "id": 3010,
    "topicId": 3,
    "question": "Dois líquidos, A e B, têm a mesma densidade. Ao escoarem no mesmo tubo, o líquido A escoa mais lentamente do que o B. O que se pode concluir?",
    "options": [
      "O líquido B é mais viscoso do que o A, porque escoa mais depressa.",
      "Os líquidos têm a mesma viscosidade, porque têm a mesma densidade.",
      "O líquido A tem menor viscosidade, porque a sua densidade é igual à de B.",
      "O líquido A é mais viscoso do que o B, apesar da igualdade de densidades."
    ],
    "correctIndex": 3,
    "explanation": "Densidade (massa por unidade de volume) e viscosidade (resistência ao escoamento) são propriedades distintas. Se A escoa mais lentamente nas mesmas condições, é mais viscoso.",
    "distractorAnalysis": [
      "Está incorreta: um líquido que escoa mais depressa oferece menos resistência, ou seja, é menos viscoso.",
      "Está incorreta: densidade e viscosidade são grandezas diferentes: líquidos com igual densidade podem ter viscosidades distintas.",
      "Está incorreta: a diferença na rapidez de escoamento mostra que A tem maior viscosidade; a densidade igual não permite concluir o contrário."
    ],
    "nursingApplication": "Dois soros com aparência semelhante podem escoar de forma diferente num sistema de perfusão, pois a viscosidade não se deduz da densidade."
  },
  {
    "id": 3011,
    "topicId": 3,
    "question": "Para um dado líquido, sabe-se que a viscosidade diminui quando a temperatura aumenta. Um frasco desse líquido, guardado no frigorífico, é aquecido até à temperatura ambiente. O que se espera?",
    "options": [
      "O líquido passa a oferecer maior resistência ao escoamento.",
      "A resistência ao escoamento mantém-se, pois a composição não mudou.",
      "O líquido passa a oferecer menor resistência ao escoamento.",
      "O líquido deixa de ter viscosidade, pois deixa de estar frio."
    ],
    "correctIndex": 2,
    "explanation": "Se a viscosidade diminui com o aumento da temperatura, aquecer o líquido reduz a sua resistência ao escoamento. A viscosidade varia com a temperatura, mas não se anula.",
    "distractorAnalysis": [
      "Está incorreta: com o aumento da temperatura a viscosidade diminui, logo a resistência ao escoamento também diminui.",
      "Está incorreta: a viscosidade varia com a temperatura, mesmo sem alteração da composição.",
      "Está incorreta: nenhum líquido real tem viscosidade nula; ela diminui, mas não desaparece."
    ],
    "nursingApplication": "Um líquido guardado a baixa temperatura pode escoar de forma diferente quando já está à temperatura ambiente, o que é relevante na preparação de medicação."
  },
  {
    "id": 3012,
    "topicId": 3,
    "question": "Qual das seguintes afirmações sobre a viscosidade de um líquido está correta?",
    "options": [
      "Depende apenas do diâmetro do tubo onde o líquido escoa.",
      "É maior quando as forças entre moléculas vizinhas são mais intensas.",
      "Mede a facilidade de escoamento: quanto maior, mais fácil o escoamento.",
      "É a massa de líquido existente em cada unidade de volume."
    ],
    "correctIndex": 1,
    "explanation": "A viscosidade é a resistência ao escoamento e tem origem nas forças entre moléculas vizinhas. Quanto mais intensas estas forças, maior a viscosidade.",
    "distractorAnalysis": [
      "Está incorreta: a viscosidade é propriedade do líquido e não do tubo; o diâmetro influencia o regime, não a viscosidade.",
      "Está incorreta: a viscosidade mede a resistência ao escoamento, pelo que maior viscosidade significa escoamento mais difícil.",
      "Está incorreta: essa é a definição de densidade e não de viscosidade."
    ],
    "nursingApplication": "Compreender que a viscosidade é uma característica do líquido ajuda o enfermeiro a prever que soluções mais espessas escoam com maior dificuldade num cateter."
  },
  {
    "id": 3013,
    "topicId": 3,
    "question": "Qual das descrições corresponde ao regime laminar de um líquido num tubo?",
    "options": [
      "Turbilhões que misturam continuamente as camadas do líquido entre si.",
      "Partículas que passam constantemente de uma linha de corrente para outra.",
      "Camadas concêntricas que deslizam umas sobre as outras sem se misturar.",
      "Movimento desorganizado, com velocidade semelhante em quase toda a secção."
    ],
    "correctIndex": 2,
    "explanation": "No regime laminar o líquido desloca-se em camadas concêntricas que não se misturam. No regime turbulento há turbilhões e mistura entre camadas.",
    "distractorAnalysis": [
      "Está incorreta: a presença de turbilhões que misturam as camadas é característica do regime turbulento.",
      "Está incorreta: a passagem de partículas entre linhas de corrente ocorre no regime turbulento.",
      "Está incorreta: movimento desorganizado e perfil quase plano são traços do regime turbulento."
    ],
    "nursingApplication": "Nos vasos de pequeno calibre e baixa velocidade o sangue tende a escoar em camadas, o que favorece as trocas com os tecidos."
  },
  {
    "id": 3014,
    "topicId": 3,
    "question": "Como se comparam as linhas de corrente nos regimes laminar e turbulento?",
    "options": [
      "No laminar cruzam-se; no turbulento são paralelas e não se cruzam.",
      "Nos dois regimes são paralelas, diferindo apenas na velocidade média.",
      "Nos dois regimes cruzam-se, mas apenas no turbulento há mistura.",
      "No laminar são paralelas e não se cruzam; no turbulento, cruzam-se."
    ],
    "correctIndex": 3,
    "explanation": "No regime laminar as linhas de corrente são paralelas e não se cruzam. No turbulento, os turbilhões fazem-nas cruzar e as partículas passam de uma linha para outra.",
    "distractorAnalysis": [
      "Está incorreta: está invertido: as linhas de corrente paralelas caracterizam o laminar e o cruzamento caracteriza o turbulento.",
      "Está incorreta: no turbulento os turbilhões fazem com que as linhas de corrente se cruzem.",
      "Está incorreta: no regime laminar as linhas de corrente nunca se cruzam, e é por isso que não há mistura entre camadas."
    ],
    "nursingApplication": "Ao ouvir um ruído sobre uma artéria, o enfermeiro pode associá-lo a um escoamento em que as linhas de corrente se cruzam."
  },
  {
    "id": 3015,
    "topicId": 3,
    "question": "Qual das seguintes descrições corresponde ao perfil de velocidades do regime laminar num tubo cilíndrico?",
    "options": [
      "Parabólico: velocidade nula junto à parede e máxima no eixo do tubo.",
      "Quase plano: velocidade semelhante em quase toda a secção do tubo.",
      "Parabólico: velocidade máxima junto à parede e nula no eixo do tubo.",
      "Uniforme: velocidade igual em todos os pontos, incluindo na parede."
    ],
    "correctIndex": 0,
    "explanation": "Em regime laminar a camada aderente à parede tem velocidade nula e as camadas centrais deslocam-se mais depressa. O perfil de velocidades é parabólico, com máximo no eixo.",
    "distractorAnalysis": [
      "Está incorreta: o perfil quase plano é típico do regime turbulento.",
      "Está incorreta: a velocidade é nula na camada aderente à parede e máxima no eixo, e não o contrário.",
      "Está incorreta: no regime laminar a camada junto à parede tem velocidade nula, por isso o perfil não é uniforme."
    ],
    "nursingApplication": "O conhecimento do perfil parabólico ajuda a perceber que o sangue junto às paredes dos vasos se desloca mais lentamente do que o do centro."
  },
  {
    "id": 3016,
    "topicId": 3,
    "question": "Os turbilhões misturam as camadas de um líquido e tendem a uniformizar a velocidade ao longo da secção. Que perfil de velocidades resulta?",
    "options": [
      "Parabólico, com velocidade máxima no eixo e nula na parede.",
      "Quase plano, com velocidades semelhantes em quase toda a secção.",
      "Parabólico, mais acentuado do que no regime laminar.",
      "Triangular, com velocidade máxima junto à parede do tubo."
    ],
    "correctIndex": 1,
    "explanation": "Em regime turbulento, a mistura promovida pelos turbilhões torna a velocidade semelhante em quase toda a secção. O perfil é quase plano.",
    "distractorAnalysis": [
      "Está incorreta: o perfil parabólico é típico do regime laminar, em que não há mistura entre camadas.",
      "Está incorreta: a mistura entre camadas aproxima as velocidades umas das outras, tornando o perfil mais achatado, e não mais acentuado.",
      "Está incorreta: a velocidade junto à parede não é a máxima e o perfil turbulento não tem essa forma."
    ],
    "nursingApplication": "Num vaso com escoamento turbulento, o sangue tem velocidades mais uniformes na secção do que no perfil parabólico do escoamento laminar."
  },
  {
    "id": 3017,
    "topicId": 3,
    "question": "Num vaso com escoamento laminar, qual é a velocidade da camada de sangue em contacto com a parede?",
    "options": [
      "É máxima, porque está mais afastada do eixo do vaso.",
      "É igual à da camada central, porque o sangue é um fluido contínuo.",
      "É igual à velocidade média, pois a camada é a mais extensa.",
      "É nula, porque a camada junto à parede adere a ela."
    ],
    "correctIndex": 3,
    "explanation": "A camada aderente à parede tem velocidade nula e a velocidade aumenta em direção ao eixo, onde é máxima. É isto que dá ao perfil laminar a forma parabólica.",
    "distractorAnalysis": [
      "Está incorreta: a velocidade é máxima no eixo e não junto à parede.",
      "Está incorreta: as camadas têm velocidades diferentes, aumentando da parede para o eixo.",
      "Está incorreta: a camada junto à parede está praticamente parada, por isso a sua velocidade é inferior à média."
    ],
    "nursingApplication": "Isto ajuda a explicar porque é que o sangue junto à parede de um vaso se renova mais lentamente do que o do centro."
  },
  {
    "id": 3018,
    "topicId": 3,
    "question": "Num tubo de vidro com escoamento laminar, injeta-se corante em dois pontos: um junto à parede e outro no eixo. Qual deles percorre o tubo mais depressa?",
    "options": [
      "O da parede, onde a velocidade do líquido é máxima.",
      "O do eixo, onde a velocidade do líquido é máxima.",
      "Ambos à mesma velocidade, porque o caudal é o mesmo.",
      "O da parede, porque as camadas periféricas deslocam-se mais depressa."
    ],
    "correctIndex": 1,
    "explanation": "Em regime laminar a velocidade é máxima no eixo e nula junto à parede. O corante colocado no eixo é, portanto, arrastado mais depressa.",
    "distractorAnalysis": [
      "Está incorreta: junto à parede a velocidade é nula, e não máxima.",
      "Está incorreta: as camadas do regime laminar têm velocidades diferentes, mesmo que o caudal seja um só.",
      "Está incorreta: as camadas periféricas são as mais lentas; as centrais deslocam-se mais depressa."
    ],
    "nursingApplication": "Isto mostra que, num vaso, as partículas do centro da corrente se deslocam mais depressa do que as das camadas junto à parede."
  },
  {
    "id": 3019,
    "topicId": 3,
    "question": "Qual das seguintes afirmações NÃO é característica do regime laminar?",
    "options": [
      "Os turbilhões misturam as camadas do líquido.",
      "O escoamento é silencioso.",
      "O perfil de velocidades é parabólico.",
      "O gasto de energia é menor do que no regime turbulento."
    ],
    "correctIndex": 0,
    "explanation": "No regime laminar não há turbilhões nem mistura entre camadas. A presença de turbilhões que misturam as camadas é característica do regime turbulento.",
    "distractorAnalysis": [
      "Está incorreta: o regime laminar é, de facto, silencioso, pelo que esta é uma característica sua.",
      "Está incorreta: o perfil parabólico é, de facto, característico do regime laminar.",
      "Está incorreta: o regime laminar tem menor gasto de energia, pelo que esta é uma característica sua."
    ],
    "nursingApplication": "Distinguir as características dos dois regimes ajuda a relacionar o ruído audível com a perturbação do escoamento do sangue."
  },
  {
    "id": 3020,
    "topicId": 3,
    "question": "Um líquido é bombeado num tubo, ora em regime laminar, ora em regime turbulento, com o mesmo caudal médio. Em qual dos regimes é maior o gasto de energia?",
    "options": [
      "No laminar, porque as camadas deslizam umas sobre as outras.",
      "É igual nos dois, porque o caudal médio é o mesmo.",
      "No turbulento, porque os turbilhões dissipam energia.",
      "Em nenhum deles, porque o líquido se desloca sem custo energético."
    ],
    "correctIndex": 2,
    "explanation": "O regime turbulento envolve movimento desorganizado e turbilhões, o que aumenta o gasto de energia. O regime laminar é o de menor gasto.",
    "distractorAnalysis": [
      "Está incorreta: o regime laminar é o que menos energia gasta.",
      "Está incorreta: o gasto de energia é diferente: o regime turbulento gasta mais.",
      "Está incorreta: qualquer escoamento exige energia, e no turbulento o gasto é superior."
    ],
    "nursingApplication": "Por isso, quanto mais o sangue escoar em regime laminar, menor o trabalho que o coração tem de realizar."
  },
  {
    "id": 3021,
    "topicId": 3,
    "question": "Ao auscultar uma artéria com o estetoscópio, um enfermeiro ouve um ruído que não existe no vaso do lado oposto. Que interpretação é mais provável?",
    "options": [
      "O sangue escoa em camadas sem se misturar, produzindo som.",
      "O sangue está parado, e o ruído vem da parede do vaso.",
      "O perfil de velocidades é parabólico, o que origina o ruído.",
      "Há turbulência no escoamento do sangue nesse local."
    ],
    "correctIndex": 3,
    "explanation": "A turbulência produz som, enquanto o regime laminar é silencioso. Ouvir um ruído sugere que o escoamento ficou turbulento nesse ponto.",
    "distractorAnalysis": [
      "Está incorreta: o regime laminar é silencioso e não produz ruído.",
      "Está incorreta: um ruído indica escoamento perturbado e não ausência de movimento do sangue.",
      "Está incorreta: o perfil parabólico é típico do regime laminar, que é silencioso."
    ],
    "nursingApplication": "Durante a auscultação, o ruído audível sobre um vaso pode indicar um escoamento perturbado, a comunicar ao responsável clínico."
  },
  {
    "id": 3022,
    "topicId": 3,
    "question": "Num vaso de pequeno calibre e baixa velocidade, o estetoscópio não deteta qualquer ruído. Qual é a explicação mais provável?",
    "options": [
      "O escoamento é turbulento, mas o som não se propaga na parede.",
      "O escoamento é laminar, que é silencioso.",
      "O sangue está parado, pois todo o escoamento produz ruído.",
      "A viscosidade do sangue é nula, o que impede qualquer som."
    ],
    "correctIndex": 1,
    "explanation": "O regime laminar não produz ruído, ao contrário do turbulento. Em vasos pequenos e de baixa velocidade o escoamento tende a ser laminar.",
    "distractorAnalysis": [
      "Está incorreta: o escoamento turbulento produz som, por isso não seria silencioso.",
      "Está incorreta: o sangue pode escoar sem produzir ruído, desde que o regime seja laminar.",
      "Está incorreta: nenhum líquido real tem viscosidade nula, e o silêncio deve-se ao regime laminar."
    ],
    "nursingApplication": "A ausência de ruído à auscultação é compatível com um escoamento sem perturbações no local examinado."
  },
  {
    "id": 3023,
    "topicId": 3,
    "question": "Porque é que, no sistema circulatório, o regime laminar é reposto sempre que possível?",
    "options": [
      "Porque o regime laminar mistura melhor as camadas de sangue entre si.",
      "Porque o regime laminar gera mais ruído, o que ajuda a monitorizar o fluxo.",
      "Porque é o regime de menor gasto de energia, poupando esforço ao coração.",
      "Porque a velocidade do sangue é igual em toda a secção do vaso."
    ],
    "correctIndex": 2,
    "explanation": "O regime laminar gasta menos energia do que o turbulento. Repô-lo sempre que possível reduz o trabalho que o coração tem de realizar.",
    "distractorAnalysis": [
      "Está incorreta: é o regime turbulento que mistura as camadas, e não o laminar.",
      "Está incorreta: o regime laminar é silencioso e o ruído é característico do regime turbulento.",
      "Está incorreta: isso é típico do perfil quase plano do regime turbulento; o perfil laminar é parabólico."
    ],
    "nursingApplication": "Uma circulação com menos perturbações do escoamento representa menor esforço cardíaco, o que é importante em utentes com coração debilitado."
  },
  {
    "id": 3024,
    "topicId": 3,
    "question": "Na experiência de Reynolds, injeta-se um fio fino de corante no centro de água a escoar num tubo de vidro. Com caudal baixo, o que se observa?",
    "options": [
      "O fio de corante mantém-se contínuo e delgado ao longo do tubo.",
      "O corante dispersa-se logo à entrada e mistura-se com a água.",
      "O fio parte-se em turbilhões que ocupam toda a secção do tubo.",
      "O corante desaparece, pois a água deixa de se mover no tubo."
    ],
    "correctIndex": 0,
    "explanation": "Com caudal baixo, o escoamento é laminar e as camadas não se misturam. O fio de corante mantém-se contínuo.",
    "distractorAnalysis": [
      "Está incorreta: a dispersão do corante só ocorre com caudal elevado, em regime turbulento.",
      "Está incorreta: os turbilhões surgem em regime turbulento e não com caudal baixo.",
      "Está incorreta: com caudal baixo a água continua a escoar; o fio mantém-se visível."
    ],
    "nursingApplication": "Esta experiência dá uma imagem do escoamento em camadas dos vasos de baixo calibre e baixa velocidade."
  },
  {
    "id": 3025,
    "topicId": 3,
    "question": "Na experiência de Reynolds, aumenta-se o caudal de água até o fio de corante se dispersar e se misturar com a água. Como se interpreta esta observação?",
    "options": [
      "O escoamento continua laminar, porque o corante se dissolve na água.",
      "O escoamento tornou-se turbulento, com turbilhões a misturar as camadas.",
      "O escoamento continua laminar, mas com perfil mais acentuado.",
      "O escoamento deixou de existir, pois o corante ocupa o tubo."
    ],
    "correctIndex": 1,
    "explanation": "Com caudal elevado, os turbilhões misturam as camadas e o corante dispersa-se. Isso mostra que o escoamento passou a turbulento.",
    "distractorAnalysis": [
      "Está incorreta: a dispersão do corante deve-se à mistura entre camadas e não à dissolução; no regime laminar o fio mantém-se.",
      "Está incorreta: a mistura do corante mostra que as camadas já não se mantêm separadas, logo o regime não é laminar.",
      "Está incorreta: a água continua a escoar, e o espalhamento do corante resulta de turbilhões."
    ],
    "nursingApplication": "Perceber que o aumento de velocidade pode tornar um escoamento turbulento ajuda a interpretar as situações em que o sangue passa de forma mais ruidosa."
  },
  {
    "id": 3026,
    "topicId": 3,
    "question": "Numa linha de perfusão reta e lisa, aumenta-se bastante a velocidade a que o líquido percorre o tubo, mantendo-se tudo o resto. Como varia a tendência para o regime turbulento?",
    "options": [
      "Aumenta, porque a maior velocidade favorece a turbulência.",
      "Diminui, porque o líquido passa a escoar mais depressa.",
      "Mantém-se, porque só depende do material do tubo.",
      "Diminui, porque há menos mistura entre as camadas do líquido."
    ],
    "correctIndex": 0,
    "explanation": "Re é proporcional à velocidade do líquido. Aumentar a velocidade, mantendo o resto, aumenta Re e a tendência para o regime turbulento.",
    "distractorAnalysis": [
      "Está incorreta: a maior velocidade aumenta Re e favorece a turbulência.",
      "Está incorreta: a velocidade é um dos fatores que determina o regime de escoamento.",
      "Está incorreta: a maior velocidade favorece os turbilhões e, com eles, a mistura entre camadas."
    ],
    "nursingApplication": "Num sistema de perfusão, aumentar a velocidade de administração aumenta Re; essa velocidade é definida conforme prescrição e protocolo da instituição."
  },
  {
    "id": 3027,
    "topicId": 3,
    "question": "O mesmo líquido escoa à mesma velocidade em dois tubos retos e lisos, um com 0,2 cm e outro com 1,0 cm de diâmetro. Em qual a tendência para a turbulência é maior?",
    "options": [
      "No tubo de menor diâmetro, porque o líquido tem menos espaço.",
      "É igual nos dois, porque a velocidade e o líquido são os mesmos.",
      "No tubo de maior diâmetro, porque Re aumenta com d.",
      "Não é possível comparar sem conhecer o comprimento de cada tubo."
    ],
    "correctIndex": 2,
    "explanation": "Um maior diâmetro favorece a turbulência, mantendo velocidade, densidade e viscosidade. Por isso, o tubo mais largo tem maior tendência para escoamento turbulento.",
    "distractorAnalysis": [
      "Está incorreta: um maior diâmetro aumenta Re, e é por isso que o tubo largo é o mais favorável à turbulência.",
      "Está incorreta: o diâmetro também influencia o regime, por isso a tendência não é igual.",
      "Está incorreta: o comprimento não é um dos fatores que determinam o regime; a comparação é possível pelo diâmetro."
    ],
    "nursingApplication": "Vasos e cateteres de maior calibre estão mais sujeitos a escoamento turbulento quando a velocidade do sangue ou do líquido é elevada."
  },
  {
    "id": 3028,
    "topicId": 3,
    "question": "Dois líquidos têm a mesma viscosidade e escoam à mesma velocidade, no mesmo tubo liso. Um tem densidade 1,00 g/cm³ e o outro 1,30 g/cm³. Qual tem maior tendência para o escoamento turbulento?",
    "options": [
      "O de densidade 1,00 g/cm³, porque é mais leve e escoa melhor.",
      "Têm a mesma tendência, porque a viscosidade e a velocidade são iguais.",
      "O de densidade 1,30 g/cm³, porque a sua viscosidade é maior.",
      "O de densidade 1,30 g/cm³, porque Re aumenta com ρ."
    ],
    "correctIndex": 3,
    "explanation": "Mantendo as outras condições, um líquido mais denso tem maior tendência para o regime turbulento. A densidade é um dos fatores que favorece a turbulência.",
    "distractorAnalysis": [
      "Está incorreta: uma maior densidade favorece a turbulência, e não o contrário.",
      "Está incorreta: a densidade também influencia o regime de escoamento, por isso as tendências são diferentes.",
      "Está incorreta: as viscosidades são iguais; a maior tendência resulta da densidade, e uma maior viscosidade reduziria a tendência para a turbulência."
    ],
    "nursingApplication": "Líquidos de densidade diferente podem comportar-se de modo distinto no mesmo sistema de perfusão, mesmo à mesma velocidade."
  },
  {
    "id": 3029,
    "topicId": 3,
    "question": "A experiência de Reynolds é repetida com um líquido mais viscoso, mantendo-se o tubo, a densidade e a velocidade. O que se espera relativamente à dispersão do fio de corante?",
    "options": [
      "Maior tendência para a dispersão, porque o líquido é mais espesso.",
      "Menor tendência para a dispersão, isto é, o fio mantém-se mais facilmente.",
      "Nenhuma diferença, porque a viscosidade não influencia o regime.",
      "O fio dispersa-se imediatamente, pois o líquido não tem camadas."
    ],
    "correctIndex": 1,
    "explanation": "Uma viscosidade maior diminui Re e reduz a tendência para a turbulência. Assim, o fio de corante tende a manter-se contínuo.",
    "distractorAnalysis": [
      "Está incorreta: uma maior viscosidade diminui Re e favorece o regime laminar.",
      "Está incorreta: a viscosidade é um dos fatores que determinam o regime de escoamento.",
      "Está incorreta: um líquido viscoso escoa em camadas, e a dispersão do corante exige turbulência."
    ],
    "nursingApplication": "Numa transfusão, o sangue, mais viscoso do que o soro fisiológico, tende a manter o escoamento laminar no mesmo cateter e à mesma velocidade."
  },
  {
    "id": 3030,
    "topicId": 3,
    "question": "Um cateter flexível fica dobrado numa curva apertada. O diâmetro e a velocidade do líquido mantêm-se. Que efeito pode ter a curva no escoamento?",
    "options": [
      "Torna o escoamento ainda mais laminar, por orientar as camadas.",
      "Não tem efeito, pois o diâmetro e a velocidade são os mesmos.",
      "Anula a viscosidade do líquido na zona da curva.",
      "Favorece o aparecimento de turbulência, com maior gasto de energia."
    ],
    "correctIndex": 3,
    "explanation": "Curvaturas, ângulos e bifurcações perturbam o escoamento e favorecem a turbulência. A turbulência gasta mais energia do que o regime laminar.",
    "distractorAnalysis": [
      "Está incorreta: as curvaturas perturbam o escoamento e favorecem os turbilhões.",
      "Está incorreta: as curvaturas favorecem a turbulência, independentemente do diâmetro e da velocidade se manterem.",
      "Está incorreta: a viscosidade é propriedade do líquido e a curva não a anula."
    ],
    "nursingApplication": "Um cateter ou linha de perfusão dobrado pode alterar o escoamento, por isso verifica-se o seu trajeto para evitar dobras."
  },
  {
    "id": 3031,
    "topicId": 3,
    "question": "Numa artéria que se divide em dois ramos (bifurcação), o que se espera, em termos qualitativos, para o escoamento junto ao local de divisão?",
    "options": [
      "Impõe o perfil parabólico em todo o vaso, sem turbilhões.",
      "Não tem efeito, pois o regime só depende da velocidade média.",
      "Maior tendência para a turbulência, devido à mudança de direção.",
      "Elimina os turbilhões existentes, por dividir o líquido em ramos."
    ],
    "correctIndex": 2,
    "explanation": "Curvaturas, ângulos e bifurcações favorecem a turbulência. As mudanças de direção do escoamento perturbam as linhas de corrente.",
    "distractorAnalysis": [
      "Está incorreta: a bifurcação perturba o escoamento e favorece a turbulência.",
      "Está incorreta: as bifurcações são um dos fatores geométricos que favorecem a turbulência.",
      "Está incorreta: a divisão do líquido não elimina turbilhões e, nesse local, pode até favorecê-los."
    ],
    "nursingApplication": "É junto a bifurcações e curvas que o escoamento tende a ser mais perturbado, o que ajuda a compreender onde certos ruídos podem surgir."
  },
  {
    "id": 3032,
    "topicId": 3,
    "question": "Um cateter apresenta a parede interna áspera, com pequenas irregularidades. Que efeito tem a rugosidade na tendência para o regime de escoamento?",
    "options": [
      "Favorece a turbulência, por perturbar as camadas junto à parede.",
      "Favorece o regime laminar, por aumentar o atrito junto à parede.",
      "Aumenta a viscosidade do líquido, tornando-o mais laminar.",
      "Não influencia o regime, que só depende da cor do líquido."
    ],
    "correctIndex": 0,
    "explanation": "Uma parede interna áspera é um dos fatores que favorece a turbulência. As irregularidades perturbam as camadas de líquido junto à parede.",
    "distractorAnalysis": [
      "Está incorreta: a parede áspera perturba o escoamento e favorece a turbulência, e não o regime laminar.",
      "Está incorreta: a rugosidade da parede não altera a viscosidade do líquido; perturba o escoamento.",
      "Está incorreta: a rugosidade da parede interna favorece a turbulência; a cor do líquido é irrelevante."
    ],
    "nursingApplication": "Uma superfície interna irregular num vaso, como a causada por uma placa de ateroma, pode tornar o escoamento mais perturbado e ruidoso."
  },
  {
    "id": 3033,
    "topicId": 3,
    "question": "Uma placa de ateroma reduz o calibre de uma artéria num segmento curto. Qualitativamente, o que acontece ao escoamento nesse local?",
    "options": [
      "A velocidade diminui no estreitamento, o que favorece o regime laminar.",
      "A velocidade aumenta no estreitamento, o que favorece a turbulência.",
      "A velocidade mantém-se, só diminuindo o volume de sangue.",
      "O regime passa a laminar, pois o diâmetro é menor."
    ],
    "correctIndex": 1,
    "explanation": "Num estreitamento a velocidade do líquido aumenta, e as variações de calibre favorecem a turbulência. O escoamento fica mais perturbado nesse local.",
    "distractorAnalysis": [
      "Está incorreta: num estreitamento a velocidade aumenta e não diminui.",
      "Está incorreta: num estreitamento a velocidade aumenta, e a variação de calibre perturba o escoamento.",
      "Está incorreta: uma variação de calibre, associada ao aumento de velocidade, favorece a turbulência."
    ],
    "nursingApplication": "Um sopro ouvido sobre uma artéria com estreitamento sugere escoamento turbulento nesse local, o que o enfermeiro regista e comunica."
  },
  {
    "id": 3034,
    "topicId": 3,
    "question": "Num modelo simples de escoamento num tubo, pretende-se diminuir a tendência para a turbulência alterando apenas um fator. Qual das alterações é adequada?",
    "options": [
      "Aumentar o diâmetro do tubo.",
      "Usar um líquido menos viscoso.",
      "Diminuir a velocidade do líquido.",
      "Introduzir curvas apertadas no tubo."
    ],
    "correctIndex": 2,
    "explanation": "Menor velocidade, menor diâmetro, menor densidade e maior viscosidade diminuem a tendência para a turbulência. As outras alterações aumentam-na.",
    "distractorAnalysis": [
      "Está incorreta: um maior diâmetro favorece a turbulência.",
      "Está incorreta: uma menor viscosidade favorece a turbulência.",
      "Está incorreta: as curvaturas perturbam o escoamento e favorecem a turbulência."
    ],
    "nursingApplication": "A velocidade de uma perfusão regula-se conforme a prescrição e o protocolo da instituição, e velocidades muito elevadas favorecem o escoamento perturbado."
  },
  {
    "id": 3035,
    "topicId": 3,
    "question": "Qual das seguintes combinações de condições mais favorece o escoamento turbulento de um líquido num tubo?",
    "options": [
      "Velocidade baixa, tubo largo e líquido pouco viscoso.",
      "Velocidade elevada, tubo estreito e líquido muito viscoso.",
      "Velocidade baixa, tubo estreito e líquido pouco viscoso.",
      "Velocidade elevada, tubo largo e líquido pouco viscoso."
    ],
    "correctIndex": 3,
    "explanation": "Maior velocidade, maior diâmetro e menor viscosidade aumentam a tendência para a turbulência. Só a combinação de velocidade elevada, tubo largo e líquido pouco viscoso reúne os três fatores favoráveis.",
    "distractorAnalysis": [
      "Está incorreta: a velocidade baixa diminui a tendência para a turbulência, pelo que esta combinação é menos favorável.",
      "Está incorreta: o tubo estreito e a viscosidade elevada diminuem a tendência para a turbulência.",
      "Está incorreta: apenas a baixa viscosidade favorece a turbulência; a baixa velocidade e o tubo estreito contrariam-na."
    ],
    "nursingApplication": "Num sistema de perfusão de grande calibre, com soro pouco viscoso a velocidade elevada, Re é maior do que numa linha fina com perfusão lenta."
  },
  {
    "id": 3036,
    "topicId": 3,
    "question": "Qual das seguintes situações é a menos favorável ao aparecimento de turbulência?",
    "options": [
      "Segmento reto, liso e de calibre constante.",
      "Curva apertada, com mudança brusca de direção.",
      "Divisão do tubo em dois ramos, numa bifurcação.",
      "Parede interna rugosa, com pequenas saliências."
    ],
    "correctIndex": 0,
    "explanation": "Curvaturas, bifurcações, paredes ásperas e variações de calibre favorecem a turbulência. Um segmento reto, liso e de calibre constante é o que menos a favorece.",
    "distractorAnalysis": [
      "Está incorreta: as curvaturas favorecem a turbulência.",
      "Está incorreta: as bifurcações favorecem a turbulência.",
      "Está incorreta: a parede áspera favorece a turbulência."
    ],
    "nursingApplication": "Manter uma linha de perfusão sem dobras e com o trajeto o mais reto possível contribui para um escoamento menos perturbado."
  },
  {
    "id": 3037,
    "topicId": 3,
    "question": "Ao abrir ligeiramente uma torneira, a água cai num jato liso e transparente; ao abri-la muito, o jato torna-se agitado, esbranquiçado e ruidoso. Como se explica esta mudança?",
    "options": [
      "A água ganhou forma própria ao sair da torneira com maior velocidade.",
      "A diminuição da velocidade tornou o escoamento turbulento.",
      "A água passou a ter viscosidade nula ao sair com mais caudal.",
      "O aumento da velocidade favoreceu a passagem de laminar a turbulento."
    ],
    "correctIndex": 3,
    "explanation": "Com maior velocidade, a tendência para a turbulência aumenta: o jato deixa de ser liso e silencioso e passa a ser agitado e ruidoso.",
    "distractorAnalysis": [
      "Está incorreta: os líquidos não têm forma própria; a mudança deve-se ao regime de escoamento.",
      "Está incorreta: a turbulência é favorecida por velocidades maiores e não por velocidades menores.",
      "Está incorreta: a viscosidade não se anula, e a mudança deve-se ao aumento da velocidade e à turbulência."
    ],
    "nursingApplication": "O mesmo princípio ajuda a compreender porque é que velocidades de escoamento elevadas aumentam o ruído e a perturbação do líquido numa linha."
  },
  {
    "id": 3038,
    "topicId": 3,
    "question": "Em qual das seguintes situações é mais provável que o escoamento seja laminar?",
    "options": [
      "Líquido lento num tubo reto, liso e de pequeno diâmetro.",
      "Líquido rápido num tubo largo, com curvas e bifurcações.",
      "Líquido pouco viscoso num tubo largo, com parede rugosa.",
      "Líquido rápido num tubo estreito, com variações de calibre."
    ],
    "correctIndex": 0,
    "explanation": "Baixa velocidade, pequeno diâmetro e um percurso reto e liso são fatores contrários à turbulência. Reunidos, tornam o regime laminar o mais provável.",
    "distractorAnalysis": [
      "Está incorreta: a velocidade elevada, o diâmetro grande, as curvas e as bifurcações favorecem a turbulência.",
      "Está incorreta: o tubo largo, a baixa viscosidade e a parede rugosa favorecem a turbulência.",
      "Está incorreta: a velocidade elevada e as variações de calibre favorecem a turbulência, apesar do tubo estreito."
    ],
    "nursingApplication": "Nos capilares, de pequeno calibre e com sangue lento, o regime laminar é o habitual, o que favorece as trocas com os tecidos."
  },
  {
    "id": 3039,
    "topicId": 3,
    "question": "O fumo de um incenso sobe, junto à brasa, numa coluna fina e lisa; mais acima, a coluna parte-se em remoinhos que se misturam com o ar. Que analogia se pode estabelecer com os regimes de escoamento?",
    "options": [
      "Primeiro o escoamento é turbulento e depois torna-se laminar.",
      "O escoamento é laminar em toda a subida, pois o fumo é um fluido.",
      "Primeiro o escoamento é laminar e depois torna-se turbulento.",
      "O escoamento é turbulento em toda a subida, mas com menos mistura."
    ],
    "correctIndex": 2,
    "explanation": "A coluna lisa é um escoamento em camadas, ou seja, laminar. Os remoinhos que misturam o fumo com o ar correspondem ao regime turbulento.",
    "distractorAnalysis": [
      "Está incorreta: a coluna fina e lisa corresponde ao regime laminar e os remoinhos ao regime turbulento.",
      "Está incorreta: os remoinhos que se misturam com o ar são típicos de escoamento turbulento.",
      "Está incorreta: a coluna fina e lisa, sem mistura, corresponde ao escoamento laminar."
    ],
    "nursingApplication": "Tal como o fumo, o sangue pode escoar em camadas num troço de um vaso e tornar-se turbulento noutro, por exemplo logo após um estreitamento."
  },
  {
    "id": 3040,
    "topicId": 3,
    "question": "Num tubo, medem-se velocidades em cinco pontos distribuídos ao longo de um diâmetro, fora da fina camada junto às paredes: 19, 20, 20, 20 e 19 cm/s. Que regime é mais provável?",
    "options": [
      "Laminar, pois o perfil é parabólico, com máximo no eixo.",
      "Turbulento, pois o perfil é quase plano.",
      "Laminar, pois a velocidade é praticamente igual em toda a secção.",
      "Não é possível saber, pois falta conhecer a viscosidade do líquido."
    ],
    "correctIndex": 1,
    "explanation": "Velocidades semelhantes em quase toda a secção correspondem a um perfil quase plano. Este perfil é característico do regime turbulento.",
    "distractorAnalysis": [
      "Está incorreta: valores quase iguais em toda a secção indicam perfil quase plano e não o perfil parabólico.",
      "Está incorreta: o regime laminar tem velocidades muito diferentes entre o eixo e a parede.",
      "Está incorreta: o perfil medido já permite identificar o regime mais provável: um perfil quase plano indica turbulência."
    ],
    "nursingApplication": "A distinção entre perfil parabólico e perfil quase plano ajuda a perceber se o escoamento num vaso é regular ou perturbado."
  },
  {
    "id": 3041,
    "topicId": 3,
    "question": "Medindo a velocidade do líquido num tubo, desde a parede até ao eixo, obtêm-se 0, 10, 16 e 20 cm/s. Que regime é mais provável e qual o perfil?",
    "options": [
      "Regime laminar, com perfil parabólico.",
      "Regime turbulento, com perfil quase plano.",
      "Regime turbulento, com perfil parabólico.",
      "Regime laminar, com perfil quase plano."
    ],
    "correctIndex": 0,
    "explanation": "A velocidade é nula na parede e aumenta até ao máximo no eixo. Este perfil parabólico caracteriza o regime laminar.",
    "distractorAnalysis": [
      "Está incorreta: as velocidades variam muito da parede ao eixo, o que não corresponde a um perfil quase plano.",
      "Está incorreta: o perfil parabólico, com velocidade nula na parede, é característico do regime laminar.",
      "Está incorreta: o perfil quase plano corresponde ao regime turbulento, e aqui a velocidade varia bastante."
    ],
    "nursingApplication": "Em vasos com escoamento laminar, o sangue do centro move-se mais depressa do que o das camadas periféricas."
  },
  {
    "id": 3042,
    "topicId": 3,
    "question": "Um escoamento apresenta ruído, mistura entre as camadas e perfil de velocidades quase plano. Que regime é este e que consequência energética tem?",
    "options": [
      "Laminar, com maior gasto de energia do que o turbulento.",
      "Laminar, com menor gasto de energia do que o turbulento.",
      "Turbulento, com maior gasto de energia do que o laminar.",
      "Turbulento, com menor gasto de energia do que o laminar."
    ],
    "correctIndex": 2,
    "explanation": "Ruído, mistura entre camadas e perfil quase plano caracterizam o regime turbulento. Este regime gasta mais energia do que o laminar.",
    "distractorAnalysis": [
      "Está incorreta: o ruído e a mistura entre camadas indicam regime turbulento, e este é o de maior gasto de energia.",
      "Está incorreta: o ruído, a mistura e o perfil plano não são característicos do regime laminar.",
      "Está incorreta: o regime turbulento gasta mais energia do que o laminar."
    ],
    "nursingApplication": "Se o sangue escoa em regime turbulento, o coração realiza mais trabalho do que em regime laminar para o mesmo escoamento."
  },
  {
    "id": 3043,
    "topicId": 3,
    "question": "Na experiência de Reynolds, qual é a utilidade do fio fino e contínuo de corante injetado no centro do fluxo?",
    "options": [
      "Aumentar a viscosidade da água para que o regime seja laminar.",
      "Tornar visível se as camadas se mantêm ou se misturam.",
      "Medir a temperatura do líquido em diferentes pontos do tubo.",
      "Impedir que o escoamento passe de laminar a turbulento no tubo."
    ],
    "correctIndex": 1,
    "explanation": "O fio de corante acompanha o líquido: se permanece contínuo, as camadas não se misturam (laminar); se se dispersa, há mistura (turbulento).",
    "distractorAnalysis": [
      "Está incorreta: o corante serve apenas para visualizar o escoamento e não altera o regime.",
      "Está incorreta: o corante não mede temperatura; serve para observar o comportamento do escoamento.",
      "Está incorreta: o corante não impede mudanças de regime; permite apenas observá-las."
    ],
    "nursingApplication": "Esta experiência ajuda o enfermeiro a imaginar o que acontece ao sangue num vaso quando a velocidade aumenta, por exemplo durante o exercício físico."
  },
  {
    "id": 3044,
    "topicId": 3,
    "question": "Num tubo, acompanham-se duas pequenas partículas do líquido, uma perto do eixo e outra perto da parede. Se o escoamento for turbulento, o que é de esperar quanto às suas trajetórias?",
    "options": [
      "Cada uma mantém-se na sua camada, sem que as trajetórias se cruzem.",
      "A da parede fica parada, porque aí a velocidade do líquido é nula.",
      "A do eixo avança muito mais depressa, como num perfil parabólico.",
      "Podem passar de uma linha de corrente para outra e trocar de posição."
    ],
    "correctIndex": 3,
    "explanation": "No regime turbulento os turbilhões misturam as camadas: as linhas de corrente cruzam-se e as partículas passam de uma linha de corrente para outra. Por isso, a velocidade é semelhante em quase toda a secção.",
    "distractorAnalysis": [
      "Está incorreta: manter cada partícula na sua camada, sem cruzamentos, é o comportamento do regime laminar.",
      "Está incorreta: a partícula próxima da parede não está aderente a ela e, em regime turbulento, é arrastada pelos turbilhões para outras zonas da secção.",
      "Está incorreta: a grande diferença de velocidade entre eixo e periferia é própria do perfil parabólico do regime laminar; no turbulento o perfil é quase plano."
    ],
    "nursingApplication": "Num local de turbulência, como logo após um estreitamento arterial, o sangue das camadas periféricas mistura-se com o do centro, o que não acontece num vaso com escoamento laminar."
  },
  {
    "id": 3045,
    "topicId": 3,
    "question": "Num rio de leito liso e águas calmas, um bloco de pedra no meio da corrente origina remoinhos logo a jusante. Que fator favorece, nesta situação, o escoamento turbulento?",
    "options": [
      "O obstáculo, que perturba o escoamento e altera a secção disponível.",
      "A ausência de obstáculos, que torna o leito totalmente uniforme.",
      "A viscosidade da água, que é nula e permite os remoinhos.",
      "A forma própria da água, que se mantém ao passar pelo bloco."
    ],
    "correctIndex": 0,
    "explanation": "Obstáculos e variações da secção perturbam o escoamento e favorecem os turbilhões. É um exemplo, no dia a dia, de uma variação de calibre.",
    "distractorAnalysis": [
      "Está incorreta: um leito uniforme e liso favorece o regime laminar, e aqui há um obstáculo.",
      "Está incorreta: a água tem viscosidade, e o que origina os remoinhos é a perturbação do escoamento.",
      "Está incorreta: os líquidos não têm forma própria; os remoinhos resultam da perturbação provocada pelo obstáculo."
    ],
    "nursingApplication": "Analogamente, uma placa de ateroma num vaso é um obstáculo que pode perturbar o escoamento do sangue."
  },
  {
    "id": 3046,
    "topicId": 3,
    "question": "Após um estreitamento, o vaso volta a ser reto, liso e de calibre constante, e a velocidade do sangue diminui. Que evolução do regime é de esperar?",
    "options": [
      "Tendência para a turbulência se tornar ainda mais intensa.",
      "Tendência para o sangue parar de escoar no segmento seguinte.",
      "Tendência para a velocidade passar a ser nula no eixo do vaso.",
      "Tendência para o regime laminar voltar a ser reposto."
    ],
    "correctIndex": 3,
    "explanation": "Com menor velocidade e sem curvas, rugosidade ou variações de calibre, a tendência para a turbulência diminui. O organismo repõe o regime laminar sempre que possível.",
    "distractorAnalysis": [
      "Está incorreta: com menor velocidade e sem perturbações, a tendência é para o regime laminar.",
      "Está incorreta: a diminuição de velocidade não implica paragem; implica menor tendência para a turbulência.",
      "Está incorreta: no regime laminar a velocidade é máxima no eixo e nula junto à parede."
    ],
    "nursingApplication": "Isto explica porque é que o ruído de um escoamento perturbado pode ser localizado, desaparecendo depois do segmento perturbado."
  },
  {
    "id": 3047,
    "topicId": 3,
    "question": "Qual das seguintes associações entre regime, perfil de velocidades e som está correta?",
    "options": [
      "Laminar: perfil quase plano e produção de som.",
      "Turbulento: perfil parabólico e escoamento silencioso.",
      "Turbulento: perfil quase plano e produção de som.",
      "Laminar: perfil parabólico e produção de ruído."
    ],
    "correctIndex": 2,
    "explanation": "O regime turbulento tem perfil quase plano e produz som, ao passo que o laminar tem perfil parabólico e é silencioso.",
    "distractorAnalysis": [
      "Está incorreta: o regime laminar tem perfil parabólico e é silencioso.",
      "Está incorreta: o regime turbulento tem perfil quase plano e produz som.",
      "Está incorreta: o perfil parabólico está certo, mas o regime laminar é silencioso."
    ],
    "nursingApplication": "Saber associar o som ao regime turbulento é útil na auscultação, em que um ruído pode indicar um escoamento perturbado."
  },
  {
    "id": 3048,
    "topicId": 3,
    "question": "Duas linhas de perfusão transportam o mesmo líquido à mesma velocidade. A linha A é reta e lisa; a linha B tem um ângulo apertado e uma zona de estreitamento. Em qual é maior o gasto de energia?",
    "options": [
      "Na linha A, porque o escoamento reto exige mais energia.",
      "Na linha B, porque o ângulo e o estreitamento favorecem a turbulência.",
      "É igual nas duas, porque o líquido e a velocidade são os mesmos.",
      "Em nenhuma, porque o gasto só depende da cor do líquido."
    ],
    "correctIndex": 1,
    "explanation": "Ângulos e variações de calibre favorecem a turbulência, que gasta mais energia do que o regime laminar. Por isso, o gasto é maior na linha B.",
    "distractorAnalysis": [
      "Está incorreta: a linha reta e lisa favorece o regime laminar, que gasta menos energia.",
      "Está incorreta: o ângulo e o estreitamento favorecem a turbulência, aumentando o gasto de energia na linha B.",
      "Está incorreta: a cor é irrelevante: o gasto de energia depende do regime de escoamento."
    ],
    "nursingApplication": "Evitar dobras e ângulos apertados nas linhas de perfusão mantém o escoamento menos perturbado."
  },
  {
    "id": 3049,
    "topicId": 3,
    "question": "Num tubo, um líquido é substituído por outro com a mesma densidade, mas com o dobro da viscosidade. Para manter o mesmo número de Reynolds, sem mudar de tubo, o que tem de acontecer à velocidade média?",
    "options": [
      "Tem de passar para o dobro.",
      "Tem de passar para metade.",
      "Tem de se manter igual.",
      "Tem de passar para o quádruplo."
    ],
    "correctIndex": 0,
    "explanation": "Como Re = v · ρ · d / η, com ρ e d fixos Re é proporcional a v / η. Se η duplica, v tem também de duplicar para que a razão, e portanto Re, se mantenha.",
    "distractorAnalysis": [
      "Está incorreta: reduzir a velocidade a metade, com o dobro da viscosidade, faria Re passar para um quarto do valor inicial.",
      "Está incorreta: com a mesma velocidade e o dobro da viscosidade, Re passaria para metade.",
      "Está incorreta: considera que Re depende de η², mas a viscosidade aparece à primeira potência, pelo que basta duplicar v."
    ],
    "nursingApplication": "No mesmo cateter, um líquido mais viscoso, como o sangue face ao soro, só atinge o mesmo Re a uma velocidade bastante maior."
  },
  {
    "id": 3050,
    "topicId": 3,
    "question": "Uma seringa de grande calibre liga-se a uma agulha muito fina, havendo uma mudança brusca de calibre no ponto de ligação. Que efeito pode ter esta variação no escoamento do líquido?",
    "options": [
      "Torna o escoamento mais regular, por uniformizar o calibre.",
      "Perturba o escoamento e favorece o aparecimento de turbulência.",
      "Elimina as forças entre as moléculas vizinhas do líquido.",
      "Não tem efeito, pois o regime só depende do volume de líquido."
    ],
    "correctIndex": 1,
    "explanation": "Variações de calibre perturbam as linhas de corrente e favorecem a turbulência. O escoamento passa a ser menos regular junto à mudança de calibre.",
    "distractorAnalysis": [
      "Está incorreta: a mudança brusca de calibre não uniformiza o escoamento; perturba-o.",
      "Está incorreta: as forças intermoleculares são propriedade do líquido e não desaparecem com a mudança de calibre.",
      "Está incorreta: as variações de calibre são um dos fatores que favorecem a turbulência; o volume não determina o regime."
    ],
    "nursingApplication": "Nas ligações entre dispositivos de calibres diferentes, o escoamento é mais perturbado junto ao ponto de ligação."
  },
  {
    "id": 3051,
    "topicId": 3,
    "question": "Qual das expressões permite calcular o número de Reynolds de um líquido que escoa num tubo cilíndrico?",
    "options": [
      "Re = v · η · d / ρ",
      "Re = v · ρ · d / η",
      "Re = ρ · d / (v · η)",
      "Re = v · ρ · η / d"
    ],
    "correctIndex": 1,
    "explanation": "Re aumenta com a velocidade, a densidade e o diâmetro, que favorecem a turbulência, e diminui com a viscosidade, que resiste ao escoamento. Daí Re = v · ρ · d / η.",
    "distractorAnalysis": [
      "Está incorreta: troca os papéis da densidade e da viscosidade; a viscosidade dificulta a turbulência e por isso fica no denominador, enquanto a densidade a favorece e fica no numerador.",
      "Está incorreta: coloca a velocidade no denominador; aumentar a velocidade favorece a turbulência, logo Re tem de aumentar com v.",
      "Está incorreta: coloca o diâmetro no denominador; um tubo de maior diâmetro favorece a turbulência, por isso d multiplica no numerador."
    ],
    "nursingApplication": "Ao avaliar a perfusão de um líquido numa linha de infusão, é esta relação que permite perceber que mais velocidade ou maior calibre aumentam a tendência para a turbulência, sempre conforme prescrição e protocolo da instituição."
  },
  {
    "id": 3052,
    "topicId": 3,
    "question": "Na fórmula de Reynolds, Re = v · ρ · d / η, usam-se as unidades c.g.s. da aula. Qual é a combinação correta de unidades para v, ρ, d e η, por esta ordem?",
    "options": [
      "cm³/s, g/cm³, cm e poise",
      "cm/s, g/cm³, cm e dyn/cm²",
      "cm/s, g/cm³, cm e poise",
      "cm/s, g/cm³, cm² e poise"
    ],
    "correctIndex": 2,
    "explanation": "Em unidades c.g.s., a velocidade mede-se em cm/s, a densidade em g/cm³, o diâmetro em cm e a viscosidade em poise. Os valores devem ser todos usados nestas unidades para que o resultado de Re seja correto.",
    "distractorAnalysis": [
      "Está incorreta: cm³/s é a unidade de caudal e não de velocidade; v é a velocidade média do líquido, em cm/s.",
      "Está incorreta: dyn/cm² é unidade de pressão; a viscosidade mede-se em poise.",
      "Está incorreta: d é um comprimento (o diâmetro do tubo) e mede-se em cm; cm² seria uma área."
    ],
    "nursingApplication": "Antes de calcular Re para um cateter, o diâmetro indicado em milímetros tem de ser convertido para centímetros, para ser coerente com as restantes unidades."
  },
  {
    "id": 3053,
    "topicId": 3,
    "question": "Numa artéria, o sangue (ρ = 1,06 g/cm³; η = 0,04 poise) escoa com velocidade média de 30 cm/s num segmento de diâmetro 0,8 cm. Qual é o número de Reynolds?",
    "figure": {
      "type": "tube",
      "items": [
        {
          "name": "Artéria",
          "r": 0.7,
          "flow": "v = 30 cm/s",
          "inside": [
            "d = 0,8 cm",
            "ρ = 1,06 g/cm³",
            "η = 0,04 poise",
            "Re = ?"
          ]
        }
      ],
      "alt": "Tubo representando uma artéria com v = 30 cm/s, d = 0,8 cm, ρ = 1,06 g/cm³, η = 0,04 poise e Re desconhecido."
    },
    "options": [
      "318",
      "636",
      "994",
      "600"
    ],
    "correctIndex": 1,
    "explanation": "Re = v · ρ · d / η depende do diâmetro e não do raio, e a densidade tem de ser incluída. O valor obtido é inferior a 2000, pelo que o regime é laminar.",
    "solution": [
      "Dados: v = 30 cm/s; ρ = 1,06 g/cm³; d = 0,8 cm; η = 0,04 poise",
      "Fórmula: Re = v · ρ · d / η",
      "Substituição: Re = 30 × 1,06 × 0,8 / 0,04 = 25,44 / 0,04",
      "Resultado: 636",
      "Conclusão: Re < 2000, logo o regime é laminar."
    ],
    "distractorAnalysis": [
      "Está incorreta: usa o raio (0,4 cm) em vez do diâmetro; na fórmula de Reynolds entra o diâmetro.",
      "Está incorreta: divide por d em vez de multiplicar por d, calculando v · ρ / (η · d).",
      "Está incorreta: esquece a densidade do sangue (ρ = 1,06 g/cm³), calculando v · d / η."
    ],
    "nursingApplication": "Estimar Re permite perceber se um dado escoamento de sangue tende a ser silencioso (laminar) ou a produzir ruído por turbulência."
  },
  {
    "id": 3054,
    "topicId": 3,
    "question": "Um soro fisiológico (ρ = 1,00 g/cm³; η = 0,01 poise) escoa a 50 cm/s num cateter de diâmetro interno 1,2 mm. Qual é o número de Reynolds?",
    "figure": {
      "type": "tube",
      "items": [
        {
          "name": "Cateter",
          "r": 0.4,
          "flow": "v = 50 cm/s",
          "inside": [
            "d = 1,2 mm",
            "ρ = 1,00 g/cm³",
            "η = 0,01 poise",
            "Re = ?"
          ]
        }
      ],
      "alt": "Tubo representando um cateter com v = 50 cm/s, d = 1,2 mm, ρ = 1,00 g/cm³, η = 0,01 poise e Re desconhecido."
    },
    "options": [
      "6000",
      "300",
      "600",
      "60"
    ],
    "correctIndex": 2,
    "explanation": "Com d = 1,2 mm = 0,12 cm, Re = v · ρ · d / η = 600, valor claramente inferior a 2000 e portanto de regime laminar. A conversão para cm é indispensável porque a velocidade e a viscosidade estão em unidades c.g.s.",
    "solution": [
      "Dados: v = 50 cm/s; ρ = 1,00 g/cm³; η = 0,01 poise; d = 1,2 mm",
      "Conversão: 1,2 mm = 0,12 cm",
      "Fórmula: Re = v · ρ · d / η",
      "Substituição: Re = 50 × 1,00 × 0,12 / 0,01 = 6 / 0,01",
      "Resultado: 600"
    ],
    "distractorAnalysis": [
      "Está incorreta: esquece a conversão de mm para cm e usa d = 1,2 em vez de 0,12 cm.",
      "Está incorreta: usa o raio (0,06 cm) em vez do diâmetro.",
      "Está incorreta: converte mal mm para cm, dividindo por 100 em vez de por 10, e usa d = 0,012 cm."
    ],
    "nursingApplication": "Em cateteres de pequeno calibre os diâmetros vêm em milímetros, pelo que o enfermeiro deve converter as unidades antes de qualquer estimativa."
  },
  {
    "id": 3055,
    "topicId": 3,
    "question": "O número de Reynolds de um líquido que escoa num tubo é 3200. Que afirmação é a mais adequada?",
    "options": [
      "O escoamento está na zona de transição entre laminar e turbulento.",
      "O escoamento é laminar, porque 3200 é inferior ao valor 4000.",
      "O escoamento é turbulento, porque 3200 é superior ao valor 2000.",
      "Nada se pode concluir sobre o regime, porque Re não tem unidades."
    ],
    "correctIndex": 0,
    "explanation": "Abaixo de 2000 o regime é laminar, acima de 4000 é turbulento, e entre 2000 e 4000 situa-se a zona de transição. Re = 3200 está nesse intervalo.",
    "distractorAnalysis": [
      "Está incorreta: o limite do regime laminar é Re = 2000; entre 2000 e 4000 já não se pode garantir escoamento laminar.",
      "Está incorreta: o regime só é claramente turbulento acima de 4000; entre 2000 e 4000 está a zona de transição.",
      "Está incorreta: ser adimensional não impede a sua interpretação; é precisamente o valor de Re que permite classificar o regime."
    ],
    "nursingApplication": "Saber interpretar um valor de Re ajuda o enfermeiro a perceber porque é que o aumento da velocidade de uma perfusão pode tornar o escoamento menos estável."
  },
  {
    "id": 3056,
    "topicId": 3,
    "question": "Num tubo, o número de Reynolds de um líquido é 800. Mantendo o mesmo líquido e o mesmo tubo, a velocidade média passa para o dobro. Qual é o novo valor de Re?",
    "options": [
      "400",
      "3200",
      "800",
      "1600"
    ],
    "correctIndex": 3,
    "explanation": "Como Re = v · ρ · d / η, com ρ, d e η constantes Re é diretamente proporcional a v. Duplicar a velocidade duplica Re.",
    "solution": [
      "Dados: Re inicial = 800; v' = 2 × v; ρ, d e η constantes",
      "Fórmula: Re = v · ρ · d / η, logo Re é proporcional a v",
      "Substituição: Re' = 2 × 800",
      "Resultado: 1600",
      "Conclusão: continua abaixo de 2000, pelo que o regime se mantém laminar."
    ],
    "distractorAnalysis": [
      "Está incorreta: inverte a relação; Re é diretamente proporcional a v e não inversamente.",
      "Está incorreta: eleva a velocidade ao quadrado, como se Re fosse proporcional a v²; na fórmula v aparece à primeira potência.",
      "Está incorreta: considera que Re não depende da velocidade, quando v está no numerador da fórmula."
    ],
    "nursingApplication": "Em perfusões, um aumento da velocidade do escoamento aproxima o regime do limite em que surge turbulência."
  },
  {
    "id": 3057,
    "topicId": 3,
    "question": "Um líquido (ρ = 1,05 g/cm³; η = 0,015 poise) escoa a 40 cm/s num tubo de diâmetro 0,3 cm. Qual é o número de Reynolds?",
    "options": [
      "840",
      "420",
      "762",
      "800"
    ],
    "correctIndex": 0,
    "explanation": "Re = v · ρ · d / η = 840. O valor é inferior a 2000, logo o regime esperado é laminar.",
    "solution": [
      "Dados: v = 40 cm/s; ρ = 1,05 g/cm³; η = 0,015 poise; d = 0,3 cm",
      "Fórmula: Re = v · ρ · d / η",
      "Substituição: Re = 40 × 1,05 × 0,3 / 0,015 = 12,6 / 0,015",
      "Resultado: 840"
    ],
    "distractorAnalysis": [
      "Está incorreta: usa o raio (0,15 cm) em vez do diâmetro.",
      "Está incorreta: divide pela densidade em vez de a multiplicar, calculando v · d / (ρ · η).",
      "Está incorreta: esquece a densidade e calcula apenas v · d / η."
    ],
    "nursingApplication": "Numa linha de perfusão fina, uma solução com densidade e viscosidade semelhantes às deste exemplo, a velocidade moderada, escoa em regime laminar."
  },
  {
    "id": 3058,
    "topicId": 3,
    "question": "Uma perfusão passa de um tubo para outro com metade do diâmetro, mantendo-se o mesmo líquido e a mesma velocidade média. O que acontece ao número de Reynolds?",
    "options": [
      "Duplica.",
      "Passa para metade.",
      "Passa para um quarto.",
      "Não se altera."
    ],
    "correctIndex": 1,
    "explanation": "Com v, ρ e η constantes, Re é diretamente proporcional ao diâmetro. Metade do diâmetro significa metade de Re.",
    "distractorAnalysis": [
      "Está incorreta: Re é diretamente proporcional a d; diminuir o diâmetro faz diminuir Re e não aumentá-lo.",
      "Está incorreta: considera que Re depende de d², mas na fórmula o diâmetro aparece à primeira potência.",
      "Está incorreta: o diâmetro está no numerador de Re, pelo que a sua variação altera o valor, a não ser que v variasse em sentido oposto."
    ],
    "nursingApplication": "Ao passar de uma linha de maior calibre para um cateter fino, o enfermeiro mantém em mente que o calibre também afeta a tendência para a turbulência."
  },
  {
    "id": 3059,
    "topicId": 3,
    "question": "Num utente com anemia, a viscosidade do sangue está reduzida para metade do valor habitual. Mantendo-se iguais a velocidade, a densidade e o diâmetro do vaso, como varia o número de Reynolds?",
    "options": [
      "Passa para metade.",
      "Quadruplica.",
      "Duplica.",
      "Mantém-se."
    ],
    "correctIndex": 2,
    "explanation": "Como Re = v · ρ · d / η, Re é inversamente proporcional a η. Reduzir a viscosidade a metade duplica Re e favorece a turbulência.",
    "distractorAnalysis": [
      "Está incorreta: inverte a relação; a viscosidade está no denominador de Re, por isso diminuir η faz aumentar Re.",
      "Está incorreta: considera que Re depende de 1/η², mas a viscosidade aparece à primeira potência.",
      "Está incorreta: a viscosidade faz parte da fórmula de Re; se se altera, Re altera-se."
    ],
    "nursingApplication": "Num utente anémico, a menor viscosidade do sangue torna o escoamento mais propenso à turbulência, o que pode contribuir para o aparecimento de sopros."
  },
  {
    "id": 3060,
    "topicId": 3,
    "question": "Um vaso tem diâmetro de 0,5 cm. O sangue tem ρ = 1,06 g/cm³ e η = 0,04 poise. Qual é a velocidade média máxima para que o escoamento ainda seja laminar (Re = 2000)?",
    "figure": {
      "type": "tube",
      "items": [
        {
          "name": "Vaso",
          "r": 0.5,
          "flow": "v = ?",
          "inside": [
            "d = 0,5 cm",
            "ρ = 1,06 g/cm³",
            "η = 0,04 poise",
            "Re = 2000"
          ]
        }
      ],
      "alt": "Tubo representando um vaso com d = 0,5 cm, ρ = 1,06 g/cm³, η = 0,04 poise, Re = 2000 e velocidade desconhecida."
    },
    "options": [
      "302 cm/s",
      "26500 cm/s",
      "151 cm/s",
      "160 cm/s"
    ],
    "correctIndex": 2,
    "explanation": "Resolvendo a fórmula em ordem a v, v = Re · η / (ρ · d). Para Re = 2000 obtém-se cerca de 151 cm/s; acima deste valor deixa de se garantir regime laminar.",
    "solution": [
      "Dados: d = 0,5 cm; ρ = 1,06 g/cm³; η = 0,04 poise; Re = 2000",
      "Fórmula: v = Re · η / (ρ · d)",
      "Substituição: v = 2000 × 0,04 / (1,06 × 0,5) = 80 / 0,53",
      "Resultado: 151 cm/s"
    ],
    "distractorAnalysis": [
      "Está incorreta: usa o raio (0,25 cm) em vez do diâmetro.",
      "Está incorreta: multiplica por η em vez de dividir, calculando Re · ρ · d / η.",
      "Está incorreta: esquece a densidade e calcula Re · η / d."
    ],
    "nursingApplication": "Num vaso de calibre médio, só velocidades muito elevadas, como as que surgem num estreitamento, ultrapassam este limite e favorecem a turbulência."
  },
  {
    "id": 3061,
    "topicId": 3,
    "question": "O sangue (ρ = 1,06 g/cm³; η = 0,04 poise) escoa com velocidade média de 40 cm/s. Qual é o maior diâmetro de tubo para o qual o escoamento se mantém laminar (Re = 2000)?",
    "options": [
      "0,943 cm",
      "3,77 cm",
      "2,00 cm",
      "1,89 cm"
    ],
    "correctIndex": 3,
    "explanation": "Resolvendo a fórmula em ordem a d, d = Re · η / (v · ρ). Com Re = 2000 o resultado é o diâmetro, cerca de 1,89 cm.",
    "solution": [
      "Dados: v = 40 cm/s; ρ = 1,06 g/cm³; η = 0,04 poise; Re = 2000",
      "Fórmula: d = Re · η / (v · ρ)",
      "Substituição: d = 2000 × 0,04 / (40 × 1,06) = 80 / 42,4",
      "Resultado: 1,89 cm"
    ],
    "distractorAnalysis": [
      "Está incorreta: divide o resultado por 2, obtendo o raio; a fórmula dá diretamente o diâmetro, que é o que se pede.",
      "Está incorreta: usa Re = 4000 (limite do turbulento) em vez de 2000.",
      "Está incorreta: esquece a densidade e calcula Re · η / v."
    ],
    "nursingApplication": "Esta lógica ajuda a perceber porque é que vasos de grande calibre percorridos por sangue rápido têm maior tendência para a turbulência."
  },
  {
    "id": 3062,
    "topicId": 3,
    "question": "Ao calcular Re para um cateter, um estudante usou o raio do tubo no lugar do diâmetro, mantendo todos os outros valores corretos. Em relação ao valor correto, o Re obtido pelo estudante é:",
    "options": [
      "o dobro do valor correto.",
      "igual ao valor correto.",
      "um quarto do valor correto.",
      "metade do valor correto."
    ],
    "correctIndex": 3,
    "explanation": "Como r = d/2 e Re é diretamente proporcional a d, usar r no lugar de d dá metade do valor correto. Isto pode levar a subestimar o risco de turbulência.",
    "distractorAnalysis": [
      "Está incorreta: o raio é metade do diâmetro; usar um valor menor em d dá um Re menor e não maior.",
      "Está incorreta: Re depende diretamente de d, por isso trocar d pelo raio altera o resultado.",
      "Está incorreta: o raio é metade do diâmetro e d aparece à primeira potência; o erro é um fator 2 e não 4."
    ],
    "nursingApplication": "Ao estimar Re para um cateter, usar o raio em vez do diâmetro subestima Re e pode levar a classificar como laminar um escoamento que já está na zona de transição."
  },
  {
    "id": 3063,
    "topicId": 3,
    "question": "Na experiência de Reynolds, aumenta-se progressivamente a velocidade da água até o fio de corante se dispersar. Repete-se a experiência, com a mesma água, num tubo de maior diâmetro. Comparada com a do primeiro tubo, a velocidade a que o corante se começa a dispersar é:",
    "options": [
      "maior, porque no tubo largo o líquido tem mais espaço para escoar em camadas.",
      "igual, porque a água e a sua viscosidade são as mesmas nos dois tubos.",
      "menor, porque um diâmetro maior faz Re atingir o valor crítico mais cedo.",
      "maior, porque no tubo largo o corante fica mais afastado das paredes."
    ],
    "correctIndex": 2,
    "explanation": "Como Re = v · ρ · d / η, a velocidade a que Re atinge o valor crítico é v = Re · η / (ρ · d). Com um diâmetro maior, esse valor de Re é alcançado a uma velocidade menor, e o corante dispersa-se mais cedo.",
    "distractorAnalysis": [
      "Está incorreta: um diâmetro maior aumenta Re para a mesma velocidade, favorecendo a turbulência e não o escoamento em camadas.",
      "Está incorreta: o regime depende também do diâmetro, que mudou; a mesma água não garante o mesmo limite de velocidade.",
      "Está incorreta: a distância do corante às paredes não determina o regime; é o aumento de d que faz subir Re e antecipa a dispersão."
    ],
    "nursingApplication": "Por isso, em vasos de grande calibre, como a aorta, a turbulência pode surgir a velocidades que, num vaso fino, ainda dariam escoamento laminar."
  },
  {
    "id": 3064,
    "topicId": 3,
    "question": "A aorta de um utente tem raio interno de 1,25 cm. O sangue (ρ = 1,06 g/cm³; η = 0,04 poise) escoa com velocidade média de 40 cm/s. Qual é o número de Reynolds e que regime se pode esperar?",
    "figure": {
      "type": "tube",
      "items": [
        {
          "name": "Aorta",
          "r": 1.0,
          "flow": "v = 40 cm/s",
          "inside": [
            "R = 1,25 cm",
            "ρ = 1,06 g/cm³",
            "η = 0,04 poise",
            "Re = ?"
          ]
        }
      ],
      "alt": "Tubo representando a aorta com raio 1,25 cm, v = 40 cm/s, ρ = 1,06 g/cm³, η = 0,04 poise e Re desconhecido."
    },
    "options": [
      "2650, zona de transição",
      "1330, regime laminar",
      "424, regime laminar",
      "2500, zona de transição"
    ],
    "correctIndex": 0,
    "explanation": "O enunciado dá o raio, por isso o diâmetro é d = 2 × 1,25 = 2,5 cm. Com este valor, Re = 2650, que está entre 2000 e 4000 e corresponde à zona de transição.",
    "solution": [
      "Dados: R = 1,25 cm; v = 40 cm/s; ρ = 1,06 g/cm³; η = 0,04 poise",
      "Conversão: d = 2 × R = 2 × 1,25 = 2,5 cm",
      "Fórmula: Re = v · ρ · d / η",
      "Substituição: Re = 40 × 1,06 × 2,5 / 0,04 = 106 / 0,04",
      "Resultado: 2650, zona de transição"
    ],
    "distractorAnalysis": [
      "Está incorreta: usa o raio (1,25 cm) como se fosse o diâmetro; o diâmetro é 2 × 1,25 = 2,5 cm.",
      "Está incorreta: divide por d em vez de multiplicar por d, calculando v · ρ / (η · d).",
      "Está incorreta: esquece a densidade do sangue e calcula v · d / η."
    ],
    "nursingApplication": "Em artérias de grande calibre e sangue rápido, Re pode aproximar-se da zona de transição, o que é compatível com a tendência para turbulência na aorta."
  },
  {
    "id": 3065,
    "topicId": 3,
    "question": "Qual das afirmações sobre o número de Reynolds está correta?",
    "options": [
      "É um número sem unidades, porque as unidades de v, ρ, d e η se cancelam.",
      "Mede-se em poise, que é a unidade da viscosidade do líquido.",
      "Mede-se em cm/s, tal como a velocidade média do líquido.",
      "Mede-se em cm³/s, porque indica o caudal que passa no tubo."
    ],
    "correctIndex": 0,
    "explanation": "Substituindo as unidades c.g.s. em v · ρ · d / η, todas se cancelam e Re fica sem unidade. Por isso se diz que é adimensional.",
    "distractorAnalysis": [
      "Está incorreta: o poise é a unidade de η; Re resulta do cancelamento das unidades e não tem unidade própria.",
      "Está incorreta: a velocidade é apenas um dos fatores; as unidades de v, ρ, d e η combinam-se e anulam-se.",
      "Está incorreta: Re não é um caudal; o caudal mede-se em cm³/s e relaciona-se com o volume que passa por unidade de tempo."
    ],
    "nursingApplication": "Como Re não tem unidades, o mesmo valor de Re permite comparar regimes de escoamento em vasos, cateteres ou linhas de infusão."
  },
  {
    "id": 3066,
    "topicId": 3,
    "question": "Numa veia de grande calibre, o sangue (ρ = 1,06 g/cm³; η = 0,04 poise) escoa a 10 cm/s num segmento de diâmetro 1,4 cm. Qual é o número de Reynolds?",
    "options": [
      "186",
      "350",
      "0,594",
      "371"
    ],
    "correctIndex": 3,
    "explanation": "Re = v · ρ · d / η = 371, muito inferior a 2000, pelo que se espera regime laminar. Mesmo com grande calibre, a velocidade baixa mantém Re pequeno.",
    "solution": [
      "Dados: v = 10 cm/s; ρ = 1,06 g/cm³; η = 0,04 poise; d = 1,4 cm",
      "Fórmula: Re = v · ρ · d / η",
      "Substituição: Re = 10 × 1,06 × 1,4 / 0,04 = 14,84 / 0,04",
      "Resultado: 371"
    ],
    "distractorAnalysis": [
      "Está incorreta: usa o raio (0,7 cm) em vez do diâmetro.",
      "Está incorreta: esquece a densidade do sangue e calcula v · d / η.",
      "Está incorreta: multiplica por η em vez de dividir, calculando v · ρ · d · η."
    ],
    "nursingApplication": "Isto ajuda a compreender porque é que o retorno venoso, lento, é em regra silencioso, ao contrário do que sucede em vasos de grande calibre com sangue rápido."
  },
  {
    "id": 3067,
    "topicId": 3,
    "question": "Num tubo, a velocidade média do líquido duplica e, ao mesmo tempo, o diâmetro duplica, mantendo-se ρ e η. Como varia o número de Reynolds?",
    "options": [
      "Fica 2 vezes maior.",
      "Fica 4 vezes maior.",
      "Fica 8 vezes maior.",
      "Não se altera."
    ],
    "correctIndex": 1,
    "explanation": "Re é proporcional ao produto v · d. Se cada um duplica, o produto fica 2 × 2 = 4 vezes maior.",
    "distractorAnalysis": [
      "Está incorreta: só considera o efeito de uma das duas grandezas; tanto v como d estão no numerador e ambos contribuem.",
      "Está incorreta: multiplica 2 × 2 × 2, como se houvesse um terceiro fator duplicado; só v e d variam.",
      "Está incorreta: supõe que o aumento de d compensa o de v, mas ambos estão no numerador e atuam no mesmo sentido."
    ],
    "nursingApplication": "Num vaso de grande calibre, o mesmo aumento de velocidade, como no exercício físico, eleva Re mais do que num vaso fino, podendo gerar turbulência transitória."
  },
  {
    "id": 3068,
    "topicId": 3,
    "question": "Num tubo de diâmetro 1,6 cm circula sangue (ρ = 1,06 g/cm³; η = 0,04 poise). A partir de que velocidade média o escoamento passa a ser claramente turbulento (Re = 4000)?",
    "figure": {
      "type": "tube",
      "items": [
        {
          "name": "Tubo",
          "r": 0.9,
          "flow": "v = ?",
          "inside": [
            "d = 1,6 cm",
            "ρ = 1,06 g/cm³",
            "η = 0,04 poise",
            "Re = 4000"
          ]
        }
      ],
      "alt": "Tubo com d = 1,6 cm, ρ = 1,06 g/cm³, η = 0,04 poise, Re = 4000 e velocidade desconhecida."
    },
    "options": [
      "94,3 cm/s",
      "47,2 cm/s",
      "189 cm/s",
      "100 cm/s"
    ],
    "correctIndex": 0,
    "explanation": "Resolvendo em ordem a v, v = Re · η / (ρ · d). Com Re = 4000 obtém-se cerca de 94,3 cm/s; acima deste valor o regime é turbulento.",
    "solution": [
      "Dados: d = 1,6 cm; ρ = 1,06 g/cm³; η = 0,04 poise; Re = 4000",
      "Fórmula: v = Re · η / (ρ · d)",
      "Substituição: v = 4000 × 0,04 / (1,06 × 1,6) = 160 / 1,696",
      "Resultado: 94,3 cm/s"
    ],
    "distractorAnalysis": [
      "Está incorreta: usa Re = 2000, o limite do regime laminar, em vez de 4000.",
      "Está incorreta: usa o raio (0,8 cm) em vez do diâmetro.",
      "Está incorreta: esquece a densidade e calcula Re · η / d."
    ],
    "nursingApplication": "Os limiares 2000 e 4000 permitem distinguir velocidades em que o escoamento ainda é estável das que já produzem turbilhões."
  },
  {
    "id": 3069,
    "topicId": 3,
    "question": "Dois líquidos, A (η = 0,01 poise) e B (η = 0,04 poise), têm a mesma densidade e escoam com a mesma velocidade média em tubos com o mesmo diâmetro. Como se comparam os números de Reynolds?",
    "options": [
      "Re<sub>B</sub> é 4 vezes maior do que Re<sub>A</sub>.",
      "Re<sub>A</sub> é 4 vezes maior do que Re<sub>B</sub>.",
      "Re<sub>A</sub> e Re<sub>B</sub> são iguais, porque a densidade é a mesma.",
      "Re<sub>A</sub> é 16 vezes maior do que Re<sub>B</sub>."
    ],
    "correctIndex": 1,
    "explanation": "Com v, ρ e d iguais, Re é inversamente proporcional a η. O líquido A tem viscosidade 4 vezes menor, logo Re<sub>A</sub> = 4 Re<sub>B</sub>.",
    "distractorAnalysis": [
      "Está incorreta: inverte a relação; o líquido mais viscoso resiste mais ao escoamento e tem menor Re.",
      "Está incorreta: a viscosidade também entra na fórmula, e é diferente nos dois líquidos.",
      "Está incorreta: eleva a razão das viscosidades ao quadrado (4²); η aparece à primeira potência na fórmula."
    ],
    "nursingApplication": "No mesmo cateter e à mesma velocidade, o soro fisiológico, menos viscoso, tem Re maior do que o sangue numa transfusão."
  },
  {
    "id": 3070,
    "topicId": 3,
    "question": "Mantendo as restantes grandezas constantes, qual das seguintes alterações aumenta o número de Reynolds?",
    "options": [
      "Aumentar a viscosidade do líquido.",
      "Diminuir a velocidade média do líquido.",
      "Diminuir a densidade do líquido.",
      "Aumentar o diâmetro do tubo."
    ],
    "correctIndex": 3,
    "explanation": "Re = v · ρ · d / η aumenta quando aumentam v, ρ ou d, ou quando diminui η. Por isso, aumentar o diâmetro favorece a turbulência.",
    "distractorAnalysis": [
      "Está incorreta: a viscosidade está no denominador de Re; aumentá-la diminui Re.",
      "Está incorreta: a velocidade está no numerador de Re; diminuí-la diminui Re.",
      "Está incorreta: a densidade está no numerador de Re; diminuí-la diminui Re."
    ],
    "nursingApplication": "Dois cateteres com o mesmo líquido e a mesma velocidade não têm a mesma tendência para a turbulência se os calibres forem diferentes."
  },
  {
    "id": 3071,
    "topicId": 3,
    "question": "Num tubo, o número de Reynolds de um líquido é 400. Mantendo o líquido, a velocidade média passa para o triplo e o diâmetro passa para metade. Qual é o novo valor de Re?",
    "options": [
      "1200",
      "2400",
      "267",
      "600"
    ],
    "correctIndex": 3,
    "explanation": "Como Re é proporcional a v · d, o fator de variação é 3 × ½ = 1,5. O novo valor é 1,5 × 400 = 600.",
    "solution": [
      "Dados: Re inicial = 400; v' = 3 × v; d' = d / 2; ρ e η constantes",
      "Fórmula: Re é proporcional a v · d",
      "Substituição: Re' = 400 × 3 × ½ = 400 × 1,5",
      "Resultado: 600"
    ],
    "distractorAnalysis": [
      "Está incorreta: só considera o aumento da velocidade e ignora a redução do diâmetro.",
      "Está incorreta: multiplica por 2 em vez de dividir por 2 o efeito do diâmetro (3 × 2 = 6).",
      "Está incorreta: divide pela velocidade e multiplica pelo diâmetro, invertendo os dois efeitos (2 ÷ 3)."
    ],
    "nursingApplication": "Ao reduzir o calibre do cateter e aumentar a velocidade, os dois efeitos sobre Re atuam em sentidos opostos e é preciso calcular o resultado final."
  },
  {
    "id": 3072,
    "topicId": 3,
    "question": "Num tubo, a água (ρ = 1,00 g/cm³; η = 0,01 poise) tem Re = 1600. Com a mesma velocidade e o mesmo diâmetro, o sangue (ρ = 1,06 g/cm³; η = 0,04 poise) tem que valor de Re?",
    "options": [
      "6040",
      "424",
      "1700",
      "6780"
    ],
    "correctIndex": 1,
    "explanation": "Com v e d iguais, Re é proporcional a ρ / η. Para a água ρ / η = 100 e para o sangue ρ / η = 26,5, pelo que Re = 1600 × 26,5 / 100 = 424.",
    "solution": [
      "Dados: Re<sub>água</sub> = 1600; ρ<sub>água</sub> = 1,00 e η<sub>água</sub> = 0,01; ρ<sub>sangue</sub> = 1,06 e η<sub>sangue</sub> = 0,04; v e d iguais",
      "Fórmula: Re é proporcional a ρ / η",
      "Substituição: Re<sub>sangue</sub> = 1600 × (1,06 / 0,04) / (1,00 / 0,01) = 1600 × 26,5 / 100",
      "Resultado: 424"
    ],
    "distractorAnalysis": [
      "Está incorreta: inverte a razão das viscosidades e a das densidades, calculando 1600 × 4 / 1,06.",
      "Está incorreta: ajusta só a densidade (× 1,06) e esquece que a viscosidade é 4 vezes maior.",
      "Está incorreta: multiplica pela razão das viscosidades em vez de dividir, calculando 1600 × 1,06 × 4."
    ],
    "nursingApplication": "O sangue, mais viscoso que a água, tem menor Re nas mesmas condições, o que torna o seu escoamento menos propenso à turbulência."
  },
  {
    "id": 3073,
    "topicId": 3,
    "question": "Para além do valor de Re, qual das seguintes condições do vaso favorece o aparecimento de turbulência?",
    "options": [
      "Uma parede interna lisa e um trajeto retilíneo e regular.",
      "Uma diminuição da velocidade média do sangue no vaso.",
      "Um aumento da viscosidade do sangue no vaso.",
      "Uma bifurcação, uma curvatura ou uma parede interna áspera."
    ],
    "correctIndex": 3,
    "explanation": "Curvaturas, ângulos, bifurcações, paredes ásperas e variações de calibre perturbam o escoamento e favorecem os turbilhões. Já uma parede lisa e um trajeto reto mantêm as camadas organizadas.",
    "distractorAnalysis": [
      "Está incorreta: estas são condições que favorecem o regime laminar.",
      "Está incorreta: uma menor velocidade diminui Re e favorece o regime laminar.",
      "Está incorreta: uma maior viscosidade diminui Re e dificulta a turbulência."
    ],
    "nursingApplication": "Placas de aterosclerose, ao tornarem a parede interna irregular, são um exemplo de alteração que favorece a turbulência local."
  },
  {
    "id": 3074,
    "topicId": 3,
    "question": "Num tubo, a velocidade média máxima para que o escoamento seja laminar (Re = 2000) é 150 cm/s. Com o mesmo líquido num tubo de metade do diâmetro, qual é essa velocidade limite?",
    "options": [
      "300 cm/s",
      "75 cm/s",
      "600 cm/s",
      "150 cm/s"
    ],
    "correctIndex": 0,
    "explanation": "Para Re = 2000 fixo, o produto v · d é constante. Se d passa para metade, v tem de passar para o dobro, ou seja, 300 cm/s.",
    "solution": [
      "Dados: v<sub>1</sub> = 150 cm/s com Re = 2000; d<sub>2</sub> = d<sub>1</sub> / 2; ρ e η constantes",
      "Fórmula: Re = v · ρ · d / η, logo v · d é constante para Re fixo",
      "Substituição: v<sub>2</sub> = v<sub>1</sub> × d<sub>1</sub> / d<sub>2</sub> = 150 × 2",
      "Resultado: 300 cm/s"
    ],
    "distractorAnalysis": [
      "Está incorreta: supõe que a velocidade limite diminui com o diâmetro; como v e d são inversamente proporcionais a Re fixo, diminuir d permite aumentar v.",
      "Está incorreta: considera uma relação com o quadrado do diâmetro (fator 4); d aparece à primeira potência.",
      "Está incorreta: supõe que o limite não depende do diâmetro, mas v · d tem de se manter constante para Re = 2000."
    ],
    "nursingApplication": "Num cateter mais fino, a velocidade-limite para o regime laminar é maior, embora a velocidade de perfusão seja definida pela prescrição e pelo protocolo da instituição."
  },
  {
    "id": 3075,
    "topicId": 3,
    "question": "O escoamento de um líquido num tubo tem Re = 5200. Que descrição é a mais adequada?",
    "options": [
      "As camadas deslizam em paralelo, sem mistura entre si.",
      "O perfil de velocidades é parabólico, com máximo no eixo do tubo.",
      "O regime está na zona de transição, entre os dois regimes.",
      "Há turbilhões que misturam as camadas, e as linhas de corrente cruzam-se."
    ],
    "correctIndex": 3,
    "explanation": "Com Re superior a 4000, o regime é turbulento: o movimento é desorganizado, com turbilhões que misturam as camadas e fazem cruzar as linhas de corrente.",
    "distractorAnalysis": [
      "Está incorreta: essa é a descrição do regime laminar, que corresponde a Re < 2000.",
      "Está incorreta: o perfil parabólico é característico do regime laminar; no regime turbulento o perfil é quase plano.",
      "Está incorreta: a zona de transição situa-se entre 2000 e 4000; acima de 4000 o regime é turbulento."
    ],
    "nursingApplication": "A turbulência produz ruído e exige mais energia, e daí a tendência fisiológica para repor o regime laminar sempre que possível."
  },
  {
    "id": 3076,
    "topicId": 3,
    "question": "Um cateter tem diâmetro interno de 0,8 mm. Um soro (ρ = 1,00 g/cm³; η = 0,01 poise) percorre-o. Qual é a velocidade média máxima para que o escoamento seja laminar (Re = 2000)?",
    "figure": {
      "type": "tube",
      "items": [
        {
          "name": "Cateter",
          "r": 0.3,
          "flow": "v = ?",
          "inside": [
            "d = 0,8 mm",
            "ρ = 1,00 g/cm³",
            "η = 0,01 poise",
            "Re = 2000"
          ]
        }
      ],
      "alt": "Tubo representando um cateter com d = 0,8 mm, ρ = 1,00 g/cm³, η = 0,01 poise, Re = 2000 e velocidade desconhecida."
    },
    "options": [
      "25,0 cm/s",
      "250 cm/s",
      "500 cm/s",
      "2500 cm/s"
    ],
    "correctIndex": 1,
    "explanation": "Com d = 0,8 mm = 0,08 cm, v = Re · η / (ρ · d) = 250 cm/s. Acima deste valor deixa de se garantir regime laminar.",
    "solution": [
      "Dados: d = 0,8 mm; ρ = 1,00 g/cm³; η = 0,01 poise; Re = 2000",
      "Conversão: 0,8 mm = 0,08 cm",
      "Fórmula: v = Re · η / (ρ · d)",
      "Substituição: v = 2000 × 0,01 / (1,00 × 0,08) = 20 / 0,08",
      "Resultado: 250 cm/s"
    ],
    "distractorAnalysis": [
      "Está incorreta: esquece a conversão de mm para cm e usa d = 0,8 cm em vez de 0,08 cm.",
      "Está incorreta: usa o raio (0,04 cm) em vez do diâmetro.",
      "Está incorreta: converte mal mm para cm, dividindo por 100 em vez de por 10, e usa d = 0,008 cm."
    ],
    "nursingApplication": "Em cateteres muito finos, a velocidade limite para o regime laminar é elevada, mas a velocidade da perfusão deve seguir sempre a prescrição e o protocolo da instituição."
  },
  {
    "id": 3077,
    "topicId": 3,
    "question": "Um líquido de contraste com densidade 1,20 g/cm³ escoa a 20 cm/s num tubo de diâmetro 0,5 cm, com Re = 500. Qual é a sua viscosidade?",
    "options": [
      "0,012 poise",
      "41,7 poise",
      "0,024 poise",
      "0,020 poise"
    ],
    "correctIndex": 2,
    "explanation": "Resolvendo a fórmula em ordem a η, η = v · ρ · d / Re. Substituindo, η = 0,024 poise.",
    "solution": [
      "Dados: ρ = 1,20 g/cm³; v = 20 cm/s; d = 0,5 cm; Re = 500",
      "Fórmula: η = v · ρ · d / Re",
      "Substituição: η = 20 × 1,20 × 0,5 / 500 = 12 / 500",
      "Resultado: 0,024 poise"
    ],
    "distractorAnalysis": [
      "Está incorreta: usa o raio (0,25 cm) em vez do diâmetro.",
      "Está incorreta: inverte a fração, calculando Re / (v · ρ · d) em vez de v · ρ · d / Re.",
      "Está incorreta: esquece a densidade e calcula v · d / Re."
    ],
    "nursingApplication": "Os meios de contraste são, em geral, mais viscosos do que o soro fisiológico, o que, no mesmo cateter e à mesma velocidade, reduz Re."
  },
  {
    "id": 3078,
    "topicId": 3,
    "question": "O que caracteriza a zona de transição, correspondente a valores de Re entre 2000 e 4000?",
    "options": [
      "O escoamento já não é claramente laminar, mas ainda não é plenamente turbulento.",
      "O escoamento é claramente laminar, com as camadas totalmente paralelas.",
      "O escoamento é claramente turbulento, com perfil de velocidades quase plano.",
      "O escoamento pára, porque o líquido fica sem velocidade no tubo."
    ],
    "correctIndex": 0,
    "explanation": "Abaixo de 2000 o regime é laminar e acima de 4000 é turbulento. Entre estes valores, o regime não é nitidamente nenhum dos dois.",
    "distractorAnalysis": [
      "Está incorreta: o regime laminar corresponde a Re < 2000.",
      "Está incorreta: o regime turbulento corresponde a Re > 4000.",
      "Está incorreta: Re > 0 implica que há escoamento; a transição refere-se ao tipo de regime e não à ausência de movimento."
    ],
    "nursingApplication": "Perceber que há uma zona de transição ajuda a explicar porque é que pequenas alterações de velocidade ou de calibre podem tornar o escoamento mais ruidoso."
  },
  {
    "id": 3079,
    "topicId": 3,
    "question": "Soro fisiológico (ρ = 1,00 g/cm³; η = 0,01 poise) escoa a 60 cm/s em dois cateteres, A (d = 2 mm) e B (d = 3 mm). Quais são os números de Reynolds em A e em B?",
    "figure": {
      "type": "tube",
      "items": [
        {
          "name": "Cateter A",
          "r": 0.5,
          "flow": "v = 60 cm/s",
          "inside": [
            "d = 2 mm",
            "Re = ?"
          ]
        },
        {
          "name": "Cateter B",
          "r": 0.75,
          "flow": "v = 60 cm/s",
          "inside": [
            "d = 3 mm",
            "Re = ?"
          ]
        }
      ],
      "alt": "Dois tubos representando os cateteres A (d = 2 mm) e B (d = 3 mm), ambos com v = 60 cm/s, ρ = 1,00 g/cm³, η = 0,01 poise e Re desconhecido."
    },
    "options": [
      "Re<sub>A</sub> = 600 e Re<sub>B</sub> = 900",
      "Re<sub>A</sub> = 1800 e Re<sub>B</sub> = 1200",
      "Re<sub>A</sub> = 12000 e Re<sub>B</sub> = 18000",
      "Re<sub>A</sub> = 1200 e Re<sub>B</sub> = 1800"
    ],
    "correctIndex": 3,
    "explanation": "Com d<sub>A</sub> = 0,2 cm e d<sub>B</sub> = 0,3 cm, e com os restantes valores iguais, Re é proporcional ao diâmetro. Obtêm-se 1200 e 1800, ambos inferiores a 2000.",
    "solution": [
      "Dados: v = 60 cm/s; ρ = 1,00 g/cm³; η = 0,01 poise; d<sub>A</sub> = 2 mm; d<sub>B</sub> = 3 mm",
      "Conversão: d<sub>A</sub> = 0,2 cm; d<sub>B</sub> = 0,3 cm",
      "Fórmula: Re = v · ρ · d / η",
      "Substituição: Re<sub>A</sub> = 60 × 1,00 × 0,2 / 0,01; Re<sub>B</sub> = 60 × 1,00 × 0,3 / 0,01",
      "Resultado: Re<sub>A</sub> = 1200 e Re<sub>B</sub> = 1800"
    ],
    "distractorAnalysis": [
      "Está incorreta: usa os raios (1 mm e 1,5 mm) em vez dos diâmetros.",
      "Está incorreta: troca os valores, como se o cateter mais fino tivesse maior Re; Re cresce com o diâmetro.",
      "Está incorreta: esquece a conversão de mm para cm e usa d = 2 e d = 3 diretamente."
    ],
    "nursingApplication": "Em dois cateteres com o mesmo soro e a mesma velocidade, o de maior calibre tem Re mais elevado e portanto maior tendência para a turbulência."
  },
  {
    "id": 3080,
    "topicId": 3,
    "question": "Quais são as duas grandezas da fórmula de Reynolds que dependem apenas do líquido, e não da velocidade nem do tubo?",
    "options": [
      "A velocidade (v) e o diâmetro (d).",
      "A densidade (ρ) e a viscosidade (η).",
      "A densidade (ρ) e o diâmetro (d).",
      "A viscosidade (η) e a velocidade (v)."
    ],
    "correctIndex": 1,
    "explanation": "A densidade e a viscosidade são propriedades do líquido. A velocidade depende do escoamento e o diâmetro depende do condutor.",
    "distractorAnalysis": [
      "Está incorreta: v depende do escoamento e d depende do tubo; não são propriedades do líquido.",
      "Está incorreta: o diâmetro é uma característica do tubo.",
      "Está incorreta: a velocidade é uma característica do escoamento, e não do líquido."
    ],
    "nursingApplication": "Ao comparar soluções para perfusão, a densidade e a viscosidade de cada uma influenciam o regime, mesmo com o mesmo cateter e a mesma velocidade."
  },
  {
    "id": 3081,
    "topicId": 3,
    "question": "Um sangue (ρ = 1,06 g/cm³; η = 0,04 poise) escoa a 80 cm/s. Qual é o maior diâmetro do tubo, em milímetros, para o qual o regime ainda é laminar (Re = 2000)?",
    "figure": {
      "type": "tube",
      "items": [
        {
          "name": "Tubo",
          "r": 0.8,
          "flow": "v = 80 cm/s",
          "inside": [
            "d = ?",
            "ρ = 1,06 g/cm³",
            "η = 0,04 poise",
            "Re = 2000"
          ]
        }
      ],
      "alt": "Tubo com v = 80 cm/s, ρ = 1,06 g/cm³, η = 0,04 poise, Re = 2000 e diâmetro desconhecido."
    },
    "options": [
      "4,72 mm",
      "0,943 mm",
      "9,43 mm",
      "94,3 mm"
    ],
    "correctIndex": 2,
    "explanation": "Em cm, d = Re · η / (v · ρ) = 0,943 cm. Como 1 cm = 10 mm, o valor é 9,43 mm.",
    "solution": [
      "Dados: v = 80 cm/s; ρ = 1,06 g/cm³; η = 0,04 poise; Re = 2000",
      "Fórmula: d = Re · η / (v · ρ)",
      "Substituição: d = 2000 × 0,04 / (80 × 1,06) = 80 / 84,8 = 0,943 cm",
      "Conversão: 0,943 cm = 9,43 mm",
      "Resultado: 9,43 mm"
    ],
    "distractorAnalysis": [
      "Está incorreta: apresenta o raio (metade do diâmetro) em vez do diâmetro.",
      "Está incorreta: esquece a conversão de cm para mm; o resultado em cm é 0,943 cm, que equivale a 9,43 mm.",
      "Está incorreta: converte cm em mm multiplicando por 100 em vez de por 10."
    ],
    "nursingApplication": "A relação entre calibre e velocidade limite ajuda a compreender porque é que cateteres de grande calibre são mais propensos a escoamento turbulento a velocidades elevadas."
  },
  {
    "id": 3082,
    "topicId": 3,
    "question": "Num capilar com diâmetro de 8 × 10⁻⁴ cm, o sangue (ρ = 1,06 g/cm³; η = 0,04 poise) escoa a 0,05 cm/s. Qual é o número de Reynolds?",
    "figure": {
      "type": "tube",
      "items": [
        {
          "name": "Capilar",
          "r": 0.3,
          "flow": "v = 0,05 cm/s",
          "inside": [
            "d = 8 × 10⁻⁴ cm",
            "ρ = 1,06 g/cm³",
            "η = 0,04 poise",
            "Re = ?"
          ]
        }
      ],
      "alt": "Tubo representando um capilar com d = 8 × 10⁻⁴ cm, v = 0,05 cm/s, ρ = 1,06 g/cm³, η = 0,04 poise e Re desconhecido."
    },
    "options": [
      "5,30 × 10⁻⁴",
      "1,06 × 10⁻³",
      "943",
      "1,70 × 10⁻⁶"
    ],
    "correctIndex": 1,
    "explanation": "Re = v · ρ · d / η = 1,06 × 10⁻³, muito inferior a 2000. O escoamento é laminar e lento, o que favorece as trocas com os tecidos.",
    "solution": [
      "Dados: d = 8 × 10⁻⁴ cm; v = 0,05 cm/s; ρ = 1,06 g/cm³; η = 0,04 poise",
      "Fórmula: Re = v · ρ · d / η",
      "Substituição: Re = 0,05 × 1,06 × 8 × 10⁻⁴ / 0,04 = 4,24 × 10⁻⁵ / 0,04",
      "Resultado: 1,06 × 10⁻³"
    ],
    "distractorAnalysis": [
      "Está incorreta: usa o raio (4 × 10⁻⁴ cm) em vez do diâmetro.",
      "Está incorreta: inverte a fração, calculando η / (v · ρ · d).",
      "Está incorreta: multiplica por η em vez de dividir, calculando v · ρ · d · η."
    ],
    "nursingApplication": "Nos capilares, onde se dão as trocas, Re é muito baixo, de modo que o regime é laminar e silencioso."
  },
  {
    "id": 3083,
    "topicId": 3,
    "question": "Um enfermeiro verifica que a perfusão de um soro, num cateter com o mesmo calibre, está a escoar a uma velocidade muito superior à habitual. Qual é a consequência mais provável para o escoamento?",
    "options": [
      "Re diminui e o escoamento fica mais laminar.",
      "Re não se altera, porque o calibre do cateter é o mesmo.",
      "Re aumenta, mas o regime laminar mantém-se qualquer que seja o seu valor.",
      "Re aumenta e o escoamento fica mais próximo do regime turbulento."
    ],
    "correctIndex": 3,
    "explanation": "Como Re é proporcional a v, uma velocidade muito superior faz aumentar Re. Se Re atingir valores acima de 2000, deixa de se garantir regime laminar.",
    "distractorAnalysis": [
      "Está incorreta: v está no numerador de Re; aumentar a velocidade aumenta Re.",
      "Está incorreta: Re depende também da velocidade, que variou.",
      "Está incorreta: o regime laminar só se mantém enquanto Re for inferior a 2000; um Re crescente pode ultrapassar esse limite."
    ],
    "nursingApplication": "A velocidade de perfusão deve ser sempre ajustada conforme prescrição e protocolo da instituição, e não aumentada por iniciativa própria."
  },
  {
    "id": 3084,
    "topicId": 3,
    "question": "Num tubo, um líquido A (ρ = 1,00 g/cm³) tem Re = 1800. Um líquido B com a mesma viscosidade, mas com ρ = 1,25 g/cm³, escoa no mesmo tubo à mesma velocidade média. Qual é o Re de B e que regime se espera?",
    "options": [
      "1440, regime laminar",
      "1800, regime laminar",
      "2250, zona de transição",
      "2810, zona de transição"
    ],
    "correctIndex": 2,
    "explanation": "Com v, d e η iguais, Re é diretamente proporcional a ρ. Re<sub>B</sub> = 1800 × 1,25 = 2250, que está entre 2000 e 4000: o aumento de densidade leva o escoamento à zona de transição.",
    "solution": [
      "Dados: Re<sub>A</sub> = 1800; ρ<sub>A</sub> = 1,00 g/cm³; ρ<sub>B</sub> = 1,25 g/cm³; v, d e η iguais",
      "Fórmula: Re = v · ρ · d / η, logo Re é proporcional a ρ",
      "Substituição: Re<sub>B</sub> = 1800 × 1,25 / 1,00",
      "Resultado: 2250, zona de transição"
    ],
    "distractorAnalysis": [
      "Está incorreta: divide por 1,25 em vez de multiplicar; a densidade está no numerador de Re, logo um líquido mais denso tem Re maior.",
      "Está incorreta: ignora a diferença de densidade, que também entra na fórmula de Re.",
      "Está incorreta: multiplica pelo quadrado da razão das densidades (1,25² ≈ 1,56); ρ aparece à primeira potência."
    ],
    "nursingApplication": "Uma solução mais densa, no mesmo cateter e à mesma velocidade, pode passar da zona laminar para a zona de transição."
  },
  {
    "id": 3085,
    "topicId": 3,
    "question": "Que informação fornece o número de Reynolds sobre o escoamento de um líquido num tubo?",
    "options": [
      "Indica o volume de líquido que passa no tubo por unidade de tempo.",
      "Indica a diferença de pressão entre os extremos do tubo.",
      "Permite prever o regime (laminar, de transição ou turbulento).",
      "Indica a viscosidade do líquido que escoa no tubo."
    ],
    "correctIndex": 2,
    "explanation": "Re combina v, ρ, d e η num único valor que permite prever o regime. Valores baixos correspondem a laminar e valores altos a turbulento.",
    "distractorAnalysis": [
      "Está incorreta: isso é o caudal, D = V / t.",
      "Está incorreta: Re não se refere à pressão, mas ao tipo de regime.",
      "Está incorreta: a viscosidade é um dos dados necessários para calcular Re e não o resultado."
    ],
    "nursingApplication": "Ao antecipar se um escoamento é laminar ou turbulento, o enfermeiro pode relacionar, por exemplo, o ruído audível de uma artéria com o regime do sangue."
  },
  {
    "id": 3086,
    "topicId": 3,
    "question": "O mesmo sangue (ρ = 1,06 g/cm³; η = 0,04 poise) escoa nos quatro vasos seguintes. Em qual deles é maior o número de Reynolds?",
    "options": [
      "Vaso P: d = 0,8 cm e v = 100 cm/s",
      "Vaso Q: d = 3,0 cm e v = 15 cm/s",
      "Vaso R: d = 1,2 cm e v = 45 cm/s",
      "Vaso S: d = 0,5 cm e v = 110 cm/s"
    ],
    "correctIndex": 0,
    "explanation": "Com ρ e η iguais, Re é proporcional ao produto v · d. O vaso P tem o maior produto (80), embora não tenha o maior diâmetro nem a maior velocidade.",
    "solution": [
      "Dados: ρ e η iguais nos quatro vasos; P: v = 100 cm/s, d = 0,8 cm; Q: v = 15 cm/s, d = 3,0 cm; R: v = 45 cm/s, d = 1,2 cm; S: v = 110 cm/s, d = 0,5 cm",
      "Fórmula: Re = v · ρ · d / η, logo Re é proporcional a v · d",
      "Substituição: v · d: P = 80; Q = 45; R = 54; S = 55",
      "Resultado: Vaso P: d = 0,8 cm e v = 100 cm/s",
      "Conclusão: neste vaso Re = 100 × 1,06 × 0,8 / 0,04 = 2120, o valor mais elevado dos quatro."
    ],
    "distractorAnalysis": [
      "Está incorreta: tem o maior diâmetro, mas Re depende do produto v · d (45 para este vaso, contra 80 do vaso P).",
      "Está incorreta: o produto v · d é 54, inferior ao do vaso P (80).",
      "Está incorreta: tem a maior velocidade, mas o produto v · d é 55, inferior ao do vaso P (80)."
    ],
    "nursingApplication": "Não basta olhar só para o calibre ou só para a velocidade: ambos contribuem para o risco de turbulência."
  },
  {
    "id": 3087,
    "topicId": 3,
    "question": "Duas situações diferentes, com líquidos e tubos diferentes, têm ambas Re = 1200. Que regime se espera em cada uma?",
    "options": [
      "Laminar nas duas, porque o regime depende do valor de Re.",
      "Laminar numa e turbulento na outra, porque os líquidos são diferentes.",
      "Turbulento nas duas, porque o valor de Re é elevado.",
      "Zona de transição nas duas, porque o valor está perto de 2000."
    ],
    "correctIndex": 0,
    "explanation": "Re agrupa todas as grandezas num só valor. Se Re for 1200 (inferior a 2000), o regime é laminar, independentemente do líquido e do tubo.",
    "distractorAnalysis": [
      "Está incorreta: o regime depende do valor de Re e não de cada grandeza em separado; Re = 1200 é inferior a 2000 nas duas.",
      "Está incorreta: 1200 é inferior a 2000, limite do regime laminar.",
      "Está incorreta: a zona de transição só começa em Re = 2000."
    ],
    "nursingApplication": "O mesmo valor de Re permite prever regimes semelhantes em contextos diferentes, desde cateteres a vasos sanguíneos."
  },
  {
    "id": 3088,
    "topicId": 3,
    "question": "Num capilar, o sangue escoa em regime laminar. Qual é a explicação mais adequada em termos de número de Reynolds?",
    "options": [
      "A viscosidade do sangue nos capilares é muito baixa, o que faz diminuir Re.",
      "O diâmetro é muito pequeno e a velocidade é baixa, pelo que Re é muito baixo.",
      "A densidade do sangue nos capilares é muito elevada, o que faz diminuir Re.",
      "A velocidade é muito elevada, o que impede a mistura das camadas."
    ],
    "correctIndex": 1,
    "explanation": "Nos capilares, d e v são muito pequenos, e como Re é proporcional a v · d o seu valor é muito baixo. Fica assim garantido o regime laminar, lento e silencioso.",
    "distractorAnalysis": [
      "Está incorreta: diminuir a viscosidade faria aumentar Re, e não diminuir.",
      "Está incorreta: aumentar a densidade faria aumentar Re.",
      "Está incorreta: uma velocidade elevada favorece a turbulência; nos capilares a velocidade é baixa."
    ],
    "nursingApplication": "O escoamento laminar e lento nos capilares favorece as trocas entre o sangue e os tecidos."
  },
  {
    "id": 3089,
    "topicId": 3,
    "question": "Na medição da pressão arterial, a braçadeira é insuflada até comprimir completamente a artéria braquial do utente. O que se ouve com o estetoscópio nesse momento e porquê?",
    "options": [
      "Sons intensos, porque o sangue passa a grande velocidade no estreitamento.",
      "Nada, porque o sangue escoa em regime laminar na artéria comprimida.",
      "Nada, porque não passa sangue na artéria comprimida.",
      "Sons contínuos, porque o sangue fica retido e produz turbilhões."
    ],
    "correctIndex": 2,
    "explanation": "Se a braçadeira comprime completamente a artéria, o sangue não passa pelo ponto comprimido. Sem fluxo não há turbulência, logo não há sons para auscultar.",
    "distractorAnalysis": [
      "Está incorreta: com a artéria totalmente comprimida não há fluxo e, sem escoamento, não há turbulência nem som.",
      "Está incorreta: o regime laminar é silencioso, mas aqui a razão do silêncio é outra: não há escoamento na artéria comprimida.",
      "Está incorreta: o sangue retido não escoa, pelo que não há turbilhões que produzam som."
    ],
    "nursingApplication": "Ao medir a pressão arterial, o enfermeiro insufla a braçadeira acima do valor esperado da pressão máxima, para garantir que a artéria braquial fica totalmente comprimida e não se ouve som."
  },
  {
    "id": 3090,
    "topicId": 3,
    "question": "Ao desinsuflar lentamente a braçadeira, o sangue começa a passar na artéria ainda parcialmente comprimida. Que regime se estabelece nesse ponto e que consequência tem para a auscultação?",
    "options": [
      "Laminar, o que produz sons audíveis com o estetoscópio.",
      "Laminar, o que é silencioso e por isso nada se ouve.",
      "Turbulento, mas silencioso, pelo que nada se ouve.",
      "Turbulento, o que produz sons audíveis com o estetoscópio."
    ],
    "correctIndex": 3,
    "explanation": "Com a artéria parcialmente comprimida, a velocidade do sangue aumenta, Re sobe e o escoamento torna-se turbulento. Os turbilhões produzem som, que se ouve com o estetoscópio.",
    "distractorAnalysis": [
      "Está incorreta: o regime laminar é silencioso; os sons audíveis têm origem na turbulência.",
      "Está incorreta: no ponto parcialmente comprimido a velocidade aumenta, Re sobe e o regime é turbulento, e não laminar.",
      "Está incorreta: o regime turbulento, com turbilhões, produz som; é esse som que o estetoscópio permite ouvir."
    ],
    "nursingApplication": "Ao desinsuflar gradualmente a braçadeira, o enfermeiro fica atento ao aparecimento dos primeiros sons sobre a artéria braquial."
  },
  {
    "id": 3091,
    "topicId": 3,
    "question": "O que está na origem dos sons de Korotkoff ouvidos durante a medição da pressão arterial?",
    "options": [
      "O deslizamento regular das camadas de sangue em regime laminar.",
      "O ar que sai da braçadeira enquanto é desinsuflada.",
      "Os turbilhões do sangue em regime turbulento, que geram vibrações audíveis.",
      "O contacto da campânula do estetoscópio com a pele do braço."
    ],
    "correctIndex": 2,
    "explanation": "No regime turbulento, o movimento desorganizado do sangue, com turbilhões, produz vibrações que se propagam aos tecidos e se ouvem com o estetoscópio. No regime laminar não há esse ruído.",
    "distractorAnalysis": [
      "Está incorreta: o regime laminar é silencioso, porque as camadas deslizam sem se misturar.",
      "Está incorreta: o ruído do ar é independente da circulação; os sons de Korotkoff vêm do escoamento do sangue na artéria.",
      "Está incorreta: esse contacto não é a origem dos sons de Korotkoff, que se devem ao escoamento do sangue."
    ],
    "nursingApplication": "Para distinguir os sons de Korotkoff de outros ruídos, o enfermeiro posiciona o estetoscópio sobre a artéria braquial e mantém o ambiente tão silencioso quanto possível."
  },
  {
    "id": 3092,
    "topicId": 3,
    "question": "Do ponto de vista do número de Reynolds, porque é que a compressão parcial da artéria pela braçadeira favorece o aparecimento de turbulência?",
    "options": [
      "A viscosidade do sangue aumenta no ponto comprimido, o que faz aumentar Re.",
      "A velocidade do sangue aumenta no ponto comprimido, o que faz aumentar Re.",
      "A velocidade do sangue diminui no ponto comprimido, o que faz aumentar Re.",
      "A densidade do sangue diminui no ponto comprimido, o que faz aumentar Re."
    ],
    "correctIndex": 1,
    "explanation": "A passagem pelo estreitamento obriga o sangue a escoar mais depressa. Como Re é proporcional a v, a sua subida leva a escoamento turbulento.",
    "distractorAnalysis": [
      "Está incorreta: um aumento de viscosidade faria diminuir Re, porque η está no denominador.",
      "Está incorreta: uma velocidade menor faria diminuir Re, porque v está no numerador.",
      "Está incorreta: uma densidade menor faria diminuir Re, e a compressão não altera a densidade do sangue."
    ],
    "nursingApplication": "A compreensão deste efeito ajuda a perceber porque é que os sons só surgem quando o sangue já passa na artéria parcialmente comprimida."
  },
  {
    "id": 3093,
    "topicId": 3,
    "question": "Quando a braçadeira está totalmente desinsuflada, a artéria deixa de estar comprimida. O que sucede ao escoamento do sangue e aos sons de Korotkoff?",
    "options": [
      "O escoamento volta a ser laminar e os sons desaparecem.",
      "O escoamento mantém-se turbulento e os sons ficam mais intensos.",
      "O escoamento torna-se laminar e os sons ficam mais intensos.",
      "O sangue deixa de circular na artéria e os sons desaparecem."
    ],
    "correctIndex": 0,
    "explanation": "Com a artéria livre, não há aumento local de velocidade, Re diminui e o regime é laminar. O escoamento laminar é silencioso e por isso os sons deixam de se ouvir.",
    "distractorAnalysis": [
      "Está incorreta: sem compressão, a velocidade no ponto deixa de aumentar, Re diminui e o escoamento deixa de ser turbulento.",
      "Está incorreta: o regime laminar é silencioso, pelo que os sons desaparecem e não aumentam.",
      "Está incorreta: o sangue continua a circular normalmente; apenas deixa de haver turbulência."
    ],
    "nursingApplication": "Quando o enfermeiro deixa de ouvir sons ao desinsuflar a braçadeira, sabe que o sangue já circula livremente em regime laminar."
  },
  {
    "id": 3094,
    "topicId": 3,
    "question": "Durante a medição da pressão arterial, a braçadeira é primeiro insuflada e depois desinsuflada lentamente. Qual é a sequência correta de acontecimentos na artéria?",
    "options": [
      "Fluxo laminar com sons; fluxo turbulento sem sons; sem fluxo e sem som.",
      "Fluxo turbulento com sons; sem fluxo e sem som; fluxo laminar sem sons.",
      "Sem fluxo e sem som; fluxo turbulento com sons; fluxo laminar sem sons.",
      "Sem fluxo e sem som; fluxo laminar com sons; fluxo turbulento sem sons."
    ],
    "correctIndex": 2,
    "explanation": "Com a braçadeira cheia não há fluxo. Ao desinsuflar, o sangue passa pelo estreitamento em regime turbulento e produz sons. Com a artéria livre o regime volta a ser laminar e silencioso.",
    "distractorAnalysis": [
      "Está incorreta: troca os regimes e inverte a ordem; o som corresponde ao regime turbulento e a braçadeira cheia começa por impedir o fluxo.",
      "Está incorreta: começa pela turbulência, mas com a braçadeira insuflada ao máximo o sangue não passa.",
      "Está incorreta: troca laminar e turbulento; o regime turbulento é o que produz som e o laminar é silencioso."
    ],
    "nursingApplication": "Conhecer esta sequência permite ao enfermeiro identificar em que fase da desinsuflação se encontra durante a medição."
  },
  {
    "id": 3095,
    "topicId": 3,
    "question": "Durante a desinsuflação da braçadeira, no ponto parcialmente comprimido da artéria, o sangue (ρ = 1,06 g/cm³; η = 0,04 poise) passa num canal com diâmetro de 0,25 cm a 800 cm/s (valores ilustrativos). Qual é o Re nesse ponto e que regime se espera?",
    "figure": {
      "type": "tube",
      "items": [
        {
          "name": "Ponto comprimido",
          "r": 0.42,
          "flow": "v = 800 cm/s",
          "inside": [
            "d = 0,25 cm",
            "ρ = 1,06 g/cm³",
            "η = 0,04 poise",
            "Re = ?"
          ]
        }
      ],
      "alt": "Tubo representando o ponto comprimido da artéria, com d = 0,25 cm, v = 800 cm/s, ρ = 1,06 g/cm³, η = 0,04 poise e Re desconhecido."
    },
    "options": [
      "5300, regime turbulento",
      "2650, zona de transição",
      "5300, zona de transição",
      "5000, regime turbulento"
    ],
    "correctIndex": 0,
    "explanation": "No ponto comprimido, Re = v · ρ · d / η = 5300, superior a 4000. A velocidade muito elevada no estreitamento torna o escoamento turbulento, o que origina os sons de Korotkoff.",
    "solution": [
      "Dados: d = 0,25 cm; v = 800 cm/s; ρ = 1,06 g/cm³; η = 0,04 poise",
      "Fórmula: Re = v · ρ · d / η",
      "Substituição: Re = 800 × 1,06 × 0,25 / 0,04 = 212 / 0,04",
      "Resultado: 5300, regime turbulento",
      "Conclusão: Re > 4000, pelo que o escoamento é turbulento e produz som audível com o estetoscópio."
    ],
    "distractorAnalysis": [
      "Está incorreta: usa o raio (0,125 cm) em vez do diâmetro.",
      "Está incorreta: o valor de Re está certo, mas 5300 é superior a 4000, pelo que o regime é turbulento e não de transição.",
      "Está incorreta: esquece a densidade do sangue e calcula v · d / η."
    ],
    "nursingApplication": "Este aumento de Re no ponto comprimido explica porque é que os sons só se ouvem durante a desinsuflação da braçadeira sobre a artéria braquial."
  },
  {
    "id": 3096,
    "topicId": 3,
    "question": "Em cada batimento cardíaco, a pressão no interior da artéria oscila entre um valor máximo e um valor mínimo. Com a pressão da braçadeira entre esses dois valores, os sons de Korotkoff ouvem-se como batidas ritmadas e não como um ruído contínuo. Porquê?",
    "options": [
      "O sangue só passa, turbulento, quando a pressão arterial supera a da braçadeira.",
      "O ar sai da braçadeira em pequenos jatos, um por cada batimento do coração.",
      "Em cada batimento o sangue alterna entre regime laminar com som e turbulento sem som.",
      "O sangue escoa continuamente em regime turbulento, mas o som só se propaga na sístole."
    ],
    "correctIndex": 0,
    "explanation": "Em cada ciclo, só quando a pressão arterial ultrapassa a da braçadeira a artéria se abre parcialmente e o sangue passa, depressa e em regime turbulento, produzindo um som. No resto do ciclo a artéria volta a fechar, não há fluxo e não há som.",
    "distractorAnalysis": [
      "Está incorreta: os sons de Korotkoff têm origem no escoamento turbulento do sangue na artéria, e não no ar da braçadeira.",
      "Está incorreta: troca os regimes; o regime laminar é silencioso e é a turbulência que produz som.",
      "Está incorreta: no resto do ciclo a braçadeira fecha a artéria e não há fluxo; o silêncio entre batidas deve-se à ausência de escoamento."
    ],
    "nursingApplication": "Durante a medição, o enfermeiro ouve uma batida por cada batimento cardíaco, o que o ajuda a distinguir os sons de Korotkoff de outros ruídos."
  },
  {
    "id": 3097,
    "topicId": 3,
    "question": "A pressão da braçadeira desce lentamente. O primeiro som surge quando essa pressão fica ligeiramente abaixo do valor máximo da pressão no interior da artéria, de modo que o sangue consegue passar, por instantes, no ponto comprimido, em regime turbulento. O primeiro som permite identificar:",
    "options": [
      "a pressão arterial mínima (diastólica).",
      "a pressão atmosférica no local da medição.",
      "a pressão a que o sangue deixa de circular.",
      "a pressão arterial máxima (sistólica)."
    ],
    "correctIndex": 3,
    "explanation": "Antes do primeiro som a braçadeira impede a passagem do sangue. O som surge quando a pressão da braçadeira desce ao valor da pressão máxima da artéria, o que permite uma passagem turbulenta de sangue.",
    "distractorAnalysis": [
      "Está incorreta: a pressão mínima é atingida mais tarde, quando a artéria deixa de estar comprimida e os sons desaparecem.",
      "Está incorreta: a pressão atmosférica não tem relação com o momento em que o sangue começa a passar pela artéria comprimida.",
      "Está incorreta: o primeiro som marca o início da passagem do sangue e não o seu bloqueio."
    ],
    "nursingApplication": "Ao medir a pressão arterial, o enfermeiro regista a pressão a que ouve o primeiro som como valor máximo, mantendo a desinsuflação lenta e regular."
  },
  {
    "id": 3098,
    "topicId": 3,
    "question": "A pressão da braçadeira continua a descer. Quando fica igual ao valor mínimo da pressão na artéria, a artéria deixa de estar comprimida, o escoamento torna-se laminar e os sons desaparecem. O desaparecimento dos sons corresponde, portanto:",
    "options": [
      "à pressão arterial máxima (sistólica).",
      "à pressão arterial mínima (diastólica).",
      "ao momento em que o sangue deixa de circular.",
      "ao valor em que a artéria fica totalmente comprimida."
    ],
    "correctIndex": 1,
    "explanation": "Quando a artéria já não está comprimida em nenhum momento do ciclo, o fluxo é laminar e silencioso. Isso ocorre quando a pressão da braçadeira baixa até ao valor mínimo da pressão arterial.",
    "distractorAnalysis": [
      "Está incorreta: a pressão máxima corresponde ao aparecimento do primeiro som, no início da desinsuflação.",
      "Está incorreta: o sangue continua a circular; o que desaparece é a turbulência e, por isso, o som.",
      "Está incorreta: a compressão total ocorre com a braçadeira cheia, e não quando a pressão desce até ao mínimo."
    ],
    "nursingApplication": "O enfermeiro regista como pressão mínima o valor a que os sons deixam de se ouvir, mantendo a desinsuflação lenta e regular."
  },
  {
    "id": 3099,
    "topicId": 3,
    "question": "Ao desinsuflar a braçadeira, o enfermeiro ouve sons apenas num intervalo de valores de pressão, com silêncio acima e abaixo desse intervalo. Como se explica o silêncio nas duas situações?",
    "options": [
      "Acima, não há fluxo na artéria comprimida; abaixo, o fluxo é laminar.",
      "Acima, o fluxo é laminar; abaixo, não há fluxo na artéria.",
      "Acima, o fluxo é turbulento e rápido; abaixo, não há fluxo na artéria.",
      "Em ambas, o fluxo é turbulento, mas demasiado fraco para se ouvir."
    ],
    "correctIndex": 0,
    "explanation": "Com a braçadeira muito apertada, o sangue não passa e nada se ouve. Com a artéria livre, o fluxo é laminar e silencioso. Só entre os dois extremos há turbulência.",
    "distractorAnalysis": [
      "Está incorreta: troca as situações; com pressão elevada a artéria está comprimida e não há fluxo, e com pressão baixa o fluxo é laminar.",
      "Está incorreta: o fluxo turbulento produz sons; acima do intervalo não há fluxo e abaixo o fluxo é laminar.",
      "Está incorreta: as duas situações de silêncio não têm turbulência: numa não há fluxo e na outra o fluxo é laminar."
    ],
    "nursingApplication": "O enfermeiro sabe que o intervalo em que ouve sons é limitado pelo valor de pressão a que surge o primeiro som e pelo valor a que os sons desaparecem."
  },
  {
    "id": 3100,
    "topicId": 3,
    "question": "Imagine que a braçadeira é insuflada o suficiente para que a artéria seja apenas muito ligeiramente comprimida. O que se espera ouvir com o estetoscópio e porquê?",
    "options": [
      "Sons intensos, porque o sangue é turbulento em todas as artérias do braço.",
      "Nada, porque a velocidade e Re quase não aumentam e o fluxo se mantém laminar.",
      "Sons intensos, porque a compressão ligeira diminui a velocidade e aumenta Re.",
      "Nada, porque a compressão ligeira impede a passagem do sangue."
    ],
    "correctIndex": 1,
    "explanation": "Com uma compressão ligeira, o aumento de velocidade é pequeno e Re mantém-se baixo, pelo que o escoamento é laminar e silencioso. Só uma compressão suficiente para elevar Re gera turbulência.",
    "distractorAnalysis": [
      "Está incorreta: com a artéria quase livre o regime mantém-se laminar e, portanto, silencioso.",
      "Está incorreta: uma compressão aumenta a velocidade e não a diminui; com uma compressão ligeira o aumento é pequeno e Re não atinge valores turbulentos.",
      "Está incorreta: uma compressão ligeira não impede a passagem do sangue, que continua a escoar em regime laminar."
    ],
    "nursingApplication": "Se a braçadeira for insuflada só até um valor baixo, o enfermeiro pode não ouvir sons nem identificar a pressão máxima, pelo que deve repetir a medição insuflando-a mais."
  },
  {
    "id": 3101,
    "topicId": 3,
    "question": "A viscosidade do sangue total, comparada com a da água, é aproximadamente:",
    "options": [
      "praticamente igual à da água, porque o sangue é sobretudo líquido",
      "cerca de 30 vezes maior do que a da água",
      "cerca de 3 vezes maior do que a da água",
      "cerca de 3 vezes menor do que a da água"
    ],
    "correctIndex": 2,
    "explanation": "O sangue tem uma viscosidade cerca de 3 vezes superior à da água, devido sobretudo aos elementos figurados em suspensão no plasma.",
    "distractorAnalysis": [
      "Está incorreta: O sangue contém elementos figurados em suspensão, que aumentam a resistência ao escoamento; a sua viscosidade não é igual à da água.",
      "Está incorreta: O valor é muito exagerado; a viscosidade do sangue é da ordem de 3 vezes a da água.",
      "Está incorreta: Inverte a relação: o sangue é mais viscoso do que a água, não menos."
    ],
    "nursingApplication": "Ao colher sangue por um cateter fino, o enfermeiro conta com um escoamento mais lento do que o de uma solução aquosa, porque o sangue é cerca de 3 vezes mais viscoso do que a água."
  },
  {
    "id": 3102,
    "topicId": 3,
    "question": "Em termos de volume, o sangue é constituído por, aproximadamente:",
    "options": [
      "55% de plasma e 45% de elementos figurados",
      "45% de plasma e 55% de elementos figurados",
      "99% de plasma e 1% de elementos figurados",
      "75% de plasma e 25% de elementos figurados"
    ],
    "correctIndex": 0,
    "explanation": "O plasma ocupa cerca de 55% do volume e os elementos figurados cerca de 45%, sobretudo glóbulos vermelhos.",
    "distractorAnalysis": [
      "Está incorreta: Inverte as percentagens: é o plasma que ocupa a maior parte do volume.",
      "Está incorreta: Confunde os elementos figurados com a camada leucoplaquetária, que ronda apenas 1% do volume.",
      "Está incorreta: Os 25% correspondem a um hematócrito baixo, típico de anemia, e não à composição normal do sangue."
    ],
    "nursingApplication": "Ao ler o resultado de um hemograma, o enfermeiro tem presente que quase metade do volume do sangue é ocupada por células, o que influencia a facilidade com que o sangue escoa."
  },
  {
    "id": 3103,
    "topicId": 3,
    "question": "Qual dos constituintes do sangue é o que mais contribui para a sua viscosidade?",
    "options": [
      "O plasma, por ser o componente de maior volume",
      "Os glóbulos vermelhos (eritrócitos)",
      "Os leucócitos, por serem células de maior tamanho",
      "As plaquetas, por intervirem na coagulação"
    ],
    "correctIndex": 1,
    "explanation": "Os glóbulos vermelhos ocupam a maior parte do volume dos elementos figurados e são o constituinte que mais aumenta a viscosidade do sangue.",
    "distractorAnalysis": [
      "Está incorreta: O maior volume não implica maior contribuição; é a presença dos glóbulos vermelhos em suspensão que mais eleva a viscosidade.",
      "Está incorreta: Leucócitos e plaquetas formam a camada leucoplaquetária, cerca de 1% do volume, pelo que o seu peso na viscosidade é pequeno.",
      "Está incorreta: Em número muito elevado as plaquetas podem aumentar a viscosidade, mas ocupam um volume reduzido e contribuem menos do que os glóbulos vermelhos."
    ],
    "nursingApplication": "Quando o hematócrito de um utente está alterado, o enfermeiro sabe que é a quantidade de glóbulos vermelhos que mais modifica a viscosidade do sangue."
  },
  {
    "id": 3104,
    "topicId": 3,
    "question": "Que fração do volume de sangue corresponde, aproximadamente, à camada leucoplaquetária (leucócitos e plaquetas)?",
    "options": [
      "Cerca de 10%",
      "Cerca de 45%",
      "Cerca de 55%",
      "Cerca de 1%"
    ],
    "correctIndex": 3,
    "explanation": "A camada leucoplaquetária, formada por leucócitos e plaquetas, ocupa cerca de 1% do volume do sangue; o essencial dos elementos figurados são glóbulos vermelhos.",
    "distractorAnalysis": [
      "Está incorreta: Valor demasiado elevado; leucócitos e plaquetas ocupam uma fração muito pequena do volume.",
      "Está incorreta: Os 45% correspondem a todos os elementos figurados, dos quais a maior parte são glóbulos vermelhos.",
      "Está incorreta: Os 55% correspondem ao plasma."
    ],
    "nursingApplication": "Ao analisar um hemograma, o enfermeiro percebe que o hematócrito reflete sobretudo os glóbulos vermelhos, pois os leucócitos e as plaquetas ocupam uma fração mínima do volume."
  },
  {
    "id": 3105,
    "topicId": 3,
    "question": "Um utente apresenta hematócrito de 45%. O que significa este valor?",
    "options": [
      "O plasma ocupa 45% do volume do sangue.",
      "45% dos glóbulos vermelhos estão agregados em pilhas.",
      "Os glóbulos vermelhos ocupam 45% do volume do sangue.",
      "O sangue é 45% mais viscoso do que a água."
    ],
    "correctIndex": 2,
    "explanation": "O hematócrito é a percentagem do volume de sangue ocupada pelos eritrócitos (glóbulos vermelhos).",
    "distractorAnalysis": [
      "Está incorreta: O plasma ocupa cerca de 55% do volume; o hematócrito refere-se aos glóbulos vermelhos.",
      "Está incorreta: O hematócrito não mede agregação; é a percentagem do volume ocupada pelos glóbulos vermelhos.",
      "Está incorreta: Confunde hematócrito com viscosidade; o sangue é cerca de 3 vezes mais viscoso do que a água."
    ],
    "nursingApplication": "Quando o enfermeiro regista o hematócrito de um utente, está a anotar a fração do volume sanguíneo ocupada pelos glóbulos vermelhos."
  },
  {
    "id": 3106,
    "topicId": 3,
    "question": "O hematócrito de um utente passa de 45% para 55%. O que acontece à viscosidade do sangue?",
    "options": [
      "Diminui, porque os glóbulos vermelhos facilitam o deslizamento das camadas.",
      "Mantém-se, porque só a temperatura altera a viscosidade.",
      "Aumenta apenas se os leucócitos aumentarem também.",
      "Aumenta, porque há mais glóbulos vermelhos por unidade de volume."
    ],
    "correctIndex": 3,
    "explanation": "Um hematócrito mais elevado significa mais glóbulos vermelhos por volume de sangue e, por isso, maior resistência ao escoamento.",
    "distractorAnalysis": [
      "Está incorreta: Os glóbulos vermelhos aumentam a resistência ao escoamento; mais células significa maior viscosidade.",
      "Está incorreta: A viscosidade varia com a temperatura e também com a composição do fluido, como o hematócrito.",
      "Está incorreta: O aumento do hematócrito, por si só, já eleva a viscosidade; os leucócitos contribuem muito pouco."
    ],
    "nursingApplication": "Perante um utente com hematócrito de 55%, o enfermeiro sabe que o sangue é mais viscoso e oferece maior resistência à passagem pelos vasos."
  },
  {
    "id": 3107,
    "topicId": 3,
    "question": "Um utente com anemia tem hematócrito de cerca de 25%. Em comparação com um utente com hematócrito normal, a viscosidade do seu sangue é:",
    "options": [
      "maior, porque o sangue fica mais concentrado em plasma",
      "igual, porque a viscosidade do sangue é constante",
      "maior, porque o coração bombeia o sangue mais depressa",
      "menor, porque há menos glóbulos vermelhos por unidade de volume"
    ],
    "correctIndex": 3,
    "explanation": "Na anemia o hematócrito diminui, há menos glóbulos vermelhos e a viscosidade do sangue baixa.",
    "distractorAnalysis": [
      "Está incorreta: Mais plasma e menos células reduz a viscosidade; o plasma é muito menos viscoso do que as células em suspensão.",
      "Está incorreta: A viscosidade varia com a composição, nomeadamente com o hematócrito.",
      "Está incorreta: A velocidade do fluxo não aumenta a viscosidade; esta depende da composição e da temperatura."
    ],
    "nursingApplication": "Ao cuidar de um utente anémico, o enfermeiro sabe que o sangue escoa com menos resistência interna, mas que isso não compensa a menor capacidade de transporte de oxigénio."
  },
  {
    "id": 3108,
    "topicId": 3,
    "question": "Um utente idoso, com vómitos e diarreia há dois dias, está desidratado e o hematócrito subiu. Qual é a consequência para o coração?",
    "options": [
      "O sangue está menos viscoso, pelo que o coração tem de fazer menos esforço do que o habitual.",
      "A viscosidade não se altera, porque o volume de plasma é irrelevante.",
      "O sangue está mais viscoso e o coração tem de fazer mais esforço para o fazer circular.",
      "O sangue está mais viscoso, mas o esforço do coração não se altera."
    ],
    "correctIndex": 2,
    "explanation": "Na desidratação o hematócrito aumenta, o sangue fica mais viscoso e o coração tem de gerar maior pressão para manter o caudal.",
    "distractorAnalysis": [
      "Está incorreta: A perda de água concentra os glóbulos vermelhos e aumenta a viscosidade, não a reduz.",
      "Está incorreta: A perda de água do plasma aumenta o hematócrito e, com ele, a viscosidade.",
      "Está incorreta: Quanto mais viscoso o sangue, maior a diferença de pressão necessária para manter o caudal, logo maior o esforço do coração."
    ],
    "nursingApplication": "Num utente idoso desidratado, o enfermeiro vigia os sinais de hidratação e a diurese, conforme a prescrição, porque a desidratação aumenta o esforço do coração."
  },
  {
    "id": 3109,
    "topicId": 3,
    "question": "Num vaso onde o sangue circula muito lentamente, os glóbulos vermelhos tendem a agregar-se em «pilhas». Qual é o efeito sobre a viscosidade?",
    "options": [
      "A viscosidade aumenta, porque os agregados oferecem maior resistência ao escoamento.",
      "A viscosidade diminui, porque os agregados deslizam mais facilmente.",
      "A viscosidade não se altera, porque o hematócrito é o mesmo.",
      "A viscosidade diminui, porque o sangue passa a ser sobretudo plasma."
    ],
    "correctIndex": 0,
    "explanation": "Com fluxo muito lento os glóbulos vermelhos formam pilhas, o que aumenta a viscosidade do sangue.",
    "distractorAnalysis": [
      "Está incorreta: Os agregados dificultam o escoamento, aumentando a resistência.",
      "Está incorreta: Mesmo com igual hematócrito, a agregação dos glóbulos vermelhos aumenta a viscosidade.",
      "Está incorreta: A agregação não retira células ao sangue; apenas as junta em pilhas, o que aumenta a resistência ao escoamento."
    ],
    "nursingApplication": "Num utente imobilizado com circulação muito lenta nos membros inferiores, o enfermeiro tem presente que o sangue parado ou muito lento tende a ficar mais viscoso."
  },
  {
    "id": 3110,
    "topicId": 3,
    "question": "O hemograma de um utente revela um número de plaquetas muito acima do normal, sem alteração do hematócrito. O que se espera acontecer à viscosidade do sangue?",
    "options": [
      "Diminuir, porque as plaquetas são fragmentos pequenos.",
      "Manter-se, porque só os glóbulos vermelhos alteram a viscosidade.",
      "Diminuir, porque o plasma fica mais diluído.",
      "Aumentar, porque um excesso de plaquetas eleva a viscosidade."
    ],
    "correctIndex": 3,
    "explanation": "Hematócrito elevado e/ou muitas plaquetas aumentam a viscosidade do sangue.",
    "distractorAnalysis": [
      "Está incorreta: Um excesso de plaquetas tende a aumentar a viscosidade, não a diminuí-la.",
      "Está incorreta: Os glóbulos vermelhos são o fator principal, mas muitas plaquetas também aumentam a viscosidade.",
      "Está incorreta: Mais plaquetas não diluem o plasma; acrescentam elementos figurados, o que aumenta a viscosidade."
    ],
    "nursingApplication": "Perante um utente com contagem de plaquetas muito elevada, o enfermeiro reconhece que o sangue pode estar mais viscoso e comunica o resultado à equipa."
  },
  {
    "id": 3111,
    "topicId": 3,
    "question": "Dois utentes têm vasos idênticos e a mesma diferença de pressão entre os extremos. O sangue do utente B é mais viscoso do que o do utente A. Qualitativamente, o caudal:",
    "options": [
      "é maior no utente B, porque o sangue viscoso enche melhor o vaso",
      "é igual nos dois, porque a diferença de pressão é a mesma",
      "é menor no utente B do que no utente A",
      "é maior no utente B, porque a viscosidade aumenta a velocidade"
    ],
    "correctIndex": 2,
    "explanation": "Para a mesma diferença de pressão e o mesmo vaso, maior viscosidade implica maior resistência e, portanto, menor caudal.",
    "distractorAnalysis": [
      "Está incorreta: Maior viscosidade significa maior resistência ao escoamento e, para a mesma pressão, menor caudal.",
      "Está incorreta: A diferença de pressão é igual, mas a resistência é maior no utente B, pelo que o caudal é menor.",
      "Está incorreta: A viscosidade traduz resistência ao escoamento; não aumenta a velocidade."
    ],
    "nursingApplication": "Num utente com sangue mais viscoso, o enfermeiro compreende que o coração precisa de uma diferença de pressão maior para manter o mesmo caudal nos vasos."
  },
  {
    "id": 3112,
    "topicId": 3,
    "question": "Um utente com anemia apresenta hematócrito baixo. Mantendo-se a velocidade do sangue e o diâmetro do vaso, qual é a consequência para o regime de escoamento?",
    "options": [
      "A viscosidade aumenta, o número de Reynolds diminui e o regime é laminar.",
      "A viscosidade diminui, Re aumenta e há maior tendência para turbulência.",
      "A viscosidade diminui, o número de Reynolds diminui e o regime é laminar.",
      "A viscosidade não se altera e o regime mantém-se igual."
    ],
    "correctIndex": 1,
    "explanation": "Como Re = v · ρ · d / η, uma menor viscosidade aumenta Re, o que favorece o regime turbulento.",
    "distractorAnalysis": [
      "Está incorreta: Na anemia a viscosidade diminui; o raciocínio parte do sentido errado da variação.",
      "Está incorreta: Sendo a viscosidade o denominador de Re, a sua diminuição faz aumentar Re, não diminuir.",
      "Está incorreta: A viscosidade diminui com o hematócrito baixo, o que altera Re."
    ],
    "nursingApplication": "Ao medir a pressão arterial de um utente anémico, o enfermeiro tem presente que a menor viscosidade do sangue tende a facilitar o aparecimento de turbulência."
  },
  {
    "id": 3113,
    "topicId": 3,
    "question": "O hematócrito de um utente é de 40%. Qual é a descrição correta do restante volume de sangue?",
    "options": [
      "60% do volume é ocupado por plasma, leucócitos e plaquetas",
      "60% do volume é ocupado só por plasma",
      "40% do volume é plasma e 60% são glóbulos vermelhos",
      "O restante volume é ocupado por glóbulos vermelhos agregados"
    ],
    "correctIndex": 0,
    "explanation": "Se os glóbulos vermelhos ocupam 40% do volume, os restantes 60% correspondem ao plasma e à camada leucoplaquetária.",
    "distractorAnalysis": [
      "Está incorreta: O volume que não é de glóbulos vermelhos inclui o plasma e também a camada leucoplaquetária (leucócitos e plaquetas).",
      "Está incorreta: Inverte os valores: os glóbulos vermelhos ocupam 40% do volume, segundo o hematócrito.",
      "Está incorreta: A agregação em pilhas é um fenómeno do fluxo muito lento e não tem relação com o volume que não é ocupado por glóbulos vermelhos."
    ],
    "nursingApplication": "Ao interpretar um hematócrito de 40%, o enfermeiro lembra-se de que o restante volume do sangue é sobretudo plasma, que é o líquido que transporta as células."
  },
  {
    "id": 3114,
    "topicId": 3,
    "question": "Um utente desidratado recebe reposição de líquidos por via intravenosa e o plasma volta a ter o volume habitual. O que se espera que aconteça ao hematócrito e à viscosidade do sangue?",
    "options": [
      "O hematócrito aumenta e a viscosidade aumenta.",
      "O hematócrito diminui e a viscosidade diminui.",
      "O hematócrito diminui e a viscosidade aumenta.",
      "O hematócrito e a viscosidade mantêm-se, pois o número de glóbulos vermelhos não muda."
    ],
    "correctIndex": 1,
    "explanation": "Ao repor o volume de plasma, os glóbulos vermelhos passam a ocupar uma percentagem menor do volume; o hematócrito baixa e o sangue fica menos viscoso.",
    "distractorAnalysis": [
      "Está incorreta: Com mais plasma, os glóbulos vermelhos ocupam uma percentagem menor do volume, pelo que o hematócrito baixa.",
      "Está incorreta: Um hematócrito mais baixo corresponde a um sangue menos viscoso.",
      "Está incorreta: O hematócrito é uma percentagem do volume; ao aumentar o plasma, baixa, mesmo com o mesmo número de células."
    ],
    "nursingApplication": "Na reposição de líquidos de um utente desidratado, conforme a prescrição, o enfermeiro espera que o sangue fique menos viscoso e que o esforço do coração diminua."
  },
  {
    "id": 3115,
    "topicId": 3,
    "question": "Três utentes têm hematócritos de 25% (A), 45% (B) e 55% (C). Por ordem crescente de viscosidade do sangue, estão ordenados como:",
    "options": [
      "C, B, A",
      "B, A, C",
      "A, C, B",
      "A, B, C"
    ],
    "correctIndex": 3,
    "explanation": "A viscosidade aumenta com o hematócrito; por isso a ordem crescente é A (25%), B (45%) e C (55%).",
    "distractorAnalysis": [
      "Está incorreta: Inverte a ordem: maior hematócrito corresponde a maior viscosidade, e C é o mais viscoso.",
      "Está incorreta: O utente A, com hematócrito mais baixo, tem o sangue menos viscoso e não pode ficar a seguir a B.",
      "Está incorreta: O utente B, com hematócrito 45%, é menos viscoso do que C, com 55%."
    ],
    "nursingApplication": "Ao comparar hematócritos de vários utentes, o enfermeiro identifica quem tem o sangue mais viscoso e, portanto, maior esforço cardíaco, e sinaliza-o à equipa."
  },
  {
    "id": 3116,
    "topicId": 3,
    "question": "Qual das seguintes descrições da viscosidade do sangue está correta?",
    "options": [
      "É a massa de sangue contida em cada unidade de volume, expressa em g/cm³.",
      "É a velocidade com que o sangue atravessa uma secção do vaso.",
      "É a resistência do sangue ao escoamento, causada pelas forças entre moléculas.",
      "É o volume de sangue que passa numa secção do vaso, em cada unidade de tempo, em mL/min."
    ],
    "correctIndex": 2,
    "explanation": "A viscosidade é a resistência de um fluido ao escoamento, com origem nas forças intermoleculares; não deve ser confundida com a densidade nem com o caudal.",
    "distractorAnalysis": [
      "Está incorreta: Isso é a densidade (ρ); a viscosidade (η) mede a resistência ao escoamento.",
      "Está incorreta: A velocidade não é uma propriedade do fluido; a viscosidade é a resistência ao escoamento.",
      "Está incorreta: Isso define o caudal; a viscosidade é a resistência ao escoamento."
    ],
    "nursingApplication": "Quando o enfermeiro diz que o sangue está mais viscoso, refere-se à maior resistência ao escoamento e não à quantidade de sangue que passa por minuto."
  },
  {
    "id": 3117,
    "topicId": 3,
    "question": "Um utente com sudação intensa e febre apresenta hematócrito de 55% (habitualmente 45%). Qual é a explicação mais provável para este aumento?",
    "options": [
      "Produção súbita de muitos glóbulos vermelhos novos",
      "Aumento do volume de plasma por excesso de líquidos",
      "Redução do número de plaquetas e de leucócitos",
      "Perda de água do plasma, que concentra os glóbulos vermelhos"
    ],
    "correctIndex": 3,
    "explanation": "Com a perda de água, o plasma diminui e os glóbulos vermelhos ficam concentrados (hemoconcentração), o que eleva o hematócrito e a viscosidade.",
    "distractorAnalysis": [
      "Está incorreta: Um aumento tão rápido do hematócrito por produção de células não é a explicação mais provável; a perda de água concentra as células existentes.",
      "Está incorreta: Mais plasma diluiria os glóbulos vermelhos e baixaria o hematócrito.",
      "Está incorreta: Leucócitos e plaquetas ocupam cerca de 1% do volume; a sua redução não explica um aumento de 10 pontos no hematócrito."
    ],
    "nursingApplication": "Num utente com sudação e febre, o enfermeiro estimula a ingestão de líquidos, conforme a indicação clínica, porque a desidratação concentra o sangue."
  },
  {
    "id": 3118,
    "topicId": 3,
    "question": "Qual das seguintes situações corresponde ao sangue mais viscoso?",
    "options": [
      "Hematócrito de 55% e fluxo muito lento",
      "Hematócrito de 25% e fluxo muito lento",
      "Hematócrito de 45% e fluxo normal",
      "Hematócrito de 25% e fluxo normal"
    ],
    "correctIndex": 0,
    "explanation": "O hematócrito elevado aumenta a viscosidade e o fluxo muito lento favorece a agregação dos glóbulos vermelhos, que a aumenta ainda mais.",
    "distractorAnalysis": [
      "Está incorreta: Com hematócrito baixo (anemia) a viscosidade diminui, mesmo havendo alguma agregação.",
      "Está incorreta: Um hematócrito normal e sem agregação corresponde a uma viscosidade intermédia.",
      "Está incorreta: O hematócrito baixo e a ausência de agregação dão o sangue menos viscoso das quatro situações."
    ],
    "nursingApplication": "Num utente desidratado e acamado, o enfermeiro tem em conta que o hematócrito alto e a circulação lenta se somam no aumento da viscosidade do sangue."
  },
  {
    "id": 3119,
    "topicId": 3,
    "question": "Qual das seguintes alterações tende a diminuir a viscosidade do sangue?",
    "options": [
      "Desidratação, com hematócrito alto",
      "Número muito elevado de plaquetas",
      "Agregação de glóbulos vermelhos em pilhas",
      "Anemia, com hematócrito baixo"
    ],
    "correctIndex": 3,
    "explanation": "Um hematócrito baixo, como na anemia, significa menos glóbulos vermelhos por volume e uma viscosidade mais baixa.",
    "distractorAnalysis": [
      "Está incorreta: A desidratação concentra os glóbulos vermelhos e aumenta a viscosidade.",
      "Está incorreta: Muitas plaquetas aumentam a viscosidade.",
      "Está incorreta: A agregação em pilhas, que ocorre com fluxo muito lento, aumenta a viscosidade."
    ],
    "nursingApplication": "Perante um utente com hemoglobina e hematócrito baixos, o enfermeiro associa o quadro a um sangue menos viscoso."
  },
  {
    "id": 3120,
    "topicId": 3,
    "question": "Qual das seguintes grandezas é uma propriedade do próprio sangue e influencia diretamente a sua viscosidade?",
    "options": [
      "O comprimento do vaso onde o sangue circula",
      "A composição, como o valor do hematócrito",
      "O sentido do escoamento no vaso",
      "O número de bifurcações do vaso"
    ],
    "correctIndex": 1,
    "explanation": "A viscosidade depende da composição do fluido (por exemplo, da fração de glóbulos vermelhos) e da temperatura, e não de características do vaso.",
    "distractorAnalysis": [
      "Está incorreta: O comprimento é característica do vaso e não altera a viscosidade do sangue.",
      "Está incorreta: O sentido do escoamento não modifica a viscosidade.",
      "Está incorreta: As bifurcações influenciam o regime de escoamento, mas não a viscosidade do sangue."
    ],
    "nursingApplication": "Ao avaliar o hematócrito de um utente, o enfermeiro está a avaliar a composição do sangue que determina a sua viscosidade."
  },
  {
    "id": 3121,
    "topicId": 3,
    "question": "Em que conjunto de vasos o regime de escoamento do sangue é, em regra, laminar?",
    "options": [
      "Aorta, artéria pulmonar e seios de Valsalva",
      "Arteríolas, vénulas e capilares",
      "Aorta, arteríolas e capilares",
      "Artéria pulmonar, vénulas e capilares"
    ],
    "correctIndex": 1,
    "explanation": "Nos vasos de pequeno calibre e baixa velocidade (arteríolas, vénulas e capilares) o número de Reynolds é baixo e o regime é laminar.",
    "distractorAnalysis": [
      "Está incorreta: Nestes locais, de grande calibre e alta velocidade, a turbulência é mais provável.",
      "Está incorreta: arteríolas e capilares seguem a regra laminar, mas a aorta, de grande calibre e alta velocidade, é um local de turbulência mais provável.",
      "Está incorreta: A artéria pulmonar, de grande calibre e alta velocidade, é um local de turbulência mais provável."
    ],
    "nursingApplication": "Ao avaliar a perfusão periférica de um utente, o enfermeiro sabe que na microcirculação, onde ocorrem as trocas, o escoamento é em regra laminar e silencioso."
  },
  {
    "id": 3122,
    "topicId": 3,
    "question": "Porque é que nas arteríolas, vénulas e capilares o regime é, em regra, laminar?",
    "options": [
      "Porque a velocidade é baixa e o calibre é pequeno, o que mantém Re baixo.",
      "Porque a velocidade é alta e o calibre é pequeno, o que mantém Re baixo.",
      "Porque a velocidade é baixa e o calibre é grande, o que mantém Re baixo.",
      "Porque a viscosidade do sangue é aí muito maior do que nos restantes vasos."
    ],
    "correctIndex": 0,
    "explanation": "Como Re é proporcional à velocidade e ao diâmetro, vasos pequenos com escoamento lento têm Re baixo e regime laminar.",
    "distractorAnalysis": [
      "Está incorreta: Nestes vasos a velocidade é baixa; uma velocidade alta aumentaria Re.",
      "Está incorreta: O calibre destes vasos é pequeno; um calibre grande aumentaria Re.",
      "Está incorreta: A viscosidade do sangue não difere de forma relevante entre estes vasos; são a velocidade e o calibre que mantêm Re baixo."
    ],
    "nursingApplication": "Ao colher sangue capilar na polpa do dedo, o enfermeiro lida com um escoamento lento e pouco perturbado, característico de vasos de pequeno calibre."
  },
  {
    "id": 3123,
    "topicId": 3,
    "question": "Nos capilares o escoamento é laminar e lento. Que vantagem tem este facto para o organismo?",
    "options": [
      "Favorece as trocas com os tecidos, porque o sangue permanece mais tempo em contacto com eles.",
      "Aumenta a velocidade do sangue, o que acelera as trocas com os tecidos.",
      "Permite que o sangue se misture em turbilhões e troque substâncias com a parede.",
      "Reduz o contacto do sangue com a parede do vaso, o que diminui o gasto de energia no escoamento."
    ],
    "correctIndex": 0,
    "explanation": "O escoamento laminar e lento nos capilares dá tempo ao sangue para trocar substâncias com os tecidos.",
    "distractorAnalysis": [
      "Está incorreta: No capilar o escoamento é lento; é essa lentidão que favorece as trocas.",
      "Está incorreta: Os turbilhões são característicos do regime turbulento e não do laminar, que nos capilares é a regra.",
      "Está incorreta: As trocas fazem-se através da parede capilar; o escoamento lento aumenta, e não reduz, o contacto com os tecidos."
    ],
    "nursingApplication": "Quando observa o enchimento capilar numa unha, o enfermeiro avalia a perfusão de uma rede de vasos onde o sangue circula devagar para permitir trocas com os tecidos."
  },
  {
    "id": 3124,
    "topicId": 3,
    "question": "Em qual dos locais do sistema circulatório a turbulência é mais provável?",
    "options": [
      "Nos capilares dos tecidos, em plena troca com as células",
      "Nas vénulas, a caminho das veias de maior calibre",
      "Na aorta, a seguir à saída do ventrículo esquerdo",
      "Nas arteríolas, a montante dos capilares"
    ],
    "correctIndex": 2,
    "explanation": "Na aorta o calibre é grande e a velocidade é alta, pelo que Re é elevado e a turbulência é mais provável.",
    "distractorAnalysis": [
      "Está incorreta: Os capilares têm calibre muito pequeno e velocidade baixa, com escoamento laminar.",
      "Está incorreta: As vénulas são de pequeno calibre e baixa velocidade, com escoamento laminar.",
      "Está incorreta: As arteríolas são de pequeno calibre e baixa velocidade, com escoamento laminar."
    ],
    "nursingApplication": "Ao auscultar o precórdio, o enfermeiro sabe que a aorta e a zona de saída do coração são locais onde o escoamento é mais propenso a turbulência."
  },
  {
    "id": 3125,
    "topicId": 3,
    "question": "Num modelo simplificado com o mesmo sangue, a aorta tem um diâmetro 400 vezes maior e uma velocidade média 25 vezes maior do que uma arteríola. Quantas vezes é maior o número de Reynolds na aorta?",
    "options": [
      "Cerca de 425 vezes maior",
      "Cerca de 10 000 vezes maior",
      "Cerca de 16 vezes maior",
      "Cerca de 400 vezes maior"
    ],
    "correctIndex": 1,
    "explanation": "Como Re = v · ρ · d / η e o sangue é o mesmo (ρ e η iguais), Re é proporcional ao produto v · d. A razão é 25 × 400 = 10 000, o que explica que a turbulência seja mais provável na aorta do que nas arteríolas.",
    "solution": [
      "Dados: d<sub>aorta</sub> = 400 · d<sub>arteríola</sub>; v<sub>aorta</sub> = 25 · v<sub>arteríola</sub>; ρ e η iguais",
      "Fórmula: Re = v · ρ · d / η, logo Re é proporcional a v · d",
      "Substituição: Re<sub>aorta</sub> / Re<sub>arteríola</sub> = 25 × 400",
      "Resultado: Cerca de 10 000 vezes maior"
    ],
    "distractorAnalysis": [
      "Está incorreta: somou os dois fatores (400 + 25); em Re a velocidade e o diâmetro multiplicam-se.",
      "Está incorreta: dividiu o fator do diâmetro pelo da velocidade (400 / 25); ambos estão no numerador de Re e multiplicam-se.",
      "Está incorreta: considerou só o diâmetro e esqueceu que a velocidade, também no numerador de Re, é 25 vezes maior."
    ],
    "nursingApplication": "Ao medir a pressão arterial, o enfermeiro percebe que numa artéria do braço sem compressão o escoamento é laminar e silencioso, e que só a compressão pela braçadeira gera sons."
  },
  {
    "id": 3126,
    "topicId": 3,
    "question": "Num utente com aterosclerose, a parede interna de uma artéria tornou-se áspera e o calibre varia ao longo do vaso. Qual o efeito mais provável no escoamento do sangue?",
    "options": [
      "Maior tendência para turbulência, devido à parede áspera e às variações de calibre",
      "Maior tendência para escoamento laminar, porque a parede áspera trava as camadas",
      "Nenhuma alteração, porque o regime só depende da velocidade média",
      "Perfil de velocidades parabólico regular ao longo de todo o vaso, em regime laminar"
    ],
    "correctIndex": 0,
    "explanation": "Parede interna áspera, curvaturas, bifurcações e variações de calibre perturbam o escoamento e favorecem a turbulência.",
    "distractorAnalysis": [
      "Está incorreta: A parede áspera e as variações de calibre perturbam o escoamento e favorecem a turbulência.",
      "Está incorreta: Além da velocidade, o estado da parede e as variações de calibre também influenciam o regime.",
      "Está incorreta: A rugosidade e as variações de calibre perturbam o escoamento, tornando improvável um regime laminar regular em todo o vaso."
    ],
    "nursingApplication": "Num utente com doença arterial, o enfermeiro compreende que o estreitamento e a rugosidade da parede podem gerar turbulência e sopros audíveis na auscultação."
  },
  {
    "id": 3127,
    "topicId": 3,
    "question": "Durante a sístole ventricular, a velocidade do sangue à saída do coração é elevada. O que se pode prever para o regime de escoamento na aorta?",
    "options": [
      "O regime é obrigatoriamente laminar, porque a aorta é um vaso elástico.",
      "Há maior probabilidade de regime laminar, porque a velocidade elevada aumenta a viscosidade.",
      "Há maior probabilidade de regime turbulento, porque a velocidade elevada aumenta Re.",
      "O regime não depende da velocidade, mas apenas do comprimento da aorta."
    ],
    "correctIndex": 2,
    "explanation": "Com a velocidade elevada da sístole e o grande calibre da aorta, Re sobe e a turbulência torna-se mais provável.",
    "distractorAnalysis": [
      "Está incorreta: A elasticidade não impede a turbulência; com velocidade elevada e grande calibre a turbulência é mais provável.",
      "Está incorreta: A velocidade não altera a viscosidade; o seu aumento faz subir Re.",
      "Está incorreta: O regime depende de Re, que aumenta com a velocidade."
    ],
    "nursingApplication": "Ao palpar o pulso e auscultar o coração de um utente, o enfermeiro tem em conta que a sístole é o momento em que a velocidade do sangue é maior."
  },
  {
    "id": 3128,
    "topicId": 3,
    "question": "As veias cavas são vasos de grande calibre. Porque podem, mesmo assim, apresentar regime laminar?",
    "options": [
      "Porque a velocidade do sangue nas veias cavas é muito alta.",
      "Porque o calibre das veias cavas é muito pequeno.",
      "Porque a viscosidade do sangue venoso é muito superior à do arterial.",
      "Porque a velocidade do sangue nas veias cavas é baixa."
    ],
    "correctIndex": 3,
    "explanation": "Embora o calibre seja grande, a velocidade baixa mantém Re reduzido, pelo que o regime laminar é possível nas veias cavas.",
    "distractorAnalysis": [
      "Está incorreta: Uma velocidade alta aumentaria Re e favoreceria a turbulência.",
      "Está incorreta: As veias cavas são de grande calibre; o regime laminar deve-se à baixa velocidade.",
      "Está incorreta: Não é a viscosidade que explica a exceção, mas a baixa velocidade do sangue nas veias cavas."
    ],
    "nursingApplication": "Na avaliação da pressão venosa central, o enfermeiro lida com um território de velocidade baixa onde o escoamento tende a ser laminar, ainda que modulado pela respiração e pelos batimentos."
  },
  {
    "id": 3129,
    "topicId": 3,
    "question": "Qual é a exceção à regra de que a aorta tende a ter escoamento turbulento?",
    "options": [
      "Em zonas da aorta abdominal de velocidade baixa, o regime pode ser laminar.",
      "A aorta torácica, junto à válvula aórtica, tem escoamento laminar.",
      "Em zonas da aorta abdominal de velocidade elevada, o regime é laminar.",
      "Nos seios de Valsalva o regime é laminar, por serem dilatações da aorta."
    ],
    "correctIndex": 0,
    "explanation": "Em zonas de velocidade baixa da aorta abdominal, Re pode manter-se abaixo do valor crítico e o regime ser laminar.",
    "distractorAnalysis": [
      "Está incorreta: Junto à saída do coração, a velocidade é alta e a turbulência é mais provável.",
      "Está incorreta: Velocidade elevada aumenta Re; é a velocidade baixa que permite o regime laminar.",
      "Está incorreta: Os seios de Valsalva são um local onde a turbulência é mais provável, e não uma exceção."
    ],
    "nursingApplication": "Ao auscultar o abdómen de um utente, o enfermeiro tem presente que a aorta abdominal nem sempre tem escoamento turbulento, porque em zonas de velocidade baixa o regime pode ser laminar."
  },
  {
    "id": 3130,
    "topicId": 3,
    "question": "Durante um esforço físico intenso, a velocidade do sangue aumenta. O que é mais provável acontecer em alguns locais do sistema circulatório?",
    "options": [
      "Turbulência permanente, que se mantém depois do esforço",
      "Escoamento laminar em toda a circulação, porque o calibre aumenta",
      "Turbulência transitória, com reposição do regime laminar logo que possível",
      "Turbulência apenas nos capilares, onde a velocidade aumenta mais"
    ],
    "correctIndex": 2,
    "explanation": "O aumento da velocidade no esforço eleva Re e pode causar turbulência transitória, que desaparece quando a velocidade baixa.",
    "distractorAnalysis": [
      "Está incorreta: A turbulência é transitória e o regime laminar é reposto logo que possível.",
      "Está incorreta: O aumento da velocidade eleva Re e pode gerar turbulência transitória.",
      "Está incorreta: O pequeno calibre dos capilares mantém Re baixo; a turbulência é mais provável em vasos de maior calibre."
    ],
    "nursingApplication": "Quando avalia um utente após a prova de esforço, o enfermeiro sabe que as alterações do escoamento podem ser transitórias e normalizam com o repouso."
  },
  {
    "id": 3131,
    "topicId": 3,
    "question": "Porque é vantajoso para o organismo que o escoamento do sangue seja predominantemente laminar?",
    "options": [
      "Porque o regime laminar exige menor gasto de energia do que o turbulento.",
      "Porque o regime laminar exige maior gasto de energia, o que protege as paredes.",
      "Porque o regime laminar mistura as camadas de sangue e uniformiza a composição.",
      "Porque o regime laminar produz sons que permitem monitorizar o coração."
    ],
    "correctIndex": 0,
    "explanation": "O escoamento laminar tem menor gasto de energia e é silencioso, por isso o regime laminar é reposto sempre que possível.",
    "distractorAnalysis": [
      "Está incorreta: É o regime turbulento que exige mais energia; o laminar é energeticamente mais económico.",
      "Está incorreta: A mistura entre camadas é característica do regime turbulento.",
      "Está incorreta: Os sons, como os de Korotkoff, resultam da turbulência; o regime laminar é silencioso."
    ],
    "nursingApplication": "Ao medir a pressão arterial, o enfermeiro ouve sons de Korotkoff apenas quando há turbulência, pois o escoamento laminar normal é silencioso."
  },
  {
    "id": 3132,
    "topicId": 3,
    "question": "Qual dos seguintes pares associa corretamente cada circulação ao seu trajeto?",
    "options": [
      "Pequena circulação: coração–restantes órgãos–coração; grande circulação: coração–pulmões–coração",
      "Pequena circulação: coração–pulmões–coração; grande circulação: coração–restantes órgãos–coração",
      "Pequena circulação: aorta–capilares–veias cavas; grande circulação: artéria pulmonar–pulmões",
      "Pequena circulação: só as veias; grande circulação: só as artérias"
    ],
    "correctIndex": 1,
    "explanation": "A pequena circulação (pulmonar) liga o coração aos pulmões; a grande circulação (sistémica) liga o coração ao resto do corpo.",
    "distractorAnalysis": [
      "Está incorreta: Troca as duas circulações: a pequena é a pulmonar e a grande é a sistémica.",
      "Está incorreta: A artéria pulmonar e os pulmões pertencem à pequena circulação, e a aorta à grande.",
      "Está incorreta: Ambas as circulações incluem artérias, capilares e veias."
    ],
    "nursingApplication": "Ao explicar a um utente porque o sangue passa pelos pulmões, o enfermeiro refere a pequena circulação como o percurso em que o sangue recebe oxigénio."
  },
  {
    "id": 3133,
    "topicId": 3,
    "question": "A artéria pulmonar é um dos locais onde a turbulência é mais provável. A que circulação pertence e porque tende a ter turbulência?",
    "options": [
      "À grande circulação; tem grande calibre e velocidade elevada.",
      "À pequena circulação; tem pequeno calibre e velocidade baixa.",
      "À pequena circulação; tem grande calibre e velocidade elevada.",
      "À grande circulação; tem pequeno calibre e velocidade baixa."
    ],
    "correctIndex": 2,
    "explanation": "A artéria pulmonar liga o coração aos pulmões (pequena circulação) e, pelo calibre e velocidade elevados, tem Re elevado e turbulência mais provável.",
    "distractorAnalysis": [
      "Está incorreta: A artéria pulmonar leva o sangue do coração aos pulmões, o que pertence à pequena circulação.",
      "Está incorreta: Com pequeno calibre e velocidade baixa, Re seria baixo e o regime laminar; a artéria pulmonar é de grande calibre.",
      "Está incorreta: Além de pertencer à pequena circulação, a artéria pulmonar tem grande calibre e velocidade elevada."
    ],
    "nursingApplication": "Ao explicar a um utente com doença respiratória o percurso do sangue, o enfermeiro refere que a artéria pulmonar leva o sangue do coração aos pulmões, na pequena circulação."
  },
  {
    "id": 3134,
    "topicId": 3,
    "question": "Como é controlado, sobretudo, o caudal de sangue que chega a cada território do organismo?",
    "options": [
      "Por alterações rápidas da viscosidade do sangue, consoante a necessidade de cada órgão",
      "Por vasoconstrição e vasodilatação do músculo liso, por ação nervosa e hormonal",
      "Por variações do comprimento dos vasos, que se alongam e encurtam",
      "Por aumentos de velocidade que provocam turbulência controlada"
    ],
    "correctIndex": 1,
    "explanation": "O músculo liso da parede dos vasos contrai ou relaxa, por ação nervosa e hormonal, alterando o raio e, assim, o caudal.",
    "distractorAnalysis": [
      "Está incorreta: A viscosidade depende da composição e da temperatura e não é o mecanismo de controlo do caudal em cada território.",
      "Está incorreta: O controlo faz-se por variação do calibre (raio) dos vasos, e não do seu comprimento.",
      "Está incorreta: O ajuste do caudal faz-se praticamente sem gerar turbulência."
    ],
    "nursingApplication": "Ao observar a palidez de um membro exposto ao frio, o enfermeiro reconhece o efeito da vasoconstrição, que reduz o caudal de sangue na pele."
  },
  {
    "id": 3135,
    "topicId": 3,
    "question": "As arteríolas de um território sofrem vasoconstrição. Qual é o efeito mais provável sobre o caudal de sangue que chega aos capilares desse território?",
    "options": [
      "Aumenta, porque o sangue é obrigado a passar por um vaso mais estreito.",
      "Diminui, porque o raio diminui e a resistência ao escoamento aumenta.",
      "Mantém-se, porque o caudal depende apenas do coração.",
      "Aumenta, porque a resistência hidráulica diminui com o raio."
    ],
    "correctIndex": 1,
    "explanation": "A vasoconstrição diminui o raio das arteríolas, aumenta a resistência e reduz o caudal para os capilares a jusante.",
    "distractorAnalysis": [
      "Está incorreta: O estreitamento aumenta a resistência e reduz o caudal; só a velocidade num ponto de estreitamento é que aumenta.",
      "Está incorreta: O raio dos vasos altera a resistência e, com ela, o caudal em cada território.",
      "Está incorreta: A resistência hidráulica aumenta quando o raio diminui."
    ],
    "nursingApplication": "Ao aplicar gelo numa entorse, o enfermeiro conta com a vasoconstrição local, que reduz o caudal de sangue que chega aos capilares dessa zona."
  },
  {
    "id": 3136,
    "topicId": 3,
    "question": "Durante o esforço, as arteríolas dos músculos esqueléticos dilatam-se. Qual é o efeito qualitativo sobre a resistência e o caudal nesse território?",
    "options": [
      "A resistência aumenta e o caudal aumenta.",
      "A resistência diminui e o caudal diminui.",
      "A resistência aumenta e o caudal diminui.",
      "A resistência diminui e o caudal aumenta."
    ],
    "correctIndex": 3,
    "explanation": "A vasodilatação aumenta o raio das arteríolas, reduz a resistência e permite maior caudal para o músculo.",
    "distractorAnalysis": [
      "Está incorreta: Se a resistência aumentasse, o caudal diminuiria; com o raio maior, a resistência diminui.",
      "Está incorreta: Com menor resistência e a mesma diferença de pressão, o caudal aumenta e não diminui.",
      "Está incorreta: A dilatação aumenta o raio, o que reduz a resistência."
    ],
    "nursingApplication": "Num utente que faz exercício, o enfermeiro nota a pele corada e quente, sinal de vasodilatação com maior fluxo de sangue nos tecidos."
  },
  {
    "id": 3137,
    "topicId": 3,
    "question": "Ao longo do sistema circulatório, em que tipo de vasos é máxima a pressão do sangue?",
    "options": [
      "Nas arteríolas",
      "Nos capilares",
      "Nas artérias",
      "Nas vénulas"
    ],
    "correctIndex": 2,
    "explanation": "A pressão é máxima nas artérias e vai diminuindo ao longo do circuito, até valores muito baixos nas vénulas e nas veias.",
    "distractorAnalysis": [
      "Está incorreta: A pressão já diminuiu nas arteríolas em relação às artérias.",
      "Está incorreta: A pressão nos capilares é baixa.",
      "Está incorreta: A pressão nas vénulas é ainda mais baixa do que nos capilares."
    ],
    "nursingApplication": "Ao medir a pressão arterial na artéria braquial, o enfermeiro avalia a pressão no tipo de vasos em que ela é mais elevada, as artérias."
  },
  {
    "id": 3138,
    "topicId": 3,
    "question": "Qual das sequências ordena corretamente os vasos por ordem decrescente de pressão do sangue?",
    "options": [
      "Veias, vénulas, capilares, arteríolas, artérias",
      "Artérias, capilares, arteríolas, vénulas, veias",
      "Artérias, arteríolas, capilares, vénulas, veias",
      "Arteríolas, artérias, capilares, veias, vénulas"
    ],
    "correctIndex": 2,
    "explanation": "A pressão diminui ao longo do circuito: máxima nas artérias, menor nas arteríolas, baixa nos capilares, mais baixa nas vénulas e mínima nas veias.",
    "distractorAnalysis": [
      "Está incorreta: Inverte a ordem; a pressão é máxima nas artérias e mínima nas veias.",
      "Está incorreta: As arteríolas vêm antes dos capilares no percurso, com pressão superior.",
      "Está incorreta: As artérias têm pressão superior à das arteríolas e as vénulas superior à das veias."
    ],
    "nursingApplication": "Ao puncionar uma veia periférica, o enfermeiro tem em conta que a pressão venosa é muito inferior à arterial, o que influencia o risco de hemorragia."
  },
  {
    "id": 3139,
    "topicId": 3,
    "question": "Porque consegue o sangue avançar das artérias, através dos capilares, até às veias?",
    "options": [
      "Porque a pressão é igual em todos os vasos e o sangue se espalha.",
      "Porque a pressão aumenta ao longo do circuito, das artérias para as veias, mantendo o sangue em movimento.",
      "Porque a pressão diminui ao longo do circuito, criando diferença de pressão entre extremos.",
      "Porque a resistência ao escoamento é nula em todos os vasos."
    ],
    "correctIndex": 2,
    "explanation": "O escoamento mantém-se porque existe uma diferença de pressão entre os extremos do circuito, que vence a resistência dos vasos.",
    "distractorAnalysis": [
      "Está incorreta: Com pressão igual não haveria diferença de pressão que mantivesse o escoamento.",
      "Está incorreta: A pressão diminui, e não aumenta, das artérias para as veias.",
      "Está incorreta: Os vasos oferecem resistência, máxima nas arteríolas; é a diferença de pressão que a vence."
    ],
    "nursingApplication": "Ao avaliar um utente com hipotensão grave, o enfermeiro sabe que uma diminuição da diferença de pressão compromete a perfusão dos tecidos."
  },
  {
    "id": 3140,
    "topicId": 3,
    "question": "Em que tipo de vasos a resistência ao escoamento é máxima, sendo por isso aí que a vasoconstrição e a vasodilatação mais alteram o caudal?",
    "options": [
      "Na aorta",
      "Nas veias cavas",
      "Na artéria pulmonar",
      "Nas arteríolas"
    ],
    "correctIndex": 3,
    "explanation": "A resistência é máxima nas arteríolas, pelo que pequenas variações do seu calibre, por contração do músculo liso, alteram muito o caudal.",
    "distractorAnalysis": [
      "Está incorreta: A aorta tem grande calibre e oferece pouca resistência ao escoamento.",
      "Está incorreta: As veias cavas têm grande calibre e oferecem pouca resistência.",
      "Está incorreta: A artéria pulmonar tem grande calibre e oferece pouca resistência."
    ],
    "nursingApplication": "Ao administrar um vasodilatador prescrito, o enfermeiro vigia a pressão arterial do utente, porque a dilatação das arteríolas reduz a resistência ao escoamento."
  },
  {
    "id": 3141,
    "topicId": 3,
    "question": "O sistema circulatório ajusta o caudal sobretudo por vasoconstrição e vasodilatação. Qual é a vantagem relativamente a aumentar a velocidade do sangue?",
    "options": [
      "Produz turbilhões úteis, que misturam o sangue e aumentam as trocas nos tecidos.",
      "Aumenta a viscosidade do sangue de forma controlada.",
      "Altera o caudal praticamente sem gerar turbulência, poupando energia.",
      "Dispensa a ação do músculo liso e do sistema nervoso."
    ],
    "correctIndex": 2,
    "explanation": "Variando o calibre dos vasos, o organismo ajusta o caudal quase sem turbulência, mantendo o regime laminar, que gasta menos energia.",
    "distractorAnalysis": [
      "Está incorreta: Os turbilhões são um inconveniente energético, e a vasomotricidade praticamente não os gera.",
      "Está incorreta: A vasomotricidade altera o calibre dos vasos e não a viscosidade.",
      "Está incorreta: A vasomotricidade depende do músculo liso, controlado por ação nervosa e hormonal."
    ],
    "nursingApplication": "Quando a pele de um utente cora com o calor, o enfermeiro reconhece um ajuste do caudal cutâneo por vasodilatação, feito sem alterar o regime laminar dos pequenos vasos."
  },
  {
    "id": 3142,
    "topicId": 3,
    "question": "Em qual dos segmentos do sistema circulatório a pressão pode atingir valores negativos?",
    "options": [
      "Nas artérias",
      "Nas veias",
      "Nas arteríolas",
      "Nos capilares"
    ],
    "correctIndex": 1,
    "explanation": "A pressão diminui ao longo do circuito e, nas veias, pode ser negativa.",
    "distractorAnalysis": [
      "Está incorreta: A pressão arterial é a mais alta do circuito.",
      "Está incorreta: Nas arteríolas a pressão baixou em relação às artérias, mas mantém-se positiva.",
      "Está incorreta: Nos capilares a pressão é baixa, mas não negativa."
    ],
    "nursingApplication": "Ao elevar o braço de um utente com edema, o enfermeiro tem presente que a pressão nas veias é muito baixa e que a gravidade influencia o retorno venoso."
  },
  {
    "id": 3143,
    "topicId": 3,
    "question": "O que se entende por caudal crítico de um vaso?",
    "options": [
      "O caudal máximo que o coração consegue bombear em condições normais, em repouso e sem esforço",
      "O caudal mínimo necessário para que o escoamento se mantenha laminar",
      "O caudal a que a viscosidade do sangue se anula",
      "O caudal a partir do qual Re atinge o valor crítico e o regime passa a turbulento"
    ],
    "correctIndex": 3,
    "explanation": "O caudal crítico é o caudal a partir do qual Re atinge o valor crítico, e o escoamento deixa de ser laminar e torna-se turbulento.",
    "distractorAnalysis": [
      "Está incorreta: O caudal crítico refere-se ao regime de escoamento no vaso e não à capacidade de bombeamento do coração.",
      "Está incorreta: Abaixo do caudal crítico o regime é laminar; ao ultrapassá-lo passa a turbulento, e não o contrário.",
      "Está incorreta: A viscosidade é uma propriedade do fluido e não se anula com o caudal."
    ],
    "nursingApplication": "Perante um sopro detetado na auscultação, o enfermeiro reconhece que pode traduzir turbulência, que surge quando o caudal ultrapassa o caudal crítico do vaso."
  },
  {
    "id": 3144,
    "topicId": 3,
    "question": "Como varia o caudal crítico de um vaso com o seu raio?",
    "options": [
      "Varia diretamente com o raio: quanto maior o raio, maior o caudal crítico.",
      "Varia inversamente com o raio: quanto maior o raio, menor o caudal crítico.",
      "Não depende do raio, apenas da viscosidade do sangue.",
      "Varia com o quadrado do raio, tal como a área da secção do vaso."
    ],
    "correctIndex": 0,
    "explanation": "O caudal crítico é diretamente proporcional ao raio do vaso: vasos menores têm caudal crítico menor.",
    "distractorAnalysis": [
      "Está incorreta: É o contrário: nos vasos maiores é preciso um caudal maior para atingir o Re crítico.",
      "Está incorreta: Re depende do diâmetro do vaso, pelo que o caudal crítico varia com o raio.",
      "Está incorreta: A relação é direta com o raio e não com o seu quadrado."
    ],
    "nursingApplication": "Ao saber que vasos mais finos têm caudal crítico menor, o enfermeiro compreende porque um estreitamento arterial pode originar um sopro audível na auscultação."
  },
  {
    "id": 3145,
    "topicId": 3,
    "question": "Uma artéria tem caudal crítico de 20 cm³/s e conduz 14 cm³/s, em regime laminar. Uma placa reduz para metade o raio de um segmento, mantendo-se o mesmo sangue e o mesmo caudal. O que se prevê nesse segmento?",
    "options": [
      "Caudal crítico de 40 cm³/s; o regime mantém-se laminar",
      "Caudal crítico de 10 cm³/s; o regime tende a turbulento",
      "Caudal crítico de 1,25 cm³/s; o regime tende a turbulento",
      "Caudal crítico de 20 cm³/s; o regime mantém-se laminar"
    ],
    "correctIndex": 1,
    "explanation": "O caudal crítico é diretamente proporcional ao raio: com metade do raio passa a 20 / 2 = 10 cm³/s. Como o caudal de 14 cm³/s excede este valor, o regime tende a passar a turbulento no segmento estreitado.",
    "solution": [
      "Dados: caudal crítico inicial = 20 cm³/s; D = 14 cm³/s; raio do segmento = metade do inicial",
      "Fórmula: o caudal crítico é diretamente proporcional ao raio",
      "Substituição: caudal crítico no segmento = 20 × 1/2 = 10 cm³/s; 14 cm³/s > 10 cm³/s",
      "Resultado: Caudal crítico de 10 cm³/s; o regime tende a turbulento"
    ],
    "distractorAnalysis": [
      "Está incorreta: inverte a relação; um raio menor dá um caudal crítico menor, e não maior.",
      "Está incorreta: dividiu por 2⁴ = 16, como na lei de Poiseuille; o caudal crítico varia diretamente com o raio e não com R⁴.",
      "Está incorreta: o caudal crítico depende do raio do vaso, pelo que muda quando o raio passa a metade."
    ],
    "nursingApplication": "Na medição da pressão arterial, a braçadeira estreita a artéria de modo semelhante, baixando o caudal crítico local e favorecendo a turbulência que gera os sons de Korotkoff."
  },
  {
    "id": 3146,
    "topicId": 3,
    "question": "Considerando o mesmo sangue em todos os vasos, qual dos seguintes tem o menor caudal crítico?",
    "options": [
      "Uma arteríola",
      "A aorta",
      "A artéria pulmonar",
      "Uma veia cava"
    ],
    "correctIndex": 0,
    "explanation": "Como o caudal crítico varia diretamente com o raio, a arteríola, de menor raio, tem o menor caudal crítico.",
    "distractorAnalysis": [
      "Está incorreta: A aorta tem o maior raio e, portanto, o maior caudal crítico.",
      "Está incorreta: A artéria pulmonar é de grande calibre e tem caudal crítico elevado.",
      "Está incorreta: As veias cavas são de grande calibre e têm caudal crítico elevado."
    ],
    "nursingApplication": "Na microcirculação, de vasos muito finos, o enfermeiro tem presente que o escoamento se mantém laminar e lento, o que permite as trocas com os tecidos."
  },
  {
    "id": 3147,
    "topicId": 3,
    "question": "Dois vasos conduzem o mesmo sangue. O vaso A tem raio de 0,2 cm e caudal crítico de 8 cm³/s. O vaso B tem raio de 0,6 cm. Qual é o caudal crítico do vaso B?",
    "figure": {
      "type": "tube",
      "items": [
        {
          "name": "Vaso A",
          "r": 0.33,
          "inside": [
            "r = 0,2 cm",
            "Caudal crítico = 8 cm³/s"
          ]
        },
        {
          "name": "Vaso B",
          "r": 1.0,
          "inside": [
            "r = 0,6 cm",
            "Caudal crítico = ?"
          ]
        }
      ],
      "alt": "Dois vasos que conduzem o mesmo sangue: o vaso A, de raio 0,2 cm, tem caudal crítico de 8 cm³/s; o vaso B, de raio 0,6 cm, tem caudal crítico desconhecido."
    },
    "options": [
      "72 cm³/s",
      "648 cm³/s",
      "2,7 cm³/s",
      "24 cm³/s"
    ],
    "correctIndex": 3,
    "explanation": "O raio de B é 3 vezes o de A; como o caudal crítico varia diretamente com o raio, o de B é 3 vezes o de A.",
    "solution": [
      "Dados: raio de A = 0,2 cm; caudal crítico de A = 8 cm³/s; raio de B = 0,6 cm.",
      "Fórmula: o caudal crítico é diretamente proporcional ao raio, logo D<sub>crít,B</sub> / D<sub>crít,A</sub> = r<sub>B</sub> / r<sub>A</sub>.",
      "Substituição: r<sub>B</sub> / r<sub>A</sub> = 0,6 / 0,2 = 3; D<sub>crít,B</sub> = 3 × 8.",
      "Resultado: 24 cm³/s"
    ],
    "distractorAnalysis": [
      "Está incorreta: Considera o caudal crítico proporcional ao quadrado do raio (3² × 8).",
      "Está incorreta: Considera o caudal crítico proporcional à quarta potência do raio (3⁴ × 8), como na lei de Poiseuille.",
      "Está incorreta: Divide por 3 em vez de multiplicar; o vaso de maior raio tem maior caudal crítico."
    ],
    "nursingApplication": "Ao comparar vasos de calibres diferentes, o enfermeiro percebe que o mesmo caudal pode ser laminar num vaso largo e turbulento num vaso fino."
  },
  {
    "id": 3148,
    "topicId": 3,
    "question": "O regime de um vaso passa a turbulento quando Re = v · ρ · d / η atinge o valor crítico. Num utente com anemia, o sangue é menos viscoso (admite-se a mesma densidade). Para o mesmo vaso, em que um caudal maior corresponde a uma velocidade média maior, o caudal crítico:",
    "options": [
      "aumenta, porque o sangue menos viscoso escoa com muito maior facilidade no vaso.",
      "diminui, porque Re atinge o valor crítico com uma velocidade menor.",
      "não se altera, porque só depende do raio do vaso.",
      "aumenta, porque a viscosidade é o numerador de Re."
    ],
    "correctIndex": 1,
    "explanation": "Como Re = v · ρ · d / η, com η menor Re atinge o valor crítico a uma velocidade menor; no mesmo vaso, uma velocidade menor corresponde a um caudal menor, pelo que o caudal crítico diminui.",
    "distractorAnalysis": [
      "Está incorreta: Uma menor viscosidade faz subir Re para a mesma velocidade, pelo que o valor crítico é atingido mais cedo.",
      "Está incorreta: o caudal crítico varia com o raio, mas, como Re depende também da viscosidade, varia igualmente com η.",
      "Está incorreta: A viscosidade é o denominador de Re e não o numerador."
    ],
    "nursingApplication": "Ao interpretar o hemograma de um utente anémico, o enfermeiro relaciona o hematócrito baixo com um sangue menos viscoso, que tende a passar a regime turbulento com caudais menores."
  },
  {
    "id": 3149,
    "topicId": 3,
    "question": "Numa artéria, o caudal crítico é de 25 cm³/s. Num utente, o caudal passa de 15 cm³/s, em repouso, para 40 cm³/s, durante um esforço. Qual é o regime de escoamento nos dois casos?",
    "options": [
      "Laminar a 15 cm³/s e laminar a 40 cm³/s",
      "Turbulento a 15 cm³/s e laminar a 40 cm³/s",
      "Turbulento a 15 cm³/s e turbulento a 40 cm³/s",
      "Laminar a 15 cm³/s e turbulento a 40 cm³/s"
    ],
    "correctIndex": 3,
    "explanation": "Abaixo do caudal crítico (15 cm³/s < 25 cm³/s) o regime é laminar; acima dele (40 cm³/s > 25 cm³/s) o regime passa a turbulento.",
    "distractorAnalysis": [
      "Está incorreta: A 40 cm³/s o caudal ultrapassa o caudal crítico de 25 cm³/s e o regime passa a turbulento.",
      "Está incorreta: Inverte a situação: abaixo do caudal crítico o regime é laminar e acima é turbulento.",
      "Está incorreta: A 15 cm³/s o caudal está abaixo do caudal crítico, logo o regime é laminar."
    ],
    "nursingApplication": "Ao recuperar um utente após esforço, o enfermeiro sabe que a turbulência causada pelo aumento do caudal é transitória e o regime laminar é reposto com o repouso."
  },
  {
    "id": 3150,
    "topicId": 3,
    "question": "Os vasos A e B conduzem o mesmo sangue, ambos com um caudal de 30 cm³/s. O vaso A tem caudal crítico de 45 cm³/s e o vaso B de 15 cm³/s. Qual é a previsão correta?",
    "figure": {
      "type": "tube",
      "items": [
        {
          "name": "Vaso A",
          "r": 1.0,
          "flow": "D = 30 cm³/s",
          "inside": [
            "Caudal crítico = 45 cm³/s"
          ]
        },
        {
          "name": "Vaso B",
          "r": 0.33,
          "flow": "D = 30 cm³/s",
          "inside": [
            "Caudal crítico = 15 cm³/s"
          ]
        }
      ],
      "alt": "Dois vasos que conduzem o mesmo sangue com um caudal de 30 cm³/s: o vaso A, largo, tem caudal crítico de 45 cm³/s; o vaso B, estreito, tem caudal crítico de 15 cm³/s."
    },
    "options": [
      "O escoamento é laminar em A e turbulento em B.",
      "O escoamento é turbulento em A e laminar em B.",
      "O escoamento é laminar nos dois vasos.",
      "O escoamento é turbulento nos dois vasos."
    ],
    "correctIndex": 0,
    "explanation": "Em A, 30 cm³/s é inferior ao caudal crítico (45 cm³/s) e o regime é laminar; em B, 30 cm³/s excede o caudal crítico (15 cm³/s) e o regime é turbulento.",
    "distractorAnalysis": [
      "Está incorreta: Em A o caudal está abaixo do crítico, logo é laminar; em B está acima, logo é turbulento.",
      "Está incorreta: Em B o caudal de 30 cm³/s ultrapassa o caudal crítico de 15 cm³/s, pelo que o regime é turbulento.",
      "Está incorreta: Em A o caudal de 30 cm³/s está abaixo do caudal crítico de 45 cm³/s, pelo que o regime é laminar."
    ],
    "nursingApplication": "Ao auscultar uma artéria estreitada por aterosclerose, o enfermeiro pode ouvir um sopro porque o mesmo caudal ultrapassa mais facilmente o caudal crítico de um vaso fino."
  },
  {
    "id": 3151,
    "topicId": 3,
    "question": "Numa enfermaria, uma perfusão é caracterizada pelo volume de soro que atravessa o cateter em cada hora. Que grandeza está a ser descrita e qual a sua expressão?",
    "options": [
      "A velocidade do fluido, v = V / t, que se exprime em cm/s",
      "A viscosidade, η = V / t, que se exprime em poise",
      "A diferença de pressão, ΔP = V / t, que se exprime em dyn/cm²",
      "O caudal, D = V / t, que se pode exprimir em mL/h"
    ],
    "correctIndex": 3,
    "explanation": "O caudal (ou débito) é o volume de líquido que atravessa uma secção do condutor por unidade de tempo, D = V / t. Por isso se exprime em unidades de volume sobre tempo, como mL/h ou cm³/s.",
    "distractorAnalysis": [
      "Está incorreta: a velocidade relaciona um deslocamento com o tempo (cm/s); volume por unidade de tempo é o caudal.",
      "Está incorreta: a viscosidade mede a resistência ao escoamento e não resulta do quociente entre um volume e um tempo.",
      "Está incorreta: a diferença de pressão é uma força por unidade de área, não um volume por unidade de tempo."
    ],
    "nursingApplication": "Ao programar uma bomba infusora em mL/h, o enfermeiro está a definir o caudal da perfusão, conforme a prescrição."
  },
  {
    "id": 3152,
    "topicId": 3,
    "question": "Uma bomba seringa administra 45 cm³ de soro em 15 min. Qual o caudal em mL/min?",
    "options": [
      "675 mL/min",
      "3 mL/min",
      "0,333 mL/min",
      "180 mL/min"
    ],
    "correctIndex": 1,
    "explanation": "Como 1 cm³ = 1 mL, o volume é 45 mL e o caudal é o quociente entre o volume e o tempo. O resultado vem em mL/min porque o tempo foi dado em minutos.",
    "solution": [
      "Dados: V = 45 cm³ = 45 mL (1 cm³ = 1 mL); t = 15 min",
      "Fórmula: D = V / t",
      "Substituição: D = 45 / 15",
      "Resultado: 3 mL/min"
    ],
    "distractorAnalysis": [
      "Está incorreta: multiplicou o volume pelo tempo (45 × 15); o caudal obtém-se dividindo o volume pelo tempo.",
      "Está incorreta: inverteu o quociente (15 / 45); o caudal é V / t e não t / V.",
      "Está incorreta: converteu 15 min em 0,25 h e dividiu (45 / 0,25 = 180), obtendo mL/h, mas indicou a unidade mL/min."
    ],
    "nursingApplication": "Numa bomba seringa, o volume e o tempo de administração permitem verificar se o caudal programado corresponde ao prescrito."
  },
  {
    "id": 3153,
    "topicId": 3,
    "question": "Foi prescrito um soro de 600 mL para ser administrado em 8 h. Qual o caudal da perfusão?",
    "options": [
      "75 mL/h",
      "4800 mL/h",
      "0,0133 mL/h",
      "1,25 mL/h"
    ],
    "correctIndex": 0,
    "explanation": "O caudal é o volume dividido pelo tempo, D = V / t. Com o tempo em horas, o caudal sai em mL/h.",
    "solution": [
      "Dados: V = 600 mL; t = 8 h",
      "Fórmula: D = V / t",
      "Substituição: D = 600 / 8",
      "Resultado: 75 mL/h"
    ],
    "distractorAnalysis": [
      "Está incorreta: multiplicou o volume pelo tempo (600 × 8); o caudal é o volume dividido pelo tempo.",
      "Está incorreta: inverteu a fração (8 / 600); o volume fica no numerador.",
      "Está incorreta: dividiu 75 mL/h por 60 como se fosse converter para mL/min, mas o resultado pedido está em mL/h (1,25 seria o valor em mL/min)."
    ],
    "nursingApplication": "A velocidade de perfusão de um soro é programada conforme prescrição e protocolo da instituição, em mL/h."
  },
  {
    "id": 3154,
    "topicId": 3,
    "question": "Uma perfusão decorre com um caudal de 120 mL/h. Qual é esse caudal em mL/min?",
    "options": [
      "7200 mL/min",
      "0,5 mL/min",
      "2 mL/min",
      "1,2 mL/min"
    ],
    "correctIndex": 2,
    "explanation": "Numa hora passam 120 mL e uma hora tem 60 min, pelo que em cada minuto passam 120 / 60 mL.",
    "solution": [
      "Dados: D = 120 mL/h",
      "Conversão: 1 h = 60 min",
      "Substituição: D = 120 mL / 60 min",
      "Resultado: 2 mL/min"
    ],
    "distractorAnalysis": [
      "Está incorreta: multiplicou por 60 em vez de dividir; 1 h tem 60 min, logo cada minuto corresponde a uma fração da hora.",
      "Está incorreta: inverteu a razão (60 / 120); deve dividir 120 mL por 60 min.",
      "Está incorreta: considerou 1 h = 100 min; uma hora tem 60 min."
    ],
    "nursingApplication": "Converter mL/h em mL/min ajuda a conferir a programação da bomba infusora, conforme prescrição."
  },
  {
    "id": 3155,
    "topicId": 3,
    "question": "Um utente recebe uma perfusão a 80 mL/h durante 3 h 30 min. Que volume foi administrado?",
    "options": [
      "240 mL",
      "280 mL",
      "264 mL",
      "22,9 mL"
    ],
    "correctIndex": 1,
    "explanation": "De D = V / t resulta V = D · t. É preciso exprimir o tempo na mesma unidade do caudal: 30 min = 0,5 h.",
    "solution": [
      "Dados: D = 80 mL/h; t = 3 h 30 min",
      "Conversão: 30 min = 0,5 h, logo t = 3,5 h",
      "Fórmula: V = D · t",
      "Substituição: V = 80 × 3,5",
      "Resultado: 280 mL"
    ],
    "distractorAnalysis": [
      "Está incorreta: ignorou os 30 min e considerou apenas 3 h (80 × 3).",
      "Está incorreta: leu 3 h 30 min como 3,30 h; 30 min correspondem a 0,5 h, logo o tempo é 3,5 h.",
      "Está incorreta: dividiu o caudal pelo tempo (80 / 3,5); o volume obtém-se multiplicando o caudal pelo tempo."
    ],
    "nursingApplication": "Conhecer o volume já perfundido permite ao enfermeiro registar o balanço hídrico do utente."
  },
  {
    "id": 3156,
    "topicId": 3,
    "question": "Restam 350 mL de soro num saco que está a ser administrado a 100 mL/h. Quanto tempo falta para terminar?",
    "options": [
      "3 h 50 min",
      "3 h",
      "3 h 30 min",
      "17 min"
    ],
    "correctIndex": 2,
    "explanation": "De D = V / t resulta t = V / D. O resultado vem em horas porque o caudal está em mL/h, e 0,5 h = 30 min.",
    "solution": [
      "Dados: V = 350 mL; D = 100 mL/h",
      "Fórmula: t = V / D",
      "Substituição: t = 350 / 100 = 3,5 h",
      "Conversão: 0,5 h = 30 min",
      "Resultado: 3 h 30 min"
    ],
    "distractorAnalysis": [
      "Está incorreta: leu 3,5 h como 3 h 50 min; 0,5 h correspondem a 30 min.",
      "Está incorreta: ignorou a parte decimal (0,5 h) do resultado.",
      "Está incorreta: inverteu o quociente (100 / 350 = 0,286 h ≈ 17 min); o tempo é V / D."
    ],
    "nursingApplication": "Estimar o tempo restante de uma perfusão ajuda a planear a vigilância e a preparação do saco seguinte."
  },
  {
    "id": 3157,
    "topicId": 3,
    "question": "Uma seringa debita 2,4 mL/min. Que volume saiu ao fim de 25 min?",
    "options": [
      "10,4 mL",
      "27,4 mL",
      "3600 mL",
      "60 mL"
    ],
    "correctIndex": 3,
    "explanation": "Como D = V / t, vem V = D · t. O caudal e o tempo estão ambos em minutos, pelo que não há conversão a fazer.",
    "solution": [
      "Dados: D = 2,4 mL/min; t = 25 min",
      "Fórmula: V = D · t",
      "Substituição: V = 2,4 × 25",
      "Resultado: 60 mL"
    ],
    "distractorAnalysis": [
      "Está incorreta: dividiu o tempo pelo caudal (25 / 2,4); o volume é o produto do caudal pelo tempo.",
      "Está incorreta: somou o caudal ao tempo; as grandezas multiplicam-se.",
      "Está incorreta: multiplicou o resultado por 60 (60 mL × 60) como se houvesse uma conversão de unidades; caudal e tempo já usam minutos."
    ],
    "nursingApplication": "Verificar o volume já administrado por uma bomba seringa permite confirmar se está de acordo com o caudal programado."
  },
  {
    "id": 3158,
    "topicId": 3,
    "question": "Num registo de enfermagem, quatro valores referem-se a um mesmo sistema de perfusão. Qual deles é um caudal?",
    "options": [
      "20 mL/min",
      "20 cm/s",
      "20 poise",
      "20 dyn/cm²"
    ],
    "correctIndex": 0,
    "explanation": "O caudal é um volume por unidade de tempo (mL/min, mL/h, cm³/s). A velocidade (cm/s) descreve a rapidez com que as partículas avançam, que é outra grandeza.",
    "distractorAnalysis": [
      "Está incorreta: cm/s é uma unidade de velocidade (deslocamento por tempo), não de caudal.",
      "Está incorreta: o poise é a unidade c.g.s. de viscosidade.",
      "Está incorreta: dyn/cm² é uma unidade de pressão (força por área)."
    ],
    "nursingApplication": "Distinguir caudal (mL/h) de velocidade evita erros ao interpretar a programação de uma bomba infusora."
  },
  {
    "id": 3159,
    "topicId": 3,
    "question": "Um saco de 500 mL estava prescrito para 4 h e passa a estar prescrito para 8 h, sem alterar o volume. Que acontece ao caudal?",
    "options": [
      "Duplica, de 125 mL/h para 250 mL/h",
      "Reduz-se para metade, de 125 mL/h para 62,5 mL/h",
      "Mantém-se em 125 mL/h, porque o volume é o mesmo",
      "Reduz-se a um quarto, para 31,3 mL/h"
    ],
    "correctIndex": 1,
    "explanation": "Com V constante, D = V / t é inversamente proporcional a t. Duplicar o tempo reduz o caudal a metade.",
    "solution": [
      "Dados: V = 500 mL; t<sub>1</sub> = 4 h; t<sub>2</sub> = 8 h",
      "Fórmula: D = V / t",
      "Substituição: D<sub>1</sub> = 500 / 4 = 125 mL/h; D<sub>2</sub> = 500 / 8",
      "Resultado: Reduz-se para metade, de 125 mL/h para 62,5 mL/h"
    ],
    "distractorAnalysis": [
      "Está incorreta: com o mesmo volume, um tempo duas vezes maior dá um caudal duas vezes menor.",
      "Está incorreta: o caudal depende do volume e do tempo; ao duplicar o tempo, o caudal altera-se.",
      "Está incorreta: o caudal é inversamente proporcional ao tempo (1/2) e não ao seu quadrado (1/4)."
    ],
    "nursingApplication": "Alargar o tempo de uma perfusão reduz o caudal proporcionalmente, o que deve ser feito conforme prescrição e protocolo da instituição."
  },
  {
    "id": 3160,
    "topicId": 3,
    "question": "Uma bomba tem de administrar 90 mL a um caudal de 1,5 mL/min. Quanto tempo demora?",
    "options": [
      "60 min",
      "135 min",
      "0,0167 min",
      "5400 min"
    ],
    "correctIndex": 0,
    "explanation": "De D = V / t resulta t = V / D. Como o caudal está em mL/min, o tempo vem em minutos.",
    "solution": [
      "Dados: V = 90 mL; D = 1,5 mL/min",
      "Fórmula: t = V / D",
      "Substituição: t = 90 / 1,5",
      "Resultado: 60 min"
    ],
    "distractorAnalysis": [
      "Está incorreta: multiplicou o volume pelo caudal (90 × 1,5); o tempo é V / D.",
      "Está incorreta: inverteu o quociente (1,5 / 90); o volume fica no numerador.",
      "Está incorreta: multiplicou o volume por 60 (90 × 60) em vez de dividir por D; o tempo já sai em minutos."
    ],
    "nursingApplication": "Calcular o tempo de administração permite planear a vigilância do utente durante a perfusão."
  },
  {
    "id": 3161,
    "topicId": 3,
    "question": "Um volume de 180 mL foi perfundido em 45 min. Qual o caudal em mL/h?",
    "options": [
      "4 mL/h",
      "135 mL/h",
      "0,25 mL/h",
      "240 mL/h"
    ],
    "correctIndex": 3,
    "explanation": "Para obter mL/h, o tempo tem de estar em horas: 45 min = 0,75 h. O caudal é então 180 mL a dividir por 0,75 h.",
    "solution": [
      "Dados: V = 180 mL; t = 45 min",
      "Conversão: 45 min = 45 / 60 = 0,75 h",
      "Fórmula: D = V / t",
      "Substituição: D = 180 / 0,75",
      "Resultado: 240 mL/h"
    ],
    "distractorAnalysis": [
      "Está incorreta: dividiu 180 por 45 sem converter os minutos em horas; 4 é o valor em mL/min.",
      "Está incorreta: multiplicou o volume por 0,75 h em vez de dividir.",
      "Está incorreta: inverteu o quociente (45 / 180)."
    ],
    "nursingApplication": "Converter o ritmo observado para mL/h permite compará-lo com o caudal prescrito para a bomba."
  },
  {
    "id": 3162,
    "topicId": 3,
    "question": "Um dispositivo de laboratório debita 0,5 cm³/s. Qual é este caudal em mL/min?",
    "options": [
      "0,00833 mL/min",
      "0,5 mL/min",
      "30 mL/min",
      "1800 mL/min"
    ],
    "correctIndex": 2,
    "explanation": "Como 1 cm³ = 1 mL, são 0,5 mL por segundo. Num minuto há 60 s, por isso passa 60 vezes mais volume.",
    "solution": [
      "Dados: D = 0,5 cm³/s; 1 cm³ = 1 mL",
      "Conversão: 1 min = 60 s",
      "Substituição: D = 0,5 mL/s × 60 s/min",
      "Resultado: 30 mL/min"
    ],
    "distractorAnalysis": [
      "Está incorreta: dividiu por 60 em vez de multiplicar; num minuto passam 60 vezes mais volume que num segundo.",
      "Está incorreta: só converteu cm³ em mL e esqueceu a conversão de segundos em minutos.",
      "Está incorreta: multiplicou por 3600 (conversão de s em h), quando o pedido era min."
    ],
    "nursingApplication": "Passar entre cm³/s e mL/min é útil para interpretar caudais de dispositivos que usam unidades diferentes das da bomba infusora."
  },
  {
    "id": 3163,
    "topicId": 3,
    "question": "Dois sacos de soro estão a ser administrados: A, 600 mL em 5 h; B, 450 mL em 3 h. Qual tem maior caudal?",
    "options": [
      "A, porque tem maior volume para administrar",
      "A, porque a perfusão dura mais tempo no total",
      "Os dois são iguais, porque ambos são soro endovenoso",
      "B, com 150 mL/h, contra 120 mL/h do saco A"
    ],
    "correctIndex": 3,
    "explanation": "Calculando D = V / t, o saco A dá 120 mL/h e o saco B dá 150 mL/h. O que conta é o volume por unidade de tempo.",
    "solution": [
      "Dados: A: 600 mL em 5 h; B: 450 mL em 3 h",
      "Fórmula: D = V / t",
      "Substituição: D<sub>A</sub> = 600 / 5 = 120 mL/h; D<sub>B</sub> = 450 / 3",
      "Resultado: B, com 150 mL/h, contra 120 mL/h do saco A"
    ],
    "distractorAnalysis": [
      "Está incorreta: o caudal depende do volume e do tempo (V / t); o volume total, por si só, não determina o caudal.",
      "Está incorreta: um tempo maior, com volume semelhante, corresponde a um caudal menor, não maior.",
      "Está incorreta: o tipo de soro não define o caudal; calculando V / t obtêm-se valores diferentes (120 e 150 mL/h)."
    ],
    "nursingApplication": "Comparar caudais, e não apenas volumes, permite perceber qual das perfusões exige um ritmo de administração mais rápido."
  },
  {
    "id": 3164,
    "topicId": 3,
    "question": "Uma seringa debita 12 mL/min. Que volume é administrado em 2 min 30 s?",
    "options": [
      "24 mL",
      "27,6 mL",
      "30 mL",
      "4,8 mL"
    ],
    "correctIndex": 2,
    "explanation": "Com D = V / t, vem V = D · t. O tempo tem de estar em minutos: 30 s = 0,5 min, logo t = 2,5 min.",
    "solution": [
      "Dados: D = 12 mL/min; t = 2 min 30 s",
      "Conversão: 30 s = 0,5 min, logo t = 2,5 min",
      "Fórmula: V = D · t",
      "Substituição: V = 12 × 2,5",
      "Resultado: 30 mL"
    ],
    "distractorAnalysis": [
      "Está incorreta: ignorou os 30 s e considerou apenas 2 min (12 × 2).",
      "Está incorreta: leu 2 min 30 s como 2,30 min; 30 s correspondem a 0,5 min, logo t = 2,5 min.",
      "Está incorreta: dividiu o caudal pelo tempo (12 / 2,5); o volume é o produto D · t."
    ],
    "nursingApplication": "Conhecer o volume administrado num curto intervalo ajuda a verificar o funcionamento de uma seringa infusora."
  },
  {
    "id": 3165,
    "topicId": 3,
    "question": "Qual das expressões traduz a lei de Poiseuille para o caudal D de um líquido em regime laminar num tubo cilíndrico (ΔP: diferença de pressão entre os extremos; R: raio; L: comprimento; η: viscosidade)?",
    "options": [
      "D = π · ΔP · R⁴ / (8 · η · L)",
      "D = π · ΔP · R² / (8 · η · L)",
      "D = 8 · η · L / (π · ΔP · R⁴)",
      "D = π · ΔP · R⁴ · η / (8 · L)"
    ],
    "correctIndex": 0,
    "explanation": "O caudal é diretamente proporcional a ΔP e a R⁴, e inversamente proporcional a η e a L. O fator numérico é π / 8.",
    "distractorAnalysis": [
      "Está incorreta: o raio aparece elevado à 4.ª potência e não ao quadrado.",
      "Está incorreta: esta expressão é o inverso do caudal; η e L estão no denominador da lei de Poiseuille.",
      "Está incorreta: a viscosidade está no denominador, pois o caudal diminui quando η aumenta."
    ],
    "nursingApplication": "Reconhecer de que variáveis depende o caudal ajuda a perceber porque é que o calibre do cateter pesa tanto na velocidade de administração."
  },
  {
    "id": 3166,
    "topicId": 3,
    "question": "Um cateter tem diâmetro interno de 2 mm. Que valor se deve usar para R na lei de Poiseuille?",
    "options": [
      "2 mm (o próprio diâmetro)",
      "1 mm (o raio, metade do diâmetro)",
      "4 mm (o dobro do diâmetro)",
      "0,5 mm (um quarto do diâmetro)"
    ],
    "correctIndex": 1,
    "explanation": "Na lei de Poiseuille, R representa o raio do tubo. O raio é metade do diâmetro, pelo que um diâmetro de 2 mm corresponde a R = 1 mm.",
    "distractorAnalysis": [
      "Está incorreta: R é o raio e não o diâmetro; usar 2 mm faria o caudal calculado 16 vezes maior.",
      "Está incorreta: multiplicou o diâmetro por 2 em vez de o dividir por 2.",
      "Está incorreta: dividiu duas vezes por 2; o raio é só metade do diâmetro."
    ],
    "nursingApplication": "Ao comparar calibres de cateteres, é o raio interno que entra no cálculo do caudal, não o diâmetro."
  },
  {
    "id": 3167,
    "topicId": 3,
    "question": "Em qual destas situações a lei de Poiseuille é uma boa aproximação?",
    "options": [
      "Sangue na aorta ascendente durante a sístole, onde a turbulência é mais provável",
      "Sangue numa bifurcação arterial, onde há turbilhões e as linhas de corrente se cruzam",
      "Soro a escoar em regime laminar num tubo de plástico reto, rígido e horizontal",
      "Soro a escoar com tal velocidade num tubo que o corante injetado se dispersaria por mistura"
    ],
    "correctIndex": 2,
    "explanation": "A lei de Poiseuille pressupõe regime laminar e um tubo cilíndrico, horizontal, reto e rígido. Fora destas condições é apenas uma aproximação grosseira ou deixa de ser válida.",
    "distractorAnalysis": [
      "Está incorreta: a lei só vale em regime laminar, e na aorta durante a sístole é mais provável o regime turbulento.",
      "Está incorreta: com turbilhões o regime não é laminar, e a lei pressupõe um tubo reto.",
      "Está incorreta: a dispersão do corante é característica do regime turbulento, onde a lei não se aplica."
    ],
    "nursingApplication": "Num sistema de perfusão com tubo reto e fluxo lento, o modelo de Poiseuille descreve razoavelmente bem a influência do calibre e do comprimento no caudal."
  },
  {
    "id": 3168,
    "topicId": 3,
    "question": "Num cateter, mantendo η, L e R, a diferença de pressão entre os extremos passa para o dobro. O que acontece ao caudal?",
    "options": [
      "Duplica",
      "Quadruplica",
      "Fica 16 vezes maior",
      "Reduz-se a metade"
    ],
    "correctIndex": 0,
    "explanation": "Pela lei de Poiseuille, D é diretamente proporcional a ΔP. Se ΔP duplicar e o resto não mudar, o caudal duplica.",
    "distractorAnalysis": [
      "Está incorreta: o caudal é diretamente proporcional a ΔP, não ao seu quadrado.",
      "Está incorreta: o fator 16 resulta da 4.ª potência do raio, não de ΔP.",
      "Está incorreta: o caudal aumenta com ΔP; só diminuiria se ΔP diminuísse."
    ],
    "nursingApplication": "Um maior gradiente de pressão entre os extremos do cateter traduz-se num caudal proporcionalmente maior, desde que o escoamento se mantenha laminar."
  },
  {
    "id": 3169,
    "topicId": 3,
    "question": "Mantendo o mesmo cateter e a mesma diferença de pressão, passa-se de um líquido para outro com viscosidade 3 vezes maior. O que acontece ao caudal?",
    "options": [
      "Fica 3 vezes maior",
      "Fica 3 vezes menor",
      "Fica 9 vezes menor",
      "Mantém-se, porque o caudal só depende do raio"
    ],
    "correctIndex": 1,
    "explanation": "Na lei de Poiseuille, D é inversamente proporcional a η. Se a viscosidade triplicar, o caudal fica reduzido a um terço.",
    "distractorAnalysis": [
      "Está incorreta: o caudal diminui quando a viscosidade aumenta (são inversamente proporcionais).",
      "Está incorreta: a dependência de η é linear (1/η) e não quadrática.",
      "Está incorreta: o caudal depende também de η, de L e de ΔP, além do raio."
    ],
    "nursingApplication": "Líquidos mais viscosos, como o sangue, atravessam o mesmo cateter com caudal menor do que o soro, a igual diferença de pressão."
  },
  {
    "id": 3170,
    "topicId": 3,
    "question": "Um tubo é substituído por outro com metade do comprimento e, ao mesmo tempo, a diferença de pressão entre os extremos passa para metade (mesmo R e mesmo η). O que acontece ao caudal?",
    "options": [
      "Duplica",
      "Reduz-se a metade",
      "Reduz-se a um quarto",
      "Mantém-se igual"
    ],
    "correctIndex": 3,
    "explanation": "D é proporcional a ΔP / L. Com ΔP e L ambos reduzidos a metade, o quociente não muda e o caudal mantém-se.",
    "distractorAnalysis": [
      "Está incorreta: considerou apenas o efeito do comprimento menor; a redução de ΔP compensa-o.",
      "Está incorreta: considerou apenas a redução de ΔP; o comprimento menor aumenta o caudal e compensa-a.",
      "Está incorreta: multiplicou os dois fatores 1/2 × 1/2, tratando L como diretamente proporcional ao caudal; D é inversamente proporcional a L."
    ],
    "nursingApplication": "Em montagens de infusão, o caudal depende da razão entre o gradiente de pressão e o comprimento do percurso, e não de cada um isoladamente."
  },
  {
    "id": 3171,
    "topicId": 3,
    "question": "Num modelo de uma arteríola, o músculo liso relaxa e o raio do vaso passa para o dobro, mantendo-se ΔP, η e L. Que efeito tem no caudal?",
    "options": [
      "Fica 2 vezes maior",
      "Fica 4 vezes maior",
      "Fica 16 vezes maior",
      "Fica 8 vezes maior"
    ],
    "correctIndex": 2,
    "explanation": "Como D é proporcional a R⁴, duplicar o raio multiplica o caudal por 2⁴ = 16.",
    "solution": [
      "Dados: R<sub>2</sub> = 2 · R<sub>1</sub>",
      "Fórmula: D é proporcional a R⁴",
      "Substituição: D<sub>2</sub> / D<sub>1</sub> = (R<sub>2</sub> / R<sub>1</sub>)⁴ = 2⁴",
      "Resultado: Fica 16 vezes maior"
    ],
    "distractorAnalysis": [
      "Está incorreta: tratou o caudal como proporcional ao raio; é proporcional à 4.ª potência do raio.",
      "Está incorreta: usou R² (2² = 4) em vez de R⁴.",
      "Está incorreta: usou R³ (2³ = 8) em vez de R⁴."
    ],
    "nursingApplication": "Uma pequena dilatação de um vaso por vasodilatação provoca um aumento considerável do caudal sanguíneo."
  },
  {
    "id": 3172,
    "topicId": 3,
    "question": "Um cateter com caudal de 80 mL/min fica parcialmente obstruído e o seu raio útil passa para metade, com ΔP, η e L iguais. Qual passa a ser o caudal?",
    "figure": {
      "type": "tube",
      "items": [
        {
          "name": "Antes",
          "r": 1.0,
          "flow": "D = 80 mL/min",
          "inside": [
            "raio R"
          ]
        },
        {
          "name": "Depois",
          "r": 0.5,
          "flow": "D = ?",
          "inside": [
            "raio R/2"
          ]
        }
      ],
      "alt": "Dois tubos iguais em comprimento: antes, com raio R e caudal de 80 mL/min; depois, com raio R/2 e caudal desconhecido."
    },
    "options": [
      "40 mL/min",
      "20 mL/min",
      "10 mL/min",
      "5 mL/min"
    ],
    "correctIndex": 3,
    "explanation": "Como D é proporcional a R⁴, reduzir o raio a metade divide o caudal por 2⁴ = 16.",
    "solution": [
      "Dados: D<sub>1</sub> = 80 mL/min; R<sub>2</sub> = R<sub>1</sub> / 2",
      "Fórmula: D<sub>2</sub> / D<sub>1</sub> = (R<sub>2</sub> / R<sub>1</sub>)⁴",
      "Substituição: D<sub>2</sub> = 80 × (1/2)⁴ = 80 / 16",
      "Resultado: 5 mL/min"
    ],
    "distractorAnalysis": [
      "Está incorreta: dividiu apenas por 2, tratando o caudal como proporcional ao raio.",
      "Está incorreta: dividiu por 4, usando R² em vez de R⁴.",
      "Está incorreta: dividiu por 8, usando R³ em vez de R⁴."
    ],
    "nursingApplication": "Uma obstrução parcial, mesmo discreta, reduz muito o caudal de um cateter, pelo que se deve vigiar a permeabilidade da via."
  },
  {
    "id": 3173,
    "topicId": 3,
    "question": "Num modelo de laboratório (tubo rígido), o caudal é de 2 mL/min. Troca-se o tubo por outro com o triplo do raio, igual comprimento, o mesmo líquido e a mesma ΔP. Qual é o novo caudal?",
    "options": [
      "162 mL/min",
      "6 mL/min",
      "18 mL/min",
      "54 mL/min"
    ],
    "correctIndex": 0,
    "explanation": "O caudal é proporcional a R⁴, pelo que triplicar o raio multiplica D por 3⁴ = 81.",
    "solution": [
      "Dados: D<sub>1</sub> = 2 mL/min; R<sub>2</sub> = 3 · R<sub>1</sub>",
      "Fórmula: D<sub>2</sub> = D<sub>1</sub> · (R<sub>2</sub> / R<sub>1</sub>)⁴",
      "Substituição: D<sub>2</sub> = 2 × 3⁴ = 2 × 81",
      "Resultado: 162 mL/min"
    ],
    "distractorAnalysis": [
      "Está incorreta: multiplicou por 3, tratando o caudal como proporcional ao raio.",
      "Está incorreta: multiplicou por 9 (3²), usando R² em vez de R⁴.",
      "Está incorreta: multiplicou por 27 (3³), usando R³ em vez de R⁴."
    ],
    "nursingApplication": "Um cateter de maior calibre pode permitir um caudal várias vezes superior, mas a escolha segue a prescrição e o protocolo da instituição."
  },
  {
    "id": 3174,
    "topicId": 3,
    "question": "Ao mudar de tubo, o caudal passou de 5 mL/min para 80 mL/min, mantendo-se ΔP, η e L. Por que fator foi multiplicado o raio?",
    "options": [
      "16",
      "2",
      "4",
      "2,5"
    ],
    "correctIndex": 1,
    "explanation": "O caudal aumentou 80 / 5 = 16 vezes. Como D é proporcional a R⁴, o raio foi multiplicado por 16 elevado a 1/4, isto é, 2 (pois 2⁴ = 16).",
    "solution": [
      "Dados: D<sub>1</sub> = 5 mL/min; D<sub>2</sub> = 80 mL/min",
      "Fórmula: D<sub>2</sub> / D<sub>1</sub> = (R<sub>2</sub> / R<sub>1</sub>)⁴",
      "Substituição: 80 / 5 = 16 = (R<sub>2</sub> / R<sub>1</sub>)⁴, logo R<sub>2</sub> / R<sub>1</sub> = 2",
      "Resultado: 2"
    ],
    "distractorAnalysis": [
      "Está incorreta: o caudal aumentou 16 vezes, mas o raio é elevado à 4.ª potência; 16 seria o fator do raio se D fosse proporcional a R.",
      "Está incorreta: 4² = 16 só seria válido se D fosse proporcional a R².",
      "Está incorreta: 2,5³ ≈ 16 só seria válido se D fosse proporcional a R³."
    ],
    "nursingApplication": "Pequenos aumentos de calibre de um cateter ou de um vaso explicam grandes mudanças de caudal."
  },
  {
    "id": 3175,
    "topicId": 3,
    "question": "Para cateteres do mesmo comprimento, com a mesma diferença de pressão e o mesmo líquido, qual permite maior caudal: um 18G ou um 22G?",
    "options": [
      "O 22G, pois um número G maior corresponde a maior diâmetro interno",
      "O 18G, pois um número G menor corresponde a maior diâmetro e o caudal cresce com R⁴",
      "O 22G, pois um tubo mais fino oferece menor resistência ao escoamento",
      "Os dois permitem o mesmo caudal, pois o comprimento e a ΔP são iguais"
    ],
    "correctIndex": 1,
    "explanation": "Em gauge, quanto menor o número, maior o diâmetro. O 18G tem maior raio e, pela lei de Poiseuille, um caudal muito superior ao do 22G.",
    "distractorAnalysis": [
      "Está incorreta: quanto maior o número G, menor o diâmetro do cateter.",
      "Está incorreta: a resistência aumenta quando o raio diminui (varia com 1/R⁴).",
      "Está incorreta: o raio é determinante, e o caudal depende da 4.ª potência dele."
    ],
    "nursingApplication": "A escolha do calibre do cateter faz-se conforme prescrição e protocolo da instituição, ponderando o caudal necessário e o acesso venoso do utente."
  },
  {
    "id": 3176,
    "topicId": 3,
    "question": "Dois cateteres iguais em comprimento têm raios r<sub>A</sub> = 0,9 mm e r<sub>B</sub> = 0,6 mm. Com a mesma ΔP e o mesmo líquido, o caudal em B é 16 mL/min. Qual é o caudal em A?",
    "figure": {
      "type": "tube",
      "items": [
        {
          "name": "Cateter A",
          "r": 1.0,
          "flow": "D = ?",
          "inside": [
            "r = 0,9 mm"
          ],
          "L": "mesmo L"
        },
        {
          "name": "Cateter B",
          "r": 0.67,
          "flow": "D = 16 mL/min",
          "inside": [
            "r = 0,6 mm"
          ],
          "L": "mesmo L"
        }
      ],
      "alt": "Dois cateteres com o mesmo comprimento: A, de raio 0,9 mm e caudal desconhecido; B, de raio 0,6 mm e caudal de 16 mL/min."
    },
    "options": [
      "24 mL/min",
      "36 mL/min",
      "54 mL/min",
      "81 mL/min"
    ],
    "correctIndex": 3,
    "explanation": "A razão dos raios é 0,9 / 0,6 = 1,5. O caudal é proporcional a R⁴, logo D<sub>A</sub> / D<sub>B</sub> = 1,5⁴ ≈ 5,06.",
    "solution": [
      "Dados: r<sub>A</sub> = 0,9 mm; r<sub>B</sub> = 0,6 mm; D<sub>B</sub> = 16 mL/min",
      "Fórmula: D<sub>A</sub> / D<sub>B</sub> = (r<sub>A</sub> / r<sub>B</sub>)⁴",
      "Substituição: D<sub>A</sub> = 16 × (0,9 / 0,6)⁴ = 16 × 1,5⁴ = 16 × 5,0625",
      "Resultado: 81 mL/min"
    ],
    "distractorAnalysis": [
      "Está incorreta: multiplicou por 1,5, tratando o caudal como proporcional ao raio.",
      "Está incorreta: multiplicou por 1,5² = 2,25, usando R² em vez de R⁴.",
      "Está incorreta: multiplicou por 1,5³ = 3,375, usando R³ em vez de R⁴."
    ],
    "nursingApplication": "Comparar cateteres com a lei de Poiseuille mostra que um aumento moderado do raio interno traz um grande aumento do caudal, mas a escolha segue o protocolo da instituição."
  },
  {
    "id": 3177,
    "topicId": 3,
    "question": "Um cateter de 4 cm permite um caudal de 60 mL/min. Substitui-se por outro de 12 cm, com o mesmo raio, o mesmo líquido e a mesma ΔP. Qual é o novo caudal?",
    "options": [
      "180 mL/min",
      "6,67 mL/min",
      "20 mL/min",
      "5 mL/min"
    ],
    "correctIndex": 2,
    "explanation": "D é inversamente proporcional a L. Triplicar o comprimento (4 cm para 12 cm) divide o caudal por 3.",
    "solution": [
      "Dados: D<sub>1</sub> = 60 mL/min; L<sub>1</sub> = 4 cm; L<sub>2</sub> = 12 cm",
      "Fórmula: D<sub>2</sub> = D<sub>1</sub> · L<sub>1</sub> / L<sub>2</sub>",
      "Substituição: D<sub>2</sub> = 60 × 4 / 12",
      "Resultado: 20 mL/min"
    ],
    "distractorAnalysis": [
      "Está incorreta: multiplicou o caudal por 3, como se o caudal aumentasse com o comprimento.",
      "Está incorreta: dividiu por 9 (3²), tratando o caudal como inversamente proporcional a L².",
      "Está incorreta: dividiu 60 pelo valor do comprimento (12) em vez de pela razão entre comprimentos (3)."
    ],
    "nursingApplication": "Um acesso mais longo oferece maior resistência ao escoamento, e por isso, a igual calibre, o caudal é menor do que com um cateter curto."
  },
  {
    "id": 3178,
    "topicId": 3,
    "question": "Com o mesmo cateter e a mesma diferença de pressão, o sangue (viscosidade cerca de 3 vezes a da água) escoa com menor caudal do que o soro. Qual a razão, segundo a lei de Poiseuille?",
    "options": [
      "A maior viscosidade do sangue: o caudal é inversamente proporcional a η",
      "A menor viscosidade do sangue: o caudal diminui quando η diminui",
      "A maior densidade do sangue, grandeza que aparece na lei de Poiseuille",
      "A redução do raio do cateter quando o líquido é mais viscoso"
    ],
    "correctIndex": 0,
    "explanation": "Na lei de Poiseuille, D é inversamente proporcional à viscosidade. Com ΔP, R e L iguais, um líquido mais viscoso dá um caudal menor.",
    "distractorAnalysis": [
      "Está incorreta: o sangue é mais viscoso do que o soro e o caudal aumenta quando η diminui.",
      "Está incorreta: a densidade não faz parte da expressão da lei de Poiseuille; é a viscosidade que conta.",
      "Está incorreta: o raio do cateter é o mesmo; o que muda é a viscosidade do líquido."
    ],
    "nursingApplication": "Ao administrar um hemoderivado por um cateter fino, o caudal é menor do que com soro, pelo que o calibre do acesso segue a prescrição e o protocolo da instituição."
  },
  {
    "id": 3179,
    "topicId": 3,
    "question": "Numa artéria, o caudal é de 100 mL/min. Uma placa de ateroma reduz o raio útil do segmento para 3/4 do valor inicial, com ΔP, η e L iguais. Qual passa a ser o caudal?",
    "figure": {
      "type": "tube",
      "items": [
        {
          "name": "Artéria normal",
          "r": 1.0,
          "flow": "D = 100 mL/min",
          "inside": [
            "raio R"
          ]
        },
        {
          "name": "Com placa",
          "r": 0.75,
          "flow": "D = ?",
          "inside": [
            "raio 3R/4"
          ]
        }
      ],
      "alt": "Dois segmentos arteriais com igual comprimento: o normal, de raio R e caudal de 100 mL/min, e o segmento com placa, de raio 3R/4 e caudal desconhecido."
    },
    "options": [
      "75 mL/min",
      "56,3 mL/min",
      "42,2 mL/min",
      "31,6 mL/min"
    ],
    "correctIndex": 3,
    "explanation": "O caudal é proporcional a R⁴. Com o raio a 0,75 do valor inicial, o caudal fica multiplicado por 0,75⁴ ≈ 0,316.",
    "solution": [
      "Dados: D<sub>1</sub> = 100 mL/min; R<sub>2</sub> = 0,75 · R<sub>1</sub>",
      "Fórmula: D<sub>2</sub> = D<sub>1</sub> · (R<sub>2</sub> / R<sub>1</sub>)⁴",
      "Substituição: D<sub>2</sub> = 100 × 0,75⁴ = 100 × 0,3164",
      "Resultado: 31,6 mL/min"
    ],
    "distractorAnalysis": [
      "Está incorreta: multiplicou por 3/4, tratando o caudal como proporcional ao raio.",
      "Está incorreta: multiplicou por (3/4)², usando R² em vez de R⁴.",
      "Está incorreta: multiplicou por (3/4)³, usando R³ em vez de R⁴."
    ],
    "nursingApplication": "Uma placa de ateroma que reduz o calibre de uma artéria diminui o caudal muito mais do que a redução de raio faria supor."
  },
  {
    "id": 3180,
    "topicId": 3,
    "question": "Por ação do músculo liso, o raio de uma arteríola aumenta 20% (ΔP, η e L inalterados). Que efeito tem no caudal?",
    "options": [
      "Passa a ser cerca de 2,07 vezes o inicial",
      "Passa a ser 1,20 vezes o inicial",
      "Passa a ser 1,44 vezes o inicial",
      "Passa a ser 1,73 vezes o inicial"
    ],
    "correctIndex": 0,
    "explanation": "Com R<sub>2</sub> = 1,2 · R<sub>1</sub>, o caudal fica multiplicado por 1,2⁴ ≈ 2,07. Um aumento de 20% no raio mais do que duplica o caudal.",
    "solution": [
      "Dados: R<sub>2</sub> = 1,2 · R<sub>1</sub>",
      "Fórmula: D<sub>2</sub> / D<sub>1</sub> = (R<sub>2</sub> / R<sub>1</sub>)⁴",
      "Substituição: D<sub>2</sub> / D<sub>1</sub> = 1,2⁴ = 2,0736",
      "Resultado: Passa a ser cerca de 2,07 vezes o inicial"
    ],
    "distractorAnalysis": [
      "Está incorreta: tratou o caudal como proporcional ao raio; depende de R⁴.",
      "Está incorreta: usou R² (1,2² = 1,44) em vez de R⁴.",
      "Está incorreta: usou R³ (1,2³ ≈ 1,73) em vez de R⁴."
    ],
    "nursingApplication": "A vasodilatação regula o caudal sanguíneo em cada território, e pequenas variações do raio das arteríolas bastam para o alterar bastante."
  },
  {
    "id": 3181,
    "topicId": 3,
    "question": "Por que razão a vasoconstrição e a vasodilatação, que alteram o raio dos vasos só ligeiramente, conseguem controlar eficazmente o caudal?",
    "options": [
      "O caudal é inversamente proporcional ao raio, pelo que qualquer variação de R o altera",
      "A variação do raio altera também o comprimento do vaso, o que multiplica o efeito",
      "O caudal é proporcional à 4.ª potência do raio, pelo que pequenas variações de R mudam muito D",
      "A variação do raio altera a viscosidade do sangue na mesma proporção"
    ],
    "correctIndex": 2,
    "explanation": "D varia com R⁴. Por exemplo, aumentar o raio 20% já duplica o caudal. Isto torna a vasomotricidade um mecanismo muito eficaz de controlo local.",
    "distractorAnalysis": [
      "Está incorreta: o caudal é diretamente proporcional a R⁴ e não inversamente proporcional a R.",
      "Está incorreta: a vasomotricidade modifica o raio; o comprimento do vaso não é o fator em causa.",
      "Está incorreta: a viscosidade depende da composição e da temperatura do sangue, não do raio do vaso."
    ],
    "nursingApplication": "Saber que o caudal depende de R⁴ ajuda a perceber porque um vaso parcialmente estreitado pode comprometer bastante a perfusão do território que irriga."
  },
  {
    "id": 3182,
    "topicId": 3,
    "question": "Um líquido de viscosidade 0,04 poise escoa em regime laminar num tubo horizontal de raio 0,1 cm e comprimento 8 cm, com ΔP = 640 dyn/cm². Qual o caudal? (π ≈ 3,14)",
    "figure": {
      "type": "tube",
      "items": [
        {
          "name": "Tubo horizontal",
          "r": 0.5,
          "flow": "D = ?",
          "inside": [
            "R = 0,1 cm",
            "η = 0,04 poise",
            "ΔP = 640 dyn/cm²"
          ],
          "L": "L = 8 cm"
        }
      ],
      "alt": "Tubo cilíndrico horizontal de raio 0,1 cm e comprimento 8 cm, com líquido de viscosidade 0,04 poise, diferença de pressão 640 dyn/cm² e caudal desconhecido."
    },
    "options": [
      "1,26 cm³/s",
      "0,0785 cm³/s",
      "7,85 cm³/s",
      "0,628 cm³/s"
    ],
    "correctIndex": 1,
    "explanation": "Aplica-se D = π · ΔP · R⁴ / (8 · η · L) com tudo em unidades c.g.s.; o caudal vem em cm³/s. O raio, e não o diâmetro, é elevado à 4.ª potência.",
    "solution": [
      "Dados: η = 0,04 poise; R = 0,1 cm; L = 8 cm; ΔP = 640 dyn/cm²; π ≈ 3,14",
      "Fórmula: D = π · ΔP · R⁴ / (8 · η · L)",
      "Substituição: D = 3,14 × 640 × 0,1⁴ / (8 × 0,04 × 8) = 0,201 / 2,56",
      "Resultado: 0,0785 cm³/s"
    ],
    "distractorAnalysis": [
      "Está incorreta: usou o diâmetro (0,2 cm) em vez do raio, o que multiplica o resultado por 16.",
      "Está incorreta: elevou o raio ao quadrado em vez de à 4.ª potência.",
      "Está incorreta: esqueceu o fator 8 do denominador (o resultado fica 8 vezes maior)."
    ],
    "nursingApplication": "O cálculo mostra como, num modelo simples de cateter, uma pequena diferença de raio muda o caudal de forma marcada, por entrar na 4.ª potência."
  },
  {
    "id": 3183,
    "topicId": 3,
    "question": "Um cateter fino tem raio 0,5 mm e comprimento 4 cm. Um líquido de viscosidade 0,03 poise escoa em regime laminar com ΔP = 800 dyn/cm². Qual o caudal em cm³/s? (π ≈ 3,14; 1 mm = 0,1 cm)",
    "figure": {
      "type": "tube",
      "items": [
        {
          "name": "Cateter",
          "r": 0.35,
          "flow": "D = ?",
          "inside": [
            "R = 0,5 mm",
            "η = 0,03 poise",
            "ΔP = 800 dyn/cm²"
          ],
          "L": "L = 4 cm"
        }
      ],
      "alt": "Cateter cilíndrico de raio 0,5 mm e comprimento 4 cm, com líquido de viscosidade 0,03 poise, diferença de pressão 800 dyn/cm² e caudal desconhecido."
    },
    "options": [
      "164 cm³/s",
      "0,0164 cm³/s",
      "0,262 cm³/s",
      "0,327 cm³/s"
    ],
    "correctIndex": 1,
    "explanation": "Primeiro converte-se o raio: 0,5 mm = 0,05 cm. Depois aplica-se D = π · ΔP · R⁴ / (8 · η · L) em unidades c.g.s.",
    "solution": [
      "Dados: R = 0,5 mm; L = 4 cm; η = 0,03 poise; ΔP = 800 dyn/cm²; π ≈ 3,14",
      "Conversão: R = 0,5 mm = 0,05 cm",
      "Fórmula: D = π · ΔP · R⁴ / (8 · η · L)",
      "Substituição: D = 3,14 × 800 × 0,05⁴ / (8 × 0,03 × 4) = 0,0157 / 0,96",
      "Resultado: 0,0164 cm³/s"
    ],
    "distractorAnalysis": [
      "Está incorreta: não converteu o raio de mm para cm (usou 0,5 em vez de 0,05 cm).",
      "Está incorreta: usou o diâmetro (0,1 cm) em vez do raio.",
      "Está incorreta: elevou o raio ao cubo em vez de à 4.ª potência."
    ],
    "nursingApplication": "Nos cateteres finos o raio é medido em frações de milímetro, e esquecer a conversão para cm leva a caudais completamente irrealistas."
  },
  {
    "id": 3184,
    "topicId": 3,
    "question": "O cateter B tem o dobro do raio e o dobro do comprimento do cateter A. Com o mesmo líquido e a mesma ΔP, quantas vezes é maior o caudal em B?",
    "options": [
      "16 vezes",
      "4 vezes",
      "8 vezes",
      "32 vezes"
    ],
    "correctIndex": 2,
    "explanation": "O raio duplicado multiplica o caudal por 2⁴ = 16, e o comprimento duplicado divide-o por 2. O efeito conjunto é 16 / 2 = 8.",
    "solution": [
      "Dados: R<sub>B</sub> = 2 · R<sub>A</sub>; L<sub>B</sub> = 2 · L<sub>A</sub>",
      "Fórmula: D<sub>B</sub> / D<sub>A</sub> = (R<sub>B</sub> / R<sub>A</sub>)⁴ · (L<sub>A</sub> / L<sub>B</sub>)",
      "Substituição: D<sub>B</sub> / D<sub>A</sub> = 2⁴ × (1/2) = 16 / 2",
      "Resultado: 8 vezes"
    ],
    "distractorAnalysis": [
      "Está incorreta: considerou só o efeito do raio (2⁴) e esqueceu que o dobro do comprimento reduz o caudal a metade.",
      "Está incorreta: usou R³ (2³ = 8) em vez de R⁴ e depois dividiu por 2; o raio entra com R⁴.",
      "Está incorreta: multiplicou por 2 devido ao comprimento, mas D é inversamente proporcional a L."
    ],
    "nursingApplication": "Em cateteres, um maior comprimento reduz o caudal, mas um raio maior compensa-o com larga vantagem."
  },
  {
    "id": 3185,
    "topicId": 3,
    "question": "Num segmento com resistência hidráulica R<sub>h</sub> constante e escoamento laminar, o caudal triplica. O que acontece à diferença de pressão necessária entre os extremos?",
    "options": [
      "Triplica",
      "Fica 9 vezes maior",
      "Mantém-se, porque R<sub>h</sub> não mudou",
      "Fica reduzida a um terço"
    ],
    "correctIndex": 0,
    "explanation": "Pela relação ΔP = R<sub>h</sub> · D, com R<sub>h</sub> constante a diferença de pressão é diretamente proporcional ao caudal.",
    "distractorAnalysis": [
      "Está incorreta: ΔP = R<sub>h</sub> · D é uma relação linear; não há quadrado.",
      "Está incorreta: como ΔP = R<sub>h</sub> · D, se D triplica com R<sub>h</sub> constante, ΔP também triplica.",
      "Está incorreta: ΔP e D variam no mesmo sentido; com R<sub>h</sub> constante, um caudal maior exige uma ΔP maior."
    ],
    "nursingApplication": "Num sistema de perfusão com a mesma resistência, administrar a um caudal maior exige uma diferença de pressão maior, por exemplo elevando o saco de soro."
  },
  {
    "id": 3186,
    "topicId": 3,
    "question": "Qual das expressões dá a resistência hidráulica R<sub>h</sub> de um tubo cilíndrico, em regime laminar?",
    "options": [
      "R<sub>h</sub> = 8 · η · L / (π · R²)",
      "R<sub>h</sub> = π · R⁴ / (8 · η · L)",
      "R<sub>h</sub> = ΔP · D",
      "R<sub>h</sub> = 8 · η · L / (π · R⁴)"
    ],
    "correctIndex": 3,
    "explanation": "Da lei de Poiseuille e de ΔP = R<sub>h</sub> · D resulta R<sub>h</sub> = 8 · η · L / (π · R⁴): aumenta com η e L e diminui muito com o raio.",
    "distractorAnalysis": [
      "Está incorreta: o raio aparece na 4.ª potência.",
      "Está incorreta: esta é a razão D / ΔP, o inverso da resistência hidráulica.",
      "Está incorreta: a relação correta é ΔP = R<sub>h</sub> · D, logo R<sub>h</sub> = ΔP / D."
    ],
    "nursingApplication": "A resistência hidráulica resume, numa só grandeza, o efeito do raio, do comprimento e da viscosidade sobre o escoamento num vaso ou num cateter."
  },
  {
    "id": 3187,
    "topicId": 3,
    "question": "Em unidades c.g.s. (ΔP em dyn/cm², D em cm³/s, η em poise), em que unidade se exprime a resistência hidráulica?",
    "options": [
      "dyn/cm²",
      "poise/cm³",
      "cm³/s",
      "poise · cm³"
    ],
    "correctIndex": 1,
    "explanation": "R<sub>h</sub> = 8 · η · L / (π · R⁴) tem unidades de poise · cm / cm⁴, ou seja, poise/cm³.",
    "distractorAnalysis": [
      "Está incorreta: é a unidade de pressão, não de resistência hidráulica.",
      "Está incorreta: é a unidade de caudal.",
      "Está incorreta: R<sub>h</sub> = 8 · η · L / (π · R⁴) tem poise·cm / cm⁴ = poise/cm³; o cm³ está no denominador."
    ],
    "nursingApplication": "Perceber as unidades da resistência hidráulica ajuda a verificar se um cálculo de ΔP a partir de R<sub>h</sub> e D está dimensionalmente correto."
  },
  {
    "id": 3188,
    "topicId": 3,
    "question": "Um aluno calcula R<sub>h</sub> = 8 · η · L / (π · R⁴) para um segmento de aorta durante a sístole, onde é mais provável haver turbulência. Que reparo está correto?",
    "options": [
      "A expressão é válida em qualquer regime de escoamento, laminar ou turbulento",
      "A expressão não depende do raio, pelo que não se aplica a artérias",
      "A viscosidade do sangue não pode ser usada, porque a lei só funciona com água",
      "A expressão só é válida em regime laminar, pelo que o resultado não é fiável nessa situação"
    ],
    "correctIndex": 3,
    "explanation": "A resistência hidráulica R<sub>h</sub> = 8 · η · L / (π · R⁴) deriva da lei de Poiseuille e só é válida em regime laminar. Com turbulência, o modelo deixa de descrever bem o escoamento.",
    "distractorAnalysis": [
      "Está incorreta: a expressão de R<sub>h</sub> assenta na lei de Poiseuille, só válida em regime laminar.",
      "Está incorreta: R<sub>h</sub> depende fortemente do raio (R⁴).",
      "Está incorreta: o sangue tem uma viscosidade definida e pode ser usada, desde que o regime seja laminar."
    ],
    "nursingApplication": "Em territórios de grande calibre e velocidade, como a aorta, o regime tende a ser turbulento e os modelos laminares não se aplicam diretamente."
  },
  {
    "id": 3189,
    "topicId": 3,
    "question": "Um tubo é percorrido por um líquido com viscosidade 3 vezes maior, mantendo-se L e R. Que acontece à resistência hidráulica do tubo?",
    "options": [
      "Fica 3 vezes menor",
      "Fica 9 vezes maior",
      "Fica 3 vezes maior",
      "Mantém-se, porque R<sub>h</sub> só depende da geometria do tubo"
    ],
    "correctIndex": 2,
    "explanation": "Em R<sub>h</sub> = 8 · η · L / (π · R⁴), a resistência é diretamente proporcional a η. Triplicar η triplica R<sub>h</sub>.",
    "distractorAnalysis": [
      "Está incorreta: R<sub>h</sub> = 8 · η · L / (π · R⁴) aumenta com η.",
      "Está incorreta: R<sub>h</sub> é proporcional a η, não a η².",
      "Está incorreta: R<sub>h</sub> depende também da viscosidade do líquido."
    ],
    "nursingApplication": "A resistência ao escoamento do sangue aumenta com a viscosidade, o que obriga a uma maior diferença de pressão para manter o mesmo caudal."
  },
  {
    "id": 3190,
    "topicId": 3,
    "question": "Um segmento de vaso é substituído por outro com metade do comprimento e o dobro do raio, para o mesmo líquido. Como varia a resistência hidráulica?",
    "options": [
      "Fica 32 vezes menor",
      "Fica 16 vezes menor",
      "Fica 8 vezes menor",
      "Fica 4 vezes menor"
    ],
    "correctIndex": 0,
    "explanation": "R<sub>h</sub> é proporcional a L / R⁴. Metade do comprimento divide por 2 e o dobro do raio divide por 2⁴ = 16, ou seja, 32 no total.",
    "solution": [
      "Dados: L<sub>2</sub> = L<sub>1</sub> / 2; R<sub>2</sub> = 2 · R<sub>1</sub>",
      "Fórmula: R<sub>h2</sub> / R<sub>h1</sub> = (L<sub>2</sub> / L<sub>1</sub>) · (R<sub>1</sub> / R<sub>2</sub>)⁴",
      "Substituição: R<sub>h2</sub> / R<sub>h1</sub> = (1/2) × (1/2)⁴ = 1/32",
      "Resultado: Fica 32 vezes menor"
    ],
    "distractorAnalysis": [
      "Está incorreta: considerou só o efeito do raio (2⁴ = 16) e esqueceu que o comprimento menor reduz ainda mais R<sub>h</sub>.",
      "Está incorreta: usou R² (2² = 4) em vez de R⁴ e dividiu ainda por 2 pelo comprimento.",
      "Está incorreta: tratou R<sub>h</sub> como inversamente proporcional a R (fator 2) em vez de R⁴, e dividiu ainda por 2 pelo comprimento."
    ],
    "nursingApplication": "Um acesso curto e largo oferece muito menos resistência ao escoamento do que um acesso longo e estreito."
  },
  {
    "id": 3191,
    "topicId": 3,
    "question": "Um vaso tem resistência hidráulica de 400 poise/cm³. O raio dilata-se para o dobro (L e η iguais). Qual passa a ser a resistência hidráulica?",
    "figure": {
      "type": "tube",
      "items": [
        {
          "name": "Antes",
          "r": 0.5,
          "flow": "R<sub>h</sub> = 400 poise/cm³",
          "inside": [
            "raio R"
          ]
        },
        {
          "name": "Depois",
          "r": 1.0,
          "flow": "R<sub>h</sub> = ?",
          "inside": [
            "raio 2R"
          ]
        }
      ],
      "alt": "Dois segmentos de vaso com igual comprimento: antes, com raio R e resistência hidráulica de 400 poise/cm³; depois, com raio 2R e resistência desconhecida."
    },
    "options": [
      "200 poise/cm³",
      "100 poise/cm³",
      "50 poise/cm³",
      "25 poise/cm³"
    ],
    "correctIndex": 3,
    "explanation": "R<sub>h</sub> é inversamente proporcional a R⁴. Com o dobro do raio, R<sub>h</sub> fica dividida por 2⁴ = 16.",
    "solution": [
      "Dados: R<sub>h1</sub> = 400 poise/cm³; R<sub>2</sub> = 2 · R<sub>1</sub>",
      "Fórmula: R<sub>h2</sub> = R<sub>h1</sub> · (R<sub>1</sub> / R<sub>2</sub>)⁴",
      "Substituição: R<sub>h2</sub> = 400 / 2⁴ = 400 / 16",
      "Resultado: 25 poise/cm³"
    ],
    "distractorAnalysis": [
      "Está incorreta: dividiu apenas por 2, tratando R<sub>h</sub> como inversamente proporcional ao raio.",
      "Está incorreta: dividiu por 4, usando R² em vez de R⁴.",
      "Está incorreta: dividiu por 8, usando R³ em vez de R⁴."
    ],
    "nursingApplication": "A vasodilatação diminui muito a resistência ao fluxo, o que permite maior caudal sem grande aumento da pressão."
  },
  {
    "id": 3192,
    "topicId": 3,
    "question": "Num segmento de tubo em regime laminar, a diferença de pressão entre os extremos é de 900 dyn/cm² e o caudal é de 0,45 cm³/s. Qual é a resistência hidráulica?",
    "figure": {
      "type": "tube",
      "items": [
        {
          "name": "Segmento de tubo",
          "r": 0.5,
          "flow": "D = 0,45 cm³/s",
          "inside": [
            "ΔP = 900 dyn/cm²",
            "R<sub>h</sub> = ?"
          ]
        }
      ],
      "alt": "Segmento de tubo com diferença de pressão de 900 dyn/cm², caudal de 0,45 cm³/s e resistência hidráulica desconhecida."
    },
    "options": [
      "2000 poise/cm³",
      "405 poise/cm³",
      "0,0005 poise/cm³",
      "20 poise/cm³"
    ],
    "correctIndex": 0,
    "explanation": "De ΔP = R<sub>h</sub> · D resulta R<sub>h</sub> = ΔP / D, em poise/cm³ se ΔP estiver em dyn/cm² e D em cm³/s.",
    "solution": [
      "Dados: ΔP = 900 dyn/cm²; D = 0,45 cm³/s",
      "Fórmula: R<sub>h</sub> = ΔP / D",
      "Substituição: R<sub>h</sub> = 900 / 0,45",
      "Resultado: 2000 poise/cm³"
    ],
    "distractorAnalysis": [
      "Está incorreta: multiplicou ΔP por D (900 × 0,45); R<sub>h</sub> = ΔP / D.",
      "Está incorreta: inverteu o quociente (D / ΔP).",
      "Está incorreta: leu o caudal como 45 cm³/s em vez de 0,45 cm³/s."
    ],
    "nursingApplication": "A resistência hidráulica pode obter-se a partir da diferença de pressão e do caudal medidos, sem conhecer a geometria do vaso."
  },
  {
    "id": 3193,
    "topicId": 3,
    "question": "Um segmento tem resistência hidráulica de 500 poise/cm³ e é percorrido por um caudal de 0,6 cm³/s em regime laminar. Qual a diferença de pressão entre os extremos?",
    "options": [
      "833 dyn/cm²",
      "300 dyn/cm²",
      "0,0012 dyn/cm²",
      "3000 dyn/cm²"
    ],
    "correctIndex": 1,
    "explanation": "ΔP = R<sub>h</sub> · D: o produto da resistência hidráulica pelo caudal dá a diferença de pressão necessária.",
    "solution": [
      "Dados: R<sub>h</sub> = 500 poise/cm³; D = 0,6 cm³/s",
      "Fórmula: ΔP = R<sub>h</sub> · D",
      "Substituição: ΔP = 500 × 0,6",
      "Resultado: 300 dyn/cm²"
    ],
    "distractorAnalysis": [
      "Está incorreta: dividiu R<sub>h</sub> por D (500 / 0,6); ΔP = R<sub>h</sub> · D.",
      "Está incorreta: dividiu D por R<sub>h</sub> (0,6 / 500), que é o que daria o caudal por unidade de pressão.",
      "Está incorreta: usou D = 6 cm³/s em vez de 0,6 cm³/s (erro de vírgula)."
    ],
    "nursingApplication": "Quanto maior a resistência ao escoamento, maior a diferença de pressão necessária para manter um dado caudal."
  },
  {
    "id": 3194,
    "topicId": 3,
    "question": "Entre os extremos de um segmento com resistência hidráulica de 750 poise/cm³ existe uma diferença de pressão de 1500 dyn/cm² (regime laminar). Qual é o caudal?",
    "options": [
      "1 125 000 cm³/s",
      "0,5 cm³/s",
      "2 cm³/s",
      "750 cm³/s"
    ],
    "correctIndex": 2,
    "explanation": "De ΔP = R<sub>h</sub> · D resulta D = ΔP / R<sub>h</sub>. A mesma ΔP produz um caudal menor se R<sub>h</sub> for maior.",
    "solution": [
      "Dados: R<sub>h</sub> = 750 poise/cm³; ΔP = 1500 dyn/cm²",
      "Fórmula: D = ΔP / R<sub>h</sub>",
      "Substituição: D = 1500 / 750",
      "Resultado: 2 cm³/s"
    ],
    "distractorAnalysis": [
      "Está incorreta: multiplicou ΔP por R<sub>h</sub>; o caudal é ΔP / R<sub>h</sub>.",
      "Está incorreta: inverteu o quociente (R<sub>h</sub> / ΔP).",
      "Está incorreta: subtraiu R<sub>h</sub> a ΔP (1500 − 750) em vez de dividir."
    ],
    "nursingApplication": "Com a resistência hidráulica e a diferença de pressão conhecidas, prevê-se o caudal que se obtém num percurso de escoamento laminar."
  },
  {
    "id": 3195,
    "topicId": 3,
    "question": "Um líquido de viscosidade 0,05 poise escoa em regime laminar num tubo de raio 0,15 cm e comprimento 12 cm. Qual a resistência hidráulica? (π ≈ 3,14)",
    "figure": {
      "type": "tube",
      "items": [
        {
          "name": "Tubo",
          "r": 0.6,
          "inside": [
            "R = 0,15 cm",
            "η = 0,05 poise",
            "R<sub>h</sub> = ?"
          ],
          "L": "L = 12 cm"
        }
      ],
      "alt": "Tubo cilíndrico de raio 0,15 cm e comprimento 12 cm, com líquido de viscosidade 0,05 poise e resistência hidráulica desconhecida."
    },
    "options": [
      "189 poise/cm³",
      "67,9 poise/cm³",
      "377 poise/cm³",
      "3020 poise/cm³"
    ],
    "correctIndex": 3,
    "explanation": "Aplica-se R<sub>h</sub> = 8 · η · L / (π · R⁴) em unidades c.g.s.; o raio, e não o diâmetro, é elevado à 4.ª potência.",
    "solution": [
      "Dados: η = 0,05 poise; R = 0,15 cm; L = 12 cm; π ≈ 3,14",
      "Fórmula: R<sub>h</sub> = 8 · η · L / (π · R⁴)",
      "Substituição: R<sub>h</sub> = 8 × 0,05 × 12 / (3,14 × 0,15⁴) = 4,8 / 0,00159",
      "Resultado: 3020 poise/cm³"
    ],
    "distractorAnalysis": [
      "Está incorreta: usou o diâmetro (0,3 cm) em vez do raio.",
      "Está incorreta: elevou o raio ao quadrado em vez de à 4.ª potência.",
      "Está incorreta: esqueceu o fator 8 do numerador."
    ],
    "nursingApplication": "O cálculo evidencia o peso do raio na resistência hidráulica de um tubo ou de um cateter."
  },
  {
    "id": 3196,
    "topicId": 3,
    "question": "Um líquido de viscosidade 0,04 poise escoa em regime laminar com caudal de 0,02 cm³/s num tubo de raio 0,1 cm e comprimento 5 cm. Qual a diferença de pressão entre os extremos? (π ≈ 3,14)",
    "figure": {
      "type": "tube",
      "items": [
        {
          "name": "Tubo",
          "r": 0.45,
          "flow": "D = 0,02 cm³/s",
          "inside": [
            "R = 0,1 cm",
            "η = 0,04 poise",
            "ΔP = ?"
          ],
          "L": "L = 5 cm"
        }
      ],
      "alt": "Tubo cilíndrico de raio 0,1 cm e comprimento 5 cm, com líquido de viscosidade 0,04 poise, caudal de 0,02 cm³/s e diferença de pressão desconhecida."
    },
    "options": [
      "6,37 dyn/cm²",
      "102 dyn/cm²",
      "1,02 dyn/cm²",
      "254 777 dyn/cm²"
    ],
    "correctIndex": 1,
    "explanation": "Calcula-se primeiro R<sub>h</sub> = 8 · η · L / (π · R⁴) e depois ΔP = R<sub>h</sub> · D.",
    "solution": [
      "Dados: η = 0,04 poise; R = 0,1 cm; L = 5 cm; D = 0,02 cm³/s; π ≈ 3,14",
      "Fórmula: R<sub>h</sub> = 8 · η · L / (π · R⁴); ΔP = R<sub>h</sub> · D",
      "Substituição: R<sub>h</sub> = 8 × 0,04 × 5 / (3,14 × 0,1⁴) ≈ 5096 poise/cm³; ΔP = 5096 × 0,02",
      "Resultado: 102 dyn/cm²"
    ],
    "distractorAnalysis": [
      "Está incorreta: usou o diâmetro (0,2 cm) em vez do raio no cálculo de R<sub>h</sub>.",
      "Está incorreta: elevou o raio ao quadrado em vez de à 4.ª potência no cálculo de R<sub>h</sub>.",
      "Está incorreta: dividiu R<sub>h</sub> por D em vez de multiplicar."
    ],
    "nursingApplication": "Relacionar a resistência de um acesso com o caudal desejado permite perceber a pressão que a infusão exige."
  },
  {
    "id": 3197,
    "topicId": 3,
    "question": "Um mesmo caudal total de sangue atravessa, em sequência, as artérias, as arteríolas e os capilares de um território. Sabendo que ΔP = R<sub>h</sub> · D e que a resistência é máxima nas arteríolas, em que segmento se espera a maior queda de pressão?",
    "options": [
      "Nas artérias, por ser aí que a pressão do sangue é mais elevada",
      "Nos capilares, por ser aí que o escoamento do sangue é mais lento",
      "Nas arteríolas, porque com o mesmo D a queda de pressão é proporcional a R<sub>h</sub>",
      "Em todos por igual, porque o caudal que atravessa cada segmento é o mesmo"
    ],
    "correctIndex": 2,
    "explanation": "Para o mesmo caudal, ΔP = R<sub>h</sub> · D é tanto maior quanto maior a resistência do segmento. Como a resistência é máxima nas arteríolas, é aí que a pressão mais cai, o que ajuda a explicar a passagem de pressões altas nas artérias para pressões baixas nos capilares.",
    "distractorAnalysis": [
      "Está incorreta: ter a pressão mais alta não significa perder mais pressão; a queda depende da resistência do segmento, que nas artérias é baixa.",
      "Está incorreta: a lentidão do escoamento não determina a queda de pressão; com o mesmo caudal, ela é maior onde R<sub>h</sub> é maior, isto é, nas arteríolas.",
      "Está incorreta: com o mesmo caudal, ΔP = R<sub>h</sub> · D só seria igual em todos se as resistências fossem iguais, e não são."
    ],
    "nursingApplication": "Num utente a receber um vasoconstritor prescrito, o enfermeiro vigia a pressão arterial e a perfusão das extremidades, porque a constrição das arteríolas aumenta a resistência ao escoamento."
  },
  {
    "id": 3198,
    "topicId": 3,
    "question": "Dois ramos de um circuito, A e B, estão sujeitos à mesma diferença de pressão, em regime laminar. A resistência hidráulica de A é 4 vezes a de B. Como se compara o caudal em A com o de B?",
    "options": [
      "É um quarto do caudal de B",
      "É 4 vezes o caudal de B",
      "É 16 vezes o caudal de B",
      "É igual ao de B, porque a ΔP é a mesma"
    ],
    "correctIndex": 0,
    "explanation": "Como D = ΔP / R<sub>h</sub> e ΔP é igual, D é inversamente proporcional a R<sub>h</sub>. Com R<sub>h</sub> quatro vezes maior, o caudal é quatro vezes menor.",
    "distractorAnalysis": [
      "Está incorreta: com a mesma ΔP, D = ΔP / R<sub>h</sub> diminui quando R<sub>h</sub> aumenta.",
      "Está incorreta: o fator 16 pertence à dependência de R, não à relação entre D e R<sub>h</sub>.",
      "Está incorreta: com a mesma ΔP, o caudal depende de R<sub>h</sub>."
    ],
    "nursingApplication": "Num ramo com maior resistência passa menos sangue, a igual diferença de pressão."
  },
  {
    "id": 3199,
    "topicId": 3,
    "question": "Na desidratação, a viscosidade do sangue aumenta. Mantendo-se L e R, o que acontece à resistência hidráulica e à ΔP necessária para manter o mesmo caudal?",
    "options": [
      "R<sub>h</sub> diminui e ΔP aumenta",
      "R<sub>h</sub> aumenta e ΔP diminui",
      "Ambas se mantêm, porque dependem apenas do raio",
      "Ambas aumentam"
    ],
    "correctIndex": 3,
    "explanation": "A viscosidade maior aumenta R<sub>h</sub>. Para o mesmo D, ΔP = R<sub>h</sub> · D tem de aumentar, pelo que o coração tem de fazer mais esforço.",
    "distractorAnalysis": [
      "Está incorreta: R<sub>h</sub> = 8 · η · L / (π · R⁴) aumenta com η.",
      "Está incorreta: com ΔP = R<sub>h</sub> · D, se R<sub>h</sub> aumenta e D se mantém, ΔP tem de aumentar.",
      "Está incorreta: R<sub>h</sub> depende de η, de L e de R."
    ],
    "nursingApplication": "Num utente desidratado, a maior viscosidade do sangue aumenta o esforço do coração; a reposição de líquidos é feita conforme prescrição."
  },
  {
    "id": 3200,
    "topicId": 3,
    "question": "Por vasoconstrição, o raio de uma arteríola diminui 20% (L e η inalterados). Por que fator fica multiplicada a resistência hidráulica?",
    "options": [
      "1,25",
      "1,56",
      "Cerca de 2,44",
      "1,95"
    ],
    "correctIndex": 2,
    "explanation": "R<sub>h</sub> é proporcional a 1 / R⁴. Com R<sub>2</sub> = 0,8 · R<sub>1</sub>, vem R<sub>h2</sub> / R<sub>h1</sub> = 1 / 0,8⁴ ≈ 2,44: uma redução de 20% do raio mais do que duplica a resistência.",
    "solution": [
      "Dados: R<sub>2</sub> = 0,8 · R<sub>1</sub>",
      "Fórmula: R<sub>h2</sub> / R<sub>h1</sub> = (R<sub>1</sub> / R<sub>2</sub>)⁴",
      "Substituição: R<sub>h2</sub> / R<sub>h1</sub> = 1 / 0,8⁴ = 1 / 0,4096",
      "Resultado: Cerca de 2,44"
    ],
    "distractorAnalysis": [
      "Está incorreta: usou 1 / 0,8, como se R<sub>h</sub> fosse inversamente proporcional a R.",
      "Está incorreta: usou R² (1 / 0,8² = 1,56) em vez de R⁴.",
      "Está incorreta: usou R³ (1 / 0,8³ ≈ 1,95) em vez de R⁴."
    ],
    "nursingApplication": "A vasoconstrição aumenta a resistência dos vasos de pequeno calibre e é um mecanismo de controlo do caudal local."
  }
];
