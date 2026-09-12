/**
 * Banco de Perguntas Científicas - Biofísica para Enfermagem (1º Ano)
 * Conteúdo estritamente alinhado com o Programa da Unidade Curricular.
 *
 * Cada questão contém:
 * - id: Identificador único
 * - topicId: ID do tópico (1 a 8)
 * - question: Enunciado claro e cientificamente rigoroso
 * - options: Array com exatamente 4 opções de resposta
 * - correctIndex: Índice da resposta correta (0 a 3)
 * - explanation: Justificação científica detalhada da opção correta
 * - distractorAnalysis: Explicação do porquê de cada distrator estar incorreto
 * - nursingApplication: Aplicação clínica direta à prática diária de Enfermagem
 */

const TOPICS_DATA = [
  {
    id: 1,
    title: "Força, Estado de Equilíbrio e Equilíbrio de Forças",
    shortTitle: "Força e Equilíbrio",
    icon: "⚖️",
    description: "Leis de Newton, vetores de força, condições de repouso/MRU e biofísica da pressão na prevenção de úlceras por pressão."
  },
  {
    id: 2,
    title: "Alavancas, Elasticidade dos Corpos e Resistência dos Materiais",
    shortTitle: "Alavancas e Elasticidade",
    icon: "📐",
    description: "Classes de alavancas anatómicas, vantagem mecânica, Lei de Hooke, Módulo de Young e comportamento reológico."
  },
  {
    id: 3,
    title: "Aplicação da Elasticidade e Resistência ao Sistema Osteomuscular",
    shortTitle: "Sistema Osteomuscular",
    icon: "🦴",
    description: "Composição bifásica do osso (hidroxiapatite vs colagénio), solicitações mecânicas, fratura do fémur e bioenergética muscular."
  },
  {
    id: 4,
    title: "Hidrodinâmica e Aplicações ao Sistema Circulatório",
    shortTitle: "Hidrodinâmica Circulatória",
    icon: "❤️",
    description: "Regimes laminar e turbulento, Número de Reynolds, viscosidade/hematócrito, Lei de Poiseuille e génese dos ruídos de Korotkoff."
  },
  {
    id: 5,
    title: "Radiações, Raios X, Aplicações Terapêuticas e Diagnóstico",
    shortTitle: "Radiações e Raios X",
    icon: "☢️",
    description: "Natureza dos Raios X, efeitos biológicos ionizantes, meios imagiológicos e princípios de radioproteção (ALARA) em enfermagem."
  },
  {
    id: 6,
    title: "Núcleo Atómico e Propriedades das Forças Nucleares",
    shortTitle: "Núcleo e Forças Nucleares",
    icon: "⚛️",
    description: "Estrutura nuclear, força nuclear forte vs repulsão eletrostática, estabilidade atómica e energia de ligação nuclear."
  },
  {
    id: 7,
    title: "Partículas α, β e Radiações Gama",
    shortTitle: "Partículas α, β e Gama",
    icon: "🛡️",
    description: "Poder de penetração e ionização de emissões alfa, beta e gama, tipos de blindagem e medidas de segurança clínica."
  },
  {
    id: 8,
    title: "Isótopos, Isóbaros, Isótonos e Aplicações Terapêuticas",
    shortTitle: "Isótopos e Terapêutica",
    icon: "💊",
    description: "Famílias nucleares, radioisótopos em medicina nuclear (I-131, Tc-99m, F-18) e cuidados de enfermagem com radiofármacos."
  }
];

