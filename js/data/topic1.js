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
    "question": "Qual é a definição de Mecânica no âmbito dos conceitos fundamentais da Biofísica?",
    "options": [
      "Estuda a composição celular e a estrutura atómica dos tecidos biológicos.",
      "Estuda as relações entre os movimentos dos corpos e as forças a eles associadas.",
      "Analisa exclusivamente a temperatura corporal e as trocas de calor metabólicas.",
      "Investiga a velocidade das reações químicas celulares e atividade enzimática."
    ],
    "correctIndex": 1,
    "explanation": "Na mecânica clássica, a Mecânica define-se formalmente como o ramo que 'estuda as relações entre os movimentos dos corpos e as forças a eles associadas'.",
    "distractorAnalysis": [
      "Está incorreta: A estrutura celular e atómica é objeto de estudo da biologia e química celular, não da mecânica.",
      "Está incorreta: O estudo do calor e temperatura pertence à termodinâmica, não aos conceitos fundamentais da mecânica.",
      "Está incorreta: A velocidade de reações enzimáticas é domínio da cinética bioquímica, não da mecânica."
    ],
    "nursingApplication": "Ajuda a analisar as forças musculares e os movimentos corporais envolvidos nas atividades diárias e mobilizações."
  },
  {
    "id": 1002,
    "topicId": 1,
    "question": "Como se define 'Força' no âmbito dos conceitos fundamentais da Biofísica?",
    "options": [
      "Quantidade total de matéria constituinte de um organismo ou objeto.",
      "Taxa temporal de variação do metabolismo energético basal do corpo.",
      "Interação entre corpos capaz de alterar o seu estado.",
      "Energia térmica armazenada num corpo em repouso absoluto."
    ],
    "correctIndex": 2,
    "explanation": "A Força é a 'interação entre corpos capaz de alterar o seu estado' de repouso ou de movimento.",
    "distractorAnalysis": [
      "Está incorreta: A quantidade de matéria constitui a definição física de massa, não de força.",
      "Está incorreta: A taxa de variação de energia metabólica refere-se à potência metabólica, não à força mecânica.",
      "Está incorreta: A energia térmica interna é uma grandeza termodinâmica escalar, distinta da interação mecânica de força."
    ],
    "nursingApplication": "Permite compreender como a interação mecânica entre o profissional e o utente produz ou trava o movimento."
  },
  {
    "id": 1003,
    "topicId": 1,
    "question": "Qual é o instrumento clássico utilizado na física mecânica para quantificar a intensidade de uma força?",
    "options": [
      "Esfigmomanómetro.",
      "Termómetro clínico.",
      "Goniómetro articulado.",
      "Dinamómetro."
    ],
    "correctIndex": 3,
    "explanation": "Apresenta-se o 'Dinamómetro' como o instrumento físico clássico destinado a medir a intensidade de forças.",
    "distractorAnalysis": [
      "Está incorreta: O esfigmomanómetro mede a pressão arterial em mmHg, não forças diretamente.",
      "Está incorreta: O termómetro mede a temperatura corporal em graus Celsius.",
      "Está incorreta: O goniómetro é usado para medir ângulos de amplitude articular, não a intensidade de forças."
    ],
    "nursingApplication": "O princípio do dinamómetro é aplicado em aparelhos de medição da força de preensão palmar em doentes em reabilitação."
  },
  {
    "id": 1004,
    "topicId": 1,
    "question": "Em que princípio físico assenta o funcionamento de um dinamómetro de mola convencional?",
    "options": [
      "Na deformação elástica de uma mola calibrada proporcionalmente à intensidade da força aplicada.",
      "Na variação do volume de um líquido sob aquecimento contínuo.",
      "Na contagem de impulsos elétricos gerados por desintegração radioativa.",
      "Na rotação de um disco condutor sob a ação de um campo magnético constante."
    ],
    "correctIndex": 0,
    "explanation": "Um dinamómetro opera com base na Lei de Hooke: a deformação elástica (alongamento) da sua mola interna é diretamente proporcional à intensidade da força aplicada.",
    "distractorAnalysis": [
      "Está incorreta: A dilatação térmica de líquidos é o princípio de funcionamento dos termómetros clássicos de mercúrio ou álcool.",
      "Está incorreta: A contagem de impulsos radioativos é o princípio dos detetores Geiger, sem relação com dinamómetros.",
      "Está incorreta: A indução eletromagnética em discos condutores é usada em motores e contadores elétricos, não em dinamómetros."
    ],
    "nursingApplication": "Compreender a calibração de sensores de força é útil ao operar camas hospitalares inteligentes com balança integrada."
  },
  {
    "id": 1005,
    "topicId": 1,
    "question": "No âmbito da formação em saúde, qual é um dos principais objetivos do estudo da Mecânica na Biofísica?",
    "options": [
      "Sintetizar novos compostos farmacológicos orgânicos em laboratório.",
      "Conhecer princípios científicos da mecânica e aplicá-los à anatomia humana e terapêutica.",
      "Calcular a dosagem de fármacos com base no pH dos fluidos gastrointestinais.",
      "Analisar as sequências genéticas de microrganismos patogénicos hospitalares."
    ],
    "correctIndex": 1,
    "explanation": "Define-se que um dos objetivos é 'Conhecer os princípios científicos nos campos da Mecânica (...) e aplicar esses princípios à anatomia humana e terapêutica'.",
    "distractorAnalysis": [
      "Está incorreta: A síntese farmacológica é do âmbito da química farmacêutica e bioquímica.",
      "Está incorreta: O cálculo de dosagens e pH pertence à farmacologia e bioquímica de soluções.",
      "Está incorreta: A sequenciação genética é do domínio da genética molecular e microbiologia."
    ],
    "nursingApplication": "Fundamenta as boas práticas de ergonomia e prevenção de lesões musculoesqueléticas na equipa de saúde."
  },
  {
    "id": 1006,
    "topicId": 1,
    "question": "Na mecânica clássica, que efeito físico direto pode uma força não equilibrada produzir quando aplicada sobre um corpo?",
    "options": [
      "Apenas o aumento imediato da sua massa molecular inercial.",
      "Exclusivamente a transformação da sua matéria em radiação térmica.",
      "Alterar o seu estado de repouso ou de movimento, produzindo aceleração ou deformação.",
      "Anular instantaneamente todas as interações atómicas do corpo."
    ],
    "correctIndex": 2,
    "explanation": "Uma força atua como agente capaz de alterar o estado de repouso ou movimento de um corpo (produzindo aceleração) ou causar deformação mecânica na sua estrutura.",
    "distractorAnalysis": [
      "Está incorreta: A massa é uma grandeza escalar intrínseca que não se altera pela aplicação de forças comuns.",
      "Está incorreta: A conversão de matéria em radiação ocorre em reações nucleares de alta energia, não por forças mecânicas.",
      "Está incorreta: Forças mecânicas externas não anulam as forças de coesão atómica da matéria."
    ],
    "nursingApplication": "Mobilizar um utente no leito exige a aplicação de uma força externa controlada para vencer a inércia do repouso."
  },
  {
    "id": 1007,
    "topicId": 1,
    "question": "Qual é a unidade padrão do Sistema Internacional (SI) utilizada para quantificar a intensidade da grandeza Força?",
    "options": [
      "Quilograma (kg).",
      "Pascal (Pa).",
      "Joule (J).",
      "Newton (N)."
    ],
    "correctIndex": 3,
    "explanation": "No Sistema Internacional (SI), a unidade padrão de força é o Newton (N), conforme estabelecido nas unidades do Sistema Internacional.",
    "distractorAnalysis": [
      "Está incorreta: O quilograma (kg) é a unidade SI de massa, que quantifica a quantidade de matéria.",
      "Está incorreta: O Pascal (Pa) é a unidade SI de pressão (força por unidade de área).",
      "Está incorreta: O Joule (J) é a unidade SI de energia e trabalho mecânico."
    ],
    "nursingApplication": "Garante a correta interpretação de parâmetros de esforço e tração prescritos em equipamentos de tração ortopédica."
  },
  {
    "id": 1008,
    "topicId": 1,
    "question": "Se a resultante de todas as forças que atuam sobre um corpo for nula, o que acontece ao seu estado mecânico?",
    "options": [
      "Permanece em repouso ou em movimento retilíneo e uniforme.",
      "Ganha necessariamente uma aceleração crescente contínua.",
      "Entra imediatamente em rotação rápida em torno do seu eixo.",
      "Aumenta espontaneamente o seu peso por ação da gravidade."
    ],
    "correctIndex": 0,
    "explanation": "Quando a força resultante é nula (Fr = 0), o corpo mantém o seu estado de repouso ou continua em movimento retilíneo uniforme (MRU), de acordo com a 1ª Lei de Newton.",
    "distractorAnalysis": [
      "Está incorreta: Aceleração exige uma força resultante não nula (Fr = m · a); se Fr = 0, a aceleração é rigorosamente nula.",
      "Está incorreta: Rotação exige um momento de força resultante não nulo; sem forças resultantes o corpo não inicia rotação.",
      "Está incorreta: O peso depende da massa e gravidade local, não sofrendo alteração por equilíbrio de forças."
    ],
    "nursingApplication": "Explica por que uma maca parada numa superfície horizontal nivelada não se move sem intervenção externa."
  },
  {
    "id": 1009,
    "topicId": 1,
    "question": "Qual é a distinção concetual fundamental entre Mecânica e Reologia no estudo da Biofísica?",
    "options": [
      "A Mecânica analisa a eletricidade corporal e a Reologia estuda a radioatividade.",
      "A Mecânica estuda forças e movimentos de corpos, enquanto a Reologia estuda reações dos corpos a forças deformadoras.",
      "A Mecânica estuda fluidos estáticos e a Reologia estuda exclusivamente os raios X.",
      "A Mecânica estuda a estrutura do ADN e a Reologia estuda a fusão nuclear."
    ],
    "correctIndex": 1,
    "explanation": "A Mecânica debruça-se sobre forças e alterações de movimento/equilíbrio, ao passo que a Reologia estuda as reações dos corpos a forças deformadoras.",
    "distractorAnalysis": [
      "Está incorreta: Eletricidade e radioatividade são temas de bioeletrogénese e física nuclear, não de mecânica.",
      "Está incorreta: Fluidos estáticos são o objeto da hidrostática e raios X são tema de radiação médica.",
      "Está incorreta: O ADN é do foro da bioquímica e genética, e fusão nuclear da física do núcleo atómico."
    ],
    "nursingApplication": "Permite distinguir se um esforço mecânico gera deslocamento de um doente ou deformação de tecidos de suporte."
  },
  {
    "id": 1010,
    "topicId": 1,
    "question": "Ao utilizar um dinamómetro manual para avaliar um utente, o visor regista 50 N. O que indica fisicamente este valor?",
    "options": [
      "Que a massa do utente é de exatamente 50 quilogramas.",
      "Que a pressão exercida na mão do utente é de 50 Pascal.",
      "Que a intensidade da força mecânica exercida na mola do dinamómetro é de 50 Newtons.",
      "Que a velocidade com que a mão se fechou foi de 50 metros por segundo."
    ],
    "correctIndex": 2,
    "explanation": "O valor de 50 N indica diretamente a intensidade (módulo) da força de tração ou compressão mecânica exercida na mola do aparelho.",
    "distractorAnalysis": [
      "Está incorreta: Quilogramas medem massa, não força; 50 N correspondem ao peso de cerca de 5,1 kg na Terra.",
      "Está incorreta: Pascal mede pressão (N/m²); o dinamómetro mede força concentrada em Newtons.",
      "Está incorreta: Metros por segundo é a unidade de velocidade, grandeza cinemática diferente de força."
    ],
    "nursingApplication": "Útil para registar a evolução do ganho de força muscular de um doente em recuperação funcional."
  },
  {
    "id": 1011,
    "topicId": 1,
    "question": "Quais são os quatro elementos essenciais que caracterizam plenamente uma grandeza vetorial como a Força?",
    "options": [
      "Massa, aceleração, velocidade e tempo de atuação.",
      "Volume, densidade, temperatura e calor específico.",
      "Área de contacto, pressão, viscosidade e atrito.",
      "Intensidade (módulo), direção, sentido e ponto de aplicação."
    ],
    "correctIndex": 3,
    "explanation": "Todo o vetor físico é plenamente definido por quatro componentes: intensidade (módulo ou valor numérico com unidade), direção (reta de suporte), sentido (orientação na reta) e ponto de aplicação.",
    "distractorAnalysis": [
      "Está incorreta: Massa é escalar; aceleração e velocidade são outros vetores, não componentes intrínsecos de um vetor de força.",
      "Está incorreta: Volume, densidade e temperatura são grandezas físicas puramente escalares.",
      "Está incorreta: Área, pressão e viscosidade são grandezas que não definem a estrutura de um vetor."
    ],
    "nursingApplication": "Essencial para posicionar corretamente membros em tração esquelética sem desviar a linha da força."
  },
  {
    "id": 1012,
    "topicId": 1,
    "question": "Qual é a definição anatómica e funcional exata de 'Tendão' na transmissão mecânica de forças?",
    "options": [
      "Tecido conjuntivo que conecta um músculo a um osso.",
      "Tecido epitelial impermeável que reveste as cavidades articulares.",
      "Bainha de mielina condutora de impulsos elétricos nervosos.",
      "Estrutura óssea esponjosa onde ocorre a hematopoiese."
    ],
    "correctIndex": 0,
    "explanation": "Define-se expressamente o tendão como: 'Tecido conjuntivo que conecta um músculo a um osso'.",
    "distractorAnalysis": [
      "Está incorreta: O revestimento das cavidades articulares é feito pela membrana sinovial, não pelo tendão.",
      "Está incorreta: A condução elétrica é feita pelos axónios com bainha de mielina no sistema nervoso.",
      "Está incorreta: A medula óssea vermelha realiza a hematopoiese no interior do osso trabecular."
    ],
    "nursingApplication": "O tendão transmite a força gerada pelas fibras musculares ao esqueleto, viabilizando o movimento humano."
  },
  {
    "id": 1013,
    "topicId": 1,
    "question": "Como atua fisicamente a força de tração transmitida por um tendão muscular ao osso em que se insere?",
    "options": [
      "Como uma pressão omnidirecional que expande o volume do osso.",
      "Como um vetor de força com ponto de aplicação na inserção óssea e direção ao longo da linha do tendão.",
      "Como uma força de gravidade adicional que altera a massa do esqueleto.",
      "Como uma corrente puramente elétrica sem componente de atração mecânica."
    ],
    "correctIndex": 1,
    "explanation": "A tração do tendão é representada por um vetor de força cuja linha de ação segue o alinhamento das fibras do tendão e cujo ponto de aplicação coincide com a tuberosidade óssea de inserção.",
    "distractorAnalysis": [
      "Está incorreta: A força de um tendão é direcional e trativa, não uma pressão que expande o volume ósseo.",
      "Está incorreta: As forças tendinosas são geradas por contração de fibras musculares, não alterando a gravidade nem a massa.",
      "Está incorreta: A transmissão tendinosa é puramente mecânica, resultante da contração ativa do músculo."
    ],
    "nursingApplication": "Ajuda a compreender como a angulação de uma articulação altera o ângulo de tração e a eficácia do movimento."
  },
  {
    "id": 1014,
    "topicId": 1,
    "question": "Qual é a diferença física entre 'Direção' e 'Sentido' de um vetor de força na dinâmica?",
    "options": [
      "Direção é o valor numérico em Newtons e Sentido é o instrumento que mede a força.",
      "Direção e Sentido são termos rigorosamente sinónimos na física e no estudo de vetores.",
      "Direção é a reta geométrica de suporte (ex.: horizontal) e Sentido é a orientação ao longo dessa reta (ex.: esquerda para a direita).",
      "Direção refere-se exclusivamente ao peso e Sentido refere-se exclusivamente ao atrito."
    ],
    "correctIndex": 2,
    "explanation": "A direção define a linha reta sobre a qual a força atua (ex.: horizontal, vertical ou oblíqua a 45º); o sentido indica para onde a seta aponta ao longo dessa linha (ex.: de baixo para cima).",
    "distractorAnalysis": [
      "Está incorreta: O valor numérico em Newtons é a intensidade (ou módulo), não a direção.",
      "Está incorreta: Na física vetorial, direção e sentido são propriedades distintas e não sinónimas.",
      "Está incorreta: Todas as forças vetoriais possuem direção e sentido, não apenas o peso ou o atrito."
    ],
    "nursingApplication": "Evita equívocos na comunicação entre profissionais sobre a direção e o sentido ao puxar ou empurrar uma maca."
  },
  {
    "id": 1015,
    "topicId": 1,
    "question": "Ao representar a força que o tendão rotuliano exerce sobre a tíbia, onde se situa o ponto de aplicação do vetor?",
    "options": [
      "No centro da terra por atração gravítica.",
      "No corpo muscular do quadríceps na face anterior da coxa.",
      "No ar, a meio caminho entre o músculo e o pé.",
      "Na tuberosidade anterior da tíbia, onde o tendão se fixa ao osso."
    ],
    "correctIndex": 3,
    "explanation": "O ponto de aplicação de uma força de contacto exercida por um tendão localiza-se na sua zona de inserção anatómica no osso correspondente.",
    "distractorAnalysis": [
      "Está incorreta: O centro da Terra é o ponto onde se considera a origem do campo gravitacional, não a fixação tendinosa.",
      "Está incorreta: O ventre muscular é a origem da tensão ativa, mas a força que atua na tíbia aplica-se onde o tendão nela se fixa.",
      "Está incorreta: Forças de contacto mecânico só se aplicam na interface física entre as estruturas em contacto."
    ],
    "nursingApplication": "Importante ao avaliar pontos de sobrecarga mecânica e tendinites de inserção no sistema locomotor."
  },
  {
    "id": 1016,
    "topicId": 1,
    "question": "Dois enfermeiros puxam uma maca na mesma direção horizontal com forças de 60 N cada um, mas em sentidos opostos. Qual é a força resultante?",
    "options": [
      "0 N, pelo que a maca permanece em repouso.",
      "120 N no sentido do profissional mais jovem.",
      "60 N para a direita acelerando a maca.",
      "3600 N por multiplicação das intensidades."
    ],
    "correctIndex": 0,
    "explanation": "Na mesma direção com sentidos opostos, os vetores subtraem-se: Fr = 60 N - 60 N = 0 N. A força resultante é nula e a maca não se move.",
    "distractorAnalysis": [
      "Está incorreta: A soma vetorial de forças em sentidos contrários subtrai os módulos, não os soma.",
      "Está incorreta: Como as intensidades são idênticas (60 N e 60 N), não sobra nenhuma força resultante residual.",
      "Está incorreta: Forças sobre uma mesma reta somam-se algebricamente com sinal, nunca se multiplicam para obter a resultante."
    ],
    "nursingApplication": "Mostra a necessidade de coordenação de equipa: esforços com sentidos opostos anulam-se e causam fadiga inútil."
  },
  {
    "id": 1017,
    "topicId": 1,
    "question": "Por que razão a força muscular não pode ser expressa apenas como um número simples (grandeza escalar)?",
    "options": [
      "Porque a força muscular muda de unidade de medida a cada segundo.",
      "Porque o seu efeito no osso depende criticamente da direção, sentido e ponto de aplicação do vetor de tração.",
      "Porque as grandezas escalares só existem na física nuclear e química celular.",
      "Porque os músculos produzem apenas grandezas imaginárias sem efeito real no corpo."
    ],
    "correctIndex": 1,
    "explanation": "A força é uma grandeza vetorial: conhecer apenas a intensidade (ex.: 100 N) não permite saber se o osso vai fletir, estender ou rodar, dependendo da linha e ponto de tração.",
    "distractorAnalysis": [
      "Está incorreta: A unidade de força no SI é sempre o Newton (N) e não varia com o tempo.",
      "Está incorreta: Grandezas escalares existem amplamente na mecânica clássica, como a massa, tempo e energia.",
      "Está incorreta: As forças musculares são interações físicas reais observáveis e mensuráveis."
    ],
    "nursingApplication": "Ajuda a planear exercícios de reabilitação ajustando o ângulo em que o músculo traciona o membro."
  },
  {
    "id": 1018,
    "topicId": 1,
    "question": "Qual é o papel mecânico do tecido conjuntivo tendinoso na transmissão da força motriz muscular ao esqueleto?",
    "options": [
      "Gera contração ativa independente através de filamentos de actina.",
      "Substitui a necessidade de apoio articular entre os ossos.",
      "Transmite a tração gerada pelo músculo esquelético diretamente à alavanca óssea.",
      "Produz líquido sinovial para lubrificar as vértebras lombares."
    ],
    "correctIndex": 2,
    "explanation": "O tendão funciona como o transmissor mecânico de tração entre o músculo (gerador de força ativa) e o osso (alavanca rígida que produz movimento articular).",
    "distractorAnalysis": [
      "Está incorreta: Os tendões são constituídos por colagénio passivo e não possuem capacidade contrátil ativa de actina/miosina.",
      "Está incorreta: As articulações são indispensáveis como eixos de rotação (fulcros) do movimento esquelético.",
      "Está incorreta: O líquido sinovial é produzido pela membrana sinovial articular, não pelos tendões."
    ],
    "nursingApplication": "Permite entender lesões por esforço repetitivo em tendões submetidos a tensões mecânicas elevadas."
  },
  {
    "id": 1019,
    "topicId": 1,
    "question": "Como se representa graficamente um vetor de força na física mecânica?",
    "options": [
      "Por um círculo cujo diâmetro representa a velocidade do corpo.",
      "Por uma curva ondulatória representativa do comprimento de onda.",
      "Por um gráfico tridimensional de distribuição de calor corporal.",
      "Por um segmento de reta orientado (seta) com origem, comprimento, inclinação e ponta."
    ],
    "correctIndex": 3,
    "explanation": "Graficamente, o vetor representa-se por um segmento orientado: o comprimento indica o módulo/intensidade, a inclinação da reta define a direção, a seta aponta o sentido e a origem fixa o ponto de aplicação.",
    "distractorAnalysis": [
      "Está incorreta: Círculos não indicam direção nem sentido unidirecional de uma força mecânica.",
      "Está incorreta: Linhas ondulatórias são usadas para ondas eletromagnéticas e sonoras, não para vetores de força.",
      "Está incorreta: Mapas tridimensionais de calor são termografias, pertencentes à termologia médica."
    ],
    "nursingApplication": "Permite desenhar diagramas de corpo livre simples para analisar a postura e a distribuição de cargas no trabalho."
  },
  {
    "id": 1020,
    "topicId": 1,
    "question": "Se o ângulo de inserção de um tendão relativamente à diáfise óssea se alterar durante uma flexão articular, o que acontece à componente de força que produz rotação?",
    "options": [
      "Varia, pois as componentes vetoriais dependem da inclinação geométrica do vetor em relação ao osso.",
      "Permanece rigorosamente inalterada independentemente de qualquer ângulo do membro.",
      "Anula-se instantaneamente impedindo qualquer movimento articular futuro.",
      "Transforma-se espontaneamente numa força nuclear fraca no interior do osso."
    ],
    "correctIndex": 0,
    "explanation": "À medida que a articulação dobra, o ângulo do vetor de força tendinoso muda, alterando a proporção de força útil para rodar o osso (componente perpendicular) e de força de compressão articular.",
    "distractorAnalysis": [
      "Está incorreta: As componentes de um vetor dependem das funções trigonométricas do ângulo, mudando quando o ângulo varia.",
      "Está incorreta: A força não se anula, apenas redistribui as suas componentes geométricas ao longo do arco de movimento.",
      "Está incorreta: Forças nucleares ocorrem apenas no interior de núcleos atómicos e não derivam de ângulos articulares."
    ],
    "nursingApplication": "Explica por que em certos ângulos articulares conseguimos fazer mais força do que noutros com o mesmo esforço muscular."
  },
  {
    "id": 1021,
    "topicId": 1,
    "question": "Qual é o enunciado formal da 1.ª Lei de Newton (Lei da Inércia)?",
    "options": [
      "A aceleração de um corpo é diretamente proporcional à força resultante e inversamente à sua massa.",
      "Um corpo em repouso permanece em repouso e um corpo em movimento permanece em movimento, a menos que uma força externa atue sobre ele.",
      "A toda a ação mecânica opõe-se sempre uma reação de menor intensidade e direção perpendicular.",
      "A energia total de um sistema isolado dissipa-se invariavelmente sob a forma de calor."
    ],
    "correctIndex": 1,
    "explanation": "Define-se a 1ª Lei de Newton (Lei da Inércia): 'Um corpo em repouso permanece em repouso e um corpo em movimento permanece em movimento, a menos que uma força externa atue sobre ele'.",
    "distractorAnalysis": [
      "Está incorreta: A relação aceleração-força-massa constitui a 2ª Lei de Newton (F = m · a).",
      "Está incorreta: A ação e reação têm igual intensidade e mesma direção, conforme a 3ª Lei de Newton.",
      "Está incorreta: A conservação ou dissipação de energia é o princípio da termodinâmica, não a Lei da Inércia."
    ],
    "nursingApplication": "Fundamenta o uso de cintos de segurança no transporte de doentes em cadeiras de rodas e ambulâncias."
  },
  {
    "id": 1022,
    "topicId": 1,
    "question": "Em termos conceituais simples, como se define a 'Inércia' de um corpo material?",
    "options": [
      "Os corpos tendem espontaneamente a perder massa quando entram em movimento acelerado.",
      "Todos os materiais rígidos têm capacidade de atrair corpos vizinhos através de campos magnéticos.",
      "Os corpos têm resistência à mudança do seu estado de movimento; é necessária uma força para o alterar.",
      "A inércia é a velocidade instantânea medida por um velocímetro num dado momento."
    ],
    "correctIndex": 2,
    "explanation": "O resume: 'Por outras palavras: Os corpos têm resistência à mudança do seu estado de movimento (inércia). É necessária uma força para o alterar!'.",
    "distractorAnalysis": [
      "Está incorreta: A inércia não provoca perda de massa; a massa é a medida quantitativa da própria inércia.",
      "Está incorreta: A atração magnética é propriedade de campos eletromagnéticos, distinta da inércia mecânica universal.",
      "Está incorreta: Velocidade instantânea é uma grandeza cinemática, ao passo que inércia é a resistência à variação do movimento."
    ],
    "nursingApplication": "Mostra porque é necessário aplicar uma força inicial considerável para colocar em movimento uma cama hospitalar pesada."
  },
  {
    "id": 1023,
    "topicId": 1,
    "question": "O que é estritamente necessário para alterar a velocidade (em módulo, direção ou sentido) de um corpo material?",
    "options": [
      "Manter o corpo em equilíbrio mecânico com força resultante nula.",
      "Apenas aguardar a passagem natural do tempo no referencial.",
      "Isolar termicamente o corpo de todas as fontes de radiação solar.",
      "A atuação de uma força externa resultante que atue sobre ele."
    ],
    "correctIndex": 3,
    "explanation": "Pela 1ª Lei de Newton, na ausência de forças externas resultantes, o estado de movimento permanece constante. Para alterar a velocidade, é indispensável a atuação de uma força resultante externa.",
    "distractorAnalysis": [
      "Está incorreta: Com força resultante nula o corpo permanece em MRU ou repouso, não alterando a sua velocidade.",
      "Está incorreta: O tempo decorre sem que o corpo mude de velocidade se nenhuma força atuar sobre ele.",
      "Está incorreta: O isolamento térmico impede trocas de calor, mas não induz acelerações mecânicas."
    ],
    "nursingApplication": "Explica por que travar uma cadeira de rodas requer a força de atrito exercida pelos travões sobre as rodas."
  },
  {
    "id": 1024,
    "topicId": 1,
    "question": "Se um carrinho de penso for empurrado num corredor plano ideal sem qualquer atrito ou resistência do ar, o que prevê a 1ª Lei de Newton?",
    "options": [
      "Que continuaria em movimento retilíneo uniforme com velocidade constante indefinidamente.",
      "Que pararia espontaneamente após alguns metros por cansaço inercial.",
      "Que começaria a acelerar cada vez mais depressa sem qualquer força aplicada.",
      "Que inverteria imediatamente o sentido de marcha de forma espontânea."
    ],
    "correctIndex": 0,
    "explanation": "Sem forças contrárias de atrito ou resistência para desacelerar o corpo, a 1ª Lei afirma que este continuará indefinidamente em movimento retilíneo uniforme (velocidade constante).",
    "distractorAnalysis": [
      "Está incorreta: A matéria não tem 'cansaço'; na física real os objetos param devido à força de atrito, não espontaneamente.",
      "Está incorreta: Acelerar exigiria uma força resultante no sentido do movimento (F = m · a), ausente na situação descrita.",
      "Está incorreta: Inverter o sentido requer aplicação de força externa contrária."
    ],
    "nursingApplication": "Ajuda a perceber que as macas no mundo real desaceleram devido ao atrito do pavimento e dos eixos das rodas."
  },
  {
    "id": 1025,
    "topicId": 1,
    "question": "Por que razão uma cadeira de rodas parada num piso horizontal nivelado não começa a mover-se sozinha?",
    "options": [
      "Porque a força nuclear forte a cola permanentemente ao pavimento da enfermaria.",
      "Porque possui inércia e, estando em repouso, permanece em repouso a menos que uma força externa atue.",
      "Porque a sua massa inercial é convertida em energia gravitacional que a imobiliza.",
      "Porque a pressão atmosférica exerce uma força descendente infinita sobre o assento."
    ],
    "correctIndex": 1,
    "explanation": "Em repouso e com forças resultantes equilibradas (peso e normal), a inércia do corpo mantém-no em repouso até que alguém lhe aplique uma força externa.",
    "distractorAnalysis": [
      "Está incorreta: A força nuclear forte atua unicamente a distâncias subatómicas no interior do núcleo dos átomos.",
      "Está incorreta: Não há conversão de massa em energia nas situações de repouso mecânico da vida quotidiana.",
      "Está incorreta: A pressão atmosférica atua uniformemente em todas as direções com valor finito (~1 atm), sem imobilizar objetos."
    ],
    "nursingApplication": "Garante a estabilidade previsível dos equipamentos parados quando travados adequadamente."
  },
  {
    "id": 1026,
    "topicId": 1,
    "question": "Que célebre físico formulou as Leis do Movimento e da Gravitação e proferiu a frase: 'Se vi mais longe, foi por estar de pé sobre os ombros de gigantes'?",
    "options": [
      "Arquimedes.",
      "Robert Hooke.",
      "Isaac Newton.",
      "Euclides de Alexandria."
    ],
    "correctIndex": 2,
    "explanation": "O introduz as Leis do Movimento com a célebre citação de Isaac Newton: 'Se vi mais longe, foi por estar de pé sobre os ombros de gigantes'.",
    "distractorAnalysis": [
      "Está incorreta: Arquimedes é citado no Tópico 1 na secção das alavancas ('século III a.C.').",
      "Está incorreta: Robert Hooke é o cientista associado à Lei da Elasticidade ('Hooke, 1660').",
      "Está incorreta: Euclides é associado aos modelos teóricos indeformáveis da geometria e reologia."
    ],
    "nursingApplication": "Contextualiza historicamente a evolução da física clássica aplicada às ciências da vida e saúde."
  },
  {
    "id": 1027,
    "topicId": 1,
    "question": "Qual é a grandeza física fundamental que serve de medida quantitativa da inércia de um corpo material?",
    "options": [
      "O volume ocupado no espaço.",
      "A temperatura termodinâmica.",
      "A velocidade angular de rotação.",
      "A massa do corpo (m)."
    ],
    "correctIndex": 3,
    "explanation": "A massa é a propriedade intrínseca que quantifica a inércia: quanto maior for a massa de um corpo, maior é a sua resistência a alterações do seu estado de repouso ou movimento.",
    "distractorAnalysis": [
      "Está incorreta: Dois corpos com o mesmo volume podem ter densidades e massas completamente diferentes, logo inércias distintas.",
      "Está incorreta: A temperatura indica o grau de agitação molecular, não quantificando a inércia de translação do corpo.",
      "Está incorreta: A velocidade angular descreve o movimento rotativo, não sendo a medida intrínseca da inércia de matéria."
    ],
    "nursingApplication": "Explica por que doentes com maior massa corporal exigem maior contenção e apoio em manobras de transferência."
  },
  {
    "id": 1028,
    "topicId": 1,
    "question": "Um utente está confortavelmente deitado no seu leito hospitalar. Qual é a força resultante que atua sobre o seu corpo?",
    "options": [
      "Zero Newtons (Fr = 0 N), pois o corpo está em equilíbrio estático de repouso.",
      "Igual ao peso do utente multiplicado pela velocidade da luz.",
      "Infinita, porque a gravidade terrestre nunca cessa de atuar.",
      "Igual à força muscular dos membros superiores do profissional."
    ],
    "correctIndex": 0,
    "explanation": "Estando em repouso estático, a aceleração é nula e a soma vetorial de todas as forças que nele atuam (peso do doente e força normal exercida pelo colchão) é nula: Fr = 0 N.",
    "distractorAnalysis": [
      "Está incorreta: Multiplicar peso pela velocidade da luz não tem qualquer significado físico em mecânica clássica.",
      "Está incorreta: A força gravítica tem valor finito bem determinado (P = m · g) e é equilibrada pela força normal do colchão.",
      "Está incorreta: Se ninguém estiver a tocar no utente, a força muscular de terceiros não atua sobre o corpo dele."
    ],
    "nursingApplication": "Compreender o equilíbrio estático no leito é a base para a prevenção de desalinhamentos posturais."
  },
  {
    "id": 1029,
    "topicId": 1,
    "question": "Ao travar bruscamente um veículo, os passageiros desprovidos de cinto são projetados para a frente. Como se explica isto pela 1ª Lei de Newton?",
    "options": [
      "Os passageiros sofrem uma força mística que os atrai para o vidro da frente.",
      "Por inércia, o corpo dos passageiros mantém a velocidade que trazia até que uma força externa o pare.",
      "A gravidade terrestre deixa de atuar temporariamente durante o ato de travar.",
      "O veículo acelera subitamente para a frente empurrando as pessoas."
    ],
    "correctIndex": 1,
    "explanation": "Quando o veículo trava, as rodas travam o chassis; contudo, o corpo do passageiro, por inércia (1ª Lei), continua o seu movimento com a velocidade prévia até colidir com algum obstáculo ou ser retido pelo cinto.",
    "distractorAnalysis": [
      "Está incorreta: Não há forças místicas; trata-se da conservação do estado de movimento pela inércia descrita por Newton.",
      "Está incorreta: A aceleração da gravidade mantém-se constante (g ≈ 9,8 m/s²) atuando na vertical.",
      "Está incorreta: Travar significa desacelerar o veículo, não acelerá-lo para a frente."
    ],
    "nursingApplication": "Reforça a justificação científica inegável do uso de cintos de segurança no transporte sanitário."
  },
  {
    "id": 1030,
    "topicId": 1,
    "question": "Para que um objeto em movimento altere a sua trajetória retilínea e faça uma curva, o que estabelece a 1ª Lei de Newton?",
    "options": [
      "Não é necessária nenhuma força, pois os corpos curvam espontaneamente no vácuo.",
      "Apenas que a sua massa diminua para metade durante a rotação.",
      "É indispensável a atuação de uma força externa que mude a direção do vetor velocidade.",
      "Basta que o objeto mantenha aceleração rigorosamente nula durante toda a curva."
    ],
    "correctIndex": 2,
    "explanation": "O movimento natural livre de forças é retilíneo e uniforme. Mudar a direção do vetor velocidade (fazer curva) requer aceleração e, portanto, uma força externa não nula a atuar sobre o corpo.",
    "distractorAnalysis": [
      "Está incorreta: Objetos livres de forças seguem em linha reta; curvar exige sempre a atuação de forças.",
      "Está incorreta: A massa não varia ao fazer uma curva numa trajetória mecânica comum.",
      "Está incorreta: Ao curvar a velocidade muda de direção, logo há aceleração centrípeta e a aceleração não pode ser nula."
    ],
    "nursingApplication": "Explica por que conduzir uma maca numa curva num corredor hospitalar exige puxar lateralmente o equipamento."
  },
  {
    "id": 1031,
    "topicId": 1,
    "question": "Qual é a expressão matemática fundamental da 2.ª Lei de Newton (Lei Fundamental da Dinâmica)?",
    "options": [
      "P = m / g",
      "M = F / b",
      "P = F · A",
      "F = m · a"
    ],
    "correctIndex": 3,
    "explanation": "A expressão clássica da 2ª Lei de Newton (Lei fundamental da dinâmica) na dinâmica é F = m · a (força igual a massa multiplicada pela aceleração).",
    "distractorAnalysis": [
      "Está incorreta: A fórmula do peso é P = m · g (multiplicação, não divisão).",
      "Está incorreta: A fórmula do momento é M = F · b (multiplicação, não divisão).",
      "Está incorreta: A fórmula da pressão é p = F / A (divisão de força por área, não multiplicação)."
    ],
    "nursingApplication": "Permite calcular a força necessária para acelerar ou desacelerar equipamentos clínicos em movimento."
  },
  {
    "id": 1032,
    "topicId": 1,
    "question": "Qual é o enunciado formal da 2.ª Lei de Newton relativamente à aceleração produzida por uma força num corpo?",
    "options": [
      "A força resultante que atua sobre um corpo é diretamente proporcional à aceleração que ele adquire e à sua massa.",
      "A energia de um corpo depende exclusivamente da temperatura a que ele se encontra exposto.",
      "Dois corpos em repouso atraem-se com força inversamente proporcional ao cubo das suas massas.",
      "A força de contacto entre superfícies é sempre perpendicular à linha de ação do tendão."
    ],
    "correctIndex": 0,
    "explanation": "O enuncia: 'A força resultante que atua sobre um corpo é diretamente proporcional à aceleração que ele adquire e à sua massa'.",
    "distractorAnalysis": [
      "Está incorreta: Esta afirmação refere-se à energia térmica e calorimetria, não à Lei Fundamental da Dinâmica de Newton.",
      "Está incorreta: A lei da gravitação universal é proporcional ao produto das massas e inversa ao quadrado da distância, não ao cubo.",
      "Está incorreta: A força normal é perpendicular à superfície de contacto, não se relacionando com o enunciado da 2ª Lei."
    ],
    "nursingApplication": "Compreender a dinâmica do movimento permite quantificar o impacto de arranques e travagens bruscas no doente."
  },
  {
    "id": 1033,
    "topicId": 1,
    "question": "A partir da fórmula fundamental F = m · a, como se expressa algebricamente a aceleração 'a' em função da força e da massa?",
    "options": [
      "A = F · m",
      "A = F / m",
      "A = m / F",
      "A = F + m"
    ],
    "correctIndex": 1,
    "explanation": "O deduz matematicamente as formas equivalentes da 2ª Lei: isolando a aceleração, obtém-se a = F / m.",
    "distractorAnalysis": [
      "Está incorreta: Multiplicar F por m daria uma grandeza com unidades de N·kg, o que é dimensionalmente incorreto para aceleração.",
      "Está incorreta: Inverter a fração para m / F originaria s²/m em vez de m/s², violando a análise dimensional.",
      "Está incorreta: Não se somam grandezas físicas com dimensões diferentes (Força em N e Massa em kg)."
    ],
    "nursingApplication": "Mostra que para uma mesma força aplicada, quanto maior for a massa m, menor será a aceleração adquirida a."
  },
  {
    "id": 1034,
    "topicId": 1,
    "question": "A partir da fórmula fundamental F = m · a, como se expressa algebricamente a massa 'm' em função da força e da aceleração?",
    "options": [
      "M = F · a",
      "M = a / F",
      "M = F / a",
      "M = F - a"
    ],
    "correctIndex": 2,
    "explanation": "O estabelece que, isolando a massa na equação fundamental da dinâmica, obtém-se m = F / a.",
    "distractorAnalysis": [
      "Está incorreta: Multiplicar F por a daria unidades de N·m/s², dimensionalmente inconsistente com quilogramas (kg).",
      "Está incorreta: Dividir aceleração por força (a / F) daria o inverso da massa (1/m), não a massa.",
      "Está incorreta: Subtrair grandezas com unidades diferentes (Newtons menos m/s²) é uma operação inválida na física."
    ],
    "nursingApplication": "Permite deduzir a massa inercial de um corpo a partir da medição da força e da aceleração produzida."
  },
  {
    "id": 1035,
    "topicId": 1,
    "question": "Como se aplica o princípio da 2.ª Lei de Newton (F = m · a) à mobilização e aceleração de um utente com peso elevado (utente bariátrico)?",
    "options": [
      "Utente com desnutrição calórica grave e baixa densidade óssea.",
      "Utente sujeito a tração ortopédica contínua nos membros inferiores.",
      "Utente que utiliza cadeira de rodas com rodas de diâmetro reduzido.",
      "Utente com obesidade severa."
    ],
    "correctIndex": 3,
    "explanation": ", o apontamento de aplicação prática define taxativamente: 'Utente bariátrico = Utente com obesidade severa'.",
    "distractorAnalysis": [
      "Está incorreta: Desnutrição calórica grave corresponde a baixo peso ou caquexia, o oposto de obesidade severa.",
      "Está incorreta: Tração ortopédica é um procedimento terapêutico mecânico, não uma definição de utente bariátrico.",
      "Está incorreta: O tipo de cadeira de rodas é um dispositivo de apoio e não a definição do quadro clínico do utente."
    ],
    "nursingApplication": "Contextualiza as necessidades especiais de equipamentos de transferência reforçados e apoio de mais elementos da equipa."
  },
  {
    "id": 1036,
    "topicId": 1,
    "question": "Se a massa de um utente em cadeira de rodas for o dobro da de outro, que força é necessário aplicar para lhe imprimir a mesma aceleração linear?",
    "options": [
      "O dobro da força, porque F é diretamente proporcional à massa m para a mesma aceleração.",
      "A mesma força de antes, porque a aceleração independe da massa do corpo.",
      "Metade da força, porque corpos pesados movem-se mais facilmente com menos esforço.",
      "Quatro vezes menos força, devido à compensação pelo aumento da inércia."
    ],
    "correctIndex": 0,
    "explanation": "Pela 2ª Lei (F = m · a), com a constante, duplicando a massa (2m) é indispensável duplicar a força (2F): 'Essa força será tanto maior quanto maior for a massa do corpo'.",
    "distractorAnalysis": [
      "Está incorreta: A aceleração depende diretamente da massa; com a mesma força, o corpo com dobro da massa teria metade da aceleração.",
      "Está incorreta: Corpos pesados exigem mais força, nunca menos, para acelerar à mesma taxa.",
      "Está incorreta: Maior inércia opõe maior resistência à aceleração, exigindo mais força e nunca menos."
    ],
    "nursingApplication": "Fundamenta a regra ergonómica de mobilizar doentes muito pesados com a ajuda de mais profissionais ou guincho mecânico."
  },
  {
    "id": 1037,
    "topicId": 1,
    "question": "Um enfermeiro aplica uma força resultante de 100 N a um carrinho vazio de 10 kg e depois a mesma força a um carrinho carregado de 50 kg. Como se comparam as acelerações?",
    "options": [
      "Ambos adquirem exatamente a mesma aceleração de 10 m/s².",
      "O carrinho vazio adquire 10 m/s² e o carrinho carregado adquire 2 m/s² (5 vezes menor).",
      "O carrinho carregado adquire uma aceleração 5 vezes superior à do carrinho vazio.",
      "Nenhum dos carrinhos adquire aceleração porque a força é inferior ao peso da terra."
    ],
    "correctIndex": 1,
    "explanation": "Usando a = F / m: no vazio a = 100 / 10 = 10 m/s²; no carregado a = 100 / 50 = 2 m/s². A aceleração do carrinho pesado é 5 vezes menor para a mesma força.",
    "distractorAnalysis": [
      "Está incorreta: A aceleração não pode ser igual quando as massas são diferentes e a força é a mesma (a = F/m).",
      "Está incorreta: Maior massa produz menor aceleração (proporcionalidade inversa entre a e m), nunca maior.",
      "Está incorreta: Uma força resultante não nula de 100 N produz inevitavelmente aceleração segundo a 2ª Lei de Newton."
    ],
    "nursingApplication": "Alerta o profissional para controlar com maior cautela a inércia e travagem de equipamentos hospitalares pesados."
  },
  {
    "id": 1038,
    "topicId": 1,
    "question": "Em termos conceituais diretos, como se resume o princípio fundamental da 2.ª Lei de Newton?",
    "options": [
      "Para manter um corpo em movimento, a força resultante tem de ser sempre crescente.",
      "A massa de um corpo diminui proporcionalmente à distância percorrida no tempo.",
      "Para acelerar um corpo, é necessário aplicar-lhe uma força. Essa força será tanto maior quanto maior for a massa do corpo.",
      "Todos os corpos aceleram espontaneamente a 9,8 m/s² na horizontal sem intervenção externa."
    ],
    "correctIndex": 2,
    "explanation": "O resume: 'Por outras palavras: Para acelerar um corpo, é necessário aplicar-lhe uma força. Essa força será tanto maior quanto maior for a massa do corpo'.",
    "distractorAnalysis": [
      "Está incorreta: Manter o movimento em velocidade constante requer força resultante nula (MRU), não crescente.",
      "Está incorreta: A massa é invariável ao longo do percurso em situações de mecânica clássica.",
      "Está incorreta: A aceleração de 9,8 m/s² é a da gravidade vertical na Terra, não uma aceleração horizontal espontânea."
    ],
    "nursingApplication": "Explica a relação intuitiva entre peso/massa de materiais a transportar e o esforço físico muscular despendido."
  },
  {
    "id": 1039,
    "topicId": 1,
    "question": "Se uma força resultante horizontal de 40 N atuar sobre uma cadeira com massa de 8 kg (desprezando atritos), qual é a aceleração produzida?",
    "options": [
      "320 m/s²",
      "0,2 m/s²",
      "48 m/s²",
      "5 m/s²"
    ],
    "correctIndex": 3,
    "explanation": "Aplicando a = F / m: a = 40 N / 8 kg = 5 m/s².",
    "distractorAnalysis": [
      "Está incorreta: 320 m/s² resultaria de multiplicar 40 por 8 (F · m), violando a fórmula a = F / m.",
      "Está incorreta: 0,2 m/s² resultaria da inversão m / F (8 / 40), o que está incorreto.",
      "Está incorreta: 48 m/s² resultaria de somar F com m (40 + 8), operação matematicamente errada."
    ],
    "nursingApplication": "Permite quantificar o comportamento cinemático e a segurança de equipamentos móveis na enfermaria."
  },
  {
    "id": 1040,
    "topicId": 1,
    "question": "Na prática de enfermagem, por que razão a mobilização de um utente bariátrico exige técnicas e meios auxiliares especiais?",
    "options": [
      "Porque a elevada massa inercial exige forças muito maiores para iniciar ou travar o movimento com segurança.",
      "Porque os doentes com obesidade severa deixam de obedecer à atração da gravidade terrestre.",
      "Porque a 2ª Lei de Newton deixa de se aplicar a corpos com massa superior a 100 kg.",
      "Porque o atrito cinético torna-se nulo quando a massa corporal aumenta substancialmente."
    ],
    "correctIndex": 0,
    "explanation": "Devido a F = m · a, massas muito elevadas exigem forças massivas quer para serem aceleradas quer para serem travadas. Sem meios mecânicos de apoio, o esforço sobre a coluna dos profissionais torna-se lesivo.",
    "distractorAnalysis": [
      "Está incorreta: A gravidade atua sobre todos os corpos com massa, sendo o peso proporcional à massa (P = m · g).",
      "Está incorreta: As Leis de Newton são universais na mecânica clássica e aplicam-se a qualquer valor de massa macroscópica.",
      "Está incorreta: O atrito não se anula; pelo contrário, a força de atrito geralmente aumenta com o peso do corpo sobre o plano."
    ],
    "nursingApplication": "Prevenção de acidentes de trabalho e de lesões dorsolombar na equipa de enfermagem durante manobras no leito."
  },
  {
    "id": 1041,
    "topicId": 1,
    "question": "Qual é a representação matemática do par de forças ação-reação regido pela 3.ª Lei de Newton?",
    "options": [
      "F_A->B + F_B->A = m · a",
      "F_A->B = - F_B->A (ou intensidades iguais e sentidos opostos)",
      "F_A->B / F_B->A = 0",
      "F_A->B = F_B->A²"
    ],
    "correctIndex": 1,
    "explanation": "Apresenta-se a formulação clássica vetorial: F_A->B = - F_B->A, significando que as forças têm a mesma intensidade e direção, mas sentidos opostos.",
    "distractorAnalysis": [
      "Está incorreta: As forças atuam em corpos distintos, pelo que somá-las para obter m·a de um único corpo é incorreto.",
      "Está incorreta: O quociente entre as suas intensidades seria 1, nunca 0.",
      "Está incorreta: A relação é de estrita igualdade de intensidade, não de proporção quadrática."
    ],
    "nursingApplication": "Fundamental para compreender as forças mútuas que se desenvolvem na interface entre o doente e a superfície de apoio."
  },
  {
    "id": 1042,
    "topicId": 1,
    "question": "Qual é o enunciado formal da 3.ª Lei de Newton (Princípio da Ação-Reação)?",
    "options": [
      "A aceleração de um corpo em queda livre é constante e independente da sua massa.",
      "A força de atrito é sempre perpendicular à superfície que suporta o peso do corpo.",
      "Sempre que um corpo (A) exerce uma força sobre um segundo corpo (B), o corpo B exerce simultaneamente uma força sobre o corpo A que lhe é igual em intensidade e direção, mas em sentido oposto.",
      "A soma de todas as forças num corpo em movimento acelerado é invariavelmente nula."
    ],
    "correctIndex": 2,
    "explanation": "Sempre que um corpo (A) exerce uma força sobre um segundo corpo (B), o corpo B exerce simultaneamente uma força sobre o corpo A que lhe é igual em intensidade e direção, mas em sentido oposto'.",
    "distractorAnalysis": [
      "Está incorreta: A aceleração da gravidade constante em queda livre descreve o movimento uniformemente variado, não a 3ª Lei.",
      "Está incorreta: A força de atrito é tangencial e paralela à superfície, não perpendicular.",
      "Está incorreta: Num corpo acelerado a força resultante é não nula (Fr = m · a), e a 3ª Lei trata de forças entre corpos distintos."
    ],
    "nursingApplication": "Ensina a ter consciência de que qualquer pressão mecânica exercida no utente é sentida em igual magnitude na mão do enfermeiro."
  },
  {
    "id": 1043,
    "topicId": 1,
    "question": "Por que razão as forças de ação e de reação NUNCA se anulam mutuamente num mesmo corpo?",
    "options": [
      "Porque a força de reação ocorre sempre 10 minutos após a força de ação.",
      "Porque a força de reação tem sempre uma intensidade 50% menor que a de ação.",
      "Porque uma força atua no plano horizontal e a outra atua sempre no plano vertical.",
      "Porque atuam sempre em corpos diferentes (a ação atua no corpo B e a reação atua no corpo A)."
    ],
    "correctIndex": 3,
    "explanation": "Duas forças só se anulam mutuamente se atuarem sobre o mesmo corpo. Como a ação atua num corpo e a reação atua no outro corpo, elas nunca se anulam entre si.",
    "distractorAnalysis": [
      "Está incorreta: A ação e a reação ocorrem em simultâneo (instantaneamente no mesmo instante temporal).",
      "Está incorreta: As intensidades de ambas as forças são rigorosamente iguais, sem qualquer perda de 50%.",
      "Está incorreta: A ação e a reação partilham exatamente a mesma reta de suporte (mesma direção), tendo apenas sentidos contrários."
    ],
    "nursingApplication": "Evita o erro comum de pensar que o peso e a força normal são um par ação-reação, pois ambos atuam no mesmo corpo."
  },
  {
    "id": 1044,
    "topicId": 1,
    "question": "Um profissional de saúde empurra uma parede da enfermaria com uma força horizontal de 70 N dirigida para a frente. Qual é a força que a parede exerce sobre as mãos do profissional?",
    "options": [
      "Uma força de exatamente 70 N, na mesma direção horizontal, dirigida para trás.",
      "Zero Newtons, porque a parede é um corpo inerte sem músculos.",
      "Uma força de 140 N dirigida para o chão por atração gravítica.",
      "Uma força de 35 N porque os materiais de alvenaria dissipam metade da força."
    ],
    "correctIndex": 0,
    "explanation": "Pela 3ª Lei de Newton, a parede reage instantaneamente sobre o profissional com uma força de intensidade rigorosamente igual (70 N), na mesma direção horizontal e em sentido oposto (para trás).",
    "distractorAnalysis": [
      "Está incorreta: A 3ª Lei de Newton aplica-se a todos os corpos materiais, inanimados ou vivos, independentemente de possuírem músculos.",
      "Está incorreta: A reação ocorre na mesma linha de ação horizontal, sem dobrar para 140 N nem mudar para a vertical.",
      "Está incorreta: A igualdade de intensidades é estrita e não depende da composição do material rígido."
    ],
    "nursingApplication": "Explica a importância de manter calçado estável e boa postura ao exercer força sobre estruturas de apoio."
  },
  {
    "id": 1045,
    "topicId": 1,
    "question": "Por que razão as forças de ação e reação da 3.ª Lei de Newton NUNCA se anulam mutuamente?",
    "options": [
      "Quem espera sempre alcança.",
      "Toda a ação tem a sua reação de igual intensidade e sentido oposto. O mesmo aplica-se na vida.",
      "A física quântica resolve todos os mistérios biológicos.",
      "O movimento perpétuo é o objetivo de toda a terapêutica médica."
    ],
    "correctIndex": 1,
    "explanation": "O conclui de forma pedagógica: 'Por outras palavras: Toda a ação tem a sua reação de igual intensidade e sentido oposto. O mesmo aplica-se na vida'.",
    "distractorAnalysis": [
      "Está incorreta: Provérbio popular não mencionado em nenhum ponto da biomecânica da unidade curricular.",
      "Está incorreta: A física quântica não é abordada nem mencionada no âmbito do Tópico 1 da biomecânica.",
      "Está incorreta: O movimento perpétuo viola as leis da termodinâmica e não consta na biomecânica."
    ],
    "nursingApplication": "Mensagem pedagógica que liga o princípio físico das forças interativas ao comportamento profissional e relacional."
  },
  {
    "id": 1046,
    "topicId": 1,
    "question": "Ao caminhar no chão da enfermaria, o pé empurra o piso para trás. Qual é a força que impulsiona a pessoa para a frente?",
    "options": [
      "A força centrífuga decorrente da rotação da Terra.",
      "A força nuclear forte entre as moléculas de borracha do sapato.",
      "A força de reação que o piso exerce sobre a sola do calçado dirigida para a frente.",
      "A atração gravítica exercida pelo ar ambiente circundante."
    ],
    "correctIndex": 2,
    "explanation": "Ao caminhar, o pé exerce uma força de ação para trás no solo; pela 3ª Lei de Newton, o solo exerce uma força de reação para a frente sobre o pé (força de atrito estático), que propulsiona a marcha.",
    "distractorAnalysis": [
      "Está incorreta: A força centrífuga terrestre é minúscula e atua para o espaço exterior, não impulsionando a marcha horizontal.",
      "Está incorreta: A força nuclear forte atua apenas nos núcleos atómicos a distâncias subatómicas.",
      "Está incorreta: O ar tem densidade baixa e não exerce atração gravitacional propulsora sobre os corpos."
    ],
    "nursingApplication": "Compreensão essencial para avaliar o risco de escorregamento e queda em pisos molhados sem aderência."
  },
  {
    "id": 1047,
    "topicId": 1,
    "question": "Relativamente ao instante em que ocorrem as forças de ação e de reação da 3ª Lei de Newton, qual das afirmações é verdadeira?",
    "options": [
      "A força de ação surge primeiro e a de reação surge com atraso de vários segundos.",
      "A reação só ocorre se o corpo atingido sofrer uma deformação plástica visível.",
      "A ação só existe se houver movimento acelerado contínuo entre os dois corpos.",
      "As forças de ação e reação ocorrem rigorosamente em simultâneo no tempo."
    ],
    "correctIndex": 3,
    "explanation": "As forças de interação entre dois corpos são perfeitamente simultâneas: nenhuma antecede a outra, existindo apenas enquanto durar o contacto ou interação mútua.",
    "distractorAnalysis": [
      "Está incorreta: Não há desfasamento temporal; a reação é perfeitamente instantânea e simultânea à ação.",
      "Está incorreta: A reação ocorre quer haja deformação elástica, plástica ou rigidez indeformável aparente.",
      "Está incorreta: Ação e reação existem tanto em corpos estáticos em repouso como em corpos em movimento."
    ],
    "nursingApplication": "Importante para entender o impacto imediato de colisões e forças aplicadas em contexto clínico."
  },
  {
    "id": 1048,
    "topicId": 1,
    "question": "Quando um doente se senta numa cadeira de rodas exercendo uma força para baixo sobre o assento, o que faz o assento da cadeira?",
    "options": [
      "Exerce sobre o corpo do doente uma força vertical dirigida para cima de igual intensidade.",
      "Anula a massa do doente para evitar que a estrutura colapse sob o peso.",
      "Exerce uma força horizontal para a esquerda de metade da intensidade do peso.",
      "Não exerce qualquer força porque a cadeira é um objeto inanimado."
    ],
    "correctIndex": 0,
    "explanation": "Pela 3ª Lei de Newton, ao exercer uma força vertical para baixo no assento, o assento reage exercendo uma força vertical para cima de igual intensidade sobre o corpo do utente.",
    "distractorAnalysis": [
      "Está incorreta: A estrutura da cadeira suporta a força mecânica, mas nunca altera a massa inercial do corpo humano.",
      "Está incorreta: A reação atua na mesma linha de ação (vertical), e não na horizontal nem com intensidade reduzida.",
      "Está incorreta: A 3ª Lei de Newton aplica-se a todas as superfícies e objetos mecânicos."
    ],
    "nursingApplication": "Compreender a força de suporte do assento é crucial para a correta prescrição de almofadas anti-escaras."
  },
  {
    "id": 1049,
    "topicId": 1,
    "question": "Se um camião de grande tonelagem colidir contra um automóvel pequeno ligeiro, como se compara a intensidade da força que o camião exerce sobre o automóvel com a que o automóvel exerce sobre o camião?",
    "options": [
      "A força do camião é muito maior porque a sua massa é superior.",
      "Ambas as forças têm rigorosamente a mesma intensidade, pois formam um par ação-reação.",
      "A força do automóvel é maior porque ele sofreu uma desaceleração superior.",
      "A força exercida é nula para ambos os veículos no instante da colisão."
    ],
    "correctIndex": 1,
    "explanation": "Pela 3ª Lei de Newton, a intensidade da força mútua na colisão é exatamente a mesma em ambos os corpos. O automóvel sofre maior dano e aceleração apenas porque tem muito menor massa (a = F/m).",
    "distractorAnalysis": [
      "Está incorreta: A maior massa do camião não aumenta a força relativa; o par ação-reação tem rigorosamente a mesma intensidade.",
      "Está incorreta: A desaceleração superior do carro deve-se à sua menor massa pela 2ª Lei, não a uma força maior.",
      "Está incorreta: No impacto geram-se forças intensíssimas que produzem deformações plásticas severas."
    ],
    "nursingApplication": "Ajuda a clarificar o erro comum de confundir a força exercida com os efeitos (aceleração e danos) da colisão."
  },
  {
    "id": 1050,
    "topicId": 1,
    "question": "Dois patinadores de gelo, um de 80 kg e outro de 40 kg, empurram-se mutuamente pelas mãos. Se o patinador de 80 kg aplica 120 N no de 40 kg, que força recebe de volta?",
    "options": [
      "Recebe 60 N porque o outro patinador tem metade do seu peso.",
      "Recebe 240 N devido à amplificação pelo gelo sem atrito.",
      "Recebe exatamente 120 N em sentido contrário, de acordo com a 3ª Lei de Newton.",
      "Recebe 0 N porque o patinador mais leve não consegue aplicar força."
    ],
    "correctIndex": 2,
    "explanation": "A intensidade do par ação-reação é rigorosamente idêntica em ambos os intervenientes: 120 N. O patinador mais leve terá o dobro da aceleração (a = 120/40 = 3 m/s² vs 120/80 = 1,5 m/s²), mas a força é a mesma.",
    "distractorAnalysis": [
      "Está incorreta: A força de reação não se reduz para metade da massa; a intensidade das forças é rigorosamente igual.",
      "Está incorreta: A ausência de atrito permite deslizamento livre, mas não multiplica a força gerada pelo contacto.",
      "Está incorreta: O contacto mecânico gera reciprocamente a força de 120 N em ambos os corpos."
    ],
    "nursingApplication": "Ilustra que numa transferência de doente, o esforço exercido reflete-se em igual magnitude sobre o cuidador."
  },
  {
    "id": 1051,
    "topicId": 1,
    "question": "Qual é a definição exata de Movimento Retilíneo e Uniforme (MRU) na cinemática clássica?",
    "options": [
      "Aumenta exponencialmente a cada segundo de movimento.",
      "Diminui linearmente até parar completamente.",
      "Oscila ciclicamente entre valores positivos e negativos.",
      "A velocidade (v) é constante no decorrer do tempo."
    ],
    "correctIndex": 3,
    "explanation": "Define-se expressamente a propriedade basilar do MRU: 'A velocidade (v) é constante no decorrer do tempo'.",
    "distractorAnalysis": [
      "Está incorreta: Aumento de velocidade caracteriza movimento acelerado, não uniforme.",
      "Está incorreta: Diminuição de velocidade caracteriza movimento retardado ou desacelerado.",
      "Está incorreta: Oscilações de velocidade correspondem a movimentos harmónicos ou periódicos."
    ],
    "nursingApplication": "Permite avaliar o transporte estável de doentes mantendo velocidade constante para evitar solavancos."
  },
  {
    "id": 1052,
    "topicId": 1,
    "question": "No Movimento Retilíneo e Uniforme (MRU), quanto vale a aceleração do corpo e qual é a resultante das forças que nele atuam?",
    "options": [
      "A aceleração (a) é nula (a = 0 m/s²).",
      "A aceleração é igual a 9,8 m/s² na horizontal.",
      "A aceleração varia consoante a massa do corpo.",
      "A aceleração atinge o valor infinito durante o percurso."
    ],
    "correctIndex": 0,
    "explanation": "O estabelece diretamente: 'A aceleração (a) é nula', uma vez que a velocidade não sofre qualquer variação temporal.",
    "distractorAnalysis": [
      "Está incorreta: 9,8 m/s² é o valor aproximado da aceleração gravítica vertical, não da aceleração no MRU.",
      "Está incorreta: No MRU a aceleração é sempre zero, independentemente de qual seja a massa do corpo.",
      "Está incorreta: Aceleração infinita é fisicamente impossível na mecânica clássica e violaria a constância da velocidade."
    ],
    "nursingApplication": "Garante o máximo conforto ao utente em transporte, minimizando as forças de inércia sentidas pelo corpo."
  },
  {
    "id": 1053,
    "topicId": 1,
    "question": "Se uma cadeira de rodas se desloca num corredor horizontal plano em Movimento Retilíneo e Uniforme (MRU), o que se pode concluir sobre a soma vetorial de todas as forças aplicadas?",
    "options": [
      "É sempre positiva e superior ao peso do corpo.",
      "É nula (F_r = 0 N).",
      "É igual à força de atrito multiplicada pela velocidade.",
      "É imprevisível e muda aleatoriamente a cada instante."
    ],
    "correctIndex": 1,
    "explanation": "Como a aceleração é nula (a = 0), pela 2ª Lei de Newton (Fr = m · a) a força resultante é obrigatoriamente nula: Fr = 0 N.",
    "distractorAnalysis": [
      "Está incorreta: Se a força resultante fosse positiva e não nula, o corpo aceleraria continuamente pela 2ª Lei.",
      "Está incorreta: Multiplicar força por velocidade dá potência mecânica (Watts), não a força resultante.",
      "Está incorreta: As leis da mecânica clássica são deterministas: a aceleração nula dita com certeza rigorosa Fr = 0 N."
    ],
    "nursingApplication": "Significa que para manter uma maca em velocidade constante apenas é necessário anular a força de atrito."
  },
  {
    "id": 1054,
    "topicId": 1,
    "question": "Uma maca hospitalar é deslocada ao longo de um corredor retilíneo com velocidade rigorosamente constante de 1 m/s. O que podemos afirmar?",
    "options": [
      "A força que o enfermeiro exerce é muito maior do que a força de atrito das rodas.",
      "A maca está em aceleração positiva crescente.",
      "A força exercida pelo profissional equilibra exatamente a força de atrito, sendo Fr = 0 N.",
      "A maca não sofre nenhuma força de gravidade durante o trajeto."
    ],
    "correctIndex": 2,
    "explanation": "Como a velocidade é constante e o movimento é retilíneo, a aceleração é zero. Portanto, a força aplicada para a frente equilibra perfeitamente a resistência de atrito para trás: Fr = 0 N.",
    "distractorAnalysis": [
      "Está incorreta: Se a força aplicada superasse o atrito, haveria força resultante e a maca aceleraria, aumentando de velocidade.",
      "Está incorreta: Velocidade constante implica por definição matemática aceleração estritamente nula.",
      "Está incorreta: A gravidade continua a atuar plenamente sobre a massa da maca e do utente (P = m · g)."
    ],
    "nursingApplication": "Evidencia que manter velocidade constante exige muito menor esforço do que acelerar ou desacelerar repetidamente."
  },
  {
    "id": 1055,
    "topicId": 1,
    "question": "Qual das seguintes afirmações sobre o vetor velocidade de um corpo em Movimento Retilíneo e Uniforme (MRU) é verdadeira?",
    "options": [
      "Ambos possuem velocidade diferente de zero e aceleração máxima.",
      "Ambos sofrem forças resultantes gigantescas no sentido do movimento.",
      "Ambos têm peso nulo por estarem em superfícies horizontais.",
      "Em ambos a aceleração é nula (a = 0) e a força resultante é nula (Fr = 0)."
    ],
    "correctIndex": 3,
    "explanation": "Tanto no repouso estático (v = 0) como no MRU (v = constante), a aceleração é nula (a = 0) e a força resultante é nula (Fr = 0). Ambos constituem estados de equilíbrio translacional.",
    "distractorAnalysis": [
      "Está incorreta: O corpo em repouso tem velocidade rigorosamente nula (v = 0), ao contrário do que afirma a opção.",
      "Está incorreta: Forças resultantes grandes produziriam acelerações elevadas pela 2ª Lei de Newton.",
      "Está incorreta: O peso depende unicamente da massa e da gravidade local, mantendo-se constante em repouso ou MRU."
    ],
    "nursingApplication": "Mostra que um doente em repouso na cama e um doente em transporte suave sem solavancos partilham a ausência de aceleração."
  },
  {
    "id": 1056,
    "topicId": 1,
    "question": "Para que um corpo continue em Movimento Retilíneo e Uniforme no vácuo sem atrito, é necessário continuar a empurrá-lo com uma força resultante?",
    "options": [
      "Não, pois pela 1ª Lei de Newton o corpo mantém a sua velocidade constante por inércia.",
      "Sim, é obrigatório aplicar uma força contínua crescente para vencer o esquecimento do corpo.",
      "Sim, porque todo o movimento consome a massa do objeto até ele parar.",
      "Apenas se o corpo tiver uma temperatura inferior a zero graus Celsius."
    ],
    "correctIndex": 0,
    "explanation": "Pela 1ª Lei de Newton (Lei da Inércia), um corpo em movimento sem forças resultantes contrárias continua em movimento indefinidamente sem necessidade de qualquer força contínua.",
    "distractorAnalysis": [
      "Está incorreta: A matéria não tem 'esquecimento'; a ideia aristotélica de que o movimento requer força contínua foi superada por Galileu e Newton.",
      "Está incorreta: O movimento não consome massa na física clássica; a massa permanece rigorosamente invariável.",
      "Está incorreta: A temperatura não condiciona a conservação da quantidade de movimento mecânica no vácuo."
    ],
    "nursingApplication": "Ajuda a desfazer conceções erróneas comuns sobre a necessidade de forças para manter o movimento."
  },
  {
    "id": 1057,
    "topicId": 1,
    "question": "Se um veículo de transporte de doentes mantiver um valor numérico de velocidade de 30 km/h, mas estiver a fazer uma rotunda circular:",
    "options": [
      "O movimento é classificado como retilíneo e uniforme porque 30 km/h é constante.",
      "O movimento NÃO é uniforme retilíneo, pois a direção da velocidade está a mudar, existindo aceleração.",
      "A força resultante sobre o veículo é obrigatoriamente igual a zero Newtons.",
      "O veículo perde toda a sua inércia durante a curva e flutua sobre a estrada."
    ],
    "correctIndex": 1,
    "explanation": "A velocidade é uma grandeza vetorial. Embora o módulo seja 30 km/h, a direção está a mudar continuamente ao longo da curva, o que implica aceleração (centrípeta) e força resultante não nula. Não é MRU.",
    "distractorAnalysis": [
      "Está incorreta: Para ser retilíneo a trajetória tem de ser em linha reta; uma rotunda é uma trajetória curva.",
      "Está incorreta: Curvar exige uma força resultante centrípeta gerada pelo atrito dos pneus com a estrada.",
      "Está incorreta: A inércia mantém-se inalterada e manifesta-se pela tendência do corpo em seguir em frente pela tangente."
    ],
    "nursingApplication": "Explica por que os doentes sentem forças laterais quando uma ambulância faz curvas, mesmo em velocidade moderada."
  },
  {
    "id": 1058,
    "topicId": 1,
    "question": "Qual é a condição mecânica necessária e suficiente para que um ponto material esteja em equilíbrio de translação?",
    "options": [
      "A velocidade tem de ser rigorosamente crescente a uma taxa constante de 1 m/s².",
      "O corpo tem de estar obrigatoriamente a uma temperatura de zero absoluto.",
      "A resultante de todas as forças que atuam sobre o corpo tem de ser igual a zero (Fr = 0 N).",
      "O peso do corpo tem de ser exatamente o dobro da força normal de apoio."
    ],
    "correctIndex": 2,
    "explanation": "O equilíbrio de translação define-se estritamente pela anulação da força resultante: Fr = 0 N (o que engloba tanto o repouso como o MRU).",
    "distractorAnalysis": [
      "Está incorreta: Taxa de 1 m/s² significa aceleração não nula, o que violaria o equilíbrio de translação.",
      "Está incorreta: O zero absoluto (-273,15 ºC) é um conceito térmico ideal sem relação com o equilíbrio mecânico de forças.",
      "Está incorreta: Se o peso superasse a normal sem outra força, haveria aceleração para baixo e não equilíbrio."
    ],
    "nursingApplication": "Base de análise da segurança postural e estática em suportes terapêuticos e macas."
  },
  {
    "id": 1059,
    "topicId": 1,
    "question": "Um carrinho de medicação desloca-se em MRU num piso horizontal. Se a força de atrito contrária ao movimento for de 18 N, que força horizontal aplica o enfermeiro?",
    "options": [
      "0 N, pois o carrinho move-se sem qualquer auxílio no corredor.",
      "36 N para manter a velocidade a aumentar indefinidamente.",
      "9 N, aproveitando a inércia que reduz a força para metade.",
      "Exatamente 18 N no sentido do movimento, garantindo força resultante nula (Fr = 0 N)."
    ],
    "correctIndex": 3,
    "explanation": "Para manter MRU (aceleração zero e velocidade constante), a força aplicada deve anular exatamente a resistência: F_aplicada - F_atrito = 0 => F_aplicada = 18 N.",
    "distractorAnalysis": [
      "Está incorreta: Sem força aplicada (0 N), o atrito de 18 N desaceleraria o carrinho até ele parar.",
      "Está incorreta: 36 N geraria uma resultante de 18 N para a frente, provocando aceleração contínua e não MRU.",
      "Está incorreta: 9 N seria insuficiente para equilibrar os 18 N de atrito, fazendo o carrinho desacelerar e parar."
    ],
    "nursingApplication": "Demonstra a relação equilibrada de forças no manuseamento rotineiro de equipamentos hospitalares."
  },
  {
    "id": 1060,
    "topicId": 1,
    "question": "Se um dinamómetro acoplado a uma maca indicar que a força resultante horizontal total sobre ela é Fr = 0 N, o que podemos concluir com certeza?",
    "options": [
      "A maca está em repouso estático ou em movimento retilíneo e uniforme.",
      "A maca está necessariamente a acelerar a 10 m/s² para a frente.",
      "A massa da maca foi totalmente reduzida a zero quilogramas.",
      "A maca perdeu o contacto com o chão e encontra-se a levitar."
    ],
    "correctIndex": 0,
    "explanation": "Força resultante nula (Fr = 0) é a condição exata que dita que o corpo ou está parado (repouso) ou se desloca em linha reta com velocidade invariável (MRU).",
    "distractorAnalysis": [
      "Está incorreta: Aceleração a = 10 m/s² exigiria Fr = m · 10 ≠ 0, contrariando a premissa de Fr = 0 N.",
      "Está incorreta: A massa é constante e independente do equilíbrio de forças que atuam sobre o corpo.",
      "Está incorreta: O equilíbrio de forças na vertical (P = N) garante que a maca se apoia no solo sem levitar."
    ],
    "nursingApplication": "Garante a correta interpretação de leituras de estabilidade mecânica em aparelhos clínicos."
  },
  {
    "id": 1061,
    "topicId": 1,
    "question": "Quais são as Quatro Forças Fundamentais do Universo reconhecidas pela física?",
    "options": [
      "Apenas 2 forças: Peso e Atrito.",
      "Exatamente 4 forças fundamentais.",
      "7 forças correspondentes às 7 unidades de base do SI.",
      "Inúmeras forças distintas sem qualquer categorização científica."
    ],
    "correctIndex": 1,
    "explanation": "O introduz as 'Forças fundamentais da natureza', apresentando exatamente 4 forças fundamentais: Gravidade, Eletromagnética, Nuclear Forte e Nuclear Fraca.",
    "distractorAnalysis": [
      "Está incorreta: Peso e atrito são manifestações macroscópicas particulares da gravidade e do eletromagnetismo, não as forças fundamentais.",
      "Está incorreta: As 7 unidades base do SI são unidades de medida (m, kg, s, etc.), não forças fundamentais.",
      "Está incorreta: A física moderna unifica todas as interações da natureza em exatamente 4 forças fundamentais."
    ],
    "nursingApplication": "Estrutura o conhecimento dos alunos sobre a origem primária de todas as interações biológicas e materiais."
  },
  {
    "id": 1062,
    "topicId": 1,
    "question": "Como se define a Força da Gravidade (Peso, P = m · g) na mecânica newtoniana?",
    "options": [
      "Atração e repulsão mútua entre pólos de ímanes permanentes.",
      "Força microscópica que divide os protões em quarks no núcleo.",
      "Atração entre corpos com massa, expressa por P = m · g.",
      "Resistência ao deslizamento de superfícies ásperas em contacto."
    ],
    "correctIndex": 2,
    "explanation": "Força da gravidade (P = m · g): Atração entre corpos com massa'.",
    "distractorAnalysis": [
      "Está incorreta: Atração e repulsão magnética define a força eletromagnética, não a gravítica.",
      "Está incorreta: A interação entre quarks e protões é mediada pela força nuclear forte.",
      "Está incorreta: A resistência ao deslizamento define a força de atrito macroscópica."
    ],
    "nursingApplication": "Explica o peso corporal que atua continuamente sobre o sistema osteomuscular e leitos hospitalares."
  },
  {
    "id": 1063,
    "topicId": 1,
    "question": "Como se define a Força Eletromagnética e qual é a sua manifestação fundamental entre partículas carregadas?",
    "options": [
      "Pressão exercida por fluidos biológicos no interior de vasos sanguíneos.",
      "Energia emitida pelo núcleo atómico durante a fissão espontânea.",
      "Deformação elástica exclusiva de molas helicoidais em dinamómetros.",
      "Atração / repulsão entre corpos por ação dos seus campos magnéticos (e elétricos)."
    ],
    "correctIndex": 3,
    "explanation": "Força eletromagnética: Atração / repulsão entre corpos por ação dos seus campos magnéticos'.",
    "distractorAnalysis": [
      "Está incorreta: A pressão em vasos sanguíneos decorre da hidrodinâmica cardíaca, não da definição da força fundamental eletromagnética.",
      "Está incorreta: Energia de fissão nuclear envolve forças nucleares forte e fraca.",
      "Está incorreta: A deformação de molas é uma manifestação elástica molecular microscópica decorrente de ligações eletromagnéticas, mas não a sua definição."
    ],
    "nursingApplication": "Base para compreender a bioeletricidade celular, potenciais de ação e equipamentos como ECG e desfibrilhadores."
  },
  {
    "id": 1064,
    "topicId": 1,
    "question": "Qual é a função primordial da Força Nuclear Forte no interior da matéria atómica?",
    "options": [
      "Cola' que mantém os protões e os neutrões unidos no interior do núcleo atómico.",
      "Força de atrito' que impede a rotação das órbitas eletrónicas.",
      "Tensão muscular' exercida pelos ligamentos sobre as vértebras sagradas.",
      "Pressão capilar' exercida pelo fluxo arterial na pele do sacro."
    ],
    "correctIndex": 0,
    "explanation": "O descreve textualmente a Força nuclear forte como: '“Cola” que mantém os protões e os neutrões unidos no interior do núcleo atómico'.",
    "distractorAnalysis": [
      "Está incorreta: Não existe força de atrito em órbitas quânticas de eletrões.",
      "Está incorreta: Tensão ligamentar é um esforço mecânico tissular macroscópico, não uma força subatómica nuclear.",
      "Está incorreta: Pressão capilar na pele sobre o sacro é o exemplo de pressão dado."
    ],
    "nursingApplication": "Permite aos alunos reter a função de coesão do núcleo atómico antes de abordarem a radioatividade médica."
  },
  {
    "id": 1065,
    "topicId": 1,
    "question": "Onde atua a Força Nuclear Fraca e em que processos da física subatómica desempenha papel fundamental?",
    "options": [
      "Exclusivamente no atrito estático entre calçado hospitalar e piso molhado.",
      "Está presente em alguns tipos de decaimento radioativo e na fusão nuclear.",
      "Na flexão do antebraço pelo músculo bíceps braquial.",
      "No amortecimento elástico dos discos cartilagíneos intervertebrais."
    ],
    "correctIndex": 1,
    "explanation": "O estipula: 'Força nuclear fraca: Presente em alguns tipos de decaimento radioativo e na fusão nuclear'.",
    "distractorAnalysis": [
      "Está incorreta: O atrito calçado-solo é uma manifestação macroscópica de forças eletromagnéticas de contacto.",
      "Está incorreta: A flexão do cotovelo é um sistema de alavancas osteomuscular mecânico (Tópico 1).",
      "Está incorreta: O amortecimento de cartilagens é um comportamento viscoelástico reológico (Tópico 2)."
    ],
    "nursingApplication": "Compreensão essencial para os futuros tópicos de física nuclear e aplicações terapêuticas de radioisótopos."
  },
  {
    "id": 1066,
    "topicId": 1,
    "question": "Qual das quatro forças fundamentais do universo é responsável pelo Peso de um utente sobre uma maca ou colchão?",
    "options": [
      "Da força nuclear forte que une o núcleo das células da pele.",
      "Da força nuclear fraca que causa decaimento radioativo ósseo.",
      "Da força da gravidade (atração gravítica entre a massa do utente e a massa da Terra).",
      "Exclusivamente de forças magnéticas repulsivas geradas pelo solo."
    ],
    "correctIndex": 2,
    "explanation": "O peso é a força de atração gravítica mútua entre a massa corporal do doente e o planeta Terra, dada por P = m · g.",
    "distractorAnalysis": [
      "Está incorreta: A força nuclear forte atua apenas dentro dos núcleos atómicos, não produzindo peso na balança.",
      "Está incorreta: A força nuclear fraca medeia desintegrações radioativas subatómicas, sem gerar o peso macroscópico.",
      "Está incorreta: O peso não decorre de campos magnéticos repulsivos, mas sim da atração gravítica universal."
    ],
    "nursingApplication": "Ajuda a clarificar por que o peso varia com a gravidade local enquanto a massa se mantém invariável."
  },
  {
    "id": 1067,
    "topicId": 1,
    "question": "No interior do núcleo atómico, protões com a mesma carga elétrica positiva repelem-se fortemente. O que impede a desintegração espontânea do núcleo?",
    "options": [
      "A força da gravidade que atrai os protões com intensidade infinitamente superior.",
      "O atrito cinético que imobiliza as partículas nas órbitas nucleares.",
      "A força normal exercida pela membrana nuclear celular.",
      "A força nuclear forte, que atua como 'cola' superando a repulsão eletromagnética a distâncias ultracurtas."
    ],
    "correctIndex": 3,
    "explanation": "A força nuclear forte é ordens de grandeza mais intensa que a repulsão eletromagnética a distâncias subatómicas, atuando como a 'cola' que mantém os nucleões firmemente unidos.",
    "distractorAnalysis": [
      "Está incorreta: A gravidade entre partículas elementares é de intensidade desprezível quando comparada com a repulsão elétrica.",
      "Está incorreta: Atrito cinético é um fenómeno macroscópico de contacto mecânico, não existindo no interior do núcleo.",
      "Está incorreta: A membrana nuclear é uma estrutura celular biológica macromolecular, sem efeito nas forças de coesão atómica."
    ],
    "nursingApplication": "Introduz a estabilidade atómica necessária para compreender isótopos estáveis e radioativos em medicina."
  },
  {
    "id": 1068,
    "topicId": 1,
    "question": "As forças de atrito entre a pele e os lençóis e a resistência mecânica de contacto têm origem microscópica em qual força fundamental?",
    "options": [
      "Na força eletromagnética (interações eletrostáticas entre os átomos e moléculas das superfícies em contacto).",
      "Na força gravitacional entre as massas dos átomos do tecido do lençol.",
      "Na força nuclear fraca que desintegra as fibras têxteis.",
      "Na força nuclear forte que funde a pele com o colchão hospitalar."
    ],
    "correctIndex": 0,
    "explanation": "Todas as forças de contacto macroscópicas (atrito, força normal, tensão muscular, elasticidade) decorrem fundamentalmente de interações eletromagnéticas entre as nuvens eletrónicas dos átomos em contacto.",
    "distractorAnalysis": [
      "Está incorreta: A atração gravítica atómica é infinitamente fraca para gerar atrito mecânico tangível.",
      "Está incorreta: A força nuclear fraca não participa nas forças de atrito ou coesão estrutural macroscópica.",
      "Está incorreta: Não há fusão nuclear entre pele e tecidos biológicos nas interações do dia a dia."
    ],
    "nursingApplication": "Liga o conhecimento da física fundamental à compreensão das forças de corte e cisalhamento na pele de utentes acamados."
  },
  {
    "id": 1069,
    "topicId": 1,
    "question": "Na expressão matemática da força da gravidade (P = m · g), o que representam fisicamente as variáveis 'm' e 'g'?",
    "options": [
      "M = momento da força e g = grama de substância.",
      "M = massa do corpo (em kg) e g = aceleração gravítica local (em m/s²).",
      "M = metros percorridos e g = grau de inclinação da rampa.",
      "M = músculo tracionado e g = goniometria articular da articulação."
    ],
    "correctIndex": 1,
    "explanation": "Na fórmula P = m · g, 'm' representa a massa do corpo (em quilogramas no SI) e 'g' a aceleração devida à gravidade local (aproximadamente 9,8 m/s² à superfície da Terra).",
    "distractorAnalysis": [
      "Está incorreta: Momento da força representa-se por M e tem fórmula M = F · b, não P = m · g.",
      "Está incorreta: Metros é unidade de distância e rampa inclina-se em graus, não constando na fórmula do peso vertical.",
      "Está incorreta: Termos anatómicos não correspondem às variáveis formais da física newtoniana na fórmula P = m · g."
    ],
    "nursingApplication": "Permite calcular o peso exato de doentes e cargas para dimensionamento seguro de equipamentos."
  },
  {
    "id": 1070,
    "topicId": 1,
    "question": "Nos meios de diagnóstico e terapia nuclear (como PET ou cintigrafia), que forças fundamentais governam as emissões e a estabilidade atómica?",
    "options": [
      "Apenas o atrito cinético e a força normal das marquesas.",
      "Exclusivamente a gravidade newtoniana dos órgãos abdominais.",
      "As forças nucleares (forte e fraca) e a força eletromagnética.",
      "Nenhuma força física, operando apenas por telepatia quântica."
    ],
    "correctIndex": 2,
    "explanation": "A estabilidade do núcleo, as transformações radioativas (como decaimento beta mediado pela força fraca) e a emissão de radiação eletromagnética gama são regidas pelas forças nucleares e eletromagnética.",
    "distractorAnalysis": [
      "Está incorreta: Atrito e normal são forças macroscópicas mecânicas, não responsáveis pela desintegração radioativa.",
      "Está incorreta: A gravidade não tem magnitude para induzir processos de emissão radioativa nuclear.",
      "Está incorreta: A medicina nuclear apoia-se em leis rigorosas e reprodutíveis da física atómica e nuclear."
    ],
    "nursingApplication": "Faz a ponte entre a mecânica introdutória e as futuras aulas de proteção radiológica e diagnóstico por imagem."
  },
  {
    "id": 1071,
    "topicId": 1,
    "question": "Qual é a definição exata de Força Normal (N) na estática e mecânica de contacto?",
    "options": [
      "Força tangencial que se opõe continuamente ao movimento de deslizamento.",
      "Força centrípeta responsável por manter o sangue a circular nas artérias coronárias.",
      "Força de tração exercida por um tendão para fletir o antebraço sobre o braço.",
      "Força perpendicular exercida por uma superfície sobre o corpo que nela se apoia."
    ],
    "correctIndex": 3,
    "explanation": "Força normal (N): Força perpendicular exercida por uma superfície sobre o corpo que nela se apoia'.",
    "distractorAnalysis": [
      "Está incorreta: A força tangencial oposta ao movimento é a definição de Força de Atrito.",
      "Está incorreta: Força centrípeta atua em curvas circulares, não sendo a definição de força de apoio normal.",
      "Está incorreta: A tração tendinosa é exercida por tecido conjuntivo e atua na linha de inserção do músculo."
    ],
    "nursingApplication": "Conceito fundamental para entender a força mecânica exercida pelo colchão sobre o corpo de um utente acamado."
  },
  {
    "id": 1072,
    "topicId": 1,
    "question": "Numa cama hospitalar perfeitamente horizontal, qual é a direção da Força Normal exercida pelo colchão sobre o doente?",
    "options": [
      "Estritamente vertical e perpendicular à superfície do colchão, apontando para cima.",
      "Horizontal paralela ao chão, apontando para os pés da cama.",
      "Inclinada a 45 graus no sentido oblíquo da cabeceira.",
      "Circular girando em torno do centro de massa do doente."
    ],
    "correctIndex": 0,
    "explanation": "Por definição física, a força 'normal' é sempre perpendicular (ortogonal, a 90 graus) relativamente à superfície de contacto. Sendo o colchão horizontal, a força normal atua na vertical para cima.",
    "distractorAnalysis": [
      "Está incorreta: Forças paralelas à superfície são tangenciais (como o atrito), não normais.",
      "Está incorreta: A força normal não tem inclinação de 45º numa superfície horizontal plana.",
      "Está incorreta: A normal é um vetor linear perpendicular, não um vetor com trajetória circular rotativa."
    ],
    "nursingApplication": "Garante a compreensão do vetor de força responsável por sustentar o peso corporal do doente no leito."
  },
  {
    "id": 1073,
    "topicId": 1,
    "question": "Por que razão a Força Normal (N) que atua sobre um utente deitado NÃO constitui o par ação-reação do seu Peso (P)?",
    "options": [
      "Porque a força normal tem sempre o dobro da intensidade do peso do corpo.",
      "Porque tanto N como P atuam sobre o mesmo corpo (o utente), violando a 3ª Lei de Newton.",
      "Porque a força normal só existe quando o doente se encontra em movimento acelerado.",
      "Porque a força normal é uma grandeza puramente imaginária sem unidade de medida."
    ],
    "correctIndex": 1,
    "explanation": "Na 3ª Lei de Newton, a ação e a reação atuam obrigatoriamente em corpos diferentes. Como N e P atuam ambos sobre o mesmo corpo (o doente), eles equilibram-se mutuamente, mas não formam um par ação-reação.",
    "distractorAnalysis": [
      "Está incorreta: Numa superfície horizontal em repouso, N tem exatamente a mesma intensidade que P (N = P).",
      "Está incorreta: A força normal existe no repouso estático sempre que há contacto e compressão contra uma superfície.",
      "Está incorreta: A força normal é uma força física real mensurável em Newtons (N)."
    ],
    "nursingApplication": "Resolve uma das dúvidas conceptuais mais frequentes em testes de Biofísica no ensino superior."
  },
  {
    "id": 1074,
    "topicId": 1,
    "question": "Qual é a relação direta entre a Força Normal exercida por um colchão sobre a pele e o risco de desenvolvimento de lesões por pressão?",
    "options": [
      "A força normal anula o atrito impedindo qualquer tipo de lesão cutânea.",
      "A força normal estimula a proliferação celular acelerando a cicatrização de feridas.",
      "A força normal perpendicular comprime os tecidos moles e capilares contra as proeminências ósseas, ocluindo a microcirculação.",
      "A força normal provoca desintegração atómica por radiação gama nos tecidos da pele."
    ],
    "correctIndex": 2,
    "explanation": "A força normal exercida pela superfície do leito comprime os tecidos moles (músculo, tecido celular subcutâneo e derme) contra os ossos subjacentes; a pressão resultante colapsa os capilares sanguíneos provocando isquemia.",
    "distractorAnalysis": [
      "Está incorreta: A força normal não anula o atrito e, quando combinada com este, agrava o dano tecidual.",
      "Está incorreta: A compressão prolongada causa isquemia e necrose tecidual, não estimulando cicatrização.",
      "Está incorreta: Lesões de pressão são eventos isquémicos mecânicos, sem relação com desintegrações radioativas."
    ],
    "nursingApplication": "Fundamentação biofísica primária para a mudança sistemática de decúbitos de duas em duas horas em doentes acamados."
  },
  {
    "id": 1075,
    "topicId": 1,
    "question": "Em decúbito dorsal horizontal sobre uma superfície plana, qual é a região anatómica onde a força normal e a concentração de pressão são mais críticas?",
    "options": [
      "No lobo da orelha.",
      "Na face anterior da tíbia.",
      "Na palma da mão.",
      "Na pele sobre a proeminência óssea do sacro."
    ],
    "correctIndex": 3,
    "explanation": "Os destacam a 'Pressão capilar na pele sobre o sacro' como o exemplo biofísico de referência no estudo da força normal e lesões de pressão.",
    "distractorAnalysis": [
      "Está incorreta: O lobo da orelha não suporta carga corporal significativa em decúbito dorsal clássico.",
      "Está incorreta: A face anterior da tíbia suporta pressão em decúbito ventral, não sendo a zona sacra de referência em decúbito dorsal.",
      "Está incorreta: A palma da mão não apoia o peso corporal do tronco no leito."
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
      "Está incorreta: 70 é a massa em quilogramas (kg), que tem de ser multiplicada por g (9,8) para obter a força em Newtons.",
      "Está incorreta: 7,14 resultaria de dividir 70 por 9,8, o que está matematicamente errado.",
      "Está incorreta: A força normal não é nula, caso contrário o doente cairia em queda livre através do colchão."
    ],
    "nursingApplication": "Permite calcular a carga mecânica total suportada pela estrutura do colchão e distribuída pela pele."
  },
  {
    "id": 1077,
    "topicId": 1,
    "question": "Qual é o objetivo biomecânico do uso de superfícies de redistribuição de pressão (como colchões dinâmicos de ar ou viscoelásticos)?",
    "options": [
      "Eliminar totalmente a massa inercial do corpo do doente.",
      "Aumentar a área de contacto para diminuir a pressão exercida nos pontos de apoio (p = F / A).",
      "Aumentar a força normal concentrando-a num único ponto ósseo.",
      "Acelerar o doente em movimentos periódicos contínuos a alta velocidade."
    ],
    "correctIndex": 1,
    "explanation": "A força normal total (peso do doente) permanece constante. Ao moldar-se ao corpo, o colchão aumenta a área de superfície de contacto (A), reduzindo drasticamente a pressão resultante (p = F / A) abaixo do limite de oclusão capilar.",
    "distractorAnalysis": [
      "Está incorreta: Nenhum colchão altera a massa do utente; a massa é uma constante intrínseca do organismo.",
      "Está incorreta: Concentrar a força aumentaria perigosamente a pressão pontual, acelerando a necrose dos tecidos.",
      "Está incorreta: Colchões alternantes funcionam com insuflação lenta e suave, sem acelerações bruscas."
    ],
    "nursingApplication": "Justifica a seleção e utilização correta de superfícies de redistribuição de pressão na prática hospitalar."
  },
  {
    "id": 1078,
    "topicId": 1,
    "question": "Quando se eleva a cabeceira da cama articulada criando um plano inclinado, por que razão o corpo do doente tende a deslizar em direção aos pés?",
    "options": [
      "Aumenta proporcionalmente para o triplo do peso original.",
      "Permanece rigorosamente inalterada independentemente de qualquer inclinação.",
      "Diminui, pois parte do peso do corpo passa a ser suportada ao longo do plano na componente tangencial.",
      "Transforma-se numa força eletromagnética que atrai o doente para a parede."
    ],
    "correctIndex": 2,
    "explanation": "No plano inclinado, a força normal equilibra apenas a componente perpendicular do peso (N = P_n = P · cos θ). À medida que a cama inclina, P_n diminui e a componente tangencial P_t aumenta, fazendo o corpo deslizar.",
    "distractorAnalysis": [
      "Está incorreta: A força normal nunca excede o peso num plano inclinado estático livre de forças externas adicionais.",
      "Está incorreta: A força normal varia com a função cosseno da inclinação, diminuindo com o aumento do ângulo.",
      "Está incorreta: A redistribuição de forças é puramente gravítica e geométrica, sem alteração de campos eletromagnéticos."
    ],
    "nursingApplication": "Alerta para o facto de que elevar a cabeceira reduz a compressão pura normal, mas introduz deslizamento e forças de cisalhamento."
  },
  {
    "id": 1079,
    "topicId": 1,
    "question": "Qual é a unidade padrão no Sistema Internacional para expressar a Força Normal?",
    "options": [
      "Pascal (Pa).",
      "Quilograma (kg).",
      "Newton-metro (N·m).",
      "Newton (N)."
    ],
    "correctIndex": 3,
    "explanation": "A Força Normal é uma força, pelo que a sua unidade no Sistema Internacional é o Newton (N).",
    "distractorAnalysis": [
      "Está incorreta: Pascal (Pa) é a unidade de pressão (força por unidade de área).",
      "Está incorreta: Quilograma (kg) é a unidade de massa.",
      "Está incorreta: Newton-metro (N·m) é a unidade de momento de uma força (torque) ou trabalho."
    ],
    "nursingApplication": "Previne confusões terminológicas e dimensionais na resolução de problemas físicos de apoio e sustentação."
  },
  {
    "id": 1080,
    "topicId": 1,
    "question": "A força normal exercida pelo colchão sobre o corpo de um doente em repouso constitui a reação de qual força segundo a 3.ª Lei de Newton?",
    "options": [
      "Na superfície do colchão (é a força que o corpo do doente exerce sobre o colchão para baixo).",
      "No centro de gravidade da Terra por atração cósmica.",
      "Nas rodas da cama que contactam com o pavimento da enfermaria.",
      "No ar atmosférico que circunda o leito do utente."
    ],
    "correctIndex": 0,
    "explanation": "Se o corpo A é o doente e o corpo B é o colchão: o colchão exerce a força normal N no doente (para cima); a reação correspondente da 3ª Lei é exercida pelo doente sobre o colchão (para baixo com igual intensidade).",
    "distractorAnalysis": [
      "Está incorreta: A reação à força do peso (atração Terra-doente) é que se situa no centro da Terra, não a reação da força normal de contacto.",
      "Está incorreta: A força nas rodas é a interação entre as rodas e o chão, um contacto mecânico distinto.",
      "Está incorreta: O ar circundante não é o corpo de apoio que exerce a força normal de sustentação da cama."
    ],
    "nursingApplication": "Consolida a aplicação rigorosa da 3ª Lei de Newton e a identificação correta dos pares de forças em contacto."
  },
  {
    "id": 1081,
    "topicId": 1,
    "question": "Qual é a definição exata de Força de Atrito no contacto mecânico entre duas superfícies?",
    "options": [
      "Força perpendicular exercida por uma superfície que suporta um corpo em repouso.",
      "Força tangencial que se opõe ao movimento.",
      "Atração gravítica exercida pela Terra sobre corpos com grande quantidade de matéria.",
      "Energia radiante emitida por núcleos atómicos instáveis em transição."
    ],
    "correctIndex": 1,
    "explanation": "Força de atrito: Força tangencial que se opõe ao movimento'.",
    "distractorAnalysis": [
      "Está incorreta: A força perpendicular é a Força Normal (N), não a força de atrito.",
      "Está incorreta: A atração gravítica define a Força da Gravidade ou Peso.",
      "Está incorreta: Energia radiante emitida por núcleos é a radiação nuclear, não a força de atrito mecânica."
    ],
    "nursingApplication": "Permite entender as forças de resistência encontradas ao empurrar carrinhos, macas e posicionar doentes."
  },
  {
    "id": 1082,
    "topicId": 1,
    "question": "Como se distinguem conceitualmente o 'Atrito Estático' e o 'Atrito Cinético' no contacto entre corpos sólidos?",
    "options": [
      "O atrito estático atua na água e o atrito cinético atua exclusivamente no ar.",
      "O atrito estático atua no plano vertical e o atrito cinético no plano oblíquo.",
      "Atrito estático: impede o movimento de começar; Atrito cinético: força de resistência durante o movimento.",
      "Não há distinção física entre ambos, sendo termos exatamente idênticos."
    ],
    "correctIndex": 2,
    "explanation": "O categoriza: 'Atrito estático: Impede o movimento de começar; Atrito cinético: Força de resistência durante o movimento'.",
    "distractorAnalysis": [
      "Está incorreta: Resistência em fluidos (água ou ar) é atrito viscoso/hidrodinâmico, não a definição dos dois regimes da biomecânica.",
      "Está incorreta: Ambos atuam tangencialmente a superfícies de contacto, independentemente da orientação no espaço.",
      "Está incorreta: A distinção é fundamental e reflete dois estados mecânicos distintos (repouso vs movimento)."
    ],
    "nursingApplication": "Ajuda a planear manobras de mobilização sabendo que o arranque inicial requer a maior força."
  },
  {
    "id": 1083,
    "topicId": 1,
    "question": "Qual é a relação fundamental de intensidade entre a força de atrito estático máximo e a força de atrito cinético?",
    "options": [
      "O atrito cinético é sempre dez vezes superior ao atrito estático.",
      "O atrito estático é rigorosamente igual a zero em qualquer material.",
      "O atrito estático e o cinético têm sempre a mesma intensidade em todos os corpos.",
      "O atrito estático é sempre superior ao atrito cinético!"
    ],
    "correctIndex": 3,
    "explanation": "O enfatiza expressamente: 'O atrito estático é sempre superior ao atrito cinético!'.",
    "distractorAnalysis": [
      "Está incorreta: O atrito cinético é menor que o atrito estático máximo, nunca dez vezes superior.",
      "Está incorreta: O atrito estático é diferente de zero sempre que as superfícies em contacto apresentam rugosidade microscópica.",
      "Está incorreta: O atrito cinético é inferior ao atrito estático de arranque na esmagadora maioria dos materiais comuns."
    ],
    "nursingApplication": "Princípio físico de enorme relevância ergonómica para profissionais de enfermagem."
  },
  {
    "id": 1084,
    "topicId": 1,
    "question": "Qual é a manifestação prática do facto de o atrito estático ser superior ao cinético ao deslocar equipamentos pesados?",
    "options": [
      "É mais difícil empurrar uma maca em repouso do que uma maca em movimento.",
      "É mais difícil pesar um doente sentado do que um doente em pé.",
      "A velocidade de infusão do soro é mais rápida com agulha de menor calibre.",
      "A temperatura da pele diminui quando o utente caminha descalço no hospital."
    ],
    "correctIndex": 0,
    "explanation": "O cita expressamente: 'É mais difícil empurrar uma maca em repouso do que uma maca em movimento', demonstrando que vencer o atrito estático inicial exige maior força do que manter o andamento contra o atrito cinético.",
    "distractorAnalysis": [
      "Está incorreta: A balança mede a mesma massa corporal independentemente da postura do utente.",
      "Está incorreta: Menor calibre de agulha aumenta a resistência hidrodinâmica e abranda o fluxo, pertencente à hidrodinâmica.",
      "Está incorreta: A termorregulação da pele é um fenómeno térmico metabólico, não o exemplo biomecânico em análise."
    ],
    "nursingApplication": "Ensina os profissionais a aplicar um esforço inicial controlado ao arrancar com a maca para não lesionar os ombros e coluna."
  },
  {
    "id": 1085,
    "topicId": 1,
    "question": "Uma força horizontal de 20 N é aplicada a uma maca parada, mas a maca não se move porque o atrito estático máximo é de 50 N. Qual é a força de atrito real que atua na maca nesse momento?",
    "options": [
      "50 N em sentido contrário, fazendo a maca andar para trás.",
      "Exatamente 20 N em sentido oposto, equilibrando perfeitamente a força aplicada.",
      "0 N, porque o atrito só existe quando o objeto já se está a mover.",
      "1000 N, multiplicando a força pela gravidade local."
    ],
    "correctIndex": 1,
    "explanation": "Enquanto o corpo permanece em repouso, o atrito estático ajusta-se exatamente ao valor da força aplicada para manter o equilíbrio: F_atrito = 20 N (Fr = 0). Os 50 N representam apenas o limite máximo antes de romper o repouso.",
    "distractorAnalysis": [
      "Está incorreta: Se o atrito fosse 50 N contra 20 N aplicados, a maca aceleraria para trás sozinha, o que seria fisicamente absurdo.",
      "Está incorreta: O atrito estático existe precisamente no repouso para impedir o início do movimento.",
      "Está incorreta: Multiplicar forças não tem sentido físico para determinar forças de equilíbrio estático."
    ],
    "nursingApplication": "Evita a confusão comum entre o atrito estático instantâneo e o valor de atrito estático limite máximo."
  },
  {
    "id": 1086,
    "topicId": 1,
    "question": "Qual é a orientação geométrica (direção e sentido) do vetor Força de Atrito em relação à superfície de contacto?",
    "options": [
      "Direção perpendicular à superfície e sentido apontando para o interior do solo.",
      "Direção vertical ascendente no sentido da força de gravidade.",
      "Direção tangencial (paralela) à superfície de contacto e sentido oposto ao movimento ou tendência de movimento.",
      "Direção circular oblíqua rodando no sentido dos ponteiros do relógio."
    ],
    "correctIndex": 2,
    "explanation": "A força de atrito é uma força tangencial: a sua linha de ação é sempre paralela à interface de contacto entre os corpos e aponta no sentido oposto ao deslocamento (ou tendência de deslocamento).",
    "distractorAnalysis": [
      "Está incorreta: A força perpendicular é a Força Normal (N), não o atrito.",
      "Está incorreta: A força vertical descendente é a gravidade (peso); a força de atrito em pisos horizontais é horizontal.",
      "Está incorreta: O atrito de contacto não tem direção circular rotativa intrínseca."
    ],
    "nursingApplication": "Fundamental para desenhar e analisar esquemas de forças em rampas e transferências no leito."
  },
  {
    "id": 1087,
    "topicId": 1,
    "question": "Por que razão o calçado profissional de uso hospitalar deve apresentar solas com elevado coeficiente de atrito estático com o piso?",
    "options": [
      "Aumenta instantaneamente para o dobro da força inicial.",
      "Torna-se infinita parando a maca de forma inamovível.",
      "Permanece rigorosamente igual ao atrito estático máximo de arranque.",
      "Diminui para o valor do atrito cinético, tornando a condução mais suave."
    ],
    "correctIndex": 3,
    "explanation": "Assim que o repouso é vencido, a resistência passa do regime estático máximo para o regime cinético, que é inferior. Por isso, manter o movimento exige menor força do que o arranque inicial.",
    "distractorAnalysis": [
      "Está incorreta: A força de resistência diminui após o arranque, nunca aumenta.",
      "Está incorreta: Resistência infinita impediria qualquer transporte no mundo físico real.",
      "Está incorreta: O atrito cinético é inferior ao atrito estático máximo, conforme comprovado experimentalmente na física do atrito."
    ],
    "nursingApplication": "Permite dosear o esforço físico muscular de modo a aliviar a força após a colocação em marcha do equipamento."
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
      "Está incorreta: Travar as rodas bloqueia o equipamento e impede o movimento, em vez de facilitar o transporte."
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
    "explanation": "Como qualquer outra força física (peso, normal, tensão muscular), a força de atrito quantifica-se em Newtons (N) no Sistema Internacional.",
    "distractorAnalysis": [
      "Está incorreta: kg/m² é unidade de densidade superficial, não de força.",
      "Está incorreta: Pascal (Pa) é unidade de pressão.",
      "Está incorreta: Joule por segundo (J/s) corresponde a Watt (W), unidade de potência."
    ],
    "nursingApplication": "Garante coerência dimensional ao calcular o somatório de forças que atuam num corpo."
  },
  {
    "id": 1090,
    "topicId": 1,
    "question": "Se o atrito cinético de uma maca em movimento for de 25 N e dois enfermeiros a puxarem juntos aplicando uma força total de 25 N na mesma direção e sentido do movimento:",
    "options": [
      "A maca vai acelerar continuamente ganhando 10 m/s² a cada segundo.",
      "A maca vai travar imediatamente e parar em menos de um segundo.",
      "A força resultante é nula (Fr = 0 N) e a maca prossegue em Movimento Retilíneo e Uniforme.",
      "O atrito desaparece transformando-se em calor de combustão espontânea."
    ],
    "correctIndex": 2,
    "explanation": "A força resultante é F_aplicada - F_atrito = 25 N - 25 N = 0 N. Com Fr = 0 N, o corpo em movimento mantém a sua velocidade constante em Movimento Retilíneo e Uniforme (MRU).",
    "distractorAnalysis": [
      "Está incorreta: Para acelerar seria necessária uma força resultante positiva (F_aplicada > F_atrito).",
      "Está incorreta: A maca só travaria se a força de atrito superasse a força aplicada (F_aplicada < F_atrito).",
      "Está incorreta: O atrito gera ligeiro aquecimento térmico impercetível, nunca combustão espontânea em macas."
    ],
    "nursingApplication": "Evidencia como manter velocidade constante exige apenas neutralizar o atrito cinético das rodas."
  },
  {
    "id": 1091,
    "topicId": 1,
    "question": "No Sistema Internacional (SI) e na dinâmica clássica, como está caracterizada a grandeza 'Força (F)' quanto à sua natureza, unidade e efeito físico?",
    "options": [
      "Tipo: Escalar; Unidade: kg; Definição: Quantidade de matéria; Exemplo: Massa corporal.",
      "Tipo: Escalar; Unidade: Pa; Definição: Força por área; Exemplo: Pressão capilar.",
      "Tipo: Vetorial; Unidade: N/m²; Definição: Atração cósmica; Exemplo: Peso na balança.",
      "Tipo: Vetorial; Unidade SI: Newton (N); Definição: Produz aceleração ou deformação; Exemplo: Força muscular de contração do quadríceps."
    ],
    "correctIndex": 3,
    "explanation": "Grandeza: Força (F) | Tipo: Vetorial | Unidade SI: Newton (N) | Definição: Produz aceleração ou deformação | Exemplo: Força muscular de contração do quadríceps.",
    "distractorAnalysis": [
      "Está incorreta: Esta linha descreve a grandeza Massa (m), não a Força.",
      "Está incorreta: Esta linha descreve a grandeza Pressão (p), não a Força.",
      "Está incorreta: A unidade de força no SI é Newton (N), e não N/m² (que é Pascal)."
    ],
    "nursingApplication": "Permite relacionar o conceito físico de força com a contração do quadríceps na marcha e extensão do joelho."
  },
  {
    "id": 1092,
    "topicId": 1,
    "question": "No Sistema Internacional (SI), como está caracterizada a grandeza 'Massa (m)' quanto à sua natureza física e unidade padrão?",
    "options": [
      "Tipo: Escalar; Unidade SI: Quilograma (kg); Definição: Medida da quantidade de matéria; Exemplo: Massa corporal do doente pesada na balança.",
      "Tipo: Vetorial; Unidade SI: Newton (N); Definição: Atração gravítica; Exemplo: Força muscular.",
      "Tipo: Escalar; Unidade SI: Pascal (Pa); Definição: Deformação do sacro; Exemplo: Lesão de pressão.",
      "Tipo: Vetorial; Unidade SI: Quilograma (kg); Definição: Produz aceleração centrípeta; Exemplo: Andarilho."
    ],
    "correctIndex": 0,
    "explanation": "Grandeza: Massa (m) | Tipo: Escalar | Unidade SI: Quilograma (kg) | Definição: Medida da quantidade de matéria | Exemplo: Massa corporal do doente pesada na balança.",
    "distractorAnalysis": [
      "Está incorreta: A massa é uma grandeza escalar em kg, não vetorial em Newtons.",
      "Está incorreta: Pascal mede pressão, grandeza diferente da massa inercial.",
      "Está incorreta: A massa é puramente escalar, não possuindo direção nem sentido vetorial."
    ],
    "nursingApplication": "Clarifica a linguagem técnica ao referir a massa corporal aferida nas balanças hospitalares."
  },
  {
    "id": 1093,
    "topicId": 1,
    "question": "No âmbito da mecânica e gravitação, como está caracterizada a grandeza 'Peso (P)' quanto à sua natureza vetorial e unidade SI?",
    "options": [
      "Tipo: Escalar; Unidade SI: Quilograma (kg); Definição: Quantidade de água corporal; Exemplo: Hidratação.",
      "Tipo: Vetorial; Unidade SI: Newton (N); Definição: Força de atração gravítica; Exemplo: Peso do doente sobre o colchão.",
      "Tipo: Vetorial; Unidade SI: Pascal (Pa); Definição: Tensão nos tendões; Exemplo: Marcha.",
      "Tipo: Escalar; Unidade SI: Newton (N); Definição: Aceleração da maca; Exemplo: Ambulância."
    ],
    "correctIndex": 1,
    "explanation": "Grandeza: Peso (P) | Tipo: Vetorial | Unidade SI: Newton (N) | Definição: Força de atração gravítica | Exemplo: Peso do doente sobre o colchão.",
    "distractorAnalysis": [
      "Está incorreta: O peso é uma força vetorial medida em Newtons, não uma grandeza escalar em kg.",
      "Está incorreta: Pascal é unidade de pressão (N/m²), enquanto o peso é uma força expressa em Newtons.",
      "Está incorreta: O peso tem direção vertical e sentido descendente para o centro da Terra, sendo estritamente vetorial."
    ],
    "nursingApplication": "Essencial para distinguir rigorosamente peso (força em N) de massa (matéria em kg) em relatórios de biofísica."
  },
  {
    "id": 1094,
    "topicId": 1,
    "question": "Como se define a grandeza física 'Pressão (p)' e qual é a sua unidade padrão no Sistema Internacional (SI)?",
    "options": [
      "Tipo: Vetorial; Unidade SI: Newton (N); Definição: Interação entre corpos; Exemplo: Tendão do bíceps.",
      "Tipo: Escalar; Unidade SI: Quilograma (kg); Definição: Medida de inércia; Exemplo: Doente bariátrico.",
      "Tipo: Escalar; Unidade SI: Pascal (N/m²); Definição: Força distribuída por unidade de área; Exemplo: Pressão capilar na pele sobre o sacro.",
      "Tipo: Vetorial; Unidade SI: Joule (J); Definição: Trabalho muscular; Exemplo: Elevação de carga."
    ],
    "correctIndex": 2,
    "explanation": "Grandeza: Pressão (p) | Tipo: Escalar | Unidade SI: Pascal (N/m²) | Definição: Força distribuída por unidade de área | Exemplo: Pressão capilar na pele sobre o sacro.",
    "distractorAnalysis": [
      "Está incorreta: A pressão é uma grandeza escalar em Pascal (N/m²), não uma força vetorial em Newtons.",
      "Está incorreta: Quilograma mede massa, não pressão.",
      "Está incorreta: Joule mede energia e trabalho, grandeza física diferente de pressão superficial."
    ],
    "nursingApplication": "Fundamenta a fisiopatologia da isquemia cutânea e a monitorização de dispositivos de alívio de pressão."
  },
  {
    "id": 1095,
    "topicId": 1,
    "question": "Qual é a distinção física essencial entre Massa (m) e Peso (P) na mecânica clássica?",
    "options": [
      "Massa é medida em Newtons e Peso é medido em Quilogramas.",
      "Massa e Peso são exatamente a mesma grandeza física, sem qualquer diferença teórica.",
      "A massa varia consoante o local do universo e o peso é constante em todo o lado.",
      "Massa é uma grandeza escalar (kg) intrínseca de matéria; Peso é uma força vetorial (N) resultante da atração gravítica (P = m · g)."
    ],
    "correctIndex": 3,
    "explanation": "A massa (escalar em kg) quantifica a matéria e inércia de um corpo, sendo invariável com o local; o peso (vetorial em N) é a força gravítica exercida sobre essa massa, variando com a aceleração da gravidade local g.",
    "distractorAnalysis": [
      "Está incorreta: As unidades estão invertidas na opção: a massa mede-se em kg e o peso mede-se em N.",
      "Está incorreta: Confundir massa com peso é um erro concetual clássico que a análise de grandezas visa expressamente corrigir.",
      "Está incorreta: É a massa que é constante intrínseca, enquanto o peso varia com a gravidade de cada planeta ou altitude."
    ],
    "nursingApplication": "Evita a linguagem coloquial incorreta e consolida o rigor científico na formação inicial de enfermagem."
  },
  {
    "id": 1096,
    "topicId": 1,
    "question": "Qual é a equivalência dimensional direta de 1 Pascal (Pa) em unidades de base do Sistema Internacional?",
    "options": [
      "1 Pa = 1 N/m² (um Newton por cada metro quadrado de área).",
      "1 Pa = 1 kg · m / s",
      "1 Pa = 1 N · m (um Newton multiplicado por metro).",
      "1 Pa = 1 kg / s²"
    ],
    "correctIndex": 0,
    "explanation": "Pascal (N/m²)', significando que a pressão equivale a uma força de um Newton distribuída uniformemente por uma área de um metro quadrado.",
    "distractorAnalysis": [
      "Está incorreta: kg · m / s é unidade de momento linear (quantidade de movimento), não de pressão.",
      "Está incorreta: N · m é a unidade de momento de força (torque) ou trabalho/energia (Joule).",
      "Está incorreta: kg / s² é unidade de tensão superficial, dimensionalmente distinta de Pascal."
    ],
    "nursingApplication": "Permite aos alunos realizar conversões de unidades entre Newtons de carga e área cutânea de apoio."
  },
  {
    "id": 1097,
    "topicId": 1,
    "question": "Na biomecânica do aparelho locomotor, qual é um exemplo clássico de força muscular gerada ativamente para estender o joelho?",
    "options": [
      "A pressão intracraniana medida por um cateter ventricular.",
      "A força muscular de contração do quadríceps.",
      "A temperatura do sangue na aorta ascendente.",
      "O diâmetro médio dos capilares glomerulares do rim."
    ],
    "correctIndex": 1,
    "explanation": "O cita expressamente como exemplo de força: 'Força muscular de contração do quadríceps'.",
    "distractorAnalysis": [
      "Está incorreta: Pressão intracraniana é um exemplo de pressão hidrostática, não o exemplo de força.",
      "Está incorreta: Temperatura do sangue é uma grandeza termodinâmica escalar.",
      "Está incorreta: Diâmetro capilar é uma medida geométrica anatómica de comprimento."
    ],
    "nursingApplication": "Destaca a função motora do músculo quadríceps na estabilização do joelho e na marcha humana."
  },
  {
    "id": 1098,
    "topicId": 1,
    "question": "Se uma pessoa com massa de 60 kg na Terra for transportada para a Lua (onde a gravidade é 1/6 da terrestre), o que acontece à sua massa e ao seu peso?",
    "options": [
      "A massa reduz-se para 10 kg e o peso mantém-se em 588 N.",
      "Ambos diminuem para zero, ficando o corpo sem matéria nem peso.",
      "A sua massa mantém-se rigorosamente em 60 kg, mas o seu peso diminui para cerca de 1/6 do valor terrestre.",
      "A massa aumenta para 360 kg para compensar a menor atração gravítica."
    ],
    "correctIndex": 2,
    "explanation": "A massa é a quantidade de matéria, mantendo-se constante em 60 kg em qualquer ponto do universo. O peso (P = m · g) diminui na Lua proporcionalmente à menor aceleração gravítica g.",
    "distractorAnalysis": [
      "Está incorreta: A massa não diminui para 10 kg; o número de átomos e células do corpo permanece inalterado.",
      "Está incorreta: A matéria do corpo não se dissipa no espaço e a gravidade na Lua não é zero (g_lua ≈ 1,62 m/s²).",
      "Está incorreta: A massa inercial não sofre qualquer aumento por alteração da gravidade local."
    ],
    "nursingApplication": "Reforça de forma indelével a independência entre quantidade de matéria (massa) e atração gravitacional (peso)."
  },
  {
    "id": 1099,
    "topicId": 1,
    "question": "Por que razão a Pressão (p) é classificada como uma grandeza escalar e não vetorial na física mecânica?",
    "options": [
      "Porque a pressão atua sempre exclusivamente no sentido horizontal para a esquerda.",
      "Porque os aparelhos de medição de pressão não têm pilhas elétricas.",
      "Porque a pressão deixa de existir quando o corpo humano se encontra em repouso.",
      "Porque fica totalmente caracterizada por um valor numérico e unidade, sem direção espacial vetorial fixa."
    ],
    "correctIndex": 3,
    "explanation": "A pressão é uma grandeza escalar: num determinado ponto de um fluido ou interface, quantifica a intensidade da força normal distribuída por unidade de área sem apontar para uma direção preferencial única no espaço.",
    "distractorAnalysis": [
      "Está incorreta: Grandezas que têm direção e sentido fixos são vetoriais, não escalares.",
      "Está incorreta: A forma de funcionamento do instrumento não dita a natureza matemática da grandeza física.",
      "Está incorreta: A pressão capilar e hidrostática existe continuamente no corpo humano em repouso."
    ],
    "nursingApplication": "Garante a correta diferenciação entre a força exercida (vetor) e o seu efeito distribuído na pele (pressão, escalar)."
  },
  {
    "id": 1100,
    "topicId": 1,
    "question": "Entre as grandezas fundamentais da mecânica (Força, Massa, Peso e Pressão), qual é a ÚNICA cuja unidade do Sistema Internacional é o Quilograma (kg)?",
    "options": [
      "Massa (m).",
      "Força (F).",
      "Peso (P).",
      "Pressão (p)."
    ],
    "correctIndex": 0,
    "explanation": "Na análise de grandezas da mecânica, a única grandeza expressa em Quilogramas (kg) é a Massa (m). Força e Peso medem-se em Newtons (N), e Pressão mede-se em Pascal (N/m²).",
    "distractorAnalysis": [
      "Está incorreta: A Força tem unidade Newton (N) no SI.",
      "Está incorreta: O Peso é uma força gravítica e tem unidade Newton (N) no SI.",
      "Está incorreta: A Pressão tem unidade Pascal (Pa = N/m²) no SI."
    ],
    "nursingApplication": "Consolida a tabela comparativa fundamental que encerra a primeira secção temática do Tópico 1."
  },
  {
    "id": 1101,
    "topicId": 1,
    "question": "Numa marcha de emergência a 80 km/h, por que razão um profissional de saúde em pé no compartimento da ambulância é projetado para a frente quando esta trava bruscamente a fundo?",
    "options": [
      "Porque a força nuclear fraca atrai o corpo do enfermeiro para o tablier.",
      "Pela 1ª Lei de Newton (Lei da Inércia), o corpo do enfermeiro mantém a velocidade de 80 km/h até que uma força atue sobre ele.",
      "Porque o peso do enfermeiro triplica espontaneamente durante a travagem.",
      "Porque a pressão do ar no interior da cabina diminui subitamente criando vácuo à frente."
    ],
    "correctIndex": 1,
    "explanation": "Pela 1ª Lei de Newton (Lei da Inércia), o corpo do enfermeiro mantém a velocidade de 80 km/h até que uma força atue sobre ele'.",
    "distractorAnalysis": [
      "Está incorreta: A força nuclear fraca medeia decaimentos radioativos, não atuando na dinâmica de veículos.",
      "Está incorreta: A travagem desacelera a viatura, mas a gravidade e o peso do enfermeiro permanecem inalterados.",
      "Está incorreta: A cabina da ambulância não gera vácuo durante a travagem; a projeção decorre exclusivamente da inércia mecânica."
    ],
    "nursingApplication": "Reforça a obrigatoriedade de viajar sentado com cinto de segurança durante o transporte em marcha de emergência."
  },
  {
    "id": 1102,
    "topicId": 1,
    "question": "Numa travagem brusca a 80 km/h, por que razão um ocupante sem cinto de segurança colide contra a divisória com uma força equivalente a centenas de quilos?",
    "options": [
      "Porque a massa corporal do profissional aumenta com a velocidade atingindo centenas de quilos.",
      "Porque a Terra puxa o profissional horizontalmente através de atração gravítica extraordinária.",
      "Pela 2ª Lei de Newton (Lei fundamental da dinâmica), a desaceleração violenta exige uma força massiva para parar o corpo (F = m · a).",
      "Porque a divisória da ambulância atrai os corpos metálicos e tecidos biológicos por magnetismo."
    ],
    "correctIndex": 2,
    "explanation": "Pela 2ª Lei de Newton (Lei fundamental da dinâmica), a desaceleração violenta exige uma força massiva para parar o corpo. Sem cinto de segurança, o enfermeiro colidirá com a divisória com força equivalente à sua massa multiplicada pela desaceleração'.",
    "distractorAnalysis": [
      "Está incorreta: A massa inercial do corpo é constante na mecânica clássica e não aumenta a velocidades de 80 km/h.",
      "Está incorreta: A atração gravítica atua na vertical para o centro da Terra, não gerando forças horizontais para a divisória.",
      "Está incorreta: A divisória não possui magnetismo de atração sobre tecidos biológicos."
    ],
    "nursingApplication": "Alerta para a magnitude devastadora das forças de desaceleração que atuam sobre a equipa sem retenção mecânica."
  },
  {
    "id": 1103,
    "topicId": 1,
    "question": "Num impacto violento durante a travagem brusca de um veículo, por que razão a divisória frontal fica amolgada ou parte ao ser atingida pelo corpo do ocupante?",
    "options": [
      "Porque a divisória é feita de materiais de plasticina que se deformam sem qualquer força.",
      "Porque o atrito cinético da estrada transmite eletricidade estática para a divisória.",
      "Porque o peso da ambulância é transferido na totalidade para o painel de separação.",
      "Pela 3ª Lei de Newton (par ação-reação), a intensidade da força que o enfermeiro exerce sobre a divisória é a mesma que a divisória exerce sobre o enfermeiro."
    ],
    "correctIndex": 3,
    "explanation": "Pela 3ª Lei de Newton (par ação-reação), a intensidade da força que a divisória exerce sobre o enfermeiro é a mesma que o enfermeiro exerce sobre a divisória'. Ambas as estruturas sofrem a mesma força massiva mútua.",
    "distractorAnalysis": [
      "Está incorreta: As divisórias são construídas em estruturas sólidas rígidas e não em materiais plásticos moles.",
      "Está incorreta: A deformação resulta de esforço mecânico por impacto (força de colisão), não de eletricidade estática.",
      "Está incorreta: O peso da ambulância apoia-se nas rodas e suspensão, não se transferindo para a divisória divisória."
    ],
    "nursingApplication": "Demonstra que proteger o utente e a equipa com cintos evita danos materiais e lesões traumáticas graves."
  },
  {
    "id": 1104,
    "topicId": 1,
    "question": "Como pode uma equipa de emergência médica prevenir o desfecho traumático de projeção do corpo durante manobras bruscas de travagem a alta velocidade?",
    "options": [
      "Pelo uso sistemático do cinto de segurança por todos os ocupantes mesmo em marcha de socorro.",
      "Viajando em pé sobre um calçado com sola lubrificada com óleo.",
      "Segurando-se firmemente apenas com uma mão na maçaneta da porta.",
      "Abrindo as janelas para reduzir a pressão atmosférica dentro do veículo."
    ],
    "correctIndex": 0,
    "explanation": "O refere explicitamente: 'Sem cinto de segurança, o enfermeiro colidirá com a divisória'. O cinto aplica a força externa gradual necessária para desacelerar o corpo solidariamente com a ambulância.",
    "distractorAnalysis": [
      "Está incorreta: Sola oleada diminuiria o atrito solo-calçado provocando queda imediata ao primeiro desvio.",
      "Está incorreta: A força de preensão manual humana (~300-400 N) é totalmente incapaz de suster forças de impacto de milhares de Newtons.",
      "Está incorreta: A pressão atmosférica não altera a inércia dos corpos no interior da viatura."
    ],
    "nursingApplication": "Regra de ouro de segurança e saúde ocupacional no trabalho em serviços de emergência pré-hospitalar."
  },
  {
    "id": 1105,
    "topicId": 1,
    "question": "Durante a colisão violenta de um corpo contra a divisória de um veículo em desaceleração, qual das seguintes afirmações sobre as intensidades das forças é verdadeira segundo a 3.ª Lei de Newton?",
    "options": [
      "A divisória aplica mais força sobre o enfermeiro do que o enfermeiro sobre a divisória.",
      "A força que o enfermeiro exerce sobre a divisória tem rigorosamente a mesma intensidade da que a divisória exerce sobre o enfermeiro.",
      "O enfermeiro só exerce força sobre a divisória se for um utente bariátrico com mais de 100 kg.",
      "A intensidade de ambas as forças é nula porque a colisão é instantânea."
    ],
    "correctIndex": 1,
    "explanation": "A 3ª Lei de Newton impõe igualdade estrita de intensidade para qualquer par de forças interativas: F_enfermeiro->divisória = F_divisória->enfermeiro.",
    "distractorAnalysis": [
      "Está incorreta: Afirmar que uma das forças é maior viola frontalmente o princípio da ação e reação de Newton.",
      "Está incorreta: Qualquer corpo material em colisão exerce força proporcional à sua desaceleração (F = m · a).",
      "Está incorreta: Embora a colisão seja rápida, as forças instantâneas atingem picos de extrema intensidade."
    ],
    "nursingApplication": "Consolidação teórica da equivalência mútua de forças no choque mecânico."
  },
  {
    "id": 1106,
    "topicId": 1,
    "question": "Se um profissional de 70 kg desacelerar bruscamente de 80 km/h para 0 km/h em apenas 0,2 segundos durante a colisão contra a divisória, que ordem de grandeza atinge a força média de impacto?",
    "options": [
      "A força de impacto reduz-se para metade porque o tempo foi menor.",
      "A força de impacto permanece rigorosamente constante.",
      "A força de impacto duplica, pois pela fórmula F = m · a a força é diretamente proporcional à aceleração.",
      "A força anula-se completamente devido à paragem quase instantânea."
    ],
    "correctIndex": 2,
    "explanation": "Desacelerar no dobro da rapidez significa que a taxa de variação de velocidade (desaceleração a) duplica. Pela 2ª Lei (F = m · a), com a massa m constante, a força de impacto duplica.",
    "distractorAnalysis": [
      "Está incorreta: Menor tempo de travagem aumenta a desaceleração (a = Δv / Δt), aumentando a força e não diminuindo.",
      "Está incorreta: A força varia na proporção direta da aceleração/desaceleração sofrida pelo corpo.",
      "Está incorreta: Paragens instantâneas gerariam acelerações e forças teoricamente infinitas, provocando destruição máxima."
    ],
    "nursingApplication": "Sublinha a necessidade de condução defensiva suave por parte dos motoristas de emergência médica."
  },
  {
    "id": 1107,
    "topicId": 1,
    "question": "Se uma ambulância transita a uma velocidade constante de 80 km/h numa estrada retilínea horizontal antes de travar, em que estado dinâmico se encontra o sistema?",
    "options": [
      "30 km/h",
      "50 km/h",
      "120 km/h",
      "80 km/h"
    ],
    "correctIndex": 3,
    "explanation": "O estipula claramente o cenário: 'Considere uma ambulância em marcha de emergência que trava bruscamente a 80 km/h'.",
    "distractorAnalysis": [
      "Está incorreta: 30 km/h é a velocidade típica de marcha moderada em meio urbano, não a do cenário em análise.",
      "Está incorreta: 50 km/h é o limite geral dentro de localidades, mas o cenário em análise especifica 80 km/h.",
      "Está incorreta: 120 km/h é o limite de autoestrada, superior ao valor indicado no caso clínico."
    ],
    "nursingApplication": "Permite aos alunos reconhecer os dados exatos do problema biomecânico explorado nas aulas."
  },
  {
    "id": 1108,
    "topicId": 1,
    "question": "Por que razão o uso do cinto de segurança reduz drasticamente as lesões corporais em travagens violentas ou colisões veiculares?",
    "options": [
      "Que as três Leis de Newton atuam de forma combinada e explicam integralmente o fenómeno de uma colisão real.",
      "Que a 1ª Lei de Newton só se aplica a veículos e a 2ª Lei só a seres vivos.",
      "Que a Biofísica se desliga da prática clínica e serve apenas para cálculos no papel.",
      "Que a gravidade terrestre é anulada durante movimentos de travagem de emergência."
    ],
    "correctIndex": 0,
    "explanation": "O desafio demonstra a união das 3 leis: a 1ª Lei explica por que o corpo é projetado (inércia), a 2ª Lei quantifica a magnitude da força de travagem (F = m · a) e a 3ª Lei explica a deformação da divisória (ação-reação).",
    "distractorAnalysis": [
      "Está incorreta: Todas as Leis de Newton aplicam-se universalmente a qualquer corpo material, vivo ou inanimado.",
      "Está incorreta: O exemplo ilustra precisamente a aplicação direta da biofísica à preservação da vida e prevenção de acidentes.",
      "Está incorreta: A gravidade mantém-se sempre atuante na direção vertical ao longo de todo o evento."
    ],
    "nursingApplication": "Promove o pensamento crítico e a integração de conceitos biofísicos em incidentes do quotidiano hospitalar."
  },
  {
    "id": 1109,
    "topicId": 1,
    "question": "A análise física do cenário da ambulância a 80 km/h demonstra de forma integrada quais leis da mecânica?",
    "options": [
      "Atua como um condutor de calor que evapora a água corporal.",
      "Atua como a força externa necessária para alterar o estado de movimento e parar o corpo do profissional.",
      "Transforma a inércia em energia nuclear forte no tórax.",
      "Acelera o enfermeiro para que ele atravesse o habitáculo da ambulância."
    ],
    "correctIndex": 1,
    "explanation": "Pela 1ª Lei, o enfermeiro continuaria a mover-se a 80 km/h até que uma força externa atuasse sobre ele. A divisória é a estrutura rígida que aplica essa força externa de paragem (infelizmente de forma brusca e traumática).",
    "distractorAnalysis": [
      "Está incorreta: A divisória aplica forças mecânicas normais de contacto, não trocas de calor evaporativas.",
      "Está incorreta: Não há conversão de inércia em forças nucleares subatómicas.",
      "Está incorreta: A divisória trava o movimento do corpo, reduzindo a sua velocidade de 80 km/h para zero."
    ],
    "nursingApplication": "Evidencia por que os sistemas de retenção e airbags distribuem a desaceleração em maior tempo e área."
  },
  {
    "id": 1110,
    "topicId": 1,
    "question": "No transporte de utentes em ambulância, que medida de segurança decorre diretamente da 1.ª Lei de Newton (Lei da Inércia)?",
    "options": [
      "Multiplicando a temperatura corporal pela velocidade da ambulância.",
      "Dividindo o peso do veículo pelo volume de oxigénio na cabina.",
      "Multiplicando a massa corporal do indivíduo pela desaceleração sofrida (F = m · a).",
      "Somando a altura do utente ao diâmetro do pneu da ambulância."
    ],
    "correctIndex": 2,
    "explanation": "O esclarece textualmente: 'colidirá com a divisória com força equivalente à sua massa multiplicada pela desaceleração'.",
    "distractorAnalysis": [
      "Está incorreta: Temperatura e velocidade não produzem a dimensão física de força (Newton).",
      "Está incorreta: Dividir peso de veículo por volume de ar é dimensionalmente incorreto.",
      "Está incorreta: Somar grandezas geométricas não quantifica o impacto mecânico de colisão."
    ],
    "nursingApplication": "Permite dimensionar a importância dos sistemas de retenção estofados e cintos de segurança de múltiplos pontos."
  },
  {
    "id": 1111,
    "topicId": 1,
    "question": "Como se define formalmente o Estado de Equilíbrio de um corpo na estática mecânica?",
    "options": [
      "O corpo permanece sempre em movimento acelerado contínuo após qualquer desvio.",
      "Após desviar um corpo da sua posição de equilíbrio, este tende a desviar-se ainda mais.",
      "Após desviar um corpo da sua posição de equilíbrio, este permanece em equilíbrio na nova posição.",
      "O corpo retorna à posição inicial de forma espontânea após ter sido desviado da sua posição de equilíbrio."
    ],
    "correctIndex": 3,
    "explanation": "Equilíbrio Estável: O corpo retorna à posição inicial de forma espontânea após ter sido desviado da sua posição de equilíbrio'.",
    "distractorAnalysis": [
      "Está incorreta: Movimento acelerado perpétuo violaria a conservação de energia e a definição de equilíbrio.",
      "Está incorreta: Tender a desviar-se ainda mais corresponde à definição de Equilíbrio Instável.",
      "Está incorreta: Permanecer em equilíbrio na nova posição corresponde à definição de Equilíbrio Indiferente."
    ],
    "nursingApplication": "Exemplo biomecânico da postura bípede com pés afastados, capaz de resistir a pequenas perturbações sem queda."
  },
  {
    "id": 1112,
    "topicId": 1,
    "question": "Quais são as duas condições fundamentais de equilíbrio estático para um corpo rígido extenso?",
    "options": [
      "Após desviar um corpo da sua posição de equilíbrio, este tende a desviar-se ainda mais da sua posição de equilíbrio.",
      "O corpo retorna à posição inicial de forma espontânea após ter sido desviado.",
      "Após ser desviado, o corpo permanece em repouso na nova posição sem sofrer qualquer momento.",
      "O corpo perde totalmente a sua massa e entra em levitação gravitacional."
    ],
    "correctIndex": 0,
    "explanation": "Equilíbrio Instável: Após desviar um corpo da sua posição de equilíbrio, este tende a desviar-se ainda mais da sua posição de equilíbrio'.",
    "distractorAnalysis": [
      "Está incorreta: Retornar espontaneamente à posição inicial é a definição de Equilíbrio Estável.",
      "Está incorreta: Permanecer equilibrado na nova posição é a definição de Equilíbrio Indiferente.",
      "Está incorreta: A massa nunca se perde e a gravidade continua a atuar plenamente."
    ],
    "nursingApplication": "Descreve o estado biomecânico de um utente com risco iminente de queda (ex.: em pontas dos pés com base estreita)."
  },
  {
    "id": 1113,
    "topicId": 1,
    "question": "Como se define o 'Equilíbrio Estável' na mecânica clássica?",
    "options": [
      "O corpo oscila periodicamente entre duas posições extremas a alta frequência.",
      "Após desviar um corpo da sua posição de equilíbrio, este permanece em equilíbrio na nova posição.",
      "O corpo desmorona imediatamente com fratura mecânica estrutural.",
      "O corpo retorna obrigatoriamente à posição de origem após 60 segundos."
    ],
    "correctIndex": 1,
    "explanation": "Equilíbrio Indiferente: Após desviar um corpo da sua posição de equilíbrio, este permanece em equilíbrio na nova posição'.",
    "distractorAnalysis": [
      "Está incorreta: Oscilações periódicas descrevem pêndulos ou osciladores harmónicos, não a definição de equilíbrio estático.",
      "Está incorreta: Desmoronamento estrutural é falha mecânica de materiais, não equilíbrio indiferente.",
      "Está incorreta: Retornar à origem define equilíbrio estável, não indiferente."
    ],
    "nursingApplication": "Exemplificado por uma bola ou roda num piso plano horizontal, que encontra novo equilíbrio onde quer que pare."
  },
  {
    "id": 1114,
    "topicId": 1,
    "question": "Como se define o 'Equilíbrio Instável' na análise estática de um corpo?",
    "options": [
      "Um corpo em equilíbrio nunca pode ter qualquer força a atuar sobre ele.",
      "Apenas os corpos que se encontram no vácuo espacial podem atingir o equilíbrio.",
      "Um corpo em equilíbrio pode ter forças a atuar sobre ele; a força resultante é que é nula!",
      "Para haver equilíbrio, a força normal tem de ser sempre o dobro da força de atrito."
    ],
    "correctIndex": 2,
    "explanation": "O destaca a clarificação pedagógica: 'Um corpo em equilíbrio pode ter forças a atuar sobre ele; a força resultante é que é nula!'.",
    "distractorAnalysis": [
      "Está incorreta: Afirmar que não atuam forças é um erro concetual grave; atuam frequentemente o peso e a normal, anulando-se mutuamente.",
      "Está incorreta: O equilíbrio ocorre em qualquer ambiente onde o somatório de forças e momentos se anule.",
      "Está incorreta: Não existe qualquer proporção fixa universal que exija que a normal seja o dobro do atrito."
    ],
    "nursingApplication": "Ensina a identificar que um doente em repouso no leito tem múltiplas forças a atuar em si em perfeito cancelamento mútuo."
  },
  {
    "id": 1115,
    "topicId": 1,
    "question": "Como se define o 'Equilíbrio Indiferente' (ou neutro) na estática mecânica?",
    "options": [
      "Equilíbrio indiferente.",
      "Equilíbrio instável.",
      "Movimento perpétuo acelerado.",
      "Equilíbrio estável (se for ligeiramente desviada, as forças restauradoras fazem-na regressar ao fundo)."
    ],
    "correctIndex": 3,
    "explanation": "No fundo da taça, o centro de gravidade está na posição mais baixa possível. Ao ser deslocada para o lado, o peso gera uma força restauradora que a faz regressar espontaneamente à posição inicial (Equilíbrio Estável).",
    "distractorAnalysis": [
      "Está incorreta: Indiferente seria se a taça fosse um piso plano e a esfera ficasse parada em qualquer ponto.",
      "Está incorreta: Instável seria se a esfera estivesse no topo de uma taça virada para baixo (cúpula convexa), caindo ao menor toque.",
      "Está incorreta: O atrito dissipa as oscilações e a esfera atinge o repouso no fundo."
    ],
    "nursingApplication": "Compreensão análoga ao centro de gravidade baixo na postura humana, que confere autorrecuperação contra quedas."
  },
  {
    "id": 1116,
    "topicId": 1,
    "question": "Qual dos seguintes exemplos representa fielmente uma situação de Equilíbrio Estável?",
    "options": [
      "Equilíbrio instável (qualquer pequeníssimo desvio gera um momento do peso que afasta o corpo ainda mais da posição inicial, fazendo-o tombar).",
      "Equilíbrio estável perfeito e inviolável.",
      "Equilíbrio indiferente em qualquer inclinação.",
      "Estado de translação retilínea uniforme."
    ],
    "correctIndex": 0,
    "explanation": "Com uma base de sustentação quase pontual e CG elevado, qualquer microdesvio desloca a linha de gravidade para fora do apoio, criando momento desestabilizador: o corpo tomba (Equilíbrio Instável).",
    "distractorAnalysis": [
      "Está incorreta: No equilíbrio estável o corpo regressa à posição original, o que não acontece com a caneta apoiada na ponta.",
      "Está incorreta: No equilíbrio indiferente o corpo ficaria em equilíbrio em qualquer ângulo inclinado, o que é falso.",
      "Está incorreta: A caneta está em tentativa de equilíbrio estático, não em translação com velocidade constante."
    ],
    "nursingApplication": "Ilustra o risco biomecânico de um doente com base de apoio mínima e linha de gravidade desequilibrada."
  },
  {
    "id": 1117,
    "topicId": 1,
    "question": "Qual dos seguintes exemplos ilustra tipicamente uma situação de Equilíbrio Instável?",
    "options": [
      "Equilíbrio instável explosivo.",
      "Equilíbrio indiferente.",
      "Equilíbrio estável de auto-recuperação.",
      "Violação da 1ª Lei de Newton."
    ],
    "correctIndex": 1,
    "explanation": "Na superfície horizontal, a altura do centro de gravidade da esfera permanece rigorosamente constante ao rolar. Deslocada da posição original, ela permanece em equilíbrio na nova posição (Equilíbrio Indiferente).",
    "distractorAnalysis": [
      "Está incorreta: No equilíbrio instável a bola aceleraria para longe sem parar no piso nivelado.",
      "Está incorreta: No equilíbrio estável a bola teria de regressar espontaneamente ao ponto de onde partiu.",
      "Está incorreta: O comportamento obedece perfeitamente à 1ª Lei de Newton na presença de leve atrito de paragem."
    ],
    "nursingApplication": "Demonstra a ausência de momento restaurador ou desestabilizador em superfícies horizontais lisas."
  },
  {
    "id": 1118,
    "topicId": 1,
    "question": "Qual dos seguintes sistemas físicos representa um caso exemplar de Equilíbrio Indiferente?",
    "options": [
      "Permanece em equilíbrio estático indiferente.",
      "Entra imediatamente em equilíbrio estável.",
      "Não se encontra em equilíbrio, sofrendo aceleração (a = Fr / m) que altera a sua velocidade.",
      "Transforma a sua massa em pressão capilar profunda."
    ],
    "correctIndex": 2,
    "explanation": "Por definição, estar em equilíbrio exige Fr = 0 N. Se a força resultante não for nula, o corpo é acelerado pela 2ª Lei de Newton (Fr = m · a), rompendo o equilíbrio.",
    "distractorAnalysis": [
      "Está incorreta: Equilíbrio indiferente requer estritamente força resultante nula (Fr = 0 N).",
      "Está incorreta: Qualquer forma de equilíbrio exige força resultante nula.",
      "Está incorreta: A massa não se converte em pressão; a pressão resulta de forças distribuídas por área."
    ],
    "nursingApplication": "Permite diagnosticar desequilíbrios mecânicos durante a marcha de doentes em reabilitação."
  },
  {
    "id": 1119,
    "topicId": 1,
    "question": "Por que razão um corpo em Equilíbrio Instável tomba imediatamente quando sofre um pequeno deslocamento lateral?",
    "options": [
      "Apenas que o corpo tenha velocidade superior a 100 km/h.",
      "Apenas que a sua massa seja inferior a 50 kg.",
      "Apenas que a força de atrito seja perpendicular à gravidade.",
      "A força resultante tem de ser nula (equilíbrio de translação) e o momento resultante tem de ser nulo (equilíbrio de rotação)."
    ],
    "correctIndex": 3,
    "explanation": "O equilíbrio mecânico total de um corpo rígido exige que não haja aceleração linear (Fr = 0 N) nem aceleração angular de rotação (Momento resultante Mr = 0 N·m).",
    "distractorAnalysis": [
      "Está incorreta: Velocidade de 100 km/h não define as condições estáticas de equilíbrio de forças e momentos.",
      "Está incorreta: O equilíbrio aplica-se a qualquer valor de massa, pequena ou grande.",
      "Está incorreta: A orientação geométrica do atrito depende da superfície e não garante por si só o equilíbrio."
    ],
    "nursingApplication": "A base para analisar a estabilidade postural e o cálculo de alavancas no corpo humano."
  },
  {
    "id": 1120,
    "topicId": 1,
    "question": "O que acontece à energia potencial gravítica do centro de gravidade de um corpo quando este se afasta ligeiramente de uma posição de Equilíbrio Estável?",
    "options": [
      "A força resultante e os momentos são nulos, e um pequeno desvio involuntário é facilmente corrigido pela base de apoio e musculatura postural.",
      "A força de gravidade deixou de puxar o seu corpo em direção ao chão.",
      "A força normal exercida pelo assento tem intensidade infinitamente superior ao peso.",
      "O utente bariátrico perde a sua inércia quando se encosta aos braços da cadeira."
    ],
    "correctIndex": 0,
    "explanation": "A ampla base delimitada pelos pés e assento e o centro de gravidade rebaixado garantem que qualquer pequena perturbação mantenha a linha de gravidade dentro da base, restaurando a postura estável.",
    "distractorAnalysis": [
      "Está incorreta: A gravidade atua continuamente com P = m · g.",
      "Está incorreta: A força normal é finita e equilibra rigorosamente o peso do corpo (N = P).",
      "Está incorreta: A inércia é proporcional à massa e mantém-se constante em qualquer posição sentada."
    ],
    "nursingApplication": "Justifica a recomendação ergonómica de sentar doentes em poltronas estáveis em vez de mantê-los na beira da cama."
  },
  {
    "id": 1121,
    "topicId": 1,
    "question": "Num plano inclinado com ângulo θ em relação à horizontal, em quais componentes ortogonais se decompõe o vetor Peso (P) do corpo?",
    "options": [
      "P = Pressão; P_n = Neutrões; P_t = Temperatura; N = Newton; F_a = Força arterial.",
      "P = Peso do corpo; P_n e P_t = Componentes vertical (perpendicular) e horizontal (paralela) do peso; N = Força normal; F_a = Força de atrito.",
      "P = Potência; P_n = Ponto neutro; P_t = Ponto de tração; N = Núcleo; F_a = Fulcro articular.",
      "P = Posição; P_n = Polo norte; P_t = Polo terra; N = Normalidade química; F_a = Força de ação."
    ],
    "correctIndex": 1,
    "explanation": "A legenda define com rigor: 'P = Peso do corpo | P_n e P_t = Componentes vertical e horizontal do peso | N = Força normal | F_a = Força de atrito'.",
    "distractorAnalysis": [
      "Está incorreta: Pressão, neutrões e temperatura são conceitos de outros tópicos, não as forças do diagrama do plano inclinado.",
      "Está incorreta: Potência e fulcro articular não constam no diagrama de forças do bloco no plano inclinado.",
      "Está incorreta: Termos de magnetismo e química analítica estão descontextualizados da mecânica."
    ],
    "nursingApplication": "Garante a correta leitura e interpretação de diagramas de forças em rampas de acesso para macas e cadeiras de rodas."
  },
  {
    "id": 1122,
    "topicId": 1,
    "question": "Num plano inclinado com ângulo θ, qual é a expressão matemática da componente perpendicular do peso (P_n) que comprime a superfície?",
    "options": [
      "P = N e P_n = P_t",
      "F_a = N e P = 0",
      "Em equilíbrio: P_n = N e P_t = F_a",
      "P_t = N e P_n = F_a"
    ],
    "correctIndex": 2,
    "explanation": "Indica-se expressamente no quadro explicativo: 'Em equilíbrio: P_n = N e P_t = F_a' (a componente perpendicular do peso iguala a força normal, e a componente paralela do peso iguala a força de atrito).",
    "distractorAnalysis": [
      "Está incorreta: Num plano inclinado P não é igual a N (pois N equilibra apenas a componente P_n).",
      "Está incorreta: O atrito equilibra a componente tangencial P_t, não a força normal perpendicular N.",
      "Está incorreta: As correspondências estão trocadas: a normal N atua na direção de P_n e o atrito F_a na direção de P_t."
    ],
    "nursingApplication": "Essencial para calcular a força de travagem necessária para manter uma cadeira de rodas imobilizada numa rampa."
  },
  {
    "id": 1123,
    "topicId": 1,
    "question": "Num plano inclinado com ângulo θ, qual é a expressão matemática da componente tangencial do peso (P_t) responsável pela tendência de deslizamento ao longo da rampa?",
    "options": [
      "Empurrar ativamente a cadeira rampa acima em alta velocidade.",
      "Aumentar a componente do peso P_n para colar os pneus ao piso.",
      "Eliminar a massa inercial do passageiro da cadeira.",
      "Atuar paralelamente à rampa no sentido ascendente, equilibrando a componente tangencial do peso (P_t) e impedindo o deslizamento."
    ],
    "correctIndex": 3,
    "explanation": "A gravidade tende a puxar a cadeira rampa abaixo com a componente P_t do peso. A força de atrito (pneus/travões) atua em sentido contrário (rampa acima) equilibrando P_t (F_a = P_t) para impedir a descida descontrolada.",
    "distractorAnalysis": [
      "Está incorreta: O atrito é uma força passiva de resistência e não um motor de propulsão ativa.",
      "Está incorreta: O atrito atua na direção tangencial e não afeta a intensidade da componente normal P_n.",
      "Está incorreta: Nenhuma força de atrito altera a massa intrínseca do organismo humano."
    ],
    "nursingApplication": "Sublinha a necessidade imperativa de verificar o funcionamento dos travões de estacionamento antes de largar uma cadeira na rampa."
  },
  {
    "id": 1124,
    "topicId": 1,
    "question": "Num plano inclinado, qual é a relação de equilíbrio entre a Força Normal (N) e a componente perpendicular do peso (P_n), admitindo que não há movimento vertical?",
    "options": [
      "Perpendicular à superfície do plano inclinado, apontando contra o plano (equilibrada pela força normal N).",
      "Paralela à rampa inclinada apontando para a base da rampa.",
      "Horizontal no sentido de rotação dos ponteiros do relógio.",
      "Vertical ascendente em direção às nuvens."
    ],
    "correctIndex": 0,
    "explanation": "A componente normal P_n atua perpendicularmente à superfície inclinada pressionando o corpo contra a rampa, sendo exatamente contrabalançada pela Força Normal N exercida pela rampa.",
    "distractorAnalysis": [
      "Está incorreta: A componente paralela à rampa é P_t (componente tangencial), não P_n.",
      "Está incorreta: P_n é uma força linear perpendicular ao plano, sem orientação circular horária.",
      "Está incorreta: P_n aponta para a superfície do plano, nunca para cima contra a gravidade."
    ],
    "nursingApplication": "Permite entender porque a pressão sobre a superfície de apoio diminui à medida que o plano fica mais empinado."
  },
  {
    "id": 1125,
    "topicId": 1,
    "question": "Quando se aumenta a inclinação de uma rampa ou plano inclinado (aumentando o ângulo θ), o que acontece às componentes P_t e P_n do peso?",
    "options": [
      "Diminui para metade, facilitando a retenção da maca.",
      "Aumenta significativamente, exigindo maior força de travagem ou atrito (F_a) para evitar que o corpo deslize.",
      "Permanece rigorosamente inalterada porque a massa do doente é a mesma.",
      "Anula-se transformando-se exclusivamente em força normal N."
    ],
    "correctIndex": 1,
    "explanation": "À medida que o ângulo de inclinação sobe, a componente tangencial ao longo do plano P_t aumenta substancialmente. Para manter o equilíbrio (P_t = F_a), a força de atrito ou a força exercida pelo profissional tem de ser muito maior.",
    "distractorAnalysis": [
      "Está incorreta: Aumentar a inclinação torna a rampa mais íngreme, aumentando a força de descida e não diminuindo.",
      "Está incorreta: Embora a massa seja constante, a projeção geométrica do peso varia com o ângulo de inclinação.",
      "Está incorreta: P_t cresce com o ângulo, enquanto a componente normal P_n é que diminui."
    ],
    "nursingApplication": "Justifica as normas de arquitetura hospitalar que limitam a inclinação máxima de rampas a valores reduzidos (ex.: 6-8%)."
  },
  {
    "id": 1126,
    "topicId": 1,
    "question": "Para que um corpo repouse em equilíbrio estático sobre um plano inclinado sem escorregar, qual é a condição necessária entre a força de atrito estático (F_a) e a componente tangencial do peso (P_t)?",
    "options": [
      "A maca fica parada em equilíbrio indiferente.",
      "A maca sobe a rampa espontaneamente impulsionada por P_n.",
      "A maca sofre uma força resultante não equilibrada Fr = P_t e desce a rampa em movimento acelerado.",
      "A maca perde peso e começa a flutuar horizontalmente."
    ],
    "correctIndex": 2,
    "explanation": "Sem atrito (F_a = 0), a componente P_t ao longo da rampa não tem oposição. Pela 2ª Lei de Newton (Fr = m · a), a força resultante Fr = P_t acelera a maca rampa abaixo.",
    "distractorAnalysis": [
      "Está incorreta: Sem força de oposição para equilibrar P_t, o repouso é impossível.",
      "Está incorreta: A componente P_t aponta para baixo ao longo da rampa, nunca rampa acima.",
      "Está incorreta: A gravidade continua a atuar plenamente sobre a massa da maca."
    ],
    "nursingApplication": "Regra crítica de segurança de enfermagem: nunca imobilizar macas ou cadeiras em rampas sem ativar os travões mecânicos."
  },
  {
    "id": 1127,
    "topicId": 1,
    "question": "Qual é a fórmula da Força de Atrito máxima (F_a) num plano inclinado, considerando o coeficiente de atrito μ e a força normal N = P · cos θ?",
    "options": [
      "P_t é igual a P e P_n é nula.",
      "P_n e P_t têm exatamente o mesmo valor de P/2.",
      "Tanto P_n como P_t anulam-se completamente ficando o peso nulo.",
      "P_n é igual à totalidade do peso P (P_n = P = N) e a componente tangencial P_t é rigorosamente nula (P_t = 0 N)."
    ],
    "correctIndex": 3,
    "explanation": "Na horizontal, a gravidade atua estritamente perpendicular ao plano: todo o peso coincide com a componente normal (P_n = P), sendo suportado pela força normal N, enquanto a tendência de deslizamento é nula (P_t = 0).",
    "distractorAnalysis": [
      "Está incorreta: P_t seria igual a P se a rampa fosse perfeitamente vertical a 90 graus (queda livre na parede).",
      "Está incorreta: As componentes só se igualam em ângulo de 45 graus, não na horizontal a 0 graus.",
      "Está incorreta: O peso não se anula na horizontal; é suportado na íntegra pela força normal do piso."
    ],
    "nursingApplication": "Explica por que num corredor horizontal não é necessária força adicional para travar a componente de descida da gravidade."
  },
  {
    "id": 1128,
    "topicId": 1,
    "question": "Ao elevar a cabeceira da cama hospitalar num ângulo de 45° (posição de Fowler), por que razão aumenta substancialmente o risco de forças de cisalhamento na pele sacra do doente?",
    "options": [
      "Aplica uma força rampa acima para contrabalançar P_t, garantindo força resultante nula e descida controlada sem acelerar.",
      "Empurra a cadeira com força máxima rampa abaixo para acelerar a chegada ao serviço.",
      "Desliga o peso do utente através de movimentos oscilatórios rápidos.",
      "Caminha de costas com os olhos vendados confiando apenas no atrito do piso."
    ],
    "correctIndex": 0,
    "explanation": "Para que a descida ocorra com velocidade constante (MRU com Fr = 0 N), a força de retenção aplicada pelo profissional somada ao atrito deve equilibrar rigorosamente a componente P_t do peso que puxa a cadeira rampa abaixo.",
    "distractorAnalysis": [
      "Está incorreta: Empurrar rampa abaixo somar-se-ia a P_t, provocando aceleração perigosa e risco de colisão.",
      "Está incorreta: Não é possível desligar o peso de um corpo material na Terra.",
      "Está incorreta: Prática negligente que viola todas as regras de segurança do utente e do profissional."
    ],
    "nursingApplication": "Técnica ergonómica recomendada de condução de cadeiras de rodas em rampas: descer de marcha-atrás com apoio do corpo para retenção."
  },
  {
    "id": 1129,
    "topicId": 1,
    "question": "Em qual ângulo de inclinação do plano inclinado a força normal é máxima e a tendência de escorregamento tangencial é estritamente nula?",
    "options": [
      "A componente normal do peso P_n.",
      "A força de atrito F_a (e a componente tangencial P_t), que atuam ao longo da superfície.",
      "O peso total P em qualquer inclinação.",
      "Nenhuma força, pois todas são paralelas entre si."
    ],
    "correctIndex": 1,
    "explanation": "A Força Normal N é perpendicular à superfície de apoio; a força de atrito F_a e a componente P_t atuam paralelamente à superfície de apoio. Logo, a direção de N e a de F_a formam um ângulo de 90 graus (são perpendiculares).",
    "distractorAnalysis": [
      "Está incorreta: P_n tem a mesma linha de ação que N (mesma direção vertical ao plano), com sentido oposto.",
      "Está incorreta: O peso P atua na vertical gravitacional terrestre, não sendo perpendicular à normal inclinada.",
      "Está incorreta: As forças no diagrama decompõem-se num referencial cartesiano ortogonal (eixo tangencial e eixo normal)."
    ],
    "nursingApplication": "Permite aos estudantes orientar mentalmente os eixos ortogonais ao analisar esforços mecânicos."
  },
  {
    "id": 1130,
    "topicId": 1,
    "question": "Se o ângulo de inclinação do plano inclinado atingir 90° (superfície vertical), o que acontece à força normal (N) e à componente tangencial (P_t)?",
    "options": [
      "Pela força nuclear forte dos ossos ilíacos.",
      "Pela força eletromagnética gerada pelo motor elétrico do leito.",
      "Pela componente tangencial do peso (P_t), que atua paralelamente ao colchão empurrando o corpo para baixo.",
      "Exclusivamente pela componente normal P_n perpendicular ao colchão."
    ],
    "correctIndex": 2,
    "explanation": "A elevação da cabeceira cria um plano inclinado onde a gravidade se projeta na componente P_t ao longo da cama. Se o atrito não for suficiente para equilibrar P_t, o corpo escorrega em direção aos pés da cama, gerando cisalhamento tecidual.",
    "distractorAnalysis": [
      "Está incorreta: Forças nucleares atuam dentro do núcleo atómico, não produzindo deslizamento corporal.",
      "Está incorreta: O motor articulou o estrado mecanicamente, mas a força propulsora do deslizamento é a componente do peso gravítico.",
      "Está incorreta: A componente P_n pressiona o corpo contra o colchão; quem puxa para baixo ao longo da inclinação é P_t."
    ],
    "nursingApplication": "Identifica o mecanismo biofísico na génese de forças de cisalhamento e lesões sacrococcígeas em camas articuladas."
  },
  {
    "id": 1131,
    "topicId": 1,
    "question": "Qual é a definição exata de Momento de uma Força (Torque, M) na mecânica rotacional?",
    "options": [
      "Mede a quantidade de calor transferida por radiação infravermelha.",
      "Mede a aceleração linear sofrida por um corpo em queda livre.",
      "Mede a massa atómica dos elementos químicos presentes no tecido ósseo.",
      "Mede o efeito rotativo de uma força em torno de um ponto."
    ],
    "correctIndex": 3,
    "explanation": "Define-se formalmente: 'Momento da força (Torque): Mede o efeito rotativo de uma força em torno de um ponto'.",
    "distractorAnalysis": [
      "Está incorreta: Calor transferido por radiação pertence à termodinâmica e biofotónica, não à mecânica rotacional.",
      "Está incorreta: Aceleração linear decorre da força resultante translativa (2ª Lei de Newton), não do momento rotativo.",
      "Está incorreta: Massa atómica é uma constante química e nuclear da matéria."
    ],
    "nursingApplication": "Conceito fulcral para compreender como os músculos produzem movimentos de rotação nas articulações esqueléticas."
  },
  {
    "id": 1132,
    "topicId": 1,
    "question": "Qual é a fórmula matemática fundamental para o cálculo do Momento de uma Força (M) aplicada perpendicularmente a um braço de alavanca (b)?",
    "options": [
      "Por outras palavras: O momento da força faz o corpo rodar.",
      "Por outras palavras: A massa dissipa-se com a velocidade.",
      "Por outras palavras: Toda a força de rotação gera calor sem movimento.",
      "Por outras palavras: O atrito elimina a necessidade de fulcro."
    ],
    "correctIndex": 0,
    "explanation": "O destaca com clareza pedagógica: 'Por outras palavras: O momento da força faz o corpo rodar.'.",
    "distractorAnalysis": [
      "Está incorreta: A massa não se dissipa com a velocidade na mecânica clássica de Newton.",
      "Está incorreta: O momento de força gera movimento rotativo efetivo quando não é equilibrado.",
      "Está incorreta: O fulcro é o ponto essencial em torno do qual ocorre a rotação de qualquer alavanca."
    ],
    "nursingApplication": "Permite associar imediatamente qualquer movimento de flexão, extensão ou rotação articular ao momento de força."
  },
  {
    "id": 1133,
    "topicId": 1,
    "question": "Qual é a unidade padrão de Momento de Força no Sistema Internacional (SI)?",
    "options": [
      "Momento da força = F / b",
      "Momento da força = F · b",
      "Momento da força = m · a²",
      "Momento da força = b / F"
    ],
    "correctIndex": 1,
    "explanation": "Indica-se expressamente a expressão matemática fundamental: 'Momento da força = F · b'.",
    "distractorAnalysis": [
      "Está incorreta: Dividir força pelo braço daria N/m (unidade de constante elástica k), não momento de força.",
      "Está incorreta: m · a² não tem coerência física com a definição de momento de força de uma alavanca.",
      "Está incorreta: Dividir braço por força daria m/N, que não corresponde a torque."
    ],
    "nursingApplication": "Fórmula-chave utilizada para o cálculo do equilíbrio de alavancas e esforços musculares do corpo humano."
  },
  {
    "id": 1134,
    "topicId": 1,
    "question": "O que representa o 'Braço de uma Força' (b) no cálculo do Momento de rotação?",
    "options": [
      "Comprimento total da cama hospitalar medido em centímetros.",
      "Massa do braço anatómico do utente pesada numa balança digital.",
      "Distância na perpendicular entre o eixo de rotação e a linha de ação da força (m).",
      "Velocidade de rotação da articulação medida em metros por segundo."
    ],
    "correctIndex": 2,
    "explanation": "B = Braço = Distância na perpendicular entre o eixo de rotação e a linha de ação da força (m)'.",
    "distractorAnalysis": [
      "Está incorreta: O comprimento da cama não se relaciona com o braço b de uma alavanca física genérica.",
      "Está incorreta: O termo braço na mecânica é uma distância geométrica perpendicular, não o membro anatómico pesado.",
      "Está incorreta: Distância perpendicular mede-se em metros, enquanto velocidade mede-se em m/s."
    ],
    "nursingApplication": "Compreender que o braço é a distância perpendicular é crucial para perceber por que carregar peso longe do corpo sobrecarrega a coluna."
  },
  {
    "id": 1135,
    "topicId": 1,
    "question": "Se aplicarmos uma força de 40 N perpendicularmente a uma chave com braço de alavanca de 0,25 m, qual é o Momento de Força gerado?",
    "options": [
      "Pascal (Pa).",
      "Quilograma por metro (kg/m).",
      "Newton por metro quadrado (N/m²).",
      "Newton-metro (N·m)."
    ],
    "correctIndex": 3,
    "explanation": "Como o momento resulta da multiplicação de uma Força em Newtons (N) por uma distância de braço em metros (m), a sua unidade SI é o Newton-metro (N·m).",
    "distractorAnalysis": [
      "Está incorreta: Pascal é unidade de pressão (N/m²), não de momento rotativo.",
      "Está incorreta: kg/m é densidade linear de massa, não torque.",
      "Está incorreta: N/m² equivale a Pascal (pressão), não a N·m (multiplicação)."
    ],
    "nursingApplication": "Garante a correta identificação dimensional das respostas em exercícios de biomecânica articular."
  },
  {
    "id": 1136,
    "topicId": 1,
    "question": "Por que razão os puxadores e fechaduras das portas são instalados no bordo mais afastado das dobradiças?",
    "options": [
      "15 N·m",
      "60 N·m",
      "0,016 N·m",
      "30,5 N·m"
    ],
    "correctIndex": 0,
    "explanation": "Aplicando diretamente M = F · b: M = 30 N × 0,5 m = 15 N·m.",
    "distractorAnalysis": [
      "Está incorreta: 60 N·m resultaria de dividir 30 por 0,5 (F / b), o que viola a fórmula M = F · b.",
      "Está incorreta: 0,016 resultaria da divisão errada 0,5 / 30.",
      "Está incorreta: 30,5 resultaria de somar a força com a distância, operação matematicamente inválida."
    ],
    "nursingApplication": "Cálculo elementar para quantificar momentos em manivelas de macas e alavancas hospitalares."
  },
  {
    "id": 1137,
    "topicId": 1,
    "question": "Se uma força for aplicada exatamente sobre o eixo de rotação de uma alavanca (braço b = 0), qual é o Momento de Força resultante?",
    "options": [
      "O mais próximo possível das dobradiças (junto ao eixo de rotação).",
      "O mais longe possível das dobradiças (na extremidade oposta), aumentando o braço da força (b).",
      "Diretamente sobre os parafusos da dobradiça.",
      "No chão a meio caminho da soleira puxando verticalmente."
    ],
    "correctIndex": 1,
    "explanation": "Como M = F · b, para gerar o mesmo momento de rotação necessário para mover a porta com menor força (F), devemos maximizar o braço (b). Empurrar no bordo exterior maximiza b e minimiza F.",
    "distractorAnalysis": [
      "Está incorreta: Empurrar perto das dobradiças torna b muito pequeno, exigindo forças enormes para gerar o mesmo momento.",
      "Está incorreta: Sobre a dobradiça o braço b é zero; o momento seria nulo e a porta nunca rodaria.",
      "Está incorreta: Puxar no chão verticalmente não cria momento em torno do eixo de rotação vertical da porta."
    ],
    "nursingApplication": "Aplicação prática imediata de ergonomia ao abrir portas de emergência e manipular equipamentos articulados."
  },
  {
    "id": 1138,
    "topicId": 1,
    "question": "Se a linha de ação de uma força passar diretamente pelo ponto de apoio ou fulcro (paralela ou colinear ao braço), qual é o efeito rotacional produzido?",
    "options": [
      "É igual à intensidade da força multiplicada pelo infinito.",
      "É igual a 9,8 N·m independentemente da intensidade da força.",
      "É rigorosamente zero (M = 0 N·m), porque o braço é nulo (b = 0 m).",
      "Produz a rotação mais rápida possível da estrutura."
    ],
    "correctIndex": 2,
    "explanation": "Se a linha de ação da força interseta o eixo, a distância perpendicular b entre a linha e o eixo é zero (b = 0). Pela fórmula M = F · b = F × 0 = 0 N·m. A força não gera qualquer efeito rotativo.",
    "distractorAnalysis": [
      "Está incorreta: Multiplicar por zero resulta em zero, nunca em infinito.",
      "Está incorreta: O valor depende da multiplicação F · b; sendo b = 0, o resultado é nulo e não 9,8.",
      "Está incorreta: Sem momento de força (M = 0) não é possível produzir qualquer aceleração angular de rotação."
    ],
    "nursingApplication": "Explica por que puxar um osso exatamente na direção axial da articulação estabiliza a junta mas não produz rotação articular."
  },
  {
    "id": 1139,
    "topicId": 1,
    "question": "Para uma mesma força muscular aplicada, como é que o aumento do braço de alavanca afeta a capacidade de rotação articular?",
    "options": [
      "Porque a massa do objeto triplica magicamente quando afastada do peito.",
      "Porque o atrito do pavimento desaparece desestabilizando o esqueleto.",
      "Porque a velocidade da luz no vácuo altera a curvatura lombar.",
      "Porque o braço da força resistente (b) aumenta substancialmente em relação à coluna, gerando um momento extensor muito superior (M = F · b)."
    ],
    "correctIndex": 3,
    "explanation": "A força resistente (peso da carga) é constante. Contudo, ao afastar a carga do tronco, a distância horizontal b até ao fulcro lombar aumenta grandemente, multiplicando o momento resistente M = F · b e exigindo forças extremas dos músculos da coluna para equilibrar.",
    "distractorAnalysis": [
      "Está incorreta: A massa é constante e invariável com a distância anatómica da carga.",
      "Está incorreta: O atrito do pavimento não tem relação com o momento interno da carga sobre a coluna.",
      "Está incorreta: A velocidade da luz não interfere na mecânica osteomuscular humana."
    ],
    "nursingApplication": "Princípio ergonómico vital para a saúde da coluna do enfermeiro: manter sempre as cargas junto ao peito."
  },
  {
    "id": 1140,
    "topicId": 1,
    "question": "Qual é a condição estática rotacional para que uma alavanca não rode em torno do seu ponto de apoio fixo?",
    "options": [
      "Momento 1 = 20 N·m e Momento 2 = 10 N·m",
      "Momento 1 = 5 N·m e Momento 2 = 10 N·m",
      "Ambas produzem exatamente o mesmo momento de 10 N·m.",
      "Momento 1 = 200 N·m e Momento 2 = 100 N·m"
    ],
    "correctIndex": 0,
    "explanation": "Calculando M = F · b para cada uma: M1 = 10 N × 2 m = 20 N·m; M2 = 10 N × 1 m = 10 N·m. A força com o dobro do braço produz o dobro do momento rotativo.",
    "distractorAnalysis": [
      "Está incorreta: 20 N·m é o resultado correto para a primeira força, não 5 N·m.",
      "Está incorreta: Os momentos só seriam iguais se os braços fossem idênticos, o que não é o caso (2 m vs 1 m).",
      "Está incorreta: Os valores foram indevidamente multiplicados por 10."
    ],
    "nursingApplication": "Demonstração quantitativa clara do efeito multiplicador da distância de alavanca."
  },
  {
    "id": 1141,
    "topicId": 1,
    "question": "Qual é a definição de Alavanca na biomecânica e mecânica clássica?",
    "options": [
      "Dispositivo elétrico destinado a converter corrente alternada em corrente contínua.",
      "Barra rígida que pode girar em torno de um ponto de apoio fixo.",
      "Superfície curva lubrificada com fluido biológico viscoso.",
      "Estrutura elástica deformável que dissipa energia por histerese."
    ],
    "correctIndex": 1,
    "explanation": "Define-se formalmente: 'Arquimedes, século III a.C.: Barra rígida que pode girar em torno de um ponto de apoio fixo'.",
    "distractorAnalysis": [
      "Está incorreta: A conversão de corrente é função de retificadores elétricos, não da máquina simples mecânica alavanca.",
      "Está incorreta: Superfície curva lubrificada descreve cartilagem articular em hidrodinâmica, não a definição clássica de alavanca.",
      "Está incorreta: Corpos com histerese são viscoelásticos (Tópico 2), enquanto a alavanca de Arquimedes é modelada como barra rígida."
    ],
    "nursingApplication": "Conceito estruturante para a biomecânica esquelética, onde os ossos funcionam como barras rígidas."
  },
  {
    "id": 1142,
    "topicId": 1,
    "question": "Quais são os três elementos estruturais fundamentais que constituem qualquer sistema de alavanca?",
    "options": [
      "Massa inercial, gravidade terrestre e aceleração centrípeta.",
      "Dinamómetro, plano inclinado e atrito cinético.",
      "1. Ponto de apoio (fulcro); 2. Força potente; 3. Força resistente.",
      "Tensão arterial, frequência cardíaca e débito cardíaco."
    ],
    "correctIndex": 2,
    "explanation": "O enumera textualmente os três componentes: '1. Ponto de apoio (fulcro) (...) 2. Força potente (...) 3. Força resistente'.",
    "distractorAnalysis": [
      "Está incorreta: Estes são conceitos gerais da mecânica e gravitação, não a tríade constitutiva das alavancas.",
      "Está incorreta: Instrumentos e outras máquinas simples não são os elementos de definição de uma alavanca.",
      "Está incorreta: Variáveis hemodinâmicas pertencem à fisiologia cardiovascular e hidrodinâmica médica."
    ],
    "nursingApplication": "Permite decompor e analisar qualquer articulação do corpo humano nos seus três elementos mecânicos."
  },
  {
    "id": 1143,
    "topicId": 1,
    "question": "Qual célebre filósofo e matemático da antiguidade cunhou a máxima: 'Dêem-me uma alavanca e um ponto de apoio e moverei o mundo'?",
    "options": [
      "Força exercida exclusivamente pela atração da gravidade sobre a barra.",
      "Força contrária que dificulta o movimento da carga.",
      "Ponto fixo em torno do qual a alavanca gira livremente.",
      "Força aplicada para mover a carga."
    ],
    "correctIndex": 3,
    "explanation": "2. Força potente: Força aplicada para mover a carga'.",
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
    "question": "Em que consiste o princípio físico da Vantagem Mecânica (VM) numa alavanca?",
    "options": [
      "Força contrária que dificulta o movimento da carga.",
      "Força motora aplicada pelo músculo para acelerar o membro.",
      "Constante elástica da mola expressa em Newtons por metro.",
      "Comprimento total da barra medido a partir da extremidade potente."
    ],
    "correctIndex": 0,
    "explanation": "3. Força resistente: Força contrária que dificulta o movimento da carga'.",
    "distractorAnalysis": [
      "Está incorreta: A força motora que move a carga é a Força Potente, não a resistente.",
      "Está incorreta: Constante elástica k refere-se à Lei de Hooke, não à alavanca de Arquimedes.",
      "Está incorreta: Comprimento é uma dimensão métrica geométrica, não uma força física contrária."
    ],
    "nursingApplication": "Representa o peso de membros corporais, objetos transportados ou resistências externas a vencer."
  },
  {
    "id": 1145,
    "topicId": 1,
    "question": "Qual é a expressão matemática da Lei do Equilíbrio das Alavancas para uma barra horizontal em equilíbrio estático rotacional?",
    "options": [
      "A intensidade máxima de força suportada por uma vértebra sagrada.",
      "Ponto fixo em torno do qual a alavanca gira.",
      "A distância perpendicular entre duas forças divergentes.",
      "O centro do núcleo atómico onde operam as forças nucleares."
    ],
    "correctIndex": 1,
    "explanation": "Define-se taxativamente: '1. Ponto de apoio (fulcro): Ponto fixo em torno do qual a alavanca gira'.",
    "distractorAnalysis": [
      "Está incorreta: Resistência de vértebras é propriedade de resistência dos materiais (Tópico 2), não a definição de fulcro.",
      "Está incorreta: Distância perpendicular é a definição de braço da força, não do ponto fixo fulcro.",
      "Está incorreta: O núcleo atómico é estudado na física do átomo e radiação, não nas alavancas macroscópicas."
    ],
    "nursingApplication": "No esqueleto humano, as articulações sinoviais funcionam como os fulcros do aparelho locomotor."
  },
  {
    "id": 1146,
    "topicId": 1,
    "question": "O que representa a 'Força Potente' (F_P) e o 'Braço Potente' (b_P) no funcionamento de uma alavanca biomecânica?",
    "options": [
      "F_P + b_P = F_R + b_R",
      "F_P / b_P = F_R / b_R",
      "Em equilíbrio: F_P · b_P = F_r · b_r",
      "F_P · F_r = b_P · b_r"
    ],
    "correctIndex": 2,
    "explanation": "Apresenta-se a clássica Lei das Alavancas: 'Em equilíbrio: F_P · b_P = F_r · b_r' (o produto da força potente pelo seu braço é igual ao produto da força resistente pelo seu braço).",
    "distractorAnalysis": [
      "Está incorreta: Não se somam forças com distâncias por terem grandezas físicas e unidades diferentes (N vs m).",
      "Está incorreta: A relação física é um produto de fatores (momentos), não uma razão de quocientes.",
      "Está incorreta: Multiplicar forças entre si e braços entre si não traduz o cancelamento de momentos em torno do fulcro."
    ],
    "nursingApplication": "Equação fundamental para resolver todos os problemas de alavancas anatómicas e equipamentos de elevação."
  },
  {
    "id": 1147,
    "topicId": 1,
    "question": "O que representa a 'Força Resistente' (F_R) e o 'Braço Resistente' (b_R) numa alavanca biomecânica?",
    "options": [
      "Que a velocidade angular da alavanca está a acelerar a 9,8 rad/s².",
      "Que a massa do fulcro é igual à soma das massas potentes e resistentes.",
      "Que a alavanca não sofre nenhuma força da gravidade.",
      "Que o Momento da força potente iguala exatamente o Momento da força resistente (M_P = M_R) em torno do fulcro."
    ],
    "correctIndex": 3,
    "explanation": "Como M = F · b, a Lei das Alavancas afirma simplesmente que o momento de rotação no sentido potente anula o momento de rotação no sentido resistente: M_P = M_R, resultando em equilíbrio estático rotacional.",
    "distractorAnalysis": [
      "Está incorreta: Em equilíbrio a velocidade e aceleração angulares são rigorosamente nulas.",
      "Está incorreta: O fulcro é modelado como ponto de suporte geométrico ideal, não entrando em igualdade de massas.",
      "Está incorreta: As forças resistentes são frequentemente pesos causados pela gravidade."
    ],
    "nursingApplication": "Garante a compreensão conceitual unificada entre a teoria de momentos e a mecânica das alavancas."
  },
  {
    "id": 1148,
    "topicId": 1,
    "question": "Se uma alavanca apresenta um braço potente dez vezes maior que o braço resistente (b_P = 10 · b_R), qual é a força potente necessária para equilibrar a carga resistente?",
    "options": [
      "Uma força potente 4 vezes menor do que a força resistente (F_P = F_R / 4), havendo grande vantagem mecânica.",
      "Uma força potente 4 vezes maior do que a força resistente.",
      "Uma força potente 16 vezes maior devido à lei do inverso do quadrado.",
      "A mesma força resistente, pois a distância não altera o esforço necessário."
    ],
    "correctIndex": 0,
    "explanation": "Pela Lei das Alavancas: F_P · (4 b_R) = F_R · b_R => F_P = F_R / 4. Ao multiplicar o braço potente por 4, a força necessária para suster a carga reduz-se a um quarto.",
    "distractorAnalysis": [
      "Está incorreta: Força 4 vezes maior ocorreria se o braço potente fosse 4 vezes menor (desvantagem mecânica).",
      "Está incorreta: A dependência em relação ao braço é estritamente linear (M = F · b), não quadrática.",
      "Está incorreta: O braço é o multiplicador direto do momento; aumentar o braço altera drasticamente a força necessária."
    ],
    "nursingApplication": "Explica por que cabos compridos e barras de elevação longas facilitam a manipulação de cargas pesadas."
  },
  {
    "id": 1149,
    "topicId": 1,
    "question": "Quando a vantagem mecânica de uma alavanca é inferior a 1 (VM < 1), o que ganha o sistema em troca do maior esforço muscular exigido?",
    "options": [
      "Os ossos são os fulcros e os tendões são as cargas resistentes.",
      "Os ossos funcionam como as barras rígidas, as articulações como os fulcros (pontos de apoio) e os músculos fornecem a força potente.",
      "O sangue funciona como a barra rígida e as veias como os braços de momento.",
      "A pele é a barra rígida que roda em torno do centro da Terra."
    ],
    "correctIndex": 1,
    "explanation": "A correspondência anatómica da Biofísica é universal: o osso atua como barra rígida indeformável de transmissão, a articulação sinovial constitui o fulcro fixo de rotação e o músculo gera a força potente via tendão.",
    "distractorAnalysis": [
      "Está incorreta: Os ossos não são o ponto fixo de rotação; as articulações entre os ossos é que são os fulcros.",
      "Está incorreta: O sangue é um fluido em hidrodinâmica, não uma barra rígida de alavanca.",
      "Está incorreta: A pele é um tecido elástico flexível, não uma barra rígida de alavanca óssea."
    ],
    "nursingApplication": "Base conceptual indispensável para toda a biomecânica articular e análise da marcha."
  },
  {
    "id": 1150,
    "topicId": 1,
    "question": "Como se classificam as alavancas na física de acordo com a posição relativa do ponto de apoio (fulcro), da potência e da resistência?",
    "options": [
      "A atração gravitacional do planeta Terra sobre a articulação.",
      "A força de atrito estático das meias no chão encerado.",
      "A contração ativa das fibras do músculo esquelético, transmitida pelo tendão à sua inserção óssea.",
      "A pressão capilar exercida sobre o sacro em decúbito dorsal."
    ],
    "correctIndex": 2,
    "explanation": "No corpo humano, a força potente é a força motora desenvolvida ativamente pelas pontes cruzadas das fibras musculares e transmitida pelo tendão para puxar o osso em torno da articulação.",
    "distractorAnalysis": [
      "Está incorreta: A gravidade gera a força resistente (peso da carga e dos membros), não a força potente motora.",
      "Está incorreta: O atrito do solo fornece aderência externa para apoio, não a força muscular motriz do membro.",
      "Está incorreta: A pressão capilar sobre o sacro é uma consequência estática passiva de apoio no colchão."
    ],
    "nursingApplication": "Compreensão de como a fadiga e lesões musculares limitam a capacidade de produção de força potente em transferências."
  },
  {
    "id": 1151,
    "topicId": 1,
    "question": "Como se caracteriza uma alavanca de 1.ª Classe (Interfixa) quanto à disposição dos seus três elementos fundamentais?",
    "options": [
      "A força potente encontra-se situada entre o fulcro e a força resistente.",
      "A força resistente encontra-se situada entre o fulcro e a força potente.",
      "Não possui fulcro nem ponto de apoio fixo.",
      "O fulcro encontra-se entre a força potente e a força resistente."
    ],
    "correctIndex": 3,
    "explanation": "Interfixa: O fulcro encontra-se entre a força potente e a força resistente' (Esquema: F_P — Fulcro — F_R).",
    "distractorAnalysis": [
      "Está incorreta: A força potente no meio define a alavanca Interpotente.",
      "Está incorreta: A força resistente no meio define a alavanca Inter-resistente.",
      "Está incorreta: Todas as alavancas de Arquimedes possuem obrigatoriamente um fulcro de rotação."
    ],
    "nursingApplication": "Exemplos clínicos: o baloiço, a tesoura hospitalar e a articulação atlanto-occipital da cabeça."
  },
  {
    "id": 1152,
    "topicId": 1,
    "question": "Qual é o exemplo anatómico clássico de alavanca Interfixa (1.ª classe) no corpo humano?",
    "options": [
      "A força resistente encontra-se entre o fulcro e a força potente.",
      "O fulcro encontra-se entre a força potente e a força resistente.",
      "A força potente encontra-se entre o fulcro e a força resistente.",
      "A força potente e a resistente atuam exatamente no mesmo ponto com o mesmo sentido."
    ],
    "correctIndex": 0,
    "explanation": "Inter-resistente: A força resistente encontra-se entre o fulcro e a força potente' (Esquema: Fulcro — F_R — F_P).",
    "distractorAnalysis": [
      "Está incorreta: O fulcro no meio caracteriza a alavanca Interfixa.",
      "Está incorreta: A força potente no meio caracteriza a alavanca Interpotente.",
      "Está incorreta: Forças no mesmo ponto não formam os braços distintos de uma alavanca mecânica."
    ],
    "nursingApplication": "Exemplos clínicos: o carrinho de mão, o quebra-nozes e o apoio na ponta dos pés pelo tríceps sural (tornozelo)."
  },
  {
    "id": 1153,
    "topicId": 1,
    "question": "Como se caracteriza uma alavanca de 2.ª Classe (Inter-resistente) quanto à posição relativa dos seus elementos?",
    "options": [
      "A força resistente situa-se entre o fulcro e a força potente.",
      "A força potente encontra-se entre o fulcro e a força resistente.",
      "O fulcro localiza-se na extremidade oposta à força potente com a resistente a meio.",
      "A alavanca funciona sem qualquer gasto de força potente."
    ],
    "correctIndex": 1,
    "explanation": "Interpotente: A força potente encontra-se entre o fulcro e a força resistente' (Esquema: Fulcro — F_P — F_R).",
    "distractorAnalysis": [
      "Está incorreta: Força resistente no meio define alavanca Inter-resistente.",
      "Está incorreta: Fulcro numa ponta com resistente no meio é a alavanca inter-resistente.",
      "Está incorreta: Todas as alavancas reais necessitam de força potente para movimentar cargas contra a gravidade."
    ],
    "nursingApplication": "Exemplos clínicos: o músculo bíceps braquial no cotovelo e a utilização de uma pinça de penso cirúrgico."
  },
  {
    "id": 1154,
    "topicId": 1,
    "question": "Qual é o exemplo biomecânico clássico de alavanca Inter-resistente (2.ª classe) no corpo humano?",
    "options": [
      "A articulação da cabeça com a primeira vértebra cervical (atlanto-occipital).",
      "O movimento dos ossos do ouvido médio (martelo e bigorna).",
      "A flexão do cotovelo, onde a força potente do bíceps atua entre o fulcro articular e a resistência na mão.",
      "O apoio do calcâneo na marcha ao apoiar as pontas dos pés no solo."
    ],
    "correctIndex": 2,
    "explanation": "O ilustra detalhadamente a alavanca interpotente através do membro superior (flexão do cotovelo pelo bíceps), rotulando as estruturas ósseas envolvidas.",
    "distractorAnalysis": [
      "Está incorreta: A articulação da cabeça atlanto-occipital é o exemplo clássico de alavanca interfixa.",
      "Está incorreta: Os ossículos do ouvido formam alavancas interfixas microscópicas de amplificação acústica.",
      "Está incorreta: A elevação na ponta dos pés pelo tendão de Aquiles é uma alavanca inter-resistente."
    ],
    "nursingApplication": "Permite aos alunos reconhecer o tipo de alavanca mais abundante e comum no esqueleto apendicular humano."
  },
  {
    "id": 1155,
    "topicId": 1,
    "question": "Como se caracteriza uma alavanca de 3.ª Classe (Interpotente) quanto à posição relativa dos seus componentes?",
    "options": [
      "Clavícula, Escápula e Esterno.",
      "Fémur, Rótula e Tíbia.",
      "Tarso, Metatarso e Falanges.",
      "Úmero, Rádio e Cúbito."
    ],
    "correctIndex": 3,
    "explanation": "O rotula expressamente na imagem anatómica da alavanca interpotente do cotovelo: 'Úmero', 'Rádio' e 'Cúbito'.",
    "distractorAnalysis": [
      "Está incorreta: Estes são ossos da cintura escapular e tórax anterior, não do cotovelo e antebraço.",
      "Está incorreta: Estes são ossos do membro inferior (articulação do joelho).",
      "Está incorreta: Estes são ossos constituintes do pé humano."
    ],
    "nursingApplication": "Integração anatómica direta com os conteúdos lecionados na aula de Biofísica de 1º ano."
  },
  {
    "id": 1156,
    "topicId": 1,
    "question": "Qual é o exemplo anatómico e funcional clássico de alavanca Interpotente (3.ª classe) no corpo humano?",
    "options": [
      "O braço potente é sempre maior que o braço resistente (b_P > b_R), garantindo vantagem mecânica de força (F_P < F_R).",
      "O braço resistente é sempre o dobro do braço potente.",
      "Ambos os braços têm obrigatoriamente de medir 1 metro.",
      "O braço potente é sempre nulo porque a carga está no meio."
    ],
    "correctIndex": 0,
    "explanation": "Como a resistência está entre o fulcro e a força potente (Fulcro — F_R — F_P), a distância do fulcro à força potente (b_P) é necessariamente superior à distância à carga (b_R). Assim, F_P < F_R: há multiplicação de força.",
    "distractorAnalysis": [
      "Está incorreta: b_R é menor que b_P na alavanca inter-resistente, nunca o dobro.",
      "Está incorreta: Os comprimentos variam com as dimensões de cada corpo e ferramenta mecânica.",
      "Está incorreta: O braço potente é o maior de todos e estende-se do fulcro até à ponta potente."
    ],
    "nursingApplication": "Explica por que conseguimos erguer o peso total do corpo humano ficando em bicos de pés com relativo pouco esforço."
  },
  {
    "id": 1157,
    "topicId": 1,
    "question": "Por que razão as alavancas de 2.ª classe (inter-resistentes) possuem sempre Vantagem Mecânica superior a 1 (VM > 1)?",
    "options": [
      "A força muscular necessária é muito menor do que o peso da carga que se segura.",
      "O braço potente é menor que o braço resistente (b_P < b_R), exigindo força muscular superior à carga (desvantagem de força).",
      "A alavanca não consegue produzir qualquer movimento nem rotação da mão.",
      "O peso do objeto segurado na mão transforma-se em calor sem gerar momento."
    ],
    "correctIndex": 1,
    "explanation": "Sendo a alavanca interpotente (Fulcro — F_P — F_R), b_P é mais curto que b_R. Pela Lei das Alavancas, para equilibrar o sistema o músculo tem de exercer uma força potente F_P muito superior à força resistente F_R.",
    "distractorAnalysis": [
      "Está incorreta: A força muscular é muito maior, nunca menor (há desvantagem mecânica de força).",
      "Está incorreta: A alavanca interpotente produz movimentos articulares rápidos e de grande amplitude.",
      "Está incorreta: O peso do objeto gera momento resistente efetivo M_R = F_R · b_R que tem de ser equilibrado."
    ],
    "nursingApplication": "Alerta para o facto de que os músculos do corpo suportam tensões internas muitas vezes superiores aos pesos que carregamos."
  },
  {
    "id": 1158,
    "topicId": 1,
    "question": "Por que razão a esmagadora maioria das articulações motoras do corpo humano opera através de alavancas de 3.ª classe (interpotentes)?",
    "options": [
      "Alavanca inter-resistente.",
      "Alavanca interpotente.",
      "Alavanca interfixa (o fulcro central situa-se entre as forças potentes e resistentes).",
      "Alavanca de deformação plastoviscoelástica."
    ],
    "correctIndex": 2,
    "explanation": "Na tesoura e no baloiço, o parafuso/eixo central (fulcro) situa-se a meio, entre a zona onde as mãos aplicam a força potente e as lâminas/assentos onde atua a resistência: Alavanca Interfixa.",
    "distractorAnalysis": [
      "Está incorreta: Na alavanca inter-resistente a carga resistente está no meio (ex.: quebra-nozes).",
      "Está incorreta: Na alavanca interpotente a força potente está no meio (ex.: pinça).",
      "Está incorreta: Termos reológicos não definem a classificação mecânica geométrica de alavancas de Arquimedes."
    ],
    "nursingApplication": "Compreensão do funcionamento de instrumentos cirúrgicos articulados comuns na prática diária de enfermagem."
  },
  {
    "id": 1159,
    "topicId": 1,
    "question": "Qual das seguintes ferramentas de trabalho ou utensílios opera biomecanicamente como uma alavanca Interfixa (1.ª classe)?",
    "options": [
      "Permitem anular a necessidade de aporte sanguíneo aos músculos.",
      "Eliminam completamente o atrito no interior da cápsula articular.",
      "Fazem com que o corpo humano levite sem tocar no solo.",
      "Ganho extraordinário em amplitude de movimento e velocidade na extremidade livre distal (mão)."
    ],
    "correctIndex": 3,
    "explanation": "Um encurtamento muscular muito pequeno de alguns milímetros junto ao fulcro traduz-se num movimento angular amplo e rápido da mão a 30-40 cm de distância. Sacrifica-se força para ganhar amplitude e velocidade de locomoção.",
    "distractorAnalysis": [
      "Está incorreta: Forças musculares elevadas exigem, pelo contrário, elevado aporte de oxigénio e glicose pelo sangue.",
      "Está incorreta: A lubrificação sinovial reduz o atrito, mas a classe da alavanca não elimina o atrito biológico.",
      "Está incorreta: Nenhuma alavanca biológica revoga as leis da gravitação de Newton."
    ],
    "nursingApplication": "Explica a elegância evolutiva da biomecânica humana: movimentos manuais ágeis e versáteis."
  },
  {
    "id": 1160,
    "topicId": 1,
    "question": "Um carrinho de mão para transporte de cargas pesadas funciona como que tipo de alavanca?",
    "options": [
      "Uma alavanca interfixa (o fulcro articular situa-se entre a força potente muscular posterior e a força resistente do peso da face).",
      "Uma alavanca interpotente pura sem qualquer ponto de apoio.",
      "Um corpo puramente viscoso sem restituição elástica.",
      "Uma alavanca inter-resistente com a carga nas vértebras lombares."
    ],
    "correctIndex": 0,
    "explanation": "O côndilo occipital (fulcro) situa-se entre a musculatura extensora da nuca (força potente, atrás) e o centro de gravidade da cabeça/face (força resistente, à frente): Alavanca Interfixa.",
    "distractorAnalysis": [
      "Está incorreta: A articulação atlanto-occipital é um fulcro ósseo de rotação bem definido.",
      "Está incorreta: A cabeça e coluna comportam-se como alavancas rígidas de suporte, não como fluidos viscosos de escoamento.",
      "Está incorreta: A carga craniana atua diretamente sobre o pescoço e coluna cervical, não nas vértebras lombares neste subsistema."
    ],
    "nursingApplication": "Explica por que adormecer sentado faz a cabeça tombar para a frente: ao relaxar os músculos posteriores, o peso da face faz a alavanca girar."
  },
  {
    "id": 1161,
    "topicId": 1,
    "question": "Num baloiço horizontal em equilíbrio estático apoiado no centro, se uma criança de 20 kg se senta a 1,2 m do fulcro, qual é o momento resistente gerado (com g = 9,8 m/s²)?",
    "options": [
      "X = 3,6 m",
      "X = 1,2 m",
      "X = 2,4 m",
      "X = 0,6 m"
    ],
    "correctIndex": 1,
    "explanation": "Os mostram a resolução passo a passo: '3x = 3.6 (=) x = 1.2 m'. O braço resistente b_R é 1,2 m e o potente b_P é 2,4 m.",
    "distractorAnalysis": [
      "Está incorreta: 3,6 m é o comprimento total da barra da alavanca, não o valor de x.",
      "Está incorreta: 2,4 m é o valor do braço potente (2x = 2 × 1,2), não de x.",
      "Está incorreta: 0,6 m resultaria de dividir 3,6 por 6, o que não reflete a equação 3x = 3,6."
    ],
    "nursingApplication": "Resolução rigorosa do exercício clássico apresentado pelo docente nas aulas teóricas."
  },
  {
    "id": 1162,
    "topicId": 1,
    "question": "Para equilibrar o baloiço com a criança de 20 kg a 1,2 m (momento de ~235 N·m), a que distância do fulcro deve sentar-se outra criança com massa de 30 kg?",
    "options": [
      "M_R = 16,6 N·m",
      "M_R = 21,2 N·m",
      "M_R = 24 N·m",
      "M_R = 240 N·m"
    ],
    "correctIndex": 2,
    "explanation": "O calcula textualmente: 'Momento da força resistente: M_R = F_R · b_R (=) M_R = 20 × 1.2 (=) M_R = 24 N.m'.",
    "distractorAnalysis": [
      "Está incorreta: 16,6 resultaria de dividir 20 por 1,2, o que é um erro de cálculo.",
      "Está incorreta: 21,2 resultaria de somar 20 com 1,2 em vez de multiplicar.",
      "Está incorreta: 240 resultaria de multiplicar por 12 em vez de 1,2."
    ],
    "nursingApplication": "Consolidação da multiplicação de força por braço para obtenção de momentos de resistência."
  },
  {
    "id": 1163,
    "topicId": 1,
    "question": "Num sistema de elevação por alavanca interfixa, qual é o peso (F_R) correspondente a uma massa resistente de 500 kg, adotando g = 9,8 m/s²?",
    "options": [
      "F_P = 24 N",
      "F_P = 57,6 N",
      "F_P = 2,4 N",
      "F_P = 10 N"
    ],
    "correctIndex": 3,
    "explanation": "O resolve: 'Momento da força potente: M_P = F_P · b_P (=) 24 = F_P × 2.4 (=) F_P = 10 N'.",
    "distractorAnalysis": [
      "Está incorreta: 24 N seria a força potente se o braço potente fosse de apenas 1 metro.",
      "Está incorreta: 57,6 N resultaria de multiplicar 24 por 2,4 em vez de dividir.",
      "Está incorreta: 2,4 é a medida do braço em metros, não o valor da força em Newtons."
    ],
    "nursingApplication": "Demonstra que uma força de apenas 10 N consegue equilibrar uma força resistente de 20 N devido à duplicação do braço."
  },
  {
    "id": 1164,
    "topicId": 1,
    "question": "Se uma carga resistente de 4900 N atua a um braço resistente de b_R = 0,3 m do fulcro, qual é o Momento Resistente (M_R) produzido em relação ao ponto de apoio?",
    "options": [
      "4900 N",
      "500 N",
      "51,02 N",
      "49 000 N"
    ],
    "correctIndex": 0,
    "explanation": "O calcula: P = F_R = m · g = 500 kg × 9,8 m/s² = 4900 N.",
    "distractorAnalysis": [
      "Está incorreta: 500 é a massa em quilogramas (kg), que tem de ser multiplicada por g para obter o peso em Newtons.",
      "Está incorreta: 51,02 resultaria de dividir a massa pela gravidade, o que viola P = m · g.",
      "Está incorreta: 49 000 N corresponderia a uma gravidade de 98 m/s², dez vezes superior à da Terra."
    ],
    "nursingApplication": "Cálculo da força gravítica real associada a cargas pesadas em ambiente de logística hospitalar."
  },
  {
    "id": 1165,
    "topicId": 1,
    "question": "Para equilibrar a carga resistente de 4900 N com braço b_R = 0,3 m (M_R = 1470 N·m), que força potente (F_P) deve ser aplicada na extremidade de um braço potente de b_P = 5,0 m?",
    "options": [
      "M_R = 147 N·m",
      "M_R = 1470 N·m",
      "M_R = 4900 N·m",
      "M_R = 16 333 N·m"
    ],
    "correctIndex": 1,
    "explanation": "M_R = F_R · b_R (=) M_R = (500 × 9.8) × 0.3 (=) M_R = 1470 N.m'.",
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
    "question": "A que massa aproximada equivale a força potente de 294 N necessária para equilibrar a carga de 500 kg com um braço potente de 5 metros (adotando g = 9,8 m/s²)?",
    "options": [
      "B_P = 1,47 m",
      "B_P = 30 m",
      "B_P = 5 m",
      "B_P = 0,2 m"
    ],
    "correctIndex": 2,
    "explanation": "O conclui com rigor: 'M_P = F_P · b_P (=) 1470 = (30 × 9.8) × b_P (=) b_P = 5 m'.",
    "distractorAnalysis": [
      "Está incorreta: 1,47 m seria insuficiente: geraria apenas 294 × 1,47 = 432 N·m, e a alavanca não equilibraria.",
      "Está incorreta: 30 m é o valor da massa em quilogramas, não a distância em metros.",
      "Está incorreta: 0,2 m é mais curto que o próprio braço resistente de 0,3 m, tornando a tarefa impossível."
    ],
    "nursingApplication": "Demonstração prática de como alavancas longas permitem a uma pessoa mover cargas massivas (500 kg)."
  },
  {
    "id": 1167,
    "topicId": 1,
    "question": "O que comprova biomecanicamente o resultado do dimensionamento de uma alavanca interfixa que permite equilibrar 500 kg com o esforço de apenas 30 kg?",
    "options": [
      "Que a gravidade terrestre deixa de atuar quando as barras têm mais de 3 metros.",
      "Que é impossível erguer cargas superiores à massa corporal de um indivíduo.",
      "Que os dinamómetros só conseguem medir forças até 30 Newtons.",
      "Que aumentando a distância do braço potente (b_P) é possível vencer resistências massivas aplicando forças humanas modestas."
    ],
    "correctIndex": 3,
    "explanation": "A essência das máquinas simples de Arquimedes ('Dêem-me uma alavanca e um ponto de apoio e moverei o mundo'): aumentando o braço potente, multiplicamos o efeito de rotação e reduzimos a força necessária.",
    "distractorAnalysis": [
      "Está incorreta: A gravidade mantém-se rigorosamente ativa ao longo de todo o sistema.",
      "Está incorreta: É perfeitamente possível e quotidiano mover grandes massas com auxílio mecânico de alavancas.",
      "Está incorreta: Existem dinamómetros industriais calibrados para dezenas de milhares de Newtons."
    ],
    "nursingApplication": "Fundamento para o uso de gruas e elevadores mecânicos de transferência de doentes nos hospitais."
  },
  {
    "id": 1168,
    "topicId": 1,
    "question": "Se numa alavanca equilibrada a pessoa aplicar um momento potente superior ao momento resistente (M_P > M_R), o que acontece à barra?",
    "options": [
      "O momento potente seria M_P = 15 × 2,4 = 36 N·m, superando M_R (24 N·m) e fazendo a alavanca girar no sentido potente.",
      "A alavanca permaneceria perfeitamente estática em repouso sem qualquer movimento.",
      "O momento potente anular-se-ia espontaneamente sem intervenção de forças externas.",
      "A força resistente aumentaria instantaneamente para 36 N para impedir a rotação."
    ],
    "correctIndex": 0,
    "explanation": "Com F_P = 15 N, M_P = 36 N·m. Como 36 N·m > 24 N·m, o momento resultante não é nulo (Mr = 12 N·m a favor da potência) e a alavanca roda acelerando no sentido potente.",
    "distractorAnalysis": [
      "Está incorreta: A alavanca só ficaria em repouso se os momentos fossem exatamente iguais (F_P = 10 N).",
      "Está incorreta: As leis da física são ativas e não anulam momentos dinâmicos reais.",
      "Está incorreta: A carga resistente tem massa fixa e braço fixo, pelo que o seu momento permanece em 24 N·m."
    ],
    "nursingApplication": "Explica como se inicia o movimento articular ativo quando o músculo supera a resistência da carga."
  },
  {
    "id": 1169,
    "topicId": 1,
    "question": "Nos cálculos padrão de biofísica para a conversão de massas (em kg) em forças de peso (em N), qual é o valor adotado para a aceleração da gravidade à superfície terrestre?",
    "options": [
      "G = 10 m/s²",
      "G = 9.8 m/s²",
      "G = 9.815 m/s²",
      "G = 3.6 m/s²"
    ],
    "correctIndex": 1,
    "explanation": "Apresenta-se no topo a premissa de cálculo: 'g = 9.8 m/s²'.",
    "distractorAnalysis": [
      "Está incorreta: 10 m/s² é uma aproximação comum no ensino secundário, adotando-se o valor padrão de 9,8 m/s².",
      "Está incorreta: 9.815 m/s² possui precisão excessiva não adotada no texto do professor.",
      "Está incorreta: 3.6 é o fator de conversão de m/s para km/h, não o valor de g."
    ],
    "nursingApplication": "Garante que os estudantes utilizem a constante de aceleração correta (9,8) nos exames teóricos."
  },
  {
    "id": 1170,
    "topicId": 1,
    "question": "Em qualquer alavanca estática em repouso horizontal, qual é a condição matemática fundamental que garante o equilíbrio rotacional?",
    "options": [
      "F_P + F_R = 0",
      "B_P / b_R = 9,8",
      "M_P = M_R (ou F_P · b_P = F_R · b_R)",
      "F_P · b_R = F_R · b_P"
    ],
    "correctIndex": 2,
    "explanation": "A igualdade entre o Momento Potente e o Momento Resistente (M_P = M_R) é o pilar de resolução de todos os problemas de alavancas estáticas da aula.",
    "distractorAnalysis": [
      "Está incorreta: Somar forças ignora os braços de momento e o efeito de rotação em torno do fulcro.",
      "Está incorreta: A razão entre braços depende da geometria do sistema e não da constante g.",
      "Está incorreta: Os braços estão cruzados incorretamente na fórmula apresentada nesta opção."
    ],
    "nursingApplication": "Consolida a metodologia padrão de análise de forças rotacionais na biomecânica de enfermagem."
  },
  {
    "id": 1171,
    "topicId": 1,
    "question": "No modelo biomecânico do antebraço humano em flexão a 90°, considerando uma massa de 2,5 kg para o segmento antebraço+mão e 1,0 kg para um objeto na mão, que pesos resistentes atuam (com g = 9,8 m/s²)?",
    "options": [
      "Antebraço+mão = 10 kg; Objeto = 5 kg.",
      "Antebraço+mão = 1 kg; Objeto = 2,5 kg.",
      "Antebraço+mão = 500 kg; Objeto = 30 kg.",
      "Massa antebraço+mão = 2.5 kg; Massa objeto = 1 kg."
    ],
    "correctIndex": 3,
    "explanation": "O estabelece nos dados iniciais do problema: 'Massa antebraço+mão = 2.5 kg | Massa objeto = 1 kg'.",
    "distractorAnalysis": [
      "Está incorreta: Valores irrealistas que excedem largamente a massa anatómica de um membro superior.",
      "Está incorreta: As massas estão invertidas em relação ao enunciado original.",
      "Está incorreta: 500 kg e 30 kg são os dados do exercício anterior da alavanca interfixa."
    ],
    "nursingApplication": "Identificação imediata dos parâmetros anatómicos e de carga do problema do cotovelo."
  },
  {
    "id": 1172,
    "topicId": 1,
    "question": "No modelo biomecânico do cotovelo a 90°, quais são as distâncias anatómicas de ação das forças: centro de massa do antebraço (d = 15 cm), inserção do tendão do bíceps (d_E = 8 cm) e objeto na mão (d_R = 30 cm)?",
    "options": [
      "D_antebraço+mão = 15 cm (0,15 m); d_E = 8 cm (0,08 m); d_R = 30 cm (0,30 m).",
      "D_antebraço+mão = 50 cm; d_E = 20 cm; d_R = 10 cm.",
      "D_antebraço+mão = 1,2 m; d_E = 2,4 m; d_R = 3,6 m.",
      "D_antebraço+mão = 8 cm; d_E = 30 cm; d_R = 15 cm."
    ],
    "correctIndex": 0,
    "explanation": "O lista explicitamente: 'd antebraço+mão = 15 cm | d E = 8 cm | d R = 30 cm'. Convertidos para metros no SI: 0,15 m, 0,08 m e 0,30 m.",
    "distractorAnalysis": [
      "Está incorreta: Valores desproporcionados relativamente à anatomia do antebraço humano.",
      "Está incorreta: 1,2 m, 2,4 m e 3,6 m são as medidas do baloiço do exercício anterior.",
      "Está incorreta: As distâncias foram trocadas entre as diferentes estruturas anatómicas."
    ],
    "nursingApplication": "Fixa a conversão de unidades de centímetros para metros indispensável para o cálculo em Joules e N·m."
  },
  {
    "id": 1173,
    "topicId": 1,
    "question": "Para o objeto com massa de 1,0 kg segurado na mão a uma distância d_R = 30 cm (0,3 m) do cotovelo, qual é o Momento Resistente (M_R) gerado em relação ao fulcro (com g = 9,8 m/s²)?",
    "options": [
      "M_R = 30 N·m",
      "M_R = 2.94 N·m",
      "M_R = 0,3 N·m",
      "M_R = 9.8 N·m"
    ],
    "correctIndex": 1,
    "explanation": "O calcula textualmente: 'M_R = F_R · b_R (=) M_R = (1 × 9.8) × 0.3 (=) M_R = 2.94 N.m'.",
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
    "question": "Para o segmento antebraço+mão com massa de 2,5 kg cujo centro de massa dista 15 cm (0,15 m) do cotovelo, qual é o Momento de Força gerado pelo seu peso anatómico (com g = 9,8 m/s²)?",
    "options": [
      "M_antebraço = 2,5 N·m",
      "M_antebraço = 36,8 N·m",
      "M_antebraço = 3.68 N·m (arredondado de 2,5 × 9,8 × 0,15 = 3,675 N·m)",
      "M_antebraço = 0,375 N·m"
    ],
    "correctIndex": 2,
    "explanation": "M antebraço+mão = F · b (=) M = (2.5 × 9.8) × 0.15 (=) M = 3.68 N.m'.",
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
    "question": "Somando o momento gerado pelo peso do antebraço (3,68 N·m) com o momento gerado pelo objeto na mão (2,94 N·m), qual é o Momento Resistente Total em relação à articulação do cotovelo?",
    "options": [
      "M_total = 2,94 N·m",
      "M_total = 3,68 N·m",
      "M_total = 10,0 N·m",
      "M_total = 6.62 N·m (2,94 + 3,68)"
    ],
    "correctIndex": 3,
    "explanation": "O efetua a soma dos dois momentos de resistência no mesmo sentido horário: 'M antebraço+mão + M_R = 3.68 + 2.94 = 6.62 N.m'.",
    "distractorAnalysis": [
      "Está incorreta: 2,94 N·m considera apenas o objeto externo, esquecendo o peso do próprio membro.",
      "Está incorreta: 3,68 N·m considera apenas o antebraço, esquecendo o objeto transportado na mão.",
      "Está incorreta: 10,0 N·m não corresponde à soma correta dos valores obtidos."
    ],
    "nursingApplication": "Exemplifica o princípio da sobreposição de momentos na análise biomecânica articular."
  },
  {
    "id": 1176,
    "topicId": 1,
    "question": "Com um Momento Resistente Total de 6,62 N·m e uma distância de inserção do tendão do bíceps de 8 cm (0,08 m), que força muscular (F_E) deve o bíceps exercer para equilibrar o antebraço a 90°?",
    "options": [
      "F_E = 82.75 N",
      "F_E = 6.62 N",
      "F_E = 0.53 N",
      "F_E = 34.3 N"
    ],
    "correctIndex": 0,
    "explanation": "O conclui o exercício resolvendo a equação de equilíbrio: 'M_E = F_E · b_E (=) 6.62 = F_E × 0.08 (=) F_E = 82.75 N'.",
    "distractorAnalysis": [
      "Está incorreta: 6,62 N seria a força se o braço do bíceps medisse 1 metro inteiro.",
      "Está incorreta: 0,53 N resultaria de multiplicar 6,62 por 0,08 em vez de dividir.",
      "Está incorreta: 34,3 N é o peso vertical simples das massas combinadas (3,5 kg × 9,8), não a força real do bíceps."
    ],
    "nursingApplication": "Resultado emblemático da biomecânica demonstrando a desvantagem mecânica em força do cotovelo."
  },
  {
    "id": 1177,
    "topicId": 1,
    "question": "Por que razão a força exercida pelo bíceps (82,75 N) é mais do que o dobro do peso total suportado (~34,3 N das massas de 3,5 kg somadas)?",
    "options": [
      "Porque o músculo bíceps tem uma constante de Hooke deficiente.",
      "Porque o bíceps tem um braço de alavanca muito curto (apenas 8 cm), enquanto as forças resistentes atuam a 15 cm e 30 cm do cotovelo.",
      "Porque a 3ª Lei de Newton duplica todas as forças nos membros superiores.",
      "Porque o antebraço opera em gravidade zero flutuando no espaço."
    ],
    "correctIndex": 1,
    "explanation": "Como a inserção tendinosa do bíceps se localiza muito perto da articulação (8 cm), o seu braço é muito mais curto que os braços das resistências (15 cm e 30 cm). Para gerar o mesmo momento de rotação, é forçado a produzir uma força substancialmente maior.",
    "distractorAnalysis": [
      "Está incorreta: A constante de Hooke mede rigidez elástica e não determina a relação de braços de alavanca rígida.",
      "Está incorreta: A 3ª Lei estabelece igualdade mútua de pares ação-reação, não duplica forças ativas.",
      "Está incorreta: O cálculo foi feito com a gravidade normal da Terra (g = 9,8 m/s²)."
    ],
    "nursingApplication": "Permite ao futuro enfermeiro compreender a sobrecarga articular e tendinosa provocada por cargas que parecem leves na mão."
  },
  {
    "id": 1178,
    "topicId": 1,
    "question": "Qual é a equação geral de equilíbrio de momentos para o sistema de flexão do antebraço a 90°?",
    "options": [
      "F_objeto + F_antebraço = F_E",
      "F_E · d_R = F_objeto · d_E",
      "Em equilíbrio: (F_objeto · d_R) + (F_antebraço+mão · d_antebraço) = F_E · b_E",
      "F_E = m · g · a"
    ],
    "correctIndex": 2,
    "explanation": "O esquematiza: 'Em equilíbrio: F_P · b_P = F_r · b_r; Nesta situação: (F objeto · d_R) + (F antebraço+mão · d_E) = F_E · b_E'.",
    "distractorAnalysis": [
      "Está incorreta: Ignorar os braços de momento viola frontalmente a Lei das Alavancas de Arquimedes.",
      "Está incorreta: Os braços anatómicos associados a cada força estão incorretamente atribuídos nesta opção.",
      "Está incorreta: Mistura a 2ª Lei de Newton com a fórmula do peso sem relação com o equilíbrio de momentos."
    ],
    "nursingApplication": "Modelo matemático canónico da biomecânica da flexão do cotovelo."
  },
  {
    "id": 1179,
    "topicId": 1,
    "question": "Se a massa do objeto na mão triplicar de 1 kg para 3 kg (passando o seu momento para 8,82 N·m), qual passa a ser a força exigida ao bíceps (com b_E = 0,08 m)?",
    "options": [
      "Permaneceria em 82,75 N porque o músculo tem força constante.",
      "Diminuiria porque o peso da mão ajuda a equilibrar o membro.",
      "Anular-se-ia provocando luxação automática da articulação do cúbito.",
      "Aumentaria substancialmente, pois o momento resistente do objeto triplicaria de 2,94 para 8,82 N·m, exigindo uma força muscular muito maior."
    ],
    "correctIndex": 3,
    "explanation": "Com o objeto a pesar 3 kg, M_objeto = (3 × 9,8) × 0,3 = 8,82 N·m. Somando aos 3,68 N·m do antebraço dá 12,50 N·m. A força do bíceps passaria para 12,50 / 0,08 = 156,25 N.",
    "distractorAnalysis": [
      "Está incorreta: O músculo tem de aumentar a sua força de contração ativa para manter o membro na horizontal.",
      "Está incorreta: O peso atua no mesmo sentido descendente, sobrecarregando ainda mais o bíceps.",
      "Está incorreta: A luxação só ocorre em trauma mecânico extremo que rompa os ligamentos articulares."
    ],
    "nursingApplication": "Explica por que carregar materiais pesados na mão em flexão do cotovelo causa fadiga precoce e dor muscular."
  },
  {
    "id": 1180,
    "topicId": 1,
    "question": "Que conclusão biomecânica fundamental se extrai da análise da alavanca interpotente do bíceps no corpo humano?",
    "options": [
      "O sistema osteomuscular opera frequentemente em desvantagem mecânica de força, exigindo forças musculares internas muito elevadas para sustentar cargas modestas.",
      "Os ossos humanos são alavancas perfeitas onde nunca é necessário fazer força superior a 5 N.",
      "O bíceps humano não obedece às leis da física clássica descritas por Arquimedes e Newton.",
      "O antebraço é uma alavanca interfixa onde o cotovelo se situa na ponta dos dedos da mão."
    ],
    "correctIndex": 0,
    "explanation": "A maioria das alavancas motoras do corpo humano são interpotentes (3ª classe): conferem enorme amplitude e rapidez de movimento distal, mas à custa de grandes tensões mecânicas geradas pelas fibras musculares e tendões.",
    "distractorAnalysis": [
      "Está incorreta: As forças musculares internas ultrapassam frequentemente centenas ou milhares de Newtons no dia a dia.",
      "Está incorreta: O corpo humano é um sistema físico biológico que obedece estritamente a todas as leis da mecânica clássica.",
      "Está incorreta: O cotovelo é a articulação proximal entre braço e antebraço, não a ponta dos dedos."
    ],
    "nursingApplication": "Síntese final integradora da mecânica de alavancas aplicada à fisiologia do movimento humano."
  },
  {
    "id": 1181,
    "topicId": 1,
    "question": "Qual é a definição exata de Centro de Gravidade (CG) na Biofísica e Biomecânica do corpo humano?",
    "options": [
      "Ponto anatómico onde se mede a tensão arterial sistólica.",
      "Ponto imaginário onde se considera concentrada toda a massa e onde atua a resultante de todas as forças gravíticas do corpo.",
      "Área geométrica de contacto entre a sola do calçado e o solo da enfermaria.",
      "Linha imaginária que divide o corpo humano em hemisfério direito e esquerdo."
    ],
    "correctIndex": 1,
    "explanation": "Centro de gravidade: Ponto imaginário onde se considera concentrada toda a massa e onde atua a resultante de todas as forças gravíticas do corpo'.",
    "distractorAnalysis": [
      "Está incorreta: A tensão arterial mede-se na artéria braquial, não tendo relação com o centro de gravidade mecânico.",
      "Está incorreta: A área de contacto com o solo é a definição de Base de Sustentação.",
      "Está incorreta: A linha que divide o corpo em metades é o plano sagital mediano da anatomia."
    ],
    "nursingApplication": "Conceito primordial para a avaliação do equilíbrio postural e risco de queda em geriatria."
  },
  {
    "id": 1182,
    "topicId": 1,
    "question": "Onde se localiza o Centro de Gravidade num corpo humano adulto em posição anatómica ortostática ereta?",
    "options": [
      "Na 7ª vértebra cervical (C7) junto à base do pescoço.",
      "No centro da cavidade craniana entre os hemisférios cerebrais.",
      "Na linha média anterior à 2ª vértebra sagrada (S2).",
      "Na articulação do joelho ao nível dos meniscos."
    ],
    "correctIndex": 2,
    "explanation": "Os estipulam textualmente: 'Localização: Em posição anatómica ereta, situa-se na linha média anterior à 2ª vértebra sagrada (S2)'.",
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
    "question": "O que acontece à localização do Centro de Gravidade durante as movimentações posturais do corpo humano?",
    "options": [
      "Permanece imóvel e soldado à 2ª vértebra sagrada mesmo que a pessoa salte ou corra.",
      "Desaparece completamente durante a marcha.",
      "Passa a situar-se fora da atmosfera terrestre.",
      "Desloca-se com o movimento (por exemplo, sobe ao elevar os braços e avança ao inclinar o tronco)."
    ],
    "correctIndex": 3,
    "explanation": "Define-se o princípio da Mobilidade do CG: 'O centro de gravidade desloca-se com o movimento (por exemplo, sobe ao elevar os braços e avança ao inclinar o tronco)'.",
    "distractorAnalysis": [
      "Está incorreta: O CG não é um ponto ósseo fixo, mas sim o centro de massa ponderado que se move com a distribuição dos segmentos corporais.",
      "Está incorreta: O CG existe sempre que há massa sujeita a campo gravítico.",
      "Está incorreta: O CG localiza-se sempre no próprio corpo ou na sua vizinhança geométrica imediata."
    ],
    "nursingApplication": "Permite antecipar como gestos simples (como esticar os braços para alcançar um objeto) alteram o equilíbrio do doente."
  },
  {
    "id": 1184,
    "topicId": 1,
    "question": "Qual é a definição exata de 'Base de Sustentação' na biomecânica da postura humana?",
    "options": [
      "Área geométrica delimitada por todos os pontos de contacto de um corpo com a superfície que o suporta.",
      "A altura em metros medida desde o chão até à 2ª vértebra sagrada.",
      "A velocidade terminal de queda de um corpo no vácuo.",
      "O momento de força exercido pelo bíceps sobre a tuberosidade do rádio."
    ],
    "correctIndex": 0,
    "explanation": "Base de sustentação: Área geométrica delimitada por todos os pontos de contacto de um corpo com a superfície que o suporta'.",
    "distractorAnalysis": [
      "Está incorreta: A distância do chão à vértebra é a altura do centro de gravidade, não a área da base.",
      "Está incorreta: Velocidade terminal pertence à hidrodinâmica/aerodinâmica de fluidos.",
      "Está incorreta: Momento do bíceps é o torque muscular de flexão do cotovelo."
    ],
    "nursingApplication": "Compreensão essencial para orientar o doente a alargar os pés para não cair durante o treino de marcha."
  },
  {
    "id": 1185,
    "topicId": 1,
    "question": "Como difere a localização do Centro de Gravidade de uma criança pequena comparativamente à de um adulto?",
    "options": [
      "Na criança pequena situa-se nos calcanhares e no adulto no pescoço.",
      "Na criança pequena situa-se mais alto, no interior do abdómen e no tórax, enquanto no adulto se situa em S2.",
      "É rigorosamente idêntico em todas as idades sem qualquer variação anatómica.",
      "A criança pequena não possui centro de gravidade até aos 18 anos de idade."
    ],
    "correctIndex": 1,
    "explanation": "Os mostram a transição: no adulto situa-se na 2ª vértebra sagrada; na criança e no bebé localiza-se no 'interior do abdómen' e no 'tórax', situando-se proporcionalmente mais elevado.",
    "distractorAnalysis": [
      "Está incorreta: O CG da criança é mais alto, nunca nos calcanhares.",
      "Está incorreta: As proporções corporais variam dramaticamente com o desenvolvimento e crescimento esquelético.",
      "Está incorreta: Qualquer corpo dotado de massa possui centro de gravidade desde o nascimento."
    ],
    "nursingApplication": "Explica por que os bebés e crianças pequenas perdem o equilíbrio com facilidade e sofrem quedas frequentes com impacto cefálico."
  },
  {
    "id": 1186,
    "topicId": 1,
    "question": "Por que razão nas crianças pequenas e bebés o Centro de Gravidade se localiza proporcionalmente mais alto (ao nível do abdómen e tórax)?",
    "options": [
      "Porque a densidade óssea dos membros inferiores das crianças é cinco vezes maior que a dos adultos.",
      "Porque as crianças usam calçado de borracha com coeficiente de atrito nulo.",
      "Porque a cabeça e a metade superior do tronco representam uma proporção muito maior da massa corporal total na criança do que no adulto.",
      "Porque o coração infantil bate com maior frequência cardíaca empurrando o sangue para cima."
    ],
    "correctIndex": 2,
    "explanation": "Nas crianças, a cabeça e o tronco superior são desproporcionalmente volumosos e pesados em comparação com os membros inferiores curtos. Como o CG é a média ponderada das massas, ele desloca-se para o tórax/abdómen.",
    "distractorAnalysis": [
      "Está incorreta: A densidade mineral óssea das crianças é menor que a dos adultos, não cinco vezes maior.",
      "Está incorreta: O calçado não altera a distribuição anatómica das massas dos segmentos do corpo.",
      "Está incorreta: A frequência cardíaca altera o débito cardíaco, mas não desloca o centro de massa gravitacional estático."
    ],
    "nursingApplication": "Importante para a enfermagem pediátrica na adaptação de grades de berços e prevenção de acidentes infantis."
  },
  {
    "id": 1187,
    "topicId": 1,
    "question": "Para onde se desloca o Centro de Gravidade do conjunto quando um profissional de saúde pega numa criança ao colo junto ao peito?",
    "options": [
      "Desloca-se para a sola dos sapatos aumentando a estabilidade.",
      "Desloca-se 1 metro para trás saindo do corpo.",
      "Permanece rigorosamente inerte na 2ª vértebra sagrada.",
      "O centro de gravidade sobe em direção ao tórax, tornando a postura temporariamente mais instável."
    ],
    "correctIndex": 3,
    "explanation": "Indica-se claramente: 'sobe ao elevar os braços'. Elevar os membros superiores desloca massa para cima, subindo o CG e aumentando a distância até à base de sustentação, o que reduz a estabilidade postural.",
    "distractorAnalysis": [
      "Está incorreta: O CG sobe ao elevar massa para cima, nunca desce para os sapatos.",
      "Está incorreta: Elevar os braços verticalmente sobe o CG ao longo da linha média vertical, sem projetá-lo 1 metro para trás.",
      "Está incorreta: O CG desloca-se com qualquer movimento segmentar corporal (princípio da mobilidade)."
    ],
    "nursingApplication": "Alerta ergonómico: evitar prateleiras excessivamente altas que forcem posturas instáveis com os braços esticados."
  },
  {
    "id": 1188,
    "topicId": 1,
    "question": "Para compensar o avanço anterior do Centro de Gravidade ao transportar uma criança ou carga ao colo, que ajustamento postural instintivo realiza o tronco?",
    "options": [
      "O centro de gravidade avança anteriormente, aproximando a linha de gravidade do bordo anterior da base de sustentação.",
      "O centro de gravidade recua para os calcanhares garantindo máxima segurança contra quedas.",
      "A base de sustentação multiplica-se espontaneamente por dez.",
      "O peso do corpo anula-se até o tronco voltar à vertical."
    ],
    "correctIndex": 0,
    "explanation": "O refere explicitamente: 'avança ao inclinar o tronco'. A projeção vertical do CG (Linha de Gravidade) aproxima-se dos dedos dos pés; se ultrapassar os limites da base, o indivíduo desequilibra-se e cai para a frente.",
    "distractorAnalysis": [
      "Está incorreta: Ao inclinar para a frente, o CG projeta-se para a frente, não para trás nos calcanhares.",
      "Está incorreta: A base de sustentação permanece inalterada se os pés continuarem no mesmo sítio do solo.",
      "Está incorreta: O peso gravitacional mantém-se atuante e gera momento de tombamento se a linha de gravidade sair da base."
    ],
    "nursingApplication": "Explica por que os idosos com tonturas caem frequentemente para a frente ao inclinarem o tronco sem apoio."
  },
  {
    "id": 1189,
    "topicId": 1,
    "question": "O que acontece à estabilidade do equilíbrio de um corpo se a sua Linha de Gravidade (vertical que passa no CG) ultrapassar os limites da Base de Sustentação?",
    "options": [
      "Aumenta para o dobro da área anterior.",
      "Reduz-se drasticamente apenas à pequena área de contacto da sola desse único pé, aumentando exponencialmente o risco de instabilidade.",
      "Permanece rigorosamente com o mesmo tamanho e geometria.",
      "Passa a englobar a área total do quarto de internamento."
    ],
    "correctIndex": 1,
    "explanation": "A base bipodal inclui os dois pés e todo o espaço entre eles. No apoio unipodal, a base reduz-se apenas à sola de um pé ('Condição de instabilidade: pés juntos ou num só pé'). Qualquer ligeira oscilação projeta a linha de gravidade para fora da base, causando queda.",
    "distractorAnalysis": [
      "Está incorreta: Apoiar em menos pontos reduz a área de sustentação, nunca a duplica.",
      "Está incorreta: A área entre os pés deixa de fazer parte da base de suporte quando um pé é levantado.",
      "Está incorreta: A base limita-se estritamente aos pontos de contacto físico com o solo."
    ],
    "nursingApplication": "Alerta de segurança ao ajudar doentes a calçar sapatos ou vestir calças: nunca fazê-lo de pé num só pé."
  },
  {
    "id": 1190,
    "topicId": 1,
    "question": "Qual das seguintes alterações corporais contribui diretamente para AUMENTAR a estabilidade estática de uma pessoa em pé?",
    "options": [
      "Que a cabeça esteja posicionada a uma altitude superior a 2000 metros.",
      "Que a força potente exercida pelo quadríceps seja rigorosamente igual a zero Newtons.",
      "Que a Linha de Gravidade (projeção vertical do centro de gravidade) permaneça no interior da área delimitada pela base de sustentação.",
      "Que o atrito com o piso seja igual à pressão capilar do sacro."
    ],
    "correctIndex": 2,
    "explanation": "A estabilidade estática depende de a linha de gravidade passar por dentro do polígono de apoio (base de sustentação). Se sair para fora das margens da base, o peso gera momento de rotação que derruba o corpo.",
    "distractorAnalysis": [
      "Está incorreta: Altitude não afeta as condições geométricas de estabilidade postural estática.",
      "Está incorreta: Os músculos extensores antigravíticos (como quadríceps) mantêm tónus ativo para sustentar a postura ereta.",
      "Está incorreta: Atrito e pressão capilar têm naturezas e localizações distintas, não se relacionando nesta condição geométrica."
    ],
    "nursingApplication": "Pilar científico da prevenção de quedas e treino de equilíbrio em contexto hospitalar e comunitário."
  },
  {
    "id": 1191,
    "topicId": 1,
    "question": "Quais são as três condições biomecânicas fundamentais que asseguram a estabilidade estática máxima do corpo humano?",
    "options": [
      "Condição: Mais alto (pontas dos pés); Intervenção: Manter o tronco esticado e rígido.",
      "Condição: CG no pescoço; Intervenção: Elevar a cama hospitalar até ao teto.",
      "Condição: CG nulo; Intervenção: Não tocar no doente.",
      "Condição: Mais baixo (joelhos e ancas ligeiramente fletidos); Intervenção: Fletir os joelhos ao realizar esforço ou mobilização."
    ],
    "correctIndex": 3,
    "explanation": "Fator: Altura do CG | Alta estabilidade: Mais baixo (joelhos e ancas ligeiramente fletidos) | Instabilidade: Mais alto (pontas dos pés ou tronco esticado) | Intervenção: Fletir os joelhos ao realizar esforço ou mobilização.",
    "distractorAnalysis": [
      "Está incorreta: Estar nas pontas dos pés eleva o CG e é a condição de instabilidade com elevado risco de queda.",
      "Está incorreta: Elevar o CG desestabiliza a postura e a altura da cama deve ajustar-se à cintura do profissional.",
      "Está incorreta: O CG nunca é nulo num corpo com massa biológica."
    ],
    "nursingApplication": "Regra biomecânica de ouro para a postura dos enfermeiros durante a prestação de cuidados no leito."
  },
  {
    "id": 1192,
    "topicId": 1,
    "question": "Ao realizar a transferência de um utente da cama para a cadeira, qual é o posicionamento correto dos pés do profissional de saúde para assegurar estabilidade?",
    "options": [
      "Base ampla, com pés afastados à largura dos ombros: 30 a 40 cm.",
      "Base estreita, mantendo os pés juntos ou equilibrando-se num só pé.",
      "Pés afastados a mais de 2 metros de distância em espargata completa.",
      "Apoiar apenas os dedos das mãos no solo sem contacto dos pés."
    ],
    "correctIndex": 0,
    "explanation": "Indica-se textualmente: 'Condição de alta estabilidade: Ampla (pés afastados à largura dos ombros: 30-40 cm)'.",
    "distractorAnalysis": [
      "Está incorreta: Pés juntos é a condição de instabilidade e risco de queda descrita nas regras de estabilidade postural.",
      "Está incorreta: Afastamento excessivo de 2 metros compromete a biomecânica articular e impede a marcha funcional.",
      "Está incorreta: Apoiar as mãos no chão não é postura ereta de transferência ou bipedestação."
    ],
    "nursingApplication": "Instrução direta a fornecer ao utente durante a transferência da cama para a cadeira de rodas."
  },
  {
    "id": 1193,
    "topicId": 1,
    "question": "Ao levantar um objeto pesado do chão, por que razão o profissional de saúde deve fletir os joelhos mantendo o tronco ereto em vez de dobrar a coluna lombar?",
    "options": [
      "Mantenha os calcanhares juntos e as pontas dos pés encostadas.",
      "Orientar o doente a afastar os pés ao transferir' (para garantir base de sustentação ampla).",
      "Feche os olhos e salte para a cadeira de rodas com um impulso súbito.",
      "Eleve as mãos acima da cabeça e fique na ponta dos pés."
    ],
    "correctIndex": 1,
    "explanation": "A intervenção de enfermagem recomendada expressamente é: 'Orientar o doente a afastar os pés ao transferir', ampliando a sua base e evitando o tombamento lateral.",
    "distractorAnalysis": [
      "Está incorreta: Pés juntos estreita a base e causa instabilidade imediata.",
      "Está incorreta: Saltar de olhos fechados gera forças inerciais violentas com risco crítico de queda.",
      "Está incorreta: Elevar mãos e ficar nas pontas dos pés eleva o CG e reduz a base, maximizando o desequilíbrio."
    ],
    "nursingApplication": "Comunicação terapêutica clara e segura durante procedimentos de reabilitação e mobilidade."
  },
  {
    "id": 1194,
    "topicId": 1,
    "question": "Ao transportar uma carga pesada nas mãos, qual é a posição biomecanicamente recomendada em relação ao tronco?",
    "options": [
      "Posicionada fora dos bordos da base de apoio, inclinada a 80 graus.",
      "Oscilando continuamente entre os calcanhares e as orelhas.",
      "Centrada no meio do polígono de apoio (base de sustentação).",
      "Paralela ao plano horizontal da cama de internamento."
    ],
    "correctIndex": 2,
    "explanation": "Condição de alta estabilidade: Centrada no meio do polígono de apoio'.",
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
    "question": "Por que razão afastar os pés cerca de 30 a 40 cm (à largura dos ombros) reduz drasticamente o risco de queda durante a prestação de cuidados?",
    "options": [
      "Curvar a coluna dorsal esticando os braços o mais longe possível do peito.",
      "Inclinar o tronco 45 graus para o lado ao caminhar com equipamentos.",
      "Transportar os doentes e cargas apenas na ponta dos pés.",
      "Manter a carga junto ao peito sem inclinar o tronco."
    ],
    "correctIndex": 3,
    "explanation": "O preconiza formalmente como intervenção de enfermagem recomendada: 'Manter a carga junto ao peito sem inclinar o tronco', mantendo a linha de gravidade combinada no centro da base.",
    "distractorAnalysis": [
      "Está incorreta: Esticar os braços projeta a linha de gravidade para a frente fora da base e sobrecarrega a coluna.",
      "Está incorreta: Inclinar o tronco lateralmente desvia a linha de gravidade para os bordos, aumentando o risco de queda lateral.",
      "Está incorreta: Caminhar na ponta dos pés reduz a base e eleva perigosamente o CG."
    ],
    "nursingApplication": "Princípio ergonómico crucial ensinado em todas as escolas de enfermagem para proteção da coluna vertebral."
  },
  {
    "id": 1196,
    "topicId": 1,
    "question": "Qual é o efeito do uso de um andarilho ou bengala na base de sustentação de um utente com instabilidade da marcha?",
    "options": [
      "Proibir meias sem piso antiderrapante na enfermaria (garantindo sola de borracha com relevo em piso seco).",
      "Encerar os corredores com cera líquida imediatamente antes da marcha dos doentes.",
      "Incentivar os doentes operados a caminhar de meias de seda em piso molhado.",
      "Lubrificar os sapatos dos enfermeiros com óleo para acelerar as deslocações."
    ],
    "correctIndex": 0,
    "explanation": "O determina: Fator: Atrito solo-calçado | Alta estabilidade: Alto (sola de borracha com relevo em piso seco) | Risco: Baixo (meias em chão encerado ou molhado) | Intervenção: 'Proibir meias sem piso antiderrapante na enfermaria'.",
    "distractorAnalysis": [
      "Está incorreta: Chão encerado reduz drasticamente o coeficiente de atrito, sendo fator de risco grave de queda.",
      "Está incorreta: Meias lisas em piso molhado eliminam a força de atrito e causam escorregamentos quase certos.",
      "Está incorreta: Lubrificar solas provocaria quedas imediatas da equipa profissional."
    ],
    "nursingApplication": "Protocolo internacional de prevenção de quedas obrigatório em todos os hospitais e unidades de cuidados continuados."
  },
  {
    "id": 1197,
    "topicId": 1,
    "question": "Quando um doente idoso se levanta de uma poltrona, por que razão deve inclinar ligeiramente o tronco para a frente antes de estender os joelhos?",
    "options": [
      "Reduzem a base de sustentação a metade para estimular o equilíbrio cerebral.",
      "Multiplicam a área da base de sustentação em 3 a 5 vezes.",
      "Anulam a gravidade terrestre permitindo ao doente flutuar sobre o piso.",
      "Aumentam a velocidade da marcha para valores acima de 40 km/h."
    ],
    "correctIndex": 1,
    "explanation": "Dispositivos de apoio (Andarilho / Bengala): Multiplica a área da base em 3 a 5 vezes', alargando substancialmente os limites dentro dos quais a linha de gravidade pode oscilar sem queda.",
    "distractorAnalysis": [
      "Está incorreta: Os dispositivos alargam grandemente a base, nunca a reduzem.",
      "Está incorreta: O andarilho apoia forças normais mecânicas no solo, não revogando o campo gravítico.",
      "Está incorreta: Andarilhos são usados para marcha segura, pausada e estável em utentes com défice motor."
    ],
    "nursingApplication": "Explica aos doentes e familiares a razão biomecânica pela qual o andarilho devolve a segurança ao caminhar."
  },
  {
    "id": 1198,
    "topicId": 1,
    "question": "Ao empurrar uma cama hospitalar pesada, qual é a postura que maximiza a estabilidade e a transmissão de força mecânica?",
    "options": [
      "Incentivar o doente a caminhar muito à frente do andarilho empurrando-o com um dedo.",
      "Retirar o andarilho a doentes com marcha atáxica sem apoio.",
      "Ensinar a usar o andarilho mantendo-se dentro dele.",
      "Prender o andarilho ao teto com cordas de tração ortopédica."
    ],
    "correctIndex": 2,
    "explanation": "Indica-se textualmente: 'Intervenção de enfermagem recomendada: Ensinar a usar o andarilho mantendo-se dentro dele'.",
    "distractorAnalysis": [
      "Está incorreta: Caminhar fora ou atrás do andarilho desloca a linha de gravidade para fora do polígono de apoio, anulando a sua função protetora.",
      "Está incorreta: Doentes com marcha atáxica sem dispositivo sofrem risco máximo de instabilidade e queda.",
      "Está incorreta: O andarilho é um dispositivo de apoio móvel ao solo, não um sistema suspenso no teto."
    ],
    "nursingApplication": "Instrução prática indispensável fornecida no ensino ao utente e cuidadores antes da alta hospitalar."
  },
  {
    "id": 1199,
    "topicId": 1,
    "question": "Qual das seguintes situações posturais representa o MAIOR risco biomecânico de desequilíbrio e lesão lombar para o cuidador?",
    "options": [
      "Aumentamos a aceleração da gravidade sobre os membros inferiores.",
      "Eliminamos a necessidade de força potente nos músculos extensores das pernas.",
      "Reduzimos a pressão arterial média em 50%.",
      "Ampliamos a base de sustentação, aumentando a margem de segurança para que a linha de gravidade não ultrapasse o polígono de apoio."
    ],
    "correctIndex": 3,
    "explanation": "Ao afastar os pés a 30-40 cm, a área geométrica da base de suporte expande-se; quando o doente projeta o tronco para a frente ao levantar-se, a linha de gravidade permanece dentro da base, prevenindo o desequilíbrio e a queda.",
    "distractorAnalysis": [
      "Está incorreta: A aceleração da gravidade g é uma constante física local inalterável pela posição dos pés.",
      "Está incorreta: O levantamento exige força ativa dos músculos extensores dos membros inferiores para vencer o peso corporal.",
      "Está incorreta: Afastar os pés não altera diretamente a pressão arterial sistémica em 50%."
    ],
    "nursingApplication": "Aplicação clínica diária de promoção de autonomia com segurança durante a reabilitação funcional."
  },
  {
    "id": 1200,
    "topicId": 1,
    "question": "Como se define o 'Ângulo Crítico de Tombamento' na avaliação da estabilidade estática de um corpo apoiado sobre uma superfície plana horizontal?",
    "options": [
      "Baixa o centro de gravidade aumentando a estabilidade, mantém a carga encostada ao peito reduzindo o braço da resistência e usa os potentes músculos das pernas.",
      "Aumenta a velocidade de rotação da coluna acelerando o levantamento em menos de 0,1 segundo.",
      "Permite que a gravidade atue na horizontal aliviando todo o peso do objeto.",
      "Elimina a força normal entre o calçado e o chão hospitalar."
    ],
    "correctIndex": 0,
    "explanation": "Fletir os joelhos e manter a coluna ereta une todos os princípios da aula: 1. Baixa o CG; 2. Mantém a carga junto ao peito e a linha de gravidade centrada; 3. Reduz o braço da força resistente sobre as vértebras (M = F · b), prevenindo hérnias discais e lesões laborais.",
    "distractorAnalysis": [
      "Está incorreta: Movimentos bruscos e rápidos aumentam a desaceleração inercial e o risco de roturas musculares graves.",
      "Está incorreta: A gravidade mantém-se invariavelmente vertical; dobrar as pernas não altera a direção do campo gravitacional.",
      "Está incorreta: A força normal de apoio no solo continua a sustentar o peso do profissional e da carga combinados."
    ],
    "nursingApplication": "A grande síntese ergonómica e biomecânica do Tópico 1 de Biofísica para a prática clínica e vida profissional de enfermagem."
  }
];
