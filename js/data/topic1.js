/**
 * BANCO DE QUESTÕES CERTIFICADAS - TÓPICO 1
 * Força, Estado de Equilíbrio, Equilíbrio de Forças e Alavancas
 * Alinhado estritamente com os conceitos de Biofísica (Prof. Paulo Pereira)
 * Perguntas autónomas e focadas em princípios físicos e biomecânicos
 * Total de Questões: 200 (IDs 1001 a 1200)
 */

const TOPIC_1_QUESTIONS = [
  {
    "id": 1001,
    "topicId": 1,
    "question": "Qual é a definição de Mecânica?",
    "options": [
      "Estuda a composição química e a estrutura atómica dos tecidos biológicos.",
      "Estuda as trocas de calor e a regulação da temperatura corporal.",
      "Estuda a velocidade das reações químicas e a atividade enzimática celular.",
      "Estuda as relações entre os movimentos dos corpos e as forças a eles associadas."
    ],
    "correctIndex": 3,
    "explanation": "A Mecânica define-se formalmente como o ramo que 'estuda as relações entre os movimentos dos corpos e as forças a eles associadas'.",
    "distractorAnalysis": [
      "Está incorreta: A composição e a estrutura atómica pertencem à química e à bioquímica, não à mecânica.",
      "Está incorreta: As trocas de calor pertencem à termodinâmica e à fisiologia térmica.",
      "Está incorreta: A velocidade das reações químicas pertence à cinética química, não à mecânica."
    ],
    "nursingApplication": "Ajuda a analisar as forças musculares e os movimentos corporais envolvidos nas atividades diárias e mobilizações."
  },
  {
    "id": 1002,
    "topicId": 1,
    "question": "Como se define 'Força' no âmbito dos conceitos fundamentais de Biofísica?",
    "options": [
      "Medida da inércia de um organismo ou de um objeto, expressa em quilogramas.",
      "Taxa de variação, no tempo, do metabolismo energético basal do organismo.",
      "Energia térmica acumulada num corpo que se encontra em repouso absoluto.",
      "Interação entre corpos que pode alterar o seu estado de movimento ou de forma."
    ],
    "correctIndex": 3,
    "explanation": "Estabelece-se explicitamente que a Força é a 'interação entre corpos capaz de alterar o seu estado' de repouso ou de movimento, ou de lhe provocar deformação.",
    "distractorAnalysis": [
      "Está incorreta: Esta é a definição de massa, grandeza escalar medida em kg, e não de força.",
      "Está incorreta: O metabolismo basal é uma taxa energética, sem relação com a definição de força.",
      "Está incorreta: A energia térmica é uma forma de energia, não uma interação mecânica entre corpos."
    ],
    "nursingApplication": "Permite compreender como a interação mecânica entre o profissional e o utente produz ou trava o movimento."
  },
  {
    "id": 1003,
    "topicId": 1,
    "question": "Qual é o instrumento de medição utilizado na física mecânica para quantificar a intensidade de uma força?",
    "options": [
      "Esfigmomanómetro aneroide.",
      "Termómetro clínico digital.",
      "Goniómetro articulado.",
      "Dinamómetro."
    ],
    "correctIndex": 3,
    "explanation": "Apresenta-se o 'Dinamómetro' como o instrumento físico clássico destinado a medir a intensidade de forças.",
    "distractorAnalysis": [
      "Está incorreta: O esfigmomanómetro mede a pressão arterial, e não uma força mecânica.",
      "Está incorreta: O termómetro mede temperatura, e não força.",
      "Está incorreta: O goniómetro mede ângulos articulares, e não forças."
    ],
    "nursingApplication": "O princípio do dinamómetro é aplicado em aparelhos de medição da força de preensão palmar em doentes em reabilitação."
  },
  {
    "id": 1004,
    "topicId": 1,
    "question": "Em que princípio físico assenta o funcionamento de um dinamómetro de mola convencional?",
    "options": [
      "Na deformação elástica de uma mola calibrada, proporcional à força aplicada.",
      "Na variação do volume de um líquido quando aquecido de forma contínua.",
      "Na contagem de impulsos elétricos produzidos por uma fonte radioativa.",
      "Na rotação de um disco condutor sob a ação de um campo magnético constante."
    ],
    "correctIndex": 0,
    "explanation": "Um dinamómetro opera com base na Lei de Hooke: a deformação elástica (alongamento) da sua mola interna é diretamente proporcional à intensidade da força aplicada.",
    "distractorAnalysis": [
      "Está incorreta: A variação de volume de um líquido é o princípio do termómetro, e não do dinamómetro.",
      "Está incorreta: A contagem de impulsos radioativos é o princípio do contador Geiger, e não de uma mola.",
      "Está incorreta: A rotação de um disco condutor num campo magnético é um fenómeno eletromagnético, e não o princípio de um dinamómetro de mola."
    ],
    "nursingApplication": "Compreender a calibração de sensores de força é útil ao operar camas hospitalares inteligentes com balança integrada."
  },
  {
    "id": 1005,
    "topicId": 1,
    "question": "Segundo o programa da unidade curricular, qual é um dos principais objetivos da Biofísica ao estudar a Mecânica?",
    "options": [
      "Sintetizar novos compostos farmacológicos em laboratório, com fins terapêuticos.",
      "Aplicar princípios da mecânica à anatomia humana e à terapêutica.",
      "Calcular a dosagem de fármacos com base no pH dos fluidos gastrointestinais.",
      "Analisar as sequências genéticas de microrganismos patogénicos hospitalares."
    ],
    "correctIndex": 1,
    "explanation": "Define-se que um dos objetivos é 'Conhecer os princípios científicos nos campos da Mecânica (...) e aplicar esses princípios à anatomia humana e terapêutica'.",
    "distractorAnalysis": [
      "Está incorreta: A síntese de fármacos pertence à química farmacêutica, e não à biofísica mecânica.",
      "Está incorreta: O cálculo de doses pertence à farmacologia, e não aos princípios mecânicos.",
      "Está incorreta: A análise genética de microrganismos pertence à microbiologia e à genética."
    ],
    "nursingApplication": "Fundamenta as boas práticas de ergonomia e prevenção de lesões musculoesqueléticas na equipa de saúde."
  },
  {
    "id": 1006,
    "topicId": 1,
    "question": "De acordo com a definição de Força, que efeito pode uma força não equilibrada produzir num corpo?",
    "options": [
      "Aumentar a sua massa, porque a força se acumula no interior do corpo.",
      "Manter o corpo em movimento com velocidade constante, enquanto a força atuar.",
      "Alterar o seu estado de movimento, acelerando-o, ou provocar a sua deformação.",
      "Anular as interações internas do corpo, deixando-o sem deformação."
    ],
    "correctIndex": 2,
    "explanation": "Uma força atua como agente capaz de alterar o estado de repouso ou movimento de um corpo (produzindo aceleração) ou causar deformação mecânica na sua estrutura.",
    "distractorAnalysis": [
      "Está incorreta: Uma força não aumenta a massa do corpo, que é uma propriedade sua.",
      "Está incorreta: Velocidade constante corresponde a força resultante nula (1.ª Lei); uma força não equilibrada produz aceleração.",
      "Está incorreta: Uma força não anula as interações internas do corpo; altera o movimento ou a forma."
    ],
    "nursingApplication": "Mobilizar um utente no leito exige uma força externa controlada que supere o atrito com o colchão e ponha o corpo em movimento."
  },
  {
    "id": 1007,
    "topicId": 1,
    "question": "Qual é a unidade do Sistema Internacional (SI) utilizada para quantificar a grandeza Força medida por um dinamómetro?",
    "options": [
      "Quilograma (kg).",
      "Pascal (Pa).",
      "Joule (J).",
      "Newton (N)."
    ],
    "correctIndex": 3,
    "explanation": "No Sistema Internacional (SI), a unidade padrão de força é o newton (N).",
    "distractorAnalysis": [
      "Está incorreta: O quilograma é unidade de massa, e não de força.",
      "Está incorreta: O pascal é unidade de pressão, que é força por área.",
      "Está incorreta: O joule é unidade de energia e de trabalho."
    ],
    "nursingApplication": "Ajuda a interpretar uma tração ortopédica: a carga suspensa indica-se em kg (massa), mas a força que exerce expressa-se em newtons (P = m · g)."
  },
  {
    "id": 1008,
    "topicId": 1,
    "question": "Se a resultante de todas as forças que atuam sobre um corpo for nula, o que acontece ao seu movimento de translação?",
    "options": [
      "Permanece em repouso ou em movimento retilíneo e uniforme, com velocidade constante.",
      "Abranda até parar, porque deixa de haver força a mantê-lo em movimento.",
      "Começa a rodar, porque não há força que se oponha ao seu movimento de rotação.",
      "Ganha uma aceleração constante, porque a ausência de força deixa o corpo sem resistência."
    ],
    "correctIndex": 0,
    "explanation": "Quando a força resultante é nula (F<sub>R</sub> = 0), o corpo mantém o seu estado de repouso ou continua em movimento retilíneo uniforme (MRU), de acordo com a 1.ª Lei de Newton.",
    "distractorAnalysis": [
      "Está incorreta: Sem força resultante, o corpo não abranda; mantém a velocidade.",
      "Está incorreta: A rotação não resulta da ausência de forças: depende do momento resultante (ΣM). F<sub>R</sub> = 0 garante apenas que a translação não se altera.",
      "Está incorreta: A aceleração exige força resultante não nula (F = m · a); se F = 0, a aceleração é nula."
    ],
    "nursingApplication": "Explica porque é que uma maca parada numa superfície horizontal nivelada não se move sem intervenção externa."
  },
  {
    "id": 1009,
    "topicId": 1,
    "question": "Qual é a principal distinção entre Mecânica e Reologia?",
    "options": [
      "A Mecânica estuda a bioquímica celular; a Reologia, a genética das proteínas.",
      "A Mecânica estuda forças e movimentos; a Reologia, a deformação dos materiais sob forças.",
      "A Mecânica estuda a temperatura corporal; a Reologia, as trocas de calor.",
      "A Mecânica estuda a estrutura do ADN; a Reologia, as reações de oxidação dos tecidos."
    ],
    "correctIndex": 1,
    "explanation": "A Mecânica debruça-se sobre forças e alterações de movimento/equilíbrio, ao passo que a Reologia estuda as reações dos corpos a forças deformadoras (tema do Tópico 2).",
    "distractorAnalysis": [
      "Está incorreta: A bioquímica celular e a genética das proteínas não são objeto da mecânica nem da reologia.",
      "Está incorreta: A temperatura corporal e as trocas de calor são objeto da termodinâmica.",
      "Está incorreta: A estrutura do ADN e as reações de oxidação são objeto da bioquímica, e não da mecânica."
    ],
    "nursingApplication": "Permite distinguir se um esforço mecânico gera deslocamento de um doente ou deformação de tecidos de suporte."
  },
  {
    "id": 1010,
    "topicId": 1,
    "question": "Ao utilizar um dinamómetro manual para avaliar um utente, o visor regista 50 N. O que indica fisicamente este valor?",
    "options": [
      "Que a massa do utente é de cerca de 50 quilogramas, medida pela força da mão.",
      "Que a pressão exercida pela mola sobre a palma da mão do utente é de 50 pascal.",
      "Que a força exercida na mola do dinamómetro tem a intensidade de 50 newtons.",
      "Que a mão do utente se fechou com uma velocidade de 50 metros por segundo."
    ],
    "correctIndex": 2,
    "explanation": "O valor de 50 N indica diretamente a intensidade (módulo) da força de tração ou compressão mecânica exercida na mola do aparelho.",
    "distractorAnalysis": [
      "Está incorreta: O dinamómetro mede força, e não massa; a massa mede-se numa balança.",
      "Está incorreta: A pressão é força por área, e o visor de um dinamómetro indica força.",
      "Está incorreta: 50 m/s é uma velocidade, grandeza que o dinamómetro não mede."
    ],
    "nursingApplication": "Útil para registar a evolução do ganho de força muscular de um doente em recuperação funcional."
  },
  {
    "id": 1011,
    "topicId": 1,
    "question": "Quais são os quatro elementos essenciais que caracterizam uma grandeza vetorial como a Força?",
    "options": [
      "Massa, aceleração, velocidade e tempo de atuação da força sobre o corpo.",
      "Volume, densidade, temperatura e calor específico do corpo em análise.",
      "Intensidade (módulo), direção, sentido e ponto de aplicação.",
      "Área de contacto, pressão, viscosidade e coeficiente de atrito da superfície."
    ],
    "correctIndex": 2,
    "explanation": "Uma força caracteriza-se por quatro elementos: intensidade (módulo ou valor numérico com unidade), direção (reta de suporte), sentido (orientação na reta) e ponto de aplicação.",
    "distractorAnalysis": [
      "Está incorreta: Massa, aceleração e tempo não definem uma força; a massa é um escalar.",
      "Está incorreta: Volume, densidade e calor específico são propriedades dos materiais, sem relação com a força.",
      "Está incorreta: Área, pressão e viscosidade caracterizam fluidos e superfícies, não o vetor força."
    ],
    "nursingApplication": "Essencial para posicionar corretamente membros em tração esquelética sem desviar a linha da força."
  },
  {
    "id": 1012,
    "topicId": 1,
    "question": "Qual é a definição exata de 'Tendão' na biomecânica articular?",
    "options": [
      "Tecido epitelial impermeável que reveste as cavidades das articulações.",
      "Bainha de mielina que conduz os impulsos elétricos entre nervos e músculos.",
      "Tecido conjuntivo fibroso que liga um músculo a um osso.",
      "Estrutura óssea esponjosa, onde se produzem as células do sangue."
    ],
    "correctIndex": 2,
    "explanation": "O tendão é um tecido conjuntivo fibroso que liga um músculo a um osso.",
    "distractorAnalysis": [
      "Está incorreta: As cavidades articulares são revestidas por membrana sinovial, de tecido conjuntivo, e não por epitélio.",
      "Está incorreta: A bainha de mielina isola as fibras nervosas; não une músculo e osso.",
      "Está incorreta: O osso esponjoso é tecido ósseo, e não une um músculo ao osso."
    ],
    "nursingApplication": "O tendão transmite a força gerada pelas fibras musculares ao esqueleto, viabilizando o movimento humano."
  },
  {
    "id": 1013,
    "topicId": 1,
    "question": "Como atua fisicamente a força muscular transmitida por um tendão ao osso em que se insere?",
    "options": [
      "Como uma pressão igual em todas as direções, que aumenta o volume do osso.",
      "Como um vetor com ponto de aplicação na inserção óssea, ao longo do tendão.",
      "Como uma força gravítica adicional, que altera a massa do esqueleto.",
      "Como uma corrente elétrica, sem componente de tração mecânica sobre o osso."
    ],
    "correctIndex": 1,
    "explanation": "A tração do tendão é representada por um vetor de força cuja linha de ação segue o alinhamento das fibras do tendão e cujo ponto de aplicação é o local de inserção no osso (por exemplo, uma tuberosidade).",
    "distractorAnalysis": [
      "Está incorreta: A tração do tendão é orientada e não aumenta o volume do osso.",
      "Está incorreta: A força muscular não altera a massa do esqueleto; é uma força de tração.",
      "Está incorreta: O impulso elétrico desencadeia a contração, mas quem puxa o osso é a força mecânica."
    ],
    "nursingApplication": "Ajuda a compreender como a angulação de uma articulação altera o ângulo de tração e a eficácia do movimento."
  },
  {
    "id": 1014,
    "topicId": 1,
    "question": "Qual é a diferença física entre 'Direção' e 'Sentido' de um vetor de força no contexto da biomecânica?",
    "options": [
      "Direção é o valor numérico em newtons; sentido é o aparelho que mede a força.",
      "Direção e sentido são termos sinónimos na física e no estudo dos vetores.",
      "Direção é a reta de suporte do vetor; sentido é a orientação ao longo dela.",
      "Direção refere-se ao peso do corpo; sentido refere-se ao atrito entre superfícies."
    ],
    "correctIndex": 2,
    "explanation": "A direção define a linha reta sobre a qual a força atua (ex.: horizontal, vertical ou oblíqua a 45°); o sentido indica para onde a seta aponta ao longo dessa linha (ex.: de baixo para cima).",
    "distractorAnalysis": [
      "Está incorreta: O valor em newtons é a intensidade, e o aparelho que mede a força é o dinamómetro.",
      "Está incorreta: Direção e sentido são conceitos distintos: a reta de suporte e a orientação ao longo dela.",
      "Está incorreta: Direção e sentido são propriedades de qualquer vetor, não de forças específicas."
    ],
    "nursingApplication": "Evita equívocos na comunicação entre profissionais sobre a direção e o sentido ao puxar ou empurrar uma maca."
  },
  {
    "id": 1015,
    "topicId": 1,
    "question": "Ao representar a força que o tendão rotuliano exerce sobre a tíbia, onde se situa o ponto de aplicação do vetor?",
    "options": [
      "No centro da Terra, para onde o peso do corpo é atraído pela gravidade.",
      "No corpo muscular do quadríceps, que se situa na face anterior da coxa.",
      "Na rótula, onde se situa a extremidade proximal do tendão rotuliano.",
      "Na tuberosidade anterior da tíbia, onde o tendão se fixa ao osso."
    ],
    "correctIndex": 3,
    "explanation": "O ponto de aplicação de uma força de contacto exercida por um tendão localiza-se na sua zona de inserção anatómica no osso correspondente.",
    "distractorAnalysis": [
      "Está incorreta: A força do tendão atua no ponto de fixação ao osso, e não no centro da Terra.",
      "Está incorreta: O músculo produz a força, mas o ponto de aplicação é a inserção do tendão.",
      "Está incorreta: Na rótula atua a força que o tendão exerce sobre ela; sobre a tíbia, a força aplica-se na tuberosidade anterior."
    ],
    "nursingApplication": "Importante ao avaliar pontos de sobrecarga mecânica e tendinites de inserção no sistema locomotor."
  },
  {
    "id": 1016,
    "topicId": 1,
    "question": "Dois enfermeiros puxam uma maca na mesma direção horizontal com forças de 60 N cada um, mas em sentidos opostos. Desprezando o atrito, qual é a força resultante?",
    "options": [
      "120 N, no sentido do profissional mais forte, porque as intensidades se somam.",
      "60 N para a direita, porque o puxão de um profissional prevalece sobre o do outro.",
      "0 N, pelo que a maca se mantém parada ou em movimento uniforme.",
      "3600 N, por multiplicação das intensidades das duas forças aplicadas."
    ],
    "correctIndex": 2,
    "explanation": "Na mesma direção com sentidos opostos, os vetores subtraem-se: F<sub>R</sub> = 60 N - 60 N = 0 N. A força resultante é nula; a maca mantém o seu estado: se estava parada, continua parada; se se movia, mantém velocidade constante (1.ª Lei).",
    "distractorAnalysis": [
      "Está incorreta: Forças opostas subtraem-se; não se somam.",
      "Está incorreta: Com forças iguais e opostas, nenhuma prevalece; a resultante é nula.",
      "Está incorreta: A resultante obtém-se por soma vetorial, não por multiplicação das intensidades."
    ],
    "nursingApplication": "Mostra a necessidade de coordenação de equipa: esforços com sentidos opostos anulam-se e causam fadiga inútil."
  },
  {
    "id": 1017,
    "topicId": 1,
    "question": "Por que razão a força muscular não pode ser expressa apenas como um número simples (grandeza escalar)?",
    "options": [
      "Porque a força muscular muda de unidade de medida de segundo a segundo.",
      "Porque o seu efeito no osso depende da direção, do sentido e do ponto de aplicação.",
      "Porque as grandezas escalares são típicas da física nuclear e da química celular.",
      "Porque a força muscular varia no tempo, e as grandezas escalares são constantes."
    ],
    "correctIndex": 1,
    "explanation": "A força é uma grandeza vetorial: conhecer apenas a intensidade (ex.: 100 N) não permite saber se a articulação vai fletir, estender ou rodar, dependendo da linha e ponto de tração.",
    "distractorAnalysis": [
      "Está incorreta: A unidade de medida da força é o newton, e não muda ao longo do tempo.",
      "Está incorreta: As grandezas escalares são usadas em toda a física, incluindo a mecânica.",
      "Está incorreta: Uma grandeza escalar também pode variar no tempo (ex.: a temperatura); a força é vetorial por ter direção e sentido."
    ],
    "nursingApplication": "Ajuda a planear exercícios de reabilitação ajustando o ângulo em que o músculo traciona o membro."
  },
  {
    "id": 1018,
    "topicId": 1,
    "question": "Qual é o papel mecânico do tecido conjuntivo tendinoso na transmissão da força motriz ao esqueleto?",
    "options": [
      "Gera contração ativa, independente, através de filamentos de actina.",
      "Substitui parcialmente a função das articulações na estabilidade dos ossos.",
      "Produz líquido sinovial que lubrifica as superfícies das vértebras lombares.",
      "Transmite a tração gerada pelo músculo esquelético diretamente à alavanca óssea."
    ],
    "correctIndex": 3,
    "explanation": "O tendão funciona como o transmissor mecânico de tração entre o músculo (gerador de força ativa) e o osso (alavanca rígida que produz movimento articular).",
    "distractorAnalysis": [
      "Está incorreta: A contração ativa é função do ventre muscular; o tendão é passivo.",
      "Está incorreta: O tendão não substitui as articulações; a sua função principal é transmitir a força do músculo ao osso.",
      "Está incorreta: O líquido sinovial é produzido pela membrana sinovial das articulações, e não pelo tendão."
    ],
    "nursingApplication": "Permite entender lesões por esforço repetitivo em tendões submetidos a tensões mecânicas elevadas."
  },
  {
    "id": 1019,
    "topicId": 1,
    "question": "Como se representa graficamente um vetor de força na física mecânica?",
    "options": [
      "Por um círculo cujo diâmetro representa a velocidade do corpo em movimento.",
      "Por uma curva ondulatória que representa o comprimento de onda da força.",
      "Por uma seta, ou segmento de reta orientado, com ponto de origem e comprimento.",
      "Por um gráfico tridimensional que representa a distribuição de calor no corpo."
    ],
    "correctIndex": 2,
    "explanation": "Graficamente, o vetor representa-se por um segmento orientado: o comprimento indica o módulo/intensidade, a inclinação da reta define a direção, a seta aponta o sentido e a origem fixa o ponto de aplicação.",
    "distractorAnalysis": [
      "Está incorreta: O diâmetro de um círculo não representa a velocidade; a força é um vetor.",
      "Está incorreta: Uma curva ondulatória representa ondas, e não a força aplicada.",
      "Está incorreta: A distribuição de calor não se representa por vetores de força."
    ],
    "nursingApplication": "Permite desenhar diagramas de corpo livre simples para analisar a postura e a distribuição de cargas no trabalho."
  },
  {
    "id": 1020,
    "topicId": 1,
    "question": "Dois enfermeiros puxam uma maca na mesma direção e no mesmo sentido, com forças de 60 N e 40 N. Qual é a força resultante?",
    "options": [
      "0 N, porque as duas forças se anulam.",
      "100 N, porque as intensidades se somam.",
      "20 N, porque as intensidades se subtraem.",
      "2400 N, por multiplicação das intensidades."
    ],
    "correctIndex": 1,
    "explanation": "Com a mesma direção e o mesmo sentido, somam-se as intensidades: F<sub>R</sub> = 60 N + 40 N = 100 N, no sentido do movimento. Esta é a força que determina a aceleração da maca, segundo a 2.ª Lei de Newton.",
    "distractorAnalysis": [
      "Está incorreta: As forças só se anulam quando têm sentidos opostos; aqui têm o mesmo sentido.",
      "Está incorreta: Forças com o mesmo sentido somam-se, e não se subtraem.",
      "Está incorreta: A resultante obtém-se por soma vetorial, e não por multiplicação das intensidades."
    ],
    "nursingApplication": "Mostra porque uma equipa que puxa no mesmo sentido aplica uma força maior do que cada elemento isolado."
  },
  {
    "id": 1021,
    "topicId": 1,
    "question": "Qual é o enunciado correto da 1.ª Lei de Newton (Lei da Inércia)?",
    "options": [
      "A aceleração é diretamente proporcional à força resultante e inversamente à massa.",
      "Um corpo mantém o seu estado de movimento se a força resultante sobre ele for nula.",
      "A toda a ação opõe-se uma reação de menor intensidade e direção perpendicular.",
      "A energia total de um sistema isolado acaba por se dissipar em calor."
    ],
    "correctIndex": 1,
    "explanation": "Define-se a 1.ª Lei de Newton (Lei da Inércia): um corpo mantém o seu estado de movimento, salvo se atuar sobre ele uma força resultante não nula. Esta formulação é mais rigorosa do que «uma força externa», porque várias forças externas podem anular-se.",
    "distractorAnalysis": [
      "Está incorreta: A relação aceleração-força-massa é a 2.ª Lei de Newton (F = m · a).",
      "Está incorreta: A ação e a reação têm igual intensidade, mesma direção e sentidos opostos (3.ª Lei), e não uma reação menor e perpendicular.",
      "Está incorreta: Num sistema isolado a energia total conserva-se (1.ª Lei da Termodinâmica)."
    ],
    "nursingApplication": "Fundamenta o uso de cintos de segurança no transporte de doentes em cadeiras de rodas e ambulâncias."
  },
  {
    "id": 1022,
    "topicId": 1,
    "question": "Em termos simples, como se define a 'Inércia' de um corpo material na física clássica?",
    "options": [
      "Tendência dos corpos para perder massa ao entrar em movimento acelerado.",
      "Capacidade dos materiais rígidos de atrair corpos vizinhos por campos magnéticos.",
      "Resistência dos corpos à mudança do seu estado de movimento.",
      "Velocidade instantânea do corpo, medida por um velocímetro num dado momento."
    ],
    "correctIndex": 2,
    "explanation": "Resume-se: 'Por outras palavras: Os corpos têm resistência à mudança do seu estado de movimento (inércia). É necessária uma força para o alterar!'.",
    "distractorAnalysis": [
      "Está incorreta: A massa de um corpo não se perde com o movimento; é uma propriedade que se mantém.",
      "Está incorreta: A atração magnética não define a inércia, que existe em todos os corpos com massa.",
      "Está incorreta: A velocidade é uma grandeza cinemática; a inércia é a resistência à mudança de movimento."
    ],
    "nursingApplication": "Mostra porque uma cama hospitalar pesada exige mais força para ser posta em movimento e para ser travada, pelo que o seu movimento deve ser iniciado e terminado de forma gradual."
  },
  {
    "id": 1023,
    "topicId": 1,
    "question": "O que é necessário para alterar a velocidade (em módulo ou direção) de um corpo?",
    "options": [
      "Manter o corpo em equilíbrio mecânico, com força resultante nula.",
      "Aguardar a passagem natural do tempo, no referencial do observador.",
      "Uma força externa resultante não nula que atue sobre o corpo.",
      "Isolar termicamente o corpo de todas as fontes de radiação solar."
    ],
    "correctIndex": 2,
    "explanation": "Pela 1.ª Lei de Newton, na ausência de forças externas resultantes, o estado de movimento permanece constante. Para alterar a velocidade, é indispensável a atuação de uma força resultante externa.",
    "distractorAnalysis": [
      "Está incorreta: Com força resultante nula, o corpo mantém a velocidade; não se altera.",
      "Está incorreta: O tempo, por si só, não altera a velocidade; é preciso uma força.",
      "Está incorreta: O isolamento térmico não influencia o movimento do corpo."
    ],
    "nursingApplication": "Explica porque é necessária uma força externa, como a do profissional ou o atrito do piso, para abrandar ou parar uma cadeira de rodas; os travões imobilizam-na quando parada."
  },
  {
    "id": 1024,
    "topicId": 1,
    "question": "Se um carrinho de pensos for empurrado e depois largado num corredor plano ideal, sem atrito nem resistência do ar, o que prevê a 1.ª Lei de Newton?",
    "options": [
      "Que pararia ao fim de alguns metros, por perda de inércia com o tempo.",
      "Que manteria a velocidade constante, em movimento retilíneo uniforme.",
      "Que começaria a acelerar cada vez mais depressa, sem força aplicada.",
      "Que inverteria o sentido de marcha, por efeito de uma força de reação do ar."
    ],
    "correctIndex": 1,
    "explanation": "Sem forças contrárias de atrito ou resistência para desacelerar o corpo, a 1.ª Lei afirma que este continuará indefinidamente em movimento retilíneo uniforme (velocidade constante).",
    "distractorAnalysis": [
      "Está incorreta: Sem força resultante, o carrinho não para; mantém a velocidade (1.ª Lei).",
      "Está incorreta: Acelerar sem força contraria a 1.ª Lei; a aceleração exige força resultante.",
      "Está incorreta: Sem força resultante, não há inversão do sentido de marcha."
    ],
    "nursingApplication": "Ajuda a perceber que as macas no mundo real desaceleram devido ao atrito do pavimento e dos eixos das rodas."
  },
  {
    "id": 1025,
    "topicId": 1,
    "question": "Por que razão uma cadeira de rodas parada num piso horizontal nivelado não começa a mover-se sozinha?",
    "options": [
      "Porque o atrito com o pavimento da enfermaria a mantém colada ao chão.",
      "Porque mantém o estado de repouso enquanto a força resultante sobre ela for nula.",
      "Porque a sua massa inercial se converte em energia gravitacional que a imobiliza.",
      "Porque a pressão atmosférica exerce uma força descendente sobre o assento."
    ],
    "correctIndex": 1,
    "explanation": "Peso e normal equilibram-se (F<sub>R</sub> = 0); em repouso, a cadeira mantém esse estado até que uma força externa resultante não nula atue sobre ela.",
    "distractorAnalysis": [
      "Está incorreta: Num piso horizontal sem força aplicada, o atrito estático é nulo; o atrito só surge contra uma tendência de movimento e não 'cola' a cadeira ao chão.",
      "Está incorreta: A massa não se converte em energia gravitacional; a cadeira fica parada por inércia.",
      "Está incorreta: A pressão atmosférica não é a causa do repouso; a força resultante é nula."
    ],
    "nursingApplication": "Mostra porque os travões devem estar acionados nas transferências: uma pequena força, por exemplo o utente a apoiar-se, põe a cadeira em movimento."
  },
  {
    "id": 1026,
    "topicId": 1,
    "question": "Que célebre físico formulou as Leis do Movimento e da Gravitação e proferiu a frase: 'Se vi mais longe, foi por estar de pé sobre os ombros de gigantes'?",
    "options": [
      "Galileu Galilei, autor dos estudos sobre a queda dos corpos e o movimento.",
      "Robert Hooke, autor da lei da elasticidade e de estudos de microscopia.",
      "Isaac Newton, autor das leis do movimento e da gravitação universal.",
      "Arquimedes, autor do princípio da flutuação dos corpos em fluidos."
    ],
    "correctIndex": 2,
    "explanation": "Introduzem-se as Leis do Movimento com a célebre citação de Isaac Newton: 'Se vi mais longe, foi por estar de pé sobre os ombros de gigantes'.",
    "distractorAnalysis": [
      "Está incorreta: Galileu estudou a queda dos corpos, mas não formulou as leis do movimento e da gravitação universal.",
      "Está incorreta: Hooke formulou a lei da elasticidade, e não as leis do movimento e da gravitação.",
      "Está incorreta: Arquimedes formulou o princípio da flutuação, e não as leis do movimento."
    ],
    "nursingApplication": "Contextualiza historicamente a evolução da física clássica aplicada às ciências da vida e saúde."
  },
  {
    "id": 1027,
    "topicId": 1,
    "question": "Qual é a grandeza física que serve de medida quantitativa da inércia de um corpo material?",
    "options": [
      "O volume ocupado pelo corpo no espaço tridimensional.",
      "A temperatura termodinâmica do corpo em equilíbrio térmico.",
      "A velocidade angular de rotação do corpo em torno do seu eixo.",
      "A massa do corpo (símbolo m), medida em quilogramas (kg)."
    ],
    "correctIndex": 3,
    "explanation": "A massa é a propriedade intrínseca que quantifica a inércia: quanto maior for a massa de um corpo, maior é a sua resistência a alterações do seu estado de repouso ou movimento.",
    "distractorAnalysis": [
      "Está incorreta: O volume mede o espaço ocupado, e não a resistência à mudança de movimento.",
      "Está incorreta: A temperatura não mede a inércia de um corpo.",
      "Está incorreta: A velocidade angular descreve a rotação, e não a inércia."
    ],
    "nursingApplication": "Explica porque doentes com maior massa corporal exigem maior controlo e apoio em manobras de transferência."
  },
  {
    "id": 1028,
    "topicId": 1,
    "question": "Um utente está confortavelmente deitado no seu leito hospitalar. Qual é a força resultante que atua sobre o seu corpo?",
    "options": [
      "Zero newtons (F<sub>R</sub> = 0 N), porque o corpo está em equilíbrio estático.",
      "Igual à força normal exercida pelo colchão, dirigida para cima.",
      "Igual ao peso do utente, porque a gravidade é a única força que atua sobre ele.",
      "Igual à força muscular dos membros superiores do profissional de saúde."
    ],
    "correctIndex": 0,
    "explanation": "Estando em repouso estático, a aceleração é nula e a soma vetorial de todas as forças que nele atuam (peso do doente e força normal exercida pelo colchão) é nula: F<sub>R</sub> = 0 N.",
    "distractorAnalysis": [
      "Está incorreta: A normal é apenas uma das forças; equilibra o peso, pelo que a resultante é nula.",
      "Está incorreta: A gravidade atua, mas a força de apoio da cama anula-a; a resultante é nula.",
      "Está incorreta: A força do profissional não atua sobre o corpo do utente em repouso."
    ],
    "nursingApplication": "Compreender o equilíbrio estático no leito é a base para a prevenção de desalinhamentos posturais."
  },
  {
    "id": 1029,
    "topicId": 1,
    "question": "Ao travar bruscamente um veículo, os passageiros desprovidos de cinto são projetados para a frente. Como se explica isto pela 1.ª Lei de Newton?",
    "options": [
      "Uma força para a frente, gerada pela travagem, empurra os passageiros.",
      "Por inércia, o corpo mantém a velocidade que tinha até uma força o travar.",
      "A gravidade deixa de atuar temporariamente durante o ato de travar.",
      "O veículo acelera subitamente para a frente, empurrando as pessoas."
    ],
    "correctIndex": 1,
    "explanation": "Quando o veículo trava, é o atrito entre os pneus e a estrada que o desacelera; contudo, o corpo do passageiro, por inércia (1.ª Lei), continua o seu movimento com a velocidade prévia até colidir com algum obstáculo ou ser retido pelo cinto.",
    "distractorAnalysis": [
      "Está incorreta: Não existe uma força desse tipo; a projeção resulta da inércia dos passageiros.",
      "Está incorreta: A gravidade não deixa de atuar ao travar; o peso mantém-se.",
      "Está incorreta: Ao travar, o veículo desacelera e não empurra os passageiros para a frente."
    ],
    "nursingApplication": "Reforça a justificação científica do uso de cintos de segurança no transporte sanitário."
  },
  {
    "id": 1030,
    "topicId": 1,
    "question": "Para que um objeto em movimento altere a sua trajetória retilínea e faça uma curva, o que estabelece a 1.ª Lei de Newton?",
    "options": [
      "Não é preciso força, pois o corpo curva-se por si mesmo no vácuo.",
      "É preciso uma força no sentido do movimento, que aumente a velocidade.",
      "É preciso uma força externa que mude a direção da velocidade.",
      "Basta que o corpo mantenha uma aceleração nula durante toda a curva."
    ],
    "correctIndex": 2,
    "explanation": "O movimento natural livre de forças é retilíneo e uniforme. Mudar a direção do vetor velocidade (fazer curva) requer aceleração e, portanto, uma força externa não nula a atuar sobre o corpo.",
    "distractorAnalysis": [
      "Está incorreta: Uma trajetória curva exige força, pois a velocidade muda de direção.",
      "Está incorreta: Uma força no sentido do movimento altera o módulo da velocidade, mas não a sua direção.",
      "Está incorreta: Aceleração nula implica movimento retilíneo uniforme, e não uma curva."
    ],
    "nursingApplication": "Explica porque é que conduzir uma maca numa curva exige aplicar-lhe uma força lateral, dirigida para o interior da curva."
  },
  {
    "id": 1031,
    "topicId": 1,
    "question": "Qual é a fórmula fundamental da 2.ª Lei de Newton?",
    "options": [
      "P = m / g, com P em newtons e g em metros por segundo ao quadrado.",
      "M = F / b, com M em newton-metros e b em metros.",
      "F = m · a, com F em newtons, m em quilogramas e a em m/s².",
      "P = F · A, com P em pascal e A em metros quadrados."
    ],
    "correctIndex": 2,
    "explanation": "A expressão clássica da 2.ª Lei de Newton (Lei fundamental da dinâmica) na biomecânica é F = m · a (força igual a massa multiplicada pela aceleração).",
    "distractorAnalysis": [
      "Está incorreta: O peso é P = m · g (produto, e não quociente).",
      "Está incorreta: O momento de uma força é M = F · b, e não um quociente.",
      "Está incorreta: A pressão é P = F / A, e não um produto de força por área."
    ],
    "nursingApplication": "Permite calcular a força necessária para acelerar ou desacelerar equipamentos clínicos em movimento."
  },
  {
    "id": 1032,
    "topicId": 1,
    "question": "Qual é o enunciado correto da 2.ª Lei de Newton?",
    "options": [
      "A força resultante é igual ao produto da massa do corpo pela aceleração adquirida.",
      "A aceleração de um corpo não depende da força que lhe é aplicada, mas da sua massa.",
      "Dois corpos em repouso atraem-se com força proporcional à soma das suas massas.",
      "A força resultante é igual ao produto da massa do corpo pela sua velocidade."
    ],
    "correctIndex": 0,
    "explanation": "A 2.ª Lei relaciona força, massa e aceleração: a força resultante é igual ao produto da massa do corpo pela aceleração que ele adquire (F = m · a).",
    "distractorAnalysis": [
      "Está incorreta: A aceleração depende da força aplicada e da massa (a = F/m); não depende apenas da massa.",
      "Está incorreta: A atração gravítica depende do produto das massas e da distância, e não da sua soma.",
      "Está incorreta: O produto da massa pela velocidade é o momento linear; a força resultante é igual a m · a."
    ],
    "nursingApplication": "Compreender a dinâmica do movimento permite quantificar o impacto de arranques e travagens bruscas no doente."
  },
  {
    "id": 1033,
    "topicId": 1,
    "question": "A partir da fórmula F = m · a, como se expressa algebricamente a aceleração 'a'?",
    "options": [
      "a = F · m, ou seja, a aceleração é igual à força multiplicada pela massa.",
      "a = F / m, ou seja, a aceleração é igual à força a dividir pela massa.",
      "a = m / F, ou seja, a aceleração é igual à massa a dividir pela força.",
      "a = F + m, ou seja, a aceleração é igual à soma da força com a massa."
    ],
    "correctIndex": 1,
    "explanation": "Deduzem-se matematicamente as formas equivalentes da 2.ª Lei: isolando a aceleração, obtém-se a = F / m.",
    "distractorAnalysis": [
      "Está incorreta: Se a = F · m, a aceleração cresceria com a massa, o que contraria a 2.ª Lei.",
      "Está incorreta: A aceleração diminui quando a massa aumenta; m/F inverte esta relação.",
      "Está incorreta: Força e massa não se somam; a 2.ª Lei relaciona-as por quociente."
    ],
    "nursingApplication": "Mostra que para uma mesma força aplicada, quanto maior for a massa m, menor será a aceleração adquirida a."
  },
  {
    "id": 1034,
    "topicId": 1,
    "question": "A partir da fórmula F = m · a, como se expressa algebricamente a massa 'm' de um corpo?",
    "options": [
      "m = F · a, ou seja, a massa é a força multiplicada pela aceleração.",
      "m = a / F, ou seja, a massa é a aceleração a dividir pela força.",
      "m = F - a, ou seja, a massa é a diferença entre a força e a aceleração.",
      "m = F / a, ou seja, a massa é a força a dividir pela aceleração."
    ],
    "correctIndex": 3,
    "explanation": "Estabelece-se que, isolando a massa na equação fundamental da dinâmica, obtém-se m = F / a.",
    "distractorAnalysis": [
      "Está incorreta: Multiplicar F por a não isola a massa; a 2.ª Lei dá m = F / a.",
      "Está incorreta: a/F inverte a relação; a massa é F dividido por a.",
      "Está incorreta: Força e aceleração não se subtraem para obter a massa."
    ],
    "nursingApplication": "Permite deduzir a massa inercial de um corpo a partir da medição da força e da aceleração produzida."
  },
  {
    "id": 1035,
    "topicId": 1,
    "question": "Qual é a definição de 'utente bariátrico'?",
    "options": [
      "Utente com desnutrição calórica grave e baixa densidade óssea.",
      "Utente sujeito a tração ortopédica contínua nos membros inferiores.",
      "Utente que utiliza cadeira de rodas com rodas de diâmetro reduzido.",
      "Utente com obesidade severa, cuja massa corporal é muito elevada."
    ],
    "correctIndex": 3,
    "explanation": "Um utente bariátrico é um utente com obesidade severa.",
    "distractorAnalysis": [
      "Está incorreta: A desnutrição grave corresponde a massa reduzida, o oposto de um utente bariátrico.",
      "Está incorreta: A tração ortopédica é um tratamento de imobilização, e não uma definição de utente bariátrico.",
      "Está incorreta: O diâmetro das rodas da cadeira não define o utente bariátrico."
    ],
    "nursingApplication": "Contextualiza as necessidades especiais de equipamentos de transferência reforçados e apoio de mais elementos da equipa."
  },
  {
    "id": 1036,
    "topicId": 1,
    "question": "Desprezando a massa da cadeira, se a massa de um utente for o dobro da de outro, que força é necessário aplicar à sua cadeira para imprimir a mesma aceleração?",
    "options": [
      "O dobro da força, pois a força é proporcional à massa, para a mesma aceleração.",
      "A mesma força, pois a aceleração não depende da massa do corpo que é empurrado.",
      "Metade da força, pois corpos mais pesados movem-se com mais facilidade e menos esforço.",
      "Quatro vezes mais força, pois a força cresce com o quadrado da massa do utente."
    ],
    "correctIndex": 0,
    "explanation": "Pela 2.ª Lei (F = m · a), com a constante, duplicando a massa (2m) é indispensável duplicar a força (2F): 'Essa força será tanto maior quanto maior for a massa do corpo'.",
    "distractorAnalysis": [
      "Está incorreta: Com a mesma força, a aceleração diminui quando a massa aumenta (a = F/m).",
      "Está incorreta: Corpos mais pesados exigem mais força para a mesma aceleração, e não menos.",
      "Está incorreta: A força é proporcional à massa, e não ao seu quadrado."
    ],
    "nursingApplication": "Fundamenta a regra ergonómica de mobilizar doentes muito pesados com a ajuda de mais profissionais ou de um elevador de transferência."
  },
  {
    "id": 1037,
    "topicId": 1,
    "question": "Um enfermeiro aplica uma força resultante de 100 N a um carrinho vazio de 10 kg e depois a mesma força a um carrinho carregado de 50 kg. Como se comparam as acelerações?",
    "options": [
      "Ambos adquirem a mesma aceleração de 10 m/s², pois a força é igual.",
      "O vazio adquire 10 m/s² e o carregado 2 m/s².",
      "O carrinho carregado adquire uma aceleração 5 vezes superior à do vazio.",
      "Não há aceleração, pois a força aplicada é igual ao peso do carrinho."
    ],
    "correctIndex": 1,
    "explanation": "Usando a = F / m: no vazio a = 100 / 10 = 10 m/s²; no carregado a = 100 / 50 = 2 m/s². A aceleração do carrinho pesado é 5 vezes menor para a mesma força.",
    "distractorAnalysis": [
      "Está incorreta: A aceleração depende da massa; com massas diferentes, as acelerações também são diferentes.",
      "Está incorreta: O carregado tem maior massa e, por isso, menor aceleração: 5 vezes menor, e não maior.",
      "Está incorreta: Com 100 N resultantes há aceleração; o peso é equilibrado pela normal e não impede a aceleração horizontal."
    ],
    "nursingApplication": "Alerta o profissional para controlar com maior cautela a inércia e travagem de equipamentos hospitalares pesados."
  },
  {
    "id": 1038,
    "topicId": 1,
    "question": "Em termos simples, como se resume o princípio prático da 2.ª Lei de Newton?",
    "options": [
      "Para manter um corpo em movimento, a força resultante tem de aumentar com o tempo.",
      "A massa de um corpo diminui à medida que percorre uma distância no tempo.",
      "Para acelerar um corpo é preciso uma força, tanto maior quanto maior for a sua massa.",
      "Os corpos aceleram naturalmente na horizontal, a cerca de 9,8 m/s², sem forças."
    ],
    "correctIndex": 2,
    "explanation": "Resume-se: para acelerar um corpo é preciso aplicar-lhe uma força, tanto maior quanto maior for a sua massa.",
    "distractorAnalysis": [
      "Está incorreta: Manter um corpo em movimento uniforme não exige força crescente; com resultante nula, o corpo mantém a velocidade (1.ª Lei).",
      "Está incorreta: A massa de um corpo não diminui com o percurso; é uma propriedade constante.",
      "Está incorreta: Nenhum corpo acelera sem força; os 9,8 m/s² são a aceleração da queda vertical."
    ],
    "nursingApplication": "Explica a relação intuitiva entre a massa dos materiais a transportar e a força necessária para os acelerar ou travar."
  },
  {
    "id": 1039,
    "topicId": 1,
    "question": "Se uma força resultante horizontal de 40 N atuar sobre uma cadeira com massa de 8 kg (desprezando atritos), qual é a aceleração produzida?",
    "options": [
      "320 m/s², obtida por multiplicação de 40 por 8.",
      "0,2 m/s², obtida por divisão de 8 por 40.",
      "5 m/s², obtida por divisão de 40 por 8.",
      "48 m/s², obtida por soma de 40 e 8."
    ],
    "correctIndex": 2,
    "explanation": "Aplicando a = F / m: a = 40 N / 8 kg = 5 m/s².",
    "distractorAnalysis": [
      "Está incorreta: Multiplicar F por m contraria a 2.ª Lei, que dá a = F / m.",
      "Está incorreta: Dividir m por F inverte a relação correta.",
      "Está incorreta: Somar F e m não tem sentido físico nesta relação."
    ],
    "nursingApplication": "Permite quantificar o comportamento cinemático e a segurança de equipamentos móveis na enfermaria."
  },
  {
    "id": 1040,
    "topicId": 1,
    "question": "Na prática de enfermagem, por que razão a mobilização de um utente bariátrico exige técnicas e meios auxiliares especiais?",
    "options": [
      "Porque a massa elevada exige forças maiores para iniciar ou travar o movimento.",
      "Porque os doentes com obesidade severa deixam de obedecer à atração da gravidade.",
      "Porque a 2.ª Lei de Newton deixa de se aplicar a corpos com massa superior a 100 kg.",
      "Porque o atrito cinético se anula quando a massa corporal aumenta de forma significativa."
    ],
    "correctIndex": 0,
    "explanation": "Devido a F = m · a, massas muito elevadas exigem forças muito elevadas quer para serem aceleradas quer para serem travadas. Sem meios mecânicos de apoio, o esforço sobre a coluna dos profissionais pode tornar-se lesivo.",
    "distractorAnalysis": [
      "Está incorreta: A gravidade atua sobre todos os corpos com massa; o peso é proporcional à massa (P = m · g).",
      "Está incorreta: As leis de Newton aplicam-se a qualquer massa macroscópica, sem limite de 100 kg.",
      "Está incorreta: O atrito não se anula com a massa; em geral, aumenta com o peso sobre a superfície."
    ],
    "nursingApplication": "Prevenção de acidentes de trabalho e de lesões dorsolombares na equipa de enfermagem durante manobras no leito."
  },
  {
    "id": 1041,
    "topicId": 1,
    "question": "Qual é a representação matemática do par ação-reação da 3.ª Lei de Newton?",
    "options": [
      "F<sub>A→B</sub> + F<sub>B→A</sub> = m · a, com a massa dos dois corpos somada.",
      "F<sub>A→B</sub> = - F<sub>B→A</sub>, com a mesma intensidade e sentidos opostos.",
      "F<sub>A→B</sub> / F<sub>B→A</sub> = 0, com as forças a anularem-se mutuamente.",
      "F<sub>A→B</sub> = F<sub>B→A</sub>², com a intensidade elevada ao quadrado."
    ],
    "correctIndex": 1,
    "explanation": "Apresenta-se a formulação clássica vetorial: F<sub>A→B</sub> = - F<sub>B→A</sub>, significando que as forças têm a mesma intensidade e direção, mas sentidos opostos.",
    "distractorAnalysis": [
      "Está incorreta: As forças atuam em corpos distintos, pelo que somá-las para obter m·a de um único corpo é incorreto.",
      "Está incorreta: O quociente entre as intensidades seria 1, e não 0; as forças atuam em corpos distintos.",
      "Está incorreta: A relação é de estrita igualdade de intensidade, não de proporção quadrática."
    ],
    "nursingApplication": "Fundamental para compreender as forças mútuas que se desenvolvem na interface entre o doente e a superfície de apoio."
  },
  {
    "id": 1042,
    "topicId": 1,
    "question": "Qual é o enunciado da 3.ª Lei de Newton?",
    "options": [
      "A reação a uma força é menor do que a própria força, porque parte se perde no contacto.",
      "A força de atrito é perpendicular à superfície que suporta o peso do corpo.",
      "Quando um corpo A exerce uma força sobre B, B exerce sobre A uma força igual e de sentido oposto.",
      "A soma de todas as forças que atuam num corpo em movimento acelerado é nula."
    ],
    "correctIndex": 2,
    "explanation": "'Quando um corpo A exerce uma força sobre B, B exerce sobre A uma força igual e de sentido oposto'.",
    "distractorAnalysis": [
      "Está incorreta: Pela 3.ª Lei, a reação tem a mesma intensidade da ação; não é menor, nem se perde parte no contacto.",
      "Está incorreta: A força de atrito é tangencial e paralela à superfície, não perpendicular.",
      "Está incorreta: Num corpo acelerado a força resultante é não nula (F<sub>R</sub> = m · a), e a 3.ª Lei trata de forças entre corpos distintos."
    ],
    "nursingApplication": "Ensina a ter consciência de que a força que a mão do enfermeiro exerce sobre o utente tem a mesma intensidade da força que o utente exerce sobre a mão."
  },
  {
    "id": 1043,
    "topicId": 1,
    "question": "Por que razão as forças de ação e de reação não se anulam mutuamente num mesmo corpo?",
    "options": [
      "Porque a reação surge depois da ação, quando esta já deixou de atuar.",
      "Porque a força de reação tem uma intensidade 50% menor que a de ação.",
      "Porque uma força atua no plano horizontal e a outra no plano vertical.",
      "Porque atuam em corpos diferentes: a ação em B e a reação em A."
    ],
    "correctIndex": 3,
    "explanation": "Duas forças só se anulam mutuamente se atuarem sobre o mesmo corpo. Como a ação atua num corpo e a reação atua no outro corpo, elas nunca se anulam entre si.",
    "distractorAnalysis": [
      "Está incorreta: Ação e reação são simultâneas; nenhuma surge depois da outra.",
      "Está incorreta: Ação e reação têm a mesma intensidade; não há redução de 50 %.",
      "Está incorreta: Ação e reação têm a mesma direção; não atuam em planos diferentes."
    ],
    "nursingApplication": "Evita o erro comum de pensar que o peso e a força normal são um par ação-reação, pois ambos atuam no mesmo corpo."
  },
  {
    "id": 1044,
    "topicId": 1,
    "question": "Um profissional de saúde empurra uma parede da enfermaria com uma força horizontal de 70 N dirigida para a frente. Qual é a força que a parede exerce sobre as mãos do profissional?",
    "options": [
      "Uma força de 70 N, na mesma direção horizontal, dirigida para trás.",
      "Zero newtons, porque a parede não tem músculos e não pode reagir.",
      "Uma força de 140 N, dirigida para o chão por ação da atração gravítica.",
      "Uma força de 35 N, porque os materiais de alvenaria dissipam metade da força."
    ],
    "correctIndex": 0,
    "explanation": "Pela 3.ª Lei de Newton, a parede reage instantaneamente sobre o profissional com uma força de intensidade rigorosamente igual (70 N), na mesma direção horizontal e em sentido oposto (para trás).",
    "distractorAnalysis": [
      "Está incorreta: A parede reage mecanicamente à força, sem necessidade de músculos.",
      "Está incorreta: A reação é horizontal e de igual intensidade; não há força gravítica de 140 N.",
      "Está incorreta: A alvenaria não dissipa metade da força; a reação tem a mesma intensidade."
    ],
    "nursingApplication": "Explica a importância de manter calçado estável e boa postura ao exercer força sobre estruturas de apoio."
  },
  {
    "id": 1045,
    "topicId": 1,
    "question": "Qual das seguintes afirmações traduz, em linguagem quotidiana e pedagógica, o princípio fundamental da 3.ª Lei de Newton?",
    "options": [
      "Toda a ação tem a sua reação de igual intensidade e sentido oposto.",
      "Quanto maior for a força aplicada a um corpo, maior será a sua aceleração.",
      "Um corpo mantém o seu estado de movimento enquanto a força resultante for nula.",
      "Toda a ação provoca uma reação de menor intensidade, que a vai anulando."
    ],
    "correctIndex": 0,
    "explanation": "Conclui-se de forma pedagógica: 'Por outras palavras: Toda a ação tem a sua reação de igual intensidade e sentido oposto'.",
    "distractorAnalysis": [
      "Está incorreta: A relação entre força e aceleração é a 2.ª Lei de Newton, e não a 3.ª.",
      "Está incorreta: Esta afirmação traduz a 1.ª Lei de Newton (Lei da Inércia), e não a 3.ª.",
      "Está incorreta: A reação tem a mesma intensidade da ação e atua noutro corpo, pelo que não a anula."
    ],
    "nursingApplication": "Compreensão da interação mútua de forças no posicionamento e mobilização de doentes na prática clínica de enfermagem."
  },
  {
    "id": 1046,
    "topicId": 1,
    "question": "Ao caminhar no chão da enfermaria, o pé empurra o piso para trás. Qual é a força que impulsiona a pessoa para a frente?",
    "options": [
      "A força de atrito que o piso exerce sobre o pé, dirigida para trás, que trava a marcha.",
      "A elasticidade da sola do sapato, que devolve a energia para a frente.",
      "A força de atrito do piso sobre a sola, dirigida para a frente, que empurra a pessoa.",
      "A força dos músculos da perna, que atua diretamente sobre o próprio corpo."
    ],
    "correctIndex": 2,
    "explanation": "Ao caminhar, o pé exerce uma força de ação para trás no solo; pela 3.ª Lei de Newton, o solo reage com uma força de atrito estático dirigida para a frente sobre o pé. É esta força de atrito que empurra a pessoa para a frente e propulsiona a marcha.",
    "distractorAnalysis": [
      "Está incorreta: Na fase de impulsão, o atrito do piso sobre o pé é dirigido para a frente, e é esse atrito que impulsiona a pessoa.",
      "Está incorreta: A sola deforma-se e recupera, mas não é uma força externa que impulsiona a pessoa; a força vem do atrito do piso.",
      "Está incorreta: A força muscular é interna e não acelera o corpo por si só; é o atrito do piso que o impulsiona."
    ],
    "nursingApplication": "Compreensão essencial para avaliar o risco de escorregamento e queda em pisos molhados sem aderência."
  },
  {
    "id": 1047,
    "topicId": 1,
    "question": "Relativamente ao instante em que ocorrem as forças de ação e de reação da 3.ª Lei de Newton, qual das afirmações é verdadeira?",
    "options": [
      "A força de ação surge primeiro, e a reação aparece depois, com algum atraso.",
      "A reação surge depois de o corpo atingido sofrer uma deformação visível.",
      "As forças de ação e de reação ocorrem em simultâneo, no mesmo instante.",
      "Ocorrem em simultâneo, mas só enquanto os dois corpos estão em movimento."
    ],
    "correctIndex": 2,
    "explanation": "As forças de interação entre dois corpos são perfeitamente simultâneas: nenhuma antecede a outra, existindo apenas enquanto durar o contacto ou interação mútua.",
    "distractorAnalysis": [
      "Está incorreta: Ação e reação não se sucedem; ocorrem no mesmo instante.",
      "Está incorreta: A reação surge no mesmo instante da ação, mesmo sem deformação visível do corpo atingido.",
      "Está incorreta: A ação e a reação existem em qualquer interação, mesmo com os corpos em repouso."
    ],
    "nursingApplication": "Importante para entender o impacto imediato de colisões e forças aplicadas em contexto clínico."
  },
  {
    "id": 1048,
    "topicId": 1,
    "question": "Quando um doente se senta numa cadeira de rodas exercendo uma força para baixo sobre o assento, o que faz o assento da cadeira?",
    "options": [
      "Exerce sobre o doente uma força vertical, para cima, de igual intensidade.",
      "Exerce sobre o doente uma força para cima, menor do que a que recebe.",
      "Exerce uma força horizontal, para a esquerda, de metade da intensidade do peso.",
      "Não exerce força, porque é uma estrutura inanimada."
    ],
    "correctIndex": 0,
    "explanation": "Pela 3.ª Lei de Newton, ao exercer uma força vertical para baixo no assento, o assento reage exercendo uma força vertical para cima de igual intensidade sobre o corpo do utente.",
    "distractorAnalysis": [
      "Está incorreta: Pela 3.ª Lei, a força do assento sobre o doente tem a mesma intensidade da que o doente exerce sobre o assento.",
      "Está incorreta: A força de apoio é vertical, e não horizontal.",
      "Está incorreta: O assento reage à força aplicada, como exige a 3.ª Lei de Newton."
    ],
    "nursingApplication": "A força de suporte do assento é a base para compreender como as almofadas de redistribuição de pressão reduzem a pressão nas proeminências ósseas."
  },
  {
    "id": 1049,
    "topicId": 1,
    "question": "Se um camião de grande tonelagem colidir contra um automóvel ligeiro, como se compara a intensidade da força que o camião exerce sobre o automóvel com a que o automóvel exerce sobre o camião?",
    "options": [
      "A força do camião é muito maior, porque a sua massa é bastante superior.",
      "Ambas as forças têm a mesma intensidade, pois formam um par ação-reação.",
      "A força do automóvel é maior, porque sofreu uma desaceleração superior.",
      "A força exercida é nula para ambos os veículos no instante da colisão."
    ],
    "correctIndex": 1,
    "explanation": "Pela 3.ª Lei de Newton, a intensidade da força mútua na colisão é exatamente a mesma em ambos os corpos. O automóvel sofre uma desaceleração muito maior (a = F/m), o que agrava os danos e as lesões.",
    "distractorAnalysis": [
      "Está incorreta: A massa afeta as acelerações, e não a intensidade da força de interação.",
      "Está incorreta: O automóvel sofre maior aceleração, mas as forças têm a mesma intensidade.",
      "Está incorreta: As forças de colisão não são nulas; são forças de interação mútuas."
    ],
    "nursingApplication": "Ajuda a clarificar o erro comum de confundir a força exercida com os efeitos (aceleração e danos) da colisão."
  },
  {
    "id": 1050,
    "topicId": 1,
    "question": "Dois patinadores de gelo, um de 80 kg e outro de 40 kg, empurram-se mutuamente pelas mãos. Se o patinador de 80 kg aplica 120 N no de 40 kg, que força recebe de volta?",
    "options": [
      "Recebe 60 N, porque o outro patinador tem metade do seu peso.",
      "Recebe 240 N, devido à amplificação da força pelo gelo, que não tem atrito.",
      "Recebe 120 N, em sentido contrário, de acordo com a 3.ª Lei de Newton.",
      "Recebe 0 N, porque o patinador mais leve não consegue aplicar força."
    ],
    "correctIndex": 2,
    "explanation": "A intensidade do par ação-reação é rigorosamente idêntica em ambos os intervenientes: 120 N. O patinador mais leve terá o dobro da aceleração (a = 120/40 = 3 m/s² vs 120/80 = 1,5 m/s²), mas a força é a mesma.",
    "distractorAnalysis": [
      "Está incorreta: A força de reação não depende do peso do outro; é igual à força de ação.",
      "Está incorreta: O gelo não amplifica forças; a reação tem a mesma intensidade da ação.",
      "Está incorreta: Mesmo o patinador mais leve aplica força, e a reação é igual à ação."
    ],
    "nursingApplication": "Ilustra que, numa transferência, a força que o cuidador exerce sobre o doente tem a mesma intensidade da que o doente exerce sobre o cuidador."
  },
  {
    "id": 1051,
    "topicId": 1,
    "question": "No Movimento Retilíneo e Uniforme (MRU), o que acontece à velocidade (v) no decorrer do tempo?",
    "options": [
      "Aumenta de forma linear a cada segundo que o corpo se desloca.",
      "Diminui de forma linear até o corpo parar.",
      "Oscila periodicamente entre valores positivos e negativos.",
      "Mantém-se constante ao longo do tempo, com o mesmo módulo, direção e sentido."
    ],
    "correctIndex": 3,
    "explanation": "A propriedade basilar do MRU é a velocidade (v) constante ao longo do tempo.",
    "distractorAnalysis": [
      "Está incorreta: Aumentar a velocidade implica aceleração, que no MRU é nula.",
      "Está incorreta: Diminuir até parar é um movimento com aceleração, e não um MRU.",
      "Está incorreta: No MRU a velocidade não muda de sentido; mantém a mesma direção e sentido."
    ],
    "nursingApplication": "Permite avaliar o transporte estável de doentes mantendo velocidade constante para evitar solavancos."
  },
  {
    "id": 1052,
    "topicId": 1,
    "question": "Qual é o valor da aceleração (a) de um corpo que se desloca em Movimento Retilíneo e Uniforme?",
    "options": [
      "A aceleração é nula, pois a velocidade não sofre variação ao longo do tempo.",
      "A aceleração é igual a 9,8 m/s² na horizontal, como na queda livre.",
      "A aceleração varia com a massa do corpo, aumentando para corpos mais pesados.",
      "A aceleração atinge um valor muito elevado durante todo o percurso."
    ],
    "correctIndex": 0,
    "explanation": "Estabelece-se diretamente: 'A aceleração (a) é nula', uma vez que a velocidade não sofre qualquer variação temporal.",
    "distractorAnalysis": [
      "Está incorreta: 9,8 m/s² é a aceleração da queda livre vertical, e não uma aceleração horizontal em MRU.",
      "Está incorreta: A aceleração não depende da massa; num MRU é nula para qualquer corpo.",
      "Está incorreta: Uma aceleração elevada implicaria variação da velocidade, o que o MRU não tem."
    ],
    "nursingApplication": "Contribui para o conforto do utente em transporte, reduzindo as forças de inércia sentidas pelo corpo."
  },
  {
    "id": 1053,
    "topicId": 1,
    "question": "Qual é o valor da força resultante (F<sub>R</sub>) que atua sobre um corpo em Movimento Retilíneo e Uniforme?",
    "options": [
      "É positiva e superior ao peso do corpo.",
      "É nula (F<sub>R</sub> = 0 N), pois a aceleração também é nula.",
      "É igual à força de atrito multiplicada pela velocidade.",
      "É variável e depende do valor da velocidade em cada instante."
    ],
    "correctIndex": 1,
    "explanation": "Como a aceleração é nula (a = 0), pela 2.ª Lei de Newton (F<sub>R</sub> = m · a) a força resultante é obrigatoriamente nula: F<sub>R</sub> = 0 N.",
    "distractorAnalysis": [
      "Está incorreta: Uma força resultante positiva e superior ao peso provocaria aceleração, contrariando o MRU.",
      "Está incorreta: A força não se multiplica pela velocidade; em MRU a força resultante é nula.",
      "Está incorreta: A força resultante não depende da velocidade num MRU; é nula em cada instante."
    ],
    "nursingApplication": "Significa que, num piso horizontal, para manter uma maca a velocidade constante basta aplicar uma força que equilibre o atrito."
  },
  {
    "id": 1054,
    "topicId": 1,
    "question": "Uma maca hospitalar é deslocada ao longo de um corredor retilíneo com velocidade rigorosamente constante de 1 m/s. O que podemos afirmar?",
    "options": [
      "A força que o enfermeiro exerce é muito maior do que a força de atrito das rodas.",
      "A maca está a acelerar no sentido do movimento, de forma crescente.",
      "A maca deixa de sofrer a força da gravidade durante o trajeto.",
      "A força do profissional equilibra a força de atrito, pelo que F<sub>R</sub> = 0 N."
    ],
    "correctIndex": 3,
    "explanation": "Como a velocidade é constante e o movimento é retilíneo, a aceleração é zero. Portanto, a força aplicada para a frente equilibra perfeitamente a resistência de atrito para trás: F<sub>R</sub> = 0 N.",
    "distractorAnalysis": [
      "Está incorreta: Se a força do enfermeiro fosse muito maior que o atrito, a maca aceleraria, contrariando a velocidade constante.",
      "Está incorreta: Com velocidade constante a aceleração é nula; não há aceleração crescente.",
      "Está incorreta: A gravidade continua a atuar sobre a maca; o peso é equilibrado pela normal."
    ],
    "nursingApplication": "Evidencia que manter velocidade constante exige menos esforço do que acelerar ou desacelerar repetidamente."
  },
  {
    "id": 1055,
    "topicId": 1,
    "question": "Tanto um corpo em repouso como um corpo em Movimento Retilíneo e Uniforme (MRU) encontram-se em equilíbrio mecânico. O que têm ambos obrigatoriamente em comum em termos dinâmicos?",
    "options": [
      "Ambos possuem velocidade diferente de zero e aceleração elevada.",
      "Ambos sofrem forças resultantes elevadas no sentido do movimento.",
      "Ambos têm peso nulo por se encontrarem em superfícies horizontais.",
      "Em ambos a aceleração é nula e a força resultante é nula (F<sub>R</sub> = 0)."
    ],
    "correctIndex": 3,
    "explanation": "Tanto no repouso estático (v = 0) como no MRU (v = constante), a aceleração é nula (a = 0) e a força resultante é nula (F<sub>R</sub> = 0). Ambos constituem estados de equilíbrio translacional.",
    "distractorAnalysis": [
      "Está incorreta: Num corpo em repouso a velocidade é nula, e a aceleração não é elevada.",
      "Está incorreta: No equilíbrio a força resultante é nula, e não elevada.",
      "Está incorreta: O peso não é nulo: é a força da gravidade, presente em qualquer corpo com massa."
    ],
    "nursingApplication": "Mostra que um doente em repouso na cama e um doente transportado em linha reta a velocidade constante partilham a ausência de aceleração."
  },
  {
    "id": 1056,
    "topicId": 1,
    "question": "Para que um corpo continue em Movimento Retilíneo e Uniforme no vácuo sem atrito, é necessário continuar a empurrá-lo com uma força resultante?",
    "options": [
      "Não, pois pela 1.ª Lei de Newton o corpo mantém a sua velocidade constante por inércia.",
      "Sim, uma força constante no sentido do movimento, sem a qual a velocidade diminui.",
      "Sim, porque o movimento consome gradualmente a massa do objeto em deslocamento.",
      "Sim, uma força de intensidade igual ao peso do corpo, para vencer a sua inércia."
    ],
    "correctIndex": 0,
    "explanation": "Pela 1.ª Lei de Newton (Lei da Inércia), um corpo em movimento sujeito a uma força resultante nula mantém a velocidade constante (MRU), sem necessidade de força contínua.",
    "distractorAnalysis": [
      "Está incorreta: Sem atrito, nada faz diminuir a velocidade; uma força resultante constante aceleraria o corpo.",
      "Está incorreta: O movimento não consome a massa do corpo; a massa é constante.",
      "Está incorreta: A inércia não tem de ser vencida para manter o MRU; sem atrito, a força resultante necessária é nula."
    ],
    "nursingApplication": "Ajuda a desfazer conceções erróneas comuns sobre a necessidade de forças para manter o movimento."
  },
  {
    "id": 1057,
    "topicId": 1,
    "question": "Se um veículo de transporte de doentes mantiver um valor numérico de velocidade de 30 km/h, mas estiver a fazer uma rotunda circular:",
    "options": [
      "O movimento é retilíneo e uniforme, porque o módulo da velocidade, 30 km/h, é constante.",
      "O movimento não é retilíneo e uniforme, pois a direção da velocidade muda.",
      "A força resultante sobre o veículo é igual a zero newtons, pois o módulo se mantém.",
      "O veículo perde parte da sua inércia durante a curva, devido à mudança de direção."
    ],
    "correctIndex": 1,
    "explanation": "A velocidade é uma grandeza vetorial. Embora o módulo seja 30 km/h, a direção está a mudar continuamente ao longo da curva, o que implica aceleração (centrípeta) e força resultante não nula. Não é MRU.",
    "distractorAnalysis": [
      "Está incorreta: Um movimento com módulo constante pode não ser retilíneo; a direção da velocidade também conta.",
      "Está incorreta: Numa curva há aceleração centrípeta e, portanto, força resultante não nula.",
      "Está incorreta: A inércia é uma propriedade da massa e não se perde durante a curva."
    ],
    "nursingApplication": "Explica por que os doentes sentem forças laterais quando uma ambulância faz curvas, mesmo em velocidade moderada."
  },
  {
    "id": 1058,
    "topicId": 1,
    "question": "Qual é a condição mecânica necessária e suficiente para que um ponto material esteja em equilíbrio de translação?",
    "options": [
      "A velocidade tem de ser crescente a uma taxa constante de 1 m/s².",
      "O corpo tem de estar em repouso, com velocidade nula em relação ao solo.",
      "A resultante de todas as forças sobre o corpo tem de ser nula (F<sub>R</sub> = 0 N).",
      "O peso do corpo tem de ser o dobro da força normal de apoio."
    ],
    "correctIndex": 2,
    "explanation": "O equilíbrio de translação define-se estritamente pela anulação da força resultante: F<sub>R</sub> = 0 N (o que engloba tanto o repouso como o MRU).",
    "distractorAnalysis": [
      "Está incorreta: Uma aceleração constante aumenta a velocidade; o equilíbrio de translação exige aceleração nula.",
      "Está incorreta: Um corpo em MRU também está em equilíbrio de translação; a velocidade nula não é necessária.",
      "Está incorreta: Um corpo apoiado numa superfície horizontal, sem outras forças verticais, tem N = P, e não o dobro; a condição geral é F<sub>R</sub> = 0."
    ],
    "nursingApplication": "Base de análise da segurança postural e estática em suportes terapêuticos e macas."
  },
  {
    "id": 1059,
    "topicId": 1,
    "question": "Um carrinho de medicação desloca-se em MRU num piso horizontal. Se a força de atrito contrária ao movimento for de 18 N, que força horizontal aplica o enfermeiro?",
    "options": [
      "0 N, pois o carrinho se move sem auxílio no corredor.",
      "36 N, para que a velocidade aumente de forma contínua.",
      "9 N, pois a inércia do carrinho reduz para metade a força necessária.",
      "18 N, no sentido do movimento, para que F<sub>R</sub> = 0 N."
    ],
    "correctIndex": 3,
    "explanation": "Para manter MRU (aceleração zero e velocidade constante), a força aplicada deve anular exatamente a resistência: F<sub>aplicada</sub> - F<sub>atrito</sub> = 0 => F<sub>aplicada</sub> = 18 N.",
    "distractorAnalysis": [
      "Está incorreta: Sem força aplicada, o atrito faria o carrinho abrandar até parar.",
      "Está incorreta: Uma força de 36 N produziria aceleração, contrariando o MRU.",
      "Está incorreta: A inércia não reduz a força necessária; esta é igual ao atrito, 18 N."
    ],
    "nursingApplication": "Demonstra a relação equilibrada de forças no manuseamento rotineiro de equipamentos hospitalares."
  },
  {
    "id": 1060,
    "topicId": 1,
    "question": "Se a força resultante sobre uma maca for nula (F<sub>R</sub> = 0 N), o que podemos concluir com certeza?",
    "options": [
      "A maca está em repouso ou em movimento retilíneo e uniforme.",
      "A maca está a acelerar 9,8 m/s² para a frente, devido ao peso.",
      "A massa da maca foi reduzida, passando a ser quase nula.",
      "A maca perdeu o contacto com o chão, mas mantém-se em equilíbrio."
    ],
    "correctIndex": 0,
    "explanation": "Força resultante nula (F<sub>R</sub> = 0) é a condição exata que dita que o corpo ou está parado (repouso) ou se desloca em linha reta com velocidade invariável (MRU).",
    "distractorAnalysis": [
      "Está incorreta: Com F<sub>R</sub> = 0 não há aceleração; a maca não acelera 9,8 m/s² para a frente.",
      "Está incorreta: A massa de um corpo é constante e não se reduz por aplicar uma força.",
      "Está incorreta: F<sub>R</sub> = 0 não implica perda de contacto; a maca continua apoiada no chão."
    ],
    "nursingApplication": "Mostra como interpretar a ausência de força resultante numa maca parada com o travão aplicado."
  },
  {
    "id": 1061,
    "topicId": 1,
    "question": "Quantas são as forças fundamentais da natureza reconhecidas pela física moderna?",
    "options": [
      "2 forças: o peso e o atrito, presentes no dia a dia.",
      "4 forças fundamentais: gravítica, eletromagnética, nuclear forte e nuclear fraca.",
      "7 forças, correspondentes às 7 unidades de base do Sistema Internacional.",
      "Muitas forças distintas, sem uma categorização científica comum."
    ],
    "correctIndex": 1,
    "explanation": "Introduzem-se as 'Forças fundamentais da natureza', apresentando exatamente 4 forças fundamentais: Gravidade, Eletromagnética, Nuclear Forte e Nuclear Fraca.",
    "distractorAnalysis": [
      "Está incorreta: O peso e o atrito são manifestações das interações gravítica e eletromagnética, respetivamente, e não forças fundamentais.",
      "Está incorreta: As unidades de base do SI não correspondem a forças fundamentais.",
      "Está incorreta: A física reconhece um número pequeno e definido de interações fundamentais."
    ],
    "nursingApplication": "Estrutura o conhecimento dos alunos sobre a origem primária de todas as interações biológicas e materiais."
  },
  {
    "id": 1062,
    "topicId": 1,
    "question": "Como se define a Força Gravítica (ou Gravidade) na física e na biomecânica?",
    "options": [
      "Atração e repulsão mútuas entre polos de ímanes permanentes.",
      "Força que mantém os eletrões ligados ao núcleo atómico.",
      "Atração mútua entre corpos com massa, que se manifesta no peso (P = m · g).",
      "Resistência ao deslizamento de superfícies ásperas, que depende da rugosidade."
    ],
    "correctIndex": 2,
    "explanation": "Define-se a força gravítica como a atração mútua entre corpos com massa, que se manifesta no peso: P = m · g.",
    "distractorAnalysis": [
      "Está incorreta: Os ímanes correspondem à força magnética (eletromagnética), e não à gravítica.",
      "Está incorreta: A ligação dos eletrões ao núcleo é de natureza eletromagnética; a gravidade é desprezável à escala atómica.",
      "Está incorreta: A resistência ao deslizamento é o atrito, e não a gravidade."
    ],
    "nursingApplication": "Explica o peso corporal, que atua sobre o doente e se transmite ao sistema osteomuscular e, por contacto, ao leito."
  },
  {
    "id": 1063,
    "topicId": 1,
    "question": "Como se define a Força Eletromagnética no estudo das interações fundamentais da matéria?",
    "options": [
      "Pressão exercida por fluidos biológicos no interior de vasos sanguíneos.",
      "Energia emitida pelo núcleo atómico durante a fissão de átomos pesados.",
      "Deformação elástica de molas helicoidais, como as dos dinamómetros.",
      "Atração ou repulsão entre corpos com carga elétrica ou magnetizados."
    ],
    "correctIndex": 3,
    "explanation": "A força eletromagnética é a atração ou repulsão entre partículas ou corpos com carga elétrica, em repouso (força elétrica) ou em movimento (força magnética), mediada pelos campos elétrico e magnético.",
    "distractorAnalysis": [
      "Está incorreta: A pressão de fluidos biológicos não é uma interação fundamental da matéria.",
      "Está incorreta: A energia da fissão é de natureza nuclear, e não o que define a força eletromagnética.",
      "Está incorreta: A deformação elástica é um efeito (de origem microscópica eletromagnética), e não a definição da força eletromagnética."
    ],
    "nursingApplication": "Base para compreender a bioeletricidade celular, potenciais de ação e equipamentos como ECG e desfibrilhadores."
  },
  {
    "id": 1064,
    "topicId": 1,
    "question": "Qual é a descrição expressiva utilizada para caracterizar a Força Nuclear Forte?",
    "options": [
      "“Cola” que mantém os protões e os neutrões unidos no interior do núcleo atómico.",
      "“Força de atrito” que impede a rotação das órbitas eletrónicas.",
      "“Tensão ligamentar” que mantém as vértebras unidas na coluna vertebral.",
      "“Pressão capilar” exercida pelo fluxo arterial na pele do sacro."
    ],
    "correctIndex": 0,
    "explanation": "Descreve-se textualmente a Força nuclear forte como: '“Cola” que mantém os protões e os neutrões unidos no interior do núcleo atómico'.",
    "distractorAnalysis": [
      "Está incorreta: Não existe força de atrito em órbitas quânticas de eletrões.",
      "Está incorreta: Tensão ligamentar é um esforço mecânico tissular macroscópico, não uma força subatómica nuclear.",
      "Está incorreta: É uma pressão macroscópica sobre tecidos, e não uma força subatómica de coesão nuclear."
    ],
    "nursingApplication": "Permite aos alunos reter a função de coesão do núcleo atómico antes de abordarem a radioatividade médica."
  },
  {
    "id": 1065,
    "topicId": 1,
    "question": "Onde atua a força nuclear fraca?",
    "options": [
      "No atrito estático entre calçado hospitalar e piso molhado.",
      "Em alguns tipos de decaimento radioativo e na fusão nuclear.",
      "Na flexão do antebraço realizada pelo músculo bíceps braquial.",
      "No amortecimento elástico dos discos cartilagíneos intervertebrais."
    ],
    "correctIndex": 1,
    "explanation": "A força nuclear fraca está presente em alguns tipos de decaimento radioativo e na fusão nuclear.",
    "distractorAnalysis": [
      "Está incorreta: O atrito calçado-solo é uma manifestação macroscópica de forças eletromagnéticas.",
      "Está incorreta: A flexão do cotovelo é um sistema de alavancas osteomuscular mecânico.",
      "Está incorreta: O amortecimento de cartilagens é um comportamento viscoelástico, sem relação com a força nuclear fraca."
    ],
    "nursingApplication": "Compreensão essencial para os futuros tópicos de física nuclear e aplicações terapêuticas de radioisótopos."
  },
  {
    "id": 1066,
    "topicId": 1,
    "question": "A medição do peso de um utente numa balança hospitalar decorre diretamente de qual das 4 forças fundamentais?",
    "options": [
      "Da força nuclear forte que une o núcleo das células da pele.",
      "Da força nuclear fraca que causa decaimento radioativo ósseo.",
      "Da força da gravidade, que atrai a massa do utente para a Terra.",
      "De forças magnéticas repulsivas geradas pelo solo da enfermaria."
    ],
    "correctIndex": 2,
    "explanation": "O peso é a força de atração gravítica mútua entre a massa corporal do doente e o planeta Terra, dada por P = m · g.",
    "distractorAnalysis": [
      "Está incorreta: A força nuclear forte atua dentro do núcleo atómico, e não na pele ou na balança.",
      "Está incorreta: O decaimento radioativo não se relaciona com a medição do peso.",
      "Está incorreta: O solo não gera forças magnéticas repulsivas que determinem o peso do utente."
    ],
    "nursingApplication": "Ajuda a clarificar por que o peso varia com a gravidade local enquanto a massa se mantém invariável."
  },
  {
    "id": 1067,
    "topicId": 1,
    "question": "No interior do núcleo atómico, protões com a mesma carga positiva repelem-se eletrostaticamente. O que impede o núcleo de explodir?",
    "options": [
      "A força da gravidade, que atrai os protões com intensidade muito superior.",
      "O atrito cinético que imobiliza as partículas nas órbitas nucleares.",
      "A força normal exercida pela membrana que envolve o núcleo celular.",
      "A força nuclear forte, que atua como cola a distâncias muito curtas."
    ],
    "correctIndex": 3,
    "explanation": "A força nuclear forte é ordens de grandeza mais intensa que a repulsão eletromagnética a distâncias subatómicas, atuando como a 'cola' que mantém os nucleões firmemente unidos.",
    "distractorAnalysis": [
      "Está incorreta: A gravidade é muito mais fraca do que a repulsão elétrica à escala nuclear.",
      "Está incorreta: O atrito é uma força de contacto macroscópica, sem ação no núcleo atómico.",
      "Está incorreta: A membrana nuclear envolve o núcleo da célula, e não o núcleo atómico; não atua sobre os protões."
    ],
    "nursingApplication": "Introduz a estabilidade atómica necessária para compreender isótopos estáveis e radioativos em medicina."
  },
  {
    "id": 1068,
    "topicId": 1,
    "question": "As forças de atrito entre a pele e os lençóis e a resistência mecânica de contacto têm origem microscópica em qual força fundamental?",
    "options": [
      "Na força eletromagnética, entre os átomos das superfícies em contacto.",
      "Na força gravitacional entre as massas dos átomos do tecido do lençol.",
      "Na força nuclear fraca, que atua sobre as fibras têxteis do lençol.",
      "Na força nuclear forte, que une a pele ao colchão hospitalar."
    ],
    "correctIndex": 0,
    "explanation": "Todas as forças de contacto macroscópicas (atrito, força normal, tensão muscular, elasticidade) decorrem fundamentalmente de interações eletromagnéticas entre as nuvens eletrónicas dos átomos em contacto.",
    "distractorAnalysis": [
      "Está incorreta: A atração gravítica entre átomos é muito fraca para gerar atrito apreciável.",
      "Está incorreta: A força nuclear fraca não participa nas forças de atrito ou de coesão macroscópica.",
      "Está incorreta: A força nuclear forte atua no interior do núcleo atómico, e não entre a pele e o colchão."
    ],
    "nursingApplication": "Liga o conhecimento da física fundamental à compreensão das forças de atrito e de cisalhamento na pele de utentes acamados."
  },
  {
    "id": 1069,
    "topicId": 1,
    "question": "Na expressão da força da gravidade, P = m · g, o que representam as letras 'm' e 'g'?",
    "options": [
      "m = momento da força e g = grama de substância, medida em laboratório.",
      "m = massa do corpo (em kg) e g = aceleração gravítica local (em m/s²).",
      "m = metros percorridos ao longo do piso e g = grau de inclinação da rampa.",
      "m = músculo tracionado pelo tendão e g = goniometria da articulação."
    ],
    "correctIndex": 1,
    "explanation": "Na fórmula P = m · g, 'm' representa a massa do corpo (em quilogramas no SI) e 'g' a aceleração devida à gravidade local (aproximadamente 9,8 m/s² à superfície da Terra).",
    "distractorAnalysis": [
      "Está incorreta: Na fórmula do peso, m é a massa (o momento de força é M = F · b), e g é a aceleração da gravidade, e não o símbolo do grama.",
      "Está incorreta: Metros e graus não aparecem na fórmula do peso vertical.",
      "Está incorreta: Termos anatómicos não correspondem às variáveis da física newtoniana na fórmula P = m · g."
    ],
    "nursingApplication": "Permite calcular o peso de doentes e cargas para dimensionamento seguro de equipamentos."
  },
  {
    "id": 1070,
    "topicId": 1,
    "question": "Nos meios de diagnóstico e terapia nuclear (como PET ou cintigrafia), que forças fundamentais governam as emissões e a estabilidade atómica?",
    "options": [
      "O atrito cinético e a força normal exercida pelas marquesas.",
      "A gravidade newtoniana, que atua sobre os órgãos abdominais.",
      "As forças nucleares (forte e fraca) e a força eletromagnética.",
      "A radiação do próprio corpo, sem envolver forças físicas mensuráveis."
    ],
    "correctIndex": 2,
    "explanation": "A estabilidade do núcleo, as transformações radioativas (como decaimento beta mediado pela força fraca) e a emissão de radiação eletromagnética gama são regidas pelas forças nucleares e eletromagnética.",
    "distractorAnalysis": [
      "Está incorreta: Atrito e força normal são forças mecânicas de contacto, e não regem a estabilidade nuclear.",
      "Está incorreta: A gravidade não determina a estabilidade nuclear nem as emissões radioativas.",
      "Está incorreta: A emissão radioativa é regida por forças nucleares e eletromagnéticas, e não pela radiação do corpo."
    ],
    "nursingApplication": "Faz a ponte entre a mecânica introdutória e as futuras aulas de proteção radiológica e diagnóstico por imagem."
  },
  {
    "id": 1071,
    "topicId": 1,
    "question": "Qual é a definição exata de Força Normal (N) na mecânica e no apoio das superfícies?",
    "options": [
      "Força tangencial que se opõe ao movimento de deslizamento.",
      "Força centrípeta responsável por manter o sangue a circular nas artérias coronárias.",
      "Força de tração exercida por um tendão para fletir o antebraço sobre o braço.",
      "Força perpendicular exercida por uma superfície sobre o corpo que nela se apoia."
    ],
    "correctIndex": 3,
    "explanation": "Define-se textualmente: 'Força normal (N): Força perpendicular exercida por uma superfície sobre o corpo que nela se apoia'.",
    "distractorAnalysis": [
      "Está incorreta: A força tangencial descrita corresponde ao atrito, e não à força perpendicular de apoio.",
      "Está incorreta: A força centrípeta é dirigida para o centro de uma trajetória curva, e não é a normal.",
      "Está incorreta: A tração do tendão é uma força muscular, e não uma força de apoio."
    ],
    "nursingApplication": "Conceito fundamental para entender a força mecânica exercida pelo colchão sobre o corpo de um utente acamado."
  },
  {
    "id": 1072,
    "topicId": 1,
    "question": "Numa cama hospitalar perfeitamente horizontal, qual é a direção da Força Normal exercida pelo colchão sobre o doente?",
    "options": [
      "Vertical, perpendicular à superfície do colchão e dirigida para cima.",
      "Horizontal, paralela ao chão, apontando para os pés da cama.",
      "Inclinada a 45 graus, no sentido oblíquo em direção à cabeceira.",
      "Circular, rodando em torno do centro de massa do doente."
    ],
    "correctIndex": 0,
    "explanation": "Por definição física, a força 'normal' é sempre perpendicular (ortogonal, a 90 graus) relativamente à superfície de contacto. Sendo o colchão horizontal, a força normal atua na vertical para cima.",
    "distractorAnalysis": [
      "Está incorreta: A força normal é perpendicular à superfície; numa cama horizontal é vertical, e não horizontal.",
      "Está incorreta: A normal é perpendicular à superfície e não faz um ângulo de 45 graus com ela.",
      "Está incorreta: A força normal não é circular; é uma força de contacto de direção definida."
    ],
    "nursingApplication": "Garante a compreensão do vetor de força responsável por sustentar o peso corporal do doente no leito."
  },
  {
    "id": 1073,
    "topicId": 1,
    "question": "Por que razão a Força Normal (N) que atua sobre um utente deitado não constitui o par ação-reação do seu Peso (P)?",
    "options": [
      "Porque a força normal tem o dobro da intensidade do peso do corpo.",
      "Porque N e P atuam sobre o mesmo corpo, o que a 3.ª Lei não admite.",
      "Porque a força normal surge quando o doente se encontra em movimento acelerado.",
      "Porque a força normal é uma grandeza imaginária, sem unidade de medida."
    ],
    "correctIndex": 1,
    "explanation": "Na 3.ª Lei de Newton, a ação e a reação atuam obrigatoriamente em corpos diferentes. Como N e P atuam ambos sobre o mesmo corpo (o doente), eles equilibram-se mutuamente, mas não formam um par ação-reação.",
    "distractorAnalysis": [
      "Está incorreta: Num corpo em repouso sobre superfície horizontal, N = P; não é o dobro do peso.",
      "Está incorreta: A força normal existe mesmo em repouso, como se vê no utente deitado.",
      "Está incorreta: A força normal é uma força real, medida em newtons."
    ],
    "nursingApplication": "Ajuda a identificar as forças no doente acamado: o colchão sustenta-o com a força normal, e o doente comprime o colchão com uma força igual e oposta."
  },
  {
    "id": 1074,
    "topicId": 1,
    "question": "Qual é a relação direta entre a Força Normal exercida pelo colchão e o risco de desenvolvimento de lesões de pressão?",
    "options": [
      "A força normal anula o atrito, o que evita lesões na pele dos doentes.",
      "A força normal estimula a proliferação celular, acelerando a cicatrização de feridas.",
      "A força normal comprime os tecidos moles contra as proeminências ósseas, ocluindo capilares.",
      "A força normal provoca alterações atómicas nos tecidos da pele, de forma progressiva."
    ],
    "correctIndex": 2,
    "explanation": "A força normal exercida pela superfície do leito comprime os tecidos moles (músculo, tecido celular subcutâneo e derme) contra os ossos subjacentes; a pressão resultante, quando elevada e prolongada, colapsa os capilares sanguíneos, provocando isquemia.",
    "distractorAnalysis": [
      "Está incorreta: A força normal não anula o atrito; combinada com este, agrava o dano tecidual.",
      "Está incorreta: A compressão prolongada causa isquemia e necrose tecidual, e não estimula a cicatrização.",
      "Está incorreta: As lesões de pressão são eventos isquémicos mecânicos, sem alterações atómicas."
    ],
    "nursingApplication": "Fundamenta a mudança regular de decúbito em doentes acamados, com frequência individualizada segundo o risco de lesão por pressão e o tipo de superfície de apoio (EPUAP/NPIAP 2019)."
  },
  {
    "id": 1075,
    "topicId": 1,
    "question": "Na prática de enfermagem e no posicionamento do doente, qual é a região anatómica onde a força normal e a pressão sobre a pele são particularmente críticas em decúbito dorsal?",
    "options": [
      "Na pele sobre o grande trocânter do fémur, em contacto com o colchão.",
      "Na pele sobre a espinha ilíaca anterossuperior, em contacto com o colchão.",
      "Na face anterior da tíbia, junto ao joelho, em contacto com o colchão.",
      "Na pele sobre a proeminência do sacro, em contacto com o colchão."
    ],
    "correctIndex": 3,
    "explanation": "Destaca-se a pressão de interface entre a pele e o colchão sobre o sacro, como exemplo biofísico de referência no estudo da força normal e das lesões de pressão; os calcâneos são outra zona crítica.",
    "distractorAnalysis": [
      "Está incorreta: O grande trocânter é zona de apoio crítica em decúbito lateral; em decúbito dorsal, a pressão concentra-se no sacro.",
      "Está incorreta: A espinha ilíaca anterossuperior é zona de apoio em decúbito ventral; em decúbito dorsal, fica voltada para cima.",
      "Está incorreta: Em decúbito dorsal, a face anterior da tíbia fica voltada para cima, sem contacto com o colchão."
    ],
    "nursingApplication": "Área prioritária de inspeção de enfermagem diária em utentes imobilizados na enfermaria."
  },
  {
    "id": 1076,
    "topicId": 1,
    "question": "Um utente com massa de 70 kg está em repouso estático numa cama hospitalar horizontal. Adotando g = 9,8 m/s², qual é a intensidade da Força Normal total exercida pelo leito sobre o utente?",
    "options": [
      "686 N",
      "70 N",
      "7,14 N",
      "0 N"
    ],
    "correctIndex": 0,
    "explanation": "Num leito horizontal em equilíbrio estático, a força normal equilibra exatamente o peso do corpo: N = P = m · g = 70 kg × 9,8 m/s² = 686 N.",
    "distractorAnalysis": [
      "Está incorreta: 70 é a massa em quilogramas (kg), que tem de ser multiplicada por g (9,8) para obter a força em newtons.",
      "Está incorreta: 7,14 resultaria de dividir 70 por 9,8, o que é fisicamente incorreto, porque N = m · g.",
      "Está incorreta: A força normal não é nula; se o fosse, o peso não estaria equilibrado e o doente aceleraria para baixo."
    ],
    "nursingApplication": "Permite calcular a carga mecânica total suportada pela estrutura do colchão e distribuída pela pele."
  },
  {
    "id": 1077,
    "topicId": 1,
    "question": "Qual é o objetivo biomecânico do uso de colchões especiais de ar ou viscoelásticos?",
    "options": [
      "Reduzir a massa inercial do doente, aliviando assim a força normal exercida.",
      "Aumentar a área de contacto, diminuindo a pressão nos pontos de apoio (p = F / A).",
      "Aumentar a força normal, concentrando-a num único ponto ósseo do doente.",
      "Acelerar o doente, com movimentos periódicos contínuos e de alta velocidade."
    ],
    "correctIndex": 1,
    "explanation": "A força normal total (igual, em módulo, ao peso do doente) permanece constante. Ao moldar-se ao corpo, o colchão aumenta a área de superfície de contacto (A), reduzindo a pressão de interface nos pontos de apoio (p = F / A), o que diminui o risco de oclusão capilar.",
    "distractorAnalysis": [
      "Está incorreta: A massa inercial do doente não se altera com o colchão; o peso mantém-se.",
      "Está incorreta: Concentrar a força num único ponto aumenta a pressão, o oposto do objetivo.",
      "Está incorreta: Os colchões não aceleram o doente; o objetivo é reduzir a pressão em repouso."
    ],
    "nursingApplication": "Justifica a seleção e utilização correta de superfícies de redistribuição de pressão na prática hospitalar."
  },
  {
    "id": 1078,
    "topicId": 1,
    "question": "Quando se eleva a cabeceira da cama articulada transformando-a num plano inclinado, o que acontece à Força Normal exercida pelo colchão?",
    "options": [
      "Aumenta proporcionalmente para o triplo do peso original.",
      "Permanece inalterada, mesmo com a cama inclinada.",
      "Diminui, pois N equilibra a componente P<sub>n</sub> = P · cos θ.",
      "Transforma-se numa força eletromagnética que atrai o doente para a parede."
    ],
    "correctIndex": 2,
    "explanation": "No plano inclinado, a força normal equilibra apenas a componente perpendicular do peso (N = P<sub>n</sub> = P · cos θ). À medida que a cama inclina, P<sub>n</sub> diminui e a componente tangencial P<sub>t</sub> aumenta; o corpo só desliza se P<sub>t</sub> ultrapassar o atrito estático máximo.",
    "distractorAnalysis": [
      "Está incorreta: A força normal não excede o peso num plano inclinado sem forças externas adicionais.",
      "Está incorreta: A força normal varia com o cosseno da inclinação, diminuindo com o aumento do ângulo.",
      "Está incorreta: A normal é uma força de contacto perpendicular à superfície; não atrai o doente para a parede."
    ],
    "nursingApplication": "Elevar a cabeceira aumenta a componente do peso paralela ao colchão e concentra a carga na região sagrada e isquiática, favorecendo o deslizamento e o cisalhamento, pelo que se limita a elevação ao mínimo clinicamente necessário."
  },
  {
    "id": 1079,
    "topicId": 1,
    "question": "Qual é a unidade padrão no Sistema Internacional para expressar a Força Normal?",
    "options": [
      "Newton (N), unidade de força do Sistema Internacional.",
      "Pascal (Pa), unidade de pressão do Sistema Internacional.",
      "Quilograma (kg), unidade de massa do Sistema Internacional.",
      "Newton-metro (N·m), unidade de momento de força do Sistema Internacional."
    ],
    "correctIndex": 0,
    "explanation": "A Força Normal é uma força, pelo que a sua unidade no Sistema Internacional é o newton (N).",
    "distractorAnalysis": [
      "Está incorreta: O pascal é unidade de pressão, força por área, e não de força.",
      "Está incorreta: O quilograma é unidade de massa, e não de força.",
      "Está incorreta: O newton-metro é unidade de momento de força, e não de força normal."
    ],
    "nursingApplication": "Previne confusões terminológicas e dimensionais na resolução de problemas físicos de apoio e sustentação."
  },
  {
    "id": 1080,
    "topicId": 1,
    "question": "Considerando a interação mecânica entre um utente em decúbito dorsal e o colchão, onde se localiza a reação à força normal exercida pelo colchão sobre o corpo do doente?",
    "options": [
      "Na superfície do colchão, onde o doente exerce força sobre ele para baixo.",
      "No corpo do doente, no ponto de contacto com o colchão, na mesma direção.",
      "No centro de massa do doente, dirigida para o interior do corpo, por ação da gravidade.",
      "No pavimento da enfermaria, por baixo da cama, dirigida para cima."
    ],
    "correctIndex": 0,
    "explanation": "Se o corpo A é o doente e o corpo B é o colchão: o colchão exerce a força normal N no doente (para cima); a reação correspondente da 3.ª Lei é exercida pelo doente sobre o colchão (para baixo com igual intensidade).",
    "distractorAnalysis": [
      "Está incorreta: A reação de uma força atua sobre o outro corpo, e não sobre o mesmo corpo onde a força atua.",
      "Está incorreta: A reação atua sobre o colchão, na superfície de contacto, e não no centro de massa do doente.",
      "Está incorreta: O par ação-reação envolve só o doente e o colchão; o pavimento não faz parte dele."
    ],
    "nursingApplication": "Ao avaliar o risco de lesões por pressão num utente em decúbito dorsal, a normal que o colchão exerce sobre o sacro tem como reação a força que o utente exerce sobre o colchão; a pressão de interface sobre o sacro depende dessa força e da área de contacto."
  },
  {
    "id": 1081,
    "topicId": 1,
    "question": "Qual é a definição exata de Força de Atrito no estudo da mecânica e do movimento?",
    "options": [
      "Força perpendicular exercida por uma superfície que suporta um corpo em repouso.",
      "Força tangencial à superfície de contacto, que se opõe ao movimento.",
      "Atração gravítica exercida pela Terra sobre corpos com grande quantidade de matéria.",
      "Energia radiante emitida por núcleos atómicos instáveis durante a transição."
    ],
    "correctIndex": 1,
    "explanation": "Define-se a força de atrito como força tangencial à superfície de contacto que se opõe ao movimento relativo entre as superfícies ou, no atrito estático, à tendência de movimento.",
    "distractorAnalysis": [
      "Está incorreta: Esta é a força normal, perpendicular à superfície, e não o atrito.",
      "Está incorreta: A atração gravítica é o peso, e não uma força de contacto tangencial.",
      "Está incorreta: A energia radiante não é uma força mecânica de contacto."
    ],
    "nursingApplication": "Permite entender as forças de resistência encontradas ao empurrar carrinhos, macas e posicionar doentes."
  },
  {
    "id": 1082,
    "topicId": 1,
    "question": "Como se distinguem o 'Atrito estático' e o 'Atrito cinético' no estudo das forças mecânicas?",
    "options": [
      "O atrito estático atua na água, e o atrito cinético atua no ar.",
      "O atrito estático atua no plano vertical, e o atrito cinético no plano oblíquo.",
      "Não há distinção física entre ambos, sendo termos equivalentes.",
      "Atrito estático impede o movimento de começar; atrito cinético resiste durante o movimento."
    ],
    "correctIndex": 3,
    "explanation": "Categoriza-se: o atrito estático impede o movimento de começar; o atrito cinético é a força de resistência durante o movimento.",
    "distractorAnalysis": [
      "Está incorreta: Os dois atritos atuam entre superfícies sólidas em contacto, e não na água ou no ar.",
      "Está incorreta: A força de atrito é tangencial à superfície de contacto, e não se define por planos verticais ou oblíquos.",
      "Está incorreta: Os dois atritos distinguem-se pelo estado de movimento do corpo, o que é uma diferença física."
    ],
    "nursingApplication": "Ajuda a planear manobras de mobilização sabendo que o arranque inicial requer a maior força."
  },
  {
    "id": 1083,
    "topicId": 1,
    "question": "Qual é a relação correta entre o atrito estático máximo e o atrito cinético?",
    "options": [
      "O atrito cinético é, em geral, superior ao atrito estático máximo.",
      "O atrito cinético aumenta com a velocidade até igualar o estático máximo.",
      "O atrito estático e o cinético têm a mesma intensidade na maioria dos corpos.",
      "O atrito estático máximo é superior ao atrito cinético."
    ],
    "correctIndex": 3,
    "explanation": "O atrito estático máximo é superior ao atrito cinético. Por isso, pôr um corpo em movimento exige mais força do que mantê-lo em movimento.",
    "distractorAnalysis": [
      "Está incorreta: Em geral, o atrito cinético é inferior ao estático máximo, e não superior.",
      "Está incorreta: No modelo estudado, o atrito cinético é aproximadamente independente da velocidade e inferior ao estático máximo.",
      "Está incorreta: Os atritos estático e cinético têm, em geral, intensidades diferentes."
    ],
    "nursingApplication": "Princípio físico relevante para a ergonomia dos profissionais de enfermagem."
  },
  {
    "id": 1084,
    "topicId": 1,
    "question": "Qual é um exemplo prático de enfermagem que ilustra que o atrito estático é superior ao cinético?",
    "options": [
      "É mais difícil pôr um utente a deslizar sobre o lençol do que mantê-lo a deslizar.",
      "É mais difícil pesar um doente sentado do que um doente em pé.",
      "A velocidade de infusão do soro é mais rápida com agulha de menor calibre.",
      "A temperatura da pele diminui quando o utente caminha descalço no hospital."
    ],
    "correctIndex": 0,
    "explanation": "É mais difícil pôr um utente a deslizar sobre o lençol do que mantê-lo a deslizar: para iniciar o deslizamento é preciso vencer o atrito estático máximo, que é superior ao atrito cinético que se opõe ao deslizamento já iniciado. (Numa maca com rodas, a dificuldade do arranque deve-se sobretudo à inércia e à resistência ao rolamento.)",
    "distractorAnalysis": [
      "Está incorreta: A balança mede a mesma massa corporal independentemente da postura do utente.",
      "Está incorreta: Menor calibre de agulha abranda o fluxo; é um fenómeno hidrodinâmico (viscosidade), e não de atrito entre superfícies sólidas.",
      "Está incorreta: A pele arrefece por condução de calor, sem relação com o atrito estático."
    ],
    "nursingApplication": "Ao reposicionar um utente na cama com um lençol de deslizamento, o maior esforço ocorre no arranque, que deve ser coordenado entre os profissionais."
  },
  {
    "id": 1085,
    "topicId": 1,
    "question": "Uma força horizontal de 20 N é aplicada a uma maca parada, com as rodas travadas, mas a maca não se move porque o atrito estático máximo é de 50 N. Qual é a força de atrito real que atua na maca nesse momento?",
    "options": [
      "50 N em sentido contrário, fazendo a maca andar para trás.",
      "20 N, em sentido oposto à força aplicada, equilibrando-a.",
      "0 N, porque o atrito se manifesta quando o objeto já está em movimento.",
      "196 N, resultante de multiplicar a força pela gravidade local."
    ],
    "correctIndex": 1,
    "explanation": "Enquanto o corpo permanece em repouso, o atrito estático ajusta-se exatamente ao valor da força aplicada para manter o equilíbrio: F<sub>atrito</sub> = 20 N (F<sub>R</sub> = 0). Os 50 N representam apenas o limite máximo antes de romper o repouso.",
    "distractorAnalysis": [
      "Está incorreta: O atrito estático não atinge o máximo de 50 N; ajusta-se à força aplicada, e a maca não se move.",
      "Está incorreta: O atrito estático existe com o corpo parado e ajusta-se à força aplicada.",
      "Está incorreta: A força de atrito não resulta de multiplicar uma força pela gravidade; é um valor em newtons ajustado ao equilíbrio."
    ],
    "nursingApplication": "Evita a confusão comum entre o atrito estático instantâneo e o valor de atrito estático limite máximo."
  },
  {
    "id": 1086,
    "topicId": 1,
    "question": "Qual é a orientação geométrica (direção e sentido) do vetor Força de Atrito em relação à superfície de contacto?",
    "options": [
      "Direção perpendicular à superfície, com sentido para o interior do solo.",
      "Direção vertical ascendente, oposta à força da gravidade.",
      "Direção paralela à superfície de contacto, com sentido oposto ao movimento.",
      "Direção circular oblíqua, rodando no sentido dos ponteiros do relógio."
    ],
    "correctIndex": 2,
    "explanation": "A força de atrito é uma força tangencial: a sua linha de ação é sempre paralela à interface de contacto entre os corpos e aponta no sentido oposto ao deslocamento (ou tendência de deslocamento).",
    "distractorAnalysis": [
      "Está incorreta: A força perpendicular à superfície é a força normal, e não o atrito.",
      "Está incorreta: O atrito é paralelo à superfície de contacto, e não é definido por uma direção vertical fixa.",
      "Está incorreta: O atrito não é circular; a sua direção é tangencial à superfície."
    ],
    "nursingApplication": "Fundamental para desenhar e analisar esquemas de forças em rampas e transferências no leito."
  },
  {
    "id": 1087,
    "topicId": 1,
    "question": "O que acontece à intensidade da força de resistência por atrito imediatamente após uma caixa de material pesada, arrastada no chão, romper o repouso e começar a deslizar?",
    "options": [
      "Aumenta para o dobro da força de arranque, por efeito da inércia.",
      "Aumenta muito, prendendo a caixa ao chão de forma permanente.",
      "Mantém-se igual ao atrito estático máximo de arranque, durante todo o movimento.",
      "Diminui para o valor do atrito cinético, tornando o arrasto mais fácil."
    ],
    "correctIndex": 3,
    "explanation": "Assim que o repouso é vencido, a resistência passa do regime estático máximo para o regime cinético, que é inferior. Por isso, manter o movimento exige menor força do que o arranque inicial.",
    "distractorAnalysis": [
      "Está incorreta: Após o arranque, a força de atrito diminui, e não duplica.",
      "Está incorreta: O atrito cinético é inferior ao estático, e não cresce até imobilizar a caixa.",
      "Está incorreta: Com o corpo em movimento, o atrito passa para o regime cinético, inferior ao estático máximo."
    ],
    "nursingApplication": "Ao deslizar um utente sobre um lençol de transferência, a força necessária diminui depois de vencido o arranque, o que permite dosear o esforço da equipa."
  },
  {
    "id": 1088,
    "topicId": 1,
    "question": "Para transferir um utente acamado da cama para a maca com menor esforço físico e maior segurança, que dispositivo de auxílio reduz significativamente a força de atrito?",
    "options": [
      "Lençóis ou tábuas de deslizamento (transferência) com baixo atrito de contacto.",
      "Colocar sacos de areia adicionais sobre os pés do doente.",
      "Aumentar a aspereza dos lençóis utilizando tecidos rugosos e secos.",
      "Travar firmemente as rodas da maca durante a marcha no corredor."
    ],
    "correctIndex": 0,
    "explanation": "Os lençóis ou pranchas de deslizamento utilizam materiais com coeficientes de atrito extremamente baixos, reduzindo a força de atrito tangencial que a equipa tem de vencer para transferir o utente.",
    "distractorAnalysis": [
      "Está incorreta: Aumentar a carga aumenta a força normal e consequentemente aumenta o atrito, dificultando a transferência.",
      "Está incorreta: Tecidos rugosos aumentam o atrito e o cisalhamento da pele, elevando o risco de lesões.",
      "Está incorreta: Travar as rodas aumenta a resistência ao movimento da maca; é útil para imobilizar cama e maca durante a transferência, mas não reduz o atrito sobre o doente."
    ],
    "nursingApplication": "Aplicação clínica diária de ergonomia e proteção articular da equipa de enfermagem."
  },
  {
    "id": 1089,
    "topicId": 1,
    "question": "Qual é a unidade no Sistema Internacional (SI) utilizada para quantificar a Força de Atrito?",
    "options": [
      "Quilograma por metro quadrado (kg/m²).",
      "Newton (N).",
      "Pascal (Pa).",
      "Joule por segundo (J/s)."
    ],
    "correctIndex": 1,
    "explanation": "Como qualquer outra força física (peso, normal, tensão muscular), a força de atrito quantifica-se em newtons (N) no Sistema Internacional.",
    "distractorAnalysis": [
      "Está incorreta: kg/m² é unidade de densidade superficial, não de força.",
      "Está incorreta: pascal (Pa) é unidade de pressão.",
      "Está incorreta: Joule por segundo (J/s) corresponde ao watt (W), unidade de potência."
    ],
    "nursingApplication": "Garante coerência dimensional ao calcular o somatório de forças que atuam num corpo."
  },
  {
    "id": 1090,
    "topicId": 1,
    "question": "Se a força de resistência ao movimento (atrito) de uma maca em movimento for de 25 N e dois enfermeiros a puxarem juntos aplicando uma força total de 25 N na mesma direção e sentido do movimento:",
    "options": [
      "A maca vai acelerar continuamente, ganhando 10 m/s em cada segundo.",
      "A maca vai travar e parar em menos de um segundo.",
      "A força resultante é nula (F<sub>R</sub> = 0 N) e a maca prossegue em MRU.",
      "O atrito desaparece, pois a maca deixa de tocar no chão durante a viagem."
    ],
    "correctIndex": 2,
    "explanation": "A força resultante é F<sub>aplicada</sub> - F<sub>atrito</sub> = 25 N - 25 N = 0 N. Com F<sub>R</sub> = 0 N, o corpo em movimento mantém a sua velocidade constante em Movimento Retilíneo e Uniforme (MRU).",
    "distractorAnalysis": [
      "Está incorreta: Com F<sub>R</sub> = 0 N não há aceleração; a maca não ganha velocidade.",
      "Está incorreta: Sem força resultante contrária, a maca não trava; mantém a velocidade.",
      "Está incorreta: O atrito não desaparece; a maca continua em contacto com o chão."
    ],
    "nursingApplication": "Evidencia como manter velocidade constante exige apenas equilibrar a resistência ao rolamento das rodas."
  },
  {
    "id": 1091,
    "topicId": 1,
    "question": "Como se caracteriza a grandeza física força?",
    "options": [
      "Tipo: Escalar; Unidade SI: quilograma (kg); Definição: Quantidade de matéria; Exemplo: Massa corporal.",
      "Tipo: Escalar; Unidade SI: pascal (Pa); Definição: Força por área; Exemplo: Pressão capilar.",
      "Tipo: Vetorial; Unidade SI: newton por metro quadrado (N/m²); Definição: Atração entre polos magnéticos; Exemplo: Peso na balança.",
      "Tipo: Vetorial; Unidade SI: newton (N); Definição: Produz aceleração ou deformação; Exemplo: Força muscular do quadríceps."
    ],
    "correctIndex": 3,
    "explanation": "A força é uma grandeza vetorial, medida em newtons (N), que produz aceleração ou deformação. Por exemplo, a força muscular do quadríceps.",
    "distractorAnalysis": [
      "Está incorreta: A força é vetorial e mede-se em newtons, e não em quilogramas.",
      "Está incorreta: O pascal é unidade de pressão (força por área), e não de força.",
      "Está incorreta: N/m² é unidade de pressão, e a atração entre polos não define a força em geral."
    ],
    "nursingApplication": "Permite relacionar o conceito físico de força com a contração do quadríceps na marcha e extensão do joelho."
  },
  {
    "id": 1092,
    "topicId": 1,
    "question": "Como se caracteriza a grandeza física massa?",
    "options": [
      "Tipo: Escalar; Unidade SI: quilograma (kg); Definição: Medida da quantidade de matéria; Exemplo: Massa corporal do doente.",
      "Tipo: Vetorial; Unidade SI: newton (N); Definição: Atração gravítica; Exemplo: Força muscular.",
      "Tipo: Escalar; Unidade SI: pascal (Pa); Definição: Deformação do sacro; Exemplo: Lesão de pressão.",
      "Tipo: Vetorial; Unidade SI: quilograma (kg); Definição: Produz aceleração centrípeta; Exemplo: Andarilho."
    ],
    "correctIndex": 0,
    "explanation": "A massa é uma grandeza escalar, medida em quilogramas (kg). Definição: medida da quantidade de matéria. Por exemplo, a massa corporal do doente.",
    "distractorAnalysis": [
      "Está incorreta: A massa é escalar e mede-se em quilogramas, e não em newtons.",
      "Está incorreta: O pascal é unidade de pressão, e a massa não é uma deformação.",
      "Está incorreta: A massa é escalar e não produz aceleração centrípeta; o andarilho não define a massa."
    ],
    "nursingApplication": "Clarifica a linguagem técnica ao referir a massa corporal aferida nas balanças hospitalares."
  },
  {
    "id": 1093,
    "topicId": 1,
    "question": "Como se caracteriza a grandeza física peso?",
    "options": [
      "Tipo: Escalar; Unidade SI: quilograma (kg); Definição: Quantidade de água corporal; Exemplo: Hidratação.",
      "Tipo: Vetorial; Unidade SI: newton (N); Definição: Força de atração gravítica; Exemplo: Peso do doente.",
      "Tipo: Vetorial; Unidade SI: pascal (Pa); Definição: Tensão nos tendões; Exemplo: Marcha.",
      "Tipo: Escalar; Unidade SI: newton (N); Definição: Aceleração da maca; Exemplo: Ambulância."
    ],
    "correctIndex": 1,
    "explanation": "O peso é uma grandeza vetorial, medida em newtons (N): é a força de atração gravítica exercida sobre um corpo, por exemplo, o peso de um doente.",
    "distractorAnalysis": [
      "Está incorreta: O peso é uma força vetorial medida em newtons, não uma grandeza escalar em kg.",
      "Está incorreta: Pascal é unidade de pressão (N/m²), enquanto o peso é uma força expressa em newtons.",
      "Está incorreta: O peso é uma força vetorial (vertical, dirigida para o centro da Terra), e não uma grandeza escalar nem uma aceleração."
    ],
    "nursingApplication": "Essencial para distinguir rigorosamente peso (força em N) de massa (matéria em kg) em relatórios de biofísica."
  },
  {
    "id": 1094,
    "topicId": 1,
    "question": "Como se caracteriza a grandeza física pressão?",
    "options": [
      "Tipo: Vetorial; Unidade SI: newton (N); Definição: Interação entre corpos; Exemplo: Tendão do bíceps.",
      "Tipo: Escalar; Unidade SI: quilograma (kg); Definição: Medida de inércia; Exemplo: Doente bariátrico.",
      "Tipo: Escalar; Unidade SI: pascal (N/m²); Definição: Força por unidade de área; Exemplo: Pressão sobre o sacro.",
      "Tipo: Vetorial; Unidade SI: joule (J); Definição: Trabalho muscular; Exemplo: Elevação de carga."
    ],
    "correctIndex": 2,
    "explanation": "A pressão é uma grandeza escalar, medida em pascal (N/m²): é a força por unidade de área, por exemplo, a pressão sobre o sacro.",
    "distractorAnalysis": [
      "Está incorreta: A pressão é escalar e não se mede em newtons; o tendão do bíceps não a define.",
      "Está incorreta: A medida de inércia é a massa, e não a pressão.",
      "Está incorreta: O joule é unidade de energia e de trabalho, e não de pressão."
    ],
    "nursingApplication": "Fundamenta a fisiopatologia da isquemia cutânea e a monitorização de dispositivos de alívio de pressão."
  },
  {
    "id": 1095,
    "topicId": 1,
    "question": "Qual é a distinção física essencial entre massa e peso?",
    "options": [
      "Massa é medida em newtons, e peso é medido em quilogramas, por convenção do SI.",
      "Massa e peso são a mesma grandeza física, diferindo no nome que se lhes dá.",
      "A massa varia consoante o local do universo, e o peso é constante em todo o lado.",
      "Massa é escalar (kg), grandeza da matéria; peso é força vetorial (N), P = m · g."
    ],
    "correctIndex": 3,
    "explanation": "A massa (escalar em kg) quantifica a matéria e inércia de um corpo, sendo invariável com o local; o peso (vetorial em N) é a força gravítica exercida sobre essa massa, variando com a aceleração da gravidade local g.",
    "distractorAnalysis": [
      "Está incorreta: A massa mede-se em quilogramas, e o peso em newtons.",
      "Está incorreta: A massa e o peso são grandezas diferentes: a massa é escalar e o peso é vetorial.",
      "Está incorreta: A massa é constante em qualquer ponto do universo; é o peso que varia com o local."
    ],
    "nursingApplication": "Evita a linguagem coloquial incorreta e consolida o rigor científico na formação inicial de enfermagem."
  },
  {
    "id": 1096,
    "topicId": 1,
    "question": "Qual é a equivalência dimensional de 1 pascal (Pa) em unidades do SI?",
    "options": [
      "1 Pa = 1 N/m², um newton por cada metro quadrado de área.",
      "1 Pa = 1 kg · m / s, equivalente a uma unidade de momento linear.",
      "1 Pa = 1 N · m, um newton multiplicado por um metro de distância.",
      "1 Pa = 1 kg / s², equivalente a uma unidade de tensão superficial."
    ],
    "correctIndex": 0,
    "explanation": "1 Pa corresponde à pressão exercida por uma força de 1 N distribuída uniformemente por uma área de 1 m².",
    "distractorAnalysis": [
      "Está incorreta: kg · m / s é unidade de momento linear (quantidade de movimento), e não de pressão.",
      "Está incorreta: N · m é a unidade de momento de força ou de energia, e não de pressão.",
      "Está incorreta: kg / s² é unidade de tensão superficial, dimensionalmente distinta do pascal."
    ],
    "nursingApplication": "Permite calcular a pressão sobre a pele (em Pa) a partir da carga em newtons e da área de apoio em metros quadrados."
  },
  {
    "id": 1097,
    "topicId": 1,
    "question": "Qual é um exemplo de força gerada ativamente pelo corpo humano?",
    "options": [
      "A pressão intracraniana medida por um cateter ventricular.",
      "A força muscular de contração do quadríceps.",
      "O peso corporal do doente, exercido sobre a balança.",
      "A força normal exercida pelo colchão sobre o doente."
    ],
    "correctIndex": 1,
    "explanation": "A contração dos músculos, como o quadríceps, gera forças ativas: o músculo puxa o tendão, que transmite a força ao osso.",
    "distractorAnalysis": [
      "Está incorreta: A pressão intracraniana é uma pressão (grandeza escalar), e não uma força.",
      "Está incorreta: O peso é a força gravítica exercida pela Terra sobre o corpo, e não uma força gerada ativamente por este.",
      "Está incorreta: A força normal é exercida pelo colchão sobre o doente (força passiva de contacto), e não gerada pelo corpo."
    ],
    "nursingApplication": "Destaca a função motora do músculo quadríceps na estabilização do joelho e na marcha humana."
  },
  {
    "id": 1098,
    "topicId": 1,
    "question": "Se um doente com 60 kg de massa corporal for para a Lua (onde a gravidade g é cerca de 1/6 da Terra), como se comportam a sua massa e o seu peso?",
    "options": [
      "A massa reduz-se para 10 kg, e o peso mantém-se em 588 N.",
      "Ambos diminuem para zero, ficando o corpo sem matéria nem peso.",
      "A massa mantém-se em 60 kg, mas o peso passa a cerca de 1/6 do terrestre.",
      "A massa aumenta para 360 kg, para compensar a menor atração gravítica."
    ],
    "correctIndex": 2,
    "explanation": "A massa é a medida da inércia do corpo, que se mantém constante em 60 kg em qualquer ponto do universo. O peso (P = m · g) diminui na Lua proporcionalmente à menor aceleração gravítica g.",
    "distractorAnalysis": [
      "Está incorreta: A massa mede a inércia do corpo e não se reduz com a gravidade local.",
      "Está incorreta: Na Lua o corpo mantém a matéria e a massa; apenas o peso diminui.",
      "Está incorreta: A massa não aumenta para compensar a gravidade; mantém-se constante."
    ],
    "nursingApplication": "Reforça a independência entre a massa (medida da inércia) e a atração gravitacional (peso)."
  },
  {
    "id": 1099,
    "topicId": 1,
    "question": "Porque é que a pressão é uma grandeza escalar?",
    "options": [
      "Porque a pressão atua no sentido horizontal, para a esquerda.",
      "Porque se mede em pascal, e não em newton, como as grandezas vetoriais.",
      "Porque a pressão deixa de existir quando o corpo humano se encontra em repouso.",
      "Porque fica caracterizada por um valor numérico e uma unidade, sem direção."
    ],
    "correctIndex": 3,
    "explanation": "A pressão é uma grandeza escalar: num determinado ponto de um fluido ou interface, quantifica a intensidade da força normal distribuída por unidade de área sem apontar para uma direção preferencial única no espaço.",
    "distractorAnalysis": [
      "Está incorreta: A pressão não tem direção nem sentido; a força que exerce sobre uma superfície é que é perpendicular a esta.",
      "Está incorreta: A unidade não define o carácter vetorial (a velocidade, em m/s, é vetorial); a pressão é escalar por não ter direção.",
      "Está incorreta: A pressão existe em repouso, como se vê na pressão do doente sobre o colchão."
    ],
    "nursingApplication": "Garante a correta diferenciação entre a força exercida (vetor) e o seu efeito distribuído na pele (pressão, escalar)."
  },
  {
    "id": 1100,
    "topicId": 1,
    "question": "Qual das seguintes grandezas tem como unidade SI o quilograma (kg)?",
    "options": [
      "Massa (m), medida da quantidade de matéria de um corpo.",
      "Força (F), grandeza que produz aceleração ou deformação.",
      "Peso (P), força de atração gravítica exercida sobre o corpo.",
      "Pressão (p), força exercida por unidade de área."
    ],
    "correctIndex": 0,
    "explanation": "A massa é a única destas grandezas expressa em quilogramas (kg). A força e o peso medem-se em newtons (N), e a pressão em pascal (N/m²).",
    "distractorAnalysis": [
      "Está incorreta: A força mede-se em newtons, e não em quilogramas.",
      "Está incorreta: O peso é uma força e mede-se em newtons.",
      "Está incorreta: A pressão mede-se em pascal, e não em quilogramas."
    ],
    "nursingApplication": "Reforça que a massa corporal registada em kg (por exemplo, para o cálculo de doses por quilograma) não se confunde com o peso, que é uma força em newtons."
  },
  {
    "id": 1101,
    "topicId": 1,
    "question": "Durante a marcha de uma ambulância em socorro a 80 km/h, por que razão um enfermeiro que viaja de pé é projetado para a frente quando a viatura trava bruscamente?",
    "options": [
      "Pela 1.ª Lei de Newton, o corpo tende a manter a velocidade de 80 km/h.",
      "Porque a travagem acelera o corpo do enfermeiro para a frente, em relação à estrada.",
      "Porque o peso do enfermeiro aumenta durante a travagem, por efeito da inércia.",
      "Porque a pressão do ar diminui na cabina, criando um vácuo à frente do enfermeiro."
    ],
    "correctIndex": 0,
    "explanation": "Explica-se que, pela 1.ª Lei de Newton (Lei da Inércia), o corpo do enfermeiro tende a manter a velocidade de 80 km/h; como o atrito nos pés não chega para o travar ao ritmo da ambulância, é projetado para a frente em relação ao veículo.",
    "distractorAnalysis": [
      "Está incorreta: Em relação à estrada, o enfermeiro não é acelerado para a frente; é a ambulância que trava, e o corpo, por inércia, tende a manter a velocidade.",
      "Está incorreta: O peso do enfermeiro não aumenta na travagem; mantém-se o mesmo.",
      "Está incorreta: A cabina não cria vácuo durante a travagem; a projeção deve-se à inércia."
    ],
    "nursingApplication": "Reforça a obrigatoriedade de viajar sentado com cinto de segurança durante o transporte em marcha de emergência."
  },
  {
    "id": 1102,
    "topicId": 1,
    "question": "Um enfermeiro sem cinto de segurança choca contra a divisória de uma ambulância que trava bruscamente a 80 km/h. Por que razão a força do impacto pode atingir milhares de newtons?",
    "options": [
      "Porque a massa corporal do profissional aumenta com a velocidade do veículo.",
      "Porque a Terra puxa o profissional na horizontal, por atração gravítica intensa.",
      "Pela 2.ª Lei, o corpo é travado em pouquíssimo tempo pela divisória (F = m · a).",
      "Porque a força de impacto é igual à massa vezes a velocidade (F = m · v)."
    ],
    "correctIndex": 2,
    "explanation": "Pela 2.ª Lei de Newton (F = m · a), a força de impacto depende da desaceleração do corpo durante o impacto, que é muito breve, e não da desaceleração de travagem do veículo. Por exemplo, um corpo de 70 kg que passa de 22,2 m/s a zero em 0,05 s sofre a = 444 m/s² e F ≈ 31 000 N.",
    "distractorAnalysis": [
      "Está incorreta: A massa corporal não varia com a velocidade do veículo.",
      "Está incorreta: Na horizontal, a gravidade não puxa o corpo; a força que o trava é a da divisória.",
      "Está incorreta: m · v é a quantidade de movimento (kg·m/s), e não uma força; a força depende da rapidez com que essa velocidade é anulada."
    ],
    "nursingApplication": "Alerta para a elevada intensidade das forças de desaceleração que atuam sobre a equipa sem retenção mecânica."
  },
  {
    "id": 1103,
    "topicId": 1,
    "question": "Por que razão a divisória de uma ambulância pode ficar amolgada ou partir quando o corpo de um enfermeiro sem cinto a atinge?",
    "options": [
      "Porque o enfermeiro, em movimento, exerce sobre a divisória mais força do que recebe dela.",
      "Porque só o enfermeiro exerce força; a divisória, por estar fixa, limita-se a recebê-la.",
      "Porque o peso da ambulância é transferido na totalidade para o painel de separação.",
      "Pela 3.ª Lei de Newton (par ação-reação), as duas forças têm a mesma intensidade e sentidos opostos."
    ],
    "correctIndex": 3,
    "explanation": "Justifica-se: 'Pela 3.ª Lei de Newton (par ação-reação), a intensidade da força que a divisória exerce sobre o enfermeiro é a mesma que o enfermeiro exerce sobre a divisória'. As forças têm igual intensidade e sentidos opostos, e são aplicadas em corpos diferentes.",
    "distractorAnalysis": [
      "Está incorreta: Pela 3.ª Lei, as forças do par ação-reação têm a mesma intensidade; o enfermeiro não exerce mais força do que recebe.",
      "Está incorreta: Numa interação, os dois corpos exercem forças um sobre o outro; é a força da divisória sobre o enfermeiro que o trava.",
      "Está incorreta: O peso da ambulância apoia-se nas rodas e na suspensão, e não na divisória."
    ],
    "nursingApplication": "Demonstra que proteger o utente e a equipa com cintos reduz o risco de danos materiais e de lesões traumáticas graves."
  },
  {
    "id": 1104,
    "topicId": 1,
    "question": "Como pode a equipa de emergência médica prevenir o desfecho traumático decorrente de uma desaceleração brusca da viatura?",
    "options": [
      "Pelo uso do cinto de segurança por todos os ocupantes, também em marcha de socorro.",
      "Viajando em pé, com calçado antiderrapante e os pés bem afastados.",
      "Segurando-se firmemente com uma mão na maçaneta da porta, a meio da viagem.",
      "Abrindo as janelas para reduzir a pressão atmosférica dentro do veículo."
    ],
    "correctIndex": 0,
    "explanation": "Refere-se explicitamente: 'Sem cinto de segurança, o enfermeiro colidirá com a divisória'. O cinto aplica a força externa gradual necessária para desacelerar o corpo solidariamente com a ambulância.",
    "distractorAnalysis": [
      "Está incorreta: O atrito do calçado e uma base alargada não geram força suficiente para travar o corpo numa travagem brusca.",
      "Está incorreta: Segurar-se com uma só mão não impede a projeção numa travagem brusca.",
      "Está incorreta: A pressão atmosférica não influencia a projeção do corpo durante a travagem."
    ],
    "nursingApplication": "Regra de ouro de segurança e saúde ocupacional no trabalho em serviços de emergência pré-hospitalar."
  },
  {
    "id": 1105,
    "topicId": 1,
    "question": "Durante a colisão contra a divisória da ambulância, qual das seguintes afirmações sobre a intensidade das forças é verdadeira segundo a 3.ª Lei de Newton?",
    "options": [
      "A divisória aplica mais força sobre o enfermeiro do que o enfermeiro sobre a divisória.",
      "As forças de ação e reação entre o enfermeiro e a divisória têm a mesma intensidade.",
      "O enfermeiro exerce uma força menor sobre a divisória, por ter menos massa do que a ambulância.",
      "A intensidade de ambas as forças é nula, porque a colisão é instantânea."
    ],
    "correctIndex": 1,
    "explanation": "A 3.ª Lei de Newton impõe igualdade estrita de intensidade para qualquer par de forças de interação: F<sub>enfermeiro→divisória</sub> = F<sub>divisória→enfermeiro</sub>.",
    "distractorAnalysis": [
      "Está incorreta: A 3.ª Lei impõe igualdade de intensidade entre as forças de ação e de reação.",
      "Está incorreta: A massa do enfermeiro não altera a igualdade entre as forças de ação e reação; altera a aceleração de cada corpo.",
      "Está incorreta: As forças de colisão não são nulas, mesmo que a colisão seja rápida."
    ],
    "nursingApplication": "Consolidação teórica da equivalência mútua de forças no choque mecânico."
  },
  {
    "id": 1106,
    "topicId": 1,
    "question": "Se, ao embater numa superfície mais rígida, o corpo do enfermeiro sofrer a mesma variação de velocidade em metade do tempo, o que acontece à força média de impacto?",
    "options": [
      "A força de impacto reduz-se para metade, porque o tempo foi menor.",
      "A força de impacto permanece constante, pois a massa do enfermeiro não se altera na travagem.",
      "A força de impacto duplica, pois pela fórmula F = m · a a força é proporcional à aceleração.",
      "A força anula-se devido à paragem quase instantânea, que dissipa todo o movimento."
    ],
    "correctIndex": 2,
    "explanation": "Realizar a mesma variação de velocidade em metade do tempo duplica a desaceleração média (a = Δv/Δt). Pela 2.ª Lei (F = m · a), com a massa m constante, a força de impacto duplica.",
    "distractorAnalysis": [
      "Está incorreta: Com um tempo menor a desaceleração aumenta; a força não diminui para metade.",
      "Está incorreta: Se a desaceleração duplica, a força também duplica, pela 2.ª Lei.",
      "Está incorreta: Uma paragem rápida gera força elevada, e não nula."
    ],
    "nursingApplication": "Explica porque os cintos, os encostos almofadados e os airbags, ao prolongarem o tempo de paragem do corpo, reduzem a força de impacto sobre os ocupantes."
  },
  {
    "id": 1107,
    "topicId": 1,
    "question": "Uma ambulância circula a 80 km/h. Qual é a sua velocidade em metros por segundo?",
    "options": [
      "8,0 m/s",
      "22,2 m/s",
      "80 m/s",
      "288 m/s"
    ],
    "correctIndex": 1,
    "explanation": "1 km/h = 1000 m / 3600 s = 1/3,6 m/s. Logo, 80 km/h = 80 / 3,6 ≈ 22,2 m/s.",
    "distractorAnalysis": [
      "Está incorreta: Dividir por 10 não é a conversão correta; 1 km/h = 1/3,6 m/s.",
      "Está incorreta: 80 km/h não são 80 m/s; a conversão divide por 3,6.",
      "Está incorreta: Multiplicar por 3,6 faz a conversão no sentido errado."
    ],
    "nursingApplication": "Ajuda a converter velocidades entre km/h e m/s em cálculos de dinâmica, como os de travagem de emergência."
  },
  {
    "id": 1108,
    "topicId": 1,
    "question": "Que princípio fundamental de física e segurança resulta da análise biomecânica do impacto durante uma travagem de emergência?",
    "options": [
      "Que as três Leis de Newton atuam em conjunto e explicam os aspetos essenciais de uma colisão.",
      "Que a 1.ª Lei se aplica sobretudo aos veículos, e a 2.ª sobretudo aos seres vivos.",
      "Que a Biofísica se desliga da prática clínica e serve para cálculos teóricos.",
      "Que a gravidade terrestre é anulada durante movimentos de travagem de emergência."
    ],
    "correctIndex": 0,
    "explanation": "O cenário da colisão mostra a união das 3 leis: a 1.ª Lei explica por que o corpo é projetado (inércia), a 2.ª Lei quantifica a magnitude da força de travagem (F = m · a) e a 3.ª Lei explica a deformação da divisória (ação-reação).",
    "distractorAnalysis": [
      "Está incorreta: As leis de Newton aplicam-se a veículos e a seres vivos da mesma forma.",
      "Está incorreta: A Biofísica está ligada à prática clínica, e não é apenas teórica.",
      "Está incorreta: A gravidade não é anulada numa travagem; continua a atuar sobre o corpo."
    ],
    "nursingApplication": "Promove o pensamento crítico e a integração de conceitos biofísicos em incidentes do quotidiano profissional."
  },
  {
    "id": 1109,
    "topicId": 1,
    "question": "No momento em que o enfermeiro colide contra a divisória, que papel desempenha a divisória em termos da 1.ª Lei de Newton?",
    "options": [
      "Fornece a força de inércia que impele o enfermeiro para a frente.",
      "Exerce a força externa que altera o movimento e para o corpo do profissional.",
      "Transforma a inércia em energia térmica que aquece o tórax do profissional.",
      "Acelera o enfermeiro, para que ele atravesse o habitáculo da ambulância até ao fim."
    ],
    "correctIndex": 1,
    "explanation": "Pela 1.ª Lei, o enfermeiro continuaria a mover-se a 80 km/h até que uma força externa atuasse sobre ele. A divisória é a estrutura rígida que aplica essa força externa de paragem (infelizmente de forma brusca e traumática).",
    "distractorAnalysis": [
      "Está incorreta: A inércia não é uma força exercida pela divisória; a divisória trava o enfermeiro, em vez de o impelir para a frente.",
      "Está incorreta: A inércia não se transforma em energia térmica; a divisória exerce uma força de paragem.",
      "Está incorreta: A divisória trava o enfermeiro e não o acelera."
    ],
    "nursingApplication": "Evidencia por que os sistemas de retenção e airbags prolongam o tempo de paragem e distribuem a força por uma área maior."
  },
  {
    "id": 1110,
    "topicId": 1,
    "question": "Como se calcula a força média de impacto com que um ocupante desprovido de cinto colide contra a divisória na travagem brusca de uma viatura?",
    "options": [
      "Multiplicando a massa corporal pela velocidade da ambulância.",
      "Dividindo a massa corporal pelo tempo de paragem, sem ter em conta a aceleração.",
      "Dividindo a massa corporal pela distância percorrida até à divisória.",
      "Multiplicando a massa corporal do indivíduo pela desaceleração sofrida (F = m · a)."
    ],
    "correctIndex": 3,
    "explanation": "A força média de impacto é a massa corporal multiplicada pela desaceleração que o corpo sofre durante o impacto contra a divisória (F = m · a), e não pela desaceleração de travagem do veículo; como o impacto dura muito pouco, essa desaceleração é muito elevada.",
    "distractorAnalysis": [
      "Está incorreta: O produto da massa pela velocidade é a quantidade de movimento, e não a força.",
      "Está incorreta: A força é massa vezes aceleração, e não massa dividida pelo tempo.",
      "Está incorreta: Massa dividida por distância dá kg/m, que não é unidade de força; a distância de paragem entra em expressões como F = m·v²/(2d)."
    ],
    "nursingApplication": "Permite dimensionar a importância dos sistemas de retenção estofados e cintos de segurança de múltiplos pontos."
  },
  {
    "id": 1111,
    "topicId": 1,
    "question": "Como se define 'Equilíbrio Estável' na mecânica e na estática dos corpos?",
    "options": [
      "O corpo passa a mover-se com aceleração crescente após o desvio.",
      "Após desviar um corpo da sua posição de equilíbrio, este tende a desviar-se ainda mais.",
      "Após desviar um corpo da sua posição de equilíbrio, este permanece em equilíbrio na nova posição.",
      "O corpo retorna à posição inicial após ser desviado da posição de equilíbrio."
    ],
    "correctIndex": 3,
    "explanation": "Define-se o equilíbrio estável: o corpo retorna à posição inicial após ser desviado da sua posição de equilíbrio.",
    "distractorAnalysis": [
      "Está incorreta: Num equilíbrio estável o corpo não acelera para longe; regressa à posição inicial.",
      "Está incorreta: Desviar-se ainda mais é o equilíbrio instável.",
      "Está incorreta: Permanecer na nova posição é o equilíbrio indiferente."
    ],
    "nursingApplication": "Por analogia, uma cadeira de rodas com base larga, ligeiramente inclinada para um lado, regressa à posição inicial, o que contribui para a segurança do utente."
  },
  {
    "id": 1112,
    "topicId": 1,
    "question": "Como se define 'Equilíbrio Instável' na mecânica e na estática dos corpos?",
    "options": [
      "Após ser desviado, o corpo tende a afastar-se ainda mais da posição de equilíbrio.",
      "O corpo retorna à posição inicial de forma espontânea após ter sido desviado.",
      "Após ser desviado, o corpo permanece em repouso na nova posição, sem momento resultante.",
      "O corpo tem o centro de gravidade abaixo do seu ponto de suspensão."
    ],
    "correctIndex": 0,
    "explanation": "Define-se o equilíbrio instável: após ser desviado, o corpo tende a afastar-se ainda mais da posição de equilíbrio.",
    "distractorAnalysis": [
      "Está incorreta: Retornar à posição inicial é a definição de equilíbrio estável.",
      "Está incorreta: Permanecer na nova posição é a definição de equilíbrio indiferente.",
      "Está incorreta: Com o centro de gravidade abaixo do ponto de suspensão, o equilíbrio é estável, e não instável."
    ],
    "nursingApplication": "Descreve o estado biomecânico de um utente com risco iminente de queda (ex.: em pontas dos pés com base estreita)."
  },
  {
    "id": 1113,
    "topicId": 1,
    "question": "Como se define 'Equilíbrio Indiferente' (ou neutro) na mecânica dos corpos?",
    "options": [
      "O corpo oscila periodicamente entre duas posições extremas a alta frequência.",
      "Após ser desviado, o corpo permanece em equilíbrio na nova posição.",
      "Após ser desviado, o corpo afasta-se cada vez mais da posição inicial.",
      "O corpo retorna à posição de origem, ao fim de algum tempo."
    ],
    "correctIndex": 1,
    "explanation": "Define-se o equilíbrio indiferente: após ser desviado, o corpo permanece em equilíbrio na nova posição.",
    "distractorAnalysis": [
      "Está incorreta: Oscilar entre duas posições extremas é um movimento periódico, e não o equilíbrio indiferente.",
      "Está incorreta: Afastar-se cada vez mais da posição inicial caracteriza o equilíbrio instável.",
      "Está incorreta: Retornar à posição de origem é o equilíbrio estável."
    ],
    "nursingApplication": "Exemplificado por uma bola ou roda num piso plano horizontal, que encontra novo equilíbrio onde quer que pare."
  },
  {
    "id": 1114,
    "topicId": 1,
    "question": "Qual é o princípio fundamental relativo aos corpos em equilíbrio?",
    "options": [
      "Um corpo em equilíbrio não pode ter forças a atuar sobre ele.",
      "Um corpo só está em equilíbrio se estiver em repouso.",
      "Um corpo em equilíbrio pode ter forças a atuar, desde que a resultante seja nula.",
      "Para haver equilíbrio, a força normal tem de ser o dobro da força de atrito."
    ],
    "correctIndex": 2,
    "explanation": "Destaca-se que o equilíbrio exige apenas força resultante nula, e não a ausência de forças sobre o corpo.",
    "distractorAnalysis": [
      "Está incorreta: Um corpo em equilíbrio pode ter várias forças a atuar sobre ele, com resultante nula.",
      "Está incorreta: Em movimento retilíneo uniforme também F<sub>R</sub> = 0, pelo que há equilíbrio sem repouso.",
      "Está incorreta: A relação entre a normal e o atrito não é condição geral de equilíbrio."
    ],
    "nursingApplication": "Ensina a identificar que um doente em repouso no leito tem várias forças a atuar sobre ele, cuja resultante é nula."
  },
  {
    "id": 1115,
    "topicId": 1,
    "question": "Uma esfera metálica pousada no fundo de uma taça hemisférica côncava ilustra classicamente que tipo de equilíbrio?",
    "options": [
      "Equilíbrio indiferente, em que a esfera fica na nova posição.",
      "Equilíbrio instável, em que a esfera se afasta cada vez mais do fundo.",
      "Movimento acelerado contínuo, sem fim, na direção do desvio.",
      "Equilíbrio estável: ao ser desviada, a esfera regressa ao fundo."
    ],
    "correctIndex": 3,
    "explanation": "No fundo da taça, o centro de gravidade está na posição mais baixa possível. Ao ser deslocada para o lado, o peso gera uma força restauradora que a faz regressar espontaneamente à posição inicial (Equilíbrio Estável).",
    "distractorAnalysis": [
      "Está incorreta: No equilíbrio indiferente a esfera fica na nova posição; no fundo da taça ela regressa.",
      "Está incorreta: No equilíbrio instável a esfera afasta-se do fundo; na taça ela regressa.",
      "Está incorreta: A esfera não acelera continuamente; oscila e regressa ao fundo."
    ],
    "nursingApplication": "Por analogia, baixar o centro de gravidade e alargar a base de apoio aumenta a estabilidade do utente e reduz o risco de queda."
  },
  {
    "id": 1116,
    "topicId": 1,
    "question": "Um bastão ou caneta colocado na vertical apoiado na sua ponta fina e afiada sobre uma mesa representa que tipo de equilíbrio mecânico?",
    "options": [
      "Equilíbrio instável: um pequeno desvio gera um momento que faz o corpo tombar.",
      "Equilíbrio estável, que se mantém mesmo com grandes desvios.",
      "Equilíbrio indiferente, seja qual for a inclinação do bastão.",
      "Estado de translação retilínea e uniforme, com velocidade constante."
    ],
    "correctIndex": 0,
    "explanation": "Com uma base de sustentação quase pontual e CG elevado, qualquer microdesvio desloca a linha de gravidade para fora do apoio, criando momento desestabilizador: o corpo tomba (Equilíbrio Instável).",
    "distractorAnalysis": [
      "Está incorreta: Um equilíbrio estável recupera a posição inicial; o bastão não regressa sozinho.",
      "Está incorreta: No equilíbrio indiferente o bastão ficaria na nova posição, e não tomba.",
      "Está incorreta: Um bastão apoiado na ponta não se desloca em translação retilínea uniforme."
    ],
    "nursingApplication": "Ilustra o risco biomecânico de um doente com base de apoio mínima e linha de gravidade desequilibrada."
  },
  {
    "id": 1117,
    "topicId": 1,
    "question": "Uma bola de futebol parada num piso de pavilhão perfeitamente plano e horizontal que é deslocada 1 metro para o lado e fica parada na nova posição exemplifica:",
    "options": [
      "Equilíbrio instável, em que a bola se afasta da posição inicial.",
      "Equilíbrio indiferente, em que a bola fica parada na nova posição.",
      "Equilíbrio estável, em que a bola regressa ao ponto de partida.",
      "Violação da 1.ª Lei de Newton, por a bola parar sem força aplicada."
    ],
    "correctIndex": 1,
    "explanation": "Na superfície horizontal, a altura do centro de gravidade da esfera permanece rigorosamente constante ao rolar. Deslocada da posição original, ela permanece em equilíbrio na nova posição (Equilíbrio Indiferente).",
    "distractorAnalysis": [
      "Está incorreta: Numa superfície horizontal a bola não se afasta por efeito gravítico.",
      "Está incorreta: Uma bola numa superfície horizontal não regressa ao ponto de partida sem forças.",
      "Está incorreta: A bola não para sem força: é a resistência ao rolamento que a trava, por isso não há violação da 1.ª Lei."
    ],
    "nursingApplication": "Demonstra a ausência de momento restaurador ou desestabilizador em superfícies horizontais lisas."
  },
  {
    "id": 1118,
    "topicId": 1,
    "question": "Se a força resultante F<sub>R</sub> sobre um corpo for diferente de zero, o que acontece obrigatoriamente ao corpo segundo as Leis de Newton?",
    "options": [
      "Permanece em equilíbrio, mantendo a velocidade constante.",
      "Entra em equilíbrio estável, pois a força resultante é compensada.",
      "Não está em equilíbrio e sofre aceleração (a = F<sub>R</sub> / m).",
      "Mantém a sua velocidade, mas a sua massa aumenta por efeito da força."
    ],
    "correctIndex": 2,
    "explanation": "Por definição, estar em equilíbrio exige F<sub>R</sub> = 0 N. Se a força resultante não for nula, o corpo é acelerado pela 2.ª Lei de Newton (F<sub>R</sub> = m · a), rompendo o equilíbrio.",
    "distractorAnalysis": [
      "Está incorreta: Com F<sub>R</sub> diferente de zero há aceleração: a velocidade varia e não há equilíbrio.",
      "Está incorreta: Com F<sub>R</sub> diferente de zero, não há compensação; o equilíbrio não se estabelece.",
      "Está incorreta: A massa é uma propriedade constante e não aumenta por efeito de uma força."
    ],
    "nursingApplication": "Permite analisar as acelerações do corpo durante a marcha de doentes em reabilitação, que não estão em equilíbrio."
  },
  {
    "id": 1119,
    "topicId": 1,
    "question": "Para que um corpo rígido extenso esteja em equilíbrio mecânico completo (estático), que condições têm de ser simultaneamente satisfeitas na biomecânica?",
    "options": [
      "Que a força resultante seja nula, mesmo que o momento resultante não o seja.",
      "Que todas as forças aplicadas tenham a mesma intensidade.",
      "Que a força de atrito seja perpendicular à força da gravidade.",
      "A força resultante e o momento resultante têm de ser nulos."
    ],
    "correctIndex": 3,
    "explanation": "O equilíbrio mecânico total de um corpo rígido exige que não haja aceleração linear (F<sub>R</sub> = 0 N) nem aceleração angular de rotação (Momento resultante M<sub>R</sub> = 0 N·m).",
    "distractorAnalysis": [
      "Está incorreta: Com força resultante nula mas momento resultante não nulo (por exemplo, um binário), o corpo roda; também é necessário M = 0.",
      "Está incorreta: As forças podem ter intensidades diferentes; o que importa é que a força resultante e o momento resultante sejam nulos.",
      "Está incorreta: A direção do atrito não é condição geral de equilíbrio do corpo rígido."
    ],
    "nursingApplication": "A base para analisar a estabilidade postural e o cálculo de alavancas no corpo humano."
  },
  {
    "id": 1120,
    "topicId": 1,
    "question": "Um utente sentado numa poltrona hospitalar com os pés apoiados no chão e as costas encostadas encontra-se numa situação de equilíbrio mecânico estável porque:",
    "options": [
      "F<sub>R</sub> = 0 e M = 0; se ligeiramente desviado, o corpo regressa à posição inicial.",
      "A força de gravidade deixou de puxar o seu corpo em direção ao chão.",
      "A força normal exercida pelo assento tem intensidade muito superior ao peso.",
      "O utente perde a sua inércia quando se encosta aos braços da cadeira."
    ],
    "correctIndex": 0,
    "explanation": "A ampla base delimitada pelos pés e assento e o centro de gravidade rebaixado garantem que qualquer pequena perturbação mantenha a linha de gravidade dentro da base, restaurando a postura estável.",
    "distractorAnalysis": [
      "Está incorreta: A gravidade continua a atuar sobre o corpo; é equilibrada pelas reações do assento e do chão.",
      "Está incorreta: A força normal do assento é menor do que o peso; o peso é equilibrado pelas reações do chão, do assento e do encosto.",
      "Está incorreta: A inércia é uma propriedade da massa e não se perde ao encostar-se."
    ],
    "nursingApplication": "Justifica a recomendação ergonómica de sentar doentes em poltronas estáveis em vez de mantê-los na beira da cama."
  },
  {
    "id": 1121,
    "topicId": 1,
    "question": "Um corpo está em repouso sobre um plano inclinado, sujeito ao seu peso P, à força normal N e à força de atrito F<sub>a</sub>. Como se definem as componentes P<sub>n</sub> e P<sub>t</sub> do peso?",
    "options": [
      "P = Peso; P<sub>n</sub> e P<sub>t</sub> = componentes vertical e horizontal do peso; N = Força normal; F<sub>a</sub> = Força de atrito.",
      "P = Peso; P<sub>n</sub> e P<sub>t</sub> = componentes do peso perpendicular e paralela ao plano; N = Força normal; F<sub>a</sub> = Força de atrito.",
      "P = Potência mecânica; P<sub>n</sub> = Ponto neutro da articulação; P<sub>t</sub> = Ponto de tração; N = Núcleo; F<sub>a</sub> = Fulcro articular.",
      "P = Pressão; P<sub>n</sub> e P<sub>t</sub> = pressões normal e tangencial; N = newton (unidade); F<sub>a</sub> = Força aplicada."
    ],
    "correctIndex": 1,
    "explanation": "P<sub>n</sub> e P<sub>t</sub> são as componentes do peso perpendicular e paralela ao plano inclinado (não vertical e horizontal, que só coincidem com estas num plano horizontal). Legenda: P = peso do corpo | N = força normal | F<sub>a</sub> = força de atrito.",
    "distractorAnalysis": [
      "Está incorreta: Num plano inclinado, P<sub>n</sub> e P<sub>t</sub> são as componentes perpendicular e paralela ao plano, e não vertical e horizontal.",
      "Está incorreta: Potência e fulcro articular não constam no diagrama de forças do bloco no plano inclinado.",
      "Está incorreta: P é o peso (uma força), N é a força normal, e não a unidade newton, e F<sub>a</sub> é a força de atrito."
    ],
    "nursingApplication": "Garante a correta leitura e interpretação de diagramas de forças em rampas de acesso para macas e cadeiras de rodas."
  },
  {
    "id": 1122,
    "topicId": 1,
    "question": "Quais são as relações de igualdade que traduzem o equilíbrio do corpo no plano inclinado?",
    "options": [
      "P = N e P<sub>n</sub> = P<sub>t</sub>",
      "F<sub>a</sub> = N e P = 0",
      "P<sub>n</sub> = N e P<sub>t</sub> = F<sub>a</sub>",
      "P<sub>t</sub> = N e P<sub>n</sub> = F<sub>a</sub>"
    ],
    "correctIndex": 2,
    "explanation": "Em equilíbrio, P<sub>n</sub> = N e P<sub>t</sub> = F<sub>a</sub> (a componente perpendicular do peso iguala a força normal, e a componente paralela do peso iguala a força de atrito).",
    "distractorAnalysis": [
      "Está incorreta: Num plano inclinado P não é igual a N (N equilibra apenas P<sub>n</sub>); P<sub>n</sub> = P<sub>t</sub> só ocorre a 45°.",
      "Está incorreta: O atrito equilibra P<sub>t</sub>, não N; e P = 0 não é condição de equilíbrio.",
      "Está incorreta: As correspondências estão trocadas: a normal N atua na direção de P<sub>n</sub> e o atrito F<sub>a</sub> na direção de P<sub>t</sub>."
    ],
    "nursingApplication": "Essencial para calcular a força de travagem necessária para manter uma cadeira de rodas imobilizada numa rampa."
  },
  {
    "id": 1123,
    "topicId": 1,
    "question": "Qual é o papel biomecânico da força de atrito (F<sub>a</sub>) no equilíbrio de uma cadeira de rodas numa rampa hospitalar inclinada?",
    "options": [
      "Atuar paralelamente à rampa, no sentido descendente, somando-se a P<sub>t</sub>.",
      "Aumentar a componente do peso P<sub>n</sub> para colar os pneus ao piso.",
      "Reduzir a massa inercial do passageiro, tornando-o mais leve na rampa.",
      "Atuar paralelamente à rampa, no sentido ascendente, equilibrando P<sub>t</sub>."
    ],
    "correctIndex": 3,
    "explanation": "A gravidade tende a puxar a cadeira rampa abaixo com a componente P<sub>t</sub> do peso. A força de atrito (pneus/travões) atua em sentido contrário (rampa acima) equilibrando P<sub>t</sub> (F<sub>a</sub> = P<sub>t</sub>) para impedir a descida descontrolada.",
    "distractorAnalysis": [
      "Está incorreta: O atrito opõe-se à tendência de deslizamento; como P<sub>t</sub> aponta rampa abaixo, o atrito aponta rampa acima.",
      "Está incorreta: A componente P<sub>n</sub> não depende do atrito; a força que se opõe ao deslizamento é a de atrito.",
      "Está incorreta: A massa do passageiro não se altera numa rampa."
    ],
    "nursingApplication": "Sublinha a necessidade imperativa de verificar o funcionamento dos travões de estacionamento antes de largar uma cadeira na rampa."
  },
  {
    "id": 1124,
    "topicId": 1,
    "question": "Qual é a orientação geométrica da componente P<sub>n</sub> do peso num corpo apoiado num plano inclinado?",
    "options": [
      "Perpendicular ao plano inclinado, apontando contra a superfície.",
      "Paralela à rampa inclinada, apontando para a base da rampa.",
      "Vertical descendente, coincidindo com a direção do peso total P.",
      "Vertical ascendente, afastando o corpo do chão da rampa."
    ],
    "correctIndex": 0,
    "explanation": "A componente normal P<sub>n</sub> atua perpendicularmente à superfície inclinada pressionando o corpo contra a rampa, sendo exatamente contrabalançada pela Força Normal N exercida pela rampa.",
    "distractorAnalysis": [
      "Está incorreta: A componente paralela é P<sub>t</sub>, e aponta para a base da rampa.",
      "Está incorreta: A direção vertical é a do peso total P; a componente P<sub>n</sub> é perpendicular ao plano e só coincide com P num plano horizontal.",
      "Está incorreta: O peso aponta para baixo, e não para cima."
    ],
    "nursingApplication": "Permite entender porque a pressão sobre a superfície de apoio diminui à medida que o plano fica mais empinado."
  },
  {
    "id": 1125,
    "topicId": 1,
    "question": "O que acontece à componente tangencial do peso P<sub>t</sub> se a inclinação de uma rampa hospitalar for aumentada de 5 graus para 20 graus?",
    "options": [
      "Diminui para metade, o que facilita a retenção da maca no plano.",
      "Aumenta, exigindo maior atrito (F<sub>a</sub>) para evitar que o corpo deslize.",
      "Permanece inalterada, porque a massa do doente não muda.",
      "Anula-se, transformando-se em força normal N, sem alterar o deslizamento."
    ],
    "correctIndex": 1,
    "explanation": "À medida que o ângulo de inclinação sobe, a componente tangencial ao longo do plano P<sub>t</sub> aumenta substancialmente (P<sub>t</sub> = P · sen θ: de sen 5° ≈ 0,09 para sen 20° ≈ 0,34, quase 4 vezes mais). Para manter o equilíbrio (P<sub>t</sub> = F<sub>a</sub>), a força de atrito ou a força exercida pelo profissional tem de ser muito maior.",
    "distractorAnalysis": [
      "Está incorreta: Ao aumentar a inclinação, P<sub>t</sub> aumenta; não diminui para metade.",
      "Está incorreta: P<sub>t</sub> depende da inclinação e varia com ela, mesmo com a massa constante.",
      "Está incorreta: P<sub>t</sub> não se transforma em força normal; é a componente tangencial do peso."
    ],
    "nursingApplication": "Explica porque as rampas de acesso devem ter a inclinação mais suave possível, para reduzir a força de atrito ou de travagem necessária para manter a cadeira ou a maca parada."
  },
  {
    "id": 1126,
    "topicId": 1,
    "question": "Se uma maca for deixada numa rampa inclinada com os travões soltos num piso molhado sem atrito (F<sub>a</sub> = 0 N):",
    "options": [
      "A maca fica parada, em equilíbrio indiferente, sem tendência para descer.",
      "A maca sobe a rampa, impulsionada pela componente normal P<sub>n</sub>.",
      "A maca fica com F<sub>R</sub> = P<sub>t</sub> e desce a rampa com movimento acelerado.",
      "A maca mantém o peso, mas passa a ter força normal nula na rampa."
    ],
    "correctIndex": 2,
    "explanation": "Sem atrito (F<sub>a</sub> = 0), a componente P<sub>t</sub> ao longo da rampa não tem oposição. Pela 2.ª Lei de Newton (F<sub>R</sub> = m · a), a força resultante F<sub>R</sub> = P<sub>t</sub> acelera a maca rampa abaixo.",
    "distractorAnalysis": [
      "Está incorreta: Sem atrito, a componente P<sub>t</sub> não é equilibrada, e a maca não fica parada.",
      "Está incorreta: A componente normal P<sub>n</sub> é perpendicular à rampa e não a faz subir.",
      "Está incorreta: A força normal existe enquanto a maca estiver apoiada na rampa; não se anula."
    ],
    "nursingApplication": "Regra crítica de segurança de enfermagem: nunca deixar macas ou cadeiras paradas em rampas sem ativar os travões."
  },
  {
    "id": 1127,
    "topicId": 1,
    "question": "Num plano perfeitamente horizontal (inclinação de zero graus), qual é a relação entre o peso P e as componentes P<sub>n</sub> e P<sub>t</sub>?",
    "options": [
      "P<sub>t</sub> é igual a P e P<sub>n</sub> é nula, pois não há inclinação a considerar.",
      "P<sub>n</sub> e P<sub>t</sub> têm o mesmo valor, igual a metade do peso, por simetria do plano.",
      "Tanto P<sub>n</sub> como P<sub>t</sub> anulam-se, ficando o peso nulo, sem força que o equilibre.",
      "P<sub>n</sub> é igual ao peso P (P<sub>n</sub> = P = N), e a componente tangencial P<sub>t</sub> é nula."
    ],
    "correctIndex": 3,
    "explanation": "Na horizontal, a gravidade atua estritamente perpendicular ao plano: todo o peso coincide com a componente normal (P<sub>n</sub> = P), sendo suportado pela força normal N, enquanto a tendência de deslizamento é nula (P<sub>t</sub> = 0).",
    "distractorAnalysis": [
      "Está incorreta: Na horizontal, a componente tangencial é nula, e não igual ao peso.",
      "Está incorreta: Na horizontal, toda a componente do peso fica perpendicular à superfície.",
      "Está incorreta: O peso não fica nulo; é equilibrado pela força normal."
    ],
    "nursingApplication": "Explica por que num corredor horizontal não é necessária força adicional para travar a componente de descida da gravidade."
  },
  {
    "id": 1128,
    "topicId": 1,
    "question": "Ao descer uma rampa inclinada com um doente na cadeira de rodas com velocidade constante, que esforço realiza o enfermeiro?",
    "options": [
      "Aplica uma força rampa acima, para equilibrar P<sub>t</sub> e descer sem acelerar.",
      "Empurra a cadeira com força máxima rampa abaixo, para acelerar a chegada ao serviço.",
      "Não aplica força, pois velocidade constante significa que não atuam forças na cadeira.",
      "Caminha de costas, sem olhar para o doente, confiando no atrito do piso."
    ],
    "correctIndex": 0,
    "explanation": "Para que a descida ocorra com velocidade constante (MRU com F<sub>R</sub> = 0 N), a força de retenção aplicada pelo profissional somada ao atrito deve equilibrar a componente P<sub>t</sub> do peso que puxa a cadeira rampa abaixo.",
    "distractorAnalysis": [
      "Está incorreta: Empurrar com força máxima rampa abaixo acelera a cadeira, contrariando a velocidade constante.",
      "Está incorreta: Velocidade constante significa força resultante nula, e não ausência de forças; P<sub>t</sub> continua a atuar e tem de ser equilibrada.",
      "Está incorreta: Descer de marcha-atrás pode ser adequado, mas exige vigiar o percurso e aplicar força de retenção rampa acima; o atrito, por si só, não equilibra P<sub>t</sub>."
    ],
    "nursingApplication": "Técnica ergonómica recomendada de condução de cadeiras de rodas em rampas íngremes: descer de marcha-atrás com apoio do corpo para retenção."
  },
  {
    "id": 1129,
    "topicId": 1,
    "question": "Qual das forças no diagrama do plano inclinado é perpendicular à força normal N?",
    "options": [
      "A componente normal do peso P<sub>n</sub>, que pressiona o corpo contra a rampa.",
      "A força de atrito F<sub>a</sub> (e a componente P<sub>t</sub>), paralela à superfície.",
      "O peso total P, que mantém a mesma direção em todas as inclinações.",
      "Não há força perpendicular, pois todas as forças são paralelas entre si."
    ],
    "correctIndex": 1,
    "explanation": "A Força Normal N é perpendicular à superfície de apoio; a força de atrito F<sub>a</sub> e a componente P<sub>t</sub> atuam paralelamente à superfície de apoio. Logo, a direção de N e a de F<sub>a</sub> formam um ângulo de 90 graus (são perpendiculares).",
    "distractorAnalysis": [
      "Está incorreta: P<sub>n</sub> é paralela à normal N, pois ambas são perpendiculares à superfície.",
      "Está incorreta: O peso total tem direção vertical, e não é perpendicular a N numa rampa inclinada.",
      "Está incorreta: As forças do diagrama não são todas paralelas entre si."
    ],
    "nursingApplication": "Permite aos estudantes orientar mentalmente os eixos ortogonais ao analisar esforços mecânicos."
  },
  {
    "id": 1130,
    "topicId": 1,
    "question": "Num doente com risco de escorregar para os pés da cama ao elevar a cabeceira a 45° (plano inclinado), o deslizamento tecidual é provocado por qual componente de força?",
    "options": [
      "Pela força de atrito entre a pele e o lençol, que arrasta o corpo para os pés.",
      "Pela força eletromagnética gerada pelo motor elétrico do leito.",
      "Pela componente tangencial do peso (P<sub>t</sub>), paralela ao colchão e dirigida para os pés.",
      "Pela componente normal P<sub>n</sub>, perpendicular ao colchão, que empurra o corpo para baixo."
    ],
    "correctIndex": 2,
    "explanation": "A elevação da cabeceira cria um plano inclinado onde a gravidade se projeta na componente P<sub>t</sub> ao longo da cama. P<sub>t</sub> tende a deslocar o esqueleto para os pés; o atrito pele–lençol retém a pele, e a diferença deforma os tecidos profundos (cisalhamento sacrococcígeo). Se P<sub>t</sub> exceder o atrito estático máximo, o doente escorrega.",
    "distractorAnalysis": [
      "Está incorreta: O atrito pele–lençol opõe-se ao deslizamento e retém a pele; não é a força que desloca o corpo para os pés.",
      "Está incorreta: O motor do leito não é a origem do deslizamento; a origem é a componente do peso.",
      "Está incorreta: A componente normal P<sub>n</sub> é perpendicular ao colchão e não provoca deslizamento."
    ],
    "nursingApplication": "Identifica o mecanismo biofísico na génese de forças de cisalhamento e lesões sacrococcígeas em camas articuladas."
  },
  {
    "id": 1131,
    "topicId": 1,
    "question": "O que mede o Momento de uma Força (torque) na mecânica dos movimentos rotacionais?",
    "options": [
      "Mede a intensidade da força aplicada, seja qual for o ponto de aplicação.",
      "Mede a aceleração linear sofrida por um corpo em queda livre.",
      "Mede a quantidade de movimento (momento linear) de um corpo.",
      "Mede o efeito rotativo de uma força em torno de um ponto."
    ],
    "correctIndex": 3,
    "explanation": "Define-se formalmente: 'Momento da força (Torque): Mede o efeito rotativo de uma força em torno de um ponto'.",
    "distractorAnalysis": [
      "Está incorreta: O momento depende também do braço; a mesma força pode produzir momentos diferentes consoante a distância ao eixo.",
      "Está incorreta: Aceleração linear decorre da força resultante translativa (2.ª Lei de Newton), não do momento rotativo.",
      "Está incorreta: A quantidade de movimento (m · v) é outra grandeza; o momento de uma força mede o seu efeito rotativo (F · b)."
    ],
    "nursingApplication": "Conceito fulcral para compreender como os músculos produzem movimentos de rotação nas articulações esqueléticas."
  },
  {
    "id": 1132,
    "topicId": 1,
    "question": "Qual das frases resume corretamente a ação do Momento da Força?",
    "options": [
      "Por outras palavras: O momento da força faz o corpo rodar.",
      "Por outras palavras: O momento da força faz o corpo deslocar-se em linha reta.",
      "Por outras palavras: A força de rotação gera calor, sem produzir movimento.",
      "Por outras palavras: O atrito dispensa o fulcro na alavanca."
    ],
    "correctIndex": 0,
    "explanation": "Destaca-se com clareza pedagógica: 'Por outras palavras: O momento da força faz o corpo rodar.'.",
    "distractorAnalysis": [
      "Está incorreta: A translação em linha reta resulta da força resultante; o momento da força produz rotação.",
      "Está incorreta: A força de rotação produz movimento de rotação, e não apenas calor.",
      "Está incorreta: O atrito não dispensa o fulcro; a alavanca continua a girar em torno do ponto de apoio."
    ],
    "nursingApplication": "Permite associar imediatamente qualquer movimento de flexão, extensão ou rotação articular ao momento de força."
  },
  {
    "id": 1133,
    "topicId": 1,
    "question": "Qual é a fórmula matemática do Momento da Força?",
    "options": [
      "Momento da força = F / b",
      "Momento da força = F · b",
      "Momento da força = m · a",
      "Momento da força = b / F"
    ],
    "correctIndex": 1,
    "explanation": "O momento de uma força é dado por F · b.",
    "distractorAnalysis": [
      "Está incorreta: Dividir força pelo braço daria N/m (unidade de constante elástica k), não momento de força.",
      "Está incorreta: m · a é a expressão da força resultante (2.ª Lei de Newton), e não do momento, que inclui o braço b.",
      "Está incorreta: Dividir braço por força daria m/N, que não corresponde a torque."
    ],
    "nursingApplication": "Fórmula-chave utilizada para o cálculo do equilíbrio de alavancas e esforços musculares do corpo humano."
  },
  {
    "id": 1134,
    "topicId": 1,
    "question": "Na fórmula Momento da força = F · b, qual é a definição exata da variável 'b' (Braço da força)?",
    "options": [
      "Distância do eixo de rotação ao ponto de aplicação da força, ao longo da barra.",
      "Massa do braço anatómico do utente pesada numa balança digital.",
      "Distância na perpendicular entre o eixo de rotação e a linha de ação da força (m).",
      "Velocidade de rotação da articulação medida em metros por segundo."
    ],
    "correctIndex": 2,
    "explanation": "Define-se textualmente: 'b = Braço = Distância na perpendicular entre o eixo de rotação e a linha de ação da força (m)'.",
    "distractorAnalysis": [
      "Está incorreta: Essa distância só coincide com o braço quando a força é perpendicular à barra; o braço é a distância perpendicular à linha de ação.",
      "Está incorreta: O termo braço na mecânica é uma distância geométrica perpendicular, não o membro anatómico pesado.",
      "Está incorreta: Distância perpendicular mede-se em metros, enquanto velocidade mede-se em m/s."
    ],
    "nursingApplication": "Compreender que o braço é a distância perpendicular é crucial para perceber por que carregar peso longe do corpo sobrecarrega a coluna."
  },
  {
    "id": 1135,
    "topicId": 1,
    "question": "Qual é a unidade padrão do Momento de uma Força (torque) no Sistema Internacional de Unidades (SI)?",
    "options": [
      "Pascal (Pa).",
      "Newton por metro (N/m).",
      "Newton por metro quadrado (N/m²).",
      "Newton-metro (N·m)."
    ],
    "correctIndex": 3,
    "explanation": "Como o momento resulta da multiplicação de uma Força em newtons (N) por uma distância de braço em metros (m), a sua unidade SI é o newton-metro (N·m).",
    "distractorAnalysis": [
      "Está incorreta: O pascal é a unidade de pressão (N/m²), não de momento rotativo.",
      "Está incorreta: N/m é a unidade da constante elástica (força por unidade de comprimento); o momento é um produto, N·m.",
      "Está incorreta: N/m² equivale ao pascal (pressão), não a N·m (multiplicação)."
    ],
    "nursingApplication": "Garante a correta identificação dimensional das respostas em exercícios de biomecânica articular."
  },
  {
    "id": 1136,
    "topicId": 1,
    "question": "Se uma força de 30 N for aplicada perpendicularmente a uma alavanca a uma distância de 0,5 m do eixo de rotação, qual é o Momento da Força produzido?",
    "options": [
      "15 N·m",
      "60 N·m",
      "0,017 N·m",
      "30,5 N·m"
    ],
    "correctIndex": 0,
    "explanation": "Aplicando diretamente M = F · b: M = 30 N × 0,5 m = 15 N·m.",
    "distractorAnalysis": [
      "Está incorreta: 60 N·m resultaria de dividir 30 por 0,5 (F / b), o que viola a fórmula M = F · b.",
      "Está incorreta: 0,017 resultaria da divisão 0,5 / 30, que dá m/N e não N·m.",
      "Está incorreta: 30,5 resultaria de somar a força com a distância, operação dimensionalmente inválida."
    ],
    "nursingApplication": "Cálculo elementar para quantificar momentos em manivelas de macas e alavancas hospitalares."
  },
  {
    "id": 1137,
    "topicId": 1,
    "question": "Para abrir uma porta pesada corta-fogo com o menor esforço (menor força F possível), onde deve ser empurrada a porta?",
    "options": [
      "O mais próximo possível das dobradiças, junto ao eixo de rotação.",
      "O mais longe possível das dobradiças, na extremidade oposta (maior b).",
      "Diretamente sobre os parafusos da dobradiça, no ponto de fixação.",
      "No chão, a meio caminho da soleira, puxando verticalmente para cima."
    ],
    "correctIndex": 1,
    "explanation": "Como M = F · b, para gerar o mesmo momento de rotação necessário para mover a porta com menor força (F), devemos maximizar o braço (b). Empurrar no bordo exterior maximiza b e minimiza F.",
    "distractorAnalysis": [
      "Está incorreta: Junto ao eixo o braço é mínimo, e por isso é necessária uma força maior.",
      "Está incorreta: Sobre os parafusos, o braço é quase nulo: o momento é nulo ou muito pequeno e a porta não roda.",
      "Está incorreta: Uma força vertical é paralela ao eixo das dobradiças e não produz momento em torno delas."
    ],
    "nursingApplication": "Aplicação prática imediata de ergonomia ao abrir portas de emergência e manipular equipamentos articulados."
  },
  {
    "id": 1138,
    "topicId": 1,
    "question": "Se a linha de ação de uma força passar pelo ponto ou eixo de rotação da alavanca, qual é o valor do momento da força produzido?",
    "options": [
      "É igual à força multiplicada pelo comprimento total da alavanca.",
      "É igual a 9,8 N·m, independentemente da intensidade da força.",
      "Produz uma rotação muito rápida, por a força estar concentrada.",
      "É zero (M = 0 N·m), porque o braço é nulo (b = 0 m)."
    ],
    "correctIndex": 3,
    "explanation": "Se a linha de ação da força interseta o eixo, a distância perpendicular b entre a linha e o eixo é zero (b = 0). Pela fórmula M = F · b = F × 0 = 0 N·m. A força não gera qualquer efeito rotativo.",
    "distractorAnalysis": [
      "Está incorreta: O braço é a distância perpendicular do eixo à linha de ação, e não o comprimento da alavanca; se a linha passa pelo eixo, b = 0 e M = 0.",
      "Está incorreta: O momento depende da força e do braço; não é fixo em 9,8 N·m.",
      "Está incorreta: Um momento nulo não produz rotação, por mais concentrada que a força esteja."
    ],
    "nursingApplication": "Explica por que a componente da força muscular dirigida ao longo do osso, em direção à articulação, a comprime e estabiliza mas não produz rotação."
  },
  {
    "id": 1139,
    "topicId": 1,
    "question": "Ao levantar uma carga de 15 kg com os braços esticados para a frente longe do tronco, por que razão as vértebras lombares sofrem uma sobrecarga muito elevada?",
    "options": [
      "Porque a massa do objeto aumenta quando é afastada do peito.",
      "Porque o atrito do pavimento desaparece, desestabilizando o esqueleto.",
      "Porque a gravidade diminui quando a carga é afastada do tronco.",
      "Porque o braço da força resistente aumenta, gerando um momento flexor elevado."
    ],
    "correctIndex": 3,
    "explanation": "A força resistente (peso da carga) é constante. Contudo, ao afastar a carga do tronco, a distância horizontal b até ao fulcro lombar aumenta grandemente, aumentando o momento flexor M = F · b, que os músculos extensores da coluna têm de equilibrar com forças muito elevadas (o seu braço é de poucos centímetros).",
    "distractorAnalysis": [
      "Está incorreta: A massa é constante e não aumenta quando a carga se afasta do tronco.",
      "Está incorreta: O atrito do pavimento não determina o momento das vértebras lombares.",
      "Está incorreta: A gravidade não diminui com a distância da carga ao tronco."
    ],
    "nursingApplication": "Princípio ergonómico vital para a saúde da coluna do enfermeiro: manter a carga junto ao corpo, idealmente à altura da cintura, porque a distância horizontal aumenta o momento sobre a coluna."
  },
  {
    "id": 1140,
    "topicId": 1,
    "question": "Duas forças de 10 N atuam em duas alavancas distintas: a Força 1 tem um braço b1 = 2 m e a Força 2 tem um braço b2 = 1 m. Quais são os respetivos momentos?",
    "options": [
      "Momento 1 = 20 N·m e Momento 2 = 10 N·m.",
      "Momento 1 = 5 N·m e Momento 2 = 10 N·m.",
      "Ambas produzem o mesmo momento de 10 N·m.",
      "Momento 1 = 200 N·m e Momento 2 = 100 N·m."
    ],
    "correctIndex": 0,
    "explanation": "Calculando M = F · b para cada uma: M1 = 10 N × 2 m = 20 N·m; M2 = 10 N × 1 m = 10 N·m. A força com o dobro do braço produz o dobro do momento rotativo.",
    "distractorAnalysis": [
      "Está incorreta: Com F = 10 N e b = 2 m, o momento é 10 × 2 = 20 N·m, e não 5 N·m.",
      "Está incorreta: Os braços são diferentes (2 m e 1 m), pelo que os momentos também são diferentes.",
      "Está incorreta: Com F = 10 N, os momentos são 20 e 10 N·m; 200 e 100 N·m resultariam de um erro de um fator de 10 no cálculo."
    ],
    "nursingApplication": "Demonstração quantitativa clara do efeito multiplicador da distância de alavanca."
  },
  {
    "id": 1141,
    "topicId": 1,
    "question": "Qual é a definição de Alavanca atribuída a Arquimedes (século III a.C.)?",
    "options": [
      "Ponto fixo em torno do qual uma barra rígida pode girar.",
      "Barra rígida que pode girar em torno de um ponto de apoio fixo.",
      "Barra rígida que se desloca em translação, sem ponto de apoio fixo.",
      "Estrutura elástica deformável que dissipa energia por histerese."
    ],
    "correctIndex": 1,
    "explanation": "Define-se formalmente: 'Arquimedes, século III a.C.: Barra rígida que pode girar em torno de um ponto de apoio fixo'.",
    "distractorAnalysis": [
      "Está incorreta: Isso define o ponto de apoio (fulcro), que é apenas um dos componentes da alavanca.",
      "Está incorreta: A alavanca roda em torno de um ponto de apoio fixo; não se desloca em translação.",
      "Está incorreta: Corpos com histerese são viscoelásticos (Tópico 2), enquanto a alavanca de Arquimedes é modelada como barra rígida."
    ],
    "nursingApplication": "Conceito estruturante para a biomecânica esquelética, onde os ossos funcionam como barras rígidas."
  },
  {
    "id": 1142,
    "topicId": 1,
    "question": "Quais são os três componentes fundamentais de qualquer sistema de alavanca?",
    "options": [
      "Massa inercial, gravidade terrestre e aceleração centrípeta.",
      "Dinamómetro, plano inclinado e atrito cinético.",
      "Ponto de apoio (fulcro), força potente e força resistente.",
      "Ponto de apoio, braço da força e momento resultante."
    ],
    "correctIndex": 2,
    "explanation": "Enumera-se textualmente os três componentes: '1. Ponto de apoio (fulcro) (...) 2. Força potente (...) 3. Força resistente'.",
    "distractorAnalysis": [
      "Está incorreta: Estes são conceitos gerais da mecânica e gravitação, não a tríade constitutiva das alavancas.",
      "Está incorreta: Instrumentos e outras máquinas simples não são os elementos de definição de uma alavanca.",
      "Está incorreta: O braço e o momento são grandezas usadas para analisar a alavanca, e não os seus elementos constitutivos (fulcro, força potente e força resistente)."
    ],
    "nursingApplication": "Permite decompor e analisar qualquer articulação do corpo humano nos seus três elementos mecânicos."
  },
  {
    "id": 1143,
    "topicId": 1,
    "question": "Como se define a 'Força Potente' (F<sub>Potente</sub>) no funcionamento mecânico de uma alavanca?",
    "options": [
      "Força exercida pela atração da gravidade sobre a barra.",
      "Força contrária que dificulta o movimento da carga.",
      "Ponto fixo em torno do qual a alavanca gira livremente.",
      "Força aplicada para mover a carga."
    ],
    "correctIndex": 3,
    "explanation": "Define-se formalmente: '2. Força potente: Força aplicada para mover a carga'.",
    "distractorAnalysis": [
      "Está incorreta: A gravidade atua sobre todas as massas, não constituindo a definição funcional de força potente motora.",
      "Está incorreta: A força contrária que dificulta o movimento é a definição de Força Resistente.",
      "Está incorreta: O ponto fixo de rotação é a definição de Ponto de apoio ou fulcro."
    ],
    "nursingApplication": "No corpo humano, a força potente é fornecida pela contração muscular transmitida através do tendão."
  },
  {
    "id": 1144,
    "topicId": 1,
    "question": "Como se define a 'Força Resistente' (F<sub>Resis.</sub>) no funcionamento mecânico de uma alavanca?",
    "options": [
      "Força contrária que dificulta o movimento da carga.",
      "Força motora aplicada pelo músculo para acelerar o membro.",
      "Reação exercida pelo ponto de apoio sobre a barra.",
      "Comprimento total da barra medido a partir da extremidade potente."
    ],
    "correctIndex": 0,
    "explanation": "Define-se formalmente: '3. Força resistente: Força contrária que dificulta o movimento da carga'.",
    "distractorAnalysis": [
      "Está incorreta: A força motora que move a carga é a Força Potente, não a resistente.",
      "Está incorreta: A força exercida pelo apoio é a reação no fulcro, e não a força resistente que se opõe ao movimento da carga.",
      "Está incorreta: Comprimento é uma dimensão métrica geométrica, não uma força física contrária."
    ],
    "nursingApplication": "Representa o peso de membros corporais, objetos transportados ou resistências externas a vencer."
  },
  {
    "id": 1145,
    "topicId": 1,
    "question": "Como se define o 'Ponto de Apoio' (fulcro) no funcionamento mecânico de uma alavanca?",
    "options": [
      "Ponto da barra onde é aplicada a força potente.",
      "Ponto fixo em torno do qual a alavanca gira.",
      "A distância perpendicular entre duas forças divergentes.",
      "Ponto médio da barra, a igual distância das duas forças."
    ],
    "correctIndex": 1,
    "explanation": "Define-se taxativamente: '1. Ponto de apoio (fulcro): Ponto fixo em torno do qual a alavanca gira'.",
    "distractorAnalysis": [
      "Está incorreta: O ponto de aplicação da força potente não é o fulcro; o fulcro é o ponto fixo em torno do qual a barra roda.",
      "Está incorreta: A distância perpendicular entre forças é um braço de momento, e não o fulcro.",
      "Está incorreta: O fulcro não tem de estar a meio da barra; a sua posição relativa às forças define o tipo de alavanca."
    ],
    "nursingApplication": "No esqueleto humano, as articulações sinoviais funcionam como os fulcros do aparelho locomotor."
  },
  {
    "id": 1146,
    "topicId": 1,
    "question": "Qual é a formulação da Lei das Alavancas em situação de equilíbrio?",
    "options": [
      "F<sub>Potente</sub> + b<sub>Potente</sub> = F<sub>Resis.</sub> + b<sub>Resis.</sub>",
      "F<sub>Potente</sub> / b<sub>Potente</sub> = F<sub>Resis.</sub> / b<sub>Resis.</sub>",
      "F<sub>Potente</sub> · b<sub>Potente</sub> = F<sub>Resis.</sub> · b<sub>Resis.</sub>",
      "F<sub>Potente</sub> · F<sub>Resis.</sub> = b<sub>Potente</sub> · b<sub>Resis.</sub>"
    ],
    "correctIndex": 2,
    "explanation": "Apresenta-se a clássica Lei das Alavancas: 'Em equilíbrio: F<sub>Potente</sub> · b<sub>Potente</sub> = F<sub>Resis.</sub> · b<sub>Resis.</sub>' (o produto da força potente pelo seu braço é igual ao produto da força resistente pelo seu braço).",
    "distractorAnalysis": [
      "Está incorreta: Não se somam forças com distâncias por terem grandezas físicas e unidades diferentes (N vs m).",
      "Está incorreta: A relação física é um produto de fatores (momentos), não uma razão de quocientes.",
      "Está incorreta: Multiplicar forças entre si e braços entre si não traduz o cancelamento de momentos em torno do fulcro."
    ],
    "nursingApplication": "Equação fundamental para resolver problemas de equilíbrio de alavancas anatómicas e de equipamentos de elevação."
  },
  {
    "id": 1147,
    "topicId": 1,
    "question": "O que traduz fisicamente a igualdade F<sub>Potente</sub> · b<sub>Potente</sub> = F<sub>Resis.</sub> · b<sub>Resis.</sub> em termos da teoria dos momentos?",
    "options": [
      "Que a força potente é igual à força resistente (F<sub>Potente</sub> = F<sub>Resis.</sub>).",
      "Que a massa do fulcro é igual à soma das massas potentes e resistentes.",
      "Que a alavanca deixa de sofrer a força da gravidade durante o equilíbrio.",
      "Que o momento potente iguala o momento resistente em torno do fulcro."
    ],
    "correctIndex": 3,
    "explanation": "Como M = F · b, a Lei das Alavancas afirma simplesmente que o momento de rotação no sentido potente anula o momento de rotação no sentido resistente: M<sub>Potente</sub> = M<sub>Resis.</sub>, resultando em equilíbrio de rotação (aceleração angular nula).",
    "distractorAnalysis": [
      "Está incorreta: As forças só são iguais se os braços forem iguais; o que se iguala são os momentos (F · b).",
      "Está incorreta: O fulcro não tem massa relevante para o equilíbrio de momentos.",
      "Está incorreta: A gravidade continua a atuar sobre a alavanca; o equilíbrio é de momentos."
    ],
    "nursingApplication": "Garante a compreensão conceitual unificada entre a teoria de momentos e a mecânica das alavancas."
  },
  {
    "id": 1148,
    "topicId": 1,
    "question": "Se o braço da força potente (b<sub>Potente</sub>) for 4 vezes maior do que o braço da força resistente (b<sub>Resis.</sub>), qual a força potente F<sub>Potente</sub> necessária para equilibrar a carga?",
    "options": [
      "Uma força 4 vezes menor do que a resistente (F<sub>Potente</sub> = F<sub>Resis.</sub> / 4).",
      "Uma força potente 4 vezes maior do que a resistente, por a alavanca amplificar o esforço.",
      "Uma força potente 16 vezes maior, devido à lei do inverso do quadrado.",
      "Uma força igual à resistente, pois a distância não altera o esforço necessário."
    ],
    "correctIndex": 0,
    "explanation": "Pela Lei das Alavancas: F<sub>Potente</sub> · (4 b<sub>Resis.</sub>) = F<sub>Resis.</sub> · b<sub>Resis.</sub> => F<sub>Potente</sub> = F<sub>Resis.</sub> / 4. Ao multiplicar o braço potente por 4, a força necessária para suster a carga reduz-se a um quarto.",
    "distractorAnalysis": [
      "Está incorreta: Um braço potente maior reduz a força necessária; não a aumenta.",
      "Está incorreta: A lei do inverso do quadrado não se aplica às alavancas; a relação é F · b.",
      "Está incorreta: A distância altera o esforço necessário, pois F<sub>Potente</sub> · b<sub>Potente</sub> = F<sub>Resis.</sub> · b<sub>Resis.</sub>."
    ],
    "nursingApplication": "Explica por que cabos compridos e barras de elevação longas facilitam a manipulação de cargas pesadas."
  },
  {
    "id": 1149,
    "topicId": 1,
    "question": "Na modelação biomecânica de um membro, a alavanca tem barra rígida, fulcro, força potente e força resistente. Qual é a correspondência correta com as estruturas do aparelho locomotor?",
    "options": [
      "Os ossos são os fulcros, e os tendões são as cargas resistentes da alavanca.",
      "Os ossos são as barras, as articulações os fulcros e os músculos a força potente.",
      "Os ossos são as barras, os músculos os fulcros e as articulações a força potente.",
      "A pele é a barra rígida que roda em torno da articulação do cotovelo."
    ],
    "correctIndex": 1,
    "explanation": "Na modelação biomecânica, o osso é tratado como barra rígida: a articulação sinovial atua como fulcro de rotação e o músculo gera a força potente via tendão.",
    "distractorAnalysis": [
      "Está incorreta: Os ossos funcionam como barras rígidas, e os tendões transmitem a força muscular.",
      "Está incorreta: As articulações são os fulcros e os músculos geram a força potente, e não o inverso.",
      "Está incorreta: A pele não é uma barra rígida; a barra do membro é o osso."
    ],
    "nursingApplication": "Base conceptual indispensável para toda a biomecânica articular e análise da marcha."
  },
  {
    "id": 1150,
    "topicId": 1,
    "question": "Qual é a origem da Força Potente (F<sub>Potente</sub>) no sistema musculoesquelético humano durante o levantamento de uma carga?",
    "options": [
      "A atração gravitacional do planeta Terra sobre a articulação do utente.",
      "O peso da carga a levantar, transmitido aos ossos através das mãos.",
      "A contração ativa das fibras musculares, transmitida pelo tendão ao osso.",
      "A tensão passiva dos ligamentos que estabilizam a articulação."
    ],
    "correctIndex": 2,
    "explanation": "No corpo humano, a força potente é a força motora desenvolvida ativamente pelas pontes cruzadas das fibras musculares e transmitida pelo tendão para puxar o osso em torno da articulação.",
    "distractorAnalysis": [
      "Está incorreta: A gravidade atua sobre o corpo; a força potente é gerada pelo músculo.",
      "Está incorreta: O peso da carga é a força resistente, que a força potente tem de vencer.",
      "Está incorreta: Os ligamentos estabilizam passivamente a articulação; a força potente resulta da contração muscular ativa."
    ],
    "nursingApplication": "Compreensão de como a fadiga e lesões musculares limitam a capacidade de produção de força potente em transferências."
  },
  {
    "id": 1151,
    "topicId": 1,
    "question": "Qual é a característica biomecânica e estrutural que define uma alavanca 'Interfixa' (1.ª classe) no corpo humano?",
    "options": [
      "A força potente encontra-se situada entre o fulcro e a força resistente.",
      "A força resistente encontra-se situada entre o fulcro e a força potente.",
      "Não possui fulcro nem ponto de apoio fixo.",
      "O fulcro encontra-se entre a força potente e a força resistente."
    ],
    "correctIndex": 3,
    "explanation": "Na alavanca interfixa, o fulcro encontra-se entre a força potente e a força resistente (F<sub>Potente</sub> — fulcro — F<sub>Resis.</sub>).",
    "distractorAnalysis": [
      "Está incorreta: A força potente no meio define a alavanca Interpotente.",
      "Está incorreta: A força resistente no meio define a alavanca Inter-resistente.",
      "Está incorreta: Todas as alavancas de Arquimedes possuem obrigatoriamente um fulcro de rotação."
    ],
    "nursingApplication": "Exemplos: o baloiço, a tesoura hospitalar e a articulação atlanto-occipital da cabeça."
  },
  {
    "id": 1152,
    "topicId": 1,
    "question": "Qual é a característica biomecânica e estrutural que define uma alavanca 'Inter-resistente' (2.ª classe) no corpo humano?",
    "options": [
      "A força resistente encontra-se entre o fulcro e a força potente.",
      "O fulcro encontra-se entre a força potente e a força resistente.",
      "A força potente encontra-se entre o fulcro e a força resistente.",
      "A força potente e a resistente atuam no mesmo ponto e com o mesmo sentido."
    ],
    "correctIndex": 0,
    "explanation": "Na alavanca inter-resistente, a força resistente encontra-se entre o fulcro e a força potente (fulcro — F<sub>Resis.</sub> — F<sub>Potente</sub>).",
    "distractorAnalysis": [
      "Está incorreta: O fulcro no meio caracteriza a alavanca interfixa.",
      "Está incorreta: A força potente no meio caracteriza a alavanca interpotente.",
      "Está incorreta: Forças no mesmo ponto não formam os braços distintos de uma alavanca mecânica."
    ],
    "nursingApplication": "Exemplos: o carrinho de mão, o quebra-nozes e a elevação na ponta dos pés (exemplo discutido, em que a tensão no tendão de Aquiles chega a 2–2,5 vezes o peso corporal), com o fulcro nas articulações dos dedos (metatarsofalângicas), a resistência no tornozelo (peso do corpo) e a força potente no tríceps sural (tendão de Aquiles)."
  },
  {
    "id": 1153,
    "topicId": 1,
    "question": "Qual é a característica biomecânica e estrutural que define uma alavanca 'Interpotente' (3.ª classe) no corpo humano?",
    "options": [
      "A força potente encontra-se entre o fulcro e a força resistente.",
      "A força resistente situa-se entre o fulcro e a força potente.",
      "O fulcro situa-se entre a força potente e a resistente.",
      "A alavanca funciona sem gasto de força potente."
    ],
    "correctIndex": 0,
    "explanation": "Na alavanca interpotente, a força potente encontra-se entre o fulcro e a força resistente (fulcro — F<sub>Potente</sub> — F<sub>Resis.</sub>).",
    "distractorAnalysis": [
      "Está incorreta: Força resistente no meio define a alavanca inter-resistente.",
      "Está incorreta: Com o fulcro entre as forças, a alavanca é interfixa, e não interpotente.",
      "Está incorreta: Todas as alavancas reais necessitam de força potente para movimentar cargas contra a gravidade."
    ],
    "nursingApplication": "Exemplos: o músculo bíceps braquial no cotovelo e a utilização de uma pinça de penso cirúrgico."
  },
  {
    "id": 1154,
    "topicId": 1,
    "question": "Qual é o exemplo clássico do corpo humano que representa uma alavanca interpotente?",
    "options": [
      "A articulação da cabeça com a primeira vértebra cervical (atlanto-occipital).",
      "O movimento dos ossos do ouvido médio (martelo e bigorna).",
      "A flexão do cotovelo, em que o bíceps atua entre o fulcro e a resistência na mão.",
      "A elevação do calcanhar ao apoiar-se nas pontas dos pés."
    ],
    "correctIndex": 2,
    "explanation": "Na flexão do cotovelo, o fulcro é a articulação do cotovelo, a força potente é a do bíceps, inserido no rádio a poucos centímetros do fulcro, e a resistência é o peso do antebraço e do objeto na mão (Fulcro — F<sub>Potente</sub> — F<sub>Resis.</sub>): alavanca interpotente.",
    "distractorAnalysis": [
      "Está incorreta: A articulação atlanto-occipital é o exemplo clássico de alavanca interfixa.",
      "Está incorreta: Os ossículos do ouvido formam uma alavanca de ganho de força (o martelo tem braço maior), o oposto de uma interpotente.",
      "Está incorreta: A elevação na ponta dos pés pelo tendão de Aquiles é uma alavanca inter-resistente."
    ],
    "nursingApplication": "Permite aos alunos reconhecer o tipo de alavanca mais abundante e comum no esqueleto apendicular humano."
  },
  {
    "id": 1155,
    "topicId": 1,
    "question": "Quais são os três ossos que se articulam no cotovelo, o fulcro da alavanca interpotente do bíceps?",
    "options": [
      "Clavícula, Escápula e Esterno.",
      "Fémur, Rótula e Tíbia.",
      "Tarso, Metatarso e Falanges.",
      "Úmero, Rádio e Cúbito."
    ],
    "correctIndex": 3,
    "explanation": "Na alavanca interpotente do cotovelo, o úmero (braço) articula com o rádio e o cúbito (antebraço); o bíceps insere-se na tuberosidade do rádio.",
    "distractorAnalysis": [
      "Está incorreta: Estes são ossos da cintura escapular e tórax anterior, não do cotovelo e antebraço.",
      "Está incorreta: Estes são ossos do membro inferior (articulação do joelho).",
      "Está incorreta: Estes são ossos constituintes do pé humano."
    ],
    "nursingApplication": "Integração anatómica direta com os conceitos de alavancas do aparelho locomotor."
  },
  {
    "id": 1156,
    "topicId": 1,
    "question": "Numa alavanca Inter-resistente (ex.: carrinho de mão), qual é a relação geométrica entre os braços de momento?",
    "options": [
      "O braço potente é maior que o braço resistente, dando vantagem de força.",
      "O braço resistente é o dobro do braço potente.",
      "Os dois braços são iguais (b<sub>Potente</sub> = b<sub>Resis.</sub>) quando a carga fica a meio da barra.",
      "O braço potente é nulo, porque a carga fica entre o fulcro e a força."
    ],
    "correctIndex": 0,
    "explanation": "Como a resistência está entre o fulcro e a força potente (Fulcro — F<sub>Resis.</sub> — F<sub>Potente</sub>), a distância do fulcro à força potente (b<sub>Potente</sub>) é necessariamente superior à distância à carga (b<sub>Resis.</sub>). Assim, F<sub>Potente</sub> < F<sub>Resis.</sub>: há multiplicação de força.",
    "distractorAnalysis": [
      "Está incorreta: b<sub>Resis.</sub> é menor que b<sub>Potente</sub> na alavanca inter-resistente, e não o dobro.",
      "Está incorreta: Os dois braços medem-se a partir do fulcro; com a carga a meio, b<sub>Resis.</sub> é metade de b<sub>Potente</sub>.",
      "Está incorreta: O braço potente é o maior dos dois braços e vai do fulcro até ao ponto de aplicação da força potente."
    ],
    "nursingApplication": "Explica a vantagem mecânica de dispositivos como o carrinho de mão: com a carga entre o eixo e as mãos (b<sub>Potente</sub> > b<sub>Resis.</sub>), transporta-se uma carga pesada com uma força inferior ao seu peso."
  },
  {
    "id": 1157,
    "topicId": 1,
    "question": "Numa alavanca Interpotente (ex.: bíceps braquial no cotovelo), qual é a consequência biomecânica de a força potente estar situada entre o fulcro e a carga?",
    "options": [
      "A força muscular necessária é muito menor do que o peso da carga que se segura.",
      "O braço potente é menor que o resistente, exigindo mais força que a carga.",
      "A alavanca não consegue produzir movimento nem rotação da mão.",
      "A força muscular é igual ao peso da carga, porque o sistema está em equilíbrio."
    ],
    "correctIndex": 1,
    "explanation": "Sendo a alavanca interpotente (Fulcro — F<sub>Potente</sub> — F<sub>Resis.</sub>), b<sub>Potente</sub> é mais curto que b<sub>Resis.</sub>. Pela Lei das Alavancas, para equilibrar o sistema o músculo tem de exercer uma força potente F<sub>Potente</sub> muito superior à força resistente F<sub>Resis.</sub>.",
    "distractorAnalysis": [
      "Está incorreta: Com b<sub>Potente</sub> < b<sub>Resis.</sub>, a força muscular é maior do que a carga, e não menor.",
      "Está incorreta: A alavanca produz rotação do antebraço em torno do cotovelo, com ganho de amplitude e velocidade.",
      "Está incorreta: No equilíbrio igualam-se os momentos, e não as forças; como b<sub>Potente</sub> < b<sub>Resis.</sub>, a força muscular é maior do que a carga."
    ],
    "nursingApplication": "Alerta para o facto de que muitos músculos e tendões suportam forças várias vezes superiores aos pesos que carregamos."
  },
  {
    "id": 1158,
    "topicId": 1,
    "question": "Uma tesoura cirúrgica e um baloiço infantil de recreio são exemplos clássicos de que tipo de alavanca?",
    "options": [
      "Alavanca inter-resistente, com a carga entre o fulcro e a força potente.",
      "Alavanca interpotente, com a força potente no meio do sistema.",
      "Alavanca interfixa, com o fulcro entre as forças potente e resistente.",
      "Não constituem alavancas, porque o eixo de rotação não está fixo ao solo."
    ],
    "correctIndex": 2,
    "explanation": "Na tesoura e no baloiço, o parafuso/eixo central (fulcro) situa-se a meio, entre a zona onde as mãos aplicam a força potente e as lâminas/assentos onde atua a resistência: Alavanca Interfixa.",
    "distractorAnalysis": [
      "Está incorreta: Na tesoura e no baloiço, a carga não está entre o fulcro e a força potente.",
      "Está incorreta: Na tesoura e no baloiço, a força potente não está no meio; é o fulcro que fica entre as duas forças.",
      "Está incorreta: Uma alavanca precisa de um fulcro em torno do qual roda, e não de um eixo fixo ao solo; o parafuso da tesoura é o fulcro."
    ],
    "nursingApplication": "Compreensão do funcionamento de instrumentos cirúrgicos articulados comuns na prática diária de enfermagem."
  },
  {
    "id": 1159,
    "topicId": 1,
    "question": "Por que razão a maioria das articulações motoras do corpo humano opera através de alavancas de 3.ª classe (interpotentes), apesar de apresentarem desvantagem mecânica de força (VM < 1)?",
    "options": [
      "Permitem reduzir a necessidade de aporte sanguíneo aos músculos em repouso.",
      "Reduzem o atrito no interior da cápsula articular, evitando o desgaste.",
      "Fazem com que o peso do corpo diminua durante o movimento articular.",
      "Proporcionam ganho de amplitude e de velocidade na extremidade distal (mão ou pé)."
    ],
    "correctIndex": 3,
    "explanation": "Nas alavancas interpotentes (3.ª classe), a força muscular potente atua entre o fulcro e a carga. Como o braço potente é menor que o braço resistente (VM < 1), o músculo tem de produzir maior tensão; em contrapartida, como o músculo se insere perto do fulcro, um pequeno encurtamento muscular traduz-se numa rotação ampla e num deslocamento amplo e rápido da extremidade distal. Assim, estas alavancas privilegiam a amplitude e a velocidade do movimento em detrimento da vantagem de força.",
    "distractorAnalysis": [
      "Está incorreta: O aporte sanguíneo aos músculos não depende da classe da alavanca.",
      "Está incorreta: O atrito articular não é o motivo da classe da alavanca; é reduzido por líquido sinovial.",
      "Está incorreta: O peso do corpo não diminui com o movimento articular."
    ],
    "nursingApplication": "Ajuda a compreender que gestos amplos e rápidos dos membros exigem forças musculares e tendinosas elevadas, o que é relevante na reabilitação e na prevenção de lesões."
  },
  {
    "id": 1160,
    "topicId": 1,
    "question": "A articulação da cabeça com a coluna cervical (onde os músculos posteriores da nuca equilibram o peso da face em torno do côndilo occipital) funciona como:",
    "options": [
      "Uma alavanca interfixa, com o apoio entre a força muscular e o peso da face.",
      "Uma alavanca interpotente, sem ponto de apoio definido.",
      "Um corpo viscoso, sem restituição elástica.",
      "Uma alavanca inter-resistente, com a carga nas vértebras lombares."
    ],
    "correctIndex": 0,
    "explanation": "O côndilo occipital (fulcro) situa-se entre a musculatura extensora da nuca (força potente, atrás) e o centro de gravidade da cabeça/face (força resistente, à frente): Alavanca Interfixa.",
    "distractorAnalysis": [
      "Está incorreta: A articulação atlanto-occipital é um fulcro ósseo de rotação bem definido.",
      "Está incorreta: A cabeça e a coluna cervical comportam-se como alavancas, com fulcro definido no côndilo.",
      "Está incorreta: A carga craniana atua sobre o pescoço e a coluna cervical, não sobre as vértebras lombares."
    ],
    "nursingApplication": "Explica por que adormecer sentado faz a cabeça tombar para a frente: ao relaxar os músculos posteriores, o peso da face faz a alavanca girar."
  },
  {
    "id": 1161,
    "topicId": 1,
    "question": "Numa alavanca interfixa de 3,6 m de comprimento total, o braço potente é o dobro do braço resistente, medidos a partir do fulcro. Qual é o valor de x, em metros, sendo x o braço resistente?",
    "options": [
      "x = 3,6 m",
      "x = 1,2 m",
      "x = 2,4 m",
      "x = 0,6 m"
    ],
    "correctIndex": 1,
    "explanation": "Como b<sub>Potente</sub> + b<sub>Resis.</sub> = 3,6 m e b<sub>Potente</sub> = 2x, obtém-se 3x = 3,6 (=) x = 1,2 m. O braço resistente b<sub>Resis.</sub> é 1,2 m e o potente b<sub>Potente</sub> é 2,4 m.",
    "distractorAnalysis": [
      "Está incorreta: 3,6 m é o comprimento total da barra da alavanca, não o valor de x.",
      "Está incorreta: 2,4 m é o valor do braço potente (2x = 2 × 1,2), não de x.",
      "Está incorreta: 0,6 m resultaria de dividir 3,6 por 6, o que não reflete a equação 3x = 3,6."
    ],
    "nursingApplication": "Aplicação da relação entre os braços de uma alavanca e o seu comprimento total, usando apenas os dados do enunciado."
  },
  {
    "id": 1162,
    "topicId": 1,
    "question": "Numa alavanca interfixa com Força Resistente F<sub>Resis.</sub> = 20 N e braço b<sub>Resis.</sub> = 1,2 m, qual é o valor calculado para o Momento da Força Resistente (M<sub>Resis.</sub>)?",
    "options": [
      "M<sub>Resis.</sub> = 16,7 N·m",
      "M<sub>Resis.</sub> = 21,2 N·m",
      "M<sub>Resis.</sub> = 24 N·m",
      "M<sub>Resis.</sub> = 240 N·m"
    ],
    "correctIndex": 2,
    "explanation": "O cálculo determina textualmente: 'Momento da força resistente: M<sub>Resis.</sub> = F<sub>Resis.</sub> · b<sub>Resis.</sub> (=) M<sub>Resis.</sub> = 20 × 1,2 (=) M<sub>Resis.</sub> = 24 N·m'.",
    "distractorAnalysis": [
      "Está incorreta: 16,7 resultaria de dividir 20 por 1,2, o que é um erro de cálculo.",
      "Está incorreta: 21,2 resultaria de somar 20 com 1,2 em vez de multiplicar.",
      "Está incorreta: 240 resultaria de multiplicar por 12 em vez de 1,2."
    ],
    "nursingApplication": "Consolidação da multiplicação de força por braço para obtenção de momentos de resistência."
  },
  {
    "id": 1163,
    "topicId": 1,
    "question": "Estando o sistema em equilíbrio com M<sub>Resis.</sub> = 24 N·m e braço potente b<sub>Potente</sub> = 2,4 m, qual é a Força Potente (F<sub>Potente</sub>) necessária para equilibrar a alavanca?",
    "options": [
      "F<sub>Potente</sub> = 24 N",
      "F<sub>Potente</sub> = 57,6 N",
      "F<sub>Potente</sub> = 2,4 N",
      "F<sub>Potente</sub> = 10 N"
    ],
    "correctIndex": 3,
    "explanation": "A resolução determina: 'Momento da força potente: M<sub>Potente</sub> = F<sub>Potente</sub> · b<sub>Potente</sub> (=) 24 = F<sub>Potente</sub> × 2,4 (=) F<sub>Potente</sub> = 10 N'.",
    "distractorAnalysis": [
      "Está incorreta: 24 N seria a força potente se o braço potente fosse de apenas 1 metro.",
      "Está incorreta: 57,6 N resultaria de multiplicar 24 por 2,4 em vez de dividir.",
      "Está incorreta: 2,4 é a medida do braço em metros, não o valor da força em newtons."
    ],
    "nursingApplication": "Demonstra que uma força de apenas 10 N consegue equilibrar uma força resistente de 20 N devido à duplicação do braço."
  },
  {
    "id": 1164,
    "topicId": 1,
    "question": "Num sistema de alavanca interfixa, qual é o peso ou Força Resistente (F<sub>Resis.</sub>) exercida por uma carga com massa de 500 kg (adotando g = 9,8 m/s²)?",
    "options": [
      "4900 N",
      "500 N",
      "51,02 N",
      "49 000 N"
    ],
    "correctIndex": 0,
    "explanation": "O cálculo determina: P = F<sub>Resis.</sub> = m · g = 500 kg × 9,8 m/s² = 4900 N.",
    "distractorAnalysis": [
      "Está incorreta: 500 é a massa em quilogramas (kg), que tem de ser multiplicada por g para obter o peso em newtons.",
      "Está incorreta: 51,02 resultaria de dividir a massa pela gravidade, o que viola P = m · g.",
      "Está incorreta: 49 000 N corresponderia a uma gravidade de 98 m/s², dez vezes superior à da Terra."
    ],
    "nursingApplication": "Cálculo da força gravítica real associada a cargas pesadas em ambiente de logística hospitalar."
  },
  {
    "id": 1165,
    "topicId": 1,
    "question": "Se uma carga resistente de 4900 N for colocada a uma distância de b<sub>Resis.</sub> = 0,3 m do fulcro, qual é o Momento da Força Resistente (M<sub>Resis.</sub>) produzido em relação ao ponto de apoio?",
    "options": [
      "M<sub>Resis.</sub> = 147 N·m",
      "M<sub>Resis.</sub> = 1470 N·m",
      "M<sub>Resis.</sub> = 4900 N·m",
      "M<sub>Resis.</sub> = 16 333 N·m"
    ],
    "correctIndex": 1,
    "explanation": "Apresenta-se formalmente: 'M<sub>Resis.</sub> = F<sub>Resis.</sub> · b<sub>Resis.</sub> (=) M<sub>Resis.</sub> = (500 × 9,8) × 0,3 (=) M<sub>Resis.</sub> = 1470 N·m'.",
    "distractorAnalysis": [
      "Está incorreta: 147 N·m resultaria de usar braço de 0,03 m em vez de 0,3 m.",
      "Está incorreta: 4900 N·m seria o momento se o braço fosse de 1 metro.",
      "Está incorreta: 16 333 N·m resultaria de dividir a força pelo braço (4900 / 0,3)."
    ],
    "nursingApplication": "Fixa o valor do momento resistente de referência utilizado na dedução da alavanca."
  },
  {
    "id": 1166,
    "topicId": 1,
    "question": "Para equilibrar um Momento Resistente M<sub>Resis.</sub> = 1470 N·m através de uma Força Potente de 294 N (igual ao peso de uma massa de 30 kg, com g = 9,8 m/s²), que comprimento deve ter o braço potente (b<sub>Potente</sub>)?",
    "options": [
      "b<sub>Potente</sub> = 1,47 m",
      "b<sub>Potente</sub> = 30 m",
      "b<sub>Potente</sub> = 0,2 m",
      "b<sub>Potente</sub> = 5 m"
    ],
    "correctIndex": 3,
    "explanation": "Conclui-se com rigor: 'M<sub>Potente</sub> = F<sub>Potente</sub> · b<sub>Potente</sub> (=) 1470 = (30 × 9,8) × b<sub>Potente</sub> (=) b<sub>Potente</sub> = 5 m'.",
    "distractorAnalysis": [
      "Está incorreta: 1,47 m seria insuficiente: geraria apenas 294 × 1,47 = 432 N·m, e a alavanca não equilibraria.",
      "Está incorreta: 30 é o valor numérico da massa (kg), e não uma distância.",
      "Está incorreta: Com 0,2 m, 294 × 0,2 = 58,8 N·m, muito abaixo de 1470 N·m: a força não chega."
    ],
    "nursingApplication": "Demonstração prática de como alavancas longas permitem a uma pessoa mover cargas de grande massa (500 kg)."
  },
  {
    "id": 1167,
    "topicId": 1,
    "question": "O que comprova biomecanicamente o dimensionamento de uma alavanca interfixa que permite a uma pessoa equilibrar uma carga de 500 kg (4900 N) com uma força de 294 N (o peso de uma massa de 30 kg)?",
    "options": [
      "Que a gravidade terrestre deixa de atuar quando as barras têm mais de 3 metros.",
      "Que é impossível erguer cargas superiores à massa corporal de um indivíduo.",
      "Que os dinamómetros medem forças até cerca de 30 newtons.",
      "Que, aumentando o braço potente, se vencem resistências muito elevadas com forças modestas."
    ],
    "correctIndex": 3,
    "explanation": "A essência das máquinas simples de Arquimedes ('Deem-me uma alavanca e um ponto de apoio e moverei o mundo'): aumentando o braço potente, multiplicamos o efeito de rotação e reduzimos a força necessária.",
    "distractorAnalysis": [
      "Está incorreta: A gravidade mantém-se ativa ao longo de todo o sistema.",
      "Está incorreta: É possível mover grandes massas com auxílio mecânico de alavancas.",
      "Está incorreta: Existem dinamómetros calibrados para forças muito superiores a 30 newtons."
    ],
    "nursingApplication": "Fundamento de dispositivos com braço longo (manivelas de camas e macas, travões) que reduzem a força a aplicar."
  },
  {
    "id": 1168,
    "topicId": 1,
    "question": "Num baloiço (alavanca interfixa) com M<sub>Resis.</sub> = 24 N·m, se uma pessoa aplicar uma força potente de 15 N com um braço b<sub>Potente</sub> = 2,4 m, o que acontecerá ao sistema?",
    "options": [
      "O momento potente seria 36 N·m, superando M<sub>Resis.</sub> (24 N·m) e fazendo a alavanca girar.",
      "A alavanca permaneceria em repouso, sem movimento, como se as forças se anulassem.",
      "O momento potente anular-se-ia por si, sem intervenção de forças externas.",
      "A força resistente aumentaria instantaneamente para 36 N para impedir a rotação."
    ],
    "correctIndex": 0,
    "explanation": "Com F<sub>Potente</sub> = 15 N, M<sub>Potente</sub> = 36 N·m. Como 36 N·m > 24 N·m, o momento resultante não é nulo (36 − 24 = 12 N·m, no sentido do momento potente) e a alavanca entra em rotação acelerada nesse sentido.",
    "distractorAnalysis": [
      "Está incorreta: A alavanca só ficaria em repouso se os momentos fossem iguais (F<sub>Potente</sub> = 10 N).",
      "Está incorreta: O momento potente não se anula por si; só um momento de sentido oposto o pode compensar, e M<sub>Resis.</sub> (24 N·m) é inferior a 36 N·m.",
      "Está incorreta: A carga resistente tem massa e braço fixos, e o seu momento permanece em 24 N·m."
    ],
    "nursingApplication": "Explica como se inicia o movimento articular ativo quando o momento muscular supera o momento resistente da carga."
  },
  {
    "id": 1169,
    "topicId": 1,
    "question": "Qual é, aproximadamente, o valor da aceleração da gravidade à superfície da Terra, com dois algarismos significativos?",
    "options": [
      "3,6 m/s²",
      "9,8 m/s²",
      "98 m/s²",
      "0,98 m/s²"
    ],
    "correctIndex": 1,
    "explanation": "À superfície da Terra, g é cerca de 9,8 m/s² (o valor normalizado é 9,80665 m/s²). Com dois algarismos significativos, escreve-se 9,8 m/s².",
    "distractorAnalysis": [
      "Está incorreta: 3,6 é o fator de conversão de m/s para km/h, e não uma aceleração à superfície da Terra.",
      "Está incorreta: 98 m/s² é dez vezes o valor real da aceleração da gravidade.",
      "Está incorreta: 0,98 m/s² é dez vezes menor do que o valor real, de cerca de 9,8 m/s²."
    ],
    "nursingApplication": "Garante que os cálculos de peso a partir da massa (P = m · g) usam a ordem de grandeza correta da aceleração da gravidade."
  },
  {
    "id": 1170,
    "topicId": 1,
    "question": "Em sistemas mecânicos de alavancas, qual é a condição matemática necessária para garantir o equilíbrio estático rotacional em torno do fulcro?",
    "options": [
      "F<sub>Potente</sub> + F<sub>Resis.</sub> = 0 (soma nula das forças)",
      "b<sub>Potente</sub> / b<sub>Resis.</sub> = 9,8 (razão igual a g)",
      "M<sub>Potente</sub> = M<sub>Resis.</sub> (igualdade dos momentos)",
      "F<sub>Potente</sub> · b<sub>Resis.</sub> = F<sub>Resis.</sub> · b<sub>Potente</sub>"
    ],
    "correctIndex": 2,
    "explanation": "A igualdade entre o Momento Potente e o Momento Resistente (M<sub>Potente</sub> = M<sub>Resis.</sub>) é a base para resolver problemas de alavancas em equilíbrio estático.",
    "distractorAnalysis": [
      "Está incorreta: Somar forças ignora os braços de momento e o efeito de rotação em torno do fulcro.",
      "Está incorreta: A razão entre braços depende da geometria do sistema e não da constante g.",
      "Está incorreta: Os braços estão cruzados incorretamente na fórmula apresentada nesta opção."
    ],
    "nursingApplication": "Consolida a metodologia padrão de análise de momentos de força na biomecânica de enfermagem."
  },
  {
    "id": 1171,
    "topicId": 1,
    "question": "Um antebraço com a mão tem uma massa de 2,5 kg. Qual é o seu peso, em newtons, adotando g = 9,8 m/s²?",
    "options": [
      "2,5 N",
      "24,5 N",
      "0,26 N",
      "245 N"
    ],
    "correctIndex": 1,
    "explanation": "P = m · g = 2,5 kg × 9,8 m/s² = 24,5 N. A massa (em kg) e o peso (em N) são grandezas diferentes.",
    "distractorAnalysis": [
      "Está incorreta: 2,5 é a massa em quilogramas; o peso é P = m · g, em newtons.",
      "Está incorreta: 2,5 / 9,8 ≈ 0,26 resultaria de dividir, e não de multiplicar, a massa pela gravidade.",
      "Está incorreta: 245 N resultaria de multiplicar por 98 em vez de 9,8 (erro de potência de dez)."
    ],
    "nursingApplication": "Permite distinguir massa e peso antes de calcular momentos no cotovelo, em que o peso do segmento é uma força."
  },
  {
    "id": 1172,
    "topicId": 1,
    "question": "Num cotovelo fletido a 90°, o centro de massa do antebraço e da mão está a 15 cm do cotovelo, a inserção do bíceps a 8 cm e o objeto segurado na mão a 30 cm. Quais são estas distâncias em metros?",
    "options": [
      "0,15 m; 0,08 m; 0,30 m",
      "1,5 m; 0,8 m; 3,0 m",
      "0,015 m; 0,008 m; 0,030 m",
      "15 m; 8 m; 30 m"
    ],
    "correctIndex": 0,
    "explanation": "1 cm = 0,01 m. Logo, 15 cm = 0,15 m, 8 cm = 0,08 m e 30 cm = 0,30 m.",
    "distractorAnalysis": [
      "Está incorreta: Confunde centímetros com decímetros: 15 cm são 0,15 m, e não 1,5 m.",
      "Está incorreta: Divide por 1000 em vez de 100: 15 cm são 0,15 m, e não 0,015 m.",
      "Está incorreta: 15 cm não são 15 m; a conversão de centímetros para metros divide por 100."
    ],
    "nursingApplication": "Fixa a conversão de unidades de centímetros para metros indispensável para o cálculo de momentos em N·m."
  },
  {
    "id": 1173,
    "topicId": 1,
    "question": "Para um objeto com massa de 1,0 kg segurado na mão a uma distância de 30 cm (0,3 m) do cotovelo, qual é o Momento Resistente (M<sub>Resis.</sub>) gerado (com g = 9,8 m/s²)?",
    "options": [
      "M<sub>Resis.</sub> = 30 N·m",
      "M<sub>Resis.</sub> = 2,94 N·m",
      "M<sub>Resis.</sub> = 0,3 N·m",
      "M<sub>Resis.</sub> = 9,8 N·m"
    ],
    "correctIndex": 1,
    "explanation": "O cálculo determina textualmente: 'M<sub>Resis.</sub> = F<sub>Resis.</sub> · b<sub>Resis.</sub> (=) M<sub>Resis.</sub> = (1 × 9,8) × 0,3 (=) M<sub>Resis.</sub> = 2,94 N·m'.",
    "distractorAnalysis": [
      "Está incorreta: 30 N·m resultaria de multiplicar 1 por 30 ignorando a gravidade e os centímetros.",
      "Está incorreta: 0,3 N·m resultaria de multiplicar apenas a massa pelo braço sem aplicar g = 9,8.",
      "Está incorreta: 9,8 N·m seria o momento se o braço fosse de 1 metro completo em vez de 0,30 m."
    ],
    "nursingApplication": "Determinação do momento resistente gerado por uma carga externa de 1 kg segurada na mão."
  },
  {
    "id": 1174,
    "topicId": 1,
    "question": "Para o segmento antebraço+mão com massa de 2,5 kg cujo centro de massa dista 15 cm (0,15 m) do cotovelo, qual é o Momento gerado pelo seu peso anatómico (com g = 9,8 m/s²)?",
    "options": [
      "M<sub>antebraço</sub> = 2,5 N·m",
      "M<sub>antebraço</sub> = 36,8 N·m",
      "M<sub>antebraço</sub> = 3,68 N·m",
      "M<sub>antebraço</sub> = 0,375 N·m"
    ],
    "correctIndex": 2,
    "explanation": "Apresenta-se: 'M<sub>antebraço+mão</sub> = F · b (=) M = (2,5 × 9,8) × 0,15 (=) M = 3,68 N·m' (valor exato 3,675 N·m, arredondado a 3,68 N·m).",
    "distractorAnalysis": [
      "Está incorreta: 2,5 é apenas o valor da massa em kg, sem multiplicar por g nem pelo braço.",
      "Está incorreta: 36,8 N·m resultaria de um erro de vírgula decimal na conversão de unidades.",
      "Está incorreta: 0,375 resultaria de ignorar a aceleração da gravidade de 9,8 m/s²."
    ],
    "nursingApplication": "Mostra que o próprio peso do membro anatómico contribui com momento resistente significativo."
  },
  {
    "id": 1175,
    "topicId": 1,
    "question": "Somando o momento gerado pelo peso do antebraço (3,68 N·m) com o momento gerado pelo objeto na mão (2,94 N·m), qual é o Momento Resistente Total no cotovelo?",
    "options": [
      "M<sub>total</sub> = 2,94 N·m",
      "M<sub>total</sub> = 3,68 N·m",
      "M<sub>total</sub> = 0,74 N·m",
      "M<sub>total</sub> = 6,62 N·m"
    ],
    "correctIndex": 3,
    "explanation": "Efetua-se a soma dos dois momentos de resistência no mesmo sentido horário: 'M<sub>antebraço+mão</sub> + M<sub>Resis.</sub> = 3,68 + 2,94 = 6,62 N·m'.",
    "distractorAnalysis": [
      "Está incorreta: 2,94 N·m considera apenas o objeto externo, esquecendo o peso do próprio membro.",
      "Está incorreta: 3,68 N·m considera apenas o antebraço, esquecendo o objeto transportado na mão.",
      "Está incorreta: 0,74 N·m resultaria de subtrair os momentos (3,68 − 2,94); como ambos tendem a rodar o antebraço no mesmo sentido, somam-se."
    ],
    "nursingApplication": "Exemplifica o princípio da sobreposição de momentos na análise biomecânica articular."
  },
  {
    "id": 1176,
    "topicId": 1,
    "question": "Com um Momento Resistente Total de 6,62 N·m e braço de inserção do bíceps de 8 cm (0,08 m), que Força Muscular (F<sub>E</sub>) o bíceps exerce para manter o antebraço a 90°?",
    "options": [
      "F<sub>E</sub> = 82,75 N",
      "F<sub>E</sub> = 6,62 N",
      "F<sub>E</sub> = 0,53 N",
      "F<sub>E</sub> = 34,3 N"
    ],
    "correctIndex": 0,
    "explanation": "Conclui-se o exercício resolvendo a equação de equilíbrio: 'M<sub>E</sub> = F<sub>E</sub> · b<sub>E</sub> (=) 6,62 = F<sub>E</sub> × 0,08 (=) F<sub>E</sub> = 82,75 N'.",
    "distractorAnalysis": [
      "Está incorreta: 6,62 N seria a força se o braço do bíceps medisse 1 metro inteiro.",
      "Está incorreta: 0,53 N resultaria de multiplicar 6,62 por 0,08 em vez de dividir.",
      "Está incorreta: 34,3 N é o peso vertical simples das massas combinadas (3,5 kg × 9,8), não a força real do bíceps."
    ],
    "nursingApplication": "Mostra que segurar um objeto de apenas 1 kg com o cotovelo a 90° exige ao bíceps cerca de 83 N, o que ajuda a perceber a sobrecarga em tarefas manuais repetidas."
  },
  {
    "id": 1177,
    "topicId": 1,
    "question": "Por que razão a força exercida pelo bíceps (82,75 N) é mais do que o dobro do peso total suportado (~34,3 N das massas somadas de 3,5 kg)?",
    "options": [
      "Porque o músculo bíceps tem uma constante de Hooke deficiente, sobretudo em repouso.",
      "Porque o braço do bíceps (8 cm) é muito menor do que os das cargas (15 e 30 cm).",
      "Porque a massa do antebraço aumenta com o esforço de flexão do cotovelo.",
      "Porque o antebraço fica mais pesado quando o cotovelo está fletido a 90°."
    ],
    "correctIndex": 1,
    "explanation": "Como a inserção tendinosa do bíceps se localiza muito perto da articulação (8 cm), o seu braço é muito mais curto que os braços das resistências (15 cm e 30 cm). Para gerar o mesmo momento de rotação, é forçado a produzir uma força substancialmente maior.",
    "distractorAnalysis": [
      "Está incorreta: A constante de Hooke não explica o momento necessário; o problema é geométrico.",
      "Está incorreta: A massa do antebraço é constante; o esforço não a altera.",
      "Está incorreta: O peso do antebraço (m · g) não depende do ângulo do cotovelo; o que varia é o braço do peso."
    ],
    "nursingApplication": "Permite ao futuro enfermeiro compreender a sobrecarga articular e tendinosa provocada por cargas que parecem leves na mão."
  },
  {
    "id": 1178,
    "topicId": 1,
    "question": "Um antebraço está fletido em equilíbrio em torno do cotovelo, com um objeto seguro na mão. Sendo F<sub>E</sub> a força do bíceps, d<sub>E</sub> o seu braço de momento, F<sub>objeto</sub> o peso do objeto, d<sub>Resis.</sub> a sua distância ao cotovelo, F<sub>antebraço+mão</sub> o peso do antebraço com a mão e d<sub>antebraço</sub> a distância do seu centro de gravidade ao cotovelo, qual é a equação de equilíbrio de momentos em torno do cotovelo?",
    "options": [
      "F<sub>objeto</sub> + F<sub>antebraço+mão</sub> = F<sub>E</sub>, ou seja, a força do bíceps iguala a soma dos pesos que está a segurar.",
      "F<sub>E</sub> · d<sub>Resis.</sub> = F<sub>objeto</sub> · d<sub>E</sub>, com os braços do bíceps e do objeto trocados.",
      "(F<sub>objeto</sub> · d<sub>Resis.</sub>) + (F<sub>antebraço+mão</sub> · d<sub>antebraço</sub>) = F<sub>E</sub> · d<sub>E</sub>",
      "F<sub>E</sub> = m · g · a, em que a força muscular depende da aceleração do antebraço."
    ],
    "correctIndex": 2,
    "explanation": "Em equilíbrio, o momento potente iguala o momento resistente total. No antebraço, a soma dos momentos da carga na mão e do antebraço iguala o momento do bíceps: (F<sub>objeto</sub> · d<sub>Resis.</sub>) + (F<sub>antebraço+mão</sub> · d<sub>antebraço</sub>) = F<sub>E</sub> · d<sub>E</sub>.",
    "distractorAnalysis": [
      "Está incorreta: Ignorar os braços de momento viola frontalmente a Lei das Alavancas de Arquimedes.",
      "Está incorreta: Os braços anatómicos associados a cada força estão incorretamente atribuídos nesta opção.",
      "Está incorreta: Mistura a 2.ª Lei de Newton com a fórmula do peso sem relação com o equilíbrio de momentos."
    ],
    "nursingApplication": "Permite estimar a força do bíceps quando um utente segura um objeto com o cotovelo fletido, por exemplo num exercício de reabilitação com halteres."
  },
  {
    "id": 1179,
    "topicId": 1,
    "question": "Se a massa do objeto segurado na mão passasse de 1 kg para 3 kg (triplicando), o que aconteceria ao esforço exigido ao bíceps?",
    "options": [
      "Permaneceria em 82,75 N, porque o músculo tem força constante.",
      "Diminuiria, porque o peso da mão ajuda a equilibrar o membro.",
      "Diminuiria, porque o objeto deixaria de exercer momento sobre o cotovelo.",
      "Aumentaria, pois o momento do objeto triplicaria, de 2,94 para 8,82 N·m."
    ],
    "correctIndex": 3,
    "explanation": "Com o objeto a pesar 3 kg, M<sub>objeto</sub> = (3 × 9,8) × 0,3 = 8,82 N·m. Somando aos 3,68 N·m do antebraço dá 12,50 N·m. A força do bíceps passaria para 12,50 / 0,08 = 156,25 N: quase duplica, mas não triplica, porque o momento do antebraço (3,68 N·m) se mantém.",
    "distractorAnalysis": [
      "Está incorreta: A força muscular não é constante; varia com o momento resistente total.",
      "Está incorreta: O peso da mão aumenta o momento resistente, e não o diminui.",
      "Está incorreta: O objeto continua a exercer momento, que aumenta com a massa."
    ],
    "nursingApplication": "Explica por que carregar materiais pesados na mão em flexão do cotovelo pode contribuir para fadiga e dor muscular."
  },
  {
    "id": 1180,
    "topicId": 1,
    "question": "Que conclusão biomecânica geral se extrai da análise da alavanca interpotente do bíceps no corpo humano?",
    "options": [
      "As alavancas interpotentes operam em desvantagem mecânica, exigindo forças musculares elevadas.",
      "Os ossos humanos são alavancas ideais, que exigem pouca força para mover cargas.",
      "O bíceps humano dispensa as leis da física clássica quando segura cargas.",
      "O antebraço é uma alavanca interfixa, em que o cotovelo se situa na ponta dos dedos."
    ],
    "correctIndex": 0,
    "explanation": "A maioria das alavancas motoras do corpo humano são interpotentes (3.ª classe): conferem enorme amplitude e rapidez de movimento distal, mas à custa de grandes tensões mecânicas geradas pelas fibras musculares e tendões.",
    "distractorAnalysis": [
      "Está incorreta: Os ossos não são alavancas ideais; a maior parte das alavancas motoras exige forças elevadas.",
      "Está incorreta: As leis da física clássica aplicam-se igualmente ao bíceps e aos ossos.",
      "Está incorreta: O cotovelo não está na ponta dos dedos; é a articulação entre o braço e o antebraço."
    ],
    "nursingApplication": "Síntese final integradora da mecânica de alavancas aplicada à fisiologia do movimento humano."
  },
  {
    "id": 1181,
    "topicId": 1,
    "question": "Qual é a definição exata de Centro de Gravidade (CG) na Biofísica e Biomecânica do corpo humano?",
    "options": [
      "Ponto anatómico onde se mede a tensão arterial sistólica, no braço.",
      "Ponto onde se considera concentrada toda a massa e atua a resultante das forças gravíticas.",
      "Área geométrica de contacto entre a sola do calçado e o solo da enfermaria.",
      "Linha imaginária que divide o corpo humano em metades direita e esquerda."
    ],
    "correctIndex": 1,
    "explanation": "O centro de gravidade é o ponto imaginário onde se considera concentrada toda a massa do corpo e onde atua a resultante das forças gravíticas.",
    "distractorAnalysis": [
      "Está incorreta: A tensão arterial mede-se no braço, mas não define o centro de gravidade.",
      "Está incorreta: A área de contacto dos pés é a base de sustentação, e não o centro de gravidade.",
      "Está incorreta: Essa é a linha média do corpo; o centro de gravidade é um ponto, e não uma linha."
    ],
    "nursingApplication": "Conceito primordial para a avaliação do equilíbrio postural e risco de queda em geriatria."
  },
  {
    "id": 1182,
    "topicId": 1,
    "question": "Onde se localiza o Centro de Gravidade num corpo humano adulto em posição anatómica ortostática ereta?",
    "options": [
      "Na 7.ª vértebra cervical (C7) junto à base do pescoço.",
      "No centro da cavidade craniana entre os hemisférios cerebrais.",
      "Na linha média anterior à 2.ª vértebra sagrada (S2).",
      "Na articulação do joelho ao nível dos meniscos."
    ],
    "correctIndex": 2,
    "explanation": "Estipula-se textualmente: 'Localização: Em posição anatómica ereta, situa-se na linha média anterior à 2.ª vértebra sagrada (S2)'.",
    "distractorAnalysis": [
      "Está incorreta: C7 localiza-se na transição cérvico-dorsal, muito acima do CG corporal total.",
      "Está incorreta: No crânio situa-se apenas o CG da cabeça isolada, não do corpo humano completo.",
      "Está incorreta: O joelho está muito abaixo do CG, que se situa na região pélvica."
    ],
    "nursingApplication": "Referência anatómica fundamental para orientar o posicionamento do tronco em transferências assistidas."
  },
  {
    "id": 1183,
    "topicId": 1,
    "question": "O que acontece à localização do Centro de Gravidade durante as movimentações e mudanças posturais do corpo humano?",
    "options": [
      "Permanece imóvel e fixo à 2.ª vértebra sagrada, mesmo que a pessoa salte ou corra.",
      "Desaparece durante a marcha, como se o corpo deixasse de ter massa.",
      "Passa a situar-se no chão, entre os dois pés, onde o corpo se apoia.",
      "Desloca-se com o movimento (por exemplo, sobe ao elevar os braços e avança ao inclinar o tronco)."
    ],
    "correctIndex": 3,
    "explanation": "Define-se o princípio da Mobilidade do CG: 'O centro de gravidade desloca-se com o movimento (por exemplo, sobe ao elevar os braços e avança ao inclinar o tronco)'.",
    "distractorAnalysis": [
      "Está incorreta: O centro de gravidade desloca-se com os movimentos do corpo; não fica fixo.",
      "Está incorreta: O centro de gravidade não desaparece; existe em todos os corpos com massa.",
      "Está incorreta: No chão situa-se a projeção do centro de gravidade (linha de gravidade), e não o próprio centro de gravidade."
    ],
    "nursingApplication": "Permite antecipar como gestos simples (como esticar os braços para alcançar um objeto) alteram o equilíbrio do doente."
  },
  {
    "id": 1184,
    "topicId": 1,
    "question": "Qual é a definição exata de 'Base de sustentação' na estabilidade postural humana?",
    "options": [
      "Área delimitada pelos pontos de contacto do corpo com a superfície de apoio.",
      "A altura em metros medida desde o chão até à 2.ª vértebra sagrada.",
      "Soma das áreas de contacto das plantas dos pés, sem o espaço entre eles.",
      "O momento de força exercido pelo bíceps sobre a tuberosidade do rádio."
    ],
    "correctIndex": 0,
    "explanation": "Define-se: 'Base de sustentação: Área geométrica delimitada por todos os pontos de contacto de um corpo com a superfície que o suporta'.",
    "distractorAnalysis": [
      "Está incorreta: A distância do chão à vértebra é a altura do centro de gravidade, não a área da base.",
      "Está incorreta: A base de sustentação inclui também a área entre os pontos de contacto, como o espaço entre os dois pés.",
      "Está incorreta: Momento do bíceps é o momento de força de flexão do cotovelo."
    ],
    "nursingApplication": "Compreensão essencial para orientar o doente a afastar os pés, reduzindo o risco de queda durante o treino de marcha."
  },
  {
    "id": 1185,
    "topicId": 1,
    "question": "Como difere a localização do Centro de Gravidade de uma criança pequena comparativamente à de um adulto?",
    "options": [
      "Na criança pequena situa-se nos calcanhares e no adulto no pescoço.",
      "Na criança pequena situa-se mais alto (abdómen e tórax); no adulto situa-se à frente de S2.",
      "É idêntico em todas as idades, pois a proporção corporal não muda com o crescimento.",
      "A criança pequena não possui centro de gravidade até aos 18 anos de idade."
    ],
    "correctIndex": 1,
    "explanation": "Demonstra-se a transição: no adulto situa-se à frente da 2.ª vértebra sagrada; na criança e no bebé localiza-se no 'interior do abdómen' e no 'tórax', situando-se proporcionalmente mais elevado.",
    "distractorAnalysis": [
      "Está incorreta: O centro de gravidade da criança é mais alto, e nunca nos calcanhares.",
      "Está incorreta: As proporções corporais variam muito com o crescimento; o centro de gravidade muda.",
      "Está incorreta: Qualquer corpo com massa possui centro de gravidade desde o nascimento."
    ],
    "nursingApplication": "Contribui para explicar porque os bebés e crianças pequenas perdem o equilíbrio com facilidade e sofrem quedas frequentes com impacto cefálico."
  },
  {
    "id": 1186,
    "topicId": 1,
    "question": "Por que razão o Centro de Gravidade nas crianças pequenas e bebés se situa mais acima (no abdómen/tórax)?",
    "options": [
      "Porque a densidade óssea dos membros inferiores das crianças é cinco vezes maior que a dos adultos.",
      "Porque as crianças usam calçado de borracha com coeficiente de atrito reduzido, que as faz tombar.",
      "Porque a cabeça e o tronco superior pesam proporcionalmente mais na criança do que no adulto.",
      "Porque o coração infantil bate com maior frequência cardíaca, empurrando o sangue para cima."
    ],
    "correctIndex": 2,
    "explanation": "Nas crianças, a cabeça e o tronco superior são desproporcionalmente volumosos e pesados em comparação com os membros inferiores curtos. Como o CG é a média das posições ponderada pelas massas, desloca-se para cima (tórax/abdómen).",
    "distractorAnalysis": [
      "Está incorreta: A densidade óssea não é a causa da posição do centro de gravidade nas crianças.",
      "Está incorreta: O calçado não explica a posição do centro de gravidade.",
      "Está incorreta: A frequência cardíaca não altera a posição do centro de gravidade."
    ],
    "nursingApplication": "Importante para a enfermagem pediátrica na adaptação de grades de berços e prevenção de acidentes infantis."
  },
  {
    "id": 1187,
    "topicId": 1,
    "question": "Quando um enfermeiro eleva os dois braços acima da cabeça para retirar um frasco de soro de uma prateleira alta, o que acontece ao seu Centro de Gravidade?",
    "options": [
      "Desloca-se para a sola dos sapatos, aumentando a estabilidade, porque o peso fica mais baixo.",
      "Desloca-se para trás, ficando mais próximo da parede do corredor, sem alterar a postura.",
      "Permanece na 2.ª vértebra sagrada, sem se deslocar, mesmo quando o corpo se estica.",
      "O centro de gravidade sobe alguns centímetros, reduzindo temporariamente a margem de estabilidade."
    ],
    "correctIndex": 3,
    "explanation": "Indica-se claramente: 'sobe ao elevar os braços'. Elevar os membros superiores desloca massa para cima, subindo o CG e aumentando a distância até à base de sustentação, o que reduz a estabilidade postural.",
    "distractorAnalysis": [
      "Está incorreta: Elevar os braços desloca o centro de gravidade para cima, e não para a sola dos sapatos.",
      "Está incorreta: Elevar os braços não desloca o centro de gravidade para trás.",
      "Está incorreta: O centro de gravidade desloca-se quando os braços se elevam."
    ],
    "nursingApplication": "Alerta ergonómico: evitar prateleiras excessivamente altas que forcem posturas instáveis com os braços esticados."
  },
  {
    "id": 1188,
    "topicId": 1,
    "question": "Quando uma pessoa inclina o tronco para a frente ao tentar apanhar algo no chão:",
    "options": [
      "O centro de gravidade avança, aproximando a linha de gravidade do bordo anterior da base.",
      "O centro de gravidade recua para os calcanhares, o que aumenta a segurança.",
      "A base de sustentação alarga-se para o dobro, sem alterar a posição dos pés.",
      "O peso do corpo diminui até o tronco voltar à vertical."
    ],
    "correctIndex": 0,
    "explanation": "Refere-se explicitamente: 'avança ao inclinar o tronco'. A projeção vertical do CG (Linha de Gravidade) aproxima-se dos dedos dos pés; se ultrapassar os limites da base, o indivíduo desequilibra-se e cai para a frente.",
    "distractorAnalysis": [
      "Está incorreta: Inclinar o tronco para a frente desloca o centro de gravidade para a frente, e não para trás.",
      "Está incorreta: A base só se alarga se mudarem os pontos de apoio (afastar os pés ou usar apoio adicional).",
      "Está incorreta: O peso do corpo mantém-se; o que muda é a posição da linha de gravidade."
    ],
    "nursingApplication": "Ajuda a perceber o risco de queda para a frente em idosos com tonturas que inclinam o tronco sem apoio."
  },
  {
    "id": 1189,
    "topicId": 1,
    "question": "Se um doente passar da posição bipodal (dois pés apoiados no chão) para a posição unipodal (apoiado apenas num pé), o que acontece à sua base de sustentação?",
    "options": [
      "Aumenta para o dobro da área inicial, ao apoiar-se em mais pontos de contacto.",
      "Reduz-se à área de contacto da sola desse pé, aumentando o risco de instabilidade.",
      "Permanece com o mesmo tamanho e geometria.",
      "Passa a englobar a área total do quarto de internamento."
    ],
    "correctIndex": 1,
    "explanation": "A base bipodal inclui os dois pés e todo o espaço entre eles. No apoio unipodal, a base reduz-se apenas à sola de um pé (ver a condição de instabilidade: «pés juntos ou num só pé»). Pequenas oscilações bastam para levar a linha de gravidade para fora da base, aumentando o risco de queda.",
    "distractorAnalysis": [
      "Está incorreta: Apoiar em menos pontos reduz a área de sustentação, e não a duplica.",
      "Está incorreta: A área entre os pés deixa de fazer parte da base quando um pé é levantado.",
      "Está incorreta: A base de sustentação é a área delimitada pelos pontos de contacto com o solo, e não o espaço envolvente."
    ],
    "nursingApplication": "Alerta de segurança: ao ajudar doentes a calçar sapatos ou vestir calças, preferir que se calcem e vistam sentados."
  },
  {
    "id": 1190,
    "topicId": 1,
    "question": "Qual é a condição geométrica fundamental para que o corpo humano permaneça em equilíbrio estático sem tombar?",
    "options": [
      "Que o centro de gravidade se mantenha fixo à frente da 2.ª vértebra sagrada.",
      "Que a força potente exercida pelo quadríceps seja igual a zero newtons, em repouso total.",
      "Que a linha de gravidade (projeção vertical do centro de gravidade) fique dentro da base de sustentação.",
      "Que o atrito com o piso seja igual à força normal do leito, em todas as posições do corpo."
    ],
    "correctIndex": 2,
    "explanation": "A estabilidade estática depende de a linha de gravidade passar por dentro do polígono de apoio (base de sustentação). Se sair para fora das margens da base, o peso gera momento de rotação que derruba o corpo.",
    "distractorAnalysis": [
      "Está incorreta: O centro de gravidade desloca-se com os movimentos sem que o corpo tombe; a condição é a linha de gravidade cair dentro da base.",
      "Está incorreta: O quadríceps atua na marcha e no equilíbrio; zero newtons não garante estabilidade.",
      "Está incorreta: O atrito e a força normal não definem a condição geométrica de equilíbrio."
    ],
    "nursingApplication": "Pilar científico da prevenção de quedas e treino de equilíbrio em contexto hospitalar e comunitário."
  },
  {
    "id": 1191,
    "topicId": 1,
    "question": "Quanto à altura do centro de gravidade, qual é a condição de alta estabilidade e a intervenção recomendada?",
    "options": [
      "Condição: Mais alto (pontas dos pés); Intervenção: Manter o tronco esticado e rígido.",
      "Condição: CG no pescoço; Intervenção: Manter a cama no nível mais alto possível.",
      "Condição: CG elevado; Intervenção: Afastar-se do doente durante a mobilização.",
      "Condição: Mais baixo (joelhos e ancas fletidos); Intervenção: Fletir os joelhos ao esforçar-se."
    ],
    "correctIndex": 3,
    "explanation": "Um centro de gravidade mais baixo aumenta a estabilidade: fletir os joelhos e as ancas ao esforçar-se ou ao mobilizar um doente baixa o centro de gravidade. Pelo contrário, ficar nas pontas dos pés ou com o tronco esticado eleva-o e torna a postura instável.",
    "distractorAnalysis": [
      "Está incorreta: Estar nas pontas dos pés eleva o CG, e é uma condição de instabilidade.",
      "Está incorreta: Uma cama alta não é a intervenção que estabiliza o centro de gravidade; a altura deve ajustar-se à cintura do profissional.",
      "Está incorreta: Afastar-se do doente aumenta o braço da carga e o momento sobre a coluna lombar, e não a estabilidade."
    ],
    "nursingApplication": "Regra biomecânica de ouro para a postura dos enfermeiros durante a prestação de cuidados no leito."
  },
  {
    "id": 1192,
    "topicId": 1,
    "question": "Em situação de alta estabilidade, como deve ser a base de sustentação de um profissional que mobiliza um doente?",
    "options": [
      "Base ampla, com pés afastados à largura dos ombros.",
      "Base estreita, mantendo os pés juntos ou equilibrando-se num pé.",
      "Pés afastados a 60 cm, com o tronco inclinado para a frente.",
      "Apoiar as mãos no solo, sem contacto dos pés, durante a mobilização."
    ],
    "correctIndex": 0,
    "explanation": "Uma base ampla, com os pés afastados à largura dos ombros, alarga a área de sustentação e aumenta a estabilidade.",
    "distractorAnalysis": [
      "Está incorreta: Uma base estreita reduz a estabilidade.",
      "Está incorreta: Inclinar o tronco para a frente aproxima a linha de gravidade do bordo anterior da base e aumenta a carga lombar.",
      "Está incorreta: Apoiar só as mãos não constitui uma base de sustentação estável dos pés."
    ],
    "nursingApplication": "Ao reposicionar um utente no leito, o profissional afasta os pés, colocando um deles no sentido do movimento, e flete os joelhos."
  },
  {
    "id": 1193,
    "topicId": 1,
    "question": "No âmbito da estabilidade corporal e prevenção de quedas, que orientação de enfermagem deve ser dada ao doente durante uma transferência assistida?",
    "options": [
      "Mantenha os calcanhares juntos e as pontas dos pés encostadas, para se estabilizar.",
      "Afaste os pés ao transferir-se, para ampliar a base de sustentação.",
      "Avance rapidamente para a cadeira, com um impulso súbito do tronco.",
      "Eleve as mãos acima da cabeça e fique apoiado na ponta dos pés."
    ],
    "correctIndex": 1,
    "explanation": "A intervenção de enfermagem recomendada é orientar o doente a afastar os pés ao transferir-se, ampliando a sua base e evitando o tombamento lateral.",
    "distractorAnalysis": [
      "Está incorreta: Pés juntos estreitam a base e causam instabilidade imediata.",
      "Está incorreta: Um impulso súbito do tronco pode levar a linha de gravidade para fora da base, com risco de queda.",
      "Está incorreta: Elevar as mãos e apoiar-se na ponta dos pés eleva o centro de gravidade e reduz a base."
    ],
    "nursingApplication": "Comunicação terapêutica clara e segura durante procedimentos de reabilitação e mobilidade."
  },
  {
    "id": 1194,
    "topicId": 1,
    "question": "Quanto à posição da linha de gravidade, em que situação há alta estabilidade?",
    "options": [
      "Posicionada fora dos bordos da base de apoio, inclinada a 80 graus.",
      "Oscilando continuamente entre os calcanhares e as orelhas.",
      "Centrada no meio do polígono de apoio (base de sustentação).",
      "Paralela ao plano horizontal da cama de internamento."
    ],
    "correctIndex": 2,
    "explanation": "Há alta estabilidade quando a linha de gravidade passa centrada no polígono de apoio (base de sustentação).",
    "distractorAnalysis": [
      "Está incorreta: Linha próxima ou fora dos bordos é a condição de instabilidade e risco iminente de queda.",
      "Está incorreta: Oscilações descontroladas indicam ataxia ou perturbação do equilíbrio vestibular.",
      "Está incorreta: A linha de gravidade é sempre vertical (direção da aceleração da gravidade), nunca horizontal."
    ],
    "nursingApplication": "Manter a linha de gravidade centrada no polígono de apoio previne o tombamento involuntário do corpo."
  },
  {
    "id": 1195,
    "topicId": 1,
    "question": "Qual é a intervenção de enfermagem recomendada para manter a linha de gravidade centrada ao realizar esforços ou transportar cargas?",
    "options": [
      "Curvar a coluna dorsal, esticando os braços o mais longe possível do peito.",
      "Inclinar o tronco 45 graus para o lado ao caminhar com equipamentos.",
      "Transportar os doentes e cargas na ponta dos pés.",
      "Manter a carga junto ao peito, sem inclinar o tronco."
    ],
    "correctIndex": 3,
    "explanation": "Preconiza-se formalmente como intervenção de enfermagem recomendada: 'Manter a carga junto ao peito sem inclinar o tronco', mantendo a linha de gravidade combinada no centro da base.",
    "distractorAnalysis": [
      "Está incorreta: Esticar os braços desloca a linha de gravidade do conjunto para o bordo anterior da base e aumenta o momento sobre a coluna.",
      "Está incorreta: Inclinar o tronco lateralmente desvia a linha de gravidade para o bordo da base, com risco de queda.",
      "Está incorreta: Caminhar na ponta dos pés reduz a base e eleva o centro de gravidade."
    ],
    "nursingApplication": "Ao transportar uma caixa de soros, segurá-la junto ao tronco mantém a linha de gravidade do conjunto dentro da base e reduz o momento sobre a coluna lombar."
  },
  {
    "id": 1196,
    "topicId": 1,
    "question": "Que medida preventiva de enfermagem reduz o risco de queda relacionado com o atrito entre o solo e o calçado?",
    "options": [
      "Evitar meias sem sola antiderrapante; preferir calçado de sola de borracha com relevo.",
      "Encerar os corredores com cera líquida pouco antes da marcha dos doentes.",
      "Incentivar os doentes operados a caminhar de meias de seda em piso molhado.",
      "Usar calçado de sola lisa para acelerar as deslocações pelos corredores."
    ],
    "correctIndex": 0,
    "explanation": "O atrito entre o solo e o calçado é maior com sola de borracha com relevo; meias sem sola antiderrapante, sobretudo em chão encerado ou molhado, aumentam o risco de escorregamento. Por isso, deve evitar-se o seu uso e preferir calçado com sola de borracha com relevo.",
    "distractorAnalysis": [
      "Está incorreta: Cera líquida reduz muito o atrito e é fator de risco de queda.",
      "Está incorreta: Meias lisas em piso molhado reduzem o atrito e favorecem escorregamentos.",
      "Está incorreta: Calçado de sola lisa reduz o atrito e aumenta o risco de queda."
    ],
    "nursingApplication": "Medida frequentemente incluída nos programas de prevenção de quedas em meio hospitalar."
  },
  {
    "id": 1197,
    "topicId": 1,
    "question": "Qual é o efeito biomecânico da utilização de dispositivos de apoio (como andarilho ou bengala) sobre a estabilidade postural do doente?",
    "options": [
      "Reduzem a base de sustentação, para estimular o equilíbrio cerebral.",
      "Aumentam a base de sustentação, e o andarilho alarga-a mais do que a bengala.",
      "Reduzem o peso do doente, permitindo-lhe andar sem apoio do solo.",
      "Aumentam a velocidade da marcha de forma significativa."
    ],
    "correctIndex": 1,
    "explanation": "Os dispositivos de apoio aumentam a área da base de sustentação: o andarilho, com quatro apoios no solo, alarga-a mais do que a bengala, que acrescenta um único ponto de apoio. Assim alargam-se os limites dentro dos quais a linha de gravidade pode oscilar sem queda.",
    "distractorAnalysis": [
      "Está incorreta: Reduzir a base aumenta a instabilidade; os dispositivos de apoio fazem o contrário.",
      "Está incorreta: O peso do doente não se altera com um andarilho ou bengala.",
      "Está incorreta: Os dispositivos de apoio destinam-se a dar estabilidade, e não a aumentar a velocidade da marcha."
    ],
    "nursingApplication": "Explica aos doentes e familiares a razão biomecânica pela qual o andarilho devolve a segurança ao caminhar."
  },
  {
    "id": 1198,
    "topicId": 1,
    "question": "Qual é a intervenção de enfermagem recomendada para utentes que utilizam andarilho?",
    "options": [
      "Incentivar o doente a afastar bem o andarilho do corpo, para dar passos largos.",
      "Retirar o andarilho a doentes com marcha atáxica.",
      "Ensinar a usar o andarilho mantendo-se dentro dele.",
      "Usar o andarilho para transportar objetos pelo quarto, sem se apoiar nele."
    ],
    "correctIndex": 2,
    "explanation": "Indica-se textualmente: 'Intervenção de enfermagem recomendada: Ensinar a usar o andarilho mantendo-se dentro dele'.",
    "distractorAnalysis": [
      "Está incorreta: Com o andarilho muito à frente, o doente inclina o tronco e sai do interior do apoio, o que aumenta o risco de queda.",
      "Está incorreta: Doentes com marcha atáxica precisam mais de apoio, e não menos.",
      "Está incorreta: Usar o andarilho sem se apoiar nele anula a sua função de estabilização."
    ],
    "nursingApplication": "Instrução prática indispensável fornecida no ensino ao utente e cuidadores antes da alta hospitalar."
  },
  {
    "id": 1199,
    "topicId": 1,
    "question": "Ao orientar um doente a afastar os pés à largura dos ombros (30-40 cm) antes de se levantar da cama, que benefício biomecânico direto estamos a garantir?",
    "options": [
      "Aumentamos o peso dos membros inferiores, tornando-os mais estáveis.",
      "Dispensamos a força muscular dos extensores das pernas, porque o corpo fica estável.",
      "Aumentamos a pressão arterial média nos membros inferiores.",
      "Ampliamos a base de sustentação, afastando a linha de gravidade do limite do apoio."
    ],
    "correctIndex": 3,
    "explanation": "Ao afastar os pés a 30-40 cm, a base de sustentação alarga-se sobretudo lateralmente; a linha de gravidade fica mais longe dos bordos da base, e as oscilações do tronco ao levantar-se têm menor probabilidade de a levar para fora dela, o que reduz o risco de desequilíbrio e queda.",
    "distractorAnalysis": [
      "Está incorreta: O peso dos membros não aumenta com a posição dos pés.",
      "Está incorreta: A base mais ampla não elimina a necessidade de força muscular para levantar.",
      "Está incorreta: A posição dos pés não altera a pressão arterial média."
    ],
    "nursingApplication": "Aplicação clínica diária de promoção de autonomia com segurança durante a reabilitação funcional."
  },
  {
    "id": 1200,
    "topicId": 1,
    "question": "Ao levantar uma carga do chão, por que razão o enfermeiro deve fletir os joelhos e ancas em vez de dobrar a coluna dorsal/lombar?",
    "options": [
      "Baixa o centro de gravidade, mantém a carga junto ao corpo e usa os músculos das pernas.",
      "Aumenta a velocidade de rotação da coluna, acelerando o levantamento em menos de 0,1 segundo.",
      "Permite que a gravidade atue na horizontal, aliviando todo o peso do objeto.",
      "Elimina a força normal entre o calçado e o chão hospitalar."
    ],
    "correctIndex": 0,
    "explanation": "Fletir os joelhos e manter a coluna em posição neutra reúne os princípios de equilíbrio e ergonomia: 1. Baixa o CG; 2. Mantém a carga junto ao corpo e a linha de gravidade centrada; 3. Reduz o braço da força resistente sobre as vértebras (M = F · b), reduzindo o momento sobre a coluna lombar e o risco de lesões laborais.",
    "distractorAnalysis": [
      "Está incorreta: Rodar a coluna aumenta o risco de lesão, e o levantamento não se faz em menos de 0,1 segundo.",
      "Está incorreta: A gravidade atua na vertical e não alivia o peso do objeto.",
      "Está incorreta: A força normal não se elimina; o chão continua a suportar o corpo."
    ],
    "nursingApplication": "Aplica-se ao levantar do chão uma caixa de material ou um saco de roupa: agachar com a carga junto ao corpo reduz o momento flexor sobre a coluna lombar."
  }
];
