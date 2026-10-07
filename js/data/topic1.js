/**
 * BANCO DE QUESTÕES CERTIFICADAS - TÓPICO 1
 * Força, Estado de Equilíbrio, Equilíbrio de Forças e Alavancas
 * Alinhado estritamente com os 105 slides do PowerPoint (1BF)
 * Foco estrito em Física/Biofísica sem jargão clínico prévio de Enfermagem
 * Total de Questões: 500 (IDs 1001 a 1500)
 */

const TOPIC_1_QUESTIONS = [
  {
    "id": 1001,
    "topicId": 1,
    "question": "Qual é a definição de Mecânica no contexto da Biofísica?",
    "options": [
      "O estudo da composição atómica dos radioisótopos emissores de radiação gama.",
      "O ramo da física que estuda as relações entre os movimentos dos corpos e as forças que lhes estão associadas.",
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
      "Uma grandeza puramente escalar expressa em quilogramas que mede a matéria.",
      "A energia potencial estática acumulada no vácuo entre dois átomos.",
      "Uma interação entre corpos capaz de alterar o seu estado de movimento ou de produzir deformação.",
      "A taxa de variação da temperatura de um sólido quando aquecido."
    ],
    "correctIndex": 2,
    "explanation": "A força é uma ação vetorial mútua entre corpos que altera a sua velocidade ou a sua forma.",
    "distractorAnalysis": [
      "Está incorreta: A força é uma grandeza vetorial com módulo, direção e sentido, e não uma grandeza escalar.",
      "Está incorreta: A energia potencial é uma forma de energia medida em Joules, não uma força (Newtons).",
      "Está incorreta: A taxa de variação de temperatura é uma grandeza térmica (°C/s), sem relação com força."
    ],
    "nursingApplication": "Compreender a força é a base para quantificar o esforço muscular ao empurrar um carrinho."
  },
  {
    "id": 1003,
    "topicId": 1,
    "question": "Qual é a unidade padrão de Força no Sistema Internacional (SI)?",
    "options": [
      "Quilograma (kg), que mede a inércia do corpo.",
      "Joule (J), correspondente ao trabalho de uma força.",
      "Pascal (Pa), que quantifica a pressão mecânica.",
      "Newton (N), equivalente a 1 kg·m/s²."
    ],
    "correctIndex": 3,
    "explanation": "No SI, a força mede-se em Newtons (N), sendo 1 N a força que imprime a 1 kg a aceleração de 1 m/s².",
    "distractorAnalysis": [
      "Está incorreta: O quilograma (kg) é a unidade de massa, não de força.",
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
      "Está incorreta: O barómetro mede a pressão atmosférica, não forças mecânicas isoladas.",
      "Está incorreta: O termómetro é o instrumento de medição da temperatura.",
      "Está incorreta: O cronómetro mede intervalos de tempo decorridos."
    ],
    "nursingApplication": "Dinamómetros são usados em ergonomia hospitalar para medir a força necessária para empurrar camas."
  },
  {
    "id": 1005,
    "topicId": 1,
    "question": "Quais são os quatro elementos que definem completamente uma grandeza vetorial como a Força?",
    "options": [
      "Apenas o seu valor numérico e a unidade física associada.",
      "Módulo (intensidade), direção, sentido e ponto de aplicação.",
      "Massa, densidade, volume e estado físico da matéria.",
      "Velocidade angular, frequência e período de oscilação."
    ],
    "correctIndex": 1,
    "explanation": "Uma grandeza vetorial exige intensidade, reta suporte (direção), orientação (sentido) e local de atuação.",
    "distractorAnalysis": [
      "Está incorreta: Valor numérico e unidade caracterizam grandezas escalares (como massa ou tempo), não vetores.",
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
      "Está incorreta: 25 N confunde a massa numérica com o peso sem multiplicar pela gravidade.",
      "Está incorreta: Dividir a massa pela gravidade é uma operação matematicamente incorreta para obter o peso.",
      "Está incorreta: O valor numérico está correto, mas o peso é força em Newtons (N), não em quilogramas (kg)."
    ],
    "nursingApplication": "Permite calcular o esforço vertical suportado pela estrutura ou pelas rodas de um equipamento."
  },
  {
    "id": 1007,
    "topicId": 1,
    "question": "Uma força perpendicular de 70 N atua sobre uma superfície de 0.30000000000000004 m². Qual é a pressão exercida?",
    "options": [
      "21 Pa (Pascal).",
      "70 Pa (Pascal).",
      "233 N.",
      "233 Pa (Pascal)."
    ],
    "correctIndex": 3,
    "explanation": "A pressão é a razão entre força e área (p = F / A): 70 N / 0.30000000000000004 m² = 233 Pa.",
    "distractorAnalysis": [
      "Está incorreta: Multiplicar a força pela área (F · A) não fornece a pressão mecânica.",
      "Está incorreta: 70 Pa ignora a área de distribuição da força sobre a superfície.",
      "Está incorreta: A pressão mede-se em Pascal (Pa) ou N/m², e não em Newtons (N)."
    ],
    "nursingApplication": "Demonstra que alargar a área de apoio de um suporte reduz a pressão exercida sobre o piso."
  },
  {
    "id": 1008,
    "topicId": 1,
    "question": "Qual das seguintes grandezas é estritamente ESCALAR?",
    "options": [
      "Massa corporal.",
      "Força peso.",
      "Força de atrito.",
      "Momento de uma força."
    ],
    "correctIndex": 0,
    "explanation": "A massa é puramente escalar: fica completamente definida pelo valor numérico e pela unidade (kg).",
    "distractorAnalysis": [
      "Está incorreta: A força peso é um vetor direcionado verticalmente para o centro da Terra.",
      "Está incorreta: A força de atrito é um vetor com direção tangencial e sentido oposto ao movimento.",
      "Está incorreta: O momento de uma força é uma grandeza vetorial que quantifica o efeito de rotação."
    ],
    "nursingApplication": "Ao registar o peso de um objeto numa balança, mede-se na verdade a massa escalar em kg."
  },
  {
    "id": 1009,
    "topicId": 1,
    "question": "Qual é a definição de Mecânica no contexto da Biofísica?",
    "options": [
      "O estudo da composição atómica dos radioisótopos emissores de radiação gama.",
      "O ramo da física que estuda as relações entre os movimentos dos corpos e as forças que lhes estão associadas.",
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
    "id": 1010,
    "topicId": 1,
    "question": "O que é uma Força na física clássica?",
    "options": [
      "Uma grandeza puramente escalar expressa em quilogramas que mede a matéria.",
      "A energia potencial estática acumulada no vácuo entre dois átomos.",
      "Uma interação entre corpos capaz de alterar o seu estado de movimento ou de produzir deformação.",
      "A taxa de variação da temperatura de um sólido quando aquecido."
    ],
    "correctIndex": 2,
    "explanation": "A força é uma ação vetorial mútua entre corpos que altera a sua velocidade ou a sua forma.",
    "distractorAnalysis": [
      "Está incorreta: A força é uma grandeza vetorial com módulo, direção e sentido, e não uma grandeza escalar.",
      "Está incorreta: A energia potencial é uma forma de energia medida em Joules, não uma força (Newtons).",
      "Está incorreta: A taxa de variação de temperatura é uma grandeza térmica (°C/s), sem relação com força."
    ],
    "nursingApplication": "Compreender a força é a base para quantificar o esforço muscular ao empurrar um carrinho."
  },
  {
    "id": 1011,
    "topicId": 1,
    "question": "Qual é a unidade padrão de Força no Sistema Internacional (SI)?",
    "options": [
      "Quilograma (kg), que mede a inércia do corpo.",
      "Joule (J), correspondente ao trabalho de uma força.",
      "Pascal (Pa), que quantifica a pressão mecânica.",
      "Newton (N), equivalente a 1 kg·m/s²."
    ],
    "correctIndex": 3,
    "explanation": "No SI, a força mede-se em Newtons (N), sendo 1 N a força que imprime a 1 kg a aceleração de 1 m/s².",
    "distractorAnalysis": [
      "Está incorreta: O quilograma (kg) é a unidade de massa, não de força.",
      "Está incorreta: O Joule (J) é a unidade de energia e trabalho mecânico (N·m), não de força pura.",
      "Está incorreta: O Pascal (Pa) é a unidade de pressão (N/m²), representando força distribuída por área."
    ],
    "nursingApplication": "Distingue a força aplicada em Newtons da massa transportada em quilogramas."
  },
  {
    "id": 1012,
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
      "Está incorreta: O barómetro mede a pressão atmosférica, não forças mecânicas isoladas.",
      "Está incorreta: O termómetro é o instrumento de medição da temperatura.",
      "Está incorreta: O cronómetro mede intervalos de tempo decorridos."
    ],
    "nursingApplication": "Dinamómetros são usados em ergonomia hospitalar para medir a força necessária para empurrar camas."
  },
  {
    "id": 1013,
    "topicId": 1,
    "question": "Quais são os quatro elementos que definem completamente uma grandeza vetorial como a Força?",
    "options": [
      "Apenas o seu valor numérico e a unidade física associada.",
      "Módulo (intensidade), direção, sentido e ponto de aplicação.",
      "Massa, densidade, volume e estado físico da matéria.",
      "Velocidade angular, frequência e período de oscilação."
    ],
    "correctIndex": 1,
    "explanation": "Uma grandeza vetorial exige intensidade, reta suporte (direção), orientação (sentido) e local de atuação.",
    "distractorAnalysis": [
      "Está incorreta: Valor numérico e unidade caracterizam grandezas escalares (como massa ou tempo), não vetores.",
      "Está incorreta: Massa, volume e densidade são propriedades da matéria, não componentes de um vetor.",
      "Está incorreta: Velocidade angular e frequência são grandezas cinemáticas de rotação."
    ],
    "nursingApplication": "A direção e o sentido ao puxar um equipamento determinam a trajetória do movimento resultante."
  },
  {
    "id": 1014,
    "topicId": 1,
    "question": "Considerando g = 9,8 m/s², qual é o Peso de um equipamento que possui uma massa de 41 kg?",
    "options": [
      "41 N.",
      "4.2 N.",
      "401.8 N.",
      "401.8 kg."
    ],
    "correctIndex": 2,
    "explanation": "O peso calcula-se pela relação P = m · g: 41 kg · 9,8 m/s² = 401.8 N.",
    "distractorAnalysis": [
      "Está incorreta: 41 N confunde a massa numérica com o peso sem multiplicar pela gravidade.",
      "Está incorreta: Dividir a massa pela gravidade é uma operação matematicamente incorreta para obter o peso.",
      "Está incorreta: O valor numérico está correto, mas o peso é força em Newtons (N), não em quilogramas (kg)."
    ],
    "nursingApplication": "Permite calcular o esforço vertical suportado pela estrutura ou pelas rodas de um equipamento."
  },
  {
    "id": 1015,
    "topicId": 1,
    "question": "Uma força perpendicular de 110 N atua sobre uma superfície de 0.6000000000000001 m². Qual é a pressão exercida?",
    "options": [
      "66 Pa (Pascal).",
      "110 Pa (Pascal).",
      "183 N.",
      "183 Pa (Pascal)."
    ],
    "correctIndex": 3,
    "explanation": "A pressão é a razão entre força e área (p = F / A): 110 N / 0.6000000000000001 m² = 183 Pa.",
    "distractorAnalysis": [
      "Está incorreta: Multiplicar a força pela área (F · A) não fornece a pressão mecânica.",
      "Está incorreta: 110 Pa ignora a área de distribuição da força sobre a superfície.",
      "Está incorreta: A pressão mede-se em Pascal (Pa) ou N/m², e não em Newtons (N)."
    ],
    "nursingApplication": "Demonstra que alargar a área de apoio de um suporte reduz a pressão exercida sobre o piso."
  },
  {
    "id": 1016,
    "topicId": 1,
    "question": "Qual das seguintes grandezas é estritamente ESCALAR?",
    "options": [
      "Massa corporal.",
      "Força peso.",
      "Força de atrito.",
      "Momento de uma força."
    ],
    "correctIndex": 0,
    "explanation": "A massa é puramente escalar: fica completamente definida pelo valor numérico e pela unidade (kg).",
    "distractorAnalysis": [
      "Está incorreta: A força peso é um vetor direcionado verticalmente para o centro da Terra.",
      "Está incorreta: A força de atrito é um vetor com direção tangencial e sentido oposto ao movimento.",
      "Está incorreta: O momento de uma força é uma grandeza vetorial que quantifica o efeito de rotação."
    ],
    "nursingApplication": "Ao registar o peso de um objeto numa balança, mede-se na verdade a massa escalar em kg."
  },
  {
    "id": 1017,
    "topicId": 1,
    "question": "Qual é a definição de Mecânica no contexto da Biofísica?",
    "options": [
      "O estudo da composição atómica dos radioisótopos emissores de radiação gama.",
      "O ramo da física que estuda as relações entre os movimentos dos corpos e as forças que lhes estão associadas.",
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
    "id": 1018,
    "topicId": 1,
    "question": "O que é uma Força na física clássica?",
    "options": [
      "Uma grandeza puramente escalar expressa em quilogramas que mede a matéria.",
      "A energia potencial estática acumulada no vácuo entre dois átomos.",
      "Uma interação entre corpos capaz de alterar o seu estado de movimento ou de produzir deformação.",
      "A taxa de variação da temperatura de um sólido quando aquecido."
    ],
    "correctIndex": 2,
    "explanation": "A força é uma ação vetorial mútua entre corpos que altera a sua velocidade ou a sua forma.",
    "distractorAnalysis": [
      "Está incorreta: A força é uma grandeza vetorial com módulo, direção e sentido, e não uma grandeza escalar.",
      "Está incorreta: A energia potencial é uma forma de energia medida em Joules, não uma força (Newtons).",
      "Está incorreta: A taxa de variação de temperatura é uma grandeza térmica (°C/s), sem relação com força."
    ],
    "nursingApplication": "Compreender a força é a base para quantificar o esforço muscular ao empurrar um carrinho."
  },
  {
    "id": 1019,
    "topicId": 1,
    "question": "Qual é a unidade padrão de Força no Sistema Internacional (SI)?",
    "options": [
      "Quilograma (kg), que mede a inércia do corpo.",
      "Joule (J), correspondente ao trabalho de uma força.",
      "Pascal (Pa), que quantifica a pressão mecânica.",
      "Newton (N), equivalente a 1 kg·m/s²."
    ],
    "correctIndex": 3,
    "explanation": "No SI, a força mede-se em Newtons (N), sendo 1 N a força que imprime a 1 kg a aceleração de 1 m/s².",
    "distractorAnalysis": [
      "Está incorreta: O quilograma (kg) é a unidade de massa, não de força.",
      "Está incorreta: O Joule (J) é a unidade de energia e trabalho mecânico (N·m), não de força pura.",
      "Está incorreta: O Pascal (Pa) é a unidade de pressão (N/m²), representando força distribuída por área."
    ],
    "nursingApplication": "Distingue a força aplicada em Newtons da massa transportada em quilogramas."
  },
  {
    "id": 1020,
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
      "Está incorreta: O barómetro mede a pressão atmosférica, não forças mecânicas isoladas.",
      "Está incorreta: O termómetro é o instrumento de medição da temperatura.",
      "Está incorreta: O cronómetro mede intervalos de tempo decorridos."
    ],
    "nursingApplication": "Dinamómetros são usados em ergonomia hospitalar para medir a força necessária para empurrar camas."
  },
  {
    "id": 1021,
    "topicId": 1,
    "question": "Quais são os quatro elementos que definem completamente uma grandeza vetorial como a Força?",
    "options": [
      "Apenas o seu valor numérico e a unidade física associada.",
      "Módulo (intensidade), direção, sentido e ponto de aplicação.",
      "Massa, densidade, volume e estado físico da matéria.",
      "Velocidade angular, frequência e período de oscilação."
    ],
    "correctIndex": 1,
    "explanation": "Uma grandeza vetorial exige intensidade, reta suporte (direção), orientação (sentido) e local de atuação.",
    "distractorAnalysis": [
      "Está incorreta: Valor numérico e unidade caracterizam grandezas escalares (como massa ou tempo), não vetores.",
      "Está incorreta: Massa, volume e densidade são propriedades da matéria, não componentes de um vetor.",
      "Está incorreta: Velocidade angular e frequência são grandezas cinemáticas de rotação."
    ],
    "nursingApplication": "A direção e o sentido ao puxar um equipamento determinam a trajetória do movimento resultante."
  },
  {
    "id": 1022,
    "topicId": 1,
    "question": "Considerando g = 9,8 m/s², qual é o Peso de um equipamento que possui uma massa de 57 kg?",
    "options": [
      "57 N.",
      "5.8 N.",
      "558.6 N.",
      "558.6 kg."
    ],
    "correctIndex": 2,
    "explanation": "O peso calcula-se pela relação P = m · g: 57 kg · 9,8 m/s² = 558.6 N.",
    "distractorAnalysis": [
      "Está incorreta: 57 N confunde a massa numérica com o peso sem multiplicar pela gravidade.",
      "Está incorreta: Dividir a massa pela gravidade é uma operação matematicamente incorreta para obter o peso.",
      "Está incorreta: O valor numérico está correto, mas o peso é força em Newtons (N), não em quilogramas (kg)."
    ],
    "nursingApplication": "Permite calcular o esforço vertical suportado pela estrutura ou pelas rodas de um equipamento."
  },
  {
    "id": 1023,
    "topicId": 1,
    "question": "Uma força perpendicular de 50 N atua sobre uma superfície de 0.4 m². Qual é a pressão exercida?",
    "options": [
      "20 Pa (Pascal).",
      "50 Pa (Pascal).",
      "125 N.",
      "125 Pa (Pascal)."
    ],
    "correctIndex": 3,
    "explanation": "A pressão é a razão entre força e área (p = F / A): 50 N / 0.4 m² = 125 Pa.",
    "distractorAnalysis": [
      "Está incorreta: Multiplicar a força pela área (F · A) não fornece a pressão mecânica.",
      "Está incorreta: 50 Pa ignora a área de distribuição da força sobre a superfície.",
      "Está incorreta: A pressão mede-se em Pascal (Pa) ou N/m², e não em Newtons (N)."
    ],
    "nursingApplication": "Demonstra que alargar a área de apoio de um suporte reduz a pressão exercida sobre o piso."
  },
  {
    "id": 1024,
    "topicId": 1,
    "question": "Qual das seguintes grandezas é estritamente ESCALAR?",
    "options": [
      "Massa corporal.",
      "Força peso.",
      "Força de atrito.",
      "Momento de uma força."
    ],
    "correctIndex": 0,
    "explanation": "A massa é puramente escalar: fica completamente definida pelo valor numérico e pela unidade (kg).",
    "distractorAnalysis": [
      "Está incorreta: A força peso é um vetor direcionado verticalmente para o centro da Terra.",
      "Está incorreta: A força de atrito é um vetor com direção tangencial e sentido oposto ao movimento.",
      "Está incorreta: O momento de uma força é uma grandeza vetorial que quantifica o efeito de rotação."
    ],
    "nursingApplication": "Ao registar o peso de um objeto numa balança, mede-se na verdade a massa escalar em kg."
  },
  {
    "id": 1025,
    "topicId": 1,
    "question": "Qual é a definição de Mecânica no contexto da Biofísica?",
    "options": [
      "O estudo da composição atómica dos radioisótopos emissores de radiação gama.",
      "O ramo da física que estuda as relações entre os movimentos dos corpos e as forças que lhes estão associadas.",
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
    "id": 1026,
    "topicId": 1,
    "question": "O que é uma Força na física clássica?",
    "options": [
      "Uma grandeza puramente escalar expressa em quilogramas que mede a matéria.",
      "A energia potencial estática acumulada no vácuo entre dois átomos.",
      "Uma interação entre corpos capaz de alterar o seu estado de movimento ou de produzir deformação.",
      "A taxa de variação da temperatura de um sólido quando aquecido."
    ],
    "correctIndex": 2,
    "explanation": "A força é uma ação vetorial mútua entre corpos que altera a sua velocidade ou a sua forma.",
    "distractorAnalysis": [
      "Está incorreta: A força é uma grandeza vetorial com módulo, direção e sentido, e não uma grandeza escalar.",
      "Está incorreta: A energia potencial é uma forma de energia medida em Joules, não uma força (Newtons).",
      "Está incorreta: A taxa de variação de temperatura é uma grandeza térmica (°C/s), sem relação com força."
    ],
    "nursingApplication": "Compreender a força é a base para quantificar o esforço muscular ao empurrar um carrinho."
  },
  {
    "id": 1027,
    "topicId": 1,
    "question": "Qual é a unidade padrão de Força no Sistema Internacional (SI)?",
    "options": [
      "Quilograma (kg), que mede a inércia do corpo.",
      "Joule (J), correspondente ao trabalho de uma força.",
      "Pascal (Pa), que quantifica a pressão mecânica.",
      "Newton (N), equivalente a 1 kg·m/s²."
    ],
    "correctIndex": 3,
    "explanation": "No SI, a força mede-se em Newtons (N), sendo 1 N a força que imprime a 1 kg a aceleração de 1 m/s².",
    "distractorAnalysis": [
      "Está incorreta: O quilograma (kg) é a unidade de massa, não de força.",
      "Está incorreta: O Joule (J) é a unidade de energia e trabalho mecânico (N·m), não de força pura.",
      "Está incorreta: O Pascal (Pa) é a unidade de pressão (N/m²), representando força distribuída por área."
    ],
    "nursingApplication": "Distingue a força aplicada em Newtons da massa transportada em quilogramas."
  },
  {
    "id": 1028,
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
      "Está incorreta: O barómetro mede a pressão atmosférica, não forças mecânicas isoladas.",
      "Está incorreta: O termómetro é o instrumento de medição da temperatura.",
      "Está incorreta: O cronómetro mede intervalos de tempo decorridos."
    ],
    "nursingApplication": "Dinamómetros são usados em ergonomia hospitalar para medir a força necessária para empurrar camas."
  },
  {
    "id": 1029,
    "topicId": 1,
    "question": "Quais são os quatro elementos que definem completamente uma grandeza vetorial como a Força?",
    "options": [
      "Apenas o seu valor numérico e a unidade física associada.",
      "Módulo (intensidade), direção, sentido e ponto de aplicação.",
      "Massa, densidade, volume e estado físico da matéria.",
      "Velocidade angular, frequência e período de oscilação."
    ],
    "correctIndex": 1,
    "explanation": "Uma grandeza vetorial exige intensidade, reta suporte (direção), orientação (sentido) e local de atuação.",
    "distractorAnalysis": [
      "Está incorreta: Valor numérico e unidade caracterizam grandezas escalares (como massa ou tempo), não vetores.",
      "Está incorreta: Massa, volume e densidade são propriedades da matéria, não componentes de um vetor.",
      "Está incorreta: Velocidade angular e frequência são grandezas cinemáticas de rotação."
    ],
    "nursingApplication": "A direção e o sentido ao puxar um equipamento determinam a trajetória do movimento resultante."
  },
  {
    "id": 1030,
    "topicId": 1,
    "question": "Considerando g = 9,8 m/s², qual é o Peso de um equipamento que possui uma massa de 23 kg?",
    "options": [
      "23 N.",
      "2.3 N.",
      "225.4 N.",
      "225.4 kg."
    ],
    "correctIndex": 2,
    "explanation": "O peso calcula-se pela relação P = m · g: 23 kg · 9,8 m/s² = 225.4 N.",
    "distractorAnalysis": [
      "Está incorreta: 23 N confunde a massa numérica com o peso sem multiplicar pela gravidade.",
      "Está incorreta: Dividir a massa pela gravidade é uma operação matematicamente incorreta para obter o peso.",
      "Está incorreta: O valor numérico está correto, mas o peso é força em Newtons (N), não em quilogramas (kg)."
    ],
    "nursingApplication": "Permite calcular o esforço vertical suportado pela estrutura ou pelas rodas de um equipamento."
  },
  {
    "id": 1031,
    "topicId": 1,
    "question": "Uma força perpendicular de 90 N atua sobre uma superfície de 0.2 m². Qual é a pressão exercida?",
    "options": [
      "18 Pa (Pascal).",
      "90 Pa (Pascal).",
      "450 N.",
      "450 Pa (Pascal)."
    ],
    "correctIndex": 3,
    "explanation": "A pressão é a razão entre força e área (p = F / A): 90 N / 0.2 m² = 450 Pa.",
    "distractorAnalysis": [
      "Está incorreta: Multiplicar a força pela área (F · A) não fornece a pressão mecânica.",
      "Está incorreta: 90 Pa ignora a área de distribuição da força sobre a superfície.",
      "Está incorreta: A pressão mede-se em Pascal (Pa) ou N/m², e não em Newtons (N)."
    ],
    "nursingApplication": "Demonstra que alargar a área de apoio de um suporte reduz a pressão exercida sobre o piso."
  },
  {
    "id": 1032,
    "topicId": 1,
    "question": "Qual das seguintes grandezas é estritamente ESCALAR?",
    "options": [
      "Massa corporal.",
      "Força peso.",
      "Força de atrito.",
      "Momento de uma força."
    ],
    "correctIndex": 0,
    "explanation": "A massa é puramente escalar: fica completamente definida pelo valor numérico e pela unidade (kg).",
    "distractorAnalysis": [
      "Está incorreta: A força peso é um vetor direcionado verticalmente para o centro da Terra.",
      "Está incorreta: A força de atrito é um vetor com direção tangencial e sentido oposto ao movimento.",
      "Está incorreta: O momento de uma força é uma grandeza vetorial que quantifica o efeito de rotação."
    ],
    "nursingApplication": "Ao registar o peso de um objeto numa balança, mede-se na verdade a massa escalar em kg."
  },
  {
    "id": 1033,
    "topicId": 1,
    "question": "Qual é a definição de Mecânica no contexto da Biofísica?",
    "options": [
      "O estudo da composição atómica dos radioisótopos emissores de radiação gama.",
      "O ramo da física que estuda as relações entre os movimentos dos corpos e as forças que lhes estão associadas.",
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
    "id": 1034,
    "topicId": 1,
    "question": "O que é uma Força na física clássica?",
    "options": [
      "Uma grandeza puramente escalar expressa em quilogramas que mede a matéria.",
      "A energia potencial estática acumulada no vácuo entre dois átomos.",
      "Uma interação entre corpos capaz de alterar o seu estado de movimento ou de produzir deformação.",
      "A taxa de variação da temperatura de um sólido quando aquecido."
    ],
    "correctIndex": 2,
    "explanation": "A força é uma ação vetorial mútua entre corpos que altera a sua velocidade ou a sua forma.",
    "distractorAnalysis": [
      "Está incorreta: A força é uma grandeza vetorial com módulo, direção e sentido, e não uma grandeza escalar.",
      "Está incorreta: A energia potencial é uma forma de energia medida em Joules, não uma força (Newtons).",
      "Está incorreta: A taxa de variação de temperatura é uma grandeza térmica (°C/s), sem relação com força."
    ],
    "nursingApplication": "Compreender a força é a base para quantificar o esforço muscular ao empurrar um carrinho."
  },
  {
    "id": 1035,
    "topicId": 1,
    "question": "Qual é a unidade padrão de Força no Sistema Internacional (SI)?",
    "options": [
      "Quilograma (kg), que mede a inércia do corpo.",
      "Joule (J), correspondente ao trabalho de uma força.",
      "Pascal (Pa), que quantifica a pressão mecânica.",
      "Newton (N), equivalente a 1 kg·m/s²."
    ],
    "correctIndex": 3,
    "explanation": "No SI, a força mede-se em Newtons (N), sendo 1 N a força que imprime a 1 kg a aceleração de 1 m/s².",
    "distractorAnalysis": [
      "Está incorreta: O quilograma (kg) é a unidade de massa, não de força.",
      "Está incorreta: O Joule (J) é a unidade de energia e trabalho mecânico (N·m), não de força pura.",
      "Está incorreta: O Pascal (Pa) é a unidade de pressão (N/m²), representando força distribuída por área."
    ],
    "nursingApplication": "Distingue a força aplicada em Newtons da massa transportada em quilogramas."
  },
  {
    "id": 1036,
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
      "Está incorreta: O barómetro mede a pressão atmosférica, não forças mecânicas isoladas.",
      "Está incorreta: O termómetro é o instrumento de medição da temperatura.",
      "Está incorreta: O cronómetro mede intervalos de tempo decorridos."
    ],
    "nursingApplication": "Dinamómetros são usados em ergonomia hospitalar para medir a força necessária para empurrar camas."
  },
  {
    "id": 1037,
    "topicId": 1,
    "question": "Quais são os quatro elementos que definem completamente uma grandeza vetorial como a Força?",
    "options": [
      "Apenas o seu valor numérico e a unidade física associada.",
      "Módulo (intensidade), direção, sentido e ponto de aplicação.",
      "Massa, densidade, volume e estado físico da matéria.",
      "Velocidade angular, frequência e período de oscilação."
    ],
    "correctIndex": 1,
    "explanation": "Uma grandeza vetorial exige intensidade, reta suporte (direção), orientação (sentido) e local de atuação.",
    "distractorAnalysis": [
      "Está incorreta: Valor numérico e unidade caracterizam grandezas escalares (como massa ou tempo), não vetores.",
      "Está incorreta: Massa, volume e densidade são propriedades da matéria, não componentes de um vetor.",
      "Está incorreta: Velocidade angular e frequência são grandezas cinemáticas de rotação."
    ],
    "nursingApplication": "A direção e o sentido ao puxar um equipamento determinam a trajetória do movimento resultante."
  },
  {
    "id": 1038,
    "topicId": 1,
    "question": "Considerando g = 9,8 m/s², qual é o Peso de um equipamento que possui uma massa de 39 kg?",
    "options": [
      "39 N.",
      "4.0 N.",
      "382.2 N.",
      "382.2 kg."
    ],
    "correctIndex": 2,
    "explanation": "O peso calcula-se pela relação P = m · g: 39 kg · 9,8 m/s² = 382.2 N.",
    "distractorAnalysis": [
      "Está incorreta: 39 N confunde a massa numérica com o peso sem multiplicar pela gravidade.",
      "Está incorreta: Dividir a massa pela gravidade é uma operação matematicamente incorreta para obter o peso.",
      "Está incorreta: O valor numérico está correto, mas o peso é força em Newtons (N), não em quilogramas (kg)."
    ],
    "nursingApplication": "Permite calcular o esforço vertical suportado pela estrutura ou pelas rodas de um equipamento."
  },
  {
    "id": 1039,
    "topicId": 1,
    "question": "Uma força perpendicular de 130 N atua sobre uma superfície de 0.5 m². Qual é a pressão exercida?",
    "options": [
      "65 Pa (Pascal).",
      "130 Pa (Pascal).",
      "260 N.",
      "260 Pa (Pascal)."
    ],
    "correctIndex": 3,
    "explanation": "A pressão é a razão entre força e área (p = F / A): 130 N / 0.5 m² = 260 Pa.",
    "distractorAnalysis": [
      "Está incorreta: Multiplicar a força pela área (F · A) não fornece a pressão mecânica.",
      "Está incorreta: 130 Pa ignora a área de distribuição da força sobre a superfície.",
      "Está incorreta: A pressão mede-se em Pascal (Pa) ou N/m², e não em Newtons (N)."
    ],
    "nursingApplication": "Demonstra que alargar a área de apoio de um suporte reduz a pressão exercida sobre o piso."
  },
  {
    "id": 1040,
    "topicId": 1,
    "question": "Qual das seguintes grandezas é estritamente ESCALAR?",
    "options": [
      "Massa corporal.",
      "Força peso.",
      "Força de atrito.",
      "Momento de uma força."
    ],
    "correctIndex": 0,
    "explanation": "A massa é puramente escalar: fica completamente definida pelo valor numérico e pela unidade (kg).",
    "distractorAnalysis": [
      "Está incorreta: A força peso é um vetor direcionado verticalmente para o centro da Terra.",
      "Está incorreta: A força de atrito é um vetor com direção tangencial e sentido oposto ao movimento.",
      "Está incorreta: O momento de uma força é uma grandeza vetorial que quantifica o efeito de rotação."
    ],
    "nursingApplication": "Ao registar o peso de um objeto numa balança, mede-se na verdade a massa escalar em kg."
  },
  {
    "id": 1041,
    "topicId": 1,
    "question": "Qual é a definição de Mecânica no contexto da Biofísica?",
    "options": [
      "O estudo da composição atómica dos radioisótopos emissores de radiação gama.",
      "O ramo da física que estuda as relações entre os movimentos dos corpos e as forças que lhes estão associadas.",
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
      "Uma grandeza puramente escalar expressa em quilogramas que mede a matéria.",
      "A energia potencial estática acumulada no vácuo entre dois átomos.",
      "Uma interação entre corpos capaz de alterar o seu estado de movimento ou de produzir deformação.",
      "A taxa de variação da temperatura de um sólido quando aquecido."
    ],
    "correctIndex": 2,
    "explanation": "A força é uma ação vetorial mútua entre corpos que altera a sua velocidade ou a sua forma.",
    "distractorAnalysis": [
      "Está incorreta: A força é uma grandeza vetorial com módulo, direção e sentido, e não uma grandeza escalar.",
      "Está incorreta: A energia potencial é uma forma de energia medida em Joules, não uma força (Newtons).",
      "Está incorreta: A taxa de variação de temperatura é uma grandeza térmica (°C/s), sem relação com força."
    ],
    "nursingApplication": "Compreender a força é a base para quantificar o esforço muscular ao empurrar um carrinho."
  },
  {
    "id": 1043,
    "topicId": 1,
    "question": "Qual é a unidade padrão de Força no Sistema Internacional (SI)?",
    "options": [
      "Quilograma (kg), que mede a inércia do corpo.",
      "Joule (J), correspondente ao trabalho de uma força.",
      "Pascal (Pa), que quantifica a pressão mecânica.",
      "Newton (N), equivalente a 1 kg·m/s²."
    ],
    "correctIndex": 3,
    "explanation": "No SI, a força mede-se em Newtons (N), sendo 1 N a força que imprime a 1 kg a aceleração de 1 m/s².",
    "distractorAnalysis": [
      "Está incorreta: O quilograma (kg) é a unidade de massa, não de força.",
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
      "Está incorreta: O barómetro mede a pressão atmosférica, não forças mecânicas isoladas.",
      "Está incorreta: O termómetro é o instrumento de medição da temperatura.",
      "Está incorreta: O cronómetro mede intervalos de tempo decorridos."
    ],
    "nursingApplication": "Dinamómetros são usados em ergonomia hospitalar para medir a força necessária para empurrar camas."
  },
  {
    "id": 1045,
    "topicId": 1,
    "question": "Quais são os quatro elementos que definem completamente uma grandeza vetorial como a Força?",
    "options": [
      "Apenas o seu valor numérico e a unidade física associada.",
      "Módulo (intensidade), direção, sentido e ponto de aplicação.",
      "Massa, densidade, volume e estado físico da matéria.",
      "Velocidade angular, frequência e período de oscilação."
    ],
    "correctIndex": 1,
    "explanation": "Uma grandeza vetorial exige intensidade, reta suporte (direção), orientação (sentido) e local de atuação.",
    "distractorAnalysis": [
      "Está incorreta: Valor numérico e unidade caracterizam grandezas escalares (como massa ou tempo), não vetores.",
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
      "Está incorreta: 55 N confunde a massa numérica com o peso sem multiplicar pela gravidade.",
      "Está incorreta: Dividir a massa pela gravidade é uma operação matematicamente incorreta para obter o peso.",
      "Está incorreta: O valor numérico está correto, mas o peso é força em Newtons (N), não em quilogramas (kg)."
    ],
    "nursingApplication": "Permite calcular o esforço vertical suportado pela estrutura ou pelas rodas de um equipamento."
  },
  {
    "id": 1047,
    "topicId": 1,
    "question": "Uma força perpendicular de 70 N atua sobre uma superfície de 0.30000000000000004 m². Qual é a pressão exercida?",
    "options": [
      "21 Pa (Pascal).",
      "70 Pa (Pascal).",
      "233 N.",
      "233 Pa (Pascal)."
    ],
    "correctIndex": 3,
    "explanation": "A pressão é a razão entre força e área (p = F / A): 70 N / 0.30000000000000004 m² = 233 Pa.",
    "distractorAnalysis": [
      "Está incorreta: Multiplicar a força pela área (F · A) não fornece a pressão mecânica.",
      "Está incorreta: 70 Pa ignora a área de distribuição da força sobre a superfície.",
      "Está incorreta: A pressão mede-se em Pascal (Pa) ou N/m², e não em Newtons (N)."
    ],
    "nursingApplication": "Demonstra que alargar a área de apoio de um suporte reduz a pressão exercida sobre o piso."
  },
  {
    "id": 1048,
    "topicId": 1,
    "question": "Qual das seguintes grandezas é estritamente ESCALAR?",
    "options": [
      "Massa corporal.",
      "Força peso.",
      "Força de atrito.",
      "Momento de uma força."
    ],
    "correctIndex": 0,
    "explanation": "A massa é puramente escalar: fica completamente definida pelo valor numérico e pela unidade (kg).",
    "distractorAnalysis": [
      "Está incorreta: A força peso é um vetor direcionado verticalmente para o centro da Terra.",
      "Está incorreta: A força de atrito é um vetor com direção tangencial e sentido oposto ao movimento.",
      "Está incorreta: O momento de uma força é uma grandeza vetorial que quantifica o efeito de rotação."
    ],
    "nursingApplication": "Ao registar o peso de um objeto numa balança, mede-se na verdade a massa escalar em kg."
  },
  {
    "id": 1049,
    "topicId": 1,
    "question": "Qual é a definição de Mecânica no contexto da Biofísica?",
    "options": [
      "O estudo da composição atómica dos radioisótopos emissores de radiação gama.",
      "O ramo da física que estuda as relações entre os movimentos dos corpos e as forças que lhes estão associadas.",
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
    "id": 1050,
    "topicId": 1,
    "question": "O que é uma Força na física clássica?",
    "options": [
      "Uma grandeza puramente escalar expressa em quilogramas que mede a matéria.",
      "A energia potencial estática acumulada no vácuo entre dois átomos.",
      "Uma interação entre corpos capaz de alterar o seu estado de movimento ou de produzir deformação.",
      "A taxa de variação da temperatura de um sólido quando aquecido."
    ],
    "correctIndex": 2,
    "explanation": "A força é uma ação vetorial mútua entre corpos que altera a sua velocidade ou a sua forma.",
    "distractorAnalysis": [
      "Está incorreta: A força é uma grandeza vetorial com módulo, direção e sentido, e não uma grandeza escalar.",
      "Está incorreta: A energia potencial é uma forma de energia medida em Joules, não uma força (Newtons).",
      "Está incorreta: A taxa de variação de temperatura é uma grandeza térmica (°C/s), sem relação com força."
    ],
    "nursingApplication": "Compreender a força é a base para quantificar o esforço muscular ao empurrar um carrinho."
  },
  {
    "id": 1051,
    "topicId": 1,
    "question": "Qual é o enunciado fundamental da 1ª Lei de Newton (Lei da Inércia)?",
    "options": [
      "Para cada ação aplicada sobre um corpo, existe uma reação de intensidade dupla orientada no mesmo sentido.",
      "A aceleração de um corpo é inversamente proporcional à força resultante e diretamente proporcional à sua massa.",
      "Todos os corpos materiais aceleram espontaneamente a uma taxa constante quando deixados livres de qualquer força.",
      "Um corpo em repouso permanece em repouso e um corpo em movimento retilíneo uniforme permanece em movimento, a menos que uma força resultante atue sobre ele."
    ],
    "correctIndex": 3,
    "explanation": "A 1ª Lei de Newton postula que, sem força resultante externa (Fr = 0), a velocidade vetorial do corpo permanece constante.",
    "distractorAnalysis": [
      "Está incorreta: A 3ª Lei estabelece ação e reação com a mesma intensidade e sentidos opostos, não intensidade dupla no mesmo sentido.",
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
    "explanation": "A inércia é uma propriedade fundamental da matéria pela qual os corpos resistem a acelerações ou travagens.",
    "distractorAnalysis": [
      "Está incorreta: A inércia não cria energia mecânica; a energia é conservada de acordo com as leis da física.",
      "Está incorreta: A velocidade máxima em queda num fluido depende do equilíbrio com o atrito viscoso, não da inércia isolada.",
      "Está incorreta: A inércia não é uma força propulsora; é apenas a tendência passiva para manter o estado atual de movimento."
    ],
    "nursingApplication": "Compreender a inércia ajuda a antecipar que parar uma maca em movimento exige esforço de travagem."
  },
  {
    "id": 1053,
    "topicId": 1,
    "question": "De que grandeza física depende exclusivamente a inércia de um corpo na mecânica clássica?",
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
    "nursingApplication": "Demonstra a importância vital do uso de cintos de segurança em veículos de emergência e transporte."
  },
  {
    "id": 1055,
    "topicId": 1,
    "question": "Se a força resultante que atua sobre um carrinho for rigorosamente nula (Fr = 0), qual é a sua aceleração?",
    "options": [
      "9,8 m/s².",
      "Infinita.",
      "Depende da cor do carrinho.",
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
    "question": "Um equipamento desloca-se em linha reta com velocidade constante de 1,5 m/s. O que se pode concluir sobre as forças?",
    "options": [
      "A resultante de todas as forças que atuam sobre ele é rigorosamente nula (Fr = 0).",
      "A força propulsora para a frente é dez vezes superior às forças de atrito.",
      "Não existe nenhuma força a atuar sobre o corpo, nem sequer o peso ou o chão.",
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
      "Porque a caixa mais pesada atrai o ar ao seu redor criando uma zona de vácuo aderente ao piso."
    ],
    "correctIndex": 1,
    "explanation": "A inércia é proporcional à massa: acelerar uma massa maior a partir do repouso requer maior força resultante.",
    "distractorAnalysis": [
      "Está incorreta: Todos os corpos materiais com massa obedecem rigorosamente à 1ª Lei de Newton.",
      "Está incorreta: A gravidade atua sobre todos os corpos com massa, sem qualquer limiar mínimo de 50 kg.",
      "Está incorreta: A dificuldade resulta da inércia mecânica e do atrito estático, não de vácuo aerodinâmico."
    ],
    "nursingApplication": "Ensina a avaliar a carga de caixas antes de tentar movê-las manualmente."
  },
  {
    "id": 1058,
    "topicId": 1,
    "question": "Se um carrinho estiver parado num piso plano e ninguém lhe tocar, ele permanecerá parado. Esta observação exemplifica:",
    "options": [
      "A 3ª Lei de Newton sobre colisão elástica de projéteis.",
      "A conservação do momento angular em órbitas planetárias.",
      "A 1ª Lei de Newton (Lei da Inércia para um corpo em repouso).",
      "A Lei da Hidrostática sobre impulsão de fluidos compressíveis."
    ],
    "correctIndex": 2,
    "explanation": "Um corpo em repouso permanece em repouso enquanto a resultante das forças for nula (1ª Lei de Newton).",
    "distractorAnalysis": [
      "Está incorreta: A 3ª Lei trata de pares de ação e reação entre corpos em interação, não do repouso isolado.",
      "Está incorreta: O momento angular e órbitas referem-se a rotações no espaço gravitacional, não a carrinhos planos.",
      "Está incorreta: A hidrostática trata da pressão em fluidos em repouso, não da estática de corpos sólidos rígidos."
    ],
    "nursingApplication": "Conceito elementar para garantir o travamento de macas para que permaneçam estacionárias."
  },
  {
    "id": 1059,
    "topicId": 1,
    "question": "Qual é o enunciado fundamental da 1ª Lei de Newton (Lei da Inércia)?",
    "options": [
      "Para cada ação aplicada sobre um corpo, existe uma reação de intensidade dupla orientada no mesmo sentido.",
      "A aceleração de um corpo é inversamente proporcional à força resultante e diretamente proporcional à sua massa.",
      "Todos os corpos materiais aceleram espontaneamente a uma taxa constante quando deixados livres de qualquer força.",
      "Um corpo em repouso permanece em repouso e um corpo em movimento retilíneo uniforme permanece em movimento, a menos que uma força resultante atue sobre ele."
    ],
    "correctIndex": 3,
    "explanation": "A 1ª Lei de Newton postula que, sem força resultante externa (Fr = 0), a velocidade vetorial do corpo permanece constante.",
    "distractorAnalysis": [
      "Está incorreta: A 3ª Lei estabelece ação e reação com a mesma intensidade e sentidos opostos, não intensidade dupla no mesmo sentido.",
      "Está incorreta: A 2ª Lei estabelece que a aceleração é diretamente proporcional à força e inversamente proporcional à massa (a = F/m).",
      "Está incorreta: Sem força resultante externa, um corpo não acelera; mantém velocidade vetorial rigorosamente constante."
    ],
    "nursingApplication": "Explica por que uma maca parada num corredor plano permanece imóvel até ser empurrada."
  },
  {
    "id": 1060,
    "topicId": 1,
    "question": "O que traduz o conceito físico de Inércia de um corpo?",
    "options": [
      "A resistência natural que um corpo oferece a qualquer alteração do seu estado de repouso ou de movimento.",
      "A capacidade de um corpo gerar energia mecânica espontânea a partir do repouso absoluto.",
      "A velocidade máxima que um corpo pode atingir quando em queda livre num meio viscoso.",
      "A força invisível que empurra ativamente os corpos para a frente quando estão em movimento retilíneo."
    ],
    "correctIndex": 0,
    "explanation": "A inércia é uma propriedade fundamental da matéria pela qual os corpos resistem a acelerações ou travagens.",
    "distractorAnalysis": [
      "Está incorreta: A inércia não cria energia mecânica; a energia é conservada de acordo com as leis da física.",
      "Está incorreta: A velocidade máxima em queda num fluido depende do equilíbrio com o atrito viscoso, não da inércia isolada.",
      "Está incorreta: A inércia não é uma força propulsora; é apenas a tendência passiva para manter o estado atual de movimento."
    ],
    "nursingApplication": "Compreender a inércia ajuda a antecipar que parar uma maca em movimento exige esforço de travagem."
  },
  {
    "id": 1061,
    "topicId": 1,
    "question": "De que grandeza física depende exclusivamente a inércia de um corpo na mecânica clássica?",
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
    "id": 1062,
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
    "nursingApplication": "Demonstra a importância vital do uso de cintos de segurança em veículos de emergência e transporte."
  },
  {
    "id": 1063,
    "topicId": 1,
    "question": "Se a força resultante que atua sobre um carrinho for rigorosamente nula (Fr = 0), qual é a sua aceleração?",
    "options": [
      "9,8 m/s².",
      "Infinita.",
      "Depende da cor do carrinho.",
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
    "id": 1064,
    "topicId": 1,
    "question": "Um equipamento desloca-se em linha reta com velocidade constante de 1,5 m/s. O que se pode concluir sobre as forças?",
    "options": [
      "A resultante de todas as forças que atuam sobre ele é rigorosamente nula (Fr = 0).",
      "A força propulsora para a frente é dez vezes superior às forças de atrito.",
      "Não existe nenhuma força a atuar sobre o corpo, nem sequer o peso ou o chão.",
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
    "id": 1065,
    "topicId": 1,
    "question": "Porque é mais difícil iniciar o movimento de uma caixa pesada do que de uma caixa leve em repouso no chão?",
    "options": [
      "Porque a caixa leve não obedece à 1ª Lei de Newton e move-se sem necessidade de força.",
      "Porque a caixa mais pesada tem maior massa, o que significa que possui maior inércia e oferece maior resistência à aceleração.",
      "Porque a gravidade só atua sobre objetos com massa superior a cinquenta quilogramas.",
      "Porque a caixa mais pesada atrai o ar ao seu redor criando uma zona de vácuo aderente ao piso."
    ],
    "correctIndex": 1,
    "explanation": "A inércia é proporcional à massa: acelerar uma massa maior a partir do repouso requer maior força resultante.",
    "distractorAnalysis": [
      "Está incorreta: Todos os corpos materiais com massa obedecem rigorosamente à 1ª Lei de Newton.",
      "Está incorreta: A gravidade atua sobre todos os corpos com massa, sem qualquer limiar mínimo de 50 kg.",
      "Está incorreta: A dificuldade resulta da inércia mecânica e do atrito estático, não de vácuo aerodinâmico."
    ],
    "nursingApplication": "Ensina a avaliar a carga de caixas antes de tentar movê-las manualmente."
  },
  {
    "id": 1066,
    "topicId": 1,
    "question": "Se um carrinho estiver parado num piso plano e ninguém lhe tocar, ele permanecerá parado. Esta observação exemplifica:",
    "options": [
      "A 3ª Lei de Newton sobre colisão elástica de projéteis.",
      "A conservação do momento angular em órbitas planetárias.",
      "A 1ª Lei de Newton (Lei da Inércia para um corpo em repouso).",
      "A Lei da Hidrostática sobre impulsão de fluidos compressíveis."
    ],
    "correctIndex": 2,
    "explanation": "Um corpo em repouso permanece em repouso enquanto a resultante das forças for nula (1ª Lei de Newton).",
    "distractorAnalysis": [
      "Está incorreta: A 3ª Lei trata de pares de ação e reação entre corpos em interação, não do repouso isolado.",
      "Está incorreta: O momento angular e órbitas referem-se a rotações no espaço gravitacional, não a carrinhos planos.",
      "Está incorreta: A hidrostática trata da pressão em fluidos em repouso, não da estática de corpos sólidos rígidos."
    ],
    "nursingApplication": "Conceito elementar para garantir o travamento de macas para que permaneçam estacionárias."
  },
  {
    "id": 1067,
    "topicId": 1,
    "question": "Qual é o enunciado fundamental da 1ª Lei de Newton (Lei da Inércia)?",
    "options": [
      "Para cada ação aplicada sobre um corpo, existe uma reação de intensidade dupla orientada no mesmo sentido.",
      "A aceleração de um corpo é inversamente proporcional à força resultante e diretamente proporcional à sua massa.",
      "Todos os corpos materiais aceleram espontaneamente a uma taxa constante quando deixados livres de qualquer força.",
      "Um corpo em repouso permanece em repouso e um corpo em movimento retilíneo uniforme permanece em movimento, a menos que uma força resultante atue sobre ele."
    ],
    "correctIndex": 3,
    "explanation": "A 1ª Lei de Newton postula que, sem força resultante externa (Fr = 0), a velocidade vetorial do corpo permanece constante.",
    "distractorAnalysis": [
      "Está incorreta: A 3ª Lei estabelece ação e reação com a mesma intensidade e sentidos opostos, não intensidade dupla no mesmo sentido.",
      "Está incorreta: A 2ª Lei estabelece que a aceleração é diretamente proporcional à força e inversamente proporcional à massa (a = F/m).",
      "Está incorreta: Sem força resultante externa, um corpo não acelera; mantém velocidade vetorial rigorosamente constante."
    ],
    "nursingApplication": "Explica por que uma maca parada num corredor plano permanece imóvel até ser empurrada."
  },
  {
    "id": 1068,
    "topicId": 1,
    "question": "O que traduz o conceito físico de Inércia de um corpo?",
    "options": [
      "A resistência natural que um corpo oferece a qualquer alteração do seu estado de repouso ou de movimento.",
      "A capacidade de um corpo gerar energia mecânica espontânea a partir do repouso absoluto.",
      "A velocidade máxima que um corpo pode atingir quando em queda livre num meio viscoso.",
      "A força invisível que empurra ativamente os corpos para a frente quando estão em movimento retilíneo."
    ],
    "correctIndex": 0,
    "explanation": "A inércia é uma propriedade fundamental da matéria pela qual os corpos resistem a acelerações ou travagens.",
    "distractorAnalysis": [
      "Está incorreta: A inércia não cria energia mecânica; a energia é conservada de acordo com as leis da física.",
      "Está incorreta: A velocidade máxima em queda num fluido depende do equilíbrio com o atrito viscoso, não da inércia isolada.",
      "Está incorreta: A inércia não é uma força propulsora; é apenas a tendência passiva para manter o estado atual de movimento."
    ],
    "nursingApplication": "Compreender a inércia ajuda a antecipar que parar uma maca em movimento exige esforço de travagem."
  },
  {
    "id": 1069,
    "topicId": 1,
    "question": "De que grandeza física depende exclusivamente a inércia de um corpo na mecânica clássica?",
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
    "id": 1070,
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
    "nursingApplication": "Demonstra a importância vital do uso de cintos de segurança em veículos de emergência e transporte."
  },
  {
    "id": 1071,
    "topicId": 1,
    "question": "Se a força resultante que atua sobre um carrinho for rigorosamente nula (Fr = 0), qual é a sua aceleração?",
    "options": [
      "9,8 m/s².",
      "Infinita.",
      "Depende da cor do carrinho.",
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
    "id": 1072,
    "topicId": 1,
    "question": "Um equipamento desloca-se em linha reta com velocidade constante de 1,5 m/s. O que se pode concluir sobre as forças?",
    "options": [
      "A resultante de todas as forças que atuam sobre ele é rigorosamente nula (Fr = 0).",
      "A força propulsora para a frente é dez vezes superior às forças de atrito.",
      "Não existe nenhuma força a atuar sobre o corpo, nem sequer o peso ou o chão.",
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
    "id": 1073,
    "topicId": 1,
    "question": "Porque é mais difícil iniciar o movimento de uma caixa pesada do que de uma caixa leve em repouso no chão?",
    "options": [
      "Porque a caixa leve não obedece à 1ª Lei de Newton e move-se sem necessidade de força.",
      "Porque a caixa mais pesada tem maior massa, o que significa que possui maior inércia e oferece maior resistência à aceleração.",
      "Porque a gravidade só atua sobre objetos com massa superior a cinquenta quilogramas.",
      "Porque a caixa mais pesada atrai o ar ao seu redor criando uma zona de vácuo aderente ao piso."
    ],
    "correctIndex": 1,
    "explanation": "A inércia é proporcional à massa: acelerar uma massa maior a partir do repouso requer maior força resultante.",
    "distractorAnalysis": [
      "Está incorreta: Todos os corpos materiais com massa obedecem rigorosamente à 1ª Lei de Newton.",
      "Está incorreta: A gravidade atua sobre todos os corpos com massa, sem qualquer limiar mínimo de 50 kg.",
      "Está incorreta: A dificuldade resulta da inércia mecânica e do atrito estático, não de vácuo aerodinâmico."
    ],
    "nursingApplication": "Ensina a avaliar a carga de caixas antes de tentar movê-las manualmente."
  },
  {
    "id": 1074,
    "topicId": 1,
    "question": "Se um carrinho estiver parado num piso plano e ninguém lhe tocar, ele permanecerá parado. Esta observação exemplifica:",
    "options": [
      "A 3ª Lei de Newton sobre colisão elástica de projéteis.",
      "A conservação do momento angular em órbitas planetárias.",
      "A 1ª Lei de Newton (Lei da Inércia para um corpo em repouso).",
      "A Lei da Hidrostática sobre impulsão de fluidos compressíveis."
    ],
    "correctIndex": 2,
    "explanation": "Um corpo em repouso permanece em repouso enquanto a resultante das forças for nula (1ª Lei de Newton).",
    "distractorAnalysis": [
      "Está incorreta: A 3ª Lei trata de pares de ação e reação entre corpos em interação, não do repouso isolado.",
      "Está incorreta: O momento angular e órbitas referem-se a rotações no espaço gravitacional, não a carrinhos planos.",
      "Está incorreta: A hidrostática trata da pressão em fluidos em repouso, não da estática de corpos sólidos rígidos."
    ],
    "nursingApplication": "Conceito elementar para garantir o travamento de macas para que permaneçam estacionárias."
  },
  {
    "id": 1075,
    "topicId": 1,
    "question": "Qual é o enunciado fundamental da 1ª Lei de Newton (Lei da Inércia)?",
    "options": [
      "Para cada ação aplicada sobre um corpo, existe uma reação de intensidade dupla orientada no mesmo sentido.",
      "A aceleração de um corpo é inversamente proporcional à força resultante e diretamente proporcional à sua massa.",
      "Todos os corpos materiais aceleram espontaneamente a uma taxa constante quando deixados livres de qualquer força.",
      "Um corpo em repouso permanece em repouso e um corpo em movimento retilíneo uniforme permanece em movimento, a menos que uma força resultante atue sobre ele."
    ],
    "correctIndex": 3,
    "explanation": "A 1ª Lei de Newton postula que, sem força resultante externa (Fr = 0), a velocidade vetorial do corpo permanece constante.",
    "distractorAnalysis": [
      "Está incorreta: A 3ª Lei estabelece ação e reação com a mesma intensidade e sentidos opostos, não intensidade dupla no mesmo sentido.",
      "Está incorreta: A 2ª Lei estabelece que a aceleração é diretamente proporcional à força e inversamente proporcional à massa (a = F/m).",
      "Está incorreta: Sem força resultante externa, um corpo não acelera; mantém velocidade vetorial rigorosamente constante."
    ],
    "nursingApplication": "Explica por que uma maca parada num corredor plano permanece imóvel até ser empurrada."
  },
  {
    "id": 1076,
    "topicId": 1,
    "question": "O que traduz o conceito físico de Inércia de um corpo?",
    "options": [
      "A resistência natural que um corpo oferece a qualquer alteração do seu estado de repouso ou de movimento.",
      "A capacidade de um corpo gerar energia mecânica espontânea a partir do repouso absoluto.",
      "A velocidade máxima que um corpo pode atingir quando em queda livre num meio viscoso.",
      "A força invisível que empurra ativamente os corpos para a frente quando estão em movimento retilíneo."
    ],
    "correctIndex": 0,
    "explanation": "A inércia é uma propriedade fundamental da matéria pela qual os corpos resistem a acelerações ou travagens.",
    "distractorAnalysis": [
      "Está incorreta: A inércia não cria energia mecânica; a energia é conservada de acordo com as leis da física.",
      "Está incorreta: A velocidade máxima em queda num fluido depende do equilíbrio com o atrito viscoso, não da inércia isolada.",
      "Está incorreta: A inércia não é uma força propulsora; é apenas a tendência passiva para manter o estado atual de movimento."
    ],
    "nursingApplication": "Compreender a inércia ajuda a antecipar que parar uma maca em movimento exige esforço de travagem."
  },
  {
    "id": 1077,
    "topicId": 1,
    "question": "De que grandeza física depende exclusivamente a inércia de um corpo na mecânica clássica?",
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
    "id": 1078,
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
    "nursingApplication": "Demonstra a importância vital do uso de cintos de segurança em veículos de emergência e transporte."
  },
  {
    "id": 1079,
    "topicId": 1,
    "question": "Se a força resultante que atua sobre um carrinho for rigorosamente nula (Fr = 0), qual é a sua aceleração?",
    "options": [
      "9,8 m/s².",
      "Infinita.",
      "Depende da cor do carrinho.",
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
    "id": 1080,
    "topicId": 1,
    "question": "Um equipamento desloca-se em linha reta com velocidade constante de 1,5 m/s. O que se pode concluir sobre as forças?",
    "options": [
      "A resultante de todas as forças que atuam sobre ele é rigorosamente nula (Fr = 0).",
      "A força propulsora para a frente é dez vezes superior às forças de atrito.",
      "Não existe nenhuma força a atuar sobre o corpo, nem sequer o peso ou o chão.",
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
    "id": 1081,
    "topicId": 1,
    "question": "Porque é mais difícil iniciar o movimento de uma caixa pesada do que de uma caixa leve em repouso no chão?",
    "options": [
      "Porque a caixa leve não obedece à 1ª Lei de Newton e move-se sem necessidade de força.",
      "Porque a caixa mais pesada tem maior massa, o que significa que possui maior inércia e oferece maior resistência à aceleração.",
      "Porque a gravidade só atua sobre objetos com massa superior a cinquenta quilogramas.",
      "Porque a caixa mais pesada atrai o ar ao seu redor criando uma zona de vácuo aderente ao piso."
    ],
    "correctIndex": 1,
    "explanation": "A inércia é proporcional à massa: acelerar uma massa maior a partir do repouso requer maior força resultante.",
    "distractorAnalysis": [
      "Está incorreta: Todos os corpos materiais com massa obedecem rigorosamente à 1ª Lei de Newton.",
      "Está incorreta: A gravidade atua sobre todos os corpos com massa, sem qualquer limiar mínimo de 50 kg.",
      "Está incorreta: A dificuldade resulta da inércia mecânica e do atrito estático, não de vácuo aerodinâmico."
    ],
    "nursingApplication": "Ensina a avaliar a carga de caixas antes de tentar movê-las manualmente."
  },
  {
    "id": 1082,
    "topicId": 1,
    "question": "Se um carrinho estiver parado num piso plano e ninguém lhe tocar, ele permanecerá parado. Esta observação exemplifica:",
    "options": [
      "A 3ª Lei de Newton sobre colisão elástica de projéteis.",
      "A conservação do momento angular em órbitas planetárias.",
      "A 1ª Lei de Newton (Lei da Inércia para um corpo em repouso).",
      "A Lei da Hidrostática sobre impulsão de fluidos compressíveis."
    ],
    "correctIndex": 2,
    "explanation": "Um corpo em repouso permanece em repouso enquanto a resultante das forças for nula (1ª Lei de Newton).",
    "distractorAnalysis": [
      "Está incorreta: A 3ª Lei trata de pares de ação e reação entre corpos em interação, não do repouso isolado.",
      "Está incorreta: O momento angular e órbitas referem-se a rotações no espaço gravitacional, não a carrinhos planos.",
      "Está incorreta: A hidrostática trata da pressão em fluidos em repouso, não da estática de corpos sólidos rígidos."
    ],
    "nursingApplication": "Conceito elementar para garantir o travamento de macas para que permaneçam estacionárias."
  },
  {
    "id": 1083,
    "topicId": 1,
    "question": "Qual é o enunciado fundamental da 1ª Lei de Newton (Lei da Inércia)?",
    "options": [
      "Para cada ação aplicada sobre um corpo, existe uma reação de intensidade dupla orientada no mesmo sentido.",
      "A aceleração de um corpo é inversamente proporcional à força resultante e diretamente proporcional à sua massa.",
      "Todos os corpos materiais aceleram espontaneamente a uma taxa constante quando deixados livres de qualquer força.",
      "Um corpo em repouso permanece em repouso e um corpo em movimento retilíneo uniforme permanece em movimento, a menos que uma força resultante atue sobre ele."
    ],
    "correctIndex": 3,
    "explanation": "A 1ª Lei de Newton postula que, sem força resultante externa (Fr = 0), a velocidade vetorial do corpo permanece constante.",
    "distractorAnalysis": [
      "Está incorreta: A 3ª Lei estabelece ação e reação com a mesma intensidade e sentidos opostos, não intensidade dupla no mesmo sentido.",
      "Está incorreta: A 2ª Lei estabelece que a aceleração é diretamente proporcional à força e inversamente proporcional à massa (a = F/m).",
      "Está incorreta: Sem força resultante externa, um corpo não acelera; mantém velocidade vetorial rigorosamente constante."
    ],
    "nursingApplication": "Explica por que uma maca parada num corredor plano permanece imóvel até ser empurrada."
  },
  {
    "id": 1084,
    "topicId": 1,
    "question": "O que traduz o conceito físico de Inércia de um corpo?",
    "options": [
      "A resistência natural que um corpo oferece a qualquer alteração do seu estado de repouso ou de movimento.",
      "A capacidade de um corpo gerar energia mecânica espontânea a partir do repouso absoluto.",
      "A velocidade máxima que um corpo pode atingir quando em queda livre num meio viscoso.",
      "A força invisível que empurra ativamente os corpos para a frente quando estão em movimento retilíneo."
    ],
    "correctIndex": 0,
    "explanation": "A inércia é uma propriedade fundamental da matéria pela qual os corpos resistem a acelerações ou travagens.",
    "distractorAnalysis": [
      "Está incorreta: A inércia não cria energia mecânica; a energia é conservada de acordo com as leis da física.",
      "Está incorreta: A velocidade máxima em queda num fluido depende do equilíbrio com o atrito viscoso, não da inércia isolada.",
      "Está incorreta: A inércia não é uma força propulsora; é apenas a tendência passiva para manter o estado atual de movimento."
    ],
    "nursingApplication": "Compreender a inércia ajuda a antecipar que parar uma maca em movimento exige esforço de travagem."
  },
  {
    "id": 1085,
    "topicId": 1,
    "question": "De que grandeza física depende exclusivamente a inércia de um corpo na mecânica clássica?",
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
    "id": 1086,
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
    "nursingApplication": "Demonstra a importância vital do uso de cintos de segurança em veículos de emergência e transporte."
  },
  {
    "id": 1087,
    "topicId": 1,
    "question": "Se a força resultante que atua sobre um carrinho for rigorosamente nula (Fr = 0), qual é a sua aceleração?",
    "options": [
      "9,8 m/s².",
      "Infinita.",
      "Depende da cor do carrinho.",
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
    "id": 1088,
    "topicId": 1,
    "question": "Um equipamento desloca-se em linha reta com velocidade constante de 1,5 m/s. O que se pode concluir sobre as forças?",
    "options": [
      "A resultante de todas as forças que atuam sobre ele é rigorosamente nula (Fr = 0).",
      "A força propulsora para a frente é dez vezes superior às forças de atrito.",
      "Não existe nenhuma força a atuar sobre o corpo, nem sequer o peso ou o chão.",
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
    "id": 1089,
    "topicId": 1,
    "question": "Porque é mais difícil iniciar o movimento de uma caixa pesada do que de uma caixa leve em repouso no chão?",
    "options": [
      "Porque a caixa leve não obedece à 1ª Lei de Newton e move-se sem necessidade de força.",
      "Porque a caixa mais pesada tem maior massa, o que significa que possui maior inércia e oferece maior resistência à aceleração.",
      "Porque a gravidade só atua sobre objetos com massa superior a cinquenta quilogramas.",
      "Porque a caixa mais pesada atrai o ar ao seu redor criando uma zona de vácuo aderente ao piso."
    ],
    "correctIndex": 1,
    "explanation": "A inércia é proporcional à massa: acelerar uma massa maior a partir do repouso requer maior força resultante.",
    "distractorAnalysis": [
      "Está incorreta: Todos os corpos materiais com massa obedecem rigorosamente à 1ª Lei de Newton.",
      "Está incorreta: A gravidade atua sobre todos os corpos com massa, sem qualquer limiar mínimo de 50 kg.",
      "Está incorreta: A dificuldade resulta da inércia mecânica e do atrito estático, não de vácuo aerodinâmico."
    ],
    "nursingApplication": "Ensina a avaliar a carga de caixas antes de tentar movê-las manualmente."
  },
  {
    "id": 1090,
    "topicId": 1,
    "question": "Se um carrinho estiver parado num piso plano e ninguém lhe tocar, ele permanecerá parado. Esta observação exemplifica:",
    "options": [
      "A 3ª Lei de Newton sobre colisão elástica de projéteis.",
      "A conservação do momento angular em órbitas planetárias.",
      "A 1ª Lei de Newton (Lei da Inércia para um corpo em repouso).",
      "A Lei da Hidrostática sobre impulsão de fluidos compressíveis."
    ],
    "correctIndex": 2,
    "explanation": "Um corpo em repouso permanece em repouso enquanto a resultante das forças for nula (1ª Lei de Newton).",
    "distractorAnalysis": [
      "Está incorreta: A 3ª Lei trata de pares de ação e reação entre corpos em interação, não do repouso isolado.",
      "Está incorreta: O momento angular e órbitas referem-se a rotações no espaço gravitacional, não a carrinhos planos.",
      "Está incorreta: A hidrostática trata da pressão em fluidos em repouso, não da estática de corpos sólidos rígidos."
    ],
    "nursingApplication": "Conceito elementar para garantir o travamento de macas para que permaneçam estacionárias."
  },
  {
    "id": 1091,
    "topicId": 1,
    "question": "Qual é o enunciado fundamental da 1ª Lei de Newton (Lei da Inércia)?",
    "options": [
      "Para cada ação aplicada sobre um corpo, existe uma reação de intensidade dupla orientada no mesmo sentido.",
      "A aceleração de um corpo é inversamente proporcional à força resultante e diretamente proporcional à sua massa.",
      "Todos os corpos materiais aceleram espontaneamente a uma taxa constante quando deixados livres de qualquer força.",
      "Um corpo em repouso permanece em repouso e um corpo em movimento retilíneo uniforme permanece em movimento, a menos que uma força resultante atue sobre ele."
    ],
    "correctIndex": 3,
    "explanation": "A 1ª Lei de Newton postula que, sem força resultante externa (Fr = 0), a velocidade vetorial do corpo permanece constante.",
    "distractorAnalysis": [
      "Está incorreta: A 3ª Lei estabelece ação e reação com a mesma intensidade e sentidos opostos, não intensidade dupla no mesmo sentido.",
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
    "explanation": "A inércia é uma propriedade fundamental da matéria pela qual os corpos resistem a acelerações ou travagens.",
    "distractorAnalysis": [
      "Está incorreta: A inércia não cria energia mecânica; a energia é conservada de acordo com as leis da física.",
      "Está incorreta: A velocidade máxima em queda num fluido depende do equilíbrio com o atrito viscoso, não da inércia isolada.",
      "Está incorreta: A inércia não é uma força propulsora; é apenas a tendência passiva para manter o estado atual de movimento."
    ],
    "nursingApplication": "Compreender a inércia ajuda a antecipar que parar uma maca em movimento exige esforço de travagem."
  },
  {
    "id": 1093,
    "topicId": 1,
    "question": "De que grandeza física depende exclusivamente a inércia de um corpo na mecânica clássica?",
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
    "nursingApplication": "Demonstra a importância vital do uso de cintos de segurança em veículos de emergência e transporte."
  },
  {
    "id": 1095,
    "topicId": 1,
    "question": "Se a força resultante que atua sobre um carrinho for rigorosamente nula (Fr = 0), qual é a sua aceleração?",
    "options": [
      "9,8 m/s².",
      "Infinita.",
      "Depende da cor do carrinho.",
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
    "question": "Um equipamento desloca-se em linha reta com velocidade constante de 1,5 m/s. O que se pode concluir sobre as forças?",
    "options": [
      "A resultante de todas as forças que atuam sobre ele é rigorosamente nula (Fr = 0).",
      "A força propulsora para a frente é dez vezes superior às forças de atrito.",
      "Não existe nenhuma força a atuar sobre o corpo, nem sequer o peso ou o chão.",
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
      "Porque a caixa mais pesada atrai o ar ao seu redor criando uma zona de vácuo aderente ao piso."
    ],
    "correctIndex": 1,
    "explanation": "A inércia é proporcional à massa: acelerar uma massa maior a partir do repouso requer maior força resultante.",
    "distractorAnalysis": [
      "Está incorreta: Todos os corpos materiais com massa obedecem rigorosamente à 1ª Lei de Newton.",
      "Está incorreta: A gravidade atua sobre todos os corpos com massa, sem qualquer limiar mínimo de 50 kg.",
      "Está incorreta: A dificuldade resulta da inércia mecânica e do atrito estático, não de vácuo aerodinâmico."
    ],
    "nursingApplication": "Ensina a avaliar a carga de caixas antes de tentar movê-las manualmente."
  },
  {
    "id": 1098,
    "topicId": 1,
    "question": "Se um carrinho estiver parado num piso plano e ninguém lhe tocar, ele permanecerá parado. Esta observação exemplifica:",
    "options": [
      "A 3ª Lei de Newton sobre colisão elástica de projéteis.",
      "A conservação do momento angular em órbitas planetárias.",
      "A 1ª Lei de Newton (Lei da Inércia para um corpo em repouso).",
      "A Lei da Hidrostática sobre impulsão de fluidos compressíveis."
    ],
    "correctIndex": 2,
    "explanation": "Um corpo em repouso permanece em repouso enquanto a resultante das forças for nula (1ª Lei de Newton).",
    "distractorAnalysis": [
      "Está incorreta: A 3ª Lei trata de pares de ação e reação entre corpos em interação, não do repouso isolado.",
      "Está incorreta: O momento angular e órbitas referem-se a rotações no espaço gravitacional, não a carrinhos planos.",
      "Está incorreta: A hidrostática trata da pressão em fluidos em repouso, não da estática de corpos sólidos rígidos."
    ],
    "nursingApplication": "Conceito elementar para garantir o travamento de macas para que permaneçam estacionárias."
  },
  {
    "id": 1099,
    "topicId": 1,
    "question": "Qual é o enunciado fundamental da 1ª Lei de Newton (Lei da Inércia)?",
    "options": [
      "Para cada ação aplicada sobre um corpo, existe uma reação de intensidade dupla orientada no mesmo sentido.",
      "A aceleração de um corpo é inversamente proporcional à força resultante e diretamente proporcional à sua massa.",
      "Todos os corpos materiais aceleram espontaneamente a uma taxa constante quando deixados livres de qualquer força.",
      "Um corpo em repouso permanece em repouso e um corpo em movimento retilíneo uniforme permanece em movimento, a menos que uma força resultante atue sobre ele."
    ],
    "correctIndex": 3,
    "explanation": "A 1ª Lei de Newton postula que, sem força resultante externa (Fr = 0), a velocidade vetorial do corpo permanece constante.",
    "distractorAnalysis": [
      "Está incorreta: A 3ª Lei estabelece ação e reação com a mesma intensidade e sentidos opostos, não intensidade dupla no mesmo sentido.",
      "Está incorreta: A 2ª Lei estabelece que a aceleração é diretamente proporcional à força e inversamente proporcional à massa (a = F/m).",
      "Está incorreta: Sem força resultante externa, um corpo não acelera; mantém velocidade vetorial rigorosamente constante."
    ],
    "nursingApplication": "Explica por que uma maca parada num corredor plano permanece imóvel até ser empurrada."
  },
  {
    "id": 1100,
    "topicId": 1,
    "question": "O que traduz o conceito físico de Inércia de um corpo?",
    "options": [
      "A resistência natural que um corpo oferece a qualquer alteração do seu estado de repouso ou de movimento.",
      "A capacidade de um corpo gerar energia mecânica espontânea a partir do repouso absoluto.",
      "A velocidade máxima que um corpo pode atingir quando em queda livre num meio viscoso.",
      "A força invisível que empurra ativamente os corpos para a frente quando estão em movimento retilíneo."
    ],
    "correctIndex": 0,
    "explanation": "A inércia é uma propriedade fundamental da matéria pela qual os corpos resistem a acelerações ou travagens.",
    "distractorAnalysis": [
      "Está incorreta: A inércia não cria energia mecânica; a energia é conservada de acordo com as leis da física.",
      "Está incorreta: A velocidade máxima em queda num fluido depende do equilíbrio com o atrito viscoso, não da inércia isolada.",
      "Está incorreta: A inércia não é uma força propulsora; é apenas a tendência passiva para manter o estado atual de movimento."
    ],
    "nursingApplication": "Compreender a inércia ajuda a antecipar que parar uma maca em movimento exige esforço de travagem."
  },
  {
    "id": 1101,
    "topicId": 1,
    "question": "Qual é a força resultante necessária para acelerar um carrinho de massa 20 kg a uma aceleração de 0.5 m/s²?",
    "options": [
      "20.5 N.",
      "10.0 N.",
      "40.0 N.",
      "10.0 kg."
    ],
    "correctIndex": 1,
    "explanation": "Pela 2ª Lei de Newton: Fr = m · a = 20 kg · 0.5 m/s² = 10.0 N.",
    "distractorAnalysis": [
      "Está incorreta: Somar a massa com a aceleração viola a fórmula da 2ª Lei de Newton (Fr = m · a).",
      "Está incorreta: Dividir a massa pela aceleração não fornece a intensidade da força resultante.",
      "Está incorreta: O valor numérico está correto, mas a unidade de força é o Newton (N) e não o quilograma (kg)."
    ],
    "nursingApplication": "Permite calcular a força exata necessária para empurrar e acelerar um carrinho de transporte."
  },
  {
    "id": 1102,
    "topicId": 1,
    "question": "Se uma força resultante de 25.0 N for aplicada sobre uma massa de 25 kg, qual será a aceleração adquirida?",
    "options": [
      "625.0 m/s².",
      "1.0 m/s².",
      "1.0 m/s².",
      "1.0 N."
    ],
    "correctIndex": 2,
    "explanation": "Pela 2ª Lei de Newton, a = Fr / m: 25.0 N / 25 kg = 1.0 m/s².",
    "distractorAnalysis": [
      "Está incorreta: Multiplicar a força pela massa resultaria em unidades de N·kg, o que está incorreto.",
      "Está incorreta: Dividir a massa pela força é o inverso da aceleração (1/a).",
      "Está incorreta: A aceleração mede-se em m/s² no SI, e não em Newtons (N), que é a unidade de força."
    ],
    "nursingApplication": "Mostra como a aceleração de um equipamento diminui à medida que a sua massa aumenta."
  },
  {
    "id": 1103,
    "topicId": 1,
    "question": "De acordo com a 2ª Lei de Newton (F = m·a), se a massa de um corpo duplicar e a força aplicada se mantiver constante, a aceleração:",
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
      "Está incorreta: A aceleração não se mantém inalterada porque depende inversamente da massa do corpo."
    ],
    "nursingApplication": "Ao duplicar a carga numa maca, a mesma força muscular produzirá apenas metade da aceleração."
  },
  {
    "id": 1104,
    "topicId": 1,
    "question": "Se a força resultante aplicada sobre um carrinho triplicar mantendo-se a sua massa inalterada, o que acontece à aceleração?",
    "options": [
      "Triplica na mesma proporção.",
      "Reduz-se a um terço.",
      "Permanece constante.",
      "Passa a ser nula."
    ],
    "correctIndex": 0,
    "explanation": "A aceleração é diretamente proporcional à força resultante (a ∝ F). Triplicando a força, a aceleração triplica.",
    "distractorAnalysis": [
      "Está incorreta: A aceleração só se reduziria a um terço se a massa triplicasse mantendo-se a força constante.",
      "Está incorreta: A aceleração não fica constante quando a força resultante varia.",
      "Está incorreta: A aceleração só seria nula se a força resultante fosse igual a zero."
    ],
    "nursingApplication": "Empurrar com mais intensidade produz uma aceleração proporcionalmente mais rápida do carrinho."
  },
  {
    "id": 1105,
    "topicId": 1,
    "question": "O que afirma a 2ª Lei de Newton (Lei Fundamental da Dinâmica)?",
    "options": [
      "A energia mecânica total de um sistema dissipa-se sempre sob a forma de calor espontâneo.",
      "A força resultante que atua sobre um corpo é diretamente proporcional à sua massa e à aceleração que ele adquire.",
      "A velocidade de um corpo é independente de qualquer força que atue sobre as suas superfícies.",
      "Dois corpos em contacto atraem-se com força inversamente proporcional ao cubo da sua temperatura."
    ],
    "correctIndex": 1,
    "explanation": "A 2ª Lei estabelece a relação quantitativa fundamental da dinâmica clássica: Fr = m · a.",
    "distractorAnalysis": [
      "Está incorreta: Essa afirmação remete para o segundo princípio da termodinâmica, não para a 2ª Lei de Newton.",
      "Está incorreta: A velocidade é diretamente influenciada pela aceleração gerada pelas forças aplicadas.",
      "Está incorreta: A atração entre corpos depende da gravidade e massas, não da temperatura cúbica."
    ],
    "nursingApplication": "Fundamento para calcular as forças requeridas para mover massas na rotina física hospitalar."
  },
  {
    "id": 1106,
    "topicId": 1,
    "question": "Para travar e parar uma maca de 100 kg que se move a 2 m/s no espaço de 1 segundo (desaceleração a = 2 m/s²), que força média de travagem é necessária?",
    "options": [
      "50 N.",
      "100 N.",
      "200 N.",
      "500 N."
    ],
    "correctIndex": 2,
    "explanation": "Pela 2ª Lei de Newton: F = m · a = 100 kg · 2 m/s² = 200 N no sentido oposto ao movimento.",
    "distractorAnalysis": [
      "Está incorreta: 50 N resultaria de dividir 100 kg por 2 m/s², o que não corresponde à fórmula F = m · a.",
      "Está incorreta: 100 N seria a força se a aceleração fosse de apenas 1 m/s².",
      "Está incorreta: 500 N superaria significativamente o valor dado pelo produto da massa pela desaceleração."
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
      "Nenhum dos carrinhos necessita de qualquer força para acelerar.",
      "O carrinho carregado exige uma força resultante quatro vezes maior do que o carrinho vazio."
    ],
    "correctIndex": 3,
    "explanation": "Como F = m·a, para a mesma aceleração 'a', a força é proporcional à massa. 80 kg / 20 kg = 4 vezes mais força.",
    "distractorAnalysis": [
      "Está incorreta: A mesma força sobre massas diferentes produz acelerações diferentes (inversamente proporcionais).",
      "Está incorreta: Uma massa maior exige maior força, e nunca menor força, para atingir a mesma aceleração.",
      "Está incorreta: Qualquer alteração de velocidade (aceleração) exige obrigatoriamente uma força resultante não nula."
    ],
    "nursingApplication": "Mostra a necessidade de maior esforço muscular ao transportar equipamentos com carga pesada."
  },
  {
    "id": 1108,
    "topicId": 1,
    "question": "Qual é a unidade da grandeza Aceleração no Sistema Internacional (SI)?",
    "options": [
      "Metros por segundo ao quadrado (m/s²).",
      "Metros por segundo (m/s).",
      "Newtons por quilograma ao cubo (N/kg³).",
      "Quilogramas por metro (kg/m)."
    ],
    "correctIndex": 0,
    "explanation": "A aceleração é a taxa de variação da velocidade no tempo: (m/s) / s = m/s².",
    "distractorAnalysis": [
      "Está incorreta: Metros por segundo (m/s) é a unidade de velocidade, não de aceleração.",
      "Está incorreta: N/kg é equivalente a m/s² (pela 2ª Lei), mas N/kg³ é uma unidade dimensionalmente incorreta.",
      "Está incorreta: Quilogramas por metro (kg/m) é densidade linear de massa, não aceleração."
    ],
    "nursingApplication": "Compreender a unidade de aceleração evita confusões entre velocidade (m/s) e aceleração (m/s²)."
  },
  {
    "id": 1109,
    "topicId": 1,
    "question": "Qual é a força resultante necessária para acelerar um carrinho de massa 60 kg a uma aceleração de 0.5 m/s²?",
    "options": [
      "60.5 N.",
      "30.0 N.",
      "120.0 N.",
      "30.0 kg."
    ],
    "correctIndex": 1,
    "explanation": "Pela 2ª Lei de Newton: Fr = m · a = 60 kg · 0.5 m/s² = 30.0 N.",
    "distractorAnalysis": [
      "Está incorreta: Somar a massa com a aceleração viola a fórmula da 2ª Lei de Newton (Fr = m · a).",
      "Está incorreta: Dividir a massa pela aceleração não fornece a intensidade da força resultante.",
      "Está incorreta: O valor numérico está correto, mas a unidade de força é o Newton (N) e não o quilograma (kg)."
    ],
    "nursingApplication": "Permite calcular a força exata necessária para empurrar e acelerar um carrinho de transporte."
  },
  {
    "id": 1110,
    "topicId": 1,
    "question": "Se uma força resultante de 65.0 N for aplicada sobre uma massa de 65 kg, qual será a aceleração adquirida?",
    "options": [
      "4225.0 m/s².",
      "1.0 m/s².",
      "1.0 m/s².",
      "1.0 N."
    ],
    "correctIndex": 2,
    "explanation": "Pela 2ª Lei de Newton, a = Fr / m: 65.0 N / 65 kg = 1.0 m/s².",
    "distractorAnalysis": [
      "Está incorreta: Multiplicar a força pela massa resultaria em unidades de N·kg, o que está incorreto.",
      "Está incorreta: Dividir a massa pela força é o inverso da aceleração (1/a).",
      "Está incorreta: A aceleração mede-se em m/s² no SI, e não em Newtons (N), que é a unidade de força."
    ],
    "nursingApplication": "Mostra como a aceleração de um equipamento diminui à medida que a sua massa aumenta."
  },
  {
    "id": 1111,
    "topicId": 1,
    "question": "De acordo com a 2ª Lei de Newton (F = m·a), se a massa de um corpo duplicar e a força aplicada se mantiver constante, a aceleração:",
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
      "Está incorreta: A aceleração não se mantém inalterada porque depende inversamente da massa do corpo."
    ],
    "nursingApplication": "Ao duplicar a carga numa maca, a mesma força muscular produzirá apenas metade da aceleração."
  },
  {
    "id": 1112,
    "topicId": 1,
    "question": "Se a força resultante aplicada sobre um carrinho triplicar mantendo-se a sua massa inalterada, o que acontece à aceleração?",
    "options": [
      "Triplica na mesma proporção.",
      "Reduz-se a um terço.",
      "Permanece constante.",
      "Passa a ser nula."
    ],
    "correctIndex": 0,
    "explanation": "A aceleração é diretamente proporcional à força resultante (a ∝ F). Triplicando a força, a aceleração triplica.",
    "distractorAnalysis": [
      "Está incorreta: A aceleração só se reduziria a um terço se a massa triplicasse mantendo-se a força constante.",
      "Está incorreta: A aceleração não fica constante quando a força resultante varia.",
      "Está incorreta: A aceleração só seria nula se a força resultante fosse igual a zero."
    ],
    "nursingApplication": "Empurrar com mais intensidade produz uma aceleração proporcionalmente mais rápida do carrinho."
  },
  {
    "id": 1113,
    "topicId": 1,
    "question": "O que afirma a 2ª Lei de Newton (Lei Fundamental da Dinâmica)?",
    "options": [
      "A energia mecânica total de um sistema dissipa-se sempre sob a forma de calor espontâneo.",
      "A força resultante que atua sobre um corpo é diretamente proporcional à sua massa e à aceleração que ele adquire.",
      "A velocidade de um corpo é independente de qualquer força que atue sobre as suas superfícies.",
      "Dois corpos em contacto atraem-se com força inversamente proporcional ao cubo da sua temperatura."
    ],
    "correctIndex": 1,
    "explanation": "A 2ª Lei estabelece a relação quantitativa fundamental da dinâmica clássica: Fr = m · a.",
    "distractorAnalysis": [
      "Está incorreta: Essa afirmação remete para o segundo princípio da termodinâmica, não para a 2ª Lei de Newton.",
      "Está incorreta: A velocidade é diretamente influenciada pela aceleração gerada pelas forças aplicadas.",
      "Está incorreta: A atração entre corpos depende da gravidade e massas, não da temperatura cúbica."
    ],
    "nursingApplication": "Fundamento para calcular as forças requeridas para mover massas na rotina física hospitalar."
  },
  {
    "id": 1114,
    "topicId": 1,
    "question": "Para travar e parar uma maca de 100 kg que se move a 2 m/s no espaço de 1 segundo (desaceleração a = 2 m/s²), que força média de travagem é necessária?",
    "options": [
      "50 N.",
      "100 N.",
      "200 N.",
      "500 N."
    ],
    "correctIndex": 2,
    "explanation": "Pela 2ª Lei de Newton: F = m · a = 100 kg · 2 m/s² = 200 N no sentido oposto ao movimento.",
    "distractorAnalysis": [
      "Está incorreta: 50 N resultaria de dividir 100 kg por 2 m/s², o que não corresponde à fórmula F = m · a.",
      "Está incorreta: 100 N seria a força se a aceleração fosse de apenas 1 m/s².",
      "Está incorreta: 500 N superaria significativamente o valor dado pelo produto da massa pela desaceleração."
    ],
    "nursingApplication": "Ilustra a força que as mãos devem exercer sobre a pega da maca para a imobilizar com segurança."
  },
  {
    "id": 1115,
    "topicId": 1,
    "question": "Se um carrinho vazio tem massa de 20 kg e um carrinho carregado tem massa de 80 kg, para obter a mesma aceleração em ambos:",
    "options": [
      "O carrinho carregado exige a mesma força exata que o carrinho vazio.",
      "O carrinho carregado exige uma força quatro vezes menor que o carrinho vazio.",
      "Nenhum dos carrinhos necessita de qualquer força para acelerar.",
      "O carrinho carregado exige uma força resultante quatro vezes maior do que o carrinho vazio."
    ],
    "correctIndex": 3,
    "explanation": "Como F = m·a, para a mesma aceleração 'a', a força é proporcional à massa. 80 kg / 20 kg = 4 vezes mais força.",
    "distractorAnalysis": [
      "Está incorreta: A mesma força sobre massas diferentes produz acelerações diferentes (inversamente proporcionais).",
      "Está incorreta: Uma massa maior exige maior força, e nunca menor força, para atingir a mesma aceleração.",
      "Está incorreta: Qualquer alteração de velocidade (aceleração) exige obrigatoriamente uma força resultante não nula."
    ],
    "nursingApplication": "Mostra a necessidade de maior esforço muscular ao transportar equipamentos com carga pesada."
  },
  {
    "id": 1116,
    "topicId": 1,
    "question": "Qual é a unidade da grandeza Aceleração no Sistema Internacional (SI)?",
    "options": [
      "Metros por segundo ao quadrado (m/s²).",
      "Metros por segundo (m/s).",
      "Newtons por quilograma ao cubo (N/kg³).",
      "Quilogramas por metro (kg/m)."
    ],
    "correctIndex": 0,
    "explanation": "A aceleração é a taxa de variação da velocidade no tempo: (m/s) / s = m/s².",
    "distractorAnalysis": [
      "Está incorreta: Metros por segundo (m/s) é a unidade de velocidade, não de aceleração.",
      "Está incorreta: N/kg é equivalente a m/s² (pela 2ª Lei), mas N/kg³ é uma unidade dimensionalmente incorreta.",
      "Está incorreta: Quilogramas por metro (kg/m) é densidade linear de massa, não aceleração."
    ],
    "nursingApplication": "Compreender a unidade de aceleração evita confusões entre velocidade (m/s) e aceleração (m/s²)."
  },
  {
    "id": 1117,
    "topicId": 1,
    "question": "Qual é a força resultante necessária para acelerar um carrinho de massa 50 kg a uma aceleração de 0.5 m/s²?",
    "options": [
      "50.5 N.",
      "25.0 N.",
      "100.0 N.",
      "25.0 kg."
    ],
    "correctIndex": 1,
    "explanation": "Pela 2ª Lei de Newton: Fr = m · a = 50 kg · 0.5 m/s² = 25.0 N.",
    "distractorAnalysis": [
      "Está incorreta: Somar a massa com a aceleração viola a fórmula da 2ª Lei de Newton (Fr = m · a).",
      "Está incorreta: Dividir a massa pela aceleração não fornece a intensidade da força resultante.",
      "Está incorreta: O valor numérico está correto, mas a unidade de força é o Newton (N) e não o quilograma (kg)."
    ],
    "nursingApplication": "Permite calcular a força exata necessária para empurrar e acelerar um carrinho de transporte."
  },
  {
    "id": 1118,
    "topicId": 1,
    "question": "Se uma força resultante de 55.0 N for aplicada sobre uma massa de 55 kg, qual será a aceleração adquirida?",
    "options": [
      "3025.0 m/s².",
      "1.0 m/s².",
      "1.0 m/s².",
      "1.0 N."
    ],
    "correctIndex": 2,
    "explanation": "Pela 2ª Lei de Newton, a = Fr / m: 55.0 N / 55 kg = 1.0 m/s².",
    "distractorAnalysis": [
      "Está incorreta: Multiplicar a força pela massa resultaria em unidades de N·kg, o que está incorreto.",
      "Está incorreta: Dividir a massa pela força é o inverso da aceleração (1/a).",
      "Está incorreta: A aceleração mede-se em m/s² no SI, e não em Newtons (N), que é a unidade de força."
    ],
    "nursingApplication": "Mostra como a aceleração de um equipamento diminui à medida que a sua massa aumenta."
  },
  {
    "id": 1119,
    "topicId": 1,
    "question": "De acordo com a 2ª Lei de Newton (F = m·a), se a massa de um corpo duplicar e a força aplicada se mantiver constante, a aceleração:",
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
      "Está incorreta: A aceleração não se mantém inalterada porque depende inversamente da massa do corpo."
    ],
    "nursingApplication": "Ao duplicar a carga numa maca, a mesma força muscular produzirá apenas metade da aceleração."
  },
  {
    "id": 1120,
    "topicId": 1,
    "question": "Se a força resultante aplicada sobre um carrinho triplicar mantendo-se a sua massa inalterada, o que acontece à aceleração?",
    "options": [
      "Triplica na mesma proporção.",
      "Reduz-se a um terço.",
      "Permanece constante.",
      "Passa a ser nula."
    ],
    "correctIndex": 0,
    "explanation": "A aceleração é diretamente proporcional à força resultante (a ∝ F). Triplicando a força, a aceleração triplica.",
    "distractorAnalysis": [
      "Está incorreta: A aceleração só se reduziria a um terço se a massa triplicasse mantendo-se a força constante.",
      "Está incorreta: A aceleração não fica constante quando a força resultante varia.",
      "Está incorreta: A aceleração só seria nula se a força resultante fosse igual a zero."
    ],
    "nursingApplication": "Empurrar com mais intensidade produz uma aceleração proporcionalmente mais rápida do carrinho."
  },
  {
    "id": 1121,
    "topicId": 1,
    "question": "O que afirma a 2ª Lei de Newton (Lei Fundamental da Dinâmica)?",
    "options": [
      "A energia mecânica total de um sistema dissipa-se sempre sob a forma de calor espontâneo.",
      "A força resultante que atua sobre um corpo é diretamente proporcional à sua massa e à aceleração que ele adquire.",
      "A velocidade de um corpo é independente de qualquer força que atue sobre as suas superfícies.",
      "Dois corpos em contacto atraem-se com força inversamente proporcional ao cubo da sua temperatura."
    ],
    "correctIndex": 1,
    "explanation": "A 2ª Lei estabelece a relação quantitativa fundamental da dinâmica clássica: Fr = m · a.",
    "distractorAnalysis": [
      "Está incorreta: Essa afirmação remete para o segundo princípio da termodinâmica, não para a 2ª Lei de Newton.",
      "Está incorreta: A velocidade é diretamente influenciada pela aceleração gerada pelas forças aplicadas.",
      "Está incorreta: A atração entre corpos depende da gravidade e massas, não da temperatura cúbica."
    ],
    "nursingApplication": "Fundamento para calcular as forças requeridas para mover massas na rotina física hospitalar."
  },
  {
    "id": 1122,
    "topicId": 1,
    "question": "Para travar e parar uma maca de 100 kg que se move a 2 m/s no espaço de 1 segundo (desaceleração a = 2 m/s²), que força média de travagem é necessária?",
    "options": [
      "50 N.",
      "100 N.",
      "200 N.",
      "500 N."
    ],
    "correctIndex": 2,
    "explanation": "Pela 2ª Lei de Newton: F = m · a = 100 kg · 2 m/s² = 200 N no sentido oposto ao movimento.",
    "distractorAnalysis": [
      "Está incorreta: 50 N resultaria de dividir 100 kg por 2 m/s², o que não corresponde à fórmula F = m · a.",
      "Está incorreta: 100 N seria a força se a aceleração fosse de apenas 1 m/s².",
      "Está incorreta: 500 N superaria significativamente o valor dado pelo produto da massa pela desaceleração."
    ],
    "nursingApplication": "Ilustra a força que as mãos devem exercer sobre a pega da maca para a imobilizar com segurança."
  },
  {
    "id": 1123,
    "topicId": 1,
    "question": "Se um carrinho vazio tem massa de 20 kg e um carrinho carregado tem massa de 80 kg, para obter a mesma aceleração em ambos:",
    "options": [
      "O carrinho carregado exige a mesma força exata que o carrinho vazio.",
      "O carrinho carregado exige uma força quatro vezes menor que o carrinho vazio.",
      "Nenhum dos carrinhos necessita de qualquer força para acelerar.",
      "O carrinho carregado exige uma força resultante quatro vezes maior do que o carrinho vazio."
    ],
    "correctIndex": 3,
    "explanation": "Como F = m·a, para a mesma aceleração 'a', a força é proporcional à massa. 80 kg / 20 kg = 4 vezes mais força.",
    "distractorAnalysis": [
      "Está incorreta: A mesma força sobre massas diferentes produz acelerações diferentes (inversamente proporcionais).",
      "Está incorreta: Uma massa maior exige maior força, e nunca menor força, para atingir a mesma aceleração.",
      "Está incorreta: Qualquer alteração de velocidade (aceleração) exige obrigatoriamente uma força resultante não nula."
    ],
    "nursingApplication": "Mostra a necessidade de maior esforço muscular ao transportar equipamentos com carga pesada."
  },
  {
    "id": 1124,
    "topicId": 1,
    "question": "Qual é a unidade da grandeza Aceleração no Sistema Internacional (SI)?",
    "options": [
      "Metros por segundo ao quadrado (m/s²).",
      "Metros por segundo (m/s).",
      "Newtons por quilograma ao cubo (N/kg³).",
      "Quilogramas por metro (kg/m)."
    ],
    "correctIndex": 0,
    "explanation": "A aceleração é a taxa de variação da velocidade no tempo: (m/s) / s = m/s².",
    "distractorAnalysis": [
      "Está incorreta: Metros por segundo (m/s) é a unidade de velocidade, não de aceleração.",
      "Está incorreta: N/kg é equivalente a m/s² (pela 2ª Lei), mas N/kg³ é uma unidade dimensionalmente incorreta.",
      "Está incorreta: Quilogramas por metro (kg/m) é densidade linear de massa, não aceleração."
    ],
    "nursingApplication": "Compreender a unidade de aceleração evita confusões entre velocidade (m/s) e aceleração (m/s²)."
  },
  {
    "id": 1125,
    "topicId": 1,
    "question": "Qual é a força resultante necessária para acelerar um carrinho de massa 40 kg a uma aceleração de 0.5 m/s²?",
    "options": [
      "40.5 N.",
      "20.0 N.",
      "80.0 N.",
      "20.0 kg."
    ],
    "correctIndex": 1,
    "explanation": "Pela 2ª Lei de Newton: Fr = m · a = 40 kg · 0.5 m/s² = 20.0 N.",
    "distractorAnalysis": [
      "Está incorreta: Somar a massa com a aceleração viola a fórmula da 2ª Lei de Newton (Fr = m · a).",
      "Está incorreta: Dividir a massa pela aceleração não fornece a intensidade da força resultante.",
      "Está incorreta: O valor numérico está correto, mas a unidade de força é o Newton (N) e não o quilograma (kg)."
    ],
    "nursingApplication": "Permite calcular a força exata necessária para empurrar e acelerar um carrinho de transporte."
  },
  {
    "id": 1126,
    "topicId": 1,
    "question": "Se uma força resultante de 45.0 N for aplicada sobre uma massa de 45 kg, qual será a aceleração adquirida?",
    "options": [
      "2025.0 m/s².",
      "1.0 m/s².",
      "1.0 m/s².",
      "1.0 N."
    ],
    "correctIndex": 2,
    "explanation": "Pela 2ª Lei de Newton, a = Fr / m: 45.0 N / 45 kg = 1.0 m/s².",
    "distractorAnalysis": [
      "Está incorreta: Multiplicar a força pela massa resultaria em unidades de N·kg, o que está incorreto.",
      "Está incorreta: Dividir a massa pela força é o inverso da aceleração (1/a).",
      "Está incorreta: A aceleração mede-se em m/s² no SI, e não em Newtons (N), que é a unidade de força."
    ],
    "nursingApplication": "Mostra como a aceleração de um equipamento diminui à medida que a sua massa aumenta."
  },
  {
    "id": 1127,
    "topicId": 1,
    "question": "De acordo com a 2ª Lei de Newton (F = m·a), se a massa de um corpo duplicar e a força aplicada se mantiver constante, a aceleração:",
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
      "Está incorreta: A aceleração não se mantém inalterada porque depende inversamente da massa do corpo."
    ],
    "nursingApplication": "Ao duplicar a carga numa maca, a mesma força muscular produzirá apenas metade da aceleração."
  },
  {
    "id": 1128,
    "topicId": 1,
    "question": "Se a força resultante aplicada sobre um carrinho triplicar mantendo-se a sua massa inalterada, o que acontece à aceleração?",
    "options": [
      "Triplica na mesma proporção.",
      "Reduz-se a um terço.",
      "Permanece constante.",
      "Passa a ser nula."
    ],
    "correctIndex": 0,
    "explanation": "A aceleração é diretamente proporcional à força resultante (a ∝ F). Triplicando a força, a aceleração triplica.",
    "distractorAnalysis": [
      "Está incorreta: A aceleração só se reduziria a um terço se a massa triplicasse mantendo-se a força constante.",
      "Está incorreta: A aceleração não fica constante quando a força resultante varia.",
      "Está incorreta: A aceleração só seria nula se a força resultante fosse igual a zero."
    ],
    "nursingApplication": "Empurrar com mais intensidade produz uma aceleração proporcionalmente mais rápida do carrinho."
  },
  {
    "id": 1129,
    "topicId": 1,
    "question": "O que afirma a 2ª Lei de Newton (Lei Fundamental da Dinâmica)?",
    "options": [
      "A energia mecânica total de um sistema dissipa-se sempre sob a forma de calor espontâneo.",
      "A força resultante que atua sobre um corpo é diretamente proporcional à sua massa e à aceleração que ele adquire.",
      "A velocidade de um corpo é independente de qualquer força que atue sobre as suas superfícies.",
      "Dois corpos em contacto atraem-se com força inversamente proporcional ao cubo da sua temperatura."
    ],
    "correctIndex": 1,
    "explanation": "A 2ª Lei estabelece a relação quantitativa fundamental da dinâmica clássica: Fr = m · a.",
    "distractorAnalysis": [
      "Está incorreta: Essa afirmação remete para o segundo princípio da termodinâmica, não para a 2ª Lei de Newton.",
      "Está incorreta: A velocidade é diretamente influenciada pela aceleração gerada pelas forças aplicadas.",
      "Está incorreta: A atração entre corpos depende da gravidade e massas, não da temperatura cúbica."
    ],
    "nursingApplication": "Fundamento para calcular as forças requeridas para mover massas na rotina física hospitalar."
  },
  {
    "id": 1130,
    "topicId": 1,
    "question": "Para travar e parar uma maca de 100 kg que se move a 2 m/s no espaço de 1 segundo (desaceleração a = 2 m/s²), que força média de travagem é necessária?",
    "options": [
      "50 N.",
      "100 N.",
      "200 N.",
      "500 N."
    ],
    "correctIndex": 2,
    "explanation": "Pela 2ª Lei de Newton: F = m · a = 100 kg · 2 m/s² = 200 N no sentido oposto ao movimento.",
    "distractorAnalysis": [
      "Está incorreta: 50 N resultaria de dividir 100 kg por 2 m/s², o que não corresponde à fórmula F = m · a.",
      "Está incorreta: 100 N seria a força se a aceleração fosse de apenas 1 m/s².",
      "Está incorreta: 500 N superaria significativamente o valor dado pelo produto da massa pela desaceleração."
    ],
    "nursingApplication": "Ilustra a força que as mãos devem exercer sobre a pega da maca para a imobilizar com segurança."
  },
  {
    "id": 1131,
    "topicId": 1,
    "question": "Se um carrinho vazio tem massa de 20 kg e um carrinho carregado tem massa de 80 kg, para obter a mesma aceleração em ambos:",
    "options": [
      "O carrinho carregado exige a mesma força exata que o carrinho vazio.",
      "O carrinho carregado exige uma força quatro vezes menor que o carrinho vazio.",
      "Nenhum dos carrinhos necessita de qualquer força para acelerar.",
      "O carrinho carregado exige uma força resultante quatro vezes maior do que o carrinho vazio."
    ],
    "correctIndex": 3,
    "explanation": "Como F = m·a, para a mesma aceleração 'a', a força é proporcional à massa. 80 kg / 20 kg = 4 vezes mais força.",
    "distractorAnalysis": [
      "Está incorreta: A mesma força sobre massas diferentes produz acelerações diferentes (inversamente proporcionais).",
      "Está incorreta: Uma massa maior exige maior força, e nunca menor força, para atingir a mesma aceleração.",
      "Está incorreta: Qualquer alteração de velocidade (aceleração) exige obrigatoriamente uma força resultante não nula."
    ],
    "nursingApplication": "Mostra a necessidade de maior esforço muscular ao transportar equipamentos com carga pesada."
  },
  {
    "id": 1132,
    "topicId": 1,
    "question": "Qual é a unidade da grandeza Aceleração no Sistema Internacional (SI)?",
    "options": [
      "Metros por segundo ao quadrado (m/s²).",
      "Metros por segundo (m/s).",
      "Newtons por quilograma ao cubo (N/kg³).",
      "Quilogramas por metro (kg/m)."
    ],
    "correctIndex": 0,
    "explanation": "A aceleração é a taxa de variação da velocidade no tempo: (m/s) / s = m/s².",
    "distractorAnalysis": [
      "Está incorreta: Metros por segundo (m/s) é a unidade de velocidade, não de aceleração.",
      "Está incorreta: N/kg é equivalente a m/s² (pela 2ª Lei), mas N/kg³ é uma unidade dimensionalmente incorreta.",
      "Está incorreta: Quilogramas por metro (kg/m) é densidade linear de massa, não aceleração."
    ],
    "nursingApplication": "Compreender a unidade de aceleração evita confusões entre velocidade (m/s) e aceleração (m/s²)."
  },
  {
    "id": 1133,
    "topicId": 1,
    "question": "Qual é a força resultante necessária para acelerar um carrinho de massa 30 kg a uma aceleração de 0.5 m/s²?",
    "options": [
      "30.5 N.",
      "15.0 N.",
      "60.0 N.",
      "15.0 kg."
    ],
    "correctIndex": 1,
    "explanation": "Pela 2ª Lei de Newton: Fr = m · a = 30 kg · 0.5 m/s² = 15.0 N.",
    "distractorAnalysis": [
      "Está incorreta: Somar a massa com a aceleração viola a fórmula da 2ª Lei de Newton (Fr = m · a).",
      "Está incorreta: Dividir a massa pela aceleração não fornece a intensidade da força resultante.",
      "Está incorreta: O valor numérico está correto, mas a unidade de força é o Newton (N) e não o quilograma (kg)."
    ],
    "nursingApplication": "Permite calcular a força exata necessária para empurrar e acelerar um carrinho de transporte."
  },
  {
    "id": 1134,
    "topicId": 1,
    "question": "Se uma força resultante de 35.0 N for aplicada sobre uma massa de 35 kg, qual será a aceleração adquirida?",
    "options": [
      "1225.0 m/s².",
      "1.0 m/s².",
      "1.0 m/s².",
      "1.0 N."
    ],
    "correctIndex": 2,
    "explanation": "Pela 2ª Lei de Newton, a = Fr / m: 35.0 N / 35 kg = 1.0 m/s².",
    "distractorAnalysis": [
      "Está incorreta: Multiplicar a força pela massa resultaria em unidades de N·kg, o que está incorreto.",
      "Está incorreta: Dividir a massa pela força é o inverso da aceleração (1/a).",
      "Está incorreta: A aceleração mede-se em m/s² no SI, e não em Newtons (N), que é a unidade de força."
    ],
    "nursingApplication": "Mostra como a aceleração de um equipamento diminui à medida que a sua massa aumenta."
  },
  {
    "id": 1135,
    "topicId": 1,
    "question": "De acordo com a 2ª Lei de Newton (F = m·a), se a massa de um corpo duplicar e a força aplicada se mantiver constante, a aceleração:",
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
      "Está incorreta: A aceleração não se mantém inalterada porque depende inversamente da massa do corpo."
    ],
    "nursingApplication": "Ao duplicar a carga numa maca, a mesma força muscular produzirá apenas metade da aceleração."
  },
  {
    "id": 1136,
    "topicId": 1,
    "question": "Se a força resultante aplicada sobre um carrinho triplicar mantendo-se a sua massa inalterada, o que acontece à aceleração?",
    "options": [
      "Triplica na mesma proporção.",
      "Reduz-se a um terço.",
      "Permanece constante.",
      "Passa a ser nula."
    ],
    "correctIndex": 0,
    "explanation": "A aceleração é diretamente proporcional à força resultante (a ∝ F). Triplicando a força, a aceleração triplica.",
    "distractorAnalysis": [
      "Está incorreta: A aceleração só se reduziria a um terço se a massa triplicasse mantendo-se a força constante.",
      "Está incorreta: A aceleração não fica constante quando a força resultante varia.",
      "Está incorreta: A aceleração só seria nula se a força resultante fosse igual a zero."
    ],
    "nursingApplication": "Empurrar com mais intensidade produz uma aceleração proporcionalmente mais rápida do carrinho."
  },
  {
    "id": 1137,
    "topicId": 1,
    "question": "O que afirma a 2ª Lei de Newton (Lei Fundamental da Dinâmica)?",
    "options": [
      "A energia mecânica total de um sistema dissipa-se sempre sob a forma de calor espontâneo.",
      "A força resultante que atua sobre um corpo é diretamente proporcional à sua massa e à aceleração que ele adquire.",
      "A velocidade de um corpo é independente de qualquer força que atue sobre as suas superfícies.",
      "Dois corpos em contacto atraem-se com força inversamente proporcional ao cubo da sua temperatura."
    ],
    "correctIndex": 1,
    "explanation": "A 2ª Lei estabelece a relação quantitativa fundamental da dinâmica clássica: Fr = m · a.",
    "distractorAnalysis": [
      "Está incorreta: Essa afirmação remete para o segundo princípio da termodinâmica, não para a 2ª Lei de Newton.",
      "Está incorreta: A velocidade é diretamente influenciada pela aceleração gerada pelas forças aplicadas.",
      "Está incorreta: A atração entre corpos depende da gravidade e massas, não da temperatura cúbica."
    ],
    "nursingApplication": "Fundamento para calcular as forças requeridas para mover massas na rotina física hospitalar."
  },
  {
    "id": 1138,
    "topicId": 1,
    "question": "Para travar e parar uma maca de 100 kg que se move a 2 m/s no espaço de 1 segundo (desaceleração a = 2 m/s²), que força média de travagem é necessária?",
    "options": [
      "50 N.",
      "100 N.",
      "200 N.",
      "500 N."
    ],
    "correctIndex": 2,
    "explanation": "Pela 2ª Lei de Newton: F = m · a = 100 kg · 2 m/s² = 200 N no sentido oposto ao movimento.",
    "distractorAnalysis": [
      "Está incorreta: 50 N resultaria de dividir 100 kg por 2 m/s², o que não corresponde à fórmula F = m · a.",
      "Está incorreta: 100 N seria a força se a aceleração fosse de apenas 1 m/s².",
      "Está incorreta: 500 N superaria significativamente o valor dado pelo produto da massa pela desaceleração."
    ],
    "nursingApplication": "Ilustra a força que as mãos devem exercer sobre a pega da maca para a imobilizar com segurança."
  },
  {
    "id": 1139,
    "topicId": 1,
    "question": "Se um carrinho vazio tem massa de 20 kg e um carrinho carregado tem massa de 80 kg, para obter a mesma aceleração em ambos:",
    "options": [
      "O carrinho carregado exige a mesma força exata que o carrinho vazio.",
      "O carrinho carregado exige uma força quatro vezes menor que o carrinho vazio.",
      "Nenhum dos carrinhos necessita de qualquer força para acelerar.",
      "O carrinho carregado exige uma força resultante quatro vezes maior do que o carrinho vazio."
    ],
    "correctIndex": 3,
    "explanation": "Como F = m·a, para a mesma aceleração 'a', a força é proporcional à massa. 80 kg / 20 kg = 4 vezes mais força.",
    "distractorAnalysis": [
      "Está incorreta: A mesma força sobre massas diferentes produz acelerações diferentes (inversamente proporcionais).",
      "Está incorreta: Uma massa maior exige maior força, e nunca menor força, para atingir a mesma aceleração.",
      "Está incorreta: Qualquer alteração de velocidade (aceleração) exige obrigatoriamente uma força resultante não nula."
    ],
    "nursingApplication": "Mostra a necessidade de maior esforço muscular ao transportar equipamentos com carga pesada."
  },
  {
    "id": 1140,
    "topicId": 1,
    "question": "Qual é a unidade da grandeza Aceleração no Sistema Internacional (SI)?",
    "options": [
      "Metros por segundo ao quadrado (m/s²).",
      "Metros por segundo (m/s).",
      "Newtons por quilograma ao cubo (N/kg³).",
      "Quilogramas por metro (kg/m)."
    ],
    "correctIndex": 0,
    "explanation": "A aceleração é a taxa de variação da velocidade no tempo: (m/s) / s = m/s².",
    "distractorAnalysis": [
      "Está incorreta: Metros por segundo (m/s) é a unidade de velocidade, não de aceleração.",
      "Está incorreta: N/kg é equivalente a m/s² (pela 2ª Lei), mas N/kg³ é uma unidade dimensionalmente incorreta.",
      "Está incorreta: Quilogramas por metro (kg/m) é densidade linear de massa, não aceleração."
    ],
    "nursingApplication": "Compreender a unidade de aceleração evita confusões entre velocidade (m/s) e aceleração (m/s²)."
  },
  {
    "id": 1141,
    "topicId": 1,
    "question": "Qual é a força resultante necessária para acelerar um carrinho de massa 20 kg a uma aceleração de 0.5 m/s²?",
    "options": [
      "20.5 N.",
      "10.0 N.",
      "40.0 N.",
      "10.0 kg."
    ],
    "correctIndex": 1,
    "explanation": "Pela 2ª Lei de Newton: Fr = m · a = 20 kg · 0.5 m/s² = 10.0 N.",
    "distractorAnalysis": [
      "Está incorreta: Somar a massa com a aceleração viola a fórmula da 2ª Lei de Newton (Fr = m · a).",
      "Está incorreta: Dividir a massa pela aceleração não fornece a intensidade da força resultante.",
      "Está incorreta: O valor numérico está correto, mas a unidade de força é o Newton (N) e não o quilograma (kg)."
    ],
    "nursingApplication": "Permite calcular a força exata necessária para empurrar e acelerar um carrinho de transporte."
  },
  {
    "id": 1142,
    "topicId": 1,
    "question": "Se uma força resultante de 25.0 N for aplicada sobre uma massa de 25 kg, qual será a aceleração adquirida?",
    "options": [
      "625.0 m/s².",
      "1.0 m/s².",
      "1.0 m/s².",
      "1.0 N."
    ],
    "correctIndex": 2,
    "explanation": "Pela 2ª Lei de Newton, a = Fr / m: 25.0 N / 25 kg = 1.0 m/s².",
    "distractorAnalysis": [
      "Está incorreta: Multiplicar a força pela massa resultaria em unidades de N·kg, o que está incorreto.",
      "Está incorreta: Dividir a massa pela força é o inverso da aceleração (1/a).",
      "Está incorreta: A aceleração mede-se em m/s² no SI, e não em Newtons (N), que é a unidade de força."
    ],
    "nursingApplication": "Mostra como a aceleração de um equipamento diminui à medida que a sua massa aumenta."
  },
  {
    "id": 1143,
    "topicId": 1,
    "question": "De acordo com a 2ª Lei de Newton (F = m·a), se a massa de um corpo duplicar e a força aplicada se mantiver constante, a aceleração:",
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
      "Está incorreta: A aceleração não se mantém inalterada porque depende inversamente da massa do corpo."
    ],
    "nursingApplication": "Ao duplicar a carga numa maca, a mesma força muscular produzirá apenas metade da aceleração."
  },
  {
    "id": 1144,
    "topicId": 1,
    "question": "Se a força resultante aplicada sobre um carrinho triplicar mantendo-se a sua massa inalterada, o que acontece à aceleração?",
    "options": [
      "Triplica na mesma proporção.",
      "Reduz-se a um terço.",
      "Permanece constante.",
      "Passa a ser nula."
    ],
    "correctIndex": 0,
    "explanation": "A aceleração é diretamente proporcional à força resultante (a ∝ F). Triplicando a força, a aceleração triplica.",
    "distractorAnalysis": [
      "Está incorreta: A aceleração só se reduziria a um terço se a massa triplicasse mantendo-se a força constante.",
      "Está incorreta: A aceleração não fica constante quando a força resultante varia.",
      "Está incorreta: A aceleração só seria nula se a força resultante fosse igual a zero."
    ],
    "nursingApplication": "Empurrar com mais intensidade produz uma aceleração proporcionalmente mais rápida do carrinho."
  },
  {
    "id": 1145,
    "topicId": 1,
    "question": "O que afirma a 2ª Lei de Newton (Lei Fundamental da Dinâmica)?",
    "options": [
      "A energia mecânica total de um sistema dissipa-se sempre sob a forma de calor espontâneo.",
      "A força resultante que atua sobre um corpo é diretamente proporcional à sua massa e à aceleração que ele adquire.",
      "A velocidade de um corpo é independente de qualquer força que atue sobre as suas superfícies.",
      "Dois corpos em contacto atraem-se com força inversamente proporcional ao cubo da sua temperatura."
    ],
    "correctIndex": 1,
    "explanation": "A 2ª Lei estabelece a relação quantitativa fundamental da dinâmica clássica: Fr = m · a.",
    "distractorAnalysis": [
      "Está incorreta: Essa afirmação remete para o segundo princípio da termodinâmica, não para a 2ª Lei de Newton.",
      "Está incorreta: A velocidade é diretamente influenciada pela aceleração gerada pelas forças aplicadas.",
      "Está incorreta: A atração entre corpos depende da gravidade e massas, não da temperatura cúbica."
    ],
    "nursingApplication": "Fundamento para calcular as forças requeridas para mover massas na rotina física hospitalar."
  },
  {
    "id": 1146,
    "topicId": 1,
    "question": "Para travar e parar uma maca de 100 kg que se move a 2 m/s no espaço de 1 segundo (desaceleração a = 2 m/s²), que força média de travagem é necessária?",
    "options": [
      "50 N.",
      "100 N.",
      "200 N.",
      "500 N."
    ],
    "correctIndex": 2,
    "explanation": "Pela 2ª Lei de Newton: F = m · a = 100 kg · 2 m/s² = 200 N no sentido oposto ao movimento.",
    "distractorAnalysis": [
      "Está incorreta: 50 N resultaria de dividir 100 kg por 2 m/s², o que não corresponde à fórmula F = m · a.",
      "Está incorreta: 100 N seria a força se a aceleração fosse de apenas 1 m/s².",
      "Está incorreta: 500 N superaria significativamente o valor dado pelo produto da massa pela desaceleração."
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
      "Nenhum dos carrinhos necessita de qualquer força para acelerar.",
      "O carrinho carregado exige uma força resultante quatro vezes maior do que o carrinho vazio."
    ],
    "correctIndex": 3,
    "explanation": "Como F = m·a, para a mesma aceleração 'a', a força é proporcional à massa. 80 kg / 20 kg = 4 vezes mais força.",
    "distractorAnalysis": [
      "Está incorreta: A mesma força sobre massas diferentes produz acelerações diferentes (inversamente proporcionais).",
      "Está incorreta: Uma massa maior exige maior força, e nunca menor força, para atingir a mesma aceleração.",
      "Está incorreta: Qualquer alteração de velocidade (aceleração) exige obrigatoriamente uma força resultante não nula."
    ],
    "nursingApplication": "Mostra a necessidade de maior esforço muscular ao transportar equipamentos com carga pesada."
  },
  {
    "id": 1148,
    "topicId": 1,
    "question": "Qual é a unidade da grandeza Aceleração no Sistema Internacional (SI)?",
    "options": [
      "Metros por segundo ao quadrado (m/s²).",
      "Metros por segundo (m/s).",
      "Newtons por quilograma ao cubo (N/kg³).",
      "Quilogramas por metro (kg/m)."
    ],
    "correctIndex": 0,
    "explanation": "A aceleração é a taxa de variação da velocidade no tempo: (m/s) / s = m/s².",
    "distractorAnalysis": [
      "Está incorreta: Metros por segundo (m/s) é a unidade de velocidade, não de aceleração.",
      "Está incorreta: N/kg é equivalente a m/s² (pela 2ª Lei), mas N/kg³ é uma unidade dimensionalmente incorreta.",
      "Está incorreta: Quilogramas por metro (kg/m) é densidade linear de massa, não aceleração."
    ],
    "nursingApplication": "Compreender a unidade de aceleração evita confusões entre velocidade (m/s) e aceleração (m/s²)."
  },
  {
    "id": 1149,
    "topicId": 1,
    "question": "Qual é a força resultante necessária para acelerar um carrinho de massa 60 kg a uma aceleração de 0.5 m/s²?",
    "options": [
      "60.5 N.",
      "30.0 N.",
      "120.0 N.",
      "30.0 kg."
    ],
    "correctIndex": 1,
    "explanation": "Pela 2ª Lei de Newton: Fr = m · a = 60 kg · 0.5 m/s² = 30.0 N.",
    "distractorAnalysis": [
      "Está incorreta: Somar a massa com a aceleração viola a fórmula da 2ª Lei de Newton (Fr = m · a).",
      "Está incorreta: Dividir a massa pela aceleração não fornece a intensidade da força resultante.",
      "Está incorreta: O valor numérico está correto, mas a unidade de força é o Newton (N) e não o quilograma (kg)."
    ],
    "nursingApplication": "Permite calcular a força exata necessária para empurrar e acelerar um carrinho de transporte."
  },
  {
    "id": 1150,
    "topicId": 1,
    "question": "Se uma força resultante de 65.0 N for aplicada sobre uma massa de 65 kg, qual será a aceleração adquirida?",
    "options": [
      "4225.0 m/s².",
      "1.0 m/s².",
      "1.0 m/s².",
      "1.0 N."
    ],
    "correctIndex": 2,
    "explanation": "Pela 2ª Lei de Newton, a = Fr / m: 65.0 N / 65 kg = 1.0 m/s².",
    "distractorAnalysis": [
      "Está incorreta: Multiplicar a força pela massa resultaria em unidades de N·kg, o que está incorreto.",
      "Está incorreta: Dividir a massa pela força é o inverso da aceleração (1/a).",
      "Está incorreta: A aceleração mede-se em m/s² no SI, e não em Newtons (N), que é a unidade de força."
    ],
    "nursingApplication": "Mostra como a aceleração de um equipamento diminui à medida que a sua massa aumenta."
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
    "question": "Quando uma pessoa caminha num corredor empurrando o chão para trás com os pés, qual é a força que a projeta para a frente?",
    "options": [
      "A força da gravidade que atrai os pés diagonalmente para o teto da enfermaria.",
      "A força de reação normal e de atrito que o solo exerce sobre os pés da pessoa para a frente.",
      "A força de inércia interna produzida pela massa dos pulmões durante a expiração.",
      "A força eletrostática de repulsão entre as meias e as calças da farda."
    ],
    "correctIndex": 1,
    "explanation": "Pela 3ª Lei de Newton, ao empurrar o chão para trás, o chão reage com força de igual intensidade sobre os pés para a frente.",
    "distractorAnalysis": [
      "Está incorreta: A gravidade atua estritamente na vertical e para baixo, não propulsionando o corpo para a frente.",
      "Está incorreta: A inércia é uma resistência à alteração de movimento, não uma força de propulsão ativa.",
      "Está incorreta: A eletrostática nas roupas não gera forças de tração mecânica no contacto com o piso."
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
    "explanation": "O par de ação-reação do peso (Terra atrai pessoa) é a força gravitacional que a pessoa exerce sobre a Terra. A normal e o peso atuam ambos na pessoa.",
    "distractorAnalysis": [
      "Está incorreta: Ter a mesma intensidade e sentidos opostos é condição necessária para o equilíbrio de translação, mas não define par ação-reação.",
      "Está incorreta: A direção vertical não implica que as forças sejam pares de ação-reação mútuos.",
      "Está incorreta: Numa superfície horizontal estática, a normal tem intensidade rigorosamente igual ao peso (N = P)."
    ],
    "nursingApplication": "Conceito físico essencial para o desenho de superfícies de suporte e colchões adequados."
  },
  {
    "id": 1155,
    "topicId": 1,
    "question": "Se empurrares uma parede de alvenaria com uma força de 50 N para a frente, qual é a força que a parede exerce sobre as tuas mãos?",
    "options": [
      "0 N, porque a parede é fixa e não pode exercer nenhuma força mecânica.",
      "100 N, porque os materiais rígidos duplicam a força aplicada sobre eles.",
      "25 N, porque metade da força dissipa-se sob a forma de som nas fundações.",
      "50 N, orientada perpendicularmente para trás contra as mãos."
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
    "question": "Numa colisão frontal entre uma ambulância de 3000 kg e um carrinho de mão de 30 kg, como se comparam as intensidades das forças trocadas entre eles no impacto?",
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
    "nursingApplication": "Mostra que corpos de massas diferentes sentem a mesma força mútua durante uma colisão."
  },
  {
    "id": 1157,
    "topicId": 1,
    "question": "Quando uma caixa de soros de 10 kg repousa sobre uma mesa horizontal, que força a caixa exerce sobre a mesa?",
    "options": [
      "Uma força de tração ascendente de 98 N puxando a mesa em direção ao teto.",
      "Uma força de contacto dirigida verticalmente para baixo com intensidade igual a 98 N (o seu peso).",
      "Nenhuma força, porque os corpos estáticos em repouso perdem a capacidade de exercer força.",
      "Uma força horizontal de 10 N no sentido do norte magnético terrestre."
    ],
    "correctIndex": 1,
    "explanation": "A caixa empurra a mesa para baixo com uma força normal de compressão igual ao seu peso (P = 10 kg · 9,8 m/s² = 98 N).",
    "distractorAnalysis": [
      "Está incorreta: A força sobre a mesa é descendente (compressão), não uma tração ascendente.",
      "Está incorreta: Corpos em repouso continuam a exercer forças de contacto normais devido ao seu peso gravitacional.",
      "Está incorreta: A força gerada pela gravidade é vertical e descendente, sem qualquer componente horizontal magnética."
    ],
    "nursingApplication": "Permite dimensionar prateleiras e mesas de apoio para suportar o peso total dos materiais."
  },
  {
    "id": 1158,
    "topicId": 1,
    "question": "Se um enfermeiro puxa um cabo com uma força de 80 N, qual é a tensão sentida ao longo do cabo?",
    "options": [
      "160 N, somando as duas extremidades do cabo.",
      "40 N, dividindo a força pelas duas mãos do operador.",
      "80 N em toda a extensão do cabo de massa desprezável.",
      "0 N, pois a tração anula-se no centro do cabo."
    ],
    "correctIndex": 2,
    "explanation": "A tensão num cabo ideal (de massa desprezável) transmite integralmente a força aplicada de 80 N ao longo de toda a sua extensão.",
    "distractorAnalysis": [
      "Está incorreta: A tensão não é a soma das forças nas pontas; representa a força interna suportada pelo cabo (80 N).",
      "Está incorreta: Dividir por duas mãos não altera a força total de tração longitudinal transmitida pelo cabo.",
      "Está incorreta: A tensão não se anula no centro; é constante e uniforme ao longo do cabo esticado."
    ],
    "nursingApplication": "Aplicável a cabos de tração mecânica e sistemas de suspensão de membros em ortopedia."
  },
  {
    "id": 1159,
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
    "id": 1160,
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
    "id": 1161,
    "topicId": 1,
    "question": "Quando uma pessoa caminha num corredor empurrando o chão para trás com os pés, qual é a força que a projeta para a frente?",
    "options": [
      "A força da gravidade que atrai os pés diagonalmente para o teto da enfermaria.",
      "A força de reação normal e de atrito que o solo exerce sobre os pés da pessoa para a frente.",
      "A força de inércia interna produzida pela massa dos pulmões durante a expiração.",
      "A força eletrostática de repulsão entre as meias e as calças da farda."
    ],
    "correctIndex": 1,
    "explanation": "Pela 3ª Lei de Newton, ao empurrar o chão para trás, o chão reage com força de igual intensidade sobre os pés para a frente.",
    "distractorAnalysis": [
      "Está incorreta: A gravidade atua estritamente na vertical e para baixo, não propulsionando o corpo para a frente.",
      "Está incorreta: A inércia é uma resistência à alteração de movimento, não uma força de propulsão ativa.",
      "Está incorreta: A eletrostática nas roupas não gera forças de tração mecânica no contacto com o piso."
    ],
    "nursingApplication": "Fundamento biomecânico da marcha humana ao caminhar pelos corredores hospitalares."
  },
  {
    "id": 1162,
    "topicId": 1,
    "question": "A força normal (N) exercida pelo colchão de uma cama sobre uma pessoa deitada é o par de ação-reação do peso dessa pessoa?",
    "options": [
      "Sim, porque são forças com a mesma intensidade e sentidos opostos que atuam na mesma linha de ação.",
      "Sim, porque toda a força que atua na vertical forma automaticamente um par com a gravidade.",
      "Não, porque o peso e a força normal atuam sobre o mesmo corpo (a pessoa), enquanto os pares ação-reação atuam em corpos diferentes.",
      "Não, porque a força normal tem sempre uma intensidade dez vezes superior ao peso corporal."
    ],
    "correctIndex": 2,
    "explanation": "O par de ação-reação do peso (Terra atrai pessoa) é a força gravitacional que a pessoa exerce sobre a Terra. A normal e o peso atuam ambos na pessoa.",
    "distractorAnalysis": [
      "Está incorreta: Ter a mesma intensidade e sentidos opostos é condição necessária para o equilíbrio de translação, mas não define par ação-reação.",
      "Está incorreta: A direção vertical não implica que as forças sejam pares de ação-reação mútuos.",
      "Está incorreta: Numa superfície horizontal estática, a normal tem intensidade rigorosamente igual ao peso (N = P)."
    ],
    "nursingApplication": "Conceito físico essencial para o desenho de superfícies de suporte e colchões adequados."
  },
  {
    "id": 1163,
    "topicId": 1,
    "question": "Se empurrares uma parede de alvenaria com uma força de 50 N para a frente, qual é a força que a parede exerce sobre as tuas mãos?",
    "options": [
      "0 N, porque a parede é fixa e não pode exercer nenhuma força mecânica.",
      "100 N, porque os materiais rígidos duplicam a força aplicada sobre eles.",
      "25 N, porque metade da força dissipa-se sob a forma de som nas fundações.",
      "50 N, orientada perpendicularmente para trás contra as mãos."
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
    "id": 1164,
    "topicId": 1,
    "question": "Numa colisão frontal entre uma ambulância de 3000 kg e um carrinho de mão de 30 kg, como se comparam as intensidades das forças trocadas entre eles no impacto?",
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
    "nursingApplication": "Mostra que corpos de massas diferentes sentem a mesma força mútua durante uma colisão."
  },
  {
    "id": 1165,
    "topicId": 1,
    "question": "Quando uma caixa de soros de 10 kg repousa sobre uma mesa horizontal, que força a caixa exerce sobre a mesa?",
    "options": [
      "Uma força de tração ascendente de 98 N puxando a mesa em direção ao teto.",
      "Uma força de contacto dirigida verticalmente para baixo com intensidade igual a 98 N (o seu peso).",
      "Nenhuma força, porque os corpos estáticos em repouso perdem a capacidade de exercer força.",
      "Uma força horizontal de 10 N no sentido do norte magnético terrestre."
    ],
    "correctIndex": 1,
    "explanation": "A caixa empurra a mesa para baixo com uma força normal de compressão igual ao seu peso (P = 10 kg · 9,8 m/s² = 98 N).",
    "distractorAnalysis": [
      "Está incorreta: A força sobre a mesa é descendente (compressão), não uma tração ascendente.",
      "Está incorreta: Corpos em repouso continuam a exercer forças de contacto normais devido ao seu peso gravitacional.",
      "Está incorreta: A força gerada pela gravidade é vertical e descendente, sem qualquer componente horizontal magnética."
    ],
    "nursingApplication": "Permite dimensionar prateleiras e mesas de apoio para suportar o peso total dos materiais."
  },
  {
    "id": 1166,
    "topicId": 1,
    "question": "Se um enfermeiro puxa um cabo com uma força de 80 N, qual é a tensão sentida ao longo do cabo?",
    "options": [
      "160 N, somando as duas extremidades do cabo.",
      "40 N, dividindo a força pelas duas mãos do operador.",
      "80 N em toda a extensão do cabo de massa desprezável.",
      "0 N, pois a tração anula-se no centro do cabo."
    ],
    "correctIndex": 2,
    "explanation": "A tensão num cabo ideal (de massa desprezável) transmite integralmente a força aplicada de 80 N ao longo de toda a sua extensão.",
    "distractorAnalysis": [
      "Está incorreta: A tensão não é a soma das forças nas pontas; representa a força interna suportada pelo cabo (80 N).",
      "Está incorreta: Dividir por duas mãos não altera a força total de tração longitudinal transmitida pelo cabo.",
      "Está incorreta: A tensão não se anula no centro; é constante e uniforme ao longo do cabo esticado."
    ],
    "nursingApplication": "Aplicável a cabos de tração mecânica e sistemas de suspensão de membros em ortopedia."
  },
  {
    "id": 1167,
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
    "id": 1168,
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
    "id": 1169,
    "topicId": 1,
    "question": "Quando uma pessoa caminha num corredor empurrando o chão para trás com os pés, qual é a força que a projeta para a frente?",
    "options": [
      "A força da gravidade que atrai os pés diagonalmente para o teto da enfermaria.",
      "A força de reação normal e de atrito que o solo exerce sobre os pés da pessoa para a frente.",
      "A força de inércia interna produzida pela massa dos pulmões durante a expiração.",
      "A força eletrostática de repulsão entre as meias e as calças da farda."
    ],
    "correctIndex": 1,
    "explanation": "Pela 3ª Lei de Newton, ao empurrar o chão para trás, o chão reage com força de igual intensidade sobre os pés para a frente.",
    "distractorAnalysis": [
      "Está incorreta: A gravidade atua estritamente na vertical e para baixo, não propulsionando o corpo para a frente.",
      "Está incorreta: A inércia é uma resistência à alteração de movimento, não uma força de propulsão ativa.",
      "Está incorreta: A eletrostática nas roupas não gera forças de tração mecânica no contacto com o piso."
    ],
    "nursingApplication": "Fundamento biomecânico da marcha humana ao caminhar pelos corredores hospitalares."
  },
  {
    "id": 1170,
    "topicId": 1,
    "question": "A força normal (N) exercida pelo colchão de uma cama sobre uma pessoa deitada é o par de ação-reação do peso dessa pessoa?",
    "options": [
      "Sim, porque são forças com a mesma intensidade e sentidos opostos que atuam na mesma linha de ação.",
      "Sim, porque toda a força que atua na vertical forma automaticamente um par com a gravidade.",
      "Não, porque o peso e a força normal atuam sobre o mesmo corpo (a pessoa), enquanto os pares ação-reação atuam em corpos diferentes.",
      "Não, porque a força normal tem sempre uma intensidade dez vezes superior ao peso corporal."
    ],
    "correctIndex": 2,
    "explanation": "O par de ação-reação do peso (Terra atrai pessoa) é a força gravitacional que a pessoa exerce sobre a Terra. A normal e o peso atuam ambos na pessoa.",
    "distractorAnalysis": [
      "Está incorreta: Ter a mesma intensidade e sentidos opostos é condição necessária para o equilíbrio de translação, mas não define par ação-reação.",
      "Está incorreta: A direção vertical não implica que as forças sejam pares de ação-reação mútuos.",
      "Está incorreta: Numa superfície horizontal estática, a normal tem intensidade rigorosamente igual ao peso (N = P)."
    ],
    "nursingApplication": "Conceito físico essencial para o desenho de superfícies de suporte e colchões adequados."
  },
  {
    "id": 1171,
    "topicId": 1,
    "question": "Se empurrares uma parede de alvenaria com uma força de 50 N para a frente, qual é a força que a parede exerce sobre as tuas mãos?",
    "options": [
      "0 N, porque a parede é fixa e não pode exercer nenhuma força mecânica.",
      "100 N, porque os materiais rígidos duplicam a força aplicada sobre eles.",
      "25 N, porque metade da força dissipa-se sob a forma de som nas fundações.",
      "50 N, orientada perpendicularmente para trás contra as mãos."
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
    "id": 1172,
    "topicId": 1,
    "question": "Numa colisão frontal entre uma ambulância de 3000 kg e um carrinho de mão de 30 kg, como se comparam as intensidades das forças trocadas entre eles no impacto?",
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
    "nursingApplication": "Mostra que corpos de massas diferentes sentem a mesma força mútua durante uma colisão."
  },
  {
    "id": 1173,
    "topicId": 1,
    "question": "Quando uma caixa de soros de 10 kg repousa sobre uma mesa horizontal, que força a caixa exerce sobre a mesa?",
    "options": [
      "Uma força de tração ascendente de 98 N puxando a mesa em direção ao teto.",
      "Uma força de contacto dirigida verticalmente para baixo com intensidade igual a 98 N (o seu peso).",
      "Nenhuma força, porque os corpos estáticos em repouso perdem a capacidade de exercer força.",
      "Uma força horizontal de 10 N no sentido do norte magnético terrestre."
    ],
    "correctIndex": 1,
    "explanation": "A caixa empurra a mesa para baixo com uma força normal de compressão igual ao seu peso (P = 10 kg · 9,8 m/s² = 98 N).",
    "distractorAnalysis": [
      "Está incorreta: A força sobre a mesa é descendente (compressão), não uma tração ascendente.",
      "Está incorreta: Corpos em repouso continuam a exercer forças de contacto normais devido ao seu peso gravitacional.",
      "Está incorreta: A força gerada pela gravidade é vertical e descendente, sem qualquer componente horizontal magnética."
    ],
    "nursingApplication": "Permite dimensionar prateleiras e mesas de apoio para suportar o peso total dos materiais."
  },
  {
    "id": 1174,
    "topicId": 1,
    "question": "Se um enfermeiro puxa um cabo com uma força de 80 N, qual é a tensão sentida ao longo do cabo?",
    "options": [
      "160 N, somando as duas extremidades do cabo.",
      "40 N, dividindo a força pelas duas mãos do operador.",
      "80 N em toda a extensão do cabo de massa desprezável.",
      "0 N, pois a tração anula-se no centro do cabo."
    ],
    "correctIndex": 2,
    "explanation": "A tensão num cabo ideal (de massa desprezável) transmite integralmente a força aplicada de 80 N ao longo de toda a sua extensão.",
    "distractorAnalysis": [
      "Está incorreta: A tensão não é a soma das forças nas pontas; representa a força interna suportada pelo cabo (80 N).",
      "Está incorreta: Dividir por duas mãos não altera a força total de tração longitudinal transmitida pelo cabo.",
      "Está incorreta: A tensão não se anula no centro; é constante e uniforme ao longo do cabo esticado."
    ],
    "nursingApplication": "Aplicável a cabos de tração mecânica e sistemas de suspensão de membros em ortopedia."
  },
  {
    "id": 1175,
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
    "id": 1176,
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
    "id": 1177,
    "topicId": 1,
    "question": "Quando uma pessoa caminha num corredor empurrando o chão para trás com os pés, qual é a força que a projeta para a frente?",
    "options": [
      "A força da gravidade que atrai os pés diagonalmente para o teto da enfermaria.",
      "A força de reação normal e de atrito que o solo exerce sobre os pés da pessoa para a frente.",
      "A força de inércia interna produzida pela massa dos pulmões durante a expiração.",
      "A força eletrostática de repulsão entre as meias e as calças da farda."
    ],
    "correctIndex": 1,
    "explanation": "Pela 3ª Lei de Newton, ao empurrar o chão para trás, o chão reage com força de igual intensidade sobre os pés para a frente.",
    "distractorAnalysis": [
      "Está incorreta: A gravidade atua estritamente na vertical e para baixo, não propulsionando o corpo para a frente.",
      "Está incorreta: A inércia é uma resistência à alteração de movimento, não uma força de propulsão ativa.",
      "Está incorreta: A eletrostática nas roupas não gera forças de tração mecânica no contacto com o piso."
    ],
    "nursingApplication": "Fundamento biomecânico da marcha humana ao caminhar pelos corredores hospitalares."
  },
  {
    "id": 1178,
    "topicId": 1,
    "question": "A força normal (N) exercida pelo colchão de uma cama sobre uma pessoa deitada é o par de ação-reação do peso dessa pessoa?",
    "options": [
      "Sim, porque são forças com a mesma intensidade e sentidos opostos que atuam na mesma linha de ação.",
      "Sim, porque toda a força que atua na vertical forma automaticamente um par com a gravidade.",
      "Não, porque o peso e a força normal atuam sobre o mesmo corpo (a pessoa), enquanto os pares ação-reação atuam em corpos diferentes.",
      "Não, porque a força normal tem sempre uma intensidade dez vezes superior ao peso corporal."
    ],
    "correctIndex": 2,
    "explanation": "O par de ação-reação do peso (Terra atrai pessoa) é a força gravitacional que a pessoa exerce sobre a Terra. A normal e o peso atuam ambos na pessoa.",
    "distractorAnalysis": [
      "Está incorreta: Ter a mesma intensidade e sentidos opostos é condição necessária para o equilíbrio de translação, mas não define par ação-reação.",
      "Está incorreta: A direção vertical não implica que as forças sejam pares de ação-reação mútuos.",
      "Está incorreta: Numa superfície horizontal estática, a normal tem intensidade rigorosamente igual ao peso (N = P)."
    ],
    "nursingApplication": "Conceito físico essencial para o desenho de superfícies de suporte e colchões adequados."
  },
  {
    "id": 1179,
    "topicId": 1,
    "question": "Se empurrares uma parede de alvenaria com uma força de 50 N para a frente, qual é a força que a parede exerce sobre as tuas mãos?",
    "options": [
      "0 N, porque a parede é fixa e não pode exercer nenhuma força mecânica.",
      "100 N, porque os materiais rígidos duplicam a força aplicada sobre eles.",
      "25 N, porque metade da força dissipa-se sob a forma de som nas fundações.",
      "50 N, orientada perpendicularmente para trás contra as mãos."
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
    "id": 1180,
    "topicId": 1,
    "question": "Numa colisão frontal entre uma ambulância de 3000 kg e um carrinho de mão de 30 kg, como se comparam as intensidades das forças trocadas entre eles no impacto?",
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
    "nursingApplication": "Mostra que corpos de massas diferentes sentem a mesma força mútua durante uma colisão."
  },
  {
    "id": 1181,
    "topicId": 1,
    "question": "Quando uma caixa de soros de 10 kg repousa sobre uma mesa horizontal, que força a caixa exerce sobre a mesa?",
    "options": [
      "Uma força de tração ascendente de 98 N puxando a mesa em direção ao teto.",
      "Uma força de contacto dirigida verticalmente para baixo com intensidade igual a 98 N (o seu peso).",
      "Nenhuma força, porque os corpos estáticos em repouso perdem a capacidade de exercer força.",
      "Uma força horizontal de 10 N no sentido do norte magnético terrestre."
    ],
    "correctIndex": 1,
    "explanation": "A caixa empurra a mesa para baixo com uma força normal de compressão igual ao seu peso (P = 10 kg · 9,8 m/s² = 98 N).",
    "distractorAnalysis": [
      "Está incorreta: A força sobre a mesa é descendente (compressão), não uma tração ascendente.",
      "Está incorreta: Corpos em repouso continuam a exercer forças de contacto normais devido ao seu peso gravitacional.",
      "Está incorreta: A força gerada pela gravidade é vertical e descendente, sem qualquer componente horizontal magnética."
    ],
    "nursingApplication": "Permite dimensionar prateleiras e mesas de apoio para suportar o peso total dos materiais."
  },
  {
    "id": 1182,
    "topicId": 1,
    "question": "Se um enfermeiro puxa um cabo com uma força de 80 N, qual é a tensão sentida ao longo do cabo?",
    "options": [
      "160 N, somando as duas extremidades do cabo.",
      "40 N, dividindo a força pelas duas mãos do operador.",
      "80 N em toda a extensão do cabo de massa desprezável.",
      "0 N, pois a tração anula-se no centro do cabo."
    ],
    "correctIndex": 2,
    "explanation": "A tensão num cabo ideal (de massa desprezável) transmite integralmente a força aplicada de 80 N ao longo de toda a sua extensão.",
    "distractorAnalysis": [
      "Está incorreta: A tensão não é a soma das forças nas pontas; representa a força interna suportada pelo cabo (80 N).",
      "Está incorreta: Dividir por duas mãos não altera a força total de tração longitudinal transmitida pelo cabo.",
      "Está incorreta: A tensão não se anula no centro; é constante e uniforme ao longo do cabo esticado."
    ],
    "nursingApplication": "Aplicável a cabos de tração mecânica e sistemas de suspensão de membros em ortopedia."
  },
  {
    "id": 1183,
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
    "id": 1184,
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
    "id": 1185,
    "topicId": 1,
    "question": "Quando uma pessoa caminha num corredor empurrando o chão para trás com os pés, qual é a força que a projeta para a frente?",
    "options": [
      "A força da gravidade que atrai os pés diagonalmente para o teto da enfermaria.",
      "A força de reação normal e de atrito que o solo exerce sobre os pés da pessoa para a frente.",
      "A força de inércia interna produzida pela massa dos pulmões durante a expiração.",
      "A força eletrostática de repulsão entre as meias e as calças da farda."
    ],
    "correctIndex": 1,
    "explanation": "Pela 3ª Lei de Newton, ao empurrar o chão para trás, o chão reage com força de igual intensidade sobre os pés para a frente.",
    "distractorAnalysis": [
      "Está incorreta: A gravidade atua estritamente na vertical e para baixo, não propulsionando o corpo para a frente.",
      "Está incorreta: A inércia é uma resistência à alteração de movimento, não uma força de propulsão ativa.",
      "Está incorreta: A eletrostática nas roupas não gera forças de tração mecânica no contacto com o piso."
    ],
    "nursingApplication": "Fundamento biomecânico da marcha humana ao caminhar pelos corredores hospitalares."
  },
  {
    "id": 1186,
    "topicId": 1,
    "question": "A força normal (N) exercida pelo colchão de uma cama sobre uma pessoa deitada é o par de ação-reação do peso dessa pessoa?",
    "options": [
      "Sim, porque são forças com a mesma intensidade e sentidos opostos que atuam na mesma linha de ação.",
      "Sim, porque toda a força que atua na vertical forma automaticamente um par com a gravidade.",
      "Não, porque o peso e a força normal atuam sobre o mesmo corpo (a pessoa), enquanto os pares ação-reação atuam em corpos diferentes.",
      "Não, porque a força normal tem sempre uma intensidade dez vezes superior ao peso corporal."
    ],
    "correctIndex": 2,
    "explanation": "O par de ação-reação do peso (Terra atrai pessoa) é a força gravitacional que a pessoa exerce sobre a Terra. A normal e o peso atuam ambos na pessoa.",
    "distractorAnalysis": [
      "Está incorreta: Ter a mesma intensidade e sentidos opostos é condição necessária para o equilíbrio de translação, mas não define par ação-reação.",
      "Está incorreta: A direção vertical não implica que as forças sejam pares de ação-reação mútuos.",
      "Está incorreta: Numa superfície horizontal estática, a normal tem intensidade rigorosamente igual ao peso (N = P)."
    ],
    "nursingApplication": "Conceito físico essencial para o desenho de superfícies de suporte e colchões adequados."
  },
  {
    "id": 1187,
    "topicId": 1,
    "question": "Se empurrares uma parede de alvenaria com uma força de 50 N para a frente, qual é a força que a parede exerce sobre as tuas mãos?",
    "options": [
      "0 N, porque a parede é fixa e não pode exercer nenhuma força mecânica.",
      "100 N, porque os materiais rígidos duplicam a força aplicada sobre eles.",
      "25 N, porque metade da força dissipa-se sob a forma de som nas fundações.",
      "50 N, orientada perpendicularmente para trás contra as mãos."
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
    "id": 1188,
    "topicId": 1,
    "question": "Numa colisão frontal entre uma ambulância de 3000 kg e um carrinho de mão de 30 kg, como se comparam as intensidades das forças trocadas entre eles no impacto?",
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
    "nursingApplication": "Mostra que corpos de massas diferentes sentem a mesma força mútua durante uma colisão."
  },
  {
    "id": 1189,
    "topicId": 1,
    "question": "Quando uma caixa de soros de 10 kg repousa sobre uma mesa horizontal, que força a caixa exerce sobre a mesa?",
    "options": [
      "Uma força de tração ascendente de 98 N puxando a mesa em direção ao teto.",
      "Uma força de contacto dirigida verticalmente para baixo com intensidade igual a 98 N (o seu peso).",
      "Nenhuma força, porque os corpos estáticos em repouso perdem a capacidade de exercer força.",
      "Uma força horizontal de 10 N no sentido do norte magnético terrestre."
    ],
    "correctIndex": 1,
    "explanation": "A caixa empurra a mesa para baixo com uma força normal de compressão igual ao seu peso (P = 10 kg · 9,8 m/s² = 98 N).",
    "distractorAnalysis": [
      "Está incorreta: A força sobre a mesa é descendente (compressão), não uma tração ascendente.",
      "Está incorreta: Corpos em repouso continuam a exercer forças de contacto normais devido ao seu peso gravitacional.",
      "Está incorreta: A força gerada pela gravidade é vertical e descendente, sem qualquer componente horizontal magnética."
    ],
    "nursingApplication": "Permite dimensionar prateleiras e mesas de apoio para suportar o peso total dos materiais."
  },
  {
    "id": 1190,
    "topicId": 1,
    "question": "Se um enfermeiro puxa um cabo com uma força de 80 N, qual é a tensão sentida ao longo do cabo?",
    "options": [
      "160 N, somando as duas extremidades do cabo.",
      "40 N, dividindo a força pelas duas mãos do operador.",
      "80 N em toda a extensão do cabo de massa desprezável.",
      "0 N, pois a tração anula-se no centro do cabo."
    ],
    "correctIndex": 2,
    "explanation": "A tensão num cabo ideal (de massa desprezável) transmite integralmente a força aplicada de 80 N ao longo de toda a sua extensão.",
    "distractorAnalysis": [
      "Está incorreta: A tensão não é a soma das forças nas pontas; representa a força interna suportada pelo cabo (80 N).",
      "Está incorreta: Dividir por duas mãos não altera a força total de tração longitudinal transmitida pelo cabo.",
      "Está incorreta: A tensão não se anula no centro; é constante e uniforme ao longo do cabo esticado."
    ],
    "nursingApplication": "Aplicável a cabos de tração mecânica e sistemas de suspensão de membros em ortopedia."
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
    "question": "Quando uma pessoa caminha num corredor empurrando o chão para trás com os pés, qual é a força que a projeta para a frente?",
    "options": [
      "A força da gravidade que atrai os pés diagonalmente para o teto da enfermaria.",
      "A força de reação normal e de atrito que o solo exerce sobre os pés da pessoa para a frente.",
      "A força de inércia interna produzida pela massa dos pulmões durante a expiração.",
      "A força eletrostática de repulsão entre as meias e as calças da farda."
    ],
    "correctIndex": 1,
    "explanation": "Pela 3ª Lei de Newton, ao empurrar o chão para trás, o chão reage com força de igual intensidade sobre os pés para a frente.",
    "distractorAnalysis": [
      "Está incorreta: A gravidade atua estritamente na vertical e para baixo, não propulsionando o corpo para a frente.",
      "Está incorreta: A inércia é uma resistência à alteração de movimento, não uma força de propulsão ativa.",
      "Está incorreta: A eletrostática nas roupas não gera forças de tração mecânica no contacto com o piso."
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
    "explanation": "O par de ação-reação do peso (Terra atrai pessoa) é a força gravitacional que a pessoa exerce sobre a Terra. A normal e o peso atuam ambos na pessoa.",
    "distractorAnalysis": [
      "Está incorreta: Ter a mesma intensidade e sentidos opostos é condição necessária para o equilíbrio de translação, mas não define par ação-reação.",
      "Está incorreta: A direção vertical não implica que as forças sejam pares de ação-reação mútuos.",
      "Está incorreta: Numa superfície horizontal estática, a normal tem intensidade rigorosamente igual ao peso (N = P)."
    ],
    "nursingApplication": "Conceito físico essencial para o desenho de superfícies de suporte e colchões adequados."
  },
  {
    "id": 1195,
    "topicId": 1,
    "question": "Se empurrares uma parede de alvenaria com uma força de 50 N para a frente, qual é a força que a parede exerce sobre as tuas mãos?",
    "options": [
      "0 N, porque a parede é fixa e não pode exercer nenhuma força mecânica.",
      "100 N, porque os materiais rígidos duplicam a força aplicada sobre eles.",
      "25 N, porque metade da força dissipa-se sob a forma de som nas fundações.",
      "50 N, orientada perpendicularmente para trás contra as mãos."
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
    "question": "Numa colisão frontal entre uma ambulância de 3000 kg e um carrinho de mão de 30 kg, como se comparam as intensidades das forças trocadas entre eles no impacto?",
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
    "nursingApplication": "Mostra que corpos de massas diferentes sentem a mesma força mútua durante uma colisão."
  },
  {
    "id": 1197,
    "topicId": 1,
    "question": "Quando uma caixa de soros de 10 kg repousa sobre uma mesa horizontal, que força a caixa exerce sobre a mesa?",
    "options": [
      "Uma força de tração ascendente de 98 N puxando a mesa em direção ao teto.",
      "Uma força de contacto dirigida verticalmente para baixo com intensidade igual a 98 N (o seu peso).",
      "Nenhuma força, porque os corpos estáticos em repouso perdem a capacidade de exercer força.",
      "Uma força horizontal de 10 N no sentido do norte magnético terrestre."
    ],
    "correctIndex": 1,
    "explanation": "A caixa empurra a mesa para baixo com uma força normal de compressão igual ao seu peso (P = 10 kg · 9,8 m/s² = 98 N).",
    "distractorAnalysis": [
      "Está incorreta: A força sobre a mesa é descendente (compressão), não uma tração ascendente.",
      "Está incorreta: Corpos em repouso continuam a exercer forças de contacto normais devido ao seu peso gravitacional.",
      "Está incorreta: A força gerada pela gravidade é vertical e descendente, sem qualquer componente horizontal magnética."
    ],
    "nursingApplication": "Permite dimensionar prateleiras e mesas de apoio para suportar o peso total dos materiais."
  },
  {
    "id": 1198,
    "topicId": 1,
    "question": "Se um enfermeiro puxa um cabo com uma força de 80 N, qual é a tensão sentida ao longo do cabo?",
    "options": [
      "160 N, somando as duas extremidades do cabo.",
      "40 N, dividindo a força pelas duas mãos do operador.",
      "80 N em toda a extensão do cabo de massa desprezável.",
      "0 N, pois a tração anula-se no centro do cabo."
    ],
    "correctIndex": 2,
    "explanation": "A tensão num cabo ideal (de massa desprezável) transmite integralmente a força aplicada de 80 N ao longo de toda a sua extensão.",
    "distractorAnalysis": [
      "Está incorreta: A tensão não é a soma das forças nas pontas; representa a força interna suportada pelo cabo (80 N).",
      "Está incorreta: Dividir por duas mãos não altera a força total de tração longitudinal transmitida pelo cabo.",
      "Está incorreta: A tensão não se anula no centro; é constante e uniforme ao longo do cabo esticado."
    ],
    "nursingApplication": "Aplicável a cabos de tração mecânica e sistemas de suspensão de membros em ortopedia."
  },
  {
    "id": 1199,
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
    "id": 1200,
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
    "id": 1201,
    "topicId": 1,
    "question": "Quais são as quatro Forças Fundamentais da Natureza descritas na física?",
    "options": [
      "Força muscular, força de atrito, força centrípeta e força elástica de molas.",
      "Força gravítica, força eletromagnética, força nuclear forte e força nuclear fraca.",
      "Força normal, força de tensão, força de empuxo e força de cisalhamento.",
      "Força de inércia, força de aceleração, força centrífuga e força de gravidade."
    ],
    "correctIndex": 1,
    "explanation": "A física fundamental reconhece apenas 4 interações: gravitacional, eletromagnética, nuclear forte e nuclear fraca.",
    "distractorAnalysis": [
      "Está incorreta: Forças musculares, atrito e elásticas são manifestações macroscópicas da força eletromagnética entre átomos.",
      "Está incorreta: Normal, tensão e empuxo são forças derivadas de contacto, não forças fundamentais da natureza.",
      "Está incorreta: Forças de inércia são fictícias/referenciais; aceleração é cinemática, não uma força fundamental."
    ],
    "nursingApplication": "Conhecimento de base científica lecionado no programa geral de Biofísica Médica."
  },
  {
    "id": 1202,
    "topicId": 1,
    "question": "O que é a Força Normal (N) na mecânica dos corpos apoiados?",
    "options": [
      "A força tangencial paralela que puxa o corpo no sentido do deslizamento.",
      "A força de atração gravitacional gerada no núcleo dos átomos do corpo.",
      "A força perpendicular exercida por uma superfície de suporte sobre o corpo que nela se apoia.",
      "A resistência do ar ao movimento retilíneo de objetos a alta velocidade."
    ],
    "correctIndex": 2,
    "explanation": "A força normal é uma força de reação de contacto sempre orientada perpendicularmente (ortogonalmente) à superfície de apoio.",
    "distractorAnalysis": [
      "Está incorreta: A força tangencial paralela à superfície é a força de atrito, não a força normal.",
      "Está incorreta: A atração gravitacional é o peso do corpo, não a reação normal da superfície.",
      "Está incorreta: A resistência do ar é uma força de arrasto fluido, não a força normal de um sólido."
    ],
    "nursingApplication": "A força normal do colchão ou do assento de uma cadeira impede que a pessoa atravesse a superfície."
  },
  {
    "id": 1203,
    "topicId": 1,
    "question": "Como se define a Força de Atrito (Fa)?",
    "options": [
      "A força perpendicular que puxa os corpos em direção ao centro da Terra.",
      "A força atrativa eletrostática entre protões e neutrões no núcleo atómico.",
      "A aceleração vetorial constante adquirida por corpos em queda livre no vácuo.",
      "A força tangencial de contacto que se opõe ao movimento relativo ou à tendência de movimento entre duas superfícies."
    ],
    "correctIndex": 3,
    "explanation": "O atrito atua paralelamente às superfícies em contacto e tem sempre sentido oposto ao deslizamento ou tendência de deslizamento.",
    "distractorAnalysis": [
      "Está incorreta: A força perpendicular de contacto é a força normal, não o atrito.",
      "Está incorreta: A atração entre nucleões é mediada pela força nuclear forte, não pelo atrito.",
      "Está incorreta: Aceleração em queda livre no vácuo é 'g', uma grandeza cinemática e não uma força resistiva."
    ],
    "nursingApplication": "O atrito entre o calçado e o piso do hospital é o que permite caminhar com segurança sem escorregar."
  },
  {
    "id": 1204,
    "topicId": 1,
    "question": "Qual é a relação fundamental entre o Coeficiente de Atrito Estático (μe) e o Coeficiente de Atrito Cinético (μc) para as mesmas superfícies?",
    "options": [
      "O atrito estático é sempre superior ao atrito cinético (μe > μc).",
      "O atrito cinético é sempre dez vezes superior ao atrito estático (μc > μe).",
      "Ambos os coeficientes são rigorosamente iguais em todas as circunstâncias físicas.",
      "O atrito estático é nulo e o atrito cinético é infinito para superfícies rugosas."
    ],
    "correctIndex": 0,
    "explanation": "O atrito estático máximo supera o cinético porque romper as interações microscópicas iniciais exige maior força que mantê-las em movimento.",
    "distractorAnalysis": [
      "Está incorreta: O atrito cinético é menor que o estático, tornando mais fácil manter o movimento do que iniciá-lo.",
      "Está incorreta: Os coeficientes não são iguais; μe é sistematicamente maior do que μc.",
      "Está incorreta: O atrito estático não é nulo; atinge um valor máximo proporcional à força normal antes do movimento iniciar."
    ],
    "nursingApplication": "Explica por que custa mais começar a empurrar uma maca parada do que mantê-la a rolar."
  },
  {
    "id": 1205,
    "topicId": 1,
    "question": "Porque é mais difícil iniciar o movimento de uma maca em repouso do que mantê-la em movimento retilíneo uniforme?",
    "options": [
      "Porque a massa inercial da maca desaparece assim que as rodas começam a girar no chão.",
      "Porque o atrito estático que impede o início do movimento é superior ao atrito cinético durante a marcha.",
      "Porque a gravidade terrestre deixa de atuar sobre a maca quando esta atinge velocidade constante.",
      "Porque a força normal anula-se completamente assim que o corpo começa a mover-se."
    ],
    "correctIndex": 1,
    "explanation": "Como μe > μc, a força necessária para romper o atrito estático e iniciar o movimento é maior que a força para vencer o atrito cinético.",
    "distractorAnalysis": [
      "Está incorreta: A massa inercial da maca é constante e não se altera com o movimento das rodas.",
      "Está incorreta: A gravidade atua continuamente sobre a maca independentemente da sua velocidade.",
      "Está incorreta: A força normal permanece ativa suportando o peso da maca enquanto esta rolar sobre o piso plano."
    ],
    "nursingApplication": "Fundamento ergonómico: aplicar força inicial gradual e firme ao colocar equipamentos em andamento."
  },
  {
    "id": 1206,
    "topicId": 1,
    "question": "De que fatores fundamentais depende a intensidade da força máxima de atrito entre dois corpos sólidos secos?",
    "options": [
      "Exclusivamente da cor da superfície e do volume cúbico dos corpos em repouso.",
      "Da velocidade angular dos ponteiros do relógio no momento da medição experimental.",
      "Do coeficiente de atrito entre os materiais (rugosidade) e da intensidade da força normal de compressão (N).",
      "Apenas da pressão atmosférica ambiente ao nível médio do mar."
    ],
    "correctIndex": 2,
    "explanation": "Pela Lei de Coulomb do atrito: Fa_max = μ · N, dependendo dos materiais (μ) e da força normal de compressão (N).",
    "distractorAnalysis": [
      "Está incorreta: A cor e o volume não determinam o atrito seco entre sólidos.",
      "Está incorreta: A velocidade dos ponteiros de um relógio não tem relação com o atrito de corpos em contacto.",
      "Está incorreta: A pressão do ar ambiente tem efeito desprezável no atrito entre sólidos secos."
    ],
    "nursingApplication": "Calçado com sola de borracha rugosa aumenta o coeficiente μ, prevenindo quedas em pisos secos."
  },
  {
    "id": 1207,
    "topicId": 1,
    "question": "Porque é que o uso de meias sem sola antiderrapante num piso hospitalar encerado representa um elevado risco de queda?",
    "options": [
      "Porque o tecido da meia anula a aceleração da gravidade, fazendo o corpo levitar sem apoio.",
      "Porque a força normal do piso encerado torna-se negativa, puxando a pessoa para baixo com força tripla.",
      "Porque o ar sobre pisos encerados cria uma barreira magnética que desequilibra o caminhar.",
      "Porque o coeficiente de atrito entre o tecido da meia e o piso liso é muito baixo, gerando força de atrito insuficiente para travar o pé."
    ],
    "correctIndex": 3,
    "explanation": "O atrito insuficiente (baixo μ) não consegue fornecer a força horizontal necessária para travar ou impulsionar o passo, causando escorregamento.",
    "distractorAnalysis": [
      "Está incorreta: O tecido da meia não altera a atração gravitacional entre a Terra e o corpo humano.",
      "Está incorreta: A força normal é positiva e de suporte, não existindo forças normais atrativas negativas.",
      "Está incorreta: Não há magnetismo em pisos encerados; o fenómeno é puramente mecânico de baixo atrito."
    ],
    "nursingApplication": "Regra básica de segurança: uso obrigatório de calçado com sola aderente em enfermarias."
  },
  {
    "id": 1208,
    "topicId": 1,
    "question": "Se um bloco de 50 kg repousa sobre uma mesa horizontal (g = 9,8 m/s²), qual é a intensidade da força normal (N) exercida pela mesa sobre o bloco?",
    "options": [
      "490 N.",
      "50 N.",
      "9,8 N.",
      "0 N."
    ],
    "correctIndex": 0,
    "explanation": "Em equilíbrio vertical numa superfície horizontal: N = P = m · g = 50 kg · 9,8 m/s² = 490 N dirigida para cima.",
    "distractorAnalysis": [
      "Está incorreta: 50 N confunde o valor numérico da massa com a intensidade da força normal em Newtons.",
      "Está incorreta: 9,8 N é o valor da aceleração da gravidade (m/s²), não o produto pela massa do bloco.",
      "Está incorreta: Se a normal fosse 0 N, o bloco estaria em queda livre através da mesa."
    ],
    "nursingApplication": "Permite calcular a compressão vertical que um leito ou estrado suporta ao apoiar um indivíduo."
  },
  {
    "id": 1209,
    "topicId": 1,
    "question": "Quais são as quatro Forças Fundamentais da Natureza descritas na física?",
    "options": [
      "Força muscular, força de atrito, força centrípeta e força elástica de molas.",
      "Força gravítica, força eletromagnética, força nuclear forte e força nuclear fraca.",
      "Força normal, força de tensão, força de empuxo e força de cisalhamento.",
      "Força de inércia, força de aceleração, força centrífuga e força de gravidade."
    ],
    "correctIndex": 1,
    "explanation": "A física fundamental reconhece apenas 4 interações: gravitacional, eletromagnética, nuclear forte e nuclear fraca.",
    "distractorAnalysis": [
      "Está incorreta: Forças musculares, atrito e elásticas são manifestações macroscópicas da força eletromagnética entre átomos.",
      "Está incorreta: Normal, tensão e empuxo são forças derivadas de contacto, não forças fundamentais da natureza.",
      "Está incorreta: Forças de inércia são fictícias/referenciais; aceleração é cinemática, não uma força fundamental."
    ],
    "nursingApplication": "Conhecimento de base científica lecionado no programa geral de Biofísica Médica."
  },
  {
    "id": 1210,
    "topicId": 1,
    "question": "O que é a Força Normal (N) na mecânica dos corpos apoiados?",
    "options": [
      "A força tangencial paralela que puxa o corpo no sentido do deslizamento.",
      "A força de atração gravitacional gerada no núcleo dos átomos do corpo.",
      "A força perpendicular exercida por uma superfície de suporte sobre o corpo que nela se apoia.",
      "A resistência do ar ao movimento retilíneo de objetos a alta velocidade."
    ],
    "correctIndex": 2,
    "explanation": "A força normal é uma força de reação de contacto sempre orientada perpendicularmente (ortogonalmente) à superfície de apoio.",
    "distractorAnalysis": [
      "Está incorreta: A força tangencial paralela à superfície é a força de atrito, não a força normal.",
      "Está incorreta: A atração gravitacional é o peso do corpo, não a reação normal da superfície.",
      "Está incorreta: A resistência do ar é uma força de arrasto fluido, não a força normal de um sólido."
    ],
    "nursingApplication": "A força normal do colchão ou do assento de uma cadeira impede que a pessoa atravesse a superfície."
  },
  {
    "id": 1211,
    "topicId": 1,
    "question": "Como se define a Força de Atrito (Fa)?",
    "options": [
      "A força perpendicular que puxa os corpos em direção ao centro da Terra.",
      "A força atrativa eletrostática entre protões e neutrões no núcleo atómico.",
      "A aceleração vetorial constante adquirida por corpos em queda livre no vácuo.",
      "A força tangencial de contacto que se opõe ao movimento relativo ou à tendência de movimento entre duas superfícies."
    ],
    "correctIndex": 3,
    "explanation": "O atrito atua paralelamente às superfícies em contacto e tem sempre sentido oposto ao deslizamento ou tendência de deslizamento.",
    "distractorAnalysis": [
      "Está incorreta: A força perpendicular de contacto é a força normal, não o atrito.",
      "Está incorreta: A atração entre nucleões é mediada pela força nuclear forte, não pelo atrito.",
      "Está incorreta: Aceleração em queda livre no vácuo é 'g', uma grandeza cinemática e não uma força resistiva."
    ],
    "nursingApplication": "O atrito entre o calçado e o piso do hospital é o que permite caminhar com segurança sem escorregar."
  },
  {
    "id": 1212,
    "topicId": 1,
    "question": "Qual é a relação fundamental entre o Coeficiente de Atrito Estático (μe) e o Coeficiente de Atrito Cinético (μc) para as mesmas superfícies?",
    "options": [
      "O atrito estático é sempre superior ao atrito cinético (μe > μc).",
      "O atrito cinético é sempre dez vezes superior ao atrito estático (μc > μe).",
      "Ambos os coeficientes são rigorosamente iguais em todas as circunstâncias físicas.",
      "O atrito estático é nulo e o atrito cinético é infinito para superfícies rugosas."
    ],
    "correctIndex": 0,
    "explanation": "O atrito estático máximo supera o cinético porque romper as interações microscópicas iniciais exige maior força que mantê-las em movimento.",
    "distractorAnalysis": [
      "Está incorreta: O atrito cinético é menor que o estático, tornando mais fácil manter o movimento do que iniciá-lo.",
      "Está incorreta: Os coeficientes não são iguais; μe é sistematicamente maior do que μc.",
      "Está incorreta: O atrito estático não é nulo; atinge um valor máximo proporcional à força normal antes do movimento iniciar."
    ],
    "nursingApplication": "Explica por que custa mais começar a empurrar uma maca parada do que mantê-la a rolar."
  },
  {
    "id": 1213,
    "topicId": 1,
    "question": "Porque é mais difícil iniciar o movimento de uma maca em repouso do que mantê-la em movimento retilíneo uniforme?",
    "options": [
      "Porque a massa inercial da maca desaparece assim que as rodas começam a girar no chão.",
      "Porque o atrito estático que impede o início do movimento é superior ao atrito cinético durante a marcha.",
      "Porque a gravidade terrestre deixa de atuar sobre a maca quando esta atinge velocidade constante.",
      "Porque a força normal anula-se completamente assim que o corpo começa a mover-se."
    ],
    "correctIndex": 1,
    "explanation": "Como μe > μc, a força necessária para romper o atrito estático e iniciar o movimento é maior que a força para vencer o atrito cinético.",
    "distractorAnalysis": [
      "Está incorreta: A massa inercial da maca é constante e não se altera com o movimento das rodas.",
      "Está incorreta: A gravidade atua continuamente sobre a maca independentemente da sua velocidade.",
      "Está incorreta: A força normal permanece ativa suportando o peso da maca enquanto esta rolar sobre o piso plano."
    ],
    "nursingApplication": "Fundamento ergonómico: aplicar força inicial gradual e firme ao colocar equipamentos em andamento."
  },
  {
    "id": 1214,
    "topicId": 1,
    "question": "De que fatores fundamentais depende a intensidade da força máxima de atrito entre dois corpos sólidos secos?",
    "options": [
      "Exclusivamente da cor da superfície e do volume cúbico dos corpos em repouso.",
      "Da velocidade angular dos ponteiros do relógio no momento da medição experimental.",
      "Do coeficiente de atrito entre os materiais (rugosidade) e da intensidade da força normal de compressão (N).",
      "Apenas da pressão atmosférica ambiente ao nível médio do mar."
    ],
    "correctIndex": 2,
    "explanation": "Pela Lei de Coulomb do atrito: Fa_max = μ · N, dependendo dos materiais (μ) e da força normal de compressão (N).",
    "distractorAnalysis": [
      "Está incorreta: A cor e o volume não determinam o atrito seco entre sólidos.",
      "Está incorreta: A velocidade dos ponteiros de um relógio não tem relação com o atrito de corpos em contacto.",
      "Está incorreta: A pressão do ar ambiente tem efeito desprezável no atrito entre sólidos secos."
    ],
    "nursingApplication": "Calçado com sola de borracha rugosa aumenta o coeficiente μ, prevenindo quedas em pisos secos."
  },
  {
    "id": 1215,
    "topicId": 1,
    "question": "Porque é que o uso de meias sem sola antiderrapante num piso hospitalar encerado representa um elevado risco de queda?",
    "options": [
      "Porque o tecido da meia anula a aceleração da gravidade, fazendo o corpo levitar sem apoio.",
      "Porque a força normal do piso encerado torna-se negativa, puxando a pessoa para baixo com força tripla.",
      "Porque o ar sobre pisos encerados cria uma barreira magnética que desequilibra o caminhar.",
      "Porque o coeficiente de atrito entre o tecido da meia e o piso liso é muito baixo, gerando força de atrito insuficiente para travar o pé."
    ],
    "correctIndex": 3,
    "explanation": "O atrito insuficiente (baixo μ) não consegue fornecer a força horizontal necessária para travar ou impulsionar o passo, causando escorregamento.",
    "distractorAnalysis": [
      "Está incorreta: O tecido da meia não altera a atração gravitacional entre a Terra e o corpo humano.",
      "Está incorreta: A força normal é positiva e de suporte, não existindo forças normais atrativas negativas.",
      "Está incorreta: Não há magnetismo em pisos encerados; o fenómeno é puramente mecânico de baixo atrito."
    ],
    "nursingApplication": "Regra básica de segurança: uso obrigatório de calçado com sola aderente em enfermarias."
  },
  {
    "id": 1216,
    "topicId": 1,
    "question": "Se um bloco de 50 kg repousa sobre uma mesa horizontal (g = 9,8 m/s²), qual é a intensidade da força normal (N) exercida pela mesa sobre o bloco?",
    "options": [
      "490 N.",
      "50 N.",
      "9,8 N.",
      "0 N."
    ],
    "correctIndex": 0,
    "explanation": "Em equilíbrio vertical numa superfície horizontal: N = P = m · g = 50 kg · 9,8 m/s² = 490 N dirigida para cima.",
    "distractorAnalysis": [
      "Está incorreta: 50 N confunde o valor numérico da massa com a intensidade da força normal em Newtons.",
      "Está incorreta: 9,8 N é o valor da aceleração da gravidade (m/s²), não o produto pela massa do bloco.",
      "Está incorreta: Se a normal fosse 0 N, o bloco estaria em queda livre através da mesa."
    ],
    "nursingApplication": "Permite calcular a compressão vertical que um leito ou estrado suporta ao apoiar um indivíduo."
  },
  {
    "id": 1217,
    "topicId": 1,
    "question": "Quais são as quatro Forças Fundamentais da Natureza descritas na física?",
    "options": [
      "Força muscular, força de atrito, força centrípeta e força elástica de molas.",
      "Força gravítica, força eletromagnética, força nuclear forte e força nuclear fraca.",
      "Força normal, força de tensão, força de empuxo e força de cisalhamento.",
      "Força de inércia, força de aceleração, força centrífuga e força de gravidade."
    ],
    "correctIndex": 1,
    "explanation": "A física fundamental reconhece apenas 4 interações: gravitacional, eletromagnética, nuclear forte e nuclear fraca.",
    "distractorAnalysis": [
      "Está incorreta: Forças musculares, atrito e elásticas são manifestações macroscópicas da força eletromagnética entre átomos.",
      "Está incorreta: Normal, tensão e empuxo são forças derivadas de contacto, não forças fundamentais da natureza.",
      "Está incorreta: Forças de inércia são fictícias/referenciais; aceleração é cinemática, não uma força fundamental."
    ],
    "nursingApplication": "Conhecimento de base científica lecionado no programa geral de Biofísica Médica."
  },
  {
    "id": 1218,
    "topicId": 1,
    "question": "O que é a Força Normal (N) na mecânica dos corpos apoiados?",
    "options": [
      "A força tangencial paralela que puxa o corpo no sentido do deslizamento.",
      "A força de atração gravitacional gerada no núcleo dos átomos do corpo.",
      "A força perpendicular exercida por uma superfície de suporte sobre o corpo que nela se apoia.",
      "A resistência do ar ao movimento retilíneo de objetos a alta velocidade."
    ],
    "correctIndex": 2,
    "explanation": "A força normal é uma força de reação de contacto sempre orientada perpendicularmente (ortogonalmente) à superfície de apoio.",
    "distractorAnalysis": [
      "Está incorreta: A força tangencial paralela à superfície é a força de atrito, não a força normal.",
      "Está incorreta: A atração gravitacional é o peso do corpo, não a reação normal da superfície.",
      "Está incorreta: A resistência do ar é uma força de arrasto fluido, não a força normal de um sólido."
    ],
    "nursingApplication": "A força normal do colchão ou do assento de uma cadeira impede que a pessoa atravesse a superfície."
  },
  {
    "id": 1219,
    "topicId": 1,
    "question": "Como se define a Força de Atrito (Fa)?",
    "options": [
      "A força perpendicular que puxa os corpos em direção ao centro da Terra.",
      "A força atrativa eletrostática entre protões e neutrões no núcleo atómico.",
      "A aceleração vetorial constante adquirida por corpos em queda livre no vácuo.",
      "A força tangencial de contacto que se opõe ao movimento relativo ou à tendência de movimento entre duas superfícies."
    ],
    "correctIndex": 3,
    "explanation": "O atrito atua paralelamente às superfícies em contacto e tem sempre sentido oposto ao deslizamento ou tendência de deslizamento.",
    "distractorAnalysis": [
      "Está incorreta: A força perpendicular de contacto é a força normal, não o atrito.",
      "Está incorreta: A atração entre nucleões é mediada pela força nuclear forte, não pelo atrito.",
      "Está incorreta: Aceleração em queda livre no vácuo é 'g', uma grandeza cinemática e não uma força resistiva."
    ],
    "nursingApplication": "O atrito entre o calçado e o piso do hospital é o que permite caminhar com segurança sem escorregar."
  },
  {
    "id": 1220,
    "topicId": 1,
    "question": "Qual é a relação fundamental entre o Coeficiente de Atrito Estático (μe) e o Coeficiente de Atrito Cinético (μc) para as mesmas superfícies?",
    "options": [
      "O atrito estático é sempre superior ao atrito cinético (μe > μc).",
      "O atrito cinético é sempre dez vezes superior ao atrito estático (μc > μe).",
      "Ambos os coeficientes são rigorosamente iguais em todas as circunstâncias físicas.",
      "O atrito estático é nulo e o atrito cinético é infinito para superfícies rugosas."
    ],
    "correctIndex": 0,
    "explanation": "O atrito estático máximo supera o cinético porque romper as interações microscópicas iniciais exige maior força que mantê-las em movimento.",
    "distractorAnalysis": [
      "Está incorreta: O atrito cinético é menor que o estático, tornando mais fácil manter o movimento do que iniciá-lo.",
      "Está incorreta: Os coeficientes não são iguais; μe é sistematicamente maior do que μc.",
      "Está incorreta: O atrito estático não é nulo; atinge um valor máximo proporcional à força normal antes do movimento iniciar."
    ],
    "nursingApplication": "Explica por que custa mais começar a empurrar uma maca parada do que mantê-la a rolar."
  },
  {
    "id": 1221,
    "topicId": 1,
    "question": "Porque é mais difícil iniciar o movimento de uma maca em repouso do que mantê-la em movimento retilíneo uniforme?",
    "options": [
      "Porque a massa inercial da maca desaparece assim que as rodas começam a girar no chão.",
      "Porque o atrito estático que impede o início do movimento é superior ao atrito cinético durante a marcha.",
      "Porque a gravidade terrestre deixa de atuar sobre a maca quando esta atinge velocidade constante.",
      "Porque a força normal anula-se completamente assim que o corpo começa a mover-se."
    ],
    "correctIndex": 1,
    "explanation": "Como μe > μc, a força necessária para romper o atrito estático e iniciar o movimento é maior que a força para vencer o atrito cinético.",
    "distractorAnalysis": [
      "Está incorreta: A massa inercial da maca é constante e não se altera com o movimento das rodas.",
      "Está incorreta: A gravidade atua continuamente sobre a maca independentemente da sua velocidade.",
      "Está incorreta: A força normal permanece ativa suportando o peso da maca enquanto esta rolar sobre o piso plano."
    ],
    "nursingApplication": "Fundamento ergonómico: aplicar força inicial gradual e firme ao colocar equipamentos em andamento."
  },
  {
    "id": 1222,
    "topicId": 1,
    "question": "De que fatores fundamentais depende a intensidade da força máxima de atrito entre dois corpos sólidos secos?",
    "options": [
      "Exclusivamente da cor da superfície e do volume cúbico dos corpos em repouso.",
      "Da velocidade angular dos ponteiros do relógio no momento da medição experimental.",
      "Do coeficiente de atrito entre os materiais (rugosidade) e da intensidade da força normal de compressão (N).",
      "Apenas da pressão atmosférica ambiente ao nível médio do mar."
    ],
    "correctIndex": 2,
    "explanation": "Pela Lei de Coulomb do atrito: Fa_max = μ · N, dependendo dos materiais (μ) e da força normal de compressão (N).",
    "distractorAnalysis": [
      "Está incorreta: A cor e o volume não determinam o atrito seco entre sólidos.",
      "Está incorreta: A velocidade dos ponteiros de um relógio não tem relação com o atrito de corpos em contacto.",
      "Está incorreta: A pressão do ar ambiente tem efeito desprezável no atrito entre sólidos secos."
    ],
    "nursingApplication": "Calçado com sola de borracha rugosa aumenta o coeficiente μ, prevenindo quedas em pisos secos."
  },
  {
    "id": 1223,
    "topicId": 1,
    "question": "Porque é que o uso de meias sem sola antiderrapante num piso hospitalar encerado representa um elevado risco de queda?",
    "options": [
      "Porque o tecido da meia anula a aceleração da gravidade, fazendo o corpo levitar sem apoio.",
      "Porque a força normal do piso encerado torna-se negativa, puxando a pessoa para baixo com força tripla.",
      "Porque o ar sobre pisos encerados cria uma barreira magnética que desequilibra o caminhar.",
      "Porque o coeficiente de atrito entre o tecido da meia e o piso liso é muito baixo, gerando força de atrito insuficiente para travar o pé."
    ],
    "correctIndex": 3,
    "explanation": "O atrito insuficiente (baixo μ) não consegue fornecer a força horizontal necessária para travar ou impulsionar o passo, causando escorregamento.",
    "distractorAnalysis": [
      "Está incorreta: O tecido da meia não altera a atração gravitacional entre a Terra e o corpo humano.",
      "Está incorreta: A força normal é positiva e de suporte, não existindo forças normais atrativas negativas.",
      "Está incorreta: Não há magnetismo em pisos encerados; o fenómeno é puramente mecânico de baixo atrito."
    ],
    "nursingApplication": "Regra básica de segurança: uso obrigatório de calçado com sola aderente em enfermarias."
  },
  {
    "id": 1224,
    "topicId": 1,
    "question": "Se um bloco de 50 kg repousa sobre uma mesa horizontal (g = 9,8 m/s²), qual é a intensidade da força normal (N) exercida pela mesa sobre o bloco?",
    "options": [
      "490 N.",
      "50 N.",
      "9,8 N.",
      "0 N."
    ],
    "correctIndex": 0,
    "explanation": "Em equilíbrio vertical numa superfície horizontal: N = P = m · g = 50 kg · 9,8 m/s² = 490 N dirigida para cima.",
    "distractorAnalysis": [
      "Está incorreta: 50 N confunde o valor numérico da massa com a intensidade da força normal em Newtons.",
      "Está incorreta: 9,8 N é o valor da aceleração da gravidade (m/s²), não o produto pela massa do bloco.",
      "Está incorreta: Se a normal fosse 0 N, o bloco estaria em queda livre através da mesa."
    ],
    "nursingApplication": "Permite calcular a compressão vertical que um leito ou estrado suporta ao apoiar um indivíduo."
  },
  {
    "id": 1225,
    "topicId": 1,
    "question": "Quais são as quatro Forças Fundamentais da Natureza descritas na física?",
    "options": [
      "Força muscular, força de atrito, força centrípeta e força elástica de molas.",
      "Força gravítica, força eletromagnética, força nuclear forte e força nuclear fraca.",
      "Força normal, força de tensão, força de empuxo e força de cisalhamento.",
      "Força de inércia, força de aceleração, força centrífuga e força de gravidade."
    ],
    "correctIndex": 1,
    "explanation": "A física fundamental reconhece apenas 4 interações: gravitacional, eletromagnética, nuclear forte e nuclear fraca.",
    "distractorAnalysis": [
      "Está incorreta: Forças musculares, atrito e elásticas são manifestações macroscópicas da força eletromagnética entre átomos.",
      "Está incorreta: Normal, tensão e empuxo são forças derivadas de contacto, não forças fundamentais da natureza.",
      "Está incorreta: Forças de inércia são fictícias/referenciais; aceleração é cinemática, não uma força fundamental."
    ],
    "nursingApplication": "Conhecimento de base científica lecionado no programa geral de Biofísica Médica."
  },
  {
    "id": 1226,
    "topicId": 1,
    "question": "O que é a Força Normal (N) na mecânica dos corpos apoiados?",
    "options": [
      "A força tangencial paralela que puxa o corpo no sentido do deslizamento.",
      "A força de atração gravitacional gerada no núcleo dos átomos do corpo.",
      "A força perpendicular exercida por uma superfície de suporte sobre o corpo que nela se apoia.",
      "A resistência do ar ao movimento retilíneo de objetos a alta velocidade."
    ],
    "correctIndex": 2,
    "explanation": "A força normal é uma força de reação de contacto sempre orientada perpendicularmente (ortogonalmente) à superfície de apoio.",
    "distractorAnalysis": [
      "Está incorreta: A força tangencial paralela à superfície é a força de atrito, não a força normal.",
      "Está incorreta: A atração gravitacional é o peso do corpo, não a reação normal da superfície.",
      "Está incorreta: A resistência do ar é uma força de arrasto fluido, não a força normal de um sólido."
    ],
    "nursingApplication": "A força normal do colchão ou do assento de uma cadeira impede que a pessoa atravesse a superfície."
  },
  {
    "id": 1227,
    "topicId": 1,
    "question": "Como se define a Força de Atrito (Fa)?",
    "options": [
      "A força perpendicular que puxa os corpos em direção ao centro da Terra.",
      "A força atrativa eletrostática entre protões e neutrões no núcleo atómico.",
      "A aceleração vetorial constante adquirida por corpos em queda livre no vácuo.",
      "A força tangencial de contacto que se opõe ao movimento relativo ou à tendência de movimento entre duas superfícies."
    ],
    "correctIndex": 3,
    "explanation": "O atrito atua paralelamente às superfícies em contacto e tem sempre sentido oposto ao deslizamento ou tendência de deslizamento.",
    "distractorAnalysis": [
      "Está incorreta: A força perpendicular de contacto é a força normal, não o atrito.",
      "Está incorreta: A atração entre nucleões é mediada pela força nuclear forte, não pelo atrito.",
      "Está incorreta: Aceleração em queda livre no vácuo é 'g', uma grandeza cinemática e não uma força resistiva."
    ],
    "nursingApplication": "O atrito entre o calçado e o piso do hospital é o que permite caminhar com segurança sem escorregar."
  },
  {
    "id": 1228,
    "topicId": 1,
    "question": "Qual é a relação fundamental entre o Coeficiente de Atrito Estático (μe) e o Coeficiente de Atrito Cinético (μc) para as mesmas superfícies?",
    "options": [
      "O atrito estático é sempre superior ao atrito cinético (μe > μc).",
      "O atrito cinético é sempre dez vezes superior ao atrito estático (μc > μe).",
      "Ambos os coeficientes são rigorosamente iguais em todas as circunstâncias físicas.",
      "O atrito estático é nulo e o atrito cinético é infinito para superfícies rugosas."
    ],
    "correctIndex": 0,
    "explanation": "O atrito estático máximo supera o cinético porque romper as interações microscópicas iniciais exige maior força que mantê-las em movimento.",
    "distractorAnalysis": [
      "Está incorreta: O atrito cinético é menor que o estático, tornando mais fácil manter o movimento do que iniciá-lo.",
      "Está incorreta: Os coeficientes não são iguais; μe é sistematicamente maior do que μc.",
      "Está incorreta: O atrito estático não é nulo; atinge um valor máximo proporcional à força normal antes do movimento iniciar."
    ],
    "nursingApplication": "Explica por que custa mais começar a empurrar uma maca parada do que mantê-la a rolar."
  },
  {
    "id": 1229,
    "topicId": 1,
    "question": "Porque é mais difícil iniciar o movimento de uma maca em repouso do que mantê-la em movimento retilíneo uniforme?",
    "options": [
      "Porque a massa inercial da maca desaparece assim que as rodas começam a girar no chão.",
      "Porque o atrito estático que impede o início do movimento é superior ao atrito cinético durante a marcha.",
      "Porque a gravidade terrestre deixa de atuar sobre a maca quando esta atinge velocidade constante.",
      "Porque a força normal anula-se completamente assim que o corpo começa a mover-se."
    ],
    "correctIndex": 1,
    "explanation": "Como μe > μc, a força necessária para romper o atrito estático e iniciar o movimento é maior que a força para vencer o atrito cinético.",
    "distractorAnalysis": [
      "Está incorreta: A massa inercial da maca é constante e não se altera com o movimento das rodas.",
      "Está incorreta: A gravidade atua continuamente sobre a maca independentemente da sua velocidade.",
      "Está incorreta: A força normal permanece ativa suportando o peso da maca enquanto esta rolar sobre o piso plano."
    ],
    "nursingApplication": "Fundamento ergonómico: aplicar força inicial gradual e firme ao colocar equipamentos em andamento."
  },
  {
    "id": 1230,
    "topicId": 1,
    "question": "De que fatores fundamentais depende a intensidade da força máxima de atrito entre dois corpos sólidos secos?",
    "options": [
      "Exclusivamente da cor da superfície e do volume cúbico dos corpos em repouso.",
      "Da velocidade angular dos ponteiros do relógio no momento da medição experimental.",
      "Do coeficiente de atrito entre os materiais (rugosidade) e da intensidade da força normal de compressão (N).",
      "Apenas da pressão atmosférica ambiente ao nível médio do mar."
    ],
    "correctIndex": 2,
    "explanation": "Pela Lei de Coulomb do atrito: Fa_max = μ · N, dependendo dos materiais (μ) e da força normal de compressão (N).",
    "distractorAnalysis": [
      "Está incorreta: A cor e o volume não determinam o atrito seco entre sólidos.",
      "Está incorreta: A velocidade dos ponteiros de um relógio não tem relação com o atrito de corpos em contacto.",
      "Está incorreta: A pressão do ar ambiente tem efeito desprezável no atrito entre sólidos secos."
    ],
    "nursingApplication": "Calçado com sola de borracha rugosa aumenta o coeficiente μ, prevenindo quedas em pisos secos."
  },
  {
    "id": 1231,
    "topicId": 1,
    "question": "Porque é que o uso de meias sem sola antiderrapante num piso hospitalar encerado representa um elevado risco de queda?",
    "options": [
      "Porque o tecido da meia anula a aceleração da gravidade, fazendo o corpo levitar sem apoio.",
      "Porque a força normal do piso encerado torna-se negativa, puxando a pessoa para baixo com força tripla.",
      "Porque o ar sobre pisos encerados cria uma barreira magnética que desequilibra o caminhar.",
      "Porque o coeficiente de atrito entre o tecido da meia e o piso liso é muito baixo, gerando força de atrito insuficiente para travar o pé."
    ],
    "correctIndex": 3,
    "explanation": "O atrito insuficiente (baixo μ) não consegue fornecer a força horizontal necessária para travar ou impulsionar o passo, causando escorregamento.",
    "distractorAnalysis": [
      "Está incorreta: O tecido da meia não altera a atração gravitacional entre a Terra e o corpo humano.",
      "Está incorreta: A força normal é positiva e de suporte, não existindo forças normais atrativas negativas.",
      "Está incorreta: Não há magnetismo em pisos encerados; o fenómeno é puramente mecânico de baixo atrito."
    ],
    "nursingApplication": "Regra básica de segurança: uso obrigatório de calçado com sola aderente em enfermarias."
  },
  {
    "id": 1232,
    "topicId": 1,
    "question": "Se um bloco de 50 kg repousa sobre uma mesa horizontal (g = 9,8 m/s²), qual é a intensidade da força normal (N) exercida pela mesa sobre o bloco?",
    "options": [
      "490 N.",
      "50 N.",
      "9,8 N.",
      "0 N."
    ],
    "correctIndex": 0,
    "explanation": "Em equilíbrio vertical numa superfície horizontal: N = P = m · g = 50 kg · 9,8 m/s² = 490 N dirigida para cima.",
    "distractorAnalysis": [
      "Está incorreta: 50 N confunde o valor numérico da massa com a intensidade da força normal em Newtons.",
      "Está incorreta: 9,8 N é o valor da aceleração da gravidade (m/s²), não o produto pela massa do bloco.",
      "Está incorreta: Se a normal fosse 0 N, o bloco estaria em queda livre através da mesa."
    ],
    "nursingApplication": "Permite calcular a compressão vertical que um leito ou estrado suporta ao apoiar um indivíduo."
  },
  {
    "id": 1233,
    "topicId": 1,
    "question": "Quais são as quatro Forças Fundamentais da Natureza descritas na física?",
    "options": [
      "Força muscular, força de atrito, força centrípeta e força elástica de molas.",
      "Força gravítica, força eletromagnética, força nuclear forte e força nuclear fraca.",
      "Força normal, força de tensão, força de empuxo e força de cisalhamento.",
      "Força de inércia, força de aceleração, força centrífuga e força de gravidade."
    ],
    "correctIndex": 1,
    "explanation": "A física fundamental reconhece apenas 4 interações: gravitacional, eletromagnética, nuclear forte e nuclear fraca.",
    "distractorAnalysis": [
      "Está incorreta: Forças musculares, atrito e elásticas são manifestações macroscópicas da força eletromagnética entre átomos.",
      "Está incorreta: Normal, tensão e empuxo são forças derivadas de contacto, não forças fundamentais da natureza.",
      "Está incorreta: Forças de inércia são fictícias/referenciais; aceleração é cinemática, não uma força fundamental."
    ],
    "nursingApplication": "Conhecimento de base científica lecionado no programa geral de Biofísica Médica."
  },
  {
    "id": 1234,
    "topicId": 1,
    "question": "O que é a Força Normal (N) na mecânica dos corpos apoiados?",
    "options": [
      "A força tangencial paralela que puxa o corpo no sentido do deslizamento.",
      "A força de atração gravitacional gerada no núcleo dos átomos do corpo.",
      "A força perpendicular exercida por uma superfície de suporte sobre o corpo que nela se apoia.",
      "A resistência do ar ao movimento retilíneo de objetos a alta velocidade."
    ],
    "correctIndex": 2,
    "explanation": "A força normal é uma força de reação de contacto sempre orientada perpendicularmente (ortogonalmente) à superfície de apoio.",
    "distractorAnalysis": [
      "Está incorreta: A força tangencial paralela à superfície é a força de atrito, não a força normal.",
      "Está incorreta: A atração gravitacional é o peso do corpo, não a reação normal da superfície.",
      "Está incorreta: A resistência do ar é uma força de arrasto fluido, não a força normal de um sólido."
    ],
    "nursingApplication": "A força normal do colchão ou do assento de uma cadeira impede que a pessoa atravesse a superfície."
  },
  {
    "id": 1235,
    "topicId": 1,
    "question": "Como se define a Força de Atrito (Fa)?",
    "options": [
      "A força perpendicular que puxa os corpos em direção ao centro da Terra.",
      "A força atrativa eletrostática entre protões e neutrões no núcleo atómico.",
      "A aceleração vetorial constante adquirida por corpos em queda livre no vácuo.",
      "A força tangencial de contacto que se opõe ao movimento relativo ou à tendência de movimento entre duas superfícies."
    ],
    "correctIndex": 3,
    "explanation": "O atrito atua paralelamente às superfícies em contacto e tem sempre sentido oposto ao deslizamento ou tendência de deslizamento.",
    "distractorAnalysis": [
      "Está incorreta: A força perpendicular de contacto é a força normal, não o atrito.",
      "Está incorreta: A atração entre nucleões é mediada pela força nuclear forte, não pelo atrito.",
      "Está incorreta: Aceleração em queda livre no vácuo é 'g', uma grandeza cinemática e não uma força resistiva."
    ],
    "nursingApplication": "O atrito entre o calçado e o piso do hospital é o que permite caminhar com segurança sem escorregar."
  },
  {
    "id": 1236,
    "topicId": 1,
    "question": "Qual é a relação fundamental entre o Coeficiente de Atrito Estático (μe) e o Coeficiente de Atrito Cinético (μc) para as mesmas superfícies?",
    "options": [
      "O atrito estático é sempre superior ao atrito cinético (μe > μc).",
      "O atrito cinético é sempre dez vezes superior ao atrito estático (μc > μe).",
      "Ambos os coeficientes são rigorosamente iguais em todas as circunstâncias físicas.",
      "O atrito estático é nulo e o atrito cinético é infinito para superfícies rugosas."
    ],
    "correctIndex": 0,
    "explanation": "O atrito estático máximo supera o cinético porque romper as interações microscópicas iniciais exige maior força que mantê-las em movimento.",
    "distractorAnalysis": [
      "Está incorreta: O atrito cinético é menor que o estático, tornando mais fácil manter o movimento do que iniciá-lo.",
      "Está incorreta: Os coeficientes não são iguais; μe é sistematicamente maior do que μc.",
      "Está incorreta: O atrito estático não é nulo; atinge um valor máximo proporcional à força normal antes do movimento iniciar."
    ],
    "nursingApplication": "Explica por que custa mais começar a empurrar uma maca parada do que mantê-la a rolar."
  },
  {
    "id": 1237,
    "topicId": 1,
    "question": "Porque é mais difícil iniciar o movimento de uma maca em repouso do que mantê-la em movimento retilíneo uniforme?",
    "options": [
      "Porque a massa inercial da maca desaparece assim que as rodas começam a girar no chão.",
      "Porque o atrito estático que impede o início do movimento é superior ao atrito cinético durante a marcha.",
      "Porque a gravidade terrestre deixa de atuar sobre a maca quando esta atinge velocidade constante.",
      "Porque a força normal anula-se completamente assim que o corpo começa a mover-se."
    ],
    "correctIndex": 1,
    "explanation": "Como μe > μc, a força necessária para romper o atrito estático e iniciar o movimento é maior que a força para vencer o atrito cinético.",
    "distractorAnalysis": [
      "Está incorreta: A massa inercial da maca é constante e não se altera com o movimento das rodas.",
      "Está incorreta: A gravidade atua continuamente sobre a maca independentemente da sua velocidade.",
      "Está incorreta: A força normal permanece ativa suportando o peso da maca enquanto esta rolar sobre o piso plano."
    ],
    "nursingApplication": "Fundamento ergonómico: aplicar força inicial gradual e firme ao colocar equipamentos em andamento."
  },
  {
    "id": 1238,
    "topicId": 1,
    "question": "De que fatores fundamentais depende a intensidade da força máxima de atrito entre dois corpos sólidos secos?",
    "options": [
      "Exclusivamente da cor da superfície e do volume cúbico dos corpos em repouso.",
      "Da velocidade angular dos ponteiros do relógio no momento da medição experimental.",
      "Do coeficiente de atrito entre os materiais (rugosidade) e da intensidade da força normal de compressão (N).",
      "Apenas da pressão atmosférica ambiente ao nível médio do mar."
    ],
    "correctIndex": 2,
    "explanation": "Pela Lei de Coulomb do atrito: Fa_max = μ · N, dependendo dos materiais (μ) e da força normal de compressão (N).",
    "distractorAnalysis": [
      "Está incorreta: A cor e o volume não determinam o atrito seco entre sólidos.",
      "Está incorreta: A velocidade dos ponteiros de um relógio não tem relação com o atrito de corpos em contacto.",
      "Está incorreta: A pressão do ar ambiente tem efeito desprezável no atrito entre sólidos secos."
    ],
    "nursingApplication": "Calçado com sola de borracha rugosa aumenta o coeficiente μ, prevenindo quedas em pisos secos."
  },
  {
    "id": 1239,
    "topicId": 1,
    "question": "Porque é que o uso de meias sem sola antiderrapante num piso hospitalar encerado representa um elevado risco de queda?",
    "options": [
      "Porque o tecido da meia anula a aceleração da gravidade, fazendo o corpo levitar sem apoio.",
      "Porque a força normal do piso encerado torna-se negativa, puxando a pessoa para baixo com força tripla.",
      "Porque o ar sobre pisos encerados cria uma barreira magnética que desequilibra o caminhar.",
      "Porque o coeficiente de atrito entre o tecido da meia e o piso liso é muito baixo, gerando força de atrito insuficiente para travar o pé."
    ],
    "correctIndex": 3,
    "explanation": "O atrito insuficiente (baixo μ) não consegue fornecer a força horizontal necessária para travar ou impulsionar o passo, causando escorregamento.",
    "distractorAnalysis": [
      "Está incorreta: O tecido da meia não altera a atração gravitacional entre a Terra e o corpo humano.",
      "Está incorreta: A força normal é positiva e de suporte, não existindo forças normais atrativas negativas.",
      "Está incorreta: Não há magnetismo em pisos encerados; o fenómeno é puramente mecânico de baixo atrito."
    ],
    "nursingApplication": "Regra básica de segurança: uso obrigatório de calçado com sola aderente em enfermarias."
  },
  {
    "id": 1240,
    "topicId": 1,
    "question": "Se um bloco de 50 kg repousa sobre uma mesa horizontal (g = 9,8 m/s²), qual é a intensidade da força normal (N) exercida pela mesa sobre o bloco?",
    "options": [
      "490 N.",
      "50 N.",
      "9,8 N.",
      "0 N."
    ],
    "correctIndex": 0,
    "explanation": "Em equilíbrio vertical numa superfície horizontal: N = P = m · g = 50 kg · 9,8 m/s² = 490 N dirigida para cima.",
    "distractorAnalysis": [
      "Está incorreta: 50 N confunde o valor numérico da massa com a intensidade da força normal em Newtons.",
      "Está incorreta: 9,8 N é o valor da aceleração da gravidade (m/s²), não o produto pela massa do bloco.",
      "Está incorreta: Se a normal fosse 0 N, o bloco estaria em queda livre através da mesa."
    ],
    "nursingApplication": "Permite calcular a compressão vertical que um leito ou estrado suporta ao apoiar um indivíduo."
  },
  {
    "id": 1241,
    "topicId": 1,
    "question": "Quais são as quatro Forças Fundamentais da Natureza descritas na física?",
    "options": [
      "Força muscular, força de atrito, força centrípeta e força elástica de molas.",
      "Força gravítica, força eletromagnética, força nuclear forte e força nuclear fraca.",
      "Força normal, força de tensão, força de empuxo e força de cisalhamento.",
      "Força de inércia, força de aceleração, força centrífuga e força de gravidade."
    ],
    "correctIndex": 1,
    "explanation": "A física fundamental reconhece apenas 4 interações: gravitacional, eletromagnética, nuclear forte e nuclear fraca.",
    "distractorAnalysis": [
      "Está incorreta: Forças musculares, atrito e elásticas são manifestações macroscópicas da força eletromagnética entre átomos.",
      "Está incorreta: Normal, tensão e empuxo são forças derivadas de contacto, não forças fundamentais da natureza.",
      "Está incorreta: Forças de inércia são fictícias/referenciais; aceleração é cinemática, não uma força fundamental."
    ],
    "nursingApplication": "Conhecimento de base científica lecionado no programa geral de Biofísica Médica."
  },
  {
    "id": 1242,
    "topicId": 1,
    "question": "O que é a Força Normal (N) na mecânica dos corpos apoiados?",
    "options": [
      "A força tangencial paralela que puxa o corpo no sentido do deslizamento.",
      "A força de atração gravitacional gerada no núcleo dos átomos do corpo.",
      "A força perpendicular exercida por uma superfície de suporte sobre o corpo que nela se apoia.",
      "A resistência do ar ao movimento retilíneo de objetos a alta velocidade."
    ],
    "correctIndex": 2,
    "explanation": "A força normal é uma força de reação de contacto sempre orientada perpendicularmente (ortogonalmente) à superfície de apoio.",
    "distractorAnalysis": [
      "Está incorreta: A força tangencial paralela à superfície é a força de atrito, não a força normal.",
      "Está incorreta: A atração gravitacional é o peso do corpo, não a reação normal da superfície.",
      "Está incorreta: A resistência do ar é uma força de arrasto fluido, não a força normal de um sólido."
    ],
    "nursingApplication": "A força normal do colchão ou do assento de uma cadeira impede que a pessoa atravesse a superfície."
  },
  {
    "id": 1243,
    "topicId": 1,
    "question": "Como se define a Força de Atrito (Fa)?",
    "options": [
      "A força perpendicular que puxa os corpos em direção ao centro da Terra.",
      "A força atrativa eletrostática entre protões e neutrões no núcleo atómico.",
      "A aceleração vetorial constante adquirida por corpos em queda livre no vácuo.",
      "A força tangencial de contacto que se opõe ao movimento relativo ou à tendência de movimento entre duas superfícies."
    ],
    "correctIndex": 3,
    "explanation": "O atrito atua paralelamente às superfícies em contacto e tem sempre sentido oposto ao deslizamento ou tendência de deslizamento.",
    "distractorAnalysis": [
      "Está incorreta: A força perpendicular de contacto é a força normal, não o atrito.",
      "Está incorreta: A atração entre nucleões é mediada pela força nuclear forte, não pelo atrito.",
      "Está incorreta: Aceleração em queda livre no vácuo é 'g', uma grandeza cinemática e não uma força resistiva."
    ],
    "nursingApplication": "O atrito entre o calçado e o piso do hospital é o que permite caminhar com segurança sem escorregar."
  },
  {
    "id": 1244,
    "topicId": 1,
    "question": "Qual é a relação fundamental entre o Coeficiente de Atrito Estático (μe) e o Coeficiente de Atrito Cinético (μc) para as mesmas superfícies?",
    "options": [
      "O atrito estático é sempre superior ao atrito cinético (μe > μc).",
      "O atrito cinético é sempre dez vezes superior ao atrito estático (μc > μe).",
      "Ambos os coeficientes são rigorosamente iguais em todas as circunstâncias físicas.",
      "O atrito estático é nulo e o atrito cinético é infinito para superfícies rugosas."
    ],
    "correctIndex": 0,
    "explanation": "O atrito estático máximo supera o cinético porque romper as interações microscópicas iniciais exige maior força que mantê-las em movimento.",
    "distractorAnalysis": [
      "Está incorreta: O atrito cinético é menor que o estático, tornando mais fácil manter o movimento do que iniciá-lo.",
      "Está incorreta: Os coeficientes não são iguais; μe é sistematicamente maior do que μc.",
      "Está incorreta: O atrito estático não é nulo; atinge um valor máximo proporcional à força normal antes do movimento iniciar."
    ],
    "nursingApplication": "Explica por que custa mais começar a empurrar uma maca parada do que mantê-la a rolar."
  },
  {
    "id": 1245,
    "topicId": 1,
    "question": "Porque é mais difícil iniciar o movimento de uma maca em repouso do que mantê-la em movimento retilíneo uniforme?",
    "options": [
      "Porque a massa inercial da maca desaparece assim que as rodas começam a girar no chão.",
      "Porque o atrito estático que impede o início do movimento é superior ao atrito cinético durante a marcha.",
      "Porque a gravidade terrestre deixa de atuar sobre a maca quando esta atinge velocidade constante.",
      "Porque a força normal anula-se completamente assim que o corpo começa a mover-se."
    ],
    "correctIndex": 1,
    "explanation": "Como μe > μc, a força necessária para romper o atrito estático e iniciar o movimento é maior que a força para vencer o atrito cinético.",
    "distractorAnalysis": [
      "Está incorreta: A massa inercial da maca é constante e não se altera com o movimento das rodas.",
      "Está incorreta: A gravidade atua continuamente sobre a maca independentemente da sua velocidade.",
      "Está incorreta: A força normal permanece ativa suportando o peso da maca enquanto esta rolar sobre o piso plano."
    ],
    "nursingApplication": "Fundamento ergonómico: aplicar força inicial gradual e firme ao colocar equipamentos em andamento."
  },
  {
    "id": 1246,
    "topicId": 1,
    "question": "De que fatores fundamentais depende a intensidade da força máxima de atrito entre dois corpos sólidos secos?",
    "options": [
      "Exclusivamente da cor da superfície e do volume cúbico dos corpos em repouso.",
      "Da velocidade angular dos ponteiros do relógio no momento da medição experimental.",
      "Do coeficiente de atrito entre os materiais (rugosidade) e da intensidade da força normal de compressão (N).",
      "Apenas da pressão atmosférica ambiente ao nível médio do mar."
    ],
    "correctIndex": 2,
    "explanation": "Pela Lei de Coulomb do atrito: Fa_max = μ · N, dependendo dos materiais (μ) e da força normal de compressão (N).",
    "distractorAnalysis": [
      "Está incorreta: A cor e o volume não determinam o atrito seco entre sólidos.",
      "Está incorreta: A velocidade dos ponteiros de um relógio não tem relação com o atrito de corpos em contacto.",
      "Está incorreta: A pressão do ar ambiente tem efeito desprezável no atrito entre sólidos secos."
    ],
    "nursingApplication": "Calçado com sola de borracha rugosa aumenta o coeficiente μ, prevenindo quedas em pisos secos."
  },
  {
    "id": 1247,
    "topicId": 1,
    "question": "Porque é que o uso de meias sem sola antiderrapante num piso hospitalar encerado representa um elevado risco de queda?",
    "options": [
      "Porque o tecido da meia anula a aceleração da gravidade, fazendo o corpo levitar sem apoio.",
      "Porque a força normal do piso encerado torna-se negativa, puxando a pessoa para baixo com força tripla.",
      "Porque o ar sobre pisos encerados cria uma barreira magnética que desequilibra o caminhar.",
      "Porque o coeficiente de atrito entre o tecido da meia e o piso liso é muito baixo, gerando força de atrito insuficiente para travar o pé."
    ],
    "correctIndex": 3,
    "explanation": "O atrito insuficiente (baixo μ) não consegue fornecer a força horizontal necessária para travar ou impulsionar o passo, causando escorregamento.",
    "distractorAnalysis": [
      "Está incorreta: O tecido da meia não altera a atração gravitacional entre a Terra e o corpo humano.",
      "Está incorreta: A força normal é positiva e de suporte, não existindo forças normais atrativas negativas.",
      "Está incorreta: Não há magnetismo em pisos encerados; o fenómeno é puramente mecânico de baixo atrito."
    ],
    "nursingApplication": "Regra básica de segurança: uso obrigatório de calçado com sola aderente em enfermarias."
  },
  {
    "id": 1248,
    "topicId": 1,
    "question": "Se um bloco de 50 kg repousa sobre uma mesa horizontal (g = 9,8 m/s²), qual é a intensidade da força normal (N) exercida pela mesa sobre o bloco?",
    "options": [
      "490 N.",
      "50 N.",
      "9,8 N.",
      "0 N."
    ],
    "correctIndex": 0,
    "explanation": "Em equilíbrio vertical numa superfície horizontal: N = P = m · g = 50 kg · 9,8 m/s² = 490 N dirigida para cima.",
    "distractorAnalysis": [
      "Está incorreta: 50 N confunde o valor numérico da massa com a intensidade da força normal em Newtons.",
      "Está incorreta: 9,8 N é o valor da aceleração da gravidade (m/s²), não o produto pela massa do bloco.",
      "Está incorreta: Se a normal fosse 0 N, o bloco estaria em queda livre através da mesa."
    ],
    "nursingApplication": "Permite calcular a compressão vertical que um leito ou estrado suporta ao apoiar um indivíduo."
  },
  {
    "id": 1249,
    "topicId": 1,
    "question": "Quais são as quatro Forças Fundamentais da Natureza descritas na física?",
    "options": [
      "Força muscular, força de atrito, força centrípeta e força elástica de molas.",
      "Força gravítica, força eletromagnética, força nuclear forte e força nuclear fraca.",
      "Força normal, força de tensão, força de empuxo e força de cisalhamento.",
      "Força de inércia, força de aceleração, força centrífuga e força de gravidade."
    ],
    "correctIndex": 1,
    "explanation": "A física fundamental reconhece apenas 4 interações: gravitacional, eletromagnética, nuclear forte e nuclear fraca.",
    "distractorAnalysis": [
      "Está incorreta: Forças musculares, atrito e elásticas são manifestações macroscópicas da força eletromagnética entre átomos.",
      "Está incorreta: Normal, tensão e empuxo são forças derivadas de contacto, não forças fundamentais da natureza.",
      "Está incorreta: Forças de inércia são fictícias/referenciais; aceleração é cinemática, não uma força fundamental."
    ],
    "nursingApplication": "Conhecimento de base científica lecionado no programa geral de Biofísica Médica."
  },
  {
    "id": 1250,
    "topicId": 1,
    "question": "O que é a Força Normal (N) na mecânica dos corpos apoiados?",
    "options": [
      "A força tangencial paralela que puxa o corpo no sentido do deslizamento.",
      "A força de atração gravitacional gerada no núcleo dos átomos do corpo.",
      "A força perpendicular exercida por uma superfície de suporte sobre o corpo que nela se apoia.",
      "A resistência do ar ao movimento retilíneo de objetos a alta velocidade."
    ],
    "correctIndex": 2,
    "explanation": "A força normal é uma força de reação de contacto sempre orientada perpendicularmente (ortogonalmente) à superfície de apoio.",
    "distractorAnalysis": [
      "Está incorreta: A força tangencial paralela à superfície é a força de atrito, não a força normal.",
      "Está incorreta: A atração gravitacional é o peso do corpo, não a reação normal da superfície.",
      "Está incorreta: A resistência do ar é uma força de arrasto fluido, não a força normal de um sólido."
    ],
    "nursingApplication": "A força normal do colchão ou do assento de uma cadeira impede que a pessoa atravesse a superfície."
  },
  {
    "id": 1251,
    "topicId": 1,
    "question": "Quais são as duas condições fundamentais para que um corpo rígido se encontre em Equilíbrio Estático completo?",
    "options": [
      "A velocidade do corpo deve ser constante e igual à velocidade do som no ar.",
      "Apenas o peso do corpo tem de ser igual à sua massa multiplicada por dois.",
      "A energia cinética do corpo deve ser infinita e a aceleração constante.",
      "A resultante de todas as forças deve ser nula (∑F = 0) e a soma de todos os momentos deve ser nula (∑M = 0)."
    ],
    "correctIndex": 3,
    "explanation": "O equilíbrio estático de um corpo rígido exige ausência de translação (∑F = 0) e ausência de rotação (∑M = 0).",
    "distractorAnalysis": [
      "Está incorreta: Velocidade igual à do som é uma condição supersónica, não um critério de equilíbrio estático de repouso.",
      "Está incorreta: Peso é P = m·g; igualar a massa por dois não garante equilíbrio de forças nem de momentos.",
      "Está incorreta: Energia cinética infinita e aceleração constante contradizem o estado de repouso estático."
    ],
    "nursingApplication": "Critério de cálculo essencial para garantir a estabilidade estática de suportes e leitos."
  },
  {
    "id": 1252,
    "topicId": 1,
    "question": "Como se classifica um equilíbrio se, após afastar ligeiramente o corpo da sua posição de repouso, ele retornar espontaneamente à posição inicial?",
    "options": [
      "Equilíbrio Estável.",
      "Equilíbrio Instável.",
      "Equilíbrio Indiferente.",
      "Equilíbrio Dinâmico Supersónico."
    ],
    "correctIndex": 0,
    "explanation": "No equilíbrio estável, qualquer pequeno desvio gera forças ou momentos restauradores que devolvem o corpo à posição original.",
    "distractorAnalysis": [
      "Está incorreta: No equilíbrio instável, o corpo tende a afastar-se ainda mais da posição inicial após a perturbação.",
      "Está incorreta: No equilíbrio indiferente, o corpo permanece em equilíbrio na nova posição após ser desviado.",
      "Está incorreta: Equilíbrio supersónico é uma terminologia fictícia sem significado na estática dos corpos."
    ],
    "nursingApplication": "Um suporte de soros com base pesada tem equilíbrio estável porque oscila mas não tomba."
  },
  {
    "id": 1253,
    "topicId": 1,
    "question": "Como se classifica o equilíbrio de um corpo que, ao ser ligeiramente desviado da sua posição original, tende a afastar-se ainda mais e tombar?",
    "options": [
      "Equilíbrio Estável.",
      "Equilíbrio Instável.",
      "Equilíbrio Indiferente.",
      "Equilíbrio Gravítico Perfeito."
    ],
    "correctIndex": 1,
    "explanation": "No equilíbrio instável, o pequeno desvio faz baixar o centro de gravidade ou retirá-lo da base, provocando tombamento.",
    "distractorAnalysis": [
      "Está incorreta: No equilíbrio estável o corpo regressa à posição inicial, não se afastando dela.",
      "Está incorreta: No equilíbrio indiferente o corpo fica parado na nova posição sem tombar nem regressar.",
      "Está incorreta: Equilíbrio gravítico perfeito é uma denominação inexistente na física clássica."
    ],
    "nursingApplication": "Uma caneta equilibrada sobre a ponta fina é um exemplo clássico de equilíbrio instável."
  },
  {
    "id": 1254,
    "topicId": 1,
    "question": "Como se classifica o equilíbrio de uma esfera que repousa numa mesa perfeitamente horizontal plana ao ser deslocada para o lado?",
    "options": [
      "Equilíbrio Estável.",
      "Equilíbrio Instável.",
      "Equilíbrio Indiferente (ou Neutro).",
      "Equilíbrio Oscilatório Harmónico."
    ],
    "correctIndex": 2,
    "explanation": "No equilíbrio indiferente, ao deslocar o corpo, a altura do centro de gravidade e as forças mantêm-se iguais, permanecendo em equilíbrio na nova posição.",
    "distractorAnalysis": [
      "Está incorreta: No equilíbrio estável a esfera teria de regressar espontaneamente ao ponto de partida.",
      "Está incorreta: No equilíbrio instável a esfera aceleraria descontroladamente e tombaria da mesa.",
      "Está incorreta: Não há oscilação harmónica numa mesa plana horizontal sem forças elásticas restauradoras."
    ],
    "nursingApplication": "Uma maca com rodas destravadas num piso plano está em equilíbrio indiferente: pode mover-se com qualquer toque."
  },
  {
    "id": 1255,
    "topicId": 1,
    "question": "Num plano inclinado com ângulo θ em relação à horizontal, como se calcula a componente do Peso perpendicular à rampa (Pn)?",
    "options": [
      "Pn = P · sen(θ).",
      "Pn = P · tg(θ).",
      "Pn = P / cos(θ).",
      "Pn = P · cos(θ)."
    ],
    "correctIndex": 3,
    "explanation": "A componente perpendicular (normal) do peso que comprime a rampa é dada pelo cosseno do ângulo: Pn = P · cos(θ).",
    "distractorAnalysis": [
      "Está incorreta: P · sen(θ) é a componente tangencial paralela à rampa (Pt), que puxa o corpo para baixo ao longo da rampa.",
      "Está incorreta: A tangente do ângulo dá a razão entre as componentes, não a intensidade de Pn.",
      "Está incorreta: Dividir pelo cosseno aumentaria incorretamente o valor para além do peso original P."
    ],
    "nursingApplication": "Determina a força normal que o chão da rampa exerce sobre as rodas de uma cadeira de rodas."
  },
  {
    "id": 1256,
    "topicId": 1,
    "question": "Num plano inclinado com ângulo θ em relação à horizontal, como se calcula a componente do Peso paralela à rampa (Pt)?",
    "options": [
      "Pt = P · sen(θ).",
      "Pt = P · cos(θ).",
      "Pt = P · tg(θ).",
      "Pt = P + sen(θ)."
    ],
    "correctIndex": 0,
    "explanation": "A componente tangencial que tende a fazer deslizar o corpo rampa abaixo é dada por Pt = P · sen(θ).",
    "distractorAnalysis": [
      "Está incorreta: P · cos(θ) é a componente perpendicular à rampa (Pn), que atua na direção normal.",
      "Está incorreta: A tangente é a razão entre Pt e Pn, não a fórmula da componente tangencial isolada.",
      "Está incorreta: Somar uma força em Newtons com um valor trigonométrico adimensional viola a consistência dimensional."
    ],
    "nursingApplication": "Calcula a força de tração que tem de ser exercida para impedir que uma cadeira de rodas deslize rampa abaixo."
  },
  {
    "id": 1257,
    "topicId": 1,
    "question": "O que acontece à força necessária para segurar uma maca numa rampa inclinada à medida que a inclinação (ângulo θ) aumenta?",
    "options": [
      "Diminui, porque a gravidade terrestre torna-se mais fraca em superfícies mais inclinadas.",
      "Aumenta, porque a componente tangencial do peso (Pt = P·sen θ) cresce à medida que o ângulo aumenta.",
      "Permanece rigorosamente igual, porque o peso do corpo em Newtons é uma constante invariável.",
      "Anula-se por completo quando a rampa atinge os quarenta e cinco graus de inclinação."
    ],
    "correctIndex": 1,
    "explanation": "Como sen(θ) aumenta com o ângulo (de 0° a 90°), a componente paralela Pt = P·sen(θ) aumenta, exigindo mais força para segurar o corpo.",
    "distractorAnalysis": [
      "Está incorreta: A aceleração da gravidade 'g' é constante e não diminui com a inclinação de uma rampa.",
      "Está incorreta: O peso total P é constante, mas a sua componente tangencial Pt ao longo da rampa varia com o ângulo.",
      "Está incorreta: A 45° a componente tangencial é substancial (cerca de 71% do peso), longe de ser nula."
    ],
    "nursingApplication": "Alerta ergonómico: rampas hospitalares de inclinação acentuada exigem muito maior esforço de retenção."
  },
  {
    "id": 1258,
    "topicId": 1,
    "question": "Um carrinho de 40 kg repousa numa rampa inclinada com ângulo θ = 30° (g = 9,8 m/s², sen 30° = 0,5). Qual é a componente do peso que puxa o carrinho para baixo ao longo da rampa?",
    "options": [
      "392 N.",
      "40 N.",
      "196 N.",
      "98 N."
    ],
    "correctIndex": 2,
    "explanation": "Peso total P = 40 kg · 9,8 m/s² = 392 N. Componente tangencial Pt = P · sen(30°) = 392 N · 0,5 = 196 N.",
    "distractorAnalysis": [
      "Está incorreta: 392 N é o peso total do carrinho atuando na vertical, não a componente paralela à rampa.",
      "Está incorreta: 40 N confunde o valor da massa em kg com a intensidade da força em Newtons.",
      "Está incorreta: 98 N seria a força se a inclinação fosse menor ou se a massa fosse de apenas 20 kg."
    ],
    "nursingApplication": "Permite calcular a força que as mãos do operador têm de sustentar numa rampa de trinta graus."
  },
  {
    "id": 1259,
    "topicId": 1,
    "question": "Quais são as duas condições fundamentais para que um corpo rígido se encontre em Equilíbrio Estático completo?",
    "options": [
      "A velocidade do corpo deve ser constante e igual à velocidade do som no ar.",
      "Apenas o peso do corpo tem de ser igual à sua massa multiplicada por dois.",
      "A energia cinética do corpo deve ser infinita e a aceleração constante.",
      "A resultante de todas as forças deve ser nula (∑F = 0) e a soma de todos os momentos deve ser nula (∑M = 0)."
    ],
    "correctIndex": 3,
    "explanation": "O equilíbrio estático de um corpo rígido exige ausência de translação (∑F = 0) e ausência de rotação (∑M = 0).",
    "distractorAnalysis": [
      "Está incorreta: Velocidade igual à do som é uma condição supersónica, não um critério de equilíbrio estático de repouso.",
      "Está incorreta: Peso é P = m·g; igualar a massa por dois não garante equilíbrio de forças nem de momentos.",
      "Está incorreta: Energia cinética infinita e aceleração constante contradizem o estado de repouso estático."
    ],
    "nursingApplication": "Critério de cálculo essencial para garantir a estabilidade estática de suportes e leitos."
  },
  {
    "id": 1260,
    "topicId": 1,
    "question": "Como se classifica um equilíbrio se, após afastar ligeiramente o corpo da sua posição de repouso, ele retornar espontaneamente à posição inicial?",
    "options": [
      "Equilíbrio Estável.",
      "Equilíbrio Instável.",
      "Equilíbrio Indiferente.",
      "Equilíbrio Dinâmico Supersónico."
    ],
    "correctIndex": 0,
    "explanation": "No equilíbrio estável, qualquer pequeno desvio gera forças ou momentos restauradores que devolvem o corpo à posição original.",
    "distractorAnalysis": [
      "Está incorreta: No equilíbrio instável, o corpo tende a afastar-se ainda mais da posição inicial após a perturbação.",
      "Está incorreta: No equilíbrio indiferente, o corpo permanece em equilíbrio na nova posição após ser desviado.",
      "Está incorreta: Equilíbrio supersónico é uma terminologia fictícia sem significado na estática dos corpos."
    ],
    "nursingApplication": "Um suporte de soros com base pesada tem equilíbrio estável porque oscila mas não tomba."
  },
  {
    "id": 1261,
    "topicId": 1,
    "question": "Como se classifica o equilíbrio de um corpo que, ao ser ligeiramente desviado da sua posição original, tende a afastar-se ainda mais e tombar?",
    "options": [
      "Equilíbrio Estável.",
      "Equilíbrio Instável.",
      "Equilíbrio Indiferente.",
      "Equilíbrio Gravítico Perfeito."
    ],
    "correctIndex": 1,
    "explanation": "No equilíbrio instável, o pequeno desvio faz baixar o centro de gravidade ou retirá-lo da base, provocando tombamento.",
    "distractorAnalysis": [
      "Está incorreta: No equilíbrio estável o corpo regressa à posição inicial, não se afastando dela.",
      "Está incorreta: No equilíbrio indiferente o corpo fica parado na nova posição sem tombar nem regressar.",
      "Está incorreta: Equilíbrio gravítico perfeito é uma denominação inexistente na física clássica."
    ],
    "nursingApplication": "Uma caneta equilibrada sobre a ponta fina é um exemplo clássico de equilíbrio instável."
  },
  {
    "id": 1262,
    "topicId": 1,
    "question": "Como se classifica o equilíbrio de uma esfera que repousa numa mesa perfeitamente horizontal plana ao ser deslocada para o lado?",
    "options": [
      "Equilíbrio Estável.",
      "Equilíbrio Instável.",
      "Equilíbrio Indiferente (ou Neutro).",
      "Equilíbrio Oscilatório Harmónico."
    ],
    "correctIndex": 2,
    "explanation": "No equilíbrio indiferente, ao deslocar o corpo, a altura do centro de gravidade e as forças mantêm-se iguais, permanecendo em equilíbrio na nova posição.",
    "distractorAnalysis": [
      "Está incorreta: No equilíbrio estável a esfera teria de regressar espontaneamente ao ponto de partida.",
      "Está incorreta: No equilíbrio instável a esfera aceleraria descontroladamente e tombaria da mesa.",
      "Está incorreta: Não há oscilação harmónica numa mesa plana horizontal sem forças elásticas restauradoras."
    ],
    "nursingApplication": "Uma maca com rodas destravadas num piso plano está em equilíbrio indiferente: pode mover-se com qualquer toque."
  },
  {
    "id": 1263,
    "topicId": 1,
    "question": "Num plano inclinado com ângulo θ em relação à horizontal, como se calcula a componente do Peso perpendicular à rampa (Pn)?",
    "options": [
      "Pn = P · sen(θ).",
      "Pn = P · tg(θ).",
      "Pn = P / cos(θ).",
      "Pn = P · cos(θ)."
    ],
    "correctIndex": 3,
    "explanation": "A componente perpendicular (normal) do peso que comprime a rampa é dada pelo cosseno do ângulo: Pn = P · cos(θ).",
    "distractorAnalysis": [
      "Está incorreta: P · sen(θ) é a componente tangencial paralela à rampa (Pt), que puxa o corpo para baixo ao longo da rampa.",
      "Está incorreta: A tangente do ângulo dá a razão entre as componentes, não a intensidade de Pn.",
      "Está incorreta: Dividir pelo cosseno aumentaria incorretamente o valor para além do peso original P."
    ],
    "nursingApplication": "Determina a força normal que o chão da rampa exerce sobre as rodas de uma cadeira de rodas."
  },
  {
    "id": 1264,
    "topicId": 1,
    "question": "Num plano inclinado com ângulo θ em relação à horizontal, como se calcula a componente do Peso paralela à rampa (Pt)?",
    "options": [
      "Pt = P · sen(θ).",
      "Pt = P · cos(θ).",
      "Pt = P · tg(θ).",
      "Pt = P + sen(θ)."
    ],
    "correctIndex": 0,
    "explanation": "A componente tangencial que tende a fazer deslizar o corpo rampa abaixo é dada por Pt = P · sen(θ).",
    "distractorAnalysis": [
      "Está incorreta: P · cos(θ) é a componente perpendicular à rampa (Pn), que atua na direção normal.",
      "Está incorreta: A tangente é a razão entre Pt e Pn, não a fórmula da componente tangencial isolada.",
      "Está incorreta: Somar uma força em Newtons com um valor trigonométrico adimensional viola a consistência dimensional."
    ],
    "nursingApplication": "Calcula a força de tração que tem de ser exercida para impedir que uma cadeira de rodas deslize rampa abaixo."
  },
  {
    "id": 1265,
    "topicId": 1,
    "question": "O que acontece à força necessária para segurar uma maca numa rampa inclinada à medida que a inclinação (ângulo θ) aumenta?",
    "options": [
      "Diminui, porque a gravidade terrestre torna-se mais fraca em superfícies mais inclinadas.",
      "Aumenta, porque a componente tangencial do peso (Pt = P·sen θ) cresce à medida que o ângulo aumenta.",
      "Permanece rigorosamente igual, porque o peso do corpo em Newtons é uma constante invariável.",
      "Anula-se por completo quando a rampa atinge os quarenta e cinco graus de inclinação."
    ],
    "correctIndex": 1,
    "explanation": "Como sen(θ) aumenta com o ângulo (de 0° a 90°), a componente paralela Pt = P·sen(θ) aumenta, exigindo mais força para segurar o corpo.",
    "distractorAnalysis": [
      "Está incorreta: A aceleração da gravidade 'g' é constante e não diminui com a inclinação de uma rampa.",
      "Está incorreta: O peso total P é constante, mas a sua componente tangencial Pt ao longo da rampa varia com o ângulo.",
      "Está incorreta: A 45° a componente tangencial é substancial (cerca de 71% do peso), longe de ser nula."
    ],
    "nursingApplication": "Alerta ergonómico: rampas hospitalares de inclinação acentuada exigem muito maior esforço de retenção."
  },
  {
    "id": 1266,
    "topicId": 1,
    "question": "Um carrinho de 40 kg repousa numa rampa inclinada com ângulo θ = 30° (g = 9,8 m/s², sen 30° = 0,5). Qual é a componente do peso que puxa o carrinho para baixo ao longo da rampa?",
    "options": [
      "392 N.",
      "40 N.",
      "196 N.",
      "98 N."
    ],
    "correctIndex": 2,
    "explanation": "Peso total P = 40 kg · 9,8 m/s² = 392 N. Componente tangencial Pt = P · sen(30°) = 392 N · 0,5 = 196 N.",
    "distractorAnalysis": [
      "Está incorreta: 392 N é o peso total do carrinho atuando na vertical, não a componente paralela à rampa.",
      "Está incorreta: 40 N confunde o valor da massa em kg com a intensidade da força em Newtons.",
      "Está incorreta: 98 N seria a força se a inclinação fosse menor ou se a massa fosse de apenas 20 kg."
    ],
    "nursingApplication": "Permite calcular a força que as mãos do operador têm de sustentar numa rampa de trinta graus."
  },
  {
    "id": 1267,
    "topicId": 1,
    "question": "Quais são as duas condições fundamentais para que um corpo rígido se encontre em Equilíbrio Estático completo?",
    "options": [
      "A velocidade do corpo deve ser constante e igual à velocidade do som no ar.",
      "Apenas o peso do corpo tem de ser igual à sua massa multiplicada por dois.",
      "A energia cinética do corpo deve ser infinita e a aceleração constante.",
      "A resultante de todas as forças deve ser nula (∑F = 0) e a soma de todos os momentos deve ser nula (∑M = 0)."
    ],
    "correctIndex": 3,
    "explanation": "O equilíbrio estático de um corpo rígido exige ausência de translação (∑F = 0) e ausência de rotação (∑M = 0).",
    "distractorAnalysis": [
      "Está incorreta: Velocidade igual à do som é uma condição supersónica, não um critério de equilíbrio estático de repouso.",
      "Está incorreta: Peso é P = m·g; igualar a massa por dois não garante equilíbrio de forças nem de momentos.",
      "Está incorreta: Energia cinética infinita e aceleração constante contradizem o estado de repouso estático."
    ],
    "nursingApplication": "Critério de cálculo essencial para garantir a estabilidade estática de suportes e leitos."
  },
  {
    "id": 1268,
    "topicId": 1,
    "question": "Como se classifica um equilíbrio se, após afastar ligeiramente o corpo da sua posição de repouso, ele retornar espontaneamente à posição inicial?",
    "options": [
      "Equilíbrio Estável.",
      "Equilíbrio Instável.",
      "Equilíbrio Indiferente.",
      "Equilíbrio Dinâmico Supersónico."
    ],
    "correctIndex": 0,
    "explanation": "No equilíbrio estável, qualquer pequeno desvio gera forças ou momentos restauradores que devolvem o corpo à posição original.",
    "distractorAnalysis": [
      "Está incorreta: No equilíbrio instável, o corpo tende a afastar-se ainda mais da posição inicial após a perturbação.",
      "Está incorreta: No equilíbrio indiferente, o corpo permanece em equilíbrio na nova posição após ser desviado.",
      "Está incorreta: Equilíbrio supersónico é uma terminologia fictícia sem significado na estática dos corpos."
    ],
    "nursingApplication": "Um suporte de soros com base pesada tem equilíbrio estável porque oscila mas não tomba."
  },
  {
    "id": 1269,
    "topicId": 1,
    "question": "Como se classifica o equilíbrio de um corpo que, ao ser ligeiramente desviado da sua posição original, tende a afastar-se ainda mais e tombar?",
    "options": [
      "Equilíbrio Estável.",
      "Equilíbrio Instável.",
      "Equilíbrio Indiferente.",
      "Equilíbrio Gravítico Perfeito."
    ],
    "correctIndex": 1,
    "explanation": "No equilíbrio instável, o pequeno desvio faz baixar o centro de gravidade ou retirá-lo da base, provocando tombamento.",
    "distractorAnalysis": [
      "Está incorreta: No equilíbrio estável o corpo regressa à posição inicial, não se afastando dela.",
      "Está incorreta: No equilíbrio indiferente o corpo fica parado na nova posição sem tombar nem regressar.",
      "Está incorreta: Equilíbrio gravítico perfeito é uma denominação inexistente na física clássica."
    ],
    "nursingApplication": "Uma caneta equilibrada sobre a ponta fina é um exemplo clássico de equilíbrio instável."
  },
  {
    "id": 1270,
    "topicId": 1,
    "question": "Como se classifica o equilíbrio de uma esfera que repousa numa mesa perfeitamente horizontal plana ao ser deslocada para o lado?",
    "options": [
      "Equilíbrio Estável.",
      "Equilíbrio Instável.",
      "Equilíbrio Indiferente (ou Neutro).",
      "Equilíbrio Oscilatório Harmónico."
    ],
    "correctIndex": 2,
    "explanation": "No equilíbrio indiferente, ao deslocar o corpo, a altura do centro de gravidade e as forças mantêm-se iguais, permanecendo em equilíbrio na nova posição.",
    "distractorAnalysis": [
      "Está incorreta: No equilíbrio estável a esfera teria de regressar espontaneamente ao ponto de partida.",
      "Está incorreta: No equilíbrio instável a esfera aceleraria descontroladamente e tombaria da mesa.",
      "Está incorreta: Não há oscilação harmónica numa mesa plana horizontal sem forças elásticas restauradoras."
    ],
    "nursingApplication": "Uma maca com rodas destravadas num piso plano está em equilíbrio indiferente: pode mover-se com qualquer toque."
  },
  {
    "id": 1271,
    "topicId": 1,
    "question": "Num plano inclinado com ângulo θ em relação à horizontal, como se calcula a componente do Peso perpendicular à rampa (Pn)?",
    "options": [
      "Pn = P · sen(θ).",
      "Pn = P · tg(θ).",
      "Pn = P / cos(θ).",
      "Pn = P · cos(θ)."
    ],
    "correctIndex": 3,
    "explanation": "A componente perpendicular (normal) do peso que comprime a rampa é dada pelo cosseno do ângulo: Pn = P · cos(θ).",
    "distractorAnalysis": [
      "Está incorreta: P · sen(θ) é a componente tangencial paralela à rampa (Pt), que puxa o corpo para baixo ao longo da rampa.",
      "Está incorreta: A tangente do ângulo dá a razão entre as componentes, não a intensidade de Pn.",
      "Está incorreta: Dividir pelo cosseno aumentaria incorretamente o valor para além do peso original P."
    ],
    "nursingApplication": "Determina a força normal que o chão da rampa exerce sobre as rodas de uma cadeira de rodas."
  },
  {
    "id": 1272,
    "topicId": 1,
    "question": "Num plano inclinado com ângulo θ em relação à horizontal, como se calcula a componente do Peso paralela à rampa (Pt)?",
    "options": [
      "Pt = P · sen(θ).",
      "Pt = P · cos(θ).",
      "Pt = P · tg(θ).",
      "Pt = P + sen(θ)."
    ],
    "correctIndex": 0,
    "explanation": "A componente tangencial que tende a fazer deslizar o corpo rampa abaixo é dada por Pt = P · sen(θ).",
    "distractorAnalysis": [
      "Está incorreta: P · cos(θ) é a componente perpendicular à rampa (Pn), que atua na direção normal.",
      "Está incorreta: A tangente é a razão entre Pt e Pn, não a fórmula da componente tangencial isolada.",
      "Está incorreta: Somar uma força em Newtons com um valor trigonométrico adimensional viola a consistência dimensional."
    ],
    "nursingApplication": "Calcula a força de tração que tem de ser exercida para impedir que uma cadeira de rodas deslize rampa abaixo."
  },
  {
    "id": 1273,
    "topicId": 1,
    "question": "O que acontece à força necessária para segurar uma maca numa rampa inclinada à medida que a inclinação (ângulo θ) aumenta?",
    "options": [
      "Diminui, porque a gravidade terrestre torna-se mais fraca em superfícies mais inclinadas.",
      "Aumenta, porque a componente tangencial do peso (Pt = P·sen θ) cresce à medida que o ângulo aumenta.",
      "Permanece rigorosamente igual, porque o peso do corpo em Newtons é uma constante invariável.",
      "Anula-se por completo quando a rampa atinge os quarenta e cinco graus de inclinação."
    ],
    "correctIndex": 1,
    "explanation": "Como sen(θ) aumenta com o ângulo (de 0° a 90°), a componente paralela Pt = P·sen(θ) aumenta, exigindo mais força para segurar o corpo.",
    "distractorAnalysis": [
      "Está incorreta: A aceleração da gravidade 'g' é constante e não diminui com a inclinação de uma rampa.",
      "Está incorreta: O peso total P é constante, mas a sua componente tangencial Pt ao longo da rampa varia com o ângulo.",
      "Está incorreta: A 45° a componente tangencial é substancial (cerca de 71% do peso), longe de ser nula."
    ],
    "nursingApplication": "Alerta ergonómico: rampas hospitalares de inclinação acentuada exigem muito maior esforço de retenção."
  },
  {
    "id": 1274,
    "topicId": 1,
    "question": "Um carrinho de 40 kg repousa numa rampa inclinada com ângulo θ = 30° (g = 9,8 m/s², sen 30° = 0,5). Qual é a componente do peso que puxa o carrinho para baixo ao longo da rampa?",
    "options": [
      "392 N.",
      "40 N.",
      "196 N.",
      "98 N."
    ],
    "correctIndex": 2,
    "explanation": "Peso total P = 40 kg · 9,8 m/s² = 392 N. Componente tangencial Pt = P · sen(30°) = 392 N · 0,5 = 196 N.",
    "distractorAnalysis": [
      "Está incorreta: 392 N é o peso total do carrinho atuando na vertical, não a componente paralela à rampa.",
      "Está incorreta: 40 N confunde o valor da massa em kg com a intensidade da força em Newtons.",
      "Está incorreta: 98 N seria a força se a inclinação fosse menor ou se a massa fosse de apenas 20 kg."
    ],
    "nursingApplication": "Permite calcular a força que as mãos do operador têm de sustentar numa rampa de trinta graus."
  },
  {
    "id": 1275,
    "topicId": 1,
    "question": "Quais são as duas condições fundamentais para que um corpo rígido se encontre em Equilíbrio Estático completo?",
    "options": [
      "A velocidade do corpo deve ser constante e igual à velocidade do som no ar.",
      "Apenas o peso do corpo tem de ser igual à sua massa multiplicada por dois.",
      "A energia cinética do corpo deve ser infinita e a aceleração constante.",
      "A resultante de todas as forças deve ser nula (∑F = 0) e a soma de todos os momentos deve ser nula (∑M = 0)."
    ],
    "correctIndex": 3,
    "explanation": "O equilíbrio estático de um corpo rígido exige ausência de translação (∑F = 0) e ausência de rotação (∑M = 0).",
    "distractorAnalysis": [
      "Está incorreta: Velocidade igual à do som é uma condição supersónica, não um critério de equilíbrio estático de repouso.",
      "Está incorreta: Peso é P = m·g; igualar a massa por dois não garante equilíbrio de forças nem de momentos.",
      "Está incorreta: Energia cinética infinita e aceleração constante contradizem o estado de repouso estático."
    ],
    "nursingApplication": "Critério de cálculo essencial para garantir a estabilidade estática de suportes e leitos."
  },
  {
    "id": 1276,
    "topicId": 1,
    "question": "Como se classifica um equilíbrio se, após afastar ligeiramente o corpo da sua posição de repouso, ele retornar espontaneamente à posição inicial?",
    "options": [
      "Equilíbrio Estável.",
      "Equilíbrio Instável.",
      "Equilíbrio Indiferente.",
      "Equilíbrio Dinâmico Supersónico."
    ],
    "correctIndex": 0,
    "explanation": "No equilíbrio estável, qualquer pequeno desvio gera forças ou momentos restauradores que devolvem o corpo à posição original.",
    "distractorAnalysis": [
      "Está incorreta: No equilíbrio instável, o corpo tende a afastar-se ainda mais da posição inicial após a perturbação.",
      "Está incorreta: No equilíbrio indiferente, o corpo permanece em equilíbrio na nova posição após ser desviado.",
      "Está incorreta: Equilíbrio supersónico é uma terminologia fictícia sem significado na estática dos corpos."
    ],
    "nursingApplication": "Um suporte de soros com base pesada tem equilíbrio estável porque oscila mas não tomba."
  },
  {
    "id": 1277,
    "topicId": 1,
    "question": "Como se classifica o equilíbrio de um corpo que, ao ser ligeiramente desviado da sua posição original, tende a afastar-se ainda mais e tombar?",
    "options": [
      "Equilíbrio Estável.",
      "Equilíbrio Instável.",
      "Equilíbrio Indiferente.",
      "Equilíbrio Gravítico Perfeito."
    ],
    "correctIndex": 1,
    "explanation": "No equilíbrio instável, o pequeno desvio faz baixar o centro de gravidade ou retirá-lo da base, provocando tombamento.",
    "distractorAnalysis": [
      "Está incorreta: No equilíbrio estável o corpo regressa à posição inicial, não se afastando dela.",
      "Está incorreta: No equilíbrio indiferente o corpo fica parado na nova posição sem tombar nem regressar.",
      "Está incorreta: Equilíbrio gravítico perfeito é uma denominação inexistente na física clássica."
    ],
    "nursingApplication": "Uma caneta equilibrada sobre a ponta fina é um exemplo clássico de equilíbrio instável."
  },
  {
    "id": 1278,
    "topicId": 1,
    "question": "Como se classifica o equilíbrio de uma esfera que repousa numa mesa perfeitamente horizontal plana ao ser deslocada para o lado?",
    "options": [
      "Equilíbrio Estável.",
      "Equilíbrio Instável.",
      "Equilíbrio Indiferente (ou Neutro).",
      "Equilíbrio Oscilatório Harmónico."
    ],
    "correctIndex": 2,
    "explanation": "No equilíbrio indiferente, ao deslocar o corpo, a altura do centro de gravidade e as forças mantêm-se iguais, permanecendo em equilíbrio na nova posição.",
    "distractorAnalysis": [
      "Está incorreta: No equilíbrio estável a esfera teria de regressar espontaneamente ao ponto de partida.",
      "Está incorreta: No equilíbrio instável a esfera aceleraria descontroladamente e tombaria da mesa.",
      "Está incorreta: Não há oscilação harmónica numa mesa plana horizontal sem forças elásticas restauradoras."
    ],
    "nursingApplication": "Uma maca com rodas destravadas num piso plano está em equilíbrio indiferente: pode mover-se com qualquer toque."
  },
  {
    "id": 1279,
    "topicId": 1,
    "question": "Num plano inclinado com ângulo θ em relação à horizontal, como se calcula a componente do Peso perpendicular à rampa (Pn)?",
    "options": [
      "Pn = P · sen(θ).",
      "Pn = P · tg(θ).",
      "Pn = P / cos(θ).",
      "Pn = P · cos(θ)."
    ],
    "correctIndex": 3,
    "explanation": "A componente perpendicular (normal) do peso que comprime a rampa é dada pelo cosseno do ângulo: Pn = P · cos(θ).",
    "distractorAnalysis": [
      "Está incorreta: P · sen(θ) é a componente tangencial paralela à rampa (Pt), que puxa o corpo para baixo ao longo da rampa.",
      "Está incorreta: A tangente do ângulo dá a razão entre as componentes, não a intensidade de Pn.",
      "Está incorreta: Dividir pelo cosseno aumentaria incorretamente o valor para além do peso original P."
    ],
    "nursingApplication": "Determina a força normal que o chão da rampa exerce sobre as rodas de uma cadeira de rodas."
  },
  {
    "id": 1280,
    "topicId": 1,
    "question": "Num plano inclinado com ângulo θ em relação à horizontal, como se calcula a componente do Peso paralela à rampa (Pt)?",
    "options": [
      "Pt = P · sen(θ).",
      "Pt = P · cos(θ).",
      "Pt = P · tg(θ).",
      "Pt = P + sen(θ)."
    ],
    "correctIndex": 0,
    "explanation": "A componente tangencial que tende a fazer deslizar o corpo rampa abaixo é dada por Pt = P · sen(θ).",
    "distractorAnalysis": [
      "Está incorreta: P · cos(θ) é a componente perpendicular à rampa (Pn), que atua na direção normal.",
      "Está incorreta: A tangente é a razão entre Pt e Pn, não a fórmula da componente tangencial isolada.",
      "Está incorreta: Somar uma força em Newtons com um valor trigonométrico adimensional viola a consistência dimensional."
    ],
    "nursingApplication": "Calcula a força de tração que tem de ser exercida para impedir que uma cadeira de rodas deslize rampa abaixo."
  },
  {
    "id": 1281,
    "topicId": 1,
    "question": "O que acontece à força necessária para segurar uma maca numa rampa inclinada à medida que a inclinação (ângulo θ) aumenta?",
    "options": [
      "Diminui, porque a gravidade terrestre torna-se mais fraca em superfícies mais inclinadas.",
      "Aumenta, porque a componente tangencial do peso (Pt = P·sen θ) cresce à medida que o ângulo aumenta.",
      "Permanece rigorosamente igual, porque o peso do corpo em Newtons é uma constante invariável.",
      "Anula-se por completo quando a rampa atinge os quarenta e cinco graus de inclinação."
    ],
    "correctIndex": 1,
    "explanation": "Como sen(θ) aumenta com o ângulo (de 0° a 90°), a componente paralela Pt = P·sen(θ) aumenta, exigindo mais força para segurar o corpo.",
    "distractorAnalysis": [
      "Está incorreta: A aceleração da gravidade 'g' é constante e não diminui com a inclinação de uma rampa.",
      "Está incorreta: O peso total P é constante, mas a sua componente tangencial Pt ao longo da rampa varia com o ângulo.",
      "Está incorreta: A 45° a componente tangencial é substancial (cerca de 71% do peso), longe de ser nula."
    ],
    "nursingApplication": "Alerta ergonómico: rampas hospitalares de inclinação acentuada exigem muito maior esforço de retenção."
  },
  {
    "id": 1282,
    "topicId": 1,
    "question": "Um carrinho de 40 kg repousa numa rampa inclinada com ângulo θ = 30° (g = 9,8 m/s², sen 30° = 0,5). Qual é a componente do peso que puxa o carrinho para baixo ao longo da rampa?",
    "options": [
      "392 N.",
      "40 N.",
      "196 N.",
      "98 N."
    ],
    "correctIndex": 2,
    "explanation": "Peso total P = 40 kg · 9,8 m/s² = 392 N. Componente tangencial Pt = P · sen(30°) = 392 N · 0,5 = 196 N.",
    "distractorAnalysis": [
      "Está incorreta: 392 N é o peso total do carrinho atuando na vertical, não a componente paralela à rampa.",
      "Está incorreta: 40 N confunde o valor da massa em kg com a intensidade da força em Newtons.",
      "Está incorreta: 98 N seria a força se a inclinação fosse menor ou se a massa fosse de apenas 20 kg."
    ],
    "nursingApplication": "Permite calcular a força que as mãos do operador têm de sustentar numa rampa de trinta graus."
  },
  {
    "id": 1283,
    "topicId": 1,
    "question": "Quais são as duas condições fundamentais para que um corpo rígido se encontre em Equilíbrio Estático completo?",
    "options": [
      "A velocidade do corpo deve ser constante e igual à velocidade do som no ar.",
      "Apenas o peso do corpo tem de ser igual à sua massa multiplicada por dois.",
      "A energia cinética do corpo deve ser infinita e a aceleração constante.",
      "A resultante de todas as forças deve ser nula (∑F = 0) e a soma de todos os momentos deve ser nula (∑M = 0)."
    ],
    "correctIndex": 3,
    "explanation": "O equilíbrio estático de um corpo rígido exige ausência de translação (∑F = 0) e ausência de rotação (∑M = 0).",
    "distractorAnalysis": [
      "Está incorreta: Velocidade igual à do som é uma condição supersónica, não um critério de equilíbrio estático de repouso.",
      "Está incorreta: Peso é P = m·g; igualar a massa por dois não garante equilíbrio de forças nem de momentos.",
      "Está incorreta: Energia cinética infinita e aceleração constante contradizem o estado de repouso estático."
    ],
    "nursingApplication": "Critério de cálculo essencial para garantir a estabilidade estática de suportes e leitos."
  },
  {
    "id": 1284,
    "topicId": 1,
    "question": "Como se classifica um equilíbrio se, após afastar ligeiramente o corpo da sua posição de repouso, ele retornar espontaneamente à posição inicial?",
    "options": [
      "Equilíbrio Estável.",
      "Equilíbrio Instável.",
      "Equilíbrio Indiferente.",
      "Equilíbrio Dinâmico Supersónico."
    ],
    "correctIndex": 0,
    "explanation": "No equilíbrio estável, qualquer pequeno desvio gera forças ou momentos restauradores que devolvem o corpo à posição original.",
    "distractorAnalysis": [
      "Está incorreta: No equilíbrio instável, o corpo tende a afastar-se ainda mais da posição inicial após a perturbação.",
      "Está incorreta: No equilíbrio indiferente, o corpo permanece em equilíbrio na nova posição após ser desviado.",
      "Está incorreta: Equilíbrio supersónico é uma terminologia fictícia sem significado na estática dos corpos."
    ],
    "nursingApplication": "Um suporte de soros com base pesada tem equilíbrio estável porque oscila mas não tomba."
  },
  {
    "id": 1285,
    "topicId": 1,
    "question": "Como se classifica o equilíbrio de um corpo que, ao ser ligeiramente desviado da sua posição original, tende a afastar-se ainda mais e tombar?",
    "options": [
      "Equilíbrio Estável.",
      "Equilíbrio Instável.",
      "Equilíbrio Indiferente.",
      "Equilíbrio Gravítico Perfeito."
    ],
    "correctIndex": 1,
    "explanation": "No equilíbrio instável, o pequeno desvio faz baixar o centro de gravidade ou retirá-lo da base, provocando tombamento.",
    "distractorAnalysis": [
      "Está incorreta: No equilíbrio estável o corpo regressa à posição inicial, não se afastando dela.",
      "Está incorreta: No equilíbrio indiferente o corpo fica parado na nova posição sem tombar nem regressar.",
      "Está incorreta: Equilíbrio gravítico perfeito é uma denominação inexistente na física clássica."
    ],
    "nursingApplication": "Uma caneta equilibrada sobre a ponta fina é um exemplo clássico de equilíbrio instável."
  },
  {
    "id": 1286,
    "topicId": 1,
    "question": "Como se classifica o equilíbrio de uma esfera que repousa numa mesa perfeitamente horizontal plana ao ser deslocada para o lado?",
    "options": [
      "Equilíbrio Estável.",
      "Equilíbrio Instável.",
      "Equilíbrio Indiferente (ou Neutro).",
      "Equilíbrio Oscilatório Harmónico."
    ],
    "correctIndex": 2,
    "explanation": "No equilíbrio indiferente, ao deslocar o corpo, a altura do centro de gravidade e as forças mantêm-se iguais, permanecendo em equilíbrio na nova posição.",
    "distractorAnalysis": [
      "Está incorreta: No equilíbrio estável a esfera teria de regressar espontaneamente ao ponto de partida.",
      "Está incorreta: No equilíbrio instável a esfera aceleraria descontroladamente e tombaria da mesa.",
      "Está incorreta: Não há oscilação harmónica numa mesa plana horizontal sem forças elásticas restauradoras."
    ],
    "nursingApplication": "Uma maca com rodas destravadas num piso plano está em equilíbrio indiferente: pode mover-se com qualquer toque."
  },
  {
    "id": 1287,
    "topicId": 1,
    "question": "Num plano inclinado com ângulo θ em relação à horizontal, como se calcula a componente do Peso perpendicular à rampa (Pn)?",
    "options": [
      "Pn = P · sen(θ).",
      "Pn = P · tg(θ).",
      "Pn = P / cos(θ).",
      "Pn = P · cos(θ)."
    ],
    "correctIndex": 3,
    "explanation": "A componente perpendicular (normal) do peso que comprime a rampa é dada pelo cosseno do ângulo: Pn = P · cos(θ).",
    "distractorAnalysis": [
      "Está incorreta: P · sen(θ) é a componente tangencial paralela à rampa (Pt), que puxa o corpo para baixo ao longo da rampa.",
      "Está incorreta: A tangente do ângulo dá a razão entre as componentes, não a intensidade de Pn.",
      "Está incorreta: Dividir pelo cosseno aumentaria incorretamente o valor para além do peso original P."
    ],
    "nursingApplication": "Determina a força normal que o chão da rampa exerce sobre as rodas de uma cadeira de rodas."
  },
  {
    "id": 1288,
    "topicId": 1,
    "question": "Num plano inclinado com ângulo θ em relação à horizontal, como se calcula a componente do Peso paralela à rampa (Pt)?",
    "options": [
      "Pt = P · sen(θ).",
      "Pt = P · cos(θ).",
      "Pt = P · tg(θ).",
      "Pt = P + sen(θ)."
    ],
    "correctIndex": 0,
    "explanation": "A componente tangencial que tende a fazer deslizar o corpo rampa abaixo é dada por Pt = P · sen(θ).",
    "distractorAnalysis": [
      "Está incorreta: P · cos(θ) é a componente perpendicular à rampa (Pn), que atua na direção normal.",
      "Está incorreta: A tangente é a razão entre Pt e Pn, não a fórmula da componente tangencial isolada.",
      "Está incorreta: Somar uma força em Newtons com um valor trigonométrico adimensional viola a consistência dimensional."
    ],
    "nursingApplication": "Calcula a força de tração que tem de ser exercida para impedir que uma cadeira de rodas deslize rampa abaixo."
  },
  {
    "id": 1289,
    "topicId": 1,
    "question": "O que acontece à força necessária para segurar uma maca numa rampa inclinada à medida que a inclinação (ângulo θ) aumenta?",
    "options": [
      "Diminui, porque a gravidade terrestre torna-se mais fraca em superfícies mais inclinadas.",
      "Aumenta, porque a componente tangencial do peso (Pt = P·sen θ) cresce à medida que o ângulo aumenta.",
      "Permanece rigorosamente igual, porque o peso do corpo em Newtons é uma constante invariável.",
      "Anula-se por completo quando a rampa atinge os quarenta e cinco graus de inclinação."
    ],
    "correctIndex": 1,
    "explanation": "Como sen(θ) aumenta com o ângulo (de 0° a 90°), a componente paralela Pt = P·sen(θ) aumenta, exigindo mais força para segurar o corpo.",
    "distractorAnalysis": [
      "Está incorreta: A aceleração da gravidade 'g' é constante e não diminui com a inclinação de uma rampa.",
      "Está incorreta: O peso total P é constante, mas a sua componente tangencial Pt ao longo da rampa varia com o ângulo.",
      "Está incorreta: A 45° a componente tangencial é substancial (cerca de 71% do peso), longe de ser nula."
    ],
    "nursingApplication": "Alerta ergonómico: rampas hospitalares de inclinação acentuada exigem muito maior esforço de retenção."
  },
  {
    "id": 1290,
    "topicId": 1,
    "question": "Um carrinho de 40 kg repousa numa rampa inclinada com ângulo θ = 30° (g = 9,8 m/s², sen 30° = 0,5). Qual é a componente do peso que puxa o carrinho para baixo ao longo da rampa?",
    "options": [
      "392 N.",
      "40 N.",
      "196 N.",
      "98 N."
    ],
    "correctIndex": 2,
    "explanation": "Peso total P = 40 kg · 9,8 m/s² = 392 N. Componente tangencial Pt = P · sen(30°) = 392 N · 0,5 = 196 N.",
    "distractorAnalysis": [
      "Está incorreta: 392 N é o peso total do carrinho atuando na vertical, não a componente paralela à rampa.",
      "Está incorreta: 40 N confunde o valor da massa em kg com a intensidade da força em Newtons.",
      "Está incorreta: 98 N seria a força se a inclinação fosse menor ou se a massa fosse de apenas 20 kg."
    ],
    "nursingApplication": "Permite calcular a força que as mãos do operador têm de sustentar numa rampa de trinta graus."
  },
  {
    "id": 1291,
    "topicId": 1,
    "question": "Quais são as duas condições fundamentais para que um corpo rígido se encontre em Equilíbrio Estático completo?",
    "options": [
      "A velocidade do corpo deve ser constante e igual à velocidade do som no ar.",
      "Apenas o peso do corpo tem de ser igual à sua massa multiplicada por dois.",
      "A energia cinética do corpo deve ser infinita e a aceleração constante.",
      "A resultante de todas as forças deve ser nula (∑F = 0) e a soma de todos os momentos deve ser nula (∑M = 0)."
    ],
    "correctIndex": 3,
    "explanation": "O equilíbrio estático de um corpo rígido exige ausência de translação (∑F = 0) e ausência de rotação (∑M = 0).",
    "distractorAnalysis": [
      "Está incorreta: Velocidade igual à do som é uma condição supersónica, não um critério de equilíbrio estático de repouso.",
      "Está incorreta: Peso é P = m·g; igualar a massa por dois não garante equilíbrio de forças nem de momentos.",
      "Está incorreta: Energia cinética infinita e aceleração constante contradizem o estado de repouso estático."
    ],
    "nursingApplication": "Critério de cálculo essencial para garantir a estabilidade estática de suportes e leitos."
  },
  {
    "id": 1292,
    "topicId": 1,
    "question": "Como se classifica um equilíbrio se, após afastar ligeiramente o corpo da sua posição de repouso, ele retornar espontaneamente à posição inicial?",
    "options": [
      "Equilíbrio Estável.",
      "Equilíbrio Instável.",
      "Equilíbrio Indiferente.",
      "Equilíbrio Dinâmico Supersónico."
    ],
    "correctIndex": 0,
    "explanation": "No equilíbrio estável, qualquer pequeno desvio gera forças ou momentos restauradores que devolvem o corpo à posição original.",
    "distractorAnalysis": [
      "Está incorreta: No equilíbrio instável, o corpo tende a afastar-se ainda mais da posição inicial após a perturbação.",
      "Está incorreta: No equilíbrio indiferente, o corpo permanece em equilíbrio na nova posição após ser desviado.",
      "Está incorreta: Equilíbrio supersónico é uma terminologia fictícia sem significado na estática dos corpos."
    ],
    "nursingApplication": "Um suporte de soros com base pesada tem equilíbrio estável porque oscila mas não tomba."
  },
  {
    "id": 1293,
    "topicId": 1,
    "question": "Como se classifica o equilíbrio de um corpo que, ao ser ligeiramente desviado da sua posição original, tende a afastar-se ainda mais e tombar?",
    "options": [
      "Equilíbrio Estável.",
      "Equilíbrio Instável.",
      "Equilíbrio Indiferente.",
      "Equilíbrio Gravítico Perfeito."
    ],
    "correctIndex": 1,
    "explanation": "No equilíbrio instável, o pequeno desvio faz baixar o centro de gravidade ou retirá-lo da base, provocando tombamento.",
    "distractorAnalysis": [
      "Está incorreta: No equilíbrio estável o corpo regressa à posição inicial, não se afastando dela.",
      "Está incorreta: No equilíbrio indiferente o corpo fica parado na nova posição sem tombar nem regressar.",
      "Está incorreta: Equilíbrio gravítico perfeito é uma denominação inexistente na física clássica."
    ],
    "nursingApplication": "Uma caneta equilibrada sobre a ponta fina é um exemplo clássico de equilíbrio instável."
  },
  {
    "id": 1294,
    "topicId": 1,
    "question": "Como se classifica o equilíbrio de uma esfera que repousa numa mesa perfeitamente horizontal plana ao ser deslocada para o lado?",
    "options": [
      "Equilíbrio Estável.",
      "Equilíbrio Instável.",
      "Equilíbrio Indiferente (ou Neutro).",
      "Equilíbrio Oscilatório Harmónico."
    ],
    "correctIndex": 2,
    "explanation": "No equilíbrio indiferente, ao deslocar o corpo, a altura do centro de gravidade e as forças mantêm-se iguais, permanecendo em equilíbrio na nova posição.",
    "distractorAnalysis": [
      "Está incorreta: No equilíbrio estável a esfera teria de regressar espontaneamente ao ponto de partida.",
      "Está incorreta: No equilíbrio instável a esfera aceleraria descontroladamente e tombaria da mesa.",
      "Está incorreta: Não há oscilação harmónica numa mesa plana horizontal sem forças elásticas restauradoras."
    ],
    "nursingApplication": "Uma maca com rodas destravadas num piso plano está em equilíbrio indiferente: pode mover-se com qualquer toque."
  },
  {
    "id": 1295,
    "topicId": 1,
    "question": "Num plano inclinado com ângulo θ em relação à horizontal, como se calcula a componente do Peso perpendicular à rampa (Pn)?",
    "options": [
      "Pn = P · sen(θ).",
      "Pn = P · tg(θ).",
      "Pn = P / cos(θ).",
      "Pn = P · cos(θ)."
    ],
    "correctIndex": 3,
    "explanation": "A componente perpendicular (normal) do peso que comprime a rampa é dada pelo cosseno do ângulo: Pn = P · cos(θ).",
    "distractorAnalysis": [
      "Está incorreta: P · sen(θ) é a componente tangencial paralela à rampa (Pt), que puxa o corpo para baixo ao longo da rampa.",
      "Está incorreta: A tangente do ângulo dá a razão entre as componentes, não a intensidade de Pn.",
      "Está incorreta: Dividir pelo cosseno aumentaria incorretamente o valor para além do peso original P."
    ],
    "nursingApplication": "Determina a força normal que o chão da rampa exerce sobre as rodas de uma cadeira de rodas."
  },
  {
    "id": 1296,
    "topicId": 1,
    "question": "Num plano inclinado com ângulo θ em relação à horizontal, como se calcula a componente do Peso paralela à rampa (Pt)?",
    "options": [
      "Pt = P · sen(θ).",
      "Pt = P · cos(θ).",
      "Pt = P · tg(θ).",
      "Pt = P + sen(θ)."
    ],
    "correctIndex": 0,
    "explanation": "A componente tangencial que tende a fazer deslizar o corpo rampa abaixo é dada por Pt = P · sen(θ).",
    "distractorAnalysis": [
      "Está incorreta: P · cos(θ) é a componente perpendicular à rampa (Pn), que atua na direção normal.",
      "Está incorreta: A tangente é a razão entre Pt e Pn, não a fórmula da componente tangencial isolada.",
      "Está incorreta: Somar uma força em Newtons com um valor trigonométrico adimensional viola a consistência dimensional."
    ],
    "nursingApplication": "Calcula a força de tração que tem de ser exercida para impedir que uma cadeira de rodas deslize rampa abaixo."
  },
  {
    "id": 1297,
    "topicId": 1,
    "question": "O que acontece à força necessária para segurar uma maca numa rampa inclinada à medida que a inclinação (ângulo θ) aumenta?",
    "options": [
      "Diminui, porque a gravidade terrestre torna-se mais fraca em superfícies mais inclinadas.",
      "Aumenta, porque a componente tangencial do peso (Pt = P·sen θ) cresce à medida que o ângulo aumenta.",
      "Permanece rigorosamente igual, porque o peso do corpo em Newtons é uma constante invariável.",
      "Anula-se por completo quando a rampa atinge os quarenta e cinco graus de inclinação."
    ],
    "correctIndex": 1,
    "explanation": "Como sen(θ) aumenta com o ângulo (de 0° a 90°), a componente paralela Pt = P·sen(θ) aumenta, exigindo mais força para segurar o corpo.",
    "distractorAnalysis": [
      "Está incorreta: A aceleração da gravidade 'g' é constante e não diminui com a inclinação de uma rampa.",
      "Está incorreta: O peso total P é constante, mas a sua componente tangencial Pt ao longo da rampa varia com o ângulo.",
      "Está incorreta: A 45° a componente tangencial é substancial (cerca de 71% do peso), longe de ser nula."
    ],
    "nursingApplication": "Alerta ergonómico: rampas hospitalares de inclinação acentuada exigem muito maior esforço de retenção."
  },
  {
    "id": 1298,
    "topicId": 1,
    "question": "Um carrinho de 40 kg repousa numa rampa inclinada com ângulo θ = 30° (g = 9,8 m/s², sen 30° = 0,5). Qual é a componente do peso que puxa o carrinho para baixo ao longo da rampa?",
    "options": [
      "392 N.",
      "40 N.",
      "196 N.",
      "98 N."
    ],
    "correctIndex": 2,
    "explanation": "Peso total P = 40 kg · 9,8 m/s² = 392 N. Componente tangencial Pt = P · sen(30°) = 392 N · 0,5 = 196 N.",
    "distractorAnalysis": [
      "Está incorreta: 392 N é o peso total do carrinho atuando na vertical, não a componente paralela à rampa.",
      "Está incorreta: 40 N confunde o valor da massa em kg com a intensidade da força em Newtons.",
      "Está incorreta: 98 N seria a força se a inclinação fosse menor ou se a massa fosse de apenas 20 kg."
    ],
    "nursingApplication": "Permite calcular a força que as mãos do operador têm de sustentar numa rampa de trinta graus."
  },
  {
    "id": 1299,
    "topicId": 1,
    "question": "Quais são as duas condições fundamentais para que um corpo rígido se encontre em Equilíbrio Estático completo?",
    "options": [
      "A velocidade do corpo deve ser constante e igual à velocidade do som no ar.",
      "Apenas o peso do corpo tem de ser igual à sua massa multiplicada por dois.",
      "A energia cinética do corpo deve ser infinita e a aceleração constante.",
      "A resultante de todas as forças deve ser nula (∑F = 0) e a soma de todos os momentos deve ser nula (∑M = 0)."
    ],
    "correctIndex": 3,
    "explanation": "O equilíbrio estático de um corpo rígido exige ausência de translação (∑F = 0) e ausência de rotação (∑M = 0).",
    "distractorAnalysis": [
      "Está incorreta: Velocidade igual à do som é uma condição supersónica, não um critério de equilíbrio estático de repouso.",
      "Está incorreta: Peso é P = m·g; igualar a massa por dois não garante equilíbrio de forças nem de momentos.",
      "Está incorreta: Energia cinética infinita e aceleração constante contradizem o estado de repouso estático."
    ],
    "nursingApplication": "Critério de cálculo essencial para garantir a estabilidade estática de suportes e leitos."
  },
  {
    "id": 1300,
    "topicId": 1,
    "question": "Como se classifica um equilíbrio se, após afastar ligeiramente o corpo da sua posição de repouso, ele retornar espontaneamente à posição inicial?",
    "options": [
      "Equilíbrio Estável.",
      "Equilíbrio Instável.",
      "Equilíbrio Indiferente.",
      "Equilíbrio Dinâmico Supersónico."
    ],
    "correctIndex": 0,
    "explanation": "No equilíbrio estável, qualquer pequeno desvio gera forças ou momentos restauradores que devolvem o corpo à posição original.",
    "distractorAnalysis": [
      "Está incorreta: No equilíbrio instável, o corpo tende a afastar-se ainda mais da posição inicial após a perturbação.",
      "Está incorreta: No equilíbrio indiferente, o corpo permanece em equilíbrio na nova posição após ser desviado.",
      "Está incorreta: Equilíbrio supersónico é uma terminologia fictícia sem significado na estática dos corpos."
    ],
    "nursingApplication": "Um suporte de soros com base pesada tem equilíbrio estável porque oscila mas não tomba."
  },
  {
    "id": 1301,
    "topicId": 1,
    "question": "O que mede o Momento de uma Força (ou Torque) na física?",
    "options": [
      "A quantidade total de massa que se desloca exclusivamente em linha reta no vácuo.",
      "O efeito rotativo de uma força em torno de um determinado ponto ou eixo de rotação.",
      "A perda de energia térmica provocada pelo atrito do ar com a superfície de um osso.",
      "A pressão hidrostática exercida por uma coluna de líquido em repouso absoluto."
    ],
    "correctIndex": 1,
    "explanation": "O momento mede a capacidade ou eficácia de uma força em provocar a rotação de um corpo rígido em torno de um fulcro.",
    "distractorAnalysis": [
      "Está incorreta: Deslocamento em linha reta é translação, medida por velocidade ou força resultante, não por momento.",
      "Está incorreta: A perda de energia térmica é dissipação calórica, não momento mecânico de rotação.",
      "Está incorreta: A pressão hidrostática é a razão entre força e área em fluidos (p = ρ·g·h), sem relação com rotação de sólidos."
    ],
    "nursingApplication": "Conceito fundamental para compreender a rotação das articulações e o funcionamento de alavancas."
  },
  {
    "id": 1302,
    "topicId": 1,
    "question": "Como se calcula o Momento de uma Força perpendicular (M) em relação a um eixo de rotação?",
    "options": [
      "M = F / b (razão entre a intensidade da força e o braço da força).",
      "M = F + b (soma da força com a distância ao eixo).",
      "M = F · b (produto da intensidade da força pelo braço da força).",
      "M = F · a (produto da força pela aceleração do corpo)."
    ],
    "correctIndex": 2,
    "explanation": "O momento é dado pelo produto da força pela distância perpendicular do eixo à linha de ação da força: M = F · b.",
    "distractorAnalysis": [
      "Está incorreta: Dividir a força pelo braço (F / b) é dimensionalmente incorreto para calcular o momento rotacional.",
      "Está incorreta: Somar uma força em Newtons com uma distância em metros viola as regras da homogeneidade dimensional.",
      "Está incorreta: F · a não tem significado de momento mecânico; representaria força multiplicada por aceleração."
    ],
    "nursingApplication": "Permite calcular o esforço de rotação gerado por uma força aplicada na pega de uma manivela."
  },
  {
    "id": 1303,
    "topicId": 1,
    "question": "No Sistema Internacional (SI), qual é a unidade correta do Momento de uma Força?",
    "options": [
      "Joule por segundo (J/s).",
      "Pascal por metro quadrado (Pa/m²).",
      "Newton por segundo (N/s).",
      "Newton-metro (N·m)."
    ],
    "correctIndex": 3,
    "explanation": "Como M = F · b, a unidade resulta da multiplicação de Newtons (N) por metros (m): N·m.",
    "distractorAnalysis": [
      "Está incorreta: Joule por segundo (J/s) corresponde a Watt (W), unidade de potência mecânica ou elétrica.",
      "Está incorreta: Pascal por metro quadrado não representa momento rotacional.",
      "Está incorreta: Newton por segundo (N/s) é a taxa de variação temporal de uma força, não um momento."
    ],
    "nursingApplication": "Distingue o momento rotacional (N·m) de outras grandezas da física médica."
  },
  {
    "id": 1304,
    "topicId": 1,
    "question": "O que é o \"Braço da Força\" (b) no cálculo do Momento?",
    "options": [
      "A distância perpendicular medida entre o eixo de rotação e a linha de ação da força.",
      "O comprimento total do membro anatómico medido da cabeça até aos pés.",
      "A massa total do objeto que está a ser rodado em torno do fulcro.",
      "O tempo decorrido desde o início da aplicação da força de tração."
    ],
    "correctIndex": 0,
    "explanation": "O braço (b) é rigorosamente a menor distância geométrica (perpendicular) do fulcro à reta de ação da força.",
    "distractorAnalysis": [
      "Está incorreta: O comprimento total do corpo ou membro não coincide necessariamente com a distância perpendicular ao eixo.",
      "Está incorreta: A massa é uma grandeza inercial escalar (kg), não uma distância geométrica (m).",
      "Está incorreta: O tempo decorrido é uma grandeza temporal em segundos, sem relação com o braço de alavanca."
    ],
    "nursingApplication": "Fundamental para entender que afastar a força da articulação aumenta o momento de rotação."
  },
  {
    "id": 1305,
    "topicId": 1,
    "question": "Se aplicares uma força perpendicular de 30 N na extremidade de uma alavanca a uma distância de 0.6 m do eixo, qual é o momento gerado?",
    "options": [
      "50.0 N·m.",
      "18.0 N·m.",
      "30.6 N·m.",
      "18.0 N."
    ],
    "correctIndex": 1,
    "explanation": "Pela fórmula do momento perpendicular: M = F · b = 30 N · 0.6 m = 18.0 N·m.",
    "distractorAnalysis": [
      "Está incorreta: Dividiu a força pela distância em vez de multiplicar (M = F · b).",
      "Está incorreta: Somou a força com a distância, operação matematicamente errada para grandezas de dimensões diferentes.",
      "Está incorreta: A unidade de momento é o Newton-metro (N·m), e não o Newton (N)."
    ],
    "nursingApplication": "Cálculo prático do torque produzido ao puxar a alavanca de travão de uma cadeira de rodas."
  },
  {
    "id": 1306,
    "topicId": 1,
    "question": "Porque é que uma porta se abre muito mais facilmente quando empurrada perto do puxador (longe das dobradiças) do que perto das dobradiças?",
    "options": [
      "Porque as dobradiças absorvem toda a massa do ar quando a porta é empurrada na extremidade.",
      "Porque o peso da porta diminui para metade quando a força é aplicada longe do eixo.",
      "Porque quanto maior a distância ao eixo de rotação (maior braço b), maior é o momento gerado para a mesma força.",
      "Porque a gravidade terrestre anula-se na extremidade externa da folha da porta."
    ],
    "correctIndex": 2,
    "explanation": "Como M = F·b, aumentando o braço 'b', a mesma força 'F' produz um momento rotacional muito maior, facilitando o giro.",
    "distractorAnalysis": [
      "Está incorreta: As dobradiças são apenas o eixo de rotação; não alteram a massa do ar ambiente.",
      "Está incorreta: O peso da porta é invariável e atua no seu centro de gravidade, independentemente de onde se empurra.",
      "Está incorreta: A gravidade atua uniformemente em toda a porta e não se anula na extremidade do puxador."
    ],
    "nursingApplication": "Princípio físico de ergonomia: aplicar forças no ponto de maior braço de alavanca para poupar esforço."
  },
  {
    "id": 1307,
    "topicId": 1,
    "question": "Se uma força passar exatamente pelo eixo de rotação de um corpo (braço b = 0), qual é o momento que ela produz?",
    "options": [
      "Um momento infinito no sentido dos ponteiros do relógio.",
      "Um momento igual à intensidade da força multiplicada por 9,8.",
      "Um momento constante independente da força aplicada.",
      "Zero (M = 0 N·m), não produzindo qualquer rotação."
    ],
    "correctIndex": 3,
    "explanation": "Se a linha de ação da força intersecta o eixo de rotação, o braço é zero (b = 0), logo M = F · 0 = 0 N·m.",
    "distractorAnalysis": [
      "Está incorreta: Não há momento infinito; uma força sem braço é incapaz de provocar rotação em torno do eixo.",
      "Está incorreta: Multiplicar pela gravidade não tem fundamento físico quando o braço de alavanca é nulo.",
      "Está incorreta: O momento é nulo, e não um valor constante não nulo."
    ],
    "nursingApplication": "Explica por que puxar uma porta na direção exata das dobradiças nunca a fará rodar."
  },
  {
    "id": 1308,
    "topicId": 1,
    "question": "Qual é a condição de equilíbrio rotacional para que um corpo com eixo fixo não sofra aceleração angular?",
    "options": [
      "A soma de todos os momentos de força que atuam sobre ele deve ser nula (∑M = 0).",
      "Apenas a força de atrito deve ser igual a dez vezes o peso do corpo.",
      "O corpo deve ter velocidade angular infinita orientada para o norte.",
      "Todas as forças aplicadas devem ter exatamente a mesma cor e temperatura."
    ],
    "correctIndex": 0,
    "explanation": "A 2ª condição de equilíbrio estático exige que os momentos no sentido horário compensem os anti-horários: ∑M = 0.",
    "distractorAnalysis": [
      "Está incorreta: A força de atrito não precisa de ser dez vezes o peso para haver equilíbrio rotacional.",
      "Está incorreta: Velocidade angular infinita é fisicamente impossível e opõe-se ao repouso estático.",
      "Está incorreta: Cor e temperatura não influenciam as equações de equilíbrio da mecânica clássica."
    ],
    "nursingApplication": "Princípio de funcionamento da balança de braços iguais em repouso perfeitamente equilibrado."
  },
  {
    "id": 1309,
    "topicId": 1,
    "question": "O que mede o Momento de uma Força (ou Torque) na física?",
    "options": [
      "A quantidade total de massa que se desloca exclusivamente em linha reta no vácuo.",
      "O efeito rotativo de uma força em torno de um determinado ponto ou eixo de rotação.",
      "A perda de energia térmica provocada pelo atrito do ar com a superfície de um osso.",
      "A pressão hidrostática exercida por uma coluna de líquido em repouso absoluto."
    ],
    "correctIndex": 1,
    "explanation": "O momento mede a capacidade ou eficácia de uma força em provocar a rotação de um corpo rígido em torno de um fulcro.",
    "distractorAnalysis": [
      "Está incorreta: Deslocamento em linha reta é translação, medida por velocidade ou força resultante, não por momento.",
      "Está incorreta: A perda de energia térmica é dissipação calórica, não momento mecânico de rotação.",
      "Está incorreta: A pressão hidrostática é a razão entre força e área em fluidos (p = ρ·g·h), sem relação com rotação de sólidos."
    ],
    "nursingApplication": "Conceito fundamental para compreender a rotação das articulações e o funcionamento de alavancas."
  },
  {
    "id": 1310,
    "topicId": 1,
    "question": "Como se calcula o Momento de uma Força perpendicular (M) em relação a um eixo de rotação?",
    "options": [
      "M = F / b (razão entre a intensidade da força e o braço da força).",
      "M = F + b (soma da força com a distância ao eixo).",
      "M = F · b (produto da intensidade da força pelo braço da força).",
      "M = F · a (produto da força pela aceleração do corpo)."
    ],
    "correctIndex": 2,
    "explanation": "O momento é dado pelo produto da força pela distância perpendicular do eixo à linha de ação da força: M = F · b.",
    "distractorAnalysis": [
      "Está incorreta: Dividir a força pelo braço (F / b) é dimensionalmente incorreto para calcular o momento rotacional.",
      "Está incorreta: Somar uma força em Newtons com uma distância em metros viola as regras da homogeneidade dimensional.",
      "Está incorreta: F · a não tem significado de momento mecânico; representaria força multiplicada por aceleração."
    ],
    "nursingApplication": "Permite calcular o esforço de rotação gerado por uma força aplicada na pega de uma manivela."
  },
  {
    "id": 1311,
    "topicId": 1,
    "question": "No Sistema Internacional (SI), qual é a unidade correta do Momento de uma Força?",
    "options": [
      "Joule por segundo (J/s).",
      "Pascal por metro quadrado (Pa/m²).",
      "Newton por segundo (N/s).",
      "Newton-metro (N·m)."
    ],
    "correctIndex": 3,
    "explanation": "Como M = F · b, a unidade resulta da multiplicação de Newtons (N) por metros (m): N·m.",
    "distractorAnalysis": [
      "Está incorreta: Joule por segundo (J/s) corresponde a Watt (W), unidade de potência mecânica ou elétrica.",
      "Está incorreta: Pascal por metro quadrado não representa momento rotacional.",
      "Está incorreta: Newton por segundo (N/s) é a taxa de variação temporal de uma força, não um momento."
    ],
    "nursingApplication": "Distingue o momento rotacional (N·m) de outras grandezas da física médica."
  },
  {
    "id": 1312,
    "topicId": 1,
    "question": "O que é o \"Braço da Força\" (b) no cálculo do Momento?",
    "options": [
      "A distância perpendicular medida entre o eixo de rotação e a linha de ação da força.",
      "O comprimento total do membro anatómico medido da cabeça até aos pés.",
      "A massa total do objeto que está a ser rodado em torno do fulcro.",
      "O tempo decorrido desde o início da aplicação da força de tração."
    ],
    "correctIndex": 0,
    "explanation": "O braço (b) é rigorosamente a menor distância geométrica (perpendicular) do fulcro à reta de ação da força.",
    "distractorAnalysis": [
      "Está incorreta: O comprimento total do corpo ou membro não coincide necessariamente com a distância perpendicular ao eixo.",
      "Está incorreta: A massa é uma grandeza inercial escalar (kg), não uma distância geométrica (m).",
      "Está incorreta: O tempo decorrido é uma grandeza temporal em segundos, sem relação com o braço de alavanca."
    ],
    "nursingApplication": "Fundamental para entender que afastar a força da articulação aumenta o momento de rotação."
  },
  {
    "id": 1313,
    "topicId": 1,
    "question": "Se aplicares uma força perpendicular de 70 N na extremidade de uma alavanca a uma distância de 0.6 m do eixo, qual é o momento gerado?",
    "options": [
      "116.67 N·m.",
      "42.0 N·m.",
      "70.6 N·m.",
      "42.0 N."
    ],
    "correctIndex": 1,
    "explanation": "Pela fórmula do momento perpendicular: M = F · b = 70 N · 0.6 m = 42.0 N·m.",
    "distractorAnalysis": [
      "Está incorreta: Dividiu a força pela distância em vez de multiplicar (M = F · b).",
      "Está incorreta: Somou a força com a distância, operação matematicamente errada para grandezas de dimensões diferentes.",
      "Está incorreta: A unidade de momento é o Newton-metro (N·m), e não o Newton (N)."
    ],
    "nursingApplication": "Cálculo prático do torque produzido ao puxar a alavanca de travão de uma cadeira de rodas."
  },
  {
    "id": 1314,
    "topicId": 1,
    "question": "Porque é que uma porta se abre muito mais facilmente quando empurrada perto do puxador (longe das dobradiças) do que perto das dobradiças?",
    "options": [
      "Porque as dobradiças absorvem toda a massa do ar quando a porta é empurrada na extremidade.",
      "Porque o peso da porta diminui para metade quando a força é aplicada longe do eixo.",
      "Porque quanto maior a distância ao eixo de rotação (maior braço b), maior é o momento gerado para a mesma força.",
      "Porque a gravidade terrestre anula-se na extremidade externa da folha da porta."
    ],
    "correctIndex": 2,
    "explanation": "Como M = F·b, aumentando o braço 'b', a mesma força 'F' produz um momento rotacional muito maior, facilitando o giro.",
    "distractorAnalysis": [
      "Está incorreta: As dobradiças são apenas o eixo de rotação; não alteram a massa do ar ambiente.",
      "Está incorreta: O peso da porta é invariável e atua no seu centro de gravidade, independentemente de onde se empurra.",
      "Está incorreta: A gravidade atua uniformemente em toda a porta e não se anula na extremidade do puxador."
    ],
    "nursingApplication": "Princípio físico de ergonomia: aplicar forças no ponto de maior braço de alavanca para poupar esforço."
  },
  {
    "id": 1315,
    "topicId": 1,
    "question": "Se uma força passar exatamente pelo eixo de rotação de um corpo (braço b = 0), qual é o momento que ela produz?",
    "options": [
      "Um momento infinito no sentido dos ponteiros do relógio.",
      "Um momento igual à intensidade da força multiplicada por 9,8.",
      "Um momento constante independente da força aplicada.",
      "Zero (M = 0 N·m), não produzindo qualquer rotação."
    ],
    "correctIndex": 3,
    "explanation": "Se a linha de ação da força intersecta o eixo de rotação, o braço é zero (b = 0), logo M = F · 0 = 0 N·m.",
    "distractorAnalysis": [
      "Está incorreta: Não há momento infinito; uma força sem braço é incapaz de provocar rotação em torno do eixo.",
      "Está incorreta: Multiplicar pela gravidade não tem fundamento físico quando o braço de alavanca é nulo.",
      "Está incorreta: O momento é nulo, e não um valor constante não nulo."
    ],
    "nursingApplication": "Explica por que puxar uma porta na direção exata das dobradiças nunca a fará rodar."
  },
  {
    "id": 1316,
    "topicId": 1,
    "question": "Qual é a condição de equilíbrio rotacional para que um corpo com eixo fixo não sofra aceleração angular?",
    "options": [
      "A soma de todos os momentos de força que atuam sobre ele deve ser nula (∑M = 0).",
      "Apenas a força de atrito deve ser igual a dez vezes o peso do corpo.",
      "O corpo deve ter velocidade angular infinita orientada para o norte.",
      "Todas as forças aplicadas devem ter exatamente a mesma cor e temperatura."
    ],
    "correctIndex": 0,
    "explanation": "A 2ª condição de equilíbrio estático exige que os momentos no sentido horário compensem os anti-horários: ∑M = 0.",
    "distractorAnalysis": [
      "Está incorreta: A força de atrito não precisa de ser dez vezes o peso para haver equilíbrio rotacional.",
      "Está incorreta: Velocidade angular infinita é fisicamente impossível e opõe-se ao repouso estático.",
      "Está incorreta: Cor e temperatura não influenciam as equações de equilíbrio da mecânica clássica."
    ],
    "nursingApplication": "Princípio de funcionamento da balança de braços iguais em repouso perfeitamente equilibrado."
  },
  {
    "id": 1317,
    "topicId": 1,
    "question": "O que mede o Momento de uma Força (ou Torque) na física?",
    "options": [
      "A quantidade total de massa que se desloca exclusivamente em linha reta no vácuo.",
      "O efeito rotativo de uma força em torno de um determinado ponto ou eixo de rotação.",
      "A perda de energia térmica provocada pelo atrito do ar com a superfície de um osso.",
      "A pressão hidrostática exercida por uma coluna de líquido em repouso absoluto."
    ],
    "correctIndex": 1,
    "explanation": "O momento mede a capacidade ou eficácia de uma força em provocar a rotação de um corpo rígido em torno de um fulcro.",
    "distractorAnalysis": [
      "Está incorreta: Deslocamento em linha reta é translação, medida por velocidade ou força resultante, não por momento.",
      "Está incorreta: A perda de energia térmica é dissipação calórica, não momento mecânico de rotação.",
      "Está incorreta: A pressão hidrostática é a razão entre força e área em fluidos (p = ρ·g·h), sem relação com rotação de sólidos."
    ],
    "nursingApplication": "Conceito fundamental para compreender a rotação das articulações e o funcionamento de alavancas."
  },
  {
    "id": 1318,
    "topicId": 1,
    "question": "Como se calcula o Momento de uma Força perpendicular (M) em relação a um eixo de rotação?",
    "options": [
      "M = F / b (razão entre a intensidade da força e o braço da força).",
      "M = F + b (soma da força com a distância ao eixo).",
      "M = F · b (produto da intensidade da força pelo braço da força).",
      "M = F · a (produto da força pela aceleração do corpo)."
    ],
    "correctIndex": 2,
    "explanation": "O momento é dado pelo produto da força pela distância perpendicular do eixo à linha de ação da força: M = F · b.",
    "distractorAnalysis": [
      "Está incorreta: Dividir a força pelo braço (F / b) é dimensionalmente incorreto para calcular o momento rotacional.",
      "Está incorreta: Somar uma força em Newtons com uma distância em metros viola as regras da homogeneidade dimensional.",
      "Está incorreta: F · a não tem significado de momento mecânico; representaria força multiplicada por aceleração."
    ],
    "nursingApplication": "Permite calcular o esforço de rotação gerado por uma força aplicada na pega de uma manivela."
  },
  {
    "id": 1319,
    "topicId": 1,
    "question": "No Sistema Internacional (SI), qual é a unidade correta do Momento de uma Força?",
    "options": [
      "Joule por segundo (J/s).",
      "Pascal por metro quadrado (Pa/m²).",
      "Newton por segundo (N/s).",
      "Newton-metro (N·m)."
    ],
    "correctIndex": 3,
    "explanation": "Como M = F · b, a unidade resulta da multiplicação de Newtons (N) por metros (m): N·m.",
    "distractorAnalysis": [
      "Está incorreta: Joule por segundo (J/s) corresponde a Watt (W), unidade de potência mecânica ou elétrica.",
      "Está incorreta: Pascal por metro quadrado não representa momento rotacional.",
      "Está incorreta: Newton por segundo (N/s) é a taxa de variação temporal de uma força, não um momento."
    ],
    "nursingApplication": "Distingue o momento rotacional (N·m) de outras grandezas da física médica."
  },
  {
    "id": 1320,
    "topicId": 1,
    "question": "O que é o \"Braço da Força\" (b) no cálculo do Momento?",
    "options": [
      "A distância perpendicular medida entre o eixo de rotação e a linha de ação da força.",
      "O comprimento total do membro anatómico medido da cabeça até aos pés.",
      "A massa total do objeto que está a ser rodado em torno do fulcro.",
      "O tempo decorrido desde o início da aplicação da força de tração."
    ],
    "correctIndex": 0,
    "explanation": "O braço (b) é rigorosamente a menor distância geométrica (perpendicular) do fulcro à reta de ação da força.",
    "distractorAnalysis": [
      "Está incorreta: O comprimento total do corpo ou membro não coincide necessariamente com a distância perpendicular ao eixo.",
      "Está incorreta: A massa é uma grandeza inercial escalar (kg), não uma distância geométrica (m).",
      "Está incorreta: O tempo decorrido é uma grandeza temporal em segundos, sem relação com o braço de alavanca."
    ],
    "nursingApplication": "Fundamental para entender que afastar a força da articulação aumenta o momento de rotação."
  },
  {
    "id": 1321,
    "topicId": 1,
    "question": "Se aplicares uma força perpendicular de 35 N na extremidade de uma alavanca a uma distância de 0.6 m do eixo, qual é o momento gerado?",
    "options": [
      "58.33 N·m.",
      "21.0 N·m.",
      "35.6 N·m.",
      "21.0 N."
    ],
    "correctIndex": 1,
    "explanation": "Pela fórmula do momento perpendicular: M = F · b = 35 N · 0.6 m = 21.0 N·m.",
    "distractorAnalysis": [
      "Está incorreta: Dividiu a força pela distância em vez de multiplicar (M = F · b).",
      "Está incorreta: Somou a força com a distância, operação matematicamente errada para grandezas de dimensões diferentes.",
      "Está incorreta: A unidade de momento é o Newton-metro (N·m), e não o Newton (N)."
    ],
    "nursingApplication": "Cálculo prático do torque produzido ao puxar a alavanca de travão de uma cadeira de rodas."
  },
  {
    "id": 1322,
    "topicId": 1,
    "question": "Porque é que uma porta se abre muito mais facilmente quando empurrada perto do puxador (longe das dobradiças) do que perto das dobradiças?",
    "options": [
      "Porque as dobradiças absorvem toda a massa do ar quando a porta é empurrada na extremidade.",
      "Porque o peso da porta diminui para metade quando a força é aplicada longe do eixo.",
      "Porque quanto maior a distância ao eixo de rotação (maior braço b), maior é o momento gerado para a mesma força.",
      "Porque a gravidade terrestre anula-se na extremidade externa da folha da porta."
    ],
    "correctIndex": 2,
    "explanation": "Como M = F·b, aumentando o braço 'b', a mesma força 'F' produz um momento rotacional muito maior, facilitando o giro.",
    "distractorAnalysis": [
      "Está incorreta: As dobradiças são apenas o eixo de rotação; não alteram a massa do ar ambiente.",
      "Está incorreta: O peso da porta é invariável e atua no seu centro de gravidade, independentemente de onde se empurra.",
      "Está incorreta: A gravidade atua uniformemente em toda a porta e não se anula na extremidade do puxador."
    ],
    "nursingApplication": "Princípio físico de ergonomia: aplicar forças no ponto de maior braço de alavanca para poupar esforço."
  },
  {
    "id": 1323,
    "topicId": 1,
    "question": "Se uma força passar exatamente pelo eixo de rotação de um corpo (braço b = 0), qual é o momento que ela produz?",
    "options": [
      "Um momento infinito no sentido dos ponteiros do relógio.",
      "Um momento igual à intensidade da força multiplicada por 9,8.",
      "Um momento constante independente da força aplicada.",
      "Zero (M = 0 N·m), não produzindo qualquer rotação."
    ],
    "correctIndex": 3,
    "explanation": "Se a linha de ação da força intersecta o eixo de rotação, o braço é zero (b = 0), logo M = F · 0 = 0 N·m.",
    "distractorAnalysis": [
      "Está incorreta: Não há momento infinito; uma força sem braço é incapaz de provocar rotação em torno do eixo.",
      "Está incorreta: Multiplicar pela gravidade não tem fundamento físico quando o braço de alavanca é nulo.",
      "Está incorreta: O momento é nulo, e não um valor constante não nulo."
    ],
    "nursingApplication": "Explica por que puxar uma porta na direção exata das dobradiças nunca a fará rodar."
  },
  {
    "id": 1324,
    "topicId": 1,
    "question": "Qual é a condição de equilíbrio rotacional para que um corpo com eixo fixo não sofra aceleração angular?",
    "options": [
      "A soma de todos os momentos de força que atuam sobre ele deve ser nula (∑M = 0).",
      "Apenas a força de atrito deve ser igual a dez vezes o peso do corpo.",
      "O corpo deve ter velocidade angular infinita orientada para o norte.",
      "Todas as forças aplicadas devem ter exatamente a mesma cor e temperatura."
    ],
    "correctIndex": 0,
    "explanation": "A 2ª condição de equilíbrio estático exige que os momentos no sentido horário compensem os anti-horários: ∑M = 0.",
    "distractorAnalysis": [
      "Está incorreta: A força de atrito não precisa de ser dez vezes o peso para haver equilíbrio rotacional.",
      "Está incorreta: Velocidade angular infinita é fisicamente impossível e opõe-se ao repouso estático.",
      "Está incorreta: Cor e temperatura não influenciam as equações de equilíbrio da mecânica clássica."
    ],
    "nursingApplication": "Princípio de funcionamento da balança de braços iguais em repouso perfeitamente equilibrado."
  },
  {
    "id": 1325,
    "topicId": 1,
    "question": "O que mede o Momento de uma Força (ou Torque) na física?",
    "options": [
      "A quantidade total de massa que se desloca exclusivamente em linha reta no vácuo.",
      "O efeito rotativo de uma força em torno de um determinado ponto ou eixo de rotação.",
      "A perda de energia térmica provocada pelo atrito do ar com a superfície de um osso.",
      "A pressão hidrostática exercida por uma coluna de líquido em repouso absoluto."
    ],
    "correctIndex": 1,
    "explanation": "O momento mede a capacidade ou eficácia de uma força em provocar a rotação de um corpo rígido em torno de um fulcro.",
    "distractorAnalysis": [
      "Está incorreta: Deslocamento em linha reta é translação, medida por velocidade ou força resultante, não por momento.",
      "Está incorreta: A perda de energia térmica é dissipação calórica, não momento mecânico de rotação.",
      "Está incorreta: A pressão hidrostática é a razão entre força e área em fluidos (p = ρ·g·h), sem relação com rotação de sólidos."
    ],
    "nursingApplication": "Conceito fundamental para compreender a rotação das articulações e o funcionamento de alavancas."
  },
  {
    "id": 1326,
    "topicId": 1,
    "question": "Como se calcula o Momento de uma Força perpendicular (M) em relação a um eixo de rotação?",
    "options": [
      "M = F / b (razão entre a intensidade da força e o braço da força).",
      "M = F + b (soma da força com a distância ao eixo).",
      "M = F · b (produto da intensidade da força pelo braço da força).",
      "M = F · a (produto da força pela aceleração do corpo)."
    ],
    "correctIndex": 2,
    "explanation": "O momento é dado pelo produto da força pela distância perpendicular do eixo à linha de ação da força: M = F · b.",
    "distractorAnalysis": [
      "Está incorreta: Dividir a força pelo braço (F / b) é dimensionalmente incorreto para calcular o momento rotacional.",
      "Está incorreta: Somar uma força em Newtons com uma distância em metros viola as regras da homogeneidade dimensional.",
      "Está incorreta: F · a não tem significado de momento mecânico; representaria força multiplicada por aceleração."
    ],
    "nursingApplication": "Permite calcular o esforço de rotação gerado por uma força aplicada na pega de uma manivela."
  },
  {
    "id": 1327,
    "topicId": 1,
    "question": "No Sistema Internacional (SI), qual é a unidade correta do Momento de uma Força?",
    "options": [
      "Joule por segundo (J/s).",
      "Pascal por metro quadrado (Pa/m²).",
      "Newton por segundo (N/s).",
      "Newton-metro (N·m)."
    ],
    "correctIndex": 3,
    "explanation": "Como M = F · b, a unidade resulta da multiplicação de Newtons (N) por metros (m): N·m.",
    "distractorAnalysis": [
      "Está incorreta: Joule por segundo (J/s) corresponde a Watt (W), unidade de potência mecânica ou elétrica.",
      "Está incorreta: Pascal por metro quadrado não representa momento rotacional.",
      "Está incorreta: Newton por segundo (N/s) é a taxa de variação temporal de uma força, não um momento."
    ],
    "nursingApplication": "Distingue o momento rotacional (N·m) de outras grandezas da física médica."
  },
  {
    "id": 1328,
    "topicId": 1,
    "question": "O que é o \"Braço da Força\" (b) no cálculo do Momento?",
    "options": [
      "A distância perpendicular medida entre o eixo de rotação e a linha de ação da força.",
      "O comprimento total do membro anatómico medido da cabeça até aos pés.",
      "A massa total do objeto que está a ser rodado em torno do fulcro.",
      "O tempo decorrido desde o início da aplicação da força de tração."
    ],
    "correctIndex": 0,
    "explanation": "O braço (b) é rigorosamente a menor distância geométrica (perpendicular) do fulcro à reta de ação da força.",
    "distractorAnalysis": [
      "Está incorreta: O comprimento total do corpo ou membro não coincide necessariamente com a distância perpendicular ao eixo.",
      "Está incorreta: A massa é uma grandeza inercial escalar (kg), não uma distância geométrica (m).",
      "Está incorreta: O tempo decorrido é uma grandeza temporal em segundos, sem relação com o braço de alavanca."
    ],
    "nursingApplication": "Fundamental para entender que afastar a força da articulação aumenta o momento de rotação."
  },
  {
    "id": 1329,
    "topicId": 1,
    "question": "Se aplicares uma força perpendicular de 75 N na extremidade de uma alavanca a uma distância de 0.6 m do eixo, qual é o momento gerado?",
    "options": [
      "125.0 N·m.",
      "45.0 N·m.",
      "75.6 N·m.",
      "45.0 N."
    ],
    "correctIndex": 1,
    "explanation": "Pela fórmula do momento perpendicular: M = F · b = 75 N · 0.6 m = 45.0 N·m.",
    "distractorAnalysis": [
      "Está incorreta: Dividiu a força pela distância em vez de multiplicar (M = F · b).",
      "Está incorreta: Somou a força com a distância, operação matematicamente errada para grandezas de dimensões diferentes.",
      "Está incorreta: A unidade de momento é o Newton-metro (N·m), e não o Newton (N)."
    ],
    "nursingApplication": "Cálculo prático do torque produzido ao puxar a alavanca de travão de uma cadeira de rodas."
  },
  {
    "id": 1330,
    "topicId": 1,
    "question": "Porque é que uma porta se abre muito mais facilmente quando empurrada perto do puxador (longe das dobradiças) do que perto das dobradiças?",
    "options": [
      "Porque as dobradiças absorvem toda a massa do ar quando a porta é empurrada na extremidade.",
      "Porque o peso da porta diminui para metade quando a força é aplicada longe do eixo.",
      "Porque quanto maior a distância ao eixo de rotação (maior braço b), maior é o momento gerado para a mesma força.",
      "Porque a gravidade terrestre anula-se na extremidade externa da folha da porta."
    ],
    "correctIndex": 2,
    "explanation": "Como M = F·b, aumentando o braço 'b', a mesma força 'F' produz um momento rotacional muito maior, facilitando o giro.",
    "distractorAnalysis": [
      "Está incorreta: As dobradiças são apenas o eixo de rotação; não alteram a massa do ar ambiente.",
      "Está incorreta: O peso da porta é invariável e atua no seu centro de gravidade, independentemente de onde se empurra.",
      "Está incorreta: A gravidade atua uniformemente em toda a porta e não se anula na extremidade do puxador."
    ],
    "nursingApplication": "Princípio físico de ergonomia: aplicar forças no ponto de maior braço de alavanca para poupar esforço."
  },
  {
    "id": 1331,
    "topicId": 1,
    "question": "Se uma força passar exatamente pelo eixo de rotação de um corpo (braço b = 0), qual é o momento que ela produz?",
    "options": [
      "Um momento infinito no sentido dos ponteiros do relógio.",
      "Um momento igual à intensidade da força multiplicada por 9,8.",
      "Um momento constante independente da força aplicada.",
      "Zero (M = 0 N·m), não produzindo qualquer rotação."
    ],
    "correctIndex": 3,
    "explanation": "Se a linha de ação da força intersecta o eixo de rotação, o braço é zero (b = 0), logo M = F · 0 = 0 N·m.",
    "distractorAnalysis": [
      "Está incorreta: Não há momento infinito; uma força sem braço é incapaz de provocar rotação em torno do eixo.",
      "Está incorreta: Multiplicar pela gravidade não tem fundamento físico quando o braço de alavanca é nulo.",
      "Está incorreta: O momento é nulo, e não um valor constante não nulo."
    ],
    "nursingApplication": "Explica por que puxar uma porta na direção exata das dobradiças nunca a fará rodar."
  },
  {
    "id": 1332,
    "topicId": 1,
    "question": "Qual é a condição de equilíbrio rotacional para que um corpo com eixo fixo não sofra aceleração angular?",
    "options": [
      "A soma de todos os momentos de força que atuam sobre ele deve ser nula (∑M = 0).",
      "Apenas a força de atrito deve ser igual a dez vezes o peso do corpo.",
      "O corpo deve ter velocidade angular infinita orientada para o norte.",
      "Todas as forças aplicadas devem ter exatamente a mesma cor e temperatura."
    ],
    "correctIndex": 0,
    "explanation": "A 2ª condição de equilíbrio estático exige que os momentos no sentido horário compensem os anti-horários: ∑M = 0.",
    "distractorAnalysis": [
      "Está incorreta: A força de atrito não precisa de ser dez vezes o peso para haver equilíbrio rotacional.",
      "Está incorreta: Velocidade angular infinita é fisicamente impossível e opõe-se ao repouso estático.",
      "Está incorreta: Cor e temperatura não influenciam as equações de equilíbrio da mecânica clássica."
    ],
    "nursingApplication": "Princípio de funcionamento da balança de braços iguais em repouso perfeitamente equilibrado."
  },
  {
    "id": 1333,
    "topicId": 1,
    "question": "O que mede o Momento de uma Força (ou Torque) na física?",
    "options": [
      "A quantidade total de massa que se desloca exclusivamente em linha reta no vácuo.",
      "O efeito rotativo de uma força em torno de um determinado ponto ou eixo de rotação.",
      "A perda de energia térmica provocada pelo atrito do ar com a superfície de um osso.",
      "A pressão hidrostática exercida por uma coluna de líquido em repouso absoluto."
    ],
    "correctIndex": 1,
    "explanation": "O momento mede a capacidade ou eficácia de uma força em provocar a rotação de um corpo rígido em torno de um fulcro.",
    "distractorAnalysis": [
      "Está incorreta: Deslocamento em linha reta é translação, medida por velocidade ou força resultante, não por momento.",
      "Está incorreta: A perda de energia térmica é dissipação calórica, não momento mecânico de rotação.",
      "Está incorreta: A pressão hidrostática é a razão entre força e área em fluidos (p = ρ·g·h), sem relação com rotação de sólidos."
    ],
    "nursingApplication": "Conceito fundamental para compreender a rotação das articulações e o funcionamento de alavancas."
  },
  {
    "id": 1334,
    "topicId": 1,
    "question": "Como se calcula o Momento de uma Força perpendicular (M) em relação a um eixo de rotação?",
    "options": [
      "M = F / b (razão entre a intensidade da força e o braço da força).",
      "M = F + b (soma da força com a distância ao eixo).",
      "M = F · b (produto da intensidade da força pelo braço da força).",
      "M = F · a (produto da força pela aceleração do corpo)."
    ],
    "correctIndex": 2,
    "explanation": "O momento é dado pelo produto da força pela distância perpendicular do eixo à linha de ação da força: M = F · b.",
    "distractorAnalysis": [
      "Está incorreta: Dividir a força pelo braço (F / b) é dimensionalmente incorreto para calcular o momento rotacional.",
      "Está incorreta: Somar uma força em Newtons com uma distância em metros viola as regras da homogeneidade dimensional.",
      "Está incorreta: F · a não tem significado de momento mecânico; representaria força multiplicada por aceleração."
    ],
    "nursingApplication": "Permite calcular o esforço de rotação gerado por uma força aplicada na pega de uma manivela."
  },
  {
    "id": 1335,
    "topicId": 1,
    "question": "No Sistema Internacional (SI), qual é a unidade correta do Momento de uma Força?",
    "options": [
      "Joule por segundo (J/s).",
      "Pascal por metro quadrado (Pa/m²).",
      "Newton por segundo (N/s).",
      "Newton-metro (N·m)."
    ],
    "correctIndex": 3,
    "explanation": "Como M = F · b, a unidade resulta da multiplicação de Newtons (N) por metros (m): N·m.",
    "distractorAnalysis": [
      "Está incorreta: Joule por segundo (J/s) corresponde a Watt (W), unidade de potência mecânica ou elétrica.",
      "Está incorreta: Pascal por metro quadrado não representa momento rotacional.",
      "Está incorreta: Newton por segundo (N/s) é a taxa de variação temporal de uma força, não um momento."
    ],
    "nursingApplication": "Distingue o momento rotacional (N·m) de outras grandezas da física médica."
  },
  {
    "id": 1336,
    "topicId": 1,
    "question": "O que é o \"Braço da Força\" (b) no cálculo do Momento?",
    "options": [
      "A distância perpendicular medida entre o eixo de rotação e a linha de ação da força.",
      "O comprimento total do membro anatómico medido da cabeça até aos pés.",
      "A massa total do objeto que está a ser rodado em torno do fulcro.",
      "O tempo decorrido desde o início da aplicação da força de tração."
    ],
    "correctIndex": 0,
    "explanation": "O braço (b) é rigorosamente a menor distância geométrica (perpendicular) do fulcro à reta de ação da força.",
    "distractorAnalysis": [
      "Está incorreta: O comprimento total do corpo ou membro não coincide necessariamente com a distância perpendicular ao eixo.",
      "Está incorreta: A massa é uma grandeza inercial escalar (kg), não uma distância geométrica (m).",
      "Está incorreta: O tempo decorrido é uma grandeza temporal em segundos, sem relação com o braço de alavanca."
    ],
    "nursingApplication": "Fundamental para entender que afastar a força da articulação aumenta o momento de rotação."
  },
  {
    "id": 1337,
    "topicId": 1,
    "question": "Se aplicares uma força perpendicular de 40 N na extremidade de uma alavanca a uma distância de 0.6 m do eixo, qual é o momento gerado?",
    "options": [
      "66.67 N·m.",
      "24.0 N·m.",
      "40.6 N·m.",
      "24.0 N."
    ],
    "correctIndex": 1,
    "explanation": "Pela fórmula do momento perpendicular: M = F · b = 40 N · 0.6 m = 24.0 N·m.",
    "distractorAnalysis": [
      "Está incorreta: Dividiu a força pela distância em vez de multiplicar (M = F · b).",
      "Está incorreta: Somou a força com a distância, operação matematicamente errada para grandezas de dimensões diferentes.",
      "Está incorreta: A unidade de momento é o Newton-metro (N·m), e não o Newton (N)."
    ],
    "nursingApplication": "Cálculo prático do torque produzido ao puxar a alavanca de travão de uma cadeira de rodas."
  },
  {
    "id": 1338,
    "topicId": 1,
    "question": "Porque é que uma porta se abre muito mais facilmente quando empurrada perto do puxador (longe das dobradiças) do que perto das dobradiças?",
    "options": [
      "Porque as dobradiças absorvem toda a massa do ar quando a porta é empurrada na extremidade.",
      "Porque o peso da porta diminui para metade quando a força é aplicada longe do eixo.",
      "Porque quanto maior a distância ao eixo de rotação (maior braço b), maior é o momento gerado para a mesma força.",
      "Porque a gravidade terrestre anula-se na extremidade externa da folha da porta."
    ],
    "correctIndex": 2,
    "explanation": "Como M = F·b, aumentando o braço 'b', a mesma força 'F' produz um momento rotacional muito maior, facilitando o giro.",
    "distractorAnalysis": [
      "Está incorreta: As dobradiças são apenas o eixo de rotação; não alteram a massa do ar ambiente.",
      "Está incorreta: O peso da porta é invariável e atua no seu centro de gravidade, independentemente de onde se empurra.",
      "Está incorreta: A gravidade atua uniformemente em toda a porta e não se anula na extremidade do puxador."
    ],
    "nursingApplication": "Princípio físico de ergonomia: aplicar forças no ponto de maior braço de alavanca para poupar esforço."
  },
  {
    "id": 1339,
    "topicId": 1,
    "question": "Se uma força passar exatamente pelo eixo de rotação de um corpo (braço b = 0), qual é o momento que ela produz?",
    "options": [
      "Um momento infinito no sentido dos ponteiros do relógio.",
      "Um momento igual à intensidade da força multiplicada por 9,8.",
      "Um momento constante independente da força aplicada.",
      "Zero (M = 0 N·m), não produzindo qualquer rotação."
    ],
    "correctIndex": 3,
    "explanation": "Se a linha de ação da força intersecta o eixo de rotação, o braço é zero (b = 0), logo M = F · 0 = 0 N·m.",
    "distractorAnalysis": [
      "Está incorreta: Não há momento infinito; uma força sem braço é incapaz de provocar rotação em torno do eixo.",
      "Está incorreta: Multiplicar pela gravidade não tem fundamento físico quando o braço de alavanca é nulo.",
      "Está incorreta: O momento é nulo, e não um valor constante não nulo."
    ],
    "nursingApplication": "Explica por que puxar uma porta na direção exata das dobradiças nunca a fará rodar."
  },
  {
    "id": 1340,
    "topicId": 1,
    "question": "Qual é a condição de equilíbrio rotacional para que um corpo com eixo fixo não sofra aceleração angular?",
    "options": [
      "A soma de todos os momentos de força que atuam sobre ele deve ser nula (∑M = 0).",
      "Apenas a força de atrito deve ser igual a dez vezes o peso do corpo.",
      "O corpo deve ter velocidade angular infinita orientada para o norte.",
      "Todas as forças aplicadas devem ter exatamente a mesma cor e temperatura."
    ],
    "correctIndex": 0,
    "explanation": "A 2ª condição de equilíbrio estático exige que os momentos no sentido horário compensem os anti-horários: ∑M = 0.",
    "distractorAnalysis": [
      "Está incorreta: A força de atrito não precisa de ser dez vezes o peso para haver equilíbrio rotacional.",
      "Está incorreta: Velocidade angular infinita é fisicamente impossível e opõe-se ao repouso estático.",
      "Está incorreta: Cor e temperatura não influenciam as equações de equilíbrio da mecânica clássica."
    ],
    "nursingApplication": "Princípio de funcionamento da balança de braços iguais em repouso perfeitamente equilibrado."
  },
  {
    "id": 1341,
    "topicId": 1,
    "question": "O que mede o Momento de uma Força (ou Torque) na física?",
    "options": [
      "A quantidade total de massa que se desloca exclusivamente em linha reta no vácuo.",
      "O efeito rotativo de uma força em torno de um determinado ponto ou eixo de rotação.",
      "A perda de energia térmica provocada pelo atrito do ar com a superfície de um osso.",
      "A pressão hidrostática exercida por uma coluna de líquido em repouso absoluto."
    ],
    "correctIndex": 1,
    "explanation": "O momento mede a capacidade ou eficácia de uma força em provocar a rotação de um corpo rígido em torno de um fulcro.",
    "distractorAnalysis": [
      "Está incorreta: Deslocamento em linha reta é translação, medida por velocidade ou força resultante, não por momento.",
      "Está incorreta: A perda de energia térmica é dissipação calórica, não momento mecânico de rotação.",
      "Está incorreta: A pressão hidrostática é a razão entre força e área em fluidos (p = ρ·g·h), sem relação com rotação de sólidos."
    ],
    "nursingApplication": "Conceito fundamental para compreender a rotação das articulações e o funcionamento de alavancas."
  },
  {
    "id": 1342,
    "topicId": 1,
    "question": "Como se calcula o Momento de uma Força perpendicular (M) em relação a um eixo de rotação?",
    "options": [
      "M = F / b (razão entre a intensidade da força e o braço da força).",
      "M = F + b (soma da força com a distância ao eixo).",
      "M = F · b (produto da intensidade da força pelo braço da força).",
      "M = F · a (produto da força pela aceleração do corpo)."
    ],
    "correctIndex": 2,
    "explanation": "O momento é dado pelo produto da força pela distância perpendicular do eixo à linha de ação da força: M = F · b.",
    "distractorAnalysis": [
      "Está incorreta: Dividir a força pelo braço (F / b) é dimensionalmente incorreto para calcular o momento rotacional.",
      "Está incorreta: Somar uma força em Newtons com uma distância em metros viola as regras da homogeneidade dimensional.",
      "Está incorreta: F · a não tem significado de momento mecânico; representaria força multiplicada por aceleração."
    ],
    "nursingApplication": "Permite calcular o esforço de rotação gerado por uma força aplicada na pega de uma manivela."
  },
  {
    "id": 1343,
    "topicId": 1,
    "question": "No Sistema Internacional (SI), qual é a unidade correta do Momento de uma Força?",
    "options": [
      "Joule por segundo (J/s).",
      "Pascal por metro quadrado (Pa/m²).",
      "Newton por segundo (N/s).",
      "Newton-metro (N·m)."
    ],
    "correctIndex": 3,
    "explanation": "Como M = F · b, a unidade resulta da multiplicação de Newtons (N) por metros (m): N·m.",
    "distractorAnalysis": [
      "Está incorreta: Joule por segundo (J/s) corresponde a Watt (W), unidade de potência mecânica ou elétrica.",
      "Está incorreta: Pascal por metro quadrado não representa momento rotacional.",
      "Está incorreta: Newton por segundo (N/s) é a taxa de variação temporal de uma força, não um momento."
    ],
    "nursingApplication": "Distingue o momento rotacional (N·m) de outras grandezas da física médica."
  },
  {
    "id": 1344,
    "topicId": 1,
    "question": "O que é o \"Braço da Força\" (b) no cálculo do Momento?",
    "options": [
      "A distância perpendicular medida entre o eixo de rotação e a linha de ação da força.",
      "O comprimento total do membro anatómico medido da cabeça até aos pés.",
      "A massa total do objeto que está a ser rodado em torno do fulcro.",
      "O tempo decorrido desde o início da aplicação da força de tração."
    ],
    "correctIndex": 0,
    "explanation": "O braço (b) é rigorosamente a menor distância geométrica (perpendicular) do fulcro à reta de ação da força.",
    "distractorAnalysis": [
      "Está incorreta: O comprimento total do corpo ou membro não coincide necessariamente com a distância perpendicular ao eixo.",
      "Está incorreta: A massa é uma grandeza inercial escalar (kg), não uma distância geométrica (m).",
      "Está incorreta: O tempo decorrido é uma grandeza temporal em segundos, sem relação com o braço de alavanca."
    ],
    "nursingApplication": "Fundamental para entender que afastar a força da articulação aumenta o momento de rotação."
  },
  {
    "id": 1345,
    "topicId": 1,
    "question": "Se aplicares uma força perpendicular de 80 N na extremidade de uma alavanca a uma distância de 0.6 m do eixo, qual é o momento gerado?",
    "options": [
      "133.33 N·m.",
      "48.0 N·m.",
      "80.6 N·m.",
      "48.0 N."
    ],
    "correctIndex": 1,
    "explanation": "Pela fórmula do momento perpendicular: M = F · b = 80 N · 0.6 m = 48.0 N·m.",
    "distractorAnalysis": [
      "Está incorreta: Dividiu a força pela distância em vez de multiplicar (M = F · b).",
      "Está incorreta: Somou a força com a distância, operação matematicamente errada para grandezas de dimensões diferentes.",
      "Está incorreta: A unidade de momento é o Newton-metro (N·m), e não o Newton (N)."
    ],
    "nursingApplication": "Cálculo prático do torque produzido ao puxar a alavanca de travão de uma cadeira de rodas."
  },
  {
    "id": 1346,
    "topicId": 1,
    "question": "Porque é que uma porta se abre muito mais facilmente quando empurrada perto do puxador (longe das dobradiças) do que perto das dobradiças?",
    "options": [
      "Porque as dobradiças absorvem toda a massa do ar quando a porta é empurrada na extremidade.",
      "Porque o peso da porta diminui para metade quando a força é aplicada longe do eixo.",
      "Porque quanto maior a distância ao eixo de rotação (maior braço b), maior é o momento gerado para a mesma força.",
      "Porque a gravidade terrestre anula-se na extremidade externa da folha da porta."
    ],
    "correctIndex": 2,
    "explanation": "Como M = F·b, aumentando o braço 'b', a mesma força 'F' produz um momento rotacional muito maior, facilitando o giro.",
    "distractorAnalysis": [
      "Está incorreta: As dobradiças são apenas o eixo de rotação; não alteram a massa do ar ambiente.",
      "Está incorreta: O peso da porta é invariável e atua no seu centro de gravidade, independentemente de onde se empurra.",
      "Está incorreta: A gravidade atua uniformemente em toda a porta e não se anula na extremidade do puxador."
    ],
    "nursingApplication": "Princípio físico de ergonomia: aplicar forças no ponto de maior braço de alavanca para poupar esforço."
  },
  {
    "id": 1347,
    "topicId": 1,
    "question": "Se uma força passar exatamente pelo eixo de rotação de um corpo (braço b = 0), qual é o momento que ela produz?",
    "options": [
      "Um momento infinito no sentido dos ponteiros do relógio.",
      "Um momento igual à intensidade da força multiplicada por 9,8.",
      "Um momento constante independente da força aplicada.",
      "Zero (M = 0 N·m), não produzindo qualquer rotação."
    ],
    "correctIndex": 3,
    "explanation": "Se a linha de ação da força intersecta o eixo de rotação, o braço é zero (b = 0), logo M = F · 0 = 0 N·m.",
    "distractorAnalysis": [
      "Está incorreta: Não há momento infinito; uma força sem braço é incapaz de provocar rotação em torno do eixo.",
      "Está incorreta: Multiplicar pela gravidade não tem fundamento físico quando o braço de alavanca é nulo.",
      "Está incorreta: O momento é nulo, e não um valor constante não nulo."
    ],
    "nursingApplication": "Explica por que puxar uma porta na direção exata das dobradiças nunca a fará rodar."
  },
  {
    "id": 1348,
    "topicId": 1,
    "question": "Qual é a condição de equilíbrio rotacional para que um corpo com eixo fixo não sofra aceleração angular?",
    "options": [
      "A soma de todos os momentos de força que atuam sobre ele deve ser nula (∑M = 0).",
      "Apenas a força de atrito deve ser igual a dez vezes o peso do corpo.",
      "O corpo deve ter velocidade angular infinita orientada para o norte.",
      "Todas as forças aplicadas devem ter exatamente a mesma cor e temperatura."
    ],
    "correctIndex": 0,
    "explanation": "A 2ª condição de equilíbrio estático exige que os momentos no sentido horário compensem os anti-horários: ∑M = 0.",
    "distractorAnalysis": [
      "Está incorreta: A força de atrito não precisa de ser dez vezes o peso para haver equilíbrio rotacional.",
      "Está incorreta: Velocidade angular infinita é fisicamente impossível e opõe-se ao repouso estático.",
      "Está incorreta: Cor e temperatura não influenciam as equações de equilíbrio da mecânica clássica."
    ],
    "nursingApplication": "Princípio de funcionamento da balança de braços iguais em repouso perfeitamente equilibrado."
  },
  {
    "id": 1349,
    "topicId": 1,
    "question": "O que mede o Momento de uma Força (ou Torque) na física?",
    "options": [
      "A quantidade total de massa que se desloca exclusivamente em linha reta no vácuo.",
      "O efeito rotativo de uma força em torno de um determinado ponto ou eixo de rotação.",
      "A perda de energia térmica provocada pelo atrito do ar com a superfície de um osso.",
      "A pressão hidrostática exercida por uma coluna de líquido em repouso absoluto."
    ],
    "correctIndex": 1,
    "explanation": "O momento mede a capacidade ou eficácia de uma força em provocar a rotação de um corpo rígido em torno de um fulcro.",
    "distractorAnalysis": [
      "Está incorreta: Deslocamento em linha reta é translação, medida por velocidade ou força resultante, não por momento.",
      "Está incorreta: A perda de energia térmica é dissipação calórica, não momento mecânico de rotação.",
      "Está incorreta: A pressão hidrostática é a razão entre força e área em fluidos (p = ρ·g·h), sem relação com rotação de sólidos."
    ],
    "nursingApplication": "Conceito fundamental para compreender a rotação das articulações e o funcionamento de alavancas."
  },
  {
    "id": 1350,
    "topicId": 1,
    "question": "Como se calcula o Momento de uma Força perpendicular (M) em relação a um eixo de rotação?",
    "options": [
      "M = F / b (razão entre a intensidade da força e o braço da força).",
      "M = F + b (soma da força com a distância ao eixo).",
      "M = F · b (produto da intensidade da força pelo braço da força).",
      "M = F · a (produto da força pela aceleração do corpo)."
    ],
    "correctIndex": 2,
    "explanation": "O momento é dado pelo produto da força pela distância perpendicular do eixo à linha de ação da força: M = F · b.",
    "distractorAnalysis": [
      "Está incorreta: Dividir a força pelo braço (F / b) é dimensionalmente incorreto para calcular o momento rotacional.",
      "Está incorreta: Somar uma força em Newtons com uma distância em metros viola as regras da homogeneidade dimensional.",
      "Está incorreta: F · a não tem significado de momento mecânico; representaria força multiplicada por aceleração."
    ],
    "nursingApplication": "Permite calcular o esforço de rotação gerado por uma força aplicada na pega de uma manivela."
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
    "nursingApplication": "Exemplo biológico nos slides: a cabeça apoiada na coluna vertebral (fulcro no occipital, músculos da nuca na nuca)."
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
    "explanation": "O fulcro está na articulação occipital (meio), a resistência é o peso da face/cabeça (frente) e a potência são os músculos da nuca (trás).",
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
    "id": 1360,
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
    "id": 1361,
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
    "id": 1362,
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
    "nursingApplication": "Exemplo biológico nos slides: a cabeça apoiada na coluna vertebral (fulcro no occipital, músculos da nuca na nuca)."
  },
  {
    "id": 1363,
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
    "id": 1364,
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
    "id": 1365,
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
    "id": 1366,
    "topicId": 1,
    "question": "No corpo humano, o sistema que equilibra o peso da cabeça sobre a coluna cervical (músculos da nuca) é um exemplo de alavanca:",
    "options": [
      "De 2.ª Classe (Inter-resistente), onde o queixo funciona como o ponto de apoio fixo do solo.",
      "De 3.ª Classe (Interpotente), onde o cérebro atua como força potente geradora de calor.",
      "De 1.ª Classe (Interfixa), com a articulação atlanto-occipital a funcionar como fulcro central.",
      "De 4.ª Classe, uma categoria especial exclusiva de tecidos nervosos desmielinizados."
    ],
    "correctIndex": 2,
    "explanation": "O fulcro está na articulação occipital (meio), a resistência é o peso da face/cabeça (frente) e a potência são os músculos da nuca (trás).",
    "distractorAnalysis": [
      "Está incorreta: O queixo não é o fulcro; o apoio rotacional da cabeça situa-se nas vértebras cervicais superiores.",
      "Está incorreta: O cérebro não é um músculo nem gera força potente mecânica de tração.",
      "Está incorreta: Na física clássica existem apenas 3 classes de alavancas; não existe 4.ª classe."
    ],
    "nursingApplication": "Explica como a musculatura posterior do pescoço previne a queda da cabeça para a frente com mínimo esforço."
  },
  {
    "id": 1367,
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
    "id": 1368,
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
    "id": 1369,
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
    "id": 1370,
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
    "nursingApplication": "Exemplo biológico nos slides: a cabeça apoiada na coluna vertebral (fulcro no occipital, músculos da nuca na nuca)."
  },
  {
    "id": 1371,
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
    "id": 1372,
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
    "id": 1373,
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
    "id": 1374,
    "topicId": 1,
    "question": "No corpo humano, o sistema que equilibra o peso da cabeça sobre a coluna cervical (músculos da nuca) é um exemplo de alavanca:",
    "options": [
      "De 2.ª Classe (Inter-resistente), onde o queixo funciona como o ponto de apoio fixo do solo.",
      "De 3.ª Classe (Interpotente), onde o cérebro atua como força potente geradora de calor.",
      "De 1.ª Classe (Interfixa), com a articulação atlanto-occipital a funcionar como fulcro central.",
      "De 4.ª Classe, uma categoria especial exclusiva de tecidos nervosos desmielinizados."
    ],
    "correctIndex": 2,
    "explanation": "O fulcro está na articulação occipital (meio), a resistência é o peso da face/cabeça (frente) e a potência são os músculos da nuca (trás).",
    "distractorAnalysis": [
      "Está incorreta: O queixo não é o fulcro; o apoio rotacional da cabeça situa-se nas vértebras cervicais superiores.",
      "Está incorreta: O cérebro não é um músculo nem gera força potente mecânica de tração.",
      "Está incorreta: Na física clássica existem apenas 3 classes de alavancas; não existe 4.ª classe."
    ],
    "nursingApplication": "Explica como a musculatura posterior do pescoço previne a queda da cabeça para a frente com mínimo esforço."
  },
  {
    "id": 1375,
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
    "id": 1376,
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
    "id": 1377,
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
    "id": 1378,
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
    "nursingApplication": "Exemplo biológico nos slides: a cabeça apoiada na coluna vertebral (fulcro no occipital, músculos da nuca na nuca)."
  },
  {
    "id": 1379,
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
    "id": 1380,
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
    "id": 1381,
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
    "id": 1382,
    "topicId": 1,
    "question": "No corpo humano, o sistema que equilibra o peso da cabeça sobre a coluna cervical (músculos da nuca) é um exemplo de alavanca:",
    "options": [
      "De 2.ª Classe (Inter-resistente), onde o queixo funciona como o ponto de apoio fixo do solo.",
      "De 3.ª Classe (Interpotente), onde o cérebro atua como força potente geradora de calor.",
      "De 1.ª Classe (Interfixa), com a articulação atlanto-occipital a funcionar como fulcro central.",
      "De 4.ª Classe, uma categoria especial exclusiva de tecidos nervosos desmielinizados."
    ],
    "correctIndex": 2,
    "explanation": "O fulcro está na articulação occipital (meio), a resistência é o peso da face/cabeça (frente) e a potência são os músculos da nuca (trás).",
    "distractorAnalysis": [
      "Está incorreta: O queixo não é o fulcro; o apoio rotacional da cabeça situa-se nas vértebras cervicais superiores.",
      "Está incorreta: O cérebro não é um músculo nem gera força potente mecânica de tração.",
      "Está incorreta: Na física clássica existem apenas 3 classes de alavancas; não existe 4.ª classe."
    ],
    "nursingApplication": "Explica como a musculatura posterior do pescoço previne a queda da cabeça para a frente com mínimo esforço."
  },
  {
    "id": 1383,
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
    "id": 1384,
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
    "id": 1385,
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
    "id": 1386,
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
    "nursingApplication": "Exemplo biológico nos slides: a cabeça apoiada na coluna vertebral (fulcro no occipital, músculos da nuca na nuca)."
  },
  {
    "id": 1387,
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
    "id": 1388,
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
    "id": 1389,
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
    "id": 1390,
    "topicId": 1,
    "question": "No corpo humano, o sistema que equilibra o peso da cabeça sobre a coluna cervical (músculos da nuca) é um exemplo de alavanca:",
    "options": [
      "De 2.ª Classe (Inter-resistente), onde o queixo funciona como o ponto de apoio fixo do solo.",
      "De 3.ª Classe (Interpotente), onde o cérebro atua como força potente geradora de calor.",
      "De 1.ª Classe (Interfixa), com a articulação atlanto-occipital a funcionar como fulcro central.",
      "De 4.ª Classe, uma categoria especial exclusiva de tecidos nervosos desmielinizados."
    ],
    "correctIndex": 2,
    "explanation": "O fulcro está na articulação occipital (meio), a resistência é o peso da face/cabeça (frente) e a potência são os músculos da nuca (trás).",
    "distractorAnalysis": [
      "Está incorreta: O queixo não é o fulcro; o apoio rotacional da cabeça situa-se nas vértebras cervicais superiores.",
      "Está incorreta: O cérebro não é um músculo nem gera força potente mecânica de tração.",
      "Está incorreta: Na física clássica existem apenas 3 classes de alavancas; não existe 4.ª classe."
    ],
    "nursingApplication": "Explica como a musculatura posterior do pescoço previne a queda da cabeça para a frente com mínimo esforço."
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
    "nursingApplication": "Exemplo biológico nos slides: a cabeça apoiada na coluna vertebral (fulcro no occipital, músculos da nuca na nuca)."
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
    "explanation": "O fulcro está na articulação occipital (meio), a resistência é o peso da face/cabeça (frente) e a potência são os músculos da nuca (trás).",
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
    "id": 1400,
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
    "id": 1410,
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
    "id": 1411,
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
    "id": 1412,
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
    "id": 1413,
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
    "id": 1414,
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
    "id": 1415,
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
    "id": 1416,
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
    "id": 1417,
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
    "id": 1418,
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
    "id": 1419,
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
    "id": 1420,
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
    "id": 1421,
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
    "id": 1422,
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
    "id": 1423,
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
    "id": 1424,
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
    "id": 1425,
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
    "id": 1426,
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
    "id": 1427,
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
    "id": 1428,
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
    "id": 1429,
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
    "id": 1430,
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
    "id": 1431,
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
    "id": 1432,
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
    "id": 1433,
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
    "id": 1434,
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
    "id": 1435,
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
    "id": 1436,
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
    "id": 1437,
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
    "id": 1438,
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
    "id": 1439,
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
    "id": 1440,
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
    "id": 1450,
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
    "id": 1451,
    "topicId": 1,
    "question": "O que é o Centro de Gravidade (CG) de um corpo humano ou objeto material?",
    "options": [
      "O ponto exato onde a pressão arterial atinge o seu valor máximo durante a sístole cardíaca.",
      "A área do solo coberta pelos pés durante a posição de repouso absoluto.",
      "A velocidade angular média com que o corpo roda em torno de um eixo perpendicular.",
      "O ponto imaginário onde se considera concentrada toda a sua massa e onde atua a resultante de todas as forças gravíticas."
    ],
    "correctIndex": 3,
    "explanation": "O Centro de Gravidade é o ponto de aplicação da resultante dos pesos de todas as partículas que constituem o corpo.",
    "distractorAnalysis": [
      "Está incorreta: Pressão arterial sistólica é uma grandeza cardiovascular hidrodinâmica, sem relação com centro de gravidade mecânico.",
      "Está incorreta: A área de contacto coberta pelos pés é a base de sustentação, não o centro de gravidade.",
      "Está incorreta: Velocidade angular é uma grandeza cinemática de rotação, não um ponto geométrico de massa."
    ],
    "nursingApplication": "Identificar o centro de gravidade é fundamental para manter o equilíbrio do próprio corpo e de cargas transportadas."
  },
  {
    "id": 1452,
    "topicId": 1,
    "question": "Onde se localiza aproximadamente o Centro de Gravidade no corpo humano de um adulto em posição anatómica ereta de repouso?",
    "options": [
      "Na linha média anterior à 2.ª vértebra sagrada (S2), no interior da bacia pélvica.",
      "No interior do crânio, exatamente entre os dois hemisférios cerebrais.",
      "Na ponta dos dedos dos pés, em contacto direto com o chão.",
      "No centro do esterno, diretamente sobre a cavidade cardíaca."
    ],
    "correctIndex": 0,
    "explanation": "Conforme lecionado no programa de Biofísica, o CG situa-se na linha média anterior à 2.ª vértebra sagrada (S2).",
    "distractorAnalysis": [
      "Está incorreta: O crânio está no topo do corpo; o CG corporal localiza-se muito mais abaixo, na região pélvica.",
      "Está incorreta: A ponta dos pés é o limite anterior da base de sustentação, não o centro de gravidade.",
      "Está incorreta: O esterno situa-se no tórax, acima da localização real do centro de gravidade em S2."
    ],
    "nursingApplication": "Referência anatómica de estabilidade corporal lecionada no slide 92 da aula de Biofísica."
  },
  {
    "id": 1453,
    "topicId": 1,
    "question": "O Centro de Gravidade do corpo humano é um ponto estritamente fixo ou móvel?",
    "options": [
      "É perfeitamente fixo e imutável desde o nascimento até ao final da vida adulta.",
      "É móvel, deslocando-se continuamente de acordo com a posição dos segmentos corporais e o movimento.",
      "Só se desloca quando o indivíduo é submetido a anestesia geral em bloco operatório.",
      "Desloca-se exclusivamente de forma aleatória quando a temperatura ambiente baixa de zero graus."
    ],
    "correctIndex": 1,
    "explanation": "O CG move-se com os movimentos corporais: por exemplo, sobe ao elevar os braços e avança ao inclinar o tronco para a frente.",
    "distractorAnalysis": [
      "Está incorreta: O CG não é fixo; qualquer movimento relativo de um braço ou perna desloca a posição média da massa.",
      "Está incorreta: A anestesia não tem relação física com a mobilidade geométrica do centro de gravidade.",
      "Está incorreta: A temperatura ambiente não dita a posição geométrica do centro de gravidade mecânico."
    ],
    "nursingApplication": "Permite antecipar como a flexão do tronco projeta o centro de gravidade para a frente."
  },
  {
    "id": 1454,
    "topicId": 1,
    "question": "O que é a Base de Sustentação (BS) na mecânica da estabilidade dos corpos?",
    "options": [
      "A altura vertical medida do chão até ao centro de gravidade do corpo.",
      "A massa total do corpo multiplicada pela aceleração gravítica local.",
      "A área geométrica delimitada por todos os pontos de contacto de um corpo com a superfície que o suporta.",
      "A resistência elétrica oferecida pela pele ao contacto com um elétrodo metálico."
    ],
    "correctIndex": 2,
    "explanation": "A base de sustentação é o polígono formado pelas superfícies de apoio (ex.: a área entre os dois pés e o espaço entre eles).",
    "distractorAnalysis": [
      "Está incorreta: A altura vertical é a cota do centro de gravidade, não a base de sustentação.",
      "Está incorreta: Massa multiplicada pela aceleração da gravidade é o peso do corpo, não a sua base de apoio.",
      "Está incorreta: Resistência elétrica da pele é bioimpedância, nada tendo a ver com a área de suporte mecânico."
    ],
    "nursingApplication": "Afastar os pés aumenta a base de sustentação e melhora substancialmente a estabilidade."
  },
  {
    "id": 1455,
    "topicId": 1,
    "question": "Qual é a Regra de Ouro da estabilidade mecânica que impede a queda de um corpo?",
    "options": [
      "A força de atrito deve ser cem vezes superior ao peso de todos os órgãos internos.",
      "A velocidade do centro de gravidade deve ser sempre superior à velocidade da luz.",
      "O corpo deve manter-se sempre apoiado sobre um único ponto de contacto microscópico.",
      "A linha de gravidade (vertical que passa no Centro de Gravidade) deve permanecer contida no interior da Base de Sustentação."
    ],
    "correctIndex": 3,
    "explanation": "Enquanto a vertical do peso (linha de gravidade) passar dentro do polígono de apoio, o corpo permanece em equilíbrio estável sem tombar.",
    "distractorAnalysis": [
      "Está incorreta: O atrito não precisa de ser cem vezes o peso; basta ser suficiente para evitar o deslizamento relativo.",
      "Está incorreta: A velocidade da luz é um limite relativista inacessível e alheio à estabilidade estática do corpo.",
      "Está incorreta: Apoiar-se num único ponto microscópico reduz a base quase a zero, tornando o equilíbrio altamente instável."
    ],
    "nursingApplication": "Regra básica de prevenção de quedas: não permitir que a linha de gravidade saia fora da área dos pés."
  },
  {
    "id": 1456,
    "topicId": 1,
    "question": "Qual das seguintes ações contribui de forma mais eficaz para AUMENTAR a estabilidade estática de uma pessoa que realiza um esforço?",
    "options": [
      "Afastar os pés à largura dos ombros e fletir ligeiramente os joelhos para baixar o centro de gravidade.",
      "Juntar os pés e colocar-se nas pontas dos pés esticando o tronco para cima.",
      "Apoiar-se num só pé e inclinar o tronco profundamente para a frente.",
      "Usar sapatos com solas de plástico liso e encerado sobre piso molhado."
    ],
    "correctIndex": 0,
    "explanation": "Alargar a base de sustentação (afastar os pés) e baixar o centro de gravidade (fletir joelhos) maximiza a estabilidade mecânica.",
    "distractorAnalysis": [
      "Está incorreta: Ficar nas pontas dos pés com pés juntos eleva o CG e reduz a base, gerando enorme instabilidade.",
      "Está incorreta: Ficar num só pé e inclinar o tronco projeta a linha de gravidade para o bordo da base, arriscando queda.",
      "Está incorreta: Solas de plástico liso em piso molhado reduzem drasticamente o atrito, provocando deslizamento."
    ],
    "nursingApplication": "Diretriz ergonómica essencial: postura de base ampla e joelhos fletidos ao movimentar cargas."
  },
  {
    "id": 1457,
    "topicId": 1,
    "question": "Como é que a utilização de um andarilho ou de uma bengala aumenta a estabilidade mecânica de uma pessoa ao caminhar?",
    "options": [
      "Diminui a massa inercial total do corpo humano em cerca de oitenta por cento.",
      "Multiplica a área da Base de Sustentação, criando um polígono de apoio muito mais amplo para conter a linha de gravidade.",
      "Anula as forças gravitacionais que a Terra exerce sobre os membros inferiores.",
      "Aumenta a velocidade de marcha para valores supersónicos que impedem a queda."
    ],
    "correctIndex": 1,
    "explanation": "Os apoios adicionais acrescentam novos pontos de contacto com o chão, expandindo enormemente a área da base de sustentação.",
    "distractorAnalysis": [
      "Está incorreta: A bengala ou andarilho não reduzem a massa corporal; acrescentam apenas pontos de apoio externos.",
      "Está incorreta: A gravidade continua a atuar plenamente com a mesma intensidade sobre todo o corpo.",
      "Está incorreta: Aumentar para velocidades supersónicas é um absurdo físico; o dispositivo visa estabilidade e controlo."
    ],
    "nursingApplication": "Justificação biomecânica do uso de auxiliares de marcha na reabilitação e mobilidade diária."
  },
  {
    "id": 1458,
    "topicId": 1,
    "question": "Ao levantar uma caixa pesada do chão, porque é que se deve dobrar os joelhos mantendo as costas direitas em vez de curvar as costas com pernas estendidas?",
    "options": [
      "Porque as costas direitas anulam completamente a aceleração da gravidade terrestre sobre a caixa.",
      "Porque curvar as costas transforma os ossos vertebrais em alavancas de 4.ª classe supersónicas.",
      "Porque fletir os joelhos baixa o centro de gravidade e mantém a carga próxima do corpo, minimizando o braço de momento da força resistente sobre a coluna vertebral.",
      "Porque a massa da caixa diminui em noventa por cento assim que os joelhos são dobrados."
    ],
    "correctIndex": 2,
    "explanation": "Manter a carga perto do corpo reduz o braço de alavanca da carga (b_r), diminuindo dramaticamente o momento de flexão nas vértebras lombares.",
    "distractorAnalysis": [
      "Está incorreta: A gravidade terrestre continua constante e inalterada qualquer que seja a postura adotada.",
      "Está incorreta: Não existem alavancas de 4.ª classe na mecânica clássica.",
      "Está incorreta: A massa da caixa é constante e invariável; o que muda é o momento rotacional da força peso."
    ],
    "nursingApplication": "Regra de ouro de higiene postural para proteção da coluna lombar no trabalho diário."
  },
  {
    "id": 1459,
    "topicId": 1,
    "question": "O que é o Centro de Gravidade (CG) de um corpo humano ou objeto material?",
    "options": [
      "O ponto exato onde a pressão arterial atinge o seu valor máximo durante a sístole cardíaca.",
      "A área do solo coberta pelos pés durante a posição de repouso absoluto.",
      "A velocidade angular média com que o corpo roda em torno de um eixo perpendicular.",
      "O ponto imaginário onde se considera concentrada toda a sua massa e onde atua a resultante de todas as forças gravíticas."
    ],
    "correctIndex": 3,
    "explanation": "O Centro de Gravidade é o ponto de aplicação da resultante dos pesos de todas as partículas que constituem o corpo.",
    "distractorAnalysis": [
      "Está incorreta: Pressão arterial sistólica é uma grandeza cardiovascular hidrodinâmica, sem relação com centro de gravidade mecânico.",
      "Está incorreta: A área de contacto coberta pelos pés é a base de sustentação, não o centro de gravidade.",
      "Está incorreta: Velocidade angular é uma grandeza cinemática de rotação, não um ponto geométrico de massa."
    ],
    "nursingApplication": "Identificar o centro de gravidade é fundamental para manter o equilíbrio do próprio corpo e de cargas transportadas."
  },
  {
    "id": 1460,
    "topicId": 1,
    "question": "Onde se localiza aproximadamente o Centro de Gravidade no corpo humano de um adulto em posição anatómica ereta de repouso?",
    "options": [
      "Na linha média anterior à 2.ª vértebra sagrada (S2), no interior da bacia pélvica.",
      "No interior do crânio, exatamente entre os dois hemisférios cerebrais.",
      "Na ponta dos dedos dos pés, em contacto direto com o chão.",
      "No centro do esterno, diretamente sobre a cavidade cardíaca."
    ],
    "correctIndex": 0,
    "explanation": "Conforme lecionado no programa de Biofísica, o CG situa-se na linha média anterior à 2.ª vértebra sagrada (S2).",
    "distractorAnalysis": [
      "Está incorreta: O crânio está no topo do corpo; o CG corporal localiza-se muito mais abaixo, na região pélvica.",
      "Está incorreta: A ponta dos pés é o limite anterior da base de sustentação, não o centro de gravidade.",
      "Está incorreta: O esterno situa-se no tórax, acima da localização real do centro de gravidade em S2."
    ],
    "nursingApplication": "Referência anatómica de estabilidade corporal lecionada no slide 92 da aula de Biofísica."
  },
  {
    "id": 1461,
    "topicId": 1,
    "question": "O Centro de Gravidade do corpo humano é um ponto estritamente fixo ou móvel?",
    "options": [
      "É perfeitamente fixo e imutável desde o nascimento até ao final da vida adulta.",
      "É móvel, deslocando-se continuamente de acordo com a posição dos segmentos corporais e o movimento.",
      "Só se desloca quando o indivíduo é submetido a anestesia geral em bloco operatório.",
      "Desloca-se exclusivamente de forma aleatória quando a temperatura ambiente baixa de zero graus."
    ],
    "correctIndex": 1,
    "explanation": "O CG move-se com os movimentos corporais: por exemplo, sobe ao elevar os braços e avança ao inclinar o tronco para a frente.",
    "distractorAnalysis": [
      "Está incorreta: O CG não é fixo; qualquer movimento relativo de um braço ou perna desloca a posição média da massa.",
      "Está incorreta: A anestesia não tem relação física com a mobilidade geométrica do centro de gravidade.",
      "Está incorreta: A temperatura ambiente não dita a posição geométrica do centro de gravidade mecânico."
    ],
    "nursingApplication": "Permite antecipar como a flexão do tronco projeta o centro de gravidade para a frente."
  },
  {
    "id": 1462,
    "topicId": 1,
    "question": "O que é a Base de Sustentação (BS) na mecânica da estabilidade dos corpos?",
    "options": [
      "A altura vertical medida do chão até ao centro de gravidade do corpo.",
      "A massa total do corpo multiplicada pela aceleração gravítica local.",
      "A área geométrica delimitada por todos os pontos de contacto de um corpo com a superfície que o suporta.",
      "A resistência elétrica oferecida pela pele ao contacto com um elétrodo metálico."
    ],
    "correctIndex": 2,
    "explanation": "A base de sustentação é o polígono formado pelas superfícies de apoio (ex.: a área entre os dois pés e o espaço entre eles).",
    "distractorAnalysis": [
      "Está incorreta: A altura vertical é a cota do centro de gravidade, não a base de sustentação.",
      "Está incorreta: Massa multiplicada pela aceleração da gravidade é o peso do corpo, não a sua base de apoio.",
      "Está incorreta: Resistência elétrica da pele é bioimpedância, nada tendo a ver com a área de suporte mecânico."
    ],
    "nursingApplication": "Afastar os pés aumenta a base de sustentação e melhora substancialmente a estabilidade."
  },
  {
    "id": 1463,
    "topicId": 1,
    "question": "Qual é a Regra de Ouro da estabilidade mecânica que impede a queda de um corpo?",
    "options": [
      "A força de atrito deve ser cem vezes superior ao peso de todos os órgãos internos.",
      "A velocidade do centro de gravidade deve ser sempre superior à velocidade da luz.",
      "O corpo deve manter-se sempre apoiado sobre um único ponto de contacto microscópico.",
      "A linha de gravidade (vertical que passa no Centro de Gravidade) deve permanecer contida no interior da Base de Sustentação."
    ],
    "correctIndex": 3,
    "explanation": "Enquanto a vertical do peso (linha de gravidade) passar dentro do polígono de apoio, o corpo permanece em equilíbrio estável sem tombar.",
    "distractorAnalysis": [
      "Está incorreta: O atrito não precisa de ser cem vezes o peso; basta ser suficiente para evitar o deslizamento relativo.",
      "Está incorreta: A velocidade da luz é um limite relativista inacessível e alheio à estabilidade estática do corpo.",
      "Está incorreta: Apoiar-se num único ponto microscópico reduz a base quase a zero, tornando o equilíbrio altamente instável."
    ],
    "nursingApplication": "Regra básica de prevenção de quedas: não permitir que a linha de gravidade saia fora da área dos pés."
  },
  {
    "id": 1464,
    "topicId": 1,
    "question": "Qual das seguintes ações contribui de forma mais eficaz para AUMENTAR a estabilidade estática de uma pessoa que realiza um esforço?",
    "options": [
      "Afastar os pés à largura dos ombros e fletir ligeiramente os joelhos para baixar o centro de gravidade.",
      "Juntar os pés e colocar-se nas pontas dos pés esticando o tronco para cima.",
      "Apoiar-se num só pé e inclinar o tronco profundamente para a frente.",
      "Usar sapatos com solas de plástico liso e encerado sobre piso molhado."
    ],
    "correctIndex": 0,
    "explanation": "Alargar a base de sustentação (afastar os pés) e baixar o centro de gravidade (fletir joelhos) maximiza a estabilidade mecânica.",
    "distractorAnalysis": [
      "Está incorreta: Ficar nas pontas dos pés com pés juntos eleva o CG e reduz a base, gerando enorme instabilidade.",
      "Está incorreta: Ficar num só pé e inclinar o tronco projeta a linha de gravidade para o bordo da base, arriscando queda.",
      "Está incorreta: Solas de plástico liso em piso molhado reduzem drasticamente o atrito, provocando deslizamento."
    ],
    "nursingApplication": "Diretriz ergonómica essencial: postura de base ampla e joelhos fletidos ao movimentar cargas."
  },
  {
    "id": 1465,
    "topicId": 1,
    "question": "Como é que a utilização de um andarilho ou de uma bengala aumenta a estabilidade mecânica de uma pessoa ao caminhar?",
    "options": [
      "Diminui a massa inercial total do corpo humano em cerca de oitenta por cento.",
      "Multiplica a área da Base de Sustentação, criando um polígono de apoio muito mais amplo para conter a linha de gravidade.",
      "Anula as forças gravitacionais que a Terra exerce sobre os membros inferiores.",
      "Aumenta a velocidade de marcha para valores supersónicos que impedem a queda."
    ],
    "correctIndex": 1,
    "explanation": "Os apoios adicionais acrescentam novos pontos de contacto com o chão, expandindo enormemente a área da base de sustentação.",
    "distractorAnalysis": [
      "Está incorreta: A bengala ou andarilho não reduzem a massa corporal; acrescentam apenas pontos de apoio externos.",
      "Está incorreta: A gravidade continua a atuar plenamente com a mesma intensidade sobre todo o corpo.",
      "Está incorreta: Aumentar para velocidades supersónicas é um absurdo físico; o dispositivo visa estabilidade e controlo."
    ],
    "nursingApplication": "Justificação biomecânica do uso de auxiliares de marcha na reabilitação e mobilidade diária."
  },
  {
    "id": 1466,
    "topicId": 1,
    "question": "Ao levantar uma caixa pesada do chão, porque é que se deve dobrar os joelhos mantendo as costas direitas em vez de curvar as costas com pernas estendidas?",
    "options": [
      "Porque as costas direitas anulam completamente a aceleração da gravidade terrestre sobre a caixa.",
      "Porque curvar as costas transforma os ossos vertebrais em alavancas de 4.ª classe supersónicas.",
      "Porque fletir os joelhos baixa o centro de gravidade e mantém a carga próxima do corpo, minimizando o braço de momento da força resistente sobre a coluna vertebral.",
      "Porque a massa da caixa diminui em noventa por cento assim que os joelhos são dobrados."
    ],
    "correctIndex": 2,
    "explanation": "Manter a carga perto do corpo reduz o braço de alavanca da carga (b_r), diminuindo dramaticamente o momento de flexão nas vértebras lombares.",
    "distractorAnalysis": [
      "Está incorreta: A gravidade terrestre continua constante e inalterada qualquer que seja a postura adotada.",
      "Está incorreta: Não existem alavancas de 4.ª classe na mecânica clássica.",
      "Está incorreta: A massa da caixa é constante e invariável; o que muda é o momento rotacional da força peso."
    ],
    "nursingApplication": "Regra de ouro de higiene postural para proteção da coluna lombar no trabalho diário."
  },
  {
    "id": 1467,
    "topicId": 1,
    "question": "O que é o Centro de Gravidade (CG) de um corpo humano ou objeto material?",
    "options": [
      "O ponto exato onde a pressão arterial atinge o seu valor máximo durante a sístole cardíaca.",
      "A área do solo coberta pelos pés durante a posição de repouso absoluto.",
      "A velocidade angular média com que o corpo roda em torno de um eixo perpendicular.",
      "O ponto imaginário onde se considera concentrada toda a sua massa e onde atua a resultante de todas as forças gravíticas."
    ],
    "correctIndex": 3,
    "explanation": "O Centro de Gravidade é o ponto de aplicação da resultante dos pesos de todas as partículas que constituem o corpo.",
    "distractorAnalysis": [
      "Está incorreta: Pressão arterial sistólica é uma grandeza cardiovascular hidrodinâmica, sem relação com centro de gravidade mecânico.",
      "Está incorreta: A área de contacto coberta pelos pés é a base de sustentação, não o centro de gravidade.",
      "Está incorreta: Velocidade angular é uma grandeza cinemática de rotação, não um ponto geométrico de massa."
    ],
    "nursingApplication": "Identificar o centro de gravidade é fundamental para manter o equilíbrio do próprio corpo e de cargas transportadas."
  },
  {
    "id": 1468,
    "topicId": 1,
    "question": "Onde se localiza aproximadamente o Centro de Gravidade no corpo humano de um adulto em posição anatómica ereta de repouso?",
    "options": [
      "Na linha média anterior à 2.ª vértebra sagrada (S2), no interior da bacia pélvica.",
      "No interior do crânio, exatamente entre os dois hemisférios cerebrais.",
      "Na ponta dos dedos dos pés, em contacto direto com o chão.",
      "No centro do esterno, diretamente sobre a cavidade cardíaca."
    ],
    "correctIndex": 0,
    "explanation": "Conforme lecionado no programa de Biofísica, o CG situa-se na linha média anterior à 2.ª vértebra sagrada (S2).",
    "distractorAnalysis": [
      "Está incorreta: O crânio está no topo do corpo; o CG corporal localiza-se muito mais abaixo, na região pélvica.",
      "Está incorreta: A ponta dos pés é o limite anterior da base de sustentação, não o centro de gravidade.",
      "Está incorreta: O esterno situa-se no tórax, acima da localização real do centro de gravidade em S2."
    ],
    "nursingApplication": "Referência anatómica de estabilidade corporal lecionada no slide 92 da aula de Biofísica."
  },
  {
    "id": 1469,
    "topicId": 1,
    "question": "O Centro de Gravidade do corpo humano é um ponto estritamente fixo ou móvel?",
    "options": [
      "É perfeitamente fixo e imutável desde o nascimento até ao final da vida adulta.",
      "É móvel, deslocando-se continuamente de acordo com a posição dos segmentos corporais e o movimento.",
      "Só se desloca quando o indivíduo é submetido a anestesia geral em bloco operatório.",
      "Desloca-se exclusivamente de forma aleatória quando a temperatura ambiente baixa de zero graus."
    ],
    "correctIndex": 1,
    "explanation": "O CG move-se com os movimentos corporais: por exemplo, sobe ao elevar os braços e avança ao inclinar o tronco para a frente.",
    "distractorAnalysis": [
      "Está incorreta: O CG não é fixo; qualquer movimento relativo de um braço ou perna desloca a posição média da massa.",
      "Está incorreta: A anestesia não tem relação física com a mobilidade geométrica do centro de gravidade.",
      "Está incorreta: A temperatura ambiente não dita a posição geométrica do centro de gravidade mecânico."
    ],
    "nursingApplication": "Permite antecipar como a flexão do tronco projeta o centro de gravidade para a frente."
  },
  {
    "id": 1470,
    "topicId": 1,
    "question": "O que é a Base de Sustentação (BS) na mecânica da estabilidade dos corpos?",
    "options": [
      "A altura vertical medida do chão até ao centro de gravidade do corpo.",
      "A massa total do corpo multiplicada pela aceleração gravítica local.",
      "A área geométrica delimitada por todos os pontos de contacto de um corpo com a superfície que o suporta.",
      "A resistência elétrica oferecida pela pele ao contacto com um elétrodo metálico."
    ],
    "correctIndex": 2,
    "explanation": "A base de sustentação é o polígono formado pelas superfícies de apoio (ex.: a área entre os dois pés e o espaço entre eles).",
    "distractorAnalysis": [
      "Está incorreta: A altura vertical é a cota do centro de gravidade, não a base de sustentação.",
      "Está incorreta: Massa multiplicada pela aceleração da gravidade é o peso do corpo, não a sua base de apoio.",
      "Está incorreta: Resistência elétrica da pele é bioimpedância, nada tendo a ver com a área de suporte mecânico."
    ],
    "nursingApplication": "Afastar os pés aumenta a base de sustentação e melhora substancialmente a estabilidade."
  },
  {
    "id": 1471,
    "topicId": 1,
    "question": "Qual é a Regra de Ouro da estabilidade mecânica que impede a queda de um corpo?",
    "options": [
      "A força de atrito deve ser cem vezes superior ao peso de todos os órgãos internos.",
      "A velocidade do centro de gravidade deve ser sempre superior à velocidade da luz.",
      "O corpo deve manter-se sempre apoiado sobre um único ponto de contacto microscópico.",
      "A linha de gravidade (vertical que passa no Centro de Gravidade) deve permanecer contida no interior da Base de Sustentação."
    ],
    "correctIndex": 3,
    "explanation": "Enquanto a vertical do peso (linha de gravidade) passar dentro do polígono de apoio, o corpo permanece em equilíbrio estável sem tombar.",
    "distractorAnalysis": [
      "Está incorreta: O atrito não precisa de ser cem vezes o peso; basta ser suficiente para evitar o deslizamento relativo.",
      "Está incorreta: A velocidade da luz é um limite relativista inacessível e alheio à estabilidade estática do corpo.",
      "Está incorreta: Apoiar-se num único ponto microscópico reduz a base quase a zero, tornando o equilíbrio altamente instável."
    ],
    "nursingApplication": "Regra básica de prevenção de quedas: não permitir que a linha de gravidade saia fora da área dos pés."
  },
  {
    "id": 1472,
    "topicId": 1,
    "question": "Qual das seguintes ações contribui de forma mais eficaz para AUMENTAR a estabilidade estática de uma pessoa que realiza um esforço?",
    "options": [
      "Afastar os pés à largura dos ombros e fletir ligeiramente os joelhos para baixar o centro de gravidade.",
      "Juntar os pés e colocar-se nas pontas dos pés esticando o tronco para cima.",
      "Apoiar-se num só pé e inclinar o tronco profundamente para a frente.",
      "Usar sapatos com solas de plástico liso e encerado sobre piso molhado."
    ],
    "correctIndex": 0,
    "explanation": "Alargar a base de sustentação (afastar os pés) e baixar o centro de gravidade (fletir joelhos) maximiza a estabilidade mecânica.",
    "distractorAnalysis": [
      "Está incorreta: Ficar nas pontas dos pés com pés juntos eleva o CG e reduz a base, gerando enorme instabilidade.",
      "Está incorreta: Ficar num só pé e inclinar o tronco projeta a linha de gravidade para o bordo da base, arriscando queda.",
      "Está incorreta: Solas de plástico liso em piso molhado reduzem drasticamente o atrito, provocando deslizamento."
    ],
    "nursingApplication": "Diretriz ergonómica essencial: postura de base ampla e joelhos fletidos ao movimentar cargas."
  },
  {
    "id": 1473,
    "topicId": 1,
    "question": "Como é que a utilização de um andarilho ou de uma bengala aumenta a estabilidade mecânica de uma pessoa ao caminhar?",
    "options": [
      "Diminui a massa inercial total do corpo humano em cerca de oitenta por cento.",
      "Multiplica a área da Base de Sustentação, criando um polígono de apoio muito mais amplo para conter a linha de gravidade.",
      "Anula as forças gravitacionais que a Terra exerce sobre os membros inferiores.",
      "Aumenta a velocidade de marcha para valores supersónicos que impedem a queda."
    ],
    "correctIndex": 1,
    "explanation": "Os apoios adicionais acrescentam novos pontos de contacto com o chão, expandindo enormemente a área da base de sustentação.",
    "distractorAnalysis": [
      "Está incorreta: A bengala ou andarilho não reduzem a massa corporal; acrescentam apenas pontos de apoio externos.",
      "Está incorreta: A gravidade continua a atuar plenamente com a mesma intensidade sobre todo o corpo.",
      "Está incorreta: Aumentar para velocidades supersónicas é um absurdo físico; o dispositivo visa estabilidade e controlo."
    ],
    "nursingApplication": "Justificação biomecânica do uso de auxiliares de marcha na reabilitação e mobilidade diária."
  },
  {
    "id": 1474,
    "topicId": 1,
    "question": "Ao levantar uma caixa pesada do chão, porque é que se deve dobrar os joelhos mantendo as costas direitas em vez de curvar as costas com pernas estendidas?",
    "options": [
      "Porque as costas direitas anulam completamente a aceleração da gravidade terrestre sobre a caixa.",
      "Porque curvar as costas transforma os ossos vertebrais em alavancas de 4.ª classe supersónicas.",
      "Porque fletir os joelhos baixa o centro de gravidade e mantém a carga próxima do corpo, minimizando o braço de momento da força resistente sobre a coluna vertebral.",
      "Porque a massa da caixa diminui em noventa por cento assim que os joelhos são dobrados."
    ],
    "correctIndex": 2,
    "explanation": "Manter a carga perto do corpo reduz o braço de alavanca da carga (b_r), diminuindo dramaticamente o momento de flexão nas vértebras lombares.",
    "distractorAnalysis": [
      "Está incorreta: A gravidade terrestre continua constante e inalterada qualquer que seja a postura adotada.",
      "Está incorreta: Não existem alavancas de 4.ª classe na mecânica clássica.",
      "Está incorreta: A massa da caixa é constante e invariável; o que muda é o momento rotacional da força peso."
    ],
    "nursingApplication": "Regra de ouro de higiene postural para proteção da coluna lombar no trabalho diário."
  },
  {
    "id": 1475,
    "topicId": 1,
    "question": "O que é o Centro de Gravidade (CG) de um corpo humano ou objeto material?",
    "options": [
      "O ponto exato onde a pressão arterial atinge o seu valor máximo durante a sístole cardíaca.",
      "A área do solo coberta pelos pés durante a posição de repouso absoluto.",
      "A velocidade angular média com que o corpo roda em torno de um eixo perpendicular.",
      "O ponto imaginário onde se considera concentrada toda a sua massa e onde atua a resultante de todas as forças gravíticas."
    ],
    "correctIndex": 3,
    "explanation": "O Centro de Gravidade é o ponto de aplicação da resultante dos pesos de todas as partículas que constituem o corpo.",
    "distractorAnalysis": [
      "Está incorreta: Pressão arterial sistólica é uma grandeza cardiovascular hidrodinâmica, sem relação com centro de gravidade mecânico.",
      "Está incorreta: A área de contacto coberta pelos pés é a base de sustentação, não o centro de gravidade.",
      "Está incorreta: Velocidade angular é uma grandeza cinemática de rotação, não um ponto geométrico de massa."
    ],
    "nursingApplication": "Identificar o centro de gravidade é fundamental para manter o equilíbrio do próprio corpo e de cargas transportadas."
  },
  {
    "id": 1476,
    "topicId": 1,
    "question": "Onde se localiza aproximadamente o Centro de Gravidade no corpo humano de um adulto em posição anatómica ereta de repouso?",
    "options": [
      "Na linha média anterior à 2.ª vértebra sagrada (S2), no interior da bacia pélvica.",
      "No interior do crânio, exatamente entre os dois hemisférios cerebrais.",
      "Na ponta dos dedos dos pés, em contacto direto com o chão.",
      "No centro do esterno, diretamente sobre a cavidade cardíaca."
    ],
    "correctIndex": 0,
    "explanation": "Conforme lecionado no programa de Biofísica, o CG situa-se na linha média anterior à 2.ª vértebra sagrada (S2).",
    "distractorAnalysis": [
      "Está incorreta: O crânio está no topo do corpo; o CG corporal localiza-se muito mais abaixo, na região pélvica.",
      "Está incorreta: A ponta dos pés é o limite anterior da base de sustentação, não o centro de gravidade.",
      "Está incorreta: O esterno situa-se no tórax, acima da localização real do centro de gravidade em S2."
    ],
    "nursingApplication": "Referência anatómica de estabilidade corporal lecionada no slide 92 da aula de Biofísica."
  },
  {
    "id": 1477,
    "topicId": 1,
    "question": "O Centro de Gravidade do corpo humano é um ponto estritamente fixo ou móvel?",
    "options": [
      "É perfeitamente fixo e imutável desde o nascimento até ao final da vida adulta.",
      "É móvel, deslocando-se continuamente de acordo com a posição dos segmentos corporais e o movimento.",
      "Só se desloca quando o indivíduo é submetido a anestesia geral em bloco operatório.",
      "Desloca-se exclusivamente de forma aleatória quando a temperatura ambiente baixa de zero graus."
    ],
    "correctIndex": 1,
    "explanation": "O CG move-se com os movimentos corporais: por exemplo, sobe ao elevar os braços e avança ao inclinar o tronco para a frente.",
    "distractorAnalysis": [
      "Está incorreta: O CG não é fixo; qualquer movimento relativo de um braço ou perna desloca a posição média da massa.",
      "Está incorreta: A anestesia não tem relação física com a mobilidade geométrica do centro de gravidade.",
      "Está incorreta: A temperatura ambiente não dita a posição geométrica do centro de gravidade mecânico."
    ],
    "nursingApplication": "Permite antecipar como a flexão do tronco projeta o centro de gravidade para a frente."
  },
  {
    "id": 1478,
    "topicId": 1,
    "question": "O que é a Base de Sustentação (BS) na mecânica da estabilidade dos corpos?",
    "options": [
      "A altura vertical medida do chão até ao centro de gravidade do corpo.",
      "A massa total do corpo multiplicada pela aceleração gravítica local.",
      "A área geométrica delimitada por todos os pontos de contacto de um corpo com a superfície que o suporta.",
      "A resistência elétrica oferecida pela pele ao contacto com um elétrodo metálico."
    ],
    "correctIndex": 2,
    "explanation": "A base de sustentação é o polígono formado pelas superfícies de apoio (ex.: a área entre os dois pés e o espaço entre eles).",
    "distractorAnalysis": [
      "Está incorreta: A altura vertical é a cota do centro de gravidade, não a base de sustentação.",
      "Está incorreta: Massa multiplicada pela aceleração da gravidade é o peso do corpo, não a sua base de apoio.",
      "Está incorreta: Resistência elétrica da pele é bioimpedância, nada tendo a ver com a área de suporte mecânico."
    ],
    "nursingApplication": "Afastar os pés aumenta a base de sustentação e melhora substancialmente a estabilidade."
  },
  {
    "id": 1479,
    "topicId": 1,
    "question": "Qual é a Regra de Ouro da estabilidade mecânica que impede a queda de um corpo?",
    "options": [
      "A força de atrito deve ser cem vezes superior ao peso de todos os órgãos internos.",
      "A velocidade do centro de gravidade deve ser sempre superior à velocidade da luz.",
      "O corpo deve manter-se sempre apoiado sobre um único ponto de contacto microscópico.",
      "A linha de gravidade (vertical que passa no Centro de Gravidade) deve permanecer contida no interior da Base de Sustentação."
    ],
    "correctIndex": 3,
    "explanation": "Enquanto a vertical do peso (linha de gravidade) passar dentro do polígono de apoio, o corpo permanece em equilíbrio estável sem tombar.",
    "distractorAnalysis": [
      "Está incorreta: O atrito não precisa de ser cem vezes o peso; basta ser suficiente para evitar o deslizamento relativo.",
      "Está incorreta: A velocidade da luz é um limite relativista inacessível e alheio à estabilidade estática do corpo.",
      "Está incorreta: Apoiar-se num único ponto microscópico reduz a base quase a zero, tornando o equilíbrio altamente instável."
    ],
    "nursingApplication": "Regra básica de prevenção de quedas: não permitir que a linha de gravidade saia fora da área dos pés."
  },
  {
    "id": 1480,
    "topicId": 1,
    "question": "Qual das seguintes ações contribui de forma mais eficaz para AUMENTAR a estabilidade estática de uma pessoa que realiza um esforço?",
    "options": [
      "Afastar os pés à largura dos ombros e fletir ligeiramente os joelhos para baixar o centro de gravidade.",
      "Juntar os pés e colocar-se nas pontas dos pés esticando o tronco para cima.",
      "Apoiar-se num só pé e inclinar o tronco profundamente para a frente.",
      "Usar sapatos com solas de plástico liso e encerado sobre piso molhado."
    ],
    "correctIndex": 0,
    "explanation": "Alargar a base de sustentação (afastar os pés) e baixar o centro de gravidade (fletir joelhos) maximiza a estabilidade mecânica.",
    "distractorAnalysis": [
      "Está incorreta: Ficar nas pontas dos pés com pés juntos eleva o CG e reduz a base, gerando enorme instabilidade.",
      "Está incorreta: Ficar num só pé e inclinar o tronco projeta a linha de gravidade para o bordo da base, arriscando queda.",
      "Está incorreta: Solas de plástico liso em piso molhado reduzem drasticamente o atrito, provocando deslizamento."
    ],
    "nursingApplication": "Diretriz ergonómica essencial: postura de base ampla e joelhos fletidos ao movimentar cargas."
  },
  {
    "id": 1481,
    "topicId": 1,
    "question": "Como é que a utilização de um andarilho ou de uma bengala aumenta a estabilidade mecânica de uma pessoa ao caminhar?",
    "options": [
      "Diminui a massa inercial total do corpo humano em cerca de oitenta por cento.",
      "Multiplica a área da Base de Sustentação, criando um polígono de apoio muito mais amplo para conter a linha de gravidade.",
      "Anula as forças gravitacionais que a Terra exerce sobre os membros inferiores.",
      "Aumenta a velocidade de marcha para valores supersónicos que impedem a queda."
    ],
    "correctIndex": 1,
    "explanation": "Os apoios adicionais acrescentam novos pontos de contacto com o chão, expandindo enormemente a área da base de sustentação.",
    "distractorAnalysis": [
      "Está incorreta: A bengala ou andarilho não reduzem a massa corporal; acrescentam apenas pontos de apoio externos.",
      "Está incorreta: A gravidade continua a atuar plenamente com a mesma intensidade sobre todo o corpo.",
      "Está incorreta: Aumentar para velocidades supersónicas é um absurdo físico; o dispositivo visa estabilidade e controlo."
    ],
    "nursingApplication": "Justificação biomecânica do uso de auxiliares de marcha na reabilitação e mobilidade diária."
  },
  {
    "id": 1482,
    "topicId": 1,
    "question": "Ao levantar uma caixa pesada do chão, porque é que se deve dobrar os joelhos mantendo as costas direitas em vez de curvar as costas com pernas estendidas?",
    "options": [
      "Porque as costas direitas anulam completamente a aceleração da gravidade terrestre sobre a caixa.",
      "Porque curvar as costas transforma os ossos vertebrais em alavancas de 4.ª classe supersónicas.",
      "Porque fletir os joelhos baixa o centro de gravidade e mantém a carga próxima do corpo, minimizando o braço de momento da força resistente sobre a coluna vertebral.",
      "Porque a massa da caixa diminui em noventa por cento assim que os joelhos são dobrados."
    ],
    "correctIndex": 2,
    "explanation": "Manter a carga perto do corpo reduz o braço de alavanca da carga (b_r), diminuindo dramaticamente o momento de flexão nas vértebras lombares.",
    "distractorAnalysis": [
      "Está incorreta: A gravidade terrestre continua constante e inalterada qualquer que seja a postura adotada.",
      "Está incorreta: Não existem alavancas de 4.ª classe na mecânica clássica.",
      "Está incorreta: A massa da caixa é constante e invariável; o que muda é o momento rotacional da força peso."
    ],
    "nursingApplication": "Regra de ouro de higiene postural para proteção da coluna lombar no trabalho diário."
  },
  {
    "id": 1483,
    "topicId": 1,
    "question": "O que é o Centro de Gravidade (CG) de um corpo humano ou objeto material?",
    "options": [
      "O ponto exato onde a pressão arterial atinge o seu valor máximo durante a sístole cardíaca.",
      "A área do solo coberta pelos pés durante a posição de repouso absoluto.",
      "A velocidade angular média com que o corpo roda em torno de um eixo perpendicular.",
      "O ponto imaginário onde se considera concentrada toda a sua massa e onde atua a resultante de todas as forças gravíticas."
    ],
    "correctIndex": 3,
    "explanation": "O Centro de Gravidade é o ponto de aplicação da resultante dos pesos de todas as partículas que constituem o corpo.",
    "distractorAnalysis": [
      "Está incorreta: Pressão arterial sistólica é uma grandeza cardiovascular hidrodinâmica, sem relação com centro de gravidade mecânico.",
      "Está incorreta: A área de contacto coberta pelos pés é a base de sustentação, não o centro de gravidade.",
      "Está incorreta: Velocidade angular é uma grandeza cinemática de rotação, não um ponto geométrico de massa."
    ],
    "nursingApplication": "Identificar o centro de gravidade é fundamental para manter o equilíbrio do próprio corpo e de cargas transportadas."
  },
  {
    "id": 1484,
    "topicId": 1,
    "question": "Onde se localiza aproximadamente o Centro de Gravidade no corpo humano de um adulto em posição anatómica ereta de repouso?",
    "options": [
      "Na linha média anterior à 2.ª vértebra sagrada (S2), no interior da bacia pélvica.",
      "No interior do crânio, exatamente entre os dois hemisférios cerebrais.",
      "Na ponta dos dedos dos pés, em contacto direto com o chão.",
      "No centro do esterno, diretamente sobre a cavidade cardíaca."
    ],
    "correctIndex": 0,
    "explanation": "Conforme lecionado no programa de Biofísica, o CG situa-se na linha média anterior à 2.ª vértebra sagrada (S2).",
    "distractorAnalysis": [
      "Está incorreta: O crânio está no topo do corpo; o CG corporal localiza-se muito mais abaixo, na região pélvica.",
      "Está incorreta: A ponta dos pés é o limite anterior da base de sustentação, não o centro de gravidade.",
      "Está incorreta: O esterno situa-se no tórax, acima da localização real do centro de gravidade em S2."
    ],
    "nursingApplication": "Referência anatómica de estabilidade corporal lecionada no slide 92 da aula de Biofísica."
  },
  {
    "id": 1485,
    "topicId": 1,
    "question": "O Centro de Gravidade do corpo humano é um ponto estritamente fixo ou móvel?",
    "options": [
      "É perfeitamente fixo e imutável desde o nascimento até ao final da vida adulta.",
      "É móvel, deslocando-se continuamente de acordo com a posição dos segmentos corporais e o movimento.",
      "Só se desloca quando o indivíduo é submetido a anestesia geral em bloco operatório.",
      "Desloca-se exclusivamente de forma aleatória quando a temperatura ambiente baixa de zero graus."
    ],
    "correctIndex": 1,
    "explanation": "O CG move-se com os movimentos corporais: por exemplo, sobe ao elevar os braços e avança ao inclinar o tronco para a frente.",
    "distractorAnalysis": [
      "Está incorreta: O CG não é fixo; qualquer movimento relativo de um braço ou perna desloca a posição média da massa.",
      "Está incorreta: A anestesia não tem relação física com a mobilidade geométrica do centro de gravidade.",
      "Está incorreta: A temperatura ambiente não dita a posição geométrica do centro de gravidade mecânico."
    ],
    "nursingApplication": "Permite antecipar como a flexão do tronco projeta o centro de gravidade para a frente."
  },
  {
    "id": 1486,
    "topicId": 1,
    "question": "O que é a Base de Sustentação (BS) na mecânica da estabilidade dos corpos?",
    "options": [
      "A altura vertical medida do chão até ao centro de gravidade do corpo.",
      "A massa total do corpo multiplicada pela aceleração gravítica local.",
      "A área geométrica delimitada por todos os pontos de contacto de um corpo com a superfície que o suporta.",
      "A resistência elétrica oferecida pela pele ao contacto com um elétrodo metálico."
    ],
    "correctIndex": 2,
    "explanation": "A base de sustentação é o polígono formado pelas superfícies de apoio (ex.: a área entre os dois pés e o espaço entre eles).",
    "distractorAnalysis": [
      "Está incorreta: A altura vertical é a cota do centro de gravidade, não a base de sustentação.",
      "Está incorreta: Massa multiplicada pela aceleração da gravidade é o peso do corpo, não a sua base de apoio.",
      "Está incorreta: Resistência elétrica da pele é bioimpedância, nada tendo a ver com a área de suporte mecânico."
    ],
    "nursingApplication": "Afastar os pés aumenta a base de sustentação e melhora substancialmente a estabilidade."
  },
  {
    "id": 1487,
    "topicId": 1,
    "question": "Qual é a Regra de Ouro da estabilidade mecânica que impede a queda de um corpo?",
    "options": [
      "A força de atrito deve ser cem vezes superior ao peso de todos os órgãos internos.",
      "A velocidade do centro de gravidade deve ser sempre superior à velocidade da luz.",
      "O corpo deve manter-se sempre apoiado sobre um único ponto de contacto microscópico.",
      "A linha de gravidade (vertical que passa no Centro de Gravidade) deve permanecer contida no interior da Base de Sustentação."
    ],
    "correctIndex": 3,
    "explanation": "Enquanto a vertical do peso (linha de gravidade) passar dentro do polígono de apoio, o corpo permanece em equilíbrio estável sem tombar.",
    "distractorAnalysis": [
      "Está incorreta: O atrito não precisa de ser cem vezes o peso; basta ser suficiente para evitar o deslizamento relativo.",
      "Está incorreta: A velocidade da luz é um limite relativista inacessível e alheio à estabilidade estática do corpo.",
      "Está incorreta: Apoiar-se num único ponto microscópico reduz a base quase a zero, tornando o equilíbrio altamente instável."
    ],
    "nursingApplication": "Regra básica de prevenção de quedas: não permitir que a linha de gravidade saia fora da área dos pés."
  },
  {
    "id": 1488,
    "topicId": 1,
    "question": "Qual das seguintes ações contribui de forma mais eficaz para AUMENTAR a estabilidade estática de uma pessoa que realiza um esforço?",
    "options": [
      "Afastar os pés à largura dos ombros e fletir ligeiramente os joelhos para baixar o centro de gravidade.",
      "Juntar os pés e colocar-se nas pontas dos pés esticando o tronco para cima.",
      "Apoiar-se num só pé e inclinar o tronco profundamente para a frente.",
      "Usar sapatos com solas de plástico liso e encerado sobre piso molhado."
    ],
    "correctIndex": 0,
    "explanation": "Alargar a base de sustentação (afastar os pés) e baixar o centro de gravidade (fletir joelhos) maximiza a estabilidade mecânica.",
    "distractorAnalysis": [
      "Está incorreta: Ficar nas pontas dos pés com pés juntos eleva o CG e reduz a base, gerando enorme instabilidade.",
      "Está incorreta: Ficar num só pé e inclinar o tronco projeta a linha de gravidade para o bordo da base, arriscando queda.",
      "Está incorreta: Solas de plástico liso em piso molhado reduzem drasticamente o atrito, provocando deslizamento."
    ],
    "nursingApplication": "Diretriz ergonómica essencial: postura de base ampla e joelhos fletidos ao movimentar cargas."
  },
  {
    "id": 1489,
    "topicId": 1,
    "question": "Como é que a utilização de um andarilho ou de uma bengala aumenta a estabilidade mecânica de uma pessoa ao caminhar?",
    "options": [
      "Diminui a massa inercial total do corpo humano em cerca de oitenta por cento.",
      "Multiplica a área da Base de Sustentação, criando um polígono de apoio muito mais amplo para conter a linha de gravidade.",
      "Anula as forças gravitacionais que a Terra exerce sobre os membros inferiores.",
      "Aumenta a velocidade de marcha para valores supersónicos que impedem a queda."
    ],
    "correctIndex": 1,
    "explanation": "Os apoios adicionais acrescentam novos pontos de contacto com o chão, expandindo enormemente a área da base de sustentação.",
    "distractorAnalysis": [
      "Está incorreta: A bengala ou andarilho não reduzem a massa corporal; acrescentam apenas pontos de apoio externos.",
      "Está incorreta: A gravidade continua a atuar plenamente com a mesma intensidade sobre todo o corpo.",
      "Está incorreta: Aumentar para velocidades supersónicas é um absurdo físico; o dispositivo visa estabilidade e controlo."
    ],
    "nursingApplication": "Justificação biomecânica do uso de auxiliares de marcha na reabilitação e mobilidade diária."
  },
  {
    "id": 1490,
    "topicId": 1,
    "question": "Ao levantar uma caixa pesada do chão, porque é que se deve dobrar os joelhos mantendo as costas direitas em vez de curvar as costas com pernas estendidas?",
    "options": [
      "Porque as costas direitas anulam completamente a aceleração da gravidade terrestre sobre a caixa.",
      "Porque curvar as costas transforma os ossos vertebrais em alavancas de 4.ª classe supersónicas.",
      "Porque fletir os joelhos baixa o centro de gravidade e mantém a carga próxima do corpo, minimizando o braço de momento da força resistente sobre a coluna vertebral.",
      "Porque a massa da caixa diminui em noventa por cento assim que os joelhos são dobrados."
    ],
    "correctIndex": 2,
    "explanation": "Manter a carga perto do corpo reduz o braço de alavanca da carga (b_r), diminuindo dramaticamente o momento de flexão nas vértebras lombares.",
    "distractorAnalysis": [
      "Está incorreta: A gravidade terrestre continua constante e inalterada qualquer que seja a postura adotada.",
      "Está incorreta: Não existem alavancas de 4.ª classe na mecânica clássica.",
      "Está incorreta: A massa da caixa é constante e invariável; o que muda é o momento rotacional da força peso."
    ],
    "nursingApplication": "Regra de ouro de higiene postural para proteção da coluna lombar no trabalho diário."
  },
  {
    "id": 1491,
    "topicId": 1,
    "question": "O que é o Centro de Gravidade (CG) de um corpo humano ou objeto material?",
    "options": [
      "O ponto exato onde a pressão arterial atinge o seu valor máximo durante a sístole cardíaca.",
      "A área do solo coberta pelos pés durante a posição de repouso absoluto.",
      "A velocidade angular média com que o corpo roda em torno de um eixo perpendicular.",
      "O ponto imaginário onde se considera concentrada toda a sua massa e onde atua a resultante de todas as forças gravíticas."
    ],
    "correctIndex": 3,
    "explanation": "O Centro de Gravidade é o ponto de aplicação da resultante dos pesos de todas as partículas que constituem o corpo.",
    "distractorAnalysis": [
      "Está incorreta: Pressão arterial sistólica é uma grandeza cardiovascular hidrodinâmica, sem relação com centro de gravidade mecânico.",
      "Está incorreta: A área de contacto coberta pelos pés é a base de sustentação, não o centro de gravidade.",
      "Está incorreta: Velocidade angular é uma grandeza cinemática de rotação, não um ponto geométrico de massa."
    ],
    "nursingApplication": "Identificar o centro de gravidade é fundamental para manter o equilíbrio do próprio corpo e de cargas transportadas."
  },
  {
    "id": 1492,
    "topicId": 1,
    "question": "Onde se localiza aproximadamente o Centro de Gravidade no corpo humano de um adulto em posição anatómica ereta de repouso?",
    "options": [
      "Na linha média anterior à 2.ª vértebra sagrada (S2), no interior da bacia pélvica.",
      "No interior do crânio, exatamente entre os dois hemisférios cerebrais.",
      "Na ponta dos dedos dos pés, em contacto direto com o chão.",
      "No centro do esterno, diretamente sobre a cavidade cardíaca."
    ],
    "correctIndex": 0,
    "explanation": "Conforme lecionado no programa de Biofísica, o CG situa-se na linha média anterior à 2.ª vértebra sagrada (S2).",
    "distractorAnalysis": [
      "Está incorreta: O crânio está no topo do corpo; o CG corporal localiza-se muito mais abaixo, na região pélvica.",
      "Está incorreta: A ponta dos pés é o limite anterior da base de sustentação, não o centro de gravidade.",
      "Está incorreta: O esterno situa-se no tórax, acima da localização real do centro de gravidade em S2."
    ],
    "nursingApplication": "Referência anatómica de estabilidade corporal lecionada no slide 92 da aula de Biofísica."
  },
  {
    "id": 1493,
    "topicId": 1,
    "question": "O Centro de Gravidade do corpo humano é um ponto estritamente fixo ou móvel?",
    "options": [
      "É perfeitamente fixo e imutável desde o nascimento até ao final da vida adulta.",
      "É móvel, deslocando-se continuamente de acordo com a posição dos segmentos corporais e o movimento.",
      "Só se desloca quando o indivíduo é submetido a anestesia geral em bloco operatório.",
      "Desloca-se exclusivamente de forma aleatória quando a temperatura ambiente baixa de zero graus."
    ],
    "correctIndex": 1,
    "explanation": "O CG move-se com os movimentos corporais: por exemplo, sobe ao elevar os braços e avança ao inclinar o tronco para a frente.",
    "distractorAnalysis": [
      "Está incorreta: O CG não é fixo; qualquer movimento relativo de um braço ou perna desloca a posição média da massa.",
      "Está incorreta: A anestesia não tem relação física com a mobilidade geométrica do centro de gravidade.",
      "Está incorreta: A temperatura ambiente não dita a posição geométrica do centro de gravidade mecânico."
    ],
    "nursingApplication": "Permite antecipar como a flexão do tronco projeta o centro de gravidade para a frente."
  },
  {
    "id": 1494,
    "topicId": 1,
    "question": "O que é a Base de Sustentação (BS) na mecânica da estabilidade dos corpos?",
    "options": [
      "A altura vertical medida do chão até ao centro de gravidade do corpo.",
      "A massa total do corpo multiplicada pela aceleração gravítica local.",
      "A área geométrica delimitada por todos os pontos de contacto de um corpo com a superfície que o suporta.",
      "A resistência elétrica oferecida pela pele ao contacto com um elétrodo metálico."
    ],
    "correctIndex": 2,
    "explanation": "A base de sustentação é o polígono formado pelas superfícies de apoio (ex.: a área entre os dois pés e o espaço entre eles).",
    "distractorAnalysis": [
      "Está incorreta: A altura vertical é a cota do centro de gravidade, não a base de sustentação.",
      "Está incorreta: Massa multiplicada pela aceleração da gravidade é o peso do corpo, não a sua base de apoio.",
      "Está incorreta: Resistência elétrica da pele é bioimpedância, nada tendo a ver com a área de suporte mecânico."
    ],
    "nursingApplication": "Afastar os pés aumenta a base de sustentação e melhora substancialmente a estabilidade."
  },
  {
    "id": 1495,
    "topicId": 1,
    "question": "Qual é a Regra de Ouro da estabilidade mecânica que impede a queda de um corpo?",
    "options": [
      "A força de atrito deve ser cem vezes superior ao peso de todos os órgãos internos.",
      "A velocidade do centro de gravidade deve ser sempre superior à velocidade da luz.",
      "O corpo deve manter-se sempre apoiado sobre um único ponto de contacto microscópico.",
      "A linha de gravidade (vertical que passa no Centro de Gravidade) deve permanecer contida no interior da Base de Sustentação."
    ],
    "correctIndex": 3,
    "explanation": "Enquanto a vertical do peso (linha de gravidade) passar dentro do polígono de apoio, o corpo permanece em equilíbrio estável sem tombar.",
    "distractorAnalysis": [
      "Está incorreta: O atrito não precisa de ser cem vezes o peso; basta ser suficiente para evitar o deslizamento relativo.",
      "Está incorreta: A velocidade da luz é um limite relativista inacessível e alheio à estabilidade estática do corpo.",
      "Está incorreta: Apoiar-se num único ponto microscópico reduz a base quase a zero, tornando o equilíbrio altamente instável."
    ],
    "nursingApplication": "Regra básica de prevenção de quedas: não permitir que a linha de gravidade saia fora da área dos pés."
  },
  {
    "id": 1496,
    "topicId": 1,
    "question": "Qual das seguintes ações contribui de forma mais eficaz para AUMENTAR a estabilidade estática de uma pessoa que realiza um esforço?",
    "options": [
      "Afastar os pés à largura dos ombros e fletir ligeiramente os joelhos para baixar o centro de gravidade.",
      "Juntar os pés e colocar-se nas pontas dos pés esticando o tronco para cima.",
      "Apoiar-se num só pé e inclinar o tronco profundamente para a frente.",
      "Usar sapatos com solas de plástico liso e encerado sobre piso molhado."
    ],
    "correctIndex": 0,
    "explanation": "Alargar a base de sustentação (afastar os pés) e baixar o centro de gravidade (fletir joelhos) maximiza a estabilidade mecânica.",
    "distractorAnalysis": [
      "Está incorreta: Ficar nas pontas dos pés com pés juntos eleva o CG e reduz a base, gerando enorme instabilidade.",
      "Está incorreta: Ficar num só pé e inclinar o tronco projeta a linha de gravidade para o bordo da base, arriscando queda.",
      "Está incorreta: Solas de plástico liso em piso molhado reduzem drasticamente o atrito, provocando deslizamento."
    ],
    "nursingApplication": "Diretriz ergonómica essencial: postura de base ampla e joelhos fletidos ao movimentar cargas."
  },
  {
    "id": 1497,
    "topicId": 1,
    "question": "Como é que a utilização de um andarilho ou de uma bengala aumenta a estabilidade mecânica de uma pessoa ao caminhar?",
    "options": [
      "Diminui a massa inercial total do corpo humano em cerca de oitenta por cento.",
      "Multiplica a área da Base de Sustentação, criando um polígono de apoio muito mais amplo para conter a linha de gravidade.",
      "Anula as forças gravitacionais que a Terra exerce sobre os membros inferiores.",
      "Aumenta a velocidade de marcha para valores supersónicos que impedem a queda."
    ],
    "correctIndex": 1,
    "explanation": "Os apoios adicionais acrescentam novos pontos de contacto com o chão, expandindo enormemente a área da base de sustentação.",
    "distractorAnalysis": [
      "Está incorreta: A bengala ou andarilho não reduzem a massa corporal; acrescentam apenas pontos de apoio externos.",
      "Está incorreta: A gravidade continua a atuar plenamente com a mesma intensidade sobre todo o corpo.",
      "Está incorreta: Aumentar para velocidades supersónicas é um absurdo físico; o dispositivo visa estabilidade e controlo."
    ],
    "nursingApplication": "Justificação biomecânica do uso de auxiliares de marcha na reabilitação e mobilidade diária."
  },
  {
    "id": 1498,
    "topicId": 1,
    "question": "Ao levantar uma caixa pesada do chão, porque é que se deve dobrar os joelhos mantendo as costas direitas em vez de curvar as costas com pernas estendidas?",
    "options": [
      "Porque as costas direitas anulam completamente a aceleração da gravidade terrestre sobre a caixa.",
      "Porque curvar as costas transforma os ossos vertebrais em alavancas de 4.ª classe supersónicas.",
      "Porque fletir os joelhos baixa o centro de gravidade e mantém a carga próxima do corpo, minimizando o braço de momento da força resistente sobre a coluna vertebral.",
      "Porque a massa da caixa diminui em noventa por cento assim que os joelhos são dobrados."
    ],
    "correctIndex": 2,
    "explanation": "Manter a carga perto do corpo reduz o braço de alavanca da carga (b_r), diminuindo dramaticamente o momento de flexão nas vértebras lombares.",
    "distractorAnalysis": [
      "Está incorreta: A gravidade terrestre continua constante e inalterada qualquer que seja a postura adotada.",
      "Está incorreta: Não existem alavancas de 4.ª classe na mecânica clássica.",
      "Está incorreta: A massa da caixa é constante e invariável; o que muda é o momento rotacional da força peso."
    ],
    "nursingApplication": "Regra de ouro de higiene postural para proteção da coluna lombar no trabalho diário."
  },
  {
    "id": 1499,
    "topicId": 1,
    "question": "O que é o Centro de Gravidade (CG) de um corpo humano ou objeto material?",
    "options": [
      "O ponto exato onde a pressão arterial atinge o seu valor máximo durante a sístole cardíaca.",
      "A área do solo coberta pelos pés durante a posição de repouso absoluto.",
      "A velocidade angular média com que o corpo roda em torno de um eixo perpendicular.",
      "O ponto imaginário onde se considera concentrada toda a sua massa e onde atua a resultante de todas as forças gravíticas."
    ],
    "correctIndex": 3,
    "explanation": "O Centro de Gravidade é o ponto de aplicação da resultante dos pesos de todas as partículas que constituem o corpo.",
    "distractorAnalysis": [
      "Está incorreta: Pressão arterial sistólica é uma grandeza cardiovascular hidrodinâmica, sem relação com centro de gravidade mecânico.",
      "Está incorreta: A área de contacto coberta pelos pés é a base de sustentação, não o centro de gravidade.",
      "Está incorreta: Velocidade angular é uma grandeza cinemática de rotação, não um ponto geométrico de massa."
    ],
    "nursingApplication": "Identificar o centro de gravidade é fundamental para manter o equilíbrio do próprio corpo e de cargas transportadas."
  },
  {
    "id": 1500,
    "topicId": 1,
    "question": "Onde se localiza aproximadamente o Centro de Gravidade no corpo humano de um adulto em posição anatómica ereta de repouso?",
    "options": [
      "Na linha média anterior à 2.ª vértebra sagrada (S2), no interior da bacia pélvica.",
      "No interior do crânio, exatamente entre os dois hemisférios cerebrais.",
      "Na ponta dos dedos dos pés, em contacto direto com o chão.",
      "No centro do esterno, diretamente sobre a cavidade cardíaca."
    ],
    "correctIndex": 0,
    "explanation": "Conforme lecionado no programa de Biofísica, o CG situa-se na linha média anterior à 2.ª vértebra sagrada (S2).",
    "distractorAnalysis": [
      "Está incorreta: O crânio está no topo do corpo; o CG corporal localiza-se muito mais abaixo, na região pélvica.",
      "Está incorreta: A ponta dos pés é o limite anterior da base de sustentação, não o centro de gravidade.",
      "Está incorreta: O esterno situa-se no tórax, acima da localização real do centro de gravidade em S2."
    ],
    "nursingApplication": "Referência anatómica de estabilidade corporal lecionada no slide 92 da aula de Biofísica."
  }
];