const QUESTIONS_DATA = [
  // ==========================================
  // TÓPICO 1: FORÇA, ESTADO DE EQUILÍBRIO E EQUILÍBRIO DE FORÇAS
  // ==========================================
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

  // ==========================================
  // TÓPICO 2: ALAVANCAS, ELASTICIDADE E RESISTÊNCIA DOS MATERIAIS
  // ==========================================
  {
    id: 201,
    topicId: 2,
    question: "No corpo humano, os sistemas ósseos e articulares funcionam como alavancas mecânicas. Qual é a configuração anatómica e funcional que define uma alavanca de 1.ª classe (ou interfixa)?",
    options: [
      "O ponto de apoio (fulcro) situa-se entre o ponto de aplicação da força potente e o ponto da força resistente.",
      "A força resistente situa-se entre o ponto de apoio e a força potente.",
      "A força potente situa-se entre o ponto de apoio e a força resistente.",
      "A força potente e a força resistente encontram-se sempre aplicadas no mesmo ponto focal."
    ],
    correctIndex: 0,
    explanation: "Uma alavanca de 1.ª classe (interfixa) é caracterizada pelo ponto de apoio (fulcro) posicionado entre a força potente (potência) e a força resistente (resistência). Um exemplo clássico no corpo humano é a articulação atlanto-occipital, onde os músculos da nuca (potência) sustentam o peso da cabeça (resistência) sobre as vértebras cervicais (ponto de apoio).",
    distractorAnalysis: [
      "Opção B descreve a alavanca de 2.ª classe (inter-resistente), como a flexão plantar ao elevar o corpo na ponta dos pés.",
      "Opção C descreve a alavanca de 3.ª classe (interpotente), como o bicípite braquial ao fletir o antebraço sobre o cotovelo.",
      "Opção D é fisicamente impossível numa alavanca, pois anularia a distância entre os braços de força."
    ],
    nursingApplication: "Em doentes sedados, inconscientes ou com lesão medular cervical, os músculos extensores da nuca deixam de exercer a força potente na alavanca interfixa da cabeça. A cabeça tende a fletir anteriormente pelo próprio peso, podendo ocluir a via aérea superior. O enfermeiro deve garantir a correta manutenção e alinhamento da via aérea."
  },
  {
    id: 202,
    topicId: 2,
    question: "A grande maioria das articulações motoras do corpo humano, como a flexão do cotovelo pelo músculo bicípite braquial, funciona como alavancas de 3.ª classe (interpotentes). Qual é a principal consequência biofísica deste arranjo musculoesquelético?",
    options: [
      "Apresentam sempre uma grande vantagem mecânica de força, exigindo do músculo uma força muito menor que o peso da carga.",
      "Têm desvantagem mecânica de força (o músculo gera uma força muito maior que a carga externa), mas ganham enorme amplitude e velocidade de movimento na extremidade.",
      "Não permitem qualquer movimento angular, funcionando apenas como estruturas de rigidez pura.",
      "A força muscular exercida é rigorosamente igual à carga erguida dividida pelo Módulo de Young dos ossos."
    ],
    correctIndex: 1,
    explanation: "Nas alavancas interpotentes (3.ª classe), a potência está entre o fulcro e a resistência. Como o braço de potência (distância do músculo à articulação) é muito menor que o braço de resistência (distância da carga à articulação), a vantagem mecânica é menor que 1 (VM < 1). O músculo necessita de gerar uma força muito superior ao peso da carga, mas um pequeno encurtamento muscular traduz-se num grande e rápido deslocamento da mão.",
    distractorAnalysis: [
      "Opção A confunde com as alavancas de 2.ª classe, que possuem vantagem mecânica de força superior a 1.",
      "Opção C é absurda, pois as alavancas articulares existem precisamente para permitir movimento angular esquelético.",
      "Opção D mistura conceitos sem sentido físico, pois o Módulo de Young avalia elasticidade material e não o equilíbrio de momentos da alavanca."
    ],
    nursingApplication: "Saber que o sistema muscular opera com desvantagem mecânica de força alerta o enfermeiro para a magnitude das forças internas: ao erguer uma carga de apenas 10 kg na mão com os braços estendidos, as forças de tração no músculo e as forças de compressão na articulação podem ultrapassar os 1000 N, aumentando o risco de lesões tendinosas."
  },
  {
    id: 203,
    topicId: 2,
    question: "A Lei Fundamental da Elasticidade (Lei de Hooke) estabelece que, dentro do limite de proporcionalidade elástica de um material, a tensão aplicada (σ) é diretamente proporcional à:",
    options: [
      "Deformação relativa sofrida pelo corpo (ε), sendo a constante de proporcionalidade o Módulo de Young (E).",
      "Velocidade de escoamento das moléculas que constituem o fluido circundante.",
      "Massa volúmica do material dividida pelo volume total.",
      "Aceleração da gravidade multiplicada pelo tempo de aplicação da força."
    ],
    correctIndex: 0,
    explanation: "A Lei de Hooke para materiais sólidos em tração ou compressão uniaxial afirma que σ = E · ε, onde σ é a tensão mecânica (força por unidade de área, N/m² ou Pa), ε é a deformação relativa adimensional (ΔL / L₀) e E é o Módulo de Elasticidade Longitudinal ou Módulo de Young, característico de cada material.",
    distractorAnalysis: [
      "Opção B confunde elasticidade de sólidos de Hooke com a viscosidade de fluidos de Newton.",
      "Opção C relaciona massa e volume (massa volúmica), que é uma propriedade de densidade e não de resposta elástica à tensão.",
      "Opção D descreve termos de cinemática/gravitação sem qualquer relação com a teoria da elasticidade."
    ],
    nursingApplication: "As meias de compressão elástica graduada utilizadas na profilaxia do tromboembolismo venoso em doentes cirúrgicos baseiam-se na Lei de Hooke: o elastómero é calibrado para gerar uma tensão elástica contínua e decrescente no sentido distal-proximal, promovendo o retorno venoso sem garrotear a perna."
  },
  {
    id: 204,
    topicId: 2,
    question: "Em reologia e ciência dos materiais, o que distingue fundamentalmente um 'sólido perfeitamente elástico' de um 'corpo plástico'?",
    options: [
      "O sólido elástico nunca se deforma sob qualquer força, enquanto o corpo plástico quebra instantaneamente.",
      "O sólido elástico recupera totalmente as suas dimensões e forma originais quando a força deformadora é removida, enquanto o corpo plástico mantém uma deformação permanente residual.",
      "O sólido elástico flui continuamente ao longo do tempo como a água, enquanto o plástico é perfeitamente rígido.",
      "O sólido elástico tem um Módulo de Young nulo e o corpo plástico tem Módulo de Young infinito."
    ],
    correctIndex: 1,
    explanation: "A elasticidade é a capacidade de um material deformado recuperar espontaneamente a sua configuração inicial após a cessação das forças externas (comportamento reversível). Já a plasticidade é a propriedade pela qual o material retém uma deformação irreversível e permanente após a remoção da carga mecânica que ultrapassou o seu limite elástico.",
    distractorAnalysis: [
      "Opção A confunde elasticidade com o modelo teórico de sólido rígido indeformável.",
      "Opção C descreve um fluido viscoso, e não um sólido elástico.",
      "Opção D inverte a lógica física: um sólido perfeitamente rígido teria E infinito, e um material sem rigidez elástica teria E nulo."
    ],
    nursingApplication: "Em ortopedia e cuidados de enfermagem ao doente com imobilização de gesso, a ligadura gessada molhada é inicialmente moldada aproveitando a sua maleabilidade plástica. Após a secagem, adquire rigidez estrutural para suportar e imobilizar a fratura óssea sem ceder elasticamente."
  },
  {
    id: 205,
    topicId: 2,
    question: "O Módulo de Young (E) do osso cortical humano é de aproximadamente 1,8 × 10¹⁰ N/m² (18 GPa), enquanto o do tecido elástico muscular ou cartilagíneo é ordens de grandeza inferior. O que significa fisicamente um material possuir um elevado Módulo de Young?",
    options: [
      "Significa que o material é muito elástico e estica facilmente mesmo com forças minúsculas.",
      "Significa que o material possui grande rigidez, exigindo tensões mecânicas muito elevadas para produzir uma pequena deformação relativa.",
      "Significa que o material é frágil e quebra espontaneamente sob qualquer pressão atmosférica.",
      "Significa que o material tem uma densidade volúmica nula."
    ],
    correctIndex: 1,
    explanation: "Como E = σ / ε, o Módulo de Young mede a rigidez elástica do material (resistência à deformação elástica). Um valor elevado de E indica que é necessária uma grande tensão σ para produzir uma pequena deformação relativa ε. Por isso, os ossos suportam o peso corporal sem sofrer encurtamentos ou deformações geométricas percetíveis.",
    distractorAnalysis: [
      "Opção A descreve um material de alta complacência (baixo módulo de Young, como a borracha ou a elastina).",
      "Opção C confunde rigidez com fragilidade; a fragilidade depende da tenacidade e da propagação de fendas, não apenas do módulo elástico.",
      "Opção D não tem base física, confundindo módulo mecânico com densidade de massa."
    ],
    nursingApplication: "Quando o enfermeiro administra mobilização passiva a um doente com contraturas ou próteses ortopédicas metálicas (titânio, E ≈ 110 GPa), deve compreender que o implante metálico é muito mais rígido que o osso circundante (E ≈ 18 GPa). Esta diferença de rigidez pode criar concentrações de tensão na interface osso-prótese caso a manipulação seja forçada de forma inadequada."
  },

  // ==========================================
  // TÓPICO 3: APLICAÇÃO DA ELASTICIDADE E RESISTÊNCIA AO SISTEMA OSTEOMUSCULAR
  // ==========================================
  {
    id: 301,
    topicId: 3,
    question: "O tecido ósseo humano é um material compósito bifásico notável pela sua resistência e leveza. Qual é a função mecânica desempenhada pela sua fase inorgânica mineral (cristais de hidroxiapatite de cálcio)?",
    options: [
      "Conferir grande flexibilidade e alta resistência às forças de tração pura.",
      "Conferir rigidez e elevada resistência às forças de compressão mecânica.",
      "Permitir que o osso se dobre a 90 graus sem sofrer qualquer fissura.",
      "Funcionar como lubrificante líquido no interior do canal medular."
    ],
    correctIndex: 1,
    explanation: "A componente inorgânica (cerca de 60-65% do peso seco do osso) é constituída primariamente por fosfato de cálcio sob a forma de cristais de hidroxiapatite [Ca₁₀(PO₄)₆(OH)₂]. Estes cristais são extremamente duros e rígidos, conferindo ao osso a sua excecional capacidade de suportar forças de compressão axial decorrentes da gravidade e contração muscular.",
    distractorAnalysis: [
      "Opção A descreve a função mecânica do colagénio (fase orgânica), que confere flexibilidade e resistência à tração.",
      "Opção C é falsa, pois um osso mineralizado é rígido; dobrar a 90° causaria fratura óssea catastrófica.",
      "Opção D é incorreta; o lubrificante articular é o líquido sinovial nas articulações, não a matriz óssea mineral."
    ],
    nursingApplication: "Na osteoporose, ocorre uma desmineralização progressiva da matriz inorgânica. Como consequência biofísica direta, a resistência do osso à compressão cai abruptamente. Isto explica porque é que em doentes idosos pequenas cargas compressivas rotineiras (como sentar-se com mais força ou tossir) podem causar fraturas por esmagamento dos corpos vertebrais."
  },
  {
    id: 302,
    topicId: 3,
    question: "Em relação aos tipos de solicitação mecânica sofridos pelos ossos longos (como o fémur ou a tíbia), sob qual das seguintes forças o osso humano apresenta MENOR resistência, fraturando com maior facilidade?",
    options: [
      "Força de compressão longitudinal ao longo do eixo do osso.",
      "Força de torção e cisalhamento transversal.",
      "Força de pressão barométrica uniforme.",
      "Força de tensão puramente gravitacional em decúbito dorsal."
    ],
    correctIndex: 1,
    explanation: "O osso é um material anisotrópico (as suas propriedades mecânicas variam consoante a direção da força). O osso cortical resiste melhor à compressão (~170-190 MPa), resiste moderadamente à tração longitudinal (~120-140 MPa) e é francamente mais frágil e vulnerável a esforços de torção e cisalhamento transversal (~50-60 MPa), nos quais as linhas de colagénio e ósteons sofrem deslizamento e rotura a tensões muito menores.",
    distractorAnalysis: [
      "Opção A é a situação de MAIOR resistência do osso longo, que evoluiu para suportar cargas de compressão axial.",
      "Opção C não gera deformação de cisalhamento ou fratura, tratando-se de uma pressão externa uniforme que o corpo tolera perfeitamente.",
      "Opção D envolve tensões mínimas sobre o esqueleto devido à descarga de peso no leito."
    ],
    nursingApplication: "Muitas fraturas espiróides da tíbia ou fémur em doentes ocorrem quando o pé fica fixo no chão enquanto o tronco e a perna sofrem uma rotação brusca (esforço de torção). Ao auxiliar um doente no levante ou marcha, o enfermeiro deve assegurar que os movimentos de rotação são efetuados em bloco para evitar esforços torcionais nos membros inferiores."
  },
  {
    id: 303,
    topicId: 3,
    question: "Do ponto de vista da resistência dos materiais e biomecânica estrutural, porque é que os ossos longos humanos (como a diáfise do fémur) são tubulares e ocos no centro, em vez de serem cilindros maciços de osso compacto?",
    options: [
      "Porque um cilindro oco tem menor resistência mecânica e dobra mais facilmente para absorver choques.",
      "Porque, para uma mesma massa óssea, a distribuição do material mais afastada do eixo central aumenta o momento de inércia da secção, conferindo muito maior resistência à flexão com peso mínimo.",
      "Porque o centro oco serve unicamente para passagem direta de ar do sistema respiratório.",
      "Porque a medula óssea no centro exerce uma pressão de vácuo que atrai os músculos adjacentes."
    ],
    correctIndex: 1,
    explanation: "Na deformação por flexão, o eixo central do osso constitui a chamada 'linha neutra' (onde a tensão de tração e compressão é nula). As tensões máximas ocorrem na periferia (superfície exterior convexa em tração, e superfície interior côncava em compressão). Colocar a matéria óssea na periferia afasta a massa do eixo neutro, maximizando o momento de inércia da secção transversal e a resistência à flexão, com um custo de peso corporal mínimo para o organismo.",
    distractorAnalysis: [
      "Opção A é errada porque a geometria tubular oca confere MAIOR rigidez à flexão para a mesma quantidade de material.",
      "Opção C confunde a anatomia dos ossos de mamíferos com a pneumatização de certas aves conectadas a sacos aéreos.",
      "Opção D é uma afirmação sem qualquer sentido biológico ou físico."
    ],
    nursingApplication: "A compreensão de que as tensões de flexão se concentram na periferia óssea é fundamental quando se avalia o risco de fratura em idosos acamados: com o desuso e a perda de massa óssea cortical perióstea, o fémur perde rapidamente a capacidade de resistir a forças de flexão provocadas por quedas acidentais no quarto hospitalar."
  },
  {
    id: 304,
    topicId: 3,
    question: "A fratura do colo do fémur é uma ocorrência clínica comum em doentes geriátricos. Que alteração microestrutural e biofísica na arquitetura óssea do idoso está mais diretamente associada a esta suscetibilidade?",
    options: [
      "Aumento maciço da quantidade de colagénio tipo I na cabeça femoral.",
      "Perda de continuidade e rarefação das trabéculas ósseas do osso esponjoso, diminuindo drasticamente a capacidade de absorção de impactos mecânicos.",
      "Aumento do Número de Reynolds no fluxo de cálcio da medula óssea.",
      "Cristalização excessiva de cloreto de sódio que torna o osso maleável como borracha."
    ],
    correctIndex: 1,
    explanation: "O colo do fémur é preenchido por osso esponjoso (trabecular) orientado ao longo das linhas principais de tensão de compressão e tração (sistema trabecular de Ward). No envelhecimento e na osteoporose, há adelgaçamento e reabsorção das trabéculas ósseas, diminuindo a densidade mineral óssea e a tenacidade à fratura. Uma queda sobre o trocânter maior gera uma carga transversal de impacto que o colo fragilizado não consegue dissipar.",
    distractorAnalysis: [
      "Opção A é falsa: na velhice a síntese de colagénio orgânico diminui, tornando o osso menos tenaz e mais frágil.",
      "Opção C aplica erroneamente o conceito de hidrodinâmica circulatória a uma matriz sólida estática.",
      "Opção D é fantasiosa: os minerais ósseos são fosfatos de cálcio/hidroxiapatite, não cloreto de sódio."
    ],
    nursingApplication: "Na prática de enfermagem, o acolhimento do doente idoso exige planos rigorosos de prevenção de quedas (iluminação adequada, calçado antiderrapante, campainha acessível, barras de apoio). Uma queda simples de altura própria num doente osteoporótico é suficiente para fraturar o colo do fémur devido a esta fragilidade trabecular."
  },
  {
    id: 305,
    topicId: 3,
    question: "Do ponto de vista bioenergético e biomecânico, qual é a principal transformação energética realizada pelo tecido muscular esquelético durante a contração ativa para produzir força e movimento?",
    options: [
      "Transformação de energia nuclear espontânea em radiação eletromagnética gama.",
      "Transformação de energia potencial elástica pura em eletricidade estática de alta voltagem.",
      "Transformação de energia química metabólica (hidrólise do ATP) em trabalho mecânico e calor.",
      "Transformação de energia gravitacional em pressão osmótica intraneural."
    ],
    correctIndex: 2,
    explanation: "O músculo esquelético é um transdutor quimiomecânico: utiliza a energia livre de Gibbs libertada pela quebra das ligações fosfato do trifosfato de adenosina (ATP -> ADP + Pi) para permitir o deslizamento dos miofilamentos de actina e miosina no sarcómero. Cerca de 20-25% desta energia química é convertida em trabalho mecânico útil (força de tração), enquanto os restantes 75-80% são dissipados como energia térmica (calor).",
    distractorAnalysis: [
      "Opção A confunde reações nucleares de radionuclídeos com o metabolismo celular bioquímico.",
      "Opção B é errada; embora existam potenciais de ação elétricos celulares (mV), estes são sinais de despolarização de membrana e não a fonte primária do trabalho mecânico de contração.",
      "Opção D não descreve a bioenergética muscular conhecida na fisiologia humana."
    ],
    nursingApplication: "Em doentes hipotérmicos no pós-operatório ou em choque, o tremor muscular (arrepios involuntários) é uma resposta termorreguladora adaptativa: o corpo ativa contrações musculares rítmicas para que os 80% de energia dissipados sob forma de calor elevem rapidamente a temperatura corporal central do doente."
  },

  // ==========================================
  // TÓPICO 4: HIDRODINÂMICA E APLICAÇÕES AO SISTEMA CIRCULATÓRIO
  // ==========================================
  {
    id: 401,
    topicId: 4,
    question: "No escoamento de um fluido real através de um conduto cilíndrico (como o sangue nos vasos sanguíneos), o que caracteriza rigorosamente o Regime Laminar?",
    options: [
      "O fluido desloca-se em lâminas ou camadas concêntricas sem mistura entre si, apresentando um perfil de velocidades parabólico com velocidade máxima no eixo central e nula junto à parede do vaso.",
      "O fluido move-se com turbilhões desordenados e todas as partículas possuem rigorosamente a mesma velocidade em todos os pontos da secção.",
      "O fluido atinge velocidade supersónica e a viscosidade anula-se completamente.",
      "O escoamento ocorre em sentido retrógrado pulsátil sem qualquer atrito entre as camadas."
    ],
    correctIndex: 0,
    explanation: "No regime laminar (ou escoamento de Poiseuille), as linhas de corrente são paralelas e as camadas microscópicas deslizam umas sobre as outras sem mistura turbulenta. Devido à adesão do fluido à parede (condição de não-deslizamento), a velocidade do fluido na parede é zero, aumentando progressivamente até atingir o valor máximo no centro do tubo, desenhando um perfil de velocidades parabólico.",
    distractorAnalysis: [
      "Opção B descreve o regime turbulento (onde há mistura e turbilhões, e o perfil médio de velocidades tende a aplanar).",
      "Opção C é fisicamente absurda para a fisiologia circulatória.",
      "Opção D é falsa; o atrito interno entre lâminas adjacentes é a própria definição de viscosidade."
    ],
    nursingApplication: "O regime laminar é o padrão normal e fisiológico na quase totalidade da rede vascular humana. É silencioso à auscultação e permite que as hemácias viajem no centro do vaso a maior velocidade, minimizando o atrito com o endotélio e poupando trabalho mecânico ao coração."
  },
  {
    id: 402,
    topicId: 4,
    question: "O Número de Reynolds (Re) é uma grandeza adimensional que prevê a transição do regime laminar para o regime turbulento (Re = (ρ · v · d) / η). Quais são os fatores que AUMENTAM a tendência para a turbulência num vaso sanguíneo?",
    options: [
      "Diminuição da velocidade do sangue, diminuição do diâmetro e aumento acentuado da viscosidade.",
      "Aumento da velocidade do sangue (v), aumento do diâmetro do vaso (d), aumento da densidade (ρ) e diminuição da viscosidade (η).",
      "Apenas o aumento da pressão arterial sistólica, independentemente do diâmetro ou da viscosidade.",
      "Aumento exclusivo da temperatura corporal para valores acima de 40 °C."
    ],
    correctIndex: 1,
    explanation: "Pela equação do Número de Reynolds, Re é diretamente proporcional à densidade do fluido (ρ), à velocidade média de escoamento (v) e ao diâmetro do vaso (d), e inversamente proporcional à viscosidade (η). Logo, velocidades elevadas, grandes calibres vasculares e baixa viscosidade elevam Re acima do limiar crítico, favorecendo o regime turbulento.",
    distractorAnalysis: [
      "Opção A descreve exatamente as condições que reduzem o Número de Reynolds e favorecem o regime laminar estável.",
      "Opção C desconsidera os termos fundamentais da equação de Reynolds desenvolvida na hidrodinâmica.",
      "Opção D ignora a equação hidrodinâmica; a temperatura afeta a viscosidade, mas não atua como variável isolada direta."
    ],
    nursingApplication: "Em doentes com anemia severa, o hematócrito desce drasticamente, reduzindo a viscosidade sanguínea (η). Como consequência da redução de η e do aumento reflexo da velocidade de escoamento (v), o Número de Reynolds sobe nos grandes vasos e válvulas cardíacas, originando 'sopros funcionais anémicos' auscultáveis pelo enfermeiro e médico, mesmo sem lesão valvular orgânica."
  },
  {
    id: 403,
    topicId: 4,
    question: "Durante a medição manual da pressão arterial com esfigmomanómetro de braçadeira e estetoscópio sobre a artéria braquial, qual é a origem biofísica dos ruídos auscultados (ruídos de Korotkoff)?",
    options: [
      "São originados pelo escoamento perfeitamente laminar do sangue que vibra de forma harmónica as paredes do vaso.",
      "São originados pela turbulência do fluxo sanguíneo (regime turbulento com formação de vórtices) à medida que o sangue é forçado através da artéria parcialmente ocluída e comprimida pela braçadeira.",
      "Resultam do choque elétrico gerado pela despolarização dos nós sinoauriculares que ressoa no estetoscópio.",
      "São ecos acústicos produzidos pela expansão dos alvéolos pulmonares adjacentes ao braço."
    ],
    correctIndex: 1,
    explanation: "Quando a braçadeira é insuflada acima da pressão sistólica, a artéria fica colapsada e não há fluxo (silêncio). À medida que a pressão desce e iguala a pressão sistólica, o sangue consegue jorrar por um orifício estreito durante a sístole a alta velocidade. Este jacto estreito e de alta velocidade atinge um Número de Reynolds elevado, entrando em regime turbulento. A turbulência produz vibrações acústicas nas paredes arteriais que são auscultadas no estetoscópio como os ruídos de Korotkoff até o vaso recuperar o calibre pleno (escoamento laminar silencioso).",
    distractorAnalysis: [
      "Opção A é falsa porque o regime laminar é inaudível e silencioso.",
      "Opção C confunde fenómenos hemodinâmicos acústicos com o eletrocardiograma (atividade elétrica miocárdica).",
      "Opção D é anatomicamente absurda e desprovida de nexo físico."
    ],
    nursingApplication: "A medição correta da pressão arterial é um procedimento basilar de enfermagem. Se o enfermeiro utilizar uma braçadeira de tamanho desadequado (ex: braçadeira demasiado estreita num doente obeso), será necessária uma pressão de insuflação superior para comprimir a artéria, criando turbulência artificial e gerando falsas leituras de hipertensão arterial."
  },
  {
    id: 404,
    topicId: 4,
    question: "A viscosidade é a propriedade física que traduz a resistência interna que um fluido oferece ao seu próprio escoamento. No sangue humano, qual é o principal componente fisiológico responsável pela sua elevada viscosidade (cerca de 3 a 4 vezes superior à da água)?",
    options: [
      "A concentração de iões sódio (Na+) dissolvidos no plasma.",
      "A fração de volume ocupada pelos glóbulos vermelhos / eritrócitos (Hematócrito).",
      "A quantidade de ureia e creatinina eliminadas pelos rins.",
      "A presença de oxigénio molecular ligado à hemoglobina."
    ],
    correctIndex: 1,
    explanation: "O sangue é um fluido não-newtoniano em suspensão. O hematócrito (percentagem do volume sanguíneo total ocupada pelos glóbulos vermelhos, normalmente ~40-45%) é o principal determinante da viscosidade do sangue inteiro. Quando o hematócrito sobe (como na policitemia ou desidratação grave), as interações e atrito entre hemácias multiplicam-se exponencialmente, elevando a viscosidade.",
    distractorAnalysis: [
      "Opção A é incorreta: o sódio influencia a osmolalidade e o volume plasmático, mas a sua contribuição direta para a viscosidade intrínseca do fluido é mínima.",
      "Opção C está incorreta: solutos de baixo peso molecular têm efeito desprezível na viscosidade macroscópica.",
      "Opção D não altera a forma ou viscosidade volumétrica global da suspensão eritrocitária."
    ],
    nursingApplication: "Em doentes com desidratação severa ou choque hipovolémico, a hemoconcentração eleva o hematócrito relativo e a viscosidade do sangue. O sangue mais viscoso escoa com maior dificuldade na microcirculação capilar periférica, agravando a isquemia e a sobrecarga de bombeamento do coração. A fluidoterapia prescrita e administrada pelo enfermeiro restaura o volume e a viscosidade fisiológica ideal."
  },
  {
    id: 405,
    topicId: 4,
    question: "Pela Lei de Poiseuille, a resistência vascular ao escoamento (R) num vaso sanguíneo é inversamente proporcional à quarta potência do raio do vaso (R ∝ 1 / r⁴). O que sucede à resistência vascular se o raio interno de uma arteríola sofrer uma vasoconstrição que reduza o seu raio para metade (r / 2)?",
    options: [
      "A resistência duplica (aumenta 2 vezes).",
      "A resistência quadruplica (aumenta 4 vezes).",
      "A resistência aumenta 16 vezes (2⁴ = 16).",
      "A resistência reduz-se a metade devido ao aumento da velocidade."
    ],
    correctIndex: 2,
    explanation: "Pela Lei de Poiseuille, R = (8 · η · L) / (π · r⁴). Se o novo raio for r' = r / 2, a nova resistência será proporcional a 1 / (r/2)⁴ = 1 / (r⁴ / 16) = 16 × (1 / r⁴). A resistência vascular aumenta 16 vezes! Esta dependência com a 4.ª potência do raio faz das arteríolas os principais reguladores da resistência periférica e da pressão arterial sistémica.",
    distractorAnalysis: [
      "Opção A assume uma dependência linear errónea (1/r).",
      "Opção B assume uma dependência quadrática errónea (1/r²), que corresponderia apenas à variação de área.",
      "Opção D inverte completamente a relação física de causa e efeito da dinâmica dos fluidos viscosos."
    ],
    nursingApplication: "Esta relação exponencial de 4.ª potência explica por que razão pequenos graus de vasoconstrição ou estenose por placas de ateroma têm repercussões clínicas gigantescas na perfusão de órgãos. Da mesma forma, quando o enfermeiro administra fármacos vasodilatadores de emergência (como nitroglicerina), um ligeiro aumento no raio arteriolar reduz exponencialmente a pós-carga cardíaca e alivia a angina."
  },

  // ==========================================
  // TÓPICO 5: RADIAÇÕES, RAIOS X, APLICAÇÕES TERAPÊUTICAS E DIAGNÓSTICO
  // ==========================================
  {
    id: 501,
    topicId: 5,
    question: "Os Raios X, descobertos em 1895 pelo físico alemão Wilhelm Röntgen, são definidos do ponto de vista físico fundamental como:",
    options: [
      "Feixes de partículas corpusculares constituídas por protões de alta massa e carga positiva.",
      "Radiações eletromagnéticas ionizantes com pequeno comprimento de onda e elevada frequência/energia, que se propagam à velocidade da luz no vácuo.",
      "Ondas sonoras mecânicas de ultrassom de frequência ultralonga geradas por cristais piezoelétricos.",
      "Feixes de eletrões de baixa energia que necessitam de um meio condutor líquido para se propagarem."
    ],
    correctIndex: 1,
    explanation: "Os Raios X são ondas/radiações de natureza eletromagnética, tal como a luz visível ou as ondas de rádio, mas com comprimentos de onda extremamente curtos (cerca de 0,01 a 10 nanómetros) e energias fotónicas muito elevadas (quilovolt-eletrão, keV). Por serem radiação eletromagnética ionizante, transportam energia suficiente para extrair eletrões dos átomos dos tecidos biológicos e propagam-se no vácuo à velocidade da luz (c ≈ 3 × 10⁸ m/s).",
    distractorAnalysis: [
      "Opção A confunde Raios X com feixes de protões (terapia por protões).",
      "Opção C descreve a ecografia / ultrassonografia, que utiliza ondas acústicas mecânicas e não radiação ionizante.",
      "Opção D confunde os raios catódicos primários dentro do tubo com a emissão secundária de fotões de raios X."
    ],
    nursingApplication: "Como os Raios X são radiação ionizante de alta penetração, a sua passagem pelo corpo não é percetível pelos sentidos humanos (não dói, não tem cheiro nem cor). O enfermeiro deve ter consciência permanente das regras de radioproteção ao acompanhar doentes em exames à cabeceira do leito (como radiografias portáteis de tórax nos cuidados intensivos)."
  },
  {
    id: 502,
    topicId: 5,
    question: "A formação da imagem numa radiografia convencional baseia-se na absorção diferencial dos Raios X pelos diferentes tecidos anatómicos. Porque é que as estruturas ósseas surgem brancas/claras (radiopacas) na radiografia, enquanto o parênquima pulmonar surge escuro (radiotransparente)?",
    options: [
      "Porque o osso emite ativamente luz visível quando iluminado, enquanto o pulmão reflete a radiação.",
      "Porque o osso possui maior densidade e elementos de número atómico elevado (cálcio, Z=20), atenuando/absorvendo fortemente os Raios X e impedindo-os de atingir o detetor; já o ar nos pulmões quase não atenua o feixe.",
      "Porque o tecido pulmonar decompõe os raios X em calor e o osso absorve apenas fotões de luz verde.",
      "Porque as costelas repelem a radiação através de cargas elétricas superficiais negativas."
    ],
    correctIndex: 1,
    explanation: "A atenuação dos raios X pelo efeito fotoelétrico é fortemente dependente do número atómico do meio (Z³) e da densidade física do tecido. O tecido ósseo, rico em cálcio (Z=20) e fósforo (Z=15) com alta densidade, absorve uma grande fração dos fotões de raios X, projetando uma sombra clara no detetor (radiopaco). O ar nos pulmões tem baixíssima densidade, deixando passar os fotões livremente para expor o detetor/filme, que surge escurecido (radiotransparente).",
    distractorAnalysis: [
      "Opção A descreve fluorescência ou bioluminescência ativa, o que não ocorre na anatomia humana durante o exame.",
      "Opção C é falsa: o tecido pulmonar transmite a radiação por ser de baixa densidade, e os raios X não são luz verde visível.",
      "Opção D é incorreta: a atenuação de raios X decorre do efeito fotoelétrico e difusão Compton, e não de repulsão eletrostática macroscópica de superfície."
    ],
    nursingApplication: "Ao avaliar sumariamente uma radiografia torácica de um doente com suspeita de pneumonia ou derrame pleural, o enfermeiro observa que áreas habitualmente radiotransparentes (negras) do pulmão surgem radiopacas (brancas) porque o ar alveolar foi substituído por exsudado inflamatório denso ou líquido com maior coeficiente de atenuação."
  },
  {
    id: 503,
    topicId: 5,
    question: "De acordo com a Lei de Bergonié e Tribondeau na radiobiologia, quais são os tecidos e células humanas que apresentam a MAIOR sensibilidade biológica aos efeitos nocivos das radiações ionizantes?",
    options: [
      "Células com baixa taxa de divisão e completamente diferenciadas, como os neurónios e miócitos cardíacos adultos.",
      "Células com alta atividade mitótica (elevada taxa de divisão), elevado futuro proliferativo e morfologicamente indiferenciadas (como células da medula óssea, células germinativas e epitélio intestinal).",
      "Tecidos acelulares e ricos em minerais, como o esmalte dentário e as unhas queratinizadas.",
      "Apenas o plasma sanguíneo acelular em circulação estática."
    ],
    correctIndex: 1,
    explanation: "A Lei de Bergonié e Tribondeau estabelece que a radiossensibilidade de uma célula é diretamente proporcional à sua capacidade e taxa de divisão mitótica e inversamente proporcional ao seu grau de diferenciação morfológica e funcional. Assim, a medula hematopoiética, as células germinativas das gónadas, as criptas intestinais e as células do feto em desenvolvimento são as mais vulneráveis à lesão ionizante do DNA.",
    distractorAnalysis: [
      "Opção A descreve os tecidos mais radiorresistentes do organismo adulto (neurónios e células musculares não se dividem ativamente).",
      "Opção C descreve estruturas queratinizadas e minerais sem DNA ativo, inertes à carcinogénese por radiação.",
      "Opção D é incorreta: a água no plasma sofre radiólise gerando radicais livres, mas as células é que sofrem o dano mutagénico genético."
    ],
    nursingApplication: "Esta lei radiobiológica tem enorme aplicação em enfermagem: justifica o uso obrigatório de protetores gonadais de chumbo em doentes jovens, a contraindicação e triagem estrita de gravidez antes de exames radiológicos, e explica por que doentes submetidos a radioterapia apresentam como efeitos secundários neutropenia (supressão medular), mucosite e alopecia."
  },
  {
    id: 504,
    topicId: 5,
    question: "Na proteção radiológica hospitalar, o Princípio ALARA ('As Low As Reasonably Achievable') preconiza que as doses de radiação devem ser tão baixas quanto razoavelmente exequíveis. Quais são os TRÊS pilares fundamentais da proteção radiológica pessoal para o enfermeiro?",
    options: [
      "Idade, peso corporal e velocidade de marcha do profissional.",
      "Tempo mínimo de exposição, Distância máxima à fonte emissora e Blindagem adequada (uso de barreiras e aventais plúmbeos).",
      "Lavagem de mãos, uso de luvas de látex e isolamento acústico da sala.",
      "Elevação da cabeceira do leito, hidratação oral forçada e desinfeção por álcool."
    ],
    correctIndex: 1,
    explanation: "Os três pilares universais da proteção contra radiação externa são: 1) TEMPO (quanto menor o tempo passado próximo da fonte, menor a dose acumulada); 2) DISTÂNCIA (a intensidade da radiação diminui com o inverso do quadrado da distância, I ∝ 1/d²); e 3) BLINDAGEM (interposição de material de alta densidade e alto Z, como aventais de chumbo, biombos plúmbeos e óculos plumbíferos).",
    distractorAnalysis: [
      "Opção A refere variáveis biográficas do profissional que não alteram a física da absorção de dose externa.",
      "Opção C refere medidas de controlo de infeção microbiológica, que não barram fotões energéticos de raios X.",
      "Opção D lista intervenções clínicas gerais sem qualquer efeito físico na atenuação da radiação ionizante."
    ],
    nursingApplication: "A Lei do Inverso do Quadrado da Distância é a regra de ouro do enfermeiro: ao dobrar a distância para a ampola de raios X durante um exame portátil (ex: recuar de 1 metro para 2 metros), a exposição à radiação de dispersão cai para um quarto (1/4 = 25%). Recuar para 3 metros reduz a dose para apenas 1/9 (cerca de 11%). Dar dois passos atrás protege mais do que a espessura da bata hospitalar!"
  },
  {
    id: 505,
    topicId: 5,
    question: "A Tomografia Computorizada (TC ou TAC) e a Radiografia simples utilizam ambas Raios X. No entanto, qual é a vantagem imagiológica fundamental da TC sobre a radiografia convencional?",
    options: [
      "A TC não emite qualquer tipo de radiação ionizante, operando através de ondas de rádio e ímanes.",
      "A TC realiza cortes tomográficos axiais múltiplos e reconstruções tridimensionais, eliminando a sobreposição de estruturas anatómicas que ocorre na projeção bidimensional da radiografia simples.",
      "A TC tem um tempo de exame infinitamente mais rápido que não interage com a matéria viva.",
      "A TC utiliza exclusivamente partículas alfa que não conseguem atravessar a pele do doente."
    ],
    correctIndex: 1,
    explanation: "Na radiografia convencional, a imagem é uma projeção plana bidimensional de todas as estruturas atravessadas pelo feixe (todas as camadas se sobrepõem numa só imagem). A Tomografia Computorizada faz girar o tubo de raios X e detetores em torno do doente, obtendo milhares de medições transversais que o computador reconstrói em cortes anatómicos milimétricos sem sobreposição, permitindo distinguir densidades de tecidos moles com enorme precisão.",
    distractorAnalysis: [
      "Opção A confunde a TC com a Ressonância Magnética (RM), que utiliza campos magnéticos e ondas de rádio não-ionizantes.",
      "Opção C é falsa, pois a TC interage plenamente com a matéria e debita doses de radiação consideravelmente superiores à radiografia simples.",
      "Opção D é incorreta: a TC utiliza fotões de raios X de alta energia, não partículas alfa."
    ],
    nursingApplication: "Devido à multiplicidade de cortes e rotações do tubo, uma TC de corpo inteiro expõe o doente a doses equivalentes a várias centenas de radiografias simples. O enfermeiro deve orientar os utentes e familiares sobre a necessidade clínica justificada do exame, evitando repetições desnecessárias, especialmente em doentes pediátricos."
  },

  // ==========================================
  // TÓPICO 6: NÚCLEO ATÓMICO E PROPRIEDADES DAS FORÇAS NUCLEARES
  // ==========================================
  {
    id: 601,
    topicId: 6,
    question: "Na representação convencional de um nuclídeo na forma (A/Z)X, o que representam especificamente os símbolos Z e A?",
    options: [
      "Z é o número de neutrões e A é a carga elétrica da nuvem eletrónica.",
      "Z é o Número Atómico (número de protões nucleares) e A é o Número de Massa (total de nucleões: protões + neutrões).",
      "Z é a energia de ligação em Joules e A é o tempo de meia-vida em minutos.",
      "Z é o número de eletrões de valência e A é a velocidade da partícula gama emitida."
    ],
    correctIndex: 1,
    explanation: "Por definição na física atómica e nuclear: Z é o Número Atómico, que indica o número de protões no núcleo (definindo a identidade química do elemento e o número de eletrões no átomo neutro); A é o Número de Massa, que corresponde à soma total de nucleões no núcleo, ou seja, A = Z + N (onde N é o número de neutrões).",
    distractorAnalysis: [
      "Opção A inverte as definições e confunde grandezas nucleares com a nuvem eletrónica.",
      "Opção C associa erroneamente letras padronizadas de contagem de nucleões a grandezas energéticas e cinéticas.",
      "Opção D confunde a notação nuclear atómica com propriedades quânticas de valência e velocidade de fotões."
    ],
    nursingApplication: "Em oncologia e medicina nuclear, os fármacos são identificados por esta notação (ex: ¹³¹₅₃Iodo ou ⁹⁹ᵐ₄₃Tecnécio). O enfermeiro deve compreender a notação isotópica para conferir as prescrições de radiofármacos e garantir a correta dosimetria antes da administração ao doente."
  },
  {
    id: 602,
    topicId: 6,
    question: "No interior de um núcleo atómico estável, os protões possuem todos carga elétrica positiva (+1) e encontram-se comprimidos a distâncias minúsculas (~10⁻¹⁵ m). O que impede que o núcleo se desintegre instantaneamente devido à colossal repulsão eletrostática de Coulomb entre eles?",
    options: [
      "A atração gravitacional entre os eletrões da camada de valência.",
      "A Força Nuclear Forte, que é extremamente intensa a curtíssimo alcance, atrativa e independente da carga elétrica, superando a repulsão eletrostática entre os nucleões.",
      "A pressão do ar no interior do citoplasma celular que empurra os átomos uns contra os outros.",
      "A presença de uma camada protetora impenetrável de iões de cálcio ao redor do núcleo."
    ],
    correctIndex: 1,
    explanation: "No núcleo, a repulsão eletrostática de Coulomb entre os protões é repelente e muito forte. Contudo, a distâncias subatómicas inferiores a cerca de 1,5 × 10⁻¹³ cm (ou ~1-2 femtómetros), a Força Nuclear Forte (mediada por mésons/gluões) é cerca de 100 vezes mais potente do que a força eletromagnética, agindo como uma 'cola' que atrai protão-protão, protão-neutrão e neutrão-neutrão com igual intensidade, garantindo a coesão nuclear.",
    distractorAnalysis: [
      "Opção A é absurda: a força gravitacional é ordens de grandeza (10³⁶ vezes) mais fraca do que a repulsão elétrica.",
      "Opção C confunde a pressão de um gás macroscópico com as forças fundamentais que regem o núcleo subatómico.",
      "Opção D inventa uma estrutura biológica fictícia dentro do núcleo atómico."
    ],
    nursingApplication: "A compreensão da estabilidade nuclear e do balanço entre força nuclear forte e repulsão elétrica é a base para entender por que alguns elementos são estáveis (como o Carbono-12) e outros são instáveis/radioativos (como o Radão-222 ou Urânio-238), decaindo espontaneamente e emitindo radiação utilizada em terapias oncológicas."
  },
  {
    id: 603,
    topicId: 6,
    question: "O que se entende por 'Defeito de Massa' (Δm) na física nuclear e de que forma se relaciona com a Estabilidade do Núcleo atómico?",
    options: [
      "É um erro instrumental de pesagem das balanças laboratoriais ao medir radioisótopos pesados.",
      "É a diferença entre a massa do núcleo atómico montado e a soma das massas dos seus nucleões livres isolados, correspondendo à energia libertada na sua formação (E = Δm · c²), denominada Energia de Ligação Nuclear.",
      "É a perda de massa que ocorre quando uma célula cancerosa morre por necrose após a radioterapia.",
      "É a quantidade de neutrões que o átomo perde quando se evapora em água morna."
    ],
    correctIndex: 1,
    explanation: "Experiências de precisão comprovam que a massa de qualquer núcleo estável é sempre ligeiramente menor do que a soma das massas individuais dos protões e neutrões livres que o compõem. Essa diferença de massa (defeito de massa, Δm) foi convertida em energia no momento da fusão dos nucleões, segundo a equação de Einstein E = Δm · c². Quanto maior for a energia de ligação por nucleão, mais estável é o núcleo atómico.",
    distractorAnalysis: [
      "Opção A confunde a equivalência massa-energia da relatividade com imprecisão ou erro de medição instrumental.",
      "Opção C confunde a biofísica da lise celular em radioterapia com a mecânica quântica e nuclear dos átomos.",
      "Opção D mistura fenómenos termodinâmicos de mudança de fase com a perda e transmutação de nucleões."
    ],
    nursingApplication: "É precisamente desta conversão de massa em energia (E = Δm · c²) que provém toda a energia libertada nos reatores nucleares e geradores médicos que produzem os radioisótopos utilizados diariamente em hospitais (como os geradores de Molibdénio-99 / Tecnécio-99m para diagnóstico cintigráfico)."
  },
  {
    id: 604,
    topicId: 6,
    question: "Para elementos com número atómico elevado (Z > 20), qual é a relação entre o número de neutrões (N) e o número de protões (Z) necessária para manter a estabilidade do núcleo atómico?",
    options: [
      "O número de neutrões tem de ser rigorosamente zero para evitar atrito interno.",
      "A relação N/Z tem de aumentar progressivamente (N > Z), pois são necessários neutrões adicionais para aumentar a atração nuclear forte sem adicionar repulsão de carga elétrica.",
      "O número de protões tem de ser o triplo do número de neutrões para neutralizar os eletrões orbitais.",
      "A proporção tem de ser sempre exatamente N/Z = 0,5 em todos os átomos da tabela periódica."
    ],
    correctIndex: 1,
    explanation: "Em núcleos leves (Z ≤ 20, como Carbono-12 ou Oxigénio-16), a razão de estabilidade é N/Z ≈ 1. À medida que Z aumenta, o número de protões cresce e a repulsão eletrostática total entre eles aumenta drasticamente (proporcional a Z²). Como a força nuclear forte é de curtíssimo alcance, são necessários neutrões adicionais (que sentem a força forte mas não sofrem repulsão de Coulomb) para manter o núcleo coeso, elevando a razão N/Z para cerca de 1,5 em elementos pesados.",
    distractorAnalysis: [
      "Opção A é falsa: sem neutrões, núcleos com múltiplos protões desintegram-se instantaneamente pela repulsão eletrostática de Coulomb.",
      "Opção C propõe uma relação N/Z muito inferior a 1, o que tornaria o núcleo totalmente instável e inviável perante a repulsão elétrica.",
      "Opção D é incorreta: a razão de estabilidade N/Z é cerca de 1 nos elementos leves e sobe até ~1,5 nos pesados, nunca sendo fixa em 0,5."
    ],
    nursingApplication: "Núcleos que se encontram fora do 'vale de estabilidade' (com excesso de neutrões ou excesso de protões) são radionuclídeos instáveis. Eles corrigem essa proporção desfavorável emitindo partículas radioativas beta menos ou beta mais. Este é o fundamento dos fármacos de medicina nuclear manipulados em serviços de radiologia e oncologia."
  },
  {
    id: 605,
    topicId: 6,
    question: "De acordo com o modelo atómico de Bohr, o que sucede no átomo quando um eletrão orbital sofre uma transição ('salto quântico') de um nível de energia superior para um nível de energia mais interno e próximo do núcleo?",
    options: [
      "O átomo colapsa sobre si mesmo e destrói todos os protões do núcleo.",
      "O átomo emite um fotão (quantum de radiação eletromagnética) cuja energia é exatamente igual à diferença de energia entre os dois níveis (E = h · f).",
      "O átomo absorve calor do meio exterior e arrefece o tecido biológico circundante.",
      "O eletrão transforma-se instantaneamente numa partícula alfa de carga positiva."
    ],
    correctIndex: 1,
    explanation: "Nos postulados de Bohr, os eletrões ocupam órbitas estacionárias quantizadas. Ao passar de um nível de maior energia (E₂) para um de menor energia (E₁), o eletrão perde energia, que é emitida sob a forma de um fotão eletromagnético com energia h · f = E₂ - E₁. Se a vacância eletrónica for numa camada interna (como a camada K) de um elemento com Z elevado (como o tungsténio num tubo de raios X), o fotão emitido é um Raio X Característico.",
    distractorAnalysis: [
      "Opção A descreve a instabilidade do modelo clássico pré-quântico que Bohr resolveu com os seus postulados.",
      "Opção C inverte o balanço energético (a transição para nível inferior emite energia; a transição para nível superior é que absorve energia).",
      "Opção D confunde uma transição eletrónica orbital com uma reação nuclear que envolve nucleões."
    ],
    nursingApplication: "A emissão de Raios X característicos no ânodo dos equipamentos de radiologia hospitalar assenta rigorosamente neste princípio de Bohr: eletrões acelerados arrancam eletrões das camadas profundas do tungsténio, e os saltos quânticos de eletrões periféricos para preencher essas vagas geram os feixes de raios X que criam as imagens de diagnóstico."
  },

  // ==========================================
  // TÓPICO 7: PARTÍCULAS ALFA, BETA E RADIAÇÕES GAMA
  // ==========================================
  {
    id: 701,
    topicId: 7,
    question: "A radiação alfa (α) é uma emissão nuclear de natureza corpuscular. Qual é a sua constituição física e as suas características de carga e massa?",
    options: [
      "É constituída por fotões de alta energia sem massa e sem carga elétrica.",
      "É constituída por eletrões de altíssima velocidade com carga negativa e massa desprezável.",
      "É constituída por núcleos de Hélio (dois protões e dois neutrões, ⁴₂He²⁺), possuindo carga elétrica +2 e massa de aproximadamente 4 u.m.a.",
      "É constituída por neutrinos de carga nula que atravessam todo o planeta sem colidir."
    ],
    correctIndex: 2,
    explanation: "Uma partícula alfa é rigorosamente o núcleo do átomo de Hélio-4 (⁴₂He²⁺). É composta por 2 protões e 2 neutrões fortemente ligados, apresentando uma carga elétrica positiva de +2 e uma massa atómica de ~4 u.m.a. É uma partícula muito pesada e com o dobro da carga elementar quando comparada com as outras emissões radioativas.",
    distractorAnalysis: [
      "Opção A descreve a radiação gama (fotões sem massa nem carga).",
      "Opção B descreve a radiação beta negativa (eletrões).",
      "Opção D descreve neutrinos, partículas subatómicas neutras quase sem massa geradas no decaimento beta fraco."
    ],
    nursingApplication: "Devido à sua elevada massa e dupla carga positiva, as partículas alfa colidem fortemente com as moléculas biológicas no ar ou nos tecidos. Têm um alcance de escassos centímetros no ar e são completamente detidas pela camada mais superficial de células mortas da pele humana (estrato córneo). Por isso, não representam perigo de irradiação externa."
  },
  {
    id: 702,
    topicId: 7,
    question: "Embora a radiação alfa (α) tenha um baixíssimo poder de penetração externa (sendo parada por uma simples folha de papel ou pela epiderme), porque é que ela é considerada EXTREMAMENTE PERIGOSA para o ser humano em caso de contaminação interna (inalação ou ingestão)?",
    options: [
      "Porque as partículas alfa transformam-se em vírus no sangue do doente.",
      "Porque possui um elevadíssimo poder de ionização e Transferência Linear de Energia (LET), libertando toda a sua enorme energia cinética num percurso microscópico de poucas células, causando quebras duplas irreparáveis no DNA celular.",
      "Porque atravessa facilmente o corpo humano e sai pela pele sem depositar energia.",
      "Porque atrai todos os glóbulos vermelhos por magnetismo, coagulando o sangue instantaneamente."
    ],
    correctIndex: 1,
    explanation: "A partícula alfa possui alta densidade de ionização (alto LET - Linear Energy Transfer). Como é lenta, pesada e tem carga +2, arranca milhares de eletrões das moléculas circundantes ao longo de apenas 40 a 70 micrómetros (o diâmetro de 2 a 4 células humanas). Se uma substância emissora de alfa for inalada (ex: gás radão nos pulmões) ou ingerida, ela fica em contacto direto com tecidos vivos vulneráveis, destruindo o DNA e induzindo cancro ou necrose celular severa.",
    distractorAnalysis: [
      "Opção A confunde radiação ionizante com agentes patogénicos biológicos (vírus).",
      "Opção C descreve uma radiação pouco ionizante e altamente penetrante (como raios gama ou neutrões rápidos).",
      "Opção D é uma afirmação sem qualquer fundamentação biofísica ou hematológica."
    ],
    nursingApplication: "Em serviços de oncologia e medicina nuclear com radiofármacos emissores alfa (como o Rádio-223 / Xofigo usado em metástases ósseas), o enfermeiro sabe que a proteção externa é simples, mas o risco crítico é a CONTAMINAÇÃO INTERNA. São obrigatórias luvas impermeáveis, máscara, manuseamento em capela e cuidados extremos na higiene e gestão de excretas do doente."
  },
  {
    id: 703,
    topicId: 7,
    question: "No decaimento radioativo beta negativo (β⁻), um núcleo instável emite um eletrão a grande velocidade. Que transformação nuclear espontânea ocorre no interior do núcleo para originar esta partícula?",
    options: [
      "Dois protões fundem-se para formar uma partícula alfa pesada.",
      "Um neutrão em excesso transforma-se espontaneamente num protão, sendo emitido um eletrão (partícula β⁻) e um antineutrino do eletrão.",
      "Um eletrão da camada exterior K cai no núcleo e anula todos os neutrões existentes.",
      "O núcleo divide-se ao meio em dois átomos de hidrogénio de carga neutra."
    ],
    correctIndex: 1,
    explanation: "No decaimento beta negativo (típico de núcleos com excesso de neutrões, ou seja, razão N/Z demasiado alta), um neutrão transforma-se num protão através da interação nuclear fraca: n -> p⁺ + e⁻ + v̄e. O protão permanece no núcleo (aumentando o número atómico Z em +1, mantendo A inalterado) e o eletrão rápido formado é ejetado do núcleo como uma partícula beta negativa (β⁻).",
    distractorAnalysis: [
      "Opção A descreve uma reação de fusão nuclear e não um decaimento beta.",
      "Opção C confunde o decaimento beta negativo com o fenómeno inverso de captura eletrónica.",
      "Opção D descreve uma fissão atípica e não o mecanismo intrínseco de transmutação beta."
    ],
    nursingApplication: "O Iodo-131 e o Ítrio-90 são emissores beta utilizados na terapêutica ablativa tumoral. O enfermeiro compreende que a emissão beta tem um alcance de alguns milímetros no tecido tumoral, destruindo as células malignas localmente ao redor do local de fixação do fármaco com relativa poupança dos tecidos saudáveis mais distantes."
  },
  {
    id: 704,
    topicId: 7,
    question: "Qual das seguintes opções estabelece a ordem CORRETA de PODER DE PENETRAÇÃO na matéria para as três radiações nucleares clássicas (da menos penetrante para a mais penetrante)?",
    options: [
      "Gama (γ) < Beta (β) < Alfa (α)",
      "Alfa (α) < Beta (β) < Gama (γ)",
      "Beta (β) < Alfa (α) < Gama (γ)",
      "Alfa (α) < Gama (γ) < Beta (β)"
    ],
    correctIndex: 1,
    explanation: "A ordem crescente de penetração é rigorosamente Alfa < Beta < Gama: 1) Partículas Alfa (α) são bloqueadas por uma folha de papel ou pela camada córnea da pele (~0,05 mm); 2) Partículas Beta (β) penetram alguns milímetros em tecido ou plástico e são bloqueadas por lâminas de alumínio de alguns milímetros ou acrílico; 3) Radiação Gama (γ), por ser radiação eletromagnética sem carga nem massa, é altamente penetrante, atravessando facilmente o corpo humano e exigindo blocos espessos de chumbo ou paredes de betão para a sua atenuação substancial.",
    distractorAnalysis: [
      "Opção A inverte totalmente a ordem física real, atribuindo erroneamente à radiação alfa o maior poder de penetração.",
      "Opção C coloca erradamente as partículas beta antes das alfa, ignorando que a grande massa e carga da partícula alfa a tornam a menos penetrante.",
      "Opção D coloca erradamente a radiação gama antes da radiação beta, contrariando o elevado poder de penetração dos fotões gama."
    ],
    nursingApplication: "Ao preparar uma seringa contendo um radiofármaco emissor beta puro (como o Estrôncio-89 ou Samário-153), o enfermeiro ou farmacêutico NUNCA deve usar protetor de seringa de chumbo maciço, mas sim de ACRÍLICO ou plástico espesso! O chumbo com partículas beta rápidas geraria radiação de travagem (Raios X de Bremsstrahlung), aumentando a exposição do operador."
  },
  {
    id: 705,
    topicId: 7,
    question: "A radiação gama (γ) difere fundamentalmente das partículas alfa e beta pelo facto de:",
    options: [
      "Possuir carga elétrica negativa e massa atómica superior à de todos os elementos químicos.",
      "Ser uma radiação corpuscular pesada emitida apenas durante o dia sob a luz solar.",
      "Não possuir massa de repouso nem carga elétrica, tratando-se de fotões eletromagnéticos de elevadíssima frequência e energia, emitidos frequentemente após um decaimento corpuscular quando o núcleo filho se encontra num estado excitado.",
      "Ser totalmente inofensiva e incapaz de provocar ionizações nos átomos de água celulares."
    ],
    correctIndex: 2,
    explanation: "A radiação gama é radiação eletromagnética pura (ondas eletromagnéticas compostas por fotões de alta energia). Não possui carga elétrica nem massa de repouso. Geralmente, após uma desintegração alfa ou beta, o núcleo resultante fica num estado energeticamente excitado (isomérico/metastável) e liberta o excesso de energia transmutando-se para o estado fundamental através da emissão de um ou mais fotões gama.",
    distractorAnalysis: [
      "Opção A atribui carga e massa a uma onda eletromagnética pura que não as tem.",
      "Opção B confunde a radiação gama nuclear com partículas materiais dependentes de luz ambiente.",
      "Opção D é incorreta: os raios gama são fortemente ionizantes no corpo humano por efeito fotoelétrico, difusão Compton e produção de pares."
    ],
    nursingApplication: "A radiação gama é a radiação ideal para exames diagnósticos de imagiologia em medicina nuclear (cintigrafia e SPECT): como tem alto poder de penetração, os fotões gama emitidos pelo radioisótopo dentro do corpo do doente conseguem atravessar os tecidos corporais e sair para o exterior, onde são captados pelas câmaras gama para gerar imagens detalhadas dos órgãos."
  },

  // ==========================================
  // TÓPICO 8: ISÓTOPOS, ISÓBAROS, ISÓTONOS E RESPETIVAS APLICAÇÕES TERAPÊUTICAS
  // ==========================================
  {
    id: 801,
    topicId: 8,
    question: "Na física e química nucleares, os nuclídeos pertencentes à mesma família nuclear são classificados segundo os seus números atómicos e de massa. Qual é a definição exata e inequívoca de ISÓTOPOS?",
    options: [
      "Nuclídeos que possuem o mesmo número de massa (A), mas diferente número atómico (Z).",
      "Nuclídeos que possuem o mesmo número atómico (Z) — ou seja, pertencem ao mesmo elemento químico e têm o mesmo número de protões —, mas apresentam diferente número de massa (A) devido a um número diferente de neutrões.",
      "Nuclídeos que possuem rigorosamente o mesmo número de neutrões (N = A - Z), mas diferente número de protões.",
      "Átomos que possuem o mesmo peso molecular em gramas por litro de solução aquosa."
    ],
    correctIndex: 1,
    explanation: "Por definição rigorosa: ISÓTOPOS têm o mesmo 'P' (mesmo número de Protões, ou seja, mesmo Z). Como têm o mesmo Z, ocupam o mesmo lugar na tabela periódica e possuem as mesmas propriedades químicas. Apresentam, no entanto, diferentes números de neutrões e, portanto, diferentes números de massa A (exemplos: ¹²₆C, ¹³₆C e ¹⁴₆C; ou ¹⁶₈O, ¹⁷₈O e ¹⁸₈O).",
    distractorAnalysis: [
      "Opção A define ISÓBAROS (mesmo número de massa A, diferente Z).",
      "Opção C define ISÓTONOS (mesmo número de neutrões N, diferente Z e A).",
      "Opção D é uma definição estequiométrica macroscópica que nada tem a ver com a estrutura dos núcleos atómicos."
    ],
    nursingApplication: "O facto de os isótopos terem o mesmo comportamento químico que os elementos estáveis é a base do seu uso biológico: a tiroide não distingue quimicamente o Iodo-127 estável do Iodo-131 radioativo, captando ambos avidamente. Isto permite que o radioisótopo seja administrado e atue como uma 'bomba teleguiada' contra as células tiroidianas hiperativas ou tumorais."
  },
  {
    id: 802,
    topicId: 8,
    question: "O Iodo-131 (¹³¹I) é amplamente utilizado na prática clínica em serviços de medicina nuclear e oncologia. Qual é a sua principal aplicação terapêutica e a razão biofísica da sua eficácia?",
    options: [
      "É utilizado no tratamento de fraturas ósseas porque substitui o cálcio na matriz de hidroxiapatite.",
      "É utilizado no tratamento do cancro diferenciado da tiroide e hipertiroidismo grave, porque é captado seletivamente pelas células foliculares da tiroide e emite partículas beta que destroem o tecido hiperfuncionante com curto alcance tecidual.",
      "É utilizado unicamente para desinfetar feridas cirúrgicas externas sem emitir qualquer radiação.",
      "É utilizado em aerossol para expandir os alvéolos pulmonares na asma aguda."
    ],
    correctIndex: 1,
    explanation: "O Iodo-131 é o radiofármaco de eleição na ablação da glândula tiroide em neoplasias e hipertiroidismo. A tiroide capta ativamente o iodo através do simportador Na⁺/I⁻. Uma vez concentrado nas células foliculares, o ¹³¹I decai emitindo partículas beta (alcance médio de 1 a 2 mm no tecido), depositando energia ionizante letal diretamente no DNA das células tumorais, acompanhado de emissão gama que permite também monitorizar a biodistribuição.",
    distractorAnalysis: [
      "Opção A confunde o iodo com o Estrôncio-89 ou Rádio-223, que são fixados no tecido ósseo por afinidade ao cálcio.",
      "Opção C confunde o radioisótopo ¹³¹I com a tintura de iodo/iodopovidona tópica (que utiliza iodo estável ¹²⁷I como antissético).",
      "Opção D descreve uma terapêutica farmacológica broncodilatadora sem relação com a física nuclear."
    ],
    nursingApplication: "Cuidados de enfermagem essenciais ao doente sob terapêutica com Iodo-131: como o radiofármaco é eliminado em grande quantidade na urina, suor e saliva, o doente permanece em quarto de isolamento radiológico com paredes baritadas/plúmbeas. O enfermeiro deve usar calçado e vestuário de proteção, limitar o tempo junto à cama, cobrir o chão da casa de banho com plástico impermeável e incentivar a hidratação oral forçada para acelerar a eliminação vesical do excesso de radioiodo."
  },
  {
    id: 803,
    topicId: 8,
    question: "O Tecnécio-99 metastável (⁹⁹ᵐTc) é o radioisótopo mais frequentemente utilizado em todo o mundo na realização de exames cintigráficos de diagnóstico (SPECT). Que características biofísicas fazem dele o radioisótopo 'ideal' para diagnóstico médico?",
    options: [
      "Tem um tempo de meia-vida de 50 anos e emite partículas alfa altamente destrutivas para os tecidos saudáveis.",
      "Emite radiação gama pura de energia ótima (~140 keV) sem emissão de partículas corpusculares alfa ou beta lesivas, e tem uma meia-vida física curta de cerca de 6 horas, minimizando a dose absorvida pelo doente.",
      "É um gás que se inala e permanece no corpo do doente durante vários meses sem decair.",
      "Não emite qualquer radiação e funciona apenas através de fluorescência visível no escuro."
    ],
    correctIndex: 1,
    explanation: "O ⁹⁹ᵐTc é o padrão de ouro cintigráfico porque: 1) É um emissor gama quase puro com fotões de 140 keV, energia ideal que atravessa facilmente o corpo do doente e é captada com alta resolução pelas câmaras gama; 2) Não emite partículas alfa nem beta, poupando o doente a doses de radiação desnecessárias; 3) A sua meia-vida de ~6 horas é longa o suficiente para realizar o exame imagiológico e curta o suficiente para que a sua radioatividade decaia para níveis insignificantes em 24 a 48 horas.",
    distractorAnalysis: [
      "Opção A seria catastrófica para um exame diagnóstico (causaria radionecrose severa e irradiação crónica durante décadas).",
      "Opção C confunde o tecnécio com o gás xénon e ignora que a retenção prolongada aumentaria a toxicidade biológica.",
      "Opção D é contrária à realidade física da medicina nuclear."
    ],
    nursingApplication: "Após um exame cintigráfico (ex: cintigrafia óssea ou renal com ⁹⁹ᵐTc), o doente regressa muitas vezes à enfermaria. Sabendo que a meia-vida física é de 6 horas, o enfermeiro sabe que após 24 horas (4 meias-vidas) a radioatividade residual é inferior a 6,25% do valor inicial, permitindo orientar a família e gerir os cuidados com tranquilidade e rigor técnico."
  },
  {
    id: 804,
    topicId: 8,
    question: "O Flúor-18 (¹⁸F), habitualmente acoplado à molécula de desoxiglicose (¹⁸F-FDG), é o radiofármaco fundamental na Tomografia por Emissão de Positrões (PET). Que tipo de emissão radioativa caracteriza o ¹⁸F e o que sucede quando essa partícula interage com os tecidos do doente?",
    options: [
      "Emite partículas alfa que fundem os tecidos e geram calor localizado.",
      "Emite positrões (partículas beta mais, β⁺); após percorrer menos de 1 mm, o positrão colide com um eletrão tecidual ocorrendo a sua ANIQUILAÇÃO mútua, com a emissão simultânea de dois fotões gama de 511 keV em sentidos rigorosamente opostos (180°).",
      "Emite neutrões rápidos que transformam os tecidos em materiais magnéticos de alta densidade.",
      "Emite ondas de rádio moduladas em frequência que são captadas por uma antena comum."
    ],
    correctIndex: 1,
    explanation: "O ¹⁸F é um emissor de positrões (antimatéria do eletrão, carga +1). Quando o positrão é emitido, perde energia cinética e encontra um eletrão do tecido biológico vizinho. Ocorre o fenómeno de ANIQUILAÇÃO da matéria: a massa de ambas as partículas converte-se integralmente em energia (E = 2 × m₀c²), gerando um par de fotões gama de 511 keV que viajam em linha reta em sentidos rigorosamente opostos (180°). O scanner PET deteta estes fotões em coincidência temporal para reconstruir a imagem do tumor.",
    distractorAnalysis: [
      "Opção A confunde decaimento beta positivo com emissão alfa pesada.",
      "Opção C confunde tomografia por emissão de positrões com reatores nucleares de neutrões.",
      "Opção D descreve telecomunicações hertzianas, e não imagiologia molecular nuclear."
    ],
    nursingApplication: "Células neoplásicas têm um metabolismo glicolítico acelerado (Efeito Warburg), captando avidamente a ¹⁸F-FDG como se fosse glicose normal. Na preparação do doente para exame PET, o enfermeiro deve garantir que o doente permanece em jejum rigoroso e em repouso físico absoluto (sem falar nem mastigar pastilha elástica), para evitar que a glicose radioativa seja captada pelos músculos em vez das lesões tumorais."
  },
  {
    id: 805,
    topicId: 8,
    question: "Considere três nuclídeos hipotéticos: A = (⁴⁰₁₉K), B = (⁴⁰₂₀Ca) e C = (⁴¹₂₀Ca). Como se classificam, respetivamente, as relações entre os pares (A e B) e entre os pares (B e C)?",
    options: [
      "A e B são Isótopos; B e C são Isóbaros.",
      "A e B são Isóbaros (mesmo A = 40, diferente Z); B e C são Isótopos (mesmo Z = 20, diferente A).",
      "A e B são Isótonos; B e C são Isótopos.",
      "Todos os três pares são Isótonos perfeitos entre si."
    ],
    correctIndex: 1,
    explanation: "Análise dos números nucleares: Para A (⁴⁰₁₉K): A = 40, Z = 19, N = 40 - 19 = 21. Para B (⁴⁰₂₀Ca): A = 40, Z = 20, N = 40 - 20 = 20. Comparando A e B: possuem o mesmo número de massa A = 40, mas Z diferente (19 vs 20) -> são ISÓBAROS. Para C (⁴¹₂₀Ca): A = 41, Z = 20, N = 41 - 20 = 21. Comparando B e C: possuem o mesmo número atómico Z = 20, mas massas diferentes (40 vs 41) -> são ISÓTOPOS. Logo, A e B são isóbaros; B e C são isótopos.",
    distractorAnalysis: [
      "Opção A inverte as duas definições basilares das famílias nucleares.",
      "Opção C confunde isótonos (que teriam mesmo número N = A - Z; de facto, A e C seriam isótonos com N=21, mas o par perguntado foi A-B e B-C).",
      "Opção D é incorreta: N varia entre 20 e 21 entre os nuclídeos."
    ],
    nursingApplication: "Compreender as relações entre isóbaros e isótopos permite ao enfermeiro interpretar relatórios laboratoriais e entender as reações de decaimento: por exemplo, quando o Potássio-40 no organismo sofre decaimento beta, ele transmuta-se no seu isóbaro Cálcio-40, mantendo a massa A inalterada."
  }
];

