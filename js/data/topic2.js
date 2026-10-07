/**
 * BANCO DE QUESTÕES CERTIFICADAS - TÓPICO 2
 * Elasticidade dos Corpos e Resistência dos Materiais
 * Alinhado estritamente com os slides do PowerPoint (1BF - Prof. Paulo Pereira)
 * Foco estrito em Física/Biofísica sem jargão clínico prévio de Enfermagem
 * Total de Questões: 200 (IDs 2001 a 2200)
 */

const TOPIC_2_QUESTIONS = [
  {
    "id": 2001,
    "topicId": 2,
    "question": "Qual é a definição exata de Reologia apresentada no Slide 3 de Biofísica?",
    "options": [
      "Estuda a composição química e o metabolismo oxidativo das mitocôndrias.",
      "Estuda as reações dos corpos a forças deformadoras.",
      "Analisa a propagação de ondas eletromagnéticas de raios X no vácuo.",
      "Mede a atividade elétrica dos neurónios motores periféricos."
    ],
    "correctIndex": 1,
    "explanation": "O Slide 3 define textualmente: 'Reologia: Estuda as reações dos corpos a forças deformadoras'.",
    "distractorAnalysis": [
      "Está incorreta: A respiração celular e metabolismo oxidativo pertencem à bioquímica, não à reologia.",
      "Está incorreta: Propagação de ondas eletromagnéticas é objeto de estudo da ótica e radiação médica.",
      "Está incorreta: A atividade elétrica neural é estudada na neurofisiologia e bioeletrogénese."
    ],
    "nursingApplication": "Permite compreender como os tecidos corporais reagem mecanicamente às forças aplicadas no dia a dia."
  },
  {
    "id": 2002,
    "topicId": 2,
    "question": "O que caracteriza os 'Sólidos indeformáveis' de acordo com o Slide 4 de Biofísica?",
    "options": [
      "Sofrem deformação diretamente proporcional ao quadrado da temperatura.",
      "Deformam-se facilmente como fluidos de alta viscosidade.",
      "Nunca sofrem deformação perante qualquer força aplicada.",
      "Dissipam energia mecânica sob a forma de histerese intensa."
    ],
    "correctIndex": 2,
    "explanation": "O Slide 4 indica categoricamente: 'Sólidos indeformáveis: Nunca sofrem deformação'.",
    "distractorAnalysis": [
      "Está incorreta: Os sólidos indeformáveis não sofrem qualquer deformação, nem térmica nem mecânica.",
      "Está incorreta: Fluidos viscosos são corpos deformáveis com escoamento contínuo (Slide 11).",
      "Está incorreta: A histerese é uma característica exclusiva de corpos viscoelásticos (Slide 19)."
    ],
    "nursingApplication": "Constitui um modelo teórico ideal para simplificar os cálculos de alavancas antes de analisar os tecidos reais."
  },
  {
    "id": 2003,
    "topicId": 2,
    "question": "Na realidade física dos tecidos biológicos humanos, existem sólidos verdadeiramente indeformáveis?",
    "options": [
      "Sim, todos os ossos do corpo humano são perfeitamente indeformáveis.",
      "Sim, o tendão do calcâneo nunca se deforma sob qualquer tensão.",
      "Sim, o dente molar humano é um sólido indeformável infinito.",
      "Não, o sólido indeformável é um modelo teórico; todos os materiais e tecidos reais sofrem deformação quando sujeitos a forças."
    ],
    "correctIndex": 3,
    "explanation": "Conforme esclarecido no Slide 15 ('Sólidos de Euclides: Modelos teóricos indeformáveis'), todos os corpos e materiais reais sofrem algum grau de alteração dimensional perante forças mecânicas suficientes.",
    "distractorAnalysis": [
      "Está incorreta: Os ossos sofrem microdeformações elásticas sob carga diária (Slide 44).",
      "Está incorreta: Os tendões alongam e transmitem tração mecânica com deformação mensurável (Slide 31).",
      "Está incorreta: O esmalte dentário deforma microscopicamente e pode fraturar sob esforço excessivo."
    ],
    "nursingApplication": "Alerta o enfermeiro para o facto de que nenhum tecido biológico é invulnerável a pressões e cargas excessivas."
  },
  {
    "id": 2004,
    "topicId": 2,
    "question": "Qual é o objetivo prático do estudo da Reologia no curso de Enfermagem?",
    "options": [
      "Compreender como os tecidos do corpo (ossos, músculos, cartilagens e pele) respondem a cargas mecânicas, pressões e deformações.",
      "Aprender a calcular a velocidade de saturação do oxigénio na hemoglobina.",
      "Prescrever de forma autónoma fármacos anti-inflamatórios e analgésicos.",
      "Desenhar circuitos elétricos integrados para monitores de sinais vitais."
    ],
    "correctIndex": 0,
    "explanation": "A Reologia fornece a fundamentação física para compreender a elasticidade dos tecidos de suporte, a absorção de impactos articulares e a prevenção de lesões por pressão e deformação cutânea.",
    "distractorAnalysis": [
      "Está incorreta: Saturação de oxigénio é uma temática bioquímica e respiratória, não da reologia mecânica.",
      "Está incorreta: A prescrição farmacológica médica decorre da farmacologia clínica, não da definição da reologia.",
      "Está incorreta: Desenho de circuitos de hardware é da competência da engenharia eletrotécnica e biomédica."
    ],
    "nursingApplication": "Fundamenta as intervenções de posicionamento e alívio de cargas nos tecidos vulneráveis dos utentes."
  },
  {
    "id": 2005,
    "topicId": 2,
    "question": "No âmbito da Reologia (Slide 3), as forças que atuam sobre os corpos são especificamente designadas por:",
    "options": [
      "Forças gravitacionais cósmicas.",
      "Forças deformadoras.",
      "Forças atómicas radioativas.",
      "Forças eletrostáticas de atrito iónico."
    ],
    "correctIndex": 1,
    "explanation": "O Slide 3 explicita que a Reologia analisa as reações dos materiais sob a ação de 'forças deformadoras'.",
    "distractorAnalysis": [
      "Está incorreta: Forças gravitacionais cósmicas regem órbitas planetárias na astrofísica, não a reologia dos materiais.",
      "Está incorreta: Forças radioativas estão ligadas à desintegração do núcleo, não a esforços deformadores mecânicos.",
      "Está incorreta: Forças eletrostáticas microscópicas não definem a denominação funcional dada no Slide 3."
    ],
    "nursingApplication": "Ajuda a focar a atenção nas solicitações mecânicas externas que alteram a forma dos tecidos do corpo."
  },
  {
    "id": 2006,
    "topicId": 2,
    "question": "De acordo com a síntese do Slide 15, o que acontece à distância entre as partículas de um Sólido de Euclides (modelo indeformável)?",
    "options": [
      "Diminui em 50% sob qualquer força compressiva.",
      "Aumenta exponencialmente com o tempo de aplicação da força.",
      "A distância interpartículas é invariável sob qualquer força.",
      "Oscila ciclicamente entre valores positivos e negativos."
    ],
    "correctIndex": 2,
    "explanation": "O Slide 15 define os Sólidos de Euclides como: 'Modelos teóricos indeformáveis; distância interpartículas invariável sob qualquer força'.",
    "distractorAnalysis": [
      "Está incorreta: Se a distância diminuísse, haveria encurtamento dimensional e o sólido seria deformável.",
      "Está incorreta: Aumento contínuo da distância caracterizaria escoamento fluido viscoso, não rigidez indeformável.",
      "Está incorreta: Oscilações de distância caracterizam ondas elásticas ou térmicas, violando a hipótese estática indeformável."
    ],
    "nursingApplication": "Consolida a definição matemática rigorosa de rigidez teórica perfeita."
  },
  {
    "id": 2007,
    "topicId": 2,
    "question": "Por que razão a Reologia dos materiais é indispensável para o estudo do aparelho locomotor humano?",
    "options": [
      "Porque os ossos são constituídos inteiramente por gases perfeitos em expansão.",
      "Porque as articulações humanas nunca suportam qualquer peso durante a vida.",
      "Porque o corpo humano opera no vácuo sem forças externas aplicadas.",
      "Porque os ossos, cartilagens, músculos e tendões sofrem deformações mecânicas contínuas sob as forças da gravidade e da marcha."
    ],
    "correctIndex": 3,
    "explanation": "Durante a marcha e a postura de pé, os ossos suportam compressão e flexão, os tendões sofrem tração e as cartilagens amortecem cargas. O estudo dessas reações deformadoras é a essência da Reologia biomecânica.",
    "distractorAnalysis": [
      "Está incorreta: Os ossos são tecidos sólidos mineralizados compostos e não gases perfeitos.",
      "Está incorreta: As articulações suportam forças que atingem várias vezes o peso corporal total a cada passo.",
      "Está incorreta: O organismo humano atua imerso na atmosfera terrestre sob a atração gravitacional permanente."
    ],
    "nursingApplication": "Permite aos enfermeiros entender os limites biológicos de tolerância mecânica dos tecidos osteomusculares."
  },
  {
    "id": 2008,
    "topicId": 2,
    "question": "Nos Slides 4 e 5, qual é o contraste inicial estabelecido entre os 'Sólidos indeformáveis' e os 'Sólidos de Hooke'?",
    "options": [
      "Os indeformáveis nunca sofrem deformação, enquanto os de Hooke apresentam deformação proporcional à intensidade da tensão.",
      "Os indeformáveis são líquidos e os de Hooke são gases rarefeitos.",
      "Os indeformáveis derretem a 100 ºC e os de Hooke mantêm-se sólidos.",
      "Ambos nunca sofrem deformação sob qualquer tipo de força."
    ],
    "correctIndex": 0,
    "explanation": "O Slide 4 indica que os sólidos indeformáveis 'nunca sofrem deformação', ao passo que o Slide 5 introduz os Sólidos de Hooke como aqueles cuja 'deformação é proporcional à intensidade da tensão'.",
    "distractorAnalysis": [
      "Está incorreta: Ambos são modelos de corpos sólidos, não líquidos ou gases.",
      "Está incorreta: Transições térmicas de fusão não constam da definição reológica dos slides.",
      "Está incorreta: Os sólidos de Hooke sofrem deformação mensurável linear proporcional à tensão aplicada."
    ],
    "nursingApplication": "Diferenciação basilar entre o comportamento infinitamente rígido teórico e o comportamento elástico real."
  },
  {
    "id": 2009,
    "topicId": 2,
    "question": "Quanta energia mecânica é absorvida em deformação estrutural por um sólido puramente indeformável?",
    "options": [
      "Toda a energia mecânica disponível no sistema envolvente.",
      "Zero Joules, porque o corpo nunca sofre qualquer deformação dimensional.",
      "Uma quantidade infinita que se dissipa por histerese térmica.",
      "Metade do seu peso multiplicado pela constante de Hooke."
    ],
    "correctIndex": 1,
    "explanation": "A energia de deformação mecânica depende da variação dimensional sofrida pelo corpo (trabalho da força elástica). Como a deformação é rigorosamente nula, a energia absorvida em deformação é zero.",
    "distractorAnalysis": [
      "Está incorreta: Sem deslocamento relativo das partículas internas, nenhum trabalho interno de deformação é realizado.",
      "Está incorreta: A histerese só ocorre em materiais viscoelásticos que sofrem deformação dependente do tempo (Slide 19).",
      "Está incorreta: Sólidos indeformáveis não possuem constante finita de Hooke."
    ],
    "nursingApplication": "Compreensão de que corpos perfeitamente rígidos transmitem impactos sem amortecimento mecânico."
  },
  {
    "id": 2010,
    "topicId": 2,
    "question": "Quando cessa a aplicação de uma força sobre um sólido perfeitamente indeformável:",
    "options": [
      "O sólido sofre uma deformação plástica permanente tardia.",
      "O sólido contrai-se violentamente até se fragmentar.",
      "Não há qualquer restituição dimensional necessária, pois o corpo nunca foi deformado.",
      "O sólido flui como um fluido viscoso de Newton."
    ],
    "correctIndex": 2,
    "explanation": "Como a forma e as dimensões do sólido indeformável nunca sofreram a menor alteração sob a força aplicada, a cessação da força não envolve qualquer processo de retorno ou recuperação elástica.",
    "distractorAnalysis": [
      "Está incorreta: Sólidos indeformáveis nunca acusam deformação plástica.",
      "Está incorreta: Não há contração por ausência de energia elástica armazenada.",
      "Está incorreta: Fluidos viscosos escoam continuamente (Slide 11), o oposto de sólidos indeformáveis."
    ],
    "nursingApplication": "Reforça o caráter conceitual puro do modelo de corpo indeformável na física."
  },
  {
    "id": 2011,
    "topicId": 2,
    "question": "Qual é a definição formal de 'Elasticidade' apresentada nos Slides 7 e 8 de Biofísica?",
    "options": [
      "Tendência de um fluido biológico para aumentar a sua densidade sob aquecimento.",
      "Capacidade de um material de reter permanentemente a deformação máxima aplicada.",
      "Aceleração instantânea adquirida por um corpo em movimento retilíneo uniforme.",
      "Propriedade responsável pelo retorno de um corpo à sua forma original, aquando do fim da força deformadora."
    ],
    "correctIndex": 3,
    "explanation": "Os Slides 7 e 8 definem textualmente: 'Elasticidade: Propriedade responsável pelo retorno de um corpo à sua forma original, aquando do fim da força deformadora'.",
    "distractorAnalysis": [
      "Está incorreta: Fluidos expandem e diminuem a densidade sob aquecimento, conceito alheio à elasticidade mecânica.",
      "Está incorreta: Reter permanentemente a deformação é a definição do comportamento plástico (Slide 17).",
      "Está incorreta: Movimento retilíneo uniforme tem aceleração rigorosamente nula (a = 0)."
    ],
    "nursingApplication": "A elasticidade da pele e dos pulmões permite a sua retração fisiológica após o estiramento ou inspiração."
  },
  {
    "id": 2012,
    "topicId": 2,
    "question": "O que caracteriza os 'Sólidos de Hooke' de acordo com os Slides 5 e 16 de Biofísica?",
    "options": [
      "A deformação elástica é diretamente proporcional à intensidade da tensão e há restituição integral da forma original.",
      "Apenas se deformam a partir de um limiar elevado de tensão mantendo a deformação máxima.",
      "Não sofrem qualquer restituição da forma original, fluindo indefinidamente com o tempo.",
      "Apresentam deformação independente da força aplicada que varia com a luz solar."
    ],
    "correctIndex": 0,
    "explanation": "O Slide 5 define: 'Deformação proporcional à intensidade da tensão', e o Slide 16 complementa: 'Deformação elástica diretamente proporcional à tensão; restituição integral da forma original após remoção da tensão'.",
    "distractorAnalysis": [
      "Está incorreta: Esta descrição caracteriza os Corpos Plásticos (Slide 17), não os Sólidos de Hooke.",
      "Está incorreta: Não restituir a forma e fluir continuamente caracteriza os Corpos Viscosos (Slide 18).",
      "Está incorreta: A resposta mecânica depende estritamente da tensão aplicada e não de fatores fotónicos."
    ],
    "nursingApplication": "Compreensão de biomateriais com comportamento elástico linear usados em ortóteses e próteses."
  },
  {
    "id": 2013,
    "topicId": 2,
    "question": "Qual é o exemplo físico clássico apresentado no Slide 5 para ilustrar um Sólido de Hooke?",
    "options": [
      "Uma barra de plasticina moldada à mão.",
      "Uma mola.",
      "Um copo de água e mel.",
      "Uma porção de massa de pão em repouso."
    ],
    "correctIndex": 1,
    "explanation": "O Slide 5 apresenta expressamente uma 'Mola' como o exemplo físico paradigmático de um Sólido de Hooke.",
    "distractorAnalysis": [
      "Está incorreta: A plasticina é o exemplo apresentado para Corpos Plásticos (Slide 10).",
      "Está incorreta: Água e mel são os exemplos apresentados para Corpos Viscosos (Slide 11).",
      "Está incorreta: A massa de pão é o exemplo apresentado para Corpos Plastoviscoelásticos (Slide 13)."
    ],
    "nursingApplication": "O funcionamento elástico da mola é a base de dinamómetros e sistemas de suspensão de camas hospitalares."
  },
  {
    "id": 2014,
    "topicId": 2,
    "question": "O que acontece a uma mola perfeitamente elástica após ser esticada dentro do seu limite e depois largada?",
    "options": [
      "Fica permanentemente esticada com a deformação máxima.",
      "Começa a escoar como um líquido viscoso.",
      "Restitui integralmente a sua forma e comprimento originais de repouso.",
      "Aquece instantaneamente até fundir o metal da espira."
    ],
    "correctIndex": 2,
    "explanation": "Pela definição de elasticidade e de sólidos de Hooke (Slides 8 e 16), cessada a força deformadora, o corpo restitui integralmente a sua forma inicial.",
    "distractorAnalysis": [
      "Está incorreta: Reter permanentemente a deformação máxima define o comportamento plástico, não o elástico puro.",
      "Está incorreta: A mola é um sólido elástico de Hooke e não sofre escoamento viscoso fluido.",
      "Está incorreta: No regime elástico ideal reversível não há fusão térmica do material metálico."
    ],
    "nursingApplication": "Explica a capacidade dos tendões e ligamentos de recuperar o seu comprimento basal após tração fisiológica moderada."
  },
  {
    "id": 2015,
    "topicId": 2,
    "question": "Num Sólido de Hooke, se duplicarmos a intensidade da força deformadora aplicada (dentro do regime elástico), o que acontece à deformação?",
    "options": [
      "Permanece exatamente a mesma, pois a rigidez anula o efeito da força.",
      "Reduz-se para metade da deformação original.",
      "Torna-se irreversível e plástica de imediato.",
      "A deformação duplica, mantendo uma proporção matemática direta com a força."
    ],
    "correctIndex": 3,
    "explanation": "Como a deformação é 'diretamente proporcional à intensidade da tensão' (Slide 5 e 16), dobrar a força ou tensão implica obrigatoriamente duplicar a deformação correspondente.",
    "distractorAnalysis": [
      "Está incorreta: A deformação só se manteria igual se o corpo fosse indeformável.",
      "Está incorreta: A deformação aumenta com o aumento da força, nunca diminui.",
      "Está incorreta: Dentro do regime elástico linear de Hooke, a deformação mantém-se reversível."
    ],
    "nursingApplication": "Princípio de linearidade usado na calibração de balanças e sensores de pressão."
  },
  {
    "id": 2016,
    "topicId": 2,
    "question": "Se um biomaterial for submetido a uma força e, ao retirar a força, não regressar de todo à sua configuração original:",
    "options": [
      "O seu comportamento não é puramente elástico, tendo ocorrido deformação plástica ou viscosa.",
      "O corpo obedece rigorosamente à definição de Sólido de Hooke.",
      "O corpo é classificado como um Sólido de Euclides.",
      "A 1ª Lei de Newton foi violada pelo ensaio mecânico."
    ],
    "correctIndex": 0,
    "explanation": "A elasticidade exige por definição a restituição integral da forma original (Slide 8 e 16). A não restituição indica a presença de deformação plástica permanente ou escoamento viscoso.",
    "distractorAnalysis": [
      "Está incorreta: Sólidos de Hooke restituem integralmente a sua forma original quando a força cessa.",
      "Está incorreta: Sólidos de Euclides nunca se deformam sob nenhuma força (Slide 15).",
      "Está incorreta: A deformação material obedece às leis da reologia e termodinâmica sem violar as leis de Newton."
    ],
    "nursingApplication": "Permite distinguir ligamentos saudáveis que recuperam a tensão de ligamentos com entorse grave distendidos plasticamente."
  },
  {
    "id": 2017,
    "topicId": 2,
    "question": "Qual é a condição necessária para que a resposta mecânica de um corpo seja classificada como Sólido de Hooke no Slide 16?",
    "options": [
      "O corpo tem de ser aquecido acima de 100 ºC durante o teste.",
      "A deformação elástica tem de ser diretamente proporcional à tensão e a forma original deve ser integralmente restituída após a remoção da carga.",
      "O corpo só pode sofrer deformação se a tensão for mantida durante mais de 24 horas.",
      "O corpo tem de dissipar 100% da sua energia mecânica por histerese."
    ],
    "correctIndex": 1,
    "explanation": "O Slide 16 estipula as duas condições unidas: '2. Sólidos de Hooke: Deformação elástica diretamente proporcional à tensão; restituição integral da forma original após remoção da tensão'.",
    "distractorAnalysis": [
      "Está incorreta: A Lei de Hooke aplica-se à temperatura ambiente comum e não exige aquecimento a 100 ºC.",
      "Está incorreta: Depender do tempo de aplicação é a marca dos corpos viscosos e viscoelásticos (Slides 18 e 19).",
      "Está incorreta: A dissipação de energia por histerese ocorre em corpos viscoelásticos, não nos sólidos de Hooke ideais."
    ],
    "nursingApplication": "Critério fundamental de avaliação da elasticidade linear em tecidos corporais e materiais médicos."
  },
  {
    "id": 2018,
    "topicId": 2,
    "question": "Como atua a energia mecânica num sólido elástico quando este é deformado por uma força externa?",
    "options": [
      "Dissipa-se instantaneamente sob a forma de radiação gama de alta energia.",
      "Converte-se em massa inercial adicional que aumenta o peso do corpo.",
      "Fica armazenada como energia potencial elástica e é utilizada pelo corpo para regressar à sua forma original.",
      "Desaparece do universo sem deixar qualquer vestígio físico."
    ],
    "correctIndex": 2,
    "explanation": "Durante a deformação elástica reversível, o trabalho mecânico realizado pela força externa fica acumulado na estrutura como energia potencial elástica; quando a força externa cessa, essa energia devolve a forma original ao corpo.",
    "distractorAnalysis": [
      "Está incorreta: Forças elásticas mecânicas não produzem radiação nuclear eletromagnética gama.",
      "Está incorreta: A energia não se transforma em massa nas solicitações elásticas quotidianas.",
      "Está incorreta: A energia mecânica conserva-se de acordo com o Primeiro Princípio da Termodinâmica."
    ],
    "nursingApplication": "Explica o armazenamento de energia nos tendões durante o contacto com o solo na corrida e marcha humana."
  },
  {
    "id": 2019,
    "topicId": 2,
    "question": "Num gráfico de Tensão versus Deformação para um Sólido de Hooke ideal, qual é a geometria da curva?",
    "options": [
      "Uma curva sinusoidal com máximos e mínimos alternados.",
      "Uma parábola invertida que decresce até ao zero absoluto.",
      "Um círculo fechado centrado na origem das coordenadas.",
      "Uma linha reta que parte da origem, expressando proporcionalidade linear direta."
    ],
    "correctIndex": 3,
    "explanation": "A proporcionalidade direta (σ ∝ ε ou F ∝ Δx) traduz-se graficamente numa função linear: uma linha reta cuja inclinação representa o módulo elástico ou rigidez do material.",
    "distractorAnalysis": [
      "Está incorreta: Curvas sinusoidais representam oscilações periódicas, não a lei linear de Hooke.",
      "Está incorreta: Parábolas representam relações quadráticas, incompatíveis com a resposta linear direta.",
      "Está incorreta: Círculos fechados não representam funções mecânicas monotónicas de resposta elástica."
    ],
    "nursingApplication": "Permite aos alunos reconhecer de imediato a região elástica linear em gráficos de ensaios de tração biomecânica."
  },
  {
    "id": 2020,
    "topicId": 2,
    "question": "Qual é a forma de repouso de um corpo puramente elástico quando sobre ele não atua qualquer força deformadora?",
    "options": [
      "A sua configuração geométrica e comprimento originais de equilíbrio.",
      "Uma forma esférica achatada no vácuo.",
      "A forma do último recipiente onde esteve guardado.",
      "Uma forma caótica que muda a cada fracção de segundo."
    ],
    "correctIndex": 0,
    "explanation": "Na ausência de forças deformadoras, um corpo elástico estabiliza na sua forma geométrica natural de equilíbrio, definida pela estrutura interna dos seus materiais constituintes.",
    "distractorAnalysis": [
      "Está incorreta: Sólidos não assumem espontaneamente formas esféricas a menos que tenham sido fabricados nessa forma.",
      "Está incorreta: Adotar a forma do recipiente é propriedade dos fluidos líquidos e gasosos, não dos sólidos elásticos.",
      "Está incorreta: Formas caóticas variáveis violam a estabilidade estrutural dos corpos sólidos elásticos."
    ],
    "nursingApplication": "Compreensão de que as estruturas anatómicas saudáveis voltam sempre à sua geometria neutra de repouso."
  },
  {
    "id": 2021,
    "topicId": 2,
    "question": "Qual é a definição exata de 'Corpos Plásticos' apresentada nos Slides 10 e 17 de Biofísica?",
    "options": [
      "Nunca sofrem qualquer deformação sob forças intensas.",
      "Apenas ocorre deformação a partir de um determinado valor de tensão (limiar) e mantêm permanentemente a deformação máxima.",
      "Restituem integralmente a sua forma original no instante em que a força cessa.",
      "Flutuam no ar devido à perda imediata de massa inercial."
    ],
    "correctIndex": 1,
    "explanation": "O Slide 10 indica: 'Apenas ocorre deformação a partir de um determinado valor de tensão' e o Slide 17 resume: '3. Corpos Plásticos: Só acusam deformação a partir de um limiar de tensão; mantêm permanentemente a deformação máxima'.",
    "distractorAnalysis": [
      "Está incorreta: Nunca sofrer deformação é a definição de Sólido Indeformável (Slide 4).",
      "Está incorreta: Restituição integral da forma original é a definição de Sólido de Hooke / Elasticidade (Slide 16).",
      "Está incorreta: Corpos plásticos obedecem à conservação da massa e gravidade newtoniana."
    ],
    "nursingApplication": "Essencial para compreender como forças excessivas causam deformidades permanentes em tecidos corporais e ossos."
  },
  {
    "id": 2022,
    "topicId": 2,
    "question": "Qual é o exemplo apresentado no Slide 10 de Biofísica para ilustrar um Corpo Plástico?",
    "options": [
      "Água destilada.",
      "Uma mola de aço.",
      "Plasticina.",
      "Uma esponja do mar."
    ],
    "correctIndex": 2,
    "explanation": "O Slide 10 associa expressamente a 'Plasticina' como o exemplo característico de um corpo plástico.",
    "distractorAnalysis": [
      "Está incorreta: A água é o exemplo de Corpo Viscoso (Slide 11).",
      "Está incorreta: A mola de aço é o exemplo de Sólido de Hooke (Slide 5).",
      "Está incorreta: A esponja é o exemplo de Corpo Viscoelástico (Slide 12)."
    ],
    "nursingApplication": "A plasticina molda-se facilmente após vencer o limiar de resistência e não recua após ser largada."
  },
  {
    "id": 2023,
    "topicId": 2,
    "question": "O que acontece se aplicarmos uma tensão mecânica INFERIOR ao limiar de tensão num corpo puramente plástico (Slide 17)?",
    "options": [
      "Deforma-se imediatamente atingindo o comprimento máximo.",
      "Dissolve-se transformando-se num líquido viscoso transparente.",
      "Emite ondas sonoras audíveis de alta intensidade.",
      "Não acusa qualquer deformação dimensional (permanece indeformado abaixo do limiar)."
    ],
    "correctIndex": 3,
    "explanation": "Conforme o Slide 17 ('Só acusam deformação a partir de um limiar de tensão'), qualquer solicitação mecânica com intensidade abaixo desse valor limite não produz qualquer deformação no material.",
    "distractorAnalysis": [
      "Está incorreta: A deformação só se inicia após o limiar de tensão ser superado pela força externa.",
      "Está incorreta: O corpo não muda de estado físico de agregação ao receber pequenas tensões estáticas.",
      "Está incorreta: Tensões estáticas sub-limiar não geram emissão acústica contínua."
    ],
    "nursingApplication": "Explica por que certos materiais médicos mantêm a rigidez estrutural até um determinado impacto crítico."
  },
  {
    "id": 2024,
    "topicId": 2,
    "question": "Quando uma força acima do limiar deforma uma barra de plasticina e é posteriormente retirada, o que acontece à forma da plasticina?",
    "options": [
      "Mantém permanentemente a deformação máxima atingida, sem recuperar a forma original.",
      "Retorna espontaneamente e com grande velocidade ao seu formato inicial.",
      "Continua a esticar-se sozinha indefinidamente até se romper.",
      "Contrai-se até atingir um volume dez vezes menor que o inicial."
    ],
    "correctIndex": 0,
    "explanation": "Os Slides 10 e 17 destacam que os corpos plásticos 'mantêm permanentemente a deformação máxima', caracterizando uma deformação irreversível e permanente.",
    "distractorAnalysis": [
      "Está incorreta: Retornar à forma inicial é a resposta de um sólido elástico de Hooke, não de um corpo plástico.",
      "Está incorreta: Após a retirada da força, o corpo plástico estabiliza na nova forma atingida sem deformação adicional contínua.",
      "Está incorreta: Não há contração espontânea por ausência de forças de restituição elástica."
    ],
    "nursingApplication": "Análogo a deformidades ósseas permanentes após consolidação viciosa de fraturas não alinhadas."
  },
  {
    "id": 2025,
    "topicId": 2,
    "question": "Qual é a diferença essencial entre um Sólido de Hooke e um Corpo Plástico estabelecida na síntese dos Slides 16 e 17?",
    "options": [
      "O sólido de Hooke nunca se deforma e o corpo plástico deforma-se sob qualquer força.",
      "O sólido de Hooke deforma proporcionalmente e recupera a forma original; o corpo plástico só deforma a partir de um limiar e mantém permanentemente a deformação.",
      "O sólido de Hooke é um líquido e o corpo plástico é um gás nobre.",
      "Ambos têm comportamentos rigorosamente idênticos perante a remoção da força."
    ],
    "correctIndex": 1,
    "explanation": "A distinção central é: o sólido de Hooke exibe reversibilidade elástica integral proporcional (Slide 16); o corpo plástico exige um limiar de tensão e sofre deformação permanente irreversível (Slide 17).",
    "distractorAnalysis": [
      "Está incorreta: Sólidos de Hooke sofrem deformação elástica (não são indeformáveis).",
      "Está incorreta: Ambos são modelos de corpos sólidos com reologias mecânicas distintas.",
      "Está incorreta: Um recupera integralmente e o outro mantém permanentemente a deformação máxima."
    ],
    "nursingApplication": "Critério basilar para distinguir tecidos que amortecem reversivelmente de tecidos que sofrem lesão permanente."
  },
  {
    "id": 2026,
    "topicId": 2,
    "question": "No Slide 17, a frase 'mantêm permanentemente a deformação máxima' significa que a deformação plástica é:",
    "options": [
      "Transiente e passageira, durando apenas 2 segundos.",
      "Completamente reversível por aplicação de calor moderado.",
      "Irreversível e duradoura no tempo, sem retorno espontâneo à forma de partida.",
      "Indiferente à magnitude da força deformadora aplicada."
    ],
    "correctIndex": 2,
    "explanation": "O termo 'permanentemente' traduz a irreversibilidade da deformação plástica: a estrutura atómica/molecular foi rearranjada e não possui energia potencial restauradora para reverter a alteração.",
    "distractorAnalysis": [
      "Está incorreta: Deformação transiente que reverte rapidamente é elástica, não plástica permanente.",
      "Está incorreta: O retorno espontâneo não ocorre nos corpos puramente plásticos da reologia clássica.",
      "Está incorreta: A deformação máxima atingida depende da intensidade da força que superou o limiar."
    ],
    "nursingApplication": "Ajuda a compreender lesões de estiramento permanente em cápsulas articulares após luxações traumáticas."
  },
  {
    "id": 2027,
    "topicId": 2,
    "question": "Como se define o 'Limiar de tensão' no comportamento dos corpos plásticos (Slide 17)?",
    "options": [
      "A temperatura máxima a que um material pode ser esterilizado em autoclave.",
      "O tempo em segundos necessário para um fluido viscoso evaporar.",
      "A velocidade com que uma ambulância trava bruscamente a 80 km/h.",
      "O valor mínimo de tensão que é indispensável atingir para que o corpo comece a acusar deformação mecânica."
    ],
    "correctIndex": 3,
    "explanation": "O limiar de tensão (limite de escoamento plástico) é a tensão crítica mínima abaixo da qual o material não acusa deformação plástica permanente (Slide 17).",
    "distractorAnalysis": [
      "Está incorreta: Temperatura de esterilização é um parâmetro microbiológico e térmico de enfermagem.",
      "Está incorreta: Evaporação de fluidos é uma transição de fase termodinâmica, não um limiar reológico de tensão mecânica.",
      "Está incorreta: A velocidade de travagem da ambulância é uma variável cinemática do Tópico 1."
    ],
    "nursingApplication": "Permite entender a resistência óssea: o osso suporta cargas normais sem deformação plástica até atingir o seu limiar."
  },
  {
    "id": 2028,
    "topicId": 2,
    "question": "Ao modelar plasticina com os dedos para criar uma tala de imobilização pedagógica, porque mantém ela o novo formato?",
    "options": [
      "Porque a força dos dedos superou o limiar de tensão e, sendo um corpo plástico, a plasticina conserva a deformação máxima aplicada.",
      "Porque as moléculas de ar no interior da plasticina congelaram instantaneamente.",
      "Porque a gravidade puxa a plasticina em todas as direções ao mesmo tempo.",
      "Porque a constante de Hooke da plasticina tende para infinito."
    ],
    "correctIndex": 0,
    "explanation": "Ao aplicar uma força superior ao limiar plástico, os planos moleculares da plasticina deslizam e assumem a nova geometria, permanecendo nela de forma permanente e sem retorno elástico.",
    "distractorAnalysis": [
      "Está incorreta: A modelação manual não altera a temperatura de congelamento do ar ambiente.",
      "Está incorreta: A gravidade atua unicamente na vertical descendente (P = m · g).",
      "Está incorreta: Constante de Hooke infinita corresponderia a um sólido indeformável que não se moldaria."
    ],
    "nursingApplication": "Exemplifica de forma simples o comportamento mecânico dos materiais plásticos de moldagem e ortóteses termomoldáveis."
  },
  {
    "id": 2029,
    "topicId": 2,
    "question": "Em termos de classificação reológica (Slide 17), um material que só deforma após um limiar e não restitui a forma é indiscutivelmente:",
    "options": [
      "Um Sólido de Euclides.",
      "Um Corpo Plástico.",
      "Um Corpo Viscoso puro.",
      "Um Sólido de Hooke."
    ],
    "correctIndex": 1,
    "explanation": "A combinação exclusiva 'só deforma a partir de um limiar' e 'mantém permanentemente a deformação' é a assinatura definidora do Corpo Plástico (Slide 17).",
    "distractorAnalysis": [
      "Está incorreta: Sólidos de Euclides nunca sofrem qualquer deformação sob nenhuma tensão (Slide 15).",
      "Está incorreta: Corpos viscosos deformam-se continuamente com a tensão e com o tempo sem limiar estático rígido (Slide 18).",
      "Está incorreta: Sólidos de Hooke deformam proporcionalmente desde tensões mínimas e restituem integralmente a forma (Slide 16)."
    ],
    "nursingApplication": "Identificação taxativa e inequívoca da terceira categoria reológica lecionada."
  },
  {
    "id": 2030,
    "topicId": 2,
    "question": "Quando uma fratura óssea consolida com uma angulação anormal que o osso não consegue endireitar sozinho, que regime reológico foi atingido no trauma?",
    "options": [
      "Regime elétrico uniforme de Hooke com restituição total.",
      "Regime de corpo puramente indeformável de Euclides.",
      "Regime de deformação plástica irreversível que superou o limite elástico do tecido ósseo.",
      "Regime de escoamento viscoso de mel e água pura."
    ],
    "correctIndex": 2,
    "explanation": "Quando a força traumática supera o limiar de elasticidade do osso, o tecido sofre microfraturas e deformação plástica permanente; na consolidação sem redução cirúrgica, a deformidade angular persiste permanentemente.",
    "distractorAnalysis": [
      "Está incorreta: No regime elástico o osso retornaria ao alinhamento retilíneo normal sem sequelas angulares.",
      "Está incorreta: Se fosse indeformável, o osso nunca teria sofrido qualquer angulação ou fratura.",
      "Está incorreta: O osso cortical é um tecido sólido rígido mineralizado e não um fluido de escoamento viscoso puro."
    ],
    "nursingApplication": "Conexão direta entre o conceito reológico de plasticidade e as sequelas ortopédicas de doentes acidentados."
  },
  {
    "id": 2031,
    "topicId": 2,
    "question": "Qual é a característica reológica essencial dos 'Corpos Viscosos' de acordo com os Slides 11 e 18 de Biofísica?",
    "options": [
      "Nunca se deformam mesmo sob tensões de milhares de Newtons.",
      "Restituem integralmente a sua forma original no instante em que a força é retirada.",
      "Apenas se deformam a baixas temperaturas sob a ação de campos magnéticos.",
      "Apresentam deformação proporcional/dependente da tensão e do tempo de aplicação, e não restituem a sua forma original."
    ],
    "correctIndex": 3,
    "explanation": "O Slide 11 define: 'Deformação proporcional à tensão e ao tempo de aplicação' e o Slide 18 resume: '4. Corpos Viscosos: Deformação dependente da tensão e do tempo; não restituem a sua forma original'.",
    "distractorAnalysis": [
      "Está incorreta: Nunca se deformar caracteriza os sólidos indeformáveis de Euclides (Slide 15).",
      "Está incorreta: Restituir a forma original caracteriza os sólidos elásticos de Hooke (Slide 16).",
      "Está incorreta: A viscosidade independe de campos magnéticos e aumenta com a redução de temperatura, mas a dependência temporal da tensão é a sua definição reológica."
    ],
    "nursingApplication": "Crucial para compreender o escoamento do sangue e a lubrificação das superfícies articulares pelo líquido sinovial."
  },
  {
    "id": 2032,
    "topicId": 2,
    "question": "O que acontece à forma de uma gota de fluido viscoso após cessar a força que a fez escoar (Slide 18)?",
    "options": [
      "Não restitui a sua forma original, permanecendo na nova configuração atingida pelo escoamento.",
      "Recua instantaneamente para a forma original como se fosse um elástico.",
      "Cristaliza imediatamente transformando-se num sólido de Euclides.",
      "Evapora 100% da sua massa em menos de um milissegundo."
    ],
    "correctIndex": 0,
    "explanation": "O Slide 18 estabelece expressamente: 'não restituem a sua forma original'. Os fluidos viscosos dissipam a energia mecânica sob a forma de atrito interno entre camadas e não possuem força elástica restauradora.",
    "distractorAnalysis": [
      "Está incorreta: Recuar instantaneamente é o comportamento de corpos com elasticidade de Hooke.",
      "Está incorreta: Cessar a força mecânica de cisalhamento não altera o ponto de solidificação ou congelamento do líquido.",
      "Está incorreta: A taxa de evaporação depende da pressão de vapor e temperatura, não da cessação da tensão mecânica."
    ],
    "nursingApplication": "Explica por que os fluidos biológicos (sangue, linfa) fluem unidirecionalmente sem recuar elasticamente."
  },
  {
    "id": 2033,
    "topicId": 2,
    "question": "Quais são os exemplos de corpos viscosos expressamente apresentados nos Slides 11, 12 e 13 de Biofísica?",
    "options": [
      "Aço e Prata.",
      "Água e Mel.",
      "Plasticina e Mola.",
      "Osso cortical e Borracha."
    ],
    "correctIndex": 1,
    "explanation": "Os Slides 11, 12 e 13 indicam textualmente nos exemplos de Corpos Viscosos: 'Água, mel'.",
    "distractorAnalysis": [
      "Está incorreta: Aço e prata são metais rígidos com elevado Módulo de Young (Slide 44).",
      "Está incorreta: Plasticina é corpo plástico (Slide 10) e mola é sólido de Hooke (Slide 5).",
      "Está incorreta: Osso é viscoelástico (Slide 19) e borracha é sólido de baixíssimo módulo (Slide 44)."
    ],
    "nursingApplication": "O mel ilustra um líquido de alta viscosidade e a água um líquido de baixa viscosidade sob o mesmo gradiente de pressão."
  },
  {
    "id": 2034,
    "topicId": 2,
    "question": "Por que razão uma porção de mel demora muito mais tempo a escoar de uma colher do que uma porção igual de água?",
    "options": [
      "Porque a água tem maior densidade e atrai a gravidade com o triplo da força.",
      "Porque o mel possui um Módulo de Young superior ao do aço cortical.",
      "Porque o mel apresenta maior atrito interno entre as suas camadas fluidas (maior viscosidade), exigindo mais tempo para se deformar sob a mesma tensão gravítica.",
      "Porque o mel é um sólido de Euclides indeformável em repouso."
    ],
    "correctIndex": 2,
    "explanation": "A deformação dos corpos viscosos depende da tensão e do tempo (Slide 11 e 18). Fluidos mais viscosos como o mel possuem forte resistência interna ao cisalhamento e deformam-se a uma taxa muito mais lenta, necessitando de maior tempo para escoar.",
    "distractorAnalysis": [
      "Está incorreta: O mel é mais denso que a água (~1,4 g/cm³ vs 1,0 g/cm³), logo a gravidade até o atrai com mais peso por volume.",
      "Está incorreta: Fluidos líquidos viscosos não possuem Módulo de Young de tração axial estática.",
      "Está incorreta: O mel é um fluido viscoso que deforma e escoa, não um sólido indeformável."
    ],
    "nursingApplication": "Conceito fundamental para compreender a viscosidade sanguínea e o seu impacto na resistência vascular periférica."
  },
  {
    "id": 2035,
    "topicId": 2,
    "question": "Se uma tensão constante for mantida durante o dobro do tempo sobre um fluido puramente viscoso, o que acontece à deformação acumulada?",
    "options": [
      "A deformação cessa e reverte para zero.",
      "A deformação diminui para metade por acomodação molecular.",
      "O fluido transforma-se espontaneamente num sólido de Hooke.",
      "A deformação contínua (escoamento) duplica, porque nos corpos viscosos a deformação é proporcional ao tempo de aplicação da tensão."
    ],
    "correctIndex": 3,
    "explanation": "O Slide 11 explicita que a deformação é 'proporcional à tensão e ao tempo de aplicação dessa tensão'. Mantendo a tensão constante e dobrando o tempo de atuação, o escoamento acumula o dobro da deformação.",
    "distractorAnalysis": [
      "Está incorreta: Nos fluidos viscosos o escoamento progride continuamente enquanto a força for aplicada.",
      "Está incorreta: O escoamento aumenta no tempo, nunca diminui de forma espontânea.",
      "Está incorreta: A manutenção da tensão não transforma o estado líquido em elasticidade pura de Hooke."
    ],
    "nursingApplication": "Explica por que perfusões lentas contínuas asseguram o transporte gradual de fluidos intravenosos ao longo do tempo."
  },
  {
    "id": 2036,
    "topicId": 2,
    "question": "Qual é o significado da 'dependência do tempo' na resposta mecânica dos corpos viscosos?",
    "options": [
      "A quantidade de deformação sofrida depende não apenas da força aplicada, mas criticamente da duração (tempo) durante a qual a força atua.",
      "O corpo só se deforma durante a noite quando a temperatura ambiente diminui.",
      "A deformação ocorre com atraso de 24 horas relativamente à aplicação da carga.",
      "O material viaja no tempo para uma época anterior à formulação das leis de Newton."
    ],
    "correctIndex": 0,
    "explanation": "Ao contrário dos sólidos de Hooke (onde a deformação elástica é instantânea e constante para uma dada força), nos corpos viscosos a deformação aumenta progressivamente à medida que o tempo passa sob a ação contínua da tensão.",
    "distractorAnalysis": [
      "Está incorreta: A dependência temporal refere-se à duração do esforço em segundos ou minutos, não a ciclos circadianos dia/noite.",
      "Está incorreta: O escoamento inicia-se imediatamente e acumula-se continuamente sem desfasamentos de 24 horas.",
      "Está incorreta: Afirmação de ficção científica desprovida de rigor físico."
    ],
    "nursingApplication": "Importante para perceber a deformação progressiva de tecidos biológicos quando mantidos sob carga contínua."
  },
  {
    "id": 2037,
    "topicId": 2,
    "question": "O que acontece à energia mecânica fornecida para deformar ou fazer escoar um corpo puramente viscoso?",
    "options": [
      "Fica 100% armazenada na estrutura pronta para ser devolvida elasticamente.",
      "É totalmente dissipada sob a forma de calor devido ao atrito viscoso interno entre as camadas de fluido.",
      "Converte-se em massa inercial de acordo com a 2ª Lei de Newton.",
      "Gera ondas gravitacionais que aceleram a circulação sanguínea."
    ],
    "correctIndex": 1,
    "explanation": "Como os corpos viscosos não restituem a sua forma original (Slide 18), todo o trabalho mecânico fornecido para provocar o escoamento é dissipado irreversivelmente como energia térmica (calor de atrito viscoso).",
    "distractorAnalysis": [
      "Está incorreta: Armazenamento reversível é a imagem de marca da elasticidade pura de Hooke, ausente em fluidos viscosos puros.",
      "Está incorreta: Energia mecânica não se transforma em massa na física dos fluidos clássica.",
      "Está incorreta: Ondas gravitacionais são fenómenos cosmológicos astrofísicos, sem qualquer relação com fluidos corporais."
    ],
    "nursingApplication": "Explica por que o trabalho de bombagem cardíaca dissipa energia ao vencer a viscosidade do sangue nas artérias."
  },
  {
    "id": 2038,
    "topicId": 2,
    "question": "Na circulação humana e nas articulações sinoviais, o sangue e o líquido articular exibem comportamento reológico de:",
    "options": [
      "Sólidos perfeitamente indeformáveis de Euclides.",
      "Molas metálicas rígidas de Hooke.",
      "Fluidos com propriedades viscosas essenciais ao transporte e lubrificação biomecânica.",
      "Gases de alta densidade no vácuo intersticial."
    ],
    "correctIndex": 2,
    "explanation": "O sangue e o líquido sinovial são fluidos biológicos complexos cuja viscosidade condiciona a hemodinâmica vascular e o coeficiente de atrito nas cartilagens articulares.",
    "distractorAnalysis": [
      "Está incorreta: Líquidos circulam e deformam-se continuamente, sendo o oposto de sólidos indeformáveis.",
      "Está incorreta: Fluidos não possuem forma definida nem se comportam como molas rígidas uniaxiais.",
      "Está incorreta: Os fluidos biológicos são líquidos aquosos incompressíveis e não gases rarefeitos."
    ],
    "nursingApplication": "Relaciona a viscosidade com a monitorização de parâmetros hemodinâmicos e mobilidade articular."
  },
  {
    "id": 2039,
    "topicId": 2,
    "question": "Qual é a síntese textual exata dos Corpos Viscosos apresentada no resumo numerado do Slide 18?",
    "options": [
      "'1. Sólidos de Euclides: Modelos teóricos indeformáveis.'",
      "'2. Sólidos de Hooke: Deformação elástica diretamente proporcional à tensão.'",
      "'3. Corpos Plásticos: Só acusam deformação a partir de um limiar de tensão.'",
      "'4. Corpos Viscosos: Deformação dependente da tensão e do tempo; não restituem a sua forma original.'"
    ],
    "correctIndex": 3,
    "explanation": "O ponto 4 do Slide 18 enumera com clareza: '4. Corpos Viscosos: Deformação dependente da tensão e do tempo; não restituem a sua forma original'.",
    "distractorAnalysis": [
      "Está incorreta: Esta é a definição do ponto 1 (Sólidos de Euclides).",
      "Está incorreta: Esta é a definição do ponto 2 (Sólidos de Hooke).",
      "Está incorreta: Esta é a definição do ponto 3 (Corpos Plásticos)."
    ],
    "nursingApplication": "Fixa a formulação canónica do quarto grupo reológico para os exames da unidade curricular."
  },
  {
    "id": 2040,
    "topicId": 2,
    "question": "Ao inclinar uma ampola de medicação viscosa, a solução escorre lentamente para o bocal. Se a ampola for colocada de novo na vertical, a solução escorrida recua espontaneamente?",
    "options": [
      "Não, porque os corpos viscosos não restituem a sua forma original.",
      "Sim, sobe imediatamente pelo bocal como uma mola de Hooke.",
      "Sim, porque a gravidade terrestre inverte o sentido do peso à noite.",
      "Apenas se a ampola for agitada com aceleração de 80 km/h."
    ],
    "correctIndex": 0,
    "explanation": "Como os fluidos viscosos não restituem a forma original (Slide 18), o líquido permanece na nova posição escoada a menos que uma nova força externa (como a gravidade invertida ao virar a ampola) o force a mover-se de novo.",
    "distractorAnalysis": [
      "Está incorreta: Fluidos não possuem forças elásticas de restituição para voltar espontaneamente ao fundo da ampola.",
      "Está incorreta: O sentido da gravidade é perfeitamente constante para o centro da Terra em qualquer horário.",
      "Está incorreta: Agitar pode acelerar o escoamento por inércia, mas não confere memória de forma elástica."
    ],
    "nursingApplication": "Aplicação simples no manuseamento prático de ampolas e xaropes terapêuticos de consistência viscosa."
  },
  {
    "id": 2041,
    "topicId": 2,
    "question": "Qual é a definição exata de 'Corpos Viscoelásticos' apresentada nos Slides 12 e 19 de Biofísica?",
    "options": [
      "Corpos perfeitamente indeformáveis cuja distância interpartículas é invariável.",
      "Deformação dependente da tensão e do tempo de aplicação, com dissipação de energia por histerese (ossos e músculos).",
      "Fluidos que escoam instantaneamente sem qualquer resistência elástica.",
      "Materiais que só se deformam acima de 1000 graus Celsius."
    ],
    "correctIndex": 1,
    "explanation": "O Slide 12 estipula: 'Deformação depende da tensão e do tempo de aplicação dessa tensão', e o Slide 19 sintetiza no ponto 5: 'Corpos Viscoelásticos: Deformação dependente da tensão e do tempo; dissipação de energia por histerese (ossos e músculos)'.",
    "distractorAnalysis": [
      "Está incorreta: Esta é a definição de Sólido de Euclides (Slide 15).",
      "Está incorreta: Fluidos sem resistência elástica são viscosos puros (Slide 18), não viscoelásticos.",
      "Está incorreta: O comportamento viscoelástico ocorre nas temperaturas fisiológicas normais do corpo humano."
    ],
    "nursingApplication": "A viscoelasticidade é o comportamento biomecânico dominante na esmagadora maioria dos tecidos humanos."
  },
  {
    "id": 2042,
    "topicId": 2,
    "question": "Quais são os exemplos de corpos viscoelásticos especificamente referidos nos Slides 12 e 19?",
    "options": [
      "Água e mel.",
      "Aço e vidro.",
      "Esponja e cartilagem (Slide 12); ossos e músculos (Slide 19).",
      "Plasticina e massa de pão."
    ],
    "correctIndex": 2,
    "explanation": "O Slide 12 apresenta nos exemplos 'Esponja, cartilagem', e o Slide 19 explicita entre parêntesis '(ossos e músculos)'.",
    "distractorAnalysis": [
      "Está incorreta: Água e mel são corpos viscosos puros (Slide 11).",
      "Está incorreta: Aço e vidro são sólidos rígidos puramente elásticos/frágeis de alto módulo (Slide 44).",
      "Está incorreta: Plasticina é corpo plástico (Slide 10) e massa de pão é plastoviscoelástica (Slide 13)."
    ],
    "nursingApplication": "Identificação direta dos tecidos musculoesqueléticos do corpo humano estudados na enfermagem."
  },
  {
    "id": 2043,
    "topicId": 2,
    "question": "Qual é o fenómeno biomecânico característico dos corpos viscoelásticos (Slide 19) no qual ocorre perda e amortecimento de energia mecânica durante ciclos de carga e descarga?",
    "options": [
      "Decaimento radioativo beta.",
      "Pressão capilar superficial.",
      "Indução eletromagnética rotativa.",
      "Dissipação de energia por histerese."
    ],
    "correctIndex": 3,
    "explanation": "O Slide 19 destaca formalmente a propriedade única: 'dissipação de energia por histerese (ossos e músculos)'.",
    "distractorAnalysis": [
      "Está incorreta: Decaimento beta é um fenómeno nuclear subatómico de física das radiações.",
      "Está incorreta: Pressão capilar é a força hidrostática distribuída na pele (Slide 44).",
      "Está incorreta: Indução eletromagnética pertence ao eletromagnetismo clássico."
    ],
    "nursingApplication": "A histerese permite que as cartilagens e ossos absorvam a energia do impacto de cada passada sem quebrar."
  },
  {
    "id": 2044,
    "topicId": 2,
    "question": "Por que razão a combinação de elasticidade com viscosidade (viscoelasticidade) é tão vantajosa para ossos, músculos e cartilagens?",
    "options": [
      "Porque une a capacidade elástica de sustentação de carga e restituição de forma com o amortecimento viscoso dependente do tempo que dissipa choques mecânicos.",
      "Porque permite ao esqueleto transformar-se em água durante a corrida.",
      "Porque anula completamente o peso corporal do utente durante a marcha.",
      "Porque impede que os ossos sofram qualquer esforço de compressão diária."
    ],
    "correctIndex": 0,
    "explanation": "Se o osso fosse puramente elástico como o aço ou vidro, vibraria e transmitiria todo o choque às articulações; a viscoelasticidade permite amortecer e dissipar parte da energia mecânica por histerese, protegendo o sistema osteomuscular.",
    "distractorAnalysis": [
      "Está incorreta: O esqueleto mantém a integridade estrutural sólida sem se liquefazer.",
      "Está incorreta: O peso gravitacional continua a atuar plenamente sobre a massa do organismo.",
      "Está incorreta: Os ossos suportam continuamente compressão, deformando-se de forma amortecida (Slide 30)."
    ],
    "nursingApplication": "Explica a capacidade adaptativa do corpo humano para suportar impactos na corrida e salto."
  },
  {
    "id": 2045,
    "topicId": 2,
    "question": "Ao comprimir uma esponja húmida ou uma cartilagem articular (Slide 12), o que se observa quanto à deformação produzida?",
    "options": [
      "A deformação ocorre instantaneamente e nunca depende do tempo.",
      "A deformação depende tanto da intensidade da tensão como do tempo de aplicação dessa tensão.",
      "A esponja não acusa qualquer deformação dimensional por ser indeformável.",
      "A cartilagem estica-se longitudinalmente como um tendão em tração pura."
    ],
    "correctIndex": 1,
    "explanation": "O Slide 12 salienta: 'Deformação depende da tensão e do tempo de aplicação dessa tensão. Esponja, cartilagem'. Sob carga contínua, o fluido intersticial é expulso lentamente, aumentando a deformação ao longo do tempo.",
    "distractorAnalysis": [
      "Está incorreta: A dependência temporal é a marca registada da viscoelasticidade, ao contrário dos sólidos puramente elásticos.",
      "Está incorreta: Esponjas e cartilagens são altamente deformáveis perante forças de compressão.",
      "Está incorreta: Compressão reduz a espessura, não sendo tração longitudinal."
    ],
    "nursingApplication": "Explica por que os discos intervertebrais perdem espessura ao longo do dia, tornando as pessoas ligeiramente mais baixas à noite."
  },
  {
    "id": 2046,
    "topicId": 2,
    "question": "O que representa graficamente a 'Histerese' num ciclo de carga (compressão) e descarga (descompressão) de um tecido viscoelástico?",
    "options": [
      "Uma linha reta perfeita onde o caminho de ida e de volta coincidem exatamente.",
      "Um ponto único sem qualquer área interna.",
      "Um ciclo fechado (laço de histerese) onde a curva de descarga não coincide com a de carga, correspondendo a área interna à energia mecânica dissipada sob a forma de calor.",
      "Uma parábola vertical que sobe até ao infinito sem retornar à origem."
    ],
    "correctIndex": 2,
    "explanation": "Na histerese mecânica, a curva de libertação de tensão passa por valores inferiores aos da curva de deformação inicial. A área delimitada entre as duas curvas mede precisamente a energia mecânica absorvida e dissipada pelo tecido.",
    "distractorAnalysis": [
      "Está incorreta: Coincidência exata das curvas de ida e volta ocorre nos sólidos elásticos ideais de Hooke sem amortecimento.",
      "Está incorreta: Um laço de histerese possui área interna bem definida diferente de zero.",
      "Está incorreta: O ciclo é fechado porque o tecido viscoelástico recupera a forma após o tempo de relaxamento."
    ],
    "nursingApplication": "Fundamental para entender como ligamentos e tendões absorvem e atenuam impactos articulares repetidos."
  },
  {
    "id": 2047,
    "topicId": 2,
    "question": "Durante o impacto de cada passada na marcha de um enfermeiro, como atua a cartilagem do joelho e os discos da coluna (Slides 12 e 19)?",
    "options": [
      "Atuam como sólidos de Euclides que transmitem o choque a 100% até ao crânio.",
      "Deformam-se plasticamente de forma permanente ficando achatados para sempre.",
      "Escoam como mel quente saindo para fora das articulações.",
      "Atuam como amortecedores viscoelásticos, sofrendo deformação dependente do tempo e dissipando a energia do impacto por histerese."
    ],
    "correctIndex": 3,
    "explanation": "As cartilagens articulares e discos intervertebrais combinam sustentação elástica com dissipação histerética do choque mecânico, protegendo as superfícies ósseas contra o desgaste e fraturas de sobrecarga.",
    "distractorAnalysis": [
      "Está incorreta: Se fossem indeformáveis, os choques sucessivos provocariam cefaleias e lesões articulares severas.",
      "Está incorreta: As cartilagens recuperam a espessura durante o repouso noturno, não sofrendo deformação plástica permanente em condições fisiológicas.",
      "Está incorreta: O líquido e matriz proteica mantêm-se contidos pela cápsula articular e ligamentos."
    ],
    "nursingApplication": "Justifica a importância do uso de calçado com sola amortecedora durante turnos prolongados de pé."
  },
  {
    "id": 2048,
    "topicId": 2,
    "question": "A recuperação da forma de uma cartilagem articular após a remoção de uma carga prolongada:",
    "options": [
      "Ocorre gradualmente ao longo do tempo (recuperação dependente do tempo), em vez de ser instantânea.",
      "Ocorre em menos de um milissegundo como uma mola de aço ideal.",
      "Nunca ocorre, mantendo-se a cartilagem esmagada para sempre.",
      "Apenas ocorre se o doente for submetido a cirurgia ortopédica."
    ],
    "correctIndex": 0,
    "explanation": "Devido à componente viscosa dos tecidos viscoelásticos, o fluido reabsorve-se lentamente na matriz colagénica, exigindo tempo para a recuperação dimensional completa.",
    "distractorAnalysis": [
      "Está incorreta: A recuperação instantânea é a característica do sólido puramente elástico de Hooke (Slide 16).",
      "Está incorreta: A cartilagem é dotada de elasticidade e recupera a sua espessura normal após o alívio da carga.",
      "Está incorreta: A restituição da espessura é um processo biológico passivo natural durante o repouso."
    ],
    "nursingApplication": "Reforça a necessidade de alternar períodos de bipedestação com períodos de alívio e descanso articular."
  },
  {
    "id": 2049,
    "topicId": 2,
    "question": "Se uma força for aplicada de forma extremamente rápida sobre um tecido viscoelástico comparativamente a uma força aplicada muito lentamente:",
    "options": [
      "O tecido deforma-se muito mais facilmente e comporta-se como mel líquido.",
      "O tecido responde com maior rigidez aparente à carga rápida devido à resistência do componente viscoso.",
      "O tecido perde toda a sua constante elástica e quebra de imediato.",
      "Não há qualquer diferença na resposta mecânica sob qualquer velocidade."
    ],
    "correctIndex": 1,
    "explanation": "Uma propriedade notável da viscoelasticidade é a sensibilidade à taxa de deformação: sob forças rápidas e súbitas o componente viscoso não tem tempo de escoar e opõe enorme resistência, tornando o tecido aparentemente mais rígido.",
    "distractorAnalysis": [
      "Está incorreta: Cargas rápidas aumentam a rigidez aparente, não diminuem.",
      "Está incorreta: A maior rigidez protege as estruturas anatómicas durante traumas dinâmicos moderados.",
      "Está incorreta: A taxa de aplicação da carga é um determinante primário da resposta viscoelástica."
    ],
    "nursingApplication": "Explica por que os ligamentos e ossos suportam melhor cargas breves e intensas do que tensões estáticas deformantes continuadas."
  },
  {
    "id": 2050,
    "topicId": 2,
    "question": "Nos slides de Biofísica, a expressão '(ossos e músculos)' surge explicitamente associada a qual das seguintes classes de corpos?",
    "options": [
      "Sólidos de Euclides.",
      "Corpos Plásticos puros.",
      "Corpos Viscoelásticos (Slide 19).",
      "Corpos Viscosos de Newton."
    ],
    "correctIndex": 2,
    "explanation": "O Slide 19 indica sem ambiguidade no ponto 5: '5. Corpos Viscoelásticos: Deformação dependente da tensão e do tempo; dissipação de energia por histerese (ossos e músculos)'.",
    "distractorAnalysis": [
      "Está incorreta: Sólidos de Euclides são modelos teóricos indeformáveis (Slide 15).",
      "Está incorreta: Plasticina é o exemplo de corpos plásticos (Slide 10 e 17).",
      "Está incorreta: Água e mel são os exemplos de corpos viscosos (Slide 11 e 18)."
    ],
    "nursingApplication": "Consolidação teórica da classificação reológica dos principais tecidos de sustentação e movimento do corpo humano."
  },
  {
    "id": 2051,
    "topicId": 2,
    "question": "Qual é a característica reológica que define os 'Corpos Plastoviscoelásticos' nos Slides 13 e 20 de Biofísica?",
    "options": [
      "Nunca acusam qualquer deformação sob nenhuma tensão.",
      "Comportam-se exclusivamente como gases perfeitos no vácuo.",
      "Dissipam energia sem possuir qualquer propriedade elástica ou plástica.",
      "Apresentam características dos corpos plásticos, viscosos e elásticos em simultâneo."
    ],
    "correctIndex": 3,
    "explanation": "O Slide 13 define expressamente: 'Corpos plastoviscoelásticos: Apresentam características dos corpos plásticos, viscosos e elásticos'.",
    "distractorAnalysis": [
      "Está incorreta: Nunca acusar deformação define os sólidos indeformáveis de Euclides (Slide 15).",
      "Está incorreta: Gases perfeitos pertencem à termodinâmica dos fluidos, não aos corpos reológicos sólidos/pastosos.",
      "Está incorreta: Os corpos plastoviscoelásticos combinam as três propriedades reológicas básicas."
    ],
    "nursingApplication": "Compreensão de sistemas reológicos complexos como biomateriais pastosos de penso e cimentos ósseos."
  },
  {
    "id": 2052,
    "topicId": 2,
    "question": "De acordo com a síntese do Slide 20, como se comportam os corpos plastoviscoelásticos sob pequenas tensões mecânicas?",
    "options": [
      "Comportam-se como corpos elásticos (recuperando a sua forma inicial após a remoção da carga leve).",
      "Comportam-se imediatamente como fluidos de alta viscosidade que escoam sem retorno.",
      "Sofrem fratura explosiva fragmentando-se em pó fino.",
      "Anulam a gravidade terrestre e entram em levitação estática."
    ],
    "correctIndex": 0,
    "explanation": "O Slide 20 especifica taxativamente: '6. Corpos plastoviscoelásticos: Comportam-se como corpos elásticos sob pequenas tensões; acima desse limiar, comportam-se como corpos plásticos'.",
    "distractorAnalysis": [
      "Está incorreta: O escoamento plástico irreversível só se manifesta após superar o limiar de tensão.",
      "Está incorreta: Pequenas tensões são absorvidas elasticamente sem fragmentação.",
      "Está incorreta: As leis da gravitação de Newton mantêm-se invariáveis."
    ],
    "nursingApplication": "Explica por que toques ligeiros não alteram a forma permanente de pastas e tecidos biológicos moldáveis."
  },
  {
    "id": 2053,
    "topicId": 2,
    "question": "De acordo com o Slide 20, o que acontece a um corpo plastoviscoelástico quando a tensão aplicada ULTRAPASSA o determinado limiar?",
    "options": [
      "Transforma-se instantaneamente num sólido de Euclides indeformável.",
      "Comporta-se como um corpo plástico, mantendo deformação permanente irreversível.",
      "Recua com velocidade infinita para a forma original.",
      "Emite calor por histerese sem mudar as suas dimensões."
    ],
    "correctIndex": 1,
    "explanation": "O Slide 20 determina: 'acima desse limiar, comportam-se como corpos plásticos', retendo a deformação máxima aplicada de forma permanente.",
    "distractorAnalysis": [
      "Está incorreta: Não se torna indeformável; pelo contrário, deforma-se plasticamente de forma extensa.",
      "Está incorreta: Acima do limiar perde a capacidade de retorno elástico integral à forma original.",
      "Está incorreta: A deformação dimensional é visível e permanente."
    ],
    "nursingApplication": "Comportamento idêntico ao de certos hidrogéis e materiais selantes usados em pensos avançados de feridas."
  },
  {
    "id": 2054,
    "topicId": 2,
    "question": "Qual é o exemplo do quotidiano apresentado nos Slides 13 e 20 para ilustrar um Corpo Plastoviscoelástico?",
    "options": [
      "Aço de alta resistência.",
      "Gelo seco a -78 ºC.",
      "Massa de pão.",
      "Agulha metálica de ponta romba."
    ],
    "correctIndex": 2,
    "explanation": "Os Slides 13 e 20 associam textualmente a 'Massa de pão' como o exemplo paradigmático de um corpo plastoviscoelástico.",
    "distractorAnalysis": [
      "Está incorreta: Aço é o exemplo de material extremamente rígido com módulo de 20 × 10¹⁰ N/m² (Slide 44).",
      "Está incorreta: Gelo seco é dióxido de carbono sólido em sublimação termodinâmica.",
      "Está incorreta: Agulha metálica é um instrumento rígido de aço inoxidável."
    ],
    "nursingApplication": "A massa de pão amassa-se plasticamente, flui lentamente no tempo e recupera elasticamente de toques leves."
  },
  {
    "id": 2055,
    "topicId": 2,
    "question": "Se pressionarmos muito suavemente a massa de pão com a ponta de um dedo (aplicando tensão bem abaixo do limiar) e retirarmos o dedo:",
    "options": [
      "Fica um buraco fundo permanente que nunca mais desaparece.",
      "A massa líquida escorre pela mesa fora sem parar.",
      "A massa evapora-se sob a forma de vapor de água.",
      "A massa comporta-se elasticamente e recupera a sua forma original sem deformação permanente visível."
    ],
    "correctIndex": 3,
    "explanation": "Abaixo do limiar plástico, o material opera no seu regime elástico inicial (Slide 20: 'Comportam-se como corpos elásticos sob pequenas tensões'), recuperando a superfície original.",
    "distractorAnalysis": [
      "Está incorreta: O buraco permanente só surge se a força exercida ultrapassar o limiar de tensão plástico.",
      "Está incorreta: Abaixo do limiar o material retém integridade elástica e não escoa livremente.",
      "Está incorreta: Não há vaporização de matéria biológica sob contacto mecânico suave."
    ],
    "nursingApplication": "Ilustra de forma clara o comportamento elástico inicial de materiais plastoviscoelásticos."
  },
  {
    "id": 2056,
    "topicId": 2,
    "question": "Quando um padeiro amassa vigorosamente a massa de pão superando o limiar de tensão e mantendo a força ao longo dos minutos:",
    "options": [
      "A massa sofre deformação plástica permanente combinada com escoamento viscoso dependente do tempo.",
      "A massa comporta-se como um sólido indeformável de Euclides.",
      "A massa adquire a constante de Hooke de uma mola de dinamómetro.",
      "A massa anula toda a força normal contra a bancada."
    ],
    "correctIndex": 0,
    "explanation": "Superado o limiar, manifestam-se as componentes plástica (retenção da nova forma moldada) e viscosa (taxa de deformação dependente do tempo de manipulação mecânica).",
    "distractorAnalysis": [
      "Está incorreta: Sólidos de Euclides nunca se deformam (Slide 15), o oposto da massa ao ser amassada.",
      "Está incorreta: Molas de Hooke devolvem integralmente a forma inicial, o que a massa sovada não faz.",
      "Está incorreta: A bancada continua a exercer força normal de reação em equilíbrio de sustentação."
    ],
    "nursingApplication": "Demonstração prática da tríade: elasticidade leve, plasticidade pós-limiar e escoamento viscoso temporal."
  },
  {
    "id": 2057,
    "topicId": 2,
    "question": "O que determina a transição entre a resposta elástica e a resposta plástica num corpo plastoviscoelástico (Slide 20)?",
    "options": [
      "A altitude do laboratório em relação ao nível do mar.",
      "O valor da tensão aplicada relativamente ao limiar de tensão do material.",
      "A velocidade da rotação da Terra em torno do Sol.",
      "O número atómico dos neutrões do ar circundante."
    ],
    "correctIndex": 1,
    "explanation": "O limiar de tensão é a fronteira reológica do material: tensões < limiar produzem resposta elástica reversível; tensões > limiar produzem deformação plástica irreversível (Slide 20).",
    "distractorAnalysis": [
      "Está incorreta: A transição mecânica decorre de forças de coesão interna do material, não de altitude geográfica.",
      "Está incorreta: A rotação planetária não governa o limiar de escoamento mecânico de corpos plastoviscoelásticos.",
      "Está incorreta: Neutrões não possuem número atómico e não determinam o limiar mecânico macroscópico."
    ],
    "nursingApplication": "Conceito essencial para saber a força máxima que pode ser exercida num tecido sem causar deformidade plástica residual."
  },
  {
    "id": 2058,
    "topicId": 2,
    "question": "A capacidade de um corpo responder como elástico a forças ínfimas, mas fluir plasticamente com retenção da nova forma sob forças intensas e duradouras traduz:",
    "options": [
      "O comportamento indeformável de Euclides.",
      "A rigidez elástica linear do aço.",
      "O comportamento dos Corpos Plastoviscoelásticos (Slide 20).",
      "O vácuo quântico absoluto."
    ],
    "correctIndex": 2,
    "explanation": "Esta dualidade de resposta regida pelo limiar de tensão e modulada pelo tempo é a essência reológica dos corpos plastoviscoelásticos.",
    "distractorAnalysis": [
      "Está incorreta: Sólidos de Euclides não acusam deformação sob nenhuma intensidade de força (Slide 15).",
      "Está incorreta: O aço comporta-se como elástico de Hooke de elevadíssimo módulo até tensões colossais (Slide 44).",
      "Está incorreta: O vácuo quântico é um estado de ausência de matéria na física de partículas."
    ],
    "nursingApplication": "Permite aos alunos reconhecer a sexta categoria da taxonomia reológica dos slides."
  },
  {
    "id": 2059,
    "topicId": 2,
    "question": "Na lista de síntese dos conceitos lecionados (Slide 20), qual é o nome formal do sexto e último tipo de corpo?",
    "options": [
      "Corpos Viscoelásticos.",
      "Corpos Plásticos puros.",
      "Sólidos de Hooke de primeira ordem.",
      "Corpos plastoviscoelásticos."
    ],
    "correctIndex": 3,
    "explanation": "O Slide 20 numera expressamente: '6. Corpos plastoviscoelásticos: Comportam-se como corpos elásticos sob pequenas tensões; acima desse limiar, comportam-se como corpos plásticos'.",
    "distractorAnalysis": [
      "Está incorreta: Corpos Viscoelásticos é o ponto 5 do mesmo slide.",
      "Está incorreta: Corpos Plásticos é o ponto 3 do mesmo slide.",
      "Está incorreta: Sólidos de Hooke é o ponto 2 do mesmo slide."
    ],
    "nursingApplication": "Garante a memorização e correta ordenação das categorias reológicas do programa."
  },
  {
    "id": 2060,
    "topicId": 2,
    "question": "Que propriedade dos Corpos Viscosos está também presente na resposta mecânica dos plastoviscoelásticos?",
    "options": [
      "A dependência da deformação em relação ao tempo de aplicação da força.",
      "A restituição instantânea e integral da forma em 0,001 segundos.",
      "A capacidade de evaporar espontaneamente à temperatura ambiente.",
      "A ausência total de qualquer massa ou peso mensurável."
    ],
    "correctIndex": 0,
    "explanation": "O prefixo 'visco' traduz a presença de atrito interno dependente do tempo: quanto mais tempo a tensão atua, maior é o escoamento observado.",
    "distractorAnalysis": [
      "Está incorreta: Restituição instantânea pertence à componente elástica de Hooke, não à viscosa.",
      "Está incorreta: Viscosidade refere-se à resistência mecânica ao escoamento, não à taxa de evaporação.",
      "Está incorreta: Todos os corpos plastoviscoelásticos são materiais macroscópicos com massa inercial bem definida."
    ],
    "nursingApplication": "Consolida a compreensão dos componentes do termo 'plasto-visco-elástico'."
  },
  {
    "id": 2061,
    "topicId": 2,
    "question": "Qual dos seguintes corpos da Reologia é definido no Slide 15 como 'Modelos teóricos indeformáveis; distância interpartículas invariável sob qualquer força'?",
    "options": [
      "Sólidos de Hooke.",
      "Sólidos de Euclides.",
      "Corpos Viscoelásticos.",
      "Corpos Plásticos."
    ],
    "correctIndex": 1,
    "explanation": "O Slide 15 estabelece formalmente no ponto 1: '1. Sólidos de Euclides: Modelos teóricos indeformáveis; distância interpartículas invariável sob qualquer força'.",
    "distractorAnalysis": [
      "Está incorreta: Sólidos de Hooke sofrem deformação proporcional à tensão com restituição integral (Slide 16).",
      "Está incorreta: Corpos Viscoelásticos sofrem deformação dependente do tempo com histerese (Slide 19).",
      "Está incorreta: Corpos Plásticos sofrem deformação permanente após um limiar (Slide 17)."
    ],
    "nursingApplication": "Identificação imediata da primeira classe conceitual do resumo de Paulo Pereira."
  },
  {
    "id": 2062,
    "topicId": 2,
    "question": "Qual corpo da Reologia é definido no Slide 16 por 'Deformação elástica diretamente proporcional à tensão; restituição integral da forma original após remoção da tensão'?",
    "options": [
      "Corpos Viscosos.",
      "Sólidos de Euclides.",
      "Sólidos de Hooke.",
      "Corpos plastoviscoelásticos."
    ],
    "correctIndex": 2,
    "explanation": "O Slide 16 estabelece formalmente no ponto 2: '2. Sólidos de Hooke: Deformação elástica diretamente proporcional à tensão; restituição integral da forma original após remoção da tensão'.",
    "distractorAnalysis": [
      "Está incorreta: Corpos Viscosos não restituem a sua forma original (Slide 18).",
      "Está incorreta: Sólidos de Euclides nunca acusam qualquer deformação (Slide 15).",
      "Está incorreta: Corpos plastoviscoelásticos exibem comportamento plástico irreversível após o limiar (Slide 20)."
    ],
    "nursingApplication": "Identificação do modelo elástico linear canónico da física clássica."
  },
  {
    "id": 2063,
    "topicId": 2,
    "question": "Qual corpo da Reologia é definido no Slide 17 por 'Só acusam deformação a partir de um limiar de tensão; mantêm permanentemente a deformação máxima'?",
    "options": [
      "Sólidos de Euclides.",
      "Sólidos de Hooke.",
      "Corpos Viscoelásticos.",
      "Corpos Plásticos."
    ],
    "correctIndex": 3,
    "explanation": "O Slide 17 estabelece formalmente no ponto 3: '3. Corpos Plásticos: Só acusam deformação a partir de um limiar de tensão; mantêm permanentemente a deformação máxima'.",
    "distractorAnalysis": [
      "Está incorreta: Sólidos de Euclides nunca se deformam sob qualquer tensão (Slide 15).",
      "Está incorreta: Sólidos de Hooke deparam-se com restituição elástica integral e deformam antes de qualquer limiar rígido (Slide 16).",
      "Está incorreta: Corpos Viscoelásticos exibem histerese e recuperação parcial no tempo (Slide 19)."
    ],
    "nursingApplication": "Fixa a definição textual do terceiro grupo reológico da aula."
  },
  {
    "id": 2064,
    "topicId": 2,
    "question": "Qual corpo da Reologia é definido no Slide 18 por 'Deformação dependente da tensão e do tempo; não restituem a sua forma original'?",
    "options": [
      "Corpos Viscosos.",
      "Sólidos de Euclides.",
      "Sólidos de Hooke.",
      "Corpos Viscoelásticos."
    ],
    "correctIndex": 0,
    "explanation": "O Slide 18 estabelece formalmente no ponto 4: '4. Corpos Viscosos: Deformação dependente da tensão e do tempo; não restituem a sua forma original'.",
    "distractorAnalysis": [
      "Está incorreta: Sólidos de Euclides são indeformáveis (Slide 15).",
      "Está incorreta: Sólidos de Hooke restituem integralmente a sua forma (Slide 16).",
      "Está incorreta: Corpos Viscoelásticos possuem componente elástica com recuperação e histerese (Slide 19)."
    ],
    "nursingApplication": "Identificação imediata da quarta classe reológica dos slides."
  },
  {
    "id": 2065,
    "topicId": 2,
    "question": "Qual corpo da Reologia é definido no Slide 19 por 'Deformação dependente da tensão e do tempo; dissipação de energia por histerese (ossos e músculos)'?",
    "options": [
      "Corpos Plásticos.",
      "Corpos Viscoelásticos.",
      "Sólidos de Euclides.",
      "Sólidos de Hooke."
    ],
    "correctIndex": 1,
    "explanation": "O Slide 19 estabelece formalmente no ponto 5: '5. Corpos Viscoelásticos: Deformação dependente da tensão e do tempo; dissipação de energia por histerese (ossos e músculos)'.",
    "distractorAnalysis": [
      "Está incorreta: Corpos Plásticos mantêm deformação permanente sem componente de histerese biológica de suporte (Slide 17).",
      "Está incorreta: Sólidos de Euclides são indeformáveis (Slide 15).",
      "Está incorreta: Sólidos de Hooke não dependem do tempo nem apresentam histerese nos ciclos de deformação (Slide 16)."
    ],
    "nursingApplication": "O grupo reológico biológico mais relevante para a anatomia e biomecânica humana."
  },
  {
    "id": 2066,
    "topicId": 2,
    "question": "Qual corpo da Reologia é definido no Slide 20 por 'Comportam-se como corpos elásticos sob pequenas tensões; acima desse limiar, comportam-se como corpos plásticos'?",
    "options": [
      "Sólidos de Hooke.",
      "Corpos Viscosos.",
      "Corpos plastoviscoelásticos.",
      "Sólidos de Euclides."
    ],
    "correctIndex": 2,
    "explanation": "O Slide 20 estabelece formalmente no ponto 6: '6. Corpos plastoviscoelásticos: Comportam-se como corpos elásticos sob pequenas tensões; acima desse limiar, comportam-se como corpos plásticos'.",
    "distractorAnalysis": [
      "Está incorreta: Sólidos de Hooke mantêm comportamento elástico linear sem transição para escoamento plástico permanente (Slide 16).",
      "Está incorreta: Corpos Viscosos escoam continuamente e não possuem resposta elástica reversível (Slide 18).",
      "Está incorreta: Sólidos de Euclides nunca se deformam sob nenhuma tensão (Slide 15)."
    ],
    "nursingApplication": "Conclusão da taxonomia dos 6 corpos da reologia dos slides de Paulo Pereira."
  },
  {
    "id": 2067,
    "topicId": 2,
    "question": "Qual é a associação CORRETA entre o tipo de corpo reológico e o exemplo prático indicado nos Slides 5 a 13?",
    "options": [
      "Hooke: Mel | Viscoso: Mola | Plástico: Massa de pão",
      "Euclides: Esponja | Viscoelástico: Vidro | Plástico: Água",
      "Plastoviscoelástico: Mola | Hooke: Plasticina | Viscoso: Cartilagem",
      "Hooke: Mola | Plástico: Plasticina | Viscoso: Mel (ou água) | Viscoelástico: Esponja (ou cartilagem) | Plastoviscoelástico: Massa de pão"
    ],
    "correctIndex": 3,
    "explanation": "Os slides estabelecem rigorosamente os pares: Mola para Sólido de Hooke (Slide 5), Plasticina para Corpo Plástico (Slide 10), Água/Mel para Corpo Viscoso (Slide 11), Esponja/Cartilagem para Viscoelástico (Slide 12) e Massa de pão para Plastoviscoelástico (Slide 13).",
    "distractorAnalysis": [
      "Está incorreta: Mel é viscoso e mola é de Hooke; as correspondências estão trocadas.",
      "Está incorreta: Esponja é viscoelástica e água é viscosa; pares totalmente incorretos.",
      "Está incorreta: Massa de pão é plastoviscoelástica e mola é de Hooke; correspondências erradas."
    ],
    "nursingApplication": "Mapeamento mnemónico completo que garante o acerto imediato de questões de exame."
  },
  {
    "id": 2068,
    "topicId": 2,
    "question": "Em qual dos 6 corpos reológicos a distância interpartículas é assumida como perfeitamente invariável sob qualquer solicitação mecânica (Slide 15)?",
    "options": [
      "Nos Sólidos de Euclides.",
      "Nos Sólidos de Hooke.",
      "Nos Corpos Viscosos.",
      "Nos Corpos Plastoviscoelásticos."
    ],
    "correctIndex": 0,
    "explanation": "Apenas os Sólidos de Euclides possuem a hipótese de distância interpartículas estritamente invariável sob qualquer força, sendo por definição indeformáveis (Slide 15).",
    "distractorAnalysis": [
      "Está incorreta: Nos sólidos de Hooke a distância entre partículas varia proporcionalmente à tensão (Slide 16).",
      "Está incorreta: Nos corpos viscosos as partículas afastam-se e deslizam umas sobre as outras (Slide 18).",
      "Está incorreta: Nos plastoviscoelásticos a distância interpartículas altera-se em função da tensão e tempo (Slide 20)."
    ],
    "nursingApplication": "Conceito exclusivo do modelo teórico euclidiano de corpo rígido."
  },
  {
    "id": 2069,
    "topicId": 2,
    "question": "Qual é a diferença de restituição entre um Corpo Plástico e um Sólido de Hooke quando a força deformadora é totalmente removida?",
    "options": [
      "O corpo plástico recupera 100% da forma e o de Hooke fica permanentemente deformado.",
      "O sólido de Hooke restitui integralmente a sua forma original, enquanto o corpo plástico mantém permanentemente a deformação máxima.",
      "Ambos recuperam exatamente a metade da forma original.",
      "Nenhum dos dois recupera a forma, transformando-se ambos em líquidos."
    ],
    "correctIndex": 1,
    "explanation": "A essência da distinção nos Slides 16 e 17 é a restituição: o sólido de Hooke volta totalmente à forma inicial (reversibilidade elástica), ao passo que o corpo plástico retém a deformação permanentemente (irreversibilidade plástica).",
    "distractorAnalysis": [
      "Está incorreta: As afirmações estão invertidas: é o de Hooke que recupera e o plástico que retém a deformação.",
      "Está incorreta: O sólido de Hooke recupera a totalidade (100%), não apenas metade.",
      "Está incorreta: Sólidos elásticos de Hooke mantêm a solidez e recuperam a sua geometria basal."
    ],
    "nursingApplication": "Conceito crucial para a caracterização de materiais biomédicos e próteses articulares."
  },
  {
    "id": 2070,
    "topicId": 2,
    "question": "A propriedade de 'dissipação de energia por histerese' é atribuída no resumo de Paulo Pereira (Slide 19) exclusivamente a qual classe?",
    "options": [
      "Aos Sólidos de Euclides.",
      "Aos Sólidos de Hooke puros.",
      "Aos Corpos Viscoelásticos (ossos e músculos).",
      "Aos Corpos Plásticos puros."
    ],
    "correctIndex": 2,
    "explanation": "O Slide 19 menciona a dissipação por histerese como a marca do ponto 5: '5. Corpos Viscoelásticos: Deformação dependente da tensão e do tempo; dissipação de energia por histerese (ossos e músculos)'.",
    "distractorAnalysis": [
      "Está incorreta: Sólidos de Euclides não se deformam e não dissipam energia de deformação (Slide 15).",
      "Está incorreta: Sólidos de Hooke armazenam energia elástica sem dissipação histerética ideal (Slide 16).",
      "Está incorreta: Corpos plásticos absorvem energia de deformação permanente sem laço histerético de retorno biológico."
    ],
    "nursingApplication": "Chave conceptual de diferenciação da biomecânica dos tecidos vivos de suporte e locomoção."
  },
  {
    "id": 2071,
    "topicId": 2,
    "question": "Como são caracterizadas as 'Forças de compressão' nos Slides 21, 24 e 30 de Biofísica?",
    "options": [
      "Forças tangenciais paralelas que cortam as superfícies.",
      "Momentos de rotação que torcem o osso em torno do seu eixo.",
      "Forças divergentes que aumentam o comprimento longitudinal da barra.",
      "Forças convergentes que atuam no sentido de aproximar as extremidades do corpo."
    ],
    "correctIndex": 3,
    "explanation": "Os Slides 21, 24 e 30 definem as forças de compressão taxativamente como: 'Forças de compressão: Forças convergentes'.",
    "distractorAnalysis": [
      "Está incorreta: Forças tangenciais paralelas definem o Cisalhamento (Slide 27 e 33).",
      "Está incorreta: Momento de rotação em torno do eixo define a Torção (Slide 28 e 34).",
      "Está incorreta: Forças divergentes definem as Forças de Tração (Slide 23 e 31)."
    ],
    "nursingApplication": "A compressão é o esforço primordial suportado pela coluna vertebral e membros inferiores na postura ereta."
  },
  {
    "id": 2072,
    "topicId": 2,
    "question": "O que acontece às dimensões geométricas de uma barra sujeita a forças de compressão de acordo com os Slides 21 e 24?",
    "options": [
      "Diminuição do comprimento da barra (L) e Aumento da área de secção (S).",
      "Aumento do comprimento da barra (L) e Diminuição da área de secção (S).",
      "Aumento simultâneo do comprimento e da área de secção transversal.",
      "As dimensões mantêm-se rigorosamente invariáveis como num sólido de Euclides."
    ],
    "correctIndex": 0,
    "explanation": "Os Slides 21 e 24 indicam textualmente como consequências da compressão: 'Diminuição do comprimento da barra (L) | Aumento da área de secção (S)'.",
    "distractorAnalysis": [
      "Está incorreta: Aumento de L e diminuição de S é o efeito das Forças de Tração (Slide 23 e 24).",
      "Está incorreta: Aumentar simultaneamente ambas as dimensões violaria a conservação da densidade e volume do sólido.",
      "Está incorreta: Dimensões invariáveis só ocorrem no modelo puramente teórico indeformável."
    ],
    "nursingApplication": "Explica por que estruturas comprimidas sofrem encurtamento longitudinal e alargamento transversal."
  },
  {
    "id": 2073,
    "topicId": 2,
    "question": "Qual é o exemplo biomecânico clássico apresentado no Slide 30 para ilustrar a deformação por Compressão no corpo humano?",
    "options": [
      "A rotação da tíbia ao desviar o pé no esqui na neve.",
      "Fémur suporta carga corporal diária.",
      "Tração do tendão pelo músculo esquelético.",
      "Atrito e cisalhamento da pele no lençol do leito."
    ],
    "correctIndex": 1,
    "explanation": "O Slide 30 indica textualmente no ponto 1: '1. Compressão: Forças convergentes; encurtamento longitudinal; fémur suporta carga corporal diária'.",
    "distractorAnalysis": [
      "Está incorreta: Rotação da perna é o exemplo de Torção (Slide 34).",
      "Está incorreta: Tração do tendão é o exemplo de Tração (Slide 31).",
      "Está incorreta: Atrito no leito é o exemplo de Cisalhamento (Slide 33)."
    ],
    "nursingApplication": "O fémur suporta forças axiais de compressão convergentes que absorvem o peso de toda a metade superior do corpo."
  },
  {
    "id": 2074,
    "topicId": 2,
    "question": "Durante a posição de pé estática, que tipo de solicitação mecânica predomina ao longo do eixo da diáfise do fémur e tíbia?",
    "options": [
      "Torção em alta rotação angular.",
      "Tração divergente que afasta o joelho da bacia.",
      "Compressão axial convergente devida ao suporte do peso do corpo contra o solo.",
      "Cisalhamento hidrodinâmico puro de Newton."
    ],
    "correctIndex": 2,
    "explanation": "A gravidade atrai a massa corporal para baixo e o solo empurra os pés para cima (força normal). O fémur fica sujeito a forças axiais convergentes dirigidas para o seu centro: compressão mecânica (Slide 30).",
    "distractorAnalysis": [
      "Está incorreta: A torção ocorre quando há rotação em torno do eixo, ausente na postura estática alinhada.",
      "Está incorreta: A tração atuaria se o membro estivesse a ser puxado para esticar, não ao apoiar o peso.",
      "Está incorreta: Cisalhamento hidrodinâmico ocorre no escoamento de fluidos como o sangue."
    ],
    "nursingApplication": "Base para compreender fraturas por compressão em doentes idosos com osteoporose severa."
  },
  {
    "id": 2075,
    "topicId": 2,
    "question": "Por que razão a área de secção transversal (S) aumenta quando uma barra sofre compressão axial (Slides 21-24)?",
    "options": [
      "Porque a massa do corpo triplica por absorção de fotões solares.",
      "Porque as forças convergentes empurram as partículas para o espaço exterior.",
      "Porque a constante elástica k se anula durante o encurtamento.",
      "Porque o material encurta longitudinalmente e expande-se lateralmente para conservar o volume da estrutura."
    ],
    "correctIndex": 3,
    "explanation": "Sob forças convergentes, ao diminuir a dimensão longitudinal L, a matéria do sólido expande-se nas direções transversais perpendiculares, resultando num alargamento da área de secção S.",
    "distractorAnalysis": [
      "Está incorreta: A massa é constante na mecânica dos materiais clássica.",
      "Está incorreta: As partículas permanecem no interior da barra sólida em reorganização elástica.",
      "Está incorreta: A constante elástica da barra é uma propriedade finita bem definida."
    ],
    "nursingApplication": "Compreensão de que um disco intervertebral sob compressão abaula lateralmente em direção ao canal medular."
  },
  {
    "id": 2076,
    "topicId": 2,
    "question": "Como se orientam no espaço os vetores de força que produzem compressão pura (Slide 21)?",
    "options": [
      "Atuam na mesma linha de ação (colineares), apontando um em direção ao outro (sentidos convergentes).",
      "Atuam em linhas perpendiculares formando um ângulo de 90 graus entre si.",
      "Atuam na mesma linha apontando para fora do corpo (sentidos divergentes).",
      "Atuam em círculos concêntricos girando no sentido dos ponteiros do relógio."
    ],
    "correctIndex": 0,
    "explanation": "Forças de compressão pura são colineares e convergentes: atuam ao longo do eixo principal da barra, com sentidos opostos dirigidos para o interior do material, tendendo a aproximar as suas extremidades.",
    "distractorAnalysis": [
      "Está incorreta: Forças perpendiculares produzem flexão, não compressão pura (Slide 26).",
      "Está incorreta: Sentidos divergentes produzem tração (Slide 23).",
      "Está incorreta: Forças circulares geram torção rotativa (Slide 28)."
    ],
    "nursingApplication": "Permite desenhar corretamente diagramas de forças compressivas em ossos longos."
  },
  {
    "id": 2077,
    "topicId": 2,
    "question": "Os corpos vertebrais da coluna de um enfermeiro ao sustentar um doente suportam primariamente que tipo de força deformadora (Slide 30)?",
    "options": [
      "Forças divergentes de tração que separam as vértebras.",
      "Forças convergentes de compressão axial que diminuem a espessura dos discos e corpos vertebrais.",
      "Forças radioativas de fusão nuclear fraca.",
      "Forças centrífugas decorrentes da translação da Terra."
    ],
    "correctIndex": 1,
    "explanation": "O peso do tronco do enfermeiro somado à carga do doente exerce uma força massiva vertical descendente contra a resistência do sacro e bacia: forças convergentes de compressão ao longo da coluna (Slide 30).",
    "distractorAnalysis": [
      "Está incorreta: A tração afastaria as vértebras (como numa mesa de descompressão ortopédica), o oposto da carga de elevação.",
      "Está incorreta: Fusão nuclear não ocorre no esqueleto biológico humano.",
      "Está incorreta: Forças centrífugas cósmicas têm valor desprezível na coluna vertebral."
    ],
    "nursingApplication": "Justifica a necessidade de manter a coluna vertical e alinhada para distribuir a compressão uniformemente pelos corpos vertebrais."
  },
  {
    "id": 2078,
    "topicId": 2,
    "question": "Quando uma força de compressão convergente excede a resistência mecânica máxima do osso cortical ou trabecular:",
    "options": [
      "O osso transforma-se imediatamente numa esponja viscoelástica perfeita.",
      "O osso estica indefinidamente até atingir o dobro do comprimento.",
      "Ocorre colapso estrutural e fratura por esmagamento (fratura por compressão).",
      "A massa inercial do osso é ejetada para o espaço sob a forma de luz."
    ],
    "correctIndex": 2,
    "explanation": "Se a tensão mecânica σ de compressão ultrapassar o limite de fratura do material ósseo, a estrutura entra em colapso mecânico, originando fraturas por afundamento ou esmagamento (comuns em vértebras osteoporóticas).",
    "distractorAnalysis": [
      "Está incorreta: O tecido lesado quebra estruturalmente e não adquire viscoelasticidade infinita.",
      "Está incorreta: Esticar ocorreria em tração extrema, enquanto compressão tende a encurtar e esmagar.",
      "Está incorreta: A matéria óssea quebra mantendo a sua massa inalterada."
    ],
    "nursingApplication": "Alerta de segurança na mobilização de utentes frágeis com osteopenia para prevenir fraturas vertebrais patológicas."
  },
  {
    "id": 2079,
    "topicId": 2,
    "question": "No Slide 30, a consequência longitudinal das forças convergentes na compressão é resumida pelo termo:",
    "options": [
      "'Alongamento axial'",
      "'Rotação perimetral'",
      "'Curvatura transversal'",
      "'Encurtamento longitudinal'"
    ],
    "correctIndex": 3,
    "explanation": "O Slide 30 especifica textualmente: '1. Compressão: Forças convergentes; encurtamento longitudinal; fémur suporta carga corporal diária'.",
    "distractorAnalysis": [
      "Está incorreta: 'Aumento longitudinal' ou alongamento é a consequência da Tração (Slide 31).",
      "Está incorreta: Rotação é a consequência da Torção (Slide 34).",
      "Está incorreta: Curvatura com plano neutro é a consequência da Flexão (Slide 32)."
    ],
    "nursingApplication": "Fixa o termo concetual exato utilizado pelo docente nos slides teóricos."
  },
  {
    "id": 2080,
    "topicId": 2,
    "question": "Comparando Compressão e Tração nos Slides 21 a 24, qual é o contraste dimensional fundamental entre ambas?",
    "options": [
      "Na Compressão há diminuição de L e aumento de S; na Tração há aumento de L e diminuição de S.",
      "Na Compressão o comprimento aumenta e na Tração o comprimento diminui.",
      "Ambas provocam rigorosamente diminuição simultânea de L e de S.",
      "Ambas provocam aumento simultâneo de L e de S sem qualquer diferença."
    ],
    "correctIndex": 0,
    "explanation": "Os Slides 21 a 24 colocam em oposição direta: Compressão (forças convergentes): L diminui, S aumenta; Tração (forças divergentes): L aumenta, S diminui.",
    "distractorAnalysis": [
      "Está incorreta: As descrições dimensionais estão trocadas nesta opção.",
      "Está incorreta: Diminuição mútua violaria a conservação de matéria do sólido.",
      "Está incorreta: As duas deformações têm efeitos geométricos perfeitamente opostos ao longo do eixo da barra."
    ],
    "nursingApplication": "Síntese comparativa essencial entre os dois primeiros tipos de esforços axiais da Reologia."
  },
  {
    "id": 2081,
    "topicId": 2,
    "question": "Como são caracterizadas as 'Forças de tração' nos Slides 23, 24 e 31 de Biofísica?",
    "options": [
      "Forças convergentes que reduzem o comprimento do corpo.",
      "Forças divergentes que atuam no sentido de esticar e aumentar o comprimento longitudinal do corpo.",
      "Momentos de binário que rodam as arestas retilíneas em círculos.",
      "Forças eletromagnéticas que unem os protões no núcleo."
    ],
    "correctIndex": 1,
    "explanation": "Os Slides 23, 24 e 31 definem textualmente as forças de tração como: 'Forças de tração: Forças divergentes'.",
    "distractorAnalysis": [
      "Está incorreta: Forças convergentes definem as Forças de Compressão (Slide 21 e 30).",
      "Está incorreta: Momentos rotativos definem a Torção (Slide 28 e 34).",
      "Está incorreta: Forças de união nuclear definem a Força Nuclear Forte (Slide 30 do Tópico 1)."
    ],
    "nursingApplication": "A tração é a solicitação típica suportada por tendões, ligamentos e fios de sutura cirúrgica."
  },
  {
    "id": 2082,
    "topicId": 2,
    "question": "O que acontece às dimensões geométricas de uma barra sujeita a forças de tração (Slides 23-24)?",
    "options": [
      "Diminuição do comprimento da barra (L) e Aumento da área de secção (S).",
      "Diminuição simultânea do comprimento e da secção transversal.",
      "Aumento do comprimento da barra (L) e Diminuição da área de secção (S).",
      "Não ocorre qualquer alteração dimensional na estrutura da barra."
    ],
    "correctIndex": 2,
    "explanation": "Os Slides 23 e 24 indicam expressamente as consequências da tração mecânica: 'Aumento do comprimento da barra (L) | Diminuição da área de secção (S)'.",
    "distractorAnalysis": [
      "Está incorreta: Diminuição de L e aumento de S é o efeito característico da Compressão (Slide 21 e 24).",
      "Está incorreta: Diminuição de ambas violaria a conservação geométrica do volume sólido.",
      "Está incorreta: A barra deforma-se mensuravelmente sob ação da força de tração F (Slide 39)."
    ],
    "nursingApplication": "Explica por que um tendão ou elástico fica mais fino na secção transversal quando é esticado."
  },
  {
    "id": 2083,
    "topicId": 2,
    "question": "Qual é o exemplo biomecânico clássico apresentado no Slide 31 para ilustrar a deformação por Tração no corpo humano?",
    "options": [
      "Fémur suporta carga corporal diária.",
      "Atrito e escorregamento no leito hospitalar.",
      "Tensão a meio de um osso fletido.",
      "Tração do tendão pelo músculo."
    ],
    "correctIndex": 3,
    "explanation": "O Slide 31 indica textualmente no ponto 2: '2. Tração: Forças divergentes; aumento longitudinal; tração do tendão pelo músculo'.",
    "distractorAnalysis": [
      "Está incorreta: Fémur a suportar carga é o exemplo de Compressão (Slide 30).",
      "Está incorreta: Atrito no leito é o exemplo de Cisalhamento (Slide 33).",
      "Está incorreta: Tensão a meio de um osso fletido é o exemplo de Flexão (Slide 32)."
    ],
    "nursingApplication": "A contração das fibras musculares gera forças trativas divergentes transmitidas pelo tendão ao osso."
  },
  {
    "id": 2084,
    "topicId": 2,
    "question": "Quando o tendão de Aquiles (calcâneo) é fortemente solicitado durante a fase de impulsão da marcha, as forças que nele atuam são:",
    "options": [
      "Forças divergentes de tração pura que aumentam o comprimento do tendão e diminuem ligeiramente a sua secção.",
      "Forças convergentes de compressão que esmagam o tendão contra o calcanhar.",
      "Forças puramente nucleares fracas de desintegração radioativa.",
      "Momentos de torção pura sem qualquer componente longitudinal de força."
    ],
    "correctIndex": 0,
    "explanation": "O músculo tríceps sural contrai-se puxando o tendão para cima, enquanto a inserção no osso calcâneo ancora o tendão: atuam forças divergentes que tracionam longitudinalmente a estrutura tendinosa (Slide 31).",
    "distractorAnalysis": [
      "Está incorreta: Os tendões não funcionam em compressão (dobrar-se-iam como cordas frouxas); funcionam exclusivamente em tração.",
      "Está incorreta: A biologia dos tendões obedece à biofísica mecânica e não a desintegrações radioativas nucleares.",
      "Está incorreta: A solicitação primária do tendão de Aquiles é axial de tração, não de torção pura."
    ],
    "nursingApplication": "Compreensão essencial para a prevenção e reabilitação de tendinopatias e roturas do tendão de Aquiles."
  },
  {
    "id": 2085,
    "topicId": 2,
    "question": "O que significa dizer que as forças de tração são 'divergentes' nos Slides 23 e 24?",
    "options": [
      "Que os vetores de força convergem e apontam um para o outro no interior da barra.",
      "Que os vetores de força têm sentidos opostos dirigidos para o exterior do corpo ao longo da mesma linha de ação.",
      "Que os vetores de força giram continuamente em torno do centro de massa.",
      "Que as forças desaparecem no instante em que a barra começa a esticar."
    ],
    "correctIndex": 1,
    "explanation": "Divergente significa que as setas dos vetores de força apontam em sentidos contrários para fora do corpo (afastando-se mutuamente ao longo do eixo), exercendo um puxão que tende a esticar o material.",
    "distractorAnalysis": [
      "Está incorreta: Apontar um para o outro define forças convergentes (compressão, Slide 21).",
      "Está incorreta: Girar em círculo define momentos de torção rotativa (Slide 28).",
      "Está incorreta: As forças mantêm-se aplicadas continuamente enquanto durar a tração."
    ],
    "nursingApplication": "Permite interpretar corretamente setas de vetores de tração em esquemas ortopédicos e trações transesqueléticas."
  },
  {
    "id": 2086,
    "topicId": 2,
    "question": "Na síntese do Slide 31, qual é a consequência longitudinal imediata das forças de tração?",
    "options": [
      "Encurtamento longitudinal maciço.",
      "Curvatura com plano neutro central nulo.",
      "Aumento longitudinal.",
      "Rotação helicoidal em torno do eixo."
    ],
    "correctIndex": 2,
    "explanation": "O Slide 31 estipula formalmente: '2. Tração: Forças divergentes; aumento longitudinal; tração do tendão pelo músculo'.",
    "distractorAnalysis": [
      "Está incorreta: Encurtamento longitudinal é a consequência da Compressão (Slide 30).",
      "Está incorreta: Curvatura com plano neutro é a consequência da Flexão (Slide 32).",
      "Está incorreta: Rotação helicoidal decorre da Torção (Slide 34)."
    ],
    "nursingApplication": "Fixa a terminologia padrão dos slides para provas e exames de avaliação."
  },
  {
    "id": 2087,
    "topicId": 2,
    "question": "Um fio de sutura cirúrgica utilizado para encerrar uma incisão abdominal está sujeito a que tipo de esforço mecânico?",
    "options": [
      "Compressão convergente que achata o fio.",
      "Cisalhamento rotativo nuclear.",
      "Flexão centrípeta com plano neutro.",
      "Esforço mecânico de tração (forças divergentes que tendem a esticar o fio ao conter a tensão das bordas da ferida)."
    ],
    "correctIndex": 3,
    "explanation": "As margens da ferida puxam o fio de sutura em sentidos opostos, exercendo solicitações clássicas de tração divergente sobre o monofilamento cirúrgico.",
    "distractorAnalysis": [
      "Está incorreta: Fios flexíveis colapsariam sob compressão; resistem unicamente sob tração axial.",
      "Está incorreta: O fio opera por tensão elástica macroscópica de tração, sem fenómenos nucleares.",
      "Está incorreta: O fio esticado não atua como viga de flexão com plano neutro rígido."
    ],
    "nursingApplication": "Importante para a seleção do calibre e resistência à tração dos materiais de sutura em bloco operatório."
  },
  {
    "id": 2088,
    "topicId": 2,
    "question": "Uma barra metálica com comprimento inicial de 10 cm que, sob tração axial, passa a medir 10,2 cm sofreu:",
    "options": [
      "Uma deformação absoluta por tração de Δx = 0,2 cm com aumento longitudinal.",
      "Uma compressão volumétrica com diminuição de comprimento.",
      "Um escoamento puramente viscoso irreversível como mel aquecido.",
      "Uma transição para corpo indeformável de Euclides."
    ],
    "correctIndex": 0,
    "explanation": "A variação de comprimento é Δx = 10,2 cm - 10,0 cm = +0,2 cm. Como o comprimento final é maior que o inicial, ocorreu deformação por tração com alongamento axial mensurável (Slide 39).",
    "distractorAnalysis": [
      "Está incorreta: Compressão implicaria diminuição de comprimento para menos de 10 cm (Slide 21).",
      "Está incorreta: A barra metálica segue o regime elástico de Hooke de sólidos rígidos (Slide 44).",
      "Está incorreta: Um sólido de Euclides manter-se-ia rigorosamente em 10,00 cm sob qualquer força."
    ],
    "nursingApplication": "Cálculo simples de deformação absoluta (Δx) no regime de tração linear."
  },
  {
    "id": 2089,
    "topicId": 2,
    "question": "Quando ocorre a rotura completa de um tendão muscular durante um esforço desportivo violento:",
    "options": [
      "A força de tração aplicada foi inferior ao limiar elástico mínimo.",
      "A força de tração divergente excedeu a tensão mecânica limite de rutura do tecido tendinoso.",
      "O tendão transformou-se instantaneamente num fluido viscoso de escoamento livre.",
      "A gravidade terrestre atraiu o tendão para o centro da Terra a 80 km/h."
    ],
    "correctIndex": 1,
    "explanation": "A rotura de materiais tracionados dá-se quando a tensão aplicada ultrapassa a resistência máxima à tração do tecido, provocando a rutura das pontes moleculares de colagénio e fratura mecânica.",
    "distractorAnalysis": [
      "Está incorreta: Forças inferiores ao limiar operam no regime de segurança reversível sem rotura.",
      "Está incorreta: O tendão fragmenta-se e desgarra-se macroscopicamente, mantendo a solidez celular dos fragmentos.",
      "Está incorreta: A rotura decorre da tração interna das fibras musculares, não de velocidades de queda no centro da Terra."
    ],
    "nursingApplication": "Explica o mecanismo biomecânico subjacente às roturas traumáticas de tendões e ligamentos."
  },
  {
    "id": 2090,
    "topicId": 2,
    "question": "No Slide 39, o que acontece a uma barra de secção S e comprimento inicial L quando é sujeita a uma força de tração F nos trabalhos de Hooke?",
    "options": [
      "Perde toda a sua massa inercial evaporando no ar.",
      "Torna-se imune a qualquer alteração de forma.",
      "Sofre uma deformação dimensional mensurável linearmente relacionada com a força.",
      "Começa a girar em torno do seu eixo central a alta velocidade."
    ],
    "correctIndex": 2,
    "explanation": "O Slide 39 refere textualmente: 'Quando uma barra de secção transversal S e comprimento inicial L é sujeita a uma força de tração F, sofre uma deformação dimensional mensurável'.",
    "distractorAnalysis": [
      "Está incorreta: A massa é rigorosamente conservada na mecânica dos materiais de Hooke.",
      "Está incorreta: Apenas os sólidos indeformáveis são imunes a alterações dimensionais.",
      "Está incorreta: Forças axiais de tração pura produzem alongamento linear e não rotação espontânea."
    ],
    "nursingApplication": "O fundamento experimental para o estabelecimento da Lei da Elasticidade por Robert Hooke em 1660."
  },
  {
    "id": 2091,
    "topicId": 2,
    "question": "Qual é a definição exata de deformação por 'Flexão' apresentada no Slide 26 de Biofísica?",
    "options": [
      "Deformação entre duas superfícies planas paralelas por ação de forças opostas paralelas.",
      "Rotação de um sólido em torno do seu eixo por ação de um momento de força.",
      "Encurtamento longitudinal puramente axial por forças convergentes.",
      "Deformação das arestas retilíneas de um sólido em linhas curvas por ação de forças perpendiculares."
    ],
    "correctIndex": 3,
    "explanation": "O Slide 26 define taxativamente: 'Flexão: Deformação das arestas retilíneas de um sólido em linhas curvas por ação de forças perpendiculares'.",
    "distractorAnalysis": [
      "Está incorreta: Esta é a definição de Cisalhamento (Slide 27).",
      "Está incorreta: Esta é a definição de Torção (Slide 28).",
      "Está incorreta: Esta é a definição de Compressão (Slide 21)."
    ],
    "nursingApplication": "A flexão ocorre quando um osso longo (como a tíbia ou fémur) é submetido a uma força perpendicular ao seu comprimento."
  },
  {
    "id": 2092,
    "topicId": 2,
    "question": "O que acontece à tensão mecânica no centro geométrico (plano neutro) de um sólido sujeito a flexão pura de acordo com o Slide 26?",
    "options": [
      "Tensão no centro é nula! (Tensão = 0 Pa no plano neutro).",
      "A tensão no centro atinge o valor máximo absoluto e infinito.",
      "A tensão no centro transforma-se em gravidade negativa.",
      "A tensão no centro oscila aleatoriamente entre compressão e calor."
    ],
    "correctIndex": 0,
    "explanation": "O Slide 26 coloca em grande destaque com ponto de exclamação: 'Tensão no centro é nula!'. Na flexão pura, a transição entre tração num bordo e compressão no bordo oposto passa por uma linha neutra central onde a tensão é zero.",
    "distractorAnalysis": [
      "Está incorreta: As tensões máximas ocorrem na periferia externa dos bordos, nunca no centro geométrico.",
      "Está incorreta: Tensão mecânica mede esforço interno (N/m²) e não altera o campo gravítico da Terra.",
      "Está incorreta: A tensão no plano neutro é estritamente e rigorosamente nula."
    ],
    "nursingApplication": "Explica a razão biológica pela qual os ossos longos têm um canal medular central oco sem perder resistência."
  },
  {
    "id": 2093,
    "topicId": 2,
    "question": "Qual é o exemplo biomecânico apresentado no Slide 32 de Biofísica para ilustrar a deformação por Flexão?",
    "options": [
      "Atrito e cisalhamento na pele sacra durante o arrasto no leito.",
      "Tensão a meio de um osso submetido a forças transversais.",
      "Fémur suportando o peso estático do tronco na bacia.",
      "Rotação helicoidal da perna no esqui alpino."
    ],
    "correctIndex": 1,
    "explanation": "O Slide 32 especifica no ponto 3: '3. Flexão: Força transversal; curvatura com plano neutro central; tensão a meio de um osso'.",
    "distractorAnalysis": [
      "Está incorreta: Atrito no leito é o exemplo de Cisalhamento (Slide 33).",
      "Está incorreta: Fémur a suportar peso axial é o exemplo de Compressão (Slide 30).",
      "Está incorreta: Rotação helicoidal é o mecanismo da Torção (Slide 34)."
    ],
    "nursingApplication": "Um choque transversal a meio da perna gera flexão na diáfise da tíbia, podendo originar fratura transversa."
  },
  {
    "id": 2094,
    "topicId": 2,
    "question": "Quando uma viga ou osso longo verga e curva sob o efeito de flexão por forças perpendiculares, que tensões se desenvolvem nas suas faces opostas?",
    "options": [
      "Tensão de cisalhamento puro em ambas as faces sem qualquer diferença.",
      "Tensão nula em todas as superfícies da barra sólida.",
      "Tensão de tração na face convexa exterior (alongada) e tensão de compressão na face côncava interior (encurtada).",
      "Tensão de rotação magnética contínua."
    ],
    "correctIndex": 2,
    "explanation": "Ao curvar, a face exterior (convexa) é esticada (sofrendo tração), ao passo que a face interior (côncava) é comprimida (sofrendo compressão). A meio caminho entre ambas situa-se o plano neutro onde a tensão é nula.",
    "distractorAnalysis": [
      "Está incorreta: O perfil clássico da flexão divide a barra em metades sob tração e compressão axiais.",
      "Está incorreta: As faces exteriores suportam as tensões máximas do corpo fletido.",
      "Está incorreta: As tensões geradas são puramente mecânicas elásticas, sem componentes magnéticas."
    ],
    "nursingApplication": "Como o osso é menos resistente à tração do que à compressão, a fratura por flexão inicia-se habitualmente no lado convexo tracionado."
  },
  {
    "id": 2095,
    "topicId": 2,
    "question": "Como resume o Slide 32 os três elementos definidores da Flexão em Biofísica?",
    "options": [
      "'Forças divergentes; aumento longitudinal; tração do tendão.'",
      "'Forças convergentes; encurtamento longitudinal; fémur suporta carga.'",
      "'Forças tangenciais; superfícies planas paralelas; atrito no leito.'",
      "'Força transversal; curvatura com plano neutro central; tensão a meio de um osso.'"
    ],
    "correctIndex": 3,
    "explanation": "O Slide 32 resume textualmente: '3. Flexão: Força transversal; curvatura com plano neutro central; tensão a meio de um osso'.",
    "distractorAnalysis": [
      "Está incorreta: Este é o resumo da Tração (Slide 31).",
      "Está incorreta: Este é o resumo da Compressão (Slide 30).",
      "Está incorreta: Este é o resumo do Cisalhamento (Slide 33)."
    ],
    "nursingApplication": "Fixa a síntese exata da terceira grande deformação mecânica do resumo de Paulo Pereira."
  },
  {
    "id": 2096,
    "topicId": 2,
    "question": "Qual é o nome formal da linha ou superfície interior de uma barra em flexão onde o material não sofre nem tração nem compressão?",
    "options": [
      "Plano neutro (ou eixo neutro) central.",
      "Limiar de tensão plástica de ruptura.",
      "Vetor de atrito cinético estático.",
      "Ponto de inserção tendinosa."
    ],
    "correctIndex": 0,
    "explanation": "O Slide 32 designa expressamente esta zona de tensão nula por 'plano neutro central'. É a interface de transição geométrica entre as fibras em compressão e as fibras em tração.",
    "distractorAnalysis": [
      "Está incorreta: Limiar de tensão plástica refere-se ao início de deformação permanente em corpos plásticos (Slide 17).",
      "Está incorreta: Atrito cinético é uma força tangencial de resistência ao movimento de superfícies (Slide 34 do Tópico 1).",
      "Está incorreta: Ponto de inserção é o local anatómico de fixação do tendão ao osso (Slide 8 do Tópico 1)."
    ],
    "nursingApplication": "Conceito de grande elegância estrutural na arquitetura dos ossos e vigas de sustentação."
  },
  {
    "id": 2097,
    "topicId": 2,
    "question": "Uma prancha rígida de transferência de doentes colocada entre a cama e a maca verga ligeiramente no centro sob o peso do utente. Que tipo de deformação mecânica está a ocorrer na prancha?",
    "options": [
      "Torção helicoidal.",
      "Flexão por ação de forças perpendiculares ao comprimento da prancha (Slide 26).",
      "Tração divergente axial pura.",
      "Cisalhamento rotativo sem curvatura."
    ],
    "correctIndex": 1,
    "explanation": "A prancha apoia-se nas duas extremidades e o peso do utente atua no meio na direção perpendicular: as arestas retilíneas transformam-se em curvas, sofrendo deformação por flexão clássica.",
    "distractorAnalysis": [
      "Está incorreta: A prancha não está a sofrer binários rotativos em torno do seu eixo para haver torção.",
      "Está incorreta: A carga atua perpendicularmente ao plano da prancha, não ao longo do seu eixo como tração divergente.",
      "Está incorreta: A curvatura visível das arestas identifica de imediato a flexão geométrica."
    ],
    "nursingApplication": "Importante para avaliar os limites de carga e segurança dos dispositivos de transferência de doentes."
  },
  {
    "id": 2098,
    "topicId": 2,
    "question": "Nas fraturas por flexão em crianças (fratura incompleta em ramo verde), em qual das superfícies do osso tende a iniciar-se a linha de rotura estrutural?",
    "options": [
      "Exatamente no centro do plano neutro onde a tensão é zero.",
      "Na superfície côncava que sofre compressão pura.",
      "Na superfície convexa que é submetida a tensões de tração máxima.",
      "No ar exterior circundante sem tocar no periósteo."
    ],
    "correctIndex": 2,
    "explanation": "O osso é menos tolerante à tração do que à compressão. Na flexão, a curvatura estica a face convexa exterior até atingir a tensão limite de tração, iniciando aí a fenda de fratura.",
    "distractorAnalysis": [
      "Está incorreta: No plano neutro a tensão é nula (Slide 26), sendo o local mais protegido contra o início da falha.",
      "Está incorreta: A face côncava está comprimida e tolera maiores tensões antes de ceder.",
      "Está incorreta: As fraturas iniciam-se nas fibras ósseas sob esforço crítico, não no ar circundante."
    ],
    "nursingApplication": "Compreensão biomecânica essencial das lesões ortopédicas infantis mais comuns em urgência."
  },
  {
    "id": 2099,
    "topicId": 2,
    "question": "A transformação geométrica de arestas retilíneas em linhas curvas é a assinatura descritiva de qual das deformações catalogadas nos slides?",
    "options": [
      "Compressão convergente.",
      "Tração divergente.",
      "Cisalhamento paralelo.",
      "Flexão (Slide 26)."
    ],
    "correctIndex": 3,
    "explanation": "O Slide 26 define formalmente: 'Deformação das arestas retilíneas de um sólido em linhas curvas por ação de forças perpendiculares (...) Flexão'.",
    "distractorAnalysis": [
      "Está incorreta: Compressão encurta a barra mantendo as arestas retilíneas axiais (Slide 21).",
      "Está incorreta: Tração alonga a barra mantendo as arestas alinhadas no eixo (Slide 23).",
      "Está incorreta: Cisalhamento deforma superfícies planas paralelas sem criar curvatura de flexão (Slide 27)."
    ],
    "nursingApplication": "Identificação visual direta da flexão em exames imagiológicos e avaliação postural."
  },
  {
    "id": 2100,
    "topicId": 2,
    "question": "Qual é a grande vantagem adaptativa biológica do facto de a tensão ser nula no centro de uma estrutura submetida a flexão (Slide 26)?",
    "options": [
      "Permite que os ossos longos sejam cilindros ocos com canal medular central, poupando massa corporal sem perder resistência mecânica.",
      "Permite que os ossos se tornem líquidos durante o sono noturno.",
      "Elimina a necessidade de articulações e músculos nos membros inferiores.",
      "Permite ao esqueleto conduzir eletricidade de alta voltagem sem aquecer."
    ],
    "correctIndex": 0,
    "explanation": "Como a tensão no centro é nula e as tensões máximas se concentram na periferia externa, colocar matéria no centro da diáfise seria inútil e aumentaria o peso corporal. O osso cilíndrico oco maximiza a rigidez e leveza esquelética.",
    "distractorAnalysis": [
      "Está incorreta: O osso mantém rigidez sólida permanente em todas as horas do dia.",
      "Está incorreta: Músculos e articulações continuam a ser indispensáveis como fulcros e motores de movimento.",
      "Está incorreta: O canal medular alberga tecido hematopoiético ou adiposo, não atuando como linha de alta voltagem."
    ],
    "nursingApplication": "A grande síntese evolutiva que une a física de resistência dos materiais à anatomia óssea humana."
  },
  {
    "id": 2101,
    "topicId": 2,
    "question": "Qual é a definição exata de deformação por 'Cisalhamento' apresentada no Slide 27 de Biofísica?",
    "options": [
      "Deformação das arestas retilíneas em curvas por forças perpendiculares.",
      "Deformação entre duas superfícies planas paralelas por ação de forças opostas paralelas.",
      "Rotação de um sólido em torno do seu eixo por ação de um binário.",
      "Encurtamento longitudinal decorrente de forças puramente convergentes."
    ],
    "correctIndex": 1,
    "explanation": "O Slide 27 define taxativamente: 'Cisalhamento: Deformação entre duas superfícies planas paralelas por ação de forças opostas paralelas'.",
    "distractorAnalysis": [
      "Está incorreta: Esta é a definição de Flexão (Slide 26).",
      "Está incorreta: Esta é a definição de Torção (Slide 28).",
      "Está incorreta: Esta é a definição de Compressão (Slide 21)."
    ],
    "nursingApplication": "O cisalhamento é a deformação crítica responsável por rasgar tecidos profundos e microvasos na pele de doentes acamados."
  },
  {
    "id": 2102,
    "topicId": 2,
    "question": "Como são caracterizadas as forças que provocam Cisalhamento no resumo do Slide 33?",
    "options": [
      "Forças perpendiculares axiais que aumentam o comprimento.",
      "Forças centrífugas que giram a alta velocidade.",
      "Forças tangenciais paralelas em sentidos opostos.",
      "Forças nucleares fortes no interior do núcleo celular."
    ],
    "correctIndex": 2,
    "explanation": "O Slide 33 especifica no ponto 4: '4. Cisalhamento: Forças tangenciais paralelas em sentidos opostos; atrito no leito'.",
    "distractorAnalysis": [
      "Está incorreta: Forças perpendiculares axiais produzem tração ou compressão, não cisalhamento tangencial.",
      "Está incorreta: Forças rotativas centrífugas produzem torção ou acelerações curvas.",
      "Está incorreta: Forças nucleares atuam dentro do núcleo atómico, não no cisalhamento tecidual macroscópico."
    ],
    "nursingApplication": "Identificação das forças de arrastamento tangenciais paralelas entre o doente e a superfície do leito."
  },
  {
    "id": 2103,
    "topicId": 2,
    "question": "Qual é o exemplo clínico e de cuidados de enfermagem apresentado no Slide 33 para ilustrar o Cisalhamento?",
    "options": [
      "Fémur suportando a carga do peso diário.",
      "Tração do tendão pelo músculo quadríceps.",
      "Curvatura com plano neutro no meio de um osso longo.",
      "Atrito no leito (entre a pele do utente e a superfície do colchão/lençol)."
    ],
    "correctIndex": 3,
    "explanation": "O Slide 33 indica explicitamente no ponto 4: '4. Cisalhamento: Forças tangenciais paralelas em sentidos opostos; atrito no leito'.",
    "distractorAnalysis": [
      "Está incorreta: Fémur suportando carga é o exemplo de Compressão (Slide 30).",
      "Está incorreta: Tração do tendão é o exemplo de Tração (Slide 31).",
      "Está incorreta: Curvatura central é o exemplo de Flexão (Slide 32)."
    ],
    "nursingApplication": "Alerta essencial: arrastar o doente nos lençóis sem elevar o corpo sujeita os tecidos a cisalhamento destrutivo."
  },
  {
    "id": 2104,
    "topicId": 2,
    "question": "O que acontece biomecanicamente aos tecidos profundos e microcirculação quando um doente escorrega pelo leito (cisalhamento)?",
    "options": [
      "A pele externa fica aderida ao lençol por atrito enquanto a estrutura óssea desliza para baixo, distendendo, dobrando e ocluindo os microvasos sanguíneos subcutâneos.",
      "A pele arrefece instantaneamente congelando o sangue nos capilares.",
      "O esqueleto do doente transforma-se num sólido de Euclides indeformável.",
      "A pressão capilar reduz-se a zero facilitando a oxigenação tecidual."
    ],
    "correctIndex": 0,
    "explanation": "No cisalhamento clínico, camadas adjacentes de tecidos deslizam em sentidos opostos: a fáscia profunda move-se com o osso enquanto a derme fica retida no lençol. Os capilares que atravessam as camadas são angulados e estrangulados, provocando isquemia tecidual profunda.",
    "distractorAnalysis": [
      "Está incorreta: O cisalhamento gera dano mecânico e isquemia, não congelamento térmico.",
      "Está incorreta: O esqueleto continua a comportar-se como tecido vivo deformável viscoelástico.",
      "Está incorreta: A oclusão e estrangulamento vascular interrompem a oxigenação, aumentando o risco de necrose."
    ],
    "nursingApplication": "Compreensão fisiopatológica direta do desenvolvimento de úlceras por pressão e lesões de cisalhamento."
  },
  {
    "id": 2105,
    "topicId": 2,
    "question": "Qual é a diferença geométrica entre as forças de Tração/Compressão e as forças de Cisalhamento nos slides?",
    "options": [
      "Na tração as forças são perpendiculares e no cisalhamento são puramente gravitacionais.",
      "Na tração/compressão as forças atuam perpendicularmente à secção transversal (axiais), enquanto no cisalhamento atuam paralelamente (tangencialmente) às superfícies planas.",
      "Não existe qualquer diferença geométrica entre elas.",
      "No cisalhamento as forças atuam exclusivamente no vácuo espacial."
    ],
    "correctIndex": 1,
    "explanation": "A tração e compressão são solicitações normais/axiais (ortogonais à secção da barra). O cisalhamento é uma solicitação tangencial (Slide 33: 'forças tangenciais paralelas em sentidos opostos') que faz deslizar planos paralelos uns sobre os outros.",
    "distractorAnalysis": [
      "Está incorreta: A tração é axial e o cisalhamento é tangencial de contacto mecânico, não puramente gravitacional.",
      "Está incorreta: A orientação das forças (normal vs tangencial) é a distinção primária na resistência dos materiais.",
      "Está incorreta: O cisalhamento ocorre no contacto físico entre superfícies de materiais reais no nosso ambiente."
    ],
    "nursingApplication": "Permite distinguir se uma força aplicada sobre a pele tende a afundar o tecido (normal) ou a rasgá-lo paralelamente (cisalhamento)."
  },
  {
    "id": 2106,
    "topicId": 2,
    "question": "O corte executado por uma tesoura cirúrgica ao seccionar um tecido biológico baseia-se primariamente em qual mecanismo reológico?",
    "options": [
      "Deformação por torção helicoidal de alta rotação.",
      "Compressão puramente convergente hidrostática.",
      "Cisalhamento mecânico, onde duas lâminas paralelas muito próximas aplicam forças em sentidos opostos cortando os planos teciduais.",
      "Dilatação térmica por transferência de calor corporal."
    ],
    "correctIndex": 2,
    "explanation": "A tesoura atua por cisalhamento puro: as suas duas lâminas deslizam paralelas uma à outra em sentidos contrários, aplicando forças tangenciais que superam a resistência ao corte (cisalhamento) do material.",
    "distractorAnalysis": [
      "Está incorreta: Não há rotação do tecido em torno do seu eixo próprio (torção).",
      "Está incorreta: A lâmina não esmaga uniformemente em compressão hidrostática; corta por planos opostos.",
      "Está incorreta: O corte é puramente mecânico e frio, independente de transferência de calor."
    ],
    "nursingApplication": "Fundamentação biofísica de instrumentos cirúrgicos cortantes na prática de bloco operatório e enfermagem."
  },
  {
    "id": 2107,
    "topicId": 2,
    "question": "Em que situação de internamento hospitalar as forças de cisalhamento sobre a região sacrococcígea são máximas?",
    "options": [
      "Com o doente perfeitamente deitado em decúbito dorsal plano horizontal a 0 graus.",
      "Quando o doente se encontra de pé com calçado antiderrapante.",
      "Com a cama rebaixada ao nível do chão em decúbito ventral.",
      "Quando a cabeceira da cama articulada é elevada acima de 30-45 graus e o doente escorrega continuamente em direção aos pés do leito."
    ],
    "correctIndex": 3,
    "explanation": "Ao elevar a cabeceira a componente tangencial P_t do peso aumenta. O corpo desliza rampa abaixo, mas a pele fica aderente ao lençol por atrito: desenvolvem-se forças intensas de cisalhamento que distendem os tecidos profundos do sacro.",
    "distractorAnalysis": [
      "Está incorreta: Na posição horizontal plana não há componente tangencial descendente P_t, minimizando o cisalhamento.",
      "Está incorreta: De pé a carga no sacro é nula, pois o peso é transmitido pelos membros inferiores ao solo.",
      "Está incorreta: Em decúbito ventral o sacro não apoia sobre o colchão."
    ],
    "nursingApplication": "Diretriz clínica internacional: manter a cabeceira abaixo de 30 graus sempre que possível para minimizar o cisalhamento."
  },
  {
    "id": 2108,
    "topicId": 2,
    "question": "Para prevenir lesões de cisalhamento na pele de um utente dependente durante a mobilização no leito, que técnica deve ser adotada pela equipa?",
    "options": [
      "Elevar o corpo do doente utilizando lençol de transferência ou técnica em grupo, em vez de arrastar o corpo contra os lençóis.",
      "Puxar o doente rapidamente pelos pés sem pedir ajuda a colegas.",
      "Lubrificar o colchão com sabão líquido durante a noite.",
      "Manter o doente sempre apoiado num só pé durante 12 horas seguidas."
    ],
    "correctIndex": 0,
    "explanation": "Ao elevar o corpo do utente durante a transferência, anula-se o atrito com o lençol e evitam-se as forças tangenciais paralelas de cisalhamento, protegendo a integridade da pele e vasos subcutâneos.",
    "distractorAnalysis": [
      "Está incorreta: Puxar pelos pés maximiza o atrito de arrasto e as forças de cisalhamento nos tecidos moles.",
      "Está incorreta: Sabão no colchão degrada o material, humedece a pele (maceração) e cria risco grave de contaminação e queda.",
      "Está incorreta: Apoio unipodal por 12 horas é biologicamente impossível e provocaria queda imediata."
    ],
    "nursingApplication": "Regra de boas práticas de enfermagem essencial para a prevenção de lesões por pressão nos serviços de internamento."
  },
  {
    "id": 2109,
    "topicId": 2,
    "question": "No mecanismo de deformação por cisalhamento, o que acontece aos planos internos paralelos do material?",
    "options": [
      "Aproximam-se colidindo frontalmente ao longo do mesmo eixo.",
      "Deslizam paralelamente uns sobre os outros no sentido das forças aplicadas.",
      "Curvam-se em círculos concêntricos mantendo o centro neutro a zero.",
      "Afastam-se indefinidamente duplicando o volume do corpo."
    ],
    "correctIndex": 1,
    "explanation": "O cisalhamento atua fazendo deslizar planos atómicos/moleculares adjacentes paralelamente entre si, alterando os ângulos das faces do corpo sem alterar primariamente o seu volume total (Slide 27).",
    "distractorAnalysis": [
      "Está incorreta: Colisão frontal ao longo do eixo ocorre na compressão axial convergente (Slide 21).",
      "Está incorreta: Curvar arestas retilíneas em linhas curvas é a definição de flexão (Slide 26).",
      "Está incorreta: O cisalhamento puro preserva o volume, não o duplica."
    ],
    "nursingApplication": "Conceito microscópico da deformação angular e corte dos tecidos."
  },
  {
    "id": 2110,
    "topicId": 2,
    "question": "As forças tangenciais exercidas pelo fluxo sanguíneo pulsátil sobre as células endoteliais da parede das artérias constituem um exemplo fisiológico de:",
    "options": [
      "Deformação por torção esquelética de alavancas.",
      "Compressão puramente convergente do antebraço.",
      "Tensão de cisalhamento hemodinâmico (shear stress) atuando paralelamente à superfície vascular.",
      "Sólido indeformável de Euclides em repouso absoluto."
    ],
    "correctIndex": 2,
    "explanation": "O sangue ao escoar paralelamente à parede interna da artéria exerce uma força de atrito tangencial por unidade de área sobre a camada endotelial: tensão de cisalhamento fluida (shear stress), fundamental para a regulação do tónus vascular.",
    "distractorAnalysis": [
      "Está incorreta: Não há torção rotativa de alavancas ósseas no escoamento laminar do sangue.",
      "Está incorreta: Compressão convergente atua axialmente em ossos e cartilagens, não no escoamento parietal.",
      "Está incorreta: O endotélio é um tecido vivo elástico e o sangue é um fluido viscoso em movimento."
    ],
    "nursingApplication": "Liga o conceito reológico de cisalhamento à hemodinâmica e integridade da circulação cardiovascular."
  },
  {
    "id": 2111,
    "topicId": 2,
    "question": "Qual é a definição exata de deformação por 'Torção' apresentada no Slide 28 de Biofísica?",
    "options": [
      "Encurtamento longitudinal de uma barra por forças convergentes axiais.",
      "Deformação entre superfícies paralelas por atrito tangencial no leito.",
      "Curvatura de arestas retilíneas por forças perpendiculares à viga.",
      "Rotação de um sólido em torno do seu eixo por ação de um momento de força (torque)."
    ],
    "correctIndex": 3,
    "explanation": "O Slide 28 define expressamente: 'Torção: Rotação de um sólido em torno do seu eixo por ação de um momento de força (torque)'.",
    "distractorAnalysis": [
      "Está incorreta: Esta é a definição de Compressão (Slide 21).",
      "Está incorreta: Esta é a definição de Cisalhamento (Slide 27).",
      "Está incorreta: Esta é a definição de Flexão (Slide 26)."
    ],
    "nursingApplication": "A torção é o mecanismo de lesão típico de fraturas espiroides dos ossos da perna e do braço."
  },
  {
    "id": 2112,
    "topicId": 2,
    "question": "O que acontece à tensão mecânica no eixo central de um sólido sujeito a torção de acordo com o Slide 28?",
    "options": [
      "Tensão no eixo central é nula! (Tensão = 0 Pa no centro da secção).",
      "A tensão no eixo central é máxima e dez vezes superior à da periferia.",
      "A tensão no eixo central converte-se em atrito cinético de arrastamento.",
      "A tensão no eixo central atinge valor infinito destruindo o núcleo."
    ],
    "correctIndex": 0,
    "explanation": "O Slide 28 coloca expressamente em destaque com ponto de exclamação: 'Tensão no eixo central é nula!'. Na torção pura de uma secção circular, a tensão cisalhante cresce linearmente do centro para o bordo exterior, sendo zero no próprio eixo de rotação.",
    "distractorAnalysis": [
      "Está incorreta: A tensão máxima localiza-se na periferia externa da parede, nunca no eixo central (Slide 34).",
      "Está incorreta: A torção gera tensão cisalhante rotativa elástica interna, não atrito de arrastamento de superfícies.",
      "Está incorreta: No eixo central a deformação e a tensão são exatamente nulas."
    ],
    "nursingApplication": "Explica por que os ossos longos podem ter o canal medular no eixo central sem perder resistência à torção."
  },
  {
    "id": 2113,
    "topicId": 2,
    "question": "Onde se concentra a tensão máxima quando um osso longo cilíndrico oco é submetido a torção mecânica (Slide 34)?",
    "options": [
      "No centro da medula óssea interna ao longo do eixo.",
      "Na periferia do osso oco (no bordo externo da parede óssea cortical).",
      "Na cartilagem articular contralateral a 10 metros de distância.",
      "Em nenhum ponto, pois a tensão é uniforme em toda a área."
    ],
    "correctIndex": 1,
    "explanation": "O Slide 34 salienta na síntese da torção: '5. Torção: Momento da força; tensão máxima concentrada na periferia do osso oco'.",
    "distractorAnalysis": [
      "Está incorreta: A tensão no centro/eixo central é rigorosamente nula (Slide 28).",
      "Está incorreta: A tensão mecânica atua na secção do osso sujeito ao torque aplicado.",
      "Está incorreta: A distribuição de tensões na torção é radialmente variável, crescendo proporcionalmente com a distância ao centro."
    ],
    "nursingApplication": "Demonstra a otimização biomecânica da diáfise óssea cilíndrica oca para resistir a esforços de torção."
  },
  {
    "id": 2114,
    "topicId": 2,
    "question": "Um esquiador cai na neve e o esqui fica preso enquanto o corpo roda bruscamente em torno do eixo da perna. Que tipo de fratura óssea é causada por este mecanismo mecânico?",
    "options": [
      "Fratura por compressão axial pura que encurta o fémur em 10 cm.",
      "Fratura incompleta em ramo verde típica de crianças pequenas.",
      "Fratura espiroide da tíbia ou fémur provocada por momento de torção (Slide 34).",
      "Fratura por atrito estático das meias no leito."
    ],
    "correctIndex": 2,
    "explanation": "Quando uma extremidade do membro é fixada e o corpo roda em torno do eixo longitudinal, gera-se um momento torsor (torque): o osso sofre torção até romper numa fenda helicoidal clássica, designada por fratura espiroide.",
    "distractorAnalysis": [
      "Está incorreta: Compressão axial resulta de quedas em pé de grande altura (forças convergentes), não de rotação do corpo.",
      "Está incorreta: Fraturas em ramo verde decorrem de flexão incompleta em ossos imaturos, não de torção pura em adultos.",
      "Está incorreta: Atrito em lençóis gera cisalhamento cutâneo, não fraturas espiroides traumáticas de ossos longos."
    ],
    "nursingApplication": "Reconhecimento do padrão biomecânico na anamnese de acidentes ortopédicos e desportivos."
  },
  {
    "id": 2115,
    "topicId": 2,
    "question": "No Slide 34, a causa física primária da deformação por Torção é expressamente identificada como:",
    "options": [
      "Forças convergentes longitudinais.",
      "Forças divergentes de estiramento tendinoso.",
      "Pressão capilar superficial sobre o sacro.",
      "Momento da força (torque)."
    ],
    "correctIndex": 3,
    "explanation": "O Slide 34 define no ponto 5: '5. Torção: Momento da força; tensão máxima concentrada na periferia do osso oco'.",
    "distractorAnalysis": [
      "Está incorreta: Forças convergentes causam Compressão (Slide 30).",
      "Está incorreta: Forças divergentes causam Tração (Slide 31).",
      "Está incorreta: Pressão sobre o sacro decorre de força normal e apoio (Slide 44 do Tópico 1)."
    ],
    "nursingApplication": "Liga diretamente o conceito de Momento da Força estudado no Tópico 1 à deformação reológica do Tópico 2."
  },
  {
    "id": 2116,
    "topicId": 2,
    "question": "Por que razão a evolução biológica favoreceu ossos longos ocos (com canal medular) em vez de ossos maciços sob o ponto de vista da Torção?",
    "options": [
      "Porque a tensão de torção é zero no centro e máxima na periferia, pelo que ter massa na periferia confere a máxima resistência à torção com o mínimo de peso corporal.",
      "Porque os ossos ocos flutuam na água permitindo a natação humana.",
      "Porque os ossos maciços se desintegrariam por radiação gama espontânea.",
      "Porque no interior do osso não existe gravidade terrestre."
    ],
    "correctIndex": 0,
    "explanation": "Distribuir a matéria óssea o mais longe possível do eixo central maximiza a resistência à torção e flexão (momento polar de inércia) gastando muito menos massa e energia metabólica do que um cilindro maciço pesado.",
    "distractorAnalysis": [
      "Está incorreta: O esqueleto humano não foi concebido para flutuar espontaneamente sem esforço muscular.",
      "Está incorreta: Não há desintegração radioativa induzida pela solidez do tecido ósseo maciço.",
      "Está incorreta: O campo gravitacional atua uniformemente em todo o interior do organismo."
    ],
    "nursingApplication": "Compreensão primorosa da arquitetura óssea humana à luz da resistência dos materiais de Paulo Pereira."
  },
  {
    "id": 2117,
    "topicId": 2,
    "question": "Se aplicarmos um momento torsor de 50 N·m a um fémur humano, em qual das seguintes regiões a tensão mecânica tangencial interna é MENOR?",
    "options": [
      "Na face externa do córtex periósteo periférico.",
      "No eixo central geométrico do osso (onde a tensão é nula).",
      "Na metade externa da espessura da cortical.",
      "A tensão é exatamente idêntica em todos os pontos da secção circular."
    ],
    "correctIndex": 1,
    "explanation": "Conforme o Slide 28 ('Tensão no eixo central é nula!'), a tensão por torção é rigorosamente zero no eixo central e cresce linearmente em direção ao bordo exterior.",
    "distractorAnalysis": [
      "Está incorreta: Na face periférica exterior a tensão é máxima (Slide 34).",
      "Está incorreta: Na metade da espessura a tensão é intermediária, superior à do centro.",
      "Está incorreta: A distribuição é heterogénea e radialmente proporcional à distância ao eixo."
    ],
    "nursingApplication": "Garante a correta interpretação do perfil de esforços internos sob torção."
  },
  {
    "id": 2118,
    "topicId": 2,
    "question": "Qual é a grandeza física que, ao atuar sobre um membro ou barra, provoca a sua deformação por Torção?",
    "options": [
      "Pressão hidrostática medida em mmHg.",
      "Aceleração da gravidade de 9,8 m/s².",
      "Momento da força ou torque (M = F · b), medido em N·m.",
      "Massa molecular inercial em unidades atómicas."
    ],
    "correctIndex": 2,
    "explanation": "O Slide 28 estipula que a torção é produzida 'por ação de um momento de força (torque)' exercido em torno do eixo do corpo.",
    "distractorAnalysis": [
      "Está incorreta: Pressão hidrostática atua perpendicularmente a superfícies fluidas, não gerando torção axial pura.",
      "Está incorreta: A gravidade gera forças verticais que só criam torque se tiverem braço de alavanca desalinhado.",
      "Está incorreta: Massa é uma grandeza inercial escalar, não o agente rotativo que causa torção."
    ],
    "nursingApplication": "Consolida a relação entre torque mecânico e torção de elementos esqueléticos."
  },
  {
    "id": 2119,
    "topicId": 2,
    "question": "Ao espremer uma toalha molhada rodando as duas mãos em sentidos rotativos opostos, que deformação reológica estamos a aplicar à toalha?",
    "options": [
      "Compressão convergente pura.",
      "Tração divergente axial simples.",
      "Flexão com plano neutro estático.",
      "Torção clássica por momentos de força em sentidos opostos ao longo do eixo da toalha."
    ],
    "correctIndex": 3,
    "explanation": "Rodar extremidades em sentidos opostos em torno do eixo longitudinal aplica momentos torsores contrários, produzindo deformação pura por torção helicoidal.",
    "distractorAnalysis": [
      "Está incorreta: Compressão atuaria aproximando as mãos em linha reta colinear (Slide 21).",
      "Está incorreta: Tração atuaria afastando as mãos em linha reta (Slide 23).",
      "Está incorreta: Flexão atuaria curvando a toalha num arco por forças perpendiculares (Slide 26)."
    ],
    "nursingApplication": "Exemplo quotidiano tangível que ilustra perfeitamente a mecânica da torção."
  },
  {
    "id": 2120,
    "topicId": 2,
    "question": "Em quais das 5 deformações estudadas nos slides a tensão mecânica no centro geométrico (eixo central) é RIGOROSAMENTE NULA?",
    "options": [
      "Na Flexão (tensão no centro é nula) e na Torção (tensão no eixo central é nula).",
      "Apenas na Compressão e na Tração.",
      "Exclusivamente no Cisalhamento tangencial.",
      "Em nenhuma delas, pois a tensão é sempre máxima no centro de todos os corpos."
    ],
    "correctIndex": 0,
    "explanation": "Os Slides 26 ('Flexão: Tensão no centro é nula!') e 28 ('Torção: Tensão no eixo central é nula!') destacam esta propriedade geométrica comum da flexão e da torção.",
    "distractorAnalysis": [
      "Está incorreta: Na compressão e tração axiais puras a tensão distribui-se uniformemente por toda a secção transversal (σ = F/A).",
      "Está incorreta: No cisalhamento a tensão tangencial atua entre as superfícies de deslizamento.",
      "Está incorreta: Afirmar que a tensão é sempre máxima no centro contradiz diretamente os Slides 26 e 28."
    ],
    "nursingApplication": "Síntese teórica cruzada de elevada pertinência para exames e avaliações de Biofísica."
  },
  {
    "id": 2121,
    "topicId": 2,
    "question": "Quais são os CINCO tipos de deformação mecânica catalogados no resumo dos Slides 29 a 34 de Biofísica?",
    "options": [
      "1. Elasticidade; 2. Plasticidade; 3. Viscosidade; 4. Histerese; 5. Inércia.",
      "1. Compressão; 2. Tração; 3. Flexão; 4. Cisalhamento; 5. Torção.",
      "1. Gravidade; 2. Eletromagnética; 3. Nuclear Forte; 4. Nuclear Fraca; 5. Normal.",
      "1. Força; 2. Massa; 3. Peso; 4. Pressão; 5. Dinamómetro."
    ],
    "correctIndex": 1,
    "explanation": "Os Slides 30 a 34 enumeram rigorosamente as 5 deformações: '1. Compressão | 2. Tração | 3. Flexão | 4. Cisalhamento | 5. Torção'.",
    "distractorAnalysis": [
      "Está incorreta: Estes são comportamentos e propriedades reológicas, não os 5 tipos de deformação física geométrica.",
      "Está incorreta: Estas são as 4 forças fundamentais mais a normal (Tópico 1).",
      "Está incorreta: Estas são grandezas físicas e instrumentos de medição da tabela de Newton (Tópico 1)."
    ],
    "nursingApplication": "A estrutura basilar de classificação de esforços mecânicos na unidade curricular de Biofísica."
  },
  {
    "id": 2122,
    "topicId": 2,
    "question": "Qual das 5 deformações decorre de forças convergentes e é suportada pelo fémur na postura diária (Slide 30)?",
    "options": [
      "Torção.",
      "Cisalhamento.",
      "Compressão.",
      "Flexão."
    ],
    "correctIndex": 2,
    "explanation": "O Slide 30 estipula claramente: '1. Compressão: Forças convergentes; encurtamento longitudinal; fémur suporta carga corporal diária'.",
    "distractorAnalysis": [
      "Está incorreta: Torção decorre de momentos rotativos (Slide 34).",
      "Está incorreta: Cisalhamento decorre de forças tangenciais paralelas (Slide 33).",
      "Está incorreta: Flexão decorre de forças perpendiculares (Slide 32)."
    ],
    "nursingApplication": "Associação direta de esforço de compressão ao osso de sustentação primordial dos membros inferiores."
  },
  {
    "id": 2123,
    "topicId": 2,
    "question": "Qual das 5 deformações decorre de forças divergentes provocando aumento longitudinal, como no tendão puxado pelo músculo (Slide 31)?",
    "options": [
      "Compressão convergente.",
      "Cisalhamento tangencial.",
      "Torção por torque.",
      "Tração."
    ],
    "correctIndex": 3,
    "explanation": "O Slide 31 estipula formalmente: '2. Tração: Forças divergentes; aumento longitudinal; tração do tendão pelo músculo'.",
    "distractorAnalysis": [
      "Está incorreta: Compressão provoca diminuição do comprimento com forças convergentes (Slide 30).",
      "Está incorreta: Cisalhamento deforma entre superfícies paralelas opostas (Slide 33).",
      "Está incorreta: Torção atua por momentos de rotação em torno do eixo (Slide 34)."
    ],
    "nursingApplication": "Identificação canónica do esforço trativo no sistema musculoesquelético."
  },
  {
    "id": 2124,
    "topicId": 2,
    "question": "Qual das 5 deformações é gerada por força transversal gerando curvatura com plano neutro central (Slide 32)?",
    "options": [
      "Flexão.",
      "Compressão.",
      "Tração.",
      "Torção."
    ],
    "correctIndex": 0,
    "explanation": "O Slide 32 estabelece taxativamente: '3. Flexão: Força transversal; curvatura com plano neutro central; tensão a meio de um osso'.",
    "distractorAnalysis": [
      "Está incorreta: Compressão atua axialmente com forças convergentes (Slide 30).",
      "Está incorreta: Tração atua axialmente com forças divergentes (Slide 31).",
      "Está incorreta: Torção roda o corpo em torno do seu eixo por momentos de força (Slide 34)."
    ],
    "nursingApplication": "Identificação do esforço de encurvamento com eixo neutro a meio da espessura do osso."
  },
  {
    "id": 2125,
    "topicId": 2,
    "question": "Qual das 5 deformações é provocada por forças tangenciais paralelas em sentidos opostos, manifestando-se no atrito no leito (Slide 33)?",
    "options": [
      "Flexão.",
      "Cisalhamento.",
      "Compressão.",
      "Tração."
    ],
    "correctIndex": 1,
    "explanation": "O Slide 33 estabelece textualmente: '4. Cisalhamento: Forças tangenciais paralelas em sentidos opostos; atrito no leito'.",
    "distractorAnalysis": [
      "Está incorreta: Flexão é causada por forças transversais perpendiculares (Slide 32).",
      "Está incorreta: Compressão é causada por forças axiais convergentes (Slide 30).",
      "Está incorreta: Tração é causada por forças axiais divergentes (Slide 31)."
    ],
    "nursingApplication": "Reconhecimento da solicitação tangencial que compromete a integridade tecidual no leito."
  },
  {
    "id": 2126,
    "topicId": 2,
    "question": "Qual das 5 deformações decorre de momento da força, concentrando a tensão máxima na periferia do osso oco (Slide 34)?",
    "options": [
      "Tração.",
      "Compressão.",
      "Torção.",
      "Cisalhamento plano simples."
    ],
    "correctIndex": 2,
    "explanation": "O Slide 34 estabelece textualmente: '5. Torção: Momento da força; tensão máxima concentrada na periferia do osso oco'.",
    "distractorAnalysis": [
      "Está incorreta: Tração concentra tensões longitudinais uniformes (Slide 31).",
      "Está incorreta: Compressão encurta a barra sem momento torsor rotativo (Slide 30).",
      "Está incorreta: Cisalhamento plano atua entre superfícies paralelas em translação tangencial (Slide 33)."
    ],
    "nursingApplication": "Identificação da deformação rotacional da diáfise dos ossos longos."
  },
  {
    "id": 2127,
    "topicId": 2,
    "question": "Qual é o emparelhamento COMPLETO e CORRETO entre as 5 deformações e os exemplos biofísicos dos Slides 30 a 34?",
    "options": [
      "Compressão: tendão | Tração: fémur | Flexão: leito | Cisalhamento: osso oco | Torção: curvatura",
      "Compressão: atrito no leito | Tração: curvatura neutra | Flexão: fémur | Cisalhamento: tendão | Torção: mola",
      "Compressão: torção da tíbia | Tração: osso oco | Flexão: plasticina | Cisalhamento: água | Torção: mel",
      "Compressão: fémur suporta carga | Tração: tração do tendão | Flexão: tensão a meio de um osso | Cisalhamento: atrito no leito | Torção: tensão máxima na periferia do osso oco"
    ],
    "correctIndex": 3,
    "explanation": "Os Slides 30 a 34 estabelecem rigorosamente a correspondência: 1. Compressão: fémur suporta carga corporal diária; 2. Tração: tração do tendão pelo músculo; 3. Flexão: tensão a meio de um osso; 4. Cisalhamento: atrito no leito; 5. Torção: tensão máxima na periferia do osso oco.",
    "distractorAnalysis": [
      "Está incorreta: Correspondências totalmente baralhadas entre forças axiais e de corte.",
      "Está incorreta: Exemplos trocados entre tecidos e dispositivos clínicos.",
      "Está incorreta: Mistura conceitos de corpos reológicos com as 5 deformações mecânicas."
    ],
    "nursingApplication": "Quadro mnemónico perfeito para a revisão completa das 5 deformações da aula."
  },
  {
    "id": 2128,
    "topicId": 2,
    "question": "Na vida diária de um ser humano ativo, as solicitações mecânicas suportadas pelos ossos ocorrem de forma isolada ou combinada?",
    "options": [
      "Ocorrem de forma combinada e dinâmica: durante a marcha o fémur suporta simultaneamente compressão pelo peso, flexão pela curvatura anatómica e torção pelos movimentos da bacia.",
      "Ocorrem sempre de forma 100% isolada, nunca existindo mais do que uma deformação em cada década de vida.",
      "Os ossos humanos suportam apenas e exclusivamente cisalhamento puro no vácuo.",
      "Os ossos nunca sofrem nenhuma das 5 deformações porque são protegidos pela roupa."
    ],
    "correctIndex": 0,
    "explanation": "Na biomecânica real do movimento humano, as forças combinam-se continuamente: a carga do corpo e os puxões musculares geram simultaneamente esforços compostos de compressão, flexão e torção nos ossos longos.",
    "distractorAnalysis": [
      "Está incorreta: As deformações ocorrem em simultâneo a cada passo e salto.",
      "Está incorreta: A compressão e a flexão são as solicitações dominantes na locomoção bípede.",
      "Está incorreta: A roupa não anula o peso gravítico nem as contrações musculares internas."
    ],
    "nursingApplication": "Permite aos futuros enfermeiros compreender a complexidade real das forças biomecânicas da locomoção."
  },
  {
    "id": 2129,
    "topicId": 2,
    "question": "No Slide 32, a força causadora da Flexão é descrita tecnicamente como:",
    "options": [
      "'Força atómica longitudinal'.",
      "'Força transversal'.",
      "'Momento helicoidal puro'.",
      "'Força convergente pura'."
    ],
    "correctIndex": 1,
    "explanation": "O Slide 32 estabelece no início do ponto 3: '3. Flexão: Força transversal; curvatura com plano neutro central (...)'.",
    "distractorAnalysis": [
      "Está incorreta: Forças atómicas microscópicas não definem o vetor mecânico de flexão de vigas macroscópicas.",
      "Está incorreta: Momento helicoidal define a Torção (Slide 34).",
      "Está incorreta: Forças convergentes definem a Compressão (Slide 30)."
    ],
    "nursingApplication": "Termo técnico de resistência dos materiais que define forças aplicadas perpendicularmente ao eixo da peça."
  },
  {
    "id": 2130,
    "topicId": 2,
    "question": "Ao virar um doente no leito mantendo a bacia fixa e rodando bruscamente os ombros para o lado oposto, que esforço mecânico é induzido nas vértebras dorsolombares?",
    "options": [
      "Tração axial divergente que alonga o tronco em 20 cm.",
      "Compressão puramente convergente da cabeça.",
      "Esforço de torção (torque em torno do eixo da coluna vertebral), que sobrecarrega as fibras dos anéis fibrosos dos discos.",
      "Sólido indeformável de Euclides em repouso."
    ],
    "correctIndex": 2,
    "explanation": "Rodar os ombros em relação à bacia fixa aplica um binário de torção axial sobre a coluna vertebral. O anel fibroso do disco intervertebral sofre torção e cisalhamento, com elevado risco de lesão discal se a manobra for brusca.",
    "distractorAnalysis": [
      "Está incorreta: A manobra não exerce tração de afastamento longitudinal das vértebras.",
      "Está incorreta: A carga principal é rotativa torsional, não compressão vertical descendente.",
      "Está incorreta: A coluna é flexível e deformável, não correspondendo ao modelo indeformável."
    ],
    "nursingApplication": "Alerta ergonómico em técnicas de posicionamento: rodar o doente em bloco (ombros e bacia alinhados) para evitar torções da coluna."
  },
  {
    "id": 2131,
    "topicId": 2,
    "question": "Em que ano Robert Hooke iniciou e publicou os seus trabalhos seminais sobre a elasticidade citados nos Slides 36 a 40?",
    "options": [
      "No ano de 1998.",
      "No século III a.C. com Arquimedes.",
      "Em 1850 durante a revolução industrial.",
      "Em 1660 (Slide 36)."
    ],
    "correctIndex": 3,
    "explanation": "Os Slides 36 a 40 referem expressamente: 'Os trabalhos de Hooke: Hooke, 1660'.",
    "distractorAnalysis": [
      "Está incorreta: 1998 é uma data contemporânea recente, sem ligação com a revolução científica clássica.",
      "Está incorreta: Século III a.C. é a datação histórica de Arquimedes nas alavancas (Slide 66 do Tópico 1).",
      "Está incorreta: 1850 situa-se no século XIX, quase dois séculos após as descobertas de Robert Hooke."
    ],
    "nursingApplication": "Contextualização cronológica da física clássica ensinada nas aulas do Professor Paulo Pereira."
  },
  {
    "id": 2132,
    "topicId": 2,
    "question": "Qual é a célebre máxima em latim cunhada por Robert Hooke em 1660 apresentada no Slide 40 de Biofísica?",
    "options": [
      "'Ut tensio, sic vis'",
      "'Carpe diem, memento mori'",
      "'E pur si muove'",
      "'Veni, vidi, vici'"
    ],
    "correctIndex": 0,
    "explanation": "O Slide 40 destaca em latim o princípio fundamental: 'Hooke, 1660: Ut tensio, sic vis'.",
    "distractorAnalysis": [
      "Está incorreta: 'Carpe diem' é uma locução poética latina de Horácio sobre aproveitar o dia presente.",
      "Está incorreta: 'E pur si muove' é a célebre frase atribuída a Galileu Galilei sobre o movimento da Terra.",
      "Está incorreta: 'Veni, vidi, vici' é a famosa frase de Júlio César após a batalha de Zela."
    ],
    "nursingApplication": "O lema histórico da física que sintetiza a proporcionalidade entre deformação elástica e força."
  },
  {
    "id": 2133,
    "topicId": 2,
    "question": "Qual é a tradução em português da máxima de Hooke 'Ut tensio, sic vis' apresentada expressamente no Slide 40?",
    "options": [
      "'Onde há fumo, há fogo.'",
      "'Como a extensão, assim a força.'",
      "'A força vence a inércia do repouso.'",
      "'Toda a ação tem a sua reação oposta.'"
    ],
    "correctIndex": 1,
    "explanation": "O Slide 40 traduz formalmente: 'Ut tensio, sic vis – “Como a extensão, assim a força.”'.",
    "distractorAnalysis": [
      "Está incorreta: Provérbio popular sem qualquer significado em física mecânica.",
      "Está incorreta: Frase relativa à 1ª e 2ª Leis de Newton, não à tradução da máxima de Hooke.",
      "Está incorreta: Tradução do princípio de ação e reação da 3ª Lei de Newton (Slide 19 do Tópico 1)."
    ],
    "nursingApplication": "Permite aos alunos reter o significado em língua portuguesa da relação fundamental da elasticidade."
  },
  {
    "id": 2134,
    "topicId": 2,
    "question": "Qual foi a conclusão experimental de Robert Hooke (1660) relativamente às molas sujeitas a forças mecânicas (Slide 37)?",
    "options": [
      "O alongamento das molas é inversamente proporcional à temperatura absoluta.",
      "As molas nunca sofrem qualquer deformação mensurável.",
      "O alongamento das molas sujeitas a forças mecânicas é diretamente proporcional à intensidade das mesmas.",
      "O alongamento depende exclusivamente da hora do dia em que a mola é esticada."
    ],
    "correctIndex": 2,
    "explanation": "O Slide 37 enuncia a lei experimental: 'O alongamento das molas sujeitas a forças mecânicas é diretamente proporcional à intensidade das mesmas'.",
    "distractorAnalysis": [
      "Está incorreta: A dependência térmica de gases não se aplica à proporcionalidade linear mecânica de Hooke.",
      "Está incorreta: As molas são o exemplo clássico de corpos altamente deformáveis de Hooke.",
      "Está incorreta: A resposta mecânica da mola depende da força aplicada, não de horários circadianos."
    ],
    "nursingApplication": "Princípio básico de funcionamento de dinamómetros e células de carga em camas hospitalares."
  },
  {
    "id": 2135,
    "topicId": 2,
    "question": "De acordo com o Slide 38, que tipo de resposta exibem todos os materiais elásticos sob tração axial?",
    "options": [
      "Resposta caótica imprevisível e aleatória.",
      "Resposta exponencial assintótica que atinge o infinito.",
      "Resposta exclusivamente plástica sem retorno dimensional.",
      "Todos os materiais elásticos exibem esta resposta linear sob tração axial."
    ],
    "correctIndex": 3,
    "explanation": "O Slide 38 estabelece a generalização física: 'Todos os materiais elásticos exibem esta resposta linear sob tração axial (Hooke, 1660)'.",
    "distractorAnalysis": [
      "Está incorreta: A resposta elástica é determinista e rigorosamente linear no regime inicial.",
      "Está incorreta: Funções exponenciais não descrevem a relação direta de Hooke (F ∝ Δx).",
      "Está incorreta: Resposta plástica é a que não recupera a forma (Slide 17), oposta à resposta elástica."
    ],
    "nursingApplication": "Universalidade da resposta elástica linear nos regimes de pequenas e moderadas deformações."
  },
  {
    "id": 2136,
    "topicId": 2,
    "question": "No Slide 39, quando uma barra de secção transversal S e comprimento inicial L é sujeita a uma força de tração F:",
    "options": [
      "Sofre uma deformação dimensional mensurável.",
      "Perde todo o seu peso e flutua no ar.",
      "Aumenta a sua massa inercial em 50%.",
      "Transforma-se instantaneamente num fluido viscoso de escoamento livre."
    ],
    "correctIndex": 0,
    "explanation": "O Slide 39 estabelece: 'Quando uma barra de secção transversal S e comprimento inicial L é sujeita a uma força de tração F, sofre uma deformação dimensional mensurável'.",
    "distractorAnalysis": [
      "Está incorreta: A gravidade terrestre continua a atuar plenamente sobre a barra (P = m · g).",
      "Está incorreta: A massa é constante e invariável perante ensaios mecânicos comuns de tração.",
      "Está incorreta: A barra sólida mantém o seu estado sólido elástico."
    ],
    "nursingApplication": "O ponto de partida experimental que liga a força externa F à deformação mensurável Δx."
  },
  {
    "id": 2137,
    "topicId": 2,
    "question": "Se uma força de 10 N estica uma mola em 2 cm (regime linear de Hooke), que força é necessária para esticar a mesma mola em 6 cm?",
    "options": [
      "10 N",
      "30 N (o triplo da força, pela proporcionalidade direta 'Ut tensio, sic vis')",
      "60 N",
      "3,33 N"
    ],
    "correctIndex": 1,
    "explanation": "Pela proporcionalidade direta enunciada por Hooke (Slide 37 e 40): triplicando o alongamento desejado (de 2 cm para 6 cm), a intensidade da força necessária triplica igualmente: 10 N × 3 = 30 N.",
    "distractorAnalysis": [
      "Está incorreta: 10 N só consegue esticar os 2 cm originais.",
      "Está incorreta: 60 N produziria um alongamento de 12 cm, o dobro do pretendido.",
      "Está incorreta: 3,33 N resultaria de dividir erradamente a força em vez de multiplicá-la."
    ],
    "nursingApplication": "Cálculo elementar e intuitivo do comportamento de molas e elásticos de tração terapêutica."
  },
  {
    "id": 2138,
    "topicId": 2,
    "question": "A máxima de Hooke 'Como a extensão, assim a força' estabelece uma relação matemática entre:",
    "options": [
      "A aceleração do corpo e a velocidade da luz.",
      "O tempo de repouso e a viscosidade do mel.",
      "A deformação elástica sofrida (extensão) e a intensidade da força mecânica aplicada.",
      "A massa do utente bariátrico e o ângulo de flexão do joelho."
    ],
    "correctIndex": 2,
    "explanation": "Hooke relacionou a extensão (alongamento elástico dimensional) com a força motora deformadora: o esforço interno gerado é proporcional à deformação imposta.",
    "distractorAnalysis": [
      "Está incorreta: Velocidade da luz pertence à relatividade e eletromagnetismo, não à Lei de Hooke de 1660.",
      "Está incorreta: Viscosidade do mel pertence à reologia dos corpos viscosos (Slide 11), não à extensão das molas de Hooke.",
      "Está incorreta: Massa bariátrica e flexão articular são variáveis biomecânicas específicas de outros slides."
    ],
    "nursingApplication": "Compreensão do axioma físico fundamental da ciência dos materiais."
  },
  {
    "id": 2139,
    "topicId": 2,
    "question": "Os trabalhos de Robert Hooke em 1660 constituem a base científica para o estudo de qual tema da unidade curricular?",
    "options": [
      "Das radiações ionizantes e partículas alfa emitidas por radiofármacos.",
      "Do metabolismo celular dos lípidos e hidratos de carbono.",
      "Das leis fundamentais da hidrodinâmica cardíaca.",
      "Da elasticidade dos corpos e resistência dos materiais (Tópico 2)."
    ],
    "correctIndex": 3,
    "explanation": "O Tópico 2 intitula-se 'Elasticidade e resistência dos materiais' (Slide 1), tendo na Lei de Hooke (Slides 35-42) a sua lei física fundamental.",
    "distractorAnalysis": [
      "Está incorreta: Radiações e partículas alfa são temas do Tópico 6 e 7 do programa.",
      "Está incorreta: Metabolismo de biomoléculas pertence ao módulo de Bioquímica (Slide 2).",
      "Está incorreta: Hidrodinâmica cardíaca pertence ao Tópico 5 de Biofísica."
    ],
    "nursingApplication": "Enquadramento da Lei de Hooke na estrutura curricular global de Biofísica."
  },
  {
    "id": 2140,
    "topicId": 2,
    "question": "No regime elástico linear formulado por Hooke, qual é a representação matemática gráfica da relação entre Força (F) e Deformação (Δx)?",
    "options": [
      "Uma linha reta com inclinação constante que passa pela origem das coordenadas (F = 0 quando Δx = 0).",
      "Uma curva parabólica que atinge o valor zero em deformação infinita.",
      "Um degrau horizontal descontínuo no limiar de 100 Newtons.",
      "Uma onda sinusoidal com cristas e vales alternados."
    ],
    "correctIndex": 0,
    "explanation": "Sendo F = k · Δx uma equação do 1º grau sem termo independente, a sua representação gráfica é uma linha reta que cruza a origem (0,0), onde o declive da reta corresponde à rigidez k do corpo.",
    "distractorAnalysis": [
      "Está incorreta: Relações parabólicas quadráticas descrevem energias (E = 1/2 k x²), não a força linear de Hooke.",
      "Está incorreta: Degraus descontínuos ocorrem em transições de fase térmicas, não na elasticidade linear.",
      "Está incorreta: Ondas sinusoidais descrevem o movimento harmónico no tempo, não o gráfico estático de F vs Δx."
    ],
    "nursingApplication": "Permite interpretar gráficos de tração elástica e determinar graficamente a constante de rigidez."
  },
  {
    "id": 2141,
    "topicId": 2,
    "question": "Qual é a fórmula matemática da Lei fundamental da elasticidade (Lei de Hooke) apresentada no Slide 41 de Biofísica?",
    "options": [
      "F = m · a",
      "F = k · Δx",
      "P = m · g",
      "M = F · b"
    ],
    "correctIndex": 1,
    "explanation": "O Slide 41 apresenta expressamente a fórmula da Lei de Hooke para corpos elásticos: 'F = k · Δx' (Força elástica = constante elástica multiplicada pela deformação absoluta).",
    "distractorAnalysis": [
      "Está incorreta: F = m · a é a 2ª Lei de Newton da dinâmica (Slide 13 do Tópico 1).",
      "Está incorreta: P = m · g é a fórmula da força da gravidade/peso (Slide 28 do Tópico 1).",
      "Está incorreta: M = F · b é a fórmula do Momento da Força/torque (Slide 62 do Tópico 1)."
    ],
    "nursingApplication": "A fórmula matemática central do Tópico 2 para quantificar forças elásticas e deformações."
  },
  {
    "id": 2142,
    "topicId": 2,
    "question": "Na fórmula F = k · Δx do Slide 41, qual é o significado e a unidade SI do símbolo 'F'?",
    "options": [
      "Frequência respiratória medida em ciclos por minuto.",
      "Fulcro articular medido em centímetros de abertura.",
      "Força que causa a deformação do corpo elástico em estudo, expressa em Newton (N).",
      "Fator de atrito estático medido em Joules."
    ],
    "correctIndex": 2,
    "explanation": "O Slide 41 define: 'F = Força que causa a deformação do corpo elástico em estudo' (com unidade Newton [N] no SI).",
    "distractorAnalysis": [
      "Está incorreta: Frequência respiratória é um sinal vital clínico, não a variável mecânica F.",
      "Está incorreta: Fulcro é o ponto fixo de uma alavanca, não a força da mola.",
      "Está incorreta: Atrito estático é uma força expressa em Newtons, não em Joules."
    ],
    "nursingApplication": "Identificação correta da grandeza da força aplicada na distensão ou compressão do corpo elástico."
  },
  {
    "id": 2143,
    "topicId": 2,
    "question": "Na fórmula F = k · Δx do Slide 41, qual é o significado e a unidade SI do símbolo 'k'?",
    "options": [
      "Quilograma de massa corporal do utente.",
      "Temperatura absoluta expressa em Kelvin.",
      "Coeficiente de atrito cinético adimensional.",
      "Constante elástica do corpo (N/m) -> Mede a rigidez do corpo elástico em estudo."
    ],
    "correctIndex": 3,
    "explanation": "O Slide 41 define textualmente: 'k = Constante elástica do corpo (N/m) -> Mede a rigidez do corpo elástico em estudo'.",
    "distractorAnalysis": [
      "Está incorreta: Quilograma (kg) é a unidade de massa m, não a constante k.",
      "Está incorreta: Kelvin (K) é a unidade termodinâmica de temperatura, sem relação com a mola elástica.",
      "Está incorreta: Coeficiente de atrito é um número adimensional, ao passo que k tem unidades de N/m."
    ],
    "nursingApplication": "Conceito primordial: a constante k quantifica numericamente quão rígido é o corpo elástico."
  },
  {
    "id": 2144,
    "topicId": 2,
    "question": "Na fórmula F = k · Δx do Slide 41, qual é o significado e a unidade SI do símbolo 'Δx'?",
    "options": [
      "Deformação absoluta do corpo elástico em estudo, expressa em metros (m).",
      "Distância perpendicular do braço da força de Arquimedes em milímetros.",
      "Densidade volúmica do osso expressa em g/cm³.",
      "Diferença de temperatura termodinâmica expressa em graus Celsius."
    ],
    "correctIndex": 0,
    "explanation": "O Slide 41 define expressamente: 'Δx = Deformação absoluta do corpo elástico em estudo (m)'. Representa a variação do comprimento (Δx = x_final - x_inicial).",
    "distractorAnalysis": [
      "Está incorreta: O braço da força representa-se por b na fórmula do torque (M = F · b), não por Δx.",
      "Está incorreta: Densidade mede-se em massa por volume, não em metros.",
      "Está incorreta: Variação de temperatura representa-se por ΔT, não por Δx."
    ],
    "nursingApplication": "Fixa a grandeza geométrica de alongamento ou encurtamento na Lei de Hooke."
  },
  {
    "id": 2145,
    "topicId": 2,
    "question": "Uma mola hospitalar de tração tem constante elástica k = 500 N/m. Se for esticada sofrendo uma deformação absoluta de Δx = 0,02 m, qual é a intensidade da força elástica F gerada?",
    "options": [
      "25 000 N",
      "10 N",
      "0,00004 N",
      "500,02 N"
    ],
    "correctIndex": 1,
    "explanation": "Aplicando diretamente F = k · Δx (Slide 41): F = 500 N/m × 0,02 m = 10 N.",
    "distractorAnalysis": [
      "Está incorreta: 25 000 N resultaria de dividir 500 por 0,02 (k / Δx), violando a fórmula de multiplicação.",
      "Está incorreta: 0,00004 resultaria de dividir 0,02 por 500.",
      "Está incorreta: 500,02 resultaria de somar as duas variáveis em vez de multiplicá-las."
    ],
    "nursingApplication": "Cálculo típico de tração elástica aplicada na calibração de equipamentos ortopédicos."
  },
  {
    "id": 2146,
    "topicId": 2,
    "question": "Se uma força de 40 N provoca uma deformação absoluta de Δx = 0,1 m numa barra elástica, qual é o valor da constante elástica k dessa barra?",
    "options": [
      "k = 4 N/m",
      "k = 0,0025 N/m",
      "k = 400 N/m",
      "k = 40,1 N/m"
    ],
    "correctIndex": 2,
    "explanation": "A partir de F = k · Δx, isola-se a constante elástica: k = F / Δx = 40 N / 0,1 m = 400 N/m.",
    "distractorAnalysis": [
      "Está incorreta: 4 N/m resultaria de multiplicar 40 por 0,1 em vez de dividir.",
      "Está incorreta: 0,0025 N/m resultaria de inverter a fração (0,1 / 40).",
      "Está incorreta: 40,1 N/m resultaria de somar grandezas com unidades incompatíveis."
    ],
    "nursingApplication": "Determinação prática da rigidez estrutural de um componente mecânico elástico."
  },
  {
    "id": 2147,
    "topicId": 2,
    "question": "Para alongar uma mola com k = 200 N/m em exatamente Δx = 0,05 m (5 cm), que força é indispensável aplicar?",
    "options": [
      "4000 N",
      "0,00025 N",
      "200,05 N",
      "10 N"
    ],
    "correctIndex": 3,
    "explanation": "Aplicando a Lei de Hooke (Slide 41): F = k · Δx = 200 N/m × 0,05 m = 10 N.",
    "distractorAnalysis": [
      "Está incorreta: 4000 N resultaria da divisão errada 200 / 0,05.",
      "Está incorreta: 0,00025 N resultaria de 0,05 / 200.",
      "Está incorreta: 200,05 N resultaria de soma aritmética incorreta."
    ],
    "nursingApplication": "Permite dimensionar a força muscular necessária para operar sistemas elásticos de reabilitação motora."
  },
  {
    "id": 2148,
    "topicId": 2,
    "question": "Se uma mola elástica se deforma Δx = 2 cm sob a ação de uma força de 4 N, qual será a deformação absoluta sofrida se a força aplicada for aumentada para 8 N?",
    "options": [
      "Δx = 4 cm (o dobro, pela proporcionalidade linear da Lei de Hooke).",
      "Δx = 2 cm (permanece igual porque a mola tem rigidez fixa).",
      "Δx = 16 cm (cresce com o quadrado da força aplicada).",
      "Δx = 1 cm (reduz-se para metade para resistir à força)."
    ],
    "correctIndex": 0,
    "explanation": "Como a constante k é constante (k = F / Δx = 4 N / 2 cm = 2 N/cm), aplicando F = 8 N temos Δx = F / k = 8 / 2 = 4 cm. Duplicando a força, duplica a deformação.",
    "distractorAnalysis": [
      "Está incorreta: A deformação só seria constante se a mola fosse um sólido indeformável.",
      "Está incorreta: A relação é estritamente linear de 1º grau, não quadrática.",
      "Está incorreta: Maior força gera maior deformação, nunca menor."
    ],
    "nursingApplication": "Regra de proporcionalidade direta usada rotineiramente na interpretação de escalas de dinamómetros."
  },
  {
    "id": 2149,
    "topicId": 2,
    "question": "O que representa conceitualmente a grandeza 'Deformação absoluta (Δx)' expressa em metros no Slide 41?",
    "options": [
      "O comprimento total infinito da mola quando esticada até ao limite.",
      "A variação líquida de comprimento do corpo (diferença entre o comprimento final sob carga e o comprimento inicial de repouso).",
      "O diâmetro da secção transversal da barra em repouso.",
      "A massa de metal consumida durante a distensão mecânica."
    ],
    "correctIndex": 1,
    "explanation": "A deformação absoluta Δx quantifica a alteração métrica das dimensões do corpo: Δx = |L_final - L_inicial|, medida em metros (m) no Sistema Internacional.",
    "distractorAnalysis": [
      "Está incorreta: Δx é a variação de comprimento, não o comprimento total acumulado.",
      "Está incorreta: O diâmetro transversal é uma medida de secção (S), não a deformação longitudinal Δx.",
      "Está incorreta: Não há consumo de massa durante a deformação elástica de um corpo."
    ],
    "nursingApplication": "Garante o rigor no cálculo da diferença de comprimento de membros e equipamentos ortopédicos."
  },
  {
    "id": 2150,
    "topicId": 2,
    "question": "Duas molas elásticas idênticas, cada uma com constante k = 100 N/m, são associadas em paralelo para sustentar conjuntamente uma carga. Qual é a constante elástica equivalente do conjunto?",
    "options": [
      "50 N/m",
      "100 N/m",
      "200 N/m (a rigidez duplica, pois as forças de ambas as molas somam-se para a mesma deformação).",
      "10 000 N/m"
    ],
    "correctIndex": 2,
    "explanation": "Em paralelo, ambas as molas sofrem a mesma deformação Δx e as forças somam-se: F_total = F1 + F2 = (k + k) Δx = 2k · Δx. A rigidez equivalente é k_eq = 100 + 100 = 200 N/m.",
    "distractorAnalysis": [
      "Está incorreta: 50 N/m seria a constante se estivessem ligadas em série (uma a seguir à outra), o que torna o conjunto mais flexível.",
      "Está incorreta: 100 N/m é a constante de uma única mola isolada.",
      "Está incorreta: Multiplicar as constantes violaria a análise dimensional de forças paralelas."
    ],
    "nursingApplication": "Explica por que ligamentos paralelos numa articulação aumentam substancialmente a rigidez e estabilidade articular."
  },
  {
    "id": 2151,
    "topicId": 2,
    "question": "O que mede fundamentalmente a Constante Elástica k de acordo com o Slide 41 de Biofísica?",
    "options": [
      "A condutividade elétrica do tecido celular.",
      "A velocidade com que a mola arrefece à temperatura ambiente.",
      "O volume de líquido sinovial secretado pela cápsula articular.",
      "Mede a rigidez do corpo elástico em estudo (Slide 41)."
    ],
    "correctIndex": 3,
    "explanation": "O Slide 41 salienta explicitamente através de uma seta explicativa: 'k = Constante elástica do corpo (N/m) -> Mede a rigidez do corpo elástico em estudo'.",
    "distractorAnalysis": [
      "Está incorreta: Condutividade elétrica é medida em Siemens/metro, não sendo a constante k.",
      "Está incorreta: Taxa de arrefecimento pertence à termodinâmica de transferência de calor.",
      "Está incorreta: Volume sinovial é um parâmetro anatómico e fisiológico articular."
    ],
    "nursingApplication": "Compreensão de que corpos com k elevado são muito rígidos e corpos com k baixo são flexíveis."
  },
  {
    "id": 2152,
    "topicId": 2,
    "question": "Qual é a restrição fundamental da Lei fundamental F = k · Δx expressa em destaque no Slide 42?",
    "options": [
      "'Apenas se aplica aos corpos com tamanho e espessura definidos e não exclusivamente ao material de que são feitos.'",
      "'Apenas se aplica no vácuo cósmico sob gravidade rigorosamente nula.'",
      "'Apenas é válida para líquidos de alta viscosidade como o mel.'",
      "'Apenas pode ser utilizada em corpos com massa superior a 1000 kg.'"
    ],
    "correctIndex": 0,
    "explanation": "O Slide 42 adverte formalmente: 'Apenas se aplica aos corpos com tamanho e espessura definidos e não exclusivamente ao material de que são feitos'. A constante k é uma propriedade extrínseca de um objeto específico.",
    "distractorAnalysis": [
      "Está incorreta: A fórmula aplica-se no laboratório e ambiente hospitalar sob gravidade terrestre normal.",
      "Está incorreta: Fluidos viscosos seguem leis de escoamento, não a fórmula elástica F = k · Δx.",
      "Está incorreta: Aplica-se a qualquer mola ou corpo elástico macroscópico, de poucos gramas a toneladas."
    ],
    "nursingApplication": "Distingue a rigidez da peça concreta (k) da rigidez intrínseca do material (Módulo de Young E)."
  },
  {
    "id": 2153,
    "topicId": 2,
    "question": "Se tivermos duas barras cilíndricas feitas do MESMO aço, sendo a Barra 1 muito grossa e curta e a Barra 2 muito fina e comprida, como se comparam as suas constantes k (Slide 42)?",
    "options": [
      "Ambas têm exatamente a mesma constante k porque são feitas do mesmo aço.",
      "A Barra 1 (grossa e curta) terá uma constante elástica k muito superior à da Barra 2 (fina e comprida), sendo muito mais difícil de deformar.",
      "A Barra 2 terá maior constante k porque o maior comprimento atrai mais força.",
      "Ambas têm constante k nula por serem feitas de aço inoxidável."
    ],
    "correctIndex": 1,
    "explanation": "A constante k depende das dimensões geométricas (k = E · A / L): maior área de secção e menor comprimento aumentam drasticamente a rigidez k. Embora o material seja o mesmo aço, as peças têm k muito diferentes.",
    "distractorAnalysis": [
      "Está incorreta: O material partilha o mesmo Módulo de Young E, mas a constante k varia com as dimensões geométricas (Slide 42).",
      "Está incorreta: Barras compridas e finas são mais fáceis de dobrar e esticar (possuem menor rigidez k).",
      "Está incorreta: O aço é extremamente rígido com k elevado e finito."
    ],
    "nursingApplication": "Explica por que um fémur espesso suporta muito mais carga do que uma costela delgada feita do mesmo tecido ósseo."
  },
  {
    "id": 2154,
    "topicId": 2,
    "question": "Por que razão a constante elástica k é classificada como uma propriedade 'extrínseca' de um corpo específico?",
    "options": [
      "Porque só existe no exterior da atmosfera da Terra.",
      "Porque depende exclusivamente da cor do revestimento exterior do material.",
      "Porque o seu valor depende da geometria particular do objeto (comprimento e espessura da secção), e não exclusivamente do material constituinte.",
      "Porque foi descoberta por um cientista estrangeiro (Hooke, 1660)."
    ],
    "correctIndex": 2,
    "explanation": "Propriedades extrínsecas dependem da forma e quantidade de matéria (dimensões da peça concreta). Para caracterizar a rigidez intrínseca do material puro independente da geometria, utiliza-se o Módulo de Young (Slide 43).",
    "distractorAnalysis": [
      "Está incorreta: Extrínseca significa dependente da forma/tamanho geométrico, não do espaço extraterrestre.",
      "Está incorreta: A cor de um material não altera as suas propriedades mecânicas de rigidez.",
      "Está incorreta: A etimologia científica refere-se à natureza da propriedade física, não à nacionalidade do autor."
    ],
    "nursingApplication": "Conceito epistemológico basilar da ciência dos materiais em saúde."
  },
  {
    "id": 2155,
    "topicId": 2,
    "question": "Quanto maior for o valor numérico da constante elástica k de um corpo elástico (em N/m):",
    "options": [
      "Mais facilmente o corpo se deforma sob qualquer força ínfima.",
      "Menor é a força necessária para esticar a barra em 1 metro.",
      "Mais rápido o corpo se transforma num fluido puramente viscoso.",
      "Mais rígido é o corpo, necessitando de forças muito maiores para produzir a mesma deformação."
    ],
    "correctIndex": 3,
    "explanation": "Sendo k = F / Δx, quanto maior for k, maior é a força necessária para produzir uma dada deformação. Um valor elevado de k traduz alta rigidez mecânica estrutural (Slide 41).",
    "distractorAnalysis": [
      "Está incorreta: Corpos fáceis de deformar têm constante elástica k baixa (são flexíveis).",
      "Está incorreta: Maior k exige maior força (F = k · 1 m), nunca menor.",
      "Está incorreta: k elevado mede rigidez elástica de sólidos e não tem relação com escoamento viscoso."
    ],
    "nursingApplication": "Permite selecionar ligaduras elásticas ou ortóteses com a rigidez k adequada à imobilização pretendida."
  },
  {
    "id": 2156,
    "topicId": 2,
    "question": "Qual é o significado físico da unidade Newton por metro (N/m) da constante elástica k?",
    "options": [
      "Indica a intensidade da força em Newtons que seria necessária aplicar para produzir uma deformação de 1 metro no corpo elástico.",
      "Indica a velocidade em metros por segundo com que a mola recupera a forma.",
      "Indica a pressão exercida por metro cúbico de volume corporal.",
      "Mede o peso da mola em quilogramas por cada metro de altura."
    ],
    "correctIndex": 0,
    "explanation": "A unidade N/m (quociente de Força em N por Deformação em m) traduz fisicamente quantos Newtons de força são necessários para distender ou comprimir a estrutura em 1 metro linear.",
    "distractorAnalysis": [
      "Está incorreta: Velocidade mede-se em m/s, não em N/m.",
      "Está incorreta: Pressão mede-se em Pascal (N/m²), não em N/m.",
      "Está incorreta: Densidade linear de peso mediria em N/m de massa distribuída, não na relação força/deformação elástica."
    ],
    "nursingApplication": "Interpretação física intuitiva das grandezas derivadas do Sistema Internacional."
  },
  {
    "id": 2157,
    "topicId": 2,
    "question": "Dois dinamómetros, A e B, possuem molas com constantes k_A = 1000 N/m e k_B = 100 N/m. Para produzir a mesma deformação de 1 cm (0,01 m):",
    "options": [
      "Ambos exigem exatamente a mesma força de 1 Newton.",
      "O dinamómetro A exige uma força de 10 N (dez vezes maior) do que o dinamómetro B, que exige apenas 1 N.",
      "O dinamómetro B exige uma força dez vezes superior à de A.",
      "Nenhum dos aparelhos sofre deformação mecânica mensurável."
    ],
    "correctIndex": 1,
    "explanation": "Usando F = k · Δx: F_A = 1000 × 0,01 = 10 N; F_B = 100 × 0,01 = 1 N. O dinamómetro com mola dez vezes mais rígida exige dez vezes mais força para o mesmo deslocamento.",
    "distractorAnalysis": [
      "Está incorreta: Forças iguais só produziriam a mesma deformação se as molas fossem idênticas.",
      "Está incorreta: O dinamómetro B tem mola mais branda (menor k) e requer menos força, não mais.",
      "Está incorreta: Ambos sofrem deformação elástica proporcional à força aplicada."
    ],
    "nursingApplication": "Diferencia dinamómetros de alta precisão para cargas leves de dinamómetros de alta capacidade para cargas pesadas."
  },
  {
    "id": 2158,
    "topicId": 2,
    "question": "No contexto dos tecidos de suporte biológico (como ligamentos articulares), uma estrutura ligamentar mais espessa:",
    "options": [
      "Possui uma constante k menor, deformando-se com facilidade extrema.",
      "Transforma-se num corpo puramente viscoso sem elasticidade.",
      "Possui maior constante k de rigidez estrutural, resistindo a forças maiores com menor deformação.",
      "Perde a capacidade de suportar forças de tração do membro."
    ],
    "correctIndex": 2,
    "explanation": "Maior espessura (área de secção transversal) confere à estrutura ligamentar maior constante de rigidez k. Assim, sob a mesma carga mecânica, o ligamento espesso distende-se menos, proporcionando maior estabilidade articular.",
    "distractorAnalysis": [
      "Está incorreta: Maior secção transversal aumenta k, nunca diminui.",
      "Está incorreta: O ligamento mantém o seu comportamento de tecido conjuntivo elástico de suporte.",
      "Está incorreta: A maior espessura aumenta a capacidade de suportar tração sem sofrer rotura."
    ],
    "nursingApplication": "Explica por que atletas com ligamentos hipertrofiados pelo treino têm maior estabilidade articular nas transferências de carga."
  },
  {
    "id": 2159,
    "topicId": 2,
    "question": "No Slide 42, a advertência de que F = k · Δx 'não se aplica exclusivamente ao material' serve para preparar a introdução de qual conceito físico no Slide 43?",
    "options": [
      "Do calor específico da água corporal.",
      "Da aceleração da gravidade de Galileu.",
      "Da velocidade angular do cotovelo.",
      "Da Lei de Hooke generalizada e do Módulo de Young (E), que é a rigidez intrínseca do próprio material."
    ],
    "correctIndex": 3,
    "explanation": "O Slide 42 estabelece a ponte pedagógica: a constante k varia com o formato da peça; para estudar a rigidez intrínseca do material puro, o Slide 43 introduz a Lei de Hooke generalizada (σ = E · ε) com o Módulo de Young.",
    "distractorAnalysis": [
      "Está incorreta: Calor específico é uma grandeza termodinâmica, não da elasticidade generalizada.",
      "Está incorreta: Gravidade é uma aceleração de campo (g), não uma propriedade de materiais.",
      "Está incorreta: Velocidade angular é cinemática rotativa de alavancas."
    ],
    "nursingApplication": "Compreensão da transição didática fundamental entre os Slides 42 e 43 da aula de Paulo Pereira."
  },
  {
    "id": 2160,
    "topicId": 2,
    "question": "Um corpo cuja constante elástica k tendesse teoricamente para o infinito (k -> ∞) corresponderia a qual modelo reológico?",
    "options": [
      "A um Sólido de Euclides (sólido indeformável, onde a deformação Δx é zero sob qualquer força finita).",
      "A um Corpo Viscoso puro como a água.",
      "A uma mola de borracha com módulo quase nulo.",
      "A uma massa de pão plastoviscoelástica."
    ],
    "correctIndex": 0,
    "explanation": "Pela relação Δx = F / k, quando k tende para infinito, Δx é rigorosamente nulo para qualquer força finita F. O corpo nunca se deforma: é o modelo do Sólido Indeformável de Euclides (Slide 15).",
    "distractorAnalysis": [
      "Está incorreta: A água tem viscosidade e deforma-se sob qualquer tensão tangencial, não tendo rigidez infinita.",
      "Está incorreta: A borracha tem rigidez extremamente baixa (Slide 44), o oposto de rigidez infinita.",
      "Está incorreta: A massa de pão molda-se facilmente com os dedos."
    ],
    "nursingApplication": "Unificação concetual entre os modelos teóricos de corpos indeformáveis e a Lei da Elasticidade."
  },
  {
    "id": 2161,
    "topicId": 2,
    "question": "Qual é a fórmula matemática da Lei de Hooke generalizada apresentada no Slide 43 de Biofísica?",
    "options": [
      "F = m · a",
      "σ = E · ε",
      "P = m · g",
      "p = F / A"
    ],
    "correctIndex": 1,
    "explanation": "O Slide 43 estipula expressamente a formulação da Lei de Hooke generalizada: 'Tensão exercida por um corpo quando este é distendido ou comprimido: σ = E · ε'.",
    "distractorAnalysis": [
      "Está incorreta: F = m · a é a 2ª Lei de Newton da dinâmica (Slide 13 do Tópico 1).",
      "Está incorreta: P = m · g é o peso gravítico de Newton (Slide 28 do Tópico 1).",
      "Está incorreta: p = F / A é a definição geral de pressão escalar (Slide 44 do Tópico 1)."
    ],
    "nursingApplication": "A equação fundamental da mecânica dos materiais para analisar tensões e deformações relativas em tecidos biológicos."
  },
  {
    "id": 2162,
    "topicId": 2,
    "question": "Na fórmula σ = E · ε do Slide 43, qual é a definição e unidade SI do símbolo 'σ' (sigma)?",
    "options": [
      "Superfície da base de sustentação expressa em cm².",
      "Soma de todas as forças nucleares fracas no interior da célula.",
      "Tensão mecânica que causa a deformação do sólido de área de secção A, expressa em N/m² ou Pascal (Pa).",
      "Segundo de tempo decorrido desde o início da marcha."
    ],
    "correctIndex": 2,
    "explanation": "O Slide 43 define textualmente: 'σ = Tensão mecânica que causa a deformação do sólido de área de secção A', com unidades no SI de N/m² ou Pascal (Pa).",
    "distractorAnalysis": [
      "Está incorreta: Área da base é uma medida geométrica de suporte (BS), não a tensão interna σ.",
      "Está incorreta: Forças nucleares pertencem à física nuclear, não à tensão elástica contínua dos tecidos.",
      "Está incorreta: Segundo (s) é a unidade de tempo, grandeza dimensionalmente distinta de tensão mecânica."
    ],
    "nursingApplication": "Conceito central de esforço mecânico interno por unidade de área resistente."
  },
  {
    "id": 2163,
    "topicId": 2,
    "question": "Na fórmula σ = E · ε do Slide 43, qual é a definição exata do símbolo 'E'?",
    "options": [
      "Energia cinética da ambulância medida em Joules.",
      "Espessura da camada de pele sobre o osso sacro.",
      "Equilíbrio indiferente de um sólido em translação uniforme.",
      "Módulo de Young (rigidez intrínseca de um material perante forças de tração e compressão)."
    ],
    "correctIndex": 3,
    "explanation": "O Slide 43 define expressamente: 'E = Módulo de Young (rigidez intrínseca de um material perante forças de tração e compressão)'.",
    "distractorAnalysis": [
      "Está incorreta: Energia cinética mede-se em Joules (1/2 m v²), não sendo a constante de rigidez elástica E.",
      "Está incorreta: Espessura da pele é uma dimensão métrica anatómica em milímetros.",
      "Está incorreta: Equilíbrio indiferente é um estado de equilíbrio mecânico (Slide 57 do Tópico 1)."
    ],
    "nursingApplication": "A constante material por excelência que dita a rigidez elástica de biomateriais e tecidos."
  },
  {
    "id": 2164,
    "topicId": 2,
    "question": "Na fórmula σ = E · ε do Slide 43, qual é a definição exata do símbolo 'ε' (épsilon)?",
    "options": [
      "Deformação relativa (alongamento / compressão do objeto relativo ao comprimento inicial, ε = ΔL / L).",
      "Energia potencial elástica armazenada na mola em Joules.",
      "Eletrocardiograma médio medido em milivolts.",
      "Esforço muscular exercido pelo bíceps sobre o rádio."
    ],
    "correctIndex": 0,
    "explanation": "O Slide 43 define textualmente: 'ε = Alongamento / Compressão do objeto relativo ao comprimento inicial'. É a deformação adimensional relativa sofrida pela peça.",
    "distractorAnalysis": [
      "Está incorreta: Energia potencial tem unidade Joule, enquanto ε é uma razão geométrica adimensional.",
      "Está incorreta: ECG é o registo de potenciais de ação bioelétricos cardíacos.",
      "Está incorreta: Esforço muscular do bíceps mede-se em Newtons (Slide 89 do Tópico 1)."
    ],
    "nursingApplication": "Permite normalizar a deformação independentemente de a barra ter 10 cm ou 10 metros de comprimento."
  },
  {
    "id": 2165,
    "topicId": 2,
    "question": "Qual é a unidade da Tensão Mecânica σ no Sistema Internacional indicada nos Slides 43 e 44?",
    "options": [
      "Quilograma por segundo (kg/s).",
      "Newton por metro quadrado (N/m²) ou Pascal (Pa).",
      "Newton-metro (N·m).",
      "Metro por segundo ao quadrado (m/s²)."
    ],
    "correctIndex": 1,
    "explanation": "Como a tensão mecânica σ é a força interna dividida pela área de secção transversal (σ = F / A), a sua unidade SI é o N/m² (Newton por metro quadrado), que corresponde exatamente ao Pascal (Pa).",
    "distractorAnalysis": [
      "Está incorreta: kg/s é taxa de fluxo mássico, não tensão mecânica.",
      "Está incorreta: N·m é a unidade de momento de força (torque) ou energia (Joule).",
      "Está incorreta: m/s² é a unidade de aceleração linear."
    ],
    "nursingApplication": "Demonstra a identidade física dimensional entre tensão mecânica e pressão (Slide 44 do Tópico 1)."
  },
  {
    "id": 2166,
    "topicId": 2,
    "question": "Qual é a unidade no Sistema Internacional da Deformação Relativa ε (épsilon = ΔL / L)?",
    "options": [
      "Metro (m).",
      "Newton (N).",
      "É uma grandeza adimensional (não tem unidade, sendo o quociente entre dois comprimentos em metros).",
      "Pascal (Pa)."
    ],
    "correctIndex": 2,
    "explanation": "Como ε resulta da divisão de uma variação de comprimento (em metros) pelo comprimento inicial (em metros): m / m = 1. Trata-se de uma grandeza adimensional pura, frequentemente expressa em percentagem (%).",
    "distractorAnalysis": [
      "Está incorreta: Metro mede a deformação absoluta Δx, não a deformação relativa normalizada ε.",
      "Está incorreta: Newton é a unidade de força.",
      "Está incorreta: Pascal é a unidade de tensão e pressão."
    ],
    "nursingApplication": "Prevenção de erros clássicos de análise dimensional na resolução de problemas da Lei de Hooke."
  },
  {
    "id": 2167,
    "topicId": 2,
    "question": "Qual é a grande vantagem científica da Lei de Hooke generalizada (σ = E · ε) em comparação com a fórmula elementar da mola (F = k · Δx)?",
    "options": [
      "A fórmula σ = E · ε só funciona para fluidos em repouso absoluto.",
      "A fórmula σ = E · ε elimina a necessidade de qualquer força deformadora.",
      "A fórmula σ = E · ε aplica-se exclusivamente no interior do núcleo atómico.",
      "Permite descrever o comportamento elástico intrínseco do material puro, sendo independente do tamanho e da espessura geométrica da peça testada."
    ],
    "correctIndex": 3,
    "explanation": "Enquanto a constante k depende da espessura e comprimento de uma peça específica (Slide 42), o Módulo de Young E é uma propriedade intrínseca universal do material: o aço tem o mesmo E quer seja um fio cirúrgico finíssimo ou uma viga de ponte maciça.",
    "distractorAnalysis": [
      "Está incorreta: Aplica-se primariamente a sólidos e tecidos submetidos a tração e compressão axial.",
      "Está incorreta: Tensão σ decorre diretamente da força mecânica aplicada dividida pela área.",
      "Está incorreta: Aplica-se à mecânica dos meios contínuos e tecidos biológicos macroscópicos."
    ],
    "nursingApplication": "Permite aos investigadores comparar diretamente a rigidez do osso humano com a de biomateriais de próteses."
  },
  {
    "id": 2168,
    "topicId": 2,
    "question": "Se um material tiver Módulo de Young E = 2 × 10¹⁰ N/m² e for submetido a uma deformação relativa de ε = 0,001 (0,1%), qual é a tensão mecânica σ gerada na sua estrutura?",
    "options": [
      "σ = 2 × 10⁷ N/m² (ou 20 MPa)",
      "σ = 2 × 10¹³ N/m²",
      "σ = 0,00000005 N/m²",
      "σ = 2,001 N/m²"
    ],
    "correctIndex": 0,
    "explanation": "Aplicando a Lei de Hooke generalizada (Slide 43): σ = E · ε = (2 × 10¹⁰ N/m²) × (10⁻³) = 2 × 10⁷ N/m² (20 000 000 Pa ou 20 MPa).",
    "distractorAnalysis": [
      "Está incorreta: 2 × 10¹³ resultaria de multiplicar por 1000 em vez de 0,001.",
      "Está incorreta: 0,00000005 resultaria de dividir erradamente ε por E.",
      "Está incorreta: 2,001 resultaria de uma soma aritmética descabida de variáveis incompatíveis."
    ],
    "nursingApplication": "Cálculo típico de tensão em ensaios de compressão e tração de amostras de osso cortical."
  },
  {
    "id": 2169,
    "topicId": 2,
    "question": "Qual é o valor do Módulo de Young do Osso (E_osso) apresentado expressamente no Slide 43 de Biofísica?",
    "options": [
      "E_osso = 2 × 10¹¹ N/m²",
      "E_osso = 2 × 10¹⁰ N/m²",
      "E_osso = 7 × 10¹⁰ N/m²",
      "E_osso = 0,1 × 10⁷ N/m²"
    ],
    "correctIndex": 1,
    "explanation": "O Slide 43 apresenta em destaque o valor de referência biológico: 'E osso = 2 × 10¹⁰ N/m²'.",
    "distractorAnalysis": [
      "Está incorreta: 2 × 10¹¹ N/m² é o Módulo de Young do aço (Slide 43).",
      "Está incorreta: 7 × 10¹⁰ N/m² é o Módulo de Young do vidro (Slide 44).",
      "Está incorreta: 0,1 × 10⁷ N/m² é a ordem de grandeza do módulo da borracha (Slide 44)."
    ],
    "nursingApplication": "Constante biofísica de referência obrigatória para os alunos de Enfermagem."
  },
  {
    "id": 2170,
    "topicId": 2,
    "question": "Qual é o valor do Módulo de Young do Aço (E_aço) apresentado expressamente no Slide 43 de Biofísica?",
    "options": [
      "E_aço = 2 × 10¹⁰ N/m²",
      "E_aço = 7,5 × 10¹⁰ N/m²",
      "E_aço = 2 × 10¹¹ N/m² (ou 20 × 10¹⁰ N/m²)",
      "E_aço = 10⁷ N/m²"
    ],
    "correctIndex": 2,
    "explanation": "O Slide 43 indica: 'E aço = 2 × 10¹¹ N/m²' (que é matematicamente equivalente a 20 × 10¹⁰ N/m², conforme grafado no Slide 44).",
    "distractorAnalysis": [
      "Está incorreta: 2 × 10¹⁰ N/m² é o módulo do osso cortical, dez vezes menor que o aço.",
      "Está incorreta: 7,5 × 10¹⁰ N/m² é o módulo da prata (Slide 44).",
      "Está incorreta: 10⁷ N/m² é a ordem de grandeza do módulo elástico da borracha (Slide 44)."
    ],
    "nursingApplication": "Permite comparar a rigidez de implantes e placas metálicas cirúrgicas de aço com a do tecido ósseo hospedeiro."
  },
  {
    "id": 2171,
    "topicId": 2,
    "question": "Qual é a definição exata de Módulo de Young (E) fornecida no Slide 43 dos slides de Biofísica?",
    "options": [
      "Aceleração com que um membro é projetado numa colisão a 80 km/h.",
      "A quantidade de atrito no leito gerada por lençóis ásperos.",
      "A pressão normal exercida pelo sacro sobre colchões de ar alternante.",
      "Rigidez intrínseca de um material perante forças de tração e compressão."
    ],
    "correctIndex": 3,
    "explanation": "O Slide 43 define textualmente: 'E = Módulo de Young (rigidez intrínseca de um material perante forças de tração e compressão)'.",
    "distractorAnalysis": [
      "Está incorreta: Aceleração de colisão refere-se à dinâmica do Tópico 1 (Slide 49).",
      "Está incorreta: Atrito no leito refere-se ao cisalhamento e atrito estático/cinético (Slide 33).",
      "Está incorreta: Pressão no sacro refere-se à força normal e lesões de pressão (Slide 44 do Tópico 1)."
    ],
    "nursingApplication": "Definição concetual de referência para toda a resistência dos materiais."
  },
  {
    "id": 2172,
    "topicId": 2,
    "question": "Se cortarmos uma barra de aço maciço ao meio, reduzindo o seu comprimento para metade, o que acontece ao seu Módulo de Young (E)?",
    "options": [
      "Permanece rigorosamente inalterado, porque E é uma propriedade intrínseca do material aço e não depende das dimensões da peça.",
      "Reduz-se para metade porque o comprimento foi reduzido para metade.",
      "Duplica instantaneamente devido à conservação de matéria.",
      "Anula-se transformando o aço em borracha vulcanizada."
    ],
    "correctIndex": 0,
    "explanation": "Ao contrário da constante de mola k (que varia com o comprimento), o Módulo de Young E é uma propriedade física intrínseca de cada material: o aço tem E = 20 × 10¹⁰ N/m² quer a barra tenha 1 metro ou 1 centímetro.",
    "distractorAnalysis": [
      "Está incorreta: A constante k da barra é que duplica, mas o Módulo de Young E do material mantém-se exatamente o mesmo.",
      "Está incorreta: E não varia com o corte de peças sólidas homogéneas.",
      "Está incorreta: O material continua a ser aço inalterado."
    ],
    "nursingApplication": "Consolida de forma indelével a diferença entre propriedade intrínseca (material) e extrínseca (objeto)."
  },
  {
    "id": 2173,
    "topicId": 2,
    "question": "Qual é a unidade do Módulo de Young no Sistema Internacional e com que outra grandeza partilha a mesma unidade?",
    "options": [
      "Joule (J), partilhando unidade com a energia mecânica.",
      "N/m² ou Pascal (Pa), partilhando unidade com a Pressão e a Tensão Mecânica.",
      "Newton-metro (N·m), partilhando unidade com o Momento da Força.",
      "Quilograma (kg), partilhando unidade com a Massa inercial."
    ],
    "correctIndex": 1,
    "explanation": "Como na equação σ = E · ε a deformação ε é adimensional, o Módulo de Young E tem obrigatoriamente a mesma unidade que a tensão mecânica σ: N/m² ou Pascal (Pa).",
    "distractorAnalysis": [
      "Está incorreta: Joule é unidade de energia e trabalho mecânico.",
      "Está incorreta: Newton-metro é unidade de momento de força (torque).",
      "Está incorreta: Quilograma é a unidade fundamental de massa."
    ],
    "nursingApplication": "Garante a correta interpretação de tabelas de propriedades mecânicas de biomateriais."
  },
  {
    "id": 2174,
    "topicId": 2,
    "question": "Um material que apresenta um Módulo de Young com valor numérico extremamente elevado caracteriza-se mecanicamente por:",
    "options": [
      "Ser extremamente elástico e deformar-se metros com um simples sopro de ar.",
      "Comportar-se como um fluido puramente viscoso que escoa como água.",
      "Ser extremamente rígido, suportando esforços e tensões massivas com mínima deformação estrutural.",
      "Perder toda a sua massa inercial durante o ensaio mecânico."
    ],
    "correctIndex": 2,
    "explanation": "Como ε = σ / E, quanto maior for o valor de E, menor será a deformação relativa ε gerada por uma dada tensão σ. Materiais de altíssimo módulo (como o aço no Slide 44) sofrem mínima deformação dimensional mesmo sob cargas gigantescas.",
    "distractorAnalysis": [
      "Está incorreta: Deformar-se muito sob cargas mínimas caracteriza materiais de baixo módulo, como a borracha (Slide 44).",
      "Está incorreta: Módulos de Young elevados definem sólidos altamente rígidos, o oposto de fluidos.",
      "Está incorreta: A massa inercial de corpos sólidos é constante e independente da sua rigidez."
    ],
    "nursingApplication": "Permite aos alunos relacionar o valor numérico de E com a rigidez perceptível dos materiais."
  },
  {
    "id": 2175,
    "topicId": 2,
    "question": "Um material que apresenta um Módulo de Young com valor numérico muito baixo (como a borracha nos slides) caracteriza-se por:",
    "options": [
      "Ser mais rígido do que o aço e o vidro combinados.",
      "Ser indeformável sob qualquer tipo de força mecânica.",
      "Fraturar imediatamente sem sofrer qualquer alteração dimensional.",
      "Apresentar grande flexibilidade elástica, sofrendo grandes deformações reversíveis sob cargas mínimas."
    ],
    "correctIndex": 3,
    "explanation": "O Slide 44 descreve textualmente para a Borracha: 'Módulo extremamente baixo; sofre grandes deformações elásticas reversíveis sob cargas mínimas'.",
    "distractorAnalysis": [
      "Está incorreta: O módulo da borracha é muitas ordens de grandeza inferior ao do aço.",
      "Está incorreta: A borracha é o exemplo oposto de um sólido indeformável: deforma-se extensamente.",
      "Está incorreta: Fratura sem deformação caracteriza materiais frágeis de alto módulo como o vidro (Slide 44)."
    ],
    "nursingApplication": "Explica a utilidade da borracha e elastómeros em almofadas e dispositivos de alívio de impacto."
  },
  {
    "id": 2176,
    "topicId": 2,
    "question": "A partir da Lei de Hooke generalizada (σ = E · ε), como se calcula matematicamente a deformação relativa ε?",
    "options": [
      "ε = σ / E",
      "ε = σ · E",
      "ε = E / σ",
      "ε = σ + E"
    ],
    "correctIndex": 0,
    "explanation": "Isolando a deformação relativa na equação σ = E · ε, obtém-se ε = σ / E. A deformação é diretamente proporcional à tensão σ e inversamente proporcional à rigidez do material E.",
    "distractorAnalysis": [
      "Está incorreta: Multiplicar σ por E daria unidades de (N/m²)², dimensionalmente inconsistente.",
      "Está incorreta: Inverter para E / σ daria o inverso da deformação relativa (1/ε).",
      "Está incorreta: Somar grandezas de natureza distinta não é permitido na física."
    ],
    "nursingApplication": "Fórmula fundamental para determinar o encurtamento percentual de ossos sob cargas compressivas."
  },
  {
    "id": 2177,
    "topicId": 2,
    "question": "O Módulo de Young E mede especificamente a rigidez intrínseca dos materiais perante quais solicitações mecânicas (Slide 43)?",
    "options": [
      "Apenas perante emissões de radiação atómica gama.",
      "Perante forças axiais de tração e de compressão (Slide 43).",
      "Exclusivamente perante atrito térmico de evaporação.",
      "Apenas perante forças nucleares fortes subatómicas."
    ],
    "correctIndex": 1,
    "explanation": "O Slide 43 explicita textualmente entre parêntesis: 'rigidez intrínseca de um material perante forças de tração e compressão'.",
    "distractorAnalysis": [
      "Está incorreta: Radiação gama pertence à física nuclear médica (Tópico 6 e 7).",
      "Está incorreta: Evaporação é um fenómeno de transição de fase de fluidos térmicos.",
      "Está incorreta: Forças nucleares fortes atuam exclusivamente dentro do núcleo dos átomos."
    ],
    "nursingApplication": "Restrição técnica importante: o Módulo de Young refere-se a esforços axiais normais de tração/compressão."
  },
  {
    "id": 2178,
    "topicId": 2,
    "question": "Comparando os valores dados no Slide 43, quantas vezes é o Módulo de Young do Aço (2 × 10¹¹ N/m²) superior ao do Osso (2 × 10¹⁰ N/m²)?",
    "options": [
      "O aço é 2 vezes mais rígido que o osso.",
      "O aço é 100 vezes mais rígido que o osso.",
      "O aço é 10 vezes mais rígido que o osso (Módulo 10 vezes maior).",
      "Ambos têm rigorosamente o mesmo módulo elástico."
    ],
    "correctIndex": 2,
    "explanation": "Dividindo os módulos: (2 × 10¹¹ N/m²) / (2 × 10¹⁰ N/m²) = 10. O aço é exatamente dez vezes mais rígido intrinsecamente do que o osso cortical (Slide 44: 'Módulo 10 vezes menor que o aço').",
    "distractorAnalysis": [
      "Está incorreta: A diferença é de uma ordem de magnitude inteira (fator 10), não apenas fator 2.",
      "Está incorreta: Fator 100 exigiria uma potência de 10¹² para o aço.",
      "Está incorreta: Os valores diferem claramente em potência de 10 nos dados do slide."
    ],
    "nursingApplication": "Dado quantitativo essencial para compreender o desafio de compatibilidade mecânica em próteses ósseas de aço."
  },
  {
    "id": 2179,
    "topicId": 2,
    "question": "Num ensaio mecânico de tração com gráfico Tensão versus Deformação relativa (σ vs ε), o Módulo de Young E corresponde graficamente a:",
    "options": [
      "À área total sob a curva do gráfico.",
      "Ao valor da deformação no ponto onde a barra se parte.",
      "À ordenada na origem onde a curva cruza o eixo vertical.",
      "Ao declive (inclinação) da reta no regime elástico linear."
    ],
    "correctIndex": 3,
    "explanation": "Como σ = E · ε, o gráfico de σ em função de ε é uma reta cuja equação tem declive igual a E (declive = Δσ / Δε = E). Quanto mais íngreme for a reta, mais rígido é o material.",
    "distractorAnalysis": [
      "Está incorreta: A área sob a curva representa a densidade de energia de deformação (trabalho elástico), não o módulo E.",
      "Está incorreta: O ponto de fratura define a deformação última de rotura, não o módulo de elasticidade.",
      "Está incorreta: A reta passa pela origem (0,0), pelo que a ordenada na origem é zero."
    ],
    "nursingApplication": "Capacidade de interpretar curvas experimentais de ensaios de materiais biomecânicos."
  },
  {
    "id": 2180,
    "topicId": 2,
    "question": "Por que razão o conhecimento do Módulo de Young é crucial na seleção de biomateriais para a construção de próteses de anca e fixadores ortopédicos?",
    "options": [
      "Para escolher materiais com rigidez estrutural adequada que não sobrecarreguem excessivamente nem retirem o estímulo mecânico ao osso hospedeiro circundante.",
      "Para garantir que a prótese se liquefaz a cada 24 horas no interior do organismo.",
      "Para eliminar a gravidade dos membros inferiores do doente operado.",
      "Para transformar o osso natural num corpo perfeitamente plástico de plasticina."
    ],
    "correctIndex": 0,
    "explanation": "Se a prótese for dez vezes mais rígida que o osso (como o aço comum), suportará toda a carga sozinha (fenómeno de stress shielding), provocando reabsorção óssea; conhecer o Módulo de Young orienta o fabrico de implantes biomiméticos seguros.",
    "distractorAnalysis": [
      "Está incorreta: Biomateriais de prótese têm de manter solidez e durabilidade permanente no meio biológico.",
      "Está incorreta: Nenhuma prótese anula as leis universais da gravidade de Newton.",
      "Está incorreta: A medicina visa preservar a viscoelasticidade e mineralização saudável do osso vivo."
    ],
    "nursingApplication": "Aplicação clínica real da biofísica de materiais na recuperação pós-operatória de doentes ortopédicos."
  },
  {
    "id": 2181,
    "topicId": 2,
    "question": "Qual é o valor do Módulo de Young e a descrição biomecânica do Aço apresentada na tabela do Slide 44?",
    "options": [
      "7 × 10¹⁰ N/m²; material extremamente flexível que fratura sem aviso.",
      "20 × 10¹⁰ N/m²; material extremamente rígido; suporta esforços massivos com mínima deformação estrutural.",
      "0,1 a 10 × 10⁷ N/m²; sofre grandes deformações sob cargas mínimas.",
      "2 × 10¹⁰ N/m²; confere rigidez com capacidade de amortecimento elástico."
    ],
    "correctIndex": 1,
    "explanation": "O Slide 44 define textualmente: 'Aço (20 × 10¹⁰ N/m²): Material extremamente rígido; suporta esforços massivos com mínima deformação estrutural'.",
    "distractorAnalysis": [
      "Está incorreta: 7 × 10¹⁰ N/m² é o valor e descrição do Vidro (Slide 44).",
      "Está incorreta: 0,1 a 10 × 10⁷ N/m² é o valor da Borracha (Slide 44).",
      "Está incorreta: 2 × 10¹⁰ N/m² é o valor do Osso cortical (Slide 44)."
    ],
    "nursingApplication": "O aço é o padrão de referência máxima de rigidez elástica analisado na aula."
  },
  {
    "id": 2182,
    "topicId": 2,
    "question": "Qual é o valor do Módulo de Young e o comportamento mecânico do Vidro descrito no Slide 44?",
    "options": [
      "20 × 10¹⁰ N/m²; ductilidade extraordinária com grande deformação plástica.",
      "7,5 × 10¹⁰ N/m²; metal nobre com elevada condução térmica.",
      "7 × 10¹⁰ N/m²; elevada rigidez teórica; contudo, apresenta grande fragilidade e fratura sem deformação plástica.",
      "0,1 × 10⁷ N/m²; comporta-se como massa de pão que escoa no tempo."
    ],
    "correctIndex": 2,
    "explanation": "O Slide 44 explicita: 'Vidro (7 × 10¹⁰ N/m²): Elevada rigidez teórica; contudo, apresenta grande fragilidade e fratura sem deformação plástica'.",
    "distractorAnalysis": [
      "Está incorreta: 20 × 10¹⁰ N/m² é o módulo do aço, e o vidro não é dúctil.",
      "Está incorreta: 7,5 × 10¹⁰ N/m² é o módulo da prata (Slide 44).",
      "Está incorreta: 10⁷ N/m² é a ordem da borracha, e o vidro não é pastoso como pão."
    ],
    "nursingApplication": "Ensina aos estudantes que rigidez elevada (alto E) não significa tenacidade: o vidro é rígido mas quebra de forma frágil catastrófica."
  },
  {
    "id": 2183,
    "topicId": 2,
    "question": "Qual é o valor do Módulo de Young e a característica da Prata apresentada no Slide 44?",
    "options": [
      "2 × 10¹⁰ N/m²; comporta-se como tecido ósseo em amortecimento.",
      "20 × 10¹⁰ N/m²; suporta esforços massivos sem qualquer flexibilidade.",
      "10⁷ N/m²; sofre deformações reversíveis sob forças mínimas.",
      "7,5 × 10¹⁰ N/m²; metal nobre com elevada rigidez mecânica e ductilidade sob solicitações controladas."
    ],
    "correctIndex": 3,
    "explanation": "O Slide 44 indica: 'Prata (7,5 × 10¹⁰ N/m²): Metal nobre com elevada rigidez mecânica e ductilidade sob solicitações controladas'.",
    "distractorAnalysis": [
      "Está incorreta: 2 × 10¹⁰ N/m² é o módulo do osso cortical.",
      "Está incorreta: 20 × 10¹⁰ N/m² é o módulo do aço.",
      "Está incorreta: 10⁷ N/m² é o módulo da borracha."
    ],
    "nursingApplication": "Destaca a ductilidade da prata em contraste com a fragilidade do vidro, apesar de terem módulos de Young próximos (7,5 vs 7 × 10¹⁰)."
  },
  {
    "id": 2184,
    "topicId": 2,
    "question": "Qual é o valor do Módulo de Young e a propriedade reológica da Borracha indicada no Slide 44?",
    "options": [
      "Borracha (0,1 a 10 × 10⁷ N/m²): Módulo extremamente baixo; sofre grandes deformações elásticas reversíveis sob cargas mínimas.",
      "Borracha (20 × 10¹⁰ N/m²): Material indeformável sob qualquer esforço de impacto.",
      "Borracha (7 × 10¹⁰ N/m²): Fratura sem deformação plástica ao menor toque.",
      "Borracha (7,5 × 10¹⁰ N/m²): Metal nobre para confecção de agulhas cirúrgicas."
    ],
    "correctIndex": 0,
    "explanation": "O Slide 44 define formalmente: 'Borracha (0,1 a 10 × 10⁷ N/m²): Módulo extremamente baixo; sofre grandes deformações elásticas reversíveis sob cargas mínimas'.",
    "distractorAnalysis": [
      "Está incorreta: 20 × 10¹⁰ N/m² é o módulo do aço rígido, o oposto da borracha flexível.",
      "Está incorreta: 7 × 10¹⁰ N/m² é o módulo do vidro frágil.",
      "Está incorreta: 7,5 × 10¹⁰ N/m² é a prata metálica."
    ],
    "nursingApplication": "A base para compreender a flexibilidade de cateteres, tubos de drenagem e solas de calçado antiderrapante."
  },
  {
    "id": 2185,
    "topicId": 2,
    "question": "Qual é a ordenação decrescente CORRETA dos 5 materiais do Slide 44 segundo o seu Módulo de Young (da maior rigidez para a menor rigidez)?",
    "options": [
      "Borracha > Osso > Vidro > Prata > Aço",
      "Aço (20 × 10¹⁰) > Prata (7,5 × 10¹⁰) > Vidro (7 × 10¹⁰) > Osso (2 × 10¹⁰) > Borracha (0,1 a 10 × 10⁷)",
      "Vidro > Borracha > Aço > Prata > Osso",
      "Osso > Aço > Prata > Vidro > Borracha"
    ],
    "correctIndex": 1,
    "explanation": "Comparando os expoentes e coeficientes do Slide 44: Aço (20 × 10¹⁰) > Prata (7,5 × 10¹⁰) > Vidro (7 × 10¹⁰) > Osso (2 × 10¹⁰) > Borracha (10⁷ a 10⁸).",
    "distractorAnalysis": [
      "Está incorreta: Esta é a ordem crescente inversa, da menor para a maior rigidez.",
      "Está incorreta: O aço é muito mais rígido que o vidro e a borracha tem o módulo mais baixo de todos.",
      "Está incorreta: O módulo do osso é dez vezes inferior ao do aço."
    ],
    "nursingApplication": "Exercício clássico de ordenação e comparação de grandezas físicas muito cobrado em frequências."
  },
  {
    "id": 2186,
    "topicId": 2,
    "question": "Por que razão o Vidro, apesar de possuir um elevado Módulo de Young de 7 × 10¹⁰ N/m² (superior ao do osso), não é utilizado para próteses de suporte de carga?",
    "options": [
      "Porque o vidro é líquido à temperatura ambiente e escorreria pelo corpo.",
      "Porque o vidro perde toda a sua massa em contacto com o sangue.",
      "Porque apresenta grande fragilidade mecânica e fratura repentinamente sem aviso ou deformação plástica prévia (Slide 44).",
      "Porque o vidro repele o campo gravitacional terrestre."
    ],
    "correctIndex": 2,
    "explanation": "Conforme salienta o Slide 44, a elevada rigidez do vidro é acompanhada de 'grande fragilidade e fratura sem deformação plástica'. Qualquer impacto dinâmico ou microfissura causa fragmentação catastrófica súbita.",
    "distractorAnalysis": [
      "Está incorreta: O vidro é um sólido rígido à temperatura ambiente de 37 ºC.",
      "Está incorreta: O vidro não se dissolve nem perde massa em contacto com fluidos corporais.",
      "Está incorreta: O vidro é atraído normalmente pela gravidade segundo P = m · g."
    ],
    "nursingApplication": "Distingue os conceitos de rigidez (módulo elástico) e fragilidade estrutural em contexto cirúrgico."
  },
  {
    "id": 2187,
    "topicId": 2,
    "question": "Qual dos materiais da tabela do Slide 44 apresenta a MAIOR capacidade de sofrer grandes deformações elásticas reversíveis sob cargas mecânicas mínimas?",
    "options": [
      "Aço.",
      "Vidro.",
      "Prata.",
      "Borracha (devido ao seu módulo extremamente baixo de 0,1 a 10 × 10⁷ N/m²)."
    ],
    "correctIndex": 3,
    "explanation": "A Borracha situa-se na gama de 10⁷ N/m², sendo mil a dez mil vezes mais flexível que o aço e o osso: pequenas forças produzem alongamentos elásticos dezenas de vezes superiores com reversibilidade integral (Slide 44).",
    "distractorAnalysis": [
      "Está incorreta: O aço exige esforços gigantescos para sofrer deformações microscópicas.",
      "Está incorreta: O vidro quebra de forma frágil antes de deformar extensamente.",
      "Está incorreta: A prata é um metal rígido com módulo de 7,5 × 10¹⁰ N/m²."
    ],
    "nursingApplication": "Justifica a seleção da borracha e silicones médicos para tubagens flexíveis e coxins de conforto."
  },
  {
    "id": 2188,
    "topicId": 2,
    "question": "A Prata (7,5 × 10¹⁰ N/m²) tem um módulo muito semelhante ao do Vidro (7 × 10¹⁰ N/m²). Qual é a diferença fundamental no comportamento mecânico de ambas indicada no Slide 44?",
    "options": [
      "A prata é dúctil sob solicitações mecânicas, enquanto o vidro apresenta grande fragilidade e fratura sem deformação plástica.",
      "A prata comporta-se como água e o vidro como mola de Hooke.",
      "A prata nunca se deforma e o vidro evapora-se no vácuo.",
      "Ambos têm comportamento rigorosamente idêntico em todas as situações."
    ],
    "correctIndex": 0,
    "explanation": "O Slide 44 destaca a ductilidade da prata (capacidade de deformar-se plasticamente sem quebrar de imediato) em oposição direta à fragilidade do vidro, que quebra abruptamente sem aviso.",
    "distractorAnalysis": [
      "Está incorreta: Ambos são materiais sólidos estruturais, não fluidos aquosos.",
      "Está incorreta: A prata é deformável sob forças mecânicas suficientes e o vidro não evapora espontaneamente.",
      "Está incorreta: A ductilidade metálica da prata distingue-a frontalmente da fragilidade do vidro."
    ],
    "nursingApplication": "Diferenciação qualitativa essencial entre ductilidade e fragilidade na resistência dos materiais."
  },
  {
    "id": 2189,
    "topicId": 2,
    "question": "Em que ordem de grandeza de potências de base dez estão expressos os Módulos de Young do Aço, Prata, Vidro e Osso no Slide 44?",
    "options": [
      "Na ordem de 10³ N/m².",
      "Na ordem de 10¹⁰ N/m² (dezenas a centenas de GigaPascals).",
      "Na ordem de 10⁻⁵ N/m².",
      "Na ordem de 10²⁰ N/m²."
    ],
    "correctIndex": 1,
    "explanation": "Os 4 materiais sólidos rígidos do Slide 44 são expressos em potências de dez de 10¹⁰ N/m²: Aço (20 × 10¹⁰), Prata (7,5 × 10¹⁰), Vidro (7 × 10¹⁰) e Osso (2 × 10¹⁰). Apenas a borracha baixa para 10⁷ N/m².",
    "distractorAnalysis": [
      "Está incorreta: 10³ N/m² é a ordem de grandeza de espumas extremamente brandas, não de metais ou osso.",
      "Está incorreta: Potências negativas descrevem grandezas infinitesimais, não módulos de rigidez macroscópicos.",
      "Está incorreta: 10²⁰ N/m² seria uma rigidez astronomicamente impossível em materiais da física terrestre."
    ],
    "nursingApplication": "Fixa a escala numérica exata utilizada nos cálculos e tabelas do docente."
  },
  {
    "id": 2190,
    "topicId": 2,
    "question": "Se aplicarmos a MESMA tensão mecânica axial de σ = 10 MPa a um bloco de Aço e a um bloco de Borracha, o que se observa quanto à deformação relativa sofrida (Slide 44)?",
    "options": [
      "Ambos sofrem rigorosamente a mesma deformação relativa de 1%.",
      "O bloco de aço deforma-se mil vezes mais do que o de borracha.",
      "O bloco de borracha sofre uma deformação relativa ordens de magnitude superior à do bloco de aço (ε = σ / E).",
      "O bloco de borracha permanece inalterado e o aço funde instantaneamente."
    ],
    "correctIndex": 2,
    "explanation": "Como ε = σ / E e o Módulo de Young do aço (20 × 10¹⁰ N/m²) é cerca de 10 000 vezes superior ao da borracha (~10⁷ N/m²), para a mesma tensão a borracha estica milhares de vezes mais que o aço.",
    "distractorAnalysis": [
      "Está incorreta: Deformações iguais exigiriam Módulos de Young idênticos, o que não se verifica.",
      "Está incorreta: Materiais com maior E deformam-se muito menos para a mesma tensão, nunca mais.",
      "Está incorreta: Nenhum dos materiais sofre fusão térmica sob carregamento mecânico de 10 MPa."
    ],
    "nursingApplication": "Demonstração prática da aplicação da fórmula ε = σ / E com os dados da tabela de Paulo Pereira."
  },
  {
    "id": 2191,
    "topicId": 2,
    "question": "Qual é o valor exato do Módulo de Young do Osso cortical indicado na tabela comparativa do Slide 44?",
    "options": [
      "20 × 10¹⁰ N/m²",
      "7,5 × 10¹⁰ N/m²",
      "0,1 × 10⁷ N/m²",
      "2 × 10¹⁰ N/m²"
    ],
    "correctIndex": 3,
    "explanation": "O Slide 44 estabelece expressamente na sua linha dedicada ao tecido ósseo: 'Osso (2 × 10¹⁰ N/m²): Módulo 10 vezes menor que o aço; confere rigidez com extraordinária capacidade elástica de amortecimento'.",
    "distractorAnalysis": [
      "Está incorreta: 20 × 10¹⁰ N/m² é o Módulo do Aço (Slide 44).",
      "Está incorreta: 7,5 × 10¹⁰ N/m² é o Módulo da Prata (Slide 44).",
      "Está incorreta: 0,1 × 10⁷ N/m² é o limite inferior do Módulo da Borracha (Slide 44)."
    ],
    "nursingApplication": "O valor numérico central da biomecânica do tecido ósseo humano nos slides de Biofísica."
  },
  {
    "id": 2192,
    "topicId": 2,
    "question": "Como compara o Slide 44 a rigidez do Osso com a do Aço e que propriedade biomecânica crucial lhe atribui?",
    "options": [
      "'Módulo 10 vezes menor que o aço; confere rigidez com extraordinária capacidade elástica de amortecimento.'",
      "'Módulo 10 vezes maior que o aço; confere fragilidade instantânea com quebra catastrófica.'",
      "'Módulo rigorosamente idêntico ao do aço; comporta-se como metal puro no esqueleto.'",
      "'Módulo nulo; comporta-se como mel ou água em escoamento livre no membro.'"
    ],
    "correctIndex": 0,
    "explanation": "O Slide 44 explicita textualmente a grande vantagem biológica: 'Osso (2 × 10¹⁰ N/m²): Módulo 10 vezes menor que o aço; confere rigidez com extraordinária capacidade elástica de amortecimento'.",
    "distractorAnalysis": [
      "Está incorreta: O osso tem módulo menor que o aço (2 vs 20), não maior.",
      "Está incorreta: O osso é 10 vezes menos rígido que o aço, o que lhe permite ser mais complacente e amortecer choques.",
      "Está incorreta: O osso é um tecido conjuntivo mineralizado sólido com rigidez de 2 × 10¹⁰ N/m²."
    ],
    "nursingApplication": "Conceito primordial que une a física dos materiais à adaptação funcional do esqueleto humano."
  },
  {
    "id": 2193,
    "topicId": 2,
    "question": "Por que razão a 'extraordinária capacidade elástica de amortecimento' do osso cortical é uma vantagem evolutiva vital para o ser humano?",
    "options": [
      "Porque permite ao fémur encolher 50 cm para que a pessoa caiba em camas pequenas.",
      "Porque permite ao esqueleto sofrer microdeformações reversíveis durante a marcha e salto, absorvendo a energia cinética dos impactos sem sofrer fratura.",
      "Porque anula a força da gravidade nos membros inferiores durante a locomoção.",
      "Porque transforma o esqueleto humano num sistema puramente líquido de alta densidade."
    ],
    "correctIndex": 1,
    "explanation": "Se o osso fosse infinitamente rígido, não absorveria energia mecânica elástica e transmitiria impactos destrutivos às articulações e cérebro. A sua capacidade de amortecimento dissipa choques preservando a integridade do corpo.",
    "distractorAnalysis": [
      "Está incorreta: As deformações fisiológicas normais são microscópicas (fracções de milímetro), não encurtamentos de 50 cm.",
      "Está incorreta: O peso do corpo continua a atuar plenamente segundo as leis da gravitação de Newton.",
      "Está incorreta: O esqueleto permanece estruturalmente sólido e resistente."
    ],
    "nursingApplication": "Explica a resistência e durabilidade dos ossos humanos ao longo de décadas de marcha e esforços mecânicos."
  },
  {
    "id": 2194,
    "topicId": 2,
    "question": "Se os ossos humanos tivessem o Módulo de Young do Aço (20 × 10¹⁰ N/m²), qual seria o grave prejuízo biomecânico para o organismo?",
    "options": [
      "Os ossos dobrariam sob o próprio peso do corpo como borracha vulcanizada.",
      "O esqueleto passaria a ser indeformável no vácuo e perderia toda a massa.",
      "O esqueleto seria excessivamente rígido e incapaz de amortecer impactos elásticos, transmitindo choques severos às articulações e sofrendo fadiga por falta de complacência biológica.",
      "A força muscular do bíceps seria reduzida a zero Newtons por incompatibilidade de Hooke."
    ],
    "correctIndex": 2,
    "explanation": "Com a rigidez excessiva do aço (dez vezes superior), a capacidade de amortecimento elástico de choques desapareceria; as forças de impacto da marcha seriam transmitidas brutalmente às cartilagens articulares e coluna, provocando artrose precoce e microfraturas.",
    "distractorAnalysis": [
      "Está incorreta: Dobrar como borracha ocorreria se o osso tivesse o módulo baixo da borracha (10⁷), não o do aço rígido.",
      "Está incorreta: O aço é deformável sob tensões e possui massa inercial substancial.",
      "Está incorreta: A contração muscular é independente da rigidez do implante, embora a alavanca respondesse com excessiva rigidez."
    ],
    "nursingApplication": "Compreensão avançada de biofísica sobre o equilíbrio ótimo entre rigidez mecânica e amortecimento elástico."
  },
  {
    "id": 2195,
    "topicId": 2,
    "question": "Se os ossos humanos tivessem o Módulo de Young da Borracha (0,1 a 10 × 10⁷ N/m²), o que aconteceria ao corpo humano na postura ereta?",
    "options": [
      "Caminharia dez vezes mais depressa do que um veículo em marcha de emergência.",
      "Teria ossos perfeitamente indeformáveis de Euclides.",
      "O esqueleto flutuaria no ar por ausência de forças convergentes de compressão.",
      "O esqueleto colapsaria e dobrar-se-ia sob o próprio peso corporal, sendo incapaz de sustentar a postura bípede ereta e proteger os órgãos internos."
    ],
    "correctIndex": 3,
    "explanation": "Com um módulo de rigidez mil a dez mil vezes menor que o osso natural, as pernas deformar-se-iam extensamente como mangueiras de borracha sob o peso do tronco (σ = E · ε => ε gigantesco), inviabilizando a locomoção bípede.",
    "distractorAnalysis": [
      "Está incorreta: Sem suporte esquelético rígido para fixação das alavancas musculares, a marcha seria impossível.",
      "Está incorreta: Borracha é altamente deformável, o oposto de sólidos indeformáveis.",
      "Está incorreta: A gravidade terrestre atuaria puxando o corpo para o solo com P = m · g."
    ],
    "nursingApplication": "Demonstra que o osso necessita de um módulo de rigidez elevado (2 × 10¹⁰ N/m²) para fornecer suporte mecânico estável."
  },
  {
    "id": 2196,
    "topicId": 2,
    "question": "Comparando os valores do Slide 44, como se situa o Módulo de Young do Osso (2 × 10¹⁰ N/m²) relativamente ao do Vidro (7 × 10¹⁰ N/m²) e da Prata (7,5 × 10¹⁰ N/m²)?",
    "options": [
      "É cerca de 3,5 vezes menor do que o do vidro e da prata, conferindo-lhe maior flexibilidade e complacência elástica de amortecimento.",
      "É cem vezes superior ao do vidro e da prata combinados.",
      "É rigorosamente idêntico ao do vidro e da prata sem qualquer variação.",
      "É inferior ao da borracha vulcanizada de baixa rigidez."
    ],
    "correctIndex": 0,
    "explanation": "Dividindo 7 × 10¹⁰ por 2 × 10¹⁰ obtém-se exatamente 3,5. O osso é cerca de três vezes e meia menos rígido que o vidro e a prata, o que lhe confere a flexibilidade necessária para amortecer choques sem fratura frágil.",
    "distractorAnalysis": [
      "Está incorreta: O osso tem módulo menor (2 vs 7 e 7,5), nunca cem vezes superior.",
      "Está incorreta: Os valores são distintos: 2 × 10¹⁰ vs 7 × 10¹⁰ e 7,5 × 10¹⁰ N/m².",
      "Está incorreta: O módulo do osso (10¹⁰) é centenas de vezes maior que o da borracha (10⁷)."
    ],
    "nursingApplication": "Consolida a escala comparativa quantitativa entre biomateriais naturais e metais/cerâmicos."
  },
  {
    "id": 2197,
    "topicId": 2,
    "question": "Nos cuidados de enfermagem e reabilitação motora pós-fratura, compreender o Módulo de Young do osso ajuda a fundamentar cientificamente:",
    "options": [
      "A necessidade de repouso absoluto no leito sem qualquer carga durante 10 anos seguidos.",
      "A importância da carga mecânica gradual controlada e mobilização precoce, que gera microdeformações elásticas necessárias para estimular a consolidação e remodelação óssea.",
      "A proibição definitiva de o doente voltar a colocar os pés no chão da enfermaria.",
      "A substituição de todos os ossos do corpo por tubos ocos de vidro frágil."
    ],
    "correctIndex": 1,
    "explanation": "O tecido ósseo vivo responde a microdeformações elásticas mecânicas diárias (Lei de Wolff): a aplicação de carga gradual estimula os osteoblastos e a deposição mineral orientada, reforçando a rigidez elástica do calo ósseo.",
    "distractorAnalysis": [
      "Está incorreta: Imobilização prolongada de anos causa osteoporose severa por desuso mecânico (perda de densidade mineral).",
      "Está incorreta: A marcha precoce assistida é a regra de ouro na reabilitação moderna de fraturas.",
      "Está incorreta: O vidro é frágil e perigoso, nunca sendo usado para substituir ossos inteiros."
    ],
    "nursingApplication": "Justificação biofísica direta dos planos de reabilitação e marcha assistida em enfermagem ortopédica."
  },
  {
    "id": 2198,
    "topicId": 2,
    "question": "Sob uma tensão fisiológica de compressão de σ = 20 MPa (20 × 10⁶ N/m²), qual é a deformação relativa ε sofrida por um fémur com Módulo de Young E = 2 × 10¹⁰ N/m²?",
    "options": [
      "ε = 10% (0,10)",
      "ε = 0,00001% (10⁻⁷)",
      "ε = 0,1% (0,001 ou 1 × 10⁻³)",
      "ε = 50% (metade do comprimento do fémur)"
    ],
    "correctIndex": 2,
    "explanation": "Aplicando ε = σ / E: ε = (20 × 10⁶ N/m²) / (2 × 10¹⁰ N/m²) = 10 × 10⁻⁴ = 0,001 = 0,1%. O osso encurta apenas uma milésima parte do seu comprimento inicial (ex.: 0,4 mm num fémur de 40 cm), garantindo rigidez com amortecimento.",
    "distractorAnalysis": [
      "Está incorreta: 10% seria uma deformação colossal (4 cm num fémur), que provocaria fratura imediata.",
      "Está incorreta: 10⁻⁷ é uma ordem de grandeza excessivamente pequena incompatível com os dados do problema.",
      "Está incorreta: 50% de deformação ocorreria apenas em materiais extremamente flexíveis como borracha mole."
    ],
    "nursingApplication": "Cálculo biomecânico real demonstrando a magnitude das microdeformações fisiológicas do esqueleto durante a marcha."
  },
  {
    "id": 2199,
    "topicId": 2,
    "question": "Qual é a síntese biomimética fundamental do tecido ósseo cortical humano expressa nos Slides 43 e 44?",
    "options": [
      "É um material indeformável de Euclides com módulo infinito.",
      "É um fluido viscoso de escoamento livre com Módulo de Young nulo.",
      "É um sólido frágil que quebra sem aviso sob qualquer pressão leve.",
      "Une de forma notável elevada rigidez de sustentação estrutural com extraordinária capacidade elástica de amortecimento de impactos (E = 2 × 10¹⁰ N/m²)."
    ],
    "correctIndex": 3,
    "explanation": "O Slide 44 conclui com a síntese de excelência: 'Osso (2 × 10¹⁰ N/m²): Módulo 10 vezes menor que o aço; confere rigidez com extraordinária capacidade elástica de amortecimento'.",
    "distractorAnalysis": [
      "Está incorreta: O osso deforma-se reversivelmente no regime elástico fisiológico, não sendo indeformável.",
      "Está incorreta: O osso cortical é sólido mineralizado e não um fluido viscoso como o mel ou a água.",
      "Está incorreta: O osso é tenaz e amortece impactos, ao contrário de materiais frágeis como o vidro."
    ],
    "nursingApplication": "Síntese integradora do comportamento mecânico do tecido ósseo para os estudantes de enfermagem."
  },
  {
    "id": 2200,
    "topicId": 2,
    "question": "Ao concluir o estudo da Elasticidade dos Corpos e Resistência dos Materiais (Tópico 2), como se integra o modelo biofísico do aparelho locomotor humano?",
    "options": [
      "Integra comportamento viscoelástico (amortecimento e histerese), resistência combinada às 5 deformações (compressão, tração, flexão, cisalhamento e torção) e resposta elástica de sustentação descrita pela Lei de Hooke (σ = E · ε com E = 2 × 10¹⁰ N/m²).",
      "O esqueleto humano é modelado como uma barra de vidro frágil em rotação perpétua de 80 km/h.",
      "Os ossos humanos são modelados exclusivamente como molas metálicas perfeitas sem qualquer atrito ou amortecimento viscoso.",
      "A biofísica conclui que as leis de Newton e Hooke deixam de se aplicar assim que o utente entra no hospital."
    ],
    "correctIndex": 0,
    "explanation": "A grande visão unificada do Tópico 2: os ossos e músculos são viscoelásticos (Slide 19); suportam esforços axiais e tangenciais das 5 deformações básicas (Slides 30-34); e regem-se pela Lei de Hooke generalizada (Slide 43), combinando sustentação firme com amortecimento elástico protetor.",
    "distractorAnalysis": [
      "Está incorreta: Modelar o osso como vidro ignoraria a sua flexibilidade e tenacidade orgânica elástica.",
      "Está incorreta: Ignorar a viscoelasticidade e histerese ignoraria o amortecimento de choques nos tecidos biológicos vivos.",
      "Está incorreta: As leis da física governam universalmente todos os organismos biológicos e procedimentos de cuidados de saúde."
    ],
    "nursingApplication": "A grande síntese conclusiva do Tópico 2, preparando os alunos com sólidas bases biofísicas para a prática clínica e futuros tópicos do curso."
  }
];
