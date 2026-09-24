/**
 * Tópico 1: Força, Estado de Equilíbrio e Equilíbrio de Forças
 * 200 Questões Clínicas Rigorosas para o 1.º Ano de Enfermagem (IDs 1001 a 1200)
 * 
 * NOTA: Conforme instrução expressa do docente, este tópico NÃO inclui
 * qualquer referência a "centro de gravidade", "linha de gravidade",
 * "base de sustentação" ou "ergonomia de mobilização".
 * O foco é estritamente nas Leis de Newton, vetores de força, equilíbrio
 * de forças e biofísica da pressão mecânica nas lesões por pressão.
 */

const TOPIC_1_QUESTIONS = [
  {
    "id": 1001,
    "topicId": 1,
    "question": "De acordo com a 1.ª Lei de Newton (Lei da Inércia), qual é o estado de movimento de um corpo quando a resultante de todas as forças que sobre ele atuam é rigorosamente nula (∑F = 0)?",
    "options": [
      "O corpo encontra-se obrigatoriamente imóvel em repouso absoluto.",
      "O corpo ou permanece em repouso ou desloca-se em Movimento Retilíneo e Uniforme (MRU) com velocidade vetorial constante.",
      "O corpo move-se com movimento circular uniforme, mantendo o módulo da velocidade constante.",
      "O corpo adquire uma aceleração constante proporcional à sua massa."
    ],
    "correctIndex": 1,
    "explanation": "A 1.ª Lei de Newton estabelece que, na ausência de uma força resultante não-nula, a aceleração é zero (a = 0). Isto significa que o vetor velocidade não se altera: se o corpo estiver em repouso, permanece em repouso; se estiver em movimento, continua em Movimento Retilíneo e Uniforme (linha reta e velocidade escalar constante).",
    "distractorAnalysis": [
      "Opção A está incorreta porque o repouso é apenas um dos dois estados possíveis de equilíbrio translacional; o MRU é igualmente compatível com ∑F = 0.",
      "Opção C está incorreta porque no movimento circular existe aceleração centrípeta (variação contínua da direção da velocidade), o que exige uma força resultante centrípeta não nula.",
      "Opção D está incorreta porque qualquer aceleração diferente de zero requer, pela 2.ª Lei de Newton (F = m·a), uma força resultante não nula."
    ],
    "nursingApplication": "Na condução de uma maca ou transporte de um doente em ambulância, quando o veículo trava subitamente, o corpo do doente e os equipamentos médicos tendem a prosseguir o movimento à velocidade anterior por inércia. É por este motivo biofísico fundamental que as grades da maca e os cintos de retenção são obrigatórios na prática de enfermagem."
  },
  {
    "id": 1002,
    "topicId": 1,
    "question": "Um enfermeiro aplica uma força horizontal para empurrar uma cama hospitalar com massa total de 120 kg. Sabendo que a cama se desloca com aceleração constante de 0,5 m/s² numa superfície horizontal sem atrito apreciável, qual é o módulo da força resultante que atua sobre a cama?",
    "options": [
      "60 N",
      "240 N",
      "600 N",
      "1200 N"
    ],
    "correctIndex": 0,
    "explanation": "Pela 2.ª Lei de Newton (Princípio Fundamental da Dinâmica), a força resultante é dada por F = m · a. Substituindo os valores: F = 120 kg × 0,5 m/s² = 60 N. A unidade do Sistema Internacional (SI) para força é o Newton (1 N = 1 kg·m/s²).",
    "distractorAnalysis": [
      "Opção B (240 N) resulta de uma divisão incorreta da massa pela aceleração (120 / 0,5).",
      "Opção C (600 N) resultaria se a aceleração fosse erroneamente considerada igual a metade da aceleração da gravidade (g/2).",
      "Opção D (1200 N) multiplicaria a massa por 10 (cálculo de peso aproximado), ignorando a aceleração horizontal real especificada no problema."
    ],
    "nursingApplication": "Compreender a 2.ª Lei de Newton permite ao enfermeiro antecipar o esforço muscular necessário para acelerar e desacelerar cargas clínicas (camas com doentes, carrinhos de emergência). Quanto maior a massa total, maior a força necessária para atingir a mesma aceleração ou para imobilizar o equipamento em segurança."
  },
  {
    "id": 1003,
    "topicId": 1,
    "question": "A 3.ª Lei de Newton postula que a toda a ação corresponde uma reação igual e oposta. Sobre o par de forças de ação e reação, qual das seguintes afirmações é rigorosamente VERDADEIRA?",
    "options": [
      "Anulam-se mutuamente porque possuem a mesma intensidade e sentidos opostos no mesmo corpo.",
      "Atuam sempre em corpos diferentes, tendo a mesma linha de ação (mesma direção), intensidades iguais e sentidos contrários.",
      "A força de reação surge sempre com um ligeiro atraso temporal após a aplicação da força de ação.",
      "A força de reação é sempre menor em intensidade se o corpo que reage tiver menor massa."
    ],
    "correctIndex": 1,
    "explanation": "As forças de ação e reação formam um par indissociável que atua sempre em dois corpos distintos (o corpo A exerce força em B e, simultaneamente, B exerce força em A). Por atuarem em corpos diferentes, NUNCA se anulam uma à outra, têm rigorosamente o mesmo módulo, mesma direção e sentidos opostos, manifestando-se no mesmo instante.",
    "distractorAnalysis": [
      "Opção A está incorreta porque forças só se anulam se atuarem sobre o mesmo corpo (como duas forças opostas aplicadas a um mesmo bloco).",
      "Opção C está incorreta porque a interação é rigorosamente simultânea e instantânea na mecânica clássica newtoniana.",
      "Opção D está incorreta porque a intensidade de ambas é estritamente igual (|F_A->B| = |F_B->A|), independentemente de as massas dos corpos serem desiguais."
    ],
    "nursingApplication": "Quando o peso de um doente acamado comprime o colchão, o colchão exerce sobre a pele do doente uma força normal igual e de sentido oposto. É essa força de contacto distribuída que gera a pressão que pode ocluir os capilares sanguíneos nos pontos de apoio."
  },
  {
    "id": 1004,
    "topicId": 1,
    "question": "A pressão mecânica é definida como a razão entre a força perpendicular exercida e a área de contacto (P = F / A). Do ponto de vista biofísico, porque é que um doente imóvel no leito tem um risco muito mais elevado de desenvolver lesões por pressão (escaras) na região do sacro e calcanhares do que nas costas amplas?",
    "options": [
      "Porque o peso do corpo do doente diminui quando a área de contacto é reduzida.",
      "Porque a força peso total concentra-se em pequenas saliências ósseas anatómicas, diminuindo a área de apoio (A) e aumentando drasticamente a pressão tecidual (P).",
      "Porque o coeficiente de atrito é nulo nessas saliências ósseas, impedindo o fluxo sanguíneo.",
      "Porque nessas regiões a aceleração da gravidade local atua com maior intensidade sobre os tecidos."
    ],
    "correctIndex": 1,
    "explanation": "A pressão é inversamente proporcional à área de contacto para uma mesma força aplicada (P = F / A). Nas proeminências ósseas (como o sacro, trocânteres e calcanhares), a área de suporte A é muito pequena, fazendo com que a pressão local exceda a pressão de encerramento capilar arteriolar (~32 mmHg), colapsando a microcirculação e gerando isquemia tecidual e necrose.",
    "distractorAnalysis": [
      "Opção A está incorreta porque o peso corporal do doente (F = m·g) é constante e não varia com a posição ou área de contacto.",
      "Opção C é falsa porque o atrito está presente e até agrava o cisalhamento tecidual, mas não é a razão da concentração de pressão.",
      "Opção D é um absurdo físico: a aceleração da gravidade (g ≈ 9,8 m/s²) é uniforme em todo o leito."
    ],
    "nursingApplication": "Este é o princípio físico nuclear da enfermagem na prevenção de lesões por pressão: o uso de colchões de ar com pressão alternada, superfícies de redistribuição de pressão e coxins de posicionamento visa unicamente aumentar a área de suporte (A) para diminuir a pressão tecidual (P) abaixo do limiar de oclusão capilar."
  },
  {
    "id": 1005,
    "topicId": 1,
    "question": "Considere um doente em repouso absoluto numa cama hospitalar horizontal. Para que o doente se encontre em estado de equilíbrio de forças estático, qual das seguintes condições tem de ser verificada?",
    "options": [
      "A força normal exercida pelo colchão deve ter módulo exatamente igual à força peso do doente e sentido oposto, anulando a resultante vetorial.",
      "A força peso tem de ser estritamente superior à força normal para manter o doente fixo ao leito.",
      "A força de atrito estático tem de ser igual à massa do doente multiplicada pela aceleração da gravidade.",
      "Apenas as forças horizontais precisam de ser nulas, sendo indiferente o balanço de forças verticais."
    ],
    "correctIndex": 0,
    "explanation": "Para haver equilíbrio estático num plano horizontal, a soma vetorial de todas as forças aplicadas ao corpo tem de ser nula (∑F = 0). Na direção vertical, atuam a força gravítica (peso P, dirigido para baixo) e a força de reação da superfície (força normal N, dirigida para cima). Assim, N - P = 0 => N = P.",
    "distractorAnalysis": [
      "Opção B está incorreta porque se P > N haveria aceleração para baixo (o doente afundaria o leito indefinidamente).",
      "Opção C confunde a fórmula do atrito com a do peso e ignora que num leito horizontal sem forças laterais o atrito estático é nulo.",
      "Opção D viola a condição vetorial de equilíbrio, que exige equilíbrio nulo em todos os eixos ortogonais simultaneamente (∑Fx = 0 e ∑Fy = 0)."
    ],
    "nursingApplication": "Ao elevar a cabeceira da cama (posição de Fowler), o plano deixa de ser horizontal. A força peso decompõe-se numa componente perpendicular ao colchão e numa componente paralela, provocando forças de cisalhamento sobre o sacro do doente. Conhecer este equilíbrio vetorial orienta o enfermeiro a limitar a elevação excessiva da cabeceira para prevenir lesões teciduais profundas."
  },
  {
    "id": 1006,
    "topicId": 1,
    "question": "A força é uma grandeza física vetorial. Num sistema de tração esquelética hospitalar, duas forças perpendiculares entre si com módulos de 30 N e 40 N atuam simultaneamente sobre um pino ortopédico no membro do doente. Qual é o módulo da força resultante aplicada sobre o pino?",
    "options": [
      "70 N",
      "10 N",
      "50 N",
      "1200 N"
    ],
    "correctIndex": 2,
    "explanation": "Por ser uma grandeza vetorial, a resultante de duas forças concorrentes perpendiculares entre si (ângulo de 90°) é calculada pelo Teorema de Pitágoras: R = √(F₁² + F₂²) = √(30² + 40²) = √(900 + 1600) = √2500 = 50 N. Não se podem somar algebricamente grandezas vetoriais com direções distintas.",
    "distractorAnalysis": [
      "Opção A (70 N) comete o erro clássico de somar algebricamente os módulos (30 + 40), o que só seria válido se as duas forças tivessem rigorosamente a mesma direção e o mesmo sentido.",
      "Opção B (10 N) subtrai os módulos (40 - 30), o que só ocorreria se atuassem na mesma linha reta em sentidos rigorosamente opostos.",
      "Opção D (1200 N) multiplica os valores dos módulos, o que não tem qualquer significado físico na determinação da resultante de forças."
    ],
    "nursingApplication": "Em ortopedia, sistemas de tração esquelética e cutânea (como a tração de Russell ou tração de Buck) utilizam roldanas e pesos calibrados para alinhar fragmentos de fraturas. O enfermeiro deve compreender a composição vetorial das forças: alterar o ângulo de um cabo ou a posição do membro modifica completamente a direção e o módulo da força resultante transmitida ao osso fraturado."
  },
  {
    "id": 1007,
    "topicId": 1,
    "question": "Ao mobilizar um doente acamado com lençol de transferência, o enfermeiro constata que é necessária uma força maior para colocar o corpo em movimento a partir do repouso do que para manter o seu deslizamento suave. Que princípio biofísico do atrito explica este facto?",
    "options": [
      "A aceleração da gravidade diminui assim que o doente entra em movimento retilíneo.",
      "O coeficiente de atrito estático (μ_e) entre os tecidos em repouso é superior ao coeficiente de atrito cinético (μ_c) entre superfícies em movimento relativo.",
      "A massa do doente reduz-se à medida que a velocidade de deslizamento aumenta.",
      "A força normal exercida pelo colchão anula-se completamente durante o movimento."
    ],
    "correctIndex": 1,
    "explanation": "Em física do contacto, as microasperezas entre duas superfícies em repouso entrelaçam-se intimamente, exigindo uma força limite superior para romper as adesões microscópicas (atrito estático máximo, F_atrito_e = μ_e · N). Uma vez iniciado o movimento relativo, o atrito cinético (F_atrito_c = μ_c · N) é menor porque as superfícies apenas deslizam sobre as pontas das asperezas, sendo sempre μ_e > μ_c.",
    "distractorAnalysis": [
      "Opção A é incorreta: a aceleração da gravidade (g) é constante e invariável com o estado de movimento no leito.",
      "Opção C viola a conservação da massa newtoniana: a massa de um doente é invariável à escala das velocidades hospitalares.",
      "Opção D é falsa: a força normal N continua presente e igual ao peso perpendicular ao colchão durante o deslizamento."
    ],
    "nursingApplication": "O uso de lençóis de transferência de baixo atrito (feitos de tecidos técnicos sintéticos deslizantes com coeficiente μ muito reduzido) diminui em mais de 60% a força de atrito requerida para mover o doente. Isto protege simultaneamente a coluna do enfermeiro contra esforços excessivos e reduz as forças de cisalhamento que lesam a pele frágil do doente idoso."
  },
  {
    "id": 1008,
    "topicId": 1,
    "question": "Na linguagem hospitalar quotidiana, diz-se frequentemente que 'o doente pesa 70 kg'. Do ponto de vista da física e da biofísica rigorosa, qual é a distinção fundamental entre MASSA e PESO?",
    "options": [
      "Massa e peso são grandezas exatamente equivalentes, sendo ambas forças vetoriais medidas em quilogramas.",
      "A Massa é uma grandeza escalar intrínseca que mede a inércia da matéria (em kg), enquanto o Peso é uma força vetorial atrativa (em Newton, P = m·g) exercida pela gravidade sobre essa massa.",
      "A Massa depende do local onde o doente se encontra, enquanto o Peso é invariável em qualquer planeta do universo.",
      "O Peso é uma grandeza escalar medida em Pascals e a Massa é uma grandeza vetorial medida em Joules."
    ],
    "correctIndex": 1,
    "explanation": "A Massa (m) é uma propriedade escalar intrínseca que quantifica a quantidade de matéria e a sua inércia, sendo medida em quilogramas (kg) no SI. O Peso (P) é uma força vetorial (P = m · g) resultante da interação gravitacional entre o corpo e a Terra, sendo medido em Newtons (N). Um doente com 70 kg de massa tem na Terra um peso real de aproximadamente P = 70 × 9,8 = 686 N.",
    "distractorAnalysis": [
      "Opção A confunde uma propriedade escalar da matéria com uma força vetorial, perpetuando o erro de senso comum de medir forças em kg.",
      "Opção C inverte completamente os conceitos: a massa é constante em qualquer ponto do universo, enquanto o peso varia com a aceleração da gravidade local g.",
      "Opção D atribui unidades totalmente erróneas (Pascal é unidade de pressão e Joule é de energia/trabalho)."
    ],
    "nursingApplication": "Em farmacologia clínica e cálculo de dosagem terapêutica (mg/kg/dia), os enfermeiros utilizam a massa corporal (kg). Contudo, ao calcular a sobrecarga mecânica articular, a resistência do leito ou as tensões em próteses, o parâmetro biomecânico relevante é a força Peso (em Newton), que multiplica a massa pela aceleração gravitacional."
  },
  {
    "id": 1009,
    "topicId": 1,
    "question": "Um membro inferior de um doente acamado com fratura encontra-se sujeito a um sistema mecânico de alinhamento. Para garantir que o membro permaneça completamente imóvel sem sofrer qualquer translação indesejada, que condição de equilíbrio de forças tem de ser rigorosamente satisfeita?",
    "options": [
      "A resultante das forças que atuam no membro deve ser não-nula para mantê-lo sob tensão ativa contínua.",
      "A soma vetorial de todas as forças aplicadas ao membro deve ser rigorosamente nula (∑Fx = 0 e ∑Fy = 0).",
      "Apenas a força exercida pelos pesos suspensos precisa de ser igual ao dobro do peso do doente.",
      "As forças devem atuar exclusivamente num único eixo vertical, sendo impossível haver forças horizontais."
    ],
    "correctIndex": 1,
    "explanation": "A primeira condição de equilíbrio (equilíbrio de translação estático) da mecânica newtoniana postula que a soma vetorial de todas as forças externas aplicadas a um corpo tem de ser igual ao vetor nulo (∑F = 0). No plano cartesiano, isto desdobra-se na exigência simultânea de que a soma das componentes horizontais seja zero (∑Fx = 0) e a soma das componentes verticais seja zero (∑Fy = 0).",
    "distractorAnalysis": [
      "Opção A está incorreta: se a resultante fosse não-nula, o membro aceleraria (F = m·a), deslocando-se e desalinhando os topos ósseos da fratura.",
      "Opção C propõe uma relação arbitrária perigosa que provocaria tração excessiva e lesão neurológica ou vascular no membro.",
      "Opção D é incorreta: sistemas de tração utilizam frequentemente cabos diagonais com componentes horizontais e verticais em simultâneo."
    ],
    "nursingApplication": "O controlo da posição e dos cabos de tração é uma responsabilidade vigilante de enfermagem: se os pesos de tração tocarem no chão ou se os cabos ficarem presos nas roldanas da cama, o equilíbrio de forças é quebrado (∑F ≠ 0), provocando dor aguda ao doente e desvio dos fragmentos ósseos fraturados."
  },
  {
    "id": 1010,
    "topicId": 1,
    "question": "Sabendo que a pressão é a razão entre força e área (P = F / A), por que motivo uma agulha hipodérmica ultra-fina (calibre fino, como 27G) penetra a pele e os tecidos com enorme facilidade mediante uma força muscular manual minúscula do enfermeiro?",
    "options": [
      "Porque a agulha emite uma corrente elétrica que desintegra a derme antes do contacto.",
      "Porque a ponta biselada da agulha tem uma área de contacto microscópica (A minúsculo), fazendo com que uma força reduzida (F) gere uma pressão local colossal (P) que supera a tensão de rutura mecânica da pele.",
      "Porque as agulhas hipodérmicas eliminam a pressão atmosférica dentro do tecido biológico.",
      "Porque a pele humana tem uma complacência infinita que atrai o metal para o seu interior."
    ],
    "correctIndex": 1,
    "explanation": "Pela fórmula P = F / A, a pressão é inversamente proporcional à área de contacto. A ponta biselada de uma agulha de pequeno calibre possui uma área de secção da ordem de frações de milímetro quadrado (A ≈ 10⁻⁷ m²). Uma força de compressão manual de apenas 2 N exercida pelo enfermeiro gera na ponta uma pressão local superior a 20 MegaPascals (20 000 000 Pa), superando instantaneamente a resistência à tração da epiderme com mínimo traumatismo tecidual.",
    "distractorAnalysis": [
      "Opção A é fantasiosa: agulhas comuns de injeção são mecânicas e não utilizam eletricidade.",
      "Opção C é falsa: a penetração depende da pressão mecânica de cisalhamento pontual e não de alterações na pressão atmosférica.",
      "Opção D não possui fundamento físico: os tecidos oferecem resistência mecânica à deformação e penetração."
    ],
    "nursingApplication": "Na administração de fármacos subcutâneos e intramusculares, a escolha do calibre da agulha (ex: agulhas finas de insulina 30G-32G vs agulhas intramusculares 21G-23G) rege a relação pressão/força e o conforto do utente: agulhas mais finas exigem menos força para transpor a pele, causando menos dor e lesão tissular."
  },
  {
    "id": 1011,
    "topicId": 1,
    "question": "Em física e metrologia clínica, qual é a definição estrita da unidade de força 'Newton' (N) em termos das grandezas fundamentais do Sistema Internacional (SI)?",
    "options": [
      "1 N = 1 kg · m / s²",
      "1 N = 1 kg · s / m",
      "1 N = 1 kg · m² / s",
      "1 N = 1 g · cm / s²"
    ],
    "correctIndex": 0,
    "explanation": "Pela segunda lei de Newton (F = m · a), como a massa é medida em quilogramas (kg) e a aceleração em metros por segundo ao quadrado (m/s²), a unidade de força é 1 N = 1 kg·m/s². O Newton representa a força necessária para comunicar a uma massa de 1 kg uma aceleração de 1 m/s².",
    "distractorAnalysis": [
      "Opção B tem uma relação dimensional incorreta entre tempo e comprimento.",
      "Opção C corresponde à unidade de momento angular ou ação física (kg·m²/s).",
      "Opção D define a Dina (dyn), unidade de força do antigo sistema CGS (1 dyn = 10⁻⁵ N)."
    ],
    "nursingApplication": "A correta identificação das unidades do SI é essencial para a leitura e calibração de equipamentos hospitalares biomecânicos, como dinamómetros para avaliar a força de preensão manual em doentes desnutridos ou em reabilitação neurológica."
  },
  {
    "id": 1012,
    "topicId": 1,
    "question": "Um dinamómetro de mão regista uma força de preensão palmar de 350 N num doente adulto jovem. Se expressarmos esta força em Dinas no sistema CGS (sabendo que 1 N = 10⁵ dyn), qual é o valor correspondente?",
    "options": [
      "35 dyn",
      "3,5 × 10⁷ dyn",
      "3,5 × 10³ dyn",
      "350 × 10⁻⁵ dyn"
    ],
    "correctIndex": 1,
    "explanation": "Como 1 N = 10⁵ dyn, convertendo 350 N temos: 350 × 10⁵ = 3,5 × 10² × 10⁵ = 3,5 × 10⁷ dyn (35 milhões de dinas). A conversão entre unidades é uma operação elementar da biofísica quantitativa.",
    "distractorAnalysis": [
      "Opção A divide por 10 em vez de multiplicar pela potência 10⁵.",
      "Opção C multiplica apenas por 10, esquecendo a ordem de grandeza do fator 10⁵.",
      "Opção D multiplica por 10⁻⁵, que seria a conversão inversa (de dinas para Newtons)."
    ],
    "nursingApplication": "A dinamometria palmar é um biomarcador clínico de fragilidade utilizado por enfermeiros: quedas acentuadas da força muscular em Newtons correlacionam-se diretamente com sarcopenia, risco de desnutrição proteica e prognóstico desfavorável em doentes oncológicos e cirúrgicos."
  },
  {
    "id": 1013,
    "topicId": 1,
    "question": "Durante a administração de uma injeção com seringa manual, o enfermeiro exerce uma força no êmbolo. Porque é que uma seringa de 1 mL com êmbolo de pequeno diâmetro gera uma pressão de injeção muito maior do que uma seringa de 20 mL, quando aplicada a MESMA força manual (F)?",
    "options": [
      "Porque o medicamento dentro da seringa de 1 mL tem maior gravidade.",
      "Porque a área do êmbolo da seringa de 1 mL é muito menor; como P = F / A, para uma mesma força muscular F, a pressão gerada é inversamente proporcional à área.",
      "Porque o plástico da seringa de 1 mL é mais viscoso que o da seringa de 20 mL.",
      "Porque a seringa de 1 mL atrai os eletrões do tecido por indução eletrostática."
    ],
    "correctIndex": 1,
    "explanation": "A fórmula da pressão é P = F / A. O êmbolo de uma seringa de 1 mL tem um diâmetro de cerca de 4,7 mm (área ≈ 17 mm²), enquanto o êmbolo de uma seringa de 20 mL tem um diâmetro de cerca de 19 mm (área ≈ 284 mm², quase 17 vezes maior). Aplicando a mesma força muscular de 20 N, a seringa de 1 mL gera uma pressão colossal (~1176 kPa ≈ 11,6 atm), enquanto a de 20 mL gera apenas ~70 kPa (~0,7 atm).",
    "distractorAnalysis": [
      "Opção A é absurda: a gravidade é a mesma independentemente do volume da seringa.",
      "Opção C confunde a reologia do polímero com a transmissão mecânica de pressão nos fluidos.",
      "Opção D é uma ficção que mistura eletrostática com mecânica clássica de fluidos."
    ],
    "nursingApplication": "REGRA DE SEGURANÇA CRÍTICA EM ENFERMAGEM: Nunca utilizar seringas pequenas (< 10 mL) para desobstruir cateteres venosos centrais (CVC ou PICC)! A pressão colossal gerada por uma seringa de 1 mL ou 3 mL pode facilmente exceder a pressão de rutura do cateter (tensão de rotura mecânica do silicone/poliuretano), partindo o cateter dentro da circulação do doente e causando embolia por corpo estranho."
  },
  {
    "id": 1014,
    "topicId": 1,
    "question": "Um doente com peso de 800 N repousa sobre um colchão hospitalar comum. A área total de contacto corporal em que o peso é suportado é de 0,8 m². Qual é a pressão mecânica média exercida pelo doente sobre o colchão?",
    "options": [
      "1000 Pa",
      "640 Pa",
      "10 000 Pa",
      "64 000 Pa"
    ],
    "correctIndex": 0,
    "explanation": "A pressão média é calculada diretamente pela razão entre a força e a área: P = F / A = 800 N / 0,8 m² = 1000 N/m² = 1000 Pa (ou 1 kPa). Como 1 mmHg ≈ 133,3 Pa, 1000 Pa equivalem a cerca de 7,5 mmHg de pressão média global.",
    "distractorAnalysis": [
      "Opção B (640 Pa) resultaria da multiplicação incorreta de 800 por 0,8.",
      "Opção C (10 000 Pa) erra a ordem de grandeza da divisão decimal.",
      "Opção D confunde a operação e adiciona zeros sem base matemática."
    ],
    "nursingApplication": "Embora a pressão média global (7,5 mmHg) seja muito inferior à pressão capilar crítica (~32 mmHg), a distribuição real NÃO é uniforme. Nas proeminências ósseas, a área de contacto é de apenas alguns centímetros quadrados, elevando a pressão pontual local para valores superiores a 80-100 mmHg, demonstrando a necessidade de alívio e alternância postural de 2 em 2 horas."
  },
  {
    "id": 1015,
    "topicId": 1,
    "question": "A conversão de unidades de pressão é fundamental na prática hospitalar. Sabendo que 1 mmHg corresponde a aproximadamente 133,3 Pa, a quantos Pascals corresponde a pressão de perfusão capilar arteriolar média de 32 mmHg?",
    "options": [
      "4266 Pa (aprox. 4,27 kPa)",
      "32 Pa",
      "4,16 Pa",
      "133 300 Pa"
    ],
    "correctIndex": 0,
    "explanation": "Multiplica-se a pressão em mmHg pelo fator de conversão: P = 32 mmHg × 133,322 Pa/mmHg ≈ 4266 Pa (4,27 kPa). Este valor representa a pressão hidrostática intravascular normal na extremidade arteriolar do capilar cutâneo.",
    "distractorAnalysis": [
      "Opção B assume erroneamente que 1 mmHg é igual a 1 Pa.",
      "Opção C divide 133,3 por 32 em vez de multiplicar.",
      "Opção D multiplica 133,3 por 1000, ignorando o valor de 32 mmHg."
    ],
    "nursingApplication": "Se uma proeminência óssea exercer sobre a pele uma pressão externa superior a 4,27 kPa (32 mmHg), o capilar sanguíneo colapsa por compressão mecânica externa. O fluxo sanguíneo cessa (isquemia tecidual), privando as células de oxigénio e glicose e iniciando a cascata de necrose que origina uma lesão por pressão."
  },
  {
    "id": 1016,
    "topicId": 1,
    "question": "Ao elevar a cabeceira da cama hospitalar num ângulo de 45° (posição de Fowler semi-sentada), o peso do doente decompõe-se. O que sucede à força tangencial paralela ao plano do leito (força de cisalhamento) à medida que o ângulo de elevação aumenta?",
    "options": [
      "A força paralela ao plano diminui e anula-se aos 90°.",
      "A força paralela ao leito aumenta progressivamente (Ft = P · sen θ), puxando o esqueleto do doente em direção aos pés da cama e gerando forças severas de cisalhamento sobre os vasos sanguíneos sacrais.",
      "A força paralela permanece constante e a gravidade inverte o sentido.",
      "A força perpendicular (normal) atinge o valor infinito."
    ],
    "correctIndex": 1,
    "explanation": "Num plano inclinado com ângulo θ, a força peso (P) decompõe-se em duas componentes perpendiculares entre si: a componente perpendicular N = P · cos θ e a componente tangencial paralela Ft = P · sen θ. À medida que o ângulo θ aumenta de 0° para 45° ou 60°, o sen θ cresce, fazendo aumentar drasticamente a força tangencial que arrasta o corpo para baixo.",
    "distractorAnalysis": [
      "Opção A descreve o comportamento do cosseno (que diminui), e não da componente tangencial (seno).",
      "Opção C viola a decomposição trigonométrica dos vetores newtonianos.",
      "Opção D é fisicamente absurda: cos θ varia entre 1 e 0, sendo N sempre finita e decrescente."
    ],
    "nursingApplication": "O cisalhamento é o mecanismo mais destrutivo nas lesões por pressão: a pele do sacro fica 'colada' ao colchão pelo atrito, enquanto o esqueleto ósseo e a fáscia profunda escorregam para baixo impelidos pela gravidade. Isto estira, torce e lacera as artérias perfurantes profundas. Por esta razão física, as diretrizes de enfermagem recomendam limitar a cabeceira a ≤ 30° sempre que clinicamente viável."
  },
  {
    "id": 1017,
    "topicId": 1,
    "question": "Dois enfermeiros puxam um doente horizontalmente para cima no leito, aplicando cada um uma força na mesma direção e no mesmo sentido com intensidades de 150 N e 180 N, respetivamente. Qual é a força resultante total aplicada pelos enfermeiros?",
    "options": [
      "30 N",
      "330 N",
      "27 000 N",
      "1,2 N"
    ],
    "correctIndex": 1,
    "explanation": "Quando duas forças atuam na mesma linha de ação (mesma direção) e no mesmo sentido (ângulo de 0° entre elas), o módulo da resultante é a soma aritmética direta dos módulos das forças componentes: R = F₁ + F₂ = 150 N + 180 N = 330 N.",
    "distractorAnalysis": [
      "Opção A (30 N) subtrai os módulos, o que só ocorreria se os enfermeiros puxassem em sentidos opostos (forças antagónicas).",
      "Opção C (27 000 N) multiplica os valores, o que não traduz composição vetorial.",
      "Opção D divide os valores, sem base na mecânica newtoniana."
    ],
    "nursingApplication": "A ação concertada e em sincronia temporal ('ao sinal de três!') na mobilização em equipa garante que as forças se somem com eficiência máxima no mesmo sentido vetorial, reduzindo o esforço individual e tornando a manobra suave e segura para o doente."
  },
  {
    "id": 1018,
    "topicId": 1,
    "question": "Se os mesmos dois enfermeiros puxassem em sentidos estritamente opostos na mesma linha de ação (um com 180 N para a cabeceira e o outro com 150 N para os pés), qual seria a força resultante sobre o doente?",
    "options": [
      "330 N no sentido da cabeceira",
      "30 N no sentido da cabeceira (no sentido da maior força)",
      "Zero Newtons, porque forças opostas anulam-se sempre",
      "150 N no sentido dos pés"
    ],
    "correctIndex": 1,
    "explanation": "Para forças colineares que atuam na mesma direção mas em sentidos contrários (ângulo de 180°), a força resultante é a diferença algébrica entre a maior e a menor intensidade: R = F₁ - F₂ = 180 N - 150 N = 30 N, orientada no sentido da força de maior magnitude (para a cabeceira).",
    "distractorAnalysis": [
      "Opção A soma as forças, ignorando que possuem sentidos opostos.",
      "Opção C assume anulação mútua, o que só ocorreria se ambas tivessem rigorosamente o mesmo módulo (180 N e 180 N).",
      "Opção D atribui a intensidade da força menor no sentido oposto ao vetor resultante real."
    ],
    "nursingApplication": "Compreender a subtração de forças colineares opostas ilustra por que motivo manobras desarticuladas entre membros da equipa anulam o trabalho mecânico útil e geram movimentos aos solavancos que causam desconforto e dor ao utente."
  },
  {
    "id": 1019,
    "topicId": 1,
    "question": "Uma balança hospitalar calibrada mede uma massa de 65 kg para uma doente. Considerando a aceleração da gravidade média local na superfície da Terra como g = 9,8 m/s², qual é a intensidade exata da força peso exercida pela Terra sobre esta doente?",
    "options": [
      "65 N",
      "637 N",
      "6,63 N",
      "6370 N"
    ],
    "correctIndex": 1,
    "explanation": "A força peso calcula-se por P = m · g. Substituindo os valores: P = 65 kg × 9,8 m/s² = 637 N. A força peso aponta verticalmente para baixo, em direção ao centro da Terra.",
    "distractorAnalysis": [
      "Opção A confunde a unidade de massa (kg) com a unidade de peso (Newton), assumindo g = 1 m/s².",
      "Opção C divide a massa pela gravidade (65 / 9,8).",
      "Opção D multiplica por 98 m/s², cometendo um erro de vírgula decimal."
    ],
    "nursingApplication": "Ao dimensionar equipamentos clínicos (como macas de transporte bariátrico, guinchos elétricos de levante ou elevadores hospitalares com capacidade de carga nominal expressa em Newtons ou kg), o enfermeiro deve verificar a margem de segurança de peso real para prevenir colapsos estruturais do material."
  },
  {
    "id": 1020,
    "topicId": 1,
    "question": "No contexto da física do atrito, qual das seguintes variáveis NÃO influencia de forma alguma o coeficiente de atrito estático (μ_e) entre duas superfícies em contacto?",
    "options": [
      "A natureza dos materiais que constituem as duas superfícies em contacto (ex: pele e algodão vs pele e cetim sintético).",
      "O estado de rugosidade, acabamento ou humidade das superfícies.",
      "A área aparente macroscópica de contacto entre as superfícies sólidas (pelas Leis empíricas de Amontons).",
      "A presença de um lubrificante ou película intermediária entre as superfícies."
    ],
    "correctIndex": 2,
    "explanation": "Pelas clássicas Leis de Amontons-Coulomb do atrito sólido, a força de atrito (F_atrito = μ · N) e o coeficiente de atrito (μ) são independentes da área aparente macroscópica de contacto para materiais rígidos comuns. O atrito depende exclusivamente da natureza química e molecular dos materiais, do seu acabamento e da presença de lubrificantes.",
    "distractorAnalysis": [
      "Opção A influencia fortemente o coeficiente de atrito (diferentes pares de materiais têm diferentes valores de μ).",
      "Opção B influencia decisivamente o atrito (superfícies húmidas ou maceradas alteram radicalmente o atrito com a pele).",
      "Opção D altera diretamente o atrito (lubrificantes criam camadas fluidas que reduzem o coeficiente μ)."
    ],
    "nursingApplication": "A humidade na pele de doentes incontinentes (urina, suor) aumenta a fricção e o coeficiente de atrito com os lençóis de algodão, promovendo maceração e remoção da camada córnea protetora. A aplicação de cremes barreira pelo enfermeiro cria uma película lipídica hidrofóbica que reduz o atrito e protege o estrato córneo."
  },
  {
    "id": 1021,
    "topicId": 1,
    "question": "Um cabo de um sistema de tração ortopédica passa por uma roldana ideal fixa fixada ao leito hospitalar. Qual é a função puramente mecânica desempenhada por uma roldana fixa ideal num sistema de forças?",
    "options": [
      "Multiplica a intensidade da força aplicada por quatro vezes.",
      "Altera apenas a direção e o sentido da força de tração aplicada, sem modificar a intensidade (módulo) da força transmitida pelo cabo.",
      "Reduz a massa dos pesos suspensos para metade.",
      "Anula completamente a força peso dos pesos calibrados."
    ],
    "correctIndex": 1,
    "explanation": "Uma roldana fixa simples sem atrito não proporciona qualquer vantagem mecânica de força (a relação de forças é 1:1). A sua função biomecânica exclusiva é desviar a linha de ação da força (mudar a direção e o sentido do cabo), permitindo que um peso que cai verticalmente sob a gravidade aplique uma força horizontal ou oblíqua de tração no membro do doente.",
    "distractorAnalysis": [
      "Opção A confunde com sistemas complexos de cadernais compostos ou talhas exponenciais.",
      "Opção C é falsa: a massa do peso é constante e invariável.",
      "Opção D viola a conservação da energia e a dinâmica das roldanas ideais."
    ],
    "nursingApplication": "Ao inspecionar o sistema de tração esquelética de um doente com fratura do fémur, o enfermeiro deve verificar se o cabo corre suavemente na garganta da roldana fixa. Se o cabo saltar da roldana ou ficar entalado, o atrito elevado altera o módulo da força efetiva transmitida ao osso fraturado."
  },
  {
    "id": 1022,
    "topicId": 1,
    "question": "Se a roldana do sistema de tração não for ideal e apresentar elevado atrito no seu eixo por falta de manutenção, que consequência biofísica terá sobre a força de tração efetivamente transmitida ao membro fraturado do doente?",
    "options": [
      "A força transmitida ao membro será superior ao peso calibrado suspenso.",
      "Parte da força é dissipada na superação do atrito da roldana, fazendo com que a força de tração efetiva no membro seja inferior ao valor nominal do peso suspenso.",
      "A força torna-se instantaneamente nula e o cabo evapora.",
      "A aceleração da gravidade no quarto hospitalar passa para o dobro."
    ],
    "correctIndex": 1,
    "explanation": "Em máquinas reais com atrito, o rendimento mecânico é inferior a 100%. O atrito mecânico no eixo da roldana opõe-se ao movimento do cabo, dissipando energia sob forma de calor. Assim, a tensão efetiva T transmitida ao membro fraturado torna-se inferior ao peso P dos discos suspensos (T < P), comprometendo o alinhamento da fratura.",
    "distractorAnalysis": [
      "Opção A violaria a conservação da energia (o atrito nunca adiciona força útil ao sistema).",
      "Opção C e Opção D apresentam afirmações exageradas e sem fundamento físico."
    ],
    "nursingApplication": "A vigilância clínica da tração esquelética é da responsabilidade direta da equipa de enfermagem: a roldana deve rodar livremente, sem ferrugem nem bloqueios mecânicos, garantindo que o valor nominal prescrito pelo ortopedista é rigorosamente aquele que atua no foco da fratura."
  },
  {
    "id": 1023,
    "topicId": 1,
    "question": "Considere uma roldana móvel inserida num sistema de tração ou suspensão de um membro. Numa roldana móvel ideal com dois ramos de cabo paralelos a sustentar a carga, qual é a vantagem mecânica teórica obtida?",
    "options": [
      "A força muscular necessária para equilibrar a carga é reduzida a metade (F = P / 2).",
      "A força necessária é duplicada.",
      "A vantagem mecânica é nula e a carga cai.",
      "A velocidade do cabo torna-se igual à velocidade da luz."
    ],
    "correctIndex": 0,
    "explanation": "Numa roldana móvel ideal, a carga está suspensa no eixo da própria roldana, que é suportada por dois segmentos paralelos de cabo. Cada segmento de cabo suporta metade da carga total (T = P / 2). Portanto, a força potente requerida para equilibrar a carga é apenas metade da resistência (vantagem mecânica de força igual a 2).",
    "distractorAnalysis": [
      "Opção B confunde vantagem mecânica de força com desvantagem.",
      "Opção C é falsa: a roldana móvel é uma das máquinas simples fundamentais da física clássica.",
      "Opção D é uma afirmação sem sentido físico."
    ],
    "nursingApplication": "Sistemas de roldanas móveis são incorporados em guinchos e elevadores de transferência hospitalares manuais, permitindo que um único enfermeiro erga um doente acamado com elevado peso corporal aplicando apenas uma fração da força do peso total."
  },
  {
    "id": 1024,
    "topicId": 1,
    "question": "Do ponto de vista vetorial, qual é o ângulo entre a linha de ação da força gravítica (peso de um doente) e a superfície de um colchão de leito perfeitamente horizontal?",
    "options": [
      "0 graus (paralelo)",
      "90 graus (perpendicular / ortogonal)",
      "45 graus (oblíquo)",
      "180 graus (antiparalelo)"
    ],
    "correctIndex": 1,
    "explanation": "A força gravítica atua sempre na vertical do lugar (em direção ao centro da Terra). Um colchão perfeitamente nivelado define um plano horizontal. Portanto, o ângulo formado entre o vetor vertical da força peso e o plano horizontal do leito é de exatamente 90 graus (perpendicularidade).",
    "distractorAnalysis": [
      "Opção A descreve vetores contidos no próprio plano ou paralelos a ele.",
      "Opção C ocorreria apenas se a cama estivesse inclinada a 45°.",
      "Opção D descreve vetores colineares de sentidos contrários."
    ],
    "nursingApplication": "Com o leito perfeitamente horizontal (θ = 0°), 100% da força peso do doente atua como força perpendicular (força normal compressiva N = P), sendo nula a componente tangencial de cisalhamento. Isto confirma porque o decúbito dorsal plano oferece mínimo risco de cisalhamento para a pele sacral."
  },
  {
    "id": 1025,
    "topicId": 1,
    "question": "Na prevenção de lesões por pressão em doentes acamados, o uso de superfícies estáticas ou dinâmicas de redistribuição de pressão (como colchões de espuma viscoelástica de alta densidade ou ar alternado) baseia-se diretamente em qual princípio biofísico?",
    "options": [
      "Aumentar a força da gravidade que atrai o doente para o chão.",
      "Aumentar a área de contacto efetiva (A) através da imersão e envolvência anatómica do corpo, reduzindo proporcionalmente a pressão tecidual média e de pico (P = F / A).",
      "Eliminar totalmente o atrito cinético no ar ambiente.",
      "Transformar a energia mecânica do corpo em radiação gama pura."
    ],
    "correctIndex": 1,
    "explanation": "Pela relação fundamental P = F / A, como o peso corporal F do doente não pode ser alterado, a única forma física de reduzir a pressão mecânica P exercida sobre a pele é maximizar a área de contacto A. Colchões viscoelásticos e pneumáticos moldam-se aos contornos do corpo ('imersão e envelopamento'), distribuindo o peso por uma área muito mais ampla e impedindo que a pressão local exceda os 32 mmHg.",
    "distractorAnalysis": [
      "Opção A é absurda: a aceleração gravitacional não é alterada pelo material do colchão.",
      "Opção C refere o atrito no ar, que tem influência nula na compressão capilar sacral.",
      "Opção D inventa um fenómeno nuclear sem relação com colchões hospitalares."
    ],
    "nursingApplication": "A seleção adequada da superfície de apoio (colchão reativo vs colchão ativo de ar alternado) é uma intervenção autónoma de enfermagem baseada na escala de Braden de risco de lesão por pressão, otimizando a distribuição de pressões conforme o peso e a imobilidade do doente."
  },
  {
    "id": 1026,
    "topicId": 1,
    "question": "Dois vetores de força com módulos de 6 N e 8 N atuam sobre um mesmo ponto. Qual é o valor MÁXIMO e o valor MÍNIMO absolutos que a resultante destas duas forças pode assumir, variando o ângulo entre elas?",
    "options": [
      "Máximo de 48 N e mínimo de 1,33 N",
      "Máximo de 14 N (mesmo sentido) e mínimo de 2 N (sentidos opostos)",
      "Máximo de 10 N e mínimo de zero N",
      "Máximo e mínimo são sempre exatamente 7 N"
    ],
    "correctIndex": 1,
    "explanation": "O módulo da resultante de dois vetores varia entre a sua soma aritmética (quando o ângulo entre eles é 0°, forças com o mesmo sentido: R_max = 6 + 8 = 14 N) e a sua diferença absoluta (quando o ângulo é 180°, forças com sentidos opostos: R_min = 8 - 6 = 2 N). Qualquer outra inclinação angular resultará num módulo intermédio (ex: a 90°, R = √(6² + 8²) = 10 N).",
    "distractorAnalysis": [
      "Opção A multiplica e divide os módulos, o que não reflete cálculo vetorial.",
      "Opção C (10 N) corresponde exclusivamente ao caso particular de perpendicularidade (90°).",
      "Opção D calcula a média aritmética simples, ignorando a dependência angular vetorial."
    ],
    "nursingApplication": "Em trações e imobilizações com múltiplos cabos ortopédicos, pequenos desvios angulares alteram a força resultante entre os extremos teóricos de soma máxima e subtração, podendo comprometer o alinhamento ósseo pretendido."
  },
  {
    "id": 1027,
    "topicId": 1,
    "question": "Num choque mecânico entre uma ambulância em marcha de emergência e um obstáculo rígido, os ocupantes continuam em movimento para a frente até serem travados pelos cintos de segurança. Que propriedade intrínseca da matéria fundamenta este comportamento?",
    "options": [
      "A Inércia (medida quantitativamente pela massa do corpo).",
      "A velocidade da luz no meio líquido.",
      "A viscosidade do oxigénio gasoso.",
      "O calor específico do ar comprimido."
    ],
    "correctIndex": 0,
    "explanation": "A Inércia é a tendência natural de todos os corpos materiais para resistir a alterações no seu estado de repouso ou de movimento retilíneo uniforme. Quanto maior for a massa de um corpo, maior é a sua inércia. Na desaceleração brusca do veículo, nenhuma força atua inicialmente sobre os passageiros para fazê-los desacelerar ao mesmo tempo que o chassi, continuando a mover-se à velocidade anterior até uma força externa (o cinto de segurança) atuar sobre eles.",
    "distractorAnalysis": [
      "Opção B, C e D referem propriedades óticas e termodinâmicas sem relação com o princípio da inércia mecânica."
    ],
    "nursingApplication": "O uso rigoroso do cinto de três pontos pelos profissionais de enfermagem no compartimento assistencial da ambulância e a retenção de todo o material médico solto (monitores desfibrilhadores, malas de fármacos) previne acidentes fatais por projeção inercial durante travagens de emergência."
  },
  {
    "id": 1028,
    "topicId": 1,
    "question": "A aceleração de um corpo de massa constante é diretamente proporcional à força resultante que atua sobre ele e tem:",
    "options": [
      "Sempre a direção perpendicular à força resultante.",
      "A mesma direção e o mesmo sentido da força resultante vetorial.",
      "Sentido sempre oposto ao da força resultante.",
      "Direção aleatória e independente da força aplicada."
    ],
    "correctIndex": 1,
    "explanation": "A equação vetorial fundamental da dinâmica é F_res = m · a. Como a massa m é um escalar estritamente positivo (m > 0), o vetor aceleração (a) tem obrigatoriamente a mesma linha de ação (mesma direção) e a mesma orientação (mesmo sentido) do vetor força resultante (F_res).",
    "distractorAnalysis": [
      "Opção A confunde com a relação entre força centrípeta e velocidade linear.",
      "Opção C só ocorreria se a massa pudesse ser uma grandeza negativa, o que não existe na física clássica.",
      "Opção D viola a causalidade newtoniana da dinâmica."
    ],
    "nursingApplication": "Ao empurrar um cadeirão de rodas com um doente, a aceleração imprimida segue exatamente a linha e direção da força exercida pelo enfermeiro nas pegas: empurrar para a frente gera aceleração para a frente; aplicar forças laterais desvia a trajetória do cadeirão."
  },
  {
    "id": 1029,
    "topicId": 1,
    "question": "Uma maca com um doente tem massa total de 100 kg e desloca-se em linha reta com velocidade constante de 1,2 m/s ao longo de um corredor horizontal. Qual é o módulo da aceleração e da força resultante sobre a maca durante este movimento?",
    "options": [
      "Aceleração = 1,2 m/s² e Força Resultante = 120 N",
      "Aceleração = 0 m/s² e Força Resultante = 0 N",
      "Aceleração = 9,8 m/s² e Força Resultante = 980 N",
      "Aceleração = 0,6 m/s² e Força Resultante = 60 N"
    ],
    "correctIndex": 1,
    "explanation": "Se o corpo se move em linha reta e com velocidade escalar constante (Movimento Retilíneo e Uniforme - MRU), não há variação do vetor velocidade ao longo do tempo (Δv = 0). Logo, a aceleração é rigorosamente nula (a = 0 m/s²). Pela 2.ª Lei de Newton, F_res = m · a = 100 kg × 0 = 0 N. A força horizontal aplicada pelo enfermeiro serve apenas para anular exatamente o atrito das rodas.",
    "distractorAnalysis": [
      "Opção A confunde a velocidade constante (1,2 m/s) com a aceleração (m/s²).",
      "Opção C confunde a cinemática horizontal livre com a queda livre gravitacional vertical.",
      "Opção D inventa valores sem nexo matemático com as condições de velocidade constante."
    ],
    "nursingApplication": "Após vencer o atrito estático inicial para colocar a maca em movimento, o enfermeiro só precisa de exercer uma força igual à força de atrito das rodas para manter a maca a deslocar-se em MRU a passo constante com esforço mínimo."
  },
  {
    "id": 1030,
    "topicId": 1,
    "question": "O atrito entre a pele do doente e os lençóis da cama hospitalar pode originar forças de atrito estático e cinético. O que acontece à força de atrito cinético (deslizamento) se o peso normal do doente contra o colchão for duplicado?",
    "options": [
      "A força de atrito cinético mantém-se inalterada.",
      "A força de atrito cinético duplica, pois Fatrito = μ · N, sendo diretamente proporcional à força normal.",
      "A força de atrito cinético reduz-se a metade.",
      "A força de atrito cinético passa para zero."
    ],
    "correctIndex": 1,
    "explanation": "Pela equação do atrito sólido F_atrito = μ_c · N, a força de atrito é diretamente proporcional à força normal N exercida perpendicularmente entre as superfícies. Se o peso normal do doente duplicar (de N para 2N), a força de atrito cinético necessária para o deslizar duplica proporcionalmente.",
    "distractorAnalysis": [
      "Opção A e C ignoram a proporcionalidade direta linear estabelecida pelas leis do atrito.",
      "Opção D é incorreta: maior força de contacto intensifica as interações microscópicas entre superfícies."
    ],
    "nursingApplication": "Em doentes obesos ou com grande massa corporal, a força normal N é muito superior, multiplicando a força de atrito e tornando as transferências manuais muito mais pesadas. O recurso a pranchas de transferência e lençóis deslizantes ou sistemas mecânicos é fundamental para a segurança clínica."
  },
  {
    "id": 1031,
    "topicId": 1,
    "question": "Do ponto de vista mecânico e clínico, em que difere a 'força de cisalhamento' da simples 'força compressiva normal' na génese das lesões da pele no doente acamado?",
    "options": [
      "A força compressiva atua paralelamente à superfície da pele, enquanto o cisalhamento atua a 90 graus no vácuo.",
      "A força compressiva atua perpendicularmente à superfície esmagando os tecidos verticalmente, enquanto o cisalhamento atua paralelamente (tangencialmente) à superfície cutânea, provocando deslizamento relativo entre as camadas da pele e o esqueleto ósseo, dobrando e ocluindo os microvasos.",
      "A força compressiva só existe em doentes em pé e o cisalhamento só existe em doentes na água.",
      "O cisalhamento é uma força magnética que atrai o ferro da hemoglobina."
    ],
    "correctIndex": 1,
    "explanation": "A compressão é uma tensão mecânica normal (perpendicular à superfície, gerando encurtamento axial). O cisalhamento é uma tensão tangencial (paralela às superfícies): ocorre quando duas camadas teciduais contíguas deslizam em direções opostas. O cisalhamento angula, deforma e rompe os capilares e arteríolas perfurantes do plexo subcutâneo, causando isquemia profunda mesmo com pressões compressivas mais baixas.",
    "distractorAnalysis": [
      "Opção A inverte a orientação geométrica dos vetores perpendicular e tangencial.",
      "Opção C confunde posturas corporais com a definição física de tensões mecânicas.",
      "Opção D confunde forças de contacto mecânico com magnetismo molecular."
    ],
    "nursingApplication": "Ao reposicionar um doente que escorregou para os pés da cama, NUNCA o arraste diretamente sobre os lençóis! Arrastar o doente gera um pico de cisalhamento sobre a pele sacral. O procedimento correto de enfermagem é aliviar o contacto elevando o corpo com o lençol de reposicionamento antes de o mover para a cabeceira."
  },
  {
    "id": 1032,
    "topicId": 1,
    "question": "Qual das seguintes alterações fisiopatológicas cutâneas resulta diretamente da aplicação prolongada de uma pressão mecânica tecidual externa superior à pressão capilar arteriolar (~32 mmHg)?",
    "options": [
      "Hiperoxigenação extrema das células dérmicas com aceleração da mitose.",
      "Oclusão dos vasos da microcirculação, colapso do retorno venoso e fluxo arterial, isquemia celular e subsequente necrose tecidual.",
      "Desenvolvimento de ossos adicionais no interior do tecido celular subcutâneo.",
      "Diminuição instantânea da temperatura de fusão do estrato córneo."
    ],
    "correctIndex": 1,
    "explanation": "Os capilares cutâneos são estruturas de paredes muito delgadas (endotélio uniestratificado). Quando a pressão mecânica externa exercida pelo apoio sobre o colchão excede a pressão transmural capilar (~32 mmHg na terminação arteriolar), os microvasos colapsam fisicamente. A perfusão sanguínea cessa, instalando-se a anóxia celular, acumulação de catabolitos ácidos e morte celular por apoptose/necrose.",
    "distractorAnalysis": [
      "Opção A descreve o oposto: a oclusão capilar causa hipóxia e morte celular, não hiperoxigenação.",
      "Opção C refere miosite ossificante heterotópica, que não é a fisiopatologia das úlceras por pressão.",
      "Opção D é uma afirmação sem base na biologia de tecidos vivos."
    ],
    "nursingApplication": "O aparecimento de eritema que não branqueia à digito-pressão (lesão por pressão de Categoria/Grau I) é o primeiro sinal de alarme que o enfermeiro deteta na inspeção diária da pele: indica que a isquemia já provocou resposta inflamatória por lesão microvascular, exigindo alívio imediato de carga nessa zona."
  },
  {
    "id": 1033,
    "topicId": 1,
    "question": "A unidade de pressão 'Pascal' (Pa) no Sistema Internacional de Unidades é matematicamente equivalente a:",
    "options": [
      "1 Newton por metro quadrado (1 N/m²)",
      "1 Joule por segundo (1 J/s)",
      "1 quilograma por metro (1 kg/m)",
      "1 Newton por centímetro cúbico (1 N/cm³)"
    ],
    "correctIndex": 0,
    "explanation": "Por definição formal no SI, a pressão é força por unidade de superfície: P = F / A. A unidade de força é o Newton (N) e a de área é o metro quadrado (m²). Logo, 1 Pascal = 1 N/m² = 1 kg/(m·s²).",
    "distractorAnalysis": [
      "Opção B define o Watt (W), unidade de potência (J/s).",
      "Opção C é a massa linear (kg/m).",
      "Opção D mistura força com volume, não correspondendo a pressão."
    ],
    "nursingApplication": "Em ventiladores mecânicos invasivos em unidades de cuidados intensivos, as pressões das vias aéreas são monitorizadas em cmH₂O ou hPa (hectopascals, onde 1 hPa = 100 Pa ≈ 1,02 cmH₂O). O enfermeiro regista estas grandezas para monitorizar o risco de barotrauma pulmonar."
  },
  {
    "id": 1034,
    "topicId": 1,
    "question": "Num sistema ortopédico com três forças concorrentes em equilíbrio estático no mesmo plano horizontal (F₁ + F₂ + F₃ = 0), se representarmos graficamente os vetores em cadeia, que figura geométrica fechada é obrigatoriamente formada?",
    "options": [
      "Uma linha reta aberta infinita",
      "Um polígono fechado (neste caso, um triângulo fechado de forças)",
      "Uma circunferência de raio imaginário",
      "Uma parábola descendente"
    ],
    "correctIndex": 1,
    "explanation": "Pelo método do polígono vetorial, se a soma de vários vetores é nula (∑F = 0), o ponto terminal do último vetor coincide rigorosamente com a origem do primeiro vetor, fechando o polígono. Para três forças concorrentes coplanares em equilíbrio estático, os três vetores desenham um triângulo fechado.",
    "distractorAnalysis": [
      "Opção A implicaria uma resultante não-nula com aceleração do corpo.",
      "Opção C e Opção D não correspondem a métodos geométricos de adição de vetores discretos."
    ],
    "nursingApplication": "A representação em triângulo de forças permite calcular graficamente ou por trigonometria (Lei dos Senos / Teorema de Lamy) a tração exata necessária em cada cabo de suporte ortopédico para garantir a imobilização indolor do membro sem translação."
  },
  {
    "id": 1035,
    "topicId": 1,
    "question": "Dois blocos de pesos diferentes repousam sobre a mesma superfície horizontal. Se o bloco A tem o dobro da massa do bloco B, e ambos têm o mesmo coeficiente de atrito estático com o chão, como se compara a força de atrito estático máxima necessária para iniciar o movimento de cada um?",
    "options": [
      "A força de atrito estático máxima do bloco A é igual à do bloco B.",
      "A força de atrito estático máxima do bloco A é o dobro da do bloco B, pois Fatrito_max = μ_e · N e o peso de A é o dobro de B.",
      "A força de atrito estático máxima do bloco A é quatro vezes menor que a de B.",
      "O bloco A não tem atrito porque a inércia anula a força de contacto."
    ],
    "correctIndex": 1,
    "explanation": "Como F_atrito_max = μ_e · N e num plano horizontal N = P = m · g, a força de atrito estático máxima é proporcional à massa do corpo: F_atrito_A = μ_e · (2m) · g = 2 · [μ_e · m · g] = 2 · F_atrito_B. É necessária exatamente o dobro da força horizontal para iniciar o movimento do bloco A.",
    "distractorAnalysis": [
      "Opção A ignora a dependência direta da força normal N.",
      "Opção C inverte a relação física de dependência da massa.",
      "Opção D é contrária às leis da física (maior massa aumenta a força normal e o atrito)."
    ],
    "nursingApplication": "Ao mobilizar doentes de biotipos diferentes, o enfermeiro deve planear os recursos humanos e mecânicos necessários: transferir um doente de 120 kg exige o dobro da força de atrito estático de um doente de 60 kg, exigindo o auxílio de mais colegas ou de um guincho mecânico para evitar lesões musculoesqueléticas na equipa."
  },
  {
    "id": 1036,
    "topicId": 1,
    "question": "Quando um doente se senta numa cadeira de rodas sem almofada de alívio de pressão, a maior parte do seu peso corporal concentra-se nas duas tuberosidades isquiáticas. Se a área combinada das duas tuberosidades for de apenas 0,008 m² e a porção de peso suportada pelo assento for de 400 N, qual é a pressão local exercida sobre os tecidos dos ísquios?",
    "options": [
      "50 000 Pa (cerca de 375 mmHg)",
      "3,2 Pa",
      "500 Pa",
      "50 Pa"
    ],
    "correctIndex": 0,
    "explanation": "Calculando a pressão: P = F / A = 400 N / 0,008 m² = 50 000 N/m² = 50 000 Pa. Convertendo para milímetros de mercúrio: 50 000 Pa / 133,322 Pa/mmHg ≈ 375 mmHg! Trata-se de uma pressão monstruosa, mais de 10 vezes superior à pressão capilar normal de 32 mmHg.",
    "distractorAnalysis": [
      "Opção B multiplica 400 por 0,008 em vez de dividir.",
      "Opção C e Opção D erram por fatores de 10 e 100 na divisão decimal."
    ],
    "nursingApplication": "Uma pressão de 375 mmHg nos ísquios oclui completamente a circulação e provoca isquemia profunda e dor em poucos minutos. Por esta razão biofísica, os enfermeiros prescrevem almofadas de ar ou gel viscoelástico para doentes em cadeiras de rodas e ensinam o doente ou cuidador a realizar alívios de pressão pontuais a cada 15 a 30 minutos."
  },
  {
    "id": 1037,
    "topicId": 1,
    "question": "O conceito de 'equilíbrio de forças translacional' exige que a aceleração linear do centro de massa do corpo seja nula. Um doente deitado que adormece num leito hospitalar que se encontra inclinado a 10 graus em relação à horizontal, sem deslizar para baixo, encontra-se em:",
    "options": [
      "Queda livre acelerada permanente.",
      "Equilíbrio estático, pois a força de atrito estático entre o corpo e o colchão equilibra rigorosamente a componente tangencial do peso (Fatrito_e = P · sen 10°).",
      "Movimento hiperbólico perpétuo.",
      "Equilíbrio puramente gravitacional instável no vácuo."
    ],
    "correctIndex": 1,
    "explanation": "Se o doente não se move e permanece imóvel no plano inclinado, a resultante das forças paralelas ao plano tem de ser nula: ∑Ft = 0 => P · sen θ - F_atrito_e = 0 => F_atrito_e = P · sen θ. O atrito estático desenvolve exatamente a força contrária necessária para anular a tendência de deslizamento imposta pela gravidade.",
    "distractorAnalysis": [
      "Opção A e C descrevem corpos em movimento e aceleração, incompatíveis com a imobilidade estática do doente.",
      "Opção D utiliza terminologia inadequada para descrever o atrito com o colchão ao ar livre."
    ],
    "nursingApplication": "Embora o doente pareça em repouso e sem deslizar macroscopicamente, o atrito estático que mantém o corpo retido gera forças contínuas de tensão tangencial na derme sacral. Se a inclinação da cama for prolongada, este cisalhamento estático contínuo lesa a microcirculação."
  },
  {
    "id": 1038,
    "topicId": 1,
    "question": "O que distingue fundamentalmente uma grandeza escalar de uma grandeza vetorial na biofísica médica?",
    "options": [
      "A grandeza escalar necessita de direção e sentido, e a vetorial apenas de um número.",
      "A grandeza escalar fica perfeitamente definida por um valor numérico acompanhado da respetiva unidade (ex: massa de 60 kg, temperatura de 37 °C), enquanto a grandeza vetorial necessita obrigatoriamente de módulo, direção, sentido e ponto de aplicação (ex: força de 50 N vertical para baixo aplicada no fémur).",
      "Grandezas escalares só existem em química e grandezas vetoriais só existem em astronomia.",
      "A grandeza escalar varia com o tempo e a vetorial é invariável."
    ],
    "correctIndex": 1,
    "explanation": "Esta é a distinção primordial da física: grandezas escalares (massa, temperatura, volume, energia) possuem apenas magnitude numérica e unidade de medida. Grandezas vetoriais (força, velocidade, aceleração, campo elétrico) exigem especificação completa de intensidade (módulo), direção (reta de suporte), sentido (orientação para onde aponta) e ponto focal de aplicação.",
    "distractorAnalysis": [
      "Opção A inverte as definições fundamentais.",
      "Opção C e Opção D apresentam critérios arbitrários e erróneos."
    ],
    "nursingApplication": "Ao comunicar na passagem de turno a colocação de uma tração ortopédica, dizer apenas 'aplicámos 50 N de força' é insuficiente: é crucial especificar a direção e o sentido (ex: '50 N de tração longitudinal em alinhamento com o eixo diafisário do fémur')."
  },
  {
    "id": 1039,
    "topicId": 1,
    "question": "Em reabilitação funcional no leito, quando um doente exerce uma contração muscular isométrica contra a barra de suporte da cama, a barra não se move. Do ponto de vista da 3.ª Lei de Newton, a força que a barra exerce sobre as mãos do doente é:",
    "options": [
      "Nula, porque a barra é um objeto inanimado sem músculos.",
      "Rigorosamente igual em intensidade (módulo), na mesma linha de ação e de sentido contrário à força que as mãos do doente exercem sobre a barra.",
      "Metade da força do doente dividida pela gravidade.",
      "Duas vezes maior que a força do doente para vencer o músculo."
    ],
    "correctIndex": 1,
    "explanation": "A 3.ª Lei de Newton aplica-se universalmente a qualquer par de corpos em interação, sejam eles animados (músculo humano) ou inanimados (barra metálica de suporte). Se o doente puxa a barra com 200 N, a barra simultaneamente puxa as mãos do doente com rigorosamente 200 N na mesma direção e sentido oposto.",
    "distractorAnalysis": [
      "Opção A perpetua a conceção errónea comum de que materiais inanimados não exercem forças de reação.",
      "Opção C e D propõem relações numéricas desprovidas de fundamentação na mecânica clássica."
    ],
    "nursingApplication": "Exercícios isométricos no leito utilizam a reação de superfícies rígidas para fortalecer a musculatura do doente sem produzir movimento articular, sendo prescritos e incentivados em planos de cuidados de enfermagem de reabilitação motora precoce."
  },
  {
    "id": 1040,
    "topicId": 1,
    "question": "Qual das seguintes ações clínicas de enfermagem NÃO contribui para a redução da pressão mecânica (P = F / A) exercida sobre as proeminências ósseas de um doente acamado?",
    "options": [
      "Alternar a posição do doente entre decúbito dorsal, decúbito lateral direito e esquerdo de 2 em 2 horas.",
      "Colocar um coxim sob as pernas para manter os calcanhares suspensos no ar sem contacto com o colchão ('calcanhares flutuantes').",
      "Puxar o doente arrastando-o a seco pelo lençol de algodão rugoso para o acelerar.",
      "Utilizar um colchão viscoelástico de redistribuição que aumente a área de contacto do tronco e nádegas."
    ],
    "correctIndex": 2,
    "explanation": "Arrastar o doente a seco sobre lençol rugoso não reduz a pressão e gera forças destrutivas intensas de atrito e cisalhamento sobre a epiderme fragilizada. Todas as outras opções são medidas profiláticas baseadas na biofísica que aumentam a área de apoio ou suspendem totalmente a carga em saliências ósseas.",
    "distractorAnalysis": [
      "Opção A reduz o tempo de exposição à pressão em cada ponto ósseo específico.",
      "Opção B reduz a força e a pressão mecânica nos calcanhares para zero absoluto ao deixá-los suspensos.",
      "Opção D aumenta a área A diminuindo a pressão tecidual P."
    ],
    "nursingApplication": "A suspensão dos calcanhares com travesseiros posicionados longitudinalmente sob a barriga das pernas é a intervenção de eleição de enfermagem para eliminar a pressão nos calcâneos, o segundo local mais frequente de lesões por pressão nos hospitais."
  },
  {
    "id": 1041,
    "topicId": 1,
    "question": "Dois cabos de tração exercem forças no mesmo ponto com módulos de 20 N e 20 N, formando entre si um ângulo de 120 graus. Qual é o módulo da força resultante gerada por este par de forças?",
    "options": [
      "40 N",
      "20 N",
      "0 N",
      "400 N"
    ],
    "correctIndex": 1,
    "explanation": "Pela Lei dos Cossenos para a resultante de dois vetores: R = √(F₁² + F₂² + 2·F₁·F₂·cos θ). Como cos 120° = -0,5, temos: R = √(20² + 20² + 2 · 20 · 20 · (-0,5)) = √(400 + 400 - 400) = √400 = 20 N! No caso particular de duas forças iguais formando 120°, a resultante tem módulo exatamente igual ao de cada força individual.",
    "distractorAnalysis": [
      "Opção A (40 N) assumiria ângulo de 0° (mesmo sentido).",
      "Opção C (0 N) assumiria ângulo de 180° (sentidos opostos colineares).",
      "Opção D multiplica os módulos sem relação com a geometria vetorial."
    ],
    "nursingApplication": "Em trações ortopédicas de suspensão equilibrada, a geometria angular dos cabos determina a tração real no membro: afastar ou aproximar as polias altera o ângulo θ e a intensidade da força resultante que mantém a fratura reduzida."
  },
  {
    "id": 1042,
    "topicId": 1,
    "question": "Um corpo encontra-se em repouso sobre uma mesa horizontal sob ação exclusiva do seu peso e da força normal da mesa. De acordo com a 3.ª Lei de Newton, onde se encontra aplicada e qual é a origem da força de REAÇÃO ao peso do corpo?",
    "options": [
      "A reação ao peso é a força normal exercida pela mesa sobre a base do corpo.",
      "A reação ao peso é uma força de atração gravitacional com intensidade igual, dirigida para cima e aplicada no centro da Terra.",
      "A reação ao peso encontra-se no ar que rodeia o corpo.",
      "O peso não tem força de reação porque a gravidade é uma ilusão de ótica."
    ],
    "correctIndex": 1,
    "explanation": "Este é um dos erros conceptuais mais frequentes em física: a força normal NÃO é a reação ao peso! O peso é a força com que a Terra atrai o corpo; logo, pela 3.ª Lei de Newton, a sua reação é a força de igual intensidade com que o corpo atrai gravitacionalmente a Terra (aplicada no centro da Terra). A força normal é a reação da compressão mecânica entre a mesa e a superfície de apoio do corpo.",
    "distractorAnalysis": [
      "Opção A comete o erro clássico de confundir a força normal com a reação ao peso (atuam no mesmo corpo e têm origens físicas diferentes).",
      "Opção C e Opção D apresentam explicações falsas sem base na física clássica."
    ],
    "nursingApplication": "Diferenciar a origem das forças permite ao enfermeiro compreender que apoiar um doente num colchão não elimina a força peso do utente: apenas introduz forças normais distribuídas de suporte mecânico para equilibrar o peso."
  },
  {
    "id": 1043,
    "topicId": 1,
    "question": "Em que unidade do Sistema Internacional se exprime o Coeficiente de Atrito (μ)?",
    "options": [
      "Newton (N)",
      "Pascal (Pa)",
      "É uma grandeza adimensional (sem unidade de medida).",
      "Metro por segundo (m/s)"
    ],
    "correctIndex": 2,
    "explanation": "Como F_atrito = μ · N, isolando o coeficiente de atrito obtém-se μ = F_atrito / N. Sendo a razão entre duas forças expressas na mesma unidade (Newton / Newton), as unidades cancelam-se mutuamente, resultando num número puro adimensional sem qualquer unidade de medida.",
    "distractorAnalysis": [
      "Opção A confunde o coeficiente de atrito com a força de atrito (que se mede em Newton).",
      "Opção B é a unidade de pressão.",
      "Opção D é a unidade de velocidade linear."
    ],
    "nursingApplication": "Os fabricantes de tecidos de cuidados hospitalares indicam nos seus folhetos técnicos o coeficiente de atrito do material (ex: lençóis de poliéster deslizante com μ = 0,15 vs algodão tradicional com μ = 0,50). Compreender que é um índice adimensional ajuda a equipa a comparar objetivamente a eficácia dos dispositivos de deslizamento."
  },
  {
    "id": 1044,
    "topicId": 1,
    "question": "Qual das seguintes situações clínicas de um doente no leito representa uma condição em que a força de atrito estático assume o seu valor MÁXIMO possível (Fatrito_max = μ_e · N)?",
    "options": [
      "O doente está a deslizar a grande velocidade pelos lençóis abaixo em direção ao chão.",
      "O doente encontra-se na iminência imediata de iniciar o deslizamento num leito inclinado, no limite exato antes de começar a mover-se.",
      "O doente está suspenso no ar por um guincho mecânico sem qualquer contacto com a cama.",
      "O doente está deitado num colchão perfeitamente horizontal sem qualquer força horizontal aplicada."
    ],
    "correctIndex": 1,
    "explanation": "A força de atrito estático é uma força de autoajuste: enquanto o corpo está em repouso, ela é exatamente igual à força que tenta mover o corpo (F_atrito_e = F_aplicada). Ela cresce progressivamente até atingir um valor limite máximo (Fatrito_max = μ_e · N), momento denominado 'iminência de movimento'. Se a força aplicada exceder esse limite, o corpo começa a deslizar e o atrito passa a ser cinético.",
    "distractorAnalysis": [
      "Opção A descreve movimento relativo com atrito cinético (μ_c · N), que é menor que o estático máximo.",
      "Opção C não tem superfícies sólidas em contacto, logo o atrito de superfície é nulo.",
      "Opção D representa atrito estático nulo (F_atrito_e = 0), pois não há força paralela a tentar mover o corpo."
    ],
    "nursingApplication": "Ao inclinar a cabeceira da cama hospitalar, há um ângulo crítico limite acima do qual a componente tangencial do peso supera o atrito estático máximo e o doente começa a escorregar. O enfermeiro reconhece esta transição de fase biomecânica e evita ângulos superiores a 30° em doentes de risco."
  },
  {
    "id": 1045,
    "topicId": 1,
    "question": "Um dinamómetro de mola utilizado na reabilitação muscular de um doente distende-se 5 cm quando sujeito a uma força de tração de 100 N. Admitindo que a mola obedece à Lei de Hooke (F = k · Δx), qual é a constante elástica (k) desta mola?",
    "options": [
      "20 N/m",
      "2000 N/m",
      "500 N/m",
      "5 N/m"
    ],
    "correctIndex": 1,
    "explanation": "Pela Lei de Hooke, F = k · Δx. Convertendo a deformação para metros: Δx = 5 cm = 0,05 m. Isolando a constante elástica: k = F / Δx = 100 N / 0,05 m = 2000 N/m. A mola requer 2000 N de força para esticar 1 metro.",
    "distractorAnalysis": [
      "Opção A (20 N/m) esqueceu a conversão de centímetros para metros (100 / 5).",
      "Opção C (500 N/m) resulta da multiplicação de 100 por 5.",
      "Opção D não reflete o cálculo da constante elástica."
    ],
    "nursingApplication": "Fitas elásticas de resistência calibrada (como as faixas Theraband) utilizadas em fisioterapia e enfermagem de reabilitação possuem diferentes cores correspondentes a constantes elásticas k crescentes, permitindo graduar com rigor as forças aplicadas no fortalecimento muscular pós-operatório."
  },
  {
    "id": 1046,
    "topicId": 1,
    "question": "Dois enfermeiros transferem um doente de 80 kg de uma cama para uma maca. Ambos exercem forças verticais que sustentam o peso do doente. Se o enfermeiro A suporta uma força de 450 N, qual é a força que o enfermeiro B tem de exercer para manter o doente em equilíbrio vertical sustentado (adotando g = 10 m/s²)?",
    "options": [
      "800 N",
      "350 N",
      "450 N",
      "1250 N"
    ],
    "correctIndex": 1,
    "explanation": "O peso total do doente é P = m · g = 80 kg × 10 m/s² = 800 N. Para que o doente esteja em equilíbrio vertical sustentado, a soma das forças verticais para cima tem de igualar o peso para baixo: F_A + F_B = P => 450 N + F_B = 800 N => F_B = 800 - 450 = 350 N.",
    "distractorAnalysis": [
      "Opção A (800 N) é o peso total do doente.",
      "Opção C (450 N) assumiria distribuição simétrica que totalizaria 900 N.",
      "Opção D (1250 N) somaria 800 com 450 incorretamente."
    ],
    "nursingApplication": "Nas transferências de doentes entre planos, a carga divide-se entre os membros da equipa consoante a posição de cada um. O enfermeiro mais próximo do tronco e bacia suporta habitualmente maior fração do peso do que o colega que segura os membros inferiores, devendo a equipa coordenar-se para equalizar os esforços."
  },
  {
    "id": 1047,
    "topicId": 1,
    "question": "Num procedimento de punção venosa periférica, o bisel da agulha de 20G (área aproximada de 0,5 mm² = 0,5 × 10⁻⁶ m²) penetra a veia após o enfermeiro aplicar uma força axial de 1 N. Qual é a pressão exercida na ponta do bisel sobre a parede venosa?",
    "options": [
      "2 000 000 Pa (2 MegaPascals)",
      "0,5 Pa",
      "200 Pa",
      "1000 Pa"
    ],
    "correctIndex": 0,
    "explanation": "Calculando a pressão mecânica pontual: P = F / A = 1 N / (0,5 × 10⁻⁶ m²) = 2 × 10⁶ N/m² = 2 000 000 Pa = 2 MPa. Uma pressão de 2 milhões de Pascals é suficiente para vencer a resistência mecânica elástica da parede da veia sem necessitar de pancadas ou movimentos violentos.",
    "distractorAnalysis": [
      "Opção B, C e D cometem erros de cálculo na conversão de mm² para m² (1 mm² = 10⁻⁶ m²)."
    ],
    "nursingApplication": "A técnica de punção venosa exige movimentos firmes, suaves e contínuos: a geometria aguçada do bisel garante pressões de corte locais na ordem dos MegaPascals com forças minúsculas de 1 a 2 N, permitindo cateterizar veias frágeis sem extravasamento nem hematomas."
  },
  {
    "id": 1048,
    "topicId": 1,
    "question": "Qual das seguintes grandezas mecânicas é considerada um vetor nulo num corpo humano que permanece imóvel em repouso na enfermaria?",
    "options": [
      "A força da gravidade (peso).",
      "A quantidade de movimento (momento linear) e a aceleração.",
      "A massa corporal do utente.",
      "A pressão arterial sistólica."
    ],
    "correctIndex": 1,
    "explanation": "Por definição na cinemática e dinâmica clássicas, se a velocidade de um corpo em repouso é zero e constante (v = 0), a sua aceleração é o vetor nulo (a = 0) e a sua quantidade de movimento linear (p = m · v) é igualmente o vetor nulo. A força da gravidade e a massa continuam a existir plenamente.",
    "distractorAnalysis": [
      "Opção A é falsa: a gravidade atua permanentemente enquanto o corpo tiver massa no campo terrestre.",
      "Opção C é incorreta: a massa é um escalar positivo constante.",
      "Opção D é incorreta: a pressão arterial mantém-se dinâmica no ciclo cardíaco."
    ],
    "nursingApplication": "Em repouso mecânico, o balanço vetorial nulo permite estabilidade clínica e recuperação energética do doente, sendo o repouso absoluto prescrito em fases agudas de enfarte do miocárdio ou politraumatismo."
  },
  {
    "id": 1049,
    "topicId": 1,
    "question": "O conceito de 'pressão de fecho capilar' na derme humana situa-se normalmente no intervalo de:",
    "options": [
      "100 a 140 mmHg",
      "25 a 32 mmHg",
      "1 a 2 mmHg",
      "500 a 760 mmHg"
    ],
    "correctIndex": 1,
    "explanation": "A pressão nos capilares cutâneos humanos varia de cerca de 32 mmHg na extremidade arteriolar a cerca de 12-15 mmHg na extremidade venular, situando-se a pressão média de perfusão em cerca de 20-25 mmHg. Qualquer pressão de compressão externa sustentada que ultrapasse o limiar de 25 a 32 mmHg colapsa o lúmen capilar.",
    "distractorAnalysis": [
      "Opção A corresponde à pressão arterial sistólica sistémica nas grandes artérias.",
      "Opção C é demasiado baixa (pressão no átrio direito / PVC normal varia entre 2 a 6 mmHg).",
      "Opção D corresponde à pressão atmosférica ao nível do mar (760 mmHg)."
    ],
    "nursingApplication": "O valor biofísico de 32 mmHg é o limiar de referência internacional (gold standard) em estudos de enfermagem para avaliar a eficácia de colchões hospitalares: uma boa superfície de redistribuição de pressão não deve permitir pressões pontuais superiores a 32 mmHg nas zonas de maior risco."
  },
  {
    "id": 1050,
    "topicId": 1,
    "question": "A decomposição de uma força F num par de eixos cartesianos ortogonais (x e y) com ângulo de inclinação θ em relação ao eixo horizontal x é calculada através das relações trigonométricas:",
    "options": [
      "Fx = F · sen θ e Fy = F · cos θ",
      "Fx = F · cos θ e Fy = F · sen θ",
      "Fx = F / sen θ e Fy = F / cos θ",
      "Fx = F + θ e Fy = F - θ"
    ],
    "correctIndex": 1,
    "explanation": "Pela definição das funções trigonométricas no triângulo retângulo: o cateto adjacente ao ângulo θ é dado por cos θ = Fx / F => Fx = F · cos θ; o cateto oposto é dado por sen θ = Fy / F => Fy = F · sen θ. Pelo Teorema de Pitágoras, F² = Fx² + Fy².",
    "distractorAnalysis": [
      "Opção A inverte as projeções quando o ângulo θ é definido com o eixo horizontal.",
      "Opção C e Opção D apresentam operações matematicamente incorretas na projeção vetorial."
    ],
    "nursingApplication": "A decomposição trigonométrica Fx = F·cos θ e Fy = F·sen θ é a base matemática que os enfermeiros utilizam para compreender como a inclinação da cabeceira da cama converte o peso vertical do doente numa força tangencial de cisalhamento sacral."
  },
  {
    "id": 1051,
    "topicId": 1,
    "question": "Na descrição biofísica do movimento e das forças no corpo humano, por que razão a força é categorizada rigorosamente como uma grandeza vetorial e não como uma grandeza escalar?",
    "options": [
      "Porque para caracterizar completamente a força é imperativo definir não apenas a sua intensidade (módulo), mas também a sua direção, o seu sentido e o ponto exato de aplicação na matéria viva.",
      "Porque a força depende apenas da temperatura dos tecidos e da pressão atmosférica local.",
      "Porque qualquer grandeza expressa em Newtons pode ser somada algebricamente sem considerar ângulos espaciais.",
      "Porque grandezas vetoriais são exclusivas de sistemas eletrónicos e não existem na anatomia biológica."
    ],
    "correctIndex": 0,
    "explanation": "Uma grandeza vetorial exige quatro atributos para a sua definição plena: módulo (ou intensidade), direção (a reta de ação), sentido (a orientação sobre a reta) e ponto de aplicação. Na biomecânica, aplicar uma força de 50 N para cima produz um efeito fisiológico completamente distinto de aplicar os mesmos 50 N para baixo ou lateralmente.",
    "distractorAnalysis": [
      "Opção B confunde variáveis termodinâmicas escalares com a definição mecânica de vetor de força.",
      "Opção C é falsa, pois forças exigem soma vetorial (regra do paralelogramo ou decomposição trigonométrica em componentes ortogonais).",
      "Opção D é incorreta, pois as forças musculares, articulares e gravíticas no corpo humano são todos vetores clássicos da física newtoniana."
    ],
    "nursingApplication": "Ao posicionar uma tração num membro inferior fraturado, o enfermeiro tem de respeitar escrupulosamente a linha de ação e o ângulo do cabo: alterar a direção ou o sentido do vetor de tração compromete o alinhamento dos topos ósseos e causa dor severa ao doente."
  },
  {
    "id": 1052,
    "topicId": 1,
    "question": "No Sistema Internacional de Unidades (SI), qual é a correspondência dimensional exata da unidade de Força, o Newton (N), em termos das grandezas fundamentais de massa, comprimento e tempo?",
    "options": [
      "1 N = 1 kg·m/s²",
      "1 N = 1 kg·m²/s",
      "1 N = 1 kg/m·s²",
      "1 N = 1 kg·s/m²"
    ],
    "correctIndex": 0,
    "explanation": "A partir da 2.ª Lei de Newton (F = m · a), a massa tem como unidade fundamental o quilograma (kg) e a aceleração tem o metro por segundo ao quadrado (m/s²). Portanto, 1 Newton corresponde à força necessária para imprimir a aceleração de 1 m/s² a uma massa inercial de 1 kg (1 N = 1 kg·m/s²).",
    "distractorAnalysis": [
      "Opção B (kg·m²/s) corresponde às unidades de momento angular no SI.",
      "Opção C (kg/m·s²) corresponde à unidade de pressão mecânica, o Pascal (Pa).",
      "Opção D é uma combinação dimensional sem significado físico reconhecido."
    ],
    "nursingApplication": "A análise dimensional permite ao enfermeiro converter grandezas em dispositivos médicos, como bombas infusoras pressurizadas ou manómetros de aspiração brônquica, garantindo que as calibrações respeitam as normas métricas hospitalares internacionais."
  },
  {
    "id": 1053,
    "topicId": 1,
    "question": "Duas forças concorrentes de 30 N e 40 N atuam simultaneamente no mesmo ponto anatómico de uma tala imobilizadora formando entre si um ângulo reto (90°). Qual é o módulo da força resultante gerada?",
    "options": [
      "50 N",
      "70 N",
      "10 N",
      "1200 N"
    ],
    "correctIndex": 0,
    "explanation": "Pelo Teorema de Pitágoras aplicado à resultante de vetores ortogonais (ângulo de 90°), R = √(F₁² + F₂²) = √(30² + 40²) = √(900 + 1600) = √2500 = 50 N. Como as forças não são colineares, a resultante não é uma simples soma algébrica.",
    "distractorAnalysis": [
      "Opção B (70 N) é a soma escalar direta (30 + 40), que só ocorreria se ambas as forças atuassem rigorosamente na mesma direção e no mesmo sentido (ângulo de 0°).",
      "Opção C (10 N) seria a resultante se atuassem na mesma direção mas com sentidos opostos (ângulo de 180°).",
      "Opção D (1200 N) é a multiplicação incorreta dos módulos das forças."
    ],
    "nursingApplication": "Em doentes ortopédicos submetidos a tração bi-vetorial (por exemplo, suspensão de membro com peso vertical e tração horizontal), o enfermeiro sabe que a força efetiva sobre o osso depende trigonometricamente do ângulo dos cabos e polias."
  },
  {
    "id": 1054,
    "topicId": 1,
    "question": "Qual das seguintes grandezas físicas monitorizadas rotineiramente nos cuidados de enfermagem é estritamente uma GRANDEZA ESCALAR?",
    "options": [
      "A Temperatura corporal do doente (expressa em graus Celsius ou Kelvin).",
      "A Força de tração esquelética aplicada a um fémur fraturado.",
      "A Aceleração sofrida por uma maca ao ser empurrada no corredor.",
      "A Velocidade vetorial de deslocamento de uma equipa de emergência."
    ],
    "correctIndex": 0,
    "explanation": "Grandezas escalares ficam completamente especificadas por um único número acompanhado pela respetiva unidade de medida (ex: 37,0 °C, 70 kg, 120 segundos). Não possuem direção nem sentido no espaço tridimensional. A temperatura, a massa, a energia e o tempo são exemplos clássicos de grandezas escalares.",
    "distractorAnalysis": [
      "Opção B é uma força, logo é uma grandeza vetorial com direção e sentido definidos.",
      "Opção C é aceleração, grandeza vetorial correspondente à taxa de variação temporal do vetor velocidade.",
      "Opção D é a velocidade vetorial, que exige especificação do rumo e orientação do movimento."
    ],
    "nursingApplication": "Na avaliação dos sinais vitais, o enfermeiro regista grandezas escalares (como temperatura de 38,5 °C ou frequência de pulso de 80 bpm), compreendendo que não há dependência espacial ou angular nestes parâmetros fisiológicos."
  },
  {
    "id": 1055,
    "topicId": 1,
    "question": "Se duas forças de 50 N atuarem num mesmo ponto de ancoragem de uma cama hospitalar na mesma direção, mas com sentidos exatamente opostos (ângulo de 180° entre si), qual é o valor da força resultante?",
    "options": [
      "0 N (as forças anulam-se mutuamente no ponto).",
      "100 N na direção perpendicular.",
      "50 N no sentido da força primária.",
      "2500 N em sentido aleatório."
    ],
    "correctIndex": 0,
    "explanation": "Quando dois vetores colineares têm a mesma intensidade (50 N) e sentidos contrários, a resultante é dada pela diferença aritmética dos seus módulos: R = 50 N - 50 N = 0 N. O ponto de ancoragem encontra-se em equilíbrio estático sob ação deste binário oposto.",
    "distractorAnalysis": [
      "Opção B (100 N) só ocorreria se ambas as forças atuassem no mesmo sentido.",
      "Opção C ignora o efeito de anulação mútua exercido pela força oposta de intensidade idêntica.",
      "Opção D representa uma multiplicação incorreta de grandezas."
    ],
    "nursingApplication": "Ao ajustar tiras de fixação ou cintos de imobilização em doentes agitados, o enfermeiro equilibra tensões opostas para que a força resultante líquida sobre a pele seja nula, evitando lesões teciduais por compressão assimétrica."
  },
  {
    "id": 1056,
    "topicId": 1,
    "question": "A componente horizontal (Fx) de uma força oblíqua F de 100 N aplicada com um ângulo de 60° em relação ao plano horizontal do chão é dada por:",
    "options": [
      "Fx = F · cos(60°) = 100 · 0,5 = 50 N",
      "Fx = F · sen(60°) = 100 · 0,866 = 86,6 N",
      "Fx = F · tan(60°) = 100 · 1,732 = 173,2 N",
      "Fx = F / 60 = 1,67 N"
    ],
    "correctIndex": 0,
    "explanation": "Pela decomposição ortogonal de vetores num referencial cartesiano, o cateto adjacente ao ângulo de inclinação horizontal corresponde à componente Fx = F · cos(θ). Para θ = 60°, cos(60°) = 0,5, resultando em Fx = 100 N × 0,5 = 50 N.",
    "distractorAnalysis": [
      "Opção B (86,6 N) calcula a componente vertical Fy = F · sen(60°), não a componente horizontal.",
      "Opção C utiliza erroneamente a tangente, que relaciona os catetos e não a hipotenusa da força.",
      "Opção D divide arbitrariamente o módulo pelo ângulo em graus, violando a trigonometria elementar."
    ],
    "nursingApplication": "Ao puxar uma cadeira de rodas ou um suporte de soros com uma pega inclinada a 60°, o enfermeiro sabe que apenas metade da força muscular aplicada contribui efetivamente para o avanço horizontal, enquanto a outra metade atua verticalmente aliviando ou comprimindo o atrito com o piso."
  },
  {
    "id": 1057,
    "topicId": 1,
    "question": "Um dinamómetro médico é um instrumento calibrado baseado na deformação elástica de uma mola. Que grandeza física mensura diretamente este instrumento?",
    "options": [
      "A intensidade da Força aplicada (em Newtons).",
      "A massa atómica do tecido cutâneo.",
      "A temperatura cinética celular.",
      "O volume plasmático total."
    ],
    "correctIndex": 0,
    "explanation": "O dinamómetro funciona com base na Lei de Hooke (F = k · Δx), onde a deformação elástica da mola é linearmente proporcional à força externa aplicada. A sua escala mede diretamente forças em Newtons (ou quilogramas-força).",
    "distractorAnalysis": [
      "Opção B refere-se a propriedades químicas nucleares que não deformam molas mecânicas.",
      "Opção C é mensurada por termómetros clínicos de infravermelhos ou de resistência.",
      "Opção D é avaliada por métodos de diluição isotópica ou hematócrito, não por dinamometria."
    ],
    "nursingApplication": "O dinamómetro de preensão manual (handgrip) é usado pelo enfermeiro na triagem nutricional e funcional para avaliar a força muscular de doentes sarcopénicos ou internados em cuidados intensivos, sendo um preditor sensível de recuperação motora."
  },
  {
    "id": 1058,
    "topicId": 1,
    "question": "Quando dizemos que um vetor de força é 'colinear' a outro, isso significa fisicamente que:",
    "options": [
      "Ambos os vetores atuam ao longo da mesma reta suporte (mesma direção), podendo ter sentidos iguais ou opostos.",
      "Os vetores formam obrigatoriamente um ângulo de 90° entre si.",
      "Os vetores têm necessariamente o mesmo ponto de aplicação e sentidos sempre opostos.",
      "As suas intensidades são infinitas."
    ],
    "correctIndex": 0,
    "explanation": "Vetores colineares são aqueles que partilham a mesma linha de ação (reta suporte paralela ou coincidente). A sua soma vetorial reduz-se a uma simples soma ou subtração algébrica dos seus módulos dependendo do sentido.",
    "distractorAnalysis": [
      "Opção B define vetores perpendiculares ou ortogonais, não colineares.",
      "Opção C é incorreta, pois podem atuar em corpos diferentes ou no mesmo sentido.",
      "Opção D é uma afirmação sem sentido físico."
    ],
    "nursingApplication": "Em trações cutâneas no membro inferior, garantir que o cabo e a perna estão colineares evita que forças angulares laterais desloquem a articulação do joelho ou tornozelo."
  },
  {
    "id": 1059,
    "topicId": 1,
    "question": "Na representação gráfica de um vetor de força mecânica, o comprimento geométrico da seta desenhada à escala representa:",
    "options": [
      "O módulo ou intensidade da força.",
      "O tempo de aplicação da força em segundos.",
      "A massa total do corpo que recebe a força.",
      "A densidade tecidual do osso."
    ],
    "correctIndex": 0,
    "explanation": "Num diagrama de corpo livre, a representação geométrica de um vetor adota uma escala (por exemplo, 1 cm = 10 N). Assim, o comprimento da seta traduz o módulo (intensidade), a inclinação define a direção e a ponta da seta indica o sentido.",
    "distractorAnalysis": [
      "Opção B confunde comprimento geométrico vetorial com duração temporal escalar.",
      "Opção C confunde a força resultante com a inércia do corpo (massa).",
      "Opção D refere-se a uma propriedade reológica dos tecidos sem relação com o desenho do vetor."
    ],
    "nursingApplication": "Ao analisar diagramas biomecânicos em manuais de dispositivos ortopédicos, o enfermeiro interpreta as setas maiores como pontos de concentração de carga que exigem vigilância cutânea reforçada."
  },
  {
    "id": 1060,
    "topicId": 1,
    "question": "Qual é a relação entre a unidade antiga de força 'quilograma-força' (kgf) e a unidade oficial do SI, o Newton (N), assumindo g = 9,8 m/s²?",
    "options": [
      "1 kgf ≈ 9,8 N",
      "1 kgf = 1 N",
      "1 kgf = 0,102 N",
      "1 kgf = 980 N"
    ],
    "correctIndex": 0,
    "explanation": "Um quilograma-força é o peso exercido pela gravidade padrão da Terra (g = 9,80665 m/s²) sobre uma massa de 1 kg. Logo, P = m · g = 1 kg × 9,8 m/s² = 9,8 N. Portanto, 1 kgf ≈ 9,8 N.",
    "distractorAnalysis": [
      "Opção B confunde kgf com Newton, esquecendo a aceleração da gravidade.",
      "Opção C inverte a relação (1 N ≈ 0,102 kgf).",
      "Opção D multiplica por 100 de forma incorreta (confundindo com dinas do sistema CGS)."
    ],
    "nursingApplication": "Equipamentos hospitalares mais antigos ou importados por vezes exibem pesos de tração ou limites de carga em kgf. O enfermeiro converte mentalmente 1 kgf para cerca de 10 N para efetuar cálculos rápidos de tensão mecânica nos cabos."
  },
  {
    "id": 1061,
    "topicId": 1,
    "question": "Um vetor de força de 20 N aponta horizontalmente para a direita e outro de 15 N aponta horizontalmente para a esquerda sobre a mesma caixa de medicamentos. Qual é a força resultante?",
    "options": [
      "5 N para a direita.",
      "35 N para a direita.",
      "5 N para a esquerda.",
      "0 N."
    ],
    "correctIndex": 0,
    "explanation": "Tratando-se de vetores colineares com sentidos opostos, adota-se um eixo positivo (ex: para a direita): R = (+20 N) + (-15 N) = +5 N. A resultante tem módulo de 5 N e sentido orientado para a direita.",
    "distractorAnalysis": [
      "Opção B somaria os módulos se ambos apontassem para o mesmo lado.",
      "Opção C atribui o sentido da força menor, o que viola o balanço vetorial.",
      "Opção D só seria verdadeira se ambas as forças tivessem rigorosamente a mesma magnitude."
    ],
    "nursingApplication": "Ao estabilizar um suporte de bombas de infusão puxado em direções opostas por cabos ou tubuladuras, o enfermeiro sabe que a força resultante desequilibrada causará movimento no sentido da maior tensão se não for travado."
  },
  {
    "id": 1062,
    "topicId": 1,
    "question": "Qual dos seguintes sistemas de grandezas reúne EXCLUSIVAMENTE grandezas de natureza vetorial?",
    "options": [
      "Força, Aceleração, Deslocamento e Quantidade de Movimento.",
      "Massa, Temperatura, Volume e Pressão.",
      "Tempo, Energia, Densidade e Força.",
      "Frequência cardíaca, Área, Comprimento e Aceleração."
    ],
    "correctIndex": 0,
    "explanation": "Força (N), aceleração (m/s²), deslocamento (m) e quantidade de movimento ou momento linear (kg·m/s) são todas grandezas vetoriais que requerem módulo, direção e sentido no espaço.",
    "distractorAnalysis": [
      "Opção B contém apenas grandezas escalares (massa, temperatura, volume, pressão).",
      "Opção C mistura escalares (tempo, energia, densidade) com um vetor (força).",
      "Opção D inclui escalares fisiológicos e geométricos (frequência cardíaca, área, comprimento)."
    ],
    "nursingApplication": "O domínio rigoroso dos conceitos vetoriais é a base da biofísica médica que distingue a física mecânica das variáveis metabólicas puramente quantitativas no plano de cuidados."
  },
  {
    "id": 1063,
    "topicId": 1,
    "question": "A regra do paralelogramo é utilizada na biomecânica para:",
    "options": [
      "Determinar geometricamente o vetor resultante da soma de duas forças concorrentes aplicadas no mesmo ponto.",
      "Calcular a dosagem de antibióticos por peso corporal.",
      "Medir a impedância bioelétrica do tecido muscular.",
      "Estimar a taxa de filtração glomerular renal."
    ],
    "correctIndex": 0,
    "explanation": "A regra do paralelogramo é o método geométrico canónico para somar dois vetores concorrentes: desenham-se retas paralelas aos vetores a partir das suas extremidades formando um paralelogramo; a diagonal com origem no ponto de aplicação comum representa o vetor resultante.",
    "distractorAnalysis": [
      "Opções B, C e D referem-se a processos farmacológicos, eletrofisiológicos e nefrológicos sem qualquer ligação à geometria vetorial newtoniana."
    ],
    "nursingApplication": "Em enfermagem ortopédica, a regra do paralelogramo permite estimar rapidamente a direção em que o membro fraturado será tracionado pela combinação de pesos suspensos na cama balcânica."
  },
  {
    "id": 1064,
    "topicId": 1,
    "question": "Se um vetor de força possui módulo de 10 N e atua no sentido positivo do eixo dos Y, como se expressa nas componentes cartesianas em notação de vetores unitários (i, j)?",
    "options": [
      "F = 0 i + 10 j (N)",
      "F = 10 i + 0 j (N)",
      "F = 10 i + 10 j (N)",
      "F = -10 j (N)"
    ],
    "correctIndex": 0,
    "explanation": "Sendo o vetor estritamente vertical e apontando no sentido positivo do eixo Y, a sua componente no eixo X (vetor unitário i) é nula e no eixo Y (vetor unitário j) é de 10 N. Escreve-se portanto F = 0 i + 10 j (N).",
    "distractorAnalysis": [
      "Opção B descreve uma força puramente horizontal ao longo do eixo X.",
      "Opção C teria módulo √(10² + 10²) = 14,14 N inclinada a 45°.",
      "Opção D aponta no sentido negativo do eixo Y (para baixo)."
    ],
    "nursingApplication": "A representação em eixos ortogonais é o modelo matemático que alimenta o software de monitorização de forças em camas inteligentes de unidades de cuidados intensivos para deteção precoce de saídas do leito."
  },
  {
    "id": 1065,
    "topicId": 1,
    "question": "Uma força constante de 40 N atua sobre um corpo durante um deslocamento de 2 metros na mesma direção e sentido da força. O trabalho mecânico (W = F · d) realizado é de:",
    "options": [
      "80 Joules (J)",
      "20 Joules (J)",
      "42 Joules (J)",
      "1600 Joules (J)"
    ],
    "correctIndex": 0,
    "explanation": "O trabalho mecânico realizado por uma força constante é dado pelo produto escalar W = F · d · cos(θ). Como a força e o deslocamento têm o mesmo sentido, θ = 0° e cos(0°) = 1. Logo, W = 40 N × 2 m = 80 J.",
    "distractorAnalysis": [
      "Opção B (20 J) é a divisão incorreta da força pela distância (40 / 2).",
      "Opção C (42 J) é a soma sem sentido físico de Newtons com metros.",
      "Opção D (1600 J) é o quadrado da força."
    ],
    "nursingApplication": "O trabalho mecânico traduz o gasto energético exigido ao enfermeiro para deslocar uma carga no hospital. Minimizar o atrito das rodas de macas e cadeiras diminui a força necessária e o trabalho físico despendido nas transferências."
  },
  {
    "id": 1066,
    "topicId": 1,
    "question": "A propriedade física da matéria que mede a resistência quantitativa que um corpo opõe a qualquer alteração no seu estado de repouso ou de movimento retilíneo uniforme denomina-se:",
    "options": [
      "Massa Inercial.",
      "Viscosidade Dinâmica.",
      "Energia Cinética.",
      "Tensão Superficial."
    ],
    "correctIndex": 0,
    "explanation": "A inércia é a tendência dos corpos para manter o seu estado vetorial de velocidade. A massa inercial é a medida quantitativa dessa inércia: quanto maior for a massa de um doente ou equipamento, maior será a sua resistência a ser acelerado ou travado.",
    "distractorAnalysis": [
      "Opção B é a resistência ao escoamento em fluidos.",
      "Opção C é a energia associada ao estado de movimento (½ m v²).",
      "Opção D é a força coesiva na superfície livre de líquidos."
    ],
    "nursingApplication": "Um doente com obesidade mórbida (massa de 160 kg) tem uma inércia muito superior à de um doente com 50 kg. Ao transportar a maca, acelerar e desacelerar exige muito maior cautela do enfermeiro para evitar lesões de impacto."
  },
  {
    "id": 1067,
    "topicId": 1,
    "question": "Um doente viaja deitado numa maca dentro de uma ambulância a 80 km/h em linha reta constante. Se o condutor travar bruscamente a fundo, qual é o comportamento do corpo do doente segundo a 1.ª Lei de Newton?",
    "options": [
      "O corpo do doente tende a prosseguir o movimento para a frente a 80 km/h por inércia, sendo projetado contra a divisória da ambulância se não estiver devidamente contido por cintos de segurança.",
      "O corpo do doente para instantaneamente no mesmo milissegundo em que as rodas travam.",
      "O corpo do doente é acelerado em direção ao teto do veículo pela força centrífuga.",
      "O corpo do doente recua involuntariamente para trás em direção à porta traseira da ambulância."
    ],
    "correctIndex": 0,
    "explanation": "Pela 1.ª Lei de Newton (Inércia), um corpo em movimento retilíneo uniforme mantém a sua velocidade até que uma força externa resultante não nula atue sobre ele. Quando a ambulância desacelera, o doente continua para a frente à velocidade inicial até ser travado pelos cintos da maca ou por colisão.",
    "distractorAnalysis": [
      "Opção B viola a inércia; nenhum corpo com massa para instantaneamente sem a ação de forças imensas.",
      "Opção C inventa uma aceleração vertical sem fundamento na física do movimento linear longitudinal.",
      "Opção D confunde travagem com uma aceleração para a frente (arranque brusco)."
    ],
    "nursingApplication": "Na condução de ambulâncias de emergência e transporte intra-hospitalar de doentes críticos, o enfermeiro tem a obrigação de trancar todas as correias da maca e grades de proteção antes de iniciar a marcha."
  },
  {
    "id": 1068,
    "topicId": 1,
    "question": "Se um carrinho de anestesia com massa de 80 kg se desloca num corredor horizontal com velocidade rigorosamente constante de 1 m/s em linha reta, qual é o valor da força resultante que atua sobre ele?",
    "options": [
      "Exatamente 0 N.",
      "80 N para a frente.",
      "9,8 N para baixo.",
      "800 N no sentido do movimento."
    ],
    "correctIndex": 0,
    "explanation": "Se a velocidade é constante em magnitude, direção e sentido (Movimento Retilíneo e Uniforme), a aceleração vetorial é nula (a = 0). Pela 2.ª Lei de Newton (F = m · a), se a = 0, a força resultante é rigorosamente zero (∑F = 0). A força que o enfermeiro aplica anula exatamente a força de atrito das rodas.",
    "distractorAnalysis": [
      "Opção B confunde velocidade constante com aceleração unitária de 1 m/s².",
      "Opção C confunde a força resultante horizontal com a aceleração da gravidade.",
      "Opção D calcula o peso aproximado e atribui-o erradamente à resultante do movimento horizontal."
    ],
    "nursingApplication": "Compreender que em velocidade constante a força resultante é nula ensina o enfermeiro que o esforço contínuo para manter uma cama em andamento serve apenas para vencer as forças dissipativas de atrito com o solo."
  },
  {
    "id": 1069,
    "topicId": 1,
    "question": "Um frasco de perfusão intravenosa de 1000 mL encontra-se suspenso em repouso absoluto num suporte de soros vertical. De acordo com a 1.ª Lei de Newton:",
    "options": [
      "A resultante de todas as forças aplicadas no frasco é rigorosamente nula (a força gravítica para baixo é exatamente equilibrada pela força de sustentação do gancho para cima).",
      "Não atua qualquer força sobre o frasco suspenso.",
      "A força gravítica é dez vezes maior que a força do gancho.",
      "O frasco encontra-se em aceleração constante impercetível a olho nu."
    ],
    "correctIndex": 0,
    "explanation": "Estar em repouso é um estado de equilíbrio estático da 1.ª Lei de Newton: ∑F = 0. Isto não significa que não existam forças, mas sim que o vetor peso (P = m · g para baixo) e a força de tração/tensão do gancho (T para cima) têm igual intensidade e sentidos opostos, anulando-se mutuamente.",
    "distractorAnalysis": [
      "Opção B confunde ausência de força resultante com ausência total de forças individuais.",
      "Opção C causaria aceleração do frasco para o solo, rasgando o gancho.",
      "Opção D viola a definição física de repouso no referencial do quarto."
    ],
    "nursingApplication": "Ao pendurar bolsas de soroterapia ou circuitos pesados de diálise, o enfermeiro inspeciona a firmeza mecânica dos ganchos para assegurar que o equilíbrio estático se mantém e que não há rutura do suporte."
  },
  {
    "id": 1070,
    "topicId": 1,
    "question": "Um doente é transferido numa cadeira de rodas que é parada subitamente ao encontrar um desnível no piso. Por que motivo o tronco do doente se projeta para a frente?",
    "options": [
      "Devido à inércia do tronco, que mantém o movimento que possuía antes de a cadeira ser travada pelo obstáculo.",
      "Devido a uma força mágica criada pelo desnível que puxa o doente.",
      "Porque a gravidade terrestre inverteu subitamente a sua direção de ação.",
      "Porque os músculos abdominais do doente se contraem involuntariamente para a frente."
    ],
    "correctIndex": 0,
    "explanation": "Quando a cadeira de rodas é travada bruscamente na base pelas rodas, o tronco do doente não recebe de imediato a mesma força de desaceleração se não estiver fixado; pela Lei da Inércia, o tronco continua o seu movimento com a velocidade que já possuía até sofrer uma força externa restauradora.",
    "distractorAnalysis": [
      "Opções B e C inventam conceitos esotéricos e violações absurdas das leis da gravitação.",
      "Opção D confunde reflexos posturais neurológicos secundários com a causa física primária que é a inércia newtoniana."
    ],
    "nursingApplication": "O uso de cintos de segurança pélvicos em cadeiras de rodas e a condução cuidadosa por parte do enfermeiro em rampas e desníveis hospitalares são medidas indispensáveis de prevenção de quedas e traumatismos crânio-encefálicos."
  },
  {
    "id": 1071,
    "topicId": 1,
    "question": "O princípio da inércia aplica-se tanto a corpos no espaço interestelar como a células biológicas dentro do organismo. Em termos estritamente mecânicos, a inércia de um corpúsculo é:",
    "options": [
      "Diretamente proporcional à sua massa inercial.",
      "Inversamente proporcional ao quadrado da sua massa.",
      "Diretamente proporcional ao volume de líquido extracelular.",
      "Independente de qualquer propriedade intrínseca da matéria."
    ],
    "correctIndex": 0,
    "explanation": "A massa inercial é por definição a constante de proporcionalidade entre a força resultante aplicada e a aceleração produzida (F = m · a). Quanto maior a massa m, maior a inércia, o que traduz uma relação linear direta de proporcionalidade.",
    "distractorAnalysis": [
      "Opção B viola a definição básica de mecânica clássica.",
      "Opção C confunde uma variável fisiológica com a propriedade fundamental da matéria.",
      "Opção D é incorreta, pois a inércia depende criticamente da massa."
    ],
    "nursingApplication": "Na centrifugação laboratorial de amostras de sangue colhidas pelo enfermeiro, as hemácias (maior massa inercial) sedimentam no fundo do tubo muito mais rapidamente do que os componentes mais leves do plasma sob a elevada aceleração centrípeta gerada."
  },
  {
    "id": 1072,
    "topicId": 1,
    "question": "Um enfermeiro empurra um carrinho de curativos pesando 30 kg sobre um piso liso e depois larga-o. O carrinho continua a mover-se sozinho durante alguns metros antes de imobilizar-se. A que se deve a paragem final do carrinho?",
    "options": [
      "À existência de forças externas de atrito mecânico nos eixos das rodas e de contacto com o piso que desaceleram o carrinho até anular a sua velocidade.",
      "Ao facto de o carrinho ter 'esgotado' toda a força motora que continha no seu interior.",
      "Ao cancelamento espontâneo da gravidade após o enfermeiro retirar as mãos.",
      "À perda de massa molecular das rodas durante o movimento."
    ],
    "correctIndex": 0,
    "explanation": "Na física newtoniana, uma força não é algo que um corpo 'contém' ou 'armazena', mas sim uma interação externa. O carrinho para unicamente porque as forças de atrito (força resultante contrária ao movimento) produzem uma aceleração negativa (desaceleração) segundo F = m · a, contrariando a inércia.",
    "distractorAnalysis": [
      "Opção B é a visão pré-newtoniana aristotélica errónea (teoria do ímpeto), refutada há séculos pela ciência.",
      "Opção C e D são afirmações estapafúrdias sem conexão com a física clássica."
    ],
    "nursingApplication": "A manutenção regular das rodas dos carrinhos de emergência e medicação (lubrificação dos rolamentos para minimizar o atrito indesejado) garante que o enfermeiro consiga deslocar equipamentos vitais com rapidez e mínimo esforço físico."
  },
  {
    "id": 1073,
    "topicId": 1,
    "question": "Qual é a aceleração de um corpo em repouso sujeito a três forças coplanares que somadas vetorialmente perfazem um polígono fechado de forças?",
    "options": [
      "Aceleração nula (a = 0 m/s²).",
      "Aceleração de 9,8 m/s².",
      "Aceleração dependente da temperatura ambiente.",
      "Aceleração infinita."
    ],
    "correctIndex": 0,
    "explanation": "Quando os vetores de força formam um polígono fechado (a extremidade do último vetor coincide com a origem do primeiro), a força resultante vetorial é estritamente zero: ∑F = 0. Pela 2.ª Lei de Newton, se ∑F = 0, a aceleração tem de ser zero (a = 0 m/s²), permanecendo o corpo em repouso.",
    "distractorAnalysis": [
      "Opção B refere-se à gravidade na queda livre, incompatível com equilíbrio de forças.",
      "Opção C introduz uma variável termodinâmica irrelevante para a soma vetorial de forças.",
      "Opção D é um disparate físico."
    ],
    "nursingApplication": "Em montagens ortopédicas complexas de suspensão de membros inferiores com múltiplos pesos, os cabos formam um sistema equilibrado que mantém o membro estático sem qualquer aceleração dolorosa."
  },
  {
    "id": 1074,
    "topicId": 1,
    "question": "Por que razão a cabeça de um passageiro de ambulância sofre um movimento brusco de hiperextensão para trás ('efeito de chicote' ou whiplash) quando o veículo arranca violentamente para a frente a partir do repouso?",
    "options": [
      "Porque o corpo e o encosto do banco são empurrados para a frente pelo veículo, enquanto a cabeça tende a permanecer no mesmo local espacial por inércia, resultando numa flexão dorsal relativa violenta do pescoço.",
      "Porque a gravidade do planeta atrai a cabeça para trás durante o arranque.",
      "Porque a pressão arterial cerebral sobe subitamente empurrando o crânio.",
      "Porque o ar dentro da ambulância se torna sólido."
    ],
    "correctIndex": 0,
    "explanation": "No arranque rápido, uma força atua sobre o tronco acelerando-o para a frente. Como a cabeça possui massa inercial e não está solidamente fixa, ela tende a permanecer em repouso (1.ª Lei de Newton). Em relação ao tronco acelerado, a cabeça parece ser projetada para trás, estirando os tecidos moles cervicais.",
    "distractorAnalysis": [
      "Opção B confunde gravidade vertical com efeitos inerciais na direção horizontal.",
      "Opção C confunde hemodinâmica com cinemática de massas aceleradas.",
      "Opção D é uma afirmação sem sentido."
    ],
    "nursingApplication": "No socorro pré-hospitalar a vítimas de acidentes de viação, o enfermeiro coloca de imediato o colar cervical e estabilizadores de cabeça para imobilizar a coluna cervical, prevenindo lesões medulares catastróficas decorrentes do efeito de chicote inercial."
  },
  {
    "id": 1075,
    "topicId": 1,
    "question": "Um referencial inercial é definido na física como sendo um sistema de coordenadas no qual:",
    "options": [
      "A 1.ª Lei de Newton se verifica plenamente (um corpo com resultante de forças nula permanece em repouso ou em MRU sem forças fictícias).",
      "A velocidade da luz varia conforme a massa dos corpos.",
      "A aceleração é sempre diferente de zero para qualquer partícula.",
      "Não existe campo gravitacional."
    ],
    "correctIndex": 0,
    "explanation": "Um referencial inercial é aquele que se encontra em repouso ou em movimento retilíneo uniforme relativamente às estrelas distantes. Neles, as leis de Newton aplicam-se sem necessidade de introduzir forças de inércia aparentes (como força centrífuga ou de Coriolis).",
    "distractorAnalysis": [
      "Opção B viola a teoria da relatividade e a constância da velocidade da luz no vácuo.",
      "Opção C descreve referenciais não inerciais acelerados.",
      "Opção D é incorreta, pois referenciais inerciais podem existir na presença de campos gravíticos uniformes se considerarmos a equivalência local."
    ],
    "nursingApplication": "Para a maioria das práticas de enfermagem na enfermaria e bloco operatório, o edifício do hospital é considerado com excelente aproximação um referencial inercial estável para todos os cálculos mecânicos e ergonómicos."
  },
  {
    "id": 1076,
    "topicId": 1,
    "question": "Se um doente estiver deitado numa cama hospitalar perfeitamente horizontal e a força de atrito com o colchão for negligenciável, qual é a força horizontal necessária para MANTER a cama em Movimento Retilíneo e Uniforme?",
    "options": [
      "Rigorosamente zero (0 N).",
      "Igual ao peso do doente.",
      "Metade da sua massa inercial.",
      "Infinita."
    ],
    "correctIndex": 0,
    "explanation": "Na ausência total de atrito e de resistência do ar, pela 1.ª Lei de Newton, um corpo em movimento retilíneo uniforme não precisa de nenhuma força para continuar a mover-se à velocidade vetorial constante. A força só seria necessária para alterar a velocidade (acelerar ou travar).",
    "distractorAnalysis": [
      "Opção B confunde peso (força vertical) com força propulsora horizontal num ambiente sem atrito.",
      "Opção C mistura unidades de força com metade de uma massa escalar.",
      "Opção D ignora a definição fundamental da Lei da Inércia."
    ],
    "nursingApplication": "Este princípio ideal demonstra ao enfermeiro que o esforço contínuo de empurrar equipamentos clínicos deve-se exclusivamente às forças de atrito do piso e dos rolamentos das rodas; melhorar o piso hospitalar reduz dramaticamente o desgaste físico da equipa."
  },
  {
    "id": 1077,
    "topicId": 1,
    "question": "A tendência de um líquido num copo ou de uma bolsa de urina para entornar quando o enfermeiro para bruscamente de caminhar é uma manifestação direta de:",
    "options": [
      "Inércia do fluido, que tenta continuar o seu movimento para a frente com a velocidade que tinha.",
      "Atração magnética exercida pelo chão da enfermaria.",
      "Aumento súbito da densidade da urina.",
      "Condensação espontânea do oxigénio gasoso."
    ],
    "correctIndex": 0,
    "explanation": "Os fluidos obedecem rigorosamente à 1.ª Lei de Newton: ao travar o recipiente com a mão, as partículas do líquido mantêm a velocidade horizontal anterior e sobem pela parede frontal do recipiente por inércia até transbordar se a borda for baixa.",
    "distractorAnalysis": [
      "Opção B inventa um magnetismo inexistente entre fluidos corporais e pavimentos vinílicos.",
      "Opção C e D são disparates químicos sem qualquer base física."
    ],
    "nursingApplication": "Ao transportar frascos de drenagem torácica, bacias ou sacos coletores de urina, o enfermeiro evita paragens ou curvas bruscas para prevenir derrames e contaminação do ambiente hospitalar."
  },
  {
    "id": 1078,
    "topicId": 1,
    "question": "O conceito de 'equilíbrio estático' exige simultaneamente que:",
    "options": [
      "A força resultante seja nula (∑F = 0) e o corpo se encontre em repouso (velocidade vetorial nula v = 0).",
      "A aceleração seja igual a 9,8 m/s² e a velocidade cresça no tempo.",
      "O corpo gire a alta velocidade mantendo o peso constante.",
      "Exista apenas uma força a atuar sem oposição."
    ],
    "correctIndex": 0,
    "explanation": "Equilíbrio estático é a situação em que um corpo não translada nem roda, mantendo-se estático no referencial: a soma vetorial de todas as forças aplicadas é nula (∑F = 0) e a velocidade é zero (v = 0).",
    "distractorAnalysis": [
      "Opção B descreve uma queda livre acelerada sob a gravidade.",
      "Opção C descreve equilíbrio rotacional dinâmico ou rotação livre.",
      "Opção D descreve um corpo com aceleração não nula pela 2.ª Lei de Newton."
    ],
    "nursingApplication": "O doente acamado com fratura vertebral necessita de equilíbrio estático estrito no leito: qualquer força resultante não equilibrada provoca deslocamento dos fragmentos ósseos com risco de secção medular."
  },
  {
    "id": 1079,
    "topicId": 1,
    "question": "Um doente afirma: 'Doutor, quando a ambulância travou senti uma força enorme a empurrar-me para a frente'. Na física clássica, como se classifica essa sensação experimentada num referencial acelerado?",
    "options": [
      "Como uma força inercial (ou aparente), decorrente da tendência natural da massa do doente para manter o seu estado anterior de movimento enquanto o referencial (ambulância) sofre desaceleração.",
      "Como uma força eletromagnética gerada pelo alternador da ambulância.",
      "Como uma força biológica produzida pelo sistema nervoso autónomo.",
      "Como uma ilusão psicológica sem qualquer base na mecânica newtoniana."
    ],
    "correctIndex": 0,
    "explanation": "Em referenciais acelerados (não inerciais), a inércia dos corpos manifesta-se sob a forma de 'forças inerciais ou fictícias' (como a força de travagem ou a força centrífuga). No referencial inercial da estrada, nenhuma força empurrou o doente para a frente: foi a ambulância que foi travada para trás, enquanto o doente manteve a velocidade inicial.",
    "distractorAnalysis": [
      "Opção B confunde circuitos elétricos com mecânica translacional de massas.",
      "Opção C confunde a resposta de pânico autonómica com a cinemática física do corpo.",
      "Opção D é incorreta, pois a sensação tem base mecânica inercial perfeitamente mensurável por acelerómetros."
    ],
    "nursingApplication": "O enfermeiro valida a experiência do doente transportado explicando-lhe que essa sensação é puramente física e decorre da desaceleração da ambulância, tranquilizando-o e garantindo o ajuste correto dos cintos da maca."
  },
  {
    "id": 1080,
    "topicId": 1,
    "question": "Em condições de microgravidade (como na Estação Espacial Internacional), onde o peso aparente é nulo (P ≈ 0), o que acontece à inércia de um astronauta com massa de 70 kg?",
    "options": [
      "Permanece inalterada (a inércia é de 70 kg, exigindo a mesma força para ser acelerado a 1 m/s² que na Terra).",
      "Diminui para zero, permitindo acelerá-lo a 1000 m/s² com a força de um fio de cabelo.",
      "Aumenta para o dobro devido à ausência de oxigénio atmosférico.",
      "Transforma-se em energia luminosa pura."
    ],
    "correctIndex": 0,
    "explanation": "A inércia depende exclusivamente da massa inercial de um corpo, que é uma propriedade intrínseca e invariante da quantidade de matéria. A gravidade afeta apenas o peso (F = m · g), mas a relação inercial F = m · a permanece rigorosamente a mesma em qualquer ponto do universo.",
    "distractorAnalysis": [
      "Opção B confunde peso nulo (ausência de suporte da gravidade) com massa inercial nula.",
      "Opção C inventa um efeito inexistente entre gases respiráveis e a inércia de massas sólidas.",
      "Opção D confunde mecânica newtoniana com fissão/fusão nuclear quântica."
    ],
    "nursingApplication": "Este princípio da física aeroespacial demonstra ao enfermeiro que massa e peso são grandezas ontologicamente distintas: mesmo num ambiente sem peso, parar ou acelerar um doente pesado exigiria a aplicação da mesma força muscular newtoniana."
  },
  {
    "id": 1081,
    "topicId": 1,
    "question": "Um enfermeiro empurra uma maca com um doente politraumatizado, perfazendo uma massa total de 100 kg. Se for aplicada uma força resultante horizontal constante de 80 N, qual será a aceleração adquirida pela maca?",
    "options": [
      "0,8 m/s²",
      "1,25 m/s²",
      "8,0 m/s²",
      "8000 m/s²"
    ],
    "correctIndex": 0,
    "explanation": "Pela 2.ª Lei de Newton, F = m · a. Isolando a aceleração: a = F / m = 80 N / 100 kg = 0,8 m/s². A aceleração é diretamente proporcional à força resultante e inversamente proporcional à massa inercial do sistema.",
    "distractorAnalysis": [
      "Opção B (1,25 m/s²) inverte a fração, dividindo a massa pela força (100 / 80).",
      "Opção C (8,0 m/s²) comete um erro de cálculo decimal por fator de 10.",
      "Opção D (8000 m/s²) multiplica a massa pela força em vez de dividir."
    ],
    "nursingApplication": "Conhecer a relação entre massa e aceleração permite ao enfermeiro modular a força muscular nas arrancadas de macas: em doentes críticos com traumatismo craniano ou fraturas instáveis, acelerações bruscas geram deslocamentos inerciais perigosos dos órgãos internos."
  },
  {
    "id": 1082,
    "topicId": 1,
    "question": "Se a massa total de uma cadeira de rodas for duplicada com a entrada de um doente mais pesado, que alteração deve sofrer a força resultante para que a aceleração ao iniciar a marcha permaneça idêntica?",
    "options": [
      "A força resultante deve ser duplicada (aumentar 2 vezes).",
      "A força resultante deve ser reduzida para metade.",
      "A força resultante deve aumentar quatro vezes (ao quadrado).",
      "Nenhuma alteração, pois a aceleração independe da massa."
    ],
    "correctIndex": 0,
    "explanation": "Pela equação F = m · a, mantendo a aceleração 'a' constante, a força F é diretamente proporcional à massa m. Se a massa duplica (2m), a força resultante necessária para produzir a mesma aceleração tem de duplicar também: F' = (2m) · a = 2F.",
    "distractorAnalysis": [
      "Opção B diminuiria a aceleração para um quarto da inicial.",
      "Opção C confunde a proporcionalidade linear da 2.ª Lei com uma relação quadrática.",
      "Opção D nega a 2.ª Lei de Newton, segundo a qual a massa é a medida da inércia."
    ],
    "nursingApplication": "Na mobilização de doentes bariátricos, o enfermeiro sabe que duplicar a massa exige o dobro da força de impulsão; por isso, recorre a equipamentos mecânicos de transferência ou a equipas multidisciplinares para evitar sobrecarga musculoesquelética."
  },
  {
    "id": 1083,
    "topicId": 1,
    "question": "Uma cama hospitalar de 150 kg que se move a 2 m/s é travada uniformemente até à imobilização completa numa distância de 1 metro. Qual é o módulo da aceleração de travagem (desaceleração) sofrida?",
    "options": [
      "2 m/s²",
      "1 m/s²",
      "4 m/s²",
      "0,5 m/s²"
    ],
    "correctIndex": 0,
    "explanation": "Utilizando a equação de Torricelli para movimento uniformemente variado: v² = v₀² + 2·a·Δs. Como o corpo para, v = 0, v₀ = 2 m/s e Δs = 1 m. Logo: 0 = 2² + 2·a·1 ⇒ 0 = 4 + 2a ⇒ a = -2 m/s². O módulo da aceleração de travagem é 2 m/s².",
    "distractorAnalysis": [
      "Opção B (1 m/s²) calcula simplesmente v / Δs.",
      "Opção C (4 m/s²) esquece-se do fator 2 no denominador da equação de Torricelli.",
      "Opção D (0,5 m/s²) inverte o cálculo cinemático."
    ],
    "nursingApplication": "Travar uma cama em curta distância exige desacelerações elevadas que geram forças de impacto nos suportes de soro e bombas de infusão acopladas; o enfermeiro deve travar de forma gradual e antecipada nos corredores."
  },
  {
    "id": 1084,
    "topicId": 1,
    "question": "Qual é o módulo da força de travagem média necessária para imobilizar a cama da questão anterior (150 kg) com desaceleração de 2 m/s²?",
    "options": [
      "300 N",
      "75 N",
      "150 N",
      "600 N"
    ],
    "correctIndex": 0,
    "explanation": "Pela 2.ª Lei de Newton, F = m · a. Substituindo os valores conhecidos: F = 150 kg × 2 m/s² = 300 N. Esta força de travagem é exercida pelo atrito das sapatas dos travões e pelo esforço manual do enfermeiro.",
    "distractorAnalysis": [
      "Opção B (75 N) resulta de dividir a massa pela aceleração (150 / 2).",
      "Opção C (150 N) multiplicaria por 1 m/s² em vez de 2 m/s².",
      "Opção D (600 N) multiplicaria pelo quadrado da aceleração."
    ],
    "nursingApplication": "Acionar os travões de pedal de uma cama hospitalar pesada multiplica o atrito mecânico das rodas com o piso, fornecendo os 300 N necessários para a imobilização rápida sem que o enfermeiro tenha de suportar essa força com os próprios braços."
  },
  {
    "id": 1085,
    "topicId": 1,
    "question": "A unidade de Força 'Newton' pode ser expressa como a taxa de variação temporal de que grandeza física vetorial?",
    "options": [
      "Do Momento Linear (ou Quantidade de Movimento, p = m · v).",
      "Da Energia Cinética rotacional.",
      "Do Potencial Gravítico escalar.",
      "Do Volume Sistólico cardíaco."
    ],
    "correctIndex": 0,
    "explanation": "Na formulação original e mais abrangente de Isaac Newton nos 'Principia', a força resultante é igual à derivada temporal da quantidade de movimento: F = dp / dt = d(m·v) / dt. Se a massa for constante, recupera-se a forma F = m · (dv/dt) = m · a.",
    "distractorAnalysis": [
      "Opção B confunde força com potência mecânica (dW/dt).",
      "Opção C refere-se à taxa de variação de um campo potencial que define gradiente, não derivada temporal.",
      "Opção D confunde uma grandeza da mecânica geral com um parâmetro hemodinâmico ventricular."
    ],
    "nursingApplication": "O conceito de quantidade de movimento é vital no estudo dos acidentes de viação: o 'tempo de impacto' (dt) durante a colisão determina a força que atua no tórax do doente; os airbags prolongam o dt para reduzir drasticamente a força de impacto letal."
  },
  {
    "id": 1086,
    "topicId": 1,
    "question": "Uma força resultante não-nula constante aplicada sobre um carrinho de emergência que se encontrava em repouso produzirá:",
    "options": [
      "Um Movimento Retilíneo Uniformemente Variado (MRUV), com aceleração constante e velocidade a crescer linearmente com o tempo.",
      "Um Movimento Retilíneo e Uniforme com velocidade estritamente constante.",
      "A paragem imediata do carrinho devido à conservação da energia.",
      "Um movimento aleatório oscilatório perpétuo."
    ],
    "correctIndex": 0,
    "explanation": "Se a força resultante F é constante e não nula, a aceleração a = F / m é igualmente constante e diferente de zero. Uma aceleração constante faz variar a velocidade de forma linear no tempo (v = v₀ + a · t), definindo um MRUV.",
    "distractorAnalysis": [
      "Opção B só ocorre quando a força resultante é rigorosamente zero (∑F = 0).",
      "Opção C contraria a 2.ª Lei, pois forças resultantes aceleram corpos.",
      "Opção D exigiria forças periódicas variáveis proporcionais ao deslocamento (movimento harmónico simples)."
    ],
    "nursingApplication": "Ao empurrar o carro de paragem cardíaca numa corrida de emergência para a sala de reanimação, a aplicação contínua de força faz a velocidade aumentar a cada segundo até que o enfermeiro equilibre o esforço com o atrito."
  },
  {
    "id": 1087,
    "topicId": 1,
    "question": "Dois enfermeiros empurram juntos uma cama de cuidados intensivos pesada com massa de 200 kg. Um enfermeiro aplica 70 N e o outro aplica 50 N na mesma direção e sentido. Sabendo que o atrito total das rodas opõe uma força contrária de 20 N, qual é a aceleração resultante do conjunto?",
    "options": [
      "0,5 m/s²",
      "0,6 m/s²",
      "0,7 m/s²",
      "1,0 m/s²"
    ],
    "correctIndex": 0,
    "explanation": "A força resultante é a soma das forças propulsoras subtraída da força de atrito oposta: F_res = (70 N + 50 N) - 20 N = 120 N - 20 N = 100 N. Aplicando a 2.ª Lei de Newton: a = F_res / m = 100 N / 200 kg = 0,5 m/s².",
    "distractorAnalysis": [
      "Opção B (0,6 m/s²) esquece de subtrair o atrito (120 / 200 = 0,6).",
      "Opção C (0,7 m/s²) considera apenas a força do primeiro enfermeiro sem atrito.",
      "Opção D (1,0 m/s²) divide a força de atrito pela massa de forma incoerente."
    ],
    "nursingApplication": "O trabalho em equipa em enfermagem combina forças vetoriais em paralelo: a sincronização do empurrão entre dois profissionais maximiza a aceleração de camas pesadas com menor fadiga para cada profissional."
  },
  {
    "id": 1088,
    "topicId": 1,
    "question": "Um suporte de bomba infusora de 10 kg sofre uma desaceleração de 3 m/s² ao ser agarrado pelo enfermeiro antes de tombar. Qual foi a força resultante aplicada pelo profissional?",
    "options": [
      "30 N em sentido contrário ao movimento.",
      "3,33 N no sentido do movimento.",
      "0,3 N perpendicular ao chão.",
      "90 N na vertical para cima."
    ],
    "correctIndex": 0,
    "explanation": "Pela 2.ª Lei de Newton: F = m · a = 10 kg × 3 m/s² = 30 N. Para desacelerar um corpo que se move para a frente, o vetor força resultante tem obrigatoriamente sentido oposto ao vetor velocidade.",
    "distractorAnalysis": [
      "Opção B divide a massa pela aceleração (10 / 3) e erra o sentido.",
      "Opção C inverte a divisão (3 / 10).",
      "Opção D multiplica pelo quadrado da aceleração."
    ],
    "nursingApplication": "Suportes verticais de bombas infusoras têm momento de inércia alto devido ao peso das bombas no topo; segurar firmemente a haste com 30 N impede que o suporte acelere angularmente em rotação e colida com o doente."
  },
  {
    "id": 1089,
    "topicId": 1,
    "question": "Se um corpo com massa de 5 kg parte do repouso e atinge a velocidade de 10 m/s após 2 segundos sob a ação de uma força constante, qual é o módulo dessa força?",
    "options": [
      "25 N",
      "50 N",
      "10 N",
      "100 N"
    ],
    "correctIndex": 0,
    "explanation": "Primeiro calcula-se a aceleração: a = Δv / Δt = (10 m/s - 0) / 2 s = 5 m/s². De seguida aplica-se a 2.ª Lei de Newton: F = m · a = 5 kg × 5 m/s² = 25 N.",
    "distractorAnalysis": [
      "Opção B (50 N) multiplica a massa pela velocidade final (5 × 10), que é o momento linear, não a força.",
      "Opção C (10 N) confunde a força com o valor numérico da velocidade.",
      "Opção D (100 N) duplica erradamente os fatores."
    ],
    "nursingApplication": "Este cálculo cinemático-dinâmico ilustra como forças moderadas de 25 N produzem ganhos substanciais de velocidade se forem aplicadas continuamente durante alguns segundos na condução de carrinhos hospitalares."
  },
  {
    "id": 1090,
    "topicId": 1,
    "question": "Na 2.ª Lei de Newton expressa como F = m · a, se a força resultante F tender para zero num determinado intervalo de tempo, o que acontece à aceleração a?",
    "options": [
      "Tende igualmente para zero, recuperando-se a 1.ª Lei de Newton como caso particular da 2.ª Lei.",
      "Tende para o infinito, fazendo o corpo acelerar sem limites.",
      "Assume o valor fixo de 9,8 m/s².",
      "Torna-se imaginária e negativa."
    ],
    "correctIndex": 0,
    "explanation": "Como a = F / m, mantendo a massa finita e não-nula, quando F se anula (F → 0), a aceleração também se anula rigorosamente (a → 0). Isto demonstra que a 1.ª Lei de Newton (equilíbrio translacional com a = 0) é um caso particular da 2.ª Lei quando ∑F = 0.",
    "distractorAnalysis": [
      "Opção B violaria as leis fundamentais do cálculo e da dinâmica clássica.",
      "Opção C confunde ausência de força resultante com presença da aceleração gravítica g.",
      "Opção D não possui fundamentação matemática na física real."
    ],
    "nursingApplication": "Compreender que as leis de Newton formam um corpo conceptual coerente e unificado capacita o enfermeiro a analisar qualquer situação de repouso ou aceleração na enfermaria com os mesmos princípios matemáticos."
  },
  {
    "id": 1091,
    "topicId": 1,
    "question": "Um doente de 80 kg é elevado por um guindaste de transferência hospitalar. Se o guindaste acelera verticalmente para cima com a = 1 m/s² (adotando g = 9,8 m/s²), qual é a tensão suportada pela fita do guindaste?",
    "options": [
      "864 N",
      "784 N",
      "704 N",
      "80 N"
    ],
    "correctIndex": 0,
    "explanation": "Na direção vertical, atuam a tensão T da fita para cima e o peso P para baixo: T - P = m · a ⇒ T = m · g + m · a = m · (g + a). Substituindo: T = 80 kg × (9,8 + 1,0) m/s² = 80 × 10,8 = 864 N. A fita suporta mais do que o peso em repouso durante a subida acelerada.",
    "distractorAnalysis": [
      "Opção B (784 N) é apenas o peso estático do doente em repouso (80 × 9,8).",
      "Opção C (704 N) seria o valor se o guindaste estivesse a desacelerar ou a descer de forma acelerada.",
      "Opção D (80 N) é apenas a força inercial m·a isolada."
    ],
    "nursingApplication": "Ao operar guinchos e elevadores de doentes (elevadores de transferência), o enfermeiro sabe que as maiores sobrecargas mecânicas ocorrem no arranque da elevação; acionar os comandos com velocidade suave e progressiva protege as costuras da cinta e o conforto do doente."
  },
  {
    "id": 1092,
    "topicId": 1,
    "question": "Se o mesmo doente de 80 kg descer no guindaste acelerando para baixo a 1 m/s², qual será a tensão na fita durante essa descida acelerada?",
    "options": [
      "704 N",
      "864 N",
      "784 N",
      "0 N"
    ],
    "correctIndex": 0,
    "explanation": "Quando o movimento acelera para baixo: P - T = m · a ⇒ T = m · (g - a) = 80 kg × (9,8 - 1,0) m/s² = 80 × 8,8 = 704 N. A tensão é inferior ao peso de repouso porque o corpo está a 'cair' com aceleração controlada.",
    "distractorAnalysis": [
      "Opção B (864 N) ocorre na subida acelerada.",
      "Opção C (784 N) ocorre em repouso ou velocidade constante de descida.",
      "Opção D (0 N) só ocorreria se o cabo partisse e o doente estivesse em queda livre (a = g)."
    ],
    "nursingApplication": "O alívio aparente de carga na descida e a sobrecarga na subida são sensações dinâmicas que podem causar vertigem ou medo ao doente acamado; o enfermeiro avisa antecipadamente o doente sobre o início do movimento do guindaste."
  },
  {
    "id": 1093,
    "topicId": 1,
    "question": "O Teorema do Impulso estabelece que o impulso de uma força resultante I = F · Δt é numericamente igual a:",
    "options": [
      "À variação da Quantidade de Movimento (Δp = m · v_final - m · v_inicial).",
      "À variação da temperatura dos tecidos humanos.",
      "Ao trabalho da força gravitacional sobre o osso.",
      "À taxa metabólica basal do doente."
    ],
    "correctIndex": 0,
    "explanation": "Integrando a 2.ª Lei de Newton no tempo: I = ∫ F dt = Δp. Para uma força média constante, I = F_média · Δt = m · Δv. O teorema demonstra que a mesma variação de velocidade pode ser alcançada com uma força enorme em pouco tempo ou com uma força suave durante um intervalo de tempo longo.",
    "distractorAnalysis": [
      "Opções B e D relacionam variáveis metabólicas termodinâmicas sem ligação ao produto força-tempo.",
      "Opção C confunde impulso (vetor em N·s) com trabalho mecânico (escalar em Joules)."
    ],
    "nursingApplication": "Ao imobilizar a cabeça de um doente ou ao amortecer o impacto de uma transferência de peso, o enfermeiro aumenta o tempo de contacto (Δt) para diminuir a força de impacto máxima (F_média), prevenindo contusões e fraturas osteoporóticas."
  },
  {
    "id": 1094,
    "topicId": 1,
    "question": "Uma força constante de 20 N é aplicada perpendicularmente ao êmbolo de uma seringa com área de 2 cm² durante 3 segundos. Qual é o impulso mecânico fornecido?",
    "options": [
      "60 N·s",
      "6,67 N·s",
      "40 N·s",
      "120 N·s"
    ],
    "correctIndex": 0,
    "explanation": "O impulso mecânico de uma força constante depende exclusivamente do módulo da força e do intervalo de tempo da sua aplicação: I = F · Δt = 20 N × 3 s = 60 N·s (ou kg·m/s). A área do êmbolo afetaria a pressão interna, mas não o impulso da força motora externa.",
    "distractorAnalysis": [
      "Opção B divide a força pelo tempo (20 / 3).",
      "Opção C e D combinam incorretamente a área em cm² com o cálculo temporal."
    ],
    "nursingApplication": "Na administração de bolus intravenoso viscoso através de cateter estreito, manter uma força moderada e sustentada (maior Δt e impulso controlado) evita picos pressóricos hidráulicos que poderiam romper a veia periférica (extravasamento)."
  },
  {
    "id": 1095,
    "topicId": 1,
    "question": "Um carrinho de medicação de 40 kg move-se a 3 m/s e colide com uma parede acolchoada, parando em 0,1 segundos. Qual foi a intensidade da força de impacto média sofrida pelo carrinho?",
    "options": [
      "1200 N",
      "120 N",
      "400 N",
      "12 N"
    ],
    "correctIndex": 0,
    "explanation": "A aceleração de paragem é a = Δv / Δt = (0 - 3) / 0,1 = -30 m/s². Pela 2.ª Lei de Newton, F = m · |a| = 40 kg × 30 m/s² = 1200 N. O curto tempo de desaceleração (0,1 s) faz a força de impacto disparar para valores muito elevados.",
    "distractorAnalysis": [
      "Opção B (120 N) divide por 1 segundo em vez de 0,1 s.",
      "Opção C (400 N) multiplicaria a massa por 10.",
      "Opção D (12 N) erra a ordem de grandeza por divisão indevida."
    ],
    "nursingApplication": "Demonstração biofísica da importância das faixas de proteção em borracha macia nas paredes e esquinas hospitalares: os materiais deformáveis aumentam o tempo de impacto de 0,01 s para 0,1 s ou mais, reduzindo a força de destruição do equipamento em mais de 10 vezes."
  },
  {
    "id": 1096,
    "topicId": 1,
    "question": "De acordo com a 3.ª Lei de Newton (Ação e Reação), quando o pé de um doente em marcha de reabilitação pressiona o solo para baixo e para trás com uma força F, qual é a força que o solo exerce sobre o pé do doente?",
    "options": [
      "Uma força de reação de intensidade rigorosamente igual, mesma linha de ação e orientada para cima e para a frente, que impulsiona o corpo a caminhar.",
      "Uma força de menor intensidade porque o piso não tem músculos nem energia biológica.",
      "Uma força perpendicular exclusivamente para baixo que afunda o pé.",
      "Nenhuma força, uma vez que corpos inanimados não reagem."
    ],
    "correctIndex": 0,
    "explanation": "A 3.ª Lei de Newton estabelece que todas as forças surgem em pares simétricos de interação mútua: se o corpo A empurra o corpo B, o corpo B empurra o corpo A com força igual e oposta. O solo empurra o pé com a mesma intensidade para cima e para a frente (força de reação do solo), permitindo a locomoção humana.",
    "distractorAnalysis": [
      "Opção B confunde a biologia muscular ativa com as leis universais da física newtoniana que regem toda a matéria.",
      "Opção C inverte o sentido da força de reação normal e de atrito.",
      "Opção D nega a 3.ª Lei de Newton e tornaria a marcha humana impossível."
    ],
    "nursingApplication": "Na reabilitação motora e treino de marcha pós-AVC ou cirurgia protésica da anca, o enfermeiro compreende que o calçado com sola de borracha antiderrapante é essencial para fornecer a força de reação de atrito necessária para o doente avançar com segurança."
  },
  {
    "id": 1097,
    "topicId": 1,
    "question": "Por que razão as forças de Ação e Reação descritas pela 3.ª Lei de Newton NUNCA se anulam mutuamente?",
    "options": [
      "Porque são aplicadas simultaneamente em CORPOS DIFERENTES, pelo que cada força produz aceleração no respetivo corpo sobre o qual atua.",
      "Porque uma força é sempre ligeiramente maior que a outra no vácuo.",
      "Porque atuam em momentos temporais diferentes, com um atraso de milissegundos.",
      "Porque têm a mesma direção e o mesmo sentido espacial."
    ],
    "correctIndex": 0,
    "explanation": "Para que duas forças de sentidos opostos se anulem produzindo equilíbrio, têm obrigatoriamente de atuar sobre o MESMO corpo. As forças de ação e reação atuam sempre em corpos distintos: se a mão empurra a marquesa, a reação atua na mão e não na marquesa.",
    "distractorAnalysis": [
      "Opção B viola a igualdade estrita dos módulos das forças do par (F_AB = -F_BA).",
      "Opção C é falsa, pois a interação de contacto na mecânica clássica é rigorosamente simultânea.",
      "Opção D contraria a definição básica de sentidos opostos."
    ],
    "nursingApplication": "Este princípio elucida o enfermeiro sobre por que motivo empurrar uma cama resulta em movimento da cama (força na cama) e sensação de resistência nas mãos do profissional (força no corpo do profissional)."
  },
  {
    "id": 1098,
    "topicId": 1,
    "question": "Um doente de muletas descarrega 200 N de força através da ponta de borracha da muleta contra o pavimento hospitalar. Qual é a intensidade da força que a muleta recebe do pavimento?",
    "options": [
      "Exatamente 200 N.",
      "100 N.",
      "0 N.",
      "400 N."
    ],
    "correctIndex": 0,
    "explanation": "Pelo princípio da ação e reação, a força exercida pelo solo sobre a muleta tem exatamente o mesmo módulo da força exercida pela muleta sobre o solo: 200 N. Apenas o sentido é oposto (para cima).",
    "distractorAnalysis": [
      "Opções B, C e D violam a 3.ª Lei de Newton, que exige igualdade estrita e absoluta de intensidades."
    ],
    "nursingApplication": "O enfermeiro ensina o doente a apoiar a muleta perpendicularmente ao solo: os 200 N de reação suportam o peso corporal e protegem o membro fraturado de cargas excessivas."
  },
  {
    "id": 1099,
    "topicId": 1,
    "question": "Quando um enfermeiro pressiona o êmbolo de uma seringa hipodérmica para injetar um medicamento com uma força de 15 N, qual é a força que o fluido e o êmbolo exercem sobre o polegar do profissional?",
    "options": [
      "Exatamente 15 N de resistência orientada para fora da seringa.",
      "0 N porque os líquidos não têm rigidez mecânica.",
      "30 N devido à pressão hidrostática.",
      "1,5 N por amortecimento viscoso."
    ],
    "correctIndex": 0,
    "explanation": "A interação mecânica entre o polegar e o êmbolo é um par de ação e reação: a força que o polegar aplica no êmbolo (15 N para dentro) é correspondida por uma força exatamente igual de 15 N que o êmbolo exerce no polegar em sentido contrário.",
    "distractorAnalysis": [
      "Opção B ignora a incompressibilidade dos líquidos que transmitem a resistência por pressão.",
      "Opções C e D violam a 3.ª Lei de Newton."
    ],
    "nursingApplication": "Ao administrar medicamentos muito viscosos (como soluções oleosas de penicilina benzatínica ou contrastes iodados), a alta resistência ao escoamento exige que o enfermeiro aplique maior força no êmbolo, sentindo uma reação proporcional no polegar."
  },
  {
    "id": 1100,
    "topicId": 1,
    "question": "Considere um livro de farmacologia em repouso sobre uma mesa de enfermagem. A força peso P (atração gravítica da Terra sobre o livro) e a força normal N (sustentação da mesa sobre o livro) anulam-se. Este par P e N constitui um par de Ação-Reação da 3.ª Lei de Newton?",
    "options": [
      "NÃO, porque ambas as forças atuam sobre o MESMO corpo (o livro) e têm origens físicas diferentes (uma é gravítica e a outra é eletrostática de contacto).",
      "SIM, porque têm a mesma intensidade e sentidos contrários.",
      "SIM, porque qualquer par de forças opostas no universo é ação e reação.",
      "NÃO, porque a mesa não exerce força sobre nenhum objeto."
    ],
    "correctIndex": 0,
    "explanation": "Esta é a clássica armadilha da física mecânica: Peso e Normal equilibram o livro (∑F = 0, 1.ª Lei), mas NÃO são par de ação-reação! A reação ao peso do livro é uma força atrativa que o livro exerce no centro da Terra; a reação à força normal da mesa é a força compressiva que o livro exerce sobre o tampo da mesa.",
    "distractorAnalysis": [
      "Opção B confunde equilíbrio estático de duas forças no mesmo corpo com a 3.ª Lei de Newton.",
      "Opção C é errónea, pois o par de ação e reação requer corpos diferentes e a mesma natureza de interação.",
      "Opção D nega a existência da força normal de sustentação da mesa."
    ],
    "nursingApplication": "O discernimento conceptual entre forças que se equilibram no mesmo corpo e pares de ação-reação previne confusões teóricas na análise biomecânica do apoio de doentes acamados sobre superfícies hospitalares."
  },
  {
    "id": 1101,
    "topicId": 1,
    "question": "Durante a massagem cardíaca externa (reanimação cardiopulmonar - SBV/SAV), o socorrista aplica uma força vertical para baixo de 400 N no esterno do doente. Pela 3.ª Lei de Newton, qual é a força que o esterno do doente exerce sobre as mãos do socorrista?",
    "options": [
      "Exatamente 400 N verticalmente para cima.",
      "0 N, pois o tórax deprime-se elasticamente 5 a 6 cm.",
      "200 N, devido à absorção de energia pelas costelas.",
      "800 N, multiplicada pela resistência elástica torácica."
    ],
    "correctIndex": 0,
    "explanation": "A 3.ª Lei de Newton é universal e simultânea: a força de compressão exercida pelas mãos do profissional sobre o esterno (400 N para baixo) é rigorosamente acompanhada por uma força de reação de 400 N exercida pelo esterno sobre as mãos do profissional para cima.",
    "distractorAnalysis": [
      "Opção B confunde deformação mecânica tecidual com ausência de força de reação física.",
      "Opção C viola a igualdade matemática estrita dos módulos do par de ação-reação.",
      "Opção D inventa uma amplificação de força que violaria as leis de conservação da mecânica."
    ],
    "nursingApplication": "Compreender que o tórax devolve 400 N nas mãos a cada compressão explica o cansaço muscular do enfermeiro durante a RCP; por isso, as diretrizes internacionais recomendam a rotação do compressor a cada 2 minutos para manter a qualidade das compressões."
  },
  {
    "id": 1102,
    "topicId": 1,
    "question": "Um doente em cadeira de rodas tenta deslocar-se sem travar as rodas e empurra para a frente uma mesa de cabeceira pesada. O que acontece à cadeira de rodas do doente?",
    "options": [
      "A cadeira de rodas recua para trás, porque a mesa exerce uma força de reação para trás de igual intensidade sobre as mãos do doente.",
      "A cadeira permanece absolutamente imóvel, independentemente da força aplicada.",
      "A cadeira move-se para a frente juntamente com a mesa.",
      "A cadeira sobe verticalmente em direção ao teto."
    ],
    "correctIndex": 0,
    "explanation": "Ao empurrar a mesa para a frente (ação), a mesa empurra as mãos do doente para trás com força idêntica (reação). Se as rodas da cadeira não estiverem travadas, essa força horizontal desequilibrada acelera a cadeira no sentido oposto (para trás), conforme a 3.ª e a 2.ª Leis de Newton.",
    "distractorAnalysis": [
      "Opção B ignora a ausência de atrito suficiente no piso para impedir o recuo se os travões estiverem soltos.",
      "Opção C violaria o sentido oposto estrito da força de reação.",
      "Opção D inventa uma componente vertical impossível no plano horizontal."
    ],
    "nursingApplication": "O enfermeiro ensina o doente paraplégico ou idoso a travar sempre as rodas da cadeira antes de manipular mesas, bandejas ou apoios, prevenindo recuos indesejados e quedas traumáticas no quarto hospitalar."
  },
  {
    "id": 1103,
    "topicId": 1,
    "question": "No disparo de uma agulha através de uma caneta injetora automática pressurizada com mola (ex: auto-injetor de adrenalina no choque anafilático), qual é a interação física entre a mola, a agulha e a carcaça?",
    "options": [
      "A mola empurra a agulha para a frente e simultaneamente empurra a carcaça do injetor contra a mão do enfermeiro com força de reação igual e oposta.",
      "A mola puxa a pele do doente antes de disparar a agulha.",
      "A força da mola desaparece assim que atinge a derme.",
      "Não existe reação mecânica porque a caneta é feita de plástico."
    ],
    "correctIndex": 0,
    "explanation": "Uma mola comprimida expande-se exercendo forças iguais e contrárias nas suas duas extremidades (ação e reação): empurra a agulha e o êmbolo para o músculo vasto lateral da coxa do doente e empurra o corpo da caneta contra a mão do enfermeiro (efeito de recuo).",
    "distractorAnalysis": [
      "Opção B sugere uma atração prévia inexistente.",
      "Opção C viola o princípio da conservação da quantidade de movimento e da energia.",
      "Opção D ignora que qualquer material sólido transmite forças newtonianas de contacto."
    ],
    "nursingApplication": "Ao administrar adrenalina em emergência de anafilaxia, o enfermeiro segura o auto-injetor com firmeza total contra a face anterolateral da coxa durante 10 segundos para absorver a força de recuo e garantir que a agulha não se desloca antes da infusão completa."
  },
  {
    "id": 1104,
    "topicId": 1,
    "question": "Um doente que sofreu um AVC tem parésia do membro superior direito. Ao tentar abrir uma porta pesada da enfermaria com a mão esquerda, apoia o ombro direito na ombreira da porta. A força que a ombreira exerce no ombro é:",
    "options": [
      "A reação normal de suporte, igual em módulo à força de compressão que o doente descarrega contra ela.",
      "Nula porque a ombreira é uma parede inerte.",
      "Maior do que o peso total do doente.",
      "Metade da força da gravidade."
    ],
    "correctIndex": 0,
    "explanation": "Sempre que um corpo vivo se encosta a uma estrutura rígida, deforma impercetivelmente as ligações atómicas superficiais do material da parede; essa deformação elástica microscópica gera a força normal de reação, rigorosamente igual à força de encosto (3.ª Lei).",
    "distractorAnalysis": [
      "Opções B, C e D desconsideram a natureza eletrostática de contacto da força normal e a igualdade dos pares newtonianos."
    ],
    "nursingApplication": "Em doentes neurológicos com hemiparesia, o enfermeiro avalia pontos de apoio em paredes e corrimãos: superfícies almofadadas ou corrimãos tubulares evitam hematomas decorrentes de reações de contacto concentradas."
  },
  {
    "id": 1105,
    "topicId": 1,
    "question": "Qual dos seguintes pares de forças representa um par genuíno de Ação-Reação segundo a 3.ª Lei de Newton?",
    "options": [
      "A força gravítica que a Terra exerce sobre o doente e a força gravítica que o doente exerce sobre a Terra.",
      "O peso do doente e a força normal da cama sobre o doente.",
      "A força motora do enfermeiro e a força de atrito no piso da enfermaria.",
      "A pressão arterial sistólica e a pressão arterial diastólica."
    ],
    "correctIndex": 0,
    "explanation": "O peso do doente é a atração gravítica exercida pela Terra sobre o doente. Pela 3.ª Lei de Newton, a reação correspondente é a força atrativa de igual intensidade que a massa do doente exerce sobre a Terra, atuando em corpos diferentes e partilhando a mesma natureza física (gravítica).",
    "distractorAnalysis": [
      "Opção B é o erro clássico: Peso e Normal atuam ambos sobre o mesmo corpo (o doente).",
      "Opção C relaciona duas forças aplicadas em pontos distintos com causas físicas diferentes.",
      "Opção D relaciona dois valores temporais extremos de pressão num ciclo pulsátil cardíaco."
    ],
    "nursingApplication": "O rigor conceptual na diferenciação das forças evita raciocínios erróneos na prescrição de exercícios em ortopedia e biomecânica do apoio articular."
  },
  {
    "id": 1106,
    "topicId": 1,
    "question": "Quando um enfermeiro calça luvas de látex ou nitrilo justas, puxando o punho da luva para cima com 10 N de tração, qual é a força que o material elástico da luva exerce nos dedos do profissional?",
    "options": [
      "Uma força elástica de reação de 10 N em sentido contrário (para baixo).",
      "Uma força de 0 N porque o látex é permeável.",
      "Uma força de 100 N decorrente da pressão atmosférica.",
      "Uma força centrípeta rotacional."
    ],
    "correctIndex": 0,
    "explanation": "A tensão elástica no material durante o estiramento atua em ambas as extremidades: a força aplicada pelos dedos para esticar a luva encontra uma resistência de tração rigorosamente idêntica de 10 N em sentido oposto (ação e reação).",
    "distractorAnalysis": [
      "Opções B, C e D ignoram o comportamento elástico da borracha e a 3.ª Lei de Newton."
    ],
    "nursingApplication": "O tamanho incorreto de luvas (muito pequenas) submete a mão do enfermeiro a compressão elástica sustentada contínua, reduzindo a microcirculação digital e causando fadiga muscular e síndrome do túnel cárpico em turnos prolongados."
  },
  {
    "id": 1107,
    "topicId": 1,
    "question": "Em termos newtonianos, por que razão é impossível uma pessoa erguer-se no ar puxando os seus próprios atacadores ou puxando os próprios cabelos para cima?",
    "options": [
      "Porque as forças musculares exercidas pelas mãos sobre os sapatos são forças estritamente INTERNAS ao sistema do corpo humano: para cada força para cima nas mãos existe uma reação igual para baixo nos pés, sendo a soma das forças internas rigorosamente nula (∑F_internas = 0).",
      "Porque a gravidade aumenta para o triplo quando os atacadores são atados.",
      "Porque as leis da física se suspendem quando tocamos no próprio corpo.",
      "Porque a pressão arterial cai para zero na posição ereta."
    ],
    "correctIndex": 0,
    "explanation": "Para alterar o estado de movimento do centro de massa de um sistema é indispensável a ação de uma força EXTERNA resultante não-nula. Forças internas formam pares de ação-reação cujas resultantes no próprio sistema se anulam mutuamente, tornando impossível a auto-propulsão no vácuo.",
    "distractorAnalysis": [
      "Opções B, C e D são afirmações absurdas sem nexo biológico ou mecânico."
    ],
    "nursingApplication": "Compreender que forças internas não movem o sistema global fundamenta por que motivo o doente acamado debilitado necessita de um ponto de apoio externo (como o trapézio de cama ou o braço do enfermeiro) para conseguir elevar o tronco."
  },
  {
    "id": 1108,
    "topicId": 1,
    "question": "Ao utilizar uma seringa de aspiração de secreções respiratórias com vácuo mecânico, a força de sucção puxa as secreções para dentro do reservatório. Qual é a reação mecânica a essa força de arrastamento?",
    "options": [
      "Uma força de igual módulo exercida pelo líquido mucoso sobre a sonda de aspiração no sentido do doente.",
      "O congelamento instantâneo do muco pulmonar.",
      "A multiplicação infinita do vácuo no circuito de aspiração.",
      "Uma força de atrito elétrico estático no tubo endotraqueal."
    ],
    "correctIndex": 0,
    "explanation": "Na aspiração, o gradiente de pressão acelera o fluido para o interior do cateter; o fluido, ao ser acelerado, exerce por atrito viscoso e inércia uma força igual e contrária sobre as paredes internas da sonda de aspiração (ação e reação).",
    "distractorAnalysis": [
      "Opções B, C e D introduzem fenómenos imaginários sem fundamento na mecânica dos fluidos e de contacto."
    ],
    "nursingApplication": "O enfermeiro controla a pressão negativa no vacuómetro de parede (máximo 80 a 120 mmHg em adultos) para evitar que a força de sucção seja tão intensa que colabe e lesione a mucosa traqueobrônquica vulnerável."
  },
  {
    "id": 1109,
    "topicId": 1,
    "question": "Se um enfermeiro bater com a palma da mão numa mesa com 50 N de força de impacto, a mesa não quebra e a mão do enfermeiro sofre vermelhidão e dor momentânea. A dor na mão é causada por:",
    "options": [
      "Pela força de reação de 50 N que a madeira rígida da mesa exerceu contra os tecidos biológicos e terminações nervosas da mão no instante da colisão.",
      "Pela transferência de eletricidade estática da mesa para os neurónios.",
      "Pelo calor de combustão gerado no impacto.",
      "Por uma redução brusca do número de plaquetas sanguíneas."
    ],
    "correctIndex": 0,
    "explanation": "A mão aplica 50 N na mesa (ação) e a mesa aplica instantaneamente 50 N na mão (reação). Como a mesa tem massa enorme e estrutura rígida, deforma pouco; já os tecidos moles da mão comprimem-se intensamente, ativando nociceptores e estimulando fibras nervosas sensoriais de dor mecânica.",
    "distractorAnalysis": [
      "Opções B, C e D atribuem a dor a causas térmicas, elétricas ou hematológicas fictícias no impacto mecânico elástico."
    ],
    "nursingApplication": "Este facto ilustra ao enfermeiro como as forças de reação em superfícies rígidas hospitalares lesam tecidos vivos vulneráveis, reforçando a importância do acolchoamento de grades de cama em doentes com agitação psicomotora ou crises convulsivas."
  },
  {
    "id": 1110,
    "topicId": 1,
    "question": "Num sistema de roldana simples fixa preso ao teto da enfermaria, puxa-se uma corda para baixo com 100 N para elevar um peso de tração de 100 N para cima. Qual é a força total que o eixo da roldana fixa transmite ao ponto de fixação no teto?",
    "options": [
      "Aproximadamente 200 N para baixo (a soma da força de puxão com o peso sustentado).",
      "0 N, porque as forças têm sentidos opostos na corda.",
      "100 N para baixo.",
      "50 N para cima."
    ],
    "correctIndex": 0,
    "explanation": "Numa roldana fixa em equilíbrio, ambos os ramos da corda puxam a roldana para baixo com 100 N cada (o ramo do peso e o ramo da mão). Portanto, a força total exercida pela corda sobre a polia é 100 N + 100 N = 200 N para baixo. O teto reage com 200 N para cima para manter a roldana estática (∑F = 0).",
    "distractorAnalysis": [
      "Opção B confunde os lados da corda com forças que se anulam no eixo da polia.",
      "Opção C esquece uma das tensões da corda.",
      "Opção D é um cálculo incoerente."
    ],
    "nursingApplication": "Em trações ortopédicas de membros com balcões de madeira ou metal, o suporte da polia suporta o DOBRO da carga pendurada; o enfermeiro verifica se o aperto dos parafusos de fixação resiste a essa carga dobrada."
  },
  {
    "id": 1111,
    "topicId": 1,
    "question": "A primeira condição de equilíbrio para que um corpo rígido ou membro anatómico permaneça em repouso translacional estático é que:",
    "options": [
      "A soma vetorial de todas as forças externas aplicadas sobre ele seja rigorosamente nula (∑F = 0).",
      "O corpo possua obrigatoriamente velocidade terminal máxima.",
      "O peso seja o dobro da força normal de suporte.",
      "A pressão atmosférica seja superior a 760 mmHg."
    ],
    "correctIndex": 0,
    "explanation": "Para haver equilíbrio translacional, a aceleração linear tem de ser zero (a = 0). Pela 2.ª Lei de Newton (F_res = m · a), isso exige que a resultante vetorial de todas as forças aplicadas seja rigorosamente nula: ∑F_x = 0, ∑F_y = 0 e ∑F_z = 0.",
    "distractorAnalysis": [
      "Opção B confunde equilíbrio estático em repouso com escoamento em queda livre com resistência do ar.",
      "Opção C geraria aceleração vertical para baixo, violando a condição de repouso.",
      "Opção D introduz uma variável barométrica irrelevante para a mecânica estática."
    ],
    "nursingApplication": "Em enfermagem ortopédica, garantir o repouso absoluto de um membro fraturado com fixador externo assenta no princípio de que todas as forças aplicadas pelos pinos e barras se anulam mutuamente, mantendo o foco de fratura imóvel."
  },
  {
    "id": 1112,
    "topicId": 1,
    "question": "Numa tração cutânea de Buck utilizada provisoriamente numa fratura do colo do fémur, suspende-se um peso de 3 kg através de uma polia alinhada com o eixo longitudinal da perna. Adotando g = 9,8 m/s², qual é a força de tração axial contínua transmitida ao membro?",
    "options": [
      "29,4 N",
      "3,0 N",
      "300 N",
      "0,3 N"
    ],
    "correctIndex": 0,
    "explanation": "A tensão no cabo ideal que passa por uma roldana sem atrito é igual ao peso suspenso: T = P = m · g = 3 kg × 9,8 m/s² = 29,4 N. Esta força de 29,4 N é transmitida pela fita adesiva de tração cutânea ao membro inferior.",
    "distractorAnalysis": [
      "Opção B confunde a massa em kg com a força em Newtons.",
      "Opção C multiplica erroneamente por 100.",
      "Opção D divide por 10 em vez de multiplicar pela gravidade."
    ],
    "nursingApplication": "O enfermeiro verifica se o peso de 3 kg está livremente suspenso no ar, sem tocar no chão nem apoiar-se na estrutura da cama: se o peso assentar no solo, a tensão cai para zero (T = 0), perdendo-se a tração terapêutica e provocando espasmo muscular doloroso no doente."
  },
  {
    "id": 1113,
    "topicId": 1,
    "question": "Para que uma tração ortopédica em repouso no leito não arraste gradualmente o corpo do doente em direção aos pés da cama, é indispensável estabelecer uma 'contra-tração'. Como se estabelece clinicamente essa contra-força equilibradora?",
    "options": [
      "Inclinando a cama na posição de Trendelenburg invertida (elevação dos pés da cama), utilizando a componente do próprio peso corporal do doente que atua no sentido da cabeceira combinada com o atrito do leito.",
      "Amarrando o pescoço do doente à cabeceira da cama com uma ligadura elástica.",
      "Aplicando um íman gigante na parede atrás do leito.",
      "Colocando sacos de gelo na cabeça do doente para aumentar a densidade."
    ],
    "correctIndex": 0,
    "explanation": "Na física das trações esqueléticas e cutâneas, a cada força de tração para os pés da cama tem de corresponder uma força de sentido oposto no tronco do doente para manter o sistema em equilíbrio estático (∑F = 0). Elevar os pés da cama faz com que uma fração do peso do doente (P · sen θ) atue como contra-tração fisiológica segura para a cabeceira.",
    "distractorAnalysis": [
      "Opção B seria uma prática perigosa e asfixiante que viola as boas práticas clínicas.",
      "Opções C e D são ideias absurdas sem fundamentação científica."
    ],
    "nursingApplication": "O enfermeiro monitoriza o posicionamento do doente no leito em tração contínua: se o doente escorregar e encostar os pés na peseira da cama, a contra-tração é anulada e a força de tração óssea deixa de ter efeito biomecânico."
  },
  {
    "id": 1114,
    "topicId": 1,
    "question": "Numa tração esquelética de Russell para fratura da diáfise femoral, um cabo passa por um sistema de polias que aplica simultaneamente uma força vertical para cima de 40 N (para suspender o joelho) e uma força horizontal de 30 N (para alinhar o fémur). Qual é a força resultante exercida sobre a perna do doente?",
    "options": [
      "50 N numa direção oblíqua a cerca de 53° em relação à horizontal.",
      "70 N na direção horizontal.",
      "10 N na vertical para baixo.",
      "1200 N na direção perpendicular ao solo."
    ],
    "correctIndex": 0,
    "explanation": "As duas forças são perpendiculares entre si (ângulo de 90°). O módulo da resultante é R = √(F_v² + F_h²) = √(40² + 30²) = √(1600 + 900) = √2500 = 50 N. A direção é dada por tan(θ) = 40 / 30 = 1,33 ⇒ θ ≈ 53°.",
    "distractorAnalysis": [
      "Opção B (70 N) é a soma escalar ingénua que ignora a ortogonalidade dos vetores.",
      "Opção C (10 N) seria a subtração das componentes.",
      "Opção D (1200 N) é o produto das intensidades."
    ],
    "nursingApplication": "A tração de Russell é um exemplo fascinante de biofísica aplicada: o ângulo resultante de 53° coincide precisamente com a linha anatómica do fémur fletido, mantendo os topos ósseos alinhados e descomprimindo a articulação do joelho."
  },
  {
    "id": 1115,
    "topicId": 1,
    "question": "Se as cordas de um sistema de tração ortopédica estiverem a roçar nas barras metálicas da cama em vez de girar livremente nas roldanas, que consequência biofísica direta ocorre no foco de fratura?",
    "options": [
      "A força de atrito parasita consome parte da tensão, reduzindo substancialmente a força de tração real que chega ao membro fraturado.",
      "A força de tração aumenta espontaneamente para o dobro.",
      "A gravidade local diminui em proporção ao atrito.",
      "O osso consolida três vezes mais depressa."
    ],
    "correctIndex": 0,
    "explanation": "Em sistemas mecânicos com atrito, T_efetiva = P_suspenso - F_atrito. Se o cabo prender ou roçar na estrutura, a força de atrito dissipa a tensão e o membro recebe apenas uma fração da força prescrita pelo ortopedista, podendo levar a desalinhamento ósseo.",
    "distractorAnalysis": [
      "Opção B violaria a conservação da energia; atrito dissipa energia, nunca amplifica forças passivas.",
      "Opções C e D contrariam a mecânica clássica e a fisiologia da consolidação óssea."
    ],
    "nursingApplication": "Na visita diária de enfermagem ao doente ortopédico, a verificação da 'liberdade das polias e cordas' é um cuidado mandatório: assegurar que os cabos assentam nos sulcos das roldanas e correm livremente sem qualquer atrito com lençóis ou estruturas metálicas."
  },
  {
    "id": 1116,
    "topicId": 1,
    "question": "Um doente é mantido em tração esquelética transcondiliana com um pino de Steinmann que atravessa a extremidade distal do fémur. O cuidado prioritário de enfermagem no ponto de inserção do pino metálico na pele baseia-se em:",
    "options": [
      "Vigilância asséptica rigorosa dos orifícios cutâneos e estabilidade mecânica dos grampos, para prevenir a infeção óssea profunda (osteomielite) decorrente da quebra da barreira biológica pela força mecânica contínua.",
      "Aplicação de calor com lâmpada infravermelha direta sobre o ferro para dilatá-lo.",
      "Girar o pino de Steinmann 360° três vezes ao dia para aliviar a tensão.",
      "Retirar o pino antes do banho do doente e recolocá-lo em seguida."
    ],
    "correctIndex": 0,
    "explanation": "A tração esquelética aplica forças diretas no tecido ósseo cortical através de um pino de aço cirúrgico. Como há comunicação direta entre o exterior e o osso sob tensão mecânica contínua, qualquer contaminação bacteriana coloniza o trajeto do pino, provocando osteomielite bacteriana de tratamento extremamente difícil.",
    "distractorAnalysis": [
      "Opção B provocaria necrose térmica óssea e queimaduras teciduais graves.",
      "Opção C destruiria a estabilidade mecânica do pino, lesando tecido ósseo e partes moles.",
      "Opção D causaria dor intolerável, destruição do foco de fratura e hemorragia maciça."
    ],
    "nursingApplication": "O enfermeiro realiza o penso estéril diário dos orifícios do pino com técnica asséptica estrita, avalia a presença de exsudado purulento ou eritema periorificial e assegura que os protetores de borracha nas pontas afiadas do pino estão colocados para evitar perfurações acidentais da perna contralateral."
  },
  {
    "id": 1117,
    "topicId": 1,
    "question": "Num sistema de roldana móvel ideal utilizado para içar uma carga clínica pesada, qual é a vantagem mecânica teórica obtida em termos de força motora necessária?",
    "options": [
      "A força necessária é reduzida para metade (VM = 2), embora o comprimento de corda puxado seja o dobro do deslocamento da carga.",
      "A força necessária é quadruplicada.",
      "A força necessária mantém-se idêntica a uma roldana fixa.",
      "A carga sobe sem necessidade de qualquer força humana."
    ],
    "correctIndex": 0,
    "explanation": "Numa roldana móvel, o peso da carga é distribuído igualmente pelos dois ramos paralelos da corda que a sustentam. Assim, a força F que o operador aplica num dos ramos é apenas metade do peso total (F = P / 2). Pela conservação do trabalho mecânico (W = F · d), a corda tem de ser puxada pelo dobro da distância (2d).",
    "distractorAnalysis": [
      "Opção B seria uma desvantagem absurda.",
      "Opção C descreve a roldana fixa simples (VM = 1), que apenas muda a direção da força.",
      "Opção D inventa o movimento perpétuo violando a primeira lei da termodinâmica."
    ],
    "nursingApplication": "Sistemas de roldanas móveis são a base dos guinchos mecânicos hospitalares de teto: permitem ao enfermeiro suspender doentes de 120 kg exercendo apenas uma modesta força manual equivalente a 30 ou 60 kg nos comandos."
  },
  {
    "id": 1118,
    "topicId": 1,
    "question": "Um colar cervical semirrígido (tipo Filadélfia ou Stifneck) colocado num doente com suspeita de fratura da coluna cervical atua biomecanicamente:",
    "options": [
      "Gerando forças de apoio no queixo (mandíbula) e esterno que mantêm o somatório das forças e momentos cervicais em zero (∑F = 0 e ∑M = 0), impedindo flexão, extensão e rotação prejudiciais da cabeça.",
      "Acelerando a circulação venosa na veia jugular interna.",
      "Aumentando a temperatura da laringe para facilitar a intubação.",
      "Diminuindo a pressão arterial sistémica em 50%."
    ],
    "correctIndex": 0,
    "explanation": "O colar cervical é um dispositivo de estabilização estática: apoia-se em estruturas ósseas firmes do tronco (clavículas, esterno e coluna torácica superior) e no mento/occipital, aplicando forças de restrição que impedem que a gravidade ou a inércia acelerem as vértebras cervicais lesadas.",
    "distractorAnalysis": [
      "Opção B é falsa; pelo contrário, colares demasiado apertados podem comprimir as jugulares e aumentar a pressão intracraniana.",
      "Opções C e D não têm suporte na biomecânica ou hemodinâmica do colar cervical."
    ],
    "nursingApplication": "O enfermeiro escolhe o tamanho rigoroso do colar cervical antes da colocação: um colar muito curto não imobiliza as forças cervicais, enquanto um colar excessivamente longo hiperestende o pescoço e agrava a compressão da medula espinhal."
  },
  {
    "id": 1119,
    "topicId": 1,
    "question": "Quando um doente em pós-operatório ortopédico está imobilizado com uma goteira gessada na perna, a força normal exercida pelo gesso sobre a pele deve ser uniforme. O que sucede fisicamente se o gesso tiver uma amolgadela ou concavidade interna estreita?",
    "options": [
      "A área de contacto local A diminui drasticamente nessa zona saliente, fazendo a pressão P = F / A disparar para valores extremos capazes de necrosar a pele em poucas horas (necrose iatrogénica por gesso).",
      "A pressão cai para zero tornando a imobilização mais confortável.",
      "A circulação linfática acelera nessa zona protegendo a derme.",
      "O gesso dissolve-se por reação enzimática com a derme."
    ],
    "correctIndex": 0,
    "explanation": "A pressão é inversamente proporcional à área (P = F / A). Uma saliência interna no gesso concentra grande parte da força de contenção mecânica numa área minúscula de pele (milímetros quadrados), ultrapassando em larga escala a pressão capilar tecidual e gerando isquemia rápida e escara profunda.",
    "distractorAnalysis": [
      "Opção B confunde concentração de força com alívio pressórico.",
      "Opção C é fisiopatologicamente falsa; a compressão mecânica oclui vasos linfáticos e venosos, gerando edema distal.",
      "Opção D é um disparate biológico."
    ],
    "nursingApplication": "Na confeção e vigilância de imobilizações gessadas, o enfermeiro nunca apoia as pontas dos dedos sobre o gesso ainda fresco (molda apenas com as palmas abertas das mãos para evitar amolgadelas focais) e monitoriza queixas de 'dor em queimadura localizada' sob o gesso."
  },
  {
    "id": 1120,
    "topicId": 1,
    "question": "Um sistema de forças coplanares concorrentes que atuam sobre o trocânter maior do fémur está em equilíbrio se a soma das suas componentes nos eixos X e Y for:",
    "options": [
      "∑Fx = 0 e ∑Fy = 0 em simultâneo.",
      "∑Fx = 10 N e ∑Fy = 10 N.",
      "∑Fx = ∑Fy = ∞.",
      "Independente das componentes cartesianas."
    ],
    "correctIndex": 0,
    "explanation": "Para que o vetor resultante R seja nulo num plano bidimensional (equilíbrio estático de forças), tanto a projeção horizontal no eixo dos X como a projeção vertical no eixo dos Y têm de anular-se independentemente: ∑Fx = 0 e ∑Fy = 0.",
    "distractorAnalysis": [
      "Opção B resultaria num vetor resultante não-nulo de R = √(10² + 10²) ≈ 14,14 N a 45°, gerando aceleração.",
      "Opções C e D contrariam a álgebra vetorial fundamental de Newton."
    ],
    "nursingApplication": "A decomposição ortogonal de forças nos eixos X e Y é aplicada na análise de forças musculares que atuam na anca durante o apoio unipodal, orientando o enfermeiro especialista de reabilitação na prescrição de exercícios de reforço do glúteo médio."
  },
  {
    "id": 1121,
    "topicId": 1,
    "question": "O uso de uma tala imobilizadora de Thomas em fraturas expostas do fémur no atendimento pré-hospitalar visa primordialmente:",
    "options": [
      "Aplicar tração mecânica longitudinal imediata ao membro inferior para vencer a potente força de espasmo do músculo quadríceps, realinhando o fémur e evitando que topos ósseos pontiagudos lacerem a artéria femoral profunda.",
      "Aumentar a temperatura da coxa para combater a hipotermia.",
      "Comprimir os nervos periféricos para anestesiar quimicamente o membro.",
      "Substituir a necessidade de transfusão sanguínea em doentes chocados."
    ],
    "correctIndex": 0,
    "explanation": "Após fratura da diáfise femoral, a contração espástica involuntária dos potentes músculos da coxa (forças musculares sem oposição do osso quebrado) provoca cavalgamento dos fragmentos e encurtamento do membro, com grande risco de dilaceração de vasos femorais vitais. A tração longitudinal da tala de Thomas equilibra o espasmo muscular e restaura a anatomia tubular.",
    "distractorAnalysis": [
      "Opção B confunde estabilização mecânica de fraturas com termoterapia ativa.",
      "Opção C é um efeito adverso gravíssimo a evitar, e não o objetivo primário.",
      "Opção D é falsa; a tala previne a hemorragia contínua na coxa, mas não substitui hemoderivados perdidos."
    ],
    "nursingApplication": "O enfermeiro em ambiente pré-hospitalar ou sala de emergência monta e ajusta a tração da tala de Thomas, aliviando imediatamente a dor excruciante do doente e prevenindo hemorragias internas ocultas que podem atingir mais de 1,5 litros de sangue na coxa."
  },
  {
    "id": 1122,
    "topicId": 1,
    "question": "Num sistema de tração com pesos suspensos, se o enfermeiro observar que os discos de peso estão pousados no chão da enfermaria, que situação mecânica se verifica?",
    "options": [
      "O solo está a exercer uma força normal para cima que anula o peso dos discos, fazendo a tensão no cabo cair para 0 N e desativando completamente a tração clínica.",
      "A tração funciona com eficiência máxima porque o solo conduz melhor as forças.",
      "A força de tração no osso doente duplica por efeito elástico.",
      "Não há qualquer alteração mecânica relevante."
    ],
    "correctIndex": 0,
    "explanation": "Quando os pesos assentam no chão: P - N = 0 ⇒ a tensão no cabo T = 0 N. A corda fica frouxa e a força de tração mecânica terapêutica deixa de ser exercida sobre o membro do doente, permitindo que a musculatura contraia e desalinhe os fragmentos da fratura.",
    "distractorAnalysis": [
      "Opções B, C e D contrariam as leis básicas da estática de cabos e polias."
    ],
    "nursingApplication": "Verificar se os pesos de tração estão suspensos no ar, sem contacto com o chão, cama ou mesas de cabeceira, é um cuidado de enfermagem essencial repetido no início de cada turno de trabalho nas enfermarias de ortopedia."
  },
  {
    "id": 1123,
    "topicId": 1,
    "question": "Um doente em decúbito dorsal tem a perna suspensa por duas cordas oblíquas simétricas que formam um ângulo de 60° entre si e convergem na tíbia. Se a força de suspensão total necessária para vencer a gravidade for de 60 N na vertical para cima, qual é a tensão T em cada uma das duas cordas simétricas?",
    "options": [
      "Aproximadamente 34,6 N em cada corda (T = 60 / (2 · cos 30°)).",
      "Exatamente 30 N em cada corda.",
      "Exatamente 60 N em cada corda.",
      "120 N em cada corda."
    ],
    "correctIndex": 0,
    "explanation": "Como o ângulo entre as cordas é de 60°, cada corda faz um ângulo de 30° com a vertical de simetria (metade de 60°). A componente vertical de cada corda é T · cos(30°). O equilíbrio vertical exige: 2 · T · cos(30°) = 60 N ⇒ T = 60 / (2 × 0,866) = 60 / 1,732 ≈ 34,6 N.",
    "distractorAnalysis": [
      "Opção B (30 N) seria a resposta se as cordas fossem estritamente verticais e paralelas (ângulo de 0° entre si).",
      "Opção C e D ignoram o efeito trigonométrico da inclinação das cordas."
    ],
    "nursingApplication": "Quanto mais abertas estiverem as cordas de suspensão (maior ângulo entre elas), maior será a tensão exigida em cada cabo para sustentar a mesma carga vertical do membro do doente; o enfermeiro evita ângulos excessivamente abertos que sobrecarreguem as ancoragens."
  },
  {
    "id": 1124,
    "topicId": 1,
    "question": "A condição de equilíbrio de forças translacionais (∑F = 0) garante obrigatoriamente que um corpo não sofra rotação?",
    "options": [
      "NÃO, porque para garantir a ausência de rotação é indispensável que a soma de todos os momentos de força (torques) também seja nula (∑M = 0).",
      "SIM, porque corpos sob ∑F = 0 ficam fisicamente impossibilitados de rodar.",
      "SIM, a primeira lei de Newton abrange todas as formas de movimento do universo.",
      "NÃO, porque o corpo só não roda se a sua temperatura for 0 Kelvin."
    ],
    "correctIndex": 0,
    "explanation": "Um corpo rígido tem 6 graus de liberdade no espaço (3 de translação e 3 de rotação). O equilíbrio estático completo exige duas condições independentes: 1) Equilíbrio translacional: ∑F = 0; 2) Equilíbrio rotacional: ∑M = 0 (ou ∑τ = 0). Duas forças iguais e opostas em linhas de ação diferentes formam um binário que tem ∑F = 0 mas produz rotação.",
    "distractorAnalysis": [
      "Opções B e C confundem translação pura do centro de massa com dinâmica rotacional de corpos extensos.",
      "Opção D mistura termodinâmica com a mecânica clássica de torques."
    ],
    "nursingApplication": "Ao posicionar apoios de pernas ou trações, o enfermeiro certifica-se de que a linha de força passa pelo eixo central do membro para não introduzir momentos de torção rotacionais que façam a perna rodar externamente de forma dolorosa."
  },
  {
    "id": 1125,
    "topicId": 1,
    "question": "Um dinamómetro de tração é intercalado num circuito de tração ortopédica para monitorizar a força real exercida. Se a escala do aparelho registar 40 N num dia e descer para 15 N no dia seguinte sem alteração dos pesos, qual é a suspeita clínica imediata do enfermeiro?",
    "options": [
      "O cabo de tração deslizou e ficou preso em algum obstáculo mecânico da cama ou o doente escorregou e encostou os pés à peseira, dissipando a carga.",
      "A gravidade da Terra diminuiu espontaneamente durante a noite.",
      "A massa óssea do doente aumentou 300% absorvendo a gravidade.",
      "O dinamómetro transformou os Newtons em calor corporal."
    ],
    "correctIndex": 0,
    "explanation": "A massa dos discos de peso e a aceleração gravítica g não se alteram; uma queda inexplicável na tensão lida no dinamómetro (de 40 N para 15 N) denuncia imediatamente uma interferência mecânica externa: cabo travado nas roldanas, atrito anormal ou apoio do doente no fundo da cama que anula a contra-tração.",
    "distractorAnalysis": [
      "Opções B, C e D são invenções absurdas sem cabimento científico."
    ],
    "nursingApplication": "A leitura e registo diário do dinamómetro de tração no processo clínico de enfermagem assegura a auditoria contínua da eficácia da tração esquelética, permitindo corrigir prontamente bloqueios mecânicos antes que ocorra consolidação viciosa da fratura."
  },
  {
    "id": 1126,
    "topicId": 1,
    "question": "Qual é a distinção concetual e física fundamental entre a Massa de um doente e o seu Peso?",
    "options": [
      "A massa é uma grandeza escalar intrínseca da matéria (medida em kg no SI) que quantifica a inércia do doente; o peso é uma força vetorial (medida em Newtons no SI) resultante da atração gravítica exercida pela Terra sobre essa massa (P = m · g).",
      "A massa varia conforme a altitude e o peso é constante em todo o universo.",
      "A massa mede-se em Newtons e o peso mede-se em quilogramas.",
      "Não existe qualquer distinção física, sendo sinónimos perfeitos."
    ],
    "correctIndex": 0,
    "explanation": "A massa m é invariante com o local e traduz a quantidade de matéria e inércia do corpo. O peso P é uma força gravitacional dependente da aceleração local da gravidade (P = m · g), sendo uma grandeza vetorial com direção vertical e sentido para o centro da Terra.",
    "distractorAnalysis": [
      "Opção B inverte os conceitos: o peso é que varia com a gravidade local (altitude, latitude ou outro planeta) e a massa é constante.",
      "Opção C inverte as unidades do Sistema Internacional.",
      "Opção D é o erro popular comum na linguagem quotidiana, mas inaceitável na biofísica médica."
    ],
    "nursingApplication": "Na farmacoterapia de doentes críticos, doses de fármacos inotrópicos, anestésicos e antibióticos de margem terapêutica estreita (ex: vancomicina, gentamicina) são rigorosamente calculadas por quilograma de massa corporal (mg/kg), e não pelo peso em Newtons."
  },
  {
    "id": 1127,
    "topicId": 1,
    "question": "Um doente idoso acamado tem massa inercial de 65 kg. Considerando a aceleração gravítica local padrão g = 9,8 m/s², qual é o peso exercido pelo doente sobre o leito hospitalar?",
    "options": [
      "637 N",
      "65 N",
      "6,63 N",
      "6370 N"
    ],
    "correctIndex": 0,
    "explanation": "O peso é calculado por P = m · g = 65 kg × 9,8 m/s² = 637 N. O vetor peso atua no centro de massa do doente, orientado verticalmente para baixo em direção ao solo.",
    "distractorAnalysis": [
      "Opção B confunde o número da massa em kg com o valor da força peso em Newtons.",
      "Opção C divide a massa pela gravidade (65 / 9,8).",
      "Opção D multiplica erradamente por um fator de 10 adicional."
    ],
    "nursingApplication": "Este valor de 637 N é a força vertical total que terá de ser contrabalançada pela força normal da cama e distribuída pelos tecidos moles em contacto com o colchão para evitar pressões focais excessivas."
  },
  {
    "id": 1128,
    "topicId": 1,
    "question": "Um enfermeiro acompanha uma maca com um doente dentro de um elevador hospitalar. Se o elevador arrancar subitamente para cima com uma aceleração vertical de 2 m/s², o que acontece ao 'peso aparente' do doente registado pelo colchão (adotando g = 9,8 m/s²)?",
    "options": [
      "O peso aparente aumenta para N = m · (g + a) = m · 11,8 m/s², comprimindo mais o colchão durante o período de aceleração ascendente.",
      "O peso aparente diminui para zero tornando o doente flutuante.",
      "O peso aparente mantém-se estritamente inalterado porque a massa do doente não mudou.",
      "O peso aparente torna-se negativo fazendo o doente colar-se ao teto."
    ],
    "correctIndex": 0,
    "explanation": "Pela 2.ª Lei de Newton no eixo vertical: N - P = m · a ⇒ N = m · (g + a). Como a aceleração é para cima (+2 m/s²), a força normal de contacto N (que representa a sensação de peso aparente) aumenta para m · 11,8 N, cerca de 20% superior ao peso estático de repouso.",
    "distractorAnalysis": [
      "Opção B ocorreria apenas se o elevador estivesse em queda livre acelerada para baixo com a = g.",
      "Opção C confunde a constância da massa com a variação dinâmica da força normal de apoio em referenciais acelerados.",
      "Opção D é uma situação fisicamente impossível no movimento mecânico real."
    ],
    "nursingApplication": "Em doentes politraumatizados com fraturas da bacia ou coluna vertebral instáveis, o transporte em elevadores deve ser feito em modo 'serviço médico' suave, evitando arranques e travagens bruscas que geram sobrecargas mecânicas dinâmicas nos focos de fratura."
  },
  {
    "id": 1129,
    "topicId": 1,
    "question": "No mesmo elevador, quando este desacelera ao chegar ao piso superior (aceleração para baixo de 2 m/s² para travar), o peso aparente do doente:",
    "options": [
      "Diminui para N = m · (g - a) = m · 7,8 m/s², sentindo o doente uma sensação de alívio de peso momentânea.",
      "Aumenta para o dobro.",
      "Transforma-se em energia térmica.",
      "Anula a pressão arterial nas carótidas."
    ],
    "correctIndex": 0,
    "explanation": "Na travagem de uma subida, a aceleração aponta no sentido oposto ao movimento (para baixo): N = m · (g - a) = m · (9,8 - 2,0) = m · 7,8 N. A força normal de apoio diminui, dando a sensação transitória de ligeireza.",
    "distractorAnalysis": [
      "Opção B confunde desaceleração no topo com aceleração na base.",
      "Opções C e D são alegações sem fundamento físico ou fisiológico."
    ],
    "nursingApplication": "O enfermeiro tranquiliza doentes ansiosos durante transferências em elevador, explicando que a sensação de 'vazio no estômago' na desaceleração é uma resposta fisiológica normal dos órgãos abdominais às variações da força normal de suporte."
  },
  {
    "id": 1130,
    "topicId": 1,
    "question": "Uma balança médica de alavanca com contrapesos (balança de braços) compara a massa do doente com massas-padrão calibradas. Se esta medição fosse realizada na Lua (onde g_lua ≈ 1,6 m/s²), qual seria a massa indicada na balança para um doente que na Terra tem 70 kg?",
    "options": [
      "Exatamente 70 kg, porque a gravidade reduzida atua simultaneamente no doente e nos contrapesos de calibração, mantendo o equilíbrio de momentos idêntico.",
      "Apenas 11,4 kg, porque a Lua tem menos gravidade.",
      "420 kg, devido à ausência de atmosfera lunar.",
      "0 kg, porque balanças não funcionam no espaço."
    ],
    "correctIndex": 0,
    "explanation": "A balança de braço equilibra momentos de força: m_doente · g · d₁ = m_padrão · g · d₂. Como a gravidade local g cancela em ambos os lados da equação, a medição independe da gravidade e avalia a massa inercial intrínseca (70 kg).",
    "distractorAnalysis": [
      "Opção B seria a leitura de um dinamómetro de mola calibrado para a gravidade da Terra, que mede peso e não compara massas diretamente.",
      "Opções C e D demonstram desconhecimento do princípio das alavancas de pesagem."
    ],
    "nursingApplication": "As balanças de alavanca de contrapeso continuam a ser o padrão de ouro nos serviços hospitalares de nutrição e nefrologia devido à sua precisão independente de flutuações de tensão elétrica ou ligeiras variações gravíticas locais."
  },
  {
    "id": 1131,
    "topicId": 1,
    "question": "Um doente com Insuficiência Cardíaca Congestiva descompensada retém 4 litros de água no espaço intersticial (edema periférico dos membros inferiores e ascite). Sabendo que a densidade da água é de 1 kg/L, qual é o aumento de peso experimentado pelo doente (adotando g = 9,8 m/s²)?",
    "options": [
      "Aumento de 4 kg de massa e 39,2 N de peso.",
      "Aumento de 40 N de massa e 4 kg de peso.",
      "Aumento de 400 N de peso sem alteração de massa.",
      "Nenhum aumento, pois a água corporal é um fluido endógeno."
    ],
    "correctIndex": 0,
    "explanation": "Uma retenção de 4 L de água equivale a uma massa adicional de m = 4 kg. O aumento de peso gravítico correspondente é ΔP = m · g = 4 kg × 9,8 m/s² = 39,2 N. Esta sobrecarga hídrica sobrecarrega o miocárdio insuficiente e aumenta a pressão sobre as zonas de apoio sacrococcígeas.",
    "distractorAnalysis": [
      "Opção B troca incorretamente as unidades de massa (kg) e força peso (N).",
      "Opção C multiplica a gravidade por 100 de forma errada.",
      "Opção D ignora que a retenção de líquidos acrescenta matéria real e peso mensurável ao organismo."
    ],
    "nursingApplication": "A pesagem diária com rigor à mesma hora e na mesma balança pelo enfermeiro é o método mais fidedigno de monitorização do balanço hídrico na insuficiência cardíaca e doentes hemodialisados: variações de 1 kg refletem 1 litro de água retida ou eliminada."
  },
  {
    "id": 1132,
    "topicId": 1,
    "question": "A Lei da Gravitação Universal de Newton estabelece que a força de atração entre duas massas pontuais é diretamente proporcional ao produto das suas massas e:",
    "options": [
      "Inversamente proporcional ao quadrado da distância entre os seus centros (F = G · (m₁ · m₂) / r²).",
      "Diretamente proporcional à distância ao cubo.",
      "Inversamente proporcional à temperatura absoluta dos corpos.",
      "Independente da distância de separação."
    ],
    "correctIndex": 0,
    "explanation": "A força gravitacional newtoniana obedece à lei do inverso do quadrado da distância: F = G · (m₁·m₂)/r², onde G é a constante gravitacional universal. Dobrar a distância entre duas massas reduz a atração para um quarto (1/4).",
    "distractorAnalysis": [
      "Opções B, C e D violam a lei fundamental da gravitação formulada por Newton em 1687."
    ],
    "nursingApplication": "A lei do inverso do quadrado da distância é um modelo matemático central que o estudante de enfermagem reencontrará na radioproteção: a intensidade de radiações ionizantes (Raios X e Gama) diminui com o quadrado da distância, fundamentando o princípio da distância segura."
  },
  {
    "id": 1133,
    "topicId": 1,
    "question": "Se um doente for transportado para uma enfermaria no topo de um arranha-céus a 400 metros de altitude em relação ao nível do mar, o que acontece rigorosamente à sua massa e ao seu peso?",
    "options": [
      "A massa permanece exatamente a mesma; o peso diminui de forma infinitesimal e impercetível (menos de 0,01%) devido ao ligeiro aumento da distância ao centro da Terra.",
      "A massa diminui para metade e o peso duplica.",
      "Ambos aumentam 50% devido à menor densidade do ar.",
      "A massa transforma-se em volume gasoso."
    ],
    "correctIndex": 0,
    "explanation": "Como g = G · M_Terra / r², aumentar a altitude afasta o corpo do centro da Terra (maior r), diminuindo muito ligeiramente a aceleração da gravidade g. No entanto, a massa inercial do doente é rigorosamente constante.",
    "distractorAnalysis": [
      "Opções B, C e D introduzem alterações absurdas nas propriedades fundamentais da matéria."
    ],
    "nursingApplication": "Este conhecimento reforça a compreensão científica de que balanças hospitalares medem na realidade a força normal de suporte que equilibra o peso, mas são calibradas localmente para fornecer o valor direto da massa em quilogramas para a dosagem de medicamentos."
  },
  {
    "id": 1134,
    "topicId": 1,
    "question": "Um saco de nutrição entérica tem 500 mL de solução com densidade de 1,1 g/mL. Qual é o peso deste saco (adotando g = 9,8 m/s²)?",
    "options": [
      "5,39 N",
      "0,55 N",
      "550 N",
      "4,9 N"
    ],
    "correctIndex": 0,
    "explanation": "A massa é calculada por m = volume × densidade = 500 mL × 1,1 g/mL = 550 g = 0,55 kg. O peso gravítico é P = m · g = 0,55 kg × 9,8 m/s² = 5,39 N.",
    "distractorAnalysis": [
      "Opção B confunde a massa em kg com a força peso em Newtons.",
      "Opção C multiplica os gramas pela gravidade sem converter para kg no SI.",
      "Opção D (4,9 N) consideraria uma densidade de 1,0 g/mL (água pura)."
    ],
    "nursingApplication": "Conhecer a densidade das fórmulas de nutrição entérica e parentérica hiperosmolares permite ao enfermeiro calcular a carga em suportes de perfusão e prever o comportamento viscoso no calibre da sonda nasogástrica."
  },
  {
    "id": 1135,
    "topicId": 1,
    "question": "Quando um doente em repouso no leito hospitalar passa da posição deitada (decúbito dorsal) para a posição de pé (ortostática), a força gravítica global que atua sobre a sua massa corporal total:",
    "options": [
      "Permanece constante em módulo e direção (P = m · g), mas altera drasticamente a direção relativa do gradiente de pressão hidrostática ao longo da coluna vascular do organismo.",
      "Aumenta para o triplo devido à verticalização dos membros.",
      "Diminui para zero no cérebro.",
      "Inverte o sentido apontando para o céu."
    ],
    "correctIndex": 0,
    "explanation": "A força gravítica que atua sobre a massa total do doente depende apenas de m e de g, permanecendo constante. Contudo, na vertical, o peso da coluna de sangue passa a atuar ao longo do eixo cabeça-pés, acumulando sangue nos membros inferiores por estase venosa.",
    "distractorAnalysis": [
      "Opções B, C e D ignoram que a gravidade externa não muda com a postura do indivíduo."
    ],
    "nursingApplication": "Esta redistribuição do peso da coluna de sangue pela gravidade explica a hipotensão ortostática: ao levantar-se bruscamente, a drenagem venosa craniana desce e o débito cardíaco cai, provocando lipotímia; o enfermeiro ajuda o doente a sentar-se na borda da cama antes de se pôr de pé."
  },
  {
    "id": 1136,
    "topicId": 1,
    "question": "A aceleração da gravidade média à superfície da Terra ao nível do mar é de aproximadamente 9,8 m/s². Isto significa que, em queda livre no vácuo, a velocidade de uma gota de medicamento em queda:",
    "options": [
      "Aumenta de 9,8 metros por segundo a cada segundo que passa.",
      "Aumenta de 9,8 metros em cada quilómetro percorrido.",
      "Permanece fixa em 9,8 m/s durante toda a trajetória.",
      "Diminui até atingir 0 m/s no solo."
    ],
    "correctIndex": 0,
    "explanation": "A unidade de aceleração m/s² é equivalente a (m/s)/s: expressa a taxa de variação da velocidade no tempo. Uma aceleração de 9,8 m/s² significa que a velocidade escalar aumenta em 9,8 m/s a cada segundo decorrido.",
    "distractorAnalysis": [
      "Opção B confunde derivada temporal com gradiente espacial de distância.",
      "Opção C descreve uma velocidade constante, o que implicaria aceleração nula.",
      "Opção D descreve uma desaceleração negativa."
    ],
    "nursingApplication": "Na câmara de gotejamento de um perfusor de soro, a gota solta-se e acelera sob a gravidade até atingir o fundo da câmara; a monitorização visual do ritmo de queda permite ao enfermeiro regular o débito mecânico em gotas por minuto (gts/min)."
  },
  {
    "id": 1137,
    "topicId": 1,
    "question": "Um bebé prematuro internado numa incubadora neonatal tem massa de 1500 gramas. Qual é o seu peso gravítico (adotando g = 9,8 m/s²)?",
    "options": [
      "14,7 N",
      "1470 N",
      "1,5 N",
      "0,15 N"
    ],
    "correctIndex": 0,
    "explanation": "Converte-se primeiro a massa para quilogramas: m = 1500 g = 1,5 kg. Calcula-se o peso: P = m · g = 1,5 kg × 9,8 m/s² = 14,7 N.",
    "distractorAnalysis": [
      "Opção B multiplica os gramas diretamente sem converter para o SI (1500 × 9,8).",
      "Opção C confunde a massa em kg com a força em Newtons.",
      "Opção D erra a conversão de escala por fator de 100."
    ],
    "nursingApplication": "Em neonatologia de cuidados intensivos, a pesagem em balanças digitais com precisão ao grama é vital: pequenas variações de 20 ou 30 g de massa refletem perdas hídricas insensíveis críticas para a termorregulação e hidratação do prematuro."
  },
  {
    "id": 1138,
    "topicId": 1,
    "question": "Qual é a força exercida pela gravidade sobre uma seringa de 20 mL totalmente preenchida com água (massa do conjunto = 25 g)? Adote g = 9,8 m/s².",
    "options": [
      "0,245 N",
      "2,45 N",
      "245 N",
      "25 N"
    ],
    "correctIndex": 0,
    "explanation": "A massa total é m = 25 g = 0,025 kg. O peso é P = m · g = 0,025 kg × 9,8 m/s² = 0,245 N.",
    "distractorAnalysis": [
      "Opção B comete um erro decimal por fator de 10 (considerando 0,25 kg).",
      "Opção C não converte gramas para quilogramas.",
      "Opção D confunde massa em gramas com Newtons."
    ],
    "nursingApplication": "Ao preparar seringas elétricas de infusão contínua em bombas de seringa (perfusores), o enfermeiro sabe que a força mecânica exigida ao motor da bomba para empurrar o êmbolo deve superar largamente este peso e a resistência viscosa do cateter."
  },
  {
    "id": 1139,
    "topicId": 1,
    "question": "O Centro de Massa de um corpo humano anatómico é definido fisicamente como:",
    "options": [
      "O ponto geométrico médio ponderado pela distribuição de toda a massa corporal, onde se pode considerar concentrada toda a massa para efeitos de análise das forças externas translacionais.",
      "O local onde se produz a totalidade das hormonas tiroideias.",
      "O ponto do coração que dita o ritmo sinusal cardíaco.",
      "A região anatómica onde a densidade óssea atinge o valor zero."
    ],
    "correctIndex": 0,
    "explanation": "O centro de massa é o ponto matemático ponderado pelas coordenadas das massas parciais de todos os segmentos corporais (cabeça, tronco, membros): r_cm = (∑ m_i · r_i) / M_total. Para a física newtoniana translacional, a resultante de todas as forças gravíticas atua como se toda a massa estivesse concentrada nesse ponto.",
    "distractorAnalysis": [
      "Opções B e C confundem uma definição mecânica translacional com glândulas endócrinas ou estruturas de condução cardíaca.",
      "Opção D é uma afirmação sem sentido físico."
    ],
    "nursingApplication": "Em amputações cirúrgicas de membros inferiores (ex: desarticulação da anca ou amputação supracondiliana), a distribuição de massa do doente altera-se substancialmente; o enfermeiro compreende que a estabilidade na cadeira de rodas se modifica, exigindo rodízios antitombo traseiros."
  },
  {
    "id": 1140,
    "topicId": 1,
    "question": "Dois corpos com massas muito diferentes (uma bala de algodão de 10 g e uma tesoura cirúrgica de 200 g) são largados simultaneamente da mesma altura dentro de um tubo de vácuo sem ar. Qual chega primeiro à base do tubo?",
    "options": [
      "Ambos atingem a base exatamente no mesmo instante, porque no vácuo a aceleração da gravidade g é independente da massa do corpo em queda.",
      "A tesoura cirúrgica, porque por ser mais pesada a gravidade puxa-a com maior aceleração.",
      "O algodão, porque corpos mais leves não sentem a gravidade.",
      "Nenhum deles cai, pois no vácuo os objetos flutuam sem peso."
    ],
    "correctIndex": 0,
    "explanation": "Pela 2.ª Lei de Newton: F = m · a ⇒ m · g = m · a ⇒ a = g. Como a massa inercial m se cancela com a massa gravitacional em ambos os membros da equação, a aceleração de queda livre depende unicamente do campo gravitacional g da Terra (descoberta fundamental de Galileu Galilei).",
    "distractorAnalysis": [
      "Opção B é o clássico erro aristotélico refutado por Galileu.",
      "Opção C inventa uma imunidade gravítica fictícia para materiais leves.",
      "Opção D confunde ausência de ar (vácuo) com ausência de campo gravitacional."
    ],
    "nursingApplication": "A experiência de Galileu comprova que a diferença de queda no ar ambiente hospitalar se deve unicamente à força de resistência hidrodinâmica do ar, e não a uma atração gravítica preferencial por massas maiores."
  },
  {
    "id": 1141,
    "topicId": 1,
    "question": "A Força Normal (N) que um colchão hospitalar exerce sobre um doente deitado em repouso estático num leito horizontal é de natureza microscópica:",
    "options": [
      "Eletrostática repulsiva entre os eletrões das nuvens eletrónicas dos átomos superficiais da pele/roupa do doente e os átomos da superfície do colchão.",
      "Gravitacional atrativa mediada por gravitões.",
      "Nuclear forte mediada por gluões.",
      "Nuclear fraca mediada por bosões Z."
    ],
    "correctIndex": 0,
    "explanation": "Todas as forças macroscópicas de contacto da mecânica diária (tensão, atrito, força normal, compressão elástica) são manifestações da força eletromagnética. A força normal resulta da repulsão de Coulomb entre as nuvens eletrónicas dos átomos em contacto quando são comprimidos uns contra os outros.",
    "distractorAnalysis": [
      "Opção B é a força peso de atração da Terra, e não a força normal de contacto.",
      "Opções C e D são forças nucleares subatómicas que atuam exclusivamente dentro do núcleo atómico a distâncias inferiores a 10⁻¹⁵ m."
    ],
    "nursingApplication": "Compreender que o suporte mecânico é uma interação eletrostática de superfície ensina o enfermeiro que tecidos biológicos e materiais sintéticos interagem no plano molecular, justificando a escolha de tecidos hospitalares hipoalergénicos e de baixo atrito."
  },
  {
    "id": 1142,
    "topicId": 1,
    "question": "A Força de Atrito Estático máxima (F_atrito_est_max) entre o corpo de um doente e o lençol da cama é dada pela relação:",
    "options": [
      "F_atrito_est_max = μ_s · N (onde μ_s é o coeficiente de atrito estático e N é a força normal de contacto).",
      "F_atrito_est_max = N / μ_s",
      "F_atrito_est_max = m · g · μ_s²",
      "F_atrito_est_max = P · V / T"
    ],
    "correctIndex": 0,
    "explanation": "O atrito estático opõe-se ao início do deslizamento relativo entre duas superfícies em contacto. A sua intensidade máxima é diretamente proporcional à força normal que comprime as superfícies (N), sendo a constante de proporcionalidade o coeficiente de atrito estático adimensional μ_s.",
    "distractorAnalysis": [
      "Opção B inverte a relação matemática.",
      "Opção C introduz uma dependência quadrática incorreta.",
      "Opção D é a equação dos gases ideais de Clapeyron da termodinâmica."
    ],
    "nursingApplication": "Para mover um doente acamado pesado sem esforço excessivo, o enfermeiro reduz o coeficiente de atrito μ_s utilizando lençóis de transferência de nylon deslizante ou pranchas de deslizamento de baixo atrito."
  },
  {
    "id": 1143,
    "topicId": 1,
    "question": "Qual é a relação geral entre o Coeficiente de Atrito Estático (μ_s) e o Coeficiente de Atrito Cinético ou Dinâmico (μ_k) para os mesmos materiais em contacto?",
    "options": [
      "Geralmente μ_s > μ_k (a força necessária para iniciar o movimento de deslizamento é superior à força necessária para manter o movimento depois de iniciado).",
      "Geralmente μ_s < μ_k (é mais difícil manter o movimento do que iniciá-lo).",
      "São sempre rigorosamente iguais em qualquer superfície sólida.",
      "Ambos são sempre iguais a zero na presença de ar."
    ],
    "correctIndex": 0,
    "explanation": "No estado de repouso, as microasperezas moleculares das duas superfícies entrelaçam-se intimamente e formam micro-soldaduras a frio, exigindo maior força para quebrar o estado estático (μ_s). Quando o deslizamento se inicia, as superfícies 'saltam' pelas cristas das rugosidades, diminuindo a resistência média de atrito dinâmico (μ_k < μ_s).",
    "distractorAnalysis": [
      "Opção B contraria toda a experiência prática e teórica da tribologia mecânica.",
      "Opção C ignora a quebra das microssoldaduras moleculares durante o movimento.",
      "Opção D é uma situação irreal que só existiria em superfluidos a temperaturas próximas do zero absoluto."
    ],
    "nursingApplication": "O enfermeiro nota este fenómeno ao empurrar um equipamento pesado: o esforço de arranque inicial (vencer o atrito estático μ_s) é visivelmente superior ao esforço contínuo de manutenção da marcha (vencer o atrito cinético μ_k)."
  },
  {
    "id": 1144,
    "topicId": 1,
    "question": "Durante a transferência de um doente da cama para a maca, 'puxar o doente arrastando-o diretamente sobre o lençol de algodão seco' gera elevadas forças de atrito. Que consequência cutânea direta isso provoca no doente?",
    "options": [
      "Danos mecânicos na camada córnea da epiderme por fricção abrasiva ('queimadura por atrito'), desnudando a barreira cutânea e aumentando o risco de infeção e de lesão por pressão.",
      "Aumento da síntese de colagénio protetor nas primeiras 2 horas.",
      "Diminuição da temperatura local para valores de congelamento.",
      "Crescimento acelerado de pelos na região sacrococcígea."
    ],
    "correctIndex": 0,
    "explanation": "O atrito superficial direto do algodão com a pele enrugada gera forças de fricção tangenciais elevadas que removem as camadas celulares superficiais da epiderme (desnudamento epitelial). Esta abrasão compromete a barreira antimicrobiana e potencia o desenvolvimento de úlceras por pressão quando combinada com a isquemia profunda.",
    "distractorAnalysis": [
      "Opção B confunde agressão mecânica aguda com processo cicatricial tardio.",
      "Opção C e D são alegações sem qualquer base fisiopatológica."
    ],
    "nursingApplication": "O enfermeiro NUNCA arrasta o doente a seco no leito: utiliza a técnica de lençol de tração móvel ('traçadeira') manuseada por dois profissionais ou pranchas de transferência rolantes (roller-slides), elevando o corpo para anular a fricção direta da pele."
  },
  {
    "id": 1145,
    "topicId": 1,
    "question": "Um doente de 70 kg está deitado numa maca horizontal (peso P = 686 N, logo N = 686 N). Sabendo que o coeficiente de atrito cinético entre o lençol e o colchão é μ_k = 0,3, qual é a força horizontal contínua de atrito que o enfermeiro tem de vencer para deslizar o doente suavemente?",
    "options": [
      "205,8 N",
      "68,6 N",
      "686 N",
      "20,58 N"
    ],
    "correctIndex": 0,
    "explanation": "A força de atrito cinético é dada por F_atrito = μ_k · N. Substituindo: F_atrito = 0,3 × 686 N = 205,8 N. O enfermeiro terá de aplicar uma força propulsora contínua de pelo menos 205,8 N para manter o doente em movimento de translação uniforme.",
    "distractorAnalysis": [
      "Opção B divide por 10 de forma errada.",
      "Opção C ignora o coeficiente de atrito (considera μ = 1,0).",
      "Opção D erra a casa decimal por fator de 10."
    ],
    "nursingApplication": "Vencer mais de 200 N de força de atrito repetidas vezes ao longo de um turno de trabalho desgasta o sistema musculoesquelético do enfermeiro; usar dispositivos com μ_k = 0,05 reduz essa resistência para apenas ~34 N."
  },
  {
    "id": 1146,
    "topicId": 1,
    "question": "As pranchas e telas de deslizamento de baixa fricção (slide sheets) utilizadas em ambiente hospitalar são fabricadas em polímeros sintéticos especiais que reduzem o coeficiente de atrito para valores de μ ≈ 0,05. Qual é o benefício biofísico deste equipamento?",
    "options": [
      "Reduz a força necessária para mobilizar o doente em cerca de 80 a 90% em comparação com os lençóis de algodão tradicionais, prevenindo o desgaste físico do profissional e as lesões por fricção na pele do doente.",
      "Aumenta o peso do doente para estabilizar a cama.",
      "Impede a transmissão de calor metabólico mantendo o doente hipotérmico.",
      "Cria uma corrente galvânica que anestesia os membros inferiores."
    ],
    "correctIndex": 0,
    "explanation": "Como F_atrito = μ · N, diminuir o coeficiente de atrito de μ = 0,35 (algodão) para μ = 0,05 (telas de nylon siliconizado) reduz a força de atrito em 7 vezes (uma redução de ~85%). Isto transforma uma transferência pesada e arriscada numa manobra fluida e suave.",
    "distractorAnalysis": [
      "Opções B, C e D atribuem propriedades mecânicas e eletrofisiológicas bizarras e indesejadas a telas de transferência plásticas."
    ],
    "nursingApplication": "A utilização mandatória de slide sheets nas enfermarias hospitalares é uma medida de excelência em saúde ocupacional que protege a coluna do enfermeiro e previne desnudamentos dolorosos da pele de doentes idosos com pele de cebola (dermatoporose)."
  },
  {
    "id": 1147,
    "topicId": 1,
    "question": "O piso de linóleo ou vinílico molhado de uma enfermaria hospitalar pode ter o seu coeficiente de atrito estático reduzido drasticamente para μ_s < 0,1. Que risco mecânico imediato isto acarreta para a marcha dos doentes e profissionais?",
    "options": [
      "A força máxima de atrito que o solo consegue fornecer para trás torna-se insuficiente para contrabalançar a força propulsora do pé, provocando derrapagem instantânea e queda traumática.",
      "Aumento da força normal que esmaga os ossos dos pés.",
      "Perda imediata de 50% da massa óssea corporal.",
      "Aceleração gravitacional da Terra para cima."
    ],
    "correctIndex": 0,
    "explanation": "Para caminhar sem deslizar, a força horizontal exercida pelo pé contra o solo tem de ser estritamente menor ou igual a F_atrito_est_max = μ_s · N. Quando a água forma uma película lubrificante entre o solado e o piso, μ_s desaba; o pé derrapa e o doente cai no chão.",
    "distractorAnalysis": [
      "Opções B, C e D são afirmações absurdas sem relação com a mecânica da marcha e atrito de contacto."
    ],
    "nursingApplication": "Sinalizar pavimentos molhados com placas amarelas de 'Perigo: Piso Escorregadio' e garantir que os doentes calçam calçado fechado com solado de borracha estriada antiderrapante são intervenções de enfermagem indispensáveis na prevenção de quedas intra-hospitalares."
  },
  {
    "id": 1148,
    "topicId": 1,
    "question": "Em termos físicos, a força de atrito entre dois corpos sólidos depende da área aparente de contacto macroscópica?",
    "options": [
      "NÃO (pelas Leis clássicas de Amontons-Coulomb), a força de atrito independe da área macroscópica aparente de contacto, dependendo unicamente da força normal N e do coeficiente de atrito μ.",
      "SIM, quanto maior a área aparente, maior é o atrito em proporção quadrática.",
      "SIM, o atrito só existe se a área for superior a 1 m².",
      "NÃO, o atrito depende exclusivamente da cor do material."
    ],
    "correctIndex": 0,
    "explanation": "Pela 2.ª Lei do Atrito de Amontons (1699), o atrito é independente da área aparente de contacto. Ao aumentar a área, a força normal por unidade de área diminui na mesma proporção: a área real microscópica de contacto entre as asperezas moleculares permanece constante para uma dada força normal N.",
    "distractorAnalysis": [
      "Opção B é a conceção intuitiva errada refutada pela tribologia clássica.",
      "Opção C inventa um limite mínimo arbitrário.",
      "Opção D é uma afirmação sem qualquer sentido físico."
    ],
    "nursingApplication": "Este princípio físico elucida o enfermeiro de que espalhar um doente numa superfície maior não diminui a força total de atrito necessária para arrastá-lo horizontalmente; o que reduz o atrito é a alteração do coeficiente μ (materiais lubrificantes ou tecidos deslizantes)."
  },
  {
    "id": 1149,
    "topicId": 1,
    "question": "A aplicação de óleo de amêndoas doces ou ácidos gordos hiperoxigenados (AGHO) na pele íntegra em zonas de risco de úlcera por pressão atua biomecanicamente:",
    "options": [
      "Melhorando a hidratação e flexibilidade da camada córnea, reduzindo a fricção e restaurando o filme lipídico de barreira contra forças de atrito externo.",
      "Transformando a pele num corpo rígido indeformável.",
      "Bloqueando a ação da gravidade sobre os capilares sanguíneos.",
      "Destruindo a circulação venosa local para adormecer a dor."
    ],
    "correctIndex": 0,
    "explanation": "Os AGHO e emolientes lipídicos aumentam a coesão celular e a hidratação epidérmica, diminuindo o atrito com roupas e colchões e mantendo a integridade da pele face a micro-traumatismos repetidos de cisalhamento e fricção.",
    "distractorAnalysis": [
      "Opção B tornaria a pele quebradiça, o que aumentaria as fissuras.",
      "Opções C e D contrariam as leis da biologia celular e da hemodinâmica microvascular."
    ],
    "nursingApplication": "O enfermeiro aplica ácidos gordos hiperoxigenados com movimentos suaves e circulares, SEM massajar vigorosamente (massajar com força causaria forças de cisalhamento que rompem os capilares já fragilizados da pele senil)."
  },
  {
    "id": 1150,
    "topicId": 1,
    "question": "Um doente de 80 kg está deitado numa cama inclinada a 30° em relação à horizontal. Qual é a intensidade da força normal de compressão N perpendicular exercida pelo colchão sobre o corpo do doente (adotando g = 9,8 m/s² e cos 30° ≈ 0,866)?",
    "options": [
      "Aproximadamente 679 N (N = m · g · cos 30°).",
      "Exatamente 784 N.",
      "Exatamente 392 N.",
      "0 N."
    ],
    "correctIndex": 0,
    "explanation": "Num plano inclinado de ângulo θ, o vetor peso P decompõe-se numa componente paralela ao leito (P_paralelo = P · sen θ) e numa componente perpendicular ao leito (P_perpendicular = P · cos θ). A força normal equilibra a componente perpendicular: N = m · g · cos(30°) = 80 kg × 9,8 m/s² × 0,866 = 784 × 0,866 ≈ 679 N.",
    "distractorAnalysis": [
      "Opção B (784 N) é o peso total do doente em leito estritamente horizontal (cos 0° = 1).",
      "Opção C (392 N) é a componente paralela que puxa o doente para os pés da cama (P · sen 30° = 784 × 0,5).",
      "Opção D só ocorreria se a cama estivesse vertical a 90° (parede)."
    ],
    "nursingApplication": "Ao inclinar a cabeceira da cama, parte da força do peso é transferida da força normal perpendicular para uma força paralela descendente que faz o doente deslizar para o fundo da cama, gerando cisalhamento tecidual nocivo."
  },
  {
    "id": 1151,
    "topicId": 1,
    "question": "Na mesma cama inclinada a 30°, qual é a força que empurra o doente de 80 kg ao longo do plano da cama em direção aos pés do leito (adotando sen 30° = 0,5)?",
    "options": [
      "392 N para baixo ao longo do colchão (F_paralela = m · g · sen 30°).",
      "784 N na vertical.",
      "679 N perpendicular ao leito.",
      "0 N porque a cama está fixa no chão."
    ],
    "correctIndex": 0,
    "explanation": "A componente do peso paralela ao plano inclinado é dada por F_paralela = P · sen(θ) = (80 × 9,8) × 0,5 = 784 × 0,5 = 392 N. Esta força intensa de quase 40 kgf atua continuamente tentando arrastar o corpo em direção aos pés da cama.",
    "distractorAnalysis": [
      "Opção B é o peso total estático.",
      "Opção C é a força normal perpendicular de compressão.",
      "Opção D ignora a decomposição vetorial de forças da mecânica num plano inclinado."
    ],
    "nursingApplication": "Esta força tangencial de 392 N é a causa física das forças de cisalhamento que distorcem e colapsam os vasos sanguíneos sacrococcígeos quando a cabeceira é mantida elevada sem suporte de pés."
  },
  {
    "id": 1152,
    "topicId": 1,
    "question": "Para impedir que a força paralela de 392 N faça o doente escorregar na cama inclinada a 30°, que força física passiva atua naturalmente entre o lençol e o corpo do doente?",
    "options": [
      "A força de atrito estático orientada para cima ao longo do colchão.",
      "A força centrípeta de rotação da Terra.",
      "A tensão superficial da saliva do doente.",
      "A força de Lorentz magnética."
    ],
    "correctIndex": 0,
    "explanation": "O atrito estático atua sempre em sentido oposto à tendência de deslizamento relativo: se o peso tenta puxar o doente para baixo (392 N), o atrito com o colchão exerce uma força para cima ao longo do plano do leito para tentar manter o equilíbrio estático.",
    "distractorAnalysis": [
      "Opções B, C e D invocam forças físicas despropositadas no contexto biomecânico do leito."
    ],
    "nursingApplication": "Se a força paralela (392 N) superar a força máxima de atrito estático disponível (F_atrito_max = μ_s · N), o doente escorrega no leito; para evitar isso, o enfermeiro eleva simultaneamente o suporte de joelhos da cama (posição de Semi-Fowler articulada)."
  },
  {
    "id": 1153,
    "topicId": 1,
    "question": "Por que motivo as rodas das macas hospitalares possuem um diâmetro relativamente grande (cerca de 15 a 20 cm) em comparação com as rodas de móveis domésticos?",
    "options": [
      "Porque rodas maiores superam obstáculos e desníveis do piso mais facilmente, exigindo menor força horizontal para vencer o atrito de rolamento e transpor juntas de dilatação.",
      "Porque rodas grandes aumentam a velocidade da luz no corredor.",
      "Para fazer a maca parecer mais pesada perante os doentes.",
      "Porque rodas pequenas são proibidas pela Organização Mundial de Saúde por razões estéticas."
    ],
    "correctIndex": 0,
    "explanation": "O atrito de rolamento diminui com o aumento do raio da roda (F_rolamento ∝ 1/R). Rodas de grande diâmetro reduzem a resistência mecânica ao avanço em pisos irregulares e carpetes hospitalares, permitindo manobras mais suaves.",
    "distractorAnalysis": [
      "Opção B viola a física relativista de Einstein.",
      "Opções C e D são justificações risíveis sem fundamento técnico."
    ],
    "nursingApplication": "O design ergonómico e biofísico das macas de emergência e transporte de cuidados intensivos visa diminuir a resistência mecânica e o esforço do enfermeiro em deslocamentos longos entre enfermarias e blocos operatórios."
  },
  {
    "id": 1154,
    "topicId": 1,
    "question": "Ao empurrar uma cadeira de banho com um doente num piso com resíduos de sabão, o que acontece à força de atrito das sapatas de borracha e rodas?",
    "options": [
      "A solução de água e sabão atua como um lubrificante químico que diminui drasticamente o coeficiente de atrito μ, aumentando criticamente o perigo de deslizamento descontrolado e queda.",
      "O sabão endurece o piso tornando-o infinitamente aderente.",
      "A gravidade local diminui impedindo qualquer queda.",
      "O doente perde peso instantaneamente."
    ],
    "correctIndex": 0,
    "explanation": "Substâncias surfactantes e tensoativas reduzem a tensão superficial e formam filmes líquidos escorregadios entre as superfícies de borracha e o piso cerâmico, reduzindo o coeficiente de atrito para valores perigosamente baixos.",
    "distractorAnalysis": [
      "Opção B inverte o efeito lubrificante amplamente conhecido do sabão.",
      "Opções C e D violam as leis da conservação de massa e gravitação."
    ],
    "nursingApplication": "Na prestação de cuidados de higiene no duche (banho de cadeira), o enfermeiro garante que o piso é mantido enxaguado e livre de espuma de sabão acumulada, mantendo os travões da cadeira acionados durante a lavagem."
  },
  {
    "id": 1155,
    "topicId": 1,
    "question": "Um enfermeiro observa que um doente hemiplégico no leito tem a perna parética em rotação externa contínua, com a face lateral do maléolo a sofrer atrito constante no lençol. Que dispositivo simples resolve este problema mecânico?",
    "options": [
      "Um rolo de posicionamento ou almofada de espuma sob o trocânter maior (coxim trocantérico) para manter o alinhamento neutro e descarregar o maléolo.",
      "Um peso de 10 kg amarrado ao pé.",
      "Aplicação de cola cirúrgica na pele do maléolo contra o lençol.",
      "Imobilização da perna com arame de aço."
    ],
    "correctIndex": 0,
    "explanation": "A rotação externa passiva decorre da flacidez muscular pós-AVC. O uso de um coxim de espuma firme colocado sob o trocânter maior aplica uma força de contenção mecânica suave que impede a rotação do fémur, eliminando o atrito do maléolo peroneal contra o lençol.",
    "distractorAnalysis": [
      "Opções B, C e D descrevem intervenções iatrogénicas danosas e absurdas."
    ],
    "nursingApplication": "O posicionamento preventivo de doentes neurológicos acamados com recurso a coxins trocantéricos e protetores de calcanhar é uma intervenção autónoma de enfermagem que previne escaras por atrito e deformidades articulares permanentes em flexão."
  },
  {
    "id": 1156,
    "topicId": 1,
    "question": "A grandeza física Pressão Mecânica (P) é definida rigorosamente como:",
    "options": [
      "A força exercida perpendicularmente por unidade de área de superfície (P = F / A), expressa em Pascal (Pa = N/m²) no Sistema Internacional.",
      "A quantidade total de sangue bombeada pelo coração por minuto.",
      "O produto da força aplicada pelo comprimento do membro anatómico.",
      "A massa corporal multiplicada pela temperatura cutânea."
    ],
    "correctIndex": 0,
    "explanation": "Pressão é a razão entre a força normal compressiva aplicada e a área sobre a qual essa força se distribui (P = F / A). Um Pascal equivale à pressão exercida por uma força de 1 Newton distribuída uniformemente por uma área de 1 metro quadrado (1 Pa = 1 N/m²).",
    "distractorAnalysis": [
      "Opção B é a definição de Débito Cardíaco (DC = VS × FC).",
      "Opção C é a fórmula de Momento de uma força (Torque = F · d).",
      "Opção D é uma combinação sem significado dimensional válido."
    ],
    "nursingApplication": "Compreender a definição de pressão P = F / A é a pedra basilar da prevenção de úlceras por pressão em enfermagem: para o mesmo peso corporal F, quanto menor for a área de contacto A, maior será a pressão mecânica local sobre os capilares."
  },
  {
    "id": 1157,
    "topicId": 1,
    "question": "Qual é a equivalência numérica aproximada entre a unidade milímetro de mercúrio (mmHg), tradicionalmente utilizada na medicina, e a unidade Pascal (Pa) do SI?",
    "options": [
      "1 mmHg ≈ 133,3 Pa",
      "1 mmHg = 1 Pa",
      "1 mmHg = 1000 Pa",
      "1 mmHg = 0,001 Pa"
    ],
    "correctIndex": 0,
    "explanation": "A pressão exercida por uma coluna de 1 mm de mercúrio (densidade ρ_Hg = 13.595 kg/m³) sob gravidade padrão (g = 9,80665 m/s²) é dada por P = ρ · g · h = 13595 × 9,80665 × 0,001 m ≈ 133,322 Pa. Logo, 1 mmHg ≈ 133,3 Pa.",
    "distractorAnalysis": [
      "Opção B ignora a densidade elevada do mercúrio (13,6 vezes superior à da água).",
      "Opções C e D erram grosseiramente a escala de conversão barométrica."
    ],
    "nursingApplication": "A conversão entre mmHg e Pa é fundamental para o enfermeiro comparar medições de pressões fisiológicas (PA de 120 mmHg ≈ 16 kPa) com especificações de pressão de tecidos e colchões de alívio hospitalares dadas em quilopascais (kPa)."
  },
  {
    "id": 1158,
    "topicId": 1,
    "question": "De acordo com os estudos fisiológicos clássicos de Eugene Landis sobre a microcirculação humana, qual é o valor médio da Pressão de Oclusão Capilar Arteriolar normal no leito vascular cutâneo?",
    "options": [
      "Cerca de 32 mmHg (aproximadamente 4,3 kPa).",
      "Cerca de 120 mmHg (aproximadamente 16 kPa).",
      "Cerca de 2 mmHg (aproximadamente 0,27 kPa).",
      "Cerca de 300 mmHg (aproximadamente 40 kPa)."
    ],
    "correctIndex": 0,
    "explanation": "No extremo arteriolar dos capilares cutâneos, a pressão hidrostática sanguínea é de cerca de 32 mmHg (e de ~12 mmHg no extremo venular). Se uma pressão mecânica externa exercida pelo colchão exceder este limiar de 32 mmHg de forma sustentada, os capilares colapsam mecanicamente, interrompendo a perfusão tecidual.",
    "distractorAnalysis": [
      "Opção B é a pressão arterial sistólica central nas grandes artérias elásticas.",
      "Opção C é a pressão nas grandes veias cavas centrais.",
      "Opção D representa pressões cavitárias extremas incompatíveis com a integridade capilar."
    ],
    "nursingApplication": "O limiar de Landis de 32 mmHg é a referência universal que orienta o enfermeiro na avaliação do risco de escaras: qualquer superfície dura que gere pressões pontuais de contacto superiores a 32 mmHg causa anóxia celular se o doente não for reposicionado periodicamente."
  },
  {
    "id": 1159,
    "topicId": 1,
    "question": "O que sucede fisiopatologicamente aos tecidos moles (pele, tecido celular subcutâneo e músculo) quando uma pressão mecânica externa de 60 mmHg atua continuamente durante mais de 2 horas sobre a região sagrada de um doente acamado?",
    "options": [
      "Ocorre colapso capilar arteriolar e venoso completo, cessação da microcirculação local (isquemia), anóxia celular profunda, acumulação de catabolitos ácidos tóxicos e necrose tecidual irreversível.",
      "Aumenta a oxigenação celular e regenera os fibroblastos.",
      "A pele ganha resistência mecânica e imunidade bacteriana permanente.",
      "O fluxo linfático duplica de velocidade desintoxicando o sacro."
    ],
    "correctIndex": 0,
    "explanation": "Pressões de 60 mmHg excedem em quase 100% o limiar capilar de 32 mmHg. A oclusão vascular prolongada priva as células de oxigénio e glicose, esgotando o ATP intracelular. Se o suprimento sanguíneo não for restabelecido dentro do limiar de tolerância tecidual (~2 horas), ocorre apoptose e necrose celular, iniciando uma úlcera por pressão.",
    "distractorAnalysis": [
      "Opções B, C e D contradizem a fisiologia básica da isquemia e hipóxia celular tecidual."
    ],
    "nursingApplication": "A regra de ouro de enfermagem do 'reposicionamento e alternância de decúbitos a cada 2 horas' baseia-se diretamente neste limiar biofísico e temporal de isquemia: aliviar a pressão antes que o dano celular anóxico se torne irreversível."
  },
  {
    "id": 1160,
    "topicId": 1,
    "question": "Um doente de 60 kg (peso P ≈ 600 N) apoia grande parte do peso na proeminência óssea do sacro numa área pequena de apenas 10 cm² (0,001 m²). Qual é a pressão mecânica local exercida sobre o tecido sacrococcígeo?",
    "options": [
      "P = F / A = 600 N / 0,001 m² = 600.000 Pa (cerca de 4500 mmHg, um valor avassaladoramente superior ao limiar capilar de 32 mmHg).",
      "P = 60 Pa (cerca de 0,45 mmHg).",
      "P = 6 N/m².",
      "P = 0,001 Pa."
    ],
    "correctIndex": 0,
    "explanation": "Calculando a pressão: P = 600 N / 0,001 m² = 600.000 Pa = 600 kPa. Convertendo para mmHg (dividindo por 133,3 Pa/mmHg): 600.000 / 133,3 ≈ 4501 mmHg! Esta concentração focal monstruosa esmaga completamente a microvasculatura contra o plano rígido do osso sacro.",
    "distractorAnalysis": [
      "Opções B, C e D cometem erros grosseiros de unidades e de conversão de área (1 cm² = 0,0001 m², logo 10 cm² = 0,001 m²)."
    ],
    "nursingApplication": "Este cálculo biofísico impressionante demonstra ao estudante de enfermagem porque é que doentes desnutridos ou caquéticos (com proeminências ósseas pontiagudas e sem almofada de gordura subcutânea) desenvolvem úlceras por pressão sacras de Grau 3 e 4 com extrema facilidade."
  },
  {
    "id": 1161,
    "topicId": 1,
    "question": "Se o mesmo doente de 600 N for deitado num colchão hospitalar de redistribuição que espalha a força de contacto de forma uniforme por uma grande área de 0,6 m² (6000 cm²), qual passa a ser a pressão média exercida?",
    "options": [
      "P = 600 N / 0,6 m² = 1000 Pa (cerca de 7,5 mmHg, amplamente abaixo do limiar capilar de 32 mmHg).",
      "P = 60.000 Pa.",
      "P = 100 mmHg.",
      "P = 0 Pa."
    ],
    "correctIndex": 0,
    "explanation": "Ao aumentar a área de suporte de 0,001 m² para 0,6 m² (aumento de 600 vezes!), a pressão diminui 600 vezes: P = 600 N / 0,6 m² = 1000 Pa. Convertendo para mmHg: 1000 / 133,3 ≈ 7,5 mmHg. Com 7,5 mmHg, a perfusão capilar arteriolar e venular faz-se sem qualquer obstrução.",
    "distractorAnalysis": [
      "Opção B multiplicaria em vez de dividir pela área.",
      "Opção C erra a conversão por um fator de mais de 10.",
      "Opção D viola a conservação de força; o peso continua presente e a ser suportado."
    ],
    "nursingApplication": "Esta é a prova matemática da biofísica médica: os colchões especiais não 'anulam' o peso do doente (o peso de 600 N é o mesmo), mas aumentam a área de contacto A, fazendo a pressão P cair abaixo da pressão capilar e salvando o tecido da isquemia."
  },
  {
    "id": 1162,
    "topicId": 1,
    "question": "Quais são as principais proeminências ósseas do corpo humano que concentram as maiores forças normais e sofrem as maiores pressões locais no decúbito dorsal (deitado de costas)?",
    "options": [
      "Região sacrococcígea, calcâneos, omoplatas (escápulas) e proeminência occipital do crânio.",
      "Palmas das mãos, unhas e lóbulos das orelhas.",
      "Músculos gémeos e umbigo.",
      "Dentes incisivos e cartilagem nasal."
    ],
    "correctIndex": 0,
    "explanation": "No decúbito dorsal, as saliências esqueléticas onde o osso está mais próximo da pele e suporta o peso do corpo e dos membros são: o osso sacro/cóccix, os ossos calcâneos dos pés, as espinhas das escápulas e o occipital. O sacro e os calcanhares concentram a esmagadora maioria das úlceras por pressão hospitalares.",
    "distractorAnalysis": [
      "Opções B, C e D listam estruturas que não suportam carga de compressão no decúbito dorsal clássico."
    ],
    "nursingApplication": "Na inspeção diária da pele, o enfermeiro foca a atenção prioritária nestes locais anatómicos de alta pressão: inspeciona o sacro e retira os calcanhares do leito mantendo-os suspensos no ar com recurso a almofadas sob a tíbia ('flutuação de calcanhares')."
  },
  {
    "id": 1163,
    "topicId": 1,
    "question": "Em decúbito lateral (deitado de lado), quais são os pontos anatómicos de maior concentração de pressão mecânica?",
    "options": [
      "Grande trocânter do fémur, maléolos laterais do tornozelo, côndilos femorais laterais e orelha/acrómio do ombro.",
      "Osso frontal e queixo.",
      "Linha alba abdominal.",
      "Palma do pé e tendão rotuliano."
    ],
    "correctIndex": 0,
    "explanation": "No decúbito lateral, todo o peso do membro inferior e bacia descarrega-se na pequena área óssea do grande trocânter do fémur e no maléolo lateral, gerando pressões teciduais que frequentemente ultrapassam os 100 mmHg se o posicionamento não for protegido a 30°.",
    "distractorAnalysis": [
      "Opções B, C e D indicam regiões que não recebem a carga compressiva do corpo em decúbito lateral."
    ],
    "nursingApplication": "Ao posicionar o doente em decúbito lateral, o enfermeiro adota o decúbito lateral oblíquo a 30° (e não a 90° estritos): esta inclinação descarrega a pressão para o tecido muscular glúteo, protegendo o trocânter maior de lesões ósseas profundas."
  },
  {
    "id": 1164,
    "topicId": 1,
    "question": "Qual dos tecidos anatómicos abaixo é o MAIS sensível e vulnerável ao dano isquémico por compressão mecânica de alta pressão prolongada?",
    "options": [
      "O tecido muscular estriado esquelético (que sofre necrose precoce muito antes de a pele superficial manifestar alterações visíveis).",
      "A camada córnea da epiderme.",
      "O esmalte dentário.",
      "A lâmina da unha."
    ],
    "correctIndex": 0,
    "explanation": "O músculo esquelético tem uma taxa metabólica e uma necessidade basal de oxigénio muito superiores às da epiderme e derme. Sob pressão mantida, o músculo junto ao osso necrosa ao fim de 2 horas (fenómeno de lesão 'de dentro para fora' ou lesão por pressão tissular profunda), enquanto a epiderme superficial pode manter-se intacta durante dias.",
    "distractorAnalysis": [
      "Opção B tem baixa taxa metabólica e células mortas queratinizadas resistentes à hipóxia.",
      "Opções C e D são estruturas acelulares hipermineralizadas sem irrigação sanguínea direta."
    ],
    "nursingApplication": "Este facto biológico alerta o enfermeiro: quando surge um eritema escuro persistente (púrpura) na pele do sacro, o músculo profundo subjacente já pode estar totalmente necrosado numa extensão muito superior à lesão visível na superfície."
  },
  {
    "id": 1165,
    "topicId": 1,
    "question": "Um doente idoso permanece sentado numa cadeira de rodas rígida sem almofada especial durante várias horas. Onde se concentra a esmagadora maioria da força peso do tronco e que pressão é gerada?",
    "options": [
      "Nas tuberosidades isquiáticas da bacia, podendo a pressão de contacto local atingir mais de 150 a 300 mmHg, bloqueando completamente a circulação glútea.",
      "Na ponta dos dedos dos pés.",
      "Nas clavículas e esterno.",
      "Nos ossos temporais da cabeça."
    ],
    "correctIndex": 0,
    "explanation": "Na posição sentada a 90°, cerca de 75% do peso da metade superior do corpo descarrega-se numa área minúscula de apenas 25 a 50 cm² sob as duas tuberosidades isquiáticas. As pressões registadas por manometria atingem facilmente 150 a 300 mmHg, tornando a posição sentada em cadeira comum a mais perigosa para isquemia rápida.",
    "distractorAnalysis": [
      "Opções B, C e D indicam áreas anatómicas sem sustentação de carga corporal na posição de sentado."
    ],
    "nursingApplication": "Em doentes sentados na cadeira, o protocolo de enfermagem impõe a realização de alívios de pressão temporários a cada 15 a 30 minutos (inclinando o tronco para a frente ou lateralmente durante alguns segundos) e o uso indispensável de almofadas de redistribuição viscoelásticas ou de células de ar."
  },
  {
    "id": 1166,
    "topicId": 1,
    "question": "O 'teste de digitopressão' (vitropressão) numa área de pele avermelhada sobre uma proeminência óssea avalia o 'eritema branqueável' vs 'eritema não branqueável'. Na biofísica da microcirculação, o eritema NÃO branqueável (Grau 1 de Úlcera por Pressão) indica que:",
    "options": [
      "Houve rotura mecânica das paredes dos capilares sanguíneos com extravasamento de hemácias para o tecido intersticial (micro-hemorragia tecidual), denunciando dano isquémico estrutural já instalado que não empalidece sob compressão digital.",
      "A circulação sanguínea está em perfeito estado de autorregulação.",
      "A pele sofreu uma queimadura solar grave.",
      "O doente tem excesso de cálcio plasmático."
    ],
    "correctIndex": 0,
    "explanation": "Se os capilares estiverem intactos e apenas dilatados por hiperemia reativa, a pressão digital expele o sangue dos vasos e a pele empalidece (eritema branqueável). Se o eritema NÃO empalidece (não branqueia), significa que as hemácias extravasaram para o interstício devido à necrose capilar por anóxia: é uma lesão tecidual real de Grau 1.",
    "distractorAnalysis": [
      "Opção B é refutada pela presença do extravasamento de sangue no espaço extravascular.",
      "Opções C e D introduzem diagnósticos sem relação com a compressão mecânica hospitalar."
    ],
    "nursingApplication": "Identificar precocemente o eritema não branqueável pelo teste de digitopressão permite ao enfermeiro suspender imediatamente qualquer apoio sobre essa zona e intensificar o plano de alternância postural, impedindo a progressão para úlcera aberta."
  },
  {
    "id": 1167,
    "topicId": 1,
    "question": "Um penso de espuma de poliuretano com rebordo de silicone multicamadas colocado profilaticamente na região sagrada de um doente crítico atua na biofísica da pressão:",
    "options": [
      "Redistribuindo as forças mecânicas normais sobre uma área ligeiramente mais ampla e absorvendo parte da deformação por cisalhamento, além de proteger a pele da maceração por humidade.",
      "Aumentando a pressão focal sobre o cóccix para 500 mmHg.",
      "Substituindo a necessidade de virar ou reposicionar o doente no leito.",
      "Aquecendo o osso a 45 °C para cauterizar as veias."
    ],
    "correctIndex": 0,
    "explanation": "Pensos profiláticos multicamadas agem como amortecedores biomecânicos: as várias camadas de espuma e silicone deslizam entre si, dissipando as forças de cisalhamento e atrito e distribuindo a pressão de forma mais homogénea.",
    "distractorAnalysis": [
      "Opção B agravaria o risco de lesão.",
      "Opção C é um erro clínico gravíssimo: pensos profiláticos NUNCA dispensam o reposicionamento periódico do doente!",
      "Opção D provocaria queimaduras e necrose tecidual."
    ],
    "nursingApplication": "O enfermeiro aplica pensos de silicone sacrais profiláticos em doentes de alto risco internados em UCI, inspecionando diariamente a pele por baixo do penso descolando suavemente o silicone sem lesionar a epiderme."
  },
  {
    "id": 1168,
    "topicId": 1,
    "question": "Por que razão uma agulha hipodérmica ultra-fina (ex: 30G, com diâmetro de 0,3 mm) penetra na pele quase sem dor, enquanto um cateter de grosso calibre (ex: 14G, com diâmetro de 2,1 mm) exige muito maior força?",
    "options": [
      "Porque a área da ponta afiada da agulha 30G é extremamente reduzida, fazendo com que uma força manual mínima exercida pelo enfermeiro produza uma pressão P = F / A gigantesca capaz de seccionar as fibras elásticas da derme instantaneamente.",
      "Porque a agulha 30G vibra a frequências de ultrassons que desintegram a pele.",
      "Porque as agulhas finas não contêm metal na sua constituição.",
      "Porque o cateter grosso atrai a gravidade da sala operatória."
    ],
    "correctIndex": 0,
    "explanation": "Para perfurar a derme é necessário atingir a tensão de rutura do colagénio cutâneo (tensão mecânica σ = F / A). Como a área transversal da ponta da agulha 30G é centenas de vezes menor do que a de um cateter 14G, a mesma força do enfermeiro gera uma pressão mecânica focal imensamente superior, penetrando a pele com mínimo traumatismo.",
    "distractorAnalysis": [
      "Opções B, C e D são afirmações fantásticas sem respaldo na ciência dos materiais médicos."
    ],
    "nursingApplication": "Na administração de insulina subcutânea em doentes diabéticos, o enfermeiro seleciona agulhas muito finas (31G a 32G de 4 mm): a pressão necessária para a punção é atingida com mínima força manual, proporcionando uma injeção indolor e sem hematomas."
  },
  {
    "id": 1169,
    "topicId": 1,
    "question": "Ao efetuar a punção venosa periférica para algaliação venosa, o bisel da agulha metálica deve estar sempre voltado para cima. Qual é a justificação física e biomecânica deste procedimento?",
    "options": [
      "Para que a ponta afiada em ângulo atue como uma cunha de corte progressivo, entrando no plano tecidual com menor resistência mecânica e permitindo visualizar o refluxo imediato de sangue na câmara do cateter.",
      "Para que o oxigénio do ar entre na veia antes do medicamento.",
      "Porque o bisel para baixo repele o campo magnético do sangue.",
      "Para aumentar a pressão arterial da veia puncionada para o dobro."
    ],
    "correctIndex": 0,
    "explanation": "O bisel em ângulo oblíquo voltado para cima permite abordar a veia num ângulo raso (15° a 30°): a ponta penetra e o gume lateral dilata suavemente a túnica íntima da veia sem transfixar a parede posterior do vaso.",
    "distractorAnalysis": [
      "Opção B seria uma catástrofe que provocaria embolia gasosa iatrogénica.",
      "Opções C e D são disparates físicos sem conexão com a canulação venosa."
    ],
    "nursingApplication": "O domínio da angulação do bisel e do vetor de inserção pelo enfermeiro previne a formação de hematomas venosos dolorosos e extravasamentos de medicação no tecido circundante."
  },
  {
    "id": 1170,
    "topicId": 1,
    "question": "A aplicação de garrote (torniquete de borracha) no braço do doente antes da colheita de sangue venoso deve exercer uma pressão calibrada. Qual é o objetivo biofísico dessa pressão?",
    "options": [
      "Exercer uma pressão que seja SUPERIOR à pressão venosa superficial (represando o sangue e dilatando as veias por aumento de volume), mas estritamente INFERIOR à pressão arterial sistólica (permitindo que o fluxo arterial continue a encher o membro).",
      "Bloquear completamente o fluxo arterial e venoso até o membro ficar cianótico e frio.",
      "Acelerar a coagulação do sangue para colher coágulos consistentes.",
      "Diminuir a temperatura do braço para anestesiar o trajeto venoso."
    ],
    "correctIndex": 0,
    "explanation": "O garrote funciona como uma válvula pressórica seletiva: deve aplicar cerca de 40 a 60 mmHg. Como a pressão nas veias do antebraço é de ~10-15 mmHg e a pressão arterial média é de ~90 mmHg, o sangue arterial continua a entrar no membro, mas o retorno venoso superficial é bloqueado, distendendo as veias superficiais e facilitando a punção.",
    "distractorAnalysis": [
      "Opção B descreve a aplicação de um torniquete hemostático de combate para amputações traumáticas, inadequado para punções de rotina.",
      "Opção C estragaria as amostras laboratoriais que requerem sangue não hemolisado e anticoagulado.",
      "Opção D não corresponde aos efeitos hemodinâmicos do garrote."
    ],
    "nursingApplication": "O enfermeiro nunca mantém o garrote aplicado por mais de 1 minuto consecutivo antes da punção: a estase venosa prolongada altera a permeabilidade capilar, gerando hemoconcentração e falsas elevações laboratoriais de potássio, proteínas e enzimas hepáticas."
  },
  {
    "id": 1171,
    "topicId": 1,
    "question": "Como funciona biomecanicamente um Colchão de Pressão Alternada Dinâmica (colchão pneumático de ar motorizado) na prevenção de úlceras por pressão?",
    "options": [
      "Possui múltiplas células de ar tubulares dispostas transversalmente que inflam e desinflam ciclicamente em grupos alternados a cada 10 a 15 minutos, garantindo que nenhum ponto da pele do doente sofre pressão contínua sustentada por períodos longos.",
      "Aquece o ar a 60 °C para matar as bactérias da pele do doente.",
      "Mantém todas as células com a mesma pressão fixa máxima de 200 mmHg sem qualquer variação.",
      "Faz vibrar o leito em ressonância magnética para dissolver coágulos sanguíneos."
    ],
    "correctIndex": 0,
    "explanation": "O princípio físico do colchão dinâmico é a cicloterapia de pressão: enquanto um grupo de células de ar se esvazia (pressão de contacto cai temporariamente para ~0 mmHg, permitindo a hiperemia reativa e a reperfusão dos tecidos com oxigénio fresco), o outro grupo insufla para suportar o corpo, alternando os pontos de apoio ciclicamente.",
    "distractorAnalysis": [
      "Opção B causaria queimaduras de segundo grau nos doentes.",
      "Opção C anularia a principal vantagem da pressão alternada, comportando-se como uma superfície estática dura.",
      "Opção D é uma invenção fantasiosa sem ligação à engenharia biomédica."
    ],
    "nursingApplication": "O enfermeiro verifica diariamente se o compressor motorizado do colchão pneumático está a funcionar sem alarmes de pressão baixa e se as tubuladuras de ar não estão dobradas ou ocluídas sob o estrado da cama."
  },
  {
    "id": 1172,
    "topicId": 1,
    "question": "O fenómeno de 'Bottoming Out' (afundamento excessivo ou contacto com o fundo) num colchão hospitalar ou almofada de alívio ocorre quando:",
    "options": [
      "A superfície cede em demasia sob a carga do peso do doente, fazendo com que as proeminências ósseas atinjam a base dura do estrado da cama, anulando a redistribuição de pressão e gerando picos pressóricos isquémicos devastadores.",
      "O colchão flutua no ar devido ao excesso de oxigénio.",
      "O doente é demasiado leve para comprimir a primeira camada de espuma.",
      "A cama arrefece até ao zero absoluto."
    ],
    "correctIndex": 0,
    "explanation": "'Bottoming out' é a falha mecânica de uma superfície de apoio quando a sua espessura ou pressão interna de ar é insuficiente para suportar a massa do indivíduo: a espuma comprime-se a 100% e o sacro assenta diretamente no metal rígido do leito.",
    "distractorAnalysis": [
      "Opções B, C e D são disparates físicos sem cabimento clínico."
    ],
    "nursingApplication": "O enfermeiro realiza o 'teste da mão aberta' por baixo da região sagrada do doente: insere a mão espalmada entre a base do colchão e o sacro; se sentir o peso ósseo diretamente sobre a sua mão com menos de 2,5 cm de folga, o colchão está em 'bottoming out' e precisa de ajuste imediato de pressão."
  },
  {
    "id": 1173,
    "topicId": 1,
    "question": "Uma almofada hospitalar em espuma viscoelástica ('espuma de memória' com comportamento reológico termosensível) atua na redistribuição de forças:",
    "options": [
      "Moldando-se lentamente às curvas anatómicas e proeminências ósseas sob o efeito do calor corporal e do peso, aumentando a área real de contacto e diminuindo o pico de pressão máxima.",
      "Endurecendo instantaneamente como pedra para não deixar o doente mexer-se.",
      "Acelerando a taxa metabólica dos adipócitos do tecido celular subcutâneo.",
      "Refletindo a luz infravermelha para desinfetar o lençol."
    ],
    "correctIndex": 0,
    "explanation": "Materiais viscoelásticos possuem alta resiliência e baixa histerese: deformam-se sob tensão contínua sem devolver uma força elástica elástica imediata excessiva, 'abraçando' a geometria corporal e maximizando a área A na fórmula P = F / A.",
    "distractorAnalysis": [
      "Opção B descreve um material dilatante de alta taxa de cisalhamento, oposto ao conforto viscoelástico.",
      "Opções C e D não têm suporte na ciência dos biomateriais hospitalares."
    ],
    "nursingApplication": "O enfermeiro posiciona almofadas viscoelásticas sob os membros inferiores e na cadeira de rodas de doentes em reabilitação, garantindo uma transição postural segura com alívio dos ísquios."
  },
  {
    "id": 1174,
    "topicId": 1,
    "question": "Colocar várias camadas de lençóis dobrados, resguardos impermeáveis plastificados espessos e toalhas por cima de um colchão de pressão alternada dinâmico:",
    "options": [
      "É PREJUDICIAL, porque cria um 'efeito de rede' (hammock effect) que endurece a superfície, impede o ar de moldar a pele do doente e anula a eficácia preventiva do colchão.",
      "É altamente recomendável porque quanto mais camadas, mais fofa fica a cama.",
      "Aumenta a velocidade de insuflação das células de ar em 300%.",
      "É indiferente, pois os plásticos são transparentes às forças de pressão mecânica."
    ],
    "correctIndex": 0,
    "explanation": "Múltiplas camadas de tecidos esticados e resguardos plásticos rígidos atuam como uma ponte de tensão esticada sobre o colchão: o corpo do doente assenta sobre a tensão do tecido e não sobre as células de ar alternadas, perdendo-se os benefícios da redistribuição de pressão.",
    "distractorAnalysis": [
      "Opção B é a conceção leiga errada frequentemente encontrada em enfermarias que deve ser combatida.",
      "Opções C e D ignoram a mecânica de membranas esticadas e a perda de conformabilidade superficial."
    ],
    "nursingApplication": "O enfermeiro assegura que entre o corpo do doente e o colchão especial pneumático existe apenas o lençol de baixo solto e um único resguardo transpirável de algodão, preservando a ação terapêutica do ar alternado."
  },
  {
    "id": 1175,
    "topicId": 1,
    "question": "A utilização de 'almofadas em forma de anel ou roda com orifício central' (almofadas de ferradura rígidas) para 'aliviar a dor' em úlceras sacrococcígeas é desaconselhada pelas diretrizes internacionais de enfermagem (EPUAP/NPUAP). Qual é a justificação biofísica desta proibição?",
    "options": [
      "O anel rígido concentra todo o peso do corpo num anel circular estreito de tecido em redor da lesão, gerando pressões venosas altíssimas que causam estase, edema maciço por garrote e necrose por estrangulamento da circulação concêntrica.",
      "Porque o tecido do anel atrai bactérias patogénicas por eletrostática.",
      "Porque a almofada em anel diminui a pressão arterial sistémica em 40%.",
      "Porque a cor da almofada em anel deprime psicologicamente o doente."
    ],
    "correctIndex": 0,
    "explanation": "Almofadas de anel (antigamente chamadas 'boias') funcionam como um garrote circular: a periferia do anel suporta pressões brutais que ocluem as veias e vasos linfáticos de drenagem, provocando edema congestivo grave e necrose tecidual no centro do orifício.",
    "distractorAnalysis": [
      "Opções B, C e D são justificações absurdas sem fundamento biomecânico ou patológico."
    ],
    "nursingApplication": "O enfermeiro bane terminantemente o uso de boias ou almofadas de anel na enfermaria, substituindo-as por superfícies contínuas de redistribuição de carga viscoelásticas ou pneumáticas que não estrangulam a microcirculação."
  },
  {
    "id": 1176,
    "topicId": 1,
    "question": "Numa almofada de alívio de pressão com células de ar intercomunicantes (ex: tipo Roho), o princípio físico subjacente baseia-se na Lei de Pascal para fluidos, que postula:",
    "options": [
      "A pressão aplicada a um fluido confinado e incompressível é transmitida integral e uniformemente em todas as direções e a todos os pontos do fluido e das paredes do recipiente.",
      "A energia não se cria nem se destrói, apenas se transforma.",
      "O calor flui espontaneamente de corpos frios para corpos quentes.",
      "A aceleração dos fluidos é inversamente proporcional à pressão de vapor."
    ],
    "correctIndex": 0,
    "explanation": "Pelo Princípio de Pascal (1653), numa almofada de células de ar conectadas entre si, quando um ponto mais saliente (como a tuberosidade isquiática) afunda numa célula, o ar desloca-se livremente para as células vizinhas até que a pressão interna em todas as células seja rigorosamente idêntica em toda a área de apoio.",
    "distractorAnalysis": [
      "Opção B é a 1.ª Lei da Termodinâmica.",
      "Opção C inverte a 2.ª Lei da Termodinâmica.",
      "Opção D mistura conceitos cinemáticos com equilíbrio hidrostático."
    ],
    "nursingApplication": "Almofadas tipo Roho baseadas na Lei de Pascal são o padrão-ouro prescrito pelo enfermeiro de reabilitação para doentes lesados medulares em cadeira de rodas, garantindo a equalização da pressão em todas as faces dos glúteos e coxas."
  },
  {
    "id": 1177,
    "topicId": 1,
    "question": "A calibragem correta da pressão de ar de uma almofada Roho para um doente sentado exige que a distância entre a tuberosidade isquiática do doente e a base rígida da cadeira seja de:",
    "options": [
      "Cerca de 1,5 a 2,5 cm (garantindo flutuação de ar sem afundamento total nem sobreinsuflação rígida).",
      "Exatamente 0 cm (contacto total com a madeira).",
      "Pelo menos 50 cm para manter o doente elevado no ar.",
      "Independente de qualquer distância de folga."
    ],
    "correctIndex": 0,
    "explanation": "Se a almofada for excessivamente insuflada, comporta-se como um balão rígido com alta pressão e pequena área de contacto; se for pouco insuflada, ocorre 'bottoming out'. A folga ideal de segurança hidrostática de 1,5 a 2,5 cm é verificada manualmente pelo enfermeiro.",
    "distractorAnalysis": [
      "Opção B descreve 'bottoming out' lesivo.",
      "Opção C criaria instabilidade postural perigosa com risco de queda.",
      "Opção D ignora a biofísica da sustentação pneumática de fluidos."
    ],
    "nursingApplication": "O enfermeiro ensina o doente paraplégico e o cuidador familiar a verificar semanalmente a calibragem da almofada com a bomba de insuflação manual, prevenindo úlceras isquiáticas crónicas de difícil encerramento."
  },
  {
    "id": 1178,
    "topicId": 1,
    "question": "Uma 'cama de ar fluidificado' (com microesferas de silicone ou vidro aquecidas e atravessadas por fluxo de ar quente contínuo) comporta-se biofisicamente como:",
    "options": [
      "Um líquido denso sob o princípio de Arquimedes, permitindo ao doente flutuar de forma que a pressão de contacto em qualquer ponto da pele seja sempre inferior a 10 a 15 mmHg.",
      "Uma rocha maciça de sustentação esquelética.",
      "Uma câmara hiperbárica de oxigénio gasoso a alta pressão.",
      "Um campo eletromagnético de levitação supercondutora."
    ],
    "correctIndex": 0,
    "explanation": "Quando o ar é forçado através de milhões de microesferas de vidro revestidas a silicone, o meio sólido ganha propriedades reológicas de líquido (fluidização). O corpo do doente flutua de acordo com o Princípio de Arquimedes: o peso é suportado pelo impulso hidrostático distribuído por metade da área corporal total, fazendo a pressão descer para valores mínimos (~10 mmHg).",
    "distractorAnalysis": [
      "Opções B, C e D descrevem tecnologias diferentes ou inventadas sem relação com camas fluidificadas."
    ],
    "nursingApplication": "Camas de ar fluidificado são utilizadas em enfermarias de queimados e unidades de cirurgia plástica reconstrutiva no pós-operatório imediato de grandes retalhos miocutâneos ou transplantes de pele para garantir perfusão microvascular sem qualquer compressão isquémica."
  },
  {
    "id": 1179,
    "topicId": 1,
    "question": "Os protetores de calcanhar em fibra siliconizada ou espuma viscoelástica (botas de proteção de calcâneo) devem garantir a 'flutuação do calcanhar'. Como se define biomecanicamente este conceito?",
    "options": [
      "O calcanhar fica completamente suspenso no ar livre, sem qualquer contacto com o colchão, descarregando todo o peso do membro inferior no tendão de Aquiles e na barriga da perna (gémeos)/gémeos acolchoados.",
      "O calcanhar é amarrado com força à peseira da cama.",
      "O calcanhar é comprimido contra um saco de gelo rígido.",
      "O calcanhar é mergulhado em solução antisséptica morna."
    ],
    "correctIndex": 0,
    "explanation": "Como o osso calcâneo é uma saliência pontiaguda com uma camada fina de pele e tecido adiposo pobre em vasos, o risco de escara é altíssimo. A 'flutuação de calcanhares' redistribui a carga pela área muscular carnuda da barriga da perna (gémeos), mantendo a pressão no calcâneo rigorosamente em 0 mmHg.",
    "distractorAnalysis": [
      "Opção B seria uma imobilização violenta sem base física.",
      "Opções C e D não têm relação com o alívio de cargas e aumentariam o risco de lesão tecidual."
    ],
    "nursingApplication": "O enfermeiro coloca uma almofada longitudinal por baixo dos gémeos/barriga da perna (gémeos) do doente, assegurando que os calcanhares ficam 'a flutuar no ar' sem tocar no lençol, prevenindo uma das complicações mais comuns do internamento geriátrico."
  },
  {
    "id": 1180,
    "topicId": 1,
    "question": "O uso de 'peles de carneiro' tradicionais ou coberturas de lã sintética sobre o colchão hospitalar atua principalmente:",
    "options": [
      "Reduzindo ligeiramente o atrito superficial e absorvendo a humidade da transpiração, mas sendo TOTALMENTE INEFICAZES para reduzir a pressão profunda sobre o osso sacro.",
      "Reduzindo a pressão sacrococcígea para 0 mmHg em qualquer circunstância.",
      "Substituindo os colchões pneumáticos motorizados de cuidados intensivos.",
      "Evitando qualquer tipo de infeto bacteriano no doente."
    ],
    "correctIndex": 0,
    "explanation": "A pele de carneiro reduz o atrito e a fricção superficial e controla a maceração cutânea pelo suor, mas a sua espessura colapsa rapidamente sob a força do peso corporal do doente, não tendo capacidade de redistribuição da pressão profunda (P = F / A mantém-se elevada).",
    "distractorAnalysis": [
      "Opções B e C sobrestimam perigosamente a eficácia mecânica da lã.",
      "Opção D é falsa; pelo contrário, peles naturais mal desinfetadas podem acumular bactérias."
    ],
    "nursingApplication": "O enfermeiro não se deixa iludir pela falsa sensação de maciez da pele de carneiro: ela não substitui as superfícies de redistribuição de pressão tecnológicas nem dispensa a alternância de decúbitos regular."
  },
  {
    "id": 1181,
    "topicId": 1,
    "question": "Nas superfícies estáticas de espuma de alta densidade recortada em blocos ('espuma de caixa de ovos' ou espuma recortada em castelos), os sulcos e canais entre os blocos servem biomecanicamente para:",
    "options": [
      "Permitir a deformação independente de cada bloco sob as saliências ósseas e facilitar a circulação de ar para diminuir a humidade e a temperatura da pele.",
      "Guardar medicamentos e compressas debaixo do doente.",
      "Tornar o colchão mais duro do que o cimento.",
      "Aumentar a força da gravidade nos membros superiores."
    ],
    "correctIndex": 0,
    "explanation": "O recorte em blocos de espuma permite que cada segmento se deforme isoladamente sob a carga local, reduzindo a tensão transversal de arrasto no tecido do doente e permitindo a ventilação do leito contra a maceração cutânea.",
    "distractorAnalysis": [
      "Opções B, C e D são afirmações incoerentes sem base na tecnologia de enfermagem."
    ],
    "nursingApplication": "Colchões de espuma recortada de alta resiliência são indicados para doentes de baixo a médio risco de úlceras por pressão, garantindo conforto e redução de pressões estáticas a um custo acessível para os serviços hospitalares."
  },
  {
    "id": 1182,
    "topicId": 1,
    "question": "A umidade e a maceração cutânea causadas por incontinência urinária ou fecal e sudorese profusa atuam em sinergia com a pressão mecânica. Qual é o mecanismo biofísico deste agravamento?",
    "options": [
      "A água em excesso fragiliza as junções intercelulares da queratina na epiderme, aumentando a permeabilidade e tornando a pele 5 vezes mais vulnerável ao descolamento por atrito e à isquemia por compressão.",
      "A urina transforma o colagénio em osso compacto.",
      "O suor evapora arrefecendo a pele até ao congelamento.",
      "A humidade aumenta a massa óssea do sacro em 300%."
    ],
    "correctIndex": 0,
    "explanation": "A hiper-hidratação crónica (maceração) da epiderme dissolve os lípidos intercelulares do estrato córneo e quebra as pontes de queratina. A pele macerada perde a sua resistência elástica de tração, rompendo-se com pressões e fricções mecânicas muito mais baixas do que a pele saudável e seca.",
    "distractorAnalysis": [
      "Opções B, C e D introduzem alterações biológicas absurdas."
    ],
    "nursingApplication": "O enfermeiro implementa rotinas rigorosas de higiene perineal após episódios de eliminação, seca a pele suavemente sem esfregar e aplica cremes barreira à base de óxido de zinco ou dimeticone para isolar a pele da humidade agressiva."
  },
  {
    "id": 1183,
    "topicId": 1,
    "question": "Qual é a vantagem clínica dos 'colchões de perda de ar reduzida' (Low Air Loss) em doentes diaforéticos ou com grandes feridas exsudativas?",
    "options": [
      "Fornecem um fluxo constante e suave de ar seco através de microporos na capa permeável ao vapor, gerando um microclima ideal que remove o calor e a humidade excessiva da pele enquanto redistribui as forças mecânicas.",
      "Secam a pele do doente até provocar descamação por desidratação grave.",
      "Substituem a necessidade de banho hospitalar diário.",
      "Aumentam a pressão barométrica na ferida para 2 atmosferas."
    ],
    "correctIndex": 0,
    "explanation": "Camas Low Air Loss combinam alívio pressórico pneumático com gestão ativa do microclima tecidual (controlo de temperatura e humidade superficial), eliminando a maceração e acelerando a cicatrização de escaras extensas.",
    "distractorAnalysis": [
      "Opções B, C e D deturpam os objetivos terapêuticos do controlo do microclima."
    ],
    "nursingApplication": "A prescrição de colchões Low Air Loss por enfermeiros especialistas em estomaterapia e tratamento de feridas é uma intervenção avançada que salva doentes com escaras múltiplas de Grau 4 de choques séticos fatais."
  },
  {
    "id": 1184,
    "topicId": 1,
    "question": "A densidade da espuma de um colchão hospitalar estático convencional é expressa em kg/m³. Para um doente adulto acamado, uma espuma hospitalar de qualidade para prevenção de escaras deve ter uma densidade mínima de:",
    "options": [
      "Pelo menos 30 a 35 kg/m³ (espuma de alta densidade D33 ou D35), garantindo sustentação sem deformação plástica permanente.",
      "Menos de 5 kg/m³ para ser tão macia como o ar.",
      "Mais de 500 kg/m³, equivalente à densidade do chumbo.",
      "0 kg/m³ para anular a gravidade."
    ],
    "correctIndex": 0,
    "explanation": "Espumas com densidade inferior a 30 kg/m³ (como as espumas domésticas comuns D20 a D23) cedem rapidamente sob a carga concentrada do tronco humano, provocando 'bottoming out' em poucas semanas. Densidades hospitalares entre 30 e 35 kg/m³ fornecem resiliência e suporte estável.",
    "distractorAnalysis": [
      "Opção B seria uma espuma extremamente frágil que colapsaria no primeiro minuto.",
      "Opções C e D violam a física das massas e densidades dos polímeros de poliuretano."
    ],
    "nursingApplication": "O enfermeiro gestor de serviços e comissões de feridas audita periodicamente a qualidade dos colchões do internamento: colchões que perderam a resiliência elástica (afundados e deformados) são substituídos de imediato para prevenir o aumento das taxas de úlceras na unidade."
  },
  {
    "id": 1185,
    "topicId": 1,
    "question": "Quando se utiliza um colchão pneumático de pressão alternada num doente que vai ser colocado na posição sentada (Fowler a 60° para alimentação), que ajuste técnico deve ser realizado no compressor do colchão?",
    "options": [
      "Ativar a função de 'compensação de encosto' (modo Fowler ou aumento de firmeza na secção sacra), para compensar o enorme aumento de carga focal no sacro e evitar o afundamento (bottoming out) contra o estrado metálico.",
      "Desligar completamente o compressor da tomada elétrica.",
      "Esvaziar todas as células de ar da cama.",
      "Injetar água gelada nos tubos de ar."
    ],
    "correctIndex": 0,
    "explanation": "Ao elevar o encosto da cama para 60°, o peso do tronco concentra-se brutalmente sobre a zona sacrococcígea; o modo Fowler aumenta a pressão pneumática nas células sacrais para resistir a esse aumento de carga vertical e impedir que o osso embata no estrado.",
    "distractorAnalysis": [
      "Opções B e C provocariam colapso total da almofada de ar e esmagamento tecidual.",
      "Opção D arruinaria o compressor de ar pneumático."
    ],
    "nursingApplication": "O enfermeiro programa o compressor inteligente do colchão antes de alimentar o doente, garantindo o suporte do encosto durante a refeição e revertendo para o modo de alternância dinâmico suave assim que o doente é colocado novamente na posição de repouso a 30°."
  },
  {
    "id": 1186,
    "topicId": 1,
    "question": "Na biofísica médica, como se define uma 'Força de Cisalhamento' (ou tensão tangencial de corte, shear force) aplicada a um tecido humano?",
    "options": [
      "Uma força que atua paralelamente (tangencialmente) à superfície de um plano, provocando o deslizamento relativo e a distorção angular entre as diferentes camadas anatómicas internas contíguas (pele, fáscia profunda e músculo).",
      "Uma força estritamente perpendicular que apenas comprime os tecidos contra o osso.",
      "Uma força magnética criada pelo fluxo de ferro nas hemácias.",
      "Uma força que atrai o corpo para o centro do planeta Terra."
    ],
    "correctIndex": 0,
    "explanation": "Enquanto a pressão normal comprime os tecidos perpendicularmente (90°), as forças de cisalhamento atuam no plano tangencial (paralelo): quando o esqueleto se desloca numa direção (ex: desliza cama abaixo) e a pele externa permanece retida no lençol por atrito, as camadas intermediárias sofrem deformação angular por corte.",
    "distractorAnalysis": [
      "Opção B é a definição de força normal compressiva.",
      "Opção C confunde propriedades do heme com a mecânica clássica de deformação tecidual.",
      "Opção D é a definição de força gravítica/peso."
    ],
    "nursingApplication": "O cisalhamento é a força mais destrutiva na génese de úlceras profundas: o enfermeiro sabe que cisalhamento e pressão combinados destroem tecidos a uma velocidade quatro vezes superior à da pressão isolada."
  },
  {
    "id": 1187,
    "topicId": 1,
    "question": "O que acontece aos vasos sanguíneos perfurantes da microcirculação subcutânea quando o corpo do doente sofre forças de cisalhamento?",
    "options": [
      "As arteríolas e vénulas perfurantes que atravessam a fáscia muscular em direção à pele sofrem estiramento, angulação mecânica acentuada e estrangulamento do seu lúmen, levando à trombose microvascular aguda e isquemia extensa nos tecidos profundos.",
      "Os vasos sanguíneos dilatam-se para o triplo aumentando a perfusão tecidual.",
      "As paredes dos vasos transformam-se em placas de cálcio.",
      "O sangue pára de circular nos pulmões."
    ],
    "correctIndex": 0,
    "explanation": "Os vasos perfurantes emergem dos músculos profundos e atravessam a fáscia em ângulo reto para nutrir a pele. Quando a fáscia profunda desliza em relação à derme (cisalhamento), estes vasos são dobrados e angulados como uma mangueira de jardim vincada; a oclusão mecânica do lúmen provoca trombose e isquemia maciça profunda.",
    "distractorAnalysis": [
      "Opções B, C e D contrariam a hemodinâmica microvascular sob deformação mecânica de corte."
    ],
    "nursingApplication": "Compreender que o cisalhamento 'dobra e esmaga' os vasos perfurantes no subcutâneo justifica por que razão as lesões de cisalhamento produzem bolsas subcutâneas descoladas e necrose profunda de tecidos moles antes de a epiderme superficial abrir."
  },
  {
    "id": 1188,
    "topicId": 1,
    "question": "Um doente está deitado na cama com a cabeceira elevada a 60° (posição de Fowler alta) sem qualquer suporte sob os pés ou joelhos. A gravidade puxa o esqueleto do tronco para baixo em direção aos pés da cama com grande força. Por que motivo a pele da região sacra permanece imóvel no leito?",
    "options": [
      "Porque a força de atrito estático entre a pele/resguardo e o lençol retém a pele no mesmo local do leito, enquanto o esqueleto ósseo e os músculos profundos deslizam para baixo, gerando um cisalhamento mecânico brutal nos tecidos intermediários.",
      "Porque a pele do sacro cola-se covalentemente ao lençol da cama.",
      "Porque a gravidade só atua sobre os ossos e não sobre a pele.",
      "Porque a pressão arterial no sacro é zero."
    ],
    "correctIndex": 0,
    "explanation": "A pele externa fica 'presa' no lençol devido ao atrito superficial, mas o peso do esqueleto axial (coluna e bacia) desliza plano abaixo sob a gravidade. Este desacoplamento de movimento entre a pele fixa e o osso em deslizamento produz o cisalhamento tecidual clássico no leito hospitalar.",
    "distractorAnalysis": [
      "Opção B sugere ligações químicas covalentes inexistentes entre queratina e celulose.",
      "Opção C nega a universalidade da gravidade newtoniana sobre toda a matéria com massa.",
      "Opção D não faz sentido hemodinâmico."
    ],
    "nursingApplication": "Para prevenir este cisalhamento destrutivo, as diretrizes internacionais de enfermagem recomendam que a elevação da cabeceira da cama NÃO ultrapasse os 30°, salvo contraindicações médicas formais (como risco de aspiração respiratória ou dispneia grave)."
  },
  {
    "id": 1189,
    "topicId": 1,
    "question": "Se um doente com insuficiência respiratória severa tiver obrigatoriamente de permanecer com a cabeceira elevada a 45° ou 60° para manter a ventilação pulmonar, que intervenção biofísica de enfermagem no leito anula o deslizamento e o cisalhamento no sacro?",
    "options": [
      "Elevar ligeiramente a articulação do estrado dos joelhos/pernas da cama (posição de flexão pélvica de 15 a 30°), criando um contra-apoio mecânico sob as coxas que trava o avanço da bacia para os pés do leito.",
      "Puxar os lençóis debaixo do doente a cada 5 minutos com força máxima.",
      "Colocar sacos de areia pesados sobre o tórax do doente.",
      "Manter o doente em apneia durante as transferências."
    ],
    "correctIndex": 0,
    "explanation": "Elevar a seção dos joelhos da cama motorizada transforma o plano inclinado simples num perfil ergonómico em cunha (posição de semi-Fowler articulada): o apoio inferior sob as coxas aplica uma força de reação para a cabeceira que anula a componente paralela descendente do peso corporal, impedindo a bacia de deslizar.",
    "distractorAnalysis": [
      "Opções B, C e D descrevem práticas violentas, perigosas ou asfixiantes."
    ],
    "nursingApplication": "Ao ajustar a cama elétrica articulada, o enfermeiro eleva SEMPRE a articulação dos joelhos/coxas ANTES de elevar a cabeceira: este simples cuidado mecânico impede que o doente deslize e protege os tecidos sacrais contra forças de corte."
  },
  {
    "id": 1190,
    "topicId": 1,
    "question": "Durante o reposicionamento de um doente acamado que escorregou para os pés do leito, qual é a técnica correta de enfermagem para recolocá-lo em direção à cabeceira?",
    "options": [
      "Colocar a cama na posição horizontal (ou ligeira posição de Trendelenburg se tolerado) e utilizar uma traçadeira/lençol móvel com dois enfermeiros (um de cada lado), ELEVANDO o peso do doente em sincronia antes de transladar para a cabeceira, sem nunca arrastar a pele no lençol.",
      "Puxar o doente sozinho pelos pulsos ou pelos pés arrastando-o vigorosamente no lençol.",
      "Inclinar a cabeceira a 90° e empurrar a cabeça do doente para trás.",
      "Pedir ao doente para saltar no colchão."
    ],
    "correctIndex": 0,
    "explanation": "Elevar o doente com a traçadeira separa temporariamente as superfícies em contacto, reduzindo a força normal de atrito a zero durante o deslocamento aéreo. Isto elimina em 100% o atrito abrasivo e o cisalhamento nos tecidos.",
    "distractorAnalysis": [
      "Opção B provocaria traumatismo articular nos ombros do doente e atrito/cisalhamento extremo na pele.",
      "Opções C e D são condutas perigosas e desprovidas de qualquer técnica profissional."
    ],
    "nursingApplication": "A manobra de reposicionamento com traçadeira por dois enfermeiros protege simultaneamente a pele do doente contra úlceras e a integridade articular e muscular da coluna da equipa de saúde."
  },
  {
    "id": 1191,
    "topicId": 1,
    "question": "A combinação simultânea de 'Pressão Perpendicular Elevada' com 'Força de Cisalhamento Tangencial' produz um efeito sobre o limiar isquémico celular que é:",
    "options": [
      "SINÉRGICO E MULTIPLICADOR: a presença de cisalhamento reduz a pressão mecânica necessária para colapsar os capilares para cerca de metade do valor normal, acelerando brutalmente a necrose.",
      "Antagónico: o cisalhamento neutraliza completamente a pressão.",
      "Insignificante: tecidos humanos não reagem a forças oblíquas.",
      "Protetor da barreira cutânea contra a desidratação."
    ],
    "correctIndex": 0,
    "explanation": "Estudos experimentais pioneiros de Dinsdale demonstraram que a pressão isolada requer valores muito superiores para produzir necrose; na presença concomitante de forças de cisalhamento tangenciais que distorcem os vasos, pressões tão baixas como 15 a 20 mmHg são suficientes para produzir isquemia severa e destruição celular em menos de 2 horas.",
    "distractorAnalysis": [
      "Opção B sugere uma anulação mútua impossível na mecânica tecidual.",
      "Opções C e D ignoram o efeito destrutivo amplamente documentado na literatura médica."
    ],
    "nursingApplication": "O enfermeiro avalia o risco de úlceras com escalas validadas (como a Escala de Braden): a subescala de 'Fricção e Forças de Deslizamento/Cisalhamento' tem peso determinante no score final de risco do doente."
  },
  {
    "id": 1192,
    "topicId": 1,
    "question": "Uma 'Lesão por Pressão Tissular Profunda' (DTPI - Deep Tissue Pressure Injury) caracteriza-se clinicamente por uma área localizada de pele intacta com descoloração vermelho-escura, purpúrea ou bolha hemática. A sua génese biomecânica reside:",
    "options": [
      "Em forças intensas de pressão e cisalhamento concentradas na interface profunda entre a fáscia muscular e o relevo ósseo, necrosando o músculo esquelético sob a derme aparentemente sã.",
      "Numa infeção cutânea fúngica superficial da epiderme.",
      "Numa reação alérgica ao sabão do banho.",
      "No rompimento espontâneo de folículos pilosos."
    ],
    "correctIndex": 0,
    "explanation": "A DTPI inicia-se no plano profundo osteomuscular devido à concentração extrema de deformação por cisalhamento junto às espículas do osso sacro ou ísquio. A hemorragia e a necrose muscular profunda sobem gradualmente em direção à derme, descolorando a pele sem ferida inicial aberta.",
    "distractorAnalysis": [
      "Opções B, C e D confundem processos infeciosos superficiais ou dermatites alérgicas com uma necrose isquémica compressiva profunda."
    ],
    "nursingApplication": "Ao detetar uma mancha violácea persistente e empastada à palpação no sacro de um doente (DTPI), o enfermeiro classifica-a como lesão grave, alivia a pressão a 100% de forma imediata e alerta a equipa médica para o risco de desbridamento cirúrgico iminente."
  },
  {
    "id": 1193,
    "topicId": 1,
    "question": "Na posição de Semi-Fowler recomendada para descanso no leito, qual é a angulação ideal da cabeceira da cama para conciliar a mecânica ventilatória sem induzir forças de cisalhamento lesivas no sacro?",
    "options": [
      "Angulação máxima de 30° de elevação da cabeceira.",
      "Angulação fixa de 85°.",
      "Angulação de 0° estrita com a cabeça fletida.",
      "Angulação de 180° com o tronco invertido."
    ],
    "correctIndex": 0,
    "explanation": "A elevação da cabeceira a 30° promove o rebaixamento do diafragma facilitando a ventilação e previne o refluxo gastroesofágico, mantendo a componente de deslizamento tangencial do peso (P · sen 30°) num nível suficientemente baixo que é neutralizado pela resistência natural do leito sem cisalhar a microcirculação sacra.",
    "distractorAnalysis": [
      "Opção B (85°) causaria cisalhamento devastador com doente a escorregar continuamente.",
      "Opção C (0°) pode dificultar a respiração e favorecer pneumonia por aspiração em doentes com alimentação por sonda.",
      "Opção D é uma situação absurda."
    ],
    "nursingApplication": "A regra 'Cabeceira a 30° e Decúbito Lateral Oblíquo a 30°' é a pedra angular das diretrizes mundiais de enfermagem em prevenção de úlceras por pressão em cuidados intensivos e medicina interna."
  },
  {
    "id": 1194,
    "topicId": 1,
    "question": "Ao transferir um doente dependente da cama para a cadeira de rodas com recurso a um disco giratório de transferência no chão, qual é a função mecânica deste dispositivo?",
    "options": [
      "Permitir que os pés do doente rodem suavemente em torno de um eixo vertical fixo sem sofrerem forças de torção e cisalhamento nas articulações do joelho e tornozelo ou atrito excessivo da pele dos pés no pavimento.",
      "Fazer o doente girar a 500 rotações por minuto para estimular o cerebelo.",
      "Aumentar o peso do doente para evitar que se levante.",
      "Medir a pressão arterial diastólica nas artérias pediosas."
    ],
    "correctIndex": 0,
    "explanation": "O disco de transferência possui dois pratos paralelos com rolamentos de esferas de baixíssimo atrito entre si: permite efetuar o movimento de rotação do corpo do doente com mínimo esforço e sem torcer as pernas do doente contra o chão de borracha.",
    "distractorAnalysis": [
      "Opção B seria uma manobra vertiginosa perigosa e desumana.",
      "Opções C e D não possuem qualquer fundamento na biomecânica da transferência."
    ],
    "nursingApplication": "O enfermeiro utiliza o disco giratório em doentes com capacidade residual de apoio nos membros inferiores, assegurando uma rotação segura e sem dores articulares ou abrasões cutâneas entre a cama e a poltrona."
  },
  {
    "id": 1195,
    "topicId": 1,
    "question": "O uso de ligaduras compressivas elásticas nos membros inferiores para profilaxia da trombose venosa profunda (TVP) exige um gradiente de pressão decrescente do tornozelo para a coxa. O que aconteceria se a ligadura estivesse mais apertada na coxa do que no tornozelo?",
    "options": [
      "A ligadura atuaria como um garrote na coxa, impedindo a subida do sangue venoso e provocando estase venosa maciça distal, edema grave e aumento do risco de trombose.",
      "O sangue circularia mais depressa em direção aos pulmões.",
      "A força da gravidade nos membros inferiores seria cancelada.",
      "Os ossos da tíbia absorveriam o sangue venoso."
    ],
    "correctIndex": 0,
    "explanation": "O gradiente fisiológico das meias de compressão graduada estabelece 100% da pressão no tornozelo (~18 mmHg), descendo para 70% na perna e 40% na coxa (~8 mmHg), empurrando o sangue contra a gravidade para cima. Inverter o gradiente obstrui a circulação de retorno.",
    "distractorAnalysis": [
      "Opções B, C e D contrariam a mecânica vascular e a dinâmica dos fluidos corporais."
    ],
    "nursingApplication": "Ao colocar meias elásticas antitrombo ou ligaduras elásticas em espiral, o enfermeiro mede a circunferência da perna e certifica-se de que a tensão diminui gradualmente em direção à raiz da coxa, sem rugas ou dobras apertadas."
  },
  {
    "id": 1196,
    "topicId": 1,
    "question": "As rugas e dobras no lençol de baixo da cama de um doente acamado atuam biomecanicamente como:",
    "options": [
      "Pequenos relevos rígidos que concentram a pressão e o atrito focal numa linha estreita de contacto cutâneo, aumentando a pressão mecânica local P = F / A e gerando escaras lineares de decúbito.",
      "Canais de drenagem linfática passiva.",
      "Isoladores térmicos que protegem a derme.",
      "Pontos de reflexologia que acalmam o doente."
    ],
    "correctIndex": 0,
    "explanation": "Uma dobra de lençol sob o corpo de um doente acamado suporta uma fração concentrada do peso: a área A sob a crista da dobra é minúscula, fazendo a pressão local disparar muito acima da pressão capilar e provocando escoriações ou lesões cutâneas lineares.",
    "distractorAnalysis": [
      "Opções B, C e D romantizam ou inventam efeitos benéficos inexistentes em dobras de roupa de cama hospitalar."
    ],
    "nursingApplication": "Manter o lençol de baixo da cama hospitalar rigorosamente esticado, liso, limpo e sem resíduos de migalhas ou pregas é um dos cuidados fundamentais mais nobres e eficazes da prática diária de enfermagem."
  },
  {
    "id": 1197,
    "topicId": 1,
    "question": "Um doente idoso agitado com delírio tenta continuamente sair da cama sem apoio, esfregando repetidamente os calcanhares no colchão em movimentos de flexão-extensão rápidos. Que lesão cutânea é esperada e qual a intervenção mecânica preventiva?",
    "options": [
      "Desenvolvimento de flictenas (bolhas) e descolamento dermoepidérmico por fricção abrasiva rápida nos calcanhares; a intervenção consiste na colocação de protetores acolchoados de calcanhar que absorvem o atrito.",
      "Fratura espontânea do fémur por vibração.",
      "Congelamento da pele por perda de atrito.",
      "Elevação da pressão intracraniana."
    ],
    "correctIndex": 0,
    "explanation": "O atrito mecânico contínuo da pele contra o lençol gera calor por fricção e forças tangenciais que separam a epiderme da derme (descolamento da membrana basal com formação de bolhas serosas ou hemáticas). Protetores acolchoados em espuma ou meias tubulares siliconizadas transferem o atrito para o material da bota, protegendo a pele do doente.",
    "distractorAnalysis": [
      "Opções B, C e D não têm correlação com o mecanismo biomecânico da fricção cutânea repetitiva."
    ],
    "nursingApplication": "O enfermeiro identifica o padrão motor agitado e coloca de imediato botas de proteção de calcanhar, evitando que o doente 'esfole' os calcanhares contra o lençol da cama durante o episódio de delirium."
  },
  {
    "id": 1198,
    "topicId": 1,
    "question": "A fixação de tubos orotraqueais e sondas nasogástricas com fitas adesivas deve ser vigiada atentamente. Qual é a causa biofísica das lesões e necroses de asa nasal em doentes entubados?",
    "options": [
      "A pressão mecânica contínua exercida pela rigidez do tubo plástico contra a cartilagem e pele da narina superior a 32 mmHg, provocando isquemia local e necrose da asa do nariz (lesão por pressão relacionada com dispositivos médicos).",
      "Ação bacteriana exclusiva do ar expirado.",
      "Alergia aos gases anestésicos.",
      "Reação eletromagnética da fita adesiva de papel."
    ],
    "correctIndex": 0,
    "explanation": "Lesões por pressão relacionadas com dispositivos médicos (MDRPU - Medical Device-Related Pressure Injuries) seguem exatamente a mesma biofísica de P = F / A: se o tubo rígido for fixado sob tensão forçando a cartilagem nasal contra a mucosa, a pressão ultrapassa o limiar capilar e causa necrose profunda da asa nasal com deformidade estética irreversível.",
    "distractorAnalysis": [
      "Opções B, C e D atribuem a lesão a causas microbianas, imunológicas ou magnéticas, ignorando a compressão isquémica direta provocada pelo tubo plástico."
    ],
    "nursingApplication": "O enfermeiro inspeciona a mucosa nasal e o lábio a cada turno, alterna o ponto de contacto do tubo endotraqueal ou sonda nasogástrica entre a narina esquerda e direita e utiliza fixadores acolchoados para distribuir a força de retenção sem pressão focal na cartilagem."
  },
  {
    "id": 1199,
    "topicId": 1,
    "question": "Ao utilizar meias de compressão pneumática intermitente sequencial nos membros inferiores no perioperatório cirúrgico, o equipamento insufla câmaras de ar de forma ritmada de distal para proximal. Qual é o fundamento biofísico deste sistema?",
    "options": [
      "Mimetizar a bomba muscular da barriga da perna (gémeos), gerando ondas de pressão que ordenham o sangue venoso profundo em direção ao coração, aumentando a velocidade do fluxo e prevenindo a estase e a formação de trombos.",
      "Aquecer a tíbia para acelerar a cicatrização do osso.",
      "Comprimir os nervos motores para imobilizar as pernas durante a anestesia.",
      "Aumentar o atrito do membro com a mesa operatória."
    ],
    "correctIndex": 0,
    "explanation": "Durante anestesia geral profunda, os músculos estão paralisados e a bomba venosa muscular natural está inativa. As mangas pneumáticas aplicam pressões pulsáteis crescentes (de ~45 mmHg no tornozelo a ~30 mmHg na coxa) que empurram o sangue venoso estagnado nas veias tibiais e poplíteas para a veia femoral, prevenindo a trombose venosa profunda (TVP).",
    "distractorAnalysis": [
      "Opções B, C e D deturpam os efeitos hemodinâmicos preventivos da compressão pneumática sequencial."
    ],
    "nursingApplication": "O enfermeiro do bloco operatório e do recobro coloca as mangas de compressão sequencial antes da indução anestésica e confirma o funcionamento das pressões de insuflação do compressor durante cirurgias prolongadas de grande porte."
  },
  {
    "id": 1200,
    "topicId": 1,
    "question": "A síntese biofísica do Tópico 1 demonstra que a mecânica das forças, as Leis de Newton e o equilíbrio de pressões não são meras fórmulas abstratas, mas sim a base operacional diária da segurança do doente. Qual é a principal responsabilidade autónoma do enfermeiro perante estes princípios?",
    "options": [
      "Aplicar o conhecimento das grandezas vetoriais, atrito, pressão e cisalhamento em cada procedimento diário, gerindo os posicionamentos, as superfícies de apoio e a mobilização com rigor científico para anular as forças isquémicas destrutivas e salvaguardar a integridade tecidual e funcional da pessoa cuidada.",
      "Decorar as fórmulas apenas para os exames e esquecê-las na prática clínica.",
      "Substituir todos os equipamentos de alívio de pressão por repouso absoluto no chão.",
      "Deixar que o doente descubra sozinho a melhor forma de se posicionar no leito."
    ],
    "correctIndex": 0,
    "explanation": "A integração da biofísica newtoniana nos cuidados de enfermagem transforma a ciência mecânica em humanização e competência clínica: o enfermeiro que compreende as leis de Newton e a biofísica da pressão previne ativamente lesões por pressão graves, quedas traumáticas e acidentes hospitalares, promovendo uma recuperação rápida, segura e com dignidade para o doente.",
    "distractorAnalysis": [
      "Opções B, C e D são atitudes antiéticas, negligentes ou inadequadas que contrariam o perfil profissional de um enfermeiro diplomado."
    ],
    "nursingApplication": "Esta questão coroa o Tópico 1 da formação de Biofísica Médica no 1.º Ano de Enfermagem: a competência científica em mecânica das forças é um alicerce inseparável da excelência clínica e da arte de cuidar com segurança máxima em qualquer contexto de saúde."
  }
];
