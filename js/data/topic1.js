/**
 * Tópico 1: Força, Estado de Equilíbrio e Equilíbrio de Forças
 * 50 Questões Científicas Rigorosas para o 1.º Ano de Enfermagem
 * 
 * NOTA: Conforme instrução expressa do docente, este tópico NÃO inclui
 * qualquer referência a "centro de gravidade", "linha de gravidade",
 * "base de sustentação" ou "ergonomia de mobilização".
 * O foco é estritamente nas Leis de Newton, vetores de força, equilíbrio
 * de forças e biofísica da pressão mecânica nas lesões por pressão.
 */

const TOPIC_1_QUESTIONS = [
  // --- QUESTÕES 101 A 110 ---
  {
    id: 101,
    topicId: 1,
    question: "De acordo com a 1.ª Lei de Newton (Lei da Inércia), qual é o estado de movimento de um corpo quando a resultante de todas as forças que sobre ele atuam é rigorosamente nula (∑F = 0)?",
    options: [
      "O corpo encontra-se obrigatoriamente imóvel em repouso absoluto.",
      "O corpo ou permanece em repouso ou desloca-se em Movimento Retilíneo e Uniforme (MRU) com velocidade vetorial constante.",
      "O corpo move-se com movimento circular uniforme, mantendo o módulo da velocidade constante.",
      "O corpo adquire uma aceleração constante proporcional à sua massa."
    ],
    correctIndex: 1,
    explanation: "A 1.ª Lei de Newton estabelece que, na ausência de uma força resultante não-nula, a aceleração é zero (a = 0). Isto significa que o vetor velocidade não se altera: se o corpo estiver em repouso, permanece em repouso; se estiver em movimento, continua em Movimento Retilíneo e Uniforme (linha reta e velocidade escalar constante).",
    distractorAnalysis: [
      "Opção A está incorreta porque o repouso é apenas um dos dois estados possíveis de equilíbrio translacional; o MRU é igualmente compatível com ∑F = 0.",
      "Opção C está incorreta porque no movimento circular existe aceleração centrípeta (variação contínua da direção da velocidade), o que exige uma força resultante centrípeta não nula.",
      "Opção D está incorreta porque qualquer aceleração diferente de zero requer, pela 2.ª Lei de Newton (F = m·a), uma força resultante não nula."
    ],
    nursingApplication: "Na condução de uma maca ou transporte de um doente em ambulância, quando o veículo trava subitamente, o corpo do doente e os equipamentos médicos tendem a prosseguir o movimento à velocidade anterior por inércia. É por este motivo biofísico fundamental que as grades da maca e os cintos de retenção são obrigatórios na prática de enfermagem."
  },
  {
    id: 102,
    topicId: 1,
    question: "Um enfermeiro aplica uma força horizontal para empurrar uma cama hospitalar com massa total de 120 kg. Sabendo que a cama se desloca com aceleração constante de 0,5 m/s² numa superfície horizontal sem atrito apreciável, qual é o módulo da força resultante que atua sobre a cama?",
    options: [
      "60 N",
      "240 N",
      "600 N",
      "1200 N"
    ],
    correctIndex: 0,
    explanation: "Pela 2.ª Lei de Newton (Princípio Fundamental da Dinâmica), a força resultante é dada por F = m · a. Substituindo os valores: F = 120 kg × 0,5 m/s² = 60 N. A unidade do Sistema Internacional (SI) para força é o Newton (1 N = 1 kg·m/s²).",
    distractorAnalysis: [
      "Opção B (240 N) resulta de uma divisão incorreta da massa pela aceleração (120 / 0,5).",
      "Opção C (600 N) resultaria se a aceleração fosse erroneamente considerada igual a metade da aceleração da gravidade (g/2).",
      "Opção D (1200 N) multiplicaria a massa por 10 (cálculo de peso aproximado), ignorando a aceleração horizontal real especificada no problema."
    ],
    nursingApplication: "Compreender a 2.ª Lei de Newton permite ao enfermeiro antecipar o esforço muscular necessário para acelerar e desacelerar cargas clínicas (camas com doentes, carrinhos de emergência). Quanto maior a massa total, maior a força necessária para atingir a mesma aceleração ou para imobilizar o equipamento em segurança."
  },
  {
    id: 103,
    topicId: 1,
    question: "A 3.ª Lei de Newton postula que a toda a ação corresponde uma reação igual e oposta. Sobre o par de forças de ação e reação, qual das seguintes afirmações é rigorosamente VERDADEIRA?",
    options: [
      "Anulam-se mutuamente porque possuem a mesma intensidade e sentidos opostos no mesmo corpo.",
      "Atuam sempre em corpos diferentes, tendo a mesma linha de ação (mesma direção), intensidades iguais e sentidos contrários.",
      "A força de reação surge sempre com um ligeiro atraso temporal após a aplicação da força de ação.",
      "A força de reação é sempre menor em intensidade se o corpo que reage tiver menor massa."
    ],
    correctIndex: 1,
    explanation: "As forças de ação e reação formam um par indissociável que atua sempre em dois corpos distintos (o corpo A exerce força em B e, simultaneamente, B exerce força em A). Por atuarem em corpos diferentes, NUNCA se anulam uma à outra, têm rigorosamente o mesmo módulo, mesma direção e sentidos opostos, manifestando-se no mesmo instante.",
    distractorAnalysis: [
      "Opção A está incorreta porque forças só se anulam se atuarem sobre o mesmo corpo (como duas forças opostas aplicadas a um mesmo bloco).",
      "Opção C está incorreta porque a interação é rigorosamente simultânea e instantânea na mecânica clássica newtoniana.",
      "Opção D está incorreta porque a intensidade de ambas é estritamente igual (|F_A->B| = |F_B->A|), independentemente de as massas dos corpos serem desiguais."
    ],
    nursingApplication: "Quando o peso de um doente acamado comprime o colchão, o colchão exerce sobre a pele do doente uma força normal igual e de sentido oposto. É essa força de contacto distribuída que gera a pressão que pode ocluir os capilares sanguíneos nos pontos de apoio."
  },
  {
    id: 104,
    topicId: 1,
    question: "A pressão mecânica é definida como a razão entre a força perpendicular exercida e a área de contacto (P = F / A). Do ponto de vista biofísico, porque é que um doente imóvel no leito tem um risco muito mais elevado de desenvolver lesões por pressão (escaras) na região do sacro e calcanhares do que nas costas amplas?",
    options: [
      "Porque o peso do corpo do doente diminui quando a área de contacto é reduzida.",
      "Porque a força peso total concentra-se em pequenas saliências ósseas anatómicas, diminuindo a área de apoio (A) e aumentando drasticamente a pressão tecidual (P).",
      "Porque o coeficiente de atrito é nulo nessas saliências ósseas, impedindo o fluxo sanguíneo.",
      "Porque nessas regiões a aceleração da gravidade local atua com maior intensidade sobre os tecidos."
    ],
    correctIndex: 1,
    explanation: "A pressão é inversamente proporcional à área de contacto para uma mesma força aplicada (P = F / A). Nas proeminências ósseas (como o sacro, trocânteres e calcanhares), a área de suporte A é muito pequena, fazendo com que a pressão local exceda a pressão de encerramento capilar arteriolar (~32 mmHg), colapsando a microcirculação e gerando isquemia tecidual e necrose.",
    distractorAnalysis: [
      "Opção A está incorreta porque o peso corporal do doente (F = m·g) é constante e não varia com a posição ou área de contacto.",
      "Opção C é falsa porque o atrito está presente e até agrava o cisalhamento tecidual, mas não é a razão da concentração de pressão.",
      "Opção D é um absurdo físico: a aceleração da gravidade (g ≈ 9,8 m/s²) é uniforme em todo o leito."
    ],
    nursingApplication: "Este é o princípio físico nuclear da enfermagem na prevenção de lesões por pressão: o uso de colchões de ar com pressão alternada, superfícies de redistribuição de pressão e coxins de posicionamento visa unicamente aumentar a área de suporte (A) para diminuir a pressão tecidual (P) abaixo do limiar de oclusão capilar."
  },
  {
    id: 105,
    topicId: 1,
    question: "Considere um doente em repouso absoluto numa cama hospitalar horizontal. Para que o doente se encontre em estado de equilíbrio de forças estático, qual das seguintes condições tem de ser verificada?",
    options: [
      "A força normal exercida pelo colchão deve ter módulo exatamente igual à força peso do doente e sentido oposto, anulando a resultante vetorial.",
      "A força peso tem de ser estritamente superior à força normal para manter o doente fixo ao leito.",
      "A força de atrito estático tem de ser igual à massa do doente multiplicada pela aceleração da gravidade.",
      "Apenas as forças horizontais precisam de ser nulas, sendo indiferente o balanço de forças verticais."
    ],
    correctIndex: 0,
    explanation: "Para haver equilíbrio estático num plano horizontal, a soma vetorial de todas as forças aplicadas ao corpo tem de ser nula (∑F = 0). Na direção vertical, atuam a força gravítica (peso P, dirigido para baixo) e a força de reação da superfície (força normal N, dirigida para cima). Assim, N - P = 0 => N = P.",
    distractorAnalysis: [
      "Opção B está incorreta porque se P > N haveria aceleração para baixo (o doente afundaria o leito indefinidamente).",
      "Opção C confunde a fórmula do atrito com a do peso e ignora que num leito horizontal sem forças laterais o atrito estático é nulo.",
      "Opção D viola a condição vetorial de equilíbrio, que exige equilíbrio nulo em todos os eixos ortogonais simultaneamente (∑Fx = 0 e ∑Fy = 0)."
    ],
    nursingApplication: "Ao elevar a cabeceira da cama (posição de Fowler), o plano deixa de ser horizontal. A força peso decompõe-se numa componente perpendicular ao colchão e numa componente paralela, provocando forças de cisalhamento sobre o sacro do doente. Conhecer este equilíbrio vetorial orienta o enfermeiro a limitar a elevação excessiva da cabeceira para prevenir lesões teciduais profundas."
  },
  {
    id: 106,
    topicId: 1,
    question: "A força é uma grandeza física vetorial. Num sistema de tração esquelética hospitalar, duas forças perpendiculares entre si com módulos de 30 N e 40 N atuam simultaneamente sobre um pino ortopédico no membro do doente. Qual é o módulo da força resultante aplicada sobre o pino?",
    options: [
      "70 N",
      "10 N",
      "50 N",
      "1200 N"
    ],
    correctIndex: 2,
    explanation: "Por ser uma grandeza vetorial, a resultante de duas forças concorrentes perpendiculares entre si (ângulo de 90°) é calculada pelo Teorema de Pitágoras: R = √(F₁² + F₂²) = √(30² + 40²) = √(900 + 1600) = √2500 = 50 N. Não se podem somar algebricamente grandezas vetoriais com direções distintas.",
    distractorAnalysis: [
      "Opção A (70 N) comete o erro clássico de somar algebricamente os módulos (30 + 40), o que só seria válido se as duas forças tivessem rigorosamente a mesma direção e o mesmo sentido.",
      "Opção B (10 N) subtrai os módulos (40 - 30), o que só ocorreria se atuassem na mesma linha reta em sentidos rigorosamente opostos.",
      "Opção D (1200 N) multiplica os valores dos módulos, o que não tem qualquer significado físico na determinação da resultante de forças."
    ],
    nursingApplication: "Em ortopedia, sistemas de tração esquelética e cutânea (como a tração de Russell ou tração de Buck) utilizam roldanas e pesos calibrados para alinhar fragmentos de fraturas. O enfermeiro deve compreender a composição vetorial das forças: alterar o ângulo de um cabo ou a posição do membro modifica completamente a direção e o módulo da força resultante transmitida ao osso fraturado."
  },
  {
    id: 107,
    topicId: 1,
    question: "Ao mobilizar um doente acamado com lençol de transferência, o enfermeiro constata que é necessária uma força maior para colocar o corpo em movimento a partir do repouso do que para manter o seu deslizamento suave. Que princípio biofísico do atrito explica este facto?",
    options: [
      "A aceleração da gravidade diminui assim que o doente entra em movimento retilíneo.",
      "O coeficiente de atrito estático (μ_e) entre os tecidos em repouso é superior ao coeficiente de atrito cinético (μ_c) entre superfícies em movimento relativo.",
      "A massa do doente reduz-se à medida que a velocidade de deslizamento aumenta.",
      "A força normal exercida pelo colchão anula-se completamente durante o movimento."
    ],
    correctIndex: 1,
    explanation: "Em física do contacto, as microasperezas entre duas superfícies em repouso entrelaçam-se intimamente, exigindo uma força limite superior para romper as adesões microscópicas (atrito estático máximo, F_atrito_e = μ_e · N). Uma vez iniciado o movimento relativo, o atrito cinético (F_atrito_c = μ_c · N) é menor porque as superfícies apenas deslizam sobre as pontas das asperezas, sendo sempre μ_e > μ_c.",
    distractorAnalysis: [
      "Opção A é incorreta: a aceleração da gravidade (g) é constante e invariável com o estado de movimento no leito.",
      "Opção C viola a conservação da massa newtoniana: a massa de um doente é invariável à escala das velocidades hospitalares.",
      "Opção D é falsa: a força normal N continua presente e igual ao peso perpendicular ao colchão durante o deslizamento."
    ],
    nursingApplication: "O uso de lençóis de transferência de baixo atrito (feitos de tecidos técnicos sintéticos deslizantes com coeficiente μ muito reduzido) diminui em mais de 60% a força de atrito requerida para mover o doente. Isto protege simultaneamente a coluna do enfermeiro contra esforços excessivos e reduz as forças de cisalhamento que lesam a pele frágil do doente idoso."
  },
  {
    id: 108,
    topicId: 1,
    question: "Na linguagem hospitalar quotidiana, diz-se frequentemente que 'o doente pesa 70 kg'. Do ponto de vista da física e da biofísica rigorosa, qual é a distinção fundamental entre MASSA e PESO?",
    options: [
      "Massa e peso são grandezas exatamente equivalentes, sendo ambas forças vetoriais medidas em quilogramas.",
      "A Massa é uma grandeza escalar intrínseca que mede a inércia da matéria (em kg), enquanto o Peso é uma força vetorial atrativa (em Newton, P = m·g) exercida pela gravidade sobre essa massa.",
      "A Massa depende do local onde o doente se encontra, enquanto o Peso é invariável em qualquer planeta do universo.",
      "O Peso é uma grandeza escalar medida em Pascals e a Massa é uma grandeza vetorial medida em Joules."
    ],
    correctIndex: 1,
    explanation: "A Massa (m) é uma propriedade escalar intrínseca que quantifica a quantidade de matéria e a sua inércia, sendo medida em quilogramas (kg) no SI. O Peso (P) é uma força vetorial (P = m · g) resultante da interação gravitacional entre o corpo e a Terra, sendo medido em Newtons (N). Um doente com 70 kg de massa tem na Terra um peso real de aproximadamente P = 70 × 9,8 = 686 N.",
    distractorAnalysis: [
      "Opção A confunde uma propriedade escalar da matéria com uma força vetorial, perpetuando o erro de senso comum de medir forças em kg.",
      "Opção C inverte completamente os conceitos: a massa é constante em qualquer ponto do universo, enquanto o peso varia com a aceleração da gravidade local g.",
      "Opção D atribui unidades totalmente erróneas (Pascal é unidade de pressão e Joule é de energia/trabalho)."
    ],
    nursingApplication: "Em farmacologia clínica e cálculo de dosagem terapêutica (mg/kg/dia), os enfermeiros utilizam a massa corporal (kg). Contudo, ao calcular a sobrecarga mecânica articular, a resistência do leito ou as tensões em próteses, o parâmetro biomecânico relevante é a força Peso (em Newton), que multiplica a massa pela aceleração gravitacional."
  },
  {
    id: 109,
    topicId: 1,
    question: "Um membro inferior de um doente acamado com fratura encontra-se sujeito a um sistema mecânico de alinhamento. Para garantir que o membro permaneça completamente imóvel sem sofrer qualquer translação indesejada, que condição de equilíbrio de forças tem de ser rigorosamente satisfeita?",
    options: [
      "A resultante das forças que atuam no membro deve ser não-nula para mantê-lo sob tensão ativa contínua.",
      "A soma vetorial de todas as forças aplicadas ao membro deve ser rigorosamente nula (∑Fx = 0 e ∑Fy = 0).",
      "Apenas a força exercida pelos pesos suspensos precisa de ser igual ao dobro do peso do doente.",
      "As forças devem atuar exclusivamente num único eixo vertical, sendo impossível haver forças horizontais."
    ],
    correctIndex: 1,
    explanation: "A primeira condição de equilíbrio (equilíbrio de translação estático) da mecânica newtoniana postula que a soma vetorial de todas as forças externas aplicadas a um corpo tem de ser igual ao vetor nulo (∑F = 0). No plano cartesiano, isto desdobra-se na exigência simultânea de que a soma das componentes horizontais seja zero (∑Fx = 0) e a soma das componentes verticais seja zero (∑Fy = 0).",
    distractorAnalysis: [
      "Opção A está incorreta: se a resultante fosse não-nula, o membro aceleraria (F = m·a), deslocando-se e desalinhando os topos ósseos da fratura.",
      "Opção C propõe uma relação arbitrária perigosa que provocaria tração excessiva e lesão neurológica ou vascular no membro.",
      "Opção D é incorreta: sistemas de tração utilizam frequentemente cabos diagonais com componentes horizontais e verticais em simultâneo."
    ],
    nursingApplication: "O controlo da posição e dos cabos de tração é uma responsabilidade vigilante de enfermagem: se os pesos de tração tocarem no chão ou se os cabos ficarem presos nas roldanas da cama, o equilíbrio de forças é quebrado (∑F ≠ 0), provocando dor aguda ao doente e desvio dos fragmentos ósseos fraturados."
  },
  {
    id: 110,
    topicId: 1,
    question: "Sabendo que a pressão é a razão entre força e área (P = F / A), por que motivo uma agulha hipodérmica ultra-fina (calibre fino, como 27G) penetra a pele e os tecidos com enorme facilidade mediante uma força muscular manual minúscula do enfermeiro?",
    options: [
      "Porque a agulha emite uma corrente elétrica que desintegra a derme antes do contacto.",
      "Porque a ponta biselada da agulha tem uma área de contacto microscópica (A minúsculo), fazendo com que uma força reduzida (F) gere uma pressão local colossal (P) que supera a tensão de rutura mecânica da pele.",
      "Porque as agulhas hipodérmicas eliminam a pressão atmosférica dentro do tecido biológico.",
      "Porque a pele humana tem uma complacência infinita que atrai o metal para o seu interior."
    ],
    correctIndex: 1,
    explanation: "Pela fórmula P = F / A, a pressão é inversamente proporcional à área de contacto. A ponta biselada de uma agulha de pequeno calibre possui uma área de secção da ordem de frações de milímetro quadrado (A ≈ 10⁻⁷ m²). Uma força de compressão manual de apenas 2 N exercida pelo enfermeiro gera na ponta uma pressão local superior a 20 MegaPascals (20 000 000 Pa), superando instantaneamente a resistência à tração da epiderme com mínimo traumatismo tecidual.",
    distractorAnalysis: [
      "Opção A é fantasiosa: agulhas comuns de injeção são mecânicas e não utilizam eletricidade.",
      "Opção C é falsa: a penetração depende da pressão mecânica de cisalhamento pontual e não de alterações na pressão atmosférica.",
      "Opção D não possui fundamento físico: os tecidos oferecem resistência mecânica à deformação e penetração."
    ],
    nursingApplication: "Na administração de fármacos subcutâneos e intramusculares, a escolha do calibre da agulha (ex: agulhas finas de insulina 30G-32G vs agulhas intramusculares 21G-23G) rege a relação pressão/força e o conforto do utente: agulhas mais finas exigem menos força para transpor a pele, causando menos dor e lesão tissular."
  },

  // --- QUESTÕES 111 A 120 ---
  {
    id: 111,
    topicId: 1,
    question: "Em física e metrologia clínica, qual é a definição estrita da unidade de força 'Newton' (N) em termos das grandezas fundamentais do Sistema Internacional (SI)?",
    options: [
      "1 N = 1 kg · m / s²",
      "1 N = 1 kg · s / m",
      "1 N = 1 kg · m² / s",
      "1 N = 1 g · cm / s²"
    ],
    correctIndex: 0,
    explanation: "Pela segunda lei de Newton (F = m · a), como a massa é medida em quilogramas (kg) e a aceleração em metros por segundo ao quadrado (m/s²), a unidade de força é 1 N = 1 kg·m/s². O Newton representa a força necessária para comunicar a uma massa de 1 kg uma aceleração de 1 m/s².",
    distractorAnalysis: [
      "Opção B tem uma relação dimensional incorreta entre tempo e comprimento.",
      "Opção C corresponde à unidade de momento angular ou ação física (kg·m²/s).",
      "Opção D define a Dina (dyn), unidade de força do antigo sistema CGS (1 dyn = 10⁻⁵ N)."
    ],
    nursingApplication: "A correta identificação das unidades do SI é essencial para a leitura e calibração de equipamentos hospitalares biomecânicos, como dinamómetros para avaliar a força de preensão manual em doentes desnutridos ou em reabilitação neurológica."
  },
  {
    id: 112,
    topicId: 1,
    question: "Um dinamómetro de mão regista uma força de preensão palmar de 350 N num doente adulto jovem. Se expressarmos esta força em Dinas no sistema CGS (sabendo que 1 N = 10⁵ dyn), qual é o valor correspondente?",
    options: [
      "35 dyn",
      "3,5 × 10⁷ dyn",
      "3,5 × 10³ dyn",
      "350 × 10⁻⁵ dyn"
    ],
    correctIndex: 1,
    explanation: "Como 1 N = 10⁵ dyn, convertendo 350 N temos: 350 × 10⁵ = 3,5 × 10² × 10⁵ = 3,5 × 10⁷ dyn (35 milhões de dinas). A conversão entre unidades é uma operação elementar da biofísica quantitativa.",
    distractorAnalysis: [
      "Opção A divide por 10 em vez de multiplicar pela potência 10⁵.",
      "Opção C multiplica apenas por 10, esquecendo a ordem de grandeza do fator 10⁵.",
      "Opção D multiplica por 10⁻⁵, que seria a conversão inversa (de dinas para Newtons)."
    ],
    nursingApplication: "A dinamometria palmar é um biomarcador clínico de fragilidade utilizado por enfermeiros: quedas acentuadas da força muscular em Newtons correlacionam-se diretamente com sarcopenia, risco de desnutrição proteica e prognóstico desfavorável em doentes oncológicos e cirúrgicos."
  },
  {
    id: 113,
    topicId: 1,
    question: "Durante a administração de uma injeção com seringa manual, o enfermeiro exerce uma força no êmbolo. Porque é que uma seringa de 1 mL com êmbolo de pequeno diâmetro gera uma pressão de injeção muito maior do que uma seringa de 20 mL, quando aplicada a MESMA força manual (F)?",
    options: [
      "Porque o medicamento dentro da seringa de 1 mL tem maior gravidade.",
      "Porque a área do êmbolo da seringa de 1 mL é muito menor; como P = F / A, para uma mesma força muscular F, a pressão gerada é inversamente proporcional à área.",
      "Porque o plástico da seringa de 1 mL é mais viscoso que o da seringa de 20 mL.",
      "Porque a seringa de 1 mL atrai os eletrões do tecido por indução eletrostática."
    ],
    correctIndex: 1,
    explanation: "A fórmula da pressão é P = F / A. O êmbolo de uma seringa de 1 mL tem um diâmetro de cerca de 4,7 mm (área ≈ 17 mm²), enquanto o êmbolo de uma seringa de 20 mL tem um diâmetro de cerca de 19 mm (área ≈ 284 mm², quase 17 vezes maior). Aplicando a mesma força muscular de 20 N, a seringa de 1 mL gera uma pressão colossal (~1176 kPa ≈ 11,6 atm), enquanto a de 20 mL gera apenas ~70 kPa (~0,7 atm).",
    distractorAnalysis: [
      "Opção A é absurda: a gravidade é a mesma independentemente do volume da seringa.",
      "Opção C confunde a reologia do polímero com a transmissão mecânica de pressão nos fluidos.",
      "Opção D é uma ficção que mistura eletrostática com mecânica clássica de fluidos."
    ],
    nursingApplication: "REGRA DE SEGURANÇA CRÍTICA EM ENFERMAGEM: Nunca utilizar seringas pequenas (< 10 mL) para desobstruir cateteres venosos centrais (CVC ou PICC)! A pressão colossal gerada por uma seringa de 1 mL ou 3 mL pode facilmente exceder a pressão de rutura do cateter (tensão de rotura mecânica do silicone/poliuretano), partindo o cateter dentro da circulação do doente e causando embolia por corpo estranho."
  },
  {
    id: 114,
    topicId: 1,
    question: "Um doente com peso de 800 N repousa sobre um colchão hospitalar comum. A área total de contacto corporal em que o peso é suportado é de 0,8 m². Qual é a pressão mecânica média exercida pelo doente sobre o colchão?",
    options: [
      "1000 Pa",
      "640 Pa",
      "10 000 Pa",
      "64 000 Pa"
    ],
    correctIndex: 0,
    explanation: "A pressão média é calculada diretamente pela razão entre a força e a área: P = F / A = 800 N / 0,8 m² = 1000 N/m² = 1000 Pa (ou 1 kPa). Como 1 mmHg ≈ 133,3 Pa, 1000 Pa equivalem a cerca de 7,5 mmHg de pressão média global.",
    distractorAnalysis: [
      "Opção B (640 Pa) resultaria da multiplicação incorreta de 800 por 0,8.",
      "Opção C (10 000 Pa) erra a ordem de grandeza da divisão decimal.",
      "Opção D confunde a operação e adiciona zeros sem base matemática."
    ],
    nursingApplication: "Embora a pressão média global (7,5 mmHg) seja muito inferior à pressão capilar crítica (~32 mmHg), a distribuição real NÃO é uniforme. Nas proeminências ósseas, a área de contacto é de apenas alguns centímetros quadrados, elevando a pressão pontual local para valores superiores a 80-100 mmHg, demonstrando a necessidade de alívio e alternância postural de 2 em 2 horas."
  },
  {
    id: 115,
    topicId: 1,
    question: "A conversão de unidades de pressão é fundamental na prática hospitalar. Sabendo que 1 mmHg corresponde a aproximadamente 133,3 Pa, a quantos Pascals corresponde a pressão de perfusão capilar arteriolar média de 32 mmHg?",
    options: [
      "4266 Pa (aprox. 4,27 kPa)",
      "32 Pa",
      "4,16 Pa",
      "133 300 Pa"
    ],
    correctIndex: 0,
    explanation: "Multiplica-se a pressão em mmHg pelo fator de conversão: P = 32 mmHg × 133,322 Pa/mmHg ≈ 4266 Pa (4,27 kPa). Este valor representa a pressão hidrostática intravascular normal na extremidade arteriolar do capilar cutâneo.",
    distractorAnalysis: [
      "Opção B assume erroneamente que 1 mmHg é igual a 1 Pa.",
      "Opção C divide 133,3 por 32 em vez de multiplicar.",
      "Opção D multiplica 133,3 por 1000, ignorando o valor de 32 mmHg."
    ],
    nursingApplication: "Se uma proeminência óssea exercer sobre a pele uma pressão externa superior a 4,27 kPa (32 mmHg), o capilar sanguíneo colapsa por compressão mecânica externa. O fluxo sanguíneo cessa (isquemia tecidual), privando as células de oxigénio e glicose e iniciando a cascata de necrose que origina uma lesão por pressão."
  },
  {
    id: 116,
    topicId: 1,
    question: "Ao elevar a cabeceira da cama hospitalar num ângulo de 45° (posição de Fowler semi-sentada), o peso do doente decompõe-se. O que sucede à força tangencial paralela ao plano do leito (força de cisalhamento) à medida que o ângulo de elevação aumenta?",
    options: [
      "A força paralela ao plano diminui e anula-se aos 90°.",
      "A força paralela ao leito aumenta progressivamente (Ft = P · sen θ), puxando o esqueleto do doente em direção aos pés da cama e gerando forças severas de cisalhamento sobre os vasos sanguíneos sacrais.",
      "A força paralela permanece constante e a gravidade inverte o sentido.",
      "A força perpendicular (normal) atinge o valor infinito."
    ],
    correctIndex: 1,
    explanation: "Num plano inclinado com ângulo θ, a força peso (P) decompõe-se em duas componentes perpendiculares entre si: a componente perpendicular N = P · cos θ e a componente tangencial paralela Ft = P · sen θ. À medida que o ângulo θ aumenta de 0° para 45° ou 60°, o sen θ cresce, fazendo aumentar drasticamente a força tangencial que arrasta o corpo para baixo.",
    distractorAnalysis: [
      "Opção A descreve o comportamento do cosseno (que diminui), e não da componente tangencial (seno).",
      "Opção C viola a decomposição trigonométrica dos vetores newtonianos.",
      "Opção D é fisicamente absurda: cos θ varia entre 1 e 0, sendo N sempre finita e decrescente."
    ],
    nursingApplication: "O cisalhamento é o mecanismo mais destrutivo nas lesões por pressão: a pele do sacro fica 'colada' ao colchão pelo atrito, enquanto o esqueleto ósseo e a fáscia profunda escorregam para baixo impelidos pela gravidade. Isto estira, torce e lacera as artérias perfurantes profundas. Por esta razão física, as diretrizes de enfermagem recomendam limitar a cabeceira a ≤ 30° sempre que clinicamente viável."
  },
  {
    id: 117,
    topicId: 1,
    question: "Dois enfermeiros puxam um doente horizontalmente para cima no leito, aplicando cada um uma força na mesma direção e no mesmo sentido com intensidades de 150 N e 180 N, respetivamente. Qual é a força resultante total aplicada pelos enfermeiros?",
    options: [
      "30 N",
      "330 N",
      "27 000 N",
      "1,2 N"
    ],
    correctIndex: 1,
    explanation: "Quando duas forças atuam na mesma linha de ação (mesma direção) e no mesmo sentido (ângulo de 0° entre elas), o módulo da resultante é a soma aritmética direta dos módulos das forças componentes: R = F₁ + F₂ = 150 N + 180 N = 330 N.",
    distractorAnalysis: [
      "Opção A (30 N) subtrai os módulos, o que só ocorreria se os enfermeiros puxassem em sentidos opostos (forças antagónicas).",
      "Opção C (27 000 N) multiplica os valores, o que não traduz composição vetorial.",
      "Opção D divide os valores, sem base na mecânica newtoniana."
    ],
    nursingApplication: "A ação concertada e em sincronia temporal ('ao sinal de três!') na mobilização em equipa garante que as forças se somem com eficiência máxima no mesmo sentido vetorial, reduzindo o esforço individual e tornando a manobra suave e segura para o doente."
  },
  {
    id: 118,
    topicId: 1,
    question: "Se os mesmos dois enfermeiros puxassem em sentidos estritamente opostos na mesma linha de ação (um com 180 N para a cabeceira e o outro com 150 N para os pés), qual seria a força resultante sobre o doente?",
    options: [
      "330 N no sentido da cabeceira",
      "30 N no sentido da cabeceira (no sentido da maior força)",
      "Zero Newtons, porque forças opostas anulam-se sempre",
      "150 N no sentido dos pés"
    ],
    correctIndex: 1,
    explanation: "Para forças colineares que atuam na mesma direção mas em sentidos contrários (ângulo de 180°), a força resultante é a diferença algébrica entre a maior e a menor intensidade: R = F₁ - F₂ = 180 N - 150 N = 30 N, orientada no sentido da força de maior magnitude (para a cabeceira).",
    distractorAnalysis: [
      "Opção A soma as forças, ignorando que possuem sentidos opostos.",
      "Opção C assume anulação mútua, o que só ocorreria se ambas tivessem rigorosamente o mesmo módulo (180 N e 180 N).",
      "Opção D atribui a intensidade da força menor no sentido oposto ao vetor resultante real."
    ],
    nursingApplication: "Compreender a subtração de forças colineares opostas ilustra por que motivo manobras desarticuladas entre membros da equipa anulam o trabalho mecânico útil e geram movimentos aos solavancos que causam desconforto e dor ao utente."
  },
  {
    id: 119,
    topicId: 1,
    question: "Uma balança hospitalar calibrada mede uma massa de 65 kg para uma doente. Considerando a aceleração da gravidade média local na superfície da Terra como g = 9,8 m/s², qual é a intensidade exata da força peso exercida pela Terra sobre esta doente?",
    options: [
      "65 N",
      "637 N",
      "6,63 N",
      "6370 N"
    ],
    correctIndex: 1,
    explanation: "A força peso calcula-se por P = m · g. Substituindo os valores: P = 65 kg × 9,8 m/s² = 637 N. A força peso aponta verticalmente para baixo, em direção ao centro da Terra.",
    distractorAnalysis: [
      "Opção A confunde a unidade de massa (kg) com a unidade de peso (Newton), assumindo g = 1 m/s².",
      "Opção C divide a massa pela gravidade (65 / 9,8).",
      "Opção D multiplica por 98 m/s², cometendo um erro de vírgula decimal."
    ],
    nursingApplication: "Ao dimensionar equipamentos clínicos (como macas de transporte bariátrico, guinchos elétricos de levante ou elevadores hospitalares com capacidade de carga nominal expressa em Newtons ou kg), o enfermeiro deve verificar a margem de segurança de peso real para prevenir colapsos estruturais do material."
  },
  {
    id: 120,
    topicId: 1,
    question: "No contexto da física do atrito, qual das seguintes variáveis NÃO influencia de forma alguma o coeficiente de atrito estático (μ_e) entre duas superfícies em contacto?",
    options: [
      "A natureza dos materiais que constituem as duas superfícies em contacto (ex: pele e algodão vs pele e cetim sintético).",
      "O estado de rugosidade, acabamento ou humidade das superfícies.",
      "A área aparente macroscópica de contacto entre as superfícies sólidas (pelas Leis empíricas de Amontons).",
      "A presença de um lubrificante ou película intermediária entre as superfícies."
    ],
    correctIndex: 2,
    explanation: "Pelas clássicas Leis de Amontons-Coulomb do atrito sólido, a força de atrito (F_atrito = μ · N) e o coeficiente de atrito (μ) são independentes da área aparente macroscópica de contacto para materiais rígidos comuns. O atrito depende exclusivamente da natureza química e molecular dos materiais, do seu acabamento e da presença de lubrificantes.",
    distractorAnalysis: [
      "Opção A influencia fortemente o coeficiente de atrito (diferentes pares de materiais têm diferentes valores de μ).",
      "Opção B influencia decisivamente o atrito (superfícies húmidas ou maceradas alteram radicalmente o atrito com a pele).",
      "Opção D altera diretamente o atrito (lubrificantes criam camadas fluidas que reduzem o coeficiente μ)."
    ],
    nursingApplication: "A humidade na pele de doentes incontinentes (urina, suor) aumenta a fricção e o coeficiente de atrito com os lençóis de algodão, promovendo maceração e remoção da camada córnea protetora. A aplicação de cremes barreira pelo enfermeiro cria uma película lipídica hidrofóbica que reduz o atrito e protege o estrato córneo."
  },

  // --- QUESTÕES 121 A 130 ---
  {
    id: 121,
    topicId: 1,
    question: "Um cabo de um sistema de tração ortopédica passa por uma roldana ideal fixa fixada ao leito hospitalar. Qual é a função puramente mecânica desempenhada por uma roldana fixa ideal num sistema de forças?",
    options: [
      "Multiplica a intensidade da força aplicada por quatro vezes.",
      "Altera apenas a direção e o sentido da força de tração aplicada, sem modificar a intensidade (módulo) da força transmitida pelo cabo.",
      "Reduz a massa dos pesos suspensos para metade.",
      "Anula completamente a força peso dos pesos calibrados."
    ],
    correctIndex: 1,
    explanation: "Uma roldana fixa simples sem atrito não proporciona qualquer vantagem mecânica de força (a relação de forças é 1:1). A sua função biomecânica exclusiva é desviar a linha de ação da força (mudar a direção e o sentido do cabo), permitindo que um peso que cai verticalmente sob a gravidade aplique uma força horizontal ou oblíqua de tração no membro do doente.",
    distractorAnalysis: [
      "Opção A confunde com sistemas complexos de cadernais compostos ou talhas exponenciais.",
      "Opção C é falsa: a massa do peso é constante e invariável.",
      "Opção D viola a conservação da energia e a dinâmica das roldanas ideais."
    ],
    nursingApplication: "Ao inspecionar o sistema de tração esquelética de um doente com fratura do fémur, o enfermeiro deve verificar se o cabo corre suavemente na garganta da roldana fixa. Se o cabo saltar da roldana ou ficar entalado, o atrito elevado altera o módulo da força efetiva transmitida ao osso fraturado."
  },
  {
    id: 122,
    topicId: 1,
    question: "Se a roldana do sistema de tração não for ideal e apresentar elevado atrito no seu eixo por falta de manutenção, que consequência biofísica terá sobre a força de tração efetivamente transmitida ao membro fraturado do doente?",
    options: [
      "A força transmitida ao membro será superior ao peso calibrado suspenso.",
      "Parte da força é dissipada na superação do atrito da roldana, fazendo com que a força de tração efetiva no membro seja inferior ao valor nominal do peso suspenso.",
      "A força torna-se instantaneamente nula e o cabo evapora.",
      "A aceleração da gravidade no quarto hospitalar passa para o dobro."
    ],
    correctIndex: 1,
    explanation: "Em máquinas reais com atrito, o rendimento mecânico é inferior a 100%. O atrito mecânico no eixo da roldana opõe-se ao movimento do cabo, dissipando energia sob forma de calor. Assim, a tensão efetiva T transmitida ao membro fraturado torna-se inferior ao peso P dos discos suspensos (T < P), comprometendo o alinhamento da fratura.",
    distractorAnalysis: [
      "Opção A violaria a conservação da energia (o atrito nunca adiciona força útil ao sistema).",
      "Opção C e Opção D apresentam afirmações exageradas e sem fundamento físico."
    ],
    nursingApplication: "A vigilância clínica da tração esquelética é da responsabilidade direta da equipa de enfermagem: a roldana deve rodar livremente, sem ferrugem nem bloqueios mecânicos, garantindo que o valor nominal prescrito pelo ortopedista é rigorosamente aquele que atua no foco da fratura."
  },
  {
    id: 123,
    topicId: 1,
    question: "Considere uma roldana móvel inserida num sistema de tração ou suspensão de um membro. Numa roldana móvel ideal com dois ramos de cabo paralelos a sustentar a carga, qual é a vantagem mecânica teórica obtida?",
    options: [
      "A força muscular necessária para equilibrar a carga é reduzida a metade (F = P / 2).",
      "A força necessária é duplicada.",
      "A vantagem mecânica é nula e a carga cai.",
      "A velocidade do cabo torna-se igual à velocidade da luz."
    ],
    correctIndex: 0,
    explanation: "Numa roldana móvel ideal, a carga está suspensa no eixo da própria roldana, que é suportada por dois segmentos paralelos de cabo. Cada segmento de cabo suporta metade da carga total (T = P / 2). Portanto, a força potente requerida para equilibrar a carga é apenas metade da resistência (vantagem mecânica de força igual a 2).",
    distractorAnalysis: [
      "Opção B confunde vantagem mecânica de força com desvantagem.",
      "Opção C é falsa: a roldana móvel é uma das máquinas simples fundamentais da física clássica.",
      "Opção D é uma afirmação sem sentido físico."
    ],
    nursingApplication: "Sistemas de roldanas móveis são incorporados em guinchos e elevadores de transferência hospitalares manuais, permitindo que um único enfermeiro erga um doente acamado com elevado peso corporal aplicando apenas uma fração da força do peso total."
  },
  {
    id: 124,
    topicId: 1,
    question: "Do ponto de vista vetorial, qual é o ângulo entre a linha de ação da força gravítica (peso de um doente) e a superfície de um colchão de leito perfeitamente horizontal?",
    options: [
      "0 graus (paralelo)",
      "90 graus (perpendicular / ortogonal)",
      "45 graus (oblíquo)",
      "180 graus (antiparalelo)"
    ],
    correctIndex: 1,
    explanation: "A força gravítica atua sempre na vertical do lugar (em direção ao centro da Terra). Um colchão perfeitamente nivelado define um plano horizontal. Portanto, o ângulo formado entre o vetor vertical da força peso e o plano horizontal do leito é de exatamente 90 graus (perpendicularidade).",
    distractorAnalysis: [
      "Opção A descreve vetores contidos no próprio plano ou paralelos a ele.",
      "Opção C ocorreria apenas se a cama estivesse inclinada a 45°.",
      "Opção D descreve vetores colineares de sentidos contrários."
    ],
    nursingApplication: "Com o leito perfeitamente horizontal (θ = 0°), 100% da força peso do doente atua como força perpendicular (força normal compressiva N = P), sendo nula a componente tangencial de cisalhamento. Isto confirma porque o decúbito dorsal plano oferece mínimo risco de cisalhamento para a pele sacral."
  },
  {
    id: 125,
    topicId: 1,
    question: "Na prevenção de lesões por pressão em doentes acamados, o uso de superfícies estáticas ou dinâmicas de redistribuição de pressão (como colchões de espuma viscoelástica de alta densidade ou ar alternado) baseia-se diretamente em qual princípio biofísico?",
    options: [
      "Aumentar a força da gravidade que atrai o doente para o chão.",
      "Aumentar a área de contacto efetiva (A) através da imersão e envolvência anatómica do corpo, reduzindo proporcionalmente a pressão tecidual média e de pico (P = F / A).",
      "Eliminar totalmente o atrito cinético no ar ambiente.",
      "Transformar a energia mecânica do corpo em radiação gama pura."
    ],
    correctIndex: 1,
    explanation: "Pela relação fundamental P = F / A, como o peso corporal F do doente não pode ser alterado, a única forma física de reduzir a pressão mecânica P exercida sobre a pele é maximizar a área de contacto A. Colchões viscoelásticos e pneumáticos moldam-se aos contornos do corpo ('imersão e envelopamento'), distribuindo o peso por uma área muito mais ampla e impedindo que a pressão local exceda os 32 mmHg.",
    distractorAnalysis: [
      "Opção A é absurda: a aceleração gravitacional não é alterada pelo material do colchão.",
      "Opção C refere o atrito no ar, que tem influência nula na compressão capilar sacral.",
      "Opção D inventa um fenómeno nuclear sem relação com colchões hospitalares."
    ],
    nursingApplication: "A seleção adequada da superfície de apoio (colchão reativo vs colchão ativo de ar alternado) é uma intervenção autónoma de enfermagem baseada na escala de Braden de risco de lesão por pressão, otimizando a distribuição de pressões conforme o peso e a imobilidade do doente."
  },
  {
    id: 126,
    topicId: 1,
    question: "Dois vetores de força com módulos de 6 N e 8 N atuam sobre um mesmo ponto. Qual é o valor MÁXIMO e o valor MÍNIMO absolutos que a resultante destas duas forças pode assumir, variando o ângulo entre elas?",
    options: [
      "Máximo de 48 N e mínimo de 1,33 N",
      "Máximo de 14 N (mesmo sentido) e mínimo de 2 N (sentidos opostos)",
      "Máximo de 10 N e mínimo de zero N",
      "Máximo e mínimo são sempre exatamente 7 N"
    ],
    correctIndex: 1,
    explanation: "O módulo da resultante de dois vetores varia entre a sua soma aritmética (quando o ângulo entre eles é 0°, forças com o mesmo sentido: R_max = 6 + 8 = 14 N) e a sua diferença absoluta (quando o ângulo é 180°, forças com sentidos opostos: R_min = 8 - 6 = 2 N). Qualquer outra inclinação angular resultará num módulo intermédio (ex: a 90°, R = √(6² + 8²) = 10 N).",
    distractorAnalysis: [
      "Opção A multiplica e divide os módulos, o que não reflete cálculo vetorial.",
      "Opção C (10 N) corresponde exclusivamente ao caso particular de perpendicularidade (90°).",
      "Opção D calcula a média aritmética simples, ignorando a dependência angular vetorial."
    ],
    nursingApplication: "Em trações e imobilizações com múltiplos cabos ortopédicos, pequenos desvios angulares alteram a força resultante entre os extremos teóricos de soma máxima e subtração, podendo comprometer o alinhamento ósseo pretendido."
  },
  {
    id: 127,
    topicId: 1,
    question: "Num choque mecânico entre uma ambulância em marcha de emergência e um obstáculo rígido, os ocupantes continuam em movimento para a frente até serem travados pelos cintos de segurança. Que propriedade intrínseca da matéria fundamenta este comportamento?",
    options: [
      "A Inércia (medida quantitativamente pela massa do corpo).",
      "A velocidade da luz no meio líquido.",
      "A viscosidade do oxigénio gasoso.",
      "O calor específico do ar comprimido."
    ],
    correctIndex: 0,
    explanation: "A Inércia é a tendência natural de todos os corpos materiais para resistir a alterações no seu estado de repouso ou de movimento retilíneo uniforme. Quanto maior for a massa de um corpo, maior é a sua inércia. Na desaceleração brusca do veículo, nenhuma força atua inicialmente sobre os passageiros para fazê-los desacelerar ao mesmo tempo que o chassi, continuando a mover-se à velocidade anterior até uma força externa (o cinto de segurança) atuar sobre eles.",
    distractorAnalysis: [
      "Opção B, C e D referem propriedades óticas e termodinâmicas sem relação com o princípio da inércia mecânica."
    ],
    nursingApplication: "O uso rigoroso do cinto de três pontos pelos profissionais de enfermagem no compartimento assistencial da ambulância e a retenção de todo o material médico solto (monitores desfibrilhadores, malas de fármacos) previne acidentes fatais por projeção inercial durante travagens de emergência."
  },
  {
    id: 128,
    topicId: 1,
    question: "A aceleração de um corpo de massa constante é diretamente proporcional à força resultante que atua sobre ele e tem:",
    options: [
      "Sempre a direção perpendicular à força resultante.",
      "A mesma direção e o mesmo sentido da força resultante vetorial.",
      "Sentido sempre oposto ao da força resultante.",
      "Direção aleatória e independente da força aplicada."
    ],
    correctIndex: 1,
    explanation: "A equação vetorial fundamental da dinâmica é F_res = m · a. Como a massa m é um escalar estritamente positivo (m > 0), o vetor aceleração (a) tem obrigatoriamente a mesma linha de ação (mesma direção) e a mesma orientação (mesmo sentido) do vetor força resultante (F_res).",
    distractorAnalysis: [
      "Opção A confunde com a relação entre força centrípeta e velocidade linear.",
      "Opção C só ocorreria se a massa pudesse ser uma grandeza negativa, o que não existe na física clássica.",
      "Opção D viola a causalidade newtoniana da dinâmica."
    ],
    nursingApplication: "Ao empurrar um cadeirão de rodas com um doente, a aceleração imprimida segue exatamente a linha e direção da força exercida pelo enfermeiro nas pegas: empurrar para a frente gera aceleração para a frente; aplicar forças laterais desvia a trajetória do cadeirão."
  },
  {
    id: 129,
    topicId: 1,
    question: "Uma maca com um doente tem massa total de 100 kg e desloca-se em linha reta com velocidade constante de 1,2 m/s ao longo de um corredor horizontal. Qual é o módulo da aceleração e da força resultante sobre a maca durante este movimento?",
    options: [
      "Aceleração = 1,2 m/s² e Força Resultante = 120 N",
      "Aceleração = 0 m/s² e Força Resultante = 0 N",
      "Aceleração = 9,8 m/s² e Força Resultante = 980 N",
      "Aceleração = 0,6 m/s² e Força Resultante = 60 N"
    ],
    correctIndex: 1,
    explanation: "Se o corpo se move em linha reta e com velocidade escalar constante (Movimento Retilíneo e Uniforme - MRU), não há variação do vetor velocidade ao longo do tempo (Δv = 0). Logo, a aceleração é rigorosamente nula (a = 0 m/s²). Pela 2.ª Lei de Newton, F_res = m · a = 100 kg × 0 = 0 N. A força horizontal aplicada pelo enfermeiro serve apenas para anular exatamente o atrito das rodas.",
    distractorAnalysis: [
      "Opção A confunde a velocidade constante (1,2 m/s) com a aceleração (m/s²).",
      "Opção C confunde a cinemática horizontal livre com a queda livre gravitacional vertical.",
      "Opção D inventa valores sem nexo matemático com as condições de velocidade constante."
    ],
    nursingApplication: "Após vencer o atrito estático inicial para colocar a maca em movimento, o enfermeiro só precisa de exercer uma força igual à força de atrito das rodas para manter a maca a deslocar-se em MRU a passo constante com esforço mínimo."
  },
  {
    id: 130,
    topicId: 1,
    question: "O atrito entre a pele do doente e os lençóis da cama hospitalar pode originar forças de atrito estático e cinético. O que acontece à força de atrito cinético (deslizamento) se o peso normal do doente contra o colchão for duplicado?",
    options: [
      "A força de atrito cinético mantém-se inalterada.",
      "A força de atrito cinético duplica, pois Fatrito = μ · N, sendo diretamente proporcional à força normal.",
      "A força de atrito cinético reduz-se a metade.",
      "A força de atrito cinético passa para zero."
    ],
    correctIndex: 1,
    explanation: "Pela equação do atrito sólido F_atrito = μ_c · N, a força de atrito é diretamente proporcional à força normal N exercida perpendicularmente entre as superfícies. Se o peso normal do doente duplicar (de N para 2N), a força de atrito cinético necessária para o deslizar duplica proporcionalmente.",
    distractorAnalysis: [
      "Opção A e C ignoram a proporcionalidade direta linear estabelecida pelas leis do atrito.",
      "Opção D é incorreta: maior força de contacto intensifica as interações microscópicas entre superfícies."
    ],
    nursingApplication: "Em doentes obesos ou com grande massa corporal, a força normal N é muito superior, multiplicando a força de atrito e tornando as transferências manuais muito mais pesadas. O recurso a pranchas de transferência e lençóis deslizantes ou sistemas mecânicos é fundamental para a segurança clínica."
  },

  // --- QUESTÕES 131 A 140 ---
  {
    id: 131,
    topicId: 1,
    question: "Do ponto de vista mecânico e clínico, em que difere a 'força de cisalhamento' da simples 'força compressiva normal' na génese das lesões da pele no doente acamado?",
    options: [
      "A força compressiva atua paralelamente à superfície da pele, enquanto o cisalhamento atua a 90 graus no vácuo.",
      "A força compressiva atua perpendicularmente à superfície esmagando os tecidos verticalmente, enquanto o cisalhamento atua paralelamente (tangencialmente) à superfície cutânea, provocando deslizamento relativo entre as camadas da pele e o esqueleto ósseo, dobrando e ocluindo os microvasos.",
      "A força compressiva só existe em doentes em pé e o cisalhamento só existe em doentes na água.",
      "O cisalhamento é uma força magnética que atrai o ferro da hemoglobina."
    ],
    correctIndex: 1,
    explanation: "A compressão é uma tensão mecânica normal (perpendicular à superfície, gerando encurtamento axial). O cisalhamento é uma tensão tangencial (paralela às superfícies): ocorre quando duas camadas teciduais contíguas deslizam em direções opostas. O cisalhamento angula, deforma e rompe os capilares e arteríolas perfurantes do plexo subcutâneo, causando isquemia profunda mesmo com pressões compressivas mais baixas.",
    distractorAnalysis: [
      "Opção A inverte a orientação geométrica dos vetores perpendicular e tangencial.",
      "Opção C confunde posturas corporais com a definição física de tensões mecânicas.",
      "Opção D confunde forças de contacto mecânico com magnetismo molecular."
    ],
    nursingApplication: "Ao reposicionar um doente que escorregou para os pés da cama, NUNCA o arraste diretamente sobre os lençóis! Arrastar o doente gera um pico de cisalhamento sobre a pele sacral. O procedimento correto de enfermagem é aliviar o contacto elevando o corpo com o lençol de reposicionamento antes de o mover para a cabeceira."
  },
  {
    id: 132,
    topicId: 1,
    question: "Qual das seguintes alterações fisiopatológicas cutâneas resulta diretamente da aplicação prolongada de uma pressão mecânica tecidual externa superior à pressão capilar arteriolar (~32 mmHg)?",
    options: [
      "Hiperoxigenação extrema das células dérmicas com aceleração da mitose.",
      "Oclusão dos vasos da microcirculação, colapso do retorno venoso e fluxo arterial, isquemia celular e subsequente necrose tecidual.",
      "Desenvolvimento de ossos adicionais no interior do tecido celular subcutâneo.",
      "Diminuição instantânea da temperatura de fusão do estrato córneo."
    ],
    correctIndex: 1,
    explanation: "Os capilares cutâneos são estruturas de paredes muito delgadas (endotélio uniestratificado). Quando a pressão mecânica externa exercida pelo apoio sobre o colchão excede a pressão transmural capilar (~32 mmHg na terminação arteriolar), os microvasos colapsam fisicamente. A perfusão sanguínea cessa, instalando-se a anóxia celular, acumulação de catabolitos ácidos e morte celular por apoptose/necrose.",
    distractorAnalysis: [
      "Opção A descreve o oposto: a oclusão capilar causa hipóxia e morte celular, não hiperoxigenação.",
      "Opção C refere miosite ossificante heterotópica, que não é a fisiopatologia das úlceras por pressão.",
      "Opção D é uma afirmação sem base na biologia de tecidos vivos."
    ],
    nursingApplication: "O aparecimento de eritema que não branqueia à digito-pressão (lesão por pressão de Categoria/Grau I) é o primeiro sinal de alarme que o enfermeiro deteta na inspeção diária da pele: indica que a isquemia já provocou resposta inflamatória por lesão microvascular, exigindo alívio imediato de carga nessa zona."
  },
  {
    id: 133,
    topicId: 1,
    question: "A unidade de pressão 'Pascal' (Pa) no Sistema Internacional de Unidades é matematicamente equivalente a:",
    options: [
      "1 Newton por metro quadrado (1 N/m²)",
      "1 Joule por segundo (1 J/s)",
      "1 quilograma por metro (1 kg/m)",
      "1 Newton por centímetro cúbico (1 N/cm³)"
    ],
    correctIndex: 0,
    explanation: "Por definição formal no SI, a pressão é força por unidade de superfície: P = F / A. A unidade de força é o Newton (N) e a de área é o metro quadrado (m²). Logo, 1 Pascal = 1 N/m² = 1 kg/(m·s²).",
    distractorAnalysis: [
      "Opção B define o Watt (W), unidade de potência (J/s).",
      "Opção C é a massa linear (kg/m).",
      "Opção D mistura força com volume, não correspondendo a pressão."
    ],
    nursingApplication: "Em ventiladores mecânicos invasivos em unidades de cuidados intensivos, as pressões das vias aéreas são monitorizadas em cmH₂O ou hPa (hectopascals, onde 1 hPa = 100 Pa ≈ 1,02 cmH₂O). O enfermeiro regista estas grandezas para monitorizar o risco de barotrauma pulmonar."
  },
  {
    id: 134,
    topicId: 1,
    question: "Num sistema ortopédico com três forças concorrentes em equilíbrio estático no mesmo plano horizontal (F₁ + F₂ + F₃ = 0), se representarmos graficamente os vetores em cadeia, que figura geométrica fechada é obrigatoriamente formada?",
    options: [
      "Uma linha reta aberta infinita",
      "Um polígono fechado (neste caso, um triângulo fechado de forças)",
      "Uma circunferência de raio imaginário",
      "Uma parábola descendente"
    ],
    correctIndex: 1,
    explanation: "Pelo método do polígono vetorial, se a soma de vários vetores é nula (∑F = 0), o ponto terminal do último vetor coincide rigorosamente com a origem do primeiro vetor, fechando o polígono. Para três forças concorrentes coplanares em equilíbrio estático, os três vetores desenham um triângulo fechado.",
    distractorAnalysis: [
      "Opção A implicaria uma resultante não-nula com aceleração do corpo.",
      "Opção C e Opção D não correspondem a métodos geométricos de adição de vetores discretos."
    ],
    nursingApplication: "A representação em triângulo de forças permite calcular graficamente ou por trigonometria (Lei dos Senos / Teorema de Lamy) a tração exata necessária em cada cabo de suporte ortopédico para garantir a imobilização indolor do membro sem translação."
  },
  {
    id: 135,
    topicId: 1,
    question: "Dois blocos de pesos diferentes repousam sobre a mesma superfície horizontal. Se o bloco A tem o dobro da massa do bloco B, e ambos têm o mesmo coeficiente de atrito estático com o chão, como se compara a força de atrito estático máxima necessária para iniciar o movimento de cada um?",
    options: [
      "A força de atrito estático máxima do bloco A é igual à do bloco B.",
      "A força de atrito estático máxima do bloco A é o dobro da do bloco B, pois Fatrito_max = μ_e · N e o peso de A é o dobro de B.",
      "A força de atrito estático máxima do bloco A é quatro vezes menor que a de B.",
      "O bloco A não tem atrito porque a inércia anula a força de contacto."
    ],
    correctIndex: 1,
    explanation: "Como F_atrito_max = μ_e · N e num plano horizontal N = P = m · g, a força de atrito estático máxima é proporcional à massa do corpo: F_atrito_A = μ_e · (2m) · g = 2 · [μ_e · m · g] = 2 · F_atrito_B. É necessária exatamente o dobro da força horizontal para iniciar o movimento do bloco A.",
    distractorAnalysis: [
      "Opção A ignora a dependência direta da força normal N.",
      "Opção C inverte a relação física de dependência da massa.",
      "Opção D é contrária às leis da física (maior massa aumenta a força normal e o atrito)."
    ],
    nursingApplication: "Ao mobilizar doentes de biotipos diferentes, o enfermeiro deve planear os recursos humanos e mecânicos necessários: transferir um doente de 120 kg exige o dobro da força de atrito estático de um doente de 60 kg, exigindo o auxílio de mais colegas ou de um guincho mecânico para evitar lesões musculoesqueléticas na equipa."
  },
  {
    id: 136,
    topicId: 1,
    question: "Quando um doente se senta numa cadeira de rodas sem almofada de alívio de pressão, a maior parte do seu peso corporal concentra-se nas duas tuberosidades isquiáticas. Se a área combinada das duas tuberosidades for de apenas 0,008 m² e a porção de peso suportada pelo assento for de 400 N, qual é a pressão local exercida sobre os tecidos dos ísquios?",
    options: [
      "50 000 Pa (cerca de 375 mmHg)",
      "3,2 Pa",
      "500 Pa",
      "50 Pa"
    ],
    correctIndex: 0,
    explanation: "Calculando a pressão: P = F / A = 400 N / 0,008 m² = 50 000 N/m² = 50 000 Pa. Convertendo para milímetros de mercúrio: 50 000 Pa / 133,322 Pa/mmHg ≈ 375 mmHg! Trata-se de uma pressão monstruosa, mais de 10 vezes superior à pressão capilar normal de 32 mmHg.",
    distractorAnalysis: [
      "Opção B multiplica 400 por 0,008 em vez de dividir.",
      "Opção C e Opção D erram por fatores de 10 e 100 na divisão decimal."
    ],
    nursingApplication: "Uma pressão de 375 mmHg nos ísquios oclui completamente a circulação e provoca isquemia profunda e dor em poucos minutos. Por esta razão biofísica, os enfermeiros prescrevem almofadas de ar ou gel viscoelástico para doentes em cadeiras de rodas e ensinam o doente ou cuidador a realizar alívios de pressão pontuais a cada 15 a 30 minutos."
  },
  {
    id: 137,
    topicId: 1,
    question: "O conceito de 'equilíbrio de forças translacional' exige que a aceleração linear do centro de massa do corpo seja nula. Um doente deitado que adormece num leito hospitalar que se encontra inclinado a 10 graus em relação à horizontal, sem deslizar para baixo, encontra-se em:",
    options: [
      "Queda livre acelerada permanente.",
      "Equilíbrio estático, pois a força de atrito estático entre o corpo e o colchão equilibra rigorosamente a componente tangencial do peso (Fatrito_e = P · sen 10°).",
      "Movimento hiperbólico perpétuo.",
      "Equilíbrio puramente gravitacional instável no vácuo."
    ],
    correctIndex: 1,
    explanation: "Se o doente não se move e permanece imóvel no plano inclinado, a resultante das forças paralelas ao plano tem de ser nula: ∑Ft = 0 => P · sen θ - F_atrito_e = 0 => F_atrito_e = P · sen θ. O atrito estático desenvolve exatamente a força contrária necessária para anular a tendência de deslizamento imposta pela gravidade.",
    distractorAnalysis: [
      "Opção A e C descrevem corpos em movimento e aceleração, incompatíveis com a imobilidade estática do doente.",
      "Opção D utiliza terminologia inadequada para descrever o atrito com o colchão ao ar livre."
    ],
    nursingApplication: "Embora o doente pareça em repouso e sem deslizar macroscopicamente, o atrito estático que mantém o corpo retido gera forças contínuas de tensão tangencial na derme sacral. Se a inclinação da cama for prolongada, este cisalhamento estático contínuo lesa a microcirculação."
  },
  {
    id: 138,
    topicId: 1,
    question: "O que distingue fundamentalmente uma grandeza escalar de uma grandeza vetorial na biofísica médica?",
    options: [
      "A grandeza escalar necessita de direção e sentido, e a vetorial apenas de um número.",
      "A grandeza escalar fica perfeitamente definida por um valor numérico acompanhado da respetiva unidade (ex: massa de 60 kg, temperatura de 37 °C), enquanto a grandeza vetorial necessita obrigatoriamente de módulo, direção, sentido e ponto de aplicação (ex: força de 50 N vertical para baixo aplicada no fémur).",
      "Grandezas escalares só existem em química e grandezas vetoriais só existem em astronomia.",
      "A grandeza escalar varia com o tempo e a vetorial é invariável."
    ],
    correctIndex: 1,
    explanation: "Esta é a distinção primordial da física: grandezas escalares (massa, temperatura, volume, energia) possuem apenas magnitude numérica e unidade de medida. Grandezas vetoriais (força, velocidade, aceleração, campo elétrico) exigem especificação completa de intensidade (módulo), direção (reta de suporte), sentido (orientação para onde aponta) e ponto focal de aplicação.",
    distractorAnalysis: [
      "Opção A inverte as definições fundamentais.",
      "Opção C e Opção D apresentam critérios arbitrários e erróneos."
    ],
    nursingApplication: "Ao comunicar na passagem de turno a colocação de uma tração ortopédica, dizer apenas 'aplicámos 50 N de força' é insuficiente: é crucial especificar a direção e o sentido (ex: '50 N de tração longitudinal em alinhamento com o eixo diafisário do fémur')."
  },
  {
    id: 139,
    topicId: 1,
    question: "Em reabilitação funcional no leito, quando um doente exerce uma contração muscular isométrica contra a barra de suporte da cama, a barra não se move. Do ponto de vista da 3.ª Lei de Newton, a força que a barra exerce sobre as mãos do doente é:",
    options: [
      "Nula, porque a barra é um objeto inanimado sem músculos.",
      "Rigorosamente igual em intensidade (módulo), na mesma linha de ação e de sentido contrário à força que as mãos do doente exercem sobre a barra.",
      "Metade da força do doente dividida pela gravidade.",
      "Duas vezes maior que a força do doente para vencer o músculo."
    ],
    correctIndex: 1,
    explanation: "A 3.ª Lei de Newton aplica-se universalmente a qualquer par de corpos em interação, sejam eles animados (músculo humano) ou inanimados (barra metálica de suporte). Se o doente puxa a barra com 200 N, a barra simultaneamente puxa as mãos do doente com rigorosamente 200 N na mesma direção e sentido oposto.",
    distractorAnalysis: [
      "Opção A perpetua a conceção errónea comum de que materiais inanimados não exercem forças de reação.",
      "Opção C e D propõem relações numéricas desprovidas de fundamentação na mecânica clássica."
    ],
    nursingApplication: "Exercícios isométricos no leito utilizam a reação de superfícies rígidas para fortalecer a musculatura do doente sem produzir movimento articular, sendo prescritos e incentivados em planos de cuidados de enfermagem de reabilitação motora precoce."
  },
  {
    id: 140,
    topicId: 1,
    question: "Qual das seguintes ações clínicas de enfermagem NÃO contribui para a redução da pressão mecânica (P = F / A) exercida sobre as proeminências ósseas de um doente acamado?",
    options: [
      "Alternar a posição do doente entre decúbito dorsal, decúbito lateral direito e esquerdo de 2 em 2 horas.",
      "Colocar um coxim sob as pernas para manter os calcanhares suspensos no ar sem contacto com o colchão ('calcanhares flutuantes').",
      "Puxar o doente arrastando-o a seco pelo lençol de algodão rugoso para o acelerar.",
      "Utilizar um colchão viscoelástico de redistribuição que aumente a área de contacto do tronco e nádegas."
    ],
    correctIndex: 2,
    explanation: "Arrastar o doente a seco sobre lençol rugoso não reduz a pressão e gera forças destrutivas intensas de atrito e cisalhamento sobre a epiderme fragilizada. Todas as outras opções são medidas profiláticas baseadas na biofísica que aumentam a área de apoio ou suspendem totalmente a carga em saliências ósseas.",
    distractorAnalysis: [
      "Opção A reduz o tempo de exposição à pressão em cada ponto ósseo específico.",
      "Opção B reduz a força e a pressão mecânica nos calcanhares para zero absoluto ao deixá-los suspensos.",
      "Opção D aumenta a área A diminuindo a pressão tecidual P."
    ],
    nursingApplication: "A suspensão dos calcanhares com travesseiros posicionados longitudinalmente sob a barriga das pernas é a intervenção de eleição de enfermagem para eliminar a pressão nos calcâneos, o segundo local mais frequente de lesões por pressão nos hospitais."
  },

  // --- QUESTÕES 141 A 150 ---
  {
    id: 141,
    topicId: 1,
    question: "Dois cabos de tração exercem forças no mesmo ponto com módulos de 20 N e 20 N, formando entre si um ângulo de 120 graus. Qual é o módulo da força resultante gerada por este par de forças?",
    options: [
      "40 N",
      "20 N",
      "0 N",
      "400 N"
    ],
    correctIndex: 1,
    explanation: "Pela Lei dos Cossenos para a resultante de dois vetores: R = √(F₁² + F₂² + 2·F₁·F₂·cos θ). Como cos 120° = -0,5, temos: R = √(20² + 20² + 2 · 20 · 20 · (-0,5)) = √(400 + 400 - 400) = √400 = 20 N! No caso particular de duas forças iguais formando 120°, a resultante tem módulo exatamente igual ao de cada força individual.",
    distractorAnalysis: [
      "Opção A (40 N) assumiria ângulo de 0° (mesmo sentido).",
      "Opção C (0 N) assumiria ângulo de 180° (sentidos opostos colineares).",
      "Opção D multiplica os módulos sem relação com a geometria vetorial."
    ],
    nursingApplication: "Em trações ortopédicas de suspensão equilibrada, a geometria angular dos cabos determina a tração real no membro: afastar ou aproximar as polias altera o ângulo θ e a intensidade da força resultante que mantém a fratura reduzida."
  },
  {
    id: 142,
    topicId: 1,
    question: "Um corpo encontra-se em repouso sobre uma mesa horizontal sob ação exclusiva do seu peso e da força normal da mesa. De acordo com a 3.ª Lei de Newton, onde se encontra aplicada e qual é a origem da força de REAÇÃO ao peso do corpo?",
    options: [
      "A reação ao peso é a força normal exercida pela mesa sobre a base do corpo.",
      "A reação ao peso é uma força de atração gravitacional com intensidade igual, dirigida para cima e aplicada no centro da Terra.",
      "A reação ao peso encontra-se no ar que rodeia o corpo.",
      "O peso não tem força de reação porque a gravidade é uma ilusão de ótica."
    ],
    correctIndex: 1,
    explanation: "Este é um dos erros conceptuais mais frequentes em física: a força normal NÃO é a reação ao peso! O peso é a força com que a Terra atrai o corpo; logo, pela 3.ª Lei de Newton, a sua reação é a força de igual intensidade com que o corpo atrai gravitacionalmente a Terra (aplicada no centro da Terra). A força normal é a reação da compressão mecânica entre a mesa e a superfície de apoio do corpo.",
    distractorAnalysis: [
      "Opção A comete o erro clássico de confundir a força normal com a reação ao peso (atuam no mesmo corpo e têm origens físicas diferentes).",
      "Opção C e Opção D apresentam explicações falsas sem base na física clássica."
    ],
    nursingApplication: "Diferenciar a origem das forças permite ao enfermeiro compreender que apoiar um doente num colchão não elimina a força peso do utente: apenas introduz forças normais distribuídas de suporte mecânico para equilibrar o peso."
  },
  {
    id: 143,
    topicId: 1,
    question: "Em que unidade do Sistema Internacional se exprime o Coeficiente de Atrito (μ)?",
    options: [
      "Newton (N)",
      "Pascal (Pa)",
      "É uma grandeza adimensional (sem unidade de medida).",
      "Metro por segundo (m/s)"
    ],
    correctIndex: 2,
    explanation: "Como F_atrito = μ · N, isolando o coeficiente de atrito obtém-se μ = F_atrito / N. Sendo a razão entre duas forças expressas na mesma unidade (Newton / Newton), as unidades cancelam-se mutuamente, resultando num número puro adimensional sem qualquer unidade de medida.",
    distractorAnalysis: [
      "Opção A confunde o coeficiente de atrito com a força de atrito (que se mede em Newton).",
      "Opção B é a unidade de pressão.",
      "Opção D é a unidade de velocidade linear."
    ],
    nursingApplication: "Os fabricantes de tecidos de cuidados hospitalares indicam nos seus folhetos técnicos o coeficiente de atrito do material (ex: lençóis de poliéster deslizante com μ = 0,15 vs algodão tradicional com μ = 0,50). Compreender que é um índice adimensional ajuda a equipa a comparar objetivamente a eficácia dos dispositivos de deslizamento."
  },
  {
    id: 144,
    topicId: 1,
    question: "Qual das seguintes situações clínicas de um doente no leito representa uma condição em que a força de atrito estático assume o seu valor MÁXIMO possível (Fatrito_max = μ_e · N)?",
    options: [
      "O doente está a deslizar a grande velocidade pelos lençóis abaixo em direção ao chão.",
      "O doente encontra-se na iminência imediata de iniciar o deslizamento num leito inclinado, no limite exato antes de começar a mover-se.",
      "O doente está suspenso no ar por um guincho mecânico sem qualquer contacto com a cama.",
      "O doente está deitado num colchão perfeitamente horizontal sem qualquer força horizontal aplicada."
    ],
    correctIndex: 1,
    explanation: "A força de atrito estático é uma força de autoajuste: enquanto o corpo está em repouso, ela é exatamente igual à força que tenta mover o corpo (F_atrito_e = F_aplicada). Ela cresce progressivamente até atingir um valor limite máximo (Fatrito_max = μ_e · N), momento denominado 'iminência de movimento'. Se a força aplicada exceder esse limite, o corpo começa a deslizar e o atrito passa a ser cinético.",
    distractorAnalysis: [
      "Opção A descreve movimento relativo com atrito cinético (μ_c · N), que é menor que o estático máximo.",
      "Opção C não tem superfícies sólidas em contacto, logo o atrito de superfície é nulo.",
      "Opção D representa atrito estático nulo (F_atrito_e = 0), pois não há força paralela a tentar mover o corpo."
    ],
    nursingApplication: "Ao inclinar a cabeceira da cama hospitalar, há um ângulo crítico limite acima do qual a componente tangencial do peso supera o atrito estático máximo e o doente começa a escorregar. O enfermeiro reconhece esta transição de fase biomecânica e evita ângulos superiores a 30° em doentes de risco."
  },
  {
    id: 145,
    topicId: 1,
    question: "Um dinamómetro de mola utilizado na reabilitação muscular de um doente distende-se 5 cm quando sujeito a uma força de tração de 100 N. Admitindo que a mola obedece à Lei de Hooke (F = k · Δx), qual é a constante elástica (k) desta mola?",
    options: [
      "20 N/m",
      "2000 N/m",
      "500 N/m",
      "5 N/m"
    ],
    correctIndex: 1,
    explanation: "Pela Lei de Hooke, F = k · Δx. Convertendo a deformação para metros: Δx = 5 cm = 0,05 m. Isolando a constante elástica: k = F / Δx = 100 N / 0,05 m = 2000 N/m. A mola requer 2000 N de força para esticar 1 metro.",
    distractorAnalysis: [
      "Opção A (20 N/m) esqueceu a conversão de centímetros para metros (100 / 5).",
      "Opção C (500 N/m) resulta da multiplicação de 100 por 5.",
      "Opção D não reflete o cálculo da constante elástica."
    ],
    nursingApplication: "Fitas elásticas de resistência calibrada (como as faixas Theraband) utilizadas em fisioterapia e enfermagem de reabilitação possuem diferentes cores correspondentes a constantes elásticas k crescentes, permitindo graduar com rigor as forças aplicadas no fortalecimento muscular pós-operatório."
  },
  {
    id: 146,
    topicId: 1,
    question: "Dois enfermeiros transferem um doente de 80 kg de uma cama para uma maca. Ambos exercem forças verticais que sustentam o peso do doente. Se o enfermeiro A suporta uma força de 450 N, qual é a força que o enfermeiro B tem de exercer para manter o doente em equilíbrio vertical sustentado (adotando g = 10 m/s²)?",
    options: [
      "800 N",
      "350 N",
      "450 N",
      "1250 N"
    ],
    correctIndex: 1,
    explanation: "O peso total do doente é P = m · g = 80 kg × 10 m/s² = 800 N. Para que o doente esteja em equilíbrio vertical sustentado, a soma das forças verticais para cima tem de igualar o peso para baixo: F_A + F_B = P => 450 N + F_B = 800 N => F_B = 800 - 450 = 350 N.",
    distractorAnalysis: [
      "Opção A (800 N) é o peso total do doente.",
      "Opção C (450 N) assumiria distribuição simétrica que totalizaria 900 N.",
      "Opção D (1250 N) somaria 800 com 450 incorretamente."
    ],
    nursingApplication: "Nas transferências de doentes entre planos, a carga divide-se entre os membros da equipa consoante a posição de cada um. O enfermeiro mais próximo do tronco e bacia suporta habitualmente maior fração do peso do que o colega que segura os membros inferiores, devendo a equipa coordenar-se para equalizar os esforços."
  },
  {
    id: 147,
    topicId: 1,
    question: "Num procedimento de punção venosa periférica, o bisel da agulha de 20G (área aproximada de 0,5 mm² = 0,5 × 10⁻⁶ m²) penetra a veia após o enfermeiro aplicar uma força axial de 1 N. Qual é a pressão exercida na ponta do bisel sobre a parede venosa?",
    options: [
      "2 000 000 Pa (2 MegaPascals)",
      "0,5 Pa",
      "200 Pa",
      "1000 Pa"
    ],
    correctIndex: 0,
    explanation: "Calculando a pressão mecânica pontual: P = F / A = 1 N / (0,5 × 10⁻⁶ m²) = 2 × 10⁶ N/m² = 2 000 000 Pa = 2 MPa. Uma pressão de 2 milhões de Pascals é suficiente para vencer a resistência mecânica elástica da parede da veia sem necessitar de pancadas ou movimentos violentos.",
    distractorAnalysis: [
      "Opção B, C e D cometem erros de cálculo na conversão de mm² para m² (1 mm² = 10⁻⁶ m²)."
    ],
    nursingApplication: "A técnica de punção venosa exige movimentos firmes, suaves e contínuos: a geometria aguçada do bisel garante pressões de corte locais na ordem dos MegaPascals com forças minúsculas de 1 a 2 N, permitindo cateterizar veias frágeis sem extravasamento nem hematomas."
  },
  {
    id: 148,
    topicId: 1,
    question: "Qual das seguintes grandezas mecânicas é considerada um vetor nulo num corpo humano que permanece imóvel em repouso na enfermaria?",
    options: [
      "A força da gravidade (peso).",
      "A quantidade de movimento (momento linear) e a aceleração.",
      "A massa corporal do utente.",
      "A pressão arterial sistólica."
    ],
    correctIndex: 1,
    explanation: "Por definição na cinemática e dinâmica clássicas, se a velocidade de um corpo em repouso é zero e constante (v = 0), a sua aceleração é o vetor nulo (a = 0) e a sua quantidade de movimento linear (p = m · v) é igualmente o vetor nulo. A força da gravidade e a massa continuam a existir plenamente.",
    distractorAnalysis: [
      "Opção A é falsa: a gravidade atua permanentemente enquanto o corpo tiver massa no campo terrestre.",
      "Opção C é incorreta: a massa é um escalar positivo constante.",
      "Opção D é incorreta: a pressão arterial mantém-se dinâmica no ciclo cardíaco."
    ],
    nursingApplication: "Em repouso mecânico, o balanço vetorial nulo permite estabilidade clínica e recuperação energética do doente, sendo o repouso absoluto prescrito em fases agudas de enfarte do miocárdio ou politraumatismo."
  },
  {
    id: 149,
    topicId: 1,
    question: "O conceito de 'pressão de fecho capilar' na derme humana situa-se normalmente no intervalo de:",
    options: [
      "100 a 140 mmHg",
      "25 a 32 mmHg",
      "1 a 2 mmHg",
      "500 a 760 mmHg"
    ],
    correctIndex: 1,
    explanation: "A pressão nos capilares cutâneos humanos varia de cerca de 32 mmHg na extremidade arteriolar a cerca de 12-15 mmHg na extremidade venular, situando-se a pressão média de perfusão em cerca de 20-25 mmHg. Qualquer pressão de compressão externa sustentada que ultrapasse o limiar de 25 a 32 mmHg colapsa o lúmen capilar.",
    distractorAnalysis: [
      "Opção A corresponde à pressão arterial sistólica sistémica nas grandes artérias.",
      "Opção C é demasiado baixa (pressão no átrio direito / PVC normal varia entre 2 a 6 mmHg).",
      "Opção D corresponde à pressão atmosférica ao nível do mar (760 mmHg)."
    ],
    nursingApplication: "O valor biofísico de 32 mmHg é o limiar de referência internacional (gold standard) em estudos de enfermagem para avaliar a eficácia de colchões hospitalares: uma boa superfície de redistribuição de pressão não deve permitir pressões pontuais superiores a 32 mmHg nas zonas de maior risco."
  },
  {
    id: 150,
    topicId: 1,
    question: "A decomposição de uma força F num par de eixos cartesianos ortogonais (x e y) com ângulo de inclinação θ em relação ao eixo horizontal x é calculada através das relações trigonométricas:",
    options: [
      "Fx = F · sen θ e Fy = F · cos θ",
      "Fx = F · cos θ e Fy = F · sen θ",
      "Fx = F / sen θ e Fy = F / cos θ",
      "Fx = F + θ e Fy = F - θ"
    ],
    correctIndex: 1,
    explanation: "Pela definição das funções trigonométricas no triângulo retângulo: o cateto adjacente ao ângulo θ é dado por cos θ = Fx / F => Fx = F · cos θ; o cateto oposto é dado por sen θ = Fy / F => Fy = F · sen θ. Pelo Teorema de Pitágoras, F² = Fx² + Fy².",
    distractorAnalysis: [
      "Opção A inverte as projeções quando o ângulo θ é definido com o eixo horizontal.",
      "Opção C e Opção D apresentam operações matematicamente incorretas na projeção vetorial."
    ],
    nursingApplication: "A decomposição trigonométrica Fx = F·cos θ e Fy = F·sen θ é a base matemática que os enfermeiros utilizam para compreender como a inclinação da cabeceira da cama converte o peso vertical do doente numa força tangencial de cisalhamento sacral."
  }
];
