/**
 * BANCO DE QUESTÕES CERTIFICADAS - TÓPICO 1
 * Força, Estado de Equilíbrio e Biomecânica
 * Alinhado estritamente com os 105 slides do PowerPoint (1BF)
 * Total de Questões: 500
 */

const TOPIC_1_QUESTIONS = [
  {
    "id": 1001,
    "topicId": 1,
    "question": "Qual é a consequência mecânica imediata da rotura completa de um tendão muscular, como o tendão de Aquiles?",
    "options": [
      "A duplicação imediata da velocidade angular da articulação do tornozelo por libertação súbita de energia elástica.",
      "A conversão da massa muscular da perna em osso compacto através de calcificação metastática instantânea.",
      "A perda total da capacidade de transmitir força muscular à alavanca óssea, impedindo o movimento articular ativo associado.",
      "A interrupção absoluta de todo o fluxo sanguíneo arterial na artéria femoral comum contralateral."
    ],
    "correctIndex": 2,
    "explanation": "Sem o tendão a ligar o músculo ao osso, a contração muscular encurta o músculo mas não consegue puxar a alavanca óssea.",
    "distractorAnalysis": [
      "Está incorreta: Não há aumento de velocidade; a flexão plantar ativa fica anulada ou drasticamente comprometida.",
      "Está incorreta: A calcificação ectópica requer meses de processo patológico crónico e não ocorre de forma instantânea.",
      "Está incorreta: A rotura tendinosa afeta a mecânica do segmento, não ocluindo artérias sistémicas contralaterais."
    ],
    "nursingApplication": "A identificação precoce da impotência funcional por rotura tendinosa é crucial na triagem de enfermagem em urgência."
  },
  {
    "id": 1002,
    "topicId": 1,
    "question": "Na extensão ativa da perna sobre a coxa, como atua o tendão do quadríceps na transmissão de força ao joelho?",
    "options": [
      "Transmite a força de contração do músculo quadríceps através da patela e do ligamento patelar à tuberosidade anterior da tíbia.",
      "Puxa diretamente a apófise coracoide da escápula para fletir o membro inferior no plano coronal.",
      "Empurra ativamente o astrágalo contra o maléolo lateral da fíbula para travar a rotação da tíbia.",
      "Gera uma força eletromagnética repulsiva entre o fémur e a tíbia que dispensa a existência de contacto ósseo."
    ],
    "correctIndex": 0,
    "explanation": "O quadríceps traciona a patela, que funciona como uma polia biomecânica aumentando o braço de alavanca sobre a tíbia.",
    "distractorAnalysis": [
      "Está incorreta: A apófise coracoide localiza-se na escápula (membro superior), sem relação com o joelho ou quadríceps.",
      "Está incorreta: O astrágalo (tálus) pertence ao tornozelo e não é o local de inserção do aparelho extensor do joelho.",
      "Está incorreta: A articulação do joelho opera por forças mecânicas de contacto articular e tração tendinosa direta."
    ],
    "nursingApplication": "Avaliar a extensão do joelho permite ao enfermeiro verificar a estabilidade do utente antes de autorizar o levante."
  },
  {
    "id": 1003,
    "topicId": 1,
    "question": "Qual é o papel biomecânico da patela (rótula) como osso sesamóide incorporado no tendão do quadríceps?",
    "options": [
      "Reduz a massa inercial total da perna para anular a 1.ª Lei de Newton durante a fase de balanço da marcha.",
      "Afasta a linha de ação do tendão do centro de rotação articular, aumentando o braço de alavanca e o momento da força extensora.",
      "Transforma a contração muscular em calor térmico para manter a temperatura do líquido sinovial a 42 °C.",
      "Impede que a força muscular seja transmitida à tíbia, protegendo o menisco de qualquer sobrecarga axial."
    ],
    "correctIndex": 1,
    "explanation": "Ao projetar o tendão para a frente, a patela aumenta a distância perpendicular (braço b) ao fulcro, ampliando o torque extensor.",
    "distractorAnalysis": [
      "Está incorreta: A patela não reduz a massa inercial nem anula leis fundamentais da física como a inércia.",
      "Está incorreta: A função da patela é mecânica de polia articular e não um aquecedor para elevar a temperatura a 42 °C.",
      "Está incorreta: A patela transmite eficientemente a força do quadríceps à tíbia através do ligamento patelar."
    ],
    "nursingApplication": "A patela permite que o quadríceps exerça grande momento de extensão do joelho com menor custo de esforço muscular."
  },
  {
    "id": 1004,
    "topicId": 1,
    "question": "Se um indivíduo de 70 kg estiver apoiado nas pontas dos pés, porque é que o tendão de Aquiles tem de exercer uma força superior ao seu peso?",
    "options": [
      "Porque a gravidade terrestre multiplica-se automaticamente por dez sempre que o calcanhar se eleva do solo.",
      "Porque o tendão de Aquiles perde 90% da sua elasticidade quando o tornozelo entra em flexão plantar voluntária.",
      "Porque a massa corporal do indivíduo aumenta exponencialmente à medida que a base de sustentação se reduz.",
      "Devido à desvantagem ou relação de braços de alavanca no pé, onde o braço da resistência corporal exige compensação pelo tendão."
    ],
    "correctIndex": 3,
    "explanation": "No equilíbrio da alavanca do pé (alavanca de 2.ª classe), as distâncias ao fulcro exigem que os músculos gerem elevada força tensora.",
    "distractorAnalysis": [
      "Está incorreta: A aceleração da gravidade g é constante (~9,8 m/s²) e não se multiplica com a elevação dos calcanhares.",
      "Está incorreta: O tendão mantém as suas propriedades elásticas; o esforço é ditado pelo equilíbrio de momentos rotacionais.",
      "Está incorreta: A massa corporal permanece rigorosamente constante independentemente da posição assumida."
    ],
    "nursingApplication": "Explica porque doentes com tendinopatia aquiliana sentem dor intensa ao tentar apoiar-se nas pontas dos pés."
  },
  {
    "id": 1005,
    "topicId": 1,
    "question": "Se o doente estiver com tendência para escorregar para a frente na poltrona (postura em saco de batatas com retroversão da bacia), que problema mecânico está a ocorrer?",
    "options": [
      "Aumentar o atrito das costas do doente aplicando talco ou amido na zona dorsal e no encosto estofado da poltrona.",
      "Fletir ligeiramente a bacia e apoiar bem os pés no piso ou estrado, alargando a base e garantindo que o CG fica retido na zona de suporte posterior.",
      "Inclinar o encosto da poltrona para trás num ângulo de quarenta e cinco graus sem qualquer apoio para os pés do utente.",
      "Remover os apoios de braços para que o doente possa usar as mãos para puxar o tronco ativamente a cada respiração."
    ],
    "correctIndex": 1,
    "explanation": "A postura escorregada desestabiliza a coluna lombar, aumenta a pressão mecânica pontual no cóccix e cria uma alavanca instável propensa ao deslizamento para o solo.",
    "distractorAnalysis": [
      "Está incorreta: aplicar pós lubrificantes reduz o atrito e favorece o escorregamento anterior da bacia para fora do assento.",
      "Está incorreta: reclinar o encosto sem retenção pélvica ou apoio de pés aumenta a componente de cisalhamento longitudinal e o escorregamento.",
      "Está incorreta: retirar os apoios de braços elimina superfícies de descarga e suporte lateral essenciais para o doente frágil sentado."
    ],
    "nursingApplication": "Instrui o enfermeiro a reposicionar o doente empurrando a bacia bem para trás de encontro ao encosto da poltrona."
  },
  {
    "id": 1006,
    "topicId": 1,
    "question": "O uso de um 'Cinto de Transferência e Marcha' (gait belt) colocado firmemente em redor da cintura do utente melhora a biofísica do amparo porque:",
    "options": [
      "Suspende o peso total do doente no ar através de fechos elásticos automáticos, dispensando totalmente o contacto dos pés do utente com o solo durante todo o percurso da marcha.",
      "Fornece pegas seguras próximas do Centro de Gravidade do doente, permitindo ao enfermeiro aplicar forças de estabilização sem puxar pelas articulações vulneráveis dos ombros nem pelas roupas.",
      "Emite vibrações sonoras rítmicas de estimulação que ativam a contração reflexa do músculo quadríceps através da estimulação das terminações nervosas livres da pele abdominal.",
      "Transfere a massa inercial do corpo do utente para o cinto de fivela, tornando o doente cinquenta por cento mais leve sempre que este inicia o movimento de levante da cadeira."
    ],
    "correctIndex": 1,
    "explanation": "Puxar pelos braços de um doente em queda causa luxação de ombro e rotura da coifa dos rotadores; o cinto de marcha concentra a força no CG do tronco com braço de alavanca mínimo.",
    "distractorAnalysis": [
      "Está incorreta: o cinto de marcha não é um guincho de elevação nem suspende o corpo; serve para apoio manual seguro próximo do centro de gravidade.",
      "Está incorreta: o cinto de transferência é uma cinta biomecânica passiva de tecido resistente com pegas, desprovido de circuitos elétricos ou emissores sonoros.",
      "Está incorreta: a massa do utente é constante; o cinto proporciona uma pega firme que otimiza o braço de alavanca e a aplicação de forças estabilizadoras."
    ],
    "nursingApplication": "Instrumento biomecânico simples e indispensável na prevenção de acidentes de trabalho e lesões nos doentes em reabilitação."
  },
  {
    "id": 1007,
    "topicId": 1,
    "question": "Se um carrinho de penso for concebido com uma distância entre eixos muito estreita (rodas muito juntas) e uma haste de suporte de baldes de resíduos muito projetada para o lado, que risco mecânico apresenta?",
    "options": [
      "O carrinho torna-se incapaz de rolar porque as rodas dianteiras entram em interferência mecânica com os eixos posteriores.",
      "O carrinho adquire equilíbrio indiferente permanente, podendo ser utilizado com segurança mesmo em rampas acentuadas.",
      "A estabilidade do carrinho aumenta proporcionalmente ao quadrado da altura da gaveta superior de medicamentos.",
      "A base de sustentação torna-se estreita, tornando o carrinho instável e altamente propenso a tombar lateralmente em curvas rápidas."
    ],
    "correctIndex": 3,
    "explanation": "Braço de alavanca exterior longo + base de apoio estreita = momento desestabilizador que supera o momento restaurador do peso central do carrinho.",
    "distractorAnalysis": [
      "Está incorreta: os rodízios continuam a girar nos seus eixos; a falha biomecânica crítica é o estreitamento da área poligonal da base de apoio.",
      "Está incorreta: um carrinho alto com base estreita tem equilíbrio instável pronunciado e risco iminente de capotamento lateral em desníveis.",
      "Está incorreta: uma maior distância entre eixos (base mais ampla) aumenta a estabilidade; diminuir a distância piora a segurança contra o tombo."
    ],
    "nursingApplication": "Orienta a avaliação técnica da qualidade e segurança dos equipamentos adquiridos pelas instituições hospitalares."
  },
  {
    "id": 1008,
    "topicId": 1,
    "question": "Para empurrar um suporte de soro com rodas com o menor risco de tombamento, a mão do doente ou enfermeiro deve ser posicionada:",
    "options": [
      "No topo superior da haste telescópica, o mais alto possível acima da cabeça do utente, para aumentar o braço de momento fletor da força.",
      "Na extremidade de uma das garrafas de soro suspensas no gancho, puxando para o lado para guiar a rotação das rodas pequenas da base.",
      "Na haste vertical a uma altura média (ao nível dos cotovelos, cerca de 1 metro do solo), permitindo forças de avanço horizontais puras próximas do eixo da base.",
      "Na base de suporte metálica junto aos rodízios, empurrando com as pontas dos pés enquanto caminha descalço no quarto de internamento."
    ],
    "correctIndex": 2,
    "explanation": "Aplicar a força no meio da haste encurta o braço de alavanca desestabilizador em relação ao solo; empurrar pelo topo multiplica o torque de tombamento frontal.",
    "distractorAnalysis": [
      "Está incorreta: empurrar no topo cria um momento de força desestabilizador muito elevado (M = F·d), provocando o tombamento do suporte com facilidade.",
      "Está incorreta: puxar pelos frascos pode danificar as linhas de soroterapia, quebrar frascos e desequilibrar o suporte por forças assimétricas.",
      "Está incorreta: empurrar a cerca de 1 m do solo reduz o braço de momento em relação ao solo e permite controlo direcional firme e seguro."
    ],
    "nursingApplication": "Instrução ergonómica fundamental ministrada a todos os doentes autónomos sob fluidoterapia intravenosa contínua."
  },
  {
    "id": 1009,
    "topicId": 1,
    "question": "Se durante a marcha com o suporte de soro o tubo de infusão ficar esticado e preso na maçaneta de uma porta, que forças atuam no sistema?",
    "options": [
      "A tração atua no topo do suporte com um braço de alavanca longo, gerando um momento de força elevado que pode tombar facilmente o mastro.",
      "A tração do tubo reforça a estabilidade do suporte ao comprimir firmemente os cinco rodízios contra o pavimento cerâmico.",
      "A força de tração no cateter anula imediatamente o peso do frasco de soro por efeito de compensação osmótica na tubuladura.",
      "O mastro de soro passa a comportar-se como um corpo em equilíbrio indiferente sem qualquer risco de desvio postural."
    ],
    "correctIndex": 0,
    "explanation": "A tração do tubo atua com um braço de alavanca elevado no suporte e aplica força de tração na cânula intravenosa; o enfermeiro deve orientar a colocação das linhas de perfusão livres de obstáculos.",
    "distractorAnalysis": [
      "Está incorreta: puxar o topo do mastro aplica força horizontal a mais de 1,80 m do solo; o torque (M = F·d) tomba o suporte sobre as rodas de apoio.",
      "Está incorreta: uma tração horizontal não ancora o equipamento; cria um binário de rotação que levanta as rodas contralaterais do solo.",
      "Está incorreta: além do risco de capotamento do suporte pesado, há o perigo iminente de arrancamento traumático do acesso vascular venoso."
    ],
    "nursingApplication": "Orienta a organização e fixação de cabos e tubagens durante o levante e deambulação de doentes internados."
  },
  {
    "id": 1010,
    "topicId": 1,
    "question": "Qual é a vantagem mecânica da utilização de um 'Elevador de Sanita' (alteador de sanita com ou sem apoios de braços) para um doente com artrose ou prótese da anca?",
    "options": [
      "Eleva a altura do assento em 10 a 15 cm, permitindo que a anca permaneça num ângulo de flexão confortável (> 90°) e diminuindo a força muscular necessária nos quadríceps para efetuar o levante.",
      "Reduz a altura da sanita até ao nível do solo para forçar o utente a agachar-se completamente, exercitando o torque máximo dos ligamentos colaterais e cruzados das articulações do joelho.",
      "Neutraliza a força da gravidade na bacia através de molas mecânicas que forçam o fémur para fora do acetábulo articular durante as manobras fisiológicas de evacuação intestinal.",
      "Bloqueia a rotação dos membros inferiores em posição de adução rígida a zero graus, forçando o utente a levantar-se por pura flexão anterior da coluna cervical e torácica superior."
    ],
    "correctIndex": 0,
    "explanation": "Menor amplitude de flexão da anca e joelhos encurta o braço de alavanca da gravidade sobre o corpo, facilitando a transição da bacia e mantendo o equilíbrio estável sem dor articular.",
    "distractorAnalysis": [
      "Está incorreta: baixar a sanita até ao chão exigiria flexão extrema da anca (< 90°), o que é estritamente contraindicado em próteses totais da anca pelo risco de luxação.",
      "Está incorreta: o alteador é um dispositivo ergonómico estático de elevação física do assento, sem qualquer componente de luxação ou repulsão articular.",
      "Está incorreta: forçar a adução pura com sobrecarga da coluna vertebral gera dor articular e instabilidade postural severa durante a transição sentada para bípede."
    ],
    "nursingApplication": "Prescrição ergonómica fundamental de enfermagem na promoção da autonomia e prevenção de luxação de próteses da anca."
  },
  {
    "id": 1011,
    "topicId": 1,
    "question": "Em todas as intervenções de mobilização e transferência de doentes, a diretriz ergonómica que o enfermeiro deve aplicar ao seu próprio corpo baseia-se em:",
    "options": [
      "Alargar a sua própria base de sustentação (afastando os pés), fletir os joelhos e ancas (rebaixando o seu CG) e manter a carga o mais próxima possível do seu tronco, maximizando a sua estabilidade e poupando a coluna.",
      "Manter os pés totalmente juntos, as pernas em extensão rígida e a carga distante do tórax com os cotovelos esticados, confiando unicamente na contração dos ligamentos da coluna lombar para erguer o paciente.",
      "Posicionar-se a um metro de distância da cama e realizar uma rotação vigorosa de noventa graus do tronco enquanto suporta o peso do utente no ar, utilizando a inércia centrífuga para acelerar a manobra no quarto.",
      "Elevar a cabeceira da cama até à altura dos seus próprios olhos e puxar o doente pelas extremidades dos membros inferiores, deixando que o peso do tronco caia livremente para a poltrona através do espaço livre."
    ],
    "correctIndex": 0,
    "explanation": "Rebaixar o CG e alargar a base do profissional garante equilíbrio estável contra forças de reação do doente e minimiza o braço de alavanca da carga sobre a coluna vertebral.",
    "distractorAnalysis": [
      "Está incorreta: trabalhar com pés juntos, pernas esticadas e carga afastada cria um braço de alavanca gigante que sobrecarrega destrutivamente os discos lombares (risco de hérnia).",
      "Está incorreta: afastar-se da carga e rodar o tronco sob tensão mecânica multiplica as forças de cisalhamento e compressão sobre a coluna vertebral do profissional de saúde.",
      "Está incorreta: puxar o doente à distância sem apoio de proximidade provoca desacelerações incontroladas, lesões musculoesqueléticas graves e risco iminente de queda do paciente."
    ],
    "nursingApplication": "Proteção da saúde do trabalhador de enfermagem fundamentada nos princípios mecânicos do equilíbrio."
  },
  {
    "id": 1012,
    "topicId": 1,
    "question": "Ao concluir o estudo do Bloco 6 sobre Condições e Tipos de Equilíbrio, que ponte conceptual se estabelece com os blocos seguintes (Momentos de Força, Alavancas e Centro de Gravidade)?",
    "options": [
      "Concluir que as forças de translação são suficientes para prever a estabilidade do corpo humano, sendo desnecessário estudar grandezas de rotação ou braços de momento articular na prática clínica de enfermagem.",
      "Compreender que o equilíbrio completo de um corpo rígido exige anular não apenas as forças de translação (∑F = 0), mas também os Momentos de Força de rotação (∑M = 0), abrindo o caminho para o estudo das Alavancas e do Torque.",
      "Verificar que o corpo humano se comporta como um ponto material infinitesimal simples, onde a distribuição das massas e o comprimento dos segmentos ósseos não exercem qualquer efeito sobre as posturas adotadas.",
      "Constatar que as leis da mecânica clássica deixam de ter validade quando o corpo entra em repouso ortostático prolongado, dependendo o equilíbrio exclusivamente de reflexos neurovegetativos do tronco encefálico."
    ],
    "correctIndex": 1,
    "explanation": "A primeira condição (∑F = 0) impede o corpo de transladar; a segunda condição (∑M = 0, Bloco 7) impede o corpo de rodar e tombar, completando a estática clássica.",
    "distractorAnalysis": [
      "Está incorreta: as forças de translação sozinhas não explicam o equilíbrio de corpos extensos; os momentos rotacionais e alavancas são fundamentais.",
      "Está incorreta: o corpo humano é um corpo extenso articulado com braços de momento anatómicos reais de grande importância ergonómica.",
      "Está incorreta: as leis de Newton aplicam-se plenamente ao repouso e movimento postural do corpo humano em qualquer situação clínica."
    ],
    "nursingApplication": "Transição pedagógica impecável para o Bloco 7 (Momento da Força, Torque e Alavancas Biomecânicas)."
  },
  {
    "id": 1013,
    "topicId": 1,
    "question": "Matematicamente, como se expressa o módulo do Momento de uma Força (M) que atua perpendicularmente à linha de suporte a uma distância b do eixo?",
    "options": [
      "M = F / b (a divisão da força pelo comprimento do segmento ósseo articular).",
      "M = F + b (a soma aritmética da força em Newtons com a distância em metros).",
      "M = F² · b² (o produto dos quadrados da força e da distância de afastamento).",
      "M = F · b (o produto da intensidade da força pelo braço de alavanca perpendicular)."
    ],
    "correctIndex": 3,
    "explanation": "M = F·b. Se a força atua perpendicularmente ao braço, o momento é simplesmente o produto da força pelo braço de alavanca.",
    "distractorAnalysis": [
      "Está incorreta: F/b não possui dimensões de momento (seria N/m, unidade de constante elástica ou tensão superficial).",
      "Está incorreta: Não se somam grandezas com unidades diferentes (Newtons com metros) na física clássica.",
      "Está incorreta: Elevar ao quadrado violaria a linearidade e a homogeneidade dimensional do conceito de torque."
    ],
    "nursingApplication": "Fórmula basilar da estática rotacional que permite calcular esforços articulares e musculares em anatomia funcional."
  },
  {
    "id": 1014,
    "topicId": 1,
    "question": "Se um enfermeiro aplicar uma força de 40 N perpendicularmente na extremidade de uma alavanca de cama a 0,5 metros do eixo de rotação, qual é o momento gerado?",
    "options": [
      "20 N · m (calculado diretamente por M = F · b = 40 N · 0,5 m = 20 N·m).",
      "80 N · m (calculado dividindo a força aplicada pelo braço de alavanca: 40 / 0,5).",
      "40,5 N · m (calculado somando aritmeticamente o valor da força com a distância medida).",
      "200 N · m (calculado multiplicando a força aplicada pela aceleração normal da gravidade)."
    ],
    "correctIndex": 0,
    "explanation": "M = F · b = 40 · 0,5 = 20 N·m. Um torque de 20 N·m faz girar o eixo mecânico para ajustar a posição do estrado.",
    "distractorAnalysis": [
      "Está incorreta: o momento resulta da multiplicação da força pela distância (F × b), e não da sua divisão (F / b).",
      "Está incorreta: grandezas com dimensões físicas diferentes (força em N e distância em m) não podem ser somadas entre si.",
      "Está incorreta: o cálculo do momento não envolve a aceleração da gravidade quando a força aplicada já se encontra expressa em Newtons."
    ],
    "nursingApplication": "Permite calcular o efeito rotacional em manivelas de camas manuais ou mecanismos de tração."
  },
  {
    "id": 1015,
    "topicId": 1,
    "question": "Se uma força for aplicada diretamente sobre o próprio eixo de rotação (b = 0 metros) ou com a sua linha de ação a passar pelo eixo, qual é o momento produzido?",
    "options": [
      "O momento atinge o valor máximo possível, pois a força atua diretamente sobre a estrutura articular que serve de apoio.",
      "O momento passa a ter valor infinito, provocando uma aceleração angular descontrolada do membro corporal afetado.",
      "O momento é rigorosamente zero (M = 0 N·m), sendo a força completamente incapaz de produzir qualquer rotação do corpo.",
      "O momento depende apenas da massa do segmento ósseo, sendo independente da distância ao eixo de rotação articular."
    ],
    "correctIndex": 2,
    "explanation": "Como b = 0, temos M = F · 0 = 0 N·m. Sem braço de alavanca, a força apenas comprime ou traciona o eixo sem gerar qualquer rotação.",
    "distractorAnalysis": [
      "Está incorreta: no eixo de rotação o braço de alavanca é nulo (b = 0), pelo que o momento M = F · b é rigorosamente zero.",
      "Está incorreta: sem distância perpendicular à linha de ação não existe torque nem tendência para gerar aceleração angular.",
      "Está incorreta: o momento depende obrigatoriamente do braço de alavanca perpendicular e anula-se quando b = 0."
    ],
    "nursingApplication": "Conceito biomecânico vital: forças articulares que passam pelo centro da articulação não produzem movimento angular."
  },
  {
    "id": 1016,
    "topicId": 1,
    "question": "O que é rigorosamente o 'Braço de Alavanca' (ou braço da força, b) na física mecânica?",
    "options": [
      "É o comprimento total do segmento ósseo medido entre as superfícies articulares proximal e distal.",
      "É a distância em linha reta medida desde o centro de gravidade anatómico do membro até ao solo.",
      "É a amplitude do arco angular percorrido pela extremidade distal do membro durante o movimento.",
      "É a distância perpendicular mais curta medida desde o eixo de rotação (fulcro) até à linha de ação da força aplicada."
    ],
    "correctIndex": 3,
    "explanation": "O braço b é estritamente perpendicular (faz ângulo de 90°) com a reta que contém o vetor força; se a força for oblíqua, b = d · sen θ.",
    "distractorAnalysis": [
      "Está incorreta: o comprimento do osso é a distância anatómica; o braço de alavanca é a distância perpendicular à linha de ação da força.",
      "Está incorreta: a distância ao solo mede a altura geométrica do baricentro, não tendo relação com o braço de momento de uma força.",
      "Está incorreta: a amplitude do arco mede deslocamento angular (em graus ou radianos), enquanto o braço de alavanca é uma distância linear (m)."
    ],
    "nursingApplication": "Evita o erro clássico de confundir a distância do ponto de aplicação (d) com o braço perpendicular da força (b)."
  },
  {
    "id": 1017,
    "topicId": 1,
    "question": "Quando uma força F é aplicada a uma distância d do eixo de rotação, mas formando um ângulo oblíquo θ com o segmento, como se calcula o braço de alavanca b e o momento M?",
    "options": [
      "b = d · sen θ e o momento é M = F · d · sen θ.",
      "b = d · cos θ e o momento é M = F · d · cos θ.",
      "b = d / sen θ e o momento é M = F / (d · sen θ).",
      "b = d + sen θ e o momento é M = F · (d + sen θ)."
    ],
    "correctIndex": 0,
    "explanation": "Pela trigonometria no triângulo retângulo formado com a linha de ação da força, a distância perpendicular ao eixo é b = d · sen θ.",
    "distractorAnalysis": [
      "Está incorreta: d·cos θ é a projeção paralela ao segmento (que comprime ou traciona a haste sem gerar rotação se a força for perpendicular a essa linha).",
      "Está incorreta: Dividir por sen θ daria uma distância maior que a hipotenusa d, violando a geometria euclidiana plana.",
      "Está incorreta: Não se somam distâncias em metros com senos adimensionais de ângulos."
    ],
    "nursingApplication": "Permite calcular com rigor a força dos músculos cujos tendões se inserem nos ossos com ângulos variáveis."
  },
  {
    "id": 1018,
    "topicId": 1,
    "question": "Ao empurrar uma porta pesada corta-fogo para abrir no corredor, a máxima facilidade mecânica (máximo torque com mínimo esforço) é obtida quando o enfermeiro empurra:",
    "options": [
      "Muito perto do eixo das dobradiças aplicando a força paralelamente à face da porta com um ângulo de zero graus.",
      "Exatamente no meio da porta empurrando com uma orientação oblíqua de trinta graus em relação ao solo do corredor.",
      "Na parte superior junto ao caixilho exercendo tração vertical pura no sentido ascendente sem tocar no puxador.",
      "Na borda mais afastada das dobradiças e aplicando a força com um ângulo rigorosamente perpendicular (90°) à superfície da porta."
    ],
    "correctIndex": 3,
    "explanation": "Braço d máximo (borda externa longe do fulcro) + ângulo de 90° (sen 90° = 1) = máximo braço de alavanca b e máximo torque M = F·d.",
    "distractorAnalysis": [
      "Está incorreta: empurrar junto ao eixo reduz o braço de momento a quase zero e força paralela (θ = 0°) anula o torque (sen 0° = 0).",
      "Está incorreta: empurrar no meio da porta reduz o braço de alavanca para metade, exigindo o dobro da força muscular.",
      "Está incorreta: a força vertical perpendicular ao plano de rotação não produz qualquer momento útil em torno do eixo vertical das dobradiças."
    ],
    "nursingApplication": "Exemplo quotidiano definitivo que fixa para sempre a dependência do momento da distância e do ângulo da força."
  },
  {
    "id": 1019,
    "topicId": 1,
    "question": "Qual é a célebre frase atribuída ao matemático e físico grego Arquimedes de Siracusa ao formular a Lei das Alavancas?",
    "options": [
      "\"Todo o corpo material em movimento retilíneo acelera espontaneamente sem necessidade de forças externas.\"",
      "\"A velocidade de queda de um corpo é diretamente proporcional ao seu peso e inversamente à sua densidade.\"",
      "\"Dêem-me uma alavanca e um ponto de apoio e eu moverei a Terra!\", sintetizando o poder multiplicador da vantagem mecânica.",
      "\"A energia de um sistema mecânico multiplica-se de forma ilimitada com a introdução de roldanas fixas.\""
    ],
    "correctIndex": 2,
    "explanation": "Arquimedes compreendeu que com uma alavanca de braço potente suficientemente longo, qualquer força pequena pode equilibrar ou erguer qualquer carga gigantesca.",
    "distractorAnalysis": [
      "Está incorreta: esta afirmação contraria a 1.ª Lei de Newton sobre a inércia e não corresponde à célebre máxima de Arquimedes.",
      "Está incorreta: esta formulação aristotélica sobre a queda dos corpos foi refutada por Galileu Galilei e não pertence a Arquimedes.",
      "Está incorreta: as roldanas e alavancas não criam energia mecânica, apenas alteram a relação entre força e deslocamento."
    ],
    "nursingApplication": "Inspira o estudo das máquinas simples e a sua aplicação indispensável na biomecânica da saúde."
  },
  {
    "id": 1020,
    "topicId": 1,
    "question": "Como se enuncia matematicamente a Lei das Alavancas de Arquimedes em equilíbrio estático?",
    "options": [
      "Força Potente dividida pelo Braço de Potência é igual à Força Resistente dividida pelo Braço de Resistência (Fp / bp = Fr / br).",
      "Força Potente somada ao Braço de Potência é igual à Força Resistente somada ao Braço de Resistência (Fp + bp = Fr + br).",
      "Força Potente multiplicada pela Força Resistente é igual ao Braço de Potência multiplicado pelo Braço de Resistência (Fp · Fr = bp · br).",
      "Força Potente multiplicada pelo Braço de Potência é igual à Força Resistente multiplicada pelo Braço de Resistência (Fp · bp = Fr · br)."
    ],
    "correctIndex": 3,
    "explanation": "Em equilíbrio: M_potente = M_resistente ⇒ Fp · bp = Fr · br. O torque gerado pela potência anula o torque gerado pela resistência.",
    "distractorAnalysis": [
      "Está incorreta: o equilíbrio de momentos exige a igualdade dos produtos das forças pelos respetivos braços (Fp · bp = Fr · br), e não da sua divisão.",
      "Está incorreta: forças e comprimentos possuem unidades e grandezas físicas diferentes, não podendo somar-se matematicamente.",
      "Está incorreta: o momento de cada força resulta do produto da força pelo seu próprio braço de alavanca, que se anulam em equilíbrio."
    ],
    "nursingApplication": "Fórmula central da biomecânica que rege todas as alavancas articulares do corpo humano."
  },
  {
    "id": 1021,
    "topicId": 1,
    "question": "Como se define a Vantagem Mecânica (VM) teórica de uma alavanca em física biomecânica?",
    "options": [
      "É a razão entre a Força Resistente vencida e a Força Potente aplicada (VM = Fr / Fp), que em equilíbrio é igual à razão entre os braços: VM = bp / br.",
      "É o produto entre o peso total da alavanca e a aceleração da gravidade multiplicado pelo tempo de realização do esforço muscular em segundos.",
      "É a soma algébrica de todas as massas ósseas envolvidas na articulação dividida pelo comprimento longitudinal dos tendões de inserção.",
      "É uma constante fixa igual a 10 em qualquer alavanca biológica ou anatómica do corpo humano, independentemente da geometria óssea."
    ],
    "correctIndex": 0,
    "explanation": "VM = Fr / Fp = bp / br. Se VM > 1, a alavanca multiplica a força (poupa esforço); se VM < 1, há desvantagem de força mas ganho de velocidade.",
    "distractorAnalysis": [
      "Está incorreta: por definição física, vantagem mecânica é a razão de forças VM = Fr/Fp, relacionando-se com a razão dos braços de momento (bp/br).",
      "Está incorreta: vantagem mecânica é uma grandeza adimensional que mede a eficácia de amplificação de força e não energia ou tempo.",
      "Está incorreta: no corpo humano a maioria das alavancas esqueléticas são de 3.ª classe com VM < 1, não sendo uma constante igual a 10."
    ],
    "nursingApplication": "Conceito chave que define a eficácia funcional de cada classe de alavanca no corpo e em ferramentas."
  },
  {
    "id": 1022,
    "topicId": 1,
    "question": "Se uma alavanca possuir um braço de potência de 1 metro (bp = 1 m) e um braço de resistência de 0,2 metros (br = 0,2 m), qual é a sua Vantagem Mecânica?",
    "options": [
      "VM = 0,2 (pois a vantagem mecânica resulta da divisão do braço de resistência pelo braço de potência: 0,2 / 1 = 0,2).",
      "VM = 5 (pois VM = bp / br = 1 / 0,2 = 5), significando que a alavanca multiplica a força do operador por cinco vezes.",
      "VM = 0,8 (calculada através da subtração linear direta entre os dois braços da alavanca: 1 m - 0,2 m = 0,8).",
      "VM = 1,2 (calculada através da soma dos comprimentos totais dos braços presentes na alavanca: 1 m + 0,2 m = 1,2)."
    ],
    "correctIndex": 1,
    "explanation": "VM = bp / br = 1 / 0,2 = 5. Para levantar uma carga resistente de 500 N, o operador só precisa de aplicar uma força potente de 100 N (Fp = Fr / VM = 500 / 5 = 100 N).",
    "distractorAnalysis": [
      "Está incorreta: a vantagem mecânica é a razão bp / br; dividir br por bp resulta no inverso da vantagem mecânica.",
      "Está incorreta: a vantagem mecânica é um rácio adimensional multiplicativo, não resultando da subtração dos braços.",
      "Está incorreta: somar os braços indica o comprimento total da haste (1,2 m), e não a relação de amplificação de força mecânica."
    ],
    "nursingApplication": "Ilustra a economia de esforço em pés de cabra e alavancas ergonómicas de elevação hospitalar."
  },
  {
    "id": 1023,
    "topicId": 1,
    "question": "Em contrapartida, se uma alavanca tiver um braço de potência muito curto (bp = 0,05 m) e um braço de resistência longo (br = 0,35 m), como se caracteriza a sua Vantagem Mecânica?",
    "options": [
      "VM = 7,0 (VM > 1), apresentando grande vantagem mecânica de força que permite multiplicar o esforço exercido pelos músculos periféricos.",
      "VM = 1,0, indicando que a força potente necessária é exatamente igual à resistência encontrada, sem qualquer ganho de amplitude articular.",
      "VM = 0,14 (VM < 1), apresentando desvantagem mecânica de força (exige 7 vezes mais força muscular), mas com enorme ganho de amplitude e velocidade na extremidade.",
      "VM = 0,0, indicando que a alavanca se encontra em bloqueio mecânico absoluto, sendo incapaz de transmitir qualquer torque à articulação."
    ],
    "correctIndex": 2,
    "explanation": "VM = 0,05 / 0,35 ≈ 0,143 (ou 1/7). Para mover 10 N na mão, o músculo tem de puxar com 70 N! Esta é a realidade biomecânica da maioria dos músculos humanos.",
    "distractorAnalysis": [
      "Está incorreta: a vantagem mecânica é calculada pela razão bp / br (0,05 / 0,35 ≈ 0,14) e não pelo inverso br / bp.",
      "Está incorreta: com braços de alavanca diferentes (0,05 m vs. 0,35 m), a vantagem mecânica é necessariamente diferente de 1.",
      "Está incorreta: a vantagem mecânica é uma razão geométrica não nula (VM = 0,14); o sistema continua funcionalmente ativo."
    ],
    "nursingApplication": "Prepara a mente do estudante para compreender o paradoxo das alavancas musculares humanas de 3.ª classe."
  },
  {
    "id": 1024,
    "topicId": 1,
    "question": "Em contrapartida, numa tesoura de costura com lâminas muito compridas e cabos curtos (bp < br), a alavanca de 1.ª classe proporciona:",
    "options": [
      "Uma multiplicação de força de dez vezes superior à de um alicate de aço de construção.",
      "A anulação do atrito cinético de deslizamento entre os fios do tecido têxtil.",
      "O aumento da temperatura dos tecidos até ao ponto de congelamento do azoto.",
      "Maior amplitude e velocidade de corte na ponta das lâminas à custa de menor força de corte (VM < 1)."
    ],
    "correctIndex": 3,
    "explanation": "br longo permite que um pequeno movimento das argolas gere um grande e rápido deslocamento na ponta das lâminas, ideal para cortes longos e rápidos em tecidos moles.",
    "distractorAnalysis": [
      "Está incorreta: Lâminas compridas com cabos curtos reduzem a vantagem de força em vez de a multiplicar.",
      "Está incorreta: O corte mecânico requer atrito e cisalhamento para separar as fibras têxteis.",
      "Está incorreta: Processos de corte manual operam à temperatura ambiente fisiológica neutra."
    ],
    "nursingApplication": "Ilustra a troca biomecânica universal: ganho de velocidade e amplitude significa sempre perda de força útil."
  },
  {
    "id": 1025,
    "topicId": 1,
    "question": "Se o peso da cabeça for de 50 N a uma distância anterior de 4 cm do fulcro atlanto-occipital (br = 4 cm) e os músculos extensores se inserirem a 5 cm atrás do fulcro (bp = 5 cm), que força muscular Fp é necessária para manter a cabeça ereta?",
    "options": [
      "200 N (multiplicando diretamente o peso da cabeça pela distância total dos dois braços).",
      "50 N (porque em alavancas anatómicas as forças musculares têm de ser iguais ao peso da cabeça).",
      "40 N (calculada por Fp · bp = Fr · br ⇒ Fp · 5 = 50 · 4 ⇒ Fp = 200 / 5 = 40 N).",
      "4 N (dividindo o peso da cabeça pelo número de vértebras cervicais existentes no pescoço)."
    ],
    "correctIndex": 2,
    "explanation": "Equilíbrio de momentos: Fp · 0,05 = 50 · 0,04 ⇒ Fp · 0,05 = 2,0 ⇒ Fp = 2,0 / 0,05 = 40 N.",
    "distractorAnalysis": [
      "Está incorreta: 200 N seria a força se o braço de potência fosse de apenas 1 cm, o que não corresponde aos dados.",
      "Está incorreta: Com bp = 5 cm maior que br = 4 cm, a força potente é menor que a resistente (40 N < 50 N).",
      "Está incorreta: 4 N seria insuficiente para equilibrar o momento da cabeça, fazendo-a tombar para a frente."
    ],
    "nursingApplication": "Exercício clássico de aplicação de biofísica que quantifica o trabalho estático dos músculos da nuca."
  },
  {
    "id": 1026,
    "topicId": 1,
    "question": "Outro exemplo mecânico clássico de Alavanca de 2.ª Classe dupla utilizado para partir cascas rígidas de frutos secos é:",
    "options": [
      "O quebra-nozes (com a dobradiça na ponta como fulcro, a noz resistente no meio e as mãos aplicando a força potente nas extremidades dos dois braços).",
      "A tesoura de sutura cirúrgica (com o fulcro no meio, a força potente nos anéis e a resistência cortante a atuar nas pontas das lâminas).",
      "A pinça anatómica simples de disseção (com as extremidades unidas na base, a força potente no meio e a resistência na ponta activa).",
      "O alicate de corte ósseo ortopédico (com o fulcro articulado situado estritamente entre a pega ergonómica e as pontas de contacto)."
    ],
    "correctIndex": 0,
    "explanation": "No quebra-nozes: fulcro na articulação da ponta; a noz resistente fica no centro; a força potente atua nos extremos dos cabos (bp > br ⇒ grande força de esmagamento).",
    "distractorAnalysis": [
      "Está incorreta: a tesoura de sutura é uma alavanca interfixa (1.ª classe), onde o ponto de apoio se situa entre a potência e a resistência.",
      "Está incorreta: a pinça de disseção é uma alavanca interpotente (3.ª classe), pois a força muscular dos dedos atua entre a base e as pontas.",
      "Está incorreta: o alicate tradicional é uma alavanca de 1.ª classe (interfixa), onde o eixo articulado fica entre os cabos e os mordentes."
    ],
    "nursingApplication": "Fixa a imagem clássica do quebra-nozes como sinónimo geométrico de alavanca inter-resistente de 2.ª classe."
  },
  {
    "id": 1027,
    "topicId": 1,
    "question": "Em doentes com rotura aguda do tendão de Aquiles, o que acontece à capacidade mecânica de efetuar a marcha funcional?",
    "options": [
      "A vantagem mecânica aumenta consideravelmente, permitindo uma flexão plantar mais vigorosa compensada pela musculatura flexora intrínseca dos dedos.",
      "O braço de resistência encurta espontaneamente até zero, permitindo que a articulação talocrural realize a marcha sem qualquer gasto energético basal.",
      "Perde-se a transmissão da força potente (Fp = 0), tornando o doente completamente incapaz de elevar o calcanhar ou realizar a propulsão da passada (marcha claudicante sem impulsão).",
      "O doente mantém a impulsão normal da passada, uma vez que a elevação do calcanhar depende primariamente do músculo tibial anterior e extensores."
    ],
    "correctIndex": 2,
    "explanation": "Sem o tendão de Aquiles a alavanca de 2.ª classe é desativada: a contração do gémeo não puxa o calcâneo e o pé apenas bate plano no solo sem força propulsora.",
    "distractorAnalysis": [
      "Está incorreta: os músculos intrínsecos do pé são débeis e incapazes de gerar o torque necessário para elevar a massa corporal sem o tricípete sural.",
      "Está incorreta: o braço de resistência é anatómico e a rotura do tendão elimina a aplicação da força potente, impedindo a flexão plantar contra a carga.",
      "Está incorreta: o tibial anterior é flexor dorsal do pé; a impulsão e elevação do calcanhar dependem estritamente do tricípete sural e tendão de Aquiles."
    ],
    "nursingApplication": "Permite ao enfermeiro reconhecer o Sinal de Thompson (ausência de flexão plantar ao apertar a barriga da perna) no diagnóstico de rotura tendinosa."
  },
  {
    "id": 1028,
    "topicId": 1,
    "question": "Se uma alavanca de 3.ª classe tiver bp = 4 cm e br = 32 cm, que força potente Fp tem de ser aplicada para equilibrar uma carga resistente de 20 N na ponta?",
    "options": [
      "2,5 N (calculada invertendo erradamente a proporção dos braços de alavanca: Fp = 20 · (4 / 32) = 2,5 N).",
      "20 N (porque as alavancas articulares mantêm a força potente rigorosamente igual à carga resistente sustentada).",
      "80 N (calculada multiplicando a carga de 20 N pelo braço de potência de 4 cm: Fp = 20 × 4 = 80 N).",
      "160 N (calculada por Fp · 4 = 20 · 32 ⇒ Fp = 640 / 4 = 160 N, ou seja, oito vezes mais força do que a carga!)."
    ],
    "correctIndex": 3,
    "explanation": "Fp · bp = Fr · br ⇒ Fp · 0,04 = 20 · 0,32 ⇒ Fp = 6,4 / 0,04 = 160 N. O músculo tem de exercer uma força de 160 N para sustentar apenas 20 N na mão!",
    "distractorAnalysis": [
      "Está incorreta: numa alavanca de 3.ª classe bp < br, pelo que a força potente tem de ser 8 vezes superior à carga (160 N), e não 8 vezes menor.",
      "Está incorreta: alavancas não mantêm a força inalterada quando os braços são assimétricos; o torque exige compensação de força.",
      "Está incorreta: a equação de momentos é Fp · bp = Fr · br; 80 N ignora a multiplicação pelo braço resistente de 32 cm."
    ],
    "nursingApplication": "Mostra numericamente o 'custo de força' que o corpo humano paga para operar com alavancas interpotentes."
  },
  {
    "id": 1029,
    "topicId": 1,
    "question": "Se a Alavanca de 3.ª Classe apresenta desvantagem de força (VM < 1, exigindo que os músculos façam muito mais força do que a carga), porque é que a evolução biológica selecionou esta classe para a quase totalidade do esqueleto humano?",
    "options": [
      "Porque proporciona uma enorme vantagem de amplitude e velocidade de movimento na extremidade (um encurtamento muscular minúsculo move a mão ou o pé ao longo de um grande arco rápido).",
      "Porque reduz significativamente a fadiga muscular aeróbica, permitindo que os músculos produzam forças substancialmente menores do que as cargas externas movimentadas pelos membros.",
      "Porque elimina completamente as tensões de flexão e compressão óssea, transferindo todas as linhas de carga mecânica diretamente para os ligamentos capsulares articulares estáveis.",
      "Porque atua como um travão mecânico protetor que restringe a velocidade angular das extremidades corporais, prevenindo o sobrealongamento patológico das bainhas sinoviais dos tendões."
    ],
    "correctIndex": 0,
    "explanation": "Trade-off biomecânico supremo: perdemos em força, mas ganhamos em rapidez, destreza e alcance espacial compacto (com músculos curtos junto às articulações).",
    "distractorAnalysis": [
      "Está incorreta: as alavancas de 3.ª classe apresentam VM < 1, exigindo forças musculares internas muito superiores às cargas manipuladas.",
      "Está incorreta: a disposição muscular em 3.ª classe gera forças de compressão e flexão elevadas nas superfícies ósseas e articulares.",
      "Está incorreta: a alavanca de 3.ª classe maximiza a velocidade e amplitude angular distal e não funciona como mecanismo redutor de velocidade."
    ],
    "nursingApplication": "Responde a uma das dúvidas conceituais mais fascinantes dos estudantes de anatomia e fisiologia."
  },
  {
    "id": 1030,
    "topicId": 1,
    "question": "Se os músculos humanos operassem como alavancas de 2.ª classe com grande vantagem de força (inserções tendinosas muito longe das articulações, junto às mãos e pés), que grave desvantagem anatómica resultaria?",
    "options": [
      "Os ossos longos fraturariam espontaneamente devido à completa anulação do atrito interno entre as trabéculas ósseas do esqueleto apendicular.",
      "Os membros seriam extremamente volumosos, pesados e lentos, com tendões distantes que limitariam drasticamente a amplitude articular e a agilidade motora.",
      "A força muscular máxima gerada pelos sarcómeros seria reduzida para zero, impedindo a manutenção de qualquer tónus postural contra a gravidade.",
      "O centro de gravidade do corpo humano seria deslocado de forma permanente para fora da base anatómica, impedindo a posição ortostática estável."
    ],
    "correctIndex": 1,
    "explanation": "Inserções musculares próximas dos eixos articulares (3.ª classe) mantêm os membros esguios, leves e com baixo momento de inércia angular, maximizando a aceleração.",
    "distractorAnalysis": [
      "Está incorreta: a desvantagem é geométrica e funcional (velocidade e amplitude); a estrutura trabecular óssea não sofre anulação de atrito.",
      "Está incorreta: a tensão intrínseca dos sarcómeros musculares mantém-se inalterada; o que muda é a relação de alavanca articular mecânica.",
      "Está incorreta: o alinhamento postural depende da coordenação neuromuscular e base de apoio, não sendo inviabilizado pela inserção tendinosa."
    ],
    "nursingApplication": "Demonstra a elegância do compromisso arquitetónico da anatomia humana entre compacidade, velocidade e gasto de força."
  },
  {
    "id": 1031,
    "topicId": 1,
    "question": "Qual é a consequência fisiológica direta desta desvantagem mecânica de força (VM < 1) das alavancas do corpo humano durante o trabalho dos enfermeiros?",
    "options": [
      "Os músculos e tendões dos profissionais estão permanentemente sujeitos a forças internas colossais (muito superiores aos pesos externos manipulados), exigindo técnicas ergonómicas rigorosas para prevenir roturas e tendinites.",
      "A tensão desenvolvida pelos tendões musculares é apenas uma fração diminuta da carga externa erguida, pelo que as lesões musculoesqueléticas ocupacionais decorrem unicamente de fatores genéticos e posturais prévios.",
      "O sistema cardiovascular é forçado a duplicar o débito cardíaco basal para compensar o bloqueio mecânico que a desvantagem das alavancas ósseas impõe à contração dos sarcómeros durante a sustentação de pesos leves.",
      "As superfícies articulares e discos cartilagíneos ficam totalmente isentos de forças de compressão axial, uma vez que a desvantagem de braço de alavanca transfere todo o esforço para a elasticidade passiva da pele."
    ],
    "correctIndex": 0,
    "explanation": "Saber que sustentar 10 kg na mão exige mais de 70 a 100 kgf nos tendões do braço alerta o profissional para a vulnerabilidade intrínseca das estruturas musculoesqueléticas.",
    "distractorAnalysis": [
      "Está incorreta: devido ao curto braço potente (VM < 1), os tendões suportam forças internas muitas vezes superiores à carga externa erguida.",
      "Está incorreta: a desvantagem mecânica é uma propriedade estática osteomuscular local, não resultando de insuficiência do débito cardíaco.",
      "Está incorreta: as elevadas forças musculares necessárias para equilibrar os torques aumentam significativamente a compressão articular."
    ],
    "nursingApplication": "Fundamenta a consciência ergonómica ocupacional de autocuidado e preservação da integridade física do enfermeiro."
  },
  {
    "id": 1032,
    "topicId": 1,
    "question": "No exemplo clássico da flexão do cotovelo pelo músculo bíceps braquial no corpo humano, quais são os três pontos anatómicos que constituem a alavanca?",
    "options": [
      "Fulcro = Articulação do ombro (glenoumeral); Força Potente = Corpo muscular do bíceps no terço médio do braço; Força Resistente = Articulação do punho com toda a resistência gravitacional concentrada nos ossos cárpicos.",
      "Fulcro = Articulação do cotovelo (tróclea umeral/rádio); Força Potente = Inserção do tendão do bíceps na tuberosidade bicipital do rádio; Força Resistente = Peso do antebraço e mão (mais a carga segurada na mão).",
      "Fulcro = Tuberosidade bicipital do rádio; Força Potente = Articulação do cotovelo gerando torque ascendente; Força Resistente = Ventre do tríceps braquial atuando como carga antagonista oposta à flexão do membro.",
      "Fulcro = Pontas dos dedos da mão em preensão palmar; Força Potente = Articulação do cotovelo com rotação umeral; Força Resistente = Inserção do tendão do bíceps suportando a tração descendente do antebraço fletido."
    ],
    "correctIndex": 1,
    "explanation": "Geometria incontestável de 3.ª classe: Fulcro (cotovelo na ponta) - Potência (tendão do bíceps a 3-5 cm do cotovelo) - Resistência (peso na mão a 30-35 cm do cotovelo).",
    "distractorAnalysis": [
      "Está incorreta: o fulcro da flexão do antebraço situa-se na articulação do cotovelo e não na articulação glenoumeral do ombro.",
      "Está incorreta: o cotovelo é o eixo articular de apoio (fulcro) e o tendão do bíceps na tuberosidade radial constitui o ponto de aplicação da potência.",
      "Está incorreta: o fulcro anatómico situa-se proximalmente no cotovelo e a carga resistente atua distalmente no antebraço e mão."
    ],
    "nursingApplication": "Figura central e obrigatória de todos os manuais e exames de biofísica para enfermagem."
  },
  {
    "id": 1033,
    "topicId": 1,
    "question": "Qual é a razão aproximada entre o braço da carga na mão (br ≈ 35 cm) e o braço do tendão do bíceps (bp ≈ 5 cm) no cotovelo humano?",
    "options": [
      "Rigorosamente 1 para 1, funcionando a articulação do cotovelo como uma balança de pratos simétrica com braços exatamente iguais.",
      "Cerca de 7 para 1 (br / bp = 35 / 5 = 7), significando que o músculo bíceps tem de exercer pelo menos 7 vezes mais força do que o peso da carga segurada na mão.",
      "Cerca de 1 para 70, permitindo que uma contração suave do bíceps de 10 N sustente setecentos Newtons de carga na mão do utente.",
      "A razão entre os braços varia de forma imprevisível a cada batimento cardíaco em função da pressão arterial braquial medida."
    ],
    "correctIndex": 1,
    "explanation": "Com uma razão de alavanca de 7:1, segurar uma simples carga de 10 kg (~100 N) na mão exige que o tendão do bíceps seja tracionado com cerca de 700 N (71 kgf!) de força muscular contínua.",
    "distractorAnalysis": [
      "Está incorreta: com braço de carga de 35 cm e inserção tendinosa a 5 cm do fulcro, a razão de distâncias é claramente 35/5 = 7 (desvantagem mecânica de 7:1).",
      "Está incorreta: uma razão de 1:70 inverteria a anatomia humana, exigindo que o bíceps se inserisse a vários metros de distância do cotovelo.",
      "Está incorreta: os braços de alavanca dependem exclusivamente da anatomia óssea e tendinosa do cotovelo, e não do ritmo cardíaco do indivíduo."
    ],
    "nursingApplication": "Fixa a proporção mnemónica fundamental (1:7) do cotovelo que serve de base a todos os exercícios da alavanca do cotovelo."
  },
  {
    "id": 1034,
    "topicId": 1,
    "question": "No exercício da alavanca do antebraço, quando o utente segura um objeto de 1,0 kg na mão a uma distância de 30 cm do cotovelo (g = 9,8 m/s²), qual é o momento resistente da carga externa?",
    "options": [
      "MR = 1,0 × 30 = 30 N·m, esquecendo a aceleração gravítica e o sistema internacional de unidades.",
      "MR = 294 N·m, confundindo 30 centímetros com 30 metros de distância métrica.",
      "MR = 0,05 N·m, dividindo a massa do objeto pela distância ao quadrado.",
      "MR = (1,0 kg × 9,8 m/s²) × 0,30 m = 2,94 N·m, garantindo o equilíbrio estático."
    ],
    "correctIndex": 3,
    "explanation": "Cálculo resistente: MR = FR · bR = (1 × 9,8) × 0,30 = 2,94 N·m.",
    "distractorAnalysis": [
      "Está incorreta: A fórmula correta exige Newtons (kg × 9,8) e metros (0,30 m), resultando em 2,94 N·m.",
      "Está incorreta: 30 cm equivalem a 0,30 m e não a trinta metros de comprimento anatómico.",
      "Está incorreta: O momento calcula-se pelo produto da força pela distância e não por divisões arbitrárias."
    ],
    "nursingApplication": "Fixa a aplicação direta da fórmula de momento resistente para uma carga segurada na mão."
  },
  {
    "id": 1035,
    "topicId": 1,
    "question": "Como varia o momento gerado pelo bíceps em função do ângulo de flexão do cotovelo para uma mesma força de contração muscular?",
    "options": [
      "O momento atinge o seu valor máximo com o braço em extensão completa a 0°, pois o comprimento total do membro aumenta a distância linear entre a origem do músculo e a mão.",
      "O momento mantém-se rigorosamente constante ao longo de toda a amplitude articular, visto que o torque depende exclusivamente da tensão desenvolvida pelos sarcómeros do bíceps.",
      "O momento é máximo na flexão máxima a 140°, onde a sobreposição dos filamentos de actina e miosina atinge o pico e direciona toda a força de tração ao longo do eixo umeral.",
      "O momento é máximo quando o cotovelo está fletido a 90° (onde o tendão puxa perpendicularmente ao osso, sin 90° = 1), e diminui quando o braço está quase estendido ou muito fletido."
    ],
    "correctIndex": 3,
    "explanation": "M = F · d · sin(θ). A 90°, sin(90°) = 1, pelo que todo o vetor de força é útil para rotação (braço de alavanca perpendicular é máximo).",
    "distractorAnalysis": [
      "Está incorreta: em extensão completa o ângulo de tração é muito reduzido (seno pequeno), direcionando a força para compressão articular e não para rotação.",
      "Está incorreta: o momento varia com o ângulo de inserção (M = F · d · sen θ), sendo o braço perpendicular máximo apenas a 90°.",
      "Está incorreta: na flexão extrema acima de 120° o braço de alavanca perpendicular volta a diminuir e surge interferência mecânica dos tecidos moles."
    ],
    "nursingApplication": "Explica porque é que transportar cargas com o cotovelo a 90° oferece maior eficácia biomecânica de torque."
  },
  {
    "id": 1036,
    "topicId": 1,
    "question": "Qual é a vantagem evolutiva e prática de o corpo humano ter alavancas no cotovelo com desvantagem mecânica de força (VM < 1)?",
    "options": [
      "Permite que o bíceps desenvolva uma força muscular muito menor do que o peso da carga manipulada na mão, garantindo que o tecido contrátil nunca entre em sobrecarga mecânica ou fadiga.",
      "Elimina a necessidade de líquido sinovial na articulação do cotovelo, pois a desvantagem mecânica cancela o atrito entre as superfícies da cartilagem articular da tróclea e do rádio.",
      "Garante que os movimentos da mão sejam sempre lentos e altamente restritos em amplitude, impedindo que oscilações bruscas dos membros superiores desestabilizem o centro de gravidade do corpo.",
      "Permite que um pequeno encurtamento muscular (alguns centímetros) produza um movimento amplo e veloz da mão (dezenas de centímetros), essencial para agarrar, alimentar-se e manipular ferramentas."
    ],
    "correctIndex": 3,
    "explanation": "Amplificação cinemática: ganhamos velocidade e alcance angular ao custo de termos músculos fortes capazes de vencer a desvantagem de braço de alavanca.",
    "distractorAnalysis": [
      "Está incorreta: com VM < 1 a força muscular necessária é muito superior à carga externa levantada, existindo desvantagem de força e não alívio muscular.",
      "Está incorreta: a disposição mecânica da alavanca não anula o atrito nem dispensa o líquido sinovial articular, que depende da lubrificação biológica.",
      "Está incorreta: a alavanca de 3.ª classe amplifica significativamente a velocidade e amplitude de movimento da extremidade, não visando movimentos lentos."
    ],
    "nursingApplication": "Compreensão biocibernética e evolutiva da arquitetura do aparelho locomotor."
  },
  {
    "id": 1037,
    "topicId": 1,
    "question": "Que 'preço' físico paga o operador na alavanca para conseguir erguer a carga de 500 kg com apenas 30 kg de força?",
    "options": [
      "Tem de deslocar a extremidade do seu braço potente por uma distância muito maior (5 metros para erguer a carga apenas alguns centímetros), conservando o trabalho mecânico realizado.",
      "Tem de suportar a dissipação de quase toda a energia sob a forma de calor nos tendões, provocando hipertermia muscular localizada mesmo sem esforço contrátil apreciável.",
      "Tem de percorrer uma distância muito mais curta na extremidade potente, exigindo uma velocidade de movimentação extremamente rápida para não quebrar o equilíbrio inercial.",
      "Tem de deslocar continuamente a posição do ponto de apoio durante o movimento, uma vez que a vantagem mecânica se dissipa se o fulcro permanecer imóvel sob a barra rígida."
    ],
    "correctIndex": 0,
    "explanation": "W = F · d. Ganha-se em força reduzindo a força necessária em 16,6 vezes, mas a distância percorrida pela mão tem de ser 16,6 vezes maior (Trabalho potente = Trabalho resistente).",
    "distractorAnalysis": [
      "Está incorreta: o princípio das alavancas não assenta na dissipação térmica, mas sim na relação cinemática inversa entre força e deslocamento linear.",
      "Está incorreta: pelo princípio do trabalho (W = F · d), a redução da força potente exige um percurso linear proporcionalmente maior e não menor.",
      "Está incorreta: o fulcro da alavanca mantém-se fixo durante a operação, não necessitando de ser transladado para manter o ganho mecânico."
    ],
    "nursingApplication": "Enfatiza o princípio da conservação do trabalho mecânico nas alavancas."
  },
  {
    "id": 1038,
    "topicId": 1,
    "question": "Qual é a relação de vantagem mecânica neste sistema de alavanca (500 kg suportados por 30 kg)?",
    "options": [
      "VM = 30 / 500 ≈ 0,06, significando que o sistema exige dezassete vezes mais esforço para sustentar a carga.",
      "VM = 500 / 30 = 5,0 m / 0,3 m ≈ 16,7, o que representa uma amplificação de força de cerca de dezassete vezes.",
      "VM = 1,0, indicando ausência de vantagem mecânica visto que o sistema se encontra em equilíbrio estático.",
      "VM = 500 × 0,3 = 150, calculada pelo produto direto da massa resistente pelo braço de alavanca resistente."
    ],
    "correctIndex": 1,
    "explanation": "A razão entre os braços (5 m / 0,3 m) é igual à razão entre as forças (4900 N / 294 N) = 16,67.",
    "distractorAnalysis": [
      "Está incorreta: 0,06 inverte a razão; a vantagem mecânica calcula-se pela divisão da resistência pela potência (500 / 30 = 16,7).",
      "Está incorreta: o equilíbrio estático com forças desiguais (500 kg vs 30 kg) prova a existência de vantagem mecânica multiplicadora.",
      "Está incorreta: multiplicar massa por braço obtém torque de carga (em kg·m), e não a vantagem mecânica adimensional (VM = bp / br)."
    ],
    "nursingApplication": "Consolidação matemática do conceito de vantagem mecânica em alavancas de grande multiplicação."
  },
  {
    "id": 1039,
    "topicId": 1,
    "question": "Quando uma pessoa flete o tronco para a frente a partir da bacia para apanhar um objeto no chão, a coluna vertebral funciona biomecanicamente como uma alavanca:",
    "options": [
      "Interfixa (1.ª classe), onde o ponto de apoio se localiza na articulação dos joelhos, a resistência atua no disco L5-S1 e a força potente é aplicada unicamente pela musculatura abdominal anterior.",
      "Inter-resistente (2.ª classe), onde a carga resistente atua encostada ao fulcro sagrado e os eretores espinhais beneficiam de um braço de potência muito maior do que o braço resistente da carga.",
      "Interpotente (3.ª classe), onde o fulcro se situa no disco lombossagrado L5-S1, a força potente é exercida pelos músculos eretores da espinha com braço muito curto (~5 cm), e a resistência atua a longa distância.",
      "Hidráulica pura sem braços de alavanca, onde o peso do tronco é equilibrado diretamente pela tensão passiva do ligamento amarelo sem qualquer intervenção dos momentos de forças musculares."
    ],
    "correctIndex": 2,
    "explanation": "Na flexão do tronco, os eretores da espinha inserem-se a escassos 5 cm do eixo de rotação articular vertebral, enquanto o peso do tronco e a carga atuam a 30-50 cm do fulcro.",
    "distractorAnalysis": [
      "Está incorreta: na flexão do tronco o fulcro articular situa-se na junção lombossagrada L5-S1 e não nas articulações dos joelhos.",
      "Está incorreta: os eretores da espinha possuem um braço potente muito reduzido (~5 cm), funcionando como alavanca de 3.ª classe com acentuada desvantagem de força.",
      "Está incorreta: a coluna vertebral atua segundo leis rígidas de alavancas e torques estáticos, sendo a contração muscular ativa dos eretores indispensável."
    ],
    "nursingApplication": "Explica a vulnerabilidade anatómica lombar e a causa física das lombalgias mecânicas."
  },
  {
    "id": 1040,
    "topicId": 1,
    "question": "Porque é que o braço de alavanca dos músculos eretores da espinha (bp ≈ 5 cm) cria uma grande desvantagem de força na flexão do tronco?",
    "options": [
      "Porque esse braço curto permite que os músculos eretores exerçam uma força dez vezes inferior ao peso do tronco, dispensando a intervenção da musculatura estabilizadora pélvica e abdominal durante o levantamento.",
      "Porque um braço potente reduzido converte a totalidade da força muscular em torque de torção lateral das vértebras lombares, impedindo a produção de momentos de extensão no plano sagital da coluna vertebral.",
      "Porque o braço de cinco centímetros obriga o ligamento longitudinal anterior a suportar a totalidade da carga de flexão, tornando desnecessária a geração de momentos de força pelos músculos paravertebrais.",
      "Porque para equilibrar o momento do peso do próprio tronco e de qualquer carga externa segurada nas mãos (br ≈ 35 a 50 cm), os músculos eretores têm de produzir uma força muscular cerca de 7 a 10 vezes superior ao peso levantado."
    ],
    "correctIndex": 3,
    "explanation": "Equilíbrio de momentos: F_eretores × 5 cm = P_tronco × 25 cm + P_carga × 40 cm. Os eretores têm de produzir centenas de quilos-força para compensar o seu braço minúsculo!",
    "distractorAnalysis": [
      "Está incorreta: devido ao curto braço de potência relativo ao braço da resistência (bp << br), os eretores têm de gerar forças muito superiores ao peso.",
      "Está incorreta: o torque dos eretores atua no plano sagital promovendo a extensão e estabilização da coluna vertebral, não causando torção lateral primária.",
      "Está incorreta: na flexão do tronco o ligamento longitudinal anterior está relaxado e são os músculos eretores e ligamentos posteriores que equilibram o momento."
    ],
    "nursingApplication": "Demonstração física clara de porque a flexão do tronco com cargas é extremamente perigosa."
  },
  {
    "id": 1041,
    "topicId": 1,
    "question": "Ao mobilizar um utente para a cabeceira da cama, que técnica ergonómica minimiza o braço de alavanca?",
    "options": [
      "Manter a cama na posição mais baixa possível e fletir a coluna lombar para a frente com os cotovelos totalmente esticados para alcançar o tórax do doente.",
      "Posicionar-se a meio metro de distância da margem da cama e puxar o utente recorrendo unicamente à força dos músculos flexores dos pulsos e dedos.",
      "Subir o leito, baixar as grades, colocar-se junto ao utente virado na direção do movimento e transferir o peso corporal de uma perna para a outra com os cotovelos colados ao corpo.",
      "Executar a manobra de tração rodando rapidamente a coluna lombar enquanto mantém os pés fixos e juntos no chão, sem mudar a base de suporte no solo."
    ],
    "correctIndex": 2,
    "explanation": "Usar o peso do próprio corpo em translação transfere o trabalho para os membros inferiores e anula os momentos fletores lesivos na coluna vertebral.",
    "distractorAnalysis": [
      "Está incorreta: fletir a coluna com cotovelos esticados aumenta drasticamente o braço de resistência, multiplicando o torque sobre L5-S1.",
      "Está incorreta: afastar-se da cama aumenta a distância horizontal da carga e usar apenas os pulsos gera sobrecarga ligamentar aguda.",
      "Está incorreta: torcer a coluna lombar sob carga com pés fixos sujeita os discos intervertebrais a graves forças de cisalhamento."
    ],
    "nursingApplication": "Guia prático para mobilização no leito baseado nos princípios físicos de alavancas e trabalho."
  },
  {
    "id": 1042,
    "topicId": 1,
    "question": "Que papel desempenha a rótula (patela) na biomecânica da alavanca do joelho?",
    "options": [
      "Atua como um batente mecânico rígido que bloqueia a extensão aos 90 graus, reduzindo deliberadamente o braço potente do quadríceps para evitar sobrecarga nos ligamentos cruzados.",
      "Converte a articulação do joelho numa alavanca inter-resistente pura, ancorando o peso do fémur diretamente no menisco medial para dispensar a contração contínua do quadríceps.",
      "Atua como uma 'roldana anatómica' que afasta o tendão patelar do eixo de rotação articular, aumentando o braço de alavanca potente (bp) do quadríceps e maximizando o seu torque extensor.",
      "Funciona como um amortecedor hidrostático que elimina as forças de compressão articular, transferindo toda a carga gravitacional diretamente para a pele da face anterior do joelho."
    ],
    "correctIndex": 2,
    "explanation": "A patela projeta a linha de ação do ligamento patelar para a frente, aumentando a distância perpendicular ao fulcro e tornando o quadríceps significativamente mais eficiente.",
    "distractorAnalysis": [
      "Está incorreta: a patela aumenta o braço de alavanca e a eficácia mecânica do quadríceps, não funcionando como travão limitador da extensão.",
      "Está incorreta: o joelho permanece uma alavanca de 3.ª classe interpotente; a patela atua como roldana anatómica móvel sem alterar a classe mecânica.",
      "Está incorreta: a patela suporta elevadas forças compressivas retropatelares e não elimina a transmissão de carga mecânica entre o fémur e a tíbia."
    ],
    "nursingApplication": "Conceito elegante de biomecânica músculo-esquelética sobre a função mecânica dos ossos sesamoides."
  },
  {
    "id": 1043,
    "topicId": 1,
    "question": "Na mastigação, a mandíbula humana articula-se na articulação têmporo-mandibular (ATM) e funciona como uma alavanca de que classe quando os músculos masseter e temporal se contraem?",
    "options": [
      "Alavanca de 1.ª classe (interfixa), onde os dentes molares atuam como ponto de apoio central, a força potente é exercida na sínfise do queixo e a resistência articular localiza-se posteriormente na ATM.",
      "Alavanca de 3.ª classe (interpotente), onde o fulcro é a ATM, a força potente é aplicada pelos músculos mastigatórios (masseter/temporal) no ramo ascendente da mandíbula, e a resistência está nos dentes.",
      "Alavanca de 2.ª classe (inter-resistente), onde o fulcro é a ATM, a resistência dos alimentos situa-se no ramo mandibular e a força potente é aplicada na extremidade anterior do queixo pelo platisma.",
      "Alavanca de 1.ª classe dupla, onde a articulação atlanto-occipital atua como fulcro comum, os músculos masseteres como resistência e a compressão oclusal nos dentes incisivos como força motora primária."
    ],
    "correctIndex": 1,
    "explanation": "A ATM é posterior, o músculo masseter puxa para cima no meio (ramo mandibular), e o alimento oferece resistência nos dentes molares e incisivos mais à frente.",
    "distractorAnalysis": [
      "Está incorreta: o fulcro anatómico situa-se posteriormente na ATM e os dentes constituem o ponto de aplicação da resistência aos alimentos.",
      "Está incorreta: a força potente é aplicada no ramo mandibular pelos músculos mastigatórios (entre o fulcro na ATM e a resistência nos dentes).",
      "Está incorreta: a mandíbula articula-se na ATM e atua como alavanca interpotente simples de 3.ª classe no encerramento da boca contra o alimento."
    ],
    "nursingApplication": "Aplica as classes de alavancas a um sistema orofacial crucial na nutrição e cuidados de saúde."
  },
  {
    "id": 1044,
    "topicId": 1,
    "question": "Qual é o movimento articular complexo que a ATM combina para além da simples rotação de alavanca?",
    "options": [
      "Translação vertical descendente pura de ambos os côndilos mandibulares ao longo dos ramos da mandíbula, sem qualquer componente de rotação articular angular.",
      "Combina rotação pura na cavidade inferior com translação anterior (deslizamento do côndilo para a frente) na cavidade superior, permitindo a abertura ampla da boca.",
      "Circundução esferoidal completa em 360 graus na cavidade glenoideia, idêntica ao mecanismo biomecânico da articulação coxofemoral durante a locomoção bípede.",
      "Cisalhamento lateral puro acompanhado pelo deslocamento posterior permanente do menisco articular, que bloqueia o movimento condilar após a primeira mastigação."
    ],
    "correctIndex": 1,
    "explanation": "A ATM é uma articulação sinovial bicondilar complexa do tipo gínglimo-artrodial (dobradiça e deslizamento).",
    "distractorAnalysis": [
      "Está incorreta: a abertura da boca inicia-se com rotação pura condilar na cavidade inframeniscal antes de ocorrer a translação condilar anterior.",
      "Está incorreta: a ATM é uma articulação sinovial bicondilar (gínglimo-artrodial) e não uma enartrose esferoidal como a anca ou o ombro.",
      "Está incorreta: o disco articular move-se harmoniosamente com o côndilo sem cisalhamento lesivo ou bloqueio permanente na abertura fisiológica."
    ],
    "nursingApplication": "Compreensão aprofundada da cinemática mandibular nos cuidados de saúde e alimentação assistida."
  },
  {
    "id": 1045,
    "topicId": 1,
    "question": "No desafio clínico do transporte em ambulância, uma ambulância trava bruscamente a 80 km/h. Porque é que o enfermeiro de pé é projetado para a frente?",
    "options": [
      "Porque surge uma força mística repulsiva gerada pelo motor da ambulância que empurra fisicamente o profissional para a frente.",
      "Porque a gravidade da Terra inverte subitamente o seu sentido para a horizontal no instante exato da travagem dos travões.",
      "Pela 1.ª Lei de Newton, o corpo do enfermeiro mantém por inércia a velocidade de 80 km/h até que uma força externa atue sobre ele.",
      "Porque o ar interior da cabine sanitária arrefece bruscamente, criando uma corrente de sucção a vácuo na divisória."
    ],
    "correctIndex": 2,
    "explanation": "Explica-se pelo princípio da inércia: 'Pela 1ª Lei de Newton (Lei da inércia), o corpo do enfermeiro mantém a velocidade de 80 km/h até que uma força atue sobre ele'.",
    "distractorAnalysis": [
      "Está incorreta: Não existe nenhuma força a empurrar para a frente; o corpo simplesmente mantém a velocidade que já possuía por inércia.",
      "Está incorreta: A gravidade atua na vertical para baixo; a desaceleração é horizontal e deve-se à travagem do veículo com o asfalto.",
      "Está incorreta: A projeção não é causada por correntes de ar, mas sim pela conservação da velocidade inercial da massa corporal."
    ],
    "nursingApplication": "Demonstra a importância vital de o enfermeiro permanecer sentado e com cinto de segurança apertado durante o transporte de emergência."
  },
  {
    "id": 1046,
    "topicId": 1,
    "question": "Qual é a razão pela qual a inércia do enfermeiro é tanto mais perigosa quanto maior for a velocidade da ambulância?",
    "options": [
      "Porque a alta velocidade anula a massa corporal do profissional, transformando-o num feixe de fotões descontrolado.",
      "Quanto maior a velocidade inicial, maior é a energia cinética (Ec = ½·m·v²) e mais violento será o impacto necessário para travar o corpo.",
      "Porque velocidades acima de 50 km/h invertem as leis da mecânica newtoniana no interior de ambulâncias de socorro.",
      "Porque o oxigénio no interior da cabine sanitária solidifica instantaneamente a velocidades superiores a 60 km/h."
    ],
    "correctIndex": 1,
    "explanation": "A energia cinética cresce com o quadrado da velocidade: a 80 km/h o corpo possui 4 vezes mais energia do que a 40 km/h, exigindo forças de paragem massivas.",
    "distractorAnalysis": [
      "Está incorreta: A massa inercial não se anula a alta velocidade; o corpo mantém toda a sua massa e inércia.",
      "Está incorreta: As leis da mecânica aplicam-se a qualquer velocidade no regime clássico não relativista.",
      "Está incorreta: O oxigénio gasoso permanece perfeitamente gasoso nas condições de temperatura da cabine."
    ],
    "nursingApplication": "Justifica os limites de velocidade e condução defensiva das equipas de emergência pré-hospitalar."
  },
  {
    "id": 1047,
    "topicId": 1,
    "question": "Numa ambulância que se desloca a 80 km/h em linha reta com velocidade perfeitamente constante (MRU), o enfermeiro de pé sente força para a frente?",
    "options": [
      "Sim, sente uma força de impulsão constante que o empurra para a frente proporcional ao quadrado da velocidade do veículo.",
      "Sim, sente uma força de arrasto que o puxa continuamente para trás decorrente da resistência aerodinâmica da ambulância.",
      "Não, porque em velocidade constante a aceleração é nula e o corpo encontra-se em equilíbrio inercial com o veículo.",
      "Sim, sente uma força lateral contínua decorrente da rotação da Terra e do efeito de Coriolis no hemisfério norte."
    ],
    "correctIndex": 2,
    "explanation": "Em MRU (velocidade constante sem aceleração), a resultante é nula (∑F = 0); os ocupantes não sentem forças inerciais de projeção.",
    "distractorAnalysis": [
      "Está incorreta: a velocidade constante (MRU) não gera forças inerciais aparentes; as forças 'para a frente' surgem apenas nas desacelerações (travagens).",
      "Está incorreta: no interior fechado da cabine de cuidados não há vento relativo nem arrasto aerodinâmico a atuar diretamente sobre o corpo do profissional.",
      "Está incorreta: as forças de Coriolis à escala de um veículo hospitalar são impercetíveis e desprezáveis no equilíbrio motor humano."
    ],
    "nursingApplication": "Permite prestar cuidados breves em reta uniforme, devendo o enfermeiro sentar-se assim que o veículo se aproxima de cruzamentos ou curvas."
  },
  {
    "id": 1048,
    "topicId": 1,
    "question": "Quando dizemos vulgarmente que o enfermeiro 'foi projetado para a frente' na travagem da ambulância, que incorreção física reside nessa expressão?",
    "options": [
      "A expressão está fisicamente perfeita, pois o ar da cabine sanitária empurra ativamente as costas do profissional.",
      "A incorreção reside no facto de que na verdade o enfermeiro é sempre projetado para trás em qualquer travagem.",
      "A física demonstra que durante a travagem o corpo do enfermeiro perde o contacto com a dimensão temporal.",
      "Nenhuma força o puxou para a frente; ele simplesmente continuou a mover-se à velocidade anterior enquanto a ambulância travou sob os seus pés."
    ],
    "correctIndex": 3,
    "explanation": "A 'projeção' é uma ilusão do referencial acelerado do veículo; o corpo continua em linha reta com a velocidade que já possuía (1.ª Lei).",
    "distractorAnalysis": [
      "Está incorreta: O ar não empurra as costas; o ar também desacelera com a cabine fechada do veículo.",
      "Está incorreta: Ser projetado para trás ocorre na aceleração de arranque súbito para a frente, e não na travagem.",
      "Está incorreta: O tempo decorre normalmente; o fenómeno é puramente cinemático e inercial no espaço tridimensional."
    ],
    "nursingApplication": "Compreender a inércia desmistifica a ideia de 'forças misteriosas' e foca a atenção na necessidade de retenção mecânica."
  },
  {
    "id": 1049,
    "topicId": 1,
    "question": "Se a ambulância travar bruscamente a 80 km/h e a divisória estiver a 1 metro de distância do enfermeiro, quanto tempo demora aproximadamente a colidir se não se segurar?",
    "options": [
      "Cerca de 0,045 segundos (menos de um vigésimo de segundo), pois 80 km/h correspondem a cerca de 22,2 metros por segundo (t = 1 / 22,2).",
      "Cerca de 5 segundos, permitindo ao enfermeiro reagir com calma, agarrar os manípulos e sentar-se em segurança.",
      "Exatamente 60 segundos, dado que a inércia reduz a velocidade relativa do corpo em 99% antes da colisão.",
      "Tempo infinito, porque a 1.ª Lei de Newton impede que corpos biológicos colidam com anteparos metálicos."
    ],
    "correctIndex": 0,
    "explanation": "80 km/h = 80 / 3,6 ≈ 22,2 m/s. Para percorrer 1 m: t = d / v = 1 / 22,2 ≈ 0,045 s. O impacto é quase instantâneo, sem tempo de reação!",
    "distractorAnalysis": [
      "Está incorreta: 5 segundos seria a velocidade de uma caminhada lentíssima (0,2 m/s); a 80 km/h o corpo desloca-se a mais de 22 m/s.",
      "Está incorreta: A inércia mantém a velocidade; não reduz a velocidade relativa antes do choque mecânico.",
      "Está incorreta: A física descreve o movimento; a colisão ocorre com certeza matemática se nenhum obstáculo travar o corpo."
    ],
    "nursingApplication": "Mostra a impossibilidade biológica de 'segurar-se com as mãos' perante desacelerações a alta velocidade: o cinto é imperativo!"
  },
  {
    "id": 1050,
    "topicId": 1,
    "question": "Se o piso da ambulância estivesse perfeitamente liso e sem qualquer atrito (gelo ideal), o que aconteceria ao enfermeiro durante a travagem?",
    "options": [
      "Travaria instantaneamente junto com as rodas da ambulância devido à transferência passiva de momento através do ar ambiente.",
      "Seria projetado verticalmente em direção ao tejadilho da viatura devido à conservação do momento angular sobre a superfície lisa.",
      "Continuaria a deslizar para a frente a rigorosamente 80 km/h em relação à estrada até colidir com a divisória dianteira.",
      "Inverteria o sentido de deslizamento e mover-se-ia para a porta traseira devido à força de reação normal do pavimento liso."
    ],
    "correctIndex": 2,
    "explanation": "Sem atrito no piso, nenhuma força atua sobre o enfermeiro, continuando o seu corpo em MRU a 80 km/h até embater na divisória.",
    "distractorAnalysis": [
      "Está incorreta: sem atrito entre os pés e o piso, nenhuma força horizontal atua sobre o enfermeiro para o desacelerar solidariamente com o veículo.",
      "Está incorreta: a travagem é puramente horizontal; não existe nenhuma força vertical resultante ascendente que projete o corpo contra o tejadilho.",
      "Está incorreta: o corpo tende a manter a velocidade que trazia (80 km/h para a frente) pela 1.ª Lei de Newton e nunca a inverter para trás."
    ],
    "nursingApplication": "O piso antiderrapante das ambulâncias fornece atrito para estabilidade na marcha, mas não substitui os cintos de segurança."
  },
  {
    "id": 1051,
    "topicId": 1,
    "question": "Qual é o papel físico dos cintos de segurança dos assentos da cabine de cuidados da ambulância?",
    "options": [
      "Aumentar a rigidez da coluna vertebral impedindo qualquer movimento fisiológico de respiração diafragmática durante a viagem.",
      "Anular completamente a massa inercial do tronco do ocupante através da compressão uniforme das massas musculares torácicas.",
      "Atuar como uma força externa controlada que desacelera o corpo solidariamente com a ambulância, distribuindo a força pelo tórax e pelve.",
      "Elevar o centro de gravidade do profissional sentado para facilitar a rápida transição para a postura ortostática de emergência."
    ],
    "correctIndex": 2,
    "explanation": "O cinto aplica a força externa necessária para travar o ocupante no mesmo tempo e distância que o veículo, protegendo contra impactos.",
    "distractorAnalysis": [
      "Está incorreta: os cintos modernos de 3 ou 4 pontos permitem excursão respiratória livre e bloqueiam apenas em desacelerações inerciais súbitas.",
      "Está incorreta: o cinto aplica uma força de travagem externa, mas não tem a capacidade de alterar a massa inercial da pessoa.",
      "Está incorreta: o cinto mantém o centro de gravidade estável e rebaixado junto ao assento para evitar projeções e perda de estabilidade."
    ],
    "nursingApplication": "O uso sistemático de cinto de segurança pelos enfermeiros reduz drasticamente traumatismos graves em colisões de ambulâncias."
  },
  {
    "id": 1052,
    "topicId": 1,
    "question": "Qual é a consequência de não fixar a garrafa de oxigénio medicinal no respetivo suporte rígido da ambulância?",
    "options": [
      "Numa travagem brusca ou colisão, a garrafa mantém a velocidade por inércia, transformando-se num projétil de alta energia destrutiva.",
      "A garrafa perde a pressão manométrica interna de oxigénio gasoso devido à agitação mecânica contínua sofrida durante a viagem.",
      "A ausência de suporte rígido impede a leitura correta do debitómetro de caudal por interferência do atrito cinético com a maca.",
      "A garrafa roda sobre si mesma acumulando carga eletrostática de atrito que pode desprogramar os monitores multiparamétricos vizinhos."
    ],
    "correctIndex": 0,
    "explanation": "Uma garrafa de O2 de 15 kg a deslocar-se a 80 km/h comporta-se como um projétil de artilharia, capaz de destruir a cabine e matar ocupantes.",
    "distractorAnalysis": [
      "Está incorreta: a pressão interna do gás comprimido depende da temperatura e quantidade de substância, não diminuindo por vibração física.",
      "Está incorreta: os debitómetros hospitalares operam por medição de fluxo de gás e o seu funcionamento não depende do atrito externo.",
      "Está incorreta: o risco primordial e crítico em emergência é o impacto mecânico direto de uma massa pesada solta (m·v) em desaceleração violenta."
    ],
    "nursingApplication": "O enfermeiro deve verificar diariamente o travamento mecânico dos suportes de cilindros de gases medicinais na ambulância."
  },
  {
    "id": 1053,
    "topicId": 1,
    "question": "Qual é a função primordial do cinto de segurança de três pontos nos assentos da cabine de cuidados da ambulância?",
    "options": [
      "Aquecer as estruturas vasculares torácicas através da condução térmica direta de energia metabólica acumulada.",
      "Aplicar uma força externa no tronco e pelve que desacelera o enfermeiro juntamente com a viatura, evitando a projeção inercial.",
      "Impedir que a frequência respiratória do profissional exceda 16 ciclos por minuto durante emergências graves.",
      "Transferir o peso corporal do enfermeiro para o sistema de suspensão dianteiro do chassis da ambulância."
    ],
    "correctIndex": 1,
    "explanation": "O cinto aplica a força de retenção que desacelera o corpo em segurança, impedindo o choque frontal por inércia.",
    "distractorAnalysis": [
      "Está incorreta: A função do cinto é puramente mecânica e biomecânica de retenção inercial, não de aquecimento térmico.",
      "Está incorreta: O cinto não controla a frequência respiratória voluntária ou fisiológica do profissional de saúde.",
      "Está incorreta: A força exercida pelo cinto atua sobre o corpo do ocupante, não transferindo peso para a suspensão dianteira."
    ],
    "nursingApplication": "O enfermeiro deve afivelar sempre o cinto de segurança, ajustando a sua posição para alcançar os comandos clínicos essenciais."
  },
  {
    "id": 1054,
    "topicId": 1,
    "question": "Se um profissional de saúde viajar na ambulância sem cinto de segurança e a viatura sofrer uma colisão frontal, o seu corpo:",
    "options": [
      "Para instantaneamente no mesmo ponto do espaço por ação do campo gravitacional terrestre estático.",
      "Recua imediatamente para a porta traseira da ambulância devido ao efeito de sucção aerodinâmica.",
      "Adquire um movimento retilíneo uniformemente acelerado que o projeta para o espaço extra-atmosférico.",
      "Continua a mover-se à velocidade de pré-impacto até embater violentamente contra a divisória, maca ou equipamento rígido."
    ],
    "correctIndex": 3,
    "explanation": "Pela 1.ª Lei de Newton, na ausência de cinto de segurança (força externa), o corpo mantém o seu movimento retilíneo e uniforme até à colisão.",
    "distractorAnalysis": [
      "Está incorreta: Sem força de retenção, o corpo não para; continua a mover-se para a frente em relação ao interior do veículo.",
      "Está incorreta: Recuar para trás só ocorreria se o veículo sofresse uma colisão traseira (aceleração para a frente).",
      "Está incorreta: A velocidade do corpo mantém-se horizontal no habitáculo, não sendo projetado para a atmosfera exterior."
    ],
    "nursingApplication": "Lesões cranianas graves e morte de profissionais em ambulâncias decorrem maioritariamente da não utilização do cinto de segurança."
  },
  {
    "id": 1055,
    "topicId": 1,
    "question": "Qual das seguintes práticas de segurança em ambulância contraria diretamente os princípios da 1.ª Lei de Newton?",
    "options": [
      "Sentar-se num assento homologado com cinto de segurança devidamente ajustado e tensionado sobre a clavícula e pelve.",
      "Permanecer de pé na cabine durante o transporte em marcha de emergência para vigiar de perto o acesso venoso do doente.",
      "Manter todos os equipamentos biomédicos e malas de reanimação bloqueados nos respetivos suportes mecânicos.",
      "Orientar o condutor da ambulância a evitar acelerações e travagens intempestivas através de condução suave e defensiva."
    ],
    "correctIndex": 1,
    "explanation": "Estar de pé numa ambulância em movimento coloca o profissional em risco crítico de queda e impacto violento por inércia.",
    "distractorAnalysis": [
      "Está incorreta: Sentar-se com cinto é a prática correta recomendada pelas diretrizes internacionais de segurança pré-hospitalar.",
      "Está incorreta: Bloquear malas e monitores evita que estes se transformem em projéteis mortíferos durante travagens bruscas.",
      "Está incorreta: A condução suave reduz as acelerações inerciais, preservando o equilíbrio do doente e da equipa."
    ],
    "nursingApplication": "Cuidados necessários devem ser prestados com o veículo imobilizado na berma se exigirem que o enfermeiro se levante do assento."
  },
  {
    "id": 1056,
    "topicId": 1,
    "question": "Um aspirador de secreções portátil de 6 kg está pousado solto sobre a bancada da ambulância. Numa travagem a 72 km/h (20 m/s), o que dita a 1.ª Lei de Newton?",
    "options": [
      "O aspirador trava instantaneamente na bancada devido à atuação do seu próprio peso gravitacional.",
      "O equipamento inverte imediatamente o sentido do seu movimento, deslizando para a porta traseira da cabine.",
      "O aspirador continua a deslocar-se para a frente a 20 m/s por inércia até embater na divisória ou num ocupante da cabine.",
      "O aspirador sofre uma rotação angular sobre a sua base mantendo-se em repouso estático absoluto no local."
    ],
    "correctIndex": 2,
    "explanation": "Pela 1.ª Lei, objetos soltos mantêm a sua velocidade inercial linear em relação ao solo até serem travados por um obstáculo rígido.",
    "distractorAnalysis": [
      "Está incorreta: a inércia faz o corpo manter a velocidade que trazia (20 m/s) relativamente à Terra a menos que uma força externa o trave.",
      "Está incorreta: a inércia mantém o movimento na direção e sentido para a frente (sentido original de translação da ambulância).",
      "Está incorreta: sem retenção mecânica na bancada, o aspirador não se mantém no mesmo ponto em relação ao veículo em desaceleração."
    ],
    "nursingApplication": "Todos os dispositivos médicos móveis devem dispor de berços de ancoragem com fecho rápido homologados (norma EN 1789)."
  },
  {
    "id": 1057,
    "topicId": 1,
    "question": "Se uma garrafa de oxigénio de 10 kg estiver mal fixada e a ambulância desacelerar a 10 m/s², que força inercial atua sobre o suporte defeituoso?",
    "options": [
      "100 N, calculada pelo produto da massa inercial da garrafa pela taxa de desaceleração da viatura (F = 10 × 10).",
      "1 N, obtida pela divisão simples da massa inercial pela desaceleração medida no chassis.",
      "1000 N, que decorre de uma multiplicação acidental pela décima potência da velocidade de circulação.",
      "0 N, porque os cilindros de gases medicinais são imunes às forças da mecânica clássica newtoniana."
    ],
    "correctIndex": 0,
    "explanation": "F = m·a = 10 kg × 10 m/s² = 100 N. Se o fecho não suportar esta força, a garrafa desprende-se e é projetada.",
    "distractorAnalysis": [
      "Está incorreta: Dividir massa por aceleração (10 / 10 = 1) comete um erro de fórmula e análise dimensional.",
      "Está incorreta: 1000 N resultaria de uma desaceleração extrema de 100 m/s² (cerca de 10 g), típica de colisões fatais contra muros rígidos.",
      "Está incorreta: Cilindros de metal obedecem rigorosamente à mecânica newtoniana e à inércia dos corpos massivos."
    ],
    "nursingApplication": "Verificar a integridade das cintas de fixação de garrafas de O2 é uma rotina inegociável de segurança em enfermagem."
  },
  {
    "id": 1058,
    "topicId": 1,
    "question": "Porque é que os tubos endotraqueais em doentes ventilados na ambulância devem ser meticulosamente fixados com fita ou fixador rígido?",
    "options": [
      "Para evitar que as forças inerciais atuantes sobre o circuito do ventilador durante as travagens desloquem o tubo para fora da traqueia.",
      "Para impedir que as secreções brônquicas solidifiquem no interior da cânula endotraqueal por efeito das vibrações mecânicas da viatura.",
      "Para assegurar que o oxigénio gasoso administrado mantenha a temperatura ambiente constante sem trocas térmicas com a traqueia.",
      "Para transformar a ventilação mecânica por pressão positiva numa ventilação passiva espontânea regida pela 1.ª Lei de Newton."
    ],
    "correctIndex": 0,
    "explanation": "A inércia do circuito de tubos pesados da ventilação traciona o tubo endotraqueal nas curvas e travagens, com risco de extubação acidental.",
    "distractorAnalysis": [
      "Está incorreta: a consistência das secreções depende da hidratação e aquecimento dos gases ventilatórios e não das acelerações inerciais do transporte.",
      "Está incorreta: a troca térmica do gás com as vias aéreas é um processo endotérmico fisiológico e não depende da rigidez da fixação externa da fita.",
      "Está incorreta: as Leis de Newton regem a mecânica do movimento; a ventilação mecânica é assegurada pelo gradiente de pressão do ventilador."
    ],
    "nursingApplication": "A extubação acidental durante o transporte em ambulância é uma catástrofe clínica evitável por correta fixação inercial."
  },
  {
    "id": 1059,
    "topicId": 1,
    "question": "Se um referencial estiver em repouso e outro se mover em relação a ele em MRU, como se comportam as leis da física em ambos?",
    "options": [
      "As leis da gravidade só funcionam no referencial em repouso, anulando-se no referencial em movimento retilíneo uniforme.",
      "No referencial em movimento uniforme os corpos perdem a capacidade de exercer forças normais de suporte em superfícies.",
      "As leis da mecânica newtoniana são perfeitamente idênticas em ambos (Princípio da Relatividade de Galileu para referenciais inerciais).",
      "A 1.ª Lei de Newton deixa de ser válida no referencial em repouso sempre que a temperatura da sala desce abaixo de 20 °C."
    ],
    "correctIndex": 2,
    "explanation": "Referenciais inerciais são equivalentes: um observador dentro de um comboio ou ambulância em MRU observa exatamente as mesmas leis de Newton.",
    "distractorAnalysis": [
      "Está incorreta: A gravidade atua de forma idêntica em qualquer referencial inercial na superfície da Terra.",
      "Está incorreta: As forças normais de suporte atuam com o mesmo rigor entre superfícies em contacto em qualquer referencial inercial.",
      "Está incorreta: A 1.ª Lei de Newton é universal e independe de variações térmicas ambientes."
    ],
    "nursingApplication": "Explica porque um enfermeiro pode preparar com segurança uma medicação na bancada da ambulância se esta se mover em MRU suave."
  },
  {
    "id": 1060,
    "topicId": 1,
    "question": "Uma ambulância em aceleração intensa ou travagem brusca constitui um referencial inercial?",
    "options": [
      "Não, é um referencial não inercial (acelerado), onde surgem forças inerciais aparentes (como a sensação de ser projetado).",
      "Sim, porque possui quatro rodas de borracha apoiadas continuamente no pavimento asfáltico da cidade.",
      "Sim, desde que a sirene acústica e as luzes rotativas de emergência permaneçam ligadas durante o percurso.",
      "Sim, porque a velocidade da viatura nunca ultrapassa os limites de velocidade previstos no Código da Estrada."
    ],
    "correctIndex": 0,
    "explanation": "Sistemas acelerados são referenciais não inerciais: neles os ocupantes sentem forças de inércia aparentes sem agente físico direto.",
    "distractorAnalysis": [
      "Está incorreta: O número de rodas e o contacto com o piso não definem a inercialidade do referencial cinemático.",
      "Está incorreta: Sinais sonoros e luminosos alertam o tráfego, sem qualquer influência na classificação inercial do referencial.",
      "Está incorreta: O cumprimento do Código da Estrada não transforma uma desaceleração num referencial inercial."
    ],
    "nursingApplication": "Explica porque a bordo de uma ambulância acelerada o enfermeiro sente forças 'invisíveis' a empurrá-lo: é a inércia do referencial acelerado!"
  },
  {
    "id": 1061,
    "topicId": 1,
    "question": "Quando uma ambulância descreve uma curva circular com velocidade escalar constante, porque é que o movimento NÃO é um MRU?",
    "options": [
      "Porque a ambulância perde toda a sua energia potencial gravitacional durante o arco de circunferência efetuado.",
      "Porque o velocímetro do veículo reduz automaticamente a zero a medição da velocidade linear instantânea.",
      "Porque a direção do vetor velocidade está continuamente a mudar no espaço, existindo uma aceleração centrípeta não nula.",
      "Porque o Sistema Internacional proíbe trajetórias curvilíneas em viaturas afetas ao transporte de doentes."
    ],
    "correctIndex": 2,
    "explanation": "No MRU o vetor velocidade é constante em magnitude E direção. Numa curva, a direção varia, existindo aceleração centrípeta (a = v²/R).",
    "distractorAnalysis": [
      "Está incorreta: A energia potencial gravitacional em piso horizontal permanece constante; não se anula na curva.",
      "Está incorreta: O velocímetro mede o módulo da velocidade (que pode manter-se em 40 km/h), mas a direção varia.",
      "Está incorreta: Trajetórias curvas são perfeitamente naturais e reguladas pelas leis da dinâmica circular na física."
    ],
    "nursingApplication": "Aceleração centrípeta significa que atua uma força resultante não nula sobre a viatura, gerando forças inerciais laterais nos ocupantes."
  },
  {
    "id": 1062,
    "topicId": 1,
    "question": "Se um doente estiver deitado numa maca sem cintos durante uma curva rápida para a esquerda, para onde desliza o seu corpo?",
    "options": [
      "Desliza para a direita em relação à maca, porque por inércia o seu corpo tende a prosseguir em linha reta para a frente.",
      "Desliza para a esquerda em direção ao centro da curva, atraído pela inclinação lateral da superfície do colchão.",
      "Desliza para a cabeceira da maca, impelido pela componente tangencial de aceleração imprimida pelo condutor.",
      "Permanece estático sem qualquer tendência de deslizamento, pois o atrito do lençol anula todas as forças inerciais."
    ],
    "correctIndex": 0,
    "explanation": "A ambulância vira para a esquerda; o corpo, pela 1.ª Lei, quer seguir em frente, chocando contra a grade lateral direita da maca.",
    "distractorAnalysis": [
      "Está incorreta: numa curva à esquerda, a tendência inercial retilínea projeta o corpo para o lado exterior direito da curva.",
      "Está incorreta: a inércia em curva não projeta o corpo longitudinalmente para a cabeceira, mas lateralmente em relação ao eixo da maca.",
      "Está incorreta: o atrito entre lençóis é baixo e insuficiente para segurar o doente contra forças centrífugas moderadas em curva."
    ],
    "nursingApplication": "Ajustar as correias de retenção transversal da maca antes de percursos com rotundas e curvas sinuosas é mandatório."
  },
  {
    "id": 1063,
    "topicId": 1,
    "question": "Qual é a relação física entre a velocidade da ambulância na curva e a força lateral que o doente e o enfermeiro sentem?",
    "options": [
      "A força lateral é inversamente proporcional à velocidade, diminuindo para zero quando a velocidade atinge 80 km/h.",
      "A força centrípeta necessária cresce com o quadrado da velocidade (Fc = m·v² / R): duplicar a velocidade quadruplica a força lateral.",
      "A força lateral permanece rigorosamente constante e independente da rapidez com que a rotunda é contornada.",
      "A força lateral depende exclusivamente da cor exterior da pintura da carroçaria da ambulância de socorro."
    ],
    "correctIndex": 1,
    "explanation": "Fc = m·v²/R: se a velocidade v dobra (de 30 para 60 km/h), a força inercial lateral quadruplica (fator 2² = 4).",
    "distractorAnalysis": [
      "Está incorreta: A força cresce exponencialmente com a velocidade, e não diminui; velocidades mais altas causam forças muito mais violentas.",
      "Está incorreta: A dependência quadrática na velocidade é uma lei fundamental da mecânica circular newtoniana.",
      "Está incorreta: A cor da pintura da viatura não tem qualquer influência na dinâmica de corpos materiais em movimento."
    ],
    "nursingApplication": "Conduzir a velocidade moderada em curvas reduz drasticamente as forças laterais sobre o doente transportado."
  },
  {
    "id": 1064,
    "topicId": 1,
    "question": "O que acontece a uma ambulância se tentar curvar a alta velocidade num piso com gelo onde o atrito lateral seja nulo (μ = 0)?",
    "options": [
      "A viatura roda sobre si mesma a 360 graus parando instantaneamente no centro geométrico da rotunda.",
      "A viatura decola verticalmente como um helicóptero de emergência médica através de propulsão inercial pura.",
      "A viatura não consegue curvar e prossegue em linha reta por inércia (despiste em linha reta tangente à curva).",
      "A viatura aumenta a sua aceleração gravitacional para 98 m/s², afundando-se dez centímetros no asfalto."
    ],
    "correctIndex": 2,
    "explanation": "Sem atrito lateral, a força centrípeta é zero (Fc = 0); pela 1.ª Lei de Newton, a viatura mantém a trajetória retilínea tangente à curva.",
    "distractorAnalysis": [
      "Está incorreta: Sem atrito para travar ou guiar, o veículo não para no centro; sai pela tangente da curva em movimento inercial.",
      "Está incorreta: A viatura não decola; permanece no solo sujeita ao peso e à normal, mas sem capacidade de mudar de direção.",
      "Está incorreta: A gravidade permanece 9,8 m/s²; a ausência de atrito apenas anula a capacidade de direcionar a trajetória."
    ],
    "nursingApplication": "Em condições meteorológicas adversas com piso escorregadio, a velocidade de transporte deve ser drasticamente reduzida."
  },
  {
    "id": 1065,
    "topicId": 1,
    "question": "No transporte de um utente crítico em ambulância, como se articulam a 1.ª Lei de Newton e a prevenção de eventos adversos?",
    "options": [
      "Assumindo que a velocidade constante da ambulância anula o efeito da gravidade sobre o peso dos equipamentos médicos instalados.",
      "Considerando que em linha reta os equipamentos pesados adquirem estabilidade espontânea sem necessitarem de fixação mecânica.",
      "Partindo do princípio de que travagens bruscas afetam apenas o veículo e não transmitem forças de inércia aos corpos no interior.",
      "Antecipando que todas as desacelerações e curvas geram forças inerciais que exigem contenção física do doente e equipamentos."
    ],
    "correctIndex": 3,
    "explanation": "Compreender a inércia alerta a equipa para afivelar cintos, elevar grades e ancorar malas e monitores antes do arranque.",
    "distractorAnalysis": [
      "Está incorreta: a velocidade constante não anula a gravidade; apenas implica que a força resultante horizontal é zero.",
      "Está incorreta: qualquer travagem ou desvio imprevisto gerará aceleração inercial perigosa; equipamentos devem estar sempre fixos.",
      "Está incorreta: pela 1.ª Lei de Newton, todos os ocupantes e objetos no interior conservam o seu estado de movimento, sofrendo projeção se não retidos."
    ],
    "nursingApplication": "A segurança no transporte pré e intra-hospitalar baseia-se diretamente na aplicação consciente da 1.ª Lei de Newton."
  },
  {
    "id": 1066,
    "topicId": 1,
    "question": "No desafio clínico da travagem da ambulância, uma ambulância desloca-se a 80 km/h. Qual é o valor desta velocidade convertido para a unidade do SI (m/s)?",
    "options": [
      "Aproximadamente 8,0 m/s (obtido dividindo 80 km/h por dez de acordo com o sistema métrico).",
      "Aproximadamente 288 m/s (obtido multiplicando 80 km/h por 3,6 de forma cumulativa).",
      "Exatamente 80 m/s (pois no Sistema Internacional a unidade básica de velocidade é o km/h).",
      "Aproximadamente 22,2 m/s (obtido dividindo 80 km/h por 3,6), garantindo o equilíbrio estático."
    ],
    "correctIndex": 3,
    "explanation": "Para converter km/h em m/s divide-se por 3,6: v = 80 / 3,6 ≈ 22,22 m/s (pois 1 km = 1000 m e 1 h = 3600 s; 1000/3600 = 1/3,6).",
    "distractorAnalysis": [
      "Está incorreta: Dividir por 10 não tem base na relação temporal de 3600 segundos existentes numa hora.",
      "Está incorreta: Multiplicar por 3,6 converteria m/s para km/h, o que daria uma velocidade irreal superior à do som.",
      "Está incorreta: A unidade de velocidade no Sistema Internacional é o metro por segundo (m/s), não o km/h."
    ],
    "nursingApplication": "Permite ao enfermeiro aplicar as equações fundamentais da física que exigem grandezas coerentes no SI."
  },
  {
    "id": 1067,
    "topicId": 1,
    "question": "Se a ambulância a 80 km/h (22,2 m/s) colidir frontalmente contra um obstáculo rígido e imobilizar-se num intervalo de tempo de apenas 0,1 segundos (Δt = 0,1 s), qual é a aceleração média de paragem?",
    "options": [
      "222 m/s² (calculada por a = |Δv| / Δt = 22,2 m/s / 0,1 s = 222 m/s²), garantindo o equilíbrio estático.",
      "22,2 m/s² (calculada dividindo a velocidade inicial pelo tempo de reação visual do condutor).",
      "800 m/s² (calculada multiplicando a velocidade em km/h pelo inverso do tempo de desaceleração).",
      "9,8 m/s² (porque a desaceleração de veículos nunca pode ultrapassar o valor da gravidade terrestre)."
    ],
    "correctIndex": 0,
    "explanation": "a = |vf - vi| / Δt = (0 - 22,2) / 0,1 = -222 m/s². Em módulo, a desaceleração média é de 222 m/s².",
    "distractorAnalysis": [
      "Está incorreta: 22,2 m/s² resultaria de uma paragem ao longo de 1 segundo inteiro, não de uma colisão brusca em 0,1 s.",
      "Está incorreta: 800 m/s² utiliza incorretamente km/h em vez de m/s no cálculo da aceleração com segundos.",
      "Está incorreta: Em colisões mecânicas as desacelerações ultrapassam frequentemente a aceleração gravítica em dezenas de vezes."
    ],
    "nursingApplication": "Evidencia a violência extrema das variações cinemáticas sofridas pelos ocupantes em acidentes de viação."
  },
  {
    "id": 1068,
    "topicId": 1,
    "question": "Qual é a distância de travagem aproximada percorrida pela ambulância durante a colisão de 0,1 segundos se a desaceleração for considerada uniforme?",
    "options": [
      "Cerca de 22,2 metros (multiplicando diretamente a velocidade inicial pelo intervalo temporal).",
      "Cerca de 1,11 metros (calculada pela velocidade média: d = vméd · Δt = (22,2 / 2) · 0,1 = 1,11 m).",
      "Cerca de 0,11 metros (dividindo a velocidade pela massa total da carroçaria da ambulância).",
      "Exatamente zero metros (pois numa colisão frontal a viatura para no instante exato do contacto inicial)."
    ],
    "correctIndex": 1,
    "explanation": "Distância na desaceleração uniforme: d = (vi + vf)/2 · Δt = (22,2 + 0)/2 · 0,1 = 11,1 · 0,1 = 1,11 metros (deformação da dianteira).",
    "distractorAnalysis": [
      "Está incorreta: 22,2 metros seria a distância percorrida se a ambulância continuasse a 80 km/h durante 1 segundo sem travar.",
      "Está incorreta: 0,11 metros (11 cm) corresponderia a uma paragem quase instantânea que geraria desacelerações ainda mais fatais.",
      "Está incorreta: A carroçaria da viatura deforma-se e amassa ao longo de cerca de 1 metro antes da paragem total."
    ],
    "nursingApplication": "Demonstra a importância da zona de deformação programada das viaturas de emergência médica para absorver energia."
  },
  {
    "id": 1069,
    "topicId": 1,
    "question": "Se a ambulância circulasse a 40 km/h (11,1 m/s) em vez de 80 km/h e parasse nos mesmos 0,1 segundos, o que aconteceria à aceleração de impacto?",
    "options": [
      "A aceleração permaneceria exatamente a mesma porque o tempo de paragem de 0,1 s comanda a física do choque.",
      "A aceleração reduzir-se-ia para um quarto de acordo com a fórmula da energia cinética de Helmholtz.",
      "A aceleração seria reduzida para metade (111 m/s² em vez de 222 m/s²), diminuindo a força de impacto na mesma proporção.",
      "A aceleração aumentaria para o dobro porque os veículos lentos têm menor coeficiente de elasticidade."
    ],
    "correctIndex": 2,
    "explanation": "a = Δv/Δt: com metade da variação de velocidade no mesmo tempo Δt, a aceleração é rigorosamente reduzida a metade.",
    "distractorAnalysis": [
      "Está incorreta: A aceleração depende diretamente da velocidade inicial (a = v0/Δt); não depende apenas de Δt.",
      "Está incorreta: A aceleração varia linearmente com a velocidade; é a energia cinética dissipada que varia com o quadrado da velocidade.",
      "Está incorreta: Veículos a menor velocidade sofrem menor desaceleração em colisões de mesma duração temporal."
    ],
    "nursingApplication": "Reforça a condução moderada e prudente de ambulâncias mesmo em marcha de emergência para proteção da equipa."
  },
  {
    "id": 1070,
    "topicId": 1,
    "question": "Se a desaceleração de paragem na colisão frontal da ambulância a 80 km/h for de 222 m/s², como se expressa este valor em múltiplos da aceleração da gravidade terrestre (g = 9,8 m/s²)?",
    "options": [
      "Aproximadamente 22,7 g (calculado pela razão: 222 m/s² / 9,8 m/s² ≈ 22,7).",
      "Aproximadamente 2170 g, calculando erroneamente 222 × 9,8 em vez de dividir pelo valor de g.",
      "Exatamente 222 g, assumindo que 1 m/s² corresponde diretamente a 1 g sem conversão.",
      "Aproximadamente 45,4 g, duplicando o resultado por supor que existem dois eixos de aceleração simultâneos."
    ],
    "correctIndex": 0,
    "explanation": "Número de g = a / g = 222 / 9,8 ≈ 22,65 g. Os ocupantes e equipamentos sofrem uma aceleração equivalente a quase 23 vezes a gravidade.",
    "distractorAnalysis": [
      "Está incorreta: a conversão é a/g = 222/9,8 ≈ 22,7 g; multiplicar 222 × 9,8 em vez de dividir inverte a operação e produz um valor sem sentido físico.",
      "Está incorreta: 1 g equivale a 9,8 m/s², não a 1 m/s²; assumir que 222 m/s² = 222 g ignora a conversão pelo valor da aceleração gravitacional.",
      "Está incorreta: a aceleração resultante num impacto tem uma única direção principal; não se duplica o valor por supor dois eixos simultâneos sem fundamento no enunciado."
    ],
    "nursingApplication": "Permite comparar a severidade do choque com os limites de tolerância fisiológica do corpo humano."
  },
  {
    "id": 1071,
    "topicId": 1,
    "question": "Na dinâmica do transporte em emergência, considerando um enfermeiro de massa 70 kg que se encontra de pé desprotegido na célula da ambulância a 80 km/h e para em 0,1 s, qual é a força média com que colide contra a divisória?",
    "options": [
      "Aproximadamente 15.540 N (calculada por F = m · a = 70 kg · 222 m/s² = 15.540 N).",
      "Aproximadamente 686 N, pois em colisão a força é sempre igual ao peso do ocupante (F = m · g = 70 × 9,8).",
      "Aproximadamente 1554 N, calculada por F = m · a / 10 = 70 · 222 / 10, dividindo erroneamente por 10.",
      "Aproximadamente 7770 N, calculada por F = (m · a) / 2, assumindo que metade da força é absorvida pelo cinto."
    ],
    "correctIndex": 1,
    "explanation": "F = m·a = 70 kg · 222 m/s² = 15.540 N. Esta força devastadora equivale a sustentar uma massa superior a 1500 kg (1,5 toneladas!).",
    "distractorAnalysis": [
      "Está incorreta: em colisão, a força não é igual ao peso estático; o peso (686 N) só seria correto para a aceleração g = 9,8 m/s², não para a aceleração de impacto de 222 m/s².",
      "Está incorreta: não há justificação física para dividir F = m·a por 10; a 2.ª Lei de Newton não inclui esse fator e o resultado de 1554 N não corresponde à desaceleração real.",
      "Está incorreta: dividir por 2 introduz um erro sem fundamento; o cinto distribui a força mas não divide a magnitude total por 2; a força de retenção total permanece F = m·a."
    ],
    "nursingApplication": "Choca os estudantes com a realidade física: o impacto desprotegido contra a divisória é frequentemente fatal."
  },
  {
    "id": 1072,
    "topicId": 1,
    "question": "Se o enfermeiro tentar segurar-se com os braços ao varão do teto da ambulância durante a colisão de 15.540 N, porque é que essa tentativa falha inevitavelmente?",
    "options": [
      "Porque a força muscular máxima dos membros superiores (300-400 N) é insuficiente para deter um veículo de 900 kg à velocidade indicada.",
      "Porque as mãos perdem aderência ao volante acima de 250 N de força de compressão, tornando impossível qualquer controlo direcional.",
      "Porque os músculos dos membros superiores só atuam em contração concêntrica e não conseguem gerar força em fase excêntrica durante uma colisão.",
      "Porque a rigidez óssea do rádio e cúbito limita a transmissão de força a exatamente 100 N antes de fraturar."
    ],
    "correctIndex": 0,
    "explanation": "Nenhum ser humano consegue exercer 15.500 N com as mãos; a força necessária excede largamente os limites anatómicos dos tendões e músculos.",
    "distractorAnalysis": [
      "Está incorreta: embora a aderência ao volante seja importante, o limite de 250 N não é um valor estabelecido para a perda de controlo; o problema biomecânico fundamental é a força de impacto ser muito superior à capacidade muscular.",
      "Está incorreta: os músculos conseguem contrair-se excentricamente (junto com o movimento externo oposto); a limitação não é a ausência de contração excêntrica.",
      "Está incorreta: os ossos do antebraço suportam forças muito superiores a 100 N em condições normais; o limiar de fratura óssea depende de múltiplos fatores e não é uma constante de 100 N."
    ],
    "nursingApplication": "Destrói o mito perigoso de que é seguro viajar de pé segurando-se aos varões dentro da célula sanitária."
  },
  {
    "id": 1073,
    "topicId": 1,
    "question": "Qual é a principal recomendação prática de segurança decorrente desta demonstração biofísica da 2.ª Lei de Newton na ambulância?",
    "options": [
      "O enfermeiro deve viajar sempre devidamente sentado e com o cinto de segurança colocado, nunca junto a equipamentos soltos ou doentes não imobilizados.",
      "O enfermeiro deve viajar em pé junto ao doente para poder monitorizar os sinais vitais durante todo o trajeto.",
      "O enfermeiro deve ajoelhar-se junto à maca para manter o centro de gravidade baixo e reduzir o risco de queda lateral.",
      "O enfermeiro deve apoiar-se nas paredes laterais da ambulância com os braços esticados para absorver as forças de inércia."
    ],
    "correctIndex": 1,
    "explanation": "O cinto de segurança é o único meio capaz de transmitir as forças de desaceleração à estrutura da viatura em segurança.",
    "distractorAnalysis": [
      "Está incorreta: viajar em pé expõe o enfermeiro a forças de inércia não controladas durante travagens e curvas, sem retenção que o proteja de projeção.",
      "Está incorreta: ajoelhar-se junto à maca não providencia retenção adequada; durante travagem brusca, o profissional pode ser projetado para a frente sem cinto.",
      "Está incorreta: os membros superiores não conseguem gerar força suficiente para resistir às forças de inércia numa travagem de emergência; apenas o cinto de segurança oferece retenção adequada."
    ],
    "nursingApplication": "Salva vidas na prática diária da emergência pré-hospitalar ao fundamentar cientificamente o uso do cinto de segurança."
  },
  {
    "id": 1074,
    "topicId": 1,
    "question": "Porque é que as ambulâncias e viaturas de emergência modernas possuem airbags frontais e laterais além dos cintos de segurança?",
    "options": [
      "Para prolongar ainda mais o tempo de desaceleração da cabeça e tórax e distribuir o impulso por uma área maior do crânio.",
      "Para aumentar a rigidez da cabeça e do pescoço, impedindo qualquer movimento relativo durante o impacto frontal.",
      "Para eliminar completamente a força de impacto, absorvendo toda a energia cinética do ocupante antes da colisão.",
      "Para direcionar a força de impacto exclusivamente para a região occipital, protegendo o córtex frontal do cérebro."
    ],
    "correctIndex": 1,
    "explanation": "O airbag deforma-se sob o impacto, aumentando Δt e aumentando a área A de contacto, reduzindo tanto a força F como a pressão mecânica p = F/A.",
    "distractorAnalysis": [
      "Está incorreta: aumentar a rigidez cervical e craniana durante o impacto seria prejudicial; a proteção provém da absorção de energia e prolongamento do tempo de desaceleração, não da rigidez.",
      "Está incorreta: o airbag não elimina a força de impacto; reduz a força média ao aumentar Δt e a área de distribuição, mas a variação do momento linear permanece.",
      "Está incorreta: o airbag distribui o impulso por toda a face e tórax, não apenas para a região occipital; concentrar o impacto no occipital seria lesivo."
    ],
    "nursingApplication": "Fundamenta a importância da segurança passiva veicular no transporte de doentes críticos e equipas de saúde."
  },
  {
    "id": 1075,
    "topicId": 1,
    "question": "Numa maca de transporte em ambulância, os cintos de fixação transversal e de ombros do doente servem para:",
    "options": [
      "Aumentar a pressão de contacto localizada sobre o abdómen do doente para estimular o tónus dos músculos respiratórios na viagem.",
      "Limitar a circulação venosa dos membros inferiores através de compressão constante, prevenindo hipotensão ortostática na ambulância.",
      "Imobilizar o doente na postura estática de hiperextensão do tronco para reduzir a frequência cardíaca durante o transporte urgente.",
      "Garantir que a força de retenção atua de forma solidária e distribuída sobre o corpo do doente, impedindo a sua projeção inercial na desaceleração."
    ],
    "correctIndex": 3,
    "explanation": "Os cintos prendem a massa do doente à massa da maca, fazendo com que ambos desacelerem em conjunto através do sistema de retenção certificado.",
    "distractorAnalysis": [
      "Está incorreta: os cintos da maca não devem exercer pressão excessiva no abdómen para não restringir a ventilação diafragmática do utente.",
      "Está incorreta: os cintos têm função biomecânica de retenção inercial e não devem ocluir ou comprimir a circulação sanguínea periférica.",
      "Está incorreta: a imobilização deve respeitar o alinhamento neutro anatómico e não forçar hiperextensão torácica com intuito cronotrópico."
    ],
    "nursingApplication": "Reafirma a obrigatoriedade legal e ética do enfermeiro afivelar todos os cintos da maca em todas as transferências."
  },
  {
    "id": 1076,
    "topicId": 1,
    "question": "Um monitor-desfibrilhador com massa de 5 kg solto sobre a bancada de uma ambulância a 80 km/h (22,2 m/s) que colide e para em 0,05 s embate na cabeça do enfermeiro com que força média aproximada?",
    "options": [
      "2220 N (calculada por F = m · a = 5 kg · (22,2 / 0,05) = 5 · 444 = 2220 N).",
      "444 N, calculada por F = m · a = 5 · 88,8 = 444 N, usando aceleração de 88,8 m/s² em vez de 444 m/s².",
      "110 N, calculada por F = Δv / Δt = 22,2 / 0,05 / 4 = 111 N, dividindo erroneamente pelo número de segundos.",
      "11.100 N, calculada por F = m · v / Δt² = 5 · 22,2 / 0,05² = 44.400 / 4 = 11.100 N, ao quadrado no denominador."
    ],
    "correctIndex": 1,
    "explanation": "a = Δv/Δt = 22,2 / 0,05 = 444 m/s²; F = m · a = 5 · 444 = 2220 N. Uma força de 2,2 kN concentrada na cabeça causa fratura craniana fatal.",
    "distractorAnalysis": [
      "Está incorreta: a aceleração é a = Δv/Δt = 22,2/0,05 = 444 m/s²; usar 88,8 m/s² (metade do correto) resulta de dividir incorretamente por 0,25 em vez de 0,05.",
      "Está incorreta: F = m·a não inclui divisão pelo número de segundos; o tempo de paragem já está incorporado no cálculo da aceleração (a = Δv/Δt).",
      "Está incorreta: a fórmula correta é F = m·Δv/Δt (Δt simples, não ao quadrado); elevar Δt ao quadrado não tem suporte dimensional nem físico para o cálculo da força média."
    ],
    "nursingApplication": "Choca os estudantes com o perigo extremo de deixar um monitor-desfibrilhador solto perto do utente ou enfermeiro."
  },
  {
    "id": 1077,
    "topicId": 1,
    "question": "A norma europeia EN 1789 exige que todos os suportes de fixação de equipamentos médicos numa ambulância resistam a acelerações de pelo menos:",
    "options": [
      "10 g em todas as direções (anteroposterior, lateral e vertical), garantindo que o equipamento suporte colisões em qualquer sentido.",
      "10 g exclusivamente no sentido vertical descendente, pois apenas a gravidade amplificada afeta os equipamentos médicos.",
      "10 g no sentido de aceleração positiva, pois os equipamentos apenas se soltam em acelerações frontais, nunca em travagens.",
      "5 g em cada eixo de forma independente, pois os testes de certificação avaliam cada direção separadamente e não a combinação vetorial."
    ],
    "correctIndex": 3,
    "explanation": "A norma EN 1789 estipula testes de impacto a 10 g; cada suporte deve aguentar dez vezes o peso do equipamento sem ceder.",
    "distractorAnalysis": [
      "Está incorreta: o teste de 10 g não se restringe à vertical; colisões e travagens geram acelerações maioritariamente no plano horizontal anteroposterior, que é o eixo crítico de certificação.",
      "Está incorreta: as forças inerciais em colisão são principalmente horizontais (anteroposterior); a gravidade amplificada não é o mecanismo dominante em travagens bruscas.",
      "Está incorreta: as forças mais perigosas em ambulância são as de desaceleração (travagem) e não apenas as de aceleração positiva; o equipamento deve estar certificado para ambos os sentidos."
    ],
    "nursingApplication": "Fundamenta a auditoria e inspeção rigorosa das trincas e trincos dos suportes de mala e monitores na ambulância."
  },
  {
    "id": 1078,
    "topicId": 1,
    "question": "Se um cinto de segurança de ambulância esticar 5 centímetros durante uma retenção controlada em vez de ser completamente rígido (alongamento nulo), que benefício biomecânico resulta?",
    "options": [
      "O estiramento dissipa energia cinética e aumenta a distância e o tempo de desaceleração, reduzindo a força média transmitida ao corpo.",
      "O estiramento aumenta a temperatura do tecido muscular, convertendo a energia cinética em calor e anulando a força de impacto.",
      "O estiramento cria uma resistência elétrica no tecido que converte a energia cinética em corrente bioelétrica inócua.",
      "O estiramento aumenta o coeficiente de restituição do corpo, fazendo com que ressalte e reduza a variação do momento linear."
    ],
    "correctIndex": 1,
    "explanation": "Trabalho de deformação W = F · d. Aumentar a distância de paragem (d) reduz a força média (F = W/d) necessária para travar o ocupante.",
    "distractorAnalysis": [
      "Está incorreta: o aumento de temperatura muscular não anula a força de impacto; a conversão de energia cinética em calor é negligenciável em impactos mecânicos de curta duração.",
      "Está incorreta: não existe mecanismo fisiológico de conversão de energia cinética em corrente bioelétrica durante impactos; a resistência elétrica tecidual não é um mecanismo de amortecimento.",
      "Está incorreta: um coeficiente de restituição elevado significaria maior ressalto, o que pode aumentar o Δv e não reduzir necessariamente a força; além disso, o tecido biológico não é elástico ideal."
    ],
    "nursingApplication": "Explica a tecnologia dos cintos com fibras de alongamento programado nas viaturas de socorro."
  },
  {
    "id": 1079,
    "topicId": 1,
    "question": "Em situações de emergência pré-hospitalar, a melhor forma de aplicar os princípios da 2.ª Lei durante a condução da ambulância é:",
    "options": [
      "Praticar uma condução defensiva suave, evitando travagens bruscas e curvas a alta velocidade para limitar as forças inerciais sobre doentes e equipamentos.",
      "Conduzir à velocidade máxima permitida em todas as circunstâncias, pois chegar mais depressa reduz o tempo de exposição às forças inerciais.",
      "Desligar o sistema de suspensão para que o veículo não oscile, eliminando as acelerações verticais durante o transporte.",
      "Colocar todos os equipamentos soltos no chão da ambulância, pois próximos do solo ficam protegidos das forças inerciais."
    ],
    "correctIndex": 0,
    "explanation": "Acelerações suaves (menor 'a') reduzem a força F = m·a gerada sobre passageiros, órgãos internos e equipamentos na célula sanitária.",
    "distractorAnalysis": [
      "Está incorreta: velocidade máxima constante aumenta as forças inerciais em curvas e travagens; a condução defensiva implica adaptar a velocidade às condições, não maximizá-la.",
      "Está incorreta: desligar a suspensão aumentaria as acelerações verticais transmitidas ao habitáculo; a suspensão ativa atenua as irregularidades do pavimento.",
      "Está incorreta: colocar equipamentos no chão não os protege de forças inerciais horizontais; os equipamentos devem ser fixados a suportes certificados para resistir às forças de colisão."
    ],
    "nursingApplication": "Garante a chegada segura da equipa e do utente ao hospital com o menor trauma físico possível."
  },
  {
    "id": 1080,
    "topicId": 1,
    "question": "Para manter o equilíbrio, sabendo que a inserção tendinosa do bíceps no rádio dista 8 cm (0,08 m) do cotovelo e o momento total a equilibrar é 6,62 N·m, que força muscular (FE) deve o bíceps exercer?",
    "options": [
      "FE = 6,62 × 0,08 = 0,53 N, multiplicando o momento pela distância do tendão.",
      "FE = 6,62 N·m / 0,08 m = 82,75 N, garantindo o equilíbrio estático.",
      "FE = 8,0 N, igual ao valor em centímetros da inserção anatómica.",
      "FE = 827,5 N, cometendo um erro de vírgula na divisão por oito centímetros."
    ],
    "correctIndex": 1,
    "explanation": "Momento potente: ME = FE · bE ⇒ 6,62 = FE × 0,08 ⇒ FE = 6,62 / 0,08 = 82,75 N.",
    "distractorAnalysis": [
      "Está incorreta: Para isolar a força, divide-se o momento pelo braço potente (FE = M / bE).",
      "Está incorreta: 8,0 cm é a distância anatómica e não o valor da força expressa em Newtons.",
      "Está incorreta: A divisão de 6,62 por 0,08 resulta exatamente em 82,75 N."
    ],
    "nursingApplication": "Conclui com exatidão matemática o exercício central da biomecânica muscular do cotovelo."
  },
  {
    "id": 1081,
    "topicId": 1,
    "question": "Comparando a força exercida pelo bíceps (82,75 N) com o peso total suportado pelo membro (massa total = 3,5 kg ⇒ Peso = 34,3 N), que conclusão biomecânica fundamental se retira?",
    "options": [
      "O bíceps trabalha com grande vantagem de força (VM > 2), exercendo uma força muscular substancialmente menor do que o peso do antebraço.",
      "A força muscular desenvolvida é rigorosamente igual a metade do peso anatómico do membro, poupando energia metabólica no repouso.",
      "O bíceps exerce uma força muito superior ao peso suportado (82,75 N > 34,3 N), confirmando a desvantagem mecânica (VM < 1) intrínseca às alavancas de 3.ª classe.",
      "A força exercida pelo músculo bíceps é nula porque a flexão isométrica a 90 graus é sustentada passivamente pelos ligamentos articulares."
    ],
    "correctIndex": 2,
    "explanation": "Devido ao braço potente ser muito curto (8 cm) face aos braços resistentes (15 e 30 cm), o músculo 'paga o preço' em força para ganhar amplitude e velocidade de movimento.",
    "distractorAnalysis": [
      "Está incorreta: alavancas de 3.ª classe impõem desvantagem de força (VM < 1); o músculo tem de exercer mais força do que a carga para vencer o momento de rotação.",
      "Está incorreta: a força muscular necessária é cerca de 2,4 vezes superior ao peso total devido ao braço de potência curto do bíceps.",
      "Está incorreta: a manutenção da postura contra a gravidade requer contração ativa contínua das pontes cruzadas de actina-miosina com consumo de ATP."
    ],
    "nursingApplication": "Síntese conceptual sobre o custo biológico das alavancas interpotentes no corpo humano."
  },
  {
    "id": 1082,
    "topicId": 1,
    "question": "Numa barra em alavanca interfixa, sabendo que a força resistente é de 20 N e atua no braço menor de 1,2 m, qual é o momento da força resistente?",
    "options": [
      "MR = 20 / 1,2 = 16,67 N·m, dividindo a força pelo braço de alavanca.",
      "MR = FR · bR = 20 N × 1,2 m = 24 N·m, garantindo o equilíbrio estático.",
      "MR = 20 + 1,2 = 21,2 N·m, somando a força com o comprimento métrico.",
      "MR = 240 N·m, acrescentando uma ordem de grandeza decimal à operação."
    ],
    "correctIndex": 1,
    "explanation": "Cálculo: Momento da força resistente: MR = FR · bR = 20 × 1,2 = 24 N·m.",
    "distractorAnalysis": [
      "Está incorreta: O momento é o produto (multiplicação) e não a divisão da força pela distância.",
      "Está incorreta: Força e distância têm grandezas e unidades distintas (N e m), não podendo ser somadas.",
      "Está incorreta: 20 × 1,2 é rigorosamente igual a 24,0 N·m."
    ],
    "nursingApplication": "Cálculo fidedigno do momento resistente da alavanca em estudo."
  },
  {
    "id": 1083,
    "topicId": 1,
    "question": "Num sistema de elevação por alavanca, quer-se erguer uma carga de massa 500 kg com braço resistente de 0,3 m (g = 9,8 m/s²). Qual é o momento resistente a vencer?",
    "options": [
      "MR = 500 × 0,3 = 150 N·m, sem multiplicar pela aceleração da gravidade.",
      "MR = FR · bR = (500 kg × 9,8 m/s²) × 0,3 m = 4900 N × 0,3 m = 1470 N·m.",
      "MR = 500 / 0,3 = 1666,7 N·m, dividindo a massa pelo comprimento do braço.",
      "MR = 14,7 N·m, cometendo um erro de duas ordens de grandeza decimal."
    ],
    "correctIndex": 1,
    "explanation": "Cálculo resistente: MR = FR · bR = (500 × 9,8) × 0,3 = 1470 N·m.",
    "distractorAnalysis": [
      "Está incorreta: A massa de 500 kg tem de ser convertida no peso em Newtons multiplicando por 9,8 m/s² (4900 N).",
      "Está incorreta: O cálculo do momento faz-se pelo produto e não pela divisão da força pelo braço.",
      "Está incorreta: 4900 × 0,3 = 1470 N·m com precisão exata."
    ],
    "nursingApplication": "Validação fiel do momento resistente calculado para a alavanca."
  },
  {
    "id": 1084,
    "topicId": 1,
    "question": "Na alavanca de elevação, sabendo que o operador apenas consegue exercer uma força equivalente a 30 kg (FP = 30 × 9,8 = 294 N), qual é o comprimento mínimo do braço potente (bP) para equilibrar os 1470 N·m?",
    "options": [
      "bP = 1470 × 294 = 432.180 m, multiplicando erradamente o momento pela força potente.",
      "bP = 1,5 m, estimando visualmente um comprimento confortável de alavanca.",
      "bP = MR / FP = 1470 N·m / (30 kg × 9,8 m/s²) = 1470 / 294 = 5,0 m.",
      "bP = 50 m, dividindo por 29,4 em vez de 294 N."
    ],
    "correctIndex": 2,
    "explanation": "Equilíbrio de momentos: MP = FP · bP ⇒ 1470 = (30 × 9,8) × bP ⇒ bP = 1470 / 294 = 5 m.",
    "distractorAnalysis": [
      "Está incorreta: Para obter a distância divide-se o momento pela força potente (bP = M / FP).",
      "Está incorreta: Com 1,5 m a força necessária seria de 980 N (100 kgf), o que ultrapassaria a capacidade do operador.",
      "Está incorreta: A divisão correta de 1470 por 294 resulta em 5,0 m exatos."
    ],
    "nursingApplication": "Fidelidade ao cálculo completo e resolução da alavanca mecânica."
  },
  {
    "id": 1085,
    "topicId": 1,
    "question": "Qual é a razão biomecânica pela qual o calçado com salto alto e estreito é formalmente contraindicado no exercício da enfermagem?",
    "options": [
      "O salto estreito anula o coeficiente de atrito solo-calçado, tornando o chão encerado imune a qualquer força de atrito.",
      "O salto estreito reduz a massa óssea dos metatarsos em 80% através de desmineralização elástica instantânea.",
      "O salto estreito impede a propagação de ondas eletromagnéticas vitais entre o solo e o córtex cerebral do profissional.",
      "A área reduzida do salto concentra o peso corporal numa pressão mecânica extrema no calcanhar e desloca a linha de gravidade para a frente."
    ],
    "correctIndex": 3,
    "explanation": "Saltos estreitos reduzem drasticamente a área A (disparando a pressão p = F/A no calcanhar) e projetam o centro de gravidade, instabilizando a postura.",
    "distractorAnalysis": [
      "Está incorreta: O atrito não se anula, mas a pequena área reduz a aderência estável e multiplica o risco de escorregamento.",
      "Está incorreta: Não há desmineralização instantânea; ocorrem sobrecargas mecânicas crónicas e deformidades podológicas.",
      "Está incorreta: A estabilidade postural baseia-se em biomecânica e proprioceção, e não em ondas eletromagnéticas vindas do piso."
    ],
    "nursingApplication": "Solas rasas, largas e antiderrapantes são a recomendação internacional de ergonomia e segurança ocupacional em meio hospitalar."
  },
  {
    "id": 1086,
    "topicId": 1,
    "question": "Numa paragem brusca de cadeira de rodas a 1,5 m/s, o que acontece ao centro de gravidade do doente sentado sem cinto?",
    "options": [
      "O centro de gravidade recua dez centímetros para dentro do encosto estofado devido ao efeito de recuo articular da bacia.",
      "O centro de gravidade permanece fixo no espaço enquanto a cadeira de rodas roda sobre o eixo transversal das rodas grandes.",
      "O centro de gravidade desvia-se para o bordo lateral externo do assento devido ao desbalanceamento assimétrico dos travões manuais.",
      "O centro de gravidade avança por inércia para além dos pés (base de sustentação), provocando o tombo anterior do utente para fora da cadeira."
    ],
    "correctIndex": 3,
    "explanation": "Na travagem brusca, o tronco continua em movimento para a frente; a linha de gravidade sai da base de apoio dos pés e o doente cai.",
    "distractorAnalysis": [
      "Está incorreta: a desaceleração projeta o corpo para a frente no sentido do movimento inicial e não para trás contra o encosto da cadeira.",
      "Está incorreta: o centro de gravidade pertence à massa corporal do doente e desloca-se solidariamente com o seu tronco para a frente por inércia.",
      "Está incorreta: numa travagem frontal com travões sincronizados, a trajetória inercial do centro de gravidade é estritamente sagital anterior."
    ],
    "nursingApplication": "Travar suavemente e manter o utente com cinto pélvico previne a queda anterior para o solo da enfermaria."
  },
  {
    "id": 1087,
    "topicId": 1,
    "question": "Em doentes neurológicos com espasticidade ou movimentos involuntários, qual é o benefício adicional do cinto pélvico na cadeira?",
    "options": [
      "Neutralizar as descargas neuronais do córtex motor através de isolamento piezoelétrico passivo das cristas ilíacas.",
      "Eliminar a necessidade de alimentação entérica através da absorção direta de calor pelas fibras do cinto de nylon.",
      "Impedir que o sangue circule para os membros inferiores durante o período em que o doente permanecer sentado.",
      "Garantir a manutenção do centro de gravidade dentro da base de sustentação do assento, prevenindo projeções inerciais acidentais."
    ],
    "correctIndex": 3,
    "explanation": "Espasmos e movimentos bruscos geram forças inerciais que desviam a bacia; o cinto ancora o centro de gravidade no assento seguro.",
    "distractorAnalysis": [
      "Está incorreta: O cinto é um apoio mecânico passivo e não interfere com a atividade elétrica do córtex cerebral.",
      "Está incorreta: O cinto é um equipamento de suporte postural, sem qualquer relação com suporte nutricional ou calórico.",
      "Está incorreta: O cinto deve ser posicionado para estabilizar a pelve sem comprometer a circulação vascular periférica."
    ],
    "nursingApplication": "Proporciona segurança postural e conforto, permitindo ao doente neurológico interagir com o ambiente com menor fadiga."
  },
  {
    "id": 1088,
    "topicId": 1,
    "question": "Quando um doente em decúbito dorsal gira no leito plano passando para decúbito lateral (rolamento do tronco), sob o ponto de vista da altura do seu centro de gravidade ao longo do colchão:",
    "options": [
      "A altura do centro de gravidade duplica bruscamente durante a rotação, exigindo que o enfermeiro exerça uma força de tração superior ao peso total do tronco para vencer a barreira.",
      "A altura do CG em relação ao colchão varia muito pouco se a manobra for realizada no plano horizontal, aproximando-se da facilidade de rotação de um cilindro em equilíbrio neutro.",
      "O centro de gravidade desce abaixo da superfície inferior do colchão, criando um torque restaurador espontâneo que devolve o doente imediatamente ao decúbito dorsal de origem.",
      "A coordenada vertical do centro de gravidade anula-se completamente, fazendo com que o corpo perca toda a sua inércia rotacional durante a transição postural entre decúbitos."
    ],
    "correctIndex": 1,
    "explanation": "O tronco humano aproxima-se geometricamente de um cilindro; rolar sobre o leito plano requer muito menos esforço vertical do que levantar o doente no ar.",
    "distractorAnalysis": [
      "Está incorreta: o rolamento em leito plano mantém a altura do centro de gravidade quase constante, exigindo muito menor esforço do que a elevação vertical do tronco.",
      "Está incorreta: o centro de gravidade do corpo humano situa-se anatomicamente dentro da região pélvica/abdominal, não descendo para baixo do colchão hospitalar.",
      "Está incorreta: a inércia rotacional e a gravidade permanecem ativas; a manobra requer coordenação ergonómica para estabilizar a nova postura lateral."
    ],
    "nursingApplication": "Fundamenta as técnicas ergonómicas de rolamento lateral para higiene e posicionamento com mínimo esforço muscular da equipa."
  },
  {
    "id": 1089,
    "topicId": 1,
    "question": "Ao assistir um doente no levante para a borda da cama, como deve o enfermeiro posicionar o seu próprio corpo para garantir a estabilidade do conjunto?",
    "options": [
      "Pés afastados cerca de 30 a 40 cm (base ampla), joelhos e ancas ligeiramente fletidos, coluna ereta e posicionado lateralmente ao doente pronto para servir de anteparo de suporte.",
      "Pés rigorosamente unidos, pernas totalmente hiperestendidas e tronco inclinado para a frente com os braços esticados para maximizar a alavanca mecânica sobre o colchão.",
      "Posicionar-se atrás da cabeceira da cama inclinando o corpo para a frente sobre o leito, utilizando apenas a flexão da coluna lombar para içar o tronco do utente pelo pescoço.",
      "Apoiar um joelho no chão e rodar o tronco vigorosamente para o lado oposto antes de tocar no doente, confiando na força inercial rápida do impulso para completar o levante."
    ],
    "correctIndex": 0,
    "explanation": "Esta postura ergonómica rebaixa o centro de gravidade do profissional, alarga a sua base e coloca os membros inferiores prontos para gerar forças de apoio sem sobrecarga lombar.",
    "distractorAnalysis": [
      "Está incorreta: pés juntos e pernas estendidas reduzem a base de suporte e sobrecarregam perigosamente a coluna lombar com braço de alavanca excessivo.",
      "Está incorreta: puxar o doente pelo pescoço com flexão lombar gera risco extremo de lesão discal no profissional e trauma cervical no utente.",
      "Está incorreta: manobras baseadas em impulsos bruscos e torções da coluna violam os princípios ergonómicos e expõem ambos a desequilíbrios graves."
    ],
    "nursingApplication": "Combina os princípios do equilíbrio estável com a postura de segurança do cuidador na mobilização ativa assistida."
  },
  {
    "id": 1090,
    "topicId": 1,
    "question": "No Romberg sensibilizado (teste de Romberg em tandem, com um pé colocado exatamente à frente do outro em linha reta), a base de sustentação:",
    "options": [
      "Aumenta para o dobro no sentido anteroposterior e lateral, tornando a manutenção do equilíbrio muito mais fácil para o doente examinado.",
      "Torna-se extremamente estreita no plano frontal, desafiando ao máximo o controlo vestibular e proprioceptivo mesmo em indivíduos jovens e saudáveis.",
      "Desloca o centro de gravidade do corpo para a região dorsal das omoplatas, anulando a necessidade de controlo muscular nos tornozelos.",
      "Permite que o indivíduo mantenha a estabilidade estática perfeita sem utilizar o sistema somatossensorial ou a visão focal direta."
    ],
    "correctIndex": 1,
    "explanation": "A postura em tandem reduz a largura de apoio à largura de uma única sola, amplificando as oscilações laterais do centro de gravidade.",
    "distractorAnalysis": [
      "Está incorreta: o tandem (pé ante pé) reduz drasticamente a largura da base no plano coronal/frontal, diminuindo a estabilidade lateral.",
      "Está incorreta: a base estreita testa a integridade dos sistemas proprioceptivo, vestibular e cerebelar perante oscilações posturais acentuadas.",
      "Está incorreta: a posição em tandem exige constante correção motora pelos músculos estabilizadores do tornozelo e anca para manter a linha de gravidade na base."
    ],
    "nursingApplication": "Teste clínico avançado utilizado para detetar défices subtis de equilíbrio em fases precoces de patologias neurológicas."
  },
  {
    "id": 1091,
    "topicId": 1,
    "question": "Quais são os três sistemas sensoriais fisiológicos que trabalham em conjunto para informar o cérebro sobre a posição do Centro de Gravidade e manter o equilíbrio?",
    "options": [
      "O Sistema Olfativo nasal, o Sistema Termorregulador cutâneo e o Sistema Auditivo coclear de receção de sons agudos de baixa frequência emitidos pela compressão mecânica do solo.",
      "O Sistema Endócrino tiroideu, o Sistema Digestivo gástrico e os recetores de pressão arterial carotídeos responsáveis pelo controlo direto da velocidade da marcha humana.",
      "O Sistema Visual (olhos), o Sistema Vestibular (canais semicirculares e otólitos no ouvido interno) e o Sistema Proprioceptivo (fusos musculares, órgãos tendinosos de Golgi e mecanorrecetores plantares).",
      "O Sistema Sudoríparo axilar, o Sistema Linfático esplénico e as terminações nervosas livres da polpa dentária que detectam as vibrações das cordas vocais durante a deglutição."
    ],
    "correctIndex": 2,
    "explanation": "A tríade sensorial clássica do equilíbrio: visão (referência externa), labirinto (acelerações da cabeça) e proprioceção (posição articular e contacto com o solo).",
    "distractorAnalysis": [
      "Está incorreta: o olfato e a termorregulação não fornecem coordenadas cinemáticas nem espaciais indispensáveis para o controlo biomecânico do equilíbrio postural.",
      "Está incorreta: os sistemas endócrino e digestivo regulam a homeostase metabólica, não participando na aferência sensorial imediata do equilíbrio postural.",
      "Está incorreta: as vias linfáticas e sudoríparas não possuem recetores cinestésicos ou vestibulares associados à regulação dos limites de sustentação corporal."
    ],
    "nursingApplication": "Fundamento biofísico e fisiológico indispensável para compreender porque a falência de um dos sistemas exige compensação pelos outros."
  },
  {
    "id": 1092,
    "topicId": 1,
    "question": "Em doentes com doença de Parkinson que apresentam festinação e bloqueio da marcha (freezing), o que acontece à relação entre o Centro de Gravidade e a Base de Sustentação?",
    "options": [
      "O centro de gravidade avança para a frente fora da base de sustentação; o doente dá passos curtos e rápidos para 'tentar alcançar o próprio CG' e não cair.",
      "O centro de gravidade recua permanentemente para trás do calcanhar, obrigando o doente a caminhar de costas de forma involuntária.",
      "A força de atrito estático com o chão aumenta tanto que os pés ficam colados e a velocidade da marcha duplica instantaneamente.",
      "O doente perde a ação da gravidade sobre o tronco, permitindo que a passada se prolongue por vários metros sem tocar no pavimento."
    ],
    "correctIndex": 0,
    "explanation": "A festinação é uma tentativa desesperada de 'correr atrás do próprio centro de gravidade' com passos miúdos cada vez mais rápidos; se os pés bloquearem no freezing, o tombo é inevitável.",
    "distractorAnalysis": [
      "Está incorreta: na postura parkinsoniana em flexão anterior o CG projeta-se à frente dos pés; a festinação é uma tentativa reflexa de não cair.",
      "Está incorreta: a marcha de festinação ocorre em aceleração anterior involuntária com o tronco curvado para a frente e não em marcha retrógrada.",
      "Está incorreta: no bloqueio da marcha (freezing) há falha na iniciação do passo pelo sistema estriatal, mas não alteração física de atrito nas solas."
    ],
    "nursingApplication": "Capacita o enfermeiro a utilizar pistas visuais no solo (linhas transversais coloridas) que ajudam a quebrar o freezing e a restabelecer o passo seguro."
  },
  {
    "id": 1093,
    "topicId": 1,
    "question": "Quando dois enfermeiros auxiliam um doente com grande ataxia motora a caminhar, a distribuição ideal de forças é:",
    "options": [
      "Ambos os enfermeiros posicionados atrás do doente empurrando as suas ancas para a frente com as palmas das mãos para impedir que a velocidade da marcha diminua no corredor.",
      "Um profissional caminha à frente puxando o doente pelas mãos esticadas e o outro vai atrás empurrando a coluna dorsal com um joelho apoiado no sacro durante a caminhada.",
      "Um enfermeiro de cada lado, mantendo uma marcha sincronizada com o doente e apoiando suavemente os membros superiores ou o cinto de transferência sem puxar nem forçar o passo.",
      "Um enfermeiro transporta o utente nas costas enquanto o segundo profissional eleva os pés do paciente com uma toalha para evitar qualquer contacto físico com o pavimento."
    ],
    "correctIndex": 2,
    "explanation": "O suporte bilateral fornece forças restauradoras imediatas em ambos os planos laterais, limitando qualquer oscilação excessiva do centro de gravidade para fora da base.",
    "distractorAnalysis": [
      "Está incorreta: empurrar o doente por trás retira o controlo lateral do equilíbrio e projeta o centro de gravidade perigosamente para a frente da base.",
      "Está incorreta: tracionar os braços para a frente e empurrar o sacro desestabiliza a mecânica postural e expõe o utente a subluxações articulares e quedas.",
      "Está incorreta: carregar o utente nas costas é biomecanicamente perigoso para o profissional e elimina os objetivos terapêuticos de reeducação funcional da marcha."
    ],
    "nursingApplication": "Padroniza a assistência em marcha para doentes com elevado grau de dependência motora e sensorial."
  },
  {
    "id": 1094,
    "topicId": 1,
    "question": "Porque é que os suportes de soro hospitalares móveis utilizam bases com 5 rodízios (base em estrela de cinco pontas) em vez de apenas 3 pernas triangulares?",
    "options": [
      "Para permitir que o suporte adquira velocidade de corrida nos corredores através da sincronização dos rodízios giratórios.",
      "Para reduzir o peso metálico do equipamento através da eliminação de material estrutural na base de suporte hospitalar.",
      "Para criar uma base de sustentação circular mais ampla e simétrica em todas as direções de deslocamento, reduzindo o risco de tombamento lateral.",
      "Para que as rodas atuem como acumuladores de carga eletrostática durante o transporte de doentes com soroterapia ativa."
    ],
    "correctIndex": 3,
    "explanation": "Três pernas têm eixos de tombamento vulneráveis com pequenos ângulos de margem; cinco pernas asseguram que o centro de gravidade permanece dentro da base mesmo sob forças oblíquas.",
    "distractorAnalysis": [
      "Está incorreta: os suportes são concebidos para velocidade de marcha cuidadosa e a estabilidade multidirecional é a razão das cinco pernas estreladas.",
      "Está incorreta: a base de 5 pernas de ferro fundido é propositadamente pesada e alargada para manter o centro de gravidade baixo e estável.",
      "Está incorreta: rodízios hospitalares modernos possuem materiais condutivos para dissipar estática e não para acumulá-la perigosamente."
    ],
    "nursingApplication": "Evidencia a engenharia de segurança dos equipamentos médicos baseada nos princípios da física do equilíbrio."
  },
  {
    "id": 1095,
    "topicId": 1,
    "question": "Quando uma equipa de quatro profissionais transporta uma vítima na prancha espinal pelas pegas laterais, a distribuição de forças deve garantir que:",
    "options": [
      "Os dois socorristas da frente sustentem cem por cento do peso do conjunto enquanto os dois de trás caminham descontraídos sem exercer qualquer força ascendente de suporte nas pegas.",
      "A prancha seja inclinada a quarenta e cinco graus no plano sagital para permitir que o fluxo de oxigénio pulmonar aumente naturalmente por efeito da aceleração gravítica do ar.",
      "Cada operador caminhe num ritmo e passada independentes, garantindo que as oscilações compensem de forma aleatória os declives e irregularidades do terreno acidentado.",
      "O peso total seja equilibrado em simultâneo pelos quatro operadores (∑Fy = 0) e a prancha se mantenha rigorosamente horizontal sem momentos de inclinação ou torção lateral (∑M = 0)."
    ],
    "correctIndex": 3,
    "explanation": "A coordenação sincronizada dos quatro socorristas mantém o centro de gravidade nivelado e anula acelerações bruscas, prevenindo dores e agravamento de lesões internas no sinistrado.",
    "distractorAnalysis": [
      "Está incorreta: a distribuição de carga deve ser equilibrada entre os quatro operadores para prevenir fadiga muscular aguda, desequilíbrio e queda da prancha.",
      "Está incorreta: inclinar a prancha a 45° faz o doente escorregar e gera sobrecarga hidrostática cefálica ou pélvica, violando a estabilização horizontal.",
      "Está incorreta: a marcha tem de ser coordenada e sincronizada para evitar movimentos de torção e solavancos bruscos na coluna da vítima."
    ],
    "nursingApplication": "Ensina a técnica de transporte em equipa e a comunicação por comandos padronizados em trauma."
  },
  {
    "id": 1096,
    "topicId": 1,
    "question": "No treino de marcha com obstáculos, porque é que o enfermeiro ensina o doente a levantar os joelhos mais alto e a olhar em frente (e não fixamente para a ponta dos pés)?",
    "options": [
      "Olhar em frente cancela totalmente o peso da cabeça sobre a coluna cervical, permitindo que o centro de gravidade se desloque para o teto e diminua a força de impacto com o pavimento.",
      "Levantar os joelhos compensa a rotação natural do piso sob os pés do utente, fazendo com que o solo avance sozinho sem necessidade de empurrão mecânico pelos músculos gémeos da perna.",
      "Levantar os pés garante distância de segurança contra tropeçamentos mecânicos e olhar em frente permite a antecipação visual panorâmica da trajetória e mantém a coluna ereta e equilibrada.",
      "Fixar os olhos nos próprios sapatos é a única postura recomendada pela biomecânica, pois impede que as imagens em movimento do ambiente perturbem o fluxo sanguíneo das carótidas."
    ],
    "correctIndex": 2,
    "explanation": "Caminhar com a cabeça excessivamente inclinada para baixo projeta o centro de gravidade para a frente da base (risco de queda frontal) e suprime a visão espacial do ambiente.",
    "distractorAnalysis": [
      "Está incorreta: olhar em frente melhora o alinhamento axial e a visão periférica de antecipação ambiental, mas não anula a massa ou o peso da cabeça.",
      "Está incorreta: a marcha humana obedece à propulsão muscular contra o atrito do solo, sendo as forças reativas da gravidade constantes para a passada.",
      "Está incorreta: olhar fixamente para os pés inclina o tronco para a frente (risco de queda frontal) e suprime a deteção precoce de obstáculos à distância."
    ],
    "nursingApplication": "Instrução pedagógica clássica que corrige a postura viciosa de doentes com medo de cair."
  },
  {
    "id": 1097,
    "topicId": 1,
    "question": "Qual é a relação fundamental entre a Base de Sustentação, a altura do Centro de Gravidade e o grau de Estabilidade de um sistema humano ou equipamento?",
    "options": [
      "Quanto menor for a base de apoio e quanto mais alto estiver o centro de gravidade, mais estável e seguro se torna o sistema postural humano.",
      "A altura do centro de gravidade e a área da base de apoio não têm qualquer relevância na determinação do grau de estabilidade mecânica.",
      "A estabilidade é máxima quando a linha de gravidade se localiza fora dos limites geométricos externos do polígono de sustentação de apoio.",
      "Quanto maior for a área da base de sustentação e quanto mais baixo estiver o centro de gravidade em relação ao solo, maior será a margem de Equilíbrio Estável do sistema."
    ],
    "correctIndex": 3,
    "explanation": "Aumentar a base e baixar o CG aumenta o ângulo e a energia necessária para fazer a linha de gravidade sair do polígono de apoio (maior estabilidade passiva).",
    "distractorAnalysis": [
      "Está incorreta: base estreita e centro de gravidade alto caracterizam instabilidade acentuada com facilidade de queda perante pequenas perturbações.",
      "Está incorreta: os dois pilares clássicos da estabilidade mecânica e postural são a largura da base de apoio e a proximidade do centro de massa ao solo.",
      "Está incorreta: quando a linha de gravidade cai fora da base de sustentação, o momento restaurador é nulo e ocorre desequilíbrio e queda se não houver apoio."
    ],
    "nursingApplication": "Regra de ouro biomecânica transversal a todo o curso de Biofísica e ergonomia clínica de enfermagem."
  },
  {
    "id": 1098,
    "topicId": 1,
    "question": "Como é definido rigorosamente o Centro de Gravidade (CG) de um corpo humano na mecânica biológica?",
    "options": [
      "É a estrutura anatómica rígida e palpável situada no bordo superior da sínfise púbica que serve de âncora a todos os ligamentos abdominais.",
      "É o ponto da coluna vertebral onde a densidade óssea atinge o valor mais elevado, determinando a rigidez estrutural de suporte do esqueleto.",
      "É a área de contacto delimitada pela superfície plantar de ambos os pés sobre o plano de apoio onde se distribuem as pressões estáticas.",
      "É o ponto imaginário onde se considera concentrada toda a massa do corpo e onde atua a resultante de todas as forças gravíticas exercidas sobre cada uma das suas partes."
    ],
    "correctIndex": 3,
    "explanation": "Definição biomecânica: 'Ponto imaginário onde se considera concentrada toda a massa e onde atua a resultante de todas as forças gravíticas do corpo'.",
    "distractorAnalysis": [
      "Está incorreta: o Centro de Gravidade não é uma estrutura anatómica ou óssea palpável, mas um ponto virtual de equilíbrio gravítico.",
      "Está incorreta: a densidade óssea vertebral não define o centro de gravidade de todo o sistema corporal tridimensional.",
      "Está incorreta: a área de apoio plantar corresponde à Base de Sustentação e não ao Centro de Gravidade do corpo."
    ],
    "nursingApplication": "Fixa a definição textual de Centro de Gravidade na aula de Biofísica."
  },
  {
    "id": 1099,
    "topicId": 1,
    "question": "No campo gravítico uniforme da superfície da Terra, qual é a relação prática entre o Centro de Massa (CM) e o Centro de Gravidade (CG) de uma pessoa?",
    "options": [
      "Coincidem no mesmo ponto geométrico, porque a aceleração da gravidade (g = 9,8 m/s²) é considerada constante em toda a extensão do corpo humano.",
      "O Centro de Gravidade localiza-se sempre trinta centímetros acima do Centro de Massa devido à pressão atmosférica circundante.",
      "O Centro de Massa varia continuamente com a respiração, enquanto o Centro de Gravidade permanece estático e inalterável no crânio.",
      "O Centro de Gravidade só existe quando o indivíduo está em movimento acelerado, coincidindo com o Centro de Massa apenas no sono profundo."
    ],
    "correctIndex": 0,
    "explanation": "Em campos gravitacionais homogéneos, a distribuição de massa ponderada pela gravidade coincide perfeitamente com o baricentro (centro de massa).",
    "distractorAnalysis": [
      "Está incorreta: no campo gravitacional terrestre uniforme, o CG e o CM coincidem geometricamente na mesma localização espacial.",
      "Está incorreta: ambos os centros se movem em conjunto com a distribuição das massas corporais e não se separam durante a respiração.",
      "Está incorreta: tanto o CG como o CM existem permanentemente, quer o corpo esteja em repouso estático quer em movimento dinâmico."
    ],
    "nursingApplication": "Clarifica a equivalência física entre Centro de Massa e Centro de Gravidade na biomecânica terrestre."
  },
  {
    "id": 1100,
    "topicId": 1,
    "question": "Por que razão o Centro de Gravidade é designado por 'ponto imaginário'?",
    "options": [
      "Porque depende exclusivamente da percepção subjetiva e do foco visual do examinador durante a avaliação estática da postura ereta do doente no leito hospitalar.",
      "Porque não corresponde a uma estrutura biológica concreta ou órgão específico, mas a um ponto matemático resultante do cálculo da distribuição das massas corporais.",
      "Porque corresponde a uma cavidade anatómica virtual preenchida por líquido sinovial situada no interior da segunda vértebra sagrada da coluna vertebral.",
      "Porque se altera aleatoriamente no espaço sem qualquer relação matemática com o posicionamento relativo dos diferentes segmentos ósseos e musculares corporais."
    ],
    "correctIndex": 1,
    "explanation": "Pode até situar-se no espaço vazio fora dos tecidos corporais quando o corpo adota certas posturas (como uma flexão profunda do tronco em 'U').",
    "distractorAnalysis": [
      "Está incorreta: O centro de gravidade possui definição física e biomecânica objetiva, independente da perceção visual do observador clínico.",
      "Está incorreta: O centro de gravidade é um ponto matemático de equilíbrio de massas e não uma cavidade anatómica ou estrutura com líquido.",
      "Está incorreta: A localização do centro de gravidade segue leis matemáticas rigorosas baseadas na distribuição ponderada das massas segmentares."
    ],
    "nursingApplication": "Desmistifica o conceito de ponto de massa concentrada na modelação biomecânica."
  },
  {
    "id": 1101,
    "topicId": 1,
    "question": "Qual é a importância fundamental de conhecer o Centro de Gravidade nos cuidados de enfermagem?",
    "options": [
      "Garante a determinação da taxa de filtração glomerular e da depuração renal de fármacos em doentes acamados com insuficiência cardíaca congestiva descompensada em internamento.",
      "Serve para definir a dosagem exata de fluidoterapia intravenosa e a taxa de administração horária de eletrólitos com base na densidade óssea global medida na bacia do utente dependente.",
      "Permite monitorizar de forma não invasiva a pressão venosa central e o débito cardíaco durante a mobilização no leito sem necessidade de cateterização vascular profunda.",
      "Permite antecipar como as mudanças de postura, transferências e dispositivos afetam o equilíbrio do doente, prevenindo desequilíbrios, quedas e sobrecargas lombares na equipa de saúde."
    ],
    "correctIndex": 3,
    "explanation": "O controlo do CG em relação à base de sustentação é a chave de toda a mecânica corporal, mobilização de doentes e prevenção de acidentes de trabalho.",
    "distractorAnalysis": [
      "Está incorreta: A função renal e depuração farmacológica dependem de parâmetros hemodinâmicos e bioquímicos, não do centro de gravidade mecânico.",
      "Está incorreta: O cálculo da fluidoterapia baseia-se no equilíbrio hidroeletrolítico, peso e débito urinário, sem relação com o centro de gravidade.",
      "Está incorreta: A monitorização hemodinâmica requer parâmetros fisiológicos cardiovasculares e não a localização do centro de gravidade biomecânico."
    ],
    "nursingApplication": "Conecta o conceito físico de baricentro à prática quotidiana e segurança clínica do doente."
  },
  {
    "id": 1102,
    "topicId": 1,
    "question": "Onde se localiza o Centro de Gravidade no corpo humano de um adulto em posição anatómica ereta normal?",
    "options": [
      "Na linha média, anterior à 2.ª vértebra sagrada (S2), cerca de 55% a 57% da altura total a partir do solo.",
      "No centro anatómico do músculo diafragma, junto à transição entre as cavidades torácica e abdominal anterior.",
      "No vértice superior do crânio (vértex), coincidindo com a linha de visão horizontal dos dois olhos em vigília.",
      "Na articulação do joelho direito, garantindo a predominância lateral da perna dominante durante a marcha em linha reta."
    ],
    "correctIndex": 0,
    "explanation": "Referência anatómica: 'Em posição anatómica ereta, situa-se na linha média anterior à 2ª vértebra sagrada (S2)'.",
    "distractorAnalysis": [
      "Está incorreta: em adultos eretos o centro de gravidade corporal localiza-se na bacia, ligeiramente anterior a S2, e não na caixa torácica.",
      "Está incorreta: o centro de gravidade craniano tornaria o ser humano extremamente instável e com tendência contínua para quedas e tombamentos.",
      "Está incorreta: o centro de massa distribui-se bilateralmente na linha média sagital em postura anatómica simétrica, e não num dos joelhos."
    ],
    "nursingApplication": "Fixa a referência anatómica precisa de S2 na postura ereta humana."
  },
  {
    "id": 1103,
    "topicId": 1,
    "question": "Em termos antropométricos percentuais, a localização do CG de um adulto ereto situa-se aproximadamente a que percentagem da sua altura total a partir da planta dos pés?",
    "options": [
      "A cerca de 25% a 30% da altura total, situando-se próximo da interlinha dos joelhos.",
      "A cerca de 55% a 57% da altura total (cerca de 55% nas mulheres e 56-57% nos homens).",
      "A cerca de 75% a 80% da altura total, localizando-se na região média do esterno.",
      "A exatamente 50% da altura total, coincidindo com o centro geométrico da estatura."
    ],
    "correctIndex": 1,
    "explanation": "Num indivíduo de 1,70 m de altura, o CG situa-se a cerca de 95 a 97 cm do chão, na cavidade pélvica anterior ao sacro (S2).",
    "distractorAnalysis": [
      "Está incorreta: o CG localiza-se na cavidade pélvica anterior a S2 (~55-57% da altura), e não nos joelhos (~25-30%).",
      "Está incorreta: 75% a 80% situa-se no tórax superior; a maior massa de membros inferiores e pélvis posiciona o baricentro mais abaixo.",
      "Está incorreta: o corpo humano não tem densidade nem massa simétricas; a massa do tronco e cabeça desloca o CG acima do ponto médio de 50%."
    ],
    "nursingApplication": "Quantifica a altura relativa do centro de gravidade no corpo humano adulto."
  },
  {
    "id": 1104,
    "topicId": 1,
    "question": "A localização do CG anterior a S2 significa que, no plano ântero-posterior, o centro de gravidade se encontra:",
    "options": [
      "Exatamente alinhado com o bordo posterior dos calcanhares, projetando a linha de ação vertical atrás do eixo funcional de todas as articulações dos membros.",
      "Profundamente recuado no interior do canal raquidiano lombar, originando um torque extensor permanente que dispensa a contração dos músculos antigravíticos.",
      "Ligeiramente à frente do eixo da coluna sagrada, projetando uma linha de ação vertical que passa logo à frente das articulações dos joelhos e tornozelos.",
      "Diretamente coincidente com o umbigo na parede abdominal anterior, mantendo a linha gravítica projetada muito à frente da base de suporte dos pés descalços."
    ],
    "correctIndex": 2,
    "explanation": "Estar anterior a S2 coloca a linha de gravidade estrategicamente posicionada para que pequenas contrações dos músculos posturais mantenham o balanço em repouso.",
    "distractorAnalysis": [
      "Está incorreta: Se a linha de ação passasse atrás dos calcanhares, ficaria fora da base de apoio e provocaria a queda imediata para trás.",
      "Está incorreta: O centro de gravidade não se localiza no canal vertebral, mas sim na cavidade pélvica ligeiramente anterior à segunda vértebra sagrada.",
      "Está incorreta: O centro de gravidade situa-se no interior da bacia e não na superfície anterior do umbigo, permitindo o alinhamento postural estável."
    ],
    "nursingApplication": "Integração da anatomia esquelética sagrada com a projeção vertical gravitacional."
  },
  {
    "id": 1105,
    "topicId": 1,
    "question": "Que estrutura óssea serve de referência anatómica direta para localizar a segunda vértebra sagrada (S2) na palpação da coluna?",
    "options": [
      "O bordo superior da sínfise púbica palpável na linha média anterior da bacia durante o exame físico abdominal do utente acamado.",
      "A apófise espinhosa da sétima vértebra cervical saliente na base posterior do pescoço aquando da flexão da coluna vertebral.",
      "As cristas ilíacas superiores no ponto mais alto da cintura pélvica que se correlacionam habitualmente com o espaço discal L4-L5.",
      "As espinhas ilíacas póstero-superiores (EIPS), identificáveis visualmente pelas 'covinhas de Vénus' na região lombar baixa/sagrada."
    ],
    "correctIndex": 3,
    "explanation": "Uma linha horizontal imaginária unindo as duas espinhas ilíacas póstero-superiores passa exatamente pelo nível da vértebra sagrada S2.",
    "distractorAnalysis": [
      "Está incorreta: A sínfise púbica localiza-se na face anterior da bacia e não permite referenciar as vértebras sagradas posteriores.",
      "Está incorreta: A apófise de C7 situa-se na transição cervicotorácica e não na região sagrada da coluna vertebral.",
      "Está incorreta: O nível das cristas ilíacas (linha de Tuffier) corresponde à vértebra L4, enquanto S2 é referenciada pelas EIPS."
    ],
    "nursingApplication": "Conhecimento de palpação anatómica e marcos de superfície de grande utilidade clínica."
  },
  {
    "id": 1106,
    "topicId": 1,
    "question": "Num doente que flete profundamente o tronco com pernas estendidas na manobra de tocar com as mãos nos pés, onde se localiza o Centro de Gravidade?",
    "options": [
      "No interior do canal medular da tíbia proximal do membro dominante, onde a densidade do tecido ósseo cortical atinge o seu valor máximo de rigidez.",
      "Na cavidade torácica ao nível do esterno, acompanhando a aproximação das extremidades dos membros superiores à superfície cutânea anterior dos pés.",
      "Na base plantar dos pés em contacto direto com o pavimento, transferindo todo o ponto de aplicação da gravidade para o calçado do utente em teste.",
      "No espaço livre exterior ao corpo, à frente do abdómen e coxas, demonstrando que o CG de corpos ocos ou curvos pode situar-se fora da matéria anatómica."
    ],
    "correctIndex": 3,
    "explanation": "Tal como numa rosquinha, num bumerangue ou numa cadeira, o baricentro de uma estrutura com curvatura acentuada situa-se no espaço geométrico resultante entre os seus segmentos.",
    "distractorAnalysis": [
      "Está incorreta: O centro de gravidade do corpo fletido não migra para o interior de um osso da perna, situando-se no espaço geométrico resultante.",
      "Está incorreta: Na flexão profunda com membros pendentes, o centro de gravidade desce e sai anteriormente do corpo, não subindo para o esterno.",
      "Está incorreta: A sola dos pés constitui a base de sustentação do indivíduo e não a localização do centro de gravidade corporal tridimensional."
    ],
    "nursingApplication": "Demonstra que o centro de gravidade pode situar-se no espaço livre fora do corpo."
  },
  {
    "id": 1107,
    "topicId": 1,
    "question": "Quando uma pessoa carrega um saco pesado ou balde unicamente na mão direita, como se desloca o Centro de Gravidade do sistema combinado (corpo + carga)?",
    "options": [
      "Desloca-se para o lado direito e ligeiramente para a frente, obrigando a pessoa a inclinar o tronco lateralmente para a esquerda como compensação biomecânica reflexa.",
      "Desloca-se paradoxalmente para o lado esquerdo do corpo devido ao aumento imediato do tónus muscular nos membros contralaterais que sustentam a postura em pé.",
      "Permanece perfeitamente inalterado na linha média corporal graças à contração isométrica compensatória dos músculos intercostais e transverso do abdómen.",
      "Desloca-se exclusivamente no sentido vertical descendente em direção ao pavimento sem qualquer desvio no plano frontal ou sagital da marcha ortostática."
    ],
    "correctIndex": 0,
    "explanation": "Para manter o equilíbrio, o sistema neuromuscular flete o tronco para o lado oposto para trazer a linha de gravidade combinada de volta ao centro da base de sustentação.",
    "distractorAnalysis": [
      "Está incorreta: A adição de massa no lado direito puxa o centro de gravidade combinado para a direita, exigindo a inclinação contralateral do tronco.",
      "Está incorreta: O centro de gravidade do sistema conjunto desloca-se obrigatoriamente na direção onde foi adicionada a carga externa.",
      "Está incorreta: O peso unilateral altera a distribuição lateral das massas, provocando um desvio assimétrico no plano frontal e não apenas descida vertical."
    ],
    "nursingApplication": "Explica o reflexo postural compensatório involuntário ao transportar cargas assimétricas."
  },
  {
    "id": 1108,
    "topicId": 1,
    "question": "Durante o agachamento fisiológico (flexão de joelhos e ancas mantendo o tronco ereto), o que acontece à altura do Centro de Gravidade?",
    "options": [
      "Eleva-se em direção à coluna torácica, reduzindo a margem de segurança biomecânica contra perturbações posturais.",
      "Baixa significativamente aproximando-se do solo, o que aumenta de imediato a estabilidade postural do indivíduo.",
      "Mantém rigorosamente a mesma altitude em relação ao chão, porque os joelhos compensam a flexão das articulações da anca.",
      "Desloca-se lateralmente para o membro dominante, criando um desequilíbrio transitório na base de sustentação estática."
    ],
    "correctIndex": 1,
    "explanation": "Quanto mais baixo estiver o centro de gravidade em relação à base de sustentação, maior é o ângulo de inclinação necessário para fazer o corpo tombar (maior estabilidade mecânica).",
    "distractorAnalysis": [
      "Está incorreta: ao fletir os membros inferiores todo o tronco desce em direção ao pavimento, baixando o Centro de Gravidade.",
      "Está incorreta: a descida da bacia e do tronco reduz a distância vertical entre o CG e o chão, aumentando a estabilidade.",
      "Está incorreta: num agachamento simétrico o baricentro mantém-se no plano sagital mediano entre ambos os membros inferiores."
    ],
    "nursingApplication": "Introduz o primeiro fator biomecânico de estabilidade: altura do centro de gravidade."
  },
  {
    "id": 1109,
    "topicId": 1,
    "question": "Na variabilidade anatómica do centro de gravidade entre sexos, qual é a principal diferença anatómica entre o homem e a mulher?",
    "options": [
      "Nas mulheres o CG situa-se ligeiramente mais baixo (no interior da bacia/abdómen inferior) devido à pélvis mais larga e centro de massa inferior; nos homens situa-se ligeiramente mais alto (mais próximo do tórax) devido à cintura escapular mais ampla.",
      "Nas mulheres o CG situa-se muito mais alto (junto à primeira costela torácica) devido à menor massa óssea nos membros inferiores; nos homens o CG localiza-se junto aos joelhos devido à hipertrofia fisiológica contínua dos músculos gémeos da perna.",
      "Nas mulheres o CG projeta-se constantemente fora do corpo durante a postura ereta devido à lordose lombar fisiológica; nos homens o CG permanece fixo e imutável no centro do esterno por efeito da rigidez da cartilagem costal ao longo da respiração.",
      "Não existe qualquer diferença anatómica ou geométrica no CG entre sexos, uma vez que a percentagem de gordura corporal e a morfologia da cintura escapular e pélvica são rigorosamente idênticas em ambos os géneros desde o nascimento até à velhice."
    ],
    "correctIndex": 0,
    "explanation": "A anatomia humana demonstra biomecanicamente: homem com CG mais alto direcionado ao tórax/abdómen superior e mulher com CG mais baixo na bacia/interior do abdómen.",
    "distractorAnalysis": [
      "Está incorreta: Nas mulheres o centro de gravidade é anatomicamente mais baixo e nos homens mais alto, exatamente o oposto do descrito na opção.",
      "Está incorreta: Em repouso ortostático neutro, o centro de gravidade localiza-se no interior da bacia em ambos os sexos e não fora do corpo ou no esterno.",
      "Está incorreta: Existem diferenças anatómicas claras entre sexos na morfologia pélvica, distribuição de massa muscular e adiposa que alteram a altura do baricentro."
    ],
    "nursingApplication": "Fidelidade ao conteúdo e ilustrações anatómicas da biomecânica do centro de gravidade."
  },
  {
    "id": 1110,
    "topicId": 1,
    "question": "Em recém-nascidos e crianças pequenas, onde se localiza o Centro de Gravidade em comparação com o adulto?",
    "options": [
      "Muito mais baixo do que no adulto, situando-se ao nível do terço médio das tíbias devido à ausência de mineralização óssea e à reduzida densidade do crânio nos primeiros anos de infância.",
      "Significativamente mais alto, situando-se ao nível do umbigo ou mesmo na transição toracolombar (T12-L1), devido à cabeça desproporcionadamente grande e pesada e membros inferiores mais curtos.",
      "Na mesma localização anatómica exata do adulto (segunda vértebra sagrada S2), uma vez que as proporções corporais e a distribuição das massas segmentares se mantêm constantes desde o nascimento.",
      "Na face posterior do pescoço junto ao occipital, porque a fontanela anterior aberta atua como fulcro mecânico concentrador de toda a massa cefálica durante a manutenção da posição sentada no berço."
    ],
    "correctIndex": 1,
    "explanation": "No lactente, a cabeça representa cerca de 20 a 25% da massa corporal (contra ~7-8% no adulto), deslocando o baricentro cranialmente para o abdómen superior.",
    "distractorAnalysis": [
      "Está incorreta: Nas crianças pequenas a cabeça volumosa e membros curtos elevam o centro de gravidade para o abdómen superior, não descendo para as pernas.",
      "Está incorreta: As proporções corporais alteram-se profundamente com o crescimento ontogénico, descendo o centro de gravidade de T12-L1 até S2 na idade adulta.",
      "Está incorreta: O centro de gravidade localiza-se no tronco (região toracolombar/umbilical) e não no pescoço ou crânio."
    ],
    "nursingApplication": "Explica a anatomia biomecânica pediátrica e a sua influência no centro de gravidade."
  },
  {
    "id": 1111,
    "topicId": 1,
    "question": "À medida que a criança cresce e atinge a adolescência, o que acontece à posição relativa do seu Centro de Gravidade?",
    "options": [
      "O Centro de Gravidade sobe em direção à cintura escapular, devido ao desenvolvimento torácico e aumento proporcional do volume pulmonar durante a fase de puberdade.",
      "O Centro de Gravidade desce progressivamente em termos percentuais, aproximando-se da 2.ª vértebra sagrada (S2) à medida que os membros inferiores crescem e o tronco se proporcionaliza.",
      "O Centro de Gravidade mantém-se fixo na altura da vértebra T8 desde o nascimento, porque o alinhamento corporal infantil é idêntico ao da postura no adulto maduro.",
      "O Centro de Gravidade oscila de forma aleatória entre a cabeça e a bacia, dependendo exclusivamente do padrão alimentar e do consumo diário de calorias metabólicas."
    ],
    "correctIndex": 1,
    "explanation": "O crescimento alométrico dos membros inferiores e o desenvolvimento da pélvis baixam o baricentro, conferindo maior estabilidade estática e permitindo uma marcha madura com base estreita.",
    "distractorAnalysis": [
      "Está incorreta: nos primeiros anos a cabeça é desproporcionalmente grande (CG mais alto, ~T12); com o crescimento dos membros inferiores o CG desce relativamente.",
      "Está incorreta: o crescimento modifica profundamente as proporções corporais relativas, descendo o CG do nível toracolombar para o sacro (S2).",
      "Está incorreta: a posição do centro de gravidade segue o desenvolvimento morfológico e muscular previsível da anatomia humana."
    ],
    "nursingApplication": "Evolução ontogenética do baricentro corporal até à idade adulta."
  },
  {
    "id": 1112,
    "topicId": 1,
    "question": "Durante a gestação avançada (terceiro trimestre), o que acontece à localização do Centro de Gravidade da grávida?",
    "options": [
      "Desloca-se posteriormente para trás da coluna lombar, forçando a grávida a inclinar o tronco acentuadamente para a frente para não perder o equilíbrio no ortostatismo.",
      "Desce progressivamente em direção à articulação dos joelhos, proporcionando uma estabilidade postural acrescida contra perturbações dinâmicas durante a locomoção.",
      "Desloca-se anteriormente (para a frente) e ligeiramente para cima devido ao aumento progressivo da massa do feto, placenta, líquido amniótico e útero na cavidade abdominal.",
      "Permanece perfeitamente estático e inalterado na vértebra S2, dado que as adaptações posturais musculares anulam o impacto do peso gravídico no plano sagital."
    ],
    "correctIndex": 2,
    "explanation": "A massa de 10 a 15 kg acumulada na face anterior do abdómen puxa a resultante das forças gravíticas para a frente, ameaçando projetar a linha de gravidade além da base.",
    "distractorAnalysis": [
      "Está incorreta: a massa adicional no ventre desloca o baricentro para a frente; a grávida inclina o tronco para trás (lordose) para compensar.",
      "Está incorreta: o ganho ponderal concentra-se no abdómen anterior e mamas, elevando ligeiramente e anteriorizando o Centro de Gravidade.",
      "Está incorreta: a adição substancial de massa anterior altera inevitavelmente a localização matemática do centro de gravidade global."
    ],
    "nursingApplication": "Explica a alteração biomecânica essencial que ocorre na morfologia da grávida."
  },
  {
    "id": 1113,
    "topicId": 1,
    "question": "Que adaptação postural involuntária e reflexa adota a grávida para impedir que a sua linha de gravidade saia da base de apoio para a frente?",
    "options": [
      "Inclina o tronco pronunciadamente para a frente e junta os pés na linha média durante todo o percurso da caminhada.",
      "Flete os joelhos a 90 graus continuamente e caminha com o peso do corpo suportado exclusivamente pelos calcanhares.",
      "Eleva os dois braços acima dos ombros para deslocar o centro de gravidade para o topo da caixa torácica anterior.",
      "Projeta o tronco superior e os ombros para trás através de uma hiperlordose lombar compensatória e afasta os pés durante a marcha."
    ],
    "correctIndex": 3,
    "explanation": "Ao puxar as costas para trás, a grávida realinha o centro de gravidade global sobre a bacia e dentro do polígono de apoio dos pés, evitando a queda anterior.",
    "distractorAnalysis": [
      "Está incorreta: a massa anterior do útero gravídico anterioriza o CG; a compensação reflexa consiste em recuar o tronco (hiperlordose) e não em projetá-lo mais para a frente.",
      "Está incorreta: a marcha com joelhos fletidos a 90° é biomecanicamente inviável e extremamente extenuante para a musculatura extensora do membro inferior.",
      "Está incorreta: a grávida alarga a base de sustentação afastando os pés e recua o tronco superior para manter a linha de gravidade no centro da base."
    ],
    "nursingApplication": "Descrição da postura hiperlordótica clássica e da marcha de base alargada da grávida."
  },
  {
    "id": 1114,
    "topicId": 1,
    "question": "No idoso com cifose dorsal acentuada ('corcunda senil'), como se altera a projeção do Centro de Gravidade e da Linha de Gravidade?",
    "options": [
      "A Linha de Gravidade recua significativamente para trás dos calcanhares, aumentando a margem de estabilidade anterior e eliminando por completo qualquer perigo de queda frontal.",
      "O Centro de Gravidade desloca-se exclusivamente no sentido lateral em direção ao trocânter maior dominante, mantendo o alinhamento sagital perfeitamente centrado no polígono de apoio.",
      "A Linha de Gravidade permanece rigorosamente inalterada no centro geométrico da base de apoio devido à contração reflexa compensatória e potente do músculo transverso do abdómen.",
      "O Centro de Gravidade e a Linha de Gravidade são projetados anteriormente (para a frente), aproximando-se perigosamente do bordo anterior da base de sustentação (ponta dos pés)."
    ],
    "correctIndex": 3,
    "explanation": "Com a flexão rígida da coluna dorsal e anteriorização da cabeça, a margem de estabilidade anterior fica drasticamente reduzida (qualquer tropeção faz a LG sair da base e cair).",
    "distractorAnalysis": [
      "Está incorreta: A cifose projeta a cabeça e o tronco para a frente, aproximando a linha de gravidade da ponta dos pés e não dos calcanhares.",
      "Está incorreta: O desvio principal da cifose ocorre no plano sagital (ântero-posterior) e não puramente no plano frontal em direção a um dos trocânteres.",
      "Está incorreta: A deformidade postural rígida da coluna altera inevitavelmente a projeção da linha de gravidade, não sendo anulada pela musculatura abdominal."
    ],
    "nursingApplication": "Explica a causa biomecânica primordial da elevada taxa de quedas frontais na população idosa."
  },
  {
    "id": 1115,
    "topicId": 1,
    "question": "Como é que a sarcopenia (perda de massa e força muscular com o envelhecimento) agrava a instabilidade do Centro de Gravidade no idoso?",
    "options": [
      "Aumenta a velocidade de condução nervosa aferente nos fusos neuromusculares, provocando respostas contráteis hiper-reativas que arremessam a linha de gravidade para fora dos limites dos pés.",
      "Reduz a capacidade dos músculos extensores e flexores do tornozelo (tibial anterior e tricípite sural) de produzirem os momentos rápidos de correção de torque necessários para manter a LG centrada na base.",
      "Substitui as fibras musculares esqueléticas por cartilagem hialina flexível que absorve a totalidade da força gravitacional, impedindo a flexão voluntária dos joelhos durante as transferências.",
      "Provoca o aumento desproporcionado da massa e peso dos membros inferiores em relação ao tronco superior, o que rebaixa excessivamente o centro de gravidade para o interior do calcâneo."
    ],
    "correctIndex": 1,
    "explanation": "A 'estratégia do tornozelo' (pequenas oscilações oscilatórias) exige força e velocidade de disparo muscular; a fraqueza muscular impede correções ágeis, transformando pequenas oscilações em quedas.",
    "distractorAnalysis": [
      "Está incorreta: A sarcopenia e o envelhecimento diminuem a massa muscular e a velocidade de resposta motora, em vez de provocarem hiper-reatividade veloz.",
      "Está incorreta: O músculo sarcopénico é infiltrado por tecido adiposo e fibroso (mioesteatose) e perde capacidade de gerar força rápida e torque de correção.",
      "Está incorreta: A sarcopenia leva à perda de massa muscular apendicular (membros mais fracos e magros) e não ao seu aumento de peso."
    ],
    "nursingApplication": "Associação entre fisiologia do envelhecimento muscular e perda do controlo estático do torque."
  },
  {
    "id": 1116,
    "topicId": 1,
    "question": "Como é que o utente com obesidade androide geralmente compensa a anteriorização do seu Centro de Gravidade para conseguir manter-se de pé?",
    "options": [
      "Adota uma postura com flexão anterior acentuada do tronco a 45 graus e apoia-se estritamente na ponta dos pés com os calcanhares suspensos do solo.",
      "Aumenta a lordose lombar, recua os ombros e a cabeça e alarga a base de sustentação, mantendo os pés bem afastados (geralmente > 40 cm) e em rotação externa.",
      "Aproxima os tornozelos até ao contacto direto dos maléolos e projeta a cabeça para a frente para alinhar o queixo com a cicatriz umbilical do abdómen.",
      "Mantém os joelhos em hiperextensão rígida com apoio unipedal alternado de curta duração, anulando a curvatura lordótica lombar da coluna vertebral."
    ],
    "correctIndex": 1,
    "explanation": "A base ampla (pés afastados à largura dos ombros: 30-40 cm) e a hiperlordose são as duas respostas mecânicas necessárias para estabilizar um baricentro anteriorizado.",
    "distractorAnalysis": [
      "Está incorreta: A flexão acentuada do tronco anteriorizaria ainda mais o centro de gravidade, inviabilizando o equilíbrio estático.",
      "Está incorreta: Juntar os tornozelos estreita a base de sustentação num doente com grande massa corporal anterior, favorecendo desequilíbrios laterais graves.",
      "Está incorreta: A compensação postural fisiológica típica na obesidade androide consiste na hiperlordose lombar e alargamento da base de apoio bípede."
    ],
    "nursingApplication": "Identifica a marcha do utente obeso como adaptação direta às leis do equilíbrio estático."
  },
  {
    "id": 1117,
    "topicId": 1,
    "question": "Num doente submetido a amputação transfemoral unilateral (acima do joelho) de um dos membros inferiores, para onde se desloca o Centro de Gravidade global do corpo?",
    "options": [
      "Desloca-se para baixo e lateralmente em direção ao bordo distal do membro amputado, devido à atração gravitacional compensatória exercida pelo tecido cicatricial do coto.",
      "Permanece rigidamente centrado na segunda vértebra sagrada, porque o sistema nervoso central redistribui a densidade óssea dos outros membros para manter a simetria.",
      "Desloca-se para cima (cranial) e lateralmente em direção ao lado do membro são (não amputado), devido à perda de cerca de 10% a 15% da massa corporal total desse hemicorpo inferior.",
      "Desloca-se anteriormente para o espaço livre à frente do esterno, tornando impossível qualquer tipo de apoio estático na cadeira mesmo com o apoio das costas no espaldar."
    ],
    "correctIndex": 2,
    "explanation": "O centro de massa é a média ponderada das massas remanescentes; ao remover uma massa inferior direita, o baricentro sobe e desvia-se para a esquerda (lado do membro intacto).",
    "distractorAnalysis": [
      "Está incorreta: A remoção de massa num hemicorpo inferior desloca o centro de massa resultante para o lado oposto (lado são) e para cima, nunca em direção ao coto.",
      "Está incorreta: O centro de gravidade físico depende estritamente da distribuição real de massas anatómicas, alterando-se logo após a resseção cirúrgica de um membro.",
      "Está incorreta: O desvio do centro de gravidade na amputação unilateral é predominantemente latero-cranial em direção ao membro remanescente íntegro."
    ],
    "nursingApplication": "Princípio fundamental de reabilitação e protetização em utentes amputados."
  },
  {
    "id": 1118,
    "topicId": 1,
    "question": "Na avaliação da estabilidade postural, qual é a 'Condição de alta estabilidade' relativa à altura do Centro de Gravidade (CG)?",
    "options": [
      "Mais Alto (em pontas dos pés ou tronco esticado no limite vertical).",
      "Mais Baixo (joelhos e ancas ligeiramente fletidos).",
      "Ao nível dos ombros (braços erguidos no ar acima da cabeça).",
      "Deslocado lateralmente para fora dos limites dos apoios plantares."
    ],
    "correctIndex": 1,
    "explanation": "Critério de estabilidade: 'Altura do centro de gravidade (CG) | Condição de alta estabilidade: Mais Baixo (joelhos e ancas ligeiramente fletidos)'.",
    "distractorAnalysis": [
      "Está incorreta: centro de gravidade elevado é uma condição de instabilidade postural com maior risco de desequilíbrio.",
      "Está incorreta: elevar os braços sobe o centro de gravidade corporal, aumentando o risco de queda.",
      "Está incorreta: projetar o centro de gravidade para fora da base de suporte anula a estabilidade estática e provoca queda imediata se não houver apoio."
    ],
    "nursingApplication": "Fidelidade literal à tabela oficial de conceitos dos parâmetros de estabilidade postural."
  },
  {
    "id": 1119,
    "topicId": 1,
    "question": "Qual é a 'Intervenção de enfermagem recomendada' na prática de enfermagem para controlar a altura do Centro de Gravidade durante a prática profissional?",
    "options": [
      "Manter as pernas esticadas e fletir a coluna dorsal.",
      "Ficar em pontas dos pés para atingir o plano do leito.",
      "Inclinar o tronco lateralmente durante a transferência.",
      "Fletir os joelhos ao realizar esforço ou mobilização."
    ],
    "correctIndex": 3,
    "explanation": "Critério de estabilidade: 'Intervenção de enfermagem recomendada: Fletir os joelhos ao realizar esforço ou mobilização'.",
    "distractorAnalysis": [
      "Está incorreta: manter joelhos retos e dobrar as costas eleva o CG e sobrecarrega severamente os discos intervertebrais.",
      "Está incorreta: colocar-se em pontas dos pés eleva perigosamente o CG e reduz a base de apoio, desestabilizando o enfermeiro.",
      "Está incorreta: a flexão lateral assimétrica do tronco sob carga impõe torções discais perigosas e desvia o CG da base."
    ],
    "nursingApplication": "Fixa a intervenção de enfermagem formal lecionada pelo professor no resumo final da aula."
  },
  {
    "id": 1120,
    "topicId": 1,
    "question": "Ao subir escadas com canadianas, que regra mnemónica clássica de segurança biomecânica é ensinada aos utentes ('o bom sobe ao céu, o mau desce ao inferno')?",
    "options": [
      "Para SUBIR escadas: avança primeiro o membro lesionado e as canadianas em conjunto; para DESCER escadas: desce primeiro o membro são, seguido do membro lesionado e por fim das canadianas de apoio.",
      "Para SUBIR escadas: atiram-se ambas as canadianas para o degrau superior e salta-se com os dois pés juntos; para DESCER: salta-se diretamente com o membro operado mantendo as canadianas no degrau de cima.",
      "Para SUBIR escadas: sobem simultaneamente ambos os membros inferiores enquanto as canadianas permanecem no patamar inferior; para DESCER: descem primeiro as duas canadianas e depois salta-se com ambos os pés.",
      "Para SUBIR escadas: sobe primeiro o membro são (bom), seguido do membro lesionado e das canadianas; para DESCER: descem primeiro as canadianas e o membro lesionado, e só depois o membro são."
    ],
    "correctIndex": 3,
    "explanation": "Para subir, o membro são suporta a elevação do centro de gravidade com o quadríceps forte; para descer, as canadianas e o membro operado descem primeiro para receber o apoio controlado pelo membro são.",
    "distractorAnalysis": [
      "Está incorreta: Na subida o membro são deve subir primeiro para elevar a massa corporal com o seu quadríceps íntegro; na descida as canadianas e o membro fraco descem primeiro.",
      "Está incorreta: Lançar as canadianas ou saltar com ambos os pés em escadas elimina o controlo postural e provoca quedas traumáticas graves.",
      "Está incorreta: As canadianas devem acompanhar o membro fraco em cada degrau, garantindo base de sustentação contínua e partilha da carga corporal."
    ],
    "nursingApplication": "Mnemónica clássica de enfermagem para transposição segura de escadas com ajudas técnicas."
  },
  {
    "id": 1121,
    "topicId": 1,
    "question": "Durante o ciclo da marcha humana normal em terreno plano, como oscila espacialmente o Centro de Gravidade do indivíduo?",
    "options": [
      "Permanece rigorosamente fixo numa linha horizontal reta milimétrica sem qualquer variação vertical ou desvio lateral, porque o esqueleto humano atua como uma estrutura rígida perfeitamente nivelada.",
      "Descreve uma trajetória sinuosa tridimensional suave: oscila para cima e para baixo cerca de 4 a 5 cm (com pico no apoio médio) e de um lado para o outro cerca de 4 a 5 cm (em direção ao membro de apoio).",
      "Oscila verticalmente mais de cinquenta centímetros a cada passada com picos de descida máxima na fase de balanço e projeta-se vinte centímetros para fora da margem lateral dos pés a cada passo dado.",
      "Desloca-se exclusivamente em ziguezague no plano horizontal sem qualquer oscilação vertical, atingindo a velocidade máxima no instante exato em que ambos os pés se encontram em contacto com o piso."
    ],
    "correctIndex": 1,
    "explanation": "As oscilações sinusoidais do CG representam um compromisso evolutivo de conservação de energia, convertendo ciclicamente energia cinética em energia potencial gravítica (modelo do pêndulo invertido).",
    "distractorAnalysis": [
      "Está incorreta: O centro de gravidade humano oscila naturalmente cerca de 4-5 cm nos planos vertical e horizontal, poupando energia mecânica durante o passo.",
      "Está incorreta: Oscilações verticais de 50 cm seriam energeticamente insustentáveis e patológicas; as variações fisiológicas normais são de apenas alguns centímetros.",
      "Está incorreta: A marcha apresenta oscilação tridimensional (vertical e lateral simultâneas) e a velocidade varia ciclicamente ao longo das fases do apoio e balanço."
    ],
    "nursingApplication": "Descrição da curva de translação sinusoidal do baricentro na locomoção humana."
  },
  {
    "id": 1122,
    "topicId": 1,
    "question": "No modelo biomecânico da marcha como um 'pêndulo invertido', quando é que o Centro de Gravidade atinge a sua altura máxima e a sua velocidade mais baixa?",
    "options": [
      "No instante do contacto inicial do calcanhar com o pavimento, onde a energia cinética atinge o seu valor nulo e a gravidade suspende o avanço do corpo no espaço.",
      "Na fase de duplo apoio terminal quando ambos os pés contactam o chão em simultâneo, momento em que o centro de gravidade atinge a cota vertical mais elevada.",
      "Durante o apoio médio (mid-stance), quando o corpo passa por cima do membro de apoio estendido, convertendo energia cinética em energia potencial gravítica máxima.",
      "Durante a fase de oscilação terminal quando o pé que avança atinge a velocidade máxima no ar sem qualquer suporte das estruturas musculares antigravíticas."
    ],
    "correctIndex": 2,
    "explanation": "No apoio médio, o CG atinge o ápice da sua trajetória vertical (Ep = m · g · h é máxima e a velocidade de translação é temporariamente mínima), descendo de seguida para acelerar novamente.",
    "distractorAnalysis": [
      "Está incorreta: No contacto inicial do calcanhar o centro de gravidade está no ponto mais baixo da sua trajetória e não no ponto de altura máxima.",
      "Está incorreta: No duplo apoio o centro de gravidade situa-se no seu vale (altura mínima), atingindo a altura máxima durante o apoio médio unipedal.",
      "Está incorreta: No modelo do pêndulo invertido o comportamento do baricentro é governado pelo membro de apoio durante a passagem pela vertical no apoio médio."
    ],
    "nursingApplication": "Compreensão do intercâmbio entre energia cinética e potencial no pêndulo invertido da locomoção."
  },
  {
    "id": 1123,
    "topicId": 1,
    "question": "Numa balança de braços iguais (alavanca interfixa), uma massa de 5 kg está a 0,4 metros à esquerda do fulcro. Que massa deve ser colocada a 0,2 metros à direita para manter a balança em equilíbrio rotacional horizontal?",
    "options": [
      "5 kg, porque balanças de braços exigem sempre massas perfeitamente iguais em ambos os pratos.",
      "2,5 kg, porque metade da distância exige metade da massa segundo o princípio da inércia.",
      "20 kg, porque a massa à direita tem de ser o quádruplo da massa à esquerda para vencer o atrito.",
      "10 kg, pois para equilibrar os momentos: M1 = M2 ⇒ (5 kg · g) · 0,4 m = (m2 · g) · 0,2 m ⇒ 2 = 0,2 · m2 ⇒ m2 = 10 kg."
    ],
    "correctIndex": 3,
    "explanation": "F1 · b1 = F2 · b2 ⇒ 5 · 0,4 = m2 · 0,2 ⇒ 2 = 0,2 · m2 ⇒ m2 = 10 kg. Braço duas vezes mais curto exige o dobro da massa!",
    "distractorAnalysis": [
      "Está incorreta: Massas iguais só equilibram se os braços de alavanca forem rigorosamente iguais (b1 = b2).",
      "Está incorreta: Metade da distância exige o DOBRO da massa e não metade; a relação é inversamente proporcional.",
      "Está incorreta: 20 kg geraria um momento à direita de 4 N·m, fazendo a balança tombar para o lado direito."
    ],
    "nursingApplication": "Demonstra a regra basilar das alavancas em problemas práticos de cálculo estático."
  },
  {
    "id": 1124,
    "topicId": 1,
    "question": "Como se define uma Alavanca de 1.ª Classe (ou Alavanca Interfixa) na biomecânica clássica?",
    "options": [
      "É a alavanca em que a Força Resistente (R) se localiza no meio, entre o ponto de apoio (F) e a Força Potente (P), no arranjo F - R - P.",
      "É a alavanca em que a Força Potente (P) se aplica obrigatoriamente no ponto central entre o Fulcro (F) e a Resistência (R): F - P - R.",
      "É a alavanca em que o ponto de apoio se situa na extremidade móvel, aplicando-se a força resistente em ambos os topos da haste rígida.",
      "É a alavanca em que o ponto de apoio (Fulcro, F) se localiza entre a Força Potente (P) e a Força Resistente (R), seguindo o arranjo: P - F - R."
    ],
    "correctIndex": 3,
    "explanation": "Interfixa = fulcro fixo no meio. A ordem linear dos três elementos é Potência - Fulcro - Resistência (P-F-R).",
    "distractorAnalysis": [
      "Está incorreta: quando a resistência se localiza no meio entre o fulcro e a potência, trata-se de uma alavanca de 2.ª classe (inter-resistente).",
      "Está incorreta: quando a força potente atua entre o fulcro e a resistência, trata-se de uma alavanca de 3.ª classe (interpotente).",
      "Está incorreta: alavancas possuem fulcro, potência e resistência definidos; a alavanca interfixa é tipificada pelo fulcro no centro."
    ],
    "nursingApplication": "Mnemónica clássica dos manuais: o prefixo 'inter' indica quem está no meio: inter-fixa = fulcro no meio!"
  },
  {
    "id": 1125,
    "topicId": 1,
    "question": "Que valores pode assumir a Vantagem Mecânica (VM = bp / br) numa Alavanca de 1.ª Classe (Interfixa)?",
    "options": [
      "É sempre obrigatoriamente superior a 1 (VM > 1), garantindo sempre multiplicação de força independentemente do posicionamento do fulcro.",
      "Pode ser maior que 1 (VM > 1 se bp > br), igual a 1 (VM = 1 se bp = br) ou menor que 1 (VM < 1 se bp < br), dependendo da posição do fulcro.",
      "É sempre estritamente menor que 1 (VM < 1), provocando sempre perda mecânica de força para maximizar a amplitude angular do movimento.",
      "É sempre rigorosamente igual a 1 (VM = 1), pois o ponto de apoio central divide obrigatoriamente a haste em dois braços milimétricos iguais."
    ],
    "correctIndex": 1,
    "explanation": "Como o fulcro pode estar mais perto da resistência (ganho de força), no meio exato (equilíbrio de força) ou mais perto da potência (ganho de amplitude), a VM é versátil.",
    "distractorAnalysis": [
      "Está incorreta: alavancas de 1.ª classe só têm VM > 1 se o fulcro estiver mais próximo da resistência (bp > br); se bp < br, a VM será menor que 1.",
      "Está incorreta: a condição de VM < 1 é obrigatória apenas nas alavancas de 3.ª classe; na 1.ª classe a VM pode ser superior, igual ou inferior a 1.",
      "Está incorreta: o fulcro não tem de ficar no meio exato; a sua posição ao longo da haste é variável, modulando a vantagem mecânica."
    ],
    "nursingApplication": "Mostra a versatilidade funcional da alavanca interfixa na engenharia e na anatomia humana."
  },
  {
    "id": 1126,
    "topicId": 1,
    "question": "No corpo humano, qual é o exemplo clássico de Alavanca de 1.ª Classe (Interfixa) na articulação atlanto-occipital?",
    "options": [
      "A cabeça equilibrada sobre a articulação atlanto-occipital (entre o occipital e a primeira vértebra cervical C1 / atlas).",
      "O músculo bíceps braquial a fletir o antebraço sobre o braço na articulação umeroulnar durante a alimentação.",
      "O músculo tríceps sural a elevar o peso corporal sobre as cabeças dos metatarsos na elevação em pontas dos pés.",
      "O músculo quadríceps a tracionar o tendão rotuliano para estender a perna sobre a articulação do joelho na marcha."
    ],
    "correctIndex": 0,
    "explanation": "Fulcro = côndilos occipitais / atlas (no meio); Resistência = peso da face e parte anterior da cabeça (puxa para a frente/baixo); Potência = músculos extensores da nuca (trapézio/esplénio) que puxam para trás/baixo.",
    "distractorAnalysis": [
      "Está incorreta: a flexão do cotovelo pelo bíceps é o exemplo clássico de alavanca de 3.ª classe (interpotente), com a potência entre fulcro e carga.",
      "Está incorreta: a elevação sobre as pontas dos pés pelo tríceps sural atua como alavanca de 2.ª classe (inter-resistente), com o peso no centro.",
      "Está incorreta: a extensão do joelho com inserção na tuberosidade tibial distal ao fulcro do joelho funciona biomecanicamente como alavanca de 3.ª classe."
    ],
    "nursingApplication": "Exemplo anatómico emblemático de alavanca de 1.ª classe no corpo humano presente em todos os exames de biofísica."
  },
  {
    "id": 1127,
    "topicId": 1,
    "question": "Como se define uma Alavanca de 2.ª Classe (ou Alavanca Inter-resistente) na mecânica clássica?",
    "options": [
      "É a alavanca em que o ponto de apoio (Fulcro, F) se localiza obrigatoriamente no meio, entre a Força Potente e a Resistente (P - F - R).",
      "É a alavanca em que a Força Resistente (R) se localiza no meio, entre o ponto de apoio (Fulcro, F) e a Força Potente (P), seguindo o arranjo: F - R - P.",
      "É a alavanca em que a Força Potente (P) se situa no centro geométrico, entre o Fulcro articular e a carga resistente na extremidade (F - P - R).",
      "É um sistema em que não existem momentos de rotação, mantendo-se os segmentos esqueléticos em translação pura sem fulcro anatómico."
    ],
    "correctIndex": 1,
    "explanation": "Inter-resistente = resistência no meio. A ordem linear dos elementos é Fulcro - Resistência - Potência (F-R-P).",
    "distractorAnalysis": [
      "Está incorreta: o arranjo P - F - R (fulcro no centro) define uma alavanca de 1.ª classe (interfixa), como a articulação atlanto-occipital.",
      "Está incorreta: o arranjo F - P - R (potência no centro) define uma alavanca de 3.ª classe (interpotente), como a flexão do cotovelo pelo bíceps.",
      "Está incorreta: alavancas operam por rotação em torno de um fulcro articular (momento de força M = F·d), existindo sempre centro de rotação."
    ],
    "nursingApplication": "Mnemónica clássica: inter-resistente = a Resistência é quem se encontra entre os outros dois elementos!"
  },
  {
    "id": 1128,
    "topicId": 1,
    "question": "Qual é a propriedade física universal e obrigatória de QUALQUER Alavanca de 2.ª Classe (Inter-resistente)?",
    "options": [
      "A Vantagem Mecânica é sempre estritamente menor do que 1 (VM < 1), exigindo sempre mais força muscular para vencer a resistência aplicada.",
      "A Vantagem Mecânica é sempre rigorosamente igual a 1 (VM = 1), porque a conservação de energia impede qualquer ganho de força mecânica.",
      "A Vantagem Mecânica é SEMPRE maior do que 1 (VM > 1), porque o braço de potência é obrigatoriamente mais longo do que o braço de resistência (bp > br).",
      "A Vantagem Mecânica oscila entre 0,5 e 1,0 consoante o ângulo articular, invertendo a posição do ponto de apoio a cada ciclo de movimento."
    ],
    "correctIndex": 2,
    "explanation": "Como R está entre F e P, a distância de P ao fulcro (bp) engloba toda a haste, sendo sempre maior que a distância de R ao fulcro (br). Logo, VM = bp/br > 1 sempre!",
    "distractorAnalysis": [
      "Está incorreta: VM < 1 é a característica universal das alavancas de 3.ª classe; nas de 2.ª classe a vantagem mecânica é sempre estritamente superior a 1.",
      "Está incorreta: a conservação de energia mantém o trabalho igual (W = F·d), mas permite ganho de força (VM > 1) através do aumento da distância percorrida.",
      "Está incorreta: a configuração estrutural de 2.ª classe fixa o fulcro na ponta e a resistência no meio, garantindo bp > br em qualquer ângulo articular."
    ],
    "nursingApplication": "Regra de ouro teórica: alavanca de 2.ª classe é SEMPRE uma alavanca multiplicadora de força (vantagem de força)."
  },
  {
    "id": 1129,
    "topicId": 1,
    "question": "Qual das seguintes ferramentas do quotidiano hospitalar ou comum representa uma Alavanca de 2.ª Classe (Inter-resistente)?",
    "options": [
      "Uma tesoura cirúrgica comum (fulcro no parafuso de rotação central, força potente nos anéis e carga resistente nas pontas das lâminas).",
      "Uma pinça anatómica simples (fulcro na união elástica terminal, dedos a aplicar potência na parte central e pontas a segurar o tecido).",
      "O antebraço na flexão do cotovelo (fulcro na articulação umeral, inserção potente no rádio e resistência aplicada na extremidade da mão).",
      "Um carrinho de mão para transporte de materiais (fulcro na roda dianteira, carga resistente no meio na caçamba e força potente nas pegas)."
    ],
    "correctIndex": 3,
    "explanation": "No carrinho de mão: F (eixo da roda na ponta) - R (carga pesada no centro) - P (mãos do trabalhador nas pegas longas). VM > 1 poupa enorme esforço.",
    "distractorAnalysis": [
      "Está incorreta: a tesoura é uma alavanca de 1.ª classe (interfixa), onde o fulcro se situa entre o ponto de aplicação da potência e a resistência.",
      "Está incorreta: a pinça anatómica é uma alavanca de 3.ª classe (interpotente), com a força potente aplicada entre o fulcro e a resistência.",
      "Está incorreta: o sistema flexor do cotovelo é uma alavanca de 3.ª classe (interpotente), uma vez que o bíceps se insere entre o cotovelo e a mão."
    ],
    "nursingApplication": "Permite associar a geometria mecânica de transporte de cargas às alavancas de 2.ª classe."
  },
  {
    "id": 1130,
    "topicId": 1,
    "question": "No corpo humano, qual é o exemplo clássico de Alavanca de 2.ª Classe (Inter-resistente) na articulação tíbio-társica?",
    "options": [
      "A extensão da cabeça sobre a coluna cervical através dos músculos da nuca e trapézio superior em postura neutra.",
      "A flexão do cotovelo para aproximar a mão do ombro com uma carga pesada segurada firmemente na palma da mão.",
      "A elevação do calcanhar sobre as pontas dos pés (flexão plantar na marcha realizada pelo músculo tríceps sural / tendão de Aquiles).",
      "A abdução lateral do membro superior no plano frontal realizada pelo músculo deltoide médio na articulação glenoumeral."
    ],
    "correctIndex": 2,
    "explanation": "Fulcro = cabeças dos metatarsos apoiadas no solo; Resistência = peso do corpo transmitido pela tíbia no tornozelo (no meio); Potência = tração do tríceps sural no calcâneo (na ponta).",
    "distractorAnalysis": [
      "Está incorreta: a articulação atlanto-occipital na extensão cervical é o exemplo clássico de alavanca de 1.ª classe (interfixa, fulcro central).",
      "Está incorreta: a flexão do cotovelo pelo bíceps braquial é o exemplo clássico de alavanca de 3.ª classe (interpotente, potência central).",
      "Está incorreta: no tornozelo em flexão plantar, as cabeças dos metatarsos são o fulcro (F), o peso corporal desce pela tíbia (R no meio) e o tendão puxa o calcâneo (P na ponta), sendo 2.ª classe."
    ],
    "nursingApplication": "Exemplo biomecânico humano de 2.ª classe mais famoso da literatura médica internacional."
  },
  {
    "id": 1131,
    "topicId": 1,
    "question": "Como se define uma Alavanca de 3.ª Classe (ou Alavanca Interpotente) na física e biomecânica?",
    "options": [
      "É a alavanca em que o Ponto de Apoio (Fulcro) se localiza estritamente no meio, entre a Força Potente e a Força Resistente (arranjo: P - F - R).",
      "É a alavanca em que a Força Resistente se localiza no meio, entre o Ponto de Apoio e a Força Potente aplicada (arranjo: F - R - P).",
      "É a alavanca em que a Força Potente e a Força Resistente atuam no mesmo ponto geométrico, eliminando qualquer necessidade de fulcro ou apoio.",
      "É a alavanca em que a Força Potente (P) se localiza no meio, entre o ponto de apoio (Fulcro, F) e a Força Resistente (R), seguindo o arranjo: F - P - R."
    ],
    "correctIndex": 3,
    "explanation": "Interpotente = potência no meio. A ordem linear dos três elementos é Fulcro - Potência - Resistência (F-P-R).",
    "distractorAnalysis": [
      "Está incorreta: o arranjo P - F - R (fulcro no meio) corresponde à alavanca de 1.ª classe ou interfixa.",
      "Está incorreta: o arranjo F - R - P (resistência no meio) corresponde à alavanca de 2.ª classe ou inter-resistente.",
      "Está incorreta: todas as alavancas mecânicas necessitam obrigatoriamente de um fulcro de rotação e de braços de momento definidos."
    ],
    "nursingApplication": "Mnemónica definitiva: inter-potente = a Potência (força muscular) é quem está aplicada no meio!"
  },
  {
    "id": 1132,
    "topicId": 1,
    "question": "Qual é a propriedade biomecânica obrigatória e universal de QUALQUER Alavanca de 3.ª Classe (Interpotente)?",
    "options": [
      "A Vantagem Mecânica é SEMPRE menor do que 1 (VM < 1), porque o braço de potência é obrigatoriamente mais curto do que o braço de resistência (bp < br).",
      "A Vantagem Mecânica é sempre superior a 10 (VM > 10), permitindo que qualquer músculo levante cargas dez vezes mais pesadas que a sua força.",
      "O braço de potência é sempre igual ao braço de resistência (bp = br), funcionando com rendimento unitário invariável em todas as posturas.",
      "A força muscular exigida é sempre inferior ao peso da carga resistente movimentada pelo segmento esquelético articulado."
    ],
    "correctIndex": 0,
    "explanation": "Como P está entre F e R, bp é sempre menor que br. Logo, VM = bp/br < 1 sempre! Há desvantagem mecânica de força: o músculo tem de fazer MAIS força que a carga.",
    "distractorAnalysis": [
      "Está incorreta: em alavancas de 3.ª classe (interpotentes) o músculo insere-se próximo da articulação (bp < br), resultando sempre em VM < 1 (desvantagem de força e vantagem de velocidade/amplitude).",
      "Está incorreta: VM > 1 só ocorre em alavancas de 2.ª classe e em certas alavancas de 1.ª classe com braço de potência longo.",
      "Está incorreta: bp = br produziria VM = 1, o que não ocorre na anatomia das alavancas interpotentes do sistema osteomuscular humano."
    ],
    "nursingApplication": "Conceito nuclear: a alavanca de 3.ª classe exige um esforço muscular muito maior do que o peso que se segura na mão!"
  },
  {
    "id": 1133,
    "topicId": 1,
    "question": "Qual das seguintes ferramentas do quotidiano hospitalar é um exemplo clássico de uma Alavanca de 3.ª Classe (Interpotente)?",
    "options": [
      "Uma pinça hemostática de Pean com cremalheira (fulcro no parafuso articulado central, dedos nos anéis proximais e apreensão nas pontas estriadas).",
      "Uma pinça de dissecação cirúrgica (fulcro na junção das hastes na extremidade, os dedos aplicam a força potente no meio e as pontas seguram a resistência).",
      "Uma tesoura cirúrgica de ponta romba (fulcro no pino central, força potente aplicada pelas falanges nos anéis e corte resistente pelas lâminas).",
      "Um abre-cápsulas de frascos de soro (fulcro no topo da tampa, resistência na borda metálica inferior e força potente na extremidade do cabo)."
    ],
    "correctIndex": 1,
    "explanation": "Na pinça anatómica: F (articulação soldada na ponta) - P (dedos que comprimem a haste no centro) - R (gaze ou tecido seguro nas pontas).",
    "distractorAnalysis": [
      "Está incorreta: a pinça hemostática com cremalheira articula-se por um eixo central, constituindo uma alavanca interfixa de 1.ª classe.",
      "Está incorreta: a tesoura cirúrgica possui o fulcro entre a potência e a resistência, sendo uma alavanca de 1.ª classe e não de 3.ª classe.",
      "Está incorreta: o abre-cápsulas atua com a resistência entre o fulcro e o esforço manual do operador, configurando uma alavanca de 2.ª classe."
    ],
    "nursingApplication": "Permite ao estudante classificar com segurança as pinças cirúrgicas e laboratoriais na 3.ª classe mecânica."
  },
  {
    "id": 1134,
    "topicId": 1,
    "question": "Outro exemplo desportivo e mecânico comum de Alavanca de 3.ª Classe (Interpotente) é:",
    "options": [
      "Um pé-de-cabra utilizado para arrancar pregos (fulcro na curva metálica apoiada no chão, potência na extremidade longa e resistência na fenda).",
      "Um quebra-nozes mecânico de alavanca dupla (fulcro no pino de ligação distal, resistência no fruto ao centro e força potente nas duas hastes).",
      "Uma cana de pesca (fulcro na mão que segura a base, força potente exercida pela outra mão no meio e o peixe resistente puxando na ponta longa da linha).",
      "Um balancé de recreio infantil (fulcro no eixo central de apoio, força potente aplicada num assento e força resistente aplicada no outro extremo)."
    ],
    "correctIndex": 2,
    "explanation": "Na cana de pesca: a mão dianteira aplica grande força potente no meio com braço curto para movimentar a ponta da cana com enorme amplitude e velocidade.",
    "distractorAnalysis": [
      "Está incorreta: o pé-de-cabra apoia-se entre o ponto de esforço e a carga a extrair, funcionando como alavanca interfixa de 1.ª classe.",
      "Está incorreta: o quebra-nozes aloja a carga resistente entre o eixo articular e as mãos, constituindo uma alavanca de 2.ª classe.",
      "Está incorreta: o balancé apoia-se num pino central entre os dois corpos suspensos, sendo um exemplo clássico de alavanca de 1.ª classe."
    ],
    "nursingApplication": "Fixa o princípio da troca de força por velocidade e alcance nas alavancas interpotentes."
  },
  {
    "id": 1135,
    "topicId": 1,
    "question": "Que papel desempenha o músculo braquial anterior em conjunto com o bíceps na flexão do cotovelo?",
    "options": [
      "Atua como antagonista extensor do cotovelo, travando a aceleração da flexão gerada pela contração primária do bíceps.",
      "Funciona como músculo supinador acessório que só gera força de flexão quando o antebraço se encontra em pronação neutra.",
      "É o flexor primário do cotovelo, inserindo-se na ulna e atuando também como alavanca de 3.ª classe com tração mecânica direta.",
      "Atua como alavanca de 1.ª classe ao empurrar o olecrano posteriormente a partir da face dorsal da articulação umeroulnar."
    ],
    "correctIndex": 2,
    "explanation": "O braquial anterior é um potente flexor interpotente que gera torque em conjunto com o bíceps e o braquiorradial.",
    "distractorAnalysis": [
      "Está incorreta: o braquial anterior é agonista flexor (e não antagonista extensor), colaborando diretamente na flexão da articulação.",
      "Está incorreta: ao inserir-se na ulna (que não roda durante a pronação/supinação), o braquial flexiona o cotovelo em qualquer posição do antebraço.",
      "Está incorreta: o braquial situa-se na face anterior do braço e traciona anteriormente a ulna (alavanca de 3.ª classe), e não posteriormente."
    ],
    "nursingApplication": "Complementa a anatomia funcional das alavancas do membro superior."
  },
  {
    "id": 1136,
    "topicId": 1,
    "question": "Num problema de alavanca interfixa, uma barra de 3,6 m de comprimento total está dividida na proporção 3x = 3,6 m. Qual é o valor de x que define a geometria dos braços?",
    "options": [
      "x = 3,6 / 3 = 1,2 m, resultando num braço menor de 1,2 m e num braço maior de 2,4 m (2x).",
      "x = 3,6 × 3 = 10,8 m, esticando a barra para além do seu comprimento físico.",
      "x = 0,5 m, dividindo arbitrariamente a barra ao meio sem respeitar a equação.",
      "x = 3,6 m, assumindo que x é o comprimento total da própria barra."
    ],
    "correctIndex": 0,
    "explanation": "Resolução: 3x = 3,6 ⇒ x = 1,2 m. A barra tem uma secção de x (1,2 m) e outra de 2x (2,4 m), somando 3,6 m.",
    "distractorAnalysis": [
      "Está incorreta: A operação matemática correta é a divisão linear simples: 3,6 / 3 = 1,2 m.",
      "Está incorreta: Metade de 3,6 m seria 1,8 m e violaria a proporção 3x = 3,6 m dada no problema.",
      "Está incorreta: Se x fosse 3,6 m, 3x seria 10,8 m, ultrapassando o comprimento da barra."
    ],
    "nursingApplication": "Validação dos passos preliminares de cálculo geométrico da biomecânica muscular do cotovelo."
  },
  {
    "id": 1137,
    "topicId": 1,
    "question": "Que tipo de alavanca está representada num sistema com o ponto de apoio (fulcro) situado entre a potência e a resistência?",
    "options": [
      "Alavanca inter-resistente (2.ª classe), na qual a carga se posiciona necessariamente entre o fulcro e a força potente.",
      "Alavanca interpotente (3.ª classe), caracterizada por ter a força potente aplicada entre o fulcro e a resistência.",
      "Alavanca mista ou neutra, na qual os momentos de força se anulam sem necessidade de apoio mecânico definido.",
      "Alavanca interfixa (1.ª classe), na qual o ponto de apoio (fulcro) se localiza entre a força potente e a força resistente."
    ],
    "correctIndex": 3,
    "explanation": "Trata-se de uma: 'Alavanca interfixa', com fulcro intermediário entre FP e FR.",
    "distractorAnalysis": [
      "Está incorreta: na alavanca inter-resistente (2.ª classe) é a resistência que fica entre o fulcro e a potência, e não o ponto de apoio.",
      "Está incorreta: na alavanca interpotente (3.ª classe) é a força potente que se localiza entre o fulcro e a força resistente.",
      "Está incorreta: a classificação física assenta em três categorias bem definidas; fulcro intermediário define inequivocamente a alavanca interfixa."
    ],
    "nursingApplication": "Classificação correta e identificação visual dos elementos da alavanca da alavanca interfixa."
  },
  {
    "id": 1138,
    "topicId": 1,
    "question": "Qual é a vantagem mecânica ideal (VMI = bP / bR) do sistema de alavanca interfixa calculado para esta alavanca interfixa?",
    "options": [
      "VMI = 2,4 m / 1,2 m = 2,0, o que significa que o operador só precisa de exercer metade da força da carga para a equilibrar.",
      "VMI = 1,2 m / 2,4 m = 0,5, o que exige que o profissional aplique o dobro da força peso da carga suspensa na alavanca.",
      "VMI = 2,4 m × 1,2 m = 2,88, expressando a energia cinética desenvolvida pela barra metálica durante a rotação no ar.",
      "VMI = 2,4 m - 1,2 m = 1,2 m, correspondendo à distância que a carga se eleva acima do solo da sala de fisioterapia."
    ],
    "correctIndex": 0,
    "explanation": "Com um braço potente duas vezes maior que o braço resistente, a vantagem mecânica é de 2, permitindo levantar 20 N com apenas 10 N.",
    "distractorAnalysis": [
      "Está incorreta: a VMI calcula-se pela razão bp / br (2,4 / 1,2 = 2,0); inverter para br / bp calcularia a desvantagem de força.",
      "Está incorreta: vantagem mecânica é uma razão dimensional e não o produto dos comprimentos das secções da alavanca.",
      "Está incorreta: subtrair os comprimentos dá apenas a diferença geométrica de braços em metros e não a vantagem mecânica de forças."
    ],
    "nursingApplication": "Consolida a relação quantitativa entre razão de braços e multiplicação de força."
  },
  {
    "id": 1139,
    "topicId": 1,
    "question": "Ao transpor um obstáculo ou degrau com uma cadeira de rodas, porque é que o enfermeiro deve pisar a alavanca posterior inferior (pedal de basculamento) da cadeira?",
    "options": [
      "Porque empurrar exclusivamente os punhos superiores para baixo ativa uma alavanca inter-resistente com maior vantagem mecânica, poupando a musculatura lombar mesmo em degraus altos.",
      "Porque acionar esse pedal ativa de imediato os travões de estacionamento bilaterais, fixando as rodas traseiras para impedir que a cadeira deslize para trás durante a manobra.",
      "Porque o pedal projeta o centro de gravidade do conjunto diretamente para a frente das rodas direcionadas, facilitando a transposição do obstáculo por compressão das guias frontais.",
      "Porque essa alavanca cria um momento que ajuda a inclinar a cadeira para trás em torno do eixo das rodas traseiras (fulcro), elevando as pequenas rodas dianteiras sem forçar a coluna do enfermeiro."
    ],
    "correctIndex": 3,
    "explanation": "O pedal posterior funciona como alavanca interfixa que aproveita o peso do enfermeiro para elevar a dianteira da cadeira com segurança e conforto ergonómico.",
    "distractorAnalysis": [
      "Está incorreta: puxar ou empurrar os punhos superiores sem o pedal exige esforços lombares elevados e momentos desfavoráveis para elevar as rodas dianteiras.",
      "Está incorreta: o pedal de basculamento serve para elevar a frente da cadeira através de momento de rotação e não atua como travão de estacionamento.",
      "Está incorreta: o objetivo biomecânico do pedal é bascular o centro de gravidade para trás em redor do eixo traseiro, aliviando a carga sobre as rodas dianteiras."
    ],
    "nursingApplication": "Técnica ergonómica e segura de transposição de barreiras arquitetónicas na assistência ao doente."
  },
  {
    "id": 1140,
    "topicId": 1,
    "question": "Porque é que as alavancas do corpo humano (predominantemente de 3.ª classe / interpotentes) exigem um conhecimento profundo de ergonomia por parte dos cuidadores?",
    "options": [
      "Porque as alavancas interpotentes oferecem uma vantagem mecânica de força astronómica, permitindo que um enfermeiro levante um doente de cem quilos com um único dedo sem qualquer contração dos grandes músculos das pernas ou da coluna vertebral.",
      "Porque os músculos humanos trabalham em desvantagem mecânica de força (braços de alavanca curtos face aos braços resistentes), fazendo com que pequenas cargas levantadas longe do corpo gerem milhares de Newtons de tração muscular e compressão articular interna.",
      "Porque as alavancas corporais anulam por completo a necessidade de contração muscular voluntária, funcionando através de energia hidroelétrica gerada pela pressão arterial que ergue automaticamente os membros superiores durante as mobilizações.",
      "Porque o corpo humano é composto exclusivamente por alavancas de segunda classe (inter-resistentes) que eliminam qualquer tensão compressiva sobre os discos vertebrais lombares L5-S1 mesmo durante o levantamento de cargas volumosas no leito."
    ],
    "correctIndex": 1,
    "explanation": "Compreender a razão de alavanca do cotovelo (1:7) e da coluna lombar (1:7 a 1:10) explica porque é que o enfermeiro nunca deve mobilizar cargas com braços esticados ou costas dobradas.",
    "distractorAnalysis": [
      "Está incorreta: As alavancas interpotentes têm vantagem de amplitude e velocidade, mas desvantagem de força, exigindo forças musculares internas elevadas.",
      "Está incorreta: O movimento humano é acionado por contração muscular gerada por ATP e potenciais de ação, e não por energia hidroelétrica arterial.",
      "Está incorreta: A grande maioria das alavancas esqueléticas é interpotente (3.ª classe); a coluna funciona em grande desvantagem mecânica de força."
    ],
    "nursingApplication": "Consolidação biomecânica do paradoxo evolutivo das alavancas interpotentes humanas."
  },
  {
    "id": 1141,
    "topicId": 1,
    "question": "Quando um enfermeiro necessita de travar uma maca pesada que se aproxima da porta da enfermaria, que postura biomecânica deve adotar?",
    "options": [
      "Fletir ligeiramente os joelhos, afastar os pés na direção anteroposterior e usar o peso corporal para contrariar a inércia da maca.",
      "Manter os joelhos perfeitamente bloqueados e os pés juntos na ponta dos dedos para minimizar a base de sustentação.",
      "Dobrar as costas para a frente com a coluna curvada em cifose extrema, puxando unicamente com os músculos lombares.",
      "Saltar para o topo do colchão da maca em movimento para que o impacto dos pés atue como travão dinâmico."
    ],
    "correctIndex": 0,
    "explanation": "Afastar os pés na direção do movimento alarga a base de apoio e permite que a linha de gravidade permaneça centrada durante a desaceleração.",
    "distractorAnalysis": [
      "Está incorreta: Pés juntos e joelhos bloqueados tornam o equilíbrio instável, aumentando exponencialmente o risco de queda do enfermeiro.",
      "Está incorreta: Fletir a coluna sem fletir os joelhos sobrecarrega os discos intervertebrais L4-L5 e L5-S1 com risco de hérnia discal.",
      "Está incorreta: Saltar para a maca é uma atitude perigosa que desestabiliza o equipamento e pode originar acidentes graves."
    ],
    "nursingApplication": "A postura correta protege o sistema musculoesquelético do enfermeiro ao absorver as forças inerciais da travagem."
  },
  {
    "id": 1142,
    "topicId": 1,
    "question": "Porque é que o calçado com sola antiderrapante de borracha é indispensável para o enfermeiro ao travar ou acelerar cargas móveis?",
    "options": [
      "Porque a sola de borracha reduz o peso corporal do cuidador em cerca de metade através da compressão elástica das microbolhas de ar.",
      "Porque o piso hospitalar polido necessita de ser continuamente desinfetado através da libertação passiva de iões presentes na borracha.",
      "Porque a sola antiderrapante de borracha elimina a inércia dos membros inferiores durante manobras de elevação rápida de cargas.",
      "Porque fornece a força de atrito estático com o piso necessária para os pés empurrarem o chão sem escorregar durante o esforço inercial."
    ],
    "correctIndex": 3,
    "explanation": "Para exercer uma força para a frente ou para trás na maca, os pés têm de aplicar força oposta no chão (3.ª Lei); sem atrito, os pés escorregam.",
    "distractorAnalysis": [
      "Está incorreta: a sola de borracha não altera a massa ou o peso corporal do profissional; atua apenas na interface de contacto aumentando o coeficiente de atrito.",
      "Está incorreta: o papel biomecânico primordial do calçado é a estabilidade postural e aderência ao solo, não a ação desinfetante química do piso.",
      "Está incorreta: a inércia dos membros é determinada pela sua massa biológica intrínseca e não é anulada pelo calçado de trabalho."
    ],
    "nursingApplication": "Calçado sem aderência multiplica o risco de quedas do profissional e perda de controlo de macas em corredores molhados."
  },
  {
    "id": 1143,
    "topicId": 1,
    "question": "Um enfermeiro empurra um andarilho vazio (5 kg) e depois o mesmo andarilho com um doente apoiado (massa total 85 kg) com a mesma força de 30 N. A razão entre as acelerações (a_vazio / a_carregado) é:",
    "options": [
      "17 (a_vazio é 17 vezes maior que a_carregado, pois 85 kg / 5 kg = 17).",
      "0,29 (a_vazio é 0,29 vezes a_carregado, pois 5 kg / 17 = 0,29), invertendo a razão massa-aceleração.",
      "1 (ambas as acelerações são iguais, pois a força do motor é constante e a massa não influencia a aceleração).",
      "289 (a razão eleva-se ao quadrado: (85/5)² = 17² = 289), confundindo energia com aceleração linear."
    ],
    "correctIndex": 3,
    "explanation": "a1 = 30/5 = 6 m/s²; a2 = 30/85 ≈ 0,353 m/s²; a1/a2 = 85/5 = 17. A aceleração é inversamente proporcional às massas.",
    "distractorAnalysis": [
      "Está incorreta: a razão é a_vazio/a_carregado = m_carregado/m_vazio = 85/5 = 17; inverter a razão (5/17 ≈ 0,29) confunde qual é maior.",
      "Está incorreta: pela 2.ª Lei de Newton (a = F/m), com força constante, maior massa produz menor aceleração; a massa influencia diretamente a aceleração.",
      "Está incorreta: elevar ao quadrado aplica-se a relações de energia cinética (Ec = ½mv²), não à proporção inversa entre massa e aceleração linear."
    ],
    "nursingApplication": "Sensibiliza para a diferença drástica de manuseamento entre equipamentos hospitalares vazios e com utentes."
  },
  {
    "id": 1144,
    "topicId": 1,
    "question": "O uso de calçado com sola antiderrapante de borracha de alta fricção é uma exigência de segurança hospitalar porque:",
    "options": [
      "Eliminar completamente o peso do profissional durante a movimentação e transferência de cargas elevadas no leito.",
      "Aumentar a amplitude de flexão dorsal do tornozelo para valores superiores a noventa graus sexagesimais na postura ereta.",
      "Garantir um coeficiente de atrito estático elevado com o solo para que a reação do piso forneça propulsão segura sem escorregamento.",
      "Reduzir a pressão arterial diastólica nas artérias plantares através da absorção de energia mecânica pelo elastómero."
    ],
    "correctIndex": 2,
    "explanation": "Calçado adequado assegura que a força de atrito máxima (Fat_max = μ·N) é suficiente para prevenir escorregamentos nas mudanças de ritmo.",
    "distractorAnalysis": [
      "Está incorreta: o calçado de borracha não altera o peso gravitacional da pessoa; atua melhorando a aderência de contacto com o piso.",
      "Está incorreta: a goniometria fisiológica do tornozelo é determinada pela anatomia articular e não pelo material da sola antiderrapante.",
      "Está incorreta: o papel biomecânico da sola antiderrapante é a estabilidade de atrito no solo e não a alteração hemodinâmica pressórica."
    ],
    "nursingApplication": "Medida fundamental de saúde ocupacional na prevenção da principal causa de acidentes de trabalho em enfermagem: as quedas por escorregamento."
  },
  {
    "id": 1145,
    "topicId": 1,
    "question": "Na postura de pé bípede humana ereta normal, como se caracteriza o polígono da Base de Sustentação (BS)?",
    "options": [
      "É a área convexa delimitada pelo contorno exterior das duas plantas dos pés e pelo espaço compreendido entre ambos.",
      "É restrita unicamente aos pontos de contacto cutâneo direto no solo sob o calcanhar e as cabeças dos metatarsos dos pés.",
      "É uma linha reta imaginária transversal que une os maléolos mediais dos dois tornozelos no plano frontal de apoio.",
      "É a área circular projetada verticalmente no pavimento a partir do contorno anatómico dos rebordos da bacia pélvica."
    ],
    "correctIndex": 0,
    "explanation": "Qualquer ponto entre os bordos externos dos sapatos faz parte da base de sustentação; enquanto a vertical do CG cair nesta área, a pessoa mantém-se de pé.",
    "distractorAnalysis": [
      "Está incorreta: a base de sustentação inclui não apenas as áreas de contacto físico, mas também toda a área contida entre os bordos externos dos pés.",
      "Está incorreta: a base de apoio é uma área bidimensional (polígono de suporte), e não uma simples linha unidimensional entre os maléolos.",
      "Está incorreta: a base é delimitada pelas extremidades inferiores de suporte no solo, e não pela projeção dimensional da cintura pélvica."
    ],
    "nursingApplication": "Conceito estruturante que define a fronteira geométrica entre o equilíbrio estável e a queda humana."
  },
  {
    "id": 1146,
    "topicId": 1,
    "question": "Como se realiza formalmente a manobra clínica do Teste de Romberg para avaliar o equilíbrio estático do utente?",
    "options": [
      "O utente caminha velozmente de costas sobre uma linha reta pintada no solo durante cem metros, mantendo pesos de dois quilos equilibrados na palma de cada uma das mãos abertas.",
      "O utente permanece de pé com os pés juntos e os braços junto ao corpo, primeiro de olhos abertos e depois fechando os olhos durante 20 a 30 segundos, sob atenta vigilância do enfermeiro.",
      "O utente senta-se numa cadeira giratória de escritório rodando a alta velocidade durante dois minutos com os olhos vendados, verificando-se de seguida se consegue manter o pulso radial.",
      "O enfermeiro pede ao doente para saltar num só pé alternadamente com os olhos fechados enquanto segura na campainha de chamada com o membro superior contralateral erguido."
    ],
    "correctIndex": 1,
    "explanation": "Com os pés juntos a base de sustentação é reduzida ao mínimo; fechar os olhos retira a compensação visual, testando diretamente a proprioceção e a função vestibular.",
    "distractorAnalysis": [
      "Está incorreta: o Teste de Romberg é estático, realizado em repouso com pés unidos, e não uma marcha rápida de costas com sobrecargas nas mãos.",
      "Está incorreta: rodar numa cadeira giratória avalia a estimulação vestibular rotatória (teste rotatório), não correspondendo ao Teste de Romberg clássico.",
      "Está incorreta: o teste avalia a oscilação postural com pés juntos no solo; exigir saltos unipodais de olhos fechados causaria quedas desnecessárias e imediatas."
    ],
    "nursingApplication": "Exame neurológico de cabeceira padronizado que o enfermeiro executa para despiste de ataxias sensitivas e vestibulares."
  },
  {
    "id": 1147,
    "topicId": 1,
    "question": "Como é que os fármacos opioides utilizados no controlo da dor moderada a grave (ex: morfina, fentanil) interferem com a biomecânica da postura?",
    "options": [
      "Aumentam a rigidez dos ligamentos articulares em mais de duzentos por cento, impedindo a flexão dos joelhos e forçando o doente a caminhar de pernas imóveis.",
      "Produzem sonolência, ataxia central, tonturas e atraso no processamento dos estímulos proprioceptivos vestibulares, tornando as transições posturais instáveis.",
      "Destroem a camada superficial da pele das plantas dos pés pelo suor, eliminando o atrito estático com o solo e provocando deslizamento dos calçados.",
      "Estimulam a atividade dos canais semicirculares do labirinto a duplicar a velocidade de processamento visual, gerando aceleração contínua do tronco."
    ],
    "correctIndex": 1,
    "explanation": "O efeito depressor central dos opioides altera a precisão do reflexo postural que mantém a linha de gravidade no centro do polígono de apoio.",
    "distractorAnalysis": [
      "Está incorreta: os opioides causam depressão motora central e descoordenação, e não calcificação ou enrijecimento estrutural dos ligamentos do joelho.",
      "Está incorreta: os efeitos adversos dos opioides são neurológicos e sistémicos (sedação, lentificação), não destruindo os tecidos epidérmicos dos pés.",
      "Está incorreta: os opioides reduzem o alerta cortical e deprimem o processamento vestibular, resultando em respostas posturais lentas e instabilidade da marcha."
    ],
    "nursingApplication": "Instrui o enfermeiro a associar medidas não farmacológicas de alívio da dor e a supervisionar rigorosamente as primeiras deambulações sob analgesia com opioides."
  },
  {
    "id": 1148,
    "topicId": 1,
    "question": "Como é que os exercícios em 'Prancha de Freeman' (prancha basculante de madeira apoiada num hemisfério central) treinam o equilíbrio na reabilitação motora?",
    "options": [
      "Eliminando a necessidade de ativação dos fusos neuromusculares e dos órgãos tendinosos de Golgi nos membros inferiores.",
      "Aumentando a densidade óssea da tíbia em cinquenta por cento através da aplicação de frequências sonoras mecânicas puras.",
      "Fixando as articulações do tornozelo num molde rígido inelástico para impedir qualquer tipo de movimento no plano frontal.",
      "Desafiando continuamente o equilíbrio dinâmico, obrigando o sistema nervoso e proprioceptores a coordenar microajustes reflexos rápidos."
    ],
    "correctIndex": 3,
    "explanation": "O hemisfério cria instabilidade em todas as direções; o sistema neuromuscular aprende a antecipar e corrigir perturbações da linha de gravidade em relação ao ponto de apoio.",
    "distractorAnalysis": [
      "Está incorreta: a prancha basculante de Freeman treina precisamente a reatividade proprioceptiva dos fusos e órgãos de Golgi na anca e tornozelo.",
      "Está incorreta: o mecanismo terapêutico é o treino sensoriomotor do equilíbrio e proprioceção articular e não a osteogénese acústica.",
      "Está incorreta: a prancha é móvel e instável justamente para permitir a mobilização controlada e reabilitação neuromuscular ativa."
    ],
    "nursingApplication": "Exercício de eleição em fisioterapia e enfermagem de reabilitação na prevenção de recidivas de entorses do tornozelo."
  },
  {
    "id": 1149,
    "topicId": 1,
    "question": "O que é o método de biofeedback visual por posturografia dinâmica computorizada utilizado nos centros avançados de reabilitação?",
    "options": [
      "Um capacete com sensores térmicos que aquece o couro cabeludo sempre que o doente pensa em movimentar as pernas, induzindo a contração mecânica forçada dos músculos tibiais anteriores.",
      "O utente permanece sobre uma plataforma de forças ligada a um ecrã que projeta em tempo real a posição do seu Centro de Gravidade, treinando o doente a manter o ponto no centro do alvo estável.",
      "Uma câmara de vídeo que grava a passada do utente para reproduzir o vídeo em câmara lenta durante a noite enquanto o indivíduo dorme para transferir os movimentos por via inconsciente.",
      "Um dispositivo mecânico que aplica estímulos de choque nos maléolos internos do doente sempre que este desvia a coluna lombar da posição perfeitamente vertical no espaço do gabinete."
    ],
    "correctIndex": 1,
    "explanation": "O feedback visual direto permite ao doente 'ver' a sua linha de gravidade e aprender conscientemente a efetuar pequenas correções neuromusculares de equilíbrio que não conseguia sentir pela proprioceção.",
    "distractorAnalysis": [
      "Está incorreta: o biofeedback posturográfico baseia-se em plataformas de forças com retroalimentação visual de equilíbrio, e não em estimulação térmica craniana.",
      "Está incorreta: a posturografia dinâmica exige envolvimento ativo em tempo real com autocorreção voluntária motora, não operando por projeções noturnas passivas.",
      "Está incorreta: o treino utiliza informações visuais em ecrã como guia de reforço de autocorreção postural, sem recorrer a estímulos aversivos punitivos."
    ],
    "nursingApplication": "Tecnologia de ponta em biofísica aplicada que acelera a recuperação motora após AVC e traumatismos crânio-encefálicos."
  },
  {
    "id": 1150,
    "topicId": 1,
    "question": "Quando o joelho flete além de 90° num agachamento profundo sob carga, que força biomecânica sofre um aumento exponencial?",
    "options": [
      "A força de tração longitudinal no ligamento colateral medial, que é excessivamente distendida pelo alargamento do espaço articular medial sob a carga do tronco.",
      "A força de cisalhamento no tendão de Aquiles, decorrente do escorregamento anterior da tíbia sobre o tálus sob o peso corporal na descida profunda da bacia.",
      "A força de atrito viscoso gerada pelo líquido sinovial, que endurece a articulação para travar passivamente a flexão e proteger os meniscos fibrocartilagíneos.",
      "A força de compressão retropatelar (entre a face posterior da patela e a tróclea femoral), devida ao vetor resultante da tração combinada do quadríceps e do tendão patelar."
    ],
    "correctIndex": 3,
    "explanation": "Em flexões superiores a 90°, a componente resultante empurra a patela contra o fémur com forças que podem superar 5 a 7 vezes o peso corporal, recomendando-se fletir os joelhos até cerca de 90°.",
    "distractorAnalysis": [
      "Está incorreta: a força com aumento mais crítico e clinicamente documentado no agachamento profundo é a compressão retropatelar e não a tração colateral.",
      "Está incorreta: o tendão de Aquiles atua no tornozelo e pé; a sobrecarga articular crítica na flexão acentuada do joelho concentra-se na articulação patelofemoral.",
      "Está incorreta: o líquido sinovial proporciona lubrificação hidrodinâmica eficaz e não atua como travão viscoso rígido no agachamento profundo."
    ],
    "nursingApplication": "Refinamento técnico sobre os limites de segurança da flexão dos joelhos no trabalho hospitalar."
  },
  {
    "id": 1151,
    "topicId": 1,
    "question": "O que é a Linha de Gravidade (LG) na biomecânica da postura humana?",
    "options": [
      "É a linha horizontal imaginária que une as cristas ilíacas anteriores para avaliar a simetria da bacia no plano frontal ortostático.",
      "É o traçado da curvatura da coluna vertebral no plano sagital que liga a vértebra C7 ao sacro para medir o ângulo de cifose dorsal.",
      "É a linha vertical imaginária que passa pelo Centro de Gravidade e se projeta perpendicularmente em direção ao centro da Terra ao longo do vetor peso.",
      "É o eixo oblíquo que atravessa a articulação do joelho e conecta os maléolos tibiais durante a fase de balanço da marcha funcional."
    ],
    "correctIndex": 2,
    "explanation": "A linha de gravidade representa a direção de ação da força peso (P = m · g); para haver equilíbrio, esta linha tem obrigatoriamente de cair dentro da base de sustentação.",
    "distractorAnalysis": [
      "Está incorreta: a linha inter-ilíaca é um referencial horizontal anatómico e não a linha vertical gravítica de projeção do peso.",
      "Está incorreta: o perfil sagital da coluna avalia curvaturas vertebrais (lordose/cifose), enquanto a Linha de Gravidade é rigorosamente vertical.",
      "Está incorreta: a Linha de Gravidade é vertical e segue o vetor da força peso, não sendo um eixo oblíquo de alinhamento articular."
    ],
    "nursingApplication": "Definição concisa da linha de gravidade e seu significado físico."
  },
  {
    "id": 1152,
    "topicId": 1,
    "question": "Quando a linha de gravidade de um utente se desloca para além dos bordos da sua base de sustentação, o que acontece imediatamente ao equilíbrio?",
    "options": [
      "O equilíbrio é rompido e ocorre instabilidade com risco imediato de queda, a menos que o indivíduo realize uma resposta corretiva motora (dar um passo) para restaurar a base sob a nova posição da LG.",
      "O equilíbrio torna-se espontaneamente mais estável, pois a projeção externa da linha de gravidade gera uma força de reação do solo que bloqueia a oscilação postural.",
      "A aceleração angular de tombo é anulada pela rigidez passiva dos ligamentos do tornozelo, permitindo manter o corpo inclinado sem qualquer gasto energético ativo.",
      "O centro de gravidade desloca-se autonomamente para o plano posterior do crânio, restabelecendo o alinhamento vertical da bacia sem qualquer intervenção motora."
    ],
    "correctIndex": 0,
    "explanation": "Na estabilidade postural: linha de gravidade próxima ou fora dos bordos da base gera condição de instabilidade severa.",
    "distractorAnalysis": [
      "Está incorreta: quando a LG sai da base de sustentação o torque do peso atua desestabilizando o corpo, provocando queda iminente.",
      "Está incorreta: os ligamentos do tornozelo não conseguem suportar passivamente o momento do peso corporal fora da base sem suporte do solo.",
      "Está incorreta: o centro de gravidade não tem movimento autónomo; a sua posição depende estritamente da distribuição real das massas corporais."
    ],
    "nursingApplication": "Regra fundamental de ouro da estabilidade estática e dinâmica: a linha deve cair dentro da base."
  },
  {
    "id": 1153,
    "topicId": 1,
    "question": "Durante a marcha normal humana, como se comporta a linha de gravidade em relação à base de sustentação?",
    "options": [
      "Permanece estritamente imóvel e perfeitamente imutável no centro geométrico entre os dois pés durante a totalidade das fases de oscilação e apoio simples da marcha humana.",
      "Desloca-se ciclicamente para a frente, saindo deliberadamente da base do pé de apoio numa 'queda para a frente controlada', que é interrompida pelo contacto inicial do pé oposto no solo.",
      "Desloca-se continuamente para trás em direção aos calcanhares, gerando um momento extensor que empurra ativamente o centro de gravidade em sentido retrógrado ao avanço.",
      "Mantém-se circunscrita ao interior do bordo medial do pé oscilante no ar, garantindo que o membro que avança sustente o peso corporal antes de estabelecer contacto com o solo."
    ],
    "correctIndex": 1,
    "explanation": "A marcha é classicamente definida em biomecânica como uma sucessão contínua de desequilíbrios para a frente e recuperações ativas da base de suporte.",
    "distractorAnalysis": [
      "Está incorreta: A marcha exige o avanço dinâmico da linha de gravidade para fora do pé de apoio, não permanecendo estática entre ambos os pés.",
      "Está incorreta: A linha de gravidade avança no sentido da progressão da marcha; se recuasse para os calcanhares provocaria a paragem ou queda posterior.",
      "Está incorreta: O pé oscilante encontra-se no ar sem contacto com o pavimento, não podendo conter a linha de gravidade nem suportar peso."
    ],
    "nursingApplication": "Conceito biomecânico avançado da marcha como perda e recuperação controlada do equilíbrio."
  },
  {
    "id": 1154,
    "topicId": 1,
    "question": "Como é definida a Base de Sustentação (BS) na biomecânica da postura?",
    "options": [
      "É a distância linear vertical medida entre a segunda vértebra sagrada e o ponto anatómico de apoio mais distal do membro inferior em repouso ereto.",
      "É a força de atrito estático desenvolvida entre as superfícies plantares dos calçados e o pavimento durante o início da fase de aceleração da marcha.",
      "É a linha vertical imaginária perpendicular ao solo que une o centro de gravidade corporal ao ponto de contacto anatómico do pé dominante de apoio.",
      "É a área geométrica delimitada por todos os pontos de contacto de um corpo com a superfície que o suporta, incluindo o espaço intermédio entre eles."
    ],
    "correctIndex": 3,
    "explanation": "Definição biomecânica: 'Área geométrica delimitada por todos os pontos de contacto de um corpo com a superfície que o suporta'.",
    "distractorAnalysis": [
      "Está incorreta: A base de sustentação é uma área bidimensional de suporte no solo e não uma medida linear de altura do centro de gravidade.",
      "Está incorreta: O atrito é uma força tangencial de resistência ao deslizamento e não a superfície geométrica que delimita o suporte corporal.",
      "Está incorreta: A linha vertical perpendicular que passa pelo centro de gravidade corresponde à Linha de Gravidade e não à Base de Sustentação."
    ],
    "nursingApplication": "Memorização rigorosa da definição de base de sustentação."
  },
  {
    "id": 1155,
    "topicId": 1,
    "question": "Quando uma pessoa está de pé em repouso com os dois pés apoiados no chão a 30 cm de distância um do outro, a base de sustentação corresponde a:",
    "options": [
      "À área delimitada pelas solas dos dois sapatos MAIS toda a área do solo compreendida no espaço entre ambos os pés (polígono de sustentação).",
      "Apenas à soma das áreas individuais das solas dos sapatos, excluindo qualquer espaço ou superfície livre de contacto situada entre os pés.",
      "À distância milimétrica linear entre os maléolos internos dos tornozelos multiplicada pelo peso corporal total medido na balança hospitalar.",
      "Exclusivamente à área de contacto plantar do calcanhar e bordo externo do pé dominante sobre a qual incide toda a pressão estática em repouso."
    ],
    "correctIndex": 0,
    "explanation": "O polígono de apoio é o fecho convexo de todos os pontos de apoio; qualquer espaço livre entre os pés faz parte integrante da base de sustentação estática.",
    "distractorAnalysis": [
      "Está incorreta: O polígono de sustentação inclui todo o espaço do solo compreendido entre os pontos de apoio periféricos (fecho convexo).",
      "Está incorreta: A base de sustentação é uma área geométrica de apoio e não o produto da distância intermaleolar pelo peso do utente.",
      "Está incorreta: Ambos os pés e o espaço entre eles participam na formação da base de sustentação bípede estática."
    ],
    "nursingApplication": "Esclarece que o espaço entre os apoios também pertence à base de sustentação."
  },
  {
    "id": 1156,
    "topicId": 1,
    "question": "Se um indivíduo levantar um dos pés e ficar apoiado unicamente num só pé (apoio unipodal), o que acontece à sua base de sustentação?",
    "options": [
      "A base de sustentação expande-se longitudinalmente, porque a elevação do membro contralateral ativa reflexos posturais que ampliam a área de apoio no piso.",
      "A base de sustentação é drasticamente reduzida à pequena área da planta desse único pé, tornando o equilíbrio muito mais instável e exigindo correções musculares contínuas.",
      "A base de sustentação mantém-se com as mesmas dimensões exatas, uma vez que a projeção do centro de gravidade define por si só a área de apoio biomecânico.",
      "A base de sustentação transfere-se integralmente para a articulação coxo-femoral suspensa, eliminando a dependência de contacto mecânico com o pavimento."
    ],
    "correctIndex": 1,
    "explanation": "Com uma base minúscula, qualquer pequena oscilação da linha de gravidade ameaça sair fora dos bordos, aumentando o risco de queda (condição biomecânica de instabilidade).",
    "distractorAnalysis": [
      "Está incorreta: a base de sustentação em apoio unipodal limita-se estritamente à superfície de contacto do pé de apoio e não se expande.",
      "Está incorreta: a base de sustentação é a área geométrica de contacto e suporte no solo, a qual fica severamente reduzida ao retirar um pé.",
      "Está incorreta: a base de sustentação requer superfície de contacto físico com o solo ou suporte externo de apoio."
    ],
    "nursingApplication": "Compreensão do impacto drástico da redução da base de sustentação no apoio unipodal."
  },
  {
    "id": 1157,
    "topicId": 1,
    "question": "Em decúbito dorsal completo no colchão do leito hospitalar, porque é que o doente se encontra no seu estado postural de máxima estabilidade física?",
    "options": [
      "Porque o atrito hidrostático entre a pele e o lençol hospitalar anula a totalidade da aceleração gravitacional da Terra, impedindo qualquer transmissão de forças de cisalhamento aos tecidos celulares.",
      "Porque a pressão intersticial muscular diminui para valores próximos de zero bar, transformando o corpo do doente num sistema articulado rígido sem necessidade de regulação pelo tónus neuromuscular.",
      "Porque a linha de gravidade deixa de exercer torque vertical sobre o esqueleto apendicular, transferindo a totalidade da massa corporal para os pontos de apoio cranianos e calcâneos em repouso.",
      "Porque o seu Centro de Gravidade está na posição mais baixa possível junto à superfície do colchão e a sua Base de Sustentação é imensa (abrangendo praticamente toda a superfície posterior do corpo)."
    ],
    "correctIndex": 3,
    "explanation": "Reúne simultaneamente as duas condições de ouro da estabilidade biomecânica máxima: CG extremamente baixo e base de sustentação máxima.",
    "distractorAnalysis": [
      "Está incorreta: A gravidade atua continuamente sobre o doente acamado e o atrito dos lençóis não anula as forças gravitacionais nem mecânicas.",
      "Está incorreta: A estabilidade mecânica máxima decorre da base de apoio alargada e do centro de gravidade rebaixado, e não da anulação da pressão muscular.",
      "Está incorreta: A linha de gravidade continua ativa e perpendicular ao leito, distribuindo o peso ao longo de toda a superfície de contacto posterior."
    ],
    "nursingApplication": "Justifica fisicamente a máxima segurança e estabilidade do decúbito dorsal."
  },
  {
    "id": 1158,
    "topicId": 1,
    "question": "Em testes práticos clássicos de equilíbrio (como apoiar a cabeça na parede e levantar uma cadeira fletindo o tronco a 90°), porque é que as mulheres geralmente conseguem erguer-se e muitos homens perdem o equilíbrio?",
    "options": [
      "Porque as mulheres apresentam ossos do crânio mais densos que criam um contrapeso extensor posterior na cabeça, enquanto os homens possuem maior comprimento femoral que projeta a bacia excessivamente para trás durante a manobra postural.",
      "Porque a capacidade elástica dos ligamentos da anca nas mulheres armazena energia potencial gravitacional que dispara a extensão do tronco sem qualquer esforço muscular, mecanismo que se encontra ausente no sistema musculoesquelético masculino.",
      "Porque o CG feminino, sendo mais baixo e posteriorizado nos quadris, permanece dentro da base de apoio dos pés quando o tronco flete; no homem, o CG mais alto e o tronco mais pesado projetam a linha de gravidade para a frente da ponta dos pés.",
      "Porque os homens perdem a fixação da sola dos sapatos ao chão devido à menor força de atrito estático das suas solas, enquanto as mulheres beneficiam de uma adesão mecânica superior gerada pela pressão plantar exercida no bordo do calçado."
    ],
    "correctIndex": 2,
    "explanation": "É o famoso 'desafio da cadeira': a geometria do CG feminino confere estabilidade intrínseca na flexão do tronco mantendo a linha de gravidade sobre os pés.",
    "distractorAnalysis": [
      "Está incorreta: A densidade óssea craniana não explica o teste da cadeira, cuja biomecânica assenta na localização do centro de gravidade e da base de apoio.",
      "Está incorreta: O sucesso no teste depende do alinhamento da linha de gravidade sobre a base de apoio dos pés e não de armazenamento elétrico ou ligamentar passivo.",
      "Está incorreta: O coeficiente de atrito do calçado é independente do género do utente, decorrendo o desequilíbrio masculino da projeção anterior da linha de gravidade."
    ],
    "nursingApplication": "Explicação física de um teste popular de biomecânica baseado na posição do baricentro."
  },
  {
    "id": 1159,
    "topicId": 1,
    "question": "Num homem adulto com ombros largos e peitoral desenvolvido (morfologia androide), que implicação biomecânica tem o seu CG mais elevado?",
    "options": [
      "Possui maior energia potencial gravítica em repouso e menor estabilidade postural inerente em situações de desequilíbrio, necessitando de uma base de sustentação mais ampla para o mesmo nível de equilíbrio.",
      "Apresenta maior estabilidade postural passiva em todas as direções, pois a concentração de massa no tronco superior funciona como amortecedor natural de oscilações.",
      "Necessita de uma base de sustentação mais estreita para se manter em equilíbrio ortostático, uma vez que o centro de gravidade elevado facilita a resposta neuromuscular.",
      "Tem o seu centro de gravidade deslocado abaixo dos joelhos durante a locomoção, reduzindo o esforço exigido aos músculos flexores plantares durante a fase de apoio."
    ],
    "correctIndex": 0,
    "explanation": "Como vimos nas condições de estabilidade: quanto mais alto está o CG, menor é a inclinação necessária para a linha de gravidade sair fora da base (maior instabilidade intrínseca).",
    "distractorAnalysis": [
      "Está incorreta: um centro de gravidade mais elevado reduz a estabilidade biomecânica intrínseca e aumenta o momento de desequilíbrio.",
      "Está incorreta: com o CG mais alto, pequenas inclinações projetam a LG mais rapidamente para fora da base, exigindo maior afastamento dos pés.",
      "Está incorreta: a morfologia androide concentra massa no tronco e tórax, elevando o centro de gravidade relativamente à média populacional."
    ],
    "nursingApplication": "Relação entre a morfologia corporal, altura do CG e risco de queda."
  },
  {
    "id": 1160,
    "topicId": 1,
    "question": "Que consequência biomecânica direta tem o CG mais alto nas crianças pequenas que estão a aprender a andar?",
    "options": [
      "Gera uma estabilidade mecânica espontânea quase inabalável, permitindo que a criança realize curvas acentuadas e mudanças rápidas de direção com uma base de apoio extremamente estreita e unipedal.",
      "Impede qualquer movimento oscilatório no plano frontal, obrigando a criança a deslocar-se exclusivamente por saltos verticais simétricos com os dois pés em contacto simultâneo permanente com o solo.",
      "Apresentam maior instabilidade postural e maior facilidade em desequilibrar-se, adotando instintivamente uma base de sustentação muito ampla (marcha com pés bem afastados) e braços erguidos para compensar.",
      "Elimina a necessidade de feedback sensorial visual ou vestibular na marcha, uma vez que a linha de gravidade coincide rigidamente com o centro articular dos joelhos em todas as fases do passo infantil."
    ],
    "correctIndex": 2,
    "explanation": "Para compensar o CG alto (fator de instabilidade), a criança alarga a base de sustentação (fator de estabilidade) e dobra ligeiramente os joelhos, ilustrando perfeitamente os princípios da estabilidade postural.",
    "distractorAnalysis": [
      "Está incorreta: Um centro de gravidade mais alto reduz a estabilidade biomecânica, tornando o equilíbrio da criança muito mais precário e instável.",
      "Está incorreta: A marcha infantil caracteriza-se por passos alternados com base ampla e oscilação lateral acentuada, não por saltos verticais simétricos.",
      "Está incorreta: O sistema vestibular, visual e proprioceptivo é intensamente recrutado para tentar manter o equilíbrio precário da criança com CG alto."
    ],
    "nursingApplication": "Justificação física da marcha de base alargada observada no desenvolvimento psicomotor infantil."
  },
  {
    "id": 1161,
    "topicId": 1,
    "question": "Qual é a alteração da base de sustentação adotada pela grávida durante a marcha no terceiro trimestre?",
    "options": [
      "Estreitamento acentuado da distância intermaleolar com apoio monopodal prolongado, alinhando os passos numa única linha reta para acelerar o ritmo da passada.",
      "Alargamento da base de sustentação (marcha anserina ou 'de pato'), afastando mais os pés lateralmente para aumentar a margem de segurança contra o desequilíbrio e quedas.",
      "Manutenção de uma base estritamente unipedal com passos cruzados à frente do tronco, de forma a reduzir a sobrecarga compressiva sobre as articulações sacroilíacas.",
      "Apoio exclusivo sobre as pontas dos pés (marcha em equino) com aproximação total dos joelhos, compensando a hiperlordose lombar fisiológica do final da gestação."
    ],
    "correctIndex": 1,
    "explanation": "Na estabilidade postural: base ampla (30-40 cm) garante estabilidade quando o controlo da linha de gravidade está desafiado por massa adicional anterior.",
    "distractorAnalysis": [
      "Está incorreta: O estreitamento da base diminuiria a estabilidade mecânica, pelo que a grávida adota espontaneamente uma base mais alargada.",
      "Está incorreta: Cruzar os pés durante a marcha aumentaria drasticamente o risco de tropeção e queda devido à redução da margem de estabilidade lateral.",
      "Está incorreta: A grávida não caminha na ponta dos pés; apoia a planta do pé com afastamento lateral aumentado para alargar o polígono de sustentação."
    ],
    "nursingApplication": "Compreensão do padrão da marcha anserina materna como mecanismo estabilizador de base."
  },
  {
    "id": 1162,
    "topicId": 1,
    "question": "Por que razão o uso de calçado inadequado (chinelos soltos ou sapatos sem salto e sem piso antiderrapante) é um perigo extremo para o idoso com CG anteriorizado?",
    "options": [
      "Porque os chinelos soltos aumentam excessivamente a força de atrito estático com o pavimento, travando bruscamente os calcanhares e projetando a bacia para trás com torque desmedido.",
      "Porque o calçado sem suporte posterior comprime as terminações nervosas do plexo braquial, diminuindo a força de preensão manual necessária para acionar as campainhas de emergência.",
      "Porque diminui o atrito estático com o solo (ex: meias em chão encerado geram baixo atrito) e impede que o pé transmita eficazmente os momentos de alavanca corretivos ao pavimento.",
      "Porque o calçado raso altera a curvatura dos ossos da tíbia, impedindo a circulação arterial periférica e reduzindo a oxigenação celular do tendão de Aquiles no repouso noturno."
    ],
    "correctIndex": 2,
    "explanation": "Na física do apoio: o atrito solo-calçado elevado (sola de borracha com relevo em piso seco) é condição obrigatória de estabilidade; piso escorregadio impede a frenagem de qualquer desvio da LG.",
    "distractorAnalysis": [
      "Está incorreta: Calçados soltos e pisos encerados diminuem o atrito, provocando escorregamento e incapacidade de fixação do pé para correção do equilíbrio.",
      "Está incorreta: O plexo braquial situa-se na região cervicoaxilar e inerva os membros superiores, não tendo relação anatómica direta com o calçado nos pés.",
      "Está incorreta: O calçado inadequado constitui um risco mecânico imediato de escorregamento e tropeção, e não uma causa de deformação óssea tibial aguda."
    ],
    "nursingApplication": "Aplicação das diretrizes dos da biomecânica do apoio à prevenção de acidentes e calçado geriátrico seguro."
  },
  {
    "id": 1163,
    "topicId": 1,
    "question": "A adaptação de uma prótese transfemoral com peso calibrado visa, entre outros objetivos mecânicos:",
    "options": [
      "Restaurar a simetria da massa corporal, aproximando o Centro de Gravidade da linha média anatómica e oferecendo um ponto de apoio distal para restabelecer o polígono de sustentação bípede.",
      "Deslocar intencionalmente o centro de gravidade para o ombro contralateral, garantindo que o membro são realize a totalidade do trabalho mecânico de translação durante a marcha.",
      "Imobilizar a articulação da anca num ângulo fixo de noventa graus para impedir qualquer oscilação do tronco e anular a necessidade de regulação neuromuscular do equilíbrio.",
      "Reduzir o atrito estático entre o pé protésico e o piso da enfermaria para permitir o deslizamento contínuo da prótese sem esforço muscular dos extensores da anca."
    ],
    "correctIndex": 0,
    "explanation": "Uma prótese bem ajustada reequilibra as massas, alinha a linha de gravidade e permite que a marcha decorra com gastos energéticos próximos do padrão fisiológico normal.",
    "distractorAnalysis": [
      "Está incorreta: O objetivo da prótese é restabelecer a simetria postural e trazer o centro de gravidade de volta à linha média, e não desviá-lo para os ombros.",
      "Está incorreta: A anca deve manter mobilidade funcional controlada para permitir os movimentos de flexão e extensão necessários à locomoção e ao sentar.",
      "Está incorreta: O pé protésico necessita de atrito adequado com o solo para garantir apoio estável e seguro, prevenindo escorregamentos e quedas."
    ],
    "nursingApplication": "Finaliza a análise de variações antropométricas do baricentro com o conceito de reabilitação protética."
  },
  {
    "id": 1164,
    "topicId": 1,
    "question": "Na biomecânica do equilíbrio, qual é a 'Condição de alta estabilidade' referente ao tamanho da Base de Sustentação (BS)?",
    "options": [
      "Estreita (pés juntos ou num só pé).",
      "Pés colados um ao outro com calcanhares e biqueiras unidas.",
      "Ampla (pés afastados à largura dos ombros: 30-40 cm).",
      "Apoio exclusivo nas pontas dos dois dedos grandes dos pés."
    ],
    "correctIndex": 2,
    "explanation": "Parâmetro biomecânico: 'Tamanho da base de sustentação (BS) | Condição de alta estabilidade: Ampla (pés afastados à largura dos ombros: 30-40 cm)'.",
    "distractorAnalysis": [
      "Está incorreta: Pés juntos ou num só pé constituem explicitamente a condição de instabilidade.",
      "Está incorreta: Pés unidos reduzem a largura da base a poucos centímetros, facilitando o tombo lateral.",
      "Está incorreta: O apoio digital nas extremidades dos artelhos é instável e anatomicamente inviável em repouso."
    ],
    "nursingApplication": "Fidelidade milimétrica à dimensão métrica (30-40 cm) para uma base de sustentação estável."
  },
  {
    "id": 1165,
    "topicId": 1,
    "question": "Qual é a 'Condição de instabilidade (risco de queda)' relativa à base de sustentação relativa à base de apoio?",
    "options": [
      "Larga (pés afastados aos ombros).",
      "Ampla (apoio em quatro pontos).",
      "Expandida (apoio num andarilho).",
      "Estreita (pés juntos ou num só pé)."
    ],
    "correctIndex": 3,
    "explanation": "Parâmetro biomecânico: 'Condição de instabilidade (risco de queda): Estreita (pés juntos ou num só pé)'.",
    "distractorAnalysis": [
      "Está incorreta: pés afastados à largura dos ombros aumentam o polígono de suporte e a estabilidade postural.",
      "Está incorreta: apoio em quatro pontos maximiza a base de apoio, correspondendo a uma condição de elevada estabilidade.",
      "Está incorreta: o uso de andarilho expande significativamente o polígono de sustentação, diminuindo o risco de queda."
    ],
    "nursingApplication": "Identificação formal da condição de estreitamento perigoso da base de apoio."
  },
  {
    "id": 1166,
    "topicId": 1,
    "question": "Qual é a 'Intervenção de enfermagem recomendada' na prática clínica para garantir o tamanho adequado da base de sustentação do utente?",
    "options": [
      "Orientar o doente a afastar os pés ao transferir.",
      "Pedir ao doente que una os pés antes de se levantar.",
      "Instruir o doente a cruzar as pernas durante o giro.",
      "Solicitar apoio exclusivo num só pé durante a marcha."
    ],
    "correctIndex": 0,
    "explanation": "Parâmetro biomecânico: 'Intervenção de enfermagem recomendada: Orientar o doente a afastar os pés ao transferir'.",
    "distractorAnalysis": [
      "Está incorreta: manter os pés unidos estreita a base de sustentação e aumenta drasticamente o risco de perda de equilíbrio.",
      "Está incorreta: cruzar as pernas durante transferências reduz a base de suporte e induz desequilíbrio dinâmico iminente.",
      "Está incorreta: apoio unipodal reduz a base à área de um só pé, sendo desaconselhado em utentes com risco de queda."
    ],
    "nursingApplication": "Intervenção prática essencial de enfermagem ensinada no resumo para uma base de sustentação estável."
  },
  {
    "id": 1167,
    "topicId": 1,
    "question": "Na análise biomecânica da postura, qual é a 'Condição de alta estabilidade' relativa à posição da Linha de Gravidade?",
    "options": [
      "A Linha de Gravidade deve projetar-se tangente ao bordo externo lateral da base, facilitando o início rápido e desimpedido da marcha voluntária.",
      "A Linha de Gravidade deve passar por fora da base de apoio, permitindo que a força da gravidade atue como motor de propulsão na bipedestação.",
      "A Linha de Gravidade deve formar um ângulo oblíquo de quarenta e cinco graus com o vetor da força peso para minimizar o momento de tombamento.",
      "A Linha de Gravidade deve projetar-se rigorosamente no interior da base de sustentação, preferencialmente próxima do centro geométrico do polígono de apoio."
    ],
    "correctIndex": 3,
    "explanation": "Critério de equilíbrio: 'Posição da linha de gravidade | Condição de alta estabilidade: Centrada no meio do polígono de apoio'.",
    "distractorAnalysis": [
      "Está incorreta: no bordo da base a margem de estabilidade é mínima, tornando o equilíbrio vulnerável a qualquer perturbação externa.",
      "Está incorreta: se a Linha de Gravidade sair da base de apoio, o corpo entra imediatamente em desequilíbrio e queda se não der um passo.",
      "Está incorreta: a Linha de Gravidade é rigorosamente vertical e coincide com a direção da força peso gravitacional terrestre."
    ],
    "nursingApplication": "Fidelidade literal à tabela de estabilidade do alinhamento da linha de gravidade."
  },
  {
    "id": 1168,
    "topicId": 1,
    "question": "Qual é a 'Condição de instabilidade (risco de queda)' relativa à Linha de Gravidade da postura corporal?",
    "options": [
      "Próxima ou fora dos bordos da base.",
      "Centrada no meio do polígono de apoio.",
      "Equidistante dos bordos dos dois pés.",
      "Alinhada com o ponto médio do suporte."
    ],
    "correctIndex": 0,
    "explanation": "Critério de equilíbrio: 'Condição de instabilidade (risco de queda): Próxima ou fora dos bordos da base'.",
    "distractorAnalysis": [
      "Está incorreta: a linha de gravidade centrada no polígono de suporte proporciona a máxima margem de estabilidade estática.",
      "Está incorreta: a equidistância aos bordos garante margem de segurança contra pequenas perturbações posturais.",
      "Está incorreta: o alinhamento com o centro da base de apoio é a condição ideal de equilíbrio biomecânico seguro."
    ],
    "nursingApplication": "Reconhece o desvio periférico da linha de gravidade como gatilho de queda iminente."
  },
  {
    "id": 1169,
    "topicId": 1,
    "question": "Se um indivíduo inclinar o tronco para a frente sem mover os pés, o que acontece à distância entre a Linha de Gravidade e o bordo anterior da sua base?",
    "options": [
      "A distância entre a linha e o bordo aumenta continuamente, ampliando a margem de segurança estática e reduzindo o risco de perda de equilíbrio durante a inclinação.",
      "A distância mantém-se rigorosamente invariável, uma vez que a base de sustentação dos pés se adapta de forma automática à nova posição do centro de gravidade corporal.",
      "A distância diminui progressivamente até se anular; no instante em que a LG toca o bordo anterior (ponta dos dedos), o equilíbrio atinge o limiar de estabilidade e o corpo cai para a frente se não der um passo.",
      "A linha de gravidade projeta-se repentinamente para trás dos calcanhares por ativação miotática, provocando uma perda descontrolada de equilíbrio no sentido posterior."
    ],
    "correctIndex": 2,
    "explanation": "A margem de estabilidade é a menor distância entre a linha de gravidade e o perímetro da base; quando essa distância atinge zero, qualquer força infinitesimal gera capotamento.",
    "distractorAnalysis": [
      "Está incorreta: a inclinação anterior aproxima a Linha de Gravidade do bordo anterior dos pés, diminuindo a margem de estabilidade.",
      "Está incorreta: se os pés não se movem a base permanece fixa no solo; a aproximação da LG ao limite reduz a estabilidade.",
      "Está incorreta: a inclinação para a frente desloca a linha de gravidade no sentido anterior e não posterior."
    ],
    "nursingApplication": "Compreensão analítica da margem de estabilidade como distância métrica aos bordos."
  },
  {
    "id": 1170,
    "topicId": 1,
    "question": "Num doente hemiplégico após AVC, porque é que a sua linha de gravidade se desvia frequentemente de forma assimétrica para o lado são?",
    "options": [
      "Porque o hemicorpo parético perde instantaneamente toda a sua massa muscular e tecido ósseo por apoptose celular, transferindo o centro de gravidade anatómico exclusivamente para a cavidade torácica do lado são.",
      "Porque o sistema vestibular contralateral duplica a aceleração da gravidade no ouvido interno do lado são, exercendo uma atração magnética descendente que puxa a bacia diretamente para o solo da enfermaria.",
      "Porque o membro hemiplégico desenvolve um reflexo antigravítico contínuo cinco vezes superior ao normal que empurra o solo para baixo, obrigando a bacia a elevar-se no lado parético sem qualquer apoio estático.",
      "Porque o doente descarrega quase todo o peso corporal no membro inferior não afetado devido à fraqueza e espasticidade do lado parético, estreitando a sua base efetiva e aproximando a LG da margem lateral do pé são."
    ],
    "correctIndex": 3,
    "explanation": "A assimetria de carga cria um desequilíbrio lateral crónico; o enfermeiro deve reeducar a distribuição de peso para recentrar a linha de gravidade no meio de ambos os apoios.",
    "distractorAnalysis": [
      "Está incorreta: O membro parético não perde a sua matéria ou massa óssea de forma aguda; o desvio decorre do défice neuromuscular de suporte e apoio.",
      "Está incorreta: A aceleração gravitacional é constante e uniforme em todo o corpo e o sistema vestibular não possui atração magnética descendente.",
      "Está incorreta: A hemiplegia caracteriza-se por fraqueza e controlo motor deficitário, e não por força antigravítica propulsora multiplicada."
    ],
    "nursingApplication": "Aplicação da centralização da linha de gravidade na reabilitação motora do doente neurológico."
  },
  {
    "id": 1171,
    "topicId": 1,
    "question": "Qual é a 'Intervenção de enfermagem recomendada' hospitalar para controlar o risco de queda por baixo atrito?",
    "options": [
      "Encerar o chão do quarto todos os dias às três da madrugada com cera líquida.",
      "Retirar os sapatos a todos os doentes e obrigá-los a andar descalços com sabão.",
      "Proibir meias sem piso antiderrapante na enfermaria, garantindo o equilíbrio estático.",
      "Desligar todas as lâmpadas do corredor para que os doentes não vejam o piso molhado."
    ],
    "correctIndex": 2,
    "explanation": "Na física do apoio: 'Intervenção de enfermagem recomendada: Proibir meias sem piso antiderrapante na enfermaria'.",
    "distractorAnalysis": [
      "Está incorreta: Encerar pisos com cera escorregadia sem aviso multiplica o risco de quedas traumáticas graves.",
      "Está incorreta: Pisar solo molhado ou com resíduos ensaboados elimina o atrito estático necessário à tração.",
      "Está incorreta: A iluminação adequada é um requisito indispensável de segurança ambiental hospitalar."
    ],
    "nursingApplication": "Protocolo de segurança clínica formal prescrito na segurança e prevenção de quedas."
  },
  {
    "id": 1172,
    "topicId": 1,
    "question": "Em doentes idosos internados, por que razão as 'meias com pontos de silicone antiderrapante' na sola são consideradas um dispositivo de segurança passiva altamente eficaz?",
    "options": [
      "Porque os nódulos de silicone aumentam dramaticamente o coeficiente de atrito superficial com o linóleo ou tijoleira do quarto, fornecendo a força tangencial necessária para manter o pé fixo no solo durante o levante da cama.",
      "Porque os relevos de silicone funcionam como ventosas pneumáticas a vácuo que fixam permanentemente o calcâneo ao chão, impedindo a flexão do joelho e dispensando a contração dos músculos extensores da perna.",
      "Porque o silicone conduz impulsos elétricos terapêuticos aos nervos plantares que estimulam ativamente a musculatura paravertebral lombar, rebaixando automaticamente o centro de gravidade do doente acamado.",
      "Porque aumentam a massa dos membros inferiores em cerca de três quilos por perna, atuando como pesos estabilizadores que centram a linha de gravidade no bordo posterior do calcanhar durante a bipedestação."
    ],
    "correctIndex": 0,
    "explanation": "O silicone tem uma aderência excelente em superfícies lisas e secas, compensando a falta de calçado fechado em utentes que se levantam à noite com urgência urinária.",
    "distractorAnalysis": [
      "Está incorreta: Os relevos de silicone fornecem atrito mecânico de contacto superficial, sem criar vácuo nem impedir o movimento fisiológico do passo.",
      "Está incorreta: As meias antiderrapantes são dispositivos mecânicos passivos de fricção e não emitem correntes elétricas nem estimulam nervos plantares.",
      "Está incorreta: As meias de silicone são muito leves e não atuam como lastros pesados, sendo a sua eficácia devida ao elevado coeficiente de atrito."
    ],
    "nursingApplication": "Demonstra a relevância clínica de uma intervenção de enfermagem de custo reduzido e alto impacto preventivo."
  },
  {
    "id": 1173,
    "topicId": 1,
    "question": "Em reabilitação e auxílio à locomoção, qual é a 'Condição de alta estabilidade' associada aos 'Dispositivos de apoio (Andarilho/Bengala)'?",
    "options": [
      "Reduz a área de suporte a um ponto no solo.",
      "Multiplica a área da base em 3 a 5 vezes.",
      "Mantém inalterada a área natural dos pés.",
      "Restringe o polígono de apoio aos calcanhares."
    ],
    "correctIndex": 1,
    "explanation": "Efeito biomecânico: 'Dispositivos de apoio (Andarilho/Bengala) | Condição de alta estabilidade: Multiplica a área da base em 3 a 5 vezes'.",
    "distractorAnalysis": [
      "Está incorreta: andarilhos e bengalas acrescentam pontos de contacto ao solo, expandindo a base em vez de a reduzir.",
      "Está incorreta: os dispositivos de apoio integram-se na geometria da base, aumentando expressivamente a área do polígono.",
      "Está incorreta: os dispositivos colocam-se lateralmente ou à frente do utente, ampliando o polígono de sustentação."
    ],
    "nursingApplication": "Fidelidade estrita à quantificação numérica (multiplica a base 3 a 5 vezes) do aumento da base de sustentação."
  },
  {
    "id": 1174,
    "topicId": 1,
    "question": "Qual é a 'Intervenção de enfermagem recomendada' em enfermagem para a utilização segura do andarilho?",
    "options": [
      "Instruir o utente a empurrar o andarilho dois passos longos para a frente e avançar rapidamente o tronco para tentar alcançar as pegas.",
      "Recomendar que o doente fixe sacos pesados unicamente na barra frontal dianteira para facilitar a inclinação do tronco durante a marcha.",
      "Sugerir que o doente feche os olhos durante a deambulação de modo a aprimorar o equilíbrio estático através da proprioceção articular.",
      "Ensinar o doente a caminhar mantendo-se dentro da estrutura do andarilho, garantindo que o seu Centro de Gravidade se projeta no interior da base alargada de sustentação."
    ],
    "correctIndex": 3,
    "explanation": "Efeito biomecânico: 'Intervenção de enfermagem recomendada: Ensinar a usar o andarilho mantendo-se dentro dele'.",
    "distractorAnalysis": [
      "Está incorreta: empurrar o andarilho para longe projeta a linha de gravidade para fora da base de apoio, criando elevado risco de queda.",
      "Está incorreta: pendurar cargas na barra frontal desequilibra o equipamento para a frente, aumentando a instabilidade do sistema.",
      "Está incorreta: a visão é um dos três pilares sensoriais fundamentais do equilíbrio; fechar os olhos em marcha com andarilho potencia quedas."
    ],
    "nursingApplication": "Memorização da instrução ergonómica e biomecânica crucial no ensino ao doente sobre o andarilho."
  },
  {
    "id": 1175,
    "topicId": 1,
    "question": "Geometricamente, porque é que um andarilho de quatro apoios multiplica a área da base de sustentação em 3 a 5 vezes?",
    "options": [
      "Porque a nova base de sustentação passa a ser o fecho convexo que engloba os quatro pés do andarilho MAIS os dois pés do utente e todo o espaço livre compreendido entre todos eles.",
      "Porque o peso da estrutura metálica do andarilho duplica a massa global do utente, expandindo a área plantar anatómica de cada um dos pés em contacto direto com o chão.",
      "Porque as ponteiras de borracha transmitem calor mecânico que expande a superfície elástica do pavimento circundante, criando um campo de apoio circunferencial contínuo.",
      "Porque obriga o centro de gravidade corporal a descer imediatamente para o nível dos tornozelos, dispensando a necessidade de sustentação no espaço entre os apoios metálicos."
    ],
    "correctIndex": 0,
    "explanation": "A área do polígono de suporte passa de cerca de 0,1 m² (apenas os pés do doente) para mais de 0,4 a 0,5 m² (o perímetro alargado das pernas do andarilho com o doente no interior).",
    "distractorAnalysis": [
      "Está incorreta: O andarilho é uma estrutura de suporte leve que amplia geometricamente a base de apoio, sem duplicar a massa corporal nem alterar a anatomia do pé.",
      "Está incorreta: As ponteiras de borracha geram atrito no ponto de contacto e não expandem termicamente o piso do hospital.",
      "Está incorreta: O centro de gravidade do doente continua na região pélvica/tronco; a estabilidade resulta da grande área do polígono de suporte exterior."
    ],
    "nursingApplication": "Demonstração geométrica de como o fecho convexo expande o polígono de sustentação."
  },
  {
    "id": 1176,
    "topicId": 1,
    "question": "Se um doente com andarilho caminhar muito recuado (fora do perímetro do andarilho), qual é o erro biomecânico gravíssimo que está a cometer?",
    "options": [
      "Provoca o bloqueio articular instantâneo da cintura escapular, impedindo o fluxo sanguíneo nas artérias carótidas e desencadeando uma paragem cardiorrespiratória reflexa por compressão mecânica cervical.",
      "A sua Linha de Gravidade fica fora da base do andarilho e, ao apoiar o peso nas pegas com os braços esticados para a frente, gera um torque que levanta as patas traseiras do andarilho, fazendo-o tombar.",
      "Aumenta a força de atrito das ponteiras de borracha a um nível tal que funde a borracha com o piso da enfermaria, impossibilitando qualquer avanço do dispositivo durante a realização da marcha assistida.",
      "Faz com que o centro de gravidade desça subitamente para o interior do pavimento hospitalar, eliminando toda a energia mecânica dos músculos gastrocnémios e impedindo o retorno venoso dos membros inferiores."
    ],
    "correctIndex": 1,
    "explanation": "Na correta utilização do andarilho, o utilizador DEVE manter-se 'dentro dele', de modo a que a sua linha de gravidade caia confortavelmente no interior do polígono ampliado de suporte.",
    "distractorAnalysis": [
      "Está incorreta: O risco primário de caminhar recuado é o capotamento mecânico do andarilho e consequente queda, e não a paragem carotídea reflexa.",
      "Está incorreta: A postura recuada gera torque e instabilidade mecânica no dispositivo, sem originar danos térmicos ou desgaste das ponteiras de borracha.",
      "Está incorreta: O centro de gravidade corporal não penetra no pavimento; a perda de estabilidade decorre da projeção da linha de gravidade fora do polígono seguro."
    ],
    "nursingApplication": "Fundamento físico primordial da regra de ouro: 'manter-se dentro do andarilho' (Regra de ouro ergonómica)."
  },
  {
    "id": 1177,
    "topicId": 1,
    "question": "Que tipo de pavimento no hospital ou domicílio oferece maior risco para utentes que utilizam andarilhos com ponteiras de borracha?",
    "options": [
      "Pisos encerados húmidos, tapetes soltos sem fixação e soleiras de portas salientes que possam prender as ponteiras de borracha ou fazê-las escorregar subitamente.",
      "Superfícies de betão rugoso seco e pavimentos vinílicos foscos de alto atrito dotados de faixas antiderrapantes texturadas nas zonas de circulação de doentes.",
      "Pisos nivelados com acabamento cerâmico mate totalmente secos e livres de quaisquer desníveis arquitetónicos ou barreiras físicas nos corredores de acesso.",
      "Passadeiras de borracha de alta densidade devidamente fixadas com cola industrial contínua ao solo que oferecem um coeficiente de atrito estático superior a 0,8."
    ],
    "correctIndex": 0,
    "explanation": "A combinação de baixo atrito (chão molhado) com obstáculos físicos (tapetes soltos que deslizam ou tropeções em soleiras) é a causa de mais de 70% das quedas com dispositivos de marcha.",
    "distractorAnalysis": [
      "Está incorreta: Pavimentos rugosos e com alto atrito proporcionam boa aderência e segurança às ponteiras de borracha, reduzindo o risco de queda.",
      "Está incorreta: Pisos nivelados, secos e sem obstáculos são ideais para a deambulação segura com dispositivos de apoio.",
      "Está incorreta: Passadeiras de borracha bem fixadas com elevado coeficiente de atrito garantem aderência firme e não constituem fator de risco."
    ],
    "nursingApplication": "Identificação dos perigos ambientais mais prevalentes na mobilidade assistida."
  },
  {
    "id": 1178,
    "topicId": 1,
    "question": "Por que razão o enfermeiro deve inspecionar periodicamente as ponteiras de borracha (tacos) de andarilhos e canadianas?",
    "options": [
      "Porque a borracha envelhecida acumula eletricidade estática com facilidade, provocando descargas cutâneas nos membros que induzem reflexos motores de soltura.",
      "Porque o desgaste progressivo do elastómero aumenta a densidade do material em três vezes, sobrecarregando os músculos trapézios durante as manobras.",
      "Porque o desgaste da borracha desgasta o relevo estriado e expõe o metal tubular interior, reduzindo drasticamente o coeficiente de atrito com o solo e provocando escorregamento imprevisto.",
      "Porque ponteiras desgastadas encurtam o dispositivo de forma contínua a cada passada, gerando uma escoliose estrutural aguda por desnível pélvico repentino."
    ],
    "correctIndex": 2,
    "explanation": "Na física do apoio: sola de borracha com relevo garante alto atrito; ponteiras gastas ou polidas comportam-se como meias em chão encerado (baixo atrito e risco de queda).",
    "distractorAnalysis": [
      "Está incorreta: o risco primordial das ponteiras desgastadas é a perda de atrito e consequente escorregamento, não o choque estático.",
      "Está incorreta: o desgaste remove material borracha, pelo que o peso do equipamento nunca aumenta por via da degradação das ponteiras.",
      "Está incorreta: o desgaste da borracha ocorre ao longo de meses de uso e não em minutos; a deformação da coluna não surge de forma aguda."
    ],
    "nursingApplication": "Atividade de vigilância e manutenção preventiva essencial na segurança do utente."
  },
  {
    "id": 1179,
    "topicId": 1,
    "question": "Se um equipamento de tração hospitalar indica uma carga de 50 Newtons, que aceleração essa força imprimiria a uma massa de 10 kg sem atrito?",
    "options": [
      "5 m/s², decorrente da aplicação direta do princípio fundamental da dinâmica (a = F / m = 50 / 10).",
      "500 m/s², que resulta da multiplicação direta da força pelo valor escalar da massa do sistema.",
      "0,2 m/s², calculado pela divisão da massa inercial pelo valor nominal da força tracionadora.",
      "50 m/s², mantendo-se a aceleração numericamente equivalente à intensidade da força no vácuo."
    ],
    "correctIndex": 0,
    "explanation": "Pela 2.ª Lei de Newton (F = m·a), isolando a aceleração obtém-se a = F / m = 50 N / 10 kg = 5 m/s².",
    "distractorAnalysis": [
      "Está incorreta: Multiplicar força por massa não tem significado físico para o cálculo da aceleração resultante.",
      "Está incorreta: Dividir massa por força daria o inverso da aceleração (s²/m), cometendo um erro dimensional grave.",
      "Está incorreta: A aceleração só equivaleria numericamente à força se a massa fosse exatamente igual a 1 kg."
    ],
    "nursingApplication": "Compreender a relação a = F/m ajuda a calcular com que rapidez uma maca ou cadeira de rodas acelera sob esforço."
  },
  {
    "id": 1180,
    "topicId": 1,
    "question": "Se duas forças colineares no mesmo sentido (F1 = 70 N e F2 = 90 N) forem aplicadas numa cadeira de rodas de 20 kg desprovida de atrito, qual é a aceleração resultante?",
    "options": [
      "0,125 m/s², que resulta da divisão da massa da cadeira pela soma das forças aplicadas no manípulo.",
      "3200 m/s², que decorre da multiplicação direta da força resultante pela massa inercial do conjunto.",
      "1,0 m/s², que reflete o valor fixo universal da aceleração de cadeiras de rodas em piso seco.",
      "8 m/s², calculada dividindo a força resultante (160 N) pela massa inercial da cadeira (20 kg)."
    ],
    "correctIndex": 3,
    "explanation": "Fres = 70 + 90 = 160 N. Pela 2.ª Lei de Newton: a = Fres / m = 160 N / 20 kg = 8 m/s².",
    "distractorAnalysis": [
      "Está incorreta: Dividir massa por força (20 / 160 = 0,125) inverte a fórmula da dinâmica e comete um erro dimensional.",
      "Está incorreta: Multiplicar força por massa viola a relação a = F/m da 2.ª Lei de Newton.",
      "Está incorreta: A aceleração não é uma constante fixa; depende da intensidade da força resultante e da massa transportada."
    ],
    "nursingApplication": "Demonstra a relação direta entre a força combinada exercida pelos profissionais e a resposta dinâmica do equipamento."
  },
  {
    "id": 1181,
    "topicId": 1,
    "question": "Para manter uma maca hospitalar em MRU a 1,0 m/s num corredor plano cujo atrito total de rolamento é de 35 N, que força deve o enfermeiro aplicar?",
    "options": [
      "Exatamente 35 N no sentido do avanço, para que a força aplicada anule a força de atrito e a resultante seja nula (∑F = 0).",
      "0 N, porque os corpos em movimento retilíneo uniforme mantêm-se a deslocar sem necessidade de qualquer esforço.",
      "350 N, de modo a garantir que a força muscular seja dez vezes superior à resistência de atrito do piso.",
      "70 N, correspondendo ao dobro obrigatório da resistência para impedir que a maca desacelere de forma súbita."
    ],
    "correctIndex": 0,
    "explanation": "Para que o movimento seja uniforme (a = 0), a força resultante deve ser nula: F_aplicada - F_atrito = 0 ⇒ F_aplicada = 35 N.",
    "distractorAnalysis": [
      "Está incorreta: 0 N só manteria o movimento se não existisse qualquer atrito (vácuo ou superfície ideal perfeitamente lisa).",
      "Está incorreta: 350 N geraria uma força resultante de 315 N para a frente, provocando aceleração contínua e não velocidade constante.",
      "Está incorreta: 70 N geraria aceleração contínua (Fres = 35 N), impedindo que a velocidade fosse constante."
    ],
    "nursingApplication": "Demonstra que o esforço contínuo do enfermeiro em piso plano destina-se exclusivamente a contrariar a força de atrito."
  },
  {
    "id": 1182,
    "topicId": 1,
    "question": "Como é que a presença de um colchão com superfície muito escorregadia afeta o deslocamento inercial do doente numa paragem da maca?",
    "options": [
      "O baixo atrito anula a massa inercial do doente, impedindo qualquer movimento relativo sobre o colchão.",
      "O colchão escorregadio inverte o sentido da 1.ª Lei de Newton, fazendo o doente colar-se à cabeceira da maca.",
      "O baixo coeficiente de atrito reduz a força que se opõe ao deslizamento, permitindo que o doente deslize mais facilmente para a frente.",
      "O baixo atrito transforma a energia cinética do doente em ondas sonoras que acionam a campainha de chamada."
    ],
    "correctIndex": 2,
    "explanation": "Menor atrito significa menor força de travagem na interface colchão-corpo; a inércia predomina e o utente escorrega livremente.",
    "distractorAnalysis": [
      "Está incorreta: O atrito reduzido facilita o movimento; a massa inercial é uma constante intrínseca que não depende do atrito.",
      "Está incorreta: As leis da mecânica newtoniana mantêm-se universais e invariáveis com o tipo de tecido do colchão.",
      "Está incorreta: A energia cinética dissipa-se em atrito e calor microscópico, não gerando sinais acústicos na campainha."
    ],
    "nursingApplication": "Lençóis bem esticados e superfícies adequadas oferecem atrito seguro que auxilia na estabilidade do doente no leito."
  },
  {
    "id": 1183,
    "topicId": 1,
    "question": "Numa transferência de doente de um piso para outro através de rampa exterior, que equipamento de segurança da maca deve ser ativado nas paragens?",
    "options": [
      "O sistema de aspiração endotraqueal contínuo para criar vácuo hidrostático entre as rodas e o asfalto.",
      "Os travões mecânicos centrais ou das quatro rodas da maca, garantindo força de atrito estático que anula a tendência de deslizamento.",
      "A luz de leitura de teto da cabine para que os fotões aumentem a massa gravitacional do chassis da maca.",
      "O termómetro digital da cabeceira para verificar a dilatação térmica dos parafusos de fixação dos travões."
    ],
    "correctIndex": 1,
    "explanation": "Travar as rodas cria atrito estático com o solo, fornecendo a força necessária para equilibrar a componente tangencial do peso (∑F = 0).",
    "distractorAnalysis": [
      "Está incorreta: O aspirador destina-se a vias aéreas e não tem ligação mecânica às rodas da maca.",
      "Está incorreta: Lâmpadas emitem luz sem gerar forças de atrito mecânico que travem o veículo no chão.",
      "Está incorreta: O termómetro clínico avalia temperaturas do doente e não a mecânica das rodas."
    ],
    "nursingApplication": "Travar a maca antes de soltar os manípulos em qualquer inclinação é um reflexo fundamental de segurança profissional."
  },
  {
    "id": 1184,
    "topicId": 1,
    "question": "Para manter uma cadeira de rodas em equilíbrio dinâmico (velocidade constante de 1,0 m/s), porque é que o enfermeiro tem de continuar a empurrar?",
    "options": [
      "Para fornecer energia térmica que aqueça as jantes metálicas e mantenha a dilatação elástica das borrachas.",
      "Porque a 1.ª Lei de Newton obriga os corpos humanos a despender 500 Watts de potência contínua em qualquer deslocamento.",
      "Para exercer uma força muscular para a frente de magnitude exatamente igual à força de atrito que se opõe ao rolamento no piso.",
      "Para contrariar a atração gravítica da Terra, que puxa horizontalmente a cadeira de rodas em direção ao polo norte."
    ],
    "correctIndex": 2,
    "explanation": "No mundo real com atrito, ∑F = F_enfermeiro - F_atrito = 0 ⇒ F_enfermeiro = F_atrito. A força muscular equilibra o atrito.",
    "distractorAnalysis": [
      "Está incorreta: O objetivo do empurrão é mecânico de propulsão, e não aquecimento térmico das jantes de suporte.",
      "Está incorreta: A 1.ª Lei estabelece que sem atrito nenhuma força seria necessária; a necessidade de força decorre da presença de atrito real.",
      "Está incorreta: A gravidade atua na vertical para baixo (P = m·g), e não horizontalmente em direção ao polo norte magnético."
    ],
    "nursingApplication": "Pisos bem conservados e rodas limpas reduzem o atrito, exigindo menor força muscular para manter o equilíbrio dinâmico."
  },
  {
    "id": 1185,
    "topicId": 1,
    "question": "Se a força de atrito de rolamento de uma maca for de 25 N e o enfermeiro aplicar exatamente 25 N no sentido do avanço, a maca:",
    "options": [
      "Acelera a cada segundo com um ganho progressivo de velocidade à taxa de um metro por segundo ao quadrado no corredor.",
      "Trava instantaneamente no mesmo ponto devido à anulação recíproca de todas as grandezas cinemáticas envolvidas no transporte.",
      "Inverte o sentido de marcha e começa a recuar espontaneamente devido à oposição exercida pelas rodas dianteiras da maca.",
      "Mantém a sua velocidade de deslocamento rigorosamente constante (aceleração nula), preservando o equilíbrio dinâmico."
    ],
    "correctIndex": 3,
    "explanation": "Fres = 25 N - 25 N = 0 N ⇒ a = 0 m/s². A velocidade permanece constante de acordo com a 1.ª Lei de Newton.",
    "distractorAnalysis": [
      "Está incorreta: se F_aplicada = F_atrito (25 N), a força resultante é nula (∑F = 0), logo a aceleração é rigorosamente zero (não acelera).",
      "Está incorreta: resultante nula com velocidade inicial não nula traduz equilíbrio dinâmico (MRU), não ocorrendo paragem instantânea.",
      "Está incorreta: o atrito opõe-se ao movimento mas nunca gera forças motoras no sentido contrário capazes de empurrar o objeto para trás."
    ],
    "nursingApplication": "Ilustra que 'força igual ao atrito' não para o corpo; mantém o movimento uniforme estável e seguro."
  },
  {
    "id": 1186,
    "topicId": 1,
    "question": "O que acontece à maca se o enfermeiro deixar subitamente de aplicar os 25 N de empurrão no corredor horizontal?",
    "options": [
      "A força de atrito (25 N) passa a atuar como força resultante não nula no sentido oposto ao movimento, fazendo a maca desacelerar até parar.",
      "A maca acelera progressivamente para a frente por libertação da energia elástica acumulada na estrutura metálica durante o empurrão.",
      "A maca continua a mover-se indefinidamente à mesma velocidade sem necessitar de qualquer reposição de energia mecânica.",
      "A maca desvia-se bruscamente num ângulo reto em direção à parede mais próxima devido à perda de simetria do momento angular das rodas."
    ],
    "correctIndex": 0,
    "explanation": "Sem o empurrão: Fres = -25 N. A força de atrito desacelera a maca (a = -25 / m) até a velocidade atingir zero.",
    "distractorAnalysis": [
      "Está incorreta: ao cessar o empurrão manual, não existe fonte de energia motriz; o atrito atua como força de travagem desacelerando a maca.",
      "Está incorreta: na presença de atrito real com o piso (25 N), a velocidade não se mantém constante indefinidamente, sofrendo desaceleração.",
      "Está incorreta: em piso horizontal plano, a força de atrito atua paralelamente e em sentido oposto ao vetor velocidade, sem desvios espontâneos a 90°."
    ],
    "nursingApplication": "O atrito atua como um sistema de travagem passiva natural assim que o profissional cessa o empurrão voluntário."
  },
  {
    "id": 1187,
    "topicId": 1,
    "question": "Se um enfermeiro largar subitamente os manípulos do carrinho de paragem enquanto corre a 2 m/s num corredor plano:",
    "options": [
      "O carrinho trava instantaneamente a zero no exato milímetro em que as mãos do enfermeiro perdem o contacto.",
      "O carrinho inverte a marcha a 180 graus e retorna autonomamente para o posto central de enfermagem.",
      "O carrinho continua a deslocar-se para a frente por inércia a cerca de 2 m/s, desacelerando lentamente apenas pelo atrito das rodas.",
      "A massa do carrinho duplica instantaneamente para 140 kg como mecanismo de segurança passiva contra embates."
    ],
    "correctIndex": 2,
    "explanation": "Pela 1.ª Lei de Newton, na ausência de força de travagem do enfermeiro, o carrinho prossegue em movimento por inércia até o atrito o parar.",
    "distractorAnalysis": [
      "Está incorreta: Sem travagem ativa, o atrito moderado de rodas bem lubrificadas demora vários metros a dissipar a velocidade.",
      "Está incorreta: O carrinho não possui marcha-atrás autónoma nem sensores de retorno automático ao posto de enfermagem.",
      "Está incorreta: A massa é uma constante intrínseca e não duplica por se soltarem os manípulos de condução."
    ],
    "nursingApplication": "Nunca soltar equipamentos pesados em movimento é uma regra fundamental de segurança e prevenção de acidentes de trabalho."
  },
  {
    "id": 1188,
    "topicId": 1,
    "question": "Para acelerar uma maca com massa total de 100 kg a uma taxa de 0,5 m/s² num piso plano sem atrito, que força horizontal constante é necessária?",
    "options": [
      "500 N (calculada multiplicando a massa pela aceleração da gravidade terrestre).",
      "200 N (calculada dividindo a massa total pela aceleração linear imprimida).",
      "50 N (calculada por F = m · a = 100 kg · 0,5 m/s²), garantindo o equilíbrio estático.",
      "5 N (calculada dividindo a aceleração pela massa inercial da estrutura móvel)."
    ],
    "correctIndex": 2,
    "explanation": "Aplicando F = m·a: F = 100 kg · 0,5 m/s² = 50 N de força horizontal.",
    "distractorAnalysis": [
      "Está incorreta: 500 N corresponderia a acelerar a 5 m/s² ou a uma fração considerável do peso vertical da maca.",
      "Está incorreta: Dividir massa por aceleração (100 / 0,5 = 200) viola a fórmula direta F = m·a.",
      "Está incorreta: 5 N produziria uma aceleração quase imperceptível de apenas 0,05 m/s²."
    ],
    "nursingApplication": "Ajuda a equipa de enfermagem a dosear o esforço de empurrão inicial ao transportar doentes em corredores planos."
  },
  {
    "id": 1189,
    "topicId": 1,
    "question": "Num ensaio clínico biomecânico, um enfermeiro aplica sucessivamente forças horizontais de 20 N, 40 N e 60 N sobre uma cadeira de rodas de 20 kg (sem atrito). Quais são as respetivas acelerações?",
    "options": [
      "1,0 m/s², 2,0 m/s² e 3,0 m/s², confirmando a proporcionalidade direta entre força resultante e aceleração.",
      "0,5 m/s², 1,0 m/s² e 1,5 m/s², porque a massa duplica a cada incremento de força aplicada.",
      "2,0 m/s², 4,0 m/s² e 8,0 m/s², seguindo uma progressão geométrica exponencial de terceira ordem.",
      "Zero em todos os ensaios, pois a velocidade é sempre constante em pisos de ambiente hospitalar."
    ],
    "correctIndex": 0,
    "explanation": "Utilizando a = F/m com m = 20 kg: a1 = 20/20 = 1 m/s²; a2 = 40/20 = 2 m/s²; a3 = 60/20 = 3 m/s².",
    "distractorAnalysis": [
      "Está incorreta: A massa de 20 kg permanece constante; os valores calculados refletem a divisão correta de cada força por 20.",
      "Está incorreta: A progressão é estritamente linear e proporcional, não geométrica ou exponencial.",
      "Está incorreta: Em repouso sob força resultante não nula há aceleração; a velocidade não é constante sob força líquida."
    ],
    "nursingApplication": "Ilustra como pequenas variações no empurrão do profissional alteram a aceleração da cadeira."
  },
  {
    "id": 1190,
    "topicId": 1,
    "question": "Quando um enfermeiro cessa completamente a força de empurrão horizontal sobre uma maca que se move num piso com atrito desprezável, o que acontece à aceleração?",
    "options": [
      "A aceleração horizontal passa imediatamente a zero, e a maca passa a mover-se com velocidade constante (MRU).",
      "A aceleração aumenta instantaneamente para o valor máximo para compensar a perda do contacto manual.",
      "A maca inverte imediatamente o sentido da sua marcha, regressando ao ponto onde se encontrava o enfermeiro.",
      "A aceleração transforma-se numa força eletrostática que imobiliza as rodas no piso de vinil."
    ],
    "correctIndex": 0,
    "explanation": "Sem força resultante horizontal externa (F = 0), a aceleração é nula (a = 0) e o movimento torna-se uniforme (1.ª Lei).",
    "distractorAnalysis": [
      "Está incorreta: Aceleração não aumenta sem forças aplicadas; a ausência de força implica ausência de aceleração.",
      "Está incorreta: Um corpo em movimento não inverte o sentido sem que uma força resultante atue em sentido contrário.",
      "Está incorreta: A ausência de força manual não cria forças eletrostáticas de retenção instantânea."
    ],
    "nursingApplication": "Explica a facilidade com que macas bem lubrificadas continuam a deslocar-se suavemente por inércia."
  },
  {
    "id": 1191,
    "topicId": 1,
    "question": "Se a mesma força resultante horizontal de 120 N for aplicada a dois utentes em cadeiras de rodas (Utente 1 de 60 kg e Utente 2 de 120 kg), quais serão as respetivas acelerações (desprezando atrito)?",
    "options": [
      "Ambos os utentes adquirem rigorosamente a mesma aceleração de 1,5 m/s² porque a força é comum.",
      "O Utente 1 adquire uma aceleração de 2,0 m/s², enquanto o Utente 2 adquire apenas 1,0 m/s², metade da aceleração.",
      "O Utente 2 adquire 4,0 m/s² e o Utente 1 adquire 1,0 m/s², porque maior massa atrai maior aceleração.",
      "Nenhum utente se move porque 120 N é inferior ao limite biomecânico mínimo de arranque humano."
    ],
    "correctIndex": 1,
    "explanation": "a = F/m: para o Utente 1, a = 120 / 60 = 2 m/s²; para o Utente 2, a = 120 / 120 = 1 m/s² (inversamente proporcional à massa).",
    "distractorAnalysis": [
      "Está incorreta: Com massas diferentes, a mesma força produz acelerações obrigatoriamente distintas.",
      "Está incorreta: A aceleração é inversamente proporcional à massa; o corpo mais pesado adquire menor aceleração.",
      "Está incorreta: 120 N é uma força perfeitamente capaz de acelerar massas de 60 kg e 120 kg em superfícies planas sem atrito."
    ],
    "nursingApplication": "Mostra ao enfermeiro que utentes mais pesados respondem mais lentamente a impulsos mecânicos de mesma intensidade."
  },
  {
    "id": 1192,
    "topicId": 1,
    "question": "Quando duas forças horizontais opostas atuam sobre uma cadeira de rodas (F1 = 80 N para a direita e F2 = 50 N para a esquerda), qual é a aceleração de uma cadeira de 15 kg (sem atrito)?",
    "options": [
      "8,67 m/s² para a esquerda, calculada somando as forças escalares e dividindo pela massa.",
      "Zero m/s², porque forças que atuam em sentidos contrários anulam-se sempre automaticamente na saúde.",
      "2,0 m/s² para a direita, pois a força resultante é de 30 N para a direita (∑F = 80 - 50 = 30 N; a = 30 / 15).",
      "5,33 m/s² para a direita, dividindo a força maior diretamente pela massa sem considerar a oposição."
    ],
    "correctIndex": 2,
    "explanation": "Força resultante ∑F = 80 N - 50 N = 30 N (para a direita). Pela 2.ª Lei: a = ∑F / m = 30 / 15 = 2 m/s² para a direita.",
    "distractorAnalysis": [
      "Está incorreta: Somar 80 + 50 = 130 N ignoraria os sentidos opostos dos vetores das forças aplicadas.",
      "Está incorreta: Forças opostas só se anulam se tiverem rigorosamente o mesmo módulo (intensidade).",
      "Está incorreta: Ignorar a força contrária de 50 N violaria o princípio vetorial da resultante de forças."
    ],
    "nursingApplication": "Mostra ao enfermeiro que forças de resistência (como atrito ou declives) subtraem-se à força propulsora útil."
  },
  {
    "id": 1193,
    "topicId": 1,
    "question": "Dois enfermeiros empurram em conjunto uma maca de 120 kg no mesmo sentido ao longo do corredor, aplicando forças de 70 N e 50 N. Qual é a aceleração do conjunto (desprezando atrito)?",
    "options": [
      "0,17 m/s², calculada subtraindo a força menor à força maior e dividindo pela massa combinada.",
      "12,0 m/s², multiplicando a força combinada pela velocidade média de circulação hospitalar.",
      "Zero m/s², porque a presença de dois operadores cria uma interferência destrutiva biomecânica.",
      "1,0 m/s², pois as forças na mesma linha e sentido somam-se, gerando uma resultante de 120 N (a = 120 / 120 = 1)."
    ],
    "correctIndex": 3,
    "explanation": "∑F = F1 + F2 = 70 + 50 = 120 N. Da 2.ª Lei: a = ∑F / m = 120 N / 120 kg = 1 m/s² na direção do empurrão.",
    "distractorAnalysis": [
      "Está incorreta: As forças têm o mesmo sentido, logo somam-se (70+50=120 N) e não se subtraem (70-50=20 N).",
      "Está incorreta: A aceleração calcula-se por F/m e não multiplicando força por velocidade.",
      "Está incorreta: Trabalhar em equipa soma as forças aplicadas de forma construtiva e sinérgica."
    ],
    "nursingApplication": "Demonstra a eficácia do trabalho coordenado de dois profissionais no transporte rápido e seguro de utentes graves."
  },
  {
    "id": 1194,
    "topicId": 1,
    "question": "Se um enfermeiro aplicar sozinho uma força de tração de 300 N sobre um utente de 160 kg em decúbito dorsal cujo atrito estático máximo com o leito seja de 450 N, o que acontecerá?",
    "options": [
      "O utente acelerará imediatamente a 1,87 m/s² na direção da tração exercida pelo profissional.",
      "O utente não se moverá (aceleração nula, a = 0), e o enfermeiro sofrerá sobrecarga musculoesquelética estática inútil.",
      "O utente deslizará no sentido oposto ao puxão, caindo da cama pelo lado oposto por reação elástica.",
      "O leito hospitalar partir-se-á ao meio devido à anulação imediata da componente normal da gravidade."
    ],
    "correctIndex": 1,
    "explanation": "Como a força aplicada (300 N) é inferior ao atrito estático máximo (450 N), o corpo permanece em repouso (∑F = 0).",
    "distractorAnalysis": [
      "Está incorreta: Para acelerar o utente, a força aplicada teria de exceder 450 N; 300 N não vence o atrito estático.",
      "Está incorreta: O corpo não se desloca em sentido contrário ao empurrão quando a força é insuficiente; fica imóvel.",
      "Está incorreta: O leito suporta o peso normal do utente sem que forças estáticas de tração o partam."
    ],
    "nursingApplication": "Ensina que insistir em puxar sozinho quando o atrito não é vencido gera lesões lombares graves no profissional."
  },
  {
    "id": 1195,
    "topicId": 1,
    "question": "O uso de telas de transferência deslizantes de baixo atrito reduz a força necessária para acelerar o utente bariátrico porque:",
    "options": [
      "Reduz a força de atrito (Fat = μ · N), permitindo que uma força de empurrão menor resulte numa força resultante positiva para acelerar a massa.",
      "Diminui a inércia e a massa corporal real do utente ao distribuir o peso sobre uma película de polímero com elevada tensão superficial.",
      "Aumenta a componente vertical da gravidade, convertendo o trabalho muscular dos profissionais em energia potencial elástica no leito.",
      "Anula a necessidade de aplicar a 2.ª Lei de Newton, permitindo que a velocidade de translação aumente sem qualquer força resultante."
    ],
    "correctIndex": 0,
    "explanation": "A força motora necessária é F_motora = Fat + m·a. Ao reduzir o atrito Fat, a força que o enfermeiro precisa de fazer cai drasticamente.",
    "distractorAnalysis": [
      "Está incorreta: as telas deslizantes reduzem o coeficiente de atrito superficial (μ), mas a massa inercial do utente permanece rigorosamente constante.",
      "Está incorreta: os dispositivos deslizantes não alteram a gravidade nem armazenam energia elástica para mover o utente sozinhos.",
      "Está incorreta: a 2.ª Lei de Newton é universal; acelerar uma massa exige sempre uma força resultante não nula (∑F = m·a)."
    ],
    "nursingApplication": "Fundamenta a prescrição e exigência de dispositivos ergonómicos de baixa fricção em serviços de internamento."
  },
  {
    "id": 1196,
    "topicId": 1,
    "question": "Quando dois enfermeiros utilizam uma prancha de transferência (Rollbord) para passar um utente bariátrico da cama para a maca, o princípio dinâmico envolvido é:",
    "options": [
      "Transformar o atrito de deslizamento em atrito de rolamento, diminuindo substancialmente o coeficiente de atrito e, logo, a força resistente.",
      "Aumentar o coeficiente de atrito estático aplicando cera nas rodas, fazendo com que a maca deslize mais facilmente.",
      "Remover completamente o atrito usando lubrificante nas rodas, fazendo com que a força necessária para mover a maca seja zero.",
      "Substituir as rodas por patins de deslizamento metálicos, pois o atrito de deslizamento é sempre inferior ao de rolamento."
    ],
    "correctIndex": 0,
    "explanation": "O atrito de rolamento é ordens de grandeza inferior ao atrito de deslizamento, permitindo mover grandes massas com força mínima.",
    "distractorAnalysis": [
      "Está incorreta: aplicar cera nas rodas aumentaria o atrito, não o diminuiria; para reduzir a resistência ao movimento é necessário diminuir o coeficiente de atrito.",
      "Está incorreta: eliminar completamente o atrito tornaria a maca incontrolável em rampas e corredores; na prática, o atrito residual nunca é zero.",
      "Está incorreta: o atrito de rolamento (rodas) é substancialmente inferior ao atrito de deslizamento (patins); substituir rodas por patins aumentaria a força resistente."
    ],
    "nursingApplication": "Promove a adoção de tecnologias ergonómicas seguras que protegem tanto o doente como os profissionais de enfermagem."
  },
  {
    "id": 1197,
    "topicId": 1,
    "question": "Qual é a função primordial do sistema de travão central de acionamento por pedal nas macas modernas?",
    "options": [
      "Desacelerar a maca em movimento através de um circuito hidráulico que dissipa energia cinética antes da imobilização completa do leito.",
      "Reduzir a pressão interna dos pneus para aumentar a área de contacto e a força de atrito superficial com o pavimento hospitalar.",
      "Bloquear em simultâneo os rodízios através de atrito mecânico elevado, fornecendo a força necessária para imobilizar a maca sem esforço lombar do enfermeiro.",
      "Imobilizar unicamente as rodas direcionais da frente, mantendo as traseiras livres para permitir correções angulares da maca."
    ],
    "correctIndex": 2,
    "explanation": "O travão central gera a força de atrito solo-roda necessária para garantir ∑F = 0 e a = 0 sem sobrecarga para a equipa.",
    "distractorAnalysis": [
      "Está incorreta: o travão central atua por bloqueio mecânico direto das rodas para imobilização e não por dissipação hidráulica progressiva.",
      "Está incorreta: as macas hospitalares possuem rodas rígidas ou semi-rígidas sem variação de pressão pneumática para travagem.",
      "Está incorreta: o sistema central bloqueia em simultâneo todos os rodízios para estabilidade total durante transferências de doentes."
    ],
    "nursingApplication": "Reforça a verificação rotineira do bom funcionamento dos travões como medida preventiva de quedas e colisões."
  },
  {
    "id": 1198,
    "topicId": 1,
    "question": "Qual é o perigo mecânico de um enfermeiro tentar travar uma cadeira de rodas pesada em alta velocidade agarrando diretamente o aro metálico de propulsão manual das rodas?",
    "options": [
      "Pode sofrer queimaduras por fricção na pele e traumatismos graves nos dedos provocados pela rotação rápida das rodas.",
      "O atrito gerado anula a massa da cadeira de rodas, fazendo o veículo tombar instantaneamente para a frente.",
      "A força muscular exercida nas rodas transfere uma sobrecarga mecânica exclusiva aos ossos do crânio do cuidador.",
      "As rodas bloqueiam por travagem magnética passiva, impedindo qualquer libertação manual das pegas ergonómicas."
    ],
    "correctIndex": 0,
    "explanation": "A fricção manual contra o aro dissipa energia cinética sob a forma de calor intenso e forças de atrito elevadas que ferem a epiderme das mãos.",
    "distractorAnalysis": [
      "Está incorreta: o atrito dissipa energia mecânica sob a forma de calor dérmico, mas não tem o poder de alterar a massa inercial da cadeira.",
      "Está incorreta: a sobrecarga e lesões ocorrem primariamente nos tecidos moles palmares e articulações das mãos do profissional.",
      "Está incorreta: as cadeiras convencionais possuem aros mecânicos simples de propulsão manual sem qualquer sistema de travagem magnética."
    ],
    "nursingApplication": "Orienta o enfermeiro a utilizar sempre as pegas superiores com luvas e a acionar os manípulos de travão mecânico certificados."
  },
  {
    "id": 1199,
    "topicId": 1,
    "question": "Um estudante de enfermagem argumenta: 'Se a cada força de empurrão corresponde uma força de reação oposta e igual, então nenhuma maca se deveria conseguir mover'. Como deve o professor corrigir este erro?",
    "options": [
      "A maca move-se porque a força de empurrão do enfermeiro é sempre superior em módulo à força que a maca exerce sobre as suas mãos.",
      "A maca move-se porque as forças de ação e reação cancelam-se apenas durante a fase de repouso absoluto antes do arranque.",
      "A maca move-se porque a força de atrito das rodas com o piso empurra ativamente o veículo no sentido do movimento.",
      "A maca move-se porque a força que a acelera é a força que o enfermeiro exerce sobre a maca; a reação atua no enfermeiro, não na maca."
    ],
    "correctIndex": 3,
    "explanation": "Para a aceleração da maca (2.ª Lei), apenas conta a força exercida SOBRE a maca (F_enf->maca) e o atrito; a reação F_maca->enf atua no profissional.",
    "distractorAnalysis": [
      "Está incorreta: as intensidades das forças que trocam entre si são rigorosamente iguais pela 3.ª Lei (|F_enfermeiro| = |F_maca|).",
      "Está incorreta: as forças de ação e reação nunca se anulam entre si, nem no repouso nem no movimento, pois atuam em corpos diferentes.",
      "Está incorreta: o atrito nas rodas é uma força de oposição ao rolamento (ou tração no solo), não gerando aceleração motriz autónoma."
    ],
    "nursingApplication": "Resolve o paradoxo clássico da 3.ª Lei de Newton e capacita o estudante a analisar diagramas de corpo livre."
  },
  {
    "id": 1200,
    "topicId": 1,
    "question": "Se o coeficiente de atrito entre o calçado e o piso for extremamente baixo (ex: piso molhado com água e sabão), porque é que o enfermeiro não consegue caminhar com eficácia?",
    "options": [
      "A pessoa consegue caminhar com passadas muito mais longas porque o atrito reduzido facilita o balanço livre das pernas.",
      "A velocidade da marcha aumenta espontaneamente até atingir um valor constante de equilíbrio cinemático no corredor.",
      "A musculatura da bacia assume todo o trabalho de propulsão sem necessitar de qualquer contacto com o pavimento.",
      "A reação horizontal do solo é quase nula, impedindo a propulsão para a frente e provocando o deslizamento dos pés e queda."
    ],
    "correctIndex": 3,
    "explanation": "Sem atrito (Fat ≈ 0), a força horizontal máxima é insuficiente; o pé desliza para trás e a reação propulsora para a frente deixa de existir.",
    "distractorAnalysis": [
      "Está incorreta: em pisos muito escorregadios é necessário encurtar o passo para manter a linha de gravidade perpendicular ao chão e evitar derrapagens.",
      "Está incorreta: sem atrito horizontal para a frente, o pé escorrega para trás e a pessoa não consegue desenvolver velocidade de marcha.",
      "Está incorreta: o movimento do centro de massa do corpo depende de forças externas; os músculos internos sozinhos não aceleram o corpo no espaço."
    ],
    "nursingApplication": "Justifica a regra rigorosa de segurança de sinalizar e secar imediatamente pisos molhados em instituições hospitalares."
  },
  {
    "id": 1201,
    "topicId": 1,
    "question": "Qual é a relação direta entre a força de atrito exercida pelo piso e a capacidade de aceleração de um enfermeiro ao iniciar uma corrida de socorro?",
    "options": [
      "A força de atrito opõe-se sempre à corrida, pelo que quanto menor for o atrito, mais depressa o enfermeiro corre.",
      "A aceleração do enfermeiro é independente do atrito, resultando exclusivamente da pressão do ar atrás das costas.",
      "O atrito consome a massa das pernas, transformando os músculos em humidade e gotículas de ar durante o arranque.",
      "A força de atrito estático máxima do piso sobre a sola é a única força horizontal externa que propulsiona e acelera o corpo (a = Fat / m)."
    ],
    "correctIndex": 3,
    "explanation": "Para acelerar na horizontal, é imperativo ter uma força resultante externa horizontal; essa força é exatamente o atrito estático que o chão exerce no pé.",
    "distractorAnalysis": [
      "Está incorreta: Sem atrito a sola desliza no sítio e a aceleração horizontal é nula; o atrito com o solo é indispensável à propulsão.",
      "Está incorreta: A pressão do ar ambiente não fornece a força motora de aceleração no arranque da marcha humana.",
      "Está incorreta: O atrito não destrói matéria biológica nem vaporiza tecido muscular em corridas de emergência."
    ],
    "nursingApplication": "Conceito biofísico basilar: o atrito solo-pé não é apenas uma resistência, é o motor propulsor da locomoção terrestre."
  },
  {
    "id": 1202,
    "topicId": 1,
    "question": "Se um enfermeiro de 65 kg tentar acelerar a 2 m/s² num piso hospitalar cujo atrito estático máximo entre sola e piso seja de apenas 80 N, o que acontecerá?",
    "options": [
      "Necessita de uma força de reação horizontal de 130 N (F = m·a = 65·2); se o atrito máximo for menor, o profissional escorregará.",
      "Acelera imediatamente a 2 m/s² independentemente das características de atrito do pavimento ou do tipo de sola do calçado.",
      "A força necessária é de 650 N, correspondendo à multiplicação direta da massa pela aceleração da gravidade terrestre.",
      "O profissional não necessita de qualquer força horizontal, dado que a aceleração é gerada pela flexão da coluna lombar."
    ],
    "correctIndex": 0,
    "explanation": "Fat_max = 80 N < F_necessária (130 N). Quando a força exigida excede o atrito máximo estático, ocorre deslizamento da sola (escorregamento).",
    "distractorAnalysis": [
      "Está incorreta: pela 2.ª Lei, a aceleração requer uma força resultante externa real (F = 130 N); se o piso não a fornecer, os pés derrapam.",
      "Está incorreta: 650 N corresponde aproximadamente ao peso vertical do profissional (P = 65·10 N) e não à força horizontal motriz de arranque.",
      "Está incorreta: a flexão da coluna é um movimento articular interno; a aceleração do centro de massa depende da força externa de reação do solo."
    ],
    "nursingApplication": "Explica a física dos acidentes por escorregamento durante intervenções de emergência em pisos recém-lavados."
  },
  {
    "id": 1203,
    "topicId": 1,
    "question": "Se um enfermeiro utilizar uma toalha para secar a pele friável de um idoso esfregando-a vigorosamente para a frente e para trás, que erro mecânico está a cometer?",
    "options": [
      "Aplica forças de corte tangenciais repetidas e elevadas que podem descolar a epiderme da derme, causando lesões por fricção.",
      "Gera uma pressão perpendicular elevada que oclui os capilares superficiais e causa isquemia por compressão direta.",
      "Cria uma diferença de temperatura na interface pele-colchão que provoca queimaduras de baixa intensidade por condução.",
      "Produz uma força elétrica estática entre as fibras do lençol e a pele que danifica as proteínas da membrana celular."
    ],
    "correctIndex": 3,
    "explanation": "A pele senil possui junção dermoepidérmica adelgaçada e menor colagénio; forças de cisalhamento (atrito F = μ·N) rasgam facilmente as camadas dérmicas.",
    "distractorAnalysis": [
      "Está incorreta: a pressão perpendicular que oclui capilares é o mecanismo da isquemia por pressão (eritema de pressão); as forças de deslizamento (cisalhamento) causam lesões por fricção diferentes da isquemia por compressão.",
      "Está incorreta: as diferenças de temperatura na interface pele-colchão em condições normais de enfermagem são mínimas e insuficientes para causar queimaduras; as lesões por deslizamento são mecânicas, não térmicas.",
      "Está incorreta: as forças eletrostáticas geradas pelo atrito entre lençol e pele não danificam proteínas da membrana; as lesões por deslizamento são macroscópicas e mecânicas, não moleculares."
    ],
    "nursingApplication": "Orienta a técnica de enfermagem correta de secagem por contacto suave (tamponamento com toalha macia) sem fricção em doentes frágeis."
  },
  {
    "id": 1204,
    "topicId": 1,
    "question": "Para que as pernas de uma cadeira de banho não escorreguem no piso molhado do chuveiro durante o banho, os pés da cadeira devem possuir:",
    "options": [
      "Rodas de metal polido sem travões para facilitar a fuga rápida do utente em caso de incêndio.",
      "Agulhas pontiagudas de aço que perfurem o chão de mosaico até atingirem os tubos de esgoto.",
      "Ventosas de borracha antiderrapantes que aumentam o atrito estático e criam adesão por vácuo ao piso cerâmico liso.",
      "Ímanes permanentes que se liguem magneticamente aos azulejos de cerâmica da parede."
    ],
    "correctIndex": 2,
    "explanation": "As ventosas fornecem atrito estático elevado e força de retenção que impede que forças laterais acidentais desloquem a cadeira com o doente sentado.",
    "distractorAnalysis": [
      "Está incorreta: Rodas sem travão em pisos molhados transformam a cadeira num risco gravíssimo de queda descontrolada.",
      "Está incorreta: Agulhas de aço perfurariam o pavimento, destruindo a impermeabilização sem conferir estabilidade postural segura.",
      "Está incorreta: Azulejos cerâmicos e água não são ferromagnéticos, não aderindo a ímanes permanentes."
    ],
    "nursingApplication": "Regra de segurança crucial na prevenção de quedas de doentes dependentes no duche."
  },
  {
    "id": 1205,
    "topicId": 1,
    "question": "Quando dizemos em enfermagem que aplicamos uma 'força mecânica de contacto' (ao puxar, empurrar ou posicionar), a que força fundamental nos referimos em última análise?",
    "options": [
      "À Força Gravítica concentrada que os músculos esqueléticos exercem sobre as ferramentas de transferência hospitalar.",
      "À Força Nuclear Forte transmitida através dos tendões e fáscias musculares durante a fase de tração articular.",
      "À Força Eletromagnética, que atua na interface atómica entre os tecidos da mão e os materiais em contacto.",
      "À Força Nuclear Fraca, responsável pelas trocas osmóticas contínuas através da barreira dérmica das mãos do cuidador."
    ],
    "correctIndex": 2,
    "explanation": "Todas as forças mecânicas macroscópicas convencionais (tração, compressão, atrito, sustentação) são interações eletromagnéticas entre átomos.",
    "distractorAnalysis": [
      "Está incorreta: as forças de contacto macroscópicas (empurrão, tração, atrito) são todas de natureza fundamental eletromagnética.",
      "Está incorreta: as forças nucleares atuam estritamente no interior do núcleo atómico e não interagem na escala macroscópica de tecidos e luvas.",
      "Está incorreta: a força fraca atua no decaimento de partículas subatómicas e não tem qualquer função mecânica na força muscular ou contacto dérmico."
    ],
    "nursingApplication": "Conecta a prática diária de enfermagem com os princípios mais profundos da ciência dos materiais e física da matéria."
  },
  {
    "id": 1206,
    "topicId": 1,
    "question": "A que se deve microscopicamente a existência da Força de Atrito (Fat) entre duas superfícies sólidas em contacto aparente liso?",
    "options": [
      "À atração gravítica microscópica que atua entre as partículas de pó acumuladas sobre as superfícies de deslizamento.",
      "À rugosidade microscópica das superfícies (asperezas que engatam) e à adesão eletromagnética nos pontos reais de contacto atómico.",
      "À resistência aerodinâmica causada pela camada de ar retida entre as duas superfícies polidas em movimento relativo.",
      "À alteração da massa inercial dos corpos materiais provocada pelo aumento da velocidade relativa de translação."
    ],
    "correctIndex": 1,
    "explanation": "Nenhuma superfície macroscópica é perfeitamente plana: sob o microscópio existem picos e vales que colidem e estabelecem ligações eletrostáticas adesivas de atrito.",
    "distractorAnalysis": [
      "Está incorreta: o atrito seco é originado pelas forças eletromagnéticas de contacto entre asperezas microscópicas e não pela gravidade.",
      "Está incorreta: o atrito entre sólidos persiste mesmo no vácuo onde não há ar atmosférico, decorrendo do contacto entre asperezas.",
      "Está incorreta: o atrito clássico independe da velocidade em primeira aproximação e não altera a massa inercial intrínseca dos corpos."
    ],
    "nursingApplication": "Permite ao profissional compreender porque é que mesmo pisos aparentemente polidos oferecem resistência ao deslizamento."
  },
  {
    "id": 1207,
    "topicId": 1,
    "question": "Quando polimos muito uma superfície de aço inoxidável ou vidro até que fique extremamente lisa, o que acontece inicialmente ao coeficiente de atrito?",
    "options": [
      "O atrito diminui progressivamente à medida que as rugosidades grosseiras são eliminadas, permitindo um deslizamento muito mais fácil.",
      "O atrito aumenta de imediato porque a superfície polida retém humidade microscópica que cola as duas peças por capilaridade estática.",
      "O atrito anula-se de forma completa e imediata, deixando de existir qualquer resistência ao deslizamento em superfícies sem estrias.",
      "O atrito estático deixa de existir, passando o coeficiente a depender apenas da velocidade a que o material desliza no plano do leito."
    ],
    "correctIndex": 0,
    "explanation": "O alisamento reduz o engrenamento mecânico das asperezas, diminuindo a resistência ao deslizamento até ao limite ótimo de acabamento superficial.",
    "distractorAnalysis": [
      "Está incorreta: o polimento inicial reduz o engrenamento mecânico das asperezas, diminuindo significativamente a resistência ao atrito.",
      "Está incorreta: o atrito não se anula a zero; as forças de adesão molecular e o atrito cinético residual continuam sempre presentes.",
      "Está incorreta: o atrito estático permanece presente em materiais polidos; as leis do atrito continuam a distinguir repouso e movimento."
    ],
    "nursingApplication": "Orienta o fabrico de calhas de macas e hastes de bombas de infusão com acabamento polido de baixo atrito."
  },
  {
    "id": 1208,
    "topicId": 1,
    "question": "O desgaste contínuo e a abrasão observados nos rodízios de borracha das cadeiras de rodas hospitalares resultam de:",
    "options": [
      "A uma reação nuclear de superfície que consome os átomos de carbono presentes na borracha vulcanizada das rodas.",
      "Ao rompimento microscópico contínuo de microadesões moleculares e microfraturas nas asperezas em contacto com o piso hospitalar.",
      "À atração magnética gerada pelos cabos elétricos embebidos no pavimento cerâmico das enfermarias modernas.",
      "À evaporação espontânea da borracha sólida decorrente da pressão osmótica exercida pelo ar ambiente hospitalar."
    ],
    "correctIndex": 1,
    "explanation": "O atrito cinético dissipa energia e cisalha os topos das asperezas mecânicas, originando o desgaste gradual e a necessidade de manutenção do parque de equipamentos.",
    "distractorAnalysis": [
      "Está incorreta: o desgaste de pneus e rodízios é um fenómeno tribológico puramente mecânico de cisalhamento e fadiga de contacto.",
      "Está incorreta: o desgaste decorre do atrito mecânico de rolamento e deslizamento contra o piso rugoso e não de magnetismo subterrâneo.",
      "Está incorreta: a borracha sofre abrasão mecânica microscópica e degradação por oxidação, não ocorrendo evaporação física do elastómero."
    ],
    "nursingApplication": "Justifica os planos preventivos de manutenção e substituição periódica dos rodízios de transporte hospitalar."
  },
  {
    "id": 1209,
    "topicId": 1,
    "question": "Em qualquer par de materiais em contacto (ex: borracha-vinil, tecido-pele, metal-aço), como se comparam os coeficientes de atrito estático (μe) e cinético (μc)?",
    "options": [
      "O coeficiente cinético é sempre dez vezes superior ao estático em todas as circunstâncias físicas.",
      "Ambos os coeficientes são rigorosamente idênticos em todas as superfícies da natureza.",
      "O coeficiente estático é sempre zero enquanto o cinético atinge valores próximos do infinito.",
      "O coeficiente de atrito estático é SEMPRE maior do que o coeficiente de atrito cinético (μe > μc)."
    ],
    "correctIndex": 3,
    "explanation": "Em toda a literatura e ensaios experimentais de física e tribologia, verifica-se invariavelmente a desigualdade universal: μe > μc.",
    "distractorAnalysis": [
      "Está incorreta: O coeficiente cinético é sempre inferior ao estático; mover um corpo exige menos força do que arrancar.",
      "Está incorreta: Os coeficientes são distintos devido à dinâmica microscópica das microssoldaduras de contacto.",
      "Está incorreta: O atrito estático é real e substancial (μe habitualmente entre 0,3 e 1,0 em sólidos comuns)."
    ],
    "nursingApplication": "Regra de ouro da mecânica lecionada na biofísica médica para enfermagem."
  },
  {
    "id": 1210,
    "topicId": 1,
    "question": "Qual é a explicação física e molecular pela qual o coeficiente de atrito estático é maior que o cinético (μe > μc)?",
    "options": [
      "No estado estático há mais tempo para estabelecer microsoldaduras moleculares profundas entre as asperezas das superfícies em repouso.",
      "No estado cinético as superfícies fundem-se termicamente libertando fluidos lubrificantes que eliminam toda a resistência.",
      "No estado estático a força da gravidade atua com o dobro da intensidade sobre as moléculas superficiais dos corpos imóveis.",
      "No estado cinético o coeficiente de atrito anula-se devido à geração espontânea de um colchão de ar sob as superfícies."
    ],
    "correctIndex": 0,
    "explanation": "Durante o deslizamento cinético, os picos das asperezas apenas 'tocam de raspão' em alta cadência, sem tempo para estabelecer adesão molecular tão íntima.",
    "distractorAnalysis": [
      "Está incorreta: durante o deslizamento as asperezas apenas colidem e saltam sem tempo para estabelecer adesão molecular tão profunda.",
      "Está incorreta: a gravidade é constante (P = m·g) e não se altera com o estado de movimento ou repouso relativo do corpo.",
      "Está incorreta: o atrito cinético sólido não depende de colchões de ar espontâneos, mantendo-se o contacto real entre asperezas."
    ],
    "nursingApplication": "Permite responder com clareza e profundidade científica a perguntas teóricas de exame."
  },
  {
    "id": 1211,
    "topicId": 1,
    "question": "Como é que a presença de um filme fino de água ou óleo entre duas superfícies altera o coeficiente de atrito?",
    "options": [
      "Aumenta a força de atrito estático em cerca de dez vezes, soldando as duas superfícies uma à outra de forma quase permanente.",
      "Elimina a ação da gravidade entre as duas peças, permitindo que a superfície superior flutue sem exercer compressão vertical.",
      "Transforma o atrito cinético em atrito elétrico puro, conduzindo correntes galvânicas contínuas através da interface de contacto.",
      "Atua como lubrificante hidrodinâmico, separando as rugosidades microscópicas e reduzindo drasticamente o coeficiente de atrito entre os materiais."
    ],
    "correctIndex": 3,
    "explanation": "Filmes líquidos impedem o contacto atómico direto entre os sólidos, substituindo o atrito sólido pelo atrito viscoso do fluido (muito inferior).",
    "distractorAnalysis": [
      "Está incorreta: filmes líquidos fluidos diminuem a resistência ao deslizamento atuando como lubrificantes, e não aumentam o atrito estático em dez vezes.",
      "Está incorreta: a presença de um filme de líquido não altera a força peso nem a gravidade; apenas substitui o atrito seco por atrito viscoso fluido.",
      "Está incorreta: lubrificação mecânica reduz o desgaste por separação física de asperezas, não gerando correntes galvânicas descontroladas."
    ],
    "nursingApplication": "Explica porque derrames de soro fisiológico ou urina no chão aumentam imediatamente o risco de quedas graves por escorregamento."
  },
  {
    "id": 1212,
    "topicId": 1,
    "question": "Se o coeficiente de atrito de deslizamento da borracha no vinil for μ_desl = 0,5 e o coeficiente de resistência ao rolamento de um rodízio bem lubrificado for μ_rol = 0,01, qual é a razão entre as forças necessárias para empurrar uma maca de 100 kg?",
    "options": [
      "Empurrar a maca a rolar exige 50 vezes menos força do que arrastá-la com as rodas bloqueadas (10 N a rolar vs 500 N a deslizar).",
      "Empurrar a maca a rolar exige a mesma força porque a massa do doente acamado é de 100 kg em ambos os casos.",
      "Arrastar a maca exige dez vezes menos força porque o atrito cinético de deslizamento lubrifica o piso hospitalar.",
      "Empurrar a maca a rolar exige o dobro da força porque os rolamentos das rodas absorvem energia mecânica."
    ],
    "correctIndex": 0,
    "explanation": "F_desl = 0,5 · 1000 = 500 N; F_rol = 0,01 · 1000 = 10 N. Razão: 500 / 10 = 50 vezes menos esforço muscular!",
    "distractorAnalysis": [
      "Está incorreta: Mesma massa com mecanismos de atrito diferentes exige forças de deslocamento radicalmente diferentes.",
      "Está incorreta: Deslizar rodas bloqueadas requer força colossal (500 N ~ 51 kgf), arruinando a borracha e o piso.",
      "Está incorreta: Rolamentos de esferas com boa manutenção minimizam perdas, tornando o avanço extremamente suave e leve."
    ],
    "nursingApplication": "Demonstra a magnitude colossal da vantagem mecânica proporcionada pelos rodízios no trabalho hospitalar diário."
  },
  {
    "id": 1213,
    "topicId": 1,
    "question": "O que acontece quando os rodízios de uma maca ficam enredados com fios, cabelos e cotão do chão da enfermaria?",
    "options": [
      "A força de atrito diminui e o rodízio passa a girar muito mais rapidamente devido à redução do diâmetro mecânico do eixo.",
      "O atrito de rolamento converte-se em atrito cinético de deslizamento bloqueado (arrasto), aumentando enormemente a força necessária para empurrar a maca.",
      "O peso da maca reduz-se para metade porque os fios têxteis funcionam como amortecedores de gravidade sob a estrutura metálica.",
      "O rodízio inverte espontaneamente a sua direção de marcha para expelir os fios de sutura por centrifugação mecânica rápida."
    ],
    "correctIndex": 1,
    "explanation": "O bloqueio da rotação transforma o atrito de rolamento de baixo esforço em atrito de deslizamento com alto coeficiente, multiplicando a fadiga e lesões nos enfermeiros.",
    "distractorAnalysis": [
      "Está incorreta: o bloqueio mecânico do rolamento impede a rotação da roda e trava o rodízio, multiplicando o esforço necessário de tração.",
      "Está incorreta: os fios de sutura presos nas rodas aumentam a resistência passiva e o peso total do conjunto mantém-se rigorosamente o mesmo.",
      "Está incorreta: a rotação travada arrasta a borracha contra o pavimento sem capacidade de expulsão autónoma por efeito centrífugo."
    ],
    "nursingApplication": "Fundamenta a importância da limpeza e manutenção técnica preventiva regular de todas as rodas e equipamentos móveis hospitalares."
  },
  {
    "id": 1214,
    "topicId": 1,
    "question": "Se o coeficiente de atrito entre o corpo do doente de 80 kg e um lençol comum for μ = 0,5, mas ao usar uma tela deslizante cair para μ = 0,08, qual é a redução na força necessária para o puxar?",
    "options": [
      "A força diminui apenas 42 N (de 400 N para 358 N), correspondendo a uma redução modesta de 10% no esforço lombar dos profissionais de saúde.",
      "A força de tração mantém-se em 800 N porque o peso do doente permanece constante e determina obrigatoriamente a resistência ao movimento.",
      "A força de atrito diminui de 400 N para apenas 64 N (adotando g = 10 m/s²), uma redução espetacular de 84% no esforço exigido à equipa.",
      "A força necessária reduz-se exatamente a metade (caindo para 200 N), visto que qualquer dispositivo auxiliar divide a carga por dois."
    ],
    "correctIndex": 2,
    "explanation": "Fat_antigo = 0,5 · 800 = 400 N; Fat_novo = 0,08 · 800 = 64 N. Redução: 400 - 64 = 336 N (84% menos esforço manual).",
    "distractorAnalysis": [
      "Está incorreta: com μ = 0,08 a nova força é 0,08 × 800 N = 64 N; a redução real é de 336 N (84%), muito superior a 42 N.",
      "Está incorreta: o peso determina a normal, mas a força de atrito depende diretamente de μ (Fat = μ·N), descendo drasticamente com a tela.",
      "Está incorreta: a tela de baixo atrito reduz a força proporcionalmente à queda de μ (de 0,5 para 0,08, ou seja, 84%), e não em apenas 50%."
    ],
    "nursingApplication": "Demonstração matemática incontestável do impacto protetor dos dispositivos ergonómicos de baixa fricção."
  },
  {
    "id": 1215,
    "topicId": 1,
    "question": "Em doentes com fraturas de membros inferiores ou instabilidade da coluna vertebral, o benefício de utilizar dispositivos de transferência de baixo atrito é:",
    "options": [
      "Evitar solavancos, acelerações bruscas e forças de cisalhamento dolorosas nos focos de fratura através de deslizamento suave e contínuo.",
      "Aumentar a tração axial dos membros fraturados através de puxões rápidos e vigorosos para alinhar os ossos sem recurso a analgesia.",
      "Suspender os membros inferiores no ar sem qualquer suporte inferior durante a transferência para testar os reflexos osteotendinosos.",
      "Reduzir o tempo de transferência para menos de um segundo, independentemente do conforto e das queixas álgicas do paciente mobilizado."
    ],
    "correctIndex": 0,
    "explanation": "Com atrito reduzido, o movimento decorre com aceleração muito baixa (a ≈ 0) e sem puxões desfasados que deslocariam fragmentos ósseos.",
    "distractorAnalysis": [
      "Está incorreta: trações bruscas provocam dor lancinante, espasmo muscular reflexo e risco de lesão neurovascular no foco da fratura.",
      "Está incorreta: membros com fratura devem estar estavelmente apoiados e alinhados para impedir microdeslocamentos dos topos ósseos.",
      "Está incorreta: manobras de transferência exigem planeamento, suavidade e coordenação da equipa, e não pressa intempestiva e arriscada."
    ],
    "nursingApplication": "Garante a estabilização mecânica e a analgesia postural no manuseamento de doentes politraumatizados."
  },
  {
    "id": 1216,
    "topicId": 1,
    "question": "Como é que a lubrificação periódica com massas lubrificantes ou óleo sintético reduz o atrito nos rolamentos de esferas das macas hospitalares?",
    "options": [
      "Aumenta o coeficiente de atrito entre os rolamentos metálicos para assegurar que a maca não ganhe velocidade excessiva no corredor.",
      "Interpõe uma película fluida entre as esferas metálicas e o eixo, substituindo o atrito sólido seco pelo atrito viscoso fluido de valor muito inferior.",
      "Anula a força da gravidade que comprime as esferas de aço contra a pista interna dos rolamentos dos rodízios hospitalares.",
      "Converte a rotação circular das esferas metálicas num movimento linear oscilatório que arrefece o chassis do equipamento."
    ],
    "correctIndex": 1,
    "explanation": "A lubrificação hidrodinâmica previne o desgaste adesivo e abrasivo, mantendo a resistência ao rolamento no valor mínimo de fábrica.",
    "distractorAnalysis": [
      "Está incorreta: a lubrificação visa reduzir drasticamente o atrito e o desgaste, tornando o rolamento suave e com esforço mínimo para o profissional.",
      "Está incorreta: a gravidade continua a atuar nos componentes metálicos; o lubrificante impede o contacto direto metal-metal entre as asperezas.",
      "Está incorreta: os rolamentos mantêm a sua cinemática de rotação pura contínua, reduzindo as perdas por atrito e dissipação de calor."
    ],
    "nursingApplication": "Permite compreender a importância da manutenção preventiva hospitalar na preservação da saúde dos enfermeiros."
  },
  {
    "id": 1217,
    "topicId": 1,
    "question": "Qual é a exigência normativa das normas de segurança e saúde no trabalho (SST) para o calçado profissional de uso hospitalar em termos de solado?",
    "options": [
      "Que as camas possuam motores elétricos que acelerem o leito a velocidades superiores a cinco metros por segundo nas passagens.",
      "Que os equipamentos possuam rodízios de diâmetro adequado, manutenção periódica e sistemas de travamento funcionalmente operacionais.",
      "Que as camas hospitalares sejam completamente desprovidas de travões para facilitar a mobilização de emergência por qualquer pessoa.",
      "Que as rodas das macas sejam fabricadas em ferro fundido não vulcanizado para aumentar o ruído e alertar os peões no corredor."
    ],
    "correctIndex": 1,
    "explanation": "A classificação SRC exige testes de atrito rigorosos em pisos cerâmicos com detergente e em aço com glicerina, garantindo máxima proteção contra quedas.",
    "distractorAnalysis": [
      "Está incorreta: o transporte hospitalar deve ser executado a velocidade de marcha moderada e controlada para segurança do doente e do profissional.",
      "Está incorreta: o sistema de travamento central ou por pedal individual é um requisito obrigatório de segurança para evitar quedas e deslizamento do leito.",
      "Está incorreta: as normas exigem rodas com bandagem de borracha termoplástica ou poliuretano silencioso que amorteça impactos e reduza vibrações."
    ],
    "nursingApplication": "Orienta a aquisição e utilização de calçado de proteção individual certificado pelas equipas de enfermagem."
  },
  {
    "id": 1218,
    "topicId": 1,
    "question": "Qual é a primeira medida preventiva imediata que a equipa hospitalar deve adotar antes de iniciar a higienização húmida de um corredor?",
    "options": [
      "Sinalizar a área com placas amarelas visíveis de 'Piso Escorregadio' e proceder à lavagem por metades longitudinais, mantendo sempre uma faixa seca e desimpedida para circulação.",
      "Aguardar a evaporação natural do líquido à temperatura ambiente durante o turno de trabalho, orientando apenas verbalmente os doentes que transitam no local.",
      "Orientar os profissionais a caminhar aceleradamente sobre o líquido para espalhar a película líquida, acelerando o retorno do atrito estático ao piso vinílico.",
      "Cobrir o derrame com lençóis de pano comuns sem qualquer aviso visual, permitindo que o tráfego de macas continue normalmente sobre a superfície humedecida."
    ],
    "correctIndex": 0,
    "explanation": "Lavar por metades garante um percurso seguro contínuo com piso seco e atrito adequado, prevenindo o trânsito sobre superfícies com coeficiente de atrito reduzido.",
    "distractorAnalysis": [
      "Está incorreta: líquidos derramados reduzem o coeficiente de atrito de forma crítica; não sinalizar nem secar de imediato representa negligência com alto risco de queda.",
      "Está incorreta: caminhar sobre superfícies lubrificadas com passos rápidos aumenta drasticamente a probabilidade de escorregamento descontrolado do calcanhar.",
      "Está incorreta: cobrir líquidos com lençóis soltos sem sinalização cria um perigo oculto de deslizamento da interface tecido-piso para quem transita."
    ],
    "nursingApplication": "Regra de boas práticas de segurança ambiental e prevenção de acidentes graves em instituições de saúde."
  },
  {
    "id": 1219,
    "topicId": 1,
    "question": "Quando ocorre um derrame acidental de soro glicosado, sangue ou urina no chão da enfermaria, qual é o dever prioritário do enfermeiro que o deteta?",
    "options": [
      "Registar a ocorrência na plataforma informática para que a equipa de limpeza higienize o pavimento no próximo turno regular de trabalho.",
      "Sinalizar ou delimitar imediatamente o local de derrame e providenciar a sua absorção e secagem rápida para restaurar o atrito seguro do piso.",
      "Cobrir o líquido com um lençol de algodão comum para absorção passiva, permitindo que a passagem de pessoas prossiga normalmente.",
      "Aguardar que o fluido seque por ventilação natural, alertando os utentes apenas se manifestarem dificuldade de deambulação no corredor."
    ],
    "correctIndex": 1,
    "explanation": "Fluidos biológicos no piso diminuem imediatamente o atrito a níveis críticos; a intervenção imediata elimina a armadilha física de queda para doentes e colegas.",
    "distractorAnalysis": [
      "Está incorreta: adiar a intervenção para outro turno mantém uma armadilha biomecânica de queda iminente ativa no corredor da enfermaria.",
      "Está incorreta: colocar um lençol solto sobre piso molhado cria um plano de deslizamento desprovido de atrito, agravando o risco de queda.",
      "Está incorreta: fluidos como soro ou sangue reduzem criticamente o atrito e exigem sinalização e secagem imediatas para prevenir acidentes."
    ],
    "nursingApplication": "Promove a cultura de segurança ativa e corresponsabilidade de toda a equipa multiprofissional."
  },
  {
    "id": 1220,
    "topicId": 1,
    "question": "Como funciona fisicamente o sistema de travão mecânico centralizado acionado por pedal nas camas e macas hospitalares?",
    "options": [
      "O pedal aciona um circuito hidráulico que drena o ar sob pressão dos pneus dos rodízios, fazendo assentar o chassis de aço diretamente sobre a superfície do pavimento do quarto.",
      "O pedal atua sobre um mecanismo de cames e barras de aço que comprime sapatas de travão de alta fricção contra a banda de rolamento das rodas, gerando uma elevada força de atrito estático que impede a sua rotação.",
      "O pedal recolhe mecanicamente as quatro rodas para dentro das pernas da cama, apoiando a estrutura metálica diretamente no chão para anular a força de reação normal do solo.",
      "O pedal inverte a rotação das engrenagens internas dos rolamentos de esferas, forçando as rodas a girar continuamente no sentido contrário a qualquer empurrão executado pelo enfermeiro."
    ],
    "correctIndex": 1,
    "explanation": "Ao bloquear mecanicamente o eixo e a roda por fricção, qualquer tentativa de mover a cama exige vencer o atrito estático de deslizamento borracha-piso em quatro rodas em simultâneo (Fat_max enorme).",
    "distractorAnalysis": [
      "Está incorreta: o travão de leito hospitalar é puramente mecânico (alavancas e sapatas de fricção rígidas) e não depende de esvaziamento pneumático.",
      "Está incorreta: o mecanismo comprime sapatas internas contra as rodas sem recolher a estrutura, mantendo a cama erguida e travada sob apoio dos rodízios.",
      "Está incorreta: o travão não é um motor ativo contrarrotativo, mas um sistema passivo de bloqueio por atrito estático que impede a rotação das rodas."
    ],
    "nursingApplication": "Permite ao enfermeiro compreender o princípio de segurança passiva que mantém as camas absolutamente fixas."
  },
  {
    "id": 1221,
    "topicId": 1,
    "question": "Se um enfermeiro aplicar uma força horizontal de 180 N numa cama hospitalar travada cuja força de atrito estático máxima combinada nas quatro rodas seja de 350 N, qual é o valor da força de atrito estático que atua sobre a cama?",
    "options": [
      "A maca acelera imediatamente a dois metros por segundo ao quadrado no corredor devido à conservação da quantidade de movimento.",
      "A maca começa a mover-se com velocidade constante porque qualquer força não nula supera automaticamente a inércia dos rodízios.",
      "A força de atrito estático anula-se de imediato, permitindo que a maca entre em regime de deslizamento livre sem qualquer resistência.",
      "A maca permanece perfeitamente imóvel em repouso estático, pois a força aplicada (180 N) é inferior à força de atrito estático máxima (Fat,max = 200 N)."
    ],
    "correctIndex": 3,
    "explanation": "Propriedade auto-ajustável do atrito estático: Fat,e = F_aplicada = 180 N, garantindo ∑Fx = 180 - 180 = 0 N (repouso estático contínuo).",
    "distractorAnalysis": [
      "Está incorreta: se a força externa não supera o atrito estático máximo (180 N < 200 N), a aceleração é estritamente zero.",
      "Está incorreta: para iniciar o movimento a partir do repouso, a força motriz tem obrigatoriamente de superar o limiar do atrito estático de pico.",
      "Está incorreta: a força de atrito estático ajusta-se para exatamente 180 N em sentido oposto, equilibrando o empurrão (∑F = 0) e mantendo o repouso."
    ],
    "nursingApplication": "Testa com precisão a compreensão teórica avançada de que o atrito estático real é menor ou igual ao atrito estático máximo."
  },
  {
    "id": 1222,
    "topicId": 1,
    "question": "Se um objeto de madeira colocado sobre uma placa de aço começar a deslizar exatamente quando a placa atinge uma inclinação de 30 graus (onde tan 30° ≈ 0,577), qual é o coeficiente de atrito estático entre esses dois materiais?",
    "options": [
      "Aproximadamente 0,58 (pois μe = tan θc = tan 30° ≈ 0,577), garantindo o equilíbrio estático.",
      "Exatamente 1,00 (pois todos os coeficientes de atrito na natureza são iguais à unidade pura).",
      "Aproximadamente 30,0 (calculado multiplicando o ângulo em graus pelo volume da placa de aço).",
      "Zero (porque se o objeto começou a deslizar significa que o atrito deixou de existir)."
    ],
    "correctIndex": 0,
    "explanation": "μe = tan θc = tan 30° ≈ 0,577. Este método clássico de rampa inclinada é utilizado em laboratório para medir coeficientes de atrito com precisão.",
    "distractorAnalysis": [
      "Está incorreta: Os coeficientes de atrito variam continuadamente entre valores próximos de zero até superiores a 1,0 consoante os materiais.",
      "Está incorreta: O coeficiente é adimensional e não se multiplica arbitrariamente por graus geométricos de ângulos.",
      "Está incorreta: O atrito estático existia e impediu o movimento até aos 30°; o valor no limiar define exatamente μe."
    ],
    "nursingApplication": "Ensina o método experimental padrão da física para determinação de coeficientes tribológicos de superfícies."
  },
  {
    "id": 1223,
    "topicId": 1,
    "question": "Qual das quatro forças fundamentais é responsável pela atração mútua entre massas, pelo Peso do doente e pela órbita dos planetas?",
    "options": [
      "A Força Eletromagnética, que regula a atração eletrostática entre iões dissolvidos nos fluidos corporais.",
      "A Força Gravítica (Gravidade), que atua à distância entre todos os corpos que possuem massa inercial.",
      "A Força Nuclear Forte, que mantém a coesão dos núcleos celulares através de forças de atração molecular.",
      "A Força Nuclear Fraca, que determina a pressão de vapor de líquidos anestésicos voláteis no bloco cirúrgico."
    ],
    "correctIndex": 1,
    "explanation": "A força gravítica rege a atração proporcional às massas e inversamente proporcional ao quadrado da distância (Lei de Newton da Gravitação).",
    "distractorAnalysis": [
      "Está incorreta: a força eletromagnética atua entre partículas com carga elétrica e não é a força universal de atração de massas macroscópicas.",
      "Está incorreta: a força nuclear forte atua apenas entre quarks e nucleões no núcleo atómico, não tendo papel na atração astronómica ou peso.",
      "Está incorreta: a força nuclear fraca regula processos de desintegração de partículas subatómicas e não a pressão de vapor ou o peso dos corpos."
    ],
    "nursingApplication": "Fundamenta o cálculo do peso (P = m·g) e a influência da gravidade na circulação e postura do doente."
  },
  {
    "id": 1224,
    "topicId": 1,
    "question": "Qual das quatro forças fundamentais é a mais forte de todas na natureza, mas possui um alcance ultracurto confinado ao interior do núcleo atómico?",
    "options": [
      "A Força Gravítica, que atrai as massas dos planetas e estrelas com a maior intensidade intrínseca conhecida.",
      "A Força Eletromagnética, que repele cargas elétricas de mesmo sinal à escala macroscópica no laboratório.",
      "A Força Nuclear Fraca, responsável pelas reações de decaimento nos tratamentos de medicina nuclear diagnóstica.",
      "A Força Nuclear Forte, que supera a repulsão elétrica entre protões e mantém o núcleo atómico estável."
    ],
    "correctIndex": 3,
    "explanation": "A força nuclear forte é cerca de 100 vezes mais intensa que a eletromagnética, mas o seu raio de ação limita-se a ~10⁻¹⁵ metros (1 fentómetro).",
    "distractorAnalysis": [
      "Está incorreta: a força gravítica é intrinsecamente a mais fraca das quatro forças fundamentais da natureza (cerca de 10³⁸ vezes mais fraca).",
      "Está incorreta: a força eletromagnética é extremamente intensa, mas é superada pela força nuclear forte a distâncias subatómicas nucleares.",
      "Está incorreta: a força nuclear fraca é de intensidade muito inferior à força forte e à eletromagnética, tendo alcance subnuclear."
    ],
    "nursingApplication": "Esclarece a escala de atuação das forças da natureza e contextualiza o estudo da matéria viva."
  },
  {
    "id": 1225,
    "topicId": 1,
    "question": "Ordenando as quatro forças fundamentais da mais intensa para a menos intensa, qual é a sequência correta?",
    "options": [
      "Gravítica > Nuclear Forte > Eletromagnética > Nuclear Fraca.",
      "Nuclear Forte > Eletromagnética > Nuclear Fraca > Gravítica.",
      "Eletromagnética > Gravítica > Nuclear Forte > Nuclear Fraca.",
      "Nuclear Fraca > Nuclear Forte > Gravítica > Eletromagnética."
    ],
    "correctIndex": 1,
    "explanation": "A força forte tem intensidade relativa 1; eletromagnética ~10⁻²; fraca ~10⁻¹³; gravítica ~10⁻³⁹ (a mais fraca de todas).",
    "distractorAnalysis": [
      "Está incorreta: A gravidade é a mais fraca de todas, necessitando da massa colossal de um planeta inteiro para gerar forças percetíveis.",
      "Está incorreta: A eletromagnética é cerca de 100 vezes mais fraca que a nuclear forte no interior dos núcleos atómicos.",
      "Está incorreta: A nuclear fraca é muitas ordens de magnitude inferior à eletromagnética e à nuclear forte."
    ],
    "nursingApplication": "Permite ao estudante compreender porque a gravidade só se manifesta em corpos com grande quantidade de massa."
  },
  {
    "id": 1226,
    "topicId": 1,
    "question": "Qual é a consequência da microgravidade no espaço (estação espacial) sobre a integridade biomecânica dos ossos dos astronautas?",
    "options": [
      "Aumento excessivo da densidade óssea cortical devido à eliminação do peso corporal que normalmente desgasta a matriz trabecular do fémur.",
      "Anquilose articular precoce das vértebras lombares provocada pela ausência de forças de atrito durante os movimentos rotacionais no habitáculo.",
      "A ausência contínua de forças normais reduz o estímulo osteoblástico (Lei de Wolff), levando a reabsorção óssea rápida e osteopenia por desuso.",
      "Imobilização permanente de todas as articulações sinoviais decorrente da rápida dessecação do líquido sinovial articular nos membros."
    ],
    "correctIndex": 2,
    "explanation": "O tecido ósseo é piezoelétrico e dinâmico: necessita de cargas mecânicas eletromagnéticas diárias para manter o equilíbrio entre osteoblastos e osteoclastos.",
    "distractorAnalysis": [
      "Está incorreta: a ausência de carga mecânica conduz a osteopenia e osteoporose por desuso (reabsorção osteoclástica) e nunca a hipertrofia óssea.",
      "Está incorreta: no espaço os discos intervertebrais expandem-se ligeiramente aumentando a estatura, não ocorrendo anquilose ou calcificação óssea.",
      "Está incorreta: a secreção e lubrificação sinovial mantêm-se funcionais, desde que haja mobilização articular ativa dos membros."
    ],
    "nursingApplication": "Ilustra de forma brilhante porque o enfermeiro deve incentivar a deambulação precoce e a carga funcional nos doentes acamados."
  },
  {
    "id": 1227,
    "topicId": 1,
    "question": "De acordo com a definição científica ensinada na aula, como se conceitua uma Força?",
    "options": [
      "Uma propriedade imaterial e escalar que quantifica unicamente a temperatura interna dos tecidos musculares.",
      "Uma ação ou interação física entre corpos capaz de alterar o seu estado de movimento ou de lhes causar deformação.",
      "A energia cinética acumulada num segmento esquelético durante a manutenção de repouso absoluto no leito.",
      "A taxa temporal de síntese proteica observada nos miócitos em resposta ao treino de força em reabilitação."
    ],
    "correctIndex": 1,
    "explanation": "Força é a grandeza vetorial de interação mecânica que pode alterar o vetor velocidade ou deformar os corpos.",
    "distractorAnalysis": [
      "Está incorreta: A temperatura interna é uma grandeza termodinâmica escalar, e não uma força.",
      "Está incorreta: Energia cinética é energia associada ao movimento escalar, não se confundindo com força.",
      "Está incorreta: A taxa de síntese proteica é um processo bioquímico e genético celular."
    ],
    "nursingApplication": "Na manipulação de doentes, compreender a força como interação ajuda a dosear o esforço de tração ou sustentação."
  },
  {
    "id": 1228,
    "topicId": 1,
    "question": "Que tipo de grandeza física é a Força, considerando a necessidade de especificar direção e sentido?",
    "options": [
      "Uma grandeza vetorial, pois só fica completamente definida conhecendo-se o seu ponto de aplicação, direção, sentido e módulo.",
      "Uma grandeza escalar, bastando um valor numérico positivo e uma unidade de massa para a sua caracterização.",
      "Uma grandeza adimensional, por não possuir correspondência com unidades fundamentais do Sistema Internacional.",
      "Uma constante universal que mantém rigorosamente o mesmo valor em qualquer sistema biomecânico humano."
    ],
    "correctIndex": 0,
    "explanation": "A força requer módulo, direção, sentido e ponto de aplicação, características que definem uma grandeza vetorial.",
    "distractorAnalysis": [
      "Está incorreta: Grandezas escalares não requerem direção nem sentido (ex: tempo, massa, temperatura).",
      "Está incorreta: A força tem unidade dimensional padrão (Newton: kg·m/s²) e não é adimensional.",
      "Está incorreta: A força varia consoante a interação mecânica, não sendo uma constante física universal."
    ],
    "nursingApplication": "O enfermeiro deve ter presente que puxar para a direita ou para a esquerda são forças distintas mesmo com o mesmo módulo."
  },
  {
    "id": 1229,
    "topicId": 1,
    "question": "Quando duas forças de mesma intensidade atuam num corpo, o efeito mecânico resultante pode ser diferente se:",
    "options": [
      "A temperatura da sala de internamento sofrer uma variação de um grau Celsius durante a tarde.",
      "As forças forem aplicadas em direções ou sentidos diferentes, alterando a soma vetorial resultante.",
      "O corpo for constituído por matéria orgânica em vez de polímeros sintéticos hospitalares.",
      "O cronómetro utilizado para a cronometragem for do tipo digital e não de ponteiros mecânicos."
    ],
    "correctIndex": 1,
    "explanation": "O efeito de um conjunto de forças depende estritamente da geometria vetorial (direções e sentidos relativos).",
    "distractorAnalysis": [
      "Está incorreta: A temperatura ambiente em níveis normais não altera as leis fundamentais da composição vetorial de forças.",
      "Está incorreta: As leis da mecânica newtoniana aplicam-se com o mesmo rigor a materiais biológicos e inorgânicos.",
      "Está incorreta: O tipo de cronómetro não altera a resultante física das forças aplicadas no sistema."
    ],
    "nursingApplication": "Nas transferências com lençol móvel, a direção em que cada enfermeiro puxa determina a trajetória do doente."
  },
  {
    "id": 1230,
    "topicId": 1,
    "question": "Porque é incorreto expressar formalmente uma força de tração ortopédica em 'quilogramas' numa ficha de enfermagem?",
    "options": [
      "Porque o quilograma só pode ser legalmente utilizado para mensurar volumes de soluções líquidas perfundidas.",
      "Porque o quilograma é a unidade SI de massa, enquanto a força de tração deve ser expressa em Newtons (N).",
      "Porque o quilograma mede exclusivamente temperaturas basais em doentes febris na enfermaria.",
      "Porque o quilograma é uma unidade vetorial que se altera automaticamente com a orientação da cama."
    ],
    "correctIndex": 1,
    "explanation": "Massa e força são grandezas físicas distintas; a massa mede-se em kg e a força de tração em Newtons (N).",
    "distractorAnalysis": [
      "Está incorreta: Volumes de fluidos medem-se em litros (L) ou metros cúbicos (m³), não em quilogramas.",
      "Está incorreta: Temperatura mede-se em graus Celsius (°C) ou Kelvin (K), sem relação com o quilograma.",
      "Está incorreta: O quilograma é uma grandeza estritamente escalar invariável com a postura ou orientação espacial."
    ],
    "nursingApplication": "O rigor na terminologia física evita equívocos entre a massa pendurada num suporte de tração e a força exercida."
  },
  {
    "id": 1231,
    "topicId": 1,
    "question": "Se representarmos graficamente um vetor força através de um segmento de reta orientado (flecha), o comprimento da flecha representa:",
    "options": [
      "A intensidade ou módulo da força, de acordo com uma escala métrica previamente estabelecida (ex: 1 cm = 50 N).",
      "O sentido da força, que é determinado pela extensão física da linha desenhada no diagrama.",
      "O ponto de aplicação anatómico, que se estende por toda a longitude do traço gráfico no esquema.",
      "A massa total do segmento corporal submetido à ação muscular durante o procedimento clínico."
    ],
    "correctIndex": 0,
    "explanation": "Em representação gráfica vetorial, o comprimento do segmento é proporcional à intensidade/módulo da força.",
    "distractorAnalysis": [
      "Está incorreta: O sentido é indicado exclusivamente pela ponta da flecha na extremidade do segmento.",
      "Está incorreta: O ponto de aplicação é indicado pela origem (início) do segmento de reta, não pelo seu comprimento.",
      "Está incorreta: A massa do segmento não é representada pelo comprimento da flecha de força."
    ],
    "nursingApplication": "A interpretação de diagramas vetoriais em fichas biomecânicas facilita a análise da distribuição de forças nos doentes."
  },
  {
    "id": 1232,
    "topicId": 1,
    "question": "Consultando a tabela de grandezas físicas lecionada, qual é a classificação e unidade SI da Força (F)?",
    "options": [
      "Grandeza puramente escalar, expressa em Pascais (Pa), cuja ação única é quantificar a inércia molecular.",
      "Grandeza escalar fundamental, medida em Quilogramas (kg), que define a massa atómica corporal.",
      "Grandeza vetorial, com unidade no SI em Newton (N), cuja ação produz aceleração ou deformação mecânica.",
      "Grandeza vetorial aditiva, medida em Joules (J), que representa a energia calórica libertada na respiração."
    ],
    "correctIndex": 2,
    "explanation": "A força é uma grandeza vetorial com unidade SI em Newton (N), que atua produzindo aceleração ou deformação.",
    "distractorAnalysis": [
      "Está incorreta: A força é vetorial e mede-se em Newtons; o Pascal mede a grandeza derivada de pressão (N/m²).",
      "Está incorreta: O quilograma mede a massa (grandeza escalar fundamental), não a força.",
      "Está incorreta: O Joule mede trabalho e energia mecânica (N·m), e não força."
    ],
    "nursingApplication": "Identificar a força como vetorial alerta o enfermeiro para o alinhamento da tração em doentes ortopédicos."
  },
  {
    "id": 1233,
    "topicId": 1,
    "question": "No estudo das grandezas físicas da aula, que exemplo biológico é explicitamente apresentado para ilustrar a grandeza Força?",
    "options": [
      "A temperatura corporal axilar medida com um termómetro digital clínico calibrado à cabeceira do leito hospitalar.",
      "A massa corporal total de um utente avaliada numa balança médica aferida em quilogramas no momento da admissão.",
      "O volume total de líquido e soro fisiológico administrado por perfusão intravenosa contínua ao longo de um turno de serviço.",
      "A força muscular gerada pela contração ativa do músculo quadricípite sobre a tuberosidade anterior da tíbia do utente."
    ],
    "correctIndex": 3,
    "explanation": "A biomecânica médica exemplifica a força com a contração muscular do quadríceps na extensão da perna sobre a coxa.",
    "distractorAnalysis": [
      "Está incorreta: a temperatura corporal é uma grandeza puramente escalar, ficando completamente definida apenas pela sua magnitude numérica e unidade (°C).",
      "Está incorreta: a massa é uma grandeza escalar representativa da inércia da matéria, não possuindo direção nem sentido no espaço.",
      "Está incorreta: o volume é uma grandeza escalar (expressa em mL ou litros), não apresentando qualquer vetor ou orientação espacial associada."
    ],
    "nursingApplication": "O quadríceps é o principal extensor do joelho, crucial para o enfermeiro avaliar a estabilidade na bipedestação."
  },
  {
    "id": 1234,
    "topicId": 1,
    "question": "Porque é que a Força não pode ser classificada como uma grandeza puramente escalar na análise biomecânica?",
    "options": [
      "Porque o seu efeito físico depende obrigatoriamente da orientação no espaço (direção e sentido) e do ponto de aplicação.",
      "Porque a sua intensidade varia instantaneamente com a temperatura do ar ambiente em qualquer enfermaria.",
      "Porque as forças só existem quando os corpos se encontram em movimento retilíneo uniformemente retardado.",
      "Porque o Sistema Internacional proíbe o uso de escalares em sistemas biológicos do corpo humano."
    ],
    "correctIndex": 0,
    "explanation": "Uma grandeza que depende de direção e sentido é por definição vetorial; um escalar requer apenas valor numérico e unidade.",
    "distractorAnalysis": [
      "Está incorreta: A natureza vetorial da força decorre da sua geometria espacial e não de oscilações térmicas ambientes.",
      "Está incorreta: As forças atuam tanto em repouso estático como em corpos com qualquer tipo de movimento.",
      "Está incorreta: O SI adota tanto grandezas escalares (massa, tempo) como vetoriais (força, velocidade) na biologia."
    ],
    "nursingApplication": "Orientar a força no sentido anatómico correto previne luxações articulares em transferências no leito."
  },
  {
    "id": 1235,
    "topicId": 1,
    "question": "Consultando a tabela de grandezas físicas das grandezas físicas, qual é a classificação e unidade SI da Massa (m)?",
    "options": [
      "Grandeza vetorial, medida em Newtons (N), que atua orientada verticalmente em direção ao núcleo terrestre.",
      "Grandeza derivada, expressa em Pascais (Pa), que quantifica o atrito de rolamento entre duas superfícies.",
      "Grandeza adimensional, expressa em percentagem, representativa da taxa metabólica basal de repouso.",
      "Grandeza escalar, com unidade padrão no SI em Quilograma (kg), que quantifica a quantidade de matéria de um corpo."
    ],
    "correctIndex": 3,
    "explanation": "A massa é uma grandeza física escalar intrínseca medida em quilogramas (kg) no Sistema Internacional.",
    "distractorAnalysis": [
      "Está incorreta: A força gravítica vetorial orientada para o centro da Terra é o peso (P), e não a massa.",
      "Está incorreta: O Pascal (Pa) é a unidade de pressão mecânica, não tendo relação com a massa corporal.",
      "Está incorreta: A massa tem dimensão física de base no SI (quilograma) e não é uma percentagem adimensional."
    ],
    "nursingApplication": "A pesagem do utente na balança hospitalar determina a massa em kg, crucial para cálculo de doses de fármacos."
  },
  {
    "id": 1236,
    "topicId": 1,
    "question": "De acordo com a tabela de grandezas físicas das grandezas físicas, qual é a definição e unidade SI do Peso (P)?",
    "options": [
      "Grandeza vetorial, medida em Newtons (N), que representa a força de atração gravítica exercida sobre um corpo (P = m·g).",
      "Grandeza escalar intrínseca, medida em Quilogramas (kg), correspondente à quantidade pura de matéria corporal.",
      "Grandeza derivada, expressa em Pascais (Pa), que quantifica a área superficial ocupada pelo doente no colchão.",
      "Grandeza constante que mede o trabalho metabólico cardíaco realizado pelo miocárdio em repouso estático."
    ],
    "correctIndex": 0,
    "explanation": "O peso é a força vetorial gravítica (P = m·g), orientada verticalmente para o centro da Terra, expressa em Newtons (N).",
    "distractorAnalysis": [
      "Está incorreta: A massa é que é uma grandeza escalar medida em quilogramas; o peso é uma força vetorial medida em Newtons.",
      "Está incorreta: A área é expressa em metros quadrados (m²) e a pressão em Pascais (Pa), não o peso corporal.",
      "Está incorreta: O peso não é trabalho metabólico, mas sim a força com que a gravidade atrai a massa do indivíduo."
    ],
    "nursingApplication": "O peso do utente atua verticalmente sobre a cama e deve ser considerado na escolha de colchões adequados."
  },
  {
    "id": 1237,
    "topicId": 1,
    "question": "No estudo das grandezas físicas da aula, qual é o exemplo clínico atribuído à grandeza Peso?",
    "options": [
      "A contração voluntária dos músculos intercostais externos durante a inspiração profunda forçada.",
      "O peso exercido pelo corpo de um doente acamado sobre a superfície do colchão hospitalar.",
      "A leitura digital da frequência cardíaca exibida no monitor de parâmetros vitais da UCI.",
      "A diluição de eletrólitos numa solução parentérica de soro glicosado a 5% em água destilada."
    ],
    "correctIndex": 1,
    "explanation": "Exemplifica-se clinicamente o peso com 'Peso do doente sobre o colchão' na coluna de exemplos clínicos.",
    "distractorAnalysis": [
      "Está incorreta: A contração muscular é o exemplo associado à grandeza Força (muscular), e não ao peso gravitacional.",
      "Está incorreta: A frequência cardíaca é uma grandeza temporal e fisiológica, não correspondendo à força peso.",
      "Está incorreta: A diluição de eletrólitos é um fenómeno da química de soluções e farmacotécnica hospitalar."
    ],
    "nursingApplication": "O peso do doente deitado sobre o colchão gera forças normais de suporte que distribuem a sustentação do corpo."
  },
  {
    "id": 1238,
    "topicId": 1,
    "question": "Dimensionalmente, a que corresponde 1 Pascal (Pa) no Sistema Internacional de Unidades?",
    "options": [
      "A uma força de 1 Newton concentrada pontualmente sobre um volume de 1 litro de solução fisiológica.",
      "A uma massa de 1 quilograma acelerada à taxa constante de 1 metro por segundo ao quadrado no vácuo.",
      "A um trabalho mecânico de 1 Joule realizado ao longo de um percurso de 1 metro em piso horizontal.",
      "A uma força perpendicular de 1 Newton distribuída uniformemente sobre uma área de 1 metro quadrado (1 N/m²)."
    ],
    "correctIndex": 3,
    "explanation": "Por definição no SI: 1 Pa = 1 N/m² = 1 kg/(m·s²), relacionando diretamente força e área superficial.",
    "distractorAnalysis": [
      "Está incorreta: Força por volume é peso específico ou gradiente de pressão por comprimento, não a unidade de pressão.",
      "Está incorreta: 1 kg acelerado a 1 m/s² é a definição da unidade de Força (1 Newton), e não de Pressão (Pascal).",
      "Está incorreta: 1 Joule por metro corresponde dimensionalmente a 1 Newton (força = trabalho / distância)."
    ],
    "nursingApplication": "Esta equivalência permite calcular a pressão exercida por calçados e apoios corporais em superfícies planas."
  },
  {
    "id": 1239,
    "topicId": 1,
    "question": "Se um equipamento de pesagem hospitalar registar 90 kg para um utente, que grandeza física mediu diretamente através de uma célula de carga calibrada?",
    "options": [
      "Mede diretamente o volume plasmático total em litros através de ressonância mecânica nas células de carga.",
      "Aferiu a força de compressão vertical (cerca de 882 N) e converteu-a matematicamente em massa de 90 kg através da divisão por g.",
      "Avalia a densidade mineral óssea trabecular do calcâneo convertendo-a em quilogramas de hidroxiapatite.",
      "Regista a velocidade média do metabolismo basal do doente através da dilatação térmica da balança."
    ],
    "correctIndex": 1,
    "explanation": "As balanças eletrónicas modernas medem a força peso vertical sobre os sensores piezoelétricos e calibram a leitura para massa (m = P/g).",
    "distractorAnalysis": [
      "Está incorreta: Balanças não medem volume de plasma nem utilizam ressonância mecânica para fluidos biológicos.",
      "Está incorreta: A densidade óssea requer densitometria radiológica DEXA e não sensores de carga de balança.",
      "Está incorreta: O metabolismo basal é estimado por calorimetria indireta e não pela pesagem mecânica direta."
    ],
    "nursingApplication": "O enfermeiro deve assegurar que a balança está em piso plano e nivelado para que a célula de carga meça a força vertical correta."
  },
  {
    "id": 1240,
    "topicId": 1,
    "question": "Se o músculo quadríceps exercer uma força de tração de 800 N no tendão patelar, que grandeza vetorial atua na tuberosidade tibial?",
    "options": [
      "Uma pressão puramente escalar de 800 Pa espalhada aleatoriamente por todos os ossos do pé e tarso.",
      "Uma quantidade de matéria inercial de 800 kg adicionada transitoriamente à tíbia durante a contração muscular.",
      "Uma força vetorial de 800 N com ponto de aplicação na tuberosidade da tíbia, orientada ao longo do ligamento patelar.",
      "Um momento nulo que impede qualquer rotação ou movimento da perna em relação à articulação do joelho."
    ],
    "correctIndex": 2,
    "explanation": "A força muscular transmite-se através do tendão patelar, atuando como um vetor de 800 N no ponto de inserção tibial.",
    "distractorAnalysis": [
      "Está incorreta: 800 N é uma força em Newtons; a pressão é a força dividida pela área de inserção (em Pascais).",
      "Está incorreta: A força muscular não altera a massa óssea da tíbia nem acrescenta matéria ao esqueleto.",
      "Está incorreta: A força atua fora do eixo articular do joelho, gerando um momento extensor não nulo (M = F·b)."
    ],
    "nursingApplication": "Esta tração permite esticar o joelho e sustentar o peso corporal do utente na transição de sentado para de pé."
  },
  {
    "id": 1241,
    "topicId": 1,
    "question": "Qual é a diferença entre 'equilíbrio estático' e 'ausência de forças' na física médica?",
    "options": [
      "O equilíbrio estático requer a anulação de campos gravíticos externos, enquanto a ausência de forças decorre do atrito superficial.",
      "No equilíbrio estático a aceleração é diferente de zero, enquanto na ausência de forças o corpo mantém uma velocidade angular constante.",
      "São conceitos idênticos na mecânica clássica, pois qualquer corpo com aceleração nula tem necessariamente zero forças aplicadas.",
      "No equilíbrio estático atuam múltiplas forças reais mas a sua resultante é zero (∑F = 0 e a = 0); na ausência de forças não atuaria nenhuma força no corpo."
    ],
    "correctIndex": 3,
    "explanation": "Na prática terrestre há sempre forças presentes (como a gravidade); o equilíbrio estático decorre do cancelamento vetorial dessas forças.",
    "distractorAnalysis": [
      "Está incorreta: o equilíbrio estático ocorre perfeitamente na presença da gravidade terrestre desde que haja forças de reação normais de igual intensidade.",
      "Está incorreta: por definição, o equilíbrio estático exige aceleração linear e angular estritamente nulas (repouso estático).",
      "Está incorreta: um corpo em repouso na Terra tem sempre forças a atuar sobre si (peso e normal), embora a sua soma vetorial seja nula."
    ],
    "nursingApplication": "Compreender que o doente no leito está sob forças reais equilibradas justifica a necessidade de posicionamentos adequados."
  },
  {
    "id": 1242,
    "topicId": 1,
    "question": "O que significa afirmar que a massa inercial e a aceleração são grandezas inversamente proporcionais para uma força fixa?",
    "options": [
      "Para uma mesma força resultante, quanto maior for a massa inercial do corpo, menor será a aceleração adquirida (a = F/m).",
      "Para uma mesma força resultante, corpos com massas mais elevadas adquirem acelerações proporcionalmente superiores.",
      "A massa e a aceleração aumentam em conjunto de forma exponencial sempre que uma força motriz é aplicada sobre o corpo.",
      "A aceleração independe da massa do corpo, dependendo unicamente da densidade do meio ambiente onde ocorre o deslocamento."
    ],
    "correctIndex": 2,
    "explanation": "De a = F/m, com F constante, o produto m·a permanece invariante; dobrando a massa, a aceleração reduz-se a metade.",
    "distractorAnalysis": [
      "Está incorreta: pela 2.ª Lei de Newton (a = F/m), para uma mesma força, o aumento da massa resulta numa menor aceleração.",
      "Está incorreta: massa e aceleração variam em sentido inverso para uma força constante e não em sentido direto conjunto.",
      "Está incorreta: a aceleração em mecânica clássica depende estritamente da força resultante e da massa inercial do corpo."
    ],
    "nursingApplication": "Explica a lentidão natural de resposta motora na mobilização de doentes obesos ou com edemas severos."
  },
  {
    "id": 1243,
    "topicId": 1,
    "question": "Se a variação da quantidade de movimento (Δp) de um passageiro numa paragem de emergência for fixa (pois Δp = m·Δv é constante), o que acontece à força média sofrida se triplicarmos o tempo de travagem (Δt)?",
    "options": [
      "A força média sofrida é reduzida para um terço da original, pois F = Δp / Δt, e triplicar Δt triplica o denominador.",
      "A força média sofrida aumenta para o triplo, pois o corpo percorre mais distância e acumula mais momento linear.",
      "A força média sofrida mantém-se igual, pois a variação do momento linear (Δp) é a mesma independentemente da duração do impacto.",
      "A força média sofrida é reduzida para um nono, pois a força varia com o quadrado do tempo de impacto."
    ],
    "correctIndex": 3,
    "explanation": "Com Δp constante, F e Δt são grandezas inversamente proporcionais: se Δt é 3 vezes maior, F é 3 vezes menor (F' = Δp / (3·Δt) = F / 3).",
    "distractorAnalysis": [
      "Está incorreta: triplicar Δt não triplica a força; pelo contrário, F = Δp/Δt — triplicar o tempo reduz a força para um terço, não a aumenta.",
      "Está incorreta: o Δp (variação do momento linear) é determinado pela velocidade inicial e final, não pela duração do impacto; triplicar Δt não altera Δp, mas reduz F.",
      "Está incorreta: a força é inversamente proporcional a Δt (F = Δp/Δt), não ao quadrado de Δt; triplicar Δt reduz F por um fator de 3, não de 9."
    ],
    "nursingApplication": "Princípio basilar da proteção contra impactos: quanto maior o tempo de desaceleração, menor a força letal."
  },
  {
    "id": 1244,
    "topicId": 1,
    "question": "Matematicamente, como se expressa a relação vetorial entre a força de ação (F_A->B) e a força de reação (F_B->A)?",
    "options": [
      "F_B->A = - F_A->B (vetores de mesmo módulo e direção, com sinal negativo a indicar sentidos opostos).",
      "F_B->A = F_A->B / 2 (onde a reação é sempre metade da intensidade da ação aplicada).",
      "F_B->A = F_A->B² (onde a reação é calculada elevando a ação ao quadrado).",
      "F_B->A = 0 (onde a reação é nula sempre que os corpos se encontram em repouso)."
    ],
    "correctIndex": 0,
    "explanation": "O sinal negativo na equação vetorial F_B->A = - F_A->B traduz rigorosamente a oposição de sentidos com igual módulo (|F_A->B| = |F_B->A|).",
    "distractorAnalysis": [
      "Está incorreta: A reação tem exatamente a mesma intensidade da ação (|F1| = |F2|), nunca metade.",
      "Está incorreta: A relação é de igualdade direta em módulo e não exponencial de segunda ordem.",
      "Está incorreta: A reação existe sempre que há interação, quer os corpos estejam em repouso quer em movimento acelerado."
    ],
    "nursingApplication": "Permite calcular forças transmitidas entre equipamentos e o corpo humano com precisão matemática."
  },
  {
    "id": 1245,
    "topicId": 1,
    "question": "O que é necessário acontecer para que duas forças com a mesma intensidade e sentidos opostos se anulem perfeitamente (∑F = 0)?",
    "options": [
      "É necessário que as forças sejam geradas por fontes gravitacionais localizadas em hemisférios opostos do globo terrestre.",
      "É necessário que o corpo esteja aquecido a uma temperatura constante para manter estável a densidade dos tecidos.",
      "É necessário que ambas as forças estejam aplicadas simultaneamente sobre o mesmo corpo material.",
      "É necessário que o coeficiente de atrito estático entre as superfícies de apoio seja estritamente nulo."
    ],
    "correctIndex": 2,
    "explanation": "O equilíbrio estático de um corpo (∑F = 0) exige forças concorrentes aplicadas nesse mesmo corpo que se compensem vetorialmente.",
    "distractorAnalysis": [
      "Está incorreta: a anulação de forças (∑F = 0) depende do equilíbrio de vetores sobre o mesmo sistema e não da origem geográfica.",
      "Está incorreta: o equilíbrio mecânico translacional decorre puramente da soma vetorial de forças e independe da temperatura do corpo.",
      "Está incorreta: o atrito pode ser uma das forças que participam no equilíbrio; a anulação não exige atrito nulo."
    ],
    "nursingApplication": "Distingue com clareza o conceito de 'equilíbrio de um corpo' (1.ª Lei) do conceito de 'interação mútua' (3.ª Lei)."
  },
  {
    "id": 1246,
    "topicId": 1,
    "question": "Se dois enfermeiros executarem a transferência em conjunto, um puxando do lado da maca e outro apoiando do lado da cama, qual é a distribuição física do esforço?",
    "options": [
      "A força total requerida é dividida pelos dois profissionais (F1 + F2 = F_necessária) e os momentos fletores são simétricos e controlados, duplicando a segurança mecânica da manobra.",
      "O esforço total é multiplicado pelo dobro, porque a interação simultânea entre dois operadores cria interferência destrutiva na linha de força de tração.",
      "Apenas o profissional que empurra do lado da cama realiza trabalho mecânico útil, enquanto a ação de puxar na maca gera apenas atrito resistente no colchão.",
      "A força resultante anula-se por ação de forças opostas de contacto, bloqueando o deslizamento do utente a menos que um dos operadores aplique força assimétrica."
    ],
    "correctIndex": 0,
    "explanation": "O trabalho em equipa com divisão vetorial de forças é uma das principais recomendações de ergonomia hospitalar para prevenção de acidentes de trabalho.",
    "distractorAnalysis": [
      "Está incorreta: a coordenação entre dois operadores soma vetorialmente as forças aplicadas na mesma direção, reduzindo o esforço individual.",
      "Está incorreta: tanto quem puxa como quem empurra/apoia aplica componentes úteis de força horizontal no mesmo sentido de translação.",
      "Está incorreta: quando ambos sincronizam a tração e empurrão no mesmo sentido, as forças somam-se positivamente para vencer o atrito."
    ],
    "nursingApplication": "Promoção do trabalho em equipa e coordenação motora nas manobras de transferência complexas."
  },
  {
    "id": 1247,
    "topicId": 1,
    "question": "Se a força resultante que atua sobre uma cadeira de rodas for estritamente nula (∑F = 0), quais são os dois únicos estados mecânicos possíveis?",
    "options": [
      "Repouso estático absoluto (velocidade nula) ou Movimento Retilíneo e Uniforme (velocidade vetorial rigorosamente constante).",
      "Movimento circular uniforme com aceleração centrípeta contínua mantida pela ausência de forças de atrito com o piso hospitalar.",
      "Movimento retilíneo uniformemente acelerado com ganho progressivo de velocidade à razão constante de um metro por segundo.",
      "Frenagem progressiva contínua até à imobilização forçada decorrente do esgotamento espontâneo da energia de movimento inicial."
    ],
    "correctIndex": 0,
    "explanation": "Com ∑F = 0, a aceleração é zero (a = 0), o que implica que o vetor velocidade não varia: repouso (v = 0) ou MRU (v = constante).",
    "distractorAnalysis": [
      "Está incorreta: o movimento circular exige aceleração centrípeta e, portanto, uma força resultante centrípeta não nula direcionada ao centro.",
      "Está incorreta: se a força resultante é nula (∑F = 0), a aceleração é estritamente zero, impossibilitando qualquer movimento acelerado.",
      "Está incorreta: a imobilização por desaceleração exige uma força resultante de oposição (como o atrito), não ocorrendo com resultante nula."
    ],
    "nursingApplication": "Se uma cadeira de rodas desliza a velocidade constante num corredor plano e sem atrito, a força resultante sobre ela é nula."
  },
  {
    "id": 1248,
    "topicId": 1,
    "question": "Na cinemática do movimento, quais são as duas características fundamentais do Movimento Retilíneo e Uniforme (MRU)?",
    "options": [
      "A velocidade vetorial (v) é constante no decorrer do tempo e a aceleração (a) é estritamente nula (a = 0).",
      "A velocidade vetorial duplica a cada segundo e a aceleração oscila em função da humidade relativa do ar.",
      "A trajetória é obrigatoriamente circular e a força resultante cresce de forma exponencial com o tempo.",
      "A massa do corpo dissipa-se continuamente sob a forma de calor até que o movimento cesse por completo."
    ],
    "correctIndex": 0,
    "explanation": "No MRU define-se formalmente: 'A velocidade (v) é constante no decorrer do tempo' e 'A aceleração (a) é nula'.",
    "distractorAnalysis": [
      "Está incorreta: Velocidade a duplicar caracteriza um movimento uniformemente acelerado, não um MRU.",
      "Está incorreta: Trajetória circular exige aceleração centrípeta e força centrípeta não nula, violando o MRU retilíneo.",
      "Está incorreta: A massa é constante e o MRU não dissipa massa sob a forma de calor."
    ],
    "nursingApplication": "Uma maca que desliza em linha reta com velocidade estável num corredor plano exemplifica o regime de MRU."
  },
  {
    "id": 1249,
    "topicId": 1,
    "question": "Porque é que num Movimento Retilíneo e Uniforme (MRU) a força resultante aplicada sobre o corpo tem de ser igual a zero (∑F = 0)?",
    "options": [
      "Porque a velocidade constante exige que a força de atrito supere a força aplicada pelo motor ou pelo profissional de saúde.",
      "Porque sendo a velocidade constante em módulo, direção e sentido, a aceleração é zero (a = 0), implicando ∑F = m·a = 0.",
      "Porque em movimento uniforme as grandezas vetoriais anulam-se matematicamente através da conservação da energia mecânica.",
      "Porque a massa inercial do corpo reduz-se progressivamente até zero à medida que a distância percorrida aumenta no tempo."
    ],
    "correctIndex": 1,
    "explanation": "Pela 2.ª Lei de Newton (F = m·a), se a aceleração é nula (a = 0), a força resultante tem obrigatoriamente de ser nula (∑F = 0).",
    "distractorAnalysis": [
      "Está incorreta: se o atrito superasse a força motriz aplicada, haveria uma força resultante contrária e o corpo desaceleraria (MRU retardado).",
      "Está incorreta: a anulação vetorial da força resultante decorre da aceleração nula (a = dv/dt = 0) e não de transformações de energia mecânica.",
      "Está incorreta: a massa inercial é uma constante intrínseca do corpo material e não se altera com o deslocamento ou velocidade em mecânica clássica."
    ],
    "nursingApplication": "Para manter uma maca em MRU num piso com atrito, o enfermeiro apenas precisa de aplicar uma força igual e oposta ao atrito."
  },
  {
    "id": 1250,
    "topicId": 1,
    "question": "O que acontece à velocidade vetorial de um corpo em MRU se a sua trajetória efetuar uma curva suave, mantendo o velocímetro nos 20 km/h?",
    "options": [
      "A velocidade vetorial permanece perfeitamente constante, dado que o módulo de 20 km/h não sofreu qualquer desvio.",
      "A aceleração permanece nula porque o velocímetro não registou qualquer aumento na rapidez do veículo hospitalar.",
      "A força resultante sobre o veículo permanece rigorosamente igual a zero ao longo de toda a curva.",
      "A velocidade vetorial altera-se porque a sua direção mudou no espaço, deixando o movimento de ser retilíneo e uniforme."
    ],
    "correctIndex": 3,
    "explanation": "A velocidade é um vetor (módulo, direção e sentido). Se a direção muda na curva, o vetor velocidade variou e existe aceleração centrípeta.",
    "distractorAnalysis": [
      "Está incorreta: O módulo permaneceu 20 km/h, mas o vetor alterou a sua direção, logo a velocidade vetorial não é constante.",
      "Está incorreta: Curvar exige aceleração centrípeta (a = v²/R), mesmo com módulo de velocidade constante.",
      "Está incorreta: Fazer uma curva exige uma força centrípeta resultante não nula direcionada para o centro da curva."
    ],
    "nursingApplication": "Nas curvas em transporte de emergência, os doentes sentem forças inerciais laterais mesmo com velocidade constante."
  },
  {
    "id": 1251,
    "topicId": 1,
    "question": "Qual das seguintes situações representa um corpo com aceleração estritamente nula?",
    "options": [
      "Uma ambulância em marcha de emergência a travar bruscamente de 80 km/h para 0 km/h num cruzamento da cidade.",
      "Uma cadeira de rodas a rolar em linha reta a 0,5 m/s num piso plano sem qualquer desvio de velocidade ou direção.",
      "Um utente a levantar-se da cadeira de repouso, acelerando o seu centro de gravidade verticalmente para cima.",
      "Um frasco de soro que escorrega acidentalmente da bancada e cai em direção ao chão da sala de tratamentos."
    ],
    "correctIndex": 1,
    "explanation": "Velocidade constante em linha reta (0,5 m/s) define um MRU, cuja aceleração é estritamente nula por definição.",
    "distractorAnalysis": [
      "Está incorreta: A travagem brusca é uma desaceleração intensa (aceleração negativa não nula).",
      "Está incorreta: Levantar-se da cadeira envolve acelerar a massa corporal contra a gravidade (aceleração não nula).",
      "Está incorreta: O frasco em queda livre acelera a cerca de 9,8 m/s² em direção ao solo sob a força da gravidade."
    ],
    "nursingApplication": "Apenas em velocidade uniforme retilínea o doente e os sistemas de infusão permanecem sem acelerações perturbadoras."
  },
  {
    "id": 1252,
    "topicId": 1,
    "question": "Em caso de capotamento da viatura de emergência, o que determina o comportamento dos objetos soltos no habitáculo?",
    "options": [
      "Cada objeto move-se imediatamente em direção ao centro de gravidade da viatura devido à atração gravitacional do chassis metálico.",
      "Cada objeto desacelera espontaneamente para velocidade zero antes de atingir qualquer superfície interna do habitáculo.",
      "Cada objeto mantém a sua trajetória inercial inicial até colidir com as paredes da cabine ou com os ocupantes humanos.",
      "Cada objeto desloca-se exclusivamente na direção vertical descendente, independentemente da rotação angular da ambulância."
    ],
    "correctIndex": 2,
    "explanation": "Num capotamento, o habitáculo roda mas os objetos soltos continuam em movimento retilíneo por inércia, colidindo repetidamente.",
    "distractorAnalysis": [
      "Está incorreta: a atração gravitacional entre pequenos objetos e o chassis é desprezável; o movimento rege-se pela inércia retilínea de Newton.",
      "Está incorreta: pela 1.ª Lei de Newton, na ausência de forças de retenção o objeto mantém a sua velocidade e trajetória até ao impacto.",
      "Está incorreta: a trajetória do projétil inercial depende do vetor de velocidade no momento do capotamento e não apenas da vertical terrestre."
    ],
    "nursingApplication": "A cabine sanitária deve ser mantida desobstruída e limpa, sem qualquer equipamento ou caixa solta fora dos armários."
  },
  {
    "id": 1253,
    "topicId": 1,
    "question": "Quando uma maca com um utente desliza em linha reta a 1,2 m/s constante num corredor plano de piso liso, qual é o seu estado mecânico?",
    "options": [
      "Equilíbrio estático absoluto, dado que a ausência de aceleração impede qualquer alteração de coordenadas no espaço.",
      "Equilíbrio dinâmico translacional, onde a força resultante é nula (∑F = 0) e a velocidade vetorial se mantém inalterada.",
      "Movimento caótico turbulento caracterizado por acelerações infinitesimais em todas as direções cartesianas.",
      "Estado de ressonância mecânica destrutiva com emissão contínua de ondas de choque ultrassónicas no piso."
    ],
    "correctIndex": 1,
    "explanation": "Equilíbrio dinâmico translacional é o estado em que um corpo se move em MRU (velocidade constante) com força resultante zero.",
    "distractorAnalysis": [
      "Está incorreta: Equilíbrio estático refere-se exclusivamente a repouso (v = 0); com v = 1,2 m/s o equilíbrio é dinâmico.",
      "Está incorreta: Movimento uniforme retilíneo é perfeitamente regular e ordenado, e não caótico ou turbulento.",
      "Está incorreta: Deslizar a 1,2 m/s num piso liso não gera ondas de choque ultrassónicas nem ressonâncias destrutivas."
    ],
    "nursingApplication": "Em equilíbrio dinâmico, o doente viaja confortável e sem sentir forças inerciais que o façam deslizar no colchão."
  },
  {
    "id": 1254,
    "topicId": 1,
    "question": "Do ponto de vista da 1.ª Lei de Newton e da mecânica clássica, qual é a profunda semelhança entre o Repouso e o Movimento Retilíneo e Uniforme?",
    "options": [
      "Em ambos os estados a velocidade do corpo é rigorosamente igual a zero em relação a qualquer referencial universal.",
      "Em ambos os estados a aceleração é rigorosamente nula (a = 0) e a resultante de todas as forças aplicadas é igual a zero (∑F = 0).",
      "Em ambos os estados o corpo deixa de possuir massa inercial, tornando-se imune às solicitações de atrito com o piso.",
      "Em ambos os estados o corpo consome 100% da sua energia mecânica sob a forma de calor dissipado no ambiente."
    ],
    "correctIndex": 1,
    "explanation": "O repouso é simplesmente um MRU com velocidade v = 0: em ambos a aceleração é nula e a soma vetorial de forças é zero (∑F = 0).",
    "distractorAnalysis": [
      "Está incorreta: No MRU a velocidade é diferente de zero (v = constante ≠ 0) em relação ao solo; só no repouso v = 0.",
      "Está incorreta: A massa inercial permanece inalterada em ambos os estados mecânicos.",
      "Está incorreta: Corpos em repouso ou MRU não dissipam necessariamente 100% da sua energia mecânica."
    ],
    "nursingApplication": "Permite ao enfermeiro compreender que manter uma maca a velocidade constante não exige força resultante, apenas equilíbrio."
  },
  {
    "id": 1255,
    "topicId": 1,
    "question": "O que é um 'referencial inercial' no contexto da aplicação das Leis de Newton na prática hospitalar?",
    "options": [
      "Uma maca hospitalar cujas rodas de borracha macia reduzem o atrito com o piso cerâmico a valores muito próximos de zero.",
      "Um compartimento clínico onde a temperatura e humidade relativa do ar são mantidas em níveis constantes e controlados.",
      "Um instrumento de medição médica cuja calibração física é verificada periodicamente com padrões do Sistema Internacional.",
      "Um sistema de referência no qual a 1.ª Lei de Newton é válida, encontrando-se em repouso ou em movimento retilíneo e uniforme."
    ],
    "correctIndex": 3,
    "explanation": "O piso do hospital é aproximadamente um referencial inercial: qualquer corpo nele em repouso ou MRU obedece a ∑F = m·a.",
    "distractorAnalysis": [
      "Está incorreta: um referencial inercial é um sistema de coordenadas físico (não acelerado) e não um equipamento móvel de transporte de doentes.",
      "Está incorreta: o controlo de variáveis termodinâmicas (temperatura e humidade) define condições de climatização e não um referencial inercial.",
      "Está incorreta: instrumentos aferidos asseguram metrologia rigorosa, mas a definição de referencial inercial assenta no estado cinemático (a = 0)."
    ],
    "nursingApplication": "Compreender referenciais ajuda a analisar o movimento do doente em relação à maca versus em relação ao edifício hospitalar."
  },
  {
    "id": 1256,
    "topicId": 1,
    "question": "Qual é a fórmula matemática compacta que expressa a condição necessária e suficiente da 1.ª Lei de Newton para repouso ou MRU?",
    "options": [
      "∑F = m × g × h, correspondendo à conservação da energia potencial gravitacional em qualquer referencial.",
      "∑F = v / t, indicando que a força resultante equivale à rapidez de deslocamento do corpo hospitalar.",
      "∑F = 0 ⇔ a = 0 (somatório de forças nulo é equivalente a aceleração nula, implicando velocidade vetorial constante).",
      "∑F = 1000 N, assumindo que todos os corpos no hospital requerem exatamente um quilonewton de força de equilíbrio."
    ],
    "correctIndex": 2,
    "explanation": "A 1.ª Lei traduz-se matematicamente por: se a força resultante é nula (∑F = 0), a aceleração é zero (a = 0) e a velocidade é constante.",
    "distractorAnalysis": [
      "Está incorreta: m·g·h é a expressão da energia potencial gravítica (em Joules), não a condição vetorial da 1.ª Lei de Newton.",
      "Está incorreta: v / t é a aceleração média para velocidade inicial nula, não a expressão da força resultante nula.",
      "Está incorreta: A força resultante no equilíbrio é zero Newtons (0 N), e não um valor fixo de 1000 N."
    ],
    "nursingApplication": "Permite resolver problemas de equilíbrio em sistemas de tração e posicionamento através de equações estáticas simples."
  },
  {
    "id": 1257,
    "topicId": 1,
    "question": "Se a força resultante que atua sobre um corpo for constante em intensidade, direção e sentido, como se classifica o movimento desse corpo?",
    "options": [
      "Movimento circular caótico com velocidade angular exponencialmente decrescente.",
      "Movimento harmónico simples com frequência de oscilação inversamente proporcional ao peso.",
      "Movimento retilíneo uniformemente acelerado (MRUA), caracterizado por aceleração rigorosamente constante.",
      "Movimento estacionário em repouso absoluto com dissipação radiativa de massa corporal."
    ],
    "correctIndex": 2,
    "explanation": "Se F = constante e m = constante, então a = F/m = constante. Aceleração constante em linha reta define o MRUA.",
    "distractorAnalysis": [
      "Está incorreta: Movimento circular exige força de direção continuamente variável (sempre apontada para o centro).",
      "Está incorreta: Movimento harmónico requer força restauradora proporcional à posição (F = -k·x), não constante.",
      "Está incorreta: Sob força resultante constante não nula, o corpo não permanece em repouso estático."
    ],
    "nursingApplication": "Permite prever o aumento progressivo de velocidade de uma maca quando empurrada com força sustentada contínua."
  },
  {
    "id": 1258,
    "topicId": 1,
    "question": "Após a mesma maca de 120 kg da pergunta anterior entrar em andamento a velocidade constante de 1 m/s, qual é a força horizontal de empurrão contínuo necessária para a manter em movimento (MRU)?",
    "options": [
      "120 N (porque a força de atrito resistente mantém o mesmo valor estático inicial após o início do movimento da maca).",
      "Zero N (admitindo erradamente que corpos em movimento retilíneo uniforme no hospital não enfrentam atrito de rolamento).",
      "60 N (calculada por F = Fat,c = μc · N = 0,05 · 1200 N = 60 N), exatamente metade da força exigida no arranque inicial.",
      "240 N (supondo incorretamente que a velocidade linear duplica a resistência de contacto com o pavimento da enfermaria)."
    ],
    "correctIndex": 2,
    "explanation": "Em MRU (a = 0): F_empurrão = Fat,c = μc · N = 0,05 · 1200 = 60 N. O esforço cai para metade após o repouso ser vencido.",
    "distractorAnalysis": [
      "Está incorreta: o atrito cinético é significativamente menor do que o atrito estático de arranque inicial (μc < μe).",
      "Está incorreta: para manter a velocidade constante na presença de atrito real com o solo é necessário aplicar força contínua igual ao atrito cinético.",
      "Está incorreta: o atrito de rolamento e deslizamento a baixas velocidades clínicas não duplica com a velocidade da marcha."
    ],
    "nursingApplication": "Confirma analiticamente a lei física: manter o movimento requer substancialmente menos esforço do que o arranque."
  },
  {
    "id": 1259,
    "topicId": 1,
    "question": "No âmbito da Biofísica Médica, qual é a definição formal do ramo da Mecânica?",
    "options": [
      "Ramo da física que estuda as relações entre os movimentos dos corpos materiais e as forças que a eles estão associadas.",
      "Ramo da física que estuda exclusivamente a transmissão e refração de feixes luminosos através dos meios transparentes do olho humano.",
      "Ramo da física dedicado unicamente à transferência de energia térmica e trocas de calor entre o corpo humano e o ambiente hospitalar.",
      "Ramo da física focado apenas no estudo das correntes elétricas e potenciais de ação nas membranas neuronais e musculares periféricas."
    ],
    "correctIndex": 0,
    "explanation": "A Mecânica foca-se nas interações entre forças e as alterações no estado de repouso ou movimento dos corpos físicos.",
    "distractorAnalysis": [
      "Está incorreta: a transmissão e refração de luz através dos meios oculares constitui o domínio da Óptica Biomédica e não da Mecânica.",
      "Está incorreta: o estudo das trocas de calor e energia térmica corporal pertence ao campo da Termodinâmica e Termorregulação.",
      "Está incorreta: a propagação de correntes e potenciais de ação bioelétricos é investigada pela Eletrofisiologia e Bioeletricidade."
    ],
    "nursingApplication": "O conhecimento da mecânica apoia o enfermeiro na análise do movimento de doentes e prevenção de lesões posturais."
  },
  {
    "id": 1260,
    "topicId": 1,
    "question": "Em Biofísica, de que forma a Dinâmica se diferencia conceitualmente da Cinemática?",
    "options": [
      "A Dinâmica quantifica unicamente corpos em repouso estático, enquanto a Cinemática analisa corpos com aceleração nula.",
      "A Dinâmica estuda grandezas puramente térmicas, ao passo que a Cinemática se restringe à condutividade elétrica.",
      "A Dinâmica aplica-se apenas a fluidos biológicos viscosos, enquanto a Cinemática estuda ossos rígidos fraturados.",
      "A Dinâmica investiga as forças que originam ou modificam o movimento, enquanto a Cinemática apenas o descreve geometricamente."
    ],
    "correctIndex": 3,
    "explanation": "A Cinemática descreve posição, velocidade e aceleração sem considerar as causas; a Dinâmica estuda as forças causadoras.",
    "distractorAnalysis": [
      "Está incorreta: A estática é que estuda o repouso; a dinâmica estuda movimentos causados por forças resultantes.",
      "Está incorreta: Térmica e eletricidade são outros domínios da física, distintos da dinâmica e cinemática.",
      "Está incorreta: Ambas as áreas aplicam-se a sólidos, fluidos e qualquer sistema biomecânico corporal."
    ],
    "nursingApplication": "Permite ao enfermeiro associar a velocidade de aceleração de uma cadeira de rodas à força necessária para a travar."
  },
  {
    "id": 1261,
    "topicId": 1,
    "question": "Qual dos seguintes exemplos clínicos melhor ilustra uma força a produzir alteração do estado de movimento?",
    "options": [
      "Um utente que dorme tranquilamente num colchão de espuma sem qualquer alteração na sua posição no leito.",
      "A leitura estável de um valor de temperatura axilar no termómetro digital após três minutos de medição.",
      "Um enfermeiro a empurrar uma cadeira de rodas em repouso, fazendo-a acelerar ao longo do corredor hospitalar.",
      "A visualização de uma radiografia de tórax num negatoscópio fixado na parede da sala de enfermagem."
    ],
    "correctIndex": 2,
    "explanation": "Acelerar a cadeira de rodas a partir do repouso é uma mudança do estado de movimento originada por uma força muscular.",
    "distractorAnalysis": [
      "Está incorreta: O utente em repouso sem alteração de velocidade não está a sofrer variação do estado de movimento.",
      "Está incorreta: A medição de temperatura é um fenómeno térmico de equilíbrio sem relação com aceleração mecânica.",
      "Está incorreta: O negatoscópio fixo na parede está em repouso mecânico estático."
    ],
    "nursingApplication": "O esforço para tirar a cadeira de rodas do repouso requer a aplicação de uma força resultante não nula."
  },
  {
    "id": 1262,
    "topicId": 1,
    "question": "Qual das seguintes situações clínicas evidencia uma força a produzir o efeito mecânico de deformação?",
    "options": [
      "O registo passivo da frequência respiratória através da observação visual da expansão do tórax.",
      "A leitura silenciosa dos valores de saturação de oxigénio no ecrã de um oxímetro de pulso portátil.",
      "A pesagem de um bebé numa balança neonatal sem que ocorra qualquer oscilação do prato de suporte.",
      "A compressão do tórax durante manobras de Suporte Básico de Vida, fletindo temporariamente a cartilagem costal."
    ],
    "correctIndex": 3,
    "explanation": "A compressão torácica na reanimação aplica uma força mecânica externa que deforma elasticamente a grelha costal.",
    "distractorAnalysis": [
      "Está incorreta: A observação visual não aplica força nem provoca deformação mecânica sobre o doente.",
      "Está incorreta: A leitura de sinais no monitor é um processo eletrónico sem aplicação de forças deformadoras.",
      "Está incorreta: A pesagem estática mede a força peso, mas a compressão torácica é o exemplo clássico de deformação direta."
    ],
    "nursingApplication": "A deformação do tórax na RCP (5 a 6 cm no adulto) exige forças adequadas para bombear sangue sem fraturar costelas."
  },
  {
    "id": 1263,
    "topicId": 1,
    "question": "Qual é a unidade gravada na escala de leitura de um dinamómetro concebido em conformidade com as normas do SI?",
    "options": [
      "Pascal (Pa), que quantifica diretamente a força pura sem divisão pela área de contacto.",
      "Quilograma (kg), que é a unidade representativa da intensidade da força exercida no vácuo.",
      "Joule (J), que determina a força elástica instantânea que atua nos ganchos de sustentação.",
      "Newton (N), a unidade padrão do Sistema Internacional para a quantificação de forças mecânicas."
    ],
    "correctIndex": 3,
    "explanation": "No Sistema Internacional de Unidades (SI), a escala de medição de forças em dinamómetros é calibrada em Newtons (N).",
    "distractorAnalysis": [
      "Está incorreta: O Pascal mede pressão (N/m²), exigindo o conhecimento da área sobre a qual a força atua.",
      "Está incorreta: O quilograma mede massa; embora alguns aparelhos mostrem kgf por conveniência, a unidade SI é o Newton.",
      "Está incorreta: O Joule é a unidade de trabalho e energia mecânica (N·m), não de força."
    ],
    "nursingApplication": "Ao registar avaliações de força em relatórios clínicos, o enfermeiro deve utilizar o Newton para rigor internacional."
  },
  {
    "id": 1264,
    "topicId": 1,
    "question": "Qual é a finalidade clínica do teste de dinamometria manual com dinamómetro Jamar na triagem de enfermagem em geriatria?",
    "options": [
      "Avaliar a flexibilidade e amplitude articular passiva das articulações interfalângicas e do punho durante a flexão palmar.",
      "Quantificar a velocidade de condução nervosa periférica dos nervos mediano e cubital em tempo real durante a contração.",
      "Avaliar a força muscular isométrica das mãos para estratificar o risco de fragilidade, sarcopenia e perda de autonomia funcional.",
      "Medir o limiar de sensibilidade tátil e proprioceptiva na polpa dos dedos através de resistência vibratória mecânica contínua."
    ],
    "correctIndex": 2,
    "explanation": "A força de preensão manual é um biomarcador validado do estado muscular global e preditor clínico de fragilidade e quedas.",
    "distractorAnalysis": [
      "Está incorreta: a amplitude articular e flexibilidade é mensurada através de goniometria articular e não por dinamometria de preensão.",
      "Está incorreta: a velocidade de condução nervosa motora e sensitiva é avaliada por eletroneuromiografia e não por dinamómetros de preensão.",
      "Está incorreta: a sensibilidade tátil e discriminativa é quantificada por estesiometria (monofilamentos de Semmes-Weinstein)."
    ],
    "nursingApplication": "A identificação de baixa força de preensão alerta o enfermeiro para instituir intervenções precoces de prevenção de quedas."
  },
  {
    "id": 1265,
    "topicId": 1,
    "question": "Num contexto de física médica, 1 kN (quiloNewton) corresponde exatamente a quantos Newtons?",
    "options": [
      "100 N, correspondendo a um fator decimal de duas ordens de grandeza acima da unidade base.",
      "10 N, que reflete o arredondamento convencional da aceleração da gravidade terrestre.",
      "1000000 N, que seria o valor correspondente ao prefixo mega (M) adotado na bioengenharia.",
      "1000 N, dado que o prefixo 'quilo' (k) representa matematicamente um fator multiplicativo de 10³."
    ],
    "correctIndex": 3,
    "explanation": "O prefixo SI quilo (k) equivale exatamente a 10³ = 1000 unidades: 1 kN = 1000 N.",
    "distractorAnalysis": [
      "Está incorreta: 100 N corresponderia ao prefixo hecto (h), raramente usado em mecânica médica.",
      "Está incorreta: 10 N corresponderia ao prefixo deca (da), sem relação com o quilo.",
      "Está incorreta: 1000000 N é 1 MN (megaNewton), três ordens de grandeza superior ao quiloNewton."
    ],
    "nursingApplication": "Permite converter especificações de resistência mecânica de guinchos e elevadores de doentes (frequentemente em kN)."
  },
  {
    "id": 1266,
    "topicId": 1,
    "question": "Em Biofísica, como se distingue formalmente a 'direção' do 'sentido' de uma força?",
    "options": [
      "A direção quantifica o valor numérico em Newtons; o sentido indica a área anatómica de contacto.",
      "A direção é sempre vertical para baixo devido à gravidade; o sentido pode ser oblíquo ou horizontal.",
      "A direção é a reta geométrica no espaço sobre a qual a força atua; o sentido indica para que lado dessa reta a força aponta.",
      "A direção varia no tempo consoante a fadiga; o sentido permanece imutável por determinação genética."
    ],
    "correctIndex": 2,
    "explanation": "A direção é a reta de suporte (ex: horizontal, vertical, inclinada a 30°); o sentido é a orientação (ex: para a direita, para cima).",
    "distractorAnalysis": [
      "Está incorreta: A intensidade é o valor numérico; a área é uma grandeza geométrica de contacto.",
      "Está incorreta: A direção pode ser qualquer reta no espaço tridimensional, não se restringindo à vertical gravitacional.",
      "Está incorreta: Direção e sentido são parâmetros puramente geométricos e mecânicos instantâneos."
    ],
    "nursingApplication": "Ao posicionar um doente, dizer 'tração ao longo do membro inferior' define a direção; 'afastando do tronco' define o sentido."
  },
  {
    "id": 1267,
    "topicId": 1,
    "question": "Num teste de dinamometria manual em geriatria, uma utente de 78 anos atinge 140 N de força máxima. O que quantifica este valor?",
    "options": [
      "A densidade mineral óssea trabecular do rádio distal medida através da resistência mecânica cortical da mão durante o aperto.",
      "A força muscular máxima isométrica dos flexores da mão, expressa numa unidade técnica equivalente ao peso de uma massa de 14 kg.",
      "A velocidade angular máxima desenvolvida pelas articulações metacarpofalângicas durante a fase de preensão rápida.",
      "A potência aeróbia muscular e o tempo de resistência isométrica contínua sustentada até à exaustão completa dos flexores."
    ],
    "correctIndex": 1,
    "explanation": "O dinamómetro mede a força isométrica (em Newtons) gerada pela contração dos músculos flexores dos dedos e polegar.",
    "distractorAnalysis": [
      "Está incorreta: a densidade mineral óssea é avaliada por absorciometria radiológica de dupla energia (DEXA) e não por dinamometria.",
      "Está incorreta: o dinamómetro Jamar mede a força de pico estática (isométrica) e não a velocidade angular do movimento articular.",
      "Está incorreta: o valor máximo em kgf expressa o pico de força estática e não a resistência de fadiga muscular em regime aeróbio prolongado."
    ],
    "nursingApplication": "Permite ao enfermeiro estratificar o risco de fragilidade física e planear intervenções de prevenção de quedas."
  },
  {
    "id": 1268,
    "topicId": 1,
    "question": "Se um doente após cirurgia da mão aumentar a sua força de preensão de 80 N para 160 N na reabilitação, qual é o ganho mecânico?",
    "options": [
      "A massa dos ossos do carpo aumentou exatamente para o dobro em consequência do esforço repetido.",
      "A aceleração gravítica local aumentou de 9,8 m/s² para 19,6 m/s² durante a realização do exercício físico.",
      "A força muscular duplicou, representando um aumento de 100% na capacidade de gerar tensão mecânica útil.",
      "A energia interna celular dos miócitos reduziu-se a zero por conversão de calor em trabalho mecânico."
    ],
    "correctIndex": 2,
    "explanation": "Passar de 80 N para 160 N significa duplicar a intensidade do vetor força muscular exercido sobre o aparelho.",
    "distractorAnalysis": [
      "Está incorreta: A massa óssea não duplica em sessões de reabilitação; o ganho reflete recrutamento neuromuscular e hipertrofia.",
      "Está incorreta: A gravidade local terrestre permanece constante em aproximadamente 9,8 m/s².",
      "Está incorreta: A energia interna não se anula; o trabalho muscular consome energia bioquímica metabólica com libertação de calor."
    ],
    "nursingApplication": "Evidencia a eficácia do plano de cuidados de enfermagem de reabilitação na recuperação da autonomia para as AVD."
  },
  {
    "id": 1269,
    "topicId": 1,
    "question": "Ao comparar a força de preensão manual entre a mão dominante e a não dominante de um utente destro saudável, é expectável que:",
    "options": [
      "A mão não dominante exerça rigorosamente o triplo da força devido à inervação cruzada medular involuntária.",
      "A mão dominante apresente habitualmente uma força de preensão cerca de 10% superior à mão não dominante.",
      "Ambas as mãos apresentem sempre valores perfeitamente idênticos até à terceira casa decimal em Newtons.",
      "A mão dominante seja totalmente incapaz de produzir força devido ao fenómeno de fadiga central crónica."
    ],
    "correctIndex": 1,
    "explanation": "Na população geral, a 'regra dos 10%' descreve a superioridade fisiológica de força habitual da mão dominante.",
    "distractorAnalysis": [
      "Está incorreta: A mão não dominante não triplica a força; habitualmente é ligeiramente mais fraca por menor utilização funcional.",
      "Está incorreta: Variações biológicas e de coordenação impedem identidades numéricas perfeitas em testes fisiológicos.",
      "Está incorreta: A dominância motora confere maior coordenação e força, e não incapacidade de contração."
    ],
    "nursingApplication": "Permite ao enfermeiro detetar défices motores assimétricos subtis sugestivos de patologia neurológica unilateral."
  },
  {
    "id": 1270,
    "topicId": 1,
    "question": "Qual é a consequência de aplicar uma força de mesma intensidade (ex: 200 N) mas com sentidos contrários num membro?",
    "options": [
      "O efeito mecânico será perfeitamente idêntico, pois a resposta cinemática depende exclusivamente da intensidade modular da força aplicada.",
      "O membro permanecerá invariavelmente em repouso estático, uma vez que forças de sentidos opostos anulam-se sempre por definição mecânica.",
      "O membro sofrerá efeitos mecânicos opostos, como aproximação versus afastamento ou flexão versus extensão articular do segmento.",
      "A aceleração angular articular aumentará sempre na mesma direção longitudinal, independentemente do sentido vetorial exercido."
    ],
    "correctIndex": 2,
    "explanation": "Inverter o sentido de uma força inverte o efeito dinâmico (ex: compressão versus distração de uma articulação).",
    "distractorAnalysis": [
      "Está incorreta: a força é vetorial; inverter o sentido inverte completamente a aceleração e o sentido do deslocamento do membro.",
      "Está incorreta: forças de sentidos opostos só se anulam se estiverem a ser aplicadas simultaneamente sobre o mesmo corpo rígido.",
      "Está incorreta: a direção e o sentido da aceleração dependem estritamente da orientação vetorial da força resultante aplicada."
    ],
    "nursingApplication": "Distingue claramente manobras de tração longitudinal (para alinhamento) de manobras de compressão articular."
  },
  {
    "id": 1271,
    "topicId": 1,
    "question": "Se um doente com 70 kg de massa for transferido para uma enfermaria num hospital situado a grande altitude, a sua massa:",
    "options": [
      "Reduz-se para 35 kg devido à diminuição exponencial da pressão barométrica na atmosfera rarefeita.",
      "Aumenta para 140 kg como mecanismo compensatório fisiológico para reter mais oxigénio nos eritrócitos.",
      "Permanece rigorosamente 70 kg, pois a massa é uma propriedade intrínseca da matéria invariável com a altitude.",
      "Transforma-se numa força vetorial orientada horizontalmente no sentido do meridiano geográfico local."
    ],
    "correctIndex": 2,
    "explanation": "A massa de um corpo é invariável e independente da gravidade ou da pressão atmosférica do local onde se encontra.",
    "distractorAnalysis": [
      "Está incorreta: A diminuição da pressão barométrica altera a densidade do ar e a oxigenação, mas não a massa de um corpo sólido.",
      "Está incorreta: A adaptação hematológica a longo prazo altera a massa de hemoglobina, mas a massa global não duplica.",
      "Está incorreta: A massa permanece um escalar invariável, não se transformando em vetor com a mudança de altitude."
    ],
    "nursingApplication": "Garante que as doses terapêuticas prescritas por quilograma de massa corporal mantêm a mesma base de cálculo."
  },
  {
    "id": 1272,
    "topicId": 1,
    "question": "Se um doente com 75 kg de massa corporal estiver internado num hospital onde g = 9,8 m/s², qual é o módulo do seu Peso?",
    "options": [
      "7,65 N, resultante da divisão do valor da massa corporal pela aceleração gravítica local terrestre.",
      "75 N, assumindo-se que o módulo do peso equivale numericamente à massa em qualquer ponto do planeta.",
      "7500 N, decorrente da multiplicação obrigatória por um fator de amplificação gravitacional hospitalar.",
      "735 N, obtido pela multiplicação direta da massa corporal pela aceleração da gravidade local (P = 75 × 9,8)."
    ],
    "correctIndex": 3,
    "explanation": "O cálculo do peso é dado por P = m·g: P = 75 kg × 9,8 m/s² = 735 N na direção vertical.",
    "distractorAnalysis": [
      "Está incorreta: Dividir a massa pela gravidade (75 / 9,8 = 7,65) comete um erro de fórmula e de análise dimensional.",
      "Está incorreta: O peso em Newtons só equivaleria numericamente à massa se a aceleração gravitacional fosse 1 m/s².",
      "Está incorreta: Não existe fator multiplicativo por 100 na física gravitacional terrestre clássica."
    ],
    "nursingApplication": "Permite dimensionar a resistência de redes de transferência e calcular forças de sustentação dos profissionais."
  },
  {
    "id": 1273,
    "topicId": 1,
    "question": "Porque é que o Peso de um indivíduo varia se for medido em diferentes corpos celestes (ex: Terra vs Lua), mas a sua Massa não?",
    "options": [
      "Porque o peso depende da aceleração da gravidade local (g), enquanto a massa é uma propriedade intrínseca e invariável da matéria corporal.",
      "Porque a pressão barométrica e a densidade do ar ambiente comprimem a estrutura molecular, alterando a quantidade de matéria do corpo.",
      "Porque as normas do Sistema Internacional definem o peso como uma propriedade química invariável e a massa como uma variável gravitacional.",
      "Porque a aceleração de rotação da Terra diminui o volume dos órgãos internos, reduzindo proporcionalmente a quantidade de massa óssea."
    ],
    "correctIndex": 0,
    "explanation": "P = m·g: a gravidade na Lua é menor (~1,6 m/s²), logo o peso diminui, mas a quantidade de matéria (massa) é invariável.",
    "distractorAnalysis": [
      "Está incorreta: a pressão atmosférica e a densidade do ar influenciam apenas a força de impulsão hidrostática e não a massa ou o peso real.",
      "Está incorreta: o Sistema Internacional define a massa (kg) como constante intrínseca e o peso (N) como a força gravítica local variável.",
      "Está incorreta: a rotação planetária produz forças inerciais centrífugas mínimas na superfície, mas a massa intrínseca permanece absolutamente inalterada."
    ],
    "nursingApplication": "Reforça a distinção clínica essencial: balanças medem massa por comparação; dinamómetros medem peso em Newtons."
  },
  {
    "id": 1274,
    "topicId": 1,
    "question": "Se uma mesma força perpendicular de 600 N for aplicada sobre duas áreas diferentes (A1 = 0,2 m² e A2 = 0,05 m²), qual das áreas sofre maior pressão?",
    "options": [
      "A área menor A2 sofre uma pressão quatro vezes maior (12000 Pa versus 3000 Pa), pois a pressão é inversamente proporcional à área.",
      "A área maior A1 sofre maior pressão porque acomoda uma quantidade superior de matéria sob a sua superfície.",
      "Ambas as superfícies sofrem rigorosamente a mesma pressão, uma vez que a intensidade da força é idêntica (600 N).",
      "Nenhuma das superfícies regista pressão, dado que forças estáticas em equilíbrio não geram tensões mecânicas."
    ],
    "correctIndex": 0,
    "explanation": "Pela fórmula p = F/A: p1 = 600 / 0,2 = 3000 Pa; p2 = 600 / 0,05 = 12000 Pa. Menor área resulta em maior pressão mecânica.",
    "distractorAnalysis": [
      "Está incorreta: A área maior dispersa a força, resultando numa pressão mecânica significativamente mais baixa.",
      "Está incorreta: A mesma força distribuída por áreas diferentes gera pressões necessariamente distintas.",
      "Está incorreta: Forças estáticas geram pressão real sobre as superfícies de contacto onde se encontram aplicadas."
    ],
    "nursingApplication": "Aumentar a área de contacto dos apoios é o método físico mais eficaz para reduzir a pressão pontual nos tecidos."
  },
  {
    "id": 1275,
    "topicId": 1,
    "question": "Um doente acamado com 60 kg de massa encontra-se no leito. Qual é a força peso com que a Terra o atrai (adotando g = 9,8 m/s²)?",
    "options": [
      "588 N, orientada na direção vertical com sentido apontado para baixo.",
      "6,12 N, orientada horizontalmente no sentido da cabeceira do leito hospitalar.",
      "60 N, orientada perpendicularmente à superfície lateral da cama de internamento.",
      "5880 N, orientada para cima no sentido de elevar o utente para fora do colchão."
    ],
    "correctIndex": 0,
    "explanation": "P = m·g = 60 kg × 9,8 m/s² = 588 N na direção vertical com sentido para baixo.",
    "distractorAnalysis": [
      "Está incorreta: Dividir 60 por 9,8 (6,12) é um erro de cálculo e não tem sentido horizontal.",
      "Está incorreta: 60 N seria se g fosse 1 m/s², o que não corresponde à gravidade terrestre.",
      "Está incorreta: 5880 N resultaria de multiplicar por 98 m/s², um erro de uma ordem de grandeza decimal."
    ],
    "nursingApplication": "O peso de 588 N é a carga vertical que as estruturas do colchão e o leito articulado suportam continuamente."
  },
  {
    "id": 1276,
    "topicId": 1,
    "question": "De acordo com a definição científica apresentada na anatomia funcional, o que é biologicamente e mecanicamente um Tendão?",
    "options": [
      "Uma estrutura óssea rígida altamente mineralizada cuja função exclusiva é produzir glóbulos vermelhos.",
      "Uma membrana epitelial flexível que reveste a cavidade pleural para anular o atrito respiratório.",
      "Um feixe de fibras nervosas motoras mielinizadas encarregue de conduzir potenciais de ação pós-sinápticos.",
      "Um tecido conjuntivo fibroso e resistente que conecta funcionalmente um músculo a uma peça óssea."
    ],
    "correctIndex": 3,
    "explanation": "Define-se formalmente: 'Tendão: Tecido conjuntivo que conecta um músculo a um osso', transmitindo força mecânica.",
    "distractorAnalysis": [
      "Está incorreta: Estruturas mineralizadas que produzem eritrócitos são ossos esponjosos com medula óssea, não tendões.",
      "Está incorreta: A membrana que reveste a cavidade pleural é a pleura serosa parietal e visceral, não um tendão.",
      "Está incorreta: Feixes de fibras mielinizadas são nervos periféricos do sistema nervoso, não tendões conectivos."
    ],
    "nursingApplication": "O enfermeiro deve compreender que a integridade dos tendões é essencial para que a força muscular seja transmitida ao esqueleto."
  },
  {
    "id": 1277,
    "topicId": 1,
    "question": "Do ponto de vista puramente mecânico, qual é a função primordial de um tendão no sistema musculoesquelético humano?",
    "options": [
      "Transmitir a força de tração gerada pela contração ativa das fibras musculares à alavanca óssea correspondente no esqueleto.",
      "Atuar como um elemento puramente rígido que dissipa a totalidade da energia mecânica impedindo qualquer transmissão ao esqueleto.",
      "Gerar tensão mecânica autónoma ativa através de contração espontânea independente do estímulo das fibras musculares esqueléticas.",
      "Produzir e segregar ativamente líquido sinovial para lubrificar as cartilagens hialinas das articulações diartrodiais vizinhas."
    ],
    "correctIndex": 0,
    "explanation": "Os tendões atuam como cabos de tração mecânica de alta resistência elástica, puxando o osso para produzir movimento articular.",
    "distractorAnalysis": [
      "Está incorreta: os tendões possuem comportamento viscoelástico, transmitindo eficazmente a força e armazenando temporariamente energia elástica.",
      "Está incorreta: os tendões são estruturas passivas de colagénio que não geram força ativa; apenas transmitem a tensão produzida pelo músculo.",
      "Está incorreta: a secreção de líquido sinovial é uma função biológica da membrana sinovial da cápsula articular e não do tendão."
    ],
    "nursingApplication": "Lesões ou inflamações tendinosas (tendinites) impedem a transmissão eficaz da força, limitando a mobilidade do doente."
  },
  {
    "id": 1278,
    "topicId": 1,
    "question": "Num doente com fraqueza marcada do quadríceps pós-cirurgia, que dificuldade biomecânica direta é esperada na locomoção?",
    "options": [
      "Incapacidade completa de fletir os dedos das mãos ao manusear talheres ou copos durante as refeições.",
      "Aceleração involuntária contínua do tronco para a frente que impede o utente de travar a sua marcha no corredor.",
      "Aumento descontrolado da tensão arterial sistémica decorrente da ausência de tração no tendão patelar.",
      "Dificuldade em estabilizar a extensão do joelho na fase de apoio da marcha, com risco iminente de 'cedência' articular e queda."
    ],
    "correctIndex": 3,
    "explanation": "O quadríceps é o músculo extensor e estabilizador antigravítico do joelho no apoio; a sua fraqueza causa instabilidade e quedas.",
    "distractorAnalysis": [
      "Está incorreta: A flexão dos dedos da mão depende dos músculos flexores do antebraço e mão, sem relação com o quadríceps.",
      "Está incorreta: A incapacidade de travar o tronco seria uma alteração cerebelar ou postural, não decorrente de fraqueza do joelho.",
      "Está incorreta: A fraqueza do quadríceps não altera descontroladamente a pressão arterial sistémica de repouso."
    ],
    "nursingApplication": "O enfermeiro deve prestar apoio com auxiliar de marcha (andarilho/canadiana) a doentes com défice do quadríceps."
  },
  {
    "id": 1279,
    "topicId": 1,
    "question": "Em doentes idosos hospitalizados com imobilização prolongada no leito, que alteração biomecânica afeta frequentemente o tendão de Aquiles?",
    "options": [
      "Retração tendinosa e perda de elasticidade, resultando em atitude em 'pé equino' que compromete o apoio plantar na marcha.",
      "Aumento excessivo da extensibilidade longitudinal, impedindo a transmissão eficaz de qualquer força de tração aos ossos do tarso.",
      "Perda imediata de todas as fibras de colagénio tipo I, com substituição completa por tecido cartilaginoso rígido e avascular.",
      "Aumento substancial do comprimento de repouso das fibras que projeta o pé permanentemente em dorsiflexão extrema sustentada."
    ],
    "correctIndex": 0,
    "explanation": "A imobilização em flexão plantar passiva encurta os sarcómeros e o tendão de Aquiles (pé equino), dificultando o levante.",
    "distractorAnalysis": [
      "Está incorreta: a imobilização sem carga produz retração, rigidez e encurtamento do tendão de Aquiles, e não um aumento da sua extensibilidade.",
      "Está incorreta: o tendão imobilizado sofre desorganização das fibras de colagénio e adesões interfibrilares, mantendo a sua natureza conjuntiva densa.",
      "Está incorreta: a posição de repouso espontâneo no leito sob ação da gravidade favorece a flexão plantar (pé equino) e não a dorsiflexão."
    ],
    "nursingApplication": "O uso de suportes de pés a 90° no leito e mobilização passiva pelo enfermeiro previne a deformidade em pé equino."
  },
  {
    "id": 1280,
    "topicId": 1,
    "question": "Qual é a vantagem mecânica do armazenamento de energia elástica no tendão de Aquiles durante a fase de corrida ou marcha rápida?",
    "options": [
      "Eliminar completamente o trabalho mecânico ativo realizado pelos ventres musculares do tríceps sural durante todo o ciclo de locomoção.",
      "Devolver elasticamente parte da energia mecânica na fase de impulsão ('efeito mola'), reduzindo o gasto metabólico dos músculos da perna.",
      "Reduzir o atrito estático da sola do calçado contra o solo para valores próximos de zero, facilitando o deslizamento contínuo do pé.",
      "Permitir que a amplitude articular do tornozelo aumente sem qualquer oposição até atingir ângulos de flexão incompatíveis com a marcha."
    ],
    "correctIndex": 1,
    "explanation": "Os tendões atuam como molas biológicas: acumulam energia potencial elástica na fase de carga e devolvem-na no recuo elástico.",
    "distractorAnalysis": [
      "Está incorreta: o armazenamento elástico reduz o custo metabólico muscular na propulsão, mas não elimina a necessidade de contração ativa do tríceps sural.",
      "Está incorreta: o tendão armazena energia interna de deformação e não interfere diretamente no coeficiente de atrito entre a sola do calçado e o chão.",
      "Está incorreta: a função do tendão de Aquiles é estabilizar a articulação e transmitir tração propulsora, mantendo a estabilidade dentro dos limites fisiológicos."
    ],
    "nursingApplication": "A perda de elasticidade no idoso aumenta o custo metabólico da locomoção, acelerando a fadiga muscular e o risco de quedas."
  },
  {
    "id": 1281,
    "topicId": 1,
    "question": "Qual é o risco mecânico de aplicar uma tala ou ligadura com tração excessiva que ultrapasse a tolerância elástica dos tecidos moles?",
    "options": [
      "Ruptura imediata da cápsula sinovial articular por aumento exponencial da pressão intraóssea no membro afetado.",
      "Diminuição súbita da densidade mineral óssea trabecular por supressão aguda das cargas elásticas de suporte.",
      "Compressão mecânica excessiva dos vasos sanguíneos e nervos periféricos, com risco de isquemia distal e neuropatia compressiva.",
      "Necrose química tecidual resultante da quebra de pontes de hidrogénio na queratina superficial da derme."
    ],
    "correctIndex": 2,
    "explanation": "Tensões compressivas muito elevadas colapsam a circulação microvascular e comprimem troncos nervosos periféricos.",
    "distractorAnalysis": [
      "Está incorreta: a tração externa excessiva lesa primariamente a circulação e inervação periférica por compressão e não a cápsula sinovial profunda.",
      "Está incorreta: a desmineralização óssea é um processo crónico que decorre ao longo de semanas ou meses de desuso, não surgindo no aperto de uma ligadura.",
      "Está incorreta: a lesão isquémica distal por garroteamento mecânico não resulta de reações químicas na queratina dérmica."
    ],
    "nursingApplication": "A vigilância frequente da cor, temperatura, tempo de preenchimento capilar e sensibilidade distal é um dever de enfermagem."
  },
  {
    "id": 1282,
    "topicId": 1,
    "question": "Dois enfermeiros puxam uma maca hospitalar na mesma direção e no mesmo sentido horizontal, aplicando F1 = 120 N e F2 = 140 N. Qual é a força resultante?",
    "options": [
      "20 N, resultante da subtração obrigatória dos módulos imposta pelas regras de segurança de transporte hospitalar.",
      "16800 N, obtida através do produto das duas forças aplicadas nas pegas laterais da estrutura metálica da maca.",
      "130 N, correspondendo à média aritmética simples do esforço físico desenvolvido pelos dois profissionais.",
      "260 N, calculada pela soma algébrica direta dos módulos das forças colineares com a mesma orientação vetorial."
    ],
    "correctIndex": 3,
    "explanation": "Quando duas forças têm a mesma direção e o mesmo sentido (ângulo de 0°), a intensidade da resultante é a soma simples: 120 + 140 = 260 N.",
    "distractorAnalysis": [
      "Está incorreta: A subtração aplica-se apenas quando as forças têm sentidos estritamente opostos na mesma reta.",
      "Está incorreta: O produto de forças não tem significado físico de força resultante e comete um erro dimensional.",
      "Está incorreta: A resultante não é a média; as forças somam-se para produzir uma aceleração maior no conjunto."
    ],
    "nursingApplication": "O trabalho coordenado entre dois profissionais soma as forças, facilitando a deslocação de macas pesadas sem lesão muscular."
  },
  {
    "id": 1283,
    "topicId": 1,
    "question": "Dois profissionais de saúde mobilizam um utente na cama com lençol de transferência, exercendo cada um uma força de 150 N no mesmo sentido. Qual é a intensidade total de tração?",
    "options": [
      "300 N, com a mesma direção e sentido do movimento pretendido para o reposicionamento do doente.",
      "0 N, porque as forças exercidas por dois profissionais em paralelo anulam-se mutuamente no leito.",
      "150 N, mantendo-se a força inalterada independentemente do número de profissionais envolvidos na manobra.",
      "22500 N, decorrente da multiplicação exponencial dos esforços musculares exercidos sobre o tecido do lençol."
    ],
    "correctIndex": 0,
    "explanation": "Forças paralelas e no mesmo sentido somam-se diretamente: 150 N + 150 N = 300 N de força tracionadora útil.",
    "distractorAnalysis": [
      "Está incorreta: As forças só se anulariam se atuassem em sentidos opostos (puxando em direções contrárias).",
      "Está incorreta: Dois profissionais a puxar juntos duplicam a força disponível (300 N) em comparação com um único profissional (150 N).",
      "Está incorreta: Não se multiplicam forças; a soma vetorial colinear com o mesmo sentido é linear aditiva."
    ],
    "nursingApplication": "A manobra a dois enfermeiros divide o esforço exigido, permitindo vencer o atrito do lençol com segurança lombar."
  },
  {
    "id": 1284,
    "topicId": 1,
    "question": "Se três enfermeiros empurrarem uma cama pesada com forças paralelas e no mesmo sentido de 80 N, 90 N e 110 N, qual é a resultante aplicada à cama?",
    "options": [
      "60 N, obtida pela subtração das forças menores à força maior exercida pelo terceiro elemento da equipa.",
      "280 N, resultante da adição direta de todas as componentes colineares que atuam no mesmo sentido.",
      "93,3 N, correspondendo ao valor médio do esforço individual distribuído pelos manípulos da cama.",
      "792000 N, calculada pelo produto contínuo das intensidades de força muscular dos três profissionais."
    ],
    "correctIndex": 1,
    "explanation": "Sendo as três forças colineares e no mesmo sentido: Fres = 80 + 90 + 110 = 280 N.",
    "distractorAnalysis": [
      "Está incorreta: A subtração não tem cabimento quando todos os elementos empurram na mesma direção e sentido.",
      "Está incorreta: A resultante mecânica é a soma das ações individuais e não a média aritmética simples.",
      "Está incorreta: Multiplicar as três forças produz uma unidade fisicamente errada (N³) sem qualquer sentido na mecânica."
    ],
    "nursingApplication": "A coordenação por contagem de voz ('1, 2, 3!') sincroniza as forças no tempo, maximizando o somatório útil no início do movimento."
  },
  {
    "id": 1285,
    "topicId": 1,
    "question": "Qual é a principal vantagem biofísica de sincronizar o esforço na mesma direção e sentido durante transferências de doentes?",
    "options": [
      "Reduzir o coeficiente de atrito cinético entre o colchão e o lençol para valores nulos durante o deslizamento.",
      "Aumentar a massa inercial do sistema para garantir uma desaceleração progressiva e amortecida no leito.",
      "Maximizar a força resultante útil na direção do movimento, reduzindo o esforço individual necessário e prevenindo sobrecargas lombares.",
      "Eliminar a necessidade de ativação dos músculos paravertebrais dos enfermeiros durante a tração do doente."
    ],
    "correctIndex": 2,
    "explanation": "A sincronização garante que as forças se somam perfeitamente (ângulo de 0°), atingindo o valor máximo possível da resultante.",
    "distractorAnalysis": [
      "Está incorreta: a sincronização das forças não altera o coeficiente de atrito entre os materiais, que depende das superfícies em contacto.",
      "Está incorreta: a massa do sistema mantém-se constante; o objetivo é somar as forças na direção correta para facilitar a aceleração controlada.",
      "Está incorreta: mesmo com esforço partilhado, os músculos estabilizadores do tronco mantêm-se obrigatoriamente ativos para proteger a coluna."
    ],
    "nursingApplication": "A liderança verbal clara do enfermeiro principal assegura a sincronia biomecânica de toda a equipa na transferência."
  },
  {
    "id": 1286,
    "topicId": 1,
    "question": "Se dois enfermeiros puxarem uma maca em sentidos contrários ao longo do mesmo corredor, exercendo 180 N e 130 N, qual é a resultante?",
    "options": [
      "50 N, na direção do corredor e com o sentido da força de maior intensidade (180 N).",
      "50 N, na direção oposta ao corredor e com sentido contrário à força maior.",
      "230 N, na resultante perpendicular às duas forças aplicadas pelos dois enfermeiros.",
      "130 N, na média aritmética das duas forças aplicadas, sem considerar os sentidos opostos."
    ],
    "correctIndex": 0,
    "explanation": "Para forças colineares em sentidos opostos, o módulo da resultante é a diferença: 180 - 130 = 50 N, no sentido da maior.",
    "distractorAnalysis": [
      "Está incorreta: a resultante de forças opostas é a diferença absoluta (180 − 130 = 50 N) com o sentido da maior, não o inverso.",
      "Está incorreta: as forças são colineares e opostas; a resultante não é perpendicular a nenhuma delas, mas sim paralela ao corredor.",
      "Está incorreta: a média aritmética das magnitudes ignora os sentidos opostos; a resultante vetorial é F1 − F2, não (F1 + F2)/2."
    ],
    "nursingApplication": "Esforços desalinhados ou opostos entre elementos da equipa geram fadiga inútil e risco de travagem brusca com desequilíbrio."
  },
  {
    "id": 1287,
    "topicId": 1,
    "question": "Quando dois enfermeiros exercem forças colineares opostas de exatamente 150 N cada nas extremidades de uma maca, qual é o estado de movimento?",
    "options": [
      "A maca acelera vigorosamente para a direita com uma força efetiva líquida de 300 Newtons.",
      "A maca permanece em equilíbrio translacional com aceleração nula (a = 0), mantendo o repouso se já estivesse parada.",
      "A maca entra em rotação contínua a alta velocidade em torno das rodas dianteiras direcionais.",
      "A maca perde metade da sua massa inercial devido ao cancelamento recíproco das tensões metálicas."
    ],
    "correctIndex": 1,
    "explanation": "Forças de mesma intensidade, mesma direção e sentidos opostos aplicadas no mesmo corpo anulam-se: Fres = 150 - 150 = 0 N.",
    "distractorAnalysis": [
      "Está incorreta: Não há aceleração nem força líquida de 300 N; as forças cancelam-se mutuamente na translação.",
      "Está incorreta: Se as forças atuarem na mesma linha de ação (colineares), o momento de rotação também é nulo, não havendo rotação.",
      "Está incorreta: A massa é uma propriedade intrínseca da matéria e não varia com forças externas em equilíbrio."
    ],
    "nursingApplication": "A igualdade de forças opostas garante a estabilidade de sustentação durante pausas táticas em manobras de transporte."
  },
  {
    "id": 1288,
    "topicId": 1,
    "question": "Num procedimento de contra-tração manual para redução de uma luxação do ombro, um enfermeiro traciona o membro com 200 N enquanto outro aplica contra-tração no tórax com 200 N. Qual é a força resultante sobre o doente?",
    "options": [
      "400 N, porque as forças aplicadas em sentidos opostos somam-se sempre escalarmente na determinação da aceleração do corpo.",
      "200 N, correspondendo à intensidade média da força exercida pelo profissional com maior força muscular no procedimento.",
      "0 N, mantendo o doente em repouso estático enquanto a articulação é tracionada internamente por tensões opostas.",
      "40 N, correspondendo à diferença de atrito dinâmico calculada entre o tórax do utente e a superfície da maca hospitalar."
    ],
    "correctIndex": 2,
    "explanation": "A força resultante sobre o corpo global do doente é zero (200 - 200 = 0 N), permitindo esticar a articulação sem mover o corpo.",
    "distractorAnalysis": [
      "Está incorreta: forças de 200 N em sentidos opostos na mesma linha de ação subtraem-se vetorialmente (200 - 200 = 0 N) e não se somam.",
      "Está incorreta: a força resultante é o vetor soma de todas as forças aplicadas e não a média isolada de um dos intervenientes.",
      "Está incorreta: se as forças manuais de tração e contra-tração forem perfeitamente balanceadas (200 N cada), a resultante externa é exatamente 0 N."
    ],
    "nursingApplication": "A técnica correta de contra-tração exige forças equilibradas para isolar a tensão mecânica na articulação lesada."
  },
  {
    "id": 1289,
    "topicId": 1,
    "question": "Qual é a fórmula matemática geral para o módulo da resultante de duas forças colineares opostas F1 e F2 (onde F1 > F2)?",
    "options": [
      "Fres = F1 - F2, com sentido coincidente com o da força de maior intensidade (F1).",
      "Fres = F1 + F2, pois forças opostas somam-se para produzir a resultante máxima.",
      "Fres = F1 × F2 / (F1 - F2), aplicando a regra do produto cruzado de forças colineares.",
      "Fres = √(F1² + F2²), usando a soma vetorial de Pitágoras para forças em sentidos opostos."
    ],
    "correctIndex": 0,
    "explanation": "Para vetores com a mesma linha de ação e sentidos contrários (ângulo de 180°), a resultante é a diferença dos seus módulos.",
    "distractorAnalysis": [
      "Está incorreta: forças opostas não se somam; a resultante de forças contrárias é a diferença F1 − F2, não a sua soma.",
      "Está incorreta: o produto cruzado e o denominador (F1 − F2) não têm aplicação em forças colineares; esse cálculo não tem significado físico.",
      "Está incorreta: a fórmula de Pitágoras (√F1² + F2²) aplica-se a forças perpendiculares, não a forças colineares opostas."
    ],
    "nursingApplication": "A base matemática simples da subtração vetorial apoia o cálculo de forças de atrito e resistência ao avanço."
  },
  {
    "id": 1290,
    "topicId": 1,
    "question": "Se duas forças perpendiculares entre si (formando 90°) com intensidades de 30 N e 40 N atuarem no mesmo ponto de um suporte, qual é a intensidade da força resultante?",
    "options": [
      "70 N, calculada pela adição aritmética simples dos valores das forças sem ter em conta a perpendicularidade.",
      "50 N, calculada através do Teorema de Pitágoras: √(30² + 40²) = √(900 + 1600) = √2500 = 50 N.",
      "10 N, obtida pela subtração direta entre a força horizontal de 40 N e a força vertical de 30 N.",
      "1200 N, que resulta da multiplicação direta dos módulos das forças ortogonais no plano cartesiano."
    ],
    "correctIndex": 1,
    "explanation": "Pela regra do paralelogramo para forças ortogonais: Fres = √(Fx² + Fy²) = √(900 + 1600) = 50 N.",
    "distractorAnalysis": [
      "Está incorreta: A soma aritmética simples (70 N) só seria válida se as forças tivessem a mesma direção e mesmo sentido (0°).",
      "Está incorreta: A subtração simples (10 N) só seria aplicável se as forças fossem colineares e opostas (180°).",
      "Está incorreta: A multiplicação de forças não expressa a resultante na física vetorial."
    ],
    "nursingApplication": "Permite calcular a força real sobre cabos de sustentação e braços articulados quando existem componentes ortogonais."
  },
  {
    "id": 1291,
    "topicId": 1,
    "question": "Num suporte hospitalar de parede, uma força horizontal de 60 N e uma força vertical de 80 N atuam no mesmo ponto de fixação. Qual é o módulo da força total suportada pelo parafuso?",
    "options": [
      "140 N, que decorre da simples soma escalar dos esforços sem considerar o ângulo reto entre eles.",
      "20 N, calculada pela subtração entre a componente vertical descendente e a componente horizontal.",
      "100 N, correspondendo à hipotenusa do triângulo retângulo de forças: √(60² + 80²) = √(3600 + 6400) = √10000 = 100 N.",
      "4800 N, obtida pela multiplicação das duas componentes ortogonais de carga no suporte metálico."
    ],
    "correctIndex": 2,
    "explanation": "Pelo Teorema de Pitágoras: Fres = √(60² + 80²) = √(3600 + 6400) = √10000 = 100 N.",
    "distractorAnalysis": [
      "Está incorreta: 140 N ignora a geometria vetorial; vetores perpendiculares combinam-se pela raiz da soma dos quadrados.",
      "Está incorreta: 20 N seria a resultante apenas se as forças fossem opostas na mesma linha de ação.",
      "Está incorreta: O produto de forças tem unidade incorreta (N²) e não traduz a intensidade resultante."
    ],
    "nursingApplication": "Garante que os parafusos e suportes de parede de monitores e ventiladores são dimensionados para a carga vetorial real."
  },
  {
    "id": 1292,
    "topicId": 1,
    "question": "Dois enfermeiros puxam um equipamento móvel de reanimação: um puxa para a frente com 90 N e outro puxa lateralmente a 90° com 120 N. Qual é a força resultante sentida pelo equipamento?",
    "options": [
      "210 N, resultante da adição linear dos módulos individuais de tração dos dois profissionais.",
      "30 N, decorrente da diferença entre a tração lateral de 120 N e a tração frontal de 90 N.",
      "10800 N, obtida pela multiplicação das intensidades dos dois vetores tracionadores perpendiculares.",
      "150 N, calculada pela relação pitagórica: √(90² + 120²) = √(8100 + 14400) = √22500 = 150 N."
    ],
    "correctIndex": 3,
    "explanation": "Para vetores perpendiculares de 90 N e 120 N: Fres = √(90² + 120²) = √(8100 + 14400) = √22500 = 150 N.",
    "distractorAnalysis": [
      "Está incorreta: A soma de 210 N ignora a deflexão a 90° entre os dois cabos de tração.",
      "Está incorreta: 30 N só ocorreria se os enfermeiros puxassem em sentidos opostos na mesma reta.",
      "Está incorreta: Multiplicar as forças comete um erro dimensional grave na física mecânica."
    ],
    "nursingApplication": "O equipamento mover-se-á obliquamente na direção da hipotenusa resultante, exigindo coordenação para não embater nas portas."
  },
  {
    "id": 1293,
    "topicId": 1,
    "question": "Quando duas forças ortogonais de mesma intensidade F atuam num ponto material, qual é a expressão matemática do módulo da resultante?",
    "options": [
      "Fres = F·√2, pois Fres = √(F² + F²) = √(2F²) = F·√2 ≈ 1,414·F, garantindo o equilíbrio estático.",
      "Fres = 2·F, dado que forças de mesma magnitude somam-se linearmente em qualquer orientação angular.",
      "Fres = 0, porque forças perpendiculares cancelam-se mutuamente no ponto central de intersecção.",
      "Fres = F / 2, correspondendo à dispersão geométrica perpendicular que reduz a força para metade."
    ],
    "correctIndex": 0,
    "explanation": "Fres = √(F² + F²) = √(2·F²) = F·√2. Para duas forças de 100 N a 90°, a resultante é aproximadamente 141,4 N.",
    "distractorAnalysis": [
      "Está incorreta: 2·F ocorreria apenas se as forças fossem paralelas no mesmo sentido (ângulo de 0°).",
      "Está incorreta: Forças perpendiculares não se cancelam; geram uma resultante oblíqua a 45° entre ambas.",
      "Está incorreta: A resultante nunca é menor do que as componentes individuais quando o ângulo é de 90°."
    ],
    "nursingApplication": "Permite estimar rapidamente o esforço resultante em diagonais de estruturas de contenção e fixação hospitalar."
  },
  {
    "id": 1294,
    "topicId": 1,
    "question": "Qual é a orientação da força resultante produzida por duas forças perpendiculares de intensidades rigorosamente iguais (Fx = Fy = 50 N)?",
    "options": [
      "Alinha-se a 0° com a componente horizontal, anulando totalmente a ação da componente vertical.",
      "Forma um ângulo exato de 45° com cada uma das componentes, dividindo o quadrante ao meio como bissetriz.",
      "Orienta-se a 90° com a componente horizontal, ignorando por completo a presença da força vertical.",
      "Aponta no sentido oposto de ambas as forças, retornando em direção à origem do sistema cartesiano."
    ],
    "correctIndex": 1,
    "explanation": "Sendo as componentes iguais, tan(θ) = Fy / Fx = 50 / 50 = 1, o que corresponde ao ângulo de 45° (bissetriz do quadrante).",
    "distractorAnalysis": [
      "Está incorreta: A resultante não se alinha a 0°; a componente vertical puxa a direção para cima em diagonal.",
      "Está incorreta: A resultante não se alinha a 90°; a componente horizontal desloca a orientação para a direita.",
      "Está incorreta: A resultante atua no mesmo quadrante das componentes, apontando no sentido das duas forças aplicadas."
    ],
    "nursingApplication": "Compreender a direção resultante a 45° ajuda o enfermeiro a prever para onde uma maca se vai deslocar sob forças combinadas."
  },
  {
    "id": 1295,
    "topicId": 1,
    "question": "Ao decompor uma força oblíqua F = 200 N que forma um ângulo de 60° com a horizontal, qual é o valor da componente horizontal Fx (adotando cos 60° = 0,5)?",
    "options": [
      "200 N, mantendo-se a componente horizontal com o valor integral da força oblíqua original.",
      "173,2 N, correspondendo à componente vertical Fy obtida através da multiplicação por sen 60°.",
      "100 N, calculado pelo produto Fx = F·cos(60°) = 200 × 0,5 = 100 N, garantindo o equilíbrio estático.",
      "400 N, que resulta da divisão da força oblíqua pelo cosseno do ângulo formado com o plano."
    ],
    "correctIndex": 2,
    "explanation": "A projeção horizontal de uma força com ângulo θ em relação ao solo é Fx = F·cos(θ): Fx = 200 × 0,5 = 100 N.",
    "distractorAnalysis": [
      "Está incorreta: A componente horizontal só seria 200 N se a força fosse estritamente horizontal (ângulo de 0°).",
      "Está incorreta: 173,2 N é a componente vertical Fy = 200 × sen(60°) = 200 × 0,866, que atua na direção perpendicular.",
      "Está incorreta: Dividir a força pelo cosseno violaria a trigonometria do triângulo retângulo (o cateto é F·cosθ)."
    ],
    "nursingApplication": "Mostra que puxar com ângulo de 60° reduz a força útil para avançar a maca para metade do esforço muscular exercido."
  },
  {
    "id": 1296,
    "topicId": 1,
    "question": "Se um enfermeiro puxar uma alça de transferência com uma força F a um ângulo θ com a horizontal, como varia a força útil horizontal Fx se o ângulo θ diminuir para perto de 0°?",
    "options": [
      "A componente útil horizontal Fx aumenta, aproximando-se do valor total da força F exercida (pois cos 0° = 1).",
      "A componente útil horizontal Fx anula-se completamente, tornando o deslizamento do utente impossível sem tração vertical.",
      "A componente útil horizontal Fx reduz-se para metade do valor inicial devido à diminuição da inclinação angular dos braços.",
      "A força muscular transforma-se exclusivamente numa componente vertical que comprime desnecessariamente o doente contra o colchão."
    ],
    "correctIndex": 0,
    "explanation": "À medida que o ângulo θ diminui, cos(θ) aproxima-se de 1, aumentando a componente útil horizontal Fx = F·cos(θ).",
    "distractorAnalysis": [
      "Está incorreta: à medida que o ângulo com a horizontal tende para zero, o cosseno aumenta até ao valor máximo de 1, maximizando Fx.",
      "Está incorreta: a redução do ângulo aumenta o rendimento horizontal (Fx = F·cos θ), uma vez que cos 0° > cos 30° > cos 60°.",
      "Está incorreta: puxar horizontalmente quase a 0° elimina a componente vertical (sen 0° = 0), direcionando praticamente toda a força para a translação horizontal."
    ],
    "nursingApplication": "Puxar o mais próximo possível da horizontal maximiza a força de tração útil e minimiza o esforço do enfermeiro."
  },
  {
    "id": 1297,
    "topicId": 1,
    "question": "Num plano cartesiano, se uma força muscular tiver componentes Fx = 40 N e Fy = 30 N, qual é o ângulo aproximado que ela forma com o eixo horizontal?",
    "options": [
      "Exatamente 90°, porque a componente horizontal anula qualquer inclinação angular no plano sagital.",
      "Aproximadamente 37°, pois tan(θ) = Fy / Fx = 30 / 40 = 0,75, cujo arco-tangente corresponde a cerca de 36,9°.",
      "Exatamente 0°, porque as componentes de 30 N e 40 N equilibram-se estritamente na linha do horizonte.",
      "Cerca de 85°, dado que a força vertical domina de forma quase absoluta a orientação do vetor resultante."
    ],
    "correctIndex": 1,
    "explanation": "O ângulo é obtido por tan(θ) = cateto oposto / cateto adjacente = 30 / 40 = 0,75, que corresponde a θ ≈ 36,9° ≈ 37°.",
    "distractorAnalysis": [
      "Está incorreta: 90° exigiria que Fx fosse igual a zero, o que contradiz a presença de 40 N na horizontal.",
      "Está incorreta: 0° exigiria que Fy fosse igual a zero, o que contradiz a presença de 30 N na vertical.",
      "Está incorreta: 85° exigiria que Fy fosse muito superior a Fx (tan 85° ≈ 11,4), o que não se verifica com 30 N e 40 N."
    ],
    "nursingApplication": "Determinar o ângulo de tração ajuda a compreender se uma manobra de mobilização está a ser ergonomicamente eficiente."
  },
  {
    "id": 1298,
    "topicId": 1,
    "question": "Porque é que decompor uma força nas suas componentes horizontal e vertical é essencial na análise biomecânica em enfermagem?",
    "options": [
      "Porque a decomposição matemática reduz permanentemente a massa inercial dos doentes obesos hospitalizados.",
      "Porque o Sistema Internacional proíbe a utilização de forças oblíquas em qualquer procedimento de cuidados.",
      "Porque permite separar a fração de força que produz movimento útil daquela que comprime ou sobrecarrega as articulações.",
      "Porque as forças oblíquas deixam de obedecer à gravidade newtoniana se não forem divididas em eixos."
    ],
    "correctIndex": 2,
    "explanation": "A decomposição isola a componente que move o corpo (Fx) da componente que gera sobrecarga articular ou alívio de peso (Fy).",
    "distractorAnalysis": [
      "Está incorreta: A decomposição vetorial é uma ferramenta analítica matemática; não altera a massa física dos corpos.",
      "Está incorreta: O SI não proíbe forças oblíquas; elas ocorrem naturalmente na tração e movimentação manual.",
      "Está incorreta: As leis de Newton aplicam-se a vetores em qualquer orientação espacial, decompostos ou não."
    ],
    "nursingApplication": "Ajuda o enfermeiro a ajustar a postura para evitar componentes verticais parasitas que sobrecarreguem os ombros e a coluna."
  },
  {
    "id": 1299,
    "topicId": 1,
    "question": "Qual é a recomendação biomecânica para o ângulo de tração ao puxar um doente com tela de transferência deslizante?",
    "options": [
      "Puxar com o ângulo mais baixo possível, o mais próximo do plano horizontal (paralelo à cama), maximizando o cosseno.",
      "Puxar com ângulo estritamente vertical a 90° em relação ao colchão, de modo a anular a força horizontal útil.",
      "Puxar com ângulo de 85° para maximizar a resistência de atrito estático das superfícies do leito articulado.",
      "Puxar em círculos concêntricos para criar uma força centrífuga que projete o utente para o outro bordo."
    ],
    "correctIndex": 0,
    "explanation": "Puxar paralelamente ao leito (θ próximo de 0°) faz com que cos(θ) ≈ 1, convertendo praticamente 100% do esforço em avanço útil.",
    "distractorAnalysis": [
      "Está incorreta: A 90°, cos(90°) = 0; toda a força seria para levantar o doente sem qualquer componente horizontal de deslizamento.",
      "Está incorreta: A 85°, a componente útil horizontal é mínima (cos 85° ≈ 0,087), desperdiçando mais de 90% do esforço físico.",
      "Está incorreta: Trações circulares geram instabilidade postural perigosa e risco de queda do doente para fora da cama."
    ],
    "nursingApplication": "Adotar uma postura com ancas fletidas permite ao enfermeiro puxar com alinhamento horizontal quase perfeito."
  },
  {
    "id": 1300,
    "topicId": 1,
    "question": "Se um enfermeiro aplicar 200 N com ângulo de 30° (cos 30° ≈ 0,866) versus 60° (cos 60° = 0,5), qual é a diferença na força útil horizontal?",
    "options": [
      "A 60° a força útil é rigorosamente o dobro da obtida a 30° devido à maior elevação dos membros superiores.",
      "A 30° a força útil é cerca de 173,2 N, enquanto a 60° é de apenas 100 N, representando uma perda de 73,2 N de eficácia útil.",
      "Em ambos os ângulos a força horizontal útil é exatamente de 200 N, pois a magnitude do vetor original não se alterou.",
      "A 30° a força útil é nula porque ângulos inferiores a 45° impedem a transmissão mecânica de tensão pelos braços."
    ],
    "correctIndex": 1,
    "explanation": "Fx a 30° = 200 × 0,866 = 173,2 N; Fx a 60° = 200 × 0,5 = 100 N. Aumentar a inclinação desperdiça força muscular útil.",
    "distractorAnalysis": [
      "Está incorreta: A 60° o cosseno é menor (0,5 vs 0,866), logo a força útil é menor e não o dobro.",
      "Está incorreta: A força útil varia com o cosseno do ângulo e só equivaleria a 200 N se o ângulo fosse perfeitamente 0°.",
      "Está incorreta: A 30° a transmissão é altamente eficaz (quase 87% de aproveitamento da força total aplicada)."
    ],
    "nursingApplication": "Esta diferença de 73,2 N corresponde à diferença entre uma transferência fácil e uma manobra penosa com risco de lesão."
  },
  {
    "id": 1301,
    "topicId": 1,
    "question": "Qual é a conclusão ergonómica fundamental decorrente do estudo da decomposição trigonométrica de forças em enfermagem?",
    "options": [
      "Os enfermeiros devem realizar todos os esforços corporais em ângulos superiores a 75° para exercitar os músculos do pescoço.",
      "A decomposição de forças demonstra que puxar ou empurrar com os braços em rotação extrema previne tendinites nos pulsos.",
      "As leis da trigonometria deixam de se aplicar sempre que mais do que um profissional participa na mesma manobra.",
      "As forças devem ser aplicadas o mais alinhadas possível com a direção do deslocamento pretendido para maximizar o rendimento biomecânico."
    ],
    "correctIndex": 3,
    "explanation": "Quanto menor o ângulo entre a linha de força e a trajetória (θ ≈ 0°), maior é a componente útil e menor o desperdício muscular.",
    "distractorAnalysis": [
      "Está incorreta: Ângulos acima de 75° desperdiçam mais de 75% da força em componentes inúteis e sobrecarregam as articulações.",
      "Está incorreta: Posturas com rotação extrema aumentam as forças de cisalhamento e o risco de tendinopatias ocupacionais.",
      "Está incorreta: As leis da trigonometria e da mecânica newtoniana são universais e regem o trabalho em equipa."
    ],
    "nursingApplication": "Fundamenta o princípio de 'puxar junto ao corpo e no alinhamento do movimento' ensinado na formação postural de enfermagem."
  },
  {
    "id": 1302,
    "topicId": 1,
    "question": "Qual é o peso exato de uma utente idosa com 50 kg de massa corporal internada na enfermaria (adotando g = 9,8 m/s²)?",
    "options": [
      "490 N, obtido pela multiplicação direta P = m·g = 50 kg × 9,8 m/s², garantindo o equilíbrio estático.",
      "5,10 N, que resulta da divisão da massa corporal pela aceleração gravítica local da enfermaria.",
      "50 N, assumindo que a força peso é numericamente idêntica à massa registada na balança de pesagem.",
      "4900 N, decorrente de uma multiplicação por um fator de gravidade dez vezes superior à terrestre."
    ],
    "correctIndex": 0,
    "explanation": "P = m·g = 50 kg × 9,8 m/s² = 490 N na direção vertical com sentido para baixo.",
    "distractorAnalysis": [
      "Está incorreta: Dividir 50 por 9,8 (5,10) inverte a fórmula do peso e comete um erro dimensional na física.",
      "Está incorreta: 50 N seria se g fosse 1 m/s², o que não é o caso na superfície da Terra.",
      "Está incorreta: 4900 N corresponderia a uma gravidade de 98 m/s², inexistente no nosso planeta."
    ],
    "nursingApplication": "Determina a força gravítica vertical que atua sobre a utente e que tem de ser suportada pelos profissionais no levante."
  },
  {
    "id": 1303,
    "topicId": 1,
    "question": "Se um doente com 70 kg de massa for mobilizado por dois enfermeiros, qual é a força peso total que o sistema gravítico atrai?",
    "options": [
      "7,14 N, correspondendo à razão fracionária entre a massa do doente e a aceleração gravítica g.",
      "70 N, mantendo-se a equivalência estática nominal entre a leitura da balança e a força no SI.",
      "686 N, sendo esta a força vertical descendente que a equipa tem de contrariar ao elevar o doente no ar.",
      "6860 N, valor resultante de uma estimativa de impacto dinâmico em colisão de alta velocidade."
    ],
    "correctIndex": 2,
    "explanation": "P = 70 kg × 9,8 m/s² = 686 N. Ao elevar o doente no ar sem apoio da cama, a equipa tem de exercer 686 N verticais para cima.",
    "distractorAnalysis": [
      "Está incorreta: Dividir massa por gravidade é uma operação incorreta sem significado físico de peso.",
      "Está incorreta: O peso mede-se em Newtons (686 N) e não equivale numericamente aos quilogramas de massa.",
      "Está incorreta: 6860 N é dez vezes o peso real de um adulto de 70 kg em repouso."
    ],
    "nursingApplication": "A dois enfermeiros, cada um suporta em média cerca de 343 N ao elevar o utente sem equipamentos auxiliares."
  },
  {
    "id": 1304,
    "topicId": 1,
    "question": "Um utente com 85 kg de massa corporal inicia marcha assistida. Que força gravítica vertical atua sobre o solo no apoio bipodal estático?",
    "options": [
      "833 N, distribuída pelos pontos de contacto dos dois pés com o piso da enfermaria (P = 85 × 9,8).",
      "8,67 N, obtida pela divisão da massa inercial corporal pela aceleração gravítica g.",
      "85 N, considerando que o apoio em dois pés divide o peso do corpo por um fator escalar de dez.",
      "8330 N, resultante de uma sobrecarga transitória instantânea provocada pela postura bípede ereta."
    ],
    "correctIndex": 0,
    "explanation": "P = m·g = 85 kg × 9,8 m/s² = 833 N no total. Em apoio bipodal simétrico, cada pé suporta cerca de 416,5 N.",
    "distractorAnalysis": [
      "Está incorreta: Dividir 85 por 9,8 comete um erro matemático de inversão de grandezas fundamentais.",
      "Está incorreta: O apoio bipodal não reduz a força gravítica total exercida pela Terra (P = 833 N).",
      "Está incorreta: A postura bípede estática não decuplica o peso gravítico do corpo."
    ],
    "nursingApplication": "A divisão do peso pelos dois pés (cerca de 416,5 N em cada) ilustra como o apoio simétrico reduz a carga articular unilateral."
  },
  {
    "id": 1305,
    "topicId": 1,
    "question": "Qual é o peso de um utente com 95 kg de massa corporal admitido no serviço de medicina interna (adotando g = 9,8 m/s²)?",
    "options": [
      "9,69 N, resultante da divisão indevida da massa pela aceleração da gravidade.",
      "931 N, calculado por P = m·g = 95 kg × 9,8 m/s², garantindo o equilíbrio estático.",
      "95 N, presumindo que a leitura da balança hospitalar expressa diretamente Newtons.",
      "9310 N, que corresponderia a uma massa de quase uma tonelada em repouso estático."
    ],
    "correctIndex": 1,
    "explanation": "P = 95 kg × 9,8 m/s² = 931 N de força gravítica orientada verticalmente para o solo.",
    "distractorAnalysis": [
      "Está incorreta: Dividir massa por gravidade é uma operação incorreta que não calcula o peso.",
      "Está incorreta: 95 kg é a massa; o peso é a força atrativa em Newtons (931 N).",
      "Está incorreta: 9310 N resultaria de um erro de multiplicação por 98 m/s²."
    ],
    "nursingApplication": "Mobilizar um doente de 931 N sem auxílio mecânico acarreta risco significativo de lesão discal lombar para a equipa."
  },
  {
    "id": 1306,
    "topicId": 1,
    "question": "Uma maca de transporte de urgência tem 40 kg de massa e transporta um doente de 80 kg. Qual é o peso total do conjunto sobre o piso?",
    "options": [
      "12,24 N, calculada dividindo a massa combinada pela constante da gravidade local terrestre.",
      "120 N, admitindo a igualdade numérica direta entre quilogramas de carga e Newtons de peso.",
      "1176 N, resultante do peso combinado da massa total de 120 kg sujeita à gravidade terrestre (120 × 9,8).",
      "11760 N, obtida através de uma amplificação arbitrária de dez vezes da força gravítica total."
    ],
    "correctIndex": 2,
    "explanation": "Massa total = 40 + 80 = 120 kg. Peso total = m·g = 120 kg × 9,8 m/s² = 1176 N.",
    "distractorAnalysis": [
      "Está incorreta: Dividir a massa de 120 kg por 9,8 é matematicamente e fisicamente incorreto.",
      "Está incorreta: 120 kg gera um peso de 1176 N no campo gravítico terrestre, e não de 120 N.",
      "Está incorreta: 11760 N corresponderia a um conjunto pesadíssimo de 1200 kg de massa."
    ],
    "nursingApplication": "Este peso total de 1176 N atua sobre as quatro rodas, gerando as forças normais que determinam a resistência ao rolamento."
  },
  {
    "id": 1307,
    "topicId": 1,
    "question": "Num procedimento de punção venosa periférica, porque é que uma agulha com bisel de área diminuta penetra facilmente na pele com pouca força?",
    "options": [
      "Porque a agulha anula a força de atrito cinético através da emissão espontânea de ondas sonoras ultrassónicas.",
      "Porque a massa inercial da agulha é convertida integralmente em calor térmico que cauteriza os tecidos.",
      "Porque a pequena área do bisel gera uma enorme pressão mecânica (p = F / A), superando a resistência elástica da derme.",
      "Porque a agulha inverte a direção da gravidade terrestre no ponto exato da punção cutânea."
    ],
    "correctIndex": 2,
    "explanation": "Pela relação p = F/A, uma área microscópica no bisel (ex: 0,1 mm²) transforma uma força modesta (1 N) numa pressão de 10 milhões de Pascais.",
    "distractorAnalysis": [
      "Está incorreta: A agulha não emite ultrassons; a penetração é um fenómeno mecânico de concentração de tensão e cisalhamento.",
      "Está incorreta: A agulha metálica não se converte em calor cauterizador; a punção é puramente mecânica e atraumática.",
      "Está incorreta: A punção não altera a gravidade local da Terra."
    ],
    "nursingApplication": "Compreender a relação p = F/A explica porque agulhas mais finas (menor calibre G) exigem menor força de penetração."
  },
  {
    "id": 1308,
    "topicId": 1,
    "question": "Se um enfermeiro aplicar uma força de 2 N no bisel afiado de uma agulha com área de corte de 0,2 mm² (0,2 × 10⁻⁶ m²), qual é a pressão gerada na pele?",
    "options": [
      "0,4 Pa, que decorre da multiplicação direta da força pelo valor numérico da área em milímetros quadrados.",
      "10 Pa, calculada pela divisão simples da força pela área sem conversão prévia de unidades ao SI.",
      "4.000.000 Pa, calculada pela multiplicação da força pelo quadrado da área da secção reta transversal.",
      "10.000.000 Pa (10 MPa), resultante da aplicação direta da relação p = F / A = 2 / (0,2 × 10⁻⁶)."
    ],
    "correctIndex": 3,
    "explanation": "p = F / A = 2 N / (2 × 10⁻⁷ m²) = 10⁷ Pa = 10 MPa. Esta pressão massiva vence facilmente a resistência de corte da pele.",
    "distractorAnalysis": [
      "Está incorreta: Multiplicar força por área comete um erro dimensional primário (pressão é quociente e não produto).",
      "Está incorreta: Não converter milímetros quadrados para metros quadrados origina um erro de seis ordens de grandeza decimal.",
      "Está incorreta: A fórmula da pressão é p = F/A linear simples, e não quadrática na área."
    ],
    "nursingApplication": "Ilustra como instrumentos afiados geram pressões mecânicas colossais com forças musculares extremamente reduzidas."
  },
  {
    "id": 1309,
    "topicId": 1,
    "question": "Comparando uma agulha de punção intramuscular de 21G (mais espessa) com uma agulha de 25G (mais fina), para a mesma força manual:",
    "options": [
      "A agulha mais fina de 25G gera uma pressão de ponta significativamente maior devido à sua menor área de secção reta de corte.",
      "A agulha de 21G gera maior pressão porque possui maior comprimento longitudinal de caneta metálica.",
      "Ambas as agulhas geram rigorosamente a mesma pressão, dado que a força manual aplicada pelo profissional é idêntica.",
      "Nenhuma das agulhas gera pressão, pois a pressão mecânica só se manifesta em sistemas hidráulicos fechados."
    ],
    "correctIndex": 0,
    "explanation": "p = F/A: mantendo a mesma força F, a agulha de menor diâmetro/área (25G) produz uma pressão mecânica de ponta superior.",
    "distractorAnalysis": [
      "Está incorreta: O comprimento da agulha não altera a pressão no ponto de corte da ponta; o que determina a pressão é a área de contacto.",
      "Está incorreta: Mesma força sobre áreas diferentes gera pressões necessariamente diferentes (inversamente proporcionais à área).",
      "Está incorreta: A pressão mecânica atua sempre que uma força de contacto perpendicular se distribui por uma superfície sólida ou biológica."
    ],
    "nursingApplication": "Explica porque agulhas pediátricas muito finas penetram os tecidos com menor desconforto doloroso mecânico."
  },
  {
    "id": 1310,
    "topicId": 1,
    "question": "Se uma agulha perder o fio de corte (ponta romba ou dobrada por colisão acidental no frasco), o que acontece à força necessária para puncionar?",
    "options": [
      "A força necessária reduz-se para metade porque o metal rombo adquire propriedades magnéticas repelentes aos tecidos.",
      "A força permanece inalterada, uma vez que a elasticidade da pele humana adapta-se instantaneamente à geometria do metal.",
      "A força muscular necessária aumenta substancialmente, pois a maior área de contacto da ponta romba reduz a pressão para a mesma força.",
      "A força necessária anula-se, penetrando a agulha romba por sucção osmótica sem necessidade de qualquer empurrão."
    ],
    "correctIndex": 2,
    "explanation": "Com a ponta romba, a área A aumenta; para atingir a mesma pressão de corte (p = F/A), o enfermeiro tem de exercer uma força F muito maior.",
    "distractorAnalysis": [
      "Está incorreta: Pontas rombas não adquirem magnetismo; aumentam a resistência mecânica e o traumatismo tecidual.",
      "Está incorreta: A pele oferece resistência mecânica real que tem de ser vencida por pressão; agulhas rombas causam grande dor e laceração.",
      "Está incorreta: Não há sucção osmótica de agulhas; a penetração é puramente mecânica."
    ],
    "nursingApplication": "Agulhas que toquem em superfícies rígidas e fiquem rombas devem ser imediatamente substituídas antes de tocar no utente."
  },
  {
    "id": 1311,
    "topicId": 1,
    "question": "Porque é que os enfermeiros devem utilizar calçado ergonómico com sola de base ampla e amortecimento em vez de calçado estreito?",
    "options": [
      "A sola ampla aumenta a área de distribuição da força peso (p = F / A), reduzindo a pressão pontual sobre a fáscia plantar e articulações.",
      "A sola ampla reduz o coeficiente de atrito cinético com o pavimento, facilitando o deslizamento contínuo dos pés durante as transferências.",
      "A sola ampla diminui a força peso total do corpo do profissional, reduzindo o trabalho mecânico exigido aos músculos das pernas.",
      "A sola ampla converte a energia mecânica dos passos em energia térmica superficial, impedindo a fadiga dos ligamentos do tornozelo."
    ],
    "correctIndex": 0,
    "explanation": "Ao aumentar a área de suporte A, a força peso F do enfermeiro dispersa-se, diminuindo a pressão mecânica (p = F/A) na planta do pé.",
    "distractorAnalysis": [
      "Está incorreta: solas hospitalares devem assegurar atrito estático elevado para evitar quedas e escorregamentos, e não facilitar o deslizamento.",
      "Está incorreta: a força peso depende da massa corporal e da gravidade (P = m·g), não sendo alterada pelas dimensões da sola do calçado.",
      "Está incorreta: o amortecimento dissipa energia por absorção viscoelástica do impacto e não por conversão térmica funcional nos ligamentos."
    ],
    "nursingApplication": "Solas com boa distribuição de pressão reduzem a fadiga podológica e previnem fasceítes plantares após turnos de 8 a 12 horas."
  },
  {
    "id": 1312,
    "topicId": 1,
    "question": "Se um enfermeiro de 70 kg (peso ≈ 686 N) se apoiar nos dois pés sobre solas com área total combinada de 0,035 m², qual é a pressão média no solo?",
    "options": [
      "19.600 Pa (19,6 kPa), calculada pela razão direta p = F / A = 686 N / 0,035 m².",
      "24.010 Pa, calculada por p = F × A = 686 × 0,035, multiplicando em vez de dividir.",
      "9800 Pa, calculada por p = m / A = 70 / 0,035, usando a massa em vez do peso (força).",
      "686 Pa, assumindo erroneamente que a pressão é numericamente igual ao valor do peso do doente."
    ],
    "correctIndex": 1,
    "explanation": "p = F / A = 686 N / 0,035 m² = 19.600 Pa = 19,6 kPa.",
    "distractorAnalysis": [
      "Está incorreta: a pressão é p = F / A (divisão), não o produto F × A; multiplicar força por área não tem significado físico.",
      "Está incorreta: a fórmula da pressão requer a força em Newtons (peso = m·g), não a massa em quilogramas; p = m/A não é dimensionalmente correto.",
      "Está incorreta: a pressão (Pa) é a força por unidade de área; assumir p = F numericamente ignora a área de contacto, que altera completamente o resultado."
    ],
    "nursingApplication": "Demonstra a pressão mecânica real transmitida ao pavimento hospitalar durante a postura bípede ereta estática."
  },
  {
    "id": 1313,
    "topicId": 1,
    "question": "Se o mesmo enfermeiro elevar um dos pés e ficar apoiado num único pé (área reduzida para metade, 0,0175 m²), o que acontece à pressão no solo?",
    "options": [
      "A pressão reduz-se para metade porque o organismo compensa automaticamente o esforço retirando massa inercial.",
      "A pressão mantém-se rigorosamente idêntica a 19.600 Pa, dado que a gravidade atua unicamente sobre o pé suspenso.",
      "A pressão duplica para 39.200 Pa (39,2 kPa), pois a mesma força peso total passa a concentrar-se em metade da área de contacto.",
      "A pressão anula-se completamente, entrando o profissional num estado transitório de equilíbrio indiferente."
    ],
    "correctIndex": 2,
    "explanation": "p = F / A: se A diminui para metade e F se mantém constante (686 N), a pressão mecânica de apoio dobra: 686 / 0,0175 = 39.200 Pa.",
    "distractorAnalysis": [
      "Está incorreta: A massa não varia; apoiar num só pé não elimina metade da matéria corporal.",
      "Está incorreta: O peso total continua a atuar integralmente através do único membro que mantém contacto com o solo.",
      "Está incorreta: O apoio unipodal não anula a pressão; pelo contrário, concentra a carga mecânica e desafia o equilíbrio postural."
    ],
    "nursingApplication": "Explica porque períodos prolongados de apoio unipodal ou calçado inadequado aceleram a sobrecarga articular no joelho e tornozelo."
  },
  {
    "id": 1314,
    "topicId": 1,
    "question": "Porque é que uma força externa é indispensável para alterar a trajetória de um utente que caminha em linha reta?",
    "options": [
      "Porque a massa corporal diminui linearmente durante a caminhada, desestabilizando o alinhamento postural fisiológico da marcha.",
      "Porque pela 1.ª Lei de Newton a velocidade vetorial mantém a sua direção constante por inércia, exigindo força para curvar.",
      "Porque o centro de gravidade do corpo humano localiza-se fora da pelve durante qualquer mudança de direção no plano horizontal.",
      "Porque a gravidade terrestre atua exclusivamente na direção perpendicular à marcha, anulando todas as acelerações laterais."
    ],
    "correctIndex": 1,
    "explanation": "Mudar de direção implica alterar o vetor velocidade (gerando aceleração centrípeta), o que requer uma força resultante externa não nula.",
    "distractorAnalysis": [
      "Está incorreta: a massa do indivíduo permanece constante durante a marcha e não é a causa da necessidade de força para mudar de trajetória.",
      "Está incorreta: o centro de gravidade desloca-se com o corpo e permanece dentro da região pélvica/tronco, não saindo do corpo na marcha normal.",
      "Está incorreta: a gravidade é vertical e constante; a alteração de trajetória no plano horizontal depende de forças horizontais de atrito com o solo."
    ],
    "nursingApplication": "O enfermeiro deve apoiar o doente com instabilidade da marcha ao fazer curvas, momento em que a inércia desafia o equilíbrio."
  },
  {
    "id": 1315,
    "topicId": 1,
    "question": "Se uma cadeira de rodas se deslocar em linha reta com velocidade rigorosamente constante de 1,2 m/s, qual é a sua aceleração?",
    "options": [
      "1,2 m/s², mantendo-se o valor numérico da aceleração idêntico à velocidade de deslocamento no corredor.",
      "9,8 m/s², decorrente da atração gravitacional permanente que atua sobre o utente e o assento.",
      "0 m/s², uma vez que não existe qualquer variação temporal no vetor velocidade (a = Δv / Δt = 0).",
      "1,44 m/s², calculada pelo quadrado da velocidade instantânea dividida pelo tempo de observação."
    ],
    "correctIndex": 2,
    "explanation": "Aceleração é a taxa de variação da velocidade no tempo (a = dv/dt). Se a velocidade é constante, a aceleração é zero.",
    "distractorAnalysis": [
      "Está incorreta: Velocidade mede deslocamento por tempo (m/s); aceleração mede variação de velocidade por tempo (m/s²).",
      "Está incorreta: 9,8 m/s² é a aceleração da gravidade, mas no movimento horizontal a velocidade vertical é nula.",
      "Está incorreta: 1,44 é o quadrado de 1,2, não tendo dimensão física de aceleração linear sem divisão por um raio."
    ],
    "nursingApplication": "A ausência de aceleração no MRU garante que o doente não sente forças de inércia a empurrá-lo para a frente ou para trás."
  },
  {
    "id": 1316,
    "topicId": 1,
    "question": "Se um objeto de monitorização estiver pousado no tampo de uma mesa de enfermagem em repouso, qual é a sua aceleração?",
    "options": [
      "9,8 m/s² orientada para o solo, porque todos os corpos na superfície da Terra estão continuamente a acelerar para baixo.",
      "0 m/s², dado que o objeto se encontra em repouso estático sustentado pela mesa em equilíbrio estável.",
      "1,0 m/s² orientada para o norte magnético, decorrente da rotação da Terra em torno do seu eixo polar.",
      "Infinita, porque a ausência de movimento linear no plano horizontal anula o tempo no denominador da fórmula."
    ],
    "correctIndex": 1,
    "explanation": "Estando em repouso no tampo da mesa, a velocidade é nula e constante, logo a aceleração é estritamente a = 0 m/s².",
    "distractorAnalysis": [
      "Está incorreta: A gravidade exerce uma força peso, mas a reação normal da mesa impede a queda, resultando em aceleração nula.",
      "Está incorreta: A rotação terrestre não impõe aceleração linear de 1 m/s² aos objetos em repouso na mesa do posto de enfermagem.",
      "Está incorreta: A aceleração é zero e não infinita; o repouso é a ausência de variação temporal de velocidade."
    ],
    "nursingApplication": "Equipamentos parados em superfícies horizontais planas mantêm aceleração nula e estabilidade biomecânica."
  },
  {
    "id": 1317,
    "topicId": 1,
    "question": "Porque é que o cinto de segurança de uma cadeira de rodas hospitalar deve ser fixado ao nível da pelve e não do abdómen?",
    "options": [
      "Porque a cintura pélvica é uma estrutura óssea rígida capaz de suportar elevadas forças inerciais sem lesão visceral interna.",
      "Porque a pelve é desprovida de inércia mecânica, comportando-se como um ponto material estritamente imaterial.",
      "Porque o abdómen contém ar comprimido que empurra a fita do cinto para fora durante as manobras no corredor.",
      "Porque a colocação pélvica facilita a circulação de correntes galvânicas curativas ao longo do membro inferior."
    ],
    "correctIndex": 0,
    "explanation": "A pelve óssea suporta forças mecânicas sem deformação; cintos sobre o abdómen causam lacerações hepáticas e esplénicas graves.",
    "distractorAnalysis": [
      "Está incorreta: A pelve tem massa óssea substancial e obedece com rigor a todas as leis da inércia newtoniana.",
      "Está incorreta: O abdómen é composto por tecidos moles e vísceras parenquimatosas/ocas compressíveis, não ar sob pressão.",
      "Está incorreta: Cintos pélvicos são dispositivos puramente mecânicos de retenção, não gerando correntes galvânicas."
    ],
    "nursingApplication": "O cinto pélvico a 45° sobre as cristas ilíacas previne tanto a projeção anterior como o deslizamento sacral ('efeito submarino')."
  },
  {
    "id": 1318,
    "topicId": 1,
    "question": "Qual é a consequência de transportar um monitor-desfibrilhador sobre o colchão da maca ao lado do doente sem fixação própria?",
    "options": [
      "O monitor perde instantaneamente a sua calibração de energia e descarrega choques espontâneos no doente.",
      "Numa travagem ou manobra brusca, o monitor de 7 kg pode ser projetado contra o tórax ou crânio do doente por inércia.",
      "O peso do monitor anula as ondas de pulso arterial do utente através de interferência mecânica direta.",
      "O monitor converte o ritmo cardíaco do doente num traçado sinusoidal sem qualquer significado clínico."
    ],
    "correctIndex": 1,
    "explanation": "O monitor solto comporta-se como um objeto em movimento livre; na travagem, choca contra o utente causando traumatismo secundário grave.",
    "distractorAnalysis": [
      "Está incorreta: Monitores homologados possuem proteções contra disparos acidentais; o risco primário é o trauma contundente mecânico.",
      "Está incorreta: O monitor solto não anula ondas de pulso sistémicas, mas pode esmagar membros se tombar sobre eles.",
      "Está incorreta: A interferência no ECG pode ocorrer por artefactos de movimento, mas o perigo letal é a lesão por impacto físico."
    ],
    "nursingApplication": "Monitores devem viajar sempre encaixados em suportes de parede ou suportes dedicados de maca devidamente travados."
  },
  {
    "id": 1319,
    "topicId": 1,
    "question": "Num transporte de emergência intra-hospitalar, que recomendação previne o risco de projeção inercial do doente em corredores inclinados?",
    "options": [
      "Descer as rampas a correr com a maca destravada para que a inércia anule o peso total do conjunto transportado.",
      "Pedir ao doente que se mantenha sentado de pernas cruzadas no bordo da maca sem segurar em manípulos de apoio.",
      "Desligar a iluminação do corredor hospitalar para que as pupilas dilatadas compensem as desacelerações da maca.",
      "Manter as grades laterais elevadas, afivelar os cintos de segurança da maca e conduzir a velocidade moderada e controlada."
    ],
    "correctIndex": 3,
    "explanation": "Cintos e grades fornecem as forças externas necessárias para conter o corpo perante qualquer alteração de velocidade ou plano.",
    "distractorAnalysis": [
      "Está incorreta: Descer rampas a correr multiplica a energia cinética e torna a travagem inercial extremamente violenta e desgovernada.",
      "Está incorreta: Sentar-se de pernas cruzadas no bordo eleva o centro de gravidade e anula a base de apoio, com risco quase certo de queda.",
      "Está incorreta: A iluminação adequada é um requisito de segurança visual para antecipar obstáculos no trajeto hospitalar."
    ],
    "nursingApplication": "O cumprimento sistemático destas três medidas integra as metas internacionais de segurança do doente no transporte."
  },
  {
    "id": 1320,
    "topicId": 1,
    "question": "Qual é a função biofísica primordial das grades laterais de uma cama ou maca hospitalar?",
    "options": [
      "Atuar como anteparos mecânicos externos que aplicam forças de reação sobre o doente, impedindo a sua projeção ou queda lateral por inércia.",
      "Servir exclusivamente como ponto de apoio anatómico para a fixação de drenos cirúrgicos e bolsas coletoras de diurese vesical.",
      "Elevar o centro de gravidade do leito hospitalar para facilitar o trabalho de mobilização postural executado pelo enfermeiro.",
      "Isolar o leito contra variações de temperatura ambiente e correntes de ar na enfermaria através de uma barreira protetora."
    ],
    "correctIndex": 0,
    "explanation": "As grades laterais exercem forças normais de suporte lateral quando o corpo rola ou se desloca lateralmente no leito.",
    "distractorAnalysis": [
      "Está incorreta: as bolsas e drenos devem ser fixados no chassis da cama abaixo do nível do leito e não nas grades móveis de proteção.",
      "Está incorreta: a elevação do centro de gravidade diminui a estabilidade; as grades não têm essa função e visam a contenção física de segurança.",
      "Está incorreta: as grades hospitalares são vazadas e tubulares, não fornecendo isolamento térmico contra correntes de ar ambiente."
    ],
    "nursingApplication": "As grades laterais levantadas e travadas são um cuidado essencial em doentes desorientados, sedados ou em transporte."
  },
  {
    "id": 1321,
    "topicId": 1,
    "question": "Se um enfermeiro transportar uma maca numa rampa descendente com os pés do doente para a frente, como deve posicionar o seu corpo?",
    "options": [
      "O enfermeiro deve correr atrás da maca empurrando com toda a força para acelerar a descida até ao piso térreo.",
      "O enfermeiro deve sentar-se sobre as pernas do doente na maca para aumentar a inércia do conjunto.",
      "O enfermeiro deve soltar os manípulos e caminhar de lado sem tocar na maca até chegar ao fim da rampa.",
      "O enfermeiro deve colocar-se à frente da maca (voltado para ela), travando e controlando a descida com o seu peso e pernas fletidas."
    ],
    "correctIndex": 3,
    "explanation": "Colocar-se à frente permite exercer uma força ascendente ao longo da rampa, equilibrando a descida e prevenindo acelerações inerciais perigosas.",
    "distractorAnalysis": [
      "Está incorreta: Empurrar por trás numa descida acelera a maca descontroladamente, multiplicando a energia de impacto no final.",
      "Está incorreta: Sentar-se sobre o doente viola todas as regras de segurança, conforto e biomecânica de enfermagem.",
      "Está incorreta: Soltar a maca numa rampa resulta em descida desgovernada com risco gravíssimo de colisão fatal."
    ],
    "nursingApplication": "Controlar a descida a partir da frente com joelhos fletidos protege a coluna do enfermeiro e a vida do doente."
  },
  {
    "id": 1322,
    "topicId": 1,
    "question": "Ao transpor uma soleira ou desnível de porta com uma cadeira de rodas, qual é o procedimento biomecânico correto?",
    "options": [
      "Acelerar com toda a força contra o ressalto para que a inércia faça a cadeira saltar por cima do obstáculo de pedra.",
      "Pressionar a alavanca basculante inferior com o pé para elevar as rodas dianteiras, transpondo o obstáculo suavemente sem impacto inercial.",
      "Pedir ao doente que salte da cadeira em andamento para diminuir a massa inercial durante a transposição da porta.",
      "Puxar a cadeira de lado sobre duas rodas laterais para anular a força de atrito com o caixilho metálico."
    ],
    "correctIndex": 1,
    "explanation": "Bascular a cadeira eleva as pequenas rodas dianteiras que de outro modo bateriam bruscamente no desnível, travando a cadeira e ejetando o utente.",
    "distractorAnalysis": [
      "Está incorreta: Bater com força no ressalto trava as rodas dianteiras instantaneamente, projetando o doente de cabeça contra o chão por inércia.",
      "Está incorreta: O doente deve permanecer sentado e seguro; saltar em andamento é um risco gravíssimo de queda e fratura.",
      "Está incorreta: Manobrar a cadeira inclinada em duas rodas laterais é perigoso e instável."
    ],
    "nursingApplication": "Utilizar a alavanca de pé na traseira da cadeira aplica o princípio do momento de forças para elevar a dianteira com facilidade."
  },
  {
    "id": 1323,
    "topicId": 1,
    "question": "Ao descer uma rampa íngreme com uma cadeira de rodas ocupada, qual é a orientação recomendada para a segurança inercial do doente?",
    "options": [
      "Descer para a frente a correr para que a inércia compense o peso do utente através de sustentação aerodinâmica.",
      "Soltar os travões e deixar a cadeira descer livremente enquanto o enfermeiro vigia o percurso à distância.",
      "Descer de marcha-atrás (o enfermeiro caminha de costas à frente da cadeira), mantendo o doente encostado ao encosto por gravidade.",
      "Colocar a cadeira de lado perpendicularmente ao declive para que o peso fique concentrado numa só roda."
    ],
    "correctIndex": 2,
    "explanation": "Descer de costas faz com que a componente tangencial do peso apoie o doente contra o encosto traseiro, eliminando o risco de queda para a frente.",
    "distractorAnalysis": [
      "Está incorreta: Descer para a frente em rampa íngreme inclina o doente para o abismo, facilitando a projeção anterior numa travagem mínima.",
      "Está incorreta: Soltar a cadeira em rampa é negligência grave com aceleração contínua e impacto inevitável.",
      "Está incorreta: Colocar a cadeira de lado numa rampa cria um momento de capotamento lateral extremamente perigoso."
    ],
    "nursingApplication": "Descer rampas de costas com a cadeira de rodas é uma regra de ouro de boas práticas de enfermagem."
  },
  {
    "id": 1324,
    "topicId": 1,
    "question": "Qual é a consequência biomecânica imediata de transportar um doente em cadeira de rodas sem utilizar os apoios de pés?",
    "options": [
      "A cadeira de rodas perde 50% da sua massa inercial, tornando-se incontrolável no plano horizontal do corredor.",
      "O doente sofre uma diminuição imediata do débito cardíaco por cancelamento da 1.ª Lei de Newton nos membros.",
      "As rodas traseiras da cadeira de rodas deixam de girar devido à interrupção do campo gravitacional dos eixos.",
      "Os pés podem tocar no piso e ser fletidos bruscamente para trás por atrito e inércia da marcha, com risco de entorse ou fratura maleolar."
    ],
    "correctIndex": 3,
    "explanation": "Se o pé toca no chão com a cadeira em andamento, o piso trava o pé enquanto a cadeira continua para a frente, provocando lesões graves no tornozelo.",
    "distractorAnalysis": [
      "Está incorreta: A massa inercial da cadeira é uma propriedade dos materiais e não depende do posicionamento dos pés.",
      "Está incorreta: O débito cardíaco é regulado pelo sistema nervoso autónomo e volume sistólico, não pela 1.ª Lei nos membros.",
      "Está incorreta: As rodas giram por rolamento mecânico nos rolamentos de esferas, sem qualquer interrupção gravitacional."
    ],
    "nursingApplication": "Assegurar os pés nos apoios próprios antes de mover a cadeira de rodas é um procedimento obrigatório de enfermagem."
  },
  {
    "id": 1325,
    "topicId": 1,
    "question": "Porque é que o cinto de segurança não deve ser colocado frouxo ou com folga excessiva no utente em cadeira de rodas?",
    "options": [
      "Porque o cinto frouxo atrai correntes eletrostáticas do pavimento que provocam queimaduras superficiais na pele.",
      "Porque a folga no cinto reduz a aceleração gravitacional da Terra no quarto de internamento hospitalar.",
      "Porque a folga permite que o corpo ganhe velocidade relativa antes de ser subitamente travado, gerando um impacto inercial violento.",
      "Porque o cinto solto aumenta o coeficiente de atrito cinético entre as rodas de borracha e o piso do hospital."
    ],
    "correctIndex": 2,
    "explanation": "Com folga, o doente move-se livremente no espaço da folga e atinge o cinto com velocidade, sofrendo uma desaceleração num tempo Δt curtíssimo.",
    "distractorAnalysis": [
      "Está incorreta: Cintos de tecido polimérico não acumulam correntes eletrostáticas que queimem a pele por folga de colocação.",
      "Está incorreta: A gravidade terrestre g é constante e independente do ajuste de correias mecânicas de cadeiras de rodas.",
      "Está incorreta: O atrito das rodas com o piso depende da carga vertical total e do piso, não da folga do cinto."
    ],
    "nursingApplication": "O cinto deve estar perfeitamente ajustado (permitindo a passagem de dois dedos entre o cinto e o corpo para conforto e circulação)."
  },
  {
    "id": 1326,
    "topicId": 1,
    "question": "Qual é a recomendação de condução ao manobrar uma maca com doente grave para dentro de um elevador hospitalar?",
    "options": [
      "Entrar suavemente sem embater nas ombreiras da porta e posicionar a maca no centro da cabine antes de acionar a descida ou subida.",
      "Entrar a correr a alta velocidade para que a inércia da maca impeça o fecho automático das portas de correr.",
      "Deixar a cabeceira da maca projetada para fora da cabine para que o doente possa respirar ar exterior do patamar.",
      "Destravar todos os sistemas de travões para que a maca possa deslizar livremente durante as acelerações do elevador."
    ],
    "correctIndex": 0,
    "explanation": "A entrada suave previne impactos inerciais e centraliza a carga na cabine, garantindo estabilidade e conforto ao utente.",
    "distractorAnalysis": [
      "Está incorreta: Entrar a correr multiplica o risco de colisão e traumatismo; sistemas de fotocélula na porta evitam o fecho sem necessidade de choques.",
      "Está incorreta: Deixar a maca fora da cabine é um perigo extremo de esmagamento contra o poço do elevador!",
      "Está incorreta: A maca deve ser travada no interior do elevador para não deslizar com as acelerações verticais e horizontais."
    ],
    "nursingApplication": "O posicionamento correto de macas em elevadores é uma competência elementar de segurança do transporte hospitalar."
  },
  {
    "id": 1327,
    "topicId": 1,
    "question": "Qual é a razão biofísica pela qual é mais económico energeticamente para o enfermeiro manter uma maca a velocidade constante do que andar aos solavancos?",
    "options": [
      "A velocidade constante anula a massa inercial do conjunto móvel, eliminando a resistência muscular durante as passagens de portas.",
      "A velocidade constante exige apenas vencer o atrito cinético (∑F = 0); os solavancos exigem acelerar repetidamente a massa (F = m·a), consumindo mais energia muscular.",
      "Os solavancos reduzem a frequência cardíaca do profissional devido ao efeito mecânico de ressonância no miocárdio ventricular.",
      "A velocidade constante elimina o coeficiente de atrito estático das rodas com o piso cerâmico, facilitando a condução da maca."
    ],
    "correctIndex": 1,
    "explanation": "Acelerar repetidamente a massa exige trabalho muscular adicional (W = F·d = m·a·d) em cada aceleração, multiplicando a fadiga.",
    "distractorAnalysis": [
      "Está incorreta: a massa inercial é constante e não se anula em velocidade constante; a vantagem resulta de não ter de acelerar a massa (a = 0).",
      "Está incorreta: o trabalho repetido de aceleração e travagem exige forças adicionais (F = m·a), gerando fadiga física precoce no profissional.",
      "Está incorreta: o coeficiente de atrito é uma propriedade de contacto entre as superfícies (borracha e pavimento) e não é anulado pela velocidade."
    ],
    "nursingApplication": "Manter uma cadência regular de passada em transportes longos poupa energia muscular e proporciona conforto ao doente transportado."
  },
  {
    "id": 1328,
    "topicId": 1,
    "question": "Que risco clínico direto decorre da oscilação inercial violenta de um sistema de soros durante travagens bruscas de uma maca?",
    "options": [
      "Aceleração excessiva do débito de perfusão com risco de sobrecarga volêmica aguda no sistema circulatório central do doente.",
      "Desvio da agulha ou cateter para fora da veia provocado pelo refluxo de ar atmosférico através do filtro da câmara de gotejamento.",
      "Aumento da pressão osmótica plasmática decorrente da vibração mecânica das moléculas de eletrólitos na câmara conta-gotas.",
      "Tração mecânica sobre o cateter venoso periférico, com risco de exteriorização acidental do cateter ou laceração da veia puncionada."
    ],
    "correctIndex": 3,
    "explanation": "A tubuladura esticada transmite a força inercial do frasco à cânula intravenosa, podendo arrancá-la e provocar flebite mecânica ou hematoma.",
    "distractorAnalysis": [
      "Está incorreta: embora possa ocorrer uma variação pontual de gotejamento, o perigo físico imediato é a tração mecânica direta sobre o acesso vascular.",
      "Está incorreta: as câmaras de gotejamento possuem membranas hidrofóbicas que impedem a entrada de ar enquanto houver fluido na linha.",
      "Está incorreta: a pressão osmótica depende da concentração molar de solutos e não de vibrações ou forças inerciais de desaceleração da maca."
    ],
    "nursingApplication": "O enfermeiro deve garantir folga suficiente na linha de perfusão e fixar o tubo ao membro com penso adesivo seguro."
  },
  {
    "id": 1329,
    "topicId": 1,
    "question": "No transporte de um doente com Traumatismo Cranioencefálico (TCE) grave e hipertensão intracraniana, qual é o impacto de desacelerações bruscas?",
    "options": [
      "O encéfalo sofre movimentos inerciais no interior da caixa craniana, podendo aumentar a pressão intracraniana e agravar lesões secundárias.",
      "Os ossos parietais e frontais sofrem desmineralização óssea aguda provocada pelas microvibrações inerciais do piso hospitalar.",
      "Ocorre uma paragem imediata do fluxo sanguíneo carotídeo provocada pelo encerramento forçado das válvulas venosas jugulares.",
      "O líquor cefalorraquidiano perde a sua densidade normal, deixando de exercer o efeito amortecedor hidrostático natural sobre o córtex."
    ],
    "correctIndex": 0,
    "explanation": "O cérebro flutua no líquor; desacelerações inerciais projetam a massa encefálica contra as paredes ósseas do crânio (mecanismo de golpe-contragolpe).",
    "distractorAnalysis": [
      "Está incorreta: a desmineralização óssea é um processo metabólico crónico que requer semanas de imobilização e não ocorre em travagens de ambulância.",
      "Está incorreta: as artérias carótidas mantêm o fluxo por gradiente de pressão gerado pelo miocárdio; as veias jugulares não têm válvulas obstrutivas centrais.",
      "Está incorreta: a densidade física do líquor não é alterada por acelerações mecânicas, mantendo o seu papel hidrostático constante."
    ],
    "nursingApplication": "O transporte de doentes neurocríticos exige acelerações mínimas e alinhamento neutro da cabeça para proteger a perfusão cerebral."
  },
  {
    "id": 1330,
    "topicId": 1,
    "question": "Ao transpor juntas de dilatação no pavimento de corredores hospitalares com um doente crítico na maca, que cuidado biomecânico deve ser tomado?",
    "options": [
      "Acelerar vigorosamente para que a maca salte sobre a junta de dilatação sem que as rodas toquem na ranhura.",
      "Pedir ao doente que sustenha a respiração em apneia absoluta durante os dez metros seguintes à junta de dilatação.",
      "Reduzir a velocidade para o mínimo antes da junta e transpor o desnível lentamente, amortecendo o impacto inercial vertical.",
      "Inclinar a maca para trás apoiando-a apenas em duas rodas para diminuir a superfície de contacto."
    ],
    "correctIndex": 2,
    "explanation": "Desníveis e juntas de piso geram acelerações verticais bruscas (trepidação inercial) que sobrecarregam drenos, feridas e acessos vasculares.",
    "distractorAnalysis": [
      "Está incorreta: Acelerar multiplica a violência do impacto mecânico nas rodas e transmite choques dolorosos à coluna do utente.",
      "Está incorreta: A apneia não protege o corpo contra choques mecânicos articulares transmitidos pela estrutura da maca.",
      "Está incorreta: Inclinar a maca em duas rodas é uma manobra instável com risco extremo de perda de controlo e queda do doente."
    ],
    "nursingApplication": "A redução da velocidade em desníveis é uma demonstração prática de empatia e cuidado biomecânico com o doente frágil."
  },
  {
    "id": 1331,
    "topicId": 1,
    "question": "Qual é a condição estrita para que um doente numa cadeira de rodas possa ser considerado em equilíbrio translacional?",
    "options": [
      "A velocidade da cadeira de rodas deve ser superior a 15 km/h para que a inércia compense o peso do utente.",
      "A soma vetorial de todas as forças externas que atuam sobre o doente e a cadeira deve ser igual a zero (∑F = 0).",
      "O doente deve manter as duas mãos firmemente unidas sobre a cabeça durante todo o tempo de transporte.",
      "A cadeira de rodas deve ser transportada exclusivamente sobre pisos de madeira encerada de alta densidade."
    ],
    "correctIndex": 1,
    "explanation": "A primeira condição de equilíbrio (translacional) exige ∑F = 0, quer em repouso estático, quer em velocidade constante retilínea.",
    "distractorAnalysis": [
      "Está incorreta: Velocidades elevadas aumentam o risco e a energia cinética, não sendo condição para equilíbrio de forças.",
      "Está incorreta: A posição das mãos não dita a condição matemática de equilíbrio do somatório vetorial de forças.",
      "Está incorreta: O tipo de piso afeta o atrito, mas o equilíbrio depende estritamente de a resultante das forças ser nula."
    ],
    "nursingApplication": "O equilíbrio translacional garante um percurso suave, sem acelerações prejudiciais à recuperação do doente."
  },
  {
    "id": 1332,
    "topicId": 1,
    "question": "Qual é a conduta ergonómica correta ao manobrar o carrinho de emergência em pisos com ligeira inclinação?",
    "options": [
      "Conduzir o equipamento puxando-o com apenas uma das mãos enquanto caminha de costas para observar os obstáculos à retaguarda.",
      "Empurrar o carrinho com força máxima no início da descida para que a inércia vença o atrito com o piso até ao final da rampa.",
      "Apoiar todo o peso do tronco sobre a bancada superior do carrinho para aumentar a aderência dos rodízios dianteiros ao solo.",
      "Caminhar à frente ou manter as duas mãos firmes nas pegas de condução, aplicando força de retenção contínua para evitar a aceleração inercial."
    ],
    "correctIndex": 3,
    "explanation": "Em planos inclinados atua a componente tangencial do peso; manter as duas mãos firmes assegura o controlo mecânico da trajetória.",
    "distractorAnalysis": [
      "Está incorreta: caminhar de costas com uma só mão reduz drasticamente o controlo do carrinho e aumenta muito o risco de tropeção e queda.",
      "Está incorreta: empurrar o carrinho numa rampa descendente acelera a carga perigosamente, tornando a paragem de emergência impossível.",
      "Está incorreta: debruçar-se sobre o carrinho desestabiliza a postura do enfermeiro e pode provocar o capotamento do equipamento médico."
    ],
    "nursingApplication": "A atenção contínua e controlo bimanual garantem a chegada rápida e segura do carrinho de paragem à cabeceira do utente."
  },
  {
    "id": 1333,
    "topicId": 1,
    "question": "Qual das seguintes combinações de unidades no Sistema Internacional é dimensionalmente equivalente a 1 Newton?",
    "options": [
      "kg · m · s⁻² (quilograma metro por segundo ao quadrado).",
      "kg · m² · s⁻² (quilograma metro quadrado por segundo ao quadrado).",
      "kg · m · s⁻¹ (quilograma metro por segundo).",
      "kg · m⁻¹ · s⁻² (quilograma por metro e por segundo ao quadrado)."
    ],
    "correctIndex": 0,
    "explanation": "Dimensionalmente: [F] = [M] · [L] · [T]⁻² = kg · m/s² = kg · m · s⁻².",
    "distractorAnalysis": [
      "Está incorreta: kg·m²·s⁻² é a dimensão de Joule (unidade de trabalho e energia mecânica).",
      "Está incorreta: kg·m·s⁻¹ é a dimensão de quantidade de movimento (momento linear) ou impulso.",
      "Está incorreta: kg·m⁻¹·s⁻² é a dimensão de Pascal (unidade de pressão mecânica, N/m²)."
    ],
    "nursingApplication": "Evita erros em cálculos de biofísica aplicada à administração de trações mecânicas."
  },
  {
    "id": 1334,
    "topicId": 1,
    "question": "Se um dispositivo ergonómico de elevação exerce uma força vertical ascendente de 700 N sobre um utente de 70 kg, que aceleração resultante vertical inicial imprime (adotando g = 10 m/s²)?",
    "options": [
      "10 m/s², acelerando o utente verticalmente com movimento uniformemente acelerado igual à aceleração da gravidade local.",
      "Zero m/s², pois o peso do utente é P = m·g = 700 N, pelo que a força resultante é nula (700 N - 700 N = 0 N) e o corpo fica em equilíbrio.",
      "5 m/s², correspondente à divisão direta da força aplicada pela aceleração gravitacional terrestre de referência.",
      "1 m/s², resultante da diferença aritmética simples entre a massa corporal do doente e a tração exercida pelo arnês."
    ],
    "correctIndex": 1,
    "explanation": "Força resultante = F_elevador - P = 700 N - (70 kg · 10 m/s²) = 0 N. Com F_res = 0, a = 0 (equilíbrio translacional).",
    "distractorAnalysis": [
      "Está incorreta: para acelerar a 10 m/s² para cima, a força de elevação teria de ser o dobro do peso (1400 N), aplicando ∑F = m·a.",
      "Está incorreta: a aceleração resulta da 2.ª Lei (a = ∑F / m); dividir 700 N por 10 m/s² dá a massa em kg e não uma aceleração.",
      "Está incorreta: grandezas com unidades diferentes (massa em kg e força em N) não podem ser subtraídas diretamente na física."
    ],
    "nursingApplication": "Demonstra que para elevar um doente do leito é necessário superar ligeiramente o peso no arranque."
  },
  {
    "id": 1335,
    "topicId": 1,
    "question": "Se a força resultante sobre um carrinho de emergência for duplicada mantendo-se a massa inalterada, o que acontecerá à sua aceleração?",
    "options": [
      "A aceleração permanecerá rigorosamente inalterada porque a massa do carrinho com medicamentos é fixa.",
      "A aceleração será reduzida para metade devido ao atrito parasita das rodas giratórias de borracha.",
      "A aceleração aumentará quatro vezes de acordo com a lei quadrática da dissipação hidrodinâmica.",
      "A aceleração será exatamente duplicada, pois a aceleração é diretamente proporcional à força resultante aplicada."
    ],
    "correctIndex": 3,
    "explanation": "De a = F/m, se F passa a 2F com m constante, então a' = 2F/m = 2a (proporcionalidade direta).",
    "distractorAnalysis": [
      "Está incorreta: A aceleração varia em proporção direta com a força; se a força dobra, a aceleração tem de dobrar.",
      "Está incorreta: A aceleração não se reduz para metade quando se aumenta o esforço motor na ausência de travões.",
      "Está incorreta: A relação entre força e aceleração é linear simples, não exponencial quadrática."
    ],
    "nursingApplication": "Mostra ao enfermeiro que empurrar com o dobro da força faz o equipamento atingir a velocidade de marcha no dobro da rapidez."
  },
  {
    "id": 1336,
    "topicId": 1,
    "question": "Se quisermos que um utente de 100 kg atinja a mesma aceleração de arranque que um utente de 50 kg, que ajuste de força deve ser feito pelo enfermeiro?",
    "options": [
      "O enfermeiro tem de duplicar a força aplicada (exercer duas vezes mais força sobre o utente de 100 kg).",
      "O enfermeiro pode aplicar exatamente metade da força, pois a gravidade auxilia a massa superior.",
      "O enfermeiro deve manter rigorosamente a mesma força e aguardar que o atrito estático se anule.",
      "O enfermeiro tem de quadruplicar a força de acordo com o coeficiente de sustentação elástica."
    ],
    "correctIndex": 0,
    "explanation": "Para manter a mesma aceleração a: F1 = m1·a = 50·a; F2 = m2·a = 100·a = 2·F1 (é necessária o dobro da força).",
    "distractorAnalysis": [
      "Está incorreta: Metade da força produziria apenas 25% da aceleração pretendida no corpo mais pesado.",
      "Está incorreta: Manter a mesma força geraria apenas metade da aceleração, não a mesma.",
      "Está incorreta: A força necessária é proporcional à massa (fator 2), não ao quadrado da massa (fator 4)."
    ],
    "nursingApplication": "Orienta a distribuição de tarefas na equipa: doentes com maior massa requerem assistência de dois profissionais."
  },
  {
    "id": 1337,
    "topicId": 1,
    "question": "A tolerância biológica humana ao trauma de desaceleração súbita (forças em g) depende criticamente de:",
    "options": [
      "Duplica a força média de impacto sentida pelo corpo humano, agravando severamente o risco de lesões traumáticas internas.",
      "Reduz a força média de impacto para metade (F = Δp / Δt), diminuindo significativamente a gravidade das lesões mecânicas.",
      "Mantém a força média de impacto rigorosamente inalterada, dado que a velocidade inicial do veículo antes da colisão era constante.",
      "Anula completamente a energia mecânica do choque antes de qualquer deformação dos tecidos biológicos do ocupante."
    ],
    "correctIndex": 1,
    "explanation": "Estudos biomecânicos demonstram que o corpo tolera maiores acelerações se durarem milissegundos e forem transversais ao tórax.",
    "distractorAnalysis": [
      "Está incorreta: pelo teorema do impulso (F_média = Δp / Δt), aumentar o tempo de impacto reduz a força e não a duplica.",
      "Está incorreta: a força média depende criticamente da duração do impacto; a velocidade inicial fixa apenas o momento linear inicial.",
      "Está incorreta: a energia cinética dissipa-se em trabalho de deformação mecânica ao longo do tempo, não se anulando sem transferência de energia."
    ],
    "nursingApplication": "Fundamenta o posicionamento dos bancos na célula sanitária da ambulância (de costas para a marcha para apoiar as costas)."
  },
  {
    "id": 1338,
    "topicId": 1,
    "question": "Se o tempo de deformação da viatura for aumentado de 0,1 s para 0,2 s (duplicando a duração da desaceleração), o que acontece ao valor de g suportado?",
    "options": [
      "O valor duplica para cerca de 45,4 g devido ao efeito de fadiga mecânica dos materiais de deformação.",
      "O valor permanece em 22,7 g porque a velocidade inicial da viatura era rigorosamente de 80 km/h.",
      "O valor cai para zero porque desacelerações superiores a 0,15 s são totalmente inócuas para o organismo.",
      "O valor cai para metade (cerca de 11,3 g em vez de 22,7 g), reduzindo substancialmente a severidade potencial das lesões."
    ],
    "correctIndex": 3,
    "explanation": "Como a = Δv/Δt, duplicar o denominador Δt reduz a aceleração e o número de g a metade (222 / 2 = 111 m/s² ⇒ 11,3 g).",
    "distractorAnalysis": [
      "Está incorreta: Aumentar a duração da colisão diminui a aceleração, nunca a duplica.",
      "Está incorreta: A aceleração depende do tempo gasto a parar; mesma velocidade com mais tempo gera menor aceleração.",
      "Está incorreta: 11,3 g continua a ser uma aceleração violenta e perigosa, longe de ser inócua para o organismo humano."
    ],
    "nursingApplication": "Ilustra o sucesso da tecnologia automóvel de zonas de absorção programada de impacto nos veículos de socorro."
  },
  {
    "id": 1339,
    "topicId": 1,
    "question": "A que equivale, em termos comparativos da vida prática, ser projetado com uma força de 15.540 N contra uma parede rígida?",
    "options": [
      "Ao impacto resultante de cair desamparado de um prédio de vários andares ou ter a cabeça esmagada por uma prensa industrial.",
      "A desacelerações superiores a 5 g provocadas por uma travagem brusca de emergência a 80 km/h.",
      "A colisões frontais a velocidades superiores a 15 km/h contra obstáculos rígidos sem cinto de segurança.",
      "A acelerações laterais superiores a 3 g durante manobras de evasão em estradas molhadas."
    ],
    "correctIndex": 2,
    "explanation": "15.540 N equivale ao peso de uma massa de cerca de 1585 kg (P = m·g ⇒ m = 15540 / 9,8 ≈ 1585 kg), ou seja, um automóvel médio.",
    "distractorAnalysis": [
      "Está incorreta: travagens de emergência a 80 km/h podem gerar 5-8 g mas geralmente não atingem 22,7 g; a referência do problema são colisões de alta energia, não travagens normais.",
      "Está incorreta: colisões a 15 km/h raramente geram 22,7 g; o limiar de 22,7 g corresponde a impactos de muito maior energia cinética.",
      "Está incorreta: acelerações laterais de 3 g em manobras de evasão estão muito abaixo dos 22,7 g referidos; são perigosas, mas não atingem esse nível em condições normais de tráfego."
    ],
    "nursingApplication": "Desmistifica a falsa perceção de que 'uma pessoa consegue segurar-se com as mãos' numa colisão a 80 km/h."
  },
  {
    "id": 1340,
    "topicId": 1,
    "question": "Em acidentes de viação, a fase denominada 'terceira colisão' na cinemática do trauma corresponde a:",
    "options": [
      "À colisão dos órgãos internos do corpo contra as paredes anatómicas das cavidades, por inércia, quando o corpo desacelera bruscamente.",
      "Ao arrefecimento súbito dos órgãos internos causado pela entrada de ar frio através das vias respiratórias durante o impacto.",
      "À compressão direta dos órgãos pelo músculo diafragma que contrai involuntariamente ao detetar a desaceleração brusca.",
      "Ao colapso das veias cavas por redução da pressão venosa sistémica durante a fase de aceleração negativa."
    ],
    "correctIndex": 2,
    "explanation": "1.ª colisão: veículo contra obstáculo; 2.ª colisão: ocupante contra o habitáculo/cinto; 3.ª colisão: órgãos internos contra o esqueleto.",
    "distractorAnalysis": [
      "Está incorreta: o arrefecimento súbito por ar frio não é um mecanismo de lesão interna em colisões; o ar inspirado durante impacto não tem temperatura suficientemente baixa para causar dano orgânico.",
      "Está incorreta: embora o diafragma contraia durante impactos (produzindo o 'bater de ar'), não é o mecanismo primário das lesões por desaceleração nos órgãos maciços.",
      "Está incorreta: o colapso das veias cavas por redução de pressão venosa não é o mecanismo principal de lesão em colisão; as lesões por desaceleração devem-se à inércia dos órgãos, não à variação da pressão venosa."
    ],
    "nursingApplication": "Orienta a avaliação diagnóstica de enfermagem para lesões viscerais ocultas mesmo sem ferimentos externos visíveis."
  },
  {
    "id": 1341,
    "topicId": 1,
    "question": "Um frasco de vidro de soro de 500 mL (massa total aproximada 0,6 kg com o suporte) solto a 80 km/h que colide com a face de um ocupante em 0,02 s gera uma força de:",
    "options": [
      "666 N, obtida por a = Δv/Δt = 22,2/0,02 = 1110 m/s² e depois F = m·a = 0,6 · 1110 = 666 N.",
      "333 N, calculada por F = 0,6 · (22,2 / 0,04) = 0,6 · 555 = 333 N, duplicando erroneamente o tempo de paragem.",
      "1332 N, calculada por F = 0,6 · (22,2 / 0,01) = 0,6 · 2220 = 1332 N, dividindo o tempo de paragem por dois.",
      "44,4 N, calculada por F = m · Δv = 0,6 · 22,2 / 0,6 = 22,2 N, confundindo impulso com força média."
    ],
    "correctIndex": 0,
    "explanation": "a = 22,22 / 0,02 = 1111 m/s²; F = 0,6 · 1111 ≈ 666,6 N. Uma força de mais de 600 N numa área pontual quebra ossos faciais e perfura os olhos.",
    "distractorAnalysis": [
      "Está incorreta: usar Δt = 0,04 s (dobro do correto) reduz a aceleração para metade e a força para metade; o enunciado indica Δt = 0,02 s.",
      "Está incorreta: usar Δt = 0,01 s (metade do correto) duplica a aceleração e a força; o Δt correto é 0,02 s conforme enunciado.",
      "Está incorreta: F = m·Δv sem dividir pelo tempo calcula o impulso (unidade N·s), não a força média; a força média requer divisão por Δt."
    ],
    "nursingApplication": "Demonstra que mesmo objetos aparentemente inócuos e pequenos se tornam letais quando soltos em alta velocidade."
  },
  {
    "id": 1342,
    "topicId": 1,
    "question": "Como se define fisicamente o Impulso (I) de uma força constante que atua sobre um corpo durante um intervalo de tempo Δt?",
    "options": [
      "O quociente entre a força aplicada e a aceleração média desenvolvida pelo corpo: I = F / a.",
      "O produto do vetor força pelo intervalo de tempo de atuação: I = F · Δt (medido em Newton-segundo, N·s).",
      "A soma da energia potencial com a energia cinética armazenada nos tecidos corporais: I = Ep + Ec.",
      "A derivada da temperatura em relação ao espaço tridimensional euclidiano: I = dT / dx."
    ],
    "correctIndex": 1,
    "explanation": "Por definição: I = F · Δt. Dimensionalmente, N · s = (kg·m/s²) · s = kg·m/s, que é a dimensão de quantidade de movimento.",
    "distractorAnalysis": [
      "Está incorreta: F/a é a massa inercial do corpo (m), não o impulso da força.",
      "Está incorreta: Ep + Ec é a energia mecânica total do sistema, expressa em Joules (J) e não em N·s.",
      "Está incorreta: dT/dx é um gradiente térmico espacial, sem relação com a mecânica clássica newtoniana."
    ],
    "nursingApplication": "Permite analisar colisões e variações bruscas de velocidade em contexto de transporte hospitalar."
  },
  {
    "id": 1343,
    "topicId": 1,
    "question": "Porque é que os colchões hospitalares e almofadas de posicionamento utilizam espumas viscoelásticas que se deformam lentamente sob a pressão corporal?",
    "options": [
      "Para prolongar o tempo de adaptação mecânica e aumentar a área de distribuição da força de impacto, reduzindo a pressão local sobre a pele.",
      "Para aumentar o coeficiente de atrito entre a bota e o solo, evitando que o pé escorregue durante a aterragem.",
      "Para absorver a humidade do impacto e reduzir a temperatura da articulação tibiotársica durante o esforço prolongado.",
      "Para criar uma câmara de pressão negativa que eleve o pé imediatamente após o impacto, reduzindo o tempo de contacto."
    ],
    "correctIndex": 2,
    "explanation": "A deformação viscoelástica dissipa energia e acomoda a geometria corporal, reduzindo a pressão pontual (p = F/A).",
    "distractorAnalysis": [
      "Está incorreta: embora a aderência seja importante, a principal função biomecânica do acolchoamento não é o coeficiente de atrito, mas sim a absorção de energia cinética pela deformação.",
      "Está incorreta: o acolchoamento não tem função de absorção de humidade nem de regulação térmica articular; essa função pertence a outros elementos do equipamento de proteção.",
      "Está incorreta: não existe 'câmara de pressão negativa' no acolchoamento das botas; o mecanismo protetor é a deformação do material que aumenta Δt e a área de distribuição da força."
    ],
    "nursingApplication": "Permite ao enfermeiro escolher as almofadas de suporte postural mais adequadas a cada anatomia."
  },
  {
    "id": 1344,
    "topicId": 1,
    "question": "Quando um utente cai no chão de linóleo sobre uma camada amortecedora de borracha espessa em vez de um piso de cerâmica rígida, a física da proteção consiste em:",
    "options": [
      "Prolongar a duração do impacto (Δt maior) graças à deformação do piso elástico, reduzindo assim a força média F = Δp / Δt.",
      "Eliminar completamente o momento linear do atleta durante o salto, tornando o impacto com o solo nulo.",
      "Aumentar a velocidade de aterragem para que o atleta contacte o solo com mais energia e se projete mais alto.",
      "Converter toda a energia cinética em energia potencial elástica armazenada no piso, que é depois devolvida ao atleta."
    ],
    "correctIndex": 3,
    "explanation": "F_médio = m·Δv / Δt. Aumentando o tempo de paragem através da resiliência do pavimento, a força diminui drasticamente, prevenindo fraturas de fémur.",
    "distractorAnalysis": [
      "Está incorreta: o piso elástico não elimina o momento linear; a variação de momento (Δp) depende da velocidade de impacto, que não é alterada pelo tipo de piso.",
      "Está incorreta: aumentar a velocidade de aterragem aumenta a energia cinética e as forças de impacto; o objetivo do piso elástico é reduzir as forças, não aumentar a velocidade.",
      "Está incorreta: embora alguma energia seja armazenada e devolvida, a função primária do piso de proteção é dissipar energia e prolongar o tempo de impacto, não maximizar a restituição elástica."
    ],
    "nursingApplication": "Fundamenta o investimento hospitalar em pavimentos amortecedores nas enfermarias de geriatria e psiquiatria."
  },
  {
    "id": 1345,
    "topicId": 1,
    "question": "Qual é a relação conceitual correta entre a Massa de um corpo e a sua Inércia mecânica?",
    "options": [
      "A massa e a inércia são inversamente proporcionais: quanto mais pesado o doente, mais facilmente acelera no leito.",
      "A massa é a medida quantitativa direta da inércia: corpos com maior massa oferecem maior resistência à aceleração.",
      "A massa existe apenas em corpos em repouso, enquanto a inércia manifesta-se unicamente durante a queda livre.",
      "A inércia anula a massa do doente sempre que este é transportado numa maca a velocidade perfeitamente constante."
    ],
    "correctIndex": 1,
    "explanation": "A massa inercial quantifica a resistência que um corpo oferece à mudança do seu estado de repouso ou movimento.",
    "distractorAnalysis": [
      "Está incorreta: A relação é diretamente proporcional: maior massa exige maior força resultante para produzir a mesma aceleração.",
      "Está incorreta: Massa e inércia coexistem permanentemente, quer o corpo esteja em repouso, quer em movimento.",
      "Está incorreta: A inércia não anula a massa; ela é a própria manifestação da existência da massa perante forças externas."
    ],
    "nursingApplication": "Um utente com 120 kg tem o dobro da inércia de um utente com 60 kg, exigindo o dobro da força para a mesma aceleração."
  },
  {
    "id": 1346,
    "topicId": 1,
    "question": "Qual das seguintes afirmações sintetiza com rigor a distinção física entre Massa e Peso?",
    "options": [
      "A massa é uma grandeza vetorial que aponta para baixo, enquanto o peso é um escalar que não depende da aceleração gravítica.",
      "A massa varia com a altitude e com a rotação terrestre, ao passo que o peso permanece perfeitamente invariável em todo o universo.",
      "A massa é a quantidade escalar de matéria e inércia do corpo (em kg); o peso é a força vetorial gravítica com que a Terra o atrai (em N).",
      "A massa e o peso são sinónimos perfeitos no Sistema Internacional, partilhando rigorosamente a mesma dimensão física."
    ],
    "correctIndex": 2,
    "explanation": "Massa (escalar, kg) quantifica a matéria e a inércia; Peso (vetorial, N) é a força gravítica P = m·g.",
    "distractorAnalysis": [
      "Está incorreta: A massa é escalar; o peso é que é vetorial e aponta para o centro da Terra.",
      "Está incorreta: A massa é constante; o peso é que varia com a aceleração da gravidade local g.",
      "Está incorreta: Não são sinónimos; a massa é medida em kg e o peso é uma força expressa em Newtons."
    ],
    "nursingApplication": "Distinguir massa de peso é essencial para calcular forças exercidas sobre leitos e macas a partir do registo na balança."
  },
  {
    "id": 1347,
    "topicId": 1,
    "question": "Porque é que a distinção entre massa e peso é relevante ao empurrar um utente numa cadeira de rodas num corredor horizontal plano?",
    "options": [
      "Porque a massa atua horizontalmente empurrando a cadeira para trás, enquanto o peso anula todo o atrito com o solo.",
      "Porque o peso é a única grandeza que resiste à aceleração quando o movimento se dá no plano horizontal estrito.",
      "A força muscular para acelerar a cadeira depende da massa inercial total (F = m·a), enquanto o peso atua verticalmente sobre as rodas.",
      "Porque a massa só existe durante a travagem e o peso manifesta-se unicamente durante o início da aceleração."
    ],
    "correctIndex": 2,
    "explanation": "No plano horizontal, a resistência à aceleração decorre da inércia (massa m); o peso (P = m·g) atua na vertical, gerando a normal de apoio.",
    "distractorAnalysis": [
      "Está incorreta: A massa não é uma força horizontal; ela é um escalar que dita a inércia em qualquer direção do espaço.",
      "Está incorreta: O peso é vertical e não atua diretamente na linha horizontal de aceleração, embora influencie o atrito das rodas.",
      "Está incorreta: Massa e peso atuam em simultâneo e permanentemente em todas as fases do movimento."
    ],
    "nursingApplication": "Compreender que maior massa exige maior força de empurrão horizontal previne fadiga lombar em transportes hospitalares longos."
  },
  {
    "id": 1348,
    "topicId": 1,
    "question": "Se um enfermeiro tentar travar uma cadeira de rodas em movimento aplicando uma força oposta de 100 N enquanto a inércia e o piso exercem 60 N no sentido do avanço, qual é a resultante de travagem?",
    "options": [
      "160 N no sentido do avanço, acelerando a cadeira de rodas a uma velocidade superior à inicial.",
      "0 N, mantendo a cadeira indefinidamente à mesma velocidade sem qualquer perda de energia cinética.",
      "6000 N, correspondendo a uma força de impacto destrutiva que deforma as jantes metálicas das rodas.",
      "40 N no sentido da força de travagem, provocando uma aceleração negativa (desaceleração) que faz a cadeira parar."
    ],
    "correctIndex": 3,
    "explanation": "A força de travagem supera a força propulsora: Fres = 100 - 60 = 40 N no sentido contrário ao movimento, causando desaceleração.",
    "distractorAnalysis": [
      "Está incorreta: A resultante atua no sentido da travagem (100 N) e não no sentido do avanço (60 N).",
      "Está incorreta: Com forças desiguais (100 N vs 60 N), a resultante não é nula; há desaceleração garantida.",
      "Está incorreta: Não há multiplicação das forças; o valor líquido de desaceleração é 40 N."
    ],
    "nursingApplication": "Compreender a desaceleração permite ao enfermeiro dosear a força de travagem em rampas hospitalares sem sobressaltos."
  },
  {
    "id": 1349,
    "topicId": 1,
    "question": "Como é formalmente enunciada a 1.ª Lei de Newton (Lei da Inércia) no estudo das Leis de Newton?",
    "options": [
      "A força resultante aplicada sobre um corpo é sempre diretamente proporcional à sua velocidade instantânea e inversamente proporcional ao atrito.",
      "Um corpo em repouso permanece em repouso e um corpo em movimento permanece em movimento, a menos que uma força externa atue sobre ele.",
      "A toda e qualquer ação mecânica motora corresponde sempre uma reação de igual módulo e mesma direção sobre o próprio corpo que a produz.",
      "Um corpo em movimento retilíneo acelera espontaneamente até atingir a velocidade terminal de escape fixada pela gravidade da Terra."
    ],
    "correctIndex": 1,
    "explanation": "A 1.ª Lei de Newton estabelece que a velocidade de um corpo se mantém constante (incluindo o repouso) se a resultante das forças for nula.",
    "distractorAnalysis": [
      "Está incorreta: a relação direta de proporcionalidade da força é com a aceleração (2.ª Lei) e não com a velocidade instantânea do corpo.",
      "Está incorreta: a igualdade de ação e reação sobre corpos distintos define a 3.ª Lei de Newton e não a 1.ª Lei (Lei da Inércia).",
      "Está incorreta: na ausência de forças resultantes externas, a velocidade vetorial mantém-se constante, não ocorrendo acelerações espontâneas."
    ],
    "nursingApplication": "A Lei da Inércia explica porque um doente numa maca em movimento tende a manter a marcha se a maca parar subitamente."
  },
  {
    "id": 1350,
    "topicId": 1,
    "question": "Qual é a grandeza física escalar fundamental que serve de medida quantitativa da Inércia de um corpo?",
    "options": [
      "A temperatura axilar média, expressa clinicamente em graus Celsius (°C).",
      "O volume plasmático circulante, medido em mililitros por quilograma de peso corporal.",
      "O coeficiente de atrito estático, que é uma grandeza adimensional da superfície de contacto.",
      "A massa inercial (m), medida no Sistema Internacional em quilogramas (kg)."
    ],
    "correctIndex": 3,
    "explanation": "A massa é a medida direta da inércia: quanto maior a massa de um utente ou equipamento, maior a sua resistência a alterações de velocidade.",
    "distractorAnalysis": [
      "Está incorreta: A temperatura mede o grau de agitação térmica molecular, não a inércia mecânica de translação.",
      "Está incorreta: O volume plasmático é uma variável biológica hemodinâmica, não a medida da inércia global do corpo.",
      "Está incorreta: O coeficiente de atrito mede a rugosidade entre superfícies, não a quantidade de matéria inercial."
    ],
    "nursingApplication": "Um utente bariátrico de 130 kg possui maior inércia do que um utente de 65 kg, exigindo maiores forças para travar ou acelerar."
  },
  {
    "id": 1351,
    "topicId": 1,
    "question": "Se um doente idoso sofrer uma paragem súbita dos pés por tropeçamento num obstáculo no chão, o que acontece ao seu tronco pela 1.ª Lei de Newton?",
    "options": [
      "O tronco continua a deslocar-se para a frente à velocidade que trazia por inércia, originando um desequilíbrio anterior e queda.",
      "O tronco recua imediatamente para trás devido à força elástica acumulada na coluna vertebral durante a desaceleração dos pés.",
      "O tronco para instantaneamente em sincronia com os pés, mantendo o alinhamento postural vertical sem qualquer risco de queda.",
      "O centro de massa do tronco eleva-se verticalmente vários centímetros devido à conversão direta de energia cinética em trabalho."
    ],
    "correctIndex": 0,
    "explanation": "Os pés são travados pela força externa do obstáculo, mas o tronco superior, não sujeito a essa força, continua em movimento por inércia.",
    "distractorAnalysis": [
      "Está incorreta: o obstáculo trava apenas a base de suporte (pés); o tronco não recua, é projetado para a frente pela sua inércia de movimento.",
      "Está incorreta: a 1.ª Lei de Newton impede a paragem instantânea do tronco sem aplicação de uma força de retenção sobre o segmento superior.",
      "Está incorreta: a elevação do centro de massa não ocorre espontaneamente; a rotação sobre o ponto de tropeço gera um tombo anterior em arco."
    ],
    "nursingApplication": "A remoção de cabos e tapetes soltos no corredor hospitalar elimina obstáculos que provocam quedas por inércia."
  },
  {
    "id": 1352,
    "topicId": 1,
    "question": "Quando um enfermeiro transporta uma cadeira de rodas e para subitamente, que comportamento é esperado do corpo do doente se não estiver seguro?",
    "options": [
      "O corpo do doente desloca-se ligeiramente para trás contra o encosto da cadeira devido à perda repentina de atrito no assento.",
      "O corpo do doente tende a projetar-se para a frente por inércia, mantendo a velocidade anterior e arriscando cair da cadeira.",
      "O corpo do doente inclina-se lateralmente para o lado da mão dominante devido à assimetria fisiológica do tónus muscular postural.",
      "O corpo do doente permanece rigidamente colado ao assento sem qualquer tendência de deslocamento relativo em relação à cadeira."
    ],
    "correctIndex": 1,
    "explanation": "Por inércia, o corpo mantém o estado de movimento que possuía; ao travar a cadeira, o utente desliza para a frente se não estiver fixado.",
    "distractorAnalysis": [
      "Está incorreta: o recuo contra o encosto ocorreria numa aceleração súbita para a frente (arranque), não numa travagem ou paragem brusca.",
      "Está incorreta: a projeção lateral ocorre em curvas e viragens rápidas, enquanto a desaceleração frontal projeta a massa estritamente para a frente.",
      "Está incorreta: sem cinto de contenção, o atrito do assento é insuficiente para desacelerar o tronco à mesma taxa das rodas travadas."
    ],
    "nursingApplication": "O uso de cinto pélvico e a colocação dos pés nos respetivos apoios da cadeira de rodas evitam ejeções anteriores em travagens."
  },
  {
    "id": 1353,
    "topicId": 1,
    "question": "De acordo com a 1.ª Lei de Newton, ter forças aplicadas sobre um corpo impede que ele esteja em equilíbrio estático?",
    "options": [
      "Sim, porque qualquer presença de força externa obriga necessariamente o corpo a acelerar a alta velocidade.",
      "Não, desde que a soma vetorial de todas as forças seja rigorosamente nula (∑F = 0), conforme a 1.ª condição de equilíbrio.",
      "Sim, pois os corpos em repouso perdem a capacidade física de interagir mecanicamente com as superfícies de apoio.",
      "Não, mas apenas se todas as forças aplicadas tiverem intensidades rigorosamente inferiores a 0,001 Newtons."
    ],
    "correctIndex": 1,
    "explanation": "Sublinha-se na física clássica: 'Um corpo em equilíbrio pode ter forças a atuar sobre ele; a força resultante é que é nula!'.",
    "distractorAnalysis": [
      "Está incorreta: Forças podem existir em grande número (ex: peso, suporte, tensões) e equilibrar-se perfeitamente sem gerar aceleração.",
      "Está incorreta: Corpos em repouso interagem continuamente com o meio através de forças normais e de atrito.",
      "Está incorreta: Forças de centenas ou milhares de Newtons equilibram-se perfeitamente (ex: doente de 100 kg suportado pela cama)."
    ],
    "nursingApplication": "Mostra ao enfermeiro que o repouso do utente resulta de um balanço vetorial perfeito entre forças opostas."
  },
  {
    "id": 1354,
    "topicId": 1,
    "question": "Como é que a 1.ª Lei de Newton explica que os passageiros de um veículo se sintam 'empurrados contra a porta' durante uma curva apertada para a esquerda?",
    "options": [
      "Existe uma força centrífuga real invisível gerada pelo núcleo da Terra que atrai os corpos para o lado de fora da curva.",
      "A porta do veículo adquire propriedades magnéticas repulsivas que atraem o tecido muscular dos ocupantes.",
      "A gravidade inclina-se para a horizontal a 90° sempre que o volante do veículo sofre uma rotação superior a 15 graus.",
      "O corpo tende por inércia a continuar em linha reta para a frente; a porta do veículo vira para a esquerda e choca contra o passageiro."
    ],
    "correctIndex": 3,
    "explanation": "O corpo mantém a trajetória retilínea original por inércia; é o veículo que curva para o lado, intersetando a trajetória do corpo.",
    "distractorAnalysis": [
      "Está incorreta: A 'força centrífuga' é uma força inercial aparente percecionada pelo observador dentro do referencial acelerado não inercial.",
      "Está incorreta: A porta é feita de metal/chapa comum e não adquire magnetismo biológico seletivo.",
      "Está incorreta: A aceleração gravítica local mantém-se vertical para baixo, não se inclinando com a rotação do volante."
    ],
    "nursingApplication": "Nas curvas rápidas com a ambulância, os doentes deitados na maca necessitam de contenções laterais para não rolarem por inércia."
  },
  {
    "id": 1355,
    "topicId": 1,
    "question": "Para fazer parar o corpo do enfermeiro que viaja a 80 km/h, o que é obrigatoriamente necessário de acordo com a 1.ª Lei de Newton?",
    "options": [
      "A atuação de uma força externa resultante que exerça uma desaceleração sobre o seu corpo (ex: cinto de segurança ou anteparo).",
      "A diminuição voluntária da frequência cardíaca através de técnicas de respiração diafragmática profunda.",
      "O relaxamento passivo de todas as fibras musculares esqueléticas dos membros inferiores e do tronco.",
      "A leitura silenciosa de um protocolo de emergência hospitalar durante a marcha do veículo no trânsito."
    ],
    "correctIndex": 0,
    "explanation": "A 1.ª Lei estabelece: 'a menos que uma força externa atue sobre ele'. Sem força externa, o estado de movimento não se altera.",
    "distractorAnalysis": [
      "Está incorreta: A frequência cardíaca regula o débito circulatório, mas não gera forças mecânicas externas para travar a inércia do corpo.",
      "Está incorreta: O relaxamento muscular sem apoio externo faria o corpo cair ou colidir sem qualquer proteção mecânica.",
      "Está incorreta: Leituras teóricas não interagem fisicamente com a inércia mecânica da massa corporal em movimento."
    ],
    "nursingApplication": "A força externa exercida pelo cinto de segurança dissipa a velocidade de forma progressiva e controlada."
  },
  {
    "id": 1356,
    "topicId": 1,
    "question": "Durante o transporte de uma maca no corredor do hospital, o enfermeiro empurra com os pés do doente voltados para a frente. Numa travagem rápida, para onde se desloca o doente por inércia?",
    "options": [
      "Desloca-se para trás, comprimindo o crânio contra a cabeceira da maca com risco de traumatismo cervical grave.",
      "Desloca-se lateralmente contra as grades de proteção devido ao efeito do atrito cinético com o colchão do leito.",
      "Permanece rigorosamente imóvel em relação à maca, anulando a energia cinética através do tónus muscular basal.",
      "Desloca-se para a frente, pressionando os pés contra o painel terminal da maca, que atua como barreira natural de retenção."
    ],
    "correctIndex": 3,
    "explanation": "Pela 1.ª Lei de Newton, o corpo continua o movimento para a frente no sentido da marcha; ter os pés para a frente protege o crânio.",
    "distractorAnalysis": [
      "Está incorreta: na travagem com os pés voltados para a frente o corpo tende a avançar no sentido original do movimento, ou seja, na direção dos pés.",
      "Está incorreta: a desaceleração longitudinal produz deslocamento inercial puramente para a frente e não lateral a menos que haja curva associada.",
      "Está incorreta: o doente deitado e relaxado não tem sustentação muscular rígida suficiente para impedir o deslizamento inercial."
    ],
    "nursingApplication": "Transportar o doente com os pés para a frente é a norma de segurança para proteger a cabeça e manter o contacto visual."
  },
  {
    "id": 1357,
    "topicId": 1,
    "question": "Qual é a velocidade com que o corpo de um doente desliza sobre o colchão se a maca a 2 m/s parar instantaneamente contra uma parede?",
    "options": [
      "Para instantaneamente a 0 m/s no mesmo milissegundo em que a maca atinge o obstáculo rígido.",
      "Inicia o deslizamento a 2 m/s em relação à maca, mantendo a velocidade original por inércia até o atrito ou anteparo o travar.",
      "Adquire uma velocidade de 20 m/s devido à amplificação gravitacional induzida pelo impacto frontal.",
      "Recua para trás a 2 m/s na direção oposta ao movimento prévio por efeito de ricochete elástico puro."
    ],
    "correctIndex": 1,
    "explanation": "Pela 1.ª Lei de Newton, na ausência de forças prévias de retenção, o corpo mantém a sua velocidade inercial de 2 m/s.",
    "distractorAnalysis": [
      "Está incorreta: Para parar a 0 m/s no mesmo instante que a maca seria necessária uma fixação rígida com cintos de retenção esticados.",
      "Está incorreta: A velocidade não é amplificada dez vezes; a velocidade máxima inercial é a velocidade que o corpo já possuía.",
      "Está incorreta: O corpo avança no sentido do movimento; o recuo só ocorreria após embate elástico com o painel dianteiro."
    ],
    "nursingApplication": "Mostra porque mesmo a velocidades baixas (caminhada a 2 m/s ≈ 7,2 km/h) a inércia provoca deslizamentos perigosos no leito."
  },
  {
    "id": 1358,
    "topicId": 1,
    "question": "Se um doente for transportado numa maca em curva apertada para a direita sem grades laterais levantadas, o que dita a 1.ª Lei de Newton?",
    "options": [
      "O corpo tende a tombar para o lado direito da curva, acompanhando a inclinação angular dos rodízios da maca hospitalar.",
      "O corpo tende a prosseguir em linha reta, deslizando para o bordo esquerdo da maca com elevado risco de queda e traumatismo.",
      "O corpo sofre uma compressão vertical axial intensa contra o colchão provocada pelo aumento transitório da gravidade.",
      "O corpo trava instantaneamente o seu movimento de translação linear, bloqueando as rodas traseiras da maca médica."
    ],
    "correctIndex": 1,
    "explanation": "A maca vira para a direita; o corpo, por inércia, quer continuar em linha reta, pelo que se projeta em relação à maca para o lado esquerdo.",
    "distractorAnalysis": [
      "Está incorreta: ao virar para a direita, a inércia projeta o corpo para o lado exterior (esquerdo) da trajetória curvilínea.",
      "Está incorreta: a aceleração da gravidade mantém-se rigorosamente g ≈ 9,8 m/s² e a inércia em curva atua no plano horizontal.",
      "Está incorreta: o movimento do doente não trava os rodízios da maca; o risco imediato é a perda de apoio e queda lateral."
    ],
    "nursingApplication": "As grades laterais impedem a queda lateral por inércia nas mudanças de direção em corredores hospitalares."
  },
  {
    "id": 1359,
    "topicId": 1,
    "question": "Numa paragem de emergência do elevador durante a descida rápida, que força atua sobre o suporte e frasco de soro fixado na maca?",
    "options": [
      "Uma força magnética que atrai o líquido salino para o teto da cabine através de repulsão eletrostática.",
      "Uma força de tração nula, dado que os suportes de soro hospitalares são imunes a acelerações mecânicas.",
      "Uma força lateral que faz o frasco de vidro rodar permanentemente em torno do eixo coronal do doente.",
      "Uma força vertical para cima de compressão sobre o engate do mastro, acompanhada de oscilação do líquido por inércia."
    ],
    "correctIndex": 3,
    "explanation": "A travagem súbita na descida desacelera o mastro; o frasco e o líquido tendem a manter o movimento para baixo por inércia, sobrecarregando o engate.",
    "distractorAnalysis": [
      "Está incorreta: A água salina não possui propriedades ferromagnéticas repulsivas para ser atraída pelo teto.",
      "Está incorreta: O suporte sofre solicitações mecânicas reais de compressão e flexão durante travagens bruscas de elevadores.",
      "Está incorreta: A solicitação principal é vertical no sentido da desaceleração inercial."
    ],
    "nursingApplication": "Os mastros de soro devem estar firmemente aparafusados à estrutura da maca para não cederem em travagens bruscas de elevadores."
  },
  {
    "id": 1360,
    "topicId": 1,
    "question": "Durante o transporte de uma maca a correr no corredor, se a maca travar bruscamente, o que acontece ao frasco de soro suspenso no mastro?",
    "options": [
      "O líquido de perfusão interrompe o fluxo por contração osmótica imediata do tubo flexível de policloreto de vinilo da perfusão.",
      "O frasco de soro inclina-se para a retaguarda da maca devido à resistência aerodinâmica exercida pelo ar ambiente na enfermaria.",
      "O frasco de soro e o líquido no seu interior oscilam violentamente para a frente por inércia, tracionando a tubuladura intravenosa.",
      "O menisco do líquido estabiliza-se num ângulo de quarenta e cinco graus sem qualquer oscilação dinâmica pendular associada."
    ],
    "correctIndex": 2,
    "explanation": "Pela 1.ª Lei de Newton, o frasco e a coluna de líquido mantêm o movimento para a frente, balançando no mastro e arriscando arrancar o cateter.",
    "distractorAnalysis": [
      "Está incorreta: os fenómenos inerciais são mecânicos e não alteram as propriedades osmóticas ou o diâmetro das tubuladuras intravenosas.",
      "Está incorreta: numa travagem, a inércia projeta a massa suspensa para a frente (no sentido da marcha prévia) e não para a retaguarda.",
      "Está incorreta: a desaceleração brusca de um sistema suspenso suscita um movimento pendular oscilatório clássico com amplitude dependente da travagem."
    ],
    "nursingApplication": "Fixar o frasco de soro com estabilizador e segurar a linha de perfusão previne a tração acidental do cateter venoso periférico."
  },
  {
    "id": 1361,
    "topicId": 1,
    "question": "Num utente submetido a cirurgia abdominal recente, porque é que as travagens e arranques bruscos da maca provocam dor incisional aguda?",
    "options": [
      "Porque a inércia faz o sangue arterial libertar cristais de gelo que perfuram o peritóneo parietal inflamado.",
      "Porque as acelerações mecânicas anulam a eficácia farmacológica dos analgésicos opioides no sistema nervoso central.",
      "Porque as suturas cirúrgicas absorvem calor inercial que eleva a temperatura da ferida operatória a 60 graus Celsius.",
      "Porque as vísceras abdominais e a parede cirúrgica sofrem forças inerciais (F = m·a) que tracionam as linhas de sutura e tecidos inflamados."
    ],
    "correctIndex": 3,
    "explanation": "Os órgãos internos têm massa considerável; acelerações bruscas fazem-nos deslocar-se relativamente à parede abdominal por inércia, tracionando as suturas.",
    "distractorAnalysis": [
      "Está incorreta: O sangue não congela com movimentos de maca; a dor decorre da estimulação mecânica dos nociceptores peritoneais.",
      "Está incorreta: A farmacodinâmica dos analgésicos permanece ativa nos recetores opioides, mas estímulos nociceptivos mecânicos intensos superam a analgesia.",
      "Está incorreta: Suturas cirúrgicas não atingem 60 °C; a dor é puramente mecânica de estiramento inercial dos tecidos lesados."
    ],
    "nursingApplication": "A condução suave e cuidadosa da maca é um cuidado de enfermagem essencial para o controlo da dor aguda pós-operatória."
  },
  {
    "id": 1362,
    "topicId": 1,
    "question": "Num doente com drenagem torácica sob selo de água em transporte de emergência, qual é a precaução inercial essencial com o dreno?",
    "options": [
      "Elevar o frasco de selo de água 50 centímetros acima da cabeça do doente para que a inércia acelere a saída de ar pleural.",
      "Agitar o frasco de drenagem vigorosamente em círculos para que a força centrífuga esterilize a secreção drenada.",
      "Desconectar a tubuladura torácica e deixar o dreno aberto ao ar para que as variações inerciais não afetem o pulmão.",
      "Manter o frasco de drenagem sempre abaixo do nível do tórax e firmemente vertical, para que as oscilações inerciais do líquido não quebrem o selo de água."
    ],
    "correctIndex": 3,
    "explanation": "Se o frasco tombar ou oscilar por inércia acima do tórax, o líquido do selo de água pode refluir para a cavidade pleural, causando pneumotórax ou infeção.",
    "distractorAnalysis": [
      "Está incorreta: Elevar o frasco acima do tórax é um erro gravíssimo que provoca refluxo imediato de líquido para a cavidade pleural!",
      "Está incorreta: Agitar o frasco de selo de água compromete a vedação estéril e pode provocar refluxo séptico.",
      "Está incorreta: Desconectar o dreno ao ar livre causa colapso pulmonar imediato por entrada de ar atmosférico na pleura (pneumotórax aberto)."
    ],
    "nursingApplication": "O transporte seguro de sistemas de drenagem torácica exige suportes fixos que mantenham o frasco vertical e abaixo do leito."
  },
  {
    "id": 1363,
    "topicId": 1,
    "question": "Porque é que as gavetas do carrinho de paragem devem ter trincos de segurança ou selo inviolável durante a deslocação?",
    "options": [
      "Para impedir que o oxigénio do ar ambiente degrade as ampolas de vidro de sulfato de magnésio a 20%.",
      "Para que a inércia dos materiais nas acelerações e travagens não abra as gavetas, desequilibrando o carrinho e projetando fármacos.",
      "Para manter os fármacos a uma temperatura de temperaturas extremamente baixas através de isolamento criogénico passivo.",
      "Para permitir que o carrinho de emergência funcione como uma câmara hiperbárica móvel selada."
    ],
    "correctIndex": 1,
    "explanation": "Numa travagem rápida, o conteúdo das gavetas tende a continuar em movimento por inércia, empurrando as gavetas para fora.",
    "distractorAnalysis": [
      "Está incorreta: O selo plástico visa segurança mecânica e conferência de validade, não estanquidade contra o oxigénio atmosférico.",
      "Está incorreta: Carrinhos de paragem não são criogénicos; armazenam medicamentos em temperatura ambiente controlada (15-25 °C).",
      "Está incorreta: Um carrinho hospitalar comum de gavetas não possui estrutura de vaso de pressão para oxigenoterapia hiperbárica."
    ],
    "nursingApplication": "O selo intacto garante à equipa que o carrinho está completo e que as gavetas não se abrirão durante a corrida de emergência."
  },
  {
    "id": 1364,
    "topicId": 1,
    "question": "Em manobras que envolvam vencer a inércia de doentes pesados no leito, qual é a indicação prioritária de saúde ocupacional?",
    "options": [
      "Solicitar a colaboração de colegas ou utilizar dispositivos mecânicos de transferência (telas deslizantes, elevadores de doentes).",
      "Realizar a tração sozinho com movimentos rápidos e balísticos para aproveitar a energia elástica dos discos intervertebrais lombares.",
      "Aumentar a altura da cama hospitalar acima do nível dos ombros para aplicar toda a força muscular exclusivamente na direção descendente.",
      "Manter os joelhos completamente estendidos e fletir a coluna vertebral num ângulo de noventa graus para puxar o utente no plano sagital."
    ],
    "correctIndex": 0,
    "explanation": "Dividir o esforço em equipa ou usar meios mecânicos reduz a força individual requerida para valores compatíveis com a saúde lombar.",
    "distractorAnalysis": [
      "Está incorreta: movimentos balísticos rápidos aumentam a aceleração (F = m·a), elevando exponencialmente a carga de pico na coluna do cuidador.",
      "Está incorreta: puxar com a cama demasiado alta força a abdução dos ombros e sobrecarrega a coluna cervical e musculatura escapular.",
      "Está incorreta: fletir o tronco com pernas retas gera um braço de alavanca longo para o peso do tronco, sobrecarregando perigosamente os discos L5-S1."
    ],
    "nursingApplication": "A cultura de pedir ajuda e recorrer a tecnologia assistiva de mobilização é um indicador de excelência e segurança clínica."
  },
  {
    "id": 1365,
    "topicId": 1,
    "question": "Qual é a mensagem-chave da 1.ª Lei de Newton que todo o enfermeiro deve reter para a sua segurança pessoal e dos doentes?",
    "options": [
      "Os corpos materiais mantêm o seu movimento indefinidamente sem necessidade de qualquer contacto muscular desde que a superfície seja rugosa.",
      "A matéria resiste à alteração da velocidade; qualquer travagem, curva ou arranque rápido gera forças inerciais que devem ser prevenidas com contenção e suavidade.",
      "A aceleração de um corpo em repouso é sempre diretamente proporcional à sua densidade volumétrica e independente das forças aplicadas.",
      "A inércia manifesta-se unicamente durante a aceleração positiva de um veículo, deixando de atuar durante desacelerações e travagens de socorro."
    ],
    "correctIndex": 1,
    "explanation": "A 1.ª Lei resume a inércia: massas em movimento mantêm o movimento; desacelerações súbitas exigem forças de retenção controladas.",
    "distractorAnalysis": [
      "Está incorreta: uma superfície rugosa gera forças de atrito dinâmico que dissipam a energia mecânica e imobilizam rapidamente o corpo em movimento.",
      "Está incorreta: a 2.ª Lei de Newton estabelece que a aceleração depende da força resultante e da massa (a = F/m), e não da densidade per se.",
      "Está incorreta: a inércia resiste a qualquer alteração de velocidade, manifestando-se tanto na aceleração como na desaceleração (travagem) e mudanças de direção."
    ],
    "nursingApplication": "Esta mensagem biofísica fundamental fundamenta a cultura de segurança e prevenção de lesões na prática clínica diária."
  },
  {
    "id": 1366,
    "topicId": 1,
    "question": "Ao transpor um pequeno degrau ou desnível de soleira de porta com uma cadeira de rodas, porque é que o enfermeiro deve inclinar ligeiramente a cadeira para trás sobre as rodas grandes traseiras?",
    "options": [
      "Porque levantar as rodas dianteiras diminui a massa total do conjunto doente-cadeira em mais de cinquenta por cento.",
      "Porque as rodas grandes traseiras possuem menor coeficiente de atrito com a soleira do que as rodas dianteiras de borracha.",
      "Para permitir que o centro de gravidade suba verticalmente acima do nível dos ombros do utente para vencer o obstáculo.",
      "Porque os rodízios dianteiros chocariam no degrau, provocando uma desaceleração brusca e tombamento frontal do utente."
    ],
    "correctIndex": 3,
    "explanation": "Rodízios dianteiros têm diâmetro reduzido; bater no degrau equivale a uma colisão rígida que projeta o utente pela 1.ª Lei.",
    "distractorAnalysis": [
      "Está incorreta: inclinar a cadeira redistribui a carga entre as rodas, mas a massa corporal total e o peso mantêm-se exatamente iguais.",
      "Está incorreta: a vantagem mecânica reside no maior diâmetro das rodas traseiras, que transpõem desníveis com menor ângulo de ataque.",
      "Está incorreta: o centro de gravidade deve manter-se estável e contido dentro do polígono de suporte para evitar capotamento posterior."
    ],
    "nursingApplication": "Instrui a técnica correta de condução e superação de desníveis arquitetónicos em contexto assistencial."
  },
  {
    "id": 1367,
    "topicId": 1,
    "question": "O que acontece quando as rodas de um suporte de soro alto colidem subitamente contra o batente de uma porta enquanto o doente continua a caminhar para a frente puxando o mastro?",
    "options": [
      "O mastro desacelera uniformemente sem qualquer oscilação devido ao amortecimento hidráulico interno das cinco rodas.",
      "O topo do mastro (com bombas e soros) continua a mover-se para a frente por inércia, gerando um momento que faz o suporte tombar.",
      "O suporte inverte a sua rotação e recua três metros no corredor devido à conservação do momento angular na soleira.",
      "O peso dos frascos de soro desce instantaneamente para o solo, impedindo qualquer efeito de rotação sobre os rodízios travados."
    ],
    "correctIndex": 1,
    "explanation": "A desaceleração das rodas no obstáculo e a inércia dos frascos elevados criam um binário mecânico desestabilizador que projeta o suporte contra o doente ou o chão.",
    "distractorAnalysis": [
      "Está incorreta: a base trava bruscamente na soleira mas as massas no topo continuam a mover-se por inércia (1.ª Lei), tombando o mastro para a frente.",
      "Está incorreta: os suportes hospitalares não possuem recuo retrógrado autónomo; o impacto gera um binário de capotamento sagital frontal.",
      "Está incorreta: os pesos continuam suspensos no topo do mastro com o seu braço de alavanca longo a atuar sobre o ponto de rotação no solo."
    ],
    "nursingApplication": "Alerta para a necessidade de ensinar o doente a conduzir o suporte segurando na haste central e abrandando em soleiras."
  },
  {
    "id": 1368,
    "topicId": 1,
    "question": "Qual é a razão biomecânica para sincronizar o movimento de transferência contando '1, 2, 3... e vamos' em voz alta com o doente e com o colega de equipa?",
    "options": [
      "Serve unicamente para elevar a frequência respiratória de todos os intervenientes, aumentando o consumo de oxigénio pelas mitocôndrias dos músculos paravertebrais dos enfermeiros.",
      "Tem como finalidade verificar o nível de consciência e orientação no tempo do utente, dispensando a necessidade de alinhamento postural da coluna vertebral durante a tração.",
      "Garante que a força de atrito entre o lençol e o colchão se transforme numa força eletromotriz de deslizamento espontâneo no instante exato da contagem do número três.",
      "Garante a coordenação temporal exata das forças mecânicas (∑F), combinando os picos de aceleração de todos os intervenientes e evitando sobrecargas assimétricas inesperadas sobre um único profissional."
    ],
    "correctIndex": 3,
    "explanation": "A sincronização motora aproveita o impulso conjunto (I = F · Δt), permitindo que um movimento suave e contínuo vença a inércia do doente sem solavancos lesivos.",
    "distractorAnalysis": [
      "Está incorreta: o objetivo da contagem não é alterar parâmetros metabólicos ou respiratórios, mas coordenar a mecânica vetorial de tração.",
      "Está incorreta: a contagem é um recurso ergonómico de sincronização física e não substitui os testes clínicos formais de avaliação neurológica.",
      "Está incorreta: o atrito entre materiais sólidos é puramente resistivo e mecânico, não gerando forças eletromotrizes de propulsão."
    ],
    "nursingApplication": "Impacto físico e cinemático da sincronização verbal nas transferências em equipa."
  },
  {
    "id": 1369,
    "topicId": 1,
    "question": "Dimensionalmente, a unidade Newton (N) no Sistema Internacional de Unidades é equivalente a:",
    "options": [
      "kg·m²/s, representando a quantidade de movimento angular armazenada numa articulação trocoide.",
      "kg/m·s², que traduz a resistência viscosa oferecida pelo sangue no leito venoso periférico.",
      "m/s², sendo dimensionalmente idêntica à grandeza cinemática de aceleração gravitacional pura.",
      "kg·m/s², expressando o produto entre uma unidade de massa (kg) e uma unidade de aceleração (m/s²)."
    ],
    "correctIndex": 3,
    "explanation": "Pela 2.ª Lei de Newton (F = m·a), a unidade de força é o produto da massa pela aceleração: [F] = kg × m/s² = N.",
    "distractorAnalysis": [
      "Está incorreta: kg·m²/s é a unidade dimensional do momento angular mecânico na física rotacional.",
      "Está incorreta: kg/(m·s²) é a unidade de pressão e tensão mecânica (Pascal: N/m² = kg/(m·s²)).",
      "Está incorreta: m/s² é a unidade de aceleração linear, faltando o fator de massa inercial (kg) para constituir força."
    ],
    "nursingApplication": "A análise dimensional assegura que as fórmulas biomecânicas utilizadas em enfermagem estão corretas antes do cálculo clínico."
  },
  {
    "id": 1370,
    "topicId": 1,
    "question": "Que força resultante é necessária para acelerar uma maca de transporte com 80 kg de massa à taxa de 0,5 m/s²?",
    "options": [
      "160 N, que decorre da divisão da massa do sistema pela taxa de aceleração pretendida no piso.",
      "80,5 N, calculada pela adição aritmética simples da massa com o valor escalar da aceleração.",
      "40 N, obtida através do produto da massa inercial total pela aceleração desejada (F = 80 × 0,5).",
      "79,5 N, resultante da subtração da aceleração ao valor numérico da massa transportada."
    ],
    "correctIndex": 2,
    "explanation": "Aplicando F = m·a: F = 80 kg × 0,5 m/s² = 40 N de força resultante na direção do movimento.",
    "distractorAnalysis": [
      "Está incorreta: Dividir 80 por 0,5 daria 160, mas a fórmula de Newton exige o produto m·a e não a razão.",
      "Está incorreta: Somar massa e aceleração é dimensionalmente inválido na física (não se somam kg com m/s²).",
      "Está incorreta: Subtrair aceleração a massa também viola os princípios básicos da análise dimensional."
    ],
    "nursingApplication": "Calcula o esforço muscular que o enfermeiro necessita de aplicar nos membros superiores para acelerar o transporte."
  },
  {
    "id": 1371,
    "topicId": 1,
    "question": "Um utente bariátrico com 120 kg de massa corporal está posicionado no centro do leito articulado. Que força peso exerce sobre a cama?",
    "options": [
      "12,24 N, obtida pela divisão incorreta da massa corporal pela aceleração gravítica local.",
      "120 N, confundindo a unidade de massa em quilogramas com a unidade de força em Newtons.",
      "11760 N, que equivaleria ao peso gravítico de um automóvel ligeiro de passageiros deitado na cama.",
      "1176 N, calculada diretamente através da expressão P = m·g = 120 kg × 9,8 m/s²."
    ],
    "correctIndex": 3,
    "explanation": "P = 120 kg × 9,8 m/s² = 1176 N na vertical de cima para baixo sobre o estrado da cama hospitalar.",
    "distractorAnalysis": [
      "Está incorreta: A divisão 120 / 9,8 = 12,24 comete um erro de fórmula primário na física newtoniana.",
      "Está incorreta: O quilograma mede massa (inércia); o peso é uma força expressa obrigatoriamente em Newtons.",
      "Está incorreta: 11760 N seria o peso de uma viatura de 1200 kg, e não de um utente de 120 kg."
    ],
    "nursingApplication": "Exige camas bariátricas reforçadas com motores elétricos de elevação capazes de suportar cargas superiores a 2500 N."
  },
  {
    "id": 1372,
    "topicId": 1,
    "question": "Para um doente bariátrico com 140 kg de massa corporal, qual é a força gravítica que atua sobre o seu corpo (g = 9,8 m/s²)?",
    "options": [
      "1372 N, resultante da multiplicação da sua elevada massa corporal pela aceleração gravítica (140 × 9,8).",
      "14,29 N, calculada pela divisão da massa inercial corporal pela aceleração gravitacional terrestre.",
      "140 N, admitindo erradamente que a unidade Newton equivale diretamente ao quilograma no leito.",
      "13720 N, calculada através de uma multiplicação acidental por uma aceleração cem vezes superior."
    ],
    "correctIndex": 0,
    "explanation": "P = m·g = 140 kg × 9,8 m/s² = 1372 N.",
    "distractorAnalysis": [
      "Está incorreta: Dividir 140 por 9,8 dá 14,29, uma operação sem qualquer base física para o cálculo de forças peso.",
      "Está incorreta: 140 kg é a massa; o peso é uma força gravítica de 1372 N.",
      "Está incorreta: 13720 N resultaria de multiplicar por 98 m/s², uma aceleração dez vezes superior à gravidade na Terra."
    ],
    "nursingApplication": "A transferência deste doente exige obrigatoriamente o recurso a elevadores mecânicos de transferência (gruas) ou equipa reforçada."
  },
  {
    "id": 1373,
    "topicId": 1,
    "question": "Porque é que é significativamente mais fácil empurrar um carrinho de pensos vazio do que um carrinho de emergência completamente carregado?",
    "options": [
      "Porque o carrinho vazio está livre da ação da gravidade terrestre, flutuando ligeiramente sobre o pavimento.",
      "Porque os materiais estéreis do carrinho de pensos possuem propriedades magnéticas de autopropulsão.",
      "Porque o carrinho de emergência acumula calor que deforma permanentemente as rodas contra o chão.",
      "Porque o carrinho vazio tem muito menor massa inercial, oferecendo menor resistência física a qualquer aceleração imposta."
    ],
    "correctIndex": 3,
    "explanation": "Menor massa significa menor inércia (F = m·a): para a mesma aceleração, o carrinho leve exige muito menor força muscular.",
    "distractorAnalysis": [
      "Está incorreta: A gravidade atua sobre todos os corpos com massa; o carrinho vazio tem peso real proporcional à sua massa.",
      "Está incorreta: Pensos e compressas estéreis não possuem magnetismo propulsor.",
      "Está incorreta: O carrinho de emergência é mais pesado devido aos equipamentos (desfibrilhador, fármacos, oxigénio), e não por calor."
    ],
    "nursingApplication": "O transporte de carros pesados de emergência exige duas mãos firmes e calçado estável para controlar a inércia em curvas."
  },
  {
    "id": 1374,
    "topicId": 1,
    "question": "Qual é a razão pela qual as manobras de arranque e paragem de transportes hospitalares devem ser sempre progressivas e suaves?",
    "options": [
      "Para permitir que a temperatura do ar ambiente se equilibre com a temperatura retal do doente transportado.",
      "Para evitar que as leis da mecânica newtoniana sejam ativadas durante a permanência no serviço de internamento.",
      "Para minimizar as forças inerciais que atuam sobre o doente e sobre os equipamentos clínicos suportados na maca.",
      "Para reduzir a massa atómica do utente antes da realização de exames imagiológicos complementares."
    ],
    "correctIndex": 2,
    "explanation": "Arranques e paragens suaves minimizam as taxas de aceleração (a = Δv/Δt), reduzindo as forças inerciais F = m·a sobre o utente.",
    "distractorAnalysis": [
      "Está incorreta: A suavidade do transporte visa a estabilidade biomecânica e conforto, não o equilíbrio térmico retal.",
      "Está incorreta: As leis de Newton atuam independentemente da vontade humana em qualquer meio físico.",
      "Está incorreta: A massa atómica é uma constante química invariável com a velocidade de condução da maca."
    ],
    "nursingApplication": "Transportes suaves previnem náuseas, dores incisionais e deslocamentos acidentais de cateteres e drenos no pós-operatório."
  },
  {
    "id": 1375,
    "topicId": 1,
    "question": "Uma bomba infusora de 2 kg está fixada a um suporte vertical de soro que se desloca em linha reta a 0,8 m/s constante. Qual é a força resultante na bomba?",
    "options": [
      "1,6 N para a frente, calculada pelo produto da massa inercial pela velocidade instantânea de avanço no corredor.",
      "19,6 N para baixo, que corresponde exclusivamente ao peso gravítico da bomba desprovido de qualquer reação do suporte.",
      "0 N, pois a velocidade da bomba é constante e a sua aceleração é rigorosamente nula (∑F = m·a = 2 × 0 = 0).",
      "2,5 N para trás, representando a força inercial residual que tenta arrancar o equipamento do poste de fixação."
    ],
    "correctIndex": 2,
    "explanation": "Velocidade constante em linha reta significa a = 0. Pela 2.ª Lei de Newton: ∑F = m·a = 2 kg × 0 m/s² = 0 N.",
    "distractorAnalysis": [
      "Está incorreta: 1,6 kg·m/s é a quantidade de movimento linear (momento linear p = m·v), não uma força em Newtons.",
      "Está incorreta: O peso de 19,6 N é equilibrado pela força vertical de suporte exercida pelo grampo de fixação do mastro.",
      "Está incorreta: Não há força inercial para trás quando a velocidade é perfeitamente constante (a aceleração é zero)."
    ],
    "nursingApplication": "Assegura que os equipamentos não sofrem solavancos enquanto o transporte se mantiver a velocidade uniforme."
  },
  {
    "id": 1376,
    "topicId": 1,
    "question": "Qual é a relação matemática entre a aceleração e a força resultante na 1.ª Lei de Newton quando o corpo se move em velocidade constante?",
    "options": [
      "a = 9,8 m/s² independentemente do valor assumido pelo somatório das forças aplicadas no plano horizontal.",
      "∑F = m / a, de modo que a força resultante atinge valores infinitos sempre que a aceleração se aproxima de zero.",
      "a = ∑F × tempo, acumulando-se a aceleração de forma linear ao longo de todo o percurso hospitalar percorrido.",
      "a = 0 se e só se ∑F = 0, expressando uma equivalência biofísica estrita entre aceleração nula e força resultante nula."
    ],
    "correctIndex": 3,
    "explanation": "A 1.ª Lei é o caso particular da 2.ª Lei para a = 0: a aceleração é zero se, e somente se, a força resultante for zero.",
    "distractorAnalysis": [
      "Está incorreta: A aceleração só é 9,8 m/s² em queda livre estrita sem suporte e sem resistência do ar.",
      "Está incorreta: A relação de Newton é F = m·a e não F = m/a; para a = 0, a força resultante é zero.",
      "Está incorreta: Aceleração não acumula com o tempo no MRU; permanece rigorosamente nula em cada instante."
    ],
    "nursingApplication": "Permite aos enfermeiros reconhecer que qualquer sobressalto ou aceleração sentida pelo doente denuncia uma força resultante não nula."
  },
  {
    "id": 1377,
    "topicId": 1,
    "question": "Se a força externa de paragem for aplicada subitamente por uma parede rígida (divisória da cabine), porque é que a colisão é lesiva?",
    "options": [
      "Porque a divisória metálica absorve a massa inercial do enfermeiro, tornando-o indefinidamente denso no ponto de contacto.",
      "Porque a desaceleração ocorre num intervalo de tempo extremamente curto (milissegundos), gerando uma força de impacto colossal.",
      "Porque o metal frio da divisória provoca uma reação química de polimerização instantânea dos lípidos dérmicos.",
      "Porque a 1.ª Lei de Newton deixa de ser válida quando a velocidade de deslocamento desce abaixo de 10 km/h."
    ],
    "correctIndex": 1,
    "explanation": "Pela relação F = m·Δv/Δt: se Δt é quase nulo (impacto rígido), a força F atinge valores brutais capazes de causar politraumatismo.",
    "distractorAnalysis": [
      "Está incorreta: A massa não se altera nem a densidade se torna infinita; o dano resulta da força mecânica de compressão e cisalhamento.",
      "Está incorreta: O traumatismo é puramente mecânico (fraturas, contusões), não químico de polimerização dérmica.",
      "Está incorreta: As leis de Newton permanecem válidas e explicam com precisão as forças extremas geradas no choque."
    ],
    "nursingApplication": "Sistemas de absorção de impacto (estofos deformáveis, cintos com pré-tensores) aumentam o tempo de paragem Δt, reduzindo a força F."
  },
  {
    "id": 1378,
    "topicId": 1,
    "question": "Se um objeto de 5 kg (ex: monitor multiparâmetros) estiver solto na bancada a 80 km/h e colidir com uma superfície em 0,02 segundos, que força média de impacto desenvolve?",
    "options": [
      "Exatamente 5 N, correspondendo numericamente à massa do monitor medida na balança de aferição técnica.",
      "0 N, porque os monitores médicos são protegidos por circuitos eletrónicos que anulam forças externas de impacto.",
      "100 N, calculada pela multiplicação da massa do monitor pelo comprimento da cabine sanitária da viatura.",
      "Aproximadamente 5550 N (o equivalente ao peso de uma massa de mais de 560 kg!), resultante de F = m·(Δv / Δt) com Δv = 22,2 m/s."
    ],
    "correctIndex": 3,
    "explanation": "Δv = 80 / 3,6 ≈ 22,2 m/s. a = 22,2 / 0,02 = 1111 m/s². F = m·a = 5 kg × 1111 m/s² ≈ 5555 N. Um impacto letal!",
    "distractorAnalysis": [
      "Está incorreta: 5 N é uma força minúscula (cerca de 500 gramas-força); a desaceleração violenta multiplica a força por mais de mil vezes.",
      "Está incorreta: Circuitos eletrónicos não anulam as leis da física newtoniana; o monitor colide com toda a sua energia cinética.",
      "Está incorreta: Multiplicar massa por comprimento não calcula força de impacto na mecânica."
    ],
    "nursingApplication": "Justifica a regra rigorosa de que nenhum monitor ou mala de emergência pode viajar solto sobre as bancadas da ambulância!"
  },
  {
    "id": 1379,
    "topicId": 1,
    "question": "Em doentes com quadro de agitação psicomotora no internamento, porque é que o uso exclusivo de grades sem acolchoamento pode ser insuficiente?",
    "options": [
      "Porque o metal das grades absorve as moléculas de oxigénio da pele, originando cianose distal nos membros.",
      "Porque as barras metálicas geram um campo gravitacional secundário que puxa os membros do doente para fora da cama.",
      "Porque a 1.ª Lei de Newton deixa de atuar sempre que o nível de consciência do utente desce na Escala de Glasgow.",
      "Porque os movimentos inerciais repetidos contra as barras rígidas de metal geram forças de impacto que podem causar hematomas."
    ],
    "correctIndex": 3,
    "explanation": "Colidir com barras metálicas rígidas num tempo Δt curto gera forças elevadas (F = m·Δv/Δt); o acolchoamento amortece o choque.",
    "distractorAnalysis": [
      "Está incorreta: O metal hospitalar não absorve oxigénio da pele; o risco é puramente de traumatismo mecânico contundente.",
      "Está incorreta: Objetos de metal não criam campos gravitacionais secundários percetíveis na biologia humana.",
      "Está incorreta: As leis da física atuam universalmente, independentemente da escala de Glasgow ou do estado neurológico."
    ],
    "nursingApplication": "O acolchoamento das grades laterais é uma intervenção de enfermagem recomendada na prevenção de lesões por impacto mecânico."
  },
  {
    "id": 1380,
    "topicId": 1,
    "question": "Qual é o enunciado formal da 2.ª Lei de Newton (Princípio Fundamental da Dinâmica)?",
    "options": [
      "A velocidade adquirida por um corpo é estritamente proporcional ao quadrado da sua energia cinética dividida pelo volume total.",
      "A força resultante sobre qualquer corpo biológico é sempre nula quando este se desloca em trajectórias curvilíneas aceleradas.",
      "A aceleração adquirida por um corpo é diretamente proporcional à força resultante que atua sobre ele e inversamente proporcional à sua massa inercial.",
      "A aceleração de um corpo depende exclusivamente da temperatura ambiente e da humidade relativa registada na enfermaria."
    ],
    "correctIndex": 2,
    "explanation": "A 2.ª Lei estabelece que F = m·a (ou a = F/m), traduzindo a relação causal entre a força aplicada e a aceleração.",
    "distractorAnalysis": [
      "Está incorreta: A velocidade não é proporcional à energia dividida pelo volume; a 2.ª Lei relaciona aceleração com força e massa.",
      "Está incorreta: A força resultante só é nula em repouso ou MRU (1.ª Lei); em trajetórias curvilíneas aceleradas há força centrípeta.",
      "Está incorreta: A aceleração mecânica depende das forças aplicadas e da massa inercial, não de grandezas termohigrométricas."
    ],
    "nursingApplication": "Permite ao enfermeiro prever quanta força física precisa de mobilizar para iniciar o movimento de diferentes doentes."
  },
  {
    "id": 1381,
    "topicId": 1,
    "question": "Matematicamente, como se expressa a 2.ª Lei de Newton para um corpo de massa constante m?",
    "options": [
      "F = m / a (onde a força resultante é o quociente entre a massa do indivíduo e a aceleração instantânea).",
      "F = m · v² / 2 (onde a força é calculada pela metade do produto da massa pelo quadrado da velocidade).",
      "F = m + a (onde a força mecânica é obtida somando aritmeticamente o valor da massa ao valor da aceleração).",
      "F = m · a (onde a força vetorial resultante é o produto da massa escalar pela aceleração vetorial adquirida)."
    ],
    "correctIndex": 3,
    "explanation": "A equação fundamental da dinâmica é vetorial: F = m·a, indicando que a aceleração tem a mesma direção e sentido da força resultante.",
    "distractorAnalysis": [
      "Está incorreta: F = m/a inverte a relação matemática; a aceleração é a = F/m, pelo que F = m·a.",
      "Está incorreta: m·v²/2 é a expressão da energia cinética (Ec), expressa em Joules, e não da força em Newtons.",
      "Está incorreta: Força e aceleração têm naturezas dimensionais diferentes; não se somam grandezas com unidades distintas."
    ],
    "nursingApplication": "O enfermeiro usa esta fórmula mental para graduar o esforço de tração ou empurrão no transporte de cargas."
  },
  {
    "id": 1382,
    "topicId": 1,
    "question": "Se quisermos calcular a aceleração que um objeto ou membro adquire a partir da força resultante e da massa, que fórmula utilizamos?",
    "options": [
      "a = F / m (a aceleração é o quociente entre a intensidade da força resultante e a massa inercial do corpo).",
      "a = F · m (a aceleração é dada pela multiplicação direta da força aplicada pela massa total do objeto).",
      "a = m / F (a aceleração é obtida dividindo a massa do corpo pela força de resistência hidrodinâmica).",
      "a = F² · m (a aceleração é calculada elevando o valor da força ao quadrado e multiplicando pelo peso)."
    ],
    "correctIndex": 0,
    "explanation": "Isolando a aceleração na equação F = m·a, obtém-se rigorosamente a = F/m (aceleração proporcional a F e inversamente a m).",
    "distractorAnalysis": [
      "Está incorreta: Multiplicar F por m daria N·kg, que não possui dimensão de aceleração mecânica (m/s²).",
      "Está incorreta: Dividir massa por força daria o inverso da aceleração (s²/m), contrariando a física clássica.",
      "Está incorreta: Elevar a força ao quadrado violaria a homogeneidade dimensional e a relação linear da 2.ª Lei."
    ],
    "nursingApplication": "Explica porque doentes com membros edemaciados e pesados exigem maior esforço para serem mobilizados à mesma taxa."
  },
  {
    "id": 1383,
    "topicId": 1,
    "question": "A partir da expressão da 2.ª Lei, como se define a massa inercial m de um corpo?",
    "options": [
      "m = F · a (a massa é obtida multiplicando o módulo da força exercida pela aceleração observada).",
      "m = F / a (a massa inercial é a razão constante entre a força resultante aplicada e a aceleração que ela produz).",
      "m = a / F (a massa é a razão entre a aceleração desenvolvida e a tensão superficial dos tecidos).",
      "m = F / v (a massa é o quociente entre a força aplicada e a velocidade constante de deslocamento)."
    ],
    "correctIndex": 1,
    "explanation": "A massa inercial mede quantitativamente a resistência de um corpo à aceleração: m = F/a (kg = N / (m/s²)).",
    "distractorAnalysis": [
      "Está incorreta: O produto F·a tem unidades de N·m/s² = W/s, que não corresponde à grandeza massa.",
      "Está incorreta: a/F é o inverso da massa inercial (1/m), o que inverteria a proporcionalidade física.",
      "Está incorreta: F/v representa o coeficiente de atrito viscoso linear em hidrodinâmica, não a massa do corpo."
    ],
    "nursingApplication": "Ajuda a enfermagem a compreender que doentes de maior massa exigem sempre mais força para atingir a mesma cadência."
  },
  {
    "id": 1384,
    "topicId": 1,
    "question": "O que acontece à direção e ao sentido da aceleração de um corpo segundo a 2.ª Lei de Newton?",
    "options": [
      "A aceleração adquire sempre uma direção perpendicular ao sentido do movimento devido ao efeito giroscópico.",
      "A aceleração aponta sempre no sentido oposto à força resultante por causa do princípio de Le Chatelier.",
      "A aceleração adquire rigorosamente a mesma direção e o mesmo sentido do vetor da força resultante aplicada.",
      "A aceleração não possui direção nem sentido no espaço, comportando-se como um escalar isotrópico absoluto."
    ],
    "correctIndex": 2,
    "explanation": "Como m é um escalar positivo, na equação F = m·a o vetor aceleração a tem a mesma direção e sentido do vetor força F.",
    "distractorAnalysis": [
      "Está incorreta: A aceleração só é perpendicular à força em sistemas rotacionais sob forças não alinhadas, não no movimento linear.",
      "Está incorreta: Aceleração oposta à força violaria o princípio causal básico da mecânica clássica de Newton.",
      "Está incorreta: A aceleração é uma grandeza vetorial fundamental, possuindo obrigatoriamente módulo, direção e sentido."
    ],
    "nursingApplication": "Garante que ao empurrar uma cadeira de rodas para a frente, o movimento acelerado ocorrerá exatamente para a frente."
  },
  {
    "id": 1385,
    "topicId": 1,
    "question": "Se um carrinho de penso estiver inicialmente em repouso e nenhuma força resultante atuar sobre ele (∑F = 0), qual será a sua aceleração segundo a 2.ª Lei?",
    "options": [
      "A aceleração será igual a 9,8 m/s² direcionada permanentemente para a porta da enfermaria.",
      "A aceleração será nula (a = 0 m/s²), permanecendo o carrinho em repouso estático contínuo.",
      "A aceleração será infinita porque o denominador da fração física atinge o valor temperaturas extremamente baixas.",
      "A aceleração oscilará entre valores positivos e negativos de acordo com a ventilação do piso."
    ],
    "correctIndex": 1,
    "explanation": "De a = F_res / m, se F_res = 0, então a = 0. A 2.ª Lei é perfeitamente congruente com a 1.ª Lei de Newton.",
    "distractorAnalysis": [
      "Está incorreta: 9,8 m/s² é a aceleração da gravidade em queda livre vertical, não no movimento horizontal estático.",
      "Está incorreta: A massa no denominador não é zero; é a força no numerador que é zero, resultando em aceleração nula.",
      "Está incorreta: Sem forças resultantes externas não existem acelerações oscilatórias espontâneas."
    ],
    "nursingApplication": "Confirma que o equipamento permanece seguro e imóvel onde o enfermeiro o colocou."
  },
  {
    "id": 1386,
    "topicId": 1,
    "question": "Num gráfico de Força Resultante (eixo vertical) em função da Aceleração (eixo horizontal) para um corpo rígido, o que representa o declive da reta?",
    "options": [
      "A velocidade máxima instantânea atingida pelo objeto durante o teste cinemático.",
      "A aceleração da gravidade corrigida para a altitude local onde decorre a medição.",
      "A energia potencial gravitacional armazenada no centro de massa corporal.",
      "A massa inercial do corpo (m), correspondendo à constante de proporcionalidade da 2.ª Lei de Newton."
    ],
    "correctIndex": 3,
    "explanation": "Da equação da reta y = k·x, temos F = m·a; assim, o declive (F/a) é igual à massa inercial m.",
    "distractorAnalysis": [
      "Está incorreta: O declive de F vs a é m (kg); velocidade tem unidades de m/s e resulta de integração temporal.",
      "Está incorreta: A aceleração da gravidade g é uma constante de aceleração (m/s²), não o declive deste gráfico.",
      "Está incorreta: A energia potencial mede-se em Joules (N·m), tendo dimensões distintas do declive da reta."
    ],
    "nursingApplication": "Permite determinar experimentalmente a massa de equipamentos ou segmentos corporais através de testes de dinamometria."
  },
  {
    "id": 1387,
    "topicId": 1,
    "question": "Qual é a principal razão pela qual doentes com obesidade severa acamados exigem um esforço muscular muito superior dos enfermeiros durante reposicionamentos no leito?",
    "options": [
      "A sua temperatura corporal média é dez graus superior, amolecendo a espuma viscoelástica do colchão.",
      "A sua grande massa inercial oferece elevada resistência a qualquer mudança no estado de repouso (F = m·a).",
      "O seu tecido adiposo emite ondas gravitacionais locais que aumentam a atração pela Terra.",
      "A circulação capilar periférica gera uma força eletromagnética que atrai os lençóis para o estrado."
    ],
    "correctIndex": 1,
    "explanation": "Quanto maior a massa m, maior a inércia e maior a força F requerida para imprimir qualquer aceleração a (2.ª Lei).",
    "distractorAnalysis": [
      "Está incorreta: A temperatura corporal de indivíduos com obesidade situa-se nos valores normais humanos (~36,5-37 °C).",
      "Está incorreta: O corpo humano não emite ondas gravitacionais mensuráveis capazes de alterar o peso mecânico.",
      "Está incorreta: A circulação sanguínea não gera campos eletromagnéticos macroscópicos de atração com lençóis."
    ],
    "nursingApplication": "Fundamenta a adoção obrigatória de ajudas técnicas (telas de transferência, elevadores) na mobilização de doentes pesados."
  },
  {
    "id": 1388,
    "topicId": 1,
    "question": "Na mobilização e ergonomia clínica, como é caracterizado o utente bariátrico sob o ponto de vista biofísico da mecânica?",
    "options": [
      "Como um doente cujo peso é nulo devido à absorção da aceleração da gravidade pelas células adiposas.",
      "Como um indivíduo cuja massa se reduz a zero quando posicionado em decúbito dorsal horizontal no leito.",
      "Como um sistema biológico imune às leis do atrito e da inércia descritas por Isaac Newton.",
      "Como um corpo de elevada massa inercial que requer forças substancialmente maiores para acelerar, travar e mudar de direção."
    ],
    "correctIndex": 3,
    "explanation": "O utente bariátrico possui elevada massa (ex: 150-250 kg), o que amplifica a inércia (resistência à aceleração e travagem, F = m·a).",
    "distractorAnalysis": [
      "Está incorreta: O tecido adiposo tem massa e sofre atração gravítica normal (P = m·g); o peso é muito elevado, nunca nulo.",
      "Está incorreta: A posição em decúbito não altera a massa do indivíduo; a massa é um escalar intrínseco invariante.",
      "Está incorreta: Nenhum corpo macroscópico está imune às leis universais da dinâmica newtoniana."
    ],
    "nursingApplication": "Sensibiliza a equipa de enfermagem para o planeamento biofísico prévio antes de qualquer mobilização bariátrica."
  },
  {
    "id": 1389,
    "topicId": 1,
    "question": "Comparando um utente bariátrico com massa de 160 kg e um utente normoponderal de 80 kg, qual é a razão entre as forças necessárias para lhes imprimir a mesma aceleração de 0,4 m/s²?",
    "options": [
      "A força para o utente bariátrico (64 N) é exatamente o dobro da força para o utente normoponderal (32 N).",
      "A força necessária é exatamente idêntica em ambos porque a aceleração pretendida é a mesma.",
      "O utente bariátrico exige quatro vezes menos força devido à maior área de dispersão do tecido adiposo.",
      "O utente bariátrico não pode ser acelerado porque a sua massa excede a constante elástica do piso."
    ],
    "correctIndex": 0,
    "explanation": "F1 = 80 · 0,4 = 32 N; F2 = 160 · 0,4 = 64 N. A força necessária é diretamente proporcional à massa corporal.",
    "distractorAnalysis": [
      "Está incorreta: Mesma aceleração aplicada a massas diferentes exige forças proporcionais a essas massas (F = m·a).",
      "Está incorreta: Maior área de dispersão distribui a pressão, mas a massa inercial total e a força exigida dobram.",
      "Está incorreta: Qualquer massa pode ser acelerada se for aplicada a força resultante suficiente."
    ],
    "nursingApplication": "Alerta os profissionais para não tentarem mobilizar utentes bariátricos sem ajuda de colegas ou meios mecânicos."
  },
  {
    "id": 1390,
    "topicId": 1,
    "question": "Qual é a relação entre a quantidade de movimento (p = m·v) de um utente bariátrico de 150 kg e de um utente de 50 kg ambos a deslocar-se a 1 m/s numa cadeira de rodas?",
    "options": [
      "Ambos possuem a mesma quantidade de movimento, uma vez que a velocidade linear de deslocamento é rigorosamente idêntica.",
      "O utente de 100 kg possui o dobro da quantidade de movimento (p = 100 kg·m/s) do utente de 50 kg (p = 50 kg·m/s).",
      "O utente de 50 kg possui maior quantidade de movimento porque a sua menor inércia facilita a transferência de energia cinética.",
      "A quantidade de movimento de ambos é nula porque em velocidade constante de 1 m/s a aceleração é estritamente zero."
    ],
    "correctIndex": 2,
    "explanation": "p = m·v: p_bariátrico = 150 · 1 = 150 kg·m/s; p_normo = 50 · 1 = 50 kg·m/s (razão de 3 para 1).",
    "distractorAnalysis": [
      "Está incorreta: a quantidade de movimento depende do produto da massa pela velocidade (p = m·v); com massas diferentes, os momentos são distintos.",
      "Está incorreta: o corpo de menor massa tem menor momento linear para a mesma velocidade (50 kg·m/s contra 100 kg·m/s).",
      "Está incorreta: a quantidade de movimento p = m·v é não nula em qualquer corpo com velocidade; a aceleração nula apenas indica momento constante."
    ],
    "nursingApplication": "Demonstra a magnitude da energia cinética e do impulso envolvidos no transporte de doentes com obesidade."
  },
  {
    "id": 1391,
    "topicId": 1,
    "question": "Se um enfermeiro tentar travar bruscamente uma maca com um utente bariátrico de 200 kg a mover-se a 1,5 m/s em 0,3 segundos, qual é a intensidade média da força de desaceleração requerida?",
    "options": [
      "100 N (calculada dividindo a massa pelo tempo de contacto sem considerar a velocidade).",
      "3000 N (calculada multiplicando o peso corporal pelo quadrado do tempo de reação sensorial).",
      "50 N (calculada subtraindo a velocidade final à velocidade inicial do conjunto hospitalar).",
      "1000 N (calculada por F = m · Δv / Δt = 200 · 1,5 / 0,3 = 1000 N, equivalente ao peso de 100 kg)."
    ],
    "correctIndex": 3,
    "explanation": "a = Δv / Δt = 1,5 / 0,3 = 5 m/s²; F = m · a = 200 kg · 5 m/s² = 1000 N de força de travagem.",
    "distractorAnalysis": [
      "Está incorreta: 100 N corresponderia a desacelerar a maca ao longo de 3 segundos, não num intervalo brusco de 0,3 s.",
      "Está incorreta: 3000 N sobrestimaria a aceleração necessária para a variação de velocidade descrita.",
      "Está incorreta: 50 N seria insuficiente para travar 200 kg a 1,5 m/s num intervalo de tempo tão curto."
    ],
    "nursingApplication": "Evidencia que travar bruscamente uma maca pesada sobrecarrega a coluna lombar com forças superiores a 1 kN."
  },
  {
    "id": 1392,
    "topicId": 1,
    "question": "Qual é a vantagem mecânica do princípio da 2.ª Lei quando a mobilização do utente bariátrico é realizada por quatro profissionais sincronizados em vez de um só?",
    "options": [
      "A aceleração necessária para iniciar o movimento diminui para zero, permitindo a translação da massa sem aplicação de forças externas.",
      "O peso total do utente bariátrico é reduzido a um quarto devido ao aumento proporcional do número de vetores de suporte.",
      "A força total aplicada é a soma das forças individuais (∑F = F1 + F2 + F3 + F4), reduzindo a carga biomecânica por enfermeiro a um nível seguro.",
      "O coeficiente de atrito cinético do lençol de tração diminui de forma exponencial em função do número de operadores envolvidos."
    ],
    "correctIndex": 2,
    "explanation": "Ao somar forças paralelas no mesmo sentido, a força requerida para acelerar a massa m é repartida igualmente por todos.",
    "distractorAnalysis": [
      "Está incorreta: qualquer início de movimento a partir do repouso exige aceleração (a > 0) e aplicação de força resultante positiva.",
      "Está incorreta: a massa e o peso total do doente mantêm-se inalterados; o que é dividido por quatro é a parcela de força que cabe a cada operador.",
      "Está incorreta: o coeficiente de atrito depende unicamente dos materiais em contacto (tecido e colchão) e não do número de profissionais."
    ],
    "nursingApplication": "Justifica os protocolos hospitalares de mobilização segura que exigem equipas multidisciplinares para doentes bariátricos."
  },
  {
    "id": 1393,
    "topicId": 1,
    "question": "Para evitar lesões musculoesqueléticas nos enfermeiros ao acelerar uma carga pesada, a taxa de variação da velocidade (a = Δv/Δt) deve ser:",
    "options": [
      "Elevada ao máximo absoluto através de puxões súbitos e descontínuos com toda a força disponível.",
      "Negativa durante o início do movimento e positiva no final para criar ressonância harmónica tecidual.",
      "Indiferente, uma vez que a coluna lombar humana é perfeitamente rígido perante forças axiais de qualquer ordem.",
      "Mantida o mais baixa e suave possível, evitando arranques bruscos que exijam picos de força elevados (F = m·a)."
    ],
    "correctIndex": 3,
    "explanation": "Picos de aceleração (arranque brusco com Δt muito pequeno) geram picos enormes de força F = m·a, sobrecarregando os discos intervertebrais.",
    "distractorAnalysis": [
      "Está incorreta: Puxões súbitos maximizam a aceleração e multiplicam a força necessária, sendo a principal causa de lombalgias.",
      "Está incorreta: Inverter acelerações de forma incoerente aumenta a instabilidade mecânica da carga e o risco de lesão.",
      "Está incorreta: A coluna lombar possui limites fisiológicos bem definidos de resistência a forças compressivas e de corte."
    ],
    "nursingApplication": "Ensina a técnica de mobilização suave, gradual e ritmada, protegendo a saúde postural da equipa de enfermagem."
  },
  {
    "id": 1394,
    "topicId": 1,
    "question": "Como é que um guincho elétrico hospitalar de transferência aplica a 2.ª Lei de Newton para levantar um utente de 180 kg em segurança?",
    "options": [
      "O motor desenvolve uma aceleração vertical elevada para encurtar o tempo de suspensão do utente no arnês acolchoado do guincho.",
      "O motor elétrico aplica uma força de tração vertical ligeiramente superior ao peso no arranque (F > P) e igual ao peso durante a subida uniforme (F = P).",
      "O equipamento mantém a tração do cabo rigorosamente inferior ao peso corporal para prevenir sobrecargas no braço mecânico da grua.",
      "O sistema elétrico atua mantendo a aceleração vertical em valor nulo durante todo o percurso, inclusive no instante da partida do leito."
    ],
    "correctIndex": 1,
    "explanation": "No arranque: F - P = m·a (com 'a' muito pequeno para subida suave); após atingir a velocidade de subida: a = 0 e F = P = m·g.",
    "distractorAnalysis": [
      "Está incorreta: as gruas de transferência hospitalares devem acelerar muito suavemente para evitar oscilações desconfortáveis ou perigosas no doente.",
      "Está incorreta: se a força fosse inferior ao peso (F < P), a resultante seria dirigida para baixo e o doente não seria erguido do colchão.",
      "Está incorreta: no instante do arranque é fisicamente indispensável uma ligeira aceleração ascendente (F > P) para que a velocidade suba de 0 até ao valor constante."
    ],
    "nursingApplication": "Permite ao enfermeiro operar guinchos de transferência compreendendo as fases mecânicas da elevação."
  },
  {
    "id": 1395,
    "topicId": 1,
    "question": "Se um guincho hospitalar subir um utente de 150 kg com uma aceleração vertical constante de 0,2 m/s² (adotando g = 9,8 m/s²), qual é a tensão (T) suportada pelas correias?",
    "options": [
      "1500 N (T = m · (g + a) = 150 · (9,8 + 0,2) = 150 · 10 = 1500 N).",
      "1470 N, pois em aceleração ascendente a tensão é igual ao peso estático T = m · g = 150 · 9,8 = 1470 N.",
      "1500 N calculada por T = m · a = 150 · 10, omitindo a componente gravitacional g da equação.",
      "750 N, pois a tensão é dividida por dois por haver dois cabos de apoio simétricos na maca de teto."
    ],
    "correctIndex": 2,
    "explanation": "Pela 2.ª Lei: T - P = m·a ⇒ T = m·g + m·a = m·(g + a) = 150 · (9,8 + 0,2) = 150 · 10 = 1500 N.",
    "distractorAnalysis": [
      "Está incorreta: em aceleração ascendente, a tensão supera o peso estático (T = m(g+a)); ignorar a aceleração e usar apenas T = mg subestima a tensão real.",
      "Está incorreta: T = m·a seria correto apenas se o peso fosse zero (ambiente de microgravidade); no contexto hospitalar, a componente gravitacional m·g deve ser somada.",
      "Está incorreta: a maca de teto está suspensa por um único sistema de sustentação; não há dois cabos paralelos que dividam a carga por dois neste problema."
    ],
    "nursingApplication": "Explica porque as correias e o guincho bariátrico têm de ter uma carga de trabalho segura (SWL) certificada."
  },
  {
    "id": 1396,
    "topicId": 1,
    "question": "Para produzir a desaceleração de 2 m/s² na maca bariátrica de 220 kg referida na pergunta anterior, que força de retenção constante deve atuar sobre ela?",
    "options": [
      "44 N (calculada dividindo a força anterior por dez devido à compensação elástica dos pneus).",
      "2200 N (calculada multiplicando a massa total pela aceleração normal da gravidade).",
      "22 N (calculada subtraindo a aceleração à massa inercial da maca do doente).",
      "440 N (calculada diretamente pela 2.ª Lei de Newton: F = m · a = 220 kg · 2 m/s² = 440 N)."
    ],
    "correctIndex": 3,
    "explanation": "F = m·a = 220 kg · 2 m/s² = 440 N. Esta força de quase 45 kgf deve ser fornecida pelos travões ou pelos operadores.",
    "distractorAnalysis": [
      "Está incorreta: 44 N seria dez vezes inferior ao necessário, permitindo que a maca percorresse 10 metros antes de parar.",
      "Está incorreta: 2200 N é o peso vertical do conjunto (m·g), não a força horizontal necessária para a desaceleração.",
      "Está incorreta: Subtrair aceleração a massa mistura grandezas com unidades diferentes, violando a homogeneidade dimensional."
    ],
    "nursingApplication": "Evidencia que travar manualmente uma maca bariátrica requer o esforço equivalente a suster 45 kg na horizontal."
  },
  {
    "id": 1397,
    "topicId": 1,
    "question": "O que acontece à força de travagem necessária se o tempo disponível para imobilizar uma maca for reduzido para metade?",
    "options": [
      "A força de travagem necessária duplica, pois a aceleração é inversamente proporcional ao tempo de paragem (a = Δv/Δt).",
      "A força necessária reduz-se para metade porque o trabalho é realizado num espaço mais curto.",
      "A força necessária mantém-se perfeitamente inalterada porque a massa do utente é constante.",
      "A força necessária anula-se completamente devido à dissipação instantânea do calor nos travões."
    ],
    "correctIndex": 0,
    "explanation": "Como a = Δv/Δt, se Δt cai para metade, 'a' duplica; pela 2.ª Lei (F = m·a), a força requerida duplica obrigatoriamente.",
    "distractorAnalysis": [
      "Está incorreta: Reduzir o tempo exige maior força para transferir a mesma quantidade de movimento num intervalo menor.",
      "Está incorreta: Manter a massa não impede a força de variar quando a aceleração varia.",
      "Está incorreta: Os travões geram calor precisamente porque exercem forças mecânicas elevadas; a força não se anula."
    ],
    "nursingApplication": "Ensina a antecipar obstáculos com antecedência para permitir travagens suaves e com forças controladas."
  },
  {
    "id": 1398,
    "topicId": 1,
    "question": "Ao conduzir uma maca com um utente bariátrico num corredor, porque é que as curvas devem ser feitas a velocidade muito reduzida?",
    "options": [
      "Porque a força centrípeta necessária para curvar (Fc = m·v²/r) depende da massa e da velocidade ao quadrado.",
      "Porque a força centrípeta em curva é independente da massa e depende apenas do raio de curvatura da trajetória.",
      "Porque a força centrípeta é sempre constante em veículos de emergência, independentemente da velocidade de circulação.",
      "Porque o coeficiente de atrito lateral dos pneus aumenta proporcionalmente à velocidade, compensando a força centrípeta."
    ],
    "correctIndex": 1,
    "explanation": "Fc = m·v²/r: alta massa m e velocidade v multiplicam a força lateral necessária, aumentando o risco de capotamento ou desvio.",
    "distractorAnalysis": [
      "Está incorreta: a força centrípeta Fc = m·v²/r depende diretamente da massa m; um veículo mais pesado precisa de maior força centrípeta para a mesma curva.",
      "Está incorreta: a força centrípeta não é constante em veículos de emergência; aumenta com o quadrado da velocidade (v²) e com a massa do veículo.",
      "Está incorreta: o coeficiente de atrito lateral é uma propriedade do contacto pneu-piso, praticamente independente da velocidade em condições normais; não compensa a força centrípeta."
    ],
    "nursingApplication": "Orienta a condução defensiva e segura de doentes com peso elevado em mudanças de direção nos serviços."
  },
  {
    "id": 1399,
    "topicId": 1,
    "question": "Porque é que num veículo em colisão, um obstáculo rígido perfeitamente rígido (ex: muro de betão) produz uma desaceleração muito mais perigosa do que um rail de proteção maleável?",
    "options": [
      "Porque o muro perfeitamente rígido encurta drasticamente o tempo de paragem (Δt ≈ 0), tornando a força de impacto F = Δp/Δt extremamente elevada.",
      "Porque o muro absorve toda a energia cinética e a redireciona para o interior do veículo, duplicando o impulso sobre os ocupantes.",
      "Porque a parede rígida aumenta o momento linear do veículo durante a colisão, ampliando a força transmitida aos ocupantes.",
      "Porque o impacto com material rígido gera ondas de pressão de alta velocidade que percorrem a estrutura metálica e afetam os órgãos internos."
    ],
    "correctIndex": 3,
    "explanation": "Quanto menor for o tempo de desaceleração Δt, maior é a aceleração a e, pela 2.ª Lei, maior é a força destrutiva F = m·a.",
    "distractorAnalysis": [
      "Está incorreta: a parede não duplica o impulso; o impulso (variação do momento linear) é determinado pela velocidade inicial e final, não pelo material do obstáculo.",
      "Está incorreta: o momento linear diminui durante a colisão (o veículo para); a parede não amplifica o momento, apenas determina a duração do impacto.",
      "Está incorreta: embora ondas de pressão existam em colisões, o principal mecanismo de lesão em impactos rígidos é a elevada força por Δt muito curto, não ondas de alta velocidade na estrutura."
    ],
    "nursingApplication": "Explica os princípios de engenharia rodoviária e a necessidade de amortecer desacelerações para preservar a vida."
  },
  {
    "id": 1400,
    "topicId": 1,
    "question": "O que acontece aos órgãos internos de um passageiro (como o fígado, baço e aorta) durante uma desaceleração frontal de 22,7 g?",
    "options": [
      "Paralizam instantaneamente a sua circulação sanguínea sem qualquer movimento de translação no interior das cavidades corporais.",
      "Deslocam-se em direção à coluna vertebral lombar devido à compressão exercida pela musculatura abdominal anterior.",
      "Continuam a mover-se para a frente por inércia à velocidade original de 80 km/h, colidindo contra as paredes torácicas e ósseas com risco de rutura e laceração.",
      "Reduzem a sua massa inercial para metade por ação do impacto frontal, diminuindo o choque contra a grelha costal anterior."
    ],
    "correctIndex": 2,
    "explanation": "A inércia (1.ª Lei) faz os órgãos moverem-se para a frente até que tecidos de suporte (ligamentos, costelas) apliquem forças violentas (2.ª Lei: F = m·a).",
    "distractorAnalysis": [
      "Está incorreta: pela 1.ª Lei de Newton, os órgãos internos mantêm a sua velocidade inercial para a frente, colidindo violentamente contra o gradil costal.",
      "Está incorreta: numa colisão frontal a inércia projeta os órgãos viscerais para a frente (contra a parede toracoabdominal) e não para trás contra a coluna.",
      "Está incorreta: a massa dos órgãos biológicos é constante e não se reduz no impacto; a força lesiva decorre da desaceleração extrema de massas reais."
    ],
    "nursingApplication": "Explica a fisiopatologia das lesões internas graves por desaceleração (trauma fechado de alta energia) em acidentes."
  },
  {
    "id": 1401,
    "topicId": 1,
    "question": "Se o enfermeiro pesar 90 kg em vez de 70 kg nas mesmas condições de colisão (desaceleração de 222 m/s²), qual será a força de impacto sobre o seu corpo?",
    "options": [
      "15.540 N (porque a força de embate depende apenas da velocidade da ambulância e não da massa da pessoa).",
      "9.000 N (calculada multiplicando a massa por 100 de acordo com as tabelas de indemnização seguradora).",
      "2.220 N (calculada dividindo a desaceleração pela massa total do vestuário e calçado do enfermeiro).",
      "19.980 N (quase 20.000 N de força, pois F = 90 kg · 222 m/s² = 19.980 N), garantindo o equilíbrio estático."
    ],
    "correctIndex": 3,
    "explanation": "Pela 2.ª Lei de Newton, a força de impacto é proporcional à massa do indivíduo: F = 90 · 222 = 19.980 N (aumento de 4.440 N).",
    "distractorAnalysis": [
      "Está incorreta: A força depende diretamente da massa do corpo que desacelera (F = m·a); maior massa sofre maior força de impacto.",
      "Está incorreta: 9.000 N desrespeita o cálculo direto da 2.ª Lei para a aceleração de 222 m/s².",
      "Está incorreta: Dividir a aceleração pela massa resultaria em unidades de m/(s²·kg), o que não tem sentido físico de força."
    ],
    "nursingApplication": "Mostra que profissionais com maior massa inercial sofrem forças absolutas de retenção e impacto ainda mais elevadas."
  },
  {
    "id": 1402,
    "topicId": 1,
    "question": "Quando dizemos que um ocupante de uma viatura sofreu uma desaceleração de 15 g numa colisão, o que significa esse valor em termos físicos?",
    "options": [
      "Significa que a viatura percorreu uma distância 15 vezes superior ao comprimento habitual de travagem em piso seco e limpo.",
      "Significa que o tempo decorrido durante a colisão foi multiplicado por 15, permitindo uma desaceleração muito mais progressiva.",
      "Significa que a aceleração sofrida foi 15 vezes superior à aceleração da gravidade terrestre (~147 m/s²), gerando forças 15 vezes superiores ao seu próprio peso.",
      "Significa que a velocidade final do veículo aumentou 15 km/h acima do limite legal permitido no troço de via considerado."
    ],
    "correctIndex": 2,
    "explanation": "1 g = 9,8 m/s²; logo, 15 g = 15 · 9,8 = 147 m/s². A força inercial sofrida é F = m · a = 15 · (m·g) = 15 · Peso.",
    "distractorAnalysis": [
      "Está incorreta: 15 g exprime uma aceleração (múltiplo da constante gravitacional g) e não uma distância geométrica em metros.",
      "Está incorreta: desacelerações elevadas em colisões rígidas caracterizam-se por tempos de paragem extremamente curtos (Δt muito pequeno) e não dilatados.",
      "Está incorreta: 15 g indica a taxa de perda de velocidade em relação a g (a ≈ 15 × 9,8 m/s² = 147 m/s²), não correspondendo a um acréscimo de velocidade."
    ],
    "nursingApplication": "Permite à equipa de trauma prever a gravidade de lesões ocultas consoante a cinemática do embate."
  },
  {
    "id": 1403,
    "topicId": 1,
    "question": "Se durante uma travagem violenta o tempo de desaceleração do corpo do enfermeiro passar de 0,05 s (embate rígido) para 0,25 s (retenção controlada pelo cinto), qual é o efeito sobre a força média?",
    "options": [
      "A força média é reduzida para um quinto (20% do valor inicial), tornando o impacto biomecanicamente tolerável pelo organismo.",
      "A força média aumenta cinco vezes porque o cinto comprime o tórax durante um intervalo temporal superior.",
      "A força média mantém-se exatamente idêntica porque a velocidade inicial era a mesma nos dois casos.",
      "A força média cai a zero instantaneamente porque o cinto absorve toda a energia sem qualquer resistência mecânica."
    ],
    "correctIndex": 0,
    "explanation": "O tempo foi multiplicado por 5 (0,25 / 0,05 = 5); pela relação F = m·Δv/Δt, a força fica dividida exatamente por 5.",
    "distractorAnalysis": [
      "Está incorreta: Prolongar a desaceleração diminui a força requerida a cada instante, aliviando a sobrecarga torácica.",
      "Está incorreta: Mesma velocidade inicial com tempos de paragem diferentes resulta em forças médias obrigatoriamente distintas.",
      "Está incorreta: O cinto exerce uma força de retenção real e mensurável; a força é atenuada, nunca nula."
    ],
    "nursingApplication": "Mostra ao enfermeiro como um simples gesto (apertar o cinto) previne forças lesivas de milhares de Newtons."
  },
  {
    "id": 1404,
    "topicId": 1,
    "question": "Qual é o perigo mecânico para um passageiro se o cinto de segurança for colocado com folga excessiva ou frouxo?",
    "options": [
      "Porque continuam o seu movimento à velocidade do veículo por inércia, atingindo os ocupantes com grande força de impacto.",
      "Porque o campo magnético do habitáculo atrai os objetos metálicos soltos em direção à cabine de condução dianteira.",
      "Porque os objetos soltos perdem a sua massa inercial durante a travagem, flutuando descontroladamente no ar do compartimento.",
      "Porque as vibrações do piso aquecem os materiais até ao limite de combustão dos plásticos dos equipamentos de suporte."
    ],
    "correctIndex": 2,
    "explanation": "Com folga, o passageiro desacelera num intervalo de tempo muito menor ao atingir o fim da folga, elevando a força F = m·a.",
    "distractorAnalysis": [
      "Está incorreta: a projeção dos objetos decorre puramente da inércia mecânica (1.ª Lei) e não de atração magnética artificial.",
      "Está incorreta: a massa inercial é constante; a perigosidade resulta da conservação do momento linear (p = m·v) do objeto solto.",
      "Está incorreta: os riscos críticos no transporte sanitário derivam de impactos mecânicos diretos por desaceleração e não de efeitos térmicos."
    ],
    "nursingApplication": "Instrui o profissional a ajustar e tensionar corretamente o cinto ao corpo antes do arranque da ambulância."
  },
  {
    "id": 1405,
    "topicId": 1,
    "question": "Qual é o enunciado do Teorema do Impulso na mecânica clássica?",
    "options": [
      "O impulso da força resultante que atua sobre um corpo é rigorosamente igual à variação do seu momento linear (I = F·Δt = Δp = m·Δv).",
      "O impulso é igual à energia cinética inicial do corpo, pois toda a energia se converte em quantidade de movimento.",
      "O impulso é igual ao produto da massa pelo deslocamento total percorrido, relacionando força e posição em vez de velocidade.",
      "O impulso é igual à soma das forças individuais aplicadas multiplicadas pelo tempo ao quadrado, para contabilizar a aceleração."
    ],
    "correctIndex": 2,
    "explanation": "F = m·a = m·(Δv/Δt) ⇒ F·Δt = m·Δv ⇒ I = Δp. O teorema do impulso relaciona diretamente força, tempo e variação de velocidade.",
    "distractorAnalysis": [
      "Está incorreta: impulso e energia cinética têm dimensões distintas (N·s vs J); a energia cinética (½mv²) não é igual ao momento linear (mv), nem ao impulso.",
      "Está incorreta: impulso relaciona-se com a variação de velocidade (Δv), não com o deslocamento; o produto massa × deslocamento corresponde a uma grandeza sem denominação padrão, não ao impulso.",
      "Está incorreta: o impulso é I = F·Δt (tempo simples, não ao quadrado); elevar Δt ao quadrado modificaria as dimensões e resultaria numa grandeza física diferente."
    ],
    "nursingApplication": "Fundamental para desenhar sistemas de amortecimento e proteção contra impactos no transporte de doentes."
  },
  {
    "id": 1406,
    "topicId": 1,
    "question": "Durante o transporte de um doente com fratura da bacia, um arranque brusco com uma aceleração de 2 m/s² numa maca de 100 kg com o doente (massa total) gera que força inercial instantânea no foco de fratura?",
    "options": [
      "Uma força de cisalhamento proporcional à massa dos segmentos corporais desfasados (F = m · a), provocando microdeslocamento ósseo doloroso e risco hemorrágico.",
      "Uma força de compressão nula em todos os planos, pois a aceleração linear do veículo não se transmite a estruturas anatómicas fragmentadas.",
      "Uma força de tração puramente vertical que eleva a bacia do colchão, anulando o peso suportado pela superfície da maca hospitalar.",
      "Uma força rotacional contínua que alinha espontaneamente os topos da fratura sem necessidade de fixação ou imobilização externa prévia."
    ],
    "correctIndex": 0,
    "explanation": "Segmentos com massas diferentes aceleram a taxas distintas se não estiverem rigidamente imobilizados, gerando tensões internas F = m·a.",
    "distractorAnalysis": [
      "Está incorreta: a 2.ª Lei de Newton (F = m·a) garante que a aceleração da maca gera forças de inércia em todos os segmentos anatómicos com massa.",
      "Está incorreta: a aceleração horizontal do veículo gera forças inerciais no plano anteroposterior e de cisalhamento, não forças verticais antigravíticas.",
      "Está incorreta: forças inerciais bruscas produzem desalinhamento e instabilidade nos focos fraturários, agravando o risco de choque hemorrágico."
    ],
    "nursingApplication": "Instrui o enfermeiro a conduzir macas com utentes politraumatizados com acelerações ultrassuaves."
  },
  {
    "id": 1407,
    "topicId": 1,
    "question": "Ao parar a cama de 150 kg que se desloca a 0,6 m/s num espaço de 0,3 metros, qual é a desaceleração sofrida e a força de retenção correspondente?",
    "options": [
      "A desaceleração é de 0,6 m/s² e a força de retenção média é de 90 N (v² = 2·a·d → a = v²/2d; F = m·a).",
      "A desaceleração é de 6 m/s² e a força é de 900 N, calculada por a = v/d sem usar a equação cinemática correta.",
      "A desaceleração é de 0,06 m/s² e a força é de 9 N, omitindo o fator 2 do denominador na equação cinemática.",
      "A desaceleração é de 60 m/s² e a força é de 9000 N, confundindo a unidade da distância de paragem em cm com metros."
    ],
    "correctIndex": 3,
    "explanation": "v² = 2·a·d ⇒ 0,6² = 2 · a · 0,3 ⇒ 0,36 = 0,6·a ⇒ a = 0,6 m/s². Força de retenção F = m·a = 150 · 0,6 = 90 N.",
    "distractorAnalysis": [
      "Está incorreta: a = v/d (sem dividir por 2d e sem considerar v²) não é a equação cinemática correta para desaceleração uniforme a partir do repouso; a fórmula correta é a = v²/(2d).",
      "Está incorreta: omitir o fator 2 na fórmula v² = 2·a·d resulta em a = v²/d em vez de a = v²/(2d), produzindo uma desaceleração e força metade das corretas.",
      "Está incorreta: converter incorretamente a distância de paragem (por exemplo, usar cm em vez de m no denominador) aumenta o valor de a por um fator de 100, resultando em forças fisicamente impossíveis no contexto dado."
    ],
    "nursingApplication": "Permite dosear a travagem manual suave para não projetar o doente em direção aos pés do leito."
  },
  {
    "id": 1408,
    "topicId": 1,
    "question": "Com base na desaceleração de 980 m/s² da pergunta anterior, qual é a força de impacto gerada sobre o trocânter maior do fémur (m = 50 kg)?",
    "options": [
      "490 N (correspondente ao peso estático de repouso de 50 kg sobre o colchão da cama).",
      "50 N (calculada dividindo a massa do utente pela constante elástica do linóleo de pavimento).",
      "49.000 N (quase 5 toneladas de força de pico, calculada por F = m · a = 50 kg · 980 m/s² = 49.000 N).",
      "5 N (força equivalente a segurar uma chávena de café com a ponta dos dedos polegar e indicador)."
    ],
    "correctIndex": 2,
    "explanation": "F = m·a = 50 · 980 = 49.000 N. Esta força colossal excede largamente o limite de resistência mecânica à fratura de ossos osteoporóticos (~2 a 4 kN).",
    "distractorAnalysis": [
      "Está incorreta: 490 N é apenas o peso do tronco em repouso estático (50 · 9,8); na queda a força é multiplicada por 100.",
      "Está incorreta: 50 N ignora a aceleração de paragem brutal decorrente da pequena distância de deformação no solo.",
      "Está incorreta: 5 N é uma força minúscula, incompatível com a destruição trabecular óssea observada em fraturas de queda."
    ],
    "nursingApplication": "Evidencia o perigo biomecânico extremo das quedas e a necessidade vital de estratégias preventivas de enfermagem."
  },
  {
    "id": 1409,
    "topicId": 1,
    "question": "Como é que a 2.ª Lei de Newton (F = m·a) se aplica à ejeção ventricular esquerda durante a sístole cardíaca?",
    "options": [
      "O miocárdio relaxa passivamente, sendo a massa de sangue impulsionada unicamente pela gravidade em direção aos capilares cerebrais.",
      "O sangue acelera espontaneamente através do orifício aórtico devido à anulação transitória da pressão diastólica ventricular.",
      "O miocárdio contrai-se gerando uma força de pressão que acelera uma massa de sangue (~70 mL) desde o repouso até mais de 1 m/s na raiz da aorta.",
      "O miocárdio gera uma força estática pura que mantém o volume de sangue em velocidade nula durante toda a fase sistólica de ejeção."
    ],
    "correctIndex": 2,
    "explanation": "Durante a ejeção rápida sistólica, o ventrículo exerce força mecânica que acelera a massa de sangue (débito sistólico) na direção da circulação sistémica.",
    "distractorAnalysis": [
      "Está incorreta: a sístole é uma contração muscular ativa vigorosa que vence a resistência pós-carga e a gravidade para perfundir os tecidos.",
      "Está incorreta: a aceleração do sangue resulta do gradiente de pressão positiva gerado pela contração miocárdica (F = ΔP·Área).",
      "Está incorreta: durante a ejeção rápida o sangue adquire velocidade significativa (~1 a 1,5 m/s na aorta ascendente), não estando em repouso."
    ],
    "nursingApplication": "Permite ao enfermeiro relacionar a contratilidade cardíaca (inotropismo) com as leis fundamentais da física mecânica."
  },
  {
    "id": 1410,
    "topicId": 1,
    "question": "Se o ventrículo esquerdo acelerar uma massa de sangue de 0,07 kg (70 mL) de 0 a 1,2 m/s no intervalo de tempo de 0,08 segundos, qual é a aceleração média do sangue e a força ejetiva correspondente?",
    "options": [
      "A aceleração média é de 15 m/s² e a força média desenvolvida pelo miocárdio sobre o volume de sangue ejetado é de 1,05 N.",
      "A aceleração média é de 0,15 m/s² e a força é de 0,0105 N, calculada usando a velocidade em vez de Δv no numerador.",
      "A aceleração média é de 150 m/s² e a força é de 10,5 N, convertendo incorretamente os 20 ms para 0,002 s.",
      "A aceleração média é de 75 m/s² e a força é de 5,25 N, usando Δt = 40 ms (duplicando o tempo de ejeção)."
    ],
    "correctIndex": 3,
    "explanation": "a = Δv/Δt = 1,2 / 0,08 = 15 m/s²; F = m · a = 0,07 kg · 15 m/s² = 1,05 N de força líquida de aceleração hidrodinâmica.",
    "distractorAnalysis": [
      "Está incorreta: usar a velocidade sistólica em vez da variação de velocidade (Δv) subestima a aceleração; Δv = v_final - v_inicial, não apenas v_final.",
      "Está incorreta: 20 ms = 0,020 s (não 0,002 s); converter ms para s requer divisão por 1000, não por 100; o erro de um fator 10 no tempo eleva a aceleração por fator 10.",
      "Está incorreta: duplicar o Δt para 40 ms reduz a aceleração e a força para metade; o enunciado especifica 20 ms como duração da aceleração sistólica."
    ],
    "nursingApplication": "Quantifica o esforço mecânico direto de cada batimento na hemodinâmica cardiovascular."
  },
  {
    "id": 1411,
    "topicId": 1,
    "question": "A ecocardiografia por Doppler tecidual mede a aceleração e velocidade de deformação do miocárdio (strain rate). O seu valor diagnóstico reside em:",
    "options": [
      "Avaliar diretamente a capacidade contrátil inotrópica miocárdica traduzida pela força e aceleração do sangue ejetado por sístole.",
      "Avaliar a pressão arterial diastólica, pois esta depende exclusivamente da força de ejeção ventricular esquerda.",
      "Medir o volume residual pulmonar, que reflete indiretamente a força de contração do ventrículo direito.",
      "Calcular a resistência vascular periférica total, que é o principal determinante da força miocárdica em repouso."
    ],
    "correctIndex": 1,
    "explanation": "Pela 2.ª Lei, a aceleração com que a parede do ventrículo se move e encurta reflete a força mecânica gerada pelas fibras musculares cardíacas.",
    "distractorAnalysis": [
      "Está incorreta: a pressão diastólica depende principalmente da resistência vascular periférica e da elasticidade arterial, não exclusivamente da força de ejeção ventricular.",
      "Está incorreta: o volume residual pulmonar é uma medida de função respiratória e não reflete diretamente a contratilidade do ventrículo direito.",
      "Está incorreta: a resistência vascular periférica é um fator de pós-carga, não um indicador direto da contratilidade miocárdica; a contratilidade avalia-se por parâmetros como a fração de ejeção."
    ],
    "nursingApplication": "Permite ao enfermeiro de cardiologia interpretar relatórios ecocardiográficos fundamentados em conceitos biomecânicos."
  },
  {
    "id": 1412,
    "topicId": 1,
    "question": "Durante o reflexo da tosse, o ar intrapulmonar é acelerado violentamente através de que mecanismo biofísico?",
    "options": [
      "Os pulmões aquecem o ar a temperaturas elevadas, provocando a expansão volumétrica rápida e turbulenta através da árvore brônquica.",
      "A traqueia sofre dilatação e contração peristáltica ativa ritmada que empurra ativamente a massa de ar em direção à laringe.",
      "O ar atmosférico exterior é aspirado forçadamente por pressão negativa mantida continuamente na nasofaringe durante o esforço.",
      "A glote fecha-se, a contração expiratória eleva a pressão torácica e, ao abrir-se a glote, o forte gradiente acelera o ar em alta velocidade."
    ],
    "correctIndex": 3,
    "explanation": "Pela 2.ª Lei, a enorme diferença de pressão multiplicada pela área traqueal cria uma força resultante (F = Δp·A) que acelera o ar e as secreções (a = F/m).",
    "distractorAnalysis": [
      "Está incorreta: a temperatura intrapulmonar é constante (cerca de 37 °C); a aceleração decorre de um diferencial puramente mecânico de pressão.",
      "Está incorreta: a traqueia não possui músculo peristáltico propulsor; a tosse gera um fluxo de ar altamente turbulento a alta velocidade.",
      "Está incorreta: a tosse é um mecanismo expiratório forçado de expulsão sob pressão torácica positiva e não uma aspiração para o interior."
    ],
    "nursingApplication": "Permite ao enfermeiro otimizar manobras de cinesiterapia respiratória e tosse assistida em doentes com acumulação de muco."
  },
  {
    "id": 1413,
    "topicId": 1,
    "question": "Em resumo dos conceitos lecionados da mecânica de Newton, qual é o papel essencial da 1.ª Lei de Newton na compreensão do universo mecânico?",
    "options": [
      "Demonstra que a aceleração de um corpo em repouso depende unicamente da temperatura dos tecidos e da pressão atmosférica ambiente.",
      "Estabelece a inércia como propriedade fundamental da matéria e define as condições de repouso ou movimento retilíneo uniforme com resultante nula.",
      "Comprova que os organismos biológicos possuem mecanismos celulares ativos que anulam completamente a ação da atração gravitacional.",
      "Determina que a força é uma grandeza puramente escalar cujo efeito depende apenas da área total de contacto entre dois corpos materiais."
    ],
    "correctIndex": 1,
    "explanation": "Em síntese conceptual: 'As 3 Leis de Newton governam o repouso e o movimento: Inércia, aceleração e força, e ação-reação'.",
    "distractorAnalysis": [
      "Está incorreta: a aceleração depende exclusivamente da força resultante e da massa (2.ª Lei de Newton) e não de variáveis térmicas ou barométricas normais.",
      "Está incorreta: a matéria viva está sujeita às leis universais da mecânica clássica, incluindo a atração gravítica e a inércia newtoniana.",
      "Está incorreta: a força é uma grandeza vetorial (módulo, direção, sentido e ponto de aplicação) e não uma propriedade puramente escalar."
    ],
    "nursingApplication": "A 1.ª Lei fornece a base concetual para interpretar todo o comportamento dinâmico de doentes e equipamentos."
  },
  {
    "id": 1414,
    "topicId": 1,
    "question": "Qual das seguintes afirmações sobre a simultaneidade do par ação-reação é fisicamente correta?",
    "options": [
      "Porque em repouso o coeficiente de atrito estático entre as superfícies da fechadura do travão é nulo, permitindo deslizamento instantâneo.",
      "Porque a força peso da maca atua apenas quando a maca se encontra em movimento acelerado ao longo do pavimento hospitalar.",
      "Porque para iniciar o movimento é necessário vencer o atrito estático das rodas e engrenagens mecânicas, que é superior ao atrito cinético de rolamento.",
      "Porque as rodas da maca aumentam a sua massa inercial de repouso para o triplo sempre que permanecem imobilizadas por mais de uma hora."
    ],
    "correctIndex": 1,
    "explanation": "A designação 'ação' e 'reação' é puramente convencional; ambas as forças são partes inseparáveis e simultâneas da mesma interação.",
    "distractorAnalysis": [
      "Está incorreta: o coeficiente de atrito estático em repouso é superior ao cinético (μe > μc); por isso o arranque exige sempre mais força do que a manutenção.",
      "Está incorreta: a força peso (P = m·g) atua continuamente de forma idêntica tanto em repouso como em movimento.",
      "Está incorreta: a massa inercial dos materiais metálicos e borrachas da maca é invariável; a resistência inicial advém do atrito estático superior."
    ],
    "nursingApplication": "Esclarece os estudantes de que não existe um atraso físico na resposta mecânica de apoio entre superfícies."
  },
  {
    "id": 1415,
    "topicId": 1,
    "question": "Se um enfermeiro aplicar uma força de 80 N para empurrar uma cadeira de rodas, qual é a intensidade da força que a cadeira exerce sobre as mãos do enfermeiro?",
    "options": [
      "40 N, porque metade da força é absorvida pelos rolamentos das rodas de borracha da cadeira.",
      "160 N, porque a reação duplica o seu valor devido à resistência ao rolamento com o piso.",
      "Zero N, porque objetos inanimados não possuem músculos para exercer forças sobre humanos.",
      "Exatamente 80 N, orientada em sentido contrário (contra as palmas das mãos do enfermeiro)."
    ],
    "correctIndex": 3,
    "explanation": "Pela 3.ª Lei, a intensidade é rigorosamente idêntica (|F_mãos->cadeira| = |F_cadeira->mãos| = 80 N), independentemente da massa ou movimento.",
    "distractorAnalysis": [
      "Está incorreta: Os rolamentos afetam a aceleração da cadeira, mas a força mútua de contacto com as mãos é estritamente 80 N.",
      "Está incorreta: A reação nunca é superior à ação; o módulo das duas forças é matematicamente igual.",
      "Está incorreta: Objetos inanimados exercem forças normais e de contacto elástico reais perfeitamente mensuráveis."
    ],
    "nursingApplication": "Sensibiliza para o facto de que as palmas das mãos e punhos do enfermeiro suportam a mesma carga que aplicam no equipamento."
  },
  {
    "id": 1416,
    "topicId": 1,
    "question": "Quais são as quatro características geométricas e físicas universais de qualquer par ação-reação?",
    "options": [
      "Mesma intensidade (módulo), mesma direção (linha de ação), sentidos opostos e aplicação em corpos distintos.",
      "Intensidades diferentes, direções perpendiculares, mesmo sentido e aplicação no mesmo ponto geométrico.",
      "Módulo dependente da temperatura, direções oblíquas, sentidos convergentes e aplicação no vácuo.",
      "Módulo nulo, direção puramente vertical, sentido orientado para o centro da Terra e aplicação nos ossos."
    ],
    "correctIndex": 0,
    "explanation": "Estas quatro propriedades definem inequivocamente um par ação-reação segundo os postulados de Sir Isaac Newton.",
    "distractorAnalysis": [
      "Está incorreta: Forças de um par têm obrigatoriamente a mesma intensidade e mesma linha de ação com sentidos contrários.",
      "Está incorreta: A temperatura não altera a identidade de módulo do par ação-reação em corpos rígidos.",
      "Está incorreta: O módulo só é nulo se não houver interação; pares reais têm intensidades não nulas."
    ],
    "nursingApplication": "Permite ao enfermeiro verificar sistematicamente se duas forças encontradas na prática formam ou não um par newtoniano."
  },
  {
    "id": 1417,
    "topicId": 1,
    "question": "Se um enfermeiro de 70 kg e um utente bariátrico de 140 kg se empurrarem mutuamente num corredor liso, qual deles exerce maior força?",
    "options": [
      "O utente bariátrico exerce o dobro da força porque possui o dobro da massa corporal inercial.",
      "O enfermeiro exerce o triplo da força porque possui contração voluntária e reflexos mais rápidos.",
      "Ambos exercem rigorosamente a mesma força em módulo (|F_enf| = |F_ut|), de acordo com a 3.ª Lei de Newton.",
      "Nenhum exerce força porque a diferença de massas cancela o campo gravitacional entre ambos."
    ],
    "correctIndex": 2,
    "explanation": "A 3.ª Lei não depende das massas dos corpos em interação; as forças mútuas são rigorosamente iguais em módulo.",
    "distractorAnalysis": [
      "Está incorreta: A massa superior do doente fará com que ele acelere menos (2.ª Lei: a = F/m), mas a força é rigorosamente igual.",
      "Está incorreta: A contração voluntária determina o valor da força mútua, mas essa força atua em ambos com a mesma intensidade.",
      "Está incorreta: A interação mecânica de empurrão existe e é real, sem qualquer cancelamento gravitacional."
    ],
    "nursingApplication": "Desmistifica o erro comum de pensar que o corpo com maior massa aplica mais força do que recebe."
  },
  {
    "id": 1418,
    "topicId": 1,
    "question": "Se um objeto de 1 kg cair em direção à Terra por gravidade, qual é a intensidade da força que esse objeto exerce sobre o planeta Terra?",
    "options": [
      "Exatamente a mesma intensidade (cerca de 9,8 N), sendo a aceleração da Terra impercetível devido à sua massa colossal.",
      "Zero N, uma vez que corpos com massa pequena não possuem capacidade de atrair corpos com massa astronómica.",
      "9,8 vezes menor do que a força peso, refletindo a proporcionalidade direta entre as massas dos dois corpos.",
      "Uma força infinita que é absorvida pelo campo geomagnético do núcleo antes de atingir a crosta superficial."
    ],
    "correctIndex": 0,
    "explanation": "O peso do objeto é a atração da Terra sobre ele (~9,8 N); pela 3.ª Lei, o objeto atrai a Terra com os mesmos 9,8 N em sentido ascendente.",
    "distractorAnalysis": [
      "Está incorreta: pela 3.ª Lei de Newton toda a ação gera uma reação rigorosamente igual em intensidade, mesmo entre massas muito díspares.",
      "Está incorreta: a atração gravitacional é mútua e de mesmo módulo (F12 = F21 = G·m1·m2/r²); a aceleração é que é inversamente proporcional à massa.",
      "Está incorreta: a força tem intensidade finita e idêntica ao peso do objeto no campo terrestre (~9,8 N)."
    ],
    "nursingApplication": "Ilustra a universalidade do princípio da ação e reação até mesmo na gravitação astronómica."
  },
  {
    "id": 1419,
    "topicId": 1,
    "question": "Porque é que as forças que constituem um par de ação e reação NUNCA se anulam mutuamente?",
    "options": [
      "Porque a força de reação é sempre numericamente inferior à força de ação devido à dissipação por atrito mecânico de contacto.",
      "Porque atuam obrigatoriamente em corpos distintos, e apenas forças aplicadas sobre o mesmo corpo podem anular-se na força resultante.",
      "Porque a força de reação manifesta-se apenas quando o corpo B entra em aceleração positiva no mesmo sentido da força de ação.",
      "Porque a força de ação atua no vácuo e a força de reação manifesta-se exclusivamente em meios materiais com densidade mensurável."
    ],
    "correctIndex": 1,
    "explanation": "Para calcular ∑F de um corpo, somam-se apenas as forças que atuam nele; F_A->B atua em B e F_B->A atua em A, pelo que nunca se cancelam.",
    "distractorAnalysis": [
      "Está incorreta: as intensidades de ação e reação são rigorosamente idênticas (|F_A| = |F_B|) pela 3.ª Lei de Newton.",
      "Está incorreta: a reação existe sempre que há interação, independentemente de haver aceleração, velocidade constante ou repouso.",
      "Está incorreta: os pares ação-reação regem qualquer interação física entre corpos em qualquer meio, incluindo o vácuo."
    ],
    "nursingApplication": "Crucial para o enfermeiro compreender como os movimentos acontecem apesar da existência universal de reações iguais."
  },
  {
    "id": 1420,
    "topicId": 1,
    "question": "Ao colar uma fita adesiva médica na pele de um utente e puxá-la para retirar, a força que a fita exerce puxando a epiderme é acompanhada por:",
    "options": [
      "Uma onda eletromagnética que se propaga ao longo da fita e aquece a pele para promover a adesão.",
      "Uma força de compressão centrípeta gerada pelas fibras elásticas internas da fita que puxam a pele para dentro.",
      "Uma força de igual intensidade com que a pele puxa a fita adesiva em sentido contrário, de mesma natureza eletrostática/adesiva.",
      "Um impulso elétrico bidirecional gerado pelo potencial de membrana da pele que polariza as moléculas adesivas."
    ],
    "correctIndex": 2,
    "explanation": "Pela 3.ª Lei: |F_fita->pele| = |F_pele->fita|. As forças intermoleculares de adesão atuam em corpos diferentes simultaneamente.",
    "distractorAnalysis": [
      "Está incorreta: a adesão da fita não envolve ondas eletromagnéticas; o mecanismo é físico-mecânico (adesão intermolecular de van der Waals e adesão específica), não radiativo.",
      "Está incorreta: a fita adesiva não contém fibras elásticas que gerem forças centrípetas sobre a pele; a adesão é superficial e não compressiva.",
      "Está incorreta: não há impulso elétrico gerado pelo potencial de membrana que polarize moléculas adesivas; o potencial de membrana serve para transmissão de sinais nervosos, não para criar adesão física."
    ],
    "nursingApplication": "Orienta a técnica de remoção cuidadosa de adesivos (tracionar paralelamente à pele) para minimizar tensões de corte dolorosas."
  },
  {
    "id": 1421,
    "topicId": 1,
    "question": "Durante a fase de propulsão da marcha humana, como se aplica a 3.ª Lei de Newton entre o pé do enfermeiro e o solo?",
    "options": [
      "O pé puxa o solo para a frente e o solo empurra o pé para trás através da força de atrito cinético de deslizamento.",
      "O pé exerce uma força vertical pura e a gravidade encarrega-se de deslocar o corpo no plano sagital para a frente.",
      "O pé empurra o solo para trás e para baixo; por reação, o solo empurra o pé para a frente e para cima, impulsionando a marcha.",
      "A contração dos gémeos eleva o calcanhar anulando a necessidade de qualquer força de contacto com o pavimento."
    ],
    "correctIndex": 2,
    "explanation": "A propulsão para a frente é fornecida pela força de reação do solo (Ground Reaction Force - GRF), que empurra o corpo na direção da marcha.",
    "distractorAnalysis": [
      "Está incorreta: para avançar, o pé tem de empurrar o solo para trás; pela 3.ª Lei, a reação do solo é dirigida para a frente.",
      "Está incorreta: a propulsão horizontal exige uma componente horizontal de força de reação do solo (atrito estático) e não apenas força vertical.",
      "Está incorreta: o contacto e empurrão mecânico contra o solo são indispensáveis para gerar a reação externa motriz do corpo humano."
    ],
    "nursingApplication": "Fundamenta a análise biomecânica do movimento humano e a prevenção de distúrbios da marcha em utentes."
  },
  {
    "id": 1422,
    "topicId": 1,
    "question": "O que acontece à força que a maca exerce sobre as mãos do enfermeiro se a maca colidir subitamente contra o batente de uma porta e parar em seco?",
    "options": [
      "A aceleração da maca é nula porque as forças de ação e reação anulam-se no mesmo corpo, impedindo qualquer alteração de velocidade.",
      "A velocidade da maca depende unicamente da sua massa, mantendo-se constante independentemente da força de empurrão horizontal aplicada.",
      "Pela 2.ª Lei de Newton (F = m·a), a aceleração é diretamente proporcional à força resultante aplicada pelo enfermeiro e inversamente proporcional à massa total da maca e doente.",
      "A força resultante necessária para acelerar a maca é inversamente proporcional à aceleração pretendida pelo profissional de saúde."
    ],
    "correctIndex": 2,
    "explanation": "A travagem súbita impõe uma desaceleração extrema à massa da maca e às mãos que a empurravam, gerando picos brutais de força de impacto (2.ª e 3.ª Leis).",
    "distractorAnalysis": [
      "Está incorreta: ação e reação atuam em corpos diferentes (enfermeiro e maca), logo não se anulam; a maca acelera sob a ação da força resultante nela aplicada.",
      "Está incorreta: a velocidade varia quando atua uma força resultante; pela 2.ª Lei, a aceleração depende da força motriz e da massa total.",
      "Está incorreta: a força resultante é diretamente proporcional à aceleração (F = m·a); para acelerar mais rapidamente é necessária maior força."
    ],
    "nursingApplication": "Instrui o enfermeiro a manter as mãos bem posicionadas e a desacelerar previamente em passagens estreitas."
  },
  {
    "id": 1423,
    "topicId": 1,
    "question": "Quando o tórax do enfermeiro embate contra o cinto de segurança durante uma travagem violenta, o par de ação e reação consiste em:",
    "options": [
      "O cinto exerce uma força de retenção que desacelera o tórax, e o tórax exerce uma força idêntica e oposta sobre as tiras do cinto.",
      "O cinto dissipa a totalidade do choque sem exercer qualquer força sobre a grelha costal do profissional de saúde.",
      "O tórax absorve a inércia do veículo sem transmitir qualquer tensão mecânica aos pontos de ancoragem da carroçaria.",
      "A força aplicada pelo cinto sobre o tórax é quatro vezes superior à força com que o tórax traciona o cinto de segurança."
    ],
    "correctIndex": 3,
    "explanation": "Ação e reação entre o cinto e o tórax: mesma linha de ação, sentidos opostos, corpos diferentes e de natureza mecânica de contacto.",
    "distractorAnalysis": [
      "Está incorreta: o cinto aplica uma força real de suporte sobre o tórax para o desacelerar; essa compressão mecânica é o par de contacto.",
      "Está incorreta: a tensão é transmitida integralmente através das fitas de poliéster aos pontos rígidos de fixação e ao chassis do veículo.",
      "Está incorreta: pela 3.ª Lei de Newton, a intensidade da força com que o cinto segura o tórax é exatamente igual à que o tórax aplica no cinto."
    ],
    "nursingApplication": "Ajuda o estudante a descrever corretamente o par de forças em qualquer cenário de emergência pré-hospitalar."
  },
  {
    "id": 1424,
    "topicId": 1,
    "question": "Durante a realização de compressões torácicas em suporte básico de vida (RCP), o enfermeiro aplica uma força vertical para baixo de cerca de 400 a 500 N sobre o esterno do doente. Pela 3.ª Lei de Newton, qual é a força que o esterno exerce sobre as mãos do enfermeiro?",
    "options": [
      "Zero N, porque um doente em paragem cardiorrespiratória não possui reflexos vitais para responder.",
      "50 N, porque as cartilagens costais absorvem 90% da força por aniquilação molecular.",
      "5.000 N, porque o tórax atua como uma catapulta hidráulica que amplifica a força recebida por dez vezes.",
      "Exatamente a mesma força de 400 a 500 N, orientada verticalmente para cima contra as palmas das mãos do reanimador."
    ],
    "correctIndex": 3,
    "explanation": "Pela 3.ª Lei de Newton, |F_esterno->mãos| = |F_mãos->esterno|. A resistência elástica e viscosa do tórax devolve a mesma força com sentido ascendente.",
    "distractorAnalysis": [
      "Está incorreta: A 3.ª Lei é uma lei da mecânica física universal; não depende do estado neurológico ou cardíaco da pessoa.",
      "Está incorreta: As cartilagens deformam-se elasticamente sob a força, mas a força de contacto mútua é exatamente igual.",
      "Está incorreta: O tórax biológico não é uma máquina de multiplicação de força sem fonte de energia externa."
    ],
    "nursingApplication": "Explica a fadiga física precoce do reanimador e justifica a recomendação de alternar a cada 2 minutos de compressões."
  },
  {
    "id": 1425,
    "topicId": 1,
    "question": "Quando dois enfermeiros utilizam um lençol de transferência para posicionar um doente no leito, as forças que os profissionais aplicam no tecido são:",
    "options": [
      "Cada enfermeiro puxa o lençol com uma força F ⇔ O lençol puxa as mãos do enfermeiro em sentido oposto com uma força rigorosamente igual de intensidade F.",
      "As mãos do primeiro enfermeiro aplicam força nas mãos do segundo colega através da transmissão de energia elástica pelo tecido de algodão.",
      "A força exercida pelos operadores é totalmente neutralizada pelo peso do doente, impedindo a formação de forças de reação nas pegas.",
      "O lençol transmite uma força de compressão axial direta sobre a coluna lombar de ambos os profissionais, anulando a tração horizontal."
    ],
    "correctIndex": 0,
    "explanation": "Ao puxar o lençol para cima ou para o lado, o lençol puxa as mãos dos profissionais com a mesma intensidade de força (3.ª Lei).",
    "distractorAnalysis": [
      "Está incorreta: o contacto e aplicação de força de cada enfermeiro ocorre diretamente com o tecido do lençol, não havendo contacto mútuo.",
      "Está incorreta: as forças de ação e reação ocorrem sempre em pares simultâneos e opostos em qualquer interação física, independentemente do peso da carga.",
      "Está incorreta: o lençol sob tração transmite forças de tensão e não de compressão mecânica para as mãos dos operadores."
    ],
    "nursingApplication": "Permite analisar as forças de preensão necessárias nos dedos para sustentar a tração sem deixar escapar o lençol."
  },
  {
    "id": 1426,
    "topicId": 1,
    "question": "Quando um utente se senta corretamente numa cadeira de rodas apoiando o dorso contra o encosto vertical, que par de ação-reação atua no plano horizontal entre o tronco e o encosto?",
    "options": [
      "Descer a rampa de costas (marcha a ré), com o enfermeiro posicionado na parte inferior para servir de anteparo e apoiar o peso com o corpo.",
      "Descer de frente a passo largo rápido para aproveitar a energia cinética acumulada e vencer a rampa com maior brevidade.",
      "Destravar todos os sistemas de travagem e deixar a cadeira rolar livremente, confiando na resistência aerodinâmica do habitáculo.",
      "Pedir ao utente que estique os braços para os lados para criar arrasto de ar que trave a descida ao longo da rampa hospitalar."
    ],
    "correctIndex": 2,
    "explanation": "A interação de contacto entre o dorso e o encosto é um par de ação e reação que fornece suporte postural anterior-posterior ao tronco.",
    "distractorAnalysis": [
      "Está incorreta: descer de frente numa rampa acentuada coloca o doente em risco de ejeção frontal inercial por travagem imprevista.",
      "Está incorreta: soltar a cadeira em descida livre gera aceleração descontrolada (a = g·sen θ), culminando em impacto violento e traumatismo grave.",
      "Está incorreta: o arrasto aerodinâmico à velocidade de marcha humana é insignificante e ineficaz para controlar a descida de uma cadeira com carga."
    ],
    "nursingApplication": "Ensina a avaliar a acomodação ergonómica do dorso e o suporte postural em cadeiras de rodas adaptadas."
  },
  {
    "id": 1427,
    "topicId": 1,
    "question": "Na ventilação mecânica invasiva por pressão positiva, como se manifesta a 3.ª Lei de Newton durante a fase de insuflação inspiratória?",
    "options": [
      "O ventilador cria uma pressão negativa na traqueia e os pulmões empurram ativamente o ar para o circuito respiratório externo.",
      "A pressão positiva insufla os pulmões sem qualquer força de reação mecânica dos alvéolos devido à presença do surfactante.",
      "A caixa torácica expande-se por ação muscular reflexa ativa anulando a pressão exercida pelo fluxo gasoso do equipamento.",
      "O ventilador empurra o ar para dentro exercendo pressão positiva nos pulmões; a parede torácica e parênquima resistem e reagem elasticamente."
    ],
    "correctIndex": 3,
    "explanation": "A expansão pulmonar decorre de trabalho de deformação mecânica: o ventilador exerce força sobre os alvéolos e as forças elásticas torácicas opõem-se à distensão.",
    "distractorAnalysis": [
      "Está incorreta: a ventilação mecânica moderna habitual baseia-se em pressão positiva na via aérea e não em vácuo subatmosférico traqueal.",
      "Está incorreta: toda a força insufladora encontra resistência mecânica e elástica dos tecidos pulmonares (3.ª Lei de Newton).",
      "Está incorreta: em doentes sob ventilação controlada ou sedados, a expansão torácica é passiva sob ação da pressão do ventilador."
    ],
    "nursingApplication": "Permite ao enfermeiro de cuidados intensivos compreender a mecânica pulmonar e os alarmes de pressão de pico no ventilador."
  },
  {
    "id": 1428,
    "topicId": 1,
    "question": "A administração de toxina botulínica em músculos hiperativos atua bloqueando a libertação de acetilcolina na placa motora. Qual é a repercussão biomecânica nas forças do par ação-reação muscular?",
    "options": [
      "Porque o enfermeiro posicionado na retaguarda aplica a força motriz principal na linha de marcha, enquanto o profissional à frente orienta e controla a trajetória nos corredores.",
      "Porque ambos os enfermeiros devem puxar a maca a partir da frente para somar as suas energias cinéticas na mesma direção exata.",
      "Porque a posição lateral dos dois cuidadores reduz a força de atrito das rodas através do aumento da estabilidade angular do chassi.",
      "Porque puxar a maca de costas pela frente permite que o cuidador utilize a força dos músculos cervicais para acelerar o conjunto."
    ],
    "correctIndex": 1,
    "explanation": "Ao reduzir o tónus muscular patológico, diminui-se a tração tendinosa e a força de reação articular de compressão, prevenindo contraturas fixas.",
    "distractorAnalysis": [
      "Está incorreta: puxar ambos pela frente dificulta a visibilidade do percurso e impede a aplicação eficiente de forças horizontais de empurrão.",
      "Está incorreta: caminhar de lado junto à maca cria torções posturais na coluna lombar e reduz o controlo direcional nas curvas dos corredores.",
      "Está incorreta: a força motriz deve ser gerada pelos grandes grupos musculares dos membros inferiores e glúteos em empurrão, e não pela coluna cervical."
    ],
    "nursingApplication": "Permite ao enfermeiro associar a terapêutica farmacológica neuromuscular aos objetivos biomecânicos da reabilitação postural."
  },
  {
    "id": 1429,
    "topicId": 1,
    "question": "Num utente vítima de traumatismo colocado em decúbito dorsal sobre uma prancha rígida espinal, que par de ação-reação atua entre a região occipital do crânio e a prancha rígida?",
    "options": [
      "A força de atrito estático que os sapatos do enfermeiro exercem contra o piso, permitindo a tração de propulsão sem escorregar.",
      "A força de sucção pneumática que o ar do corredor hospitalar exerce sobre a superfície frontal da maca em movimento retilíneo.",
      "A força gravitacional atrativa exercida pela parede ao fundo do corredor que atrai a massa metálica da maca para a frente.",
      "A força de compressão elástica exercida pelo colchão de espuma que empurra a estrutura da maca para diante de forma contínua."
    ],
    "correctIndex": 2,
    "explanation": "A interação de contacto entre a cabeça e a prancha de madeira ou polietileno obedece à 3.ª Lei: forças normais de suporte iguais e opostas em corpos distintos.",
    "distractorAnalysis": [
      "Está incorreta: o enfermeiro empurra o solo para trás com os pés e o solo reage para a frente com atrito estático propulsor (3.ª Lei de Newton).",
      "Está incorreta: a resistência do ar é uma força de arrasto que se opõe ao movimento e não uma força propulsora que puxe a maca para a frente.",
      "Está incorreta: a atração gravitacional entre a parede e a maca é infinitesimalmente desprezável no contexto da mecânica hospitalar."
    ],
    "nursingApplication": "Orienta a correta colocação de acolchoamento sob a cabeça de utentes idosos cifóticos para não forçar a coluna cervical em hiperextensão na prancha."
  },
  {
    "id": 1430,
    "topicId": 1,
    "question": "A bomba de compressão pneumática intermitente (sequencial) utilizada na profilaxia da trombose venosa profunda opera com base em:",
    "options": [
      "A compressão sequencial das câmaras pneumáticas aplica uma força de gradiente distal-proximal que esvazia as veias profundas.",
      "As câmaras de ar aquecem as extremidades inferiores para acelerar a velocidade molecular de circulação do sangue arterial.",
      "A bomba gera ondas de choque acústicas que destroem mecanicamente todas as células de gordura subcutânea das pernas.",
      "A manga de compressão anula a inércia dos eritrócitos através da aplicação de pressões estáticas constantes e homogéneas."
    ],
    "correctIndex": 0,
    "explanation": "A insuflação sequencial produz uma onda peristáltica de compressão e força de reação (3.ª Lei) que mimetiza a ação da bomba muscular da barriga da perna.",
    "distractorAnalysis": [
      "Está incorreta: os dispositivos de compressão pneumática intermitente utilizam ar comprimido à temperatura ambiente e visam o retorno venoso.",
      "Está incorreta: o mecanismo de ação assenta em pressões mecânicas suaves e graduadas de ordenha vascular e não em ondas de choque líticas.",
      "Está incorreta: as pressões são sequenciais e intermitentes (ciclos de insuflação e deflação) mimetizando a bomba muscular dos gémeos na marcha."
    ],
    "nursingApplication": "Competência de enfermagem na instalação e monitorização de dispositivos pneumáticos de compressão intermitente no bloco operatório e UCI."
  },
  {
    "id": 1431,
    "topicId": 1,
    "question": "Quando um doente em recuperação segura com firmeza uma barra de apoio na parede da casa de banho e puxa para se levantar, a barra exerce sobre as mãos:",
    "options": [
      "Nenhuma força mecânica ativa, visto que as estruturas metálicas fixas à parede são passivas e não geram trabalho biomecânico mensurável.",
      "Uma força vertical de sustentação invariavelmente igual ao peso corporal integral do doente, independentemente do esforço exercido na barra.",
      "Uma força com a mesma intensidade e no mesmo sentido da tração do doente, atuando conjuntamente para impulsionar o tronco para cima.",
      "Uma força de reação de igual intensidade e sentido oposto à força que o doente aplica na barra (par ação-reação doente-barra)."
    ],
    "correctIndex": 3,
    "explanation": "Pela 3.ª Lei: |F_barra->mãos| = |F_mãos->barra|. A barra ancorada na parede devolve exatamente a força de suporte que o doente necessita para equilibrar o corpo.",
    "distractorAnalysis": [
      "Está incorreta: pela terceira lei de Newton, qualquer superfície que sofre uma força exerce instantaneamente uma força de reação de igual módulo.",
      "Está incorreta: a força exercida pela barra depende exclusivamente da força de tração aplicada pelas mãos, não do peso corporal total.",
      "Está incorreta: as forças de um par ação-reação têm obrigatoriamente a mesma direção mas sentidos opostos, nunca o mesmo sentido."
    ],
    "nursingApplication": "Demonstra a importância da correta fixação de barras de apoio em paredes sólidas com buchas e parafusos adequados."
  },
  {
    "id": 1432,
    "topicId": 1,
    "question": "Por que é incorreto afirmar que a força de reação da 3.ª Lei serve para equilibrar a força de ação?",
    "options": [
      "Porque a força de reação é sempre aplicada no mesmo corpo onde se aplicou a ação, somando-se à força inicial.",
      "Porque a força de reação surge apenas se o corpo atingido for de maior massa do que o corpo que iniciou a ação mecânica.",
      "Porque a ação e a reação ocorrem em simultâneo no tempo e constituem partes indissociáveis da mesma interação mútua entre dois corpos.",
      "Porque a 3.ª Lei de Newton só é válida quando os corpos se encontram em repouso absoluto no vácuo perfeito."
    ],
    "correctIndex": 2,
    "explanation": "Equilíbrio refere-se a um corpo individual isolado (∑F = 0); ação e reação descrevem a interação entre dois corpos distintos.",
    "distractorAnalysis": [
      "Está incorreta: as forças de ação e reação atuam em corpos diferentes e não no mesmo corpo, nunca se somando no mesmo DCL.",
      "Está incorreta: a 3.ª Lei é universal e atua entre quaisquer dois corpos materiais em interação, independentemente das massas relativas.",
      "Está incorreta: a 3.ª Lei é perfeitamente válida tanto no repouso como no movimento acelerado, no vácuo ou em qualquer meio material."
    ],
    "nursingApplication": "Resolve uma das maiores confusões conceituais que persistem entre estudantes de ciências da saúde."
  },
  {
    "id": 1433,
    "topicId": 1,
    "question": "Em resumo, a compreensão rigorosa dos vetores, da 1.ª, 2.ª e 3.ª Leis de Newton e do equilíbrio prepara o futuro enfermeiro para:",
    "options": [
      "Calibrar equipamentos eletrónicos de diagnóstico por imagem e substituir peças de desgaste mecânico em monitores cardíacos sem necessidade de recurso a serviços de engenharia biomédica.",
      "Realizar a elevação manual e o transporte de qualquer utente dependente sem recorrer a gruas ou ajudas técnicas, prescindindo de limites de carga através da mera força de vontade pessoal.",
      "Aplicar protocolos de tração esquelética invasiva no bloco operatório e substituir as equipas médicas na fixação cirúrgica primária de fraturas complexas de ossos longos dos membros.",
      "Prestar cuidados de excelência com fundamentação científica sólida, prevenindo lesões nos doentes, protegendo a sua própria integridade musculoesquelética e otimizando o transporte seguro em saúde."
    ],
    "correctIndex": 3,
    "explanation": "A física para enfermagem não visa transformar o enfermeiro em engenheiro mecânico, mas capacitar o profissional com competências biomecânicas indispensáveis ao cuidar seguro.",
    "distractorAnalysis": [
      "Está incorreta: a manutenção e calibração interna de circuitos eletrónicos hospitalares são competências da engenharia biomédica e não da enfermagem clínica.",
      "Está incorreta: a biomecânica ensina precisamente os limites de tolerância das estruturas biológicas e a necessidade imperativa de usar equipamentos mecânicos auxiliares.",
      "Está incorreta: o conhecimento biofísico alicerça a ergonomia e prevenção postural do enfermeiro em todas as áreas clínicas, não a realização de atos cirúrgicos privativos."
    ],
    "nursingApplication": "Conclui com chave de ouro o domínio conceptual das Leis de Newton no Módulo de Mecânica e Biofísica para Enfermagem."
  },
  {
    "id": 1434,
    "topicId": 1,
    "question": "Ao aplicar uma tala de imobilização extensora do joelho, o objetivo biomecânico imediato é:",
    "options": [
      "Substituir externamente a função estabilizadora do quadríceps, mantendo o joelho em extensão e prevenindo a flexão involuntária.",
      "Aumentar a aceleração gravitacional local na perna para acelerar a regeneração do tendão roturado.",
      "Interromper a transmissão da 3.ª Lei de Newton entre o pé do utente e a superfície do piso hospitalar.",
      "Comprimir as artérias poplíteas para anular a pressão arterial distal durante o transporte em cadeira."
    ],
    "correctIndex": 0,
    "explanation": "A tala mantém a linha articular travada em extensão neutra, impedindo que o peso do corpo dobre o joelho instável.",
    "distractorAnalysis": [
      "Está incorreta: A gravidade é uma constante física local e não é alterada por imobilizadores ou ortóteses.",
      "Está incorreta: As leis de Newton atuam universalmente e não são interrompidas pelo uso de talas mecânicas.",
      "Está incorreta: A tala deve garantir alinhamento sem comprimir vasos sanguíneos ou nervos periféricos (verificar pulso distal!)."
    ],
    "nursingApplication": "O enfermeiro monitoriza o pulso pedioso e a sensibilidade distal para garantir que a tala não causa compressão vascular."
  },
  {
    "id": 1435,
    "topicId": 1,
    "question": "Se três enfermeiros sustentarem um membro inferior fraturado em repouso aplicando forças que equilibram o seu peso, qual é a aceleração do membro?",
    "options": [
      "9,8 m/s², pois todos os corpos biológicos aceleram obrigatoriamente para baixo mesmo quando sustentados no ar.",
      "3 m/s², que resulta da divisão da aceleração gravitacional pelo número de profissionais envolvidos na manobra.",
      "0 m/s², uma vez que a condição de resultante nula (∑F = 0) impõe aceleração estritamente zero pela 1.ª Lei de Newton.",
      "19,6 m/s², correspondendo à duplicação da gravidade provocada pelo contacto manual da equipa de saúde."
    ],
    "correctIndex": 2,
    "explanation": "Estando em equilíbrio de forças (sustentação estável), ∑F = 0 ⇒ a = 0 m/s². O membro permanece imóvel no espaço.",
    "distractorAnalysis": [
      "Está incorreta: A gravidade atua, mas a sua aceleração só se manifesta em queda livre; quando sustentado, a aceleração é nula.",
      "Está incorreta: A aceleração não se divide pelo número de operadores; o equilíbrio de forças anula a aceleração global.",
      "Está incorreta: O contacto das mãos não duplica a gravidade local da Terra."
    ],
    "nursingApplication": "A imobilização perfeita com aceleração nula previne dor aguda e novos desvios dos fragmentos ósseos na fratura."
  },
  {
    "id": 1436,
    "topicId": 1,
    "question": "Porque é que um doente com fratura óssea instável dos membros inferiores deve ser imobilizado com tala antes de qualquer transporte?",
    "options": [
      "Para aumentar a temperatura do foco de fratura até 45 graus Celsius para acelerar a formação precoce do calo ósseo.",
      "Para que os fragmentos ósseos não se desloquem uns em relação aos outros por inércia durante as manobras e trepidações da maca.",
      "Para permitir que a aceleração gravítica local seja reduzida a zero ao longo de todo o membro fraturado.",
      "Para converter a dor mecânica em energia eletrostática absorvida pelas ligaduras de gaze estéril."
    ],
    "correctIndex": 1,
    "explanation": "A inércia faria os fragmentos ósseos soltos moverem-se com as acelerações da maca, lacerando vasos sanguíneos e nervos adjacentes.",
    "distractorAnalysis": [
      "Está incorreta: O foco de fratura não deve ser aquecido a 45 °C; a imobilização visa estabilidade mecânica e analgesia.",
      "Está incorreta: A gravidade atua continuamente; a tala distribui as forças de suporte mantendo o alinhamento axial.",
      "Está incorreta: A dor é um fenómeno neurofisiológico e não se converte em energia eletrostática em ligaduras de gaze."
    ],
    "nursingApplication": "A imobilização rígida provisória de fraturas é um procedimento fundamental de suporte pré-hospitalar e hospitalar."
  },
  {
    "id": 1437,
    "topicId": 1,
    "question": "Se no DCL de um membro inferior imobilizado num estrado ortopédico a soma vetorial de todas as forças for nula (∑Fx = 0 e ∑Fy = 0), qual é a conclusão física?",
    "options": [
      "A tração ortopédica é totalmente ineficaz, pois para haver alinhamento ósseo a resultante das forças deve ter módulo positivo.",
      "O membro encontra-se em equilíbrio estático perfeito, mantendo a sua posição de imobilização sem acelerar em nenhuma direção.",
      "O membro desenvolverá uma aceleração linear constante ao longo do cabo de tração para vencer o atrito residual das roldanas do estrado.",
      "O sistema está em equilíbrio dinâmico instável, exigindo deslizamento contínuo dos tecidos moles para manter a redução da fratura."
    ],
    "correctIndex": 1,
    "explanation": "Pela 1.ª e 2.ª Leis: se ∑F = 0, então a aceleração resultante é zero (a = 0); se estava em repouso, permanece imóvel em repouso estático estável.",
    "distractorAnalysis": [
      "Está incorreta: o objetivo da tração terapêutica é atingir o equilíbrio com resultante nula, alinhando os segmentos ósseos sem gerar aceleração.",
      "Está incorreta: se a resultante das forças é estritamente nula, a aceleração resultante é zero, não ocorrendo movimento ao longo dos cabos.",
      "Está incorreta: a imobilização ortopédica visa o repouso absoluto (equilíbrio estático); qualquer deslizamento contínuo impediria a consolidação."
    ],
    "nursingApplication": "Valida o alinhamento de trações de alinhamento em contexto de internamento cirúrgico de ortopedia."
  },
  {
    "id": 1438,
    "topicId": 1,
    "question": "Como se define cientificamente um estado de Equilíbrio Estável (Stable Equilibrium)?",
    "options": [
      "É o estado mecânico em que o corpo permanece absolutamente imóvel mesmo quando sujeito a forças externas assimétricas de magnitude muito superior à sua massa inercial total.",
      "É a condição física em que qualquer perturbação externa provoca um deslocamento progressivo e irreversível do centro de gravidade, sem retorno à posição original de sustentação.",
      "É a configuração postural em que as forças restauradoras atuam no mesmo sentido do desvio inicial, amplificando o afastamento do corpo em relação ao ponto de referência anatómico.",
      "É o estado em que, após um pequeno deslocamento ou perturbação externa, surgem forças ou momentos restauradores que fazem o corpo retornar espontaneamente à sua posição de equilíbrio inicial."
    ],
    "correctIndex": 3,
    "explanation": "No equilíbrio estável, o sistema reage à perturbação gerando forças em sentido contrário ao afastamento (ex: pêndulo que regressa ao centro).",
    "distractorAnalysis": [
      "Está incorreta: nenhum corpo permanece imóvel perante forças externas desequilibradas de grande magnitude; a estabilidade define a capacidade de retornar após pequenas perturbações.",
      "Está incorreta: o deslocamento progressivo e irreversível sem forças de retorno caracteriza o equilíbrio instável, e não o equilíbrio estável.",
      "Está incorreta: no equilíbrio estável as forças ou momentos gerados são restauradores, atuando em sentido oposto ao desvio para restabelecer a postura inicial."
    ],
    "nursingApplication": "Conceito cardeal para desenhar posturas no leito e dispositivos de apoio que mantenham o doente seguro."
  },
  {
    "id": 1439,
    "topicId": 1,
    "question": "O que acontece à energia potencial gravitacional (Ep) de um corpo em equilíbrio estável quando este sofre uma pequena perturbação?",
    "options": [
      "A energia potencial gravítica aumenta (é mínima no equilíbrio estável), pelo que o sistema tende a retornar ao estado de menor energia.",
      "A energia potencial gravitacional diminui continuamente até atingir valores negativos sem qualquer limite inferior físico mensurável.",
      "A energia potencial anula-se de imediato, convertendo-se em energia eletrostática que repele a superfície de apoio hospitalar.",
      "A energia potencial permanece rigorosamente constante e invariável em qualquer perturbação angular do corpo extenso no espaço."
    ],
    "correctIndex": 0,
    "explanation": "Posição estável = poço de potencial (mínimo de Ep). Qualquer perturbação eleva ligeiramente o centro de gravidade (ΔEp > 0), gerando força restauradora descendente.",
    "distractorAnalysis": [
      "Está incorreta: no equilíbrio estável o centro de gravidade está no ponto mais baixo; qualquer inclinação eleva o CG e aumenta a energia Ep = m·g·h.",
      "Está incorreta: a energia mecânica dissipa-se por atrito de amortecimento e não por conversões eletrostáticas de repulsão superficial.",
      "Está incorreta: a energia potencial constante em todas as posições adjacentes caracteriza o equilíbrio indiferente e não o estável."
    ],
    "nursingApplication": "Conecta o princípio biomecânico da estabilidade ao princípio universal da física da minimização da energia potencial."
  },
  {
    "id": 1440,
    "topicId": 1,
    "question": "Qual dos seguintes exemplos clínicos melhor ilustra um estado de Equilíbrio Estável em enfermagem?",
    "options": [
      "Um utente idoso frágil a tentar equilibrar-se num só pé com os olhos vendados no corredor da enfermaria de medicina.",
      "Um doente deitado confortavelmente no centro de uma cama hospitalar plana com as grades laterais de proteção elevadas.",
      "Um carrinho de emergência parado numa rampa inclinada com os quatro travões de rodízio totalmente desativados.",
      "Um doente com hipotensão ortostática aguda sentado na borda do leito sem apoio para os membros superiores ou pés."
    ],
    "correctIndex": 1,
    "explanation": "Se o doente se mexer ligeiramente no centro do leito plano, as forças de suporte e a gravidade mantêm-no acomodado com segurança na mesma posição estável.",
    "distractorAnalysis": [
      "Está incorreta: o apoio unipodal sem visão é um estado de equilíbrio altamente instável com elevado risco iminente de queda.",
      "Está incorreta: um carrinho solto numa rampa encontra-se em equilíbrio instável (ou aceleração descendente não equilibrada).",
      "Está incorreta: sentar à borda do leito com tonturas e sem apoio reduz a base e eleva o centro de gravidade, sendo uma condição instável."
    ],
    "nursingApplication": "Ensina o enfermeiro a identificar e criar ambientes de repouso com máxima estabilidade passiva para utentes vulneráveis."
  },
  {
    "id": 1441,
    "topicId": 1,
    "question": "O que acontece à energia potencial gravitacional (Ep) de um corpo que se encontra em equilíbrio instável quando sofre uma perturbação?",
    "options": [
      "A energia potencial gravitacional aumenta progressivamente, pois o centro de gravidade eleva-se no espaço à medida que o corpo se inclina para além do bordo da sua base de apoio.",
      "A energia potencial gravitacional DIMINUI (o ponto de equilíbrio instável corresponde a um máximo local de Ep), fazendo o corpo cair espontaneamente para um estado de menor energia.",
      "A energia potencial gravitacional permanece rigorosamente inalterada, uma vez que a energia mecânica total se converte instantaneamente em calor radiante pelas superfícies de contacto.",
      "A energia potencial gravitacional oscila de forma sinusoidal periódica entre valores positivos e negativos sem que o centro de gravidade mude a sua coordenada vertical de repouso."
    ],
    "correctIndex": 1,
    "explanation": "Equilíbrio instável = pico de potencial (máximo de Ep). Qualquer desvio faz o centro de gravidade descer (ΔEp < 0), acelerando a queda espontânea.",
    "distractorAnalysis": [
      "Está incorreta: no equilíbrio instável o ponto inicial corresponde a um máximo local de Ep; quando sofre perturbação o centro de gravidade desce, reduzindo a energia potencial.",
      "Está incorreta: a energia potencial gravitacional varia diretamente com a altitude do centro de gravidade (Ep = m·g·h); a descida do CG implica diminuição real de Ep.",
      "Está incorreta: a inclinação num sistema instável gera uma queda unidirecional acelerada pela gravidade até ao impacto, e não uma oscilação contínua."
    ],
    "nursingApplication": "Explica porque as quedas de doentes ocorrem tão rapidamente e com tanta violência uma vez ultrapassado o limiar de estabilidade."
  },
  {
    "id": 1442,
    "topicId": 1,
    "question": "Qual das seguintes situações representa um exemplo clássico de Equilíbrio Instável na prática hospitalar de enfermagem?",
    "options": [
      "Um doente em decúbito dorsal plano no leito com a cabeceira a zero graus e grades laterais de segurança elevadas e travadas.",
      "Um utente confortavelmente sentado numa poltrona com as plantas dos pés apoiadas no piso e antebraços assentes nos apoios.",
      "Um doente idoso confuso que se coloca de pé descalço na ponta de um só pé na borda do leito tentando alcançar a campainha no escuro.",
      "Uma cadeira de rodas com os travões acionados nas quatro rodas, suporte de pés rebatido e o cinto de contenção pélvica ajustado."
    ],
    "correctIndex": 2,
    "explanation": "Base de sustentação minúscula (apenas a ponta de um pé) e centro de gravidade elevado geram uma configuração altamente instável: a menor hesitação provoca queda desamparada.",
    "distractorAnalysis": [
      "Está incorreta: o decúbito dorsal plano com grades representa uma condição de altíssima estabilidade mecânica, e não equilíbrio instável.",
      "Está incorreta: a posição sentada com pés no chão e apoio de braços tem centro de gravidade baixo e base ampla, sendo muito estável.",
      "Está incorreta: cadeira travada e cinto pélvico proporcionam sustentação e apoio mecânico estáveis, prevenindo desequilíbrios posturais."
    ],
    "nursingApplication": "Destaca o cenário típico de alerta vermelho para acidentes que o enfermeiro deve evitar ativamente nos serviços."
  },
  {
    "id": 1443,
    "topicId": 1,
    "question": "Qual é a atitude imediata e prioritária do enfermeiro ao identificar um doente acamado em postura de equilíbrio instável à borda do leito?",
    "options": [
      "Aproximar-se imediatamente, fornecer apoio e estabilização física com o próprio corpo (atuando como força restauradora externa) e reposicionar o doente em segurança no centro do leito.",
      "Afastar-se rapidamente para o corredor de modo a acionar a campainha de emergência geral, evitando qualquer contacto físico direto com o doente antes da chegada da equipa médica.",
      "Instruir verbalmente o doente a permanecer imóvel enquanto o profissional se dirige à sala de enfermagem para requisitar uma poltrona ergonómica de transferência e contenção mecânica.",
      "Elevar de imediato a cabeceira da cama para um ângulo vertical de noventa graus, na expetativa de que a força da gravidade fixe a coluna do utente contra o colchão articulado do leito."
    ],
    "correctIndex": 0,
    "explanation": "A intervenção de enfermagem precoce e presencial quebra o ciclo mecânico da queda antes que a linha de gravidade saia definitivamente da base de sustentação.",
    "distractorAnalysis": [
      "Está incorreta: afastar-se e abandonar o doente em equilíbrio instável à borda da cama culminará na sua queda antes de qualquer socorro chegar.",
      "Está incorreta: um doente instável na borda não tem capacidade de manter a posição apenas com comandos verbais; a contenção presencial imediata é prioritária.",
      "Está incorreta: verticalizar a cabeceira aumentaria o momento de flexão anterior do tronco, projetando o centro de gravidade ainda mais para fora do colchão."
    ],
    "nursingApplication": "Define o papel proativo do enfermeiro como agente protetor biomecânico ativo do doente internado."
  },
  {
    "id": 1444,
    "topicId": 1,
    "question": "Como se define fisicamente o estado de Equilíbrio Indiferente ou Neutro (Neutral Equilibrium)?",
    "options": [
      "É o estado em que o corpo tomba violentamente perante qualquer perturbação infinitesimal por não ter base de sustentação.",
      "É o estado em que, após sofrer um deslocamento, o corpo permanece em equilíbrio na nova posição, sem tender a voltar nem a afastar-se.",
      "É a situação em que as forças aplicadas aumentam proporcionalmente ao tempo até provocarem a fratura plástica do material de suporte.",
      "É o regime mecânico no qual o centro de gravidade oscila indefinidamente sem nunca encontrar uma posição de repouso no espaço."
    ],
    "correctIndex": 1,
    "explanation": "No equilíbrio indiferente, qualquer posição de vizinhança é igualmente uma posição de equilíbrio mecânico (∑F = 0 e a = 0).",
    "distractorAnalysis": [
      "Está incorreta: o tombamento espontâneo perante perturbações mínimas é a definição do equilíbrio instável e não do equilíbrio indiferente.",
      "Está incorreta: o equilíbrio indiferente não gera forças internas crescentes de fratura, mantendo a resultante e o momento nulos.",
      "Está incorreta: a oscilação perpétua sem atrito é uma abstração ideal; no equilíbrio indiferente o corpo imobiliza-se na nova posição."
    ],
    "nursingApplication": "Permite ao profissional compreender o comportamento de objetos rolantes e móveis hospitalares planos."
  },
  {
    "id": 1445,
    "topicId": 1,
    "question": "O que acontece à energia potencial gravitacional (Ep) e à altura do centro de gravidade (CG) de um corpo durante o deslocamento num Equilíbrio Indiferente?",
    "options": [
      "A altura do centro de gravidade eleva-se progressivamente e a energia potencial atinge um máximo que gera torque restaurador constante.",
      "A altura do centro de gravidade desce de forma contínua e a energia potencial diminui até ao limite mínimo de capotamento articular.",
      "A altura do centro de gravidade mantém-se rigorosamente constante e a energia potencial gravitacional permanece invariável (Ep = constante, dEp/dx = 0).",
      "A energia potencial dissipa-se espontaneamente enquanto o centro de gravidade descreve uma trajetória parabólica acima do apoio."
    ],
    "correctIndex": 2,
    "explanation": "Como o CG se move estritamente num plano horizontal paralelo ao solo, h não varia e Ep = m·g·h permanece constante em qualquer posição.",
    "distractorAnalysis": [
      "Está incorreta: no equilíbrio indiferente (como uma bola num plano ou uma maca em piso plano) a altura do CG não se eleva ao mover-se.",
      "Está incorreta: se a altura descesse e a energia potencial diminuísse progressivamente, o sistema estaria numa configuração de equilíbrio instável.",
      "Está incorreta: a trajetória do CG no equilíbrio indiferente é retilínea horizontal, mantendo a energia potencial gravitacional estritamente constante."
    ],
    "nursingApplication": "Conceito físico de grande precisão analítica: na posição neutra, a derivada da energia potencial é identicamente nula em todos os pontos."
  },
  {
    "id": 1446,
    "topicId": 1,
    "question": "Qual dos seguintes exemplos clássicos da física melhor representa o Equilíbrio Indiferente?",
    "options": [
      "Uma vassoura equilibrada na vertical sobre a ponta do cabo de madeira segurada por um dedo.",
      "Um bloco retangular pesado deitado sobre a sua base mais larga no chão de betão da garagem.",
      "Um pêndulo suspenso por um fio inextensível oscilando em redor da sua posição vertical.",
      "Uma esfera maciça perfeita ou um cilindro a rolar sobre uma mesa perfeitamente plana e horizontal."
    ],
    "correctIndex": 3,
    "explanation": "A esfera ou cilindro em piso horizontal mantém a altura do seu centro de gravidade constante em qualquer ponto: parada onde a colocarmos, fica em equilíbrio.",
    "distractorAnalysis": [
      "Está incorreta: Uma vassoura na vertical sobre o cabo é um exemplo notório de equilíbrio instável.",
      "Está incorreta: O bloco deitado sobre a base ampla é um exemplo clássico de equilíbrio estável.",
      "Está incorreta: O pêndulo em repouso no ponto mais baixo encontra-se em equilíbrio estável."
    ],
    "nursingApplication": "Fixa a imagem clássica do livro de texto que permite memorizar a trindade dos três tipos de equilíbrio."
  },
  {
    "id": 1447,
    "topicId": 1,
    "question": "Como varia a altitude do Centro de Gravidade (CG) de um corpo rígido quando este é ligeiramente perturbado nas três classes de equilíbrio?",
    "options": [
      "No Estável o CG desce; no Instável o CG sobe; no Indiferente o CG oscila continuamente para a frente e para trás.",
      "Em todas as três classes de equilíbrio o CG sobe exatamente à mesma taxa vertical para respeitar a conservação da energia mecânica.",
      "No Estável o CG sobe (Δh > 0); no Instável o CG desce (Δh < 0); no Indiferente o CG mantém-se à mesma altura (Δh = 0).",
      "O CG permanece invariável no Estável e sobe tanto no Instável como no Indiferente por efeito de inércia translacional dos tecidos."
    ],
    "correctIndex": 2,
    "explanation": "Critério mnemónico definitivo da mecânica: Estável = CG sobe ao perturbar; Instável = CG desce ao perturbar; Indiferente = CG mantém a cota.",
    "distractorAnalysis": [
      "Está incorreta: no equilíbrio estável o CG sobe na perturbação (exige trabalho resistente) e no instável desce no tombo.",
      "Está incorreta: as variações de altitude do CG dependem da geometria de rotação em torno dos pontos de apoio da base do corpo.",
      "Está incorreta: a estabilidade é caracterizada precisamente pelo aumento da altura do CG (Δh > 0) sob pequenas inclinações angulares."
    ],
    "nursingApplication": "Regra de ouro mnemónica indispensável para responder a qualquer questão teórica e prática de equilíbrio."
  },
  {
    "id": 1448,
    "topicId": 1,
    "question": "No caso do cone apoiado na sua base circular plana, porque é que ele se encontra em Equilíbrio Estável?",
    "options": [
      "Porque a base é ampla e o CG é baixo; ao incliná-lo, o CG é forçado a subir (Δh > 0) e o peso gera um momento que restaura a posição inicial.",
      "Porque a sua base circular anula completamente a força gravitacional da Terra através de um campo geométrico de simetria cónica.",
      "Porque a massa de um cone concentra-se exclusivamente no seu vértice superior, tornando a base imune a tombamentos laterais.",
      "Porque o coeficiente de atrito entre a base do cone e a mesa é infinito por definição teórica da estática dos corpos rígidos."
    ],
    "correctIndex": 0,
    "explanation": "Inclinando o cone até certo ângulo, a vertical que passa pelo CG continua a cair no interior do círculo da base, puxando o cone de volta à posição horizontal.",
    "distractorAnalysis": [
      "Está incorreta: a gravidade atua sobre todos os pontos materiais do cone com resultante no seu CG e não é cancelada pela geometria da base.",
      "Está incorreta: o centro de gravidade de um cone homogéneo localiza-se a 1/4 da altura a partir da base e não no vértice pontiagudo superior.",
      "Está incorreta: o atrito entre superfícies reais é finito; a estabilidade ao tombo depende do momento restaurador do peso e da largura da base."
    ],
    "nursingApplication": "Ilustra a anatomia de uma postura segura de repouso: base ampla e centro de gravidade próximo do suporte."
  },
  {
    "id": 1449,
    "topicId": 1,
    "question": "Sob o ponto de vista da física do equilíbrio, porque é que o Decúbito Dorsal horizontal (doente deitado de costas na cama plana) é a postura mais estável de todas no ambiente hospitalar?",
    "options": [
      "Porque maximiza a área da base de sustentação (todo o dorso em contacto com o leito) e minimiza a altura do Centro de Gravidade em relação ao plano de apoio (h mínimo).",
      "Porque anula integralmente a ação da aceleração da gravidade sobre o sistema musculoesquelético humano, permitindo que a pressão interna nos tecidos corporais atinja o valor zero.",
      "Porque a força de atrito estático entre as roupas e o colchão se torna muito superior ao peso do utente, travando completamente qualquer rotação voluntária dos membros corporais.",
      "Porque eleva o centro de massa até ao ponto mais alto compatível com as superfícies de apoio, convertendo a energia mecânica do corpo em equilíbrio puramente indiferente."
    ],
    "correctIndex": 0,
    "explanation": "Base de sustentação imensa + CG rebaixado e centrado = configuração ideal de Equilíbrio Estável, onde qualquer perturbação exige grande energia para tombar o corpo.",
    "distractorAnalysis": [
      "Está incorreta: a gravidade continua a atuar de forma constante na postura deitada; a estabilidade resulta da ampla área de apoio e da baixa altura do centro de gravidade.",
      "Está incorreta: o atrito entre o lençol e o corpo é finito e não impede pequenos movimentos nem dispensa a vigilância e os reposicionamentos periódicos.",
      "Está incorreta: o decúbito dorsal minimiza a altura do centro de gravidade (em vez de elevá-lo), garantindo uma configuração de equilíbrio estável robusto."
    ],
    "nursingApplication": "Explica porque é esta a posição de escolha para o repouso seguro de doentes inconscientes, sedados ou após cirurgias complexas."
  },
  {
    "id": 1450,
    "topicId": 1,
    "question": "Para transformar o decúbito lateral instável numa postura de Equilíbrio Estável seguro e confortável, onde deve o enfermeiro colocar almofadas de apoio postural?",
    "options": [
      "Colocar todas as almofadas empilhadas sob a região cervical para hiperestender o pescoço e bloquear os reflexos de rotação através da tensão muscular ligamentar posterior.",
      "Amarrar coxins rígidos em redor dos pulsos e tornozelos para exercer tração contínua contra as grades laterais, imobilizando o centro de gravidade num eixo puramente suspenso.",
      "Uma almofada ao longo do dorso (apoiando o tronco e impedindo a rotação para trás), outra entre os joelhos e tornozelos fletidos (alinhando a bacia) e um suporte no braço superior.",
      "Posicionar uma almofada pesada diretamente sobre o tórax do utente para aumentar o peso vertical e impedir mecanicamente qualquer alteração postural durante o repouso."
    ],
    "correctIndex": 2,
    "explanation": "As almofadas alargam artificialmente a base de sustentação biomecânica e fornecem forças normais laterais que impedem que a linha de gravidade saia da base de apoio.",
    "distractorAnalysis": [
      "Está incorreta: hiperestender a coluna cervical causa sobrecarga dolorosa e risco de lesão neuromuscular, além de não conferir estabilidade ao tronco inferior.",
      "Está incorreta: contenções de tração contra as grades são perigosas, violam princípios éticos e não promovem suporte fisiológico de equilíbrio aos tecidos.",
      "Está incorreta: colocar pesos sobre o tórax restringe severamente a mecânica ventilatória do doente, sem fornecer qualquer base de apoio aos segmentos posturais."
    ],
    "nursingApplication": "Técnica padronizada de posicionamento lateral a 30 graus, recomendada internacionalmente pelas diretrizes clínicas."
  },
  {
    "id": 1451,
    "topicId": 1,
    "question": "Quais são as características ergonómicas que tornam uma poltrona hospitalar de descanso um sistema de Equilíbrio Estável seguro para o utente?",
    "options": [
      "Assento extremamente elevado que deixe os pés suspensos no ar, encosto completamente flexível e rodízios permanentemente livres para facilitar o balanço livre do tronco.",
      "Ausência total de apoios laterais para os braços combinada com um estofamento excessivamente longo que obrigue o utente a escorregar a bacia até à extremidade anterior da poltrona.",
      "Base de suporte cónica com apoio único central rotativo sobre uma mola flexível, projetada para induzir oscilações constantes do centro de gravidade durante o repouso.",
      "Assento com altura adequada aos joelhos fletidos a 90°, encosto com apoio lombar, apoios laterais de braços estáveis e quatro pés antiderrapantes bem afastados no solo."
    ],
    "correctIndex": 3,
    "explanation": "Esta configuração maximiza a base de sustentação com quatro pontos fixos no solo, rebaixa o centro de gravidade e fornece apoios mecânicos para membros superiores e pés.",
    "distractorAnalysis": [
      "Está incorreta: assento alto com pés no ar e rodas soltas retira o apoio do solo e desestabiliza gravemente a postura do utente.",
      "Está incorreta: a falta de braços e o deslizamento da bacia diminuem a base de sustentação, sobrecarregam o sacro e culminam em quedas frontais.",
      "Está incorreta: um apoio cónico móvel cria equilíbrio instável, aumentando a fadiga muscular e o risco de tombamento em utentes débeis."
    ],
    "nursingApplication": "Critérios técnicos para a seleção do mobiliário de descanso e reabilitação em enfermarias hospitalares."
  },
  {
    "id": 1452,
    "topicId": 1,
    "question": "Para evitar a queda após um tropeçamento, que mecanismo neuromuscular reflexo e biomecânico o corpo saudável executa em milissegundos?",
    "options": [
      "A retração simultânea de ambos os membros inferiores contra o abdómen para rebaixar o centro de massa, permitindo que o tronco caia de joelhos de forma amortecida e controlada.",
      "A ativação exclusiva da musculatura cervical para puxar a cabeça com força para trás, anulando o momento de inércia do tronco sem necessidade de mover os membros inferiores no piso.",
      "O bloqueio rígido e em extensão de ambas as articulações dos joelhos para que o impacto frontal seja absorvido integralmente pelas estruturas ósseas dos tornozelos e metatarsos.",
      "A 'estratégia do passo de recuperação' (stepping strategy), lançando rapidamente o outro membro inferior para a frente com um passo largo para restabelecer a base de sustentação sob o CG avançado."
    ],
    "correctIndex": 3,
    "explanation": "Se o passo de recuperação for suficientemente rápido e longo, a nova base de sustentação 'apanha' a linha de gravidade em queda, restaurando o equilíbrio estável dinâmico.",
    "distractorAnalysis": [
      "Está incorreta: fletir ambas as pernas contra a bacia retiraria o apoio do solo, garantindo uma queda desamparada e violenta no pavimento.",
      "Está incorreta: a extensão da cabeça é insuficiente para neutralizar o momento linear do tronco pesado em avanço; a recuperação exige alargar a base com o passo.",
      "Está incorreta: travar os joelhos em extensão total impede o amortecimento e impede a execução rápida do passo salvador, agravando o impacto da queda."
    ],
    "nursingApplication": "Explica porque o treino da velocidade de reação motora do passo é um dos pilares mais eficazes da fisioterapia em idosos."
  },
  {
    "id": 1453,
    "topicId": 1,
    "question": "Para otimizar o equilíbrio de um utente com fraqueza muscular durante a higiene corporal no chuveiro, a intervenção de enfermagem mais eficaz é:",
    "options": [
      "Incentivar o doente a permanecer de pé num só pé durante a aplicação do sabonete líquido, promovendo o treino acelerado da proprioceção muscular sob piso molhado e ensaboado.",
      "Manter a água do chuveiro a temperaturas muito elevadas para provocar rigidez muscular súbita que endureça a estrutura dos membros inferiores durante a lavagem corporal.",
      "Retirar todos os tapetes antiderrapantes e barras de apoio do poliban para estimular a atenção visual do utente através do receio natural de escorregamento sobre a superfície.",
      "Promover a realização do banho na posição sentada numa cadeira de banho antiderrapante com encosto e apoios de braços, rebaixando o Centro de Gravidade e alargando a base de sustentação."
    ],
    "correctIndex": 3,
    "explanation": "Sentar o doente transforma uma postura de pé bípede altamente instável num equilíbrio estável seguro com quatro pernas de suporte e pés firmes no solo.",
    "distractorAnalysis": [
      "Está incorreta: apoiar-se num só pé em piso molhado reduz drasticamente o polígono de suporte e anula o atrito, culminando em queda grave.",
      "Está incorreta: água a temperaturas excessivas causa queimaduras térmicas graves e vasodilatação periférica intensa com hipotensão e risco de síncope.",
      "Está incorreta: a remoção de dispositivos de apoio e antiderrapantes elimina o atrito de segurança e expõe o doente débil a quedas traumáticas no banho."
    ],
    "nursingApplication": "Adaptação ergonómica basilar recomendada em planos de alta e reabilitação de utentes dependentes."
  },
  {
    "id": 1454,
    "topicId": 1,
    "question": "Como se sintetiza a importância integrada do estudo do Equilíbrio Translacional e dos seus Tipos (Estável, Instável e Indiferente) na profissão de enfermagem?",
    "options": [
      "Trata-se de um conhecimento puramente teórico e abstrato da física teórica que não possui qualquer aplicação útil no trabalho prático quotidiano de prestação de cuidados aos doentes internados no hospital.",
      "Constitui a base científica para compreender como o corpo humano e os equipamentos mantêm ou perdem a estabilidade, fundamentando intervenções clínicas de posicionamento, mobilização segura e prevenção de quedas.",
      "Serve exclusivamente para calcular a velocidade máxima permitida na condução de ambulâncias de transporte de doentes em autoestradas nacionais durante condições atmosféricas de chuva intensa ou nevoeiro.",
      "Tem como único propósito justificar a contenção física com correias em todos os doentes idosos internados, assegurando que o centro de gravidade corporal permaneça imobilizado no centro da cama hospitalar."
    ],
    "correctIndex": 1,
    "explanation": "A compreensão dos princípios do equilíbrio diferencia a prática de enfermagem fundamentada em evidência da prestação de cuidados desprovida de rigor científico de segurança.",
    "distractorAnalysis": [
      "Está incorreta: a biomecânica do equilíbrio é diretamente aplicável no planeamento de transferências seguras, ergonomia profissional e prevenção primária de quedas no internamento.",
      "Está incorreta: embora a dinâmica veicular envolva equilíbrio, a biotranslação humana e postural em contexto clínico é o núcleo essencial da formação e prática em enfermagem.",
      "Está incorreta: a física do equilíbrio orienta medidas preventivas e ergonómicas que visam precisamente promover a autonomia e segurança, e não justificar a imobilização arbitrária."
    ],
    "nursingApplication": "Consolida a formação científica e a competência técnica dos estudantes de licenciatura em Enfermagem."
  },
  {
    "id": 1455,
    "topicId": 1,
    "question": "Qual é a 'Intervenção de enfermagem recomendada' em ergonomia para garantir que a linha de gravidade se mantém centrada e estável durante a movimentação de cargas?",
    "options": [
      "Segurar a carga com os braços esticados para a frente.",
      "Manter a carga junto ao peito sem inclinar o tronco.",
      "Inclinar o tronco lateralmente ao levantar a carga.",
      "Transportar a carga equilibrada sobre um dos ombros."
    ],
    "correctIndex": 1,
    "explanation": "Critério de equilíbrio: 'Intervenção de enfermagem recomendada: Manter a carga junto ao peito sem inclinar o tronco'.",
    "distractorAnalysis": [
      "Está incorreta: esticar os braços afasta a carga do corpo, projetando a linha de gravidade para a frente da base de suporte.",
      "Está incorreta: inclinar o tronco desvia a linha de gravidade para os bordos da base, causando sobrecarga lombar assimétrica.",
      "Está incorreta: colocar cargas no ombro eleva o centro de gravidade e desvia lateralmente a projeção do peso corporal."
    ],
    "nursingApplication": "Memorização da intervenção de enfermagem formal fundamental na movimentação manual de cargas."
  },
  {
    "id": 1456,
    "topicId": 1,
    "question": "Num andarilho sem rodas (andarilho de passos fixo), qual é a sequência correta de marcha recomendada pelo enfermeiro?",
    "options": [
      "Avançar simultaneamente o membro são e o andarilho enquanto se mantém o membro afetado suspenso no ar, concluindo com um salto com os dois pés para a frente sem apoiar as ponteiras de borracha no piso hospitalar.",
      "Avançar primeiro o membro são até ultrapassar a linha frontal das pegas do andarilho, seguido do avanço do membro afetado e apenas no final levantar e posicionar o andarilho trinta centímetros atrás das costas.",
      "Levantar o andarilho com ambas as mãos durante a fase de apoio monopodal do membro lesionado, arremessando a estrutura para a frente e avançando ambos os pés em simultâneo com joelhos em extensão rígida total.",
      "Avançar o andarilho um passo curto para a frente e assentar os quatro apoios firmemente no chão; depois avançar o membro inferior afetado (ou mais fraco); e finalmente avançar o membro são para o interior do andarilho."
    ],
    "correctIndex": 3,
    "explanation": "Esta sequência garante que durante a fase de apoio unipodal e transferência de carga o doente conta com o suporte estável dos quatro pontos no solo.",
    "distractorAnalysis": [
      "Está incorreta: O andarilho deve ser posicionado com os quatro apoios firmes no solo antes de avançar qualquer membro, evitando saltos ou desequilíbrios.",
      "Está incorreta: Avançar o pé são à frente do andarilho deixa a linha de gravidade fora da base de suporte e desestabiliza completamente o dispositivo.",
      "Está incorreta: Levantar o andarilho durante o apoio monopodal do membro fraco elimina a base de suporte e induz a queda imediata do doente."
    ],
    "nursingApplication": "Sequência pedagógica padronizada de marcha com andarilho de apoios fixos."
  },
  {
    "id": 1457,
    "topicId": 1,
    "question": "No contexto biomecânico, qual é o 'ponto de aplicação' da força exercida pelo músculo bíceps braquial no antebraço?",
    "options": [
      "O epicôndilo medial do úmero, onde se originam os músculos flexores superficiais do carpo.",
      "A tuberosidade bicipital do rádio, onde o tendão distal do bíceps se insere firmemente na alavanca óssea.",
      "A extremidade distal das falanges distais dos dedos da mão que seguram um objeto pesado.",
      "A apófise estiloide da ulna na articulação radiocárpica junto ao retináculo dos extensores."
    ],
    "correctIndex": 1,
    "explanation": "O ponto de aplicação da força muscular é o local anatómico da inserção tendinosa no osso (tuberosidade do rádio).",
    "distractorAnalysis": [
      "Está incorreta: O epicôndilo medial é local de origem de outros músculos (epitrocleares), não da inserção do bíceps.",
      "Está incorreta: As falanges são o ponto de aplicação da resistência externa (objeto sustentado), não da potência do bíceps.",
      "Está incorreta: A apófise estiloide da ulna localiza-se no punho, distante da inserção funcional do bíceps braquial."
    ],
    "nursingApplication": "Conhecer a inserção do bíceps (a cerca de 5 a 8 cm do cotovelo) é fundamental para calcular o momento muscular gerado."
  },
  {
    "id": 1458,
    "topicId": 1,
    "question": "O que representa o 'módulo' ou 'intensidade' de um vetor força exercido pelo músculo deltoide na abdução do braço?",
    "options": [
      "A velocidade angular com que a articulação glenoumeral roda durante o arco de movimento voluntário.",
      "O ângulo exato formado pelo tendão com o plano horizontal no ponto de inserção umeral.",
      "O tempo total decorrido desde o início da despolarização da placa motora neuromuscular.",
      "A magnitude numérica do esforço contrátil, expressa em Newtons, independentemente da orientação espacial do segmento."
    ],
    "correctIndex": 3,
    "explanation": "O módulo é o valor escalar positivo que quantifica o tamanho ou magnitude da força (em Newtons).",
    "distractorAnalysis": [
      "Está incorreta: A velocidade angular é uma grandeza cinemática de rotação expressa em radianos por segundo.",
      "Está incorreta: O ângulo com o plano horizontal define a direção geométrica do vetor força, não o seu módulo.",
      "Está incorreta: O tempo de ativação é uma grandeza temporal neurofisiológica."
    ],
    "nursingApplication": "Permite quantificar se a contração muscular do deltoide é suficiente para vencer a resistência do peso do membro superior."
  },
  {
    "id": 1459,
    "topicId": 1,
    "question": "Ao puxar um lençol de transferência com os braços muito elevados (ângulo de 60° com a cama), o que acontece à força útil de deslizamento?",
    "options": [
      "A totalidade da força muscular aplicada (100%), uma vez que a orientação dos braços não altera o vetor útil de deslizamento.",
      "Cerca de 86,6% da força muscular aplicada, correspondendo diretamente ao cosseno de 60 graus segundo a análise trigonométrica.",
      "Aproximadamente 25% da força muscular exercida, dado que a componente horizontal diminui proporcionalmente ao quadrado do ângulo.",
      "Apenas metade da força exercida pelo enfermeiro (cos 60° = 0,5) é aproveitada para puxar horizontalmente o doente."
    ],
    "correctIndex": 3,
    "explanation": "Com ângulo de 60°, Fx = F·cos(60°) = 0,5·F. Metade do esforço é desperdiçado em puxar para cima sem deslizar o doente.",
    "distractorAnalysis": [
      "Está incorreta: a componente horizontal útil é modulada pelo cosseno do ângulo de tração (Fx = F·cos θ); a 60°, apenas 50% é útil.",
      "Está incorreta: o valor de 86,6% (0,866) corresponde ao seno de 60° (componente vertical de elevação Fy) e não à componente horizontal Fx.",
      "Está incorreta: a componente varia de forma linear com o cosseno do ângulo de tração (cos 60° = 0,50) e não com o quadrado do ângulo."
    ],
    "nursingApplication": "Manter os braços baixos e o lençol junto ao plano do leito (ângulo pequeno) poupa esforço e previne lombalgias."
  },
  {
    "id": 1460,
    "topicId": 1,
    "question": "Se o enfermeiro estivesse a segurar uma ampola de vidro na mão sem apoios no momento da travagem a 80 km/h, a ampola:",
    "options": [
      "Continua a deslocar-se para a frente a 80 km/h por inércia juntamente com a mão do profissional até ser travada.",
      "Cai imediatamente na vertical a uma velocidade de 300 km/h por cancelamento da gravidade ambiente.",
      "Fica suspensa no ar em repouso estático absoluto enquanto o veículo de emergência passa por debaixo dela.",
      "Converte a sua massa de vidro em energia térmica radioativa que emite calor para o interior da cabine."
    ],
    "correctIndex": 0,
    "explanation": "Todos os corpos no interior do veículo (enfermeiro, ampola, materiais) partilham a velocidade de 80 km/h e mantêm-na por inércia.",
    "distractorAnalysis": [
      "Está incorreta: A ampola continua com a velocidade horizontal de 80 km/h; a queda vertical combina-se em trajetória parabólica.",
      "Está incorreta: A ampola não fica parada no espaço; move-se para a frente à velocidade do veículo pré-travagem.",
      "Está incorreta: A inércia é uma propriedade mecânica que conserva o movimento, não ocorrendo reações térmicas radioativas."
    ],
    "nursingApplication": "Alerta para o perigo de manipular materiais perfurocortantes soltos em ambulâncias em marcha de emergência."
  },
  {
    "id": 1461,
    "topicId": 1,
    "question": "Qual é a consequência de tentar contrariar a inércia de um corpo a 80 km/h utilizando apenas a força muscular dos braços?",
    "options": [
      "A força muscular voluntária dos membros superiores é totalmente insuficiente para vencer o atrito estático de um doente adulto, tornando a mobilização manual impossível sem equipamentos.",
      "A força muscular dos membros superiores diminui a zero aos 45 minutos de esforço contínuo, tornando impossível completar qualquer transferência sem pausas obrigatórias.",
      "Os tendões dos membros superiores do enfermeiro rompem com forças superiores a 50 N, limitando a mobilização a utentes com peso inferior a 5 kg.",
      "A força de tração manual dos membros superiores é sempre perpendicular ao solo, pelo que não pode gerar qualquer deslocamento horizontal do doente."
    ],
    "correctIndex": 1,
    "explanation": "A desaceleração súbita a 80 km/h exige forças de milhares de Newtons (centenas de kgf), que excedem em muito a força de preensão humana.",
    "distractorAnalysis": [
      "Está incorreta: os músculos superiores conseguem gerar forças consideráveis, mas o problema biomecânico é a postura inadequada e a sobrecarga da coluna, não a ausência total de força.",
      "Está incorreta: a fadiga muscular não ocorre abruptamente a um tempo fixo de 45 minutos; depende da intensidade, e a limitação ergonómica é a lesão lombar, não a falência total dos membros superiores.",
      "Está incorreta: a força de tração muscular dos membros superiores não está restrita a 50 N; os tendões suportam forças muito maiores, e o vetor de tração pode ter componentes horizontais."
    ],
    "nursingApplication": "Nenhum profissional consegue 'segurar-se' com os braços numa colisão ou travagem brusca de emergência."
  },
  {
    "id": 1462,
    "topicId": 1,
    "question": "Se um doente for transportado com a cabeça voltada para a frente e a maca embater bruscamente numa porta fechada, qual é o risco biomecânico?",
    "options": [
      "O crânio do doente continua em movimento por inércia e colide diretamente contra o obstáculo, com risco de traumatismo cranioencefálico.",
      "O doente sofre uma redução espontânea da sua temperatura corporal para valores de hipotermia profunda.",
      "A força de atrito das rodas duplica instantaneamente, impedindo que qualquer impacto atinja a estrutura da maca.",
      "A pressão arterial sistólica do doente desce imediatamente a zero por despolarização inercial dos barorrecetores."
    ],
    "correctIndex": 0,
    "explanation": "Sem proteção frontal para a cabeça, a inércia projeta o crânio diretamente contra a porta ou parede no momento do impacto.",
    "distractorAnalysis": [
      "Está incorreta: A colisão mecânica causa trauma e lacerações teciduais, não hipotermia térmica espontânea.",
      "Está incorreta: O atrito das rodas com o piso não impede o choque inercial do corpo com superfícies rígidas à frente.",
      "Está incorreta: A pressão arterial não é despolarizada pela inércia; o perigo letal é a lesão cerebral traumática direta."
    ],
    "nursingApplication": "Reforça a regra clássica de enfermagem: doente na maca viaja com os pés para a frente (exceto no interior de elevadores estreitos)."
  },
  {
    "id": 1463,
    "topicId": 1,
    "question": "Se um enfermeiro travar uma maca de forma brusca mantendo a coluna fletida e os membros inferiores estendidos, que lesão biomecânica arrisca?",
    "options": [
      "Fratura espontânea de todos os ossos do carpo por perda instantânea de cálcio induzida pelo impacto mecânico.",
      "Sobrecarga compressiva e de cisalhamento nos discos intervertebrais lombares por transferência inadequada da força inercial da maca.",
      "Despolarização irreversível dos barorrecetores carotídeos com paragem permanente da circulação sistémica.",
      "Transformação do tecido conjuntivo dos tendões em tecido adiposo vascularizado em menos de um segundo."
    ],
    "correctIndex": 1,
    "explanation": "A inércia da maca transfere uma força de compressão para os braços que, com a coluna fletida, atua com grande momento nos discos lombares.",
    "distractorAnalysis": [
      "Está incorreta: A desaceleração mecânica de uma maca não provoca fraturas osteoporóticas imediatas no carpo de um adulto saudável.",
      "Está incorreta: Barorrecetores não sofrem paragem permanente por forças normais de travagem de equipamentos hospitalares.",
      "Está incorreta: Tendões não se convertem em gordura em frações de segundo; o risco é a dor lombar mecânica e hérnia discal."
    ],
    "nursingApplication": "Lombalgias ocupacionais em enfermagem resultam frequentemente de paragens e transferências com má técnica postural inercial."
  },
  {
    "id": 1464,
    "topicId": 1,
    "question": "Ao acelerar uma maca pesada a partir do repouso, como deve o enfermeiro utilizar o seu próprio corpo de acordo com a 1.ª Lei de Newton?",
    "options": [
      "Puxar exclusivamente com a flexão forçada dos pulsos mantendo os pés perfeitamente imóveis e juntos no mesmo ponto.",
      "Aguardar que a rotação da Terra forneça a aceleração necessária sem exercer qualquer esforço muscular voluntário.",
      "Projetar o peso do corpo para a frente através da extensão dos membros inferiores, usando a gravidade e o atrito dos pés com o solo.",
      "Bater repetidamente com as mãos nos manípulos para que as vibrações acústicas vençam a inércia da estrutura metálica."
    ],
    "correctIndex": 2,
    "explanation": "Usar o peso corporal e os músculos potentes dos membros inferiores (quadríceps e glúteos) transfere força sem sobrecarregar os braços.",
    "distractorAnalysis": [
      "Está incorreta: Puxar apenas com os pulsos sobrecarrega as pequenas articulações do punho, com risco de síndrome do túnel cárpico.",
      "Está incorreta: A rotação terrestre não acelera macas em corredores hospitalares; é necessária uma força muscular externa deliberada.",
      "Está incorreta: Vibrações acústicas não geram a força resultante líquida de Newtons exigida para vencer a inércia e o atrito."
    ],
    "nursingApplication": "O uso inteligente da biomecânica corporal permite movimentar cargas elevadas com mínimo esforço e máxima segurança."
  },
  {
    "id": 1465,
    "topicId": 1,
    "question": "Se a força resultante sobre um corpo for perpendicular à sua velocidade instantânea a cada momento, que tipo de aceleração é produzida?",
    "options": [
      "Aceleração puramente centrípeta (normal), que altera a direção e sentido do vetor velocidade sem alterar o seu módulo (escalar).",
      "Aceleração puramente tangencial, que aumenta rapidamente a rapidez do corpo sem mudar a sua direção.",
      "Aceleração nula, pois forças normais à velocidade não produzem nenhum trabalho nem efeito físico.",
      "Aceleração gravitacional uniforme, fazendo o corpo cair imediatamente em direção ao centro da Terra."
    ],
    "correctIndex": 0,
    "explanation": "Uma força perpendicular à trajetória não realiza trabalho nem altera a rapidez, mas curva a trajetória (gera aceleração centrípeta ac = v²/r).",
    "distractorAnalysis": [
      "Está incorreta: Aceleração tangencial requer uma componente de força na linha da velocidade, não perpendicular a ela.",
      "Está incorreta: Forças perpendiculares produzem aceleração centrípeta real, sendo cruciais para fazer curvas.",
      "Está incorreta: A direção da aceleração segue a força aplicada; não faz o corpo cair a menos que a força aponte para baixo."
    ],
    "nursingApplication": "Explica a força centrípeta necessária para curvar uma maca ou cadeira de rodas nos cruzamentos dos corredores."
  },
  {
    "id": 1466,
    "topicId": 1,
    "question": "Se um doente com perda de força conseguir acelerar o seu braço de 3 kg a uma taxa de apenas 0,5 m/s² no plano horizontal, que força resultante muscular os seus abdutores estão a gerar?",
    "options": [
      "1,5 N (calculada diretamente pela 2.ª Lei: F = m · a = 3 kg · 0,5 m/s² = 1,5 N).",
      "6 N, calculada por F = m · a² = 3 · 0,5² = 3 · 0,25 = 0,75, e depois multiplicada por 8, confundindo com energia.",
      "0,17 N, calculada por F = m / a = 3 / 0,5 = 6, e depois invertida para 1/6 = 0,17, invertendo a relação.",
      "3 N, calculada por F = a / m = 0,5 / 3 = 0,17 e depois multiplicada por m² = 9, sem fundamento na 2.ª Lei."
    ],
    "correctIndex": 3,
    "explanation": "F = m·a = 3 kg · 0,5 m/s² = 1,5 N. O músculo gera uma força resultante modesta mas real e quantificável.",
    "distractorAnalysis": [
      "Está incorreta: F = m·a² usa a aceleração ao quadrado, o que corresponde a uma fórmula de energia (Ec = ½mv²) não à força; a 2.ª Lei é F = m·a (não a²).",
      "Está incorreta: F = m/a inverte a relação da 2.ª Lei de Newton; a força é proporcional à aceleração (F = m·a), não inversamente proporcional.",
      "Está incorreta: F = a/m inverte tanto o numerador como o denominador da 2.ª Lei; multiplicar por m² depois não tem justificação na lei de Newton."
    ],
    "nursingApplication": "Permite ao profissional documentar a evolução quantitativa objetiva do ganho de força motora do utente."
  },
  {
    "id": 1467,
    "topicId": 1,
    "question": "Porque é que as forças do par ação-reação têm obrigatoriamente a mesma linha de ação (mesma direção)?",
    "options": [
      "Porque a rotação da Terra curva todos os vetores de força na direção do polo norte magnético.",
      "Porque a interação ocorre ao longo da linha geométrica que une os pontos ou centros de contacto dos dois corpos em interação.",
      "Porque o Sistema Internacional proíbe a existência de forças em eixos tridimensionais concorrentes.",
      "Porque se tivessem a mesma direção gerariam sempre um movimento contínuo de rotação acelerada."
    ],
    "correctIndex": 1,
    "explanation": "As forças newtonianas entre duas partículas atuam ao longo da reta que as une (forças centrais), garantindo conservação do momento angular.",
    "distractorAnalysis": [
      "Está incorreta: A rotação terrestre não alinha forças de contacto mecânico local em direção ao polo magnético.",
      "Está incorreta: O SI adota três eixos espaciais independentes e não proíbe forças em direções arbitrárias.",
      "Está incorreta: Ter a mesma linha de ação impede a geração espontânea de binários de torção em sistemas isolados."
    ],
    "nursingApplication": "Ajuda a compreender o alinhamento corporal durante técnicas de tração e posicionamento em enfermagem."
  },
  {
    "id": 1468,
    "topicId": 1,
    "question": "Para conseguir aplicar a força vertical descendente de 400-500 N de forma eficiente e sustentável durante as compressões torácicas, o enfermeiro deve posicionar-se com:",
    "options": [
      "Cotovelos completamente esticados (bloqueados) e os ombros diretamente na vertical dos pulsos, ao nível da superfície de trabalho.",
      "Cotovelos fletidos a 90° e antebraços apoiados na superfície de trabalho, com os ombros relaxados e o tronco ereto.",
      "Cotovelos fletidos a 45° e pulsos em extensão forçada, com as mãos abaixo do nível dos cotovelos durante toda a tarefa.",
      "Cotovelos fletidos a 120° e o tronco inclinado a 30° para a frente, de forma a aproximar a zona de trabalho dos olhos."
    ],
    "correctIndex": 0,
    "explanation": "Com os braços esticados na vertical, a força é transmitida diretamente como uma haste rígida utilizando a gravidade e o peso do tronco, poupando os flexores dos braços.",
    "distractorAnalysis": [
      "Está incorreta: fletir os cotovelos a 90° com antebraços apoiados é recomendado em ergonomia de secretária, mas não é universal para todas as tarefas de mobilização manual do doente.",
      "Está incorreta: pulsos em extensão forçada (hiperextensão) aumentam a tensão no canal cárpico e são uma posição de risco para síndrome do túnel cárpico; não é a postura recomendada.",
      "Está incorreta: um tronco inclinado a 30° aumenta o momento de força sobre os discos lombares; a postura correta mantém o tronco ereto para minimizar a sobrecarga sobre L5-S1."
    ],
    "nursingApplication": "Diretriz fundamental de técnica e eficácia das compressões de suporte avançado de vida recomendadas pelo ERC/AHA."
  },
  {
    "id": 1469,
    "topicId": 1,
    "question": "Num andarilho de quatro pontas sem rodas, porque é que a marcha exige que o doente pouse o dispositivo totalmente no solo antes de transferir o peso corporal?",
    "options": [
      "Para garantir que as quatro forças normais e de atrito verticais estejam plenamente ativas e simétricas antes de iniciar qualquer mobilização.",
      "Para impedir que as rodas girem em sentido contrário ao movimento durante a fase de aceleração inicial da cadeira.",
      "Para aumentar o peso aparente da cadeira vazia, criando uma maior resistência ao deslizamento lateral não controlado.",
      "Para ativar o mecanismo de bloqueio eletromagnético que alerta a equipa de enfermagem quando o doente tenta levantar-se."
    ],
    "correctIndex": 1,
    "explanation": "Apoiar o peso enquanto o andarilho está em movimento ou com apenas duas pontas no solo gera momentos de instabilidade e tombamento da estrutura.",
    "distractorAnalysis": [
      "Está incorreta: os travões das rodas de cadeira de rodas são mecânicos de fricção, não eletromagnéticos; não há mecanismo de alerta automático na maioria das cadeiras hospitalares.",
      "Está incorreta: os travões bloqueiam as rodas para impedir qualquer movimento, não apenas o giro em sentido contrário; a sua função é a imobilização total antes das transferências.",
      "Está incorreta: travar as rodas não altera o peso aparente da cadeira; o peso é determinado pela massa e pela gravidade, não pelo estado dos travões."
    ],
    "nursingApplication": "Orienta a educação para a saúde do utente com défice de equilíbrio na utilização correta do andarilho de marcha."
  },
  {
    "id": 1470,
    "topicId": 1,
    "question": "Ao empurrar os apoios de braços para se levantar da cadeira de rodas, como utiliza o utente a 3.ª Lei de Newton a seu favor?",
    "options": [
      "Os membros superiores empurram os apoios de braços para baixo com força F, e os apoios reagem empurrando o corpo para cima com a mesma força F ascendente.",
      "Os membros superiores puxam os apoios de braços horizontalmente para dentro, anulando a aceleração da gravidade sobre o tronco.",
      "Os apoios de braços absorvem o peso das pernas do doente através da compressão do estofamento, facilitando o impulso plantar.",
      "Os membros superiores criam uma força de rotação angular pura que eleva o centro de gravidade sem exercer força nos apoios."
    ],
    "correctIndex": 0,
    "explanation": "A força ascendente que o apoio de braços devolve (reação N) soma-se à força de extensão dos joelhos, ajudando a elevar o centro de gravidade.",
    "distractorAnalysis": [
      "Está incorreta: pela 3.ª Lei de Newton, empurrar o apoio para baixo gera uma força de reação vertical para cima que impulsiona o corpo na elevação.",
      "Está incorreta: forças nos apoios de braço não alteram a atração da gravidade (P = m·g), fornecendo apenas a força externa motriz de suporte ascendente.",
      "Está incorreta: o impulso para levantar decorre de forças de contacto normais aplicadas para baixo nos apoios e nos pés, obtendo reações ascendentes do solo e cadeira."
    ],
    "nursingApplication": "Orienta a técnica de reabilitação funcional para ensinar doentes pós-AVC ou idosos a levantar-se da cadeira de forma autónoma e segura."
  },
  {
    "id": 1471,
    "topicId": 1,
    "question": "Porque é que as rodas da cadeira de rodas DEVEM estar rigorosamente travadas antes de o doente tentar levantar-se apoiando-se nos apoios de braços?",
    "options": [
      "Porque a força horizontal dos pés e mãos empurraria a cadeira para trás (ação), e pela 3.ª Lei o solo e o apoio reagem para a frente, propulsionando o corpo.",
      "Porque sem travões, a reação do solo seria zero e o utilizador não conseguiria gerar qualquer força de propulsão.",
      "Porque os travões aumentam o momento de inércia da cadeira, facilitando a aceleração angular do sistema.",
      "Porque os travões eliminam o atrito cinético entre a roda e o solo, permitindo que a força muscular se converta integralmente em deslocamento."
    ],
    "correctIndex": 1,
    "explanation": "Ao levantar-se, o corpo projeta-se para a frente e empurra a cadeira para trás; se as rodas estiverem livres, a cadeira afasta-se e o utente cai ao solo.",
    "distractorAnalysis": [
      "Está incorreta: sem travões, a reação do solo não é zero; existe sempre uma reação normal ao peso e de atrito; o problema é que a roda gira em vez de criar força de propulsão eficaz.",
      "Está incorreta: os travões bloqueiam as rodas e aumentam a resistência ao movimento, não o momento de inércia de forma útil à aceleração angular; aumentar o momento de inércia dificulta a aceleração.",
      "Está incorreta: os travões bloqueiam as rodas aumentando o atrito com o solo, não eliminando-o; é o atrito estático elevado que permite a reação propulsora ao empurrão dos pés."
    ],
    "nursingApplication": "Regra de segurança prioritária e obrigatória em qualquer serviço de saúde: travar sempre a cadeira antes de qualquer transferência."
  },
  {
    "id": 1472,
    "topicId": 1,
    "question": "Na flexão do antebraço sobre o braço realizada pelo músculo bíceps braquial, quando o tendão do bíceps puxa o rádio para cima com uma força F, que força atua na sua inserção óssea?",
    "options": [
      "O osso não exerce qualquer força porque os ossos são estruturas rígidas perfeitamente passivas.",
      "O osso exerce sobre o tendão uma força de tração exatamente igual e oposta dirigida para baixo (par ação-reação tendão-osso).",
      "O osso absorve a força transformando-a em calor e expande o seu volume para o triplo do normal.",
      "O tendão sofre uma força de atração exercida pela atmosfera externa que o puxa para fora da pele."
    ],
    "correctIndex": 1,
    "explanation": "A transmissão de força muscular para o esqueleto decorre de forças de tração mecânica recíprocas iguais em módulo e opostas em sentido na interface tenoperióstica.",
    "distractorAnalysis": [
      "Está incorreta: A 3.ª Lei aplica-se a todos os materiais; o osso resiste à tração aplicando força de mesmo módulo no tendão.",
      "Está incorreta: Os ossos sofrem microdeformações elásticas sem alteração volumétrica macroscópica em contrações normais.",
      "Está incorreta: A força motora decorre da interação molecular da actina-miosina celular e da transmissão no tendão, não da atmosfera."
    ],
    "nursingApplication": "Explica como a sobrecarga excessiva contínua em tendões pode causar avulsões ósseas por tração mecánica."
  },
  {
    "id": 1473,
    "topicId": 1,
    "question": "Qual é a função biomecânica de um colar cervical rígido colocado numa vítima de acidente de viação?",
    "options": [
      "Fornecer forças de suporte mecânico e de contenção que limitam a amplitude de movimentos de flexão, extensão e rotação, mantendo as vértebras cervicais em repouso relativo.",
      "Aplicar uma força contínua de tração longitudinal para cima que afasta ativamente as vértebras cervicais e anula por completo a ação da gravidade sobre o crânio da vítima.",
      "Comprimir as estruturas musculares laterais para aumentar a pressão osmótica tecidual e acelerar a cicatrização de microfraturas trabeculares no corpo vertebral.",
      "Bloquear a rotação torácica e lombar do tronco através da transmissão direta de momentos de força rígidos aos arcos costais inferiores e à cintura pélvica da vítima."
    ],
    "correctIndex": 0,
    "explanation": "O colar aplica forças de contacto que neutralizam momentos de rotação externos, impedindo que forças inerciais desloquem fragmentos ósseos ou comprimam a medula espinhal.",
    "distractorAnalysis": [
      "Está incorreta: o colar rígido destina-se à restrição passiva de movimentos anómalos e não à tração axial ativa, que exigiria pesos suspensos ou halotração.",
      "Está incorreta: a compressão excessiva é um erro clínico perigoso que compromete a circulação venosa cervical e não acelera a cicatrização óssea.",
      "Está incorreta: o colar cervical atua na estabilização da coluna cervical alta e baixa, não tendo alcance biomecânico sobre a coluna torácica distal ou lombar."
    ],
    "nursingApplication": "Prática prioritária no trauma: o colar cervical transfere as forças da mandíbula e occipital para o tronco, protegendo a coluna cervical."
  },
  {
    "id": 1474,
    "topicId": 1,
    "question": "Qual é a posição biomecanicamente ideal para a fixação de uma barra de apoio horizontal junto à sanita para auxiliar o levante?",
    "options": [
      "A uma altura equivalente ao nível dos olhos do utente sentado (cerca de 120 a 130 cm do solo), para permitir puxar o tronco para cima com extensão completa dos braços.",
      "A uma altura ligeiramente superior aos joelhos (cerca de 70 a 80 cm do solo) e ligeiramente à frente da bacia, permitindo empurrar para baixo e para trás com membros fletidos.",
      "Diretamente atrás do encosto da sanita a 40 cm do solo, forçando uma hiperextensão posterior dos cotovelos para elevar o centro de gravidade em desequilíbrio anterior.",
      "A cerca de 30 cm do chão junto aos tornozelos, incentivando a flexão acentuada da coluna torácica para alavancar a bacia através do músculo grande dorsal."
    ],
    "correctIndex": 1,
    "explanation": "Esta altura e avanço permitem aplicar forças descendentes naturais com os braços, gerando reações ascendentes da barra que auxiliam a extensão dos joelhos.",
    "distractorAnalysis": [
      "Está incorreta: barras muito elevadas obrigam a tração braquial com ombros em abdução extrema, com menor vantagem mecânica e risco de lesão da coifa dos rotadores.",
      "Está incorreta: apoios posteriores exigem extensão e rotação dorsal forçada, impedindo a inclinação anterior do tronco essencial para levantar com segurança.",
      "Está incorreta: posicionamentos excessivamente baixos forçam flexão lombar acentuada e aumentam exponencialmente a pressão de compressão sobre os discos L4-L5 e L5-S1."
    ],
    "nursingApplication": "Recomendação ergonómica de adaptação ambiental na reabilitação e promoção da autonomia do doente idoso."
  },
  {
    "id": 1475,
    "topicId": 1,
    "question": "Como é que a identificação das forças no DCL auxilia a equipa de enfermagem a prescrever ajudas técnicas ergonómicas aos doentes?",
    "options": [
      "Porque ao dobrar os joelhos o centro de gravidade baixa e o tronco mantém-se próximo da vertical, reduzindo drasticamente o braço de alavanca e o momento fletor na coluna.",
      "Porque fletir os joelhos anula o peso da carga levantada, permitindo que a coluna lombar suporte apenas o peso da cabeça do profissional.",
      "Porque dobrar as pernas transfere toda a compressão articular exclusivamente para os ossos do tarso, poupando a articulação do joelho.",
      "Porque a extensão dos joelhos com o tronco inclinado a 90 graus gera um momento de força estabilizador benéfico para os discos lombares."
    ],
    "correctIndex": 2,
    "explanation": "A prescrição de cadeiras, andarilhos ou transferidores baseia-se na mecânica das forças e momentos que o DCL revela de forma objetiva.",
    "distractorAnalysis": [
      "Está incorreta: o peso da carga não varia com a postura; a flexão dos joelhos reduz o braço de momento da carga em relação ao fulcro lombar L5-S1.",
      "Está incorreta: a articulação fémuro-tibial suporta compressão mecânica adequada e fisiológica através dos meniscos e quadríceps.",
      "Está incorreta: inclinar o tronco a 90° com pernas esticadas multiplica o braço de alavanca da carga, gerando picos extremos de tensão discal."
    ],
    "nursingApplication": "Eleva a prática de enfermagem a um patamar científico de excelência baseado na evidência biofísica e ergonómica."
  },
  {
    "id": 1476,
    "topicId": 1,
    "question": "O que acontece à força de atrito no momento exato em que a força aplicada pelo enfermeiro supera Fat,e_max e a maca começa a deslizar?",
    "options": [
      "A força de atrito duplica instantaneamente de valor para impedir que o corpo adquira aceleração perigosa no corredor.",
      "A força de atrito cai abruptamente do valor estático máximo para o valor do atrito cinético (Fat,c = μc·N), facilitando o movimento contínuo.",
      "A força de atrito anula-se por completo, tornando o deslizamento do leito imune a qualquer tipo de resistência mecânica.",
      "A força de atrito inverte o seu sentido de atuação e passa a acelerar a carga no mesmo sentido do movimento do profissional."
    ],
    "correctIndex": 1,
    "explanation": "Uma vez quebrado o repouso, as microssoldaduras não têm tempo de se restabelecer plenamente, diminuindo a resistência ao avanço (Fat,c < Fat,e_max).",
    "distractorAnalysis": [
      "Está incorreta: uma vez iniciado o deslizamento, o atrito não aumenta; a transição para atrito cinético reduz a força de oposição.",
      "Está incorreta: o atrito cinético continua a atuar durante todo o movimento de translação (Fat,c = μc·N), não sendo nulo.",
      "Está incorreta: o atrito cinético opõe-se sempre ao movimento relativo das superfícies e nunca empurra o objeto para a frente."
    ],
    "nursingApplication": "Explica a sensação física universal de que 'o mais difícil é tirar a maca do lugar; depois de começar a andar fica mais leve!'"
  },
  {
    "id": 1477,
    "topicId": 1,
    "question": "Qual é a recomendação ergonómica para a equipa de enfermagem para minimizar a sobrecarga articular lombar no pico de esforço de arranque de macas pesadas?",
    "options": [
      "Travar o leito e puxar o doente com movimentos espasmódicos repetidos sem qualquer coordenação de equipa prévia.",
      "Executar a tração com as pernas estendidas e coluna lombar totalmente fletida num ângulo agudo para esticar os ligamentos.",
      "Manter o leito o mais baixo possível perto do solo para obrigar os profissionais a trabalhar completamente curvados.",
      "Aplicar uma força inicial mais firme para vencer o atrito estático máximo e, assim que o movimento começar, manter um impulso suave e constante."
    ],
    "correctIndex": 3,
    "explanation": "Utilizar a massa corporal e a potência dos quadríceps e glúteos protege os discos lombares contra forças de cisalhamento lesivas no momento de Fat,e_max.",
    "distractorAnalysis": [
      "Está incorreta: movimentos desfasados aumentam as forças de pico (F = m·a) e elevam o risco de lesão musculoesquelética lombar.",
      "Está incorreta: puxar com pernas retas e coluna curvada cria braços de alavanca longos e sobrecargas compressivas lesivas nos discos L5-S1.",
      "Está incorreta: a cama deve ser ajustada à altura dos trocânteres maiores dos profissionais para preservar as curvaturas fisiológicas."
    ],
    "nursingApplication": "Regra de ouro de higiene postural e proteção da saúde do trabalhador de enfermagem em contexto prático."
  },
  {
    "id": 1478,
    "topicId": 1,
    "question": "Como é que inclinar o tronco para a frente auxilia o enfermeiro a aumentar a força propulsora útil sem escorregar ao empurrar uma maca?",
    "options": [
      "A inclinação projeta o vetor da força de contacto com o solo numa linha mais oblíqua, utilizando o peso do corpo para empurrar a maca e aumentando a pressão no pé dianteiro.",
      "A inclinação do tronco reduz o peso corporal do profissional, facilitando a transmissão direta de aceleração inercial às pegas dianteiras da maca hospitalar.",
      "A postura inclinada anula o atrito estático dos calçados com o piso, permitindo que os pés deslizem livremente para a frente durante toda a fase de propulsão.",
      "A inclinação projeta o centro de gravidade do enfermeiro para trás dos calcanhares, gerando um momento de força de tração que puxa a maca em direção ao tórax."
    ],
    "correctIndex": 0,
    "explanation": "Ao inclinar o tronco, o centro de gravidade avança, criando um binário que descarrega peso sobre os braços na maca e permite que as pernas apliquem forças propulsoras eficientes.",
    "distractorAnalysis": [
      "Está incorreta: o peso corporal (P = m·g) permanece constante; inclinar o tronco permite utilizar o peso e a musculatura das pernas para criar força horizontal útil.",
      "Está incorreta: o enfermeiro necessita de atrito estático elevado solo-calçado para impulsionar a maca; se os pés escorregarem, a força propulsora perde-se e ocorre queda.",
      "Está incorreta: ao empurrar, o centro de gravidade deve ser projetado à frente da base de suporte, permitindo que a reação do solo empurre o cuidador e a maca para a frente."
    ],
    "nursingApplication": "Técnica ergonómica clássica que ensina a utilizar a biomecânica corporal e o peso postural a favor da tarefa."
  },
  {
    "id": 1479,
    "topicId": 1,
    "question": "Porque é que as meias antiderrapantes hospitalares de alta qualidade possuem pontos de silicone em ambas as faces (superior e inferior do pé)?",
    "options": [
      "Para prender firmemente o peito do pé ao lençol de cima durante o sono, impedindo mecanicamente que o utente confuso consiga sair da cama durante a noite sem autorização.",
      "Para exercer uma compressão elástica graduada de 40 mmHg sobre as veias dorsais do pé, substituindo as meias de compressão antitrombótica na profilaxia de tromboses venosas.",
      "Para garantir que mesmo que a meia rode ou se desloque em redor do pé durante a noite no leito, existirá sempre uma superfície de silicone voltada para o chão quando o utente pousar o pé.",
      "Para duplicar matematicamente o coeficiente de atrito estático com o chão através da soma vetorial das duas camadas de silicone durante a fase de choque de calcanhar."
    ],
    "correctIndex": 2,
    "explanation": "A conceção de dupla face (double-tread) compensa a rotação natural do tecido nos lençóis, garantindo segurança mecânica independentemente da orientação da meia no momento do apoio.",
    "distractorAnalysis": [
      "Está incorreta: as meias não são dispositivos de contenção física de leito; a dupla face assegura proteção antiderrapante se a meia rodar no pé durante o repouso.",
      "Está incorreta: as meias antiderrapantes não exercem compressão graduada nem substituem o papel hemodinâmico das meias de compressão elástica antitrombóticas.",
      "Está incorreta: o coeficiente de atrito atua unicamente na interface física em contacto real com o piso; a presença de silicone no dorso não duplica o valor de μ no solo."
    ],
    "nursingApplication": "Exemplo notável de design ergonómico orientado pela física e pela segurança clínica do doente frágil."
  },
  {
    "id": 1480,
    "topicId": 1,
    "question": "Numa cadeira de rodas ergonómica adaptada, a estabilidade é considerada estável porque:",
    "options": [
      "O centro de gravidade localiza-se acima da cabeça do utilizador, permitindo que a cadeira oscile livremente perante qualquer obstáculo.",
      "A área de apoio das quatro rodas da cadeira é reduzida ao diâmetro de um único ponto central sob o assento ergonómico.",
      "O centro de gravidade do conjunto utilizador-cadeira localiza-se bem abaixo e centrado no interior do polígono de apoio delimitado pelas quatro rodas.",
      "A cadeira possui rodas dianteiras que giram continuamente em sentidos opostos para anular qualquer momento de força restaurador."
    ],
    "correctIndex": 2,
    "explanation": "Centro de gravidade baixo e base de suporte ampla garantem que pequenas inclinações encontram momentos restauradores que impedem o capotamento.",
    "distractorAnalysis": [
      "Está incorreta: um centro de gravidade elevado é uma condição de instabilidade postural, aumentando drasticamente o perigo de capotamento da cadeira.",
      "Está incorreta: polígonos de sustentação amplos delimitados por 4 rodas garantem maior margem de estabilidade estável e segurança ao doente.",
      "Está incorreta: rodas simétricas com alinhamento e rolamentos estáveis conferem controlo direcional e facilitam a condução do equipamento."
    ],
    "nursingApplication": "Fundamenta as regras de prescrição e ajuste dimensional de cadeiras de rodas personalizadas."
  },
  {
    "id": 1481,
    "topicId": 1,
    "question": "Quando um doente sentado numa poltrona com encosto e apoios de braços se inclina ligeiramente para o lado para apanhar um livro e volta espontaneamente à posição ereta, isso demonstra que:",
    "options": [
      "O sistema encontrava-se em equilíbrio instável, exigindo espasmo muscular reflexo máximo para evitar o capotamento imediato da poltrona.",
      "O sistema operou em equilíbrio indiferente, mantendo-se estático no ângulo de inclinação alcançado sem forças restauradoras ativas.",
      "A base de sustentação da poltrona expandiu automaticamente os seus limites geométricos na direção da mão que procurava o objeto.",
      "O sistema operou dentro da sua margem de equilíbrio estável, permitindo a recuperação postural sem perda de controlo biomecânico."
    ],
    "correctIndex": 3,
    "explanation": "Dentro dos limites do polígono de suporte, o sistema neuromuscular e a geometria de assento fornecem forças e momentos restauradores eficazes.",
    "distractorAnalysis": [
      "Está incorreta: no equilíbrio instável pequenas perturbações amplificam o desvio e provocam queda, o que não ocorreu na situação descrita.",
      "Está incorreta: no equilíbrio indiferente o corpo permanece na nova posição sem retornar; aqui houve retorno espontâneo à postura inicial.",
      "Está incorreta: a base de apoio da poltrona é uma área fixa determinada pelo apoio dos pés no solo, não mudando com o movimento do utente."
    ],
    "nursingApplication": "Ilustra a resiliência dinâmica de posturas estáveis bem configuradas no internamento hospitalar."
  },
  {
    "id": 1482,
    "topicId": 1,
    "question": "Como se define formalmente um estado de Equilíbrio Instável (Unstable Equilibrium)?",
    "options": [
      "É o estado em que, após o menor deslocamento ou perturbação externa, surgem forças ou momentos que afastam o corpo ainda mais da posição inicial, levando ao seu tombamento ou queda.",
      "É a situação estática em que, após uma perturbação angular, o sistema gera espontaneamente forças restauradoras de grande intensidade que reconduzem o corpo à sua posição de repouso.",
      "É o estado mecânico no qual o centro de gravidade se mantém a uma altura perfeitamente constante qualquer que seja a magnitude do deslocamento linear imposto pelas forças de apoio.",
      "É a condição postural em que o sistema físico dissipa imediatamente toda a energia cinética acumulada, imobilizando o segmento corporal no ponto exato onde a perturbação cessou."
    ],
    "correctIndex": 0,
    "explanation": "No equilíbrio instável, a menor perturbação afasta o centro de gravidade da base de suporte, e o próprio peso gera um momento que faz o corpo tombar.",
    "distractorAnalysis": [
      "Está incorreta: a geração de forças restauradoras que devolvem o corpo ao repouso é a definição precisa de equilíbrio estável.",
      "Está incorreta: a conservação da altura do centro de gravidade perante qualquer deslocamento caracteriza o equilíbrio indiferente (ou neutro).",
      "Está incorreta: no equilíbrio instável o sistema não se imobiliza no ponto perturbado; o peso gera um momento angular acelerador que provoca a queda."
    ],
    "nursingApplication": "Permite ao enfermeiro reconhecer antecipadamente situações de elevado risco mecânico e agir preventivamente."
  },
  {
    "id": 1483,
    "topicId": 1,
    "question": "Porque é que tentar equilibrar um frasco de soro cilíndrico sobre o seu gargalo estreito invertido é um equilíbrio instável?",
    "options": [
      "Porque o centro de gravidade do frasco invertido desce para o interior do solo, gerando uma força de repulsão de contacto que expulsa a tampa da superfície plana da mesa de trabalho.",
      "Porque a pressão atmosférica sobre o fundo largo do recipiente supera a força da gravidade, exercendo uma tração ascendente contínua que impede o contacto firme com a bancada clínica.",
      "Porque a base estreita do gargalo cria uma área de contacto tão ampla que as forças de atrito estático bloqueiam totalmente os momentos restauradores gerados pelo peso do líquido.",
      "Porque a base de apoio é minúscula e o centro de gravidade do frasco fica numa posição muito elevada acima do apoio; qualquer sopro desloca a linha de gravidade para fora da base, tombando o frasco."
    ],
    "correctIndex": 3,
    "explanation": "A linha de ação do peso sai instantaneamente da base minúscula com o menor desvio angular, criando um torque desestabilizador que acelera o tombo.",
    "distractorAnalysis": [
      "Está incorreta: o centro de gravidade de um frasco invertido fica localizado na sua porção superior mais volumosa, e não abaixo do solo ou envolvido em repulsões mecânicas.",
      "Está incorreta: a pressão atmosférica atua uniformemente em todas as direções sobre o frasco, não exercendo forças de tração capazes de desequilibrar o recipiente.",
      "Está incorreta: a área de apoio do gargalo invertido é extremamente reduzida (e não ampla), facilitando a projeção da linha de gravidade para fora dos limites da base."
    ],
    "nursingApplication": "Ilustra com objetos do quotidiano hospitalar a regra de ouro: base pequena + CG elevado = instabilidade crítica."
  },
  {
    "id": 1484,
    "topicId": 1,
    "question": "Se colocarmos uma caixa retangular hospitalar com a sua face mais larga no solo e a inclinarmos ligeiramente sem ultrapassar o bordo da base, que linha geométrica determina se ela retorna ou tomba?",
    "options": [
      "A linha horizontal imaginária que une os vértices superiores da caixa, indicando que a estrutura retorna sempre que os seus cantos laterais mantiverem um alinhamento perfeitamente paralelo.",
      "A linha de ação vertical do Peso que passa pelo Centro de Gravidade: se esta linha cair dentro da base de sustentação, ela retorna (estável); se cair fora da base, ela tomba (instável).",
      "A diagonal anatómica que atravessa o centro geométrico da face anterior, determinando que o objeto tomba assim que a sua inclinação angular atingir rigorosamente quinze graus de arco.",
      "O vetor velocidade angular instantâneo gerado pelo movimento da mão do operador, que define de forma permanente a estabilidade do sistema independentemente da posição do peso."
    ],
    "correctIndex": 1,
    "explanation": "A projeção vertical do CG sobre o plano de apoio comanda o momento restaurador: dentro da base o momento é restaurador; fora da base o momento acelera a queda.",
    "distractorAnalysis": [
      "Está incorreta: o alinhamento dos vértices superiores não determina o equilíbrio; o critério físico reside na projeção da linha de gravidade sobre a base de apoio.",
      "Está incorreta: o ângulo limite de tombamento não é um valor universal fixo (como 15°), dependendo estritamente da relação entre a largura da base e a altura do centro de massa.",
      "Está incorreta: a velocidade angular descreve o movimento cinemático imediato, mas o retorno ou tombamento estático depende da linha de ação do peso em relação à base."
    ],
    "nursingApplication": "Conceito central de biomecânica que liga os Tipos de Equilíbrio à Base de Sustentação do Bloco 8."
  },
  {
    "id": 1485,
    "topicId": 1,
    "question": "Se um doente sentado na borda da cama com os pés suspensos no ar (sem tocar no chão) sofrer uma tontura súbita, o seu equilíbrio:",
    "options": [
      "Permanece em equilíbrio estável contínuo, pois a suspensão dos pés rebaixa o centro de massa do tronco para um nível inferior à superfície elástica do colchão hospitalar.",
      "É mantido automaticamente pelas forças inerciais das pernas pendentes, que atuam como pêndulos restauradores capazes de neutralizar qualquer momento angular da coluna.",
      "Transforma-se num equilíbrio neutro perfeito, no qual o tronco oscila livremente sem risco de queda devido à total ausência de forças de atrito entre o corpo e o ar ambiente.",
      "Torna-se altamente instável, pois sem o apoio dos pés no solo não consegue gerar forças normais nem de atrito para restabelecer a posição, caindo se o enfermeiro não o segurar."
    ],
    "correctIndex": 3,
    "explanation": "Pés no ar reduzem drasticamente o polígono de sustentação às tuberosidades isquiáticas; qualquer desvio da linha do CG resulta em momento de tombamento incontrolável.",
    "distractorAnalysis": [
      "Está incorreta: os pés suspensos reduzem a base de apoio apenas às nádegas, elevando a instabilidade perante desvios laterais ou anteriores do tronco.",
      "Está incorreta: membros pendentes não conseguem produzir forças normais contra o solo para gerar momentos musculares compensatórios, facilitando o tombo.",
      "Está incorreta: o doente com pés no ar está em equilíbrio precário e altamente instável; uma tontura projeta o centro de gravidade para fora da base, culminando em queda."
    ],
    "nursingApplication": "Regra de ouro: regular sempre a altura da cama para baixo até que os pés do utente assentem firmemente e planos no solo."
  },
  {
    "id": 1486,
    "topicId": 1,
    "question": "Como é que os fármacos sedativos e ansiolíticos da classe das benzodiazepinas (ex: diazepam, lorazepam) afetam o equilíbrio biofísico dos doentes?",
    "options": [
      "Bloqueiam a absorção de glicose nos tecidos periféricos dos pés, fazendo com que as solas percam a capacidade mecânica de exercer atrito com as superfícies pavimentadas.",
      "Estimulam a secreção descontrolada de adrenalina medular, gerando espasmos musculares rápidos que elevam permanentemente o centro de massa acima do nível dos ombros.",
      "Inibem a transmissão nervosa dos nervos óticos retinianos durante a luz solar direta, forçando o doente a caminhar de olhos fechados mesmo durante os turnos diurnos.",
      "Potenciam o neurotransmissor inibitório GABA no sistema nervoso central, reduzindo o tónus muscular, lentificando os reflexos posturais e aumentando o tempo de reação a desequilíbrios."
    ],
    "correctIndex": 3,
    "explanation": "A lentificação psicomotora faz com que o momento restaurador demore preciosos milissegundos a atuar, permitindo que a linha de gravidade saia da base e culmine em queda.",
    "distractorAnalysis": [
      "Está incorreta: as benzodiazepinas atuam no sistema nervoso central (recetores GABA-A) e não afetam diretamente a glicemia local nem o coeficiente de atrito mecânico.",
      "Está incorreta: estes fármacos são depressores do SNC, causando sedação e relaxamento muscular, e não hiperestimulação adrenérgica com elevação do centro de massa.",
      "Está incorreta: as benzodiazepinas causam sonolência e lentidão de reflexos, não provocando cegueira fotossensível ou oclusão palpebral involuntária à luz do dia."
    ],
    "nursingApplication": "Alerta clínico crucial: a prescrição de sedativos e hipnóticos duplica o risco estatístico de queda com fratura em idosos internados."
  },
  {
    "id": 1487,
    "topicId": 1,
    "question": "Como é que a biomecânica moderna descreve o processo dinâmico da marcha humana normal sob o ponto de vista do equilíbrio?",
    "options": [
      "Como uma sucessão rítmica e coordenada de desequilíbrios controlados para a frente, onde o Centro de Gravidade é projetado para fora da base e recuperado pelo apoio do pé seguinte.",
      "Como um estado permanente de equilíbrio estático no qual a projeção do centro de gravidade nunca se desloca mais de um milímetro em relação ao ponto médio dos tornozelos.",
      "Como uma série contínua de saltos verticais sustentados unicamente pela retração elástica dos tendões extensores dos braços, sem envolvimento dinâmico dos membros inferiores.",
      "Como uma desaceleração contínua onde a velocidade do corpo diminui linearmente até parar completamente a cada passada para permitir que as forças se equilibrem em repouso."
    ],
    "correctIndex": 0,
    "explanation": "Para avançar, o corpo projeta o CG à frente da base de suporte (criando um momento propulsor) e avança rapidamente a perna oscilante para criar uma nova base de apoio estável.",
    "distractorAnalysis": [
      "Está incorreta: a marcha é um processo dinâmico de contínua oscilação do centro de gravidade para a frente da base, e não um equilíbrio estático imóvel.",
      "Está incorreta: a locomoção bípede assenta no trabalho muscular e cinemático dos membros inferiores e pélvis, não sendo sustentada pelos membros superiores.",
      "Está incorreta: a marcha normal possui cadência contínua com aproveitamento do momento linear; desacelerar até parar a cada passo é ineficiente e patológico."
    ],
    "nursingApplication": "Conceito fascinante: caminhar é 'cair de forma controlada' e recuperar o equilíbrio a cada passada com extrema elegância mecânica."
  },
  {
    "id": 1488,
    "topicId": 1,
    "question": "O que acontece quando o pé de oscilação do utente tropeça num obstáculo no chão (ex: tapete solto ou fio elétrico) durante o avanço?",
    "options": [
      "O pé travado ganha aceleração instantânea para a frente, impulsionando a bacia do doente para trás e provocando invariavelmente uma queda de costas com impacto occipital no solo.",
      "A força de atrito com o obstáculo arrefece os tecidos da perna, paralisando os reflexos do membro contralateral e impedindo qualquer tentativa de movimento articular restaurador.",
      "O pé é subitamente travado enquanto o tronco e o Centro de Gravidade continuam a avançar por inércia à velocidade anterior (1.ª Lei), projetando o corpo para a frente numa queda por tropeçamento.",
      "O corpo inteiro para de forma perfeitamente instantânea no ar sem sofrer rotação, permanecendo imóvel durante alguns segundos até que os músculos da coluna retomem a postura."
    ],
    "correctIndex": 2,
    "explanation": "Tropeçamento = paragem brusca da base enquanto o topo continua em movimento inercial (momento frontal desestabilizador); se o passo de recuperação falhar, ocorre impacto facial ou palmar no solo.",
    "distractorAnalysis": [
      "Está incorreta: ao travar a base inferior, a inércia do tronco projeta o centro de gravidade para a frente (queda frontal), e não para trás de costas.",
      "Está incorreta: o tropeçamento é um fenómeno mecânico inercial imediato; o membro oposto tenta disparar reflexamente a estratégia do passo de recuperação.",
      "Está incorreta: pela 1.ª Lei de Newton, a porção superior do corpo continua em movimento para a frente, gerando torque de rotação que culmina em queda rápida."
    ],
    "nursingApplication": "Fundamenta a eliminação rigorosa de tapetes soltos e fios no chão nos programas hospitalares e domiciliários de prevenção de quedas."
  },
  {
    "id": 1489,
    "topicId": 1,
    "question": "Se durante o amparo o doente estiver em queda franca e for demasiado pesado para ser sustentado no ar nos braços do enfermeiro, qual é a manobra segura recomendada para proteger ambos?",
    "options": [
      "O enfermeiro deve estender totalmente os joelhos e arquear a coluna para trás com força máxima, tentando erguer o doente pelo colarinho no ar até que outro profissional venha ajudar.",
      "O profissional deve soltar imediatamente o doente e dar um salto para o lado oposto para não ser atingido, deixando o corpo do utente embater livremente no solo com velocidade terminal.",
      "O enfermeiro deve puxar vigorosamente os braços do paciente para cima enquanto roda o seu próprio tronco sobre os calcanhares unidos, tentando projetar o doente sobre a cama vizinha.",
      "O enfermeiro deve colar o doente ao seu próprio corpo, alargar a sua base de sustentação, fletir os joelhos e deslizar o doente suavemente ao longo da sua própria perna até ao chão de forma controlada."
    ],
    "correctIndex": 3,
    "explanation": "Deslizar o doente ao longo da perna controla e prolonga a desaceleração (a = Δv/Δt reduzido), evitando impactos de alta energia no chão e protegendo a coluna do profissional contra forças compressivas extremas.",
    "distractorAnalysis": [
      "Está incorreta: tentar segurar um peso morto no ar com coluna curvada e joelhos estendidos gera risco de hérnia discal aguda e colapso de ambos.",
      "Está incorreta: abandonar o utente durante a queda constitui negligência grave; o deslizamento guiado junto à coxa amortece o impacto e protege a cabeça.",
      "Está incorreta: puxar os braços com rotação súbita causa luxação dos ombros no doente e sobrecarga de torção destrutiva na coluna lombar do cuidador."
    ],
    "nursingApplication": "Técnica ergonómica clássica e obrigatória ensinada internacionalmente nos cursos de manuseamento seguro de doentes."
  },
  {
    "id": 1490,
    "topicId": 1,
    "question": "Sob o ponto de vista da física do equilíbrio, como se classifica o estado de um suporte de soro móvel tradicional com cinco rodízios pousado no piso plano?",
    "options": [
      "Equilíbrio Estável puro, porque os pés estão fixos no pavimento por forças de atrito estático que impedem qualquer queda.",
      "Equilíbrio Indiferente absoluto, uma vez que o corpo pode ser deslocado em qualquer direção sem alteração da sua energia potencial.",
      "Equilíbrio Estático permanente, dado que a velocidade média de locomoção em velocidade confortável é aproximadamente zero.",
      "Equilíbrio Quase-Estático ou Dinâmico Instável: o corpo tomba continuamente para a frente e o pé de balanço avança para criar uma nova base de apoio."
    ],
    "correctIndex": 3,
    "explanation": "Apoiado nas cinco pernas afastadas, qualquer ligeira oscilação do suporte encontra uma base sólida que gera um momento restaurador mantendo-o aprumado.",
    "distractorAnalysis": [
      "Está incorreta: na marcha os pés alternam entre apoio e balanço; a marcha é uma perda e recuperação cíclica e dinâmica do equilíbrio.",
      "Está incorreta: a energia potencial gravitacional oscila a cada passada (o CG sobe no apoio médio e desce no duplo apoio), não sendo neutra.",
      "Está incorreta: o equilíbrio na marcha é dinâmico (v ≠ 0); o repouso estático refere-se à imobilidade postural absoluta sem locomoção."
    ],
    "nursingApplication": "Permite analisar a segurança dos equipamentos e antecipar como as cargas adicionadas alteram a sua estabilidade."
  },
  {
    "id": 1491,
    "topicId": 1,
    "question": "Como se define fisicamente o Momento de uma Força (ou Torque, M)?",
    "options": [
      "É a medida do impulso linear total que uma força transmite a um corpo para o acelerar em linha reta ao longo de um plano horizontal.",
      "É a taxa de energia metabólica consumida pelo sarcómero muscular por unidade de tempo durante uma contração estática isométrica.",
      "É a medida da tendência ou eficácia de uma força para produzir a rotação de um corpo em redor de um eixo ou ponto fixo (fulcro).",
      "É a razão entre a tensão de cisalhamento e o coeficiente de deformação axial de um segmento ósseo sujeito a cargas verticais."
    ],
    "correctIndex": 2,
    "explanation": "O momento mede a capacidade rotacional: não depende apenas da intensidade da força, mas também da distância a que é aplicada do eixo de rotação.",
    "distractorAnalysis": [
      "Está incorreta: o impulso linear mede a variação da quantidade de movimento translacional, enquanto o momento traduz eficácia rotacional.",
      "Está incorreta: o torque é uma grandeza física mecânica vetorial (N·m), e não uma medida fisiológica de consumo metabólico de ATP.",
      "Está incorreta: tensão de cisalhamento e deformação axial referem-se à resistência dos materiais, não à definição rotacional de momento."
    ],
    "nursingApplication": "Permite ao enfermeiro compreender como pequenas forças em alavancas longas conseguem mover grandes cargas corporais."
  },
  {
    "id": 1492,
    "topicId": 1,
    "question": "O que acontece ao momento gerado por uma força se dobrarmos a distância (o braço b) mantendo a mesma força F aplicada?",
    "options": [
      "O momento reduz-se para metade porque alavancas compridas dissipam energia no ar.",
      "O momento de força duplica de intensidade, pois o momento é diretamente proporcional ao comprimento do braço de alavanca.",
      "O momento permanece perfeitamente inalterado porque a intensidade da força em Newtons é a mesma.",
      "O momento transforma-se imediatamente numa corrente elétrica contínua que acende a lâmpada do teto."
    ],
    "correctIndex": 1,
    "explanation": "De M = F·b, se b passa a 2b com F constante, M' = F · 2b = 2M. Dobrar a distância dobra a capacidade de rotação com o mesmo esforço muscular.",
    "distractorAnalysis": [
      "Está incorreta: Aumentar o braço facilita e multiplica o torque; não o reduz para metade.",
      "Está incorreta: A força é constante, mas o efeito rotacional cresce proporcionalmente à distância ao fulcro.",
      "Está incorreta: O momento é mecânico e rotacional, sem conversão em correntes elétricas residuais."
    ],
    "nursingApplication": "Explica porque é muito mais fácil abrir uma porta empurrando junto ao puxador (longe das dobradiças) do que junto ao eixo."
  },
  {
    "id": 1493,
    "topicId": 1,
    "question": "Para uma mesma força F aplicada no mesmo ponto do osso a uma distância d do centro articular, em que ângulo θ de inserção tendinosa o momento de rotação atinge o seu valor máximo?",
    "options": [
      "A zero graus (θ = 0°), onde sen 0° = 0 e a força puxa paralelamente ao osso.",
      "A 90 graus (θ = 90°), onde sen 90° = 1 e o braço de alavanca atinge o seu comprimento máximo b = d (M_max = F · d).",
      "A 180 graus (θ = 180°), onde a força comprime o osso diretamente contra o fulcro articular.",
      "A 45 graus (θ = 45°), porque todos os músculos do corpo humano operam sempre na bissetriz geométrica."
    ],
    "correctIndex": 1,
    "explanation": "Como o seno atinge o seu valor máximo (1) aos 90°, uma força orientada perpendicularmente ao segmento é 100% eficaz para rotação.",
    "distractorAnalysis": [
      "Está incorreta: A 0° o seno é nulo (b = 0 e M = 0); a força atua puramente em tração axial sem qualquer capacidade de rodar o membro.",
      "Está incorreta: A 180° o seno é nulo (b = 0 e M = 0); a força atua puramente em compressão articular pura.",
      "Está incorreta: A 45° sen 45° ≈ 0,707, produzindo cerca de 71% do torque máximo possível."
    ],
    "nursingApplication": "Explica porque a força de flexão do cotovelo é máxima quando o cotovelo se encontra fletido a cerca de 90°."
  },
  {
    "id": 1494,
    "topicId": 1,
    "question": "O que acontece à componente de rotação de uma força muscular quando o ângulo de inserção tendinosa é muito pequeno (ex: tendão quase paralelo ao osso com θ = 10°)?",
    "options": [
      "A componente rotatória útil atinge o seu valor máximo, uma vez que a orientação quase paralela reduz a resistência mecânica oferecida pela cápsula articular.",
      "A componente rotatória mantém-se inalterada em relação aos 90°, pois a capacidade de gerar torque depende exclusivamente do número total de fibras musculares recrutadas.",
      "Apenas uma pequena fração da força gera momento de rotação (Ft = F · sen 10° ≈ 0,17·F), enquanto a grande maioria da força (Fc = F · cos 10° ≈ 0,98·F) atua comprimindo a articulação.",
      "A componente rotatória passa a orientar-se no sentido da distração articular, afastando passivamente as superfícies ósseas e desestabilizando os ligamentos do membro."
    ],
    "correctIndex": 2,
    "explanation": "Em ângulos agudos, a componente rotacional útil é reduzida (braço curto), mas a componente axial de estabilização articular é muito elevada.",
    "distractorAnalysis": [
      "Está incorreta: a componente rotatória depende do seno do ângulo de inserção e sen 10° é muito pequeno (0,17), minimizando o torque gerado.",
      "Está incorreta: o ângulo de inserção altera profundamente a decomposição vetorial da força, reduzindo drasticamente o torque rotatório.",
      "Está incorreta: com θ = 10°, o cosseno é positivo e muito elevado (0,98), gerando uma força de compressão e estabilização articular."
    ],
    "nursingApplication": "Fundamenta a dupla função dos músculos esqueléticos: produzir movimento angular e estabilizar/coaptar articulações."
  },
  {
    "id": 1495,
    "topicId": 1,
    "question": "Qual é a unidade padrão do Momento de uma Força (Torque) no Sistema Internacional de Unidades (SI)?",
    "options": [
      "Newton-metro (N · m).",
      "Joule (J).",
      "Watt por segundo (W/s).",
      "Pascal por metro quadrado (Pa/m²)."
    ],
    "correctIndex": 0,
    "explanation": "O momento calcula-se multiplicando uma força (N) por uma distância (m), sendo expressa rigorosamente em Newton-metro (N·m).",
    "distractorAnalysis": [
      "Está incorreta: Embora 1 J = 1 N·m dimensionalmente, o Joule reserva-se estritamente para grandezas escalares de Trabalho e Energia.",
      "Está incorreta: Watt por segundo é uma taxa de variação de potência e não uma grandeza de rotação estática ou dinâmica.",
      "Está incorreta: Pa/m² = (N/m²)/m² = N/m⁴, que não possui sentido dimensional para momento mecânico."
    ],
    "nursingApplication": "Assegura a exatidão terminológica e científica na documentação de ensaios dinamométricos e posturais."
  },
  {
    "id": 1496,
    "topicId": 1,
    "question": "Embora dimensionalmente o Momento de uma Força e o Trabalho Mecânico correspondam ao produto de Newtons por metros (N·m), porque é que o Torque NUNCA deve ser expresso em Joules?",
    "options": [
      "Porque o Joule é uma unidade de medida restrita ao cálculo do calor metabólico e de trocas térmicas corporais, sendo desaconselhada pelas convenções internacionais em biomecânica.",
      "Porque o Trabalho é uma grandeza escalar que envolve deslocamento na linha da força (W = F · d · cos θ), enquanto o Momento é uma grandeza vetorial rotacional onde a distância é perpendicular à força (M = F · d · sen θ).",
      "Porque o momento mede a rigidez passiva dos ligamentos articulares e o trabalho quantifica apenas a força gerada pelos sarcómeros musculares durante contrações isotónicas ativas.",
      "Porque o torque é sempre compensado pela força de atrito estático nas superfícies ósseas, inviabilizando qualquer correlação dimensional com grandezas de transferência energética."
    ],
    "correctIndex": 1,
    "explanation": "Por convenção internacional estrita do BIPM: Trabalho/Energia = Joule (J); Momento de Força/Torque = Newton-metro (N·m). A confusão é um erro conceitual grave.",
    "distractorAnalysis": [
      "Está incorreta: o Joule mede energia e trabalho mecânico em geral, não estando limitado a calor metabólico ou termodinâmica.",
      "Está incorreta: o momento é um torque de rotação mecânica e o trabalho é energia mecânica transferida; ambos se aplicam a tecidos e estruturas.",
      "Está incorreta: a distinção decorre da natureza física das grandezas (vetorial vs. escalar) e da geometria do produto vetorial vs. escalar."
    ],
    "nursingApplication": "Distingue com rigor dois conceitos que partilham a mesma dimensão física fundamental ([M]·[L]²·[T]⁻²)."
  },
  {
    "id": 1497,
    "topicId": 1,
    "question": "Qual é a expressão dimensional do Momento de uma Força em termos das grandezas fundamentais de Massa [M], Comprimento [L] e Tempo [T]?",
    "options": [
      "[M] · [L] · [T]⁻¹ (correspondendo a kg · m / s).",
      "[M] · [L]⁻¹ · [T]⁻² (correspondendo a kg / (m · s²)).",
      "[M] · [L]² · [T]⁻² (correspondendo a kg · m² / s²).",
      "[M]² · [L] · [T]⁻³ (correspondendo a kg² · m / s³)."
    ],
    "correctIndex": 2,
    "explanation": "Força [M·L·T⁻²] vezes Distância [L] = [M·L²·T⁻²] = kg·m²/s² = N·m.",
    "distractorAnalysis": [
      "Está incorreta: [M·L·T⁻¹] é a dimensão de quantidade de movimento (momento linear) ou impulso mecânico.",
      "Está incorreta: [M·L⁻¹·T⁻²] é a dimensão de pressão mecânica (Pascal, N/m²).",
      "Está incorreta: [M²·L·T⁻³] não corresponde a nenhuma grandeza física clássica da mecânica comum."
    ],
    "nursingApplication": "Permite a validação de equações biomecânicas avançadas através da análise dimensional."
  },
  {
    "id": 1498,
    "topicId": 1,
    "question": "Se um dinamómetro isocinético computadorizado num centro de reabilitação registar um pico de torque extensor do joelho de 240 N·m a 60°/s, isso significa que:",
    "options": [
      "O quadríceps gerou uma força de tração linear de 240 Newtons ao longo do tendão rotuliano sem dependência do braço de alavanca.",
      "A articulação do joelho desenvolveu uma aceleração angular constante de 240 graus por segundo ao quadrado durante o teste.",
      "O doente realizou um trabalho mecânico total de 240 Joules por segundo contra a resistência elástica passiva do membro inferior.",
      "O músculo quadríceps produziu um momento de força rotacional de 240 Newton-metros em redor do eixo articular do joelho nessa velocidade angular."
    ],
    "correctIndex": 3,
    "explanation": "Dinamómetros isocinéticos medem o torque muscular (N·m) gerado a velocidade angular constante, sendo o padrão-ouro na avaliação de força articular.",
    "distractorAnalysis": [
      "Está incorreta: torque (N·m) resulta da força multiplicada pelo braço de alavanca; a força no tendão é muito superior a 240 N.",
      "Está incorreta: 60°/s é uma velocidade angular constante; num teste isocinético a aceleração angular é zero durante a medição.",
      "Está incorreta: N·m mede momento rotacional; Joules por segundo correspondem a potência mecânica (Watts), e não a pico de torque articular."
    ],
    "nursingApplication": "Capacita o enfermeiro a interpretar relatórios funcionais isocinéticos de doentes em reabilitação motora e desportiva."
  },
  {
    "id": 1499,
    "topicId": 1,
    "question": "Como se converte um valor de torque tradicional expresso em quilograma-força metro (kgf·m) para a unidade oficial do SI em Newton-metro (adotando g = 9,8 m/s²)?",
    "options": [
      "Multiplica-se o valor por 9,8 (1 kgf · m = 9,8 N · m), garantindo o equilíbrio estático.",
      "Divide-se o valor por dezasseis devido à constante elástica da gravidade lunar.",
      "Multiplica-se o valor por 3600 para converter metros em horas hospitalares.",
      "O valor é rigorosamente o mesmo porque 1 kgf é perfeitamente idêntico a 1 N na física médica."
    ],
    "correctIndex": 0,
    "explanation": "Como 1 kgf é o peso de 1 kg na Terra (1 kgf = 1 kg · 9,8 m/s² = 9,8 N), então 1 kgf·m = 9,8 N·m.",
    "distractorAnalysis": [
      "Está incorreta: Dividir por 16 aplicaria a gravidade lunar em cálculos terrestres locais incorretos.",
      "Está incorreta: 3600 é o fator de conversão entre horas e segundos temporais, sem relação com metros ou forças.",
      "Está incorreta: 1 kgf ≈ 9,8 N, sendo quase dez vezes maior do que 1 Newton; não são iguais."
    ],
    "nursingApplication": "Assegura a exatidão na leitura de manuais de equipamentos biomédicos antigos ou de importação."
  },
  {
    "id": 1500,
    "topicId": 1,
    "question": "Qual é a convenção matemática de sinais habitualmente adotada na física e biomecânica para o sentido do Momento de uma Força no plano sagital?",
    "options": [
      "Momento positivo (+) para rotações no sentido horário (a favor dos ponteiros) e momento negativo (-) para o sentido anti-horário.",
      "Momento positivo (+) para rotações no sentido anti-horário (contra os ponteiros do relógio) e momento negativo (-) para rotações no sentido horário.",
      "Momento positivo (+) para movimentos articulares de extensão e negativo (-) para flexão, independentemente do sentido de rotação.",
      "O momento não possui sinal algébrico porque o torque é uma grandeza puramente escalar sem orientação espacial definida."
    ],
    "correctIndex": 1,
    "explanation": "Convenção da regra da mão direita: rotação anti-horária = vetor momento aponta para fora do plano (positivo); rotação horária = aponta para dentro (negativo).",
    "distractorAnalysis": [
      "Está incorreta: pela convenção padrão da regra da mão direita, o sentido anti-horário é considerado positivo e o horário negativo.",
      "Está incorreta: a convenção física baseia-se na rotação no plano cartesiano (anti-horário/horário), e não na denominação anatómica.",
      "Está incorreta: o momento de uma força é uma grandeza vetorial; no plano bidimensional o seu sentido é representado pelo sinal positivo ou negativo."
    ],
    "nursingApplication": "Permite somar algebricamente os torques que tendem a fletir ou estender uma articulação."
  }
];