// Resumo conciso de cada tópico para revisão rápida do estudante
const TOPIC_SUMMARIES = [
  {
    topicId: 1,
    title: "Tópico 1: Força, Estado de Equilíbrio e Equilíbrio de Forças",
    summary: `
      <ul>
        <li><strong>Conceito de Força:</strong> Grandeza vetorial caracterizada por módulo (intensidade), direção, sentido e ponto de aplicação. Unidade SI: Newton (N = kg·m/s²).</li>
        <li><strong>1.ª Lei de Newton (Inércia):</strong> Se ∑F = 0, o corpo permanece em repouso ou em Movimento Retilíneo e Uniforme (MRU, velocidade vetorial constante).</li>
        <li><strong>2.ª Lei de Newton (F = m·a):</strong> A aceleração é diretamente proporcional à força resultante e inversamente proporcional à massa.</li>
        <li><strong>3.ª Lei de Newton (Ação-Reação):</strong> Pares de forças de igual intensidade, mesma linha de ação e sentidos opostos, atuando <em>sempre em corpos diferentes</em> (nunca se anulam mutuamente).</li>
        <li><strong>Pressão Mecânica e Enfermagem (P = F / A):</strong> Para o mesmo peso corporal (F), diminuir a área de apoio (A) nas proeminências ósseas (sacro, calcanhares) faz a pressão local disparar acima da pressão capilar (~32 mmHg), originando isquemia e lesões por pressão (escaras). Superfícies de redistribuição aumentam A para reduzir P.</li>
      </ul>
    `
  },
  {
    topicId: 2,
    title: "Tópico 2: Alavancas, Elasticidade dos Corpos e Resistência dos Materiais",
    summary: `
      <ul>
        <li><strong>Alavancas no Corpo Humano:</strong>
          <ul>
            <li><em>1.ª Classe (Interfixa):</em> Fulcro no meio (Potência - Apoio - Resistência). Ex: Articulação atlanto-occipital (cabeça/pescoço). Equilíbrio.</li>
            <li><em>2.ª Classe (Inter-resistente):</em> Resistência no meio (Apoio - Resistência - Potência). Ex: Fletir na ponta dos pés (tornozelo). Vantagem mecânica de força (VM > 1).</li>
            <li><em>3.ª Classe (Interpotente):</em> Potência no meio (Apoio - Potência - Resistência). Ex: Bicípite braquial ao fletir o cotovelo. Desvantagem de força (VM < 1), mas ganho espetacular de velocidade e amplitude.</li>
          </ul>
        </li>
        <li><strong>Reologia:</strong> Estudo da deformação da matéria: corpos indeformáveis (modelo teórico), sólidos elásticos (Hooke), corpos plásticos (deformação permanente irreversível) e corpos viscosos (escoamento sob tensão).</li>
        <li><strong>Lei de Hooke e Módulo de Young (σ = E · ε):</strong> A tensão σ (N/m²) é proporcional à deformação relativa ε (ΔL/L₀). O Módulo de Young E traduz a <em>rigidez elástica</em> do material.</li>
      </ul>
    `
  },
  {
    topicId: 3,
    title: "Tópico 3: Aplicação da Elasticidade e Resistência ao Sistema Osteomuscular",
    summary: `
      <ul>
        <li><strong>Estrutura Bifásica do Tecido Ósseo:</strong>
          <ul>
            <li><em>Fase Inorgânica (60-65%):</em> Cristais de Hidroxiapatite [Ca₁₀(PO₄)₆(OH)₂] - confere dureza e enorme resistência à <strong>compressão</strong>.</li>
            <li><em>Fase Orgânica (35%):</em> Fibras de Colagénio - confere flexibilidade, tenacidade e resistência à <strong>tração</strong>.</li>
          </ul>
        </li>
        <li><strong>Solicitações Mecânicas nos Ossos:</strong> O osso resiste muito bem à compressão axial, razoavelmente à tração e <em>muito mal à torção e ao cisalhamento transversal</em>.</li>
        <li><strong>Geometria Tubular:</strong> Os ossos longos ocos maximizam o momento de inércia da secção transversal, oferecendo muito maior resistência à flexão com peso corporal mínimo.</li>
        <li><strong>Fratura do Colo do Fémur:</strong> Na osteoporose senil, a reabsorção trabecular no colo femoral fragiliza a transmissão de cargas, provocando fraturas frequentes com quedas simples.</li>
        <li><strong>Músculo:</strong> Converte energia química (hidrólise de ATP) em trabalho mecânico (~20-25%) e calor corporal (~75-80%, essencial na termorregulação).</li>
      </ul>
    `
  },
  {
    topicId: 4,
    title: "Tópico 4: Hidrodinâmica e Aplicações ao Sistema Circulatório",
    summary: `
      <ul>
        <li><strong>Regime Laminar vs Turbulento:</strong>
          <ul>
            <li><em>Laminar:</em> Escoamento em lâminas concêntricas sem mistura, perfil parabólico com velocidade máxima no centro e nula na parede. Silencioso e de baixo gasto energético.</li>
            <li><em>Turbulento:</em> Formação de turbilhões e vórtices desordenados. Ruidoso e com grande dissipação de energia sob forma de calor e som.</li>
          </ul>
        </li>
        <li><strong>Número de Reynolds (Re = (ρ · v · d) / η):</strong> Adimensional. Re > 2000 favorece a turbulência. Aumenta com maior velocidade (v), maior diâmetro (d), maior densidade (ρ) e <em>menor viscosidade (η)</em>.</li>
        <li><strong>Viscosidade Sanguínea e Hematócrito:</strong> A viscosidade do sangue é ~3 a 4 vezes superior à da água, dependendo essencialmente do hematócrito (volume globular) e proteínas plasmáticas.</li>
        <li><strong>Lei de Poiseuille (R ∝ 1 / r⁴):</strong> A resistência vascular depende inversamente da 4.ª potência do raio. Reduzir o raio a metade aumenta a resistência vascular periférica 16 vezes!</li>
        <li><strong>Ruídos de Korotkoff na Medição da PA:</strong> Quando a braçadeira do esfigmomanómetro comprime a artéria, o jato de sangue a alta velocidade gera turbulência audível no estetoscópio entre a pressão sistólica e diastólica.</li>
      </ul>
    `
  },
  {
    topicId: 5,
    title: "Tópico 5: Radiações, Raios X, Aplicações Terapêuticas e Diagnóstico",
    summary: `
      <ul>
        <li><strong>Natureza dos Raios X:</strong> Radiação eletromagnética ionizante com pequeno comprimento de onda e alta energia fotónica (descoberta por Röntgen em 1895). Propaga-se à velocidade da luz.</li>
        <li><strong>Atenuação e Imagem:</strong> O osso (Z alto, cálcio) absorve fotões e surge branco (radiopaco); o pulmão (baixa densidade, ar) deixa passar os fotões e surge negro (radiotransparente).</li>
        <li><strong>Lei de Bergonié-Tribondeau:</strong> Células com alta atividade mitótica, elevado potencial reprodutivo e pouco diferenciadas são as mais radiossensíveis (medula óssea, mucosas, gónadas, embrião).</li>
        <li><strong>Radioproteção em Enfermagem (Princípio ALARA):</strong>
          <ul>
            <li><em>Tempo:</em> Minimizar o tempo na área de radiação.</li>
            <li><em>Distância:</em> Maximizar o afastamento (a intensidade decai com o inverso do quadrado da distância: I ∝ 1/d²; dobrar a distância reduz a radiação para 1/4!).</li>
            <li><em>Blindagem:</em> Uso rigoroso de aventais plúmbeos, biombos e protetores de tiroide.</li>
          </ul>
        </li>
      </ul>
    `
  },
  {
    topicId: 6,
    title: "Tópico 6: Núcleo Atómico e Propriedades das Forças Nucleares",
    summary: `
      <ul>
        <li><strong>Constituição do Átomo:</strong> Núcleo com protões (Z, carga +1) e neutrões (N, neutros). Número de Massa A = Z + N. Eletrões na nuvem orbital.</li>
        <li><strong>Força Nuclear Forte:</strong> Força extremamente intensa de curto alcance (< 10⁻¹³ cm) que mantém os nucleões unidos, superando a potente repulsão eletrostática de Coulomb entre protões. É atrativa e independente da carga.</li>
        <li><strong>Defeito de Massa e Energia de Ligação (E = Δm · c²):</strong> A massa de um núcleo ligado é menor que a soma dos nucleões livres. A energia equivalente é a energia necessária para desagregar o núcleo.</li>
        <li><strong>Estabilidade Nuclear:</strong> Em átomos com Z > 20, a relação de estabilidade N/Z cresce até ~1,5 para fornecer atração nuclear forte adicional contra a repulsão elétrica dos protões.</li>
        <li><strong>Postulados de Bohr:</strong> Transições eletrónicas entre órbitas quantizadas emitem ou absorvem fotões de energia E = h · f. Saltos para camadas internas no ânodo geram Raios X Característicos.</li>
      </ul>
    `
  },
  {
    topicId: 7,
    title: "Tópico 7: Partículas α, β e Radiações Gama",
    summary: `
      <ul>
        <li><strong>Partícula Alfa (α):</strong> Núcleo de Hélio (⁴₂He²⁺, 2p + 2n). Carga +2, massa ~4 u.m.a. Altíssimo poder de ionização (alto LET), mas <em>baixíssimo poder de penetração</em> (travada por folha de papel ou epiderme). Perigo letal se houver contaminação interna (inalação/ingestão).</li>
        <li><strong>Partícula Beta (β⁻ e β⁺):</strong> Eletrão ou positrão de alta velocidade. Carga -1 ou +1, massa muito pequena. Poder de penetração e ionização médios (travada por lâminas de alumínio ou placas de acrílico). Usada em braquiterapia e PET.</li>
        <li><strong>Radiação Gama (γ):</strong> Radiação eletromagnética pura (fotões sem massa nem carga). Emitida após desexcitação nuclear. <em>Altíssimo poder de penetração</em> (necessita de espessas blindagens de chumbo ou betão denso). Ideal para cintigrafias de diagnóstico.</li>
        <li><strong>Regra de Ouro de Proteção:</strong> Blindagem para radiação beta deve ser feita com plástico/acrílico (o chumbo com partículas beta rápidas geraria radiação de travagem - Raios X secundários indesejados).</li>
      </ul>
    `
  },
  {
    topicId: 8,
    title: "Tópico 8: Isótopos, Isóbaros, Isótonos e Respetivas Aplicações Terapêuticas",
    summary: `
      <ul>
        <li><strong>Famílias Nucleares:</strong>
          <ul>
            <li><em>Isótopos (mesmo Z):</em> Mesmo elemento químico, mesmo n.º de protões, massas A diferentes (ex: ¹³¹₅₃I e ¹²⁷₅₃I). Idêntico comportamento bioquímico!</li>
            <li><em>Isóbaros (mesmo A):</em> Mesma massa A, diferente número atómico Z (ex: ⁴⁰₁₉K e ⁴⁰₂₀Ca).</li>
            <li><em>Isótonos (mesmo N):</em> Mesmo número de neutrões N = A - Z (ex: ³⁰₁₄Si e ³¹₁₅P, ambos com N = 16).</li>
          </ul>
        </li>
        <li><strong>Radioisótopos Clínicos Chave:</strong>
          <ul>
            <li><strong>Iodo-131 (¹³¹I):</strong> Emissor beta e gama. Tratamento e rastreio de cancro da tiroide e hipertiroidismo. Requer isolamento do doente e gestão estrita de urina/saliva.</li>
            <li><strong>Tecnécio-99m (⁹⁹ᵐTc):</strong> Emissor gama puro ideal (140 keV), meia-vida perfeita de 6 horas, sem partículas beta lesivas. Padrão de ouro em cintigrafias diagnósticas.</li>
            <li><strong>Flúor-18 (¹⁸F / ¹⁸F-FDG):</strong> Emissor de positrões (β⁺). A aniquilação com eletrões teciduais produz dois fotões opostos de 511 keV para tomografia PET no rastreio oncológico.</li>
          </ul>
        </li>
      </ul>
    `
  }
];
