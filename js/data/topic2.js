/**
 * BANCO DE QUESTÕES CERTIFICADAS - TÓPICO 2
 * Elasticidade dos Corpos e Resistência dos Materiais
 * Alinhado estritamente com os conceitos de Biofísica (Prof. Paulo Pereira)
 * Perguntas autónomas e focadas em princípios físicos e biomecânicos
 * Total de Questões: 200 (IDs 2201 a 2400)
 */

const TOPIC_2_QUESTIONS = [
  {
    "id": 2201,
    "topicId": 2,
    "question": "Qual é o objeto de estudo da reologia?",
    "options": [
      "A composição química do sangue e a concentração de hemoglobina.",
      "A propagação de ondas sonoras nos tecidos moles.",
      "A reação dos corpos à ação de forças deformadoras.",
      "A medida da energia cinética de um corpo em movimento retilíneo uniforme."
    ],
    "correctIndex": 2,
    "explanation": "A reologia estuda as reações dos corpos quando sobre eles atuam forças deformadoras, classificando-os segundo o seu comportamento mecânico.",
    "distractorAnalysis": [
      "Está incorreta: a composição química do sangue é estudada na bioquímica e na hematologia, não no comportamento mecânico dos corpos.",
      "Está incorreta: a propagação de ondas sonoras é o objeto da acústica, que não analisa a deformação dos corpos.",
      "Está incorreta: a energia cinética de um corpo em MRU descreve o movimento, e não a deformação de um corpo sob forças deformadoras."
    ],
    "nursingApplication": "Permite compreender por que razão os tecidos do corpo respondem de forma diferente quando são comprimidos, esticados ou dobrados durante a mobilização de um doente."
  },
  {
    "id": 2202,
    "topicId": 2,
    "question": "Qual é a propriedade que permite a um corpo recuperar a sua forma original depois de cessarem as forças deformadoras?",
    "options": [
      "Elasticidade",
      "Plasticidade",
      "Viscosidade",
      "Rigidez mecânica"
    ],
    "correctIndex": 0,
    "explanation": "A elasticidade é a propriedade responsável pelo retorno à forma original de um corpo, após supressão das forças deformadoras.",
    "distractorAnalysis": [
      "Está incorreta: a plasticidade é a capacidade de manter a deformação após a supressão das forças, o oposto da recuperação da forma.",
      "Está incorreta: a viscosidade é a resistência ao escoamento, depende do tempo e não garante a restituição da forma original.",
      "Está incorreta: a rigidez mede a resistência à deformação, mas não indica se o corpo recupera ou não a forma inicial."
    ],
    "nursingApplication": "Explica porque é que a pele de um doente desidratado, quando pinçada, pode demorar mais tempo a recuperar do que a pele de um doente bem hidratado."
  },
  {
    "id": 2203,
    "topicId": 2,
    "question": "Qual das afirmações sobre os sólidos indeformáveis (sólidos de Euclides) está correta?",
    "options": [
      "São modelos teóricos em que a distância entre partículas não se altera, qualquer que seja a força aplicada.",
      "Deformam-se de forma proporcional à tensão e recuperam integralmente a forma após a remoção da força, como uma mola de aço.",
      "Deformam-se apenas a partir de um limiar de tensão e mantêm a deformação máxima atingida.",
      "Deformam-se de forma dependente do tempo e não recuperam a forma original."
    ],
    "correctIndex": 0,
    "explanation": "Os sólidos indeformáveis são modelos teóricos que nunca sofrem deformação: a distância entre as partículas mantém-se constante sob qualquer força.",
    "distractorAnalysis": [
      "Está incorreta: esta descrição corresponde ao sólido de Hooke, que é deformável e restitui a forma dentro do limite de proporcionalidade.",
      "Está incorreta: esta descrição corresponde aos corpos plásticos, que só acusam deformação a partir de um limiar de tensão.",
      "Está incorreta: esta descrição corresponde aos corpos viscosos, cuja deformação depende do tempo e não é restituída."
    ],
    "nursingApplication": "Os sólidos indeformáveis são uma idealização útil para cálculos simplificados, mas nenhum tecido vivo se comporta assim, pelo que a deformação tem de ser considerada na avaliação de ossos e músculos."
  },
  {
    "id": 2204,
    "topicId": 2,
    "question": "Qual dos seguintes corpos corresponde ao modelo de sólido de Hooke, dentro da zona de proporcionalidade?",
    "options": [
      "Massa de pão, sob compressão",
      "Plasticina",
      "Mola metálica",
      "Mel"
    ],
    "correctIndex": 2,
    "explanation": "O sólido de Hooke (como a mola) tem deformação proporcional à intensidade da tensão, até ao limite de proporcionalidade, e restitui integralmente a forma original quando a tensão é removida.",
    "distractorAnalysis": [
      "Está incorreta: a massa de pão combina comportamento elástico, plástico e viscoso, não sendo um sólido de Hooke.",
      "Está incorreta: a plasticina só se deforma a partir de um limiar de tensão e não recupera a forma inicial.",
      "Está incorreta: o mel é um corpo viscoso, que se deforma com o tempo e não restitui a forma após cessar a tensão."
    ],
    "nursingApplication": "Os modelos de sólido de Hooke servem para descrever a zona aproximadamente linear da resposta elástica de alguns tecidos, como o tendão, que surge depois de uma zona inicial não linear."
  },
  {
    "id": 2205,
    "topicId": 2,
    "question": "Um corpo real que recupera totalmente a sua forma original após cessar a força, enquanto a força não ultrapassa o limite elástico, é classificado como:",
    "options": [
      "Imperfeitamente elástico",
      "Inelástico",
      "Perfeitamente elástico",
      "Plástico"
    ],
    "correctIndex": 2,
    "explanation": "Quanto ao grau de elasticidade, um corpo perfeitamente elástico recupera integralmente a forma original enquanto a força não ultrapassa o limite elástico.",
    "distractorAnalysis": [
      "Está incorreta: um corpo imperfeitamente elástico recupera apenas parcialmente a forma original, ficando com alguma deformação residual.",
      "Está incorreta: um corpo inelástico não recupera qualquer parte da deformação depois de removida a força.",
      "Está incorreta: um corpo plástico só deforma a partir de um limiar de tensão e mantém a deformação, não recuperando a forma."
    ],
    "nursingApplication": "Ajuda a distinguir os tecidos que recuperam a forma após uma carga leve dos que ficam deformados quando a carga é excessiva, algo relevante na avaliação de lesões musculares e tendinosas."
  },
  {
    "id": 2206,
    "topicId": 2,
    "question": "Uma plasticina é deformada com a mão e fica com a forma nova. Qual é a característica que a distingue de uma mola?",
    "options": [
      "Deforma-se de forma proporcional à força e recupera a forma original quando a força cessa.",
      "Só se deforma a partir de um limiar de tensão e mantém a deformação máxima atingida.",
      "Deforma-se sob qualquer força, por menor que seja, e recupera de imediato.",
      "Deforma-se de forma dependente do tempo e não recupera a forma."
    ],
    "correctIndex": 1,
    "explanation": "Os corpos plásticos só acusam deformação a partir de um determinado valor de tensão; ultrapassado esse limiar, mantêm a deformação máxima que atingiram.",
    "distractorAnalysis": [
      "Está incorreta: esta descrição corresponde à mola, que segue a lei de Hooke e recupera a forma original, comportamento que a plasticina não tem.",
      "Está incorreta: deformar-se sob qualquer força, com recuperação imediata, não é o comportamento de um corpo plástico, mas sim de um corpo elástico ideal.",
      "Está incorreta: a dependência do tempo e a ausência de recuperação descrevem os corpos viscosos, e não o limiar de tensão dos plásticos."
    ],
    "nursingApplication": "As talas termoplásticas, moldadas ao membro do doente depois de aquecidas, conservam a nova forma quando arrefecem, à semelhança de um corpo plástico."
  },
  {
    "id": 2207,
    "topicId": 2,
    "question": "Qual dos materiais seguintes é o exemplo típico de corpo viscoso?",
    "options": [
      "Esponja",
      "Mel",
      "Cartilagem",
      "Mola de aço"
    ],
    "correctIndex": 1,
    "explanation": "O mel é um corpo viscoso: a sua deformação é proporcional à tensão e ao tempo de aplicação, e não recupera a forma original quando a tensão cessa.",
    "distractorAnalysis": [
      "Está incorreta: a esponja é um corpo viscoelástico, pois recupera a forma com algum atraso após a deformação.",
      "Está incorreta: a cartilagem é viscoelástica, combinando armazenamento de energia elástica com dissipação viscosa.",
      "Está incorreta: a mola de aço é um sólido de Hooke, que recupera integralmente a forma e não tem comportamento viscoso."
    ],
    "nursingApplication": "Os líquidos viscosos, como alguns fluidos corporais e soluções espessadas usadas em doentes com disfagia, têm um escoamento que depende da tensão e do tempo."
  },
  {
    "id": 2208,
    "topicId": 2,
    "question": "Ao aplicar uma carga constante sobre uma esponja, esta deforma-se progressivamente e, ao retirar a carga, recupera a forma apenas lentamente. Que tipo de corpo melhor descreve este comportamento?",
    "options": [
      "Sólido de Euclides, modelo indeformável",
      "Corpo plástico",
      "Corpo viscoelástico",
      "Corpo viscoso"
    ],
    "correctIndex": 2,
    "explanation": "Nos corpos viscoelásticos a deformação depende simultaneamente da tensão e do tempo, e a recuperação é retardada: a esponja tem este comportamento.",
    "distractorAnalysis": [
      "Está incorreta: um sólido indeformável não se deforma, o que contraria a deformação observada na esponja.",
      "Está incorreta: um corpo plástico não recupera qualquer parte da deformação após a remoção da carga.",
      "Está incorreta: um corpo viscoso não recupera a forma inicial, enquanto a esponja recupera, ainda que com atraso."
    ],
    "nursingApplication": "A recuperação retardada dos tecidos moles explica porque é que a marca de uma meia ou de uma fralda apertada pode demorar algum tempo a desaparecer na pele."
  },
  {
    "id": 2209,
    "topicId": 2,
    "question": "Uma massa de pão comporta-se como um sólido elástico quando é ligeiramente pressionada, mas, se for amassada com força suficiente, passa a fluir e fica com uma forma permanente. Qual é o modelo reológico mais adequado?",
    "options": [
      "Corpo plastoviscoelástico",
      "Sólido de Hooke, dentro da zona de proporcionalidade",
      "Corpo viscoso, que flui sob qualquer tensão tangencial",
      "Sólido indeformável, de distância interpartículas constante"
    ],
    "correctIndex": 0,
    "explanation": "O corpo plastoviscoelástico comporta-se como elástico sob tensões pequenas e, acima de um valor mínimo de tensão, flui com deformação permanente, como a massa de pão.",
    "distractorAnalysis": [
      "Está incorreta: o sólido de Hooke é elástico na sua zona de proporcionalidade e não flui quando é amassado.",
      "Está incorreta: o corpo viscoso flui sob qualquer tensão, não existindo um comportamento elástico para pequenas tensões.",
      "Está incorreta: um sólido indeformável nunca se deforma, o que contradiz a deformação permanente observada na massa."
    ],
    "nursingApplication": "Um líquido espessado para disfagia com consistência de pudim mantém a forma na colher, mas flui quando a língua o pressiona com força suficiente, um comportamento com tensão mínima de escoamento."
  },
  {
    "id": 2210,
    "topicId": 2,
    "question": "Qual das afirmações sobre um corpo viscoelástico, como a cartilagem, é verdadeira?",
    "options": [
      "A deformação é independente do tempo de aplicação da força.",
      "A deformação depende simultaneamente da tensão e do tempo, com recuperação retardada.",
      "Não armazena qualquer energia elástica durante a deformação.",
      "Recupera a forma original de imediato, como uma mola ideal, sem dissipar energia nem sofrer histerese."
    ],
    "correctIndex": 1,
    "explanation": "Nos corpos viscoelásticos a deformação é função simultânea da tensão e do tempo; armazenam energia, mas dissipam uma fração dela durante a deformação, e a recuperação é retardada.",
    "distractorAnalysis": [
      "Está incorreta: a deformação de um corpo viscoelástico depende do tempo de aplicação; a independência temporal é característica do sólido de Hooke.",
      "Está incorreta: um corpo viscoelástico armazena energia elástica, embora dissipe uma parte durante a deformação.",
      "Está incorreta: a recuperação imediata e sem dissipação é a idealização do sólido de Hooke, não do corpo viscoelástico."
    ],
    "nursingApplication": "A cartilagem das articulações tem comportamento viscoelástico, o que explica porque é que a sua deformação aumenta com a duração da carga e recupera depois do repouso."
  },
  {
    "id": 2211,
    "topicId": 2,
    "question": "Porque é que os ossos e os músculos, classificados como corpos viscoelásticos, dissipam energia quando são deformados e libertados em ciclos de carga?",
    "options": [
      "Porque seguem a lei de Hooke sem limite, recuperando integralmente a forma após cada ciclo e sem perda de energia.",
      "Porque são corpos indeformáveis, e a energia se transforma em calor sem haver deformação.",
      "Porque são corpos viscosos, e a energia fica permanentemente retida no interior do tecido.",
      "Porque a deformação depende da tensão e do tempo, e parte da energia é dissipada por histerese."
    ],
    "correctIndex": 3,
    "explanation": "A dissipação de energia por histerese é característica dos corpos viscoelásticos: a energia gasta na deformação não é toda devolvida quando a carga é removida.",
    "distractorAnalysis": [
      "Está incorreta: a lei de Hooke sem limite não descreve tecidos reais, e um sólido de Hooke ideal não dissiparia energia.",
      "Está incorreta: um corpo indeformável não sofre deformação, logo não há energia dissipada por deformação.",
      "Está incorreta: os corpos viscosos não armazenam energia elástica, e a retenção permanente de energia não explica a histerese."
    ],
    "nursingApplication": "A histerese da cartilagem e dos discos intervertebrais ajuda a amortecer os impactos repetidos da marcha, por exemplo ao apoiar o calcanhar no chão."
  },
  {
    "id": 2212,
    "topicId": 2,
    "question": "Dois tecidos sofrem a mesma tensão mecânica. O tecido A tem módulo de Young maior do que o tecido B. Qual é a afirmação correta?",
    "options": [
      "O tecido A sofre maior deformação relativa do que o tecido B, por ser o mais deformável.",
      "Os dois tecidos sofrem a mesma deformação relativa.",
      "O tecido A sofre deformação relativa nula.",
      "O tecido A sofre menor deformação relativa do que o tecido B."
    ],
    "correctIndex": 3,
    "explanation": "Na zona de proporcionalidade, σ = E·ε, ou seja, ε = σ/E. Para a mesma tensão, quanto maior o módulo de Young, menor a deformação relativa.",
    "distractorAnalysis": [
      "Está incorreta: com a mesma tensão, ε = σ/E; um módulo maior dá uma deformação menor, e não maior.",
      "Está incorreta: o módulo de Young determina a deformação para uma dada tensão, pelo que tecidos com E diferente deformam-se de forma diferente.",
      "Está incorreta: a deformação só seria nula com um módulo infinito, o que não corresponde a nenhum tecido real."
    ],
    "nursingApplication": "Um tecido cicatricial mais rígido do que a pele vizinha deforma-se menos sob a mesma tensão, o que deve ser considerado na mobilização da zona cicatrizada."
  },
  {
    "id": 2213,
    "topicId": 2,
    "question": "Qual é a unidade do módulo de Young no Sistema Internacional?",
    "options": [
      "m",
      "N/m",
      "Pa",
      "Adimensional"
    ],
    "correctIndex": 2,
    "explanation": "O módulo de Young é a constante de proporcionalidade entre tensão e deformação relativa. Como a tensão se mede em pascal (Pa = N/m²) e a deformação relativa não tem unidades, E expressa-se em Pa.",
    "distractorAnalysis": [
      "Está incorreta: o metro é uma unidade de comprimento, enquanto o módulo de Young tem as unidades de uma tensão.",
      "Está incorreta: N/m é a unidade da constante elástica k de uma mola, e não do módulo de Young.",
      "Está incorreta: a deformação relativa é adimensional, mas o módulo de Young é a razão entre a tensão e essa deformação, logo tem unidades."
    ],
    "nursingApplication": "Os valores do módulo de Young dos tecidos são expressos em pascal, o que permite comparar a rigidez de materiais biológicos e não biológicos, como as próteses."
  },
  {
    "id": 2214,
    "topicId": 2,
    "question": "Porque é relevante para a enfermagem conhecer a elasticidade das artérias?",
    "options": [
      "Porque as artérias só são elásticas na infância, deixando de o ser na idade adulta.",
      "Porque a elasticidade arterial permite amortecer a pulsação do sangue ao longo do ciclo cardíaco.",
      "Porque a elasticidade arterial aumenta o débito cardíaco, isto é, o volume de sangue bombeado por minuto.",
      "Porque a elasticidade arterial substitui a função do coração no bombeamento do sangue em cada batimento."
    ],
    "correctIndex": 1,
    "explanation": "As artérias são elásticas: distendem-se com a sístole e recuperam na diástole, o que amortece a pulsação gerada pelo coração.",
    "distractorAnalysis": [
      "Está incorreta: as artérias mantêm a elasticidade na idade adulta, embora esta diminua com o envelhecimento.",
      "Está incorreta: o débito cardíaco é o produto da frequência cardíaca pelo volume de ejeção; a elasticidade arterial não o aumenta, mas amortece a pulsação e torna o fluxo mais contínuo.",
      "Está incorreta: a elasticidade arterial não substitui o coração; o bombeamento do sangue é gerado pelo miocárdio."
    ],
    "nursingApplication": "A perda de elasticidade das artérias com a idade faz aumentar a pressão de pulso, algo que o enfermeiro deve ter em conta na interpretação da tensão arterial de um idoso."
  },
  {
    "id": 2215,
    "topicId": 2,
    "question": "Quais são os cinco tipos básicos de deformação mecânica de um sólido?",
    "options": [
      "Tração, compressão, dilatação, fusão e sublimação.",
      "Elástica, plástica, viscosa, mista e nula.",
      "Longitudinal, transversal, radial, axial e tangencial.",
      "Tração, compressão, cisalhamento, flexão e torção."
    ],
    "correctIndex": 3,
    "explanation": "Os cinco tipos de deformação estudados são tração, compressão, cisalhamento, flexão e torção, cada um associado a um tipo de força ou de momento aplicado ao sólido.",
    "distractorAnalysis": [
      "Está incorreta: dilatação, fusão e sublimação são fenómenos térmicos ou mudanças de estado, e não tipos de deformação mecânica.",
      "Está incorreta: elástica, plástica, viscosa e mista são tipos de comportamento reológico, e não modos de deformação geométrica.",
      "Está incorreta: estas são designações de direções ou de eixos, e não descrevem os cinco modos de deformação estudados."
    ],
    "nursingApplication": "Reconhecer o tipo de deformação a que um osso ou um músculo está sujeito ajuda a identificar o mecanismo de uma lesão, como uma fratura por torção ou por flexão."
  },
  {
    "id": 2216,
    "topicId": 2,
    "question": "Uma camada de mel entre duas placas é sujeita a uma tensão de cisalhamento constante. O que acontece à deformação ao longo do tempo?",
    "options": [
      "Mantém-se constante desde o início, pois a tensão não varia.",
      "Diminui até anular-se, com recuperação completa da forma.",
      "Cresce continuamente enquanto a tensão atuar, sem recuperar a forma inicial.",
      "Oscila em torno de um valor fixo, como uma mola em vibração livre, sem qualquer amortecimento apreciável."
    ],
    "correctIndex": 2,
    "explanation": "Num corpo viscoso a deformação cresce com o tempo enquanto atuar a tensão, e não é restituída quando a tensão cessa.",
    "distractorAnalysis": [
      "Está incorreta: num corpo viscoso sob tensão constante é a velocidade de deformação que se mantém; a deformação continua a crescer com o tempo de aplicação.",
      "Está incorreta: a recuperação completa corresponde a um sólido elástico, e não a um fluido viscoso.",
      "Está incorreta: a oscilação em torno de um valor fixo é típica de um oscilador elástico, e não de um corpo viscoso."
    ],
    "nursingApplication": "Ao preparar um líquido espessado até à consistência de mel para um doente com disfagia, o enfermeiro tem em conta que o fluido continua a escoar sob a ação do seu peso, apenas mais devagar do que a água, o que dá mais tempo para a deglutição."
  },
  {
    "id": 2217,
    "topicId": 2,
    "question": "Qual é a diferença essencial entre um corpo plástico e um corpo viscoso?",
    "options": [
      "O plástico deforma-se apenas com o tempo; o viscoso só deforma acima de um limiar de tensão.",
      "O plástico só deforma acima de um limiar de tensão; o viscoso deforma-se sob qualquer tensão.",
      "Ambos recuperam integralmente a forma original após a remoção da tensão, sem deformação residual.",
      "Ambos se deformam de forma proporcional à tensão, sem dependência do tempo."
    ],
    "correctIndex": 1,
    "explanation": "O corpo plástico só acusa deformação a partir de um limiar de tensão, enquanto o corpo viscoso se deforma sob qualquer tensão tangencial não nula, com dependência do tempo.",
    "distractorAnalysis": [
      "Está incorreta: inverte as duas definições, pois o corpo viscoso não tem limiar de tensão e o plástico não depende do tempo.",
      "Está incorreta: nenhum dos dois recupera a forma original quando a tensão é removida; esse comportamento é o dos corpos elásticos.",
      "Está incorreta: a proporcionalidade simples sem dependência do tempo é a do sólido de Hooke, que não se aplica a nenhum dos dois."
    ],
    "nursingApplication": "Explica porque é que um xarope escorre da colher apenas sob o seu próprio peso, enquanto a argila só muda de forma quando se aplica uma força suficiente."
  },
  {
    "id": 2218,
    "topicId": 2,
    "question": "Porque é que os sólidos indeformáveis são úteis como modelos teóricos, mesmo não existindo na natureza?",
    "options": [
      "Porque reproduzem exatamente o comportamento de todos os tecidos vivos, incluindo ossos, músculos e artérias.",
      "Porque anulam o efeito das forças externas sobre o corpo.",
      "Porque simplificam o cálculo ao desprezar a deformação, válida quando esta é muito pequena.",
      "Porque são o único modelo que descreve a histerese."
    ],
    "correctIndex": 2,
    "explanation": "Os sólidos indeformáveis são uma idealização: quando a deformação é muito pequena, desprezá-la simplifica os cálculos sem alterar significativamente o resultado.",
    "distractorAnalysis": [
      "Está incorreta: nenhum tecido vivo é indeformável, pelo que o modelo não reproduz o seu comportamento real.",
      "Está incorreta: um corpo indeformável não anula as forças externas; as forças continuam a atuar, apenas não produzem deformação.",
      "Está incorreta: a histerese é característica dos corpos viscoelásticos, que são deformáveis, e um modelo indeformável não a descreve."
    ],
    "nursingApplication": "Em cálculos rápidos de carga sobre um osso ou um dispositivo, podem desprezar-se pequenas deformações, mas não se deve aplicar o mesmo raciocínio a tecidos moles sob pressão prolongada."
  },
  {
    "id": 2219,
    "topicId": 2,
    "question": "Qual das afirmações sobre um corpo plastoviscoelástico é correta?",
    "options": [
      "Comporta-se como elástico acima de um valor mínimo de tensão, fluindo abaixo desse valor, sem deformação permanente.",
      "Comporta-se como elástico abaixo de um valor mínimo de tensão e flui com deformação permanente acima dele.",
      "Flui sob qualquer tensão, por menor que seja, pois não tem tensão mínima.",
      "Nunca apresenta deformação permanente, mesmo com tensões elevadas."
    ],
    "correctIndex": 1,
    "explanation": "O corpo plastoviscoelástico combina propriedades elásticas, viscosas e plásticas: abaixo de uma tensão mínima comporta-se como elástico e, acima dela, flui e fica com deformação permanente dependente do tempo.",
    "distractorAnalysis": [
      "Está incorreta: inverte os dois regimes; abaixo da tensão mínima o corpo comporta-se como elástico e só acima dela flui, ficando com deformação permanente.",
      "Está incorreta: a ausência de tensão mínima é característica dos corpos viscosos, e não dos plastoviscoelásticos.",
      "Está incorreta: acima da tensão mínima o corpo plastoviscoelástico flui e fica com deformação permanente, como a massa de pão amassada."
    ],
    "nursingApplication": "Uma pasta de barreira de óxido de zinco não escorre da pele nem da bisnaga, mas sai e espalha-se quando a pressão aplicada ultrapassa a tensão mínima de escoamento."
  },
  {
    "id": 2220,
    "topicId": 2,
    "question": "Qual é a relação correta entre tensão mecânica (σ), deformação relativa (ε) e módulo de Young (E), na zona de proporcionalidade?",
    "options": [
      "σ = E · ε",
      "σ = E / ε",
      "ε = E · σ",
      "σ = ε / E"
    ],
    "correctIndex": 0,
    "explanation": "Na zona de proporcionalidade a tensão é proporcional à deformação relativa, com E como constante de proporcionalidade: σ = E · ε.",
    "distractorAnalysis": [
      "Está incorreta: o módulo de Young é E = σ / ε, pelo que a tensão é o produto E · ε; dividir E por ε não dá a tensão.",
      "Está incorreta: a deformação relativa é ε = σ / E; multiplicar E por σ inverte a relação e daria uma grandeza em Pa², e não uma deformação sem unidades.",
      "Está incorreta: a tensão não é o quociente de ε por E, mas sim o produto de E pela deformação relativa."
    ],
    "nursingApplication": "Permite estimar a tensão num tendão ou num osso a partir da deformação medida, o que é uma base para compreender as cargas suportadas pelo aparelho locomotor."
  },
  {
    "id": 2221,
    "topicId": 2,
    "question": "Uma mola com constante elástica k = 200 N/m é alongada por uma força de 10 N, dentro do limite de proporcionalidade. Qual é o alongamento da mola?",
    "options": [
      "2,0 × 10³ m",
      "20 m",
      "0,05 m",
      "5 m"
    ],
    "correctIndex": 2,
    "explanation": "Pela lei de Hooke, F = k · x, logo x = F/k = 10 N / 200 N/m = 0,05 m (5 cm).",
    "distractorAnalysis": [
      "Está incorreta: multiplicar F por k dá 2000, mas a lei de Hooke isola x dividindo F por k.",
      "Está incorreta: inverte a divisão, calculando k/F = 20, que não é uma deformação.",
      "Está incorreta: o alongamento é 0,05 m, ou seja, 5 cm; escrever 5 m resulta de dar o valor em centímetros com a unidade metro."
    ],
    "nursingApplication": "Para a mesma força, uma mola mais rígida alonga menos, o que é a base de dinamómetros usados para medir forças em reabilitação."
  },
  {
    "id": 2222,
    "topicId": 2,
    "question": "Uma mola de constante elástica 50 N/m sofre um alongamento de 0,20 m, dentro do limite de proporcionalidade. Qual é a força elástica que a mola exerce?",
    "options": [
      "250 N",
      "0,2 N",
      "0,004 N",
      "10 N"
    ],
    "correctIndex": 3,
    "explanation": "F = k · x = 50 N/m × 0,20 m = 10 N.",
    "distractorAnalysis": [
      "Está incorreta: dividir k por x dá 250, mas a força elástica é o produto de k pelo alongamento.",
      "Está incorreta: esquece a constante elástica e usa apenas o alongamento, o que não respeita a lei de Hooke.",
      "Está incorreta: dividir x por k dá 0,004, em vez de multiplicar, como a lei de Hooke exige."
    ],
    "nursingApplication": "A resistência oferecida por um exercitador de mola usado em reabilitação da mão depende da constante da mola e do alongamento que o doente lhe impõe."
  },
  {
    "id": 2223,
    "topicId": 2,
    "question": "Uma barra de secção transversal de 2,5 cm² é tracionada por uma força de 500 N, dentro do limite de proporcionalidade. Qual é a tensão mecânica na barra?",
    "options": [
      "2,0 × 10⁶ Pa",
      "1,25 × 10⁻¹ Pa",
      "2,0 × 10² Pa",
      "2,0 × 10⁴ Pa"
    ],
    "correctIndex": 0,
    "explanation": "σ = F/S, com S = 2,5 cm² = 2,5 × 10⁻⁴ m². Logo σ = 500 / (2,5 × 10⁻⁴) = 2,0 × 10⁶ Pa.",
    "distractorAnalysis": [
      "Está incorreta: multiplica a força pela área em vez de dividir, o que dá 0,125 Pa.",
      "Está incorreta: usa a área em cm² sem a converter para m², o que dá 200 Pa.",
      "Está incorreta: converte 1 cm² como 10⁻² m², esquecendo que a área é uma grandeza quadrática, o que dá 2,0 × 10⁴ Pa."
    ],
    "nursingApplication": "Compreender a tensão, e não apenas a força, explica porque é que a mesma carga pode ser muito mais perigosa para um osso com secção reduzida."
  },
  {
    "id": 2224,
    "topicId": 2,
    "question": "Um segmento de tendão com 10 cm de comprimento inicial alonga 2 mm sob carga. Qual é a deformação relativa do tendão?",
    "options": [
      "0,2",
      "0,002",
      "0,02",
      "50"
    ],
    "correctIndex": 2,
    "explanation": "A deformação relativa é ΔL/L<sub>0</sub>. Com ΔL = 2 mm = 0,002 m e L<sub>0</sub> = 10 cm = 0,10 m, obtém-se ε = 0,002 / 0,10 = 0,02, sem unidades.",
    "distractorAnalysis": [
      "Está incorreta: não converte as unidades, dividindo 2 mm por 10 cm e obtendo 0,2.",
      "Está incorreta: dá apenas o alongamento em metros, sem dividir pelo comprimento inicial.",
      "Está incorreta: inverte a divisão, calculando L<sub>0</sub>/ΔL = 0,10 / 0,002 = 50."
    ],
    "nursingApplication": "A deformação relativa permite comparar o alongamento de tendões de comprimentos diferentes, algo útil na avaliação da mobilidade e da recuperação de uma lesão."
  },
  {
    "id": 2225,
    "topicId": 2,
    "question": "Um alongamento de 4,0 cm é produzido numa mola por uma força de 10 N. Qual é o alongamento produzido por uma força de 25 N, dentro do limite de proporcionalidade?",
    "options": [
      "1,6 cm",
      "10 cm",
      "19 cm",
      "100 cm"
    ],
    "correctIndex": 1,
    "explanation": "Dentro do limite de proporcionalidade, F = k · x: k = 10 N / 0,040 m = 250 N/m, logo x = 25 N / 250 N/m = 0,10 m = 10 cm.",
    "distractorAnalysis": [
      "Está incorreta: inverte a proporção, calculando 4,0 × 10 / 25 = 1,6 cm, quando uma força maior produz um alongamento maior.",
      "Está incorreta: soma a diferença de forças (15 N) ao alongamento inicial, como se a relação entre F e x fosse aditiva e não proporcional.",
      "Está incorreta: multiplica o alongamento pela força (4,0 × 25), o que não tem significado físico."
    ],
    "nursingApplication": "Num dinamómetro de mola, a escala é linear porque o alongamento é proporcional à força aplicada, dentro do limite de proporcionalidade."
  },
  {
    "id": 2226,
    "topicId": 2,
    "question": "Uma barra com secção de 5,0 cm² suporta uma tensão mecânica de 4,0 × 10⁶ Pa. Qual é a força aplicada?",
    "options": [
      "200 N",
      "2,0 × 10³ N",
      "8,0 × 10⁹ N",
      "2,0 × 10⁷ N"
    ],
    "correctIndex": 1,
    "explanation": "Da definição σ = F/S resulta F = σ · S = 4,0 × 10⁶ Pa × 5,0 × 10⁻⁴ m² = 2,0 × 10³ N.",
    "distractorAnalysis": [
      "Está incorreta: converte a área de forma errada, usando 5,0 × 10⁻⁵ m², o que dá 200 N.",
      "Está incorreta: divide a tensão pela área em vez de multiplicar, o que dá 8,0 × 10⁹ N.",
      "Está incorreta: usa 5,0 cm² como se fossem 5,0 m², sem converter a unidade da área."
    ],
    "nursingApplication": "Conhecer a força máxima que um osso ou um dispositivo de fixação pode suportar, a partir da sua área de secção e da tensão admissível, ajuda a prever o risco de rutura."
  },
  {
    "id": 2227,
    "topicId": 2,
    "question": "Uma barra é comprimida ao longo do seu eixo longitudinal. Que acontece à área da sua secção transversal?",
    "options": [
      "Diminui, tal como o comprimento da barra.",
      "Mantém-se constante, pois a força atua apenas no comprimento.",
      "Aumenta, por efeito de Poisson.",
      "Aumenta apenas se a força for de tração."
    ],
    "correctIndex": 2,
    "explanation": "Pelo efeito de Poisson, quando um corpo é comprimido numa direção, dilata-se nas direções perpendiculares, pelo que a área da secção aumenta.",
    "distractorAnalysis": [
      "Está incorreta: o comprimento diminui, mas as dimensões transversais não diminuem juntas; na compressão a secção aumenta.",
      "Está incorreta: a força atua ao longo do eixo, mas a deformação longitudinal é, em geral, acompanhada de deformação transversal (efeito de Poisson).",
      "Está incorreta: na tração é a secção que diminui; o aumento da secção ocorre na compressão, e não na tração."
    ],
    "nursingApplication": "Ao comprimir um tecido mole, como a pele sobre uma saliência óssea, o tecido tende a expandir-se lateralmente, o que deve ser considerado na avaliação da pressão exercida."
  },
  {
    "id": 2228,
    "topicId": 2,
    "question": "Uma mola de constante elástica 120 N/m é esticada 3 cm, dentro do limite de proporcionalidade. Qual é o módulo e o sentido da força restauradora que a mola exerce?",
    "options": [
      "3,6 N, no mesmo sentido do alongamento",
      "3,6 N, no sentido oposto ao alongamento",
      "0,00025 N, no sentido oposto ao alongamento",
      "4000 N, no sentido oposto ao alongamento"
    ],
    "correctIndex": 1,
    "explanation": "A força restauradora tem módulo F = k · x = 120 N/m × 0,03 m = 3,6 N e opõe-se ao alongamento, tendendo a repor a mola na sua posição inicial.",
    "distractorAnalysis": [
      "Está incorreta: o módulo está certo, mas a força restauradora opõe-se ao alongamento, e não tem o mesmo sentido.",
      "Está incorreta: dividir o alongamento pela constante, em vez de multiplicar, dá 0,00025 N.",
      "Está incorreta: dividir a constante pelo alongamento dá 4000 N, valor que não resulta da lei de Hooke."
    ],
    "nursingApplication": "Numa banda elástica de reabilitação, a força que a banda exerce sobre o membro opõe-se ao alongamento que o doente lhe impõe e cresce com esse alongamento."
  },
  {
    "id": 2229,
    "topicId": 2,
    "question": "Num gráfico de tensão em função da deformação relativa de uma amostra de osso cortical, a parte inicial é uma reta. O que representa esta reta?",
    "options": [
      "Zona de proporcionalidade, em que σ = E · ε.",
      "Zona de escoamento, em que a deformação cresce sem aumento da tensão.",
      "Zona de rutura, em que o material se separa em duas partes.",
      "Zona de deformação nula, em que o material não reage à força."
    ],
    "correctIndex": 0,
    "explanation": "Na parte inicial linear do gráfico a tensão é proporcional à deformação relativa, com E como declive: é a zona de proporcionalidade da lei de Hooke.",
    "distractorAnalysis": [
      "Está incorreta: a deformação crescente sem aumento de tensão ocorre depois da zona linear, e não na parte inicial reta.",
      "Está incorreta: a rutura é o limite final do material, e não a parte linear inicial do gráfico.",
      "Está incorreta: o material reage à força, porque a tensão é não nula, e a reta tem declive não nulo."
    ],
    "nursingApplication": "Dentro da zona linear, a resposta de um osso à carga é previsível e reversível, enquanto ultrapassar esse limite pode deixar a estrutura danificada ou fraturada."
  },
  {
    "id": 2230,
    "topicId": 2,
    "question": "Qual das afirmações sobre a lei de Hooke, na forma σ = E · ε, é correta?",
    "options": [
      "Vale para qualquer intensidade de força, em todos os materiais elásticos conhecidos.",
      "Vale apenas para corpos viscosos, como o mel, cuja deformação depende do tempo.",
      "Só vale até ao limite de proporcionalidade; materiais como a borracha não são lineares.",
      "Vale apenas para a compressão, pois na tração a relação deixa de ser linear."
    ],
    "correctIndex": 2,
    "explanation": "A relação linear σ = E · ε só é válida na zona de proporcionalidade. Há materiais elásticos não lineares, como a borracha, e o tendão tem uma zona inicial não linear antes da zona aproximadamente linear, pelo que E não é constante em toda a curva.",
    "distractorAnalysis": [
      "Está incorreta: a proporcionalidade deixa de existir acima do limite, e vários materiais elásticos não são lineares.",
      "Está incorreta: os corpos viscosos não seguem a lei de Hooke, porque a sua deformação depende do tempo.",
      "Está incorreta: a lei de Hooke aplica-se tanto à tração como à compressão, dentro do limite de proporcionalidade."
    ],
    "nursingApplication": "Ao interpretar a resposta mecânica de um tecido, deve verificar-se se a carga está dentro da zona linear, já que acima dela a rigidez deixa de ser constante."
  },
  {
    "id": 2231,
    "topicId": 2,
    "question": "Duas molas têm o mesmo comprimento inicial: a mola A tem k = 100 N/m e a mola B tem k = 400 N/m. Sob a mesma força, qual é a relação entre as suas deformações?",
    "options": [
      "A deforma-se 4 vezes menos do que B.",
      "A deforma-se 4 vezes mais do que B.",
      "Deformam-se igualmente, pois a força é a mesma.",
      "A deforma-se 16 vezes mais do que B."
    ],
    "correctIndex": 1,
    "explanation": "Como x = F/k, a deformação é inversamente proporcional a k. Com k de A quatro vezes menor do que o de B, a deformação de A é quatro vezes maior.",
    "distractorAnalysis": [
      "Está incorreta: com k menor, a mola A deforma-se mais, e não menos, para a mesma força.",
      "Está incorreta: as deformações só seriam iguais se as constantes elásticas fossem iguais, o que não é o caso.",
      "Está incorreta: a relação é linear em 1/k, pelo que o fator é 4, e não 16."
    ],
    "nursingApplication": "A escolha de uma órtese ou de uma mola de reabilitação com maior ou menor constante elástica determina quanto o aparelho cede sob a mesma força do doente."
  },
  {
    "id": 2232,
    "topicId": 2,
    "question": "Uma barra de 40 cm de comprimento inicial é comprimida até 38 cm. Qual é a deformação relativa da barra?",
    "options": [
      "−2",
      "−0,05",
      "+0,05 (alongamento)",
      "−20"
    ],
    "correctIndex": 1,
    "explanation": "ΔL = L<sub>f</sub> − L<sub>0</sub> = 38 cm − 40 cm = −2 cm. Logo ε = ΔL / L<sub>0</sub> = −2 / 40 = −0,05, sem unidades; o sinal negativo indica encurtamento.",
    "distractorAnalysis": [
      "Está incorreta: não divide a variação de comprimento pelo comprimento inicial, ficando apenas com −2 cm.",
      "Está incorreta: esquece o sinal negativo, o que ignora que a barra encurtou.",
      "Está incorreta: inverte a divisão, calculando L<sub>0</sub> / ΔL = −20, que não é uma deformação relativa."
    ],
    "nursingApplication": "O encurtamento relativo de um osso ou de um músculo, medido em radiografias ou ecografias, é expresso em relação ao comprimento inicial, para comparar casos diferentes."
  },
  {
    "id": 2233,
    "topicId": 2,
    "question": "Qual é o enunciado da lei de Hooke?",
    "options": [
      "A força elástica é proporcional à deformação do corpo, dentro do limite de proporcionalidade.",
      "A força elástica é inversamente proporcional à deformação do corpo, sendo menor quanto maior for a deformação.",
      "A deformação é proporcional ao tempo de aplicação da força.",
      "A força elástica é proporcional ao quadrado da deformação do corpo."
    ],
    "correctIndex": 0,
    "explanation": "Hooke concluiu que a força elástica de uma mola é proporcional ao seu alongamento, enquanto a deformação estiver dentro do limite de proporcionalidade.",
    "distractorAnalysis": [
      "Está incorreta: se a força fosse inversamente proporcional à deformação, uma mola esticada resistiria menos, o que contraria a experiência.",
      "Está incorreta: a proporcionalidade ao tempo descreve os corpos viscosos, e não a elasticidade de Hooke.",
      "Está incorreta: a relação de Hooke é linear, e não quadrática."
    ],
    "nursingApplication": "Como a força elástica cresce linearmente com o alongamento, o valor medido num dinamómetro de mola permite quantificar a força aplicada num exercício de reabilitação."
  },
  {
    "id": 2234,
    "topicId": 2,
    "question": "Duas barras têm o mesmo material e a mesma secção. A barra Y tem o dobro do comprimento inicial da barra X. Qual é a relação entre as suas constantes elásticas?",
    "options": [
      "A constante de Y é metade da constante de X.",
      "A constante de Y é o dobro da constante de X.",
      "A constante de Y é igual à de X, pois é o mesmo material.",
      "A constante de Y é quatro vezes maior do que a de X."
    ],
    "correctIndex": 0,
    "explanation": "Com o mesmo material e a mesma secção, uma barra com o dobro do comprimento alonga-se o dobro para a mesma força, pelo que a sua constante elástica é metade.",
    "distractorAnalysis": [
      "Está incorreta: como k é inversamente proporcional ao comprimento, o dobro do comprimento reduz k para metade, e não a duplica.",
      "Está incorreta: a constante k depende das dimensões do corpo, e não apenas do material.",
      "Está incorreta: o efeito do comprimento sobre k é inverso e linear, e não quadrático."
    ],
    "nursingApplication": "Com o mesmo material e a mesma secção, um tendão mais comprido alonga mais sob a mesma força, o que se deve ter em conta ao comparar tendões de comprimentos diferentes."
  },
  {
    "id": 2235,
    "topicId": 2,
    "question": "Duas barras têm o mesmo comprimento e a mesma secção. A barra A tem módulo de Young 1,5 × 10¹⁰ Pa e a barra B tem 1,0 × 10⁹ Pa. Qual delas tem maior constante elástica?",
    "options": [
      "B, porque tem um módulo de Young menor e deforma mais, logo é mais rígida.",
      "Ambas, porque têm o mesmo comprimento e a mesma secção.",
      "A, porque tem um módulo de Young maior e, portanto, maior k.",
      "B, porque a constante elástica é inversamente proporcional a E."
    ],
    "correctIndex": 2,
    "explanation": "Com o mesmo comprimento e a mesma secção, a barra com maior módulo de Young deforma-se menos para a mesma força, logo tem maior constante elástica. A barra A, com E quinze vezes maior, é a mais rígida.",
    "distractorAnalysis": [
      "Está incorreta: uma barra que se deforma mais, para a mesma força, tem menor constante elástica, e não maior.",
      "Está incorreta: a constante elástica depende do módulo de Young, pelo que, com módulos diferentes, as constantes também diferem.",
      "Está incorreta: a constante elástica é diretamente proporcional a E, e não inversamente proporcional."
    ],
    "nursingApplication": "Um osso cortical, com módulo de Young muito superior ao de um tendão, transmite cargas de forma mais rígida, o que explica a diferença de comportamento entre estes tecidos."
  },
  {
    "id": 2236,
    "topicId": 2,
    "question": "Um corpo elástico com módulo de Young E = 2,0 × 10⁹ Pa é sujeito a uma tensão de 4,0 × 10⁶ Pa, dentro do limite de proporcionalidade. Qual é a deformação relativa?",
    "options": [
      "500",
      "2",
      "2,0 × 10⁶",
      "0,002"
    ],
    "correctIndex": 3,
    "explanation": "Da relação σ = E · ε resulta ε = σ / E = 4,0 × 10⁶ / 2,0 × 10⁹ = 2,0 × 10⁻³ = 0,002, sem unidades.",
    "distractorAnalysis": [
      "Está incorreta: inverte a relação, calculando E / σ = 500, em vez de σ / E.",
      "Está incorreta: divide apenas os valores numéricos (4,0 / 2,0 = 2), esquecendo as potências de dez.",
      "Está incorreta: divide a tensão pelo fator 2 de E, esquecendo a potência de dez de E (10⁹)."
    ],
    "nursingApplication": "O cimento ósseo (PMMA) usado na fixação de próteses tem um módulo de Young da ordem de 2 × 10⁹ Pa, cerca de dez vezes inferior ao do osso cortical, pelo que se deforma mais sob a mesma tensão."
  },
  {
    "id": 2237,
    "topicId": 2,
    "question": "Uma mola de constante elástica 500 N/m é comprimida 4 cm, dentro do limite de proporcionalidade. Qual é a força elástica exercida pela mola?",
    "options": [
      "12 500 N",
      "0,00008 N",
      "2000 N",
      "20 N"
    ],
    "correctIndex": 3,
    "explanation": "F = k · x = 500 N/m × 0,04 m = 20 N.",
    "distractorAnalysis": [
      "Está incorreta: dividir a constante pela compressão, em vez de multiplicar, dá 12 500 N.",
      "Está incorreta: dividir a compressão pela constante dá 0,00008 N, em vez de 20 N.",
      "Está incorreta: não converte 4 cm para metros, multiplicando 500 por 4, o que dá 2000 N."
    ],
    "nursingApplication": "Num exercitador de preensão com mola, usado na reabilitação da mão, comprimir a mola 4 cm em vez de 2 cm duplica a força que o doente tem de fazer."
  },
  {
    "id": 2238,
    "topicId": 2,
    "question": "Uma força de 9 N alonga uma mola 15 cm, dentro do limite de proporcionalidade. Qual é a constante elástica da mola?",
    "options": [
      "60 N/m",
      "0,0167 N/m",
      "1,35 N/m",
      "600 N/m"
    ],
    "correctIndex": 0,
    "explanation": "Da lei de Hooke, k = F / x, com x = 15 cm = 0,15 m. Logo k = 9 N / 0,15 m = 60 N/m.",
    "distractorAnalysis": [
      "Está incorreta: inverte a relação, dividindo o alongamento pela força, o que dá 0,0167 N/m.",
      "Está incorreta: multiplica a força pelo alongamento, em vez de dividir, o que dá 1,35 N/m.",
      "Está incorreta: converte mal o alongamento, usando 15 cm = 0,015 m, o que dá 9 / 0,015 = 600 N/m."
    ],
    "nursingApplication": "Calcular a constante elástica de uma mola de reabilitação a partir de uma força conhecida permite escolher o aparelho adequado ao nível de carga pretendido."
  },
  {
    "id": 2239,
    "topicId": 2,
    "question": "Um osso com secção de 3,0 cm² suporta uma força de compressão de 6,0 × 10³ N, dentro do limite de proporcionalidade. Qual é a tensão mecânica no osso?",
    "options": [
      "2,0 × 10⁷ Pa",
      "2,0 × 10³ Pa",
      "6,0 × 10³ Pa",
      "1,8 Pa"
    ],
    "correctIndex": 0,
    "explanation": "σ = F / S, com S = 3,0 cm² = 3,0 × 10⁻⁴ m². Logo σ = 6,0 × 10³ / 3,0 × 10⁻⁴ = 2,0 × 10⁷ Pa.",
    "distractorAnalysis": [
      "Está incorreta: não converte a área para m², dividindo 6,0 × 10³ por 3,0, o que dá 2,0 × 10³ Pa.",
      "Está incorreta: confunde tensão com força, esquecendo a área de secção.",
      "Está incorreta: multiplica a força pela área, em vez de dividir, o que dá 1,8 Pa."
    ],
    "nursingApplication": "Para a mesma força de compressão, um osso com menor área de secção, como numa zona de afilamento, fica sujeito a uma tensão maior, o que aumenta o risco de fratura."
  },
  {
    "id": 2240,
    "topicId": 2,
    "question": "Ao ultrapassar o limite de proporcionalidade de um material, o que deixa de ser válido?",
    "options": [
      "A conservação da massa do corpo deformado, durante a deformação.",
      "A relação linear entre tensão e deformação, σ = E · ε.",
      "A definição de tensão como força por unidade de área.",
      "A deformação relativa ser adimensional e não ter unidades."
    ],
    "correctIndex": 1,
    "explanation": "O limite de proporcionalidade é o valor até ao qual a tensão é proporcional à deformação; acima dele, a relação linear σ = E · ε deixa de ser válida.",
    "distractorAnalysis": [
      "Está incorreta: a massa de um corpo não varia com a deformação mecânica, sendo uma grandeza que não depende do limite de proporcionalidade.",
      "Está incorreta: a definição de tensão, σ = F / S, continua válida, pois é uma definição e não uma lei do material.",
      "Está incorreta: a deformação relativa continua sem unidades, por ser um quociente de comprimentos."
    ],
    "nursingApplication": "Acima do limite de proporcionalidade a deformação deixa de ser proporcional e, ultrapassado o limite elástico, deixa também de ser reversível, o que ajuda a perceber porque é que cargas excessivas podem lesionar ossos e tendões."
  },
  {
    "id": 2241,
    "topicId": 2,
    "question": "Uma barra é submetida a duas forças convergentes, dirigidas uma para a outra, ao longo do seu eixo. Que tipo de deformação ocorre?",
    "options": [
      "Compressão",
      "Tração ao longo do eixo",
      "Flexão transversal",
      "Torção em torno do eixo"
    ],
    "correctIndex": 0,
    "explanation": "As forças convergentes aproximam as extremidades da barra ao longo do seu eixo, diminuindo o comprimento: é uma compressão.",
    "distractorAnalysis": [
      "Está incorreta: a tração resulta de forças divergentes, que afastam as extremidades da barra.",
      "Está incorreta: a flexão resulta de forças perpendiculares ao eixo, que curvam a barra.",
      "Está incorreta: a torção resulta de um momento em torno do eixo, e não de forças convergentes ao longo dele."
    ],
    "nursingApplication": "Quando um doente se apoia de pé sobre as pernas, os ossos longos do membro inferior ficam sujeitos sobretudo a compressão ao longo do seu eixo."
  },
  {
    "id": 2242,
    "topicId": 2,
    "question": "Duas forças divergentes, que se afastam uma da outra, atuam nas extremidades de uma barra ao longo do seu eixo. Qual é o efeito na barra?",
    "options": [
      "Diminui o comprimento e aumenta a secção transversal da barra.",
      "Aumenta o comprimento e a secção.",
      "Aumenta o comprimento e diminui a secção.",
      "Mantém o comprimento e diminui a secção."
    ],
    "correctIndex": 2,
    "explanation": "Na tração, as forças divergentes aumentam o comprimento da barra e, por efeito de Poisson, a área da secção diminui.",
    "distractorAnalysis": [
      "Está incorreta: é o efeito da compressão, em que as forças convergentes encurtam a barra e alargam a secção.",
      "Está incorreta: na tração a secção diminui, por efeito de Poisson, e não aumenta.",
      "Está incorreta: a tração alonga a barra, pelo que o comprimento não se mantém."
    ],
    "nursingApplication": "Na tração esquelética usada em fraturas, a força é aplicada no sentido de afastar as extremidades do osso, para alinhar os fragmentos."
  },
  {
    "id": 2243,
    "topicId": 2,
    "question": "Ao ficar de pé, a coluna vertebral de um adulto é comprimida ao longo do seu eixo. Modelando uma vértebra como uma barra, que alteração ocorre?",
    "options": [
      "Aumento do comprimento da vértebra e diminuição da secção transversal.",
      "Aumento do comprimento e da secção.",
      "Diminuição do comprimento e da secção.",
      "Diminuição do comprimento e aumento da secção."
    ],
    "correctIndex": 3,
    "explanation": "Na compressão, o comprimento diminui e, por efeito de Poisson, a área da secção aumenta.",
    "distractorAnalysis": [
      "Está incorreta: é o efeito da tração, e não da compressão.",
      "Está incorreta: a compressão encurta a barra, pelo que o comprimento não aumenta.",
      "Está incorreta: na compressão a secção aumenta, por efeito de Poisson, e não diminui."
    ],
    "nursingApplication": "A compressão axial da coluna em posição de pé explica que a estatura de um adulto seja ligeiramente menor ao fim do dia do que ao acordar, sobretudo por compressão dos discos intervertebrais."
  },
  {
    "id": 2244,
    "topicId": 2,
    "question": "Qual é o tipo de forças que produz uma deformação por flexão?",
    "options": [
      "Forças paralelas à superfície e de sentidos opostos, que fazem deslizar camadas.",
      "Forças convergentes ao longo do eixo, que encurtam o sólido.",
      "Um momento torsor em torno do eixo longitudinal do sólido.",
      "Forças perpendiculares ao eixo, que tornam curvas as arestas retilíneas."
    ],
    "correctIndex": 3,
    "explanation": "A flexão é a deformação de um sólido por forças perpendiculares ao eixo, que transformam as arestas retilíneas em linhas curvas.",
    "distractorAnalysis": [
      "Está incorreta: são forças tangenciais, que caracterizam o cisalhamento e não a flexão.",
      "Está incorreta: forças convergentes ao longo do eixo produzem compressão, e não flexão.",
      "Está incorreta: um momento torsor em torno do eixo produz torção, e não flexão."
    ],
    "nursingApplication": "Um osso longo como a tíbia pode fletir sob um impacto lateral, por exemplo contra o para-choques de um carro, mecanismo a considerar na avaliação de um doente após um atropelamento ou uma queda."
  },
  {
    "id": 2245,
    "topicId": 2,
    "question": "Qual é a descrição correta do cisalhamento?",
    "options": [
      "Encurtamento do eixo do sólido por forças convergentes ao longo do mesmo, sem alterar a secção.",
      "Curvatura das arestas retilíneas por forças perpendiculares ao eixo.",
      "Deslizamento de camadas paralelas por ação de forças tangenciais opostas.",
      "Rotação das secções em torno do eixo por um momento torsor."
    ],
    "correctIndex": 2,
    "explanation": "No cisalhamento, forças tangenciais opostas, que atuam paralelamente à superfície, fazem deslizar camadas paralelas umas sobre as outras.",
    "distractorAnalysis": [
      "Está incorreta: o encurtamento do eixo por forças convergentes descreve a compressão.",
      "Está incorreta: a curvatura das arestas retilíneas descreve a flexão.",
      "Está incorreta: a rotação das secções em torno do eixo descreve a torção."
    ],
    "nursingApplication": "As forças de cisalhamento que deslizam as camadas da pele sobre os tecidos profundos são um dos mecanismos das lesões por pressão."
  },
  {
    "id": 2246,
    "topicId": 2,
    "question": "Uma barra cilíndrica é sujeita a um momento torsor em torno do seu eixo longitudinal. Qual é a tensão de corte no eixo central da secção?",
    "options": [
      "Nula.",
      "Máxima, por ser a zona mais solicitada da secção.",
      "Igual à da periferia da secção.",
      "Igual à tensão normal de tração em toda a secção."
    ],
    "correctIndex": 0,
    "explanation": "Na torção, a tensão de corte cresce com a distância ao eixo e é nula no eixo central da secção.",
    "distractorAnalysis": [
      "Está incorreta: na torção a tensão de corte aumenta com a distância ao eixo, sendo nula no eixo central.",
      "Está incorreta: a tensão de corte é máxima na periferia e nula no centro, pelo que não é igual em toda a secção.",
      "Está incorreta: o momento torsor cria uma tensão tangencial, e não uma tensão normal uniforme em toda a secção."
    ],
    "nursingApplication": "Numa rotação forçada de um membro, é a camada cortical mais periférica do osso que suporta as maiores tensões de corte, e é aí que tende a iniciar-se a fratura em espiral."
  },
  {
    "id": 2247,
    "topicId": 2,
    "question": "Um tubo cilíndrico é segurado pelas extremidades, que são rodadas em sentidos opostos em torno do eixo do tubo. Que tipo de deformação ocorre?",
    "options": [
      "Flexão, porque o tubo se curva ao ser segurado pelas extremidades.",
      "Torção, porque as secções rodam em torno do eixo.",
      "Compressão, porque o tubo encurta.",
      "Tração, porque o tubo se alonga."
    ],
    "correctIndex": 1,
    "explanation": "Rodar as extremidades em sentidos opostos, em torno do eixo, produz torção: as secções rodam umas em relação às outras em torno do eixo longitudinal.",
    "distractorAnalysis": [
      "Está incorreta: a flexão exige forças perpendiculares ao eixo que curvem o tubo, e não uma rotação das extremidades.",
      "Está incorreta: a compressão exige forças convergentes ao longo do eixo, que a rotação das extremidades não produz.",
      "Está incorreta: a tração exige forças divergentes ao longo do eixo, e a rotação não alonga o tubo."
    ],
    "nursingApplication": "Uma torção excessiva de um membro, como acontece numa queda com o pé fixo, é um mecanismo típico de fraturas em espiral dos ossos longos."
  },
  {
    "id": 2248,
    "topicId": 2,
    "question": "Qual é a principal diferença entre forças de tração e forças de compressão?",
    "options": [
      "A tração é convergente e a compressão é divergente.",
      "Ambas aumentam o comprimento, diferindo apenas no sentido em que as forças são aplicadas.",
      "Ambas diminuem a área da secção.",
      "A tração é divergente e alonga a barra; a compressão é convergente e encurta-a."
    ],
    "correctIndex": 3,
    "explanation": "Na tração as forças são divergentes e o comprimento aumenta; na compressão as forças são convergentes e o comprimento diminui.",
    "distractorAnalysis": [
      "Está incorreta: troca os sentidos, pois a tração é divergente e a compressão é convergente.",
      "Está incorreta: a compressão diminui o comprimento, e não o aumenta.",
      "Está incorreta: na tração a secção diminui e na compressão aumenta, pelo que não diminuem ambas."
    ],
    "nursingApplication": "Compreender se um osso está sujeito a tração ou compressão ajuda a perceber a direção da força que um aparelho de imobilização deve exercer."
  },
  {
    "id": 2249,
    "topicId": 2,
    "question": "Porque é que levantar uma carga com os braços afastados do tronco sobrecarrega a coluna lombar?",
    "options": [
      "Porque aumenta o momento fletor na coluna, equilibrado pelos músculos extensores.",
      "Porque o peso da carga aumenta à medida que esta se afasta do tronco.",
      "Porque cria um momento extensor na coluna lombar, equilibrado pelos músculos abdominais.",
      "Porque a carga deixa de comprimir a coluna lombar e passa a tracioná-la."
    ],
    "correctIndex": 0,
    "explanation": "Afastar a carga do tronco aumenta o seu braço em relação à coluna lombar, e o momento fletor resultante é equilibrado pela ação dos músculos extensores.",
    "distractorAnalysis": [
      "Está incorreta: o peso da carga (m·g) não depende da distância ao tronco; o que aumenta é o braço do momento em relação à coluna.",
      "Está incorreta: a carga à frente do tronco tende a fletir a coluna, criando um momento fletor que é equilibrado pelos extensores, e não pelos abdominais.",
      "Está incorreta: a força dos extensores que equilibra o momento fletor soma-se à carga e aumenta a compressão dos discos lombares, em vez de a substituir por tração."
    ],
    "nursingApplication": "Na mobilização e no levantamento de doentes, o enfermeiro deve manter a carga próxima do tronco para reduzir o momento fletor sobre a coluna lombar."
  },
  {
    "id": 2250,
    "topicId": 2,
    "question": "Como se designam as forças que afastam as extremidades de uma barra ao longo do seu eixo?",
    "options": [
      "Convergentes",
      "Tangenciais",
      "Perpendiculares ao eixo",
      "Divergentes"
    ],
    "correctIndex": 3,
    "explanation": "As forças divergentes afastam as extremidades da barra ao longo do seu eixo e produzem tração.",
    "distractorAnalysis": [
      "Está incorreta: as forças convergentes aproximam as extremidades e caracterizam a compressão.",
      "Está incorreta: as forças tangenciais atuam paralelamente à superfície e caracterizam o cisalhamento.",
      "Está incorreta: as forças perpendiculares ao eixo caracterizam a flexão e não afastam as extremidades da barra."
    ],
    "nursingApplication": "Ao identificar o sentido das forças num membro imobilizado, o enfermeiro percebe se o aparelho está a tracionar ou a comprimir a região."
  },
  {
    "id": 2251,
    "topicId": 2,
    "question": "Uma força tangencial é aplicada à face superior de um bloco de tecido, enquanto a face inferior está fixa. Que tipo de deformação resulta?",
    "options": [
      "Cisalhamento",
      "Tração ao longo do eixo",
      "Compressão",
      "Torção em torno do eixo"
    ],
    "correctIndex": 0,
    "explanation": "Forças tangenciais que atuam paralelamente à superfície produzem cisalhamento, fazendo deslizar as camadas do bloco umas sobre as outras.",
    "distractorAnalysis": [
      "Está incorreta: a tração resulta de forças divergentes ao longo do eixo, perpendiculares à superfície, e não de forças tangenciais.",
      "Está incorreta: a compressão resulta de forças convergentes e normais à superfície, e não de forças tangenciais.",
      "Está incorreta: a torção resulta de um momento em torno de um eixo, e não de uma força paralela à face."
    ],
    "nursingApplication": "Um tecido sujeito a forças tangenciais, como a pele de um doente que escorrega na cama, deforma-se por cisalhamento mesmo sem ser esticado nem comprimido."
  },
  {
    "id": 2252,
    "topicId": 2,
    "question": "Um doente sentado na cama com a cabeceira elevada tende a escorregar, e a pele sobre o sacro sofre lesão. Porque é que o deslizamento pode lesionar a pele?",
    "options": [
      "Porque as forças tangenciais opostas fazem deslizar camadas de tecido umas sobre as outras, deformando-as.",
      "Porque a compressão, por si só, faz deslizar as camadas de pele umas sobre as outras.",
      "Porque a pressão normal sobre o sacro comprime as camadas da pele, e essa compressão é o único mecanismo da lesão.",
      "Porque o atrito entre a pele e o lençol é nulo quando o doente escorrega, aumentando a pressão local."
    ],
    "correctIndex": 0,
    "explanation": "O deslizamento corresponde a forças de cisalhamento: forças tangenciais opostas deformam as camadas de pele e dos tecidos profundos, que ficam sob tensão de corte.",
    "distractorAnalysis": [
      "Está incorreta: a compressão encurta a camada de pele, mas não produz, por si só, o deslizamento tangencial característico.",
      "Está incorreta: a compressão normal não é o único mecanismo; o deslizamento entre camadas resulta de forças tangenciais, que a compressão sozinha não produz.",
      "Está incorreta: o atrito não é nulo quando o doente escorrega; é a força de atrito, e não a sua ausência, que aumenta o cisalhamento na pele."
    ],
    "nursingApplication": "Para prevenir lesões por pressão, a cabeceira deve ser elevada apenas o necessário, e usam-se dispositivos que reduzam o atrito e o deslizamento do doente, como lençóis de transferência."
  },
  {
    "id": 2253,
    "topicId": 2,
    "question": "Qual dos seguintes NÃO é um tipo de deformação mecânica?",
    "options": [
      "Torção",
      "Reologia",
      "Flexão",
      "Cisalhamento"
    ],
    "correctIndex": 1,
    "explanation": "A reologia é a área que estuda as reações dos corpos a forças deformadoras; não é um tipo de deformação. Os tipos são tração, compressão, cisalhamento, flexão e torção.",
    "distractorAnalysis": [
      "Está incorreta: a torção é um tipo de deformação, produzida por um momento torsor em torno do eixo do sólido.",
      "Está incorreta: a flexão é um tipo de deformação, produzida por forças perpendiculares ao eixo do sólido.",
      "Está incorreta: o cisalhamento é um tipo de deformação, produzido por forças tangenciais opostas."
    ],
    "nursingApplication": "Ao avaliar uma lesão cutânea num doente acamado, identificar se resultou sobretudo de compressão ou de cisalhamento orienta a escolha entre aliviar a pressão ou reduzir o deslizamento."
  },
  {
    "id": 2254,
    "topicId": 2,
    "question": "Uma barra é dobrada e fica curva. O que acontece às fibras longitudinais da face côncava (interior da curva)?",
    "options": [
      "Sofrem tração, alongando-se até ao limite de rutura.",
      "Não sofrem qualquer deformação.",
      "Sofrem apenas cisalhamento puro.",
      "Sofrem compressão, encurtando-se."
    ],
    "correctIndex": 3,
    "explanation": "Na flexão, a face côncava (interior da curva) fica comprimida, enquanto a face convexa (exterior) fica tracionada.",
    "distractorAnalysis": [
      "Está incorreta: a tração ocorre na face convexa, que é o exterior da curva, e não na face côncava.",
      "Está incorreta: na flexão as fibras longitudinais deformam-se, exceto as do eixo neutro; a face côncava não fica sem deformação.",
      "Está incorreta: o cisalhamento ocorre no plano das secções e não corresponde à deformação das fibras longitudinais da face."
    ],
    "nursingApplication": "Num osso longo fletido, a face côncava fica em compressão e a face convexa em tração; a fratura por flexão inicia-se, em regra, pela face tracionada, que é a convexa."
  },
  {
    "id": 2255,
    "topicId": 2,
    "question": "Numa barra cilíndrica sujeita a torção, onde é máxima a tensão de corte?",
    "options": [
      "No eixo central.",
      "Igual em todos os pontos da secção.",
      "No centro de massa do corpo.",
      "Na periferia da secção."
    ],
    "correctIndex": 3,
    "explanation": "A tensão de corte na torção cresce com a distância ao eixo: é nula no eixo central e máxima na periferia da secção.",
    "distractorAnalysis": [
      "Está incorreta: no eixo central a tensão de corte é nula, e não máxima.",
      "Está incorreta: a tensão de corte não é uniforme; cresce com a distância ao eixo.",
      "Está incorreta: o centro de massa não é relevante para a tensão de torção, que depende da distância ao eixo."
    ],
    "nursingApplication": "Quando o pé fica fixo e o corpo roda, a tíbia sofre torção e é o osso cortical da periferia que suporta as maiores tensões de corte."
  },
  {
    "id": 2256,
    "topicId": 2,
    "question": "Um fio de nylon com constante elástica 80 N/m é alongado 2,5 cm, dentro do limite de proporcionalidade. Qual é a força elástica exercida pelo fio?",
    "options": [
      "200 N",
      "2,0 N",
      "0,0003 N",
      "0,025 N"
    ],
    "correctIndex": 1,
    "explanation": "Converte-se primeiro o alongamento para metros: 2,5 cm = 0,025 m. Então F = k · x = 80 N/m × 0,025 m = 2,0 N.",
    "distractorAnalysis": [
      "Está incorreta: não converte 2,5 cm para metros, multiplicando 80 por 2,5, o que dá 200 N.",
      "Está incorreta: divide o alongamento pela constante, em vez de multiplicar, o que dá cerca de 0,0003 N.",
      "Está incorreta: esquece a constante elástica e usa apenas o alongamento, o que dá 0,025 N."
    ],
    "nursingApplication": "Na escolha de um fio ou de uma banda elástica para exercícios de reabilitação, a força calcula-se com a constante elástica e com o alongamento convertido para metros."
  },
  {
    "id": 2257,
    "topicId": 2,
    "question": "Uma barra apoiada nas duas extremidades e carregada ao centro fica fletida. Onde é máxima a tensão normal de tração?",
    "options": [
      "Na face superior, onde a barra se encurta.",
      "Na face inferior, que é a face convexa.",
      "No eixo neutro, onde a tensão normal é máxima.",
      "Igual em todas as faces, pois a barra é simétrica."
    ],
    "correctIndex": 1,
    "explanation": "Na flexão, a face convexa (inferior, neste caso) fica tracionada e a face côncava (superior) fica comprimida. A tensão normal de tração é máxima nas fibras mais afastadas do eixo neutro da face convexa.",
    "distractorAnalysis": [
      "Está incorreta: na face superior a barra encurta-se, pelo que a tensão aí é de compressão.",
      "Está incorreta: no eixo neutro a tensão normal é nula, por definição.",
      "Está incorreta: a flexão cria tensões opostas nas duas faces, e não uma tensão igual em todas."
    ],
    "nursingApplication": "Numa tala ou haste apoiada nas extremidades e carregada ao centro, a face convexa fica com maior tensão de tração, onde a rutura tende a começar."
  },
  {
    "id": 2258,
    "topicId": 2,
    "question": "Um dinamómetro de mola com constante elástica 1,0 × 10³ N/m é puxado com uma força de 25 N, dentro do limite de proporcionalidade. Qual é o alongamento da mola?",
    "options": [
      "40 m",
      "0,025 m",
      "25 000 m",
      "2,5 m"
    ],
    "correctIndex": 1,
    "explanation": "Da lei de Hooke, x = F / k = 25 N / 1,0 × 10³ N/m = 0,025 m, ou seja, 2,5 cm.",
    "distractorAnalysis": [
      "Está incorreta: inverte a divisão, calculando k / F = 40, que não é um alongamento.",
      "Está incorreta: multiplica a força pela constante, em vez de dividir, o que dá 25 000 m.",
      "Está incorreta: confunde centímetros com metros, pois 2,5 cm são 0,025 m e não 2,5 m."
    ],
    "nursingApplication": "Num dinamómetro de mola muito rígido, uma força de 25 N produz apenas 2,5 cm de alongamento, pelo que a escala tem de ser fina para medir forças pequenas com precisão."
  },
  {
    "id": 2259,
    "topicId": 2,
    "question": "Qual dos materiais seguintes é um exemplo de corpo viscoelástico?",
    "options": [
      "Mola de aço",
      "Cartilagem",
      "Água",
      "Plasticina"
    ],
    "correctIndex": 1,
    "explanation": "A cartilagem é um corpo viscoelástico: a sua deformação depende simultaneamente da tensão e do tempo, e a recuperação é retardada.",
    "distractorAnalysis": [
      "Está incorreta: a mola de aço é um sólido de Hooke, que recupera a forma de imediato, sem dependência do tempo.",
      "Está incorreta: a água é um corpo viscoso, que se deforma com o tempo e não recupera a forma original.",
      "Está incorreta: a plasticina é um corpo plástico, que só deforma acima de um limiar de tensão e mantém a deformação."
    ],
    "nursingApplication": "A cartilagem articular comporta-se como um corpo viscoelástico, pelo que a sua deformação sob carga prolongada só recupera gradualmente depois do repouso."
  },
  {
    "id": 2260,
    "topicId": 2,
    "question": "Uma pasta (como a pasta de dentes) não sai do tubo enquanto a pressão aplicada é pequena; quando se aperta mais, flui e fica com deformação permanente. Que tipo de corpo é?",
    "options": [
      "Corpo viscoso",
      "Corpo plastoviscoelástico",
      "Corpo viscoelástico",
      "Sólido de Hooke"
    ],
    "correctIndex": 1,
    "explanation": "O corpo plastoviscoelástico comporta-se como elástico abaixo de uma tensão mínima; acima dela flui e fica com deformação permanente, como a massa de pão ou a pasta de dentes.",
    "distractorAnalysis": [
      "Está incorreta: um corpo viscoso deforma-se sob qualquer tensão, por pequena que seja, e não precisa de uma tensão mínima para fluir.",
      "Está incorreta: um corpo viscoelástico recupera a forma, ainda que com atraso, e não fica com deformação permanente depois de fluir.",
      "Está incorreta: um sólido de Hooke deforma-se proporcionalmente à tensão e recupera a forma, sem fluir nem ficar deformado."
    ],
    "nursingApplication": "Uma pomada em bisnaga só sai quando se aperta o suficiente e não volta a entrar, o que permite dosear a quantidade aplicada sobre a pele."
  },
  {
    "id": 2261,
    "topicId": 2,
    "question": "Um tendão com comprimento inicial de 8,0 cm sofre um alongamento de 0,16 cm. Qual é a sua deformação relativa, em percentagem?",
    "options": [
      "0,020 %",
      "50 %",
      "0,16 %",
      "2,0 %"
    ],
    "correctIndex": 3,
    "explanation": "A deformação relativa é ε = ΔL / L<sub>0</sub> = 0,16 / 8,0 = 0,020, ou seja, 2,0 %.",
    "distractorAnalysis": [
      "Está incorreta: toma a fração 0,020 como se já fosse uma percentagem, esquecendo-se de a multiplicar por 100.",
      "Está incorreta: inverte a razão, calculando L<sub>0</sub> / ΔL = 8,0 / 0,16 = 50.",
      "Está incorreta: usa o alongamento em cm como se fosse uma percentagem, sem o dividir pelo comprimento inicial."
    ],
    "nursingApplication": "Exprimir a deformação relativa em percentagem permite comparar o alongamento de tendões de comprimentos diferentes, por exemplo ao avaliar o esforço no tendão de Aquiles."
  },
  {
    "id": 2262,
    "topicId": 2,
    "question": "Um osso com secção de 2,0 cm² suporta uma tensão mecânica de compressão de 3,0 × 10⁶ Pa, dentro do limite de proporcionalidade. Qual é a força de compressão suportada pelo osso?",
    "options": [
      "1,5 × 10¹⁰ N",
      "6,0 N",
      "6,0 × 10² N",
      "3,0 × 10⁶ N"
    ],
    "correctIndex": 2,
    "explanation": "Da definição σ = F / S resulta F = σ · S = 3,0 × 10⁶ Pa × 2,0 × 10⁻⁴ m² = 6,0 × 10² N.",
    "distractorAnalysis": [
      "Está incorreta: divide a tensão pela área, em vez de multiplicar, o que dá 1,5 × 10¹⁰ N.",
      "Está incorreta: converte a área de forma errada, usando 2,0 × 10⁻⁶ m², o que dá 6,0 N.",
      "Está incorreta: esquece a área e toma a tensão como se fosse uma força, o que dá 3,0 × 10⁶ N."
    ],
    "nursingApplication": "Estimar a força a que um osso fica sujeito, a partir da tensão e da área de secção, é uma forma de compreender o risco de fratura em doentes com ossos fragilizados."
  },
  {
    "id": 2263,
    "topicId": 2,
    "question": "Um tendão com 15 cm de comprimento inicial é tracionado até apresentar uma deformação relativa de 0,04. Qual é o seu alongamento?",
    "options": [
      "6 mm",
      "0,6 mm",
      "0,06 m",
      "3,75 m"
    ],
    "correctIndex": 0,
    "explanation": "ΔL = ε · L<sub>0</sub> = 0,04 × 15 cm = 0,6 cm = 6 mm.",
    "distractorAnalysis": [
      "Está incorreta: toma 15 cm como se fossem 15 mm, o que dá 0,04 × 15 mm = 0,6 mm.",
      "Está incorreta: confunde 15 cm com 1,5 m, o que dá 0,06 m.",
      "Está incorreta: inverte a relação, dividindo L<sub>0</sub> por ε, o que dá 3,75 m."
    ],
    "nursingApplication": "Converter corretamente as unidades de um alongamento medido em centímetros ou milímetros é indispensável ao comparar a elasticidade de um tendão antes e depois de um programa de reabilitação."
  },
  {
    "id": 2264,
    "topicId": 2,
    "question": "Um tendão com secção de 0,50 cm² é tracionado por uma força de 300 N, dentro do limite de proporcionalidade. Qual é a tensão mecânica no tendão?",
    "options": [
      "6,0 × 10² Pa",
      "0,015 Pa",
      "6,0 × 10⁴ Pa",
      "6,0 × 10⁶ Pa"
    ],
    "correctIndex": 3,
    "explanation": "σ = F / S, com S = 0,50 cm² = 5,0 × 10⁻⁵ m². Logo σ = 300 / (5,0 × 10⁻⁵) = 6,0 × 10⁶ Pa.",
    "distractorAnalysis": [
      "Está incorreta: usa a área em cm² sem a converter, o que dá 300 / 0,50 = 6,0 × 10² Pa.",
      "Está incorreta: multiplica a força pela área, em vez de dividir, o que dá 0,015 Pa.",
      "Está incorreta: converte 1 cm² como 10⁻² m², o que dá 6,0 × 10⁴ Pa."
    ],
    "nursingApplication": "A tensão no tendão é a grandeza que se compara com a sua capacidade de suporte, e não apenas a força total, pelo que a mesma carga é mais exigente num tendão de secção pequena."
  },
  {
    "id": 2265,
    "topicId": 2,
    "question": "Um ligamento tem módulo de Young E = 5,0 × 10⁸ Pa e é sujeito a uma tensão de 1,0 × 10⁷ Pa, dentro do limite de proporcionalidade. Qual é a sua deformação relativa?",
    "options": [
      "50",
      "0,2",
      "5,0 × 10¹⁵",
      "0,02"
    ],
    "correctIndex": 3,
    "explanation": "Da relação σ = E · ε resulta ε = σ / E = 1,0 × 10⁷ / 5,0 × 10⁸ = 0,02, sem unidades.",
    "distractorAnalysis": [
      "Está incorreta: inverte a relação, calculando E / σ = 50, em vez de σ / E.",
      "Está incorreta: escreve o módulo de Young como 5,0 × 10⁷ Pa, trocando a potência de dez, e obtém 0,2.",
      "Está incorreta: multiplica a tensão pelo módulo, em vez de dividir, o que dá 5,0 × 10¹⁵."
    ],
    "nursingApplication": "Comparar a deformação relativa de um ligamento com a da sua zona linear ajuda a perceber se uma carga, como a de uma entorse, se manteve na zona elástica ou se a ultrapassou, com risco de rotura de fibras."
  },
  {
    "id": 2266,
    "topicId": 2,
    "question": "Uma mola de um aparelho de reabilitação tem constante elástica 300 N/m e é alongada 8 cm, dentro do limite de proporcionalidade. Qual é a força exercida pela mola?",
    "options": [
      "24 N",
      "2400 N",
      "0,00027 N",
      "3750 N"
    ],
    "correctIndex": 0,
    "explanation": "F = k · x = 300 N/m × 0,08 m = 24 N.",
    "distractorAnalysis": [
      "Está incorreta: não converte 8 cm para metros, multiplicando 300 por 8, o que dá 2400 N.",
      "Está incorreta: divide o alongamento pela constante, em vez de multiplicar, o que dá cerca de 0,00027 N.",
      "Está incorreta: divide a constante pelo alongamento, em vez de multiplicar, o que dá 3750 N."
    ],
    "nursingApplication": "A força de uma mola de resistência depende da sua constante e do alongamento imposto, algo que deve ser conhecido ao prescrever um exercício."
  },
  {
    "id": 2267,
    "topicId": 2,
    "question": "No gráfico tensão–deformação da zona linear, o declive é o módulo de Young. O material A tem declive maior do que o material B. Qual deles é mais rígido?",
    "options": [
      "B, porque deforma mais para a mesma tensão e, por isso, é mais rígido.",
      "Ambos, porque a rigidez depende apenas da área da secção.",
      "A, porque sofre uma tensão menor para a mesma deformação.",
      "A, porque, para a mesma deformação, suporta uma tensão maior."
    ],
    "correctIndex": 3,
    "explanation": "Um declive maior significa maior módulo de Young, ou seja, para a mesma deformação o material suporta uma tensão maior. O material A é, portanto, mais rígido.",
    "distractorAnalysis": [
      "Está incorreta: deformar mais, para a mesma tensão, corresponde a menor rigidez, e não a maior.",
      "Está incorreta: a rigidez intrínseca é dada por E, uma propriedade do material, e não depende apenas da área da secção.",
      "Está incorreta: com maior declive, o material A suporta uma tensão maior para a mesma deformação, e não menor."
    ],
    "nursingApplication": "Ao comparar dois tecidos sujeitos à mesma tensão, o que interessa é o declive da zona linear (E), porque indica quanto cada tecido se deforma."
  },
  {
    "id": 2268,
    "topicId": 2,
    "question": "Um doente curva o tronco para a frente para levantar um objeto do chão, com o objeto afastado do corpo. Que tipo de deformação predomina na coluna lombar?",
    "options": [
      "Tração",
      "Cisalhamento",
      "Torção",
      "Flexão"
    ],
    "correctIndex": 3,
    "explanation": "Curvar o tronco para a frente, com a carga afastada, cria um momento fletor na coluna lombar, o que corresponde a uma deformação por flexão.",
    "distractorAnalysis": [
      "Está incorreta: a tração exige forças divergentes ao longo do eixo, que não são o efeito predominante de curvar o tronco.",
      "Está incorreta: o cisalhamento resulta de forças tangenciais opostas, e não de um momento que curva a coluna.",
      "Está incorreta: a torção resulta de rodar o tronco em torno do seu eixo, e não de o curvar para a frente."
    ],
    "nursingApplication": "Na formação sobre técnicas de levantamento, o enfermeiro deve orientar o doente e a equipa a manter a carga próxima do tronco, para reduzir o momento fletor sobre a coluna lombar."
  },
  {
    "id": 2269,
    "topicId": 2,
    "question": "Ao torcer as duas extremidades de um pano molhado em sentidos opostos para retirar a água, que tipo de deformação se produz no pano?",
    "options": [
      "Torção",
      "Flexão",
      "Tração",
      "Compressão"
    ],
    "correctIndex": 0,
    "explanation": "Rodar as extremidades em sentidos opostos, em torno do eixo longitudinal do pano, produz torção.",
    "distractorAnalysis": [
      "Está incorreta: a flexão resulta de forças perpendiculares ao eixo, que curvam o pano, e não de uma rotação das extremidades.",
      "Está incorreta: a tração resulta de forças divergentes que afastam as extremidades ao longo do eixo.",
      "Está incorreta: a compressão resulta de forças convergentes ao longo do eixo, que aproximam as extremidades."
    ],
    "nursingApplication": "A mesma lógica explica porque é que a rotação forçada de um membro com o pé fixo pode provocar uma fratura por torção, sobretudo em ossos longos."
  },
  {
    "id": 2270,
    "topicId": 2,
    "question": "Um material só se deforma quando a força ultrapassa 50 N; acima desse valor deforma-se e, ao cessar a força, mantém a deformação. Que tipo de corpo é?",
    "options": [
      "Sólido de Hooke",
      "Corpo viscoso",
      "Sólido indeformável",
      "Corpo plástico"
    ],
    "correctIndex": 3,
    "explanation": "O corpo plástico só acusa deformação a partir de um limiar de tensão e, ao cessar a força, mantém a deformação máxima que atingiu.",
    "distractorAnalysis": [
      "Está incorreta: o sólido de Hooke deforma-se desde a primeira força aplicada e recupera a forma original.",
      "Está incorreta: o corpo viscoso deforma-se sob qualquer tensão, com dependência do tempo, e não tem um limiar de deformação.",
      "Está incorreta: um sólido indeformável nunca se deforma, pelo que não apresentaria qualquer deformação acima de 50 N."
    ],
    "nursingApplication": "Uma tala de material termomoldável, depois de aquecida, só se deforma com força suficiente e mantém a forma moldada ao membro quando a força cessa."
  },
  {
    "id": 2271,
    "topicId": 2,
    "question": "Num doente acamado, a pressão de interface sobre o sacro é a força por unidade de área exercida pelo colchão sobre a pele. Que grandeza física descreve esta pressão?",
    "options": [
      "Constante elástica, em N/m.",
      "Deformação relativa, sem unidades.",
      "Tensão mecânica normal de compressão, em pascal.",
      "Módulo de Young, em pascal."
    ],
    "correctIndex": 2,
    "explanation": "A pressão de interface é uma força normal por unidade de área, ou seja, uma tensão mecânica de compressão, expressa em pascal (N/m²).",
    "distractorAnalysis": [
      "Está incorreta: a constante elástica, em N/m, caracteriza uma mola e não uma força por unidade de área.",
      "Está incorreta: a deformação relativa é um quociente de comprimentos e não uma força por unidade de área.",
      "Está incorreta: o módulo de Young também se exprime em pascal, mas é uma propriedade do material (razão entre tensão e deformação), e não a força por unidade de área que atua sobre a pele."
    ],
    "nursingApplication": "Comparar superfícies de apoio pela pressão de interface, e não apenas pelo peso do doente, ajuda a planear o alívio das zonas de risco, como o sacro e os calcanhares."
  },
  {
    "id": 2272,
    "topicId": 2,
    "question": "A mesma força atua sobre um osso numa zona de secção mais estreita do que o normal. Porque é que a tensão aumenta nessa zona?",
    "options": [
      "Porque a tensão aumenta quando a área aumenta.",
      "Porque σ = F / S: com a mesma força, menor área dá maior tensão.",
      "Porque a força aumenta quando a secção diminui.",
      "Porque o módulo de Young aumenta com a área da secção transversal do osso."
    ],
    "correctIndex": 1,
    "explanation": "A tensão é a força por unidade de área (σ = F / S). Com a mesma força, quanto menor a área, maior a tensão.",
    "distractorAnalysis": [
      "Está incorreta: inverte a relação, pois σ = F / S é inversamente proporcional à área.",
      "Está incorreta: a força aplicada é a mesma; é a área que muda, e a força não aumenta por a secção diminuir.",
      "Está incorreta: o módulo de Young é uma propriedade do material e não depende da área da secção."
    ],
    "nursingApplication": "Em zonas de afilamento de um osso ou de uma tala, a tensão concentra-se numa área menor, o que aumenta o risco de fratura ou de lesão cutânea se a carga não for distribuída."
  },
  {
    "id": 2273,
    "topicId": 2,
    "question": "Uma barra de aço e uma barra de borracha têm a mesma secção e o mesmo comprimento. Qual delas tem maior constante elástica?",
    "options": [
      "A de borracha, porque se deforma mais e, por isso, é mais rígida.",
      "A de aço, porque tem um módulo de Young muito superior.",
      "Ambas, porque a constante elástica depende apenas do comprimento.",
      "A de borracha, porque a constante elástica é inversamente proporcional a E."
    ],
    "correctIndex": 1,
    "explanation": "Com a mesma secção e o mesmo comprimento, a barra com maior módulo de Young deforma-se menos para a mesma força, logo tem maior constante elástica. O aço, com E muito superior, tem maior k.",
    "distractorAnalysis": [
      "Está incorreta: deformar-se mais, para a mesma força, corresponde a menor constante elástica, e não a maior.",
      "Está incorreta: k depende do módulo de Young; com módulos diferentes, as constantes também diferem.",
      "Está incorreta: a constante elástica é diretamente proporcional a E, e não inversamente proporcional."
    ],
    "nursingApplication": "Um osso cortical é muito mais rígido do que um tecido mole com a mesma geometria, o que explica porque é que as cargas se distribuem de forma muito diferente entre estes tecidos."
  },
  {
    "id": 2274,
    "topicId": 2,
    "question": "Um corpo viscoelástico é sujeito a uma carga constante durante vários minutos e, depois, a carga é retirada. Como evolui a sua deformação?",
    "options": [
      "Aumenta com o tempo e recupera apenas com atraso após a retirada da carga.",
      "Mantém-se igual ao início, porque a carga não varia e o tecido já está estabilizado.",
      "Diminui até zero, com recuperação imediata da forma.",
      "Mantém-se nula, porque a carga é constante."
    ],
    "correctIndex": 0,
    "explanation": "Num corpo viscoelástico a deformação depende da tensão e do tempo: com carga constante aumenta com o tempo, e a recuperação, após retirar a carga, é retardada.",
    "distractorAnalysis": [
      "Está incorreta: a deformação viscoelástica depende do tempo de aplicação, pelo que não fica constante com a carga.",
      "Está incorreta: a recuperação imediata é característica do sólido de Hooke, e não do corpo viscoelástico.",
      "Está incorreta: uma deformação nula contraria a própria carga aplicada, que deforma o corpo."
    ],
    "nursingApplication": "Uma pressão mantida durante muito tempo sobre a pele produz uma deformação crescente, pelo que a sua recuperação só ocorre gradualmente depois de a pressão ser aliviada."
  },
  {
    "id": 2275,
    "topicId": 2,
    "question": "Uma mola de compressão de um aparelho de apoio tem constante elástica 2,5 × 10⁴ N/m e é comprimida 2,0 cm, dentro do limite de proporcionalidade. Qual é a força elástica exercida pela mola?",
    "options": [
      "1,25 × 10⁶ N",
      "5,0 × 10² N",
      "8,0 × 10⁻⁷ N",
      "2,5 × 10⁴ N"
    ],
    "correctIndex": 1,
    "explanation": "Com x = 2,0 cm = 0,020 m, a força é F = k · x = 2,5 × 10⁴ N/m × 0,020 m = 5,0 × 10² N.",
    "distractorAnalysis": [
      "Está incorreta: divide a constante pela compressão, em vez de multiplicar, o que dá 1,25 × 10⁶ N.",
      "Está incorreta: divide a compressão pela constante, o que dá 8,0 × 10⁻⁷ N.",
      "Está incorreta: usa apenas a constante, esquecendo a compressão, o que dá 2,5 × 10⁴ N."
    ],
    "nursingApplication": "Ao escolher um aparelho com mola de compressão, a força depende da constante e da compressão efetiva, pelo que a calibração deve ser verificada antes de o usar com o doente."
  },
  {
    "id": 2276,
    "topicId": 2,
    "question": "Uma barra com secção de 1,2 cm² tem uma tensão mecânica de 9,0 × 10⁶ Pa. Qual é a força aplicada?",
    "options": [
      "7,5 × 10¹⁰ N",
      "1,08 × 10¹ N",
      "1,08 × 10⁵ N",
      "1,08 × 10³ N"
    ],
    "correctIndex": 3,
    "explanation": "F = σ · S = 9,0 × 10⁶ Pa × 1,2 × 10⁻⁴ m² = 1,08 × 10³ N.",
    "distractorAnalysis": [
      "Está incorreta: divide a tensão pela área, em vez de multiplicar, o que dá 7,5 × 10¹⁰ N.",
      "Está incorreta: converte a área como 1,2 × 10⁻⁶ m², o que dá 1,08 × 10¹ N.",
      "Está incorreta: converte a área como 1,2 × 10⁻² m², o que dá 1,08 × 10⁵ N."
    ],
    "nursingApplication": "Estimar a força que um osso ou um implante suporta, a partir da tensão e da área de secção, ajuda a perceber a margem de segurança de uma fixação."
  },
  {
    "id": 2277,
    "topicId": 2,
    "question": "Um material sofre uma tensão de 2,0 × 10⁵ Pa e uma deformação relativa de 0,004, dentro do limite de proporcionalidade. Qual é o seu módulo de Young?",
    "options": [
      "5,0 × 10⁷ Pa",
      "8,0 × 10² Pa",
      "2,0 × 10⁻⁸ Pa",
      "5,0 × 10⁸ Pa"
    ],
    "correctIndex": 0,
    "explanation": "Da relação σ = E · ε resulta E = σ / ε = 2,0 × 10⁵ / 0,004 = 5,0 × 10⁷ Pa.",
    "distractorAnalysis": [
      "Está incorreta: multiplica a tensão pela deformação, em vez de dividir, o que dá 8,0 × 10² Pa.",
      "Está incorreta: inverte a relação, calculando ε / σ = 2,0 × 10⁻⁸, em vez de σ / ε.",
      "Está incorreta: lê 0,004 como 0,0004, acrescentando um zero, o que dá 5,0 × 10⁸ Pa."
    ],
    "nursingApplication": "A partir de uma tensão e de uma deformação medidas, é possível calcular o módulo de Young de um tecido, o que permite comparar a sua rigidez entre doentes ou ao longo do tempo."
  },
  {
    "id": 2278,
    "topicId": 2,
    "question": "Uma barra de 1,5 m de comprimento inicial é alongada 3,0 mm, dentro do limite de proporcionalidade. Qual é a sua deformação relativa?",
    "options": [
      "0,0002",
      "0,5",
      "0,002",
      "500"
    ],
    "correctIndex": 2,
    "explanation": "ε = ΔL / L<sub>0</sub>, com ΔL = 3,0 mm = 0,0030 m e L<sub>0</sub> = 1,5 m. Logo ε = 0,0030 / 1,5 = 0,002, sem unidades.",
    "distractorAnalysis": [
      "Está incorreta: divide o alongamento por 15 em vez de por 1,5, o que dá 0,0002.",
      "Está incorreta: inverte a divisão e não converte unidades, calculando 1,5 / 3,0 = 0,5.",
      "Está incorreta: inverte a divisão, calculando L<sub>0</sub> / ΔL com ΔL em metros, o que dá 500."
    ],
    "nursingApplication": "Converter as unidades antes de calcular a deformação relativa evita erros ao comparar medições de alongamento feitas em diferentes instrumentos ou em diferentes sessões de fisioterapia."
  },
  {
    "id": 2279,
    "topicId": 2,
    "question": "Porque é que um espessante usado em doentes com disfagia altera o escoamento de um líquido?",
    "options": [
      "Torna o líquido um sólido de Hooke, que se deforma de forma proporcional.",
      "Torna o líquido indeformável, impedindo qualquer escoamento.",
      "Aumenta a elasticidade, fazendo o líquido recuperar a forma após a deglutição.",
      "Aumenta a viscosidade, tornando o escoamento mais lento sob a mesma tensão."
    ],
    "correctIndex": 3,
    "explanation": "Um espessante aumenta a viscosidade do líquido: o escoamento continua a existir, mas é mais lento para a mesma tensão, e depende do tempo de aplicação.",
    "distractorAnalysis": [
      "Está incorreta: um líquido espessado não passa a comportar-se como sólido de Hooke; continua a escoar, com dependência do tempo.",
      "Está incorreta: um espessante não torna o líquido indeformável; ele continua a deformar-se e a escoar, apenas mais lentamente.",
      "Está incorreta: o espessante aumenta a viscosidade e não a elasticidade; o líquido não recupera a forma original."
    ],
    "nursingApplication": "Ao preparar um líquido espessado, a consistência deve ser verificada segundo o protocolo da instituição, pois a viscosidade depende da dose de espessante e do tempo de mistura."
  },
  {
    "id": 2280,
    "topicId": 2,
    "question": "Uma cicatriz de queimadura tem módulo de Young superior ao da pele vizinha. Sob a mesma tensão, o que se espera?",
    "options": [
      "Menor deformação relativa na cicatriz.",
      "Maior deformação relativa na cicatriz, porque a rigidez aumenta.",
      "Deformação igual nas duas zonas, porque a tensão é a mesma.",
      "Deformação nula na cicatriz, pois o módulo de Young é elevado."
    ],
    "correctIndex": 0,
    "explanation": "Como ε = σ / E, para a mesma tensão um módulo maior dá uma deformação relativa menor. A cicatriz, mais rígida, deforma-se menos do que a pele vizinha.",
    "distractorAnalysis": [
      "Está incorreta: com a mesma tensão, maior rigidez implica menor deformação, e não maior.",
      "Está incorreta: a deformação depende do módulo de Young; zonas com E diferente deformam-se de forma diferente, mesmo com a mesma tensão.",
      "Está incorreta: um módulo elevado, mas finito, reduz a deformação sem a anular; ε = σ / E só seria nula com E infinito."
    ],
    "nursingApplication": "Uma cicatriz mais rígida deforma menos do que a pele vizinha, o que deve ser tido em conta na mobilização articular após uma queimadura."
  },
  {
    "id": 2281,
    "topicId": 2,
    "question": "Qual é o significado da expressão latina «Ut tensio, sic vis», associada à lei de Hooke?",
    "options": [
      "Quanto maior a força, menor a extensão.",
      "A tensão é igual à força em todos os corpos.",
      "Como a extensão, assim a força.",
      "A força é independente da extensão."
    ],
    "correctIndex": 2,
    "explanation": "«Ut tensio, sic vis» significa «como a extensão, assim a força»: a força elástica é proporcional à extensão do corpo.",
    "distractorAnalysis": [
      "Está incorreta: inverte a proporcionalidade, pois na lei de Hooke a força cresce com a extensão.",
      "Está incorreta: a tensão é força por unidade de área, e não é igual à força em todos os corpos.",
      "Está incorreta: contradiz a lei de Hooke, que relaciona diretamente a força com a extensão."
    ],
    "nursingApplication": "Esta proporcionalidade simples é a base da leitura de um dinamómetro de mola usado em reabilitação, em que a força indicada cresce com a extensão imposta."
  },
  {
    "id": 2282,
    "topicId": 2,
    "question": "Um cilindro de borracha é esticado ao longo do seu eixo. Que acontece ao seu diâmetro?",
    "options": [
      "Aumenta, porque o volume se conserva por dilatação.",
      "Diminui, por efeito de Poisson.",
      "Mantém-se, pois só o comprimento varia.",
      "Aumenta, porque a tração dilata todas as direções."
    ],
    "correctIndex": 1,
    "explanation": "Ao ser esticado numa direção, o corpo contrai-se nas direções perpendiculares: é o efeito de Poisson, pelo que o diâmetro diminui.",
    "distractorAnalysis": [
      "Está incorreta: se o volume se mantém e o comprimento aumenta, a secção tem de diminuir; não pode aumentar.",
      "Está incorreta: o diâmetro varia com a tração, pelo efeito de Poisson, e não se mantém.",
      "Está incorreta: a tração contrai as direções perpendiculares, e não dilata todas as direções."
    ],
    "nursingApplication": "Ao esticar uma ligadura elástica para a aplicar num membro, a sua largura diminui, pelo que a sobreposição entre voltas deve ser ajustada para manter a cobertura pretendida."
  },
  {
    "id": 2283,
    "topicId": 2,
    "question": "No modelo de sólido indeformável (sólido de Euclides), o que acontece quando se aplica uma força?",
    "options": [
      "Deformação proporcional à força e reversível, desde que a tensão não ultrapasse o limite de proporcionalidade.",
      "Deformação dependente do tempo, sem recuperação.",
      "Deformação permanente acima de um limiar.",
      "Nenhuma deformação, apenas eventual movimento do corpo como um todo."
    ],
    "correctIndex": 3,
    "explanation": "No sólido indeformável a distância entre partículas não se altera, pelo que não há deformação; o corpo pode, quando muito, mover-se como um todo.",
    "distractorAnalysis": [
      "Está incorreta: é a descrição do sólido de Hooke, que se deforma e recupera a forma dentro do limite de proporcionalidade.",
      "Está incorreta: é a descrição do corpo viscoso, cuja deformação aumenta com o tempo e não é restituída.",
      "Está incorreta: é a descrição do corpo plástico, que mantém a deformação quando a tensão ultrapassa um limiar."
    ],
    "nursingApplication": "O modelo indeformável simplifica a análise do equilíbrio de um doente ou de uma tala, desde que as deformações reais dos tecidos possam ser desprezadas."
  },
  {
    "id": 2284,
    "topicId": 2,
    "question": "Uma barra de 0,80 m de comprimento inicial tem módulo de Young E = 1,0 × 10⁹ Pa e secção de 2,0 × 10⁻⁴ m². Sob uma força de 4,0 × 10³ N, dentro do limite de proporcionalidade, qual é o seu alongamento?",
    "options": [
      "0,016 cm",
      "1,6 m",
      "0,0016 m",
      "1,6 cm"
    ],
    "correctIndex": 3,
    "explanation": "σ = F / S = 2,0 × 10⁷ Pa; ε = σ / E = 0,020; ΔL = ε · L<sub>0</sub> = 0,020 × 0,80 m = 0,016 m = 1,6 cm.",
    "distractorAnalysis": [
      "Está incorreta: troca a unidade, pois 0,016 m equivalem a 1,6 cm e não a 0,016 cm.",
      "Está incorreta: confunde centímetros com metros, o que multiplica o resultado por 100.",
      "Está incorreta: usa L<sub>0</sub> = 0,080 m em vez de 0,80 m, o que dá 0,020 × 0,080 = 0,0016 m."
    ],
    "nursingApplication": "Estimar o alongamento de uma estrutura a partir da força e das suas dimensões permite prever a sua resposta antes de a sujeitar a uma carga real."
  },
  {
    "id": 2285,
    "topicId": 2,
    "question": "Um tendão tem módulo de Young E = 1,2 × 10⁹ Pa e secção de 0,40 cm². Sofre uma deformação relativa de 0,01, dentro do limite de proporcionalidade. Qual é a força que o tendão suporta?",
    "options": [
      "3,0 × 10¹¹ N",
      "4,8 N",
      "4,8 × 10⁴ N",
      "4,8 × 10² N"
    ],
    "correctIndex": 3,
    "explanation": "σ = E · ε = 1,2 × 10⁹ × 0,01 = 1,2 × 10⁷ Pa. Com S = 0,40 cm² = 4,0 × 10⁻⁵ m², F = σ · S = 4,8 × 10² N.",
    "distractorAnalysis": [
      "Está incorreta: divide a tensão pela área, em vez de multiplicar, o que dá 3,0 × 10¹¹ N.",
      "Está incorreta: converte a área como 4,0 × 10⁻⁷ m², o que dá 4,8 N.",
      "Está incorreta: converte a área como 4,0 × 10⁻³ m², o que dá 4,8 × 10⁴ N."
    ],
    "nursingApplication": "Estimar a força suportada por um tendão a partir da deformação medida ajuda a perceber a carga real de um exercício de fortalecimento."
  },
  {
    "id": 2286,
    "topicId": 2,
    "question": "Porque é que um tendão, depois de carga prolongada, demora mais tempo a recuperar o comprimento inicial do que uma mola sujeita à mesma carga?",
    "options": [
      "Porque é um sólido de Hooke, que recupera de forma proporcional ao tempo de carga.",
      "Porque é um corpo plástico, que nunca recupera.",
      "Porque é um corpo viscoso, que recupera a forma original com o tempo.",
      "Porque é viscoelástico: a recuperação é retardada e depende do tempo de carga."
    ],
    "correctIndex": 3,
    "explanation": "Os tecidos viscoelásticos, como o tendão, têm recuperação retardada, que depende da duração e da intensidade da carga, ao contrário da mola de Hooke, que recupera de imediato.",
    "distractorAnalysis": [
      "Está incorreta: um sólido de Hooke recupera de imediato e de forma proporcional à força, sem depender do tempo de carga.",
      "Está incorreta: um corpo plástico mantém a deformação, mas o tendão recupera, ainda que com atraso.",
      "Está incorreta: um corpo viscoso não recupera a forma original, por isso não descreve o tendão, que recupera com atraso."
    ],
    "nursingApplication": "Após esforços prolongados, o tendão precisa de períodos de repouso antes de voltar a ser solicitado com a mesma intensidade, o que deve ser planeado no programa de reabilitação."
  },
  {
    "id": 2287,
    "topicId": 2,
    "question": "Um doente acamado tem um peso que se distribui por uma certa área de contacto com o colchão. Se a área de contacto for reduzida para metade, mantendo o mesmo peso, o que acontece à pressão de interface?",
    "options": [
      "Reduz-se para metade.",
      "Mantém-se, porque a força é a mesma.",
      "Quadruplica.",
      "Duplica."
    ],
    "correctIndex": 3,
    "explanation": "A pressão de interface é p = F / S. Com a mesma força e metade da área, a pressão duplica.",
    "distractorAnalysis": [
      "Está incorreta: a pressão é inversamente proporcional à área; reduzir a área aumenta a pressão, e não a reduz.",
      "Está incorreta: ignora a área, que é o denominador de p = F / S.",
      "Está incorreta: a relação é inversa e linear, pelo que o fator é 2 e não 4."
    ],
    "nursingApplication": "Colchões de distribuição de pressão aumentam a área de contacto com o corpo, reduzindo a pressão de interface sobre as zonas de risco, como o sacro e os calcanhares."
  },
  {
    "id": 2288,
    "topicId": 2,
    "question": "Uma força de 300 N distribui-se por uma área de contacto de 0,02 m². Qual é a pressão de interface?",
    "options": [
      "6,0 Pa",
      "1,5 × 10² Pa",
      "1,5 × 10⁴ Pa",
      "1,5 × 10³ Pa"
    ],
    "correctIndex": 2,
    "explanation": "p = F / S = 300 N / 0,02 m² = 1,5 × 10⁴ Pa.",
    "distractorAnalysis": [
      "Está incorreta: multiplica a força pela área, em vez de dividir, o que dá 6,0 Pa.",
      "Está incorreta: lê 0,02 m² como 2 m², o que dá 1,5 × 10² Pa.",
      "Está incorreta: lê 0,02 m² como 0,2 m², deslocando a vírgula, o que dá 1,5 × 10³ Pa."
    ],
    "nursingApplication": "Calcular a pressão de interface a partir da força e da área de contacto permite comparar superfícies de apoio e escolher a superfície que melhor distribui a pressão sobre as zonas de risco."
  },
  {
    "id": 2289,
    "topicId": 2,
    "question": "Uma banda elástica alonga 4,0 cm quando puxada com 6,0 N. Dentro do limite de proporcionalidade, quanto alonga quando puxada com 15 N?",
    "options": [
      "1,6 cm",
      "2,5 cm",
      "10 cm",
      "13 cm"
    ],
    "correctIndex": 2,
    "explanation": "k = F / x = 6,0 N / 0,040 m = 150 N/m. Com 15 N, x = F / k = 15 / 150 = 0,10 m = 10 cm (o alongamento é proporcional à força: 4,0 × 15 / 6,0).",
    "distractorAnalysis": [
      "Está incorreta: inverte a razão entre as forças, calculando 4,0 × 6,0 / 15 = 1,6 cm.",
      "Está incorreta: divide apenas as forças, 15 / 6,0 = 2,5, esquecendo o alongamento inicial de 4,0 cm.",
      "Está incorreta: soma a diferença de forças ao alongamento, como se cada newton desse 1 cm: 4,0 + 9 = 13 cm."
    ],
    "nursingApplication": "Dentro da zona linear, a resistência de uma banda elástica de reabilitação cresce na proporção do alongamento, o que permite graduar a carga de um exercício."
  },
  {
    "id": 2290,
    "topicId": 2,
    "question": "Um osso tem módulo de Young de 1,5 × 10¹⁰ Pa e suporta uma tensão de 3,0 × 10⁶ Pa, dentro do limite de proporcionalidade. Qual é a deformação relativa?",
    "options": [
      "5,0 × 10³",
      "2,0 × 10⁻⁵",
      "2,0 × 10⁻⁴",
      "3,0 × 10⁻⁴"
    ],
    "correctIndex": 2,
    "explanation": "ε = σ / E = 3,0 × 10⁶ / 1,5 × 10¹⁰ = 2,0 × 10⁻⁴, sem unidades.",
    "distractorAnalysis": [
      "Está incorreta: inverte a relação, calculando E / σ = 5,0 × 10³, em vez de σ / E.",
      "Está incorreta: lê o módulo de Young como 1,5 × 10¹¹ Pa, o que dá 2,0 × 10⁻⁵.",
      "Está incorreta: considera só a potência de dez do módulo, esquecendo o fator 1,5, o que dá 3,0 × 10⁶ / 10¹⁰ = 3,0 × 10⁻⁴."
    ],
    "nursingApplication": "Conhecer o módulo de Young e a tensão a que um osso está sujeito permite estimar a sua deformação, o que ajuda a interpretar a resposta a uma carga clínica."
  },
  {
    "id": 2291,
    "topicId": 2,
    "question": "Uma barra com secção de 1,0 × 10⁻⁴ m² e comprimento inicial de 1,0 m alonga 1,0 mm quando sujeita a uma força de 200 N, dentro do limite de proporcionalidade. Qual é o seu módulo de Young?",
    "options": [
      "2,0 × 10⁶ Pa",
      "5,0 × 10⁻¹⁰ Pa",
      "2,0 × 10⁹ Pa",
      "2,0 × 10¹² Pa"
    ],
    "correctIndex": 2,
    "explanation": "σ = F / S = 200 / 1,0 × 10⁻⁴ = 2,0 × 10⁶ Pa; ε = ΔL / L<sub>0</sub> = 1,0 × 10⁻³ / 1,0 = 1,0 × 10⁻³; logo E = σ / ε = 2,0 × 10⁹ Pa.",
    "distractorAnalysis": [
      "Está incorreta: usa a tensão como se fosse o módulo de Young, sem a dividir pela deformação relativa, o que dá 2,0 × 10⁶ Pa.",
      "Está incorreta: inverte a relação, calculando ε / σ, o que dá 5,0 × 10⁻¹⁰ Pa.",
      "Está incorreta: converte 1 mm como 1,0 × 10⁻⁶ m no cálculo de ε, o que dá 2,0 × 10¹² Pa."
    ],
    "nursingApplication": "Os ensaios que determinam o módulo de Young de um material, como os de implantes ou de suturas, combinam a força aplicada, a área e o alongamento medido."
  },
  {
    "id": 2292,
    "topicId": 2,
    "question": "Qual é a grandeza que constitui a constante de proporcionalidade entre a tensão mecânica e a deformação relativa, na zona de proporcionalidade?",
    "options": [
      "Módulo de Young, E",
      "Constante elástica, k",
      "Tensão mecânica, σ",
      "Deformação relativa, ε"
    ],
    "correctIndex": 0,
    "explanation": "Na zona de proporcionalidade, σ = E · ε. O módulo de Young é a constante de proporcionalidade, característica de cada material.",
    "distractorAnalysis": [
      "Está incorreta: a constante elástica k relaciona força e alongamento, e depende das dimensões do corpo, não sendo a constante entre tensão e deformação.",
      "Está incorreta: a tensão é uma das grandezas relacionadas pela constante, e não a própria constante.",
      "Está incorreta: a deformação relativa é a outra grandeza relacionada pela constante, e não a constante."
    ],
    "nursingApplication": "O módulo de Young é uma propriedade do material que se pode comparar entre tecidos, independentemente das dimensões da amostra analisada."
  },
  {
    "id": 2293,
    "topicId": 2,
    "question": "Qual é a expressão da força restauradora de um sólido de Hooke, quando deslocado de x a partir da posição de equilíbrio?",
    "options": [
      "F = k / x",
      "F = k · x² / 2",
      "F = x / k",
      "F = −k · x"
    ],
    "correctIndex": 3,
    "explanation": "A força restauradora é proporcional ao deslocamento e oposta a ele, F = −k · x, e tende a repor o corpo na posição de equilíbrio.",
    "distractorAnalysis": [
      "Está incorreta: inverte a relação, pois a força cresce com o deslocamento e não diminui.",
      "Está incorreta: k · x² / 2 é a energia potencial elástica armazenada, e não a força, que na lei de Hooke é linear em x.",
      "Está incorreta: dividir x por k daria uma força que diminui quando a mola é mais rígida, o que contraria a lei de Hooke."
    ],
    "nursingApplication": "A força que uma órtese elástica exerce sobre o membro tende a repor a posição inicial, o que deve ser considerado na escolha da resistência adequada ao doente."
  },
  {
    "id": 2294,
    "topicId": 2,
    "question": "Um segmento de tecido com 25 cm de comprimento inicial alonga 5 mm. Qual é a sua deformação relativa?",
    "options": [
      "0,02",
      "0,2",
      "0,002",
      "5"
    ],
    "correctIndex": 0,
    "explanation": "ε = ΔL / L<sub>0</sub> = 5 mm / 25 cm = 0,005 m / 0,25 m = 0,02, sem unidades.",
    "distractorAnalysis": [
      "Está incorreta: não converte as unidades, dividindo 5 mm por 25 cm e obtendo 0,2.",
      "Está incorreta: divide o alongamento em metros por 2,5 m em vez de 0,25 m, o que dá 0,002.",
      "Está incorreta: dá apenas o alongamento em milímetros, sem o dividir pelo comprimento inicial."
    ],
    "nursingApplication": "Medir o alongamento de um tecido com uma régua e expressá-lo em relação ao comprimento inicial permite comparar a elasticidade do mesmo tecido em momentos diferentes."
  },
  {
    "id": 2295,
    "topicId": 2,
    "question": "Uma carga de 0,50 kg suspensa de uma mola, em equilíbrio, alonga-a 4,9 cm, dentro do limite de proporcionalidade. Qual é a constante elástica da mola? (g = 9,8 m/s²)",
    "options": [
      "100 N/m",
      "10,2 N/m",
      "1,0 N/m",
      "0,010 N/m"
    ],
    "correctIndex": 0,
    "explanation": "Em equilíbrio, a força elástica iguala o peso: P = m · g = 0,50 × 9,8 = 4,9 N. Logo k = F / x = 4,9 N / 0,049 m = 100 N/m.",
    "distractorAnalysis": [
      "Está incorreta: usa a massa como se fosse força, esquecendo g, e calcula 0,50 / 0,049 = 10,2 N/m.",
      "Está incorreta: não converte 4,9 cm para metros, calculando 4,9 / 4,9 = 1,0 N/m.",
      "Está incorreta: inverte a relação, calculando x / F = 0,049 / 4,9 = 0,010."
    ],
    "nursingApplication": "Para verificar a calibração de um dinamómetro de mola, pode suspender-se uma carga de massa conhecida e comparar a leitura com o peso calculado com g = 9,8 m/s²."
  },
  {
    "id": 2296,
    "topicId": 2,
    "question": "Qual é a diferença essencial entre um corpo viscoelástico e um corpo plastoviscoelástico?",
    "options": [
      "O viscoelástico recupera com atraso; o plastoviscoelástico fica deformado acima de um limiar.",
      "O viscoelástico nunca recupera; o plastoviscoelástico recupera sempre.",
      "Não há diferença, pois ambos têm uma tensão mínima para fluir e recuperam com atraso após a carga.",
      "O viscoelástico tem tensão mínima para fluir; o plastoviscoelástico não tem."
    ],
    "correctIndex": 0,
    "explanation": "O corpo viscoelástico recupera a forma com atraso, sem limiar de escoamento. O plastoviscoelástico comporta-se como elástico abaixo de uma tensão mínima e, acima dela, flui com deformação permanente.",
    "distractorAnalysis": [
      "Está incorreta: inverte as duas características, pois o viscoelástico recupera, ainda que com atraso, e o plastoviscoelástico pode ficar com deformação permanente.",
      "Está incorreta: só o plastoviscoelástico tem uma tensão mínima para fluir; o viscoelástico não tem limiar de escoamento.",
      "Está incorreta: inverte a atribuição da tensão mínima para fluir, que é característica do plastoviscoelástico."
    ],
    "nursingApplication": "Uma almofada de espuma de posicionamento recupera a forma com atraso depois de retirado o apoio, ao passo que uma pasta espalhada sobre a pele fica com a forma que lhe foi dada."
  },
  {
    "id": 2297,
    "topicId": 2,
    "question": "Porque é que a mudança regular de posição é recomendada num doente acamado?",
    "options": [
      "A deformação de um tecido sob carga constante diminui com o tempo, pelo que a mudança de posição é desnecessária.",
      "A carga desaparece com o tempo, pelo que o tecido deixa de se deformar.",
      "A deformação viscoelástica aumenta com o tempo; aliviar a pressão permite recuperar.",
      "A elasticidade é perfeita, pelo que o tecido recupera de imediato, sem necessidade de alívio."
    ],
    "correctIndex": 2,
    "explanation": "Num tecido viscoelástico, a deformação sob carga constante aumenta com o tempo, e a recuperação só ocorre quando a pressão é aliviada. Além disso, a pressão e a deformação mantidas reduzem a perfusão local e podem causar isquemia; aliviar a carga permite a reperfusão e a recuperação do tecido. Por isso, o reposicionamento deve ser planeado.",
    "distractorAnalysis": [
      "Está incorreta: sob carga constante, a deformação dos tecidos viscoelásticos aumenta com o tempo, e não diminui.",
      "Está incorreta: a carga mantém-se enquanto o doente estiver apoiado, pelo que não desaparece com o tempo.",
      "Está incorreta: nenhum tecido real tem elasticidade perfeita; a recuperação é retardada, pelo que o alívio é necessário."
    ],
    "nursingApplication": "O reposicionamento de doentes acamados deve ser individualizado, de acordo com a avaliação da pele e do risco de lesão por pressão, e não fixado por um intervalo rígido."
  },
  {
    "id": 2298,
    "topicId": 2,
    "question": "Duas barras têm o mesmo material e a mesma secção. Se o comprimento inicial de uma barra for triplicado, como varia a sua constante elástica?",
    "options": [
      "Triplica, aumentando a rigidez do corpo.",
      "Mantém-se.",
      "Diminui para um terço.",
      "Diminui para um nono."
    ],
    "correctIndex": 2,
    "explanation": "Com o mesmo material e a mesma secção, uma barra três vezes mais comprida alonga-se o triplo para a mesma força, pelo que a constante elástica fica dividida por três.",
    "distractorAnalysis": [
      "Está incorreta: triplicar k ignora que a constante elástica é inversamente proporcional ao comprimento inicial.",
      "Está incorreta: a constante depende do comprimento, pelo que não se mantém quando o comprimento muda.",
      "Está incorreta: a dependência de k em L<sub>0</sub> é inversa e linear, pelo que o fator é 1/3 e não 1/9."
    ],
    "nursingApplication": "Uma banda elástica de reabilitação do mesmo material e espessura, mas três vezes mais comprida, alonga três vezes mais com a mesma força, ou seja, oferece menos resistência."
  },
  {
    "id": 2299,
    "topicId": 2,
    "question": "Num ensaio com uma mola, a força aplicada é representada em função do alongamento, e obtém-se uma reta. Que grandeza corresponde ao declive desta reta?",
    "options": [
      "E, o módulo de Young, em Pa",
      "k, constante elástica, em N/m",
      "σ, a tensão mecânica, em Pa",
      "ε, a deformação relativa, sem unidades"
    ],
    "correctIndex": 1,
    "explanation": "Como F = k · x, o declive da reta F(x) é a constante elástica k, expressa em N/m.",
    "distractorAnalysis": [
      "Está incorreta: o módulo de Young caracteriza a relação entre tensão e deformação relativa, e não a relação entre força e alongamento.",
      "Está incorreta: a tensão é uma força por unidade de área, e não o declive da reta de força em função do alongamento.",
      "Está incorreta: a deformação relativa é um quociente de comprimentos, e não um declive entre força e alongamento."
    ],
    "nursingApplication": "A constante elástica obtida a partir deste declive permite calibrar um dinamómetro de mola antes de o usar para medir a força de um exercício."
  },
  {
    "id": 2300,
    "topicId": 2,
    "question": "Uma compressão de 120 N atua sobre uma área de contacto de 4,0 cm². Qual é a tensão de compressão?",
    "options": [
      "4,8 × 10⁻² Pa",
      "3,0 × 10⁵ Pa",
      "3,0 × 10³ Pa",
      "3,0 × 10⁷ Pa"
    ],
    "correctIndex": 1,
    "explanation": "σ = F / S, com S = 4,0 cm² = 4,0 × 10⁻⁴ m². Logo σ = 120 / (4,0 × 10⁻⁴) = 3,0 × 10⁵ Pa.",
    "distractorAnalysis": [
      "Está incorreta: multiplica a força pela área, em vez de dividir, o que dá 4,8 × 10⁻² Pa.",
      "Está incorreta: converte 1 cm² como 10⁻² m², o que dá 3,0 × 10³ Pa.",
      "Está incorreta: converte 1 cm² como 10⁻⁶ m², o que dá 3,0 × 10⁷ Pa."
    ],
    "nursingApplication": "Converter corretamente a área de contacto para metros quadrados é necessário para expressar em pascal a pressão exercida sobre a pele por um aparelho ou por um apoio."
  },
  {
    "id": 2301,
    "topicId": 2,
    "question": "Qual é o principal constituinte da fase mineral do osso?",
    "options": [
      "Hidroxiapatite, um fosfato de cálcio cristalino",
      "Colagénio tipo I, uma proteína fibrosa",
      "Elastina, uma proteína elástica",
      "Queratina, uma proteína estrutural da pele"
    ],
    "correctIndex": 0,
    "explanation": "A fase mineral do osso é constituída sobretudo por cristais de hidroxiapatite (fosfato de cálcio), que conferem rigidez e resistência à compressão.",
    "distractorAnalysis": [
      "Está incorreta: o colagénio tipo I é o principal componente da matriz orgânica, e não da fase mineral.",
      "Está incorreta: a elastina é abundante nas artérias elásticas e não constitui a fase mineral do osso.",
      "Está incorreta: a queratina forma a epiderme e os seus anexos, e não faz parte da fase mineral do osso."
    ],
    "nursingApplication": "Saber que o cálcio do osso está na hidroxiapatite ajuda a perceber porque a ingestão de cálcio e vitamina D é incluída na prevenção da perda de massa óssea em utentes idosos."
  },
  {
    "id": 2302,
    "topicId": 2,
    "question": "Num osso, a quantidade de colagénio tipo I diminui, mantendo-se a fase mineral. Que consequência é expectável?",
    "options": [
      "Osso mais flexível e menos propenso a fraturar",
      "Menor resistência à compressão, por perda de hidroxiapatite",
      "Osso mais frágil, com menor resistência à tração",
      "Maior resistência à tração, por maior proporção mineral"
    ],
    "correctIndex": 2,
    "explanation": "O colagénio tipo I confere resistência à tração e evita a fragilidade; sem ele, o osso mineralizado torna-se rígido mas quebradiço.",
    "distractorAnalysis": [
      "Está incorreta: menos colagénio retira ao osso a capacidade de absorver tração, o que o torna quebradiço e mais propenso a fraturar, e não menos.",
      "Está incorreta: a fase mineral manteve-se, pelo que a resistência à compressão, que depende da hidroxiapatite, não diminui por esta razão.",
      "Está incorreta: uma maior proporção mineral relativa torna o osso mais rígido mas mais frágil, e não mais resistente à tração."
    ],
    "nursingApplication": "Compreender o papel do colagénio ajuda a explicar a fragilidade óssea observada em utentes com doenças que alteram o colagénio, como a osteogénese imperfeita."
  },
  {
    "id": 2303,
    "topicId": 2,
    "question": "Que percentagem aproximada do osso corresponde à fase mineral?",
    "options": [
      "≈ 22 %",
      "≈ 90 %",
      "≈ 69 %",
      "≈ 9 %"
    ],
    "correctIndex": 2,
    "explanation": "O osso tem cerca de 69 % de fase mineral (hidroxiapatite) e cerca de 22 % de matriz orgânica, dos quais cerca de 90 % são colagénio tipo I.",
    "distractorAnalysis": [
      "Está incorreta: 22 % é o valor aproximado da matriz orgânica, e não o da fase mineral.",
      "Está incorreta: 90 % é a fração do colagénio tipo I dentro da matriz orgânica, e não a percentagem de fase mineral no osso.",
      "Está incorreta: 9 % é o valor aproximado que sobra depois de somar a fase mineral e a matriz orgânica."
    ],
    "nursingApplication": "Estas proporções permitem interpretar a densitometria óssea, que estima sobretudo o conteúdo mineral do osso de um utente em risco de osteoporose."
  },
  {
    "id": 2304,
    "topicId": 2,
    "question": "Que propriedade mecânica justifica a presença de colagénio tipo I no osso e nos tendões?",
    "options": [
      "Resistência à tração",
      "Resistência à compressão",
      "Comportamento de sólido indeformável",
      "Recuperação total e imediata da forma, sem deformação residual"
    ],
    "correctIndex": 0,
    "explanation": "O colagénio tipo I, disposto em feixes, resiste bem à tração, e é o mesmo tipo que forma os tendões, sujeitos sobretudo a forças de tração.",
    "distractorAnalysis": [
      "Está incorreta: a resistência à compressão do osso deve-se sobretudo à fase mineral, e não ao colagénio.",
      "Está incorreta: nenhum tecido biológico é um sólido indeformável, que é apenas um modelo teórico.",
      "Está incorreta: os tecidos biológicos são viscoelásticos, pelo que a recuperação da forma não é imediata; além disso, esta propriedade não explica a função do colagénio, que é resistir à tração."
    ],
    "nursingApplication": "Esta propriedade explica porque, após a reparação de um tendão, a mobilização é progressiva, já que forças de tração excessivas podem romper as fibras de colagénio em cicatrização."
  },
  {
    "id": 2305,
    "topicId": 2,
    "question": "Num osso longo, como se designa a região de osso compacto que rodeia a cavidade medular?",
    "options": [
      "Epífise",
      "Diáfise",
      "Cartilagem articular",
      "Plano neutro"
    ],
    "correctIndex": 1,
    "explanation": "A diáfise é o corpo do osso longo, de osso compacto à volta da cavidade medular; as epífises são as extremidades.",
    "distractorAnalysis": [
      "Está incorreta: as epífises são as extremidades do osso longo, formadas por osso esponjoso com fina camada compacta.",
      "Está incorreta: a cartilagem articular reveste as superfícies articulares e não rodeia a cavidade medular.",
      "Está incorreta: o plano neutro é uma região de tensão normal nula na flexão, e não uma parte anatómica do osso."
    ],
    "nursingApplication": "Identificar a diáfise é útil na descrição de fraturas do fémur ou da tíbia, frequentemente classificadas conforme o terço da diáfise atingido."
  },
  {
    "id": 2306,
    "topicId": 2,
    "question": "Como são constituídas as epífises dos ossos longos?",
    "options": [
      "Por osso compacto espesso à volta de uma cavidade medular",
      "Por duas lâminas de osso compacto com osso esponjoso entre elas",
      "Apenas por osso esponjoso, sem qualquer revestimento",
      "Por osso esponjoso revestido por uma fina camada de osso compacto"
    ],
    "correctIndex": 3,
    "explanation": "As epífises, extremidades dos ossos longos, têm osso esponjoso por dentro e uma fina camada de osso compacto por fora.",
    "distractorAnalysis": [
      "Está incorreta: essa descrição corresponde à diáfise, e não às epífises.",
      "Está incorreta: essa descrição corresponde aos ossos planos, como os do crânio.",
      "Está incorreta: as epífises têm uma fina camada compacta a revesti-las, pelo que não são apenas esponjosas."
    ],
    "nursingApplication": "A estrutura esponjosa das epífises explica porque as fraturas perto das articulações, como a do colo do fémur em idosos, são frequentes quando há perda de trabéculas."
  },
  {
    "id": 2307,
    "topicId": 2,
    "question": "Qual das estruturas descreve os ossos planos, como os do crânio?",
    "options": [
      "Duas lâminas de osso compacto com osso esponjoso entre elas",
      "Um tubo de osso compacto com cavidade medular central",
      "Apenas osso esponjoso, sem lâminas compactas",
      "Apenas osso compacto maciço, sem osso esponjoso"
    ],
    "correctIndex": 0,
    "explanation": "Os ossos planos têm duas lâminas de osso compacto com osso esponjoso entre elas, o que dá leveza com boa resistência.",
    "distractorAnalysis": [
      "Está incorreta: essa é a estrutura da diáfise dos ossos longos, e não a dos ossos planos.",
      "Está incorreta: os ossos planos têm osso esponjoso entre as lâminas compactas, e não são apenas esponjosos.",
      "Está incorreta: os ossos planos têm osso esponjoso entre duas lâminas compactas, e não são só compactos."
    ],
    "nursingApplication": "Esta estrutura em sanduíche ajuda a perceber como os ossos do crânio absorvem parte do impacto num traumatismo craniano de um utente."
  },
  {
    "id": 2308,
    "topicId": 2,
    "question": "Dois cilindros têm a mesma quantidade do mesmo material: um é maciço e o outro é um tubo oco de maior diâmetro. Qual resiste melhor à flexão?",
    "options": [
      "O cilindro maciço, porque tem também material no centro do corpo",
      "Resistem igualmente, porque têm a mesma quantidade de material",
      "Resistem igualmente, porque têm o mesmo módulo de Young",
      "O tubo oco, porque o material está mais longe do eixo"
    ],
    "correctIndex": 3,
    "explanation": "Para a mesma quantidade de material, o tubo oco resiste mais à flexão do que o cilindro maciço, porque a periferia suporta as maiores tensões.",
    "distractorAnalysis": [
      "Está incorreta: na flexão o centro está perto do plano neutro, onde a tensão é nula, pelo que o material central pouco contribui.",
      "Está incorreta: a resistência à flexão depende também de como o material está distribuído em relação ao eixo, e não só da quantidade.",
      "Está incorreta: o módulo de Young é igual, mas o tubo tem melhor distribuição do material e, por isso, maior resistência à flexão."
    ],
    "nursingApplication": "Esta ideia explica o uso de canas de apoio de tubo oco, leves mas resistentes à flexão, em utentes com dificuldade de marcha."
  },
  {
    "id": 2309,
    "topicId": 2,
    "question": "Porque é que o material do centro de um osso longo contribui pouco para a resistência à flexão e à torção?",
    "options": [
      "Porque as tensões são máximas na periferia e muito baixas junto do eixo",
      "Porque as forças só atuam na superfície e nunca chegam ao centro",
      "Porque o centro suporta a carga em compressão e deixa de contribuir quando a carga é de tração",
      "Porque a tensão é igual em toda a secção e o centro é dispensável"
    ],
    "correctIndex": 0,
    "explanation": "Na flexão e na torção, as tensões são máximas na periferia e baixas junto do eixo; por isso, as camadas periféricas dão a maior parte da resistência.",
    "distractorAnalysis": [
      "Está incorreta: as forças são transmitidas por todo o material; o que acontece é que as tensões são menores junto do eixo.",
      "Está incorreta: numa carga axial o centro contribui tanto em compressão como em tração; na flexão e na torção, contribui pouco porque a tensão junto do eixo é muito baixa, seja qual for o sentido da carga.",
      "Está incorreta: a tensão não é uniforme na flexão e na torção, e é por não o ser que a periferia é a zona mais importante."
    ],
    "nursingApplication": "Compreender a distribuição das tensões ajuda a enfermagem a perceber porque um osso cortical fino da diáfise pode fraturar por torção durante uma queda com rotação do membro."
  },
  {
    "id": 2310,
    "topicId": 2,
    "question": "Porque é vantajoso para os vertebrados terem ossos longos tubulares?",
    "options": [
      "Porque dão leveza e boa resistência à flexão e à torção",
      "Porque aumentam o módulo de Young do osso compacto",
      "Porque anulam as tensões na periferia do osso",
      "Porque dispensam a fase mineral e tornam o osso mais leve"
    ],
    "correctIndex": 0,
    "explanation": "A estrutura tubular coloca o material onde as tensões são maiores e poupa massa no centro, o que dá resistência à flexão e à torção com menor peso.",
    "distractorAnalysis": [
      "Está incorreta: o módulo de Young depende do material e não da forma tubular do osso.",
      "Está incorreta: as tensões de flexão e de torção são máximas na periferia; a forma tubular coloca material nessa zona, mas não as anula.",
      "Está incorreta: a fase mineral é essencial para a rigidez e a resistência à compressão do osso, pelo que não é dispensada."
    ],
    "nursingApplication": "O mesmo princípio de leveza com resistência é aproveitado no desenho de andarilhos e canadianas de tubo oco, que o utente consegue mover sem esforço excessivo."
  },
  {
    "id": 2311,
    "topicId": 2,
    "question": "Amostras de osso cortical da diáfise têm módulo de Young e resistência maiores quando a carga é aplicada ao longo do eixo do osso do que quando é aplicada perpendicularmente a ele. Que propriedade descreve este comportamento?",
    "options": [
      "Isotropia",
      "Superelasticidade",
      "Plasticidade perfeita",
      "Anisotropia"
    ],
    "correctIndex": 3,
    "explanation": "O osso é heterogéneo e anisotrópico: as suas propriedades mecânicas variam com a direção em que a carga é aplicada.",
    "distractorAnalysis": [
      "Está incorreta: um material isotrópico comportar-se-ia da mesma forma em todas as direções, o que não acontece no osso.",
      "Está incorreta: a superelasticidade não é uma propriedade do osso, que não recupera grandes deformações.",
      "Está incorreta: a plasticidade refere-se à deformação permanente acima de uma tensão limiar, e não à dependência da direção da carga."
    ],
    "nursingApplication": "A anisotropia é uma das razões pelas quais o osso cortical, orientado segundo o eixo, suporta bem as cargas da marcha e é mais vulnerável a cargas noutras direções, como numa queda de lado."
  },
  {
    "id": 2312,
    "topicId": 2,
    "question": "Qual é a função dos osteócitos no osso?",
    "options": [
      "Formar osso novo orientado segundo as forças",
      "Detetar as cargas mecânicas (mecanotransdução)",
      "Reabsorver o osso",
      "Produzir fibras elásticas na matriz óssea"
    ],
    "correctIndex": 1,
    "explanation": "Os osteócitos detetam as cargas mecânicas (mecanotransdução), os osteoblastos formam osso novo e os osteoclastos reabsorvem-no.",
    "distractorAnalysis": [
      "Está incorreta: a formação de osso novo é feita pelos osteoblastos.",
      "Está incorreta: a reabsorção do osso é feita pelos osteoclastos.",
      "Está incorreta: as fibras elásticas são características das artérias elásticas, e não são produzidas pelos osteócitos para a matriz óssea."
    ],
    "nursingApplication": "A deteção das cargas pelos osteócitos justifica a prescrição de exercício com carga na prevenção da perda de massa óssea em utentes idosos."
  },
  {
    "id": 2313,
    "topicId": 2,
    "question": "Um utente passa várias semanas acamado, sem carregar peso nos membros inferiores. O que predomina no osso destes membros?",
    "options": [
      "A reabsorção óssea, com perda de massa",
      "A formação óssea, porque o repouso poupa o osso",
      "A suspensão total da remodelação, sem alteração da massa óssea",
      "O aumento da mineralização, porque o osso deixa de ser comprimido"
    ],
    "correctIndex": 0,
    "explanation": "A carga mecânica estimula os osteoblastos; com repouso prolongado ou imobilização, os osteoclastos reabsorvem osso e a massa óssea diminui.",
    "distractorAnalysis": [
      "Está incorreta: sem carga mecânica, os osteoclastos reabsorvem osso; a formação óssea depende do estímulo da carga.",
      "Está incorreta: a remodelação é contínua; sem carga, o equilíbrio desloca-se para a reabsorção e a massa óssea diminui.",
      "Está incorreta: a falta de compressão não aumenta a mineralização, e a massa óssea diminui em vez de aumentar."
    ],
    "nursingApplication": "Por isso, a mobilização precoce e o levante progressivo do utente acamado ajudam a preservar a massa óssea."
  },
  {
    "id": 2314,
    "topicId": 2,
    "question": "Segundo a lei de Wolff, o que acontece à estrutura do osso?",
    "options": [
      "Mantém-se inalterada desde o nascimento",
      "Adapta-se apenas às forças de tração",
      "Adapta-se às forças a que está sujeito",
      "Só se adapta durante o crescimento e deixa de o fazer no adulto"
    ],
    "correctIndex": 2,
    "explanation": "A lei de Wolff diz que a estrutura do osso se adapta às forças a que está sujeito, através de uma remodelação contínua.",
    "distractorAnalysis": [
      "Está incorreta: o osso é um tecido dinâmico, continuamente remodelado, e não uma estrutura fixa.",
      "Está incorreta: o osso adapta-se tanto à compressão como à tração, e as trabéculas seguem as linhas de tensão máxima de ambas.",
      "Está incorreta: a remodelação ocorre ao longo de toda a vida, incluindo no adulto, e é também ela que reorienta o osso após uma fratura."
    ],
    "nursingApplication": "Esta adaptação é a base da recomendação de carga progressiva sobre o membro após a consolidação de uma fratura, orientada pelo fisioterapeuta e pela equipa."
  },
  {
    "id": 2315,
    "topicId": 2,
    "question": "Porque estão as trabéculas do osso esponjoso da extremidade proximal do fémur dispostas em leque?",
    "options": [
      "Porque aumentam o módulo de Young do osso esponjoso",
      "Porque seguem as linhas de tensão máxima e poupam massa",
      "Porque a sua disposição é aleatória e independente da carga",
      "Porque impedem qualquer deformação, como num sólido indeformável"
    ],
    "correctIndex": 1,
    "explanation": "As trabéculas em leque acompanham as linhas de tensão máxima, o que dá resistência com pouca massa, em linha com a lei de Wolff.",
    "distractorAnalysis": [
      "Está incorreta: o objetivo da disposição em leque não é alterar o módulo de Young do material, mas alinhar as trabéculas com as linhas de tensão máxima, com o mínimo de massa.",
      "Está incorreta: a orientação das trabéculas resulta da remodelação e acompanha as linhas de força a que o osso está sujeito.",
      "Está incorreta: o osso deforma-se sempre ligeiramente sob carga; o sólido indeformável é apenas um modelo teórico."
    ],
    "nursingApplication": "Este conhecimento ajuda a perceber porque a fratura do colo do fémur é frequente em idosos com trabéculas rarefeitas."
  },
  {
    "id": 2316,
    "topicId": 2,
    "question": "Na extremidade superior do fémur, o peso corporal comprime a cabeça e a face inferior do colo. Que tipo de tensão sofre a face superior do colo?",
    "options": [
      "Compressão",
      "Tração",
      "Cisalhamento puro, sem tração nem compressão",
      "Nenhuma tensão, por estar no plano neutro"
    ],
    "correctIndex": 1,
    "explanation": "O colo do fémur está sujeito a flexão: a face inferior é comprimida e a face superior é tracionada.",
    "distractorAnalysis": [
      "Está incorreta: a compressão atua na face inferior do colo, e não na superior.",
      "Está incorreta: o cisalhamento não explica o par compressão–tração que se observa quando o colo é fletido pelo peso do corpo.",
      "Está incorreta: a face superior está na periferia, onde as tensões são máximas, e não no plano neutro."
    ],
    "nursingApplication": "Este padrão ajuda a perceber porque as fraturas do colo do fémur, após uma queda, são frequentes nos idosos com osso fragilizado."
  },
  {
    "id": 2317,
    "topicId": 2,
    "question": "Que alteração estrutural caracteriza a osteoporose?",
    "options": [
      "Aumento da massa óssea, com trabéculas espessas",
      "Morte do osso por falta de irrigação sanguínea",
      "Consolidação de uma fratura com deformidade mantida",
      "Diminuição da massa óssea, com trabéculas finas e frágeis"
    ],
    "correctIndex": 3,
    "explanation": "Na osteoporose, a massa óssea diminui e as trabéculas ficam finas e frágeis, o que aumenta o risco de fratura.",
    "distractorAnalysis": [
      "Está incorreta: na osteoporose a massa óssea diminui, e não aumenta.",
      "Está incorreta: essa é a necrose avascular e não a osteoporose.",
      "Está incorreta: essa é a consolidação viciosa e não a osteoporose."
    ],
    "nursingApplication": "Perante um idoso com osteoporose, a equipa de enfermagem reforça a prevenção de quedas, por exemplo com remoção de tapetes soltos e boa iluminação."
  },
  {
    "id": 2318,
    "topicId": 2,
    "question": "Porque pode uma fratura do colo do fémur levar ao colapso da cabeça femoral?",
    "options": [
      "Porque o colo fraturado deixa de produzir colagénio tipo I",
      "Porque a fratura aumenta a mineralização da cabeça",
      "Porque a cabeça passa a suportar apenas forças de tração",
      "Porque pode interromper a irrigação sanguínea e o osso morre"
    ],
    "correctIndex": 3,
    "explanation": "A fratura do colo pode cortar a irrigação da cabeça do fémur; sem sangue, o osso morre (necrose avascular) e a cabeça colapsa.",
    "distractorAnalysis": [
      "Está incorreta: a causa do colapso é a perda de irrigação, e não a síntese de colagénio.",
      "Está incorreta: o colapso resulta da morte do osso por falta de sangue, e não de um aumento de mineralização.",
      "Está incorreta: a cabeça do fémur é sobretudo comprimida pelo peso, e o colapso não resulta de tração."
    ],
    "nursingApplication": "Esta complicação justifica a vigilância após fraturas do colo do fémur, nomeadamente a persistência ou o agravamento da dor da anca."
  },
  {
    "id": 2319,
    "topicId": 2,
    "question": "Uma fratura consolida com desvio do eixo. A remodelação reorienta as trabéculas segundo as novas forças, mas a deformidade permanece. Como se designa esta situação?",
    "options": [
      "Consolidação viciosa",
      "Necrose avascular",
      "Osteoporose",
      "Mecanotransdução"
    ],
    "correctIndex": 0,
    "explanation": "Na consolidação viciosa, a arquitetura interna do osso adapta-se às novas forças, mas a deformidade mantém-se.",
    "distractorAnalysis": [
      "Está incorreta: na necrose avascular o osso morre por falta de irrigação, o que não está descrito.",
      "Está incorreta: a osteoporose é uma perda de massa óssea, e não a consolidação com deformidade.",
      "Está incorreta: a mecanotransdução é a deteção das cargas pelos osteócitos, e não uma complicação de fratura."
    ],
    "nursingApplication": "O alinhamento correto do membro durante a imobilização, verificado pela equipa, ajuda a evitar uma consolidação viciosa."
  },
  {
    "id": 2320,
    "topicId": 2,
    "question": "O osso cortical tem rigidez semelhante em tração e em compressão (≈ 18 GPa), mas suporta ≈ 200 MPa em compressão e ≈ 135 MPa em tração. O que se conclui?",
    "options": [
      "É mais rígido em compressão, por isso suporta mais tensão antes de fraturar",
      "Suporta mais tração, porque o módulo de Young é igual",
      "Deforma-se de modo semelhante, mas fratura mais cedo em tração",
      "A rigidez igual implica a mesma tensão de rotura nos dois casos"
    ],
    "correctIndex": 2,
    "explanation": "O módulo de Young mede a rigidez e é semelhante em tração e compressão; já a resistência (tensão suportada) é maior em compressão do que em tração.",
    "distractorAnalysis": [
      "Está incorreta: a rigidez é semelhante nos dois casos (≈ 18 GPa); o que difere é a tensão que o osso suporta antes de fraturar.",
      "Está incorreta: o osso suporta menos tensão em tração (≈ 135 MPa) do que em compressão (≈ 200 MPa).",
      "Está incorreta: rigidez e resistência são grandezas diferentes: o módulo de Young não determina a tensão de rotura."
    ],
    "nursingApplication": "Isto ajuda a perceber porque, numa pancada lateral que flete a diáfise, a fratura começa geralmente no lado convexo, que fica tracionado."
  },
  {
    "id": 2321,
    "topicId": 2,
    "question": "Uma força perpendicular ao eixo de um osso longo curva-o. De que lado começa geralmente a fratura e porquê?",
    "options": [
      "Do lado côncavo (em compressão), porque o osso resiste menos à compressão",
      "No plano neutro, porque aí a tensão é máxima",
      "Do lado convexo (em tração), porque o osso resiste menos à tração",
      "Do lado côncavo (em compressão), porque aí as tensões são menores"
    ],
    "correctIndex": 2,
    "explanation": "Na flexão, o lado côncavo fica em compressão e o convexo em tração; como o osso resiste menos à tração, a fratura começa geralmente do lado convexo.",
    "distractorAnalysis": [
      "Está incorreta: o osso resiste mais à compressão do que à tração, pelo que não começa a ceder no lado comprimido.",
      "Está incorreta: no plano neutro a tensão normal é nula, e não máxima.",
      "Está incorreta: a fratura começa no lado em tração, que é o mais fraco; o lado côncavo está em compressão, que o osso suporta melhor."
    ],
    "nursingApplication": "Esta noção ajuda a interpretar o padrão de uma fratura por flexão, observado na radiografia de um utente após um traumatismo."
  },
  {
    "id": 2322,
    "topicId": 2,
    "question": "Num fémur, a força de compressão é 1800 N e a secção é 6 cm². Qual é a tensão no osso?",
    "options": [
      "3 × 10⁴ Pa",
      "3 × 10⁸ Pa",
      "3 × 10⁶ Pa",
      "1,08 Pa"
    ],
    "correctIndex": 2,
    "explanation": "σ = F / S, com S = 6 cm² = 6 × 10⁻⁴ m². Logo σ = 1800 / (6 × 10⁻⁴) = 3 × 10⁶ Pa.",
    "distractorAnalysis": [
      "Está incorreta: converte 1 cm² como 10⁻² m², o que dá 3 × 10⁴ Pa.",
      "Está incorreta: converte 1 cm² como 10⁻⁶ m², o que dá 3 × 10⁸ Pa.",
      "Está incorreta: multiplica a força pela área (1800 × 6 × 10⁻⁴), em vez de dividir."
    ],
    "nursingApplication": "Calcular a tensão no osso ajuda a perceber quanto aumenta a carga sobre o fémur quando um utente obeso se levanta ou caminha."
  },
  {
    "id": 2323,
    "topicId": 2,
    "question": "Um fémur com E = 2 × 10¹⁰ Pa e comprimento inicial L<sub>0</sub> = 0,40 m suporta uma tensão de 3 × 10⁶ Pa, dentro do regime elástico. Qual é o encurtamento ΔL?",
    "options": [
      "0,6 mm",
      "0,06 mm",
      "6 × 10⁻⁵ mm",
      "2,7 × 10³ m"
    ],
    "correctIndex": 1,
    "explanation": "ε = σ / E = 3 × 10⁶ / 2 × 10¹⁰ = 1,5 × 10⁻⁴; ΔL = ε · L<sub>0</sub> = 1,5 × 10⁻⁴ × 0,40 = 6 × 10⁻⁵ m = 0,06 mm.",
    "distractorAnalysis": [
      "Está incorreta: converte metros em milímetros multiplicando por 10⁴, em vez de 10³.",
      "Está incorreta: indica o valor em metros (6 × 10⁻⁵) mas com a unidade milímetro.",
      "Está incorreta: divide L<sub>0</sub> por ε, em vez de multiplicar (ΔL = L<sub>0</sub> / ε)."
    ],
    "nursingApplication": "O encurtamento é minúsculo, o que mostra porque o osso, com módulo de Young elevado, suporta o peso do corpo sem deformação visível."
  },
  {
    "id": 2324,
    "topicId": 2,
    "question": "Uma deformação relativa de 2 × 10⁻⁴ corresponde a que percentagem, para efeitos de representação num gráfico?",
    "options": [
      "0,2 %",
      "0,02 %",
      "2 %",
      "0,0002 %"
    ],
    "correctIndex": 1,
    "explanation": "Para converter em percentagem multiplica-se por 100: 2 × 10⁻⁴ × 100 = 0,02 %. A deformação relativa em si é adimensional.",
    "distractorAnalysis": [
      "Está incorreta: multiplica por 10³ em vez de 10², o que dá 0,2 %.",
      "Está incorreta: multiplica por 10⁴ em vez de 10², o que dá 2 %.",
      "Está incorreta: trata o valor 2 × 10⁻⁴ como se já fosse uma percentagem."
    ],
    "nursingApplication": "Na avaliação do alongamento de um tendão ou de uma artéria, exprimir a deformação em percentagem facilita a comparação entre tecidos."
  },
  {
    "id": 2325,
    "topicId": 2,
    "question": "Qual é a unidade da deformação relativa ε no Sistema Internacional?",
    "options": [
      "Metro (m), a unidade de comprimento",
      "Pascal (Pa), a unidade de tensão",
      "N/m, a unidade da constante elástica",
      "Não tem unidade (é adimensional)"
    ],
    "correctIndex": 3,
    "explanation": "A deformação relativa é o quociente de dois comprimentos (ΔL / L<sub>0</sub>), logo é adimensional; a percentagem é usada apenas para representação.",
    "distractorAnalysis": [
      "Está incorreta: o metro é a unidade do alongamento absoluto ΔL, e não da deformação relativa, que é ΔL / L<sub>0</sub>.",
      "Está incorreta: o pascal é a unidade da tensão mecânica e do módulo de Young.",
      "Está incorreta: N/m é a unidade da constante elástica k."
    ],
    "nursingApplication": "Reconhecer que a deformação é adimensional evita erros de unidades quando se comparam alongamentos de tecidos de tamanhos diferentes."
  },
  {
    "id": 2326,
    "topicId": 2,
    "question": "Como se designa o fenómeno em que um corpo esticado numa direção se contrai nas direções perpendiculares?",
    "options": [
      "Lei de Wolff",
      "Efeito de Poisson",
      "Lei de Hooke",
      "Mecanotransdução"
    ],
    "correctIndex": 1,
    "explanation": "Pelo efeito de Poisson, um corpo esticado numa direção contrai-se nas direções perpendiculares e, se for comprimido, dilata-se.",
    "distractorAnalysis": [
      "Está incorreta: a lei de Wolff descreve a adaptação do osso às forças, e não a contração transversal de um corpo esticado.",
      "Está incorreta: a lei de Hooke relaciona a tensão com a deformação, e não descreve a contração nas direções perpendiculares.",
      "Está incorreta: a mecanotransdução é a deteção das cargas mecânicas pelas células do osso."
    ],
    "nursingApplication": "Este efeito é visível numa ligadura elástica, cuja largura diminui quando é esticada, o que o enfermeiro deve ter em conta ao aplicar compressão."
  },
  {
    "id": 2327,
    "topicId": 2,
    "question": "Uma mola é esticada dentro do limite de proporcionalidade. Se a força aplicada duplicar, o que acontece ao alongamento e à constante elástica k da mola?",
    "options": [
      "O alongamento duplica e k duplica",
      "O alongamento mantém-se e k duplica",
      "O alongamento duplica e k mantém-se",
      "O alongamento duplica e k reduz-se a metade"
    ],
    "correctIndex": 2,
    "explanation": "Pela lei de Hooke, F = k · x: o alongamento é proporcional à força, pelo que duplica, enquanto k é característico da mola e mantém-se constante.",
    "distractorAnalysis": [
      "Está incorreta: o alongamento duplica, mas k não depende da força aplicada: é a razão F / x, que se mantém constante.",
      "Está incorreta: k não varia com a força, e o alongamento é proporcional a F, pelo que não se mantém quando a força duplica.",
      "Está incorreta: k = F / x mantém-se porque F e x duplicam na mesma proporção, e não se reduz a metade."
    ],
    "nursingApplication": "Numa mola de reabilitação, a resistência aumenta com o alongamento, mas a constante da mola mantém-se, o que permite prever a força para cada extensão."
  },
  {
    "id": 2328,
    "topicId": 2,
    "question": "Um tecido é sujeito a uma tensão de 3,0 MPa e sofre uma deformação relativa de 1,5 %, dentro do limite de proporcionalidade. Qual é o seu módulo de Young?",
    "options": [
      "4,5 × 10⁴ Pa",
      "2,0 × 10⁶ Pa",
      "2,0 × 10⁸ Pa",
      "5,0 × 10⁻⁹ Pa"
    ],
    "correctIndex": 2,
    "explanation": "E = σ / ε, com σ = 3,0 × 10⁶ Pa e ε = 1,5 % = 0,015. Logo E = 3,0 × 10⁶ / 0,015 = 2,0 × 10⁸ Pa.",
    "distractorAnalysis": [
      "Está incorreta: multiplica a tensão pela deformação relativa em vez de as dividir, o que dá 4,5 × 10⁴ Pa.",
      "Está incorreta: usa 1,5 em vez de 0,015 para a deformação relativa, esquecendo-se de converter a percentagem, o que dá 2,0 × 10⁶ Pa.",
      "Está incorreta: inverte a razão, calculando ε / σ = 0,015 / 3,0 × 10⁶ = 5,0 × 10⁻⁹."
    ],
    "nursingApplication": "O módulo de Young de um tecido, obtido a partir de ensaios de tração, ajuda a escolher materiais de sutura ou enxertos com rigidez semelhante à do tecido a reparar."
  },
  {
    "id": 2329,
    "topicId": 2,
    "question": "Uma força de 36 N comprime uma mola 4,5 cm, dentro do limite de proporcionalidade. Qual é a constante elástica da mola?",
    "options": [
      "8,0 × 10² N/m",
      "1,6 N/m",
      "8,0 N/m",
      "1,3 × 10⁻³ N/m"
    ],
    "correctIndex": 0,
    "explanation": "Da lei de Hooke, k = F / x, com x = 4,5 cm = 0,045 m. Logo k = 36 / 0,045 = 8,0 × 10² N/m.",
    "distractorAnalysis": [
      "Está incorreta: multiplica a força pelo alongamento em vez de os dividir, o que dá 36 × 0,045 = 1,6 N/m.",
      "Está incorreta: não converte o alongamento para metros, dividindo 36 por 4,5, o que dá 8,0 N/cm e não N/m.",
      "Está incorreta: inverte a razão, calculando x / F = 0,045 / 36 = 1,3 × 10⁻³."
    ],
    "nursingApplication": "Conhecer a constante elástica de uma mola de compressão permite estimar a força que um dispositivo, como um apoio ortopédico com amortecimento, exerce para um dado encurtamento."
  },
  {
    "id": 2330,
    "topicId": 2,
    "question": "Dois fios de nylon, do mesmo material e do mesmo comprimento, têm secções diferentes: o fio A é grosso e o fio B é fino. Que se pode dizer sobre o módulo de Young E dos fios?",
    "options": [
      "E é maior no fio A, porque suporta uma força maior",
      "E é maior no fio B, porque se alonga mais",
      "E é maior no fio B, porque é mais fino",
      "E é igual nos dois fios, porque o material é o mesmo"
    ],
    "correctIndex": 3,
    "explanation": "O módulo de Young é uma propriedade do material (razão entre tensão e deformação relativa), pelo que é igual nos dois fios.",
    "distractorAnalysis": [
      "Está incorreta: a força que o fio suporta depende também da secção, mas E é uma propriedade do material e não da força suportada.",
      "Está incorreta: o fio fino alonga-se mais para a mesma força, mas também fica sujeito a uma tensão maior; a razão σ / ε, isto é, E, mantém-se.",
      "Está incorreta: a espessura altera a tensão para uma dada força, mas não altera o módulo de Young, que é característico do material."
    ],
    "nursingApplication": "Por isso, fios de sutura do mesmo material têm o mesmo módulo de Young, qualquer que seja o seu calibre."
  },
  {
    "id": 2331,
    "topicId": 2,
    "question": "Qual é a ordem crescente do módulo de Young dos materiais borracha, osso, vidro e aço?",
    "options": [
      "Borracha < vidro < osso < aço",
      "Borracha < osso < vidro < aço",
      "Osso < borracha < vidro < aço",
      "Aço < vidro < osso < borracha"
    ],
    "correctIndex": 1,
    "explanation": "Os valores são: borracha (0,1 a 10 × 10⁷ Pa) < osso (2 × 10¹⁰) < vidro (7 × 10¹⁰) < aço (20 × 10¹⁰).",
    "distractorAnalysis": [
      "Está incorreta: troca o osso (≈ 2 × 10¹⁰ Pa) com o vidro (≈ 7 × 10¹⁰ Pa), que tem módulo de Young maior.",
      "Está incorreta: coloca o osso abaixo da borracha, que é muito menos rígida (≈ 0,1 a 10 × 10⁷ Pa).",
      "Está incorreta: inverte a ordem: é a borracha que tem o menor módulo de Young e o aço o maior (≈ 20 × 10¹⁰ Pa)."
    ],
    "nursingApplication": "Saber que o osso é muito mais rígido do que os tecidos moles ajuda a compreender porque o osso protege órgãos e suporta o peso do corpo."
  },
  {
    "id": 2332,
    "topicId": 2,
    "question": "O vidro (E ≈ 7 × 10¹⁰ Pa) tem módulo de Young maior do que o osso (E ≈ 2 × 10¹⁰ Pa). Pode concluir-se que o vidro resiste a maior tensão antes de se partir?",
    "options": [
      "Não, porque o módulo de Young mede a rigidez e não a resistência",
      "Sim, porque maior módulo de Young significa maior resistência",
      "Sim, porque o vidro se deforma mais antes de fraturar",
      "Não, porque a rigidez do vidro é menor do que a do osso"
    ],
    "correctIndex": 0,
    "explanation": "O módulo de Young mede a rigidez, ou seja, a oposição à deformação elástica; não indica a resistência à tração ou à compressão.",
    "distractorAnalysis": [
      "Está incorreta: rigidez e resistência são grandezas diferentes: o módulo de Young não indica a tensão de rotura.",
      "Está incorreta: um maior módulo de Young significa que o vidro se deforma menos, e não mais, para a mesma tensão.",
      "Está incorreta: o vidro tem módulo de Young maior e, portanto, rigidez maior do que o osso."
    ],
    "nursingApplication": "Esta diferença explica porque um material muito rígido, como o vidro, pode partir-se enquanto o osso, menos rígido, absorve mais deformação sem se romper."
  },
  {
    "id": 2333,
    "topicId": 2,
    "question": "Uma mola com k = 200 N/m é alongada 0,05 m para a direita. Qual é a força elástica (restauradora), tomando o sentido para a direita como positivo?",
    "options": [
      "+10 N",
      "−4000 N",
      "−2,5 × 10⁻⁴ N",
      "−10 N"
    ],
    "correctIndex": 3,
    "explanation": "F = −k·x = −200 × 0,05 = −10 N. O sinal negativo indica que a força restauradora tem sentido oposto ao do alongamento.",
    "distractorAnalysis": [
      "Está incorreta: ignora o sinal negativo: a força restauradora tem sentido oposto ao do alongamento.",
      "Está incorreta: divide k por x (200 / 0,05) em vez de multiplicar.",
      "Está incorreta: divide x por k (0,05 / 200) em vez de multiplicar."
    ],
    "nursingApplication": "O sentido oposto da força restauradora explica porque uma banda elástica de exercício puxa de volta a mão do utente quando este a estica."
  },
  {
    "id": 2334,
    "topicId": 2,
    "question": "Uma mola está em equilíbrio com um alongamento constante. Qual é a relação entre a força aplicada e a força restauradora?",
    "options": [
      "Têm o mesmo módulo e o mesmo sentido",
      "A força restauradora é maior do que a aplicada",
      "A força aplicada é maior do que a restauradora",
      "Têm o mesmo módulo e sentidos opostos"
    ],
    "correctIndex": 3,
    "explanation": "Como F = k·x e F<sub>elástica</sub> = −k·x, a força restauradora exercida pela mola tem o mesmo módulo da força aplicada e sentido oposto, opondo-se à deformação.",
    "distractorAnalysis": [
      "Está incorreta: a força restauradora opõe-se à deformação, pelo que tem sentido oposto ao da força aplicada.",
      "Está incorreta: ambas valem k·x; se a restauradora fosse maior, a mola não manteria o alongamento e voltaria a encurtar.",
      "Está incorreta: ambas valem k·x; se a aplicada fosse maior, o alongamento aumentaria e não se manteria constante."
    ],
    "nursingApplication": "Num dinamómetro de mola, esta igualdade permite ler a força exercida por um utente a partir do alongamento da mola."
  },
  {
    "id": 2335,
    "topicId": 2,
    "question": "Admita que o módulo de compressão do osso (1,4 × 10¹⁰ Pa) é inferior ao de tração (1,7 × 10¹⁰ Pa). Sob a mesma tensão, o que acontece?",
    "options": [
      "O osso deforma-se mais em compressão",
      "O osso deforma-se mais em tração",
      "O osso deforma-se por igual nos dois casos",
      "O osso não se deforma em nenhum dos casos"
    ],
    "correctIndex": 0,
    "explanation": "Como ε = σ / E, o menor módulo (compressão) dá a maior deformação relativa para a mesma tensão.",
    "distractorAnalysis": [
      "Está incorreta: como ε = σ / E, o menor módulo (compressão) dá a maior deformação, e não o maior (tração).",
      "Está incorreta: módulos diferentes implicam deformações diferentes para a mesma tensão.",
      "Está incorreta: o osso é elástico e deforma-se sempre ligeiramente sob qualquer tensão, pois não é um sólido indeformável."
    ],
    "nursingApplication": "Este cálculo mostra que, para a mesma tensão, a deformação relativa é inversamente proporcional ao módulo de Young, o que permite comparar a resposta de tecidos diferentes à carga."
  },
  {
    "id": 2336,
    "topicId": 2,
    "question": "Uma barra apoiada nas duas extremidades suporta uma carga de 600 N ao centro. Qual é a reação em cada apoio?",
    "options": [
      "300 N",
      "600 N",
      "1200 N",
      "150 N"
    ],
    "correctIndex": 0,
    "explanation": "Como a carga está ao centro, as duas reações são iguais e R = F / 2 = 600 / 2 = 300 N.",
    "distractorAnalysis": [
      "Está incorreta: atribui a carga toda a cada apoio, esquecendo que se divide pelos dois.",
      "Está incorreta: multiplica a carga por dois em vez de a dividir pelos dois apoios.",
      "Está incorreta: divide a carga por quatro em vez de por dois."
    ],
    "nursingApplication": "O mesmo raciocínio permite estimar a força suportada por cada um dos dois profissionais que transportam uma maca com o utente ao centro."
  },
  {
    "id": 2337,
    "topicId": 2,
    "question": "Numa barra fletida, qual é a tensão normal no plano neutro?",
    "options": [
      "Máxima e de tração",
      "Nula",
      "Máxima e de compressão",
      "Igual à da periferia"
    ],
    "correctIndex": 1,
    "explanation": "No plano neutro, o material não está nem tracionado nem comprimido, pelo que a tensão normal é nula.",
    "distractorAnalysis": [
      "Está incorreta: a tração máxima ocorre na periferia do lado convexo, e não no plano neutro.",
      "Está incorreta: a compressão máxima ocorre na periferia do lado côncavo, e não no plano neutro.",
      "Está incorreta: as tensões aumentam do plano neutro para a periferia; não são iguais nas duas zonas."
    ],
    "nursingApplication": "Saber que o centro de um osso fletido suporta pouca tensão ajuda a compreender porque as fraturas por flexão começam na superfície."
  },
  {
    "id": 2338,
    "topicId": 2,
    "question": "Como varia a tensão normal ao longo da secção de uma barra fletida?",
    "options": [
      "É igual em toda a secção, de uma face à oposta",
      "É máxima no plano neutro e nula nas duas faces",
      "É de compressão em todas as camadas da secção",
      "Tração numa face, nula no plano neutro, compressão na outra"
    ],
    "correctIndex": 3,
    "explanation": "Numa barra fletida, uma face é tracionada, a oposta é comprimida e, entre elas, o plano neutro tem tensão nula.",
    "distractorAnalysis": [
      "Está incorreta: na flexão a tensão varia ao longo da secção; só seria uniforme com tração ou compressão axiais.",
      "Está incorreta: ocorre o inverso: a tensão é nula no plano neutro e máxima na periferia.",
      "Está incorreta: uma face da barra fletida é tracionada e a outra é comprimida."
    ],
    "nursingApplication": "É este padrão que explica porque uma fratura por flexão do osso começa do lado tracionado."
  },
  {
    "id": 2339,
    "topicId": 2,
    "question": "Que grandeza mede o grau de deformação por cisalhamento?",
    "options": [
      "O ângulo Φ de rotação da face superior em torno do eixo da barra",
      "O ângulo α de deslizamento entre as camadas",
      "O alongamento ΔL das fibras ao longo do eixo",
      "A posição do plano neutro na secção"
    ],
    "correctIndex": 1,
    "explanation": "No cisalhamento, as camadas deslizam umas sobre as outras e o grau de deformação é medido pelo ângulo α.",
    "distractorAnalysis": [
      "Está incorreta: o ângulo Φ mede o grau de torção e não o de cisalhamento.",
      "Está incorreta: ΔL mede o alongamento na tração ou na compressão, em que o comprimento varia.",
      "Está incorreta: o plano neutro é uma noção da flexão e não mede o grau de cisalhamento."
    ],
    "nursingApplication": "O deslizamento das camadas da pele sobre os planos profundos, quando o utente escorrega na cama, é um exemplo de cisalhamento."
  },
  {
    "id": 2340,
    "topicId": 2,
    "question": "Que grandeza mede o grau de deformação por torção de uma barra com a base fixa?",
    "options": [
      "O ângulo α de deslizamento entre camadas paralelas",
      "O alongamento ΔL da barra ao longo do eixo",
      "O ângulo de rotação Φ entre as faces da barra",
      "A tensão normal no plano neutro"
    ],
    "correctIndex": 2,
    "explanation": "Na torção, a deformação é medida pelo ângulo de rotação Φ da face superior relativamente à face inferior, que está fixa.",
    "distractorAnalysis": [
      "Está incorreta: o ângulo α mede o grau de cisalhamento e não o de torção.",
      "Está incorreta: ΔL mede a variação de comprimento, que não é a característica da torção.",
      "Está incorreta: a tensão normal no plano neutro é uma noção da flexão e não mede o grau de torção."
    ],
    "nursingApplication": "A torção de um membro, com o pé fixo no solo e o corpo a rodar, é um mecanismo conhecido de lesão que o enfermeiro encontra em fraturas espirais."
  },
  {
    "id": 2341,
    "topicId": 2,
    "question": "O que é um binário de forças?",
    "options": [
      "Duas forças iguais, de sentidos opostos e com a mesma linha de ação, que não produzem rotação",
      "Um par de forças iguais, de sentidos opostos e com linhas de ação paralelas, que produz rotação",
      "Duas forças de sentidos convergentes que comprimem uma barra ao longo do eixo",
      "Duas forças iguais e do mesmo sentido, com linhas de ação paralelas"
    ],
    "correctIndex": 1,
    "explanation": "Um binário é um par de forças iguais e de sentidos opostos, com linhas de ação paralelas; a resultante é nula, mas o momento não é nulo, pelo que o binário tende a produzir rotação.",
    "distractorAnalysis": [
      "Está incorreta: com a mesma linha de ação, as forças anulam-se também em termos de rotação, e isso não produz binário.",
      "Está incorreta: essa descrição corresponde à compressão, e não ao binário, cujas linhas de ação são paralelas e não coincidentes.",
      "Está incorreta: forças do mesmo sentido somam-se numa força resultante; num binário, os sentidos são opostos."
    ],
    "nursingApplication": "O enfermeiro aplica um binário com os dedos quando roda o botão de um debitómetro de oxigénio para ajustar o fluxo."
  },
  {
    "id": 2342,
    "topicId": 2,
    "question": "Uma barra tem a base fixa e o topo é rodado por um binário. Que reação surge na base?",
    "options": [
      "Um binário igual e de sentido oposto",
      "Uma força de compressão ao longo do eixo",
      "Uma força de cisalhamento paralela à base",
      "Nenhuma, porque a base está fixa"
    ],
    "correctIndex": 0,
    "explanation": "Na face fixa surge, por reação, um binário igual e de sentido oposto ao aplicado, o que mantém a barra em equilíbrio de rotação.",
    "distractorAnalysis": [
      "Está incorreta: a torção não exige uma força axial de compressão; a reação é um binário.",
      "Está incorreta: o cisalhamento envolve forças tangenciais opostas, e não a rotação em torno do eixo.",
      "Está incorreta: a base fixa exerce precisamente a reação que equilibra o binário aplicado."
    ],
    "nursingApplication": "O mesmo princípio explica porque, ao desenroscar uma tampa de um frasco, é preciso segurar o frasco para o impedir de rodar."
  },
  {
    "id": 2343,
    "topicId": 2,
    "question": "Uma tesoura corta uma gaze. Que deformação predomina no material cortado?",
    "options": [
      "Tração",
      "Flexão",
      "Cisalhamento",
      "Torção"
    ],
    "correctIndex": 2,
    "explanation": "As lâminas aplicam forças opostas e tangenciais a superfícies paralelas do material, o que provoca cisalhamento.",
    "distractorAnalysis": [
      "Está incorreta: na tração as forças divergem ao longo do eixo; na tesoura as forças são tangenciais e opostas.",
      "Está incorreta: a flexão resulta de uma força perpendicular ao eixo que curva o corpo, e não de forças tangenciais opostas muito próximas.",
      "Está incorreta: a torção exige binários de sentidos opostos em torno do eixo, o que não acontece numa tesoura."
    ],
    "nursingApplication": "Este mecanismo ajuda a perceber porque o corte de uma ligadura é mais fácil com uma tesoura bem afiada, que aplica a força numa área menor e aumenta a tensão no material."
  },
  {
    "id": 2344,
    "topicId": 2,
    "question": "Num esquiador, o pé fica preso na fixação e o corpo roda, aplicando um binário à tíbia. Que tipo de deformação predomina no osso?",
    "options": [
      "Flexão",
      "Torção",
      "Compressão",
      "Cisalhamento"
    ],
    "correctIndex": 1,
    "explanation": "Um binário aplicado em torno do eixo longitudinal, com uma extremidade fixa, provoca torção; as tensões são máximas na periferia do osso.",
    "distractorAnalysis": [
      "Está incorreta: a flexão resulta de uma força perpendicular ao eixo do osso, e não de uma rotação em torno do eixo.",
      "Está incorreta: a compressão exige forças convergentes ao longo do eixo do osso.",
      "Está incorreta: o cisalhamento envolve forças tangenciais opostas a superfícies paralelas, e não um binário em torno do eixo."
    ],
    "nursingApplication": "Este mecanismo é típico das fraturas espirais da tíbia, que o enfermeiro reconhece na história de uma lesão desportiva."
  },
  {
    "id": 2345,
    "topicId": 2,
    "question": "Uma vértebra suporta uma força de compressão de 700 N numa área de 15 cm². Qual é a tensão de compressão?",
    "options": [
      "4,7 × 10³ Pa",
      "4,7 × 10⁷ Pa",
      "4,7 × 10⁵ Pa",
      "1,05 Pa"
    ],
    "correctIndex": 2,
    "explanation": "S = 15 cm² = 15 × 10⁻⁴ m² = 1,5 × 10⁻³ m². Logo σ = 700 / (1,5 × 10⁻³) = 4,7 × 10⁵ Pa.",
    "distractorAnalysis": [
      "Está incorreta: converte 1 cm² como 10⁻² m², o que dá 4,7 × 10³ Pa.",
      "Está incorreta: converte 1 cm² como 10⁻⁶ m², o que dá 4,7 × 10⁷ Pa.",
      "Está incorreta: multiplica a força pela área (700 × 15 × 10⁻⁴), em vez de dividir."
    ],
    "nursingApplication": "Este cálculo ilustra a carga sobre a coluna de um utente em pé, que aumenta quando este transporta um objeto pesado."
  },
  {
    "id": 2346,
    "topicId": 2,
    "question": "Um tendão de 20 cm tem E = 1,2 × 10⁹ Pa e suporta uma tensão de 6,0 × 10⁶ Pa, no regime elástico. Qual é o seu alongamento?",
    "options": [
      "1,0 mm",
      "1,0 cm",
      "0,10 mm",
      "4,0 × 10⁴ mm"
    ],
    "correctIndex": 0,
    "explanation": "ε = σ / E = 6,0 × 10⁶ / 1,2 × 10⁹ = 5,0 × 10⁻³; ΔL = ε · L<sub>0</sub> = 5,0 × 10⁻³ × 0,20 m = 1,0 × 10⁻³ m = 1,0 mm.",
    "distractorAnalysis": [
      "Está incorreta: o resultado é 1,0 × 10⁻³ m; confunde milímetros com centímetros na conversão.",
      "Está incorreta: converte 20 cm em 0,02 m em vez de 0,20 m.",
      "Está incorreta: usa ΔL = L<sub>0</sub> · E / σ, em vez de L<sub>0</sub> · σ / E."
    ],
    "nursingApplication": "Valores destes mostram que o tendão de Aquiles se alonga apenas alguns milímetros na marcha, e que alongamentos muito maiores, num salto ou numa queda, o podem lesionar."
  },
  {
    "id": 2347,
    "topicId": 2,
    "question": "Uma força de 2400 N atua num fémur de secção 6 cm², produzindo uma tensão de 4 × 10⁶ Pa. Se a mesma força atuasse numa secção de 3 cm² (osso mais fino), o que aconteceria à tensão?",
    "options": [
      "Mantinha-se em 4 × 10⁶ Pa",
      "Reduzia-se a metade, para 2 × 10⁶ Pa",
      "Duplicava, para 8 × 10⁶ Pa",
      "Quadruplicava, para 1,6 × 10⁷ Pa"
    ],
    "correctIndex": 2,
    "explanation": "Como σ = F / S, reduzir a secção a metade, com a mesma força, duplica a tensão: 2400 / (3 × 10⁻⁴) = 8 × 10⁶ Pa.",
    "distractorAnalysis": [
      "Está incorreta: a tensão é F / S, pelo que depende da área; ao reduzir S, a tensão muda.",
      "Está incorreta: reduzir a área aumenta a tensão, em vez de a diminuir, pois σ = F / S.",
      "Está incorreta: a tensão é inversamente proporcional a S e não a S², pelo que reduzir a área para metade duplica a tensão."
    ],
    "nursingApplication": "Por isso, um osso mais fino ou desmineralizado suporta pior a mesma carga, e a prevenção de quedas é importante em utentes com osso frágil."
  },
  {
    "id": 2348,
    "topicId": 2,
    "question": "Num fémur, a força de compressão de 2400 N corresponde a cerca de 3 vezes o peso corporal. Qual é, aproximadamente, a massa da pessoa (g = 9,8 m/s²)?",
    "options": [
      "82 kg",
      "245 kg",
      "735 kg",
      "800 kg"
    ],
    "correctIndex": 0,
    "explanation": "O peso é 2400 / 3 = 800 N, e a massa é m = P / g = 800 / 9,8 ≈ 82 kg.",
    "distractorAnalysis": [
      "Está incorreta: esquece o fator 3 e divide os 2400 N diretamente por g.",
      "Está incorreta: multiplica por 3 em vez de dividir, e depois divide por g.",
      "Está incorreta: confunde o peso em N com a massa em kg."
    ],
    "nursingApplication": "Relacionar a força no fémur com o peso corporal permite perceber a sobrecarga que o corpo de um utente com excesso de peso impõe às articulações."
  },
  {
    "id": 2349,
    "topicId": 2,
    "question": "Que transformação de energia realizam as fibras musculares?",
    "options": [
      "Convertem energia mecânica em energia química para armazenar",
      "Convertem energia térmica em energia elétrica para conduzir",
      "Convertem energia química (ATP) em energia mecânica",
      "Convertem energia elétrica do impulso nervoso em energia mecânica"
    ],
    "correctIndex": 2,
    "explanation": "As fibras musculares transformam a energia química do ATP em energia mecânica, ou seja, em força e movimento.",
    "distractorAnalysis": [
      "Está incorreta: o sentido está invertido: o músculo gasta energia química na forma de ATP para produzir força e movimento.",
      "Está incorreta: o músculo não converte calor em eletricidade; o calor é um subproduto da contração e não a fonte de energia.",
      "Está incorreta: o impulso nervoso desencadeia a contração, mas a energia para a força vem da hidrólise do ATP, e não do sinal elétrico."
    ],
    "nursingApplication": "Esta ligação entre ATP e força explica porque o utente em jejum prolongado ou desnutrido se cansa mais facilmente durante a mobilização."
  },
  {
    "id": 2350,
    "topicId": 2,
    "question": "Qual dos seguintes tipos de músculo é de controlo voluntário?",
    "options": [
      "Músculo estriado cardíaco",
      "Músculo estriado esquelético",
      "Músculo liso das paredes de órgãos ocos",
      "Músculo liso das paredes dos vasos"
    ],
    "correctIndex": 1,
    "explanation": "O músculo estriado esquelético, como o bíceps, é voluntário; o cardíaco e o liso são involuntários.",
    "distractorAnalysis": [
      "Está incorreta: o músculo cardíaco é de controlo involuntário.",
      "Está incorreta: o músculo liso das paredes dos órgãos ocos é de controlo involuntário.",
      "Está incorreta: o músculo liso dos vasos é de controlo involuntário."
    ],
    "nursingApplication": "Esta distinção é útil quando o enfermeiro avalia a capacidade de um utente mobilizar voluntariamente os membros após um acidente vascular cerebral."
  },
  {
    "id": 2351,
    "topicId": 2,
    "question": "Por que razão as células do músculo estriado cardíaco estão ligadas entre si?",
    "options": [
      "Para que cada célula se contraia de modo independente das vizinhas",
      "Para aumentar o módulo de Young de cada célula isolada",
      "Para conduzirem o estímulo e se contraírem de forma coordenada",
      "Para impedir que o miocárdio se estique durante o enchimento"
    ],
    "correctIndex": 2,
    "explanation": "As células do miocárdio estão ligadas para o estímulo passar de célula a célula, de modo que o músculo cardíaco se contraia como um conjunto coordenado.",
    "distractorAnalysis": [
      "Está incorreta: a contração do miocárdio é coordenada, e não independente, para que o coração bombeie o sangue de forma eficaz.",
      "Está incorreta: a ligação entre células não altera o módulo de Young de cada célula; serve para a transmissão do estímulo.",
      "Está incorreta: o miocárdio distende-se durante o enchimento; a ligação das células tem a função de coordenar a contração."
    ],
    "nursingApplication": "Quando esta coordenação falha, surgem arritmias, que o enfermeiro pode identificar no eletrocardiograma de um utente monitorizado."
  },
  {
    "id": 2352,
    "topicId": 2,
    "question": "Qual é o papel das fibras de colagénio e das fibras elásticas no tecido conjuntivo muscular?",
    "options": [
      "O colagénio dá elasticidade e as fibras elásticas dão resistência à distensão",
      "As duas conferem apenas rigidez mineral ao músculo",
      "O colagénio dá resistência à distensão e as fibras elásticas dão elasticidade",
      "As duas produzem a força de contração do músculo"
    ],
    "correctIndex": 2,
    "explanation": "No tecido conjuntivo, as fibras de colagénio resistem à distensão e as fibras elásticas conferem elasticidade.",
    "distractorAnalysis": [
      "Está incorreta: os papéis estão trocados: o colagénio é que resiste à distensão e as fibras elásticas é que dão elasticidade.",
      "Está incorreta: a rigidez mineral é função da hidroxiapatite do osso, e não do tecido conjuntivo muscular.",
      "Está incorreta: a força de contração é produzida pelas fibras musculares a partir do ATP, e não pelo tecido conjuntivo."
    ],
    "nursingApplication": "Estas fibras explicam porque um músculo ou tendão estirado com cuidado recupera, ao passo que uma distensão brusca pode lesionar o tecido conjuntivo."
  },
  {
    "id": 2353,
    "topicId": 2,
    "question": "Um músculo esquelético é alongado e, depois de retirada a carga, não regressa por completo à posição inicial, com um alongamento residual que recupera lentamente. Que comportamento reológico revela?",
    "options": [
      "Sólido de Hooke",
      "Viscoelástico",
      "Sólido indeformável",
      "Plástico, com deformação permanente imediata"
    ],
    "correctIndex": 1,
    "explanation": "A recuperação retardada, com alongamento residual lento, caracteriza um corpo viscoelástico.",
    "distractorAnalysis": [
      "Está incorreta: um sólido de Hooke recuperaria a forma de imediato e por completo dentro da zona de proporcionalidade.",
      "Está incorreta: um sólido indeformável nunca se deforma, e o músculo claramente se alonga.",
      "Está incorreta: o alongamento residual recupera lentamente, e não é uma deformação permanente imediata como num corpo plástico."
    ],
    "nursingApplication": "Por ser viscoelástico, o músculo beneficia de alongamentos lentos e mantidos, e não de movimentos bruscos, na reabilitação do utente."
  },
  {
    "id": 2354,
    "topicId": 2,
    "question": "O que pode acontecer se um músculo for sujeito a uma carga excessiva?",
    "options": [
      "Aumento permanente do módulo de Young do músculo",
      "Transformação do músculo em sólido indeformável",
      "Rotura de fibras musculares e do tecido conjuntivo",
      "Aumento da fase mineral das suas fibras"
    ],
    "correctIndex": 2,
    "explanation": "Cargas excessivas podem causar rotura de fibras musculares e do tecido conjuntivo, além do seu limite de resistência.",
    "distractorAnalysis": [
      "Está incorreta: uma carga excessiva lesiona o tecido, e não aumenta o módulo de Young de modo permanente.",
      "Está incorreta: nenhum tecido biológico se torna um sólido indeformável, que é apenas um modelo teórico.",
      "Está incorreta: a fase mineral é característica do osso e não do músculo."
    ],
    "nursingApplication": "Por isso, o enfermeiro ensina o utente a levantar cargas com a técnica correta e a evitar esforços bruscos, para prevenir lesões musculares."
  },
  {
    "id": 2355,
    "topicId": 2,
    "question": "Quando a bexiga enche lentamente, a tensão na sua parede não aumenta tanto como se esperaria de uma mola. Que comportamento justifica isto?",
    "options": [
      "Comportamento de sólido de Hooke ideal, sem alongamento residual",
      "Comportamento de sólido indeformável, sem alteração de comprimento",
      "Comportamento de corpo viscoso puro, sem qualquer elasticidade",
      "Viscoelasticidade, com relaxamento da tensão e adaptação do comprimento"
    ],
    "correctIndex": 3,
    "explanation": "Sob estiramento mantido, a tensão relaxa e o comprimento adapta-se, o que é típico de um tecido viscoelástico como a bexiga.",
    "distractorAnalysis": [
      "Está incorreta: um sólido de Hooke ideal mantém a tensão proporcional à deformação, sem relaxamento com o tempo.",
      "Está incorreta: a bexiga aumenta de volume ao encher, pelo que não é indeformável.",
      "Está incorreta: a bexiga recupera a forma após o esvaziamento, pelo que tem componente elástica e não é viscosa pura."
    ],
    "nursingApplication": "Esta adaptação permite que a bexiga acumule urina a baixa pressão, o que o enfermeiro tem em conta ao avaliar utentes com disfunção vesical."
  },
  {
    "id": 2356,
    "topicId": 2,
    "question": "Qual dos componentes seguintes é abundante na parede das grandes artérias elásticas, como a aorta?",
    "options": [
      "Fibras elásticas",
      "Cristais de hidroxiapatite",
      "Queratina",
      "Fibras musculares estriadas esqueléticas"
    ],
    "correctIndex": 0,
    "explanation": "A parede das grandes artérias elásticas tem músculo liso, fibras de colagénio e abundantes fibras elásticas.",
    "distractorAnalysis": [
      "Está incorreta: a hidroxiapatite é o mineral do osso e não faz parte da parede arterial.",
      "Está incorreta: a queratina é a proteína da epiderme e dos seus anexos, e não da parede das artérias.",
      "Está incorreta: a parede arterial tem músculo liso, e não músculo estriado esquelético."
    ],
    "nursingApplication": "A elasticidade da aorta permite-lhe distender-se com o sangue ejetado na sístole e devolvê-lo na diástole, o que ajuda a manter a pressão diastólica que o enfermeiro mede num utente."
  },
  {
    "id": 2357,
    "topicId": 2,
    "question": "O que acontece à distensibilidade das artérias com a idade?",
    "options": [
      "Diminui, ficando as artérias mais rígidas",
      "Aumenta, ficando as artérias mais elásticas",
      "Mantém-se igual durante toda a vida",
      "Diminui apenas em utentes com hipertensão"
    ],
    "correctIndex": 0,
    "explanation": "Com a idade, há perda de distensibilidade e as artérias ficam mais rígidas.",
    "distractorAnalysis": [
      "Está incorreta: com a idade as artérias perdem elasticidade e tornam-se mais rígidas, e não mais elásticas.",
      "Está incorreta: a distensibilidade das artérias diminui progressivamente com a idade e não se mantém constante.",
      "Está incorreta: a perda de distensibilidade com a idade ocorre também em pessoas sem hipertensão, embora esta a acelere."
    ],
    "nursingApplication": "Esta rigidez arterial é uma das razões para o enfermeiro acompanhar com atenção a pressão arterial dos utentes idosos."
  },
  {
    "id": 2358,
    "topicId": 2,
    "question": "Qual das alterações contribui para a maior rigidez das artérias com a idade?",
    "options": [
      "Fragmentação da elastina",
      "Aumento da quantidade de elastina",
      "Diminuição do colagénio",
      "Desmineralização da parede arterial"
    ],
    "correctIndex": 0,
    "explanation": "A rigidez arterial deve-se à fragmentação da elastina, ao aumento do colagénio e à calcificação (arteriosclerose).",
    "distractorAnalysis": [
      "Está incorreta: a elastina fragmenta-se e perde função, em vez de aumentar.",
      "Está incorreta: ocorre aumento do colagénio, e não a sua diminuição.",
      "Está incorreta: a parede arterial sofre calcificação, e não desmineralização."
    ],
    "nursingApplication": "Compreender estes mecanismos ajuda o enfermeiro a explicar a um utente porque o controlo da pressão arterial é importante com o avançar da idade."
  },
  {
    "id": 2359,
    "topicId": 2,
    "question": "Uma artéria com maior rigidez (módulo de Young maior), sujeita à mesma tensão, apresenta que deformação relativa?",
    "options": [
      "Menor",
      "Maior",
      "Igual",
      "Nula, por se tornar indeformável"
    ],
    "correctIndex": 0,
    "explanation": "Como ε = σ / E, um módulo de Young maior significa menor deformação relativa para a mesma tensão.",
    "distractorAnalysis": [
      "Está incorreta: como ε = σ / E, um maior E dá uma menor deformação para a mesma tensão.",
      "Está incorreta: a deformação depende de E; com E maior, ε é menor.",
      "Está incorreta: a artéria continua a deformar-se, apenas menos; nenhum tecido é um sólido indeformável."
    ],
    "nursingApplication": "É por isso que uma artéria rígida acomoda pior o sangue ejetado a cada batimento do que uma artéria elástica."
  },
  {
    "id": 2360,
    "topicId": 2,
    "question": "A parede de uma artéria tem E = 1,0 × 10⁶ Pa e está sujeita a uma tensão de 5,0 × 10⁴ Pa, no regime elástico. Qual é a deformação relativa?",
    "options": [
      "20 (2000 %)",
      "0,50 (50 %)",
      "5,0 × 10¹⁰",
      "0,050 (5,0 %)"
    ],
    "correctIndex": 3,
    "explanation": "ε = σ / E = 5,0 × 10⁴ / 1,0 × 10⁶ = 0,050, ou seja, 5,0 % (valor adimensional).",
    "distractorAnalysis": [
      "Está incorreta: divide E por σ (E / σ), em vez de σ por E.",
      "Está incorreta: erra o expoente ao dividir as potências de 10 (10⁴ / 10⁶ tomado como 10⁻¹ em vez de 10⁻²), o que dá um valor 10 vezes maior.",
      "Está incorreta: multiplica σ por E, em vez de dividir."
    ],
    "nursingApplication": "Um valor desta ordem mostra como as artérias elásticas se distendem apreciavelmente a cada batimento, ao contrário do osso."
  },
  {
    "id": 2361,
    "topicId": 2,
    "question": "Uma artéria jovem tem E = 1,0 × 10⁶ Pa e a de um idoso tem E = 4,0 × 10⁶ Pa. Sob a mesma tensão, como se comparam as deformações?",
    "options": [
      "A artéria do idoso deforma-se 4 vezes mais",
      "As duas deformam-se igualmente",
      "A artéria jovem deforma-se 4 vezes mais",
      "A artéria jovem deforma-se 16 vezes mais"
    ],
    "correctIndex": 2,
    "explanation": "Como ε = σ / E, com σ igual, ε<sub>jovem</sub> / ε<sub>idoso</sub> = E<sub>idoso</sub> / E<sub>jovem</sub> = 4.",
    "distractorAnalysis": [
      "Está incorreta: inverte a relação: como ε = σ / E, o maior módulo (idoso) dá menor deformação.",
      "Está incorreta: módulos de Young diferentes implicam deformações diferentes para a mesma tensão.",
      "Está incorreta: ε é inversamente proporcional a E e não a E², pelo que a razão é 4 e não 16."
    ],
    "nursingApplication": "Este exemplo ilustra a perda de distensibilidade que contribui para o aumento da pressão arterial sistólica nos utentes idosos."
  },
  {
    "id": 2362,
    "topicId": 2,
    "question": "A pasta de dentes mantém a forma quando está na escova, mas flui quando é espremida do tubo. Que tipo de corpo é?",
    "options": [
      "Plastoviscoelástico",
      "Viscoso puro",
      "Sólido de Hooke",
      "Sólido indeformável"
    ],
    "correctIndex": 0,
    "explanation": "Abaixo de uma tensão mínima, comporta-se como elástico; acima dela, flui e fica com deformação permanente: é um corpo plastoviscoelástico.",
    "distractorAnalysis": [
      "Está incorreta: um corpo viscoso puro, como o mel, flui sob qualquer tensão, e a pasta mantém a forma em repouso.",
      "Está incorreta: um sólido de Hooke não flui nem fica deformado de forma permanente quando se aplica uma tensão elevada.",
      "Está incorreta: o sólido indeformável nunca se deforma, e a pasta flui quando é espremida."
    ],
    "nursingApplication": "Pastas e géis de uso clínico, aplicados sobre a pele, têm um comportamento semelhante: ficam no sítio e espalham-se quando se faz pressão."
  },
  {
    "id": 2363,
    "topicId": 2,
    "question": "A maionese não escorre de uma colher inclinada, mas espalha-se facilmente com uma faca. Que comportamento explica isto?",
    "options": [
      "Flui sob qualquer tensão, como um corpo viscoso puro",
      "Só flui acima de uma tensão mínima (plastoviscoelástico)",
      "Recupera sempre a forma original, como um sólido de Hooke",
      "Não se deforma nunca, como um sólido indeformável"
    ],
    "correctIndex": 1,
    "explanation": "A tensão causada pelo seu próprio peso é inferior à tensão mínima para fluir; a faca aplica uma tensão superior, e a maionese flui.",
    "distractorAnalysis": [
      "Está incorreta: se fluísse sob qualquer tensão, como o mel, escorreria da colher inclinada devido ao seu peso.",
      "Está incorreta: a maionese espalhada fica com a nova forma, e não recupera a original.",
      "Está incorreta: a maionese deforma-se, e muito, quando é espalhada."
    ],
    "nursingApplication": "Esta ideia aplica-se a pomadas e géis: ficam no local em repouso e espalham-se quando o enfermeiro faz pressão com a espátula."
  },
  {
    "id": 2364,
    "topicId": 2,
    "question": "Qual dos pares seguintes contém apenas exemplos de corpos viscoelásticos?",
    "options": [
      "Água e mel",
      "Plasticina e argila",
      "Mola e fio de nylon",
      "Cartilagem e menisco"
    ],
    "correctIndex": 3,
    "explanation": "Esponja, cartilagem, gelatina e menisco são exemplos de corpos viscoelásticos, com recuperação retardada da forma.",
    "distractorAnalysis": [
      "Está incorreta: a água e o mel são corpos viscosos e não viscoelásticos.",
      "Está incorreta: a plasticina e a argila são corpos plásticos.",
      "Está incorreta: a mola e o fio de nylon aproximam-se de sólidos de Hooke."
    ],
    "nursingApplication": "Por ser viscoelástico, o menisco deforma-se sob carga e recupera lentamente a forma, o que ajuda a distribuir as cargas no joelho durante a marcha."
  },
  {
    "id": 2365,
    "topicId": 2,
    "question": "Sob tensão constante, a deformação de um material aumenta com o tempo. Ao retirar a tensão, a deformação mantém-se constante, sem recuperação. Que corpo é?",
    "options": [
      "Viscoelástico",
      "Sólido de Hooke",
      "Sólido indeformável",
      "Viscoso"
    ],
    "correctIndex": 3,
    "explanation": "Num corpo viscoso, a deformação cresce com a tensão e o tempo de aplicação e não é recuperada quando a tensão cessa.",
    "distractorAnalysis": [
      "Está incorreta: num corpo viscoelástico, a deformação recupera lentamente após se retirar a tensão.",
      "Está incorreta: num sólido de Hooke a deformação é constante sob tensão constante e recupera totalmente.",
      "Está incorreta: o sólido indeformável não apresenta deformação."
    ],
    "nursingApplication": "A glicerina, usada em preparações farmacêuticas, e a água são exemplos de corpos viscosos, o que importa para a forma como escoam em seringas e tubos."
  },
  {
    "id": 2366,
    "topicId": 2,
    "question": "Um material comporta-se como elástico abaixo de 30 Pa e flui acima desse valor. O que se espera ao aplicar 20 Pa e depois 50 Pa?",
    "options": [
      "Com 20 Pa o material flui, e com 50 Pa recupera a forma",
      "Com 20 Pa e com 50 Pa o material flui e fica deformado",
      "Com 20 Pa e com 50 Pa a deformação é recuperável",
      "Com 20 Pa recupera a forma; com 50 Pa flui e fica deformado"
    ],
    "correctIndex": 3,
    "explanation": "Abaixo da tensão mínima o material é elástico (20 Pa); acima dela (50 Pa) flui e fica com deformação permanente.",
    "distractorAnalysis": [
      "Está incorreta: a relação está invertida: abaixo da tensão mínima (30 Pa) o comportamento é elástico, e acima dela o material flui.",
      "Está incorreta: aos 20 Pa, abaixo da tensão mínima, o material comporta-se como elástico e não flui.",
      "Está incorreta: aos 50 Pa, acima da tensão mínima, o material flui e a deformação não é totalmente recuperada."
    ],
    "nursingApplication": "Este comportamento explica porque uma pomada espessa fica no sítio e só se espalha quando o enfermeiro aplica pressão suficiente."
  },
  {
    "id": 2367,
    "topicId": 2,
    "question": "Porque é que uma bigorna de aço é apresentada como exemplo do modelo de sólido indeformável?",
    "options": [
      "Porque nunca se deforma, seja qual for a força aplicada",
      "Porque a sua deformação é desprezável, mas nunca exatamente nula",
      "Porque o seu módulo de Young é igual a zero",
      "Porque se deforma de forma permanente acima de uma tensão limiar"
    ],
    "correctIndex": 1,
    "explanation": "O aço deforma-se muito pouco, pelo que a bigorna é um bom modelo, embora o sólido indeformável seja uma idealização que não existe na natureza.",
    "distractorAnalysis": [
      "Está incorreta: nenhum corpo real é perfeitamente indeformável; o modelo é uma idealização.",
      "Está incorreta: um módulo de Young nulo significaria deformação enorme, e não nula; o sólido indeformável corresponderia a um módulo muito elevado.",
      "Está incorreta: essa é a descrição de um corpo plástico e não de uma bigorna de aço."
    ],
    "nursingApplication": "Saber que as idealizações têm limites ajuda a perceber que mesmo o osso, muito rígido, se deforma ligeiramente quando suporta o peso do corpo."
  },
  {
    "id": 2368,
    "topicId": 2,
    "question": "Uma banda elástica de reabilitação foi esticada em excesso e ficou permanentemente mais comprida. O que aconteceu?",
    "options": [
      "A constante elástica k aumentou durante o esticamento da banda",
      "Ultrapassou a zona reversível e ficou com deformação permanente",
      "O módulo de Young passou a ser infinito com o esticamento",
      "A banda comportou-se como um sólido indeformável ao ser esticada"
    ],
    "correctIndex": 1,
    "explanation": "A lei de Hooke só é válida até ao limite de proporcionalidade; muito além, o material fica com deformação permanente e já não segue σ = E · ε.",
    "distractorAnalysis": [
      "Está incorreta: a deformação permanente não resulta de um aumento de k, mas de a banda ter ultrapassado a sua zona de comportamento elástico.",
      "Está incorreta: um módulo de Young infinito corresponderia a deformação nula, e a banda ficou mais comprida.",
      "Está incorreta: um sólido indeformável não se alonga, e a banda ficou permanentemente mais comprida."
    ],
    "nursingApplication": "Por isso, o enfermeiro ou o fisioterapeuta verifica o estado das bandas de resistência e substitui as que estão muito esticadas ou rasgadas."
  },
  {
    "id": 2369,
    "topicId": 2,
    "question": "Uma mola alonga 3,0 cm quando é puxada por uma força de 12 N, dentro do limite de proporcionalidade. Qual é a sua constante elástica?",
    "options": [
      "4,0 N/m",
      "0,36 N/m",
      "2,5 × 10⁻³ N/m",
      "400 N/m"
    ],
    "correctIndex": 3,
    "explanation": "Pela lei de Hooke, k = F / x, com x = 3,0 cm = 0,030 m; k = 12 / 0,030 = 400 N/m.",
    "distractorAnalysis": [
      "Está incorreta: usa 3,0 em vez de 0,030 m no denominador (12 / 3,0), esquecendo-se de converter cm em m.",
      "Está incorreta: multiplica a força pelo alongamento em metros (12 × 0,030), em vez de dividir.",
      "Está incorreta: divide o alongamento em metros pela força (0,030 / 12), em vez de F / x."
    ],
    "nursingApplication": "Conhecer k permite calibrar um dinamómetro de mola usado para medir a força de preensão de um utente em reabilitação."
  },
  {
    "id": 2370,
    "topicId": 2,
    "question": "Uma mola com k = 250 N/m é comprimida 6 cm, dentro do limite de proporcionalidade. Qual é o módulo da força elástica?",
    "options": [
      "1500 N",
      "15 N",
      "41,7 N",
      "0,024 N"
    ],
    "correctIndex": 1,
    "explanation": "F = k · x = 250 × 0,06 = 15 N.",
    "distractorAnalysis": [
      "Está incorreta: usa 6 em vez de 0,06 m, esquecendo-se de converter cm em m.",
      "Está incorreta: divide k por x (250 / 6), em vez de multiplicar.",
      "Está incorreta: divide x por k (6 / 250), em vez de multiplicar."
    ],
    "nursingApplication": "O cálculo de forças elásticas é útil para escolher a mola de um dispositivo de apoio com a rigidez adequada ao utente."
  },
  {
    "id": 2371,
    "topicId": 2,
    "question": "Uma mola com k = 600 N/m é puxada por uma força de 30 N, dentro do limite de proporcionalidade. Qual é o alongamento?",
    "options": [
      "20 m",
      "1,8 × 10⁴ m",
      "5,0 cm",
      "0,50 cm"
    ],
    "correctIndex": 2,
    "explanation": "x = F / k = 30 / 600 = 0,050 m = 5,0 cm.",
    "distractorAnalysis": [
      "Está incorreta: divide k por F (600 / 30), em vez de F / k.",
      "Está incorreta: multiplica F por k, em vez de dividir.",
      "Está incorreta: calcula 0,050 m corretamente mas converte-o em 0,50 cm, em vez de 5,0 cm."
    ],
    "nursingApplication": "Este tipo de cálculo ajuda a prever o alongamento de uma banda ou mola usada em exercícios de reabilitação sob uma dada carga."
  },
  {
    "id": 2372,
    "topicId": 2,
    "question": "Uma força de 800 N atua sobre uma secção de 2 cm². Qual é a tensão mecânica?",
    "options": [
      "4 × 10⁴ Pa",
      "4 × 10⁶ Pa",
      "4 × 10⁸ Pa",
      "0,16 Pa"
    ],
    "correctIndex": 1,
    "explanation": "σ = F / S, com S = 2 cm² = 2 × 10⁻⁴ m². Logo σ = 800 / (2 × 10⁻⁴) = 4 × 10⁶ Pa.",
    "distractorAnalysis": [
      "Está incorreta: converte 1 cm² como 10⁻² m², o que dá 4 × 10⁴ Pa.",
      "Está incorreta: converte 1 cm² como 10⁻⁶ m², o que dá 4 × 10⁸ Pa.",
      "Está incorreta: multiplica a força pela área (800 × 2 × 10⁻⁴), em vez de dividir."
    ],
    "nursingApplication": "Uma agulha de pequena secção concentra a força numa área muito reduzida, o que explica a tensão elevada na pele durante uma punção."
  },
  {
    "id": 2373,
    "topicId": 2,
    "question": "Um material sofre uma tensão de 3,0 × 10⁶ Pa e uma deformação relativa de 0,0020, no regime elástico. Qual é o seu módulo de Young?",
    "options": [
      "6,0 × 10³ Pa",
      "6,7 × 10⁻¹⁰ Pa",
      "1,5 × 10⁹ Pa",
      "1,5 × 10⁶ Pa"
    ],
    "correctIndex": 2,
    "explanation": "E = σ / ε = 3,0 × 10⁶ / 0,0020 = 1,5 × 10⁹ Pa.",
    "distractorAnalysis": [
      "Está incorreta: multiplica a tensão pela deformação (σ · ε), em vez de dividir.",
      "Está incorreta: divide a deformação pela tensão (ε / σ), em vez de σ / ε.",
      "Está incorreta: usa ε = 2,0 em vez de 0,0020, enganando-se na vírgula."
    ],
    "nursingApplication": "Calcular E a partir de um ensaio permite comparar tecidos, como o tendão e o ligamento, quanto à sua rigidez."
  },
  {
    "id": 2374,
    "topicId": 2,
    "question": "Um tecido com E = 1,0 × 10⁹ Pa e secção de 3,0 cm² sofre uma deformação relativa de 0,010, no regime elástico. Qual é a força aplicada?",
    "options": [
      "3,0 × 10⁵ N",
      "3,0 × 10³ N",
      "3,0 × 10⁷ N",
      "3,3 × 10¹⁰ N"
    ],
    "correctIndex": 1,
    "explanation": "σ = E · ε = 1,0 × 10⁹ × 0,010 = 1,0 × 10⁷ Pa; F = σ · S = 1,0 × 10⁷ × 3,0 × 10⁻⁴ = 3,0 × 10³ N.",
    "distractorAnalysis": [
      "Está incorreta: converte 1 cm² como 10⁻² m², o que dá 3,0 × 10⁵ N.",
      "Está incorreta: usa a área como 3,0 m², esquecendo-se de converter cm² em m².",
      "Está incorreta: divide a tensão pela área (σ / S), em vez de multiplicar."
    ],
    "nursingApplication": "Este cálculo mostra que um tecido rico em colagénio, como um ligamento ou um tendão, suporta forças de milhares de newtons com deformações de apenas 1 %."
  },
  {
    "id": 2375,
    "topicId": 2,
    "question": "Um ligamento de 4,0 cm alonga 0,2 cm e tem E = 2,0 × 10⁸ Pa, no regime elástico. Qual é a tensão aplicada?",
    "options": [
      "1,0 × 10⁷ Pa",
      "4,0 × 10⁹ Pa",
      "1,0 × 10⁸ Pa",
      "1,0 × 10⁶ Pa"
    ],
    "correctIndex": 0,
    "explanation": "ε = ΔL / L<sub>0</sub> = 0,2 / 4,0 = 0,05; σ = E · ε = 2,0 × 10⁸ × 0,05 = 1,0 × 10⁷ Pa.",
    "distractorAnalysis": [
      "Está incorreta: divide E por ε (E / ε), em vez de multiplicar.",
      "Está incorreta: mistura unidades no quociente, usando ΔL em mm (2 mm) e L<sub>0</sub> em cm (4,0), o que dá ε = 0,5.",
      "Está incorreta: mistura unidades no quociente, usando ΔL em cm (0,2) e L<sub>0</sub> em mm (40 mm), o que dá ε = 5 × 10⁻³."
    ],
    "nursingApplication": "Estes valores ajudam a compreender que, numa entorse, o ligamento pode ser alongado para lá do regime elástico e ficar lesionado, o que o enfermeiro tem em conta ao orientar a recuperação do utente."
  },
  {
    "id": 2376,
    "topicId": 2,
    "question": "Uma carga de 15 kg está suspensa de uma mola com k = 490 N/m, dentro do limite de proporcionalidade (g = 9,8 m/s²). Qual é o alongamento da mola?",
    "options": [
      "3,1 cm",
      "0,30 m",
      "3,3 m",
      "7,2 × 10⁴ m"
    ],
    "correctIndex": 1,
    "explanation": "P = m · g = 15 × 9,8 = 147 N; x = F / k = 147 / 490 = 0,30 m.",
    "distractorAnalysis": [
      "Está incorreta: usa a massa (15 kg) em vez do peso (147 N), esquecendo-se de multiplicar por g.",
      "Está incorreta: divide k pela força (490 / 147), em vez de F / k.",
      "Está incorreta: multiplica a força por k, em vez de dividir."
    ],
    "nursingApplication": "O mesmo princípio é usado nos dinamómetros e balanças de mola suspensas, em que o alongamento da mola indica o peso da carga."
  },
  {
    "id": 2377,
    "topicId": 2,
    "question": "Uma mola alonga 2,0 cm sob uma força de 10 N. Qual será o alongamento sob 25 N, dentro do limite de proporcionalidade?",
    "options": [
      "0,80 cm",
      "12,5 cm",
      "17 cm",
      "5,0 cm"
    ],
    "correctIndex": 3,
    "explanation": "Como F é proporcional a x, x₂ = x₁ · (F₂ / F₁) = 2,0 × (25 / 10) = 5,0 cm.",
    "distractorAnalysis": [
      "Está incorreta: inverte a proporção (2,0 × 10 / 25), em vez de multiplicar pela razão 25 / 10.",
      "Está incorreta: divide 25 por 2,0, em vez de usar a proporcionalidade entre F e x.",
      "Está incorreta: soma a diferença de forças (15) ao alongamento inicial, em vez de usar a proporcionalidade."
    ],
    "nursingApplication": "A proporcionalidade permite ao enfermeiro prever como varia o alongamento de um elástico de exercício quando o utente aumenta a força."
  },
  {
    "id": 2378,
    "topicId": 2,
    "question": "O módulo de Young do osso cortical é cerca de 18 GPa. A quanto corresponde, em Pa?",
    "options": [
      "1,8 × 10¹⁰ Pa",
      "1,8 × 10⁷ Pa",
      "1,8 × 10¹³ Pa",
      "1,8 × 10⁻⁸ Pa"
    ],
    "correctIndex": 0,
    "explanation": "1 GPa = 10⁹ Pa, logo 18 GPa = 18 × 10⁹ Pa = 1,8 × 10¹⁰ Pa.",
    "distractorAnalysis": [
      "Está incorreta: confunde GPa com MPa (10⁶), em vez de 10⁹.",
      "Está incorreta: toma o prefixo G como 10¹², em vez de 10⁹.",
      "Está incorreta: inverte o sinal do expoente ao converter (18 × 10⁻⁹ Pa = 1,8 × 10⁻⁸ Pa)."
    ],
    "nursingApplication": "Converter prefixos corretamente evita erros ao comparar o módulo de Young do osso com o de tecidos moles em tabelas."
  },
  {
    "id": 2379,
    "topicId": 2,
    "question": "O osso cortical suporta cerca de 200 MPa em compressão. Qual é a força máxima de compressão numa secção de 3 cm²?",
    "options": [
      "6 × 10⁶ N",
      "6 × 10² N",
      "6,7 × 10¹¹ N",
      "6 × 10⁴ N"
    ],
    "correctIndex": 3,
    "explanation": "F = σ · S = 200 × 10⁶ × 3 × 10⁻⁴ = 6 × 10⁴ N.",
    "distractorAnalysis": [
      "Está incorreta: converte 1 cm² como 10⁻² m², o que dá 6 × 10⁶ N.",
      "Está incorreta: converte 1 cm² como 10⁻⁶ m², o que dá 6 × 10² N.",
      "Está incorreta: divide a tensão pela área (σ / S), em vez de multiplicar."
    ],
    "nursingApplication": "Estes valores indicam que um osso normal suporta com ampla margem o peso do corpo, e justificam a preocupação quando a secção óssea diminui, como na osteoporose."
  },
  {
    "id": 2380,
    "topicId": 2,
    "question": "Em que condições se pode tratar o osso como sólido de Hooke?",
    "options": [
      "Para qualquer valor de tensão, até à fratura do osso",
      "Só depois de ocorrer uma fratura do osso, nunca antes",
      "Apenas em tração, nunca quando o osso é comprimido",
      "Se a tensão for inferior ao limite de proporcionalidade"
    ],
    "correctIndex": 3,
    "explanation": "A lei de Hooke só descreve o osso enquanto a tensão não ultrapassa o limite de proporcionalidade.",
    "distractorAnalysis": [
      "Está incorreta: acima do limite de proporcionalidade a relação entre tensão e deformação deixa de ser linear.",
      "Está incorreta: o comportamento de Hooke aplica-se antes da fratura, enquanto a tensão é baixa, e não depois dela.",
      "Está incorreta: a lei de Hooke aplica-se tanto à tração como à compressão, dentro do limite de proporcionalidade."
    ],
    "nursingApplication": "Mesmo abaixo desse limite, cargas repetidas podem acumular microlesões no osso (fadiga), o que ajuda a perceber as fraturas de stress em pessoas sujeitas a marchas prolongadas."
  },
  {
    "id": 2381,
    "topicId": 2,
    "question": "Porque se diz que o osso é um material heterogéneo?",
    "options": [
      "Porque tem vários componentes, como a fase mineral e o colagénio",
      "Porque tem as mesmas propriedades em todas as direções",
      "Porque é constituído apenas por hidroxiapatite cristalina",
      "Porque é constituído apenas por osso compacto, sem cavidades"
    ],
    "correctIndex": 0,
    "explanation": "O osso é heterogéneo porque tem vários componentes (mineral, colagénio e outros) e é também anisotrópico e poroso.",
    "distractorAnalysis": [
      "Está incorreta: ter as mesmas propriedades em todas as direções é a isotropia, e o osso é anisotrópico.",
      "Está incorreta: o osso inclui também colagénio tipo I e outros componentes, para além da hidroxiapatite.",
      "Está incorreta: o osso inclui osso esponjoso, cavidades e vasos, para além de osso compacto."
    ],
    "nursingApplication": "A heterogeneidade explica porque duas zonas do mesmo osso, uma compacta e outra esponjosa, suportam cargas diferentes."
  },
  {
    "id": 2382,
    "topicId": 2,
    "question": "O que ocupa as cavidades do osso poroso e que vantagem estrutural isso traz?",
    "options": [
      "Medula óssea e vasos, o que torna o osso mais leve",
      "Hidroxiapatite compacta, o que aumenta a rigidez",
      "Ar, o que torna o osso facilmente compressível",
      "Cartilagem, o que o torna mais rígido"
    ],
    "correctIndex": 0,
    "explanation": "As cavidades estão preenchidas por medula óssea e vasos, o que torna o osso leve sem perder a resistência necessária.",
    "distractorAnalysis": [
      "Está incorreta: as cavidades não estão preenchidas por hidroxiapatite compacta; contêm medula e vasos.",
      "Está incorreta: as cavidades do osso estão ocupadas por medula óssea e vasos, e não por ar.",
      "Está incorreta: a cartilagem não ocupa as cavidades do osso e não confere rigidez adicional."
    ],
    "nursingApplication": "A presença de vasos e medula no osso é a razão pela qual as fraturas se acompanham de hemorragia, que o enfermeiro vigia no utente."
  },
  {
    "id": 2383,
    "topicId": 2,
    "question": "Uma vértebra lombar é um osso irregular. Que organização estrutural apresenta?",
    "options": [
      "Osso esponjoso revestido por osso compacto",
      "Um tubo de osso compacto com cavidade medular",
      "Osso esponjoso sem qualquer revestimento de osso compacto",
      "Osso compacto maciço, sem osso esponjoso"
    ],
    "correctIndex": 0,
    "explanation": "Os ossos curtos e irregulares, como as vértebras, têm osso esponjoso por dentro e osso compacto por fora.",
    "distractorAnalysis": [
      "Está incorreta: essa descrição corresponde à diáfise dos ossos longos.",
      "Está incorreta: os ossos curtos e irregulares têm uma camada exterior de osso compacto a revestir o esponjoso.",
      "Está incorreta: os ossos curtos e irregulares têm um interior esponjoso."
    ],
    "nursingApplication": "Como o corpo vertebral é sobretudo esponjoso, é muito afetado pela perda de trabéculas na osteoporose, o que explica a frequência de fraturas vertebrais por compressão em utentes idosos."
  },
  {
    "id": 2384,
    "topicId": 2,
    "question": "Num gráfico de tensão em função da deformação, como se representa um sólido indeformável?",
    "options": [
      "Por uma reta oblíqua que passa pela origem do gráfico",
      "Por uma reta horizontal acima de uma tensão limiar",
      "Por uma curva que sobe até um máximo e depois desce",
      "Por um segmento sobre o eixo da tensão, sem deformação"
    ],
    "correctIndex": 3,
    "explanation": "Num sólido indeformável a deformação é nula seja qual for a tensão, pelo que o gráfico se sobrepõe ao eixo da tensão.",
    "distractorAnalysis": [
      "Está incorreta: essa reta representa um sólido de Hooke dentro do limite de proporcionalidade.",
      "Está incorreta: essa representação corresponde a um corpo plástico, que se deforma sob tensão limiar.",
      "Está incorreta: um sólido indeformável não se deforma, pelo que o gráfico não é uma curva com deformação."
    ],
    "nursingApplication": "Reconhecer as formas dos gráficos σ(ε) ajuda a interpretar resultados de ensaios de materiais usados em dispositivos médicos."
  },
  {
    "id": 2385,
    "topicId": 2,
    "question": "Sob a mesma tensão de 4 MPa, quantas vezes mais se deforma um tendão (E ≈ 1 × 10⁹ Pa) do que o osso (E ≈ 2 × 10¹⁰ Pa)?",
    "options": [
      "2 vezes mais",
      "200 vezes mais",
      "20 vezes mais",
      "20 vezes menos"
    ],
    "correctIndex": 2,
    "explanation": "ε = σ / E, logo ε<sub>tendão</sub> / ε<sub>osso</sub> = E<sub>osso</sub> / E<sub>tendão</sub> = 2 × 10¹⁰ / 1 × 10⁹ = 20.",
    "distractorAnalysis": [
      "Está incorreta: divide 2 × 10¹⁰ por 1 × 10⁹ e obtém 2, esquecendo-se da diferença entre as potências de 10.",
      "Está incorreta: interpreta 10¹⁰ / 10⁹ como 10², obtendo 200.",
      "Está incorreta: inverte a razão: o tendão tem E menor e, por isso, deforma-se mais, e não menos."
    ],
    "nursingApplication": "Esta diferença explica porque, sob a mesma tensão, o tendão se alonga bastante mais do que o osso e consegue armazenar energia elástica durante a marcha."
  },
  {
    "id": 2386,
    "topicId": 2,
    "question": "Um osso comporta-se elasticamente, com E = 2,0 × 10¹⁰ Pa, e está sujeito a uma tensão de compressão de 4,0 × 10⁶ Pa. Qual é a sua deformação relativa?",
    "options": [
      "2,0 × 10⁻⁴",
      "8,0 × 10¹⁶",
      "5,0 × 10³",
      "2,0 × 10⁴"
    ],
    "correctIndex": 0,
    "explanation": "Da lei σ = E · ε, ε = σ / E = 4,0 × 10⁶ / 2,0 × 10¹⁰ = 2,0 × 10⁻⁴ (adimensional).",
    "distractorAnalysis": [
      "Está incorreta: multiplica σ por E em vez de os dividir, o que dá 8,0 × 10¹⁶.",
      "Está incorreta: inverte a razão, calculando E / σ = 2,0 × 10¹⁰ / 4,0 × 10⁶ = 5,0 × 10³.",
      "Está incorreta: erra o sinal do expoente ao dividir as potências de 10, obtendo 10⁴ em vez de 10⁻⁴."
    ],
    "nursingApplication": "Um osso submetido a cargas fisiológicas sofre deformações relativas muito pequenas, o que explica porque não se nota a sua deformação em condições normais de apoio."
  },
  {
    "id": 2387,
    "topicId": 2,
    "question": "Uma mola tem k = 0,50 N/cm. Qual é o valor de k em N/m?",
    "options": [
      "0,0050 N/m",
      "0,50 N/m",
      "50 N/m",
      "5,0 × 10³ N/m"
    ],
    "correctIndex": 2,
    "explanation": "Como 1 cm = 0,01 m, 1 N/cm = 100 N/m; logo 0,50 N/cm = 50 N/m.",
    "distractorAnalysis": [
      "Está incorreta: divide por 100 em vez de multiplicar, ao converter cm em m.",
      "Está incorreta: não converte a unidade: 0,50 N/cm não é igual a 0,50 N/m.",
      "Está incorreta: multiplica por 10⁴, em vez de 10², na conversão."
    ],
    "nursingApplication": "Escalas e dinamómetros de uso clínico indicam por vezes a rigidez em N/cm, e é preciso converter para N/m nos cálculos."
  },
  {
    "id": 2388,
    "topicId": 2,
    "question": "Duas ligaduras elásticas têm o mesmo comprimento. A ligadura A tem constante elástica maior do que a B. Esticadas ambas 5 cm, qual exerce maior força?",
    "options": [
      "A ligadura A",
      "A ligadura B",
      "Exercem a mesma força",
      "Depende só do comprimento inicial"
    ],
    "correctIndex": 0,
    "explanation": "Como F = k · x, com x igual, a ligadura com maior k exerce maior força.",
    "distractorAnalysis": [
      "Está incorreta: com o mesmo alongamento, F = k · x é maior para o maior k, que é o da A.",
      "Está incorreta: forças iguais exigiriam constantes elásticas iguais, e as ligaduras têm k diferentes.",
      "Está incorreta: a força elástica depende de k e do alongamento, e não apenas do comprimento inicial."
    ],
    "nursingApplication": "Esta ideia é a base da escolha entre ligaduras elásticas de compressão fraca ou forte, conforme o objetivo terapêutico definido para o utente."
  },
  {
    "id": 2389,
    "topicId": 2,
    "question": "Se o alongamento de uma ligadura elástica duplicar, dentro do limite de proporcionalidade, o que acontece à força que ela exerce?",
    "options": [
      "Quadruplica",
      "Duplica",
      "Mantém-se",
      "Reduz-se a metade"
    ],
    "correctIndex": 1,
    "explanation": "Pela lei de Hooke, F é proporcional a x; duplicando x, duplica F.",
    "distractorAnalysis": [
      "Está incorreta: F = k · x é linear em x, e não quadrática, pelo que duplicar x apenas duplica F.",
      "Está incorreta: a força elástica aumenta com o alongamento e não se mantém constante.",
      "Está incorreta: a força elástica aumenta, e não diminui, quando o alongamento aumenta."
    ],
    "nursingApplication": "Por isso, uma ligadura aplicada com tensão excessiva exerce uma compressão desnecessariamente elevada sobre o membro do utente."
  },
  {
    "id": 2390,
    "topicId": 2,
    "question": "Uma carga de 4,0 kg está suspensa de um fio de secção 2,0 mm² (g = 9,8 m/s²). Qual é a tensão no fio?",
    "options": [
      "2,0 × 10⁶ Pa",
      "2,0 × 10⁴ Pa",
      "2,0 × 10¹⁰ Pa",
      "2,0 × 10⁷ Pa"
    ],
    "correctIndex": 3,
    "explanation": "P = m · g = 4,0 × 9,8 = 39,2 N; S = 2,0 mm² = 2,0 × 10⁻⁶ m²; σ = 39,2 / (2,0 × 10⁻⁶) ≈ 2,0 × 10⁷ Pa.",
    "distractorAnalysis": [
      "Está incorreta: usa a massa (4,0 kg) em vez do peso (39,2 N), esquecendo-se de multiplicar por g.",
      "Está incorreta: converte 1 mm² como 10⁻³ m², o que dá 2,0 × 10⁴ Pa.",
      "Está incorreta: converte 1 mm² como 10⁻⁹ m², o que dá 2,0 × 10¹⁰ Pa."
    ],
    "nursingApplication": "O cálculo é análogo ao de um peso suspenso numa tração ortopédica: a tensão no cabo depende da carga e da secção do cabo."
  },
  {
    "id": 2391,
    "topicId": 2,
    "question": "Quantas vezes é o osso (E ≈ 2 × 10¹⁰ Pa) mais rígido do que uma borracha com E ≈ 1 × 10⁷ Pa?",
    "options": [
      "200 vezes",
      "20 000 vezes",
      "2000 vezes",
      "É 2000 vezes menos rígido"
    ],
    "correctIndex": 2,
    "explanation": "A razão é 2 × 10¹⁰ / 1 × 10⁷ = 2 × 10³ = 2000: quanto maior o módulo de Young, maior a rigidez.",
    "distractorAnalysis": [
      "Está incorreta: perde uma potência de 10 ao dividir 2 × 10¹⁰ por 1 × 10⁷.",
      "Está incorreta: ganha uma potência de 10 ao dividir 2 × 10¹⁰ por 1 × 10⁷.",
      "Está incorreta: inverte a razão: o osso tem o módulo de Young maior, pelo que é mais rígido e não menos."
    ],
    "nursingApplication": "Esta diferença enorme de rigidez explica o comportamento muito diferente dos tecidos duros e dos tecidos moles quando sujeitos a cargas."
  },
  {
    "id": 2392,
    "topicId": 2,
    "question": "Argila, plasticina e papel de alumínio amachucado têm em comum que tipo de comportamento?",
    "options": [
      "Deformam-se proporcionalmente à tensão e recuperam a forma",
      "Escoam sob qualquer tensão aplicada e não recuperam a forma",
      "Recuperam lentamente a forma depois de retirada a tensão",
      "Só se deformam acima de uma tensão limiar e ficam deformados"
    ],
    "correctIndex": 3,
    "explanation": "Os corpos plásticos só se deformam a partir de uma tensão limiar e conservam a deformação depois de a tensão cessar.",
    "distractorAnalysis": [
      "Está incorreta: essa descrição corresponde a um sólido de Hooke, e não a corpos plásticos.",
      "Está incorreta: essa descrição corresponde a um corpo viscoso, que flui sob qualquer tensão.",
      "Está incorreta: essa descrição corresponde a um corpo viscoelástico, com recuperação retardada."
    ],
    "nursingApplication": "A deformação permanente de um material plástico é aproveitada, por exemplo, na modelação de talas termoplásticas para imobilizar um dedo."
  },
  {
    "id": 2393,
    "topicId": 2,
    "question": "Num corpo viscoso, a deformação é proporcional à tensão e ao tempo de aplicação. Se a tensão e o tempo duplicarem, o que acontece à deformação?",
    "options": [
      "Duplica",
      "Quadruplica",
      "Mantém-se",
      "Octuplica"
    ],
    "correctIndex": 1,
    "explanation": "Como a deformação é proporcional ao produto da tensão pelo tempo, duplicar ambos multiplica a deformação por 2 × 2 = 4.",
    "distractorAnalysis": [
      "Está incorreta: duplicar só um dos fatores duplicaria a deformação, mas aqui duplicam ambos.",
      "Está incorreta: a deformação aumenta com a tensão e com o tempo, e não se mantém.",
      "Está incorreta: a deformação é proporcional ao produto de dois fatores, e não de três, pelo que o fator é 2 × 2 = 4."
    ],
    "nursingApplication": "A dependência do tempo, também presente nos tecidos moles viscoelásticos, ajuda a perceber porque a duração da pressão de interface sobre o sacro, e não só a sua intensidade, influencia o risco de lesão por pressão."
  },
  {
    "id": 2394,
    "topicId": 2,
    "question": "Num sólido de Hooke, o alongamento depende do tempo durante o qual a força é aplicada?",
    "options": [
      "Sim, aumenta progressivamente com o tempo de aplicação da força",
      "Sim, diminui progressivamente com o tempo de aplicação da força",
      "Não, depende só da intensidade da força, dentro do limite",
      "Sim, depende só do tempo e não da força aplicada ao corpo"
    ],
    "correctIndex": 2,
    "explanation": "Num sólido de Hooke, a deformação é proporcional à tensão e não depende do tempo de aplicação.",
    "distractorAnalysis": [
      "Está incorreta: o aumento progressivo com o tempo é característico de corpos viscosos e viscoelásticos, e não de sólidos de Hooke.",
      "Está incorreta: uma diminuição progressiva não é característica de um sólido de Hooke, cujo alongamento é constante.",
      "Está incorreta: o alongamento depende da força aplicada (x = F / k), e não só do tempo."
    ],
    "nursingApplication": "Esta independência do tempo distingue uma mola de um tecido biológico, onde o tempo de carga altera a deformação."
  },
  {
    "id": 2395,
    "topicId": 2,
    "question": "Qual dos pares seguintes contém apenas exemplos próximos de sólidos de Hooke?",
    "options": [
      "Mola e fio de nylon",
      "Água e mel",
      "Plasticina e argila",
      "Esponja e cartilagem"
    ],
    "correctIndex": 0,
    "explanation": "A mola e o fio de nylon aproximam-se de sólidos de Hooke para pequenas deformações, dentro do limite de proporcionalidade.",
    "distractorAnalysis": [
      "Está incorreta: a água e o mel são corpos viscosos.",
      "Está incorreta: a plasticina e a argila são corpos plásticos.",
      "Está incorreta: a esponja e a cartilagem são corpos viscoelásticos."
    ],
    "nursingApplication": "As molas de aço com comportamento próximo do de Hooke são usadas em dinamómetros de preensão, porque a força medida é proporcional ao alongamento."
  },
  {
    "id": 2396,
    "topicId": 2,
    "question": "Em que estruturas se encontra o músculo liso?",
    "options": [
      "Nos músculos ligados aos ossos, como o bíceps",
      "Na parede do coração (miocárdio)",
      "Nos músculos da mastigação, como o masséter",
      "Nas paredes de órgãos ocos e de sistemas tubulares"
    ],
    "correctIndex": 3,
    "explanation": "O músculo liso reveste as paredes de órgãos ocos e de sistemas tubulares, com contrações lentas, sustentadas e ondulatórias.",
    "distractorAnalysis": [
      "Está incorreta: os músculos ligados aos ossos, como o bíceps, são de músculo estriado esquelético.",
      "Está incorreta: o miocárdio é músculo estriado cardíaco.",
      "Está incorreta: o masséter é um músculo estriado esquelético."
    ],
    "nursingApplication": "As contrações ondulatórias do músculo liso intestinal (peristaltismo) produzem os ruídos hidroaéreos que o enfermeiro ausculta ao avaliar o trânsito intestinal de um utente."
  },
  {
    "id": 2397,
    "topicId": 2,
    "question": "Em geral, como é que um osso longo suporta a carga aplicada ao longo do seu eixo, em comparação com uma carga perpendicular ao eixo?",
    "options": [
      "Suporta melhor a carga ao longo do eixo",
      "Suporta melhor a carga perpendicular ao eixo",
      "Suporta ambas da mesma forma",
      "Só suporta cargas de tração, nunca de compressão"
    ],
    "correctIndex": 0,
    "explanation": "Ao longo do eixo a carga produz sobretudo compressão, enquanto uma carga perpendicular flete o osso e gera tensões muito maiores na periferia; além disso, o osso cortical é anisotrópico e mais resistente na direção longitudinal.",
    "distractorAnalysis": [
      "Está incorreta: uma carga perpendicular flete o osso, gerando tensões elevadas na periferia, e o osso cortical é também menos resistente na direção transversal.",
      "Está incorreta: por ser anisotrópico, o osso responde de modo diferente conforme a direção da carga.",
      "Está incorreta: o osso suporta tanto tração como compressão, e até resiste mais à compressão."
    ],
    "nursingApplication": "Por isso, os impactos laterais, como uma queda de lado sobre a anca, são especialmente perigosos para o osso do idoso."
  },
  {
    "id": 2398,
    "topicId": 2,
    "question": "Qual das associações entre tipo de deformação e forças aplicadas está correta?",
    "options": [
      "Flexão: duas forças divergentes nas extremidades, ao longo do eixo",
      "Cisalhamento: duas forças convergentes nas extremidades, ao longo do eixo",
      "Torção: dois binários de sentidos opostos nas extremidades, em torno do eixo",
      "Compressão: forças opostas, tangenciais a superfícies paralelas"
    ],
    "correctIndex": 2,
    "explanation": "Na torção, dois binários de sentidos opostos atuam nas extremidades, em torno do eixo, e as camadas rodam umas em relação às outras.",
    "distractorAnalysis": [
      "Está incorreta: forças divergentes ao longo do eixo correspondem à tração; a flexão resulta de uma força perpendicular ao eixo, com apoios nas extremidades.",
      "Está incorreta: forças convergentes ao longo do eixo correspondem à compressão, e não ao cisalhamento.",
      "Está incorreta: forças opostas e tangenciais a superfícies paralelas correspondem ao cisalhamento."
    ],
    "nursingApplication": "Saber associar cada tipo de deformação às forças que o causam ajuda a interpretar o mecanismo de lesão descrito na admissão de um utente."
  },
  {
    "id": 2399,
    "topicId": 2,
    "question": "Qual das afirmações sobre a rigidez de um material está correta?",
    "options": [
      "Quanto maior o módulo de Young, maior a resistência à rotura",
      "Quanto maior o módulo de Young, menor a deformação para a mesma tensão",
      "A rigidez depende só das dimensões do corpo",
      "Quanto maior o módulo de Young, maior a deformação para a mesma tensão"
    ],
    "correctIndex": 1,
    "explanation": "A rigidez é a capacidade de um corpo se opor à deformação elástica: quanto maior E, menor ε para a mesma tensão.",
    "distractorAnalysis": [
      "Está incorreta: o módulo de Young mede a rigidez e não indica a resistência à rotura.",
      "Está incorreta: a rigidez intrínseca do material depende do módulo de Young, e não apenas das dimensões do corpo.",
      "Está incorreta: ε = σ / E: um maior E dá uma menor deformação para a mesma tensão."
    ],
    "nursingApplication": "Esta noção ajuda a escolher dispositivos mais rígidos, como talas e coletes, quando se pretende limitar o movimento de um segmento do corpo."
  },
  {
    "id": 2400,
    "topicId": 2,
    "question": "Qual das unidades seguintes NÃO pode ser usada para exprimir a tensão mecânica?",
    "options": [
      "Pa",
      "N/m²",
      "N/m",
      "MPa"
    ],
    "correctIndex": 2,
    "explanation": "A tensão é força por unidade de área (Pa = N/m²); N/m é a unidade da constante elástica k.",
    "distractorAnalysis": [
      "Está incorreta: o pascal é a unidade SI da tensão mecânica e pode ser usado.",
      "Está incorreta: N/m² é equivalente ao pascal e pode ser usado.",
      "Está incorreta: o megapascal é um múltiplo do pascal e pode ser usado."
    ],
    "nursingApplication": "Saber que 1 Pa = 1 N/m² ajuda a interpretar valores em kPa indicados nas fichas técnicas de dispositivos, como manómetros ou colchões de pressão alternada."
  }
];
