/**
 * BANCO DE QUESTÕES - TÓPICO 4
 * Hidrostática: equilíbrio hidrostático, pressão (P = F/S) e unidades, experiência de Torricelli,
 * lei fundamental da hidrostática, sistema circulatório e bolsa de soro, vasos comunicantes,
 * manómetro de mercúrio, lei de Pascal e prensa hidráulica, princípio de Torricelli,
 * trabalho e pressão (trabalho sistólico), pressão atmosférica, ouvido médio, mergulho e embolias
 * Total de Questões: 200 (IDs 4001 a 4200)
 */

const TOPIC_4_QUESTIONS = [
  {
    "id": 4001,
    "topicId": 4,
    "question": "Um enfermeiro quer perceber que tipo de situação é tratada pela hidrostática. Em qual dos casos o fluido está nas condições estudadas por este ramo da Física?",
    "options": [
      "Sangue ejetado pelo coração para a aorta em cada sístole",
      "Soro a escoar por um sistema de perfusão com a pinça aberta",
      "Água parada num depósito, sem qualquer escoamento",
      "Ar a entrar nos pulmões durante uma inspiração profunda"
    ],
    "correctIndex": 2,
    "explanation": "A hidrostática estuda as condições de equilíbrio dos fluidos em repouso. Nos restantes casos há escoamento, que não é objeto da hidrostática.",
    "distractorAnalysis": [
      "Está incorreta: o sangue ejetado pelo coração está em movimento, por isso não é um fluido em repouso.",
      "Está incorreta: o soro a escoar está em movimento; a hidrostática trata de fluidos sem escoamento.",
      "Está incorreta: o ar que entra nos pulmões está em movimento, logo não está em repouso."
    ],
    "nursingApplication": "Ajuda a interpretar situações como a altura do saco de soro, em que se comparam as pressões de um líquido parado a diferentes níveis."
  },
  {
    "id": 4002,
    "topicId": 4,
    "question": "Um soro está a correr muito devagar, com a agulha corretamente colocada na veia do doente. Para aumentar a pressão à entrada da veia e, com ela, o caudal, o enfermeiro pode:",
    "options": [
      "subir o saco de soro, aumentando a sua altura acima da veia",
      "descer o saco de soro até ficar abaixo do nível da veia",
      "trocar o saco por outro com mais volume, à mesma altura",
      "descer o saco até ao nível da veia, sem qualquer desnível"
    ],
    "correctIndex": 0,
    "explanation": "Quanto mais alto está o saco, maior é a pressão do líquido à entrada da veia e maior é o caudal. A pressão depende do desnível e não da quantidade de soro no saco.",
    "distractorAnalysis": [
      "Está incorreta: com o saco abaixo da veia a pressão à entrada diminui, o caudal fica pequeno e o sangue pode refluir.",
      "Está incorreta: o que conta é a altura do saco acima da veia e não o volume de líquido que ele contém.",
      "Está incorreta: sem desnível entre o saco e a veia deixa de haver pressão hidrostática a empurrar o líquido, e o caudal diminui."
    ],
    "nursingApplication": "Ao ajustar a altura do saco numa perfusão, o enfermeiro regula a pressão à entrada da veia e, com ela, o caudal do soro."
  },
  {
    "id": 4003,
    "topicId": 4,
    "question": "Numa consulta, um enfermeiro regista uma tensão arterial de 120/80 e escreve a unidade «mmHg». Porque se utiliza esta unidade?",
    "options": [
      "Porque a tensão arterial é uma força, medida pela massa de mercúrio que é deslocada",
      "Porque 1 mmHg é igual a 1 pascal, a unidade SI de pressão",
      "Porque a pressão em mmHg é numericamente igual à pressão em atmosferas",
      "Porque o manómetro de mercúrio mede a pressão pela altura da coluna de mercúrio"
    ],
    "correctIndex": 3,
    "explanation": "No manómetro de mercúrio a pressão lê-se pela altura da coluna de mercúrio, em milímetros. Um valor como 120 mmHg é uma pressão, equivalente a cerca de 16 kPa.",
    "distractorAnalysis": [
      "Está incorreta: a tensão arterial é uma pressão (força por unidade de área) e não uma força, e não se mede pela massa de mercúrio.",
      "Está incorreta: 1 mmHg corresponde a cerca de 133,3 Pa, e não a 1 Pa.",
      "Está incorreta: 1 atm equivale a 760 mmHg, por isso os valores numéricos são muito diferentes."
    ],
    "nursingApplication": "O esfigmomanómetro (aneroide ou automático) continua graduado em mmHg, a unidade herdada do manómetro de mercúrio."
  },
  {
    "id": 4004,
    "topicId": 4,
    "question": "Um utente está de pé e considera-se o sangue em equilíbrio hidrostático. Em que zona do corpo é maior a pressão hidrostática do sangue?",
    "options": [
      "No cérebro, porque é a zona mais afastada do chão",
      "Nas pernas, porque suportam a coluna de sangue acima",
      "É igual em todo o corpo, porque o sangue está em equilíbrio",
      "No coração, porque é aí que o sangue é bombeado"
    ],
    "correctIndex": 1,
    "explanation": "Em pé, a pressão hidrostática do sangue é maior nas pernas, que estão mais abaixo, do que no cérebro. A pressão num líquido em equilíbrio cresce com a profundidade.",
    "distractorAnalysis": [
      "Está incorreta: a pressão hidrostática aumenta com a profundidade (abaixo do coração) e o cérebro está acima do coração, onde é menor.",
      "Está incorreta: estar em equilíbrio não torna a pressão igual em todo o lado: ela depende do desnível em relação ao coração.",
      "Está incorreta: o coração serve de nível de referência; abaixo dele a pressão hidrostática aumenta e acima diminui."
    ],
    "nursingApplication": "Por isso, ao levantar um utente que esteve muito tempo deitado, o enfermeiro sabe que a pressão sanguínea nas pernas aumenta quando ele fica de pé."
  },
  {
    "id": 4005,
    "topicId": 4,
    "question": "Um enfermeiro observa a água de uma piscina terapêutica sem qualquer agitação. Que condição permite dizer que esta água está em equilíbrio hidrostático?",
    "options": [
      "Ter a mesma pressão em todos os pontos, do fundo à superfície",
      "Estar em repouso relativamente ao recipiente, com velocidade nula",
      "Ter a mesma temperatura em todos os pontos do volume de líquido",
      "Estar em movimento lento, mas com velocidade constante no recipiente"
    ],
    "correctIndex": 1,
    "explanation": "Um fluido está em equilíbrio hidrostático quando está em repouso relativamente ao recipiente, ou seja, quando a sua velocidade de escoamento é nula.",
    "distractorAnalysis": [
      "Está incorreta: num fluido em equilíbrio a pressão aumenta com a profundidade, por isso não é igual em todos os pontos.",
      "Está incorreta: a temperatura não define o equilíbrio hidrostático, que depende de o fluido estar em repouso.",
      "Está incorreta: um fluido em equilíbrio hidrostático tem velocidade de escoamento nula, e não apenas constante."
    ],
    "nursingApplication": "Numa piscina de hidroterapia sem agitação, a água em repouso permite aplicar as regras da hidrostática à pressão sentida pelo utente."
  },
  {
    "id": 4006,
    "topicId": 4,
    "question": "Num sistema de perfusão, o enfermeiro fecha totalmente a pinça de rolete e, passado algum tempo, o líquido no tubo deixou de se mover. A velocidade de escoamento do líquido no tubo é agora:",
    "options": [
      "igual à de antes, porque a gravidade continua a puxar o líquido",
      "metade da anterior, até o saco de soro ficar vazio",
      "nula só junto à pinça, mantendo-se o escoamento no resto do tubo",
      "nula, porque o líquido ficou em repouso relativamente ao tubo"
    ],
    "correctIndex": 3,
    "explanation": "Com a pinça fechada o líquido fica em repouso relativamente ao tubo, e a sua velocidade de escoamento é nula. Está então em equilíbrio hidrostático.",
    "distractorAnalysis": [
      "Está incorreta: a gravidade continua a atuar, mas com a pinça fechada o líquido não escoa e a velocidade é nula.",
      "Está incorreta: o escoamento cessa por completo; não diminui apenas para metade.",
      "Está incorreta: como o líquido não pode atravessar a pinça, deixa de se mover em todo o tubo e não apenas junto dela."
    ],
    "nursingApplication": "Ao fechar a pinça de rolete, o enfermeiro interrompe a perfusão, deixando o líquido do equipo em repouso."
  },
  {
    "id": 4007,
    "topicId": 4,
    "question": "Uma ampola de vidro está completamente cheia de soro em repouso. Num ponto qualquer da parede interior da ampola, a força que o soro exerce sobre o vidro:",
    "options": [
      "é perpendicular à parede nesse ponto",
      "é vertical e dirigida para baixo, como o peso do soro",
      "é paralela à parede, na direção do movimento do soro",
      "é nula, porque o soro está em repouso"
    ],
    "correctIndex": 0,
    "explanation": "Num fluido em equilíbrio hidrostático as forças exercidas nas paredes são perpendiculares a elas, em qualquer ponto.",
    "distractorAnalysis": [
      "Está incorreta: o peso é uma força da Terra; a força que o líquido exerce na parede é perpendicular a ela, mesmo nas paredes laterais.",
      "Está incorreta: o soro está em repouso e um fluido em repouso não exerce forças paralelas às paredes.",
      "Está incorreta: estar em repouso não anula a pressão: o fluido exerce força sobre as paredes."
    ],
    "nursingApplication": "Num saco de soro cheio, o líquido empurra as paredes perpendicularmente em todos os pontos, o que explica o seu aspeto esticado."
  },
  {
    "id": 4008,
    "topicId": 4,
    "question": "Num tanque de água parada, analisam-se duas pequenas áreas iguais da parede lateral, uma a 0,2 m e outra a 1,0 m de profundidade. Comparando as forças que a água exerce nessas áreas:",
    "options": [
      "ambas são perpendiculares à parede e têm a mesma intensidade",
      "a da área mais funda é maior e está inclinada para baixo",
      "ambas são perpendiculares à parede e a da área mais funda é maior",
      "a da área mais funda é menor, porque a água aí tem menos espaço disponível"
    ],
    "correctIndex": 2,
    "explanation": "A direção da força é sempre perpendicular à parede, mas a sua intensidade aumenta com a profundidade. O que cresce com a profundidade é a intensidade e não a direção.",
    "distractorAnalysis": [
      "Está incorreta: a direção é a mesma, mas a intensidade aumenta com a profundidade, por isso as intensidades não são iguais.",
      "Está incorreta: a direção é sempre perpendicular à parede; só a intensidade varia com a profundidade.",
      "Está incorreta: a pressão aumenta com a profundidade, por isso a força numa área igual mais funda é maior."
    ],
    "nursingApplication": "Este raciocínio ajuda a perceber porque, num recipiente alto cheio de líquido, a parede junto ao fundo suporta mais pressão do que a zona junto à superfície."
  },
  {
    "id": 4009,
    "topicId": 4,
    "question": "Num lago de água parada, o fundo junto à margem é um plano inclinado. Em cada ponto desse fundo, a força que a água exerce sobre ele é:",
    "options": [
      "vertical e dirigida para baixo, como o peso da água",
      "paralela ao plano inclinado, no sentido da descida",
      "horizontal, no sentido da margem",
      "perpendicular ao plano inclinado, e não vertical"
    ],
    "correctIndex": 3,
    "explanation": "Num fluido em equilíbrio hidrostático, como a água parada de um lago, a força exercida em cada ponto de uma superfície é perpendicular a essa superfície. Num plano inclinado não é, por isso, vertical.",
    "distractorAnalysis": [
      "Está incorreta: a força do líquido sobre uma superfície é perpendicular a ela, e o fundo está inclinado.",
      "Está incorreta: um fluido em repouso não exerce forças paralelas à superfície.",
      "Está incorreta: a direção não depende do sentido da margem; é sempre perpendicular à superfície em contacto."
    ],
    "nursingApplication": "Ao ver um líquido parado num recipiente de paredes inclinadas, como uma bacia ou um alguidar, o enfermeiro sabe que o líquido empurra cada parede perpendicularmente."
  },
  {
    "id": 4010,
    "topicId": 4,
    "question": "Um aluno afirma: «Como a água do depósito está parada, não faz força nenhuma nas paredes.» Qual é a correção correta?",
    "options": [
      "A água só exerce força sobre o fundo do depósito; nas paredes laterais a força é nula",
      "A água em repouso exerce força perpendicular às paredes, maior quanto mais funda",
      "A água exerce força nas paredes laterais, mas paralela a elas e dirigida para o fundo",
      "A água só exerce força nas paredes enquanto estiver a escoar para fora do depósito"
    ],
    "correctIndex": 1,
    "explanation": "Estar em repouso não anula a pressão: o fluido em equilíbrio exerce sobre as paredes forças perpendiculares, cuja intensidade aumenta com a profundidade.",
    "distractorAnalysis": [
      "Está incorreta: a água exerce força em todas as paredes em contacto, laterais incluídas.",
      "Está incorreta: em repouso as forças nas paredes são perpendiculares a elas e não paralelas.",
      "Está incorreta: o líquido em repouso também exerce força nas paredes; o escoamento não é necessário para haver pressão."
    ],
    "nursingApplication": "Um saco de soro pendurado e em repouso continua a exercer forças nas paredes, maiores na parte de baixo, onde o líquido é mais fundo."
  },
  {
    "id": 4011,
    "topicId": 4,
    "question": "Qual dos fluidos seguintes se encontra em equilíbrio hidrostático?",
    "options": [
      "O sangue contido num tubo de colheita fechado, pousado na bancada",
      "O sangue que circula na veia cava durante a colheita",
      "O soro que desce pelo equipo com a pinça de rolete aberta",
      "A água que sai de uma torneira aberta de um lavatório"
    ],
    "correctIndex": 0,
    "explanation": "Só está em equilíbrio hidrostático o fluido em repouso relativamente ao recipiente. O sangue no tubo fechado e pousado não escoa, ao contrário dos restantes casos.",
    "distractorAnalysis": [
      "Está incorreta: o sangue que circula está em movimento, logo a sua velocidade de escoamento não é nula.",
      "Está incorreta: o soro que escoa pelo equipo está em movimento, por isso não está em equilíbrio hidrostático.",
      "Está incorreta: a água que sai da torneira escoa, tem velocidade não nula e não está em repouso."
    ],
    "nursingApplication": "Depois de colher sangue para um tubo, o enfermeiro deixa-o pousado: o líquido fica em repouso no tubo, como num fluido em equilíbrio."
  },
  {
    "id": 4012,
    "topicId": 4,
    "question": "Um copo de água está pousado na mesa de um comboio que se desloca em linha reta com velocidade constante, sem agitar o líquido. Esta água está em equilíbrio hidrostático?",
    "options": [
      "Não, porque tem velocidade em relação ao solo e ao exterior do comboio",
      "Não, porque as forças nas paredes deixam de ser perpendiculares",
      "Sim, porque está em repouso relativamente ao copo, apesar de o comboio se mover",
      "Sim, mas apenas se o comboio parar numa estação e a água ficar quieta"
    ],
    "correctIndex": 2,
    "explanation": "Um fluido está em equilíbrio hidrostático quando está em repouso relativamente ao recipiente. O movimento uniforme do conjunto não impede esta condição.",
    "distractorAnalysis": [
      "Está incorreta: o equilíbrio hidrostático refere-se ao repouso em relação ao recipiente, e não em relação ao solo.",
      "Está incorreta: o movimento uniforme do copo não altera a direção das forças, que continuam perpendiculares às paredes.",
      "Está incorreta: o comboio parado não é necessário: basta a água estar em repouso relativamente ao copo."
    ],
    "nursingApplication": "Ao transportar uma ampola de líquido numa ambulância em marcha estável, o líquido pode manter-se em repouso relativamente à ampola."
  },
  {
    "id": 4013,
    "topicId": 4,
    "question": "Um enfermeiro explica a um colega o que é a pressão. Qual das descrições está correta?",
    "options": [
      "Força perpendicular exercida por unidade de superfície, P = F/S",
      "Força total exercida por um corpo, sem depender da área",
      "Quociente entre a área e a força aplicada, P = S/F",
      "Produto da força pela área de contacto, P = F·S"
    ],
    "correctIndex": 0,
    "explanation": "A pressão é a força perpendicular exercida por unidade de superfície: P = F/S. Para a mesma força, a pressão é maior quanto menor for a área.",
    "distractorAnalysis": [
      "Está incorreta: a pressão depende da área sobre a qual a força atua; a força isolada não define a pressão.",
      "Está incorreta: inverteu a fórmula: a pressão é a força dividida pela área e não a área dividida pela força.",
      "Está incorreta: multiplicou em vez de dividir: a pressão é F/S e diminui quando a área aumenta."
    ],
    "nursingApplication": "Ao avaliar o risco de lesão por pressão, o enfermeiro pensa na pressão como força por área de contacto e não apenas no peso do utente."
  },
  {
    "id": 4014,
    "topicId": 4,
    "question": "A ficha técnica de um equipamento indica uma pressão em pascal (Pa). Qual é a equivalência correta no Sistema Internacional?",
    "options": [
      "1 Pa = 1 N·m",
      "1 Pa = 1 N/m",
      "1 Pa = 1 N/m²",
      "1 Pa = 1 kg/m³"
    ],
    "correctIndex": 2,
    "explanation": "O pascal é a unidade SI de pressão e corresponde a uma força de 1 N distribuída por 1 m² de superfície: 1 Pa = 1 N/m².",
    "distractorAnalysis": [
      "Está incorreta: N·m é a unidade de trabalho (joule) e não de pressão.",
      "Está incorreta: falta elevar a área ao quadrado: a pressão é força por unidade de área, em N/m².",
      "Está incorreta: kg/m³ é a unidade de massa volúmica e não de pressão."
    ],
    "nursingApplication": "Ao ler numa ficha técnica a pressão de uma braçadeira em kPa, o enfermeiro sabe que 1 Pa corresponde a 1 N por cada m² de superfície."
  },
  {
    "id": 4015,
    "topicId": 4,
    "question": "Um aluno pergunta em que direção «aponta» a pressão, por a ter confundido com uma força. Qual é a resposta correta?",
    "options": [
      "A pressão é um vetor com a mesma direção da força que a origina",
      "A pressão é escalar, por isso não tem direção nem sentido",
      "A pressão é escalar, mas tem a direção perpendicular à superfície",
      "A pressão é um vetor vertical, orientado para baixo"
    ],
    "correctIndex": 1,
    "explanation": "A pressão é uma grandeza escalar: fica completamente definida por um valor e uma unidade. A força que a produz é que é um vetor, perpendicular à superfície.",
    "distractorAnalysis": [
      "Está incorreta: a pressão é escalar; só a força que a origina é um vetor.",
      "Está incorreta: a direção perpendicular é a da força sobre a superfície; a pressão, sendo escalar, não tem direção.",
      "Está incorreta: a pressão não é um vetor e não está associada a uma direção vertical."
    ],
    "nursingApplication": "Ao registar a tensão arterial, o enfermeiro anota apenas valores e unidade (por exemplo, 120/80 mmHg), sem direção, porque a pressão é escalar."
  },
  {
    "id": 4016,
    "topicId": 4,
    "question": "Dois enfermeiros aplicam a mesma força em duas agulhas, uma de ponta muito fina e outra de ponta mais larga. Qual penetra mais facilmente a pele e porquê?",
    "options": [
      "A de ponta larga, porque a força se distribui por uma área maior",
      "Ambas por igual, porque a força aplicada é a mesma nas duas agulhas",
      "A de ponta fina, porque a força que atua nela é maior",
      "A de ponta fina, porque a mesma força numa área menor dá maior pressão"
    ],
    "correctIndex": 3,
    "explanation": "A pressão é P = F/S. Com a mesma força, a agulha de ponta fina tem menor área de contacto e, por isso, exerce maior pressão sobre a pele.",
    "distractorAnalysis": [
      "Está incorreta: uma área maior reduz a pressão, tornando mais difícil perfurar a pele.",
      "Está incorreta: a força é igual, mas a pressão não, porque depende também da área de contacto.",
      "Está incorreta: a força aplicada é igual nas duas agulhas; o que muda é a área da ponta."
    ],
    "nursingApplication": "Uma agulha de ponta fina e bem afiada atravessa a pele com menos força do que uma de ponta romba, porque concentra a força numa área pequena."
  },
  {
    "id": 4017,
    "topicId": 4,
    "question": "Um bisturi bem afiado corta com menos esforço do que um bisturi sem fio. Qual é a explicação física?",
    "options": [
      "A lâmina afiada recebe uma força maior da mão do cirurgião",
      "A lâmina afiada tem maior área de contacto, logo maior pressão",
      "A lâmina afiada tem menor área de contacto e dá maior pressão",
      "A pressão não depende da área, só da força aplicada"
    ],
    "correctIndex": 2,
    "explanation": "Para a mesma força, uma área de contacto menor origina uma pressão maior, pois P = F/S. É por isso que a lâmina afiada corta mais facilmente.",
    "distractorAnalysis": [
      "Está incorreta: a força aplicada pode ser igual; o que muda é a área da lâmina em contacto com o tecido.",
      "Está incorreta: uma maior área de contacto daria menor pressão, e não maior.",
      "Está incorreta: a pressão é F/S, por isso depende tanto da força como da área."
    ],
    "nursingApplication": "Um bisturi ou uma lâmina de sutura afiados concentram a força numa área mínima, permitindo cortar com menos esforço."
  },
  {
    "id": 4018,
    "topicId": 4,
    "question": "Uma enfermeira de salto fino e outra de sapatos rasos, com o mesmo peso, estão paradas num pavimento de vinil. Em que caso é maior a pressão sobre o pavimento e porquê?",
    "options": [
      "No salto fino, porque o mesmo peso se distribui por uma área menor",
      "No sapato raso, porque a área de contacto é maior",
      "É igual, porque o peso das duas enfermeiras é o mesmo",
      "No salto fino, porque a força exercida sobre o chão é maior"
    ],
    "correctIndex": 0,
    "explanation": "A força sobre o pavimento é a mesma, igual ao peso. Com o salto fino a área de contacto é muito menor e, como P = F/S, a pressão é muito maior.",
    "distractorAnalysis": [
      "Está incorreta: uma área maior reduz a pressão, por isso a pressão do sapato raso é menor.",
      "Está incorreta: a força é igual, mas a pressão depende também da área, que é diferente nos dois casos.",
      "Está incorreta: a força perpendicular é igual ao peso, que é o mesmo; o que muda é a área."
    ],
    "nursingApplication": "Um enfermeiro que usa calçado raso distribui o peso por uma área maior e reduz a pressão sobre o pavimento e sobre os próprios pés."
  },
  {
    "id": 4019,
    "topicId": 4,
    "question": "Um utente pesa o mesmo deitado numa cama e de pé no chão. Em que posição é menor a pressão que exerce sobre a superfície de apoio?",
    "options": [
      "Deitado, porque o peso do corpo diminui nessa posição",
      "De pé, porque a área de contacto dos pés é menor",
      "É igual nas duas posições, porque o peso é o mesmo",
      "Deitado, porque o peso se reparte por mais área"
    ],
    "correctIndex": 3,
    "explanation": "O peso é o mesmo nas duas posições, mas deitado a área de contacto é muito maior. Como P = F/S, a pressão média sobre a superfície de apoio é menor.",
    "distractorAnalysis": [
      "Está incorreta: o peso não se altera com a posição; o que muda é a área de contacto.",
      "Está incorreta: uma área menor dá maior pressão, e não menor.",
      "Está incorreta: a força é a mesma, mas a pressão depende da área de contacto, que é maior deitado."
    ],
    "nursingApplication": "Num utente acamado, o peso reparte-se por uma área maior do que quando está de pé, o que reduz a pressão média sobre a superfície de apoio."
  },
  {
    "id": 4020,
    "topicId": 4,
    "question": "Numa seringa, o enfermeiro duplica a força que exerce no êmbolo, mantendo a mesma seringa. A pressão no líquido:",
    "options": [
      "reduz-se a metade, porque a força maior se distribui",
      "duplica, porque P é diretamente proporcional a F",
      "mantém-se, porque a área do êmbolo não mudou",
      "quadruplica, porque a pressão varia com o quadrado da força"
    ],
    "correctIndex": 1,
    "explanation": "Com S constante, P = F/S é diretamente proporcional a F. Duplicar a força duplica a pressão.",
    "distractorAnalysis": [
      "Está incorreta: a pressão é diretamente proporcional à força: mais força dá mais pressão.",
      "Está incorreta: mesmo com a área igual, a pressão varia com a força, pois P = F/S.",
      "Está incorreta: a relação é linear, e não quadrática: duplicar F duplica P."
    ],
    "nursingApplication": "Ao injetar por um cateter fino, o enfermeiro sabe que empurrar com o dobro da força duplica a pressão no líquido da seringa."
  },
  {
    "id": 4021,
    "topicId": 4,
    "question": "Duas seringas recebem a mesma força no êmbolo. O êmbolo da seringa B tem metade da área do êmbolo da seringa A. Em relação à seringa A, a pressão no líquido da B é:",
    "options": [
      "metade, porque a área do êmbolo também é metade da de A",
      "igual, porque a força aplicada é a mesma nas duas seringas",
      "o dobro, porque P é inversamente proporcional a S",
      "quatro vezes maior, porque a área é metade da de A"
    ],
    "correctIndex": 2,
    "explanation": "Com F constante, P = F/S é inversamente proporcional a S. Se a área passa a metade, a pressão passa ao dobro.",
    "distractorAnalysis": [
      "Está incorreta: a pressão é inversamente proporcional à área: metade da área dá o dobro da pressão.",
      "Está incorreta: a força é igual, mas a pressão depende também da área, que é diferente.",
      "Está incorreta: a relação é inversa e linear: dividir a área por 2 multiplica a pressão por 2, e não por 4."
    ],
    "nursingApplication": "Uma seringa de êmbolo mais estreito origina maior pressão no líquido com a mesma força, e o enfermeiro tem de dosear a força ao usar seringas de pequeno calibre."
  },
  {
    "id": 4022,
    "topicId": 4,
    "question": "Um enfermeiro passa para uma seringa com êmbolo de área dupla e aplica também o dobro da força. A pressão no líquido:",
    "options": [
      "mantém-se, porque o quociente F/S não se altera",
      "duplica, porque a força duplicou",
      "quadruplica, porque a força e a área duplicaram",
      "reduz-se a metade, porque a área duplicou"
    ],
    "correctIndex": 0,
    "explanation": "Como P = F/S, ao duplicar o numerador e o denominador o quociente mantém-se. A pressão no líquido não se altera.",
    "distractorAnalysis": [
      "Está incorreta: a área também duplicou, e o efeito dos dois fatores compensa-se.",
      "Está incorreta: a força e a área não se multiplicam: a pressão é o quociente F/S, que fica igual.",
      "Está incorreta: a força também duplicou, compensando o aumento da área."
    ],
    "nursingApplication": "Ao comparar duas seringas, o enfermeiro lembra que a pressão no líquido é determinada pela razão força/área, e não apenas pelo valor da força."
  },
  {
    "id": 4023,
    "topicId": 4,
    "question": "Um enfermeiro pressiona a pele com um dedo, empurrando e deslizando ao mesmo tempo. Para determinar a pressão exercida, que força deve usar?",
    "options": [
      "A componente paralela à pele (o deslizamento), dividida pela área de contacto",
      "A componente perpendicular à pele, dividida pela área de contacto",
      "A força total, em qualquer direção, dividida pela área de contacto",
      "A componente perpendicular à pele, sem dividir pela área de contacto"
    ],
    "correctIndex": 1,
    "explanation": "A pressão é a força perpendicular exercida por unidade de superfície. Só a componente perpendicular à superfície, dividida pela área de contacto, conta.",
    "distractorAnalysis": [
      "Está incorreta: a pressão usa a força perpendicular à superfície; a componente paralela não entra no cálculo.",
      "Está incorreta: a pressão considera só a força perpendicular à superfície e não a força total em qualquer direção.",
      "Está incorreta: dividir pela área é essencial: a pressão é a força perpendicular por unidade de superfície."
    ],
    "nursingApplication": "Ao pressionar uma compressa sobre uma ferida, só a componente da força perpendicular à pele contribui para a pressão exercida sobre o tecido."
  },
  {
    "id": 4024,
    "topicId": 4,
    "question": "Um enfermeiro quer manter a mesma pressão no líquido, mas passa de uma seringa de 2 mL para uma de 10 mL, cujo êmbolo tem área três vezes maior. Para isso, a força no êmbolo deve:",
    "options": [
      "manter-se igual, porque a pressão não depende da força",
      "reduzir-se a um terço, porque a área aumentou",
      "aumentar nove vezes, porque a área triplicou",
      "triplicar, porque P = F/S exige F proporcional a S"
    ],
    "correctIndex": 3,
    "explanation": "Para P constante, F = P·S: a força é proporcional à área. Com a área três vezes maior, a força tem de ser três vezes maior.",
    "distractorAnalysis": [
      "Está incorreta: a pressão é F/S, depende da força: com área maior é preciso mais força para igualar a pressão.",
      "Está incorreta: com mais área é preciso mais força, e não menos, para manter a pressão.",
      "Está incorreta: a relação entre a força e a área é linear: triplicar a área exige apenas triplicar a força."
    ],
    "nursingApplication": "Com uma seringa de maior calibre, o enfermeiro precisa de mais força no êmbolo do que com uma pequena para obter a mesma pressão no líquido."
  },
  {
    "id": 4025,
    "topicId": 4,
    "question": "Para injetar um fármaco, o enfermeiro exerce uma força de 8 N sobre o êmbolo de uma seringa, cuja secção tem área S = 2,0 cm² (1 cm² = 10⁻⁴ m²). Qual é a pressão exercida no líquido?",
    "options": [
      "4,0 Pa",
      "1,6 × 10⁻³ Pa",
      "400 Pa",
      "40 000 Pa"
    ],
    "correctIndex": 3,
    "explanation": "A pressão é a força perpendicular por unidade de área, P = F/S, com a área em m². Convertendo 2,0 cm² para 2,0 × 10⁻⁴ m², obtém-se 40 000 Pa.",
    "solution": [
      "Dados: F = 8 N; S = 2,0 cm².",
      "Conversão: S = 2,0 × 10⁻⁴ m².",
      "Fórmula: P = F / S.",
      "Substituição: P = 8 / (2,0 × 10⁻⁴).",
      "Resultado: 40 000 Pa"
    ],
    "distractorAnalysis": [
      "Está incorreta: não converteu a área para m²: dividiu 8 N por 2,0, sem usar S em m².",
      "Está incorreta: multiplicou a força pela área em vez de a dividir: a pressão é P = F/S.",
      "Está incorreta: converteu cm² para m² com 10⁻² em vez de 10⁻⁴."
    ],
    "nursingApplication": "Ao injetar um fármaco, a pressão no líquido depende da força no êmbolo e da área da seringa: o mesmo esforço origina pressões diferentes em seringas diferentes."
  },
  {
    "id": 4026,
    "topicId": 4,
    "question": "Um enfermeiro aplica uma força de 2,0 N sobre uma agulha cuja ponta tem uma área de 0,50 mm² (1 mm² = 10⁻⁶ m²). Qual é a pressão exercida pela ponta, em Pa?",
    "options": [
      "4,0 × 10⁶ Pa",
      "4,0 × 10³ Pa",
      "4,0 × 10⁴ Pa",
      "2,5 × 10⁻⁷ Pa"
    ],
    "correctIndex": 0,
    "explanation": "A área da ponta é 0,50 mm² = 5,0 × 10⁻⁷ m². Como P = F/S, uma força pequena numa área tão pequena dá uma pressão muito elevada.",
    "solution": [
      "Dados: F = 2,0 N; S = 0,50 mm².",
      "Conversão: S = 0,50 × 10⁻⁶ m² = 5,0 × 10⁻⁷ m².",
      "Fórmula: P = F / S.",
      "Substituição: P = 2,0 / (5,0 × 10⁻⁷).",
      "Resultado: 4,0 × 10⁶ Pa"
    ],
    "distractorAnalysis": [
      "Está incorreta: converteu mm² para m² com 10⁻³ em vez de 10⁻⁶.",
      "Está incorreta: usou o fator 10⁻⁴ (dos cm²) em vez de 10⁻⁶ (dos mm²).",
      "Está incorreta: inverteu a fórmula, calculando S/F em vez de F/S."
    ],
    "nursingApplication": "A ponta fina de uma agulha concentra a força numa área minúscula, o que explica a elevada pressão exercida sobre a pele."
  },
  {
    "id": 4027,
    "topicId": 4,
    "question": "Uma enfermeira empurra o êmbolo de uma seringa com uma força de 3,0 N. O êmbolo tem 0,50 cm² de área (1 cm² = 10⁻⁴ m²; 1 mmHg ≈ 133,3 Pa). Qual é a pressão no líquido, em mmHg?",
    "options": [
      "45,0 mmHg",
      "450 mmHg",
      "8,00 × 10⁶ mmHg",
      "60 000 mmHg"
    ],
    "correctIndex": 1,
    "explanation": "Em Pa, P = F/S = 3,0 / (5,0 × 10⁻⁵) = 60 000 Pa. Como 1 mmHg ≈ 133,3 Pa, divide-se por 133,3 para obter cerca de 450 mmHg.",
    "solution": [
      "Dados: F = 3,0 N; S = 0,50 cm²; 1 mmHg ≈ 133,3 Pa.",
      "Conversão: S = 0,50 × 10⁻⁴ m² = 5,0 × 10⁻⁵ m².",
      "Fórmula: P = F / S; P (mmHg) = P (Pa) / 133,3.",
      "Substituição: P = 3,0 / (5,0 × 10⁻⁵) = 60 000 Pa; 60 000 / 133,3.",
      "Resultado: 450 mmHg"
    ],
    "distractorAnalysis": [
      "Está incorreta: converteu cm² para m² com 10⁻³ em vez de 10⁻⁴.",
      "Está incorreta: multiplicou por 133,3 em vez de dividir ao passar de Pa para mmHg.",
      "Está incorreta: deixou o valor em Pa e escreveu-o como se fosse mmHg."
    ],
    "nursingApplication": "Ao injetar um fármaco, o enfermeiro pode expressar a pressão no líquido da seringa em mmHg, a mesma unidade da tensão arterial."
  },
  {
    "id": 4028,
    "topicId": 4,
    "question": "Para manter uma pressão de 2,0 × 10⁵ Pa no líquido de uma seringa, cujo êmbolo tem 1,5 cm² de área (1 cm² = 10⁻⁴ m²), que força deve o enfermeiro exercer no êmbolo?",
    "options": [
      "3000 N",
      "3,0 × 10⁵ N",
      "30 N",
      "1,33 × 10⁹ N"
    ],
    "correctIndex": 2,
    "explanation": "De P = F/S obtém-se F = P·S. Com S = 1,5 × 10⁻⁴ m², F = 2,0 × 10⁵ × 1,5 × 10⁻⁴ = 30 N.",
    "solution": [
      "Dados: P = 2,0 × 10⁵ Pa; S = 1,5 cm².",
      "Conversão: S = 1,5 × 10⁻⁴ m².",
      "Fórmula: F = P · S.",
      "Substituição: F = 2,0 × 10⁵ × 1,5 × 10⁻⁴.",
      "Resultado: 30 N"
    ],
    "distractorAnalysis": [
      "Está incorreta: converteu cm² para m² com 10⁻² em vez de 10⁻⁴.",
      "Está incorreta: não converteu a área para m²: multiplicou 2,0 × 10⁵ por 1,5.",
      "Está incorreta: dividiu a pressão pela área em vez de a multiplicar: F = P·S."
    ],
    "nursingApplication": "Ao injetar por um cateter de pequeno calibre, a força no êmbolo da seringa depende da pressão pretendida e da área do êmbolo."
  },
  {
    "id": 4029,
    "topicId": 4,
    "question": "Uma força perpendicular de 12 N origina uma pressão de 4,0 × 10⁴ Pa numa superfície. Qual é a área dessa superfície, em cm² (1 m² = 10⁴ cm²)?",
    "options": [
      "0,030 cm²",
      "3,0 cm²",
      "3,0 × 10⁻⁴ cm²",
      "3,33 × 10⁷ cm²"
    ],
    "correctIndex": 1,
    "explanation": "De P = F/S obtém-se S = F/P = 12 / (4,0 × 10⁴) = 3,0 × 10⁻⁴ m². Multiplicando por 10⁴, a área é 3,0 cm².",
    "solution": [
      "Dados: F = 12 N; P = 4,0 × 10⁴ Pa.",
      "Fórmula: S = F / P.",
      "Substituição: S = 12 / (4,0 × 10⁴) = 3,0 × 10⁻⁴ m².",
      "Conversão: S = 3,0 × 10⁻⁴ × 10⁴ cm² = 3,0 cm².",
      "Resultado: 3,0 cm²"
    ],
    "distractorAnalysis": [
      "Está incorreta: passou de m² para cm² multiplicando por 10² em vez de 10⁴.",
      "Está incorreta: deixou o resultado em m² e escreveu-o como se fosse cm².",
      "Está incorreta: inverteu a fórmula, calculando P/F em vez de F/P."
    ],
    "nursingApplication": "Ao escolher entre seringas de calibres diferentes, o enfermeiro sabe que a área do êmbolo determina a pressão que uma dada força consegue produzir no líquido."
  },
  {
    "id": 4030,
    "topicId": 4,
    "question": "A pressão arterial diastólica de um utente é 90 mmHg. Sabendo que 1 mmHg ≈ 133,3 Pa, qual é este valor em kPa?",
    "options": [
      "0,675 kPa",
      "1,20 kPa",
      "12 000 kPa",
      "12,0 kPa"
    ],
    "correctIndex": 3,
    "explanation": "Em Pa, 90 mmHg ≈ 90 × 133,3 = 11 997 Pa. Dividindo por 1000, obtém-se cerca de 12,0 kPa.",
    "solution": [
      "Dados: P = 90 mmHg; 1 mmHg ≈ 133,3 Pa.",
      "Conversão: P (Pa) = 90 × 133,3 = 11 997 Pa.",
      "Fórmula: P (kPa) = P (Pa) / 1000.",
      "Substituição: P = 11 997 / 1000.",
      "Resultado: 12,0 kPa"
    ],
    "distractorAnalysis": [
      "Está incorreta: dividiu por 133,3 em vez de multiplicar ao passar de mmHg para Pa.",
      "Está incorreta: dividiu por 10 000 em vez de 1000 ao passar de Pa para kPa.",
      "Está incorreta: esqueceu-se de passar de Pa para kPa e escreveu 12 000 Pa como kPa."
    ],
    "nursingApplication": "Ao comparar equipamentos que indicam a pressão em kPa com a tensão arterial em mmHg, o enfermeiro converte os valores para a mesma unidade."
  },
  {
    "id": 4031,
    "topicId": 4,
    "question": "Um manómetro indica uma pressão de 26 660 Pa. Sabendo que 1 mmHg ≈ 133,3 Pa, qual é essa pressão em mmHg?",
    "options": [
      "20,0 mmHg",
      "26,7 mmHg",
      "200 mmHg",
      "3,55 × 10⁶ mmHg"
    ],
    "correctIndex": 2,
    "explanation": "Como 1 mmHg ≈ 133,3 Pa, o número de mmHg obtém-se dividindo a pressão em Pa por 133,3: 26 660 / 133,3 = 200 mmHg.",
    "solution": [
      "Dados: P = 26 660 Pa; 1 mmHg ≈ 133,3 Pa.",
      "Fórmula: P (mmHg) = P (Pa) / 133,3.",
      "Substituição: P = 26 660 / 133,3.",
      "Resultado: 200 mmHg"
    ],
    "distractorAnalysis": [
      "Está incorreta: dividiu por 1333 em vez de 133,3.",
      "Está incorreta: dividiu por 1000, como se passasse de Pa para kPa, e escreveu o valor em mmHg.",
      "Está incorreta: multiplicou por 133,3 em vez de dividir."
    ],
    "nursingApplication": "O enfermeiro converte a pressão lida em Pa para mmHg para a comparar com os valores de tensão arterial, expressos em mmHg."
  },
  {
    "id": 4032,
    "topicId": 4,
    "question": "Uma enfermeira de 60 kg apoia-se num só pé, sobre um salto fino cuja área de contacto é 1,0 cm² (g = 9,8 m/s²; 1 cm² = 10⁻⁴ m²). Qual é a pressão exercida sobre o chão?",
    "options": [
      "5,88 × 10⁶ Pa",
      "6,00 × 10⁵ Pa",
      "588 Pa",
      "5,88 × 10⁴ Pa"
    ],
    "correctIndex": 0,
    "explanation": "A força perpendicular sobre o chão é o peso, F = m·g = 588 N. Dividindo por S = 1,0 × 10⁻⁴ m², P = F/S = 5,88 × 10⁶ Pa.",
    "solution": [
      "Dados: m = 60 kg; g = 9,8 m/s²; S = 1,0 cm².",
      "Conversão: S = 1,0 × 10⁻⁴ m².",
      "Fórmula: F = m · g; P = F / S.",
      "Substituição: F = 60 × 9,8 = 588 N; P = 588 / (1,0 × 10⁻⁴).",
      "Resultado: 5,88 × 10⁶ Pa"
    ],
    "distractorAnalysis": [
      "Está incorreta: usou a massa (60) como se fosse a força, esquecendo-se de multiplicar por g.",
      "Está incorreta: não converteu a área de cm² para m².",
      "Está incorreta: converteu cm² para m² com 10⁻² em vez de 10⁻⁴."
    ],
    "nursingApplication": "Este cálculo mostra porque um apoio pequeno concentra o peso e dá pressões muito elevadas, ao contrário de um calçado raso."
  },
  {
    "id": 4033,
    "topicId": 4,
    "question": "Uma utente de 70 kg está deitada num colchão, com uma área de contacto média de 0,60 m² (g = 9,8 m/s²; 1 mmHg ≈ 133,3 Pa). Qual é a pressão média sobre o colchão, em mmHg?",
    "options": [
      "0,875 mmHg",
      "1143 mmHg",
      "8,58 mmHg",
      "1,52 × 10⁵ mmHg"
    ],
    "correctIndex": 2,
    "explanation": "A força sobre o colchão é o peso, F = 70 × 9,8 = 686 N. Então P = 686 / 0,60 ≈ 1143 Pa, que dividido por 133,3 dá cerca de 8,58 mmHg.",
    "solution": [
      "Dados: m = 70 kg; S = 0,60 m²; g = 9,8 m/s²; 1 mmHg ≈ 133,3 Pa.",
      "Fórmula: F = m · g; P = F / S; P (mmHg) = P (Pa) / 133,3.",
      "Substituição: F = 70 × 9,8 = 686 N; P = 686 / 0,60 ≈ 1143 Pa; 1143 / 133,3.",
      "Resultado: 8,58 mmHg"
    ],
    "distractorAnalysis": [
      "Está incorreta: usou a massa (70) como se fosse a força, esquecendo-se de multiplicar por g.",
      "Está incorreta: deixou o valor em Pa e escreveu-o como se fosse mmHg.",
      "Está incorreta: multiplicou por 133,3 em vez de dividir ao passar de Pa para mmHg."
    ],
    "nursingApplication": "Embora a pressão média seja baixa, a pressão de interface sobre o sacro e os calcâneos é muito maior, porque a área de contacto aí é pequena."
  },
  {
    "id": 4034,
    "topicId": 4,
    "question": "Admita, a título ilustrativo, que uma agulha penetra na pele quando a pressão da ponta atinge 2,0 × 10⁶ Pa. Se a ponta tiver 0,10 mm² de área (1 mm² = 10⁻⁶ m²), qual é a força mínima necessária?",
    "options": [
      "20 N",
      "0,20 N",
      "2,0 × 10⁵ N",
      "2,0 × 10¹³ N"
    ],
    "correctIndex": 1,
    "explanation": "De P = F/S obtém-se F = P·S. Com S = 0,10 mm² = 1,0 × 10⁻⁷ m², F = 2,0 × 10⁶ × 1,0 × 10⁻⁷ = 0,20 N.",
    "solution": [
      "Dados: P = 2,0 × 10⁶ Pa; S = 0,10 mm².",
      "Conversão: S = 0,10 × 10⁻⁶ m² = 1,0 × 10⁻⁷ m².",
      "Fórmula: F = P · S.",
      "Substituição: F = 2,0 × 10⁶ × 1,0 × 10⁻⁷.",
      "Resultado: 0,20 N"
    ],
    "distractorAnalysis": [
      "Está incorreta: usou o fator 10⁻⁴ (dos cm²) em vez de 10⁻⁶ (dos mm²).",
      "Está incorreta: não converteu a área para m²: multiplicou 2,0 × 10⁶ por 0,10.",
      "Está incorreta: dividiu a pressão pela área em vez de a multiplicar: F = P·S."
    ],
    "nursingApplication": "O cálculo mostra porque uma ponta muito fina permite perfurar a pele com uma força pequena, apesar da pressão elevada que exerce."
  },
  {
    "id": 4035,
    "topicId": 4,
    "question": "Para injetar um fármaco é preciso que a pressão no líquido da seringa atinja 300 mmHg. O êmbolo tem 2,0 cm² de área (1 cm² = 10⁻⁴ m²; 1 mmHg ≈ 133,3 Pa). Que força é necessária no êmbolo?",
    "options": [
      "8,0 N",
      "0,060 N",
      "800 N",
      "2,0 × 10⁸ N"
    ],
    "correctIndex": 0,
    "explanation": "Em Pa, P = 300 × 133,3 = 39 990 Pa. Como F = P·S, com S = 2,0 × 10⁻⁴ m², obtém-se F ≈ 8,0 N.",
    "solution": [
      "Dados: P = 300 mmHg; S = 2,0 cm²; 1 mmHg ≈ 133,3 Pa.",
      "Conversão: P = 300 × 133,3 = 39 990 Pa; S = 2,0 × 10⁻⁴ m².",
      "Fórmula: F = P · S.",
      "Substituição: F = 39 990 × 2,0 × 10⁻⁴.",
      "Resultado: 8,0 N"
    ],
    "distractorAnalysis": [
      "Está incorreta: esqueceu-se de converter mmHg para Pa: multiplicou 300 pela área em m².",
      "Está incorreta: converteu cm² para m² com 10⁻² em vez de 10⁻⁴.",
      "Está incorreta: dividiu a pressão pela área em vez de a multiplicar: F = P·S."
    ],
    "nursingApplication": "Ao injetar contra resistência, a força no êmbolo é proporcional à pressão que se quer criar no líquido e à área do êmbolo."
  },
  {
    "id": 4036,
    "topicId": 4,
    "question": "Um utente exerce uma força de 800 N sobre a cadeira de rodas. Sem almofada, a área de contacto é 0,040 m²; com uma almofada que alarga o contacto, passa a 0,10 m². Com a almofada, qual é a pressão média, em mmHg (1 mmHg ≈ 133,3 Pa)?",
    "options": [
      "150 mmHg",
      "8000 mmHg",
      "0,600 mmHg",
      "60,0 mmHg"
    ],
    "correctIndex": 3,
    "explanation": "Com a almofada, P = F/S = 800 / 0,10 = 8000 Pa. Dividindo por 133,3, a pressão média é cerca de 60,0 mmHg.",
    "solution": [
      "Dados: F = 800 N; S = 0,10 m²; 1 mmHg ≈ 133,3 Pa.",
      "Fórmula: P = F / S; P (mmHg) = P (Pa) / 133,3.",
      "Substituição: P = 800 / 0,10 = 8000 Pa; 8000 / 133,3.",
      "Resultado: 60,0 mmHg"
    ],
    "distractorAnalysis": [
      "Está incorreta: usou a área sem almofada (0,040 m²) em vez da área com almofada.",
      "Está incorreta: deixou o valor em Pa e escreveu-o como se fosse mmHg.",
      "Está incorreta: multiplicou a força pela área em vez de a dividir."
    ],
    "nursingApplication": "Uma almofada que aumenta a área de contacto na cadeira de rodas reduz a pressão média sobre a pele para o mesmo peso do utente."
  },
  {
    "id": 4037,
    "topicId": 4,
    "question": "Uma braçadeira de esfigmomanómetro está insuflada a 140 mmHg e aplica essa pressão numa área de 80 cm² (1 cm² = 10⁻⁴ m²; 1 mmHg ≈ 133,3 Pa). Qual é a força total, perpendicular ao braço, que a braçadeira exerce?",
    "options": [
      "1,12 N",
      "149 N",
      "1,49 × 10⁶ N",
      "2,33 × 10⁶ N"
    ],
    "correctIndex": 1,
    "explanation": "Em Pa, P = 140 × 133,3 = 18 662 Pa e S = 80 × 10⁻⁴ = 8,0 × 10⁻³ m². Como F = P·S, F ≈ 149 N.",
    "solution": [
      "Dados: P = 140 mmHg; S = 80 cm²; 1 mmHg ≈ 133,3 Pa.",
      "Conversão: P = 140 × 133,3 = 18 662 Pa; S = 80 × 10⁻⁴ m² = 8,0 × 10⁻³ m².",
      "Fórmula: F = P · S.",
      "Substituição: F = 18 662 × 8,0 × 10⁻³.",
      "Resultado: 149 N"
    ],
    "distractorAnalysis": [
      "Está incorreta: esqueceu-se de converter mmHg para Pa: multiplicou 140 pela área em m².",
      "Está incorreta: não converteu a área de cm² para m².",
      "Está incorreta: dividiu a pressão pela área em vez de a multiplicar: F = P·S."
    ],
    "nursingApplication": "Ao insuflar a braçadeira, a pressão em mmHg e a área da braçadeira determinam a força total que ela exerce sobre o braço do utente."
  },
  {
    "id": 4038,
    "topicId": 4,
    "question": "Para calcular a pressão exercida por um penso adesivo, é preciso converter a sua área de 15 cm² para m². Sabendo que 1 cm = 10⁻² m, qual é a área em m²?",
    "options": [
      "1,5 × 10⁻² m²",
      "1,5 × 10⁻¹ m²",
      "1,5 × 10⁻³ m²",
      "1,50 × 10⁵ m²"
    ],
    "correctIndex": 2,
    "explanation": "Como 1 cm = 10⁻² m, 1 cm² = (10⁻² m)² = 10⁻⁴ m². Logo 15 cm² = 15 × 10⁻⁴ m² = 1,5 × 10⁻³ m².",
    "solution": [
      "Dados: S = 15 cm²; 1 cm = 10⁻² m.",
      "Conversão: 1 cm² = (10⁻²)² m² = 10⁻⁴ m².",
      "Fórmula: S (m²) = S (cm²) × 10⁻⁴.",
      "Substituição: S = 15 × 10⁻⁴.",
      "Resultado: 1,5 × 10⁻³ m²"
    ],
    "distractorAnalysis": [
      "Está incorreta: usou 10⁻³ como fator de conversão em vez de 10⁻⁴.",
      "Está incorreta: usou 10⁻² sem o elevar ao quadrado, esquecendo que se trata de uma área.",
      "Está incorreta: multiplicou por 10⁴ em vez de dividir."
    ],
    "nursingApplication": "Antes de calcular a pressão exercida por um penso, o enfermeiro converte a área de cm² para m²."
  },
  {
    "id": 4039,
    "topicId": 4,
    "question": "Duas seringas são comparadas. Na seringa A, o enfermeiro exerce 10 N sobre um êmbolo de 2,0 cm²; na seringa B, exerce 3,0 N sobre um êmbolo de 0,50 cm². Em qual é maior a pressão no líquido?",
    "options": [
      "Na seringa A, porque aplica a maior força (10 N contra 3,0 N)",
      "Na seringa A, porque o êmbolo tem maior área (2,0 cm² contra 0,50 cm²)",
      "Na seringa B, porque aplica a menor força (3,0 N contra 10 N)",
      "Na seringa B, com 6,0 × 10⁴ Pa, contra 5,0 × 10⁴ Pa na A"
    ],
    "correctIndex": 3,
    "explanation": "Em A, P = 10 / (2,0 × 10⁻⁴) = 5,0 × 10⁴ Pa. Em B, P = 3,0 / (0,50 × 10⁻⁴) = 6,0 × 10⁴ Pa, por isso a pressão é maior em B.",
    "solution": [
      "Dados: A: F = 10 N, S = 2,0 cm²; B: F = 3,0 N, S = 0,50 cm².",
      "Conversão: S<sub>A</sub> = 2,0 × 10⁻⁴ m²; S<sub>B</sub> = 0,50 × 10⁻⁴ m² = 5,0 × 10⁻⁵ m².",
      "Fórmula: P = F / S.",
      "Substituição: P<sub>A</sub> = 10 / (2,0 × 10⁻⁴) = 5,0 × 10⁴ Pa; P<sub>B</sub> = 3,0 / (5,0 × 10⁻⁵) = 6,0 × 10⁴ Pa.",
      "Resultado: Na seringa B, com 6,0 × 10⁴ Pa, contra 5,0 × 10⁴ Pa na A"
    ],
    "distractorAnalysis": [
      "Está incorreta: a pressão depende da razão F/S e não só da força; a seringa A tem também uma área maior.",
      "Está incorreta: uma área maior reduz a pressão; o que conta é o quociente F/S.",
      "Está incorreta: uma força menor, por si só, não dá maior pressão; é preciso calcular F/S nas duas seringas."
    ],
    "nursingApplication": "Ao comparar duas seringas, o enfermeiro avalia a razão força/área e não apenas a força aplicada."
  },
  {
    "id": 4040,
    "topicId": 4,
    "question": "Um enfermeiro de 80 kg está de pé, com os dois pés apoiados no chão. A área total de contacto é 400 cm² (g = 9,8 m/s²; 1 cm² = 10⁻⁴ m²). Qual é a pressão exercida sobre o chão?",
    "options": [
      "1,96 × 10⁴ Pa",
      "3,92 × 10⁴ Pa",
      "2,00 × 10³ Pa",
      "196 Pa"
    ],
    "correctIndex": 0,
    "explanation": "A força perpendicular sobre o chão é o peso, F = 80 × 9,8 = 784 N. Com S = 400 × 10⁻⁴ = 0,040 m², P = F/S = 1,96 × 10⁴ Pa.",
    "solution": [
      "Dados: m = 80 kg; g = 9,8 m/s²; S = 400 cm².",
      "Conversão: S = 400 × 10⁻⁴ m² = 0,040 m².",
      "Fórmula: F = m · g; P = F / S.",
      "Substituição: F = 80 × 9,8 = 784 N; P = 784 / 0,040.",
      "Resultado: 1,96 × 10⁴ Pa"
    ],
    "distractorAnalysis": [
      "Está incorreta: usou a área de um só pé (200 cm²) em vez da área total de contacto.",
      "Está incorreta: usou a massa (80) como se fosse a força, esquecendo-se de multiplicar por g.",
      "Está incorreta: converteu cm² para m² com 10⁻² em vez de 10⁻⁴."
    ],
    "nursingApplication": "Mesmo de pé, o peso do profissional distribui-se pela área dos dois pés, o que determina a pressão exercida sobre o pavimento."
  },
  {
    "id": 4041,
    "topicId": 4,
    "question": "Numa réplica da experiência de Torricelli, depois de o mercúrio descer no tubo invertido e estabilizar, o que existe no espaço acima da coluna?",
    "options": [
      "Vácuo, onde não há ar a exercer pressão sobre a coluna.",
      "Ar à pressão atmosférica, que ajuda a sustentar a coluna.",
      "Ar comprimido pelo mercúrio, a uma pressão superior à atmosférica.",
      "Mercúrio em estado gasoso, à pressão atmosférica."
    ],
    "correctIndex": 0,
    "explanation": "Quando o mercúrio desce, deixa no topo do tubo fechado um espaço sem ar, o vácuo. Como aí não há gás, não há pressão a empurrar a coluna para baixo.",
    "distractorAnalysis": [
      "Está incorreta: se houvesse ar à pressão atmosférica no topo, este empurraria a coluna para baixo com a mesma pressão que o ar da tina e o mercúrio não ficaria suspenso.",
      "Está incorreta: o tubo foi enchido só com mercúrio e fechado numa ponta, por isso não há ar lá dentro para ser comprimido.",
      "Está incorreta: o espaço acima da coluna fica praticamente vazio; não é ocupado por um gás à pressão atmosférica."
    ],
    "nursingApplication": "A unidade mmHg, usada nos valores de pressão arterial, vem deste tipo de barómetro de mercúrio."
  },
  {
    "id": 4042,
    "topicId": 4,
    "question": "Numa experiência de Torricelli, o dedo que tapava o tubo é retirado dentro da tina e o mercúrio desce, mas não esvazia o tubo. Porque é que a coluna fica suspensa?",
    "options": [
      "O vácuo no topo do tubo puxa o mercúrio para cima.",
      "A pressão atmosférica sobre o mercúrio da tina sustenta a coluna.",
      "O mercúrio adere ao vidro do tubo e fica preso à parede.",
      "O peso do mercúrio da tina empurra a coluna para cima."
    ],
    "correctIndex": 1,
    "explanation": "A pressão atmosférica atua na superfície livre do mercúrio da tina e é transmitida ao interior do tubo. Equilibra o peso da coluna, que fica a cerca de 760 mm ao nível do mar.",
    "distractorAnalysis": [
      "Está incorreta: o vácuo não exerce pressão nem «aspira»; apenas não empurra a coluna para baixo.",
      "Está incorreta: se fosse a aderência ao vidro a segurar o mercúrio, a altura dependeria do tubo, o que não acontece.",
      "Está incorreta: o que atua sobre a superfície do mercúrio da tina é a pressão atmosférica; sem ela, a coluna desceria até à tina."
    ],
    "nursingApplication": "Ao explicar a um utente porque se mede a tensão arterial em mmHg, o enfermeiro pode referir que a unidade nasceu das colunas de mercúrio equilibradas pela pressão."
  },
  {
    "id": 4043,
    "topicId": 4,
    "question": "Repete-se a experiência de Torricelli, ao nível do mar, com um tubo de diâmetro interno duas vezes maior. Que altura vertical atinge agora a coluna de mercúrio?",
    "options": [
      "380 mm, porque o mercúrio se distribui por uma secção maior.",
      "1520 mm, porque o tubo mais largo suporta mais mercúrio.",
      "760 mm, igual à obtida com o tubo mais estreito.",
      "3040 mm, porque a secção do tubo é quatro vezes maior."
    ],
    "correctIndex": 2,
    "explanation": "A altura vertical da coluna depende da pressão atmosférica e da massa volúmica do mercúrio, não da largura do tubo. Num tubo mais largo o peso do mercúrio aumenta, mas a área que a pressão atmosférica sustenta aumenta na mesma proporção.",
    "distractorAnalysis": [
      "Está incorreta: a altura vertical da coluna não depende da largura do tubo; só depende da pressão atmosférica e da massa volúmica do mercúrio.",
      "Está incorreta: um tubo mais largo contém mais mercúrio, mas a altura continua a ser definida pela pressão atmosférica.",
      "Está incorreta: a área da secção aumenta quatro vezes, mas a altura vertical não é afetada por ela."
    ],
    "nursingApplication": "Perceber que a pressão não depende da secção ajuda a interpretar leituras em mmHg independentemente do calibre do instrumento."
  },
  {
    "id": 4044,
    "topicId": 4,
    "question": "Num barómetro de Torricelli montado ao nível do mar, inclina-se o tubo em relação à vertical, sem retirar a ponta da tina nem deixar entrar ar. O que acontece?",
    "options": [
      "O comprimento e a altura vertical mantêm-se ambos em 760 mm.",
      "A altura vertical diminui, porque o mercúrio escorrega pelo tubo.",
      "A altura vertical aumenta, acompanhando o comprimento do tubo.",
      "O comprimento de mercúrio no tubo aumenta e a altura vertical mantém-se em 760 mm."
    ],
    "correctIndex": 3,
    "explanation": "A altura vertical da coluna não depende da inclinação do tubo: mantém-se em 760 mm. Ao inclinar, o mercúrio ocupa mais comprimento ao longo do tubo para atingir essa mesma altura vertical.",
    "distractorAnalysis": [
      "Está incorreta: com o tubo inclinado, a coluna estende-se ao longo do tubo e o comprimento medido ao longo dele passa a ser maior do que 760 mm.",
      "Está incorreta: a altura vertical é definida pela pressão atmosférica e não varia com a inclinação do tubo.",
      "Está incorreta: o que aumenta é o comprimento ao longo do tubo; a altura vertical continua a ser 760 mm."
    ],
    "nursingApplication": "Ao ler um manómetro de coluna, a leitura faz-se na vertical, e não ao longo de um tubo eventualmente inclinado."
  },
  {
    "id": 4045,
    "topicId": 4,
    "question": "Num dia de depressão atmosférica, a pressão do ar é inferior à média ao nível do mar. O que se observa num barómetro de mercúrio?",
    "options": [
      "A coluna sobe para mais de 760 mm, porque há menos ar a comprimi-la.",
      "A coluna desce para uma altura inferior a 760 mm.",
      "A coluna mantém os 760 mm, porque só depende do mercúrio.",
      "A coluna mantém os 760 mm e o vácuo no topo aumenta."
    ],
    "correctIndex": 1,
    "explanation": "A pressão atmosférica sustenta a coluna de mercúrio. Se a pressão do ar diminui, só consegue equilibrar uma coluna mais curta, pelo que a altura desce abaixo de 760 mm.",
    "distractorAnalysis": [
      "Está incorreta: com menor pressão atmosférica há menos pressão a sustentar o mercúrio, por isso a coluna desce e não sobe.",
      "Está incorreta: a altura da coluna depende da pressão atmosférica que a sustenta; se esta baixa, a coluna baixa.",
      "Está incorreta: o vácuo não se altera por si só; é a altura da coluna que varia com a pressão atmosférica."
    ],
    "nursingApplication": "A pressão atmosférica varia com o estado do tempo e com a altitude; 760 mmHg é apenas o valor médio ao nível do mar, usado como referência."
  },
  {
    "id": 4046,
    "topicId": 4,
    "question": "Como pode o ar, que parece não pesar nada, sustentar uma coluna de 760 mm de mercúrio num barómetro de Torricelli?",
    "options": [
      "O ar é mais denso do que o mercúrio e empurra-o para cima.",
      "O vácuo do tubo comprime o ar que rodeia a tina.",
      "O ar tem peso e a camada de atmosfera acima da tina exerce pressão.",
      "A pressão do ar resulta só do seu movimento, e não do seu peso."
    ],
    "correctIndex": 2,
    "explanation": "O ar também tem peso. A atmosfera sobre a superfície do mercúrio da tina exerce uma pressão que equilibra a coluna de 760 mm.",
    "distractorAnalysis": [
      "Está incorreta: o mercúrio é muito mais denso do que o ar; é a pressão que o peso do ar exerce que sustenta a coluna.",
      "Está incorreta: o vácuo não comprime nada; a pressão sobre a tina deve-se ao peso do ar.",
      "Está incorreta: o ar tem peso, e a pressão atmosférica resulta do peso da atmosfera sobre a superfície."
    ],
    "nursingApplication": "Ao medir a tensão arterial, o zero do esfigmomanómetro corresponde à pressão atmosférica ambiente, que é sempre exercida pelo ar sobre o utente."
  },
  {
    "id": 4047,
    "topicId": 4,
    "question": "Num dia de chuva, um barómetro de mercúrio (ρ = 13 600 kg/m³) marca uma coluna de 0,740 m. Com g = 9,8 m/s², qual é a pressão atmosférica?",
    "options": [
      "101 kPa",
      "10,1 kPa",
      "98 600 kPa",
      "98,6 kPa"
    ],
    "correctIndex": 3,
    "explanation": "A pressão atmosférica é a pressão exercida pela coluna de mercúrio que a equilibra: P<sub>atm</sub> = ρ<sub>Hg</sub>·g·h. Com h = 0,740 m, a pressão é ligeiramente inferior a 101 kPa.",
    "solution": [
      "Dados: ρ<sub>Hg</sub> = 13 600 kg/m³; g = 9,8 m/s²; h = 0,740 m.",
      "Fórmula: P<sub>atm</sub> = ρ<sub>Hg</sub>·g·h.",
      "Substituição: P<sub>atm</sub> = 13 600 × 9,8 × 0,740 = 98 627 Pa.",
      "Resultado: 98,6 kPa"
    ],
    "distractorAnalysis": [
      "Está incorreta: usou a altura-padrão de 0,76 m em vez dos 0,740 m medidos.",
      "Está incorreta: esqueceu o fator g: ρ·h = 13 600 × 0,740 = 10 064 Pa.",
      "Está incorreta: usou a altura em mm (740) em vez de em m, o que dá uma pressão 1000 vezes maior (98 627 kPa)."
    ],
    "nursingApplication": "Um esfigmomanómetro mede a pressão relativamente à pressão atmosférica ambiente, que é o seu zero de referência."
  },
  {
    "id": 4048,
    "topicId": 4,
    "question": "Se Torricelli tivesse usado água (ρ = 1000 kg/m³) em vez de mercúrio (ρ = 13 600 kg/m³), qual seria a altura da coluna sustentada pela mesma pressão atmosférica, sabendo que a de mercúrio mede 0,76 m?",
    "options": [
      "10,3 m",
      "0,0559 m",
      "0,76 m",
      "13,6 m"
    ],
    "correctIndex": 0,
    "explanation": "A pressão atmosférica é a mesma, logo ρ<sub>Hg</sub>·g·h<sub>Hg</sub> = ρ<sub>água</sub>·g·h<sub>água</sub>. A água é 13,6 vezes menos densa, pelo que a coluna é 13,6 vezes mais alta.",
    "solution": [
      "Dados: ρ<sub>Hg</sub> = 13 600 kg/m³; ρ<sub>água</sub> = 1000 kg/m³; h<sub>Hg</sub> = 0,76 m.",
      "Fórmula: ρ<sub>Hg</sub>·g·h<sub>Hg</sub> = ρ<sub>água</sub>·g·h<sub>água</sub>, logo h<sub>água</sub> = ρ<sub>Hg</sub>·h<sub>Hg</sub> / ρ<sub>água</sub>.",
      "Substituição: h<sub>água</sub> = 13 600 × 0,76 / 1000 = 10,336 m.",
      "Resultado: 10,3 m"
    ],
    "distractorAnalysis": [
      "Está incorreta: dividiu a altura de mercúrio por 13,6, em vez de multiplicar; a água é menos densa, logo a coluna é mais alta.",
      "Está incorreta: a altura da coluna depende da massa volúmica do líquido; com um líquido menos denso do que o mercúrio a coluna não pode ter a mesma altura.",
      "Está incorreta: confundiu o fator 13,6 com a altura em metros, sem usar o valor de 0,76 m."
    ],
    "nursingApplication": "Esta relação explica porque se usam colunas de mercúrio, e não de líquidos menos densos, em instrumentos de medição de pressão."
  },
  {
    "id": 4049,
    "topicId": 4,
    "question": "Um estudante de Enfermagem repete a experiência de Torricelli no laboratório. Qual é a sequência correta dos passos?",
    "options": [
      "Encher o tubo, mergulhar a ponta aberta na tina sem a tapar e só depois inverter.",
      "Mergulhar o tubo vazio na tina, inverter e deixar o mercúrio entrar por baixo.",
      "Encher o tubo de mercúrio, tapar a ponta aberta, inverter e mergulhá-la na tina.",
      "Encher a tina, inverter o tubo vazio sobre ela e esperar que o mercúrio suba."
    ],
    "correctIndex": 2,
    "explanation": "O tubo é cheio de mercúrio e a ponta aberta é tapada. Depois o tubo é invertido e mergulhado na tina, e só então se retira o dedo, deixando a coluna descer até 760 mm, com vácuo por cima.",
    "distractorAnalysis": [
      "Está incorreta: com a ponta aberta para cima não é possível mergulhá-la na tina; é preciso tapá-la, inverter o tubo e só depois mergulhá-la.",
      "Está incorreta: o tubo tem de ser enchido de mercúrio antes de ser mergulhado; assim fica sem ar e forma-se o vácuo no topo.",
      "Está incorreta: o mercúrio não sobe sozinho pelo tubo vazio, o tubo tem de ser cheio de mercúrio no início."
    ],
    "nursingApplication": "A experiência de Torricelli mostra que a pressão atmosférica sustenta 760 mm de mercúrio, a referência da escala em mmHg dos esfigmomanómetros."
  },
  {
    "id": 4050,
    "topicId": 4,
    "question": "Numa estação meteorológica, um barómetro de mercúrio (ρ = 13 600 kg/m³) indica uma pressão atmosférica de 99 000 Pa. Com g = 9,8 m/s², qual é a altura da coluna de mercúrio?",
    "options": [
      "7,28 m",
      "10,1 m",
      "71,3 m",
      "0,743 m"
    ],
    "correctIndex": 3,
    "explanation": "Da relação P<sub>atm</sub> = ρ<sub>Hg</sub>·g·h resulta h = P<sub>atm</sub> / (ρ<sub>Hg</sub>·g). A altura da coluna é ligeiramente inferior a 0,76 m, porque a pressão é um pouco inferior a 1 atm.",
    "solution": [
      "Dados: P<sub>atm</sub> = 99 000 Pa; ρ<sub>Hg</sub> = 13 600 kg/m³; g = 9,8 m/s².",
      "Fórmula: h = P<sub>atm</sub> / (ρ<sub>Hg</sub>·g).",
      "Substituição: h = 99 000 / (13 600 × 9,8) = 0,7428 m.",
      "Resultado: 0,743 m"
    ],
    "distractorAnalysis": [
      "Está incorreta: esqueceu o fator g: 99 000 / 13 600 = 7,28.",
      "Está incorreta: usou a massa volúmica da água (1000 kg/m³) em vez da do mercúrio: 99 000 / (1000 × 9,8) = 10,1 m.",
      "Está incorreta: multiplicou por g em vez de dividir: (99 000 / 13 600) × 9,8 = 71,3 m."
    ],
    "nursingApplication": "Compreender que a leitura em mmHg corresponde a uma altura de mercúrio ajuda o enfermeiro a relacionar valores em Pa com os valores habituais em mmHg."
  },
  {
    "id": 4051,
    "topicId": 4,
    "question": "Um técnico mede a altura da coluna num barómetro de Torricelli. Entre que pontos deve medir a altura vertical h que equilibra a pressão atmosférica?",
    "options": [
      "Entre a superfície livre do mercúrio na tina e o topo da coluna no tubo.",
      "Entre o fundo da tina e o topo da coluna no tubo.",
      "Entre a boca do tubo e o topo do tubo, ao longo do vidro.",
      "Entre o topo da coluna e a superfície do vácuo, no topo do tubo."
    ],
    "correctIndex": 0,
    "explanation": "A altura que equilibra a pressão atmosférica é a diferença de nível vertical entre a superfície livre do mercúrio na tina e o topo da coluna. Esta altura não depende do comprimento do tubo nem da sua inclinação.",
    "distractorAnalysis": [
      "Está incorreta: o fundo da tina não é a referência; conta a diferença de nível entre a superfície do mercúrio na tina e o topo da coluna.",
      "Está incorreta: o comprimento do vidro não é a altura vertical que equilibra a pressão atmosférica.",
      "Está incorreta: o vácuo não tem altura que se meça; a coluna que equilibra a pressão é a de mercúrio acima do nível da tina."
    ],
    "nursingApplication": "Numa leitura de manómetro de coluna, o profissional deve ler sempre a diferença de nível entre as superfícies livres, e não o comprimento do tubo."
  },
  {
    "id": 4052,
    "topicId": 4,
    "question": "Imagine-se um barómetro com um líquido de massa volúmica 6800 kg/m³, metade da do mercúrio. Com g = 9,8 m/s² e P<sub>atm</sub> = 101 325 Pa, qual seria a altura da coluna?",
    "options": [
      "0,760 m",
      "1,52 m",
      "0,380 m",
      "3,04 m"
    ],
    "correctIndex": 1,
    "explanation": "A altura da coluna é h = P<sub>atm</sub> / (ρ·g). Com metade da massa volúmica do mercúrio, a coluna precisa de ter o dobro da altura para exercer a mesma pressão.",
    "solution": [
      "Dados: ρ = 6800 kg/m³; g = 9,8 m/s²; P<sub>atm</sub> = 101 325 Pa.",
      "Fórmula: h = P<sub>atm</sub> / (ρ·g).",
      "Substituição: h = 101 325 / (6800 × 9,8) = 1,5205 m.",
      "Resultado: 1,52 m"
    ],
    "distractorAnalysis": [
      "Está incorreta: usou a altura da coluna de mercúrio sem considerar que a nova massa volúmica é metade.",
      "Está incorreta: dividiu a altura de mercúrio por 2, em vez de multiplicar: com menor massa volúmica a coluna é mais alta.",
      "Está incorreta: multiplicou por 4, em vez de 2, ao relacionar a altura com a massa volúmica."
    ],
    "nursingApplication": "O mercúrio foi escolhido para os manómetros por ser muito denso: com um líquido menos denso, a coluna teria de ser mais alta e o instrumento menos prático."
  },
  {
    "id": 4053,
    "topicId": 4,
    "question": "Um utente tem uma pressão arterial sistólica de 120 mmHg. O que significa a unidade «mmHg»?",
    "options": [
      "A força exercida por uma coluna de mercúrio com 1 mm de altura.",
      "A pressão exercida por uma coluna de mercúrio com 1 mm de diâmetro.",
      "A pressão necessária para deslocar 1 mm de mercúrio num capilar.",
      "A pressão exercida por uma coluna de mercúrio com 1 mm de altura."
    ],
    "correctIndex": 3,
    "explanation": "1 mmHg é a pressão exercida por uma coluna de mercúrio com 1 mm de altura. Por isso, 120 mmHg é a pressão de uma coluna de mercúrio com 120 mm.",
    "distractorAnalysis": [
      "Está incorreta: mmHg é uma unidade de pressão, não de força; a pressão relaciona a força com a área.",
      "Está incorreta: o que define 1 mmHg é a altura da coluna de mercúrio, e não o seu diâmetro.",
      "Está incorreta: a unidade não se refere a um deslocamento de mercúrio, mas à pressão que uma coluna de 1 mm de altura exerce."
    ],
    "nursingApplication": "Ao registar uma tensão arterial em mmHg, o enfermeiro regista uma pressão, referida à altura de uma coluna de mercúrio."
  },
  {
    "id": 4054,
    "topicId": 4,
    "question": "Qual das igualdades representa corretamente a pressão atmosférica ao nível do mar, obtida na experiência de Torricelli?",
    "options": [
      "1 atm = 760 mmHg ≈ 101 325 Pa",
      "1 atm = 760 Pa ≈ 101 325 mmHg",
      "1 atm = 133,3 mmHg ≈ 760 Pa",
      "1 atm = 76 mmHg ≈ 10 132 Pa"
    ],
    "correctIndex": 0,
    "explanation": "A coluna de mercúrio de 760 mm sustentada pela pressão atmosférica ao nível do mar define 1 atm = 760 mmHg. Em unidades do SI, isto corresponde a cerca de 101 325 Pa.",
    "distractorAnalysis": [
      "Está incorreta: trocou as unidades: 760 é o valor em mmHg e 101 325 o valor em Pa.",
      "Está incorreta: 133,3 é o valor de 1 mmHg em Pa, e não o valor de 1 atm em mmHg.",
      "Está incorreta: confundiu mm com cm: 76 cm de mercúrio correspondem a 760 mm, e a pressão é 10 vezes maior que 10 132 Pa."
    ],
    "nursingApplication": "Em equipamentos hospitalares, é comum encontrar a mesma pressão em unidades diferentes; saber a equivalência 1 atm = 760 mmHg ajuda a verificar valores."
  },
  {
    "id": 4055,
    "topicId": 4,
    "question": "A pressão arterial sistólica de um utente é de 140 mmHg. Sabendo que 1 mmHg ≈ 133,3 Pa, qual é esta pressão em Pa?",
    "options": [
      "1,05 Pa",
      "18 662 Pa",
      "106 400 Pa",
      "186 620 Pa"
    ],
    "correctIndex": 1,
    "explanation": "Como 1 mmHg ≈ 133,3 Pa, converte-se multiplicando o valor em mmHg por 133,3. O resultado em Pa é muito maior do que o número em mmHg.",
    "solution": [
      "Dados: P = 140 mmHg; 1 mmHg ≈ 133,3 Pa.",
      "Fórmula: P (Pa) = P (mmHg) × 133,3.",
      "Substituição: P = 140 × 133,3 = 18 662 Pa.",
      "Resultado: 18 662 Pa"
    ],
    "distractorAnalysis": [
      "Está incorreta: dividiu por 133,3 em vez de multiplicar.",
      "Está incorreta: multiplicou por 760 (o valor de 1 atm em mmHg) em vez de por 133,3.",
      "Está incorreta: multiplicou por 1333 em vez de 133,3 (erro de casa decimal)."
    ],
    "nursingApplication": "Um valor sistólico de 140 mmHg num esfigmomanómetro é lido pelo enfermeiro em mmHg, mas o SI usa o Pa; a conversão mostra que 140 mmHg são cerca de 18,7 kPa."
  },
  {
    "id": 4056,
    "topicId": 4,
    "question": "A pressão arterial diastólica de um utente é de 80 mmHg. Sabendo que 1 mmHg ≈ 133,3 Pa, qual é esta pressão em kPa?",
    "options": [
      "0,600 kPa",
      "10 664 kPa",
      "10,7 kPa",
      "0,105 kPa"
    ],
    "correctIndex": 2,
    "explanation": "Converte-se multiplicando por 133,3 (mmHg para Pa) e dividindo por 1000 (Pa para kPa). 80 mmHg são cerca de 10,7 kPa.",
    "solution": [
      "Dados: P = 80 mmHg; 1 mmHg ≈ 133,3 Pa; 1 kPa = 1000 Pa.",
      "Conversão: P (Pa) = 80 × 133,3 = 10 664 Pa.",
      "Fórmula: P (kPa) = P (Pa) / 1000.",
      "Resultado: 10,7 kPa"
    ],
    "distractorAnalysis": [
      "Está incorreta: dividiu 80 por 133,3 em vez de multiplicar.",
      "Está incorreta: multiplicou por 133,3 mas esqueceu-se de dividir por 1000 ao passar de Pa para kPa.",
      "Está incorreta: dividiu 80 por 760, convertendo para atm, e deu o resultado em kPa."
    ],
    "nursingApplication": "Ao comparar a pressão diastólica registada em mmHg com valores em kPa de outra bibliografia, o enfermeiro usa esta conversão."
  },
  {
    "id": 4057,
    "topicId": 4,
    "question": "Num doente, a pressão arterial média é de 90 mmHg. Sabendo que 1 atm = 760 mmHg, qual é esta pressão em atm?",
    "options": [
      "0,118 atm",
      "8,44 atm",
      "68 400 atm",
      "1,18 atm"
    ],
    "correctIndex": 0,
    "explanation": "Para passar de mmHg para atm divide-se por 760, porque 1 atm = 760 mmHg. A pressão arterial média é uma fração de 1 atm.",
    "solution": [
      "Dados: P = 90 mmHg; 1 atm = 760 mmHg.",
      "Fórmula: P (atm) = P (mmHg) / 760.",
      "Substituição: P = 90 / 760 = 0,1184 atm.",
      "Resultado: 0,118 atm"
    ],
    "distractorAnalysis": [
      "Está incorreta: inverteu a razão: calculou 760 / 90 em vez de 90 / 760.",
      "Está incorreta: multiplicou 90 por 760 em vez de dividir.",
      "Está incorreta: dividiu por 76 em vez de 760; 90 / 760 = 0,118, e não 1,18."
    ],
    "nursingApplication": "Ao relacionar uma pressão arterial em mmHg com a pressão atmosférica, o enfermeiro vê que 90 mmHg é só uma pequena fração de 1 atm."
  },
  {
    "id": 4058,
    "topicId": 4,
    "question": "Um manómetro de uma câmara indica 0,5 atm. Sabendo que 1 atm = 760 mmHg, qual é esta pressão em mmHg?",
    "options": [
      "1520 mmHg",
      "380 mmHg",
      "38 mmHg",
      "759,5 mmHg"
    ],
    "correctIndex": 1,
    "explanation": "Para passar de atm para mmHg multiplica-se por 760. Meia atmosfera corresponde à metade de 760 mmHg.",
    "solution": [
      "Dados: P = 0,5 atm; 1 atm = 760 mmHg.",
      "Fórmula: P (mmHg) = P (atm) × 760.",
      "Substituição: P = 0,5 × 760.",
      "Resultado: 380 mmHg"
    ],
    "distractorAnalysis": [
      "Está incorreta: dividiu 760 por 0,5 em vez de multiplicar.",
      "Está incorreta: erro de casa decimal ao multiplicar 0,5 por 760.",
      "Está incorreta: subtraiu 0,5 a 760 em vez de multiplicar."
    ],
    "nursingApplication": "Ao ler um manómetro graduado em atm num equipamento de gases medicinais, o enfermeiro pode converter o valor para mmHg."
  },
  {
    "id": 4059,
    "topicId": 4,
    "question": "Uma pressão de 2 atm é indicada num equipamento. Sabendo que 1 atm ≈ 101 325 Pa, qual é o valor aproximado em kPa?",
    "options": [
      "50,7 kPa",
      "101 kPa",
      "203 kPa",
      "202 650 kPa"
    ],
    "correctIndex": 2,
    "explanation": "2 atm correspondem a 2 × 101 325 Pa = 202 650 Pa. Dividindo por 1000 obtêm-se cerca de 203 kPa.",
    "solution": [
      "Dados: P = 2 atm; 1 atm ≈ 101 325 Pa.",
      "Conversão: P (Pa) = 2 × 101 325 = 202 650 Pa.",
      "Fórmula: P (kPa) = P (Pa) / 1000.",
      "Resultado: 203 kPa"
    ],
    "distractorAnalysis": [
      "Está incorreta: dividiu 101,325 por 2 em vez de multiplicar.",
      "Está incorreta: esqueceu-se de multiplicar por 2 e deu o valor de 1 atm.",
      "Está incorreta: multiplicou por 2 mas esqueceu-se de converter Pa em kPa."
    ],
    "nursingApplication": "Os cilindros de gases medicinais usam manómetros graduados em unidades de pressão; converter entre atm e kPa evita erros de leitura."
  },
  {
    "id": 4060,
    "topicId": 4,
    "question": "Um manómetro indica uma pressão de 15,0 kPa. Sabendo que 1 mmHg ≈ 133,3 Pa, qual é o valor em mmHg?",
    "options": [
      "0,113 mmHg",
      "2000 mmHg",
      "11,3 mmHg",
      "113 mmHg"
    ],
    "correctIndex": 3,
    "explanation": "15,0 kPa são 15 000 Pa. Dividindo por 133,3 Pa por mmHg obtêm-se cerca de 113 mmHg.",
    "solution": [
      "Dados: P = 15,0 kPa; 1 mmHg ≈ 133,3 Pa.",
      "Conversão: P = 15,0 × 1000 = 15 000 Pa.",
      "Fórmula: P (mmHg) = P (Pa) / 133,3 = 15 000 / 133,3.",
      "Resultado: 113 mmHg"
    ],
    "distractorAnalysis": [
      "Está incorreta: esqueceu-se de converter kPa em Pa antes de dividir por 133,3.",
      "Está incorreta: multiplicou por 133,3 em vez de dividir.",
      "Está incorreta: converteu 15,0 kPa em 1500 Pa, em vez de 15 000 Pa, antes de dividir por 133,3."
    ],
    "nursingApplication": "Valores em kPa de equipamentos de ventilação podem ser comparados com valores em mmHg dos registos clínicos depois da conversão."
  },
  {
    "id": 4061,
    "topicId": 4,
    "question": "Um manómetro indica 30,4 kPa. Sabendo que 1 atm ≈ 101,3 kPa, qual é este valor em atm?",
    "options": [
      "3,00 atm",
      "0,300 atm",
      "0,228 atm",
      "3080 atm"
    ],
    "correctIndex": 1,
    "explanation": "1 atm vale cerca de 101,3 kPa. Dividindo 30,4 kPa por 101,3 obtém-se cerca de 0,300 atm.",
    "solution": [
      "Dados: P = 30,4 kPa; 1 atm ≈ 101,3 kPa.",
      "Fórmula: P (atm) = P (kPa) / 101,3.",
      "Substituição: P = 30,4 / 101,3 = 0,300 atm.",
      "Resultado: 0,300 atm"
    ],
    "distractorAnalysis": [
      "Está incorreta: dividiu por 10,13 em vez de 101,3; como 30,4 kPa é menos de um terço de 1 atm, o resultado tem de ser inferior a 1.",
      "Está incorreta: dividiu por 133,3, o valor de 1 mmHg em Pa, em vez de por 101,3.",
      "Está incorreta: multiplicou por 101,3 em vez de dividir."
    ],
    "nursingApplication": "A pressão num cilindro de oxigénio é lida por um manómetro; converter entre kPa e atm ajuda a comparar a leitura com as fichas técnicas."
  },
  {
    "id": 4062,
    "topicId": 4,
    "question": "Qual é a maior pressão: 700 mmHg ou 0,9 atm? Use 1 atm = 760 mmHg.",
    "options": [
      "0,9 atm, pois 0,9 atm correspondem a mais de 700 mmHg.",
      "São iguais, pois 0,9 atm ≈ 700 mmHg.",
      "700 mmHg, pois 0,9 atm correspondem a 684 mmHg.",
      "Não se sabe, pois falta a massa volúmica do líquido."
    ],
    "correctIndex": 2,
    "explanation": "Para comparar duas pressões em unidades diferentes, converte-se uma para a outra. 0,9 atm correspondem a 0,9 × 760 = 684 mmHg, que é menos do que 700 mmHg.",
    "solution": [
      "Dados: 0,9 atm; 700 mmHg; 1 atm = 760 mmHg.",
      "Fórmula: P (mmHg) = P (atm) × 760.",
      "Substituição: 0,9 × 760 = 684 mmHg.",
      "Resultado: 700 mmHg, pois 0,9 atm correspondem a 684 mmHg."
    ],
    "distractorAnalysis": [
      "Está incorreta: 0,9 atm = 0,9 × 760 = 684 mmHg, que é menos de 700 mmHg.",
      "Está incorreta: 0,9 atm correspondem a 684 mmHg, que difere de 700 mmHg.",
      "Está incorreta: as duas pressões comparam-se convertendo uma na unidade da outra, sem precisar da massa volúmica."
    ],
    "nursingApplication": "Ao comparar um valor de pressão em mmHg com outro em atm, o enfermeiro converte sempre para a mesma unidade antes de decidir qual é maior."
  },
  {
    "id": 4063,
    "topicId": 4,
    "question": "Um sensor de um monitor indica uma pressão de 20 000 Pa. Sabendo que 1 mmHg ≈ 133,3 Pa, qual é o valor em mmHg?",
    "options": [
      "2 666 000 mmHg",
      "26,3 mmHg",
      "1500 mmHg",
      "150 mmHg"
    ],
    "correctIndex": 3,
    "explanation": "Para passar de Pa para mmHg divide-se por 133,3. 20 000 Pa correspondem a cerca de 150 mmHg.",
    "solution": [
      "Dados: P = 20 000 Pa; 1 mmHg ≈ 133,3 Pa.",
      "Fórmula: P (mmHg) = P (Pa) / 133,3.",
      "Substituição: P = 20 000 / 133,3 = 150,04 mmHg.",
      "Resultado: 150 mmHg"
    ],
    "distractorAnalysis": [
      "Está incorreta: multiplicou por 133,3 em vez de dividir.",
      "Está incorreta: dividiu por 760 em vez de por 133,3.",
      "Está incorreta: dividiu por 13,33 em vez de 133,3; 20 000 / 133,3 ≈ 150, e não 1500."
    ],
    "nursingApplication": "Quando um monitor apresenta uma pressão em Pa e a ficha do utente em mmHg, a conversão permite comparar os dois valores."
  },
  {
    "id": 4064,
    "topicId": 4,
    "question": "Uma pressão de 0,25 atm é indicada num instrumento. Sabendo que 1 atm ≈ 101 325 Pa, qual é o valor em Pa?",
    "options": [
      "25 331 Pa",
      "190 Pa",
      "25,3 Pa",
      "405 300 Pa"
    ],
    "correctIndex": 0,
    "explanation": "Para passar de atm para Pa multiplica-se por 101 325. Um quarto de atmosfera corresponde a cerca de um quarto de 101 325 Pa.",
    "solution": [
      "Dados: P = 0,25 atm; 1 atm ≈ 101 325 Pa.",
      "Fórmula: P (Pa) = P (atm) × 101 325.",
      "Substituição: P = 0,25 × 101 325 = 25 331,25 Pa.",
      "Resultado: 25 331 Pa"
    ],
    "distractorAnalysis": [
      "Está incorreta: multiplicou 0,25 por 760, o valor de 1 atm em mmHg, e deu o resultado em Pa.",
      "Está incorreta: dividiu por 1000, como se convertesse Pa em kPa, sem necessidade.",
      "Está incorreta: dividiu 101 325 por 0,25 em vez de multiplicar."
    ],
    "nursingApplication": "Um aspirador cirúrgico ou um manómetro de vácuo pode indicar pressões inferiores à atmosférica, que se podem converter em Pa."
  },
  {
    "id": 4065,
    "topicId": 4,
    "question": "Um manómetro indica 50 650 Pa. Sabendo que 1 atm ≈ 101 325 Pa, qual é o valor em atm?",
    "options": [
      "2,00 atm",
      "380 atm",
      "0,500 atm",
      "0,0500 atm"
    ],
    "correctIndex": 2,
    "explanation": "Divide-se o valor em Pa por 101 325 para obter atm. 50 650 Pa é cerca de metade de 1 atm.",
    "solution": [
      "Dados: P = 50 650 Pa; 1 atm ≈ 101 325 Pa.",
      "Fórmula: P (atm) = P (Pa) / 101 325.",
      "Substituição: P = 50 650 / 101 325 = 0,4999 atm.",
      "Resultado: 0,500 atm"
    ],
    "distractorAnalysis": [
      "Está incorreta: inverteu a razão: dividiu 101 325 por 50 650.",
      "Está incorreta: dividiu por 133,3, o valor de 1 mmHg em Pa, e deu o resultado em atm.",
      "Está incorreta: deslocou a vírgula uma casa: 50 650 Pa é cerca de metade de 101 325 Pa, ou seja, 0,500 atm e não 0,0500 atm."
    ],
    "nursingApplication": "Em oxigenoterapia, o enfermeiro compara a pressão lida num manómetro com as tabelas do fabricante, que podem usar atm ou Pa."
  },
  {
    "id": 4066,
    "topicId": 4,
    "question": "Um utente tem tensão arterial 120/80 mmHg. A diferença entre as duas pressões é de 40 mmHg. Sabendo que 1 mmHg ≈ 133,3 Pa, quanto vale em kPa?",
    "options": [
      "0,300 kPa",
      "5332 kPa",
      "16,0 kPa",
      "5,33 kPa"
    ],
    "correctIndex": 3,
    "explanation": "Multiplica-se a diferença, em mmHg, por 133,3 para obter Pa, e divide-se por 1000 para obter kPa. 40 mmHg são cerca de 5,33 kPa.",
    "solution": [
      "Dados: ΔP = 40 mmHg; 1 mmHg ≈ 133,3 Pa; 1 kPa = 1000 Pa.",
      "Conversão: ΔP (Pa) = 40 × 133,3 = 5332 Pa.",
      "Fórmula: ΔP (kPa) = ΔP (Pa) / 1000.",
      "Resultado: 5,33 kPa"
    ],
    "distractorAnalysis": [
      "Está incorreta: dividiu 40 por 133,3 em vez de multiplicar.",
      "Está incorreta: multiplicou por 133,3 mas esqueceu-se de converter Pa em kPa.",
      "Está incorreta: converteu 120 mmHg em vez da diferença de 40 mmHg."
    ],
    "nursingApplication": "A diferença entre a pressão sistólica e a diastólica é calculada pelo enfermeiro em mmHg e pode ser convertida em kPa para comparação com outras fontes."
  },
  {
    "id": 4067,
    "topicId": 4,
    "question": "No Sistema Internacional, a pressão exprime-se em pascal (Pa). Qual é o significado de 1 Pa?",
    "options": [
      "Uma força de 1 N distribuída por uma área de 1 m².",
      "Uma força de 1 N distribuída por uma área de 1 cm².",
      "Uma massa de 1 kg distribuída por uma área de 1 m².",
      "Uma força de 1 N que se desloca ao longo de 1 m."
    ],
    "correctIndex": 0,
    "explanation": "Um pascal é a pressão correspondente a uma força de 1 N distribuída uniformemente por 1 m². Por isso 1 Pa = 1 N/m².",
    "distractorAnalysis": [
      "Está incorreta: a área de referência do pascal é o metro quadrado, e não o centímetro quadrado.",
      "Está incorreta: o pascal relaciona uma força, em newton, com a área, e não uma massa.",
      "Está incorreta: isso descreve um trabalho (1 N·m = 1 J), e não uma pressão, que relaciona força e área."
    ],
    "nursingApplication": "Sabendo que 1 Pa é uma pressão pequena, o enfermeiro compreende porque os valores clínicos são expressos em kPa ou mmHg."
  },
  {
    "id": 4068,
    "topicId": 4,
    "question": "Uma tensão arterial sistólica de 120 mmHg pode ser sustentada por uma coluna de mercúrio. Que altura teria essa coluna?",
    "options": [
      "120 cm",
      "120 mm",
      "16 mm",
      "760 mm"
    ],
    "correctIndex": 1,
    "explanation": "Como 1 mmHg é a pressão de uma coluna de mercúrio com 1 mm de altura, 120 mmHg é a pressão de uma coluna de 120 mm. Equivale a cerca de 16 kPa.",
    "distractorAnalysis": [
      "Está incorreta: confundiu mm com cm: 1 mmHg corresponde a 1 mm de altura, não a 1 cm.",
      "Está incorreta: usou o valor da pressão em kPa (≈ 16 kPa) como se fosse a altura em mm.",
      "Está incorreta: usou a altura da coluna de mercúrio da pressão atmosférica, e não a da tensão arterial."
    ],
    "nursingApplication": "Num esfigmomanómetro de coluna de mercúrio, o enfermeiro lê a altura da coluna em milímetros, que é o valor da pressão em mmHg."
  },
  {
    "id": 4069,
    "topicId": 4,
    "question": "Num depósito com soro fisiológico em repouso, o ponto A está a 5 cm da superfície livre e o ponto B a 20 cm. Como se comparam as pressões em A e B?",
    "options": [
      "P<sub>A</sub> > P<sub>B</sub>, porque A está mais perto da superfície livre.",
      "P<sub>A</sub> = P<sub>B</sub>, porque o líquido é o mesmo.",
      "Não se comparam sem conhecer a área da base do depósito.",
      "P<sub>B</sub> > P<sub>A</sub>, porque sobre B há mais líquido."
    ],
    "correctIndex": 3,
    "explanation": "Num fluido em repouso, a pressão aumenta com a profundidade, porque o peso do líquido sobre o ponto é maior. B é mais fundo, pelo que P<sub>B</sub> > P<sub>A</sub>.",
    "distractorAnalysis": [
      "Está incorreta: a pressão aumenta com a profundidade; por estar mais perto da superfície, A tem menos líquido por cima.",
      "Está incorreta: a pressão só é igual em pontos à mesma profundidade, e A e B têm profundidades diferentes.",
      "Está incorreta: a pressão num ponto depende da profundidade, e não da área da base."
    ],
    "nursingApplication": "Numa bolsa de soro pendurada, o líquido junto à saída inferior está sob maior pressão do que o da zona perto da superfície livre."
  },
  {
    "id": 4070,
    "topicId": 4,
    "question": "Porque é que, num líquido em repouso, a pressão num ponto aumenta com a profundidade?",
    "options": [
      "Quanto mais fundo, maior é o peso do líquido que está por cima do ponto.",
      "A massa volúmica do líquido aumenta fortemente com a profundidade.",
      "A temperatura do líquido sobe à medida que se desce.",
      "As paredes laterais do recipiente empurram mais o líquido ao fundo."
    ],
    "correctIndex": 0,
    "explanation": "A pressão num ponto resulta do peso do líquido que está por cima. Quanto mais fundo está o ponto, maior é a coluna de líquido e, por isso, maior a pressão.",
    "distractorAnalysis": [
      "Está incorreta: a massa volúmica de um líquido é praticamente constante; é o peso do líquido acima do ponto que aumenta.",
      "Está incorreta: a variação da pressão com a profundidade não se deve à temperatura, mas ao peso do líquido acima.",
      "Está incorreta: a pressão em profundidade deve-se ao peso do líquido acima do ponto, e não ao empurrão das paredes."
    ],
    "nursingApplication": "Esta ideia explica porque, numa seringa ou numa coluna de soro, a pressão junto da ponta inferior é superior à da superfície livre."
  },
  {
    "id": 4071,
    "topicId": 4,
    "question": "Um sensor, mergulhado numa coluna alta de soro em repouso, é puxado lentamente para cima, mantendo-se sempre dentro do líquido. O que acontece à pressão medida?",
    "options": [
      "Aumenta, porque o sensor fica mais perto do ar.",
      "Diminui, porque há cada vez menos líquido por cima do sensor.",
      "Mantém-se constante, porque o líquido é o mesmo.",
      "Depende apenas da quantidade total de soro no depósito."
    ],
    "correctIndex": 1,
    "explanation": "A pressão diminui quando o ponto se aproxima da superfície, porque diminui a profundidade e, com ela, o peso do líquido por cima do sensor.",
    "distractorAnalysis": [
      "Está incorreta: a pressão num líquido aumenta com a profundidade; ao subir, a profundidade diminui e a pressão também.",
      "Está incorreta: a pressão só é constante à mesma profundidade, e aqui a profundidade vai diminuindo.",
      "Está incorreta: a pressão num ponto depende da profundidade, não da quantidade total de líquido."
    ],
    "nursingApplication": "Numa coluna de soro, a pressão no ponto de ligação ao utente depende da profundidade do líquido sobre esse ponto."
  },
  {
    "id": 4072,
    "topicId": 4,
    "question": "Em X, a 30 cm de profundidade numa piscina grande com água, e em Y, a 60 cm de profundidade num balde com água, onde é a pressão maior (pressão atmosférica igual à superfície)?",
    "options": [
      "Em X, porque a piscina tem muito mais água.",
      "São iguais, porque a água é a mesma nos dois recipientes.",
      "Em Y, porque a profundidade é maior.",
      "Em X, porque a piscina tem maior área à superfície."
    ],
    "correctIndex": 2,
    "explanation": "A pressão num ponto de um líquido em repouso depende da profundidade desse ponto, e não da quantidade de líquido nem da forma do recipiente. Y é mais fundo do que X.",
    "distractorAnalysis": [
      "Está incorreta: a pressão num ponto depende da profundidade, e não da quantidade total de água.",
      "Está incorreta: as profundidades são diferentes, por isso as pressões também o são.",
      "Está incorreta: a área da superfície não determina a pressão num ponto; conta a profundidade."
    ],
    "nursingApplication": "Em soros, a pressão no ponto de saída depende da altura do líquido acima dele, e não do volume restante na bolsa."
  },
  {
    "id": 4073,
    "topicId": 4,
    "question": "Num depósito alto cheio de água em repouso, três sensores medem a pressão: S<sub>1</sub> junto do fundo, S<sub>2</sub> a meio e S<sub>3</sub> perto da superfície. Qual é a ordem das pressões?",
    "options": [
      "P<sub>1</sub> > P<sub>2</sub> > P<sub>3</sub>",
      "P<sub>3</sub> > P<sub>2</sub> > P<sub>1</sub>",
      "P<sub>1</sub> = P<sub>2</sub> = P<sub>3</sub>",
      "P<sub>2</sub> > P<sub>1</sub> > P<sub>3</sub>"
    ],
    "correctIndex": 0,
    "explanation": "A pressão aumenta com a profundidade num líquido em repouso. S<sub>1</sub> é o mais fundo e S<sub>3</sub> o mais próximo da superfície, logo P<sub>1</sub> > P<sub>2</sub> > P<sub>3</sub>.",
    "distractorAnalysis": [
      "Está incorreta: inverteu a relação: a pressão aumenta com a profundidade, logo é maior no fundo.",
      "Está incorreta: as pressões só seriam iguais se os sensores estivessem à mesma profundidade.",
      "Está incorreta: a pressão cresce de forma contínua com a profundidade; S<sub>2</sub> está acima de S<sub>1</sub>, por isso P<sub>2</sub> é menor do que P<sub>1</sub>."
    ],
    "nursingApplication": "Numa coluna de líquido vertical, como um sistema de soro, o ponto mais baixo está sempre sob maior pressão do que os pontos acima."
  },
  {
    "id": 4074,
    "topicId": 4,
    "question": "Qual das afirmações sobre um líquido em repouso NÃO é correta?",
    "options": [
      "A pressão aumenta com a profundidade do ponto no líquido.",
      "A pressão é igual em todos os pontos, seja qual for a profundidade.",
      "A pressão é maior nos pontos com mais líquido por cima deles.",
      "Dois pontos à mesma profundidade têm pressões iguais."
    ],
    "correctIndex": 1,
    "explanation": "A pressão num líquido em repouso varia com a profundidade: só é igual em pontos à mesma profundidade. Logo, não é igual em todo o líquido.",
    "distractorAnalysis": [
      "Está incorreta: esta afirmação é verdadeira: a pressão cresce com a profundidade (ΔP = ρ·g·Δh), por isso não é a resposta pedida.",
      "Está incorreta: esta afirmação é verdadeira: mais líquido por cima significa maior profundidade e maior pressão.",
      "Está incorreta: esta afirmação é verdadeira: com Δh = 0 tem-se ΔP = 0, logo pontos à mesma profundidade têm a mesma pressão."
    ],
    "nursingApplication": "Numa coluna de soro, o enfermeiro pode esperar pressões diferentes em pontos a alturas diferentes do mesmo tubo."
  },
  {
    "id": 4075,
    "topicId": 4,
    "question": "Um pequeno sensor está a 40 cm de profundidade num tanque de água em repouso. Roda-se o sensor para cima, para o lado e para baixo, sem mudar de profundidade. O que acontece à pressão medida?",
    "options": [
      "É maior quando virado para cima, onde está o peso da água.",
      "É maior quando virado para baixo, em direção ao fundo.",
      "Mantém-se igual nas três orientações.",
      "É nula quando virado para o lado."
    ],
    "correctIndex": 2,
    "explanation": "Num ponto do interior de um fluido, a pressão é a mesma em todas as direções e sentidos. Mudando a orientação à mesma profundidade, a leitura não se altera.",
    "distractorAnalysis": [
      "Está incorreta: a pressão num ponto é a mesma em todas as direções; o peso da água não torna maior a pressão num só sentido.",
      "Está incorreta: a pressão não depende da direção em que o sensor está virado.",
      "Está incorreta: a pressão num ponto atua também na horizontal; não é nula nessa orientação."
    ],
    "nursingApplication": "Na monitorização invasiva, o transdutor é nivelado pelo eixo flebostático, porque a leitura depende do desnível e não da orientação da sua face."
  },
  {
    "id": 4076,
    "topicId": 4,
    "question": "Um estudante afirma que, num líquido em repouso, a pressão atua apenas de cima para baixo, por causa do peso. Qual é a correção correta?",
    "options": [
      "A pressão atua só na horizontal, contra as paredes do recipiente.",
      "A pressão atua só de baixo para cima, por reação ao peso.",
      "A pressão é um vetor com a direção do peso do líquido.",
      "A pressão num ponto atua com o mesmo valor em todas as direções e sentidos."
    ],
    "correctIndex": 3,
    "explanation": "No interior de um fluido, a pressão num ponto é a mesma em todas as direções e sentidos. É uma grandeza escalar, apesar de ser causada pelo peso do líquido.",
    "distractorAnalysis": [
      "Está incorreta: a pressão atua em todas as direções no interior do líquido, e não apenas na horizontal.",
      "Está incorreta: a pressão atua com o mesmo valor em todas as direções; não é só de baixo para cima.",
      "Está incorreta: a pressão é uma grandeza escalar, sem direção própria; é igual em todas as direções."
    ],
    "nursingApplication": "Ao puncionar uma veia, o enfermeiro sabe que a pressão do sangue atua em todas as direções sobre a parede do vaso e sobre a agulha."
  },
  {
    "id": 4077,
    "topicId": 4,
    "question": "Numa bacia larga com soro em repouso, os pontos P e Q estão a 6 cm de profundidade: P junto da parede e Q no centro. Como se comparam as pressões?",
    "options": [
      "É maior em Q, porque tem líquido por todos os lados.",
      "São iguais, porque os dois pontos estão à mesma profundidade.",
      "É maior em P, porque a parede também empurra o líquido.",
      "É menor em P, porque está mais perto da parede."
    ],
    "correctIndex": 1,
    "explanation": "Num líquido em repouso, a pressão só depende da profundidade. Pontos à mesma profundidade, mesmo em posições horizontais diferentes, têm a mesma pressão.",
    "distractorAnalysis": [
      "Está incorreta: a pressão depende da profundidade e não da distância às paredes.",
      "Está incorreta: a parede não aumenta a pressão no ponto P; só conta a profundidade.",
      "Está incorreta: a distância à parede não altera a pressão; pontos à mesma profundidade têm a mesma pressão."
    ],
    "nursingApplication": "Ao comparar dois pontos de um recipiente com soro, a altura de líquido sobre cada ponto é o que interessa, e não a posição horizontal."
  },
  {
    "id": 4078,
    "topicId": 4,
    "question": "Pode afirmar-se que, num líquido em repouso, a pressão é igual em todos os pontos do líquido?",
    "options": [
      "Sim, porque o líquido transmite a pressão por igual a todos os pontos.",
      "Sim, desde que o líquido esteja em repouso.",
      "Não: só é igual em pontos à mesma profundidade.",
      "Não: só é igual em pontos à mesma distância das paredes."
    ],
    "correctIndex": 2,
    "explanation": "A pressão num fluido em repouso não é igual em todo o fluido: aumenta com a profundidade. Só é igual em pontos à mesma profundidade.",
    "distractorAnalysis": [
      "Está incorreta: confunde com a lei de Pascal, que trata da transmissão de um acréscimo de pressão; a pressão continua a aumentar com a profundidade.",
      "Está incorreta: mesmo em repouso, a pressão aumenta com a profundidade.",
      "Está incorreta: o que determina a pressão é a profundidade, e não a distância às paredes."
    ],
    "nursingApplication": "Ao medir a pressão de um líquido em dois pontos de alturas diferentes, o enfermeiro não deve esperar valores iguais."
  },
  {
    "id": 4079,
    "topicId": 4,
    "question": "Num depósito de soro em repouso, consideram-se os pontos A (10 cm de profundidade, perto da parede esquerda), B (25 cm, no centro), C (25 cm, perto da parede direita) e D (40 cm, no centro, na vertical de B). Quais destes pontos estão à mesma pressão?",
    "options": [
      "B e D, por estarem na mesma vertical.",
      "A e C, por ambos estarem junto de uma parede.",
      "A e D, por serem os pontos extremos.",
      "B e C, por estarem à mesma profundidade."
    ],
    "correctIndex": 3,
    "explanation": "Só pontos à mesma profundidade têm a mesma pressão. B e C estão ambos a 25 cm de profundidade, mesmo estando em posições horizontais diferentes.",
    "distractorAnalysis": [
      "Está incorreta: B e D estão a profundidades diferentes; estar na mesma vertical não iguala as pressões.",
      "Está incorreta: A e C têm profundidades diferentes (10 cm e 25 cm), por isso as pressões também são diferentes.",
      "Está incorreta: A e D têm profundidades diferentes, logo pressões diferentes."
    ],
    "nursingApplication": "Numa bolsa com soro, pontos à mesma altura têm a mesma pressão, mesmo que estejam em posições diferentes ao longo da bolsa."
  },
  {
    "id": 4080,
    "topicId": 4,
    "question": "Num depósito de soro em repouso, o que se pode dizer sobre a pressão num ponto e sobre a força que o líquido exerce na parede do depósito?",
    "options": [
      "A pressão é uma grandeza escalar e a força sobre a parede é perpendicular a esta.",
      "A pressão é um vetor e a força sobre a parede é paralela à parede.",
      "A pressão é escalar e a força sobre a parede é oblíqua, dirigida para baixo.",
      "A pressão é um vetor dirigido para baixo, tal como a força sobre a parede."
    ],
    "correctIndex": 0,
    "explanation": "A pressão é um escalar. Num fluido em repouso, a força que exerce sobre uma parede é perpendicular a essa parede.",
    "distractorAnalysis": [
      "Está incorreta: a pressão é escalar e, num fluido em repouso, a força sobre a parede não é paralela.",
      "Está incorreta: num fluido em repouso, a força sobre a parede é perpendicular à parede, e não oblíqua.",
      "Está incorreta: a pressão é escalar, e a força sobre a parede é perpendicular a ela, não vertical."
    ],
    "nursingApplication": "Num cateter ou numa seringa com líquido, o soro empurra as paredes sempre perpendicularmente à sua superfície."
  },
  {
    "id": 4081,
    "topicId": 4,
    "question": "Dois recipientes, um largo e outro estreito, contêm água em repouso até à mesma altura de 20 cm acima do fundo; o largo tem muito mais água. Como se comparam os aumentos de pressão entre a superfície e o fundo de cada recipiente?",
    "options": [
      "É maior no recipiente largo, pois tem mais água a pesar.",
      "É maior no recipiente estreito, pois a água está mais concentrada.",
      "É menor no recipiente largo, pois a pressão se reparte por mais área.",
      "São iguais, pois dependem só da massa volúmica e do desnível."
    ],
    "correctIndex": 3,
    "explanation": "Em equilíbrio hidrostático, ΔP = ρ·g·Δh. Com o mesmo líquido e o mesmo desnível, o aumento de pressão é igual, independentemente da forma do recipiente e da quantidade de líquido.",
    "distractorAnalysis": [
      "Está incorreta: a quantidade total de líquido não entra em ΔP = ρ·g·Δh; só contam a massa volúmica e o desnível.",
      "Está incorreta: a forma e a largura do recipiente não influenciam ΔP; com o mesmo líquido e o mesmo Δh, o aumento é igual.",
      "Está incorreta: o recipiente largo tem mais peso de água, mas também mais área de fundo; ΔP = ρ·g·Δh não depende da área."
    ],
    "nursingApplication": "Num sistema de soro, a pressão do líquido à entrada do cateter depende do desnível até à superfície do soro e não da quantidade que ainda resta no saco."
  },
  {
    "id": 4082,
    "topicId": 4,
    "question": "Dois sensores de pressão são colocados à mesma profundidade, afastados 8 m na horizontal, numa grande piscina de água em repouso. O que se pode afirmar sobre as pressões que registam?",
    "options": [
      "São diferentes, pois os sensores ocupam posições distintas.",
      "São iguais, pois Δh = 0 e, por isso, ΔP = 0.",
      "Diferem em ρ·g·8, pois o desnível é a distância entre eles.",
      "São iguais apenas se a piscina tiver paredes verticais."
    ],
    "correctIndex": 1,
    "explanation": "Pontos ao mesmo nível no mesmo líquido contínuo em repouso têm Δh = 0 e, portanto, a mesma pressão, mesmo afastados na horizontal.",
    "distractorAnalysis": [
      "Está incorreta: a pressão só varia com a profundidade; a posição horizontal não conta.",
      "Está incorreta: Δh é a diferença de profundidade (vertical), não a distância em linha reta nem na horizontal.",
      "Está incorreta: a conclusão vale para recipientes de qualquer forma, desde que o líquido seja contínuo e esteja em repouso."
    ],
    "nursingApplication": "Ao posicionar um transdutor de pressão ao nível de referência do doente, o enfermeiro sabe que qualquer ponto desse nível do mesmo líquido contínuo tem a mesma pressão."
  },
  {
    "id": 4083,
    "topicId": 4,
    "question": "Um estudante aplica a lei fundamental da hidrostática a dois pontos de um líquido em repouso, escrevendo P<sub>2</sub> = P<sub>1</sub> + ρ·g·Δh. O que representa Δh nesta expressão?",
    "options": [
      "A diferença de profundidade entre os pontos, na vertical.",
      "A distância em linha reta entre os dois pontos, em qualquer direção.",
      "A altura total de líquido existente no recipiente.",
      "O volume de líquido compreendido entre os dois pontos."
    ],
    "correctIndex": 0,
    "explanation": "Δh = h<sub>2</sub> − h<sub>1</sub> é a diferença de profundidade entre os pontos, e o ponto 2 é o mais fundo.",
    "distractorAnalysis": [
      "Está incorreta: só interessa a componente vertical; dois pontos à mesma profundidade têm Δh = 0, mesmo afastados.",
      "Está incorreta: Δh é medido entre os dois pontos em estudo e não até ao fundo do recipiente, salvo se um deles estiver aí.",
      "Está incorreta: o volume não entra na lei; Δh é um comprimento, medido em metros."
    ],
    "nursingApplication": "Ao estimar a pressão num cateter venoso a partir da superfície do soro, o enfermeiro usa o desnível vertical e não o comprimento do tubo."
  },
  {
    "id": 4084,
    "topicId": 4,
    "question": "Os pontos A e B estão no interior da mesma água em repouso, estando A 0,5 m mais fundo do que B. Qual das relações entre as pressões está correta?",
    "options": [
      "P<sub>B</sub> = P<sub>A</sub> + ρ·g·Δh, com Δh = 0,5 m",
      "P<sub>A</sub> = P<sub>B</sub>, pois ambos estão na mesma água",
      "P<sub>A</sub> = P<sub>B</sub> + ρ·g·Δh, com Δh = 0,5 m",
      "P<sub>A</sub> = P<sub>B</sub> · ρ·g·Δh, com Δh = 0,5 m"
    ],
    "correctIndex": 2,
    "explanation": "Na lei fundamental, o ponto mais fundo tem a pressão do ponto menos fundo acrescida de ρ·g·Δh.",
    "distractorAnalysis": [
      "Está incorreta: o ponto mais fundo (A) é o que tem maior pressão; a expressão atribui a B, menos fundo, a pressão mais elevada.",
      "Está incorreta: estão na mesma água, mas a profundidades diferentes, logo com pressões diferentes.",
      "Está incorreta: a contribuição ρ·g·Δh soma-se à pressão do ponto menos fundo; não a multiplica."
    ],
    "nursingApplication": "Num doente deitado com um cateter arterial, o enfermeiro tem em conta que a pressão aumenta nos pontos situados mais abaixo da referência do transdutor."
  },
  {
    "id": 4085,
    "topicId": 4,
    "question": "Num mesmo líquido em repouso, o desnível entre dois pontos passa de 10 cm para 30 cm. Como varia o aumento de pressão entre esses pontos?",
    "options": [
      "Mantém-se, pois o líquido é o mesmo.",
      "Triplica, pois ΔP é proporcional a Δh.",
      "Fica nove vezes maior, pois ΔP depende do quadrado de Δh.",
      "Fica três vezes menor, pois ΔP é inversamente proporcional a Δh."
    ],
    "correctIndex": 1,
    "explanation": "Como ΔP = ρ·g·Δh, com ρ e g constantes, multiplicar Δh por 3 multiplica ΔP por 3.",
    "distractorAnalysis": [
      "Está incorreta: ρ e g mantêm-se, mas Δh triplica, e ΔP é proporcional a Δh.",
      "Está incorreta: ΔP = ρ·g·Δh é proporcional a Δh, e não ao seu quadrado.",
      "Está incorreta: a proporcionalidade é direta; mais desnível implica mais aumento de pressão."
    ],
    "nursingApplication": "Ao subir o saco de soro, a pressão hidrostática ρ·g·Δh à entrada da veia aumenta na mesma proporção do desnível."
  },
  {
    "id": 4086,
    "topicId": 4,
    "question": "Duas sondas são mergulhadas na vertical, ambas com 10 cm de desnível, uma em água e outra em mercúrio (ρ = 13 600 kg/m³). Em qual delas é maior o aumento de pressão e porquê?",
    "options": [
      "Na água, pois é um líquido mais leve e a pressão transmite-se melhor.",
      "É igual nos dois, pois o desnível é o mesmo.",
      "No mercúrio, pois ΔP é proporcional à massa volúmica.",
      "Na água, pois ocupa mais volume por unidade de massa."
    ],
    "correctIndex": 2,
    "explanation": "ΔP = ρ·g·Δh: para o mesmo Δh e o mesmo g, o líquido de maior massa volúmica tem maior aumento de pressão.",
    "distractorAnalysis": [
      "Está incorreta: a leveza não aumenta ΔP; para o mesmo Δh, quanto maior ρ, maior ΔP.",
      "Está incorreta: ΔP depende também de ρ, e o mercúrio é cerca de 13,6 vezes mais denso do que a água.",
      "Está incorreta: o volume por unidade de massa é o inverso da massa volúmica e não aumenta ΔP."
    ],
    "nursingApplication": "O valor em mmHg associado a uma coluna de líquido depende do líquido, pelo que colunas iguais de soro e de sangue (ρ maior) correspondem a pressões diferentes."
  },
  {
    "id": 4087,
    "topicId": 4,
    "question": "Um copo com água é inclinado lentamente e depois mantido parado. Como fica a superfície livre da água, uma vez em repouso?",
    "options": [
      "Inclinada, paralela ao fundo do copo.",
      "Plana e perpendicular às paredes do copo.",
      "Curva, mais alta no lado do copo que está mais baixo.",
      "Plana e horizontal, como antes de o inclinar."
    ],
    "correctIndex": 3,
    "explanation": "Em equilíbrio, pontos ao mesmo nível têm a mesma pressão; isto só acontece se a superfície livre for plana e horizontal.",
    "distractorAnalysis": [
      "Está incorreta: se a superfície estivesse inclinada, pontos ao mesmo nível teriam pressões diferentes e o líquido escoaria.",
      "Está incorreta: a superfície livre não depende da inclinação das paredes, mas do equilíbrio das pressões.",
      "Está incorreta: em equilíbrio, a superfície livre é plana e não curva."
    ],
    "nursingApplication": "Ao medir um volume num copo graduado ou num saco de drenagem, o enfermeiro coloca-o numa superfície horizontal e lê ao nível dos olhos, porque a superfície livre do líquido fica sempre horizontal."
  },
  {
    "id": 4088,
    "topicId": 4,
    "question": "Um estudante mede a diferença de pressão entre dois pontos separados por Δh = 0,20 m num tanque com água em repouso. Que alteração faria aumentar essa diferença, mantendo Δh?",
    "options": [
      "Substituir a água por um líquido de maior massa volúmica.",
      "Passar a água para um recipiente mais largo.",
      "Acrescentar mais água ao tanque.",
      "Passar a água para um recipiente de outra forma."
    ],
    "correctIndex": 0,
    "explanation": "ΔP = ρ·g·Δh depende apenas da massa volúmica, de g e do desnível, e não da forma ou da quantidade de líquido.",
    "distractorAnalysis": [
      "Está incorreta: a largura do recipiente não entra em ΔP = ρ·g·Δh.",
      "Está incorreta: a quantidade total de líquido não influencia ΔP entre dois pontos com o mesmo desnível.",
      "Está incorreta: a forma do recipiente não altera ΔP, que só depende de ρ, g e Δh."
    ],
    "nursingApplication": "Com o mesmo desnível, uma unidade de sangue (ρ ≈ 1060 kg/m³) exerce um pouco mais de pressão à entrada da veia do que o soro fisiológico (ρ ≈ 1000 kg/m³)."
  },
  {
    "id": 4089,
    "topicId": 4,
    "question": "Três pontos A, B e C, no mesmo líquido em repouso, estão a 10 cm, 30 cm e 20 cm de profundidade, respetivamente. Qual é a ordenação correta das pressões?",
    "options": [
      "P<sub>A</sub> > P<sub>C</sub> > P<sub>B</sub>",
      "P<sub>B</sub> > P<sub>C</sub> > P<sub>A</sub>",
      "P<sub>A</sub> = P<sub>B</sub> = P<sub>C</sub>",
      "P<sub>C</sub> > P<sub>B</sub> > P<sub>A</sub>"
    ],
    "correctIndex": 1,
    "explanation": "A pressão no interior de um líquido em equilíbrio aumenta com a profundidade; B (30 cm) é o mais fundo e A (10 cm) o menos fundo.",
    "distractorAnalysis": [
      "Está incorreta: ordena as pressões da menor profundidade para a maior, quando a pressão aumenta com a profundidade.",
      "Está incorreta: só pontos à mesma profundidade têm a mesma pressão.",
      "Está incorreta: coloca C acima de B, mas B (30 cm) está mais fundo do que C (20 cm) e tem maior pressão."
    ],
    "nursingApplication": "Num doente de pé, um vaso do tornozelo, mais abaixo, está a maior pressão hidrostática do que um vaso da coxa."
  },
  {
    "id": 4090,
    "topicId": 4,
    "question": "Um estudante afirma que, na lei fundamental da hidrostática, o termo ρ·g·Δh é «o peso do líquido». Qual é a interpretação física correta desse termo?",
    "options": [
      "O aumento de pressão devido à coluna de líquido entre os pontos.",
      "A força total que o líquido exerce sobre o fundo do recipiente.",
      "A pressão que existe no ponto menos fundo.",
      "O peso do líquido existente no recipiente inteiro."
    ],
    "correctIndex": 0,
    "explanation": "ρ·g·Δh é o acréscimo de pressão associado à coluna de líquido de altura Δh entre os dois pontos, e tem unidades de pressão (N/m² = Pa).",
    "distractorAnalysis": [
      "Está incorreta: ρ·g·Δh é uma pressão, em N/m², e não uma força em N.",
      "Está incorreta: esta é P<sub>1</sub>; o termo ρ·g·Δh é só o acréscimo ao passar para o ponto mais fundo.",
      "Está incorreta: o termo refere-se à coluna entre os dois pontos e a unidade é a de pressão, e não a de um peso."
    ],
    "nursingApplication": "Para prever a pressão que o soro exerce no cateter, o enfermeiro pensa em termos da coluna de líquido entre a superfície do saco e a veia."
  },
  {
    "id": 4091,
    "topicId": 4,
    "question": "Um recipiente com água (ρ = 1000 kg/m³; g = 9,8 m/s²) tem dois pontos em repouso com 2,5 m de desnível vertical. Qual é a diferença de pressão entre eles?",
    "options": [
      "2500 Pa",
      "24,5 Pa",
      "3920 Pa",
      "24 500 Pa"
    ],
    "correctIndex": 3,
    "explanation": "ΔP = ρ·g·Δh, com o desnível vertical entre os pontos.",
    "solution": [
      "Dados: ρ = 1000 kg/m³; g = 9,8 m/s²; Δh = 2,5 m.",
      "Fórmula: ΔP = ρ·g·Δh.",
      "Substituição: ΔP = 1000 × 9,8 × 2,5.",
      "Resultado: 24 500 Pa"
    ],
    "distractorAnalysis": [
      "Está incorreta: esqueceu o fator g; calculou ρ·Δh.",
      "Está incorreta: usou ρ = 1 (g/cm³) sem converter para kg/m³.",
      "Está incorreta: dividiu por Δh em vez de multiplicar."
    ],
    "nursingApplication": "Ao estimar a pressão no fundo de uma tina de água para imersão de um membro, o enfermeiro sabe que ela cresce linearmente com a profundidade."
  },
  {
    "id": 4092,
    "topicId": 4,
    "question": "Num líquido de massa volúmica 1000 kg/m³ (g = 9,8 m/s²), a pressão num ponto 1 é de 12 kPa. Qual é a pressão num ponto 2, situado 0,60 m mais fundo, na vertical?",
    "options": [
      "6,12 kPa",
      "5,88 kPa",
      "17,9 kPa",
      "5892 kPa"
    ],
    "correctIndex": 2,
    "explanation": "Como o ponto 2 é o mais fundo, P<sub>2</sub> = P<sub>1</sub> + ρ·g·Δh.",
    "solution": [
      "Dados: P<sub>1</sub> = 12 kPa = 12 000 Pa; ρ = 1000 kg/m³; g = 9,8 m/s²; Δh = 0,60 m.",
      "Fórmula: P<sub>2</sub> = P<sub>1</sub> + ρ·g·Δh.",
      "Substituição: P<sub>2</sub> = 12 000 + 1000 × 9,8 × 0,60 = 12 000 + 5880.",
      "Resultado: 17,9 kPa"
    ],
    "distractorAnalysis": [
      "Está incorreta: subtraiu ρ·g·Δh, como se o ponto 2 fosse menos fundo.",
      "Está incorreta: calculou só ΔP e esqueceu de somar P<sub>1</sub>.",
      "Está incorreta: somou 12 kPa com 5880 Pa sem converter as unidades."
    ],
    "nursingApplication": "Ao calcular a pressão num ponto de um circuito de líquido a partir de um ponto de referência, o enfermeiro soma o termo hidrostático quando o ponto está mais abaixo."
  },
  {
    "id": 4093,
    "topicId": 4,
    "question": "Entre dois pontos de uma massa de água em repouso (ρ = 1000 kg/m³; g = 9,8 m/s²) mede-se uma diferença de pressão de 4900 Pa. Qual é o desnível vertical entre eles?",
    "options": [
      "4,9 m",
      "500 m",
      "50 m",
      "0,50 m"
    ],
    "correctIndex": 3,
    "explanation": "De ΔP = ρ·g·Δh obtém-se Δh = ΔP/(ρ·g).",
    "solution": [
      "Dados: ΔP = 4900 Pa; ρ = 1000 kg/m³; g = 9,8 m/s².",
      "Fórmula: Δh = ΔP/(ρ·g).",
      "Substituição: Δh = 4900/(1000 × 9,8).",
      "Resultado: 0,50 m"
    ],
    "distractorAnalysis": [
      "Está incorreta: esqueceu o fator g; calculou ΔP/ρ.",
      "Está incorreta: dividiu só por g e esqueceu a massa volúmica.",
      "Está incorreta: o valor 50 está em cm, mas foi indicado em metros."
    ],
    "nursingApplication": "Num sistema de drenagem por gravidade, o enfermeiro pode relacionar a pressão desejada à entrada com o desnível entre o líquido e o ponto de drenagem."
  },
  {
    "id": 4094,
    "topicId": 4,
    "question": "Num líquido em repouso, a pressão aumenta 4410 Pa quando se desce 0,50 m na vertical (g = 9,8 m/s²). Qual é a massa volúmica do líquido?",
    "options": [
      "450 kg/m³",
      "8820 kg/m³",
      "900 kg/m³",
      "21 609 kg/m³"
    ],
    "correctIndex": 2,
    "explanation": "De ΔP = ρ·g·Δh obtém-se ρ = ΔP/(g·Δh).",
    "solution": [
      "Dados: ΔP = 4410 Pa; Δh = 0,50 m; g = 9,8 m/s².",
      "Fórmula: ρ = ΔP/(g·Δh).",
      "Substituição: ρ = 4410/(9,8 × 0,50).",
      "Resultado: 900 kg/m³"
    ],
    "distractorAnalysis": [
      "Está incorreta: esqueceu de dividir por Δh; calculou ΔP/g.",
      "Está incorreta: esqueceu de dividir por g; calculou ΔP/Δh.",
      "Está incorreta: multiplicou por g e Δh em vez de dividir."
    ],
    "nursingApplication": "Como o sangue (ρ ≈ 1060 kg/m³) é um pouco mais denso do que a água, a mesma coluna vertical de sangue produz uma diferença de pressão ligeiramente maior."
  },
  {
    "id": 4095,
    "topicId": 4,
    "question": "Uma coluna de mercúrio (ρ = 13 600 kg/m³; g = 9,8 m/s²) tem 25 cm de desnível vertical. Qual é a diferença de pressão entre os extremos, em mmHg (1 mmHg ≈ 133,3 Pa)?",
    "options": [
      "250 mmHg",
      "33 320 mmHg",
      "1000 mmHg",
      "18,4 mmHg"
    ],
    "correctIndex": 0,
    "explanation": "ΔP = ρ·g·Δh em Pa e, depois, divide-se por 133,3 Pa/mmHg para obter mmHg.",
    "solution": [
      "Dados: ρ = 13 600 kg/m³; g = 9,8 m/s²; Δh = 25 cm.",
      "Conversão: Δh = 0,25 m; 1 mmHg ≈ 133,3 Pa.",
      "Fórmula: ΔP = ρ·g·Δh.",
      "Substituição: ΔP = 13 600 × 9,8 × 0,25 = 33 320 Pa; 33 320/133,3.",
      "Resultado: 250 mmHg"
    ],
    "distractorAnalysis": [
      "Está incorreta: deixou o valor em Pa e indicou mmHg, sem dividir por 133,3.",
      "Está incorreta: usou Δh = 1 m em vez de 0,25 m.",
      "Está incorreta: usou a massa volúmica da água em vez da do mercúrio."
    ],
    "nursingApplication": "A unidade mmHg usada para a tensão arterial deriva de colunas de mercúrio; a conversão para Pa depende da massa volúmica do mercúrio."
  },
  {
    "id": 4096,
    "topicId": 4,
    "question": "Dois pontos de uma coluna de água em repouso (ρ = 1000 kg/m³; g = 9,8 m/s²) distam 35 cm na vertical. Qual é a diferença de pressão em mmHg (1 mmHg ≈ 133,3 Pa)?",
    "options": [
      "3430 mmHg",
      "25,7 mmHg",
      "2570 mmHg",
      "457 000 mmHg"
    ],
    "correctIndex": 1,
    "explanation": "Calcula-se ΔP em Pa com ρ·g·Δh e converte-se dividindo por 133,3 Pa/mmHg.",
    "solution": [
      "Dados: ρ = 1000 kg/m³; g = 9,8 m/s²; Δh = 35 cm.",
      "Conversão: Δh = 0,35 m; 1 mmHg ≈ 133,3 Pa.",
      "Fórmula: ΔP = ρ·g·Δh.",
      "Substituição: ΔP = 1000 × 9,8 × 0,35 = 3430 Pa; 3430/133,3.",
      "Resultado: 25,7 mmHg"
    ],
    "distractorAnalysis": [
      "Está incorreta: deixou o valor em Pa e escreveu mmHg, sem dividir por 133,3.",
      "Está incorreta: usou Δh = 35 m, sem converter os centímetros.",
      "Está incorreta: multiplicou por 133,3 em vez de dividir."
    ],
    "nursingApplication": "Ao comparar a pressão de uma coluna de soro com valores de pressão venosa dados em mmHg, o enfermeiro precisa de converter as unidades."
  },
  {
    "id": 4097,
    "topicId": 4,
    "question": "Num líquido de massa volúmica 1200 kg/m³ (g = 9,8 m/s²), a pressão num ponto 1 é de 5,0 kPa. Qual é a pressão num ponto 2, situado 0,40 m mais fundo?",
    "options": [
      "4,70 kPa",
      "0,296 kPa",
      "9,70 kPa",
      "4709 kPa"
    ],
    "correctIndex": 2,
    "explanation": "Como o ponto 2 está mais fundo, P<sub>2</sub> = P<sub>1</sub> + ρ·g·Δh; o resultado exprime-se em kPa dividindo por 1000.",
    "solution": [
      "Dados: P<sub>1</sub> = 5,0 kPa = 5000 Pa; ρ = 1200 kg/m³; g = 9,8 m/s²; Δh = 0,40 m.",
      "Fórmula: P<sub>2</sub> = P<sub>1</sub> + ρ·g·Δh.",
      "Substituição: P<sub>2</sub> = 5000 + 1200 × 9,8 × 0,40 = 5000 + 4704.",
      "Resultado: 9,70 kPa"
    ],
    "distractorAnalysis": [
      "Está incorreta: calculou só ΔP e esqueceu de somar P<sub>1</sub>.",
      "Está incorreta: subtraiu ρ·g·Δh, como se o ponto 2 fosse menos fundo.",
      "Está incorreta: somou 5,0 kPa com 4704 Pa sem converter as unidades."
    ],
    "nursingApplication": "Para prever a pressão num ponto mais baixo de um circuito de líquido, o enfermeiro tem de acrescentar a pressão hidrostática ao valor do ponto de referência."
  },
  {
    "id": 4098,
    "topicId": 4,
    "question": "Numa massa de água em repouso (ρ = 1000 kg/m³; g = 9,8 m/s²), a pressão aumenta 2,0 kPa entre dois pontos. Qual é o desnível vertical entre eles?",
    "options": [
      "20,4 cm",
      "200 cm",
      "0,204 cm",
      "204 cm"
    ],
    "correctIndex": 0,
    "explanation": "Δh = ΔP/(ρ·g), com ΔP em Pa; o resultado em metros converte-se para centímetros.",
    "solution": [
      "Dados: ΔP = 2,0 kPa; ρ = 1000 kg/m³; g = 9,8 m/s².",
      "Conversão: ΔP = 2000 Pa.",
      "Fórmula: Δh = ΔP/(ρ·g).",
      "Substituição: Δh = 2000/(1000 × 9,8) = 0,204 m.",
      "Resultado: 20,4 cm"
    ],
    "distractorAnalysis": [
      "Está incorreta: esqueceu o fator g; calculou ΔP/ρ.",
      "Está incorreta: o valor 0,204 está em metros, mas foi indicado em centímetros.",
      "Está incorreta: converteu 2,0 kPa em 20 000 Pa em vez de 2000 Pa."
    ],
    "nursingApplication": "Ao estimar que altura de coluna de líquido produz uma dada pressão numa linha de perfusão, o enfermeiro converte kPa em Pa antes de calcular."
  },
  {
    "id": 4099,
    "topicId": 4,
    "question": "Um utente está de pé e imóvel. Considerando o sangue em equilíbrio hidrostático, como se ordenam as pressões em vasos do pé, do coração e do cérebro?",
    "options": [
      "Cérebro > coração > pé",
      "Pé > coração > cérebro",
      "Coração > pé > cérebro",
      "São iguais nas três zonas do corpo"
    ],
    "correctIndex": 1,
    "explanation": "A pressão num vaso é a criada pelo coração ± ρ·g·Δh do desnível ao coração. De pé, é maior nos membros inferiores (abaixo) e menor no cérebro (acima).",
    "distractorAnalysis": [
      "Está incorreta: inverte a ordem; o cérebro está acima do coração e a gravidade retira pressão hidrostática, e não a acrescenta.",
      "Está incorreta: o pé está abaixo do coração e a coluna de sangue acrescenta ρ·g·Δh, pelo que a sua pressão excede a do coração.",
      "Está incorreta: a pressão num vaso é a criada pelo coração mais ou menos a pressão hidrostática do desnível."
    ],
    "nursingApplication": "Na medição da tensão arterial, o braço fica apoiado ao nível do coração, porque abaixo desse nível o valor lido aumenta e acima dele diminui."
  },
  {
    "id": 4100,
    "topicId": 4,
    "question": "Um utente passa da posição de pé para deitado numa maca. Com o sangue em equilíbrio hidrostático, porque ficam semelhantes as pressões na cabeça, no coração e nos pés?",
    "options": [
      "Porque o coração deixa de criar pressão na posição horizontal.",
      "Porque o sangue deixa de ter peso quando o corpo está deitado.",
      "Porque a massa volúmica do sangue diminui na posição horizontal.",
      "Porque o desnível entre essas zonas é pequeno e ρ·g·Δh também."
    ],
    "correctIndex": 3,
    "explanation": "Deitado, o desnível entre as várias partes do corpo é pequeno, pelo que a parcela ρ·g·Δh é pequena e as pressões ficam semelhantes.",
    "distractorAnalysis": [
      "Está incorreta: o coração continua a criar pressão; o que muda é o termo hidrostático, que quase desaparece.",
      "Está incorreta: o peso do sangue mantém-se; o que diminui é o desnível entre as zonas do corpo.",
      "Está incorreta: a massa volúmica do sangue não depende da posição; muda Δh, e não ρ."
    ],
    "nursingApplication": "Um utente com tonturas ao levantar pode ser deitado, pois na horizontal as diferenças de pressão hidrostática entre cabeça, coração e pés são pequenas."
  },
  {
    "id": 4101,
    "topicId": 4,
    "question": "O enfermeiro mede a tensão arterial com o braço do utente pendente, abaixo do nível do coração. Comparado com a medição com o braço ao nível do coração, o valor tende a ser:",
    "options": [
      "Menor, pois o sangue perde pressão ao afastar-se do coração.",
      "Igual, pois a pressão é criada apenas pelo coração.",
      "Maior, pois soma-se a pressão da coluna de sangue entre o coração e o braço.",
      "Menor, pois o braço fica mais longe do cérebro."
    ],
    "correctIndex": 2,
    "explanation": "Abaixo do coração, a pressão num vaso é a criada pelo coração mais ρ·g·Δh. Por isso, a tensão arterial se mede com o braço à altura do coração.",
    "distractorAnalysis": [
      "Está incorreta: abaixo do coração a gravidade acrescenta pressão hidrostática, e não a retira.",
      "Está incorreta: a pressão no braço é a do coração ± ρ·g·Δh; só é igual se Δh = 0.",
      "Está incorreta: a referência é o coração e o braço está abaixo dele, logo soma-se pressão."
    ],
    "nursingApplication": "Se o braço do utente estiver pendente fora da cama durante a medição, o enfermeiro apoia-o ao nível do coração para evitar uma leitura excessiva."
  },
  {
    "id": 4102,
    "topicId": 4,
    "question": "Durante uma medição da tensão arterial, o utente mantém o braço apoiado numa almofada alta, claramente acima do nível do coração. Em relação à medição com o braço ao nível do coração, o valor lido tende a ser:",
    "options": [
      "Maior, pois a pressão aumenta quanto mais alto está o braço.",
      "Igual, pois o sangue circula e a gravidade não atua nele.",
      "Maior, pois o braço fica mais perto do cérebro.",
      "Menor, pois a coluna de sangue entre o coração e o braço retira pressão."
    ],
    "correctIndex": 3,
    "explanation": "Acima do coração, a pressão num vaso é a criada pelo coração menos ρ·g·Δh; uma medição com o braço elevado dá um valor subestimado.",
    "distractorAnalysis": [
      "Está incorreta: acima do coração, a pressão diminui em ρ·g·Δh, e não aumenta.",
      "Está incorreta: o sangue circula, mas a gravidade continua a acrescentar ou retirar a pressão hidrostática.",
      "Está incorreta: a proximidade do cérebro não conta; o que importa é o desnível ao coração, e acima dele a pressão diminui."
    ],
    "nursingApplication": "Antes de medir a tensão arterial a um utente sentado, o enfermeiro confirma que o braço está apoiado à altura do coração, e não sobre uma almofada alta."
  },
  {
    "id": 4103,
    "topicId": 4,
    "question": "Um utente está de pé, com o coração 1,10 m acima dos pés, e a pressão no coração é de 95 mmHg. Considere o sangue em equilíbrio hidrostático (ρ = 1060 kg/m³; g = 9,8 m/s²; 1 mmHg ≈ 133,3 Pa). Qual é a pressão nos pés?",
    "options": [
      "181 mmHg",
      "9,3 mmHg",
      "85,7 mmHg",
      "11 522 mmHg"
    ],
    "correctIndex": 0,
    "explanation": "Abaixo do coração soma-se a pressão hidrostática: P<sub>pés</sub> = P<sub>coração</sub> + ρ·g·Δh.",
    "solution": [
      "Dados: ρ = 1060 kg/m³; g = 9,8 m/s²; Δh = 1,10 m; P<sub>coração</sub> = 95 mmHg; 1 mmHg ≈ 133,3 Pa.",
      "Fórmula: P<sub>pés</sub> = P<sub>coração</sub> + ρ·g·Δh.",
      "Substituição: ΔP = 1060 × 9,8 × 1,10 = 11 427 Pa = 85,7 mmHg; P<sub>pés</sub> = 95 + 85,7.",
      "Resultado: 181 mmHg"
    ],
    "distractorAnalysis": [
      "Está incorreta: subtraiu ΔP; abaixo do coração a pressão hidrostática soma-se.",
      "Está incorreta: calculou só ΔP e esqueceu de somar a pressão no coração.",
      "Está incorreta: somou 95 mmHg com ΔP em Pa sem converter."
    ],
    "nursingApplication": "Num utente que fica muito tempo de pé, a pressão elevada nas veias dos membros inferiores ajuda a perceber o aparecimento de inchaço no tornozelo."
  },
  {
    "id": 4104,
    "topicId": 4,
    "question": "Um utente está de pé, com o cérebro 0,40 m acima do coração, e a pressão no coração é de 100 mmHg. Considere o sangue em equilíbrio hidrostático (ρ = 1060 kg/m³; g = 9,8 m/s²; 1 mmHg ≈ 133,3 Pa). Qual é a pressão no cérebro?",
    "options": [
      "131 mmHg",
      "68,8 mmHg",
      "31,2 mmHg",
      "4255 mmHg"
    ],
    "correctIndex": 1,
    "explanation": "Acima do coração subtrai-se a pressão hidrostática: P<sub>cérebro</sub> = P<sub>coração</sub> − ρ·g·Δh.",
    "solution": [
      "Dados: ρ = 1060 kg/m³; g = 9,8 m/s²; Δh = 0,40 m; P<sub>coração</sub> = 100 mmHg; 1 mmHg ≈ 133,3 Pa.",
      "Fórmula: P<sub>cérebro</sub> = P<sub>coração</sub> − ρ·g·Δh.",
      "Substituição: ΔP = 1060 × 9,8 × 0,40 = 4155,2 Pa = 31,2 mmHg; P<sub>cérebro</sub> = 100 − 31,2.",
      "Resultado: 68,8 mmHg"
    ],
    "distractorAnalysis": [
      "Está incorreta: somou ΔP; acima do coração a pressão hidrostática subtrai-se.",
      "Está incorreta: calculou só ΔP e esqueceu de o subtrair à pressão no coração.",
      "Está incorreta: somou ΔP em Pa a 100 mmHg, sem converter e sem subtrair."
    ],
    "nursingApplication": "Num utente idoso que fica de pé de repente, a diminuição da pressão no cérebro em relação ao coração ajuda a compreender a sensação de tontura."
  },
  {
    "id": 4105,
    "topicId": 4,
    "question": "Com o braço ao nível do coração, a pressão sistólica lida é de 120 mmHg. Se o braço estiver elevado 30 cm acima do coração, qual é, aproximadamente, o valor lido? Considere o sangue em equilíbrio hidrostático (ρ = 1060 kg/m³; g = 9,8 m/s²; 1 mmHg ≈ 133,3 Pa).",
    "options": [
      "143 mmHg",
      "96,6 mmHg",
      "23,4 mmHg",
      "3236 mmHg"
    ],
    "correctIndex": 1,
    "explanation": "Com o braço 30 cm acima do coração, a pressão desce ρ·g·Δh e o valor lido é inferior ao correto.",
    "solution": [
      "Dados: P<sub>coração</sub> = 120 mmHg; Δh = 0,30 m; ρ = 1060 kg/m³; g = 9,8 m/s²; 1 mmHg ≈ 133,3 Pa.",
      "Fórmula: P<sub>braço</sub> = P<sub>coração</sub> − ρ·g·Δh.",
      "Substituição: ΔP = 1060 × 9,8 × 0,30 = 3116,4 Pa = 23,4 mmHg; P<sub>braço</sub> = 120 − 23,4.",
      "Resultado: 96,6 mmHg"
    ],
    "distractorAnalysis": [
      "Está incorreta: somou ΔP; acima do coração a pressão hidrostática subtrai-se.",
      "Está incorreta: indicou apenas a diminuição de pressão e não o valor lido.",
      "Está incorreta: somou ΔP em Pa a 120 mmHg sem converter."
    ],
    "nursingApplication": "Quando um braço fica elevado durante a medição da tensão arterial, o valor lido pode ficar abaixo do real e levar a subestimar a tensão do utente."
  },
  {
    "id": 4106,
    "topicId": 4,
    "question": "Numa pessoa de pé, um ponto do cérebro está 1,55 m acima de um ponto do pé. Considere o sangue em equilíbrio hidrostático (ρ = 1060 kg/m³; g = 9,8 m/s²; 1 mmHg ≈ 133,3 Pa). Qual é a diferença de pressão hidrostática entre esses pontos, em mmHg?",
    "options": [
      "16 101 mmHg",
      "1,21 mmHg",
      "12 100 mmHg",
      "121 mmHg"
    ],
    "correctIndex": 3,
    "explanation": "ΔP = ρ·g·Δh; em Pa e dividindo por 133,3; confirma-se por 0,78 mmHg/cm × 155 cm ≈ 121 mmHg.",
    "solution": [
      "Dados: ρ = 1060 kg/m³; g = 9,8 m/s²; Δh = 1,55 m; 1 mmHg ≈ 133,3 Pa.",
      "Fórmula: ΔP = ρ·g·Δh.",
      "Substituição: ΔP = 1060 × 9,8 × 1,55 = 16 101 Pa; 16 101/133,3.",
      "Resultado: 121 mmHg"
    ],
    "distractorAnalysis": [
      "Está incorreta: deixou o valor em Pa e escreveu mmHg, sem dividir por 133,3.",
      "Está incorreta: aplicou 0,78 mmHg por metro, quando é por cada centímetro.",
      "Está incorreta: usou Δh = 155 m em vez de 1,55 m."
    ],
    "nursingApplication": "A diferença de pressão entre o pé e a cabeça de um utente de pé explica porque o retorno venoso dos membros inferiores é mais difícil na posição vertical."
  },
  {
    "id": 4107,
    "topicId": 4,
    "question": "Usando a regra de ≈ 0,78 mmHg por cada centímetro de desnível no sangue, calcule a pressão no tornozelo de um utente de pé, estando o tornozelo 90 cm abaixo do coração, onde a pressão é de 90 mmHg (sangue em equilíbrio hidrostático).",
    "options": [
      "19,8 mmHg",
      "70,2 mmHg",
      "160 mmHg",
      "97,0 mmHg"
    ],
    "correctIndex": 2,
    "explanation": "A cada cm de desnível correspondem ≈ 0,78 mmHg; abaixo do coração soma-se ao valor do coração.",
    "solution": [
      "Dados: 0,78 mmHg/cm; Δh = 90 cm; P<sub>coração</sub> = 90 mmHg.",
      "Fórmula: P<sub>tornozelo</sub> = P<sub>coração</sub> + 0,78 × Δh (cm).",
      "Substituição: P<sub>tornozelo</sub> = 90 + 0,78 × 90 = 90 + 70,2.",
      "Resultado: 160 mmHg"
    ],
    "distractorAnalysis": [
      "Está incorreta: subtraiu a pressão hidrostática; abaixo do coração ela soma-se.",
      "Está incorreta: calculou só a pressão hidrostática e esqueceu a pressão no coração.",
      "Está incorreta: usou o desnível em decímetros, 9, em vez de 90 cm."
    ],
    "nursingApplication": "Em utentes que passam muito tempo de pé, o aumento de pressão nas veias do tornozelo é um dos fatores que contribuem para o edema dos membros inferiores ao fim do dia."
  },
  {
    "id": 4108,
    "topicId": 4,
    "question": "Num utente de pé, o cérebro está 0,35 m acima do coração. Considere o sangue em equilíbrio hidrostático (ρ = 1060 kg/m³; g = 9,8 m/s²; 1 mmHg ≈ 133,3 Pa). Qual é a diminuição de pressão hidrostática do coração ao cérebro, em kPa?",
    "options": [
      "3,64 kPa",
      "3636 kPa",
      "27,3 kPa",
      "36,4 kPa"
    ],
    "correctIndex": 0,
    "explanation": "ΔP = ρ·g·Δh em Pa; 1 kPa = 1000 Pa.",
    "solution": [
      "Dados: ρ = 1060 kg/m³; g = 9,8 m/s²; Δh = 0,35 m.",
      "Fórmula: ΔP = ρ·g·Δh.",
      "Substituição: ΔP = 1060 × 9,8 × 0,35 = 3635,8 Pa = 3,64 kPa.",
      "Resultado: 3,64 kPa"
    ],
    "distractorAnalysis": [
      "Está incorreta: deixou o valor em Pa e escreveu kPa, sem dividir por 1000.",
      "Está incorreta: converteu para mmHg, mas indicou kPa.",
      "Está incorreta: dividiu por 100 em vez de 1000 na conversão para kPa."
    ],
    "nursingApplication": "Ao interpretar valores de pressão em diferentes unidades, o enfermeiro converte Pa, kPa e mmHg para comparar a pressão no cérebro com a do coração."
  },
  {
    "id": 4109,
    "topicId": 4,
    "question": "Com a regra de ≈ 0,78 mmHg por cada centímetro de desnível no sangue (em equilíbrio hidrostático), a que desnível vertical corresponde uma variação de pressão de 15,6 mmHg?",
    "options": [
      "12,2 cm",
      "16,4 cm",
      "200 cm",
      "20 cm"
    ],
    "correctIndex": 3,
    "explanation": "Cada centímetro corresponde a ≈ 0,78 mmHg; o desnível obtém-se dividindo a variação de pressão por 0,78 mmHg/cm.",
    "solution": [
      "Dados: ΔP = 15,6 mmHg; 0,78 mmHg por cm.",
      "Fórmula: Δh = ΔP/(0,78 mmHg/cm).",
      "Substituição: Δh = 15,6/0,78.",
      "Resultado: 20 cm"
    ],
    "distractorAnalysis": [
      "Está incorreta: multiplicou 15,6 por 0,78 em vez de dividir.",
      "Está incorreta: somou os dois valores, quando são grandezas de tipos diferentes e se divide.",
      "Está incorreta: usou 0,078 mmHg/cm em vez de 0,78 mmHg/cm."
    ],
    "nursingApplication": "Estimar que desnível causa uma certa variação de pressão ajuda a perceber o efeito de elevar ou baixar um membro do utente em relação ao coração."
  },
  {
    "id": 4110,
    "topicId": 4,
    "question": "Um utente está deitado numa maca e o calcanhar está 0,15 m abaixo do nível do coração. Considere o sangue em equilíbrio hidrostático (ρ = 1060 kg/m³; g = 9,8 m/s²; 1 mmHg ≈ 133,3 Pa). Qual é a diferença de pressão hidrostática entre o coração e o calcanhar?",
    "options": [
      "11,7 mmHg",
      "1558 mmHg",
      "101 mmHg",
      "1,17 mmHg"
    ],
    "correctIndex": 0,
    "explanation": "ΔP = ρ·g·Δh é pequeno quando o desnível é pequeno; deitado, as pressões ficam semelhantes.",
    "solution": [
      "Dados: ρ = 1060 kg/m³; g = 9,8 m/s²; Δh = 0,15 m; 1 mmHg ≈ 133,3 Pa.",
      "Fórmula: ΔP = ρ·g·Δh.",
      "Substituição: ΔP = 1060 × 9,8 × 0,15 = 1558,2 Pa; 1558,2/133,3.",
      "Resultado: 11,7 mmHg"
    ],
    "distractorAnalysis": [
      "Está incorreta: deixou o valor em Pa e escreveu mmHg, sem dividir por 133,3.",
      "Está incorreta: usou o desnível de 1,30 m típico de um utente de pé, em vez de 0,15 m.",
      "Está incorreta: usou Δh = 0,015 m em vez de 0,15 m."
    ],
    "nursingApplication": "A diferença reduzida entre o coração e o calcanhar com o utente deitado ajuda a perceber porque a pressão nos pés é muito inferior à que existe quando o utente está de pé."
  },
  {
    "id": 4111,
    "topicId": 4,
    "question": "O saco de soro foi pousado na cama, ao nível da veia do utente, e o enfermeiro vê sangue a subir no sistema. Qual é a explicação física mais adequada?",
    "options": [
      "O soro perde massa volúmica quando o saco está pousado.",
      "A pressão do soro à entrada da veia é maior, pois o saco está mais perto.",
      "Sem desnível, ρ·g·h é praticamente nulo e a pressão do soro não supera a venosa.",
      "O volume do saco, que ficou menor, diminui a pressão à entrada."
    ],
    "correctIndex": 2,
    "explanation": "A pressão do soro à entrada da veia vem de ρ·g·h, com h o desnível. Com h ≈ 0, essa pressão é pequena: o caudal diminui ou o sangue pode refluir.",
    "distractorAnalysis": [
      "Está incorreta: a massa volúmica do soro não depende da posição do saco; muda o desnível h.",
      "Está incorreta: a pressão à entrada aumenta com o desnível, pelo que, ao nível da veia, não aumenta.",
      "Está incorreta: o volume do saco não conta; só importa o desnível entre a superfície do soro e a veia."
    ],
    "nursingApplication": "Se o sangue refluir para o sistema de soro, o enfermeiro eleva o saco acima do nível da veia."
  },
  {
    "id": 4112,
    "topicId": 4,
    "question": "Dois sacos de soro, um de 250 mL e outro de 1000 mL, são pendurados de modo que a superfície do soro fique à mesma altura acima da veia de cada utente. O que se pode concluir quanto à pressão do soro à entrada da veia?",
    "options": [
      "É maior no saco de 1000 mL, pois tem mais soro a pesar.",
      "É igual nos dois, pois depende do desnível e não da quantidade de soro.",
      "É maior no saco de 250 mL, pois o soro está mais concentrado.",
      "Não é possível comparar sem conhecer a largura de cada saco."
    ],
    "correctIndex": 1,
    "explanation": "ΔP = ρ·g·h entre a superfície do soro e a veia. O volume do saco não entra na expressão.",
    "distractorAnalysis": [
      "Está incorreta: a pressão depende do desnível e da massa volúmica, e não do volume total do saco.",
      "Está incorreta: a quantidade de soro não altera a massa volúmica nem o desnível, logo não altera a pressão.",
      "Está incorreta: a largura do saco não entra em ΔP = ρ·g·h; basta o desnível e a massa volúmica."
    ],
    "nursingApplication": "Ao trocar um saco de 1000 mL por um de 500 mL, o enfermeiro mantém a superfície do soro à altura anterior, para a pressão à entrada da veia ser igual."
  },
  {
    "id": 4113,
    "topicId": 4,
    "question": "O caudal de um soro está abaixo do pretendido e o enfermeiro quer aumentá-lo sem trocar o soro nem o cateter. Que alteração produz esse efeito?",
    "options": [
      "Baixar o saco, para a pressão à entrada da veia diminuir.",
      "Subir o saco, para aumentar o desnível e a pressão à entrada da veia.",
      "Trocar por um saco de maior volume, com a mesma altura da superfície.",
      "Pousar o saco ao nível da veia, para ficar mais estável."
    ],
    "correctIndex": 1,
    "explanation": "Um desnível maior dá mais pressão à entrada da veia e, portanto, mais caudal.",
    "distractorAnalysis": [
      "Está incorreta: baixar o saco reduz o desnível e a pressão à entrada, e o caudal diminui.",
      "Está incorreta: o volume do saco não altera a pressão à entrada da veia nem o caudal.",
      "Está incorreta: sem desnível, a pressão do soro é baixa e o caudal é pequeno ou nulo."
    ],
    "nursingApplication": "Num utente com um soro de caudal baixo, uma das primeiras verificações do enfermeiro é a altura do saco relativamente à veia."
  },
  {
    "id": 4114,
    "topicId": 4,
    "question": "Um utente com soro a correr levanta o braço, subindo a veia 30 cm, sem que o saco se mova. O que acontece ao desnível entre a superfície do soro e a veia e à pressão do soro à entrada da veia?",
    "options": [
      "O desnível e a pressão aumentam.",
      "O desnível mantém-se, porque o saco não se moveu.",
      "O desnível e a pressão diminuem.",
      "O desnível diminui, mas a pressão fica igual."
    ],
    "correctIndex": 2,
    "explanation": "O desnível h é medido entre a superfície do soro e a veia; subir a veia reduz h e, por isso, ρ·g·h.",
    "distractorAnalysis": [
      "Está incorreta: com a veia mais alta e o saco parado, a superfície do soro fica menos acima da veia, e o desnível diminui.",
      "Está incorreta: o desnível conta-se entre a superfície do soro e a veia, e a veia subiu.",
      "Está incorreta: a pressão à entrada é ρ·g·h e diminui com h."
    ],
    "nursingApplication": "Ao pedir a um utente com soro para não elevar o braço, o enfermeiro evita a diminuição do caudal por redução do desnível até ao saco."
  },
  {
    "id": 4115,
    "topicId": 4,
    "question": "Um saco de soro fisiológico (ρ = 1000 kg/m³; g = 9,8 m/s²) está pendurado de modo que a superfície do soro fique 1,5 m acima da veia. Qual é a diferença de pressão entre a superfície do soro e a veia?",
    "options": [
      "14 700 Pa",
      "1500 Pa",
      "14,7 Pa",
      "6533 Pa"
    ],
    "correctIndex": 0,
    "explanation": "ΔP = ρ·g·h entre a superfície do soro e a veia.",
    "solution": [
      "Dados: ρ = 1000 kg/m³; g = 9,8 m/s²; h = 1,5 m.",
      "Fórmula: ΔP = ρ·g·h.",
      "Substituição: ΔP = 1000 × 9,8 × 1,5.",
      "Resultado: 14 700 Pa"
    ],
    "distractorAnalysis": [
      "Está incorreta: esqueceu o fator g; calculou ρ·h.",
      "Está incorreta: usou ρ = 1 (g/cm³) sem converter para kg/m³.",
      "Está incorreta: dividiu por h em vez de multiplicar."
    ],
    "nursingApplication": "Ao pendurar um saco de soro mais alto para aumentar o caudal, o enfermeiro aumenta a pressão do soro à entrada da veia."
  },
  {
    "id": 4116,
    "topicId": 4,
    "question": "A superfície do soro (ρ = 1000 kg/m³; g = 9,8 m/s²) está 0,80 m acima da veia. Qual é a diferença de pressão entre a superfície e a veia, em mmHg (1 mmHg ≈ 133,3 Pa)?",
    "options": [
      "7840 mmHg",
      "5880 mmHg",
      "1 050 000 mmHg",
      "58,8 mmHg"
    ],
    "correctIndex": 3,
    "explanation": "ΔP = ρ·g·h em Pa e, depois, divide-se por 133,3 Pa/mmHg.",
    "solution": [
      "Dados: ρ = 1000 kg/m³; g = 9,8 m/s²; h = 0,80 m; 1 mmHg ≈ 133,3 Pa.",
      "Fórmula: ΔP = ρ·g·h.",
      "Substituição: ΔP = 1000 × 9,8 × 0,80 = 7840 Pa; 7840/133,3.",
      "Resultado: 58,8 mmHg"
    ],
    "distractorAnalysis": [
      "Está incorreta: deixou o valor em Pa e escreveu mmHg, sem dividir por 133,3.",
      "Está incorreta: usou h = 80 m, sem converter 80 cm.",
      "Está incorreta: multiplicou por 133,3 em vez de dividir."
    ],
    "nursingApplication": "Para comparar a pressão do soro com a pressão venosa, que se exprime em mmHg, o enfermeiro converte o valor obtido em Pa."
  },
  {
    "id": 4117,
    "topicId": 4,
    "question": "Um enfermeiro baixa o saco de soro (ρ = 1000 kg/m³; g = 9,8 m/s²), passando a superfície do soro de 1,8 m para 1,1 m acima da veia. Em quanto diminui a pressão do soro à entrada da veia?",
    "options": [
      "17 640 Pa",
      "6860 Pa",
      "10 780 Pa",
      "700 Pa"
    ],
    "correctIndex": 1,
    "explanation": "A variação é ρ·g·Δh, com Δh = 1,8 − 1,1 = 0,7 m.",
    "solution": [
      "Dados: ρ = 1000 kg/m³; g = 9,8 m/s²; h<sub>1</sub> = 1,8 m; h<sub>2</sub> = 1,1 m.",
      "Fórmula: ΔP = ρ·g·(h<sub>1</sub> − h<sub>2</sub>).",
      "Substituição: ΔP = 1000 × 9,8 × (1,8 − 1,1) = 1000 × 9,8 × 0,7.",
      "Resultado: 6860 Pa"
    ],
    "distractorAnalysis": [
      "Está incorreta: calculou apenas ΔP da altura inicial, 1,8 m, e não a diferença.",
      "Está incorreta: calculou apenas ΔP da altura final, 1,1 m, e não a diferença.",
      "Está incorreta: esqueceu o fator g; calculou ρ·Δh."
    ],
    "nursingApplication": "Ao baixar o saco de soro, o enfermeiro sabe que a pressão à entrada da veia diminui e, com ela, o caudal."
  },
  {
    "id": 4118,
    "topicId": 4,
    "question": "Numa veia, a pressão é de 15 mmHg. Qual é a altura mínima da superfície do soro (ρ = 1000 kg/m³; g = 9,8 m/s²) acima da veia para a pressão hidrostática do soro exceder 15 mmHg (1 mmHg ≈ 133,3 Pa)?",
    "options": [
      "200 cm",
      "153 cm",
      "2,04 cm",
      "20,4 cm"
    ],
    "correctIndex": 3,
    "explanation": "Converte-se 15 mmHg em Pa e usa-se h = P/(ρ·g).",
    "solution": [
      "Dados: P<sub>veia</sub> = 15 mmHg; ρ = 1000 kg/m³; g = 9,8 m/s².",
      "Conversão: 15 × 133,3 = 1999,5 Pa.",
      "Fórmula: h<sub>mín</sub> = P/(ρ·g).",
      "Substituição: h<sub>mín</sub> = 1999,5/(1000 × 9,8) = 0,204 m.",
      "Resultado: 20,4 cm"
    ],
    "distractorAnalysis": [
      "Está incorreta: esqueceu o fator g ao calcular h.",
      "Está incorreta: dividiu 15 por g sem converter mmHg em Pa nem usar ρ.",
      "Está incorreta: ao passar de m para cm, multiplicou por 10 em vez de por 100."
    ],
    "nursingApplication": "Para garantir que o soro entra na veia, o saco é colocado acima do nível da veia, pelo que a pressão do soro supera a venosa."
  },
  {
    "id": 4119,
    "topicId": 4,
    "question": "A superfície do soro (ρ = 1000 kg/m³; g = 9,8 m/s²) está a 1,85 m do chão e a veia do utente deitado a 0,95 m do chão. Qual é a diferença de pressão entre a superfície do soro e a veia, em mmHg (1 mmHg ≈ 133,3 Pa)?",
    "options": [
      "136 mmHg",
      "206 mmHg",
      "66,2 mmHg",
      "8820 mmHg"
    ],
    "correctIndex": 2,
    "explanation": "O desnível relevante é entre a superfície do soro e a veia: h = 1,85 − 0,95 = 0,90 m.",
    "solution": [
      "Dados: ρ = 1000 kg/m³; g = 9,8 m/s²; saco 1,85 m; veia 0,95 m; 1 mmHg ≈ 133,3 Pa.",
      "Conversão: h = 1,85 − 0,95 = 0,90 m.",
      "Fórmula: ΔP = ρ·g·h.",
      "Substituição: ΔP = 1000 × 9,8 × 0,90 = 8820 Pa; 8820/133,3.",
      "Resultado: 66,2 mmHg"
    ],
    "distractorAnalysis": [
      "Está incorreta: usou a altura do saco ao chão, e não o desnível até à veia.",
      "Está incorreta: somou as duas alturas ao chão em vez de calcular o desnível.",
      "Está incorreta: deixou o valor em Pa e escreveu mmHg, sem dividir por 133,3."
    ],
    "nursingApplication": "Numa cama com altura regulável, o enfermeiro tem em conta que a pressão do soro à entrada da veia depende da altura do saco em relação à veia, e não ao chão."
  },
  {
    "id": 4120,
    "topicId": 4,
    "question": "Ao subir o saco de soro 0,25 m (ρ = 1000 kg/m³; g = 9,8 m/s²), em quanto aumenta a pressão do soro à entrada da veia, em mmHg (1 mmHg ≈ 133,3 Pa)?",
    "options": [
      "18,4 mmHg",
      "73,5 mmHg",
      "1,88 mmHg",
      "2450 mmHg"
    ],
    "correctIndex": 0,
    "explanation": "O aumento é ρ·g·Δh, com Δh = 0,25 m, e converte-se para mmHg dividindo por 133,3.",
    "solution": [
      "Dados: ρ = 1000 kg/m³; g = 9,8 m/s²; Δh = 0,25 m; 1 mmHg ≈ 133,3 Pa.",
      "Fórmula: ΔP = ρ·g·Δh.",
      "Substituição: ΔP = 1000 × 9,8 × 0,25 = 2450 Pa; 2450/133,3.",
      "Resultado: 18,4 mmHg"
    ],
    "distractorAnalysis": [
      "Está incorreta: usou o aumento correspondente a 1 m, e não a 0,25 m.",
      "Está incorreta: esqueceu o fator g ao calcular ΔP.",
      "Está incorreta: deixou o valor em Pa e escreveu mmHg, sem dividir por 133,3."
    ],
    "nursingApplication": "Ao subir o saco de soro, o enfermeiro aumenta a pressão à entrada da veia e, com ela, o caudal."
  },
  {
    "id": 4121,
    "topicId": 4,
    "question": "Um regador tem o corpo largo e um bico estreito, ligados pela base e ambos abertos. Com o regador pousado numa superfície horizontal e a água em repouso (desprezando a capilaridade), o que se observa quanto ao nível da água no bico e no corpo?",
    "options": [
      "O nível é o mesmo no bico e no corpo, apesar de terem larguras diferentes.",
      "O nível é mais alto no corpo, porque aí há mais água acumulada.",
      "O nível é mais alto no bico, porque a água é empurrada para cima nele.",
      "Os níveis são proporcionais às áreas das secções do bico e do corpo."
    ],
    "correctIndex": 0,
    "explanation": "Em vasos comunicantes com o mesmo líquido em repouso, a pressão é igual em pontos ao mesmo nível, por isso o líquido atinge a mesma altura em todos os ramos, seja qual for a sua largura.",
    "distractorAnalysis": [
      "Está incorreta: a quantidade de água não determina o nível; a pressão depende da altura do líquido, e pontos ao mesmo nível estão à mesma pressão.",
      "Está incorreta: se o nível fosse mais alto no bico, a pressão no fundo do bico seria maior do que a do corpo e a água fluiria até se igualarem.",
      "Está incorreta: a área da secção não influencia o nível atingido; o líquido nivela-se em todos os ramos."
    ],
    "nursingApplication": "Ao observar um tubo transparente ligado a um frasco aberto com líquido em repouso, o enfermeiro pode usar a altura do líquido no tubo para avaliar a altura do líquido no frasco."
  },
  {
    "id": 4122,
    "topicId": 4,
    "question": "Para marcar dois pontos à mesma altura em duas paredes de uma sala, um técnico enche de água uma mangueira transparente e encosta uma extremidade a cada parede. Com a água em repouso, o que se espera quanto ao nível da água nas duas extremidades?",
    "options": [
      "Está mais alto na extremidade ligada ao troço mais comprido da mangueira.",
      "Está mais alto na extremidade onde a mangueira é mais estreita.",
      "Depende da quantidade de água existente em cada metade da mangueira.",
      "Está ao mesmo nível nas duas, seja qual for o percurso da mangueira."
    ],
    "correctIndex": 3,
    "explanation": "A mangueira é um sistema de vasos comunicantes com um único líquido. Em repouso, as duas superfícies livres estão à mesma pressão atmosférica e portanto ao mesmo nível, independentemente da forma do percurso.",
    "distractorAnalysis": [
      "Está incorreta: o comprimento do troço não influencia o nível; o que conta é a altura do líquido, igual em todos os ramos.",
      "Está incorreta: a largura do ramo não altera a pressão a uma dada profundidade, logo não altera o nível.",
      "Está incorreta: a quantidade de líquido em cada troço não determina o nível; pontos à mesma altura no mesmo líquido têm a mesma pressão."
    ],
    "nursingApplication": "Num bloco operatório, um tubo transparente cheio de líquido em repouso permite comparar a altura de dois pontos, pois o líquido se nivela em ambas as extremidades."
  },
  {
    "id": 4123,
    "topicId": 4,
    "question": "Dois tubos verticais, um estreito (diâmetro 1 cm) e outro largo (diâmetro 6 cm), estão ligados pela base e contêm o mesmo soro em repouso, ambos abertos no topo. Comparando a pressão no fundo de cada ramo, conclui-se que:",
    "options": [
      "É igual nos dois ramos, porque o soro está à mesma altura em ambos.",
      "É maior no ramo largo, porque nele há mais soro por cima do fundo.",
      "É maior no ramo estreito, porque o soro está mais comprimido nele.",
      "É proporcional à área da secção de cada ramo, por isso é diferente."
    ],
    "correctIndex": 0,
    "explanation": "A pressão no fundo depende da altura do líquido (P = P<sub>0</sub> + ρ·g·h) e não da largura do ramo. Com o soro à mesma altura nos dois ramos, a pressão no fundo é igual.",
    "distractorAnalysis": [
      "Está incorreta: a pressão no fundo depende da altura do líquido, e não da quantidade total que o ramo contém.",
      "Está incorreta: o soro não fica mais comprimido num tubo estreito; a pressão no fundo depende apenas da altura do líquido.",
      "Está incorreta: a pressão não é proporcional à área da secção; a mesma altura de soro dá a mesma pressão em qualquer ramo."
    ],
    "nursingApplication": "Num tubo em U com soro em repouso, a pressão no fundo de cada ramo depende apenas da altura do soro, e não do diâmetro do ramo."
  },
  {
    "id": 4124,
    "topicId": 4,
    "question": "Um sistema de três ramos ligados pela base (um cilíndrico, um em forma de funil e um inclinado) contém água em repouso. Um estudante prevê que o nível será mais alto no funil, por ter mais volume. Qual é a conclusão correta?",
    "options": [
      "O nível é mais alto no ramo cilíndrico, porque a pressão do líquido atua só na vertical.",
      "O nível é o mesmo nos três ramos; o volume de cada ramo não altera a pressão a uma dada altura.",
      "O nível é mais baixo no ramo inclinado, porque a água escorre ao longo da parede.",
      "O estudante tem razão: o ramo com mais volume de líquido atinge a maior altura."
    ],
    "correctIndex": 1,
    "explanation": "Em vasos comunicantes com o mesmo líquido em repouso, o nível é o mesmo em todos os ramos, seja qual for a sua forma. A pressão no fundo depende da altura do líquido e não do seu volume.",
    "distractorAnalysis": [
      "Está incorreta: a pressão num ponto atua em todas as direções e os níveis igualam-se em qualquer forma de ramo.",
      "Está incorreta: a inclinação do ramo não altera o nível vertical; em equilíbrio, a superfície livre é horizontal e ao mesmo nível nos três ramos.",
      "Está incorreta: o volume do ramo não determina o nível; pontos ao mesmo nível no mesmo líquido estão à mesma pressão."
    ],
    "nursingApplication": "Num sistema de drenagem com troços inclinados e de formas diferentes, o líquido em repouso fica ao mesmo nível em todos os ramos abertos."
  },
  {
    "id": 4125,
    "topicId": 4,
    "question": "Num tubo em U com água em repouso, o ponto A está no ramo estreito e o ponto B no ramo largo, ambos à mesma altura. Que relação existe entre as pressões em A e em B?",
    "options": [
      "P<sub>A</sub> > P<sub>B</sub>, porque o ramo estreito concentra a pressão.",
      "P<sub>A</sub> = P<sub>B</sub>, porque estão ao mesmo nível no mesmo líquido.",
      "P<sub>A</sub> < P<sub>B</sub>, porque o ramo largo tem mais líquido por cima.",
      "P<sub>A</sub> = P<sub>B</sub> apenas se os dois ramos tiverem a mesma largura."
    ],
    "correctIndex": 1,
    "explanation": "A pressão num ponto de um líquido em equilíbrio depende apenas da profundidade (ΔP = ρ·g·Δh). Como Δh = 0 entre A e B, as pressões são iguais, quaisquer que sejam as larguras dos ramos.",
    "distractorAnalysis": [
      "Está incorreta: a largura do ramo não concentra a pressão; só a profundidade conta, e A e B estão à mesma.",
      "Está incorreta: a quantidade de líquido acima do ponto não altera a pressão; o que conta é a profundidade (aqui igual).",
      "Está incorreta: a igualdade de pressões ao mesmo nível vale para ramos de qualquer largura ou forma."
    ],
    "nursingApplication": "Num sistema em U com soro, o enfermeiro pode afirmar que dois pontos à mesma altura no soro estão à mesma pressão, mesmo que o tubo seja mais largo de um lado."
  },
  {
    "id": 4126,
    "topicId": 4,
    "question": "Num sistema de vasos comunicantes com água em repouso (desprezando a capilaridade), um dos ramos está inclinado 45° em relação à vertical. Comparada com a do ramo vertical, a superfície da água no ramo inclinado está:",
    "options": [
      "Mais alta, porque a água percorre um caminho mais longo no ramo inclinado.",
      "Mais baixa, porque a inclinação diminui a pressão do líquido nesse ramo.",
      "À mesma distância do fundo medida ao longo da parede inclinada.",
      "À mesma altura vertical, embora esse ramo contenha mais água ao longo da parede."
    ],
    "correctIndex": 3,
    "explanation": "Pontos ao mesmo nível, no mesmo líquido, estão à mesma pressão, por isso as superfícies livres ficam à mesma altura vertical, mesmo que um ramo esteja inclinado.",
    "distractorAnalysis": [
      "Está incorreta: o comprimento do percurso não importa; o que determina a pressão é a altura vertical do líquido.",
      "Está incorreta: a inclinação não diminui a pressão; a pressão depende da profundidade na vertical e é igual ao mesmo nível.",
      "Está incorreta: a igualdade é de altura vertical (mesmo nível), e não de distância ao longo da parede; no ramo inclinado essa distância é maior."
    ],
    "nursingApplication": "Num tubo flexível inclinado ou com curvas, o líquido em repouso fica ao mesmo nível vertical que o do frasco, independentemente do percurso do tubo."
  },
  {
    "id": 4127,
    "topicId": 4,
    "question": "Um frasco de soro aberto está ligado por um tubo flexível a um tubo vertical transparente mais estreito, também aberto, e o soro está em repouso. O enfermeiro sobe o tubo vertical 10 cm e espera que o soro volte ao repouso. Em relação ao nível do frasco, o nível no tubo fica:",
    "options": [
      "10 cm mais alto, porque o soro acompanha a posição do tubo.",
      "Mais baixo, porque o frasco é mais largo e tem mais soro.",
      "Igual, porque o soro se volta a nivelar nos dois ramos.",
      "Mais alto, porque o tubo é mais estreito e a pressão aumenta."
    ],
    "correctIndex": 2,
    "explanation": "Em vasos comunicantes, o líquido em repouso tem o mesmo nível em todos os ramos. Ao subir o tubo, o soro flui pelo tubo flexível até as pressões à mesma altura se igualarem.",
    "distractorAnalysis": [
      "Está incorreta: o soro flui pelo tubo flexível até os níveis igualarem; subir o tubo não mantém o soro 10 cm acima.",
      "Está incorreta: a largura do frasco não altera o nível; em equilíbrio, o nível é o mesmo nos dois ramos.",
      "Está incorreta: a largura do tubo não aumenta a pressão a uma dada altura; os dois níveis igualam-se."
    ],
    "nursingApplication": "Ao elevar um tubo de drenagem aberto ligado a um frasco, o enfermeiro vê o líquido nivelar-se de novo nos dois ramos quando deixa de haver fluxo."
  },
  {
    "id": 4128,
    "topicId": 4,
    "question": "Num tubo em U aberto, a água ocupa um ramo e o mercúrio o outro; os dois líquidos não se misturam. Porque é que as alturas h<sub>1</sub> e h<sub>2</sub> se medem a partir da superfície de separação?",
    "options": [
      "Porque aí a pressão é nula em ambos os ramos do tubo.",
      "Porque aí os dois líquidos têm a mesma massa volúmica.",
      "Porque aí há dois pontos ao mesmo nível, logo à mesma pressão, que permitem igualar as pressões.",
      "Porque as superfícies livres dos dois líquidos ficam à mesma altura."
    ],
    "correctIndex": 2,
    "explanation": "Os pontos A e B, um em cada líquido e ao mesmo nível da separação, estão à mesma pressão: P<sub>A</sub> = P<sub>B</sub>. Medindo as alturas a partir desse nível, obtém-se P<sub>0</sub> + ρ<sub>1</sub>·g·h<sub>1</sub> = P<sub>0</sub> + ρ<sub>2</sub>·g·h<sub>2</sub>.",
    "distractorAnalysis": [
      "Está incorreta: a pressão na superfície de separação não é nula; vale P<sub>0</sub> mais a pressão ρ·g·h da coluna de líquido acima dela.",
      "Está incorreta: os líquidos mantêm massas volúmicas diferentes; a superfície de separação é apenas o nível de referência dos pontos A e B.",
      "Está incorreta: as superfícies livres de líquidos de massas volúmicas diferentes ficam a alturas diferentes."
    ],
    "nursingApplication": "Num manómetro de tubo em U, a leitura da pressão baseia-se no nível de referência em que as pressões dos dois ramos se igualam."
  },
  {
    "id": 4129,
    "topicId": 4,
    "question": "Num tubo em U aberto, um ramo contém água e o outro azeite (menos denso do que a água), sem se misturarem. As alturas medem-se a partir da superfície de separação. Qual é a relação entre as alturas das duas colunas?",
    "options": [
      "h<sub>azeite</sub> < h<sub>água</sub>, porque o azeite é menos denso.",
      "h<sub>azeite</sub> > h<sub>água</sub>, porque ρ<sub>azeite</sub> < ρ<sub>água</sub>.",
      "h<sub>azeite</sub> = h<sub>água</sub>, porque as pressões em A e B são iguais.",
      "Não é possível compará-las sem conhecer o diâmetro de cada ramo."
    ],
    "correctIndex": 1,
    "explanation": "Em A e B a pressão é igual, logo ρ<sub>1</sub>·h<sub>1</sub> = ρ<sub>2</sub>·h<sub>2</sub>. Como ρ<sub>azeite</sub> < ρ<sub>água</sub>, a coluna de azeite tem de ser mais alta.",
    "distractorAnalysis": [
      "Está incorreta: a relação é inversa à massa volúmica; o líquido menos denso precisa de uma coluna mais alta para dar a mesma pressão.",
      "Está incorreta: as pressões em A e B são iguais, mas ρ·h = ρ·h implica alturas diferentes se as massas volúmicas forem diferentes.",
      "Está incorreta: o diâmetro do ramo não influencia a pressão a uma dada altura; só contam ρ e h."
    ],
    "nursingApplication": "Num manómetro de tubo em U, um líquido de menor massa volúmica exige uma coluna mais alta para indicar a mesma pressão."
  },
  {
    "id": 4130,
    "topicId": 4,
    "question": "Num tubo em U aberto há água e mercúrio. O mercúrio sobe 1,5 cm acima da superfície de separação. Dados: ρ<sub>água</sub> = 1000 kg/m³ e ρ<sub>Hg</sub> = 13 600 kg/m³. Qual é a altura da coluna de água, medida a partir da superfície de separação?",
    "options": [
      "20,4 cm",
      "0,110 cm",
      "1,50 cm",
      "204 cm"
    ],
    "correctIndex": 0,
    "explanation": "Igualando as pressões em A e B, ρ<sub>água</sub>·h<sub>água</sub> = ρ<sub>Hg</sub>·h<sub>Hg</sub>. A água, 13,6 vezes menos densa, tem uma coluna 13,6 vezes mais alta.",
    "solution": [
      "Dados: ρ<sub>água</sub> = 1000 kg/m³; ρ<sub>Hg</sub> = 13 600 kg/m³; h<sub>Hg</sub> = 1,5 cm.",
      "Fórmula: ρ<sub>água</sub>·h<sub>água</sub> = ρ<sub>Hg</sub>·h<sub>Hg</sub>.",
      "Substituição: h<sub>água</sub> = (13 600 / 1000) × 1,5 = 13,6 × 1,5.",
      "Resultado: 20,4 cm"
    ],
    "distractorAnalysis": [
      "Está incorreta: dividiu 1,5 por 13,6 em vez de multiplicar; a água, menos densa, tem a coluna mais alta.",
      "Está incorreta: admitiu que as duas colunas têm a mesma altura, ignorando a diferença de massas volúmicas.",
      "Está incorreta: multiplicou por 136 em vez de 13,6 (erro de ordem de grandeza)."
    ],
    "nursingApplication": "Esta relação explica porque se usa mercúrio nos manómetros: uma pressão que exigiria uma coluna de água de mais de 20 cm cabe numa coluna de mercúrio de apenas 1,5 cm."
  },
  {
    "id": 4131,
    "topicId": 4,
    "question": "Num tubo em U aberto há água num ramo e um óleo imiscível no outro. A coluna de água, medida a partir da superfície de separação, tem 12 cm. Dados: ρ<sub>água</sub> = 1000 kg/m³ e ρ<sub>óleo</sub> = 800 kg/m³. Qual é a altura da coluna de óleo, medida a partir da mesma superfície?",
    "options": [
      "9,60 cm",
      "12,0 cm",
      "163 cm",
      "15,0 cm"
    ],
    "correctIndex": 3,
    "explanation": "Em A e B, ρ<sub>água</sub>·h<sub>água</sub> = ρ<sub>óleo</sub>·h<sub>óleo</sub>. O óleo é menos denso do que a água, por isso a sua coluna é mais alta.",
    "solution": [
      "Dados: ρ<sub>água</sub> = 1000 kg/m³; ρ<sub>óleo</sub> = 800 kg/m³; h<sub>água</sub> = 12 cm.",
      "Fórmula: ρ<sub>água</sub>·h<sub>água</sub> = ρ<sub>óleo</sub>·h<sub>óleo</sub>, logo h<sub>óleo</sub> = ρ<sub>água</sub>·h<sub>água</sub> / ρ<sub>óleo</sub>.",
      "Substituição: h<sub>óleo</sub> = 1000 × 12 / 800.",
      "Resultado: 15,0 cm"
    ],
    "distractorAnalysis": [
      "Está incorreta: multiplicou 12 por 0,8 em vez de dividir; o óleo, menos denso, tem a coluna mais alta.",
      "Está incorreta: admitiu colunas de igual altura, esquecendo que as massas volúmicas são diferentes.",
      "Está incorreta: usou a razão 13,6 do mercúrio (12 × 13,6) em vez da razão dos dois líquidos do problema."
    ],
    "nursingApplication": "Num manómetro de tubo em U com um líquido menos denso do que o mercúrio, a mesma pressão corresponde a uma coluna mais alta e mais fácil de ler."
  },
  {
    "id": 4132,
    "topicId": 4,
    "question": "Num tubo em U aberto, a coluna de água tem 18 cm e a coluna de um líquido desconhecido, imiscível com a água, tem 24 cm, ambas medidas a partir da superfície de separação. Dado: ρ<sub>água</sub> = 1000 kg/m³. Qual é a massa volúmica do líquido desconhecido?",
    "options": [
      "1330 kg/m³",
      "750 kg/m³",
      "1000 kg/m³",
      "10 200 kg/m³"
    ],
    "correctIndex": 1,
    "explanation": "Em A e B, ρ<sub>água</sub>·h<sub>água</sub> = ρ<sub>x</sub>·h<sub>x</sub>. O líquido com a coluna mais alta (24 cm) é o menos denso do que a água.",
    "solution": [
      "Dados: ρ<sub>água</sub> = 1000 kg/m³; h<sub>água</sub> = 18 cm; h<sub>x</sub> = 24 cm.",
      "Fórmula: ρ<sub>água</sub>·h<sub>água</sub> = ρ<sub>x</sub>·h<sub>x</sub>, logo ρ<sub>x</sub> = ρ<sub>água</sub>·h<sub>água</sub> / h<sub>x</sub>.",
      "Substituição: ρ<sub>x</sub> = 1000 × 18 / 24.",
      "Resultado: 750 kg/m³"
    ],
    "distractorAnalysis": [
      "Está incorreta: inverteu a razão das alturas (24/18 em vez de 18/24); o líquido com a coluna mais alta é o menos denso.",
      "Está incorreta: admitiu a mesma massa volúmica da água, mas as alturas diferentes mostram que as massas volúmicas são diferentes.",
      "Está incorreta: usou a massa volúmica do mercúrio (13 600 × 18/24) em vez da da água."
    ],
    "nursingApplication": "Comparar a altura das colunas de dois líquidos imiscíveis num tubo em U permite estimar a massa volúmica de um deles, como se faz em ensaios simples de laboratório."
  },
  {
    "id": 4133,
    "topicId": 4,
    "question": "Num tubo em U aberto à atmosfera há água e mercúrio. A coluna de mercúrio, medida a partir da superfície de separação, tem 4,0 cm. Dados: ρ<sub>Hg</sub> = 13 600 kg/m³ e g = 9,8 m/s². Qual é a diferença P<sub>A</sub> − P<sub>0</sub> em A, ponto da superfície de separação no ramo da água? (P<sub>A</sub> = P<sub>B</sub> e B está no mercúrio.)",
    "options": [
      "533 000 Pa",
      "392 Pa",
      "5330 Pa",
      "544 Pa"
    ],
    "correctIndex": 2,
    "explanation": "Como P<sub>A</sub> = P<sub>B</sub> e P<sub>B</sub> = P<sub>0</sub> + ρ<sub>Hg</sub>·g·h<sub>Hg</sub>, a diferença P<sub>A</sub> − P<sub>0</sub> calcula-se a partir da coluna de mercúrio.",
    "solution": [
      "Dados: ρ<sub>Hg</sub> = 13 600 kg/m³; g = 9,8 m/s²; h<sub>Hg</sub> = 4,0 cm.",
      "Conversão: h<sub>Hg</sub> = 4,0 cm = 0,040 m.",
      "Fórmula: P<sub>A</sub> − P<sub>0</sub> = ρ<sub>Hg</sub>·g·h<sub>Hg</sub>.",
      "Substituição: P<sub>A</sub> − P<sub>0</sub> = 13 600 × 9,8 × 0,040 = 5331,2 Pa.",
      "Resultado: 5330 Pa"
    ],
    "distractorAnalysis": [
      "Está incorreta: usou h = 4,0 sem converter 4,0 cm em 0,040 m.",
      "Está incorreta: usou a massa volúmica da água (1000 kg/m³) em vez da do mercúrio no ponto B.",
      "Está incorreta: esqueceu o fator g na expressão ρ<sub>Hg</sub>·g·h."
    ],
    "nursingApplication": "O mesmo cálculo permite ao enfermeiro converter a altura de uma coluna de mercúrio num acréscimo de pressão em Pa, por exemplo ao interpretar o valor lido num manómetro."
  },
  {
    "id": 4134,
    "topicId": 4,
    "question": "Num tubo em U aberto há mercúrio e água. A coluna de água, medida a partir da superfície de separação, tem 40,8 cm. Dados: ρ<sub>água</sub> = 1000 kg/m³, g = 9,8 m/s² e 1 mmHg ≈ 133,3 Pa. Qual é P<sub>A</sub> − P<sub>0</sub> no ponto A da superfície de separação, em mmHg?",
    "options": [
      "408 mmHg",
      "30,0 mmHg",
      "3000 mmHg",
      "5550 mmHg"
    ],
    "correctIndex": 1,
    "explanation": "A pressão em A deve-se ao peso da coluna de água, P<sub>A</sub> − P<sub>0</sub> = ρ<sub>água</sub>·g·h<sub>água</sub>, que se converte em mmHg dividindo por 133,3.",
    "solution": [
      "Dados: ρ<sub>água</sub> = 1000 kg/m³; g = 9,8 m/s²; h<sub>água</sub> = 40,8 cm; 1 mmHg ≈ 133,3 Pa.",
      "Conversão: h<sub>água</sub> = 40,8 cm = 0,408 m.",
      "Fórmula: P<sub>A</sub> − P<sub>0</sub> = ρ<sub>água</sub>·g·h<sub>água</sub>, e P (mmHg) = P (Pa) / 133,3.",
      "Substituição: 1000 × 9,8 × 0,408 = 3998,4 Pa; 3998,4 / 133,3 ≈ 30,0 mmHg.",
      "Resultado: 30,0 mmHg"
    ],
    "distractorAnalysis": [
      "Está incorreta: leu a altura da coluna de água em mm (408) como se fosse mmHg, sem ter em conta que a água é 13,6 vezes menos densa.",
      "Está incorreta: usou h = 40,8 sem converter cm em m, o que multiplica a pressão por 100.",
      "Está incorreta: multiplicou 408 mm por 13,6 em vez de dividir."
    ],
    "nursingApplication": "Saber converter uma coluna de líquido em mmHg ajuda a relacionar a altura de um saco de soro com a pressão que ele exerce, tendo como referência os valores de tensão arterial em mmHg."
  },
  {
    "id": 4135,
    "topicId": 4,
    "question": "Num tubo em U aberto, a coluna de água, medida a partir da superfície de separação, tem 51 cm. Dados: ρ<sub>água</sub> = 1000 kg/m³ e ρ<sub>Hg</sub> = 13 600 kg/m³. Qual é a altura da coluna de mercúrio, medida a partir da mesma superfície?",
    "options": [
      "694 cm",
      "51,0 cm",
      "3,75 cm",
      "37,5 cm"
    ],
    "correctIndex": 2,
    "explanation": "A igualdade das pressões em A e B dá ρ<sub>água</sub>·h<sub>água</sub> = ρ<sub>Hg</sub>·h<sub>Hg</sub>, logo o mercúrio, 13,6 vezes mais denso, tem uma coluna 13,6 vezes mais baixa.",
    "solution": [
      "Dados: ρ<sub>água</sub> = 1000 kg/m³; ρ<sub>Hg</sub> = 13 600 kg/m³; h<sub>água</sub> = 51 cm.",
      "Fórmula: h<sub>Hg</sub> = ρ<sub>água</sub>·h<sub>água</sub> / ρ<sub>Hg</sub>.",
      "Substituição: h<sub>Hg</sub> = 1000 × 51 / 13 600.",
      "Resultado: 3,75 cm"
    ],
    "distractorAnalysis": [
      "Está incorreta: multiplicou 51 por 13,6 em vez de dividir; o mercúrio, mais denso, tem a coluna mais baixa.",
      "Está incorreta: admitiu colunas de igual altura, ignorando a diferença das massas volúmicas.",
      "Está incorreta: dividiu por 1,36 em vez de 13,6 (erro de ordem de grandeza)."
    ],
    "nursingApplication": "Por o mercúrio ser 13,6 vezes mais denso do que a água, a escala de 0 a 300 mmHg de um esfigmomanómetro de mercúrio ocupa cerca de 30 cm, quando com água seriam precisos cerca de 4 m."
  },
  {
    "id": 4136,
    "topicId": 4,
    "question": "Num tubo em U aberto, um ramo contém água e o outro azeite (ρ<sub>azeite</sub> = 850 kg/m³), imiscíveis. Dado: ρ<sub>água</sub> = 1000 kg/m³. Qual é a razão h<sub>azeite</sub> / h<sub>água</sub> entre as alturas, medidas a partir da superfície de separação?",
    "options": [
      "0,850",
      "1,18",
      "1,00",
      "0,150"
    ],
    "correctIndex": 1,
    "explanation": "Em A e B, ρ<sub>água</sub>·h<sub>água</sub> = ρ<sub>azeite</sub>·h<sub>azeite</sub>, logo h<sub>azeite</sub> / h<sub>água</sub> = ρ<sub>água</sub> / ρ<sub>azeite</sub>.",
    "solution": [
      "Dados: ρ<sub>água</sub> = 1000 kg/m³; ρ<sub>azeite</sub> = 850 kg/m³.",
      "Fórmula: h<sub>azeite</sub> / h<sub>água</sub> = ρ<sub>água</sub> / ρ<sub>azeite</sub>.",
      "Substituição: 1000 / 850 ≈ 1,176.",
      "Resultado: 1,18"
    ],
    "distractorAnalysis": [
      "Está incorreta: calculou ρ<sub>azeite</sub> / ρ<sub>água</sub>, que é a razão inversa; o azeite, menos denso, tem a coluna mais alta (razão maior do que 1).",
      "Está incorreta: admitiu colunas de igual altura, ignorando a diferença de massas volúmicas.",
      "Está incorreta: calculou 1 − 0,850, uma diferença sem significado físico neste caso."
    ],
    "nursingApplication": "Uma razão maior do que 1 indica que o líquido menos denso forma a coluna mais alta, tal como a água precisaria de uma coluna 13,6 vezes mais alta do que a de mercúrio."
  },
  {
    "id": 4137,
    "topicId": 4,
    "question": "Um manómetro de mercúrio é um tubo em U com mercúrio. Um ramo está aberto à atmosfera e o outro está ligado a um recipiente com gás. O mercúrio no ramo aberto está mais alto do que no outro. A diferença P − P<sub>0</sub>, entre a pressão no recipiente e a atmosférica, é:",
    "options": [
      "Nula, porque os dois ramos do tubo em U estão ligados entre si.",
      "Positiva, e dada por ρ<sub>Hg</sub>·g·h, com h a altura total do mercúrio no tubo.",
      "Positiva, e dada por ρ<sub>Hg</sub>·g·Δh, com Δh o desnível entre os meniscos.",
      "Negativa, porque o mercúrio é empurrado para o ramo aberto."
    ],
    "correctIndex": 2,
    "explanation": "O mercúrio sobe no ramo aberto quando a pressão no recipiente é maior do que P<sub>0</sub>. O desnível Δh entre os meniscos mede o excesso de pressão: P − P<sub>0</sub> = ρ<sub>Hg</sub>·g·Δh.",
    "distractorAnalysis": [
      "Está incorreta: a pressão só seria igual à atmosférica se os níveis dos dois ramos coincidissem; o desnível mostra uma diferença de pressão.",
      "Está incorreta: o que conta é o desnível Δh entre os meniscos e não a quantidade total de mercúrio no tubo.",
      "Está incorreta: o mercúrio está mais alto no ramo aberto porque o recipiente tem pressão maior do que a atmosférica, e não menor."
    ],
    "nursingApplication": "Num manómetro de mercúrio ligado a uma braçadeira, o desnível entre os níveis indica quanto a pressão na braçadeira excede a pressão atmosférica."
  },
  {
    "id": 4138,
    "topicId": 4,
    "question": "Um manómetro de mercúrio está ligado a um recipiente e o desnível entre os meniscos é Δh = 9,5 cm. Dados: ρ<sub>Hg</sub> = 13 600 kg/m³, g = 9,8 m/s² e 1 mmHg ≈ 133,3 Pa. Qual é a pressão P − P<sub>0</sub> do recipiente, em mmHg?",
    "options": [
      "9,50 mmHg",
      "12 700 mmHg",
      "6,99 mmHg",
      "95,0 mmHg"
    ],
    "correctIndex": 3,
    "explanation": "A leitura em mmHg é igual ao desnível, em mm, entre os meniscos do mercúrio. Pela lei fundamental: P − P<sub>0</sub> = ρ<sub>Hg</sub>·g·Δh dá o mesmo valor depois de convertido para mmHg.",
    "solution": [
      "Dados: Δh = 9,5 cm; ρ<sub>Hg</sub> = 13 600 kg/m³; g = 9,8 m/s²; 1 mmHg ≈ 133,3 Pa.",
      "Conversão: Δh = 9,5 cm = 0,095 m.",
      "Fórmula: P − P<sub>0</sub> = ρ<sub>Hg</sub>·g·Δh e P (mmHg) = P (Pa) / 133,3.",
      "Substituição: 13 600 × 9,8 × 0,095 = 12 661,6 Pa; 12 661,6 / 133,3 ≈ 95,0 mmHg.",
      "Resultado: 95,0 mmHg"
    ],
    "distractorAnalysis": [
      "Está incorreta: leu o desnível em cm como se fossem mmHg; 1 mmHg corresponde a 1 mm de mercúrio, e 9,5 cm = 95 mm.",
      "Está incorreta: deixou o resultado em pascal (12 662 Pa) e indicou-o como se fosse mmHg.",
      "Está incorreta: dividiu 95 mm por 13,6 como se a coluna fosse de água."
    ],
    "nursingApplication": "Num esfigmomanómetro de mercúrio, o enfermeiro lê o valor em mmHg diretamente pelo comprimento da coluna em mm, sem precisar de converter para pascal."
  },
  {
    "id": 4139,
    "topicId": 4,
    "question": "Um manómetro de mercúrio está ligado a um recipiente e o mercúrio no ramo aberto está 15 mm acima do do outro ramo. Dados: ρ<sub>Hg</sub> = 13 600 kg/m³ e g = 9,8 m/s². Qual é a diferença P − P<sub>0</sub> entre a pressão no recipiente e a atmosférica?",
    "options": [
      "147 Pa",
      "204 Pa",
      "2 000 000 Pa",
      "2000 Pa"
    ],
    "correctIndex": 3,
    "explanation": "O excesso de pressão no recipiente é dado pelo desnível entre os meniscos: P − P<sub>0</sub> = ρ<sub>Hg</sub>·g·Δh.",
    "solution": [
      "Dados: Δh = 15 mm; ρ<sub>Hg</sub> = 13 600 kg/m³; g = 9,8 m/s².",
      "Conversão: Δh = 15 mm = 0,015 m.",
      "Fórmula: P − P<sub>0</sub> = ρ<sub>Hg</sub>·g·Δh.",
      "Substituição: P − P<sub>0</sub> = 13 600 × 9,8 × 0,015 = 1999,2 Pa.",
      "Resultado: 2000 Pa"
    ],
    "distractorAnalysis": [
      "Está incorreta: usou a massa volúmica da água (1000 kg/m³) em vez da do mercúrio.",
      "Está incorreta: esqueceu o fator g na expressão ρ<sub>Hg</sub>·g·Δh.",
      "Está incorreta: usou Δh = 15 sem converter mm em m (15 mm = 0,015 m)."
    ],
    "nursingApplication": "Um desnível de apenas 15 mm no mercúrio corresponde a 15 mmHg, uma ordem de grandeza útil para interpretar pequenas variações lidas no manómetro."
  },
  {
    "id": 4140,
    "topicId": 4,
    "question": "Ao medir a tensão arterial com um esfigmomanómetro de mercúrio, o enfermeiro lê o valor no manómetro. Que pressão mede o manómetro?",
    "options": [
      "A pressão atmosférica, que se mantém constante durante a medição.",
      "A pressão na braçadeira, que se equilibra com a do sangue na artéria.",
      "A pressão do sangue na veia, medida através da pele do braço.",
      "A força que o braço exerce sobre a braçadeira, em newton."
    ],
    "correctIndex": 1,
    "explanation": "O manómetro está ligado à braçadeira e mede a pressão nela, que se equilibra com a do sangue na artéria. A leitura em mmHg é o desnível do mercúrio, em mm.",
    "distractorAnalysis": [
      "Está incorreta: o ramo aberto está à pressão atmosférica, mas o que se lê é o excesso P − P<sub>0</sub>, ligado à braçadeira.",
      "Está incorreta: a braçadeira equilibra-se com a pressão do sangue na artéria, e não na veia.",
      "Está incorreta: o manómetro mede pressão, em mmHg, e não força; a pressão é a força por unidade de área."
    ],
    "nursingApplication": "Ao registar 120/80 mmHg num utente, o enfermeiro regista a pressão lida na braçadeira, equilibrada com a do sangue na artéria."
  },
  {
    "id": 4141,
    "topicId": 4,
    "question": "Dois manómetros de mercúrio, um com tubo estreito e outro com tubo largo, são ligados ao mesmo recipiente. Em ambos o ramo aberto está à atmosfera. Comparando os desníveis entre os meniscos:",
    "options": [
      "O desnível é igual nos dois, porque depende da pressão e não da largura do tubo.",
      "O desnível é maior no tubo estreito, porque o mercúrio sobe mais num tubo fino.",
      "O desnível é maior no tubo largo, porque aí há mais mercúrio a equilibrar a pressão.",
      "O desnível é proporcional à área do tubo, logo só pode ser comparado em unidades de força."
    ],
    "correctIndex": 0,
    "explanation": "Para uma dada pressão no recipiente, o desnível entre os meniscos de mercúrio é Δh = (P − P<sub>0</sub>)/(ρ<sub>Hg</sub>·g), valor que não depende da largura do tubo.",
    "distractorAnalysis": [
      "Está incorreta: a largura do tubo não altera a altura da coluna; P − P<sub>0</sub> = ρ<sub>Hg</sub>·g·Δh só depende de Δh.",
      "Está incorreta: a quantidade total de mercúrio não determina a pressão, mas sim a altura do desnível.",
      "Está incorreta: o desnível mede-se em mm e dá diretamente a pressão em mmHg, sem depender da área do tubo."
    ],
    "nursingApplication": "Dois esfigmomanómetros de mercúrio de diâmetros diferentes dão a mesma leitura em mmHg para a mesma pressão na braçadeira."
  },
  {
    "id": 4142,
    "topicId": 4,
    "question": "Num doente, a tensão arterial sistólica corresponde a um desnível de 140 mm de mercúrio num manómetro de mercúrio. Dados: ρ<sub>Hg</sub> = 13 600 kg/m³ e g = 9,8 m/s². Qual é o excesso de pressão P − P<sub>0</sub> correspondente, em Pa?",
    "options": [
      "1370 Pa",
      "187 000 Pa",
      "140 Pa",
      "18 700 Pa"
    ],
    "correctIndex": 3,
    "explanation": "O desnível de mercúrio dá o excesso de pressão pela lei fundamental, P − P<sub>0</sub> = ρ<sub>Hg</sub>·g·Δh, com Δh em metros.",
    "solution": [
      "Dados: Δh = 140 mm; ρ<sub>Hg</sub> = 13 600 kg/m³; g = 9,8 m/s².",
      "Conversão: Δh = 140 mm = 0,140 m.",
      "Fórmula: P − P<sub>0</sub> = ρ<sub>Hg</sub>·g·Δh.",
      "Substituição: P − P<sub>0</sub> = 13 600 × 9,8 × 0,140 = 18 659,2 Pa.",
      "Resultado: 18 700 Pa"
    ],
    "distractorAnalysis": [
      "Está incorreta: usou a massa volúmica da água (1000 kg/m³) em vez da do mercúrio.",
      "Está incorreta: converteu 140 mm em 1,40 m (dividiu por 100 em vez de 1000).",
      "Está incorreta: tomou o valor numérico do desnível em mm como se fosse a pressão em Pa."
    ],
    "nursingApplication": "Uma leitura de 140 mmHg corresponde a cerca de 18,7 kPa, valor que mostra porque o mercúrio é usado: uma coluna de 14 cm regista uma pressão elevada na braçadeira."
  },
  {
    "id": 4143,
    "topicId": 4,
    "question": "Um manómetro com água em vez de mercúrio seria usado para medir 80 mmHg. Dados: ρ<sub>água</sub> = 1000 kg/m³ e ρ<sub>Hg</sub> = 13 600 kg/m³. Que desnível entre os meniscos de água daria a mesma pressão?",
    "options": [
      "5,88 mm",
      "80,0 mm",
      "10,9 m",
      "1,09 m"
    ],
    "correctIndex": 3,
    "explanation": "A mesma pressão exige ρ<sub>água</sub>·g·Δh<sub>água</sub> = ρ<sub>Hg</sub>·g·Δh<sub>Hg</sub>, logo a coluna de água é 13,6 vezes mais alta do que a de mercúrio.",
    "solution": [
      "Dados: Δh<sub>Hg</sub> = 80 mm; ρ<sub>água</sub> = 1000 kg/m³; ρ<sub>Hg</sub> = 13 600 kg/m³.",
      "Fórmula: Δh<sub>água</sub> = Δh<sub>Hg</sub>·ρ<sub>Hg</sub> / ρ<sub>água</sub>.",
      "Substituição: Δh<sub>água</sub> = 80 × 13 600 / 1000 = 1088 mm.",
      "Resultado: 1,09 m"
    ],
    "distractorAnalysis": [
      "Está incorreta: dividiu 80 mm por 13,6 em vez de multiplicar; a água é menos densa, logo a coluna tem de ser mais alta.",
      "Está incorreta: manteve 80 mm, ignorando que a água é 13,6 vezes menos densa do que o mercúrio.",
      "Está incorreta: converteu 1088 mm em 10,9 m (dividiu por 100 em vez de 1000)."
    ],
    "nursingApplication": "Por a água exigir colunas mais de 13 vezes mais altas, o manómetro com mercúrio é mais compacto para medir a tensão arterial à cabeceira do utente."
  },
  {
    "id": 4144,
    "topicId": 4,
    "question": "Um manómetro de mercúrio está ligado a um recipiente e a pressão atmosférica é P<sub>0</sub> = 760 mmHg. O mercúrio no ramo aberto está 45 mm acima do nível do outro ramo. Qual é a pressão P no recipiente, em mmHg?",
    "options": [
      "715 mmHg",
      "805 mmHg",
      "45,0 mmHg",
      "760 mmHg"
    ],
    "correctIndex": 1,
    "explanation": "O desnível de 45 mm dá P − P<sub>0</sub> = 45 mmHg. Como o mercúrio está mais alto no ramo aberto, P é maior do que P<sub>0</sub> e P = P<sub>0</sub> + 45 mmHg.",
    "solution": [
      "Dados: P<sub>0</sub> = 760 mmHg; Δh = 45 mm (mercúrio mais alto no ramo aberto).",
      "Fórmula: P = P<sub>0</sub> + (P − P<sub>0</sub>), com (P − P<sub>0</sub>) em mmHg igual a Δh em mm.",
      "Substituição: P = 760 + 45.",
      "Resultado: 805 mmHg"
    ],
    "distractorAnalysis": [
      "Está incorreta: subtraiu o desnível a P<sub>0</sub>; o mercúrio mais alto no ramo aberto indica P maior do que P<sub>0</sub>.",
      "Está incorreta: indicou apenas o excesso P − P<sub>0</sub>, sem somar a pressão atmosférica.",
      "Está incorreta: ignorou o desnível e deu a pressão atmosférica; o recipiente tem pressão superior à atmosférica."
    ],
    "nursingApplication": "O manómetro indica o excesso de pressão em relação à atmosférica; a pressão total no sistema obtém-se somando o valor atmosférico local ao desnível lido."
  },
  {
    "id": 4145,
    "topicId": 4,
    "question": "Um manómetro de mercúrio mede, num sistema, um excesso de pressão P − P<sub>0</sub> = 8000 Pa. Dados: ρ<sub>Hg</sub> = 13 600 kg/m³ e g = 9,8 m/s². Qual é o desnível entre os meniscos de mercúrio?",
    "options": [
      "58,8 cm",
      "6,00 cm",
      "60,0 cm",
      "16,7 cm"
    ],
    "correctIndex": 1,
    "explanation": "Resolvendo P − P<sub>0</sub> = ρ<sub>Hg</sub>·g·Δh em ordem a Δh, obtém-se Δh = (P − P<sub>0</sub>) / (ρ<sub>Hg</sub>·g).",
    "solution": [
      "Dados: P − P<sub>0</sub> = 8000 Pa; ρ<sub>Hg</sub> = 13 600 kg/m³; g = 9,8 m/s².",
      "Fórmula: Δh = (P − P<sub>0</sub>) / (ρ<sub>Hg</sub>·g).",
      "Substituição: Δh = 8000 / (13 600 × 9,8) = 8000 / 133 280 ≈ 0,0600 m.",
      "Resultado: 6,00 cm"
    ],
    "distractorAnalysis": [
      "Está incorreta: esqueceu o fator g (8000 / 13 600 = 0,588 m).",
      "Está incorreta: dividiu apenas por 133,3 e leu o resultado (60 mmHg) como se fosse em cm; 60 mm = 6,0 cm.",
      "Está incorreta: inverteu a fórmula, dividindo ρ<sub>Hg</sub>·g por P − P<sub>0</sub>."
    ],
    "nursingApplication": "Saber a altura de mercúrio equivalente a uma dada pressão ajuda a perceber a leitura de um manómetro de mercúrio ligado a um sistema com pressão conhecida."
  },
  {
    "id": 4146,
    "topicId": 4,
    "question": "Um êmbolo comprime um líquido em equilíbrio num recipiente fechado e o aumento de pressão aplicado é de 20 kPa. Em comparação com a situação anterior, o que acontece à pressão num ponto junto ao êmbolo e num ponto junto ao fundo do recipiente?",
    "options": [
      "Aumenta o mesmo valor, 20 kPa, nos dois pontos.",
      "Aumenta 20 kPa junto ao êmbolo e menos junto ao fundo, por distância.",
      "Aumenta 20 kPa só junto ao êmbolo e não se altera junto ao fundo.",
      "Aumenta mais junto ao fundo, porque há mais líquido acima desse ponto."
    ],
    "correctIndex": 0,
    "explanation": "Pela lei de Pascal, um aumento de pressão aplicado a um líquido em equilíbrio transmite-se integralmente a todos os seus pontos. O acréscimo é, portanto, o mesmo em qualquer ponto do líquido.",
    "distractorAnalysis": [
      "Está incorreta: o acréscimo de pressão não diminui com a distância ao êmbolo; é igual em todos os pontos.",
      "Está incorreta: o acréscimo propaga-se a todo o líquido, não apenas aos pontos junto ao êmbolo.",
      "Está incorreta: a profundidade só altera a parte hidrostática (ρ·g·h) da pressão, não o acréscimo transmitido, que é o mesmo em todos os pontos."
    ],
    "nursingApplication": "Ao empurrar o êmbolo de uma seringa fechada cheia de líquido, o aumento de pressão fica igual em todo o interior do líquido."
  },
  {
    "id": 4147,
    "topicId": 4,
    "question": "Um líquido em equilíbrio num recipiente com paredes de áreas diferentes recebe um aumento de pressão de 10 kPa, aplicado por um êmbolo. Sobre as paredes do recipiente, a lei de Pascal permite afirmar que:",
    "options": [
      "A pressão aumenta 10 kPa em todas as paredes, mas a força é maior nas de maior área.",
      "A força aumenta o mesmo valor em todas as paredes, qualquer que seja a área.",
      "A pressão aumenta mais nas paredes de maior área, por receberem mais líquido.",
      "A pressão só aumenta nas paredes mais próximas do êmbolo."
    ],
    "correctIndex": 0,
    "explanation": "O que se transmite é a pressão, não a força. Com o mesmo acréscimo de pressão, a força adicional F = ΔP·S é proporcional à área de cada parede.",
    "distractorAnalysis": [
      "Está incorreta: o que se transmite é a pressão e não a força; para a mesma pressão, F = P·S dá forças maiores em paredes de maior área.",
      "Está incorreta: a pressão aumenta o mesmo valor em todas as paredes, independentemente da sua área.",
      "Está incorreta: o acréscimo de pressão transmite-se a todas as paredes do recipiente, e não só às mais próximas do êmbolo."
    ],
    "nursingApplication": "Numa seringa, o acréscimo de pressão feito no êmbolo é igual em toda a superfície interna, mas a força sobre uma área maior da parede também é maior."
  },
  {
    "id": 4148,
    "topicId": 4,
    "question": "Um êmbolo aumenta em 12 kPa a pressão de um líquido em equilíbrio. Um ponto A está a 5 cm de profundidade e um ponto B a 30 cm de profundidade. Qual é a afirmação correta sobre a pressão total nesses pontos?",
    "options": [
      "Ambos sobem 12 kPa e passam a ter a mesma pressão total.",
      "B sobe mais do que A, porque está a maior profundidade.",
      "Ambos sobem 12 kPa e B continua a ter pressão maior do que A.",
      "A sobe mais do que B, porque está mais próximo do êmbolo."
    ],
    "correctIndex": 2,
    "explanation": "O aumento de pressão transmite-se igual a todos os pontos, mas a pressão hidrostática ρ·g·h continua a variar com a profundidade. A diferença entre B e A mantém-se igual a ρ·g·Δh.",
    "distractorAnalysis": [
      "Está incorreta: a diferença hidrostática ρ·g·Δh entre A e B mantém-se, por isso a pressão total em B continua maior.",
      "Está incorreta: o acréscimo é o mesmo em A e em B; só a pressão hidrostática depende da profundidade.",
      "Está incorreta: o acréscimo de pressão não diminui com a distância ao êmbolo; é igual em todos os pontos."
    ],
    "nursingApplication": "Num sistema fechado com líquido pressurizado, a pressão total em cada ponto soma o acréscimo transmitido e a parcela que depende da altura."
  },
  {
    "id": 4149,
    "topicId": 4,
    "question": "Com a saída fechada, um enfermeiro empurra o êmbolo de uma seringa cheia de líquido. A pressão adicional criada no líquido atua:",
    "options": [
      "No êmbolo, nas paredes laterais e na extremidade fechada.",
      "Só na direção do movimento do êmbolo, até à extremidade fechada.",
      "Só nas paredes laterais do cilindro, por serem perpendiculares ao movimento.",
      "Só no êmbolo, que é onde a força é aplicada."
    ],
    "correctIndex": 0,
    "explanation": "O acréscimo de pressão aplicado a um líquido em equilíbrio transmite-se integralmente a todo o líquido e às paredes do recipiente. A força sobre cada parede é perpendicular a ela.",
    "distractorAnalysis": [
      "Está incorreta: a pressão num ponto atua em todas as direções e sentidos, e não só na direção do movimento.",
      "Está incorreta: a pressão também atua sobre o êmbolo e a extremidade fechada, sempre perpendicular às paredes.",
      "Está incorreta: o acréscimo de pressão transmite-se a todos os pontos do líquido e às paredes, não apenas ao êmbolo."
    ],
    "nursingApplication": "Ao tentar injetar numa seringa com a saída fechada, o enfermeiro sente o aumento de pressão, que atua em todas as paredes da seringa."
  },
  {
    "id": 4150,
    "topicId": 4,
    "question": "Um enfermeiro aperta um saco fechado e flexível, cheio de líquido, com a mão sobre uma pequena zona. O que acontece à pressão no interior do líquido?",
    "options": [
      "Aumenta apenas sob a mão, onde o saco é comprimido.",
      "Aumenta mais longe da mão, porque o líquido é empurrado para aí.",
      "Aumenta o mesmo valor em todos os pontos do líquido.",
      "Mantém-se, porque o líquido é incompressível e não transmite pressão."
    ],
    "correctIndex": 2,
    "explanation": "Pela lei de Pascal, o aumento de pressão aplicado a um líquido em equilíbrio transmite-se integralmente a todos os seus pontos, e também às paredes do recipiente.",
    "distractorAnalysis": [
      "Está incorreta: o acréscimo de pressão propaga-se integralmente a todo o líquido, e não só à zona comprimida.",
      "Está incorreta: o acréscimo é igual em todos os pontos; não aumenta com a distância à mão.",
      "Está incorreta: ser incompressível não impede a transmissão da pressão; é justamente por isso que o acréscimo chega a todos os pontos."
    ],
    "nursingApplication": "Ao apertar uma bolsa de líquido fechada, o enfermeiro altera a pressão em todo o conteúdo, e não apenas junto à mão."
  },
  {
    "id": 4151,
    "topicId": 4,
    "question": "Num líquido em equilíbrio fechado por um êmbolo de área constante, a força exercida sobre o êmbolo duplica. O que acontece ao aumento de pressão num ponto qualquer do líquido?",
    "options": [
      "Mantém-se, porque o que se transmite é a força inicial.",
      "Duplica apenas nos pontos junto ao êmbolo.",
      "Duplica no êmbolo e aumenta menos nos pontos mais fundos.",
      "Duplica, em todos os pontos do líquido."
    ],
    "correctIndex": 3,
    "explanation": "O acréscimo de pressão aplicado pelo êmbolo é ΔP = F/S e, pela lei de Pascal, transmite-se integralmente a todo o líquido. Com S constante, duplicar F duplica ΔP em todos os pontos.",
    "distractorAnalysis": [
      "Está incorreta: o acréscimo é ΔP = F/S; se F duplica com S constante, ΔP também duplica.",
      "Está incorreta: o acréscimo de pressão transmite-se a todos os pontos do líquido, não só aos mais próximos do êmbolo.",
      "Está incorreta: o acréscimo é o mesmo em todos os pontos; só a parcela hidrostática varia com a profundidade."
    ],
    "nursingApplication": "Ao empurrar com o dobro da força o êmbolo de uma seringa da mesma secção, o enfermeiro duplica a pressão transmitida ao líquido até à agulha."
  },
  {
    "id": 4152,
    "topicId": 4,
    "question": "Numa prensa hidráulica, o êmbolo pequeno tem S<sub>1</sub> = 4 cm² e recebe uma força F<sub>1</sub> = 30 N. O êmbolo grande tem S<sub>2</sub> = 100 cm². O fluido está em equilíbrio. Qual é a força F<sub>2</sub> no êmbolo grande?",
    "options": [
      "1,20 N",
      "120 N",
      "750 N",
      "30 N"
    ],
    "correctIndex": 2,
    "explanation": "A pressão é igual nos dois êmbolos: F<sub>1</sub>/S<sub>1</sub> = F<sub>2</sub>/S<sub>2</sub>. O êmbolo de maior área recebe a maior força.",
    "solution": [
      "Dados: F<sub>1</sub> = 30 N; S<sub>1</sub> = 4 cm²; S<sub>2</sub> = 100 cm².",
      "Fórmula: F<sub>1</sub>/S<sub>1</sub> = F<sub>2</sub>/S<sub>2</sub>, logo F<sub>2</sub> = F<sub>1</sub>·S<sub>2</sub>/S<sub>1</sub>.",
      "Substituição: F<sub>2</sub> = 30 × 100 / 4.",
      "Resultado: 750 N"
    ],
    "distractorAnalysis": [
      "Está incorreta: inverteu a razão das áreas (S<sub>1</sub>/S<sub>2</sub>), o que daria uma força menor, quando o êmbolo grande tem a maior força.",
      "Está incorreta: multiplicou F<sub>1</sub> por S<sub>1</sub> em vez de por S<sub>2</sub>/S<sub>1</sub>.",
      "Está incorreta: admitiu forças iguais nos dois êmbolos, quando só as pressões são iguais."
    ],
    "nursingApplication": "Numa cama articulada de acionamento hidráulico, uma pequena força do pedal é amplificada pela maior área do êmbolo que levanta a cama."
  },
  {
    "id": 4153,
    "topicId": 4,
    "question": "Num elevador hidráulico, o êmbolo pequeno tem S<sub>1</sub> = 5 cm² e o grande S<sub>2</sub> = 200 cm². Para equilibrar uma carga que exerce F<sub>2</sub> = 8000 N no êmbolo grande, qual é a força F<sub>1</sub> a aplicar no êmbolo pequeno?",
    "options": [
      "320 000 N",
      "8000 N",
      "40 N",
      "200 N"
    ],
    "correctIndex": 3,
    "explanation": "Pressões iguais nos dois êmbolos dão F<sub>1</sub>/S<sub>1</sub> = F<sub>2</sub>/S<sub>2</sub>. A força no êmbolo pequeno é a da carga reduzida na razão S<sub>1</sub>/S<sub>2</sub>.",
    "solution": [
      "Dados: S<sub>1</sub> = 5 cm²; S<sub>2</sub> = 200 cm²; F<sub>2</sub> = 8000 N.",
      "Fórmula: F<sub>1</sub> = F<sub>2</sub>·S<sub>1</sub>/S<sub>2</sub>.",
      "Substituição: F<sub>1</sub> = 8000 × 5 / 200.",
      "Resultado: 200 N"
    ],
    "distractorAnalysis": [
      "Está incorreta: multiplicou F<sub>2</sub> por S<sub>2</sub>/S<sub>1</sub> em vez de por S<sub>1</sub>/S<sub>2</sub>; o êmbolo pequeno precisa de menos força.",
      "Está incorreta: admitiu forças iguais nos dois êmbolos, quando só as pressões são iguais.",
      "Está incorreta: dividiu F<sub>2</sub> apenas por S<sub>2</sub> (8000/200), esquecendo-se de multiplicar por S<sub>1</sub>."
    ],
    "nursingApplication": "Num elevador hidráulico de macas ou de doentes, um esforço moderado no êmbolo pequeno basta para levantar uma carga elevada no êmbolo grande."
  },
  {
    "id": 4154,
    "topicId": 4,
    "question": "Num sistema hidráulico, o êmbolo pequeno tem área S<sub>1</sub> = 3 cm² e recebe uma força F<sub>1</sub> = 60 N, com o fluido em equilíbrio. Qual é a pressão P no fluido, em Pa?",
    "options": [
      "20 Pa",
      "200 000 Pa",
      "20 000 Pa",
      "0,018 Pa"
    ],
    "correctIndex": 1,
    "explanation": "A pressão no fluido é a que o êmbolo pequeno exerce, P = F<sub>1</sub>/S<sub>1</sub>, e transmite-se a todo o fluido e ao êmbolo grande.",
    "solution": [
      "Dados: F<sub>1</sub> = 60 N; S<sub>1</sub> = 3 cm².",
      "Conversão: S<sub>1</sub> = 3 cm² = 3 × 10⁻⁴ m².",
      "Fórmula: P = F<sub>1</sub>/S<sub>1</sub>.",
      "Substituição: P = 60 / (3 × 10⁻⁴).",
      "Resultado: 200 000 Pa"
    ],
    "distractorAnalysis": [
      "Está incorreta: usou S em cm² (60/3) sem converter para m².",
      "Está incorreta: converteu 1 cm² em 10⁻³ m² em vez de 10⁻⁴ m².",
      "Está incorreta: multiplicou F<sub>1</sub> por S<sub>1</sub> em vez de dividir."
    ],
    "nursingApplication": "Esta pressão de 2,0 × 10⁵ Pa mostra que, com áreas muito pequenas, uma força modesta no êmbolo cria no líquido uma pressão elevada."
  },
  {
    "id": 4155,
    "topicId": 4,
    "question": "Numa prensa hidráulica, uma força F<sub>1</sub> = 25 N atua no êmbolo pequeno, de área S<sub>1</sub> = 2 cm², e equilibra uma força F<sub>2</sub> = 600 N no êmbolo grande. Qual é a área S<sub>2</sub> do êmbolo grande?",
    "options": [
      "0,083 cm²",
      "24 cm²",
      "1200 cm²",
      "48 cm²"
    ],
    "correctIndex": 3,
    "explanation": "Pressões iguais dão F<sub>1</sub>/S<sub>1</sub> = F<sub>2</sub>/S<sub>2</sub>. A área do êmbolo grande é a do pequeno multiplicada pela razão das forças.",
    "solution": [
      "Dados: F<sub>1</sub> = 25 N; S<sub>1</sub> = 2 cm²; F<sub>2</sub> = 600 N.",
      "Fórmula: F<sub>1</sub>/S<sub>1</sub> = F<sub>2</sub>/S<sub>2</sub>, logo S<sub>2</sub> = S<sub>1</sub>·F<sub>2</sub>/F<sub>1</sub>.",
      "Substituição: S<sub>2</sub> = 2 × 600 / 25.",
      "Resultado: 48 cm²"
    ],
    "distractorAnalysis": [
      "Está incorreta: inverteu a relação, calculando F<sub>1</sub>·S<sub>1</sub>/F<sub>2</sub>, em vez de F<sub>2</sub>·S<sub>1</sub>/F<sub>1</sub>.",
      "Está incorreta: calculou apenas a razão F<sub>2</sub>/F<sub>1</sub> = 24, esquecendo-se de multiplicar por S<sub>1</sub>.",
      "Está incorreta: multiplicou F<sub>2</sub> por S<sub>1</sub> sem dividir por F<sub>1</sub>."
    ],
    "nursingApplication": "Ao dimensionar o êmbolo de uma maca hidráulica, a área do êmbolo grande determina quantas vezes a força aplicada é multiplicada."
  },
  {
    "id": 4156,
    "topicId": 4,
    "question": "Numa prensa hidráulica, uma força de 15 N no êmbolo pequeno equilibra 1200 N no êmbolo grande. Quantas vezes é a área do êmbolo grande maior do que a do pequeno?",
    "options": [
      "80",
      "0,0125",
      "1185",
      "18 000"
    ],
    "correctIndex": 0,
    "explanation": "Pressões iguais dão F<sub>1</sub>/S<sub>1</sub> = F<sub>2</sub>/S<sub>2</sub>, logo S<sub>2</sub>/S<sub>1</sub> = F<sub>2</sub>/F<sub>1</sub>.",
    "solution": [
      "Dados: F<sub>1</sub> = 15 N; F<sub>2</sub> = 1200 N.",
      "Fórmula: S<sub>2</sub>/S<sub>1</sub> = F<sub>2</sub>/F<sub>1</sub>.",
      "Substituição: S<sub>2</sub>/S<sub>1</sub> = 1200 / 15.",
      "Resultado: 80"
    ],
    "distractorAnalysis": [
      "Está incorreta: calculou F<sub>1</sub>/F<sub>2</sub>, que é a razão inversa; o êmbolo grande tem a maior área.",
      "Está incorreta: subtraiu as forças (1200 − 15) em vez de as dividir.",
      "Está incorreta: multiplicou as forças (15 × 1200) em vez de dividir F<sub>2</sub> por F<sub>1</sub>."
    ],
    "nursingApplication": "A razão das áreas num elevador hidráulico indica quantas vezes ele multiplica a força de entrada."
  },
  {
    "id": 4157,
    "topicId": 4,
    "question": "No sistema de travões de um carro, o pedal atua no êmbolo de um cilindro mestre de área S<sub>1</sub> = 2 cm². Uma força de 120 N é transmitida pelo líquido a um êmbolo de travão de área S<sub>2</sub> = 8 cm². Qual é a força F<sub>2</sub> sobre esse êmbolo?",
    "options": [
      "480 N",
      "30 N",
      "960 N",
      "120 N"
    ],
    "correctIndex": 0,
    "explanation": "O líquido transmite a pressão do cilindro mestre ao êmbolo do travão: F<sub>1</sub>/S<sub>1</sub> = F<sub>2</sub>/S<sub>2</sub>. O êmbolo de maior área recebe a maior força.",
    "solution": [
      "Dados: F<sub>1</sub> = 120 N; S<sub>1</sub> = 2 cm²; S<sub>2</sub> = 8 cm².",
      "Fórmula: F<sub>2</sub> = F<sub>1</sub>·S<sub>2</sub>/S<sub>1</sub>.",
      "Substituição: F<sub>2</sub> = 120 × 8 / 2.",
      "Resultado: 480 N"
    ],
    "distractorAnalysis": [
      "Está incorreta: multiplicou por S<sub>1</sub>/S<sub>2</sub> em vez de S<sub>2</sub>/S<sub>1</sub>.",
      "Está incorreta: multiplicou F<sub>1</sub> por S<sub>2</sub> (120 × 8), sem dividir por S<sub>1</sub>.",
      "Está incorreta: admitiu forças iguais nos dois êmbolos, quando só as pressões são iguais."
    ],
    "nursingApplication": "O mesmo princípio de multiplicação de força aplica-se numa cama hospitalar de altura regulável por sistema hidráulico."
  },
  {
    "id": 4158,
    "topicId": 4,
    "question": "Numa prensa hidráulica, S<sub>1</sub> = 2 cm² e S<sub>2</sub> = 40 cm². O êmbolo pequeno desloca-se 30 cm. Considerando que o trabalho se conserva (F<sub>1</sub>·d<sub>1</sub> = F<sub>2</sub>·d<sub>2</sub>), quanto se desloca o êmbolo grande?",
    "options": [
      "600 cm",
      "30 cm",
      "1,5 cm",
      "15 cm"
    ],
    "correctIndex": 2,
    "explanation": "Como F<sub>2</sub>/F<sub>1</sub> = S<sub>2</sub>/S<sub>1</sub>, a conservação do trabalho dá d<sub>2</sub> = d<sub>1</sub>·S<sub>1</sub>/S<sub>2</sub>. O êmbolo grande desloca-se menos, na razão inversa das áreas.",
    "solution": [
      "Dados: S<sub>1</sub> = 2 cm²; S<sub>2</sub> = 40 cm²; d<sub>1</sub> = 30 cm.",
      "Fórmula: F<sub>1</sub>·d<sub>1</sub> = F<sub>2</sub>·d<sub>2</sub> e F<sub>2</sub> = F<sub>1</sub>·S<sub>2</sub>/S<sub>1</sub>, logo d<sub>2</sub> = d<sub>1</sub>·S<sub>1</sub>/S<sub>2</sub>.",
      "Substituição: d<sub>2</sub> = 30 × 2 / 40.",
      "Resultado: 1,5 cm"
    ],
    "distractorAnalysis": [
      "Está incorreta: multiplicou d<sub>1</sub> por S<sub>2</sub>/S<sub>1</sub> em vez de por S<sub>1</sub>/S<sub>2</sub>; o êmbolo grande desloca-se menos.",
      "Está incorreta: admitiu deslocamentos iguais, ignorando que a força é multiplicada e o deslocamento diminuído na mesma razão.",
      "Está incorreta: dividiu d<sub>1</sub> por S<sub>1</sub> (30/2), em vez de o multiplicar pela razão S<sub>1</sub>/S<sub>2</sub>."
    ],
    "nursingApplication": "Num elevador hidráulico, para subir a carga uns poucos centímetros é preciso bombear o êmbolo pequeno várias vezes, porque o êmbolo grande se desloca pouco de cada vez."
  },
  {
    "id": 4159,
    "topicId": 4,
    "question": "Uma seringa cheia de soro tem a agulha obstruída, pelo que o líquido não se move quando o enfermeiro empurra o êmbolo com uma força de 6 N. Qual é a afirmação correta sobre a pressão no líquido da seringa, desprezando a diferença de altura?",
    "options": [
      "É maior na entrada da agulha, porque a secção aí é mais pequena.",
      "É menor na entrada da agulha, porque a força se vai perdendo no líquido.",
      "É igual no êmbolo e na entrada da agulha, e igual a F/S do êmbolo.",
      "É igual a F, 6 N, em qualquer ponto do líquido."
    ],
    "correctIndex": 2,
    "explanation": "A pressão exercida pelo êmbolo, P = F/S, transmite-se ao líquido até à agulha. Pressão e força são grandezas diferentes: transmite-se a pressão, não a força.",
    "distractorAnalysis": [
      "Está incorreta: a lei de Pascal transmite o acréscimo de pressão ao líquido até à agulha; a secção da agulha não altera a pressão ao nível da entrada.",
      "Está incorreta: o acréscimo de pressão transmite-se integralmente ao líquido, sem se perder ao longo dele.",
      "Está incorreta: pressão e força são grandezas diferentes; a pressão é F/S e mede-se em Pa, não em N."
    ],
    "nursingApplication": "Com a saída obstruída, a força no êmbolo cria uma pressão P = F/S que se transmite a todo o líquido; por isso, com a mesma força, uma seringa de menor secção gera maior pressão."
  },
  {
    "id": 4160,
    "topicId": 4,
    "question": "Um estudante diz que, numa prensa hidráulica, a força no êmbolo grande é 25 vezes maior, logo a prensa «produz» 25 vezes mais energia do que lhe é fornecida. Qual é a resposta correta?",
    "options": [
      "Não: o êmbolo grande desloca-se 25 vezes menos, por isso o trabalho conserva-se.",
      "Sim: força e deslocamento aumentam na mesma razão, logo a energia também.",
      "Sim: a pressão aumenta 25 vezes no êmbolo grande, e com ela o trabalho.",
      "Não: o êmbolo grande desloca-se o mesmo, mas a pressão é 25 vezes menor."
    ],
    "correctIndex": 0,
    "explanation": "A prensa multiplica a força, mas o êmbolo grande desloca-se menos, na razão inversa das áreas. O trabalho F·d mantém-se, pelo que a prensa não cria energia.",
    "distractorAnalysis": [
      "Está incorreta: só a força aumenta; o deslocamento diminui na razão inversa das áreas, e o trabalho F·d fica igual.",
      "Está incorreta: a pressão é igual nos dois êmbolos (lei de Pascal); o que muda é a força, porque as áreas são diferentes.",
      "Está incorreta: o êmbolo grande desloca-se menos, e a pressão é igual nos dois êmbolos."
    ],
    "nursingApplication": "Num elevador hidráulico de macas, a força aplicada pelo operador é pequena, mas a carga só sobe uma pequena distância por cada deslocamento do êmbolo pequeno."
  },
  {
    "id": 4161,
    "topicId": 4,
    "question": "Um depósito aberto contém água e tem um pequeno orifício na parede, 45 cm abaixo da superfície livre do líquido. Considere g = 9,8 m/s² e líquido ideal. Qual é a velocidade de saída da água?",
    "options": [
      "2,10 m/s",
      "29,7 m/s",
      "2,97 m/s",
      "8,82 m/s"
    ],
    "correctIndex": 2,
    "explanation": "Pelo princípio de Torricelli, a velocidade de saída é a de uma queda livre de altura h: v = √(2·g·h). Com h = 0,45 m obtém-se v ≈ 2,97 m/s.",
    "solution": [
      "Dados: h = 45 cm; g = 9,8 m/s².",
      "Conversão: h = 45 cm = 0,45 m.",
      "Fórmula: v = √(2·g·h).",
      "Substituição: v = √(2 × 9,8 × 0,45) = √8,82.",
      "Resultado: 2,97 m/s"
    ],
    "distractorAnalysis": [
      "Está incorreta: esqueceu o fator 2 dentro da raiz (calculou √(g·h)).",
      "Está incorreta: usou h = 45 sem converter os centímetros para metros.",
      "Está incorreta: calculou 2·g·h mas esqueceu-se de extrair a raiz quadrada."
    ],
    "nursingApplication": "Um frasco aberto com um furo mais fundo deita o líquido com maior velocidade, porque só contam o desnível e g."
  },
  {
    "id": 4162,
    "topicId": 4,
    "question": "Num depósito com água pretende-se que o jato que sai por um pequeno orifício tenha uma velocidade de 4,0 m/s. A que profundidade h, abaixo da superfície livre, deve ficar o orifício? (g = 9,8 m/s²)",
    "options": [
      "0,816 m",
      "1,63 m",
      "0,408 m",
      "0,204 m"
    ],
    "correctIndex": 0,
    "explanation": "Da expressão v = √(2·g·h) resulta h = v²/(2·g). A profundidade tem de ser tal que a queda livre dessa altura dê 4,0 m/s.",
    "solution": [
      "Dados: v = 4,0 m/s; g = 9,8 m/s².",
      "Fórmula: v = √(2·g·h), logo h = v²/(2·g).",
      "Substituição: h = 4,0² / (2 × 9,8) = 16 / 19,6.",
      "Resultado: 0,816 m"
    ],
    "distractorAnalysis": [
      "Está incorreta: esqueceu o fator 2 do denominador e calculou h = v²/g.",
      "Está incorreta: dividiu v por g sem elevar ao quadrado (h = v/g).",
      "Está incorreta: usou h = v/(2·g), sem elevar v ao quadrado."
    ],
    "nursingApplication": "Ao montar um sistema simples de escoamento por gravidade, saber que a velocidade de saída só depende do desnível ajuda a escolher a altura do recipiente."
  },
  {
    "id": 4163,
    "topicId": 4,
    "question": "Uma garrafa de água tem um pequeno orifício a 10 cm abaixo da superfície livre, de onde sai um jato com velocidade de 1,40 m/s. Se o orifício estivesse 90 cm abaixo da superfície livre, qual seria a velocidade de saída? (g = 9,8 m/s²)",
    "options": [
      "12,6 m/s",
      "6,30 m/s",
      "2,80 m/s",
      "4,20 m/s"
    ],
    "correctIndex": 3,
    "explanation": "A velocidade de saída é proporcional a √h. Com h nove vezes maior, v fica três vezes maior: 3 × 1,40 = 4,20 m/s.",
    "solution": [
      "Dados: h<sub>1</sub> = 0,10 m, v<sub>1</sub> = 1,40 m/s; h<sub>2</sub> = 0,90 m; g = 9,8 m/s².",
      "Fórmula: v = √(2·g·h).",
      "Substituição: v<sub>2</sub> = √(2 × 9,8 × 0,90) = √17,64.",
      "Resultado: 4,20 m/s"
    ],
    "distractorAnalysis": [
      "Está incorreta: multiplicou a velocidade por 9, a razão entre as profundidades, como se v fosse proporcional a h.",
      "Está incorreta: dividiu 9 por 2 e multiplicou por 1,40, sem usar a raiz quadrada.",
      "Está incorreta: apenas duplicou a velocidade; com h nove vezes maior, v aumenta 3 vezes."
    ],
    "nursingApplication": "Ao regular a altura de uma bolsa ou de um recipiente de lavagem, convém lembrar que o jato não cresce de modo proporcional ao desnível, mas com a raiz quadrada dele."
  },
  {
    "id": 4164,
    "topicId": 4,
    "question": "Dois depósitos idênticos têm um pequeno orifício à mesma profundidade abaixo da superfície livre. Um contém água (ρ = 1000 kg/m³) e o outro uma solução mais concentrada (ρ = 1200 kg/m³). Comparando as velocidades de saída, conclui-se que:",
    "options": [
      "é maior na solução, porque a sua massa volúmica é maior",
      "é igual nos dois, porque só depende do desnível h e de g",
      "é maior na água, porque a sua massa volúmica é menor",
      "é maior na solução, porque a pressão no orifício é maior"
    ],
    "correctIndex": 1,
    "explanation": "A velocidade de saída é v = √(2·g·h), igual à de uma queda livre de altura h. Não depende da massa volúmica do líquido.",
    "distractorAnalysis": [
      "Está incorreta: a massa volúmica não entra na expressão v = √(2·g·h).",
      "Está incorreta: um líquido menos denso não sai mais depressa; a velocidade não depende de ρ.",
      "Está incorreta: embora a pressão seja maior, a massa a acelerar também é maior; os efeitos compensam-se e v não muda."
    ],
    "nursingApplication": "Ao esvaziar por um orifício soluções de massas volúmicas diferentes, o enfermeiro pode esperar a mesma velocidade de saída para o mesmo desnível."
  },
  {
    "id": 4165,
    "topicId": 4,
    "question": "Num depósito, a velocidade de saída da água por um pequeno orifício, a 30 cm abaixo da superfície livre, é v. A que profundidade deve ficar o orifício para a velocidade de saída ser 2v?",
    "options": [
      "60 cm",
      "120 cm",
      "90 cm",
      "240 cm"
    ],
    "correctIndex": 1,
    "explanation": "Como v é proporcional a √h, para duplicar v é preciso quadruplicar h: 4 × 30 cm = 120 cm.",
    "solution": [
      "Dados: h<sub>1</sub> = 30 cm; v<sub>2</sub> = 2·v<sub>1</sub>.",
      "Fórmula: v = √(2·g·h), logo v ∝ √h e h ∝ v².",
      "Substituição: h<sub>2</sub> = h<sub>1</sub> × 2² = 30 × 4.",
      "Resultado: 120 cm"
    ],
    "distractorAnalysis": [
      "Está incorreta: duplicou a profundidade, como se v fosse proporcional a h.",
      "Está incorreta: triplicou a profundidade, sem usar a relação v ∝ √h.",
      "Está incorreta: multiplicou h por 8 (2³), uma relação que não existe."
    ],
    "nursingApplication": "Perceber que a velocidade cresce com a raiz do desnível ajuda a estimar quanto é preciso subir uma bolsa de lavagem para obter um jato claramente mais rápido."
  },
  {
    "id": 4166,
    "topicId": 4,
    "question": "Um recipiente contém mercúrio (ρ = 13 600 kg/m³) e tem um pequeno orifício na parede, 50 cm abaixo da superfície livre. Considerando líquido ideal e g = 9,8 m/s², qual é a velocidade de saída do mercúrio?",
    "options": [
      "2,21 m/s",
      "9,80 m/s",
      "31,3 m/s",
      "3,13 m/s"
    ],
    "correctIndex": 3,
    "explanation": "A velocidade de saída é v = √(2·g·h) e não depende da massa volúmica do líquido; o valor é igual ao da água à mesma profundidade. Com h = 0,50 m, v ≈ 3,13 m/s.",
    "solution": [
      "Dados: h = 50 cm; g = 9,8 m/s²; ρ = 13 600 kg/m³ (não entra no cálculo).",
      "Conversão: h = 50 cm = 0,50 m.",
      "Fórmula: v = √(2·g·h).",
      "Substituição: v = √(2 × 9,8 × 0,50) = √9,8.",
      "Resultado: 3,13 m/s"
    ],
    "distractorAnalysis": [
      "Está incorreta: esqueceu o fator 2 dentro da raiz (calculou √(g·h)).",
      "Está incorreta: calculou 2·g·h mas esqueceu-se de extrair a raiz quadrada.",
      "Está incorreta: usou h = 50 sem converter os centímetros para metros."
    ],
    "nursingApplication": "Mesmo em líquidos de massas volúmicas muito diferentes, a velocidade de saída por um orifício depende apenas do desnível, o que simplifica estimativas em recipientes com líquidos variados."
  },
  {
    "id": 4167,
    "topicId": 4,
    "question": "Numa aula prática mede-se a velocidade de saída da água por um pequeno orifício e obtém-se um valor ligeiramente inferior ao previsto por v = √(2·g·h). Qual é a explicação mais adequada?",
    "options": [
      "A expressão vale para líquido ideal; num real a velocidade é ligeiramente menor",
      "A expressão só vale para orifícios grandes, nos quais o jato sai mais devagar",
      "A velocidade depende da massa volúmica, que a expressão despreza",
      "A expressão só se aplica a corpos sólidos em queda livre"
    ],
    "correctIndex": 0,
    "explanation": "A expressão de Torricelli é válida para orifício pequeno e líquido ideal. Num líquido real há perdas, pelo que a velocidade medida é ligeiramente menor.",
    "distractorAnalysis": [
      "Está incorreta: a expressão aplica-se a orifícios pequenos.",
      "Está incorreta: a velocidade de saída não depende da massa volúmica do líquido.",
      "Está incorreta: a expressão descreve o líquido que sai, com a velocidade de uma queda livre de altura h."
    ],
    "nursingApplication": "Num saco de soro furado, o jato real sai ligeiramente mais lento do que o valor teórico de Torricelli, porque o líquido real tem viscosidade."
  },
  {
    "id": 4168,
    "topicId": 4,
    "question": "Uma garrafa tem três pequenos orifícios na parede, a 5 cm, 15 cm e 25 cm abaixo da superfície livre da água. Qual das afirmações descreve corretamente os jatos?",
    "options": [
      "Os três jatos têm a mesma velocidade, pois a água é a mesma",
      "O jato de 5 cm é o mais rápido, por estar mais perto da superfície",
      "O jato de 25 cm é o mais rápido, com a velocidade de uma queda livre de 25 cm",
      "O jato de 25 cm é cinco vezes mais rápido do que o de 5 cm"
    ],
    "correctIndex": 2,
    "explanation": "Pelo princípio de Torricelli, v = √(2·g·h) cresce com o desnível h até ao orifício. Por isso o orifício mais fundo dá o jato mais rápido.",
    "distractorAnalysis": [
      "Está incorreta: a velocidade depende do desnível h de cada orifício.",
      "Está incorreta: é o mais lento: tem o menor desnível.",
      "Está incorreta: v não é proporcional a h; é proporcional a √h, logo a razão é √5 ≈ 2,2."
    ],
    "nursingApplication": "Num saco de soro perfurado acidentalmente, o líquido sai mais depressa por um furo situado mais abaixo da superfície do soro."
  },
  {
    "id": 4169,
    "topicId": 4,
    "question": "Ao administrar uma injeção, o êmbolo de uma seringa mantém uma pressão constante de 2,0 × 10⁴ Pa no líquido durante a saída de 5,0 mL. Qual é o trabalho realizado pela pressão sobre o líquido? (1 mL = 10⁻⁶ m³)",
    "options": [
      "1,0 × 10⁵ J",
      "100 J",
      "4,0 × 10⁹ J",
      "0,10 J"
    ],
    "correctIndex": 3,
    "explanation": "Com pressão constante, W = P·ΔV. Com ΔV = 5,0 × 10⁻⁶ m³ obtém-se W = 0,10 J.",
    "solution": [
      "Dados: P = 2,0 × 10⁴ Pa; ΔV = 5,0 mL.",
      "Conversão: ΔV = 5,0 × 10⁻⁶ m³.",
      "Fórmula: W = P·ΔV.",
      "Substituição: W = 2,0 × 10⁴ × 5,0 × 10⁻⁶.",
      "Resultado: 0,10 J"
    ],
    "distractorAnalysis": [
      "Está incorreta: multiplicou a pressão por 5,0 sem converter os mL para m³.",
      "Está incorreta: converteu 1 mL em 10⁻³ m³ em vez de 10⁻⁶ m³.",
      "Está incorreta: dividiu a pressão pelo volume em vez de os multiplicar."
    ],
    "nursingApplication": "Ao empurrar o êmbolo de uma seringa, o enfermeiro realiza trabalho sobre o líquido; esse valor depende da pressão aplicada e do volume deslocado."
  },
  {
    "id": 4170,
    "topicId": 4,
    "question": "Uma bomba desloca 60 mL de líquido contra uma pressão constante de 90 mmHg. Qual é o trabalho realizado? (1 mmHg ≈ 133,3 Pa; 1 mL = 10⁻⁶ m³)",
    "options": [
      "5400 J",
      "0,0054 J",
      "0,720 J",
      "720 J"
    ],
    "correctIndex": 2,
    "explanation": "O trabalho com pressão constante é W = P·ΔV, com P em Pa e ΔV em m³. Assim, P = 90 × 133,3 ≈ 11 997 Pa e W ≈ 0,720 J.",
    "solution": [
      "Dados: P = 90 mmHg; ΔV = 60 mL; 1 mmHg ≈ 133,3 Pa.",
      "Conversão: P = 90 × 133,3 = 11 997 Pa; ΔV = 60 × 10⁻⁶ m³.",
      "Fórmula: W = P·ΔV.",
      "Substituição: W = 11 997 × 60 × 10⁻⁶.",
      "Resultado: 0,720 J"
    ],
    "distractorAnalysis": [
      "Está incorreta: multiplicou 90 por 60 sem converter nem a pressão nem o volume.",
      "Está incorreta: converteu o volume, mas não converteu os mmHg para Pa.",
      "Está incorreta: converteu 1 mL em 10⁻³ m³ em vez de 10⁻⁶ m³."
    ],
    "nursingApplication": "Numa bomba de perfusão, a pressão medida em mmHg tem de ser convertida para Pa para se calcular a energia transferida ao líquido."
  },
  {
    "id": 4171,
    "topicId": 4,
    "question": "Uma seringa tem um êmbolo de área S = 2,0 cm². Para o empurrar 3,0 cm, mantém-se uma pressão constante de 1,5 × 10⁵ Pa no líquido. Qual é o trabalho realizado pela pressão? (1 cm² = 10⁻⁴ m²)",
    "options": [
      "90 J",
      "0,90 J",
      "9000 J",
      "2,25 × 10⁷ J"
    ],
    "correctIndex": 1,
    "explanation": "Com pressão constante, W = F·d = P·S·d = P·ΔV. Com S = 2,0 × 10⁻⁴ m² e d = 0,030 m, o volume deslocado é 6,0 × 10⁻⁶ m³ e W = 0,90 J.",
    "solution": [
      "Dados: P = 1,5 × 10⁵ Pa; S = 2,0 cm²; d = 3,0 cm.",
      "Conversão: S = 2,0 × 10⁻⁴ m²; d = 0,030 m.",
      "Fórmula: W = P·S·d.",
      "Substituição: W = 1,5 × 10⁵ × 2,0 × 10⁻⁴ × 0,030.",
      "Resultado: 0,90 J"
    ],
    "distractorAnalysis": [
      "Está incorreta: converteu a área, mas usou o deslocamento em cm (3,0) em vez de em m (0,030).",
      "Está incorreta: usou a área em cm² (2,0) sem a converter para m².",
      "Está incorreta: dividiu a pressão pela área em vez de a multiplicar."
    ],
    "nursingApplication": "Ao injetar lentamente um fármaco, o trabalho feito no êmbolo corresponde ao produto da pressão no líquido pelo volume que a seringa desloca."
  },
  {
    "id": 4172,
    "topicId": 4,
    "question": "Uma bomba mantém uma pressão constante de 1,0 × 10⁴ Pa e realiza um trabalho de 0,50 J a deslocar líquido. Que volume de líquido foi deslocado?",
    "options": [
      "5,0 × 10⁻⁵ m³",
      "5,0 × 10³ m³",
      "2,0 × 10⁴ m³",
      "5,0 × 10⁻² m³"
    ],
    "correctIndex": 0,
    "explanation": "De W = P·ΔV resulta ΔV = W/P = 0,50 / (1,0 × 10⁴) = 5,0 × 10⁻⁵ m³, ou seja, 50 mL.",
    "solution": [
      "Dados: P = 1,0 × 10⁴ Pa; W = 0,50 J.",
      "Fórmula: W = P·ΔV, logo ΔV = W/P.",
      "Substituição: ΔV = 0,50 / (1,0 × 10⁴).",
      "Resultado: 5,0 × 10⁻⁵ m³"
    ],
    "distractorAnalysis": [
      "Está incorreta: multiplicou o trabalho pela pressão em vez de dividir (ΔV = W·P).",
      "Está incorreta: inverteu a divisão e calculou P/W em vez de W/P.",
      "Está incorreta: converteu o resultado para litros (50 mL = 0,050 L) e indicou-o como m³."
    ],
    "nursingApplication": "Conhecendo o trabalho e a pressão de uma bomba de infusão, é possível estimar o volume de líquido que ela desloca."
  },
  {
    "id": 4173,
    "topicId": 4,
    "question": "Uma bomba realiza um trabalho de 1,2 J a deslocar 90 mL de líquido, a pressão constante. Qual é essa pressão, em mmHg? (1 mmHg ≈ 133,3 Pa; 1 mL = 10⁻⁶ m³)",
    "options": [
      "100 mmHg",
      "13 333 mmHg",
      "1,78 × 10⁶ mmHg",
      "10 mmHg"
    ],
    "correctIndex": 0,
    "explanation": "De W = P·ΔV resulta P = W/ΔV = 1,2 / (90 × 10⁻⁶) ≈ 13 333 Pa. Dividindo por 133,3 obtém-se P ≈ 100 mmHg.",
    "solution": [
      "Dados: W = 1,2 J; ΔV = 90 mL; 1 mmHg ≈ 133,3 Pa.",
      "Conversão: ΔV = 90 × 10⁻⁶ m³.",
      "Fórmula: P = W/ΔV; P (mmHg) = P (Pa) / 133,3.",
      "Substituição: P = 1,2 / (90 × 10⁻⁶) ≈ 13 333 Pa; 13 333 / 133,3.",
      "Resultado: 100 mmHg"
    ],
    "distractorAnalysis": [
      "Está incorreta: obteve a pressão em Pa (13 333 Pa) e não a converteu para mmHg.",
      "Está incorreta: multiplicou por 133,3 em vez de dividir ao converter de Pa para mmHg.",
      "Está incorreta: converteu 1 mL em 10⁻⁵ m³ em vez de 10⁻⁶ m³."
    ],
    "nursingApplication": "Converter a pressão de Pa para mmHg permite comparar o resultado com os valores de pressão que o enfermeiro lê em monitores e manómetros."
  },
  {
    "id": 4174,
    "topicId": 4,
    "question": "Um fluido está a uma pressão de 8000 Pa. Sabendo que 1 Pa = 1 J/m³, qual é o significado energético deste valor?",
    "options": [
      "Cada m² da parede recebe 8000 J de energia",
      "Cada m³ de fluido tem 8000 J de energia ligada à pressão",
      "Cada kg de fluido tem 8000 J de energia",
      "O fluido realiza 8000 J de trabalho em qualquer deslocamento"
    ],
    "correctIndex": 1,
    "explanation": "Como 1 Pa = 1 N/m² = 1 J/m³, a pressão mede a energia por unidade de volume do fluido. Essa energia pode passar a energia cinética ou realizar trabalho.",
    "distractorAnalysis": [
      "Está incorreta: o pascal é energia por unidade de volume, e não por unidade de área.",
      "Está incorreta: a energia está referida ao volume (m³) e não à massa.",
      "Está incorreta: o trabalho é P·ΔV e depende do volume deslocado."
    ],
    "nursingApplication": "A pressão de um soro ou do sangue pode ser entendida como energia por volume de líquido, que se converte em movimento do fluido ao longo de um cateter."
  },
  {
    "id": 4175,
    "topicId": 4,
    "question": "Um enfermeiro empurra devagar o êmbolo de uma seringa, mantendo a mesma pressão no líquido. Em que condição se pode calcular o trabalho diretamente por W = P·ΔV?",
    "options": [
      "Quando o líquido é aquecido durante o deslocamento",
      "Quando o volume deslocado é maior do que 1 m³",
      "Quando a pressão se mantém constante durante o deslocamento",
      "Quando a área do êmbolo é igual à da agulha"
    ],
    "correctIndex": 2,
    "explanation": "Se a pressão for constante, W = F·d = P·S·d = P·ΔV. Se a pressão variasse muito, seria preciso usar um valor médio ou dividir o processo em partes.",
    "distractorAnalysis": [
      "Está incorreta: a expressão não exige aquecimento; exige pressão constante.",
      "Está incorreta: o valor do volume não condiciona a expressão; o que conta é a pressão ser constante.",
      "Está incorreta: a expressão W = P·ΔV não depende da relação entre áreas."
    ],
    "nursingApplication": "Ao injetar um fármaco com pressão aproximadamente constante, é válido estimar o trabalho como o produto da pressão pelo volume administrado."
  },
  {
    "id": 4176,
    "topicId": 4,
    "question": "Em cada sístole, o ventrículo esquerdo ejeta 60 mL de sangue (ρ = 1060 kg/m³) para a aorta, com pressão média de 90 mmHg e velocidade de 0,40 m/s. Qual é o trabalho sistólico W<sub>s</sub>? (1 mmHg ≈ 133,3 Pa; 1 mL = 10⁻⁶ m³)",
    "options": [
      "0,0105 J",
      "7,25 J",
      "725 J",
      "0,725 J"
    ],
    "correctIndex": 3,
    "explanation": "O trabalho sistólico é W<sub>s</sub> = P<sub>média</sub>·V<sub>s</sub> + ½·m·v², com m = ρ·V<sub>s</sub>. O termo de pressão vale 0,720 J e o cinético cerca de 0,0051 J.",
    "solution": [
      "Dados: V<sub>s</sub> = 60 mL; P<sub>média</sub> = 90 mmHg; v = 0,40 m/s; ρ = 1060 kg/m³.",
      "Conversão: P = 90 × 133,3 = 11 997 Pa; V<sub>s</sub> = 60 × 10⁻⁶ m³; m = 1060 × 60 × 10⁻⁶ = 0,0636 kg.",
      "Fórmula: W<sub>s</sub> = P<sub>média</sub>·V<sub>s</sub> + ½·m·v².",
      "Substituição: W<sub>s</sub> = 11 997 × 60 × 10⁻⁶ + ½ × 0,0636 × 0,40² = 0,720 + 0,0051.",
      "Resultado: 0,725 J"
    ],
    "distractorAnalysis": [
      "Está incorreta: não converteu os mmHg para Pa.",
      "Está incorreta: converteu 1 mL em 10⁻⁵ m³ em vez de 10⁻⁶ m³.",
      "Está incorreta: converteu 1 mL em 10⁻³ m³ em vez de 10⁻⁶ m³."
    ],
    "nursingApplication": "O trabalho sistólico quantifica a energia que o coração gasta em cada batimento, útil para compreender o esforço cardíaco em doentes com pressões mais elevadas."
  },
  {
    "id": 4177,
    "topicId": 4,
    "question": "Em cada sístole, o ventrículo esquerdo ejeta 80 mL de sangue (ρ = 1060 kg/m³) com velocidade de 0,60 m/s. Qual é a energia cinética ½·m·v² do sangue ejetado, com m = ρ·V<sub>s</sub>? (1 mL = 10⁻⁶ m³)",
    "options": [
      "0,0305 J",
      "0,0254 J",
      "0,0153 J",
      "15,3 J"
    ],
    "correctIndex": 2,
    "explanation": "A massa ejetada é m = ρ·V<sub>s</sub> = 1060 × 80 × 10⁻⁶ = 0,0848 kg. A energia cinética é ½·0,0848·0,60² ≈ 0,0153 J.",
    "solution": [
      "Dados: V<sub>s</sub> = 80 mL; ρ = 1060 kg/m³; v = 0,60 m/s.",
      "Conversão: V<sub>s</sub> = 80 × 10⁻⁶ m³; m = 1060 × 80 × 10⁻⁶ = 0,0848 kg.",
      "Fórmula: E<sub>c</sub> = ½·m·v².",
      "Substituição: E<sub>c</sub> = ½ × 0,0848 × 0,60².",
      "Resultado: 0,0153 J"
    ],
    "distractorAnalysis": [
      "Está incorreta: esqueceu o fator ½ da energia cinética.",
      "Está incorreta: não elevou a velocidade ao quadrado (usou v em vez de v²).",
      "Está incorreta: usou a massa em gramas (84,8 g) em vez de em quilogramas."
    ],
    "nursingApplication": "A energia cinética do sangue ejetado é muito pequena face ao trabalho contra a pressão da aorta, o que ajuda a perceber que o esforço do coração é sobretudo de pressão."
  },
  {
    "id": 4178,
    "topicId": 4,
    "question": "Durante o exercício, o ventrículo esquerdo ejeta 100 mL de sangue (ρ = 1060 kg/m³) para a aorta, com pressão média de 140 mmHg e velocidade de 1,2 m/s. Qual é o trabalho sistólico W<sub>s</sub>? (1 mmHg ≈ 133,3 Pa; 1 mL = 10⁻⁶ m³)",
    "options": [
      "1,87 J",
      "1,79 J",
      "0,0763 J",
      "1,94 J"
    ],
    "correctIndex": 3,
    "explanation": "W<sub>s</sub> = P<sub>média</sub>·V<sub>s</sub> + ½·m·v². O termo de pressão vale 1,866 J e o cinético 0,0763 J; a soma dá cerca de 1,94 J.",
    "solution": [
      "Dados: V<sub>s</sub> = 100 mL; P<sub>média</sub> = 140 mmHg; v = 1,2 m/s; ρ = 1060 kg/m³.",
      "Conversão: P = 140 × 133,3 = 18 662 Pa; V<sub>s</sub> = 100 × 10⁻⁶ m³; m = 0,106 kg.",
      "Fórmula: W<sub>s</sub> = P<sub>média</sub>·V<sub>s</sub> + ½·m·v².",
      "Substituição: W<sub>s</sub> = 18 662 × 100 × 10⁻⁶ + ½ × 0,106 × 1,2² = 1,866 + 0,0763.",
      "Resultado: 1,94 J"
    ],
    "distractorAnalysis": [
      "Está incorreta: considerou apenas o termo P<sub>média</sub>·V<sub>s</sub> e esqueceu a energia cinética.",
      "Está incorreta: subtraiu a energia cinética em vez de a somar.",
      "Está incorreta: considerou apenas a energia cinética e esqueceu o termo de pressão."
    ],
    "nursingApplication": "Em exercício intenso a pressão e a velocidade de ejeção aumentam, e o trabalho sistólico sobe, o que ajuda a interpretar o maior esforço do coração."
  },
  {
    "id": 4179,
    "topicId": 4,
    "question": "Admita que a energia cinética do sangue ejetado é desprezável. Se o trabalho sistólico for 1,0 J e a pressão média na aorta for 100 mmHg, qual é o volume sistólico? (1 mmHg ≈ 133,3 Pa; 1 mL = 10⁻⁶ m³)",
    "options": [
      "1,0 × 10⁴ mL",
      "75 mL",
      "0,075 mL",
      "1,33 × 10¹⁰ mL"
    ],
    "correctIndex": 1,
    "explanation": "Com W<sub>s</sub> ≈ P<sub>média</sub>·V<sub>s</sub>, tem-se V<sub>s</sub> = W<sub>s</sub>/P<sub>média</sub> = 1,0 / 13 330 ≈ 7,5 × 10⁻⁵ m³, ou seja, 75 mL.",
    "solution": [
      "Dados: W<sub>s</sub> = 1,0 J; P<sub>média</sub> = 100 mmHg.",
      "Conversão: P = 100 × 133,3 = 13 330 Pa.",
      "Fórmula: V<sub>s</sub> = W<sub>s</sub> / P<sub>média</sub>.",
      "Substituição: V<sub>s</sub> = 1,0 / 13 330 ≈ 7,5 × 10⁻⁵ m³.",
      "Resultado: 75 mL"
    ],
    "distractorAnalysis": [
      "Está incorreta: não converteu os mmHg para Pa (usou P = 100) e obteve um volume enorme.",
      "Está incorreta: converteu o volume de m³ para mL multiplicando por 10³ em vez de 10⁶.",
      "Está incorreta: multiplicou o trabalho pela pressão em vez de dividir."
    ],
    "nursingApplication": "O volume sistólico, em mL por batimento, é um valor que o enfermeiro encontra em registos hemodinâmicos e que se relaciona com a energia gasta pelo coração."
  },
  {
    "id": 4180,
    "topicId": 4,
    "question": "Na expressão W<sub>s</sub> = P<sub>média</sub>·V<sub>s</sub> + ½·m·v², que energia é representada pela parcela ½·m·v²?",
    "options": [
      "A energia cinética do sangue ejetado, com m = ρ·V<sub>s</sub>",
      "O trabalho feito contra a pressão da aorta",
      "A energia potencial do sangue a uma certa altura",
      "A energia perdida por atrito nas paredes dos vasos"
    ],
    "correctIndex": 0,
    "explanation": "O trabalho sistólico soma o trabalho P·V para vencer a pressão da aorta com a energia cinética ½·m·v² do sangue, que sai com velocidade v e massa m = ρ·V<sub>s</sub>.",
    "distractorAnalysis": [
      "Está incorreta: esse é o termo P<sub>média</sub>·V<sub>s</sub>, e não a parcela cinética.",
      "Está incorreta: a expressão não inclui energia potencial gravítica.",
      "Está incorreta: a parcela ½·m·v² não representa perdas por atrito."
    ],
    "nursingApplication": "Distinguir os dois termos ajuda a perceber que o coração gasta energia tanto a vencer a pressão arterial como a pôr o sangue em movimento."
  },
  {
    "id": 4181,
    "topicId": 4,
    "question": "Ao analisar um exemplo em repouso, um estudante obtém P·V ≈ 0,93 J e ½·m·v² ≈ 0,0093 J para uma sístole. Que conclusão é adequada?",
    "options": [
      "As duas parcelas são da mesma ordem de grandeza e nenhuma se pode desprezar",
      "A energia cinética é cerca de 1 % do trabalho de pressão, pelo que é pequena",
      "A energia cinética domina, porque o sangue sai do coração com velocidade",
      "A energia cinética é metade do trabalho de pressão, como indica o fator ½"
    ],
    "correctIndex": 1,
    "explanation": "Em repouso, a parcela de energia cinética é pequena face ao termo P·V: 0,0093 / 0,93 = 0,01, ou seja, cerca de 1 %. O trabalho sistólico é sobretudo trabalho de pressão.",
    "distractorAnalysis": [
      "Está incorreta: a parcela cinética é cem vezes menor do que a de pressão.",
      "Está incorreta: o termo P·V é o dominante; o cinético é muito pequeno.",
      "Está incorreta: o fator ½ faz parte da fórmula da energia cinética e não da razão entre as parcelas."
    ],
    "nursingApplication": "Ao interpretar o esforço do coração em repouso, o enfermeiro pode associá-lo sobretudo à pressão arterial que o ventrículo tem de vencer."
  },
  {
    "id": 4182,
    "topicId": 4,
    "question": "Um alpinista sobe de 0 m até 3000 m de altitude e a pressão atmosférica diminui. Qual é a razão principal?",
    "options": [
      "Há menos ar por cima, logo o peso da coluna de ar é menor",
      "A massa volúmica do ar aumenta com a altitude, o que reduz o seu peso",
      "A gravidade deixa de atuar sobre o ar acima de poucos quilómetros",
      "O ar é aquecido pelo corpo e exerce menos pressão sobre ele"
    ],
    "correctIndex": 0,
    "explanation": "A pressão atmosférica é devida ao peso do ar que está acima. Quanto maior a altitude, menos ar há por cima e menor é a pressão.",
    "distractorAnalysis": [
      "Está incorreta: a massa volúmica do ar diminui com a altitude.",
      "Está incorreta: a gravidade continua a atuar sobre o ar; o que muda é a quantidade de ar acima.",
      "Está incorreta: a descida da pressão é devida à menor quantidade de ar por cima, e não ao aquecimento do corpo."
    ],
    "nursingApplication": "Ao acompanhar um doente transportado de ambulância ou helicóptero para uma zona mais alta, a pressão exterior diminui, o que influencia gases do corpo, como o do ouvido médio."
  },
  {
    "id": 4183,
    "topicId": 4,
    "question": "Ao nível do mar a pressão atmosférica é 760 mmHg. A cerca de 5,5 km de altitude a pressão reduz-se a metade. Qual é, aproximadamente, a pressão a essa altitude?",
    "options": [
      "190 mmHg",
      "755 mmHg",
      "1520 mmHg",
      "380 mmHg"
    ],
    "correctIndex": 3,
    "explanation": "A pressão atmosférica diminui com a altitude sem seguir uma relação linear: a cerca de 5,5 km reduz-se a metade, ou seja, 760 / 2 = 380 mmHg.",
    "solution": [
      "Dados: P<sub>0</sub> = 760 mmHg; a 5,5 km a pressão é metade.",
      "Fórmula: P = P<sub>0</sub> / 2.",
      "Substituição: P = 760 / 2.",
      "Resultado: 380 mmHg"
    ],
    "distractorAnalysis": [
      "Está incorreta: reduziu a pressão a um quarto em vez de a metade.",
      "Está incorreta: subtraiu 5,5 mmHg, como se a queda de pressão fosse de 1 mmHg por cada km.",
      "Está incorreta: duplicou a pressão em vez de a dividir por dois."
    ],
    "nursingApplication": "Ao preparar o transporte de um doente para grande altitude, convém saber que a pressão do ar baixa muito, pelo que os gases do corpo e dos dispositivos se expandem."
  },
  {
    "id": 4184,
    "topicId": 4,
    "question": "Um saco selado contém 20 mL de ar a 1,0 atm. Levado a uma altitude de 5,5 km, onde a pressão é 0,50 atm, e mantendo a temperatura constante, qual é o novo volume do ar?",
    "options": [
      "10 mL",
      "19,5 mL",
      "40 mL",
      "80 mL"
    ],
    "correctIndex": 2,
    "explanation": "Pela lei de Boyle, a temperatura constante P·V é constante. Com a pressão reduzida a metade, o volume duplica: 20 mL passam a 40 mL.",
    "solution": [
      "Dados: V<sub>1</sub> = 20 mL; P<sub>1</sub> = 1,0 atm; P<sub>2</sub> = 0,50 atm; T constante.",
      "Fórmula: P<sub>1</sub>·V<sub>1</sub> = P<sub>2</sub>·V<sub>2</sub>, logo V<sub>2</sub> = P<sub>1</sub>·V<sub>1</sub> / P<sub>2</sub>.",
      "Substituição: V<sub>2</sub> = 1,0 × 20 / 0,50.",
      "Resultado: 40 mL"
    ],
    "distractorAnalysis": [
      "Está incorreta: multiplicou o volume inicial pela pressão final (20 × 0,50) em vez de usar P·V constante.",
      "Está incorreta: subtraiu 0,5 ao volume inicial, tratando o efeito como aditivo.",
      "Está incorreta: multiplicou o volume por 4, quando a pressão apenas se reduziu a metade."
    ],
    "nursingApplication": "Seringas e bolsas com ar retido expandem-se quando a pressão exterior desce, por exemplo num transporte aéreo, e isso deve ser previsto pelo enfermeiro."
  },
  {
    "id": 4185,
    "topicId": 4,
    "question": "Em grande altitude diz-se que o ar é mais rarefeito. O que significa esta expressão?",
    "options": [
      "O ar está mais comprimido, por isso tem maior massa volúmica",
      "O ar tem a mesma massa volúmica, mas a pressão é menor",
      "O ar está mais quente, por isso ocupa um volume maior",
      "A massa volúmica do ar é menor: há menos ar por volume"
    ],
    "correctIndex": 3,
    "explanation": "Com a altitude, a pressão atmosférica diminui e a massa volúmica do ar também. O ar é então mais rarefeito, com menos ar em cada unidade de volume.",
    "distractorAnalysis": [
      "Está incorreta: a altitude reduz a pressão e a massa volúmica do ar diminui.",
      "Está incorreta: a massa volúmica do ar também diminui com a altitude.",
      "Está incorreta: a rarefação deve-se à menor quantidade de ar por unidade de volume e não à temperatura."
    ],
    "nursingApplication": "Em altitude, cada inspiração contém menos oxigénio, pelo que o enfermeiro vigia a saturação de oxigénio de um doente transportado para locais elevados."
  },
  {
    "id": 4186,
    "topicId": 4,
    "question": "Uma garrafa de plástico flexível vazia é fechada no cume de uma montanha e levada depois para o nível do mar, à mesma temperatura. O que acontece ao ar no seu interior?",
    "options": [
      "O volume do ar aumenta, porque a pressão exterior aumenta",
      "O volume do ar diminui, pois a pressão exterior aumenta",
      "O volume do ar mantém-se, porque a garrafa está fechada",
      "O volume do ar aumenta, porque o ar exterior é mais rarefeito"
    ],
    "correctIndex": 1,
    "explanation": "Ao descer, ocorrem os fenómenos inversos aos da subida: a pressão aumenta e, com T constante, P·V constante implica que o volume do ar diminui.",
    "distractorAnalysis": [
      "Está incorreta: pela lei de Boyle, se a pressão aumenta, o volume do ar diminui.",
      "Está incorreta: a garrafa é flexível, por isso o ar fechado ajusta o seu volume à pressão exterior.",
      "Está incorreta: ao nível do mar o ar não é mais rarefeito; a pressão é maior e comprime o ar."
    ],
    "nursingApplication": "Ao regressar de um transporte em altitude, as bolsas e dispositivos flexíveis com ar fechado voltam a comprimir-se, o que pode alterar o volume útil."
  },
  {
    "id": 4187,
    "topicId": 4,
    "question": "Um balão flexível fechado tem 15 mL de ar ao nível do mar (1,0 atm). Quando sobe, passa a ter 30 mL, à mesma temperatura. Qual é a pressão do ar à altitude atingida?",
    "options": [
      "0,50 atm",
      "2,0 atm",
      "1,0 atm",
      "30 atm"
    ],
    "correctIndex": 0,
    "explanation": "Pela lei de Boyle, a temperatura constante P·V é constante: P<sub>2</sub> = P<sub>1</sub>·V<sub>1</sub>/V<sub>2</sub> = 1,0 × 15 / 30 = 0,50 atm. O volume duplicou porque a pressão caiu para metade.",
    "solution": [
      "Dados: P<sub>1</sub> = 1,0 atm; V<sub>1</sub> = 15 mL; V<sub>2</sub> = 30 mL; T constante.",
      "Fórmula: P<sub>1</sub>·V<sub>1</sub> = P<sub>2</sub>·V<sub>2</sub>, logo P<sub>2</sub> = P<sub>1</sub>·V<sub>1</sub> / V<sub>2</sub>.",
      "Substituição: P<sub>2</sub> = 1,0 × 15 / 30.",
      "Resultado: 0,50 atm"
    ],
    "distractorAnalysis": [
      "Está incorreta: aplicou P<sub>2</sub> = P<sub>1</sub>·V<sub>2</sub>/V<sub>1</sub>, invertendo a lei de Boyle.",
      "Está incorreta: admitiu que a pressão não mudava, apesar de o volume ter variado.",
      "Está incorreta: multiplicou a pressão inicial pelo volume final (1,0 × 30)."
    ],
    "nursingApplication": "Quando um balão ou uma bolsa com ar aumenta de volume ao subir, o enfermeiro pode deduzir que a pressão exterior desceu na mesma proporção."
  },
  {
    "id": 4188,
    "topicId": 4,
    "question": "Durante a descolagem de um avião, uma passageira sente os ouvidos tapados e a audição abafada. Que fenómeno ocorre no ouvido médio?",
    "options": [
      "O ar do ouvido médio comprime-se e o tímpano é empurrado para dentro",
      "A pressão no ouvido médio iguala a exterior, pois a trompa está aberta",
      "O ar do ouvido médio expande-se e empurra o tímpano para fora",
      "A massa volúmica do ar aumenta e o tímpano fica mais rígido"
    ],
    "correctIndex": 2,
    "explanation": "Ao subir, a pressão exterior diminui e o ar do ouvido médio expande-se, empurrando o tímpano para fora. Daí a sensação de tensão e a audição abafada.",
    "distractorAnalysis": [
      "Está incorreta: é o que ocorre na descida; ao subir, a pressão exterior diminui e o ar expande.",
      "Está incorreta: a trompa só se abre, por exemplo, ao engolir; por isso surge a tensão.",
      "Está incorreta: ao subir, a massa volúmica do ar diminui e o ar expande-se."
    ],
    "nursingApplication": "Ao viajar com um doente em transporte aéreo, o enfermeiro pode explicar-lhe que a tensão nos ouvidos se deve ao ar do ouvido médio que se expande."
  },
  {
    "id": 4189,
    "topicId": 4,
    "question": "Num cabo de montanha, uma utente sente tensão no ouvido e engole em seco. Qual é a função da trompa de Eustáquio nesse alívio?",
    "options": [
      "Liga o ouvido médio à faringe e, ao abrir-se, equilibra a pressão",
      "Liga o ouvido externo à faringe e expele o ar do canal auditivo",
      "Liga o ouvido médio à faringe e, ao engolir, fecha-se para reter o ar",
      "Liga os dois ouvidos médios e iguala a pressão entre eles"
    ],
    "correctIndex": 0,
    "explanation": "A trompa de Eustáquio liga o ouvido médio à faringe. Engolir em seco ou bocejar abre-a e a pressão do ar do ouvido médio equilibra-se com a exterior.",
    "distractorAnalysis": [
      "Está incorreta: a trompa liga o ouvido médio, e não o externo, à faringe.",
      "Está incorreta: ao engolir a trompa abre-se, e não se fecha.",
      "Está incorreta: a trompa liga o ouvido médio à faringe e não os dois ouvidos entre si."
    ],
    "nursingApplication": "Ao acompanhar um doente numa subida rápida, o enfermeiro pode aconselhar a engolir ou a bocejar para equilibrar a pressão nos ouvidos."
  },
  {
    "id": 4190,
    "topicId": 4,
    "question": "Numa descolagem, uma criança queixa-se de ouvidos tapados e engolir em seco não resolve. Que manobra corresponde à manobra de Toynbee?",
    "options": [
      "Soprar suavemente com o nariz tapado e a boca fechada",
      "Bocejar com a boca bem aberta e o nariz livre",
      "Engolir com o nariz tapado",
      "Tapar os ouvidos com as mãos e inspirar fundo"
    ],
    "correctIndex": 2,
    "explanation": "A manobra de Toynbee consiste em engolir com o nariz tapado, o que ajuda a abrir a trompa de Eustáquio quando engolir em seco não basta.",
    "distractorAnalysis": [
      "Está incorreta: essa é a manobra de Valsalva.",
      "Está incorreta: bocejar ajuda a abrir a trompa, mas não é a manobra de Toynbee, que exige engolir com o nariz tapado.",
      "Está incorreta: tapar os ouvidos com as mãos não abre a trompa de Eustáquio."
    ],
    "nursingApplication": "Perante uma criança com dor de ouvidos num voo, o enfermeiro pode sugerir engolir com o nariz tapado como alternativa quando engolir em seco falha."
  },
  {
    "id": 4191,
    "topicId": 4,
    "question": "Ao aterrar, uma passageira sente tensão no ouvido durante a descida do avião. Que alteração ocorre no ouvido médio?",
    "options": [
      "A pressão exterior diminui e o ar do ouvido médio expande-se, empurrando o tímpano para fora",
      "A pressão exterior aumenta, o ar comprime-se e o tímpano é empurrado para dentro",
      "A pressão exterior aumenta e o ar do ouvido médio expande-se, empurrando o tímpano para fora",
      "A pressão exterior mantém-se e só a trompa de Eustáquio se fecha, tensionando o tímpano"
    ],
    "correctIndex": 1,
    "explanation": "Ao descer ocorrem os fenómenos inversos aos da subida: a pressão exterior aumenta, o ar do ouvido médio comprime-se e o tímpano é empurrado para dentro.",
    "distractorAnalysis": [
      "Está incorreta: é o que ocorre ao subir; na descida a pressão exterior aumenta.",
      "Está incorreta: se a pressão exterior aumenta, o ar comprime-se e não se expande.",
      "Está incorreta: ao descer, a pressão exterior aumenta e comprime o ar do ouvido médio."
    ],
    "nursingApplication": "Num doente transportado de helicóptero, a queixa de ouvido tapado na descida pode ser atenuada engolindo ou bocejando para abrir a trompa de Eustáquio."
  },
  {
    "id": 4192,
    "topicId": 4,
    "question": "Um mergulhador desce a 25 m de profundidade na água. Sabendo que, na água, a pressão aumenta cerca de 1 atm por cada 10 m e que à superfície a pressão é 1 atm, qual é a pressão total a essa profundidade?",
    "options": [
      "2,5 atm",
      "26 atm",
      "4,5 atm",
      "3,5 atm"
    ],
    "correctIndex": 3,
    "explanation": "A pressão total é P<sub>0</sub> mais a pressão da água: 1 atm + 25/10 atm = 3,5 atm.",
    "solution": [
      "Dados: P<sub>0</sub> = 1 atm; aumento de 1 atm por cada 10 m; h = 25 m.",
      "Fórmula: P = P<sub>0</sub> + h/10 (em atm, h em m).",
      "Substituição: P = 1 + 25/10 = 1 + 2,5.",
      "Resultado: 3,5 atm"
    ],
    "distractorAnalysis": [
      "Está incorreta: contou só a pressão da água e esqueceu a pressão atmosférica à superfície.",
      "Está incorreta: usou 1 atm por cada metro em vez de por cada 10 m e somou 1 atm.",
      "Está incorreta: somou a pressão atmosférica duas vezes ao valor da água (1 + 1 + 2,5)."
    ],
    "nursingApplication": "O enfermeiro de medicina hiperbárica ou de mergulho deve saber que a pressão sobre o corpo aumenta rapidamente com a profundidade."
  },
  {
    "id": 4193,
    "topicId": 4,
    "question": "Um mergulhador está a 15 m de profundidade na água (ρ = 1000 kg/m³). Considere g = 9,8 m/s² e P<sub>0</sub> = 101 325 Pa. Qual é a pressão total a essa profundidade?",
    "options": [
      "1,47 × 10⁵ Pa",
      "1,03 × 10⁵ Pa",
      "2,48 × 10⁵ Pa",
      "1,52 × 10⁶ Pa"
    ],
    "correctIndex": 2,
    "explanation": "A pressão total é P = P<sub>0</sub> + ρ·g·h = 101 325 + 1000 × 9,8 × 15 = 248 325 Pa, ou seja, cerca de 2,48 × 10⁵ Pa (≈ 2,5 atm).",
    "solution": [
      "Dados: P<sub>0</sub> = 101 325 Pa; ρ = 1000 kg/m³; g = 9,8 m/s²; h = 15 m.",
      "Fórmula: P = P<sub>0</sub> + ρ·g·h.",
      "Substituição: P = 101 325 + 1000 × 9,8 × 15 = 101 325 + 147 000.",
      "Resultado: 2,48 × 10⁵ Pa"
    ],
    "distractorAnalysis": [
      "Está incorreta: calculou apenas ρ·g·h e esqueceu a pressão atmosférica P<sub>0</sub>.",
      "Está incorreta: usou h = 15 cm (0,15 m) em vez de 15 m.",
      "Está incorreta: tratou 15 m como 15 atm, em vez de usar ρ·g·h."
    ],
    "nursingApplication": "Perceber que a pressão aumenta com a profundidade ajuda a explicar a dor de ouvido de um mergulhador que desce depressa sem equalizar."
  },
  {
    "id": 4194,
    "topicId": 4,
    "question": "Ao descer, um mergulhador sente dor crescente no ouvido, porque o tímpano é empurrado para dentro. Em que consiste a manobra de Valsalva que pode usar?",
    "options": [
      "Engolir com o nariz tapado, que é a manobra de Toynbee",
      "Soprar suavemente com o nariz tapado e a boca fechada, abrindo a trompa",
      "Prender a respiração e subir alguns metros até a dor desaparecer",
      "Inspirar fundo com o nariz e a boca abertos, deixando o ar entrar no ouvido"
    ],
    "correctIndex": 1,
    "explanation": "Ao descer, o ar do ouvido médio comprime-se. A manobra de Valsalva, soprar suavemente com nariz e boca fechados, abre a trompa e equaliza a pressão.",
    "distractorAnalysis": [
      "Está incorreta: essa é a manobra de Toynbee e não a de Valsalva.",
      "Está incorreta: subir alivia temporariamente a pressão, mas não é a manobra de Valsalva, e suster a respiração durante a subida é perigoso porque o ar nos pulmões expande.",
      "Está incorreta: inspirar com as vias abertas não faz o ar entrar no ouvido médio."
    ],
    "nursingApplication": "Num doente exposto a uma câmara hiperbárica ou num mergulhador, ensinar a manobra de Valsalva ajuda a prevenir dor e lesão do tímpano."
  },
  {
    "id": 4195,
    "topicId": 4,
    "question": "Durante um mergulho profundo e prolongado, o que acontece aos gases no sangue do mergulhador?",
    "options": [
      "Dissolvem-se em menor quantidade, pois a pressão exterior mais elevada os expulsa",
      "Dissolvem-se em maior quantidade e o azoto é consumido pelo corpo, sem se acumular",
      "A quantidade dissolvida não muda, pois a pressão exterior não afeta os gases do sangue",
      "Dissolvem-se em maior quantidade e o azoto, que o corpo não consome, acumula-se"
    ],
    "correctIndex": 3,
    "explanation": "A maior pressão faz dissolver mais gases no sangue. O azoto não é consumido pelo corpo e por isso acumula-se enquanto o mergulhador permanece em profundidade.",
    "distractorAnalysis": [
      "Está incorreta: a maior pressão faz com que se dissolvam mais gases no sangue.",
      "Está incorreta: o azoto não é consumido pelo corpo, por isso acumula-se.",
      "Está incorreta: a quantidade de gás dissolvido aumenta com a pressão."
    ],
    "nursingApplication": "Compreender a acumulação de azoto ajuda a perceber porque um mergulhador necessita de subir de forma controlada e vigiada."
  },
  {
    "id": 4196,
    "topicId": 4,
    "question": "Após um mergulho profundo, um mergulhador sobe depressa e suspende a respiração para poupar ar. Que afirmação descreve o que devia fazer e porquê?",
    "options": [
      "Subir devagar e sem suster a respiração, pois o azoto sai sem bolhas e o ar nos pulmões expande",
      "Subir depressa e suster a respiração, para que o ar dos pulmões não expanda durante a subida",
      "Subir devagar e suster a respiração, para o azoto não sair do sangue",
      "Subir depressa e respirar normalmente, pois as bolhas só se formam quando a subida é lenta"
    ],
    "correctIndex": 0,
    "explanation": "Na subida a pressão externa diminui e os gases dissolvidos saem da solução, formando bolhas se a subida for rápida. Subir devagar elimina o azoto e não se deve suster a respiração, pois o ar nos pulmões expande.",
    "distractorAnalysis": [
      "Está incorreta: o ar dos pulmões expande-se na subida; suster a respiração é perigoso.",
      "Está incorreta: o azoto tem de sair devagar do sangue, e suster a respiração é perigoso.",
      "Está incorreta: as bolhas formam-se na descompressão rápida, e não na subida lenta."
    ],
    "nursingApplication": "Perante um mergulhador com sintomas após subida rápida, o enfermeiro reconhece o risco de descompressão e de embolia gasosa."
  },
  {
    "id": 4197,
    "topicId": 4,
    "question": "Uma utente com trombose numa perna sofre o desprendimento de um fragmento de coágulo, que o sangue arrasta até um vaso do pulmão, obstruindo-o. Como se designam o fragmento e o fenómeno?",
    "options": [
      "O fragmento é um êmbolo e o fenómeno é uma hemorragia",
      "O fragmento é plasma e o fenómeno é uma embolia",
      "O fragmento é um glóbulo e o fenómeno é uma descompressão",
      "O fragmento é um êmbolo e o fenómeno é uma embolia"
    ],
    "correctIndex": 3,
    "explanation": "Uma embolia é a obstrução de um vaso por um êmbolo, isto é, uma massa transportada pelo sangue. Os fragmentos de coágulo são um exemplo.",
    "distractorAnalysis": [
      "Está incorreta: uma hemorragia é saída de sangue do vaso; aqui o vaso fica obstruído.",
      "Está incorreta: o plasma é um componente normal do sangue e não obstrui um vaso.",
      "Está incorreta: a descompressão é uma descida de pressão e não uma obstrução por um fragmento."
    ],
    "nursingApplication": "Perante um doente imobilizado com perna inchada, o enfermeiro reconhece que um coágulo que se solte pode ser levado pelo sangue e obstruir um vaso."
  },
  {
    "id": 4198,
    "topicId": 4,
    "question": "Qual das situações seguintes é um exemplo de êmbolo que NÃO é uma bolha de gás?",
    "options": [
      "Uma partícula de placa de ateroma que se solta e obstrui um vaso mais fino",
      "Bolhas de azoto formadas no sangue após uma subida rápida",
      "Ar injetado numa veia por um sistema de soro mal purgado",
      "Ar aspirado por uma ferida numa veia com pressão inferior à atmosférica"
    ],
    "correctIndex": 0,
    "explanation": "Os êmbolos podem ser fragmentos de coágulo, partículas de gordura ou de ateroma, ou bolhas de gás. A placa de ateroma solta é um êmbolo sólido.",
    "distractorAnalysis": [
      "Está incorreta: são bolhas de gás formadas por descompressão.",
      "Está incorreta: é ar, ou seja, embolia gasosa.",
      "Está incorreta: é ar que entra numa veia, ou seja, embolia gasosa."
    ],
    "nursingApplication": "Ao reconhecer que há êmbolos não gasosos, o enfermeiro mantém a vigilância de sinais de obstrução vascular mesmo quando não houve entrada de ar."
  },
  {
    "id": 4199,
    "topicId": 4,
    "question": "Antes de retirar um cateter venoso central, o enfermeiro coloca o doente deitado. Qual é a razão?",
    "options": [
      "Deitado, a pressão venosa fica inferior à atmosférica, o que impede a entrada de ar",
      "O ar só entra nas veias quando a pressão no seu interior é superior à atmosférica",
      "Deitado, a pressão na veia não fica inferior à atmosférica, o que evita a entrada de ar (embolia gasosa)",
      "Assim evita-se que o cateter forme coágulos ao ser retirado do vaso, o que obstruiria a veia"
    ],
    "correctIndex": 2,
    "explanation": "O ar entra numa veia se a pressão no seu interior for inferior à atmosférica, o que pode acontecer em veias acima do coração. Com o doente deitado, reduz-se esse risco de embolia gasosa.",
    "distractorAnalysis": [
      "Está incorreta: o risco de entrada de ar surge quando a pressão na veia é inferior à atmosférica.",
      "Está incorreta: o ar entra quando a pressão na veia é inferior à atmosférica.",
      "Está incorreta: a razão é o risco de entrada de ar, e não a formação de coágulos."
    ],
    "nursingApplication": "Ao remover um cateter central, a posição deitada do doente reduz o risco de entrada de ar e de embolia gasosa."
  },
  {
    "id": 4200,
    "topicId": 4,
    "question": "Antes de desligar um sistema de perfusão de um cateter venoso, o enfermeiro fecha a linha. Qual é a razão?",
    "options": [
      "Evitar que o soro arrefeça e forme coágulos na veia",
      "Evitar a entrada de ar na veia, que poderia causar embolia gasosa",
      "Aumentar a pressão na veia para expulsar o ar já presente",
      "Evitar que a pressão arterial baixe quando o sistema é desligado"
    ],
    "correctIndex": 1,
    "explanation": "O ar que entra por um sistema aberto pode formar bolhas no sangue e causar embolia gasosa. Por isso se purgam seringas e linhas e se fecham as linhas antes de as desligar.",
    "distractorAnalysis": [
      "Está incorreta: o arrefecimento do soro não é a razão e não forma coágulos.",
      "Está incorreta: fechar a linha não expulsa ar; serve para impedir que ele entre.",
      "Está incorreta: a razão é impedir a entrada de ar e não regular a pressão arterial."
    ],
    "nursingApplication": "Ao trocar um sistema de soro, fechar a linha e purgar o ar antes de ligar evita levar bolhas de ar para a circulação do doente."
  }
];
