/**
 * BANCO DE QUESTÕES CERTIFICADAS - TÓPICO 2
 * Elasticidade dos Corpos e Resistência dos Materiais
 * Alinhado estritamente com os 44 slides do PowerPoint (1BF)
 * Foco estrito em Física/Biofísica sem jargão clínico prévio de Enfermagem
 * Total de Questões: 500 (IDs 2001 a 2500)
 */

const TOPIC_2_QUESTIONS = [
  {
    "id": 2001,
    "topicId": 2,
    "question": "Qual é a definição exata de Reologia no estudo da Biofísica?",
    "options": [
      "O estudo da velocidade de emissão de partículas alfa em elementos radioativos de transição.",
      "O ramo da física que estuda as reações dos corpos à ação de forças deformadoras aplicadas sobre a sua estrutura.",
      "A área que analisa exclusivamente o campo gravitacional gerado por massas puntiformes no vácuo.",
      "A parte da ótica geométrica que investiga a refração da luz branca em prismas triangulares."
    ],
    "correctIndex": 1,
    "explanation": "A Reologia investiga como os materiais se deformam e fluem sob a ação de forças mecânicas externas.",
    "distractorAnalysis": [
      "Está incorreta: Emissões alfa pertencem à física nuclear e radioatividade, não à reologia.",
      "Está incorreta: Campos gravitacionais de massas no vácuo pertencem à gravitação universal de Newton.",
      "Está incorreta: Refração da luz em prismas é o domínio da ótica ondulatória e geométrica."
    ],
    "nursingApplication": "Permite compreender como os biomateriais e tecidos de suporte respondem a cargas mecânicas."
  },
  {
    "id": 2002,
    "topicId": 2,
    "question": "O que é uma Força Deformadora na mecânica dos materiais?",
    "options": [
      "Uma força que apenas desloca o corpo no espaço sem provocar qualquer alteração na sua forma ou dimensões.",
      "Uma força que anula a temperatura absoluta do sistema transformando o sólido em gás ideal.",
      "Uma força externa que altera as distâncias relativas entre as partículas ou moléculas que constituem o corpo.",
      "Uma força microscópica que atua exclusivamente no interior do núcleo de átomos pesados."
    ],
    "correctIndex": 2,
    "explanation": "Forças deformadoras produzem tensões internas que modificam a geometria ou volume do sólido.",
    "distractorAnalysis": [
      "Está incorreta: Forças que apenas aceleram o corpo em bloco sem o deformar atuam como forças puramente translacionais.",
      "Está incorreta: Forças mecânicas não anulam a temperatura absoluta nem criam gases ideais.",
      "Está incorreta: Forças no núcleo atómico são forças nucleares fortes e fracas, não forças de deformação macroscópicas."
    ],
    "nursingApplication": "Reconhece que qualquer pressão excessiva exercida sobre uma estrutura produz deformação mecânica."
  },
  {
    "id": 2003,
    "topicId": 2,
    "question": "O que é a Elasticidade de um corpo sólido?",
    "options": [
      "A tendência de um corpo para manter permanentemente a deformação máxima sem nunca mais recuperar.",
      "A capacidade de um corpo se dissolver espontaneamente em água destilada a vinte graus Celsius.",
      "A resistência que um material oferece à passagem de uma corrente elétrica de alta voltagem.",
      "A propriedade física responsável pelo retorno de um corpo à sua forma original após cessar a força deformadora."
    ],
    "correctIndex": 3,
    "explanation": "A elasticidade mede a capacidade de recuperação elástica reversível da geometria inicial quando as forças cessam.",
    "distractorAnalysis": [
      "Está incorreta: Manter permanentemente a deformação máxima caracteriza a plasticidade e não a elasticidade.",
      "Está incorreta: Dissolução em água é uma propriedade química de solubilidade, alheia à elasticidade mecânica.",
      "Está incorreta: A oposição à corrente elétrica é a resistividade elétrica em Ohms, não a elasticidade física."
    ],
    "nursingApplication": "Explica o comportamento de molas de equipamentos hospitalares e de tecidos de suporte."
  },
  {
    "id": 2004,
    "topicId": 2,
    "question": "Qual é a diferença fundamental entre uma deformação elástica e uma deformação plástica?",
    "options": [
      "A deformação elástica é reversível (o corpo recupera a forma original); a deformação plástica é permanente e irreversível.",
      "A deformação elástica é permanente; a deformação plástica recupera a forma original instantaneamente.",
      "Ambas as deformações são rigorosamente reversíveis e obedecem à Lei de Hooke até à fratura.",
      "A deformação elástica só ocorre em gases e a deformação plástica ocorre exclusivamente no vácuo."
    ],
    "correctIndex": 0,
    "explanation": "Na região elástica o corpo recupera a forma ao retirar a carga; na região plástica a alteração dimensional persiste.",
    "distractorAnalysis": [
      "Está incorreta: A afirmação inverte os conceitos: o comportamento plástico é que é permanente e não reversível.",
      "Está incorreta: A deformação plástica não é reversível nem obedece à linearidade da Lei de Hooke.",
      "Está incorreta: Tanto a deformação elástica como a plástica são comportamentos mecânicos característicos de corpos sólidos."
    ],
    "nursingApplication": "Fundamental para entender quando uma sobrecarga mecânica causa lesão estrutural irreversível."
  },
  {
    "id": 2005,
    "topicId": 2,
    "question": "O que acontece à energia mecânica fornecida a uma mola perfeitamente elástica durante a sua deformação?",
    "options": [
      "Dissipa-se totalmente e de forma irreversível sob a forma de radiação cósmica de fundo.",
      "Fica armazenada sob a forma de energia potencial elástica e é devolvida integralmente na descompressão.",
      "É convertida em massa atómica adicional, aumentando o peso da mola em noventa por cento.",
      "Desaparece do universo sem deixar qualquer vestígio físico, violando o princípio da conservação."
    ],
    "correctIndex": 1,
    "explanation": "Sólidos elásticos ideais armazenam o trabalho mecânico como energia potencial elástica reversível.",
    "distractorAnalysis": [
      "Está incorreta: A energia não se transforma em radiação cósmica; permanece no sistema mecânico.",
      "Está incorreta: A energia mecânica não se converte em massa mensurável de acordo com as leis da mecânica clássica.",
      "Está incorreta: A energia total conserva-se estritamente, sendo devolvida pelo corpo ao recuperar a forma inicial."
    ],
    "nursingApplication": "Princípio físico de colchões e sistemas de suspensão que absorvem e devolvem cargas mecânicas."
  },
  {
    "id": 2006,
    "topicId": 2,
    "question": "Qual dos seguintes materiais do quotidiano é um exemplo típico de comportamento predominantemente elástico com grande retorno de forma?",
    "options": [
      "Uma barra de plasticina moldada com os dedos.",
      "Um pedaço de argila húmida fresca.",
      "Uma mola de aço espiral.",
      "Uma porção de massa de pão levedada."
    ],
    "correctIndex": 2,
    "explanation": "As molas de aço metálicas exibem comportamento elástico exemplar, recuperando a forma após serem comprimidas.",
    "distractorAnalysis": [
      "Está incorreta: A plasticina é um material plástico clássico que mantém a forma deformada sem retornar.",
      "Está incorreta: A argila húmida deforma-se plasticamente sob pressão e não recupera a geometria original.",
      "Está incorreta: A massa de pão é um corpo plastoviscoelástico que retém deformações permanentes sob tensão."
    ],
    "nursingApplication": "Molas de aço são a base de balanças mecânicas e dinamómetros de precisão hospitalares."
  },
  {
    "id": 2007,
    "topicId": 2,
    "question": "Quando uma força deformadora ultrapassa o limite elástico de um material real, que tipo de deformação passa a ocorrer?",
    "options": [
      "Deformação de Euclides perfeitamente indeformável.",
      "Retorno instantâneo e espontâneo à forma inicial a velocidade infinita.",
      "Anulação absoluta de todas as forças gravíticas sobre o corpo.",
      "Deformação plástica permanente irreversível."
    ],
    "correctIndex": 3,
    "explanation": "Ultrapassado o limite elástico (limiar de elasticidade), as ligações moleculares cedem e a deformação torna-se plástica.",
    "distractorAnalysis": [
      "Está incorreta: Sólidos de Euclides são modelos teóricos indeformáveis; materiais reais deformam-se plasticamente.",
      "Está incorreta: Acima do limite elástico o corpo já não regressa à forma original, ficando deformado.",
      "Está incorreta: A gravidade continua a atuar plenamente sobre a massa do corpo material."
    ],
    "nursingApplication": "Explica o momento em que um suporte metálico se dobra permanentemente por excesso de carga."
  },
  {
    "id": 2008,
    "topicId": 2,
    "question": "Se um material se deforma facilmente sob uma força e não regressa à sua forma original após a remoção da carga, esse material diz-se:",
    "options": [
      "Plástico.",
      "Perfeitamente elástico.",
      "Rigidamente indeformável.",
      "Supercondutor térmico."
    ],
    "correctIndex": 0,
    "explanation": "Os corpos plásticos sofrem deformações permanentes irreversíveis, não recuperando a sua forma inicial.",
    "distractorAnalysis": [
      "Está incorreta: Um corpo perfeitamente elástico recuperaria a sua forma original quando a força cessasse.",
      "Está incorreta: Um corpo indeformável não sofreria qualquer deformação perante a força aplicada.",
      "Está incorreta: Supercondutividade térmica é uma propriedade de transporte de calor em baixas temperaturas, não de mecânica."
    ],
    "nursingApplication": "A plasticina é o exemplo mais intuitivo de corpo com comportamento puramente plástico."
  },
  {
    "id": 2009,
    "topicId": 2,
    "question": "Qual é a definição exata de Reologia no estudo da Biofísica?",
    "options": [
      "O estudo da velocidade de emissão de partículas alfa em elementos radioativos de transição.",
      "O ramo da física que estuda as reações dos corpos à ação de forças deformadoras aplicadas sobre a sua estrutura.",
      "A área que analisa exclusivamente o campo gravitacional gerado por massas puntiformes no vácuo.",
      "A parte da ótica geométrica que investiga a refração da luz branca em prismas triangulares."
    ],
    "correctIndex": 1,
    "explanation": "A Reologia investiga como os materiais se deformam e fluem sob a ação de forças mecânicas externas.",
    "distractorAnalysis": [
      "Está incorreta: Emissões alfa pertencem à física nuclear e radioatividade, não à reologia.",
      "Está incorreta: Campos gravitacionais de massas no vácuo pertencem à gravitação universal de Newton.",
      "Está incorreta: Refração da luz em prismas é o domínio da ótica ondulatória e geométrica."
    ],
    "nursingApplication": "Permite compreender como os biomateriais e tecidos de suporte respondem a cargas mecânicas."
  },
  {
    "id": 2010,
    "topicId": 2,
    "question": "O que é uma Força Deformadora na mecânica dos materiais?",
    "options": [
      "Uma força que apenas desloca o corpo no espaço sem provocar qualquer alteração na sua forma ou dimensões.",
      "Uma força que anula a temperatura absoluta do sistema transformando o sólido em gás ideal.",
      "Uma força externa que altera as distâncias relativas entre as partículas ou moléculas que constituem o corpo.",
      "Uma força microscópica que atua exclusivamente no interior do núcleo de átomos pesados."
    ],
    "correctIndex": 2,
    "explanation": "Forças deformadoras produzem tensões internas que modificam a geometria ou volume do sólido.",
    "distractorAnalysis": [
      "Está incorreta: Forças que apenas aceleram o corpo em bloco sem o deformar atuam como forças puramente translacionais.",
      "Está incorreta: Forças mecânicas não anulam a temperatura absoluta nem criam gases ideais.",
      "Está incorreta: Forças no núcleo atómico são forças nucleares fortes e fracas, não forças de deformação macroscópicas."
    ],
    "nursingApplication": "Reconhece que qualquer pressão excessiva exercida sobre uma estrutura produz deformação mecânica."
  },
  {
    "id": 2011,
    "topicId": 2,
    "question": "O que é a Elasticidade de um corpo sólido?",
    "options": [
      "A tendência de um corpo para manter permanentemente a deformação máxima sem nunca mais recuperar.",
      "A capacidade de um corpo se dissolver espontaneamente em água destilada a vinte graus Celsius.",
      "A resistência que um material oferece à passagem de uma corrente elétrica de alta voltagem.",
      "A propriedade física responsável pelo retorno de um corpo à sua forma original após cessar a força deformadora."
    ],
    "correctIndex": 3,
    "explanation": "A elasticidade mede a capacidade de recuperação elástica reversível da geometria inicial quando as forças cessam.",
    "distractorAnalysis": [
      "Está incorreta: Manter permanentemente a deformação máxima caracteriza a plasticidade e não a elasticidade.",
      "Está incorreta: Dissolução em água é uma propriedade química de solubilidade, alheia à elasticidade mecânica.",
      "Está incorreta: A oposição à corrente elétrica é a resistividade elétrica em Ohms, não a elasticidade física."
    ],
    "nursingApplication": "Explica o comportamento de molas de equipamentos hospitalares e de tecidos de suporte."
  },
  {
    "id": 2012,
    "topicId": 2,
    "question": "Qual é a diferença fundamental entre uma deformação elástica e uma deformação plástica?",
    "options": [
      "A deformação elástica é reversível (o corpo recupera a forma original); a deformação plástica é permanente e irreversível.",
      "A deformação elástica é permanente; a deformação plástica recupera a forma original instantaneamente.",
      "Ambas as deformações são rigorosamente reversíveis e obedecem à Lei de Hooke até à fratura.",
      "A deformação elástica só ocorre em gases e a deformação plástica ocorre exclusivamente no vácuo."
    ],
    "correctIndex": 0,
    "explanation": "Na região elástica o corpo recupera a forma ao retirar a carga; na região plástica a alteração dimensional persiste.",
    "distractorAnalysis": [
      "Está incorreta: A afirmação inverte os conceitos: o comportamento plástico é que é permanente e não reversível.",
      "Está incorreta: A deformação plástica não é reversível nem obedece à linearidade da Lei de Hooke.",
      "Está incorreta: Tanto a deformação elástica como a plástica são comportamentos mecânicos característicos de corpos sólidos."
    ],
    "nursingApplication": "Fundamental para entender quando uma sobrecarga mecânica causa lesão estrutural irreversível."
  },
  {
    "id": 2013,
    "topicId": 2,
    "question": "O que acontece à energia mecânica fornecida a uma mola perfeitamente elástica durante a sua deformação?",
    "options": [
      "Dissipa-se totalmente e de forma irreversível sob a forma de radiação cósmica de fundo.",
      "Fica armazenada sob a forma de energia potencial elástica e é devolvida integralmente na descompressão.",
      "É convertida em massa atómica adicional, aumentando o peso da mola em noventa por cento.",
      "Desaparece do universo sem deixar qualquer vestígio físico, violando o princípio da conservação."
    ],
    "correctIndex": 1,
    "explanation": "Sólidos elásticos ideais armazenam o trabalho mecânico como energia potencial elástica reversível.",
    "distractorAnalysis": [
      "Está incorreta: A energia não se transforma em radiação cósmica; permanece no sistema mecânico.",
      "Está incorreta: A energia mecânica não se converte em massa mensurável de acordo com as leis da mecânica clássica.",
      "Está incorreta: A energia total conserva-se estritamente, sendo devolvida pelo corpo ao recuperar a forma inicial."
    ],
    "nursingApplication": "Princípio físico de colchões e sistemas de suspensão que absorvem e devolvem cargas mecânicas."
  },
  {
    "id": 2014,
    "topicId": 2,
    "question": "Qual dos seguintes materiais do quotidiano é um exemplo típico de comportamento predominantemente elástico com grande retorno de forma?",
    "options": [
      "Uma barra de plasticina moldada com os dedos.",
      "Um pedaço de argila húmida fresca.",
      "Uma mola de aço espiral.",
      "Uma porção de massa de pão levedada."
    ],
    "correctIndex": 2,
    "explanation": "As molas de aço metálicas exibem comportamento elástico exemplar, recuperando a forma após serem comprimidas.",
    "distractorAnalysis": [
      "Está incorreta: A plasticina é um material plástico clássico que mantém a forma deformada sem retornar.",
      "Está incorreta: A argila húmida deforma-se plasticamente sob pressão e não recupera a geometria original.",
      "Está incorreta: A massa de pão é um corpo plastoviscoelástico que retém deformações permanentes sob tensão."
    ],
    "nursingApplication": "Molas de aço são a base de balanças mecânicas e dinamómetros de precisão hospitalares."
  },
  {
    "id": 2015,
    "topicId": 2,
    "question": "Quando uma força deformadora ultrapassa o limite elástico de um material real, que tipo de deformação passa a ocorrer?",
    "options": [
      "Deformação de Euclides perfeitamente indeformável.",
      "Retorno instantâneo e espontâneo à forma inicial a velocidade infinita.",
      "Anulação absoluta de todas as forças gravíticas sobre o corpo.",
      "Deformação plástica permanente irreversível."
    ],
    "correctIndex": 3,
    "explanation": "Ultrapassado o limite elástico (limiar de elasticidade), as ligações moleculares cedem e a deformação torna-se plástica.",
    "distractorAnalysis": [
      "Está incorreta: Sólidos de Euclides são modelos teóricos indeformáveis; materiais reais deformam-se plasticamente.",
      "Está incorreta: Acima do limite elástico o corpo já não regressa à forma original, ficando deformado.",
      "Está incorreta: A gravidade continua a atuar plenamente sobre a massa do corpo material."
    ],
    "nursingApplication": "Explica o momento em que um suporte metálico se dobra permanentemente por excesso de carga."
  },
  {
    "id": 2016,
    "topicId": 2,
    "question": "Se um material se deforma facilmente sob uma força e não regressa à sua forma original após a remoção da carga, esse material diz-se:",
    "options": [
      "Plástico.",
      "Perfeitamente elástico.",
      "Rigidamente indeformável.",
      "Supercondutor térmico."
    ],
    "correctIndex": 0,
    "explanation": "Os corpos plásticos sofrem deformações permanentes irreversíveis, não recuperando a sua forma inicial.",
    "distractorAnalysis": [
      "Está incorreta: Um corpo perfeitamente elástico recuperaria a sua forma original quando a força cessasse.",
      "Está incorreta: Um corpo indeformável não sofreria qualquer deformação perante a força aplicada.",
      "Está incorreta: Supercondutividade térmica é uma propriedade de transporte de calor em baixas temperaturas, não de mecânica."
    ],
    "nursingApplication": "A plasticina é o exemplo mais intuitivo de corpo com comportamento puramente plástico."
  },
  {
    "id": 2017,
    "topicId": 2,
    "question": "Qual é a definição exata de Reologia no estudo da Biofísica?",
    "options": [
      "O estudo da velocidade de emissão de partículas alfa em elementos radioativos de transição.",
      "O ramo da física que estuda as reações dos corpos à ação de forças deformadoras aplicadas sobre a sua estrutura.",
      "A área que analisa exclusivamente o campo gravitacional gerado por massas puntiformes no vácuo.",
      "A parte da ótica geométrica que investiga a refração da luz branca em prismas triangulares."
    ],
    "correctIndex": 1,
    "explanation": "A Reologia investiga como os materiais se deformam e fluem sob a ação de forças mecânicas externas.",
    "distractorAnalysis": [
      "Está incorreta: Emissões alfa pertencem à física nuclear e radioatividade, não à reologia.",
      "Está incorreta: Campos gravitacionais de massas no vácuo pertencem à gravitação universal de Newton.",
      "Está incorreta: Refração da luz em prismas é o domínio da ótica ondulatória e geométrica."
    ],
    "nursingApplication": "Permite compreender como os biomateriais e tecidos de suporte respondem a cargas mecânicas."
  },
  {
    "id": 2018,
    "topicId": 2,
    "question": "O que é uma Força Deformadora na mecânica dos materiais?",
    "options": [
      "Uma força que apenas desloca o corpo no espaço sem provocar qualquer alteração na sua forma ou dimensões.",
      "Uma força que anula a temperatura absoluta do sistema transformando o sólido em gás ideal.",
      "Uma força externa que altera as distâncias relativas entre as partículas ou moléculas que constituem o corpo.",
      "Uma força microscópica que atua exclusivamente no interior do núcleo de átomos pesados."
    ],
    "correctIndex": 2,
    "explanation": "Forças deformadoras produzem tensões internas que modificam a geometria ou volume do sólido.",
    "distractorAnalysis": [
      "Está incorreta: Forças que apenas aceleram o corpo em bloco sem o deformar atuam como forças puramente translacionais.",
      "Está incorreta: Forças mecânicas não anulam a temperatura absoluta nem criam gases ideais.",
      "Está incorreta: Forças no núcleo atómico são forças nucleares fortes e fracas, não forças de deformação macroscópicas."
    ],
    "nursingApplication": "Reconhece que qualquer pressão excessiva exercida sobre uma estrutura produz deformação mecânica."
  },
  {
    "id": 2019,
    "topicId": 2,
    "question": "O que é a Elasticidade de um corpo sólido?",
    "options": [
      "A tendência de um corpo para manter permanentemente a deformação máxima sem nunca mais recuperar.",
      "A capacidade de um corpo se dissolver espontaneamente em água destilada a vinte graus Celsius.",
      "A resistência que um material oferece à passagem de uma corrente elétrica de alta voltagem.",
      "A propriedade física responsável pelo retorno de um corpo à sua forma original após cessar a força deformadora."
    ],
    "correctIndex": 3,
    "explanation": "A elasticidade mede a capacidade de recuperação elástica reversível da geometria inicial quando as forças cessam.",
    "distractorAnalysis": [
      "Está incorreta: Manter permanentemente a deformação máxima caracteriza a plasticidade e não a elasticidade.",
      "Está incorreta: Dissolução em água é uma propriedade química de solubilidade, alheia à elasticidade mecânica.",
      "Está incorreta: A oposição à corrente elétrica é a resistividade elétrica em Ohms, não a elasticidade física."
    ],
    "nursingApplication": "Explica o comportamento de molas de equipamentos hospitalares e de tecidos de suporte."
  },
  {
    "id": 2020,
    "topicId": 2,
    "question": "Qual é a diferença fundamental entre uma deformação elástica e uma deformação plástica?",
    "options": [
      "A deformação elástica é reversível (o corpo recupera a forma original); a deformação plástica é permanente e irreversível.",
      "A deformação elástica é permanente; a deformação plástica recupera a forma original instantaneamente.",
      "Ambas as deformações são rigorosamente reversíveis e obedecem à Lei de Hooke até à fratura.",
      "A deformação elástica só ocorre em gases e a deformação plástica ocorre exclusivamente no vácuo."
    ],
    "correctIndex": 0,
    "explanation": "Na região elástica o corpo recupera a forma ao retirar a carga; na região plástica a alteração dimensional persiste.",
    "distractorAnalysis": [
      "Está incorreta: A afirmação inverte os conceitos: o comportamento plástico é que é permanente e não reversível.",
      "Está incorreta: A deformação plástica não é reversível nem obedece à linearidade da Lei de Hooke.",
      "Está incorreta: Tanto a deformação elástica como a plástica são comportamentos mecânicos característicos de corpos sólidos."
    ],
    "nursingApplication": "Fundamental para entender quando uma sobrecarga mecânica causa lesão estrutural irreversível."
  },
  {
    "id": 2021,
    "topicId": 2,
    "question": "O que acontece à energia mecânica fornecida a uma mola perfeitamente elástica durante a sua deformação?",
    "options": [
      "Dissipa-se totalmente e de forma irreversível sob a forma de radiação cósmica de fundo.",
      "Fica armazenada sob a forma de energia potencial elástica e é devolvida integralmente na descompressão.",
      "É convertida em massa atómica adicional, aumentando o peso da mola em noventa por cento.",
      "Desaparece do universo sem deixar qualquer vestígio físico, violando o princípio da conservação."
    ],
    "correctIndex": 1,
    "explanation": "Sólidos elásticos ideais armazenam o trabalho mecânico como energia potencial elástica reversível.",
    "distractorAnalysis": [
      "Está incorreta: A energia não se transforma em radiação cósmica; permanece no sistema mecânico.",
      "Está incorreta: A energia mecânica não se converte em massa mensurável de acordo com as leis da mecânica clássica.",
      "Está incorreta: A energia total conserva-se estritamente, sendo devolvida pelo corpo ao recuperar a forma inicial."
    ],
    "nursingApplication": "Princípio físico de colchões e sistemas de suspensão que absorvem e devolvem cargas mecânicas."
  },
  {
    "id": 2022,
    "topicId": 2,
    "question": "Qual dos seguintes materiais do quotidiano é um exemplo típico de comportamento predominantemente elástico com grande retorno de forma?",
    "options": [
      "Uma barra de plasticina moldada com os dedos.",
      "Um pedaço de argila húmida fresca.",
      "Uma mola de aço espiral.",
      "Uma porção de massa de pão levedada."
    ],
    "correctIndex": 2,
    "explanation": "As molas de aço metálicas exibem comportamento elástico exemplar, recuperando a forma após serem comprimidas.",
    "distractorAnalysis": [
      "Está incorreta: A plasticina é um material plástico clássico que mantém a forma deformada sem retornar.",
      "Está incorreta: A argila húmida deforma-se plasticamente sob pressão e não recupera a geometria original.",
      "Está incorreta: A massa de pão é um corpo plastoviscoelástico que retém deformações permanentes sob tensão."
    ],
    "nursingApplication": "Molas de aço são a base de balanças mecânicas e dinamómetros de precisão hospitalares."
  },
  {
    "id": 2023,
    "topicId": 2,
    "question": "Quando uma força deformadora ultrapassa o limite elástico de um material real, que tipo de deformação passa a ocorrer?",
    "options": [
      "Deformação de Euclides perfeitamente indeformável.",
      "Retorno instantâneo e espontâneo à forma inicial a velocidade infinita.",
      "Anulação absoluta de todas as forças gravíticas sobre o corpo.",
      "Deformação plástica permanente irreversível."
    ],
    "correctIndex": 3,
    "explanation": "Ultrapassado o limite elástico (limiar de elasticidade), as ligações moleculares cedem e a deformação torna-se plástica.",
    "distractorAnalysis": [
      "Está incorreta: Sólidos de Euclides são modelos teóricos indeformáveis; materiais reais deformam-se plasticamente.",
      "Está incorreta: Acima do limite elástico o corpo já não regressa à forma original, ficando deformado.",
      "Está incorreta: A gravidade continua a atuar plenamente sobre a massa do corpo material."
    ],
    "nursingApplication": "Explica o momento em que um suporte metálico se dobra permanentemente por excesso de carga."
  },
  {
    "id": 2024,
    "topicId": 2,
    "question": "Se um material se deforma facilmente sob uma força e não regressa à sua forma original após a remoção da carga, esse material diz-se:",
    "options": [
      "Plástico.",
      "Perfeitamente elástico.",
      "Rigidamente indeformável.",
      "Supercondutor térmico."
    ],
    "correctIndex": 0,
    "explanation": "Os corpos plásticos sofrem deformações permanentes irreversíveis, não recuperando a sua forma inicial.",
    "distractorAnalysis": [
      "Está incorreta: Um corpo perfeitamente elástico recuperaria a sua forma original quando a força cessasse.",
      "Está incorreta: Um corpo indeformável não sofreria qualquer deformação perante a força aplicada.",
      "Está incorreta: Supercondutividade térmica é uma propriedade de transporte de calor em baixas temperaturas, não de mecânica."
    ],
    "nursingApplication": "A plasticina é o exemplo mais intuitivo de corpo com comportamento puramente plástico."
  },
  {
    "id": 2025,
    "topicId": 2,
    "question": "Qual é a definição exata de Reologia no estudo da Biofísica?",
    "options": [
      "O estudo da velocidade de emissão de partículas alfa em elementos radioativos de transição.",
      "O ramo da física que estuda as reações dos corpos à ação de forças deformadoras aplicadas sobre a sua estrutura.",
      "A área que analisa exclusivamente o campo gravitacional gerado por massas puntiformes no vácuo.",
      "A parte da ótica geométrica que investiga a refração da luz branca em prismas triangulares."
    ],
    "correctIndex": 1,
    "explanation": "A Reologia investiga como os materiais se deformam e fluem sob a ação de forças mecânicas externas.",
    "distractorAnalysis": [
      "Está incorreta: Emissões alfa pertencem à física nuclear e radioatividade, não à reologia.",
      "Está incorreta: Campos gravitacionais de massas no vácuo pertencem à gravitação universal de Newton.",
      "Está incorreta: Refração da luz em prismas é o domínio da ótica ondulatória e geométrica."
    ],
    "nursingApplication": "Permite compreender como os biomateriais e tecidos de suporte respondem a cargas mecânicas."
  },
  {
    "id": 2026,
    "topicId": 2,
    "question": "O que é uma Força Deformadora na mecânica dos materiais?",
    "options": [
      "Uma força que apenas desloca o corpo no espaço sem provocar qualquer alteração na sua forma ou dimensões.",
      "Uma força que anula a temperatura absoluta do sistema transformando o sólido em gás ideal.",
      "Uma força externa que altera as distâncias relativas entre as partículas ou moléculas que constituem o corpo.",
      "Uma força microscópica que atua exclusivamente no interior do núcleo de átomos pesados."
    ],
    "correctIndex": 2,
    "explanation": "Forças deformadoras produzem tensões internas que modificam a geometria ou volume do sólido.",
    "distractorAnalysis": [
      "Está incorreta: Forças que apenas aceleram o corpo em bloco sem o deformar atuam como forças puramente translacionais.",
      "Está incorreta: Forças mecânicas não anulam a temperatura absoluta nem criam gases ideais.",
      "Está incorreta: Forças no núcleo atómico são forças nucleares fortes e fracas, não forças de deformação macroscópicas."
    ],
    "nursingApplication": "Reconhece que qualquer pressão excessiva exercida sobre uma estrutura produz deformação mecânica."
  },
  {
    "id": 2027,
    "topicId": 2,
    "question": "O que é a Elasticidade de um corpo sólido?",
    "options": [
      "A tendência de um corpo para manter permanentemente a deformação máxima sem nunca mais recuperar.",
      "A capacidade de um corpo se dissolver espontaneamente em água destilada a vinte graus Celsius.",
      "A resistência que um material oferece à passagem de uma corrente elétrica de alta voltagem.",
      "A propriedade física responsável pelo retorno de um corpo à sua forma original após cessar a força deformadora."
    ],
    "correctIndex": 3,
    "explanation": "A elasticidade mede a capacidade de recuperação elástica reversível da geometria inicial quando as forças cessam.",
    "distractorAnalysis": [
      "Está incorreta: Manter permanentemente a deformação máxima caracteriza a plasticidade e não a elasticidade.",
      "Está incorreta: Dissolução em água é uma propriedade química de solubilidade, alheia à elasticidade mecânica.",
      "Está incorreta: A oposição à corrente elétrica é a resistividade elétrica em Ohms, não a elasticidade física."
    ],
    "nursingApplication": "Explica o comportamento de molas de equipamentos hospitalares e de tecidos de suporte."
  },
  {
    "id": 2028,
    "topicId": 2,
    "question": "Qual é a diferença fundamental entre uma deformação elástica e uma deformação plástica?",
    "options": [
      "A deformação elástica é reversível (o corpo recupera a forma original); a deformação plástica é permanente e irreversível.",
      "A deformação elástica é permanente; a deformação plástica recupera a forma original instantaneamente.",
      "Ambas as deformações são rigorosamente reversíveis e obedecem à Lei de Hooke até à fratura.",
      "A deformação elástica só ocorre em gases e a deformação plástica ocorre exclusivamente no vácuo."
    ],
    "correctIndex": 0,
    "explanation": "Na região elástica o corpo recupera a forma ao retirar a carga; na região plástica a alteração dimensional persiste.",
    "distractorAnalysis": [
      "Está incorreta: A afirmação inverte os conceitos: o comportamento plástico é que é permanente e não reversível.",
      "Está incorreta: A deformação plástica não é reversível nem obedece à linearidade da Lei de Hooke.",
      "Está incorreta: Tanto a deformação elástica como a plástica são comportamentos mecânicos característicos de corpos sólidos."
    ],
    "nursingApplication": "Fundamental para entender quando uma sobrecarga mecânica causa lesão estrutural irreversível."
  },
  {
    "id": 2029,
    "topicId": 2,
    "question": "O que acontece à energia mecânica fornecida a uma mola perfeitamente elástica durante a sua deformação?",
    "options": [
      "Dissipa-se totalmente e de forma irreversível sob a forma de radiação cósmica de fundo.",
      "Fica armazenada sob a forma de energia potencial elástica e é devolvida integralmente na descompressão.",
      "É convertida em massa atómica adicional, aumentando o peso da mola em noventa por cento.",
      "Desaparece do universo sem deixar qualquer vestígio físico, violando o princípio da conservação."
    ],
    "correctIndex": 1,
    "explanation": "Sólidos elásticos ideais armazenam o trabalho mecânico como energia potencial elástica reversível.",
    "distractorAnalysis": [
      "Está incorreta: A energia não se transforma em radiação cósmica; permanece no sistema mecânico.",
      "Está incorreta: A energia mecânica não se converte em massa mensurável de acordo com as leis da mecânica clássica.",
      "Está incorreta: A energia total conserva-se estritamente, sendo devolvida pelo corpo ao recuperar a forma inicial."
    ],
    "nursingApplication": "Princípio físico de colchões e sistemas de suspensão que absorvem e devolvem cargas mecânicas."
  },
  {
    "id": 2030,
    "topicId": 2,
    "question": "Qual dos seguintes materiais do quotidiano é um exemplo típico de comportamento predominantemente elástico com grande retorno de forma?",
    "options": [
      "Uma barra de plasticina moldada com os dedos.",
      "Um pedaço de argila húmida fresca.",
      "Uma mola de aço espiral.",
      "Uma porção de massa de pão levedada."
    ],
    "correctIndex": 2,
    "explanation": "As molas de aço metálicas exibem comportamento elástico exemplar, recuperando a forma após serem comprimidas.",
    "distractorAnalysis": [
      "Está incorreta: A plasticina é um material plástico clássico que mantém a forma deformada sem retornar.",
      "Está incorreta: A argila húmida deforma-se plasticamente sob pressão e não recupera a geometria original.",
      "Está incorreta: A massa de pão é um corpo plastoviscoelástico que retém deformações permanentes sob tensão."
    ],
    "nursingApplication": "Molas de aço são a base de balanças mecânicas e dinamómetros de precisão hospitalares."
  },
  {
    "id": 2031,
    "topicId": 2,
    "question": "Quando uma força deformadora ultrapassa o limite elástico de um material real, que tipo de deformação passa a ocorrer?",
    "options": [
      "Deformação de Euclides perfeitamente indeformável.",
      "Retorno instantâneo e espontâneo à forma inicial a velocidade infinita.",
      "Anulação absoluta de todas as forças gravíticas sobre o corpo.",
      "Deformação plástica permanente irreversível."
    ],
    "correctIndex": 3,
    "explanation": "Ultrapassado o limite elástico (limiar de elasticidade), as ligações moleculares cedem e a deformação torna-se plástica.",
    "distractorAnalysis": [
      "Está incorreta: Sólidos de Euclides são modelos teóricos indeformáveis; materiais reais deformam-se plasticamente.",
      "Está incorreta: Acima do limite elástico o corpo já não regressa à forma original, ficando deformado.",
      "Está incorreta: A gravidade continua a atuar plenamente sobre a massa do corpo material."
    ],
    "nursingApplication": "Explica o momento em que um suporte metálico se dobra permanentemente por excesso de carga."
  },
  {
    "id": 2032,
    "topicId": 2,
    "question": "Se um material se deforma facilmente sob uma força e não regressa à sua forma original após a remoção da carga, esse material diz-se:",
    "options": [
      "Plástico.",
      "Perfeitamente elástico.",
      "Rigidamente indeformável.",
      "Supercondutor térmico."
    ],
    "correctIndex": 0,
    "explanation": "Os corpos plásticos sofrem deformações permanentes irreversíveis, não recuperando a sua forma inicial.",
    "distractorAnalysis": [
      "Está incorreta: Um corpo perfeitamente elástico recuperaria a sua forma original quando a força cessasse.",
      "Está incorreta: Um corpo indeformável não sofreria qualquer deformação perante a força aplicada.",
      "Está incorreta: Supercondutividade térmica é uma propriedade de transporte de calor em baixas temperaturas, não de mecânica."
    ],
    "nursingApplication": "A plasticina é o exemplo mais intuitivo de corpo com comportamento puramente plástico."
  },
  {
    "id": 2033,
    "topicId": 2,
    "question": "Qual é a definição exata de Reologia no estudo da Biofísica?",
    "options": [
      "O estudo da velocidade de emissão de partículas alfa em elementos radioativos de transição.",
      "O ramo da física que estuda as reações dos corpos à ação de forças deformadoras aplicadas sobre a sua estrutura.",
      "A área que analisa exclusivamente o campo gravitacional gerado por massas puntiformes no vácuo.",
      "A parte da ótica geométrica que investiga a refração da luz branca em prismas triangulares."
    ],
    "correctIndex": 1,
    "explanation": "A Reologia investiga como os materiais se deformam e fluem sob a ação de forças mecânicas externas.",
    "distractorAnalysis": [
      "Está incorreta: Emissões alfa pertencem à física nuclear e radioatividade, não à reologia.",
      "Está incorreta: Campos gravitacionais de massas no vácuo pertencem à gravitação universal de Newton.",
      "Está incorreta: Refração da luz em prismas é o domínio da ótica ondulatória e geométrica."
    ],
    "nursingApplication": "Permite compreender como os biomateriais e tecidos de suporte respondem a cargas mecânicas."
  },
  {
    "id": 2034,
    "topicId": 2,
    "question": "O que é uma Força Deformadora na mecânica dos materiais?",
    "options": [
      "Uma força que apenas desloca o corpo no espaço sem provocar qualquer alteração na sua forma ou dimensões.",
      "Uma força que anula a temperatura absoluta do sistema transformando o sólido em gás ideal.",
      "Uma força externa que altera as distâncias relativas entre as partículas ou moléculas que constituem o corpo.",
      "Uma força microscópica que atua exclusivamente no interior do núcleo de átomos pesados."
    ],
    "correctIndex": 2,
    "explanation": "Forças deformadoras produzem tensões internas que modificam a geometria ou volume do sólido.",
    "distractorAnalysis": [
      "Está incorreta: Forças que apenas aceleram o corpo em bloco sem o deformar atuam como forças puramente translacionais.",
      "Está incorreta: Forças mecânicas não anulam a temperatura absoluta nem criam gases ideais.",
      "Está incorreta: Forças no núcleo atómico são forças nucleares fortes e fracas, não forças de deformação macroscópicas."
    ],
    "nursingApplication": "Reconhece que qualquer pressão excessiva exercida sobre uma estrutura produz deformação mecânica."
  },
  {
    "id": 2035,
    "topicId": 2,
    "question": "O que é a Elasticidade de um corpo sólido?",
    "options": [
      "A tendência de um corpo para manter permanentemente a deformação máxima sem nunca mais recuperar.",
      "A capacidade de um corpo se dissolver espontaneamente em água destilada a vinte graus Celsius.",
      "A resistência que um material oferece à passagem de uma corrente elétrica de alta voltagem.",
      "A propriedade física responsável pelo retorno de um corpo à sua forma original após cessar a força deformadora."
    ],
    "correctIndex": 3,
    "explanation": "A elasticidade mede a capacidade de recuperação elástica reversível da geometria inicial quando as forças cessam.",
    "distractorAnalysis": [
      "Está incorreta: Manter permanentemente a deformação máxima caracteriza a plasticidade e não a elasticidade.",
      "Está incorreta: Dissolução em água é uma propriedade química de solubilidade, alheia à elasticidade mecânica.",
      "Está incorreta: A oposição à corrente elétrica é a resistividade elétrica em Ohms, não a elasticidade física."
    ],
    "nursingApplication": "Explica o comportamento de molas de equipamentos hospitalares e de tecidos de suporte."
  },
  {
    "id": 2036,
    "topicId": 2,
    "question": "Qual é a diferença fundamental entre uma deformação elástica e uma deformação plástica?",
    "options": [
      "A deformação elástica é reversível (o corpo recupera a forma original); a deformação plástica é permanente e irreversível.",
      "A deformação elástica é permanente; a deformação plástica recupera a forma original instantaneamente.",
      "Ambas as deformações são rigorosamente reversíveis e obedecem à Lei de Hooke até à fratura.",
      "A deformação elástica só ocorre em gases e a deformação plástica ocorre exclusivamente no vácuo."
    ],
    "correctIndex": 0,
    "explanation": "Na região elástica o corpo recupera a forma ao retirar a carga; na região plástica a alteração dimensional persiste.",
    "distractorAnalysis": [
      "Está incorreta: A afirmação inverte os conceitos: o comportamento plástico é que é permanente e não reversível.",
      "Está incorreta: A deformação plástica não é reversível nem obedece à linearidade da Lei de Hooke.",
      "Está incorreta: Tanto a deformação elástica como a plástica são comportamentos mecânicos característicos de corpos sólidos."
    ],
    "nursingApplication": "Fundamental para entender quando uma sobrecarga mecânica causa lesão estrutural irreversível."
  },
  {
    "id": 2037,
    "topicId": 2,
    "question": "O que acontece à energia mecânica fornecida a uma mola perfeitamente elástica durante a sua deformação?",
    "options": [
      "Dissipa-se totalmente e de forma irreversível sob a forma de radiação cósmica de fundo.",
      "Fica armazenada sob a forma de energia potencial elástica e é devolvida integralmente na descompressão.",
      "É convertida em massa atómica adicional, aumentando o peso da mola em noventa por cento.",
      "Desaparece do universo sem deixar qualquer vestígio físico, violando o princípio da conservação."
    ],
    "correctIndex": 1,
    "explanation": "Sólidos elásticos ideais armazenam o trabalho mecânico como energia potencial elástica reversível.",
    "distractorAnalysis": [
      "Está incorreta: A energia não se transforma em radiação cósmica; permanece no sistema mecânico.",
      "Está incorreta: A energia mecânica não se converte em massa mensurável de acordo com as leis da mecânica clássica.",
      "Está incorreta: A energia total conserva-se estritamente, sendo devolvida pelo corpo ao recuperar a forma inicial."
    ],
    "nursingApplication": "Princípio físico de colchões e sistemas de suspensão que absorvem e devolvem cargas mecânicas."
  },
  {
    "id": 2038,
    "topicId": 2,
    "question": "Qual dos seguintes materiais do quotidiano é um exemplo típico de comportamento predominantemente elástico com grande retorno de forma?",
    "options": [
      "Uma barra de plasticina moldada com os dedos.",
      "Um pedaço de argila húmida fresca.",
      "Uma mola de aço espiral.",
      "Uma porção de massa de pão levedada."
    ],
    "correctIndex": 2,
    "explanation": "As molas de aço metálicas exibem comportamento elástico exemplar, recuperando a forma após serem comprimidas.",
    "distractorAnalysis": [
      "Está incorreta: A plasticina é um material plástico clássico que mantém a forma deformada sem retornar.",
      "Está incorreta: A argila húmida deforma-se plasticamente sob pressão e não recupera a geometria original.",
      "Está incorreta: A massa de pão é um corpo plastoviscoelástico que retém deformações permanentes sob tensão."
    ],
    "nursingApplication": "Molas de aço são a base de balanças mecânicas e dinamómetros de precisão hospitalares."
  },
  {
    "id": 2039,
    "topicId": 2,
    "question": "Quando uma força deformadora ultrapassa o limite elástico de um material real, que tipo de deformação passa a ocorrer?",
    "options": [
      "Deformação de Euclides perfeitamente indeformável.",
      "Retorno instantâneo e espontâneo à forma inicial a velocidade infinita.",
      "Anulação absoluta de todas as forças gravíticas sobre o corpo.",
      "Deformação plástica permanente irreversível."
    ],
    "correctIndex": 3,
    "explanation": "Ultrapassado o limite elástico (limiar de elasticidade), as ligações moleculares cedem e a deformação torna-se plástica.",
    "distractorAnalysis": [
      "Está incorreta: Sólidos de Euclides são modelos teóricos indeformáveis; materiais reais deformam-se plasticamente.",
      "Está incorreta: Acima do limite elástico o corpo já não regressa à forma original, ficando deformado.",
      "Está incorreta: A gravidade continua a atuar plenamente sobre a massa do corpo material."
    ],
    "nursingApplication": "Explica o momento em que um suporte metálico se dobra permanentemente por excesso de carga."
  },
  {
    "id": 2040,
    "topicId": 2,
    "question": "Se um material se deforma facilmente sob uma força e não regressa à sua forma original após a remoção da carga, esse material diz-se:",
    "options": [
      "Plástico.",
      "Perfeitamente elástico.",
      "Rigidamente indeformável.",
      "Supercondutor térmico."
    ],
    "correctIndex": 0,
    "explanation": "Os corpos plásticos sofrem deformações permanentes irreversíveis, não recuperando a sua forma inicial.",
    "distractorAnalysis": [
      "Está incorreta: Um corpo perfeitamente elástico recuperaria a sua forma original quando a força cessasse.",
      "Está incorreta: Um corpo indeformável não sofreria qualquer deformação perante a força aplicada.",
      "Está incorreta: Supercondutividade térmica é uma propriedade de transporte de calor em baixas temperaturas, não de mecânica."
    ],
    "nursingApplication": "A plasticina é o exemplo mais intuitivo de corpo com comportamento puramente plástico."
  },
  {
    "id": 2041,
    "topicId": 2,
    "question": "Qual é a definição exata de Reologia no estudo da Biofísica?",
    "options": [
      "O estudo da velocidade de emissão de partículas alfa em elementos radioativos de transição.",
      "O ramo da física que estuda as reações dos corpos à ação de forças deformadoras aplicadas sobre a sua estrutura.",
      "A área que analisa exclusivamente o campo gravitacional gerado por massas puntiformes no vácuo.",
      "A parte da ótica geométrica que investiga a refração da luz branca em prismas triangulares."
    ],
    "correctIndex": 1,
    "explanation": "A Reologia investiga como os materiais se deformam e fluem sob a ação de forças mecânicas externas.",
    "distractorAnalysis": [
      "Está incorreta: Emissões alfa pertencem à física nuclear e radioatividade, não à reologia.",
      "Está incorreta: Campos gravitacionais de massas no vácuo pertencem à gravitação universal de Newton.",
      "Está incorreta: Refração da luz em prismas é o domínio da ótica ondulatória e geométrica."
    ],
    "nursingApplication": "Permite compreender como os biomateriais e tecidos de suporte respondem a cargas mecânicas."
  },
  {
    "id": 2042,
    "topicId": 2,
    "question": "O que é uma Força Deformadora na mecânica dos materiais?",
    "options": [
      "Uma força que apenas desloca o corpo no espaço sem provocar qualquer alteração na sua forma ou dimensões.",
      "Uma força que anula a temperatura absoluta do sistema transformando o sólido em gás ideal.",
      "Uma força externa que altera as distâncias relativas entre as partículas ou moléculas que constituem o corpo.",
      "Uma força microscópica que atua exclusivamente no interior do núcleo de átomos pesados."
    ],
    "correctIndex": 2,
    "explanation": "Forças deformadoras produzem tensões internas que modificam a geometria ou volume do sólido.",
    "distractorAnalysis": [
      "Está incorreta: Forças que apenas aceleram o corpo em bloco sem o deformar atuam como forças puramente translacionais.",
      "Está incorreta: Forças mecânicas não anulam a temperatura absoluta nem criam gases ideais.",
      "Está incorreta: Forças no núcleo atómico são forças nucleares fortes e fracas, não forças de deformação macroscópicas."
    ],
    "nursingApplication": "Reconhece que qualquer pressão excessiva exercida sobre uma estrutura produz deformação mecânica."
  },
  {
    "id": 2043,
    "topicId": 2,
    "question": "O que é a Elasticidade de um corpo sólido?",
    "options": [
      "A tendência de um corpo para manter permanentemente a deformação máxima sem nunca mais recuperar.",
      "A capacidade de um corpo se dissolver espontaneamente em água destilada a vinte graus Celsius.",
      "A resistência que um material oferece à passagem de uma corrente elétrica de alta voltagem.",
      "A propriedade física responsável pelo retorno de um corpo à sua forma original após cessar a força deformadora."
    ],
    "correctIndex": 3,
    "explanation": "A elasticidade mede a capacidade de recuperação elástica reversível da geometria inicial quando as forças cessam.",
    "distractorAnalysis": [
      "Está incorreta: Manter permanentemente a deformação máxima caracteriza a plasticidade e não a elasticidade.",
      "Está incorreta: Dissolução em água é uma propriedade química de solubilidade, alheia à elasticidade mecânica.",
      "Está incorreta: A oposição à corrente elétrica é a resistividade elétrica em Ohms, não a elasticidade física."
    ],
    "nursingApplication": "Explica o comportamento de molas de equipamentos hospitalares e de tecidos de suporte."
  },
  {
    "id": 2044,
    "topicId": 2,
    "question": "Qual é a diferença fundamental entre uma deformação elástica e uma deformação plástica?",
    "options": [
      "A deformação elástica é reversível (o corpo recupera a forma original); a deformação plástica é permanente e irreversível.",
      "A deformação elástica é permanente; a deformação plástica recupera a forma original instantaneamente.",
      "Ambas as deformações são rigorosamente reversíveis e obedecem à Lei de Hooke até à fratura.",
      "A deformação elástica só ocorre em gases e a deformação plástica ocorre exclusivamente no vácuo."
    ],
    "correctIndex": 0,
    "explanation": "Na região elástica o corpo recupera a forma ao retirar a carga; na região plástica a alteração dimensional persiste.",
    "distractorAnalysis": [
      "Está incorreta: A afirmação inverte os conceitos: o comportamento plástico é que é permanente e não reversível.",
      "Está incorreta: A deformação plástica não é reversível nem obedece à linearidade da Lei de Hooke.",
      "Está incorreta: Tanto a deformação elástica como a plástica são comportamentos mecânicos característicos de corpos sólidos."
    ],
    "nursingApplication": "Fundamental para entender quando uma sobrecarga mecânica causa lesão estrutural irreversível."
  },
  {
    "id": 2045,
    "topicId": 2,
    "question": "O que acontece à energia mecânica fornecida a uma mola perfeitamente elástica durante a sua deformação?",
    "options": [
      "Dissipa-se totalmente e de forma irreversível sob a forma de radiação cósmica de fundo.",
      "Fica armazenada sob a forma de energia potencial elástica e é devolvida integralmente na descompressão.",
      "É convertida em massa atómica adicional, aumentando o peso da mola em noventa por cento.",
      "Desaparece do universo sem deixar qualquer vestígio físico, violando o princípio da conservação."
    ],
    "correctIndex": 1,
    "explanation": "Sólidos elásticos ideais armazenam o trabalho mecânico como energia potencial elástica reversível.",
    "distractorAnalysis": [
      "Está incorreta: A energia não se transforma em radiação cósmica; permanece no sistema mecânico.",
      "Está incorreta: A energia mecânica não se converte em massa mensurável de acordo com as leis da mecânica clássica.",
      "Está incorreta: A energia total conserva-se estritamente, sendo devolvida pelo corpo ao recuperar a forma inicial."
    ],
    "nursingApplication": "Princípio físico de colchões e sistemas de suspensão que absorvem e devolvem cargas mecânicas."
  },
  {
    "id": 2046,
    "topicId": 2,
    "question": "Qual dos seguintes materiais do quotidiano é um exemplo típico de comportamento predominantemente elástico com grande retorno de forma?",
    "options": [
      "Uma barra de plasticina moldada com os dedos.",
      "Um pedaço de argila húmida fresca.",
      "Uma mola de aço espiral.",
      "Uma porção de massa de pão levedada."
    ],
    "correctIndex": 2,
    "explanation": "As molas de aço metálicas exibem comportamento elástico exemplar, recuperando a forma após serem comprimidas.",
    "distractorAnalysis": [
      "Está incorreta: A plasticina é um material plástico clássico que mantém a forma deformada sem retornar.",
      "Está incorreta: A argila húmida deforma-se plasticamente sob pressão e não recupera a geometria original.",
      "Está incorreta: A massa de pão é um corpo plastoviscoelástico que retém deformações permanentes sob tensão."
    ],
    "nursingApplication": "Molas de aço são a base de balanças mecânicas e dinamómetros de precisão hospitalares."
  },
  {
    "id": 2047,
    "topicId": 2,
    "question": "Quando uma força deformadora ultrapassa o limite elástico de um material real, que tipo de deformação passa a ocorrer?",
    "options": [
      "Deformação de Euclides perfeitamente indeformável.",
      "Retorno instantâneo e espontâneo à forma inicial a velocidade infinita.",
      "Anulação absoluta de todas as forças gravíticas sobre o corpo.",
      "Deformação plástica permanente irreversível."
    ],
    "correctIndex": 3,
    "explanation": "Ultrapassado o limite elástico (limiar de elasticidade), as ligações moleculares cedem e a deformação torna-se plástica.",
    "distractorAnalysis": [
      "Está incorreta: Sólidos de Euclides são modelos teóricos indeformáveis; materiais reais deformam-se plasticamente.",
      "Está incorreta: Acima do limite elástico o corpo já não regressa à forma original, ficando deformado.",
      "Está incorreta: A gravidade continua a atuar plenamente sobre a massa do corpo material."
    ],
    "nursingApplication": "Explica o momento em que um suporte metálico se dobra permanentemente por excesso de carga."
  },
  {
    "id": 2048,
    "topicId": 2,
    "question": "Se um material se deforma facilmente sob uma força e não regressa à sua forma original após a remoção da carga, esse material diz-se:",
    "options": [
      "Plástico.",
      "Perfeitamente elástico.",
      "Rigidamente indeformável.",
      "Supercondutor térmico."
    ],
    "correctIndex": 0,
    "explanation": "Os corpos plásticos sofrem deformações permanentes irreversíveis, não recuperando a sua forma inicial.",
    "distractorAnalysis": [
      "Está incorreta: Um corpo perfeitamente elástico recuperaria a sua forma original quando a força cessasse.",
      "Está incorreta: Um corpo indeformável não sofreria qualquer deformação perante a força aplicada.",
      "Está incorreta: Supercondutividade térmica é uma propriedade de transporte de calor em baixas temperaturas, não de mecânica."
    ],
    "nursingApplication": "A plasticina é o exemplo mais intuitivo de corpo com comportamento puramente plástico."
  },
  {
    "id": 2049,
    "topicId": 2,
    "question": "Qual é a definição exata de Reologia no estudo da Biofísica?",
    "options": [
      "O estudo da velocidade de emissão de partículas alfa em elementos radioativos de transição.",
      "O ramo da física que estuda as reações dos corpos à ação de forças deformadoras aplicadas sobre a sua estrutura.",
      "A área que analisa exclusivamente o campo gravitacional gerado por massas puntiformes no vácuo.",
      "A parte da ótica geométrica que investiga a refração da luz branca em prismas triangulares."
    ],
    "correctIndex": 1,
    "explanation": "A Reologia investiga como os materiais se deformam e fluem sob a ação de forças mecânicas externas.",
    "distractorAnalysis": [
      "Está incorreta: Emissões alfa pertencem à física nuclear e radioatividade, não à reologia.",
      "Está incorreta: Campos gravitacionais de massas no vácuo pertencem à gravitação universal de Newton.",
      "Está incorreta: Refração da luz em prismas é o domínio da ótica ondulatória e geométrica."
    ],
    "nursingApplication": "Permite compreender como os biomateriais e tecidos de suporte respondem a cargas mecânicas."
  },
  {
    "id": 2050,
    "topicId": 2,
    "question": "O que é uma Força Deformadora na mecânica dos materiais?",
    "options": [
      "Uma força que apenas desloca o corpo no espaço sem provocar qualquer alteração na sua forma ou dimensões.",
      "Uma força que anula a temperatura absoluta do sistema transformando o sólido em gás ideal.",
      "Uma força externa que altera as distâncias relativas entre as partículas ou moléculas que constituem o corpo.",
      "Uma força microscópica que atua exclusivamente no interior do núcleo de átomos pesados."
    ],
    "correctIndex": 2,
    "explanation": "Forças deformadoras produzem tensões internas que modificam a geometria ou volume do sólido.",
    "distractorAnalysis": [
      "Está incorreta: Forças que apenas aceleram o corpo em bloco sem o deformar atuam como forças puramente translacionais.",
      "Está incorreta: Forças mecânicas não anulam a temperatura absoluta nem criam gases ideais.",
      "Está incorreta: Forças no núcleo atómico são forças nucleares fortes e fracas, não forças de deformação macroscópicas."
    ],
    "nursingApplication": "Reconhece que qualquer pressão excessiva exercida sobre uma estrutura produz deformação mecânica."
  },
  {
    "id": 2051,
    "topicId": 2,
    "question": "Na classificação reológica dos corpos, o que caracteriza um Sólido de Euclides?",
    "options": [
      "É um corpo perfeitamente viscoso que se deforma como o mel a qualquer temperatura.",
      "É um material plástico que se deforma permanentemente mesmo com forças infinitesimais.",
      "É um fluido incompressível que escoa exclusivamente em regime turbulento a alta velocidade.",
      "É um modelo teórico de sólido indeformável cuja distância interpartículas é estritamente invariável sob qualquer força."
    ],
    "correctIndex": 3,
    "explanation": "O sólido de Euclides é uma idealização da mecânica clássica: um sólido infinitamente rígido que nunca se deforma.",
    "distractorAnalysis": [
      "Está incorreta: Sólidos de Euclides são indeformáveis; corpos que fluem como o mel são corpos viscosos de Newton.",
      "Está incorreta: Corpos plásticos deformam-se permanentemente; sólidos de Euclides não sofrem deformação alguma.",
      "Está incorreta: Sólidos de Euclides são corpos sólidos rígidos, não fluidos em escoamento turbulento."
    ],
    "nursingApplication": "Modelo teórico usado na estática de alavancas para considerar os ossos como barras indeformáveis."
  },
  {
    "id": 2052,
    "topicId": 2,
    "question": "Existem sólidos perfeitamente indeformáveis (Sólidos de Euclides) na natureza real?",
    "options": [
      "Não, o sólido de Euclides é apenas um modelo teórico ideal; todos os corpos reais sofrem algum grau de deformação.",
      "Sim, o diamante e o osso humano são sólidos de Euclides perfeitamente indeformáveis sob qualquer carga.",
      "Sim, todos os metais sólidos comportam-se como sólidos de Euclides em qualquer intervalo de força.",
      "Sim, qualquer objeto cuja massa seja superior a cem quilogramas torna-se automaticamente indeformável."
    ],
    "correctIndex": 0,
    "explanation": "Na física real, todos os materiais materiais cedem microscopicamente a tensões; o sólido rígido é uma aproximação útil.",
    "distractorAnalysis": [
      "Está incorreta: O diamante e o osso sofrem deformação e podem fraturar sob forças elevadas; não são indeformáveis.",
      "Está incorreta: Os metais deformam-se elástica e plasticamente sob tensão; não são modelos rígidos perfeitos.",
      "Está incorreta: A massa do corpo não impede a deformação; corpos com grande massa continuam a sofrer deformações mecânicas."
    ],
    "nursingApplication": "Lembra que nenhuma estrutura do corpo humano é absolutamente indeformável perante impactos."
  },
  {
    "id": 2053,
    "topicId": 2,
    "question": "O que define e caracteriza um Sólido de Hooke na Reologia?",
    "options": [
      "Um corpo viscoso que escoa lentamente com velocidade inversamente proporcional à pressão.",
      "Um corpo puramente elástico cuja deformação é diretamente proporcional à intensidade da tensão mecânica aplicada.",
      "Um material puramente plástico que só se deforma acima de temperaturas próximas do ponto de fusão.",
      "Um corpo indeformável cujas moléculas não se movem mesmo sob forças infinitas."
    ],
    "correctIndex": 1,
    "explanation": "Os sólidos de Hooke exibem elasticidade linear perfeita: a deformação varia linearmente com a tensão (Lei de Hooke).",
    "distractorAnalysis": [
      "Está incorreta: Escoar lentamente com o tempo é a característica dos corpos viscosos, não dos sólidos elásticos de Hooke.",
      "Está incorreta: Deformação plástica dependente de temperatura descreve plasticidade térmica, não elasticidade de Hooke.",
      "Está incorreta: O corpo indeformável sob forças infinitas é o sólido de Euclides, e não o sólido de Hooke."
    ],
    "nursingApplication": "O sólido de Hooke é o modelo utilizado para calibrar molas de camas e dinamómetros de tração."
  },
  {
    "id": 2054,
    "topicId": 2,
    "question": "Qual é o comportamento de um Sólido de Hooke quando a força deformadora que atuava sobre ele é removida?",
    "options": [
      "Permanece permanentemente deformado com a dimensão máxima atingida.",
      "Fragmenta-se instantaneamente num pó microscópico por libertação de calor.",
      "Restitui integral, instantânea e perfeitamente a sua forma e dimensões originais.",
      "Começa a escoar lentamente como um líquido à temperatura ambiente."
    ],
    "correctIndex": 2,
    "explanation": "Por ser perfeitamente elástico, o sólido de Hooke recupera a sua geometria original assim que a carga cessa.",
    "distractorAnalysis": [
      "Está incorreta: Permanecer deformado é o comportamento dos corpos plásticos, não dos sólidos elásticos de Hooke.",
      "Está incorreta: Fragmentar-se em pó é uma fratura catastrófica que não ocorre dentro do regime elástico de Hooke.",
      "Está incorreta: Escoar como um líquido caracteriza corpos viscosos, não sólidos elásticos."
    ],
    "nursingApplication": "Explica o funcionamento contínuo de molas que voltam à posição de repouso após cada utilização."
  },
  {
    "id": 2055,
    "topicId": 2,
    "question": "Qual dos seguintes objetos materiais é a melhor representação física de um Sólido de Hooke no quotidiano?",
    "options": [
      "Uma barra de plasticina moldável à temperatura ambiente.",
      "Uma poça de mel espesso a escorrer num plano inclinado.",
      "Uma esponja ensopada em água morna sujeita a compressão lenta.",
      "Uma mola metálica de aço a trabalhar dentro do seu limite elástico."
    ],
    "correctIndex": 3,
    "explanation": "Molas metálicas de aço operam com excelente linearidade elástica (F = k·Δx), modelando perfeitamente o sólido de Hooke.",
    "distractorAnalysis": [
      "Está incorreta: A plasticina é um corpo plástico que não recupera a forma original.",
      "Está incorreta: O mel é um fluido viscoso de escoamento irreversível.",
      "Está incorreta: A esponja ensopada é um corpo viscoelástico com escoamento de fluido poroso, não puramente elástico."
    ],
    "nursingApplication": "As molas de dinamómetros e suspensões mecânicas operam sob o modelo do sólido de Hooke."
  },
  {
    "id": 2056,
    "topicId": 2,
    "question": "Na relação tensão-deformação de um Sólido de Hooke, a representação gráfica no regime elástico é:",
    "options": [
      "Uma linha reta que passa pela origem das coordenadas cartesianas.",
      "Uma parábola descendente que atinge o valor zero em grandes tensões.",
      "Uma curva sinusoidal com oscilações periódicas infinitas.",
      "Uma linha horizontal perfeitamente plana paralela ao eixo da deformação."
    ],
    "correctIndex": 0,
    "explanation": "Como a tensão é diretamente proporcional à deformação (σ = E·ε), o gráfico é uma reta com declive igual a E.",
    "distractorAnalysis": [
      "Está incorreta: Uma parábola representaria uma relação não linear quadrática, alheia à linearidade da Lei de Hooke.",
      "Está incorreta: Curvas sinusoidais ocorrem em fenómenos ondulatórios ou oscilatórios no tempo, não no ensaio estático de Hooke.",
      "Está incorreta: Uma linha horizontal representaria deformação infinita sob tensão constante (escoamento plástico perfeito)."
    ],
    "nursingApplication": "O declive da reta tensão-deformação fornece o Módulo de Young (rigidez) do material."
  },
  {
    "id": 2057,
    "topicId": 2,
    "question": "O que distingue essencialmente um Sólido de Euclides de um Sólido de Hooke?",
    "options": [
      "O sólido de Euclides deforma-se como a plasticina e o de Hooke nunca altera o seu volume.",
      "O sólido de Euclides nunca se deforma perante nenhuma força; o de Hooke deforma-se proporcionalmente à tensão aplicada.",
      "O sólido de Euclides é líquido à temperatura ambiente e o de Hooke é um gás comprimido.",
      "Ambos os sólidos são absolutamente idênticos em todas as propriedades físicas da mecânica."
    ],
    "correctIndex": 1,
    "explanation": "Euclides = modelo teórico indeformável (rigidez infinita); Hooke = modelo elástico linear ideal (rigidez finita).",
    "distractorAnalysis": [
      "Está incorreta: O sólido de Euclides não se deforma; corpos que se comportam como a plasticina são corpos plásticos.",
      "Está incorreta: Tanto o modelo de Euclides como o de Hooke representam corpos sólidos, e não fluidos ou gases.",
      "Está incorreta: São modelos conceptualmente distintos com equações de resposta mecânica totalmente diferentes."
    ],
    "nursingApplication": "Permite distinguir quando tratamos um osso como alavanca rígida (Euclides) ou como elemento elástico (Hooke)."
  },
  {
    "id": 2058,
    "topicId": 2,
    "question": "A Lei de Hooke aplica-se a qualquer intensidade de força exercida sobre uma mola de aço real?",
    "options": [
      "Sim, é válida para qualquer força finita ou infinita sem qualquer restrição física.",
      "Não, a Lei de Hooke só se aplica quando a mola se encontra imersa em nitrogénio líquido.",
      "Não, apenas é válida até ao Limite de Proporcionalidade (ou limite elástico) do material.",
      "Sim, porque os metais mantêm a sua resposta elástica linear mesmo após sofrerem fratura."
    ],
    "correctIndex": 2,
    "explanation": "Se a força for excessiva, o material ultrapassa o limite elástico, entra em regime plástico e deixa de obedecer a Hooke.",
    "distractorAnalysis": [
      "Está incorreta: Nenhum material real obedece à Lei de Hooke para forças infinitas; todos têm limites de resistência.",
      "Está incorreta: A Lei de Hooke aplica-se à temperatura ambiente normal e não exige nitrogénio líquido.",
      "Está incorreta: Após a fratura ou na zona plástica a Lei de Hooke deixa de ser válida."
    ],
    "nursingApplication": "Alerta para o perigo de sobrecarregar dinamómetros ou molas hospitalares além do limite máximo."
  },
  {
    "id": 2059,
    "topicId": 2,
    "question": "Na classificação reológica dos corpos, o que caracteriza um Sólido de Euclides?",
    "options": [
      "É um corpo perfeitamente viscoso que se deforma como o mel a qualquer temperatura.",
      "É um material plástico que se deforma permanentemente mesmo com forças infinitesimais.",
      "É um fluido incompressível que escoa exclusivamente em regime turbulento a alta velocidade.",
      "É um modelo teórico de sólido indeformável cuja distância interpartículas é estritamente invariável sob qualquer força."
    ],
    "correctIndex": 3,
    "explanation": "O sólido de Euclides é uma idealização da mecânica clássica: um sólido infinitamente rígido que nunca se deforma.",
    "distractorAnalysis": [
      "Está incorreta: Sólidos de Euclides são indeformáveis; corpos que fluem como o mel são corpos viscosos de Newton.",
      "Está incorreta: Corpos plásticos deformam-se permanentemente; sólidos de Euclides não sofrem deformação alguma.",
      "Está incorreta: Sólidos de Euclides são corpos sólidos rígidos, não fluidos em escoamento turbulento."
    ],
    "nursingApplication": "Modelo teórico usado na estática de alavancas para considerar os ossos como barras indeformáveis."
  },
  {
    "id": 2060,
    "topicId": 2,
    "question": "Existem sólidos perfeitamente indeformáveis (Sólidos de Euclides) na natureza real?",
    "options": [
      "Não, o sólido de Euclides é apenas um modelo teórico ideal; todos os corpos reais sofrem algum grau de deformação.",
      "Sim, o diamante e o osso humano são sólidos de Euclides perfeitamente indeformáveis sob qualquer carga.",
      "Sim, todos os metais sólidos comportam-se como sólidos de Euclides em qualquer intervalo de força.",
      "Sim, qualquer objeto cuja massa seja superior a cem quilogramas torna-se automaticamente indeformável."
    ],
    "correctIndex": 0,
    "explanation": "Na física real, todos os materiais materiais cedem microscopicamente a tensões; o sólido rígido é uma aproximação útil.",
    "distractorAnalysis": [
      "Está incorreta: O diamante e o osso sofrem deformação e podem fraturar sob forças elevadas; não são indeformáveis.",
      "Está incorreta: Os metais deformam-se elástica e plasticamente sob tensão; não são modelos rígidos perfeitos.",
      "Está incorreta: A massa do corpo não impede a deformação; corpos com grande massa continuam a sofrer deformações mecânicas."
    ],
    "nursingApplication": "Lembra que nenhuma estrutura do corpo humano é absolutamente indeformável perante impactos."
  },
  {
    "id": 2061,
    "topicId": 2,
    "question": "O que define e caracteriza um Sólido de Hooke na Reologia?",
    "options": [
      "Um corpo viscoso que escoa lentamente com velocidade inversamente proporcional à pressão.",
      "Um corpo puramente elástico cuja deformação é diretamente proporcional à intensidade da tensão mecânica aplicada.",
      "Um material puramente plástico que só se deforma acima de temperaturas próximas do ponto de fusão.",
      "Um corpo indeformável cujas moléculas não se movem mesmo sob forças infinitas."
    ],
    "correctIndex": 1,
    "explanation": "Os sólidos de Hooke exibem elasticidade linear perfeita: a deformação varia linearmente com a tensão (Lei de Hooke).",
    "distractorAnalysis": [
      "Está incorreta: Escoar lentamente com o tempo é a característica dos corpos viscosos, não dos sólidos elásticos de Hooke.",
      "Está incorreta: Deformação plástica dependente de temperatura descreve plasticidade térmica, não elasticidade de Hooke.",
      "Está incorreta: O corpo indeformável sob forças infinitas é o sólido de Euclides, e não o sólido de Hooke."
    ],
    "nursingApplication": "O sólido de Hooke é o modelo utilizado para calibrar molas de camas e dinamómetros de tração."
  },
  {
    "id": 2062,
    "topicId": 2,
    "question": "Qual é o comportamento de um Sólido de Hooke quando a força deformadora que atuava sobre ele é removida?",
    "options": [
      "Permanece permanentemente deformado com a dimensão máxima atingida.",
      "Fragmenta-se instantaneamente num pó microscópico por libertação de calor.",
      "Restitui integral, instantânea e perfeitamente a sua forma e dimensões originais.",
      "Começa a escoar lentamente como um líquido à temperatura ambiente."
    ],
    "correctIndex": 2,
    "explanation": "Por ser perfeitamente elástico, o sólido de Hooke recupera a sua geometria original assim que a carga cessa.",
    "distractorAnalysis": [
      "Está incorreta: Permanecer deformado é o comportamento dos corpos plásticos, não dos sólidos elásticos de Hooke.",
      "Está incorreta: Fragmentar-se em pó é uma fratura catastrófica que não ocorre dentro do regime elástico de Hooke.",
      "Está incorreta: Escoar como um líquido caracteriza corpos viscosos, não sólidos elásticos."
    ],
    "nursingApplication": "Explica o funcionamento contínuo de molas que voltam à posição de repouso após cada utilização."
  },
  {
    "id": 2063,
    "topicId": 2,
    "question": "Qual dos seguintes objetos materiais é a melhor representação física de um Sólido de Hooke no quotidiano?",
    "options": [
      "Uma barra de plasticina moldável à temperatura ambiente.",
      "Uma poça de mel espesso a escorrer num plano inclinado.",
      "Uma esponja ensopada em água morna sujeita a compressão lenta.",
      "Uma mola metálica de aço a trabalhar dentro do seu limite elástico."
    ],
    "correctIndex": 3,
    "explanation": "Molas metálicas de aço operam com excelente linearidade elástica (F = k·Δx), modelando perfeitamente o sólido de Hooke.",
    "distractorAnalysis": [
      "Está incorreta: A plasticina é um corpo plástico que não recupera a forma original.",
      "Está incorreta: O mel é um fluido viscoso de escoamento irreversível.",
      "Está incorreta: A esponja ensopada é um corpo viscoelástico com escoamento de fluido poroso, não puramente elástico."
    ],
    "nursingApplication": "As molas de dinamómetros e suspensões mecânicas operam sob o modelo do sólido de Hooke."
  },
  {
    "id": 2064,
    "topicId": 2,
    "question": "Na relação tensão-deformação de um Sólido de Hooke, a representação gráfica no regime elástico é:",
    "options": [
      "Uma linha reta que passa pela origem das coordenadas cartesianas.",
      "Uma parábola descendente que atinge o valor zero em grandes tensões.",
      "Uma curva sinusoidal com oscilações periódicas infinitas.",
      "Uma linha horizontal perfeitamente plana paralela ao eixo da deformação."
    ],
    "correctIndex": 0,
    "explanation": "Como a tensão é diretamente proporcional à deformação (σ = E·ε), o gráfico é uma reta com declive igual a E.",
    "distractorAnalysis": [
      "Está incorreta: Uma parábola representaria uma relação não linear quadrática, alheia à linearidade da Lei de Hooke.",
      "Está incorreta: Curvas sinusoidais ocorrem em fenómenos ondulatórios ou oscilatórios no tempo, não no ensaio estático de Hooke.",
      "Está incorreta: Uma linha horizontal representaria deformação infinita sob tensão constante (escoamento plástico perfeito)."
    ],
    "nursingApplication": "O declive da reta tensão-deformação fornece o Módulo de Young (rigidez) do material."
  },
  {
    "id": 2065,
    "topicId": 2,
    "question": "O que distingue essencialmente um Sólido de Euclides de um Sólido de Hooke?",
    "options": [
      "O sólido de Euclides deforma-se como a plasticina e o de Hooke nunca altera o seu volume.",
      "O sólido de Euclides nunca se deforma perante nenhuma força; o de Hooke deforma-se proporcionalmente à tensão aplicada.",
      "O sólido de Euclides é líquido à temperatura ambiente e o de Hooke é um gás comprimido.",
      "Ambos os sólidos são absolutamente idênticos em todas as propriedades físicas da mecânica."
    ],
    "correctIndex": 1,
    "explanation": "Euclides = modelo teórico indeformável (rigidez infinita); Hooke = modelo elástico linear ideal (rigidez finita).",
    "distractorAnalysis": [
      "Está incorreta: O sólido de Euclides não se deforma; corpos que se comportam como a plasticina são corpos plásticos.",
      "Está incorreta: Tanto o modelo de Euclides como o de Hooke representam corpos sólidos, e não fluidos ou gases.",
      "Está incorreta: São modelos conceptualmente distintos com equações de resposta mecânica totalmente diferentes."
    ],
    "nursingApplication": "Permite distinguir quando tratamos um osso como alavanca rígida (Euclides) ou como elemento elástico (Hooke)."
  },
  {
    "id": 2066,
    "topicId": 2,
    "question": "A Lei de Hooke aplica-se a qualquer intensidade de força exercida sobre uma mola de aço real?",
    "options": [
      "Sim, é válida para qualquer força finita ou infinita sem qualquer restrição física.",
      "Não, a Lei de Hooke só se aplica quando a mola se encontra imersa em nitrogénio líquido.",
      "Não, apenas é válida até ao Limite de Proporcionalidade (ou limite elástico) do material.",
      "Sim, porque os metais mantêm a sua resposta elástica linear mesmo após sofrerem fratura."
    ],
    "correctIndex": 2,
    "explanation": "Se a força for excessiva, o material ultrapassa o limite elástico, entra em regime plástico e deixa de obedecer a Hooke.",
    "distractorAnalysis": [
      "Está incorreta: Nenhum material real obedece à Lei de Hooke para forças infinitas; todos têm limites de resistência.",
      "Está incorreta: A Lei de Hooke aplica-se à temperatura ambiente normal e não exige nitrogénio líquido.",
      "Está incorreta: Após a fratura ou na zona plástica a Lei de Hooke deixa de ser válida."
    ],
    "nursingApplication": "Alerta para o perigo de sobrecarregar dinamómetros ou molas hospitalares além do limite máximo."
  },
  {
    "id": 2067,
    "topicId": 2,
    "question": "Na classificação reológica dos corpos, o que caracteriza um Sólido de Euclides?",
    "options": [
      "É um corpo perfeitamente viscoso que se deforma como o mel a qualquer temperatura.",
      "É um material plástico que se deforma permanentemente mesmo com forças infinitesimais.",
      "É um fluido incompressível que escoa exclusivamente em regime turbulento a alta velocidade.",
      "É um modelo teórico de sólido indeformável cuja distância interpartículas é estritamente invariável sob qualquer força."
    ],
    "correctIndex": 3,
    "explanation": "O sólido de Euclides é uma idealização da mecânica clássica: um sólido infinitamente rígido que nunca se deforma.",
    "distractorAnalysis": [
      "Está incorreta: Sólidos de Euclides são indeformáveis; corpos que fluem como o mel são corpos viscosos de Newton.",
      "Está incorreta: Corpos plásticos deformam-se permanentemente; sólidos de Euclides não sofrem deformação alguma.",
      "Está incorreta: Sólidos de Euclides são corpos sólidos rígidos, não fluidos em escoamento turbulento."
    ],
    "nursingApplication": "Modelo teórico usado na estática de alavancas para considerar os ossos como barras indeformáveis."
  },
  {
    "id": 2068,
    "topicId": 2,
    "question": "Existem sólidos perfeitamente indeformáveis (Sólidos de Euclides) na natureza real?",
    "options": [
      "Não, o sólido de Euclides é apenas um modelo teórico ideal; todos os corpos reais sofrem algum grau de deformação.",
      "Sim, o diamante e o osso humano são sólidos de Euclides perfeitamente indeformáveis sob qualquer carga.",
      "Sim, todos os metais sólidos comportam-se como sólidos de Euclides em qualquer intervalo de força.",
      "Sim, qualquer objeto cuja massa seja superior a cem quilogramas torna-se automaticamente indeformável."
    ],
    "correctIndex": 0,
    "explanation": "Na física real, todos os materiais materiais cedem microscopicamente a tensões; o sólido rígido é uma aproximação útil.",
    "distractorAnalysis": [
      "Está incorreta: O diamante e o osso sofrem deformação e podem fraturar sob forças elevadas; não são indeformáveis.",
      "Está incorreta: Os metais deformam-se elástica e plasticamente sob tensão; não são modelos rígidos perfeitos.",
      "Está incorreta: A massa do corpo não impede a deformação; corpos com grande massa continuam a sofrer deformações mecânicas."
    ],
    "nursingApplication": "Lembra que nenhuma estrutura do corpo humano é absolutamente indeformável perante impactos."
  },
  {
    "id": 2069,
    "topicId": 2,
    "question": "O que define e caracteriza um Sólido de Hooke na Reologia?",
    "options": [
      "Um corpo viscoso que escoa lentamente com velocidade inversamente proporcional à pressão.",
      "Um corpo puramente elástico cuja deformação é diretamente proporcional à intensidade da tensão mecânica aplicada.",
      "Um material puramente plástico que só se deforma acima de temperaturas próximas do ponto de fusão.",
      "Um corpo indeformável cujas moléculas não se movem mesmo sob forças infinitas."
    ],
    "correctIndex": 1,
    "explanation": "Os sólidos de Hooke exibem elasticidade linear perfeita: a deformação varia linearmente com a tensão (Lei de Hooke).",
    "distractorAnalysis": [
      "Está incorreta: Escoar lentamente com o tempo é a característica dos corpos viscosos, não dos sólidos elásticos de Hooke.",
      "Está incorreta: Deformação plástica dependente de temperatura descreve plasticidade térmica, não elasticidade de Hooke.",
      "Está incorreta: O corpo indeformável sob forças infinitas é o sólido de Euclides, e não o sólido de Hooke."
    ],
    "nursingApplication": "O sólido de Hooke é o modelo utilizado para calibrar molas de camas e dinamómetros de tração."
  },
  {
    "id": 2070,
    "topicId": 2,
    "question": "Qual é o comportamento de um Sólido de Hooke quando a força deformadora que atuava sobre ele é removida?",
    "options": [
      "Permanece permanentemente deformado com a dimensão máxima atingida.",
      "Fragmenta-se instantaneamente num pó microscópico por libertação de calor.",
      "Restitui integral, instantânea e perfeitamente a sua forma e dimensões originais.",
      "Começa a escoar lentamente como um líquido à temperatura ambiente."
    ],
    "correctIndex": 2,
    "explanation": "Por ser perfeitamente elástico, o sólido de Hooke recupera a sua geometria original assim que a carga cessa.",
    "distractorAnalysis": [
      "Está incorreta: Permanecer deformado é o comportamento dos corpos plásticos, não dos sólidos elásticos de Hooke.",
      "Está incorreta: Fragmentar-se em pó é uma fratura catastrófica que não ocorre dentro do regime elástico de Hooke.",
      "Está incorreta: Escoar como um líquido caracteriza corpos viscosos, não sólidos elásticos."
    ],
    "nursingApplication": "Explica o funcionamento contínuo de molas que voltam à posição de repouso após cada utilização."
  },
  {
    "id": 2071,
    "topicId": 2,
    "question": "Qual dos seguintes objetos materiais é a melhor representação física de um Sólido de Hooke no quotidiano?",
    "options": [
      "Uma barra de plasticina moldável à temperatura ambiente.",
      "Uma poça de mel espesso a escorrer num plano inclinado.",
      "Uma esponja ensopada em água morna sujeita a compressão lenta.",
      "Uma mola metálica de aço a trabalhar dentro do seu limite elástico."
    ],
    "correctIndex": 3,
    "explanation": "Molas metálicas de aço operam com excelente linearidade elástica (F = k·Δx), modelando perfeitamente o sólido de Hooke.",
    "distractorAnalysis": [
      "Está incorreta: A plasticina é um corpo plástico que não recupera a forma original.",
      "Está incorreta: O mel é um fluido viscoso de escoamento irreversível.",
      "Está incorreta: A esponja ensopada é um corpo viscoelástico com escoamento de fluido poroso, não puramente elástico."
    ],
    "nursingApplication": "As molas de dinamómetros e suspensões mecânicas operam sob o modelo do sólido de Hooke."
  },
  {
    "id": 2072,
    "topicId": 2,
    "question": "Na relação tensão-deformação de um Sólido de Hooke, a representação gráfica no regime elástico é:",
    "options": [
      "Uma linha reta que passa pela origem das coordenadas cartesianas.",
      "Uma parábola descendente que atinge o valor zero em grandes tensões.",
      "Uma curva sinusoidal com oscilações periódicas infinitas.",
      "Uma linha horizontal perfeitamente plana paralela ao eixo da deformação."
    ],
    "correctIndex": 0,
    "explanation": "Como a tensão é diretamente proporcional à deformação (σ = E·ε), o gráfico é uma reta com declive igual a E.",
    "distractorAnalysis": [
      "Está incorreta: Uma parábola representaria uma relação não linear quadrática, alheia à linearidade da Lei de Hooke.",
      "Está incorreta: Curvas sinusoidais ocorrem em fenómenos ondulatórios ou oscilatórios no tempo, não no ensaio estático de Hooke.",
      "Está incorreta: Uma linha horizontal representaria deformação infinita sob tensão constante (escoamento plástico perfeito)."
    ],
    "nursingApplication": "O declive da reta tensão-deformação fornece o Módulo de Young (rigidez) do material."
  },
  {
    "id": 2073,
    "topicId": 2,
    "question": "O que distingue essencialmente um Sólido de Euclides de um Sólido de Hooke?",
    "options": [
      "O sólido de Euclides deforma-se como a plasticina e o de Hooke nunca altera o seu volume.",
      "O sólido de Euclides nunca se deforma perante nenhuma força; o de Hooke deforma-se proporcionalmente à tensão aplicada.",
      "O sólido de Euclides é líquido à temperatura ambiente e o de Hooke é um gás comprimido.",
      "Ambos os sólidos são absolutamente idênticos em todas as propriedades físicas da mecânica."
    ],
    "correctIndex": 1,
    "explanation": "Euclides = modelo teórico indeformável (rigidez infinita); Hooke = modelo elástico linear ideal (rigidez finita).",
    "distractorAnalysis": [
      "Está incorreta: O sólido de Euclides não se deforma; corpos que se comportam como a plasticina são corpos plásticos.",
      "Está incorreta: Tanto o modelo de Euclides como o de Hooke representam corpos sólidos, e não fluidos ou gases.",
      "Está incorreta: São modelos conceptualmente distintos com equações de resposta mecânica totalmente diferentes."
    ],
    "nursingApplication": "Permite distinguir quando tratamos um osso como alavanca rígida (Euclides) ou como elemento elástico (Hooke)."
  },
  {
    "id": 2074,
    "topicId": 2,
    "question": "A Lei de Hooke aplica-se a qualquer intensidade de força exercida sobre uma mola de aço real?",
    "options": [
      "Sim, é válida para qualquer força finita ou infinita sem qualquer restrição física.",
      "Não, a Lei de Hooke só se aplica quando a mola se encontra imersa em nitrogénio líquido.",
      "Não, apenas é válida até ao Limite de Proporcionalidade (ou limite elástico) do material.",
      "Sim, porque os metais mantêm a sua resposta elástica linear mesmo após sofrerem fratura."
    ],
    "correctIndex": 2,
    "explanation": "Se a força for excessiva, o material ultrapassa o limite elástico, entra em regime plástico e deixa de obedecer a Hooke.",
    "distractorAnalysis": [
      "Está incorreta: Nenhum material real obedece à Lei de Hooke para forças infinitas; todos têm limites de resistência.",
      "Está incorreta: A Lei de Hooke aplica-se à temperatura ambiente normal e não exige nitrogénio líquido.",
      "Está incorreta: Após a fratura ou na zona plástica a Lei de Hooke deixa de ser válida."
    ],
    "nursingApplication": "Alerta para o perigo de sobrecarregar dinamómetros ou molas hospitalares além do limite máximo."
  },
  {
    "id": 2075,
    "topicId": 2,
    "question": "Na classificação reológica dos corpos, o que caracteriza um Sólido de Euclides?",
    "options": [
      "É um corpo perfeitamente viscoso que se deforma como o mel a qualquer temperatura.",
      "É um material plástico que se deforma permanentemente mesmo com forças infinitesimais.",
      "É um fluido incompressível que escoa exclusivamente em regime turbulento a alta velocidade.",
      "É um modelo teórico de sólido indeformável cuja distância interpartículas é estritamente invariável sob qualquer força."
    ],
    "correctIndex": 3,
    "explanation": "O sólido de Euclides é uma idealização da mecânica clássica: um sólido infinitamente rígido que nunca se deforma.",
    "distractorAnalysis": [
      "Está incorreta: Sólidos de Euclides são indeformáveis; corpos que fluem como o mel são corpos viscosos de Newton.",
      "Está incorreta: Corpos plásticos deformam-se permanentemente; sólidos de Euclides não sofrem deformação alguma.",
      "Está incorreta: Sólidos de Euclides são corpos sólidos rígidos, não fluidos em escoamento turbulento."
    ],
    "nursingApplication": "Modelo teórico usado na estática de alavancas para considerar os ossos como barras indeformáveis."
  },
  {
    "id": 2076,
    "topicId": 2,
    "question": "Existem sólidos perfeitamente indeformáveis (Sólidos de Euclides) na natureza real?",
    "options": [
      "Não, o sólido de Euclides é apenas um modelo teórico ideal; todos os corpos reais sofrem algum grau de deformação.",
      "Sim, o diamante e o osso humano são sólidos de Euclides perfeitamente indeformáveis sob qualquer carga.",
      "Sim, todos os metais sólidos comportam-se como sólidos de Euclides em qualquer intervalo de força.",
      "Sim, qualquer objeto cuja massa seja superior a cem quilogramas torna-se automaticamente indeformável."
    ],
    "correctIndex": 0,
    "explanation": "Na física real, todos os materiais materiais cedem microscopicamente a tensões; o sólido rígido é uma aproximação útil.",
    "distractorAnalysis": [
      "Está incorreta: O diamante e o osso sofrem deformação e podem fraturar sob forças elevadas; não são indeformáveis.",
      "Está incorreta: Os metais deformam-se elástica e plasticamente sob tensão; não são modelos rígidos perfeitos.",
      "Está incorreta: A massa do corpo não impede a deformação; corpos com grande massa continuam a sofrer deformações mecânicas."
    ],
    "nursingApplication": "Lembra que nenhuma estrutura do corpo humano é absolutamente indeformável perante impactos."
  },
  {
    "id": 2077,
    "topicId": 2,
    "question": "O que define e caracteriza um Sólido de Hooke na Reologia?",
    "options": [
      "Um corpo viscoso que escoa lentamente com velocidade inversamente proporcional à pressão.",
      "Um corpo puramente elástico cuja deformação é diretamente proporcional à intensidade da tensão mecânica aplicada.",
      "Um material puramente plástico que só se deforma acima de temperaturas próximas do ponto de fusão.",
      "Um corpo indeformável cujas moléculas não se movem mesmo sob forças infinitas."
    ],
    "correctIndex": 1,
    "explanation": "Os sólidos de Hooke exibem elasticidade linear perfeita: a deformação varia linearmente com a tensão (Lei de Hooke).",
    "distractorAnalysis": [
      "Está incorreta: Escoar lentamente com o tempo é a característica dos corpos viscosos, não dos sólidos elásticos de Hooke.",
      "Está incorreta: Deformação plástica dependente de temperatura descreve plasticidade térmica, não elasticidade de Hooke.",
      "Está incorreta: O corpo indeformável sob forças infinitas é o sólido de Euclides, e não o sólido de Hooke."
    ],
    "nursingApplication": "O sólido de Hooke é o modelo utilizado para calibrar molas de camas e dinamómetros de tração."
  },
  {
    "id": 2078,
    "topicId": 2,
    "question": "Qual é o comportamento de um Sólido de Hooke quando a força deformadora que atuava sobre ele é removida?",
    "options": [
      "Permanece permanentemente deformado com a dimensão máxima atingida.",
      "Fragmenta-se instantaneamente num pó microscópico por libertação de calor.",
      "Restitui integral, instantânea e perfeitamente a sua forma e dimensões originais.",
      "Começa a escoar lentamente como um líquido à temperatura ambiente."
    ],
    "correctIndex": 2,
    "explanation": "Por ser perfeitamente elástico, o sólido de Hooke recupera a sua geometria original assim que a carga cessa.",
    "distractorAnalysis": [
      "Está incorreta: Permanecer deformado é o comportamento dos corpos plásticos, não dos sólidos elásticos de Hooke.",
      "Está incorreta: Fragmentar-se em pó é uma fratura catastrófica que não ocorre dentro do regime elástico de Hooke.",
      "Está incorreta: Escoar como um líquido caracteriza corpos viscosos, não sólidos elásticos."
    ],
    "nursingApplication": "Explica o funcionamento contínuo de molas que voltam à posição de repouso após cada utilização."
  },
  {
    "id": 2079,
    "topicId": 2,
    "question": "Qual dos seguintes objetos materiais é a melhor representação física de um Sólido de Hooke no quotidiano?",
    "options": [
      "Uma barra de plasticina moldável à temperatura ambiente.",
      "Uma poça de mel espesso a escorrer num plano inclinado.",
      "Uma esponja ensopada em água morna sujeita a compressão lenta.",
      "Uma mola metálica de aço a trabalhar dentro do seu limite elástico."
    ],
    "correctIndex": 3,
    "explanation": "Molas metálicas de aço operam com excelente linearidade elástica (F = k·Δx), modelando perfeitamente o sólido de Hooke.",
    "distractorAnalysis": [
      "Está incorreta: A plasticina é um corpo plástico que não recupera a forma original.",
      "Está incorreta: O mel é um fluido viscoso de escoamento irreversível.",
      "Está incorreta: A esponja ensopada é um corpo viscoelástico com escoamento de fluido poroso, não puramente elástico."
    ],
    "nursingApplication": "As molas de dinamómetros e suspensões mecânicas operam sob o modelo do sólido de Hooke."
  },
  {
    "id": 2080,
    "topicId": 2,
    "question": "Na relação tensão-deformação de um Sólido de Hooke, a representação gráfica no regime elástico é:",
    "options": [
      "Uma linha reta que passa pela origem das coordenadas cartesianas.",
      "Uma parábola descendente que atinge o valor zero em grandes tensões.",
      "Uma curva sinusoidal com oscilações periódicas infinitas.",
      "Uma linha horizontal perfeitamente plana paralela ao eixo da deformação."
    ],
    "correctIndex": 0,
    "explanation": "Como a tensão é diretamente proporcional à deformação (σ = E·ε), o gráfico é uma reta com declive igual a E.",
    "distractorAnalysis": [
      "Está incorreta: Uma parábola representaria uma relação não linear quadrática, alheia à linearidade da Lei de Hooke.",
      "Está incorreta: Curvas sinusoidais ocorrem em fenómenos ondulatórios ou oscilatórios no tempo, não no ensaio estático de Hooke.",
      "Está incorreta: Uma linha horizontal representaria deformação infinita sob tensão constante (escoamento plástico perfeito)."
    ],
    "nursingApplication": "O declive da reta tensão-deformação fornece o Módulo de Young (rigidez) do material."
  },
  {
    "id": 2081,
    "topicId": 2,
    "question": "O que distingue essencialmente um Sólido de Euclides de um Sólido de Hooke?",
    "options": [
      "O sólido de Euclides deforma-se como a plasticina e o de Hooke nunca altera o seu volume.",
      "O sólido de Euclides nunca se deforma perante nenhuma força; o de Hooke deforma-se proporcionalmente à tensão aplicada.",
      "O sólido de Euclides é líquido à temperatura ambiente e o de Hooke é um gás comprimido.",
      "Ambos os sólidos são absolutamente idênticos em todas as propriedades físicas da mecânica."
    ],
    "correctIndex": 1,
    "explanation": "Euclides = modelo teórico indeformável (rigidez infinita); Hooke = modelo elástico linear ideal (rigidez finita).",
    "distractorAnalysis": [
      "Está incorreta: O sólido de Euclides não se deforma; corpos que se comportam como a plasticina são corpos plásticos.",
      "Está incorreta: Tanto o modelo de Euclides como o de Hooke representam corpos sólidos, e não fluidos ou gases.",
      "Está incorreta: São modelos conceptualmente distintos com equações de resposta mecânica totalmente diferentes."
    ],
    "nursingApplication": "Permite distinguir quando tratamos um osso como alavanca rígida (Euclides) ou como elemento elástico (Hooke)."
  },
  {
    "id": 2082,
    "topicId": 2,
    "question": "A Lei de Hooke aplica-se a qualquer intensidade de força exercida sobre uma mola de aço real?",
    "options": [
      "Sim, é válida para qualquer força finita ou infinita sem qualquer restrição física.",
      "Não, a Lei de Hooke só se aplica quando a mola se encontra imersa em nitrogénio líquido.",
      "Não, apenas é válida até ao Limite de Proporcionalidade (ou limite elástico) do material.",
      "Sim, porque os metais mantêm a sua resposta elástica linear mesmo após sofrerem fratura."
    ],
    "correctIndex": 2,
    "explanation": "Se a força for excessiva, o material ultrapassa o limite elástico, entra em regime plástico e deixa de obedecer a Hooke.",
    "distractorAnalysis": [
      "Está incorreta: Nenhum material real obedece à Lei de Hooke para forças infinitas; todos têm limites de resistência.",
      "Está incorreta: A Lei de Hooke aplica-se à temperatura ambiente normal e não exige nitrogénio líquido.",
      "Está incorreta: Após a fratura ou na zona plástica a Lei de Hooke deixa de ser válida."
    ],
    "nursingApplication": "Alerta para o perigo de sobrecarregar dinamómetros ou molas hospitalares além do limite máximo."
  },
  {
    "id": 2083,
    "topicId": 2,
    "question": "Na classificação reológica dos corpos, o que caracteriza um Sólido de Euclides?",
    "options": [
      "É um corpo perfeitamente viscoso que se deforma como o mel a qualquer temperatura.",
      "É um material plástico que se deforma permanentemente mesmo com forças infinitesimais.",
      "É um fluido incompressível que escoa exclusivamente em regime turbulento a alta velocidade.",
      "É um modelo teórico de sólido indeformável cuja distância interpartículas é estritamente invariável sob qualquer força."
    ],
    "correctIndex": 3,
    "explanation": "O sólido de Euclides é uma idealização da mecânica clássica: um sólido infinitamente rígido que nunca se deforma.",
    "distractorAnalysis": [
      "Está incorreta: Sólidos de Euclides são indeformáveis; corpos que fluem como o mel são corpos viscosos de Newton.",
      "Está incorreta: Corpos plásticos deformam-se permanentemente; sólidos de Euclides não sofrem deformação alguma.",
      "Está incorreta: Sólidos de Euclides são corpos sólidos rígidos, não fluidos em escoamento turbulento."
    ],
    "nursingApplication": "Modelo teórico usado na estática de alavancas para considerar os ossos como barras indeformáveis."
  },
  {
    "id": 2084,
    "topicId": 2,
    "question": "Existem sólidos perfeitamente indeformáveis (Sólidos de Euclides) na natureza real?",
    "options": [
      "Não, o sólido de Euclides é apenas um modelo teórico ideal; todos os corpos reais sofrem algum grau de deformação.",
      "Sim, o diamante e o osso humano são sólidos de Euclides perfeitamente indeformáveis sob qualquer carga.",
      "Sim, todos os metais sólidos comportam-se como sólidos de Euclides em qualquer intervalo de força.",
      "Sim, qualquer objeto cuja massa seja superior a cem quilogramas torna-se automaticamente indeformável."
    ],
    "correctIndex": 0,
    "explanation": "Na física real, todos os materiais materiais cedem microscopicamente a tensões; o sólido rígido é uma aproximação útil.",
    "distractorAnalysis": [
      "Está incorreta: O diamante e o osso sofrem deformação e podem fraturar sob forças elevadas; não são indeformáveis.",
      "Está incorreta: Os metais deformam-se elástica e plasticamente sob tensão; não são modelos rígidos perfeitos.",
      "Está incorreta: A massa do corpo não impede a deformação; corpos com grande massa continuam a sofrer deformações mecânicas."
    ],
    "nursingApplication": "Lembra que nenhuma estrutura do corpo humano é absolutamente indeformável perante impactos."
  },
  {
    "id": 2085,
    "topicId": 2,
    "question": "O que define e caracteriza um Sólido de Hooke na Reologia?",
    "options": [
      "Um corpo viscoso que escoa lentamente com velocidade inversamente proporcional à pressão.",
      "Um corpo puramente elástico cuja deformação é diretamente proporcional à intensidade da tensão mecânica aplicada.",
      "Um material puramente plástico que só se deforma acima de temperaturas próximas do ponto de fusão.",
      "Um corpo indeformável cujas moléculas não se movem mesmo sob forças infinitas."
    ],
    "correctIndex": 1,
    "explanation": "Os sólidos de Hooke exibem elasticidade linear perfeita: a deformação varia linearmente com a tensão (Lei de Hooke).",
    "distractorAnalysis": [
      "Está incorreta: Escoar lentamente com o tempo é a característica dos corpos viscosos, não dos sólidos elásticos de Hooke.",
      "Está incorreta: Deformação plástica dependente de temperatura descreve plasticidade térmica, não elasticidade de Hooke.",
      "Está incorreta: O corpo indeformável sob forças infinitas é o sólido de Euclides, e não o sólido de Hooke."
    ],
    "nursingApplication": "O sólido de Hooke é o modelo utilizado para calibrar molas de camas e dinamómetros de tração."
  },
  {
    "id": 2086,
    "topicId": 2,
    "question": "Qual é o comportamento de um Sólido de Hooke quando a força deformadora que atuava sobre ele é removida?",
    "options": [
      "Permanece permanentemente deformado com a dimensão máxima atingida.",
      "Fragmenta-se instantaneamente num pó microscópico por libertação de calor.",
      "Restitui integral, instantânea e perfeitamente a sua forma e dimensões originais.",
      "Começa a escoar lentamente como um líquido à temperatura ambiente."
    ],
    "correctIndex": 2,
    "explanation": "Por ser perfeitamente elástico, o sólido de Hooke recupera a sua geometria original assim que a carga cessa.",
    "distractorAnalysis": [
      "Está incorreta: Permanecer deformado é o comportamento dos corpos plásticos, não dos sólidos elásticos de Hooke.",
      "Está incorreta: Fragmentar-se em pó é uma fratura catastrófica que não ocorre dentro do regime elástico de Hooke.",
      "Está incorreta: Escoar como um líquido caracteriza corpos viscosos, não sólidos elásticos."
    ],
    "nursingApplication": "Explica o funcionamento contínuo de molas que voltam à posição de repouso após cada utilização."
  },
  {
    "id": 2087,
    "topicId": 2,
    "question": "Qual dos seguintes objetos materiais é a melhor representação física de um Sólido de Hooke no quotidiano?",
    "options": [
      "Uma barra de plasticina moldável à temperatura ambiente.",
      "Uma poça de mel espesso a escorrer num plano inclinado.",
      "Uma esponja ensopada em água morna sujeita a compressão lenta.",
      "Uma mola metálica de aço a trabalhar dentro do seu limite elástico."
    ],
    "correctIndex": 3,
    "explanation": "Molas metálicas de aço operam com excelente linearidade elástica (F = k·Δx), modelando perfeitamente o sólido de Hooke.",
    "distractorAnalysis": [
      "Está incorreta: A plasticina é um corpo plástico que não recupera a forma original.",
      "Está incorreta: O mel é um fluido viscoso de escoamento irreversível.",
      "Está incorreta: A esponja ensopada é um corpo viscoelástico com escoamento de fluido poroso, não puramente elástico."
    ],
    "nursingApplication": "As molas de dinamómetros e suspensões mecânicas operam sob o modelo do sólido de Hooke."
  },
  {
    "id": 2088,
    "topicId": 2,
    "question": "Na relação tensão-deformação de um Sólido de Hooke, a representação gráfica no regime elástico é:",
    "options": [
      "Uma linha reta que passa pela origem das coordenadas cartesianas.",
      "Uma parábola descendente que atinge o valor zero em grandes tensões.",
      "Uma curva sinusoidal com oscilações periódicas infinitas.",
      "Uma linha horizontal perfeitamente plana paralela ao eixo da deformação."
    ],
    "correctIndex": 0,
    "explanation": "Como a tensão é diretamente proporcional à deformação (σ = E·ε), o gráfico é uma reta com declive igual a E.",
    "distractorAnalysis": [
      "Está incorreta: Uma parábola representaria uma relação não linear quadrática, alheia à linearidade da Lei de Hooke.",
      "Está incorreta: Curvas sinusoidais ocorrem em fenómenos ondulatórios ou oscilatórios no tempo, não no ensaio estático de Hooke.",
      "Está incorreta: Uma linha horizontal representaria deformação infinita sob tensão constante (escoamento plástico perfeito)."
    ],
    "nursingApplication": "O declive da reta tensão-deformação fornece o Módulo de Young (rigidez) do material."
  },
  {
    "id": 2089,
    "topicId": 2,
    "question": "O que distingue essencialmente um Sólido de Euclides de um Sólido de Hooke?",
    "options": [
      "O sólido de Euclides deforma-se como a plasticina e o de Hooke nunca altera o seu volume.",
      "O sólido de Euclides nunca se deforma perante nenhuma força; o de Hooke deforma-se proporcionalmente à tensão aplicada.",
      "O sólido de Euclides é líquido à temperatura ambiente e o de Hooke é um gás comprimido.",
      "Ambos os sólidos são absolutamente idênticos em todas as propriedades físicas da mecânica."
    ],
    "correctIndex": 1,
    "explanation": "Euclides = modelo teórico indeformável (rigidez infinita); Hooke = modelo elástico linear ideal (rigidez finita).",
    "distractorAnalysis": [
      "Está incorreta: O sólido de Euclides não se deforma; corpos que se comportam como a plasticina são corpos plásticos.",
      "Está incorreta: Tanto o modelo de Euclides como o de Hooke representam corpos sólidos, e não fluidos ou gases.",
      "Está incorreta: São modelos conceptualmente distintos com equações de resposta mecânica totalmente diferentes."
    ],
    "nursingApplication": "Permite distinguir quando tratamos um osso como alavanca rígida (Euclides) ou como elemento elástico (Hooke)."
  },
  {
    "id": 2090,
    "topicId": 2,
    "question": "A Lei de Hooke aplica-se a qualquer intensidade de força exercida sobre uma mola de aço real?",
    "options": [
      "Sim, é válida para qualquer força finita ou infinita sem qualquer restrição física.",
      "Não, a Lei de Hooke só se aplica quando a mola se encontra imersa em nitrogénio líquido.",
      "Não, apenas é válida até ao Limite de Proporcionalidade (ou limite elástico) do material.",
      "Sim, porque os metais mantêm a sua resposta elástica linear mesmo após sofrerem fratura."
    ],
    "correctIndex": 2,
    "explanation": "Se a força for excessiva, o material ultrapassa o limite elástico, entra em regime plástico e deixa de obedecer a Hooke.",
    "distractorAnalysis": [
      "Está incorreta: Nenhum material real obedece à Lei de Hooke para forças infinitas; todos têm limites de resistência.",
      "Está incorreta: A Lei de Hooke aplica-se à temperatura ambiente normal e não exige nitrogénio líquido.",
      "Está incorreta: Após a fratura ou na zona plástica a Lei de Hooke deixa de ser válida."
    ],
    "nursingApplication": "Alerta para o perigo de sobrecarregar dinamómetros ou molas hospitalares além do limite máximo."
  },
  {
    "id": 2091,
    "topicId": 2,
    "question": "Na classificação reológica dos corpos, o que caracteriza um Sólido de Euclides?",
    "options": [
      "É um corpo perfeitamente viscoso que se deforma como o mel a qualquer temperatura.",
      "É um material plástico que se deforma permanentemente mesmo com forças infinitesimais.",
      "É um fluido incompressível que escoa exclusivamente em regime turbulento a alta velocidade.",
      "É um modelo teórico de sólido indeformável cuja distância interpartículas é estritamente invariável sob qualquer força."
    ],
    "correctIndex": 3,
    "explanation": "O sólido de Euclides é uma idealização da mecânica clássica: um sólido infinitamente rígido que nunca se deforma.",
    "distractorAnalysis": [
      "Está incorreta: Sólidos de Euclides são indeformáveis; corpos que fluem como o mel são corpos viscosos de Newton.",
      "Está incorreta: Corpos plásticos deformam-se permanentemente; sólidos de Euclides não sofrem deformação alguma.",
      "Está incorreta: Sólidos de Euclides são corpos sólidos rígidos, não fluidos em escoamento turbulento."
    ],
    "nursingApplication": "Modelo teórico usado na estática de alavancas para considerar os ossos como barras indeformáveis."
  },
  {
    "id": 2092,
    "topicId": 2,
    "question": "Existem sólidos perfeitamente indeformáveis (Sólidos de Euclides) na natureza real?",
    "options": [
      "Não, o sólido de Euclides é apenas um modelo teórico ideal; todos os corpos reais sofrem algum grau de deformação.",
      "Sim, o diamante e o osso humano são sólidos de Euclides perfeitamente indeformáveis sob qualquer carga.",
      "Sim, todos os metais sólidos comportam-se como sólidos de Euclides em qualquer intervalo de força.",
      "Sim, qualquer objeto cuja massa seja superior a cem quilogramas torna-se automaticamente indeformável."
    ],
    "correctIndex": 0,
    "explanation": "Na física real, todos os materiais materiais cedem microscopicamente a tensões; o sólido rígido é uma aproximação útil.",
    "distractorAnalysis": [
      "Está incorreta: O diamante e o osso sofrem deformação e podem fraturar sob forças elevadas; não são indeformáveis.",
      "Está incorreta: Os metais deformam-se elástica e plasticamente sob tensão; não são modelos rígidos perfeitos.",
      "Está incorreta: A massa do corpo não impede a deformação; corpos com grande massa continuam a sofrer deformações mecânicas."
    ],
    "nursingApplication": "Lembra que nenhuma estrutura do corpo humano é absolutamente indeformável perante impactos."
  },
  {
    "id": 2093,
    "topicId": 2,
    "question": "O que define e caracteriza um Sólido de Hooke na Reologia?",
    "options": [
      "Um corpo viscoso que escoa lentamente com velocidade inversamente proporcional à pressão.",
      "Um corpo puramente elástico cuja deformação é diretamente proporcional à intensidade da tensão mecânica aplicada.",
      "Um material puramente plástico que só se deforma acima de temperaturas próximas do ponto de fusão.",
      "Um corpo indeformável cujas moléculas não se movem mesmo sob forças infinitas."
    ],
    "correctIndex": 1,
    "explanation": "Os sólidos de Hooke exibem elasticidade linear perfeita: a deformação varia linearmente com a tensão (Lei de Hooke).",
    "distractorAnalysis": [
      "Está incorreta: Escoar lentamente com o tempo é a característica dos corpos viscosos, não dos sólidos elásticos de Hooke.",
      "Está incorreta: Deformação plástica dependente de temperatura descreve plasticidade térmica, não elasticidade de Hooke.",
      "Está incorreta: O corpo indeformável sob forças infinitas é o sólido de Euclides, e não o sólido de Hooke."
    ],
    "nursingApplication": "O sólido de Hooke é o modelo utilizado para calibrar molas de camas e dinamómetros de tração."
  },
  {
    "id": 2094,
    "topicId": 2,
    "question": "Qual é o comportamento de um Sólido de Hooke quando a força deformadora que atuava sobre ele é removida?",
    "options": [
      "Permanece permanentemente deformado com a dimensão máxima atingida.",
      "Fragmenta-se instantaneamente num pó microscópico por libertação de calor.",
      "Restitui integral, instantânea e perfeitamente a sua forma e dimensões originais.",
      "Começa a escoar lentamente como um líquido à temperatura ambiente."
    ],
    "correctIndex": 2,
    "explanation": "Por ser perfeitamente elástico, o sólido de Hooke recupera a sua geometria original assim que a carga cessa.",
    "distractorAnalysis": [
      "Está incorreta: Permanecer deformado é o comportamento dos corpos plásticos, não dos sólidos elásticos de Hooke.",
      "Está incorreta: Fragmentar-se em pó é uma fratura catastrófica que não ocorre dentro do regime elástico de Hooke.",
      "Está incorreta: Escoar como um líquido caracteriza corpos viscosos, não sólidos elásticos."
    ],
    "nursingApplication": "Explica o funcionamento contínuo de molas que voltam à posição de repouso após cada utilização."
  },
  {
    "id": 2095,
    "topicId": 2,
    "question": "Qual dos seguintes objetos materiais é a melhor representação física de um Sólido de Hooke no quotidiano?",
    "options": [
      "Uma barra de plasticina moldável à temperatura ambiente.",
      "Uma poça de mel espesso a escorrer num plano inclinado.",
      "Uma esponja ensopada em água morna sujeita a compressão lenta.",
      "Uma mola metálica de aço a trabalhar dentro do seu limite elástico."
    ],
    "correctIndex": 3,
    "explanation": "Molas metálicas de aço operam com excelente linearidade elástica (F = k·Δx), modelando perfeitamente o sólido de Hooke.",
    "distractorAnalysis": [
      "Está incorreta: A plasticina é um corpo plástico que não recupera a forma original.",
      "Está incorreta: O mel é um fluido viscoso de escoamento irreversível.",
      "Está incorreta: A esponja ensopada é um corpo viscoelástico com escoamento de fluido poroso, não puramente elástico."
    ],
    "nursingApplication": "As molas de dinamómetros e suspensões mecânicas operam sob o modelo do sólido de Hooke."
  },
  {
    "id": 2096,
    "topicId": 2,
    "question": "Na relação tensão-deformação de um Sólido de Hooke, a representação gráfica no regime elástico é:",
    "options": [
      "Uma linha reta que passa pela origem das coordenadas cartesianas.",
      "Uma parábola descendente que atinge o valor zero em grandes tensões.",
      "Uma curva sinusoidal com oscilações periódicas infinitas.",
      "Uma linha horizontal perfeitamente plana paralela ao eixo da deformação."
    ],
    "correctIndex": 0,
    "explanation": "Como a tensão é diretamente proporcional à deformação (σ = E·ε), o gráfico é uma reta com declive igual a E.",
    "distractorAnalysis": [
      "Está incorreta: Uma parábola representaria uma relação não linear quadrática, alheia à linearidade da Lei de Hooke.",
      "Está incorreta: Curvas sinusoidais ocorrem em fenómenos ondulatórios ou oscilatórios no tempo, não no ensaio estático de Hooke.",
      "Está incorreta: Uma linha horizontal representaria deformação infinita sob tensão constante (escoamento plástico perfeito)."
    ],
    "nursingApplication": "O declive da reta tensão-deformação fornece o Módulo de Young (rigidez) do material."
  },
  {
    "id": 2097,
    "topicId": 2,
    "question": "O que distingue essencialmente um Sólido de Euclides de um Sólido de Hooke?",
    "options": [
      "O sólido de Euclides deforma-se como a plasticina e o de Hooke nunca altera o seu volume.",
      "O sólido de Euclides nunca se deforma perante nenhuma força; o de Hooke deforma-se proporcionalmente à tensão aplicada.",
      "O sólido de Euclides é líquido à temperatura ambiente e o de Hooke é um gás comprimido.",
      "Ambos os sólidos são absolutamente idênticos em todas as propriedades físicas da mecânica."
    ],
    "correctIndex": 1,
    "explanation": "Euclides = modelo teórico indeformável (rigidez infinita); Hooke = modelo elástico linear ideal (rigidez finita).",
    "distractorAnalysis": [
      "Está incorreta: O sólido de Euclides não se deforma; corpos que se comportam como a plasticina são corpos plásticos.",
      "Está incorreta: Tanto o modelo de Euclides como o de Hooke representam corpos sólidos, e não fluidos ou gases.",
      "Está incorreta: São modelos conceptualmente distintos com equações de resposta mecânica totalmente diferentes."
    ],
    "nursingApplication": "Permite distinguir quando tratamos um osso como alavanca rígida (Euclides) ou como elemento elástico (Hooke)."
  },
  {
    "id": 2098,
    "topicId": 2,
    "question": "A Lei de Hooke aplica-se a qualquer intensidade de força exercida sobre uma mola de aço real?",
    "options": [
      "Sim, é válida para qualquer força finita ou infinita sem qualquer restrição física.",
      "Não, a Lei de Hooke só se aplica quando a mola se encontra imersa em nitrogénio líquido.",
      "Não, apenas é válida até ao Limite de Proporcionalidade (ou limite elástico) do material.",
      "Sim, porque os metais mantêm a sua resposta elástica linear mesmo após sofrerem fratura."
    ],
    "correctIndex": 2,
    "explanation": "Se a força for excessiva, o material ultrapassa o limite elástico, entra em regime plástico e deixa de obedecer a Hooke.",
    "distractorAnalysis": [
      "Está incorreta: Nenhum material real obedece à Lei de Hooke para forças infinitas; todos têm limites de resistência.",
      "Está incorreta: A Lei de Hooke aplica-se à temperatura ambiente normal e não exige nitrogénio líquido.",
      "Está incorreta: Após a fratura ou na zona plástica a Lei de Hooke deixa de ser válida."
    ],
    "nursingApplication": "Alerta para o perigo de sobrecarregar dinamómetros ou molas hospitalares além do limite máximo."
  },
  {
    "id": 2099,
    "topicId": 2,
    "question": "Na classificação reológica dos corpos, o que caracteriza um Sólido de Euclides?",
    "options": [
      "É um corpo perfeitamente viscoso que se deforma como o mel a qualquer temperatura.",
      "É um material plástico que se deforma permanentemente mesmo com forças infinitesimais.",
      "É um fluido incompressível que escoa exclusivamente em regime turbulento a alta velocidade.",
      "É um modelo teórico de sólido indeformável cuja distância interpartículas é estritamente invariável sob qualquer força."
    ],
    "correctIndex": 3,
    "explanation": "O sólido de Euclides é uma idealização da mecânica clássica: um sólido infinitamente rígido que nunca se deforma.",
    "distractorAnalysis": [
      "Está incorreta: Sólidos de Euclides são indeformáveis; corpos que fluem como o mel são corpos viscosos de Newton.",
      "Está incorreta: Corpos plásticos deformam-se permanentemente; sólidos de Euclides não sofrem deformação alguma.",
      "Está incorreta: Sólidos de Euclides são corpos sólidos rígidos, não fluidos em escoamento turbulento."
    ],
    "nursingApplication": "Modelo teórico usado na estática de alavancas para considerar os ossos como barras indeformáveis."
  },
  {
    "id": 2100,
    "topicId": 2,
    "question": "Existem sólidos perfeitamente indeformáveis (Sólidos de Euclides) na natureza real?",
    "options": [
      "Não, o sólido de Euclides é apenas um modelo teórico ideal; todos os corpos reais sofrem algum grau de deformação.",
      "Sim, o diamante e o osso humano são sólidos de Euclides perfeitamente indeformáveis sob qualquer carga.",
      "Sim, todos os metais sólidos comportam-se como sólidos de Euclides em qualquer intervalo de força.",
      "Sim, qualquer objeto cuja massa seja superior a cem quilogramas torna-se automaticamente indeformável."
    ],
    "correctIndex": 0,
    "explanation": "Na física real, todos os materiais materiais cedem microscopicamente a tensões; o sólido rígido é uma aproximação útil.",
    "distractorAnalysis": [
      "Está incorreta: O diamante e o osso sofrem deformação e podem fraturar sob forças elevadas; não são indeformáveis.",
      "Está incorreta: Os metais deformam-se elástica e plasticamente sob tensão; não são modelos rígidos perfeitos.",
      "Está incorreta: A massa do corpo não impede a deformação; corpos com grande massa continuam a sofrer deformações mecânicas."
    ],
    "nursingApplication": "Lembra que nenhuma estrutura do corpo humano é absolutamente indeformável perante impactos."
  },
  {
    "id": 2101,
    "topicId": 2,
    "question": "Na Reologia, o que caracteriza o comportamento mecânico de um Corpo Plástico?",
    "options": [
      "Recupera instantaneamente a forma original qualquer que seja a intensidade da força aplicada.",
      "Apenas sofre deformação apreciável a partir de um determinado valor limiar de tensão, mantendo a deformação permanente após a remoção da carga.",
      "Apresenta uma deformação que depende exclusivamente do campo magnético circundante no vácuo.",
      "Comporta-se como um sólido indeformável de Euclides em todas as situações físicas possíveis."
    ],
    "correctIndex": 1,
    "explanation": "Os corpos plásticos necessitam de uma tensão mínima de escoamento para deformar e não recuperam a forma inicial (ex.: plasticina).",
    "distractorAnalysis": [
      "Está incorreta: Recuperar a forma original instantaneamente é a definição de corpo elástico de Hooke, não de plástico.",
      "Está incorreta: A plasticidade depende das tensões mecânicas aplicadas, não de campos magnéticos.",
      "Está incorreta: Corpos plásticos deformam-se permanentemente; sólidos de Euclides nunca se deformam."
    ],
    "nursingApplication": "Compreender a plasticidade ajuda a entender deformações permanentes em materiais hospitalares."
  },
  {
    "id": 2102,
    "topicId": 2,
    "question": "O que caracteriza fundamentalmente o comportamento de um Corpo Viscoso?",
    "options": [
      "Apresenta uma rigidez infinita que impede qualquer alteração dimensional com o tempo.",
      "Recupera a forma original mais rapidamente do que qualquer mola de aço metálica.",
      "A deformação é proporcional à tensão e ao tempo de aplicação dessa tensão, escoando irreversivelmente sem recuperar a forma original.",
      "A sua densidade duplica instantaneamente a cada segundo de repouso absoluto."
    ],
    "correctIndex": 2,
    "explanation": "Corpos viscosos (como mel ou óleo) fluem sob tensão com uma taxa de deformação dependente do tempo de aplicação da força.",
    "distractorAnalysis": [
      "Está incorreta: Rigidez infinita é a característica teórica do sólido indeformável de Euclides.",
      "Está incorreta: Corpos viscosos não recuperam a forma original; sofrem deformações puramente irreversíveis.",
      "Está incorreta: A densidade dos fluidos não duplica espontaneamente no repouso."
    ],
    "nursingApplication": "Fundamento para analisar a viscosidade de fluidos biológicos e soluções perfundidas."
  },
  {
    "id": 2103,
    "topicId": 2,
    "question": "Como se define um Corpo Viscoelástico no âmbito da Biofísica dos materiais?",
    "options": [
      "Um corpo que se desintegra espontaneamente quando exposto à luz visível do sol.",
      "Um material puramente indeformável que não sofre qualquer alteração mecânica.",
      "Um gás rarefeito que não oferece qualquer resistência à passagem de ondas sonoras.",
      "Um corpo que apresenta simultaneamente características elásticas e viscosas, cuja deformação depende da tensão e do tempo de aplicação da força."
    ],
    "correctIndex": 3,
    "explanation": "A viscoelasticidade combina resposta elástica (capacidade de restaurar forma) com amortecimento viscoso dependente do tempo (histerese).",
    "distractorAnalysis": [
      "Está incorreta: A desintegração por luz é fotodegradação química, não uma propriedade viscoelástica mecânica.",
      "Está incorreta: O corpo indeformável é o modelo de Euclides; materiais viscoelásticos deformam-se sob carga.",
      "Está incorreta: Gases rarefeitos não são corpos viscoelásticos com coesão molecular sólida."
    ],
    "nursingApplication": "Os tecidos biológicos (cartilagem, osso, músculos e tendões) são corpos tipicamente viscoelásticos."
  },
  {
    "id": 2104,
    "topicId": 2,
    "question": "Qual das seguintes estruturas biológicas do corpo humano exibe comportamento mecânico tipicamente VISCOELÁSTICO?",
    "options": [
      "Cartilagens articulares e tecido ósseo.",
      "O ar contido no interior dos alvéolos pulmonares.",
      "O vácuo existente no espaço interatómico das moléculas.",
      "O esmalte dentário seco considerado como sólido puramente euclidiano."
    ],
    "correctIndex": 0,
    "explanation": "Conforme os slides de Paulo Pereira (Slide 19), ossos, cartilagens e músculos são corpos viscoelásticos com histerese.",
    "distractorAnalysis": [
      "Está incorreta: O ar alveolar é uma mistura gasosa compressível, não um tecido biológico viscoelástico sólido.",
      "Está incorreta: O espaço interatómico no vácuo não é um corpo material biológico.",
      "Está incorreta: O esmalte dentário é mineralizado e frágil, não sendo o exemplo típico de viscoelastina amortecedora como a cartilagem."
    ],
    "nursingApplication": "A viscoelasticidade da cartilagem amortece o impacto mecânico repetido na marcha e corrida."
  },
  {
    "id": 2105,
    "topicId": 2,
    "question": "O que é a Histerese Elástica observada em corpos viscoelásticos sob ciclos de carga e descarga?",
    "options": [
      "A criação espontânea de energia mecânica durante o repouso do corpo sem realização de trabalho.",
      "O fenómeno pelo qual a curva de descarga não coincide com a de carga, dissipando energia mecânica sob a forma de calor.",
      "A duplicação imediata da constante elástica de uma mola metálica após cada estiramento.",
      "A perda total de massa atómica do material após ser submetido a forças de tração."
    ],
    "correctIndex": 1,
    "explanation": "Na histerese elástica, a área compreendida entre a curva de deformação e a de retorno representa energia mecânica absorvida e dissipada.",
    "distractorAnalysis": [
      "Está incorreta: A histerese não cria energia mecânica; dissipa energia mecânica absorvida em energia térmica.",
      "Está incorreta: A histerese é própria de materiais viscoelásticos e não altera a constante elástica linear ideal de molas de Hooke.",
      "Está incorreta: A massa material conserva-se integralmente durante os ensaios de deformação e descarga mecânica."
    ],
    "nursingApplication": "O efeito de histerese nas articulações dissipa as ondas de choque prevenindo lesões por impacto."
  },
  {
    "id": 2106,
    "topicId": 2,
    "question": "Como se define um Corpo Plastoviscoelástico nos resumos teóricos de Biofísica (Slide 20)?",
    "options": [
      "Um sólido de Euclides perfeitamente rígido que nunca se deforma em nenhuma circunstância.",
      "Um gás nobre que não interage gravitacionalmente com os corpos vizinhos.",
      "Comporta-se como um corpo elástico sob pequenas tensões; acima desse limiar, comporta-se como corpo plástico e viscoso.",
      "Um líquido perfeito com viscosidade estritamente nula a todas as temperaturas."
    ],
    "correctIndex": 2,
    "explanation": "Sob pequenas forças tem deformação elástica reversível; ultrapassado o limiar, flui e deforma plasticamente (ex.: massa de pão).",
    "distractorAnalysis": [
      "Está incorreta: Sólidos de Euclides são indeformáveis; plastoviscoelásticos deformam-se com facilidade.",
      "Está incorreta: Gases nobres não são materiais plastoviscoelásticos da reologia de sólidos.",
      "Está incorreta: Líquidos com viscosidade nula são superfluidos ideais, o oposto de corpos com plasticidade e viscoelasticidade."
    ],
    "nursingApplication": "A massa de pão é o exemplo didático lecionado para ilustrar o comportamento plastoviscoelástico."
  },
  {
    "id": 2107,
    "topicId": 2,
    "question": "Porque é que uma esponja ou colchão viscoelástico (Memory Foam) se deforma de modo dependente do tempo de aplicação da força?",
    "options": [
      "Porque o material do colchão perde noventa por cento da sua massa a cada minuto em que é comprimido.",
      "Porque a gravidade do planeta atua exclusivamente durante os primeiros cinco segundos de compressão.",
      "Porque o colchão é constituído por um sólido de Euclides puro que rejeita a pressão corporal.",
      "Porque o ar e o material interno escoam lentamente através dos microporos, combinando elasticidade com amortecimento viscoso dependente do tempo."
    ],
    "correctIndex": 3,
    "explanation": "A resposta viscoelástica temporal resulta da redistribuição interna gradual da estrutura polimérica e do ar nos poros.",
    "distractorAnalysis": [
      "Está incorreta: A massa do colchão permanece constante e não se perde durante o uso sob compressão.",
      "Está incorreta: A força da gravidade atua de forma constante e contínua sobre a massa do indivíduo no leito.",
      "Está incorreta: O sólido de Euclides não se deformaria de todo; a espuma viscoelástica adapta-se ao contorno corporal."
    ],
    "nursingApplication": "Colchões viscoelásticos distribuem a pressão por uma área maior ao adaptarem-se lentamente ao corpo."
  },
  {
    "id": 2108,
    "topicId": 2,
    "question": "Qual dos seguintes pares de materiais representa respetivamente um Corpo Viscoso e um Corpo Plástico?",
    "options": [
      "Mel (viscoso) e plasticina (plástico).",
      "Mola de aço (viscoso) e vidro comum (plástico).",
      "Diamante (viscoso) e água destilada (plástico).",
      "Ar comprimido (viscoso) e osso cortical (plástico)."
    ],
    "correctIndex": 0,
    "explanation": "O mel é o exemplo clássico de fluido viscoso irreversível e a plasticina o exemplo clássico de sólido plástico moldável.",
    "distractorAnalysis": [
      "Está incorreta: Molas de aço são elásticas de Hooke e o vidro é um material elástico-frágil, não plástico.",
      "Está incorreta: O diamante é um sólido extremamente rígido e a água é um líquido viscoso (pouco viscoso), não plástico.",
      "Está incorreta: O ar é um gás compressível e o osso é um compósito viscoelástico biológico."
    ],
    "nursingApplication": "Exemplos fundamentais lecionados nos slides de Reologia para distinguir fluidos viscosos de sólidos plásticos."
  },
  {
    "id": 2109,
    "topicId": 2,
    "question": "Na Reologia, o que caracteriza o comportamento mecânico de um Corpo Plástico?",
    "options": [
      "Recupera instantaneamente a forma original qualquer que seja a intensidade da força aplicada.",
      "Apenas sofre deformação apreciável a partir de um determinado valor limiar de tensão, mantendo a deformação permanente após a remoção da carga.",
      "Apresenta uma deformação que depende exclusivamente do campo magnético circundante no vácuo.",
      "Comporta-se como um sólido indeformável de Euclides em todas as situações físicas possíveis."
    ],
    "correctIndex": 1,
    "explanation": "Os corpos plásticos necessitam de uma tensão mínima de escoamento para deformar e não recuperam a forma inicial (ex.: plasticina).",
    "distractorAnalysis": [
      "Está incorreta: Recuperar a forma original instantaneamente é a definição de corpo elástico de Hooke, não de plástico.",
      "Está incorreta: A plasticidade depende das tensões mecânicas aplicadas, não de campos magnéticos.",
      "Está incorreta: Corpos plásticos deformam-se permanentemente; sólidos de Euclides nunca se deformam."
    ],
    "nursingApplication": "Compreender a plasticidade ajuda a entender deformações permanentes em materiais hospitalares."
  },
  {
    "id": 2110,
    "topicId": 2,
    "question": "O que caracteriza fundamentalmente o comportamento de um Corpo Viscoso?",
    "options": [
      "Apresenta uma rigidez infinita que impede qualquer alteração dimensional com o tempo.",
      "Recupera a forma original mais rapidamente do que qualquer mola de aço metálica.",
      "A deformação é proporcional à tensão e ao tempo de aplicação dessa tensão, escoando irreversivelmente sem recuperar a forma original.",
      "A sua densidade duplica instantaneamente a cada segundo de repouso absoluto."
    ],
    "correctIndex": 2,
    "explanation": "Corpos viscosos (como mel ou óleo) fluem sob tensão com uma taxa de deformação dependente do tempo de aplicação da força.",
    "distractorAnalysis": [
      "Está incorreta: Rigidez infinita é a característica teórica do sólido indeformável de Euclides.",
      "Está incorreta: Corpos viscosos não recuperam a forma original; sofrem deformações puramente irreversíveis.",
      "Está incorreta: A densidade dos fluidos não duplica espontaneamente no repouso."
    ],
    "nursingApplication": "Fundamento para analisar a viscosidade de fluidos biológicos e soluções perfundidas."
  },
  {
    "id": 2111,
    "topicId": 2,
    "question": "Como se define um Corpo Viscoelástico no âmbito da Biofísica dos materiais?",
    "options": [
      "Um corpo que se desintegra espontaneamente quando exposto à luz visível do sol.",
      "Um material puramente indeformável que não sofre qualquer alteração mecânica.",
      "Um gás rarefeito que não oferece qualquer resistência à passagem de ondas sonoras.",
      "Um corpo que apresenta simultaneamente características elásticas e viscosas, cuja deformação depende da tensão e do tempo de aplicação da força."
    ],
    "correctIndex": 3,
    "explanation": "A viscoelasticidade combina resposta elástica (capacidade de restaurar forma) com amortecimento viscoso dependente do tempo (histerese).",
    "distractorAnalysis": [
      "Está incorreta: A desintegração por luz é fotodegradação química, não uma propriedade viscoelástica mecânica.",
      "Está incorreta: O corpo indeformável é o modelo de Euclides; materiais viscoelásticos deformam-se sob carga.",
      "Está incorreta: Gases rarefeitos não são corpos viscoelásticos com coesão molecular sólida."
    ],
    "nursingApplication": "Os tecidos biológicos (cartilagem, osso, músculos e tendões) são corpos tipicamente viscoelásticos."
  },
  {
    "id": 2112,
    "topicId": 2,
    "question": "Qual das seguintes estruturas biológicas do corpo humano exibe comportamento mecânico tipicamente VISCOELÁSTICO?",
    "options": [
      "Cartilagens articulares e tecido ósseo.",
      "O ar contido no interior dos alvéolos pulmonares.",
      "O vácuo existente no espaço interatómico das moléculas.",
      "O esmalte dentário seco considerado como sólido puramente euclidiano."
    ],
    "correctIndex": 0,
    "explanation": "Conforme os slides de Paulo Pereira (Slide 19), ossos, cartilagens e músculos são corpos viscoelásticos com histerese.",
    "distractorAnalysis": [
      "Está incorreta: O ar alveolar é uma mistura gasosa compressível, não um tecido biológico viscoelástico sólido.",
      "Está incorreta: O espaço interatómico no vácuo não é um corpo material biológico.",
      "Está incorreta: O esmalte dentário é mineralizado e frágil, não sendo o exemplo típico de viscoelastina amortecedora como a cartilagem."
    ],
    "nursingApplication": "A viscoelasticidade da cartilagem amortece o impacto mecânico repetido na marcha e corrida."
  },
  {
    "id": 2113,
    "topicId": 2,
    "question": "O que é a Histerese Elástica observada em corpos viscoelásticos sob ciclos de carga e descarga?",
    "options": [
      "A criação espontânea de energia mecânica durante o repouso do corpo sem realização de trabalho.",
      "O fenómeno pelo qual a curva de descarga não coincide com a de carga, dissipando energia mecânica sob a forma de calor.",
      "A duplicação imediata da constante elástica de uma mola metálica após cada estiramento.",
      "A perda total de massa atómica do material após ser submetido a forças de tração."
    ],
    "correctIndex": 1,
    "explanation": "Na histerese elástica, a área compreendida entre a curva de deformação e a de retorno representa energia mecânica absorvida e dissipada.",
    "distractorAnalysis": [
      "Está incorreta: A histerese não cria energia mecânica; dissipa energia mecânica absorvida em energia térmica.",
      "Está incorreta: A histerese é própria de materiais viscoelásticos e não altera a constante elástica linear ideal de molas de Hooke.",
      "Está incorreta: A massa material conserva-se integralmente durante os ensaios de deformação e descarga mecânica."
    ],
    "nursingApplication": "O efeito de histerese nas articulações dissipa as ondas de choque prevenindo lesões por impacto."
  },
  {
    "id": 2114,
    "topicId": 2,
    "question": "Como se define um Corpo Plastoviscoelástico nos resumos teóricos de Biofísica (Slide 20)?",
    "options": [
      "Um sólido de Euclides perfeitamente rígido que nunca se deforma em nenhuma circunstância.",
      "Um gás nobre que não interage gravitacionalmente com os corpos vizinhos.",
      "Comporta-se como um corpo elástico sob pequenas tensões; acima desse limiar, comporta-se como corpo plástico e viscoso.",
      "Um líquido perfeito com viscosidade estritamente nula a todas as temperaturas."
    ],
    "correctIndex": 2,
    "explanation": "Sob pequenas forças tem deformação elástica reversível; ultrapassado o limiar, flui e deforma plasticamente (ex.: massa de pão).",
    "distractorAnalysis": [
      "Está incorreta: Sólidos de Euclides são indeformáveis; plastoviscoelásticos deformam-se com facilidade.",
      "Está incorreta: Gases nobres não são materiais plastoviscoelásticos da reologia de sólidos.",
      "Está incorreta: Líquidos com viscosidade nula são superfluidos ideais, o oposto de corpos com plasticidade e viscoelasticidade."
    ],
    "nursingApplication": "A massa de pão é o exemplo didático lecionado para ilustrar o comportamento plastoviscoelástico."
  },
  {
    "id": 2115,
    "topicId": 2,
    "question": "Porque é que uma esponja ou colchão viscoelástico (Memory Foam) se deforma de modo dependente do tempo de aplicação da força?",
    "options": [
      "Porque o material do colchão perde noventa por cento da sua massa a cada minuto em que é comprimido.",
      "Porque a gravidade do planeta atua exclusivamente durante os primeiros cinco segundos de compressão.",
      "Porque o colchão é constituído por um sólido de Euclides puro que rejeita a pressão corporal.",
      "Porque o ar e o material interno escoam lentamente através dos microporos, combinando elasticidade com amortecimento viscoso dependente do tempo."
    ],
    "correctIndex": 3,
    "explanation": "A resposta viscoelástica temporal resulta da redistribuição interna gradual da estrutura polimérica e do ar nos poros.",
    "distractorAnalysis": [
      "Está incorreta: A massa do colchão permanece constante e não se perde durante o uso sob compressão.",
      "Está incorreta: A força da gravidade atua de forma constante e contínua sobre a massa do indivíduo no leito.",
      "Está incorreta: O sólido de Euclides não se deformaria de todo; a espuma viscoelástica adapta-se ao contorno corporal."
    ],
    "nursingApplication": "Colchões viscoelásticos distribuem a pressão por uma área maior ao adaptarem-se lentamente ao corpo."
  },
  {
    "id": 2116,
    "topicId": 2,
    "question": "Qual dos seguintes pares de materiais representa respetivamente um Corpo Viscoso e um Corpo Plástico?",
    "options": [
      "Mel (viscoso) e plasticina (plástico).",
      "Mola de aço (viscoso) e vidro comum (plástico).",
      "Diamante (viscoso) e água destilada (plástico).",
      "Ar comprimido (viscoso) e osso cortical (plástico)."
    ],
    "correctIndex": 0,
    "explanation": "O mel é o exemplo clássico de fluido viscoso irreversível e a plasticina o exemplo clássico de sólido plástico moldável.",
    "distractorAnalysis": [
      "Está incorreta: Molas de aço são elásticas de Hooke e o vidro é um material elástico-frágil, não plástico.",
      "Está incorreta: O diamante é um sólido extremamente rígido e a água é um líquido viscoso (pouco viscoso), não plástico.",
      "Está incorreta: O ar é um gás compressível e o osso é um compósito viscoelástico biológico."
    ],
    "nursingApplication": "Exemplos fundamentais lecionados nos slides de Reologia para distinguir fluidos viscosos de sólidos plásticos."
  },
  {
    "id": 2117,
    "topicId": 2,
    "question": "Na Reologia, o que caracteriza o comportamento mecânico de um Corpo Plástico?",
    "options": [
      "Recupera instantaneamente a forma original qualquer que seja a intensidade da força aplicada.",
      "Apenas sofre deformação apreciável a partir de um determinado valor limiar de tensão, mantendo a deformação permanente após a remoção da carga.",
      "Apresenta uma deformação que depende exclusivamente do campo magnético circundante no vácuo.",
      "Comporta-se como um sólido indeformável de Euclides em todas as situações físicas possíveis."
    ],
    "correctIndex": 1,
    "explanation": "Os corpos plásticos necessitam de uma tensão mínima de escoamento para deformar e não recuperam a forma inicial (ex.: plasticina).",
    "distractorAnalysis": [
      "Está incorreta: Recuperar a forma original instantaneamente é a definição de corpo elástico de Hooke, não de plástico.",
      "Está incorreta: A plasticidade depende das tensões mecânicas aplicadas, não de campos magnéticos.",
      "Está incorreta: Corpos plásticos deformam-se permanentemente; sólidos de Euclides nunca se deformam."
    ],
    "nursingApplication": "Compreender a plasticidade ajuda a entender deformações permanentes em materiais hospitalares."
  },
  {
    "id": 2118,
    "topicId": 2,
    "question": "O que caracteriza fundamentalmente o comportamento de um Corpo Viscoso?",
    "options": [
      "Apresenta uma rigidez infinita que impede qualquer alteração dimensional com o tempo.",
      "Recupera a forma original mais rapidamente do que qualquer mola de aço metálica.",
      "A deformação é proporcional à tensão e ao tempo de aplicação dessa tensão, escoando irreversivelmente sem recuperar a forma original.",
      "A sua densidade duplica instantaneamente a cada segundo de repouso absoluto."
    ],
    "correctIndex": 2,
    "explanation": "Corpos viscosos (como mel ou óleo) fluem sob tensão com uma taxa de deformação dependente do tempo de aplicação da força.",
    "distractorAnalysis": [
      "Está incorreta: Rigidez infinita é a característica teórica do sólido indeformável de Euclides.",
      "Está incorreta: Corpos viscosos não recuperam a forma original; sofrem deformações puramente irreversíveis.",
      "Está incorreta: A densidade dos fluidos não duplica espontaneamente no repouso."
    ],
    "nursingApplication": "Fundamento para analisar a viscosidade de fluidos biológicos e soluções perfundidas."
  },
  {
    "id": 2119,
    "topicId": 2,
    "question": "Como se define um Corpo Viscoelástico no âmbito da Biofísica dos materiais?",
    "options": [
      "Um corpo que se desintegra espontaneamente quando exposto à luz visível do sol.",
      "Um material puramente indeformável que não sofre qualquer alteração mecânica.",
      "Um gás rarefeito que não oferece qualquer resistência à passagem de ondas sonoras.",
      "Um corpo que apresenta simultaneamente características elásticas e viscosas, cuja deformação depende da tensão e do tempo de aplicação da força."
    ],
    "correctIndex": 3,
    "explanation": "A viscoelasticidade combina resposta elástica (capacidade de restaurar forma) com amortecimento viscoso dependente do tempo (histerese).",
    "distractorAnalysis": [
      "Está incorreta: A desintegração por luz é fotodegradação química, não uma propriedade viscoelástica mecânica.",
      "Está incorreta: O corpo indeformável é o modelo de Euclides; materiais viscoelásticos deformam-se sob carga.",
      "Está incorreta: Gases rarefeitos não são corpos viscoelásticos com coesão molecular sólida."
    ],
    "nursingApplication": "Os tecidos biológicos (cartilagem, osso, músculos e tendões) são corpos tipicamente viscoelásticos."
  },
  {
    "id": 2120,
    "topicId": 2,
    "question": "Qual das seguintes estruturas biológicas do corpo humano exibe comportamento mecânico tipicamente VISCOELÁSTICO?",
    "options": [
      "Cartilagens articulares e tecido ósseo.",
      "O ar contido no interior dos alvéolos pulmonares.",
      "O vácuo existente no espaço interatómico das moléculas.",
      "O esmalte dentário seco considerado como sólido puramente euclidiano."
    ],
    "correctIndex": 0,
    "explanation": "Conforme os slides de Paulo Pereira (Slide 19), ossos, cartilagens e músculos são corpos viscoelásticos com histerese.",
    "distractorAnalysis": [
      "Está incorreta: O ar alveolar é uma mistura gasosa compressível, não um tecido biológico viscoelástico sólido.",
      "Está incorreta: O espaço interatómico no vácuo não é um corpo material biológico.",
      "Está incorreta: O esmalte dentário é mineralizado e frágil, não sendo o exemplo típico de viscoelastina amortecedora como a cartilagem."
    ],
    "nursingApplication": "A viscoelasticidade da cartilagem amortece o impacto mecânico repetido na marcha e corrida."
  },
  {
    "id": 2121,
    "topicId": 2,
    "question": "O que é a Histerese Elástica observada em corpos viscoelásticos sob ciclos de carga e descarga?",
    "options": [
      "A criação espontânea de energia mecânica durante o repouso do corpo sem realização de trabalho.",
      "O fenómeno pelo qual a curva de descarga não coincide com a de carga, dissipando energia mecânica sob a forma de calor.",
      "A duplicação imediata da constante elástica de uma mola metálica após cada estiramento.",
      "A perda total de massa atómica do material após ser submetido a forças de tração."
    ],
    "correctIndex": 1,
    "explanation": "Na histerese elástica, a área compreendida entre a curva de deformação e a de retorno representa energia mecânica absorvida e dissipada.",
    "distractorAnalysis": [
      "Está incorreta: A histerese não cria energia mecânica; dissipa energia mecânica absorvida em energia térmica.",
      "Está incorreta: A histerese é própria de materiais viscoelásticos e não altera a constante elástica linear ideal de molas de Hooke.",
      "Está incorreta: A massa material conserva-se integralmente durante os ensaios de deformação e descarga mecânica."
    ],
    "nursingApplication": "O efeito de histerese nas articulações dissipa as ondas de choque prevenindo lesões por impacto."
  },
  {
    "id": 2122,
    "topicId": 2,
    "question": "Como se define um Corpo Plastoviscoelástico nos resumos teóricos de Biofísica (Slide 20)?",
    "options": [
      "Um sólido de Euclides perfeitamente rígido que nunca se deforma em nenhuma circunstância.",
      "Um gás nobre que não interage gravitacionalmente com os corpos vizinhos.",
      "Comporta-se como um corpo elástico sob pequenas tensões; acima desse limiar, comporta-se como corpo plástico e viscoso.",
      "Um líquido perfeito com viscosidade estritamente nula a todas as temperaturas."
    ],
    "correctIndex": 2,
    "explanation": "Sob pequenas forças tem deformação elástica reversível; ultrapassado o limiar, flui e deforma plasticamente (ex.: massa de pão).",
    "distractorAnalysis": [
      "Está incorreta: Sólidos de Euclides são indeformáveis; plastoviscoelásticos deformam-se com facilidade.",
      "Está incorreta: Gases nobres não são materiais plastoviscoelásticos da reologia de sólidos.",
      "Está incorreta: Líquidos com viscosidade nula são superfluidos ideais, o oposto de corpos com plasticidade e viscoelasticidade."
    ],
    "nursingApplication": "A massa de pão é o exemplo didático lecionado para ilustrar o comportamento plastoviscoelástico."
  },
  {
    "id": 2123,
    "topicId": 2,
    "question": "Porque é que uma esponja ou colchão viscoelástico (Memory Foam) se deforma de modo dependente do tempo de aplicação da força?",
    "options": [
      "Porque o material do colchão perde noventa por cento da sua massa a cada minuto em que é comprimido.",
      "Porque a gravidade do planeta atua exclusivamente durante os primeiros cinco segundos de compressão.",
      "Porque o colchão é constituído por um sólido de Euclides puro que rejeita a pressão corporal.",
      "Porque o ar e o material interno escoam lentamente através dos microporos, combinando elasticidade com amortecimento viscoso dependente do tempo."
    ],
    "correctIndex": 3,
    "explanation": "A resposta viscoelástica temporal resulta da redistribuição interna gradual da estrutura polimérica e do ar nos poros.",
    "distractorAnalysis": [
      "Está incorreta: A massa do colchão permanece constante e não se perde durante o uso sob compressão.",
      "Está incorreta: A força da gravidade atua de forma constante e contínua sobre a massa do indivíduo no leito.",
      "Está incorreta: O sólido de Euclides não se deformaria de todo; a espuma viscoelástica adapta-se ao contorno corporal."
    ],
    "nursingApplication": "Colchões viscoelásticos distribuem a pressão por uma área maior ao adaptarem-se lentamente ao corpo."
  },
  {
    "id": 2124,
    "topicId": 2,
    "question": "Qual dos seguintes pares de materiais representa respetivamente um Corpo Viscoso e um Corpo Plástico?",
    "options": [
      "Mel (viscoso) e plasticina (plástico).",
      "Mola de aço (viscoso) e vidro comum (plástico).",
      "Diamante (viscoso) e água destilada (plástico).",
      "Ar comprimido (viscoso) e osso cortical (plástico)."
    ],
    "correctIndex": 0,
    "explanation": "O mel é o exemplo clássico de fluido viscoso irreversível e a plasticina o exemplo clássico de sólido plástico moldável.",
    "distractorAnalysis": [
      "Está incorreta: Molas de aço são elásticas de Hooke e o vidro é um material elástico-frágil, não plástico.",
      "Está incorreta: O diamante é um sólido extremamente rígido e a água é um líquido viscoso (pouco viscoso), não plástico.",
      "Está incorreta: O ar é um gás compressível e o osso é um compósito viscoelástico biológico."
    ],
    "nursingApplication": "Exemplos fundamentais lecionados nos slides de Reologia para distinguir fluidos viscosos de sólidos plásticos."
  },
  {
    "id": 2125,
    "topicId": 2,
    "question": "Na Reologia, o que caracteriza o comportamento mecânico de um Corpo Plástico?",
    "options": [
      "Recupera instantaneamente a forma original qualquer que seja a intensidade da força aplicada.",
      "Apenas sofre deformação apreciável a partir de um determinado valor limiar de tensão, mantendo a deformação permanente após a remoção da carga.",
      "Apresenta uma deformação que depende exclusivamente do campo magnético circundante no vácuo.",
      "Comporta-se como um sólido indeformável de Euclides em todas as situações físicas possíveis."
    ],
    "correctIndex": 1,
    "explanation": "Os corpos plásticos necessitam de uma tensão mínima de escoamento para deformar e não recuperam a forma inicial (ex.: plasticina).",
    "distractorAnalysis": [
      "Está incorreta: Recuperar a forma original instantaneamente é a definição de corpo elástico de Hooke, não de plástico.",
      "Está incorreta: A plasticidade depende das tensões mecânicas aplicadas, não de campos magnéticos.",
      "Está incorreta: Corpos plásticos deformam-se permanentemente; sólidos de Euclides nunca se deformam."
    ],
    "nursingApplication": "Compreender a plasticidade ajuda a entender deformações permanentes em materiais hospitalares."
  },
  {
    "id": 2126,
    "topicId": 2,
    "question": "O que caracteriza fundamentalmente o comportamento de um Corpo Viscoso?",
    "options": [
      "Apresenta uma rigidez infinita que impede qualquer alteração dimensional com o tempo.",
      "Recupera a forma original mais rapidamente do que qualquer mola de aço metálica.",
      "A deformação é proporcional à tensão e ao tempo de aplicação dessa tensão, escoando irreversivelmente sem recuperar a forma original.",
      "A sua densidade duplica instantaneamente a cada segundo de repouso absoluto."
    ],
    "correctIndex": 2,
    "explanation": "Corpos viscosos (como mel ou óleo) fluem sob tensão com uma taxa de deformação dependente do tempo de aplicação da força.",
    "distractorAnalysis": [
      "Está incorreta: Rigidez infinita é a característica teórica do sólido indeformável de Euclides.",
      "Está incorreta: Corpos viscosos não recuperam a forma original; sofrem deformações puramente irreversíveis.",
      "Está incorreta: A densidade dos fluidos não duplica espontaneamente no repouso."
    ],
    "nursingApplication": "Fundamento para analisar a viscosidade de fluidos biológicos e soluções perfundidas."
  },
  {
    "id": 2127,
    "topicId": 2,
    "question": "Como se define um Corpo Viscoelástico no âmbito da Biofísica dos materiais?",
    "options": [
      "Um corpo que se desintegra espontaneamente quando exposto à luz visível do sol.",
      "Um material puramente indeformável que não sofre qualquer alteração mecânica.",
      "Um gás rarefeito que não oferece qualquer resistência à passagem de ondas sonoras.",
      "Um corpo que apresenta simultaneamente características elásticas e viscosas, cuja deformação depende da tensão e do tempo de aplicação da força."
    ],
    "correctIndex": 3,
    "explanation": "A viscoelasticidade combina resposta elástica (capacidade de restaurar forma) com amortecimento viscoso dependente do tempo (histerese).",
    "distractorAnalysis": [
      "Está incorreta: A desintegração por luz é fotodegradação química, não uma propriedade viscoelástica mecânica.",
      "Está incorreta: O corpo indeformável é o modelo de Euclides; materiais viscoelásticos deformam-se sob carga.",
      "Está incorreta: Gases rarefeitos não são corpos viscoelásticos com coesão molecular sólida."
    ],
    "nursingApplication": "Os tecidos biológicos (cartilagem, osso, músculos e tendões) são corpos tipicamente viscoelásticos."
  },
  {
    "id": 2128,
    "topicId": 2,
    "question": "Qual das seguintes estruturas biológicas do corpo humano exibe comportamento mecânico tipicamente VISCOELÁSTICO?",
    "options": [
      "Cartilagens articulares e tecido ósseo.",
      "O ar contido no interior dos alvéolos pulmonares.",
      "O vácuo existente no espaço interatómico das moléculas.",
      "O esmalte dentário seco considerado como sólido puramente euclidiano."
    ],
    "correctIndex": 0,
    "explanation": "Conforme os slides de Paulo Pereira (Slide 19), ossos, cartilagens e músculos são corpos viscoelásticos com histerese.",
    "distractorAnalysis": [
      "Está incorreta: O ar alveolar é uma mistura gasosa compressível, não um tecido biológico viscoelástico sólido.",
      "Está incorreta: O espaço interatómico no vácuo não é um corpo material biológico.",
      "Está incorreta: O esmalte dentário é mineralizado e frágil, não sendo o exemplo típico de viscoelastina amortecedora como a cartilagem."
    ],
    "nursingApplication": "A viscoelasticidade da cartilagem amortece o impacto mecânico repetido na marcha e corrida."
  },
  {
    "id": 2129,
    "topicId": 2,
    "question": "O que é a Histerese Elástica observada em corpos viscoelásticos sob ciclos de carga e descarga?",
    "options": [
      "A criação espontânea de energia mecânica durante o repouso do corpo sem realização de trabalho.",
      "O fenómeno pelo qual a curva de descarga não coincide com a de carga, dissipando energia mecânica sob a forma de calor.",
      "A duplicação imediata da constante elástica de uma mola metálica após cada estiramento.",
      "A perda total de massa atómica do material após ser submetido a forças de tração."
    ],
    "correctIndex": 1,
    "explanation": "Na histerese elástica, a área compreendida entre a curva de deformação e a de retorno representa energia mecânica absorvida e dissipada.",
    "distractorAnalysis": [
      "Está incorreta: A histerese não cria energia mecânica; dissipa energia mecânica absorvida em energia térmica.",
      "Está incorreta: A histerese é própria de materiais viscoelásticos e não altera a constante elástica linear ideal de molas de Hooke.",
      "Está incorreta: A massa material conserva-se integralmente durante os ensaios de deformação e descarga mecânica."
    ],
    "nursingApplication": "O efeito de histerese nas articulações dissipa as ondas de choque prevenindo lesões por impacto."
  },
  {
    "id": 2130,
    "topicId": 2,
    "question": "Como se define um Corpo Plastoviscoelástico nos resumos teóricos de Biofísica (Slide 20)?",
    "options": [
      "Um sólido de Euclides perfeitamente rígido que nunca se deforma em nenhuma circunstância.",
      "Um gás nobre que não interage gravitacionalmente com os corpos vizinhos.",
      "Comporta-se como um corpo elástico sob pequenas tensões; acima desse limiar, comporta-se como corpo plástico e viscoso.",
      "Um líquido perfeito com viscosidade estritamente nula a todas as temperaturas."
    ],
    "correctIndex": 2,
    "explanation": "Sob pequenas forças tem deformação elástica reversível; ultrapassado o limiar, flui e deforma plasticamente (ex.: massa de pão).",
    "distractorAnalysis": [
      "Está incorreta: Sólidos de Euclides são indeformáveis; plastoviscoelásticos deformam-se com facilidade.",
      "Está incorreta: Gases nobres não são materiais plastoviscoelásticos da reologia de sólidos.",
      "Está incorreta: Líquidos com viscosidade nula são superfluidos ideais, o oposto de corpos com plasticidade e viscoelasticidade."
    ],
    "nursingApplication": "A massa de pão é o exemplo didático lecionado para ilustrar o comportamento plastoviscoelástico."
  },
  {
    "id": 2131,
    "topicId": 2,
    "question": "Porque é que uma esponja ou colchão viscoelástico (Memory Foam) se deforma de modo dependente do tempo de aplicação da força?",
    "options": [
      "Porque o material do colchão perde noventa por cento da sua massa a cada minuto em que é comprimido.",
      "Porque a gravidade do planeta atua exclusivamente durante os primeiros cinco segundos de compressão.",
      "Porque o colchão é constituído por um sólido de Euclides puro que rejeita a pressão corporal.",
      "Porque o ar e o material interno escoam lentamente através dos microporos, combinando elasticidade com amortecimento viscoso dependente do tempo."
    ],
    "correctIndex": 3,
    "explanation": "A resposta viscoelástica temporal resulta da redistribuição interna gradual da estrutura polimérica e do ar nos poros.",
    "distractorAnalysis": [
      "Está incorreta: A massa do colchão permanece constante e não se perde durante o uso sob compressão.",
      "Está incorreta: A força da gravidade atua de forma constante e contínua sobre a massa do indivíduo no leito.",
      "Está incorreta: O sólido de Euclides não se deformaria de todo; a espuma viscoelástica adapta-se ao contorno corporal."
    ],
    "nursingApplication": "Colchões viscoelásticos distribuem a pressão por uma área maior ao adaptarem-se lentamente ao corpo."
  },
  {
    "id": 2132,
    "topicId": 2,
    "question": "Qual dos seguintes pares de materiais representa respetivamente um Corpo Viscoso e um Corpo Plástico?",
    "options": [
      "Mel (viscoso) e plasticina (plástico).",
      "Mola de aço (viscoso) e vidro comum (plástico).",
      "Diamante (viscoso) e água destilada (plástico).",
      "Ar comprimido (viscoso) e osso cortical (plástico)."
    ],
    "correctIndex": 0,
    "explanation": "O mel é o exemplo clássico de fluido viscoso irreversível e a plasticina o exemplo clássico de sólido plástico moldável.",
    "distractorAnalysis": [
      "Está incorreta: Molas de aço são elásticas de Hooke e o vidro é um material elástico-frágil, não plástico.",
      "Está incorreta: O diamante é um sólido extremamente rígido e a água é um líquido viscoso (pouco viscoso), não plástico.",
      "Está incorreta: O ar é um gás compressível e o osso é um compósito viscoelástico biológico."
    ],
    "nursingApplication": "Exemplos fundamentais lecionados nos slides de Reologia para distinguir fluidos viscosos de sólidos plásticos."
  },
  {
    "id": 2133,
    "topicId": 2,
    "question": "Na Reologia, o que caracteriza o comportamento mecânico de um Corpo Plástico?",
    "options": [
      "Recupera instantaneamente a forma original qualquer que seja a intensidade da força aplicada.",
      "Apenas sofre deformação apreciável a partir de um determinado valor limiar de tensão, mantendo a deformação permanente após a remoção da carga.",
      "Apresenta uma deformação que depende exclusivamente do campo magnético circundante no vácuo.",
      "Comporta-se como um sólido indeformável de Euclides em todas as situações físicas possíveis."
    ],
    "correctIndex": 1,
    "explanation": "Os corpos plásticos necessitam de uma tensão mínima de escoamento para deformar e não recuperam a forma inicial (ex.: plasticina).",
    "distractorAnalysis": [
      "Está incorreta: Recuperar a forma original instantaneamente é a definição de corpo elástico de Hooke, não de plástico.",
      "Está incorreta: A plasticidade depende das tensões mecânicas aplicadas, não de campos magnéticos.",
      "Está incorreta: Corpos plásticos deformam-se permanentemente; sólidos de Euclides nunca se deformam."
    ],
    "nursingApplication": "Compreender a plasticidade ajuda a entender deformações permanentes em materiais hospitalares."
  },
  {
    "id": 2134,
    "topicId": 2,
    "question": "O que caracteriza fundamentalmente o comportamento de um Corpo Viscoso?",
    "options": [
      "Apresenta uma rigidez infinita que impede qualquer alteração dimensional com o tempo.",
      "Recupera a forma original mais rapidamente do que qualquer mola de aço metálica.",
      "A deformação é proporcional à tensão e ao tempo de aplicação dessa tensão, escoando irreversivelmente sem recuperar a forma original.",
      "A sua densidade duplica instantaneamente a cada segundo de repouso absoluto."
    ],
    "correctIndex": 2,
    "explanation": "Corpos viscosos (como mel ou óleo) fluem sob tensão com uma taxa de deformação dependente do tempo de aplicação da força.",
    "distractorAnalysis": [
      "Está incorreta: Rigidez infinita é a característica teórica do sólido indeformável de Euclides.",
      "Está incorreta: Corpos viscosos não recuperam a forma original; sofrem deformações puramente irreversíveis.",
      "Está incorreta: A densidade dos fluidos não duplica espontaneamente no repouso."
    ],
    "nursingApplication": "Fundamento para analisar a viscosidade de fluidos biológicos e soluções perfundidas."
  },
  {
    "id": 2135,
    "topicId": 2,
    "question": "Como se define um Corpo Viscoelástico no âmbito da Biofísica dos materiais?",
    "options": [
      "Um corpo que se desintegra espontaneamente quando exposto à luz visível do sol.",
      "Um material puramente indeformável que não sofre qualquer alteração mecânica.",
      "Um gás rarefeito que não oferece qualquer resistência à passagem de ondas sonoras.",
      "Um corpo que apresenta simultaneamente características elásticas e viscosas, cuja deformação depende da tensão e do tempo de aplicação da força."
    ],
    "correctIndex": 3,
    "explanation": "A viscoelasticidade combina resposta elástica (capacidade de restaurar forma) com amortecimento viscoso dependente do tempo (histerese).",
    "distractorAnalysis": [
      "Está incorreta: A desintegração por luz é fotodegradação química, não uma propriedade viscoelástica mecânica.",
      "Está incorreta: O corpo indeformável é o modelo de Euclides; materiais viscoelásticos deformam-se sob carga.",
      "Está incorreta: Gases rarefeitos não são corpos viscoelásticos com coesão molecular sólida."
    ],
    "nursingApplication": "Os tecidos biológicos (cartilagem, osso, músculos e tendões) são corpos tipicamente viscoelásticos."
  },
  {
    "id": 2136,
    "topicId": 2,
    "question": "Qual das seguintes estruturas biológicas do corpo humano exibe comportamento mecânico tipicamente VISCOELÁSTICO?",
    "options": [
      "Cartilagens articulares e tecido ósseo.",
      "O ar contido no interior dos alvéolos pulmonares.",
      "O vácuo existente no espaço interatómico das moléculas.",
      "O esmalte dentário seco considerado como sólido puramente euclidiano."
    ],
    "correctIndex": 0,
    "explanation": "Conforme os slides de Paulo Pereira (Slide 19), ossos, cartilagens e músculos são corpos viscoelásticos com histerese.",
    "distractorAnalysis": [
      "Está incorreta: O ar alveolar é uma mistura gasosa compressível, não um tecido biológico viscoelástico sólido.",
      "Está incorreta: O espaço interatómico no vácuo não é um corpo material biológico.",
      "Está incorreta: O esmalte dentário é mineralizado e frágil, não sendo o exemplo típico de viscoelastina amortecedora como a cartilagem."
    ],
    "nursingApplication": "A viscoelasticidade da cartilagem amortece o impacto mecânico repetido na marcha e corrida."
  },
  {
    "id": 2137,
    "topicId": 2,
    "question": "O que é a Histerese Elástica observada em corpos viscoelásticos sob ciclos de carga e descarga?",
    "options": [
      "A criação espontânea de energia mecânica durante o repouso do corpo sem realização de trabalho.",
      "O fenómeno pelo qual a curva de descarga não coincide com a de carga, dissipando energia mecânica sob a forma de calor.",
      "A duplicação imediata da constante elástica de uma mola metálica após cada estiramento.",
      "A perda total de massa atómica do material após ser submetido a forças de tração."
    ],
    "correctIndex": 1,
    "explanation": "Na histerese elástica, a área compreendida entre a curva de deformação e a de retorno representa energia mecânica absorvida e dissipada.",
    "distractorAnalysis": [
      "Está incorreta: A histerese não cria energia mecânica; dissipa energia mecânica absorvida em energia térmica.",
      "Está incorreta: A histerese é própria de materiais viscoelásticos e não altera a constante elástica linear ideal de molas de Hooke.",
      "Está incorreta: A massa material conserva-se integralmente durante os ensaios de deformação e descarga mecânica."
    ],
    "nursingApplication": "O efeito de histerese nas articulações dissipa as ondas de choque prevenindo lesões por impacto."
  },
  {
    "id": 2138,
    "topicId": 2,
    "question": "Como se define um Corpo Plastoviscoelástico nos resumos teóricos de Biofísica (Slide 20)?",
    "options": [
      "Um sólido de Euclides perfeitamente rígido que nunca se deforma em nenhuma circunstância.",
      "Um gás nobre que não interage gravitacionalmente com os corpos vizinhos.",
      "Comporta-se como um corpo elástico sob pequenas tensões; acima desse limiar, comporta-se como corpo plástico e viscoso.",
      "Um líquido perfeito com viscosidade estritamente nula a todas as temperaturas."
    ],
    "correctIndex": 2,
    "explanation": "Sob pequenas forças tem deformação elástica reversível; ultrapassado o limiar, flui e deforma plasticamente (ex.: massa de pão).",
    "distractorAnalysis": [
      "Está incorreta: Sólidos de Euclides são indeformáveis; plastoviscoelásticos deformam-se com facilidade.",
      "Está incorreta: Gases nobres não são materiais plastoviscoelásticos da reologia de sólidos.",
      "Está incorreta: Líquidos com viscosidade nula são superfluidos ideais, o oposto de corpos com plasticidade e viscoelasticidade."
    ],
    "nursingApplication": "A massa de pão é o exemplo didático lecionado para ilustrar o comportamento plastoviscoelástico."
  },
  {
    "id": 2139,
    "topicId": 2,
    "question": "Porque é que uma esponja ou colchão viscoelástico (Memory Foam) se deforma de modo dependente do tempo de aplicação da força?",
    "options": [
      "Porque o material do colchão perde noventa por cento da sua massa a cada minuto em que é comprimido.",
      "Porque a gravidade do planeta atua exclusivamente durante os primeiros cinco segundos de compressão.",
      "Porque o colchão é constituído por um sólido de Euclides puro que rejeita a pressão corporal.",
      "Porque o ar e o material interno escoam lentamente através dos microporos, combinando elasticidade com amortecimento viscoso dependente do tempo."
    ],
    "correctIndex": 3,
    "explanation": "A resposta viscoelástica temporal resulta da redistribuição interna gradual da estrutura polimérica e do ar nos poros.",
    "distractorAnalysis": [
      "Está incorreta: A massa do colchão permanece constante e não se perde durante o uso sob compressão.",
      "Está incorreta: A força da gravidade atua de forma constante e contínua sobre a massa do indivíduo no leito.",
      "Está incorreta: O sólido de Euclides não se deformaria de todo; a espuma viscoelástica adapta-se ao contorno corporal."
    ],
    "nursingApplication": "Colchões viscoelásticos distribuem a pressão por uma área maior ao adaptarem-se lentamente ao corpo."
  },
  {
    "id": 2140,
    "topicId": 2,
    "question": "Qual dos seguintes pares de materiais representa respetivamente um Corpo Viscoso e um Corpo Plástico?",
    "options": [
      "Mel (viscoso) e plasticina (plástico).",
      "Mola de aço (viscoso) e vidro comum (plástico).",
      "Diamante (viscoso) e água destilada (plástico).",
      "Ar comprimido (viscoso) e osso cortical (plástico)."
    ],
    "correctIndex": 0,
    "explanation": "O mel é o exemplo clássico de fluido viscoso irreversível e a plasticina o exemplo clássico de sólido plástico moldável.",
    "distractorAnalysis": [
      "Está incorreta: Molas de aço são elásticas de Hooke e o vidro é um material elástico-frágil, não plástico.",
      "Está incorreta: O diamante é um sólido extremamente rígido e a água é um líquido viscoso (pouco viscoso), não plástico.",
      "Está incorreta: O ar é um gás compressível e o osso é um compósito viscoelástico biológico."
    ],
    "nursingApplication": "Exemplos fundamentais lecionados nos slides de Reologia para distinguir fluidos viscosos de sólidos plásticos."
  },
  {
    "id": 2141,
    "topicId": 2,
    "question": "Na Reologia, o que caracteriza o comportamento mecânico de um Corpo Plástico?",
    "options": [
      "Recupera instantaneamente a forma original qualquer que seja a intensidade da força aplicada.",
      "Apenas sofre deformação apreciável a partir de um determinado valor limiar de tensão, mantendo a deformação permanente após a remoção da carga.",
      "Apresenta uma deformação que depende exclusivamente do campo magnético circundante no vácuo.",
      "Comporta-se como um sólido indeformável de Euclides em todas as situações físicas possíveis."
    ],
    "correctIndex": 1,
    "explanation": "Os corpos plásticos necessitam de uma tensão mínima de escoamento para deformar e não recuperam a forma inicial (ex.: plasticina).",
    "distractorAnalysis": [
      "Está incorreta: Recuperar a forma original instantaneamente é a definição de corpo elástico de Hooke, não de plástico.",
      "Está incorreta: A plasticidade depende das tensões mecânicas aplicadas, não de campos magnéticos.",
      "Está incorreta: Corpos plásticos deformam-se permanentemente; sólidos de Euclides nunca se deformam."
    ],
    "nursingApplication": "Compreender a plasticidade ajuda a entender deformações permanentes em materiais hospitalares."
  },
  {
    "id": 2142,
    "topicId": 2,
    "question": "O que caracteriza fundamentalmente o comportamento de um Corpo Viscoso?",
    "options": [
      "Apresenta uma rigidez infinita que impede qualquer alteração dimensional com o tempo.",
      "Recupera a forma original mais rapidamente do que qualquer mola de aço metálica.",
      "A deformação é proporcional à tensão e ao tempo de aplicação dessa tensão, escoando irreversivelmente sem recuperar a forma original.",
      "A sua densidade duplica instantaneamente a cada segundo de repouso absoluto."
    ],
    "correctIndex": 2,
    "explanation": "Corpos viscosos (como mel ou óleo) fluem sob tensão com uma taxa de deformação dependente do tempo de aplicação da força.",
    "distractorAnalysis": [
      "Está incorreta: Rigidez infinita é a característica teórica do sólido indeformável de Euclides.",
      "Está incorreta: Corpos viscosos não recuperam a forma original; sofrem deformações puramente irreversíveis.",
      "Está incorreta: A densidade dos fluidos não duplica espontaneamente no repouso."
    ],
    "nursingApplication": "Fundamento para analisar a viscosidade de fluidos biológicos e soluções perfundidas."
  },
  {
    "id": 2143,
    "topicId": 2,
    "question": "Como se define um Corpo Viscoelástico no âmbito da Biofísica dos materiais?",
    "options": [
      "Um corpo que se desintegra espontaneamente quando exposto à luz visível do sol.",
      "Um material puramente indeformável que não sofre qualquer alteração mecânica.",
      "Um gás rarefeito que não oferece qualquer resistência à passagem de ondas sonoras.",
      "Um corpo que apresenta simultaneamente características elásticas e viscosas, cuja deformação depende da tensão e do tempo de aplicação da força."
    ],
    "correctIndex": 3,
    "explanation": "A viscoelasticidade combina resposta elástica (capacidade de restaurar forma) com amortecimento viscoso dependente do tempo (histerese).",
    "distractorAnalysis": [
      "Está incorreta: A desintegração por luz é fotodegradação química, não uma propriedade viscoelástica mecânica.",
      "Está incorreta: O corpo indeformável é o modelo de Euclides; materiais viscoelásticos deformam-se sob carga.",
      "Está incorreta: Gases rarefeitos não são corpos viscoelásticos com coesão molecular sólida."
    ],
    "nursingApplication": "Os tecidos biológicos (cartilagem, osso, músculos e tendões) são corpos tipicamente viscoelásticos."
  },
  {
    "id": 2144,
    "topicId": 2,
    "question": "Qual das seguintes estruturas biológicas do corpo humano exibe comportamento mecânico tipicamente VISCOELÁSTICO?",
    "options": [
      "Cartilagens articulares e tecido ósseo.",
      "O ar contido no interior dos alvéolos pulmonares.",
      "O vácuo existente no espaço interatómico das moléculas.",
      "O esmalte dentário seco considerado como sólido puramente euclidiano."
    ],
    "correctIndex": 0,
    "explanation": "Conforme os slides de Paulo Pereira (Slide 19), ossos, cartilagens e músculos são corpos viscoelásticos com histerese.",
    "distractorAnalysis": [
      "Está incorreta: O ar alveolar é uma mistura gasosa compressível, não um tecido biológico viscoelástico sólido.",
      "Está incorreta: O espaço interatómico no vácuo não é um corpo material biológico.",
      "Está incorreta: O esmalte dentário é mineralizado e frágil, não sendo o exemplo típico de viscoelastina amortecedora como a cartilagem."
    ],
    "nursingApplication": "A viscoelasticidade da cartilagem amortece o impacto mecânico repetido na marcha e corrida."
  },
  {
    "id": 2145,
    "topicId": 2,
    "question": "O que é a Histerese Elástica observada em corpos viscoelásticos sob ciclos de carga e descarga?",
    "options": [
      "A criação espontânea de energia mecânica durante o repouso do corpo sem realização de trabalho.",
      "O fenómeno pelo qual a curva de descarga não coincide com a de carga, dissipando energia mecânica sob a forma de calor.",
      "A duplicação imediata da constante elástica de uma mola metálica após cada estiramento.",
      "A perda total de massa atómica do material após ser submetido a forças de tração."
    ],
    "correctIndex": 1,
    "explanation": "Na histerese elástica, a área compreendida entre a curva de deformação e a de retorno representa energia mecânica absorvida e dissipada.",
    "distractorAnalysis": [
      "Está incorreta: A histerese não cria energia mecânica; dissipa energia mecânica absorvida em energia térmica.",
      "Está incorreta: A histerese é própria de materiais viscoelásticos e não altera a constante elástica linear ideal de molas de Hooke.",
      "Está incorreta: A massa material conserva-se integralmente durante os ensaios de deformação e descarga mecânica."
    ],
    "nursingApplication": "O efeito de histerese nas articulações dissipa as ondas de choque prevenindo lesões por impacto."
  },
  {
    "id": 2146,
    "topicId": 2,
    "question": "Como se define um Corpo Plastoviscoelástico nos resumos teóricos de Biofísica (Slide 20)?",
    "options": [
      "Um sólido de Euclides perfeitamente rígido que nunca se deforma em nenhuma circunstância.",
      "Um gás nobre que não interage gravitacionalmente com os corpos vizinhos.",
      "Comporta-se como um corpo elástico sob pequenas tensões; acima desse limiar, comporta-se como corpo plástico e viscoso.",
      "Um líquido perfeito com viscosidade estritamente nula a todas as temperaturas."
    ],
    "correctIndex": 2,
    "explanation": "Sob pequenas forças tem deformação elástica reversível; ultrapassado o limiar, flui e deforma plasticamente (ex.: massa de pão).",
    "distractorAnalysis": [
      "Está incorreta: Sólidos de Euclides são indeformáveis; plastoviscoelásticos deformam-se com facilidade.",
      "Está incorreta: Gases nobres não são materiais plastoviscoelásticos da reologia de sólidos.",
      "Está incorreta: Líquidos com viscosidade nula são superfluidos ideais, o oposto de corpos com plasticidade e viscoelasticidade."
    ],
    "nursingApplication": "A massa de pão é o exemplo didático lecionado para ilustrar o comportamento plastoviscoelástico."
  },
  {
    "id": 2147,
    "topicId": 2,
    "question": "Porque é que uma esponja ou colchão viscoelástico (Memory Foam) se deforma de modo dependente do tempo de aplicação da força?",
    "options": [
      "Porque o material do colchão perde noventa por cento da sua massa a cada minuto em que é comprimido.",
      "Porque a gravidade do planeta atua exclusivamente durante os primeiros cinco segundos de compressão.",
      "Porque o colchão é constituído por um sólido de Euclides puro que rejeita a pressão corporal.",
      "Porque o ar e o material interno escoam lentamente através dos microporos, combinando elasticidade com amortecimento viscoso dependente do tempo."
    ],
    "correctIndex": 3,
    "explanation": "A resposta viscoelástica temporal resulta da redistribuição interna gradual da estrutura polimérica e do ar nos poros.",
    "distractorAnalysis": [
      "Está incorreta: A massa do colchão permanece constante e não se perde durante o uso sob compressão.",
      "Está incorreta: A força da gravidade atua de forma constante e contínua sobre a massa do indivíduo no leito.",
      "Está incorreta: O sólido de Euclides não se deformaria de todo; a espuma viscoelástica adapta-se ao contorno corporal."
    ],
    "nursingApplication": "Colchões viscoelásticos distribuem a pressão por uma área maior ao adaptarem-se lentamente ao corpo."
  },
  {
    "id": 2148,
    "topicId": 2,
    "question": "Qual dos seguintes pares de materiais representa respetivamente um Corpo Viscoso e um Corpo Plástico?",
    "options": [
      "Mel (viscoso) e plasticina (plástico).",
      "Mola de aço (viscoso) e vidro comum (plástico).",
      "Diamante (viscoso) e água destilada (plástico).",
      "Ar comprimido (viscoso) e osso cortical (plástico)."
    ],
    "correctIndex": 0,
    "explanation": "O mel é o exemplo clássico de fluido viscoso irreversível e a plasticina o exemplo clássico de sólido plástico moldável.",
    "distractorAnalysis": [
      "Está incorreta: Molas de aço são elásticas de Hooke e o vidro é um material elástico-frágil, não plástico.",
      "Está incorreta: O diamante é um sólido extremamente rígido e a água é um líquido viscoso (pouco viscoso), não plástico.",
      "Está incorreta: O ar é um gás compressível e o osso é um compósito viscoelástico biológico."
    ],
    "nursingApplication": "Exemplos fundamentais lecionados nos slides de Reologia para distinguir fluidos viscosos de sólidos plásticos."
  },
  {
    "id": 2149,
    "topicId": 2,
    "question": "Na Reologia, o que caracteriza o comportamento mecânico de um Corpo Plástico?",
    "options": [
      "Recupera instantaneamente a forma original qualquer que seja a intensidade da força aplicada.",
      "Apenas sofre deformação apreciável a partir de um determinado valor limiar de tensão, mantendo a deformação permanente após a remoção da carga.",
      "Apresenta uma deformação que depende exclusivamente do campo magnético circundante no vácuo.",
      "Comporta-se como um sólido indeformável de Euclides em todas as situações físicas possíveis."
    ],
    "correctIndex": 1,
    "explanation": "Os corpos plásticos necessitam de uma tensão mínima de escoamento para deformar e não recuperam a forma inicial (ex.: plasticina).",
    "distractorAnalysis": [
      "Está incorreta: Recuperar a forma original instantaneamente é a definição de corpo elástico de Hooke, não de plástico.",
      "Está incorreta: A plasticidade depende das tensões mecânicas aplicadas, não de campos magnéticos.",
      "Está incorreta: Corpos plásticos deformam-se permanentemente; sólidos de Euclides nunca se deformam."
    ],
    "nursingApplication": "Compreender a plasticidade ajuda a entender deformações permanentes em materiais hospitalares."
  },
  {
    "id": 2150,
    "topicId": 2,
    "question": "O que caracteriza fundamentalmente o comportamento de um Corpo Viscoso?",
    "options": [
      "Apresenta uma rigidez infinita que impede qualquer alteração dimensional com o tempo.",
      "Recupera a forma original mais rapidamente do que qualquer mola de aço metálica.",
      "A deformação é proporcional à tensão e ao tempo de aplicação dessa tensão, escoando irreversivelmente sem recuperar a forma original.",
      "A sua densidade duplica instantaneamente a cada segundo de repouso absoluto."
    ],
    "correctIndex": 2,
    "explanation": "Corpos viscosos (como mel ou óleo) fluem sob tensão com uma taxa de deformação dependente do tempo de aplicação da força.",
    "distractorAnalysis": [
      "Está incorreta: Rigidez infinita é a característica teórica do sólido indeformável de Euclides.",
      "Está incorreta: Corpos viscosos não recuperam a forma original; sofrem deformações puramente irreversíveis.",
      "Está incorreta: A densidade dos fluidos não duplica espontaneamente no repouso."
    ],
    "nursingApplication": "Fundamento para analisar a viscosidade de fluidos biológicos e soluções perfundidas."
  },
  {
    "id": 2151,
    "topicId": 2,
    "question": "Na caracterização das deformações mecânicas (Slide 21), como são definidas as Forças de Compressão?",
    "options": [
      "Forças divergentes que aumentam o comprimento e adelgaçam a área de secção transversal da barra.",
      "Forças tangenciais paralelas que fazem deslizar duas superfícies planas opostas.",
      "Momentos de rotação puros que provocam a torção em torno do eixo longitudinal.",
      "Forças convergentes colineares que provocam diminuição do comprimento (L) e aumento da área de secção transversal (S)."
    ],
    "correctIndex": 3,
    "explanation": "A compressão atua com forças convergentes (para dentro do corpo), encurtando o comprimento e alargando a secção transversal.",
    "distractorAnalysis": [
      "Está incorreta: Forças divergentes que aumentam o comprimento e diminuem a secção caracterizam a tração, não a compressão.",
      "Está incorreta: Forças tangenciais paralelas em sentidos opostos definem o cisalhamento (corte).",
      "Está incorreta: Momentos de rotação em torno do eixo longitudinal definem a torção mecânica."
    ],
    "nursingApplication": "Os ossos dos membros inferiores e as vértebras suportam cargas predominantemente compressivas na marcha."
  },
  {
    "id": 2152,
    "topicId": 2,
    "question": "Como são definidas as Forças de Tração na mecânica dos corpos elásticos (Slide 23)?",
    "options": [
      "Forças divergentes colineares que provocam aumento do comprimento (L) e diminuição da área de secção transversal (S).",
      "Forças convergentes que diminuem o comprimento longitudinal e alargam a secção média.",
      "Forças transversais perpendiculares que curvam as arestas retilíneas da barra.",
      "Forças microscópicas puramente gravitacionais que atuam exclusivamente no vácuo espacial."
    ],
    "correctIndex": 0,
    "explanation": "A tração puxa as extremidades para fora com forças divergentes, alongando a barra e reduzindo a sua espessura transversal.",
    "distractorAnalysis": [
      "Está incorreta: Forças convergentes que encurtam a barra definem a compressão mecânica.",
      "Está incorreta: Forças transversais que curvam arestas retilíneas definem a deformação de flexão.",
      "Está incorreta: Forças no vácuo sem contacto não descrevem o esforço mecânico clássico de tração de sólidos."
    ],
    "nursingApplication": "Tendões e ligamentos são estruturas especializadas em resistir a esforços de tração longitudinal."
  },
  {
    "id": 2153,
    "topicId": 2,
    "question": "Qual das seguintes alterações geométricas ocorre num cilindro sujeito a esforço axial de COMPRESSÃO?",
    "options": [
      "O comprimento longitudinal aumenta e o diâmetro transversal diminui.",
      "O comprimento longitudinal diminui e o diâmetro transversal aumenta.",
      "O cilindro curva-se instantaneamente num semicírculo perfeito sem alterar o diâmetro.",
      "O volume do cilindro reduz-se para zero sem qualquer alteração das suas dimensões."
    ],
    "correctIndex": 1,
    "explanation": "Ao comprimir axialmente, as partículas aproximam-se na direção da força, encurtando a barra e expandindo-a lateralmente.",
    "distractorAnalysis": [
      "Está incorreta: Aumento de comprimento com diminuição de diâmetro é o efeito característico da tração mecânica.",
      "Está incorreta: Curvar-se em semicírculo sob força transversal caracteriza flexão, não compressão axial pura.",
      "Está incorreta: O volume de um sólido real não se reduz a zero sob compressão elástica ou plástica."
    ],
    "nursingApplication": "Explica o achatamento elástico microscópico dos discos intervertebrais sob o peso do corpo durante o dia."
  },
  {
    "id": 2154,
    "topicId": 2,
    "question": "Qual das seguintes alterações geométricas ocorre numa barra elástica sujeita a esforço de TRAÇÃO?",
    "options": [
      "O comprimento longitudinal diminui e a área da secção transversal aumenta.",
      "A barra roda continuamente sobre o seu eixo central mantendo o comprimento constante.",
      "O comprimento longitudinal aumenta e a área da secção transversal diminui.",
      "A barra transforma-se num sólido indeformável de Euclides em equilíbrio térmico."
    ],
    "correctIndex": 2,
    "explanation": "Sob tração axial, as extremidades afastam-se (alongamento ΔL > 0) e a secção transversal adelgaça-se lateralmente.",
    "distractorAnalysis": [
      "Está incorreta: Encurtamento com aumento de secção é o efeito característico da compressão mecânica.",
      "Está incorreta: Rotação sobre o próprio eixo é a deformação de torção provocada por um binário de momentos.",
      "Está incorreta: A tração não transforma materiais reais em modelos teóricos indeformáveis de Euclides."
    ],
    "nursingApplication": "Comportamento de fios de sutura e ligamentos quando submetidos a forças de estiramento."
  },
  {
    "id": 2155,
    "topicId": 2,
    "question": "No corpo humano, o fémur suporta o peso do tronco e dos membros superiores. Este esforço mecânico predominante é de:",
    "options": [
      "Torção pura no vácuo.",
      "Cisalhamento centrípeto nulo.",
      "Radiação ionizante gama.",
      "Compressão."
    ],
    "correctIndex": 3,
    "explanation": "O peso corporal atua verticalmente de cima para baixo comprimindo o fémur contra a tíbia e o solo (forças convergentes).",
    "distractorAnalysis": [
      "Está incorreta: O suporte de carga vertical é um esforço compressivo, não uma torção pura no vácuo.",
      "Está incorreta: Cisalhamento centrípeto nulo é uma combinação fictícia de termos físicos.",
      "Está incorreta: Radiação gama é uma emissão eletromagnética nuclear, não um esforço mecânico de carga."
    ],
    "nursingApplication": "O osso cortical tem enorme resistência à compressão, sendo ideal para sustentar o peso corporal."
  },
  {
    "id": 2156,
    "topicId": 2,
    "question": "Quando um músculo se contrai e puxa um tendão ligado a um osso, o tendão fica sujeito predominantemente a uma força de:",
    "options": [
      "Tração (tensão longitudinal).",
      "Compressão convergente axial.",
      "Flexão com eixo neutro central.",
      "Desintegração atómica espontânea."
    ],
    "correctIndex": 0,
    "explanation": "O músculo exerce forças divergentes sobre as extremidades do tendão, tracionando-o ao longo do seu eixo fibroso longitudinal.",
    "distractorAnalysis": [
      "Está incorreta: Os tendões são estruturas flexíveis que suportam grandes forças de tração, mas dobram-se sob compressão.",
      "Está incorreta: A flexão ocorre em barras suportadas sob forças perpendiculares, não em tendões alinhados com a tração muscular.",
      "Está incorreta: Contração muscular mecânica não envolve desintegração atómica dos tecidos conjuntivos."
    ],
    "nursingApplication": "A elevada resistência à tração do colagénio permite transmitir a força muscular às alavancas ósseas."
  },
  {
    "id": 2157,
    "topicId": 2,
    "question": "Como se comparam os sentidos das forças aplicadas na Compressão e na Tração ao longo de um mesmo eixo linear?",
    "options": [
      "Na compressão as forças apontam ambas para a direita; na tração apontam ambas para cima.",
      "Na compressão as forças são convergentes (apontam para o interior do corpo); na tração são divergentes (apontam para fora).",
      "Em ambas as deformações as forças são sempre convergentes com a mesma intensidade.",
      "Na compressão as forças são perpendiculares à barra e na tração são paralelas ao solo."
    ],
    "correctIndex": 1,
    "explanation": "Conforme os slides 21 e 23, forças convergentes encurtam (compressão) e forças divergentes alongam (tração).",
    "distractorAnalysis": [
      "Está incorreta: Duas forças apontando no mesmo sentido aceleram o corpo em translação em vez de o deformar em tração ou compressão.",
      "Está incorreta: A tração requer forças divergentes opostas; se fossem convergentes seria compressão.",
      "Está incorreta: Forças perpendiculares produzem flexão ou cisalhamento, não esforços axiais de tração ou compressão."
    ],
    "nursingApplication": "Distingue com clareza os dois esforços axiais mais comuns na mecânica das estruturas e tecidos."
  },
  {
    "id": 2158,
    "topicId": 2,
    "question": "Se uma barra de comprimento inicial L0 sofrer uma variação de comprimento ΔL negativa (ΔL < 0), isso significa que a barra sofreu:",
    "options": [
      "Alongamento devido a uma força de tração.",
      "Uma rotação de 360 graus por ação de torção pura.",
      "Encurtamento devido a uma força de compressão.",
      "Um aumento de noventa por cento na sua massa inercial."
    ],
    "correctIndex": 2,
    "explanation": "ΔL = L - L0. Se ΔL é negativo, o comprimento final é menor que o inicial (L < L0), caracterizando compressão.",
    "distractorAnalysis": [
      "Está incorreta: Se sofresse tração, o comprimento final seria maior que o inicial, resultando em ΔL positivo (ΔL > 0).",
      "Está incorreta: A torção pura provoca rotação angular das secções sem alterar necessariamente o comprimento no regime linear.",
      "Está incorreta: A massa da barra permanece rigorosamente constante independentemente de ser comprimida ou esticada."
    ],
    "nursingApplication": "Convenção de sinais da mecânica: compressão corresponde a variações de comprimento negativas."
  },
  {
    "id": 2159,
    "topicId": 2,
    "question": "Na caracterização das deformações mecânicas (Slide 21), como são definidas as Forças de Compressão?",
    "options": [
      "Forças divergentes que aumentam o comprimento e adelgaçam a área de secção transversal da barra.",
      "Forças tangenciais paralelas que fazem deslizar duas superfícies planas opostas.",
      "Momentos de rotação puros que provocam a torção em torno do eixo longitudinal.",
      "Forças convergentes colineares que provocam diminuição do comprimento (L) e aumento da área de secção transversal (S)."
    ],
    "correctIndex": 3,
    "explanation": "A compressão atua com forças convergentes (para dentro do corpo), encurtando o comprimento e alargando a secção transversal.",
    "distractorAnalysis": [
      "Está incorreta: Forças divergentes que aumentam o comprimento e diminuem a secção caracterizam a tração, não a compressão.",
      "Está incorreta: Forças tangenciais paralelas em sentidos opostos definem o cisalhamento (corte).",
      "Está incorreta: Momentos de rotação em torno do eixo longitudinal definem a torção mecânica."
    ],
    "nursingApplication": "Os ossos dos membros inferiores e as vértebras suportam cargas predominantemente compressivas na marcha."
  },
  {
    "id": 2160,
    "topicId": 2,
    "question": "Como são definidas as Forças de Tração na mecânica dos corpos elásticos (Slide 23)?",
    "options": [
      "Forças divergentes colineares que provocam aumento do comprimento (L) e diminuição da área de secção transversal (S).",
      "Forças convergentes que diminuem o comprimento longitudinal e alargam a secção média.",
      "Forças transversais perpendiculares que curvam as arestas retilíneas da barra.",
      "Forças microscópicas puramente gravitacionais que atuam exclusivamente no vácuo espacial."
    ],
    "correctIndex": 0,
    "explanation": "A tração puxa as extremidades para fora com forças divergentes, alongando a barra e reduzindo a sua espessura transversal.",
    "distractorAnalysis": [
      "Está incorreta: Forças convergentes que encurtam a barra definem a compressão mecânica.",
      "Está incorreta: Forças transversais que curvam arestas retilíneas definem a deformação de flexão.",
      "Está incorreta: Forças no vácuo sem contacto não descrevem o esforço mecânico clássico de tração de sólidos."
    ],
    "nursingApplication": "Tendões e ligamentos são estruturas especializadas em resistir a esforços de tração longitudinal."
  },
  {
    "id": 2161,
    "topicId": 2,
    "question": "Qual das seguintes alterações geométricas ocorre num cilindro sujeito a esforço axial de COMPRESSÃO?",
    "options": [
      "O comprimento longitudinal aumenta e o diâmetro transversal diminui.",
      "O comprimento longitudinal diminui e o diâmetro transversal aumenta.",
      "O cilindro curva-se instantaneamente num semicírculo perfeito sem alterar o diâmetro.",
      "O volume do cilindro reduz-se para zero sem qualquer alteração das suas dimensões."
    ],
    "correctIndex": 1,
    "explanation": "Ao comprimir axialmente, as partículas aproximam-se na direção da força, encurtando a barra e expandindo-a lateralmente.",
    "distractorAnalysis": [
      "Está incorreta: Aumento de comprimento com diminuição de diâmetro é o efeito característico da tração mecânica.",
      "Está incorreta: Curvar-se em semicírculo sob força transversal caracteriza flexão, não compressão axial pura.",
      "Está incorreta: O volume de um sólido real não se reduz a zero sob compressão elástica ou plástica."
    ],
    "nursingApplication": "Explica o achatamento elástico microscópico dos discos intervertebrais sob o peso do corpo durante o dia."
  },
  {
    "id": 2162,
    "topicId": 2,
    "question": "Qual das seguintes alterações geométricas ocorre numa barra elástica sujeita a esforço de TRAÇÃO?",
    "options": [
      "O comprimento longitudinal diminui e a área da secção transversal aumenta.",
      "A barra roda continuamente sobre o seu eixo central mantendo o comprimento constante.",
      "O comprimento longitudinal aumenta e a área da secção transversal diminui.",
      "A barra transforma-se num sólido indeformável de Euclides em equilíbrio térmico."
    ],
    "correctIndex": 2,
    "explanation": "Sob tração axial, as extremidades afastam-se (alongamento ΔL > 0) e a secção transversal adelgaça-se lateralmente.",
    "distractorAnalysis": [
      "Está incorreta: Encurtamento com aumento de secção é o efeito característico da compressão mecânica.",
      "Está incorreta: Rotação sobre o próprio eixo é a deformação de torção provocada por um binário de momentos.",
      "Está incorreta: A tração não transforma materiais reais em modelos teóricos indeformáveis de Euclides."
    ],
    "nursingApplication": "Comportamento de fios de sutura e ligamentos quando submetidos a forças de estiramento."
  },
  {
    "id": 2163,
    "topicId": 2,
    "question": "No corpo humano, o fémur suporta o peso do tronco e dos membros superiores. Este esforço mecânico predominante é de:",
    "options": [
      "Torção pura no vácuo.",
      "Cisalhamento centrípeto nulo.",
      "Radiação ionizante gama.",
      "Compressão."
    ],
    "correctIndex": 3,
    "explanation": "O peso corporal atua verticalmente de cima para baixo comprimindo o fémur contra a tíbia e o solo (forças convergentes).",
    "distractorAnalysis": [
      "Está incorreta: O suporte de carga vertical é um esforço compressivo, não uma torção pura no vácuo.",
      "Está incorreta: Cisalhamento centrípeto nulo é uma combinação fictícia de termos físicos.",
      "Está incorreta: Radiação gama é uma emissão eletromagnética nuclear, não um esforço mecânico de carga."
    ],
    "nursingApplication": "O osso cortical tem enorme resistência à compressão, sendo ideal para sustentar o peso corporal."
  },
  {
    "id": 2164,
    "topicId": 2,
    "question": "Quando um músculo se contrai e puxa um tendão ligado a um osso, o tendão fica sujeito predominantemente a uma força de:",
    "options": [
      "Tração (tensão longitudinal).",
      "Compressão convergente axial.",
      "Flexão com eixo neutro central.",
      "Desintegração atómica espontânea."
    ],
    "correctIndex": 0,
    "explanation": "O músculo exerce forças divergentes sobre as extremidades do tendão, tracionando-o ao longo do seu eixo fibroso longitudinal.",
    "distractorAnalysis": [
      "Está incorreta: Os tendões são estruturas flexíveis que suportam grandes forças de tração, mas dobram-se sob compressão.",
      "Está incorreta: A flexão ocorre em barras suportadas sob forças perpendiculares, não em tendões alinhados com a tração muscular.",
      "Está incorreta: Contração muscular mecânica não envolve desintegração atómica dos tecidos conjuntivos."
    ],
    "nursingApplication": "A elevada resistência à tração do colagénio permite transmitir a força muscular às alavancas ósseas."
  },
  {
    "id": 2165,
    "topicId": 2,
    "question": "Como se comparam os sentidos das forças aplicadas na Compressão e na Tração ao longo de um mesmo eixo linear?",
    "options": [
      "Na compressão as forças apontam ambas para a direita; na tração apontam ambas para cima.",
      "Na compressão as forças são convergentes (apontam para o interior do corpo); na tração são divergentes (apontam para fora).",
      "Em ambas as deformações as forças são sempre convergentes com a mesma intensidade.",
      "Na compressão as forças são perpendiculares à barra e na tração são paralelas ao solo."
    ],
    "correctIndex": 1,
    "explanation": "Conforme os slides 21 e 23, forças convergentes encurtam (compressão) e forças divergentes alongam (tração).",
    "distractorAnalysis": [
      "Está incorreta: Duas forças apontando no mesmo sentido aceleram o corpo em translação em vez de o deformar em tração ou compressão.",
      "Está incorreta: A tração requer forças divergentes opostas; se fossem convergentes seria compressão.",
      "Está incorreta: Forças perpendiculares produzem flexão ou cisalhamento, não esforços axiais de tração ou compressão."
    ],
    "nursingApplication": "Distingue com clareza os dois esforços axiais mais comuns na mecânica das estruturas e tecidos."
  },
  {
    "id": 2166,
    "topicId": 2,
    "question": "Se uma barra de comprimento inicial L0 sofrer uma variação de comprimento ΔL negativa (ΔL < 0), isso significa que a barra sofreu:",
    "options": [
      "Alongamento devido a uma força de tração.",
      "Uma rotação de 360 graus por ação de torção pura.",
      "Encurtamento devido a uma força de compressão.",
      "Um aumento de noventa por cento na sua massa inercial."
    ],
    "correctIndex": 2,
    "explanation": "ΔL = L - L0. Se ΔL é negativo, o comprimento final é menor que o inicial (L < L0), caracterizando compressão.",
    "distractorAnalysis": [
      "Está incorreta: Se sofresse tração, o comprimento final seria maior que o inicial, resultando em ΔL positivo (ΔL > 0).",
      "Está incorreta: A torção pura provoca rotação angular das secções sem alterar necessariamente o comprimento no regime linear.",
      "Está incorreta: A massa da barra permanece rigorosamente constante independentemente de ser comprimida ou esticada."
    ],
    "nursingApplication": "Convenção de sinais da mecânica: compressão corresponde a variações de comprimento negativas."
  },
  {
    "id": 2167,
    "topicId": 2,
    "question": "Na caracterização das deformações mecânicas (Slide 21), como são definidas as Forças de Compressão?",
    "options": [
      "Forças divergentes que aumentam o comprimento e adelgaçam a área de secção transversal da barra.",
      "Forças tangenciais paralelas que fazem deslizar duas superfícies planas opostas.",
      "Momentos de rotação puros que provocam a torção em torno do eixo longitudinal.",
      "Forças convergentes colineares que provocam diminuição do comprimento (L) e aumento da área de secção transversal (S)."
    ],
    "correctIndex": 3,
    "explanation": "A compressão atua com forças convergentes (para dentro do corpo), encurtando o comprimento e alargando a secção transversal.",
    "distractorAnalysis": [
      "Está incorreta: Forças divergentes que aumentam o comprimento e diminuem a secção caracterizam a tração, não a compressão.",
      "Está incorreta: Forças tangenciais paralelas em sentidos opostos definem o cisalhamento (corte).",
      "Está incorreta: Momentos de rotação em torno do eixo longitudinal definem a torção mecânica."
    ],
    "nursingApplication": "Os ossos dos membros inferiores e as vértebras suportam cargas predominantemente compressivas na marcha."
  },
  {
    "id": 2168,
    "topicId": 2,
    "question": "Como são definidas as Forças de Tração na mecânica dos corpos elásticos (Slide 23)?",
    "options": [
      "Forças divergentes colineares que provocam aumento do comprimento (L) e diminuição da área de secção transversal (S).",
      "Forças convergentes que diminuem o comprimento longitudinal e alargam a secção média.",
      "Forças transversais perpendiculares que curvam as arestas retilíneas da barra.",
      "Forças microscópicas puramente gravitacionais que atuam exclusivamente no vácuo espacial."
    ],
    "correctIndex": 0,
    "explanation": "A tração puxa as extremidades para fora com forças divergentes, alongando a barra e reduzindo a sua espessura transversal.",
    "distractorAnalysis": [
      "Está incorreta: Forças convergentes que encurtam a barra definem a compressão mecânica.",
      "Está incorreta: Forças transversais que curvam arestas retilíneas definem a deformação de flexão.",
      "Está incorreta: Forças no vácuo sem contacto não descrevem o esforço mecânico clássico de tração de sólidos."
    ],
    "nursingApplication": "Tendões e ligamentos são estruturas especializadas em resistir a esforços de tração longitudinal."
  },
  {
    "id": 2169,
    "topicId": 2,
    "question": "Qual das seguintes alterações geométricas ocorre num cilindro sujeito a esforço axial de COMPRESSÃO?",
    "options": [
      "O comprimento longitudinal aumenta e o diâmetro transversal diminui.",
      "O comprimento longitudinal diminui e o diâmetro transversal aumenta.",
      "O cilindro curva-se instantaneamente num semicírculo perfeito sem alterar o diâmetro.",
      "O volume do cilindro reduz-se para zero sem qualquer alteração das suas dimensões."
    ],
    "correctIndex": 1,
    "explanation": "Ao comprimir axialmente, as partículas aproximam-se na direção da força, encurtando a barra e expandindo-a lateralmente.",
    "distractorAnalysis": [
      "Está incorreta: Aumento de comprimento com diminuição de diâmetro é o efeito característico da tração mecânica.",
      "Está incorreta: Curvar-se em semicírculo sob força transversal caracteriza flexão, não compressão axial pura.",
      "Está incorreta: O volume de um sólido real não se reduz a zero sob compressão elástica ou plástica."
    ],
    "nursingApplication": "Explica o achatamento elástico microscópico dos discos intervertebrais sob o peso do corpo durante o dia."
  },
  {
    "id": 2170,
    "topicId": 2,
    "question": "Qual das seguintes alterações geométricas ocorre numa barra elástica sujeita a esforço de TRAÇÃO?",
    "options": [
      "O comprimento longitudinal diminui e a área da secção transversal aumenta.",
      "A barra roda continuamente sobre o seu eixo central mantendo o comprimento constante.",
      "O comprimento longitudinal aumenta e a área da secção transversal diminui.",
      "A barra transforma-se num sólido indeformável de Euclides em equilíbrio térmico."
    ],
    "correctIndex": 2,
    "explanation": "Sob tração axial, as extremidades afastam-se (alongamento ΔL > 0) e a secção transversal adelgaça-se lateralmente.",
    "distractorAnalysis": [
      "Está incorreta: Encurtamento com aumento de secção é o efeito característico da compressão mecânica.",
      "Está incorreta: Rotação sobre o próprio eixo é a deformação de torção provocada por um binário de momentos.",
      "Está incorreta: A tração não transforma materiais reais em modelos teóricos indeformáveis de Euclides."
    ],
    "nursingApplication": "Comportamento de fios de sutura e ligamentos quando submetidos a forças de estiramento."
  },
  {
    "id": 2171,
    "topicId": 2,
    "question": "No corpo humano, o fémur suporta o peso do tronco e dos membros superiores. Este esforço mecânico predominante é de:",
    "options": [
      "Torção pura no vácuo.",
      "Cisalhamento centrípeto nulo.",
      "Radiação ionizante gama.",
      "Compressão."
    ],
    "correctIndex": 3,
    "explanation": "O peso corporal atua verticalmente de cima para baixo comprimindo o fémur contra a tíbia e o solo (forças convergentes).",
    "distractorAnalysis": [
      "Está incorreta: O suporte de carga vertical é um esforço compressivo, não uma torção pura no vácuo.",
      "Está incorreta: Cisalhamento centrípeto nulo é uma combinação fictícia de termos físicos.",
      "Está incorreta: Radiação gama é uma emissão eletromagnética nuclear, não um esforço mecânico de carga."
    ],
    "nursingApplication": "O osso cortical tem enorme resistência à compressão, sendo ideal para sustentar o peso corporal."
  },
  {
    "id": 2172,
    "topicId": 2,
    "question": "Quando um músculo se contrai e puxa um tendão ligado a um osso, o tendão fica sujeito predominantemente a uma força de:",
    "options": [
      "Tração (tensão longitudinal).",
      "Compressão convergente axial.",
      "Flexão com eixo neutro central.",
      "Desintegração atómica espontânea."
    ],
    "correctIndex": 0,
    "explanation": "O músculo exerce forças divergentes sobre as extremidades do tendão, tracionando-o ao longo do seu eixo fibroso longitudinal.",
    "distractorAnalysis": [
      "Está incorreta: Os tendões são estruturas flexíveis que suportam grandes forças de tração, mas dobram-se sob compressão.",
      "Está incorreta: A flexão ocorre em barras suportadas sob forças perpendiculares, não em tendões alinhados com a tração muscular.",
      "Está incorreta: Contração muscular mecânica não envolve desintegração atómica dos tecidos conjuntivos."
    ],
    "nursingApplication": "A elevada resistência à tração do colagénio permite transmitir a força muscular às alavancas ósseas."
  },
  {
    "id": 2173,
    "topicId": 2,
    "question": "Como se comparam os sentidos das forças aplicadas na Compressão e na Tração ao longo de um mesmo eixo linear?",
    "options": [
      "Na compressão as forças apontam ambas para a direita; na tração apontam ambas para cima.",
      "Na compressão as forças são convergentes (apontam para o interior do corpo); na tração são divergentes (apontam para fora).",
      "Em ambas as deformações as forças são sempre convergentes com a mesma intensidade.",
      "Na compressão as forças são perpendiculares à barra e na tração são paralelas ao solo."
    ],
    "correctIndex": 1,
    "explanation": "Conforme os slides 21 e 23, forças convergentes encurtam (compressão) e forças divergentes alongam (tração).",
    "distractorAnalysis": [
      "Está incorreta: Duas forças apontando no mesmo sentido aceleram o corpo em translação em vez de o deformar em tração ou compressão.",
      "Está incorreta: A tração requer forças divergentes opostas; se fossem convergentes seria compressão.",
      "Está incorreta: Forças perpendiculares produzem flexão ou cisalhamento, não esforços axiais de tração ou compressão."
    ],
    "nursingApplication": "Distingue com clareza os dois esforços axiais mais comuns na mecânica das estruturas e tecidos."
  },
  {
    "id": 2174,
    "topicId": 2,
    "question": "Se uma barra de comprimento inicial L0 sofrer uma variação de comprimento ΔL negativa (ΔL < 0), isso significa que a barra sofreu:",
    "options": [
      "Alongamento devido a uma força de tração.",
      "Uma rotação de 360 graus por ação de torção pura.",
      "Encurtamento devido a uma força de compressão.",
      "Um aumento de noventa por cento na sua massa inercial."
    ],
    "correctIndex": 2,
    "explanation": "ΔL = L - L0. Se ΔL é negativo, o comprimento final é menor que o inicial (L < L0), caracterizando compressão.",
    "distractorAnalysis": [
      "Está incorreta: Se sofresse tração, o comprimento final seria maior que o inicial, resultando em ΔL positivo (ΔL > 0).",
      "Está incorreta: A torção pura provoca rotação angular das secções sem alterar necessariamente o comprimento no regime linear.",
      "Está incorreta: A massa da barra permanece rigorosamente constante independentemente de ser comprimida ou esticada."
    ],
    "nursingApplication": "Convenção de sinais da mecânica: compressão corresponde a variações de comprimento negativas."
  },
  {
    "id": 2175,
    "topicId": 2,
    "question": "Na caracterização das deformações mecânicas (Slide 21), como são definidas as Forças de Compressão?",
    "options": [
      "Forças divergentes que aumentam o comprimento e adelgaçam a área de secção transversal da barra.",
      "Forças tangenciais paralelas que fazem deslizar duas superfícies planas opostas.",
      "Momentos de rotação puros que provocam a torção em torno do eixo longitudinal.",
      "Forças convergentes colineares que provocam diminuição do comprimento (L) e aumento da área de secção transversal (S)."
    ],
    "correctIndex": 3,
    "explanation": "A compressão atua com forças convergentes (para dentro do corpo), encurtando o comprimento e alargando a secção transversal.",
    "distractorAnalysis": [
      "Está incorreta: Forças divergentes que aumentam o comprimento e diminuem a secção caracterizam a tração, não a compressão.",
      "Está incorreta: Forças tangenciais paralelas em sentidos opostos definem o cisalhamento (corte).",
      "Está incorreta: Momentos de rotação em torno do eixo longitudinal definem a torção mecânica."
    ],
    "nursingApplication": "Os ossos dos membros inferiores e as vértebras suportam cargas predominantemente compressivas na marcha."
  },
  {
    "id": 2176,
    "topicId": 2,
    "question": "Como são definidas as Forças de Tração na mecânica dos corpos elásticos (Slide 23)?",
    "options": [
      "Forças divergentes colineares que provocam aumento do comprimento (L) e diminuição da área de secção transversal (S).",
      "Forças convergentes que diminuem o comprimento longitudinal e alargam a secção média.",
      "Forças transversais perpendiculares que curvam as arestas retilíneas da barra.",
      "Forças microscópicas puramente gravitacionais que atuam exclusivamente no vácuo espacial."
    ],
    "correctIndex": 0,
    "explanation": "A tração puxa as extremidades para fora com forças divergentes, alongando a barra e reduzindo a sua espessura transversal.",
    "distractorAnalysis": [
      "Está incorreta: Forças convergentes que encurtam a barra definem a compressão mecânica.",
      "Está incorreta: Forças transversais que curvam arestas retilíneas definem a deformação de flexão.",
      "Está incorreta: Forças no vácuo sem contacto não descrevem o esforço mecânico clássico de tração de sólidos."
    ],
    "nursingApplication": "Tendões e ligamentos são estruturas especializadas em resistir a esforços de tração longitudinal."
  },
  {
    "id": 2177,
    "topicId": 2,
    "question": "Qual das seguintes alterações geométricas ocorre num cilindro sujeito a esforço axial de COMPRESSÃO?",
    "options": [
      "O comprimento longitudinal aumenta e o diâmetro transversal diminui.",
      "O comprimento longitudinal diminui e o diâmetro transversal aumenta.",
      "O cilindro curva-se instantaneamente num semicírculo perfeito sem alterar o diâmetro.",
      "O volume do cilindro reduz-se para zero sem qualquer alteração das suas dimensões."
    ],
    "correctIndex": 1,
    "explanation": "Ao comprimir axialmente, as partículas aproximam-se na direção da força, encurtando a barra e expandindo-a lateralmente.",
    "distractorAnalysis": [
      "Está incorreta: Aumento de comprimento com diminuição de diâmetro é o efeito característico da tração mecânica.",
      "Está incorreta: Curvar-se em semicírculo sob força transversal caracteriza flexão, não compressão axial pura.",
      "Está incorreta: O volume de um sólido real não se reduz a zero sob compressão elástica ou plástica."
    ],
    "nursingApplication": "Explica o achatamento elástico microscópico dos discos intervertebrais sob o peso do corpo durante o dia."
  },
  {
    "id": 2178,
    "topicId": 2,
    "question": "Qual das seguintes alterações geométricas ocorre numa barra elástica sujeita a esforço de TRAÇÃO?",
    "options": [
      "O comprimento longitudinal diminui e a área da secção transversal aumenta.",
      "A barra roda continuamente sobre o seu eixo central mantendo o comprimento constante.",
      "O comprimento longitudinal aumenta e a área da secção transversal diminui.",
      "A barra transforma-se num sólido indeformável de Euclides em equilíbrio térmico."
    ],
    "correctIndex": 2,
    "explanation": "Sob tração axial, as extremidades afastam-se (alongamento ΔL > 0) e a secção transversal adelgaça-se lateralmente.",
    "distractorAnalysis": [
      "Está incorreta: Encurtamento com aumento de secção é o efeito característico da compressão mecânica.",
      "Está incorreta: Rotação sobre o próprio eixo é a deformação de torção provocada por um binário de momentos.",
      "Está incorreta: A tração não transforma materiais reais em modelos teóricos indeformáveis de Euclides."
    ],
    "nursingApplication": "Comportamento de fios de sutura e ligamentos quando submetidos a forças de estiramento."
  },
  {
    "id": 2179,
    "topicId": 2,
    "question": "No corpo humano, o fémur suporta o peso do tronco e dos membros superiores. Este esforço mecânico predominante é de:",
    "options": [
      "Torção pura no vácuo.",
      "Cisalhamento centrípeto nulo.",
      "Radiação ionizante gama.",
      "Compressão."
    ],
    "correctIndex": 3,
    "explanation": "O peso corporal atua verticalmente de cima para baixo comprimindo o fémur contra a tíbia e o solo (forças convergentes).",
    "distractorAnalysis": [
      "Está incorreta: O suporte de carga vertical é um esforço compressivo, não uma torção pura no vácuo.",
      "Está incorreta: Cisalhamento centrípeto nulo é uma combinação fictícia de termos físicos.",
      "Está incorreta: Radiação gama é uma emissão eletromagnética nuclear, não um esforço mecânico de carga."
    ],
    "nursingApplication": "O osso cortical tem enorme resistência à compressão, sendo ideal para sustentar o peso corporal."
  },
  {
    "id": 2180,
    "topicId": 2,
    "question": "Quando um músculo se contrai e puxa um tendão ligado a um osso, o tendão fica sujeito predominantemente a uma força de:",
    "options": [
      "Tração (tensão longitudinal).",
      "Compressão convergente axial.",
      "Flexão com eixo neutro central.",
      "Desintegração atómica espontânea."
    ],
    "correctIndex": 0,
    "explanation": "O músculo exerce forças divergentes sobre as extremidades do tendão, tracionando-o ao longo do seu eixo fibroso longitudinal.",
    "distractorAnalysis": [
      "Está incorreta: Os tendões são estruturas flexíveis que suportam grandes forças de tração, mas dobram-se sob compressão.",
      "Está incorreta: A flexão ocorre em barras suportadas sob forças perpendiculares, não em tendões alinhados com a tração muscular.",
      "Está incorreta: Contração muscular mecânica não envolve desintegração atómica dos tecidos conjuntivos."
    ],
    "nursingApplication": "A elevada resistência à tração do colagénio permite transmitir a força muscular às alavancas ósseas."
  },
  {
    "id": 2181,
    "topicId": 2,
    "question": "Como se comparam os sentidos das forças aplicadas na Compressão e na Tração ao longo de um mesmo eixo linear?",
    "options": [
      "Na compressão as forças apontam ambas para a direita; na tração apontam ambas para cima.",
      "Na compressão as forças são convergentes (apontam para o interior do corpo); na tração são divergentes (apontam para fora).",
      "Em ambas as deformações as forças são sempre convergentes com a mesma intensidade.",
      "Na compressão as forças são perpendiculares à barra e na tração são paralelas ao solo."
    ],
    "correctIndex": 1,
    "explanation": "Conforme os slides 21 e 23, forças convergentes encurtam (compressão) e forças divergentes alongam (tração).",
    "distractorAnalysis": [
      "Está incorreta: Duas forças apontando no mesmo sentido aceleram o corpo em translação em vez de o deformar em tração ou compressão.",
      "Está incorreta: A tração requer forças divergentes opostas; se fossem convergentes seria compressão.",
      "Está incorreta: Forças perpendiculares produzem flexão ou cisalhamento, não esforços axiais de tração ou compressão."
    ],
    "nursingApplication": "Distingue com clareza os dois esforços axiais mais comuns na mecânica das estruturas e tecidos."
  },
  {
    "id": 2182,
    "topicId": 2,
    "question": "Se uma barra de comprimento inicial L0 sofrer uma variação de comprimento ΔL negativa (ΔL < 0), isso significa que a barra sofreu:",
    "options": [
      "Alongamento devido a uma força de tração.",
      "Uma rotação de 360 graus por ação de torção pura.",
      "Encurtamento devido a uma força de compressão.",
      "Um aumento de noventa por cento na sua massa inercial."
    ],
    "correctIndex": 2,
    "explanation": "ΔL = L - L0. Se ΔL é negativo, o comprimento final é menor que o inicial (L < L0), caracterizando compressão.",
    "distractorAnalysis": [
      "Está incorreta: Se sofresse tração, o comprimento final seria maior que o inicial, resultando em ΔL positivo (ΔL > 0).",
      "Está incorreta: A torção pura provoca rotação angular das secções sem alterar necessariamente o comprimento no regime linear.",
      "Está incorreta: A massa da barra permanece rigorosamente constante independentemente de ser comprimida ou esticada."
    ],
    "nursingApplication": "Convenção de sinais da mecânica: compressão corresponde a variações de comprimento negativas."
  },
  {
    "id": 2183,
    "topicId": 2,
    "question": "Na caracterização das deformações mecânicas (Slide 21), como são definidas as Forças de Compressão?",
    "options": [
      "Forças divergentes que aumentam o comprimento e adelgaçam a área de secção transversal da barra.",
      "Forças tangenciais paralelas que fazem deslizar duas superfícies planas opostas.",
      "Momentos de rotação puros que provocam a torção em torno do eixo longitudinal.",
      "Forças convergentes colineares que provocam diminuição do comprimento (L) e aumento da área de secção transversal (S)."
    ],
    "correctIndex": 3,
    "explanation": "A compressão atua com forças convergentes (para dentro do corpo), encurtando o comprimento e alargando a secção transversal.",
    "distractorAnalysis": [
      "Está incorreta: Forças divergentes que aumentam o comprimento e diminuem a secção caracterizam a tração, não a compressão.",
      "Está incorreta: Forças tangenciais paralelas em sentidos opostos definem o cisalhamento (corte).",
      "Está incorreta: Momentos de rotação em torno do eixo longitudinal definem a torção mecânica."
    ],
    "nursingApplication": "Os ossos dos membros inferiores e as vértebras suportam cargas predominantemente compressivas na marcha."
  },
  {
    "id": 2184,
    "topicId": 2,
    "question": "Como são definidas as Forças de Tração na mecânica dos corpos elásticos (Slide 23)?",
    "options": [
      "Forças divergentes colineares que provocam aumento do comprimento (L) e diminuição da área de secção transversal (S).",
      "Forças convergentes que diminuem o comprimento longitudinal e alargam a secção média.",
      "Forças transversais perpendiculares que curvam as arestas retilíneas da barra.",
      "Forças microscópicas puramente gravitacionais que atuam exclusivamente no vácuo espacial."
    ],
    "correctIndex": 0,
    "explanation": "A tração puxa as extremidades para fora com forças divergentes, alongando a barra e reduzindo a sua espessura transversal.",
    "distractorAnalysis": [
      "Está incorreta: Forças convergentes que encurtam a barra definem a compressão mecânica.",
      "Está incorreta: Forças transversais que curvam arestas retilíneas definem a deformação de flexão.",
      "Está incorreta: Forças no vácuo sem contacto não descrevem o esforço mecânico clássico de tração de sólidos."
    ],
    "nursingApplication": "Tendões e ligamentos são estruturas especializadas em resistir a esforços de tração longitudinal."
  },
  {
    "id": 2185,
    "topicId": 2,
    "question": "Qual das seguintes alterações geométricas ocorre num cilindro sujeito a esforço axial de COMPRESSÃO?",
    "options": [
      "O comprimento longitudinal aumenta e o diâmetro transversal diminui.",
      "O comprimento longitudinal diminui e o diâmetro transversal aumenta.",
      "O cilindro curva-se instantaneamente num semicírculo perfeito sem alterar o diâmetro.",
      "O volume do cilindro reduz-se para zero sem qualquer alteração das suas dimensões."
    ],
    "correctIndex": 1,
    "explanation": "Ao comprimir axialmente, as partículas aproximam-se na direção da força, encurtando a barra e expandindo-a lateralmente.",
    "distractorAnalysis": [
      "Está incorreta: Aumento de comprimento com diminuição de diâmetro é o efeito característico da tração mecânica.",
      "Está incorreta: Curvar-se em semicírculo sob força transversal caracteriza flexão, não compressão axial pura.",
      "Está incorreta: O volume de um sólido real não se reduz a zero sob compressão elástica ou plástica."
    ],
    "nursingApplication": "Explica o achatamento elástico microscópico dos discos intervertebrais sob o peso do corpo durante o dia."
  },
  {
    "id": 2186,
    "topicId": 2,
    "question": "Qual das seguintes alterações geométricas ocorre numa barra elástica sujeita a esforço de TRAÇÃO?",
    "options": [
      "O comprimento longitudinal diminui e a área da secção transversal aumenta.",
      "A barra roda continuamente sobre o seu eixo central mantendo o comprimento constante.",
      "O comprimento longitudinal aumenta e a área da secção transversal diminui.",
      "A barra transforma-se num sólido indeformável de Euclides em equilíbrio térmico."
    ],
    "correctIndex": 2,
    "explanation": "Sob tração axial, as extremidades afastam-se (alongamento ΔL > 0) e a secção transversal adelgaça-se lateralmente.",
    "distractorAnalysis": [
      "Está incorreta: Encurtamento com aumento de secção é o efeito característico da compressão mecânica.",
      "Está incorreta: Rotação sobre o próprio eixo é a deformação de torção provocada por um binário de momentos.",
      "Está incorreta: A tração não transforma materiais reais em modelos teóricos indeformáveis de Euclides."
    ],
    "nursingApplication": "Comportamento de fios de sutura e ligamentos quando submetidos a forças de estiramento."
  },
  {
    "id": 2187,
    "topicId": 2,
    "question": "No corpo humano, o fémur suporta o peso do tronco e dos membros superiores. Este esforço mecânico predominante é de:",
    "options": [
      "Torção pura no vácuo.",
      "Cisalhamento centrípeto nulo.",
      "Radiação ionizante gama.",
      "Compressão."
    ],
    "correctIndex": 3,
    "explanation": "O peso corporal atua verticalmente de cima para baixo comprimindo o fémur contra a tíbia e o solo (forças convergentes).",
    "distractorAnalysis": [
      "Está incorreta: O suporte de carga vertical é um esforço compressivo, não uma torção pura no vácuo.",
      "Está incorreta: Cisalhamento centrípeto nulo é uma combinação fictícia de termos físicos.",
      "Está incorreta: Radiação gama é uma emissão eletromagnética nuclear, não um esforço mecânico de carga."
    ],
    "nursingApplication": "O osso cortical tem enorme resistência à compressão, sendo ideal para sustentar o peso corporal."
  },
  {
    "id": 2188,
    "topicId": 2,
    "question": "Quando um músculo se contrai e puxa um tendão ligado a um osso, o tendão fica sujeito predominantemente a uma força de:",
    "options": [
      "Tração (tensão longitudinal).",
      "Compressão convergente axial.",
      "Flexão com eixo neutro central.",
      "Desintegração atómica espontânea."
    ],
    "correctIndex": 0,
    "explanation": "O músculo exerce forças divergentes sobre as extremidades do tendão, tracionando-o ao longo do seu eixo fibroso longitudinal.",
    "distractorAnalysis": [
      "Está incorreta: Os tendões são estruturas flexíveis que suportam grandes forças de tração, mas dobram-se sob compressão.",
      "Está incorreta: A flexão ocorre em barras suportadas sob forças perpendiculares, não em tendões alinhados com a tração muscular.",
      "Está incorreta: Contração muscular mecânica não envolve desintegração atómica dos tecidos conjuntivos."
    ],
    "nursingApplication": "A elevada resistência à tração do colagénio permite transmitir a força muscular às alavancas ósseas."
  },
  {
    "id": 2189,
    "topicId": 2,
    "question": "Como se comparam os sentidos das forças aplicadas na Compressão e na Tração ao longo de um mesmo eixo linear?",
    "options": [
      "Na compressão as forças apontam ambas para a direita; na tração apontam ambas para cima.",
      "Na compressão as forças são convergentes (apontam para o interior do corpo); na tração são divergentes (apontam para fora).",
      "Em ambas as deformações as forças são sempre convergentes com a mesma intensidade.",
      "Na compressão as forças são perpendiculares à barra e na tração são paralelas ao solo."
    ],
    "correctIndex": 1,
    "explanation": "Conforme os slides 21 e 23, forças convergentes encurtam (compressão) e forças divergentes alongam (tração).",
    "distractorAnalysis": [
      "Está incorreta: Duas forças apontando no mesmo sentido aceleram o corpo em translação em vez de o deformar em tração ou compressão.",
      "Está incorreta: A tração requer forças divergentes opostas; se fossem convergentes seria compressão.",
      "Está incorreta: Forças perpendiculares produzem flexão ou cisalhamento, não esforços axiais de tração ou compressão."
    ],
    "nursingApplication": "Distingue com clareza os dois esforços axiais mais comuns na mecânica das estruturas e tecidos."
  },
  {
    "id": 2190,
    "topicId": 2,
    "question": "Se uma barra de comprimento inicial L0 sofrer uma variação de comprimento ΔL negativa (ΔL < 0), isso significa que a barra sofreu:",
    "options": [
      "Alongamento devido a uma força de tração.",
      "Uma rotação de 360 graus por ação de torção pura.",
      "Encurtamento devido a uma força de compressão.",
      "Um aumento de noventa por cento na sua massa inercial."
    ],
    "correctIndex": 2,
    "explanation": "ΔL = L - L0. Se ΔL é negativo, o comprimento final é menor que o inicial (L < L0), caracterizando compressão.",
    "distractorAnalysis": [
      "Está incorreta: Se sofresse tração, o comprimento final seria maior que o inicial, resultando em ΔL positivo (ΔL > 0).",
      "Está incorreta: A torção pura provoca rotação angular das secções sem alterar necessariamente o comprimento no regime linear.",
      "Está incorreta: A massa da barra permanece rigorosamente constante independentemente de ser comprimida ou esticada."
    ],
    "nursingApplication": "Convenção de sinais da mecânica: compressão corresponde a variações de comprimento negativas."
  },
  {
    "id": 2191,
    "topicId": 2,
    "question": "Na caracterização das deformações mecânicas (Slide 21), como são definidas as Forças de Compressão?",
    "options": [
      "Forças divergentes que aumentam o comprimento e adelgaçam a área de secção transversal da barra.",
      "Forças tangenciais paralelas que fazem deslizar duas superfícies planas opostas.",
      "Momentos de rotação puros que provocam a torção em torno do eixo longitudinal.",
      "Forças convergentes colineares que provocam diminuição do comprimento (L) e aumento da área de secção transversal (S)."
    ],
    "correctIndex": 3,
    "explanation": "A compressão atua com forças convergentes (para dentro do corpo), encurtando o comprimento e alargando a secção transversal.",
    "distractorAnalysis": [
      "Está incorreta: Forças divergentes que aumentam o comprimento e diminuem a secção caracterizam a tração, não a compressão.",
      "Está incorreta: Forças tangenciais paralelas em sentidos opostos definem o cisalhamento (corte).",
      "Está incorreta: Momentos de rotação em torno do eixo longitudinal definem a torção mecânica."
    ],
    "nursingApplication": "Os ossos dos membros inferiores e as vértebras suportam cargas predominantemente compressivas na marcha."
  },
  {
    "id": 2192,
    "topicId": 2,
    "question": "Como são definidas as Forças de Tração na mecânica dos corpos elásticos (Slide 23)?",
    "options": [
      "Forças divergentes colineares que provocam aumento do comprimento (L) e diminuição da área de secção transversal (S).",
      "Forças convergentes que diminuem o comprimento longitudinal e alargam a secção média.",
      "Forças transversais perpendiculares que curvam as arestas retilíneas da barra.",
      "Forças microscópicas puramente gravitacionais que atuam exclusivamente no vácuo espacial."
    ],
    "correctIndex": 0,
    "explanation": "A tração puxa as extremidades para fora com forças divergentes, alongando a barra e reduzindo a sua espessura transversal.",
    "distractorAnalysis": [
      "Está incorreta: Forças convergentes que encurtam a barra definem a compressão mecânica.",
      "Está incorreta: Forças transversais que curvam arestas retilíneas definem a deformação de flexão.",
      "Está incorreta: Forças no vácuo sem contacto não descrevem o esforço mecânico clássico de tração de sólidos."
    ],
    "nursingApplication": "Tendões e ligamentos são estruturas especializadas em resistir a esforços de tração longitudinal."
  },
  {
    "id": 2193,
    "topicId": 2,
    "question": "Qual das seguintes alterações geométricas ocorre num cilindro sujeito a esforço axial de COMPRESSÃO?",
    "options": [
      "O comprimento longitudinal aumenta e o diâmetro transversal diminui.",
      "O comprimento longitudinal diminui e o diâmetro transversal aumenta.",
      "O cilindro curva-se instantaneamente num semicírculo perfeito sem alterar o diâmetro.",
      "O volume do cilindro reduz-se para zero sem qualquer alteração das suas dimensões."
    ],
    "correctIndex": 1,
    "explanation": "Ao comprimir axialmente, as partículas aproximam-se na direção da força, encurtando a barra e expandindo-a lateralmente.",
    "distractorAnalysis": [
      "Está incorreta: Aumento de comprimento com diminuição de diâmetro é o efeito característico da tração mecânica.",
      "Está incorreta: Curvar-se em semicírculo sob força transversal caracteriza flexão, não compressão axial pura.",
      "Está incorreta: O volume de um sólido real não se reduz a zero sob compressão elástica ou plástica."
    ],
    "nursingApplication": "Explica o achatamento elástico microscópico dos discos intervertebrais sob o peso do corpo durante o dia."
  },
  {
    "id": 2194,
    "topicId": 2,
    "question": "Qual das seguintes alterações geométricas ocorre numa barra elástica sujeita a esforço de TRAÇÃO?",
    "options": [
      "O comprimento longitudinal diminui e a área da secção transversal aumenta.",
      "A barra roda continuamente sobre o seu eixo central mantendo o comprimento constante.",
      "O comprimento longitudinal aumenta e a área da secção transversal diminui.",
      "A barra transforma-se num sólido indeformável de Euclides em equilíbrio térmico."
    ],
    "correctIndex": 2,
    "explanation": "Sob tração axial, as extremidades afastam-se (alongamento ΔL > 0) e a secção transversal adelgaça-se lateralmente.",
    "distractorAnalysis": [
      "Está incorreta: Encurtamento com aumento de secção é o efeito característico da compressão mecânica.",
      "Está incorreta: Rotação sobre o próprio eixo é a deformação de torção provocada por um binário de momentos.",
      "Está incorreta: A tração não transforma materiais reais em modelos teóricos indeformáveis de Euclides."
    ],
    "nursingApplication": "Comportamento de fios de sutura e ligamentos quando submetidos a forças de estiramento."
  },
  {
    "id": 2195,
    "topicId": 2,
    "question": "No corpo humano, o fémur suporta o peso do tronco e dos membros superiores. Este esforço mecânico predominante é de:",
    "options": [
      "Torção pura no vácuo.",
      "Cisalhamento centrípeto nulo.",
      "Radiação ionizante gama.",
      "Compressão."
    ],
    "correctIndex": 3,
    "explanation": "O peso corporal atua verticalmente de cima para baixo comprimindo o fémur contra a tíbia e o solo (forças convergentes).",
    "distractorAnalysis": [
      "Está incorreta: O suporte de carga vertical é um esforço compressivo, não uma torção pura no vácuo.",
      "Está incorreta: Cisalhamento centrípeto nulo é uma combinação fictícia de termos físicos.",
      "Está incorreta: Radiação gama é uma emissão eletromagnética nuclear, não um esforço mecânico de carga."
    ],
    "nursingApplication": "O osso cortical tem enorme resistência à compressão, sendo ideal para sustentar o peso corporal."
  },
  {
    "id": 2196,
    "topicId": 2,
    "question": "Quando um músculo se contrai e puxa um tendão ligado a um osso, o tendão fica sujeito predominantemente a uma força de:",
    "options": [
      "Tração (tensão longitudinal).",
      "Compressão convergente axial.",
      "Flexão com eixo neutro central.",
      "Desintegração atómica espontânea."
    ],
    "correctIndex": 0,
    "explanation": "O músculo exerce forças divergentes sobre as extremidades do tendão, tracionando-o ao longo do seu eixo fibroso longitudinal.",
    "distractorAnalysis": [
      "Está incorreta: Os tendões são estruturas flexíveis que suportam grandes forças de tração, mas dobram-se sob compressão.",
      "Está incorreta: A flexão ocorre em barras suportadas sob forças perpendiculares, não em tendões alinhados com a tração muscular.",
      "Está incorreta: Contração muscular mecânica não envolve desintegração atómica dos tecidos conjuntivos."
    ],
    "nursingApplication": "A elevada resistência à tração do colagénio permite transmitir a força muscular às alavancas ósseas."
  },
  {
    "id": 2197,
    "topicId": 2,
    "question": "Como se comparam os sentidos das forças aplicadas na Compressão e na Tração ao longo de um mesmo eixo linear?",
    "options": [
      "Na compressão as forças apontam ambas para a direita; na tração apontam ambas para cima.",
      "Na compressão as forças são convergentes (apontam para o interior do corpo); na tração são divergentes (apontam para fora).",
      "Em ambas as deformações as forças são sempre convergentes com a mesma intensidade.",
      "Na compressão as forças são perpendiculares à barra e na tração são paralelas ao solo."
    ],
    "correctIndex": 1,
    "explanation": "Conforme os slides 21 e 23, forças convergentes encurtam (compressão) e forças divergentes alongam (tração).",
    "distractorAnalysis": [
      "Está incorreta: Duas forças apontando no mesmo sentido aceleram o corpo em translação em vez de o deformar em tração ou compressão.",
      "Está incorreta: A tração requer forças divergentes opostas; se fossem convergentes seria compressão.",
      "Está incorreta: Forças perpendiculares produzem flexão ou cisalhamento, não esforços axiais de tração ou compressão."
    ],
    "nursingApplication": "Distingue com clareza os dois esforços axiais mais comuns na mecânica das estruturas e tecidos."
  },
  {
    "id": 2198,
    "topicId": 2,
    "question": "Se uma barra de comprimento inicial L0 sofrer uma variação de comprimento ΔL negativa (ΔL < 0), isso significa que a barra sofreu:",
    "options": [
      "Alongamento devido a uma força de tração.",
      "Uma rotação de 360 graus por ação de torção pura.",
      "Encurtamento devido a uma força de compressão.",
      "Um aumento de noventa por cento na sua massa inercial."
    ],
    "correctIndex": 2,
    "explanation": "ΔL = L - L0. Se ΔL é negativo, o comprimento final é menor que o inicial (L < L0), caracterizando compressão.",
    "distractorAnalysis": [
      "Está incorreta: Se sofresse tração, o comprimento final seria maior que o inicial, resultando em ΔL positivo (ΔL > 0).",
      "Está incorreta: A torção pura provoca rotação angular das secções sem alterar necessariamente o comprimento no regime linear.",
      "Está incorreta: A massa da barra permanece rigorosamente constante independentemente de ser comprimida ou esticada."
    ],
    "nursingApplication": "Convenção de sinais da mecânica: compressão corresponde a variações de comprimento negativas."
  },
  {
    "id": 2199,
    "topicId": 2,
    "question": "Na caracterização das deformações mecânicas (Slide 21), como são definidas as Forças de Compressão?",
    "options": [
      "Forças divergentes que aumentam o comprimento e adelgaçam a área de secção transversal da barra.",
      "Forças tangenciais paralelas que fazem deslizar duas superfícies planas opostas.",
      "Momentos de rotação puros que provocam a torção em torno do eixo longitudinal.",
      "Forças convergentes colineares que provocam diminuição do comprimento (L) e aumento da área de secção transversal (S)."
    ],
    "correctIndex": 3,
    "explanation": "A compressão atua com forças convergentes (para dentro do corpo), encurtando o comprimento e alargando a secção transversal.",
    "distractorAnalysis": [
      "Está incorreta: Forças divergentes que aumentam o comprimento e diminuem a secção caracterizam a tração, não a compressão.",
      "Está incorreta: Forças tangenciais paralelas em sentidos opostos definem o cisalhamento (corte).",
      "Está incorreta: Momentos de rotação em torno do eixo longitudinal definem a torção mecânica."
    ],
    "nursingApplication": "Os ossos dos membros inferiores e as vértebras suportam cargas predominantemente compressivas na marcha."
  },
  {
    "id": 2200,
    "topicId": 2,
    "question": "Como são definidas as Forças de Tração na mecânica dos corpos elásticos (Slide 23)?",
    "options": [
      "Forças divergentes colineares que provocam aumento do comprimento (L) e diminuição da área de secção transversal (S).",
      "Forças convergentes que diminuem o comprimento longitudinal e alargam a secção média.",
      "Forças transversais perpendiculares que curvam as arestas retilíneas da barra.",
      "Forças microscópicas puramente gravitacionais que atuam exclusivamente no vácuo espacial."
    ],
    "correctIndex": 0,
    "explanation": "A tração puxa as extremidades para fora com forças divergentes, alongando a barra e reduzindo a sua espessura transversal.",
    "distractorAnalysis": [
      "Está incorreta: Forças convergentes que encurtam a barra definem a compressão mecânica.",
      "Está incorreta: Forças transversais que curvam arestas retilíneas definem a deformação de flexão.",
      "Está incorreta: Forças no vácuo sem contacto não descrevem o esforço mecânico clássico de tração de sólidos."
    ],
    "nursingApplication": "Tendões e ligamentos são estruturas especializadas em resistir a esforços de tração longitudinal."
  },
  {
    "id": 2201,
    "topicId": 2,
    "question": "Como é definida a deformação de Flexão na Biofísica dos materiais (Slide 26)?",
    "options": [
      "O aumento homogéneo da secção transversal sob forças axiais divergentes de tração pura.",
      "A deformação das arestas retilíneas de um sólido em linhas curvas por ação de forças perpendiculares ao seu eixo longitudinal.",
      "A rotação de um corpo em torno do seu eixo central por ação de um binário de forças.",
      "O deslizamento paralelo entre duas superfícies sob forças tangenciais em sentidos opostos."
    ],
    "correctIndex": 1,
    "explanation": "A flexão ocorre quando forças transversais curvam uma barra apoiada nas extremidades.",
    "distractorAnalysis": [
      "Está incorreta: Aumento de secção transversal com encurtamento longitudinal define compressão axial, não flexão.",
      "Está incorreta: Rotação em torno do eixo central define a deformação de torção, e não de flexão.",
      "Está incorreta: Deslizamento paralelo de superfícies define o cisalhamento (corte)."
    ],
    "nursingApplication": "Ocorre nos ossos longos quando sofrem cargas perpendiculares ou apoios descentrados."
  },
  {
    "id": 2202,
    "topicId": 2,
    "question": "Na deformação de Flexão de uma barra apoiada horizontalmente com carga aplicada no centro, o que acontece às tensões nas suas faces?",
    "options": [
      "Ambas as faces sofrem tração pura idêntica sem qualquer zona de compressão interna.",
      "A barra sofre apenas torção pura sem qualquer alteração do comprimento das suas arestas.",
      "A face superior (côncava) sofre compressão, a face inferior (convexa) sofre tração, e a tensão no plano central neutro é nula.",
      "A tensão é máxima no centro geométrico da barra e nula em todas as superfícies exteriores."
    ],
    "correctIndex": 2,
    "explanation": "Conforme os slides de Paulo Pereira (Slide 26 e 34), a curvatura gera compressão na face interna, tração na externa e tensão nula no plano neutro central.",
    "distractorAnalysis": [
      "Está incorreta: Uma barra fletida tem obrigatoriamente tensões de sinal oposto nas faces côncava e convexa.",
      "Está incorreta: A flexão curva a barra; a torção roda o corpo sobre o seu eixo.",
      "Está incorreta: No centro (plano neutro) a tensão é estritamente zero; as tensões máximas concentram-se nas superfícies exteriores."
    ],
    "nursingApplication": "Explica por que os ossos longos têm tecido compacto nas paredes externas e cavidade medular no centro neutro."
  },
  {
    "id": 2203,
    "topicId": 2,
    "question": "O que é o Plano Neutro (ou Eixo Neutro) numa barra sujeita a Flexão?",
    "options": [
      "A superfície exterior onde a compressão mecânica atinge o seu valor máximo de rutura.",
      "O ponto de apoio fixo onde atua a resultante de todas as forças de atrito do leito.",
      "A zona onde a temperatura do sólido atinge o zero absoluto durante a flexão.",
      "A região central da secção onde o comprimento não varia e a tensão mecânica longitudinal é rigorosamente nula (σ = 0)."
    ],
    "correctIndex": 3,
    "explanation": "O plano neutro separa a zona de compressão da zona de tração; nesta camada as fibras não encurtam nem alongam (σ = 0).",
    "distractorAnalysis": [
      "Está incorreta: A superfície exterior é a zona de tensão máxima (tração ou compressão), não a zona neutra.",
      "Está incorreta: O ponto de apoio fixo é o fulcro de suporte, não o plano neutro interno do material.",
      "Está incorreta: A temperatura não atinge o zero absoluto durante ensaios mecânicos convencionais de flexão."
    ],
    "nursingApplication": "Fundamento da engenharia e da biomecânica: no centro de flexão a tensão é nula, permitindo economizar massa sem perder resistência."
  },
  {
    "id": 2204,
    "topicId": 2,
    "question": "Como se define a deformação de Cisalhamento (ou Corte) na mecânica dos corpos (Slide 27)?",
    "options": [
      "A deformação que ocorre entre duas superfícies planas paralelas por ação de forças paralelas opostas que atuam tangencialmente.",
      "O alongamento linear de uma barra por forças divergentes colineares.",
      "A compressão uniforme de uma esfera por forças hidrostáticas isotrópicas.",
      "A rotação de um cilindro em torno do seu eixo central provocada por um torque."
    ],
    "correctIndex": 0,
    "explanation": "O cisalhamento caracteriza-se pelo deslizamento angular relativo de camadas paralelas de material sujeitas a forças tangenciais opostas.",
    "distractorAnalysis": [
      "Está incorreta: Alongamento por forças divergentes é tração longitudinal, não cisalhamento.",
      "Está incorreta: Compressão hidrostática é deformação volumétrica isotrópica, não corte tangencial.",
      "Está incorreta: Rotação em torno do eixo central é torção mecânica."
    ],
    "nursingApplication": "As forças de atrito tangencial e o deslizamento de tecidos sobre o leito produzem esforços de cisalhamento."
  },
  {
    "id": 2205,
    "topicId": 2,
    "question": "Como é definida a deformação de Torção na Biofísica dos materiais (Slide 28)?",
    "options": [
      "O encurtamento longitudinal de um cilindro sob forças convergentes axiais.",
      "A rotação de um sólido em torno do seu eixo longitudinal provocada pela ação de um momento de força (torque).",
      "A deformação em que todas as arestas se mantêm rigorosamente paralelas sem qualquer rotação.",
      "O estiramento linear de um fio por ação exclusiva do peso gravitacional."
    ],
    "correctIndex": 1,
    "explanation": "A torção ocorre quando um binário de forças com momentos opostos faz rodar as secções transversais em torno do eixo central.",
    "distractorAnalysis": [
      "Está incorreta: Encurtamento longitudinal por forças convergentes é a definição de compressão axial.",
      "Está incorreta: Se as arestas permanecessem paralelas sem rotação, não haveria torção mecânica.",
      "Está incorreta: Estiramento linear de um fio é tração longitudinal simples."
    ],
    "nursingApplication": "Ocorre nos membros inferiores quando o pé fica preso no chão e o corpo roda sobre a tíbia."
  },
  {
    "id": 2206,
    "topicId": 2,
    "question": "Onde se localiza a tensão mecânica máxima e a tensão nula num cilindro sujeito a esforço de Torção (Slide 28)?",
    "options": [
      "A tensão é máxima no eixo central e rigorosamente nula em toda a superfície exterior.",
      "A tensão é constante e uniforme em todos os pontos da secção transversal do cilindro.",
      "A tensão no eixo central é nula e a tensão máxima concentra-se na periferia (superfície externa) do cilindro.",
      "A tensão anula-se completamente em toda a estrutura logo que a rotação se inicia."
    ],
    "correctIndex": 2,
    "explanation": "Na torção, a deformação angular cresce com o raio: no centro o braço é zero (tensão nula); na superfície o braço é máximo (tensão máxima).",
    "distractorAnalysis": [
      "Está incorreta: No eixo central o raio é zero, pelo que a tensão de corte é nula, e não máxima.",
      "Está incorreta: A distribuição de tensões na torção é linear com o raio, não sendo constante nem uniforme.",
      "Está incorreta: Se a tensão fosse nula em toda a estrutura, o material não ofereceria qualquer resistência à torção."
    ],
    "nursingApplication": "Justifica porque os ossos tubulares ocos resistem à torção quase tão bem como ossos maciços, pesando muito menos."
  },
  {
    "id": 2207,
    "topicId": 2,
    "question": "Porque é que a estrutura cilíndrica e oca dos ossos longos é biomecanicamente vantajosa perante esforços de Flexão e Torção?",
    "options": [
      "Porque os ossos ocos acumulam ar pressurizado que neutraliza a gravidade terrestre durante a marcha.",
      "Porque o vazio central transforma o osso num sólido de Euclides puramente indeformável.",
      "Porque a ausência de material no centro duplica a velocidade da luz no interior da cavidade medular.",
      "Porque tanto na flexão como na torção a tensão no centro é nula e máxima na periferia, concentrando o osso compacto no exterior com menor massa total."
    ],
    "correctIndex": 3,
    "explanation": "Concentrar o material na periferia (onde as tensões de flexão e torção são máximas) maximiza a resistência mecânica e poupa peso.",
    "distractorAnalysis": [
      "Está incorreta: Os ossos não contêm ar pressurizado antigravítico; a cavidade contém medula óssea e vasos sanguíneos.",
      "Está incorreta: A cavidade medular não torna o osso num sólido indeformável de Euclides.",
      "Está incorreta: A propagação da luz no interior do osso não tem qualquer relação com a resistência mecânica aos esforços."
    ],
    "nursingApplication": "Princípio físico de eficiência estrutural dos tubos ocos utilizado tanto na natureza como na engenharia."
  },
  {
    "id": 2208,
    "topicId": 2,
    "question": "Qual das seguintes situações representa um exemplo claro de esforço de Cisalhamento?",
    "options": [
      "Duas camadas planas paralelas de tecido que deslizam em sentidos contrários sob a ação de forças tangenciais opostas.",
      "Um cabo de aço vertical que suporta uma massa suspensa de duzentos quilogramas.",
      "Um bloco de cimento comprimido diretamente entre as sapatas de uma prensa hidráulica.",
      "Uma chave de fendas a rodar um parafuso em torno do seu próprio eixo longitudinal."
    ],
    "correctIndex": 0,
    "explanation": "O deslizamento relativo tangencial de superfícies em sentidos opostos é o protótipo do esforço de cisalhamento (corte).",
    "distractorAnalysis": [
      "Está incorreta: Cabo que suporta massa suspensa está sob tração longitudinal pura.",
      "Está incorreta: Bloco numa prensa hidráulica está sob compressão axial.",
      "Está incorreta: Chave de fendas a rodar um parafuso está a transmitir um esforço de torção."
    ],
    "nursingApplication": "O atrito tangencial ao puxar um paciente ou lençol gera cisalhamento mecânico entre os tecidos."
  },
  {
    "id": 2209,
    "topicId": 2,
    "question": "Como é definida a deformação de Flexão na Biofísica dos materiais (Slide 26)?",
    "options": [
      "O aumento homogéneo da secção transversal sob forças axiais divergentes de tração pura.",
      "A deformação das arestas retilíneas de um sólido em linhas curvas por ação de forças perpendiculares ao seu eixo longitudinal.",
      "A rotação de um corpo em torno do seu eixo central por ação de um binário de forças.",
      "O deslizamento paralelo entre duas superfícies sob forças tangenciais em sentidos opostos."
    ],
    "correctIndex": 1,
    "explanation": "A flexão ocorre quando forças transversais curvam uma barra apoiada nas extremidades.",
    "distractorAnalysis": [
      "Está incorreta: Aumento de secção transversal com encurtamento longitudinal define compressão axial, não flexão.",
      "Está incorreta: Rotação em torno do eixo central define a deformação de torção, e não de flexão.",
      "Está incorreta: Deslizamento paralelo de superfícies define o cisalhamento (corte)."
    ],
    "nursingApplication": "Ocorre nos ossos longos quando sofrem cargas perpendiculares ou apoios descentrados."
  },
  {
    "id": 2210,
    "topicId": 2,
    "question": "Na deformação de Flexão de uma barra apoiada horizontalmente com carga aplicada no centro, o que acontece às tensões nas suas faces?",
    "options": [
      "Ambas as faces sofrem tração pura idêntica sem qualquer zona de compressão interna.",
      "A barra sofre apenas torção pura sem qualquer alteração do comprimento das suas arestas.",
      "A face superior (côncava) sofre compressão, a face inferior (convexa) sofre tração, e a tensão no plano central neutro é nula.",
      "A tensão é máxima no centro geométrico da barra e nula em todas as superfícies exteriores."
    ],
    "correctIndex": 2,
    "explanation": "Conforme os slides de Paulo Pereira (Slide 26 e 34), a curvatura gera compressão na face interna, tração na externa e tensão nula no plano neutro central.",
    "distractorAnalysis": [
      "Está incorreta: Uma barra fletida tem obrigatoriamente tensões de sinal oposto nas faces côncava e convexa.",
      "Está incorreta: A flexão curva a barra; a torção roda o corpo sobre o seu eixo.",
      "Está incorreta: No centro (plano neutro) a tensão é estritamente zero; as tensões máximas concentram-se nas superfícies exteriores."
    ],
    "nursingApplication": "Explica por que os ossos longos têm tecido compacto nas paredes externas e cavidade medular no centro neutro."
  },
  {
    "id": 2211,
    "topicId": 2,
    "question": "O que é o Plano Neutro (ou Eixo Neutro) numa barra sujeita a Flexão?",
    "options": [
      "A superfície exterior onde a compressão mecânica atinge o seu valor máximo de rutura.",
      "O ponto de apoio fixo onde atua a resultante de todas as forças de atrito do leito.",
      "A zona onde a temperatura do sólido atinge o zero absoluto durante a flexão.",
      "A região central da secção onde o comprimento não varia e a tensão mecânica longitudinal é rigorosamente nula (σ = 0)."
    ],
    "correctIndex": 3,
    "explanation": "O plano neutro separa a zona de compressão da zona de tração; nesta camada as fibras não encurtam nem alongam (σ = 0).",
    "distractorAnalysis": [
      "Está incorreta: A superfície exterior é a zona de tensão máxima (tração ou compressão), não a zona neutra.",
      "Está incorreta: O ponto de apoio fixo é o fulcro de suporte, não o plano neutro interno do material.",
      "Está incorreta: A temperatura não atinge o zero absoluto durante ensaios mecânicos convencionais de flexão."
    ],
    "nursingApplication": "Fundamento da engenharia e da biomecânica: no centro de flexão a tensão é nula, permitindo economizar massa sem perder resistência."
  },
  {
    "id": 2212,
    "topicId": 2,
    "question": "Como se define a deformação de Cisalhamento (ou Corte) na mecânica dos corpos (Slide 27)?",
    "options": [
      "A deformação que ocorre entre duas superfícies planas paralelas por ação de forças paralelas opostas que atuam tangencialmente.",
      "O alongamento linear de uma barra por forças divergentes colineares.",
      "A compressão uniforme de uma esfera por forças hidrostáticas isotrópicas.",
      "A rotação de um cilindro em torno do seu eixo central provocada por um torque."
    ],
    "correctIndex": 0,
    "explanation": "O cisalhamento caracteriza-se pelo deslizamento angular relativo de camadas paralelas de material sujeitas a forças tangenciais opostas.",
    "distractorAnalysis": [
      "Está incorreta: Alongamento por forças divergentes é tração longitudinal, não cisalhamento.",
      "Está incorreta: Compressão hidrostática é deformação volumétrica isotrópica, não corte tangencial.",
      "Está incorreta: Rotação em torno do eixo central é torção mecânica."
    ],
    "nursingApplication": "As forças de atrito tangencial e o deslizamento de tecidos sobre o leito produzem esforços de cisalhamento."
  },
  {
    "id": 2213,
    "topicId": 2,
    "question": "Como é definida a deformação de Torção na Biofísica dos materiais (Slide 28)?",
    "options": [
      "O encurtamento longitudinal de um cilindro sob forças convergentes axiais.",
      "A rotação de um sólido em torno do seu eixo longitudinal provocada pela ação de um momento de força (torque).",
      "A deformação em que todas as arestas se mantêm rigorosamente paralelas sem qualquer rotação.",
      "O estiramento linear de um fio por ação exclusiva do peso gravitacional."
    ],
    "correctIndex": 1,
    "explanation": "A torção ocorre quando um binário de forças com momentos opostos faz rodar as secções transversais em torno do eixo central.",
    "distractorAnalysis": [
      "Está incorreta: Encurtamento longitudinal por forças convergentes é a definição de compressão axial.",
      "Está incorreta: Se as arestas permanecessem paralelas sem rotação, não haveria torção mecânica.",
      "Está incorreta: Estiramento linear de um fio é tração longitudinal simples."
    ],
    "nursingApplication": "Ocorre nos membros inferiores quando o pé fica preso no chão e o corpo roda sobre a tíbia."
  },
  {
    "id": 2214,
    "topicId": 2,
    "question": "Onde se localiza a tensão mecânica máxima e a tensão nula num cilindro sujeito a esforço de Torção (Slide 28)?",
    "options": [
      "A tensão é máxima no eixo central e rigorosamente nula em toda a superfície exterior.",
      "A tensão é constante e uniforme em todos os pontos da secção transversal do cilindro.",
      "A tensão no eixo central é nula e a tensão máxima concentra-se na periferia (superfície externa) do cilindro.",
      "A tensão anula-se completamente em toda a estrutura logo que a rotação se inicia."
    ],
    "correctIndex": 2,
    "explanation": "Na torção, a deformação angular cresce com o raio: no centro o braço é zero (tensão nula); na superfície o braço é máximo (tensão máxima).",
    "distractorAnalysis": [
      "Está incorreta: No eixo central o raio é zero, pelo que a tensão de corte é nula, e não máxima.",
      "Está incorreta: A distribuição de tensões na torção é linear com o raio, não sendo constante nem uniforme.",
      "Está incorreta: Se a tensão fosse nula em toda a estrutura, o material não ofereceria qualquer resistência à torção."
    ],
    "nursingApplication": "Justifica porque os ossos tubulares ocos resistem à torção quase tão bem como ossos maciços, pesando muito menos."
  },
  {
    "id": 2215,
    "topicId": 2,
    "question": "Porque é que a estrutura cilíndrica e oca dos ossos longos é biomecanicamente vantajosa perante esforços de Flexão e Torção?",
    "options": [
      "Porque os ossos ocos acumulam ar pressurizado que neutraliza a gravidade terrestre durante a marcha.",
      "Porque o vazio central transforma o osso num sólido de Euclides puramente indeformável.",
      "Porque a ausência de material no centro duplica a velocidade da luz no interior da cavidade medular.",
      "Porque tanto na flexão como na torção a tensão no centro é nula e máxima na periferia, concentrando o osso compacto no exterior com menor massa total."
    ],
    "correctIndex": 3,
    "explanation": "Concentrar o material na periferia (onde as tensões de flexão e torção são máximas) maximiza a resistência mecânica e poupa peso.",
    "distractorAnalysis": [
      "Está incorreta: Os ossos não contêm ar pressurizado antigravítico; a cavidade contém medula óssea e vasos sanguíneos.",
      "Está incorreta: A cavidade medular não torna o osso num sólido indeformável de Euclides.",
      "Está incorreta: A propagação da luz no interior do osso não tem qualquer relação com a resistência mecânica aos esforços."
    ],
    "nursingApplication": "Princípio físico de eficiência estrutural dos tubos ocos utilizado tanto na natureza como na engenharia."
  },
  {
    "id": 2216,
    "topicId": 2,
    "question": "Qual das seguintes situações representa um exemplo claro de esforço de Cisalhamento?",
    "options": [
      "Duas camadas planas paralelas de tecido que deslizam em sentidos contrários sob a ação de forças tangenciais opostas.",
      "Um cabo de aço vertical que suporta uma massa suspensa de duzentos quilogramas.",
      "Um bloco de cimento comprimido diretamente entre as sapatas de uma prensa hidráulica.",
      "Uma chave de fendas a rodar um parafuso em torno do seu próprio eixo longitudinal."
    ],
    "correctIndex": 0,
    "explanation": "O deslizamento relativo tangencial de superfícies em sentidos opostos é o protótipo do esforço de cisalhamento (corte).",
    "distractorAnalysis": [
      "Está incorreta: Cabo que suporta massa suspensa está sob tração longitudinal pura.",
      "Está incorreta: Bloco numa prensa hidráulica está sob compressão axial.",
      "Está incorreta: Chave de fendas a rodar um parafuso está a transmitir um esforço de torção."
    ],
    "nursingApplication": "O atrito tangencial ao puxar um paciente ou lençol gera cisalhamento mecânico entre os tecidos."
  },
  {
    "id": 2217,
    "topicId": 2,
    "question": "Como é definida a deformação de Flexão na Biofísica dos materiais (Slide 26)?",
    "options": [
      "O aumento homogéneo da secção transversal sob forças axiais divergentes de tração pura.",
      "A deformação das arestas retilíneas de um sólido em linhas curvas por ação de forças perpendiculares ao seu eixo longitudinal.",
      "A rotação de um corpo em torno do seu eixo central por ação de um binário de forças.",
      "O deslizamento paralelo entre duas superfícies sob forças tangenciais em sentidos opostos."
    ],
    "correctIndex": 1,
    "explanation": "A flexão ocorre quando forças transversais curvam uma barra apoiada nas extremidades.",
    "distractorAnalysis": [
      "Está incorreta: Aumento de secção transversal com encurtamento longitudinal define compressão axial, não flexão.",
      "Está incorreta: Rotação em torno do eixo central define a deformação de torção, e não de flexão.",
      "Está incorreta: Deslizamento paralelo de superfícies define o cisalhamento (corte)."
    ],
    "nursingApplication": "Ocorre nos ossos longos quando sofrem cargas perpendiculares ou apoios descentrados."
  },
  {
    "id": 2218,
    "topicId": 2,
    "question": "Na deformação de Flexão de uma barra apoiada horizontalmente com carga aplicada no centro, o que acontece às tensões nas suas faces?",
    "options": [
      "Ambas as faces sofrem tração pura idêntica sem qualquer zona de compressão interna.",
      "A barra sofre apenas torção pura sem qualquer alteração do comprimento das suas arestas.",
      "A face superior (côncava) sofre compressão, a face inferior (convexa) sofre tração, e a tensão no plano central neutro é nula.",
      "A tensão é máxima no centro geométrico da barra e nula em todas as superfícies exteriores."
    ],
    "correctIndex": 2,
    "explanation": "Conforme os slides de Paulo Pereira (Slide 26 e 34), a curvatura gera compressão na face interna, tração na externa e tensão nula no plano neutro central.",
    "distractorAnalysis": [
      "Está incorreta: Uma barra fletida tem obrigatoriamente tensões de sinal oposto nas faces côncava e convexa.",
      "Está incorreta: A flexão curva a barra; a torção roda o corpo sobre o seu eixo.",
      "Está incorreta: No centro (plano neutro) a tensão é estritamente zero; as tensões máximas concentram-se nas superfícies exteriores."
    ],
    "nursingApplication": "Explica por que os ossos longos têm tecido compacto nas paredes externas e cavidade medular no centro neutro."
  },
  {
    "id": 2219,
    "topicId": 2,
    "question": "O que é o Plano Neutro (ou Eixo Neutro) numa barra sujeita a Flexão?",
    "options": [
      "A superfície exterior onde a compressão mecânica atinge o seu valor máximo de rutura.",
      "O ponto de apoio fixo onde atua a resultante de todas as forças de atrito do leito.",
      "A zona onde a temperatura do sólido atinge o zero absoluto durante a flexão.",
      "A região central da secção onde o comprimento não varia e a tensão mecânica longitudinal é rigorosamente nula (σ = 0)."
    ],
    "correctIndex": 3,
    "explanation": "O plano neutro separa a zona de compressão da zona de tração; nesta camada as fibras não encurtam nem alongam (σ = 0).",
    "distractorAnalysis": [
      "Está incorreta: A superfície exterior é a zona de tensão máxima (tração ou compressão), não a zona neutra.",
      "Está incorreta: O ponto de apoio fixo é o fulcro de suporte, não o plano neutro interno do material.",
      "Está incorreta: A temperatura não atinge o zero absoluto durante ensaios mecânicos convencionais de flexão."
    ],
    "nursingApplication": "Fundamento da engenharia e da biomecânica: no centro de flexão a tensão é nula, permitindo economizar massa sem perder resistência."
  },
  {
    "id": 2220,
    "topicId": 2,
    "question": "Como se define a deformação de Cisalhamento (ou Corte) na mecânica dos corpos (Slide 27)?",
    "options": [
      "A deformação que ocorre entre duas superfícies planas paralelas por ação de forças paralelas opostas que atuam tangencialmente.",
      "O alongamento linear de uma barra por forças divergentes colineares.",
      "A compressão uniforme de uma esfera por forças hidrostáticas isotrópicas.",
      "A rotação de um cilindro em torno do seu eixo central provocada por um torque."
    ],
    "correctIndex": 0,
    "explanation": "O cisalhamento caracteriza-se pelo deslizamento angular relativo de camadas paralelas de material sujeitas a forças tangenciais opostas.",
    "distractorAnalysis": [
      "Está incorreta: Alongamento por forças divergentes é tração longitudinal, não cisalhamento.",
      "Está incorreta: Compressão hidrostática é deformação volumétrica isotrópica, não corte tangencial.",
      "Está incorreta: Rotação em torno do eixo central é torção mecânica."
    ],
    "nursingApplication": "As forças de atrito tangencial e o deslizamento de tecidos sobre o leito produzem esforços de cisalhamento."
  },
  {
    "id": 2221,
    "topicId": 2,
    "question": "Como é definida a deformação de Torção na Biofísica dos materiais (Slide 28)?",
    "options": [
      "O encurtamento longitudinal de um cilindro sob forças convergentes axiais.",
      "A rotação de um sólido em torno do seu eixo longitudinal provocada pela ação de um momento de força (torque).",
      "A deformação em que todas as arestas se mantêm rigorosamente paralelas sem qualquer rotação.",
      "O estiramento linear de um fio por ação exclusiva do peso gravitacional."
    ],
    "correctIndex": 1,
    "explanation": "A torção ocorre quando um binário de forças com momentos opostos faz rodar as secções transversais em torno do eixo central.",
    "distractorAnalysis": [
      "Está incorreta: Encurtamento longitudinal por forças convergentes é a definição de compressão axial.",
      "Está incorreta: Se as arestas permanecessem paralelas sem rotação, não haveria torção mecânica.",
      "Está incorreta: Estiramento linear de um fio é tração longitudinal simples."
    ],
    "nursingApplication": "Ocorre nos membros inferiores quando o pé fica preso no chão e o corpo roda sobre a tíbia."
  },
  {
    "id": 2222,
    "topicId": 2,
    "question": "Onde se localiza a tensão mecânica máxima e a tensão nula num cilindro sujeito a esforço de Torção (Slide 28)?",
    "options": [
      "A tensão é máxima no eixo central e rigorosamente nula em toda a superfície exterior.",
      "A tensão é constante e uniforme em todos os pontos da secção transversal do cilindro.",
      "A tensão no eixo central é nula e a tensão máxima concentra-se na periferia (superfície externa) do cilindro.",
      "A tensão anula-se completamente em toda a estrutura logo que a rotação se inicia."
    ],
    "correctIndex": 2,
    "explanation": "Na torção, a deformação angular cresce com o raio: no centro o braço é zero (tensão nula); na superfície o braço é máximo (tensão máxima).",
    "distractorAnalysis": [
      "Está incorreta: No eixo central o raio é zero, pelo que a tensão de corte é nula, e não máxima.",
      "Está incorreta: A distribuição de tensões na torção é linear com o raio, não sendo constante nem uniforme.",
      "Está incorreta: Se a tensão fosse nula em toda a estrutura, o material não ofereceria qualquer resistência à torção."
    ],
    "nursingApplication": "Justifica porque os ossos tubulares ocos resistem à torção quase tão bem como ossos maciços, pesando muito menos."
  },
  {
    "id": 2223,
    "topicId": 2,
    "question": "Porque é que a estrutura cilíndrica e oca dos ossos longos é biomecanicamente vantajosa perante esforços de Flexão e Torção?",
    "options": [
      "Porque os ossos ocos acumulam ar pressurizado que neutraliza a gravidade terrestre durante a marcha.",
      "Porque o vazio central transforma o osso num sólido de Euclides puramente indeformável.",
      "Porque a ausência de material no centro duplica a velocidade da luz no interior da cavidade medular.",
      "Porque tanto na flexão como na torção a tensão no centro é nula e máxima na periferia, concentrando o osso compacto no exterior com menor massa total."
    ],
    "correctIndex": 3,
    "explanation": "Concentrar o material na periferia (onde as tensões de flexão e torção são máximas) maximiza a resistência mecânica e poupa peso.",
    "distractorAnalysis": [
      "Está incorreta: Os ossos não contêm ar pressurizado antigravítico; a cavidade contém medula óssea e vasos sanguíneos.",
      "Está incorreta: A cavidade medular não torna o osso num sólido indeformável de Euclides.",
      "Está incorreta: A propagação da luz no interior do osso não tem qualquer relação com a resistência mecânica aos esforços."
    ],
    "nursingApplication": "Princípio físico de eficiência estrutural dos tubos ocos utilizado tanto na natureza como na engenharia."
  },
  {
    "id": 2224,
    "topicId": 2,
    "question": "Qual das seguintes situações representa um exemplo claro de esforço de Cisalhamento?",
    "options": [
      "Duas camadas planas paralelas de tecido que deslizam em sentidos contrários sob a ação de forças tangenciais opostas.",
      "Um cabo de aço vertical que suporta uma massa suspensa de duzentos quilogramas.",
      "Um bloco de cimento comprimido diretamente entre as sapatas de uma prensa hidráulica.",
      "Uma chave de fendas a rodar um parafuso em torno do seu próprio eixo longitudinal."
    ],
    "correctIndex": 0,
    "explanation": "O deslizamento relativo tangencial de superfícies em sentidos opostos é o protótipo do esforço de cisalhamento (corte).",
    "distractorAnalysis": [
      "Está incorreta: Cabo que suporta massa suspensa está sob tração longitudinal pura.",
      "Está incorreta: Bloco numa prensa hidráulica está sob compressão axial.",
      "Está incorreta: Chave de fendas a rodar um parafuso está a transmitir um esforço de torção."
    ],
    "nursingApplication": "O atrito tangencial ao puxar um paciente ou lençol gera cisalhamento mecânico entre os tecidos."
  },
  {
    "id": 2225,
    "topicId": 2,
    "question": "Como é definida a deformação de Flexão na Biofísica dos materiais (Slide 26)?",
    "options": [
      "O aumento homogéneo da secção transversal sob forças axiais divergentes de tração pura.",
      "A deformação das arestas retilíneas de um sólido em linhas curvas por ação de forças perpendiculares ao seu eixo longitudinal.",
      "A rotação de um corpo em torno do seu eixo central por ação de um binário de forças.",
      "O deslizamento paralelo entre duas superfícies sob forças tangenciais em sentidos opostos."
    ],
    "correctIndex": 1,
    "explanation": "A flexão ocorre quando forças transversais curvam uma barra apoiada nas extremidades.",
    "distractorAnalysis": [
      "Está incorreta: Aumento de secção transversal com encurtamento longitudinal define compressão axial, não flexão.",
      "Está incorreta: Rotação em torno do eixo central define a deformação de torção, e não de flexão.",
      "Está incorreta: Deslizamento paralelo de superfícies define o cisalhamento (corte)."
    ],
    "nursingApplication": "Ocorre nos ossos longos quando sofrem cargas perpendiculares ou apoios descentrados."
  },
  {
    "id": 2226,
    "topicId": 2,
    "question": "Na deformação de Flexão de uma barra apoiada horizontalmente com carga aplicada no centro, o que acontece às tensões nas suas faces?",
    "options": [
      "Ambas as faces sofrem tração pura idêntica sem qualquer zona de compressão interna.",
      "A barra sofre apenas torção pura sem qualquer alteração do comprimento das suas arestas.",
      "A face superior (côncava) sofre compressão, a face inferior (convexa) sofre tração, e a tensão no plano central neutro é nula.",
      "A tensão é máxima no centro geométrico da barra e nula em todas as superfícies exteriores."
    ],
    "correctIndex": 2,
    "explanation": "Conforme os slides de Paulo Pereira (Slide 26 e 34), a curvatura gera compressão na face interna, tração na externa e tensão nula no plano neutro central.",
    "distractorAnalysis": [
      "Está incorreta: Uma barra fletida tem obrigatoriamente tensões de sinal oposto nas faces côncava e convexa.",
      "Está incorreta: A flexão curva a barra; a torção roda o corpo sobre o seu eixo.",
      "Está incorreta: No centro (plano neutro) a tensão é estritamente zero; as tensões máximas concentram-se nas superfícies exteriores."
    ],
    "nursingApplication": "Explica por que os ossos longos têm tecido compacto nas paredes externas e cavidade medular no centro neutro."
  },
  {
    "id": 2227,
    "topicId": 2,
    "question": "O que é o Plano Neutro (ou Eixo Neutro) numa barra sujeita a Flexão?",
    "options": [
      "A superfície exterior onde a compressão mecânica atinge o seu valor máximo de rutura.",
      "O ponto de apoio fixo onde atua a resultante de todas as forças de atrito do leito.",
      "A zona onde a temperatura do sólido atinge o zero absoluto durante a flexão.",
      "A região central da secção onde o comprimento não varia e a tensão mecânica longitudinal é rigorosamente nula (σ = 0)."
    ],
    "correctIndex": 3,
    "explanation": "O plano neutro separa a zona de compressão da zona de tração; nesta camada as fibras não encurtam nem alongam (σ = 0).",
    "distractorAnalysis": [
      "Está incorreta: A superfície exterior é a zona de tensão máxima (tração ou compressão), não a zona neutra.",
      "Está incorreta: O ponto de apoio fixo é o fulcro de suporte, não o plano neutro interno do material.",
      "Está incorreta: A temperatura não atinge o zero absoluto durante ensaios mecânicos convencionais de flexão."
    ],
    "nursingApplication": "Fundamento da engenharia e da biomecânica: no centro de flexão a tensão é nula, permitindo economizar massa sem perder resistência."
  },
  {
    "id": 2228,
    "topicId": 2,
    "question": "Como se define a deformação de Cisalhamento (ou Corte) na mecânica dos corpos (Slide 27)?",
    "options": [
      "A deformação que ocorre entre duas superfícies planas paralelas por ação de forças paralelas opostas que atuam tangencialmente.",
      "O alongamento linear de uma barra por forças divergentes colineares.",
      "A compressão uniforme de uma esfera por forças hidrostáticas isotrópicas.",
      "A rotação de um cilindro em torno do seu eixo central provocada por um torque."
    ],
    "correctIndex": 0,
    "explanation": "O cisalhamento caracteriza-se pelo deslizamento angular relativo de camadas paralelas de material sujeitas a forças tangenciais opostas.",
    "distractorAnalysis": [
      "Está incorreta: Alongamento por forças divergentes é tração longitudinal, não cisalhamento.",
      "Está incorreta: Compressão hidrostática é deformação volumétrica isotrópica, não corte tangencial.",
      "Está incorreta: Rotação em torno do eixo central é torção mecânica."
    ],
    "nursingApplication": "As forças de atrito tangencial e o deslizamento de tecidos sobre o leito produzem esforços de cisalhamento."
  },
  {
    "id": 2229,
    "topicId": 2,
    "question": "Como é definida a deformação de Torção na Biofísica dos materiais (Slide 28)?",
    "options": [
      "O encurtamento longitudinal de um cilindro sob forças convergentes axiais.",
      "A rotação de um sólido em torno do seu eixo longitudinal provocada pela ação de um momento de força (torque).",
      "A deformação em que todas as arestas se mantêm rigorosamente paralelas sem qualquer rotação.",
      "O estiramento linear de um fio por ação exclusiva do peso gravitacional."
    ],
    "correctIndex": 1,
    "explanation": "A torção ocorre quando um binário de forças com momentos opostos faz rodar as secções transversais em torno do eixo central.",
    "distractorAnalysis": [
      "Está incorreta: Encurtamento longitudinal por forças convergentes é a definição de compressão axial.",
      "Está incorreta: Se as arestas permanecessem paralelas sem rotação, não haveria torção mecânica.",
      "Está incorreta: Estiramento linear de um fio é tração longitudinal simples."
    ],
    "nursingApplication": "Ocorre nos membros inferiores quando o pé fica preso no chão e o corpo roda sobre a tíbia."
  },
  {
    "id": 2230,
    "topicId": 2,
    "question": "Onde se localiza a tensão mecânica máxima e a tensão nula num cilindro sujeito a esforço de Torção (Slide 28)?",
    "options": [
      "A tensão é máxima no eixo central e rigorosamente nula em toda a superfície exterior.",
      "A tensão é constante e uniforme em todos os pontos da secção transversal do cilindro.",
      "A tensão no eixo central é nula e a tensão máxima concentra-se na periferia (superfície externa) do cilindro.",
      "A tensão anula-se completamente em toda a estrutura logo que a rotação se inicia."
    ],
    "correctIndex": 2,
    "explanation": "Na torção, a deformação angular cresce com o raio: no centro o braço é zero (tensão nula); na superfície o braço é máximo (tensão máxima).",
    "distractorAnalysis": [
      "Está incorreta: No eixo central o raio é zero, pelo que a tensão de corte é nula, e não máxima.",
      "Está incorreta: A distribuição de tensões na torção é linear com o raio, não sendo constante nem uniforme.",
      "Está incorreta: Se a tensão fosse nula em toda a estrutura, o material não ofereceria qualquer resistência à torção."
    ],
    "nursingApplication": "Justifica porque os ossos tubulares ocos resistem à torção quase tão bem como ossos maciços, pesando muito menos."
  },
  {
    "id": 2231,
    "topicId": 2,
    "question": "Porque é que a estrutura cilíndrica e oca dos ossos longos é biomecanicamente vantajosa perante esforços de Flexão e Torção?",
    "options": [
      "Porque os ossos ocos acumulam ar pressurizado que neutraliza a gravidade terrestre durante a marcha.",
      "Porque o vazio central transforma o osso num sólido de Euclides puramente indeformável.",
      "Porque a ausência de material no centro duplica a velocidade da luz no interior da cavidade medular.",
      "Porque tanto na flexão como na torção a tensão no centro é nula e máxima na periferia, concentrando o osso compacto no exterior com menor massa total."
    ],
    "correctIndex": 3,
    "explanation": "Concentrar o material na periferia (onde as tensões de flexão e torção são máximas) maximiza a resistência mecânica e poupa peso.",
    "distractorAnalysis": [
      "Está incorreta: Os ossos não contêm ar pressurizado antigravítico; a cavidade contém medula óssea e vasos sanguíneos.",
      "Está incorreta: A cavidade medular não torna o osso num sólido indeformável de Euclides.",
      "Está incorreta: A propagação da luz no interior do osso não tem qualquer relação com a resistência mecânica aos esforços."
    ],
    "nursingApplication": "Princípio físico de eficiência estrutural dos tubos ocos utilizado tanto na natureza como na engenharia."
  },
  {
    "id": 2232,
    "topicId": 2,
    "question": "Qual das seguintes situações representa um exemplo claro de esforço de Cisalhamento?",
    "options": [
      "Duas camadas planas paralelas de tecido que deslizam em sentidos contrários sob a ação de forças tangenciais opostas.",
      "Um cabo de aço vertical que suporta uma massa suspensa de duzentos quilogramas.",
      "Um bloco de cimento comprimido diretamente entre as sapatas de uma prensa hidráulica.",
      "Uma chave de fendas a rodar um parafuso em torno do seu próprio eixo longitudinal."
    ],
    "correctIndex": 0,
    "explanation": "O deslizamento relativo tangencial de superfícies em sentidos opostos é o protótipo do esforço de cisalhamento (corte).",
    "distractorAnalysis": [
      "Está incorreta: Cabo que suporta massa suspensa está sob tração longitudinal pura.",
      "Está incorreta: Bloco numa prensa hidráulica está sob compressão axial.",
      "Está incorreta: Chave de fendas a rodar um parafuso está a transmitir um esforço de torção."
    ],
    "nursingApplication": "O atrito tangencial ao puxar um paciente ou lençol gera cisalhamento mecânico entre os tecidos."
  },
  {
    "id": 2233,
    "topicId": 2,
    "question": "Como é definida a deformação de Flexão na Biofísica dos materiais (Slide 26)?",
    "options": [
      "O aumento homogéneo da secção transversal sob forças axiais divergentes de tração pura.",
      "A deformação das arestas retilíneas de um sólido em linhas curvas por ação de forças perpendiculares ao seu eixo longitudinal.",
      "A rotação de um corpo em torno do seu eixo central por ação de um binário de forças.",
      "O deslizamento paralelo entre duas superfícies sob forças tangenciais em sentidos opostos."
    ],
    "correctIndex": 1,
    "explanation": "A flexão ocorre quando forças transversais curvam uma barra apoiada nas extremidades.",
    "distractorAnalysis": [
      "Está incorreta: Aumento de secção transversal com encurtamento longitudinal define compressão axial, não flexão.",
      "Está incorreta: Rotação em torno do eixo central define a deformação de torção, e não de flexão.",
      "Está incorreta: Deslizamento paralelo de superfícies define o cisalhamento (corte)."
    ],
    "nursingApplication": "Ocorre nos ossos longos quando sofrem cargas perpendiculares ou apoios descentrados."
  },
  {
    "id": 2234,
    "topicId": 2,
    "question": "Na deformação de Flexão de uma barra apoiada horizontalmente com carga aplicada no centro, o que acontece às tensões nas suas faces?",
    "options": [
      "Ambas as faces sofrem tração pura idêntica sem qualquer zona de compressão interna.",
      "A barra sofre apenas torção pura sem qualquer alteração do comprimento das suas arestas.",
      "A face superior (côncava) sofre compressão, a face inferior (convexa) sofre tração, e a tensão no plano central neutro é nula.",
      "A tensão é máxima no centro geométrico da barra e nula em todas as superfícies exteriores."
    ],
    "correctIndex": 2,
    "explanation": "Conforme os slides de Paulo Pereira (Slide 26 e 34), a curvatura gera compressão na face interna, tração na externa e tensão nula no plano neutro central.",
    "distractorAnalysis": [
      "Está incorreta: Uma barra fletida tem obrigatoriamente tensões de sinal oposto nas faces côncava e convexa.",
      "Está incorreta: A flexão curva a barra; a torção roda o corpo sobre o seu eixo.",
      "Está incorreta: No centro (plano neutro) a tensão é estritamente zero; as tensões máximas concentram-se nas superfícies exteriores."
    ],
    "nursingApplication": "Explica por que os ossos longos têm tecido compacto nas paredes externas e cavidade medular no centro neutro."
  },
  {
    "id": 2235,
    "topicId": 2,
    "question": "O que é o Plano Neutro (ou Eixo Neutro) numa barra sujeita a Flexão?",
    "options": [
      "A superfície exterior onde a compressão mecânica atinge o seu valor máximo de rutura.",
      "O ponto de apoio fixo onde atua a resultante de todas as forças de atrito do leito.",
      "A zona onde a temperatura do sólido atinge o zero absoluto durante a flexão.",
      "A região central da secção onde o comprimento não varia e a tensão mecânica longitudinal é rigorosamente nula (σ = 0)."
    ],
    "correctIndex": 3,
    "explanation": "O plano neutro separa a zona de compressão da zona de tração; nesta camada as fibras não encurtam nem alongam (σ = 0).",
    "distractorAnalysis": [
      "Está incorreta: A superfície exterior é a zona de tensão máxima (tração ou compressão), não a zona neutra.",
      "Está incorreta: O ponto de apoio fixo é o fulcro de suporte, não o plano neutro interno do material.",
      "Está incorreta: A temperatura não atinge o zero absoluto durante ensaios mecânicos convencionais de flexão."
    ],
    "nursingApplication": "Fundamento da engenharia e da biomecânica: no centro de flexão a tensão é nula, permitindo economizar massa sem perder resistência."
  },
  {
    "id": 2236,
    "topicId": 2,
    "question": "Como se define a deformação de Cisalhamento (ou Corte) na mecânica dos corpos (Slide 27)?",
    "options": [
      "A deformação que ocorre entre duas superfícies planas paralelas por ação de forças paralelas opostas que atuam tangencialmente.",
      "O alongamento linear de uma barra por forças divergentes colineares.",
      "A compressão uniforme de uma esfera por forças hidrostáticas isotrópicas.",
      "A rotação de um cilindro em torno do seu eixo central provocada por um torque."
    ],
    "correctIndex": 0,
    "explanation": "O cisalhamento caracteriza-se pelo deslizamento angular relativo de camadas paralelas de material sujeitas a forças tangenciais opostas.",
    "distractorAnalysis": [
      "Está incorreta: Alongamento por forças divergentes é tração longitudinal, não cisalhamento.",
      "Está incorreta: Compressão hidrostática é deformação volumétrica isotrópica, não corte tangencial.",
      "Está incorreta: Rotação em torno do eixo central é torção mecânica."
    ],
    "nursingApplication": "As forças de atrito tangencial e o deslizamento de tecidos sobre o leito produzem esforços de cisalhamento."
  },
  {
    "id": 2237,
    "topicId": 2,
    "question": "Como é definida a deformação de Torção na Biofísica dos materiais (Slide 28)?",
    "options": [
      "O encurtamento longitudinal de um cilindro sob forças convergentes axiais.",
      "A rotação de um sólido em torno do seu eixo longitudinal provocada pela ação de um momento de força (torque).",
      "A deformação em que todas as arestas se mantêm rigorosamente paralelas sem qualquer rotação.",
      "O estiramento linear de um fio por ação exclusiva do peso gravitacional."
    ],
    "correctIndex": 1,
    "explanation": "A torção ocorre quando um binário de forças com momentos opostos faz rodar as secções transversais em torno do eixo central.",
    "distractorAnalysis": [
      "Está incorreta: Encurtamento longitudinal por forças convergentes é a definição de compressão axial.",
      "Está incorreta: Se as arestas permanecessem paralelas sem rotação, não haveria torção mecânica.",
      "Está incorreta: Estiramento linear de um fio é tração longitudinal simples."
    ],
    "nursingApplication": "Ocorre nos membros inferiores quando o pé fica preso no chão e o corpo roda sobre a tíbia."
  },
  {
    "id": 2238,
    "topicId": 2,
    "question": "Onde se localiza a tensão mecânica máxima e a tensão nula num cilindro sujeito a esforço de Torção (Slide 28)?",
    "options": [
      "A tensão é máxima no eixo central e rigorosamente nula em toda a superfície exterior.",
      "A tensão é constante e uniforme em todos os pontos da secção transversal do cilindro.",
      "A tensão no eixo central é nula e a tensão máxima concentra-se na periferia (superfície externa) do cilindro.",
      "A tensão anula-se completamente em toda a estrutura logo que a rotação se inicia."
    ],
    "correctIndex": 2,
    "explanation": "Na torção, a deformação angular cresce com o raio: no centro o braço é zero (tensão nula); na superfície o braço é máximo (tensão máxima).",
    "distractorAnalysis": [
      "Está incorreta: No eixo central o raio é zero, pelo que a tensão de corte é nula, e não máxima.",
      "Está incorreta: A distribuição de tensões na torção é linear com o raio, não sendo constante nem uniforme.",
      "Está incorreta: Se a tensão fosse nula em toda a estrutura, o material não ofereceria qualquer resistência à torção."
    ],
    "nursingApplication": "Justifica porque os ossos tubulares ocos resistem à torção quase tão bem como ossos maciços, pesando muito menos."
  },
  {
    "id": 2239,
    "topicId": 2,
    "question": "Porque é que a estrutura cilíndrica e oca dos ossos longos é biomecanicamente vantajosa perante esforços de Flexão e Torção?",
    "options": [
      "Porque os ossos ocos acumulam ar pressurizado que neutraliza a gravidade terrestre durante a marcha.",
      "Porque o vazio central transforma o osso num sólido de Euclides puramente indeformável.",
      "Porque a ausência de material no centro duplica a velocidade da luz no interior da cavidade medular.",
      "Porque tanto na flexão como na torção a tensão no centro é nula e máxima na periferia, concentrando o osso compacto no exterior com menor massa total."
    ],
    "correctIndex": 3,
    "explanation": "Concentrar o material na periferia (onde as tensões de flexão e torção são máximas) maximiza a resistência mecânica e poupa peso.",
    "distractorAnalysis": [
      "Está incorreta: Os ossos não contêm ar pressurizado antigravítico; a cavidade contém medula óssea e vasos sanguíneos.",
      "Está incorreta: A cavidade medular não torna o osso num sólido indeformável de Euclides.",
      "Está incorreta: A propagação da luz no interior do osso não tem qualquer relação com a resistência mecânica aos esforços."
    ],
    "nursingApplication": "Princípio físico de eficiência estrutural dos tubos ocos utilizado tanto na natureza como na engenharia."
  },
  {
    "id": 2240,
    "topicId": 2,
    "question": "Qual das seguintes situações representa um exemplo claro de esforço de Cisalhamento?",
    "options": [
      "Duas camadas planas paralelas de tecido que deslizam em sentidos contrários sob a ação de forças tangenciais opostas.",
      "Um cabo de aço vertical que suporta uma massa suspensa de duzentos quilogramas.",
      "Um bloco de cimento comprimido diretamente entre as sapatas de uma prensa hidráulica.",
      "Uma chave de fendas a rodar um parafuso em torno do seu próprio eixo longitudinal."
    ],
    "correctIndex": 0,
    "explanation": "O deslizamento relativo tangencial de superfícies em sentidos opostos é o protótipo do esforço de cisalhamento (corte).",
    "distractorAnalysis": [
      "Está incorreta: Cabo que suporta massa suspensa está sob tração longitudinal pura.",
      "Está incorreta: Bloco numa prensa hidráulica está sob compressão axial.",
      "Está incorreta: Chave de fendas a rodar um parafuso está a transmitir um esforço de torção."
    ],
    "nursingApplication": "O atrito tangencial ao puxar um paciente ou lençol gera cisalhamento mecânico entre os tecidos."
  },
  {
    "id": 2241,
    "topicId": 2,
    "question": "Como é definida a deformação de Flexão na Biofísica dos materiais (Slide 26)?",
    "options": [
      "O aumento homogéneo da secção transversal sob forças axiais divergentes de tração pura.",
      "A deformação das arestas retilíneas de um sólido em linhas curvas por ação de forças perpendiculares ao seu eixo longitudinal.",
      "A rotação de um corpo em torno do seu eixo central por ação de um binário de forças.",
      "O deslizamento paralelo entre duas superfícies sob forças tangenciais em sentidos opostos."
    ],
    "correctIndex": 1,
    "explanation": "A flexão ocorre quando forças transversais curvam uma barra apoiada nas extremidades.",
    "distractorAnalysis": [
      "Está incorreta: Aumento de secção transversal com encurtamento longitudinal define compressão axial, não flexão.",
      "Está incorreta: Rotação em torno do eixo central define a deformação de torção, e não de flexão.",
      "Está incorreta: Deslizamento paralelo de superfícies define o cisalhamento (corte)."
    ],
    "nursingApplication": "Ocorre nos ossos longos quando sofrem cargas perpendiculares ou apoios descentrados."
  },
  {
    "id": 2242,
    "topicId": 2,
    "question": "Na deformação de Flexão de uma barra apoiada horizontalmente com carga aplicada no centro, o que acontece às tensões nas suas faces?",
    "options": [
      "Ambas as faces sofrem tração pura idêntica sem qualquer zona de compressão interna.",
      "A barra sofre apenas torção pura sem qualquer alteração do comprimento das suas arestas.",
      "A face superior (côncava) sofre compressão, a face inferior (convexa) sofre tração, e a tensão no plano central neutro é nula.",
      "A tensão é máxima no centro geométrico da barra e nula em todas as superfícies exteriores."
    ],
    "correctIndex": 2,
    "explanation": "Conforme os slides de Paulo Pereira (Slide 26 e 34), a curvatura gera compressão na face interna, tração na externa e tensão nula no plano neutro central.",
    "distractorAnalysis": [
      "Está incorreta: Uma barra fletida tem obrigatoriamente tensões de sinal oposto nas faces côncava e convexa.",
      "Está incorreta: A flexão curva a barra; a torção roda o corpo sobre o seu eixo.",
      "Está incorreta: No centro (plano neutro) a tensão é estritamente zero; as tensões máximas concentram-se nas superfícies exteriores."
    ],
    "nursingApplication": "Explica por que os ossos longos têm tecido compacto nas paredes externas e cavidade medular no centro neutro."
  },
  {
    "id": 2243,
    "topicId": 2,
    "question": "O que é o Plano Neutro (ou Eixo Neutro) numa barra sujeita a Flexão?",
    "options": [
      "A superfície exterior onde a compressão mecânica atinge o seu valor máximo de rutura.",
      "O ponto de apoio fixo onde atua a resultante de todas as forças de atrito do leito.",
      "A zona onde a temperatura do sólido atinge o zero absoluto durante a flexão.",
      "A região central da secção onde o comprimento não varia e a tensão mecânica longitudinal é rigorosamente nula (σ = 0)."
    ],
    "correctIndex": 3,
    "explanation": "O plano neutro separa a zona de compressão da zona de tração; nesta camada as fibras não encurtam nem alongam (σ = 0).",
    "distractorAnalysis": [
      "Está incorreta: A superfície exterior é a zona de tensão máxima (tração ou compressão), não a zona neutra.",
      "Está incorreta: O ponto de apoio fixo é o fulcro de suporte, não o plano neutro interno do material.",
      "Está incorreta: A temperatura não atinge o zero absoluto durante ensaios mecânicos convencionais de flexão."
    ],
    "nursingApplication": "Fundamento da engenharia e da biomecânica: no centro de flexão a tensão é nula, permitindo economizar massa sem perder resistência."
  },
  {
    "id": 2244,
    "topicId": 2,
    "question": "Como se define a deformação de Cisalhamento (ou Corte) na mecânica dos corpos (Slide 27)?",
    "options": [
      "A deformação que ocorre entre duas superfícies planas paralelas por ação de forças paralelas opostas que atuam tangencialmente.",
      "O alongamento linear de uma barra por forças divergentes colineares.",
      "A compressão uniforme de uma esfera por forças hidrostáticas isotrópicas.",
      "A rotação de um cilindro em torno do seu eixo central provocada por um torque."
    ],
    "correctIndex": 0,
    "explanation": "O cisalhamento caracteriza-se pelo deslizamento angular relativo de camadas paralelas de material sujeitas a forças tangenciais opostas.",
    "distractorAnalysis": [
      "Está incorreta: Alongamento por forças divergentes é tração longitudinal, não cisalhamento.",
      "Está incorreta: Compressão hidrostática é deformação volumétrica isotrópica, não corte tangencial.",
      "Está incorreta: Rotação em torno do eixo central é torção mecânica."
    ],
    "nursingApplication": "As forças de atrito tangencial e o deslizamento de tecidos sobre o leito produzem esforços de cisalhamento."
  },
  {
    "id": 2245,
    "topicId": 2,
    "question": "Como é definida a deformação de Torção na Biofísica dos materiais (Slide 28)?",
    "options": [
      "O encurtamento longitudinal de um cilindro sob forças convergentes axiais.",
      "A rotação de um sólido em torno do seu eixo longitudinal provocada pela ação de um momento de força (torque).",
      "A deformação em que todas as arestas se mantêm rigorosamente paralelas sem qualquer rotação.",
      "O estiramento linear de um fio por ação exclusiva do peso gravitacional."
    ],
    "correctIndex": 1,
    "explanation": "A torção ocorre quando um binário de forças com momentos opostos faz rodar as secções transversais em torno do eixo central.",
    "distractorAnalysis": [
      "Está incorreta: Encurtamento longitudinal por forças convergentes é a definição de compressão axial.",
      "Está incorreta: Se as arestas permanecessem paralelas sem rotação, não haveria torção mecânica.",
      "Está incorreta: Estiramento linear de um fio é tração longitudinal simples."
    ],
    "nursingApplication": "Ocorre nos membros inferiores quando o pé fica preso no chão e o corpo roda sobre a tíbia."
  },
  {
    "id": 2246,
    "topicId": 2,
    "question": "Onde se localiza a tensão mecânica máxima e a tensão nula num cilindro sujeito a esforço de Torção (Slide 28)?",
    "options": [
      "A tensão é máxima no eixo central e rigorosamente nula em toda a superfície exterior.",
      "A tensão é constante e uniforme em todos os pontos da secção transversal do cilindro.",
      "A tensão no eixo central é nula e a tensão máxima concentra-se na periferia (superfície externa) do cilindro.",
      "A tensão anula-se completamente em toda a estrutura logo que a rotação se inicia."
    ],
    "correctIndex": 2,
    "explanation": "Na torção, a deformação angular cresce com o raio: no centro o braço é zero (tensão nula); na superfície o braço é máximo (tensão máxima).",
    "distractorAnalysis": [
      "Está incorreta: No eixo central o raio é zero, pelo que a tensão de corte é nula, e não máxima.",
      "Está incorreta: A distribuição de tensões na torção é linear com o raio, não sendo constante nem uniforme.",
      "Está incorreta: Se a tensão fosse nula em toda a estrutura, o material não ofereceria qualquer resistência à torção."
    ],
    "nursingApplication": "Justifica porque os ossos tubulares ocos resistem à torção quase tão bem como ossos maciços, pesando muito menos."
  },
  {
    "id": 2247,
    "topicId": 2,
    "question": "Porque é que a estrutura cilíndrica e oca dos ossos longos é biomecanicamente vantajosa perante esforços de Flexão e Torção?",
    "options": [
      "Porque os ossos ocos acumulam ar pressurizado que neutraliza a gravidade terrestre durante a marcha.",
      "Porque o vazio central transforma o osso num sólido de Euclides puramente indeformável.",
      "Porque a ausência de material no centro duplica a velocidade da luz no interior da cavidade medular.",
      "Porque tanto na flexão como na torção a tensão no centro é nula e máxima na periferia, concentrando o osso compacto no exterior com menor massa total."
    ],
    "correctIndex": 3,
    "explanation": "Concentrar o material na periferia (onde as tensões de flexão e torção são máximas) maximiza a resistência mecânica e poupa peso.",
    "distractorAnalysis": [
      "Está incorreta: Os ossos não contêm ar pressurizado antigravítico; a cavidade contém medula óssea e vasos sanguíneos.",
      "Está incorreta: A cavidade medular não torna o osso num sólido indeformável de Euclides.",
      "Está incorreta: A propagação da luz no interior do osso não tem qualquer relação com a resistência mecânica aos esforços."
    ],
    "nursingApplication": "Princípio físico de eficiência estrutural dos tubos ocos utilizado tanto na natureza como na engenharia."
  },
  {
    "id": 2248,
    "topicId": 2,
    "question": "Qual das seguintes situações representa um exemplo claro de esforço de Cisalhamento?",
    "options": [
      "Duas camadas planas paralelas de tecido que deslizam em sentidos contrários sob a ação de forças tangenciais opostas.",
      "Um cabo de aço vertical que suporta uma massa suspensa de duzentos quilogramas.",
      "Um bloco de cimento comprimido diretamente entre as sapatas de uma prensa hidráulica.",
      "Uma chave de fendas a rodar um parafuso em torno do seu próprio eixo longitudinal."
    ],
    "correctIndex": 0,
    "explanation": "O deslizamento relativo tangencial de superfícies em sentidos opostos é o protótipo do esforço de cisalhamento (corte).",
    "distractorAnalysis": [
      "Está incorreta: Cabo que suporta massa suspensa está sob tração longitudinal pura.",
      "Está incorreta: Bloco numa prensa hidráulica está sob compressão axial.",
      "Está incorreta: Chave de fendas a rodar um parafuso está a transmitir um esforço de torção."
    ],
    "nursingApplication": "O atrito tangencial ao puxar um paciente ou lençol gera cisalhamento mecânico entre os tecidos."
  },
  {
    "id": 2249,
    "topicId": 2,
    "question": "Como é definida a deformação de Flexão na Biofísica dos materiais (Slide 26)?",
    "options": [
      "O aumento homogéneo da secção transversal sob forças axiais divergentes de tração pura.",
      "A deformação das arestas retilíneas de um sólido em linhas curvas por ação de forças perpendiculares ao seu eixo longitudinal.",
      "A rotação de um corpo em torno do seu eixo central por ação de um binário de forças.",
      "O deslizamento paralelo entre duas superfícies sob forças tangenciais em sentidos opostos."
    ],
    "correctIndex": 1,
    "explanation": "A flexão ocorre quando forças transversais curvam uma barra apoiada nas extremidades.",
    "distractorAnalysis": [
      "Está incorreta: Aumento de secção transversal com encurtamento longitudinal define compressão axial, não flexão.",
      "Está incorreta: Rotação em torno do eixo central define a deformação de torção, e não de flexão.",
      "Está incorreta: Deslizamento paralelo de superfícies define o cisalhamento (corte)."
    ],
    "nursingApplication": "Ocorre nos ossos longos quando sofrem cargas perpendiculares ou apoios descentrados."
  },
  {
    "id": 2250,
    "topicId": 2,
    "question": "Na deformação de Flexão de uma barra apoiada horizontalmente com carga aplicada no centro, o que acontece às tensões nas suas faces?",
    "options": [
      "Ambas as faces sofrem tração pura idêntica sem qualquer zona de compressão interna.",
      "A barra sofre apenas torção pura sem qualquer alteração do comprimento das suas arestas.",
      "A face superior (côncava) sofre compressão, a face inferior (convexa) sofre tração, e a tensão no plano central neutro é nula.",
      "A tensão é máxima no centro geométrico da barra e nula em todas as superfícies exteriores."
    ],
    "correctIndex": 2,
    "explanation": "Conforme os slides de Paulo Pereira (Slide 26 e 34), a curvatura gera compressão na face interna, tração na externa e tensão nula no plano neutro central.",
    "distractorAnalysis": [
      "Está incorreta: Uma barra fletida tem obrigatoriamente tensões de sinal oposto nas faces côncava e convexa.",
      "Está incorreta: A flexão curva a barra; a torção roda o corpo sobre o seu eixo.",
      "Está incorreta: No centro (plano neutro) a tensão é estritamente zero; as tensões máximas concentram-se nas superfícies exteriores."
    ],
    "nursingApplication": "Explica por que os ossos longos têm tecido compacto nas paredes externas e cavidade medular no centro neutro."
  },
  {
    "id": 2251,
    "topicId": 2,
    "question": "Qual é a expressão matemática da Lei Fundamental da Elasticidade de Hooke para uma mola (Slide 41)?",
    "options": [
      "F = k / Δx (a força elástica é a razão entre a constante elástica e a deformação).",
      "F = k + Δx (a força elástica é a soma da constante com o alongamento).",
      "F = m · a (a força elástica é a massa multiplicada pela aceleração).",
      "F = k · Δx (a força elástica é igual à constante elástica multiplicada pela deformação absoluta)."
    ],
    "correctIndex": 3,
    "explanation": "A Lei de Hooke para molas estabelece que a força restauradora é proporcional à deformação absoluta: F = k · Δx.",
    "distractorAnalysis": [
      "Está incorreta: Dividir a constante pela deformação (k / Δx) viola a linearidade dimensional da Lei de Hooke.",
      "Está incorreta: Somar uma constante em N/m com uma distância em metros viola a homogeneidade dimensional.",
      "Está incorreta: F = m·a é a 2ª Lei de Newton da dinâmica, não a Lei de Hooke da elasticidade linear."
    ],
    "nursingApplication": "Fórmula de base para o funcionamento de dinamómetros e balanças de mola utilizadas no hospital."
  },
  {
    "id": 2252,
    "topicId": 2,
    "question": "Se uma mola tem uma constante elástica k = 60 N/m e sofre um alongamento de 0.03 m, qual é a força exercida pela mola?",
    "options": [
      "1.8 N.",
      "2000.0 N.",
      "60.03 N.",
      "1.8 kg."
    ],
    "correctIndex": 0,
    "explanation": "Pela Lei de Hooke: F = k · Δx = 60 N/m · 0.03 m = 1.8 N.",
    "distractorAnalysis": [
      "Está incorreta: Dividiu a constante elástica pelo alongamento em vez de multiplicar (F = k · Δx).",
      "Está incorreta: Somou a constante com o alongamento, operação dimensionalmente incorreta.",
      "Está incorreta: A força elástica mede-se em Newtons (N) e não em quilogramas (kg)."
    ],
    "nursingApplication": "Permite calcular a força exercida por uma mola de tração calibrada em ortopedia."
  },
  {
    "id": 2253,
    "topicId": 2,
    "question": "Se uma força de 2.8 N provocar um alongamento de 0.04 m numa mola elástica, qual é a sua constante elástica k?",
    "options": [
      "0.112 N/m.",
      "70 N/m.",
      "0.0143 N/m.",
      "70 N."
    ],
    "correctIndex": 1,
    "explanation": "Pela Lei de Hooke, k = F / Δx: 2.8 N / 0.04 m = 70 N/m.",
    "distractorAnalysis": [
      "Está incorreta: Multiplicou a força pela deformação em vez de dividir (k = F / Δx).",
      "Está incorreta: Inverteu a razão dividindo a deformação pela força (Δx / F = 1/k).",
      "Está incorreta: A constante elástica mede-se em Newton por metro (N/m), e não em Newtons (N)."
    ],
    "nursingApplication": "A constante elástica mede a rigidez da mola: quanto maior o k, mais rígida é a mola."
  },
  {
    "id": 2254,
    "topicId": 2,
    "question": "No Sistema Internacional (SI), qual é a unidade correta da Constante Elástica (k) de uma mola?",
    "options": [
      "Joule por segundo (J/s).",
      "Pascal por metro cúbico (Pa/m³).",
      "Newton por metro (N/m).",
      "Quilograma por segundo ao quadrado (kg/s²), que equivale dimensionalmente a N/m."
    ],
    "correctIndex": 2,
    "explanation": "Como k = F / Δx, a unidade no SI é o Newton dividido pelo metro: N/m (ou kg/s² na análise dimensional base).",
    "distractorAnalysis": [
      "Está incorreta: Joule por segundo (J/s) corresponde a Watt (W), unidade de potência mecânica.",
      "Está incorreta: Pascal por metro cúbico não tem significado físico de constante de rigidez de mola.",
      "Está incorreta: Embora kg/s² seja dimensionalmente equivalente, no contexto de elasticidade a forma canónica é N/m."
    ],
    "nursingApplication": "Distingue a constante de rigidez da mola (N/m) da força elástica resultante (N)."
  },
  {
    "id": 2255,
    "topicId": 2,
    "question": "O que traduz fisicamente uma Constante Elástica (k) de valor muito elevado numa mola?",
    "options": [
      "A mola é extremamente mole e estica-se infinitamente com forças quase impercetíveis.",
      "A mola perdeu todas as suas propriedades elásticas e transformou-se em líquido viscoso.",
      "A mola repele a gravidade terrestre e flutua no ar à temperatura ambiente.",
      "A mola é muito rígida, exigindo forças elevadas para produzir pequenos alongamentos."
    ],
    "correctIndex": 3,
    "explanation": "Maior constante k significa maior rigidez mecânica: são necessários mais Newtons por cada metro de deformação.",
    "distractorAnalysis": [
      "Está incorreta: Molas moles e flexíveis têm constantes elásticas k baixas, e não elevadas.",
      "Está incorreta: A constante k elevada não transforma o sólido metálico num fluido viscoso.",
      "Está incorreta: Molas com k elevado continuam sujeitas à atração gravitacional proporcional à sua massa."
    ],
    "nursingApplication": "Molas de alta rigidez são usadas em camas e macas para suportar cargas elevadas sem ceder em excesso."
  },
  {
    "id": 2256,
    "topicId": 2,
    "question": "De acordo com a Lei de Hooke (F = k·Δx), se a força aplicada sobre uma mola triplicar dentro do regime elástico, a deformação:",
    "options": [
      "Triplica na mesma proporção.",
      "Reduz-se para um terço.",
      "Permanece exatamente igual.",
      "Anula-se por completo."
    ],
    "correctIndex": 0,
    "explanation": "Como Δx = F / k, a deformação é diretamente proporcional à força aplicada. Triplicando a força, a deformação triplica.",
    "distractorAnalysis": [
      "Está incorreta: A deformação só se reduziria a um terço se a força fosse dividida por três.",
      "Está incorreta: A deformação varia linearmente com a força e não permanece inalterada.",
      "Está incorreta: A deformação só seria nula se a força aplicada fosse retirada (F = 0)."
    ],
    "nursingApplication": "Demonstra a proporcionalidade direta que permite usar molas para criar escalas de medição linear."
  },
  {
    "id": 2257,
    "topicId": 2,
    "question": "Porque é que a constante elástica k de uma mola 'apenas se aplica aos corpos com tamanho e espessura definidos' (Slide 42)?",
    "options": [
      "Porque as molas reais não possuem massa inercial mensurável no Sistema Internacional.",
      "Porque o valor de k depende tanto do material de que a mola é feita como das suas dimensões geométricas específicas (comprimento e diâmetro).",
      "Porque a Lei de Hooke foi revogada pela mecânica quântica para corpos com espessura variável.",
      "Porque as molas só operam quando a gravidade da Terra é rigorosamente nula."
    ],
    "correctIndex": 1,
    "explanation": "A rigidez k de um objeto particular depende do Módulo de Young do material E, da área de secção e do comprimento inicial da mola.",
    "distractorAnalysis": [
      "Está incorreta: Molas metálicas têm massa inercial real e mensurável em quilogramas.",
      "Está incorreta: A Lei de Hooke continua plenamente válida e central na mecânica clássica dos materiais elásticos.",
      "Está incorreta: A Lei de Hooke não exige gravidade nula; funciona perfeitamente à superfície da Terra."
    ],
    "nursingApplication": "Explica por que duas molas do mesmo aço podem ter constantes k diferentes se tiverem espessuras diferentes."
  },
  {
    "id": 2258,
    "topicId": 2,
    "question": "Qual foi a célebre frase em latim formulada por Robert Hooke em 1660 para enunciar a Lei da Elasticidade (Slide 40)?",
    "options": [
      "\"Cogito, ergo sum\" (\"Penso, logo existo\").",
      "\"Alea iacta est\" (\"A sorte está lançada\").",
      "\"Ut tensio, sic vis\" (\"Como a extensão, assim a força\").",
      "\"Carpe diem, quam minimum credula postero\" (\"Aproveita o dia\")."
    ],
    "correctIndex": 2,
    "explanation": "Hooke publicou 'Ut tensio, sic vis' para expressar que a força elástica exercida é proporcional à extensão provocada.",
    "distractorAnalysis": [
      "Está incorreta: 'Cogito, ergo sum' é o princípio filosófico de René Descartes, alheio à elasticidade dos materiais.",
      "Está incorreta: 'Alea iacta est' é a famosa frase de Júlio César ao atravessar o rio Rubicão.",
      "Está incorreta: 'Carpe diem' é uma ode poética do poeta romano Horácio sem relação com física mecânica."
    ],
    "nursingApplication": "Citação histórica lecionada no programa curricular dos slides de Biofísica de Paulo Pereira."
  },
  {
    "id": 2259,
    "topicId": 2,
    "question": "Qual é a expressão matemática da Lei Fundamental da Elasticidade de Hooke para uma mola (Slide 41)?",
    "options": [
      "F = k / Δx (a força elástica é a razão entre a constante elástica e a deformação).",
      "F = k + Δx (a força elástica é a soma da constante com o alongamento).",
      "F = m · a (a força elástica é a massa multiplicada pela aceleração).",
      "F = k · Δx (a força elástica é igual à constante elástica multiplicada pela deformação absoluta)."
    ],
    "correctIndex": 3,
    "explanation": "A Lei de Hooke para molas estabelece que a força restauradora é proporcional à deformação absoluta: F = k · Δx.",
    "distractorAnalysis": [
      "Está incorreta: Dividir a constante pela deformação (k / Δx) viola a linearidade dimensional da Lei de Hooke.",
      "Está incorreta: Somar uma constante em N/m com uma distância em metros viola a homogeneidade dimensional.",
      "Está incorreta: F = m·a é a 2ª Lei de Newton da dinâmica, não a Lei de Hooke da elasticidade linear."
    ],
    "nursingApplication": "Fórmula de base para o funcionamento de dinamómetros e balanças de mola utilizadas no hospital."
  },
  {
    "id": 2260,
    "topicId": 2,
    "question": "Se uma mola tem uma constante elástica k = 140 N/m e sofre um alongamento de 0.03 m, qual é a força exercida pela mola?",
    "options": [
      "4.2 N.",
      "4666.67 N.",
      "140.03 N.",
      "4.2 kg."
    ],
    "correctIndex": 0,
    "explanation": "Pela Lei de Hooke: F = k · Δx = 140 N/m · 0.03 m = 4.2 N.",
    "distractorAnalysis": [
      "Está incorreta: Dividiu a constante elástica pelo alongamento em vez de multiplicar (F = k · Δx).",
      "Está incorreta: Somou a constante com o alongamento, operação dimensionalmente incorreta.",
      "Está incorreta: A força elástica mede-se em Newtons (N) e não em quilogramas (kg)."
    ],
    "nursingApplication": "Permite calcular a força exercida por uma mola de tração calibrada em ortopedia."
  },
  {
    "id": 2261,
    "topicId": 2,
    "question": "Se uma força de 6.0 N provocar um alongamento de 0.04 m numa mola elástica, qual é a sua constante elástica k?",
    "options": [
      "0.24 N/m.",
      "150 N/m.",
      "0.0067 N/m.",
      "150 N."
    ],
    "correctIndex": 1,
    "explanation": "Pela Lei de Hooke, k = F / Δx: 6.0 N / 0.04 m = 150 N/m.",
    "distractorAnalysis": [
      "Está incorreta: Multiplicou a força pela deformação em vez de dividir (k = F / Δx).",
      "Está incorreta: Inverteu a razão dividindo a deformação pela força (Δx / F = 1/k).",
      "Está incorreta: A constante elástica mede-se em Newton por metro (N/m), e não em Newtons (N)."
    ],
    "nursingApplication": "A constante elástica mede a rigidez da mola: quanto maior o k, mais rígida é a mola."
  },
  {
    "id": 2262,
    "topicId": 2,
    "question": "No Sistema Internacional (SI), qual é a unidade correta da Constante Elástica (k) de uma mola?",
    "options": [
      "Joule por segundo (J/s).",
      "Pascal por metro cúbico (Pa/m³).",
      "Newton por metro (N/m).",
      "Quilograma por segundo ao quadrado (kg/s²), que equivale dimensionalmente a N/m."
    ],
    "correctIndex": 2,
    "explanation": "Como k = F / Δx, a unidade no SI é o Newton dividido pelo metro: N/m (ou kg/s² na análise dimensional base).",
    "distractorAnalysis": [
      "Está incorreta: Joule por segundo (J/s) corresponde a Watt (W), unidade de potência mecânica.",
      "Está incorreta: Pascal por metro cúbico não tem significado físico de constante de rigidez de mola.",
      "Está incorreta: Embora kg/s² seja dimensionalmente equivalente, no contexto de elasticidade a forma canónica é N/m."
    ],
    "nursingApplication": "Distingue a constante de rigidez da mola (N/m) da força elástica resultante (N)."
  },
  {
    "id": 2263,
    "topicId": 2,
    "question": "O que traduz fisicamente uma Constante Elástica (k) de valor muito elevado numa mola?",
    "options": [
      "A mola é extremamente mole e estica-se infinitamente com forças quase impercetíveis.",
      "A mola perdeu todas as suas propriedades elásticas e transformou-se em líquido viscoso.",
      "A mola repele a gravidade terrestre e flutua no ar à temperatura ambiente.",
      "A mola é muito rígida, exigindo forças elevadas para produzir pequenos alongamentos."
    ],
    "correctIndex": 3,
    "explanation": "Maior constante k significa maior rigidez mecânica: são necessários mais Newtons por cada metro de deformação.",
    "distractorAnalysis": [
      "Está incorreta: Molas moles e flexíveis têm constantes elásticas k baixas, e não elevadas.",
      "Está incorreta: A constante k elevada não transforma o sólido metálico num fluido viscoso.",
      "Está incorreta: Molas com k elevado continuam sujeitas à atração gravitacional proporcional à sua massa."
    ],
    "nursingApplication": "Molas de alta rigidez são usadas em camas e macas para suportar cargas elevadas sem ceder em excesso."
  },
  {
    "id": 2264,
    "topicId": 2,
    "question": "De acordo com a Lei de Hooke (F = k·Δx), se a força aplicada sobre uma mola triplicar dentro do regime elástico, a deformação:",
    "options": [
      "Triplica na mesma proporção.",
      "Reduz-se para um terço.",
      "Permanece exatamente igual.",
      "Anula-se por completo."
    ],
    "correctIndex": 0,
    "explanation": "Como Δx = F / k, a deformação é diretamente proporcional à força aplicada. Triplicando a força, a deformação triplica.",
    "distractorAnalysis": [
      "Está incorreta: A deformação só se reduziria a um terço se a força fosse dividida por três.",
      "Está incorreta: A deformação varia linearmente com a força e não permanece inalterada.",
      "Está incorreta: A deformação só seria nula se a força aplicada fosse retirada (F = 0)."
    ],
    "nursingApplication": "Demonstra a proporcionalidade direta que permite usar molas para criar escalas de medição linear."
  },
  {
    "id": 2265,
    "topicId": 2,
    "question": "Porque é que a constante elástica k de uma mola 'apenas se aplica aos corpos com tamanho e espessura definidos' (Slide 42)?",
    "options": [
      "Porque as molas reais não possuem massa inercial mensurável no Sistema Internacional.",
      "Porque o valor de k depende tanto do material de que a mola é feita como das suas dimensões geométricas específicas (comprimento e diâmetro).",
      "Porque a Lei de Hooke foi revogada pela mecânica quântica para corpos com espessura variável.",
      "Porque as molas só operam quando a gravidade da Terra é rigorosamente nula."
    ],
    "correctIndex": 1,
    "explanation": "A rigidez k de um objeto particular depende do Módulo de Young do material E, da área de secção e do comprimento inicial da mola.",
    "distractorAnalysis": [
      "Está incorreta: Molas metálicas têm massa inercial real e mensurável em quilogramas.",
      "Está incorreta: A Lei de Hooke continua plenamente válida e central na mecânica clássica dos materiais elásticos.",
      "Está incorreta: A Lei de Hooke não exige gravidade nula; funciona perfeitamente à superfície da Terra."
    ],
    "nursingApplication": "Explica por que duas molas do mesmo aço podem ter constantes k diferentes se tiverem espessuras diferentes."
  },
  {
    "id": 2266,
    "topicId": 2,
    "question": "Qual foi a célebre frase em latim formulada por Robert Hooke em 1660 para enunciar a Lei da Elasticidade (Slide 40)?",
    "options": [
      "\"Cogito, ergo sum\" (\"Penso, logo existo\").",
      "\"Alea iacta est\" (\"A sorte está lançada\").",
      "\"Ut tensio, sic vis\" (\"Como a extensão, assim a força\").",
      "\"Carpe diem, quam minimum credula postero\" (\"Aproveita o dia\")."
    ],
    "correctIndex": 2,
    "explanation": "Hooke publicou 'Ut tensio, sic vis' para expressar que a força elástica exercida é proporcional à extensão provocada.",
    "distractorAnalysis": [
      "Está incorreta: 'Cogito, ergo sum' é o princípio filosófico de René Descartes, alheio à elasticidade dos materiais.",
      "Está incorreta: 'Alea iacta est' é a famosa frase de Júlio César ao atravessar o rio Rubicão.",
      "Está incorreta: 'Carpe diem' é uma ode poética do poeta romano Horácio sem relação com física mecânica."
    ],
    "nursingApplication": "Citação histórica lecionada no programa curricular dos slides de Biofísica de Paulo Pereira."
  },
  {
    "id": 2267,
    "topicId": 2,
    "question": "Qual é a expressão matemática da Lei Fundamental da Elasticidade de Hooke para uma mola (Slide 41)?",
    "options": [
      "F = k / Δx (a força elástica é a razão entre a constante elástica e a deformação).",
      "F = k + Δx (a força elástica é a soma da constante com o alongamento).",
      "F = m · a (a força elástica é a massa multiplicada pela aceleração).",
      "F = k · Δx (a força elástica é igual à constante elástica multiplicada pela deformação absoluta)."
    ],
    "correctIndex": 3,
    "explanation": "A Lei de Hooke para molas estabelece que a força restauradora é proporcional à deformação absoluta: F = k · Δx.",
    "distractorAnalysis": [
      "Está incorreta: Dividir a constante pela deformação (k / Δx) viola a linearidade dimensional da Lei de Hooke.",
      "Está incorreta: Somar uma constante em N/m com uma distância em metros viola a homogeneidade dimensional.",
      "Está incorreta: F = m·a é a 2ª Lei de Newton da dinâmica, não a Lei de Hooke da elasticidade linear."
    ],
    "nursingApplication": "Fórmula de base para o funcionamento de dinamómetros e balanças de mola utilizadas no hospital."
  },
  {
    "id": 2268,
    "topicId": 2,
    "question": "Se uma mola tem uma constante elástica k = 70 N/m e sofre um alongamento de 0.03 m, qual é a força exercida pela mola?",
    "options": [
      "2.1 N.",
      "2333.33 N.",
      "70.03 N.",
      "2.1 kg."
    ],
    "correctIndex": 0,
    "explanation": "Pela Lei de Hooke: F = k · Δx = 70 N/m · 0.03 m = 2.1 N.",
    "distractorAnalysis": [
      "Está incorreta: Dividiu a constante elástica pelo alongamento em vez de multiplicar (F = k · Δx).",
      "Está incorreta: Somou a constante com o alongamento, operação dimensionalmente incorreta.",
      "Está incorreta: A força elástica mede-se em Newtons (N) e não em quilogramas (kg)."
    ],
    "nursingApplication": "Permite calcular a força exercida por uma mola de tração calibrada em ortopedia."
  },
  {
    "id": 2269,
    "topicId": 2,
    "question": "Se uma força de 3.2 N provocar um alongamento de 0.04 m numa mola elástica, qual é a sua constante elástica k?",
    "options": [
      "0.128 N/m.",
      "80 N/m.",
      "0.0125 N/m.",
      "80 N."
    ],
    "correctIndex": 1,
    "explanation": "Pela Lei de Hooke, k = F / Δx: 3.2 N / 0.04 m = 80 N/m.",
    "distractorAnalysis": [
      "Está incorreta: Multiplicou a força pela deformação em vez de dividir (k = F / Δx).",
      "Está incorreta: Inverteu a razão dividindo a deformação pela força (Δx / F = 1/k).",
      "Está incorreta: A constante elástica mede-se em Newton por metro (N/m), e não em Newtons (N)."
    ],
    "nursingApplication": "A constante elástica mede a rigidez da mola: quanto maior o k, mais rígida é a mola."
  },
  {
    "id": 2270,
    "topicId": 2,
    "question": "No Sistema Internacional (SI), qual é a unidade correta da Constante Elástica (k) de uma mola?",
    "options": [
      "Joule por segundo (J/s).",
      "Pascal por metro cúbico (Pa/m³).",
      "Newton por metro (N/m).",
      "Quilograma por segundo ao quadrado (kg/s²), que equivale dimensionalmente a N/m."
    ],
    "correctIndex": 2,
    "explanation": "Como k = F / Δx, a unidade no SI é o Newton dividido pelo metro: N/m (ou kg/s² na análise dimensional base).",
    "distractorAnalysis": [
      "Está incorreta: Joule por segundo (J/s) corresponde a Watt (W), unidade de potência mecânica.",
      "Está incorreta: Pascal por metro cúbico não tem significado físico de constante de rigidez de mola.",
      "Está incorreta: Embora kg/s² seja dimensionalmente equivalente, no contexto de elasticidade a forma canónica é N/m."
    ],
    "nursingApplication": "Distingue a constante de rigidez da mola (N/m) da força elástica resultante (N)."
  },
  {
    "id": 2271,
    "topicId": 2,
    "question": "O que traduz fisicamente uma Constante Elástica (k) de valor muito elevado numa mola?",
    "options": [
      "A mola é extremamente mole e estica-se infinitamente com forças quase impercetíveis.",
      "A mola perdeu todas as suas propriedades elásticas e transformou-se em líquido viscoso.",
      "A mola repele a gravidade terrestre e flutua no ar à temperatura ambiente.",
      "A mola é muito rígida, exigindo forças elevadas para produzir pequenos alongamentos."
    ],
    "correctIndex": 3,
    "explanation": "Maior constante k significa maior rigidez mecânica: são necessários mais Newtons por cada metro de deformação.",
    "distractorAnalysis": [
      "Está incorreta: Molas moles e flexíveis têm constantes elásticas k baixas, e não elevadas.",
      "Está incorreta: A constante k elevada não transforma o sólido metálico num fluido viscoso.",
      "Está incorreta: Molas com k elevado continuam sujeitas à atração gravitacional proporcional à sua massa."
    ],
    "nursingApplication": "Molas de alta rigidez são usadas em camas e macas para suportar cargas elevadas sem ceder em excesso."
  },
  {
    "id": 2272,
    "topicId": 2,
    "question": "De acordo com a Lei de Hooke (F = k·Δx), se a força aplicada sobre uma mola triplicar dentro do regime elástico, a deformação:",
    "options": [
      "Triplica na mesma proporção.",
      "Reduz-se para um terço.",
      "Permanece exatamente igual.",
      "Anula-se por completo."
    ],
    "correctIndex": 0,
    "explanation": "Como Δx = F / k, a deformação é diretamente proporcional à força aplicada. Triplicando a força, a deformação triplica.",
    "distractorAnalysis": [
      "Está incorreta: A deformação só se reduziria a um terço se a força fosse dividida por três.",
      "Está incorreta: A deformação varia linearmente com a força e não permanece inalterada.",
      "Está incorreta: A deformação só seria nula se a força aplicada fosse retirada (F = 0)."
    ],
    "nursingApplication": "Demonstra a proporcionalidade direta que permite usar molas para criar escalas de medição linear."
  },
  {
    "id": 2273,
    "topicId": 2,
    "question": "Porque é que a constante elástica k de uma mola 'apenas se aplica aos corpos com tamanho e espessura definidos' (Slide 42)?",
    "options": [
      "Porque as molas reais não possuem massa inercial mensurável no Sistema Internacional.",
      "Porque o valor de k depende tanto do material de que a mola é feita como das suas dimensões geométricas específicas (comprimento e diâmetro).",
      "Porque a Lei de Hooke foi revogada pela mecânica quântica para corpos com espessura variável.",
      "Porque as molas só operam quando a gravidade da Terra é rigorosamente nula."
    ],
    "correctIndex": 1,
    "explanation": "A rigidez k de um objeto particular depende do Módulo de Young do material E, da área de secção e do comprimento inicial da mola.",
    "distractorAnalysis": [
      "Está incorreta: Molas metálicas têm massa inercial real e mensurável em quilogramas.",
      "Está incorreta: A Lei de Hooke continua plenamente válida e central na mecânica clássica dos materiais elásticos.",
      "Está incorreta: A Lei de Hooke não exige gravidade nula; funciona perfeitamente à superfície da Terra."
    ],
    "nursingApplication": "Explica por que duas molas do mesmo aço podem ter constantes k diferentes se tiverem espessuras diferentes."
  },
  {
    "id": 2274,
    "topicId": 2,
    "question": "Qual foi a célebre frase em latim formulada por Robert Hooke em 1660 para enunciar a Lei da Elasticidade (Slide 40)?",
    "options": [
      "\"Cogito, ergo sum\" (\"Penso, logo existo\").",
      "\"Alea iacta est\" (\"A sorte está lançada\").",
      "\"Ut tensio, sic vis\" (\"Como a extensão, assim a força\").",
      "\"Carpe diem, quam minimum credula postero\" (\"Aproveita o dia\")."
    ],
    "correctIndex": 2,
    "explanation": "Hooke publicou 'Ut tensio, sic vis' para expressar que a força elástica exercida é proporcional à extensão provocada.",
    "distractorAnalysis": [
      "Está incorreta: 'Cogito, ergo sum' é o princípio filosófico de René Descartes, alheio à elasticidade dos materiais.",
      "Está incorreta: 'Alea iacta est' é a famosa frase de Júlio César ao atravessar o rio Rubicão.",
      "Está incorreta: 'Carpe diem' é uma ode poética do poeta romano Horácio sem relação com física mecânica."
    ],
    "nursingApplication": "Citação histórica lecionada no programa curricular dos slides de Biofísica de Paulo Pereira."
  },
  {
    "id": 2275,
    "topicId": 2,
    "question": "Qual é a expressão matemática da Lei Fundamental da Elasticidade de Hooke para uma mola (Slide 41)?",
    "options": [
      "F = k / Δx (a força elástica é a razão entre a constante elástica e a deformação).",
      "F = k + Δx (a força elástica é a soma da constante com o alongamento).",
      "F = m · a (a força elástica é a massa multiplicada pela aceleração).",
      "F = k · Δx (a força elástica é igual à constante elástica multiplicada pela deformação absoluta)."
    ],
    "correctIndex": 3,
    "explanation": "A Lei de Hooke para molas estabelece que a força restauradora é proporcional à deformação absoluta: F = k · Δx.",
    "distractorAnalysis": [
      "Está incorreta: Dividir a constante pela deformação (k / Δx) viola a linearidade dimensional da Lei de Hooke.",
      "Está incorreta: Somar uma constante em N/m com uma distância em metros viola a homogeneidade dimensional.",
      "Está incorreta: F = m·a é a 2ª Lei de Newton da dinâmica, não a Lei de Hooke da elasticidade linear."
    ],
    "nursingApplication": "Fórmula de base para o funcionamento de dinamómetros e balanças de mola utilizadas no hospital."
  },
  {
    "id": 2276,
    "topicId": 2,
    "question": "Se uma mola tem uma constante elástica k = 150 N/m e sofre um alongamento de 0.03 m, qual é a força exercida pela mola?",
    "options": [
      "4.5 N.",
      "5000.0 N.",
      "150.03 N.",
      "4.5 kg."
    ],
    "correctIndex": 0,
    "explanation": "Pela Lei de Hooke: F = k · Δx = 150 N/m · 0.03 m = 4.5 N.",
    "distractorAnalysis": [
      "Está incorreta: Dividiu a constante elástica pelo alongamento em vez de multiplicar (F = k · Δx).",
      "Está incorreta: Somou a constante com o alongamento, operação dimensionalmente incorreta.",
      "Está incorreta: A força elástica mede-se em Newtons (N) e não em quilogramas (kg)."
    ],
    "nursingApplication": "Permite calcular a força exercida por uma mola de tração calibrada em ortopedia."
  },
  {
    "id": 2277,
    "topicId": 2,
    "question": "Se uma força de 6.4 N provocar um alongamento de 0.04 m numa mola elástica, qual é a sua constante elástica k?",
    "options": [
      "0.256 N/m.",
      "160 N/m.",
      "0.0062 N/m.",
      "160 N."
    ],
    "correctIndex": 1,
    "explanation": "Pela Lei de Hooke, k = F / Δx: 6.4 N / 0.04 m = 160 N/m.",
    "distractorAnalysis": [
      "Está incorreta: Multiplicou a força pela deformação em vez de dividir (k = F / Δx).",
      "Está incorreta: Inverteu a razão dividindo a deformação pela força (Δx / F = 1/k).",
      "Está incorreta: A constante elástica mede-se em Newton por metro (N/m), e não em Newtons (N)."
    ],
    "nursingApplication": "A constante elástica mede a rigidez da mola: quanto maior o k, mais rígida é a mola."
  },
  {
    "id": 2278,
    "topicId": 2,
    "question": "No Sistema Internacional (SI), qual é a unidade correta da Constante Elástica (k) de uma mola?",
    "options": [
      "Joule por segundo (J/s).",
      "Pascal por metro cúbico (Pa/m³).",
      "Newton por metro (N/m).",
      "Quilograma por segundo ao quadrado (kg/s²), que equivale dimensionalmente a N/m."
    ],
    "correctIndex": 2,
    "explanation": "Como k = F / Δx, a unidade no SI é o Newton dividido pelo metro: N/m (ou kg/s² na análise dimensional base).",
    "distractorAnalysis": [
      "Está incorreta: Joule por segundo (J/s) corresponde a Watt (W), unidade de potência mecânica.",
      "Está incorreta: Pascal por metro cúbico não tem significado físico de constante de rigidez de mola.",
      "Está incorreta: Embora kg/s² seja dimensionalmente equivalente, no contexto de elasticidade a forma canónica é N/m."
    ],
    "nursingApplication": "Distingue a constante de rigidez da mola (N/m) da força elástica resultante (N)."
  },
  {
    "id": 2279,
    "topicId": 2,
    "question": "O que traduz fisicamente uma Constante Elástica (k) de valor muito elevado numa mola?",
    "options": [
      "A mola é extremamente mole e estica-se infinitamente com forças quase impercetíveis.",
      "A mola perdeu todas as suas propriedades elásticas e transformou-se em líquido viscoso.",
      "A mola repele a gravidade terrestre e flutua no ar à temperatura ambiente.",
      "A mola é muito rígida, exigindo forças elevadas para produzir pequenos alongamentos."
    ],
    "correctIndex": 3,
    "explanation": "Maior constante k significa maior rigidez mecânica: são necessários mais Newtons por cada metro de deformação.",
    "distractorAnalysis": [
      "Está incorreta: Molas moles e flexíveis têm constantes elásticas k baixas, e não elevadas.",
      "Está incorreta: A constante k elevada não transforma o sólido metálico num fluido viscoso.",
      "Está incorreta: Molas com k elevado continuam sujeitas à atração gravitacional proporcional à sua massa."
    ],
    "nursingApplication": "Molas de alta rigidez são usadas em camas e macas para suportar cargas elevadas sem ceder em excesso."
  },
  {
    "id": 2280,
    "topicId": 2,
    "question": "De acordo com a Lei de Hooke (F = k·Δx), se a força aplicada sobre uma mola triplicar dentro do regime elástico, a deformação:",
    "options": [
      "Triplica na mesma proporção.",
      "Reduz-se para um terço.",
      "Permanece exatamente igual.",
      "Anula-se por completo."
    ],
    "correctIndex": 0,
    "explanation": "Como Δx = F / k, a deformação é diretamente proporcional à força aplicada. Triplicando a força, a deformação triplica.",
    "distractorAnalysis": [
      "Está incorreta: A deformação só se reduziria a um terço se a força fosse dividida por três.",
      "Está incorreta: A deformação varia linearmente com a força e não permanece inalterada.",
      "Está incorreta: A deformação só seria nula se a força aplicada fosse retirada (F = 0)."
    ],
    "nursingApplication": "Demonstra a proporcionalidade direta que permite usar molas para criar escalas de medição linear."
  },
  {
    "id": 2281,
    "topicId": 2,
    "question": "Porque é que a constante elástica k de uma mola 'apenas se aplica aos corpos com tamanho e espessura definidos' (Slide 42)?",
    "options": [
      "Porque as molas reais não possuem massa inercial mensurável no Sistema Internacional.",
      "Porque o valor de k depende tanto do material de que a mola é feita como das suas dimensões geométricas específicas (comprimento e diâmetro).",
      "Porque a Lei de Hooke foi revogada pela mecânica quântica para corpos com espessura variável.",
      "Porque as molas só operam quando a gravidade da Terra é rigorosamente nula."
    ],
    "correctIndex": 1,
    "explanation": "A rigidez k de um objeto particular depende do Módulo de Young do material E, da área de secção e do comprimento inicial da mola.",
    "distractorAnalysis": [
      "Está incorreta: Molas metálicas têm massa inercial real e mensurável em quilogramas.",
      "Está incorreta: A Lei de Hooke continua plenamente válida e central na mecânica clássica dos materiais elásticos.",
      "Está incorreta: A Lei de Hooke não exige gravidade nula; funciona perfeitamente à superfície da Terra."
    ],
    "nursingApplication": "Explica por que duas molas do mesmo aço podem ter constantes k diferentes se tiverem espessuras diferentes."
  },
  {
    "id": 2282,
    "topicId": 2,
    "question": "Qual foi a célebre frase em latim formulada por Robert Hooke em 1660 para enunciar a Lei da Elasticidade (Slide 40)?",
    "options": [
      "\"Cogito, ergo sum\" (\"Penso, logo existo\").",
      "\"Alea iacta est\" (\"A sorte está lançada\").",
      "\"Ut tensio, sic vis\" (\"Como a extensão, assim a força\").",
      "\"Carpe diem, quam minimum credula postero\" (\"Aproveita o dia\")."
    ],
    "correctIndex": 2,
    "explanation": "Hooke publicou 'Ut tensio, sic vis' para expressar que a força elástica exercida é proporcional à extensão provocada.",
    "distractorAnalysis": [
      "Está incorreta: 'Cogito, ergo sum' é o princípio filosófico de René Descartes, alheio à elasticidade dos materiais.",
      "Está incorreta: 'Alea iacta est' é a famosa frase de Júlio César ao atravessar o rio Rubicão.",
      "Está incorreta: 'Carpe diem' é uma ode poética do poeta romano Horácio sem relação com física mecânica."
    ],
    "nursingApplication": "Citação histórica lecionada no programa curricular dos slides de Biofísica de Paulo Pereira."
  },
  {
    "id": 2283,
    "topicId": 2,
    "question": "Qual é a expressão matemática da Lei Fundamental da Elasticidade de Hooke para uma mola (Slide 41)?",
    "options": [
      "F = k / Δx (a força elástica é a razão entre a constante elástica e a deformação).",
      "F = k + Δx (a força elástica é a soma da constante com o alongamento).",
      "F = m · a (a força elástica é a massa multiplicada pela aceleração).",
      "F = k · Δx (a força elástica é igual à constante elástica multiplicada pela deformação absoluta)."
    ],
    "correctIndex": 3,
    "explanation": "A Lei de Hooke para molas estabelece que a força restauradora é proporcional à deformação absoluta: F = k · Δx.",
    "distractorAnalysis": [
      "Está incorreta: Dividir a constante pela deformação (k / Δx) viola a linearidade dimensional da Lei de Hooke.",
      "Está incorreta: Somar uma constante em N/m com uma distância em metros viola a homogeneidade dimensional.",
      "Está incorreta: F = m·a é a 2ª Lei de Newton da dinâmica, não a Lei de Hooke da elasticidade linear."
    ],
    "nursingApplication": "Fórmula de base para o funcionamento de dinamómetros e balanças de mola utilizadas no hospital."
  },
  {
    "id": 2284,
    "topicId": 2,
    "question": "Se uma mola tem uma constante elástica k = 80 N/m e sofre um alongamento de 0.03 m, qual é a força exercida pela mola?",
    "options": [
      "2.4 N.",
      "2666.67 N.",
      "80.03 N.",
      "2.4 kg."
    ],
    "correctIndex": 0,
    "explanation": "Pela Lei de Hooke: F = k · Δx = 80 N/m · 0.03 m = 2.4 N.",
    "distractorAnalysis": [
      "Está incorreta: Dividiu a constante elástica pelo alongamento em vez de multiplicar (F = k · Δx).",
      "Está incorreta: Somou a constante com o alongamento, operação dimensionalmente incorreta.",
      "Está incorreta: A força elástica mede-se em Newtons (N) e não em quilogramas (kg)."
    ],
    "nursingApplication": "Permite calcular a força exercida por uma mola de tração calibrada em ortopedia."
  },
  {
    "id": 2285,
    "topicId": 2,
    "question": "Se uma força de 3.6 N provocar um alongamento de 0.04 m numa mola elástica, qual é a sua constante elástica k?",
    "options": [
      "0.144 N/m.",
      "90 N/m.",
      "0.0111 N/m.",
      "90 N."
    ],
    "correctIndex": 1,
    "explanation": "Pela Lei de Hooke, k = F / Δx: 3.6 N / 0.04 m = 90 N/m.",
    "distractorAnalysis": [
      "Está incorreta: Multiplicou a força pela deformação em vez de dividir (k = F / Δx).",
      "Está incorreta: Inverteu a razão dividindo a deformação pela força (Δx / F = 1/k).",
      "Está incorreta: A constante elástica mede-se em Newton por metro (N/m), e não em Newtons (N)."
    ],
    "nursingApplication": "A constante elástica mede a rigidez da mola: quanto maior o k, mais rígida é a mola."
  },
  {
    "id": 2286,
    "topicId": 2,
    "question": "No Sistema Internacional (SI), qual é a unidade correta da Constante Elástica (k) de uma mola?",
    "options": [
      "Joule por segundo (J/s).",
      "Pascal por metro cúbico (Pa/m³).",
      "Newton por metro (N/m).",
      "Quilograma por segundo ao quadrado (kg/s²), que equivale dimensionalmente a N/m."
    ],
    "correctIndex": 2,
    "explanation": "Como k = F / Δx, a unidade no SI é o Newton dividido pelo metro: N/m (ou kg/s² na análise dimensional base).",
    "distractorAnalysis": [
      "Está incorreta: Joule por segundo (J/s) corresponde a Watt (W), unidade de potência mecânica.",
      "Está incorreta: Pascal por metro cúbico não tem significado físico de constante de rigidez de mola.",
      "Está incorreta: Embora kg/s² seja dimensionalmente equivalente, no contexto de elasticidade a forma canónica é N/m."
    ],
    "nursingApplication": "Distingue a constante de rigidez da mola (N/m) da força elástica resultante (N)."
  },
  {
    "id": 2287,
    "topicId": 2,
    "question": "O que traduz fisicamente uma Constante Elástica (k) de valor muito elevado numa mola?",
    "options": [
      "A mola é extremamente mole e estica-se infinitamente com forças quase impercetíveis.",
      "A mola perdeu todas as suas propriedades elásticas e transformou-se em líquido viscoso.",
      "A mola repele a gravidade terrestre e flutua no ar à temperatura ambiente.",
      "A mola é muito rígida, exigindo forças elevadas para produzir pequenos alongamentos."
    ],
    "correctIndex": 3,
    "explanation": "Maior constante k significa maior rigidez mecânica: são necessários mais Newtons por cada metro de deformação.",
    "distractorAnalysis": [
      "Está incorreta: Molas moles e flexíveis têm constantes elásticas k baixas, e não elevadas.",
      "Está incorreta: A constante k elevada não transforma o sólido metálico num fluido viscoso.",
      "Está incorreta: Molas com k elevado continuam sujeitas à atração gravitacional proporcional à sua massa."
    ],
    "nursingApplication": "Molas de alta rigidez são usadas em camas e macas para suportar cargas elevadas sem ceder em excesso."
  },
  {
    "id": 2288,
    "topicId": 2,
    "question": "De acordo com a Lei de Hooke (F = k·Δx), se a força aplicada sobre uma mola triplicar dentro do regime elástico, a deformação:",
    "options": [
      "Triplica na mesma proporção.",
      "Reduz-se para um terço.",
      "Permanece exatamente igual.",
      "Anula-se por completo."
    ],
    "correctIndex": 0,
    "explanation": "Como Δx = F / k, a deformação é diretamente proporcional à força aplicada. Triplicando a força, a deformação triplica.",
    "distractorAnalysis": [
      "Está incorreta: A deformação só se reduziria a um terço se a força fosse dividida por três.",
      "Está incorreta: A deformação varia linearmente com a força e não permanece inalterada.",
      "Está incorreta: A deformação só seria nula se a força aplicada fosse retirada (F = 0)."
    ],
    "nursingApplication": "Demonstra a proporcionalidade direta que permite usar molas para criar escalas de medição linear."
  },
  {
    "id": 2289,
    "topicId": 2,
    "question": "Porque é que a constante elástica k de uma mola 'apenas se aplica aos corpos com tamanho e espessura definidos' (Slide 42)?",
    "options": [
      "Porque as molas reais não possuem massa inercial mensurável no Sistema Internacional.",
      "Porque o valor de k depende tanto do material de que a mola é feita como das suas dimensões geométricas específicas (comprimento e diâmetro).",
      "Porque a Lei de Hooke foi revogada pela mecânica quântica para corpos com espessura variável.",
      "Porque as molas só operam quando a gravidade da Terra é rigorosamente nula."
    ],
    "correctIndex": 1,
    "explanation": "A rigidez k de um objeto particular depende do Módulo de Young do material E, da área de secção e do comprimento inicial da mola.",
    "distractorAnalysis": [
      "Está incorreta: Molas metálicas têm massa inercial real e mensurável em quilogramas.",
      "Está incorreta: A Lei de Hooke continua plenamente válida e central na mecânica clássica dos materiais elásticos.",
      "Está incorreta: A Lei de Hooke não exige gravidade nula; funciona perfeitamente à superfície da Terra."
    ],
    "nursingApplication": "Explica por que duas molas do mesmo aço podem ter constantes k diferentes se tiverem espessuras diferentes."
  },
  {
    "id": 2290,
    "topicId": 2,
    "question": "Qual foi a célebre frase em latim formulada por Robert Hooke em 1660 para enunciar a Lei da Elasticidade (Slide 40)?",
    "options": [
      "\"Cogito, ergo sum\" (\"Penso, logo existo\").",
      "\"Alea iacta est\" (\"A sorte está lançada\").",
      "\"Ut tensio, sic vis\" (\"Como a extensão, assim a força\").",
      "\"Carpe diem, quam minimum credula postero\" (\"Aproveita o dia\")."
    ],
    "correctIndex": 2,
    "explanation": "Hooke publicou 'Ut tensio, sic vis' para expressar que a força elástica exercida é proporcional à extensão provocada.",
    "distractorAnalysis": [
      "Está incorreta: 'Cogito, ergo sum' é o princípio filosófico de René Descartes, alheio à elasticidade dos materiais.",
      "Está incorreta: 'Alea iacta est' é a famosa frase de Júlio César ao atravessar o rio Rubicão.",
      "Está incorreta: 'Carpe diem' é uma ode poética do poeta romano Horácio sem relação com física mecânica."
    ],
    "nursingApplication": "Citação histórica lecionada no programa curricular dos slides de Biofísica de Paulo Pereira."
  },
  {
    "id": 2291,
    "topicId": 2,
    "question": "Qual é a expressão matemática da Lei Fundamental da Elasticidade de Hooke para uma mola (Slide 41)?",
    "options": [
      "F = k / Δx (a força elástica é a razão entre a constante elástica e a deformação).",
      "F = k + Δx (a força elástica é a soma da constante com o alongamento).",
      "F = m · a (a força elástica é a massa multiplicada pela aceleração).",
      "F = k · Δx (a força elástica é igual à constante elástica multiplicada pela deformação absoluta)."
    ],
    "correctIndex": 3,
    "explanation": "A Lei de Hooke para molas estabelece que a força restauradora é proporcional à deformação absoluta: F = k · Δx.",
    "distractorAnalysis": [
      "Está incorreta: Dividir a constante pela deformação (k / Δx) viola a linearidade dimensional da Lei de Hooke.",
      "Está incorreta: Somar uma constante em N/m com uma distância em metros viola a homogeneidade dimensional.",
      "Está incorreta: F = m·a é a 2ª Lei de Newton da dinâmica, não a Lei de Hooke da elasticidade linear."
    ],
    "nursingApplication": "Fórmula de base para o funcionamento de dinamómetros e balanças de mola utilizadas no hospital."
  },
  {
    "id": 2292,
    "topicId": 2,
    "question": "Se uma mola tem uma constante elástica k = 160 N/m e sofre um alongamento de 0.03 m, qual é a força exercida pela mola?",
    "options": [
      "4.8 N.",
      "5333.33 N.",
      "160.03 N.",
      "4.8 kg."
    ],
    "correctIndex": 0,
    "explanation": "Pela Lei de Hooke: F = k · Δx = 160 N/m · 0.03 m = 4.8 N.",
    "distractorAnalysis": [
      "Está incorreta: Dividiu a constante elástica pelo alongamento em vez de multiplicar (F = k · Δx).",
      "Está incorreta: Somou a constante com o alongamento, operação dimensionalmente incorreta.",
      "Está incorreta: A força elástica mede-se em Newtons (N) e não em quilogramas (kg)."
    ],
    "nursingApplication": "Permite calcular a força exercida por uma mola de tração calibrada em ortopedia."
  },
  {
    "id": 2293,
    "topicId": 2,
    "question": "Se uma força de 6.8 N provocar um alongamento de 0.04 m numa mola elástica, qual é a sua constante elástica k?",
    "options": [
      "0.272 N/m.",
      "170 N/m.",
      "0.0059 N/m.",
      "170 N."
    ],
    "correctIndex": 1,
    "explanation": "Pela Lei de Hooke, k = F / Δx: 6.8 N / 0.04 m = 170 N/m.",
    "distractorAnalysis": [
      "Está incorreta: Multiplicou a força pela deformação em vez de dividir (k = F / Δx).",
      "Está incorreta: Inverteu a razão dividindo a deformação pela força (Δx / F = 1/k).",
      "Está incorreta: A constante elástica mede-se em Newton por metro (N/m), e não em Newtons (N)."
    ],
    "nursingApplication": "A constante elástica mede a rigidez da mola: quanto maior o k, mais rígida é a mola."
  },
  {
    "id": 2294,
    "topicId": 2,
    "question": "No Sistema Internacional (SI), qual é a unidade correta da Constante Elástica (k) de uma mola?",
    "options": [
      "Joule por segundo (J/s).",
      "Pascal por metro cúbico (Pa/m³).",
      "Newton por metro (N/m).",
      "Quilograma por segundo ao quadrado (kg/s²), que equivale dimensionalmente a N/m."
    ],
    "correctIndex": 2,
    "explanation": "Como k = F / Δx, a unidade no SI é o Newton dividido pelo metro: N/m (ou kg/s² na análise dimensional base).",
    "distractorAnalysis": [
      "Está incorreta: Joule por segundo (J/s) corresponde a Watt (W), unidade de potência mecânica.",
      "Está incorreta: Pascal por metro cúbico não tem significado físico de constante de rigidez de mola.",
      "Está incorreta: Embora kg/s² seja dimensionalmente equivalente, no contexto de elasticidade a forma canónica é N/m."
    ],
    "nursingApplication": "Distingue a constante de rigidez da mola (N/m) da força elástica resultante (N)."
  },
  {
    "id": 2295,
    "topicId": 2,
    "question": "O que traduz fisicamente uma Constante Elástica (k) de valor muito elevado numa mola?",
    "options": [
      "A mola é extremamente mole e estica-se infinitamente com forças quase impercetíveis.",
      "A mola perdeu todas as suas propriedades elásticas e transformou-se em líquido viscoso.",
      "A mola repele a gravidade terrestre e flutua no ar à temperatura ambiente.",
      "A mola é muito rígida, exigindo forças elevadas para produzir pequenos alongamentos."
    ],
    "correctIndex": 3,
    "explanation": "Maior constante k significa maior rigidez mecânica: são necessários mais Newtons por cada metro de deformação.",
    "distractorAnalysis": [
      "Está incorreta: Molas moles e flexíveis têm constantes elásticas k baixas, e não elevadas.",
      "Está incorreta: A constante k elevada não transforma o sólido metálico num fluido viscoso.",
      "Está incorreta: Molas com k elevado continuam sujeitas à atração gravitacional proporcional à sua massa."
    ],
    "nursingApplication": "Molas de alta rigidez são usadas em camas e macas para suportar cargas elevadas sem ceder em excesso."
  },
  {
    "id": 2296,
    "topicId": 2,
    "question": "De acordo com a Lei de Hooke (F = k·Δx), se a força aplicada sobre uma mola triplicar dentro do regime elástico, a deformação:",
    "options": [
      "Triplica na mesma proporção.",
      "Reduz-se para um terço.",
      "Permanece exatamente igual.",
      "Anula-se por completo."
    ],
    "correctIndex": 0,
    "explanation": "Como Δx = F / k, a deformação é diretamente proporcional à força aplicada. Triplicando a força, a deformação triplica.",
    "distractorAnalysis": [
      "Está incorreta: A deformação só se reduziria a um terço se a força fosse dividida por três.",
      "Está incorreta: A deformação varia linearmente com a força e não permanece inalterada.",
      "Está incorreta: A deformação só seria nula se a força aplicada fosse retirada (F = 0)."
    ],
    "nursingApplication": "Demonstra a proporcionalidade direta que permite usar molas para criar escalas de medição linear."
  },
  {
    "id": 2297,
    "topicId": 2,
    "question": "Porque é que a constante elástica k de uma mola 'apenas se aplica aos corpos com tamanho e espessura definidos' (Slide 42)?",
    "options": [
      "Porque as molas reais não possuem massa inercial mensurável no Sistema Internacional.",
      "Porque o valor de k depende tanto do material de que a mola é feita como das suas dimensões geométricas específicas (comprimento e diâmetro).",
      "Porque a Lei de Hooke foi revogada pela mecânica quântica para corpos com espessura variável.",
      "Porque as molas só operam quando a gravidade da Terra é rigorosamente nula."
    ],
    "correctIndex": 1,
    "explanation": "A rigidez k de um objeto particular depende do Módulo de Young do material E, da área de secção e do comprimento inicial da mola.",
    "distractorAnalysis": [
      "Está incorreta: Molas metálicas têm massa inercial real e mensurável em quilogramas.",
      "Está incorreta: A Lei de Hooke continua plenamente válida e central na mecânica clássica dos materiais elásticos.",
      "Está incorreta: A Lei de Hooke não exige gravidade nula; funciona perfeitamente à superfície da Terra."
    ],
    "nursingApplication": "Explica por que duas molas do mesmo aço podem ter constantes k diferentes se tiverem espessuras diferentes."
  },
  {
    "id": 2298,
    "topicId": 2,
    "question": "Qual foi a célebre frase em latim formulada por Robert Hooke em 1660 para enunciar a Lei da Elasticidade (Slide 40)?",
    "options": [
      "\"Cogito, ergo sum\" (\"Penso, logo existo\").",
      "\"Alea iacta est\" (\"A sorte está lançada\").",
      "\"Ut tensio, sic vis\" (\"Como a extensão, assim a força\").",
      "\"Carpe diem, quam minimum credula postero\" (\"Aproveita o dia\")."
    ],
    "correctIndex": 2,
    "explanation": "Hooke publicou 'Ut tensio, sic vis' para expressar que a força elástica exercida é proporcional à extensão provocada.",
    "distractorAnalysis": [
      "Está incorreta: 'Cogito, ergo sum' é o princípio filosófico de René Descartes, alheio à elasticidade dos materiais.",
      "Está incorreta: 'Alea iacta est' é a famosa frase de Júlio César ao atravessar o rio Rubicão.",
      "Está incorreta: 'Carpe diem' é uma ode poética do poeta romano Horácio sem relação com física mecânica."
    ],
    "nursingApplication": "Citação histórica lecionada no programa curricular dos slides de Biofísica de Paulo Pereira."
  },
  {
    "id": 2299,
    "topicId": 2,
    "question": "Qual é a expressão matemática da Lei Fundamental da Elasticidade de Hooke para uma mola (Slide 41)?",
    "options": [
      "F = k / Δx (a força elástica é a razão entre a constante elástica e a deformação).",
      "F = k + Δx (a força elástica é a soma da constante com o alongamento).",
      "F = m · a (a força elástica é a massa multiplicada pela aceleração).",
      "F = k · Δx (a força elástica é igual à constante elástica multiplicada pela deformação absoluta)."
    ],
    "correctIndex": 3,
    "explanation": "A Lei de Hooke para molas estabelece que a força restauradora é proporcional à deformação absoluta: F = k · Δx.",
    "distractorAnalysis": [
      "Está incorreta: Dividir a constante pela deformação (k / Δx) viola a linearidade dimensional da Lei de Hooke.",
      "Está incorreta: Somar uma constante em N/m com uma distância em metros viola a homogeneidade dimensional.",
      "Está incorreta: F = m·a é a 2ª Lei de Newton da dinâmica, não a Lei de Hooke da elasticidade linear."
    ],
    "nursingApplication": "Fórmula de base para o funcionamento de dinamómetros e balanças de mola utilizadas no hospital."
  },
  {
    "id": 2300,
    "topicId": 2,
    "question": "Se uma mola tem uma constante elástica k = 90 N/m e sofre um alongamento de 0.03 m, qual é a força exercida pela mola?",
    "options": [
      "2.7 N.",
      "3000.0 N.",
      "90.03 N.",
      "2.7 kg."
    ],
    "correctIndex": 0,
    "explanation": "Pela Lei de Hooke: F = k · Δx = 90 N/m · 0.03 m = 2.7 N.",
    "distractorAnalysis": [
      "Está incorreta: Dividiu a constante elástica pelo alongamento em vez de multiplicar (F = k · Δx).",
      "Está incorreta: Somou a constante com o alongamento, operação dimensionalmente incorreta.",
      "Está incorreta: A força elástica mede-se em Newtons (N) e não em quilogramas (kg)."
    ],
    "nursingApplication": "Permite calcular a força exercida por uma mola de tração calibrada em ortopedia."
  },
  {
    "id": 2301,
    "topicId": 2,
    "question": "O que é a Tensão Mecânica (σ) na mecânica dos materiais elásticos (Slide 43)?",
    "options": [
      "O produto da massa do corpo pelo seu volume geométrico total no vácuo.",
      "A intensidade da força aplicada dividida pela área da secção transversal sobre a qual atua (σ = F / A).",
      "O tempo decorrido até que o corpo sofra fratura irreversível sob carga contínua.",
      "A variação relativa de temperatura molecular por segundo de atrito superficial."
    ],
    "correctIndex": 1,
    "explanation": "A tensão mecânica (σ) representa a concentração de força por unidade de área, expressa em Pascal (N/m²).",
    "distractorAnalysis": [
      "Está incorreta: Massa multiplicada por volume é uma grandeza sem significado físico direto na mecânica.",
      "Está incorreta: O tempo até à fratura mede a durabilidade à fadiga ou fluência, não a tensão instantânea.",
      "Está incorreta: Variação de temperatura é uma grandeza térmica, não a definição mecânica de tensão."
    ],
    "nursingApplication": "Conceito fundamental para avaliar a pressão e tensão que atuam sobre o tecido ósseo e apoios."
  },
  {
    "id": 2302,
    "topicId": 2,
    "question": "No Sistema Internacional (SI), qual é a unidade correta da Tensão Mecânica (σ)?",
    "options": [
      "Newton (N), equivalente a kg·m/s².",
      "Joule (J), equivalente a N·m.",
      "Pascal (Pa), equivalente a Newton por metro quadrado (N/m²).",
      "Quilograma por metro cúbico (kg/m³)."
    ],
    "correctIndex": 2,
    "explanation": "Como σ = F / A, mede-se em Newtons por metro quadrado (N/m²), cuja unidade equivalente é o Pascal (Pa).",
    "distractorAnalysis": [
      "Está incorreta: O Newton (N) mede a força pura total, e não a força distribuída por unidade de área transversal.",
      "Está incorreta: O Joule (J) é unidade de energia e trabalho mecânico, não de tensão mecânica.",
      "Está incorreta: kg/m³ é a unidade da densidade volumétrica de massa, não de tensão mecânica."
    ],
    "nursingApplication": "Grandes tensões mecânicas são frequentemente expressas em Megapascais (1 MPa = 10⁶ Pa)."
  },
  {
    "id": 2303,
    "topicId": 2,
    "question": "O que é a Deformação Relativa (ou Unitária, ε) de uma barra elástica?",
    "options": [
      "O produto da força aplicada pela área de secção transversal: F · A.",
      "A velocidade de propagação das ondas elásticas no vácuo em m/s.",
      "A massa total do corpo dividida pelo tempo de aplicação da carga em kg/s.",
      "A razão entre o alongamento absoluto (ΔL) e o comprimento inicial (L0) da barra: ε = ΔL / L0."
    ],
    "correctIndex": 3,
    "explanation": "A deformação relativa (ε = ΔL / L0) mede a percentagem ou fração de comprimento deformado em relação ao original.",
    "distractorAnalysis": [
      "Está incorreta: F · A não representa deformação; a tensão mecânica é F / A.",
      "Está incorreta: Velocidade de propagação é uma grandeza acústica cinemática em m/s.",
      "Está incorreta: Massa por tempo é caudal mássico em kg/s, sem relação com a deformação geométrica relativa."
    ],
    "nursingApplication": "Como é a razão entre dois comprimentos (m / m), a deformação relativa é uma grandeza adimensional."
  },
  {
    "id": 2304,
    "topicId": 2,
    "question": "Qual é a unidade de medida da Deformação Relativa (ε) no Sistema Internacional?",
    "options": [
      "É uma grandeza ADIMENSIONAL (não tem unidades físicas, podendo ser expressa em percentagem).",
      "Mede-se estritamente em Newtons por segundo quadrado (N/s²).",
      "Mede-se em Joules por quilograma cúbico (J/kg³).",
      "Mede-se obrigatoriamente em Pascal-segundo (Pa·s)."
    ],
    "correctIndex": 0,
    "explanation": "Como resulta da razão entre dois comprimentos em metros (ΔL / L0 = m / m), os metros cancelam-se, tornando ε adimensional.",
    "distractorAnalysis": [
      "Está incorreta: N/s² não é a unidade de deformação relativa; é dimensionalmente incompatível.",
      "Está incorreta: J/kg³ não é unidade física de deformação relativa.",
      "Está incorreta: Pascal-segundo (Pa·s) é a unidade de viscosidade dinâmica no SI, não de deformação."
    ],
    "nursingApplication": "Uma deformação relativa de 0,02 significa que o osso ou material alongou 2% em relação ao inicial."
  },
  {
    "id": 2305,
    "topicId": 2,
    "question": "Qual é o enunciado da Lei de Hooke Generalizada para materiais sob tensão elástica (Slide 43)?",
    "options": [
      "σ = E / ε (a tensão é a razão entre o Módulo de Young e a deformação).",
      "σ = E · ε (a tensão mecânica é igual ao Módulo de Young multiplicado pela deformação relativa).",
      "σ = E + ε (a tensão é a soma do Módulo de Young com a deformação).",
      "σ = m · g (a tensão é o produto da massa pela aceleração gravítica)."
    ],
    "correctIndex": 1,
    "explanation": "A Lei de Hooke generalizada para sólidos estabelece a proporcionalidade linear entre tensão e deformação: σ = E · ε.",
    "distractorAnalysis": [
      "Está incorreta: Dividir o Módulo pela deformação (E / ε) inverte a proporcionalidade direta da elasticidade linear.",
      "Está incorreta: Somar uma grandeza com unidades de pressão (E em Pa) com uma grandeza adimensional (ε) viola a homogeneidade.",
      "Está incorreta: m · g é a fórmula da força peso gravitacional, não a Lei de Hooke generalizada da elasticidade."
    ],
    "nursingApplication": "Equação mestra utilizada para prever a deformação sofrida por materiais biológicos e implantes."
  },
  {
    "id": 2306,
    "topicId": 2,
    "question": "O que mede e representa o Módulo de Young (E) na física dos materiais?",
    "options": [
      "A quantidade total de átomos pesados contidos no núcleo de um miligrama de material.",
      "A velocidade com que um corpo atinge o equilíbrio térmico no interior de um forno.",
      "A rigidez intrínseca de um material perante forças de tração e compressão longitudinal (E = σ / ε).",
      "A permeabilidade magnética relativa do vácuo no sistema eletrostático de unidades."
    ],
    "correctIndex": 2,
    "explanation": "O Módulo de Young mede a oposição de um material a sofrer deformação elástica longitudinal: quanto maior o E, mais rígido o material.",
    "distractorAnalysis": [
      "Está incorreta: Quantidade de átomos no núcleo é número de massa atómica, sem relação com elasticidade mecânica.",
      "Está incorreta: Velocidade de equilíbrio térmico é condutividade e difusividade térmica em termodinâmica.",
      "Está incorreta: Permeabilidade do vácuo é uma constante eletromagnética (μ0), não o módulo elástico de um sólido."
    ],
    "nursingApplication": "Permite comparar a rigidez intrínseca do aço com a do osso e da borracha independentemente do formato."
  },
  {
    "id": 2307,
    "topicId": 2,
    "question": "Uma força de tração de 2000 N é aplicada a uma barra cilíndrica de área de secção transversal igual a 0,001 m² (10 cm²). Qual é a tensão mecânica σ suportada pela barra?",
    "options": [
      "2 Pa.",
      "200 000 Pa.",
      "20 000 N.",
      "2 000 000 Pa (2 MPa)."
    ],
    "correctIndex": 3,
    "explanation": "Pela definição de tensão mecânica: σ = F / A = 2000 N / 0,001 m² = 2 000 000 N/m² = 2 MPa.",
    "distractorAnalysis": [
      "Está incorreta: 2 Pa resultaria de dividir 2000 por 1000 de forma incorreta sem respeitar a área dada.",
      "Está incorreta: 200 000 Pa corresponderia a uma área de 0,01 m², e não 0,001 m².",
      "Está incorreta: A tensão mecânica mede-se em Pascal (Pa) ou N/m², e não em Newtons (N)."
    ],
    "nursingApplication": "Cálculo prático para verificar se a tensão aplicada permanece abaixo do limite de segurança do material."
  },
  {
    "id": 2308,
    "topicId": 2,
    "question": "Se uma barra de osso de 0,5 m de comprimento inicial sofrer um alongamento de 0,001 m sob tração, qual é a sua deformação relativa ε?",
    "options": [
      "0,002 (ou 0,2%).",
      "0,0005 m.",
      "2 m.",
      "500 Pa."
    ],
    "correctIndex": 0,
    "explanation": "Pela definição de deformação relativa: ε = ΔL / L0 = 0,001 m / 0,5 m = 0,002 (que equivale a 0,2%).",
    "distractorAnalysis": [
      "Está incorreta: 0,0005 m é a multiplicação dos valores em vez da divisão, além de ter unidade de metros.",
      "Está incorreta: 2 m é a razão inversa (L0 / ΔL) com unidades de metros, o que está dimensionalmente errado.",
      "Está incorreta: A deformação relativa é adimensional e não tem unidade de Pascal (Pa), que é unidade de tensão."
    ],
    "nursingApplication": "Demonstra como calcular a percentagem de deformação de um segmento ósseo sob carga."
  },
  {
    "id": 2309,
    "topicId": 2,
    "question": "O que é a Tensão Mecânica (σ) na mecânica dos materiais elásticos (Slide 43)?",
    "options": [
      "O produto da massa do corpo pelo seu volume geométrico total no vácuo.",
      "A intensidade da força aplicada dividida pela área da secção transversal sobre a qual atua (σ = F / A).",
      "O tempo decorrido até que o corpo sofra fratura irreversível sob carga contínua.",
      "A variação relativa de temperatura molecular por segundo de atrito superficial."
    ],
    "correctIndex": 1,
    "explanation": "A tensão mecânica (σ) representa a concentração de força por unidade de área, expressa em Pascal (N/m²).",
    "distractorAnalysis": [
      "Está incorreta: Massa multiplicada por volume é uma grandeza sem significado físico direto na mecânica.",
      "Está incorreta: O tempo até à fratura mede a durabilidade à fadiga ou fluência, não a tensão instantânea.",
      "Está incorreta: Variação de temperatura é uma grandeza térmica, não a definição mecânica de tensão."
    ],
    "nursingApplication": "Conceito fundamental para avaliar a pressão e tensão que atuam sobre o tecido ósseo e apoios."
  },
  {
    "id": 2310,
    "topicId": 2,
    "question": "No Sistema Internacional (SI), qual é a unidade correta da Tensão Mecânica (σ)?",
    "options": [
      "Newton (N), equivalente a kg·m/s².",
      "Joule (J), equivalente a N·m.",
      "Pascal (Pa), equivalente a Newton por metro quadrado (N/m²).",
      "Quilograma por metro cúbico (kg/m³)."
    ],
    "correctIndex": 2,
    "explanation": "Como σ = F / A, mede-se em Newtons por metro quadrado (N/m²), cuja unidade equivalente é o Pascal (Pa).",
    "distractorAnalysis": [
      "Está incorreta: O Newton (N) mede a força pura total, e não a força distribuída por unidade de área transversal.",
      "Está incorreta: O Joule (J) é unidade de energia e trabalho mecânico, não de tensão mecânica.",
      "Está incorreta: kg/m³ é a unidade da densidade volumétrica de massa, não de tensão mecânica."
    ],
    "nursingApplication": "Grandes tensões mecânicas são frequentemente expressas em Megapascais (1 MPa = 10⁶ Pa)."
  },
  {
    "id": 2311,
    "topicId": 2,
    "question": "O que é a Deformação Relativa (ou Unitária, ε) de uma barra elástica?",
    "options": [
      "O produto da força aplicada pela área de secção transversal: F · A.",
      "A velocidade de propagação das ondas elásticas no vácuo em m/s.",
      "A massa total do corpo dividida pelo tempo de aplicação da carga em kg/s.",
      "A razão entre o alongamento absoluto (ΔL) e o comprimento inicial (L0) da barra: ε = ΔL / L0."
    ],
    "correctIndex": 3,
    "explanation": "A deformação relativa (ε = ΔL / L0) mede a percentagem ou fração de comprimento deformado em relação ao original.",
    "distractorAnalysis": [
      "Está incorreta: F · A não representa deformação; a tensão mecânica é F / A.",
      "Está incorreta: Velocidade de propagação é uma grandeza acústica cinemática em m/s.",
      "Está incorreta: Massa por tempo é caudal mássico em kg/s, sem relação com a deformação geométrica relativa."
    ],
    "nursingApplication": "Como é a razão entre dois comprimentos (m / m), a deformação relativa é uma grandeza adimensional."
  },
  {
    "id": 2312,
    "topicId": 2,
    "question": "Qual é a unidade de medida da Deformação Relativa (ε) no Sistema Internacional?",
    "options": [
      "É uma grandeza ADIMENSIONAL (não tem unidades físicas, podendo ser expressa em percentagem).",
      "Mede-se estritamente em Newtons por segundo quadrado (N/s²).",
      "Mede-se em Joules por quilograma cúbico (J/kg³).",
      "Mede-se obrigatoriamente em Pascal-segundo (Pa·s)."
    ],
    "correctIndex": 0,
    "explanation": "Como resulta da razão entre dois comprimentos em metros (ΔL / L0 = m / m), os metros cancelam-se, tornando ε adimensional.",
    "distractorAnalysis": [
      "Está incorreta: N/s² não é a unidade de deformação relativa; é dimensionalmente incompatível.",
      "Está incorreta: J/kg³ não é unidade física de deformação relativa.",
      "Está incorreta: Pascal-segundo (Pa·s) é a unidade de viscosidade dinâmica no SI, não de deformação."
    ],
    "nursingApplication": "Uma deformação relativa de 0,02 significa que o osso ou material alongou 2% em relação ao inicial."
  },
  {
    "id": 2313,
    "topicId": 2,
    "question": "Qual é o enunciado da Lei de Hooke Generalizada para materiais sob tensão elástica (Slide 43)?",
    "options": [
      "σ = E / ε (a tensão é a razão entre o Módulo de Young e a deformação).",
      "σ = E · ε (a tensão mecânica é igual ao Módulo de Young multiplicado pela deformação relativa).",
      "σ = E + ε (a tensão é a soma do Módulo de Young com a deformação).",
      "σ = m · g (a tensão é o produto da massa pela aceleração gravítica)."
    ],
    "correctIndex": 1,
    "explanation": "A Lei de Hooke generalizada para sólidos estabelece a proporcionalidade linear entre tensão e deformação: σ = E · ε.",
    "distractorAnalysis": [
      "Está incorreta: Dividir o Módulo pela deformação (E / ε) inverte a proporcionalidade direta da elasticidade linear.",
      "Está incorreta: Somar uma grandeza com unidades de pressão (E em Pa) com uma grandeza adimensional (ε) viola a homogeneidade.",
      "Está incorreta: m · g é a fórmula da força peso gravitacional, não a Lei de Hooke generalizada da elasticidade."
    ],
    "nursingApplication": "Equação mestra utilizada para prever a deformação sofrida por materiais biológicos e implantes."
  },
  {
    "id": 2314,
    "topicId": 2,
    "question": "O que mede e representa o Módulo de Young (E) na física dos materiais?",
    "options": [
      "A quantidade total de átomos pesados contidos no núcleo de um miligrama de material.",
      "A velocidade com que um corpo atinge o equilíbrio térmico no interior de um forno.",
      "A rigidez intrínseca de um material perante forças de tração e compressão longitudinal (E = σ / ε).",
      "A permeabilidade magnética relativa do vácuo no sistema eletrostático de unidades."
    ],
    "correctIndex": 2,
    "explanation": "O Módulo de Young mede a oposição de um material a sofrer deformação elástica longitudinal: quanto maior o E, mais rígido o material.",
    "distractorAnalysis": [
      "Está incorreta: Quantidade de átomos no núcleo é número de massa atómica, sem relação com elasticidade mecânica.",
      "Está incorreta: Velocidade de equilíbrio térmico é condutividade e difusividade térmica em termodinâmica.",
      "Está incorreta: Permeabilidade do vácuo é uma constante eletromagnética (μ0), não o módulo elástico de um sólido."
    ],
    "nursingApplication": "Permite comparar a rigidez intrínseca do aço com a do osso e da borracha independentemente do formato."
  },
  {
    "id": 2315,
    "topicId": 2,
    "question": "Uma força de tração de 2000 N é aplicada a uma barra cilíndrica de área de secção transversal igual a 0,001 m² (10 cm²). Qual é a tensão mecânica σ suportada pela barra?",
    "options": [
      "2 Pa.",
      "200 000 Pa.",
      "20 000 N.",
      "2 000 000 Pa (2 MPa)."
    ],
    "correctIndex": 3,
    "explanation": "Pela definição de tensão mecânica: σ = F / A = 2000 N / 0,001 m² = 2 000 000 N/m² = 2 MPa.",
    "distractorAnalysis": [
      "Está incorreta: 2 Pa resultaria de dividir 2000 por 1000 de forma incorreta sem respeitar a área dada.",
      "Está incorreta: 200 000 Pa corresponderia a uma área de 0,01 m², e não 0,001 m².",
      "Está incorreta: A tensão mecânica mede-se em Pascal (Pa) ou N/m², e não em Newtons (N)."
    ],
    "nursingApplication": "Cálculo prático para verificar se a tensão aplicada permanece abaixo do limite de segurança do material."
  },
  {
    "id": 2316,
    "topicId": 2,
    "question": "Se uma barra de osso de 0,5 m de comprimento inicial sofrer um alongamento de 0,001 m sob tração, qual é a sua deformação relativa ε?",
    "options": [
      "0,002 (ou 0,2%).",
      "0,0005 m.",
      "2 m.",
      "500 Pa."
    ],
    "correctIndex": 0,
    "explanation": "Pela definição de deformação relativa: ε = ΔL / L0 = 0,001 m / 0,5 m = 0,002 (que equivale a 0,2%).",
    "distractorAnalysis": [
      "Está incorreta: 0,0005 m é a multiplicação dos valores em vez da divisão, além de ter unidade de metros.",
      "Está incorreta: 2 m é a razão inversa (L0 / ΔL) com unidades de metros, o que está dimensionalmente errado.",
      "Está incorreta: A deformação relativa é adimensional e não tem unidade de Pascal (Pa), que é unidade de tensão."
    ],
    "nursingApplication": "Demonstra como calcular a percentagem de deformação de um segmento ósseo sob carga."
  },
  {
    "id": 2317,
    "topicId": 2,
    "question": "O que é a Tensão Mecânica (σ) na mecânica dos materiais elásticos (Slide 43)?",
    "options": [
      "O produto da massa do corpo pelo seu volume geométrico total no vácuo.",
      "A intensidade da força aplicada dividida pela área da secção transversal sobre a qual atua (σ = F / A).",
      "O tempo decorrido até que o corpo sofra fratura irreversível sob carga contínua.",
      "A variação relativa de temperatura molecular por segundo de atrito superficial."
    ],
    "correctIndex": 1,
    "explanation": "A tensão mecânica (σ) representa a concentração de força por unidade de área, expressa em Pascal (N/m²).",
    "distractorAnalysis": [
      "Está incorreta: Massa multiplicada por volume é uma grandeza sem significado físico direto na mecânica.",
      "Está incorreta: O tempo até à fratura mede a durabilidade à fadiga ou fluência, não a tensão instantânea.",
      "Está incorreta: Variação de temperatura é uma grandeza térmica, não a definição mecânica de tensão."
    ],
    "nursingApplication": "Conceito fundamental para avaliar a pressão e tensão que atuam sobre o tecido ósseo e apoios."
  },
  {
    "id": 2318,
    "topicId": 2,
    "question": "No Sistema Internacional (SI), qual é a unidade correta da Tensão Mecânica (σ)?",
    "options": [
      "Newton (N), equivalente a kg·m/s².",
      "Joule (J), equivalente a N·m.",
      "Pascal (Pa), equivalente a Newton por metro quadrado (N/m²).",
      "Quilograma por metro cúbico (kg/m³)."
    ],
    "correctIndex": 2,
    "explanation": "Como σ = F / A, mede-se em Newtons por metro quadrado (N/m²), cuja unidade equivalente é o Pascal (Pa).",
    "distractorAnalysis": [
      "Está incorreta: O Newton (N) mede a força pura total, e não a força distribuída por unidade de área transversal.",
      "Está incorreta: O Joule (J) é unidade de energia e trabalho mecânico, não de tensão mecânica.",
      "Está incorreta: kg/m³ é a unidade da densidade volumétrica de massa, não de tensão mecânica."
    ],
    "nursingApplication": "Grandes tensões mecânicas são frequentemente expressas em Megapascais (1 MPa = 10⁶ Pa)."
  },
  {
    "id": 2319,
    "topicId": 2,
    "question": "O que é a Deformação Relativa (ou Unitária, ε) de uma barra elástica?",
    "options": [
      "O produto da força aplicada pela área de secção transversal: F · A.",
      "A velocidade de propagação das ondas elásticas no vácuo em m/s.",
      "A massa total do corpo dividida pelo tempo de aplicação da carga em kg/s.",
      "A razão entre o alongamento absoluto (ΔL) e o comprimento inicial (L0) da barra: ε = ΔL / L0."
    ],
    "correctIndex": 3,
    "explanation": "A deformação relativa (ε = ΔL / L0) mede a percentagem ou fração de comprimento deformado em relação ao original.",
    "distractorAnalysis": [
      "Está incorreta: F · A não representa deformação; a tensão mecânica é F / A.",
      "Está incorreta: Velocidade de propagação é uma grandeza acústica cinemática em m/s.",
      "Está incorreta: Massa por tempo é caudal mássico em kg/s, sem relação com a deformação geométrica relativa."
    ],
    "nursingApplication": "Como é a razão entre dois comprimentos (m / m), a deformação relativa é uma grandeza adimensional."
  },
  {
    "id": 2320,
    "topicId": 2,
    "question": "Qual é a unidade de medida da Deformação Relativa (ε) no Sistema Internacional?",
    "options": [
      "É uma grandeza ADIMENSIONAL (não tem unidades físicas, podendo ser expressa em percentagem).",
      "Mede-se estritamente em Newtons por segundo quadrado (N/s²).",
      "Mede-se em Joules por quilograma cúbico (J/kg³).",
      "Mede-se obrigatoriamente em Pascal-segundo (Pa·s)."
    ],
    "correctIndex": 0,
    "explanation": "Como resulta da razão entre dois comprimentos em metros (ΔL / L0 = m / m), os metros cancelam-se, tornando ε adimensional.",
    "distractorAnalysis": [
      "Está incorreta: N/s² não é a unidade de deformação relativa; é dimensionalmente incompatível.",
      "Está incorreta: J/kg³ não é unidade física de deformação relativa.",
      "Está incorreta: Pascal-segundo (Pa·s) é a unidade de viscosidade dinâmica no SI, não de deformação."
    ],
    "nursingApplication": "Uma deformação relativa de 0,02 significa que o osso ou material alongou 2% em relação ao inicial."
  },
  {
    "id": 2321,
    "topicId": 2,
    "question": "Qual é o enunciado da Lei de Hooke Generalizada para materiais sob tensão elástica (Slide 43)?",
    "options": [
      "σ = E / ε (a tensão é a razão entre o Módulo de Young e a deformação).",
      "σ = E · ε (a tensão mecânica é igual ao Módulo de Young multiplicado pela deformação relativa).",
      "σ = E + ε (a tensão é a soma do Módulo de Young com a deformação).",
      "σ = m · g (a tensão é o produto da massa pela aceleração gravítica)."
    ],
    "correctIndex": 1,
    "explanation": "A Lei de Hooke generalizada para sólidos estabelece a proporcionalidade linear entre tensão e deformação: σ = E · ε.",
    "distractorAnalysis": [
      "Está incorreta: Dividir o Módulo pela deformação (E / ε) inverte a proporcionalidade direta da elasticidade linear.",
      "Está incorreta: Somar uma grandeza com unidades de pressão (E em Pa) com uma grandeza adimensional (ε) viola a homogeneidade.",
      "Está incorreta: m · g é a fórmula da força peso gravitacional, não a Lei de Hooke generalizada da elasticidade."
    ],
    "nursingApplication": "Equação mestra utilizada para prever a deformação sofrida por materiais biológicos e implantes."
  },
  {
    "id": 2322,
    "topicId": 2,
    "question": "O que mede e representa o Módulo de Young (E) na física dos materiais?",
    "options": [
      "A quantidade total de átomos pesados contidos no núcleo de um miligrama de material.",
      "A velocidade com que um corpo atinge o equilíbrio térmico no interior de um forno.",
      "A rigidez intrínseca de um material perante forças de tração e compressão longitudinal (E = σ / ε).",
      "A permeabilidade magnética relativa do vácuo no sistema eletrostático de unidades."
    ],
    "correctIndex": 2,
    "explanation": "O Módulo de Young mede a oposição de um material a sofrer deformação elástica longitudinal: quanto maior o E, mais rígido o material.",
    "distractorAnalysis": [
      "Está incorreta: Quantidade de átomos no núcleo é número de massa atómica, sem relação com elasticidade mecânica.",
      "Está incorreta: Velocidade de equilíbrio térmico é condutividade e difusividade térmica em termodinâmica.",
      "Está incorreta: Permeabilidade do vácuo é uma constante eletromagnética (μ0), não o módulo elástico de um sólido."
    ],
    "nursingApplication": "Permite comparar a rigidez intrínseca do aço com a do osso e da borracha independentemente do formato."
  },
  {
    "id": 2323,
    "topicId": 2,
    "question": "Uma força de tração de 2000 N é aplicada a uma barra cilíndrica de área de secção transversal igual a 0,001 m² (10 cm²). Qual é a tensão mecânica σ suportada pela barra?",
    "options": [
      "2 Pa.",
      "200 000 Pa.",
      "20 000 N.",
      "2 000 000 Pa (2 MPa)."
    ],
    "correctIndex": 3,
    "explanation": "Pela definição de tensão mecânica: σ = F / A = 2000 N / 0,001 m² = 2 000 000 N/m² = 2 MPa.",
    "distractorAnalysis": [
      "Está incorreta: 2 Pa resultaria de dividir 2000 por 1000 de forma incorreta sem respeitar a área dada.",
      "Está incorreta: 200 000 Pa corresponderia a uma área de 0,01 m², e não 0,001 m².",
      "Está incorreta: A tensão mecânica mede-se em Pascal (Pa) ou N/m², e não em Newtons (N)."
    ],
    "nursingApplication": "Cálculo prático para verificar se a tensão aplicada permanece abaixo do limite de segurança do material."
  },
  {
    "id": 2324,
    "topicId": 2,
    "question": "Se uma barra de osso de 0,5 m de comprimento inicial sofrer um alongamento de 0,001 m sob tração, qual é a sua deformação relativa ε?",
    "options": [
      "0,002 (ou 0,2%).",
      "0,0005 m.",
      "2 m.",
      "500 Pa."
    ],
    "correctIndex": 0,
    "explanation": "Pela definição de deformação relativa: ε = ΔL / L0 = 0,001 m / 0,5 m = 0,002 (que equivale a 0,2%).",
    "distractorAnalysis": [
      "Está incorreta: 0,0005 m é a multiplicação dos valores em vez da divisão, além de ter unidade de metros.",
      "Está incorreta: 2 m é a razão inversa (L0 / ΔL) com unidades de metros, o que está dimensionalmente errado.",
      "Está incorreta: A deformação relativa é adimensional e não tem unidade de Pascal (Pa), que é unidade de tensão."
    ],
    "nursingApplication": "Demonstra como calcular a percentagem de deformação de um segmento ósseo sob carga."
  },
  {
    "id": 2325,
    "topicId": 2,
    "question": "O que é a Tensão Mecânica (σ) na mecânica dos materiais elásticos (Slide 43)?",
    "options": [
      "O produto da massa do corpo pelo seu volume geométrico total no vácuo.",
      "A intensidade da força aplicada dividida pela área da secção transversal sobre a qual atua (σ = F / A).",
      "O tempo decorrido até que o corpo sofra fratura irreversível sob carga contínua.",
      "A variação relativa de temperatura molecular por segundo de atrito superficial."
    ],
    "correctIndex": 1,
    "explanation": "A tensão mecânica (σ) representa a concentração de força por unidade de área, expressa em Pascal (N/m²).",
    "distractorAnalysis": [
      "Está incorreta: Massa multiplicada por volume é uma grandeza sem significado físico direto na mecânica.",
      "Está incorreta: O tempo até à fratura mede a durabilidade à fadiga ou fluência, não a tensão instantânea.",
      "Está incorreta: Variação de temperatura é uma grandeza térmica, não a definição mecânica de tensão."
    ],
    "nursingApplication": "Conceito fundamental para avaliar a pressão e tensão que atuam sobre o tecido ósseo e apoios."
  },
  {
    "id": 2326,
    "topicId": 2,
    "question": "No Sistema Internacional (SI), qual é a unidade correta da Tensão Mecânica (σ)?",
    "options": [
      "Newton (N), equivalente a kg·m/s².",
      "Joule (J), equivalente a N·m.",
      "Pascal (Pa), equivalente a Newton por metro quadrado (N/m²).",
      "Quilograma por metro cúbico (kg/m³)."
    ],
    "correctIndex": 2,
    "explanation": "Como σ = F / A, mede-se em Newtons por metro quadrado (N/m²), cuja unidade equivalente é o Pascal (Pa).",
    "distractorAnalysis": [
      "Está incorreta: O Newton (N) mede a força pura total, e não a força distribuída por unidade de área transversal.",
      "Está incorreta: O Joule (J) é unidade de energia e trabalho mecânico, não de tensão mecânica.",
      "Está incorreta: kg/m³ é a unidade da densidade volumétrica de massa, não de tensão mecânica."
    ],
    "nursingApplication": "Grandes tensões mecânicas são frequentemente expressas em Megapascais (1 MPa = 10⁶ Pa)."
  },
  {
    "id": 2327,
    "topicId": 2,
    "question": "O que é a Deformação Relativa (ou Unitária, ε) de uma barra elástica?",
    "options": [
      "O produto da força aplicada pela área de secção transversal: F · A.",
      "A velocidade de propagação das ondas elásticas no vácuo em m/s.",
      "A massa total do corpo dividida pelo tempo de aplicação da carga em kg/s.",
      "A razão entre o alongamento absoluto (ΔL) e o comprimento inicial (L0) da barra: ε = ΔL / L0."
    ],
    "correctIndex": 3,
    "explanation": "A deformação relativa (ε = ΔL / L0) mede a percentagem ou fração de comprimento deformado em relação ao original.",
    "distractorAnalysis": [
      "Está incorreta: F · A não representa deformação; a tensão mecânica é F / A.",
      "Está incorreta: Velocidade de propagação é uma grandeza acústica cinemática em m/s.",
      "Está incorreta: Massa por tempo é caudal mássico em kg/s, sem relação com a deformação geométrica relativa."
    ],
    "nursingApplication": "Como é a razão entre dois comprimentos (m / m), a deformação relativa é uma grandeza adimensional."
  },
  {
    "id": 2328,
    "topicId": 2,
    "question": "Qual é a unidade de medida da Deformação Relativa (ε) no Sistema Internacional?",
    "options": [
      "É uma grandeza ADIMENSIONAL (não tem unidades físicas, podendo ser expressa em percentagem).",
      "Mede-se estritamente em Newtons por segundo quadrado (N/s²).",
      "Mede-se em Joules por quilograma cúbico (J/kg³).",
      "Mede-se obrigatoriamente em Pascal-segundo (Pa·s)."
    ],
    "correctIndex": 0,
    "explanation": "Como resulta da razão entre dois comprimentos em metros (ΔL / L0 = m / m), os metros cancelam-se, tornando ε adimensional.",
    "distractorAnalysis": [
      "Está incorreta: N/s² não é a unidade de deformação relativa; é dimensionalmente incompatível.",
      "Está incorreta: J/kg³ não é unidade física de deformação relativa.",
      "Está incorreta: Pascal-segundo (Pa·s) é a unidade de viscosidade dinâmica no SI, não de deformação."
    ],
    "nursingApplication": "Uma deformação relativa de 0,02 significa que o osso ou material alongou 2% em relação ao inicial."
  },
  {
    "id": 2329,
    "topicId": 2,
    "question": "Qual é o enunciado da Lei de Hooke Generalizada para materiais sob tensão elástica (Slide 43)?",
    "options": [
      "σ = E / ε (a tensão é a razão entre o Módulo de Young e a deformação).",
      "σ = E · ε (a tensão mecânica é igual ao Módulo de Young multiplicado pela deformação relativa).",
      "σ = E + ε (a tensão é a soma do Módulo de Young com a deformação).",
      "σ = m · g (a tensão é o produto da massa pela aceleração gravítica)."
    ],
    "correctIndex": 1,
    "explanation": "A Lei de Hooke generalizada para sólidos estabelece a proporcionalidade linear entre tensão e deformação: σ = E · ε.",
    "distractorAnalysis": [
      "Está incorreta: Dividir o Módulo pela deformação (E / ε) inverte a proporcionalidade direta da elasticidade linear.",
      "Está incorreta: Somar uma grandeza com unidades de pressão (E em Pa) com uma grandeza adimensional (ε) viola a homogeneidade.",
      "Está incorreta: m · g é a fórmula da força peso gravitacional, não a Lei de Hooke generalizada da elasticidade."
    ],
    "nursingApplication": "Equação mestra utilizada para prever a deformação sofrida por materiais biológicos e implantes."
  },
  {
    "id": 2330,
    "topicId": 2,
    "question": "O que mede e representa o Módulo de Young (E) na física dos materiais?",
    "options": [
      "A quantidade total de átomos pesados contidos no núcleo de um miligrama de material.",
      "A velocidade com que um corpo atinge o equilíbrio térmico no interior de um forno.",
      "A rigidez intrínseca de um material perante forças de tração e compressão longitudinal (E = σ / ε).",
      "A permeabilidade magnética relativa do vácuo no sistema eletrostático de unidades."
    ],
    "correctIndex": 2,
    "explanation": "O Módulo de Young mede a oposição de um material a sofrer deformação elástica longitudinal: quanto maior o E, mais rígido o material.",
    "distractorAnalysis": [
      "Está incorreta: Quantidade de átomos no núcleo é número de massa atómica, sem relação com elasticidade mecânica.",
      "Está incorreta: Velocidade de equilíbrio térmico é condutividade e difusividade térmica em termodinâmica.",
      "Está incorreta: Permeabilidade do vácuo é uma constante eletromagnética (μ0), não o módulo elástico de um sólido."
    ],
    "nursingApplication": "Permite comparar a rigidez intrínseca do aço com a do osso e da borracha independentemente do formato."
  },
  {
    "id": 2331,
    "topicId": 2,
    "question": "Uma força de tração de 2000 N é aplicada a uma barra cilíndrica de área de secção transversal igual a 0,001 m² (10 cm²). Qual é a tensão mecânica σ suportada pela barra?",
    "options": [
      "2 Pa.",
      "200 000 Pa.",
      "20 000 N.",
      "2 000 000 Pa (2 MPa)."
    ],
    "correctIndex": 3,
    "explanation": "Pela definição de tensão mecânica: σ = F / A = 2000 N / 0,001 m² = 2 000 000 N/m² = 2 MPa.",
    "distractorAnalysis": [
      "Está incorreta: 2 Pa resultaria de dividir 2000 por 1000 de forma incorreta sem respeitar a área dada.",
      "Está incorreta: 200 000 Pa corresponderia a uma área de 0,01 m², e não 0,001 m².",
      "Está incorreta: A tensão mecânica mede-se em Pascal (Pa) ou N/m², e não em Newtons (N)."
    ],
    "nursingApplication": "Cálculo prático para verificar se a tensão aplicada permanece abaixo do limite de segurança do material."
  },
  {
    "id": 2332,
    "topicId": 2,
    "question": "Se uma barra de osso de 0,5 m de comprimento inicial sofrer um alongamento de 0,001 m sob tração, qual é a sua deformação relativa ε?",
    "options": [
      "0,002 (ou 0,2%).",
      "0,0005 m.",
      "2 m.",
      "500 Pa."
    ],
    "correctIndex": 0,
    "explanation": "Pela definição de deformação relativa: ε = ΔL / L0 = 0,001 m / 0,5 m = 0,002 (que equivale a 0,2%).",
    "distractorAnalysis": [
      "Está incorreta: 0,0005 m é a multiplicação dos valores em vez da divisão, além de ter unidade de metros.",
      "Está incorreta: 2 m é a razão inversa (L0 / ΔL) com unidades de metros, o que está dimensionalmente errado.",
      "Está incorreta: A deformação relativa é adimensional e não tem unidade de Pascal (Pa), que é unidade de tensão."
    ],
    "nursingApplication": "Demonstra como calcular a percentagem de deformação de um segmento ósseo sob carga."
  },
  {
    "id": 2333,
    "topicId": 2,
    "question": "O que é a Tensão Mecânica (σ) na mecânica dos materiais elásticos (Slide 43)?",
    "options": [
      "O produto da massa do corpo pelo seu volume geométrico total no vácuo.",
      "A intensidade da força aplicada dividida pela área da secção transversal sobre a qual atua (σ = F / A).",
      "O tempo decorrido até que o corpo sofra fratura irreversível sob carga contínua.",
      "A variação relativa de temperatura molecular por segundo de atrito superficial."
    ],
    "correctIndex": 1,
    "explanation": "A tensão mecânica (σ) representa a concentração de força por unidade de área, expressa em Pascal (N/m²).",
    "distractorAnalysis": [
      "Está incorreta: Massa multiplicada por volume é uma grandeza sem significado físico direto na mecânica.",
      "Está incorreta: O tempo até à fratura mede a durabilidade à fadiga ou fluência, não a tensão instantânea.",
      "Está incorreta: Variação de temperatura é uma grandeza térmica, não a definição mecânica de tensão."
    ],
    "nursingApplication": "Conceito fundamental para avaliar a pressão e tensão que atuam sobre o tecido ósseo e apoios."
  },
  {
    "id": 2334,
    "topicId": 2,
    "question": "No Sistema Internacional (SI), qual é a unidade correta da Tensão Mecânica (σ)?",
    "options": [
      "Newton (N), equivalente a kg·m/s².",
      "Joule (J), equivalente a N·m.",
      "Pascal (Pa), equivalente a Newton por metro quadrado (N/m²).",
      "Quilograma por metro cúbico (kg/m³)."
    ],
    "correctIndex": 2,
    "explanation": "Como σ = F / A, mede-se em Newtons por metro quadrado (N/m²), cuja unidade equivalente é o Pascal (Pa).",
    "distractorAnalysis": [
      "Está incorreta: O Newton (N) mede a força pura total, e não a força distribuída por unidade de área transversal.",
      "Está incorreta: O Joule (J) é unidade de energia e trabalho mecânico, não de tensão mecânica.",
      "Está incorreta: kg/m³ é a unidade da densidade volumétrica de massa, não de tensão mecânica."
    ],
    "nursingApplication": "Grandes tensões mecânicas são frequentemente expressas em Megapascais (1 MPa = 10⁶ Pa)."
  },
  {
    "id": 2335,
    "topicId": 2,
    "question": "O que é a Deformação Relativa (ou Unitária, ε) de uma barra elástica?",
    "options": [
      "O produto da força aplicada pela área de secção transversal: F · A.",
      "A velocidade de propagação das ondas elásticas no vácuo em m/s.",
      "A massa total do corpo dividida pelo tempo de aplicação da carga em kg/s.",
      "A razão entre o alongamento absoluto (ΔL) e o comprimento inicial (L0) da barra: ε = ΔL / L0."
    ],
    "correctIndex": 3,
    "explanation": "A deformação relativa (ε = ΔL / L0) mede a percentagem ou fração de comprimento deformado em relação ao original.",
    "distractorAnalysis": [
      "Está incorreta: F · A não representa deformação; a tensão mecânica é F / A.",
      "Está incorreta: Velocidade de propagação é uma grandeza acústica cinemática em m/s.",
      "Está incorreta: Massa por tempo é caudal mássico em kg/s, sem relação com a deformação geométrica relativa."
    ],
    "nursingApplication": "Como é a razão entre dois comprimentos (m / m), a deformação relativa é uma grandeza adimensional."
  },
  {
    "id": 2336,
    "topicId": 2,
    "question": "Qual é a unidade de medida da Deformação Relativa (ε) no Sistema Internacional?",
    "options": [
      "É uma grandeza ADIMENSIONAL (não tem unidades físicas, podendo ser expressa em percentagem).",
      "Mede-se estritamente em Newtons por segundo quadrado (N/s²).",
      "Mede-se em Joules por quilograma cúbico (J/kg³).",
      "Mede-se obrigatoriamente em Pascal-segundo (Pa·s)."
    ],
    "correctIndex": 0,
    "explanation": "Como resulta da razão entre dois comprimentos em metros (ΔL / L0 = m / m), os metros cancelam-se, tornando ε adimensional.",
    "distractorAnalysis": [
      "Está incorreta: N/s² não é a unidade de deformação relativa; é dimensionalmente incompatível.",
      "Está incorreta: J/kg³ não é unidade física de deformação relativa.",
      "Está incorreta: Pascal-segundo (Pa·s) é a unidade de viscosidade dinâmica no SI, não de deformação."
    ],
    "nursingApplication": "Uma deformação relativa de 0,02 significa que o osso ou material alongou 2% em relação ao inicial."
  },
  {
    "id": 2337,
    "topicId": 2,
    "question": "Qual é o enunciado da Lei de Hooke Generalizada para materiais sob tensão elástica (Slide 43)?",
    "options": [
      "σ = E / ε (a tensão é a razão entre o Módulo de Young e a deformação).",
      "σ = E · ε (a tensão mecânica é igual ao Módulo de Young multiplicado pela deformação relativa).",
      "σ = E + ε (a tensão é a soma do Módulo de Young com a deformação).",
      "σ = m · g (a tensão é o produto da massa pela aceleração gravítica)."
    ],
    "correctIndex": 1,
    "explanation": "A Lei de Hooke generalizada para sólidos estabelece a proporcionalidade linear entre tensão e deformação: σ = E · ε.",
    "distractorAnalysis": [
      "Está incorreta: Dividir o Módulo pela deformação (E / ε) inverte a proporcionalidade direta da elasticidade linear.",
      "Está incorreta: Somar uma grandeza com unidades de pressão (E em Pa) com uma grandeza adimensional (ε) viola a homogeneidade.",
      "Está incorreta: m · g é a fórmula da força peso gravitacional, não a Lei de Hooke generalizada da elasticidade."
    ],
    "nursingApplication": "Equação mestra utilizada para prever a deformação sofrida por materiais biológicos e implantes."
  },
  {
    "id": 2338,
    "topicId": 2,
    "question": "O que mede e representa o Módulo de Young (E) na física dos materiais?",
    "options": [
      "A quantidade total de átomos pesados contidos no núcleo de um miligrama de material.",
      "A velocidade com que um corpo atinge o equilíbrio térmico no interior de um forno.",
      "A rigidez intrínseca de um material perante forças de tração e compressão longitudinal (E = σ / ε).",
      "A permeabilidade magnética relativa do vácuo no sistema eletrostático de unidades."
    ],
    "correctIndex": 2,
    "explanation": "O Módulo de Young mede a oposição de um material a sofrer deformação elástica longitudinal: quanto maior o E, mais rígido o material.",
    "distractorAnalysis": [
      "Está incorreta: Quantidade de átomos no núcleo é número de massa atómica, sem relação com elasticidade mecânica.",
      "Está incorreta: Velocidade de equilíbrio térmico é condutividade e difusividade térmica em termodinâmica.",
      "Está incorreta: Permeabilidade do vácuo é uma constante eletromagnética (μ0), não o módulo elástico de um sólido."
    ],
    "nursingApplication": "Permite comparar a rigidez intrínseca do aço com a do osso e da borracha independentemente do formato."
  },
  {
    "id": 2339,
    "topicId": 2,
    "question": "Uma força de tração de 2000 N é aplicada a uma barra cilíndrica de área de secção transversal igual a 0,001 m² (10 cm²). Qual é a tensão mecânica σ suportada pela barra?",
    "options": [
      "2 Pa.",
      "200 000 Pa.",
      "20 000 N.",
      "2 000 000 Pa (2 MPa)."
    ],
    "correctIndex": 3,
    "explanation": "Pela definição de tensão mecânica: σ = F / A = 2000 N / 0,001 m² = 2 000 000 N/m² = 2 MPa.",
    "distractorAnalysis": [
      "Está incorreta: 2 Pa resultaria de dividir 2000 por 1000 de forma incorreta sem respeitar a área dada.",
      "Está incorreta: 200 000 Pa corresponderia a uma área de 0,01 m², e não 0,001 m².",
      "Está incorreta: A tensão mecânica mede-se em Pascal (Pa) ou N/m², e não em Newtons (N)."
    ],
    "nursingApplication": "Cálculo prático para verificar se a tensão aplicada permanece abaixo do limite de segurança do material."
  },
  {
    "id": 2340,
    "topicId": 2,
    "question": "Se uma barra de osso de 0,5 m de comprimento inicial sofrer um alongamento de 0,001 m sob tração, qual é a sua deformação relativa ε?",
    "options": [
      "0,002 (ou 0,2%).",
      "0,0005 m.",
      "2 m.",
      "500 Pa."
    ],
    "correctIndex": 0,
    "explanation": "Pela definição de deformação relativa: ε = ΔL / L0 = 0,001 m / 0,5 m = 0,002 (que equivale a 0,2%).",
    "distractorAnalysis": [
      "Está incorreta: 0,0005 m é a multiplicação dos valores em vez da divisão, além de ter unidade de metros.",
      "Está incorreta: 2 m é a razão inversa (L0 / ΔL) com unidades de metros, o que está dimensionalmente errado.",
      "Está incorreta: A deformação relativa é adimensional e não tem unidade de Pascal (Pa), que é unidade de tensão."
    ],
    "nursingApplication": "Demonstra como calcular a percentagem de deformação de um segmento ósseo sob carga."
  },
  {
    "id": 2341,
    "topicId": 2,
    "question": "O que é a Tensão Mecânica (σ) na mecânica dos materiais elásticos (Slide 43)?",
    "options": [
      "O produto da massa do corpo pelo seu volume geométrico total no vácuo.",
      "A intensidade da força aplicada dividida pela área da secção transversal sobre a qual atua (σ = F / A).",
      "O tempo decorrido até que o corpo sofra fratura irreversível sob carga contínua.",
      "A variação relativa de temperatura molecular por segundo de atrito superficial."
    ],
    "correctIndex": 1,
    "explanation": "A tensão mecânica (σ) representa a concentração de força por unidade de área, expressa em Pascal (N/m²).",
    "distractorAnalysis": [
      "Está incorreta: Massa multiplicada por volume é uma grandeza sem significado físico direto na mecânica.",
      "Está incorreta: O tempo até à fratura mede a durabilidade à fadiga ou fluência, não a tensão instantânea.",
      "Está incorreta: Variação de temperatura é uma grandeza térmica, não a definição mecânica de tensão."
    ],
    "nursingApplication": "Conceito fundamental para avaliar a pressão e tensão que atuam sobre o tecido ósseo e apoios."
  },
  {
    "id": 2342,
    "topicId": 2,
    "question": "No Sistema Internacional (SI), qual é a unidade correta da Tensão Mecânica (σ)?",
    "options": [
      "Newton (N), equivalente a kg·m/s².",
      "Joule (J), equivalente a N·m.",
      "Pascal (Pa), equivalente a Newton por metro quadrado (N/m²).",
      "Quilograma por metro cúbico (kg/m³)."
    ],
    "correctIndex": 2,
    "explanation": "Como σ = F / A, mede-se em Newtons por metro quadrado (N/m²), cuja unidade equivalente é o Pascal (Pa).",
    "distractorAnalysis": [
      "Está incorreta: O Newton (N) mede a força pura total, e não a força distribuída por unidade de área transversal.",
      "Está incorreta: O Joule (J) é unidade de energia e trabalho mecânico, não de tensão mecânica.",
      "Está incorreta: kg/m³ é a unidade da densidade volumétrica de massa, não de tensão mecânica."
    ],
    "nursingApplication": "Grandes tensões mecânicas são frequentemente expressas em Megapascais (1 MPa = 10⁶ Pa)."
  },
  {
    "id": 2343,
    "topicId": 2,
    "question": "O que é a Deformação Relativa (ou Unitária, ε) de uma barra elástica?",
    "options": [
      "O produto da força aplicada pela área de secção transversal: F · A.",
      "A velocidade de propagação das ondas elásticas no vácuo em m/s.",
      "A massa total do corpo dividida pelo tempo de aplicação da carga em kg/s.",
      "A razão entre o alongamento absoluto (ΔL) e o comprimento inicial (L0) da barra: ε = ΔL / L0."
    ],
    "correctIndex": 3,
    "explanation": "A deformação relativa (ε = ΔL / L0) mede a percentagem ou fração de comprimento deformado em relação ao original.",
    "distractorAnalysis": [
      "Está incorreta: F · A não representa deformação; a tensão mecânica é F / A.",
      "Está incorreta: Velocidade de propagação é uma grandeza acústica cinemática em m/s.",
      "Está incorreta: Massa por tempo é caudal mássico em kg/s, sem relação com a deformação geométrica relativa."
    ],
    "nursingApplication": "Como é a razão entre dois comprimentos (m / m), a deformação relativa é uma grandeza adimensional."
  },
  {
    "id": 2344,
    "topicId": 2,
    "question": "Qual é a unidade de medida da Deformação Relativa (ε) no Sistema Internacional?",
    "options": [
      "É uma grandeza ADIMENSIONAL (não tem unidades físicas, podendo ser expressa em percentagem).",
      "Mede-se estritamente em Newtons por segundo quadrado (N/s²).",
      "Mede-se em Joules por quilograma cúbico (J/kg³).",
      "Mede-se obrigatoriamente em Pascal-segundo (Pa·s)."
    ],
    "correctIndex": 0,
    "explanation": "Como resulta da razão entre dois comprimentos em metros (ΔL / L0 = m / m), os metros cancelam-se, tornando ε adimensional.",
    "distractorAnalysis": [
      "Está incorreta: N/s² não é a unidade de deformação relativa; é dimensionalmente incompatível.",
      "Está incorreta: J/kg³ não é unidade física de deformação relativa.",
      "Está incorreta: Pascal-segundo (Pa·s) é a unidade de viscosidade dinâmica no SI, não de deformação."
    ],
    "nursingApplication": "Uma deformação relativa de 0,02 significa que o osso ou material alongou 2% em relação ao inicial."
  },
  {
    "id": 2345,
    "topicId": 2,
    "question": "Qual é o enunciado da Lei de Hooke Generalizada para materiais sob tensão elástica (Slide 43)?",
    "options": [
      "σ = E / ε (a tensão é a razão entre o Módulo de Young e a deformação).",
      "σ = E · ε (a tensão mecânica é igual ao Módulo de Young multiplicado pela deformação relativa).",
      "σ = E + ε (a tensão é a soma do Módulo de Young com a deformação).",
      "σ = m · g (a tensão é o produto da massa pela aceleração gravítica)."
    ],
    "correctIndex": 1,
    "explanation": "A Lei de Hooke generalizada para sólidos estabelece a proporcionalidade linear entre tensão e deformação: σ = E · ε.",
    "distractorAnalysis": [
      "Está incorreta: Dividir o Módulo pela deformação (E / ε) inverte a proporcionalidade direta da elasticidade linear.",
      "Está incorreta: Somar uma grandeza com unidades de pressão (E em Pa) com uma grandeza adimensional (ε) viola a homogeneidade.",
      "Está incorreta: m · g é a fórmula da força peso gravitacional, não a Lei de Hooke generalizada da elasticidade."
    ],
    "nursingApplication": "Equação mestra utilizada para prever a deformação sofrida por materiais biológicos e implantes."
  },
  {
    "id": 2346,
    "topicId": 2,
    "question": "O que mede e representa o Módulo de Young (E) na física dos materiais?",
    "options": [
      "A quantidade total de átomos pesados contidos no núcleo de um miligrama de material.",
      "A velocidade com que um corpo atinge o equilíbrio térmico no interior de um forno.",
      "A rigidez intrínseca de um material perante forças de tração e compressão longitudinal (E = σ / ε).",
      "A permeabilidade magnética relativa do vácuo no sistema eletrostático de unidades."
    ],
    "correctIndex": 2,
    "explanation": "O Módulo de Young mede a oposição de um material a sofrer deformação elástica longitudinal: quanto maior o E, mais rígido o material.",
    "distractorAnalysis": [
      "Está incorreta: Quantidade de átomos no núcleo é número de massa atómica, sem relação com elasticidade mecânica.",
      "Está incorreta: Velocidade de equilíbrio térmico é condutividade e difusividade térmica em termodinâmica.",
      "Está incorreta: Permeabilidade do vácuo é uma constante eletromagnética (μ0), não o módulo elástico de um sólido."
    ],
    "nursingApplication": "Permite comparar a rigidez intrínseca do aço com a do osso e da borracha independentemente do formato."
  },
  {
    "id": 2347,
    "topicId": 2,
    "question": "Uma força de tração de 2000 N é aplicada a uma barra cilíndrica de área de secção transversal igual a 0,001 m² (10 cm²). Qual é a tensão mecânica σ suportada pela barra?",
    "options": [
      "2 Pa.",
      "200 000 Pa.",
      "20 000 N.",
      "2 000 000 Pa (2 MPa)."
    ],
    "correctIndex": 3,
    "explanation": "Pela definição de tensão mecânica: σ = F / A = 2000 N / 0,001 m² = 2 000 000 N/m² = 2 MPa.",
    "distractorAnalysis": [
      "Está incorreta: 2 Pa resultaria de dividir 2000 por 1000 de forma incorreta sem respeitar a área dada.",
      "Está incorreta: 200 000 Pa corresponderia a uma área de 0,01 m², e não 0,001 m².",
      "Está incorreta: A tensão mecânica mede-se em Pascal (Pa) ou N/m², e não em Newtons (N)."
    ],
    "nursingApplication": "Cálculo prático para verificar se a tensão aplicada permanece abaixo do limite de segurança do material."
  },
  {
    "id": 2348,
    "topicId": 2,
    "question": "Se uma barra de osso de 0,5 m de comprimento inicial sofrer um alongamento de 0,001 m sob tração, qual é a sua deformação relativa ε?",
    "options": [
      "0,002 (ou 0,2%).",
      "0,0005 m.",
      "2 m.",
      "500 Pa."
    ],
    "correctIndex": 0,
    "explanation": "Pela definição de deformação relativa: ε = ΔL / L0 = 0,001 m / 0,5 m = 0,002 (que equivale a 0,2%).",
    "distractorAnalysis": [
      "Está incorreta: 0,0005 m é a multiplicação dos valores em vez da divisão, além de ter unidade de metros.",
      "Está incorreta: 2 m é a razão inversa (L0 / ΔL) com unidades de metros, o que está dimensionalmente errado.",
      "Está incorreta: A deformação relativa é adimensional e não tem unidade de Pascal (Pa), que é unidade de tensão."
    ],
    "nursingApplication": "Demonstra como calcular a percentagem de deformação de um segmento ósseo sob carga."
  },
  {
    "id": 2349,
    "topicId": 2,
    "question": "O que é a Tensão Mecânica (σ) na mecânica dos materiais elásticos (Slide 43)?",
    "options": [
      "O produto da massa do corpo pelo seu volume geométrico total no vácuo.",
      "A intensidade da força aplicada dividida pela área da secção transversal sobre a qual atua (σ = F / A).",
      "O tempo decorrido até que o corpo sofra fratura irreversível sob carga contínua.",
      "A variação relativa de temperatura molecular por segundo de atrito superficial."
    ],
    "correctIndex": 1,
    "explanation": "A tensão mecânica (σ) representa a concentração de força por unidade de área, expressa em Pascal (N/m²).",
    "distractorAnalysis": [
      "Está incorreta: Massa multiplicada por volume é uma grandeza sem significado físico direto na mecânica.",
      "Está incorreta: O tempo até à fratura mede a durabilidade à fadiga ou fluência, não a tensão instantânea.",
      "Está incorreta: Variação de temperatura é uma grandeza térmica, não a definição mecânica de tensão."
    ],
    "nursingApplication": "Conceito fundamental para avaliar a pressão e tensão que atuam sobre o tecido ósseo e apoios."
  },
  {
    "id": 2350,
    "topicId": 2,
    "question": "No Sistema Internacional (SI), qual é a unidade correta da Tensão Mecânica (σ)?",
    "options": [
      "Newton (N), equivalente a kg·m/s².",
      "Joule (J), equivalente a N·m.",
      "Pascal (Pa), equivalente a Newton por metro quadrado (N/m²).",
      "Quilograma por metro cúbico (kg/m³)."
    ],
    "correctIndex": 2,
    "explanation": "Como σ = F / A, mede-se em Newtons por metro quadrado (N/m²), cuja unidade equivalente é o Pascal (Pa).",
    "distractorAnalysis": [
      "Está incorreta: O Newton (N) mede a força pura total, e não a força distribuída por unidade de área transversal.",
      "Está incorreta: O Joule (J) é unidade de energia e trabalho mecânico, não de tensão mecânica.",
      "Está incorreta: kg/m³ é a unidade da densidade volumétrica de massa, não de tensão mecânica."
    ],
    "nursingApplication": "Grandes tensões mecânicas são frequentemente expressas em Megapascais (1 MPa = 10⁶ Pa)."
  },
  {
    "id": 2351,
    "topicId": 2,
    "question": "Qual é o enunciado fundamental da Lei de Hooke formulada em 1660 (Slide 40)?",
    "options": [
      "A aceleração de um corpo rígido é inversamente proporcional ao quadrado da sua deformação angular.",
      "A força deformadora dissipa-se instantaneamente sob a forma de radiação gama no vácuo.",
      "Qualquer força deformadora produz deformações plásticas permanentes e irreversíveis em qualquer material.",
      "A deformação elástica sofrida por um corpo é diretamente proporcional à intensidade da força aplicada ('Ut tensio, sic vis')."
    ],
    "correctIndex": 3,
    "explanation": "Hooke estabeleceu que a extensão de uma mola ou barra elástica é proporcional à força tensora aplicada (F = k * Δx).",
    "distractorAnalysis": [
      "Está incorreta: A aceleração ser inversamente proporcional ao quadrado da deformação não tem fundamento na lei de Hooke.",
      "Está incorreta: Forças mecânicas normais não emitem radiação gama.",
      "Está incorreta: A lei de Hooke descreve deformações elásticas reversíveis, não deformações plásticas irreversíveis."
    ],
    "nursingApplication": "Fundamental para compreender o funcionamento de dinamómetros e a resposta elástica inicial de estruturas biológicas."
  },
  {
    "id": 2352,
    "topicId": 2,
    "question": "Na expressão clássica da Lei de Hooke para uma mola, F = k · Δx, o que representa a grandeza 'k' (Slide 41)?",
    "options": [
      "A constante elástica do corpo, que mede a rigidez da estrutura e exprime-se em N/m no SI.",
      "O coeficiente de atrito estático adimensional entre a mola e o solo de apoio.",
      "A aceleração centrípeta gerada pela rotação do sistema elástico em torno do centro de massa.",
      "A energia potencial gravitacional acumulada pelo corpo à altitude zero."
    ],
    "correctIndex": 0,
    "explanation": "A constante elástica k (em N/m) quantifica a força necessária para produzir uma deformação unitária (1 metro).",
    "distractorAnalysis": [
      "Está incorreta: Coeficiente de atrito é uma grandeza adimensional que quantifica a oposição ao deslizamento entre superfícies.",
      "Está incorreta: Aceleração centrípeta depende da velocidade angular e do raio de curvatura, não sendo a rigidez de uma mola.",
      "Está incorreta: Energia potencial gravitacional exprime-se em Joules (J) e depende da massa, gravidade e altura."
    ],
    "nursingApplication": "Representa a resistência elástica que equipamentos com molas ou sensores de tração oferecem ao alongamento."
  },
  {
    "id": 2353,
    "topicId": 2,
    "question": "De que depende o valor da constante elástica 'k' de um corpo elástico (Slide 42)?",
    "options": [
      "Exclusivamente da massa atómica média do material, sendo totalmente independente da sua forma e comprimento.",
      "Das dimensões geométricas (comprimento, espessura e área) e da natureza do material constituinte.",
      "Apenas da aceleração da gravidade local, duplicando se o ensaio for realizado na Lua.",
      "Exclusivamente da velocidade de translação com que a força é aplicada no vácuo."
    ],
    "correctIndex": 1,
    "explanation": "O slide 42 enfatiza que a constante elástica k depende do tamanho, forma e espessura definidos do corpo e não só do material.",
    "distractorAnalysis": [
      "Está incorreta: A constante k depende fortemente do comprimento e da secção geométrica da peça, não apenas do material atómico.",
      "Está incorreta: A constante elástica é uma propriedade intrínseca do corpo mecânico, não dependendo da aceleração da gravidade.",
      "Está incorreta: A rigidez k é uma propriedade elástica estática que não depende da velocidade no vácuo."
    ],
    "nursingApplication": "Explica por que uma mola espessa e curta é muito mais rígida (maior k) do que uma mola fina e comprida do mesmo material."
  },
  {
    "id": 2354,
    "topicId": 2,
    "question": "Como se formula a Lei de Hooke Generalizada para meios contínuos elásticos (Slide 43)?",
    "options": [
      "F = m · a, onde m é a massa inercial e a é a aceleração linear do centro de massa.",
      "E = m · c², onde E é a energia relativista em repouso e c é a velocidade da luz.",
      "σ = E · ε, onde σ é a tensão mecânica, E é o Módulo de Young e ε é a deformação relativa.",
      "P = ρ · g · h, onde P é a pressão hidrostática a uma profundidade vertical h."
    ],
    "correctIndex": 2,
    "explanation": "A forma generalizada da Lei de Hooke estabelece que a tensão mecânica σ é proporcional à deformação relativa ε através do módulo de Young E.",
    "distractorAnalysis": [
      "Está incorreta: F = m · a é a Segunda Lei de Newton para o movimento de translação de partículas.",
      "Está incorreta: E = m · c² é a equivalência massa-energia da relatividade restrita de Einstein.",
      "Está incorreta: P = ρ · g · h é o Teorema Fundamental da Hidrostática (lei de Stevin)."
    ],
    "nursingApplication": "Permite analisar as tensões e deformações internas em biomateriais sem depender das dimensões totais da amostra."
  },
  {
    "id": 2355,
    "topicId": 2,
    "question": "Na Lei de Hooke Generalizada, como se define a Tensão Mecânica (σ) (Slide 43)?",
    "options": [
      "O produto da força aplicada pelo intervalo de tempo durante o qual ocorre a colisão.",
      "A variação relativa de volume dividida pela aceleração gravítica terrestre.",
      "A raiz quadrada da energia elástica dividida pelo comprimento inicial do corpo.",
      "A razão entre a força aplicada e a área da secção transversal sobre a qual a força atua (σ = F / A), expressa em Pa ou N/m²."
    ],
    "correctIndex": 3,
    "explanation": "Tensão mecânica σ mede a intensidade de força distribuída por unidade de área de secção transversal (F/A).",
    "distractorAnalysis": [
      "Está incorreta: O produto da força pelo tempo de colisão define o impulso mecânico (I = F · Δt), não a tensão.",
      "Está incorreta: A razão volumétrica pela gravidade não tem significado físico de tensão mecânica.",
      "Está incorreta: A raiz da energia dividida pelo comprimento não define tensão mecânica."
    ],
    "nursingApplication": "Crucial para avaliar a pressão interna suportada por articulações e implantes biomédicos."
  },
  {
    "id": 2356,
    "topicId": 2,
    "question": "Na Lei de Hooke Generalizada, como se define a Deformação Relativa (ε) (Slide 43)?",
    "options": [
      "A razão entre a variação de comprimento e o comprimento original (ε = ΔL / L₀), sendo uma grandeza adimensional.",
      "O produto da variação de comprimento pela área da secção transversal, com unidade em metros cúbicos.",
      "A velocidade linear instantânea com que as moléculas da extremidade se afastam durante a tração.",
      "A força necessária para esticar a barra dividida pela densidade volumétrica do meio."
    ],
    "correctIndex": 0,
    "explanation": "A deformação relativa ε quantifica o alongamento ou encurtamento percentual relativamente ao tamanho inicial (ΔL / L₀).",
    "distractorAnalysis": [
      "Está incorreta: O produto do comprimento pela área mede uma variação de volume, não a deformação relativa linear.",
      "Está incorreta: Velocidade de afastamento molecular é uma taxa temporal cinemática, não a deformação relativa adimensional.",
      "Está incorreta: Força dividida por densidade não define deformação mecânica de um corpo."
    ],
    "nursingApplication": "Permite comparar o alongamento percentual de tecidos biológicos curtos e compridos sob tração."
  },
  {
    "id": 2357,
    "topicId": 2,
    "question": "O que mede fisicamente o Módulo de Young (E) de um material (Slide 43)?",
    "options": [
      "A viscosidade dinâmica de fluidos biológicos ideais quando escoam em regime laminar.",
      "A rigidez intrínseca do próprio material perante solicitações axiais de tração e compressão no regime elástico.",
      "A capacidade de um corpo emitir calor por radiação infravermelha a temperaturas elevadas.",
      "A resistência puramente elétrica que um condutor metálico oferece à passagem de eletrões."
    ],
    "correctIndex": 1,
    "explanation": "O Módulo de Young E quantifica a resistência de um material à deformação elástica (E = σ / ε), medindo a sua rigidez intrínseca.",
    "distractorAnalysis": [
      "Está incorreta: Viscosidade dinâmica mede o atrito interno em fluidos em movimento, não a rigidez elástica de sólidos.",
      "Está incorreta: Emissão de radiação térmica é descrita pela lei de Stefan-Boltzmann na termodinâmica.",
      "Está incorreta: Resistência elétrica relaciona corrente e diferença de potencial elétrico (Lei de Ohm)."
    ],
    "nursingApplication": "Determina a rigidez elástica de ligamentos, cartilagens e próteses ortopédicas."
  },
  {
    "id": 2358,
    "topicId": 2,
    "question": "Qual é a unidade do Módulo de Young (E) no Sistema Internacional de Unidades (SI) (Slide 43)?",
    "options": [
      "Joule por segundo (J/s), equivalente a Watt (W).",
      "Quilograma por metro cúbico (kg/m³).",
      "N/m² (Newton por metro quadrado), equivalente a Pascal (Pa).",
      "Metro por segundo ao quadrado (m/s²)."
    ],
    "correctIndex": 2,
    "explanation": "Como E = σ / ε e a deformação ε é adimensional, o módulo de Young tem a mesma unidade de tensão: N/m² ou Pa.",
    "distractorAnalysis": [
      "Está incorreta: Joule por segundo é Watt, a unidade de potência mecânica ou energética.",
      "Está incorreta: Quilograma por metro cúbico é a unidade de massa volúmica (densidade).",
      "Está incorreta: Metro por segundo ao quadrado é a unidade de aceleração no SI."
    ],
    "nursingApplication": "Facilita a leitura e comparação de especificações técnicas de resistência de biomateriais."
  },
  {
    "id": 2359,
    "topicId": 2,
    "question": "Uma mola possui constante elástica k = 500 N/m. Que força é necessária para a comprimir de 0,02 m (2 cm)?",
    "options": [
      "25 000 N.",
      "0,00004 N.",
      "250 N.",
      "10 N."
    ],
    "correctIndex": 3,
    "explanation": "Pela Lei de Hooke: F = k · Δx = 500 N/m · 0,02 m = 10 N.",
    "distractorAnalysis": [
      "Está incorreta: 25 000 N resultaria de dividir incorretamente k por Δx² ou multiplicar por 50.",
      "Está incorreta: 0,00004 N resultaria de dividir Δx por k.",
      "Está incorreta: 250 N resultaria de uma multiplicação aritmética incorreta."
    ],
    "nursingApplication": "Permite calcular o esforço necessário para acionar sistemas elásticos mecânicos em suporte hospitalar."
  },
  {
    "id": 2360,
    "topicId": 2,
    "question": "Qual é a diferença conceitual fundamental entre a Constante Elástica (k) e o Módulo de Young (E) (Slides 42 e 43)?",
    "options": [
      "k depende da forma e dimensões da peça em estudo, enquanto E é uma propriedade intrínseca exclusiva do material.",
      "k aplica-se apenas a gases rarefeitos, enquanto E descreve exclusivamente o vácuo quântico.",
      "k varia com a temperatura ambiente, enquanto E é uma constante universal inalterável no universo.",
      "k é uma grandeza vetorial com sentido horário, enquanto E é um escalar imaginário negativo."
    ],
    "correctIndex": 0,
    "explanation": "Uma barra de aço grossa tem constante k maior que um fio fino do mesmo aço, mas ambas as peças partilham exatamente o mesmo Módulo de Young E.",
    "distractorAnalysis": [
      "Está incorreta: Nem k nem E se aplicam a gases ou ao vácuo; ambas descrevem propriedades mecânicas de corpos e materiais sólidos.",
      "Está incorreta: Ambas as propriedades podem variar com a temperatura em condições físicas reais.",
      "Está incorreta: Constante elástica k e módulo de Young E são grandezas escalares reais positivas."
    ],
    "nursingApplication": "Fundamental para entender por que materiais iguais com espessuras diferentes resistem de modo distinto à flexão."
  },
  {
    "id": 2361,
    "topicId": 2,
    "question": "[Variação 2] Qual é o enunciado fundamental da Lei de Hooke formulada em 1660 (Slide 40)?",
    "options": [
      "A aceleração de um corpo rígido é inversamente proporcional ao quadrado da sua deformação angular.",
      "A deformação elástica sofrida por um corpo é diretamente proporcional à intensidade da força aplicada ('Ut tensio, sic vis').",
      "A força deformadora dissipa-se instantaneamente sob a forma de radiação gama no vácuo.",
      "Qualquer força deformadora produz deformações plásticas permanentes e irreversíveis em qualquer material."
    ],
    "correctIndex": 1,
    "explanation": "Hooke estabeleceu que a extensão de uma mola ou barra elástica é proporcional à força tensora aplicada (F = k * Δx).",
    "distractorAnalysis": [
      "Está incorreta: A aceleração ser inversamente proporcional ao quadrado da deformação não tem fundamento na lei de Hooke.",
      "Está incorreta: Forças mecânicas normais não emitem radiação gama.",
      "Está incorreta: A lei de Hooke descreve deformações elásticas reversíveis, não deformações plásticas irreversíveis."
    ],
    "nursingApplication": "Fundamental para compreender o funcionamento de dinamómetros e a resposta elástica inicial de estruturas biológicas."
  },
  {
    "id": 2362,
    "topicId": 2,
    "question": "[Variação 2] Na expressão clássica da Lei de Hooke para uma mola, F = k · Δx, o que representa a grandeza 'k' (Slide 41)?",
    "options": [
      "O coeficiente de atrito estático adimensional entre a mola e o solo de apoio.",
      "A aceleração centrípeta gerada pela rotação do sistema elástico em torno do centro de massa.",
      "A constante elástica do corpo, que mede a rigidez da estrutura e exprime-se em N/m no SI.",
      "A energia potencial gravitacional acumulada pelo corpo à altitude zero."
    ],
    "correctIndex": 2,
    "explanation": "A constante elástica k (em N/m) quantifica a força necessária para produzir uma deformação unitária (1 metro).",
    "distractorAnalysis": [
      "Está incorreta: Coeficiente de atrito é uma grandeza adimensional que quantifica a oposição ao deslizamento entre superfícies.",
      "Está incorreta: Aceleração centrípeta depende da velocidade angular e do raio de curvatura, não sendo a rigidez de uma mola.",
      "Está incorreta: Energia potencial gravitacional exprime-se em Joules (J) e depende da massa, gravidade e altura."
    ],
    "nursingApplication": "Representa a resistência elástica que equipamentos com molas ou sensores de tração oferecem ao alongamento."
  },
  {
    "id": 2363,
    "topicId": 2,
    "question": "[Variação 2] De que depende o valor da constante elástica 'k' de um corpo elástico (Slide 42)?",
    "options": [
      "Exclusivamente da massa atómica média do material, sendo totalmente independente da sua forma e comprimento.",
      "Apenas da aceleração da gravidade local, duplicando se o ensaio for realizado na Lua.",
      "Exclusivamente da velocidade de translação com que a força é aplicada no vácuo.",
      "Das dimensões geométricas (comprimento, espessura e área) e da natureza do material constituinte."
    ],
    "correctIndex": 3,
    "explanation": "O slide 42 enfatiza que a constante elástica k depende do tamanho, forma e espessura definidos do corpo e não só do material.",
    "distractorAnalysis": [
      "Está incorreta: A constante k depende fortemente do comprimento e da secção geométrica da peça, não apenas do material atómico.",
      "Está incorreta: A constante elástica é uma propriedade intrínseca do corpo mecânico, não dependendo da aceleração da gravidade.",
      "Está incorreta: A rigidez k é uma propriedade elástica estática que não depende da velocidade no vácuo."
    ],
    "nursingApplication": "Explica por que uma mola espessa e curta é muito mais rígida (maior k) do que uma mola fina e comprida do mesmo material."
  },
  {
    "id": 2364,
    "topicId": 2,
    "question": "[Variação 2] Como se formula a Lei de Hooke Generalizada para meios contínuos elásticos (Slide 43)?",
    "options": [
      "σ = E · ε, onde σ é a tensão mecânica, E é o Módulo de Young e ε é a deformação relativa.",
      "F = m · a, onde m é a massa inercial e a é a aceleração linear do centro de massa.",
      "E = m · c², onde E é a energia relativista em repouso e c é a velocidade da luz.",
      "P = ρ · g · h, onde P é a pressão hidrostática a uma profundidade vertical h."
    ],
    "correctIndex": 0,
    "explanation": "A forma generalizada da Lei de Hooke estabelece que a tensão mecânica σ é proporcional à deformação relativa ε através do módulo de Young E.",
    "distractorAnalysis": [
      "Está incorreta: F = m · a é a Segunda Lei de Newton para o movimento de translação de partículas.",
      "Está incorreta: E = m · c² é a equivalência massa-energia da relatividade restrita de Einstein.",
      "Está incorreta: P = ρ · g · h é o Teorema Fundamental da Hidrostática (lei de Stevin)."
    ],
    "nursingApplication": "Permite analisar as tensões e deformações internas em biomateriais sem depender das dimensões totais da amostra."
  },
  {
    "id": 2365,
    "topicId": 2,
    "question": "[Variação 2] Na Lei de Hooke Generalizada, como se define a Tensão Mecânica (σ) (Slide 43)?",
    "options": [
      "O produto da força aplicada pelo intervalo de tempo durante o qual ocorre a colisão.",
      "A razão entre a força aplicada e a área da secção transversal sobre a qual a força atua (σ = F / A), expressa em Pa ou N/m².",
      "A variação relativa de volume dividida pela aceleração gravítica terrestre.",
      "A raiz quadrada da energia elástica dividida pelo comprimento inicial do corpo."
    ],
    "correctIndex": 1,
    "explanation": "Tensão mecânica σ mede a intensidade de força distribuída por unidade de área de secção transversal (F/A).",
    "distractorAnalysis": [
      "Está incorreta: O produto da força pelo tempo de colisão define o impulso mecânico (I = F · Δt), não a tensão.",
      "Está incorreta: A razão volumétrica pela gravidade não tem significado físico de tensão mecânica.",
      "Está incorreta: A raiz da energia dividida pelo comprimento não define tensão mecânica."
    ],
    "nursingApplication": "Crucial para avaliar a pressão interna suportada por articulações e implantes biomédicos."
  },
  {
    "id": 2366,
    "topicId": 2,
    "question": "[Variação 2] Na Lei de Hooke Generalizada, como se define a Deformação Relativa (ε) (Slide 43)?",
    "options": [
      "O produto da variação de comprimento pela área da secção transversal, com unidade em metros cúbicos.",
      "A velocidade linear instantânea com que as moléculas da extremidade se afastam durante a tração.",
      "A razão entre a variação de comprimento e o comprimento original (ε = ΔL / L₀), sendo uma grandeza adimensional.",
      "A força necessária para esticar a barra dividida pela densidade volumétrica do meio."
    ],
    "correctIndex": 2,
    "explanation": "A deformação relativa ε quantifica o alongamento ou encurtamento percentual relativamente ao tamanho inicial (ΔL / L₀).",
    "distractorAnalysis": [
      "Está incorreta: O produto do comprimento pela área mede uma variação de volume, não a deformação relativa linear.",
      "Está incorreta: Velocidade de afastamento molecular é uma taxa temporal cinemática, não a deformação relativa adimensional.",
      "Está incorreta: Força dividida por densidade não define deformação mecânica de um corpo."
    ],
    "nursingApplication": "Permite comparar o alongamento percentual de tecidos biológicos curtos e compridos sob tração."
  },
  {
    "id": 2367,
    "topicId": 2,
    "question": "[Variação 2] O que mede fisicamente o Módulo de Young (E) de um material (Slide 43)?",
    "options": [
      "A viscosidade dinâmica de fluidos biológicos ideais quando escoam em regime laminar.",
      "A capacidade de um corpo emitir calor por radiação infravermelha a temperaturas elevadas.",
      "A resistência puramente elétrica que um condutor metálico oferece à passagem de eletrões.",
      "A rigidez intrínseca do próprio material perante solicitações axiais de tração e compressão no regime elástico."
    ],
    "correctIndex": 3,
    "explanation": "O Módulo de Young E quantifica a resistência de um material à deformação elástica (E = σ / ε), medindo a sua rigidez intrínseca.",
    "distractorAnalysis": [
      "Está incorreta: Viscosidade dinâmica mede o atrito interno em fluidos em movimento, não a rigidez elástica de sólidos.",
      "Está incorreta: Emissão de radiação térmica é descrita pela lei de Stefan-Boltzmann na termodinâmica.",
      "Está incorreta: Resistência elétrica relaciona corrente e diferença de potencial elétrico (Lei de Ohm)."
    ],
    "nursingApplication": "Determina a rigidez elástica de ligamentos, cartilagens e próteses ortopédicas."
  },
  {
    "id": 2368,
    "topicId": 2,
    "question": "[Variação 2] Qual é a unidade do Módulo de Young (E) no Sistema Internacional de Unidades (SI) (Slide 43)?",
    "options": [
      "N/m² (Newton por metro quadrado), equivalente a Pascal (Pa).",
      "Joule por segundo (J/s), equivalente a Watt (W).",
      "Quilograma por metro cúbico (kg/m³).",
      "Metro por segundo ao quadrado (m/s²)."
    ],
    "correctIndex": 0,
    "explanation": "Como E = σ / ε e a deformação ε é adimensional, o módulo de Young tem a mesma unidade de tensão: N/m² ou Pa.",
    "distractorAnalysis": [
      "Está incorreta: Joule por segundo é Watt, a unidade de potência mecânica ou energética.",
      "Está incorreta: Quilograma por metro cúbico é a unidade de massa volúmica (densidade).",
      "Está incorreta: Metro por segundo ao quadrado é a unidade de aceleração no SI."
    ],
    "nursingApplication": "Facilita a leitura e comparação de especificações técnicas de resistência de biomateriais."
  },
  {
    "id": 2369,
    "topicId": 2,
    "question": "[Variação 2] Uma mola possui constante elástica k = 500 N/m. Que força é necessária para a comprimir de 0,02 m (2 cm)?",
    "options": [
      "25 000 N.",
      "10 N.",
      "0,00004 N.",
      "250 N."
    ],
    "correctIndex": 1,
    "explanation": "Pela Lei de Hooke: F = k · Δx = 500 N/m · 0,02 m = 10 N.",
    "distractorAnalysis": [
      "Está incorreta: 25 000 N resultaria de dividir incorretamente k por Δx² ou multiplicar por 50.",
      "Está incorreta: 0,00004 N resultaria de dividir Δx por k.",
      "Está incorreta: 250 N resultaria de uma multiplicação aritmética incorreta."
    ],
    "nursingApplication": "Permite calcular o esforço necessário para acionar sistemas elásticos mecânicos em suporte hospitalar."
  },
  {
    "id": 2370,
    "topicId": 2,
    "question": "[Variação 2] Qual é a diferença conceitual fundamental entre a Constante Elástica (k) e o Módulo de Young (E) (Slides 42 e 43)?",
    "options": [
      "k aplica-se apenas a gases rarefeitos, enquanto E descreve exclusivamente o vácuo quântico.",
      "k varia com a temperatura ambiente, enquanto E é uma constante universal inalterável no universo.",
      "k depende da forma e dimensões da peça em estudo, enquanto E é uma propriedade intrínseca exclusiva do material.",
      "k é uma grandeza vetorial com sentido horário, enquanto E é um escalar imaginário negativo."
    ],
    "correctIndex": 2,
    "explanation": "Uma barra de aço grossa tem constante k maior que um fio fino do mesmo aço, mas ambas as peças partilham exatamente o mesmo Módulo de Young E.",
    "distractorAnalysis": [
      "Está incorreta: Nem k nem E se aplicam a gases ou ao vácuo; ambas descrevem propriedades mecânicas de corpos e materiais sólidos.",
      "Está incorreta: Ambas as propriedades podem variar com a temperatura em condições físicas reais.",
      "Está incorreta: Constante elástica k e módulo de Young E são grandezas escalares reais positivas."
    ],
    "nursingApplication": "Fundamental para entender por que materiais iguais com espessuras diferentes resistem de modo distinto à flexão."
  },
  {
    "id": 2371,
    "topicId": 2,
    "question": "[Variação 3] Qual é o enunciado fundamental da Lei de Hooke formulada em 1660 (Slide 40)?",
    "options": [
      "A aceleração de um corpo rígido é inversamente proporcional ao quadrado da sua deformação angular.",
      "A força deformadora dissipa-se instantaneamente sob a forma de radiação gama no vácuo.",
      "Qualquer força deformadora produz deformações plásticas permanentes e irreversíveis em qualquer material.",
      "A deformação elástica sofrida por um corpo é diretamente proporcional à intensidade da força aplicada ('Ut tensio, sic vis')."
    ],
    "correctIndex": 3,
    "explanation": "Hooke estabeleceu que a extensão de uma mola ou barra elástica é proporcional à força tensora aplicada (F = k * Δx).",
    "distractorAnalysis": [
      "Está incorreta: A aceleração ser inversamente proporcional ao quadrado da deformação não tem fundamento na lei de Hooke.",
      "Está incorreta: Forças mecânicas normais não emitem radiação gama.",
      "Está incorreta: A lei de Hooke descreve deformações elásticas reversíveis, não deformações plásticas irreversíveis."
    ],
    "nursingApplication": "Fundamental para compreender o funcionamento de dinamómetros e a resposta elástica inicial de estruturas biológicas."
  },
  {
    "id": 2372,
    "topicId": 2,
    "question": "[Variação 3] Na expressão clássica da Lei de Hooke para uma mola, F = k · Δx, o que representa a grandeza 'k' (Slide 41)?",
    "options": [
      "A constante elástica do corpo, que mede a rigidez da estrutura e exprime-se em N/m no SI.",
      "O coeficiente de atrito estático adimensional entre a mola e o solo de apoio.",
      "A aceleração centrípeta gerada pela rotação do sistema elástico em torno do centro de massa.",
      "A energia potencial gravitacional acumulada pelo corpo à altitude zero."
    ],
    "correctIndex": 0,
    "explanation": "A constante elástica k (em N/m) quantifica a força necessária para produzir uma deformação unitária (1 metro).",
    "distractorAnalysis": [
      "Está incorreta: Coeficiente de atrito é uma grandeza adimensional que quantifica a oposição ao deslizamento entre superfícies.",
      "Está incorreta: Aceleração centrípeta depende da velocidade angular e do raio de curvatura, não sendo a rigidez de uma mola.",
      "Está incorreta: Energia potencial gravitacional exprime-se em Joules (J) e depende da massa, gravidade e altura."
    ],
    "nursingApplication": "Representa a resistência elástica que equipamentos com molas ou sensores de tração oferecem ao alongamento."
  },
  {
    "id": 2373,
    "topicId": 2,
    "question": "[Variação 3] De que depende o valor da constante elástica 'k' de um corpo elástico (Slide 42)?",
    "options": [
      "Exclusivamente da massa atómica média do material, sendo totalmente independente da sua forma e comprimento.",
      "Das dimensões geométricas (comprimento, espessura e área) e da natureza do material constituinte.",
      "Apenas da aceleração da gravidade local, duplicando se o ensaio for realizado na Lua.",
      "Exclusivamente da velocidade de translação com que a força é aplicada no vácuo."
    ],
    "correctIndex": 1,
    "explanation": "O slide 42 enfatiza que a constante elástica k depende do tamanho, forma e espessura definidos do corpo e não só do material.",
    "distractorAnalysis": [
      "Está incorreta: A constante k depende fortemente do comprimento e da secção geométrica da peça, não apenas do material atómico.",
      "Está incorreta: A constante elástica é uma propriedade intrínseca do corpo mecânico, não dependendo da aceleração da gravidade.",
      "Está incorreta: A rigidez k é uma propriedade elástica estática que não depende da velocidade no vácuo."
    ],
    "nursingApplication": "Explica por que uma mola espessa e curta é muito mais rígida (maior k) do que uma mola fina e comprida do mesmo material."
  },
  {
    "id": 2374,
    "topicId": 2,
    "question": "[Variação 3] Como se formula a Lei de Hooke Generalizada para meios contínuos elásticos (Slide 43)?",
    "options": [
      "F = m · a, onde m é a massa inercial e a é a aceleração linear do centro de massa.",
      "E = m · c², onde E é a energia relativista em repouso e c é a velocidade da luz.",
      "σ = E · ε, onde σ é a tensão mecânica, E é o Módulo de Young e ε é a deformação relativa.",
      "P = ρ · g · h, onde P é a pressão hidrostática a uma profundidade vertical h."
    ],
    "correctIndex": 2,
    "explanation": "A forma generalizada da Lei de Hooke estabelece que a tensão mecânica σ é proporcional à deformação relativa ε através do módulo de Young E.",
    "distractorAnalysis": [
      "Está incorreta: F = m · a é a Segunda Lei de Newton para o movimento de translação de partículas.",
      "Está incorreta: E = m · c² é a equivalência massa-energia da relatividade restrita de Einstein.",
      "Está incorreta: P = ρ · g · h é o Teorema Fundamental da Hidrostática (lei de Stevin)."
    ],
    "nursingApplication": "Permite analisar as tensões e deformações internas em biomateriais sem depender das dimensões totais da amostra."
  },
  {
    "id": 2375,
    "topicId": 2,
    "question": "[Variação 3] Na Lei de Hooke Generalizada, como se define a Tensão Mecânica (σ) (Slide 43)?",
    "options": [
      "O produto da força aplicada pelo intervalo de tempo durante o qual ocorre a colisão.",
      "A variação relativa de volume dividida pela aceleração gravítica terrestre.",
      "A raiz quadrada da energia elástica dividida pelo comprimento inicial do corpo.",
      "A razão entre a força aplicada e a área da secção transversal sobre a qual a força atua (σ = F / A), expressa em Pa ou N/m²."
    ],
    "correctIndex": 3,
    "explanation": "Tensão mecânica σ mede a intensidade de força distribuída por unidade de área de secção transversal (F/A).",
    "distractorAnalysis": [
      "Está incorreta: O produto da força pelo tempo de colisão define o impulso mecânico (I = F · Δt), não a tensão.",
      "Está incorreta: A razão volumétrica pela gravidade não tem significado físico de tensão mecânica.",
      "Está incorreta: A raiz da energia dividida pelo comprimento não define tensão mecânica."
    ],
    "nursingApplication": "Crucial para avaliar a pressão interna suportada por articulações e implantes biomédicos."
  },
  {
    "id": 2376,
    "topicId": 2,
    "question": "[Variação 3] Na Lei de Hooke Generalizada, como se define a Deformação Relativa (ε) (Slide 43)?",
    "options": [
      "A razão entre a variação de comprimento e o comprimento original (ε = ΔL / L₀), sendo uma grandeza adimensional.",
      "O produto da variação de comprimento pela área da secção transversal, com unidade em metros cúbicos.",
      "A velocidade linear instantânea com que as moléculas da extremidade se afastam durante a tração.",
      "A força necessária para esticar a barra dividida pela densidade volumétrica do meio."
    ],
    "correctIndex": 0,
    "explanation": "A deformação relativa ε quantifica o alongamento ou encurtamento percentual relativamente ao tamanho inicial (ΔL / L₀).",
    "distractorAnalysis": [
      "Está incorreta: O produto do comprimento pela área mede uma variação de volume, não a deformação relativa linear.",
      "Está incorreta: Velocidade de afastamento molecular é uma taxa temporal cinemática, não a deformação relativa adimensional.",
      "Está incorreta: Força dividida por densidade não define deformação mecânica de um corpo."
    ],
    "nursingApplication": "Permite comparar o alongamento percentual de tecidos biológicos curtos e compridos sob tração."
  },
  {
    "id": 2377,
    "topicId": 2,
    "question": "[Variação 3] O que mede fisicamente o Módulo de Young (E) de um material (Slide 43)?",
    "options": [
      "A viscosidade dinâmica de fluidos biológicos ideais quando escoam em regime laminar.",
      "A rigidez intrínseca do próprio material perante solicitações axiais de tração e compressão no regime elástico.",
      "A capacidade de um corpo emitir calor por radiação infravermelha a temperaturas elevadas.",
      "A resistência puramente elétrica que um condutor metálico oferece à passagem de eletrões."
    ],
    "correctIndex": 1,
    "explanation": "O Módulo de Young E quantifica a resistência de um material à deformação elástica (E = σ / ε), medindo a sua rigidez intrínseca.",
    "distractorAnalysis": [
      "Está incorreta: Viscosidade dinâmica mede o atrito interno em fluidos em movimento, não a rigidez elástica de sólidos.",
      "Está incorreta: Emissão de radiação térmica é descrita pela lei de Stefan-Boltzmann na termodinâmica.",
      "Está incorreta: Resistência elétrica relaciona corrente e diferença de potencial elétrico (Lei de Ohm)."
    ],
    "nursingApplication": "Determina a rigidez elástica de ligamentos, cartilagens e próteses ortopédicas."
  },
  {
    "id": 2378,
    "topicId": 2,
    "question": "[Variação 3] Qual é a unidade do Módulo de Young (E) no Sistema Internacional de Unidades (SI) (Slide 43)?",
    "options": [
      "Joule por segundo (J/s), equivalente a Watt (W).",
      "Quilograma por metro cúbico (kg/m³).",
      "N/m² (Newton por metro quadrado), equivalente a Pascal (Pa).",
      "Metro por segundo ao quadrado (m/s²)."
    ],
    "correctIndex": 2,
    "explanation": "Como E = σ / ε e a deformação ε é adimensional, o módulo de Young tem a mesma unidade de tensão: N/m² ou Pa.",
    "distractorAnalysis": [
      "Está incorreta: Joule por segundo é Watt, a unidade de potência mecânica ou energética.",
      "Está incorreta: Quilograma por metro cúbico é a unidade de massa volúmica (densidade).",
      "Está incorreta: Metro por segundo ao quadrado é a unidade de aceleração no SI."
    ],
    "nursingApplication": "Facilita a leitura e comparação de especificações técnicas de resistência de biomateriais."
  },
  {
    "id": 2379,
    "topicId": 2,
    "question": "[Variação 3] Uma mola possui constante elástica k = 500 N/m. Que força é necessária para a comprimir de 0,02 m (2 cm)?",
    "options": [
      "25 000 N.",
      "0,00004 N.",
      "250 N.",
      "10 N."
    ],
    "correctIndex": 3,
    "explanation": "Pela Lei de Hooke: F = k · Δx = 500 N/m · 0,02 m = 10 N.",
    "distractorAnalysis": [
      "Está incorreta: 25 000 N resultaria de dividir incorretamente k por Δx² ou multiplicar por 50.",
      "Está incorreta: 0,00004 N resultaria de dividir Δx por k.",
      "Está incorreta: 250 N resultaria de uma multiplicação aritmética incorreta."
    ],
    "nursingApplication": "Permite calcular o esforço necessário para acionar sistemas elásticos mecânicos em suporte hospitalar."
  },
  {
    "id": 2380,
    "topicId": 2,
    "question": "[Variação 3] Qual é a diferença conceitual fundamental entre a Constante Elástica (k) e o Módulo de Young (E) (Slides 42 e 43)?",
    "options": [
      "k depende da forma e dimensões da peça em estudo, enquanto E é uma propriedade intrínseca exclusiva do material.",
      "k aplica-se apenas a gases rarefeitos, enquanto E descreve exclusivamente o vácuo quântico.",
      "k varia com a temperatura ambiente, enquanto E é uma constante universal inalterável no universo.",
      "k é uma grandeza vetorial com sentido horário, enquanto E é um escalar imaginário negativo."
    ],
    "correctIndex": 0,
    "explanation": "Uma barra de aço grossa tem constante k maior que um fio fino do mesmo aço, mas ambas as peças partilham exatamente o mesmo Módulo de Young E.",
    "distractorAnalysis": [
      "Está incorreta: Nem k nem E se aplicam a gases ou ao vácuo; ambas descrevem propriedades mecânicas de corpos e materiais sólidos.",
      "Está incorreta: Ambas as propriedades podem variar com a temperatura em condições físicas reais.",
      "Está incorreta: Constante elástica k e módulo de Young E são grandezas escalares reais positivas."
    ],
    "nursingApplication": "Fundamental para entender por que materiais iguais com espessuras diferentes resistem de modo distinto à flexão."
  },
  {
    "id": 2381,
    "topicId": 2,
    "question": "[Variação 4] Qual é o enunciado fundamental da Lei de Hooke formulada em 1660 (Slide 40)?",
    "options": [
      "A aceleração de um corpo rígido é inversamente proporcional ao quadrado da sua deformação angular.",
      "A deformação elástica sofrida por um corpo é diretamente proporcional à intensidade da força aplicada ('Ut tensio, sic vis').",
      "A força deformadora dissipa-se instantaneamente sob a forma de radiação gama no vácuo.",
      "Qualquer força deformadora produz deformações plásticas permanentes e irreversíveis em qualquer material."
    ],
    "correctIndex": 1,
    "explanation": "Hooke estabeleceu que a extensão de uma mola ou barra elástica é proporcional à força tensora aplicada (F = k * Δx).",
    "distractorAnalysis": [
      "Está incorreta: A aceleração ser inversamente proporcional ao quadrado da deformação não tem fundamento na lei de Hooke.",
      "Está incorreta: Forças mecânicas normais não emitem radiação gama.",
      "Está incorreta: A lei de Hooke descreve deformações elásticas reversíveis, não deformações plásticas irreversíveis."
    ],
    "nursingApplication": "Fundamental para compreender o funcionamento de dinamómetros e a resposta elástica inicial de estruturas biológicas."
  },
  {
    "id": 2382,
    "topicId": 2,
    "question": "[Variação 4] Na expressão clássica da Lei de Hooke para uma mola, F = k · Δx, o que representa a grandeza 'k' (Slide 41)?",
    "options": [
      "O coeficiente de atrito estático adimensional entre a mola e o solo de apoio.",
      "A aceleração centrípeta gerada pela rotação do sistema elástico em torno do centro de massa.",
      "A constante elástica do corpo, que mede a rigidez da estrutura e exprime-se em N/m no SI.",
      "A energia potencial gravitacional acumulada pelo corpo à altitude zero."
    ],
    "correctIndex": 2,
    "explanation": "A constante elástica k (em N/m) quantifica a força necessária para produzir uma deformação unitária (1 metro).",
    "distractorAnalysis": [
      "Está incorreta: Coeficiente de atrito é uma grandeza adimensional que quantifica a oposição ao deslizamento entre superfícies.",
      "Está incorreta: Aceleração centrípeta depende da velocidade angular e do raio de curvatura, não sendo a rigidez de uma mola.",
      "Está incorreta: Energia potencial gravitacional exprime-se em Joules (J) e depende da massa, gravidade e altura."
    ],
    "nursingApplication": "Representa a resistência elástica que equipamentos com molas ou sensores de tração oferecem ao alongamento."
  },
  {
    "id": 2383,
    "topicId": 2,
    "question": "[Variação 4] De que depende o valor da constante elástica 'k' de um corpo elástico (Slide 42)?",
    "options": [
      "Exclusivamente da massa atómica média do material, sendo totalmente independente da sua forma e comprimento.",
      "Apenas da aceleração da gravidade local, duplicando se o ensaio for realizado na Lua.",
      "Exclusivamente da velocidade de translação com que a força é aplicada no vácuo.",
      "Das dimensões geométricas (comprimento, espessura e área) e da natureza do material constituinte."
    ],
    "correctIndex": 3,
    "explanation": "O slide 42 enfatiza que a constante elástica k depende do tamanho, forma e espessura definidos do corpo e não só do material.",
    "distractorAnalysis": [
      "Está incorreta: A constante k depende fortemente do comprimento e da secção geométrica da peça, não apenas do material atómico.",
      "Está incorreta: A constante elástica é uma propriedade intrínseca do corpo mecânico, não dependendo da aceleração da gravidade.",
      "Está incorreta: A rigidez k é uma propriedade elástica estática que não depende da velocidade no vácuo."
    ],
    "nursingApplication": "Explica por que uma mola espessa e curta é muito mais rígida (maior k) do que uma mola fina e comprida do mesmo material."
  },
  {
    "id": 2384,
    "topicId": 2,
    "question": "[Variação 4] Como se formula a Lei de Hooke Generalizada para meios contínuos elásticos (Slide 43)?",
    "options": [
      "σ = E · ε, onde σ é a tensão mecânica, E é o Módulo de Young e ε é a deformação relativa.",
      "F = m · a, onde m é a massa inercial e a é a aceleração linear do centro de massa.",
      "E = m · c², onde E é a energia relativista em repouso e c é a velocidade da luz.",
      "P = ρ · g · h, onde P é a pressão hidrostática a uma profundidade vertical h."
    ],
    "correctIndex": 0,
    "explanation": "A forma generalizada da Lei de Hooke estabelece que a tensão mecânica σ é proporcional à deformação relativa ε através do módulo de Young E.",
    "distractorAnalysis": [
      "Está incorreta: F = m · a é a Segunda Lei de Newton para o movimento de translação de partículas.",
      "Está incorreta: E = m · c² é a equivalência massa-energia da relatividade restrita de Einstein.",
      "Está incorreta: P = ρ · g · h é o Teorema Fundamental da Hidrostática (lei de Stevin)."
    ],
    "nursingApplication": "Permite analisar as tensões e deformações internas em biomateriais sem depender das dimensões totais da amostra."
  },
  {
    "id": 2385,
    "topicId": 2,
    "question": "[Variação 4] Na Lei de Hooke Generalizada, como se define a Tensão Mecânica (σ) (Slide 43)?",
    "options": [
      "O produto da força aplicada pelo intervalo de tempo durante o qual ocorre a colisão.",
      "A razão entre a força aplicada e a área da secção transversal sobre a qual a força atua (σ = F / A), expressa em Pa ou N/m².",
      "A variação relativa de volume dividida pela aceleração gravítica terrestre.",
      "A raiz quadrada da energia elástica dividida pelo comprimento inicial do corpo."
    ],
    "correctIndex": 1,
    "explanation": "Tensão mecânica σ mede a intensidade de força distribuída por unidade de área de secção transversal (F/A).",
    "distractorAnalysis": [
      "Está incorreta: O produto da força pelo tempo de colisão define o impulso mecânico (I = F · Δt), não a tensão.",
      "Está incorreta: A razão volumétrica pela gravidade não tem significado físico de tensão mecânica.",
      "Está incorreta: A raiz da energia dividida pelo comprimento não define tensão mecânica."
    ],
    "nursingApplication": "Crucial para avaliar a pressão interna suportada por articulações e implantes biomédicos."
  },
  {
    "id": 2386,
    "topicId": 2,
    "question": "[Variação 4] Na Lei de Hooke Generalizada, como se define a Deformação Relativa (ε) (Slide 43)?",
    "options": [
      "O produto da variação de comprimento pela área da secção transversal, com unidade em metros cúbicos.",
      "A velocidade linear instantânea com que as moléculas da extremidade se afastam durante a tração.",
      "A razão entre a variação de comprimento e o comprimento original (ε = ΔL / L₀), sendo uma grandeza adimensional.",
      "A força necessária para esticar a barra dividida pela densidade volumétrica do meio."
    ],
    "correctIndex": 2,
    "explanation": "A deformação relativa ε quantifica o alongamento ou encurtamento percentual relativamente ao tamanho inicial (ΔL / L₀).",
    "distractorAnalysis": [
      "Está incorreta: O produto do comprimento pela área mede uma variação de volume, não a deformação relativa linear.",
      "Está incorreta: Velocidade de afastamento molecular é uma taxa temporal cinemática, não a deformação relativa adimensional.",
      "Está incorreta: Força dividida por densidade não define deformação mecânica de um corpo."
    ],
    "nursingApplication": "Permite comparar o alongamento percentual de tecidos biológicos curtos e compridos sob tração."
  },
  {
    "id": 2387,
    "topicId": 2,
    "question": "[Variação 4] O que mede fisicamente o Módulo de Young (E) de um material (Slide 43)?",
    "options": [
      "A viscosidade dinâmica de fluidos biológicos ideais quando escoam em regime laminar.",
      "A capacidade de um corpo emitir calor por radiação infravermelha a temperaturas elevadas.",
      "A resistência puramente elétrica que um condutor metálico oferece à passagem de eletrões.",
      "A rigidez intrínseca do próprio material perante solicitações axiais de tração e compressão no regime elástico."
    ],
    "correctIndex": 3,
    "explanation": "O Módulo de Young E quantifica a resistência de um material à deformação elástica (E = σ / ε), medindo a sua rigidez intrínseca.",
    "distractorAnalysis": [
      "Está incorreta: Viscosidade dinâmica mede o atrito interno em fluidos em movimento, não a rigidez elástica de sólidos.",
      "Está incorreta: Emissão de radiação térmica é descrita pela lei de Stefan-Boltzmann na termodinâmica.",
      "Está incorreta: Resistência elétrica relaciona corrente e diferença de potencial elétrico (Lei de Ohm)."
    ],
    "nursingApplication": "Determina a rigidez elástica de ligamentos, cartilagens e próteses ortopédicas."
  },
  {
    "id": 2388,
    "topicId": 2,
    "question": "[Variação 4] Qual é a unidade do Módulo de Young (E) no Sistema Internacional de Unidades (SI) (Slide 43)?",
    "options": [
      "N/m² (Newton por metro quadrado), equivalente a Pascal (Pa).",
      "Joule por segundo (J/s), equivalente a Watt (W).",
      "Quilograma por metro cúbico (kg/m³).",
      "Metro por segundo ao quadrado (m/s²)."
    ],
    "correctIndex": 0,
    "explanation": "Como E = σ / ε e a deformação ε é adimensional, o módulo de Young tem a mesma unidade de tensão: N/m² ou Pa.",
    "distractorAnalysis": [
      "Está incorreta: Joule por segundo é Watt, a unidade de potência mecânica ou energética.",
      "Está incorreta: Quilograma por metro cúbico é a unidade de massa volúmica (densidade).",
      "Está incorreta: Metro por segundo ao quadrado é a unidade de aceleração no SI."
    ],
    "nursingApplication": "Facilita a leitura e comparação de especificações técnicas de resistência de biomateriais."
  },
  {
    "id": 2389,
    "topicId": 2,
    "question": "[Variação 4] Uma mola possui constante elástica k = 500 N/m. Que força é necessária para a comprimir de 0,02 m (2 cm)?",
    "options": [
      "25 000 N.",
      "10 N.",
      "0,00004 N.",
      "250 N."
    ],
    "correctIndex": 1,
    "explanation": "Pela Lei de Hooke: F = k · Δx = 500 N/m · 0,02 m = 10 N.",
    "distractorAnalysis": [
      "Está incorreta: 25 000 N resultaria de dividir incorretamente k por Δx² ou multiplicar por 50.",
      "Está incorreta: 0,00004 N resultaria de dividir Δx por k.",
      "Está incorreta: 250 N resultaria de uma multiplicação aritmética incorreta."
    ],
    "nursingApplication": "Permite calcular o esforço necessário para acionar sistemas elásticos mecânicos em suporte hospitalar."
  },
  {
    "id": 2390,
    "topicId": 2,
    "question": "[Variação 4] Qual é a diferença conceitual fundamental entre a Constante Elástica (k) e o Módulo de Young (E) (Slides 42 e 43)?",
    "options": [
      "k aplica-se apenas a gases rarefeitos, enquanto E descreve exclusivamente o vácuo quântico.",
      "k varia com a temperatura ambiente, enquanto E é uma constante universal inalterável no universo.",
      "k depende da forma e dimensões da peça em estudo, enquanto E é uma propriedade intrínseca exclusiva do material.",
      "k é uma grandeza vetorial com sentido horário, enquanto E é um escalar imaginário negativo."
    ],
    "correctIndex": 2,
    "explanation": "Uma barra de aço grossa tem constante k maior que um fio fino do mesmo aço, mas ambas as peças partilham exatamente o mesmo Módulo de Young E.",
    "distractorAnalysis": [
      "Está incorreta: Nem k nem E se aplicam a gases ou ao vácuo; ambas descrevem propriedades mecânicas de corpos e materiais sólidos.",
      "Está incorreta: Ambas as propriedades podem variar com a temperatura em condições físicas reais.",
      "Está incorreta: Constante elástica k e módulo de Young E são grandezas escalares reais positivas."
    ],
    "nursingApplication": "Fundamental para entender por que materiais iguais com espessuras diferentes resistem de modo distinto à flexão."
  },
  {
    "id": 2391,
    "topicId": 2,
    "question": "[Variação 5] Qual é o enunciado fundamental da Lei de Hooke formulada em 1660 (Slide 40)?",
    "options": [
      "A aceleração de um corpo rígido é inversamente proporcional ao quadrado da sua deformação angular.",
      "A força deformadora dissipa-se instantaneamente sob a forma de radiação gama no vácuo.",
      "Qualquer força deformadora produz deformações plásticas permanentes e irreversíveis em qualquer material.",
      "A deformação elástica sofrida por um corpo é diretamente proporcional à intensidade da força aplicada ('Ut tensio, sic vis')."
    ],
    "correctIndex": 3,
    "explanation": "Hooke estabeleceu que a extensão de uma mola ou barra elástica é proporcional à força tensora aplicada (F = k * Δx).",
    "distractorAnalysis": [
      "Está incorreta: A aceleração ser inversamente proporcional ao quadrado da deformação não tem fundamento na lei de Hooke.",
      "Está incorreta: Forças mecânicas normais não emitem radiação gama.",
      "Está incorreta: A lei de Hooke descreve deformações elásticas reversíveis, não deformações plásticas irreversíveis."
    ],
    "nursingApplication": "Fundamental para compreender o funcionamento de dinamómetros e a resposta elástica inicial de estruturas biológicas."
  },
  {
    "id": 2392,
    "topicId": 2,
    "question": "[Variação 5] Na expressão clássica da Lei de Hooke para uma mola, F = k · Δx, o que representa a grandeza 'k' (Slide 41)?",
    "options": [
      "A constante elástica do corpo, que mede a rigidez da estrutura e exprime-se em N/m no SI.",
      "O coeficiente de atrito estático adimensional entre a mola e o solo de apoio.",
      "A aceleração centrípeta gerada pela rotação do sistema elástico em torno do centro de massa.",
      "A energia potencial gravitacional acumulada pelo corpo à altitude zero."
    ],
    "correctIndex": 0,
    "explanation": "A constante elástica k (em N/m) quantifica a força necessária para produzir uma deformação unitária (1 metro).",
    "distractorAnalysis": [
      "Está incorreta: Coeficiente de atrito é uma grandeza adimensional que quantifica a oposição ao deslizamento entre superfícies.",
      "Está incorreta: Aceleração centrípeta depende da velocidade angular e do raio de curvatura, não sendo a rigidez de uma mola.",
      "Está incorreta: Energia potencial gravitacional exprime-se em Joules (J) e depende da massa, gravidade e altura."
    ],
    "nursingApplication": "Representa a resistência elástica que equipamentos com molas ou sensores de tração oferecem ao alongamento."
  },
  {
    "id": 2393,
    "topicId": 2,
    "question": "[Variação 5] De que depende o valor da constante elástica 'k' de um corpo elástico (Slide 42)?",
    "options": [
      "Exclusivamente da massa atómica média do material, sendo totalmente independente da sua forma e comprimento.",
      "Das dimensões geométricas (comprimento, espessura e área) e da natureza do material constituinte.",
      "Apenas da aceleração da gravidade local, duplicando se o ensaio for realizado na Lua.",
      "Exclusivamente da velocidade de translação com que a força é aplicada no vácuo."
    ],
    "correctIndex": 1,
    "explanation": "O slide 42 enfatiza que a constante elástica k depende do tamanho, forma e espessura definidos do corpo e não só do material.",
    "distractorAnalysis": [
      "Está incorreta: A constante k depende fortemente do comprimento e da secção geométrica da peça, não apenas do material atómico.",
      "Está incorreta: A constante elástica é uma propriedade intrínseca do corpo mecânico, não dependendo da aceleração da gravidade.",
      "Está incorreta: A rigidez k é uma propriedade elástica estática que não depende da velocidade no vácuo."
    ],
    "nursingApplication": "Explica por que uma mola espessa e curta é muito mais rígida (maior k) do que uma mola fina e comprida do mesmo material."
  },
  {
    "id": 2394,
    "topicId": 2,
    "question": "[Variação 5] Como se formula a Lei de Hooke Generalizada para meios contínuos elásticos (Slide 43)?",
    "options": [
      "F = m · a, onde m é a massa inercial e a é a aceleração linear do centro de massa.",
      "E = m · c², onde E é a energia relativista em repouso e c é a velocidade da luz.",
      "σ = E · ε, onde σ é a tensão mecânica, E é o Módulo de Young e ε é a deformação relativa.",
      "P = ρ · g · h, onde P é a pressão hidrostática a uma profundidade vertical h."
    ],
    "correctIndex": 2,
    "explanation": "A forma generalizada da Lei de Hooke estabelece que a tensão mecânica σ é proporcional à deformação relativa ε através do módulo de Young E.",
    "distractorAnalysis": [
      "Está incorreta: F = m · a é a Segunda Lei de Newton para o movimento de translação de partículas.",
      "Está incorreta: E = m · c² é a equivalência massa-energia da relatividade restrita de Einstein.",
      "Está incorreta: P = ρ · g · h é o Teorema Fundamental da Hidrostática (lei de Stevin)."
    ],
    "nursingApplication": "Permite analisar as tensões e deformações internas em biomateriais sem depender das dimensões totais da amostra."
  },
  {
    "id": 2395,
    "topicId": 2,
    "question": "[Variação 5] Na Lei de Hooke Generalizada, como se define a Tensão Mecânica (σ) (Slide 43)?",
    "options": [
      "O produto da força aplicada pelo intervalo de tempo durante o qual ocorre a colisão.",
      "A variação relativa de volume dividida pela aceleração gravítica terrestre.",
      "A raiz quadrada da energia elástica dividida pelo comprimento inicial do corpo.",
      "A razão entre a força aplicada e a área da secção transversal sobre a qual a força atua (σ = F / A), expressa em Pa ou N/m²."
    ],
    "correctIndex": 3,
    "explanation": "Tensão mecânica σ mede a intensidade de força distribuída por unidade de área de secção transversal (F/A).",
    "distractorAnalysis": [
      "Está incorreta: O produto da força pelo tempo de colisão define o impulso mecânico (I = F · Δt), não a tensão.",
      "Está incorreta: A razão volumétrica pela gravidade não tem significado físico de tensão mecânica.",
      "Está incorreta: A raiz da energia dividida pelo comprimento não define tensão mecânica."
    ],
    "nursingApplication": "Crucial para avaliar a pressão interna suportada por articulações e implantes biomédicos."
  },
  {
    "id": 2396,
    "topicId": 2,
    "question": "[Variação 5] Na Lei de Hooke Generalizada, como se define a Deformação Relativa (ε) (Slide 43)?",
    "options": [
      "A razão entre a variação de comprimento e o comprimento original (ε = ΔL / L₀), sendo uma grandeza adimensional.",
      "O produto da variação de comprimento pela área da secção transversal, com unidade em metros cúbicos.",
      "A velocidade linear instantânea com que as moléculas da extremidade se afastam durante a tração.",
      "A força necessária para esticar a barra dividida pela densidade volumétrica do meio."
    ],
    "correctIndex": 0,
    "explanation": "A deformação relativa ε quantifica o alongamento ou encurtamento percentual relativamente ao tamanho inicial (ΔL / L₀).",
    "distractorAnalysis": [
      "Está incorreta: O produto do comprimento pela área mede uma variação de volume, não a deformação relativa linear.",
      "Está incorreta: Velocidade de afastamento molecular é uma taxa temporal cinemática, não a deformação relativa adimensional.",
      "Está incorreta: Força dividida por densidade não define deformação mecânica de um corpo."
    ],
    "nursingApplication": "Permite comparar o alongamento percentual de tecidos biológicos curtos e compridos sob tração."
  },
  {
    "id": 2397,
    "topicId": 2,
    "question": "[Variação 5] O que mede fisicamente o Módulo de Young (E) de um material (Slide 43)?",
    "options": [
      "A viscosidade dinâmica de fluidos biológicos ideais quando escoam em regime laminar.",
      "A rigidez intrínseca do próprio material perante solicitações axiais de tração e compressão no regime elástico.",
      "A capacidade de um corpo emitir calor por radiação infravermelha a temperaturas elevadas.",
      "A resistência puramente elétrica que um condutor metálico oferece à passagem de eletrões."
    ],
    "correctIndex": 1,
    "explanation": "O Módulo de Young E quantifica a resistência de um material à deformação elástica (E = σ / ε), medindo a sua rigidez intrínseca.",
    "distractorAnalysis": [
      "Está incorreta: Viscosidade dinâmica mede o atrito interno em fluidos em movimento, não a rigidez elástica de sólidos.",
      "Está incorreta: Emissão de radiação térmica é descrita pela lei de Stefan-Boltzmann na termodinâmica.",
      "Está incorreta: Resistência elétrica relaciona corrente e diferença de potencial elétrico (Lei de Ohm)."
    ],
    "nursingApplication": "Determina a rigidez elástica de ligamentos, cartilagens e próteses ortopédicas."
  },
  {
    "id": 2398,
    "topicId": 2,
    "question": "[Variação 5] Qual é a unidade do Módulo de Young (E) no Sistema Internacional de Unidades (SI) (Slide 43)?",
    "options": [
      "Joule por segundo (J/s), equivalente a Watt (W).",
      "Quilograma por metro cúbico (kg/m³).",
      "N/m² (Newton por metro quadrado), equivalente a Pascal (Pa).",
      "Metro por segundo ao quadrado (m/s²)."
    ],
    "correctIndex": 2,
    "explanation": "Como E = σ / ε e a deformação ε é adimensional, o módulo de Young tem a mesma unidade de tensão: N/m² ou Pa.",
    "distractorAnalysis": [
      "Está incorreta: Joule por segundo é Watt, a unidade de potência mecânica ou energética.",
      "Está incorreta: Quilograma por metro cúbico é a unidade de massa volúmica (densidade).",
      "Está incorreta: Metro por segundo ao quadrado é a unidade de aceleração no SI."
    ],
    "nursingApplication": "Facilita a leitura e comparação de especificações técnicas de resistência de biomateriais."
  },
  {
    "id": 2399,
    "topicId": 2,
    "question": "[Variação 5] Uma mola possui constante elástica k = 500 N/m. Que força é necessária para a comprimir de 0,02 m (2 cm)?",
    "options": [
      "25 000 N.",
      "0,00004 N.",
      "250 N.",
      "10 N."
    ],
    "correctIndex": 3,
    "explanation": "Pela Lei de Hooke: F = k · Δx = 500 N/m · 0,02 m = 10 N.",
    "distractorAnalysis": [
      "Está incorreta: 25 000 N resultaria de dividir incorretamente k por Δx² ou multiplicar por 50.",
      "Está incorreta: 0,00004 N resultaria de dividir Δx por k.",
      "Está incorreta: 250 N resultaria de uma multiplicação aritmética incorreta."
    ],
    "nursingApplication": "Permite calcular o esforço necessário para acionar sistemas elásticos mecânicos em suporte hospitalar."
  },
  {
    "id": 2400,
    "topicId": 2,
    "question": "[Variação 5] Qual é a diferença conceitual fundamental entre a Constante Elástica (k) e o Módulo de Young (E) (Slides 42 e 43)?",
    "options": [
      "k depende da forma e dimensões da peça em estudo, enquanto E é uma propriedade intrínseca exclusiva do material.",
      "k aplica-se apenas a gases rarefeitos, enquanto E descreve exclusivamente o vácuo quântico.",
      "k varia com a temperatura ambiente, enquanto E é uma constante universal inalterável no universo.",
      "k é uma grandeza vetorial com sentido horário, enquanto E é um escalar imaginário negativo."
    ],
    "correctIndex": 0,
    "explanation": "Uma barra de aço grossa tem constante k maior que um fio fino do mesmo aço, mas ambas as peças partilham exatamente o mesmo Módulo de Young E.",
    "distractorAnalysis": [
      "Está incorreta: Nem k nem E se aplicam a gases ou ao vácuo; ambas descrevem propriedades mecânicas de corpos e materiais sólidos.",
      "Está incorreta: Ambas as propriedades podem variar com a temperatura em condições físicas reais.",
      "Está incorreta: Constante elástica k e módulo de Young E são grandezas escalares reais positivas."
    ],
    "nursingApplication": "Fundamental para entender por que materiais iguais com espessuras diferentes resistem de modo distinto à flexão."
  },
  {
    "id": 2401,
    "topicId": 2,
    "question": "Qual é o valor do Módulo de Young do Aço apresentado nos slides (Slide 44)?",
    "options": [
      "2 × 10¹⁰ N/m², sendo idêntico ao módulo elástico do osso cortical.",
      "20 × 10¹⁰ N/m² (ou 2 × 10¹¹ N/m²), caracterizando um material extremamente rígido.",
      "10⁶ N/m², apresentando rigidez semelhante à da borracha comum.",
      "Zero N/m², pois o aço é um fluido viscoso em repouso."
    ],
    "correctIndex": 1,
    "explanation": "O aço possui módulo de Young de 20 × 10¹⁰ N/m² (200 GPa), conferindo-lhe altíssima rigidez mecânica e quase nula deformação sob cargas moderadas.",
    "distractorAnalysis": [
      "Está incorreta: 2 × 10¹⁰ N/m² é o módulo de Young do osso cortical humano, 10 vezes menor que o do aço.",
      "Está incorreta: 10⁶ N/m² é o módulo de Young da borracha vulcanizada, extremamente flexível.",
      "Está incorreta: O aço sólido não tem módulo nulo nem se comporta como fluido viscoso."
    ],
    "nursingApplication": "Explica a elevada resistência e estabilidade estrutural de ligas metálicas em instrumentos cirúrgicos e camas hospitalares."
  },
  {
    "id": 2402,
    "topicId": 2,
    "question": "Qual é o valor do Módulo de Young do Osso cortical humano indicado nos slides (Slide 44)?",
    "options": [
      "20 × 10¹⁰ N/m², sendo tão rígido e inextensível como o aço maciço.",
      "7 × 10¹⁰ N/m², comportando-se mecanicamente de forma idêntica ao vidro comum.",
      "2 × 10¹⁰ N/m², conferindo rigidez com excelente capacidade elástica de amortecimento.",
      "0,5 × 10³ N/m², comportando-se como borracha extremamente flexível."
    ],
    "correctIndex": 2,
    "explanation": "O osso possui E = 2 × 10¹⁰ N/m² (20 GPa), sendo 10 vezes menos rígido que o aço, o que lhe confere flexibilidade essencial para absorver impactos sem quebrar.",
    "distractorAnalysis": [
      "Está incorreta: 20 × 10¹⁰ N/m² é o módulo do aço, que tornaria o esqueleto excessivamente rígido e incapaz de absorver choques sem fraturar juntas.",
      "Está incorreta: 7 × 10¹⁰ N/m² é o módulo do vidro, caracterizado por fragilidade extrema sem deformação plástica.",
      "Está incorreta: Módulos da ordem de 10³ N/m² correspondem a borrachas e géis moles, incompatíveis com a sustentação do esqueleto."
    ],
    "nursingApplication": "Essencial para compreender a resistência das diáfises ósseas às cargas do peso corporal diário."
  },
  {
    "id": 2403,
    "topicId": 2,
    "question": "Como se compara a rigidez do Aço com a rigidez do Osso segundo os dados dos slides (Slide 44)?",
    "options": [
      "O osso cortical é 100 vezes mais rígido do que o aço temperado.",
      "Ambos os materiais têm exatamente a mesma rigidez estrutural perante esforços axiais.",
      "O osso é infinitamente rígido, correspondendo ao sólido indeformável de Euclides.",
      "O aço é cerca de 10 vezes mais rígido do que o osso cortical (E_aço / E_osso = 10)."
    ],
    "correctIndex": 3,
    "explanation": "E_aço = 20 × 10¹⁰ N/m² e E_osso = 2 × 10¹⁰ N/m²; logo, 20 / 2 = 10 vezes mais rígido.",
    "distractorAnalysis": [
      "Está incorreta: O osso é mais deformável que o aço, não sendo mais rígido.",
      "Está incorreta: Os valores diferem por uma ordem de grandeza (fator 10), não sendo iguais.",
      "Está incorreta: O osso é um material viscoelástico real, não um sólido indeformável de Euclides."
    ],
    "nursingApplication": "Explica o desafio de 'stress shielding' quando implantes metálicos de aço/titânio são colocados em contacto com o osso humano."
  },
  {
    "id": 2404,
    "topicId": 2,
    "question": "Qual é a característica mecânica do Vidro (E = 7 × 10¹⁰ N/m²) descrita no Slide 44?",
    "options": [
      "Elevada rigidez teórica, mas grande fragilidade com fratura sem deformação plástica prévia.",
      "Capacidade extrema de deformação plástica antes da rutura, comportando-se como fio de cobre.",
      "Rigidez extremamente reduzida, idêntica à da borracha sintética.",
      "Comportamento puramente plastoviscoelástico semelhante à massa de pão."
    ],
    "correctIndex": 0,
    "explanation": "O vidro é muito rígido mas frágil: sob tensão excessiva, quebra abruptamente sem aviso de escoamento plástico prévio.",
    "distractorAnalysis": [
      "Está incorreta: O vidro não apresenta escoamento plástico significativo; a sua fratura é frágil e repentina.",
      "Está incorreta: Com E = 70 GPa, o vidro tem rigidez 1000 vezes superior à da borracha.",
      "Está incorreta: Massa de pão é um corpo plastoviscoelástico; o vidro é um sólido elástico linear frágil."
    ],
    "nursingApplication": "Alerta para a fragilidade mecânica de ampolas e frascos de vidro em ambiente de trabalho hospitalar."
  },
  {
    "id": 2405,
    "topicId": 2,
    "question": "Como se caracteriza a Borracha em termos de Módulo de Young (Slide 44)?",
    "options": [
      "Apresenta módulo superior ao do aço maciço, não sofrendo qualquer deformação mecânica mensurável.",
      "Apresenta módulo extremamente baixo (10⁶ a 10⁸ N/m²), sofrendo grandes deformações elásticas reversíveis sob cargas mínimas.",
      "É um material perfeitamente rígido correspondente ao sólido ideal de Euclides.",
      "Fratura de modo extremamente frágil à mais pequena força de compressão aplicada."
    ],
    "correctIndex": 1,
    "explanation": "A borracha tem E muito baixo (0,1 a 10 × 10⁷ N/m²), permitindo esticar centenas de porcento e retornar elasticamente à forma inicial.",
    "distractorAnalysis": [
      "Está incorreta: O módulo da borracha é ordens de grandeza inferior ao do aço, não superior.",
      "Está incorreta: A borracha é o oposto de um sólido rígido indeformável; é um elastómero altamente flexível.",
      "Está incorreta: A borracha não apresenta comportamento frágil; suporta grandes deformações sem partir."
    ],
    "nursingApplication": "Explica a utilidade de torniquetes de borracha e luvas flexíveis em procedimentos de enfermagem."
  },
  {
    "id": 2406,
    "topicId": 2,
    "question": "Num gráfico Tensão vs Deformação (σ vs ε), o que representa o Limite de Proporcionalidade?",
    "options": [
      "O ponto exato onde o corpo se funde e passa do estado sólido ao estado líquido.",
      "O ponto de rutura irreversível onde a amostra se divide em duas partes.",
      "O ponto até ao qual a tensão é estritamente proporcional à deformação, vigorando a Lei de Hooke linear.",
      "O patamar onde a deformação cessa completamente mesmo com força infinita."
    ],
    "correctIndex": 2,
    "explanation": "Até ao limite de proporcionalidade, o gráfico σ vs ε é uma linha reta perfeita com declive constante igual ao módulo de Young E.",
    "distractorAnalysis": [
      "Está incorreta: Fusão de materiais é uma transição de fase térmica, não um limite mecânico na curva tensão-deformação.",
      "Está incorreta: O ponto de rutura ocorre muito mais à frente na curva, após o escoamento ou no final do regime elástico.",
      "Está incorreta: A deformação não cessa com força infinita; a peça quebra sob tensões excessivas."
    ],
    "nursingApplication": "Determina a faixa de cargas mecânicas seguras em que a resposta elástica de uma estrutura é perfeitamente previsível."
  },
  {
    "id": 2407,
    "topicId": 2,
    "question": "Num gráfico Tensão vs Deformação, o que acontece se o material for solicitado além do Limite Elástico?",
    "options": [
      "O material regressa instantaneamente à forma original sem qualquer resíduo mecânico.",
      "A rigidez intrínseca do corpo torna-se infinita transformando-o num sólido de Euclides.",
      "A massa total do corpo duplica por conservação do momento angular linear.",
      "O material entra no regime plástico, sofrendo deformações permanentes que não se anulam após a remoção da carga."
    ],
    "correctIndex": 3,
    "explanation": "Ultrapassado o limite de elasticidade, as ligações atómicas escorregam e o sólido não recupera a sua forma inicial (deformação plástica permanente).",
    "distractorAnalysis": [
      "Está incorreta: Regressar à forma original ocorre apenas dentro do regime elástico, abaixo do limite de elasticidade.",
      "Está incorreta: A rigidez não se torna infinita nem o corpo se transforma num modelo teórico indeformável.",
      "Está incorreta: A massa de um corpo fechado permanece constante por conservação da matéria."
    ],
    "nursingApplication": "Explica por que entorses articulares graves ou sobrecargas ósseas podem deixar deformidades permanentes."
  },
  {
    "id": 2408,
    "topicId": 2,
    "question": "Qual é a diferença fundamental entre um material Frágil e um material Dúctil (Slide 44)?",
    "options": [
      "O material frágil fratura abruptamente sem deformação plástica prévia, enquanto o dúctil sofre grande deformação plástica antes da rutura.",
      "O material frágil nunca quebra sob nenhuma força, enquanto o dúctil quebra espontaneamente em repouso.",
      "O material frágil é sempre líquido, enquanto o material dúctil é sempre gasoso à temperatura ambiente.",
      "Ambos os materiais têm comportamento mecânico perfeitamente idêntico em qualquer ensaio de tração."
    ],
    "correctIndex": 0,
    "explanation": "Materiais frágeis (como o vidro) quebram assim que atingem o limite elástico; materiais dúcteis (como a prata e o cobre) deformam-se plasticamente antes de fraturar.",
    "distractorAnalysis": [
      "Está incorreta: Materiais frágeis quebram facilmente quando sobrecarregados; materiais dúcteis suportam deformação plástica sem quebra imediata.",
      "Está incorreta: Frágil e dúctil são qualificações mecânicas de sólidos estruturais, não de líquidos ou gases.",
      "Está incorreta: Frágil e dúctil representam comportamentos mecânicos opostos quanto à capacidade de deformação plástica."
    ],
    "nursingApplication": "Ajuda a escolher materiais cirúrgicos que resistam a impactos sem partir de forma catastrófica."
  },
  {
    "id": 2409,
    "topicId": 2,
    "question": "Num ensaio mecânico de tração, a inclinação (declive) da zona linear elástica na curva σ vs ε representa:",
    "options": [
      "A aceleração gravítica local da Terra.",
      "O Módulo de Young (E) do material testado.",
      "A energia cinética translacional total do laboratório.",
      "O coeficiente de viscosidade de Poiseuille do fluido intersticial."
    ],
    "correctIndex": 1,
    "explanation": "Na região linear, σ = E · ε, logo o declive da reta (Δσ / Δε) é precisamente o módulo de Young E.",
    "distractorAnalysis": [
      "Está incorreta: Aceleração gravítica é uma constante de campo gravitacional, não o declive da curva tensão-deformação.",
      "Está incorreta: Energia cinética do laboratório não mede propriedades constitutivas elásticas de materiais.",
      "Está incorreta: Viscosidade de Poiseuille descreve escoamento laminar de fluidos em tubos, não o declive elástico de sólidos."
    ],
    "nursingApplication": "Permite aos bioengenheiros determinar a rigidez de tecidos e biomateriais em laboratório de ensaios mecânicos."
  },
  {
    "id": 2410,
    "topicId": 2,
    "question": "O que representa o Ponto de Rutura (ou Tensão de Fratura) na curva Tensão-Deformação?",
    "options": [
      "A tensão onde o material atinge a temperatura do zero absoluto.",
      "O ponto onde a força de atrito estático se transforma em força eletromagnética pura.",
      "O valor de tensão mecânica no qual o material perde a coesão estrutural e quebra em duas ou mais partes.",
      "A pressão mínima necessária para manter a circulação sanguínea em repouso absoluto."
    ],
    "correctIndex": 2,
    "explanation": "A fratura mecânica corresponde à rutura física irreversível do material sob esforço mecânico excessivo.",
    "distractorAnalysis": [
      "Está incorreta: O ponto de rutura é um limite de coesão mecânica, não uma transição térmica para o zero absoluto.",
      "Está incorreta: A rutura não transforma atrito estático em ondas eletromagnéticas puras.",
      "Está incorreta: Não tem relação com a pressão mínima de circulação sanguínea humana."
    ],
    "nursingApplication": "Permite estabelecer as margens de segurança para evitar fraturas ósseas e ruturas de implantes."
  },
  {
    "id": 2411,
    "topicId": 2,
    "question": "[Variação 2] Qual é o valor do Módulo de Young do Aço apresentado nos slides (Slide 44)?",
    "options": [
      "2 × 10¹⁰ N/m², sendo idêntico ao módulo elástico do osso cortical.",
      "10⁶ N/m², apresentando rigidez semelhante à da borracha comum.",
      "Zero N/m², pois o aço é um fluido viscoso em repouso.",
      "20 × 10¹⁰ N/m² (ou 2 × 10¹¹ N/m²), caracterizando um material extremamente rígido."
    ],
    "correctIndex": 3,
    "explanation": "O aço possui módulo de Young de 20 × 10¹⁰ N/m² (200 GPa), conferindo-lhe altíssima rigidez mecânica e quase nula deformação sob cargas moderadas.",
    "distractorAnalysis": [
      "Está incorreta: 2 × 10¹⁰ N/m² é o módulo de Young do osso cortical humano, 10 vezes menor que o do aço.",
      "Está incorreta: 10⁶ N/m² é o módulo de Young da borracha vulcanizada, extremamente flexível.",
      "Está incorreta: O aço sólido não tem módulo nulo nem se comporta como fluido viscoso."
    ],
    "nursingApplication": "Explica a elevada resistência e estabilidade estrutural de ligas metálicas em instrumentos cirúrgicos e camas hospitalares."
  },
  {
    "id": 2412,
    "topicId": 2,
    "question": "[Variação 2] Qual é o valor do Módulo de Young do Osso cortical humano indicado nos slides (Slide 44)?",
    "options": [
      "2 × 10¹⁰ N/m², conferindo rigidez com excelente capacidade elástica de amortecimento.",
      "20 × 10¹⁰ N/m², sendo tão rígido e inextensível como o aço maciço.",
      "7 × 10¹⁰ N/m², comportando-se mecanicamente de forma idêntica ao vidro comum.",
      "0,5 × 10³ N/m², comportando-se como borracha extremamente flexível."
    ],
    "correctIndex": 0,
    "explanation": "O osso possui E = 2 × 10¹⁰ N/m² (20 GPa), sendo 10 vezes menos rígido que o aço, o que lhe confere flexibilidade essencial para absorver impactos sem quebrar.",
    "distractorAnalysis": [
      "Está incorreta: 20 × 10¹⁰ N/m² é o módulo do aço, que tornaria o esqueleto excessivamente rígido e incapaz de absorver choques sem fraturar juntas.",
      "Está incorreta: 7 × 10¹⁰ N/m² é o módulo do vidro, caracterizado por fragilidade extrema sem deformação plástica.",
      "Está incorreta: Módulos da ordem de 10³ N/m² correspondem a borrachas e géis moles, incompatíveis com a sustentação do esqueleto."
    ],
    "nursingApplication": "Essencial para compreender a resistência das diáfises ósseas às cargas do peso corporal diário."
  },
  {
    "id": 2413,
    "topicId": 2,
    "question": "[Variação 2] Como se compara a rigidez do Aço com a rigidez do Osso segundo os dados dos slides (Slide 44)?",
    "options": [
      "O osso cortical é 100 vezes mais rígido do que o aço temperado.",
      "O aço é cerca de 10 vezes mais rígido do que o osso cortical (E_aço / E_osso = 10).",
      "Ambos os materiais têm exatamente a mesma rigidez estrutural perante esforços axiais.",
      "O osso é infinitamente rígido, correspondendo ao sólido indeformável de Euclides."
    ],
    "correctIndex": 1,
    "explanation": "E_aço = 20 × 10¹⁰ N/m² e E_osso = 2 × 10¹⁰ N/m²; logo, 20 / 2 = 10 vezes mais rígido.",
    "distractorAnalysis": [
      "Está incorreta: O osso é mais deformável que o aço, não sendo mais rígido.",
      "Está incorreta: Os valores diferem por uma ordem de grandeza (fator 10), não sendo iguais.",
      "Está incorreta: O osso é um material viscoelástico real, não um sólido indeformável de Euclides."
    ],
    "nursingApplication": "Explica o desafio de 'stress shielding' quando implantes metálicos de aço/titânio são colocados em contacto com o osso humano."
  },
  {
    "id": 2414,
    "topicId": 2,
    "question": "[Variação 2] Qual é a característica mecânica do Vidro (E = 7 × 10¹⁰ N/m²) descrita no Slide 44?",
    "options": [
      "Capacidade extrema de deformação plástica antes da rutura, comportando-se como fio de cobre.",
      "Rigidez extremamente reduzida, idêntica à da borracha sintética.",
      "Elevada rigidez teórica, mas grande fragilidade com fratura sem deformação plástica prévia.",
      "Comportamento puramente plastoviscoelástico semelhante à massa de pão."
    ],
    "correctIndex": 2,
    "explanation": "O vidro é muito rígido mas frágil: sob tensão excessiva, quebra abruptamente sem aviso de escoamento plástico prévio.",
    "distractorAnalysis": [
      "Está incorreta: O vidro não apresenta escoamento plástico significativo; a sua fratura é frágil e repentina.",
      "Está incorreta: Com E = 70 GPa, o vidro tem rigidez 1000 vezes superior à da borracha.",
      "Está incorreta: Massa de pão é um corpo plastoviscoelástico; o vidro é um sólido elástico linear frágil."
    ],
    "nursingApplication": "Alerta para a fragilidade mecânica de ampolas e frascos de vidro em ambiente de trabalho hospitalar."
  },
  {
    "id": 2415,
    "topicId": 2,
    "question": "[Variação 2] Como se caracteriza a Borracha em termos de Módulo de Young (Slide 44)?",
    "options": [
      "Apresenta módulo superior ao do aço maciço, não sofrendo qualquer deformação mecânica mensurável.",
      "É um material perfeitamente rígido correspondente ao sólido ideal de Euclides.",
      "Fratura de modo extremamente frágil à mais pequena força de compressão aplicada.",
      "Apresenta módulo extremamente baixo (10⁶ a 10⁸ N/m²), sofrendo grandes deformações elásticas reversíveis sob cargas mínimas."
    ],
    "correctIndex": 3,
    "explanation": "A borracha tem E muito baixo (0,1 a 10 × 10⁷ N/m²), permitindo esticar centenas de porcento e retornar elasticamente à forma inicial.",
    "distractorAnalysis": [
      "Está incorreta: O módulo da borracha é ordens de grandeza inferior ao do aço, não superior.",
      "Está incorreta: A borracha é o oposto de um sólido rígido indeformável; é um elastómero altamente flexível.",
      "Está incorreta: A borracha não apresenta comportamento frágil; suporta grandes deformações sem partir."
    ],
    "nursingApplication": "Explica a utilidade de torniquetes de borracha e luvas flexíveis em procedimentos de enfermagem."
  },
  {
    "id": 2416,
    "topicId": 2,
    "question": "[Variação 2] Num gráfico Tensão vs Deformação (σ vs ε), o que representa o Limite de Proporcionalidade?",
    "options": [
      "O ponto até ao qual a tensão é estritamente proporcional à deformação, vigorando a Lei de Hooke linear.",
      "O ponto exato onde o corpo se funde e passa do estado sólido ao estado líquido.",
      "O ponto de rutura irreversível onde a amostra se divide em duas partes.",
      "O patamar onde a deformação cessa completamente mesmo com força infinita."
    ],
    "correctIndex": 0,
    "explanation": "Até ao limite de proporcionalidade, o gráfico σ vs ε é uma linha reta perfeita com declive constante igual ao módulo de Young E.",
    "distractorAnalysis": [
      "Está incorreta: Fusão de materiais é uma transição de fase térmica, não um limite mecânico na curva tensão-deformação.",
      "Está incorreta: O ponto de rutura ocorre muito mais à frente na curva, após o escoamento ou no final do regime elástico.",
      "Está incorreta: A deformação não cessa com força infinita; a peça quebra sob tensões excessivas."
    ],
    "nursingApplication": "Determina a faixa de cargas mecânicas seguras em que a resposta elástica de uma estrutura é perfeitamente previsível."
  },
  {
    "id": 2417,
    "topicId": 2,
    "question": "[Variação 2] Num gráfico Tensão vs Deformação, o que acontece se o material for solicitado além do Limite Elástico?",
    "options": [
      "O material regressa instantaneamente à forma original sem qualquer resíduo mecânico.",
      "O material entra no regime plástico, sofrendo deformações permanentes que não se anulam após a remoção da carga.",
      "A rigidez intrínseca do corpo torna-se infinita transformando-o num sólido de Euclides.",
      "A massa total do corpo duplica por conservação do momento angular linear."
    ],
    "correctIndex": 1,
    "explanation": "Ultrapassado o limite de elasticidade, as ligações atómicas escorregam e o sólido não recupera a sua forma inicial (deformação plástica permanente).",
    "distractorAnalysis": [
      "Está incorreta: Regressar à forma original ocorre apenas dentro do regime elástico, abaixo do limite de elasticidade.",
      "Está incorreta: A rigidez não se torna infinita nem o corpo se transforma num modelo teórico indeformável.",
      "Está incorreta: A massa de um corpo fechado permanece constante por conservação da matéria."
    ],
    "nursingApplication": "Explica por que entorses articulares graves ou sobrecargas ósseas podem deixar deformidades permanentes."
  },
  {
    "id": 2418,
    "topicId": 2,
    "question": "[Variação 2] Qual é a diferença fundamental entre um material Frágil e um material Dúctil (Slide 44)?",
    "options": [
      "O material frágil nunca quebra sob nenhuma força, enquanto o dúctil quebra espontaneamente em repouso.",
      "O material frágil é sempre líquido, enquanto o material dúctil é sempre gasoso à temperatura ambiente.",
      "O material frágil fratura abruptamente sem deformação plástica prévia, enquanto o dúctil sofre grande deformação plástica antes da rutura.",
      "Ambos os materiais têm comportamento mecânico perfeitamente idêntico em qualquer ensaio de tração."
    ],
    "correctIndex": 2,
    "explanation": "Materiais frágeis (como o vidro) quebram assim que atingem o limite elástico; materiais dúcteis (como a prata e o cobre) deformam-se plasticamente antes de fraturar.",
    "distractorAnalysis": [
      "Está incorreta: Materiais frágeis quebram facilmente quando sobrecarregados; materiais dúcteis suportam deformação plástica sem quebra imediata.",
      "Está incorreta: Frágil e dúctil são qualificações mecânicas de sólidos estruturais, não de líquidos ou gases.",
      "Está incorreta: Frágil e dúctil representam comportamentos mecânicos opostos quanto à capacidade de deformação plástica."
    ],
    "nursingApplication": "Ajuda a escolher materiais cirúrgicos que resistam a impactos sem partir de forma catastrófica."
  },
  {
    "id": 2419,
    "topicId": 2,
    "question": "[Variação 2] Num ensaio mecânico de tração, a inclinação (declive) da zona linear elástica na curva σ vs ε representa:",
    "options": [
      "A aceleração gravítica local da Terra.",
      "A energia cinética translacional total do laboratório.",
      "O coeficiente de viscosidade de Poiseuille do fluido intersticial.",
      "O Módulo de Young (E) do material testado."
    ],
    "correctIndex": 3,
    "explanation": "Na região linear, σ = E · ε, logo o declive da reta (Δσ / Δε) é precisamente o módulo de Young E.",
    "distractorAnalysis": [
      "Está incorreta: Aceleração gravítica é uma constante de campo gravitacional, não o declive da curva tensão-deformação.",
      "Está incorreta: Energia cinética do laboratório não mede propriedades constitutivas elásticas de materiais.",
      "Está incorreta: Viscosidade de Poiseuille descreve escoamento laminar de fluidos em tubos, não o declive elástico de sólidos."
    ],
    "nursingApplication": "Permite aos bioengenheiros determinar a rigidez de tecidos e biomateriais em laboratório de ensaios mecânicos."
  },
  {
    "id": 2420,
    "topicId": 2,
    "question": "[Variação 2] O que representa o Ponto de Rutura (ou Tensão de Fratura) na curva Tensão-Deformação?",
    "options": [
      "O valor de tensão mecânica no qual o material perde a coesão estrutural e quebra em duas ou mais partes.",
      "A tensão onde o material atinge a temperatura do zero absoluto.",
      "O ponto onde a força de atrito estático se transforma em força eletromagnética pura.",
      "A pressão mínima necessária para manter a circulação sanguínea em repouso absoluto."
    ],
    "correctIndex": 0,
    "explanation": "A fratura mecânica corresponde à rutura física irreversível do material sob esforço mecânico excessivo.",
    "distractorAnalysis": [
      "Está incorreta: O ponto de rutura é um limite de coesão mecânica, não uma transição térmica para o zero absoluto.",
      "Está incorreta: A rutura não transforma atrito estático em ondas eletromagnéticas puras.",
      "Está incorreta: Não tem relação com a pressão mínima de circulação sanguínea humana."
    ],
    "nursingApplication": "Permite estabelecer as margens de segurança para evitar fraturas ósseas e ruturas de implantes."
  },
  {
    "id": 2421,
    "topicId": 2,
    "question": "[Variação 3] Qual é o valor do Módulo de Young do Aço apresentado nos slides (Slide 44)?",
    "options": [
      "2 × 10¹⁰ N/m², sendo idêntico ao módulo elástico do osso cortical.",
      "20 × 10¹⁰ N/m² (ou 2 × 10¹¹ N/m²), caracterizando um material extremamente rígido.",
      "10⁶ N/m², apresentando rigidez semelhante à da borracha comum.",
      "Zero N/m², pois o aço é um fluido viscoso em repouso."
    ],
    "correctIndex": 1,
    "explanation": "O aço possui módulo de Young de 20 × 10¹⁰ N/m² (200 GPa), conferindo-lhe altíssima rigidez mecânica e quase nula deformação sob cargas moderadas.",
    "distractorAnalysis": [
      "Está incorreta: 2 × 10¹⁰ N/m² é o módulo de Young do osso cortical humano, 10 vezes menor que o do aço.",
      "Está incorreta: 10⁶ N/m² é o módulo de Young da borracha vulcanizada, extremamente flexível.",
      "Está incorreta: O aço sólido não tem módulo nulo nem se comporta como fluido viscoso."
    ],
    "nursingApplication": "Explica a elevada resistência e estabilidade estrutural de ligas metálicas em instrumentos cirúrgicos e camas hospitalares."
  },
  {
    "id": 2422,
    "topicId": 2,
    "question": "[Variação 3] Qual é o valor do Módulo de Young do Osso cortical humano indicado nos slides (Slide 44)?",
    "options": [
      "20 × 10¹⁰ N/m², sendo tão rígido e inextensível como o aço maciço.",
      "7 × 10¹⁰ N/m², comportando-se mecanicamente de forma idêntica ao vidro comum.",
      "2 × 10¹⁰ N/m², conferindo rigidez com excelente capacidade elástica de amortecimento.",
      "0,5 × 10³ N/m², comportando-se como borracha extremamente flexível."
    ],
    "correctIndex": 2,
    "explanation": "O osso possui E = 2 × 10¹⁰ N/m² (20 GPa), sendo 10 vezes menos rígido que o aço, o que lhe confere flexibilidade essencial para absorver impactos sem quebrar.",
    "distractorAnalysis": [
      "Está incorreta: 20 × 10¹⁰ N/m² é o módulo do aço, que tornaria o esqueleto excessivamente rígido e incapaz de absorver choques sem fraturar juntas.",
      "Está incorreta: 7 × 10¹⁰ N/m² é o módulo do vidro, caracterizado por fragilidade extrema sem deformação plástica.",
      "Está incorreta: Módulos da ordem de 10³ N/m² correspondem a borrachas e géis moles, incompatíveis com a sustentação do esqueleto."
    ],
    "nursingApplication": "Essencial para compreender a resistência das diáfises ósseas às cargas do peso corporal diário."
  },
  {
    "id": 2423,
    "topicId": 2,
    "question": "[Variação 3] Como se compara a rigidez do Aço com a rigidez do Osso segundo os dados dos slides (Slide 44)?",
    "options": [
      "O osso cortical é 100 vezes mais rígido do que o aço temperado.",
      "Ambos os materiais têm exatamente a mesma rigidez estrutural perante esforços axiais.",
      "O osso é infinitamente rígido, correspondendo ao sólido indeformável de Euclides.",
      "O aço é cerca de 10 vezes mais rígido do que o osso cortical (E_aço / E_osso = 10)."
    ],
    "correctIndex": 3,
    "explanation": "E_aço = 20 × 10¹⁰ N/m² e E_osso = 2 × 10¹⁰ N/m²; logo, 20 / 2 = 10 vezes mais rígido.",
    "distractorAnalysis": [
      "Está incorreta: O osso é mais deformável que o aço, não sendo mais rígido.",
      "Está incorreta: Os valores diferem por uma ordem de grandeza (fator 10), não sendo iguais.",
      "Está incorreta: O osso é um material viscoelástico real, não um sólido indeformável de Euclides."
    ],
    "nursingApplication": "Explica o desafio de 'stress shielding' quando implantes metálicos de aço/titânio são colocados em contacto com o osso humano."
  },
  {
    "id": 2424,
    "topicId": 2,
    "question": "[Variação 3] Qual é a característica mecânica do Vidro (E = 7 × 10¹⁰ N/m²) descrita no Slide 44?",
    "options": [
      "Elevada rigidez teórica, mas grande fragilidade com fratura sem deformação plástica prévia.",
      "Capacidade extrema de deformação plástica antes da rutura, comportando-se como fio de cobre.",
      "Rigidez extremamente reduzida, idêntica à da borracha sintética.",
      "Comportamento puramente plastoviscoelástico semelhante à massa de pão."
    ],
    "correctIndex": 0,
    "explanation": "O vidro é muito rígido mas frágil: sob tensão excessiva, quebra abruptamente sem aviso de escoamento plástico prévio.",
    "distractorAnalysis": [
      "Está incorreta: O vidro não apresenta escoamento plástico significativo; a sua fratura é frágil e repentina.",
      "Está incorreta: Com E = 70 GPa, o vidro tem rigidez 1000 vezes superior à da borracha.",
      "Está incorreta: Massa de pão é um corpo plastoviscoelástico; o vidro é um sólido elástico linear frágil."
    ],
    "nursingApplication": "Alerta para a fragilidade mecânica de ampolas e frascos de vidro em ambiente de trabalho hospitalar."
  },
  {
    "id": 2425,
    "topicId": 2,
    "question": "[Variação 3] Como se caracteriza a Borracha em termos de Módulo de Young (Slide 44)?",
    "options": [
      "Apresenta módulo superior ao do aço maciço, não sofrendo qualquer deformação mecânica mensurável.",
      "Apresenta módulo extremamente baixo (10⁶ a 10⁸ N/m²), sofrendo grandes deformações elásticas reversíveis sob cargas mínimas.",
      "É um material perfeitamente rígido correspondente ao sólido ideal de Euclides.",
      "Fratura de modo extremamente frágil à mais pequena força de compressão aplicada."
    ],
    "correctIndex": 1,
    "explanation": "A borracha tem E muito baixo (0,1 a 10 × 10⁷ N/m²), permitindo esticar centenas de porcento e retornar elasticamente à forma inicial.",
    "distractorAnalysis": [
      "Está incorreta: O módulo da borracha é ordens de grandeza inferior ao do aço, não superior.",
      "Está incorreta: A borracha é o oposto de um sólido rígido indeformável; é um elastómero altamente flexível.",
      "Está incorreta: A borracha não apresenta comportamento frágil; suporta grandes deformações sem partir."
    ],
    "nursingApplication": "Explica a utilidade de torniquetes de borracha e luvas flexíveis em procedimentos de enfermagem."
  },
  {
    "id": 2426,
    "topicId": 2,
    "question": "[Variação 3] Num gráfico Tensão vs Deformação (σ vs ε), o que representa o Limite de Proporcionalidade?",
    "options": [
      "O ponto exato onde o corpo se funde e passa do estado sólido ao estado líquido.",
      "O ponto de rutura irreversível onde a amostra se divide em duas partes.",
      "O ponto até ao qual a tensão é estritamente proporcional à deformação, vigorando a Lei de Hooke linear.",
      "O patamar onde a deformação cessa completamente mesmo com força infinita."
    ],
    "correctIndex": 2,
    "explanation": "Até ao limite de proporcionalidade, o gráfico σ vs ε é uma linha reta perfeita com declive constante igual ao módulo de Young E.",
    "distractorAnalysis": [
      "Está incorreta: Fusão de materiais é uma transição de fase térmica, não um limite mecânico na curva tensão-deformação.",
      "Está incorreta: O ponto de rutura ocorre muito mais à frente na curva, após o escoamento ou no final do regime elástico.",
      "Está incorreta: A deformação não cessa com força infinita; a peça quebra sob tensões excessivas."
    ],
    "nursingApplication": "Determina a faixa de cargas mecânicas seguras em que a resposta elástica de uma estrutura é perfeitamente previsível."
  },
  {
    "id": 2427,
    "topicId": 2,
    "question": "[Variação 3] Num gráfico Tensão vs Deformação, o que acontece se o material for solicitado além do Limite Elástico?",
    "options": [
      "O material regressa instantaneamente à forma original sem qualquer resíduo mecânico.",
      "A rigidez intrínseca do corpo torna-se infinita transformando-o num sólido de Euclides.",
      "A massa total do corpo duplica por conservação do momento angular linear.",
      "O material entra no regime plástico, sofrendo deformações permanentes que não se anulam após a remoção da carga."
    ],
    "correctIndex": 3,
    "explanation": "Ultrapassado o limite de elasticidade, as ligações atómicas escorregam e o sólido não recupera a sua forma inicial (deformação plástica permanente).",
    "distractorAnalysis": [
      "Está incorreta: Regressar à forma original ocorre apenas dentro do regime elástico, abaixo do limite de elasticidade.",
      "Está incorreta: A rigidez não se torna infinita nem o corpo se transforma num modelo teórico indeformável.",
      "Está incorreta: A massa de um corpo fechado permanece constante por conservação da matéria."
    ],
    "nursingApplication": "Explica por que entorses articulares graves ou sobrecargas ósseas podem deixar deformidades permanentes."
  },
  {
    "id": 2428,
    "topicId": 2,
    "question": "[Variação 3] Qual é a diferença fundamental entre um material Frágil e um material Dúctil (Slide 44)?",
    "options": [
      "O material frágil fratura abruptamente sem deformação plástica prévia, enquanto o dúctil sofre grande deformação plástica antes da rutura.",
      "O material frágil nunca quebra sob nenhuma força, enquanto o dúctil quebra espontaneamente em repouso.",
      "O material frágil é sempre líquido, enquanto o material dúctil é sempre gasoso à temperatura ambiente.",
      "Ambos os materiais têm comportamento mecânico perfeitamente idêntico em qualquer ensaio de tração."
    ],
    "correctIndex": 0,
    "explanation": "Materiais frágeis (como o vidro) quebram assim que atingem o limite elástico; materiais dúcteis (como a prata e o cobre) deformam-se plasticamente antes de fraturar.",
    "distractorAnalysis": [
      "Está incorreta: Materiais frágeis quebram facilmente quando sobrecarregados; materiais dúcteis suportam deformação plástica sem quebra imediata.",
      "Está incorreta: Frágil e dúctil são qualificações mecânicas de sólidos estruturais, não de líquidos ou gases.",
      "Está incorreta: Frágil e dúctil representam comportamentos mecânicos opostos quanto à capacidade de deformação plástica."
    ],
    "nursingApplication": "Ajuda a escolher materiais cirúrgicos que resistam a impactos sem partir de forma catastrófica."
  },
  {
    "id": 2429,
    "topicId": 2,
    "question": "[Variação 3] Num ensaio mecânico de tração, a inclinação (declive) da zona linear elástica na curva σ vs ε representa:",
    "options": [
      "A aceleração gravítica local da Terra.",
      "O Módulo de Young (E) do material testado.",
      "A energia cinética translacional total do laboratório.",
      "O coeficiente de viscosidade de Poiseuille do fluido intersticial."
    ],
    "correctIndex": 1,
    "explanation": "Na região linear, σ = E · ε, logo o declive da reta (Δσ / Δε) é precisamente o módulo de Young E.",
    "distractorAnalysis": [
      "Está incorreta: Aceleração gravítica é uma constante de campo gravitacional, não o declive da curva tensão-deformação.",
      "Está incorreta: Energia cinética do laboratório não mede propriedades constitutivas elásticas de materiais.",
      "Está incorreta: Viscosidade de Poiseuille descreve escoamento laminar de fluidos em tubos, não o declive elástico de sólidos."
    ],
    "nursingApplication": "Permite aos bioengenheiros determinar a rigidez de tecidos e biomateriais em laboratório de ensaios mecânicos."
  },
  {
    "id": 2430,
    "topicId": 2,
    "question": "[Variação 3] O que representa o Ponto de Rutura (ou Tensão de Fratura) na curva Tensão-Deformação?",
    "options": [
      "A tensão onde o material atinge a temperatura do zero absoluto.",
      "O ponto onde a força de atrito estático se transforma em força eletromagnética pura.",
      "O valor de tensão mecânica no qual o material perde a coesão estrutural e quebra em duas ou mais partes.",
      "A pressão mínima necessária para manter a circulação sanguínea em repouso absoluto."
    ],
    "correctIndex": 2,
    "explanation": "A fratura mecânica corresponde à rutura física irreversível do material sob esforço mecânico excessivo.",
    "distractorAnalysis": [
      "Está incorreta: O ponto de rutura é um limite de coesão mecânica, não uma transição térmica para o zero absoluto.",
      "Está incorreta: A rutura não transforma atrito estático em ondas eletromagnéticas puras.",
      "Está incorreta: Não tem relação com a pressão mínima de circulação sanguínea humana."
    ],
    "nursingApplication": "Permite estabelecer as margens de segurança para evitar fraturas ósseas e ruturas de implantes."
  },
  {
    "id": 2431,
    "topicId": 2,
    "question": "[Variação 4] Qual é o valor do Módulo de Young do Aço apresentado nos slides (Slide 44)?",
    "options": [
      "2 × 10¹⁰ N/m², sendo idêntico ao módulo elástico do osso cortical.",
      "10⁶ N/m², apresentando rigidez semelhante à da borracha comum.",
      "Zero N/m², pois o aço é um fluido viscoso em repouso.",
      "20 × 10¹⁰ N/m² (ou 2 × 10¹¹ N/m²), caracterizando um material extremamente rígido."
    ],
    "correctIndex": 3,
    "explanation": "O aço possui módulo de Young de 20 × 10¹⁰ N/m² (200 GPa), conferindo-lhe altíssima rigidez mecânica e quase nula deformação sob cargas moderadas.",
    "distractorAnalysis": [
      "Está incorreta: 2 × 10¹⁰ N/m² é o módulo de Young do osso cortical humano, 10 vezes menor que o do aço.",
      "Está incorreta: 10⁶ N/m² é o módulo de Young da borracha vulcanizada, extremamente flexível.",
      "Está incorreta: O aço sólido não tem módulo nulo nem se comporta como fluido viscoso."
    ],
    "nursingApplication": "Explica a elevada resistência e estabilidade estrutural de ligas metálicas em instrumentos cirúrgicos e camas hospitalares."
  },
  {
    "id": 2432,
    "topicId": 2,
    "question": "[Variação 4] Qual é o valor do Módulo de Young do Osso cortical humano indicado nos slides (Slide 44)?",
    "options": [
      "2 × 10¹⁰ N/m², conferindo rigidez com excelente capacidade elástica de amortecimento.",
      "20 × 10¹⁰ N/m², sendo tão rígido e inextensível como o aço maciço.",
      "7 × 10¹⁰ N/m², comportando-se mecanicamente de forma idêntica ao vidro comum.",
      "0,5 × 10³ N/m², comportando-se como borracha extremamente flexível."
    ],
    "correctIndex": 0,
    "explanation": "O osso possui E = 2 × 10¹⁰ N/m² (20 GPa), sendo 10 vezes menos rígido que o aço, o que lhe confere flexibilidade essencial para absorver impactos sem quebrar.",
    "distractorAnalysis": [
      "Está incorreta: 20 × 10¹⁰ N/m² é o módulo do aço, que tornaria o esqueleto excessivamente rígido e incapaz de absorver choques sem fraturar juntas.",
      "Está incorreta: 7 × 10¹⁰ N/m² é o módulo do vidro, caracterizado por fragilidade extrema sem deformação plástica.",
      "Está incorreta: Módulos da ordem de 10³ N/m² correspondem a borrachas e géis moles, incompatíveis com a sustentação do esqueleto."
    ],
    "nursingApplication": "Essencial para compreender a resistência das diáfises ósseas às cargas do peso corporal diário."
  },
  {
    "id": 2433,
    "topicId": 2,
    "question": "[Variação 4] Como se compara a rigidez do Aço com a rigidez do Osso segundo os dados dos slides (Slide 44)?",
    "options": [
      "O osso cortical é 100 vezes mais rígido do que o aço temperado.",
      "O aço é cerca de 10 vezes mais rígido do que o osso cortical (E_aço / E_osso = 10).",
      "Ambos os materiais têm exatamente a mesma rigidez estrutural perante esforços axiais.",
      "O osso é infinitamente rígido, correspondendo ao sólido indeformável de Euclides."
    ],
    "correctIndex": 1,
    "explanation": "E_aço = 20 × 10¹⁰ N/m² e E_osso = 2 × 10¹⁰ N/m²; logo, 20 / 2 = 10 vezes mais rígido.",
    "distractorAnalysis": [
      "Está incorreta: O osso é mais deformável que o aço, não sendo mais rígido.",
      "Está incorreta: Os valores diferem por uma ordem de grandeza (fator 10), não sendo iguais.",
      "Está incorreta: O osso é um material viscoelástico real, não um sólido indeformável de Euclides."
    ],
    "nursingApplication": "Explica o desafio de 'stress shielding' quando implantes metálicos de aço/titânio são colocados em contacto com o osso humano."
  },
  {
    "id": 2434,
    "topicId": 2,
    "question": "[Variação 4] Qual é a característica mecânica do Vidro (E = 7 × 10¹⁰ N/m²) descrita no Slide 44?",
    "options": [
      "Capacidade extrema de deformação plástica antes da rutura, comportando-se como fio de cobre.",
      "Rigidez extremamente reduzida, idêntica à da borracha sintética.",
      "Elevada rigidez teórica, mas grande fragilidade com fratura sem deformação plástica prévia.",
      "Comportamento puramente plastoviscoelástico semelhante à massa de pão."
    ],
    "correctIndex": 2,
    "explanation": "O vidro é muito rígido mas frágil: sob tensão excessiva, quebra abruptamente sem aviso de escoamento plástico prévio.",
    "distractorAnalysis": [
      "Está incorreta: O vidro não apresenta escoamento plástico significativo; a sua fratura é frágil e repentina.",
      "Está incorreta: Com E = 70 GPa, o vidro tem rigidez 1000 vezes superior à da borracha.",
      "Está incorreta: Massa de pão é um corpo plastoviscoelástico; o vidro é um sólido elástico linear frágil."
    ],
    "nursingApplication": "Alerta para a fragilidade mecânica de ampolas e frascos de vidro em ambiente de trabalho hospitalar."
  },
  {
    "id": 2435,
    "topicId": 2,
    "question": "[Variação 4] Como se caracteriza a Borracha em termos de Módulo de Young (Slide 44)?",
    "options": [
      "Apresenta módulo superior ao do aço maciço, não sofrendo qualquer deformação mecânica mensurável.",
      "É um material perfeitamente rígido correspondente ao sólido ideal de Euclides.",
      "Fratura de modo extremamente frágil à mais pequena força de compressão aplicada.",
      "Apresenta módulo extremamente baixo (10⁶ a 10⁸ N/m²), sofrendo grandes deformações elásticas reversíveis sob cargas mínimas."
    ],
    "correctIndex": 3,
    "explanation": "A borracha tem E muito baixo (0,1 a 10 × 10⁷ N/m²), permitindo esticar centenas de porcento e retornar elasticamente à forma inicial.",
    "distractorAnalysis": [
      "Está incorreta: O módulo da borracha é ordens de grandeza inferior ao do aço, não superior.",
      "Está incorreta: A borracha é o oposto de um sólido rígido indeformável; é um elastómero altamente flexível.",
      "Está incorreta: A borracha não apresenta comportamento frágil; suporta grandes deformações sem partir."
    ],
    "nursingApplication": "Explica a utilidade de torniquetes de borracha e luvas flexíveis em procedimentos de enfermagem."
  },
  {
    "id": 2436,
    "topicId": 2,
    "question": "[Variação 4] Num gráfico Tensão vs Deformação (σ vs ε), o que representa o Limite de Proporcionalidade?",
    "options": [
      "O ponto até ao qual a tensão é estritamente proporcional à deformação, vigorando a Lei de Hooke linear.",
      "O ponto exato onde o corpo se funde e passa do estado sólido ao estado líquido.",
      "O ponto de rutura irreversível onde a amostra se divide em duas partes.",
      "O patamar onde a deformação cessa completamente mesmo com força infinita."
    ],
    "correctIndex": 0,
    "explanation": "Até ao limite de proporcionalidade, o gráfico σ vs ε é uma linha reta perfeita com declive constante igual ao módulo de Young E.",
    "distractorAnalysis": [
      "Está incorreta: Fusão de materiais é uma transição de fase térmica, não um limite mecânico na curva tensão-deformação.",
      "Está incorreta: O ponto de rutura ocorre muito mais à frente na curva, após o escoamento ou no final do regime elástico.",
      "Está incorreta: A deformação não cessa com força infinita; a peça quebra sob tensões excessivas."
    ],
    "nursingApplication": "Determina a faixa de cargas mecânicas seguras em que a resposta elástica de uma estrutura é perfeitamente previsível."
  },
  {
    "id": 2437,
    "topicId": 2,
    "question": "[Variação 4] Num gráfico Tensão vs Deformação, o que acontece se o material for solicitado além do Limite Elástico?",
    "options": [
      "O material regressa instantaneamente à forma original sem qualquer resíduo mecânico.",
      "O material entra no regime plástico, sofrendo deformações permanentes que não se anulam após a remoção da carga.",
      "A rigidez intrínseca do corpo torna-se infinita transformando-o num sólido de Euclides.",
      "A massa total do corpo duplica por conservação do momento angular linear."
    ],
    "correctIndex": 1,
    "explanation": "Ultrapassado o limite de elasticidade, as ligações atómicas escorregam e o sólido não recupera a sua forma inicial (deformação plástica permanente).",
    "distractorAnalysis": [
      "Está incorreta: Regressar à forma original ocorre apenas dentro do regime elástico, abaixo do limite de elasticidade.",
      "Está incorreta: A rigidez não se torna infinita nem o corpo se transforma num modelo teórico indeformável.",
      "Está incorreta: A massa de um corpo fechado permanece constante por conservação da matéria."
    ],
    "nursingApplication": "Explica por que entorses articulares graves ou sobrecargas ósseas podem deixar deformidades permanentes."
  },
  {
    "id": 2438,
    "topicId": 2,
    "question": "[Variação 4] Qual é a diferença fundamental entre um material Frágil e um material Dúctil (Slide 44)?",
    "options": [
      "O material frágil nunca quebra sob nenhuma força, enquanto o dúctil quebra espontaneamente em repouso.",
      "O material frágil é sempre líquido, enquanto o material dúctil é sempre gasoso à temperatura ambiente.",
      "O material frágil fratura abruptamente sem deformação plástica prévia, enquanto o dúctil sofre grande deformação plástica antes da rutura.",
      "Ambos os materiais têm comportamento mecânico perfeitamente idêntico em qualquer ensaio de tração."
    ],
    "correctIndex": 2,
    "explanation": "Materiais frágeis (como o vidro) quebram assim que atingem o limite elástico; materiais dúcteis (como a prata e o cobre) deformam-se plasticamente antes de fraturar.",
    "distractorAnalysis": [
      "Está incorreta: Materiais frágeis quebram facilmente quando sobrecarregados; materiais dúcteis suportam deformação plástica sem quebra imediata.",
      "Está incorreta: Frágil e dúctil são qualificações mecânicas de sólidos estruturais, não de líquidos ou gases.",
      "Está incorreta: Frágil e dúctil representam comportamentos mecânicos opostos quanto à capacidade de deformação plástica."
    ],
    "nursingApplication": "Ajuda a escolher materiais cirúrgicos que resistam a impactos sem partir de forma catastrófica."
  },
  {
    "id": 2439,
    "topicId": 2,
    "question": "[Variação 4] Num ensaio mecânico de tração, a inclinação (declive) da zona linear elástica na curva σ vs ε representa:",
    "options": [
      "A aceleração gravítica local da Terra.",
      "A energia cinética translacional total do laboratório.",
      "O coeficiente de viscosidade de Poiseuille do fluido intersticial.",
      "O Módulo de Young (E) do material testado."
    ],
    "correctIndex": 3,
    "explanation": "Na região linear, σ = E · ε, logo o declive da reta (Δσ / Δε) é precisamente o módulo de Young E.",
    "distractorAnalysis": [
      "Está incorreta: Aceleração gravítica é uma constante de campo gravitacional, não o declive da curva tensão-deformação.",
      "Está incorreta: Energia cinética do laboratório não mede propriedades constitutivas elásticas de materiais.",
      "Está incorreta: Viscosidade de Poiseuille descreve escoamento laminar de fluidos em tubos, não o declive elástico de sólidos."
    ],
    "nursingApplication": "Permite aos bioengenheiros determinar a rigidez de tecidos e biomateriais em laboratório de ensaios mecânicos."
  },
  {
    "id": 2440,
    "topicId": 2,
    "question": "[Variação 4] O que representa o Ponto de Rutura (ou Tensão de Fratura) na curva Tensão-Deformação?",
    "options": [
      "O valor de tensão mecânica no qual o material perde a coesão estrutural e quebra em duas ou mais partes.",
      "A tensão onde o material atinge a temperatura do zero absoluto.",
      "O ponto onde a força de atrito estático se transforma em força eletromagnética pura.",
      "A pressão mínima necessária para manter a circulação sanguínea em repouso absoluto."
    ],
    "correctIndex": 0,
    "explanation": "A fratura mecânica corresponde à rutura física irreversível do material sob esforço mecânico excessivo.",
    "distractorAnalysis": [
      "Está incorreta: O ponto de rutura é um limite de coesão mecânica, não uma transição térmica para o zero absoluto.",
      "Está incorreta: A rutura não transforma atrito estático em ondas eletromagnéticas puras.",
      "Está incorreta: Não tem relação com a pressão mínima de circulação sanguínea humana."
    ],
    "nursingApplication": "Permite estabelecer as margens de segurança para evitar fraturas ósseas e ruturas de implantes."
  },
  {
    "id": 2441,
    "topicId": 2,
    "question": "[Variação 5] Qual é o valor do Módulo de Young do Aço apresentado nos slides (Slide 44)?",
    "options": [
      "2 × 10¹⁰ N/m², sendo idêntico ao módulo elástico do osso cortical.",
      "20 × 10¹⁰ N/m² (ou 2 × 10¹¹ N/m²), caracterizando um material extremamente rígido.",
      "10⁶ N/m², apresentando rigidez semelhante à da borracha comum.",
      "Zero N/m², pois o aço é um fluido viscoso em repouso."
    ],
    "correctIndex": 1,
    "explanation": "O aço possui módulo de Young de 20 × 10¹⁰ N/m² (200 GPa), conferindo-lhe altíssima rigidez mecânica e quase nula deformação sob cargas moderadas.",
    "distractorAnalysis": [
      "Está incorreta: 2 × 10¹⁰ N/m² é o módulo de Young do osso cortical humano, 10 vezes menor que o do aço.",
      "Está incorreta: 10⁶ N/m² é o módulo de Young da borracha vulcanizada, extremamente flexível.",
      "Está incorreta: O aço sólido não tem módulo nulo nem se comporta como fluido viscoso."
    ],
    "nursingApplication": "Explica a elevada resistência e estabilidade estrutural de ligas metálicas em instrumentos cirúrgicos e camas hospitalares."
  },
  {
    "id": 2442,
    "topicId": 2,
    "question": "[Variação 5] Qual é o valor do Módulo de Young do Osso cortical humano indicado nos slides (Slide 44)?",
    "options": [
      "20 × 10¹⁰ N/m², sendo tão rígido e inextensível como o aço maciço.",
      "7 × 10¹⁰ N/m², comportando-se mecanicamente de forma idêntica ao vidro comum.",
      "2 × 10¹⁰ N/m², conferindo rigidez com excelente capacidade elástica de amortecimento.",
      "0,5 × 10³ N/m², comportando-se como borracha extremamente flexível."
    ],
    "correctIndex": 2,
    "explanation": "O osso possui E = 2 × 10¹⁰ N/m² (20 GPa), sendo 10 vezes menos rígido que o aço, o que lhe confere flexibilidade essencial para absorver impactos sem quebrar.",
    "distractorAnalysis": [
      "Está incorreta: 20 × 10¹⁰ N/m² é o módulo do aço, que tornaria o esqueleto excessivamente rígido e incapaz de absorver choques sem fraturar juntas.",
      "Está incorreta: 7 × 10¹⁰ N/m² é o módulo do vidro, caracterizado por fragilidade extrema sem deformação plástica.",
      "Está incorreta: Módulos da ordem de 10³ N/m² correspondem a borrachas e géis moles, incompatíveis com a sustentação do esqueleto."
    ],
    "nursingApplication": "Essencial para compreender a resistência das diáfises ósseas às cargas do peso corporal diário."
  },
  {
    "id": 2443,
    "topicId": 2,
    "question": "[Variação 5] Como se compara a rigidez do Aço com a rigidez do Osso segundo os dados dos slides (Slide 44)?",
    "options": [
      "O osso cortical é 100 vezes mais rígido do que o aço temperado.",
      "Ambos os materiais têm exatamente a mesma rigidez estrutural perante esforços axiais.",
      "O osso é infinitamente rígido, correspondendo ao sólido indeformável de Euclides.",
      "O aço é cerca de 10 vezes mais rígido do que o osso cortical (E_aço / E_osso = 10)."
    ],
    "correctIndex": 3,
    "explanation": "E_aço = 20 × 10¹⁰ N/m² e E_osso = 2 × 10¹⁰ N/m²; logo, 20 / 2 = 10 vezes mais rígido.",
    "distractorAnalysis": [
      "Está incorreta: O osso é mais deformável que o aço, não sendo mais rígido.",
      "Está incorreta: Os valores diferem por uma ordem de grandeza (fator 10), não sendo iguais.",
      "Está incorreta: O osso é um material viscoelástico real, não um sólido indeformável de Euclides."
    ],
    "nursingApplication": "Explica o desafio de 'stress shielding' quando implantes metálicos de aço/titânio são colocados em contacto com o osso humano."
  },
  {
    "id": 2444,
    "topicId": 2,
    "question": "[Variação 5] Qual é a característica mecânica do Vidro (E = 7 × 10¹⁰ N/m²) descrita no Slide 44?",
    "options": [
      "Elevada rigidez teórica, mas grande fragilidade com fratura sem deformação plástica prévia.",
      "Capacidade extrema de deformação plástica antes da rutura, comportando-se como fio de cobre.",
      "Rigidez extremamente reduzida, idêntica à da borracha sintética.",
      "Comportamento puramente plastoviscoelástico semelhante à massa de pão."
    ],
    "correctIndex": 0,
    "explanation": "O vidro é muito rígido mas frágil: sob tensão excessiva, quebra abruptamente sem aviso de escoamento plástico prévio.",
    "distractorAnalysis": [
      "Está incorreta: O vidro não apresenta escoamento plástico significativo; a sua fratura é frágil e repentina.",
      "Está incorreta: Com E = 70 GPa, o vidro tem rigidez 1000 vezes superior à da borracha.",
      "Está incorreta: Massa de pão é um corpo plastoviscoelástico; o vidro é um sólido elástico linear frágil."
    ],
    "nursingApplication": "Alerta para a fragilidade mecânica de ampolas e frascos de vidro em ambiente de trabalho hospitalar."
  },
  {
    "id": 2445,
    "topicId": 2,
    "question": "[Variação 5] Como se caracteriza a Borracha em termos de Módulo de Young (Slide 44)?",
    "options": [
      "Apresenta módulo superior ao do aço maciço, não sofrendo qualquer deformação mecânica mensurável.",
      "Apresenta módulo extremamente baixo (10⁶ a 10⁸ N/m²), sofrendo grandes deformações elásticas reversíveis sob cargas mínimas.",
      "É um material perfeitamente rígido correspondente ao sólido ideal de Euclides.",
      "Fratura de modo extremamente frágil à mais pequena força de compressão aplicada."
    ],
    "correctIndex": 1,
    "explanation": "A borracha tem E muito baixo (0,1 a 10 × 10⁷ N/m²), permitindo esticar centenas de porcento e retornar elasticamente à forma inicial.",
    "distractorAnalysis": [
      "Está incorreta: O módulo da borracha é ordens de grandeza inferior ao do aço, não superior.",
      "Está incorreta: A borracha é o oposto de um sólido rígido indeformável; é um elastómero altamente flexível.",
      "Está incorreta: A borracha não apresenta comportamento frágil; suporta grandes deformações sem partir."
    ],
    "nursingApplication": "Explica a utilidade de torniquetes de borracha e luvas flexíveis em procedimentos de enfermagem."
  },
  {
    "id": 2446,
    "topicId": 2,
    "question": "[Variação 5] Num gráfico Tensão vs Deformação (σ vs ε), o que representa o Limite de Proporcionalidade?",
    "options": [
      "O ponto exato onde o corpo se funde e passa do estado sólido ao estado líquido.",
      "O ponto de rutura irreversível onde a amostra se divide em duas partes.",
      "O ponto até ao qual a tensão é estritamente proporcional à deformação, vigorando a Lei de Hooke linear.",
      "O patamar onde a deformação cessa completamente mesmo com força infinita."
    ],
    "correctIndex": 2,
    "explanation": "Até ao limite de proporcionalidade, o gráfico σ vs ε é uma linha reta perfeita com declive constante igual ao módulo de Young E.",
    "distractorAnalysis": [
      "Está incorreta: Fusão de materiais é uma transição de fase térmica, não um limite mecânico na curva tensão-deformação.",
      "Está incorreta: O ponto de rutura ocorre muito mais à frente na curva, após o escoamento ou no final do regime elástico.",
      "Está incorreta: A deformação não cessa com força infinita; a peça quebra sob tensões excessivas."
    ],
    "nursingApplication": "Determina a faixa de cargas mecânicas seguras em que a resposta elástica de uma estrutura é perfeitamente previsível."
  },
  {
    "id": 2447,
    "topicId": 2,
    "question": "[Variação 5] Num gráfico Tensão vs Deformação, o que acontece se o material for solicitado além do Limite Elástico?",
    "options": [
      "O material regressa instantaneamente à forma original sem qualquer resíduo mecânico.",
      "A rigidez intrínseca do corpo torna-se infinita transformando-o num sólido de Euclides.",
      "A massa total do corpo duplica por conservação do momento angular linear.",
      "O material entra no regime plástico, sofrendo deformações permanentes que não se anulam após a remoção da carga."
    ],
    "correctIndex": 3,
    "explanation": "Ultrapassado o limite de elasticidade, as ligações atómicas escorregam e o sólido não recupera a sua forma inicial (deformação plástica permanente).",
    "distractorAnalysis": [
      "Está incorreta: Regressar à forma original ocorre apenas dentro do regime elástico, abaixo do limite de elasticidade.",
      "Está incorreta: A rigidez não se torna infinita nem o corpo se transforma num modelo teórico indeformável.",
      "Está incorreta: A massa de um corpo fechado permanece constante por conservação da matéria."
    ],
    "nursingApplication": "Explica por que entorses articulares graves ou sobrecargas ósseas podem deixar deformidades permanentes."
  },
  {
    "id": 2448,
    "topicId": 2,
    "question": "[Variação 5] Qual é a diferença fundamental entre um material Frágil e um material Dúctil (Slide 44)?",
    "options": [
      "O material frágil fratura abruptamente sem deformação plástica prévia, enquanto o dúctil sofre grande deformação plástica antes da rutura.",
      "O material frágil nunca quebra sob nenhuma força, enquanto o dúctil quebra espontaneamente em repouso.",
      "O material frágil é sempre líquido, enquanto o material dúctil é sempre gasoso à temperatura ambiente.",
      "Ambos os materiais têm comportamento mecânico perfeitamente idêntico em qualquer ensaio de tração."
    ],
    "correctIndex": 0,
    "explanation": "Materiais frágeis (como o vidro) quebram assim que atingem o limite elástico; materiais dúcteis (como a prata e o cobre) deformam-se plasticamente antes de fraturar.",
    "distractorAnalysis": [
      "Está incorreta: Materiais frágeis quebram facilmente quando sobrecarregados; materiais dúcteis suportam deformação plástica sem quebra imediata.",
      "Está incorreta: Frágil e dúctil são qualificações mecânicas de sólidos estruturais, não de líquidos ou gases.",
      "Está incorreta: Frágil e dúctil representam comportamentos mecânicos opostos quanto à capacidade de deformação plástica."
    ],
    "nursingApplication": "Ajuda a escolher materiais cirúrgicos que resistam a impactos sem partir de forma catastrófica."
  },
  {
    "id": 2449,
    "topicId": 2,
    "question": "[Variação 5] Num ensaio mecânico de tração, a inclinação (declive) da zona linear elástica na curva σ vs ε representa:",
    "options": [
      "A aceleração gravítica local da Terra.",
      "O Módulo de Young (E) do material testado.",
      "A energia cinética translacional total do laboratório.",
      "O coeficiente de viscosidade de Poiseuille do fluido intersticial."
    ],
    "correctIndex": 1,
    "explanation": "Na região linear, σ = E · ε, logo o declive da reta (Δσ / Δε) é precisamente o módulo de Young E.",
    "distractorAnalysis": [
      "Está incorreta: Aceleração gravítica é uma constante de campo gravitacional, não o declive da curva tensão-deformação.",
      "Está incorreta: Energia cinética do laboratório não mede propriedades constitutivas elásticas de materiais.",
      "Está incorreta: Viscosidade de Poiseuille descreve escoamento laminar de fluidos em tubos, não o declive elástico de sólidos."
    ],
    "nursingApplication": "Permite aos bioengenheiros determinar a rigidez de tecidos e biomateriais em laboratório de ensaios mecânicos."
  },
  {
    "id": 2450,
    "topicId": 2,
    "question": "[Variação 5] O que representa o Ponto de Rutura (ou Tensão de Fratura) na curva Tensão-Deformação?",
    "options": [
      "A tensão onde o material atinge a temperatura do zero absoluto.",
      "O ponto onde a força de atrito estático se transforma em força eletromagnética pura.",
      "O valor de tensão mecânica no qual o material perde a coesão estrutural e quebra em duas ou mais partes.",
      "A pressão mínima necessária para manter a circulação sanguínea em repouso absoluto."
    ],
    "correctIndex": 2,
    "explanation": "A fratura mecânica corresponde à rutura física irreversível do material sob esforço mecânico excessivo.",
    "distractorAnalysis": [
      "Está incorreta: O ponto de rutura é um limite de coesão mecânica, não uma transição térmica para o zero absoluto.",
      "Está incorreta: A rutura não transforma atrito estático em ondas eletromagnéticas puras.",
      "Está incorreta: Não tem relação com a pressão mínima de circulação sanguínea humana."
    ],
    "nursingApplication": "Permite estabelecer as margens de segurança para evitar fraturas ósseas e ruturas de implantes."
  },
  {
    "id": 2451,
    "topicId": 2,
    "question": "O que é a Histerese Elástica observada nos corpos viscoelásticos (Slide 19)?",
    "options": [
      "A emissão espontânea de fotões luminosos quando um osso é colocado no escuro absoluto.",
      "O aumento instantâneo da massa inercial do corpo elástico quando submetido a velocidades baixas.",
      "A restituição de 100% da energia mecânica sem qualquer perda ou produção de calor no sistema.",
      "O fenómeno em que a curva de descarga não coincide com a curva de carga, formando um ciclo fechado no diagrama tensão-deformação."
    ],
    "correctIndex": 3,
    "explanation": "Nos corpos viscoelásticos (como ossos e cartilagens), o retorno elástico segue um caminho diferente da deformação inicial, caracterizando a histerese.",
    "distractorAnalysis": [
      "Está incorreta: Emissão de fotões no escuro é fosforescência ou bioluminescência, não histerese elástica mecânica.",
      "Está incorreta: A massa inercial de um corpo sob ensaios mecânicos normais não varia com a velocidade.",
      "Está incorreta: Restituição de 100% da energia sem perdas caracteriza um corpo elástico ideal de Hooke, não um corpo com histerese."
    ],
    "nursingApplication": "Explica o amortecimento mecânico natural das articulações e dos discos vertebrais."
  },
  {
    "id": 2452,
    "topicId": 2,
    "question": "O que representa fisicamente a área contida no interior do ciclo de histerese elástica (Slide 19)?",
    "options": [
      "A quantidade de energia mecânica dissipada sob a forma de calor durante o ciclo de carga e descarga.",
      "A aceleração média adquirida pelo centro de gravidade do corpo durante o salto.",
      "O volume de oxigénio consumido pelas mitocôndrias durante a contração isotónica.",
      "A carga elétrica acumulada na superfície externa do tecido elástico por indução estática."
    ],
    "correctIndex": 0,
    "explanation": "A área do laço de histerese representa o trabalho mecânico perdido pelo sistema sob a forma de energia térmica dissipada.",
    "distractorAnalysis": [
      "Está incorreta: Aceleração do centro de gravidade é uma grandeza cinemática, não a área de um gráfico tensão-deformação.",
      "Está incorreta: Consumo mitocondrial de oxigénio é um processo bioquímico celular metabólico, não trabalho de histerese.",
      "Está incorreta: Carga elétrica estática mede-se em Coulombs e decorre de efeitos triboelétricos, não da área do ciclo mecânico."
    ],
    "nursingApplication": "Demonstra a capacidade dos tecidos biológicos de dissipar choques mecânicos para proteger os órgãos vitais."
  },
  {
    "id": 2453,
    "topicId": 2,
    "question": "Porque é que a histerese elástica dos tecidos viscoelásticos (como cartilagens e ligamentos) é benéfica para o corpo humano?",
    "options": [
      "Torna os ossos totalmente indeformáveis como blocos maciços de aço temperado.",
      "Permite absorver choques mecânicos e amortecer impactos através da dissipação gradual de energia.",
      "Elimina a necessidade de circulação sanguínea e de oxigenação celular nos membros inferiores.",
      "Impede que a gravidade terrestre exerça qualquer força peso sobre o corpo em repouso."
    ],
    "correctIndex": 1,
    "explanation": "Ao dissipar parte da energia mecânica em calor (amortecimento), os tecidos viscoelásticos evitam picos violentos de tensão sobre as articulações.",
    "distractorAnalysis": [
      "Está incorreta: Tornar os ossos indeformáveis impediria o amortecimento elástico e aumentaria o risco de fratura por impacto.",
      "Está incorreta: A viscoelasticidade mecânica não elimina os processos metabólicos nem a circulação de sangue.",
      "Está incorreta: Nenhum tecido elástico biológico tem a capacidade de anular a gravidade terrestre."
    ],
    "nursingApplication": "Explica por que calçado com amortecimento elástico ajuda a prevenir lesões por impacto na marcha e corrida."
  },
  {
    "id": 2454,
    "topicId": 2,
    "question": "O que é o fenómeno de Fluência (Creep) em materiais viscoelásticos?",
    "options": [
      "A diminuição instantânea da temperatura do corpo para o zero absoluto sob tensão mecânica.",
      "A fragmentação explosiva do material assim que é aplicada uma força mínima de compressão.",
      "O aumento progressivo da deformação ao longo do tempo quando o material é submetido a uma tensão (força) constante.",
      "O retorno imediato e perfeitamente elástico à forma original sem qualquer atraso temporal."
    ],
    "correctIndex": 2,
    "explanation": "A fluência (creep) caracteriza-se pela continuação lenta da deformação com o passar do tempo enquanto a carga externa permanece constante.",
    "distractorAnalysis": [
      "Está incorreta: Ensaios mecânicos não provocam arrefecimento para o zero absoluto.",
      "Está incorreta: Fragmentação explosiva imediata sob força mínima seria uma falha catastrófica anómala, não fluência lenta.",
      "Está incorreta: Retorno instantâneo sem atraso caracteriza um sólido elástico ideal de Hooke sem efeitos viscosos."
    ],
    "nursingApplication": "Explica por que uma pessoa perde ligeiramente altura ao longo do dia devido à compressão prolongada dos discos intervertebrais."
  },
  {
    "id": 2455,
    "topicId": 2,
    "question": "O que é o fenómeno de Relaxamento de Tensões em materiais viscoelásticos?",
    "options": [
      "O aumento infinito da força elástica gerada quando a barra é mantida absolutamente fixa.",
      "A transformação de energia potencial gravitacional em energia nuclear espontânea.",
      "A anulação de todas as forças de atrito na superfície externa do corpo biológico.",
      "A diminuição progressiva da tensão interna necessária para manter o material sob uma deformação constante ao longo do tempo."
    ],
    "correctIndex": 3,
    "explanation": "No relaxamento de tensões, mantendo-se a deformação constante, as moléculas reorganizam-se e a tensão mecânica interna diminui com o tempo.",
    "distractorAnalysis": [
      "Está incorreta: A tensão interna diminui com o tempo sob deformação fixa, não aumenta infinitamente.",
      "Está incorreta: Tensões elásticas não se convertem espontaneamente em reações nucleares.",
      "Está incorreta: O atrito externo não é anulado pelo relaxamento interno do material."
    ],
    "nursingApplication": "Relevante quando ligaduras elásticas ou talas mantidas com extensão fixa perdem tensão ao longo das horas."
  },
  {
    "id": 2456,
    "topicId": 2,
    "question": "Porque é que o osso cortical é classificado como um material Anisotrópico na biomecânica?",
    "options": [
      "Porque as suas propriedades mecânicas (resistência e rigidez) variam consoante a direção em que a força é aplicada.",
      "Porque apresenta exatamente a mesma rigidez e resistência mecânica em todas as direções do espaço tridimensional.",
      "Porque é constituído exclusivamente por um líquido viscoso newtoniano sem qualquer mineral sólido.",
      "Porque se decompõe espontaneamente em gás carbónico quando sujeito a qualquer força mecânica."
    ],
    "correctIndex": 0,
    "explanation": "O osso é mais resistente à compressão longitudinal do que à tração ou cisalhamento transversal, sendo, portanto, mecanicamente anisotrópico.",
    "distractorAnalysis": [
      "Está incorreta: Apresentar a mesma resistência em todas as direções define um material isotrópico, não anisotrópico.",
      "Está incorreta: O osso possui uma matriz sólida mineralizada rica em hidroxiapatite e colagénio, não sendo puramente líquido.",
      "Está incorreta: O osso não se decompõe em gás carbónico sob esforços mecânicos normais."
    ],
    "nursingApplication": "Permite entender por que o fémur suporta grandes cargas axiais na vertical, mas fratura mais facilmente sob torção ou flexão lateral."
  },
  {
    "id": 2457,
    "topicId": 2,
    "question": "Como varia a rigidez do osso em função da velocidade com que a carga mecânica é aplicada (comportamento viscoelástico)?",
    "options": [
      "O osso perde toda a sua rigidez tornando-se puramente líquido quando a carga é aplicada com alta velocidade.",
      "O osso comporta-se de forma mais rígida e suporta maiores tensões quando a carga é aplicada rapidamente do que lentamente.",
      "A velocidade de aplicação da carga não tem qualquer influência nas propriedades mecânicas de um material viscoelástico.",
      "O osso só suporta cargas quando a velocidade de impacto é exatamente zero."
    ],
    "correctIndex": 1,
    "explanation": "Devido à viscoelasticidade, materiais biológicos aumentam a rigidez aparente e a tensão de rutura sob taxas de deformação elevadas (impactos rápidos).",
    "distractorAnalysis": [
      "Está incorreta: O osso não se liquefaz sob carregamentos mecânicos de alta velocidade.",
      "Está incorreta: Em materiais viscoelásticos, a resposta mecânica depende criticamente da taxa de deformação (velocidade de carga).",
      "Está incorreta: O osso suporta cargas em repouso e em movimento dinâmico."
    ],
    "nursingApplication": "Explica por que os mecanismos de lesão e fratura óssea diferem entre quedas lentas e impactos traumáticos rápidos."
  },
  {
    "id": 2458,
    "topicId": 2,
    "question": "Qual dos seguintes constituintes do osso confere predominantemente Flexibilidade e Resistência à Tração?",
    "options": [
      "Os cristais minerais inorgânicos de hidroxiapatite de cálcio.",
      "O ar atmosférico contido nos poros trabeculares microscópicos.",
      "As fibras de colagénio da matriz óssea.",
      "Os eletrões livres que fluem através da corrente galvânica da pele."
    ],
    "correctIndex": 2,
    "explanation": "O colagénio (fração orgânica) confere flexibilidade, elasticidade e resistência à tração, enquanto a hidroxiapatite confere rigidez à compressão.",
    "distractorAnalysis": [
      "Está incorreta: A hidroxiapatite mineral confere dureza e resistência à compressão, não flexibilidade à tração.",
      "Está incorreta: O osso não é preenchido por ar atmosférico, mas por medula e fluido intersticial.",
      "Está incorreta: Correntes galvânicas da pele não são componentes estruturais da matriz óssea."
    ],
    "nursingApplication": "Explica por que a perda de colagénio com o envelhecimento torna os ossos mais frágeis e quebradiços."
  },
  {
    "id": 2459,
    "topicId": 2,
    "question": "Qual dos seguintes constituintes do osso confere predominantemente Dureza, Rigidez e Resistência à Compressão?",
    "options": [
      "As fibras flexíveis de colagénio que compõem a matriz orgânica do tecido.",
      "A hemoglobina livre que transporta oxigénio no plasma sanguíneo.",
      "As moléculas de água pura que evaporam imediatamente para o exterior.",
      "Os cristais minerais inorgânicos de hidroxiapatite (sais de cálcio e fosfato)."
    ],
    "correctIndex": 3,
    "explanation": "A fase inorgânica mineral (hidroxiapatite) é a principal responsável pela elevada rigidez intrínseca e resistência à compressão do osso.",
    "distractorAnalysis": [
      "Está incorreta: O colagénio orgânico confere flexibilidade elástica e resistência à tração mecânica.",
      "Está incorreta: A hemoglobina está nos eritrócitos circulantes, não na matriz mineral do osso cortical.",
      "Está incorreta: A água intersticial contribui para a viscoelasticidade, mas não confere a rigidez mineral."
    ],
    "nursingApplication": "Fundamental para entender o papel do aporte de cálcio e vitamina D na densidade mineral óssea."
  },
  {
    "id": 2460,
    "topicId": 2,
    "question": "Em síntese biomecânica (Slide 20 e 34), a estrutura de um osso longo como o fémur é geometricamente otimizada para:",
    "options": [
      "Resistir a esforços combinados de compressão axial, flexão e torção com o mínimo de peso ósseo (estrutura oca cilíndrica).",
      "Ser um corpo perfeitamente maciço e infinito sem canal medular interno.",
      "Comportar-se como um fluido viscoso de Newton em equilíbrio hidrostático no leito.",
      "Evitar qualquer tipo de movimento articular mantendo o esqueleto em rigidez cadavérica."
    ],
    "correctIndex": 0,
    "explanation": "A geometria cilíndrica oca dos ossos longos maximiza o momento de inércia polar e de flexão, conferindo alta resistência com menor massa corporal.",
    "distractorAnalysis": [
      "Está incorreta: Um osso maciço seria excessivamente pesado e metabolicamente ineficiente sem ganho proporcional de resistência na torção.",
      "Está incorreta: O osso não é um fluido nem se rege pelas equações puramente hidrostáticas de Newton.",
      "Está incorreta: O esqueleto é concebido para permitir mobilidade articular equilibrada e absorção dinâmica de forças."
    ],
    "nursingApplication": "Permite compreender por que a locomoção humana é eficiente em termos de consumo energético e resistência mecânica."
  },
  {
    "id": 2461,
    "topicId": 2,
    "question": "[Variação 2] O que é a Histerese Elástica observada nos corpos viscoelásticos (Slide 19)?",
    "options": [
      "A emissão espontânea de fotões luminosos quando um osso é colocado no escuro absoluto.",
      "O fenómeno em que a curva de descarga não coincide com a curva de carga, formando um ciclo fechado no diagrama tensão-deformação.",
      "O aumento instantâneo da massa inercial do corpo elástico quando submetido a velocidades baixas.",
      "A restituição de 100% da energia mecânica sem qualquer perda ou produção de calor no sistema."
    ],
    "correctIndex": 1,
    "explanation": "Nos corpos viscoelásticos (como ossos e cartilagens), o retorno elástico segue um caminho diferente da deformação inicial, caracterizando a histerese.",
    "distractorAnalysis": [
      "Está incorreta: Emissão de fotões no escuro é fosforescência ou bioluminescência, não histerese elástica mecânica.",
      "Está incorreta: A massa inercial de um corpo sob ensaios mecânicos normais não varia com a velocidade.",
      "Está incorreta: Restituição de 100% da energia sem perdas caracteriza um corpo elástico ideal de Hooke, não um corpo com histerese."
    ],
    "nursingApplication": "Explica o amortecimento mecânico natural das articulações e dos discos vertebrais."
  },
  {
    "id": 2462,
    "topicId": 2,
    "question": "[Variação 2] O que representa fisicamente a área contida no interior do ciclo de histerese elástica (Slide 19)?",
    "options": [
      "A aceleração média adquirida pelo centro de gravidade do corpo durante o salto.",
      "O volume de oxigénio consumido pelas mitocôndrias durante a contração isotónica.",
      "A quantidade de energia mecânica dissipada sob a forma de calor durante o ciclo de carga e descarga.",
      "A carga elétrica acumulada na superfície externa do tecido elástico por indução estática."
    ],
    "correctIndex": 2,
    "explanation": "A área do laço de histerese representa o trabalho mecânico perdido pelo sistema sob a forma de energia térmica dissipada.",
    "distractorAnalysis": [
      "Está incorreta: Aceleração do centro de gravidade é uma grandeza cinemática, não a área de um gráfico tensão-deformação.",
      "Está incorreta: Consumo mitocondrial de oxigénio é um processo bioquímico celular metabólico, não trabalho de histerese.",
      "Está incorreta: Carga elétrica estática mede-se em Coulombs e decorre de efeitos triboelétricos, não da área do ciclo mecânico."
    ],
    "nursingApplication": "Demonstra a capacidade dos tecidos biológicos de dissipar choques mecânicos para proteger os órgãos vitais."
  },
  {
    "id": 2463,
    "topicId": 2,
    "question": "[Variação 2] Porque é que a histerese elástica dos tecidos viscoelásticos (como cartilagens e ligamentos) é benéfica para o corpo humano?",
    "options": [
      "Torna os ossos totalmente indeformáveis como blocos maciços de aço temperado.",
      "Elimina a necessidade de circulação sanguínea e de oxigenação celular nos membros inferiores.",
      "Impede que a gravidade terrestre exerça qualquer força peso sobre o corpo em repouso.",
      "Permite absorver choques mecânicos e amortecer impactos através da dissipação gradual de energia."
    ],
    "correctIndex": 3,
    "explanation": "Ao dissipar parte da energia mecânica em calor (amortecimento), os tecidos viscoelásticos evitam picos violentos de tensão sobre as articulações.",
    "distractorAnalysis": [
      "Está incorreta: Tornar os ossos indeformáveis impediria o amortecimento elástico e aumentaria o risco de fratura por impacto.",
      "Está incorreta: A viscoelasticidade mecânica não elimina os processos metabólicos nem a circulação de sangue.",
      "Está incorreta: Nenhum tecido elástico biológico tem a capacidade de anular a gravidade terrestre."
    ],
    "nursingApplication": "Explica por que calçado com amortecimento elástico ajuda a prevenir lesões por impacto na marcha e corrida."
  },
  {
    "id": 2464,
    "topicId": 2,
    "question": "[Variação 2] O que é o fenómeno de Fluência (Creep) em materiais viscoelásticos?",
    "options": [
      "O aumento progressivo da deformação ao longo do tempo quando o material é submetido a uma tensão (força) constante.",
      "A diminuição instantânea da temperatura do corpo para o zero absoluto sob tensão mecânica.",
      "A fragmentação explosiva do material assim que é aplicada uma força mínima de compressão.",
      "O retorno imediato e perfeitamente elástico à forma original sem qualquer atraso temporal."
    ],
    "correctIndex": 0,
    "explanation": "A fluência (creep) caracteriza-se pela continuação lenta da deformação com o passar do tempo enquanto a carga externa permanece constante.",
    "distractorAnalysis": [
      "Está incorreta: Ensaios mecânicos não provocam arrefecimento para o zero absoluto.",
      "Está incorreta: Fragmentação explosiva imediata sob força mínima seria uma falha catastrófica anómala, não fluência lenta.",
      "Está incorreta: Retorno instantâneo sem atraso caracteriza um sólido elástico ideal de Hooke sem efeitos viscosos."
    ],
    "nursingApplication": "Explica por que uma pessoa perde ligeiramente altura ao longo do dia devido à compressão prolongada dos discos intervertebrais."
  },
  {
    "id": 2465,
    "topicId": 2,
    "question": "[Variação 2] O que é o fenómeno de Relaxamento de Tensões em materiais viscoelásticos?",
    "options": [
      "O aumento infinito da força elástica gerada quando a barra é mantida absolutamente fixa.",
      "A diminuição progressiva da tensão interna necessária para manter o material sob uma deformação constante ao longo do tempo.",
      "A transformação de energia potencial gravitacional em energia nuclear espontânea.",
      "A anulação de todas as forças de atrito na superfície externa do corpo biológico."
    ],
    "correctIndex": 1,
    "explanation": "No relaxamento de tensões, mantendo-se a deformação constante, as moléculas reorganizam-se e a tensão mecânica interna diminui com o tempo.",
    "distractorAnalysis": [
      "Está incorreta: A tensão interna diminui com o tempo sob deformação fixa, não aumenta infinitamente.",
      "Está incorreta: Tensões elásticas não se convertem espontaneamente em reações nucleares.",
      "Está incorreta: O atrito externo não é anulado pelo relaxamento interno do material."
    ],
    "nursingApplication": "Relevante quando ligaduras elásticas ou talas mantidas com extensão fixa perdem tensão ao longo das horas."
  },
  {
    "id": 2466,
    "topicId": 2,
    "question": "[Variação 2] Porque é que o osso cortical é classificado como um material Anisotrópico na biomecânica?",
    "options": [
      "Porque apresenta exatamente a mesma rigidez e resistência mecânica em todas as direções do espaço tridimensional.",
      "Porque é constituído exclusivamente por um líquido viscoso newtoniano sem qualquer mineral sólido.",
      "Porque as suas propriedades mecânicas (resistência e rigidez) variam consoante a direção em que a força é aplicada.",
      "Porque se decompõe espontaneamente em gás carbónico quando sujeito a qualquer força mecânica."
    ],
    "correctIndex": 2,
    "explanation": "O osso é mais resistente à compressão longitudinal do que à tração ou cisalhamento transversal, sendo, portanto, mecanicamente anisotrópico.",
    "distractorAnalysis": [
      "Está incorreta: Apresentar a mesma resistência em todas as direções define um material isotrópico, não anisotrópico.",
      "Está incorreta: O osso possui uma matriz sólida mineralizada rica em hidroxiapatite e colagénio, não sendo puramente líquido.",
      "Está incorreta: O osso não se decompõe em gás carbónico sob esforços mecânicos normais."
    ],
    "nursingApplication": "Permite entender por que o fémur suporta grandes cargas axiais na vertical, mas fratura mais facilmente sob torção ou flexão lateral."
  },
  {
    "id": 2467,
    "topicId": 2,
    "question": "[Variação 2] Como varia a rigidez do osso em função da velocidade com que a carga mecânica é aplicada (comportamento viscoelástico)?",
    "options": [
      "O osso perde toda a sua rigidez tornando-se puramente líquido quando a carga é aplicada com alta velocidade.",
      "A velocidade de aplicação da carga não tem qualquer influência nas propriedades mecânicas de um material viscoelástico.",
      "O osso só suporta cargas quando a velocidade de impacto é exatamente zero.",
      "O osso comporta-se de forma mais rígida e suporta maiores tensões quando a carga é aplicada rapidamente do que lentamente."
    ],
    "correctIndex": 3,
    "explanation": "Devido à viscoelasticidade, materiais biológicos aumentam a rigidez aparente e a tensão de rutura sob taxas de deformação elevadas (impactos rápidos).",
    "distractorAnalysis": [
      "Está incorreta: O osso não se liquefaz sob carregamentos mecânicos de alta velocidade.",
      "Está incorreta: Em materiais viscoelásticos, a resposta mecânica depende criticamente da taxa de deformação (velocidade de carga).",
      "Está incorreta: O osso suporta cargas em repouso e em movimento dinâmico."
    ],
    "nursingApplication": "Explica por que os mecanismos de lesão e fratura óssea diferem entre quedas lentas e impactos traumáticos rápidos."
  },
  {
    "id": 2468,
    "topicId": 2,
    "question": "[Variação 2] Qual dos seguintes constituintes do osso confere predominantemente Flexibilidade e Resistência à Tração?",
    "options": [
      "As fibras de colagénio da matriz óssea.",
      "Os cristais minerais inorgânicos de hidroxiapatite de cálcio.",
      "O ar atmosférico contido nos poros trabeculares microscópicos.",
      "Os eletrões livres que fluem através da corrente galvânica da pele."
    ],
    "correctIndex": 0,
    "explanation": "O colagénio (fração orgânica) confere flexibilidade, elasticidade e resistência à tração, enquanto a hidroxiapatite confere rigidez à compressão.",
    "distractorAnalysis": [
      "Está incorreta: A hidroxiapatite mineral confere dureza e resistência à compressão, não flexibilidade à tração.",
      "Está incorreta: O osso não é preenchido por ar atmosférico, mas por medula e fluido intersticial.",
      "Está incorreta: Correntes galvânicas da pele não são componentes estruturais da matriz óssea."
    ],
    "nursingApplication": "Explica por que a perda de colagénio com o envelhecimento torna os ossos mais frágeis e quebradiços."
  },
  {
    "id": 2469,
    "topicId": 2,
    "question": "[Variação 2] Qual dos seguintes constituintes do osso confere predominantemente Dureza, Rigidez e Resistência à Compressão?",
    "options": [
      "As fibras flexíveis de colagénio que compõem a matriz orgânica do tecido.",
      "Os cristais minerais inorgânicos de hidroxiapatite (sais de cálcio e fosfato).",
      "A hemoglobina livre que transporta oxigénio no plasma sanguíneo.",
      "As moléculas de água pura que evaporam imediatamente para o exterior."
    ],
    "correctIndex": 1,
    "explanation": "A fase inorgânica mineral (hidroxiapatite) é a principal responsável pela elevada rigidez intrínseca e resistência à compressão do osso.",
    "distractorAnalysis": [
      "Está incorreta: O colagénio orgânico confere flexibilidade elástica e resistência à tração mecânica.",
      "Está incorreta: A hemoglobina está nos eritrócitos circulantes, não na matriz mineral do osso cortical.",
      "Está incorreta: A água intersticial contribui para a viscoelasticidade, mas não confere a rigidez mineral."
    ],
    "nursingApplication": "Fundamental para entender o papel do aporte de cálcio e vitamina D na densidade mineral óssea."
  },
  {
    "id": 2470,
    "topicId": 2,
    "question": "[Variação 2] Em síntese biomecânica (Slide 20 e 34), a estrutura de um osso longo como o fémur é geometricamente otimizada para:",
    "options": [
      "Ser um corpo perfeitamente maciço e infinito sem canal medular interno.",
      "Comportar-se como um fluido viscoso de Newton em equilíbrio hidrostático no leito.",
      "Resistir a esforços combinados de compressão axial, flexão e torção com o mínimo de peso ósseo (estrutura oca cilíndrica).",
      "Evitar qualquer tipo de movimento articular mantendo o esqueleto em rigidez cadavérica."
    ],
    "correctIndex": 2,
    "explanation": "A geometria cilíndrica oca dos ossos longos maximiza o momento de inércia polar e de flexão, conferindo alta resistência com menor massa corporal.",
    "distractorAnalysis": [
      "Está incorreta: Um osso maciço seria excessivamente pesado e metabolicamente ineficiente sem ganho proporcional de resistência na torção.",
      "Está incorreta: O osso não é um fluido nem se rege pelas equações puramente hidrostáticas de Newton.",
      "Está incorreta: O esqueleto é concebido para permitir mobilidade articular equilibrada e absorção dinâmica de forças."
    ],
    "nursingApplication": "Permite compreender por que a locomoção humana é eficiente em termos de consumo energético e resistência mecânica."
  },
  {
    "id": 2471,
    "topicId": 2,
    "question": "[Variação 3] O que é a Histerese Elástica observada nos corpos viscoelásticos (Slide 19)?",
    "options": [
      "A emissão espontânea de fotões luminosos quando um osso é colocado no escuro absoluto.",
      "O aumento instantâneo da massa inercial do corpo elástico quando submetido a velocidades baixas.",
      "A restituição de 100% da energia mecânica sem qualquer perda ou produção de calor no sistema.",
      "O fenómeno em que a curva de descarga não coincide com a curva de carga, formando um ciclo fechado no diagrama tensão-deformação."
    ],
    "correctIndex": 3,
    "explanation": "Nos corpos viscoelásticos (como ossos e cartilagens), o retorno elástico segue um caminho diferente da deformação inicial, caracterizando a histerese.",
    "distractorAnalysis": [
      "Está incorreta: Emissão de fotões no escuro é fosforescência ou bioluminescência, não histerese elástica mecânica.",
      "Está incorreta: A massa inercial de um corpo sob ensaios mecânicos normais não varia com a velocidade.",
      "Está incorreta: Restituição de 100% da energia sem perdas caracteriza um corpo elástico ideal de Hooke, não um corpo com histerese."
    ],
    "nursingApplication": "Explica o amortecimento mecânico natural das articulações e dos discos vertebrais."
  },
  {
    "id": 2472,
    "topicId": 2,
    "question": "[Variação 3] O que representa fisicamente a área contida no interior do ciclo de histerese elástica (Slide 19)?",
    "options": [
      "A quantidade de energia mecânica dissipada sob a forma de calor durante o ciclo de carga e descarga.",
      "A aceleração média adquirida pelo centro de gravidade do corpo durante o salto.",
      "O volume de oxigénio consumido pelas mitocôndrias durante a contração isotónica.",
      "A carga elétrica acumulada na superfície externa do tecido elástico por indução estática."
    ],
    "correctIndex": 0,
    "explanation": "A área do laço de histerese representa o trabalho mecânico perdido pelo sistema sob a forma de energia térmica dissipada.",
    "distractorAnalysis": [
      "Está incorreta: Aceleração do centro de gravidade é uma grandeza cinemática, não a área de um gráfico tensão-deformação.",
      "Está incorreta: Consumo mitocondrial de oxigénio é um processo bioquímico celular metabólico, não trabalho de histerese.",
      "Está incorreta: Carga elétrica estática mede-se em Coulombs e decorre de efeitos triboelétricos, não da área do ciclo mecânico."
    ],
    "nursingApplication": "Demonstra a capacidade dos tecidos biológicos de dissipar choques mecânicos para proteger os órgãos vitais."
  },
  {
    "id": 2473,
    "topicId": 2,
    "question": "[Variação 3] Porque é que a histerese elástica dos tecidos viscoelásticos (como cartilagens e ligamentos) é benéfica para o corpo humano?",
    "options": [
      "Torna os ossos totalmente indeformáveis como blocos maciços de aço temperado.",
      "Permite absorver choques mecânicos e amortecer impactos através da dissipação gradual de energia.",
      "Elimina a necessidade de circulação sanguínea e de oxigenação celular nos membros inferiores.",
      "Impede que a gravidade terrestre exerça qualquer força peso sobre o corpo em repouso."
    ],
    "correctIndex": 1,
    "explanation": "Ao dissipar parte da energia mecânica em calor (amortecimento), os tecidos viscoelásticos evitam picos violentos de tensão sobre as articulações.",
    "distractorAnalysis": [
      "Está incorreta: Tornar os ossos indeformáveis impediria o amortecimento elástico e aumentaria o risco de fratura por impacto.",
      "Está incorreta: A viscoelasticidade mecânica não elimina os processos metabólicos nem a circulação de sangue.",
      "Está incorreta: Nenhum tecido elástico biológico tem a capacidade de anular a gravidade terrestre."
    ],
    "nursingApplication": "Explica por que calçado com amortecimento elástico ajuda a prevenir lesões por impacto na marcha e corrida."
  },
  {
    "id": 2474,
    "topicId": 2,
    "question": "[Variação 3] O que é o fenómeno de Fluência (Creep) em materiais viscoelásticos?",
    "options": [
      "A diminuição instantânea da temperatura do corpo para o zero absoluto sob tensão mecânica.",
      "A fragmentação explosiva do material assim que é aplicada uma força mínima de compressão.",
      "O aumento progressivo da deformação ao longo do tempo quando o material é submetido a uma tensão (força) constante.",
      "O retorno imediato e perfeitamente elástico à forma original sem qualquer atraso temporal."
    ],
    "correctIndex": 2,
    "explanation": "A fluência (creep) caracteriza-se pela continuação lenta da deformação com o passar do tempo enquanto a carga externa permanece constante.",
    "distractorAnalysis": [
      "Está incorreta: Ensaios mecânicos não provocam arrefecimento para o zero absoluto.",
      "Está incorreta: Fragmentação explosiva imediata sob força mínima seria uma falha catastrófica anómala, não fluência lenta.",
      "Está incorreta: Retorno instantâneo sem atraso caracteriza um sólido elástico ideal de Hooke sem efeitos viscosos."
    ],
    "nursingApplication": "Explica por que uma pessoa perde ligeiramente altura ao longo do dia devido à compressão prolongada dos discos intervertebrais."
  },
  {
    "id": 2475,
    "topicId": 2,
    "question": "[Variação 3] O que é o fenómeno de Relaxamento de Tensões em materiais viscoelásticos?",
    "options": [
      "O aumento infinito da força elástica gerada quando a barra é mantida absolutamente fixa.",
      "A transformação de energia potencial gravitacional em energia nuclear espontânea.",
      "A anulação de todas as forças de atrito na superfície externa do corpo biológico.",
      "A diminuição progressiva da tensão interna necessária para manter o material sob uma deformação constante ao longo do tempo."
    ],
    "correctIndex": 3,
    "explanation": "No relaxamento de tensões, mantendo-se a deformação constante, as moléculas reorganizam-se e a tensão mecânica interna diminui com o tempo.",
    "distractorAnalysis": [
      "Está incorreta: A tensão interna diminui com o tempo sob deformação fixa, não aumenta infinitamente.",
      "Está incorreta: Tensões elásticas não se convertem espontaneamente em reações nucleares.",
      "Está incorreta: O atrito externo não é anulado pelo relaxamento interno do material."
    ],
    "nursingApplication": "Relevante quando ligaduras elásticas ou talas mantidas com extensão fixa perdem tensão ao longo das horas."
  },
  {
    "id": 2476,
    "topicId": 2,
    "question": "[Variação 3] Porque é que o osso cortical é classificado como um material Anisotrópico na biomecânica?",
    "options": [
      "Porque as suas propriedades mecânicas (resistência e rigidez) variam consoante a direção em que a força é aplicada.",
      "Porque apresenta exatamente a mesma rigidez e resistência mecânica em todas as direções do espaço tridimensional.",
      "Porque é constituído exclusivamente por um líquido viscoso newtoniano sem qualquer mineral sólido.",
      "Porque se decompõe espontaneamente em gás carbónico quando sujeito a qualquer força mecânica."
    ],
    "correctIndex": 0,
    "explanation": "O osso é mais resistente à compressão longitudinal do que à tração ou cisalhamento transversal, sendo, portanto, mecanicamente anisotrópico.",
    "distractorAnalysis": [
      "Está incorreta: Apresentar a mesma resistência em todas as direções define um material isotrópico, não anisotrópico.",
      "Está incorreta: O osso possui uma matriz sólida mineralizada rica em hidroxiapatite e colagénio, não sendo puramente líquido.",
      "Está incorreta: O osso não se decompõe em gás carbónico sob esforços mecânicos normais."
    ],
    "nursingApplication": "Permite entender por que o fémur suporta grandes cargas axiais na vertical, mas fratura mais facilmente sob torção ou flexão lateral."
  },
  {
    "id": 2477,
    "topicId": 2,
    "question": "[Variação 3] Como varia a rigidez do osso em função da velocidade com que a carga mecânica é aplicada (comportamento viscoelástico)?",
    "options": [
      "O osso perde toda a sua rigidez tornando-se puramente líquido quando a carga é aplicada com alta velocidade.",
      "O osso comporta-se de forma mais rígida e suporta maiores tensões quando a carga é aplicada rapidamente do que lentamente.",
      "A velocidade de aplicação da carga não tem qualquer influência nas propriedades mecânicas de um material viscoelástico.",
      "O osso só suporta cargas quando a velocidade de impacto é exatamente zero."
    ],
    "correctIndex": 1,
    "explanation": "Devido à viscoelasticidade, materiais biológicos aumentam a rigidez aparente e a tensão de rutura sob taxas de deformação elevadas (impactos rápidos).",
    "distractorAnalysis": [
      "Está incorreta: O osso não se liquefaz sob carregamentos mecânicos de alta velocidade.",
      "Está incorreta: Em materiais viscoelásticos, a resposta mecânica depende criticamente da taxa de deformação (velocidade de carga).",
      "Está incorreta: O osso suporta cargas em repouso e em movimento dinâmico."
    ],
    "nursingApplication": "Explica por que os mecanismos de lesão e fratura óssea diferem entre quedas lentas e impactos traumáticos rápidos."
  },
  {
    "id": 2478,
    "topicId": 2,
    "question": "[Variação 3] Qual dos seguintes constituintes do osso confere predominantemente Flexibilidade e Resistência à Tração?",
    "options": [
      "Os cristais minerais inorgânicos de hidroxiapatite de cálcio.",
      "O ar atmosférico contido nos poros trabeculares microscópicos.",
      "As fibras de colagénio da matriz óssea.",
      "Os eletrões livres que fluem através da corrente galvânica da pele."
    ],
    "correctIndex": 2,
    "explanation": "O colagénio (fração orgânica) confere flexibilidade, elasticidade e resistência à tração, enquanto a hidroxiapatite confere rigidez à compressão.",
    "distractorAnalysis": [
      "Está incorreta: A hidroxiapatite mineral confere dureza e resistência à compressão, não flexibilidade à tração.",
      "Está incorreta: O osso não é preenchido por ar atmosférico, mas por medula e fluido intersticial.",
      "Está incorreta: Correntes galvânicas da pele não são componentes estruturais da matriz óssea."
    ],
    "nursingApplication": "Explica por que a perda de colagénio com o envelhecimento torna os ossos mais frágeis e quebradiços."
  },
  {
    "id": 2479,
    "topicId": 2,
    "question": "[Variação 3] Qual dos seguintes constituintes do osso confere predominantemente Dureza, Rigidez e Resistência à Compressão?",
    "options": [
      "As fibras flexíveis de colagénio que compõem a matriz orgânica do tecido.",
      "A hemoglobina livre que transporta oxigénio no plasma sanguíneo.",
      "As moléculas de água pura que evaporam imediatamente para o exterior.",
      "Os cristais minerais inorgânicos de hidroxiapatite (sais de cálcio e fosfato)."
    ],
    "correctIndex": 3,
    "explanation": "A fase inorgânica mineral (hidroxiapatite) é a principal responsável pela elevada rigidez intrínseca e resistência à compressão do osso.",
    "distractorAnalysis": [
      "Está incorreta: O colagénio orgânico confere flexibilidade elástica e resistência à tração mecânica.",
      "Está incorreta: A hemoglobina está nos eritrócitos circulantes, não na matriz mineral do osso cortical.",
      "Está incorreta: A água intersticial contribui para a viscoelasticidade, mas não confere a rigidez mineral."
    ],
    "nursingApplication": "Fundamental para entender o papel do aporte de cálcio e vitamina D na densidade mineral óssea."
  },
  {
    "id": 2480,
    "topicId": 2,
    "question": "[Variação 3] Em síntese biomecânica (Slide 20 e 34), a estrutura de um osso longo como o fémur é geometricamente otimizada para:",
    "options": [
      "Resistir a esforços combinados de compressão axial, flexão e torção com o mínimo de peso ósseo (estrutura oca cilíndrica).",
      "Ser um corpo perfeitamente maciço e infinito sem canal medular interno.",
      "Comportar-se como um fluido viscoso de Newton em equilíbrio hidrostático no leito.",
      "Evitar qualquer tipo de movimento articular mantendo o esqueleto em rigidez cadavérica."
    ],
    "correctIndex": 0,
    "explanation": "A geometria cilíndrica oca dos ossos longos maximiza o momento de inércia polar e de flexão, conferindo alta resistência com menor massa corporal.",
    "distractorAnalysis": [
      "Está incorreta: Um osso maciço seria excessivamente pesado e metabolicamente ineficiente sem ganho proporcional de resistência na torção.",
      "Está incorreta: O osso não é um fluido nem se rege pelas equações puramente hidrostáticas de Newton.",
      "Está incorreta: O esqueleto é concebido para permitir mobilidade articular equilibrada e absorção dinâmica de forças."
    ],
    "nursingApplication": "Permite compreender por que a locomoção humana é eficiente em termos de consumo energético e resistência mecânica."
  },
  {
    "id": 2481,
    "topicId": 2,
    "question": "[Variação 4] O que é a Histerese Elástica observada nos corpos viscoelásticos (Slide 19)?",
    "options": [
      "A emissão espontânea de fotões luminosos quando um osso é colocado no escuro absoluto.",
      "O fenómeno em que a curva de descarga não coincide com a curva de carga, formando um ciclo fechado no diagrama tensão-deformação.",
      "O aumento instantâneo da massa inercial do corpo elástico quando submetido a velocidades baixas.",
      "A restituição de 100% da energia mecânica sem qualquer perda ou produção de calor no sistema."
    ],
    "correctIndex": 1,
    "explanation": "Nos corpos viscoelásticos (como ossos e cartilagens), o retorno elástico segue um caminho diferente da deformação inicial, caracterizando a histerese.",
    "distractorAnalysis": [
      "Está incorreta: Emissão de fotões no escuro é fosforescência ou bioluminescência, não histerese elástica mecânica.",
      "Está incorreta: A massa inercial de um corpo sob ensaios mecânicos normais não varia com a velocidade.",
      "Está incorreta: Restituição de 100% da energia sem perdas caracteriza um corpo elástico ideal de Hooke, não um corpo com histerese."
    ],
    "nursingApplication": "Explica o amortecimento mecânico natural das articulações e dos discos vertebrais."
  },
  {
    "id": 2482,
    "topicId": 2,
    "question": "[Variação 4] O que representa fisicamente a área contida no interior do ciclo de histerese elástica (Slide 19)?",
    "options": [
      "A aceleração média adquirida pelo centro de gravidade do corpo durante o salto.",
      "O volume de oxigénio consumido pelas mitocôndrias durante a contração isotónica.",
      "A quantidade de energia mecânica dissipada sob a forma de calor durante o ciclo de carga e descarga.",
      "A carga elétrica acumulada na superfície externa do tecido elástico por indução estática."
    ],
    "correctIndex": 2,
    "explanation": "A área do laço de histerese representa o trabalho mecânico perdido pelo sistema sob a forma de energia térmica dissipada.",
    "distractorAnalysis": [
      "Está incorreta: Aceleração do centro de gravidade é uma grandeza cinemática, não a área de um gráfico tensão-deformação.",
      "Está incorreta: Consumo mitocondrial de oxigénio é um processo bioquímico celular metabólico, não trabalho de histerese.",
      "Está incorreta: Carga elétrica estática mede-se em Coulombs e decorre de efeitos triboelétricos, não da área do ciclo mecânico."
    ],
    "nursingApplication": "Demonstra a capacidade dos tecidos biológicos de dissipar choques mecânicos para proteger os órgãos vitais."
  },
  {
    "id": 2483,
    "topicId": 2,
    "question": "[Variação 4] Porque é que a histerese elástica dos tecidos viscoelásticos (como cartilagens e ligamentos) é benéfica para o corpo humano?",
    "options": [
      "Torna os ossos totalmente indeformáveis como blocos maciços de aço temperado.",
      "Elimina a necessidade de circulação sanguínea e de oxigenação celular nos membros inferiores.",
      "Impede que a gravidade terrestre exerça qualquer força peso sobre o corpo em repouso.",
      "Permite absorver choques mecânicos e amortecer impactos através da dissipação gradual de energia."
    ],
    "correctIndex": 3,
    "explanation": "Ao dissipar parte da energia mecânica em calor (amortecimento), os tecidos viscoelásticos evitam picos violentos de tensão sobre as articulações.",
    "distractorAnalysis": [
      "Está incorreta: Tornar os ossos indeformáveis impediria o amortecimento elástico e aumentaria o risco de fratura por impacto.",
      "Está incorreta: A viscoelasticidade mecânica não elimina os processos metabólicos nem a circulação de sangue.",
      "Está incorreta: Nenhum tecido elástico biológico tem a capacidade de anular a gravidade terrestre."
    ],
    "nursingApplication": "Explica por que calçado com amortecimento elástico ajuda a prevenir lesões por impacto na marcha e corrida."
  },
  {
    "id": 2484,
    "topicId": 2,
    "question": "[Variação 4] O que é o fenómeno de Fluência (Creep) em materiais viscoelásticos?",
    "options": [
      "O aumento progressivo da deformação ao longo do tempo quando o material é submetido a uma tensão (força) constante.",
      "A diminuição instantânea da temperatura do corpo para o zero absoluto sob tensão mecânica.",
      "A fragmentação explosiva do material assim que é aplicada uma força mínima de compressão.",
      "O retorno imediato e perfeitamente elástico à forma original sem qualquer atraso temporal."
    ],
    "correctIndex": 0,
    "explanation": "A fluência (creep) caracteriza-se pela continuação lenta da deformação com o passar do tempo enquanto a carga externa permanece constante.",
    "distractorAnalysis": [
      "Está incorreta: Ensaios mecânicos não provocam arrefecimento para o zero absoluto.",
      "Está incorreta: Fragmentação explosiva imediata sob força mínima seria uma falha catastrófica anómala, não fluência lenta.",
      "Está incorreta: Retorno instantâneo sem atraso caracteriza um sólido elástico ideal de Hooke sem efeitos viscosos."
    ],
    "nursingApplication": "Explica por que uma pessoa perde ligeiramente altura ao longo do dia devido à compressão prolongada dos discos intervertebrais."
  },
  {
    "id": 2485,
    "topicId": 2,
    "question": "[Variação 4] O que é o fenómeno de Relaxamento de Tensões em materiais viscoelásticos?",
    "options": [
      "O aumento infinito da força elástica gerada quando a barra é mantida absolutamente fixa.",
      "A diminuição progressiva da tensão interna necessária para manter o material sob uma deformação constante ao longo do tempo.",
      "A transformação de energia potencial gravitacional em energia nuclear espontânea.",
      "A anulação de todas as forças de atrito na superfície externa do corpo biológico."
    ],
    "correctIndex": 1,
    "explanation": "No relaxamento de tensões, mantendo-se a deformação constante, as moléculas reorganizam-se e a tensão mecânica interna diminui com o tempo.",
    "distractorAnalysis": [
      "Está incorreta: A tensão interna diminui com o tempo sob deformação fixa, não aumenta infinitamente.",
      "Está incorreta: Tensões elásticas não se convertem espontaneamente em reações nucleares.",
      "Está incorreta: O atrito externo não é anulado pelo relaxamento interno do material."
    ],
    "nursingApplication": "Relevante quando ligaduras elásticas ou talas mantidas com extensão fixa perdem tensão ao longo das horas."
  },
  {
    "id": 2486,
    "topicId": 2,
    "question": "[Variação 4] Porque é que o osso cortical é classificado como um material Anisotrópico na biomecânica?",
    "options": [
      "Porque apresenta exatamente a mesma rigidez e resistência mecânica em todas as direções do espaço tridimensional.",
      "Porque é constituído exclusivamente por um líquido viscoso newtoniano sem qualquer mineral sólido.",
      "Porque as suas propriedades mecânicas (resistência e rigidez) variam consoante a direção em que a força é aplicada.",
      "Porque se decompõe espontaneamente em gás carbónico quando sujeito a qualquer força mecânica."
    ],
    "correctIndex": 2,
    "explanation": "O osso é mais resistente à compressão longitudinal do que à tração ou cisalhamento transversal, sendo, portanto, mecanicamente anisotrópico.",
    "distractorAnalysis": [
      "Está incorreta: Apresentar a mesma resistência em todas as direções define um material isotrópico, não anisotrópico.",
      "Está incorreta: O osso possui uma matriz sólida mineralizada rica em hidroxiapatite e colagénio, não sendo puramente líquido.",
      "Está incorreta: O osso não se decompõe em gás carbónico sob esforços mecânicos normais."
    ],
    "nursingApplication": "Permite entender por que o fémur suporta grandes cargas axiais na vertical, mas fratura mais facilmente sob torção ou flexão lateral."
  },
  {
    "id": 2487,
    "topicId": 2,
    "question": "[Variação 4] Como varia a rigidez do osso em função da velocidade com que a carga mecânica é aplicada (comportamento viscoelástico)?",
    "options": [
      "O osso perde toda a sua rigidez tornando-se puramente líquido quando a carga é aplicada com alta velocidade.",
      "A velocidade de aplicação da carga não tem qualquer influência nas propriedades mecânicas de um material viscoelástico.",
      "O osso só suporta cargas quando a velocidade de impacto é exatamente zero.",
      "O osso comporta-se de forma mais rígida e suporta maiores tensões quando a carga é aplicada rapidamente do que lentamente."
    ],
    "correctIndex": 3,
    "explanation": "Devido à viscoelasticidade, materiais biológicos aumentam a rigidez aparente e a tensão de rutura sob taxas de deformação elevadas (impactos rápidos).",
    "distractorAnalysis": [
      "Está incorreta: O osso não se liquefaz sob carregamentos mecânicos de alta velocidade.",
      "Está incorreta: Em materiais viscoelásticos, a resposta mecânica depende criticamente da taxa de deformação (velocidade de carga).",
      "Está incorreta: O osso suporta cargas em repouso e em movimento dinâmico."
    ],
    "nursingApplication": "Explica por que os mecanismos de lesão e fratura óssea diferem entre quedas lentas e impactos traumáticos rápidos."
  },
  {
    "id": 2488,
    "topicId": 2,
    "question": "[Variação 4] Qual dos seguintes constituintes do osso confere predominantemente Flexibilidade e Resistência à Tração?",
    "options": [
      "As fibras de colagénio da matriz óssea.",
      "Os cristais minerais inorgânicos de hidroxiapatite de cálcio.",
      "O ar atmosférico contido nos poros trabeculares microscópicos.",
      "Os eletrões livres que fluem através da corrente galvânica da pele."
    ],
    "correctIndex": 0,
    "explanation": "O colagénio (fração orgânica) confere flexibilidade, elasticidade e resistência à tração, enquanto a hidroxiapatite confere rigidez à compressão.",
    "distractorAnalysis": [
      "Está incorreta: A hidroxiapatite mineral confere dureza e resistência à compressão, não flexibilidade à tração.",
      "Está incorreta: O osso não é preenchido por ar atmosférico, mas por medula e fluido intersticial.",
      "Está incorreta: Correntes galvânicas da pele não são componentes estruturais da matriz óssea."
    ],
    "nursingApplication": "Explica por que a perda de colagénio com o envelhecimento torna os ossos mais frágeis e quebradiços."
  },
  {
    "id": 2489,
    "topicId": 2,
    "question": "[Variação 4] Qual dos seguintes constituintes do osso confere predominantemente Dureza, Rigidez e Resistência à Compressão?",
    "options": [
      "As fibras flexíveis de colagénio que compõem a matriz orgânica do tecido.",
      "Os cristais minerais inorgânicos de hidroxiapatite (sais de cálcio e fosfato).",
      "A hemoglobina livre que transporta oxigénio no plasma sanguíneo.",
      "As moléculas de água pura que evaporam imediatamente para o exterior."
    ],
    "correctIndex": 1,
    "explanation": "A fase inorgânica mineral (hidroxiapatite) é a principal responsável pela elevada rigidez intrínseca e resistência à compressão do osso.",
    "distractorAnalysis": [
      "Está incorreta: O colagénio orgânico confere flexibilidade elástica e resistência à tração mecânica.",
      "Está incorreta: A hemoglobina está nos eritrócitos circulantes, não na matriz mineral do osso cortical.",
      "Está incorreta: A água intersticial contribui para a viscoelasticidade, mas não confere a rigidez mineral."
    ],
    "nursingApplication": "Fundamental para entender o papel do aporte de cálcio e vitamina D na densidade mineral óssea."
  },
  {
    "id": 2490,
    "topicId": 2,
    "question": "[Variação 4] Em síntese biomecânica (Slide 20 e 34), a estrutura de um osso longo como o fémur é geometricamente otimizada para:",
    "options": [
      "Ser um corpo perfeitamente maciço e infinito sem canal medular interno.",
      "Comportar-se como um fluido viscoso de Newton em equilíbrio hidrostático no leito.",
      "Resistir a esforços combinados de compressão axial, flexão e torção com o mínimo de peso ósseo (estrutura oca cilíndrica).",
      "Evitar qualquer tipo de movimento articular mantendo o esqueleto em rigidez cadavérica."
    ],
    "correctIndex": 2,
    "explanation": "A geometria cilíndrica oca dos ossos longos maximiza o momento de inércia polar e de flexão, conferindo alta resistência com menor massa corporal.",
    "distractorAnalysis": [
      "Está incorreta: Um osso maciço seria excessivamente pesado e metabolicamente ineficiente sem ganho proporcional de resistência na torção.",
      "Está incorreta: O osso não é um fluido nem se rege pelas equações puramente hidrostáticas de Newton.",
      "Está incorreta: O esqueleto é concebido para permitir mobilidade articular equilibrada e absorção dinâmica de forças."
    ],
    "nursingApplication": "Permite compreender por que a locomoção humana é eficiente em termos de consumo energético e resistência mecânica."
  },
  {
    "id": 2491,
    "topicId": 2,
    "question": "[Variação 5] O que é a Histerese Elástica observada nos corpos viscoelásticos (Slide 19)?",
    "options": [
      "A emissão espontânea de fotões luminosos quando um osso é colocado no escuro absoluto.",
      "O aumento instantâneo da massa inercial do corpo elástico quando submetido a velocidades baixas.",
      "A restituição de 100% da energia mecânica sem qualquer perda ou produção de calor no sistema.",
      "O fenómeno em que a curva de descarga não coincide com a curva de carga, formando um ciclo fechado no diagrama tensão-deformação."
    ],
    "correctIndex": 3,
    "explanation": "Nos corpos viscoelásticos (como ossos e cartilagens), o retorno elástico segue um caminho diferente da deformação inicial, caracterizando a histerese.",
    "distractorAnalysis": [
      "Está incorreta: Emissão de fotões no escuro é fosforescência ou bioluminescência, não histerese elástica mecânica.",
      "Está incorreta: A massa inercial de um corpo sob ensaios mecânicos normais não varia com a velocidade.",
      "Está incorreta: Restituição de 100% da energia sem perdas caracteriza um corpo elástico ideal de Hooke, não um corpo com histerese."
    ],
    "nursingApplication": "Explica o amortecimento mecânico natural das articulações e dos discos vertebrais."
  },
  {
    "id": 2492,
    "topicId": 2,
    "question": "[Variação 5] O que representa fisicamente a área contida no interior do ciclo de histerese elástica (Slide 19)?",
    "options": [
      "A quantidade de energia mecânica dissipada sob a forma de calor durante o ciclo de carga e descarga.",
      "A aceleração média adquirida pelo centro de gravidade do corpo durante o salto.",
      "O volume de oxigénio consumido pelas mitocôndrias durante a contração isotónica.",
      "A carga elétrica acumulada na superfície externa do tecido elástico por indução estática."
    ],
    "correctIndex": 0,
    "explanation": "A área do laço de histerese representa o trabalho mecânico perdido pelo sistema sob a forma de energia térmica dissipada.",
    "distractorAnalysis": [
      "Está incorreta: Aceleração do centro de gravidade é uma grandeza cinemática, não a área de um gráfico tensão-deformação.",
      "Está incorreta: Consumo mitocondrial de oxigénio é um processo bioquímico celular metabólico, não trabalho de histerese.",
      "Está incorreta: Carga elétrica estática mede-se em Coulombs e decorre de efeitos triboelétricos, não da área do ciclo mecânico."
    ],
    "nursingApplication": "Demonstra a capacidade dos tecidos biológicos de dissipar choques mecânicos para proteger os órgãos vitais."
  },
  {
    "id": 2493,
    "topicId": 2,
    "question": "[Variação 5] Porque é que a histerese elástica dos tecidos viscoelásticos (como cartilagens e ligamentos) é benéfica para o corpo humano?",
    "options": [
      "Torna os ossos totalmente indeformáveis como blocos maciços de aço temperado.",
      "Permite absorver choques mecânicos e amortecer impactos através da dissipação gradual de energia.",
      "Elimina a necessidade de circulação sanguínea e de oxigenação celular nos membros inferiores.",
      "Impede que a gravidade terrestre exerça qualquer força peso sobre o corpo em repouso."
    ],
    "correctIndex": 1,
    "explanation": "Ao dissipar parte da energia mecânica em calor (amortecimento), os tecidos viscoelásticos evitam picos violentos de tensão sobre as articulações.",
    "distractorAnalysis": [
      "Está incorreta: Tornar os ossos indeformáveis impediria o amortecimento elástico e aumentaria o risco de fratura por impacto.",
      "Está incorreta: A viscoelasticidade mecânica não elimina os processos metabólicos nem a circulação de sangue.",
      "Está incorreta: Nenhum tecido elástico biológico tem a capacidade de anular a gravidade terrestre."
    ],
    "nursingApplication": "Explica por que calçado com amortecimento elástico ajuda a prevenir lesões por impacto na marcha e corrida."
  },
  {
    "id": 2494,
    "topicId": 2,
    "question": "[Variação 5] O que é o fenómeno de Fluência (Creep) em materiais viscoelásticos?",
    "options": [
      "A diminuição instantânea da temperatura do corpo para o zero absoluto sob tensão mecânica.",
      "A fragmentação explosiva do material assim que é aplicada uma força mínima de compressão.",
      "O aumento progressivo da deformação ao longo do tempo quando o material é submetido a uma tensão (força) constante.",
      "O retorno imediato e perfeitamente elástico à forma original sem qualquer atraso temporal."
    ],
    "correctIndex": 2,
    "explanation": "A fluência (creep) caracteriza-se pela continuação lenta da deformação com o passar do tempo enquanto a carga externa permanece constante.",
    "distractorAnalysis": [
      "Está incorreta: Ensaios mecânicos não provocam arrefecimento para o zero absoluto.",
      "Está incorreta: Fragmentação explosiva imediata sob força mínima seria uma falha catastrófica anómala, não fluência lenta.",
      "Está incorreta: Retorno instantâneo sem atraso caracteriza um sólido elástico ideal de Hooke sem efeitos viscosos."
    ],
    "nursingApplication": "Explica por que uma pessoa perde ligeiramente altura ao longo do dia devido à compressão prolongada dos discos intervertebrais."
  },
  {
    "id": 2495,
    "topicId": 2,
    "question": "[Variação 5] O que é o fenómeno de Relaxamento de Tensões em materiais viscoelásticos?",
    "options": [
      "O aumento infinito da força elástica gerada quando a barra é mantida absolutamente fixa.",
      "A transformação de energia potencial gravitacional em energia nuclear espontânea.",
      "A anulação de todas as forças de atrito na superfície externa do corpo biológico.",
      "A diminuição progressiva da tensão interna necessária para manter o material sob uma deformação constante ao longo do tempo."
    ],
    "correctIndex": 3,
    "explanation": "No relaxamento de tensões, mantendo-se a deformação constante, as moléculas reorganizam-se e a tensão mecânica interna diminui com o tempo.",
    "distractorAnalysis": [
      "Está incorreta: A tensão interna diminui com o tempo sob deformação fixa, não aumenta infinitamente.",
      "Está incorreta: Tensões elásticas não se convertem espontaneamente em reações nucleares.",
      "Está incorreta: O atrito externo não é anulado pelo relaxamento interno do material."
    ],
    "nursingApplication": "Relevante quando ligaduras elásticas ou talas mantidas com extensão fixa perdem tensão ao longo das horas."
  },
  {
    "id": 2496,
    "topicId": 2,
    "question": "[Variação 5] Porque é que o osso cortical é classificado como um material Anisotrópico na biomecânica?",
    "options": [
      "Porque as suas propriedades mecânicas (resistência e rigidez) variam consoante a direção em que a força é aplicada.",
      "Porque apresenta exatamente a mesma rigidez e resistência mecânica em todas as direções do espaço tridimensional.",
      "Porque é constituído exclusivamente por um líquido viscoso newtoniano sem qualquer mineral sólido.",
      "Porque se decompõe espontaneamente em gás carbónico quando sujeito a qualquer força mecânica."
    ],
    "correctIndex": 0,
    "explanation": "O osso é mais resistente à compressão longitudinal do que à tração ou cisalhamento transversal, sendo, portanto, mecanicamente anisotrópico.",
    "distractorAnalysis": [
      "Está incorreta: Apresentar a mesma resistência em todas as direções define um material isotrópico, não anisotrópico.",
      "Está incorreta: O osso possui uma matriz sólida mineralizada rica em hidroxiapatite e colagénio, não sendo puramente líquido.",
      "Está incorreta: O osso não se decompõe em gás carbónico sob esforços mecânicos normais."
    ],
    "nursingApplication": "Permite entender por que o fémur suporta grandes cargas axiais na vertical, mas fratura mais facilmente sob torção ou flexão lateral."
  },
  {
    "id": 2497,
    "topicId": 2,
    "question": "[Variação 5] Como varia a rigidez do osso em função da velocidade com que a carga mecânica é aplicada (comportamento viscoelástico)?",
    "options": [
      "O osso perde toda a sua rigidez tornando-se puramente líquido quando a carga é aplicada com alta velocidade.",
      "O osso comporta-se de forma mais rígida e suporta maiores tensões quando a carga é aplicada rapidamente do que lentamente.",
      "A velocidade de aplicação da carga não tem qualquer influência nas propriedades mecânicas de um material viscoelástico.",
      "O osso só suporta cargas quando a velocidade de impacto é exatamente zero."
    ],
    "correctIndex": 1,
    "explanation": "Devido à viscoelasticidade, materiais biológicos aumentam a rigidez aparente e a tensão de rutura sob taxas de deformação elevadas (impactos rápidos).",
    "distractorAnalysis": [
      "Está incorreta: O osso não se liquefaz sob carregamentos mecânicos de alta velocidade.",
      "Está incorreta: Em materiais viscoelásticos, a resposta mecânica depende criticamente da taxa de deformação (velocidade de carga).",
      "Está incorreta: O osso suporta cargas em repouso e em movimento dinâmico."
    ],
    "nursingApplication": "Explica por que os mecanismos de lesão e fratura óssea diferem entre quedas lentas e impactos traumáticos rápidos."
  },
  {
    "id": 2498,
    "topicId": 2,
    "question": "[Variação 5] Qual dos seguintes constituintes do osso confere predominantemente Flexibilidade e Resistência à Tração?",
    "options": [
      "Os cristais minerais inorgânicos de hidroxiapatite de cálcio.",
      "O ar atmosférico contido nos poros trabeculares microscópicos.",
      "As fibras de colagénio da matriz óssea.",
      "Os eletrões livres que fluem através da corrente galvânica da pele."
    ],
    "correctIndex": 2,
    "explanation": "O colagénio (fração orgânica) confere flexibilidade, elasticidade e resistência à tração, enquanto a hidroxiapatite confere rigidez à compressão.",
    "distractorAnalysis": [
      "Está incorreta: A hidroxiapatite mineral confere dureza e resistência à compressão, não flexibilidade à tração.",
      "Está incorreta: O osso não é preenchido por ar atmosférico, mas por medula e fluido intersticial.",
      "Está incorreta: Correntes galvânicas da pele não são componentes estruturais da matriz óssea."
    ],
    "nursingApplication": "Explica por que a perda de colagénio com o envelhecimento torna os ossos mais frágeis e quebradiços."
  },
  {
    "id": 2499,
    "topicId": 2,
    "question": "[Variação 5] Qual dos seguintes constituintes do osso confere predominantemente Dureza, Rigidez e Resistência à Compressão?",
    "options": [
      "As fibras flexíveis de colagénio que compõem a matriz orgânica do tecido.",
      "A hemoglobina livre que transporta oxigénio no plasma sanguíneo.",
      "As moléculas de água pura que evaporam imediatamente para o exterior.",
      "Os cristais minerais inorgânicos de hidroxiapatite (sais de cálcio e fosfato)."
    ],
    "correctIndex": 3,
    "explanation": "A fase inorgânica mineral (hidroxiapatite) é a principal responsável pela elevada rigidez intrínseca e resistência à compressão do osso.",
    "distractorAnalysis": [
      "Está incorreta: O colagénio orgânico confere flexibilidade elástica e resistência à tração mecânica.",
      "Está incorreta: A hemoglobina está nos eritrócitos circulantes, não na matriz mineral do osso cortical.",
      "Está incorreta: A água intersticial contribui para a viscoelasticidade, mas não confere a rigidez mineral."
    ],
    "nursingApplication": "Fundamental para entender o papel do aporte de cálcio e vitamina D na densidade mineral óssea."
  },
  {
    "id": 2500,
    "topicId": 2,
    "question": "[Variação 5] Em síntese biomecânica (Slide 20 e 34), a estrutura de um osso longo como o fémur é geometricamente otimizada para:",
    "options": [
      "Resistir a esforços combinados de compressão axial, flexão e torção com o mínimo de peso ósseo (estrutura oca cilíndrica).",
      "Ser um corpo perfeitamente maciço e infinito sem canal medular interno.",
      "Comportar-se como um fluido viscoso de Newton em equilíbrio hidrostático no leito.",
      "Evitar qualquer tipo de movimento articular mantendo o esqueleto em rigidez cadavérica."
    ],
    "correctIndex": 0,
    "explanation": "A geometria cilíndrica oca dos ossos longos maximiza o momento de inércia polar e de flexão, conferindo alta resistência com menor massa corporal.",
    "distractorAnalysis": [
      "Está incorreta: Um osso maciço seria excessivamente pesado e metabolicamente ineficiente sem ganho proporcional de resistência na torção.",
      "Está incorreta: O osso não é um fluido nem se rege pelas equações puramente hidrostáticas de Newton.",
      "Está incorreta: O esqueleto é concebido para permitir mobilidade articular equilibrada e absorção dinâmica de forças."
    ],
    "nursingApplication": "Permite compreender por que a locomoção humana é eficiente em termos de consumo energético e resistência mecânica."
  }
];
