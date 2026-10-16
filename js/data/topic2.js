/**
 * BANCO DE QUESTÕES CERTIFICADAS - TÓPICO 2
 * Elasticidade dos Corpos e Resistência dos Materiais
 * Alinhado estritamente com os conceitos de Biofísica (Prof. Paulo Pereira)
 * Perguntas autónomas e focadas em princípios físicos e biomecânicos
 * Total de Questões: 100 (IDs 2201 a 2300)
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
    "nursingApplication": "Os modelos de sólido de Hooke servem para descrever a parte inicial da resposta elástica de alguns tecidos, como o tendão ou a pele, sob cargas pequenas."
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
    "nursingApplication": "A deformação permanente de um material plástico é um bom modelo para compreender a deformação que fica em tecidos sujeitos a pressões fortes e prolongadas."
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
    "nursingApplication": "A massa de pão, pela sua combinação de comportamentos, é uma boa analogia para compreender a resposta de alguns tecidos a pressões fortes e prolongadas."
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
    "nursingApplication": "A dissipação de energia nos músculos e ossos durante a marcha ajuda a compreender porque é que a fadiga aparece e porque é que a recuperação após esforço é necessária."
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
      "Está incorreta: N/m é a unidade da constante elástica k, que depende das dimensões do corpo, e não do módulo de Young.",
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
      "Está incorreta: o débito cardíaco depende da frequência cardíaca e do volume de ejeção, não da elasticidade arterial, que amortece a pulsação.",
      "Está incorreta: a elasticidade arterial não substitui o coração; o bombeamento do sangue é gerado pelo miocárdio."
    ],
    "nursingApplication": "A perda de elasticidade das artérias com a idade faz aumentar a pressão de pulso, algo que o enfermeiro deve ter em conta na interpretação da tensão arterial de um idoso."
  },
  {
    "id": 2215,
    "topicId": 2,
    "question": "Quais são os cinco tipos de deformação básicos de deformação mecânica de um sólido?",
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
    "question": "Um tubo de mel é sujeito a uma tensão de cisalhamento constante. O que acontece à deformação ao longo do tempo?",
    "options": [
      "Mantém-se constante desde o início, pois a tensão não varia.",
      "Diminui até anular-se, com recuperação completa da forma.",
      "Cresce continuamente enquanto a tensão atuar, sem recuperar a forma inicial.",
      "Oscila em torno de um valor fixo, como uma mola em vibração livre, sem qualquer amortecimento apreciável."
    ],
    "correctIndex": 2,
    "explanation": "Num corpo viscoso a deformação cresce com o tempo enquanto atuar a tensão, e não é restituída quando a tensão cessa.",
    "distractorAnalysis": [
      "Está incorreta: num corpo viscoso a deformação depende do tempo de aplicação, por isso não fica constante com a tensão.",
      "Está incorreta: a recuperação completa corresponde a um sólido elástico, e não a um fluido viscoso.",
      "Está incorreta: a oscilação em torno de um valor fixo é típica de um oscilador elástico, e não de um corpo viscoso."
    ],
    "nursingApplication": "Em soluções viscosas administradas por via oral, o escoamento depende do tempo, pelo que a consistência de um espessante deve ser verificada ao longo da administração."
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
      "Está incorreta: ambos não recuperam a forma original, ao contrário do que a afirmação indica.",
      "Está incorreta: a proporcionalidade simples sem dependência do tempo é a do sólido de Hooke, que não se aplica a nenhum dos dois."
    ],
    "nursingApplication": "A distinção entre plástico e viscoso ajuda a interpretar porque é que um tecido pode ficar com marca permanente após pressão forte (plástico) ou ceder progressivamente com a duração da pressão (viscoso)."
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
      "Está incorreta: inverte a ordem, pois a deformação permanente surge acima do limiar e não abaixo dele.",
      "Está incorreta: a ausência de tensão mínima é característica dos corpos viscosos, e não dos plastoviscoelásticos.",
      "Está incorreta: a ausência de deformação permanente contraria a definição de corpo plástico, que mantém a deformação máxima."
    ],
    "nursingApplication": "A massa de pão e alguns tecidos moles sob compressão prolongada podem comportar-se assim: pequenas pressões recuperam, mas pressões acima de um limiar deixam marca permanente."
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
      "Está incorreta: dividir a tensão pela deformação dá o módulo de Young (E = σ/ε), e não a tensão.",
      "Está incorreta: troca a deformação pela tensão, o que faria a deformação relativa depender de E de forma proporcional ao próprio σ.",
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
      "Está incorreta: 5 m corresponde a 5 cm, o que resulta de confundir centímetros com metros."
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
    "nursingApplication": "A força exercida por uma mola de um dispositivo de tração ou de um estribo de reabilitação depende da sua constante e do alongamento imposto ao aparelho."
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
    "explanation": "A deformação relativa é ΔL/L0. Com ΔL = 2 mm = 0,002 m e L0 = 10 cm = 0,10 m, obtém-se ε = 0,002 / 0,10 = 0,02, sem unidades.",
    "distractorAnalysis": [
      "Está incorreta: não converte as unidades, dividindo 2 mm por 10 cm e obtendo 0,2.",
      "Está incorreta: dá apenas o alongamento em metros, sem dividir pelo comprimento inicial.",
      "Está incorreta: inverte a divisão, calculando L0/ΔL = 0,10 / 0,002 = 50."
    ],
    "nursingApplication": "A deformação relativa permite comparar o alongamento de tendões de comprimentos diferentes, algo útil na avaliação da mobilidade e da recuperação de uma lesão."
  },
  {
    "id": 2225,
    "topicId": 2,
    "question": "Uma barra elástica tem módulo de Young E = 2,0 × 10⁹ Pa, secção S = 1,0 × 10⁻⁴ m² e comprimento inicial L0 = 0,50 m. Qual é a sua constante elástica k?",
    "options": [
      "2,0 × 10⁵ N/m",
      "4,0 × 10⁵ N/m",
      "2,5 × 10⁻⁶ N/m",
      "1,0 × 10⁹ N/m"
    ],
    "correctIndex": 1,
    "explanation": "A constante elástica é k = E · S / L0 = (2,0 × 10⁹ × 1,0 × 10⁻⁴) / 0,50 = 4,0 × 10⁵ N/m.",
    "distractorAnalysis": [
      "Está incorreta: esquece a divisão por L0, ficando apenas com E · S = 2,0 × 10⁵ N/m.",
      "Está incorreta: inverte a fração, calculando L0 / (E · S) = 2,5 × 10⁻⁶ N/m.",
      "Está incorreta: multiplica E por L0 em vez de S / L0, o que dá 1,0 × 10⁹ N/m."
    ],
    "nursingApplication": "A constante elástica de um segmento de tecido mole depende das suas dimensões, pelo que um tecido mais curto e com maior secção é mais rígido."
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
      "Está incorreta: a força atua no eixo, mas a deformação transversal existe sempre que há deformação longitudinal.",
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
    "nursingApplication": "A força restauradora de um elástico ou de uma mola de um aparelho ortopédico é a que o aparelho exerce sobre o membro, e deve ser oposta ao movimento imposto."
  },
  {
    "id": 2229,
    "topicId": 2,
    "question": "Num gráfico de tensão em função da deformação relativa de um tecido, a parte inicial é uma reta. O que representa esta reta?",
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
    "nursingApplication": "Dentro da zona linear, a resposta de um tendão ou de um osso é previsível e reversível, enquanto ultrapassar esse limite pode deixar a estrutura danificada."
  },
  {
    "id": 2230,
    "topicId": 2,
    "question": "Qual das afirmações sobre a lei de Hooke, na forma σ = E · ε, é correta?",
    "options": [
      "Vale para qualquer intensidade de força, em todos os materiais elásticos conhecidos.",
      "Vale apenas para corpos viscosos, como o mel, cuja deformação depende do tempo.",
      "Só vale até ao limite de proporcionalidade; a borracha e o tendão são não lineares.",
      "Vale apenas para a compressão, pois na tração a relação deixa de ser linear."
    ],
    "correctIndex": 2,
    "explanation": "A relação linear σ = E · ε só é válida na zona de proporcionalidade. Há materiais elásticos não lineares, como a borracha e o tendão, em que E não é constante.",
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
    "explanation": "ΔL = L_f − L0 = 38 cm − 40 cm = −2 cm. Logo ε = ΔL / L0 = −2 / 40 = −0,05, sem unidades; o sinal negativo indica encurtamento.",
    "distractorAnalysis": [
      "Está incorreta: não divide a variação de comprimento pelo comprimento inicial, ficando apenas com −2 cm.",
      "Está incorreta: esquece o sinal negativo, o que ignora que a barra encurtou.",
      "Está incorreta: inverte a divisão, calculando L0 / ΔL = −20, que não é uma deformação relativa."
    ],
    "nursingApplication": "O encurtamento relativo de um osso ou de um músculo, medido em radiografias ou ecografias, é expresso em relação ao comprimento inicial, para comparar casos diferentes."
  },
  {
    "id": 2233,
    "topicId": 2,
    "question": "Qual é o enunciado da lei de Hooke ?",
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
    "explanation": "Como k = E · S / L0, com E e S iguais, o dobro do comprimento reduz a constante elástica para metade.",
    "distractorAnalysis": [
      "Está incorreta: como k é inversamente proporcional ao comprimento, o dobro do comprimento reduz k para metade, e não a duplica.",
      "Está incorreta: a constante k depende das dimensões do corpo, e não apenas do material.",
      "Está incorreta: o efeito do comprimento sobre k é inverso e linear, e não quadrático."
    ],
    "nursingApplication": "Um segmento de tecido mais comprido é mais flexível sob a mesma força, o que se deve ter em conta ao comparar a rigidez de um mesmo músculo em posições diferentes."
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
    "explanation": "Como k = E · S / L0, com S e L0 iguais, a constante elástica é diretamente proporcional a E. A barra A, com E quinze vezes maior, tem maior constante elástica.",
    "distractorAnalysis": [
      "Está incorreta: uma barra que se deforma mais, para a mesma força, tem menor constante elástica, e não maior.",
      "Está incorreta: k = E · S / L0 depende de E, pelo que, com módulos diferentes, as constantes também diferem.",
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
    "nursingApplication": "A partir da tensão e do módulo de Young de um tecido, é possível estimar a deformação relativa esperada, o que ajuda a interpretar a resposta de uma estrutura a uma carga clínica."
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
      "Está incorreta: dividir a constante pelo alongamento, em vez de multiplicar, dá 12 500 N.",
      "Está incorreta: dividir o alongamento pela constante dá 0,00008 N, em vez de 20 N.",
      "Está incorreta: não converte 4 cm para metros, multiplicando 500 por 4, o que dá 2000 N."
    ],
    "nursingApplication": "Uma mola de compressão de um dispositivo de aplicação de carga deve ser calibrada com unidades coerentes, para que a força indicada corresponda à força real aplicada."
  },
  {
    "id": 2238,
    "topicId": 2,
    "question": "Uma força de 9 N alonga uma mola de 0,15 m, dentro do limite de proporcionalidade. Qual é a constante elástica da mola?",
    "options": [
      "60 N/m",
      "0,0167 N/m",
      "1,35 N/m",
      "9,15 N/m"
    ],
    "correctIndex": 0,
    "explanation": "Da lei de Hooke, k = F / x = 9 N / 0,15 m = 60 N/m.",
    "distractorAnalysis": [
      "Está incorreta: inverte a relação, dividindo o alongamento pela força, o que dá 0,0167 N/m.",
      "Está incorreta: multiplica a força pelo alongamento, em vez de dividir, o que dá 1,35 N/m.",
      "Está incorreta: soma a força e o alongamento, em vez de os dividir, o que dá 9,15 N/m."
    ],
    "nursingApplication": "Calcular a constante elástica de uma mola de reabilitação a partir de uma força conhecida permite escolher o aparelho adequado ao nível de carga pretendido."
  },
  {
    "id": 2239,
    "topicId": 2,
    "question": "Um osso com secção de 3,0 cm² suporta uma compressão de 6,0 × 10³ N, dentro do limite de proporcionalidade. Qual é a tensão mecânica no osso?",
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
      "A relação linear entre tensão e deformação, logo σ = E · ε.",
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
    "nursingApplication": "Saber que, acima do limite de proporcionalidade, a deformação deixa de ser reversível e proporcional ajuda a perceber porque é que cargas excessivas podem lesionar ossos e tendões."
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
    "nursingApplication": "A compressão axial da coluna em posição de pé é a razão pela qual a altura de um idoso pode diminuir ao longo dos anos, por encurtamento dos discos e das vértebras."
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
    "nursingApplication": "Um osso longo como a tíbia pode fletir sob um impacto lateral, o que deve ser pensado quando se avalia um doente após uma queda ou um traumatismo."
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
    "nursingApplication": "Ao rodar um membro durante a mobilização ou ao fazer uma rotação excessiva, as fibras mais afastadas do eixo do osso são as mais solicitadas."
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
      "Porque aumenta o momento fletor na coluna, equilibrado pelos extensores.",
      "Porque a carga passa a pesar menos quando é segurada longe do tronco, aliviando a coluna lombar.",
      "Porque o braço da carga em relação à coluna se torna nulo.",
      "Porque o momento torsor sobre a coluna se torna nulo."
    ],
    "correctIndex": 0,
    "explanation": "Afastar a carga do tronco aumenta o seu braço em relação à coluna lombar, e o momento fletor resultante é equilibrado pela ação dos músculos extensores.",
    "distractorAnalysis": [
      "Está incorreta: a carga mantém o seu peso; é a distância ao tronco (o braço do momento) que aumenta.",
      "Está incorreta: o braço da carga em relação à coluna aumenta, e não se torna nulo.",
      "Está incorreta: a carga afastada do tronco cria um momento fletor, e não um momento torsor nulo."
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
    "nursingApplication": "Distinguir a área de estudo (reologia) dos tipos de deformação ajuda a organizar a análise de uma lesão, primeiro identificando o tipo de força e só depois a resposta do tecido."
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
    "nursingApplication": "As fibras mais exteriores de um osso ou de um tendão são as mais solicitadas numa torção, o que explica porque é que as lesões costumam começar na periferia."
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
    "nursingApplication": "Na escolha de um fio ou de uma banda elástica para exercícios de reabilitação, a força depende do alongamento em metros e da constante do material, não de centímetros."
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
    "nursingApplication": "A leitura de um dinamómetro de mola depende da sua calibração em newtons, pelo que o alongamento indicado na escala deve ser convertido corretamente antes de interpretar a força aplicada."
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
    "question": "Quanto ao grau de elasticidade, como podem classificar-se os sólidos reais?",
    "options": [
      "Sólidos de Euclides, sólidos de Hooke e corpos plásticos, consoante a sua reação a forças.",
      "Perfeitamente elásticos, imperfeitamente elásticos e inelásticos.",
      "Viscosos, viscoelásticos e plastoviscoelásticos.",
      "Elásticos, plásticos e indeformáveis, sem subdivisão."
    ],
    "correctIndex": 1,
    "explanation": "Quanto ao grau de elasticidade, os sólidos reais podem ser perfeitamente elásticos, imperfeitamente elásticos ou inelásticos.",
    "distractorAnalysis": [
      "Está incorreta: estes são tipos de corpos segundo o comportamento reológico, e não a classificação quanto ao grau de elasticidade.",
      "Está incorreta: estes são corpos de comportamento reológico em que a deformação depende do tempo, e não a classificação pelo grau de elasticidade.",
      "Está incorreta: os indeformáveis são um modelo teórico, e a lista não inclui os inelásticos, que são um dos graus de elasticidade."
    ],
    "nursingApplication": "Saber em que grau de elasticidade se encaixa um tecido ajuda a prever se ele recupera a forma após uma compressão ou se fica com deformação permanente."
  },
  {
    "id": 2261,
    "topicId": 2,
    "question": "Um músculo é modelado como uma barra com módulo de Young E = 2,0 × 10⁵ Pa, secção S = 4,0 × 10⁻³ m² e comprimento inicial L0 = 0,40 m. Qual é a sua constante elástica k?",
    "options": [
      "8,0 × 10² N/m",
      "5,0 × 10⁻⁴ N/m",
      "2,0 × 10³ N/m",
      "8,0 × 10⁴ N/m"
    ],
    "correctIndex": 2,
    "explanation": "A constante elástica é k = E · S / L0 = (2,0 × 10⁵ × 4,0 × 10⁻³) / 0,40 = 800 / 0,40 = 2,0 × 10³ N/m.",
    "distractorAnalysis": [
      "Está incorreta: esquece a divisão por L0, ficando apenas com E · S = 8,0 × 10² N/m.",
      "Está incorreta: inverte a fração, calculando L0 / (E · S) = 5,0 × 10⁻⁴ N/m.",
      "Está incorreta: multiplica E por L0 em vez de S / L0, o que dá 8,0 × 10⁴ N/m."
    ],
    "nursingApplication": "A rigidez de um músculo depende da sua área e do seu comprimento, o que ajuda a perceber porque é que um músculo mais curto e mais espesso responde de forma diferente à mesma carga."
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
    "explanation": "ΔL = ε · L0 = 0,04 × 15 cm = 0,6 cm = 6 mm.",
    "distractorAnalysis": [
      "Está incorreta: usa o comprimento inicial como 15 mm, sem o converter para milímetros, o que dá 0,6 mm.",
      "Está incorreta: confunde 15 cm com 1,5 m, o que dá 0,06 m.",
      "Está incorreta: inverte a relação, dividindo L0 por ε, o que dá 3,75 m."
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
    "nursingApplication": "A deformação relativa de um ligamento sob uma carga conhecida permite estimar se a lesão está dentro da zona reversível ou se ultrapassou o limite de proporcionalidade."
  },
  {
    "id": 2266,
    "topicId": 2,
    "question": "Uma mola de um estribo de reabilitação tem constante elástica 300 N/m e é alongada 8 cm, dentro do limite de proporcionalidade. Qual é a força exercida pela mola?",
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
    "nursingApplication": "Ao comparar a resposta de dois tecidos a uma mesma pressão, o que interessa é o declive da zona linear, porque indica quanto cada tecido cede."
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
    "nursingApplication": "A deformação permanente dos corpos plásticos serve de modelo para compreender porque é que certas pressões acima de um limiar deixam marca mesmo depois de a força cessar."
  },
  {
    "id": 2271,
    "topicId": 2,
    "question": "Num doente acamado, a pressão de interface sobre o sacro é a força por unidade de área exercida pelo colchão sobre a pele. Que grandeza física descreve esta pressão?",
    "options": [
      "Constante elástica, em N/m.",
      "Deformação relativa, sem unidades.",
      "Tensão mecânica normal de compressão, em pascal.",
      "Módulo de Young, em newton, por cada metro de comprimento."
    ],
    "correctIndex": 2,
    "explanation": "A pressão de interface é uma força normal por unidade de área, ou seja, uma tensão mecânica de compressão, expressa em pascal (N/m²).",
    "distractorAnalysis": [
      "Está incorreta: a constante elástica, em N/m, caracteriza uma mola e não uma força por unidade de área.",
      "Está incorreta: a deformação relativa é um quociente de comprimentos e não uma força por unidade de área.",
      "Está incorreta: o módulo de Young é expresso em pascal, e não em newton, pois é a razão entre tensão e deformação."
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
    "explanation": "Como k = E · S / L0, com S e L0 iguais, a constante elástica é diretamente proporcional a E. O aço, com E muito superior, tem maior k.",
    "distractorAnalysis": [
      "Está incorreta: deformar-se mais, para a mesma força, corresponde a menor constante elástica, e não a maior.",
      "Está incorreta: k depende de E, S e L0; com módulos de Young diferentes, as constantes também diferem.",
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
      "Está incorreta: divide a constante pelo alongamento, em vez de multiplicar, o que dá 1,25 × 10⁶ N.",
      "Está incorreta: divide o alongamento pela constante, o que dá 8,0 × 10⁻⁷ N.",
      "Está incorreta: usa apenas a constante, esquecendo o alongamento, o que dá 2,5 × 10⁴ N."
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
      "2,0 × 10⁹ Pa"
    ],
    "correctIndex": 0,
    "explanation": "Da relação σ = E · ε resulta E = σ / ε = 2,0 × 10⁵ / 0,004 = 5,0 × 10⁷ Pa.",
    "distractorAnalysis": [
      "Está incorreta: multiplica a tensão pela deformação, em vez de dividir, o que dá 8,0 × 10² Pa.",
      "Está incorreta: inverte a relação, calculando ε / σ = 2,0 × 10⁻⁸, em vez de σ / ε.",
      "Está incorreta: lê 0,004 como 0,0001, o que dá 2,0 × 10⁹ Pa."
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
    "explanation": "ε = ΔL / L0, com ΔL = 3,0 mm = 0,0030 m e L0 = 1,5 m. Logo ε = 0,0030 / 1,5 = 0,002, sem unidades.",
    "distractorAnalysis": [
      "Está incorreta: divide o alongamento por 15 em vez de por 1,5, o que dá 0,0002.",
      "Está incorreta: divide 1,5 m por 3,0 mm sem converter unidades, o que dá 0,5.",
      "Está incorreta: inverte a divisão, calculando L0 / ΔL com ΔL em metros, o que dá 500."
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
      "Deformação nula na cicatriz, pois o módulo de Young é finito."
    ],
    "correctIndex": 0,
    "explanation": "Como ε = σ / E, para a mesma tensão um módulo maior dá uma deformação relativa menor. A cicatriz, mais rígida, deforma-se menos do que a pele vizinha.",
    "distractorAnalysis": [
      "Está incorreta: com a mesma tensão, maior rigidez implica menor deformação, e não maior.",
      "Está incorreta: a deformação depende do módulo de Young; zonas com E diferente deformam-se de forma diferente, mesmo com a mesma tensão.",
      "Está incorreta: um módulo finito dá uma deformação não nula para qualquer tensão não nula."
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
    "nursingApplication": "Ao enrolar uma ligadura elástica sobre um membro, esta fica mais estreita ao ser esticada, o que deve ser considerado para não aplicar uma compressão excessiva."
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
    "explanation": "σ = F / S = 2,0 × 10⁷ Pa; ε = σ / E = 0,020; ΔL = ε · L0 = 0,020 × 0,80 m = 0,016 m = 1,6 cm.",
    "distractorAnalysis": [
      "Está incorreta: troca a unidade, pois 0,016 m equivalem a 1,6 cm e não a 0,016 cm.",
      "Está incorreta: confunde centímetros com metros, o que multiplica o resultado por 100.",
      "Está incorreta: comete um erro de potência de dez no cálculo da deformação relativa, o que dá 0,0016 m."
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
    "explanation": "A pressão de interface é σ = F / S. Com a mesma força e metade da área, a pressão duplica.",
    "distractorAnalysis": [
      "Está incorreta: a pressão é inversamente proporcional à área; reduzir a área aumenta a pressão, e não a reduz.",
      "Está incorreta: ignora a área, que é o denominador de σ = F / S.",
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
      "6,0 × 10³ Pa"
    ],
    "correctIndex": 2,
    "explanation": "σ = F / S = 300 N / 0,02 m² = 1,5 × 10⁴ Pa.",
    "distractorAnalysis": [
      "Está incorreta: multiplica a força pela área, em vez de dividir, o que dá 6,0 Pa.",
      "Está incorreta: lê 0,02 m² como 2 m², o que dá 1,5 × 10² Pa.",
      "Está incorreta: usa 0,05 m² em vez de 0,02 m², o que dá 6,0 × 10³ Pa."
    ],
    "nursingApplication": "Calcular a pressão de interface a partir da força e da área de contacto permite comparar superfícies de apoio e escolher a superfície que melhor distribui a pressão sobre as zonas de risco."
  },
  {
    "id": 2289,
    "topicId": 2,
    "question": "Uma mola com constante elástica 150 N/m é alongada 6 cm, dentro do limite de proporcionalidade. Qual é a força elástica exercida pela mola?",
    "options": [
      "0,0004 N",
      "900 N",
      "9 N",
      "2500 N"
    ],
    "correctIndex": 2,
    "explanation": "F = k · x = 150 N/m × 0,06 m = 9 N.",
    "distractorAnalysis": [
      "Está incorreta: divide o alongamento pela constante, em vez de multiplicar, o que dá 0,0004 N.",
      "Está incorreta: não converte 6 cm para metros, multiplicando 150 por 6, o que dá 900 N.",
      "Está incorreta: divide a constante pelo alongamento, em vez de multiplicar, o que dá 2500 N."
    ],
    "nursingApplication": "Um dispositivo de reabilitação com mola deve ser usado com a força indicada pelo fabricante, pelo que a relação entre alongamento e força deve ser conhecida pelo enfermeiro."
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
      "Está incorreta: lê o módulo de Young como 1,0 × 10¹⁰ Pa, o que dá 3,0 × 10⁻⁴."
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
    "explanation": "σ = F / S = 200 / 1,0 × 10⁻⁴ = 2,0 × 10⁶ Pa; ε = ΔL / L0 = 1,0 × 10⁻³ / 1,0 = 1,0 × 10⁻³; logo E = σ / ε = 2,0 × 10⁹ Pa.",
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
      "Está incorreta: descreve uma relação quadrática, que não corresponde à lei de Hooke, que é linear.",
      "Está incorreta: inverte a relação entre x e k, em vez de a multiplicar."
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
    "explanation": "ε = ΔL / L0 = 5 mm / 25 cm = 0,005 m / 0,25 m = 0,02, sem unidades.",
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
    "question": "Uma mola com constante elástica 75 N/m é comprimida 8 mm, dentro do limite de proporcionalidade. Qual é a força elástica exercida pela mola?",
    "options": [
      "0,6 N",
      "600 N",
      "0,0001 N",
      "9375 N"
    ],
    "correctIndex": 0,
    "explanation": "Converte-se primeiro a compressão: 8 mm = 0,008 m. Então F = k · x = 75 N/m × 0,008 m = 0,6 N.",
    "distractorAnalysis": [
      "Está incorreta: não converte 8 mm para metros, multiplicando 75 por 8, o que dá 600 N.",
      "Está incorreta: divide o alongamento pela constante, em vez de multiplicar, o que dá cerca de 0,0001 N.",
      "Está incorreta: divide a constante pelo alongamento, em vez de multiplicar, o que dá 9375 N."
    ],
    "nursingApplication": "Ao ajustar um aparelho com mola de compressão, a força depende da constante e da compressão efetiva em metros, e não do valor lido em milímetros na escala."
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
    "nursingApplication": "Distinguir os dois comportamentos ajuda a perceber porque é que alguns tecidos recuperam com o repouso, enquanto outros ficam marcados quando a pressão ultrapassa um certo valor."
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
    "explanation": "Num tecido viscoelástico, a deformação sob carga constante aumenta com o tempo, e a recuperação só ocorre quando a pressão é aliviada. Por isso, o reposicionamento deve ser planeado.",
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
    "explanation": "Como k = E · S / L0, ao triplicar L0 a constante elástica fica dividida por três.",
    "distractorAnalysis": [
      "Está incorreta: triplicar k ignora que a constante elástica é inversamente proporcional ao comprimento inicial.",
      "Está incorreta: a constante depende do comprimento, pelo que não se mantém quando o comprimento muda.",
      "Está incorreta: a dependência de k em L0 é inversa e linear, pelo que o fator é 1/3 e não 1/9."
    ],
    "nursingApplication": "Um segmento de tecido mais longo é menos rígido sob a mesma força, o que deve ser considerado ao comparar a resposta de um mesmo músculo em posições diferentes."
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
  }
];
