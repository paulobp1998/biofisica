/**
 * BANCO DE QUESTÕES CERTIFICADAS - TÓPICO 1
 * Força, Estado de Equilíbrio, Equilíbrio de Forças e Alavancas
 * Alinhado estritamente com os 105 slides do PowerPoint (1BF)
 * Certificado pelos Agentes Alfa (Física), Beta (Biomecânica) e Gama (Terminologia)
 * Total de Questões: 500 (IDs 1001 a 1500)
 */

const TOPIC_1_QUESTIONS = [
  {
    "id": 1001,
    "topicId": 1,
    "question": "Qual é a definição de Mecânica no contexto da Biofísica?",
    "options": [
      "O estudo da composição atómica dos radioisótopos emissores de radiação gama.",
      "O ramo da física que estuda as relações entre os movimentos dos corpos materiais e as forças que lhes estão associadas.",
      "A área que investiga exclusivamente a temperatura corporal e as trocas térmicas celulares.",
      "O ramo que analisa a velocidade de reações enzimáticas em soluções tampão."
    ],
    "correctIndex": 1,
    "explanation": "A mecânica dedica-se ao estudo das forças e das alterações de movimento ou equilíbrio que elas provocam.",
    "distractorAnalysis": [
      "Está incorreta: A radiobiologia e física nuclear estudam os radioisótopos, não a mecânica.",
      "Está incorreta: A termodinâmica estuda as trocas térmicas e temperatura, não a mecânica clássica.",
      "Está incorreta: A cinética enzimática é do domínio da bioquímica, não da mecânica."
    ],
    "nursingApplication": "Permite analisar as forças e movimentos envolvidos no transporte de equipamentos hospitalares."
  },
  {
    "id": 1002,
    "topicId": 1,
    "question": "O que é uma Força na física clássica?",
    "options": [
      "Uma grandeza puramente escalar expressa em quilogramas que quantifica a quantidade de matéria.",
      "A energia potencial estática acumulada no vácuo entre dois átomos em repouso térmico.",
      "Uma interação vetorial mútua entre corpos capaz de alterar o seu estado de movimento ou de produzir deformação mecânica.",
      "A taxa de variação da temperatura de um sólido quando sujeito a radiação ultravioleta."
    ],
    "correctIndex": 2,
    "explanation": "A força é uma ação vetorial entre corpos que pode acelerar, travar ou deformar uma estrutura material.",
    "distractorAnalysis": [
      "Está incorreta: A força é uma grandeza vetorial (módulo, direção e sentido), não sendo uma grandeza escalar.",
      "Está incorreta: A energia potencial é uma forma de energia medida em Joules, não uma força em Newtons.",
      "Está incorreta: A taxa de variação de temperatura é uma grandeza térmica (°C/s), sem relação com forças mecânicas."
    ],
    "nursingApplication": "Compreender a força é a base para quantificar o esforço muscular ao empurrar um equipamento."
  },
  {
    "id": 1003,
    "topicId": 1,
    "question": "Qual é a unidade padrão de Força no Sistema Internacional (SI)?",
    "options": [
      "Quilograma (kg), que mede a massa inercial de um corpo.",
      "Joule (J), correspondente à energia mecânica e ao trabalho.",
      "Pascal (Pa), que quantifica a pressão mecânica por unidade de área.",
      "Newton (N), equivalente a 1 kg·m/s²."
    ],
    "correctIndex": 3,
    "explanation": "No SI, a força mede-se em Newtons (N), sendo 1 N a força que imprime a 1 kg a aceleração de 1 m/s².",
    "distractorAnalysis": [
      "Está incorreta: O quilograma (kg) é a unidade fundamental de massa inercial, não de força.",
      "Está incorreta: O Joule (J) é a unidade de energia e trabalho mecânico (N·m), não de força pura.",
      "Está incorreta: O Pascal (Pa) é a unidade de pressão (N/m²), representando força distribuída por área."
    ],
    "nursingApplication": "Distingue a força aplicada em Newtons da massa transportada em quilogramas."
  },
  {
    "id": 1004,
    "topicId": 1,
    "question": "Qual o instrumento físico utilizado para medir a intensidade de uma força?",
    "options": [
      "Dinamómetro.",
      "Barómetro.",
      "Termómetro.",
      "Cronómetro."
    ],
    "correctIndex": 0,
    "explanation": "O dinamómetro mede forças através da deformação elástica calibrada de uma mola interna (Lei de Hooke).",
    "distractorAnalysis": [
      "Está incorreta: O barómetro mede a pressão atmosférica em fluidos, não forças mecânicas isoladas.",
      "Está incorreta: O termómetro é o instrumento de medição da temperatura absoluta ou relativa.",
      "Está incorreta: O cronómetro mede intervalos de tempo decorridos."
    ],
    "nursingApplication": "Dinamómetros são usados em ergonomia hospitalar para medir a força de tração ao puxar camas."
  },
  {
    "id": 1005,
    "topicId": 1,
    "question": "Quais são os quatro elementos que definem completamente uma grandeza vetorial como a Força?",
    "options": [
      "Apenas o seu valor numérico e a unidade física associada.",
      "Módulo (intensidade), direção, sentido e ponto de aplicação.",
      "Massa, densidade, volume e estado de agregação da matéria.",
      "Velocidade angular, frequência e período de oscilação."
    ],
    "correctIndex": 1,
    "explanation": "Uma grandeza vetorial exige intensidade numérica, reta suporte (direção), orientação (sentido) e ponto de atuação.",
    "distractorAnalysis": [
      "Está incorreta: Valor numérico e unidade definem grandezas puramente escalares (como massa ou tempo).",
      "Está incorreta: Massa, volume e densidade são propriedades da matéria, não componentes de um vetor.",
      "Está incorreta: Velocidade angular e frequência são grandezas cinemáticas de rotação."
    ],
    "nursingApplication": "A direção e o sentido ao puxar um equipamento determinam a trajetória do movimento resultante."
  },
  {
    "id": 1006,
    "topicId": 1,
    "question": "Considerando g = 9,8 m/s², qual é o Peso de um equipamento que possui uma massa de 25 kg?",
    "options": [
      "25 N.",
      "2.6 N.",
      "245.0 N.",
      "245.0 kg."
    ],
    "correctIndex": 2,
    "explanation": "O peso calcula-se pela relação P = m · g: 25 kg · 9,8 m/s² = 245.0 N.",
    "distractorAnalysis": [
      "Está incorreta: 25 N confunde a massa numérica com a força peso sem multiplicar pela aceleração da gravidade.",
      "Está incorreta: Dividir a massa pela gravidade é uma operação incorreta para obter o peso.",
      "Está incorreta: O valor está certo, mas o peso é força em Newtons (N), não em quilogramas (kg)."
    ],
    "nursingApplication": "Permite calcular o esforço vertical de sustentação suportado pelas rodas de um equipamento."
  },
  {
    "id": 1007,
    "topicId": 1,
    "question": "Uma força perpendicular de 110 N atua sobre uma superfície plana de 0,25 m². Qual é a pressão exercida?",
    "options": [
      "27 Pa (Pascal).",
      "110 Pa (Pascal).",
      "440 N.",
      "440 Pa (Pascal)."
    ],
    "correctIndex": 3,
    "explanation": "A pressão mecânica é a razão p = F / A: 110 N / 0,25 m² = 440 Pa.",
    "distractorAnalysis": [
      "Está incorreta: Multiplicar a força pela área (F · A) não fornece a pressão mecânica.",
      "Está incorreta: 110 Pa ignora a área sobre a qual a força está distribuída.",
      "Está incorreta: A pressão mede-se em Pascal (Pa) ou N/m², e não em Newtons (N)."
    ],
    "nursingApplication": "Demonstra que alargar a área de apoio reduz a pressão exercida sobre o piso hospitalar."
  },
  {
    "id": 1008,
    "topicId": 1,
    "question": "Qual das seguintes grandezas físicas é estritamente ESCALAR?",
    "options": [
      "Massa corporal inercial.",
      "Força peso.",
      "Força de atrito estático.",
      "Momento de uma força (torque)."
    ],
    "correctIndex": 0,
    "explanation": "A massa é puramente escalar: fica completamente definida pelo valor numérico e pela unidade (kg).",
    "distractorAnalysis": [
      "Está incorreta: A força peso é um vetor orientado verticalmente para o centro da Terra.",
      "Está incorreta: A força de atrito é um vetor com direção tangencial à superfície e sentido oposto ao movimento relativo.",
      "Está incorreta: O momento de uma força é uma grandeza vetorial que quantifica a capacidade de rotação."
    ],
    "nursingApplication": "Ao registar a massa de um utente numa balança, afere-se uma grandeza escalar em kg."
  },
  {
    "id": 1009,
    "topicId": 1,
    "question": "Em física vetorial, qual é a distinção rigorosa entre 'Direção' e 'Sentido' de uma força?",
    "options": [
      "A Direção indica a unidade no SI e o Sentido indica se a grandeza é escalar ou vetorial.",
      "A Direção é a reta geométrica de suporte ao longo da qual a força atua, enquanto o Sentido é a orientação do vetor nessa reta.",
      "Direção e Sentido são termos rigorosamente sinónimos na mecânica clássica de Newton.",
      "A Direção mede o módulo em Newtons e o Sentido mede o tempo de aplicação em segundos."
    ],
    "correctIndex": 1,
    "explanation": "A direção é a linha de ação geométrica (ex.: horizontal, vertical); o sentido é a orientação na linha (ex.: para a direita, para cima).",
    "distractorAnalysis": [
      "Está incorreta: A unidade e a natureza escalar/vetorial não definem direção e sentido de um vetor.",
      "Está incorreta: Direção e sentido são conceitos geometricamente distintos e independentes.",
      "Está incorreta: O módulo exprime a intensidade numérica e o tempo mede a duração temporal."
    ],
    "nursingApplication": "Essencial para aplicar forças na direção e sentido corretos ao posicionar equipamentos móveis."
  },
  {
    "id": 1010,
    "topicId": 1,
    "question": "Qual é a diferença fundamental entre a grandeza Pressão e o conceito de Tensão Mecânica num tecido biológico?",
    "options": [
      "A Pressão mede-se em Newtons e a Tensão Mecânica mede-se exclusivamente em Joules por segundo.",
      "A Pressão atua apenas no vácuo absoluto e a Tensão Mecânica atua exclusivamente no interior de gases ideais.",
      "A Pressão é uma grandeza escalar de força perpendicular por área, enquanto a Tensão Mecânica é uma grandeza tensorial interna que inclui tração, compressão e cisalhamento.",
      "Não existe qualquer diferença física, sendo termos idênticos para a aceleração da gravidade."
    ],
    "correctIndex": 2,
    "explanation": "A pressão mede a força compressiva normal por unidade de área; a tensão mecânica interna decompõe-se em componentes normais e tangenciais.",
    "distractorAnalysis": [
      "Está incorreta: Tanto a pressão como a tensão têm unidades de força por área (N/m² ou Pa), não Joules por segundo.",
      "Está incorreta: A pressão atua em fluidos e superfícies reais; a tensão mecânica descreve o estado interno de sólidos e tecidos.",
      "Está incorreta: Nenhum destes conceitos se confunde com a aceleração gravitacional (m/s²)."
    ],
    "nursingApplication": "Fundamenta a avaliação das solicitações mecânicas sofridas pela cartilagem articular e discos vertebrais."
  },
  {
    "id": 1011,
    "topicId": 1,
    "question": "Qual é a definição de Mecânica no contexto da Biofísica?",
    "options": [
      "O estudo da composição atómica dos radioisótopos emissores de radiação gama.",
      "A área que investiga exclusivamente a temperatura corporal e as trocas térmicas celulares.",
      "O ramo que analisa a velocidade de reações enzimáticas em soluções tampão.",
      "O ramo da física que estuda as relações entre os movimentos dos corpos materiais e as forças que lhes estão associadas."
    ],
    "correctIndex": 3,
    "explanation": "A mecânica dedica-se ao estudo das forças e das alterações de movimento ou equilíbrio que elas provocam.",
    "distractorAnalysis": [
      "Está incorreta: A radiobiologia e física nuclear estudam os radioisótopos, não a mecânica.",
      "Está incorreta: A termodinâmica estuda as trocas térmicas e temperatura, não a mecânica clássica.",
      "Está incorreta: A cinética enzimática é do domínio da bioquímica, não da mecânica."
    ],
    "nursingApplication": "Permite analisar as forças e movimentos envolvidos no transporte de equipamentos hospitalares."
  },
  {
    "id": 1012,
    "topicId": 1,
    "question": "O que é uma Força na física clássica?",
    "options": [
      "Uma interação vetorial mútua entre corpos capaz de alterar o seu estado de movimento ou de produzir deformação mecânica.",
      "Uma grandeza puramente escalar expressa em quilogramas que quantifica a quantidade de matéria.",
      "A energia potencial estática acumulada no vácuo entre dois átomos em repouso térmico.",
      "A taxa de variação da temperatura de um sólido quando sujeito a radiação ultravioleta."
    ],
    "correctIndex": 0,
    "explanation": "A força é uma ação vetorial entre corpos que pode acelerar, travar ou deformar uma estrutura material.",
    "distractorAnalysis": [
      "Está incorreta: A força é uma grandeza vetorial (módulo, direção e sentido), não sendo uma grandeza escalar.",
      "Está incorreta: A energia potencial é uma forma de energia medida em Joules, não uma força em Newtons.",
      "Está incorreta: A taxa de variação de temperatura é uma grandeza térmica (°C/s), sem relação com forças mecânicas."
    ],
    "nursingApplication": "Compreender a força é a base para quantificar o esforço muscular ao empurrar um equipamento."
  },
  {
    "id": 1013,
    "topicId": 1,
    "question": "Qual é a unidade padrão de Força no Sistema Internacional (SI)?",
    "options": [
      "Quilograma (kg), que mede a massa inercial de um corpo.",
      "Newton (N), equivalente a 1 kg·m/s².",
      "Joule (J), correspondente à energia mecânica e ao trabalho.",
      "Pascal (Pa), que quantifica a pressão mecânica por unidade de área."
    ],
    "correctIndex": 1,
    "explanation": "No SI, a força mede-se em Newtons (N), sendo 1 N a força que imprime a 1 kg a aceleração de 1 m/s².",
    "distractorAnalysis": [
      "Está incorreta: O quilograma (kg) é a unidade fundamental de massa inercial, não de força.",
      "Está incorreta: O Joule (J) é a unidade de energia e trabalho mecânico (N·m), não de força pura.",
      "Está incorreta: O Pascal (Pa) é a unidade de pressão (N/m²), representando força distribuída por área."
    ],
    "nursingApplication": "Distingue a força aplicada em Newtons da massa transportada em quilogramas."
  },
  {
    "id": 1014,
    "topicId": 1,
    "question": "Qual o instrumento físico utilizado para medir a intensidade de uma força?",
    "options": [
      "Barómetro.",
      "Termómetro.",
      "Dinamómetro.",
      "Cronómetro."
    ],
    "correctIndex": 2,
    "explanation": "O dinamómetro mede forças através da deformação elástica calibrada de uma mola interna (Lei de Hooke).",
    "distractorAnalysis": [
      "Está incorreta: O barómetro mede a pressão atmosférica em fluidos, não forças mecânicas isoladas.",
      "Está incorreta: O termómetro é o instrumento de medição da temperatura absoluta ou relativa.",
      "Está incorreta: O cronómetro mede intervalos de tempo decorridos."
    ],
    "nursingApplication": "Dinamómetros são usados em ergonomia hospitalar para medir a força de tração ao puxar camas."
  },
  {
    "id": 1015,
    "topicId": 1,
    "question": "Quais são os quatro elementos que definem completamente uma grandeza vetorial como a Força?",
    "options": [
      "Apenas o seu valor numérico e a unidade física associada.",
      "Massa, densidade, volume e estado de agregação da matéria.",
      "Velocidade angular, frequência e período de oscilação.",
      "Módulo (intensidade), direção, sentido e ponto de aplicação."
    ],
    "correctIndex": 3,
    "explanation": "Uma grandeza vetorial exige intensidade numérica, reta suporte (direção), orientação (sentido) e ponto de atuação.",
    "distractorAnalysis": [
      "Está incorreta: Valor numérico e unidade definem grandezas puramente escalares (como massa ou tempo).",
      "Está incorreta: Massa, volume e densidade são propriedades da matéria, não componentes de um vetor.",
      "Está incorreta: Velocidade angular e frequência são grandezas cinemáticas de rotação."
    ],
    "nursingApplication": "A direção e o sentido ao puxar um equipamento determinam a trajetória do movimento resultante."
  },
  {
    "id": 1016,
    "topicId": 1,
    "question": "Considerando g = 9,8 m/s², qual é o Peso de um equipamento que possui uma massa de 45 kg?",
    "options": [
      "441.0 N.",
      "45 N.",
      "4.6 N.",
      "441.0 kg."
    ],
    "correctIndex": 0,
    "explanation": "O peso calcula-se pela relação P = m · g: 45 kg · 9,8 m/s² = 441.0 N.",
    "distractorAnalysis": [
      "Está incorreta: 45 N confunde a massa numérica com a força peso sem multiplicar pela aceleração da gravidade.",
      "Está incorreta: Dividir a massa pela gravidade é uma operação incorreta para obter o peso.",
      "Está incorreta: O valor está certo, mas o peso é força em Newtons (N), não em quilogramas (kg)."
    ],
    "nursingApplication": "Permite calcular o esforço vertical de sustentação suportado pelas rodas de um equipamento."
  },
  {
    "id": 1017,
    "topicId": 1,
    "question": "Uma força perpendicular de 110 N atua sobre uma superfície plana de 0,25 m². Qual é a pressão exercida?",
    "options": [
      "27 Pa (Pascal).",
      "440 Pa (Pascal).",
      "110 Pa (Pascal).",
      "440 N."
    ],
    "correctIndex": 1,
    "explanation": "A pressão mecânica é a razão p = F / A: 110 N / 0,25 m² = 440 Pa.",
    "distractorAnalysis": [
      "Está incorreta: Multiplicar a força pela área (F · A) não fornece a pressão mecânica.",
      "Está incorreta: 110 Pa ignora a área sobre a qual a força está distribuída.",
      "Está incorreta: A pressão mede-se em Pascal (Pa) ou N/m², e não em Newtons (N)."
    ],
    "nursingApplication": "Demonstra que alargar a área de apoio reduz a pressão exercida sobre o piso hospitalar."
  },
  {
    "id": 1018,
    "topicId": 1,
    "question": "Qual das seguintes grandezas físicas é estritamente ESCALAR?",
    "options": [
      "Força peso.",
      "Força de atrito estático.",
      "Massa corporal inercial.",
      "Momento de uma força (torque)."
    ],
    "correctIndex": 2,
    "explanation": "A massa é puramente escalar: fica completamente definida pelo valor numérico e pela unidade (kg).",
    "distractorAnalysis": [
      "Está incorreta: A força peso é um vetor orientado verticalmente para o centro da Terra.",
      "Está incorreta: A força de atrito é um vetor com direção tangencial à superfície e sentido oposto ao movimento relativo.",
      "Está incorreta: O momento de uma força é uma grandeza vetorial que quantifica a capacidade de rotação."
    ],
    "nursingApplication": "Ao registar a massa de um utente numa balança, afere-se uma grandeza escalar em kg."
  },
  {
    "id": 1019,
    "topicId": 1,
    "question": "Em física vetorial, qual é a distinção rigorosa entre 'Direção' e 'Sentido' de uma força?",
    "options": [
      "A Direção indica a unidade no SI e o Sentido indica se a grandeza é escalar ou vetorial.",
      "Direção e Sentido são termos rigorosamente sinónimos na mecânica clássica de Newton.",
      "A Direção mede o módulo em Newtons e o Sentido mede o tempo de aplicação em segundos.",
      "A Direção é a reta geométrica de suporte ao longo da qual a força atua, enquanto o Sentido é a orientação do vetor nessa reta."
    ],
    "correctIndex": 3,
    "explanation": "A direção é a linha de ação geométrica (ex.: horizontal, vertical); o sentido é a orientação na linha (ex.: para a direita, para cima).",
    "distractorAnalysis": [
      "Está incorreta: A unidade e a natureza escalar/vetorial não definem direção e sentido de um vetor.",
      "Está incorreta: Direção e sentido são conceitos geometricamente distintos e independentes.",
      "Está incorreta: O módulo exprime a intensidade numérica e o tempo mede a duração temporal."
    ],
    "nursingApplication": "Essencial para aplicar forças na direção e sentido corretos ao posicionar equipamentos móveis."
  },
  {
    "id": 1020,
    "topicId": 1,
    "question": "Qual é a diferença fundamental entre a grandeza Pressão e o conceito de Tensão Mecânica num tecido biológico?",
    "options": [
      "A Pressão é uma grandeza escalar de força perpendicular por área, enquanto a Tensão Mecânica é uma grandeza tensorial interna que inclui tração, compressão e cisalhamento.",
      "A Pressão mede-se em Newtons e a Tensão Mecânica mede-se exclusivamente em Joules por segundo.",
      "A Pressão atua apenas no vácuo absoluto e a Tensão Mecânica atua exclusivamente no interior de gases ideais.",
      "Não existe qualquer diferença física, sendo termos idênticos para a aceleração da gravidade."
    ],
    "correctIndex": 0,
    "explanation": "A pressão mede a força compressiva normal por unidade de área; a tensão mecânica interna decompõe-se em componentes normais e tangenciais.",
    "distractorAnalysis": [
      "Está incorreta: Tanto a pressão como a tensão têm unidades de força por área (N/m² ou Pa), não Joules por segundo.",
      "Está incorreta: A pressão atua em fluidos e superfícies reais; a tensão mecânica descreve o estado interno de sólidos e tecidos.",
      "Está incorreta: Nenhum destes conceitos se confunde com a aceleração gravitacional (m/s²)."
    ],
    "nursingApplication": "Fundamenta a avaliação das solicitações mecânicas sofridas pela cartilagem articular e discos vertebrais."
  },
  {
    "id": 1021,
    "topicId": 1,
    "question": "Qual é a definição de Mecânica no contexto da Biofísica?",
    "options": [
      "O estudo da composição atómica dos radioisótopos emissores de radiação gama.",
      "O ramo da física que estuda as relações entre os movimentos dos corpos materiais e as forças que lhes estão associadas.",
      "A área que investiga exclusivamente a temperatura corporal e as trocas térmicas celulares.",
      "O ramo que analisa a velocidade de reações enzimáticas em soluções tampão."
    ],
    "correctIndex": 1,
    "explanation": "A mecânica dedica-se ao estudo das forças e das alterações de movimento ou equilíbrio que elas provocam.",
    "distractorAnalysis": [
      "Está incorreta: A radiobiologia e física nuclear estudam os radioisótopos, não a mecânica.",
      "Está incorreta: A termodinâmica estuda as trocas térmicas e temperatura, não a mecânica clássica.",
      "Está incorreta: A cinética enzimática é do domínio da bioquímica, não da mecânica."
    ],
    "nursingApplication": "Permite analisar as forças e movimentos envolvidos no transporte de equipamentos hospitalares."
  },
  {
    "id": 1022,
    "topicId": 1,
    "question": "O que é uma Força na física clássica?",
    "options": [
      "Uma grandeza puramente escalar expressa em quilogramas que quantifica a quantidade de matéria.",
      "A energia potencial estática acumulada no vácuo entre dois átomos em repouso térmico.",
      "Uma interação vetorial mútua entre corpos capaz de alterar o seu estado de movimento ou de produzir deformação mecânica.",
      "A taxa de variação da temperatura de um sólido quando sujeito a radiação ultravioleta."
    ],
    "correctIndex": 2,
    "explanation": "A força é uma ação vetorial entre corpos que pode acelerar, travar ou deformar uma estrutura material.",
    "distractorAnalysis": [
      "Está incorreta: A força é uma grandeza vetorial (módulo, direção e sentido), não sendo uma grandeza escalar.",
      "Está incorreta: A energia potencial é uma forma de energia medida em Joules, não uma força em Newtons.",
      "Está incorreta: A taxa de variação de temperatura é uma grandeza térmica (°C/s), sem relação com forças mecânicas."
    ],
    "nursingApplication": "Compreender a força é a base para quantificar o esforço muscular ao empurrar um equipamento."
  },
  {
    "id": 1023,
    "topicId": 1,
    "question": "Qual é a unidade padrão de Força no Sistema Internacional (SI)?",
    "options": [
      "Quilograma (kg), que mede a massa inercial de um corpo.",
      "Joule (J), correspondente à energia mecânica e ao trabalho.",
      "Pascal (Pa), que quantifica a pressão mecânica por unidade de área.",
      "Newton (N), equivalente a 1 kg·m/s²."
    ],
    "correctIndex": 3,
    "explanation": "No SI, a força mede-se em Newtons (N), sendo 1 N a força que imprime a 1 kg a aceleração de 1 m/s².",
    "distractorAnalysis": [
      "Está incorreta: O quilograma (kg) é a unidade fundamental de massa inercial, não de força.",
      "Está incorreta: O Joule (J) é a unidade de energia e trabalho mecânico (N·m), não de força pura.",
      "Está incorreta: O Pascal (Pa) é a unidade de pressão (N/m²), representando força distribuída por área."
    ],
    "nursingApplication": "Distingue a força aplicada em Newtons da massa transportada em quilogramas."
  },
  {
    "id": 1024,
    "topicId": 1,
    "question": "Qual o instrumento físico utilizado para medir a intensidade de uma força?",
    "options": [
      "Dinamómetro.",
      "Barómetro.",
      "Termómetro.",
      "Cronómetro."
    ],
    "correctIndex": 0,
    "explanation": "O dinamómetro mede forças através da deformação elástica calibrada de uma mola interna (Lei de Hooke).",
    "distractorAnalysis": [
      "Está incorreta: O barómetro mede a pressão atmosférica em fluidos, não forças mecânicas isoladas.",
      "Está incorreta: O termómetro é o instrumento de medição da temperatura absoluta ou relativa.",
      "Está incorreta: O cronómetro mede intervalos de tempo decorridos."
    ],
    "nursingApplication": "Dinamómetros são usados em ergonomia hospitalar para medir a força de tração ao puxar camas."
  },
  {
    "id": 1025,
    "topicId": 1,
    "question": "Quais são os quatro elementos que definem completamente uma grandeza vetorial como a Força?",
    "options": [
      "Apenas o seu valor numérico e a unidade física associada.",
      "Módulo (intensidade), direção, sentido e ponto de aplicação.",
      "Massa, densidade, volume e estado de agregação da matéria.",
      "Velocidade angular, frequência e período de oscilação."
    ],
    "correctIndex": 1,
    "explanation": "Uma grandeza vetorial exige intensidade numérica, reta suporte (direção), orientação (sentido) e ponto de atuação.",
    "distractorAnalysis": [
      "Está incorreta: Valor numérico e unidade definem grandezas puramente escalares (como massa ou tempo).",
      "Está incorreta: Massa, volume e densidade são propriedades da matéria, não componentes de um vetor.",
      "Está incorreta: Velocidade angular e frequência são grandezas cinemáticas de rotação."
    ],
    "nursingApplication": "A direção e o sentido ao puxar um equipamento determinam a trajetória do movimento resultante."
  },
  {
    "id": 1026,
    "topicId": 1,
    "question": "Considerando g = 9,8 m/s², qual é o Peso de um equipamento que possui uma massa de 15 kg?",
    "options": [
      "15 N.",
      "1.5 N.",
      "147.0 N.",
      "147.0 kg."
    ],
    "correctIndex": 2,
    "explanation": "O peso calcula-se pela relação P = m · g: 15 kg · 9,8 m/s² = 147.0 N.",
    "distractorAnalysis": [
      "Está incorreta: 15 N confunde a massa numérica com a força peso sem multiplicar pela aceleração da gravidade.",
      "Está incorreta: Dividir a massa pela gravidade é uma operação incorreta para obter o peso.",
      "Está incorreta: O valor está certo, mas o peso é força em Newtons (N), não em quilogramas (kg)."
    ],
    "nursingApplication": "Permite calcular o esforço vertical de sustentação suportado pelas rodas de um equipamento."
  },
  {
    "id": 1027,
    "topicId": 1,
    "question": "Uma força perpendicular de 110 N atua sobre uma superfície plana de 0,25 m². Qual é a pressão exercida?",
    "options": [
      "27 Pa (Pascal).",
      "110 Pa (Pascal).",
      "440 N.",
      "440 Pa (Pascal)."
    ],
    "correctIndex": 3,
    "explanation": "A pressão mecânica é a razão p = F / A: 110 N / 0,25 m² = 440 Pa.",
    "distractorAnalysis": [
      "Está incorreta: Multiplicar a força pela área (F · A) não fornece a pressão mecânica.",
      "Está incorreta: 110 Pa ignora a área sobre a qual a força está distribuída.",
      "Está incorreta: A pressão mede-se em Pascal (Pa) ou N/m², e não em Newtons (N)."
    ],
    "nursingApplication": "Demonstra que alargar a área de apoio reduz a pressão exercida sobre o piso hospitalar."
  },
  {
    "id": 1028,
    "topicId": 1,
    "question": "Qual das seguintes grandezas físicas é estritamente ESCALAR?",
    "options": [
      "Massa corporal inercial.",
      "Força peso.",
      "Força de atrito estático.",
      "Momento de uma força (torque)."
    ],
    "correctIndex": 0,
    "explanation": "A massa é puramente escalar: fica completamente definida pelo valor numérico e pela unidade (kg).",
    "distractorAnalysis": [
      "Está incorreta: A força peso é um vetor orientado verticalmente para o centro da Terra.",
      "Está incorreta: A força de atrito é um vetor com direção tangencial à superfície e sentido oposto ao movimento relativo.",
      "Está incorreta: O momento de uma força é uma grandeza vetorial que quantifica a capacidade de rotação."
    ],
    "nursingApplication": "Ao registar a massa de um utente numa balança, afere-se uma grandeza escalar em kg."
  },
  {
    "id": 1029,
    "topicId": 1,
    "question": "Em física vetorial, qual é a distinção rigorosa entre 'Direção' e 'Sentido' de uma força?",
    "options": [
      "A Direção indica a unidade no SI e o Sentido indica se a grandeza é escalar ou vetorial.",
      "A Direção é a reta geométrica de suporte ao longo da qual a força atua, enquanto o Sentido é a orientação do vetor nessa reta.",
      "Direção e Sentido são termos rigorosamente sinónimos na mecânica clássica de Newton.",
      "A Direção mede o módulo em Newtons e o Sentido mede o tempo de aplicação em segundos."
    ],
    "correctIndex": 1,
    "explanation": "A direção é a linha de ação geométrica (ex.: horizontal, vertical); o sentido é a orientação na linha (ex.: para a direita, para cima).",
    "distractorAnalysis": [
      "Está incorreta: A unidade e a natureza escalar/vetorial não definem direção e sentido de um vetor.",
      "Está incorreta: Direção e sentido são conceitos geometricamente distintos e independentes.",
      "Está incorreta: O módulo exprime a intensidade numérica e o tempo mede a duração temporal."
    ],
    "nursingApplication": "Essencial para aplicar forças na direção e sentido corretos ao posicionar equipamentos móveis."
  },
  {
    "id": 1030,
    "topicId": 1,
    "question": "Qual é a diferença fundamental entre a grandeza Pressão e o conceito de Tensão Mecânica num tecido biológico?",
    "options": [
      "A Pressão mede-se em Newtons e a Tensão Mecânica mede-se exclusivamente em Joules por segundo.",
      "A Pressão atua apenas no vácuo absoluto e a Tensão Mecânica atua exclusivamente no interior de gases ideais.",
      "A Pressão é uma grandeza escalar de força perpendicular por área, enquanto a Tensão Mecânica é uma grandeza tensorial interna que inclui tração, compressão e cisalhamento.",
      "Não existe qualquer diferença física, sendo termos idênticos para a aceleração da gravidade."
    ],
    "correctIndex": 2,
    "explanation": "A pressão mede a força compressiva normal por unidade de área; a tensão mecânica interna decompõe-se em componentes normais e tangenciais.",
    "distractorAnalysis": [
      "Está incorreta: Tanto a pressão como a tensão têm unidades de força por área (N/m² ou Pa), não Joules por segundo.",
      "Está incorreta: A pressão atua em fluidos e superfícies reais; a tensão mecânica descreve o estado interno de sólidos e tecidos.",
      "Está incorreta: Nenhum destes conceitos se confunde com a aceleração gravitacional (m/s²)."
    ],
    "nursingApplication": "Fundamenta a avaliação das solicitações mecânicas sofridas pela cartilagem articular e discos vertebrais."
  },
  {
    "id": 1031,
    "topicId": 1,
    "question": "Qual é a definição de Mecânica no contexto da Biofísica?",
    "options": [
      "O estudo da composição atómica dos radioisótopos emissores de radiação gama.",
      "A área que investiga exclusivamente a temperatura corporal e as trocas térmicas celulares.",
      "O ramo que analisa a velocidade de reações enzimáticas em soluções tampão.",
      "O ramo da física que estuda as relações entre os movimentos dos corpos materiais e as forças que lhes estão associadas."
    ],
    "correctIndex": 3,
    "explanation": "A mecânica dedica-se ao estudo das forças e das alterações de movimento ou equilíbrio que elas provocam.",
    "distractorAnalysis": [
      "Está incorreta: A radiobiologia e física nuclear estudam os radioisótopos, não a mecânica.",
      "Está incorreta: A termodinâmica estuda as trocas térmicas e temperatura, não a mecânica clássica.",
      "Está incorreta: A cinética enzimática é do domínio da bioquímica, não da mecânica."
    ],
    "nursingApplication": "Permite analisar as forças e movimentos envolvidos no transporte de equipamentos hospitalares."
  },
  {
    "id": 1032,
    "topicId": 1,
    "question": "O que é uma Força na física clássica?",
    "options": [
      "Uma interação vetorial mútua entre corpos capaz de alterar o seu estado de movimento ou de produzir deformação mecânica.",
      "Uma grandeza puramente escalar expressa em quilogramas que quantifica a quantidade de matéria.",
      "A energia potencial estática acumulada no vácuo entre dois átomos em repouso térmico.",
      "A taxa de variação da temperatura de um sólido quando sujeito a radiação ultravioleta."
    ],
    "correctIndex": 0,
    "explanation": "A força é uma ação vetorial entre corpos que pode acelerar, travar ou deformar uma estrutura material.",
    "distractorAnalysis": [
      "Está incorreta: A força é uma grandeza vetorial (módulo, direção e sentido), não sendo uma grandeza escalar.",
      "Está incorreta: A energia potencial é uma forma de energia medida em Joules, não uma força em Newtons.",
      "Está incorreta: A taxa de variação de temperatura é uma grandeza térmica (°C/s), sem relação com forças mecânicas."
    ],
    "nursingApplication": "Compreender a força é a base para quantificar o esforço muscular ao empurrar um equipamento."
  },
  {
    "id": 1033,
    "topicId": 1,
    "question": "Qual é a unidade padrão de Força no Sistema Internacional (SI)?",
    "options": [
      "Quilograma (kg), que mede a massa inercial de um corpo.",
      "Newton (N), equivalente a 1 kg·m/s².",
      "Joule (J), correspondente à energia mecânica e ao trabalho.",
      "Pascal (Pa), que quantifica a pressão mecânica por unidade de área."
    ],
    "correctIndex": 1,
    "explanation": "No SI, a força mede-se em Newtons (N), sendo 1 N a força que imprime a 1 kg a aceleração de 1 m/s².",
    "distractorAnalysis": [
      "Está incorreta: O quilograma (kg) é a unidade fundamental de massa inercial, não de força.",
      "Está incorreta: O Joule (J) é a unidade de energia e trabalho mecânico (N·m), não de força pura.",
      "Está incorreta: O Pascal (Pa) é a unidade de pressão (N/m²), representando força distribuída por área."
    ],
    "nursingApplication": "Distingue a força aplicada em Newtons da massa transportada em quilogramas."
  },
  {
    "id": 1034,
    "topicId": 1,
    "question": "Qual o instrumento físico utilizado para medir a intensidade de uma força?",
    "options": [
      "Barómetro.",
      "Termómetro.",
      "Dinamómetro.",
      "Cronómetro."
    ],
    "correctIndex": 2,
    "explanation": "O dinamómetro mede forças através da deformação elástica calibrada de uma mola interna (Lei de Hooke).",
    "distractorAnalysis": [
      "Está incorreta: O barómetro mede a pressão atmosférica em fluidos, não forças mecânicas isoladas.",
      "Está incorreta: O termómetro é o instrumento de medição da temperatura absoluta ou relativa.",
      "Está incorreta: O cronómetro mede intervalos de tempo decorridos."
    ],
    "nursingApplication": "Dinamómetros são usados em ergonomia hospitalar para medir a força de tração ao puxar camas."
  },
  {
    "id": 1035,
    "topicId": 1,
    "question": "Quais são os quatro elementos que definem completamente uma grandeza vetorial como a Força?",
    "options": [
      "Apenas o seu valor numérico e a unidade física associada.",
      "Massa, densidade, volume e estado de agregação da matéria.",
      "Velocidade angular, frequência e período de oscilação.",
      "Módulo (intensidade), direção, sentido e ponto de aplicação."
    ],
    "correctIndex": 3,
    "explanation": "Uma grandeza vetorial exige intensidade numérica, reta suporte (direção), orientação (sentido) e ponto de atuação.",
    "distractorAnalysis": [
      "Está incorreta: Valor numérico e unidade definem grandezas puramente escalares (como massa ou tempo).",
      "Está incorreta: Massa, volume e densidade são propriedades da matéria, não componentes de um vetor.",
      "Está incorreta: Velocidade angular e frequência são grandezas cinemáticas de rotação."
    ],
    "nursingApplication": "A direção e o sentido ao puxar um equipamento determinam a trajetória do movimento resultante."
  },
  {
    "id": 1036,
    "topicId": 1,
    "question": "Considerando g = 9,8 m/s², qual é o Peso de um equipamento que possui uma massa de 35 kg?",
    "options": [
      "343.0 N.",
      "35 N.",
      "3.6 N.",
      "343.0 kg."
    ],
    "correctIndex": 0,
    "explanation": "O peso calcula-se pela relação P = m · g: 35 kg · 9,8 m/s² = 343.0 N.",
    "distractorAnalysis": [
      "Está incorreta: 35 N confunde a massa numérica com a força peso sem multiplicar pela aceleração da gravidade.",
      "Está incorreta: Dividir a massa pela gravidade é uma operação incorreta para obter o peso.",
      "Está incorreta: O valor está certo, mas o peso é força em Newtons (N), não em quilogramas (kg)."
    ],
    "nursingApplication": "Permite calcular o esforço vertical de sustentação suportado pelas rodas de um equipamento."
  },
  {
    "id": 1037,
    "topicId": 1,
    "question": "Uma força perpendicular de 110 N atua sobre uma superfície plana de 0,25 m². Qual é a pressão exercida?",
    "options": [
      "27 Pa (Pascal).",
      "440 Pa (Pascal).",
      "110 Pa (Pascal).",
      "440 N."
    ],
    "correctIndex": 1,
    "explanation": "A pressão mecânica é a razão p = F / A: 110 N / 0,25 m² = 440 Pa.",
    "distractorAnalysis": [
      "Está incorreta: Multiplicar a força pela área (F · A) não fornece a pressão mecânica.",
      "Está incorreta: 110 Pa ignora a área sobre a qual a força está distribuída.",
      "Está incorreta: A pressão mede-se em Pascal (Pa) ou N/m², e não em Newtons (N)."
    ],
    "nursingApplication": "Demonstra que alargar a área de apoio reduz a pressão exercida sobre o piso hospitalar."
  },
  {
    "id": 1038,
    "topicId": 1,
    "question": "Qual das seguintes grandezas físicas é estritamente ESCALAR?",
    "options": [
      "Força peso.",
      "Força de atrito estático.",
      "Massa corporal inercial.",
      "Momento de uma força (torque)."
    ],
    "correctIndex": 2,
    "explanation": "A massa é puramente escalar: fica completamente definida pelo valor numérico e pela unidade (kg).",
    "distractorAnalysis": [
      "Está incorreta: A força peso é um vetor orientado verticalmente para o centro da Terra.",
      "Está incorreta: A força de atrito é um vetor com direção tangencial à superfície e sentido oposto ao movimento relativo.",
      "Está incorreta: O momento de uma força é uma grandeza vetorial que quantifica a capacidade de rotação."
    ],
    "nursingApplication": "Ao registar a massa de um utente numa balança, afere-se uma grandeza escalar em kg."
  },
  {
    "id": 1039,
    "topicId": 1,
    "question": "Em física vetorial, qual é a distinção rigorosa entre 'Direção' e 'Sentido' de uma força?",
    "options": [
      "A Direção indica a unidade no SI e o Sentido indica se a grandeza é escalar ou vetorial.",
      "Direção e Sentido são termos rigorosamente sinónimos na mecânica clássica de Newton.",
      "A Direção mede o módulo em Newtons e o Sentido mede o tempo de aplicação em segundos.",
      "A Direção é a reta geométrica de suporte ao longo da qual a força atua, enquanto o Sentido é a orientação do vetor nessa reta."
    ],
    "correctIndex": 3,
    "explanation": "A direção é a linha de ação geométrica (ex.: horizontal, vertical); o sentido é a orientação na linha (ex.: para a direita, para cima).",
    "distractorAnalysis": [
      "Está incorreta: A unidade e a natureza escalar/vetorial não definem direção e sentido de um vetor.",
      "Está incorreta: Direção e sentido são conceitos geometricamente distintos e independentes.",
      "Está incorreta: O módulo exprime a intensidade numérica e o tempo mede a duração temporal."
    ],
    "nursingApplication": "Essencial para aplicar forças na direção e sentido corretos ao posicionar equipamentos móveis."
  },
  {
    "id": 1040,
    "topicId": 1,
    "question": "Qual é a diferença fundamental entre a grandeza Pressão e o conceito de Tensão Mecânica num tecido biológico?",
    "options": [
      "A Pressão é uma grandeza escalar de força perpendicular por área, enquanto a Tensão Mecânica é uma grandeza tensorial interna que inclui tração, compressão e cisalhamento.",
      "A Pressão mede-se em Newtons e a Tensão Mecânica mede-se exclusivamente em Joules por segundo.",
      "A Pressão atua apenas no vácuo absoluto e a Tensão Mecânica atua exclusivamente no interior de gases ideais.",
      "Não existe qualquer diferença física, sendo termos idênticos para a aceleração da gravidade."
    ],
    "correctIndex": 0,
    "explanation": "A pressão mede a força compressiva normal por unidade de área; a tensão mecânica interna decompõe-se em componentes normais e tangenciais.",
    "distractorAnalysis": [
      "Está incorreta: Tanto a pressão como a tensão têm unidades de força por área (N/m² ou Pa), não Joules por segundo.",
      "Está incorreta: A pressão atua em fluidos e superfícies reais; a tensão mecânica descreve o estado interno de sólidos e tecidos.",
      "Está incorreta: Nenhum destes conceitos se confunde com a aceleração gravitacional (m/s²)."
    ],
    "nursingApplication": "Fundamenta a avaliação das solicitações mecânicas sofridas pela cartilagem articular e discos vertebrais."
  },
  {
    "id": 1041,
    "topicId": 1,
    "question": "Qual é a definição de Mecânica no contexto da Biofísica?",
    "options": [
      "O estudo da composição atómica dos radioisótopos emissores de radiação gama.",
      "O ramo da física que estuda as relações entre os movimentos dos corpos materiais e as forças que lhes estão associadas.",
      "A área que investiga exclusivamente a temperatura corporal e as trocas térmicas celulares.",
      "O ramo que analisa a velocidade de reações enzimáticas em soluções tampão."
    ],
    "correctIndex": 1,
    "explanation": "A mecânica dedica-se ao estudo das forças e das alterações de movimento ou equilíbrio que elas provocam.",
    "distractorAnalysis": [
      "Está incorreta: A radiobiologia e física nuclear estudam os radioisótopos, não a mecânica.",
      "Está incorreta: A termodinâmica estuda as trocas térmicas e temperatura, não a mecânica clássica.",
      "Está incorreta: A cinética enzimática é do domínio da bioquímica, não da mecânica."
    ],
    "nursingApplication": "Permite analisar as forças e movimentos envolvidos no transporte de equipamentos hospitalares."
  },
  {
    "id": 1042,
    "topicId": 1,
    "question": "O que é uma Força na física clássica?",
    "options": [
      "Uma grandeza puramente escalar expressa em quilogramas que quantifica a quantidade de matéria.",
      "A energia potencial estática acumulada no vácuo entre dois átomos em repouso térmico.",
      "Uma interação vetorial mútua entre corpos capaz de alterar o seu estado de movimento ou de produzir deformação mecânica.",
      "A taxa de variação da temperatura de um sólido quando sujeito a radiação ultravioleta."
    ],
    "correctIndex": 2,
    "explanation": "A força é uma ação vetorial entre corpos que pode acelerar, travar ou deformar uma estrutura material.",
    "distractorAnalysis": [
      "Está incorreta: A força é uma grandeza vetorial (módulo, direção e sentido), não sendo uma grandeza escalar.",
      "Está incorreta: A energia potencial é uma forma de energia medida em Joules, não uma força em Newtons.",
      "Está incorreta: A taxa de variação de temperatura é uma grandeza térmica (°C/s), sem relação com forças mecânicas."
    ],
    "nursingApplication": "Compreender a força é a base para quantificar o esforço muscular ao empurrar um equipamento."
  },
  {
    "id": 1043,
    "topicId": 1,
    "question": "Qual é a unidade padrão de Força no Sistema Internacional (SI)?",
    "options": [
      "Quilograma (kg), que mede a massa inercial de um corpo.",
      "Joule (J), correspondente à energia mecânica e ao trabalho.",
      "Pascal (Pa), que quantifica a pressão mecânica por unidade de área.",
      "Newton (N), equivalente a 1 kg·m/s²."
    ],
    "correctIndex": 3,
    "explanation": "No SI, a força mede-se em Newtons (N), sendo 1 N a força que imprime a 1 kg a aceleração de 1 m/s².",
    "distractorAnalysis": [
      "Está incorreta: O quilograma (kg) é a unidade fundamental de massa inercial, não de força.",
      "Está incorreta: O Joule (J) é a unidade de energia e trabalho mecânico (N·m), não de força pura.",
      "Está incorreta: O Pascal (Pa) é a unidade de pressão (N/m²), representando força distribuída por área."
    ],
    "nursingApplication": "Distingue a força aplicada em Newtons da massa transportada em quilogramas."
  },
  {
    "id": 1044,
    "topicId": 1,
    "question": "Qual o instrumento físico utilizado para medir a intensidade de uma força?",
    "options": [
      "Dinamómetro.",
      "Barómetro.",
      "Termómetro.",
      "Cronómetro."
    ],
    "correctIndex": 0,
    "explanation": "O dinamómetro mede forças através da deformação elástica calibrada de uma mola interna (Lei de Hooke).",
    "distractorAnalysis": [
      "Está incorreta: O barómetro mede a pressão atmosférica em fluidos, não forças mecânicas isoladas.",
      "Está incorreta: O termómetro é o instrumento de medição da temperatura absoluta ou relativa.",
      "Está incorreta: O cronómetro mede intervalos de tempo decorridos."
    ],
    "nursingApplication": "Dinamómetros são usados em ergonomia hospitalar para medir a força de tração ao puxar camas."
  },
  {
    "id": 1045,
    "topicId": 1,
    "question": "Quais são os quatro elementos que definem completamente uma grandeza vetorial como a Força?",
    "options": [
      "Apenas o seu valor numérico e a unidade física associada.",
      "Módulo (intensidade), direção, sentido e ponto de aplicação.",
      "Massa, densidade, volume e estado de agregação da matéria.",
      "Velocidade angular, frequência e período de oscilação."
    ],
    "correctIndex": 1,
    "explanation": "Uma grandeza vetorial exige intensidade numérica, reta suporte (direção), orientação (sentido) e ponto de atuação.",
    "distractorAnalysis": [
      "Está incorreta: Valor numérico e unidade definem grandezas puramente escalares (como massa ou tempo).",
      "Está incorreta: Massa, volume e densidade são propriedades da matéria, não componentes de um vetor.",
      "Está incorreta: Velocidade angular e frequência são grandezas cinemáticas de rotação."
    ],
    "nursingApplication": "A direção e o sentido ao puxar um equipamento determinam a trajetória do movimento resultante."
  },
  {
    "id": 1046,
    "topicId": 1,
    "question": "Considerando g = 9,8 m/s², qual é o Peso de um equipamento que possui uma massa de 55 kg?",
    "options": [
      "55 N.",
      "5.6 N.",
      "539.0 N.",
      "539.0 kg."
    ],
    "correctIndex": 2,
    "explanation": "O peso calcula-se pela relação P = m · g: 55 kg · 9,8 m/s² = 539.0 N.",
    "distractorAnalysis": [
      "Está incorreta: 55 N confunde a massa numérica com a força peso sem multiplicar pela aceleração da gravidade.",
      "Está incorreta: Dividir a massa pela gravidade é uma operação incorreta para obter o peso.",
      "Está incorreta: O valor está certo, mas o peso é força em Newtons (N), não em quilogramas (kg)."
    ],
    "nursingApplication": "Permite calcular o esforço vertical de sustentação suportado pelas rodas de um equipamento."
  },
  {
    "id": 1047,
    "topicId": 1,
    "question": "Uma força perpendicular de 110 N atua sobre uma superfície plana de 0,25 m². Qual é a pressão exercida?",
    "options": [
      "27 Pa (Pascal).",
      "110 Pa (Pascal).",
      "440 N.",
      "440 Pa (Pascal)."
    ],
    "correctIndex": 3,
    "explanation": "A pressão mecânica é a razão p = F / A: 110 N / 0,25 m² = 440 Pa.",
    "distractorAnalysis": [
      "Está incorreta: Multiplicar a força pela área (F · A) não fornece a pressão mecânica.",
      "Está incorreta: 110 Pa ignora a área sobre a qual a força está distribuída.",
      "Está incorreta: A pressão mede-se em Pascal (Pa) ou N/m², e não em Newtons (N)."
    ],
    "nursingApplication": "Demonstra que alargar a área de apoio reduz a pressão exercida sobre o piso hospitalar."
  },
  {
    "id": 1048,
    "topicId": 1,
    "question": "Qual das seguintes grandezas físicas é estritamente ESCALAR?",
    "options": [
      "Massa corporal inercial.",
      "Força peso.",
      "Força de atrito estático.",
      "Momento de uma força (torque)."
    ],
    "correctIndex": 0,
    "explanation": "A massa é puramente escalar: fica completamente definida pelo valor numérico e pela unidade (kg).",
    "distractorAnalysis": [
      "Está incorreta: A força peso é um vetor orientado verticalmente para o centro da Terra.",
      "Está incorreta: A força de atrito é um vetor com direção tangencial à superfície e sentido oposto ao movimento relativo.",
      "Está incorreta: O momento de uma força é uma grandeza vetorial que quantifica a capacidade de rotação."
    ],
    "nursingApplication": "Ao registar a massa de um utente numa balança, afere-se uma grandeza escalar em kg."
  },
  {
    "id": 1049,
    "topicId": 1,
    "question": "Em física vetorial, qual é a distinção rigorosa entre 'Direção' e 'Sentido' de uma força?",
    "options": [
      "A Direção indica a unidade no SI e o Sentido indica se a grandeza é escalar ou vetorial.",
      "A Direção é a reta geométrica de suporte ao longo da qual a força atua, enquanto o Sentido é a orientação do vetor nessa reta.",
      "Direção e Sentido são termos rigorosamente sinónimos na mecânica clássica de Newton.",
      "A Direção mede o módulo em Newtons e o Sentido mede o tempo de aplicação em segundos."
    ],
    "correctIndex": 1,
    "explanation": "A direção é a linha de ação geométrica (ex.: horizontal, vertical); o sentido é a orientação na linha (ex.: para a direita, para cima).",
    "distractorAnalysis": [
      "Está incorreta: A unidade e a natureza escalar/vetorial não definem direção e sentido de um vetor.",
      "Está incorreta: Direção e sentido são conceitos geometricamente distintos e independentes.",
      "Está incorreta: O módulo exprime a intensidade numérica e o tempo mede a duração temporal."
    ],
    "nursingApplication": "Essencial para aplicar forças na direção e sentido corretos ao posicionar equipamentos móveis."
  },
  {
    "id": 1050,
    "topicId": 1,
    "question": "Qual é a diferença fundamental entre a grandeza Pressão e o conceito de Tensão Mecânica num tecido biológico?",
    "options": [
      "A Pressão mede-se em Newtons e a Tensão Mecânica mede-se exclusivamente em Joules por segundo.",
      "A Pressão atua apenas no vácuo absoluto e a Tensão Mecânica atua exclusivamente no interior de gases ideais.",
      "A Pressão é uma grandeza escalar de força perpendicular por área, enquanto a Tensão Mecânica é uma grandeza tensorial interna que inclui tração, compressão e cisalhamento.",
      "Não existe qualquer diferença física, sendo termos idênticos para a aceleração da gravidade."
    ],
    "correctIndex": 2,
    "explanation": "A pressão mede a força compressiva normal por unidade de área; a tensão mecânica interna decompõe-se em componentes normais e tangenciais.",
    "distractorAnalysis": [
      "Está incorreta: Tanto a pressão como a tensão têm unidades de força por área (N/m² ou Pa), não Joules por segundo.",
      "Está incorreta: A pressão atua em fluidos e superfícies reais; a tensão mecânica descreve o estado interno de sólidos e tecidos.",
      "Está incorreta: Nenhum destes conceitos se confunde com a aceleração gravitacional (m/s²)."
    ],
    "nursingApplication": "Fundamenta a avaliação das solicitações mecânicas sofridas pela cartilagem articular e discos vertebrais."
  },
  {
    "id": 1051,
    "topicId": 1,
    "question": "Qual é o enunciado fundamental da 1ª Lei de Newton (Lei da Inércia)?",
    "options": [
      "Para cada ação aplicada sobre um corpo, existe uma reação de intensidade dupla orientada no mesmo sentido.",
      "A aceleração de um corpo é inversamente proporcional à força resultante e diretamente proporcional à sua massa.",
      "Todos os corpos materiais aceleram espontaneamente a uma taxa constante quando livres de qualquer força externa.",
      "Um corpo em repouso permanece em repouso e um corpo em movimento retilíneo uniforme permanece em movimento, a menos que uma força resultante não nula atue sobre ele."
    ],
    "correctIndex": 3,
    "explanation": "A 1ª Lei de Newton postula que, sem força resultante externa (Fr = 0), a velocidade vetorial do corpo permanece constante.",
    "distractorAnalysis": [
      "Está incorreta: A 3ª Lei estabelece ação e reação com a mesma intensidade e sentidos opostos, nunca intensidade dupla no mesmo sentido.",
      "Está incorreta: A 2ª Lei estabelece que a aceleração é diretamente proporcional à força e inversamente proporcional à massa (a = F/m).",
      "Está incorreta: Sem força resultante externa, um corpo não acelera; mantém velocidade vetorial rigorosamente constante."
    ],
    "nursingApplication": "Explica por que uma maca parada num corredor plano permanece imóvel até ser empurrada."
  },
  {
    "id": 1052,
    "topicId": 1,
    "question": "O que traduz o conceito físico de Inércia de um corpo?",
    "options": [
      "A resistência natural que um corpo oferece a qualquer alteração do seu estado de repouso ou de movimento.",
      "A capacidade de um corpo gerar energia mecânica espontânea a partir do repouso absoluto.",
      "A velocidade máxima que um corpo pode atingir quando em queda livre num meio viscoso.",
      "A força invisível que empurra ativamente os corpos para a frente quando estão em movimento retilíneo."
    ],
    "correctIndex": 0,
    "explanation": "A inércia é uma propriedade fundamental da matéria pela qual os corpos resistem a acelerações ou desacelerações.",
    "distractorAnalysis": [
      "Está incorreta: A inércia não cria energia mecânica; a energia mecânica obedece ao princípio da conservação da energia.",
      "Está incorreta: A velocidade máxima em queda num fluido depende do equilíbrio com o atrito viscoso, não da inércia isolada.",
      "Está incorreta: A inércia não é uma força propulsora; é apenas a tendência passiva para manter o estado atual de movimento."
    ],
    "nursingApplication": "Compreender a inércia ajuda a antecipar que travar uma maca com carga exige esforço mecânico."
  },
  {
    "id": 1053,
    "topicId": 1,
    "question": "De que grandeza física depende exclusivamente a inércia translacional de um corpo na mecânica clássica?",
    "options": [
      "Da sua cor e temperatura superficial.",
      "Da sua massa inercial (m).",
      "Do volume geométrico independente da massa.",
      "Da aceleração da gravidade do planeta."
    ],
    "correctIndex": 1,
    "explanation": "A massa é a medida quantitativa direta da inércia de um corpo: corpos com mais massa têm maior inércia.",
    "distractorAnalysis": [
      "Está incorreta: Cor e temperatura não influenciam a inércia translacional de um corpo mecânico.",
      "Está incorreta: O volume sem considerar a massa não determina a inércia; uma esfera oca tem menos inércia que uma sólida.",
      "Está incorreta: A massa inercial é uma propriedade intrínseca do corpo, independente do valor local da gravidade."
    ],
    "nursingApplication": "Uma maca carregada com 100 kg tem muito maior inércia do que uma maca vazia de 30 kg."
  },
  {
    "id": 1054,
    "topicId": 1,
    "question": "Quando uma ambulância em marcha trava bruscamente a 80 km/h, o que acontece a um ocupante sem cinto de segurança e porquê?",
    "options": [
      "É projetado para trás, porque a inércia puxa ativamente os corpos no sentido oposto ao movimento.",
      "Permanece imediatamente imóvel em relação ao veículo, porque a gravidade anula a velocidade do corpo.",
      "É projetado para a frente, porque pela 1ª Lei de Newton o seu corpo tende a manter a velocidade de 80 km/h.",
      "Acelera verticalmente em direção ao teto, porque a desaceleração converte o peso em força ascensional."
    ],
    "correctIndex": 2,
    "explanation": "Pela Lei da Inércia, quando o veículo trava, os corpos no seu interior mantêm a sua velocidade inicial até sofrerem uma força externa.",
    "distractorAnalysis": [
      "Está incorreta: A inércia não empurra para trás; a sensação de recuo só ocorre quando o veículo acelera para a frente.",
      "Está incorreta: O corpo não fica imóvel em relação ao veículo; como o veículo desacelerou, o corpo continua em frente por inércia.",
      "Está incorreta: A travagem horizontal produz desaceleração horizontal, não criando forças verticais ascensionais espontâneas."
    ],
    "nursingApplication": "Demonstra a importância vital do uso de cintos de segurança em veículos de transporte hospitalar."
  },
  {
    "id": 1055,
    "topicId": 1,
    "question": "Se a força resultante que atua sobre um carrinho for rigorosamente nula (Fr = 0), qual é a sua aceleração?",
    "options": [
      "9,8 m/s².",
      "Infinita.",
      "Depende da cor e do material do carrinho.",
      "Zero (a = 0 m/s²)."
    ],
    "correctIndex": 3,
    "explanation": "De acordo com a 2ª Lei de Newton (Fr = m·a), se a força resultante é nula (Fr = 0), a aceleração é forçosamente zero.",
    "distractorAnalysis": [
      "Está incorreta: 9,8 m/s² é a aceleração da gravidade na Terra sob peso livre, não a aceleração com resultante nula.",
      "Está incorreta: Uma aceleração infinita exigiria uma força infinitamente grande sobre uma massa finita.",
      "Está incorreta: A cor do objeto é uma propriedade óptica sem qualquer relevância para a dinâmica newtoniana."
    ],
    "nursingApplication": "Ao empurrar um carrinho a velocidade constante e em linha reta, a aceleração é rigorosamente nula."
  },
  {
    "id": 1056,
    "topicId": 1,
    "question": "Um equipamento desloca-se em linha reta com velocidade constante de 1,5 m/s num piso plano. O que se pode concluir sobre as forças?",
    "options": [
      "A resultante de todas as forças que atuam sobre ele é rigorosamente nula (Fr = 0).",
      "A força propulsora para a frente é dez vezes superior às forças de atrito.",
      "Não existe nenhuma força a atuar sobre o corpo, nem sequer o peso ou a força normal.",
      "A aceleração do equipamento é constante e igual a 1,5 m/s²."
    ],
    "correctIndex": 0,
    "explanation": "Movimento retilíneo e uniforme (velocidade vetorial constante) implica aceleração nula e força resultante nula.",
    "distractorAnalysis": [
      "Está incorreta: Se a força para a frente superasse o atrito, haveria aceleração e a velocidade aumentaria.",
      "Está incorreta: Forças como o peso e a reação normal continuam a existir, mas equilibram-se perfeitamente (resultante nula).",
      "Está incorreta: Se a velocidade é constante, a variação de velocidade é nula, logo a aceleração é 0 m/s² e não 1,5 m/s²."
    ],
    "nursingApplication": "Manter um carrinho a rolar a velocidade constante exige apenas uma força que anule o atrito das rodas."
  },
  {
    "id": 1057,
    "topicId": 1,
    "question": "Porque é mais difícil iniciar o movimento de uma caixa pesada do que de uma caixa leve em repouso no chão?",
    "options": [
      "Porque a caixa leve não obedece à 1ª Lei de Newton e move-se sem necessidade de força.",
      "Porque a caixa mais pesada tem maior massa, o que significa que possui maior inércia e oferece maior resistência à aceleração.",
      "Porque a gravidade só atua sobre objetos com massa superior a cinquenta quilogramas.",
      "Porque os corpos pesados perdem eletrões espontaneamente quando colocados em contacto com o piso."
    ],
    "correctIndex": 1,
    "explanation": "Maior massa implica maior inércia translacional, exigindo uma força maior para produzir qualquer aceleração inicial.",
    "distractorAnalysis": [
      "Está incorreta: A 1ª Lei de Newton aplica-se a todos os corpos materiais sem exceção, independentemente da massa.",
      "Está incorreta: A gravidade atua sobre todos os corpos com massa, por menor que ela seja.",
      "Está incorreta: O atrito e a inércia mecânica decorrem da física clássica, sem perda espontânea de eletrões em repouso."
    ],
    "nursingApplication": "Explica o esforço acrescido ao iniciar o movimento de carrinhos pesados a partir do repouso."
  },
  {
    "id": 1058,
    "topicId": 1,
    "question": "O que é um Referencial Inercial na mecânica newtoniana?",
    "options": [
      "Um referencial que gira a alta velocidade com aceleração centrípeta constante.",
      "Um referencial onde todas as leis de Newton deixam de ser válidas por efeito da relatividade.",
      "Um referencial no qual um corpo livre de forças resultantes se encontra em repouso ou em movimento retilíneo e uniforme.",
      "Um sistema de coordenadas exclusivo do interior de núcleos atómicos em desintegração."
    ],
    "correctIndex": 2,
    "explanation": "Um referencial inercial é aquele onde a 1ª Lei de Newton se verifica rigorosamente (não acelerado).",
    "distractorAnalysis": [
      "Está incorreta: Um referencial em rotação possui aceleração centrípeta, sendo um referencial não inercial.",
      "Está incorreta: As leis de Newton são formalmente definidas e válidas precisamente em referenciais inerciais.",
      "Está incorreta: A mecânica newtoniana de referenciais inerciais descreve a dinâmica macroscópica clássica."
    ],
    "nursingApplication": "O solo hospitalar pode ser considerado com excelente aproximação um referencial inercial para análise de movimentos."
  },
  {
    "id": 1059,
    "topicId": 1,
    "question": "Duas forças que atuam sobre a mesma reta de suporte designam-se colineares. Para que um corpo sujeito a duas forças colineares permaneça em repouso estático, que condição devem essas forças cumprir?",
    "options": [
      "Devem possuir intensidades diferentes e o mesmo sentido no espaço.",
      "Devem formar um ângulo de noventa graus entre as suas retas de suporte.",
      "Devem atuar com uma diferença temporal de vários segundos entre si.",
      "Devem possuir rigorosamente a mesma intensidade e sentidos opostos, anulando-se mutuamente na soma vetorial."
    ],
    "correctIndex": 3,
    "explanation": "Para forças colineares, a resultante nula exige F1 + F2 = 0, o que implica intensidades iguais e sentidos contrários.",
    "distractorAnalysis": [
      "Está incorreta: Se tiverem o mesmo sentido, as forças somam-se e provocam aceleração do corpo.",
      "Está incorreta: Formar um ângulo de 90° caracteriza forças perpendiculares ou concorrentes, não colineares.",
      "Está incorreta: O equilíbrio estático de forças requer ação simultânea permanente sobre o corpo."
    ],
    "nursingApplication": "Exemplo das forças que atuam quando dois operadores puxam uma cinta em sentidos opostos com igual intensidade."
  },
  {
    "id": 1060,
    "topicId": 1,
    "question": "Se um equipamento hospitalar com uma massa inercial de 30 kg for transportado para a superfície da Lua (onde a gravidade é 1/6 da terrestre), o que acontece à sua inércia?",
    "options": [
      "Permanece rigorosamente inalterada, porque a inércia depende exclusivamente da massa do corpo (30 kg) e não do campo gravítico local.",
      "Reduz-se a um sexto da inércia que possuía na Terra, tornando-se seis vezes mais fácil de acelerar.",
      "Aumenta para seis vezes o valor original por efeito da ausência de atmosfera lunar.",
      "Passa a ser rigorosamente nula porque na Lua não existe gravidade suficiente para criar matéria."
    ],
    "correctIndex": 0,
    "explanation": "A massa inercial é uma propriedade invariante do corpo. A inércia (resistência à aceleração F = m·a) é rigorosamente a mesma na Terra ou na Lua.",
    "distractorAnalysis": [
      "Está incorreta: O que se reduz a 1/6 é o peso (P = m·g), mas a massa e a inércia permanecem idênticas.",
      "Está incorreta: A ausência de atmosfera não altera a massa inercial do corpo.",
      "Está incorreta: Existe gravidade na Lua (cerca de 1,62 m/s²), e a matéria preserva a sua massa inercial no espaço."
    ],
    "nursingApplication": "Demonstra a diferença conceptual fundamental entre a massa inercial (invariável) e a força peso (dependente da gravidade)."
  },
  {
    "id": 1061,
    "topicId": 1,
    "question": "Qual é o enunciado fundamental da 1ª Lei de Newton (Lei da Inércia)?",
    "options": [
      "Para cada ação aplicada sobre um corpo, existe uma reação de intensidade dupla orientada no mesmo sentido.",
      "Um corpo em repouso permanece em repouso e um corpo em movimento retilíneo uniforme permanece em movimento, a menos que uma força resultante não nula atue sobre ele.",
      "A aceleração de um corpo é inversamente proporcional à força resultante e diretamente proporcional à sua massa.",
      "Todos os corpos materiais aceleram espontaneamente a uma taxa constante quando livres de qualquer força externa."
    ],
    "correctIndex": 1,
    "explanation": "A 1ª Lei de Newton postula que, sem força resultante externa (Fr = 0), a velocidade vetorial do corpo permanece constante.",
    "distractorAnalysis": [
      "Está incorreta: A 3ª Lei estabelece ação e reação com a mesma intensidade e sentidos opostos, nunca intensidade dupla no mesmo sentido.",
      "Está incorreta: A 2ª Lei estabelece que a aceleração é diretamente proporcional à força e inversamente proporcional à massa (a = F/m).",
      "Está incorreta: Sem força resultante externa, um corpo não acelera; mantém velocidade vetorial rigorosamente constante."
    ],
    "nursingApplication": "Explica por que uma maca parada num corredor plano permanece imóvel até ser empurrada."
  },
  {
    "id": 1062,
    "topicId": 1,
    "question": "O que traduz o conceito físico de Inércia de um corpo?",
    "options": [
      "A capacidade de um corpo gerar energia mecânica espontânea a partir do repouso absoluto.",
      "A velocidade máxima que um corpo pode atingir quando em queda livre num meio viscoso.",
      "A resistência natural que um corpo oferece a qualquer alteração do seu estado de repouso ou de movimento.",
      "A força invisível que empurra ativamente os corpos para a frente quando estão em movimento retilíneo."
    ],
    "correctIndex": 2,
    "explanation": "A inércia é uma propriedade fundamental da matéria pela qual os corpos resistem a acelerações ou desacelerações.",
    "distractorAnalysis": [
      "Está incorreta: A inércia não cria energia mecânica; a energia mecânica obedece ao princípio da conservação da energia.",
      "Está incorreta: A velocidade máxima em queda num fluido depende do equilíbrio com o atrito viscoso, não da inércia isolada.",
      "Está incorreta: A inércia não é uma força propulsora; é apenas a tendência passiva para manter o estado atual de movimento."
    ],
    "nursingApplication": "Compreender a inércia ajuda a antecipar que travar uma maca com carga exige esforço mecânico."
  },
  {
    "id": 1063,
    "topicId": 1,
    "question": "De que grandeza física depende exclusivamente a inércia translacional de um corpo na mecânica clássica?",
    "options": [
      "Da sua cor e temperatura superficial.",
      "Do volume geométrico independente da massa.",
      "Da aceleração da gravidade do planeta.",
      "Da sua massa inercial (m)."
    ],
    "correctIndex": 3,
    "explanation": "A massa é a medida quantitativa direta da inércia de um corpo: corpos com mais massa têm maior inércia.",
    "distractorAnalysis": [
      "Está incorreta: Cor e temperatura não influenciam a inércia translacional de um corpo mecânico.",
      "Está incorreta: O volume sem considerar a massa não determina a inércia; uma esfera oca tem menos inércia que uma sólida.",
      "Está incorreta: A massa inercial é uma propriedade intrínseca do corpo, independente do valor local da gravidade."
    ],
    "nursingApplication": "Uma maca carregada com 100 kg tem muito maior inércia do que uma maca vazia de 30 kg."
  },
  {
    "id": 1064,
    "topicId": 1,
    "question": "Quando uma ambulância em marcha trava bruscamente a 80 km/h, o que acontece a um ocupante sem cinto de segurança e porquê?",
    "options": [
      "É projetado para a frente, porque pela 1ª Lei de Newton o seu corpo tende a manter a velocidade de 80 km/h.",
      "É projetado para trás, porque a inércia puxa ativamente os corpos no sentido oposto ao movimento.",
      "Permanece imediatamente imóvel em relação ao veículo, porque a gravidade anula a velocidade do corpo.",
      "Acelera verticalmente em direção ao teto, porque a desaceleração converte o peso em força ascensional."
    ],
    "correctIndex": 0,
    "explanation": "Pela Lei da Inércia, quando o veículo trava, os corpos no seu interior mantêm a sua velocidade inicial até sofrerem uma força externa.",
    "distractorAnalysis": [
      "Está incorreta: A inércia não empurra para trás; a sensação de recuo só ocorre quando o veículo acelera para a frente.",
      "Está incorreta: O corpo não fica imóvel em relação ao veículo; como o veículo desacelerou, o corpo continua em frente por inércia.",
      "Está incorreta: A travagem horizontal produz desaceleração horizontal, não criando forças verticais ascensionais espontâneas."
    ],
    "nursingApplication": "Demonstra a importância vital do uso de cintos de segurança em veículos de transporte hospitalar."
  },
  {
    "id": 1065,
    "topicId": 1,
    "question": "Se a força resultante que atua sobre um carrinho for rigorosamente nula (Fr = 0), qual é a sua aceleração?",
    "options": [
      "9,8 m/s².",
      "Zero (a = 0 m/s²).",
      "Infinita.",
      "Depende da cor e do material do carrinho."
    ],
    "correctIndex": 1,
    "explanation": "De acordo com a 2ª Lei de Newton (Fr = m·a), se a força resultante é nula (Fr = 0), a aceleração é forçosamente zero.",
    "distractorAnalysis": [
      "Está incorreta: 9,8 m/s² é a aceleração da gravidade na Terra sob peso livre, não a aceleração com resultante nula.",
      "Está incorreta: Uma aceleração infinita exigiria uma força infinitamente grande sobre uma massa finita.",
      "Está incorreta: A cor do objeto é uma propriedade óptica sem qualquer relevância para a dinâmica newtoniana."
    ],
    "nursingApplication": "Ao empurrar um carrinho a velocidade constante e em linha reta, a aceleração é rigorosamente nula."
  },
  {
    "id": 1066,
    "topicId": 1,
    "question": "Um equipamento desloca-se em linha reta com velocidade constante de 1,5 m/s num piso plano. O que se pode concluir sobre as forças?",
    "options": [
      "A força propulsora para a frente é dez vezes superior às forças de atrito.",
      "Não existe nenhuma força a atuar sobre o corpo, nem sequer o peso ou a força normal.",
      "A resultante de todas as forças que atuam sobre ele é rigorosamente nula (Fr = 0).",
      "A aceleração do equipamento é constante e igual a 1,5 m/s²."
    ],
    "correctIndex": 2,
    "explanation": "Movimento retilíneo e uniforme (velocidade vetorial constante) implica aceleração nula e força resultante nula.",
    "distractorAnalysis": [
      "Está incorreta: Se a força para a frente superasse o atrito, haveria aceleração e a velocidade aumentaria.",
      "Está incorreta: Forças como o peso e a reação normal continuam a existir, mas equilibram-se perfeitamente (resultante nula).",
      "Está incorreta: Se a velocidade é constante, a variação de velocidade é nula, logo a aceleração é 0 m/s² e não 1,5 m/s²."
    ],
    "nursingApplication": "Manter um carrinho a rolar a velocidade constante exige apenas uma força que anule o atrito das rodas."
  },
  {
    "id": 1067,
    "topicId": 1,
    "question": "Porque é mais difícil iniciar o movimento de uma caixa pesada do que de uma caixa leve em repouso no chão?",
    "options": [
      "Porque a caixa leve não obedece à 1ª Lei de Newton e move-se sem necessidade de força.",
      "Porque a gravidade só atua sobre objetos com massa superior a cinquenta quilogramas.",
      "Porque os corpos pesados perdem eletrões espontaneamente quando colocados em contacto com o piso.",
      "Porque a caixa mais pesada tem maior massa, o que significa que possui maior inércia e oferece maior resistência à aceleração."
    ],
    "correctIndex": 3,
    "explanation": "Maior massa implica maior inércia translacional, exigindo uma força maior para produzir qualquer aceleração inicial.",
    "distractorAnalysis": [
      "Está incorreta: A 1ª Lei de Newton aplica-se a todos os corpos materiais sem exceção, independentemente da massa.",
      "Está incorreta: A gravidade atua sobre todos os corpos com massa, por menor que ela seja.",
      "Está incorreta: O atrito e a inércia mecânica decorrem da física clássica, sem perda espontânea de eletrões em repouso."
    ],
    "nursingApplication": "Explica o esforço acrescido ao iniciar o movimento de carrinhos pesados a partir do repouso."
  },
  {
    "id": 1068,
    "topicId": 1,
    "question": "O que é um Referencial Inercial na mecânica newtoniana?",
    "options": [
      "Um referencial no qual um corpo livre de forças resultantes se encontra em repouso ou em movimento retilíneo e uniforme.",
      "Um referencial que gira a alta velocidade com aceleração centrípeta constante.",
      "Um referencial onde todas as leis de Newton deixam de ser válidas por efeito da relatividade.",
      "Um sistema de coordenadas exclusivo do interior de núcleos atómicos em desintegração."
    ],
    "correctIndex": 0,
    "explanation": "Um referencial inercial é aquele onde a 1ª Lei de Newton se verifica rigorosamente (não acelerado).",
    "distractorAnalysis": [
      "Está incorreta: Um referencial em rotação possui aceleração centrípeta, sendo um referencial não inercial.",
      "Está incorreta: As leis de Newton são formalmente definidas e válidas precisamente em referenciais inerciais.",
      "Está incorreta: A mecânica newtoniana de referenciais inerciais descreve a dinâmica macroscópica clássica."
    ],
    "nursingApplication": "O solo hospitalar pode ser considerado com excelente aproximação um referencial inercial para análise de movimentos."
  },
  {
    "id": 1069,
    "topicId": 1,
    "question": "Duas forças que atuam sobre a mesma reta de suporte designam-se colineares. Para que um corpo sujeito a duas forças colineares permaneça em repouso estático, que condição devem essas forças cumprir?",
    "options": [
      "Devem possuir intensidades diferentes e o mesmo sentido no espaço.",
      "Devem possuir rigorosamente a mesma intensidade e sentidos opostos, anulando-se mutuamente na soma vetorial.",
      "Devem formar um ângulo de noventa graus entre as suas retas de suporte.",
      "Devem atuar com uma diferença temporal de vários segundos entre si."
    ],
    "correctIndex": 1,
    "explanation": "Para forças colineares, a resultante nula exige F1 + F2 = 0, o que implica intensidades iguais e sentidos contrários.",
    "distractorAnalysis": [
      "Está incorreta: Se tiverem o mesmo sentido, as forças somam-se e provocam aceleração do corpo.",
      "Está incorreta: Formar um ângulo de 90° caracteriza forças perpendiculares ou concorrentes, não colineares.",
      "Está incorreta: O equilíbrio estático de forças requer ação simultânea permanente sobre o corpo."
    ],
    "nursingApplication": "Exemplo das forças que atuam quando dois operadores puxam uma cinta em sentidos opostos com igual intensidade."
  },
  {
    "id": 1070,
    "topicId": 1,
    "question": "Se um equipamento hospitalar com uma massa inercial de 30 kg for transportado para a superfície da Lua (onde a gravidade é 1/6 da terrestre), o que acontece à sua inércia?",
    "options": [
      "Reduz-se a um sexto da inércia que possuía na Terra, tornando-se seis vezes mais fácil de acelerar.",
      "Aumenta para seis vezes o valor original por efeito da ausência de atmosfera lunar.",
      "Permanece rigorosamente inalterada, porque a inércia depende exclusivamente da massa do corpo (30 kg) e não do campo gravítico local.",
      "Passa a ser rigorosamente nula porque na Lua não existe gravidade suficiente para criar matéria."
    ],
    "correctIndex": 2,
    "explanation": "A massa inercial é uma propriedade invariante do corpo. A inércia (resistência à aceleração F = m·a) é rigorosamente a mesma na Terra ou na Lua.",
    "distractorAnalysis": [
      "Está incorreta: O que se reduz a 1/6 é o peso (P = m·g), mas a massa e a inércia permanecem idênticas.",
      "Está incorreta: A ausência de atmosfera não altera a massa inercial do corpo.",
      "Está incorreta: Existe gravidade na Lua (cerca de 1,62 m/s²), e a matéria preserva a sua massa inercial no espaço."
    ],
    "nursingApplication": "Demonstra a diferença conceptual fundamental entre a massa inercial (invariável) e a força peso (dependente da gravidade)."
  },
  {
    "id": 1071,
    "topicId": 1,
    "question": "Qual é o enunciado fundamental da 1ª Lei de Newton (Lei da Inércia)?",
    "options": [
      "Para cada ação aplicada sobre um corpo, existe uma reação de intensidade dupla orientada no mesmo sentido.",
      "A aceleração de um corpo é inversamente proporcional à força resultante e diretamente proporcional à sua massa.",
      "Todos os corpos materiais aceleram espontaneamente a uma taxa constante quando livres de qualquer força externa.",
      "Um corpo em repouso permanece em repouso e um corpo em movimento retilíneo uniforme permanece em movimento, a menos que uma força resultante não nula atue sobre ele."
    ],
    "correctIndex": 3,
    "explanation": "A 1ª Lei de Newton postula que, sem força resultante externa (Fr = 0), a velocidade vetorial do corpo permanece constante.",
    "distractorAnalysis": [
      "Está incorreta: A 3ª Lei estabelece ação e reação com a mesma intensidade e sentidos opostos, nunca intensidade dupla no mesmo sentido.",
      "Está incorreta: A 2ª Lei estabelece que a aceleração é diretamente proporcional à força e inversamente proporcional à massa (a = F/m).",
      "Está incorreta: Sem força resultante externa, um corpo não acelera; mantém velocidade vetorial rigorosamente constante."
    ],
    "nursingApplication": "Explica por que uma maca parada num corredor plano permanece imóvel até ser empurrada."
  },
  {
    "id": 1072,
    "topicId": 1,
    "question": "O que traduz o conceito físico de Inércia de um corpo?",
    "options": [
      "A resistência natural que um corpo oferece a qualquer alteração do seu estado de repouso ou de movimento.",
      "A capacidade de um corpo gerar energia mecânica espontânea a partir do repouso absoluto.",
      "A velocidade máxima que um corpo pode atingir quando em queda livre num meio viscoso.",
      "A força invisível que empurra ativamente os corpos para a frente quando estão em movimento retilíneo."
    ],
    "correctIndex": 0,
    "explanation": "A inércia é uma propriedade fundamental da matéria pela qual os corpos resistem a acelerações ou desacelerações.",
    "distractorAnalysis": [
      "Está incorreta: A inércia não cria energia mecânica; a energia mecânica obedece ao princípio da conservação da energia.",
      "Está incorreta: A velocidade máxima em queda num fluido depende do equilíbrio com o atrito viscoso, não da inércia isolada.",
      "Está incorreta: A inércia não é uma força propulsora; é apenas a tendência passiva para manter o estado atual de movimento."
    ],
    "nursingApplication": "Compreender a inércia ajuda a antecipar que travar uma maca com carga exige esforço mecânico."
  },
  {
    "id": 1073,
    "topicId": 1,
    "question": "De que grandeza física depende exclusivamente a inércia translacional de um corpo na mecânica clássica?",
    "options": [
      "Da sua cor e temperatura superficial.",
      "Da sua massa inercial (m).",
      "Do volume geométrico independente da massa.",
      "Da aceleração da gravidade do planeta."
    ],
    "correctIndex": 1,
    "explanation": "A massa é a medida quantitativa direta da inércia de um corpo: corpos com mais massa têm maior inércia.",
    "distractorAnalysis": [
      "Está incorreta: Cor e temperatura não influenciam a inércia translacional de um corpo mecânico.",
      "Está incorreta: O volume sem considerar a massa não determina a inércia; uma esfera oca tem menos inércia que uma sólida.",
      "Está incorreta: A massa inercial é uma propriedade intrínseca do corpo, independente do valor local da gravidade."
    ],
    "nursingApplication": "Uma maca carregada com 100 kg tem muito maior inércia do que uma maca vazia de 30 kg."
  },
  {
    "id": 1074,
    "topicId": 1,
    "question": "Quando uma ambulância em marcha trava bruscamente a 80 km/h, o que acontece a um ocupante sem cinto de segurança e porquê?",
    "options": [
      "É projetado para trás, porque a inércia puxa ativamente os corpos no sentido oposto ao movimento.",
      "Permanece imediatamente imóvel em relação ao veículo, porque a gravidade anula a velocidade do corpo.",
      "É projetado para a frente, porque pela 1ª Lei de Newton o seu corpo tende a manter a velocidade de 80 km/h.",
      "Acelera verticalmente em direção ao teto, porque a desaceleração converte o peso em força ascensional."
    ],
    "correctIndex": 2,
    "explanation": "Pela Lei da Inércia, quando o veículo trava, os corpos no seu interior mantêm a sua velocidade inicial até sofrerem uma força externa.",
    "distractorAnalysis": [
      "Está incorreta: A inércia não empurra para trás; a sensação de recuo só ocorre quando o veículo acelera para a frente.",
      "Está incorreta: O corpo não fica imóvel em relação ao veículo; como o veículo desacelerou, o corpo continua em frente por inércia.",
      "Está incorreta: A travagem horizontal produz desaceleração horizontal, não criando forças verticais ascensionais espontâneas."
    ],
    "nursingApplication": "Demonstra a importância vital do uso de cintos de segurança em veículos de transporte hospitalar."
  },
  {
    "id": 1075,
    "topicId": 1,
    "question": "Se a força resultante que atua sobre um carrinho for rigorosamente nula (Fr = 0), qual é a sua aceleração?",
    "options": [
      "9,8 m/s².",
      "Infinita.",
      "Depende da cor e do material do carrinho.",
      "Zero (a = 0 m/s²)."
    ],
    "correctIndex": 3,
    "explanation": "De acordo com a 2ª Lei de Newton (Fr = m·a), se a força resultante é nula (Fr = 0), a aceleração é forçosamente zero.",
    "distractorAnalysis": [
      "Está incorreta: 9,8 m/s² é a aceleração da gravidade na Terra sob peso livre, não a aceleração com resultante nula.",
      "Está incorreta: Uma aceleração infinita exigiria uma força infinitamente grande sobre uma massa finita.",
      "Está incorreta: A cor do objeto é uma propriedade óptica sem qualquer relevância para a dinâmica newtoniana."
    ],
    "nursingApplication": "Ao empurrar um carrinho a velocidade constante e em linha reta, a aceleração é rigorosamente nula."
  },
  {
    "id": 1076,
    "topicId": 1,
    "question": "Um equipamento desloca-se em linha reta com velocidade constante de 1,5 m/s num piso plano. O que se pode concluir sobre as forças?",
    "options": [
      "A resultante de todas as forças que atuam sobre ele é rigorosamente nula (Fr = 0).",
      "A força propulsora para a frente é dez vezes superior às forças de atrito.",
      "Não existe nenhuma força a atuar sobre o corpo, nem sequer o peso ou a força normal.",
      "A aceleração do equipamento é constante e igual a 1,5 m/s²."
    ],
    "correctIndex": 0,
    "explanation": "Movimento retilíneo e uniforme (velocidade vetorial constante) implica aceleração nula e força resultante nula.",
    "distractorAnalysis": [
      "Está incorreta: Se a força para a frente superasse o atrito, haveria aceleração e a velocidade aumentaria.",
      "Está incorreta: Forças como o peso e a reação normal continuam a existir, mas equilibram-se perfeitamente (resultante nula).",
      "Está incorreta: Se a velocidade é constante, a variação de velocidade é nula, logo a aceleração é 0 m/s² e não 1,5 m/s²."
    ],
    "nursingApplication": "Manter um carrinho a rolar a velocidade constante exige apenas uma força que anule o atrito das rodas."
  },
  {
    "id": 1077,
    "topicId": 1,
    "question": "Porque é mais difícil iniciar o movimento de uma caixa pesada do que de uma caixa leve em repouso no chão?",
    "options": [
      "Porque a caixa leve não obedece à 1ª Lei de Newton e move-se sem necessidade de força.",
      "Porque a caixa mais pesada tem maior massa, o que significa que possui maior inércia e oferece maior resistência à aceleração.",
      "Porque a gravidade só atua sobre objetos com massa superior a cinquenta quilogramas.",
      "Porque os corpos pesados perdem eletrões espontaneamente quando colocados em contacto com o piso."
    ],
    "correctIndex": 1,
    "explanation": "Maior massa implica maior inércia translacional, exigindo uma força maior para produzir qualquer aceleração inicial.",
    "distractorAnalysis": [
      "Está incorreta: A 1ª Lei de Newton aplica-se a todos os corpos materiais sem exceção, independentemente da massa.",
      "Está incorreta: A gravidade atua sobre todos os corpos com massa, por menor que ela seja.",
      "Está incorreta: O atrito e a inércia mecânica decorrem da física clássica, sem perda espontânea de eletrões em repouso."
    ],
    "nursingApplication": "Explica o esforço acrescido ao iniciar o movimento de carrinhos pesados a partir do repouso."
  },
  {
    "id": 1078,
    "topicId": 1,
    "question": "O que é um Referencial Inercial na mecânica newtoniana?",
    "options": [
      "Um referencial que gira a alta velocidade com aceleração centrípeta constante.",
      "Um referencial onde todas as leis de Newton deixam de ser válidas por efeito da relatividade.",
      "Um referencial no qual um corpo livre de forças resultantes se encontra em repouso ou em movimento retilíneo e uniforme.",
      "Um sistema de coordenadas exclusivo do interior de núcleos atómicos em desintegração."
    ],
    "correctIndex": 2,
    "explanation": "Um referencial inercial é aquele onde a 1ª Lei de Newton se verifica rigorosamente (não acelerado).",
    "distractorAnalysis": [
      "Está incorreta: Um referencial em rotação possui aceleração centrípeta, sendo um referencial não inercial.",
      "Está incorreta: As leis de Newton são formalmente definidas e válidas precisamente em referenciais inerciais.",
      "Está incorreta: A mecânica newtoniana de referenciais inerciais descreve a dinâmica macroscópica clássica."
    ],
    "nursingApplication": "O solo hospitalar pode ser considerado com excelente aproximação um referencial inercial para análise de movimentos."
  },
  {
    "id": 1079,
    "topicId": 1,
    "question": "Duas forças que atuam sobre a mesma reta de suporte designam-se colineares. Para que um corpo sujeito a duas forças colineares permaneça em repouso estático, que condição devem essas forças cumprir?",
    "options": [
      "Devem possuir intensidades diferentes e o mesmo sentido no espaço.",
      "Devem formar um ângulo de noventa graus entre as suas retas de suporte.",
      "Devem atuar com uma diferença temporal de vários segundos entre si.",
      "Devem possuir rigorosamente a mesma intensidade e sentidos opostos, anulando-se mutuamente na soma vetorial."
    ],
    "correctIndex": 3,
    "explanation": "Para forças colineares, a resultante nula exige F1 + F2 = 0, o que implica intensidades iguais e sentidos contrários.",
    "distractorAnalysis": [
      "Está incorreta: Se tiverem o mesmo sentido, as forças somam-se e provocam aceleração do corpo.",
      "Está incorreta: Formar um ângulo de 90° caracteriza forças perpendiculares ou concorrentes, não colineares.",
      "Está incorreta: O equilíbrio estático de forças requer ação simultânea permanente sobre o corpo."
    ],
    "nursingApplication": "Exemplo das forças que atuam quando dois operadores puxam uma cinta em sentidos opostos com igual intensidade."
  },
  {
    "id": 1080,
    "topicId": 1,
    "question": "Se um equipamento hospitalar com uma massa inercial de 30 kg for transportado para a superfície da Lua (onde a gravidade é 1/6 da terrestre), o que acontece à sua inércia?",
    "options": [
      "Permanece rigorosamente inalterada, porque a inércia depende exclusivamente da massa do corpo (30 kg) e não do campo gravítico local.",
      "Reduz-se a um sexto da inércia que possuía na Terra, tornando-se seis vezes mais fácil de acelerar.",
      "Aumenta para seis vezes o valor original por efeito da ausência de atmosfera lunar.",
      "Passa a ser rigorosamente nula porque na Lua não existe gravidade suficiente para criar matéria."
    ],
    "correctIndex": 0,
    "explanation": "A massa inercial é uma propriedade invariante do corpo. A inércia (resistência à aceleração F = m·a) é rigorosamente a mesma na Terra ou na Lua.",
    "distractorAnalysis": [
      "Está incorreta: O que se reduz a 1/6 é o peso (P = m·g), mas a massa e a inércia permanecem idênticas.",
      "Está incorreta: A ausência de atmosfera não altera a massa inercial do corpo.",
      "Está incorreta: Existe gravidade na Lua (cerca de 1,62 m/s²), e a matéria preserva a sua massa inercial no espaço."
    ],
    "nursingApplication": "Demonstra a diferença conceptual fundamental entre a massa inercial (invariável) e a força peso (dependente da gravidade)."
  },
  {
    "id": 1081,
    "topicId": 1,
    "question": "Qual é o enunciado fundamental da 1ª Lei de Newton (Lei da Inércia)?",
    "options": [
      "Para cada ação aplicada sobre um corpo, existe uma reação de intensidade dupla orientada no mesmo sentido.",
      "Um corpo em repouso permanece em repouso e um corpo em movimento retilíneo uniforme permanece em movimento, a menos que uma força resultante não nula atue sobre ele.",
      "A aceleração de um corpo é inversamente proporcional à força resultante e diretamente proporcional à sua massa.",
      "Todos os corpos materiais aceleram espontaneamente a uma taxa constante quando livres de qualquer força externa."
    ],
    "correctIndex": 1,
    "explanation": "A 1ª Lei de Newton postula que, sem força resultante externa (Fr = 0), a velocidade vetorial do corpo permanece constante.",
    "distractorAnalysis": [
      "Está incorreta: A 3ª Lei estabelece ação e reação com a mesma intensidade e sentidos opostos, nunca intensidade dupla no mesmo sentido.",
      "Está incorreta: A 2ª Lei estabelece que a aceleração é diretamente proporcional à força e inversamente proporcional à massa (a = F/m).",
      "Está incorreta: Sem força resultante externa, um corpo não acelera; mantém velocidade vetorial rigorosamente constante."
    ],
    "nursingApplication": "Explica por que uma maca parada num corredor plano permanece imóvel até ser empurrada."
  },
  {
    "id": 1082,
    "topicId": 1,
    "question": "O que traduz o conceito físico de Inércia de um corpo?",
    "options": [
      "A capacidade de um corpo gerar energia mecânica espontânea a partir do repouso absoluto.",
      "A velocidade máxima que um corpo pode atingir quando em queda livre num meio viscoso.",
      "A resistência natural que um corpo oferece a qualquer alteração do seu estado de repouso ou de movimento.",
      "A força invisível que empurra ativamente os corpos para a frente quando estão em movimento retilíneo."
    ],
    "correctIndex": 2,
    "explanation": "A inércia é uma propriedade fundamental da matéria pela qual os corpos resistem a acelerações ou desacelerações.",
    "distractorAnalysis": [
      "Está incorreta: A inércia não cria energia mecânica; a energia mecânica obedece ao princípio da conservação da energia.",
      "Está incorreta: A velocidade máxima em queda num fluido depende do equilíbrio com o atrito viscoso, não da inércia isolada.",
      "Está incorreta: A inércia não é uma força propulsora; é apenas a tendência passiva para manter o estado atual de movimento."
    ],
    "nursingApplication": "Compreender a inércia ajuda a antecipar que travar uma maca com carga exige esforço mecânico."
  },
  {
    "id": 1083,
    "topicId": 1,
    "question": "De que grandeza física depende exclusivamente a inércia translacional de um corpo na mecânica clássica?",
    "options": [
      "Da sua cor e temperatura superficial.",
      "Do volume geométrico independente da massa.",
      "Da aceleração da gravidade do planeta.",
      "Da sua massa inercial (m)."
    ],
    "correctIndex": 3,
    "explanation": "A massa é a medida quantitativa direta da inércia de um corpo: corpos com mais massa têm maior inércia.",
    "distractorAnalysis": [
      "Está incorreta: Cor e temperatura não influenciam a inércia translacional de um corpo mecânico.",
      "Está incorreta: O volume sem considerar a massa não determina a inércia; uma esfera oca tem menos inércia que uma sólida.",
      "Está incorreta: A massa inercial é uma propriedade intrínseca do corpo, independente do valor local da gravidade."
    ],
    "nursingApplication": "Uma maca carregada com 100 kg tem muito maior inércia do que uma maca vazia de 30 kg."
  },
  {
    "id": 1084,
    "topicId": 1,
    "question": "Quando uma ambulância em marcha trava bruscamente a 80 km/h, o que acontece a um ocupante sem cinto de segurança e porquê?",
    "options": [
      "É projetado para a frente, porque pela 1ª Lei de Newton o seu corpo tende a manter a velocidade de 80 km/h.",
      "É projetado para trás, porque a inércia puxa ativamente os corpos no sentido oposto ao movimento.",
      "Permanece imediatamente imóvel em relação ao veículo, porque a gravidade anula a velocidade do corpo.",
      "Acelera verticalmente em direção ao teto, porque a desaceleração converte o peso em força ascensional."
    ],
    "correctIndex": 0,
    "explanation": "Pela Lei da Inércia, quando o veículo trava, os corpos no seu interior mantêm a sua velocidade inicial até sofrerem uma força externa.",
    "distractorAnalysis": [
      "Está incorreta: A inércia não empurra para trás; a sensação de recuo só ocorre quando o veículo acelera para a frente.",
      "Está incorreta: O corpo não fica imóvel em relação ao veículo; como o veículo desacelerou, o corpo continua em frente por inércia.",
      "Está incorreta: A travagem horizontal produz desaceleração horizontal, não criando forças verticais ascensionais espontâneas."
    ],
    "nursingApplication": "Demonstra a importância vital do uso de cintos de segurança em veículos de transporte hospitalar."
  },
  {
    "id": 1085,
    "topicId": 1,
    "question": "Se a força resultante que atua sobre um carrinho for rigorosamente nula (Fr = 0), qual é a sua aceleração?",
    "options": [
      "9,8 m/s².",
      "Zero (a = 0 m/s²).",
      "Infinita.",
      "Depende da cor e do material do carrinho."
    ],
    "correctIndex": 1,
    "explanation": "De acordo com a 2ª Lei de Newton (Fr = m·a), se a força resultante é nula (Fr = 0), a aceleração é forçosamente zero.",
    "distractorAnalysis": [
      "Está incorreta: 9,8 m/s² é a aceleração da gravidade na Terra sob peso livre, não a aceleração com resultante nula.",
      "Está incorreta: Uma aceleração infinita exigiria uma força infinitamente grande sobre uma massa finita.",
      "Está incorreta: A cor do objeto é uma propriedade óptica sem qualquer relevância para a dinâmica newtoniana."
    ],
    "nursingApplication": "Ao empurrar um carrinho a velocidade constante e em linha reta, a aceleração é rigorosamente nula."
  },
  {
    "id": 1086,
    "topicId": 1,
    "question": "Um equipamento desloca-se em linha reta com velocidade constante de 1,5 m/s num piso plano. O que se pode concluir sobre as forças?",
    "options": [
      "A força propulsora para a frente é dez vezes superior às forças de atrito.",
      "Não existe nenhuma força a atuar sobre o corpo, nem sequer o peso ou a força normal.",
      "A resultante de todas as forças que atuam sobre ele é rigorosamente nula (Fr = 0).",
      "A aceleração do equipamento é constante e igual a 1,5 m/s²."
    ],
    "correctIndex": 2,
    "explanation": "Movimento retilíneo e uniforme (velocidade vetorial constante) implica aceleração nula e força resultante nula.",
    "distractorAnalysis": [
      "Está incorreta: Se a força para a frente superasse o atrito, haveria aceleração e a velocidade aumentaria.",
      "Está incorreta: Forças como o peso e a reação normal continuam a existir, mas equilibram-se perfeitamente (resultante nula).",
      "Está incorreta: Se a velocidade é constante, a variação de velocidade é nula, logo a aceleração é 0 m/s² e não 1,5 m/s²."
    ],
    "nursingApplication": "Manter um carrinho a rolar a velocidade constante exige apenas uma força que anule o atrito das rodas."
  },
  {
    "id": 1087,
    "topicId": 1,
    "question": "Porque é mais difícil iniciar o movimento de uma caixa pesada do que de uma caixa leve em repouso no chão?",
    "options": [
      "Porque a caixa leve não obedece à 1ª Lei de Newton e move-se sem necessidade de força.",
      "Porque a gravidade só atua sobre objetos com massa superior a cinquenta quilogramas.",
      "Porque os corpos pesados perdem eletrões espontaneamente quando colocados em contacto com o piso.",
      "Porque a caixa mais pesada tem maior massa, o que significa que possui maior inércia e oferece maior resistência à aceleração."
    ],
    "correctIndex": 3,
    "explanation": "Maior massa implica maior inércia translacional, exigindo uma força maior para produzir qualquer aceleração inicial.",
    "distractorAnalysis": [
      "Está incorreta: A 1ª Lei de Newton aplica-se a todos os corpos materiais sem exceção, independentemente da massa.",
      "Está incorreta: A gravidade atua sobre todos os corpos com massa, por menor que ela seja.",
      "Está incorreta: O atrito e a inércia mecânica decorrem da física clássica, sem perda espontânea de eletrões em repouso."
    ],
    "nursingApplication": "Explica o esforço acrescido ao iniciar o movimento de carrinhos pesados a partir do repouso."
  },
  {
    "id": 1088,
    "topicId": 1,
    "question": "O que é um Referencial Inercial na mecânica newtoniana?",
    "options": [
      "Um referencial no qual um corpo livre de forças resultantes se encontra em repouso ou em movimento retilíneo e uniforme.",
      "Um referencial que gira a alta velocidade com aceleração centrípeta constante.",
      "Um referencial onde todas as leis de Newton deixam de ser válidas por efeito da relatividade.",
      "Um sistema de coordenadas exclusivo do interior de núcleos atómicos em desintegração."
    ],
    "correctIndex": 0,
    "explanation": "Um referencial inercial é aquele onde a 1ª Lei de Newton se verifica rigorosamente (não acelerado).",
    "distractorAnalysis": [
      "Está incorreta: Um referencial em rotação possui aceleração centrípeta, sendo um referencial não inercial.",
      "Está incorreta: As leis de Newton são formalmente definidas e válidas precisamente em referenciais inerciais.",
      "Está incorreta: A mecânica newtoniana de referenciais inerciais descreve a dinâmica macroscópica clássica."
    ],
    "nursingApplication": "O solo hospitalar pode ser considerado com excelente aproximação um referencial inercial para análise de movimentos."
  },
  {
    "id": 1089,
    "topicId": 1,
    "question": "Duas forças que atuam sobre a mesma reta de suporte designam-se colineares. Para que um corpo sujeito a duas forças colineares permaneça em repouso estático, que condição devem essas forças cumprir?",
    "options": [
      "Devem possuir intensidades diferentes e o mesmo sentido no espaço.",
      "Devem possuir rigorosamente a mesma intensidade e sentidos opostos, anulando-se mutuamente na soma vetorial.",
      "Devem formar um ângulo de noventa graus entre as suas retas de suporte.",
      "Devem atuar com uma diferença temporal de vários segundos entre si."
    ],
    "correctIndex": 1,
    "explanation": "Para forças colineares, a resultante nula exige F1 + F2 = 0, o que implica intensidades iguais e sentidos contrários.",
    "distractorAnalysis": [
      "Está incorreta: Se tiverem o mesmo sentido, as forças somam-se e provocam aceleração do corpo.",
      "Está incorreta: Formar um ângulo de 90° caracteriza forças perpendiculares ou concorrentes, não colineares.",
      "Está incorreta: O equilíbrio estático de forças requer ação simultânea permanente sobre o corpo."
    ],
    "nursingApplication": "Exemplo das forças que atuam quando dois operadores puxam uma cinta em sentidos opostos com igual intensidade."
  },
  {
    "id": 1090,
    "topicId": 1,
    "question": "Se um equipamento hospitalar com uma massa inercial de 30 kg for transportado para a superfície da Lua (onde a gravidade é 1/6 da terrestre), o que acontece à sua inércia?",
    "options": [
      "Reduz-se a um sexto da inércia que possuía na Terra, tornando-se seis vezes mais fácil de acelerar.",
      "Aumenta para seis vezes o valor original por efeito da ausência de atmosfera lunar.",
      "Permanece rigorosamente inalterada, porque a inércia depende exclusivamente da massa do corpo (30 kg) e não do campo gravítico local.",
      "Passa a ser rigorosamente nula porque na Lua não existe gravidade suficiente para criar matéria."
    ],
    "correctIndex": 2,
    "explanation": "A massa inercial é uma propriedade invariante do corpo. A inércia (resistência à aceleração F = m·a) é rigorosamente a mesma na Terra ou na Lua.",
    "distractorAnalysis": [
      "Está incorreta: O que se reduz a 1/6 é o peso (P = m·g), mas a massa e a inércia permanecem idênticas.",
      "Está incorreta: A ausência de atmosfera não altera a massa inercial do corpo.",
      "Está incorreta: Existe gravidade na Lua (cerca de 1,62 m/s²), e a matéria preserva a sua massa inercial no espaço."
    ],
    "nursingApplication": "Demonstra a diferença conceptual fundamental entre a massa inercial (invariável) e a força peso (dependente da gravidade)."
  },
  {
    "id": 1091,
    "topicId": 1,
    "question": "Qual é o enunciado fundamental da 1ª Lei de Newton (Lei da Inércia)?",
    "options": [
      "Para cada ação aplicada sobre um corpo, existe uma reação de intensidade dupla orientada no mesmo sentido.",
      "A aceleração de um corpo é inversamente proporcional à força resultante e diretamente proporcional à sua massa.",
      "Todos os corpos materiais aceleram espontaneamente a uma taxa constante quando livres de qualquer força externa.",
      "Um corpo em repouso permanece em repouso e um corpo em movimento retilíneo uniforme permanece em movimento, a menos que uma força resultante não nula atue sobre ele."
    ],
    "correctIndex": 3,
    "explanation": "A 1ª Lei de Newton postula que, sem força resultante externa (Fr = 0), a velocidade vetorial do corpo permanece constante.",
    "distractorAnalysis": [
      "Está incorreta: A 3ª Lei estabelece ação e reação com a mesma intensidade e sentidos opostos, nunca intensidade dupla no mesmo sentido.",
      "Está incorreta: A 2ª Lei estabelece que a aceleração é diretamente proporcional à força e inversamente proporcional à massa (a = F/m).",
      "Está incorreta: Sem força resultante externa, um corpo não acelera; mantém velocidade vetorial rigorosamente constante."
    ],
    "nursingApplication": "Explica por que uma maca parada num corredor plano permanece imóvel até ser empurrada."
  },
  {
    "id": 1092,
    "topicId": 1,
    "question": "O que traduz o conceito físico de Inércia de um corpo?",
    "options": [
      "A resistência natural que um corpo oferece a qualquer alteração do seu estado de repouso ou de movimento.",
      "A capacidade de um corpo gerar energia mecânica espontânea a partir do repouso absoluto.",
      "A velocidade máxima que um corpo pode atingir quando em queda livre num meio viscoso.",
      "A força invisível que empurra ativamente os corpos para a frente quando estão em movimento retilíneo."
    ],
    "correctIndex": 0,
    "explanation": "A inércia é uma propriedade fundamental da matéria pela qual os corpos resistem a acelerações ou desacelerações.",
    "distractorAnalysis": [
      "Está incorreta: A inércia não cria energia mecânica; a energia mecânica obedece ao princípio da conservação da energia.",
      "Está incorreta: A velocidade máxima em queda num fluido depende do equilíbrio com o atrito viscoso, não da inércia isolada.",
      "Está incorreta: A inércia não é uma força propulsora; é apenas a tendência passiva para manter o estado atual de movimento."
    ],
    "nursingApplication": "Compreender a inércia ajuda a antecipar que travar uma maca com carga exige esforço mecânico."
  },
  {
    "id": 1093,
    "topicId": 1,
    "question": "De que grandeza física depende exclusivamente a inércia translacional de um corpo na mecânica clássica?",
    "options": [
      "Da sua cor e temperatura superficial.",
      "Da sua massa inercial (m).",
      "Do volume geométrico independente da massa.",
      "Da aceleração da gravidade do planeta."
    ],
    "correctIndex": 1,
    "explanation": "A massa é a medida quantitativa direta da inércia de um corpo: corpos com mais massa têm maior inércia.",
    "distractorAnalysis": [
      "Está incorreta: Cor e temperatura não influenciam a inércia translacional de um corpo mecânico.",
      "Está incorreta: O volume sem considerar a massa não determina a inércia; uma esfera oca tem menos inércia que uma sólida.",
      "Está incorreta: A massa inercial é uma propriedade intrínseca do corpo, independente do valor local da gravidade."
    ],
    "nursingApplication": "Uma maca carregada com 100 kg tem muito maior inércia do que uma maca vazia de 30 kg."
  },
  {
    "id": 1094,
    "topicId": 1,
    "question": "Quando uma ambulância em marcha trava bruscamente a 80 km/h, o que acontece a um ocupante sem cinto de segurança e porquê?",
    "options": [
      "É projetado para trás, porque a inércia puxa ativamente os corpos no sentido oposto ao movimento.",
      "Permanece imediatamente imóvel em relação ao veículo, porque a gravidade anula a velocidade do corpo.",
      "É projetado para a frente, porque pela 1ª Lei de Newton o seu corpo tende a manter a velocidade de 80 km/h.",
      "Acelera verticalmente em direção ao teto, porque a desaceleração converte o peso em força ascensional."
    ],
    "correctIndex": 2,
    "explanation": "Pela Lei da Inércia, quando o veículo trava, os corpos no seu interior mantêm a sua velocidade inicial até sofrerem uma força externa.",
    "distractorAnalysis": [
      "Está incorreta: A inércia não empurra para trás; a sensação de recuo só ocorre quando o veículo acelera para a frente.",
      "Está incorreta: O corpo não fica imóvel em relação ao veículo; como o veículo desacelerou, o corpo continua em frente por inércia.",
      "Está incorreta: A travagem horizontal produz desaceleração horizontal, não criando forças verticais ascensionais espontâneas."
    ],
    "nursingApplication": "Demonstra a importância vital do uso de cintos de segurança em veículos de transporte hospitalar."
  },
  {
    "id": 1095,
    "topicId": 1,
    "question": "Se a força resultante que atua sobre um carrinho for rigorosamente nula (Fr = 0), qual é a sua aceleração?",
    "options": [
      "9,8 m/s².",
      "Infinita.",
      "Depende da cor e do material do carrinho.",
      "Zero (a = 0 m/s²)."
    ],
    "correctIndex": 3,
    "explanation": "De acordo com a 2ª Lei de Newton (Fr = m·a), se a força resultante é nula (Fr = 0), a aceleração é forçosamente zero.",
    "distractorAnalysis": [
      "Está incorreta: 9,8 m/s² é a aceleração da gravidade na Terra sob peso livre, não a aceleração com resultante nula.",
      "Está incorreta: Uma aceleração infinita exigiria uma força infinitamente grande sobre uma massa finita.",
      "Está incorreta: A cor do objeto é uma propriedade óptica sem qualquer relevância para a dinâmica newtoniana."
    ],
    "nursingApplication": "Ao empurrar um carrinho a velocidade constante e em linha reta, a aceleração é rigorosamente nula."
  },
  {
    "id": 1096,
    "topicId": 1,
    "question": "Um equipamento desloca-se em linha reta com velocidade constante de 1,5 m/s num piso plano. O que se pode concluir sobre as forças?",
    "options": [
      "A resultante de todas as forças que atuam sobre ele é rigorosamente nula (Fr = 0).",
      "A força propulsora para a frente é dez vezes superior às forças de atrito.",
      "Não existe nenhuma força a atuar sobre o corpo, nem sequer o peso ou a força normal.",
      "A aceleração do equipamento é constante e igual a 1,5 m/s²."
    ],
    "correctIndex": 0,
    "explanation": "Movimento retilíneo e uniforme (velocidade vetorial constante) implica aceleração nula e força resultante nula.",
    "distractorAnalysis": [
      "Está incorreta: Se a força para a frente superasse o atrito, haveria aceleração e a velocidade aumentaria.",
      "Está incorreta: Forças como o peso e a reação normal continuam a existir, mas equilibram-se perfeitamente (resultante nula).",
      "Está incorreta: Se a velocidade é constante, a variação de velocidade é nula, logo a aceleração é 0 m/s² e não 1,5 m/s²."
    ],
    "nursingApplication": "Manter um carrinho a rolar a velocidade constante exige apenas uma força que anule o atrito das rodas."
  },
  {
    "id": 1097,
    "topicId": 1,
    "question": "Porque é mais difícil iniciar o movimento de uma caixa pesada do que de uma caixa leve em repouso no chão?",
    "options": [
      "Porque a caixa leve não obedece à 1ª Lei de Newton e move-se sem necessidade de força.",
      "Porque a caixa mais pesada tem maior massa, o que significa que possui maior inércia e oferece maior resistência à aceleração.",
      "Porque a gravidade só atua sobre objetos com massa superior a cinquenta quilogramas.",
      "Porque os corpos pesados perdem eletrões espontaneamente quando colocados em contacto com o piso."
    ],
    "correctIndex": 1,
    "explanation": "Maior massa implica maior inércia translacional, exigindo uma força maior para produzir qualquer aceleração inicial.",
    "distractorAnalysis": [
      "Está incorreta: A 1ª Lei de Newton aplica-se a todos os corpos materiais sem exceção, independentemente da massa.",
      "Está incorreta: A gravidade atua sobre todos os corpos com massa, por menor que ela seja.",
      "Está incorreta: O atrito e a inércia mecânica decorrem da física clássica, sem perda espontânea de eletrões em repouso."
    ],
    "nursingApplication": "Explica o esforço acrescido ao iniciar o movimento de carrinhos pesados a partir do repouso."
  },
  {
    "id": 1098,
    "topicId": 1,
    "question": "O que é um Referencial Inercial na mecânica newtoniana?",
    "options": [
      "Um referencial que gira a alta velocidade com aceleração centrípeta constante.",
      "Um referencial onde todas as leis de Newton deixam de ser válidas por efeito da relatividade.",
      "Um referencial no qual um corpo livre de forças resultantes se encontra em repouso ou em movimento retilíneo e uniforme.",
      "Um sistema de coordenadas exclusivo do interior de núcleos atómicos em desintegração."
    ],
    "correctIndex": 2,
    "explanation": "Um referencial inercial é aquele onde a 1ª Lei de Newton se verifica rigorosamente (não acelerado).",
    "distractorAnalysis": [
      "Está incorreta: Um referencial em rotação possui aceleração centrípeta, sendo um referencial não inercial.",
      "Está incorreta: As leis de Newton são formalmente definidas e válidas precisamente em referenciais inerciais.",
      "Está incorreta: A mecânica newtoniana de referenciais inerciais descreve a dinâmica macroscópica clássica."
    ],
    "nursingApplication": "O solo hospitalar pode ser considerado com excelente aproximação um referencial inercial para análise de movimentos."
  },
  {
    "id": 1099,
    "topicId": 1,
    "question": "Duas forças que atuam sobre a mesma reta de suporte designam-se colineares. Para que um corpo sujeito a duas forças colineares permaneça em repouso estático, que condição devem essas forças cumprir?",
    "options": [
      "Devem possuir intensidades diferentes e o mesmo sentido no espaço.",
      "Devem formar um ângulo de noventa graus entre as suas retas de suporte.",
      "Devem atuar com uma diferença temporal de vários segundos entre si.",
      "Devem possuir rigorosamente a mesma intensidade e sentidos opostos, anulando-se mutuamente na soma vetorial."
    ],
    "correctIndex": 3,
    "explanation": "Para forças colineares, a resultante nula exige F1 + F2 = 0, o que implica intensidades iguais e sentidos contrários.",
    "distractorAnalysis": [
      "Está incorreta: Se tiverem o mesmo sentido, as forças somam-se e provocam aceleração do corpo.",
      "Está incorreta: Formar um ângulo de 90° caracteriza forças perpendiculares ou concorrentes, não colineares.",
      "Está incorreta: O equilíbrio estático de forças requer ação simultânea permanente sobre o corpo."
    ],
    "nursingApplication": "Exemplo das forças que atuam quando dois operadores puxam uma cinta em sentidos opostos com igual intensidade."
  },
  {
    "id": 1100,
    "topicId": 1,
    "question": "Se um equipamento hospitalar com uma massa inercial de 30 kg for transportado para a superfície da Lua (onde a gravidade é 1/6 da terrestre), o que acontece à sua inércia?",
    "options": [
      "Permanece rigorosamente inalterada, porque a inércia depende exclusivamente da massa do corpo (30 kg) e não do campo gravítico local.",
      "Reduz-se a um sexto da inércia que possuía na Terra, tornando-se seis vezes mais fácil de acelerar.",
      "Aumenta para seis vezes o valor original por efeito da ausência de atmosfera lunar.",
      "Passa a ser rigorosamente nula porque na Lua não existe gravidade suficiente para criar matéria."
    ],
    "correctIndex": 0,
    "explanation": "A massa inercial é uma propriedade invariante do corpo. A inércia (resistência à aceleração F = m·a) é rigorosamente a mesma na Terra ou na Lua.",
    "distractorAnalysis": [
      "Está incorreta: O que se reduz a 1/6 é o peso (P = m·g), mas a massa e a inércia permanecem idênticas.",
      "Está incorreta: A ausência de atmosfera não altera a massa inercial do corpo.",
      "Está incorreta: Existe gravidade na Lua (cerca de 1,62 m/s²), e a matéria preserva a sua massa inercial no espaço."
    ],
    "nursingApplication": "Demonstra a diferença conceptual fundamental entre a massa inercial (invariável) e a força peso (dependente da gravidade)."
  },
  {
    "id": 1101,
    "topicId": 1,
    "question": "Qual é a força resultante necessária para acelerar um carrinho de massa 20 kg a uma aceleração constante de 0.5 m/s²?",
    "options": [
      "20.5 N.",
      "10 N.",
      "40.0 N.",
      "10 kg."
    ],
    "correctIndex": 1,
    "explanation": "Pela 2ª Lei de Newton: Fr = m · a = 20 kg · 0.5 m/s² = 10 N.",
    "distractorAnalysis": [
      "Está incorreta: Somar a massa com a aceleração viola a fórmula da 2ª Lei de Newton (Fr = m · a).",
      "Está incorreta: Dividir a massa pela aceleração não fornece a intensidade da força resultante.",
      "Está incorreta: O valor numérico está correto, mas a unidade de força é o Newton (N) e não o quilograma (kg)."
    ],
    "nursingApplication": "Permite calcular a força exata necessária para empurrar e acelerar um carrinho de transporte hospitalar."
  },
  {
    "id": 1102,
    "topicId": 1,
    "question": "Se uma força resultante horizontal de 20 N for aplicada sobre uma maca de 25 kg num piso plano sem atrito, qual será a aceleração adquirida?",
    "options": [
      "200.0 m/s².",
      "0.4 m/s².",
      "0.8 m/s².",
      "0.8 N."
    ],
    "correctIndex": 2,
    "explanation": "Pela 2ª Lei de Newton, a = Fr / m: 20 N / 25 kg = 0.8 m/s².",
    "distractorAnalysis": [
      "Está incorreta: Multiplicar a força por ordens de grandeza arbitrárias fornece um valor excessivo e incorreto.",
      "Está incorreta: Esse valor representa metade da aceleração real obtida pela razão Fr / m.",
      "Está incorreta: A aceleração mede-se em m/s² no SI, e não em Newtons (N), que é a unidade de força."
    ],
    "nursingApplication": "Mostra como a aceleração de um equipamento diminui à medida que a sua massa aumenta."
  },
  {
    "id": 1103,
    "topicId": 1,
    "question": "De acordo com a 2ª Lei de Newton (F = m·a), se a massa de um corpo duplicar e a força resultante aplicada se mantiver constante, a aceleração:",
    "options": [
      "Duplica em relação ao valor inicial.",
      "Quadruplica instantaneamente.",
      "Permanece rigorosamente inalterada.",
      "Reduz-se para metade do valor inicial."
    ],
    "correctIndex": 3,
    "explanation": "Como a = F / m, a aceleração é inversamente proporcional à massa. Duplicando a massa com força constante, a aceleração passa a metade.",
    "distractorAnalysis": [
      "Está incorreta: A aceleração só duplicaria se a força duplicasse para a mesma massa, ou se a massa passasse a metade.",
      "Está incorreta: Quadruplicar a aceleração exigiria quadruplicar a força ou reduzir a massa a um quarto.",
      "Está incorreta: A aceleração não se mantém inalterada porque depende inversamente da massa inercial do corpo."
    ],
    "nursingApplication": "Ao duplicar a carga numa maca, a mesma força muscular produzirá apenas metade da aceleração."
  },
  {
    "id": 1104,
    "topicId": 1,
    "question": "Se a força resultante aplicada sobre um equipamento hospitalar triplicar mantendo-se a sua massa inalterada, o que acontece à sua aceleração?",
    "options": [
      "Triplica na mesma proporção direta.",
      "Reduz-se a um terço do valor.",
      "Permanece constante e inalterada.",
      "Passa a ser rigorosamente nula."
    ],
    "correctIndex": 0,
    "explanation": "A aceleração é diretamente proporcional à força resultante (a ∝ F). Triplicando a força, a aceleração triplica.",
    "distractorAnalysis": [
      "Está incorreta: A aceleração só se reduziria a um terço se a massa triplicasse mantendo-se a força constante.",
      "Está incorreta: A aceleração não fica constante quando a força resultante aplicada sobre a massa varia.",
      "Está incorreta: A aceleração só seria nula se a força resultante fosse igual a zero."
    ],
    "nursingApplication": "Empurrar com mais intensidade produz uma aceleração proporcionalmente mais rápida do equipamento."
  },
  {
    "id": 1105,
    "topicId": 1,
    "question": "O que afirma a 2ª Lei de Newton (Lei Fundamental da Dinâmica)?",
    "options": [
      "A energia mecânica total de um sistema dissipa-se sempre espontaneamente sob a forma de calor no vácuo.",
      "A força resultante que atua sobre um corpo material é diretamente proporcional à sua massa inercial e à aceleração que ele adquire (Fr = m·a).",
      "A velocidade de um corpo é independente de qualquer força que atue sobre as suas superfícies de contacto.",
      "Dois corpos em repouso atraem-se com força inversamente proporcional ao cubo da sua temperatura absoluta."
    ],
    "correctIndex": 1,
    "explanation": "A 2ª Lei estabelece a relação quantitativa fundamental da dinâmica clássica: Fr = m · a.",
    "distractorAnalysis": [
      "Está incorreta: Essa afirmação remete para a termodinâmica estatística, não para a 2ª Lei de Newton.",
      "Está incorreta: A velocidade é diretamente alterada ao longo do tempo pela aceleração que decorre das forças aplicadas.",
      "Está incorreta: A atração entre corpos depende da gravidade e das massas, não da temperatura absoluta cúbica."
    ],
    "nursingApplication": "Fundamento para calcular as forças necessárias para mover massas na rotina física hospitalar."
  },
  {
    "id": 1106,
    "topicId": 1,
    "question": "Para travar e imobilizar uma maca de 100 kg que se move a 2 m/s no intervalo de 1 segundo (desaceleração a = 2 m/s²), que força média de travagem é necessária?",
    "options": [
      "50 N no mesmo sentido da marcha.",
      "100 N na direção vertical ascendente.",
      "200 N no sentido oposto ao movimento.",
      "500 N orientada para o solo."
    ],
    "correctIndex": 2,
    "explanation": "Pela 2ª Lei de Newton: F = m · a = 100 kg · 2 m/s² = 200 N em sentido contrário ao deslocamento.",
    "distractorAnalysis": [
      "Está incorreta: 50 N resultaria de dividir incorretamente 100 kg por 2 m/s², violando a relação F = m · a.",
      "Está incorreta: 100 N seria a força requerida se a desaceleração fosse de apenas 1 m/s².",
      "Está incorreta: 500 N superaria significativamente a força deduzida do produto da massa pela desaceleração."
    ],
    "nursingApplication": "Ilustra a força que as mãos devem exercer sobre a pega da maca para a imobilizar com segurança."
  },
  {
    "id": 1107,
    "topicId": 1,
    "question": "Se um carrinho vazio tem massa de 20 kg e um carrinho carregado tem massa de 80 kg, para obter a mesma aceleração em ambos:",
    "options": [
      "O carrinho carregado exige a mesma força exata que o carrinho vazio.",
      "O carrinho carregado exige uma força quatro vezes menor que o carrinho vazio.",
      "Nenhum dos carrinhos necessita de qualquer força mecânica para acelerar.",
      "O carrinho carregado exige uma força resultante quatro vezes maior do que o carrinho vazio."
    ],
    "correctIndex": 3,
    "explanation": "Como F = m·a, para a mesma aceleração 'a', a força é proporcional à massa. 80 kg / 20 kg = 4 vezes mais força.",
    "distractorAnalysis": [
      "Está incorreta: A mesma força sobre massas diferentes produz acelerações diferentes (inversamente proporcionais).",
      "Está incorreta: Uma massa maior exige maior força, e nunca menor força, para atingir a mesma aceleração linear.",
      "Está incorreta: Qualquer alteração de velocidade (aceleração) exige obrigatoriamente uma força resultante não nula."
    ],
    "nursingApplication": "Mostra a necessidade de maior esforço muscular ao transportar equipamentos com carga pesada."
  },
  {
    "id": 1108,
    "topicId": 1,
    "question": "Qual é a unidade da grandeza Aceleração no Sistema Internacional de Unidades (SI)?",
    "options": [
      "Metros por segundo ao quadrado (m/s²).",
      "Quilogramas por metro cúbico (kg/m³).",
      "Newtons por segundo (N/s).",
      "Joule por metro (J/m)."
    ],
    "correctIndex": 0,
    "explanation": "No SI, a aceleração exprime a taxa de variação da velocidade no tempo: (m/s) / s = m/s².",
    "distractorAnalysis": [
      "Está incorreta: kg/m³ é a unidade SI de massa volúmica (densidade), não de aceleração.",
      "Está incorreta: N/s mede a taxa temporal de variação de uma força, não a aceleração cinemática.",
      "Está incorreta: J/m é dimensionalmente equivalente a Newton (unidade de força), não a aceleração."
    ],
    "nursingApplication": "Unidade fundamental usada para quantificar acelerações e travagens de transportes hospitalares."
  },
  {
    "id": 1109,
    "topicId": 1,
    "question": "De acordo com a formulação vetorial da 2.ª Lei de Newton (Fr = m·a), qual é a relação geométrica entre o vetor Força Resultante e o vetor Aceleração?",
    "options": [
      "Possuem a mesma direção mas obrigatoriamente sentidos opostos.",
      "Possuem obrigatoriamente a mesma direção e o mesmo sentido no espaço tridimensional.",
      "Formam sempre um ângulo de noventa graus entre si.",
      "Não possuem qualquer relação geométrica porque a massa é uma grandeza imaginária."
    ],
    "correctIndex": 1,
    "explanation": "Como a massa m é um escalar estritamente positivo, o vetor a tem rigorosamente a mesma direção e o mesmo sentido do vetor Fr.",
    "distractorAnalysis": [
      "Está incorreta: Sentidos opostos violariam a equação vetorial Fr = m·a para uma massa positiva.",
      "Está incorreta: Forças e acelerações perpendiculares só ocorrem em coordenadas normais de aceleração centrípeta sob força centrípeta.",
      "Está incorreta: A massa é um escalar real positivo fundamental da mecânica clássica."
    ],
    "nursingApplication": "Garante que ao empurrar um objeto para a frente, a sua aceleração ocorre exatamente para a frente."
  },
  {
    "id": 1110,
    "topicId": 1,
    "question": "Um carrinho de transporte hospitalar desloca-se em linha reta com velocidade não nula, mas com aceleração rigorosamente nula (a = 0 m/s²). O que se conclui sobre a força resultante que atua sobre ele?",
    "options": [
      "A força resultante é infinitamente grande para manter o movimento sem parar.",
      "A força resultante é igual ao peso total do carrinho multiplicado pela velocidade.",
      "A força resultante é forçosamente nula (Fr = 0), mantendo-se o carrinho em movimento retilíneo uniforme.",
      "O carrinho está a violar a 2.ª Lei de Newton porque corpos em movimento exigem sempre força resultante."
    ],
    "correctIndex": 2,
    "explanation": "Pela 2.ª Lei de Newton, se a = 0 m/s², então Fr = m · 0 = 0 N, o que define movimento retilíneo e uniforme.",
    "distractorAnalysis": [
      "Está incorreta: Força resultante infinita geraria aceleração infinita, o que contradiz a aceleração nula observada.",
      "Está incorreta: Força resultante não é o produto do peso pela velocidade.",
      "Está incorreta: Não há violação; a 1.ª e a 2.ª Leis afirmam em uníssono que velocidade constante decorre de força resultante nula."
    ],
    "nursingApplication": "Explica por que manter uma velocidade constante de cruzeiro exige apenas equilibrar o atrito das rodas."
  },
  {
    "id": 1111,
    "topicId": 1,
    "question": "Qual é a força resultante necessária para acelerar um carrinho de massa 30 kg a uma aceleração constante de 1.2 m/s²?",
    "options": [
      "31.2 N.",
      "25.0 N.",
      "36 kg.",
      "36 N."
    ],
    "correctIndex": 3,
    "explanation": "Pela 2ª Lei de Newton: Fr = m · a = 30 kg · 1.2 m/s² = 36 N.",
    "distractorAnalysis": [
      "Está incorreta: Somar a massa com a aceleração viola a fórmula da 2ª Lei de Newton (Fr = m · a).",
      "Está incorreta: Dividir a massa pela aceleração não fornece a intensidade da força resultante.",
      "Está incorreta: O valor numérico está correto, mas a unidade de força é o Newton (N) e não o quilograma (kg)."
    ],
    "nursingApplication": "Permite calcular a força exata necessária para empurrar e acelerar um carrinho de transporte hospitalar."
  },
  {
    "id": 1112,
    "topicId": 1,
    "question": "Se uma força resultante horizontal de 60 N for aplicada sobre uma maca de 40 kg num piso plano sem atrito, qual será a aceleração adquirida?",
    "options": [
      "1.5 m/s².",
      "600.0 m/s².",
      "0.75 m/s².",
      "1.5 N."
    ],
    "correctIndex": 0,
    "explanation": "Pela 2ª Lei de Newton, a = Fr / m: 60 N / 40 kg = 1.5 m/s².",
    "distractorAnalysis": [
      "Está incorreta: Multiplicar a força por ordens de grandeza arbitrárias fornece um valor excessivo e incorreto.",
      "Está incorreta: Esse valor representa metade da aceleração real obtida pela razão Fr / m.",
      "Está incorreta: A aceleração mede-se em m/s² no SI, e não em Newtons (N), que é a unidade de força."
    ],
    "nursingApplication": "Mostra como a aceleração de um equipamento diminui à medida que a sua massa aumenta."
  },
  {
    "id": 1113,
    "topicId": 1,
    "question": "De acordo com a 2ª Lei de Newton (F = m·a), se a massa de um corpo duplicar e a força resultante aplicada se mantiver constante, a aceleração:",
    "options": [
      "Duplica em relação ao valor inicial.",
      "Reduz-se para metade do valor inicial.",
      "Quadruplica instantaneamente.",
      "Permanece rigorosamente inalterada."
    ],
    "correctIndex": 1,
    "explanation": "Como a = F / m, a aceleração é inversamente proporcional à massa. Duplicando a massa com força constante, a aceleração passa a metade.",
    "distractorAnalysis": [
      "Está incorreta: A aceleração só duplicaria se a força duplicasse para a mesma massa, ou se a massa passasse a metade.",
      "Está incorreta: Quadruplicar a aceleração exigiria quadruplicar a força ou reduzir a massa a um quarto.",
      "Está incorreta: A aceleração não se mantém inalterada porque depende inversamente da massa inercial do corpo."
    ],
    "nursingApplication": "Ao duplicar a carga numa maca, a mesma força muscular produzirá apenas metade da aceleração."
  },
  {
    "id": 1114,
    "topicId": 1,
    "question": "Se a força resultante aplicada sobre um equipamento hospitalar triplicar mantendo-se a sua massa inalterada, o que acontece à sua aceleração?",
    "options": [
      "Reduz-se a um terço do valor.",
      "Permanece constante e inalterada.",
      "Triplica na mesma proporção direta.",
      "Passa a ser rigorosamente nula."
    ],
    "correctIndex": 2,
    "explanation": "A aceleração é diretamente proporcional à força resultante (a ∝ F). Triplicando a força, a aceleração triplica.",
    "distractorAnalysis": [
      "Está incorreta: A aceleração só se reduziria a um terço se a massa triplicasse mantendo-se a força constante.",
      "Está incorreta: A aceleração não fica constante quando a força resultante aplicada sobre a massa varia.",
      "Está incorreta: A aceleração só seria nula se a força resultante fosse igual a zero."
    ],
    "nursingApplication": "Empurrar com mais intensidade produz uma aceleração proporcionalmente mais rápida do equipamento."
  },
  {
    "id": 1115,
    "topicId": 1,
    "question": "O que afirma a 2ª Lei de Newton (Lei Fundamental da Dinâmica)?",
    "options": [
      "A energia mecânica total de um sistema dissipa-se sempre espontaneamente sob a forma de calor no vácuo.",
      "A velocidade de um corpo é independente de qualquer força que atue sobre as suas superfícies de contacto.",
      "Dois corpos em repouso atraem-se com força inversamente proporcional ao cubo da sua temperatura absoluta.",
      "A força resultante que atua sobre um corpo material é diretamente proporcional à sua massa inercial e à aceleração que ele adquire (Fr = m·a)."
    ],
    "correctIndex": 3,
    "explanation": "A 2ª Lei estabelece a relação quantitativa fundamental da dinâmica clássica: Fr = m · a.",
    "distractorAnalysis": [
      "Está incorreta: Essa afirmação remete para a termodinâmica estatística, não para a 2ª Lei de Newton.",
      "Está incorreta: A velocidade é diretamente alterada ao longo do tempo pela aceleração que decorre das forças aplicadas.",
      "Está incorreta: A atração entre corpos depende da gravidade e das massas, não da temperatura absoluta cúbica."
    ],
    "nursingApplication": "Fundamento para calcular as forças necessárias para mover massas na rotina física hospitalar."
  },
  {
    "id": 1116,
    "topicId": 1,
    "question": "Para travar e imobilizar uma maca de 100 kg que se move a 2 m/s no intervalo de 1 segundo (desaceleração a = 2 m/s²), que força média de travagem é necessária?",
    "options": [
      "200 N no sentido oposto ao movimento.",
      "50 N no mesmo sentido da marcha.",
      "100 N na direção vertical ascendente.",
      "500 N orientada para o solo."
    ],
    "correctIndex": 0,
    "explanation": "Pela 2ª Lei de Newton: F = m · a = 100 kg · 2 m/s² = 200 N em sentido contrário ao deslocamento.",
    "distractorAnalysis": [
      "Está incorreta: 50 N resultaria de dividir incorretamente 100 kg por 2 m/s², violando a relação F = m · a.",
      "Está incorreta: 100 N seria a força requerida se a desaceleração fosse de apenas 1 m/s².",
      "Está incorreta: 500 N superaria significativamente a força deduzida do produto da massa pela desaceleração."
    ],
    "nursingApplication": "Ilustra a força que as mãos devem exercer sobre a pega da maca para a imobilizar com segurança."
  },
  {
    "id": 1117,
    "topicId": 1,
    "question": "Se um carrinho vazio tem massa de 20 kg e um carrinho carregado tem massa de 80 kg, para obter a mesma aceleração em ambos:",
    "options": [
      "O carrinho carregado exige a mesma força exata que o carrinho vazio.",
      "O carrinho carregado exige uma força resultante quatro vezes maior do que o carrinho vazio.",
      "O carrinho carregado exige uma força quatro vezes menor que o carrinho vazio.",
      "Nenhum dos carrinhos necessita de qualquer força mecânica para acelerar."
    ],
    "correctIndex": 1,
    "explanation": "Como F = m·a, para a mesma aceleração 'a', a força é proporcional à massa. 80 kg / 20 kg = 4 vezes mais força.",
    "distractorAnalysis": [
      "Está incorreta: A mesma força sobre massas diferentes produz acelerações diferentes (inversamente proporcionais).",
      "Está incorreta: Uma massa maior exige maior força, e nunca menor força, para atingir a mesma aceleração linear.",
      "Está incorreta: Qualquer alteração de velocidade (aceleração) exige obrigatoriamente uma força resultante não nula."
    ],
    "nursingApplication": "Mostra a necessidade de maior esforço muscular ao transportar equipamentos com carga pesada."
  },
  {
    "id": 1118,
    "topicId": 1,
    "question": "Qual é a unidade da grandeza Aceleração no Sistema Internacional de Unidades (SI)?",
    "options": [
      "Quilogramas por metro cúbico (kg/m³).",
      "Newtons por segundo (N/s).",
      "Metros por segundo ao quadrado (m/s²).",
      "Joule por metro (J/m)."
    ],
    "correctIndex": 2,
    "explanation": "No SI, a aceleração exprime a taxa de variação da velocidade no tempo: (m/s) / s = m/s².",
    "distractorAnalysis": [
      "Está incorreta: kg/m³ é a unidade SI de massa volúmica (densidade), não de aceleração.",
      "Está incorreta: N/s mede a taxa temporal de variação de uma força, não a aceleração cinemática.",
      "Está incorreta: J/m é dimensionalmente equivalente a Newton (unidade de força), não a aceleração."
    ],
    "nursingApplication": "Unidade fundamental usada para quantificar acelerações e travagens de transportes hospitalares."
  },
  {
    "id": 1119,
    "topicId": 1,
    "question": "De acordo com a formulação vetorial da 2.ª Lei de Newton (Fr = m·a), qual é a relação geométrica entre o vetor Força Resultante e o vetor Aceleração?",
    "options": [
      "Possuem a mesma direção mas obrigatoriamente sentidos opostos.",
      "Formam sempre um ângulo de noventa graus entre si.",
      "Não possuem qualquer relação geométrica porque a massa é uma grandeza imaginária.",
      "Possuem obrigatoriamente a mesma direção e o mesmo sentido no espaço tridimensional."
    ],
    "correctIndex": 3,
    "explanation": "Como a massa m é um escalar estritamente positivo, o vetor a tem rigorosamente a mesma direção e o mesmo sentido do vetor Fr.",
    "distractorAnalysis": [
      "Está incorreta: Sentidos opostos violariam a equação vetorial Fr = m·a para uma massa positiva.",
      "Está incorreta: Forças e acelerações perpendiculares só ocorrem em coordenadas normais de aceleração centrípeta sob força centrípeta.",
      "Está incorreta: A massa é um escalar real positivo fundamental da mecânica clássica."
    ],
    "nursingApplication": "Garante que ao empurrar um objeto para a frente, a sua aceleração ocorre exatamente para a frente."
  },
  {
    "id": 1120,
    "topicId": 1,
    "question": "Um carrinho de transporte hospitalar desloca-se em linha reta com velocidade não nula, mas com aceleração rigorosamente nula (a = 0 m/s²). O que se conclui sobre a força resultante que atua sobre ele?",
    "options": [
      "A força resultante é forçosamente nula (Fr = 0), mantendo-se o carrinho em movimento retilíneo uniforme.",
      "A força resultante é infinitamente grande para manter o movimento sem parar.",
      "A força resultante é igual ao peso total do carrinho multiplicado pela velocidade.",
      "O carrinho está a violar a 2.ª Lei de Newton porque corpos em movimento exigem sempre força resultante."
    ],
    "correctIndex": 0,
    "explanation": "Pela 2.ª Lei de Newton, se a = 0 m/s², então Fr = m · 0 = 0 N, o que define movimento retilíneo e uniforme.",
    "distractorAnalysis": [
      "Está incorreta: Força resultante infinita geraria aceleração infinita, o que contradiz a aceleração nula observada.",
      "Está incorreta: Força resultante não é o produto do peso pela velocidade.",
      "Está incorreta: Não há violação; a 1.ª e a 2.ª Leis afirmam em uníssono que velocidade constante decorre de força resultante nula."
    ],
    "nursingApplication": "Explica por que manter uma velocidade constante de cruzeiro exige apenas equilibrar o atrito das rodas."
  },
  {
    "id": 1121,
    "topicId": 1,
    "question": "Qual é a força resultante necessária para acelerar um carrinho de massa 50 kg a uma aceleração constante de 2.0 m/s²?",
    "options": [
      "52.0 N.",
      "100 N.",
      "25.0 N.",
      "100 kg."
    ],
    "correctIndex": 1,
    "explanation": "Pela 2ª Lei de Newton: Fr = m · a = 50 kg · 2.0 m/s² = 100 N.",
    "distractorAnalysis": [
      "Está incorreta: Somar a massa com a aceleração viola a fórmula da 2ª Lei de Newton (Fr = m · a).",
      "Está incorreta: Dividir a massa pela aceleração não fornece a intensidade da força resultante.",
      "Está incorreta: O valor numérico está correto, mas a unidade de força é o Newton (N) e não o quilograma (kg)."
    ],
    "nursingApplication": "Permite calcular a força exata necessária para empurrar e acelerar um carrinho de transporte hospitalar."
  },
  {
    "id": 1122,
    "topicId": 1,
    "question": "Se uma força resultante horizontal de 150 N for aplicada sobre uma maca de 60 kg num piso plano sem atrito, qual será a aceleração adquirida?",
    "options": [
      "1500.0 m/s².",
      "1.25 m/s².",
      "2.5 m/s².",
      "2.5 N."
    ],
    "correctIndex": 2,
    "explanation": "Pela 2ª Lei de Newton, a = Fr / m: 150 N / 60 kg = 2.5 m/s².",
    "distractorAnalysis": [
      "Está incorreta: Multiplicar a força por ordens de grandeza arbitrárias fornece um valor excessivo e incorreto.",
      "Está incorreta: Esse valor representa metade da aceleração real obtida pela razão Fr / m.",
      "Está incorreta: A aceleração mede-se em m/s² no SI, e não em Newtons (N), que é a unidade de força."
    ],
    "nursingApplication": "Mostra como a aceleração de um equipamento diminui à medida que a sua massa aumenta."
  },
  {
    "id": 1123,
    "topicId": 1,
    "question": "De acordo com a 2ª Lei de Newton (F = m·a), se a massa de um corpo duplicar e a força resultante aplicada se mantiver constante, a aceleração:",
    "options": [
      "Duplica em relação ao valor inicial.",
      "Quadruplica instantaneamente.",
      "Permanece rigorosamente inalterada.",
      "Reduz-se para metade do valor inicial."
    ],
    "correctIndex": 3,
    "explanation": "Como a = F / m, a aceleração é inversamente proporcional à massa. Duplicando a massa com força constante, a aceleração passa a metade.",
    "distractorAnalysis": [
      "Está incorreta: A aceleração só duplicaria se a força duplicasse para a mesma massa, ou se a massa passasse a metade.",
      "Está incorreta: Quadruplicar a aceleração exigiria quadruplicar a força ou reduzir a massa a um quarto.",
      "Está incorreta: A aceleração não se mantém inalterada porque depende inversamente da massa inercial do corpo."
    ],
    "nursingApplication": "Ao duplicar a carga numa maca, a mesma força muscular produzirá apenas metade da aceleração."
  },
  {
    "id": 1124,
    "topicId": 1,
    "question": "Se a força resultante aplicada sobre um equipamento hospitalar triplicar mantendo-se a sua massa inalterada, o que acontece à sua aceleração?",
    "options": [
      "Triplica na mesma proporção direta.",
      "Reduz-se a um terço do valor.",
      "Permanece constante e inalterada.",
      "Passa a ser rigorosamente nula."
    ],
    "correctIndex": 0,
    "explanation": "A aceleração é diretamente proporcional à força resultante (a ∝ F). Triplicando a força, a aceleração triplica.",
    "distractorAnalysis": [
      "Está incorreta: A aceleração só se reduziria a um terço se a massa triplicasse mantendo-se a força constante.",
      "Está incorreta: A aceleração não fica constante quando a força resultante aplicada sobre a massa varia.",
      "Está incorreta: A aceleração só seria nula se a força resultante fosse igual a zero."
    ],
    "nursingApplication": "Empurrar com mais intensidade produz uma aceleração proporcionalmente mais rápida do equipamento."
  },
  {
    "id": 1125,
    "topicId": 1,
    "question": "O que afirma a 2ª Lei de Newton (Lei Fundamental da Dinâmica)?",
    "options": [
      "A energia mecânica total de um sistema dissipa-se sempre espontaneamente sob a forma de calor no vácuo.",
      "A força resultante que atua sobre um corpo material é diretamente proporcional à sua massa inercial e à aceleração que ele adquire (Fr = m·a).",
      "A velocidade de um corpo é independente de qualquer força que atue sobre as suas superfícies de contacto.",
      "Dois corpos em repouso atraem-se com força inversamente proporcional ao cubo da sua temperatura absoluta."
    ],
    "correctIndex": 1,
    "explanation": "A 2ª Lei estabelece a relação quantitativa fundamental da dinâmica clássica: Fr = m · a.",
    "distractorAnalysis": [
      "Está incorreta: Essa afirmação remete para a termodinâmica estatística, não para a 2ª Lei de Newton.",
      "Está incorreta: A velocidade é diretamente alterada ao longo do tempo pela aceleração que decorre das forças aplicadas.",
      "Está incorreta: A atração entre corpos depende da gravidade e das massas, não da temperatura absoluta cúbica."
    ],
    "nursingApplication": "Fundamento para calcular as forças necessárias para mover massas na rotina física hospitalar."
  },
  {
    "id": 1126,
    "topicId": 1,
    "question": "Para travar e imobilizar uma maca de 100 kg que se move a 2 m/s no intervalo de 1 segundo (desaceleração a = 2 m/s²), que força média de travagem é necessária?",
    "options": [
      "50 N no mesmo sentido da marcha.",
      "100 N na direção vertical ascendente.",
      "200 N no sentido oposto ao movimento.",
      "500 N orientada para o solo."
    ],
    "correctIndex": 2,
    "explanation": "Pela 2ª Lei de Newton: F = m · a = 100 kg · 2 m/s² = 200 N em sentido contrário ao deslocamento.",
    "distractorAnalysis": [
      "Está incorreta: 50 N resultaria de dividir incorretamente 100 kg por 2 m/s², violando a relação F = m · a.",
      "Está incorreta: 100 N seria a força requerida se a desaceleração fosse de apenas 1 m/s².",
      "Está incorreta: 500 N superaria significativamente a força deduzida do produto da massa pela desaceleração."
    ],
    "nursingApplication": "Ilustra a força que as mãos devem exercer sobre a pega da maca para a imobilizar com segurança."
  },
  {
    "id": 1127,
    "topicId": 1,
    "question": "Se um carrinho vazio tem massa de 20 kg e um carrinho carregado tem massa de 80 kg, para obter a mesma aceleração em ambos:",
    "options": [
      "O carrinho carregado exige a mesma força exata que o carrinho vazio.",
      "O carrinho carregado exige uma força quatro vezes menor que o carrinho vazio.",
      "Nenhum dos carrinhos necessita de qualquer força mecânica para acelerar.",
      "O carrinho carregado exige uma força resultante quatro vezes maior do que o carrinho vazio."
    ],
    "correctIndex": 3,
    "explanation": "Como F = m·a, para a mesma aceleração 'a', a força é proporcional à massa. 80 kg / 20 kg = 4 vezes mais força.",
    "distractorAnalysis": [
      "Está incorreta: A mesma força sobre massas diferentes produz acelerações diferentes (inversamente proporcionais).",
      "Está incorreta: Uma massa maior exige maior força, e nunca menor força, para atingir a mesma aceleração linear.",
      "Está incorreta: Qualquer alteração de velocidade (aceleração) exige obrigatoriamente uma força resultante não nula."
    ],
    "nursingApplication": "Mostra a necessidade de maior esforço muscular ao transportar equipamentos com carga pesada."
  },
  {
    "id": 1128,
    "topicId": 1,
    "question": "Qual é a unidade da grandeza Aceleração no Sistema Internacional de Unidades (SI)?",
    "options": [
      "Metros por segundo ao quadrado (m/s²).",
      "Quilogramas por metro cúbico (kg/m³).",
      "Newtons por segundo (N/s).",
      "Joule por metro (J/m)."
    ],
    "correctIndex": 0,
    "explanation": "No SI, a aceleração exprime a taxa de variação da velocidade no tempo: (m/s) / s = m/s².",
    "distractorAnalysis": [
      "Está incorreta: kg/m³ é a unidade SI de massa volúmica (densidade), não de aceleração.",
      "Está incorreta: N/s mede a taxa temporal de variação de uma força, não a aceleração cinemática.",
      "Está incorreta: J/m é dimensionalmente equivalente a Newton (unidade de força), não a aceleração."
    ],
    "nursingApplication": "Unidade fundamental usada para quantificar acelerações e travagens de transportes hospitalares."
  },
  {
    "id": 1129,
    "topicId": 1,
    "question": "De acordo com a formulação vetorial da 2.ª Lei de Newton (Fr = m·a), qual é a relação geométrica entre o vetor Força Resultante e o vetor Aceleração?",
    "options": [
      "Possuem a mesma direção mas obrigatoriamente sentidos opostos.",
      "Possuem obrigatoriamente a mesma direção e o mesmo sentido no espaço tridimensional.",
      "Formam sempre um ângulo de noventa graus entre si.",
      "Não possuem qualquer relação geométrica porque a massa é uma grandeza imaginária."
    ],
    "correctIndex": 1,
    "explanation": "Como a massa m é um escalar estritamente positivo, o vetor a tem rigorosamente a mesma direção e o mesmo sentido do vetor Fr.",
    "distractorAnalysis": [
      "Está incorreta: Sentidos opostos violariam a equação vetorial Fr = m·a para uma massa positiva.",
      "Está incorreta: Forças e acelerações perpendiculares só ocorrem em coordenadas normais de aceleração centrípeta sob força centrípeta.",
      "Está incorreta: A massa é um escalar real positivo fundamental da mecânica clássica."
    ],
    "nursingApplication": "Garante que ao empurrar um objeto para a frente, a sua aceleração ocorre exatamente para a frente."
  },
  {
    "id": 1130,
    "topicId": 1,
    "question": "Um carrinho de transporte hospitalar desloca-se em linha reta com velocidade não nula, mas com aceleração rigorosamente nula (a = 0 m/s²). O que se conclui sobre a força resultante que atua sobre ele?",
    "options": [
      "A força resultante é infinitamente grande para manter o movimento sem parar.",
      "A força resultante é igual ao peso total do carrinho multiplicado pela velocidade.",
      "A força resultante é forçosamente nula (Fr = 0), mantendo-se o carrinho em movimento retilíneo uniforme.",
      "O carrinho está a violar a 2.ª Lei de Newton porque corpos em movimento exigem sempre força resultante."
    ],
    "correctIndex": 2,
    "explanation": "Pela 2.ª Lei de Newton, se a = 0 m/s², então Fr = m · 0 = 0 N, o que define movimento retilíneo e uniforme.",
    "distractorAnalysis": [
      "Está incorreta: Força resultante infinita geraria aceleração infinita, o que contradiz a aceleração nula observada.",
      "Está incorreta: Força resultante não é o produto do peso pela velocidade.",
      "Está incorreta: Não há violação; a 1.ª e a 2.ª Leis afirmam em uníssono que velocidade constante decorre de força resultante nula."
    ],
    "nursingApplication": "Explica por que manter uma velocidade constante de cruzeiro exige apenas equilibrar o atrito das rodas."
  },
  {
    "id": 1131,
    "topicId": 1,
    "question": "Qual é a força resultante necessária para acelerar um carrinho de massa 24 kg a uma aceleração constante de 1.6 m/s²?",
    "options": [
      "25.6 N.",
      "15.0 N.",
      "38.4 kg.",
      "38.4 N."
    ],
    "correctIndex": 3,
    "explanation": "Pela 2ª Lei de Newton: Fr = m · a = 24 kg · 1.6 m/s² = 38.4 N.",
    "distractorAnalysis": [
      "Está incorreta: Somar a massa com a aceleração viola a fórmula da 2ª Lei de Newton (Fr = m · a).",
      "Está incorreta: Dividir a massa pela aceleração não fornece a intensidade da força resultante.",
      "Está incorreta: O valor numérico está correto, mas a unidade de força é o Newton (N) e não o quilograma (kg)."
    ],
    "nursingApplication": "Permite calcular a força exata necessária para empurrar e acelerar um carrinho de transporte hospitalar."
  },
  {
    "id": 1132,
    "topicId": 1,
    "question": "Se uma força resultante horizontal de 12.8 N for aplicada sobre uma maca de 32 kg num piso plano sem atrito, qual será a aceleração adquirida?",
    "options": [
      "0.4 m/s².",
      "128.0 m/s².",
      "0.2 m/s².",
      "0.4 N."
    ],
    "correctIndex": 0,
    "explanation": "Pela 2ª Lei de Newton, a = Fr / m: 12.8 N / 32 kg = 0.4 m/s².",
    "distractorAnalysis": [
      "Está incorreta: Multiplicar a força por ordens de grandeza arbitrárias fornece um valor excessivo e incorreto.",
      "Está incorreta: Esse valor representa metade da aceleração real obtida pela razão Fr / m.",
      "Está incorreta: A aceleração mede-se em m/s² no SI, e não em Newtons (N), que é a unidade de força."
    ],
    "nursingApplication": "Mostra como a aceleração de um equipamento diminui à medida que a sua massa aumenta."
  },
  {
    "id": 1133,
    "topicId": 1,
    "question": "De acordo com a 2ª Lei de Newton (F = m·a), se a massa de um corpo duplicar e a força resultante aplicada se mantiver constante, a aceleração:",
    "options": [
      "Duplica em relação ao valor inicial.",
      "Reduz-se para metade do valor inicial.",
      "Quadruplica instantaneamente.",
      "Permanece rigorosamente inalterada."
    ],
    "correctIndex": 1,
    "explanation": "Como a = F / m, a aceleração é inversamente proporcional à massa. Duplicando a massa com força constante, a aceleração passa a metade.",
    "distractorAnalysis": [
      "Está incorreta: A aceleração só duplicaria se a força duplicasse para a mesma massa, ou se a massa passasse a metade.",
      "Está incorreta: Quadruplicar a aceleração exigiria quadruplicar a força ou reduzir a massa a um quarto.",
      "Está incorreta: A aceleração não se mantém inalterada porque depende inversamente da massa inercial do corpo."
    ],
    "nursingApplication": "Ao duplicar a carga numa maca, a mesma força muscular produzirá apenas metade da aceleração."
  },
  {
    "id": 1134,
    "topicId": 1,
    "question": "Se a força resultante aplicada sobre um equipamento hospitalar triplicar mantendo-se a sua massa inalterada, o que acontece à sua aceleração?",
    "options": [
      "Reduz-se a um terço do valor.",
      "Permanece constante e inalterada.",
      "Triplica na mesma proporção direta.",
      "Passa a ser rigorosamente nula."
    ],
    "correctIndex": 2,
    "explanation": "A aceleração é diretamente proporcional à força resultante (a ∝ F). Triplicando a força, a aceleração triplica.",
    "distractorAnalysis": [
      "Está incorreta: A aceleração só se reduziria a um terço se a massa triplicasse mantendo-se a força constante.",
      "Está incorreta: A aceleração não fica constante quando a força resultante aplicada sobre a massa varia.",
      "Está incorreta: A aceleração só seria nula se a força resultante fosse igual a zero."
    ],
    "nursingApplication": "Empurrar com mais intensidade produz uma aceleração proporcionalmente mais rápida do equipamento."
  },
  {
    "id": 1135,
    "topicId": 1,
    "question": "O que afirma a 2ª Lei de Newton (Lei Fundamental da Dinâmica)?",
    "options": [
      "A energia mecânica total de um sistema dissipa-se sempre espontaneamente sob a forma de calor no vácuo.",
      "A velocidade de um corpo é independente de qualquer força que atue sobre as suas superfícies de contacto.",
      "Dois corpos em repouso atraem-se com força inversamente proporcional ao cubo da sua temperatura absoluta.",
      "A força resultante que atua sobre um corpo material é diretamente proporcional à sua massa inercial e à aceleração que ele adquire (Fr = m·a)."
    ],
    "correctIndex": 3,
    "explanation": "A 2ª Lei estabelece a relação quantitativa fundamental da dinâmica clássica: Fr = m · a.",
    "distractorAnalysis": [
      "Está incorreta: Essa afirmação remete para a termodinâmica estatística, não para a 2ª Lei de Newton.",
      "Está incorreta: A velocidade é diretamente alterada ao longo do tempo pela aceleração que decorre das forças aplicadas.",
      "Está incorreta: A atração entre corpos depende da gravidade e das massas, não da temperatura absoluta cúbica."
    ],
    "nursingApplication": "Fundamento para calcular as forças necessárias para mover massas na rotina física hospitalar."
  },
  {
    "id": 1136,
    "topicId": 1,
    "question": "Para travar e imobilizar uma maca de 100 kg que se move a 2 m/s no intervalo de 1 segundo (desaceleração a = 2 m/s²), que força média de travagem é necessária?",
    "options": [
      "200 N no sentido oposto ao movimento.",
      "50 N no mesmo sentido da marcha.",
      "100 N na direção vertical ascendente.",
      "500 N orientada para o solo."
    ],
    "correctIndex": 0,
    "explanation": "Pela 2ª Lei de Newton: F = m · a = 100 kg · 2 m/s² = 200 N em sentido contrário ao deslocamento.",
    "distractorAnalysis": [
      "Está incorreta: 50 N resultaria de dividir incorretamente 100 kg por 2 m/s², violando a relação F = m · a.",
      "Está incorreta: 100 N seria a força requerida se a desaceleração fosse de apenas 1 m/s².",
      "Está incorreta: 500 N superaria significativamente a força deduzida do produto da massa pela desaceleração."
    ],
    "nursingApplication": "Ilustra a força que as mãos devem exercer sobre a pega da maca para a imobilizar com segurança."
  },
  {
    "id": 1137,
    "topicId": 1,
    "question": "Se um carrinho vazio tem massa de 20 kg e um carrinho carregado tem massa de 80 kg, para obter a mesma aceleração em ambos:",
    "options": [
      "O carrinho carregado exige a mesma força exata que o carrinho vazio.",
      "O carrinho carregado exige uma força resultante quatro vezes maior do que o carrinho vazio.",
      "O carrinho carregado exige uma força quatro vezes menor que o carrinho vazio.",
      "Nenhum dos carrinhos necessita de qualquer força mecânica para acelerar."
    ],
    "correctIndex": 1,
    "explanation": "Como F = m·a, para a mesma aceleração 'a', a força é proporcional à massa. 80 kg / 20 kg = 4 vezes mais força.",
    "distractorAnalysis": [
      "Está incorreta: A mesma força sobre massas diferentes produz acelerações diferentes (inversamente proporcionais).",
      "Está incorreta: Uma massa maior exige maior força, e nunca menor força, para atingir a mesma aceleração linear.",
      "Está incorreta: Qualquer alteração de velocidade (aceleração) exige obrigatoriamente uma força resultante não nula."
    ],
    "nursingApplication": "Mostra a necessidade de maior esforço muscular ao transportar equipamentos com carga pesada."
  },
  {
    "id": 1138,
    "topicId": 1,
    "question": "Qual é a unidade da grandeza Aceleração no Sistema Internacional de Unidades (SI)?",
    "options": [
      "Quilogramas por metro cúbico (kg/m³).",
      "Newtons por segundo (N/s).",
      "Metros por segundo ao quadrado (m/s²).",
      "Joule por metro (J/m)."
    ],
    "correctIndex": 2,
    "explanation": "No SI, a aceleração exprime a taxa de variação da velocidade no tempo: (m/s) / s = m/s².",
    "distractorAnalysis": [
      "Está incorreta: kg/m³ é a unidade SI de massa volúmica (densidade), não de aceleração.",
      "Está incorreta: N/s mede a taxa temporal de variação de uma força, não a aceleração cinemática.",
      "Está incorreta: J/m é dimensionalmente equivalente a Newton (unidade de força), não a aceleração."
    ],
    "nursingApplication": "Unidade fundamental usada para quantificar acelerações e travagens de transportes hospitalares."
  },
  {
    "id": 1139,
    "topicId": 1,
    "question": "De acordo com a formulação vetorial da 2.ª Lei de Newton (Fr = m·a), qual é a relação geométrica entre o vetor Força Resultante e o vetor Aceleração?",
    "options": [
      "Possuem a mesma direção mas obrigatoriamente sentidos opostos.",
      "Formam sempre um ângulo de noventa graus entre si.",
      "Não possuem qualquer relação geométrica porque a massa é uma grandeza imaginária.",
      "Possuem obrigatoriamente a mesma direção e o mesmo sentido no espaço tridimensional."
    ],
    "correctIndex": 3,
    "explanation": "Como a massa m é um escalar estritamente positivo, o vetor a tem rigorosamente a mesma direção e o mesmo sentido do vetor Fr.",
    "distractorAnalysis": [
      "Está incorreta: Sentidos opostos violariam a equação vetorial Fr = m·a para uma massa positiva.",
      "Está incorreta: Forças e acelerações perpendiculares só ocorrem em coordenadas normais de aceleração centrípeta sob força centrípeta.",
      "Está incorreta: A massa é um escalar real positivo fundamental da mecânica clássica."
    ],
    "nursingApplication": "Garante que ao empurrar um objeto para a frente, a sua aceleração ocorre exatamente para a frente."
  },
  {
    "id": 1140,
    "topicId": 1,
    "question": "Um carrinho de transporte hospitalar desloca-se em linha reta com velocidade não nula, mas com aceleração rigorosamente nula (a = 0 m/s²). O que se conclui sobre a força resultante que atua sobre ele?",
    "options": [
      "A força resultante é forçosamente nula (Fr = 0), mantendo-se o carrinho em movimento retilíneo uniforme.",
      "A força resultante é infinitamente grande para manter o movimento sem parar.",
      "A força resultante é igual ao peso total do carrinho multiplicado pela velocidade.",
      "O carrinho está a violar a 2.ª Lei de Newton porque corpos em movimento exigem sempre força resultante."
    ],
    "correctIndex": 0,
    "explanation": "Pela 2.ª Lei de Newton, se a = 0 m/s², então Fr = m · 0 = 0 N, o que define movimento retilíneo e uniforme.",
    "distractorAnalysis": [
      "Está incorreta: Força resultante infinita geraria aceleração infinita, o que contradiz a aceleração nula observada.",
      "Está incorreta: Força resultante não é o produto do peso pela velocidade.",
      "Está incorreta: Não há violação; a 1.ª e a 2.ª Leis afirmam em uníssono que velocidade constante decorre de força resultante nula."
    ],
    "nursingApplication": "Explica por que manter uma velocidade constante de cruzeiro exige apenas equilibrar o atrito das rodas."
  },
  {
    "id": 1141,
    "topicId": 1,
    "question": "Qual é a força resultante necessária para acelerar um carrinho de massa 20 kg a uma aceleração constante de 0.5 m/s²?",
    "options": [
      "20.5 N.",
      "10 N.",
      "40.0 N.",
      "10 kg."
    ],
    "correctIndex": 1,
    "explanation": "Pela 2ª Lei de Newton: Fr = m · a = 20 kg · 0.5 m/s² = 10 N.",
    "distractorAnalysis": [
      "Está incorreta: Somar a massa com a aceleração viola a fórmula da 2ª Lei de Newton (Fr = m · a).",
      "Está incorreta: Dividir a massa pela aceleração não fornece a intensidade da força resultante.",
      "Está incorreta: O valor numérico está correto, mas a unidade de força é o Newton (N) e não o quilograma (kg)."
    ],
    "nursingApplication": "Permite calcular a força exata necessária para empurrar e acelerar um carrinho de transporte hospitalar."
  },
  {
    "id": 1142,
    "topicId": 1,
    "question": "Se uma força resultante horizontal de 20 N for aplicada sobre uma maca de 25 kg num piso plano sem atrito, qual será a aceleração adquirida?",
    "options": [
      "200.0 m/s².",
      "0.4 m/s².",
      "0.8 m/s².",
      "0.8 N."
    ],
    "correctIndex": 2,
    "explanation": "Pela 2ª Lei de Newton, a = Fr / m: 20 N / 25 kg = 0.8 m/s².",
    "distractorAnalysis": [
      "Está incorreta: Multiplicar a força por ordens de grandeza arbitrárias fornece um valor excessivo e incorreto.",
      "Está incorreta: Esse valor representa metade da aceleração real obtida pela razão Fr / m.",
      "Está incorreta: A aceleração mede-se em m/s² no SI, e não em Newtons (N), que é a unidade de força."
    ],
    "nursingApplication": "Mostra como a aceleração de um equipamento diminui à medida que a sua massa aumenta."
  },
  {
    "id": 1143,
    "topicId": 1,
    "question": "De acordo com a 2ª Lei de Newton (F = m·a), se a massa de um corpo duplicar e a força resultante aplicada se mantiver constante, a aceleração:",
    "options": [
      "Duplica em relação ao valor inicial.",
      "Quadruplica instantaneamente.",
      "Permanece rigorosamente inalterada.",
      "Reduz-se para metade do valor inicial."
    ],
    "correctIndex": 3,
    "explanation": "Como a = F / m, a aceleração é inversamente proporcional à massa. Duplicando a massa com força constante, a aceleração passa a metade.",
    "distractorAnalysis": [
      "Está incorreta: A aceleração só duplicaria se a força duplicasse para a mesma massa, ou se a massa passasse a metade.",
      "Está incorreta: Quadruplicar a aceleração exigiria quadruplicar a força ou reduzir a massa a um quarto.",
      "Está incorreta: A aceleração não se mantém inalterada porque depende inversamente da massa inercial do corpo."
    ],
    "nursingApplication": "Ao duplicar a carga numa maca, a mesma força muscular produzirá apenas metade da aceleração."
  },
  {
    "id": 1144,
    "topicId": 1,
    "question": "Se a força resultante aplicada sobre um equipamento hospitalar triplicar mantendo-se a sua massa inalterada, o que acontece à sua aceleração?",
    "options": [
      "Triplica na mesma proporção direta.",
      "Reduz-se a um terço do valor.",
      "Permanece constante e inalterada.",
      "Passa a ser rigorosamente nula."
    ],
    "correctIndex": 0,
    "explanation": "A aceleração é diretamente proporcional à força resultante (a ∝ F). Triplicando a força, a aceleração triplica.",
    "distractorAnalysis": [
      "Está incorreta: A aceleração só se reduziria a um terço se a massa triplicasse mantendo-se a força constante.",
      "Está incorreta: A aceleração não fica constante quando a força resultante aplicada sobre a massa varia.",
      "Está incorreta: A aceleração só seria nula se a força resultante fosse igual a zero."
    ],
    "nursingApplication": "Empurrar com mais intensidade produz uma aceleração proporcionalmente mais rápida do equipamento."
  },
  {
    "id": 1145,
    "topicId": 1,
    "question": "O que afirma a 2ª Lei de Newton (Lei Fundamental da Dinâmica)?",
    "options": [
      "A energia mecânica total de um sistema dissipa-se sempre espontaneamente sob a forma de calor no vácuo.",
      "A força resultante que atua sobre um corpo material é diretamente proporcional à sua massa inercial e à aceleração que ele adquire (Fr = m·a).",
      "A velocidade de um corpo é independente de qualquer força que atue sobre as suas superfícies de contacto.",
      "Dois corpos em repouso atraem-se com força inversamente proporcional ao cubo da sua temperatura absoluta."
    ],
    "correctIndex": 1,
    "explanation": "A 2ª Lei estabelece a relação quantitativa fundamental da dinâmica clássica: Fr = m · a.",
    "distractorAnalysis": [
      "Está incorreta: Essa afirmação remete para a termodinâmica estatística, não para a 2ª Lei de Newton.",
      "Está incorreta: A velocidade é diretamente alterada ao longo do tempo pela aceleração que decorre das forças aplicadas.",
      "Está incorreta: A atração entre corpos depende da gravidade e das massas, não da temperatura absoluta cúbica."
    ],
    "nursingApplication": "Fundamento para calcular as forças necessárias para mover massas na rotina física hospitalar."
  },
  {
    "id": 1146,
    "topicId": 1,
    "question": "Para travar e imobilizar uma maca de 100 kg que se move a 2 m/s no intervalo de 1 segundo (desaceleração a = 2 m/s²), que força média de travagem é necessária?",
    "options": [
      "50 N no mesmo sentido da marcha.",
      "100 N na direção vertical ascendente.",
      "200 N no sentido oposto ao movimento.",
      "500 N orientada para o solo."
    ],
    "correctIndex": 2,
    "explanation": "Pela 2ª Lei de Newton: F = m · a = 100 kg · 2 m/s² = 200 N em sentido contrário ao deslocamento.",
    "distractorAnalysis": [
      "Está incorreta: 50 N resultaria de dividir incorretamente 100 kg por 2 m/s², violando a relação F = m · a.",
      "Está incorreta: 100 N seria a força requerida se a desaceleração fosse de apenas 1 m/s².",
      "Está incorreta: 500 N superaria significativamente a força deduzida do produto da massa pela desaceleração."
    ],
    "nursingApplication": "Ilustra a força que as mãos devem exercer sobre a pega da maca para a imobilizar com segurança."
  },
  {
    "id": 1147,
    "topicId": 1,
    "question": "Se um carrinho vazio tem massa de 20 kg e um carrinho carregado tem massa de 80 kg, para obter a mesma aceleração em ambos:",
    "options": [
      "O carrinho carregado exige a mesma força exata que o carrinho vazio.",
      "O carrinho carregado exige uma força quatro vezes menor que o carrinho vazio.",
      "Nenhum dos carrinhos necessita de qualquer força mecânica para acelerar.",
      "O carrinho carregado exige uma força resultante quatro vezes maior do que o carrinho vazio."
    ],
    "correctIndex": 3,
    "explanation": "Como F = m·a, para a mesma aceleração 'a', a força é proporcional à massa. 80 kg / 20 kg = 4 vezes mais força.",
    "distractorAnalysis": [
      "Está incorreta: A mesma força sobre massas diferentes produz acelerações diferentes (inversamente proporcionais).",
      "Está incorreta: Uma massa maior exige maior força, e nunca menor força, para atingir a mesma aceleração linear.",
      "Está incorreta: Qualquer alteração de velocidade (aceleração) exige obrigatoriamente uma força resultante não nula."
    ],
    "nursingApplication": "Mostra a necessidade de maior esforço muscular ao transportar equipamentos com carga pesada."
  },
  {
    "id": 1148,
    "topicId": 1,
    "question": "Qual é a unidade da grandeza Aceleração no Sistema Internacional de Unidades (SI)?",
    "options": [
      "Metros por segundo ao quadrado (m/s²).",
      "Quilogramas por metro cúbico (kg/m³).",
      "Newtons por segundo (N/s).",
      "Joule por metro (J/m)."
    ],
    "correctIndex": 0,
    "explanation": "No SI, a aceleração exprime a taxa de variação da velocidade no tempo: (m/s) / s = m/s².",
    "distractorAnalysis": [
      "Está incorreta: kg/m³ é a unidade SI de massa volúmica (densidade), não de aceleração.",
      "Está incorreta: N/s mede a taxa temporal de variação de uma força, não a aceleração cinemática.",
      "Está incorreta: J/m é dimensionalmente equivalente a Newton (unidade de força), não a aceleração."
    ],
    "nursingApplication": "Unidade fundamental usada para quantificar acelerações e travagens de transportes hospitalares."
  },
  {
    "id": 1149,
    "topicId": 1,
    "question": "De acordo com a formulação vetorial da 2.ª Lei de Newton (Fr = m·a), qual é a relação geométrica entre o vetor Força Resultante e o vetor Aceleração?",
    "options": [
      "Possuem a mesma direção mas obrigatoriamente sentidos opostos.",
      "Possuem obrigatoriamente a mesma direção e o mesmo sentido no espaço tridimensional.",
      "Formam sempre um ângulo de noventa graus entre si.",
      "Não possuem qualquer relação geométrica porque a massa é uma grandeza imaginária."
    ],
    "correctIndex": 1,
    "explanation": "Como a massa m é um escalar estritamente positivo, o vetor a tem rigorosamente a mesma direção e o mesmo sentido do vetor Fr.",
    "distractorAnalysis": [
      "Está incorreta: Sentidos opostos violariam a equação vetorial Fr = m·a para uma massa positiva.",
      "Está incorreta: Forças e acelerações perpendiculares só ocorrem em coordenadas normais de aceleração centrípeta sob força centrípeta.",
      "Está incorreta: A massa é um escalar real positivo fundamental da mecânica clássica."
    ],
    "nursingApplication": "Garante que ao empurrar um objeto para a frente, a sua aceleração ocorre exatamente para a frente."
  },
  {
    "id": 1150,
    "topicId": 1,
    "question": "Um carrinho de transporte hospitalar desloca-se em linha reta com velocidade não nula, mas com aceleração rigorosamente nula (a = 0 m/s²). O que se conclui sobre a força resultante que atua sobre ele?",
    "options": [
      "A força resultante é infinitamente grande para manter o movimento sem parar.",
      "A força resultante é igual ao peso total do carrinho multiplicado pela velocidade.",
      "A força resultante é forçosamente nula (Fr = 0), mantendo-se o carrinho em movimento retilíneo uniforme.",
      "O carrinho está a violar a 2.ª Lei de Newton porque corpos em movimento exigem sempre força resultante."
    ],
    "correctIndex": 2,
    "explanation": "Pela 2.ª Lei de Newton, se a = 0 m/s², então Fr = m · 0 = 0 N, o que define movimento retilíneo e uniforme.",
    "distractorAnalysis": [
      "Está incorreta: Força resultante infinita geraria aceleração infinita, o que contradiz a aceleração nula observada.",
      "Está incorreta: Força resultante não é o produto do peso pela velocidade.",
      "Está incorreta: Não há violação; a 1.ª e a 2.ª Leis afirmam em uníssono que velocidade constante decorre de força resultante nula."
    ],
    "nursingApplication": "Explica por que manter uma velocidade constante de cruzeiro exige apenas equilibrar o atrito das rodas."
  },
  {
    "id": 1151,
    "topicId": 1,
    "question": "Qual é o princípio fundamental expresso pela 3ª Lei de Newton?",
    "options": [
      "A força de reação é sempre aplicada no mesmo corpo que a ação, anulando imediatamente todo o movimento.",
      "A força de ação tem sempre o dobro da intensidade da força de reação em qualquer colisão física.",
      "As forças de reação só existem quando os corpos se movem com velocidade superior à da luz no vácuo.",
      "Sempre que um corpo A exerce uma força sobre um corpo B, o corpo B exerce simultaneamente sobre o corpo A uma força de igual intensidade e direção, mas em sentido oposto."
    ],
    "correctIndex": 3,
    "explanation": "A 3ª Lei estabelece o par ação-reação (F_A->B = -F_B->A): intensidades iguais, sentidos opostos, atuando em corpos distintos.",
    "distractorAnalysis": [
      "Está incorreta: Ação e reação atuam em corpos diferentes; se atuassem no mesmo corpo, anulariam o movimento do corpo.",
      "Está incorreta: As forças do par têm rigorosamente a mesma intensidade matemática, nunca intensidade dupla.",
      "Está incorreta: A 3ª Lei aplica-se a todas as interações da mecânica clássica a qualquer velocidade."
    ],
    "nursingApplication": "Ao empurrar uma maca para a frente, as rodas e o solo exercem força de reação nos pés do operador."
  },
  {
    "id": 1152,
    "topicId": 1,
    "question": "Porque é que as forças do par ação-reação NUNCA se anulam mutuamente?",
    "options": [
      "Porque atuam sempre em corpos diferentes e nunca sobre o mesmo corpo.",
      "Porque têm intensidades diferentes e não se podem subtrair matematicamente.",
      "Porque ocorrem em momentos temporais diferentes, com um atraso de vários segundos.",
      "Porque uma é uma grandeza vetorial e a outra é uma grandeza puramente escalar."
    ],
    "correctIndex": 0,
    "explanation": "O equilíbrio de um corpo requer que as forças atuem sobre o mesmo corpo. Ação e reação atuam em corpos distintos, logo não se anulam.",
    "distractorAnalysis": [
      "Está incorreta: As forças do par ação-reação têm exatamente o mesmo módulo (intensidade).",
      "Está incorreta: Ação e reação são absolutamente simultâneas; não existe atraso temporal entre elas.",
      "Está incorreta: Ambas as forças do par são grandezas estritamente vetoriais expressas em Newtons."
    ],
    "nursingApplication": "Permite entender que a força exercida sobre um objeto é independente das forças que o objeto exerce noutros."
  },
  {
    "id": 1153,
    "topicId": 1,
    "question": "Durante a marcha humana, ao empurrar o solo para trás com o pé de apoio na fase de impulsão, que componente da força exercida pelo solo projeta o corpo para a frente?",
    "options": [
      "A força normal perpendicular de sustentação dirigida verticalmente para o centro da Terra.",
      "A componente tangencial de atrito estático da Força de Reação do Solo (FRS), orientada horizontalmente para a frente.",
      "A força gravitacional atrativa exercida pela Lua sobre a musculatura do membro inferior.",
      "A pressão hidrostática do líquido sinovial que escapa da cápsula articular."
    ],
    "correctIndex": 1,
    "explanation": "Pela 3ª Lei de Newton, ao exercer uma força tangencial para trás no solo, este reage através do atrito estático com uma força horizontal para a frente (propulsão).",
    "distractorAnalysis": [
      "Está incorreta: A força normal é vertical e atua na sustentação do peso contra a gravidade, não impulsionando horizontalmente para a frente.",
      "Está incorreta: A gravidade lunar é desprezável na propulsão terrestre da locomoção humana.",
      "Está incorreta: A pressão sinovial é interna à articulação e não produz propulsão de translação com o solo."
    ],
    "nursingApplication": "Fundamento biomecânico da marcha humana ao caminhar pelos corredores hospitalares."
  },
  {
    "id": 1154,
    "topicId": 1,
    "question": "A força normal (N) exercida pelo colchão de uma cama sobre uma pessoa deitada é o par de ação-reação do peso dessa pessoa?",
    "options": [
      "Sim, porque são forças com a mesma intensidade e sentidos opostos que atuam na mesma linha de ação.",
      "Sim, porque toda a força que atua na vertical forma automaticamente um par com a gravidade.",
      "Não, porque o peso e a força normal atuam sobre o mesmo corpo (a pessoa), enquanto os pares ação-reação atuam em corpos diferentes.",
      "Não, porque a força normal tem sempre uma intensidade dez vezes superior ao peso corporal."
    ],
    "correctIndex": 2,
    "explanation": "O par de ação-reação do peso (Terra atrai pessoa) é a atração gravitacional que a pessoa exerce sobre a Terra. A normal e o peso atuam ambos na pessoa.",
    "distractorAnalysis": [
      "Está incorreta: Ter a mesma intensidade e sentidos opostos é condição de equilíbrio de translação da pessoa, mas não define par ação-reação mútuo.",
      "Está incorreta: A direção vertical não implica que as forças pertençam ao mesmo par da 3ª Lei.",
      "Está incorreta: Numa superfície horizontal estática em repouso, a normal tem intensidade igual ao peso (N = P)."
    ],
    "nursingApplication": "Conceito físico essencial para o desenho de superfícies de suporte e colchões adequados."
  },
  {
    "id": 1155,
    "topicId": 1,
    "question": "Ao exercer-se uma força horizontal de 50 N perpendicularmente contra uma parede rígida, que força exerce a parede sobre as mãos do indivíduo?",
    "options": [
      "0 N, porque a parede é fixa e não pode exercer nenhuma força mecânica.",
      "100 N, porque os materiais rígidos duplicam a força aplicada sobre eles.",
      "25 N, porque metade da força dissipa-se sob a forma de som nas fundações.",
      "50 N, orientada perpendicularmente em sentido oposto (para trás contra as mãos)."
    ],
    "correctIndex": 3,
    "explanation": "Pela 3ª Lei de Newton, a parede exerce exatamente a mesma força de 50 N em sentido contrário sobre as mãos de quem a empurra.",
    "distractorAnalysis": [
      "Está incorreta: Uma superfície estática exerce força de reação de contacto com a mesma intensidade da ação.",
      "Está incorreta: A rigidez do material não duplica forças; a conservação do par ação-reação mantém intensidade idêntica.",
      "Está incorreta: Não há redução de força para metade; a força de contacto estático preserva o valor de 50 N."
    ],
    "nursingApplication": "Ilustra a pressão que as mãos sentem ao empurrar portas pesadas ou estruturas hospitalares."
  },
  {
    "id": 1156,
    "topicId": 1,
    "question": "Numa colisão frontal entre uma ambulância de 3000 kg e um carrinho de transporte de 30 kg, como se comparam as intensidades das forças trocadas entre eles no impacto?",
    "options": [
      "As forças são rigorosamente iguais em intensidade, pois constituem um par de ação-reação da 3ª Lei de Newton.",
      "A ambulância exerce uma força cem vezes maior sobre o carrinho do que o carrinho sobre a ambulância.",
      "O carrinho não exerce qualquer força sobre a ambulância por ter massa muito menor.",
      "A força do carrinho depende apenas da velocidade da ambulância dividida pelo quadrado do tempo."
    ],
    "correctIndex": 0,
    "explanation": "Pela 3ª Lei de Newton, a intensidade da força que A exerce em B é sempre exatamente igual à que B exerce em A, independentemente das massas.",
    "distractorAnalysis": [
      "Está incorreta: Embora o carrinho sofra uma aceleração muito maior (a = F/m), as forças trocadas têm exatamente o mesmo módulo.",
      "Está incorreta: Mesmo um corpo de pequena massa exerce uma força de reação de intensidade idêntica à da ação recebida.",
      "Está incorreta: A força é uma interação mútua simultânea com intensidades estritamente iguais nos dois corpos."
    ],
    "nursingApplication": "Mostra que corpos de massas diferentes experimentam forças de igual intensidade durante uma colisão mútua."
  },
  {
    "id": 1157,
    "topicId": 1,
    "question": "Quando uma caixa de soros de 10 kg repousa sobre uma mesa horizontal, que força a caixa exerce sobre a mesa?",
    "options": [
      "Uma força horizontal de atrito cinético com intensidade infinita.",
      "Uma força de contacto dirigida verticalmente para baixo com intensidade igual a 98 N (o seu peso).",
      "Nenhuma força, porque a caixa está parada e objetos parados perdem a capacidade de exercer força.",
      "Uma força ascensional de 980 N direcionada para o teto da sala."
    ],
    "correctIndex": 1,
    "explanation": "A caixa pressiona a mesa com uma força de contacto descendente de intensidade igual ao seu peso (P = 10 kg · 9,8 m/s² = 98 N).",
    "distractorAnalysis": [
      "Está incorreta: A caixa está em repouso estático, logo não há atrito cinético em movimento horizontal.",
      "Está incorreta: Mesmo em repouso, a gravidade atua sobre a massa da caixa, fazendo-a exercer força de compressão sobre o apoio.",
      "Está incorreta: A força exercida pela caixa sobre a mesa é descendente (para baixo), não ascensional."
    ],
    "nursingApplication": "Permite dimensionar prateleiras e suportes hospitalares em função da carga que sustentam."
  },
  {
    "id": 1158,
    "topicId": 1,
    "question": "Qual das seguintes afirmações sobre a 3ª Lei de Newton é cientificamente VERDADEIRA?",
    "options": [
      "A força de ação ocorre primeiro e a força de reação surge sempre com meio segundo de atraso.",
      "A 3ª Lei de Newton só se aplica a corpos que se encontrem em queda livre no vácuo.",
      "A força de ação e a força de reação ocorrem rigorosamente ao mesmo tempo (são instantâneas e simultâneas).",
      "As forças do par ação-reação cancelam-se mutuamente na 2ª Lei de Newton de um corpo isolado."
    ],
    "correctIndex": 2,
    "explanation": "Ação e reação são simultâneas: nenhuma antecede a outra no tempo da interação física.",
    "distractorAnalysis": [
      "Está incorreta: Não existe atraso temporal; a interação de contacto é rigorosamente simultânea.",
      "Está incorreta: A 3ª Lei aplica-se a todas as interações de contacto e de campo da física clássica.",
      "Está incorreta: Apenas forças que atuam no mesmo corpo se podem cancelar; ação e reação atuam em corpos diferentes."
    ],
    "nursingApplication": "Reconhecer a simultaneidade das forças apoia a compreensão da dinâmica do movimento e transferências."
  },
  {
    "id": 1159,
    "topicId": 1,
    "question": "Como se define um sistema de 'Forças Concorrentes' na estática dos corpos materiais?",
    "options": [
      "Um sistema de forças que atuam exclusivamente em linhas retas estritamente paralelas que nunca se cruzam.",
      "Um conjunto de forças que atuam em dias diferentes da semana sobre corpos independentes.",
      "Forças que anulam a temperatura absoluta de qualquer material condutor elétrico.",
      "Um sistema de forças cujas linhas de ação se intersetam todas num mesmo ponto comum no espaço."
    ],
    "correctIndex": 3,
    "explanation": "Forças concorrentes têm retas de suporte que convergem ou divergem a partir de um único ponto comum.",
    "distractorAnalysis": [
      "Está incorreta: Forças com retas paralelas que não se cruzam são forças paralelas, não concorrentes.",
      "Está incorreta: O conceito refere-se à geometria espacial das retas de ação de forças simultâneas.",
      "Está incorreta: Forças mecânicas da estática não anulam temperaturas térmicas de materiais."
    ],
    "nursingApplication": "Exemplo das linhas de tração exercidas por múltiplos feixes musculares convergentes num mesmo tendão de inserção."
  },
  {
    "id": 1160,
    "topicId": 1,
    "question": "Duas forças concorrentes perpendiculares entre si, com intensidades de 30 N e 40 N, atuam sobre o mesmo ponto material. Qual é a intensidade da força resultante?",
    "options": [
      "50 N, calculada pela regra do paralelogramo através do Teorema de Pitágoras.",
      "70 N, obtida pela simples soma escalar aritmética direta das duas intensidades.",
      "10 N, obtida pela subtração direta das duas forças como se fossem colineares opostas.",
      "1200 N, obtida pela multiplicação direta das intensidades no plano."
    ],
    "correctIndex": 0,
    "explanation": "Como as forças são perpendiculares (θ = 90°), Fr = √(F1² + F2²) = √(30² + 40²) = √(900 + 1600) = √2500 = 50 N.",
    "distractorAnalysis": [
      "Está incorreta: A soma aritmética direta (30 + 40 = 70 N) só é válida para forças colineares com o mesmo sentido.",
      "Está incorreta: A subtração (40 - 30 = 10 N) só é válida para forças colineares com sentidos opostos.",
      "Está incorreta: Multiplicar as forças não fornece a resultante vetorial de forças concorrentes."
    ],
    "nursingApplication": "Fundamental para calcular a tração resultante em sistemas de suspensão ortopédica e tração esquelética."
  },
  {
    "id": 1161,
    "topicId": 1,
    "question": "Qual é o princípio fundamental expresso pela 3ª Lei de Newton?",
    "options": [
      "A força de reação é sempre aplicada no mesmo corpo que a ação, anulando imediatamente todo o movimento.",
      "Sempre que um corpo A exerce uma força sobre um corpo B, o corpo B exerce simultaneamente sobre o corpo A uma força de igual intensidade e direção, mas em sentido oposto.",
      "A força de ação tem sempre o dobro da intensidade da força de reação em qualquer colisão física.",
      "As forças de reação só existem quando os corpos se movem com velocidade superior à da luz no vácuo."
    ],
    "correctIndex": 1,
    "explanation": "A 3ª Lei estabelece o par ação-reação (F_A->B = -F_B->A): intensidades iguais, sentidos opostos, atuando em corpos distintos.",
    "distractorAnalysis": [
      "Está incorreta: Ação e reação atuam em corpos diferentes; se atuassem no mesmo corpo, anulariam o movimento do corpo.",
      "Está incorreta: As forças do par têm rigorosamente a mesma intensidade matemática, nunca intensidade dupla.",
      "Está incorreta: A 3ª Lei aplica-se a todas as interações da mecânica clássica a qualquer velocidade."
    ],
    "nursingApplication": "Ao empurrar uma maca para a frente, as rodas e o solo exercem força de reação nos pés do operador."
  },
  {
    "id": 1162,
    "topicId": 1,
    "question": "Porque é que as forças do par ação-reação NUNCA se anulam mutuamente?",
    "options": [
      "Porque têm intensidades diferentes e não se podem subtrair matematicamente.",
      "Porque ocorrem em momentos temporais diferentes, com um atraso de vários segundos.",
      "Porque atuam sempre em corpos diferentes e nunca sobre o mesmo corpo.",
      "Porque uma é uma grandeza vetorial e a outra é uma grandeza puramente escalar."
    ],
    "correctIndex": 2,
    "explanation": "O equilíbrio de um corpo requer que as forças atuem sobre o mesmo corpo. Ação e reação atuam em corpos distintos, logo não se anulam.",
    "distractorAnalysis": [
      "Está incorreta: As forças do par ação-reação têm exatamente o mesmo módulo (intensidade).",
      "Está incorreta: Ação e reação são absolutamente simultâneas; não existe atraso temporal entre elas.",
      "Está incorreta: Ambas as forças do par são grandezas estritamente vetoriais expressas em Newtons."
    ],
    "nursingApplication": "Permite entender que a força exercida sobre um objeto é independente das forças que o objeto exerce noutros."
  },
  {
    "id": 1163,
    "topicId": 1,
    "question": "Durante a marcha humana, ao empurrar o solo para trás com o pé de apoio na fase de impulsão, que componente da força exercida pelo solo projeta o corpo para a frente?",
    "options": [
      "A força normal perpendicular de sustentação dirigida verticalmente para o centro da Terra.",
      "A força gravitacional atrativa exercida pela Lua sobre a musculatura do membro inferior.",
      "A pressão hidrostática do líquido sinovial que escapa da cápsula articular.",
      "A componente tangencial de atrito estático da Força de Reação do Solo (FRS), orientada horizontalmente para a frente."
    ],
    "correctIndex": 3,
    "explanation": "Pela 3ª Lei de Newton, ao exercer uma força tangencial para trás no solo, este reage através do atrito estático com uma força horizontal para a frente (propulsão).",
    "distractorAnalysis": [
      "Está incorreta: A força normal é vertical e atua na sustentação do peso contra a gravidade, não impulsionando horizontalmente para a frente.",
      "Está incorreta: A gravidade lunar é desprezável na propulsão terrestre da locomoção humana.",
      "Está incorreta: A pressão sinovial é interna à articulação e não produz propulsão de translação com o solo."
    ],
    "nursingApplication": "Fundamento biomecânico da marcha humana ao caminhar pelos corredores hospitalares."
  },
  {
    "id": 1164,
    "topicId": 1,
    "question": "A força normal (N) exercida pelo colchão de uma cama sobre uma pessoa deitada é o par de ação-reação do peso dessa pessoa?",
    "options": [
      "Não, porque o peso e a força normal atuam sobre o mesmo corpo (a pessoa), enquanto os pares ação-reação atuam em corpos diferentes.",
      "Sim, porque são forças com a mesma intensidade e sentidos opostos que atuam na mesma linha de ação.",
      "Sim, porque toda a força que atua na vertical forma automaticamente um par com a gravidade.",
      "Não, porque a força normal tem sempre uma intensidade dez vezes superior ao peso corporal."
    ],
    "correctIndex": 0,
    "explanation": "O par de ação-reação do peso (Terra atrai pessoa) é a atração gravitacional que a pessoa exerce sobre a Terra. A normal e o peso atuam ambos na pessoa.",
    "distractorAnalysis": [
      "Está incorreta: Ter a mesma intensidade e sentidos opostos é condição de equilíbrio de translação da pessoa, mas não define par ação-reação mútuo.",
      "Está incorreta: A direção vertical não implica que as forças pertençam ao mesmo par da 3ª Lei.",
      "Está incorreta: Numa superfície horizontal estática em repouso, a normal tem intensidade igual ao peso (N = P)."
    ],
    "nursingApplication": "Conceito físico essencial para o desenho de superfícies de suporte e colchões adequados."
  },
  {
    "id": 1165,
    "topicId": 1,
    "question": "Ao exercer-se uma força horizontal de 50 N perpendicularmente contra uma parede rígida, que força exerce a parede sobre as mãos do indivíduo?",
    "options": [
      "0 N, porque a parede é fixa e não pode exercer nenhuma força mecânica.",
      "50 N, orientada perpendicularmente em sentido oposto (para trás contra as mãos).",
      "100 N, porque os materiais rígidos duplicam a força aplicada sobre eles.",
      "25 N, porque metade da força dissipa-se sob a forma de som nas fundações."
    ],
    "correctIndex": 1,
    "explanation": "Pela 3ª Lei de Newton, a parede exerce exatamente a mesma força de 50 N em sentido contrário sobre as mãos de quem a empurra.",
    "distractorAnalysis": [
      "Está incorreta: Uma superfície estática exerce força de reação de contacto com a mesma intensidade da ação.",
      "Está incorreta: A rigidez do material não duplica forças; a conservação do par ação-reação mantém intensidade idêntica.",
      "Está incorreta: Não há redução de força para metade; a força de contacto estático preserva o valor de 50 N."
    ],
    "nursingApplication": "Ilustra a pressão que as mãos sentem ao empurrar portas pesadas ou estruturas hospitalares."
  },
  {
    "id": 1166,
    "topicId": 1,
    "question": "Numa colisão frontal entre uma ambulância de 3000 kg e um carrinho de transporte de 30 kg, como se comparam as intensidades das forças trocadas entre eles no impacto?",
    "options": [
      "A ambulância exerce uma força cem vezes maior sobre o carrinho do que o carrinho sobre a ambulância.",
      "O carrinho não exerce qualquer força sobre a ambulância por ter massa muito menor.",
      "As forças são rigorosamente iguais em intensidade, pois constituem um par de ação-reação da 3ª Lei de Newton.",
      "A força do carrinho depende apenas da velocidade da ambulância dividida pelo quadrado do tempo."
    ],
    "correctIndex": 2,
    "explanation": "Pela 3ª Lei de Newton, a intensidade da força que A exerce em B é sempre exatamente igual à que B exerce em A, independentemente das massas.",
    "distractorAnalysis": [
      "Está incorreta: Embora o carrinho sofra uma aceleração muito maior (a = F/m), as forças trocadas têm exatamente o mesmo módulo.",
      "Está incorreta: Mesmo um corpo de pequena massa exerce uma força de reação de intensidade idêntica à da ação recebida.",
      "Está incorreta: A força é uma interação mútua simultânea com intensidades estritamente iguais nos dois corpos."
    ],
    "nursingApplication": "Mostra que corpos de massas diferentes experimentam forças de igual intensidade durante uma colisão mútua."
  },
  {
    "id": 1167,
    "topicId": 1,
    "question": "Quando uma caixa de soros de 10 kg repousa sobre uma mesa horizontal, que força a caixa exerce sobre a mesa?",
    "options": [
      "Uma força horizontal de atrito cinético com intensidade infinita.",
      "Nenhuma força, porque a caixa está parada e objetos parados perdem a capacidade de exercer força.",
      "Uma força ascensional de 980 N direcionada para o teto da sala.",
      "Uma força de contacto dirigida verticalmente para baixo com intensidade igual a 98 N (o seu peso)."
    ],
    "correctIndex": 3,
    "explanation": "A caixa pressiona a mesa com uma força de contacto descendente de intensidade igual ao seu peso (P = 10 kg · 9,8 m/s² = 98 N).",
    "distractorAnalysis": [
      "Está incorreta: A caixa está em repouso estático, logo não há atrito cinético em movimento horizontal.",
      "Está incorreta: Mesmo em repouso, a gravidade atua sobre a massa da caixa, fazendo-a exercer força de compressão sobre o apoio.",
      "Está incorreta: A força exercida pela caixa sobre a mesa é descendente (para baixo), não ascensional."
    ],
    "nursingApplication": "Permite dimensionar prateleiras e suportes hospitalares em função da carga que sustentam."
  },
  {
    "id": 1168,
    "topicId": 1,
    "question": "Qual das seguintes afirmações sobre a 3ª Lei de Newton é cientificamente VERDADEIRA?",
    "options": [
      "A força de ação e a força de reação ocorrem rigorosamente ao mesmo tempo (são instantâneas e simultâneas).",
      "A força de ação ocorre primeiro e a força de reação surge sempre com meio segundo de atraso.",
      "A 3ª Lei de Newton só se aplica a corpos que se encontrem em queda livre no vácuo.",
      "As forças do par ação-reação cancelam-se mutuamente na 2ª Lei de Newton de um corpo isolado."
    ],
    "correctIndex": 0,
    "explanation": "Ação e reação são simultâneas: nenhuma antecede a outra no tempo da interação física.",
    "distractorAnalysis": [
      "Está incorreta: Não existe atraso temporal; a interação de contacto é rigorosamente simultânea.",
      "Está incorreta: A 3ª Lei aplica-se a todas as interações de contacto e de campo da física clássica.",
      "Está incorreta: Apenas forças que atuam no mesmo corpo se podem cancelar; ação e reação atuam em corpos diferentes."
    ],
    "nursingApplication": "Reconhecer a simultaneidade das forças apoia a compreensão da dinâmica do movimento e transferências."
  },
  {
    "id": 1169,
    "topicId": 1,
    "question": "Como se define um sistema de 'Forças Concorrentes' na estática dos corpos materiais?",
    "options": [
      "Um sistema de forças que atuam exclusivamente em linhas retas estritamente paralelas que nunca se cruzam.",
      "Um sistema de forças cujas linhas de ação se intersetam todas num mesmo ponto comum no espaço.",
      "Um conjunto de forças que atuam em dias diferentes da semana sobre corpos independentes.",
      "Forças que anulam a temperatura absoluta de qualquer material condutor elétrico."
    ],
    "correctIndex": 1,
    "explanation": "Forças concorrentes têm retas de suporte que convergem ou divergem a partir de um único ponto comum.",
    "distractorAnalysis": [
      "Está incorreta: Forças com retas paralelas que não se cruzam são forças paralelas, não concorrentes.",
      "Está incorreta: O conceito refere-se à geometria espacial das retas de ação de forças simultâneas.",
      "Está incorreta: Forças mecânicas da estática não anulam temperaturas térmicas de materiais."
    ],
    "nursingApplication": "Exemplo das linhas de tração exercidas por múltiplos feixes musculares convergentes num mesmo tendão de inserção."
  },
  {
    "id": 1170,
    "topicId": 1,
    "question": "Duas forças concorrentes perpendiculares entre si, com intensidades de 30 N e 40 N, atuam sobre o mesmo ponto material. Qual é a intensidade da força resultante?",
    "options": [
      "70 N, obtida pela simples soma escalar aritmética direta das duas intensidades.",
      "10 N, obtida pela subtração direta das duas forças como se fossem colineares opostas.",
      "50 N, calculada pela regra do paralelogramo através do Teorema de Pitágoras.",
      "1200 N, obtida pela multiplicação direta das intensidades no plano."
    ],
    "correctIndex": 2,
    "explanation": "Como as forças são perpendiculares (θ = 90°), Fr = √(F1² + F2²) = √(30² + 40²) = √(900 + 1600) = √2500 = 50 N.",
    "distractorAnalysis": [
      "Está incorreta: A soma aritmética direta (30 + 40 = 70 N) só é válida para forças colineares com o mesmo sentido.",
      "Está incorreta: A subtração (40 - 30 = 10 N) só é válida para forças colineares com sentidos opostos.",
      "Está incorreta: Multiplicar as forças não fornece a resultante vetorial de forças concorrentes."
    ],
    "nursingApplication": "Fundamental para calcular a tração resultante em sistemas de suspensão ortopédica e tração esquelética."
  },
  {
    "id": 1171,
    "topicId": 1,
    "question": "Qual é o princípio fundamental expresso pela 3ª Lei de Newton?",
    "options": [
      "A força de reação é sempre aplicada no mesmo corpo que a ação, anulando imediatamente todo o movimento.",
      "A força de ação tem sempre o dobro da intensidade da força de reação em qualquer colisão física.",
      "As forças de reação só existem quando os corpos se movem com velocidade superior à da luz no vácuo.",
      "Sempre que um corpo A exerce uma força sobre um corpo B, o corpo B exerce simultaneamente sobre o corpo A uma força de igual intensidade e direção, mas em sentido oposto."
    ],
    "correctIndex": 3,
    "explanation": "A 3ª Lei estabelece o par ação-reação (F_A->B = -F_B->A): intensidades iguais, sentidos opostos, atuando em corpos distintos.",
    "distractorAnalysis": [
      "Está incorreta: Ação e reação atuam em corpos diferentes; se atuassem no mesmo corpo, anulariam o movimento do corpo.",
      "Está incorreta: As forças do par têm rigorosamente a mesma intensidade matemática, nunca intensidade dupla.",
      "Está incorreta: A 3ª Lei aplica-se a todas as interações da mecânica clássica a qualquer velocidade."
    ],
    "nursingApplication": "Ao empurrar uma maca para a frente, as rodas e o solo exercem força de reação nos pés do operador."
  },
  {
    "id": 1172,
    "topicId": 1,
    "question": "Porque é que as forças do par ação-reação NUNCA se anulam mutuamente?",
    "options": [
      "Porque atuam sempre em corpos diferentes e nunca sobre o mesmo corpo.",
      "Porque têm intensidades diferentes e não se podem subtrair matematicamente.",
      "Porque ocorrem em momentos temporais diferentes, com um atraso de vários segundos.",
      "Porque uma é uma grandeza vetorial e a outra é uma grandeza puramente escalar."
    ],
    "correctIndex": 0,
    "explanation": "O equilíbrio de um corpo requer que as forças atuem sobre o mesmo corpo. Ação e reação atuam em corpos distintos, logo não se anulam.",
    "distractorAnalysis": [
      "Está incorreta: As forças do par ação-reação têm exatamente o mesmo módulo (intensidade).",
      "Está incorreta: Ação e reação são absolutamente simultâneas; não existe atraso temporal entre elas.",
      "Está incorreta: Ambas as forças do par são grandezas estritamente vetoriais expressas em Newtons."
    ],
    "nursingApplication": "Permite entender que a força exercida sobre um objeto é independente das forças que o objeto exerce noutros."
  },
  {
    "id": 1173,
    "topicId": 1,
    "question": "Durante a marcha humana, ao empurrar o solo para trás com o pé de apoio na fase de impulsão, que componente da força exercida pelo solo projeta o corpo para a frente?",
    "options": [
      "A força normal perpendicular de sustentação dirigida verticalmente para o centro da Terra.",
      "A componente tangencial de atrito estático da Força de Reação do Solo (FRS), orientada horizontalmente para a frente.",
      "A força gravitacional atrativa exercida pela Lua sobre a musculatura do membro inferior.",
      "A pressão hidrostática do líquido sinovial que escapa da cápsula articular."
    ],
    "correctIndex": 1,
    "explanation": "Pela 3ª Lei de Newton, ao exercer uma força tangencial para trás no solo, este reage através do atrito estático com uma força horizontal para a frente (propulsão).",
    "distractorAnalysis": [
      "Está incorreta: A força normal é vertical e atua na sustentação do peso contra a gravidade, não impulsionando horizontalmente para a frente.",
      "Está incorreta: A gravidade lunar é desprezável na propulsão terrestre da locomoção humana.",
      "Está incorreta: A pressão sinovial é interna à articulação e não produz propulsão de translação com o solo."
    ],
    "nursingApplication": "Fundamento biomecânico da marcha humana ao caminhar pelos corredores hospitalares."
  },
  {
    "id": 1174,
    "topicId": 1,
    "question": "A força normal (N) exercida pelo colchão de uma cama sobre uma pessoa deitada é o par de ação-reação do peso dessa pessoa?",
    "options": [
      "Sim, porque são forças com a mesma intensidade e sentidos opostos que atuam na mesma linha de ação.",
      "Sim, porque toda a força que atua na vertical forma automaticamente um par com a gravidade.",
      "Não, porque o peso e a força normal atuam sobre o mesmo corpo (a pessoa), enquanto os pares ação-reação atuam em corpos diferentes.",
      "Não, porque a força normal tem sempre uma intensidade dez vezes superior ao peso corporal."
    ],
    "correctIndex": 2,
    "explanation": "O par de ação-reação do peso (Terra atrai pessoa) é a atração gravitacional que a pessoa exerce sobre a Terra. A normal e o peso atuam ambos na pessoa.",
    "distractorAnalysis": [
      "Está incorreta: Ter a mesma intensidade e sentidos opostos é condição de equilíbrio de translação da pessoa, mas não define par ação-reação mútuo.",
      "Está incorreta: A direção vertical não implica que as forças pertençam ao mesmo par da 3ª Lei.",
      "Está incorreta: Numa superfície horizontal estática em repouso, a normal tem intensidade igual ao peso (N = P)."
    ],
    "nursingApplication": "Conceito físico essencial para o desenho de superfícies de suporte e colchões adequados."
  },
  {
    "id": 1175,
    "topicId": 1,
    "question": "Ao exercer-se uma força horizontal de 50 N perpendicularmente contra uma parede rígida, que força exerce a parede sobre as mãos do indivíduo?",
    "options": [
      "0 N, porque a parede é fixa e não pode exercer nenhuma força mecânica.",
      "100 N, porque os materiais rígidos duplicam a força aplicada sobre eles.",
      "25 N, porque metade da força dissipa-se sob a forma de som nas fundações.",
      "50 N, orientada perpendicularmente em sentido oposto (para trás contra as mãos)."
    ],
    "correctIndex": 3,
    "explanation": "Pela 3ª Lei de Newton, a parede exerce exatamente a mesma força de 50 N em sentido contrário sobre as mãos de quem a empurra.",
    "distractorAnalysis": [
      "Está incorreta: Uma superfície estática exerce força de reação de contacto com a mesma intensidade da ação.",
      "Está incorreta: A rigidez do material não duplica forças; a conservação do par ação-reação mantém intensidade idêntica.",
      "Está incorreta: Não há redução de força para metade; a força de contacto estático preserva o valor de 50 N."
    ],
    "nursingApplication": "Ilustra a pressão que as mãos sentem ao empurrar portas pesadas ou estruturas hospitalares."
  },
  {
    "id": 1176,
    "topicId": 1,
    "question": "Numa colisão frontal entre uma ambulância de 3000 kg e um carrinho de transporte de 30 kg, como se comparam as intensidades das forças trocadas entre eles no impacto?",
    "options": [
      "As forças são rigorosamente iguais em intensidade, pois constituem um par de ação-reação da 3ª Lei de Newton.",
      "A ambulância exerce uma força cem vezes maior sobre o carrinho do que o carrinho sobre a ambulância.",
      "O carrinho não exerce qualquer força sobre a ambulância por ter massa muito menor.",
      "A força do carrinho depende apenas da velocidade da ambulância dividida pelo quadrado do tempo."
    ],
    "correctIndex": 0,
    "explanation": "Pela 3ª Lei de Newton, a intensidade da força que A exerce em B é sempre exatamente igual à que B exerce em A, independentemente das massas.",
    "distractorAnalysis": [
      "Está incorreta: Embora o carrinho sofra uma aceleração muito maior (a = F/m), as forças trocadas têm exatamente o mesmo módulo.",
      "Está incorreta: Mesmo um corpo de pequena massa exerce uma força de reação de intensidade idêntica à da ação recebida.",
      "Está incorreta: A força é uma interação mútua simultânea com intensidades estritamente iguais nos dois corpos."
    ],
    "nursingApplication": "Mostra que corpos de massas diferentes experimentam forças de igual intensidade durante uma colisão mútua."
  },
  {
    "id": 1177,
    "topicId": 1,
    "question": "Quando uma caixa de soros de 10 kg repousa sobre uma mesa horizontal, que força a caixa exerce sobre a mesa?",
    "options": [
      "Uma força horizontal de atrito cinético com intensidade infinita.",
      "Uma força de contacto dirigida verticalmente para baixo com intensidade igual a 98 N (o seu peso).",
      "Nenhuma força, porque a caixa está parada e objetos parados perdem a capacidade de exercer força.",
      "Uma força ascensional de 980 N direcionada para o teto da sala."
    ],
    "correctIndex": 1,
    "explanation": "A caixa pressiona a mesa com uma força de contacto descendente de intensidade igual ao seu peso (P = 10 kg · 9,8 m/s² = 98 N).",
    "distractorAnalysis": [
      "Está incorreta: A caixa está em repouso estático, logo não há atrito cinético em movimento horizontal.",
      "Está incorreta: Mesmo em repouso, a gravidade atua sobre a massa da caixa, fazendo-a exercer força de compressão sobre o apoio.",
      "Está incorreta: A força exercida pela caixa sobre a mesa é descendente (para baixo), não ascensional."
    ],
    "nursingApplication": "Permite dimensionar prateleiras e suportes hospitalares em função da carga que sustentam."
  },
  {
    "id": 1178,
    "topicId": 1,
    "question": "Qual das seguintes afirmações sobre a 3ª Lei de Newton é cientificamente VERDADEIRA?",
    "options": [
      "A força de ação ocorre primeiro e a força de reação surge sempre com meio segundo de atraso.",
      "A 3ª Lei de Newton só se aplica a corpos que se encontrem em queda livre no vácuo.",
      "A força de ação e a força de reação ocorrem rigorosamente ao mesmo tempo (são instantâneas e simultâneas).",
      "As forças do par ação-reação cancelam-se mutuamente na 2ª Lei de Newton de um corpo isolado."
    ],
    "correctIndex": 2,
    "explanation": "Ação e reação são simultâneas: nenhuma antecede a outra no tempo da interação física.",
    "distractorAnalysis": [
      "Está incorreta: Não existe atraso temporal; a interação de contacto é rigorosamente simultânea.",
      "Está incorreta: A 3ª Lei aplica-se a todas as interações de contacto e de campo da física clássica.",
      "Está incorreta: Apenas forças que atuam no mesmo corpo se podem cancelar; ação e reação atuam em corpos diferentes."
    ],
    "nursingApplication": "Reconhecer a simultaneidade das forças apoia a compreensão da dinâmica do movimento e transferências."
  },
  {
    "id": 1179,
    "topicId": 1,
    "question": "Como se define um sistema de 'Forças Concorrentes' na estática dos corpos materiais?",
    "options": [
      "Um sistema de forças que atuam exclusivamente em linhas retas estritamente paralelas que nunca se cruzam.",
      "Um conjunto de forças que atuam em dias diferentes da semana sobre corpos independentes.",
      "Forças que anulam a temperatura absoluta de qualquer material condutor elétrico.",
      "Um sistema de forças cujas linhas de ação se intersetam todas num mesmo ponto comum no espaço."
    ],
    "correctIndex": 3,
    "explanation": "Forças concorrentes têm retas de suporte que convergem ou divergem a partir de um único ponto comum.",
    "distractorAnalysis": [
      "Está incorreta: Forças com retas paralelas que não se cruzam são forças paralelas, não concorrentes.",
      "Está incorreta: O conceito refere-se à geometria espacial das retas de ação de forças simultâneas.",
      "Está incorreta: Forças mecânicas da estática não anulam temperaturas térmicas de materiais."
    ],
    "nursingApplication": "Exemplo das linhas de tração exercidas por múltiplos feixes musculares convergentes num mesmo tendão de inserção."
  },
  {
    "id": 1180,
    "topicId": 1,
    "question": "Duas forças concorrentes perpendiculares entre si, com intensidades de 30 N e 40 N, atuam sobre o mesmo ponto material. Qual é a intensidade da força resultante?",
    "options": [
      "50 N, calculada pela regra do paralelogramo através do Teorema de Pitágoras.",
      "70 N, obtida pela simples soma escalar aritmética direta das duas intensidades.",
      "10 N, obtida pela subtração direta das duas forças como se fossem colineares opostas.",
      "1200 N, obtida pela multiplicação direta das intensidades no plano."
    ],
    "correctIndex": 0,
    "explanation": "Como as forças são perpendiculares (θ = 90°), Fr = √(F1² + F2²) = √(30² + 40²) = √(900 + 1600) = √2500 = 50 N.",
    "distractorAnalysis": [
      "Está incorreta: A soma aritmética direta (30 + 40 = 70 N) só é válida para forças colineares com o mesmo sentido.",
      "Está incorreta: A subtração (40 - 30 = 10 N) só é válida para forças colineares com sentidos opostos.",
      "Está incorreta: Multiplicar as forças não fornece a resultante vetorial de forças concorrentes."
    ],
    "nursingApplication": "Fundamental para calcular a tração resultante em sistemas de suspensão ortopédica e tração esquelética."
  },
  {
    "id": 1181,
    "topicId": 1,
    "question": "Qual é o princípio fundamental expresso pela 3ª Lei de Newton?",
    "options": [
      "A força de reação é sempre aplicada no mesmo corpo que a ação, anulando imediatamente todo o movimento.",
      "Sempre que um corpo A exerce uma força sobre um corpo B, o corpo B exerce simultaneamente sobre o corpo A uma força de igual intensidade e direção, mas em sentido oposto.",
      "A força de ação tem sempre o dobro da intensidade da força de reação em qualquer colisão física.",
      "As forças de reação só existem quando os corpos se movem com velocidade superior à da luz no vácuo."
    ],
    "correctIndex": 1,
    "explanation": "A 3ª Lei estabelece o par ação-reação (F_A->B = -F_B->A): intensidades iguais, sentidos opostos, atuando em corpos distintos.",
    "distractorAnalysis": [
      "Está incorreta: Ação e reação atuam em corpos diferentes; se atuassem no mesmo corpo, anulariam o movimento do corpo.",
      "Está incorreta: As forças do par têm rigorosamente a mesma intensidade matemática, nunca intensidade dupla.",
      "Está incorreta: A 3ª Lei aplica-se a todas as interações da mecânica clássica a qualquer velocidade."
    ],
    "nursingApplication": "Ao empurrar uma maca para a frente, as rodas e o solo exercem força de reação nos pés do operador."
  },
  {
    "id": 1182,
    "topicId": 1,
    "question": "Porque é que as forças do par ação-reação NUNCA se anulam mutuamente?",
    "options": [
      "Porque têm intensidades diferentes e não se podem subtrair matematicamente.",
      "Porque ocorrem em momentos temporais diferentes, com um atraso de vários segundos.",
      "Porque atuam sempre em corpos diferentes e nunca sobre o mesmo corpo.",
      "Porque uma é uma grandeza vetorial e a outra é uma grandeza puramente escalar."
    ],
    "correctIndex": 2,
    "explanation": "O equilíbrio de um corpo requer que as forças atuem sobre o mesmo corpo. Ação e reação atuam em corpos distintos, logo não se anulam.",
    "distractorAnalysis": [
      "Está incorreta: As forças do par ação-reação têm exatamente o mesmo módulo (intensidade).",
      "Está incorreta: Ação e reação são absolutamente simultâneas; não existe atraso temporal entre elas.",
      "Está incorreta: Ambas as forças do par são grandezas estritamente vetoriais expressas em Newtons."
    ],
    "nursingApplication": "Permite entender que a força exercida sobre um objeto é independente das forças que o objeto exerce noutros."
  },
  {
    "id": 1183,
    "topicId": 1,
    "question": "Durante a marcha humana, ao empurrar o solo para trás com o pé de apoio na fase de impulsão, que componente da força exercida pelo solo projeta o corpo para a frente?",
    "options": [
      "A força normal perpendicular de sustentação dirigida verticalmente para o centro da Terra.",
      "A força gravitacional atrativa exercida pela Lua sobre a musculatura do membro inferior.",
      "A pressão hidrostática do líquido sinovial que escapa da cápsula articular.",
      "A componente tangencial de atrito estático da Força de Reação do Solo (FRS), orientada horizontalmente para a frente."
    ],
    "correctIndex": 3,
    "explanation": "Pela 3ª Lei de Newton, ao exercer uma força tangencial para trás no solo, este reage através do atrito estático com uma força horizontal para a frente (propulsão).",
    "distractorAnalysis": [
      "Está incorreta: A força normal é vertical e atua na sustentação do peso contra a gravidade, não impulsionando horizontalmente para a frente.",
      "Está incorreta: A gravidade lunar é desprezável na propulsão terrestre da locomoção humana.",
      "Está incorreta: A pressão sinovial é interna à articulação e não produz propulsão de translação com o solo."
    ],
    "nursingApplication": "Fundamento biomecânico da marcha humana ao caminhar pelos corredores hospitalares."
  },
  {
    "id": 1184,
    "topicId": 1,
    "question": "A força normal (N) exercida pelo colchão de uma cama sobre uma pessoa deitada é o par de ação-reação do peso dessa pessoa?",
    "options": [
      "Não, porque o peso e a força normal atuam sobre o mesmo corpo (a pessoa), enquanto os pares ação-reação atuam em corpos diferentes.",
      "Sim, porque são forças com a mesma intensidade e sentidos opostos que atuam na mesma linha de ação.",
      "Sim, porque toda a força que atua na vertical forma automaticamente um par com a gravidade.",
      "Não, porque a força normal tem sempre uma intensidade dez vezes superior ao peso corporal."
    ],
    "correctIndex": 0,
    "explanation": "O par de ação-reação do peso (Terra atrai pessoa) é a atração gravitacional que a pessoa exerce sobre a Terra. A normal e o peso atuam ambos na pessoa.",
    "distractorAnalysis": [
      "Está incorreta: Ter a mesma intensidade e sentidos opostos é condição de equilíbrio de translação da pessoa, mas não define par ação-reação mútuo.",
      "Está incorreta: A direção vertical não implica que as forças pertençam ao mesmo par da 3ª Lei.",
      "Está incorreta: Numa superfície horizontal estática em repouso, a normal tem intensidade igual ao peso (N = P)."
    ],
    "nursingApplication": "Conceito físico essencial para o desenho de superfícies de suporte e colchões adequados."
  },
  {
    "id": 1185,
    "topicId": 1,
    "question": "Ao exercer-se uma força horizontal de 50 N perpendicularmente contra uma parede rígida, que força exerce a parede sobre as mãos do indivíduo?",
    "options": [
      "0 N, porque a parede é fixa e não pode exercer nenhuma força mecânica.",
      "50 N, orientada perpendicularmente em sentido oposto (para trás contra as mãos).",
      "100 N, porque os materiais rígidos duplicam a força aplicada sobre eles.",
      "25 N, porque metade da força dissipa-se sob a forma de som nas fundações."
    ],
    "correctIndex": 1,
    "explanation": "Pela 3ª Lei de Newton, a parede exerce exatamente a mesma força de 50 N em sentido contrário sobre as mãos de quem a empurra.",
    "distractorAnalysis": [
      "Está incorreta: Uma superfície estática exerce força de reação de contacto com a mesma intensidade da ação.",
      "Está incorreta: A rigidez do material não duplica forças; a conservação do par ação-reação mantém intensidade idêntica.",
      "Está incorreta: Não há redução de força para metade; a força de contacto estático preserva o valor de 50 N."
    ],
    "nursingApplication": "Ilustra a pressão que as mãos sentem ao empurrar portas pesadas ou estruturas hospitalares."
  },
  {
    "id": 1186,
    "topicId": 1,
    "question": "Numa colisão frontal entre uma ambulância de 3000 kg e um carrinho de transporte de 30 kg, como se comparam as intensidades das forças trocadas entre eles no impacto?",
    "options": [
      "A ambulância exerce uma força cem vezes maior sobre o carrinho do que o carrinho sobre a ambulância.",
      "O carrinho não exerce qualquer força sobre a ambulância por ter massa muito menor.",
      "As forças são rigorosamente iguais em intensidade, pois constituem um par de ação-reação da 3ª Lei de Newton.",
      "A força do carrinho depende apenas da velocidade da ambulância dividida pelo quadrado do tempo."
    ],
    "correctIndex": 2,
    "explanation": "Pela 3ª Lei de Newton, a intensidade da força que A exerce em B é sempre exatamente igual à que B exerce em A, independentemente das massas.",
    "distractorAnalysis": [
      "Está incorreta: Embora o carrinho sofra uma aceleração muito maior (a = F/m), as forças trocadas têm exatamente o mesmo módulo.",
      "Está incorreta: Mesmo um corpo de pequena massa exerce uma força de reação de intensidade idêntica à da ação recebida.",
      "Está incorreta: A força é uma interação mútua simultânea com intensidades estritamente iguais nos dois corpos."
    ],
    "nursingApplication": "Mostra que corpos de massas diferentes experimentam forças de igual intensidade durante uma colisão mútua."
  },
  {
    "id": 1187,
    "topicId": 1,
    "question": "Quando uma caixa de soros de 10 kg repousa sobre uma mesa horizontal, que força a caixa exerce sobre a mesa?",
    "options": [
      "Uma força horizontal de atrito cinético com intensidade infinita.",
      "Nenhuma força, porque a caixa está parada e objetos parados perdem a capacidade de exercer força.",
      "Uma força ascensional de 980 N direcionada para o teto da sala.",
      "Uma força de contacto dirigida verticalmente para baixo com intensidade igual a 98 N (o seu peso)."
    ],
    "correctIndex": 3,
    "explanation": "A caixa pressiona a mesa com uma força de contacto descendente de intensidade igual ao seu peso (P = 10 kg · 9,8 m/s² = 98 N).",
    "distractorAnalysis": [
      "Está incorreta: A caixa está em repouso estático, logo não há atrito cinético em movimento horizontal.",
      "Está incorreta: Mesmo em repouso, a gravidade atua sobre a massa da caixa, fazendo-a exercer força de compressão sobre o apoio.",
      "Está incorreta: A força exercida pela caixa sobre a mesa é descendente (para baixo), não ascensional."
    ],
    "nursingApplication": "Permite dimensionar prateleiras e suportes hospitalares em função da carga que sustentam."
  },
  {
    "id": 1188,
    "topicId": 1,
    "question": "Qual das seguintes afirmações sobre a 3ª Lei de Newton é cientificamente VERDADEIRA?",
    "options": [
      "A força de ação e a força de reação ocorrem rigorosamente ao mesmo tempo (são instantâneas e simultâneas).",
      "A força de ação ocorre primeiro e a força de reação surge sempre com meio segundo de atraso.",
      "A 3ª Lei de Newton só se aplica a corpos que se encontrem em queda livre no vácuo.",
      "As forças do par ação-reação cancelam-se mutuamente na 2ª Lei de Newton de um corpo isolado."
    ],
    "correctIndex": 0,
    "explanation": "Ação e reação são simultâneas: nenhuma antecede a outra no tempo da interação física.",
    "distractorAnalysis": [
      "Está incorreta: Não existe atraso temporal; a interação de contacto é rigorosamente simultânea.",
      "Está incorreta: A 3ª Lei aplica-se a todas as interações de contacto e de campo da física clássica.",
      "Está incorreta: Apenas forças que atuam no mesmo corpo se podem cancelar; ação e reação atuam em corpos diferentes."
    ],
    "nursingApplication": "Reconhecer a simultaneidade das forças apoia a compreensão da dinâmica do movimento e transferências."
  },
  {
    "id": 1189,
    "topicId": 1,
    "question": "Como se define um sistema de 'Forças Concorrentes' na estática dos corpos materiais?",
    "options": [
      "Um sistema de forças que atuam exclusivamente em linhas retas estritamente paralelas que nunca se cruzam.",
      "Um sistema de forças cujas linhas de ação se intersetam todas num mesmo ponto comum no espaço.",
      "Um conjunto de forças que atuam em dias diferentes da semana sobre corpos independentes.",
      "Forças que anulam a temperatura absoluta de qualquer material condutor elétrico."
    ],
    "correctIndex": 1,
    "explanation": "Forças concorrentes têm retas de suporte que convergem ou divergem a partir de um único ponto comum.",
    "distractorAnalysis": [
      "Está incorreta: Forças com retas paralelas que não se cruzam são forças paralelas, não concorrentes.",
      "Está incorreta: O conceito refere-se à geometria espacial das retas de ação de forças simultâneas.",
      "Está incorreta: Forças mecânicas da estática não anulam temperaturas térmicas de materiais."
    ],
    "nursingApplication": "Exemplo das linhas de tração exercidas por múltiplos feixes musculares convergentes num mesmo tendão de inserção."
  },
  {
    "id": 1190,
    "topicId": 1,
    "question": "Duas forças concorrentes perpendiculares entre si, com intensidades de 30 N e 40 N, atuam sobre o mesmo ponto material. Qual é a intensidade da força resultante?",
    "options": [
      "70 N, obtida pela simples soma escalar aritmética direta das duas intensidades.",
      "10 N, obtida pela subtração direta das duas forças como se fossem colineares opostas.",
      "50 N, calculada pela regra do paralelogramo através do Teorema de Pitágoras.",
      "1200 N, obtida pela multiplicação direta das intensidades no plano."
    ],
    "correctIndex": 2,
    "explanation": "Como as forças são perpendiculares (θ = 90°), Fr = √(F1² + F2²) = √(30² + 40²) = √(900 + 1600) = √2500 = 50 N.",
    "distractorAnalysis": [
      "Está incorreta: A soma aritmética direta (30 + 40 = 70 N) só é válida para forças colineares com o mesmo sentido.",
      "Está incorreta: A subtração (40 - 30 = 10 N) só é válida para forças colineares com sentidos opostos.",
      "Está incorreta: Multiplicar as forças não fornece a resultante vetorial de forças concorrentes."
    ],
    "nursingApplication": "Fundamental para calcular a tração resultante em sistemas de suspensão ortopédica e tração esquelética."
  },
  {
    "id": 1191,
    "topicId": 1,
    "question": "Qual é o princípio fundamental expresso pela 3ª Lei de Newton?",
    "options": [
      "A força de reação é sempre aplicada no mesmo corpo que a ação, anulando imediatamente todo o movimento.",
      "A força de ação tem sempre o dobro da intensidade da força de reação em qualquer colisão física.",
      "As forças de reação só existem quando os corpos se movem com velocidade superior à da luz no vácuo.",
      "Sempre que um corpo A exerce uma força sobre um corpo B, o corpo B exerce simultaneamente sobre o corpo A uma força de igual intensidade e direção, mas em sentido oposto."
    ],
    "correctIndex": 3,
    "explanation": "A 3ª Lei estabelece o par ação-reação (F_A->B = -F_B->A): intensidades iguais, sentidos opostos, atuando em corpos distintos.",
    "distractorAnalysis": [
      "Está incorreta: Ação e reação atuam em corpos diferentes; se atuassem no mesmo corpo, anulariam o movimento do corpo.",
      "Está incorreta: As forças do par têm rigorosamente a mesma intensidade matemática, nunca intensidade dupla.",
      "Está incorreta: A 3ª Lei aplica-se a todas as interações da mecânica clássica a qualquer velocidade."
    ],
    "nursingApplication": "Ao empurrar uma maca para a frente, as rodas e o solo exercem força de reação nos pés do operador."
  },
  {
    "id": 1192,
    "topicId": 1,
    "question": "Porque é que as forças do par ação-reação NUNCA se anulam mutuamente?",
    "options": [
      "Porque atuam sempre em corpos diferentes e nunca sobre o mesmo corpo.",
      "Porque têm intensidades diferentes e não se podem subtrair matematicamente.",
      "Porque ocorrem em momentos temporais diferentes, com um atraso de vários segundos.",
      "Porque uma é uma grandeza vetorial e a outra é uma grandeza puramente escalar."
    ],
    "correctIndex": 0,
    "explanation": "O equilíbrio de um corpo requer que as forças atuem sobre o mesmo corpo. Ação e reação atuam em corpos distintos, logo não se anulam.",
    "distractorAnalysis": [
      "Está incorreta: As forças do par ação-reação têm exatamente o mesmo módulo (intensidade).",
      "Está incorreta: Ação e reação são absolutamente simultâneas; não existe atraso temporal entre elas.",
      "Está incorreta: Ambas as forças do par são grandezas estritamente vetoriais expressas em Newtons."
    ],
    "nursingApplication": "Permite entender que a força exercida sobre um objeto é independente das forças que o objeto exerce noutros."
  },
  {
    "id": 1193,
    "topicId": 1,
    "question": "Durante a marcha humana, ao empurrar o solo para trás com o pé de apoio na fase de impulsão, que componente da força exercida pelo solo projeta o corpo para a frente?",
    "options": [
      "A força normal perpendicular de sustentação dirigida verticalmente para o centro da Terra.",
      "A componente tangencial de atrito estático da Força de Reação do Solo (FRS), orientada horizontalmente para a frente.",
      "A força gravitacional atrativa exercida pela Lua sobre a musculatura do membro inferior.",
      "A pressão hidrostática do líquido sinovial que escapa da cápsula articular."
    ],
    "correctIndex": 1,
    "explanation": "Pela 3ª Lei de Newton, ao exercer uma força tangencial para trás no solo, este reage através do atrito estático com uma força horizontal para a frente (propulsão).",
    "distractorAnalysis": [
      "Está incorreta: A força normal é vertical e atua na sustentação do peso contra a gravidade, não impulsionando horizontalmente para a frente.",
      "Está incorreta: A gravidade lunar é desprezável na propulsão terrestre da locomoção humana.",
      "Está incorreta: A pressão sinovial é interna à articulação e não produz propulsão de translação com o solo."
    ],
    "nursingApplication": "Fundamento biomecânico da marcha humana ao caminhar pelos corredores hospitalares."
  },
  {
    "id": 1194,
    "topicId": 1,
    "question": "A força normal (N) exercida pelo colchão de uma cama sobre uma pessoa deitada é o par de ação-reação do peso dessa pessoa?",
    "options": [
      "Sim, porque são forças com a mesma intensidade e sentidos opostos que atuam na mesma linha de ação.",
      "Sim, porque toda a força que atua na vertical forma automaticamente um par com a gravidade.",
      "Não, porque o peso e a força normal atuam sobre o mesmo corpo (a pessoa), enquanto os pares ação-reação atuam em corpos diferentes.",
      "Não, porque a força normal tem sempre uma intensidade dez vezes superior ao peso corporal."
    ],
    "correctIndex": 2,
    "explanation": "O par de ação-reação do peso (Terra atrai pessoa) é a atração gravitacional que a pessoa exerce sobre a Terra. A normal e o peso atuam ambos na pessoa.",
    "distractorAnalysis": [
      "Está incorreta: Ter a mesma intensidade e sentidos opostos é condição de equilíbrio de translação da pessoa, mas não define par ação-reação mútuo.",
      "Está incorreta: A direção vertical não implica que as forças pertençam ao mesmo par da 3ª Lei.",
      "Está incorreta: Numa superfície horizontal estática em repouso, a normal tem intensidade igual ao peso (N = P)."
    ],
    "nursingApplication": "Conceito físico essencial para o desenho de superfícies de suporte e colchões adequados."
  },
  {
    "id": 1195,
    "topicId": 1,
    "question": "Ao exercer-se uma força horizontal de 50 N perpendicularmente contra uma parede rígida, que força exerce a parede sobre as mãos do indivíduo?",
    "options": [
      "0 N, porque a parede é fixa e não pode exercer nenhuma força mecânica.",
      "100 N, porque os materiais rígidos duplicam a força aplicada sobre eles.",
      "25 N, porque metade da força dissipa-se sob a forma de som nas fundações.",
      "50 N, orientada perpendicularmente em sentido oposto (para trás contra as mãos)."
    ],
    "correctIndex": 3,
    "explanation": "Pela 3ª Lei de Newton, a parede exerce exatamente a mesma força de 50 N em sentido contrário sobre as mãos de quem a empurra.",
    "distractorAnalysis": [
      "Está incorreta: Uma superfície estática exerce força de reação de contacto com a mesma intensidade da ação.",
      "Está incorreta: A rigidez do material não duplica forças; a conservação do par ação-reação mantém intensidade idêntica.",
      "Está incorreta: Não há redução de força para metade; a força de contacto estático preserva o valor de 50 N."
    ],
    "nursingApplication": "Ilustra a pressão que as mãos sentem ao empurrar portas pesadas ou estruturas hospitalares."
  },
  {
    "id": 1196,
    "topicId": 1,
    "question": "Numa colisão frontal entre uma ambulância de 3000 kg e um carrinho de transporte de 30 kg, como se comparam as intensidades das forças trocadas entre eles no impacto?",
    "options": [
      "As forças são rigorosamente iguais em intensidade, pois constituem um par de ação-reação da 3ª Lei de Newton.",
      "A ambulância exerce uma força cem vezes maior sobre o carrinho do que o carrinho sobre a ambulância.",
      "O carrinho não exerce qualquer força sobre a ambulância por ter massa muito menor.",
      "A força do carrinho depende apenas da velocidade da ambulância dividida pelo quadrado do tempo."
    ],
    "correctIndex": 0,
    "explanation": "Pela 3ª Lei de Newton, a intensidade da força que A exerce em B é sempre exatamente igual à que B exerce em A, independentemente das massas.",
    "distractorAnalysis": [
      "Está incorreta: Embora o carrinho sofra uma aceleração muito maior (a = F/m), as forças trocadas têm exatamente o mesmo módulo.",
      "Está incorreta: Mesmo um corpo de pequena massa exerce uma força de reação de intensidade idêntica à da ação recebida.",
      "Está incorreta: A força é uma interação mútua simultânea com intensidades estritamente iguais nos dois corpos."
    ],
    "nursingApplication": "Mostra que corpos de massas diferentes experimentam forças de igual intensidade durante uma colisão mútua."
  },
  {
    "id": 1197,
    "topicId": 1,
    "question": "Quando uma caixa de soros de 10 kg repousa sobre uma mesa horizontal, que força a caixa exerce sobre a mesa?",
    "options": [
      "Uma força horizontal de atrito cinético com intensidade infinita.",
      "Uma força de contacto dirigida verticalmente para baixo com intensidade igual a 98 N (o seu peso).",
      "Nenhuma força, porque a caixa está parada e objetos parados perdem a capacidade de exercer força.",
      "Uma força ascensional de 980 N direcionada para o teto da sala."
    ],
    "correctIndex": 1,
    "explanation": "A caixa pressiona a mesa com uma força de contacto descendente de intensidade igual ao seu peso (P = 10 kg · 9,8 m/s² = 98 N).",
    "distractorAnalysis": [
      "Está incorreta: A caixa está em repouso estático, logo não há atrito cinético em movimento horizontal.",
      "Está incorreta: Mesmo em repouso, a gravidade atua sobre a massa da caixa, fazendo-a exercer força de compressão sobre o apoio.",
      "Está incorreta: A força exercida pela caixa sobre a mesa é descendente (para baixo), não ascensional."
    ],
    "nursingApplication": "Permite dimensionar prateleiras e suportes hospitalares em função da carga que sustentam."
  },
  {
    "id": 1198,
    "topicId": 1,
    "question": "Qual das seguintes afirmações sobre a 3ª Lei de Newton é cientificamente VERDADEIRA?",
    "options": [
      "A força de ação ocorre primeiro e a força de reação surge sempre com meio segundo de atraso.",
      "A 3ª Lei de Newton só se aplica a corpos que se encontrem em queda livre no vácuo.",
      "A força de ação e a força de reação ocorrem rigorosamente ao mesmo tempo (são instantâneas e simultâneas).",
      "As forças do par ação-reação cancelam-se mutuamente na 2ª Lei de Newton de um corpo isolado."
    ],
    "correctIndex": 2,
    "explanation": "Ação e reação são simultâneas: nenhuma antecede a outra no tempo da interação física.",
    "distractorAnalysis": [
      "Está incorreta: Não existe atraso temporal; a interação de contacto é rigorosamente simultânea.",
      "Está incorreta: A 3ª Lei aplica-se a todas as interações de contacto e de campo da física clássica.",
      "Está incorreta: Apenas forças que atuam no mesmo corpo se podem cancelar; ação e reação atuam em corpos diferentes."
    ],
    "nursingApplication": "Reconhecer a simultaneidade das forças apoia a compreensão da dinâmica do movimento e transferências."
  },
  {
    "id": 1199,
    "topicId": 1,
    "question": "Como se define um sistema de 'Forças Concorrentes' na estática dos corpos materiais?",
    "options": [
      "Um sistema de forças que atuam exclusivamente em linhas retas estritamente paralelas que nunca se cruzam.",
      "Um conjunto de forças que atuam em dias diferentes da semana sobre corpos independentes.",
      "Forças que anulam a temperatura absoluta de qualquer material condutor elétrico.",
      "Um sistema de forças cujas linhas de ação se intersetam todas num mesmo ponto comum no espaço."
    ],
    "correctIndex": 3,
    "explanation": "Forças concorrentes têm retas de suporte que convergem ou divergem a partir de um único ponto comum.",
    "distractorAnalysis": [
      "Está incorreta: Forças com retas paralelas que não se cruzam são forças paralelas, não concorrentes.",
      "Está incorreta: O conceito refere-se à geometria espacial das retas de ação de forças simultâneas.",
      "Está incorreta: Forças mecânicas da estática não anulam temperaturas térmicas de materiais."
    ],
    "nursingApplication": "Exemplo das linhas de tração exercidas por múltiplos feixes musculares convergentes num mesmo tendão de inserção."
  },
  {
    "id": 1200,
    "topicId": 1,
    "question": "Duas forças concorrentes perpendiculares entre si, com intensidades de 30 N e 40 N, atuam sobre o mesmo ponto material. Qual é a intensidade da força resultante?",
    "options": [
      "50 N, calculada pela regra do paralelogramo através do Teorema de Pitágoras.",
      "70 N, obtida pela simples soma escalar aritmética direta das duas intensidades.",
      "10 N, obtida pela subtração direta das duas forças como se fossem colineares opostas.",
      "1200 N, obtida pela multiplicação direta das intensidades no plano."
    ],
    "correctIndex": 0,
    "explanation": "Como as forças são perpendiculares (θ = 90°), Fr = √(F1² + F2²) = √(30² + 40²) = √(900 + 1600) = √2500 = 50 N.",
    "distractorAnalysis": [
      "Está incorreta: A soma aritmética direta (30 + 40 = 70 N) só é válida para forças colineares com o mesmo sentido.",
      "Está incorreta: A subtração (40 - 30 = 10 N) só é válida para forças colineares com sentidos opostos.",
      "Está incorreta: Multiplicar as forças não fornece a resultante vetorial de forças concorrentes."
    ],
    "nursingApplication": "Fundamental para calcular a tração resultante em sistemas de suspensão ortopédica e tração esquelética."
  },
  {
    "id": 1201,
    "topicId": 1,
    "question": "Quais são as quatro Forças Fundamentais da Natureza descritas na física?",
    "options": [
      "Força Muscular, Força de Atrito, Força Elástica e Força Centrípeta.",
      "Gravitacional, Eletromagnética, Nuclear Forte e Nuclear Fraca.",
      "Força de Tração, Força de Compressão, Força Normal e Força de Pressão.",
      "Força Térmica, Força Eólica, Força Hidráulica e Força Solar."
    ],
    "correctIndex": 1,
    "explanation": "Todas as forças da natureza derivam destas quatro interações fundamentais da física.",
    "distractorAnalysis": [
      "Está incorreta: Muscular, atrito e elástica são manifestações macroscópicas da força eletromagnética entre átomos.",
      "Está incorreta: Tração, compressão e normal são esforços de contacto que decorrem de interações eletromagnéticas.",
      "Está incorreta: Térmica, eólica e hidráulica são designações macroscópicas de energia ou mecânica de fluidos."
    ],
    "nursingApplication": "Identifica que as forças mecânicas nos tecidos derivam microscopicamente de interações eletromagnéticas."
  },
  {
    "id": 1202,
    "topicId": 1,
    "question": "A Força Normal (N) de contacto entre dois corpos atua sempre em que direção relativamente à superfície de contacto?",
    "options": [
      "Paralela à superfície de contacto na direção do movimento.",
      "Diagonal a quarenta e cinco graus apontando para o centro da Terra.",
      "Perpendicular à superfície de contacto (formando um ângulo de noventa graus com o plano).",
      "Em qualquer direção aleatória que varia a cada segundo."
    ],
    "correctIndex": 2,
    "explanation": "O termo 'normal' em geometria e física significa estritamente ortogonal / perpendicular (90°) à superfície.",
    "distractorAnalysis": [
      "Está incorreta: A força paralela à superfície é a força de atrito, não a força normal.",
      "Está incorreta: A direção não é fixa em 45°; depende da orientação geométrica da superfície de apoio.",
      "Está incorreta: A normal é determinada pela geometria do contacto e não varia de modo aleatório."
    ],
    "nursingApplication": "Crucial para compreender como o colchão distribui a força perpendicular sobre as áreas do corpo."
  },
  {
    "id": 1203,
    "topicId": 1,
    "question": "Como se define a Força de Atrito Estático (Fa_est) entre duas superfícies em contacto?",
    "options": [
      "A força que acelera ativamente os corpos para a frente após o movimento já ter começado.",
      "A força de atrito que atua exclusivamente quando os corpos deslizam a altíssima velocidade.",
      "A atração gravitacional entre as massas dos dois corpos em contacto no vácuo.",
      "A força que se opõe à tendência de início de movimento relativo entre duas superfícies em repouso relativo."
    ],
    "correctIndex": 3,
    "explanation": "O atrito estático impede o deslizamento até ser atingida a força máxima Fa_est_max = μ_est · N.",
    "distractorAnalysis": [
      "Está incorreta: O atrito opõe-se à tendência de movimento e não atua como força propulsora espontânea para a frente.",
      "Está incorreta: O atrito que atua durante o deslizamento relativo em movimento é o atrito cinético, não o estático.",
      "Está incorreta: O atrito decorre das interações microscópicas de contacto, não da atração gravitacional das massas."
    ],
    "nursingApplication": "Explica por que os calçados antiderrapantes impedem escorregadelas em pisos lisos hospitalares."
  },
  {
    "id": 1204,
    "topicId": 1,
    "question": "Como se comparam os coeficientes de atrito estático (μ_est) e cinético (μ_cin) para o mesmo par de materiais?",
    "options": [
      "O coeficiente de atrito estático é sistematicamente superior ao coeficiente de atrito cinético (μ_est > μ_cin).",
      "O coeficiente cinético é dez vezes superior ao estático em todos os sólidos.",
      "Ambos os coeficientes são rigorosamente iguais em todas as superfícies físicas.",
      "O coeficiente estático é sempre zero porque em repouso não existe atrito."
    ],
    "correctIndex": 0,
    "explanation": "Vencer a inércia e rugosidades microscópicas em repouso exige maior força do que manter o deslizamento (μ_est > μ_cin).",
    "distractorAnalysis": [
      "Está incorreta: O atrito cinético é menor que o estático; uma vez em movimento, é mais fácil manter o deslizamento.",
      "Está incorreta: Os coeficientes não são iguais; o estático é comprovadamente superior na grande maioria dos materiais.",
      "Está incorreta: O atrito estático não é zero; atua até ao limiar máximo para impedir o início do movimento."
    ],
    "nursingApplication": "Explica por que custa mais começar a empurrar uma cama parada do que mantê-la a rolar suavemente."
  },
  {
    "id": 1205,
    "topicId": 1,
    "question": "Se um bloco de 100 N repousa sobre um piso horizontal com μ_est = 0,4, qual é a força horizontal mínima para iniciar o movimento?",
    "options": [
      "100 N.",
      "40 N.",
      "250 N.",
      "4 N."
    ],
    "correctIndex": 1,
    "explanation": "A força de atrito estático máxima é Fa_max = μ_est · N = 0,4 · 100 N = 40 N. Para mover, é preciso superar 40 N.",
    "distractorAnalysis": [
      "Está incorreta: 100 N é o valor da força normal (peso), não da força de atrito horizontal de deslizamento.",
      "Está incorreta: 250 N resultaria de dividir 100 N por 0,4, o que está matematicamente incorreto.",
      "Está incorreta: 4 N resultaria de multiplicar por 0,04 em vez do coeficiente 0,4 dado."
    ],
    "nursingApplication": "Permite calcular o esforço horizontal necessário para vencer a resistência inicial de um equipamento."
  },
  {
    "id": 1206,
    "topicId": 1,
    "question": "Uma caixa é puxada e desliza sobre o chão com velocidade constante. Que força de atrito atua sobre ela durante o deslizamento?",
    "options": [
      "Força de atrito estático máximo.",
      "Força nuclear forte.",
      "Força de atrito cinético (ou dinâmico).",
      "Força de gravitação universal pura."
    ],
    "correctIndex": 2,
    "explanation": "Quando existe movimento relativo e deslizamento entre as superfícies, a força de atrito atuante é a cinética (Fa = μ_cin · N).",
    "distractorAnalysis": [
      "Está incorreta: O atrito estático atua apenas enquanto não há deslizamento entre as superfícies em repouso relativo.",
      "Está incorreta: Forças nucleares atuam exclusivamente no interior dos núcleos atómicos, a distâncias subatómicas.",
      "Está incorreta: A gravitação puxa verticalmente para baixo e não atua tangencialmente como atrito de contacto."
    ],
    "nursingApplication": "Determina a força contínua necessária para manter carrinhos e equipamentos em deslocamento constante."
  },
  {
    "id": 1207,
    "topicId": 1,
    "question": "Porque é que o uso de rodas com rolamentos de esferas reduz drasticamente a resistência ao movimento dos equipamentos hospitalares?",
    "options": [
      "Porque anula completamente o peso total da maca e dos equipamentos transportados.",
      "Porque as rodas criam um campo antigravitacional que eleva o equipamento no ar.",
      "Porque transforma a força normal numa força centrípeta de tração para a frente.",
      "Porque substitui o atrito de deslizamento (escorregamento) por atrito de rolamento, cujo coeficiente é muitíssimo menor."
    ],
    "correctIndex": 3,
    "explanation": "O atrito de rolamento (rodar) apresenta coeficientes de atrito ordens de grandeza inferiores ao deslizamento direto.",
    "distractorAnalysis": [
      "Está incorreta: As rodas suportam o peso, mas não o anulam; o peso continua a ser sustentado pelo solo.",
      "Está incorreta: Rodas não geram campos antigravitacionais; operam estritamente sob a mecânica clássica de rolamento.",
      "Está incorreta: A força normal permanece vertical e perpendicular ao piso, não se convertendo em força centrípeta horizontal."
    ],
    "nursingApplication": "Explica por que a manutenção e lubrificação das rodas das camas e macas é crucial para a ergonomia."
  },
  {
    "id": 1208,
    "topicId": 1,
    "question": "Qual é o principal papel biológico do Líquido Sinovial presente no interior das articulações sinoviais humanas?",
    "options": [
      "Atuar como lubrificante biológico, reduzindo o coeficiente de atrito entre as cartilagens para valores quase nulos.",
      "Solidificar a articulação para impedir qualquer movimento entre os ossos adjacentes.",
      "Gerar corrente elétrica contínua para acelerar a contração muscular das extremidades.",
      "Substituir o osso cortical por tecido esponjoso altamente vascularizado."
    ],
    "correctIndex": 0,
    "explanation": "O líquido sinovial reduz o coeficiente de atrito articular para valores extremamente baixos (~0,001 a 0,01), minimizando o desgaste.",
    "distractorAnalysis": [
      "Está incorreta: O líquido sinovial promove o movimento suave e fluido, não solidificando a cavidade articular.",
      "Está incorreta: A função é puramente tribológica (lubrificação e amortecimento) e nutrição da cartilagem, não gerar corrente galvânica.",
      "Está incorreta: O líquido sinovial preenche o espaço cavitário e não substitui a matriz óssea."
    ],
    "nursingApplication": "Princípio físico de lubrificação articular que previne o desgaste precoce das cartilagens no movimento humano."
  },
  {
    "id": 1209,
    "topicId": 1,
    "question": "De acordo com as leis clássicas do atrito sólido seco (Leis de Coulomb), o que acontece à força máxima de atrito estático se um bloco for apoiado sobre a sua face de menor área em vez da face de maior área?",
    "options": [
      "Reduz-se a metade porque a área de contacto é menor.",
      "Permanece inalterada, porque a força de atrito seco independe da área aparente de contacto macroscópica.",
      "Aumenta para o dobro porque a pressão é maior.",
      "Passa a ser rigorosamente nula porque blocos apoiados de lado não sofrem atrito."
    ],
    "correctIndex": 1,
    "explanation": "As leis de Coulomb estabelecem que o atrito estático máximo depende apenas do coeficiente μ e da força normal N (Fa = μ·N), sendo independente da área aparente.",
    "distractorAnalysis": [
      "Está incorreta: A área aparente é menor, mas a pressão local aumenta proporcionalmente nas micro-rugosidades, mantendo a força total constante.",
      "Está incorreta: A força de atrito não dobra; a pressão aumenta, mas a área diminui, mantendo o produto global de atrito idêntico.",
      "Está incorreta: O atrito manifesta-se independentemente da face de apoio do bloco sobre o piso."
    ],
    "nursingApplication": "Mostra que calçado ou bases de apoio mais largas distribuem a pressão sem alterar a força de atrito total gerada."
  },
  {
    "id": 1210,
    "topicId": 1,
    "question": "Um equipamento repousa num piso horizontal cujo atrito estático máximo é de 80 N. Se for empurrado horizontalmente com uma força de 30 N e continuar em repouso, qual é a intensidade da força de atrito estático nesse instante?",
    "options": [
      "80 N, empurrando o equipamento no sentido oposto com aceleração repentina.",
      "0 N, porque o corpo ainda não se moveu.",
      "Exatamente 30 N, equilibrando perfeitamente a força aplicada.",
      "50 N, correspondente à diferença matemática entre o valor máximo e o aplicado."
    ],
    "correctIndex": 2,
    "explanation": "O atrito estático é uma força autoajustável: equilibra exatamente a força aplicada (Fa = 30 N) até ao limiar máximo de 80 N.",
    "distractorAnalysis": [
      "Está incorreta: Se o atrito fosse 80 N contra uma força de 30 N, haveria uma força resultante de 50 N para trás e o corpo aceleraria sozinho, o que é absurdo.",
      "Está incorreta: Se fosse 0 N, uma força de 30 N aceleraria imediatamente o corpo segundo F = m·a.",
      "Está incorreta: A força de atrito não é a diferença; é o valor exato necessário para anular a força aplicada."
    ],
    "nursingApplication": "Permite entender que o atrito estático só atinge o seu valor máximo no limiar iminente do movimento."
  },
  {
    "id": 1211,
    "topicId": 1,
    "question": "Quais são as quatro Forças Fundamentais da Natureza descritas na física?",
    "options": [
      "Força Muscular, Força de Atrito, Força Elástica e Força Centrípeta.",
      "Força de Tração, Força de Compressão, Força Normal e Força de Pressão.",
      "Força Térmica, Força Eólica, Força Hidráulica e Força Solar.",
      "Gravitacional, Eletromagnética, Nuclear Forte e Nuclear Fraca."
    ],
    "correctIndex": 3,
    "explanation": "Todas as forças da natureza derivam destas quatro interações fundamentais da física.",
    "distractorAnalysis": [
      "Está incorreta: Muscular, atrito e elástica são manifestações macroscópicas da força eletromagnética entre átomos.",
      "Está incorreta: Tração, compressão e normal são esforços de contacto que decorrem de interações eletromagnéticas.",
      "Está incorreta: Térmica, eólica e hidráulica são designações macroscópicas de energia ou mecânica de fluidos."
    ],
    "nursingApplication": "Identifica que as forças mecânicas nos tecidos derivam microscopicamente de interações eletromagnéticas."
  },
  {
    "id": 1212,
    "topicId": 1,
    "question": "A Força Normal (N) de contacto entre dois corpos atua sempre em que direção relativamente à superfície de contacto?",
    "options": [
      "Perpendicular à superfície de contacto (formando um ângulo de noventa graus com o plano).",
      "Paralela à superfície de contacto na direção do movimento.",
      "Diagonal a quarenta e cinco graus apontando para o centro da Terra.",
      "Em qualquer direção aleatória que varia a cada segundo."
    ],
    "correctIndex": 0,
    "explanation": "O termo 'normal' em geometria e física significa estritamente ortogonal / perpendicular (90°) à superfície.",
    "distractorAnalysis": [
      "Está incorreta: A força paralela à superfície é a força de atrito, não a força normal.",
      "Está incorreta: A direção não é fixa em 45°; depende da orientação geométrica da superfície de apoio.",
      "Está incorreta: A normal é determinada pela geometria do contacto e não varia de modo aleatório."
    ],
    "nursingApplication": "Crucial para compreender como o colchão distribui a força perpendicular sobre as áreas do corpo."
  },
  {
    "id": 1213,
    "topicId": 1,
    "question": "Como se define a Força de Atrito Estático (Fa_est) entre duas superfícies em contacto?",
    "options": [
      "A força que acelera ativamente os corpos para a frente após o movimento já ter começado.",
      "A força que se opõe à tendência de início de movimento relativo entre duas superfícies em repouso relativo.",
      "A força de atrito que atua exclusivamente quando os corpos deslizam a altíssima velocidade.",
      "A atração gravitacional entre as massas dos dois corpos em contacto no vácuo."
    ],
    "correctIndex": 1,
    "explanation": "O atrito estático impede o deslizamento até ser atingida a força máxima Fa_est_max = μ_est · N.",
    "distractorAnalysis": [
      "Está incorreta: O atrito opõe-se à tendência de movimento e não atua como força propulsora espontânea para a frente.",
      "Está incorreta: O atrito que atua durante o deslizamento relativo em movimento é o atrito cinético, não o estático.",
      "Está incorreta: O atrito decorre das interações microscópicas de contacto, não da atração gravitacional das massas."
    ],
    "nursingApplication": "Explica por que os calçados antiderrapantes impedem escorregadelas em pisos lisos hospitalares."
  },
  {
    "id": 1214,
    "topicId": 1,
    "question": "Como se comparam os coeficientes de atrito estático (μ_est) e cinético (μ_cin) para o mesmo par de materiais?",
    "options": [
      "O coeficiente cinético é dez vezes superior ao estático em todos os sólidos.",
      "Ambos os coeficientes são rigorosamente iguais em todas as superfícies físicas.",
      "O coeficiente de atrito estático é sistematicamente superior ao coeficiente de atrito cinético (μ_est > μ_cin).",
      "O coeficiente estático é sempre zero porque em repouso não existe atrito."
    ],
    "correctIndex": 2,
    "explanation": "Vencer a inércia e rugosidades microscópicas em repouso exige maior força do que manter o deslizamento (μ_est > μ_cin).",
    "distractorAnalysis": [
      "Está incorreta: O atrito cinético é menor que o estático; uma vez em movimento, é mais fácil manter o deslizamento.",
      "Está incorreta: Os coeficientes não são iguais; o estático é comprovadamente superior na grande maioria dos materiais.",
      "Está incorreta: O atrito estático não é zero; atua até ao limiar máximo para impedir o início do movimento."
    ],
    "nursingApplication": "Explica por que custa mais começar a empurrar uma cama parada do que mantê-la a rolar suavemente."
  },
  {
    "id": 1215,
    "topicId": 1,
    "question": "Se um bloco de 100 N repousa sobre um piso horizontal com μ_est = 0,4, qual é a força horizontal mínima para iniciar o movimento?",
    "options": [
      "100 N.",
      "250 N.",
      "4 N.",
      "40 N."
    ],
    "correctIndex": 3,
    "explanation": "A força de atrito estático máxima é Fa_max = μ_est · N = 0,4 · 100 N = 40 N. Para mover, é preciso superar 40 N.",
    "distractorAnalysis": [
      "Está incorreta: 100 N é o valor da força normal (peso), não da força de atrito horizontal de deslizamento.",
      "Está incorreta: 250 N resultaria de dividir 100 N por 0,4, o que está matematicamente incorreto.",
      "Está incorreta: 4 N resultaria de multiplicar por 0,04 em vez do coeficiente 0,4 dado."
    ],
    "nursingApplication": "Permite calcular o esforço horizontal necessário para vencer a resistência inicial de um equipamento."
  },
  {
    "id": 1216,
    "topicId": 1,
    "question": "Uma caixa é puxada e desliza sobre o chão com velocidade constante. Que força de atrito atua sobre ela durante o deslizamento?",
    "options": [
      "Força de atrito cinético (ou dinâmico).",
      "Força de atrito estático máximo.",
      "Força nuclear forte.",
      "Força de gravitação universal pura."
    ],
    "correctIndex": 0,
    "explanation": "Quando existe movimento relativo e deslizamento entre as superfícies, a força de atrito atuante é a cinética (Fa = μ_cin · N).",
    "distractorAnalysis": [
      "Está incorreta: O atrito estático atua apenas enquanto não há deslizamento entre as superfícies em repouso relativo.",
      "Está incorreta: Forças nucleares atuam exclusivamente no interior dos núcleos atómicos, a distâncias subatómicas.",
      "Está incorreta: A gravitação puxa verticalmente para baixo e não atua tangencialmente como atrito de contacto."
    ],
    "nursingApplication": "Determina a força contínua necessária para manter carrinhos e equipamentos em deslocamento constante."
  },
  {
    "id": 1217,
    "topicId": 1,
    "question": "Porque é que o uso de rodas com rolamentos de esferas reduz drasticamente a resistência ao movimento dos equipamentos hospitalares?",
    "options": [
      "Porque anula completamente o peso total da maca e dos equipamentos transportados.",
      "Porque substitui o atrito de deslizamento (escorregamento) por atrito de rolamento, cujo coeficiente é muitíssimo menor.",
      "Porque as rodas criam um campo antigravitacional que eleva o equipamento no ar.",
      "Porque transforma a força normal numa força centrípeta de tração para a frente."
    ],
    "correctIndex": 1,
    "explanation": "O atrito de rolamento (rodar) apresenta coeficientes de atrito ordens de grandeza inferiores ao deslizamento direto.",
    "distractorAnalysis": [
      "Está incorreta: As rodas suportam o peso, mas não o anulam; o peso continua a ser sustentado pelo solo.",
      "Está incorreta: Rodas não geram campos antigravitacionais; operam estritamente sob a mecânica clássica de rolamento.",
      "Está incorreta: A força normal permanece vertical e perpendicular ao piso, não se convertendo em força centrípeta horizontal."
    ],
    "nursingApplication": "Explica por que a manutenção e lubrificação das rodas das camas e macas é crucial para a ergonomia."
  },
  {
    "id": 1218,
    "topicId": 1,
    "question": "Qual é o principal papel biológico do Líquido Sinovial presente no interior das articulações sinoviais humanas?",
    "options": [
      "Solidificar a articulação para impedir qualquer movimento entre os ossos adjacentes.",
      "Gerar corrente elétrica contínua para acelerar a contração muscular das extremidades.",
      "Atuar como lubrificante biológico, reduzindo o coeficiente de atrito entre as cartilagens para valores quase nulos.",
      "Substituir o osso cortical por tecido esponjoso altamente vascularizado."
    ],
    "correctIndex": 2,
    "explanation": "O líquido sinovial reduz o coeficiente de atrito articular para valores extremamente baixos (~0,001 a 0,01), minimizando o desgaste.",
    "distractorAnalysis": [
      "Está incorreta: O líquido sinovial promove o movimento suave e fluido, não solidificando a cavidade articular.",
      "Está incorreta: A função é puramente tribológica (lubrificação e amortecimento) e nutrição da cartilagem, não gerar corrente galvânica.",
      "Está incorreta: O líquido sinovial preenche o espaço cavitário e não substitui a matriz óssea."
    ],
    "nursingApplication": "Princípio físico de lubrificação articular que previne o desgaste precoce das cartilagens no movimento humano."
  },
  {
    "id": 1219,
    "topicId": 1,
    "question": "De acordo com as leis clássicas do atrito sólido seco (Leis de Coulomb), o que acontece à força máxima de atrito estático se um bloco for apoiado sobre a sua face de menor área em vez da face de maior área?",
    "options": [
      "Reduz-se a metade porque a área de contacto é menor.",
      "Aumenta para o dobro porque a pressão é maior.",
      "Passa a ser rigorosamente nula porque blocos apoiados de lado não sofrem atrito.",
      "Permanece inalterada, porque a força de atrito seco independe da área aparente de contacto macroscópica."
    ],
    "correctIndex": 3,
    "explanation": "As leis de Coulomb estabelecem que o atrito estático máximo depende apenas do coeficiente μ e da força normal N (Fa = μ·N), sendo independente da área aparente.",
    "distractorAnalysis": [
      "Está incorreta: A área aparente é menor, mas a pressão local aumenta proporcionalmente nas micro-rugosidades, mantendo a força total constante.",
      "Está incorreta: A força de atrito não dobra; a pressão aumenta, mas a área diminui, mantendo o produto global de atrito idêntico.",
      "Está incorreta: O atrito manifesta-se independentemente da face de apoio do bloco sobre o piso."
    ],
    "nursingApplication": "Mostra que calçado ou bases de apoio mais largas distribuem a pressão sem alterar a força de atrito total gerada."
  },
  {
    "id": 1220,
    "topicId": 1,
    "question": "Um equipamento repousa num piso horizontal cujo atrito estático máximo é de 80 N. Se for empurrado horizontalmente com uma força de 30 N e continuar em repouso, qual é a intensidade da força de atrito estático nesse instante?",
    "options": [
      "Exatamente 30 N, equilibrando perfeitamente a força aplicada.",
      "80 N, empurrando o equipamento no sentido oposto com aceleração repentina.",
      "0 N, porque o corpo ainda não se moveu.",
      "50 N, correspondente à diferença matemática entre o valor máximo e o aplicado."
    ],
    "correctIndex": 0,
    "explanation": "O atrito estático é uma força autoajustável: equilibra exatamente a força aplicada (Fa = 30 N) até ao limiar máximo de 80 N.",
    "distractorAnalysis": [
      "Está incorreta: Se o atrito fosse 80 N contra uma força de 30 N, haveria uma força resultante de 50 N para trás e o corpo aceleraria sozinho, o que é absurdo.",
      "Está incorreta: Se fosse 0 N, uma força de 30 N aceleraria imediatamente o corpo segundo F = m·a.",
      "Está incorreta: A força de atrito não é a diferença; é o valor exato necessário para anular a força aplicada."
    ],
    "nursingApplication": "Permite entender que o atrito estático só atinge o seu valor máximo no limiar iminente do movimento."
  },
  {
    "id": 1221,
    "topicId": 1,
    "question": "Quais são as quatro Forças Fundamentais da Natureza descritas na física?",
    "options": [
      "Força Muscular, Força de Atrito, Força Elástica e Força Centrípeta.",
      "Gravitacional, Eletromagnética, Nuclear Forte e Nuclear Fraca.",
      "Força de Tração, Força de Compressão, Força Normal e Força de Pressão.",
      "Força Térmica, Força Eólica, Força Hidráulica e Força Solar."
    ],
    "correctIndex": 1,
    "explanation": "Todas as forças da natureza derivam destas quatro interações fundamentais da física.",
    "distractorAnalysis": [
      "Está incorreta: Muscular, atrito e elástica são manifestações macroscópicas da força eletromagnética entre átomos.",
      "Está incorreta: Tração, compressão e normal são esforços de contacto que decorrem de interações eletromagnéticas.",
      "Está incorreta: Térmica, eólica e hidráulica são designações macroscópicas de energia ou mecânica de fluidos."
    ],
    "nursingApplication": "Identifica que as forças mecânicas nos tecidos derivam microscopicamente de interações eletromagnéticas."
  },
  {
    "id": 1222,
    "topicId": 1,
    "question": "A Força Normal (N) de contacto entre dois corpos atua sempre em que direção relativamente à superfície de contacto?",
    "options": [
      "Paralela à superfície de contacto na direção do movimento.",
      "Diagonal a quarenta e cinco graus apontando para o centro da Terra.",
      "Perpendicular à superfície de contacto (formando um ângulo de noventa graus com o plano).",
      "Em qualquer direção aleatória que varia a cada segundo."
    ],
    "correctIndex": 2,
    "explanation": "O termo 'normal' em geometria e física significa estritamente ortogonal / perpendicular (90°) à superfície.",
    "distractorAnalysis": [
      "Está incorreta: A força paralela à superfície é a força de atrito, não a força normal.",
      "Está incorreta: A direção não é fixa em 45°; depende da orientação geométrica da superfície de apoio.",
      "Está incorreta: A normal é determinada pela geometria do contacto e não varia de modo aleatório."
    ],
    "nursingApplication": "Crucial para compreender como o colchão distribui a força perpendicular sobre as áreas do corpo."
  },
  {
    "id": 1223,
    "topicId": 1,
    "question": "Como se define a Força de Atrito Estático (Fa_est) entre duas superfícies em contacto?",
    "options": [
      "A força que acelera ativamente os corpos para a frente após o movimento já ter começado.",
      "A força de atrito que atua exclusivamente quando os corpos deslizam a altíssima velocidade.",
      "A atração gravitacional entre as massas dos dois corpos em contacto no vácuo.",
      "A força que se opõe à tendência de início de movimento relativo entre duas superfícies em repouso relativo."
    ],
    "correctIndex": 3,
    "explanation": "O atrito estático impede o deslizamento até ser atingida a força máxima Fa_est_max = μ_est · N.",
    "distractorAnalysis": [
      "Está incorreta: O atrito opõe-se à tendência de movimento e não atua como força propulsora espontânea para a frente.",
      "Está incorreta: O atrito que atua durante o deslizamento relativo em movimento é o atrito cinético, não o estático.",
      "Está incorreta: O atrito decorre das interações microscópicas de contacto, não da atração gravitacional das massas."
    ],
    "nursingApplication": "Explica por que os calçados antiderrapantes impedem escorregadelas em pisos lisos hospitalares."
  },
  {
    "id": 1224,
    "topicId": 1,
    "question": "Como se comparam os coeficientes de atrito estático (μ_est) e cinético (μ_cin) para o mesmo par de materiais?",
    "options": [
      "O coeficiente de atrito estático é sistematicamente superior ao coeficiente de atrito cinético (μ_est > μ_cin).",
      "O coeficiente cinético é dez vezes superior ao estático em todos os sólidos.",
      "Ambos os coeficientes são rigorosamente iguais em todas as superfícies físicas.",
      "O coeficiente estático é sempre zero porque em repouso não existe atrito."
    ],
    "correctIndex": 0,
    "explanation": "Vencer a inércia e rugosidades microscópicas em repouso exige maior força do que manter o deslizamento (μ_est > μ_cin).",
    "distractorAnalysis": [
      "Está incorreta: O atrito cinético é menor que o estático; uma vez em movimento, é mais fácil manter o deslizamento.",
      "Está incorreta: Os coeficientes não são iguais; o estático é comprovadamente superior na grande maioria dos materiais.",
      "Está incorreta: O atrito estático não é zero; atua até ao limiar máximo para impedir o início do movimento."
    ],
    "nursingApplication": "Explica por que custa mais começar a empurrar uma cama parada do que mantê-la a rolar suavemente."
  },
  {
    "id": 1225,
    "topicId": 1,
    "question": "Se um bloco de 100 N repousa sobre um piso horizontal com μ_est = 0,4, qual é a força horizontal mínima para iniciar o movimento?",
    "options": [
      "100 N.",
      "40 N.",
      "250 N.",
      "4 N."
    ],
    "correctIndex": 1,
    "explanation": "A força de atrito estático máxima é Fa_max = μ_est · N = 0,4 · 100 N = 40 N. Para mover, é preciso superar 40 N.",
    "distractorAnalysis": [
      "Está incorreta: 100 N é o valor da força normal (peso), não da força de atrito horizontal de deslizamento.",
      "Está incorreta: 250 N resultaria de dividir 100 N por 0,4, o que está matematicamente incorreto.",
      "Está incorreta: 4 N resultaria de multiplicar por 0,04 em vez do coeficiente 0,4 dado."
    ],
    "nursingApplication": "Permite calcular o esforço horizontal necessário para vencer a resistência inicial de um equipamento."
  },
  {
    "id": 1226,
    "topicId": 1,
    "question": "Uma caixa é puxada e desliza sobre o chão com velocidade constante. Que força de atrito atua sobre ela durante o deslizamento?",
    "options": [
      "Força de atrito estático máximo.",
      "Força nuclear forte.",
      "Força de atrito cinético (ou dinâmico).",
      "Força de gravitação universal pura."
    ],
    "correctIndex": 2,
    "explanation": "Quando existe movimento relativo e deslizamento entre as superfícies, a força de atrito atuante é a cinética (Fa = μ_cin · N).",
    "distractorAnalysis": [
      "Está incorreta: O atrito estático atua apenas enquanto não há deslizamento entre as superfícies em repouso relativo.",
      "Está incorreta: Forças nucleares atuam exclusivamente no interior dos núcleos atómicos, a distâncias subatómicas.",
      "Está incorreta: A gravitação puxa verticalmente para baixo e não atua tangencialmente como atrito de contacto."
    ],
    "nursingApplication": "Determina a força contínua necessária para manter carrinhos e equipamentos em deslocamento constante."
  },
  {
    "id": 1227,
    "topicId": 1,
    "question": "Porque é que o uso de rodas com rolamentos de esferas reduz drasticamente a resistência ao movimento dos equipamentos hospitalares?",
    "options": [
      "Porque anula completamente o peso total da maca e dos equipamentos transportados.",
      "Porque as rodas criam um campo antigravitacional que eleva o equipamento no ar.",
      "Porque transforma a força normal numa força centrípeta de tração para a frente.",
      "Porque substitui o atrito de deslizamento (escorregamento) por atrito de rolamento, cujo coeficiente é muitíssimo menor."
    ],
    "correctIndex": 3,
    "explanation": "O atrito de rolamento (rodar) apresenta coeficientes de atrito ordens de grandeza inferiores ao deslizamento direto.",
    "distractorAnalysis": [
      "Está incorreta: As rodas suportam o peso, mas não o anulam; o peso continua a ser sustentado pelo solo.",
      "Está incorreta: Rodas não geram campos antigravitacionais; operam estritamente sob a mecânica clássica de rolamento.",
      "Está incorreta: A força normal permanece vertical e perpendicular ao piso, não se convertendo em força centrípeta horizontal."
    ],
    "nursingApplication": "Explica por que a manutenção e lubrificação das rodas das camas e macas é crucial para a ergonomia."
  },
  {
    "id": 1228,
    "topicId": 1,
    "question": "Qual é o principal papel biológico do Líquido Sinovial presente no interior das articulações sinoviais humanas?",
    "options": [
      "Atuar como lubrificante biológico, reduzindo o coeficiente de atrito entre as cartilagens para valores quase nulos.",
      "Solidificar a articulação para impedir qualquer movimento entre os ossos adjacentes.",
      "Gerar corrente elétrica contínua para acelerar a contração muscular das extremidades.",
      "Substituir o osso cortical por tecido esponjoso altamente vascularizado."
    ],
    "correctIndex": 0,
    "explanation": "O líquido sinovial reduz o coeficiente de atrito articular para valores extremamente baixos (~0,001 a 0,01), minimizando o desgaste.",
    "distractorAnalysis": [
      "Está incorreta: O líquido sinovial promove o movimento suave e fluido, não solidificando a cavidade articular.",
      "Está incorreta: A função é puramente tribológica (lubrificação e amortecimento) e nutrição da cartilagem, não gerar corrente galvânica.",
      "Está incorreta: O líquido sinovial preenche o espaço cavitário e não substitui a matriz óssea."
    ],
    "nursingApplication": "Princípio físico de lubrificação articular que previne o desgaste precoce das cartilagens no movimento humano."
  },
  {
    "id": 1229,
    "topicId": 1,
    "question": "De acordo com as leis clássicas do atrito sólido seco (Leis de Coulomb), o que acontece à força máxima de atrito estático se um bloco for apoiado sobre a sua face de menor área em vez da face de maior área?",
    "options": [
      "Reduz-se a metade porque a área de contacto é menor.",
      "Permanece inalterada, porque a força de atrito seco independe da área aparente de contacto macroscópica.",
      "Aumenta para o dobro porque a pressão é maior.",
      "Passa a ser rigorosamente nula porque blocos apoiados de lado não sofrem atrito."
    ],
    "correctIndex": 1,
    "explanation": "As leis de Coulomb estabelecem que o atrito estático máximo depende apenas do coeficiente μ e da força normal N (Fa = μ·N), sendo independente da área aparente.",
    "distractorAnalysis": [
      "Está incorreta: A área aparente é menor, mas a pressão local aumenta proporcionalmente nas micro-rugosidades, mantendo a força total constante.",
      "Está incorreta: A força de atrito não dobra; a pressão aumenta, mas a área diminui, mantendo o produto global de atrito idêntico.",
      "Está incorreta: O atrito manifesta-se independentemente da face de apoio do bloco sobre o piso."
    ],
    "nursingApplication": "Mostra que calçado ou bases de apoio mais largas distribuem a pressão sem alterar a força de atrito total gerada."
  },
  {
    "id": 1230,
    "topicId": 1,
    "question": "Um equipamento repousa num piso horizontal cujo atrito estático máximo é de 80 N. Se for empurrado horizontalmente com uma força de 30 N e continuar em repouso, qual é a intensidade da força de atrito estático nesse instante?",
    "options": [
      "80 N, empurrando o equipamento no sentido oposto com aceleração repentina.",
      "0 N, porque o corpo ainda não se moveu.",
      "Exatamente 30 N, equilibrando perfeitamente a força aplicada.",
      "50 N, correspondente à diferença matemática entre o valor máximo e o aplicado."
    ],
    "correctIndex": 2,
    "explanation": "O atrito estático é uma força autoajustável: equilibra exatamente a força aplicada (Fa = 30 N) até ao limiar máximo de 80 N.",
    "distractorAnalysis": [
      "Está incorreta: Se o atrito fosse 80 N contra uma força de 30 N, haveria uma força resultante de 50 N para trás e o corpo aceleraria sozinho, o que é absurdo.",
      "Está incorreta: Se fosse 0 N, uma força de 30 N aceleraria imediatamente o corpo segundo F = m·a.",
      "Está incorreta: A força de atrito não é a diferença; é o valor exato necessário para anular a força aplicada."
    ],
    "nursingApplication": "Permite entender que o atrito estático só atinge o seu valor máximo no limiar iminente do movimento."
  },
  {
    "id": 1231,
    "topicId": 1,
    "question": "Quais são as quatro Forças Fundamentais da Natureza descritas na física?",
    "options": [
      "Força Muscular, Força de Atrito, Força Elástica e Força Centrípeta.",
      "Força de Tração, Força de Compressão, Força Normal e Força de Pressão.",
      "Força Térmica, Força Eólica, Força Hidráulica e Força Solar.",
      "Gravitacional, Eletromagnética, Nuclear Forte e Nuclear Fraca."
    ],
    "correctIndex": 3,
    "explanation": "Todas as forças da natureza derivam destas quatro interações fundamentais da física.",
    "distractorAnalysis": [
      "Está incorreta: Muscular, atrito e elástica são manifestações macroscópicas da força eletromagnética entre átomos.",
      "Está incorreta: Tração, compressão e normal são esforços de contacto que decorrem de interações eletromagnéticas.",
      "Está incorreta: Térmica, eólica e hidráulica são designações macroscópicas de energia ou mecânica de fluidos."
    ],
    "nursingApplication": "Identifica que as forças mecânicas nos tecidos derivam microscopicamente de interações eletromagnéticas."
  },
  {
    "id": 1232,
    "topicId": 1,
    "question": "A Força Normal (N) de contacto entre dois corpos atua sempre em que direção relativamente à superfície de contacto?",
    "options": [
      "Perpendicular à superfície de contacto (formando um ângulo de noventa graus com o plano).",
      "Paralela à superfície de contacto na direção do movimento.",
      "Diagonal a quarenta e cinco graus apontando para o centro da Terra.",
      "Em qualquer direção aleatória que varia a cada segundo."
    ],
    "correctIndex": 0,
    "explanation": "O termo 'normal' em geometria e física significa estritamente ortogonal / perpendicular (90°) à superfície.",
    "distractorAnalysis": [
      "Está incorreta: A força paralela à superfície é a força de atrito, não a força normal.",
      "Está incorreta: A direção não é fixa em 45°; depende da orientação geométrica da superfície de apoio.",
      "Está incorreta: A normal é determinada pela geometria do contacto e não varia de modo aleatório."
    ],
    "nursingApplication": "Crucial para compreender como o colchão distribui a força perpendicular sobre as áreas do corpo."
  },
  {
    "id": 1233,
    "topicId": 1,
    "question": "Como se define a Força de Atrito Estático (Fa_est) entre duas superfícies em contacto?",
    "options": [
      "A força que acelera ativamente os corpos para a frente após o movimento já ter começado.",
      "A força que se opõe à tendência de início de movimento relativo entre duas superfícies em repouso relativo.",
      "A força de atrito que atua exclusivamente quando os corpos deslizam a altíssima velocidade.",
      "A atração gravitacional entre as massas dos dois corpos em contacto no vácuo."
    ],
    "correctIndex": 1,
    "explanation": "O atrito estático impede o deslizamento até ser atingida a força máxima Fa_est_max = μ_est · N.",
    "distractorAnalysis": [
      "Está incorreta: O atrito opõe-se à tendência de movimento e não atua como força propulsora espontânea para a frente.",
      "Está incorreta: O atrito que atua durante o deslizamento relativo em movimento é o atrito cinético, não o estático.",
      "Está incorreta: O atrito decorre das interações microscópicas de contacto, não da atração gravitacional das massas."
    ],
    "nursingApplication": "Explica por que os calçados antiderrapantes impedem escorregadelas em pisos lisos hospitalares."
  },
  {
    "id": 1234,
    "topicId": 1,
    "question": "Como se comparam os coeficientes de atrito estático (μ_est) e cinético (μ_cin) para o mesmo par de materiais?",
    "options": [
      "O coeficiente cinético é dez vezes superior ao estático em todos os sólidos.",
      "Ambos os coeficientes são rigorosamente iguais em todas as superfícies físicas.",
      "O coeficiente de atrito estático é sistematicamente superior ao coeficiente de atrito cinético (μ_est > μ_cin).",
      "O coeficiente estático é sempre zero porque em repouso não existe atrito."
    ],
    "correctIndex": 2,
    "explanation": "Vencer a inércia e rugosidades microscópicas em repouso exige maior força do que manter o deslizamento (μ_est > μ_cin).",
    "distractorAnalysis": [
      "Está incorreta: O atrito cinético é menor que o estático; uma vez em movimento, é mais fácil manter o deslizamento.",
      "Está incorreta: Os coeficientes não são iguais; o estático é comprovadamente superior na grande maioria dos materiais.",
      "Está incorreta: O atrito estático não é zero; atua até ao limiar máximo para impedir o início do movimento."
    ],
    "nursingApplication": "Explica por que custa mais começar a empurrar uma cama parada do que mantê-la a rolar suavemente."
  },
  {
    "id": 1235,
    "topicId": 1,
    "question": "Se um bloco de 100 N repousa sobre um piso horizontal com μ_est = 0,4, qual é a força horizontal mínima para iniciar o movimento?",
    "options": [
      "100 N.",
      "250 N.",
      "4 N.",
      "40 N."
    ],
    "correctIndex": 3,
    "explanation": "A força de atrito estático máxima é Fa_max = μ_est · N = 0,4 · 100 N = 40 N. Para mover, é preciso superar 40 N.",
    "distractorAnalysis": [
      "Está incorreta: 100 N é o valor da força normal (peso), não da força de atrito horizontal de deslizamento.",
      "Está incorreta: 250 N resultaria de dividir 100 N por 0,4, o que está matematicamente incorreto.",
      "Está incorreta: 4 N resultaria de multiplicar por 0,04 em vez do coeficiente 0,4 dado."
    ],
    "nursingApplication": "Permite calcular o esforço horizontal necessário para vencer a resistência inicial de um equipamento."
  },
  {
    "id": 1236,
    "topicId": 1,
    "question": "Uma caixa é puxada e desliza sobre o chão com velocidade constante. Que força de atrito atua sobre ela durante o deslizamento?",
    "options": [
      "Força de atrito cinético (ou dinâmico).",
      "Força de atrito estático máximo.",
      "Força nuclear forte.",
      "Força de gravitação universal pura."
    ],
    "correctIndex": 0,
    "explanation": "Quando existe movimento relativo e deslizamento entre as superfícies, a força de atrito atuante é a cinética (Fa = μ_cin · N).",
    "distractorAnalysis": [
      "Está incorreta: O atrito estático atua apenas enquanto não há deslizamento entre as superfícies em repouso relativo.",
      "Está incorreta: Forças nucleares atuam exclusivamente no interior dos núcleos atómicos, a distâncias subatómicas.",
      "Está incorreta: A gravitação puxa verticalmente para baixo e não atua tangencialmente como atrito de contacto."
    ],
    "nursingApplication": "Determina a força contínua necessária para manter carrinhos e equipamentos em deslocamento constante."
  },
  {
    "id": 1237,
    "topicId": 1,
    "question": "Porque é que o uso de rodas com rolamentos de esferas reduz drasticamente a resistência ao movimento dos equipamentos hospitalares?",
    "options": [
      "Porque anula completamente o peso total da maca e dos equipamentos transportados.",
      "Porque substitui o atrito de deslizamento (escorregamento) por atrito de rolamento, cujo coeficiente é muitíssimo menor.",
      "Porque as rodas criam um campo antigravitacional que eleva o equipamento no ar.",
      "Porque transforma a força normal numa força centrípeta de tração para a frente."
    ],
    "correctIndex": 1,
    "explanation": "O atrito de rolamento (rodar) apresenta coeficientes de atrito ordens de grandeza inferiores ao deslizamento direto.",
    "distractorAnalysis": [
      "Está incorreta: As rodas suportam o peso, mas não o anulam; o peso continua a ser sustentado pelo solo.",
      "Está incorreta: Rodas não geram campos antigravitacionais; operam estritamente sob a mecânica clássica de rolamento.",
      "Está incorreta: A força normal permanece vertical e perpendicular ao piso, não se convertendo em força centrípeta horizontal."
    ],
    "nursingApplication": "Explica por que a manutenção e lubrificação das rodas das camas e macas é crucial para a ergonomia."
  },
  {
    "id": 1238,
    "topicId": 1,
    "question": "Qual é o principal papel biológico do Líquido Sinovial presente no interior das articulações sinoviais humanas?",
    "options": [
      "Solidificar a articulação para impedir qualquer movimento entre os ossos adjacentes.",
      "Gerar corrente elétrica contínua para acelerar a contração muscular das extremidades.",
      "Atuar como lubrificante biológico, reduzindo o coeficiente de atrito entre as cartilagens para valores quase nulos.",
      "Substituir o osso cortical por tecido esponjoso altamente vascularizado."
    ],
    "correctIndex": 2,
    "explanation": "O líquido sinovial reduz o coeficiente de atrito articular para valores extremamente baixos (~0,001 a 0,01), minimizando o desgaste.",
    "distractorAnalysis": [
      "Está incorreta: O líquido sinovial promove o movimento suave e fluido, não solidificando a cavidade articular.",
      "Está incorreta: A função é puramente tribológica (lubrificação e amortecimento) e nutrição da cartilagem, não gerar corrente galvânica.",
      "Está incorreta: O líquido sinovial preenche o espaço cavitário e não substitui a matriz óssea."
    ],
    "nursingApplication": "Princípio físico de lubrificação articular que previne o desgaste precoce das cartilagens no movimento humano."
  },
  {
    "id": 1239,
    "topicId": 1,
    "question": "De acordo com as leis clássicas do atrito sólido seco (Leis de Coulomb), o que acontece à força máxima de atrito estático se um bloco for apoiado sobre a sua face de menor área em vez da face de maior área?",
    "options": [
      "Reduz-se a metade porque a área de contacto é menor.",
      "Aumenta para o dobro porque a pressão é maior.",
      "Passa a ser rigorosamente nula porque blocos apoiados de lado não sofrem atrito.",
      "Permanece inalterada, porque a força de atrito seco independe da área aparente de contacto macroscópica."
    ],
    "correctIndex": 3,
    "explanation": "As leis de Coulomb estabelecem que o atrito estático máximo depende apenas do coeficiente μ e da força normal N (Fa = μ·N), sendo independente da área aparente.",
    "distractorAnalysis": [
      "Está incorreta: A área aparente é menor, mas a pressão local aumenta proporcionalmente nas micro-rugosidades, mantendo a força total constante.",
      "Está incorreta: A força de atrito não dobra; a pressão aumenta, mas a área diminui, mantendo o produto global de atrito idêntico.",
      "Está incorreta: O atrito manifesta-se independentemente da face de apoio do bloco sobre o piso."
    ],
    "nursingApplication": "Mostra que calçado ou bases de apoio mais largas distribuem a pressão sem alterar a força de atrito total gerada."
  },
  {
    "id": 1240,
    "topicId": 1,
    "question": "Um equipamento repousa num piso horizontal cujo atrito estático máximo é de 80 N. Se for empurrado horizontalmente com uma força de 30 N e continuar em repouso, qual é a intensidade da força de atrito estático nesse instante?",
    "options": [
      "Exatamente 30 N, equilibrando perfeitamente a força aplicada.",
      "80 N, empurrando o equipamento no sentido oposto com aceleração repentina.",
      "0 N, porque o corpo ainda não se moveu.",
      "50 N, correspondente à diferença matemática entre o valor máximo e o aplicado."
    ],
    "correctIndex": 0,
    "explanation": "O atrito estático é uma força autoajustável: equilibra exatamente a força aplicada (Fa = 30 N) até ao limiar máximo de 80 N.",
    "distractorAnalysis": [
      "Está incorreta: Se o atrito fosse 80 N contra uma força de 30 N, haveria uma força resultante de 50 N para trás e o corpo aceleraria sozinho, o que é absurdo.",
      "Está incorreta: Se fosse 0 N, uma força de 30 N aceleraria imediatamente o corpo segundo F = m·a.",
      "Está incorreta: A força de atrito não é a diferença; é o valor exato necessário para anular a força aplicada."
    ],
    "nursingApplication": "Permite entender que o atrito estático só atinge o seu valor máximo no limiar iminente do movimento."
  },
  {
    "id": 1241,
    "topicId": 1,
    "question": "Quais são as quatro Forças Fundamentais da Natureza descritas na física?",
    "options": [
      "Força Muscular, Força de Atrito, Força Elástica e Força Centrípeta.",
      "Gravitacional, Eletromagnética, Nuclear Forte e Nuclear Fraca.",
      "Força de Tração, Força de Compressão, Força Normal e Força de Pressão.",
      "Força Térmica, Força Eólica, Força Hidráulica e Força Solar."
    ],
    "correctIndex": 1,
    "explanation": "Todas as forças da natureza derivam destas quatro interações fundamentais da física.",
    "distractorAnalysis": [
      "Está incorreta: Muscular, atrito e elástica são manifestações macroscópicas da força eletromagnética entre átomos.",
      "Está incorreta: Tração, compressão e normal são esforços de contacto que decorrem de interações eletromagnéticas.",
      "Está incorreta: Térmica, eólica e hidráulica são designações macroscópicas de energia ou mecânica de fluidos."
    ],
    "nursingApplication": "Identifica que as forças mecânicas nos tecidos derivam microscopicamente de interações eletromagnéticas."
  },
  {
    "id": 1242,
    "topicId": 1,
    "question": "A Força Normal (N) de contacto entre dois corpos atua sempre em que direção relativamente à superfície de contacto?",
    "options": [
      "Paralela à superfície de contacto na direção do movimento.",
      "Diagonal a quarenta e cinco graus apontando para o centro da Terra.",
      "Perpendicular à superfície de contacto (formando um ângulo de noventa graus com o plano).",
      "Em qualquer direção aleatória que varia a cada segundo."
    ],
    "correctIndex": 2,
    "explanation": "O termo 'normal' em geometria e física significa estritamente ortogonal / perpendicular (90°) à superfície.",
    "distractorAnalysis": [
      "Está incorreta: A força paralela à superfície é a força de atrito, não a força normal.",
      "Está incorreta: A direção não é fixa em 45°; depende da orientação geométrica da superfície de apoio.",
      "Está incorreta: A normal é determinada pela geometria do contacto e não varia de modo aleatório."
    ],
    "nursingApplication": "Crucial para compreender como o colchão distribui a força perpendicular sobre as áreas do corpo."
  },
  {
    "id": 1243,
    "topicId": 1,
    "question": "Como se define a Força de Atrito Estático (Fa_est) entre duas superfícies em contacto?",
    "options": [
      "A força que acelera ativamente os corpos para a frente após o movimento já ter começado.",
      "A força de atrito que atua exclusivamente quando os corpos deslizam a altíssima velocidade.",
      "A atração gravitacional entre as massas dos dois corpos em contacto no vácuo.",
      "A força que se opõe à tendência de início de movimento relativo entre duas superfícies em repouso relativo."
    ],
    "correctIndex": 3,
    "explanation": "O atrito estático impede o deslizamento até ser atingida a força máxima Fa_est_max = μ_est · N.",
    "distractorAnalysis": [
      "Está incorreta: O atrito opõe-se à tendência de movimento e não atua como força propulsora espontânea para a frente.",
      "Está incorreta: O atrito que atua durante o deslizamento relativo em movimento é o atrito cinético, não o estático.",
      "Está incorreta: O atrito decorre das interações microscópicas de contacto, não da atração gravitacional das massas."
    ],
    "nursingApplication": "Explica por que os calçados antiderrapantes impedem escorregadelas em pisos lisos hospitalares."
  },
  {
    "id": 1244,
    "topicId": 1,
    "question": "Como se comparam os coeficientes de atrito estático (μ_est) e cinético (μ_cin) para o mesmo par de materiais?",
    "options": [
      "O coeficiente de atrito estático é sistematicamente superior ao coeficiente de atrito cinético (μ_est > μ_cin).",
      "O coeficiente cinético é dez vezes superior ao estático em todos os sólidos.",
      "Ambos os coeficientes são rigorosamente iguais em todas as superfícies físicas.",
      "O coeficiente estático é sempre zero porque em repouso não existe atrito."
    ],
    "correctIndex": 0,
    "explanation": "Vencer a inércia e rugosidades microscópicas em repouso exige maior força do que manter o deslizamento (μ_est > μ_cin).",
    "distractorAnalysis": [
      "Está incorreta: O atrito cinético é menor que o estático; uma vez em movimento, é mais fácil manter o deslizamento.",
      "Está incorreta: Os coeficientes não são iguais; o estático é comprovadamente superior na grande maioria dos materiais.",
      "Está incorreta: O atrito estático não é zero; atua até ao limiar máximo para impedir o início do movimento."
    ],
    "nursingApplication": "Explica por que custa mais começar a empurrar uma cama parada do que mantê-la a rolar suavemente."
  },
  {
    "id": 1245,
    "topicId": 1,
    "question": "Se um bloco de 100 N repousa sobre um piso horizontal com μ_est = 0,4, qual é a força horizontal mínima para iniciar o movimento?",
    "options": [
      "100 N.",
      "40 N.",
      "250 N.",
      "4 N."
    ],
    "correctIndex": 1,
    "explanation": "A força de atrito estático máxima é Fa_max = μ_est · N = 0,4 · 100 N = 40 N. Para mover, é preciso superar 40 N.",
    "distractorAnalysis": [
      "Está incorreta: 100 N é o valor da força normal (peso), não da força de atrito horizontal de deslizamento.",
      "Está incorreta: 250 N resultaria de dividir 100 N por 0,4, o que está matematicamente incorreto.",
      "Está incorreta: 4 N resultaria de multiplicar por 0,04 em vez do coeficiente 0,4 dado."
    ],
    "nursingApplication": "Permite calcular o esforço horizontal necessário para vencer a resistência inicial de um equipamento."
  },
  {
    "id": 1246,
    "topicId": 1,
    "question": "Uma caixa é puxada e desliza sobre o chão com velocidade constante. Que força de atrito atua sobre ela durante o deslizamento?",
    "options": [
      "Força de atrito estático máximo.",
      "Força nuclear forte.",
      "Força de atrito cinético (ou dinâmico).",
      "Força de gravitação universal pura."
    ],
    "correctIndex": 2,
    "explanation": "Quando existe movimento relativo e deslizamento entre as superfícies, a força de atrito atuante é a cinética (Fa = μ_cin · N).",
    "distractorAnalysis": [
      "Está incorreta: O atrito estático atua apenas enquanto não há deslizamento entre as superfícies em repouso relativo.",
      "Está incorreta: Forças nucleares atuam exclusivamente no interior dos núcleos atómicos, a distâncias subatómicas.",
      "Está incorreta: A gravitação puxa verticalmente para baixo e não atua tangencialmente como atrito de contacto."
    ],
    "nursingApplication": "Determina a força contínua necessária para manter carrinhos e equipamentos em deslocamento constante."
  },
  {
    "id": 1247,
    "topicId": 1,
    "question": "Porque é que o uso de rodas com rolamentos de esferas reduz drasticamente a resistência ao movimento dos equipamentos hospitalares?",
    "options": [
      "Porque anula completamente o peso total da maca e dos equipamentos transportados.",
      "Porque as rodas criam um campo antigravitacional que eleva o equipamento no ar.",
      "Porque transforma a força normal numa força centrípeta de tração para a frente.",
      "Porque substitui o atrito de deslizamento (escorregamento) por atrito de rolamento, cujo coeficiente é muitíssimo menor."
    ],
    "correctIndex": 3,
    "explanation": "O atrito de rolamento (rodar) apresenta coeficientes de atrito ordens de grandeza inferiores ao deslizamento direto.",
    "distractorAnalysis": [
      "Está incorreta: As rodas suportam o peso, mas não o anulam; o peso continua a ser sustentado pelo solo.",
      "Está incorreta: Rodas não geram campos antigravitacionais; operam estritamente sob a mecânica clássica de rolamento.",
      "Está incorreta: A força normal permanece vertical e perpendicular ao piso, não se convertendo em força centrípeta horizontal."
    ],
    "nursingApplication": "Explica por que a manutenção e lubrificação das rodas das camas e macas é crucial para a ergonomia."
  },
  {
    "id": 1248,
    "topicId": 1,
    "question": "Qual é o principal papel biológico do Líquido Sinovial presente no interior das articulações sinoviais humanas?",
    "options": [
      "Atuar como lubrificante biológico, reduzindo o coeficiente de atrito entre as cartilagens para valores quase nulos.",
      "Solidificar a articulação para impedir qualquer movimento entre os ossos adjacentes.",
      "Gerar corrente elétrica contínua para acelerar a contração muscular das extremidades.",
      "Substituir o osso cortical por tecido esponjoso altamente vascularizado."
    ],
    "correctIndex": 0,
    "explanation": "O líquido sinovial reduz o coeficiente de atrito articular para valores extremamente baixos (~0,001 a 0,01), minimizando o desgaste.",
    "distractorAnalysis": [
      "Está incorreta: O líquido sinovial promove o movimento suave e fluido, não solidificando a cavidade articular.",
      "Está incorreta: A função é puramente tribológica (lubrificação e amortecimento) e nutrição da cartilagem, não gerar corrente galvânica.",
      "Está incorreta: O líquido sinovial preenche o espaço cavitário e não substitui a matriz óssea."
    ],
    "nursingApplication": "Princípio físico de lubrificação articular que previne o desgaste precoce das cartilagens no movimento humano."
  },
  {
    "id": 1249,
    "topicId": 1,
    "question": "De acordo com as leis clássicas do atrito sólido seco (Leis de Coulomb), o que acontece à força máxima de atrito estático se um bloco for apoiado sobre a sua face de menor área em vez da face de maior área?",
    "options": [
      "Reduz-se a metade porque a área de contacto é menor.",
      "Permanece inalterada, porque a força de atrito seco independe da área aparente de contacto macroscópica.",
      "Aumenta para o dobro porque a pressão é maior.",
      "Passa a ser rigorosamente nula porque blocos apoiados de lado não sofrem atrito."
    ],
    "correctIndex": 1,
    "explanation": "As leis de Coulomb estabelecem que o atrito estático máximo depende apenas do coeficiente μ e da força normal N (Fa = μ·N), sendo independente da área aparente.",
    "distractorAnalysis": [
      "Está incorreta: A área aparente é menor, mas a pressão local aumenta proporcionalmente nas micro-rugosidades, mantendo a força total constante.",
      "Está incorreta: A força de atrito não dobra; a pressão aumenta, mas a área diminui, mantendo o produto global de atrito idêntico.",
      "Está incorreta: O atrito manifesta-se independentemente da face de apoio do bloco sobre o piso."
    ],
    "nursingApplication": "Mostra que calçado ou bases de apoio mais largas distribuem a pressão sem alterar a força de atrito total gerada."
  },
  {
    "id": 1250,
    "topicId": 1,
    "question": "Um equipamento repousa num piso horizontal cujo atrito estático máximo é de 80 N. Se for empurrado horizontalmente com uma força de 30 N e continuar em repouso, qual é a intensidade da força de atrito estático nesse instante?",
    "options": [
      "80 N, empurrando o equipamento no sentido oposto com aceleração repentina.",
      "0 N, porque o corpo ainda não se moveu.",
      "Exatamente 30 N, equilibrando perfeitamente a força aplicada.",
      "50 N, correspondente à diferença matemática entre o valor máximo e o aplicado."
    ],
    "correctIndex": 2,
    "explanation": "O atrito estático é uma força autoajustável: equilibra exatamente a força aplicada (Fa = 30 N) até ao limiar máximo de 80 N.",
    "distractorAnalysis": [
      "Está incorreta: Se o atrito fosse 80 N contra uma força de 30 N, haveria uma força resultante de 50 N para trás e o corpo aceleraria sozinho, o que é absurdo.",
      "Está incorreta: Se fosse 0 N, uma força de 30 N aceleraria imediatamente o corpo segundo F = m·a.",
      "Está incorreta: A força de atrito não é a diferença; é o valor exato necessário para anular a força aplicada."
    ],
    "nursingApplication": "Permite entender que o atrito estático só atinge o seu valor máximo no limiar iminente do movimento."
  },
  {
    "id": 1251,
    "topicId": 1,
    "question": "Quais são as duas condições fundamentais para que um corpo rígido extenso se encontre em Equilíbrio Estático completo?",
    "options": [
      "Velocidade máxima constante e aceleração gravitacional infinita.",
      "Temperatura nula no zero absoluto e densidade volumétrica constante.",
      "Pressão hidrostática nula e ausência total de massa no vácuo.",
      "Força resultante nula (∑F = 0) e Momento resultante nulo (∑M = 0)."
    ],
    "correctIndex": 3,
    "explanation": "O equilíbrio estático de um corpo extenso exige equilíbrio de translação (∑F = 0) e equilíbrio de rotação (∑M = 0).",
    "distractorAnalysis": [
      "Está incorreta: Velocidade máxima constante não define equilíbrio estático (que exige repouso, v = 0).",
      "Está incorreta: Temperatura e densidade são grandezas termodinâmicas, não condições mecânicas de equilíbrio estático.",
      "Está incorreta: Pressão nula e ausência de massa pertencem ao vácuo ideal e não descrevem corpos materiais rígidos."
    ],
    "nursingApplication": "Base da biomecânica postural: manter o corpo imóvel sem translação nem rotações indesejadas."
  },
  {
    "id": 1252,
    "topicId": 1,
    "question": "O que traduz a Primeira Condição de Equilíbrio (Equilíbrio de Translação)?",
    "options": [
      "A soma vetorial de todas as forças que atuam sobre o corpo tem de ser igual a zero (∑F = 0).",
      "A soma dos momentos de força em torno de qualquer eixo tem de ser estritamente positiva.",
      "A velocidade linear do corpo tem de aumentar a uma taxa de dez metros por segundo.",
      "O corpo tem de girar a uma velocidade angular rigorosamente constante."
    ],
    "correctIndex": 0,
    "explanation": "A primeira condição de equilíbrio (∑F = 0) assegura que o centro de massa não sofre nenhuma aceleração linear.",
    "distractorAnalysis": [
      "Está incorreta: Soma de momentos positiva geraria aceleração angular rotacional, violando o equilíbrio estático.",
      "Está incorreta: Velocidade a aumentar implica aceleração linear não nula, o que contradiz ∑F = 0.",
      "Está incorreta: Girar com velocidade angular refere-se a rotação dinâmica, não à primeira condição estática."
    ],
    "nursingApplication": "Assegura que as forças musculares e de apoio equilibram o peso corporal sem que o indivíduo caia."
  },
  {
    "id": 1253,
    "topicId": 1,
    "question": "O que traduz a Segunda Condição de Equilíbrio (Equilíbrio de Rotação)?",
    "options": [
      "A força resultante de translação tem de ser perpendicular ao eixo da Terra.",
      "A soma de todos os momentos de força (torques) em relação a qualquer ponto de referência tem de ser nula (∑M = 0).",
      "O corpo tem de ser constituído exclusivamente por materiais fluidos ideais.",
      "A aceleração gravítica tem de ser cancelada por forças magnéticas externas."
    ],
    "correctIndex": 1,
    "explanation": "A segunda condição de equilíbrio (∑M = 0) garante que o corpo rígido não sofre nenhuma aceleração angular de rotação.",
    "distractorAnalysis": [
      "Está incorreta: Força resultante perpendicular não impede rotações geradas por binários de forças.",
      "Está incorreta: O equilíbrio estático de rotação aplica-se com rigor a sólidos e corpos rígidos extensos.",
      "Está incorreta: Forças magnéticas não são necessárias para o equilíbrio mecânico clássico de rotações."
    ],
    "nursingApplication": "Fundamental para entender por que forças iguais aplicadas em pontos diferentes podem desequilibrar uma postura."
  },
  {
    "id": 1254,
    "topicId": 1,
    "question": "Como se classifica um estado de equilíbrio no qual o corpo, após ser ligeiramente perturbado, regressa espontaneamente à posição inicial?",
    "options": [
      "Equilíbrio Instável.",
      "Equilíbrio Indiferente.",
      "Equilíbrio Estável.",
      "Equilíbrio Metastável Térmico."
    ],
    "correctIndex": 2,
    "explanation": "No equilíbrio estável, qualquer pequeno desvio eleva o centro de gravidade e cria momentos restauradores que devolvem o corpo à posição original.",
    "distractorAnalysis": [
      "Está incorreta: No equilíbrio instável, o desvio rebaixa o centro de gravidade e o corpo afasta-se ainda mais da posição de repouso.",
      "Está incorreta: No equilíbrio indiferente, o centro de gravidade mantém a mesma altura e o corpo permanece na nova posição onde foi colocado.",
      "Está incorreta: Equilíbrio metastável térmico é um conceito da termodinâmica de fases, não da mecânica estática de corpos rígidos."
    ],
    "nursingApplication": "Postura de base larga e centro de gravidade baixo proporciona equilíbrio estável ao corpo humano."
  },
  {
    "id": 1255,
    "topicId": 1,
    "question": "Como se classifica o equilíbrio de uma esfera que repousa sobre uma mesa plana perfeitamente horizontal?",
    "options": [
      "Equilíbrio Instável.",
      "Equilíbrio Estável.",
      "Equilíbrio Crítico Nuclear.",
      "Equilíbrio Indiferente."
    ],
    "correctIndex": 3,
    "explanation": "Ao ser deslocada na mesa horizontal, a esfera não altera a altura do seu centro de gravidade e permanece em repouso na nova posição.",
    "distractorAnalysis": [
      "Está incorreta: Não é instável porque a esfera não acelera espontaneamente para longe ao sofrer um pequeno toque.",
      "Está incorreta: Não é estável porque a esfera não regressa espontaneamente ao ponto anterior onde estava.",
      "Está incorreta: Equilíbrio nuclear não se aplica à mecânica clássica macroscópica de uma esfera numa mesa."
    ],
    "nursingApplication": "Compreender os tipos de equilíbrio apoia a avaliação do risco de queda e estabilidade de suportes."
  },
  {
    "id": 1256,
    "topicId": 1,
    "question": "Num plano inclinado de ângulo θ com a horizontal, como se calcula a componente do Peso perpendicular à rampa (Pn)?",
    "options": [
      "Pn = P · cos(θ).",
      "Pn = P · sen(θ).",
      "Pn = P · tg(θ).",
      "Pn = P / cos(θ)."
    ],
    "correctIndex": 0,
    "explanation": "A decomposição trigonométrica da força peso em eixos ortogonais dá Pn = P · cos(θ) na direção normal à superfície.",
    "distractorAnalysis": [
      "Está incorreta: P · sen(θ) é a componente tangencial paralela à rampa (Pt), responsável por fazer deslizar o corpo.",
      "Está incorreta: P · tg(θ) não representa nenhuma das componentes ortogonais diretas da força peso no plano inclinado.",
      "Está incorreta: Dividir por cos(θ) violaria a relação geométrica do triângulo de forças (a componente é menor que o peso)."
    ],
    "nursingApplication": "Permite calcular a força normal de contacto exercida pelas rodas numa rampa de acesso hospitalar."
  },
  {
    "id": 1257,
    "topicId": 1,
    "question": "Num plano inclinado de ângulo θ, qual é a componente do Peso responsável por fazer deslizar o corpo rampa abaixo (Pt)?",
    "options": [
      "Pt = P · cos(θ).",
      "Pt = P · sen(θ).",
      "Pt = P · cos²(θ).",
      "Pt = P / sen(θ)."
    ],
    "correctIndex": 1,
    "explanation": "A componente tangencial paralela à rampa é Pt = P · sen(θ). Se superar o atrito, o corpo desliza para baixo.",
    "distractorAnalysis": [
      "Está incorreta: P · cos(θ) é a componente normal perpendicular (Pn), que pressiona o corpo contra a superfície da rampa.",
      "Está incorreta: P · cos²(θ) não tem fundamento na decomposição vetorial trigonométrica simples do peso.",
      "Está incorreta: Dividir pelo seno resultaria num valor superior ao peso, o que é geometricamente impossível para uma componente."
    ],
    "nursingApplication": "Mostra a força que um operador tem de suster ao subir ou descer macas em rampas de circulação."
  },
  {
    "id": 1258,
    "topicId": 1,
    "question": "O que acontece à componente do peso paralela à rampa (Pt = P · sen θ) quando a inclinação da rampa (θ) aumenta de 5° para 30°?",
    "options": [
      "Diminui até se anular completamente a noventa graus.",
      "Permanece rigorosamente constante porque o peso total do corpo não varia.",
      "Aumenta substancialmente, porque a função seno é estritamente crescente no intervalo de 0° a 90°.",
      "Passa a ser negativa, fazendo o corpo subir a rampa espontaneamente."
    ],
    "correctIndex": 2,
    "explanation": "Como sen(30°) = 0,5 e sen(5°) ≈ 0,087, a força que puxa rampa abaixo aumenta cerca de 6 vezes com a maior inclinação.",
    "distractorAnalysis": [
      "Está incorreta: A componente paralela aumenta com a inclinação e atinge o valor máximo (Pt = P) a 90° (queda livre vertical).",
      "Está incorreta: O peso total é constante, mas a sua projeção tangencial ao longo da rampa depende diretamente do ângulo de inclinação.",
      "Está incorreta: A gravidade não inverte de sentido; atrai sempre os corpos para baixo ao longo da rampa."
    ],
    "nursingApplication": "Justifica por que as normas de acessibilidade hospitalar exigem rampas com declives muito suaves (< 6°)."
  },
  {
    "id": 1259,
    "topicId": 1,
    "question": "Porque é que a condição de força resultante nula (∑F = 0) é suficiente para o equilíbrio de uma partícula pontual, mas insuficiente para assegurar o equilíbrio estático de um corpo extenso?",
    "options": [
      "Porque os corpos extensos perdem a massa quando colocados em repouso estático.",
      "Porque a 1.ª Lei de Newton deixa de ser válida para qualquer objeto com tamanho superior a um milímetro.",
      "Porque as forças nos corpos extensos transformam-se espontaneamente em radiação térmica de alta energia.",
      "Porque num corpo extenso as forças podem ter pontos de aplicação distintos e gerar momentos rotacionais, exigindo cumulativamente que a soma dos momentos seja nula (∑M = 0)."
    ],
    "correctIndex": 3,
    "explanation": "Num corpo extenso, duas forças iguais e opostas em linhas de ação diferentes formam um binário que faz girar o corpo (∑F = 0, mas ∑M ≠ 0).",
    "distractorAnalysis": [
      "Está incorreta: A massa é uma propriedade conservada da matéria e não se anula com o repouso.",
      "Está incorreta: A mecânica de Newton é plenamente válida para corpos extensos através do equilíbrio simultâneo de translação e rotação.",
      "Está incorreta: Forças mecânicas em equilíbrio não se convertem em radiação térmica espontânea."
    ],
    "nursingApplication": "Explica por que transferir uma pessoa exige controlar tanto as forças de sustentação como as tendências de rotação."
  },
  {
    "id": 1260,
    "topicId": 1,
    "question": "Uma tábua de transferência horizontal está apoiada nas suas extremidades em duas superfícies e suporta uma carga vertical no seu ponto médio. As forças normais nos apoios e a força peso constituem um sistema de:",
    "options": [
      "Forças paralelas em equilíbrio estático, satisfazendo simultaneamente ∑F = 0 e ∑M = 0.",
      "Forças concorrentes num único vértice central.",
      "Forças colineares atuando sobre uma única reta de suporte vertical comum.",
      "Forças centrípetas que aceleram a tábua em órbita elíptica fechada."
    ],
    "correctIndex": 0,
    "explanation": "As três forças têm direções verticais paralelas em linhas de ação distintas e equilibram-se em translação e rotação.",
    "distractorAnalysis": [
      "Está incorreta: Forças concorrentes convergem para um único ponto no espaço; aqui as linhas de ação são paralelas e separadas.",
      "Está incorreta: Forças colineares atuam estritamente sobre a mesma linha de ação, o que não ocorre com apoios afastados.",
      "Está incorreta: Trata-se de uma estrutura estática em repouso hospitalar, sem qualquer movimento orbital centrípeto."
    ],
    "nursingApplication": "Princípio físico de funcionamento de tábuas de transferência e pontes de apoio entre leitos."
  },
  {
    "id": 1261,
    "topicId": 1,
    "question": "Quais são as duas condições fundamentais para que um corpo rígido extenso se encontre em Equilíbrio Estático completo?",
    "options": [
      "Velocidade máxima constante e aceleração gravitacional infinita.",
      "Força resultante nula (∑F = 0) e Momento resultante nulo (∑M = 0).",
      "Temperatura nula no zero absoluto e densidade volumétrica constante.",
      "Pressão hidrostática nula e ausência total de massa no vácuo."
    ],
    "correctIndex": 1,
    "explanation": "O equilíbrio estático de um corpo extenso exige equilíbrio de translação (∑F = 0) e equilíbrio de rotação (∑M = 0).",
    "distractorAnalysis": [
      "Está incorreta: Velocidade máxima constante não define equilíbrio estático (que exige repouso, v = 0).",
      "Está incorreta: Temperatura e densidade são grandezas termodinâmicas, não condições mecânicas de equilíbrio estático.",
      "Está incorreta: Pressão nula e ausência de massa pertencem ao vácuo ideal e não descrevem corpos materiais rígidos."
    ],
    "nursingApplication": "Base da biomecânica postural: manter o corpo imóvel sem translação nem rotações indesejadas."
  },
  {
    "id": 1262,
    "topicId": 1,
    "question": "O que traduz a Primeira Condição de Equilíbrio (Equilíbrio de Translação)?",
    "options": [
      "A soma dos momentos de força em torno de qualquer eixo tem de ser estritamente positiva.",
      "A velocidade linear do corpo tem de aumentar a uma taxa de dez metros por segundo.",
      "A soma vetorial de todas as forças que atuam sobre o corpo tem de ser igual a zero (∑F = 0).",
      "O corpo tem de girar a uma velocidade angular rigorosamente constante."
    ],
    "correctIndex": 2,
    "explanation": "A primeira condição de equilíbrio (∑F = 0) assegura que o centro de massa não sofre nenhuma aceleração linear.",
    "distractorAnalysis": [
      "Está incorreta: Soma de momentos positiva geraria aceleração angular rotacional, violando o equilíbrio estático.",
      "Está incorreta: Velocidade a aumentar implica aceleração linear não nula, o que contradiz ∑F = 0.",
      "Está incorreta: Girar com velocidade angular refere-se a rotação dinâmica, não à primeira condição estática."
    ],
    "nursingApplication": "Assegura que as forças musculares e de apoio equilibram o peso corporal sem que o indivíduo caia."
  },
  {
    "id": 1263,
    "topicId": 1,
    "question": "O que traduz a Segunda Condição de Equilíbrio (Equilíbrio de Rotação)?",
    "options": [
      "A força resultante de translação tem de ser perpendicular ao eixo da Terra.",
      "O corpo tem de ser constituído exclusivamente por materiais fluidos ideais.",
      "A aceleração gravítica tem de ser cancelada por forças magnéticas externas.",
      "A soma de todos os momentos de força (torques) em relação a qualquer ponto de referência tem de ser nula (∑M = 0)."
    ],
    "correctIndex": 3,
    "explanation": "A segunda condição de equilíbrio (∑M = 0) garante que o corpo rígido não sofre nenhuma aceleração angular de rotação.",
    "distractorAnalysis": [
      "Está incorreta: Força resultante perpendicular não impede rotações geradas por binários de forças.",
      "Está incorreta: O equilíbrio estático de rotação aplica-se com rigor a sólidos e corpos rígidos extensos.",
      "Está incorreta: Forças magnéticas não são necessárias para o equilíbrio mecânico clássico de rotações."
    ],
    "nursingApplication": "Fundamental para entender por que forças iguais aplicadas em pontos diferentes podem desequilibrar uma postura."
  },
  {
    "id": 1264,
    "topicId": 1,
    "question": "Como se classifica um estado de equilíbrio no qual o corpo, após ser ligeiramente perturbado, regressa espontaneamente à posição inicial?",
    "options": [
      "Equilíbrio Estável.",
      "Equilíbrio Instável.",
      "Equilíbrio Indiferente.",
      "Equilíbrio Metastável Térmico."
    ],
    "correctIndex": 0,
    "explanation": "No equilíbrio estável, qualquer pequeno desvio eleva o centro de gravidade e cria momentos restauradores que devolvem o corpo à posição original.",
    "distractorAnalysis": [
      "Está incorreta: No equilíbrio instável, o desvio rebaixa o centro de gravidade e o corpo afasta-se ainda mais da posição de repouso.",
      "Está incorreta: No equilíbrio indiferente, o centro de gravidade mantém a mesma altura e o corpo permanece na nova posição onde foi colocado.",
      "Está incorreta: Equilíbrio metastável térmico é um conceito da termodinâmica de fases, não da mecânica estática de corpos rígidos."
    ],
    "nursingApplication": "Postura de base larga e centro de gravidade baixo proporciona equilíbrio estável ao corpo humano."
  },
  {
    "id": 1265,
    "topicId": 1,
    "question": "Como se classifica o equilíbrio de uma esfera que repousa sobre uma mesa plana perfeitamente horizontal?",
    "options": [
      "Equilíbrio Instável.",
      "Equilíbrio Indiferente.",
      "Equilíbrio Estável.",
      "Equilíbrio Crítico Nuclear."
    ],
    "correctIndex": 1,
    "explanation": "Ao ser deslocada na mesa horizontal, a esfera não altera a altura do seu centro de gravidade e permanece em repouso na nova posição.",
    "distractorAnalysis": [
      "Está incorreta: Não é instável porque a esfera não acelera espontaneamente para longe ao sofrer um pequeno toque.",
      "Está incorreta: Não é estável porque a esfera não regressa espontaneamente ao ponto anterior onde estava.",
      "Está incorreta: Equilíbrio nuclear não se aplica à mecânica clássica macroscópica de uma esfera numa mesa."
    ],
    "nursingApplication": "Compreender os tipos de equilíbrio apoia a avaliação do risco de queda e estabilidade de suportes."
  },
  {
    "id": 1266,
    "topicId": 1,
    "question": "Num plano inclinado de ângulo θ com a horizontal, como se calcula a componente do Peso perpendicular à rampa (Pn)?",
    "options": [
      "Pn = P · sen(θ).",
      "Pn = P · tg(θ).",
      "Pn = P · cos(θ).",
      "Pn = P / cos(θ)."
    ],
    "correctIndex": 2,
    "explanation": "A decomposição trigonométrica da força peso em eixos ortogonais dá Pn = P · cos(θ) na direção normal à superfície.",
    "distractorAnalysis": [
      "Está incorreta: P · sen(θ) é a componente tangencial paralela à rampa (Pt), responsável por fazer deslizar o corpo.",
      "Está incorreta: P · tg(θ) não representa nenhuma das componentes ortogonais diretas da força peso no plano inclinado.",
      "Está incorreta: Dividir por cos(θ) violaria a relação geométrica do triângulo de forças (a componente é menor que o peso)."
    ],
    "nursingApplication": "Permite calcular a força normal de contacto exercida pelas rodas numa rampa de acesso hospitalar."
  },
  {
    "id": 1267,
    "topicId": 1,
    "question": "Num plano inclinado de ângulo θ, qual é a componente do Peso responsável por fazer deslizar o corpo rampa abaixo (Pt)?",
    "options": [
      "Pt = P · cos(θ).",
      "Pt = P · cos²(θ).",
      "Pt = P / sen(θ).",
      "Pt = P · sen(θ)."
    ],
    "correctIndex": 3,
    "explanation": "A componente tangencial paralela à rampa é Pt = P · sen(θ). Se superar o atrito, o corpo desliza para baixo.",
    "distractorAnalysis": [
      "Está incorreta: P · cos(θ) é a componente normal perpendicular (Pn), que pressiona o corpo contra a superfície da rampa.",
      "Está incorreta: P · cos²(θ) não tem fundamento na decomposição vetorial trigonométrica simples do peso.",
      "Está incorreta: Dividir pelo seno resultaria num valor superior ao peso, o que é geometricamente impossível para uma componente."
    ],
    "nursingApplication": "Mostra a força que um operador tem de suster ao subir ou descer macas em rampas de circulação."
  },
  {
    "id": 1268,
    "topicId": 1,
    "question": "O que acontece à componente do peso paralela à rampa (Pt = P · sen θ) quando a inclinação da rampa (θ) aumenta de 5° para 30°?",
    "options": [
      "Aumenta substancialmente, porque a função seno é estritamente crescente no intervalo de 0° a 90°.",
      "Diminui até se anular completamente a noventa graus.",
      "Permanece rigorosamente constante porque o peso total do corpo não varia.",
      "Passa a ser negativa, fazendo o corpo subir a rampa espontaneamente."
    ],
    "correctIndex": 0,
    "explanation": "Como sen(30°) = 0,5 e sen(5°) ≈ 0,087, a força que puxa rampa abaixo aumenta cerca de 6 vezes com a maior inclinação.",
    "distractorAnalysis": [
      "Está incorreta: A componente paralela aumenta com a inclinação e atinge o valor máximo (Pt = P) a 90° (queda livre vertical).",
      "Está incorreta: O peso total é constante, mas a sua projeção tangencial ao longo da rampa depende diretamente do ângulo de inclinação.",
      "Está incorreta: A gravidade não inverte de sentido; atrai sempre os corpos para baixo ao longo da rampa."
    ],
    "nursingApplication": "Justifica por que as normas de acessibilidade hospitalar exigem rampas com declives muito suaves (< 6°)."
  },
  {
    "id": 1269,
    "topicId": 1,
    "question": "Porque é que a condição de força resultante nula (∑F = 0) é suficiente para o equilíbrio de uma partícula pontual, mas insuficiente para assegurar o equilíbrio estático de um corpo extenso?",
    "options": [
      "Porque os corpos extensos perdem a massa quando colocados em repouso estático.",
      "Porque num corpo extenso as forças podem ter pontos de aplicação distintos e gerar momentos rotacionais, exigindo cumulativamente que a soma dos momentos seja nula (∑M = 0).",
      "Porque a 1.ª Lei de Newton deixa de ser válida para qualquer objeto com tamanho superior a um milímetro.",
      "Porque as forças nos corpos extensos transformam-se espontaneamente em radiação térmica de alta energia."
    ],
    "correctIndex": 1,
    "explanation": "Num corpo extenso, duas forças iguais e opostas em linhas de ação diferentes formam um binário que faz girar o corpo (∑F = 0, mas ∑M ≠ 0).",
    "distractorAnalysis": [
      "Está incorreta: A massa é uma propriedade conservada da matéria e não se anula com o repouso.",
      "Está incorreta: A mecânica de Newton é plenamente válida para corpos extensos através do equilíbrio simultâneo de translação e rotação.",
      "Está incorreta: Forças mecânicas em equilíbrio não se convertem em radiação térmica espontânea."
    ],
    "nursingApplication": "Explica por que transferir uma pessoa exige controlar tanto as forças de sustentação como as tendências de rotação."
  },
  {
    "id": 1270,
    "topicId": 1,
    "question": "Uma tábua de transferência horizontal está apoiada nas suas extremidades em duas superfícies e suporta uma carga vertical no seu ponto médio. As forças normais nos apoios e a força peso constituem um sistema de:",
    "options": [
      "Forças concorrentes num único vértice central.",
      "Forças colineares atuando sobre uma única reta de suporte vertical comum.",
      "Forças paralelas em equilíbrio estático, satisfazendo simultaneamente ∑F = 0 e ∑M = 0.",
      "Forças centrípetas que aceleram a tábua em órbita elíptica fechada."
    ],
    "correctIndex": 2,
    "explanation": "As três forças têm direções verticais paralelas em linhas de ação distintas e equilibram-se em translação e rotação.",
    "distractorAnalysis": [
      "Está incorreta: Forças concorrentes convergem para um único ponto no espaço; aqui as linhas de ação são paralelas e separadas.",
      "Está incorreta: Forças colineares atuam estritamente sobre a mesma linha de ação, o que não ocorre com apoios afastados.",
      "Está incorreta: Trata-se de uma estrutura estática em repouso hospitalar, sem qualquer movimento orbital centrípeto."
    ],
    "nursingApplication": "Princípio físico de funcionamento de tábuas de transferência e pontes de apoio entre leitos."
  },
  {
    "id": 1271,
    "topicId": 1,
    "question": "Quais são as duas condições fundamentais para que um corpo rígido extenso se encontre em Equilíbrio Estático completo?",
    "options": [
      "Velocidade máxima constante e aceleração gravitacional infinita.",
      "Temperatura nula no zero absoluto e densidade volumétrica constante.",
      "Pressão hidrostática nula e ausência total de massa no vácuo.",
      "Força resultante nula (∑F = 0) e Momento resultante nulo (∑M = 0)."
    ],
    "correctIndex": 3,
    "explanation": "O equilíbrio estático de um corpo extenso exige equilíbrio de translação (∑F = 0) e equilíbrio de rotação (∑M = 0).",
    "distractorAnalysis": [
      "Está incorreta: Velocidade máxima constante não define equilíbrio estático (que exige repouso, v = 0).",
      "Está incorreta: Temperatura e densidade são grandezas termodinâmicas, não condições mecânicas de equilíbrio estático.",
      "Está incorreta: Pressão nula e ausência de massa pertencem ao vácuo ideal e não descrevem corpos materiais rígidos."
    ],
    "nursingApplication": "Base da biomecânica postural: manter o corpo imóvel sem translação nem rotações indesejadas."
  },
  {
    "id": 1272,
    "topicId": 1,
    "question": "O que traduz a Primeira Condição de Equilíbrio (Equilíbrio de Translação)?",
    "options": [
      "A soma vetorial de todas as forças que atuam sobre o corpo tem de ser igual a zero (∑F = 0).",
      "A soma dos momentos de força em torno de qualquer eixo tem de ser estritamente positiva.",
      "A velocidade linear do corpo tem de aumentar a uma taxa de dez metros por segundo.",
      "O corpo tem de girar a uma velocidade angular rigorosamente constante."
    ],
    "correctIndex": 0,
    "explanation": "A primeira condição de equilíbrio (∑F = 0) assegura que o centro de massa não sofre nenhuma aceleração linear.",
    "distractorAnalysis": [
      "Está incorreta: Soma de momentos positiva geraria aceleração angular rotacional, violando o equilíbrio estático.",
      "Está incorreta: Velocidade a aumentar implica aceleração linear não nula, o que contradiz ∑F = 0.",
      "Está incorreta: Girar com velocidade angular refere-se a rotação dinâmica, não à primeira condição estática."
    ],
    "nursingApplication": "Assegura que as forças musculares e de apoio equilibram o peso corporal sem que o indivíduo caia."
  },
  {
    "id": 1273,
    "topicId": 1,
    "question": "O que traduz a Segunda Condição de Equilíbrio (Equilíbrio de Rotação)?",
    "options": [
      "A força resultante de translação tem de ser perpendicular ao eixo da Terra.",
      "A soma de todos os momentos de força (torques) em relação a qualquer ponto de referência tem de ser nula (∑M = 0).",
      "O corpo tem de ser constituído exclusivamente por materiais fluidos ideais.",
      "A aceleração gravítica tem de ser cancelada por forças magnéticas externas."
    ],
    "correctIndex": 1,
    "explanation": "A segunda condição de equilíbrio (∑M = 0) garante que o corpo rígido não sofre nenhuma aceleração angular de rotação.",
    "distractorAnalysis": [
      "Está incorreta: Força resultante perpendicular não impede rotações geradas por binários de forças.",
      "Está incorreta: O equilíbrio estático de rotação aplica-se com rigor a sólidos e corpos rígidos extensos.",
      "Está incorreta: Forças magnéticas não são necessárias para o equilíbrio mecânico clássico de rotações."
    ],
    "nursingApplication": "Fundamental para entender por que forças iguais aplicadas em pontos diferentes podem desequilibrar uma postura."
  },
  {
    "id": 1274,
    "topicId": 1,
    "question": "Como se classifica um estado de equilíbrio no qual o corpo, após ser ligeiramente perturbado, regressa espontaneamente à posição inicial?",
    "options": [
      "Equilíbrio Instável.",
      "Equilíbrio Indiferente.",
      "Equilíbrio Estável.",
      "Equilíbrio Metastável Térmico."
    ],
    "correctIndex": 2,
    "explanation": "No equilíbrio estável, qualquer pequeno desvio eleva o centro de gravidade e cria momentos restauradores que devolvem o corpo à posição original.",
    "distractorAnalysis": [
      "Está incorreta: No equilíbrio instável, o desvio rebaixa o centro de gravidade e o corpo afasta-se ainda mais da posição de repouso.",
      "Está incorreta: No equilíbrio indiferente, o centro de gravidade mantém a mesma altura e o corpo permanece na nova posição onde foi colocado.",
      "Está incorreta: Equilíbrio metastável térmico é um conceito da termodinâmica de fases, não da mecânica estática de corpos rígidos."
    ],
    "nursingApplication": "Postura de base larga e centro de gravidade baixo proporciona equilíbrio estável ao corpo humano."
  },
  {
    "id": 1275,
    "topicId": 1,
    "question": "Como se classifica o equilíbrio de uma esfera que repousa sobre uma mesa plana perfeitamente horizontal?",
    "options": [
      "Equilíbrio Instável.",
      "Equilíbrio Estável.",
      "Equilíbrio Crítico Nuclear.",
      "Equilíbrio Indiferente."
    ],
    "correctIndex": 3,
    "explanation": "Ao ser deslocada na mesa horizontal, a esfera não altera a altura do seu centro de gravidade e permanece em repouso na nova posição.",
    "distractorAnalysis": [
      "Está incorreta: Não é instável porque a esfera não acelera espontaneamente para longe ao sofrer um pequeno toque.",
      "Está incorreta: Não é estável porque a esfera não regressa espontaneamente ao ponto anterior onde estava.",
      "Está incorreta: Equilíbrio nuclear não se aplica à mecânica clássica macroscópica de uma esfera numa mesa."
    ],
    "nursingApplication": "Compreender os tipos de equilíbrio apoia a avaliação do risco de queda e estabilidade de suportes."
  },
  {
    "id": 1276,
    "topicId": 1,
    "question": "Num plano inclinado de ângulo θ com a horizontal, como se calcula a componente do Peso perpendicular à rampa (Pn)?",
    "options": [
      "Pn = P · cos(θ).",
      "Pn = P · sen(θ).",
      "Pn = P · tg(θ).",
      "Pn = P / cos(θ)."
    ],
    "correctIndex": 0,
    "explanation": "A decomposição trigonométrica da força peso em eixos ortogonais dá Pn = P · cos(θ) na direção normal à superfície.",
    "distractorAnalysis": [
      "Está incorreta: P · sen(θ) é a componente tangencial paralela à rampa (Pt), responsável por fazer deslizar o corpo.",
      "Está incorreta: P · tg(θ) não representa nenhuma das componentes ortogonais diretas da força peso no plano inclinado.",
      "Está incorreta: Dividir por cos(θ) violaria a relação geométrica do triângulo de forças (a componente é menor que o peso)."
    ],
    "nursingApplication": "Permite calcular a força normal de contacto exercida pelas rodas numa rampa de acesso hospitalar."
  },
  {
    "id": 1277,
    "topicId": 1,
    "question": "Num plano inclinado de ângulo θ, qual é a componente do Peso responsável por fazer deslizar o corpo rampa abaixo (Pt)?",
    "options": [
      "Pt = P · cos(θ).",
      "Pt = P · sen(θ).",
      "Pt = P · cos²(θ).",
      "Pt = P / sen(θ)."
    ],
    "correctIndex": 1,
    "explanation": "A componente tangencial paralela à rampa é Pt = P · sen(θ). Se superar o atrito, o corpo desliza para baixo.",
    "distractorAnalysis": [
      "Está incorreta: P · cos(θ) é a componente normal perpendicular (Pn), que pressiona o corpo contra a superfície da rampa.",
      "Está incorreta: P · cos²(θ) não tem fundamento na decomposição vetorial trigonométrica simples do peso.",
      "Está incorreta: Dividir pelo seno resultaria num valor superior ao peso, o que é geometricamente impossível para uma componente."
    ],
    "nursingApplication": "Mostra a força que um operador tem de suster ao subir ou descer macas em rampas de circulação."
  },
  {
    "id": 1278,
    "topicId": 1,
    "question": "O que acontece à componente do peso paralela à rampa (Pt = P · sen θ) quando a inclinação da rampa (θ) aumenta de 5° para 30°?",
    "options": [
      "Diminui até se anular completamente a noventa graus.",
      "Permanece rigorosamente constante porque o peso total do corpo não varia.",
      "Aumenta substancialmente, porque a função seno é estritamente crescente no intervalo de 0° a 90°.",
      "Passa a ser negativa, fazendo o corpo subir a rampa espontaneamente."
    ],
    "correctIndex": 2,
    "explanation": "Como sen(30°) = 0,5 e sen(5°) ≈ 0,087, a força que puxa rampa abaixo aumenta cerca de 6 vezes com a maior inclinação.",
    "distractorAnalysis": [
      "Está incorreta: A componente paralela aumenta com a inclinação e atinge o valor máximo (Pt = P) a 90° (queda livre vertical).",
      "Está incorreta: O peso total é constante, mas a sua projeção tangencial ao longo da rampa depende diretamente do ângulo de inclinação.",
      "Está incorreta: A gravidade não inverte de sentido; atrai sempre os corpos para baixo ao longo da rampa."
    ],
    "nursingApplication": "Justifica por que as normas de acessibilidade hospitalar exigem rampas com declives muito suaves (< 6°)."
  },
  {
    "id": 1279,
    "topicId": 1,
    "question": "Porque é que a condição de força resultante nula (∑F = 0) é suficiente para o equilíbrio de uma partícula pontual, mas insuficiente para assegurar o equilíbrio estático de um corpo extenso?",
    "options": [
      "Porque os corpos extensos perdem a massa quando colocados em repouso estático.",
      "Porque a 1.ª Lei de Newton deixa de ser válida para qualquer objeto com tamanho superior a um milímetro.",
      "Porque as forças nos corpos extensos transformam-se espontaneamente em radiação térmica de alta energia.",
      "Porque num corpo extenso as forças podem ter pontos de aplicação distintos e gerar momentos rotacionais, exigindo cumulativamente que a soma dos momentos seja nula (∑M = 0)."
    ],
    "correctIndex": 3,
    "explanation": "Num corpo extenso, duas forças iguais e opostas em linhas de ação diferentes formam um binário que faz girar o corpo (∑F = 0, mas ∑M ≠ 0).",
    "distractorAnalysis": [
      "Está incorreta: A massa é uma propriedade conservada da matéria e não se anula com o repouso.",
      "Está incorreta: A mecânica de Newton é plenamente válida para corpos extensos através do equilíbrio simultâneo de translação e rotação.",
      "Está incorreta: Forças mecânicas em equilíbrio não se convertem em radiação térmica espontânea."
    ],
    "nursingApplication": "Explica por que transferir uma pessoa exige controlar tanto as forças de sustentação como as tendências de rotação."
  },
  {
    "id": 1280,
    "topicId": 1,
    "question": "Uma tábua de transferência horizontal está apoiada nas suas extremidades em duas superfícies e suporta uma carga vertical no seu ponto médio. As forças normais nos apoios e a força peso constituem um sistema de:",
    "options": [
      "Forças paralelas em equilíbrio estático, satisfazendo simultaneamente ∑F = 0 e ∑M = 0.",
      "Forças concorrentes num único vértice central.",
      "Forças colineares atuando sobre uma única reta de suporte vertical comum.",
      "Forças centrípetas que aceleram a tábua em órbita elíptica fechada."
    ],
    "correctIndex": 0,
    "explanation": "As três forças têm direções verticais paralelas em linhas de ação distintas e equilibram-se em translação e rotação.",
    "distractorAnalysis": [
      "Está incorreta: Forças concorrentes convergem para um único ponto no espaço; aqui as linhas de ação são paralelas e separadas.",
      "Está incorreta: Forças colineares atuam estritamente sobre a mesma linha de ação, o que não ocorre com apoios afastados.",
      "Está incorreta: Trata-se de uma estrutura estática em repouso hospitalar, sem qualquer movimento orbital centrípeto."
    ],
    "nursingApplication": "Princípio físico de funcionamento de tábuas de transferência e pontes de apoio entre leitos."
  },
  {
    "id": 1281,
    "topicId": 1,
    "question": "Quais são as duas condições fundamentais para que um corpo rígido extenso se encontre em Equilíbrio Estático completo?",
    "options": [
      "Velocidade máxima constante e aceleração gravitacional infinita.",
      "Força resultante nula (∑F = 0) e Momento resultante nulo (∑M = 0).",
      "Temperatura nula no zero absoluto e densidade volumétrica constante.",
      "Pressão hidrostática nula e ausência total de massa no vácuo."
    ],
    "correctIndex": 1,
    "explanation": "O equilíbrio estático de um corpo extenso exige equilíbrio de translação (∑F = 0) e equilíbrio de rotação (∑M = 0).",
    "distractorAnalysis": [
      "Está incorreta: Velocidade máxima constante não define equilíbrio estático (que exige repouso, v = 0).",
      "Está incorreta: Temperatura e densidade são grandezas termodinâmicas, não condições mecânicas de equilíbrio estático.",
      "Está incorreta: Pressão nula e ausência de massa pertencem ao vácuo ideal e não descrevem corpos materiais rígidos."
    ],
    "nursingApplication": "Base da biomecânica postural: manter o corpo imóvel sem translação nem rotações indesejadas."
  },
  {
    "id": 1282,
    "topicId": 1,
    "question": "O que traduz a Primeira Condição de Equilíbrio (Equilíbrio de Translação)?",
    "options": [
      "A soma dos momentos de força em torno de qualquer eixo tem de ser estritamente positiva.",
      "A velocidade linear do corpo tem de aumentar a uma taxa de dez metros por segundo.",
      "A soma vetorial de todas as forças que atuam sobre o corpo tem de ser igual a zero (∑F = 0).",
      "O corpo tem de girar a uma velocidade angular rigorosamente constante."
    ],
    "correctIndex": 2,
    "explanation": "A primeira condição de equilíbrio (∑F = 0) assegura que o centro de massa não sofre nenhuma aceleração linear.",
    "distractorAnalysis": [
      "Está incorreta: Soma de momentos positiva geraria aceleração angular rotacional, violando o equilíbrio estático.",
      "Está incorreta: Velocidade a aumentar implica aceleração linear não nula, o que contradiz ∑F = 0.",
      "Está incorreta: Girar com velocidade angular refere-se a rotação dinâmica, não à primeira condição estática."
    ],
    "nursingApplication": "Assegura que as forças musculares e de apoio equilibram o peso corporal sem que o indivíduo caia."
  },
  {
    "id": 1283,
    "topicId": 1,
    "question": "O que traduz a Segunda Condição de Equilíbrio (Equilíbrio de Rotação)?",
    "options": [
      "A força resultante de translação tem de ser perpendicular ao eixo da Terra.",
      "O corpo tem de ser constituído exclusivamente por materiais fluidos ideais.",
      "A aceleração gravítica tem de ser cancelada por forças magnéticas externas.",
      "A soma de todos os momentos de força (torques) em relação a qualquer ponto de referência tem de ser nula (∑M = 0)."
    ],
    "correctIndex": 3,
    "explanation": "A segunda condição de equilíbrio (∑M = 0) garante que o corpo rígido não sofre nenhuma aceleração angular de rotação.",
    "distractorAnalysis": [
      "Está incorreta: Força resultante perpendicular não impede rotações geradas por binários de forças.",
      "Está incorreta: O equilíbrio estático de rotação aplica-se com rigor a sólidos e corpos rígidos extensos.",
      "Está incorreta: Forças magnéticas não são necessárias para o equilíbrio mecânico clássico de rotações."
    ],
    "nursingApplication": "Fundamental para entender por que forças iguais aplicadas em pontos diferentes podem desequilibrar uma postura."
  },
  {
    "id": 1284,
    "topicId": 1,
    "question": "Como se classifica um estado de equilíbrio no qual o corpo, após ser ligeiramente perturbado, regressa espontaneamente à posição inicial?",
    "options": [
      "Equilíbrio Estável.",
      "Equilíbrio Instável.",
      "Equilíbrio Indiferente.",
      "Equilíbrio Metastável Térmico."
    ],
    "correctIndex": 0,
    "explanation": "No equilíbrio estável, qualquer pequeno desvio eleva o centro de gravidade e cria momentos restauradores que devolvem o corpo à posição original.",
    "distractorAnalysis": [
      "Está incorreta: No equilíbrio instável, o desvio rebaixa o centro de gravidade e o corpo afasta-se ainda mais da posição de repouso.",
      "Está incorreta: No equilíbrio indiferente, o centro de gravidade mantém a mesma altura e o corpo permanece na nova posição onde foi colocado.",
      "Está incorreta: Equilíbrio metastável térmico é um conceito da termodinâmica de fases, não da mecânica estática de corpos rígidos."
    ],
    "nursingApplication": "Postura de base larga e centro de gravidade baixo proporciona equilíbrio estável ao corpo humano."
  },
  {
    "id": 1285,
    "topicId": 1,
    "question": "Como se classifica o equilíbrio de uma esfera que repousa sobre uma mesa plana perfeitamente horizontal?",
    "options": [
      "Equilíbrio Instável.",
      "Equilíbrio Indiferente.",
      "Equilíbrio Estável.",
      "Equilíbrio Crítico Nuclear."
    ],
    "correctIndex": 1,
    "explanation": "Ao ser deslocada na mesa horizontal, a esfera não altera a altura do seu centro de gravidade e permanece em repouso na nova posição.",
    "distractorAnalysis": [
      "Está incorreta: Não é instável porque a esfera não acelera espontaneamente para longe ao sofrer um pequeno toque.",
      "Está incorreta: Não é estável porque a esfera não regressa espontaneamente ao ponto anterior onde estava.",
      "Está incorreta: Equilíbrio nuclear não se aplica à mecânica clássica macroscópica de uma esfera numa mesa."
    ],
    "nursingApplication": "Compreender os tipos de equilíbrio apoia a avaliação do risco de queda e estabilidade de suportes."
  },
  {
    "id": 1286,
    "topicId": 1,
    "question": "Num plano inclinado de ângulo θ com a horizontal, como se calcula a componente do Peso perpendicular à rampa (Pn)?",
    "options": [
      "Pn = P · sen(θ).",
      "Pn = P · tg(θ).",
      "Pn = P · cos(θ).",
      "Pn = P / cos(θ)."
    ],
    "correctIndex": 2,
    "explanation": "A decomposição trigonométrica da força peso em eixos ortogonais dá Pn = P · cos(θ) na direção normal à superfície.",
    "distractorAnalysis": [
      "Está incorreta: P · sen(θ) é a componente tangencial paralela à rampa (Pt), responsável por fazer deslizar o corpo.",
      "Está incorreta: P · tg(θ) não representa nenhuma das componentes ortogonais diretas da força peso no plano inclinado.",
      "Está incorreta: Dividir por cos(θ) violaria a relação geométrica do triângulo de forças (a componente é menor que o peso)."
    ],
    "nursingApplication": "Permite calcular a força normal de contacto exercida pelas rodas numa rampa de acesso hospitalar."
  },
  {
    "id": 1287,
    "topicId": 1,
    "question": "Num plano inclinado de ângulo θ, qual é a componente do Peso responsável por fazer deslizar o corpo rampa abaixo (Pt)?",
    "options": [
      "Pt = P · cos(θ).",
      "Pt = P · cos²(θ).",
      "Pt = P / sen(θ).",
      "Pt = P · sen(θ)."
    ],
    "correctIndex": 3,
    "explanation": "A componente tangencial paralela à rampa é Pt = P · sen(θ). Se superar o atrito, o corpo desliza para baixo.",
    "distractorAnalysis": [
      "Está incorreta: P · cos(θ) é a componente normal perpendicular (Pn), que pressiona o corpo contra a superfície da rampa.",
      "Está incorreta: P · cos²(θ) não tem fundamento na decomposição vetorial trigonométrica simples do peso.",
      "Está incorreta: Dividir pelo seno resultaria num valor superior ao peso, o que é geometricamente impossível para uma componente."
    ],
    "nursingApplication": "Mostra a força que um operador tem de suster ao subir ou descer macas em rampas de circulação."
  },
  {
    "id": 1288,
    "topicId": 1,
    "question": "O que acontece à componente do peso paralela à rampa (Pt = P · sen θ) quando a inclinação da rampa (θ) aumenta de 5° para 30°?",
    "options": [
      "Aumenta substancialmente, porque a função seno é estritamente crescente no intervalo de 0° a 90°.",
      "Diminui até se anular completamente a noventa graus.",
      "Permanece rigorosamente constante porque o peso total do corpo não varia.",
      "Passa a ser negativa, fazendo o corpo subir a rampa espontaneamente."
    ],
    "correctIndex": 0,
    "explanation": "Como sen(30°) = 0,5 e sen(5°) ≈ 0,087, a força que puxa rampa abaixo aumenta cerca de 6 vezes com a maior inclinação.",
    "distractorAnalysis": [
      "Está incorreta: A componente paralela aumenta com a inclinação e atinge o valor máximo (Pt = P) a 90° (queda livre vertical).",
      "Está incorreta: O peso total é constante, mas a sua projeção tangencial ao longo da rampa depende diretamente do ângulo de inclinação.",
      "Está incorreta: A gravidade não inverte de sentido; atrai sempre os corpos para baixo ao longo da rampa."
    ],
    "nursingApplication": "Justifica por que as normas de acessibilidade hospitalar exigem rampas com declives muito suaves (< 6°)."
  },
  {
    "id": 1289,
    "topicId": 1,
    "question": "Porque é que a condição de força resultante nula (∑F = 0) é suficiente para o equilíbrio de uma partícula pontual, mas insuficiente para assegurar o equilíbrio estático de um corpo extenso?",
    "options": [
      "Porque os corpos extensos perdem a massa quando colocados em repouso estático.",
      "Porque num corpo extenso as forças podem ter pontos de aplicação distintos e gerar momentos rotacionais, exigindo cumulativamente que a soma dos momentos seja nula (∑M = 0).",
      "Porque a 1.ª Lei de Newton deixa de ser válida para qualquer objeto com tamanho superior a um milímetro.",
      "Porque as forças nos corpos extensos transformam-se espontaneamente em radiação térmica de alta energia."
    ],
    "correctIndex": 1,
    "explanation": "Num corpo extenso, duas forças iguais e opostas em linhas de ação diferentes formam um binário que faz girar o corpo (∑F = 0, mas ∑M ≠ 0).",
    "distractorAnalysis": [
      "Está incorreta: A massa é uma propriedade conservada da matéria e não se anula com o repouso.",
      "Está incorreta: A mecânica de Newton é plenamente válida para corpos extensos através do equilíbrio simultâneo de translação e rotação.",
      "Está incorreta: Forças mecânicas em equilíbrio não se convertem em radiação térmica espontânea."
    ],
    "nursingApplication": "Explica por que transferir uma pessoa exige controlar tanto as forças de sustentação como as tendências de rotação."
  },
  {
    "id": 1290,
    "topicId": 1,
    "question": "Uma tábua de transferência horizontal está apoiada nas suas extremidades em duas superfícies e suporta uma carga vertical no seu ponto médio. As forças normais nos apoios e a força peso constituem um sistema de:",
    "options": [
      "Forças concorrentes num único vértice central.",
      "Forças colineares atuando sobre uma única reta de suporte vertical comum.",
      "Forças paralelas em equilíbrio estático, satisfazendo simultaneamente ∑F = 0 e ∑M = 0.",
      "Forças centrípetas que aceleram a tábua em órbita elíptica fechada."
    ],
    "correctIndex": 2,
    "explanation": "As três forças têm direções verticais paralelas em linhas de ação distintas e equilibram-se em translação e rotação.",
    "distractorAnalysis": [
      "Está incorreta: Forças concorrentes convergem para um único ponto no espaço; aqui as linhas de ação são paralelas e separadas.",
      "Está incorreta: Forças colineares atuam estritamente sobre a mesma linha de ação, o que não ocorre com apoios afastados.",
      "Está incorreta: Trata-se de uma estrutura estática em repouso hospitalar, sem qualquer movimento orbital centrípeto."
    ],
    "nursingApplication": "Princípio físico de funcionamento de tábuas de transferência e pontes de apoio entre leitos."
  },
  {
    "id": 1291,
    "topicId": 1,
    "question": "Quais são as duas condições fundamentais para que um corpo rígido extenso se encontre em Equilíbrio Estático completo?",
    "options": [
      "Velocidade máxima constante e aceleração gravitacional infinita.",
      "Temperatura nula no zero absoluto e densidade volumétrica constante.",
      "Pressão hidrostática nula e ausência total de massa no vácuo.",
      "Força resultante nula (∑F = 0) e Momento resultante nulo (∑M = 0)."
    ],
    "correctIndex": 3,
    "explanation": "O equilíbrio estático de um corpo extenso exige equilíbrio de translação (∑F = 0) e equilíbrio de rotação (∑M = 0).",
    "distractorAnalysis": [
      "Está incorreta: Velocidade máxima constante não define equilíbrio estático (que exige repouso, v = 0).",
      "Está incorreta: Temperatura e densidade são grandezas termodinâmicas, não condições mecânicas de equilíbrio estático.",
      "Está incorreta: Pressão nula e ausência de massa pertencem ao vácuo ideal e não descrevem corpos materiais rígidos."
    ],
    "nursingApplication": "Base da biomecânica postural: manter o corpo imóvel sem translação nem rotações indesejadas."
  },
  {
    "id": 1292,
    "topicId": 1,
    "question": "O que traduz a Primeira Condição de Equilíbrio (Equilíbrio de Translação)?",
    "options": [
      "A soma vetorial de todas as forças que atuam sobre o corpo tem de ser igual a zero (∑F = 0).",
      "A soma dos momentos de força em torno de qualquer eixo tem de ser estritamente positiva.",
      "A velocidade linear do corpo tem de aumentar a uma taxa de dez metros por segundo.",
      "O corpo tem de girar a uma velocidade angular rigorosamente constante."
    ],
    "correctIndex": 0,
    "explanation": "A primeira condição de equilíbrio (∑F = 0) assegura que o centro de massa não sofre nenhuma aceleração linear.",
    "distractorAnalysis": [
      "Está incorreta: Soma de momentos positiva geraria aceleração angular rotacional, violando o equilíbrio estático.",
      "Está incorreta: Velocidade a aumentar implica aceleração linear não nula, o que contradiz ∑F = 0.",
      "Está incorreta: Girar com velocidade angular refere-se a rotação dinâmica, não à primeira condição estática."
    ],
    "nursingApplication": "Assegura que as forças musculares e de apoio equilibram o peso corporal sem que o indivíduo caia."
  },
  {
    "id": 1293,
    "topicId": 1,
    "question": "O que traduz a Segunda Condição de Equilíbrio (Equilíbrio de Rotação)?",
    "options": [
      "A força resultante de translação tem de ser perpendicular ao eixo da Terra.",
      "A soma de todos os momentos de força (torques) em relação a qualquer ponto de referência tem de ser nula (∑M = 0).",
      "O corpo tem de ser constituído exclusivamente por materiais fluidos ideais.",
      "A aceleração gravítica tem de ser cancelada por forças magnéticas externas."
    ],
    "correctIndex": 1,
    "explanation": "A segunda condição de equilíbrio (∑M = 0) garante que o corpo rígido não sofre nenhuma aceleração angular de rotação.",
    "distractorAnalysis": [
      "Está incorreta: Força resultante perpendicular não impede rotações geradas por binários de forças.",
      "Está incorreta: O equilíbrio estático de rotação aplica-se com rigor a sólidos e corpos rígidos extensos.",
      "Está incorreta: Forças magnéticas não são necessárias para o equilíbrio mecânico clássico de rotações."
    ],
    "nursingApplication": "Fundamental para entender por que forças iguais aplicadas em pontos diferentes podem desequilibrar uma postura."
  },
  {
    "id": 1294,
    "topicId": 1,
    "question": "Como se classifica um estado de equilíbrio no qual o corpo, após ser ligeiramente perturbado, regressa espontaneamente à posição inicial?",
    "options": [
      "Equilíbrio Instável.",
      "Equilíbrio Indiferente.",
      "Equilíbrio Estável.",
      "Equilíbrio Metastável Térmico."
    ],
    "correctIndex": 2,
    "explanation": "No equilíbrio estável, qualquer pequeno desvio eleva o centro de gravidade e cria momentos restauradores que devolvem o corpo à posição original.",
    "distractorAnalysis": [
      "Está incorreta: No equilíbrio instável, o desvio rebaixa o centro de gravidade e o corpo afasta-se ainda mais da posição de repouso.",
      "Está incorreta: No equilíbrio indiferente, o centro de gravidade mantém a mesma altura e o corpo permanece na nova posição onde foi colocado.",
      "Está incorreta: Equilíbrio metastável térmico é um conceito da termodinâmica de fases, não da mecânica estática de corpos rígidos."
    ],
    "nursingApplication": "Postura de base larga e centro de gravidade baixo proporciona equilíbrio estável ao corpo humano."
  },
  {
    "id": 1295,
    "topicId": 1,
    "question": "Como se classifica o equilíbrio de uma esfera que repousa sobre uma mesa plana perfeitamente horizontal?",
    "options": [
      "Equilíbrio Instável.",
      "Equilíbrio Estável.",
      "Equilíbrio Crítico Nuclear.",
      "Equilíbrio Indiferente."
    ],
    "correctIndex": 3,
    "explanation": "Ao ser deslocada na mesa horizontal, a esfera não altera a altura do seu centro de gravidade e permanece em repouso na nova posição.",
    "distractorAnalysis": [
      "Está incorreta: Não é instável porque a esfera não acelera espontaneamente para longe ao sofrer um pequeno toque.",
      "Está incorreta: Não é estável porque a esfera não regressa espontaneamente ao ponto anterior onde estava.",
      "Está incorreta: Equilíbrio nuclear não se aplica à mecânica clássica macroscópica de uma esfera numa mesa."
    ],
    "nursingApplication": "Compreender os tipos de equilíbrio apoia a avaliação do risco de queda e estabilidade de suportes."
  },
  {
    "id": 1296,
    "topicId": 1,
    "question": "Num plano inclinado de ângulo θ com a horizontal, como se calcula a componente do Peso perpendicular à rampa (Pn)?",
    "options": [
      "Pn = P · cos(θ).",
      "Pn = P · sen(θ).",
      "Pn = P · tg(θ).",
      "Pn = P / cos(θ)."
    ],
    "correctIndex": 0,
    "explanation": "A decomposição trigonométrica da força peso em eixos ortogonais dá Pn = P · cos(θ) na direção normal à superfície.",
    "distractorAnalysis": [
      "Está incorreta: P · sen(θ) é a componente tangencial paralela à rampa (Pt), responsável por fazer deslizar o corpo.",
      "Está incorreta: P · tg(θ) não representa nenhuma das componentes ortogonais diretas da força peso no plano inclinado.",
      "Está incorreta: Dividir por cos(θ) violaria a relação geométrica do triângulo de forças (a componente é menor que o peso)."
    ],
    "nursingApplication": "Permite calcular a força normal de contacto exercida pelas rodas numa rampa de acesso hospitalar."
  },
  {
    "id": 1297,
    "topicId": 1,
    "question": "Num plano inclinado de ângulo θ, qual é a componente do Peso responsável por fazer deslizar o corpo rampa abaixo (Pt)?",
    "options": [
      "Pt = P · cos(θ).",
      "Pt = P · sen(θ).",
      "Pt = P · cos²(θ).",
      "Pt = P / sen(θ)."
    ],
    "correctIndex": 1,
    "explanation": "A componente tangencial paralela à rampa é Pt = P · sen(θ). Se superar o atrito, o corpo desliza para baixo.",
    "distractorAnalysis": [
      "Está incorreta: P · cos(θ) é a componente normal perpendicular (Pn), que pressiona o corpo contra a superfície da rampa.",
      "Está incorreta: P · cos²(θ) não tem fundamento na decomposição vetorial trigonométrica simples do peso.",
      "Está incorreta: Dividir pelo seno resultaria num valor superior ao peso, o que é geometricamente impossível para uma componente."
    ],
    "nursingApplication": "Mostra a força que um operador tem de suster ao subir ou descer macas em rampas de circulação."
  },
  {
    "id": 1298,
    "topicId": 1,
    "question": "O que acontece à componente do peso paralela à rampa (Pt = P · sen θ) quando a inclinação da rampa (θ) aumenta de 5° para 30°?",
    "options": [
      "Diminui até se anular completamente a noventa graus.",
      "Permanece rigorosamente constante porque o peso total do corpo não varia.",
      "Aumenta substancialmente, porque a função seno é estritamente crescente no intervalo de 0° a 90°.",
      "Passa a ser negativa, fazendo o corpo subir a rampa espontaneamente."
    ],
    "correctIndex": 2,
    "explanation": "Como sen(30°) = 0,5 e sen(5°) ≈ 0,087, a força que puxa rampa abaixo aumenta cerca de 6 vezes com a maior inclinação.",
    "distractorAnalysis": [
      "Está incorreta: A componente paralela aumenta com a inclinação e atinge o valor máximo (Pt = P) a 90° (queda livre vertical).",
      "Está incorreta: O peso total é constante, mas a sua projeção tangencial ao longo da rampa depende diretamente do ângulo de inclinação.",
      "Está incorreta: A gravidade não inverte de sentido; atrai sempre os corpos para baixo ao longo da rampa."
    ],
    "nursingApplication": "Justifica por que as normas de acessibilidade hospitalar exigem rampas com declives muito suaves (< 6°)."
  },
  {
    "id": 1299,
    "topicId": 1,
    "question": "Porque é que a condição de força resultante nula (∑F = 0) é suficiente para o equilíbrio de uma partícula pontual, mas insuficiente para assegurar o equilíbrio estático de um corpo extenso?",
    "options": [
      "Porque os corpos extensos perdem a massa quando colocados em repouso estático.",
      "Porque a 1.ª Lei de Newton deixa de ser válida para qualquer objeto com tamanho superior a um milímetro.",
      "Porque as forças nos corpos extensos transformam-se espontaneamente em radiação térmica de alta energia.",
      "Porque num corpo extenso as forças podem ter pontos de aplicação distintos e gerar momentos rotacionais, exigindo cumulativamente que a soma dos momentos seja nula (∑M = 0)."
    ],
    "correctIndex": 3,
    "explanation": "Num corpo extenso, duas forças iguais e opostas em linhas de ação diferentes formam um binário que faz girar o corpo (∑F = 0, mas ∑M ≠ 0).",
    "distractorAnalysis": [
      "Está incorreta: A massa é uma propriedade conservada da matéria e não se anula com o repouso.",
      "Está incorreta: A mecânica de Newton é plenamente válida para corpos extensos através do equilíbrio simultâneo de translação e rotação.",
      "Está incorreta: Forças mecânicas em equilíbrio não se convertem em radiação térmica espontânea."
    ],
    "nursingApplication": "Explica por que transferir uma pessoa exige controlar tanto as forças de sustentação como as tendências de rotação."
  },
  {
    "id": 1300,
    "topicId": 1,
    "question": "Uma tábua de transferência horizontal está apoiada nas suas extremidades em duas superfícies e suporta uma carga vertical no seu ponto médio. As forças normais nos apoios e a força peso constituem um sistema de:",
    "options": [
      "Forças paralelas em equilíbrio estático, satisfazendo simultaneamente ∑F = 0 e ∑M = 0.",
      "Forças concorrentes num único vértice central.",
      "Forças colineares atuando sobre uma única reta de suporte vertical comum.",
      "Forças centrípetas que aceleram a tábua em órbita elíptica fechada."
    ],
    "correctIndex": 0,
    "explanation": "As três forças têm direções verticais paralelas em linhas de ação distintas e equilibram-se em translação e rotação.",
    "distractorAnalysis": [
      "Está incorreta: Forças concorrentes convergem para um único ponto no espaço; aqui as linhas de ação são paralelas e separadas.",
      "Está incorreta: Forças colineares atuam estritamente sobre a mesma linha de ação, o que não ocorre com apoios afastados.",
      "Está incorreta: Trata-se de uma estrutura estática em repouso hospitalar, sem qualquer movimento orbital centrípeto."
    ],
    "nursingApplication": "Princípio físico de funcionamento de tábuas de transferência e pontes de apoio entre leitos."
  },
  {
    "id": 1301,
    "topicId": 1,
    "question": "O que mede o Momento de uma Força (ou Torque) na física?",
    "options": [
      "A quantidade total de calor dissipada pelas moléculas de um sólido sob pressão estática.",
      "A capacidade ou eficácia que uma força possui de produzir rotação de um corpo em torno de um ponto de apoio ou eixo.",
      "A velocidade linear instantânea adquirida pelo corpo em queda livre no vácuo.",
      "A taxa de decaimento radioativo de núcleos atómicos emissores de partículas beta."
    ],
    "correctIndex": 1,
    "explanation": "O momento mede a tendência rotacional: M = F · b, dependendo da força e da distância perpendicular ao eixo.",
    "distractorAnalysis": [
      "Está incorreta: Momento de força é uma grandeza mecânica vetorial, não energia térmica calorífica.",
      "Está incorreta: Velocidade em queda livre é uma grandeza cinemática medida em m/s, não momento de força.",
      "Está incorreta: Decaimento radioativo pertence à física nuclear, sem qualquer relação com rotação de sólidos rígidos."
    ],
    "nursingApplication": "Conceito central na biomecânica: os músculos geram momentos articulares para movimentar os segmentos corporais."
  },
  {
    "id": 1302,
    "topicId": 1,
    "question": "Como se calcula a intensidade do Momento de uma Força (M) aplicada perpendicularmente a um braço de alavanca?",
    "options": [
      "M = F / b (razão entre a força e o braço de momento).",
      "M = F + b (soma da força com a distância do braço).",
      "M = F · b (produto da intensidade da força pelo braço de momento perpendicular).",
      "M = F · b² (produto da força pelo quadrado da distância)."
    ],
    "correctIndex": 2,
    "explanation": "O momento é o produto da intensidade da força pela distância perpendicular da linha de ação ao eixo de rotação: M = F · b.",
    "distractorAnalysis": [
      "Está incorreta: Dividir a força pelo braço (F/b) viola a definição dimensional e física do momento de força.",
      "Está incorreta: Somar uma força em Newtons com uma distância em metros viola a homogeneidade dimensional da física.",
      "Está incorreta: O momento depende linearmente do braço de alavanca 'b', e não do seu quadrado."
    ],
    "nursingApplication": "Permite calcular o esforço rotacional nas articulações ao elevar objetos com os membros estendidos."
  },
  {
    "id": 1303,
    "topicId": 1,
    "question": "Qual é a unidade do Momento de uma Força (Torque) no Sistema Internacional de Unidades (SI)?",
    "options": [
      "Joule por segundo (J/s).",
      "Pascal por metro quadrado (Pa/m²).",
      "Quilograma por metro (kg/m).",
      "Newton-metro (N·m)."
    ],
    "correctIndex": 3,
    "explanation": "Como M = F · b (força em Newtons multiplicada por distância em metros), a unidade padrão no SI é o Newton-metro (N·m).",
    "distractorAnalysis": [
      "Está incorreta: Joule por segundo é Watt (unidade de potência mecânica ou elétrica).",
      "Está incorreta: Pascal por metro quadrado não é a unidade de momento de rotação.",
      "Está incorreta: Quilograma por metro é unidade de densidade linear de massa, não de momento de força."
    ],
    "nursingApplication": "Distingue formalmente a unidade de momento mecânico (N·m) de outras grandezas dimensionais."
  },
  {
    "id": 1304,
    "topicId": 1,
    "question": "O que é o 'Braço de uma Força' (ou braço de alavanca 'b') na definição do Momento?",
    "options": [
      "A distância perpendicular (à menor distância) medida entre o eixo de rotação e a linha de ação da força.",
      "O comprimento total do membro superior da pessoa que está a aplicar a força.",
      "A distância horizontal entre o operador e o teto da enfermaria hospitalar.",
      "O tempo em segundos durante o qual o músculo permanece em contração isométrica."
    ],
    "correctIndex": 0,
    "explanation": "O braço de momento 'b' é a distância geométrica medida a 90° entre o fulcro e a reta suporte da força.",
    "distractorAnalysis": [
      "Está incorreta: O braço anatómico é um segmento corporal, mas o 'braço de alavanca' em física é a distância perpendicular ao eixo.",
      "Está incorreta: A distância ao teto não tem qualquer relação com o eixo de rotação mecânico da alavanca.",
      "Está incorreta: O tempo mede duração temporal em segundos, não distância perpendicular em metros."
    ],
    "nursingApplication": "Compreender o braço perpendicular explica por que dobrar o cotovelo reduz o esforço muscular lombar."
  },
  {
    "id": 1305,
    "topicId": 1,
    "question": "Ao aplicar-se uma força perpendicular de 30 N na extremidade de uma barra a 0,6 m do eixo de rotação, qual é o momento de força gerado?",
    "options": [
      "50 N·m.",
      "18,0 N·m.",
      "30,6 N·m.",
      "5 N·m."
    ],
    "correctIndex": 1,
    "explanation": "Cálculo direto pelo produto M = F · b: M = 30 N · 0,6 m = 18,0 N·m.",
    "distractorAnalysis": [
      "Está incorreta: 50 N·m resultaria de dividir erroneamente 30 por 0,6 (F / b).",
      "Está incorreta: 30,6 N·m resultaria de somar incorretamente a força com a distância (30 + 0,6).",
      "Está incorreta: 5 N·m não corresponde ao produto da força pela distância perpendicular."
    ],
    "nursingApplication": "Permite quantificar o momento gerado em manivelas de regulação de camas e aparelhos de apoio."
  },
  {
    "id": 1306,
    "topicId": 1,
    "question": "O que acontece ao Momento de uma Força se a linha de ação da força passar exatamente pelo eixo de rotação (b = 0)?",
    "options": [
      "O momento atinge o valor infinito, provocando uma rotação destrutiva imediata.",
      "O momento depende exclusivamente da massa do corpo dividida pela gravidade.",
      "O momento é rigorosamente nulo (M = 0), não produzindo nenhuma rotação do corpo.",
      "O momento transforma-se espontaneamente numa força de atrito cinético no solo."
    ],
    "correctIndex": 2,
    "explanation": "Se a linha de ação passa pelo eixo, a distância perpendicular é zero (b = 0). Logo, M = F · 0 = 0 N·m (sem efeito rotacional).",
    "distractorAnalysis": [
      "Está incorreta: Não há momento infinito; sem braço de momento perpendicular, a rotação simplesmente não ocorre.",
      "Está incorreta: O momento é nulo independentemente da massa ou do campo gravitacional local.",
      "Está incorreta: Uma força aplicada no eixo não se transforma em atrito de solo; é absorvida pelo apoio do eixo."
    ],
    "nursingApplication": "Puxar ou empurrar diretamente o centro de uma articulação não produz movimento angular desse segmento."
  },
  {
    "id": 1307,
    "topicId": 1,
    "question": "Porque é mais fácil abrir ou fechar uma porta pesada empurrando junto ao puxador na extremidade do que perto das dobradiças?",
    "options": [
      "Porque a porta tem menos massa quando é empurrada na sua extremidade livre.",
      "Porque as dobradiças da porta anulam a gravidade terrestre quando a mão se afasta delas.",
      "Porque o ar ambiente empurra ativamente a porta na extremidade livre com força gravitacional.",
      "Porque na extremidade o braço de momento (b) é muito maior, gerando o mesmo torque com uma força muscular muito menor."
    ],
    "correctIndex": 3,
    "explanation": "Como M = F · b, para obter o mesmo torque 'M' de rotação, quanto maior o braço 'b', menor é a força 'F' necessária (F = M / b).",
    "distractorAnalysis": [
      "Está incorreta: A massa total da porta é constante e independente do local onde se exerce a força de contacto.",
      "Está incorreta: As dobradiças sustentam o peso da porta, mas não alteram a atração da gravidade terrestre.",
      "Está incorreta: O ar ambiente não atua como força propulsora espontânea na extremidade da porta."
    ],
    "nursingApplication": "Princípio físico crucial na ergonomia: alavancas com braços maiores exigem forças consideravelmente menores."
  },
  {
    "id": 1308,
    "topicId": 1,
    "question": "Como varia o momento de uma força F constante se o ângulo entre a força e a barra diminuir de 90° (perpendicular) para 0° (paralela à barra)?",
    "options": [
      "Diminui progressivamente até se anular a 0°, pois M = F · d · sen(θ) e sen(0°) = 0.",
      "Aumenta progressivamente até atingir o valor máximo a 0°.",
      "Permanece rigorosamente constante porque a intensidade da força F e o comprimento d não mudam.",
      "Inverte de sentido e faz a barra girar com velocidade angular infinita."
    ],
    "correctIndex": 0,
    "explanation": "A componente perpendicular eficaz é F · sen(θ). A 90° temos eficácia máxima (sen 90° = 1); a 0° a força puxa ao longo da barra (sem torque).",
    "distractorAnalysis": [
      "Está incorreta: A eficácia rotacional diminui ao inclinar a força, nunca aumentando a 0°.",
      "Está incorreta: O momento varia com o ângulo de aplicação, sendo máximo a 90° e nulo a 0°.",
      "Está incorreta: A 0° o momento é zero; não há rotação nem inversão com velocidade infinita."
    ],
    "nursingApplication": "Explica por que a eficácia da contração muscular varia com o ângulo articular ao longo do movimento."
  },
  {
    "id": 1309,
    "topicId": 1,
    "question": "Na mecânica física clássica, o que caracteriza especificamente um 'Binário de Forças' (ou Par de Forças)?",
    "options": [
      "Duas forças perpendiculares entre si que colidem frontalmente no vácuo.",
      "Um par de forças com a mesma intensidade, direções paralelas, sentidos opostos e linhas de ação distintas, produzindo rotação pura sem qualquer translação.",
      "Uma força única que atua em dois corpos no mesmo instante com intensidade tripla.",
      "Duas forças com o mesmo sentido que aceleram o corpo em linha reta."
    ],
    "correctIndex": 1,
    "explanation": "Um binário tem resultante de forças nula (∑F = 0), logo não translada o corpo, mas tem momento resultante não nulo (∑M ≠ 0), produzindo rotação pura.",
    "distractorAnalysis": [
      "Está incorreta: Forças perpendiculares não são paralelas e não formam um binário mecânico clássico.",
      "Está incorreta: Um binário é rigorosamente constituído por duas forças separadas e paralelas, não por uma força única.",
      "Está incorreta: Duas forças com o mesmo sentido somam-se e aceleram o corpo em translação, não formando um binário de rotação pura."
    ],
    "nursingApplication": "Exemplo das duas mãos a rodar o volante de uma cadeira de rodas em sentidos opostos com igual intensidade."
  },
  {
    "id": 1310,
    "topicId": 1,
    "question": "Qual é a propriedade fundamental do Momento de um Binário de Forças em relação a qualquer ponto de referência escolhido no espaço?",
    "options": [
      "O seu valor anula-se automaticamente se o ponto de referência for colocado fora do corpo.",
      "O seu valor duplica a cada metro de distância a que o observador se encontra do eixo.",
      "O seu valor é rigorosamente constante e independente da posição do ponto de referência, dependendo apenas do produto da intensidade da força pela distância entre as suas linhas de ação (M = F · d).",
      "O momento de um binário é sempre nulo porque as forças têm sentidos opostos."
    ],
    "correctIndex": 2,
    "explanation": "Diferente do momento de uma força isolada, o momento de um binário é invariante em relação à escolha da origem dos momentos.",
    "distractorAnalysis": [
      "Está incorreta: A posição do ponto de referência não anula o momento resultante de um binário no espaço.",
      "Está incorreta: O momento mecânico não depende da posição de observadores externos.",
      "Está incorreta: As forças anulam-se na translação (∑F = 0), mas os seus momentos somam-se no mesmo sentido rotacional (M = F · d ≠ 0)."
    ],
    "nursingApplication": "Princípio físico que permite girar manípulos circulares de torneiras ou macas com torque puro sem forças laterais parasitas."
  },
  {
    "id": 1311,
    "topicId": 1,
    "question": "O que mede o Momento de uma Força (ou Torque) na física?",
    "options": [
      "A quantidade total de calor dissipada pelas moléculas de um sólido sob pressão estática.",
      "A velocidade linear instantânea adquirida pelo corpo em queda livre no vácuo.",
      "A taxa de decaimento radioativo de núcleos atómicos emissores de partículas beta.",
      "A capacidade ou eficácia que uma força possui de produzir rotação de um corpo em torno de um ponto de apoio ou eixo."
    ],
    "correctIndex": 3,
    "explanation": "O momento mede a tendência rotacional: M = F · b, dependendo da força e da distância perpendicular ao eixo.",
    "distractorAnalysis": [
      "Está incorreta: Momento de força é uma grandeza mecânica vetorial, não energia térmica calorífica.",
      "Está incorreta: Velocidade em queda livre é uma grandeza cinemática medida em m/s, não momento de força.",
      "Está incorreta: Decaimento radioativo pertence à física nuclear, sem qualquer relação com rotação de sólidos rígidos."
    ],
    "nursingApplication": "Conceito central na biomecânica: os músculos geram momentos articulares para movimentar os segmentos corporais."
  },
  {
    "id": 1312,
    "topicId": 1,
    "question": "Como se calcula a intensidade do Momento de uma Força (M) aplicada perpendicularmente a um braço de alavanca?",
    "options": [
      "M = F · b (produto da intensidade da força pelo braço de momento perpendicular).",
      "M = F / b (razão entre a força e o braço de momento).",
      "M = F + b (soma da força com a distância do braço).",
      "M = F · b² (produto da força pelo quadrado da distância)."
    ],
    "correctIndex": 0,
    "explanation": "O momento é o produto da intensidade da força pela distância perpendicular da linha de ação ao eixo de rotação: M = F · b.",
    "distractorAnalysis": [
      "Está incorreta: Dividir a força pelo braço (F/b) viola a definição dimensional e física do momento de força.",
      "Está incorreta: Somar uma força em Newtons com uma distância em metros viola a homogeneidade dimensional da física.",
      "Está incorreta: O momento depende linearmente do braço de alavanca 'b', e não do seu quadrado."
    ],
    "nursingApplication": "Permite calcular o esforço rotacional nas articulações ao elevar objetos com os membros estendidos."
  },
  {
    "id": 1313,
    "topicId": 1,
    "question": "Qual é a unidade do Momento de uma Força (Torque) no Sistema Internacional de Unidades (SI)?",
    "options": [
      "Joule por segundo (J/s).",
      "Newton-metro (N·m).",
      "Pascal por metro quadrado (Pa/m²).",
      "Quilograma por metro (kg/m)."
    ],
    "correctIndex": 1,
    "explanation": "Como M = F · b (força em Newtons multiplicada por distância em metros), a unidade padrão no SI é o Newton-metro (N·m).",
    "distractorAnalysis": [
      "Está incorreta: Joule por segundo é Watt (unidade de potência mecânica ou elétrica).",
      "Está incorreta: Pascal por metro quadrado não é a unidade de momento de rotação.",
      "Está incorreta: Quilograma por metro é unidade de densidade linear de massa, não de momento de força."
    ],
    "nursingApplication": "Distingue formalmente a unidade de momento mecânico (N·m) de outras grandezas dimensionais."
  },
  {
    "id": 1314,
    "topicId": 1,
    "question": "O que é o 'Braço de uma Força' (ou braço de alavanca 'b') na definição do Momento?",
    "options": [
      "O comprimento total do membro superior da pessoa que está a aplicar a força.",
      "A distância horizontal entre o operador e o teto da enfermaria hospitalar.",
      "A distância perpendicular (à menor distância) medida entre o eixo de rotação e a linha de ação da força.",
      "O tempo em segundos durante o qual o músculo permanece em contração isométrica."
    ],
    "correctIndex": 2,
    "explanation": "O braço de momento 'b' é a distância geométrica medida a 90° entre o fulcro e a reta suporte da força.",
    "distractorAnalysis": [
      "Está incorreta: O braço anatómico é um segmento corporal, mas o 'braço de alavanca' em física é a distância perpendicular ao eixo.",
      "Está incorreta: A distância ao teto não tem qualquer relação com o eixo de rotação mecânico da alavanca.",
      "Está incorreta: O tempo mede duração temporal em segundos, não distância perpendicular em metros."
    ],
    "nursingApplication": "Compreender o braço perpendicular explica por que dobrar o cotovelo reduz o esforço muscular lombar."
  },
  {
    "id": 1315,
    "topicId": 1,
    "question": "Ao aplicar-se uma força perpendicular de 30 N na extremidade de uma barra a 0,6 m do eixo de rotação, qual é o momento de força gerado?",
    "options": [
      "50 N·m.",
      "30,6 N·m.",
      "5 N·m.",
      "18,0 N·m."
    ],
    "correctIndex": 3,
    "explanation": "Cálculo direto pelo produto M = F · b: M = 30 N · 0,6 m = 18,0 N·m.",
    "distractorAnalysis": [
      "Está incorreta: 50 N·m resultaria de dividir erroneamente 30 por 0,6 (F / b).",
      "Está incorreta: 30,6 N·m resultaria de somar incorretamente a força com a distância (30 + 0,6).",
      "Está incorreta: 5 N·m não corresponde ao produto da força pela distância perpendicular."
    ],
    "nursingApplication": "Permite quantificar o momento gerado em manivelas de regulação de camas e aparelhos de apoio."
  },
  {
    "id": 1316,
    "topicId": 1,
    "question": "O que acontece ao Momento de uma Força se a linha de ação da força passar exatamente pelo eixo de rotação (b = 0)?",
    "options": [
      "O momento é rigorosamente nulo (M = 0), não produzindo nenhuma rotação do corpo.",
      "O momento atinge o valor infinito, provocando uma rotação destrutiva imediata.",
      "O momento depende exclusivamente da massa do corpo dividida pela gravidade.",
      "O momento transforma-se espontaneamente numa força de atrito cinético no solo."
    ],
    "correctIndex": 0,
    "explanation": "Se a linha de ação passa pelo eixo, a distância perpendicular é zero (b = 0). Logo, M = F · 0 = 0 N·m (sem efeito rotacional).",
    "distractorAnalysis": [
      "Está incorreta: Não há momento infinito; sem braço de momento perpendicular, a rotação simplesmente não ocorre.",
      "Está incorreta: O momento é nulo independentemente da massa ou do campo gravitacional local.",
      "Está incorreta: Uma força aplicada no eixo não se transforma em atrito de solo; é absorvida pelo apoio do eixo."
    ],
    "nursingApplication": "Puxar ou empurrar diretamente o centro de uma articulação não produz movimento angular desse segmento."
  },
  {
    "id": 1317,
    "topicId": 1,
    "question": "Porque é mais fácil abrir ou fechar uma porta pesada empurrando junto ao puxador na extremidade do que perto das dobradiças?",
    "options": [
      "Porque a porta tem menos massa quando é empurrada na sua extremidade livre.",
      "Porque na extremidade o braço de momento (b) é muito maior, gerando o mesmo torque com uma força muscular muito menor.",
      "Porque as dobradiças da porta anulam a gravidade terrestre quando a mão se afasta delas.",
      "Porque o ar ambiente empurra ativamente a porta na extremidade livre com força gravitacional."
    ],
    "correctIndex": 1,
    "explanation": "Como M = F · b, para obter o mesmo torque 'M' de rotação, quanto maior o braço 'b', menor é a força 'F' necessária (F = M / b).",
    "distractorAnalysis": [
      "Está incorreta: A massa total da porta é constante e independente do local onde se exerce a força de contacto.",
      "Está incorreta: As dobradiças sustentam o peso da porta, mas não alteram a atração da gravidade terrestre.",
      "Está incorreta: O ar ambiente não atua como força propulsora espontânea na extremidade da porta."
    ],
    "nursingApplication": "Princípio físico crucial na ergonomia: alavancas com braços maiores exigem forças consideravelmente menores."
  },
  {
    "id": 1318,
    "topicId": 1,
    "question": "Como varia o momento de uma força F constante se o ângulo entre a força e a barra diminuir de 90° (perpendicular) para 0° (paralela à barra)?",
    "options": [
      "Aumenta progressivamente até atingir o valor máximo a 0°.",
      "Permanece rigorosamente constante porque a intensidade da força F e o comprimento d não mudam.",
      "Diminui progressivamente até se anular a 0°, pois M = F · d · sen(θ) e sen(0°) = 0.",
      "Inverte de sentido e faz a barra girar com velocidade angular infinita."
    ],
    "correctIndex": 2,
    "explanation": "A componente perpendicular eficaz é F · sen(θ). A 90° temos eficácia máxima (sen 90° = 1); a 0° a força puxa ao longo da barra (sem torque).",
    "distractorAnalysis": [
      "Está incorreta: A eficácia rotacional diminui ao inclinar a força, nunca aumentando a 0°.",
      "Está incorreta: O momento varia com o ângulo de aplicação, sendo máximo a 90° e nulo a 0°.",
      "Está incorreta: A 0° o momento é zero; não há rotação nem inversão com velocidade infinita."
    ],
    "nursingApplication": "Explica por que a eficácia da contração muscular varia com o ângulo articular ao longo do movimento."
  },
  {
    "id": 1319,
    "topicId": 1,
    "question": "Na mecânica física clássica, o que caracteriza especificamente um 'Binário de Forças' (ou Par de Forças)?",
    "options": [
      "Duas forças perpendiculares entre si que colidem frontalmente no vácuo.",
      "Uma força única que atua em dois corpos no mesmo instante com intensidade tripla.",
      "Duas forças com o mesmo sentido que aceleram o corpo em linha reta.",
      "Um par de forças com a mesma intensidade, direções paralelas, sentidos opostos e linhas de ação distintas, produzindo rotação pura sem qualquer translação."
    ],
    "correctIndex": 3,
    "explanation": "Um binário tem resultante de forças nula (∑F = 0), logo não translada o corpo, mas tem momento resultante não nulo (∑M ≠ 0), produzindo rotação pura.",
    "distractorAnalysis": [
      "Está incorreta: Forças perpendiculares não são paralelas e não formam um binário mecânico clássico.",
      "Está incorreta: Um binário é rigorosamente constituído por duas forças separadas e paralelas, não por uma força única.",
      "Está incorreta: Duas forças com o mesmo sentido somam-se e aceleram o corpo em translação, não formando um binário de rotação pura."
    ],
    "nursingApplication": "Exemplo das duas mãos a rodar o volante de uma cadeira de rodas em sentidos opostos com igual intensidade."
  },
  {
    "id": 1320,
    "topicId": 1,
    "question": "Qual é a propriedade fundamental do Momento de um Binário de Forças em relação a qualquer ponto de referência escolhido no espaço?",
    "options": [
      "O seu valor é rigorosamente constante e independente da posição do ponto de referência, dependendo apenas do produto da intensidade da força pela distância entre as suas linhas de ação (M = F · d).",
      "O seu valor anula-se automaticamente se o ponto de referência for colocado fora do corpo.",
      "O seu valor duplica a cada metro de distância a que o observador se encontra do eixo.",
      "O momento de um binário é sempre nulo porque as forças têm sentidos opostos."
    ],
    "correctIndex": 0,
    "explanation": "Diferente do momento de uma força isolada, o momento de um binário é invariante em relação à escolha da origem dos momentos.",
    "distractorAnalysis": [
      "Está incorreta: A posição do ponto de referência não anula o momento resultante de um binário no espaço.",
      "Está incorreta: O momento mecânico não depende da posição de observadores externos.",
      "Está incorreta: As forças anulam-se na translação (∑F = 0), mas os seus momentos somam-se no mesmo sentido rotacional (M = F · d ≠ 0)."
    ],
    "nursingApplication": "Princípio físico que permite girar manípulos circulares de torneiras ou macas com torque puro sem forças laterais parasitas."
  },
  {
    "id": 1321,
    "topicId": 1,
    "question": "O que mede o Momento de uma Força (ou Torque) na física?",
    "options": [
      "A quantidade total de calor dissipada pelas moléculas de um sólido sob pressão estática.",
      "A capacidade ou eficácia que uma força possui de produzir rotação de um corpo em torno de um ponto de apoio ou eixo.",
      "A velocidade linear instantânea adquirida pelo corpo em queda livre no vácuo.",
      "A taxa de decaimento radioativo de núcleos atómicos emissores de partículas beta."
    ],
    "correctIndex": 1,
    "explanation": "O momento mede a tendência rotacional: M = F · b, dependendo da força e da distância perpendicular ao eixo.",
    "distractorAnalysis": [
      "Está incorreta: Momento de força é uma grandeza mecânica vetorial, não energia térmica calorífica.",
      "Está incorreta: Velocidade em queda livre é uma grandeza cinemática medida em m/s, não momento de força.",
      "Está incorreta: Decaimento radioativo pertence à física nuclear, sem qualquer relação com rotação de sólidos rígidos."
    ],
    "nursingApplication": "Conceito central na biomecânica: os músculos geram momentos articulares para movimentar os segmentos corporais."
  },
  {
    "id": 1322,
    "topicId": 1,
    "question": "Como se calcula a intensidade do Momento de uma Força (M) aplicada perpendicularmente a um braço de alavanca?",
    "options": [
      "M = F / b (razão entre a força e o braço de momento).",
      "M = F + b (soma da força com a distância do braço).",
      "M = F · b (produto da intensidade da força pelo braço de momento perpendicular).",
      "M = F · b² (produto da força pelo quadrado da distância)."
    ],
    "correctIndex": 2,
    "explanation": "O momento é o produto da intensidade da força pela distância perpendicular da linha de ação ao eixo de rotação: M = F · b.",
    "distractorAnalysis": [
      "Está incorreta: Dividir a força pelo braço (F/b) viola a definição dimensional e física do momento de força.",
      "Está incorreta: Somar uma força em Newtons com uma distância em metros viola a homogeneidade dimensional da física.",
      "Está incorreta: O momento depende linearmente do braço de alavanca 'b', e não do seu quadrado."
    ],
    "nursingApplication": "Permite calcular o esforço rotacional nas articulações ao elevar objetos com os membros estendidos."
  },
  {
    "id": 1323,
    "topicId": 1,
    "question": "Qual é a unidade do Momento de uma Força (Torque) no Sistema Internacional de Unidades (SI)?",
    "options": [
      "Joule por segundo (J/s).",
      "Pascal por metro quadrado (Pa/m²).",
      "Quilograma por metro (kg/m).",
      "Newton-metro (N·m)."
    ],
    "correctIndex": 3,
    "explanation": "Como M = F · b (força em Newtons multiplicada por distância em metros), a unidade padrão no SI é o Newton-metro (N·m).",
    "distractorAnalysis": [
      "Está incorreta: Joule por segundo é Watt (unidade de potência mecânica ou elétrica).",
      "Está incorreta: Pascal por metro quadrado não é a unidade de momento de rotação.",
      "Está incorreta: Quilograma por metro é unidade de densidade linear de massa, não de momento de força."
    ],
    "nursingApplication": "Distingue formalmente a unidade de momento mecânico (N·m) de outras grandezas dimensionais."
  },
  {
    "id": 1324,
    "topicId": 1,
    "question": "O que é o 'Braço de uma Força' (ou braço de alavanca 'b') na definição do Momento?",
    "options": [
      "A distância perpendicular (à menor distância) medida entre o eixo de rotação e a linha de ação da força.",
      "O comprimento total do membro superior da pessoa que está a aplicar a força.",
      "A distância horizontal entre o operador e o teto da enfermaria hospitalar.",
      "O tempo em segundos durante o qual o músculo permanece em contração isométrica."
    ],
    "correctIndex": 0,
    "explanation": "O braço de momento 'b' é a distância geométrica medida a 90° entre o fulcro e a reta suporte da força.",
    "distractorAnalysis": [
      "Está incorreta: O braço anatómico é um segmento corporal, mas o 'braço de alavanca' em física é a distância perpendicular ao eixo.",
      "Está incorreta: A distância ao teto não tem qualquer relação com o eixo de rotação mecânico da alavanca.",
      "Está incorreta: O tempo mede duração temporal em segundos, não distância perpendicular em metros."
    ],
    "nursingApplication": "Compreender o braço perpendicular explica por que dobrar o cotovelo reduz o esforço muscular lombar."
  },
  {
    "id": 1325,
    "topicId": 1,
    "question": "Ao aplicar-se uma força perpendicular de 30 N na extremidade de uma barra a 0,6 m do eixo de rotação, qual é o momento de força gerado?",
    "options": [
      "50 N·m.",
      "18,0 N·m.",
      "30,6 N·m.",
      "5 N·m."
    ],
    "correctIndex": 1,
    "explanation": "Cálculo direto pelo produto M = F · b: M = 30 N · 0,6 m = 18,0 N·m.",
    "distractorAnalysis": [
      "Está incorreta: 50 N·m resultaria de dividir erroneamente 30 por 0,6 (F / b).",
      "Está incorreta: 30,6 N·m resultaria de somar incorretamente a força com a distância (30 + 0,6).",
      "Está incorreta: 5 N·m não corresponde ao produto da força pela distância perpendicular."
    ],
    "nursingApplication": "Permite quantificar o momento gerado em manivelas de regulação de camas e aparelhos de apoio."
  },
  {
    "id": 1326,
    "topicId": 1,
    "question": "O que acontece ao Momento de uma Força se a linha de ação da força passar exatamente pelo eixo de rotação (b = 0)?",
    "options": [
      "O momento atinge o valor infinito, provocando uma rotação destrutiva imediata.",
      "O momento depende exclusivamente da massa do corpo dividida pela gravidade.",
      "O momento é rigorosamente nulo (M = 0), não produzindo nenhuma rotação do corpo.",
      "O momento transforma-se espontaneamente numa força de atrito cinético no solo."
    ],
    "correctIndex": 2,
    "explanation": "Se a linha de ação passa pelo eixo, a distância perpendicular é zero (b = 0). Logo, M = F · 0 = 0 N·m (sem efeito rotacional).",
    "distractorAnalysis": [
      "Está incorreta: Não há momento infinito; sem braço de momento perpendicular, a rotação simplesmente não ocorre.",
      "Está incorreta: O momento é nulo independentemente da massa ou do campo gravitacional local.",
      "Está incorreta: Uma força aplicada no eixo não se transforma em atrito de solo; é absorvida pelo apoio do eixo."
    ],
    "nursingApplication": "Puxar ou empurrar diretamente o centro de uma articulação não produz movimento angular desse segmento."
  },
  {
    "id": 1327,
    "topicId": 1,
    "question": "Porque é mais fácil abrir ou fechar uma porta pesada empurrando junto ao puxador na extremidade do que perto das dobradiças?",
    "options": [
      "Porque a porta tem menos massa quando é empurrada na sua extremidade livre.",
      "Porque as dobradiças da porta anulam a gravidade terrestre quando a mão se afasta delas.",
      "Porque o ar ambiente empurra ativamente a porta na extremidade livre com força gravitacional.",
      "Porque na extremidade o braço de momento (b) é muito maior, gerando o mesmo torque com uma força muscular muito menor."
    ],
    "correctIndex": 3,
    "explanation": "Como M = F · b, para obter o mesmo torque 'M' de rotação, quanto maior o braço 'b', menor é a força 'F' necessária (F = M / b).",
    "distractorAnalysis": [
      "Está incorreta: A massa total da porta é constante e independente do local onde se exerce a força de contacto.",
      "Está incorreta: As dobradiças sustentam o peso da porta, mas não alteram a atração da gravidade terrestre.",
      "Está incorreta: O ar ambiente não atua como força propulsora espontânea na extremidade da porta."
    ],
    "nursingApplication": "Princípio físico crucial na ergonomia: alavancas com braços maiores exigem forças consideravelmente menores."
  },
  {
    "id": 1328,
    "topicId": 1,
    "question": "Como varia o momento de uma força F constante se o ângulo entre a força e a barra diminuir de 90° (perpendicular) para 0° (paralela à barra)?",
    "options": [
      "Diminui progressivamente até se anular a 0°, pois M = F · d · sen(θ) e sen(0°) = 0.",
      "Aumenta progressivamente até atingir o valor máximo a 0°.",
      "Permanece rigorosamente constante porque a intensidade da força F e o comprimento d não mudam.",
      "Inverte de sentido e faz a barra girar com velocidade angular infinita."
    ],
    "correctIndex": 0,
    "explanation": "A componente perpendicular eficaz é F · sen(θ). A 90° temos eficácia máxima (sen 90° = 1); a 0° a força puxa ao longo da barra (sem torque).",
    "distractorAnalysis": [
      "Está incorreta: A eficácia rotacional diminui ao inclinar a força, nunca aumentando a 0°.",
      "Está incorreta: O momento varia com o ângulo de aplicação, sendo máximo a 90° e nulo a 0°.",
      "Está incorreta: A 0° o momento é zero; não há rotação nem inversão com velocidade infinita."
    ],
    "nursingApplication": "Explica por que a eficácia da contração muscular varia com o ângulo articular ao longo do movimento."
  },
  {
    "id": 1329,
    "topicId": 1,
    "question": "Na mecânica física clássica, o que caracteriza especificamente um 'Binário de Forças' (ou Par de Forças)?",
    "options": [
      "Duas forças perpendiculares entre si que colidem frontalmente no vácuo.",
      "Um par de forças com a mesma intensidade, direções paralelas, sentidos opostos e linhas de ação distintas, produzindo rotação pura sem qualquer translação.",
      "Uma força única que atua em dois corpos no mesmo instante com intensidade tripla.",
      "Duas forças com o mesmo sentido que aceleram o corpo em linha reta."
    ],
    "correctIndex": 1,
    "explanation": "Um binário tem resultante de forças nula (∑F = 0), logo não translada o corpo, mas tem momento resultante não nulo (∑M ≠ 0), produzindo rotação pura.",
    "distractorAnalysis": [
      "Está incorreta: Forças perpendiculares não são paralelas e não formam um binário mecânico clássico.",
      "Está incorreta: Um binário é rigorosamente constituído por duas forças separadas e paralelas, não por uma força única.",
      "Está incorreta: Duas forças com o mesmo sentido somam-se e aceleram o corpo em translação, não formando um binário de rotação pura."
    ],
    "nursingApplication": "Exemplo das duas mãos a rodar o volante de uma cadeira de rodas em sentidos opostos com igual intensidade."
  },
  {
    "id": 1330,
    "topicId": 1,
    "question": "Qual é a propriedade fundamental do Momento de um Binário de Forças em relação a qualquer ponto de referência escolhido no espaço?",
    "options": [
      "O seu valor anula-se automaticamente se o ponto de referência for colocado fora do corpo.",
      "O seu valor duplica a cada metro de distância a que o observador se encontra do eixo.",
      "O seu valor é rigorosamente constante e independente da posição do ponto de referência, dependendo apenas do produto da intensidade da força pela distância entre as suas linhas de ação (M = F · d).",
      "O momento de um binário é sempre nulo porque as forças têm sentidos opostos."
    ],
    "correctIndex": 2,
    "explanation": "Diferente do momento de uma força isolada, o momento de um binário é invariante em relação à escolha da origem dos momentos.",
    "distractorAnalysis": [
      "Está incorreta: A posição do ponto de referência não anula o momento resultante de um binário no espaço.",
      "Está incorreta: O momento mecânico não depende da posição de observadores externos.",
      "Está incorreta: As forças anulam-se na translação (∑F = 0), mas os seus momentos somam-se no mesmo sentido rotacional (M = F · d ≠ 0)."
    ],
    "nursingApplication": "Princípio físico que permite girar manípulos circulares de torneiras ou macas com torque puro sem forças laterais parasitas."
  },
  {
    "id": 1331,
    "topicId": 1,
    "question": "O que mede o Momento de uma Força (ou Torque) na física?",
    "options": [
      "A quantidade total de calor dissipada pelas moléculas de um sólido sob pressão estática.",
      "A velocidade linear instantânea adquirida pelo corpo em queda livre no vácuo.",
      "A taxa de decaimento radioativo de núcleos atómicos emissores de partículas beta.",
      "A capacidade ou eficácia que uma força possui de produzir rotação de um corpo em torno de um ponto de apoio ou eixo."
    ],
    "correctIndex": 3,
    "explanation": "O momento mede a tendência rotacional: M = F · b, dependendo da força e da distância perpendicular ao eixo.",
    "distractorAnalysis": [
      "Está incorreta: Momento de força é uma grandeza mecânica vetorial, não energia térmica calorífica.",
      "Está incorreta: Velocidade em queda livre é uma grandeza cinemática medida em m/s, não momento de força.",
      "Está incorreta: Decaimento radioativo pertence à física nuclear, sem qualquer relação com rotação de sólidos rígidos."
    ],
    "nursingApplication": "Conceito central na biomecânica: os músculos geram momentos articulares para movimentar os segmentos corporais."
  },
  {
    "id": 1332,
    "topicId": 1,
    "question": "Como se calcula a intensidade do Momento de uma Força (M) aplicada perpendicularmente a um braço de alavanca?",
    "options": [
      "M = F · b (produto da intensidade da força pelo braço de momento perpendicular).",
      "M = F / b (razão entre a força e o braço de momento).",
      "M = F + b (soma da força com a distância do braço).",
      "M = F · b² (produto da força pelo quadrado da distância)."
    ],
    "correctIndex": 0,
    "explanation": "O momento é o produto da intensidade da força pela distância perpendicular da linha de ação ao eixo de rotação: M = F · b.",
    "distractorAnalysis": [
      "Está incorreta: Dividir a força pelo braço (F/b) viola a definição dimensional e física do momento de força.",
      "Está incorreta: Somar uma força em Newtons com uma distância em metros viola a homogeneidade dimensional da física.",
      "Está incorreta: O momento depende linearmente do braço de alavanca 'b', e não do seu quadrado."
    ],
    "nursingApplication": "Permite calcular o esforço rotacional nas articulações ao elevar objetos com os membros estendidos."
  },
  {
    "id": 1333,
    "topicId": 1,
    "question": "Qual é a unidade do Momento de uma Força (Torque) no Sistema Internacional de Unidades (SI)?",
    "options": [
      "Joule por segundo (J/s).",
      "Newton-metro (N·m).",
      "Pascal por metro quadrado (Pa/m²).",
      "Quilograma por metro (kg/m)."
    ],
    "correctIndex": 1,
    "explanation": "Como M = F · b (força em Newtons multiplicada por distância em metros), a unidade padrão no SI é o Newton-metro (N·m).",
    "distractorAnalysis": [
      "Está incorreta: Joule por segundo é Watt (unidade de potência mecânica ou elétrica).",
      "Está incorreta: Pascal por metro quadrado não é a unidade de momento de rotação.",
      "Está incorreta: Quilograma por metro é unidade de densidade linear de massa, não de momento de força."
    ],
    "nursingApplication": "Distingue formalmente a unidade de momento mecânico (N·m) de outras grandezas dimensionais."
  },
  {
    "id": 1334,
    "topicId": 1,
    "question": "O que é o 'Braço de uma Força' (ou braço de alavanca 'b') na definição do Momento?",
    "options": [
      "O comprimento total do membro superior da pessoa que está a aplicar a força.",
      "A distância horizontal entre o operador e o teto da enfermaria hospitalar.",
      "A distância perpendicular (à menor distância) medida entre o eixo de rotação e a linha de ação da força.",
      "O tempo em segundos durante o qual o músculo permanece em contração isométrica."
    ],
    "correctIndex": 2,
    "explanation": "O braço de momento 'b' é a distância geométrica medida a 90° entre o fulcro e a reta suporte da força.",
    "distractorAnalysis": [
      "Está incorreta: O braço anatómico é um segmento corporal, mas o 'braço de alavanca' em física é a distância perpendicular ao eixo.",
      "Está incorreta: A distância ao teto não tem qualquer relação com o eixo de rotação mecânico da alavanca.",
      "Está incorreta: O tempo mede duração temporal em segundos, não distância perpendicular em metros."
    ],
    "nursingApplication": "Compreender o braço perpendicular explica por que dobrar o cotovelo reduz o esforço muscular lombar."
  },
  {
    "id": 1335,
    "topicId": 1,
    "question": "Ao aplicar-se uma força perpendicular de 30 N na extremidade de uma barra a 0,6 m do eixo de rotação, qual é o momento de força gerado?",
    "options": [
      "50 N·m.",
      "30,6 N·m.",
      "5 N·m.",
      "18,0 N·m."
    ],
    "correctIndex": 3,
    "explanation": "Cálculo direto pelo produto M = F · b: M = 30 N · 0,6 m = 18,0 N·m.",
    "distractorAnalysis": [
      "Está incorreta: 50 N·m resultaria de dividir erroneamente 30 por 0,6 (F / b).",
      "Está incorreta: 30,6 N·m resultaria de somar incorretamente a força com a distância (30 + 0,6).",
      "Está incorreta: 5 N·m não corresponde ao produto da força pela distância perpendicular."
    ],
    "nursingApplication": "Permite quantificar o momento gerado em manivelas de regulação de camas e aparelhos de apoio."
  },
  {
    "id": 1336,
    "topicId": 1,
    "question": "O que acontece ao Momento de uma Força se a linha de ação da força passar exatamente pelo eixo de rotação (b = 0)?",
    "options": [
      "O momento é rigorosamente nulo (M = 0), não produzindo nenhuma rotação do corpo.",
      "O momento atinge o valor infinito, provocando uma rotação destrutiva imediata.",
      "O momento depende exclusivamente da massa do corpo dividida pela gravidade.",
      "O momento transforma-se espontaneamente numa força de atrito cinético no solo."
    ],
    "correctIndex": 0,
    "explanation": "Se a linha de ação passa pelo eixo, a distância perpendicular é zero (b = 0). Logo, M = F · 0 = 0 N·m (sem efeito rotacional).",
    "distractorAnalysis": [
      "Está incorreta: Não há momento infinito; sem braço de momento perpendicular, a rotação simplesmente não ocorre.",
      "Está incorreta: O momento é nulo independentemente da massa ou do campo gravitacional local.",
      "Está incorreta: Uma força aplicada no eixo não se transforma em atrito de solo; é absorvida pelo apoio do eixo."
    ],
    "nursingApplication": "Puxar ou empurrar diretamente o centro de uma articulação não produz movimento angular desse segmento."
  },
  {
    "id": 1337,
    "topicId": 1,
    "question": "Porque é mais fácil abrir ou fechar uma porta pesada empurrando junto ao puxador na extremidade do que perto das dobradiças?",
    "options": [
      "Porque a porta tem menos massa quando é empurrada na sua extremidade livre.",
      "Porque na extremidade o braço de momento (b) é muito maior, gerando o mesmo torque com uma força muscular muito menor.",
      "Porque as dobradiças da porta anulam a gravidade terrestre quando a mão se afasta delas.",
      "Porque o ar ambiente empurra ativamente a porta na extremidade livre com força gravitacional."
    ],
    "correctIndex": 1,
    "explanation": "Como M = F · b, para obter o mesmo torque 'M' de rotação, quanto maior o braço 'b', menor é a força 'F' necessária (F = M / b).",
    "distractorAnalysis": [
      "Está incorreta: A massa total da porta é constante e independente do local onde se exerce a força de contacto.",
      "Está incorreta: As dobradiças sustentam o peso da porta, mas não alteram a atração da gravidade terrestre.",
      "Está incorreta: O ar ambiente não atua como força propulsora espontânea na extremidade da porta."
    ],
    "nursingApplication": "Princípio físico crucial na ergonomia: alavancas com braços maiores exigem forças consideravelmente menores."
  },
  {
    "id": 1338,
    "topicId": 1,
    "question": "Como varia o momento de uma força F constante se o ângulo entre a força e a barra diminuir de 90° (perpendicular) para 0° (paralela à barra)?",
    "options": [
      "Aumenta progressivamente até atingir o valor máximo a 0°.",
      "Permanece rigorosamente constante porque a intensidade da força F e o comprimento d não mudam.",
      "Diminui progressivamente até se anular a 0°, pois M = F · d · sen(θ) e sen(0°) = 0.",
      "Inverte de sentido e faz a barra girar com velocidade angular infinita."
    ],
    "correctIndex": 2,
    "explanation": "A componente perpendicular eficaz é F · sen(θ). A 90° temos eficácia máxima (sen 90° = 1); a 0° a força puxa ao longo da barra (sem torque).",
    "distractorAnalysis": [
      "Está incorreta: A eficácia rotacional diminui ao inclinar a força, nunca aumentando a 0°.",
      "Está incorreta: O momento varia com o ângulo de aplicação, sendo máximo a 90° e nulo a 0°.",
      "Está incorreta: A 0° o momento é zero; não há rotação nem inversão com velocidade infinita."
    ],
    "nursingApplication": "Explica por que a eficácia da contração muscular varia com o ângulo articular ao longo do movimento."
  },
  {
    "id": 1339,
    "topicId": 1,
    "question": "Na mecânica física clássica, o que caracteriza especificamente um 'Binário de Forças' (ou Par de Forças)?",
    "options": [
      "Duas forças perpendiculares entre si que colidem frontalmente no vácuo.",
      "Uma força única que atua em dois corpos no mesmo instante com intensidade tripla.",
      "Duas forças com o mesmo sentido que aceleram o corpo em linha reta.",
      "Um par de forças com a mesma intensidade, direções paralelas, sentidos opostos e linhas de ação distintas, produzindo rotação pura sem qualquer translação."
    ],
    "correctIndex": 3,
    "explanation": "Um binário tem resultante de forças nula (∑F = 0), logo não translada o corpo, mas tem momento resultante não nulo (∑M ≠ 0), produzindo rotação pura.",
    "distractorAnalysis": [
      "Está incorreta: Forças perpendiculares não são paralelas e não formam um binário mecânico clássico.",
      "Está incorreta: Um binário é rigorosamente constituído por duas forças separadas e paralelas, não por uma força única.",
      "Está incorreta: Duas forças com o mesmo sentido somam-se e aceleram o corpo em translação, não formando um binário de rotação pura."
    ],
    "nursingApplication": "Exemplo das duas mãos a rodar o volante de uma cadeira de rodas em sentidos opostos com igual intensidade."
  },
  {
    "id": 1340,
    "topicId": 1,
    "question": "Qual é a propriedade fundamental do Momento de um Binário de Forças em relação a qualquer ponto de referência escolhido no espaço?",
    "options": [
      "O seu valor é rigorosamente constante e independente da posição do ponto de referência, dependendo apenas do produto da intensidade da força pela distância entre as suas linhas de ação (M = F · d).",
      "O seu valor anula-se automaticamente se o ponto de referência for colocado fora do corpo.",
      "O seu valor duplica a cada metro de distância a que o observador se encontra do eixo.",
      "O momento de um binário é sempre nulo porque as forças têm sentidos opostos."
    ],
    "correctIndex": 0,
    "explanation": "Diferente do momento de uma força isolada, o momento de um binário é invariante em relação à escolha da origem dos momentos.",
    "distractorAnalysis": [
      "Está incorreta: A posição do ponto de referência não anula o momento resultante de um binário no espaço.",
      "Está incorreta: O momento mecânico não depende da posição de observadores externos.",
      "Está incorreta: As forças anulam-se na translação (∑F = 0), mas os seus momentos somam-se no mesmo sentido rotacional (M = F · d ≠ 0)."
    ],
    "nursingApplication": "Princípio físico que permite girar manípulos circulares de torneiras ou macas com torque puro sem forças laterais parasitas."
  },
  {
    "id": 1341,
    "topicId": 1,
    "question": "O que mede o Momento de uma Força (ou Torque) na física?",
    "options": [
      "A quantidade total de calor dissipada pelas moléculas de um sólido sob pressão estática.",
      "A capacidade ou eficácia que uma força possui de produzir rotação de um corpo em torno de um ponto de apoio ou eixo.",
      "A velocidade linear instantânea adquirida pelo corpo em queda livre no vácuo.",
      "A taxa de decaimento radioativo de núcleos atómicos emissores de partículas beta."
    ],
    "correctIndex": 1,
    "explanation": "O momento mede a tendência rotacional: M = F · b, dependendo da força e da distância perpendicular ao eixo.",
    "distractorAnalysis": [
      "Está incorreta: Momento de força é uma grandeza mecânica vetorial, não energia térmica calorífica.",
      "Está incorreta: Velocidade em queda livre é uma grandeza cinemática medida em m/s, não momento de força.",
      "Está incorreta: Decaimento radioativo pertence à física nuclear, sem qualquer relação com rotação de sólidos rígidos."
    ],
    "nursingApplication": "Conceito central na biomecânica: os músculos geram momentos articulares para movimentar os segmentos corporais."
  },
  {
    "id": 1342,
    "topicId": 1,
    "question": "Como se calcula a intensidade do Momento de uma Força (M) aplicada perpendicularmente a um braço de alavanca?",
    "options": [
      "M = F / b (razão entre a força e o braço de momento).",
      "M = F + b (soma da força com a distância do braço).",
      "M = F · b (produto da intensidade da força pelo braço de momento perpendicular).",
      "M = F · b² (produto da força pelo quadrado da distância)."
    ],
    "correctIndex": 2,
    "explanation": "O momento é o produto da intensidade da força pela distância perpendicular da linha de ação ao eixo de rotação: M = F · b.",
    "distractorAnalysis": [
      "Está incorreta: Dividir a força pelo braço (F/b) viola a definição dimensional e física do momento de força.",
      "Está incorreta: Somar uma força em Newtons com uma distância em metros viola a homogeneidade dimensional da física.",
      "Está incorreta: O momento depende linearmente do braço de alavanca 'b', e não do seu quadrado."
    ],
    "nursingApplication": "Permite calcular o esforço rotacional nas articulações ao elevar objetos com os membros estendidos."
  },
  {
    "id": 1343,
    "topicId": 1,
    "question": "Qual é a unidade do Momento de uma Força (Torque) no Sistema Internacional de Unidades (SI)?",
    "options": [
      "Joule por segundo (J/s).",
      "Pascal por metro quadrado (Pa/m²).",
      "Quilograma por metro (kg/m).",
      "Newton-metro (N·m)."
    ],
    "correctIndex": 3,
    "explanation": "Como M = F · b (força em Newtons multiplicada por distância em metros), a unidade padrão no SI é o Newton-metro (N·m).",
    "distractorAnalysis": [
      "Está incorreta: Joule por segundo é Watt (unidade de potência mecânica ou elétrica).",
      "Está incorreta: Pascal por metro quadrado não é a unidade de momento de rotação.",
      "Está incorreta: Quilograma por metro é unidade de densidade linear de massa, não de momento de força."
    ],
    "nursingApplication": "Distingue formalmente a unidade de momento mecânico (N·m) de outras grandezas dimensionais."
  },
  {
    "id": 1344,
    "topicId": 1,
    "question": "O que é o 'Braço de uma Força' (ou braço de alavanca 'b') na definição do Momento?",
    "options": [
      "A distância perpendicular (à menor distância) medida entre o eixo de rotação e a linha de ação da força.",
      "O comprimento total do membro superior da pessoa que está a aplicar a força.",
      "A distância horizontal entre o operador e o teto da enfermaria hospitalar.",
      "O tempo em segundos durante o qual o músculo permanece em contração isométrica."
    ],
    "correctIndex": 0,
    "explanation": "O braço de momento 'b' é a distância geométrica medida a 90° entre o fulcro e a reta suporte da força.",
    "distractorAnalysis": [
      "Está incorreta: O braço anatómico é um segmento corporal, mas o 'braço de alavanca' em física é a distância perpendicular ao eixo.",
      "Está incorreta: A distância ao teto não tem qualquer relação com o eixo de rotação mecânico da alavanca.",
      "Está incorreta: O tempo mede duração temporal em segundos, não distância perpendicular em metros."
    ],
    "nursingApplication": "Compreender o braço perpendicular explica por que dobrar o cotovelo reduz o esforço muscular lombar."
  },
  {
    "id": 1345,
    "topicId": 1,
    "question": "Ao aplicar-se uma força perpendicular de 30 N na extremidade de uma barra a 0,6 m do eixo de rotação, qual é o momento de força gerado?",
    "options": [
      "50 N·m.",
      "18,0 N·m.",
      "30,6 N·m.",
      "5 N·m."
    ],
    "correctIndex": 1,
    "explanation": "Cálculo direto pelo produto M = F · b: M = 30 N · 0,6 m = 18,0 N·m.",
    "distractorAnalysis": [
      "Está incorreta: 50 N·m resultaria de dividir erroneamente 30 por 0,6 (F / b).",
      "Está incorreta: 30,6 N·m resultaria de somar incorretamente a força com a distância (30 + 0,6).",
      "Está incorreta: 5 N·m não corresponde ao produto da força pela distância perpendicular."
    ],
    "nursingApplication": "Permite quantificar o momento gerado em manivelas de regulação de camas e aparelhos de apoio."
  },
  {
    "id": 1346,
    "topicId": 1,
    "question": "O que acontece ao Momento de uma Força se a linha de ação da força passar exatamente pelo eixo de rotação (b = 0)?",
    "options": [
      "O momento atinge o valor infinito, provocando uma rotação destrutiva imediata.",
      "O momento depende exclusivamente da massa do corpo dividida pela gravidade.",
      "O momento é rigorosamente nulo (M = 0), não produzindo nenhuma rotação do corpo.",
      "O momento transforma-se espontaneamente numa força de atrito cinético no solo."
    ],
    "correctIndex": 2,
    "explanation": "Se a linha de ação passa pelo eixo, a distância perpendicular é zero (b = 0). Logo, M = F · 0 = 0 N·m (sem efeito rotacional).",
    "distractorAnalysis": [
      "Está incorreta: Não há momento infinito; sem braço de momento perpendicular, a rotação simplesmente não ocorre.",
      "Está incorreta: O momento é nulo independentemente da massa ou do campo gravitacional local.",
      "Está incorreta: Uma força aplicada no eixo não se transforma em atrito de solo; é absorvida pelo apoio do eixo."
    ],
    "nursingApplication": "Puxar ou empurrar diretamente o centro de uma articulação não produz movimento angular desse segmento."
  },
  {
    "id": 1347,
    "topicId": 1,
    "question": "Porque é mais fácil abrir ou fechar uma porta pesada empurrando junto ao puxador na extremidade do que perto das dobradiças?",
    "options": [
      "Porque a porta tem menos massa quando é empurrada na sua extremidade livre.",
      "Porque as dobradiças da porta anulam a gravidade terrestre quando a mão se afasta delas.",
      "Porque o ar ambiente empurra ativamente a porta na extremidade livre com força gravitacional.",
      "Porque na extremidade o braço de momento (b) é muito maior, gerando o mesmo torque com uma força muscular muito menor."
    ],
    "correctIndex": 3,
    "explanation": "Como M = F · b, para obter o mesmo torque 'M' de rotação, quanto maior o braço 'b', menor é a força 'F' necessária (F = M / b).",
    "distractorAnalysis": [
      "Está incorreta: A massa total da porta é constante e independente do local onde se exerce a força de contacto.",
      "Está incorreta: As dobradiças sustentam o peso da porta, mas não alteram a atração da gravidade terrestre.",
      "Está incorreta: O ar ambiente não atua como força propulsora espontânea na extremidade da porta."
    ],
    "nursingApplication": "Princípio físico crucial na ergonomia: alavancas com braços maiores exigem forças consideravelmente menores."
  },
  {
    "id": 1348,
    "topicId": 1,
    "question": "Como varia o momento de uma força F constante se o ângulo entre a força e a barra diminuir de 90° (perpendicular) para 0° (paralela à barra)?",
    "options": [
      "Diminui progressivamente até se anular a 0°, pois M = F · d · sen(θ) e sen(0°) = 0.",
      "Aumenta progressivamente até atingir o valor máximo a 0°.",
      "Permanece rigorosamente constante porque a intensidade da força F e o comprimento d não mudam.",
      "Inverte de sentido e faz a barra girar com velocidade angular infinita."
    ],
    "correctIndex": 0,
    "explanation": "A componente perpendicular eficaz é F · sen(θ). A 90° temos eficácia máxima (sen 90° = 1); a 0° a força puxa ao longo da barra (sem torque).",
    "distractorAnalysis": [
      "Está incorreta: A eficácia rotacional diminui ao inclinar a força, nunca aumentando a 0°.",
      "Está incorreta: O momento varia com o ângulo de aplicação, sendo máximo a 90° e nulo a 0°.",
      "Está incorreta: A 0° o momento é zero; não há rotação nem inversão com velocidade infinita."
    ],
    "nursingApplication": "Explica por que a eficácia da contração muscular varia com o ângulo articular ao longo do movimento."
  },
  {
    "id": 1349,
    "topicId": 1,
    "question": "Na mecânica física clássica, o que caracteriza especificamente um 'Binário de Forças' (ou Par de Forças)?",
    "options": [
      "Duas forças perpendiculares entre si que colidem frontalmente no vácuo.",
      "Um par de forças com a mesma intensidade, direções paralelas, sentidos opostos e linhas de ação distintas, produzindo rotação pura sem qualquer translação.",
      "Uma força única que atua em dois corpos no mesmo instante com intensidade tripla.",
      "Duas forças com o mesmo sentido que aceleram o corpo em linha reta."
    ],
    "correctIndex": 1,
    "explanation": "Um binário tem resultante de forças nula (∑F = 0), logo não translada o corpo, mas tem momento resultante não nulo (∑M ≠ 0), produzindo rotação pura.",
    "distractorAnalysis": [
      "Está incorreta: Forças perpendiculares não são paralelas e não formam um binário mecânico clássico.",
      "Está incorreta: Um binário é rigorosamente constituído por duas forças separadas e paralelas, não por uma força única.",
      "Está incorreta: Duas forças com o mesmo sentido somam-se e aceleram o corpo em translação, não formando um binário de rotação pura."
    ],
    "nursingApplication": "Exemplo das duas mãos a rodar o volante de uma cadeira de rodas em sentidos opostos com igual intensidade."
  },
  {
    "id": 1350,
    "topicId": 1,
    "question": "Qual é a propriedade fundamental do Momento de um Binário de Forças em relação a qualquer ponto de referência escolhido no espaço?",
    "options": [
      "O seu valor anula-se automaticamente se o ponto de referência for colocado fora do corpo.",
      "O seu valor duplica a cada metro de distância a que o observador se encontra do eixo.",
      "O seu valor é rigorosamente constante e independente da posição do ponto de referência, dependendo apenas do produto da intensidade da força pela distância entre as suas linhas de ação (M = F · d).",
      "O momento de um binário é sempre nulo porque as forças têm sentidos opostos."
    ],
    "correctIndex": 2,
    "explanation": "Diferente do momento de uma força isolada, o momento de um binário é invariante em relação à escolha da origem dos momentos.",
    "distractorAnalysis": [
      "Está incorreta: A posição do ponto de referência não anula o momento resultante de um binário no espaço.",
      "Está incorreta: O momento mecânico não depende da posição de observadores externos.",
      "Está incorreta: As forças anulam-se na translação (∑F = 0), mas os seus momentos somam-se no mesmo sentido rotacional (M = F · d ≠ 0)."
    ],
    "nursingApplication": "Princípio físico que permite girar manípulos circulares de torneiras ou macas com torque puro sem forças laterais parasitas."
  },
  {
    "id": 1351,
    "topicId": 1,
    "question": "O que é uma Alavanca, segundo a definição clássica formulada por Arquimedes?",
    "options": [
      "Um cabo flexível elástico que armazena energia térmica através de contração contínua.",
      "Uma superfície curva escorregadia que anula a aceleração gravítica local.",
      "Um cilindro oco que transporta fluidos compressíveis a alta velocidade.",
      "Uma barra rígida que pode girar em torno de um ponto de apoio fixo denominado fulcro."
    ],
    "correctIndex": 3,
    "explanation": "Uma alavanca é uma máquina simples composta por um elemento rígido capaz de rodar em torno de um fulcro (PA).",
    "distractorAnalysis": [
      "Está incorreta: A alavanca deve ser rígida para transmitir momentos; cabos flexíveis transmitem apenas tração.",
      "Está incorreta: Uma alavanca não é uma superfície escorregadia nem anula a gravidade.",
      "Está incorreta: Um cilindro condutor de fluidos é um tubo hidrodinâmico, não uma alavanca mecânica."
    ],
    "nursingApplication": "As alavancas biomecânicas do corpo humano utilizam os ossos como barras rígidas e as articulações como fulcros."
  },
  {
    "id": 1352,
    "topicId": 1,
    "question": "Quais são os três componentes essenciais que constituem qualquer sistema de alavanca?",
    "options": [
      "Ponto de apoio (fulcro), Força Potente (Fp) e Força Resistente (Fr).",
      "Apenas o peso, a densidade e o volume do corpo a ser movimentado.",
      "Velocidade angular, frequência de rotação e atrito aerodinâmico.",
      "Tensão elétrica, corrente contínua e resistência em Ohms."
    ],
    "correctIndex": 0,
    "explanation": "Qualquer alavanca requer um ponto de rotação (fulcro), uma força motora aplicada (potência) e uma carga a vencer (resistência).",
    "distractorAnalysis": [
      "Está incorreta: Peso, densidade e volume caracterizam a carga material, mas não formam um sistema de alavanca por si só.",
      "Está incorreta: Velocidade angular e frequência são propriedades dinâmicas do movimento, não componentes estruturais da alavanca.",
      "Está incorreta: Tensão e corrente pertencem à eletricidade e circuitos elétricos, não à mecânica das alavancas."
    ],
    "nursingApplication": "Permite identificar em qualquer movimento humano a articulação (fulcro), o músculo (potência) e a carga (resistência)."
  },
  {
    "id": 1353,
    "topicId": 1,
    "question": "Qual é a equação que traduz a Lei das Alavancas em situação de equilíbrio estático?",
    "options": [
      "Fp / bp = Fr / br (razão da força pelo braço).",
      "Fp · bp = Fr · br (o momento da força potente é igual ao momento da força resistente).",
      "Fp + bp = Fr + br (soma das forças com os braços).",
      "Fp · Fr = bp · br (produto das forças igual ao produto dos braços)."
    ],
    "correctIndex": 1,
    "explanation": "O equilíbrio de momentos (∑M = 0) exige que o momento potente seja igual ao momento resistente: Fp · bp = Fr · br.",
    "distractorAnalysis": [
      "Está incorreta: Dividir as forças pelos braços viola a relação dimensional do equilíbrio de momentos rotacionais.",
      "Está incorreta: Somar forças (N) com distâncias (m) é matematicamente inadmissível no cálculo de alavancas.",
      "Está incorreta: Multiplicar força por força e braço por braço não traduz a igualdade de momentos em torno do fulcro."
    ],
    "nursingApplication": "Fórmula fundamental usada para calcular a força muscular requerida para sustentar uma carga articular."
  },
  {
    "id": 1354,
    "topicId": 1,
    "question": "Como se caracteriza uma Alavanca de 1.ª Classe (Interfixa)?",
    "options": [
      "A força resistente localiza-se obrigatoriamente entre o fulcro e a força potente.",
      "A força potente localiza-se sempre entre o fulcro e a força resistente.",
      "O ponto de apoio (fulcro) localiza-se entre a força potente e a força resistente (Fp - PA - Fr).",
      "O fulcro encontra-se infinitamente afastado da barra rígida de suporte."
    ],
    "correctIndex": 2,
    "explanation": "Na alavanca interfixa, o ponto de apoio (PA) fica no meio, separando a força potente da força resistente.",
    "distractorAnalysis": [
      "Está incorreta: A resistência no meio define uma alavanca de 2.ª classe (inter-resistente), não de 1.ª classe.",
      "Está incorreta: A potência no meio define uma alavanca de 3.ª classe (interpotente), não de 1.ª classe.",
      "Está incorreta: O fulcro é um ponto físico real de apoio em torno do qual a alavanca roda, não podendo estar no infinito."
    ],
    "nursingApplication": "No corpo humano, o equilíbrio da cabeça sobre a coluna vertebral ilustra perfeitamente a alavanca interfixa."
  },
  {
    "id": 1355,
    "topicId": 1,
    "question": "Qual dos seguintes instrumentos do quotidiano é um exemplo clássico de Alavanca de 1.ª Classe (Interfixa)?",
    "options": [
      "Um quebra-nozes.",
      "Uma pinça de depilação.",
      "Um carrinho de mão de jardim.",
      "Uma tesoura comum."
    ],
    "correctIndex": 3,
    "explanation": "Numa tesoura, o eixo central com parafuso é o fulcro (PA), os dedos aplicam a potência e as lâminas cortam a resistência.",
    "distractorAnalysis": [
      "Está incorreta: O quebra-nozes tem a resistência no meio (noz), sendo uma alavanca de 2.ª classe (inter-resistente).",
      "Está incorreta: A pinça tem a potência no meio (onde os dedos apertam), sendo uma alavanca de 3.ª classe (interpotente).",
      "Está incorreta: O carrinho de mão tem a carga no meio das rodas e das pegas, sendo uma alavanca de 2.ª classe."
    ],
    "nursingApplication": "Tesouras cirúrgicas e pinças de corte operam sob o princípio da alavanca interfixa para multiplicar a força de corte."
  },
  {
    "id": 1356,
    "topicId": 1,
    "question": "Numa alavanca interfixa em equilíbrio, o braço da resistência mede 0,3 m e a carga resistente é de 200 N. Se o braço da potência medir 0,6 m, qual é a força potente necessária?",
    "options": [
      "100 N.",
      "400 N.",
      "200 N.",
      "60 N."
    ],
    "correctIndex": 0,
    "explanation": "Pela Lei das Alavancas: Fp · bp = Fr · br => Fp · 0,6 = 200 · 0,3 => Fp · 0,6 = 60 => Fp = 60 / 0,6 = 100 N.",
    "distractorAnalysis": [
      "Está incorreta: 400 N resultaria de inverter os braços de alavanca no cálculo de momentos.",
      "Está incorreta: 200 N seria a força se os braços fossem rigorosamente iguais (0,3 m = 0,3 m).",
      "Está incorreta: 60 N é o valor do momento resistente em N·m (200 · 0,3), não a força em Newtons."
    ],
    "nursingApplication": "Mostra como ter um braço potente o dobro do resistente permite levantar a carga com metade da força."
  },
  {
    "id": 1357,
    "topicId": 1,
    "question": "Como se comporta a Vantagem Mecânica (VM = bp / br) numa Alavanca de 1.ª Classe (Interfixa)?",
    "options": [
      "É obrigatoriamente e sempre superior a dez em qualquer situação prática.",
      "Pode ser maior que 1, igual a 1 ou menor que 1, dependendo da posição relativa do fulcro entre as forças.",
      "É estritamente igual a zero porque o fulcro central anula todas as vantagens de força.",
      "É sempre menor que 1, exigindo sistematicamente mais força do que a resistência a vencer."
    ],
    "correctIndex": 1,
    "explanation": "Na alavanca interfixa, se bp > br temos VM > 1; se bp = br temos VM = 1; se bp < br temos VM < 1.",
    "distractorAnalysis": [
      "Está incorreta: A vantagem mecânica não é obrigatoriamente superior a dez; depende da razão geométrica dos braços.",
      "Está incorreta: Uma vantagem mecânica não é zero; se fosse zero, a alavanca não transmitiria nenhuma força.",
      "Está incorreta: Ser sempre menor que 1 é a característica da alavanca de 3.ª classe, não da interfixa."
    ],
    "nursingApplication": "Permite ajustar a posição do fulcro para privilegiar força (braço potente longo) ou velocidade."
  },
  {
    "id": 1358,
    "topicId": 1,
    "question": "No corpo humano, o sistema que equilibra o peso da cabeça sobre a coluna cervical (músculos da nuca) é um exemplo de alavanca:",
    "options": [
      "De 2.ª Classe (Inter-resistente), onde o queixo funciona como o ponto de apoio fixo do solo.",
      "De 3.ª Classe (Interpotente), onde o cérebro atua como força potente geradora de calor.",
      "De 1.ª Classe (Interfixa), com a articulação atlanto-occipital a funcionar como fulcro central.",
      "De 4.ª Classe, uma categoria especial exclusiva de tecidos nervosos desmielinizados."
    ],
    "correctIndex": 2,
    "explanation": "O fulcro está na articulação atlanto-occipital (meio), a resistência é o peso anterior da cabeça e a potência são os músculos da nuca (trás).",
    "distractorAnalysis": [
      "Está incorreta: O queixo não é o fulcro; o apoio rotacional da cabeça situa-se nas vértebras cervicais superiores.",
      "Está incorreta: O cérebro não é um músculo nem gera força potente mecânica de tração.",
      "Está incorreta: Na física clássica existem apenas 3 classes de alavancas; não existe 4.ª classe."
    ],
    "nursingApplication": "Explica como a musculatura posterior do pescoço previne a queda da cabeça para a frente com mínimo esforço."
  },
  {
    "id": 1359,
    "topicId": 1,
    "question": "Numa alavanca de 1.ª classe em equilíbrio horizontal, onde a força potente de 80 N e a resistente de 120 N atuam verticalmente para baixo em lados opostos do fulcro, qual é a intensidade da força exercida pelo apoio sobre a alavanca?",
    "options": [
      "40 N, correspondente à diferença algébrica entre as duas forças.",
      "9600 N, obtida pela multiplicação das duas forças aplicadas.",
      "Zero N, porque o fulcro não suporta nenhuma carga em equilíbrio estático.",
      "200 N, orientada verticalmente para cima para anular a resultante das forças descendentes."
    ],
    "correctIndex": 3,
    "explanation": "Pela 1.ª condição de equilíbrio (∑F = 0), a força normal de reação do fulcro equilibra a soma de todas as forças para baixo: N = Fp + Fr = 80 + 120 = 200 N.",
    "distractorAnalysis": [
      "Está incorreta: 40 N seria a diferença se atuassem no mesmo sentido de translação sem o fulcro.",
      "Está incorreta: Multiplicar as forças não tem qualquer sentido físico para calcular o equilíbrio de translação vertical.",
      "Está incorreta: O fulcro suporta todo o peso das cargas e forças aplicadas sobre a barra rígida."
    ],
    "nursingApplication": "Permite dimensionar a resistência dos pontos de apoio articulados em aparelhos de suporte biomecânico."
  },
  {
    "id": 1360,
    "topicId": 1,
    "question": "No membro superior, a extensão do cotovelo pelo músculo tríceps braquial (com o olécrano a receber a tração muscular posterior ao fulcro na tróclea umeral) funciona como que tipo de alavanca?",
    "options": [
      "Alavanca de 1.ª Classe (Interfixa), porque o fulcro articular situa-se entre a linha de ação da força muscular potente e a resistência distal.",
      "Alavanca de 2.ª Classe (Inter-resistente), com a resistência posicionada entre o olécrano e o ombro.",
      "Alavanca de 3.ª Classe (Interpotente), porque todos os músculos do membro superior são obrigatoriamente de 3.ª classe.",
      "Alavanca Indiferente de Arquimedes sem qualquer momento de rotação."
    ],
    "correctIndex": 0,
    "explanation": "O eixo de rotação articular do cotovelo (tróclea umeral) fica no meio, separando a tração potente do tríceps no olécrano (posterior) da resistência do antebraço (anterior/distal).",
    "distractorAnalysis": [
      "Está incorreta: A resistência não fica no meio; o fulcro articular é que fica intermediário.",
      "Está incorreta: Embora a 3.ª classe seja muito comum, o tríceps braquial na extensão do cotovelo é um dos exemplos anatómicos clássicos de 1.ª classe.",
      "Está incorreta: Gera momento articular rotacional ativo na extensão do antebraço."
    ],
    "nursingApplication": "Fundamental para analisar os esforços musculares na impulsão e suporte de peso com os membros superiores."
  },
  {
    "id": 1361,
    "topicId": 1,
    "question": "O que é uma Alavanca, segundo a definição clássica formulada por Arquimedes?",
    "options": [
      "Um cabo flexível elástico que armazena energia térmica através de contração contínua.",
      "Uma barra rígida que pode girar em torno de um ponto de apoio fixo denominado fulcro.",
      "Uma superfície curva escorregadia que anula a aceleração gravítica local.",
      "Um cilindro oco que transporta fluidos compressíveis a alta velocidade."
    ],
    "correctIndex": 1,
    "explanation": "Uma alavanca é uma máquina simples composta por um elemento rígido capaz de rodar em torno de um fulcro (PA).",
    "distractorAnalysis": [
      "Está incorreta: A alavanca deve ser rígida para transmitir momentos; cabos flexíveis transmitem apenas tração.",
      "Está incorreta: Uma alavanca não é uma superfície escorregadia nem anula a gravidade.",
      "Está incorreta: Um cilindro condutor de fluidos é um tubo hidrodinâmico, não uma alavanca mecânica."
    ],
    "nursingApplication": "As alavancas biomecânicas do corpo humano utilizam os ossos como barras rígidas e as articulações como fulcros."
  },
  {
    "id": 1362,
    "topicId": 1,
    "question": "Quais são os três componentes essenciais que constituem qualquer sistema de alavanca?",
    "options": [
      "Apenas o peso, a densidade e o volume do corpo a ser movimentado.",
      "Velocidade angular, frequência de rotação e atrito aerodinâmico.",
      "Ponto de apoio (fulcro), Força Potente (Fp) e Força Resistente (Fr).",
      "Tensão elétrica, corrente contínua e resistência em Ohms."
    ],
    "correctIndex": 2,
    "explanation": "Qualquer alavanca requer um ponto de rotação (fulcro), uma força motora aplicada (potência) e uma carga a vencer (resistência).",
    "distractorAnalysis": [
      "Está incorreta: Peso, densidade e volume caracterizam a carga material, mas não formam um sistema de alavanca por si só.",
      "Está incorreta: Velocidade angular e frequência são propriedades dinâmicas do movimento, não componentes estruturais da alavanca.",
      "Está incorreta: Tensão e corrente pertencem à eletricidade e circuitos elétricos, não à mecânica das alavancas."
    ],
    "nursingApplication": "Permite identificar em qualquer movimento humano a articulação (fulcro), o músculo (potência) e a carga (resistência)."
  },
  {
    "id": 1363,
    "topicId": 1,
    "question": "Qual é a equação que traduz a Lei das Alavancas em situação de equilíbrio estático?",
    "options": [
      "Fp / bp = Fr / br (razão da força pelo braço).",
      "Fp + bp = Fr + br (soma das forças com os braços).",
      "Fp · Fr = bp · br (produto das forças igual ao produto dos braços).",
      "Fp · bp = Fr · br (o momento da força potente é igual ao momento da força resistente)."
    ],
    "correctIndex": 3,
    "explanation": "O equilíbrio de momentos (∑M = 0) exige que o momento potente seja igual ao momento resistente: Fp · bp = Fr · br.",
    "distractorAnalysis": [
      "Está incorreta: Dividir as forças pelos braços viola a relação dimensional do equilíbrio de momentos rotacionais.",
      "Está incorreta: Somar forças (N) com distâncias (m) é matematicamente inadmissível no cálculo de alavancas.",
      "Está incorreta: Multiplicar força por força e braço por braço não traduz a igualdade de momentos em torno do fulcro."
    ],
    "nursingApplication": "Fórmula fundamental usada para calcular a força muscular requerida para sustentar uma carga articular."
  },
  {
    "id": 1364,
    "topicId": 1,
    "question": "Como se caracteriza uma Alavanca de 1.ª Classe (Interfixa)?",
    "options": [
      "O ponto de apoio (fulcro) localiza-se entre a força potente e a força resistente (Fp - PA - Fr).",
      "A força resistente localiza-se obrigatoriamente entre o fulcro e a força potente.",
      "A força potente localiza-se sempre entre o fulcro e a força resistente.",
      "O fulcro encontra-se infinitamente afastado da barra rígida de suporte."
    ],
    "correctIndex": 0,
    "explanation": "Na alavanca interfixa, o ponto de apoio (PA) fica no meio, separando a força potente da força resistente.",
    "distractorAnalysis": [
      "Está incorreta: A resistência no meio define uma alavanca de 2.ª classe (inter-resistente), não de 1.ª classe.",
      "Está incorreta: A potência no meio define uma alavanca de 3.ª classe (interpotente), não de 1.ª classe.",
      "Está incorreta: O fulcro é um ponto físico real de apoio em torno do qual a alavanca roda, não podendo estar no infinito."
    ],
    "nursingApplication": "No corpo humano, o equilíbrio da cabeça sobre a coluna vertebral ilustra perfeitamente a alavanca interfixa."
  },
  {
    "id": 1365,
    "topicId": 1,
    "question": "Qual dos seguintes instrumentos do quotidiano é um exemplo clássico de Alavanca de 1.ª Classe (Interfixa)?",
    "options": [
      "Um quebra-nozes.",
      "Uma tesoura comum.",
      "Uma pinça de depilação.",
      "Um carrinho de mão de jardim."
    ],
    "correctIndex": 1,
    "explanation": "Numa tesoura, o eixo central com parafuso é o fulcro (PA), os dedos aplicam a potência e as lâminas cortam a resistência.",
    "distractorAnalysis": [
      "Está incorreta: O quebra-nozes tem a resistência no meio (noz), sendo uma alavanca de 2.ª classe (inter-resistente).",
      "Está incorreta: A pinça tem a potência no meio (onde os dedos apertam), sendo uma alavanca de 3.ª classe (interpotente).",
      "Está incorreta: O carrinho de mão tem a carga no meio das rodas e das pegas, sendo uma alavanca de 2.ª classe."
    ],
    "nursingApplication": "Tesouras cirúrgicas e pinças de corte operam sob o princípio da alavanca interfixa para multiplicar a força de corte."
  },
  {
    "id": 1366,
    "topicId": 1,
    "question": "Numa alavanca interfixa em equilíbrio, o braço da resistência mede 0,3 m e a carga resistente é de 200 N. Se o braço da potência medir 0,6 m, qual é a força potente necessária?",
    "options": [
      "400 N.",
      "200 N.",
      "100 N.",
      "60 N."
    ],
    "correctIndex": 2,
    "explanation": "Pela Lei das Alavancas: Fp · bp = Fr · br => Fp · 0,6 = 200 · 0,3 => Fp · 0,6 = 60 => Fp = 60 / 0,6 = 100 N.",
    "distractorAnalysis": [
      "Está incorreta: 400 N resultaria de inverter os braços de alavanca no cálculo de momentos.",
      "Está incorreta: 200 N seria a força se os braços fossem rigorosamente iguais (0,3 m = 0,3 m).",
      "Está incorreta: 60 N é o valor do momento resistente em N·m (200 · 0,3), não a força em Newtons."
    ],
    "nursingApplication": "Mostra como ter um braço potente o dobro do resistente permite levantar a carga com metade da força."
  },
  {
    "id": 1367,
    "topicId": 1,
    "question": "Como se comporta a Vantagem Mecânica (VM = bp / br) numa Alavanca de 1.ª Classe (Interfixa)?",
    "options": [
      "É obrigatoriamente e sempre superior a dez em qualquer situação prática.",
      "É estritamente igual a zero porque o fulcro central anula todas as vantagens de força.",
      "É sempre menor que 1, exigindo sistematicamente mais força do que a resistência a vencer.",
      "Pode ser maior que 1, igual a 1 ou menor que 1, dependendo da posição relativa do fulcro entre as forças."
    ],
    "correctIndex": 3,
    "explanation": "Na alavanca interfixa, se bp > br temos VM > 1; se bp = br temos VM = 1; se bp < br temos VM < 1.",
    "distractorAnalysis": [
      "Está incorreta: A vantagem mecânica não é obrigatoriamente superior a dez; depende da razão geométrica dos braços.",
      "Está incorreta: Uma vantagem mecânica não é zero; se fosse zero, a alavanca não transmitiria nenhuma força.",
      "Está incorreta: Ser sempre menor que 1 é a característica da alavanca de 3.ª classe, não da interfixa."
    ],
    "nursingApplication": "Permite ajustar a posição do fulcro para privilegiar força (braço potente longo) ou velocidade."
  },
  {
    "id": 1368,
    "topicId": 1,
    "question": "No corpo humano, o sistema que equilibra o peso da cabeça sobre a coluna cervical (músculos da nuca) é um exemplo de alavanca:",
    "options": [
      "De 1.ª Classe (Interfixa), com a articulação atlanto-occipital a funcionar como fulcro central.",
      "De 2.ª Classe (Inter-resistente), onde o queixo funciona como o ponto de apoio fixo do solo.",
      "De 3.ª Classe (Interpotente), onde o cérebro atua como força potente geradora de calor.",
      "De 4.ª Classe, uma categoria especial exclusiva de tecidos nervosos desmielinizados."
    ],
    "correctIndex": 0,
    "explanation": "O fulcro está na articulação atlanto-occipital (meio), a resistência é o peso anterior da cabeça e a potência são os músculos da nuca (trás).",
    "distractorAnalysis": [
      "Está incorreta: O queixo não é o fulcro; o apoio rotacional da cabeça situa-se nas vértebras cervicais superiores.",
      "Está incorreta: O cérebro não é um músculo nem gera força potente mecânica de tração.",
      "Está incorreta: Na física clássica existem apenas 3 classes de alavancas; não existe 4.ª classe."
    ],
    "nursingApplication": "Explica como a musculatura posterior do pescoço previne a queda da cabeça para a frente com mínimo esforço."
  },
  {
    "id": 1369,
    "topicId": 1,
    "question": "Numa alavanca de 1.ª classe em equilíbrio horizontal, onde a força potente de 80 N e a resistente de 120 N atuam verticalmente para baixo em lados opostos do fulcro, qual é a intensidade da força exercida pelo apoio sobre a alavanca?",
    "options": [
      "40 N, correspondente à diferença algébrica entre as duas forças.",
      "200 N, orientada verticalmente para cima para anular a resultante das forças descendentes.",
      "9600 N, obtida pela multiplicação das duas forças aplicadas.",
      "Zero N, porque o fulcro não suporta nenhuma carga em equilíbrio estático."
    ],
    "correctIndex": 1,
    "explanation": "Pela 1.ª condição de equilíbrio (∑F = 0), a força normal de reação do fulcro equilibra a soma de todas as forças para baixo: N = Fp + Fr = 80 + 120 = 200 N.",
    "distractorAnalysis": [
      "Está incorreta: 40 N seria a diferença se atuassem no mesmo sentido de translação sem o fulcro.",
      "Está incorreta: Multiplicar as forças não tem qualquer sentido físico para calcular o equilíbrio de translação vertical.",
      "Está incorreta: O fulcro suporta todo o peso das cargas e forças aplicadas sobre a barra rígida."
    ],
    "nursingApplication": "Permite dimensionar a resistência dos pontos de apoio articulados em aparelhos de suporte biomecânico."
  },
  {
    "id": 1370,
    "topicId": 1,
    "question": "No membro superior, a extensão do cotovelo pelo músculo tríceps braquial (com o olécrano a receber a tração muscular posterior ao fulcro na tróclea umeral) funciona como que tipo de alavanca?",
    "options": [
      "Alavanca de 2.ª Classe (Inter-resistente), com a resistência posicionada entre o olécrano e o ombro.",
      "Alavanca de 3.ª Classe (Interpotente), porque todos os músculos do membro superior são obrigatoriamente de 3.ª classe.",
      "Alavanca de 1.ª Classe (Interfixa), porque o fulcro articular situa-se entre a linha de ação da força muscular potente e a resistência distal.",
      "Alavanca Indiferente de Arquimedes sem qualquer momento de rotação."
    ],
    "correctIndex": 2,
    "explanation": "O eixo de rotação articular do cotovelo (tróclea umeral) fica no meio, separando a tração potente do tríceps no olécrano (posterior) da resistência do antebraço (anterior/distal).",
    "distractorAnalysis": [
      "Está incorreta: A resistência não fica no meio; o fulcro articular é que fica intermediário.",
      "Está incorreta: Embora a 3.ª classe seja muito comum, o tríceps braquial na extensão do cotovelo é um dos exemplos anatómicos clássicos de 1.ª classe.",
      "Está incorreta: Gera momento articular rotacional ativo na extensão do antebraço."
    ],
    "nursingApplication": "Fundamental para analisar os esforços musculares na impulsão e suporte de peso com os membros superiores."
  },
  {
    "id": 1371,
    "topicId": 1,
    "question": "O que é uma Alavanca, segundo a definição clássica formulada por Arquimedes?",
    "options": [
      "Um cabo flexível elástico que armazena energia térmica através de contração contínua.",
      "Uma superfície curva escorregadia que anula a aceleração gravítica local.",
      "Um cilindro oco que transporta fluidos compressíveis a alta velocidade.",
      "Uma barra rígida que pode girar em torno de um ponto de apoio fixo denominado fulcro."
    ],
    "correctIndex": 3,
    "explanation": "Uma alavanca é uma máquina simples composta por um elemento rígido capaz de rodar em torno de um fulcro (PA).",
    "distractorAnalysis": [
      "Está incorreta: A alavanca deve ser rígida para transmitir momentos; cabos flexíveis transmitem apenas tração.",
      "Está incorreta: Uma alavanca não é uma superfície escorregadia nem anula a gravidade.",
      "Está incorreta: Um cilindro condutor de fluidos é um tubo hidrodinâmico, não uma alavanca mecânica."
    ],
    "nursingApplication": "As alavancas biomecânicas do corpo humano utilizam os ossos como barras rígidas e as articulações como fulcros."
  },
  {
    "id": 1372,
    "topicId": 1,
    "question": "Quais são os três componentes essenciais que constituem qualquer sistema de alavanca?",
    "options": [
      "Ponto de apoio (fulcro), Força Potente (Fp) e Força Resistente (Fr).",
      "Apenas o peso, a densidade e o volume do corpo a ser movimentado.",
      "Velocidade angular, frequência de rotação e atrito aerodinâmico.",
      "Tensão elétrica, corrente contínua e resistência em Ohms."
    ],
    "correctIndex": 0,
    "explanation": "Qualquer alavanca requer um ponto de rotação (fulcro), uma força motora aplicada (potência) e uma carga a vencer (resistência).",
    "distractorAnalysis": [
      "Está incorreta: Peso, densidade e volume caracterizam a carga material, mas não formam um sistema de alavanca por si só.",
      "Está incorreta: Velocidade angular e frequência são propriedades dinâmicas do movimento, não componentes estruturais da alavanca.",
      "Está incorreta: Tensão e corrente pertencem à eletricidade e circuitos elétricos, não à mecânica das alavancas."
    ],
    "nursingApplication": "Permite identificar em qualquer movimento humano a articulação (fulcro), o músculo (potência) e a carga (resistência)."
  },
  {
    "id": 1373,
    "topicId": 1,
    "question": "Qual é a equação que traduz a Lei das Alavancas em situação de equilíbrio estático?",
    "options": [
      "Fp / bp = Fr / br (razão da força pelo braço).",
      "Fp · bp = Fr · br (o momento da força potente é igual ao momento da força resistente).",
      "Fp + bp = Fr + br (soma das forças com os braços).",
      "Fp · Fr = bp · br (produto das forças igual ao produto dos braços)."
    ],
    "correctIndex": 1,
    "explanation": "O equilíbrio de momentos (∑M = 0) exige que o momento potente seja igual ao momento resistente: Fp · bp = Fr · br.",
    "distractorAnalysis": [
      "Está incorreta: Dividir as forças pelos braços viola a relação dimensional do equilíbrio de momentos rotacionais.",
      "Está incorreta: Somar forças (N) com distâncias (m) é matematicamente inadmissível no cálculo de alavancas.",
      "Está incorreta: Multiplicar força por força e braço por braço não traduz a igualdade de momentos em torno do fulcro."
    ],
    "nursingApplication": "Fórmula fundamental usada para calcular a força muscular requerida para sustentar uma carga articular."
  },
  {
    "id": 1374,
    "topicId": 1,
    "question": "Como se caracteriza uma Alavanca de 1.ª Classe (Interfixa)?",
    "options": [
      "A força resistente localiza-se obrigatoriamente entre o fulcro e a força potente.",
      "A força potente localiza-se sempre entre o fulcro e a força resistente.",
      "O ponto de apoio (fulcro) localiza-se entre a força potente e a força resistente (Fp - PA - Fr).",
      "O fulcro encontra-se infinitamente afastado da barra rígida de suporte."
    ],
    "correctIndex": 2,
    "explanation": "Na alavanca interfixa, o ponto de apoio (PA) fica no meio, separando a força potente da força resistente.",
    "distractorAnalysis": [
      "Está incorreta: A resistência no meio define uma alavanca de 2.ª classe (inter-resistente), não de 1.ª classe.",
      "Está incorreta: A potência no meio define uma alavanca de 3.ª classe (interpotente), não de 1.ª classe.",
      "Está incorreta: O fulcro é um ponto físico real de apoio em torno do qual a alavanca roda, não podendo estar no infinito."
    ],
    "nursingApplication": "No corpo humano, o equilíbrio da cabeça sobre a coluna vertebral ilustra perfeitamente a alavanca interfixa."
  },
  {
    "id": 1375,
    "topicId": 1,
    "question": "Qual dos seguintes instrumentos do quotidiano é um exemplo clássico de Alavanca de 1.ª Classe (Interfixa)?",
    "options": [
      "Um quebra-nozes.",
      "Uma pinça de depilação.",
      "Um carrinho de mão de jardim.",
      "Uma tesoura comum."
    ],
    "correctIndex": 3,
    "explanation": "Numa tesoura, o eixo central com parafuso é o fulcro (PA), os dedos aplicam a potência e as lâminas cortam a resistência.",
    "distractorAnalysis": [
      "Está incorreta: O quebra-nozes tem a resistência no meio (noz), sendo uma alavanca de 2.ª classe (inter-resistente).",
      "Está incorreta: A pinça tem a potência no meio (onde os dedos apertam), sendo uma alavanca de 3.ª classe (interpotente).",
      "Está incorreta: O carrinho de mão tem a carga no meio das rodas e das pegas, sendo uma alavanca de 2.ª classe."
    ],
    "nursingApplication": "Tesouras cirúrgicas e pinças de corte operam sob o princípio da alavanca interfixa para multiplicar a força de corte."
  },
  {
    "id": 1376,
    "topicId": 1,
    "question": "Numa alavanca interfixa em equilíbrio, o braço da resistência mede 0,3 m e a carga resistente é de 200 N. Se o braço da potência medir 0,6 m, qual é a força potente necessária?",
    "options": [
      "100 N.",
      "400 N.",
      "200 N.",
      "60 N."
    ],
    "correctIndex": 0,
    "explanation": "Pela Lei das Alavancas: Fp · bp = Fr · br => Fp · 0,6 = 200 · 0,3 => Fp · 0,6 = 60 => Fp = 60 / 0,6 = 100 N.",
    "distractorAnalysis": [
      "Está incorreta: 400 N resultaria de inverter os braços de alavanca no cálculo de momentos.",
      "Está incorreta: 200 N seria a força se os braços fossem rigorosamente iguais (0,3 m = 0,3 m).",
      "Está incorreta: 60 N é o valor do momento resistente em N·m (200 · 0,3), não a força em Newtons."
    ],
    "nursingApplication": "Mostra como ter um braço potente o dobro do resistente permite levantar a carga com metade da força."
  },
  {
    "id": 1377,
    "topicId": 1,
    "question": "Como se comporta a Vantagem Mecânica (VM = bp / br) numa Alavanca de 1.ª Classe (Interfixa)?",
    "options": [
      "É obrigatoriamente e sempre superior a dez em qualquer situação prática.",
      "Pode ser maior que 1, igual a 1 ou menor que 1, dependendo da posição relativa do fulcro entre as forças.",
      "É estritamente igual a zero porque o fulcro central anula todas as vantagens de força.",
      "É sempre menor que 1, exigindo sistematicamente mais força do que a resistência a vencer."
    ],
    "correctIndex": 1,
    "explanation": "Na alavanca interfixa, se bp > br temos VM > 1; se bp = br temos VM = 1; se bp < br temos VM < 1.",
    "distractorAnalysis": [
      "Está incorreta: A vantagem mecânica não é obrigatoriamente superior a dez; depende da razão geométrica dos braços.",
      "Está incorreta: Uma vantagem mecânica não é zero; se fosse zero, a alavanca não transmitiria nenhuma força.",
      "Está incorreta: Ser sempre menor que 1 é a característica da alavanca de 3.ª classe, não da interfixa."
    ],
    "nursingApplication": "Permite ajustar a posição do fulcro para privilegiar força (braço potente longo) ou velocidade."
  },
  {
    "id": 1378,
    "topicId": 1,
    "question": "No corpo humano, o sistema que equilibra o peso da cabeça sobre a coluna cervical (músculos da nuca) é um exemplo de alavanca:",
    "options": [
      "De 2.ª Classe (Inter-resistente), onde o queixo funciona como o ponto de apoio fixo do solo.",
      "De 3.ª Classe (Interpotente), onde o cérebro atua como força potente geradora de calor.",
      "De 1.ª Classe (Interfixa), com a articulação atlanto-occipital a funcionar como fulcro central.",
      "De 4.ª Classe, uma categoria especial exclusiva de tecidos nervosos desmielinizados."
    ],
    "correctIndex": 2,
    "explanation": "O fulcro está na articulação atlanto-occipital (meio), a resistência é o peso anterior da cabeça e a potência são os músculos da nuca (trás).",
    "distractorAnalysis": [
      "Está incorreta: O queixo não é o fulcro; o apoio rotacional da cabeça situa-se nas vértebras cervicais superiores.",
      "Está incorreta: O cérebro não é um músculo nem gera força potente mecânica de tração.",
      "Está incorreta: Na física clássica existem apenas 3 classes de alavancas; não existe 4.ª classe."
    ],
    "nursingApplication": "Explica como a musculatura posterior do pescoço previne a queda da cabeça para a frente com mínimo esforço."
  },
  {
    "id": 1379,
    "topicId": 1,
    "question": "Numa alavanca de 1.ª classe em equilíbrio horizontal, onde a força potente de 80 N e a resistente de 120 N atuam verticalmente para baixo em lados opostos do fulcro, qual é a intensidade da força exercida pelo apoio sobre a alavanca?",
    "options": [
      "40 N, correspondente à diferença algébrica entre as duas forças.",
      "9600 N, obtida pela multiplicação das duas forças aplicadas.",
      "Zero N, porque o fulcro não suporta nenhuma carga em equilíbrio estático.",
      "200 N, orientada verticalmente para cima para anular a resultante das forças descendentes."
    ],
    "correctIndex": 3,
    "explanation": "Pela 1.ª condição de equilíbrio (∑F = 0), a força normal de reação do fulcro equilibra a soma de todas as forças para baixo: N = Fp + Fr = 80 + 120 = 200 N.",
    "distractorAnalysis": [
      "Está incorreta: 40 N seria a diferença se atuassem no mesmo sentido de translação sem o fulcro.",
      "Está incorreta: Multiplicar as forças não tem qualquer sentido físico para calcular o equilíbrio de translação vertical.",
      "Está incorreta: O fulcro suporta todo o peso das cargas e forças aplicadas sobre a barra rígida."
    ],
    "nursingApplication": "Permite dimensionar a resistência dos pontos de apoio articulados em aparelhos de suporte biomecânico."
  },
  {
    "id": 1380,
    "topicId": 1,
    "question": "No membro superior, a extensão do cotovelo pelo músculo tríceps braquial (com o olécrano a receber a tração muscular posterior ao fulcro na tróclea umeral) funciona como que tipo de alavanca?",
    "options": [
      "Alavanca de 1.ª Classe (Interfixa), porque o fulcro articular situa-se entre a linha de ação da força muscular potente e a resistência distal.",
      "Alavanca de 2.ª Classe (Inter-resistente), com a resistência posicionada entre o olécrano e o ombro.",
      "Alavanca de 3.ª Classe (Interpotente), porque todos os músculos do membro superior são obrigatoriamente de 3.ª classe.",
      "Alavanca Indiferente de Arquimedes sem qualquer momento de rotação."
    ],
    "correctIndex": 0,
    "explanation": "O eixo de rotação articular do cotovelo (tróclea umeral) fica no meio, separando a tração potente do tríceps no olécrano (posterior) da resistência do antebraço (anterior/distal).",
    "distractorAnalysis": [
      "Está incorreta: A resistência não fica no meio; o fulcro articular é que fica intermediário.",
      "Está incorreta: Embora a 3.ª classe seja muito comum, o tríceps braquial na extensão do cotovelo é um dos exemplos anatómicos clássicos de 1.ª classe.",
      "Está incorreta: Gera momento articular rotacional ativo na extensão do antebraço."
    ],
    "nursingApplication": "Fundamental para analisar os esforços musculares na impulsão e suporte de peso com os membros superiores."
  },
  {
    "id": 1381,
    "topicId": 1,
    "question": "O que é uma Alavanca, segundo a definição clássica formulada por Arquimedes?",
    "options": [
      "Um cabo flexível elástico que armazena energia térmica através de contração contínua.",
      "Uma barra rígida que pode girar em torno de um ponto de apoio fixo denominado fulcro.",
      "Uma superfície curva escorregadia que anula a aceleração gravítica local.",
      "Um cilindro oco que transporta fluidos compressíveis a alta velocidade."
    ],
    "correctIndex": 1,
    "explanation": "Uma alavanca é uma máquina simples composta por um elemento rígido capaz de rodar em torno de um fulcro (PA).",
    "distractorAnalysis": [
      "Está incorreta: A alavanca deve ser rígida para transmitir momentos; cabos flexíveis transmitem apenas tração.",
      "Está incorreta: Uma alavanca não é uma superfície escorregadia nem anula a gravidade.",
      "Está incorreta: Um cilindro condutor de fluidos é um tubo hidrodinâmico, não uma alavanca mecânica."
    ],
    "nursingApplication": "As alavancas biomecânicas do corpo humano utilizam os ossos como barras rígidas e as articulações como fulcros."
  },
  {
    "id": 1382,
    "topicId": 1,
    "question": "Quais são os três componentes essenciais que constituem qualquer sistema de alavanca?",
    "options": [
      "Apenas o peso, a densidade e o volume do corpo a ser movimentado.",
      "Velocidade angular, frequência de rotação e atrito aerodinâmico.",
      "Ponto de apoio (fulcro), Força Potente (Fp) e Força Resistente (Fr).",
      "Tensão elétrica, corrente contínua e resistência em Ohms."
    ],
    "correctIndex": 2,
    "explanation": "Qualquer alavanca requer um ponto de rotação (fulcro), uma força motora aplicada (potência) e uma carga a vencer (resistência).",
    "distractorAnalysis": [
      "Está incorreta: Peso, densidade e volume caracterizam a carga material, mas não formam um sistema de alavanca por si só.",
      "Está incorreta: Velocidade angular e frequência são propriedades dinâmicas do movimento, não componentes estruturais da alavanca.",
      "Está incorreta: Tensão e corrente pertencem à eletricidade e circuitos elétricos, não à mecânica das alavancas."
    ],
    "nursingApplication": "Permite identificar em qualquer movimento humano a articulação (fulcro), o músculo (potência) e a carga (resistência)."
  },
  {
    "id": 1383,
    "topicId": 1,
    "question": "Qual é a equação que traduz a Lei das Alavancas em situação de equilíbrio estático?",
    "options": [
      "Fp / bp = Fr / br (razão da força pelo braço).",
      "Fp + bp = Fr + br (soma das forças com os braços).",
      "Fp · Fr = bp · br (produto das forças igual ao produto dos braços).",
      "Fp · bp = Fr · br (o momento da força potente é igual ao momento da força resistente)."
    ],
    "correctIndex": 3,
    "explanation": "O equilíbrio de momentos (∑M = 0) exige que o momento potente seja igual ao momento resistente: Fp · bp = Fr · br.",
    "distractorAnalysis": [
      "Está incorreta: Dividir as forças pelos braços viola a relação dimensional do equilíbrio de momentos rotacionais.",
      "Está incorreta: Somar forças (N) com distâncias (m) é matematicamente inadmissível no cálculo de alavancas.",
      "Está incorreta: Multiplicar força por força e braço por braço não traduz a igualdade de momentos em torno do fulcro."
    ],
    "nursingApplication": "Fórmula fundamental usada para calcular a força muscular requerida para sustentar uma carga articular."
  },
  {
    "id": 1384,
    "topicId": 1,
    "question": "Como se caracteriza uma Alavanca de 1.ª Classe (Interfixa)?",
    "options": [
      "O ponto de apoio (fulcro) localiza-se entre a força potente e a força resistente (Fp - PA - Fr).",
      "A força resistente localiza-se obrigatoriamente entre o fulcro e a força potente.",
      "A força potente localiza-se sempre entre o fulcro e a força resistente.",
      "O fulcro encontra-se infinitamente afastado da barra rígida de suporte."
    ],
    "correctIndex": 0,
    "explanation": "Na alavanca interfixa, o ponto de apoio (PA) fica no meio, separando a força potente da força resistente.",
    "distractorAnalysis": [
      "Está incorreta: A resistência no meio define uma alavanca de 2.ª classe (inter-resistente), não de 1.ª classe.",
      "Está incorreta: A potência no meio define uma alavanca de 3.ª classe (interpotente), não de 1.ª classe.",
      "Está incorreta: O fulcro é um ponto físico real de apoio em torno do qual a alavanca roda, não podendo estar no infinito."
    ],
    "nursingApplication": "No corpo humano, o equilíbrio da cabeça sobre a coluna vertebral ilustra perfeitamente a alavanca interfixa."
  },
  {
    "id": 1385,
    "topicId": 1,
    "question": "Qual dos seguintes instrumentos do quotidiano é um exemplo clássico de Alavanca de 1.ª Classe (Interfixa)?",
    "options": [
      "Um quebra-nozes.",
      "Uma tesoura comum.",
      "Uma pinça de depilação.",
      "Um carrinho de mão de jardim."
    ],
    "correctIndex": 1,
    "explanation": "Numa tesoura, o eixo central com parafuso é o fulcro (PA), os dedos aplicam a potência e as lâminas cortam a resistência.",
    "distractorAnalysis": [
      "Está incorreta: O quebra-nozes tem a resistência no meio (noz), sendo uma alavanca de 2.ª classe (inter-resistente).",
      "Está incorreta: A pinça tem a potência no meio (onde os dedos apertam), sendo uma alavanca de 3.ª classe (interpotente).",
      "Está incorreta: O carrinho de mão tem a carga no meio das rodas e das pegas, sendo uma alavanca de 2.ª classe."
    ],
    "nursingApplication": "Tesouras cirúrgicas e pinças de corte operam sob o princípio da alavanca interfixa para multiplicar a força de corte."
  },
  {
    "id": 1386,
    "topicId": 1,
    "question": "Numa alavanca interfixa em equilíbrio, o braço da resistência mede 0,3 m e a carga resistente é de 200 N. Se o braço da potência medir 0,6 m, qual é a força potente necessária?",
    "options": [
      "400 N.",
      "200 N.",
      "100 N.",
      "60 N."
    ],
    "correctIndex": 2,
    "explanation": "Pela Lei das Alavancas: Fp · bp = Fr · br => Fp · 0,6 = 200 · 0,3 => Fp · 0,6 = 60 => Fp = 60 / 0,6 = 100 N.",
    "distractorAnalysis": [
      "Está incorreta: 400 N resultaria de inverter os braços de alavanca no cálculo de momentos.",
      "Está incorreta: 200 N seria a força se os braços fossem rigorosamente iguais (0,3 m = 0,3 m).",
      "Está incorreta: 60 N é o valor do momento resistente em N·m (200 · 0,3), não a força em Newtons."
    ],
    "nursingApplication": "Mostra como ter um braço potente o dobro do resistente permite levantar a carga com metade da força."
  },
  {
    "id": 1387,
    "topicId": 1,
    "question": "Como se comporta a Vantagem Mecânica (VM = bp / br) numa Alavanca de 1.ª Classe (Interfixa)?",
    "options": [
      "É obrigatoriamente e sempre superior a dez em qualquer situação prática.",
      "É estritamente igual a zero porque o fulcro central anula todas as vantagens de força.",
      "É sempre menor que 1, exigindo sistematicamente mais força do que a resistência a vencer.",
      "Pode ser maior que 1, igual a 1 ou menor que 1, dependendo da posição relativa do fulcro entre as forças."
    ],
    "correctIndex": 3,
    "explanation": "Na alavanca interfixa, se bp > br temos VM > 1; se bp = br temos VM = 1; se bp < br temos VM < 1.",
    "distractorAnalysis": [
      "Está incorreta: A vantagem mecânica não é obrigatoriamente superior a dez; depende da razão geométrica dos braços.",
      "Está incorreta: Uma vantagem mecânica não é zero; se fosse zero, a alavanca não transmitiria nenhuma força.",
      "Está incorreta: Ser sempre menor que 1 é a característica da alavanca de 3.ª classe, não da interfixa."
    ],
    "nursingApplication": "Permite ajustar a posição do fulcro para privilegiar força (braço potente longo) ou velocidade."
  },
  {
    "id": 1388,
    "topicId": 1,
    "question": "No corpo humano, o sistema que equilibra o peso da cabeça sobre a coluna cervical (músculos da nuca) é um exemplo de alavanca:",
    "options": [
      "De 1.ª Classe (Interfixa), com a articulação atlanto-occipital a funcionar como fulcro central.",
      "De 2.ª Classe (Inter-resistente), onde o queixo funciona como o ponto de apoio fixo do solo.",
      "De 3.ª Classe (Interpotente), onde o cérebro atua como força potente geradora de calor.",
      "De 4.ª Classe, uma categoria especial exclusiva de tecidos nervosos desmielinizados."
    ],
    "correctIndex": 0,
    "explanation": "O fulcro está na articulação atlanto-occipital (meio), a resistência é o peso anterior da cabeça e a potência são os músculos da nuca (trás).",
    "distractorAnalysis": [
      "Está incorreta: O queixo não é o fulcro; o apoio rotacional da cabeça situa-se nas vértebras cervicais superiores.",
      "Está incorreta: O cérebro não é um músculo nem gera força potente mecânica de tração.",
      "Está incorreta: Na física clássica existem apenas 3 classes de alavancas; não existe 4.ª classe."
    ],
    "nursingApplication": "Explica como a musculatura posterior do pescoço previne a queda da cabeça para a frente com mínimo esforço."
  },
  {
    "id": 1389,
    "topicId": 1,
    "question": "Numa alavanca de 1.ª classe em equilíbrio horizontal, onde a força potente de 80 N e a resistente de 120 N atuam verticalmente para baixo em lados opostos do fulcro, qual é a intensidade da força exercida pelo apoio sobre a alavanca?",
    "options": [
      "40 N, correspondente à diferença algébrica entre as duas forças.",
      "200 N, orientada verticalmente para cima para anular a resultante das forças descendentes.",
      "9600 N, obtida pela multiplicação das duas forças aplicadas.",
      "Zero N, porque o fulcro não suporta nenhuma carga em equilíbrio estático."
    ],
    "correctIndex": 1,
    "explanation": "Pela 1.ª condição de equilíbrio (∑F = 0), a força normal de reação do fulcro equilibra a soma de todas as forças para baixo: N = Fp + Fr = 80 + 120 = 200 N.",
    "distractorAnalysis": [
      "Está incorreta: 40 N seria a diferença se atuassem no mesmo sentido de translação sem o fulcro.",
      "Está incorreta: Multiplicar as forças não tem qualquer sentido físico para calcular o equilíbrio de translação vertical.",
      "Está incorreta: O fulcro suporta todo o peso das cargas e forças aplicadas sobre a barra rígida."
    ],
    "nursingApplication": "Permite dimensionar a resistência dos pontos de apoio articulados em aparelhos de suporte biomecânico."
  },
  {
    "id": 1390,
    "topicId": 1,
    "question": "No membro superior, a extensão do cotovelo pelo músculo tríceps braquial (com o olécrano a receber a tração muscular posterior ao fulcro na tróclea umeral) funciona como que tipo de alavanca?",
    "options": [
      "Alavanca de 2.ª Classe (Inter-resistente), com a resistência posicionada entre o olécrano e o ombro.",
      "Alavanca de 3.ª Classe (Interpotente), porque todos os músculos do membro superior são obrigatoriamente de 3.ª classe.",
      "Alavanca de 1.ª Classe (Interfixa), porque o fulcro articular situa-se entre a linha de ação da força muscular potente e a resistência distal.",
      "Alavanca Indiferente de Arquimedes sem qualquer momento de rotação."
    ],
    "correctIndex": 2,
    "explanation": "O eixo de rotação articular do cotovelo (tróclea umeral) fica no meio, separando a tração potente do tríceps no olécrano (posterior) da resistência do antebraço (anterior/distal).",
    "distractorAnalysis": [
      "Está incorreta: A resistência não fica no meio; o fulcro articular é que fica intermediário.",
      "Está incorreta: Embora a 3.ª classe seja muito comum, o tríceps braquial na extensão do cotovelo é um dos exemplos anatómicos clássicos de 1.ª classe.",
      "Está incorreta: Gera momento articular rotacional ativo na extensão do antebraço."
    ],
    "nursingApplication": "Fundamental para analisar os esforços musculares na impulsão e suporte de peso com os membros superiores."
  },
  {
    "id": 1391,
    "topicId": 1,
    "question": "O que é uma Alavanca, segundo a definição clássica formulada por Arquimedes?",
    "options": [
      "Um cabo flexível elástico que armazena energia térmica através de contração contínua.",
      "Uma superfície curva escorregadia que anula a aceleração gravítica local.",
      "Um cilindro oco que transporta fluidos compressíveis a alta velocidade.",
      "Uma barra rígida que pode girar em torno de um ponto de apoio fixo denominado fulcro."
    ],
    "correctIndex": 3,
    "explanation": "Uma alavanca é uma máquina simples composta por um elemento rígido capaz de rodar em torno de um fulcro (PA).",
    "distractorAnalysis": [
      "Está incorreta: A alavanca deve ser rígida para transmitir momentos; cabos flexíveis transmitem apenas tração.",
      "Está incorreta: Uma alavanca não é uma superfície escorregadia nem anula a gravidade.",
      "Está incorreta: Um cilindro condutor de fluidos é um tubo hidrodinâmico, não uma alavanca mecânica."
    ],
    "nursingApplication": "As alavancas biomecânicas do corpo humano utilizam os ossos como barras rígidas e as articulações como fulcros."
  },
  {
    "id": 1392,
    "topicId": 1,
    "question": "Quais são os três componentes essenciais que constituem qualquer sistema de alavanca?",
    "options": [
      "Ponto de apoio (fulcro), Força Potente (Fp) e Força Resistente (Fr).",
      "Apenas o peso, a densidade e o volume do corpo a ser movimentado.",
      "Velocidade angular, frequência de rotação e atrito aerodinâmico.",
      "Tensão elétrica, corrente contínua e resistência em Ohms."
    ],
    "correctIndex": 0,
    "explanation": "Qualquer alavanca requer um ponto de rotação (fulcro), uma força motora aplicada (potência) e uma carga a vencer (resistência).",
    "distractorAnalysis": [
      "Está incorreta: Peso, densidade e volume caracterizam a carga material, mas não formam um sistema de alavanca por si só.",
      "Está incorreta: Velocidade angular e frequência são propriedades dinâmicas do movimento, não componentes estruturais da alavanca.",
      "Está incorreta: Tensão e corrente pertencem à eletricidade e circuitos elétricos, não à mecânica das alavancas."
    ],
    "nursingApplication": "Permite identificar em qualquer movimento humano a articulação (fulcro), o músculo (potência) e a carga (resistência)."
  },
  {
    "id": 1393,
    "topicId": 1,
    "question": "Qual é a equação que traduz a Lei das Alavancas em situação de equilíbrio estático?",
    "options": [
      "Fp / bp = Fr / br (razão da força pelo braço).",
      "Fp · bp = Fr · br (o momento da força potente é igual ao momento da força resistente).",
      "Fp + bp = Fr + br (soma das forças com os braços).",
      "Fp · Fr = bp · br (produto das forças igual ao produto dos braços)."
    ],
    "correctIndex": 1,
    "explanation": "O equilíbrio de momentos (∑M = 0) exige que o momento potente seja igual ao momento resistente: Fp · bp = Fr · br.",
    "distractorAnalysis": [
      "Está incorreta: Dividir as forças pelos braços viola a relação dimensional do equilíbrio de momentos rotacionais.",
      "Está incorreta: Somar forças (N) com distâncias (m) é matematicamente inadmissível no cálculo de alavancas.",
      "Está incorreta: Multiplicar força por força e braço por braço não traduz a igualdade de momentos em torno do fulcro."
    ],
    "nursingApplication": "Fórmula fundamental usada para calcular a força muscular requerida para sustentar uma carga articular."
  },
  {
    "id": 1394,
    "topicId": 1,
    "question": "Como se caracteriza uma Alavanca de 1.ª Classe (Interfixa)?",
    "options": [
      "A força resistente localiza-se obrigatoriamente entre o fulcro e a força potente.",
      "A força potente localiza-se sempre entre o fulcro e a força resistente.",
      "O ponto de apoio (fulcro) localiza-se entre a força potente e a força resistente (Fp - PA - Fr).",
      "O fulcro encontra-se infinitamente afastado da barra rígida de suporte."
    ],
    "correctIndex": 2,
    "explanation": "Na alavanca interfixa, o ponto de apoio (PA) fica no meio, separando a força potente da força resistente.",
    "distractorAnalysis": [
      "Está incorreta: A resistência no meio define uma alavanca de 2.ª classe (inter-resistente), não de 1.ª classe.",
      "Está incorreta: A potência no meio define uma alavanca de 3.ª classe (interpotente), não de 1.ª classe.",
      "Está incorreta: O fulcro é um ponto físico real de apoio em torno do qual a alavanca roda, não podendo estar no infinito."
    ],
    "nursingApplication": "No corpo humano, o equilíbrio da cabeça sobre a coluna vertebral ilustra perfeitamente a alavanca interfixa."
  },
  {
    "id": 1395,
    "topicId": 1,
    "question": "Qual dos seguintes instrumentos do quotidiano é um exemplo clássico de Alavanca de 1.ª Classe (Interfixa)?",
    "options": [
      "Um quebra-nozes.",
      "Uma pinça de depilação.",
      "Um carrinho de mão de jardim.",
      "Uma tesoura comum."
    ],
    "correctIndex": 3,
    "explanation": "Numa tesoura, o eixo central com parafuso é o fulcro (PA), os dedos aplicam a potência e as lâminas cortam a resistência.",
    "distractorAnalysis": [
      "Está incorreta: O quebra-nozes tem a resistência no meio (noz), sendo uma alavanca de 2.ª classe (inter-resistente).",
      "Está incorreta: A pinça tem a potência no meio (onde os dedos apertam), sendo uma alavanca de 3.ª classe (interpotente).",
      "Está incorreta: O carrinho de mão tem a carga no meio das rodas e das pegas, sendo uma alavanca de 2.ª classe."
    ],
    "nursingApplication": "Tesouras cirúrgicas e pinças de corte operam sob o princípio da alavanca interfixa para multiplicar a força de corte."
  },
  {
    "id": 1396,
    "topicId": 1,
    "question": "Numa alavanca interfixa em equilíbrio, o braço da resistência mede 0,3 m e a carga resistente é de 200 N. Se o braço da potência medir 0,6 m, qual é a força potente necessária?",
    "options": [
      "100 N.",
      "400 N.",
      "200 N.",
      "60 N."
    ],
    "correctIndex": 0,
    "explanation": "Pela Lei das Alavancas: Fp · bp = Fr · br => Fp · 0,6 = 200 · 0,3 => Fp · 0,6 = 60 => Fp = 60 / 0,6 = 100 N.",
    "distractorAnalysis": [
      "Está incorreta: 400 N resultaria de inverter os braços de alavanca no cálculo de momentos.",
      "Está incorreta: 200 N seria a força se os braços fossem rigorosamente iguais (0,3 m = 0,3 m).",
      "Está incorreta: 60 N é o valor do momento resistente em N·m (200 · 0,3), não a força em Newtons."
    ],
    "nursingApplication": "Mostra como ter um braço potente o dobro do resistente permite levantar a carga com metade da força."
  },
  {
    "id": 1397,
    "topicId": 1,
    "question": "Como se comporta a Vantagem Mecânica (VM = bp / br) numa Alavanca de 1.ª Classe (Interfixa)?",
    "options": [
      "É obrigatoriamente e sempre superior a dez em qualquer situação prática.",
      "Pode ser maior que 1, igual a 1 ou menor que 1, dependendo da posição relativa do fulcro entre as forças.",
      "É estritamente igual a zero porque o fulcro central anula todas as vantagens de força.",
      "É sempre menor que 1, exigindo sistematicamente mais força do que a resistência a vencer."
    ],
    "correctIndex": 1,
    "explanation": "Na alavanca interfixa, se bp > br temos VM > 1; se bp = br temos VM = 1; se bp < br temos VM < 1.",
    "distractorAnalysis": [
      "Está incorreta: A vantagem mecânica não é obrigatoriamente superior a dez; depende da razão geométrica dos braços.",
      "Está incorreta: Uma vantagem mecânica não é zero; se fosse zero, a alavanca não transmitiria nenhuma força.",
      "Está incorreta: Ser sempre menor que 1 é a característica da alavanca de 3.ª classe, não da interfixa."
    ],
    "nursingApplication": "Permite ajustar a posição do fulcro para privilegiar força (braço potente longo) ou velocidade."
  },
  {
    "id": 1398,
    "topicId": 1,
    "question": "No corpo humano, o sistema que equilibra o peso da cabeça sobre a coluna cervical (músculos da nuca) é um exemplo de alavanca:",
    "options": [
      "De 2.ª Classe (Inter-resistente), onde o queixo funciona como o ponto de apoio fixo do solo.",
      "De 3.ª Classe (Interpotente), onde o cérebro atua como força potente geradora de calor.",
      "De 1.ª Classe (Interfixa), com a articulação atlanto-occipital a funcionar como fulcro central.",
      "De 4.ª Classe, uma categoria especial exclusiva de tecidos nervosos desmielinizados."
    ],
    "correctIndex": 2,
    "explanation": "O fulcro está na articulação atlanto-occipital (meio), a resistência é o peso anterior da cabeça e a potência são os músculos da nuca (trás).",
    "distractorAnalysis": [
      "Está incorreta: O queixo não é o fulcro; o apoio rotacional da cabeça situa-se nas vértebras cervicais superiores.",
      "Está incorreta: O cérebro não é um músculo nem gera força potente mecânica de tração.",
      "Está incorreta: Na física clássica existem apenas 3 classes de alavancas; não existe 4.ª classe."
    ],
    "nursingApplication": "Explica como a musculatura posterior do pescoço previne a queda da cabeça para a frente com mínimo esforço."
  },
  {
    "id": 1399,
    "topicId": 1,
    "question": "Numa alavanca de 1.ª classe em equilíbrio horizontal, onde a força potente de 80 N e a resistente de 120 N atuam verticalmente para baixo em lados opostos do fulcro, qual é a intensidade da força exercida pelo apoio sobre a alavanca?",
    "options": [
      "40 N, correspondente à diferença algébrica entre as duas forças.",
      "9600 N, obtida pela multiplicação das duas forças aplicadas.",
      "Zero N, porque o fulcro não suporta nenhuma carga em equilíbrio estático.",
      "200 N, orientada verticalmente para cima para anular a resultante das forças descendentes."
    ],
    "correctIndex": 3,
    "explanation": "Pela 1.ª condição de equilíbrio (∑F = 0), a força normal de reação do fulcro equilibra a soma de todas as forças para baixo: N = Fp + Fr = 80 + 120 = 200 N.",
    "distractorAnalysis": [
      "Está incorreta: 40 N seria a diferença se atuassem no mesmo sentido de translação sem o fulcro.",
      "Está incorreta: Multiplicar as forças não tem qualquer sentido físico para calcular o equilíbrio de translação vertical.",
      "Está incorreta: O fulcro suporta todo o peso das cargas e forças aplicadas sobre a barra rígida."
    ],
    "nursingApplication": "Permite dimensionar a resistência dos pontos de apoio articulados em aparelhos de suporte biomecânico."
  },
  {
    "id": 1400,
    "topicId": 1,
    "question": "No membro superior, a extensão do cotovelo pelo músculo tríceps braquial (com o olécrano a receber a tração muscular posterior ao fulcro na tróclea umeral) funciona como que tipo de alavanca?",
    "options": [
      "Alavanca de 1.ª Classe (Interfixa), porque o fulcro articular situa-se entre a linha de ação da força muscular potente e a resistência distal.",
      "Alavanca de 2.ª Classe (Inter-resistente), com a resistência posicionada entre o olécrano e o ombro.",
      "Alavanca de 3.ª Classe (Interpotente), porque todos os músculos do membro superior são obrigatoriamente de 3.ª classe.",
      "Alavanca Indiferente de Arquimedes sem qualquer momento de rotação."
    ],
    "correctIndex": 0,
    "explanation": "O eixo de rotação articular do cotovelo (tróclea umeral) fica no meio, separando a tração potente do tríceps no olécrano (posterior) da resistência do antebraço (anterior/distal).",
    "distractorAnalysis": [
      "Está incorreta: A resistência não fica no meio; o fulcro articular é que fica intermediário.",
      "Está incorreta: Embora a 3.ª classe seja muito comum, o tríceps braquial na extensão do cotovelo é um dos exemplos anatómicos clássicos de 1.ª classe.",
      "Está incorreta: Gera momento articular rotacional ativo na extensão do antebraço."
    ],
    "nursingApplication": "Fundamental para analisar os esforços musculares na impulsão e suporte de peso com os membros superiores."
  },
  {
    "id": 1401,
    "topicId": 1,
    "question": "Como se caracteriza geometricamente uma Alavanca de 2.ª Classe (Inter-resistente)?",
    "options": [
      "O ponto de apoio localiza-se rigorosamente no meio, separando as duas forças.",
      "A força resistente localiza-se entre o ponto de apoio (fulcro) e a força potente (PA - Fr - Fp).",
      "A força potente localiza-se entre o ponto de apoio e a força resistente.",
      "As forças resistente e potente atuam no mesmo ponto geométrico anulando o fulcro."
    ],
    "correctIndex": 1,
    "explanation": "Na alavanca de 2.ª classe, a carga resistente fica no meio, pelo que o braço potente é sempre maior que o braço resistente (bp > br).",
    "distractorAnalysis": [
      "Está incorreta: O fulcro no meio caracteriza a alavanca de 1.ª classe (interfixa), não a de 2.ª classe.",
      "Está incorreta: A potência no meio caracteriza a alavanca de 3.ª classe (interpotente), não a de 2.ª classe.",
      "Está incorreta: Se as forças atuassem no mesmo ponto, o sistema não funcionaria como uma alavanca multiplicadora."
    ],
    "nursingApplication": "Exemplo clássico: carrinho de transporte onde a carga está entre a roda (apoio) e as pegas (potência)."
  },
  {
    "id": 1402,
    "topicId": 1,
    "question": "Qual é a principal vantagem mecânica de uma Alavanca de 2.ª Classe (Inter-resistente)?",
    "options": [
      "Apresenta sempre desvantagem mecânica de força, exigindo uma força potente cinco vezes superior à carga.",
      "Anula totalmente o trabalho mecânico realizado pela força gravítica durante a elevação.",
      "Apresenta sempre Vantagem Mecânica de Força (VM > 1), pois o braço potente é sempre superior ao braço resistente (Fp < Fr).",
      "Permite multiplicar a velocidade da carga em troca de uma força motora infinita."
    ],
    "correctIndex": 2,
    "explanation": "Como bp > br em todas as alavancas de 2.ª classe, a força necessária é sempre menor do que a carga suportada (poupa força).",
    "distractorAnalysis": [
      "Está incorreta: A desvantagem sistemática de força é a característica típica da alavanca de 3.ª classe (interpotente).",
      "Está incorreta: Nenhuma alavanca anula o trabalho mecânico; a conservação da energia é estritamente mantida.",
      "Está incorreta: A alavanca de 2.ª classe prioriza a economia de força e não a multiplicação de velocidade na carga."
    ],
    "nursingApplication": "Princípio físico de carrinhos de transporte pesado: levantar grandes cargas com esforço reduzido."
  },
  {
    "id": 1403,
    "topicId": 1,
    "question": "Qual dos seguintes instrumentos é um exemplo representativo de Alavanca de 2.ª Classe (Inter-resistente)?",
    "options": [
      "Uma tesoura cirúrgica de corte de fios.",
      "Uma pinça anatómica simples de preensão.",
      "Uma cana de pesca esticada na vertical.",
      "Um carrinho de mão de transporte de carga."
    ],
    "correctIndex": 3,
    "explanation": "No carrinho de mão, o eixo da roda dianteira é o fulcro, a carga está na caçamba (meio) e a força é feita nas pegas.",
    "distractorAnalysis": [
      "Está incorreta: A tesoura é uma alavanca de 1.ª classe (interfixa) com o parafuso central como fulcro.",
      "Está incorreta: A pinça anatómica é uma alavanca de 3.ª classe (interpotente) com os dedos a apertar no meio.",
      "Está incorreta: A cana de pesca é uma alavanca de 3.ª classe, com a mão motora posicionada entre o apoio e a ponta."
    ],
    "nursingApplication": "Permite compreender o design de equipamentos de carga concebidos para minimizar a fadiga muscular."
  },
  {
    "id": 1404,
    "topicId": 1,
    "question": "Como se caracteriza geometricamente uma Alavanca de 3.ª Classe (Interpotente)?",
    "options": [
      "A força potente localiza-se entre o ponto de apoio (fulcro) e a força resistente (PA - Fp - Fr).",
      "A força resistente localiza-se entre o fulcro e a força potente.",
      "O fulcro situa-se rigorosamente entre a potência e a resistência.",
      "A força potente atua perpendicularmente ao infinito fora do plano da barra rígida."
    ],
    "correctIndex": 0,
    "explanation": "Na alavanca de 3.ª classe, o esforço muscular ou motor atua no meio, fazendo com que o braço potente seja menor que o resistente (bp < br).",
    "distractorAnalysis": [
      "Está incorreta: A resistência no meio é a alavanca de 2.ª classe (inter-resistente).",
      "Está incorreta: O fulcro no meio é a alavanca de 1.ª classe (interfixa).",
      "Está incorreta: As forças atuam em pontos definidos da barra rígida e dentro do plano biomecânico de movimento."
    ],
    "nursingApplication": "A vasta maioria das alavancas musculares dos membros no corpo humano são de 3.ª classe."
  },
  {
    "id": 1405,
    "topicId": 1,
    "question": "Se a Alavanca de 3.ª Classe tem desvantagem mecânica de força (Fp > Fr), qual é a sua grande utilidade biomecânica?",
    "options": [
      "Permite levantar pesos de milhares de toneladas sem qualquer dispêndio de energia muscular.",
      "Ganha-se em amplitude de movimento e em velocidade na extremidade livre da alavanca.",
      "Anula completamente o atrito entre as superfícies ósseas da articulação em causa.",
      "Impede que a gravidade terrestre acelere os objetos que caem em direção ao solo."
    ],
    "correctIndex": 1,
    "explanation": "Ao aplicar a força perto do fulcro, um pequeno encurtamento muscular produz um grande e rápido deslocamento da mão ou do pé.",
    "distractorAnalysis": [
      "Está incorreta: A alavanca de 3.ª classe exige mais força muscular do que o peso da carga, não multiplicando força.",
      "Está incorreta: O atrito articular é reduzido pelo líquido sinovial e cartilagem, não pelo tipo de alavanca.",
      "Está incorreta: A alavanca não altera a aceleração gravítica g = 9,8 m/s²."
    ],
    "nursingApplication": "Permite que a mão execute movimentos amplos e rápidos, essenciais para manusear materiais com precisão."
  },
  {
    "id": 1406,
    "topicId": 1,
    "question": "O sistema de flexão do antebraço pelo músculo bíceps braquial (cotovelo como apoio, inserção do bíceps no rádio e peso na mão) é uma alavanca:",
    "options": [
      "De 2.ª Classe (Inter-resistente).",
      "De 1.ª Classe (Interfixa).",
      "De 3.ª Classe (Interpotente).",
      "De 4.ª Classe (Interrotatória)."
    ],
    "correctIndex": 2,
    "explanation": "O fulcro está na articulação do cotovelo, a potência é o bíceps no rádio (~4-5 cm do cotovelo) e a resistência está na mão (~30 cm).",
    "distractorAnalysis": [
      "Está incorreta: Não é de 2.ª classe porque a carga resistente está na extremidade (mão) e não no meio.",
      "Está incorreta: Não é de 1.ª classe porque o fulcro não está no meio; fica na extremidade articular do cotovelo.",
      "Está incorreta: Não existe 4.ª classe de alavancas na física clássica."
    ],
    "nursingApplication": "Explica por que segurar um peso de 5 kg na mão exige mais de 30 kgf de força tensora no bíceps."
  },
  {
    "id": 1407,
    "topicId": 1,
    "question": "Uma pinça de preensão utilizada para segurar pequenos objetos com os dedos no meio é um exemplo clássico de alavanca:",
    "options": [
      "De 2.ª Classe (Inter-resistente).",
      "De 1.ª Classe (Interfixa).",
      "De Gravidade Indiferente.",
      "De 3.ª Classe (Interpotente)."
    ],
    "correctIndex": 3,
    "explanation": "A união posterior da pinça é o fulcro, os dedos aplicam a força potente no meio e a ponta segura a carga resistente.",
    "distractorAnalysis": [
      "Está incorreta: Não é de 2.ª classe porque a carga está na ponta e a força dos dedos atua no meio.",
      "Está incorreta: Não é de 1.ª classe porque o fulcro não está entre os dedos e a ponta; está na base oposta da pinça.",
      "Está incorreta: Gravidade indiferente é um tipo de equilíbrio estático, não uma classe de alavanca."
    ],
    "nursingApplication": "Instrumento de uso comum para manipular com delicadeza compressas e materiais de penso."
  },
  {
    "id": 1408,
    "topicId": 1,
    "question": "Numa alavanca interpotente (3.ª classe), se o braço da potência medir 5 cm e o braço da resistência medir 30 cm, para equilibrar uma carga de 10 N, que força potente tem de ser exercida?",
    "options": [
      "60 N.",
      "1,67 N.",
      "10 N.",
      "300 N."
    ],
    "correctIndex": 0,
    "explanation": "Pela Lei das Alavancas: Fp · bp = Fr · br => Fp · 5 cm = 10 N · 30 cm => Fp · 5 = 300 => Fp = 300 / 5 = 60 N.",
    "distractorAnalysis": [
      "Está incorreta: 1,67 N resultaria de inverter erroneamente os braços na equação (10 · 5 / 30).",
      "Está incorreta: 10 N seria a força se os braços fossem iguais, o que nunca acontece numa alavanca de 3.ª classe.",
      "Está incorreta: 300 N é o valor do momento em N·cm, e não a intensidade da força potente em Newtons."
    ],
    "nursingApplication": "Demonstra a desvantagem mecânica de força: é preciso exercer 60 N para equilibrar uma carga de apenas 10 N."
  },
  {
    "id": 1409,
    "topicId": 1,
    "question": "No corpo humano, o movimento de elevação sobre a ponta dos pés (flexão plantar realizada pelo músculo tríceps sural através do tendão de Aquiles) exemplifica que tipo de alavanca biomecânica?",
    "options": [
      "Alavanca de 1.ª Classe (Interfixa), com o calcâneo a funcionar como fulcro central entre os dedos e o joelho.",
      "Alavanca de 2.ª Classe (Inter-resistente), pois a força resistente do peso corporal transmitido pela tíbia situa-se entre o fulcro nas articulações metatarsofalângicas e a potência no calcâneo (VM > 1).",
      "Alavanca de 3.ª Classe (Interpotente), apresentando desvantagem mecânica extrema que impede a marcha bípede.",
      "Alavanca Hidráulica de Pascal que opera por variação de pressão capilar."
    ],
    "correctIndex": 1,
    "explanation": "O ponto de apoio está nos metatarsos no solo (frente), a resistência é a linha de carga do peso corporal na tíbia (meio) e a potência é o tríceps sural que puxa o calcâneo para cima (trás), configurando PA - Fr - Fp com VM > 1.",
    "distractorAnalysis": [
      "Está incorreta: O fulcro fica nos metatarsos no chão e não no calcâneo.",
      "Está incorreta: A flexão plantar é uma alavanca de 2.ª classe que poupa força muscular ao elevar o peso de todo o corpo.",
      "Está incorreta: Não se trata de transmissão hidráulica, mas de uma alavanca mecânica óssea rígida clássica."
    ],
    "nursingApplication": "Permite que o músculo tríceps sural eleve todo o peso corporal durante a locomoção com esforço mecânico favorável."
  },
  {
    "id": 1410,
    "topicId": 1,
    "question": "Por que razão a grande maioria das alavancas do aparelho locomotor humano são de 3.ª classe (interpotentes), apesar de apresentarem desvantagem mecânica de força (VM < 1)?",
    "options": [
      "Porque o corpo humano não possui energia suficiente para construir alavancas de 2.ª classe.",
      "Porque a 3.ª classe anula todo o desgaste das articulações e dos ligamentos circundantes.",
      "Porque privilegiam a amplitude e a velocidade angular dos movimentos dos membros, permitindo grandes deslocamentos das extremidades com pequeno encurtamento muscular.",
      "Porque as alavancas de 3.ª classe multiplicam a força muscular por dez em todos os movimentos."
    ],
    "correctIndex": 2,
    "explanation": "Como a inserção muscular potente fica próxima da articulação (bp pequeno), uma pequena contração muscular produz um movimento amplo e rápido da mão ou do pé.",
    "distractorAnalysis": [
      "Está incorreta: O corpo humano possui alavancas de 2.ª classe (ex.: tornozelo na flexão plantar) e de 1.ª classe (atlanto-occipital).",
      "Está incorreta: O desgaste articular continua a ocorrer e as forças de compressão no fulcro são elevadas.",
      "Está incorreta: As alavancas de 3.ª classe têm desvantagem mecânica de força (VM < 1), exigindo mais força muscular e não multiplicando força."
    ],
    "nursingApplication": "Compreender este compromisso biomecânico fundamenta por que os músculos realizam grandes forças internas para mover pequenas cargas externas."
  },
  {
    "id": 1411,
    "topicId": 1,
    "question": "Como se caracteriza geometricamente uma Alavanca de 2.ª Classe (Inter-resistente)?",
    "options": [
      "O ponto de apoio localiza-se rigorosamente no meio, separando as duas forças.",
      "A força potente localiza-se entre o ponto de apoio e a força resistente.",
      "As forças resistente e potente atuam no mesmo ponto geométrico anulando o fulcro.",
      "A força resistente localiza-se entre o ponto de apoio (fulcro) e a força potente (PA - Fr - Fp)."
    ],
    "correctIndex": 3,
    "explanation": "Na alavanca de 2.ª classe, a carga resistente fica no meio, pelo que o braço potente é sempre maior que o braço resistente (bp > br).",
    "distractorAnalysis": [
      "Está incorreta: O fulcro no meio caracteriza a alavanca de 1.ª classe (interfixa), não a de 2.ª classe.",
      "Está incorreta: A potência no meio caracteriza a alavanca de 3.ª classe (interpotente), não a de 2.ª classe.",
      "Está incorreta: Se as forças atuassem no mesmo ponto, o sistema não funcionaria como uma alavanca multiplicadora."
    ],
    "nursingApplication": "Exemplo clássico: carrinho de transporte onde a carga está entre a roda (apoio) e as pegas (potência)."
  },
  {
    "id": 1412,
    "topicId": 1,
    "question": "Qual é a principal vantagem mecânica de uma Alavanca de 2.ª Classe (Inter-resistente)?",
    "options": [
      "Apresenta sempre Vantagem Mecânica de Força (VM > 1), pois o braço potente é sempre superior ao braço resistente (Fp < Fr).",
      "Apresenta sempre desvantagem mecânica de força, exigindo uma força potente cinco vezes superior à carga.",
      "Anula totalmente o trabalho mecânico realizado pela força gravítica durante a elevação.",
      "Permite multiplicar a velocidade da carga em troca de uma força motora infinita."
    ],
    "correctIndex": 0,
    "explanation": "Como bp > br em todas as alavancas de 2.ª classe, a força necessária é sempre menor do que a carga suportada (poupa força).",
    "distractorAnalysis": [
      "Está incorreta: A desvantagem sistemática de força é a característica típica da alavanca de 3.ª classe (interpotente).",
      "Está incorreta: Nenhuma alavanca anula o trabalho mecânico; a conservação da energia é estritamente mantida.",
      "Está incorreta: A alavanca de 2.ª classe prioriza a economia de força e não a multiplicação de velocidade na carga."
    ],
    "nursingApplication": "Princípio físico de carrinhos de transporte pesado: levantar grandes cargas com esforço reduzido."
  },
  {
    "id": 1413,
    "topicId": 1,
    "question": "Qual dos seguintes instrumentos é um exemplo representativo de Alavanca de 2.ª Classe (Inter-resistente)?",
    "options": [
      "Uma tesoura cirúrgica de corte de fios.",
      "Um carrinho de mão de transporte de carga.",
      "Uma pinça anatómica simples de preensão.",
      "Uma cana de pesca esticada na vertical."
    ],
    "correctIndex": 1,
    "explanation": "No carrinho de mão, o eixo da roda dianteira é o fulcro, a carga está na caçamba (meio) e a força é feita nas pegas.",
    "distractorAnalysis": [
      "Está incorreta: A tesoura é uma alavanca de 1.ª classe (interfixa) com o parafuso central como fulcro.",
      "Está incorreta: A pinça anatómica é uma alavanca de 3.ª classe (interpotente) com os dedos a apertar no meio.",
      "Está incorreta: A cana de pesca é uma alavanca de 3.ª classe, com a mão motora posicionada entre o apoio e a ponta."
    ],
    "nursingApplication": "Permite compreender o design de equipamentos de carga concebidos para minimizar a fadiga muscular."
  },
  {
    "id": 1414,
    "topicId": 1,
    "question": "Como se caracteriza geometricamente uma Alavanca de 3.ª Classe (Interpotente)?",
    "options": [
      "A força resistente localiza-se entre o fulcro e a força potente.",
      "O fulcro situa-se rigorosamente entre a potência e a resistência.",
      "A força potente localiza-se entre o ponto de apoio (fulcro) e a força resistente (PA - Fp - Fr).",
      "A força potente atua perpendicularmente ao infinito fora do plano da barra rígida."
    ],
    "correctIndex": 2,
    "explanation": "Na alavanca de 3.ª classe, o esforço muscular ou motor atua no meio, fazendo com que o braço potente seja menor que o resistente (bp < br).",
    "distractorAnalysis": [
      "Está incorreta: A resistência no meio é a alavanca de 2.ª classe (inter-resistente).",
      "Está incorreta: O fulcro no meio é a alavanca de 1.ª classe (interfixa).",
      "Está incorreta: As forças atuam em pontos definidos da barra rígida e dentro do plano biomecânico de movimento."
    ],
    "nursingApplication": "A vasta maioria das alavancas musculares dos membros no corpo humano são de 3.ª classe."
  },
  {
    "id": 1415,
    "topicId": 1,
    "question": "Se a Alavanca de 3.ª Classe tem desvantagem mecânica de força (Fp > Fr), qual é a sua grande utilidade biomecânica?",
    "options": [
      "Permite levantar pesos de milhares de toneladas sem qualquer dispêndio de energia muscular.",
      "Anula completamente o atrito entre as superfícies ósseas da articulação em causa.",
      "Impede que a gravidade terrestre acelere os objetos que caem em direção ao solo.",
      "Ganha-se em amplitude de movimento e em velocidade na extremidade livre da alavanca."
    ],
    "correctIndex": 3,
    "explanation": "Ao aplicar a força perto do fulcro, um pequeno encurtamento muscular produz um grande e rápido deslocamento da mão ou do pé.",
    "distractorAnalysis": [
      "Está incorreta: A alavanca de 3.ª classe exige mais força muscular do que o peso da carga, não multiplicando força.",
      "Está incorreta: O atrito articular é reduzido pelo líquido sinovial e cartilagem, não pelo tipo de alavanca.",
      "Está incorreta: A alavanca não altera a aceleração gravítica g = 9,8 m/s²."
    ],
    "nursingApplication": "Permite que a mão execute movimentos amplos e rápidos, essenciais para manusear materiais com precisão."
  },
  {
    "id": 1416,
    "topicId": 1,
    "question": "O sistema de flexão do antebraço pelo músculo bíceps braquial (cotovelo como apoio, inserção do bíceps no rádio e peso na mão) é uma alavanca:",
    "options": [
      "De 3.ª Classe (Interpotente).",
      "De 2.ª Classe (Inter-resistente).",
      "De 1.ª Classe (Interfixa).",
      "De 4.ª Classe (Interrotatória)."
    ],
    "correctIndex": 0,
    "explanation": "O fulcro está na articulação do cotovelo, a potência é o bíceps no rádio (~4-5 cm do cotovelo) e a resistência está na mão (~30 cm).",
    "distractorAnalysis": [
      "Está incorreta: Não é de 2.ª classe porque a carga resistente está na extremidade (mão) e não no meio.",
      "Está incorreta: Não é de 1.ª classe porque o fulcro não está no meio; fica na extremidade articular do cotovelo.",
      "Está incorreta: Não existe 4.ª classe de alavancas na física clássica."
    ],
    "nursingApplication": "Explica por que segurar um peso de 5 kg na mão exige mais de 30 kgf de força tensora no bíceps."
  },
  {
    "id": 1417,
    "topicId": 1,
    "question": "Uma pinça de preensão utilizada para segurar pequenos objetos com os dedos no meio é um exemplo clássico de alavanca:",
    "options": [
      "De 2.ª Classe (Inter-resistente).",
      "De 3.ª Classe (Interpotente).",
      "De 1.ª Classe (Interfixa).",
      "De Gravidade Indiferente."
    ],
    "correctIndex": 1,
    "explanation": "A união posterior da pinça é o fulcro, os dedos aplicam a força potente no meio e a ponta segura a carga resistente.",
    "distractorAnalysis": [
      "Está incorreta: Não é de 2.ª classe porque a carga está na ponta e a força dos dedos atua no meio.",
      "Está incorreta: Não é de 1.ª classe porque o fulcro não está entre os dedos e a ponta; está na base oposta da pinça.",
      "Está incorreta: Gravidade indiferente é um tipo de equilíbrio estático, não uma classe de alavanca."
    ],
    "nursingApplication": "Instrumento de uso comum para manipular com delicadeza compressas e materiais de penso."
  },
  {
    "id": 1418,
    "topicId": 1,
    "question": "Numa alavanca interpotente (3.ª classe), se o braço da potência medir 5 cm e o braço da resistência medir 30 cm, para equilibrar uma carga de 10 N, que força potente tem de ser exercida?",
    "options": [
      "1,67 N.",
      "10 N.",
      "60 N.",
      "300 N."
    ],
    "correctIndex": 2,
    "explanation": "Pela Lei das Alavancas: Fp · bp = Fr · br => Fp · 5 cm = 10 N · 30 cm => Fp · 5 = 300 => Fp = 300 / 5 = 60 N.",
    "distractorAnalysis": [
      "Está incorreta: 1,67 N resultaria de inverter erroneamente os braços na equação (10 · 5 / 30).",
      "Está incorreta: 10 N seria a força se os braços fossem iguais, o que nunca acontece numa alavanca de 3.ª classe.",
      "Está incorreta: 300 N é o valor do momento em N·cm, e não a intensidade da força potente em Newtons."
    ],
    "nursingApplication": "Demonstra a desvantagem mecânica de força: é preciso exercer 60 N para equilibrar uma carga de apenas 10 N."
  },
  {
    "id": 1419,
    "topicId": 1,
    "question": "No corpo humano, o movimento de elevação sobre a ponta dos pés (flexão plantar realizada pelo músculo tríceps sural através do tendão de Aquiles) exemplifica que tipo de alavanca biomecânica?",
    "options": [
      "Alavanca de 1.ª Classe (Interfixa), com o calcâneo a funcionar como fulcro central entre os dedos e o joelho.",
      "Alavanca de 3.ª Classe (Interpotente), apresentando desvantagem mecânica extrema que impede a marcha bípede.",
      "Alavanca Hidráulica de Pascal que opera por variação de pressão capilar.",
      "Alavanca de 2.ª Classe (Inter-resistente), pois a força resistente do peso corporal transmitido pela tíbia situa-se entre o fulcro nas articulações metatarsofalângicas e a potência no calcâneo (VM > 1)."
    ],
    "correctIndex": 3,
    "explanation": "O ponto de apoio está nos metatarsos no solo (frente), a resistência é a linha de carga do peso corporal na tíbia (meio) e a potência é o tríceps sural que puxa o calcâneo para cima (trás), configurando PA - Fr - Fp com VM > 1.",
    "distractorAnalysis": [
      "Está incorreta: O fulcro fica nos metatarsos no chão e não no calcâneo.",
      "Está incorreta: A flexão plantar é uma alavanca de 2.ª classe que poupa força muscular ao elevar o peso de todo o corpo.",
      "Está incorreta: Não se trata de transmissão hidráulica, mas de uma alavanca mecânica óssea rígida clássica."
    ],
    "nursingApplication": "Permite que o músculo tríceps sural eleve todo o peso corporal durante a locomoção com esforço mecânico favorável."
  },
  {
    "id": 1420,
    "topicId": 1,
    "question": "Por que razão a grande maioria das alavancas do aparelho locomotor humano são de 3.ª classe (interpotentes), apesar de apresentarem desvantagem mecânica de força (VM < 1)?",
    "options": [
      "Porque privilegiam a amplitude e a velocidade angular dos movimentos dos membros, permitindo grandes deslocamentos das extremidades com pequeno encurtamento muscular.",
      "Porque o corpo humano não possui energia suficiente para construir alavancas de 2.ª classe.",
      "Porque a 3.ª classe anula todo o desgaste das articulações e dos ligamentos circundantes.",
      "Porque as alavancas de 3.ª classe multiplicam a força muscular por dez em todos os movimentos."
    ],
    "correctIndex": 0,
    "explanation": "Como a inserção muscular potente fica próxima da articulação (bp pequeno), uma pequena contração muscular produz um movimento amplo e rápido da mão ou do pé.",
    "distractorAnalysis": [
      "Está incorreta: O corpo humano possui alavancas de 2.ª classe (ex.: tornozelo na flexão plantar) e de 1.ª classe (atlanto-occipital).",
      "Está incorreta: O desgaste articular continua a ocorrer e as forças de compressão no fulcro são elevadas.",
      "Está incorreta: As alavancas de 3.ª classe têm desvantagem mecânica de força (VM < 1), exigindo mais força muscular e não multiplicando força."
    ],
    "nursingApplication": "Compreender este compromisso biomecânico fundamenta por que os músculos realizam grandes forças internas para mover pequenas cargas externas."
  },
  {
    "id": 1421,
    "topicId": 1,
    "question": "Como se caracteriza geometricamente uma Alavanca de 2.ª Classe (Inter-resistente)?",
    "options": [
      "O ponto de apoio localiza-se rigorosamente no meio, separando as duas forças.",
      "A força resistente localiza-se entre o ponto de apoio (fulcro) e a força potente (PA - Fr - Fp).",
      "A força potente localiza-se entre o ponto de apoio e a força resistente.",
      "As forças resistente e potente atuam no mesmo ponto geométrico anulando o fulcro."
    ],
    "correctIndex": 1,
    "explanation": "Na alavanca de 2.ª classe, a carga resistente fica no meio, pelo que o braço potente é sempre maior que o braço resistente (bp > br).",
    "distractorAnalysis": [
      "Está incorreta: O fulcro no meio caracteriza a alavanca de 1.ª classe (interfixa), não a de 2.ª classe.",
      "Está incorreta: A potência no meio caracteriza a alavanca de 3.ª classe (interpotente), não a de 2.ª classe.",
      "Está incorreta: Se as forças atuassem no mesmo ponto, o sistema não funcionaria como uma alavanca multiplicadora."
    ],
    "nursingApplication": "Exemplo clássico: carrinho de transporte onde a carga está entre a roda (apoio) e as pegas (potência)."
  },
  {
    "id": 1422,
    "topicId": 1,
    "question": "Qual é a principal vantagem mecânica de uma Alavanca de 2.ª Classe (Inter-resistente)?",
    "options": [
      "Apresenta sempre desvantagem mecânica de força, exigindo uma força potente cinco vezes superior à carga.",
      "Anula totalmente o trabalho mecânico realizado pela força gravítica durante a elevação.",
      "Apresenta sempre Vantagem Mecânica de Força (VM > 1), pois o braço potente é sempre superior ao braço resistente (Fp < Fr).",
      "Permite multiplicar a velocidade da carga em troca de uma força motora infinita."
    ],
    "correctIndex": 2,
    "explanation": "Como bp > br em todas as alavancas de 2.ª classe, a força necessária é sempre menor do que a carga suportada (poupa força).",
    "distractorAnalysis": [
      "Está incorreta: A desvantagem sistemática de força é a característica típica da alavanca de 3.ª classe (interpotente).",
      "Está incorreta: Nenhuma alavanca anula o trabalho mecânico; a conservação da energia é estritamente mantida.",
      "Está incorreta: A alavanca de 2.ª classe prioriza a economia de força e não a multiplicação de velocidade na carga."
    ],
    "nursingApplication": "Princípio físico de carrinhos de transporte pesado: levantar grandes cargas com esforço reduzido."
  },
  {
    "id": 1423,
    "topicId": 1,
    "question": "Qual dos seguintes instrumentos é um exemplo representativo de Alavanca de 2.ª Classe (Inter-resistente)?",
    "options": [
      "Uma tesoura cirúrgica de corte de fios.",
      "Uma pinça anatómica simples de preensão.",
      "Uma cana de pesca esticada na vertical.",
      "Um carrinho de mão de transporte de carga."
    ],
    "correctIndex": 3,
    "explanation": "No carrinho de mão, o eixo da roda dianteira é o fulcro, a carga está na caçamba (meio) e a força é feita nas pegas.",
    "distractorAnalysis": [
      "Está incorreta: A tesoura é uma alavanca de 1.ª classe (interfixa) com o parafuso central como fulcro.",
      "Está incorreta: A pinça anatómica é uma alavanca de 3.ª classe (interpotente) com os dedos a apertar no meio.",
      "Está incorreta: A cana de pesca é uma alavanca de 3.ª classe, com a mão motora posicionada entre o apoio e a ponta."
    ],
    "nursingApplication": "Permite compreender o design de equipamentos de carga concebidos para minimizar a fadiga muscular."
  },
  {
    "id": 1424,
    "topicId": 1,
    "question": "Como se caracteriza geometricamente uma Alavanca de 3.ª Classe (Interpotente)?",
    "options": [
      "A força potente localiza-se entre o ponto de apoio (fulcro) e a força resistente (PA - Fp - Fr).",
      "A força resistente localiza-se entre o fulcro e a força potente.",
      "O fulcro situa-se rigorosamente entre a potência e a resistência.",
      "A força potente atua perpendicularmente ao infinito fora do plano da barra rígida."
    ],
    "correctIndex": 0,
    "explanation": "Na alavanca de 3.ª classe, o esforço muscular ou motor atua no meio, fazendo com que o braço potente seja menor que o resistente (bp < br).",
    "distractorAnalysis": [
      "Está incorreta: A resistência no meio é a alavanca de 2.ª classe (inter-resistente).",
      "Está incorreta: O fulcro no meio é a alavanca de 1.ª classe (interfixa).",
      "Está incorreta: As forças atuam em pontos definidos da barra rígida e dentro do plano biomecânico de movimento."
    ],
    "nursingApplication": "A vasta maioria das alavancas musculares dos membros no corpo humano são de 3.ª classe."
  },
  {
    "id": 1425,
    "topicId": 1,
    "question": "Se a Alavanca de 3.ª Classe tem desvantagem mecânica de força (Fp > Fr), qual é a sua grande utilidade biomecânica?",
    "options": [
      "Permite levantar pesos de milhares de toneladas sem qualquer dispêndio de energia muscular.",
      "Ganha-se em amplitude de movimento e em velocidade na extremidade livre da alavanca.",
      "Anula completamente o atrito entre as superfícies ósseas da articulação em causa.",
      "Impede que a gravidade terrestre acelere os objetos que caem em direção ao solo."
    ],
    "correctIndex": 1,
    "explanation": "Ao aplicar a força perto do fulcro, um pequeno encurtamento muscular produz um grande e rápido deslocamento da mão ou do pé.",
    "distractorAnalysis": [
      "Está incorreta: A alavanca de 3.ª classe exige mais força muscular do que o peso da carga, não multiplicando força.",
      "Está incorreta: O atrito articular é reduzido pelo líquido sinovial e cartilagem, não pelo tipo de alavanca.",
      "Está incorreta: A alavanca não altera a aceleração gravítica g = 9,8 m/s²."
    ],
    "nursingApplication": "Permite que a mão execute movimentos amplos e rápidos, essenciais para manusear materiais com precisão."
  },
  {
    "id": 1426,
    "topicId": 1,
    "question": "O sistema de flexão do antebraço pelo músculo bíceps braquial (cotovelo como apoio, inserção do bíceps no rádio e peso na mão) é uma alavanca:",
    "options": [
      "De 2.ª Classe (Inter-resistente).",
      "De 1.ª Classe (Interfixa).",
      "De 3.ª Classe (Interpotente).",
      "De 4.ª Classe (Interrotatória)."
    ],
    "correctIndex": 2,
    "explanation": "O fulcro está na articulação do cotovelo, a potência é o bíceps no rádio (~4-5 cm do cotovelo) e a resistência está na mão (~30 cm).",
    "distractorAnalysis": [
      "Está incorreta: Não é de 2.ª classe porque a carga resistente está na extremidade (mão) e não no meio.",
      "Está incorreta: Não é de 1.ª classe porque o fulcro não está no meio; fica na extremidade articular do cotovelo.",
      "Está incorreta: Não existe 4.ª classe de alavancas na física clássica."
    ],
    "nursingApplication": "Explica por que segurar um peso de 5 kg na mão exige mais de 30 kgf de força tensora no bíceps."
  },
  {
    "id": 1427,
    "topicId": 1,
    "question": "Uma pinça de preensão utilizada para segurar pequenos objetos com os dedos no meio é um exemplo clássico de alavanca:",
    "options": [
      "De 2.ª Classe (Inter-resistente).",
      "De 1.ª Classe (Interfixa).",
      "De Gravidade Indiferente.",
      "De 3.ª Classe (Interpotente)."
    ],
    "correctIndex": 3,
    "explanation": "A união posterior da pinça é o fulcro, os dedos aplicam a força potente no meio e a ponta segura a carga resistente.",
    "distractorAnalysis": [
      "Está incorreta: Não é de 2.ª classe porque a carga está na ponta e a força dos dedos atua no meio.",
      "Está incorreta: Não é de 1.ª classe porque o fulcro não está entre os dedos e a ponta; está na base oposta da pinça.",
      "Está incorreta: Gravidade indiferente é um tipo de equilíbrio estático, não uma classe de alavanca."
    ],
    "nursingApplication": "Instrumento de uso comum para manipular com delicadeza compressas e materiais de penso."
  },
  {
    "id": 1428,
    "topicId": 1,
    "question": "Numa alavanca interpotente (3.ª classe), se o braço da potência medir 5 cm e o braço da resistência medir 30 cm, para equilibrar uma carga de 10 N, que força potente tem de ser exercida?",
    "options": [
      "60 N.",
      "1,67 N.",
      "10 N.",
      "300 N."
    ],
    "correctIndex": 0,
    "explanation": "Pela Lei das Alavancas: Fp · bp = Fr · br => Fp · 5 cm = 10 N · 30 cm => Fp · 5 = 300 => Fp = 300 / 5 = 60 N.",
    "distractorAnalysis": [
      "Está incorreta: 1,67 N resultaria de inverter erroneamente os braços na equação (10 · 5 / 30).",
      "Está incorreta: 10 N seria a força se os braços fossem iguais, o que nunca acontece numa alavanca de 3.ª classe.",
      "Está incorreta: 300 N é o valor do momento em N·cm, e não a intensidade da força potente em Newtons."
    ],
    "nursingApplication": "Demonstra a desvantagem mecânica de força: é preciso exercer 60 N para equilibrar uma carga de apenas 10 N."
  },
  {
    "id": 1429,
    "topicId": 1,
    "question": "No corpo humano, o movimento de elevação sobre a ponta dos pés (flexão plantar realizada pelo músculo tríceps sural através do tendão de Aquiles) exemplifica que tipo de alavanca biomecânica?",
    "options": [
      "Alavanca de 1.ª Classe (Interfixa), com o calcâneo a funcionar como fulcro central entre os dedos e o joelho.",
      "Alavanca de 2.ª Classe (Inter-resistente), pois a força resistente do peso corporal transmitido pela tíbia situa-se entre o fulcro nas articulações metatarsofalângicas e a potência no calcâneo (VM > 1).",
      "Alavanca de 3.ª Classe (Interpotente), apresentando desvantagem mecânica extrema que impede a marcha bípede.",
      "Alavanca Hidráulica de Pascal que opera por variação de pressão capilar."
    ],
    "correctIndex": 1,
    "explanation": "O ponto de apoio está nos metatarsos no solo (frente), a resistência é a linha de carga do peso corporal na tíbia (meio) e a potência é o tríceps sural que puxa o calcâneo para cima (trás), configurando PA - Fr - Fp com VM > 1.",
    "distractorAnalysis": [
      "Está incorreta: O fulcro fica nos metatarsos no chão e não no calcâneo.",
      "Está incorreta: A flexão plantar é uma alavanca de 2.ª classe que poupa força muscular ao elevar o peso de todo o corpo.",
      "Está incorreta: Não se trata de transmissão hidráulica, mas de uma alavanca mecânica óssea rígida clássica."
    ],
    "nursingApplication": "Permite que o músculo tríceps sural eleve todo o peso corporal durante a locomoção com esforço mecânico favorável."
  },
  {
    "id": 1430,
    "topicId": 1,
    "question": "Por que razão a grande maioria das alavancas do aparelho locomotor humano são de 3.ª classe (interpotentes), apesar de apresentarem desvantagem mecânica de força (VM < 1)?",
    "options": [
      "Porque o corpo humano não possui energia suficiente para construir alavancas de 2.ª classe.",
      "Porque a 3.ª classe anula todo o desgaste das articulações e dos ligamentos circundantes.",
      "Porque privilegiam a amplitude e a velocidade angular dos movimentos dos membros, permitindo grandes deslocamentos das extremidades com pequeno encurtamento muscular.",
      "Porque as alavancas de 3.ª classe multiplicam a força muscular por dez em todos os movimentos."
    ],
    "correctIndex": 2,
    "explanation": "Como a inserção muscular potente fica próxima da articulação (bp pequeno), uma pequena contração muscular produz um movimento amplo e rápido da mão ou do pé.",
    "distractorAnalysis": [
      "Está incorreta: O corpo humano possui alavancas de 2.ª classe (ex.: tornozelo na flexão plantar) e de 1.ª classe (atlanto-occipital).",
      "Está incorreta: O desgaste articular continua a ocorrer e as forças de compressão no fulcro são elevadas.",
      "Está incorreta: As alavancas de 3.ª classe têm desvantagem mecânica de força (VM < 1), exigindo mais força muscular e não multiplicando força."
    ],
    "nursingApplication": "Compreender este compromisso biomecânico fundamenta por que os músculos realizam grandes forças internas para mover pequenas cargas externas."
  },
  {
    "id": 1431,
    "topicId": 1,
    "question": "Como se caracteriza geometricamente uma Alavanca de 2.ª Classe (Inter-resistente)?",
    "options": [
      "O ponto de apoio localiza-se rigorosamente no meio, separando as duas forças.",
      "A força potente localiza-se entre o ponto de apoio e a força resistente.",
      "As forças resistente e potente atuam no mesmo ponto geométrico anulando o fulcro.",
      "A força resistente localiza-se entre o ponto de apoio (fulcro) e a força potente (PA - Fr - Fp)."
    ],
    "correctIndex": 3,
    "explanation": "Na alavanca de 2.ª classe, a carga resistente fica no meio, pelo que o braço potente é sempre maior que o braço resistente (bp > br).",
    "distractorAnalysis": [
      "Está incorreta: O fulcro no meio caracteriza a alavanca de 1.ª classe (interfixa), não a de 2.ª classe.",
      "Está incorreta: A potência no meio caracteriza a alavanca de 3.ª classe (interpotente), não a de 2.ª classe.",
      "Está incorreta: Se as forças atuassem no mesmo ponto, o sistema não funcionaria como uma alavanca multiplicadora."
    ],
    "nursingApplication": "Exemplo clássico: carrinho de transporte onde a carga está entre a roda (apoio) e as pegas (potência)."
  },
  {
    "id": 1432,
    "topicId": 1,
    "question": "Qual é a principal vantagem mecânica de uma Alavanca de 2.ª Classe (Inter-resistente)?",
    "options": [
      "Apresenta sempre Vantagem Mecânica de Força (VM > 1), pois o braço potente é sempre superior ao braço resistente (Fp < Fr).",
      "Apresenta sempre desvantagem mecânica de força, exigindo uma força potente cinco vezes superior à carga.",
      "Anula totalmente o trabalho mecânico realizado pela força gravítica durante a elevação.",
      "Permite multiplicar a velocidade da carga em troca de uma força motora infinita."
    ],
    "correctIndex": 0,
    "explanation": "Como bp > br em todas as alavancas de 2.ª classe, a força necessária é sempre menor do que a carga suportada (poupa força).",
    "distractorAnalysis": [
      "Está incorreta: A desvantagem sistemática de força é a característica típica da alavanca de 3.ª classe (interpotente).",
      "Está incorreta: Nenhuma alavanca anula o trabalho mecânico; a conservação da energia é estritamente mantida.",
      "Está incorreta: A alavanca de 2.ª classe prioriza a economia de força e não a multiplicação de velocidade na carga."
    ],
    "nursingApplication": "Princípio físico de carrinhos de transporte pesado: levantar grandes cargas com esforço reduzido."
  },
  {
    "id": 1433,
    "topicId": 1,
    "question": "Qual dos seguintes instrumentos é um exemplo representativo de Alavanca de 2.ª Classe (Inter-resistente)?",
    "options": [
      "Uma tesoura cirúrgica de corte de fios.",
      "Um carrinho de mão de transporte de carga.",
      "Uma pinça anatómica simples de preensão.",
      "Uma cana de pesca esticada na vertical."
    ],
    "correctIndex": 1,
    "explanation": "No carrinho de mão, o eixo da roda dianteira é o fulcro, a carga está na caçamba (meio) e a força é feita nas pegas.",
    "distractorAnalysis": [
      "Está incorreta: A tesoura é uma alavanca de 1.ª classe (interfixa) com o parafuso central como fulcro.",
      "Está incorreta: A pinça anatómica é uma alavanca de 3.ª classe (interpotente) com os dedos a apertar no meio.",
      "Está incorreta: A cana de pesca é uma alavanca de 3.ª classe, com a mão motora posicionada entre o apoio e a ponta."
    ],
    "nursingApplication": "Permite compreender o design de equipamentos de carga concebidos para minimizar a fadiga muscular."
  },
  {
    "id": 1434,
    "topicId": 1,
    "question": "Como se caracteriza geometricamente uma Alavanca de 3.ª Classe (Interpotente)?",
    "options": [
      "A força resistente localiza-se entre o fulcro e a força potente.",
      "O fulcro situa-se rigorosamente entre a potência e a resistência.",
      "A força potente localiza-se entre o ponto de apoio (fulcro) e a força resistente (PA - Fp - Fr).",
      "A força potente atua perpendicularmente ao infinito fora do plano da barra rígida."
    ],
    "correctIndex": 2,
    "explanation": "Na alavanca de 3.ª classe, o esforço muscular ou motor atua no meio, fazendo com que o braço potente seja menor que o resistente (bp < br).",
    "distractorAnalysis": [
      "Está incorreta: A resistência no meio é a alavanca de 2.ª classe (inter-resistente).",
      "Está incorreta: O fulcro no meio é a alavanca de 1.ª classe (interfixa).",
      "Está incorreta: As forças atuam em pontos definidos da barra rígida e dentro do plano biomecânico de movimento."
    ],
    "nursingApplication": "A vasta maioria das alavancas musculares dos membros no corpo humano são de 3.ª classe."
  },
  {
    "id": 1435,
    "topicId": 1,
    "question": "Se a Alavanca de 3.ª Classe tem desvantagem mecânica de força (Fp > Fr), qual é a sua grande utilidade biomecânica?",
    "options": [
      "Permite levantar pesos de milhares de toneladas sem qualquer dispêndio de energia muscular.",
      "Anula completamente o atrito entre as superfícies ósseas da articulação em causa.",
      "Impede que a gravidade terrestre acelere os objetos que caem em direção ao solo.",
      "Ganha-se em amplitude de movimento e em velocidade na extremidade livre da alavanca."
    ],
    "correctIndex": 3,
    "explanation": "Ao aplicar a força perto do fulcro, um pequeno encurtamento muscular produz um grande e rápido deslocamento da mão ou do pé.",
    "distractorAnalysis": [
      "Está incorreta: A alavanca de 3.ª classe exige mais força muscular do que o peso da carga, não multiplicando força.",
      "Está incorreta: O atrito articular é reduzido pelo líquido sinovial e cartilagem, não pelo tipo de alavanca.",
      "Está incorreta: A alavanca não altera a aceleração gravítica g = 9,8 m/s²."
    ],
    "nursingApplication": "Permite que a mão execute movimentos amplos e rápidos, essenciais para manusear materiais com precisão."
  },
  {
    "id": 1436,
    "topicId": 1,
    "question": "O sistema de flexão do antebraço pelo músculo bíceps braquial (cotovelo como apoio, inserção do bíceps no rádio e peso na mão) é uma alavanca:",
    "options": [
      "De 3.ª Classe (Interpotente).",
      "De 2.ª Classe (Inter-resistente).",
      "De 1.ª Classe (Interfixa).",
      "De 4.ª Classe (Interrotatória)."
    ],
    "correctIndex": 0,
    "explanation": "O fulcro está na articulação do cotovelo, a potência é o bíceps no rádio (~4-5 cm do cotovelo) e a resistência está na mão (~30 cm).",
    "distractorAnalysis": [
      "Está incorreta: Não é de 2.ª classe porque a carga resistente está na extremidade (mão) e não no meio.",
      "Está incorreta: Não é de 1.ª classe porque o fulcro não está no meio; fica na extremidade articular do cotovelo.",
      "Está incorreta: Não existe 4.ª classe de alavancas na física clássica."
    ],
    "nursingApplication": "Explica por que segurar um peso de 5 kg na mão exige mais de 30 kgf de força tensora no bíceps."
  },
  {
    "id": 1437,
    "topicId": 1,
    "question": "Uma pinça de preensão utilizada para segurar pequenos objetos com os dedos no meio é um exemplo clássico de alavanca:",
    "options": [
      "De 2.ª Classe (Inter-resistente).",
      "De 3.ª Classe (Interpotente).",
      "De 1.ª Classe (Interfixa).",
      "De Gravidade Indiferente."
    ],
    "correctIndex": 1,
    "explanation": "A união posterior da pinça é o fulcro, os dedos aplicam a força potente no meio e a ponta segura a carga resistente.",
    "distractorAnalysis": [
      "Está incorreta: Não é de 2.ª classe porque a carga está na ponta e a força dos dedos atua no meio.",
      "Está incorreta: Não é de 1.ª classe porque o fulcro não está entre os dedos e a ponta; está na base oposta da pinça.",
      "Está incorreta: Gravidade indiferente é um tipo de equilíbrio estático, não uma classe de alavanca."
    ],
    "nursingApplication": "Instrumento de uso comum para manipular com delicadeza compressas e materiais de penso."
  },
  {
    "id": 1438,
    "topicId": 1,
    "question": "Numa alavanca interpotente (3.ª classe), se o braço da potência medir 5 cm e o braço da resistência medir 30 cm, para equilibrar uma carga de 10 N, que força potente tem de ser exercida?",
    "options": [
      "1,67 N.",
      "10 N.",
      "60 N.",
      "300 N."
    ],
    "correctIndex": 2,
    "explanation": "Pela Lei das Alavancas: Fp · bp = Fr · br => Fp · 5 cm = 10 N · 30 cm => Fp · 5 = 300 => Fp = 300 / 5 = 60 N.",
    "distractorAnalysis": [
      "Está incorreta: 1,67 N resultaria de inverter erroneamente os braços na equação (10 · 5 / 30).",
      "Está incorreta: 10 N seria a força se os braços fossem iguais, o que nunca acontece numa alavanca de 3.ª classe.",
      "Está incorreta: 300 N é o valor do momento em N·cm, e não a intensidade da força potente em Newtons."
    ],
    "nursingApplication": "Demonstra a desvantagem mecânica de força: é preciso exercer 60 N para equilibrar uma carga de apenas 10 N."
  },
  {
    "id": 1439,
    "topicId": 1,
    "question": "No corpo humano, o movimento de elevação sobre a ponta dos pés (flexão plantar realizada pelo músculo tríceps sural através do tendão de Aquiles) exemplifica que tipo de alavanca biomecânica?",
    "options": [
      "Alavanca de 1.ª Classe (Interfixa), com o calcâneo a funcionar como fulcro central entre os dedos e o joelho.",
      "Alavanca de 3.ª Classe (Interpotente), apresentando desvantagem mecânica extrema que impede a marcha bípede.",
      "Alavanca Hidráulica de Pascal que opera por variação de pressão capilar.",
      "Alavanca de 2.ª Classe (Inter-resistente), pois a força resistente do peso corporal transmitido pela tíbia situa-se entre o fulcro nas articulações metatarsofalângicas e a potência no calcâneo (VM > 1)."
    ],
    "correctIndex": 3,
    "explanation": "O ponto de apoio está nos metatarsos no solo (frente), a resistência é a linha de carga do peso corporal na tíbia (meio) e a potência é o tríceps sural que puxa o calcâneo para cima (trás), configurando PA - Fr - Fp com VM > 1.",
    "distractorAnalysis": [
      "Está incorreta: O fulcro fica nos metatarsos no chão e não no calcâneo.",
      "Está incorreta: A flexão plantar é uma alavanca de 2.ª classe que poupa força muscular ao elevar o peso de todo o corpo.",
      "Está incorreta: Não se trata de transmissão hidráulica, mas de uma alavanca mecânica óssea rígida clássica."
    ],
    "nursingApplication": "Permite que o músculo tríceps sural eleve todo o peso corporal durante a locomoção com esforço mecânico favorável."
  },
  {
    "id": 1440,
    "topicId": 1,
    "question": "Por que razão a grande maioria das alavancas do aparelho locomotor humano são de 3.ª classe (interpotentes), apesar de apresentarem desvantagem mecânica de força (VM < 1)?",
    "options": [
      "Porque privilegiam a amplitude e a velocidade angular dos movimentos dos membros, permitindo grandes deslocamentos das extremidades com pequeno encurtamento muscular.",
      "Porque o corpo humano não possui energia suficiente para construir alavancas de 2.ª classe.",
      "Porque a 3.ª classe anula todo o desgaste das articulações e dos ligamentos circundantes.",
      "Porque as alavancas de 3.ª classe multiplicam a força muscular por dez em todos os movimentos."
    ],
    "correctIndex": 0,
    "explanation": "Como a inserção muscular potente fica próxima da articulação (bp pequeno), uma pequena contração muscular produz um movimento amplo e rápido da mão ou do pé.",
    "distractorAnalysis": [
      "Está incorreta: O corpo humano possui alavancas de 2.ª classe (ex.: tornozelo na flexão plantar) e de 1.ª classe (atlanto-occipital).",
      "Está incorreta: O desgaste articular continua a ocorrer e as forças de compressão no fulcro são elevadas.",
      "Está incorreta: As alavancas de 3.ª classe têm desvantagem mecânica de força (VM < 1), exigindo mais força muscular e não multiplicando força."
    ],
    "nursingApplication": "Compreender este compromisso biomecânico fundamenta por que os músculos realizam grandes forças internas para mover pequenas cargas externas."
  },
  {
    "id": 1441,
    "topicId": 1,
    "question": "Como se caracteriza geometricamente uma Alavanca de 2.ª Classe (Inter-resistente)?",
    "options": [
      "O ponto de apoio localiza-se rigorosamente no meio, separando as duas forças.",
      "A força resistente localiza-se entre o ponto de apoio (fulcro) e a força potente (PA - Fr - Fp).",
      "A força potente localiza-se entre o ponto de apoio e a força resistente.",
      "As forças resistente e potente atuam no mesmo ponto geométrico anulando o fulcro."
    ],
    "correctIndex": 1,
    "explanation": "Na alavanca de 2.ª classe, a carga resistente fica no meio, pelo que o braço potente é sempre maior que o braço resistente (bp > br).",
    "distractorAnalysis": [
      "Está incorreta: O fulcro no meio caracteriza a alavanca de 1.ª classe (interfixa), não a de 2.ª classe.",
      "Está incorreta: A potência no meio caracteriza a alavanca de 3.ª classe (interpotente), não a de 2.ª classe.",
      "Está incorreta: Se as forças atuassem no mesmo ponto, o sistema não funcionaria como uma alavanca multiplicadora."
    ],
    "nursingApplication": "Exemplo clássico: carrinho de transporte onde a carga está entre a roda (apoio) e as pegas (potência)."
  },
  {
    "id": 1442,
    "topicId": 1,
    "question": "Qual é a principal vantagem mecânica de uma Alavanca de 2.ª Classe (Inter-resistente)?",
    "options": [
      "Apresenta sempre desvantagem mecânica de força, exigindo uma força potente cinco vezes superior à carga.",
      "Anula totalmente o trabalho mecânico realizado pela força gravítica durante a elevação.",
      "Apresenta sempre Vantagem Mecânica de Força (VM > 1), pois o braço potente é sempre superior ao braço resistente (Fp < Fr).",
      "Permite multiplicar a velocidade da carga em troca de uma força motora infinita."
    ],
    "correctIndex": 2,
    "explanation": "Como bp > br em todas as alavancas de 2.ª classe, a força necessária é sempre menor do que a carga suportada (poupa força).",
    "distractorAnalysis": [
      "Está incorreta: A desvantagem sistemática de força é a característica típica da alavanca de 3.ª classe (interpotente).",
      "Está incorreta: Nenhuma alavanca anula o trabalho mecânico; a conservação da energia é estritamente mantida.",
      "Está incorreta: A alavanca de 2.ª classe prioriza a economia de força e não a multiplicação de velocidade na carga."
    ],
    "nursingApplication": "Princípio físico de carrinhos de transporte pesado: levantar grandes cargas com esforço reduzido."
  },
  {
    "id": 1443,
    "topicId": 1,
    "question": "Qual dos seguintes instrumentos é um exemplo representativo de Alavanca de 2.ª Classe (Inter-resistente)?",
    "options": [
      "Uma tesoura cirúrgica de corte de fios.",
      "Uma pinça anatómica simples de preensão.",
      "Uma cana de pesca esticada na vertical.",
      "Um carrinho de mão de transporte de carga."
    ],
    "correctIndex": 3,
    "explanation": "No carrinho de mão, o eixo da roda dianteira é o fulcro, a carga está na caçamba (meio) e a força é feita nas pegas.",
    "distractorAnalysis": [
      "Está incorreta: A tesoura é uma alavanca de 1.ª classe (interfixa) com o parafuso central como fulcro.",
      "Está incorreta: A pinça anatómica é uma alavanca de 3.ª classe (interpotente) com os dedos a apertar no meio.",
      "Está incorreta: A cana de pesca é uma alavanca de 3.ª classe, com a mão motora posicionada entre o apoio e a ponta."
    ],
    "nursingApplication": "Permite compreender o design de equipamentos de carga concebidos para minimizar a fadiga muscular."
  },
  {
    "id": 1444,
    "topicId": 1,
    "question": "Como se caracteriza geometricamente uma Alavanca de 3.ª Classe (Interpotente)?",
    "options": [
      "A força potente localiza-se entre o ponto de apoio (fulcro) e a força resistente (PA - Fp - Fr).",
      "A força resistente localiza-se entre o fulcro e a força potente.",
      "O fulcro situa-se rigorosamente entre a potência e a resistência.",
      "A força potente atua perpendicularmente ao infinito fora do plano da barra rígida."
    ],
    "correctIndex": 0,
    "explanation": "Na alavanca de 3.ª classe, o esforço muscular ou motor atua no meio, fazendo com que o braço potente seja menor que o resistente (bp < br).",
    "distractorAnalysis": [
      "Está incorreta: A resistência no meio é a alavanca de 2.ª classe (inter-resistente).",
      "Está incorreta: O fulcro no meio é a alavanca de 1.ª classe (interfixa).",
      "Está incorreta: As forças atuam em pontos definidos da barra rígida e dentro do plano biomecânico de movimento."
    ],
    "nursingApplication": "A vasta maioria das alavancas musculares dos membros no corpo humano são de 3.ª classe."
  },
  {
    "id": 1445,
    "topicId": 1,
    "question": "Se a Alavanca de 3.ª Classe tem desvantagem mecânica de força (Fp > Fr), qual é a sua grande utilidade biomecânica?",
    "options": [
      "Permite levantar pesos de milhares de toneladas sem qualquer dispêndio de energia muscular.",
      "Ganha-se em amplitude de movimento e em velocidade na extremidade livre da alavanca.",
      "Anula completamente o atrito entre as superfícies ósseas da articulação em causa.",
      "Impede que a gravidade terrestre acelere os objetos que caem em direção ao solo."
    ],
    "correctIndex": 1,
    "explanation": "Ao aplicar a força perto do fulcro, um pequeno encurtamento muscular produz um grande e rápido deslocamento da mão ou do pé.",
    "distractorAnalysis": [
      "Está incorreta: A alavanca de 3.ª classe exige mais força muscular do que o peso da carga, não multiplicando força.",
      "Está incorreta: O atrito articular é reduzido pelo líquido sinovial e cartilagem, não pelo tipo de alavanca.",
      "Está incorreta: A alavanca não altera a aceleração gravítica g = 9,8 m/s²."
    ],
    "nursingApplication": "Permite que a mão execute movimentos amplos e rápidos, essenciais para manusear materiais com precisão."
  },
  {
    "id": 1446,
    "topicId": 1,
    "question": "O sistema de flexão do antebraço pelo músculo bíceps braquial (cotovelo como apoio, inserção do bíceps no rádio e peso na mão) é uma alavanca:",
    "options": [
      "De 2.ª Classe (Inter-resistente).",
      "De 1.ª Classe (Interfixa).",
      "De 3.ª Classe (Interpotente).",
      "De 4.ª Classe (Interrotatória)."
    ],
    "correctIndex": 2,
    "explanation": "O fulcro está na articulação do cotovelo, a potência é o bíceps no rádio (~4-5 cm do cotovelo) e a resistência está na mão (~30 cm).",
    "distractorAnalysis": [
      "Está incorreta: Não é de 2.ª classe porque a carga resistente está na extremidade (mão) e não no meio.",
      "Está incorreta: Não é de 1.ª classe porque o fulcro não está no meio; fica na extremidade articular do cotovelo.",
      "Está incorreta: Não existe 4.ª classe de alavancas na física clássica."
    ],
    "nursingApplication": "Explica por que segurar um peso de 5 kg na mão exige mais de 30 kgf de força tensora no bíceps."
  },
  {
    "id": 1447,
    "topicId": 1,
    "question": "Uma pinça de preensão utilizada para segurar pequenos objetos com os dedos no meio é um exemplo clássico de alavanca:",
    "options": [
      "De 2.ª Classe (Inter-resistente).",
      "De 1.ª Classe (Interfixa).",
      "De Gravidade Indiferente.",
      "De 3.ª Classe (Interpotente)."
    ],
    "correctIndex": 3,
    "explanation": "A união posterior da pinça é o fulcro, os dedos aplicam a força potente no meio e a ponta segura a carga resistente.",
    "distractorAnalysis": [
      "Está incorreta: Não é de 2.ª classe porque a carga está na ponta e a força dos dedos atua no meio.",
      "Está incorreta: Não é de 1.ª classe porque o fulcro não está entre os dedos e a ponta; está na base oposta da pinça.",
      "Está incorreta: Gravidade indiferente é um tipo de equilíbrio estático, não uma classe de alavanca."
    ],
    "nursingApplication": "Instrumento de uso comum para manipular com delicadeza compressas e materiais de penso."
  },
  {
    "id": 1448,
    "topicId": 1,
    "question": "Numa alavanca interpotente (3.ª classe), se o braço da potência medir 5 cm e o braço da resistência medir 30 cm, para equilibrar uma carga de 10 N, que força potente tem de ser exercida?",
    "options": [
      "60 N.",
      "1,67 N.",
      "10 N.",
      "300 N."
    ],
    "correctIndex": 0,
    "explanation": "Pela Lei das Alavancas: Fp · bp = Fr · br => Fp · 5 cm = 10 N · 30 cm => Fp · 5 = 300 => Fp = 300 / 5 = 60 N.",
    "distractorAnalysis": [
      "Está incorreta: 1,67 N resultaria de inverter erroneamente os braços na equação (10 · 5 / 30).",
      "Está incorreta: 10 N seria a força se os braços fossem iguais, o que nunca acontece numa alavanca de 3.ª classe.",
      "Está incorreta: 300 N é o valor do momento em N·cm, e não a intensidade da força potente em Newtons."
    ],
    "nursingApplication": "Demonstra a desvantagem mecânica de força: é preciso exercer 60 N para equilibrar uma carga de apenas 10 N."
  },
  {
    "id": 1449,
    "topicId": 1,
    "question": "No corpo humano, o movimento de elevação sobre a ponta dos pés (flexão plantar realizada pelo músculo tríceps sural através do tendão de Aquiles) exemplifica que tipo de alavanca biomecânica?",
    "options": [
      "Alavanca de 1.ª Classe (Interfixa), com o calcâneo a funcionar como fulcro central entre os dedos e o joelho.",
      "Alavanca de 2.ª Classe (Inter-resistente), pois a força resistente do peso corporal transmitido pela tíbia situa-se entre o fulcro nas articulações metatarsofalângicas e a potência no calcâneo (VM > 1).",
      "Alavanca de 3.ª Classe (Interpotente), apresentando desvantagem mecânica extrema que impede a marcha bípede.",
      "Alavanca Hidráulica de Pascal que opera por variação de pressão capilar."
    ],
    "correctIndex": 1,
    "explanation": "O ponto de apoio está nos metatarsos no solo (frente), a resistência é a linha de carga do peso corporal na tíbia (meio) e a potência é o tríceps sural que puxa o calcâneo para cima (trás), configurando PA - Fr - Fp com VM > 1.",
    "distractorAnalysis": [
      "Está incorreta: O fulcro fica nos metatarsos no chão e não no calcâneo.",
      "Está incorreta: A flexão plantar é uma alavanca de 2.ª classe que poupa força muscular ao elevar o peso de todo o corpo.",
      "Está incorreta: Não se trata de transmissão hidráulica, mas de uma alavanca mecânica óssea rígida clássica."
    ],
    "nursingApplication": "Permite que o músculo tríceps sural eleve todo o peso corporal durante a locomoção com esforço mecânico favorável."
  },
  {
    "id": 1450,
    "topicId": 1,
    "question": "Por que razão a grande maioria das alavancas do aparelho locomotor humano são de 3.ª classe (interpotentes), apesar de apresentarem desvantagem mecânica de força (VM < 1)?",
    "options": [
      "Porque o corpo humano não possui energia suficiente para construir alavancas de 2.ª classe.",
      "Porque a 3.ª classe anula todo o desgaste das articulações e dos ligamentos circundantes.",
      "Porque privilegiam a amplitude e a velocidade angular dos movimentos dos membros, permitindo grandes deslocamentos das extremidades com pequeno encurtamento muscular.",
      "Porque as alavancas de 3.ª classe multiplicam a força muscular por dez em todos os movimentos."
    ],
    "correctIndex": 2,
    "explanation": "Como a inserção muscular potente fica próxima da articulação (bp pequeno), uma pequena contração muscular produz um movimento amplo e rápido da mão ou do pé.",
    "distractorAnalysis": [
      "Está incorreta: O corpo humano possui alavancas de 2.ª classe (ex.: tornozelo na flexão plantar) e de 1.ª classe (atlanto-occipital).",
      "Está incorreta: O desgaste articular continua a ocorrer e as forças de compressão no fulcro são elevadas.",
      "Está incorreta: As alavancas de 3.ª classe têm desvantagem mecânica de força (VM < 1), exigindo mais força muscular e não multiplicando força."
    ],
    "nursingApplication": "Compreender este compromisso biomecânico fundamenta por que os músculos realizam grandes forças internas para mover pequenas cargas externas."
  },
  {
    "id": 1451,
    "topicId": 1,
    "question": "O que é o Centro de Gravidade (CG) de um corpo humano ou objeto material?",
    "options": [
      "O ponto onde a temperatura corporal atinge o seu valor mais elevado durante o dia.",
      "A extremidade mais distal do membro inferior em contacto com o solo.",
      "A área poligonal de contacto formada pelos pés sobre a superfície de apoio.",
      "O ponto imaginário de aplicação da resultante de todas as forças gravíticas paralelas que atuam sobre a massa do corpo."
    ],
    "correctIndex": 3,
    "explanation": "O CG é o centro de massa ponderado pela gravidade onde se considera concentrado todo o peso do corpo para fins estáticos.",
    "distractorAnalysis": [
      "Está incorreta: O CG é um ponto mecânico de equilíbrio de massa, sem relação direta com o pico de temperatura metabólica.",
      "Está incorreta: A extremidade dos pés define a base de sustentação, não o centro de gravidade do corpo.",
      "Está incorreta: A área de contacto com o piso define a Base de Sustentação (BS), e não o Centro de Gravidade (CG)."
    ],
    "nursingApplication": "Determinar o CG é crucial para avaliar o risco de perda de equilíbrio e quedas em utentes."
  },
  {
    "id": 1452,
    "topicId": 1,
    "question": "Onde se localiza aproximadamente o Centro de Gravidade do corpo humano de um adulto em posição ortostática neutra?",
    "options": [
      "No interior da bacia pélvica, na linha média, imediatamente anterior à 2.ª vértebra sagrada (S2).",
      "No centro da cabeça, exatamente ao nível da cavidade craniana frontal.",
      "Na articulação de ambos os joelhos junto aos meniscos articulares.",
      "Na ponta dos dedos dos pés quando apoiados no solo horizontal."
    ],
    "correctIndex": 0,
    "explanation": "Em postura anatómica ereta de repouso, o CG humano situa-se anatomicamente na pelve, à frente de S2 (~55% a 57% da altura total).",
    "distractorAnalysis": [
      "Está incorreta: O CG na cabeça tornaria o corpo extremamente instável e com tendência imediata a tombar.",
      "Está incorreta: O CG situa-se acima dos joelhos, na região pélvica sagrada.",
      "Está incorreta: A ponta dos pés faz parte da base de sustentação no solo, situando-se muito abaixo do CG corporal."
    ],
    "nursingApplication": "Ponto de referência fundamental para todas as técnicas de mobilização e ergonomia postural."
  },
  {
    "id": 1453,
    "topicId": 1,
    "question": "Como se define a 'Base de Sustentação' (BS) de um corpo em equilíbrio sobre uma superfície?",
    "options": [
      "A distância vertical medida entre o solo e o centro de gravidade do indivíduo.",
      "A área poligonal delimitada pelos bordos externos de todos os pontos de apoio em contacto com o solo.",
      "A massa total do corpo dividida pelo volume do calçado utilizado.",
      "O coeficiente de atrito cinético medido entre a pele e o colchão do leito."
    ],
    "correctIndex": 1,
    "explanation": "A BS é a área geométrica convexa formada pela união dos contornos externos dos apoios (ex.: os dois pés e o espaço entre eles).",
    "distractorAnalysis": [
      "Está incorreta: A distância vertical ao solo é a altura do centro de gravidade (h_CG), não a base de sustentação.",
      "Está incorreta: Massa dividida por volume é densidade (massa volúmica), e não base de apoio.",
      "Está incorreta: Coeficiente de atrito mede a adesão superficial, não a área geométrica da base de sustentação."
    ],
    "nursingApplication": "Aumentar a base de sustentação (afastar os pés) amplia a margem de estabilidade postural."
  },
  {
    "id": 1454,
    "topicId": 1,
    "question": "Qual é a condição geométrica essencial para que um corpo humano em repouso permaneça em equilíbrio estável sem cair?",
    "options": [
      "A linha de gravidade tem de passar fora da base de sustentação na direção dos calcanhares.",
      "O centro de gravidade tem de ser elevado até à altura máxima possível dos ombros.",
      "A Linha de Gravidade (vertical que passa no CG) tem de projetar-se rigorosamente no interior da Base de Sustentação.",
      "A área da base de sustentação tem de ser reduzida a um único ponto milimétrico."
    ],
    "correctIndex": 2,
    "explanation": "Se a vertical do CG sair para fora da área da base de sustentação, o peso gera um momento de rotação que tomba o corpo.",
    "distractorAnalysis": [
      "Está incorreta: Se a linha de gravidade passar fora da base, o corpo perde o equilíbrio e cai a menos que haja reação motora.",
      "Está incorreta: Elevar o centro de gravidade diminui a estabilidade, tornando o equilíbrio muito mais precário.",
      "Está incorreta: Reduzir a base a um ponto diminui drasticamente a estabilidade (ex.: equilibrar-se num só pé)."
    ],
    "nursingApplication": "Fundamento da prevenção de quedas: garantir que a linha de gravidade nunca ultrapassa a base de apoio."
  },
  {
    "id": 1455,
    "topicId": 1,
    "question": "Quais são os dois fatores biomecânicos fundamentais que aumentam a estabilidade estática de um corpo?",
    "options": [
      "Reduzir a base de sustentação a um único apoio e elevar o centro de gravidade.",
      "Aumentar a velocidade de rotação e fechar completamente os olhos.",
      "Elevar o peso do indivíduo até ao teto através de um cabo tracionado.",
      "Alargar a base de sustentação e rebaixar o centro de gravidade."
    ],
    "correctIndex": 3,
    "explanation": "Quanto mais ampla a base de apoio e mais baixo o centro de gravidade, maior é o ângulo de inclinação necessário para tombar o corpo.",
    "distractorAnalysis": [
      "Está incorreta: Reduzir a base e elevar o CG são precisamente os dois fatores que provocam instabilidade e facilitam quedas.",
      "Está incorreta: Aumentar a velocidade angular diz respeito à dinâmica e fechar os olhos reduz o controlo vestibular/visual.",
      "Está incorreta: Suspender o corpo por cabos altera o sistema para suporte suspenso, não sendo apoio no solo."
    ],
    "nursingApplication": "Regra de ouro ergonómica: fletir ligeiramente os joelhos e afastar os pés ao mobilizar cargas."
  },
  {
    "id": 1456,
    "topicId": 1,
    "question": "Porque é que o uso de um andarilho ou canadianas melhora significativamente o equilíbrio de um utente com marcha instável?",
    "options": [
      "Porque aumenta a área poligonal da base de sustentação, tornando muito mais difícil que a linha de gravidade saia para fora dela.",
      "Porque reduz o peso corporal do utente para metade através de um campo magnético.",
      "Porque anula completamente o atrito entre o calçado e o piso do corredor.",
      "Porque desloca o centro de gravidade do corpo para a cavidade craniana superior."
    ],
    "correctIndex": 0,
    "explanation": "Ao acrescentar apoios periféricos no solo, a base de sustentação alarga-se em várias vezes a área dos pés isolados.",
    "distractorAnalysis": [
      "Está incorreta: Dispositivos mecânicos de apoio transmitem forças ao solo, mas não anulam o peso da massa corporal.",
      "Está incorreta: O atrito nos pés e ponteiras de borracha é mantido ou aumentado para evitar deslizamentos perigosos.",
      "Está incorreta: O CG não se desloca para a cabeça; o andarilho permite manter o alinhamento corporal seguro."
    ],
    "nursingApplication": "Justifica a prescrição de dispositivos de apoio da marcha na reabilitação e geriatria."
  },
  {
    "id": 1457,
    "topicId": 1,
    "question": "Quando uma pessoa se inclina para a frente para apanhar um objeto do chão mantendo os joelhos completamente esticados, o que acontece ao centro de gravidade do tronco?",
    "options": [
      "O CG do tronco desaparece temporariamente da estrutura corporal.",
      "O CG do tronco projeta-se muito para a frente, gerando um enorme braço de momento sobre as vértebras lombares (L5-S1).",
      "O momento de rotação sobre a coluna lombar torna-se estritamente nulo.",
      "A gravidade terrestre deixa de atuar sobre a massa do tronco durante a inclinação."
    ],
    "correctIndex": 1,
    "explanation": "Ao projetar o tronco para a frente, a distância horizontal (braço de alavanca) entre a carga e L5-S1 aumenta, multiplicando a tensão muscular lombar.",
    "distractorAnalysis": [
      "Está incorreta: O centro de gravidade é uma propriedade geométrica da distribuição de massa e nunca desaparece.",
      "Está incorreta: O momento sobre a lombar aumenta drasticamente (M = P · b), e nunca se anula nesta postura inadequada.",
      "Está incorreta: A gravidade atua de forma constante e permanente sobre todo o corpo."
    ],
    "nursingApplication": "Explica as lesões musculoesqueléticas lombares resultantes de posturas incorretas de flexão do tronco."
  },
  {
    "id": 1458,
    "topicId": 1,
    "question": "Para levantar com segurança uma carga pesada pousada no chão, qual é a postura ergonomicamente correta com base na Biofísica?",
    "options": [
      "Manter os joelhos perfeitamente rígidos e curvar a coluna lombar a noventa graus com a carga longe.",
      "Elevar a carga com os membros superiores esticados para a frente à distância de um metro.",
      "Fletir os joelhos mantendo as costas direitas e a carga o mais junto possível ao corpo, reduzindo o braço de alavanca.",
      "Girar rapidamente o tronco em torção axial enquanto se faz a força máxima de elevação."
    ],
    "correctIndex": 2,
    "explanation": "Manter a carga junto ao corpo reduz o braço de momento 'b' da resistência sobre a coluna lombar, minimizando a força muscular requerida.",
    "distractorAnalysis": [
      "Está incorreta: Curvar a lombar com joelhos rígidos maximiza o braço de momento e a pressão sobre os discos intervertebrais.",
      "Está incorreta: Segurar a carga longe do corpo aumenta o braço de alavanca, multiplicando o momento resistente e o risco de lesão.",
      "Está incorreta: Movimentos combinados de flexão e torção sob carga geram forças cortantes destrutivas no anel fibroso discal."
    ],
    "nursingApplication": "Princípio biomecânico basilar da movimentação manual de cargas para proteção da saúde do profissional."
  },
  {
    "id": 1459,
    "topicId": 1,
    "question": "Considerando a distribuição anatómica de massa, de que forma a posição do Centro de Gravidade (CG) difere tipicamente entre homens, mulheres e crianças na postura ereta?",
    "options": [
      "É rigorosamente idêntico ao milímetro em todos os seres humanos independentemente da idade e do sexo.",
      "Nas crianças situa-se junto aos calcanhares e nos adultos situa-se na garganta.",
      "Nas mulheres situa-se acima dos ombros e nos homens situa-se abaixo dos joelhos.",
      "É ligeiramente mais baixo nas mulheres (maior largura pélvica), mais alto nos homens (maior massa na cintura escapular) e marcadamente mais elevado nas crianças pequenas devido à desproporção da cabeça."
    ],
    "correctIndex": 3,
    "explanation": "Diferenças na morfologia esquelética e na distribuição de massa alteram a altura do CG: ~55% da altura nas mulheres adultas, ~57% nos homens e mais alto nas crianças (cabeça proporcionalmente maior).",
    "distractorAnalysis": [
      "Está incorreta: A posição do CG varia com a proporção biométrica e distribuição das massas corporais.",
      "Está incorreta: Nas crianças a cabeça é desproporcionalmente pesada, elevando o CG e tornando-as mais instáveis.",
      "Está incorreta: O CG em ambos os sexos situa-se na região pélvico-abdominal, diferindo ligeiramente em altura relativa."
    ],
    "nursingApplication": "Explica por que as crianças pequenas têm maior tendência a desequilíbrios e quedas cefálicas."
  },
  {
    "id": 1460,
    "topicId": 1,
    "question": "Como se define o 'Ângulo Crítico de Tombamento' na avaliação da estabilidade estática de um corpo apoiado sobre uma superfície plana horizontal?",
    "options": [
      "O ângulo limite de inclinação a partir do qual a Linha de Gravidade ultrapassa o bordo da base de sustentação, momento a partir do qual a gravidade gera um binário que derruba o corpo.",
      "O ângulo de noventa graus em que todos os corpos perdem a sua massa inercial.",
      "O ângulo formado entre o raio de luz solar e o meridiano do local de apoio.",
      "A temperatura limite em que o corpo sólido funde para o estado líquido sob atrito."
    ],
    "correctIndex": 0,
    "explanation": "Enquanto a linha de gravidade cai dentro da base, o peso gera momento restaurador; ao ultrapassar o bordo (ângulo crítico), o momento torna-se desestabilizador e o corpo tomba.",
    "distractorAnalysis": [
      "Está incorreta: A inclinação mecânica não anula a massa inercial do corpo material.",
      "Está incorreta: Ângulo de incidência solar pertence à óptica e astronomia, sem relação com estabilidade estática.",
      "Está incorreta: Fusão de materiais é uma transição termodinâmica de fase, não o ângulo de tombamento mecânico."
    ],
    "nursingApplication": "Determina a inclinação máxima segura a que uma cadeira de rodas ou equipamento hospitalar pode ser sujeito sem capotar."
  },
  {
    "id": 1461,
    "topicId": 1,
    "question": "O que é o Centro de Gravidade (CG) de um corpo humano ou objeto material?",
    "options": [
      "O ponto onde a temperatura corporal atinge o seu valor mais elevado durante o dia.",
      "O ponto imaginário de aplicação da resultante de todas as forças gravíticas paralelas que atuam sobre a massa do corpo.",
      "A extremidade mais distal do membro inferior em contacto com o solo.",
      "A área poligonal de contacto formada pelos pés sobre a superfície de apoio."
    ],
    "correctIndex": 1,
    "explanation": "O CG é o centro de massa ponderado pela gravidade onde se considera concentrado todo o peso do corpo para fins estáticos.",
    "distractorAnalysis": [
      "Está incorreta: O CG é um ponto mecânico de equilíbrio de massa, sem relação direta com o pico de temperatura metabólica.",
      "Está incorreta: A extremidade dos pés define a base de sustentação, não o centro de gravidade do corpo.",
      "Está incorreta: A área de contacto com o piso define a Base de Sustentação (BS), e não o Centro de Gravidade (CG)."
    ],
    "nursingApplication": "Determinar o CG é crucial para avaliar o risco de perda de equilíbrio e quedas em utentes."
  },
  {
    "id": 1462,
    "topicId": 1,
    "question": "Onde se localiza aproximadamente o Centro de Gravidade do corpo humano de um adulto em posição ortostática neutra?",
    "options": [
      "No centro da cabeça, exatamente ao nível da cavidade craniana frontal.",
      "Na articulação de ambos os joelhos junto aos meniscos articulares.",
      "No interior da bacia pélvica, na linha média, imediatamente anterior à 2.ª vértebra sagrada (S2).",
      "Na ponta dos dedos dos pés quando apoiados no solo horizontal."
    ],
    "correctIndex": 2,
    "explanation": "Em postura anatómica ereta de repouso, o CG humano situa-se anatomicamente na pelve, à frente de S2 (~55% a 57% da altura total).",
    "distractorAnalysis": [
      "Está incorreta: O CG na cabeça tornaria o corpo extremamente instável e com tendência imediata a tombar.",
      "Está incorreta: O CG situa-se acima dos joelhos, na região pélvica sagrada.",
      "Está incorreta: A ponta dos pés faz parte da base de sustentação no solo, situando-se muito abaixo do CG corporal."
    ],
    "nursingApplication": "Ponto de referência fundamental para todas as técnicas de mobilização e ergonomia postural."
  },
  {
    "id": 1463,
    "topicId": 1,
    "question": "Como se define a 'Base de Sustentação' (BS) de um corpo em equilíbrio sobre uma superfície?",
    "options": [
      "A distância vertical medida entre o solo e o centro de gravidade do indivíduo.",
      "A massa total do corpo dividida pelo volume do calçado utilizado.",
      "O coeficiente de atrito cinético medido entre a pele e o colchão do leito.",
      "A área poligonal delimitada pelos bordos externos de todos os pontos de apoio em contacto com o solo."
    ],
    "correctIndex": 3,
    "explanation": "A BS é a área geométrica convexa formada pela união dos contornos externos dos apoios (ex.: os dois pés e o espaço entre eles).",
    "distractorAnalysis": [
      "Está incorreta: A distância vertical ao solo é a altura do centro de gravidade (h_CG), não a base de sustentação.",
      "Está incorreta: Massa dividida por volume é densidade (massa volúmica), e não base de apoio.",
      "Está incorreta: Coeficiente de atrito mede a adesão superficial, não a área geométrica da base de sustentação."
    ],
    "nursingApplication": "Aumentar a base de sustentação (afastar os pés) amplia a margem de estabilidade postural."
  },
  {
    "id": 1464,
    "topicId": 1,
    "question": "Qual é a condição geométrica essencial para que um corpo humano em repouso permaneça em equilíbrio estável sem cair?",
    "options": [
      "A Linha de Gravidade (vertical que passa no CG) tem de projetar-se rigorosamente no interior da Base de Sustentação.",
      "A linha de gravidade tem de passar fora da base de sustentação na direção dos calcanhares.",
      "O centro de gravidade tem de ser elevado até à altura máxima possível dos ombros.",
      "A área da base de sustentação tem de ser reduzida a um único ponto milimétrico."
    ],
    "correctIndex": 0,
    "explanation": "Se a vertical do CG sair para fora da área da base de sustentação, o peso gera um momento de rotação que tomba o corpo.",
    "distractorAnalysis": [
      "Está incorreta: Se a linha de gravidade passar fora da base, o corpo perde o equilíbrio e cai a menos que haja reação motora.",
      "Está incorreta: Elevar o centro de gravidade diminui a estabilidade, tornando o equilíbrio muito mais precário.",
      "Está incorreta: Reduzir a base a um ponto diminui drasticamente a estabilidade (ex.: equilibrar-se num só pé)."
    ],
    "nursingApplication": "Fundamento da prevenção de quedas: garantir que a linha de gravidade nunca ultrapassa a base de apoio."
  },
  {
    "id": 1465,
    "topicId": 1,
    "question": "Quais são os dois fatores biomecânicos fundamentais que aumentam a estabilidade estática de um corpo?",
    "options": [
      "Reduzir a base de sustentação a um único apoio e elevar o centro de gravidade.",
      "Alargar a base de sustentação e rebaixar o centro de gravidade.",
      "Aumentar a velocidade de rotação e fechar completamente os olhos.",
      "Elevar o peso do indivíduo até ao teto através de um cabo tracionado."
    ],
    "correctIndex": 1,
    "explanation": "Quanto mais ampla a base de apoio e mais baixo o centro de gravidade, maior é o ângulo de inclinação necessário para tombar o corpo.",
    "distractorAnalysis": [
      "Está incorreta: Reduzir a base e elevar o CG são precisamente os dois fatores que provocam instabilidade e facilitam quedas.",
      "Está incorreta: Aumentar a velocidade angular diz respeito à dinâmica e fechar os olhos reduz o controlo vestibular/visual.",
      "Está incorreta: Suspender o corpo por cabos altera o sistema para suporte suspenso, não sendo apoio no solo."
    ],
    "nursingApplication": "Regra de ouro ergonómica: fletir ligeiramente os joelhos e afastar os pés ao mobilizar cargas."
  },
  {
    "id": 1466,
    "topicId": 1,
    "question": "Porque é que o uso de um andarilho ou canadianas melhora significativamente o equilíbrio de um utente com marcha instável?",
    "options": [
      "Porque reduz o peso corporal do utente para metade através de um campo magnético.",
      "Porque anula completamente o atrito entre o calçado e o piso do corredor.",
      "Porque aumenta a área poligonal da base de sustentação, tornando muito mais difícil que a linha de gravidade saia para fora dela.",
      "Porque desloca o centro de gravidade do corpo para a cavidade craniana superior."
    ],
    "correctIndex": 2,
    "explanation": "Ao acrescentar apoios periféricos no solo, a base de sustentação alarga-se em várias vezes a área dos pés isolados.",
    "distractorAnalysis": [
      "Está incorreta: Dispositivos mecânicos de apoio transmitem forças ao solo, mas não anulam o peso da massa corporal.",
      "Está incorreta: O atrito nos pés e ponteiras de borracha é mantido ou aumentado para evitar deslizamentos perigosos.",
      "Está incorreta: O CG não se desloca para a cabeça; o andarilho permite manter o alinhamento corporal seguro."
    ],
    "nursingApplication": "Justifica a prescrição de dispositivos de apoio da marcha na reabilitação e geriatria."
  },
  {
    "id": 1467,
    "topicId": 1,
    "question": "Quando uma pessoa se inclina para a frente para apanhar um objeto do chão mantendo os joelhos completamente esticados, o que acontece ao centro de gravidade do tronco?",
    "options": [
      "O CG do tronco desaparece temporariamente da estrutura corporal.",
      "O momento de rotação sobre a coluna lombar torna-se estritamente nulo.",
      "A gravidade terrestre deixa de atuar sobre a massa do tronco durante a inclinação.",
      "O CG do tronco projeta-se muito para a frente, gerando um enorme braço de momento sobre as vértebras lombares (L5-S1)."
    ],
    "correctIndex": 3,
    "explanation": "Ao projetar o tronco para a frente, a distância horizontal (braço de alavanca) entre a carga e L5-S1 aumenta, multiplicando a tensão muscular lombar.",
    "distractorAnalysis": [
      "Está incorreta: O centro de gravidade é uma propriedade geométrica da distribuição de massa e nunca desaparece.",
      "Está incorreta: O momento sobre a lombar aumenta drasticamente (M = P · b), e nunca se anula nesta postura inadequada.",
      "Está incorreta: A gravidade atua de forma constante e permanente sobre todo o corpo."
    ],
    "nursingApplication": "Explica as lesões musculoesqueléticas lombares resultantes de posturas incorretas de flexão do tronco."
  },
  {
    "id": 1468,
    "topicId": 1,
    "question": "Para levantar com segurança uma carga pesada pousada no chão, qual é a postura ergonomicamente correta com base na Biofísica?",
    "options": [
      "Fletir os joelhos mantendo as costas direitas e a carga o mais junto possível ao corpo, reduzindo o braço de alavanca.",
      "Manter os joelhos perfeitamente rígidos e curvar a coluna lombar a noventa graus com a carga longe.",
      "Elevar a carga com os membros superiores esticados para a frente à distância de um metro.",
      "Girar rapidamente o tronco em torção axial enquanto se faz a força máxima de elevação."
    ],
    "correctIndex": 0,
    "explanation": "Manter a carga junto ao corpo reduz o braço de momento 'b' da resistência sobre a coluna lombar, minimizando a força muscular requerida.",
    "distractorAnalysis": [
      "Está incorreta: Curvar a lombar com joelhos rígidos maximiza o braço de momento e a pressão sobre os discos intervertebrais.",
      "Está incorreta: Segurar a carga longe do corpo aumenta o braço de alavanca, multiplicando o momento resistente e o risco de lesão.",
      "Está incorreta: Movimentos combinados de flexão e torção sob carga geram forças cortantes destrutivas no anel fibroso discal."
    ],
    "nursingApplication": "Princípio biomecânico basilar da movimentação manual de cargas para proteção da saúde do profissional."
  },
  {
    "id": 1469,
    "topicId": 1,
    "question": "Considerando a distribuição anatómica de massa, de que forma a posição do Centro de Gravidade (CG) difere tipicamente entre homens, mulheres e crianças na postura ereta?",
    "options": [
      "É rigorosamente idêntico ao milímetro em todos os seres humanos independentemente da idade e do sexo.",
      "É ligeiramente mais baixo nas mulheres (maior largura pélvica), mais alto nos homens (maior massa na cintura escapular) e marcadamente mais elevado nas crianças pequenas devido à desproporção da cabeça.",
      "Nas crianças situa-se junto aos calcanhares e nos adultos situa-se na garganta.",
      "Nas mulheres situa-se acima dos ombros e nos homens situa-se abaixo dos joelhos."
    ],
    "correctIndex": 1,
    "explanation": "Diferenças na morfologia esquelética e na distribuição de massa alteram a altura do CG: ~55% da altura nas mulheres adultas, ~57% nos homens e mais alto nas crianças (cabeça proporcionalmente maior).",
    "distractorAnalysis": [
      "Está incorreta: A posição do CG varia com a proporção biométrica e distribuição das massas corporais.",
      "Está incorreta: Nas crianças a cabeça é desproporcionalmente pesada, elevando o CG e tornando-as mais instáveis.",
      "Está incorreta: O CG em ambos os sexos situa-se na região pélvico-abdominal, diferindo ligeiramente em altura relativa."
    ],
    "nursingApplication": "Explica por que as crianças pequenas têm maior tendência a desequilíbrios e quedas cefálicas."
  },
  {
    "id": 1470,
    "topicId": 1,
    "question": "Como se define o 'Ângulo Crítico de Tombamento' na avaliação da estabilidade estática de um corpo apoiado sobre uma superfície plana horizontal?",
    "options": [
      "O ângulo de noventa graus em que todos os corpos perdem a sua massa inercial.",
      "O ângulo formado entre o raio de luz solar e o meridiano do local de apoio.",
      "O ângulo limite de inclinação a partir do qual a Linha de Gravidade ultrapassa o bordo da base de sustentação, momento a partir do qual a gravidade gera um binário que derruba o corpo.",
      "A temperatura limite em que o corpo sólido funde para o estado líquido sob atrito."
    ],
    "correctIndex": 2,
    "explanation": "Enquanto a linha de gravidade cai dentro da base, o peso gera momento restaurador; ao ultrapassar o bordo (ângulo crítico), o momento torna-se desestabilizador e o corpo tomba.",
    "distractorAnalysis": [
      "Está incorreta: A inclinação mecânica não anula a massa inercial do corpo material.",
      "Está incorreta: Ângulo de incidência solar pertence à óptica e astronomia, sem relação com estabilidade estática.",
      "Está incorreta: Fusão de materiais é uma transição termodinâmica de fase, não o ângulo de tombamento mecânico."
    ],
    "nursingApplication": "Determina a inclinação máxima segura a que uma cadeira de rodas ou equipamento hospitalar pode ser sujeito sem capotar."
  },
  {
    "id": 1471,
    "topicId": 1,
    "question": "O que é o Centro de Gravidade (CG) de um corpo humano ou objeto material?",
    "options": [
      "O ponto onde a temperatura corporal atinge o seu valor mais elevado durante o dia.",
      "A extremidade mais distal do membro inferior em contacto com o solo.",
      "A área poligonal de contacto formada pelos pés sobre a superfície de apoio.",
      "O ponto imaginário de aplicação da resultante de todas as forças gravíticas paralelas que atuam sobre a massa do corpo."
    ],
    "correctIndex": 3,
    "explanation": "O CG é o centro de massa ponderado pela gravidade onde se considera concentrado todo o peso do corpo para fins estáticos.",
    "distractorAnalysis": [
      "Está incorreta: O CG é um ponto mecânico de equilíbrio de massa, sem relação direta com o pico de temperatura metabólica.",
      "Está incorreta: A extremidade dos pés define a base de sustentação, não o centro de gravidade do corpo.",
      "Está incorreta: A área de contacto com o piso define a Base de Sustentação (BS), e não o Centro de Gravidade (CG)."
    ],
    "nursingApplication": "Determinar o CG é crucial para avaliar o risco de perda de equilíbrio e quedas em utentes."
  },
  {
    "id": 1472,
    "topicId": 1,
    "question": "Onde se localiza aproximadamente o Centro de Gravidade do corpo humano de um adulto em posição ortostática neutra?",
    "options": [
      "No interior da bacia pélvica, na linha média, imediatamente anterior à 2.ª vértebra sagrada (S2).",
      "No centro da cabeça, exatamente ao nível da cavidade craniana frontal.",
      "Na articulação de ambos os joelhos junto aos meniscos articulares.",
      "Na ponta dos dedos dos pés quando apoiados no solo horizontal."
    ],
    "correctIndex": 0,
    "explanation": "Em postura anatómica ereta de repouso, o CG humano situa-se anatomicamente na pelve, à frente de S2 (~55% a 57% da altura total).",
    "distractorAnalysis": [
      "Está incorreta: O CG na cabeça tornaria o corpo extremamente instável e com tendência imediata a tombar.",
      "Está incorreta: O CG situa-se acima dos joelhos, na região pélvica sagrada.",
      "Está incorreta: A ponta dos pés faz parte da base de sustentação no solo, situando-se muito abaixo do CG corporal."
    ],
    "nursingApplication": "Ponto de referência fundamental para todas as técnicas de mobilização e ergonomia postural."
  },
  {
    "id": 1473,
    "topicId": 1,
    "question": "Como se define a 'Base de Sustentação' (BS) de um corpo em equilíbrio sobre uma superfície?",
    "options": [
      "A distância vertical medida entre o solo e o centro de gravidade do indivíduo.",
      "A área poligonal delimitada pelos bordos externos de todos os pontos de apoio em contacto com o solo.",
      "A massa total do corpo dividida pelo volume do calçado utilizado.",
      "O coeficiente de atrito cinético medido entre a pele e o colchão do leito."
    ],
    "correctIndex": 1,
    "explanation": "A BS é a área geométrica convexa formada pela união dos contornos externos dos apoios (ex.: os dois pés e o espaço entre eles).",
    "distractorAnalysis": [
      "Está incorreta: A distância vertical ao solo é a altura do centro de gravidade (h_CG), não a base de sustentação.",
      "Está incorreta: Massa dividida por volume é densidade (massa volúmica), e não base de apoio.",
      "Está incorreta: Coeficiente de atrito mede a adesão superficial, não a área geométrica da base de sustentação."
    ],
    "nursingApplication": "Aumentar a base de sustentação (afastar os pés) amplia a margem de estabilidade postural."
  },
  {
    "id": 1474,
    "topicId": 1,
    "question": "Qual é a condição geométrica essencial para que um corpo humano em repouso permaneça em equilíbrio estável sem cair?",
    "options": [
      "A linha de gravidade tem de passar fora da base de sustentação na direção dos calcanhares.",
      "O centro de gravidade tem de ser elevado até à altura máxima possível dos ombros.",
      "A Linha de Gravidade (vertical que passa no CG) tem de projetar-se rigorosamente no interior da Base de Sustentação.",
      "A área da base de sustentação tem de ser reduzida a um único ponto milimétrico."
    ],
    "correctIndex": 2,
    "explanation": "Se a vertical do CG sair para fora da área da base de sustentação, o peso gera um momento de rotação que tomba o corpo.",
    "distractorAnalysis": [
      "Está incorreta: Se a linha de gravidade passar fora da base, o corpo perde o equilíbrio e cai a menos que haja reação motora.",
      "Está incorreta: Elevar o centro de gravidade diminui a estabilidade, tornando o equilíbrio muito mais precário.",
      "Está incorreta: Reduzir a base a um ponto diminui drasticamente a estabilidade (ex.: equilibrar-se num só pé)."
    ],
    "nursingApplication": "Fundamento da prevenção de quedas: garantir que a linha de gravidade nunca ultrapassa a base de apoio."
  },
  {
    "id": 1475,
    "topicId": 1,
    "question": "Quais são os dois fatores biomecânicos fundamentais que aumentam a estabilidade estática de um corpo?",
    "options": [
      "Reduzir a base de sustentação a um único apoio e elevar o centro de gravidade.",
      "Aumentar a velocidade de rotação e fechar completamente os olhos.",
      "Elevar o peso do indivíduo até ao teto através de um cabo tracionado.",
      "Alargar a base de sustentação e rebaixar o centro de gravidade."
    ],
    "correctIndex": 3,
    "explanation": "Quanto mais ampla a base de apoio e mais baixo o centro de gravidade, maior é o ângulo de inclinação necessário para tombar o corpo.",
    "distractorAnalysis": [
      "Está incorreta: Reduzir a base e elevar o CG são precisamente os dois fatores que provocam instabilidade e facilitam quedas.",
      "Está incorreta: Aumentar a velocidade angular diz respeito à dinâmica e fechar os olhos reduz o controlo vestibular/visual.",
      "Está incorreta: Suspender o corpo por cabos altera o sistema para suporte suspenso, não sendo apoio no solo."
    ],
    "nursingApplication": "Regra de ouro ergonómica: fletir ligeiramente os joelhos e afastar os pés ao mobilizar cargas."
  },
  {
    "id": 1476,
    "topicId": 1,
    "question": "Porque é que o uso de um andarilho ou canadianas melhora significativamente o equilíbrio de um utente com marcha instável?",
    "options": [
      "Porque aumenta a área poligonal da base de sustentação, tornando muito mais difícil que a linha de gravidade saia para fora dela.",
      "Porque reduz o peso corporal do utente para metade através de um campo magnético.",
      "Porque anula completamente o atrito entre o calçado e o piso do corredor.",
      "Porque desloca o centro de gravidade do corpo para a cavidade craniana superior."
    ],
    "correctIndex": 0,
    "explanation": "Ao acrescentar apoios periféricos no solo, a base de sustentação alarga-se em várias vezes a área dos pés isolados.",
    "distractorAnalysis": [
      "Está incorreta: Dispositivos mecânicos de apoio transmitem forças ao solo, mas não anulam o peso da massa corporal.",
      "Está incorreta: O atrito nos pés e ponteiras de borracha é mantido ou aumentado para evitar deslizamentos perigosos.",
      "Está incorreta: O CG não se desloca para a cabeça; o andarilho permite manter o alinhamento corporal seguro."
    ],
    "nursingApplication": "Justifica a prescrição de dispositivos de apoio da marcha na reabilitação e geriatria."
  },
  {
    "id": 1477,
    "topicId": 1,
    "question": "Quando uma pessoa se inclina para a frente para apanhar um objeto do chão mantendo os joelhos completamente esticados, o que acontece ao centro de gravidade do tronco?",
    "options": [
      "O CG do tronco desaparece temporariamente da estrutura corporal.",
      "O CG do tronco projeta-se muito para a frente, gerando um enorme braço de momento sobre as vértebras lombares (L5-S1).",
      "O momento de rotação sobre a coluna lombar torna-se estritamente nulo.",
      "A gravidade terrestre deixa de atuar sobre a massa do tronco durante a inclinação."
    ],
    "correctIndex": 1,
    "explanation": "Ao projetar o tronco para a frente, a distância horizontal (braço de alavanca) entre a carga e L5-S1 aumenta, multiplicando a tensão muscular lombar.",
    "distractorAnalysis": [
      "Está incorreta: O centro de gravidade é uma propriedade geométrica da distribuição de massa e nunca desaparece.",
      "Está incorreta: O momento sobre a lombar aumenta drasticamente (M = P · b), e nunca se anula nesta postura inadequada.",
      "Está incorreta: A gravidade atua de forma constante e permanente sobre todo o corpo."
    ],
    "nursingApplication": "Explica as lesões musculoesqueléticas lombares resultantes de posturas incorretas de flexão do tronco."
  },
  {
    "id": 1478,
    "topicId": 1,
    "question": "Para levantar com segurança uma carga pesada pousada no chão, qual é a postura ergonomicamente correta com base na Biofísica?",
    "options": [
      "Manter os joelhos perfeitamente rígidos e curvar a coluna lombar a noventa graus com a carga longe.",
      "Elevar a carga com os membros superiores esticados para a frente à distância de um metro.",
      "Fletir os joelhos mantendo as costas direitas e a carga o mais junto possível ao corpo, reduzindo o braço de alavanca.",
      "Girar rapidamente o tronco em torção axial enquanto se faz a força máxima de elevação."
    ],
    "correctIndex": 2,
    "explanation": "Manter a carga junto ao corpo reduz o braço de momento 'b' da resistência sobre a coluna lombar, minimizando a força muscular requerida.",
    "distractorAnalysis": [
      "Está incorreta: Curvar a lombar com joelhos rígidos maximiza o braço de momento e a pressão sobre os discos intervertebrais.",
      "Está incorreta: Segurar a carga longe do corpo aumenta o braço de alavanca, multiplicando o momento resistente e o risco de lesão.",
      "Está incorreta: Movimentos combinados de flexão e torção sob carga geram forças cortantes destrutivas no anel fibroso discal."
    ],
    "nursingApplication": "Princípio biomecânico basilar da movimentação manual de cargas para proteção da saúde do profissional."
  },
  {
    "id": 1479,
    "topicId": 1,
    "question": "Considerando a distribuição anatómica de massa, de que forma a posição do Centro de Gravidade (CG) difere tipicamente entre homens, mulheres e crianças na postura ereta?",
    "options": [
      "É rigorosamente idêntico ao milímetro em todos os seres humanos independentemente da idade e do sexo.",
      "Nas crianças situa-se junto aos calcanhares e nos adultos situa-se na garganta.",
      "Nas mulheres situa-se acima dos ombros e nos homens situa-se abaixo dos joelhos.",
      "É ligeiramente mais baixo nas mulheres (maior largura pélvica), mais alto nos homens (maior massa na cintura escapular) e marcadamente mais elevado nas crianças pequenas devido à desproporção da cabeça."
    ],
    "correctIndex": 3,
    "explanation": "Diferenças na morfologia esquelética e na distribuição de massa alteram a altura do CG: ~55% da altura nas mulheres adultas, ~57% nos homens e mais alto nas crianças (cabeça proporcionalmente maior).",
    "distractorAnalysis": [
      "Está incorreta: A posição do CG varia com a proporção biométrica e distribuição das massas corporais.",
      "Está incorreta: Nas crianças a cabeça é desproporcionalmente pesada, elevando o CG e tornando-as mais instáveis.",
      "Está incorreta: O CG em ambos os sexos situa-se na região pélvico-abdominal, diferindo ligeiramente em altura relativa."
    ],
    "nursingApplication": "Explica por que as crianças pequenas têm maior tendência a desequilíbrios e quedas cefálicas."
  },
  {
    "id": 1480,
    "topicId": 1,
    "question": "Como se define o 'Ângulo Crítico de Tombamento' na avaliação da estabilidade estática de um corpo apoiado sobre uma superfície plana horizontal?",
    "options": [
      "O ângulo limite de inclinação a partir do qual a Linha de Gravidade ultrapassa o bordo da base de sustentação, momento a partir do qual a gravidade gera um binário que derruba o corpo.",
      "O ângulo de noventa graus em que todos os corpos perdem a sua massa inercial.",
      "O ângulo formado entre o raio de luz solar e o meridiano do local de apoio.",
      "A temperatura limite em que o corpo sólido funde para o estado líquido sob atrito."
    ],
    "correctIndex": 0,
    "explanation": "Enquanto a linha de gravidade cai dentro da base, o peso gera momento restaurador; ao ultrapassar o bordo (ângulo crítico), o momento torna-se desestabilizador e o corpo tomba.",
    "distractorAnalysis": [
      "Está incorreta: A inclinação mecânica não anula a massa inercial do corpo material.",
      "Está incorreta: Ângulo de incidência solar pertence à óptica e astronomia, sem relação com estabilidade estática.",
      "Está incorreta: Fusão de materiais é uma transição termodinâmica de fase, não o ângulo de tombamento mecânico."
    ],
    "nursingApplication": "Determina a inclinação máxima segura a que uma cadeira de rodas ou equipamento hospitalar pode ser sujeito sem capotar."
  },
  {
    "id": 1481,
    "topicId": 1,
    "question": "O que é o Centro de Gravidade (CG) de um corpo humano ou objeto material?",
    "options": [
      "O ponto onde a temperatura corporal atinge o seu valor mais elevado durante o dia.",
      "O ponto imaginário de aplicação da resultante de todas as forças gravíticas paralelas que atuam sobre a massa do corpo.",
      "A extremidade mais distal do membro inferior em contacto com o solo.",
      "A área poligonal de contacto formada pelos pés sobre a superfície de apoio."
    ],
    "correctIndex": 1,
    "explanation": "O CG é o centro de massa ponderado pela gravidade onde se considera concentrado todo o peso do corpo para fins estáticos.",
    "distractorAnalysis": [
      "Está incorreta: O CG é um ponto mecânico de equilíbrio de massa, sem relação direta com o pico de temperatura metabólica.",
      "Está incorreta: A extremidade dos pés define a base de sustentação, não o centro de gravidade do corpo.",
      "Está incorreta: A área de contacto com o piso define a Base de Sustentação (BS), e não o Centro de Gravidade (CG)."
    ],
    "nursingApplication": "Determinar o CG é crucial para avaliar o risco de perda de equilíbrio e quedas em utentes."
  },
  {
    "id": 1482,
    "topicId": 1,
    "question": "Onde se localiza aproximadamente o Centro de Gravidade do corpo humano de um adulto em posição ortostática neutra?",
    "options": [
      "No centro da cabeça, exatamente ao nível da cavidade craniana frontal.",
      "Na articulação de ambos os joelhos junto aos meniscos articulares.",
      "No interior da bacia pélvica, na linha média, imediatamente anterior à 2.ª vértebra sagrada (S2).",
      "Na ponta dos dedos dos pés quando apoiados no solo horizontal."
    ],
    "correctIndex": 2,
    "explanation": "Em postura anatómica ereta de repouso, o CG humano situa-se anatomicamente na pelve, à frente de S2 (~55% a 57% da altura total).",
    "distractorAnalysis": [
      "Está incorreta: O CG na cabeça tornaria o corpo extremamente instável e com tendência imediata a tombar.",
      "Está incorreta: O CG situa-se acima dos joelhos, na região pélvica sagrada.",
      "Está incorreta: A ponta dos pés faz parte da base de sustentação no solo, situando-se muito abaixo do CG corporal."
    ],
    "nursingApplication": "Ponto de referência fundamental para todas as técnicas de mobilização e ergonomia postural."
  },
  {
    "id": 1483,
    "topicId": 1,
    "question": "Como se define a 'Base de Sustentação' (BS) de um corpo em equilíbrio sobre uma superfície?",
    "options": [
      "A distância vertical medida entre o solo e o centro de gravidade do indivíduo.",
      "A massa total do corpo dividida pelo volume do calçado utilizado.",
      "O coeficiente de atrito cinético medido entre a pele e o colchão do leito.",
      "A área poligonal delimitada pelos bordos externos de todos os pontos de apoio em contacto com o solo."
    ],
    "correctIndex": 3,
    "explanation": "A BS é a área geométrica convexa formada pela união dos contornos externos dos apoios (ex.: os dois pés e o espaço entre eles).",
    "distractorAnalysis": [
      "Está incorreta: A distância vertical ao solo é a altura do centro de gravidade (h_CG), não a base de sustentação.",
      "Está incorreta: Massa dividida por volume é densidade (massa volúmica), e não base de apoio.",
      "Está incorreta: Coeficiente de atrito mede a adesão superficial, não a área geométrica da base de sustentação."
    ],
    "nursingApplication": "Aumentar a base de sustentação (afastar os pés) amplia a margem de estabilidade postural."
  },
  {
    "id": 1484,
    "topicId": 1,
    "question": "Qual é a condição geométrica essencial para que um corpo humano em repouso permaneça em equilíbrio estável sem cair?",
    "options": [
      "A Linha de Gravidade (vertical que passa no CG) tem de projetar-se rigorosamente no interior da Base de Sustentação.",
      "A linha de gravidade tem de passar fora da base de sustentação na direção dos calcanhares.",
      "O centro de gravidade tem de ser elevado até à altura máxima possível dos ombros.",
      "A área da base de sustentação tem de ser reduzida a um único ponto milimétrico."
    ],
    "correctIndex": 0,
    "explanation": "Se a vertical do CG sair para fora da área da base de sustentação, o peso gera um momento de rotação que tomba o corpo.",
    "distractorAnalysis": [
      "Está incorreta: Se a linha de gravidade passar fora da base, o corpo perde o equilíbrio e cai a menos que haja reação motora.",
      "Está incorreta: Elevar o centro de gravidade diminui a estabilidade, tornando o equilíbrio muito mais precário.",
      "Está incorreta: Reduzir a base a um ponto diminui drasticamente a estabilidade (ex.: equilibrar-se num só pé)."
    ],
    "nursingApplication": "Fundamento da prevenção de quedas: garantir que a linha de gravidade nunca ultrapassa a base de apoio."
  },
  {
    "id": 1485,
    "topicId": 1,
    "question": "Quais são os dois fatores biomecânicos fundamentais que aumentam a estabilidade estática de um corpo?",
    "options": [
      "Reduzir a base de sustentação a um único apoio e elevar o centro de gravidade.",
      "Alargar a base de sustentação e rebaixar o centro de gravidade.",
      "Aumentar a velocidade de rotação e fechar completamente os olhos.",
      "Elevar o peso do indivíduo até ao teto através de um cabo tracionado."
    ],
    "correctIndex": 1,
    "explanation": "Quanto mais ampla a base de apoio e mais baixo o centro de gravidade, maior é o ângulo de inclinação necessário para tombar o corpo.",
    "distractorAnalysis": [
      "Está incorreta: Reduzir a base e elevar o CG são precisamente os dois fatores que provocam instabilidade e facilitam quedas.",
      "Está incorreta: Aumentar a velocidade angular diz respeito à dinâmica e fechar os olhos reduz o controlo vestibular/visual.",
      "Está incorreta: Suspender o corpo por cabos altera o sistema para suporte suspenso, não sendo apoio no solo."
    ],
    "nursingApplication": "Regra de ouro ergonómica: fletir ligeiramente os joelhos e afastar os pés ao mobilizar cargas."
  },
  {
    "id": 1486,
    "topicId": 1,
    "question": "Porque é que o uso de um andarilho ou canadianas melhora significativamente o equilíbrio de um utente com marcha instável?",
    "options": [
      "Porque reduz o peso corporal do utente para metade através de um campo magnético.",
      "Porque anula completamente o atrito entre o calçado e o piso do corredor.",
      "Porque aumenta a área poligonal da base de sustentação, tornando muito mais difícil que a linha de gravidade saia para fora dela.",
      "Porque desloca o centro de gravidade do corpo para a cavidade craniana superior."
    ],
    "correctIndex": 2,
    "explanation": "Ao acrescentar apoios periféricos no solo, a base de sustentação alarga-se em várias vezes a área dos pés isolados.",
    "distractorAnalysis": [
      "Está incorreta: Dispositivos mecânicos de apoio transmitem forças ao solo, mas não anulam o peso da massa corporal.",
      "Está incorreta: O atrito nos pés e ponteiras de borracha é mantido ou aumentado para evitar deslizamentos perigosos.",
      "Está incorreta: O CG não se desloca para a cabeça; o andarilho permite manter o alinhamento corporal seguro."
    ],
    "nursingApplication": "Justifica a prescrição de dispositivos de apoio da marcha na reabilitação e geriatria."
  },
  {
    "id": 1487,
    "topicId": 1,
    "question": "Quando uma pessoa se inclina para a frente para apanhar um objeto do chão mantendo os joelhos completamente esticados, o que acontece ao centro de gravidade do tronco?",
    "options": [
      "O CG do tronco desaparece temporariamente da estrutura corporal.",
      "O momento de rotação sobre a coluna lombar torna-se estritamente nulo.",
      "A gravidade terrestre deixa de atuar sobre a massa do tronco durante a inclinação.",
      "O CG do tronco projeta-se muito para a frente, gerando um enorme braço de momento sobre as vértebras lombares (L5-S1)."
    ],
    "correctIndex": 3,
    "explanation": "Ao projetar o tronco para a frente, a distância horizontal (braço de alavanca) entre a carga e L5-S1 aumenta, multiplicando a tensão muscular lombar.",
    "distractorAnalysis": [
      "Está incorreta: O centro de gravidade é uma propriedade geométrica da distribuição de massa e nunca desaparece.",
      "Está incorreta: O momento sobre a lombar aumenta drasticamente (M = P · b), e nunca se anula nesta postura inadequada.",
      "Está incorreta: A gravidade atua de forma constante e permanente sobre todo o corpo."
    ],
    "nursingApplication": "Explica as lesões musculoesqueléticas lombares resultantes de posturas incorretas de flexão do tronco."
  },
  {
    "id": 1488,
    "topicId": 1,
    "question": "Para levantar com segurança uma carga pesada pousada no chão, qual é a postura ergonomicamente correta com base na Biofísica?",
    "options": [
      "Fletir os joelhos mantendo as costas direitas e a carga o mais junto possível ao corpo, reduzindo o braço de alavanca.",
      "Manter os joelhos perfeitamente rígidos e curvar a coluna lombar a noventa graus com a carga longe.",
      "Elevar a carga com os membros superiores esticados para a frente à distância de um metro.",
      "Girar rapidamente o tronco em torção axial enquanto se faz a força máxima de elevação."
    ],
    "correctIndex": 0,
    "explanation": "Manter a carga junto ao corpo reduz o braço de momento 'b' da resistência sobre a coluna lombar, minimizando a força muscular requerida.",
    "distractorAnalysis": [
      "Está incorreta: Curvar a lombar com joelhos rígidos maximiza o braço de momento e a pressão sobre os discos intervertebrais.",
      "Está incorreta: Segurar a carga longe do corpo aumenta o braço de alavanca, multiplicando o momento resistente e o risco de lesão.",
      "Está incorreta: Movimentos combinados de flexão e torção sob carga geram forças cortantes destrutivas no anel fibroso discal."
    ],
    "nursingApplication": "Princípio biomecânico basilar da movimentação manual de cargas para proteção da saúde do profissional."
  },
  {
    "id": 1489,
    "topicId": 1,
    "question": "Considerando a distribuição anatómica de massa, de que forma a posição do Centro de Gravidade (CG) difere tipicamente entre homens, mulheres e crianças na postura ereta?",
    "options": [
      "É rigorosamente idêntico ao milímetro em todos os seres humanos independentemente da idade e do sexo.",
      "É ligeiramente mais baixo nas mulheres (maior largura pélvica), mais alto nos homens (maior massa na cintura escapular) e marcadamente mais elevado nas crianças pequenas devido à desproporção da cabeça.",
      "Nas crianças situa-se junto aos calcanhares e nos adultos situa-se na garganta.",
      "Nas mulheres situa-se acima dos ombros e nos homens situa-se abaixo dos joelhos."
    ],
    "correctIndex": 1,
    "explanation": "Diferenças na morfologia esquelética e na distribuição de massa alteram a altura do CG: ~55% da altura nas mulheres adultas, ~57% nos homens e mais alto nas crianças (cabeça proporcionalmente maior).",
    "distractorAnalysis": [
      "Está incorreta: A posição do CG varia com a proporção biométrica e distribuição das massas corporais.",
      "Está incorreta: Nas crianças a cabeça é desproporcionalmente pesada, elevando o CG e tornando-as mais instáveis.",
      "Está incorreta: O CG em ambos os sexos situa-se na região pélvico-abdominal, diferindo ligeiramente em altura relativa."
    ],
    "nursingApplication": "Explica por que as crianças pequenas têm maior tendência a desequilíbrios e quedas cefálicas."
  },
  {
    "id": 1490,
    "topicId": 1,
    "question": "Como se define o 'Ângulo Crítico de Tombamento' na avaliação da estabilidade estática de um corpo apoiado sobre uma superfície plana horizontal?",
    "options": [
      "O ângulo de noventa graus em que todos os corpos perdem a sua massa inercial.",
      "O ângulo formado entre o raio de luz solar e o meridiano do local de apoio.",
      "O ângulo limite de inclinação a partir do qual a Linha de Gravidade ultrapassa o bordo da base de sustentação, momento a partir do qual a gravidade gera um binário que derruba o corpo.",
      "A temperatura limite em que o corpo sólido funde para o estado líquido sob atrito."
    ],
    "correctIndex": 2,
    "explanation": "Enquanto a linha de gravidade cai dentro da base, o peso gera momento restaurador; ao ultrapassar o bordo (ângulo crítico), o momento torna-se desestabilizador e o corpo tomba.",
    "distractorAnalysis": [
      "Está incorreta: A inclinação mecânica não anula a massa inercial do corpo material.",
      "Está incorreta: Ângulo de incidência solar pertence à óptica e astronomia, sem relação com estabilidade estática.",
      "Está incorreta: Fusão de materiais é uma transição termodinâmica de fase, não o ângulo de tombamento mecânico."
    ],
    "nursingApplication": "Determina a inclinação máxima segura a que uma cadeira de rodas ou equipamento hospitalar pode ser sujeito sem capotar."
  },
  {
    "id": 1491,
    "topicId": 1,
    "question": "O que é o Centro de Gravidade (CG) de um corpo humano ou objeto material?",
    "options": [
      "O ponto onde a temperatura corporal atinge o seu valor mais elevado durante o dia.",
      "A extremidade mais distal do membro inferior em contacto com o solo.",
      "A área poligonal de contacto formada pelos pés sobre a superfície de apoio.",
      "O ponto imaginário de aplicação da resultante de todas as forças gravíticas paralelas que atuam sobre a massa do corpo."
    ],
    "correctIndex": 3,
    "explanation": "O CG é o centro de massa ponderado pela gravidade onde se considera concentrado todo o peso do corpo para fins estáticos.",
    "distractorAnalysis": [
      "Está incorreta: O CG é um ponto mecânico de equilíbrio de massa, sem relação direta com o pico de temperatura metabólica.",
      "Está incorreta: A extremidade dos pés define a base de sustentação, não o centro de gravidade do corpo.",
      "Está incorreta: A área de contacto com o piso define a Base de Sustentação (BS), e não o Centro de Gravidade (CG)."
    ],
    "nursingApplication": "Determinar o CG é crucial para avaliar o risco de perda de equilíbrio e quedas em utentes."
  },
  {
    "id": 1492,
    "topicId": 1,
    "question": "Onde se localiza aproximadamente o Centro de Gravidade do corpo humano de um adulto em posição ortostática neutra?",
    "options": [
      "No interior da bacia pélvica, na linha média, imediatamente anterior à 2.ª vértebra sagrada (S2).",
      "No centro da cabeça, exatamente ao nível da cavidade craniana frontal.",
      "Na articulação de ambos os joelhos junto aos meniscos articulares.",
      "Na ponta dos dedos dos pés quando apoiados no solo horizontal."
    ],
    "correctIndex": 0,
    "explanation": "Em postura anatómica ereta de repouso, o CG humano situa-se anatomicamente na pelve, à frente de S2 (~55% a 57% da altura total).",
    "distractorAnalysis": [
      "Está incorreta: O CG na cabeça tornaria o corpo extremamente instável e com tendência imediata a tombar.",
      "Está incorreta: O CG situa-se acima dos joelhos, na região pélvica sagrada.",
      "Está incorreta: A ponta dos pés faz parte da base de sustentação no solo, situando-se muito abaixo do CG corporal."
    ],
    "nursingApplication": "Ponto de referência fundamental para todas as técnicas de mobilização e ergonomia postural."
  },
  {
    "id": 1493,
    "topicId": 1,
    "question": "Como se define a 'Base de Sustentação' (BS) de um corpo em equilíbrio sobre uma superfície?",
    "options": [
      "A distância vertical medida entre o solo e o centro de gravidade do indivíduo.",
      "A área poligonal delimitada pelos bordos externos de todos os pontos de apoio em contacto com o solo.",
      "A massa total do corpo dividida pelo volume do calçado utilizado.",
      "O coeficiente de atrito cinético medido entre a pele e o colchão do leito."
    ],
    "correctIndex": 1,
    "explanation": "A BS é a área geométrica convexa formada pela união dos contornos externos dos apoios (ex.: os dois pés e o espaço entre eles).",
    "distractorAnalysis": [
      "Está incorreta: A distância vertical ao solo é a altura do centro de gravidade (h_CG), não a base de sustentação.",
      "Está incorreta: Massa dividida por volume é densidade (massa volúmica), e não base de apoio.",
      "Está incorreta: Coeficiente de atrito mede a adesão superficial, não a área geométrica da base de sustentação."
    ],
    "nursingApplication": "Aumentar a base de sustentação (afastar os pés) amplia a margem de estabilidade postural."
  },
  {
    "id": 1494,
    "topicId": 1,
    "question": "Qual é a condição geométrica essencial para que um corpo humano em repouso permaneça em equilíbrio estável sem cair?",
    "options": [
      "A linha de gravidade tem de passar fora da base de sustentação na direção dos calcanhares.",
      "O centro de gravidade tem de ser elevado até à altura máxima possível dos ombros.",
      "A Linha de Gravidade (vertical que passa no CG) tem de projetar-se rigorosamente no interior da Base de Sustentação.",
      "A área da base de sustentação tem de ser reduzida a um único ponto milimétrico."
    ],
    "correctIndex": 2,
    "explanation": "Se a vertical do CG sair para fora da área da base de sustentação, o peso gera um momento de rotação que tomba o corpo.",
    "distractorAnalysis": [
      "Está incorreta: Se a linha de gravidade passar fora da base, o corpo perde o equilíbrio e cai a menos que haja reação motora.",
      "Está incorreta: Elevar o centro de gravidade diminui a estabilidade, tornando o equilíbrio muito mais precário.",
      "Está incorreta: Reduzir a base a um ponto diminui drasticamente a estabilidade (ex.: equilibrar-se num só pé)."
    ],
    "nursingApplication": "Fundamento da prevenção de quedas: garantir que a linha de gravidade nunca ultrapassa a base de apoio."
  },
  {
    "id": 1495,
    "topicId": 1,
    "question": "Quais são os dois fatores biomecânicos fundamentais que aumentam a estabilidade estática de um corpo?",
    "options": [
      "Reduzir a base de sustentação a um único apoio e elevar o centro de gravidade.",
      "Aumentar a velocidade de rotação e fechar completamente os olhos.",
      "Elevar o peso do indivíduo até ao teto através de um cabo tracionado.",
      "Alargar a base de sustentação e rebaixar o centro de gravidade."
    ],
    "correctIndex": 3,
    "explanation": "Quanto mais ampla a base de apoio e mais baixo o centro de gravidade, maior é o ângulo de inclinação necessário para tombar o corpo.",
    "distractorAnalysis": [
      "Está incorreta: Reduzir a base e elevar o CG são precisamente os dois fatores que provocam instabilidade e facilitam quedas.",
      "Está incorreta: Aumentar a velocidade angular diz respeito à dinâmica e fechar os olhos reduz o controlo vestibular/visual.",
      "Está incorreta: Suspender o corpo por cabos altera o sistema para suporte suspenso, não sendo apoio no solo."
    ],
    "nursingApplication": "Regra de ouro ergonómica: fletir ligeiramente os joelhos e afastar os pés ao mobilizar cargas."
  },
  {
    "id": 1496,
    "topicId": 1,
    "question": "Porque é que o uso de um andarilho ou canadianas melhora significativamente o equilíbrio de um utente com marcha instável?",
    "options": [
      "Porque aumenta a área poligonal da base de sustentação, tornando muito mais difícil que a linha de gravidade saia para fora dela.",
      "Porque reduz o peso corporal do utente para metade através de um campo magnético.",
      "Porque anula completamente o atrito entre o calçado e o piso do corredor.",
      "Porque desloca o centro de gravidade do corpo para a cavidade craniana superior."
    ],
    "correctIndex": 0,
    "explanation": "Ao acrescentar apoios periféricos no solo, a base de sustentação alarga-se em várias vezes a área dos pés isolados.",
    "distractorAnalysis": [
      "Está incorreta: Dispositivos mecânicos de apoio transmitem forças ao solo, mas não anulam o peso da massa corporal.",
      "Está incorreta: O atrito nos pés e ponteiras de borracha é mantido ou aumentado para evitar deslizamentos perigosos.",
      "Está incorreta: O CG não se desloca para a cabeça; o andarilho permite manter o alinhamento corporal seguro."
    ],
    "nursingApplication": "Justifica a prescrição de dispositivos de apoio da marcha na reabilitação e geriatria."
  },
  {
    "id": 1497,
    "topicId": 1,
    "question": "Quando uma pessoa se inclina para a frente para apanhar um objeto do chão mantendo os joelhos completamente esticados, o que acontece ao centro de gravidade do tronco?",
    "options": [
      "O CG do tronco desaparece temporariamente da estrutura corporal.",
      "O CG do tronco projeta-se muito para a frente, gerando um enorme braço de momento sobre as vértebras lombares (L5-S1).",
      "O momento de rotação sobre a coluna lombar torna-se estritamente nulo.",
      "A gravidade terrestre deixa de atuar sobre a massa do tronco durante a inclinação."
    ],
    "correctIndex": 1,
    "explanation": "Ao projetar o tronco para a frente, a distância horizontal (braço de alavanca) entre a carga e L5-S1 aumenta, multiplicando a tensão muscular lombar.",
    "distractorAnalysis": [
      "Está incorreta: O centro de gravidade é uma propriedade geométrica da distribuição de massa e nunca desaparece.",
      "Está incorreta: O momento sobre a lombar aumenta drasticamente (M = P · b), e nunca se anula nesta postura inadequada.",
      "Está incorreta: A gravidade atua de forma constante e permanente sobre todo o corpo."
    ],
    "nursingApplication": "Explica as lesões musculoesqueléticas lombares resultantes de posturas incorretas de flexão do tronco."
  },
  {
    "id": 1498,
    "topicId": 1,
    "question": "Para levantar com segurança uma carga pesada pousada no chão, qual é a postura ergonomicamente correta com base na Biofísica?",
    "options": [
      "Manter os joelhos perfeitamente rígidos e curvar a coluna lombar a noventa graus com a carga longe.",
      "Elevar a carga com os membros superiores esticados para a frente à distância de um metro.",
      "Fletir os joelhos mantendo as costas direitas e a carga o mais junto possível ao corpo, reduzindo o braço de alavanca.",
      "Girar rapidamente o tronco em torção axial enquanto se faz a força máxima de elevação."
    ],
    "correctIndex": 2,
    "explanation": "Manter a carga junto ao corpo reduz o braço de momento 'b' da resistência sobre a coluna lombar, minimizando a força muscular requerida.",
    "distractorAnalysis": [
      "Está incorreta: Curvar a lombar com joelhos rígidos maximiza o braço de momento e a pressão sobre os discos intervertebrais.",
      "Está incorreta: Segurar a carga longe do corpo aumenta o braço de alavanca, multiplicando o momento resistente e o risco de lesão.",
      "Está incorreta: Movimentos combinados de flexão e torção sob carga geram forças cortantes destrutivas no anel fibroso discal."
    ],
    "nursingApplication": "Princípio biomecânico basilar da movimentação manual de cargas para proteção da saúde do profissional."
  },
  {
    "id": 1499,
    "topicId": 1,
    "question": "Considerando a distribuição anatómica de massa, de que forma a posição do Centro de Gravidade (CG) difere tipicamente entre homens, mulheres e crianças na postura ereta?",
    "options": [
      "É rigorosamente idêntico ao milímetro em todos os seres humanos independentemente da idade e do sexo.",
      "Nas crianças situa-se junto aos calcanhares e nos adultos situa-se na garganta.",
      "Nas mulheres situa-se acima dos ombros e nos homens situa-se abaixo dos joelhos.",
      "É ligeiramente mais baixo nas mulheres (maior largura pélvica), mais alto nos homens (maior massa na cintura escapular) e marcadamente mais elevado nas crianças pequenas devido à desproporção da cabeça."
    ],
    "correctIndex": 3,
    "explanation": "Diferenças na morfologia esquelética e na distribuição de massa alteram a altura do CG: ~55% da altura nas mulheres adultas, ~57% nos homens e mais alto nas crianças (cabeça proporcionalmente maior).",
    "distractorAnalysis": [
      "Está incorreta: A posição do CG varia com a proporção biométrica e distribuição das massas corporais.",
      "Está incorreta: Nas crianças a cabeça é desproporcionalmente pesada, elevando o CG e tornando-as mais instáveis.",
      "Está incorreta: O CG em ambos os sexos situa-se na região pélvico-abdominal, diferindo ligeiramente em altura relativa."
    ],
    "nursingApplication": "Explica por que as crianças pequenas têm maior tendência a desequilíbrios e quedas cefálicas."
  },
  {
    "id": 1500,
    "topicId": 1,
    "question": "Como se define o 'Ângulo Crítico de Tombamento' na avaliação da estabilidade estática de um corpo apoiado sobre uma superfície plana horizontal?",
    "options": [
      "O ângulo limite de inclinação a partir do qual a Linha de Gravidade ultrapassa o bordo da base de sustentação, momento a partir do qual a gravidade gera um binário que derruba o corpo.",
      "O ângulo de noventa graus em que todos os corpos perdem a sua massa inercial.",
      "O ângulo formado entre o raio de luz solar e o meridiano do local de apoio.",
      "A temperatura limite em que o corpo sólido funde para o estado líquido sob atrito."
    ],
    "correctIndex": 0,
    "explanation": "Enquanto a linha de gravidade cai dentro da base, o peso gera momento restaurador; ao ultrapassar o bordo (ângulo crítico), o momento torna-se desestabilizador e o corpo tomba.",
    "distractorAnalysis": [
      "Está incorreta: A inclinação mecânica não anula a massa inercial do corpo material.",
      "Está incorreta: Ângulo de incidência solar pertence à óptica e astronomia, sem relação com estabilidade estática.",
      "Está incorreta: Fusão de materiais é uma transição termodinâmica de fase, não o ângulo de tombamento mecânico."
    ],
    "nursingApplication": "Determina a inclinação máxima segura a que uma cadeira de rodas ou equipamento hospitalar pode ser sujeito sem capotar."
  }
];
