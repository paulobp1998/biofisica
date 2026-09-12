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
  },
  // ==========================================
  // TÓPICO 1: NOVAS QUESTÕES (106 a 110)
  // ==========================================
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

  // ==========================================
  // TÓPICO 2: NOVAS QUESTÕES (206 a 210)
  // ==========================================
  {
    id: 206,
    topicId: 2,
    question: "O Momento de uma Força (ou Torque, τ = F · d · sen θ) mede a capacidade que uma força tem de produzir rotação em torno de um ponto de apoio. De que forma o braço da alavanca (d) influencia a força muscular necessária para manter uma articulação em equilíbrio?",
    options: [
      "Quanto mais próximo da articulação o músculo estiver inserido (menor braço d), menor é a força que o músculo tem de gerar.",
      "Quanto maior for o braço da força resistente (distância da carga ao ponto de apoio), maior será o torque que a carga produz, exigindo muito maior força muscular para manter o equilíbrio rotacional.",
      "O braço da alavanca só tem efeito se o corpo estiver em queda livre no vácuo.",
      "O torque articular é sempre constante e independente da distância ao ponto de apoio."
    ],
    correctIndex: 1,
    explanation: "Para haver equilíbrio rotacional numa articulação, a soma dos momentos tem de ser nula: M_potência = M_resistência => F_músculo · d_músculo = F_carga · d_carga. Se uma carga externa estiver muito afastada da articulação (maior d_carga), ela gera um momento resistente muito maior. Para equilibrar, o músculo necessita de contrair com uma força F_músculo substancialmente superior.",
    distractorAnalysis: [
      "Opção A inverte a relação: se d_músculo é menor, o músculo precisa de gerar MAIOR força para produzir o mesmo momento (F = M / d).",
      "Opção C é absurda, pois o momento de força é o princípio universal da mecânica de rotação dos corpos rígidos.",
      "Opção D ignora a dependência direta do torque em relação à distância d (τ = F·d)."
    ],
    nursingApplication: "Ao transportar objetos pesados (ou caixas de soros hospitalares), o enfermeiro deve segurar o peso o mais junto possível ao tronco. Se estender os braços à frente, a distância (d) da carga à articulação lombar triplica, triplicando o momento fletor na coluna e multiplicando a tensão nos músculos e discos lombares para milhares de Newtons."
  },
  {
    id: 207,
    topicId: 2,
    question: "O movimento de elevação do corpo sobre as pontas dos pés (flexão plantar pelo trícipe sural no tornozelo) é o exemplo anatómico clássico de uma alavanca de 2.ª classe (inter-resistente). Qual é a principal característica biomecânica deste tipo de alavanca?",
    options: [
      "A força resistente situa-se entre o ponto de apoio (metatarsos) e a força potente (tendão de Aquiles), apresentando sempre vantagem mecânica de força (VM > 1).",
      "O ponto de apoio situa-se sempre entre a potência e a resistência, tendo vantagem mecânica nula.",
      "A força potente situa-se no meio, obrigando o músculo a fazer o triplo do peso do corpo.",
      "Não permite qualquer sustentação de carga, funcionando apenas como amortecedor passivo."
    ],
    correctIndex: 0,
    explanation: "Na alavanca de 2.ª classe (inter-resistente), a resistência (peso do corpo transmitido pela tíbia ao tornozelo) localiza-se entre o ponto de apoio (cabeças dos metatarsos no chão) e a potência (tração do tendão de Aquiles no calcâneo). Como o braço de potência é sempre maior que o braço de resistência, a vantagem mecânica de força é superior a 1 (VM > 1), permitindo erguer todo o peso corporal com relativa facilidade muscular.",
    distractorAnalysis: [
      "Opção B descreve uma alavanca de 1.ª classe (interfixa).",
      "Opção C descreve uma alavanca de 3.ª classe (interpotente).",
      "Opção D é contrária à função biomecânica primária da marcha humana."
    ],
    nursingApplication: "A alavanca inter-resistente do tornozelo é o mecanismo biofísico que viabiliza a marcha bípede e o equilíbrio em ortostatismo prolongado. No internamento, doentes com repouso prolongado ou lesão do tendão de Aquiles perdem esta vantagem mecânica de sustentação, necessitando de reabilitação motora e apoio de enfermagem na transferência para a poltrona."
  },
  {
    id: 208,
    topicId: 2,
    question: "Num ensaio de tração com registo da curva Tensão-Deformação de um material de borracha ou elastómero sintético (como o látex ou silicone de luvas cirúrgicas), o que delimita o chamado 'Limite Elástico'?",
    options: [
      "O ponto a partir do qual o material se transforma num gás rarefeito.",
      "O valor máximo de tensão que o material pode suportar de modo a que, após a cessação da força, ainda consiga regressar integralmente à sua forma e comprimento originais sem deformação plástica residual.",
      "O ponto em que a temperatura do material atinge o zero absoluto.",
      "O ponto em que a força de tração se anula espontaneamente por ressonância quântica."
    ],
    correctIndex: 1,
    explanation: "O Limite Elástico é o ponto de transição crítico numa curva tensão-deformação: abaixo desse limite, a deformação é estritamente elástica e reversível (o corpo recupera a sua geometria inicial ao descarregar a força). Ultrapassado o limite elástico, o material entra em regime plástico, sofrendo rearranjos microscópicos irreversíveis que deixam uma deformação permanente residual, mesmo após retirar a carga.",
    distractorAnalysis: [
      "Opção A confunde deformação mecânica de sólidos com transições de fase termodinâmicas.",
      "Opção C é falsa: a elasticidade e o limite elástico não dependem do zero absoluto de temperatura.",
      "Opção D é incorreta: a força de tração não se anula por efeitos quânticos em materiais macroscópicos."
    ],
    nursingApplication: "Ao calçar luvas cirúrgicas de látex ou nitrilo, o profissional de enfermagem estica o material. Se a tração for excessiva e ultrapassar o limite elástico, a luva fica com folgas permanentes, perde a adesão anatómica às mãos e pode rasgar (atingindo a tensão de rutura), quebrando a barreira assética e o isolamento de proteção biológica."
  },
  {
    id: 209,
    topicId: 2,
    question: "Em ciência dos materiais, um material como o vidro de uma ampola farmacêutica é classificado como 'frágil', ao passo que o colagénio ou o aço cirúrgico são 'tenazes'. O que define biofisicamente um material Frágil?",
    options: [
      "É um material que se deforma plasticamente durante semanas antes de quebrar.",
      "É um material que fratura subitamente com pouca ou nenhuma deformação plástica prévia assim que ultrapassa o seu limite elástico, absorvendo pouca energia antes da rutura.",
      "É um material que flui espontaneamente à temperatura ambiente como a água.",
      "É um material que possui um Módulo de Young rigorosamente igual a zero."
    ],
    correctIndex: 1,
    explanation: "A fragilidade não significa necessariamente falta de resistência mecânica (o vidro é muito duro e resiste bem à compressão), mas sim a incapacidade de sofrer deformação plástica: sob tração ou flexão, assim que atinge a tensão crítica, propaga fendas à velocidade do som e quebra catastroficamente com absorção mínima de energia mecânica. Pelo contrário, materiais tenazes deformam-se plasticamente absorvendo grande energia antes da fratura.",
    distractorAnalysis: [
      "Opção A descreve um comportamento dúctil com fluência plástica prolongada, o oposto de fragilidade.",
      "Opção C descreve um fluido viscoso de Newton.",
      "Opção D é incorreta: materiais frágeis como o vidro têm alto Módulo de Young (são muito rígidos até quebrarem)."
    ],
    nursingApplication: "Ao abrir ampolas de vidro contendo medicação endovenosa, a fragilidade do vidro faz com que a quebra ocorra por propagação instantânea de fenda ao longo da linha de pré-corte. O enfermeiro deve proteger os dedos com uma compressa estéril e inspecionar a solução com agulhas com filtro, prevenindo cortes nas mãos e aspiração de microfragmentos de vidro para a seringa."
  },
  {
    id: 210,
    topicId: 2,
    question: "Muitos tecidos biológicos humanos, como os ligamentos e os discos intervertebrais, apresentam comportamento Viscoelástico. O que caracteriza a Viscoelasticidade num tecido?",
    options: [
      "O tecido comporta-se exatamente como um metal puro, sem qualquer dependência temporal.",
      "A resposta de deformação mecânica combina propriedades elásticas (recuperação) e propriedades viscosas (dissipação de energia), dependendo da velocidade e da duração temporal com que a força é aplicada.",
      "O tecido perde toda a sua água quando comprimido e nunca mais recupera o volume.",
      "O Módulo de Young do tecido é negativo em todas as temperaturas corporais."
    ],
    correctIndex: 1,
    explanation: "A viscoelasticidade é o comportamento em que os materiais exibem características simultaneamente elásticas (sólido de Hooke) e viscosas (fluido de Newton). Nos tecidos viscoelásticos, a resposta mecânica depende do tempo e da taxa de deformação: se uma carga for aplicada muito rapidamente, o tecido responde com maior rigidez e resistência; se a carga for mantida ao longo do tempo, ocorre relaxamento de tensões e fluência (creep).",
    distractorAnalysis: [
      "Opção A é incorreta: os metais à temperatura ambiente têm comportamento elasto-plástico quase independente do tempo em baixas tensões.",
      "Opção C é falsa: os tecidos viscoelásticos recuperam a sua hidratação e forma inicial quando a carga é retirada.",
      "Opção D é uma impossibilidade física (o módulo de elasticidade de materiais reais é sempre positivo)."
    ],
    nursingApplication: "Devido à viscoelasticidade dos discos intervertebrais, quando um enfermeiro aplica uma mobilização rápida e brusca a um doente, os tecidos biológicos não têm tempo de se adaptar e absorvem a carga como estruturas rígidas, aumentando o risco de lesão. Movimentos progressivos e controlados permitem a acomodação viscoelástica segura dos tecidos."
  },

  // ==========================================
  // TÓPICO 3: NOVAS QUESTÕES (306 a 310)
  // ==========================================
  {
    id: 306,
    topicId: 3,
    question: "O tecido ósseo é um compósito de cristais de hidroxiapatite e fibras de colagénio. Se um osso for submetido a descalcificação ácida (remoção de toda a hidroxiapatite inorgânica, restando apenas a matriz de colagénio), qual será o comportamento mecânico resultante desse osso?",
    options: [
      "Fica extremamente quebradiço e pulveriza-se sob a mais ligeira pressão dos dedos.",
      "Mantém a sua forma anatómica externa, mas torna-se extraordinariamente flexível e elástico como borracha, podendo ser dobrado ou atado num nó sem se quebrar.",
      "Aumenta a sua resistência à compressão axial para o dobro do normal.",
      "Transforma-se instantaneamente num líquido transparente à temperatura corporal."
    ],
    correctIndex: 1,
    explanation: "Esta clássica experiência biomecânica demonstra os papéis da matriz bifásica: sem os cristais de hidroxiapatite mineral (que conferem a rigidez e a dureza), resta apenas a rede tridimensional de colagénio tipo I. O colagénio possui alta resistência à tração e grande flexibilidade elástica, fazendo com que o osso descalcificado se curve facilmente sem quebrar. Em contrapartida, se o osso for calcinado ao fogo (queimando o colagénio e deixando apenas o mineral), torna-se rijo mas frágil como giz.",
    distractorAnalysis: [
      "Opção A descreve o resultado da calcinação térmica (remoção do colagénio), e não da descalcificação.",
      "Opção C é falsa: sem hidroxiapatite, a resistência à compressão é praticamente nula.",
      "Opção D é incorreta: o colagénio continua a ser uma matriz fibrosa sólida e estruturada."
    ],
    nursingApplication: "Em patologias como o raquitismo infantil ou a osteomalácia no adulto (deficiência severa de vitamina D e cálcio), a mineralização da matriz óssea é deficiente. Os ossos dos membros inferiores contêm proporção excessiva de colagénio não-mineralizado, tornando-se maleáveis e curvando-se sob o peso corporal (deformidades em varo ou valgo das pernas)."
  },
  {
    id: 307,
    topicId: 3,
    question: "Os discos intervertebrais da coluna funcionam como amortecedores biomecânicos compostos por um anel fibroso periférico e um núcleo pulposo central gelatinoso. Sob que combinação de solicitações mecânicas o disco intervertebral apresenta MAIOR risco de sofrer rutura do anel e herniação discal?",
    options: [
      "Compressão axial uniforme em decúbito dorsal plano de repouso.",
      "Flexão acentuada do tronco combinada com esforço de torção (rotação axial) e carga de compressão assimétrica.",
      "Imersão ambiental em água aquecida em piscina de reabilitação.",
      "Tração cervical fisiológica suave com colar cervical."
    ],
    correctIndex: 1,
    explanation: "Na flexão do tronco, a face anterior dos corpos vertebrais aproxima-se, comprimindo a porção anterior do disco e forçando o núcleo pulposo gelatinoso para trás (no sentido posterior/póstero-lateral). Se a este movimento se juntar uma força de rotação (torção), metade das lamelas de colagénio do anel fibroso entram em tensão extrema enquanto a outra metade relaxa. A soma de flexão com torção sob carga gera o pico de tensão de cisalhamento que rasga o anel fibroso, provocando hérnia discal.",
    distractorAnalysis: [
      "Opção A é a situação de menor pressão intradiscal de todo o ciclo diário (cerca de 25 mmHg de pressão no disco).",
      "Opção C alivia a pressão mecânica nos discos através da flutuação.",
      "Opção D é uma terapêutica descompressiva que afasta os corpos vertebrais e reduz a compressão do disco."
    ],
    nursingApplication: "A hérnia discal lombar (L4-L5 ou L5-S1) é a lesão ocupacional musculoesquelética mais prevalente nos profissionais de saúde. Para proteger a coluna, o enfermeiro nunca deve rodar o tronco (torção) enquanto inclina o corpo para a frente (flexão) a prestar cuidados a um doente no leito."
  },
  {
    id: 308,
    topicId: 3,
    question: "A Lei de Wolff na fisiologia osteomuscular postula que o osso vivo se remodela e adapta a sua densidade e arquitetura interna em resposta às cargas mecânicas que sobre ele atuam. Que mecanismo biofísico celular está na base desta adaptação?",
    options: [
      "A circulação de ar dentro dos canais ósseos que sopra cálcio para a medula.",
      "A deformação mecânica do osso gera diminutas tensões elétricas (efeito piezoelétrico) e fluxo de fluido intersticial nos canalículos que ativam os osteócitos a estimular a deposição óssea pelos osteoblastos.",
      "A gravidade atrai diretamente átomos de chumbo da atmosfera para substituir as células ósseas.",
      "A ausência de movimento faz com que os ossos aumentem de densidade mineral por acumulação passiva."
    ],
    correctIndex: 1,
    explanation: "O osso possui propriedades piezoelétricas: quando submetido a tensões mecânicas cíclicas de compressão e flexão durante a marcha, a matriz de colagénio e hidroxiapatite gera minúsculos diferenciais de potencial elétrico. Simultaneamente, as forças comprimem os canalículos ósseos gerando fluxos de fluido (shear stress) detetados pelos osteócitos, que sinalizam os osteoblastos para reforçar as trabéculas ósseas nas áreas de maior tensão.",
    distractorAnalysis: [
      "Opção A é uma ficção anatómica: não há circulação de ar nos ossos humanos.",
      "Opção C é falsa: a mineralização depende do metabolismo de fosfato de cálcio mediado pela vitamina D e paratormona.",
      "Opção D contraria o princípio biológico: a imobilidade e ausência de carga inibem os osteoblastos e ativam a reabsorção osteoclástica."
    ],
    nursingApplication: "Em doentes acamados em repouso absoluto prolongado (ou doentes com lesões neurológicas paralisantes), a ausência de cargas mecânicas e do efeito piezoelétrico suspende o estímulo da Lei de Wolff. Ocorre desmineralização óssea acelerada (osteoporose de desuso) e hipercalciúria, predispondo a litíase renal e fraturas por fragilidade no primeiro levante."
  },
  {
    id: 309,
    topicId: 3,
    question: "Os tendões ligam os músculos aos ossos e são constituídos por feixes compactos e paralelos de colagénio tipo I. Qual é a principal propriedade mecânica que permite aos tendões transmitir eficientemente a força gerada pelo músculo?",
    options: [
      "Comportam-se como líquidos perfeitos sem qualquer rigidez estrutural.",
      "Elevadíssima resistência à tração unidirecional com deformação elástica relativamente pequena (~4 a 8%), transmitindo o esforço quase instantaneamente com mínima perda de energia mecânica.",
      "Grande capacidade de contração química independente gerada por mitocôndrias próprias.",
      "Capacidade de girar a 360 graus como parafusos metálicos para enrolar o membro."
    ],
    correctIndex: 1,
    explanation: "A microarquitetura dos tendões consiste em fibrilhas de colagénio orientadas paralelamente ao longo do eixo longitudinal de tração. Esta estrutura unidirecional confere uma resistência à tração excecional (cerca de 50 a 100 MPa) com alta rigidez. Um tendão elástico de mais funcionaria como um elástico frouxo, dissipando a energia e atrasando a resposta motora do membro esquelético.",
    distractorAnalysis: [
      "Opção A confunde estruturas conjuntivas densas com fluidos corporais.",
      "Opção C é falsa: o tendão é um transmissor passivo de força e não possui maquinaria contrátil ativa de miofilamentos.",
      "Opção D é biologicamente impossível e anatomicamente absurda."
    ],
    nursingApplication: "Se um tendão for forçado para além da sua deformação elástica fisiológica (> 8-10% de estiramento relativo), as fibras de colagénio sofrem micro-roturas (tendinite/tendinose) ou rotura completa. O enfermeiro deve instruir doentes em recuperação ortopédica sobre a progressão lenta de cargas para permitir a remodelação tendinosa sem recidivas."
  },
  {
    id: 310,
    topicId: 3,
    question: "A relação comprimento-tensão muscular demonstra que a força ativa máxima que um músculo esquelético consegue desenvolver depende do grau de estiramento prévio dos seus sarcómeros. Em que situação a força de contração ativa é MÁXIMA?",
    options: [
      "Quando o músculo está completamente esticado até ao limite anatómico de rotura das fáscias.",
      "Quando os sarcómeros se encontram no seu comprimento de repouso fisiológico ideal (~2,0 a 2,2 μm), permitindo o número máximo de pontes cruzadas entre os filamentos de actina e miosina.",
      "Quando o músculo está totalmente encurtado ao máximo, com os filamentos de actina a colidirem no centro do sarcómero.",
      "A força muscular é rigorosamente idêntica em qualquer comprimento por ser independente de pontes moleculares."
    ],
    correctIndex: 1,
    explanation: "Pela teoria do filamento deslizante de Huxley, a força muscular depende diretamente do número de pontes cruzadas de miosina ligadas aos filamentos de actina. No comprimento ótimo de repouso (L₀), a sobreposição entre filamentos finos e grossos é máxima. Se o músculo for esticado em demasia, os filamentos afastam-se e as cabeças de miosina não conseguem alcançar a actina; se for encurtado em demasia, os filamentos de actina sobrepõem-se no centro e interferem negativamente.",
    distractorAnalysis: [
      "Opção A diminui a força ativa para valores próximos de zero devido à ausência de sobreposição dos miofilamentos.",
      "Opção C reduz a força de contração por colisão dos filamentos e impedimento estérico molecular.",
      "Opção D ignora a base biofísica molecular e fisiológica da contração muscular."
    ],
    nursingApplication: "Este princípio é crucial na biomecânica de doentes com paresias ou contraturas articulares: manter um membro permanentemente imobilizado em flexão encurta cronicamente os sarcómeros, provocando atrofia muscular e perda dramática de força. O posicionamento funcional fisiológico garantido pelo enfermeiro preserva o comprimento ótimo dos sarcómeros."
  },

  // ==========================================
  // TÓPICO 4: NOVAS QUESTÕES (406 a 410)
  // ==========================================
  {
    id: 406,
    topicId: 4,
    question: "Pela Equação da Continuidade para fluidos incompressíveis (Q = A · v = constante), o caudal volumétrico Q mantém-se constante ao longo de um circuito fechado. Considerando que a área de secção transversal total somada de todos os capilares sistémicos é cerca de 800 a 1000 vezes maior do que a área da artéria Aorta, o que sucede à velocidade média do sangue nos capilares?",
    options: [
      "A velocidade média do sangue nos capilares atinge valores supersónicos para acelerar a oxigenação.",
      "A velocidade média do sangue reduz-se drasticamente para valores mínimos (< 1 mm/s), proporcionando o tempo necessário para as trocas gasosas e metabólicas entre o sangue e os tecidos.",
      "A velocidade média do sangue nos capilares é exatamente igual à velocidade na aorta.",
      "O fluxo de sangue cessa completamente e torna-se um sólido indeformável de Hooke."
    ],
    correctIndex: 1,
    explanation: "Como Q = A · v, a velocidade média de escoamento é inversamente proporcional à área de secção: v = Q / A. Embora um capilar individual seja microscópico, o corpo humano possui biliões de capilares dispostos em paralelo, cuja área de secção transversal total combinada ultrapassa 2500 a 3000 cm² (contra cerca de 3 a 4 cm² da aorta). Consequentemente, a velocidade cai de ~30-40 cm/s na aorta para menos de 0,05 cm/s (0,5 mm/s) nos capilares.",
    distractorAnalysis: [
      "Opção A é fisicamente absurda e provocaria a destruição dos capilares por forças de cisalhamento.",
      "Opção C viola diretamente a lei da conservação da massa descrita pela Equação da Continuidade.",
      "Opção D é uma afirmação sem sentido físico ou biológico."
    ],
    nursingApplication: "A velocidade lentíssima do sangue na rede capilar é uma condição biofísica essencial da vida: se o sangue escoasse rapidamente pelos capilares, não haveria tempo suficiente para a difusão do oxigénio e da glicose para as células, nem para a recolha do dióxido de carbono e resíduos metabólicos. O enfermeiro avalia indiretamente esta perfusão capilar através do teste do tempo de preenchimento capilar (normal < 2 segundos)."
  },
  {
    id: 407,
    topicId: 4,
    question: "O Princípio de Bernoulli estabelece que, ao longo de uma linha de corrente de escoamento, a soma da pressão estática, da pressão dinâmica e da energia potencial gravítica é constante (P + 1/2 ρ·v² + ρ·g·h = constante). O que sucede à pressão lateral exercida pelo sangue contra a parede vascular numa zona onde a artéria sofre um estreitamento severo (estenose)?",
    options: [
      "A pressão lateral aumenta para o dobro do normal na zona estreitada.",
      "Devido ao aumento forçado da velocidade do sangue na constrição (Equação da Continuidade), a energia cinética (pressão dinâmica) sobe acentuadamente, provocando uma queda da pressão lateral estática que pode favorecer o colapso vascular transitório.",
      "A velocidade anula-se e a viscosidade do sangue sobe para o infinito.",
      "A pressão lateral permanece perfeitamente inalterada porque o sangue não obedece a leis físicas."
    ],
    correctIndex: 1,
    explanation: "Pela Equação da Continuidade, ao passar por uma estenose (menor secção A), a velocidade v do fluido aumenta bruscamente. Pelo Princípio de Bernoulli, com o aumento substancial do termo de pressão dinâmica (1/2 ρ·v²), a pressão lateral P que o sangue exerce perpendicularmente contra as paredes do vaso tem de diminuir para conservar a energia total. Em vasos elásticos com paredes fragilizadas, esta diminuição de pressão lateral pode colapsar a artéria.",
    distractorAnalysis: [
      "Opção A confunde a pressão de impacto frontal a montante da obstrução com a pressão lateral no interior do jacto de estenose.",
      "Opção C é absurda: a velocidade aumenta na estenose e a viscosidade intrínseca do sangue não vai para o infinito.",
      "Opção D é falsa: o sangue e o sistema circulatório obedecem rigorosamente aos princípios físicos de conservação da energia."
    ],
    nursingApplication: "Este fenómeno de Bernoulli, associado à turbulência a jusante da estenose, é responsável pelas vibrações parietais que os profissionais de enfermagem auscultam e sentem como 'frémito' ou sopro vascular (como nas fístulas arteriovenosas de doentes em hemodiálise ou nas estenoses carotídeas)."
  },
  {
    id: 408,
    topicId: 4,
    question: "A viscosidade dos fluidos varia marcadamente com a temperatura corporal. O que sucede à viscosidade do sangue humano quando a temperatura central de um doente desce para valores de hipotermia grave (< 32 °C)?",
    options: [
      "A viscosidade diminui drasticamente, tornando o sangue fluido como água pura.",
      "A viscosidade sanguínea aumenta significativamente, elevando a resistência vascular ao escoamento e dificultando a microcirculação periférica dos tecidos.",
      "A viscosidade permanece rigorosamente inalterada porque é fixada geneticamente pelas hemácias.",
      "O sangue ferve e transforma-se em vapor dentro dos vasos periféricos."
    ],
    correctIndex: 1,
    explanation: "Nos líquidos, a viscosidade resulta das forças intermoleculares de atração de Van der Waals. O abaixamento da temperatura reduz a energia cinética das moléculas, permitindo que as forças atrativas intermoleculares e a fricção entre eritrócitos atuem com maior intensidade. Por cada redução de 1 °C na temperatura do sangue, a viscosidade sobe cerca de 2 a 3%, agravando a resistência circulatória e a sobrecarga de trabalho do coração.",
    distractorAnalysis: [
      "Opção A descreve o efeito do aquecimento, e não da hipotermia.",
      "Opção C é falsa: a viscosidade é uma propriedade física fortemente dependente do estado térmico molecular.",
      "Opção D é um disparate termodinâmico completo."
    ],
    nursingApplication: "No bloco operatório e cuidados intensivos, o enfermeiro tem como prioridade a prevenção e reversão ativa da hipotermia (utilizando mantas térmicas de ar aquecido forçado e aquecedores de fluidos intravenosos). O sangue frio e viscoso obstrui a microcirculação, diminui a entrega de oxigénio tecidual e agrava perturbações da coagulação (tríade da morte no trauma: hipotermia, acidose e coagulopatia)."
  },
  {
    id: 409,
    topicId: 4,
    question: "O coração bombeia o sangue de forma intermitente e pulsátil (débito sistólico na ejeção e fluxo nulo na diástole ventricular). Qual é o mecanismo biofísico elástico vascular (Efeito Windkessel) que converte este fluxo pulsátil num escoamento quase contínuo nas arteríolas e capilares periféricos?",
    options: [
      "A complacência elástica das paredes da aorta e grandes artérias, que se expandem elasticamente durante a sístole acumulando energia potencial elástica e recolhem elasticamente durante a diástole impulsionando o sangue para a frente.",
      "A contração mecânica dos alvéolos pulmonares que aspiram o sangue por vácuo contínuo.",
      "A presença de válvulas venosas na aorta ascendente que bloqueiam a circulação no inverno.",
      "A aceleração centrípeta da rotação da Terra que impele os glóbulos vermelhos."
    ],
    correctIndex: 0,
    explanation: "A aorta e as artérias centrais são altamente complacentes (ricas em elastina). Durante a sístole ventricular rápida, cerca de 50% do volume ejetado fica temporariamente retido na dilatação elástica da raiz aórtica. Quando a válvula aórtica se fecha na diástole, as paredes distendidas da aorta retraem-se elasticamente (recoil elástico), restituindo a energia potencial acumulada sob a forma de trabalho mecânico e mantendo o fluxo sanguíneo em escoamento contínuo durante a diástole.",
    distractorAnalysis: [
      "Opção B confunde a mecânica ventilatória pulmonar com a dinâmica arterial aórtica sistémica.",
      "Opção C é anatomicamente falsa: a aorta não possui válvulas venosas e a circulação arterial não se bloqueia com o clima.",
      "Opção D apresenta uma explicação fantasiosa sem nexo na hemodinâmica cardiovascular."
    ],
    nursingApplication: "Com o envelhecimento e a arteriosclerose, a aorta perde as suas fibras elásticas de elastina e sofre deposição de colagénio e cálcio, tornando-se uma 'tubagem rígida'. Sem o Efeito Windkessel elástico, a pressão arterial sistólica dispara e a diastólica cai, gerando a chamada hipertensão sistólica isolada do idoso, diagnosticada e monitorizada diariamente pelo enfermeiro."
  },
  {
    id: 410,
    topicId: 4,
    question: "No choque distributivo/séptico, ocorre uma libertação maciça de mediadores inflamatórios e óxido nítrico que provoca vasodilatação arteriolar generalizada. De acordo com a Lei de Poiseuille e a equação da pressão arterial média (PAM = Débito Cardíaco × Resistência Vascular Periférica), qual é a consequência hemodinâmica direta desta vasodilatação?",
    options: [
      "Aumento drástico e descontrolado da pressão arterial média do doente.",
      "Queda abrupta e crítica da Resistência Vascular Periférica total (RVP), conduzindo a hipotensão arterial severa e falência de perfusão orgânica.",
      "Aumento imediato da viscosidade do sangue para valores semelhantes aos da pasta de dentes.",
      "Encerramento imediato das válvulas bicúspide e aórtica por paragem cardíaca reflexa."
    ],
    correctIndex: 1,
    explanation: "Pela Lei de Poiseuille, a resistência arteriolar depende inversamente da 4.ª potência do raio (R ∝ 1/r⁴). Quando os esfíncteres pré-capilares e arteríolas dilatam simultaneamente em todo o corpo, a Resistência Vascular Periférica (RVP) desaba. Como a pressão arterial média depende do produto do débito cardíaco pela resistência (PAM = DC × RVP), a pressão arterial despenca para níveis de choque profundo que não garantem a perfusão celular.",
    distractorAnalysis: [
      "Opção A é o oposto do que ocorre: a vasodilatação generalizada reduz a pressão e não a aumenta.",
      "Opção C é falsa: a vasodilatação per se não eleva a viscosidade intrínseca do sangue.",
      "Opção D não descreve a fisiopatologia hemodinâmica primária do choque distributivo séptico."
    ],
    nursingApplication: "No reconhecimento precoce do choque séptico, o enfermeiro identifica a hipotensão refratária e o lactato elevado. Como a causa física primária é a perda catastrófica de resistência vascular periférica (vasoplegia), a conduta clínica prescrita passa pela administração de aminas vasoativas vasoconstritoras (como a noradrenalina em perfusão contínua) para forçar o fecho arteriolar e restabelecer a PAM mínima de 65 mmHg."
  },

  // ==========================================
  // TÓPICO 5: NOVAS QUESTÕES (506 a 510)
  // ==========================================
  {
    id: 506,
    topicId: 5,
    question: "Nos equipamentos hospitalares de radiologia convencional e tomografia, os Raios X são produzidos quando eletrões de alta energia acelerados por uma diferença de potencial colidem com um ânodo metálico (geralmente de tungsténio). Qual é o mecanismo físico responsável pela produção da maior fração (~80-90%) dos Raios X num tubo radiológico?",
    options: [
      "Fusão termonuclear dos núcleos de tungsténio com libertação de neutrões térmicos.",
      "Radiação de Travagem (ou Bremsstrahlung), na qual os eletrões rápidos são desacelerados e desviados pelo campo elétrico intenso dos núcleos do tungsténio, convertendo a sua perda de energia cinética num espectro contínuo de fotões de Raios X.",
      "Efeito piezoelétrico gerado pelo aquecimento mecânico do vidro do tubo.",
      "Decaimento radioativo alfa natural do tungsténio à temperatura ambiente."
    ],
    correctIndex: 1,
    explanation: "A radiação de travagem (termo alemão Bremsstrahlung, 'radiação de travagem') ocorre quando um eletrão projetil passa nas proximidades do núcleo atómico do tungsténio. A atração eletrostática positiva do núcleo desvia a trajetória do eletrão e desacelera-o bruscamente. Pelo eletromagnetismo clássico, uma carga elétrica acelerada/desacelerada emite radiação eletromagnética sob a forma de fotões de Raios X de energias variadas, formando o espectro contínuo utilizado no diagnóstico médico.",
    distractorAnalysis: [
      "Opção A descreve reações de fusão nuclear em estrelas ou bombas de hidrogénio, impossíveis num tubo de raios X hospitalar.",
      "Opção C confunde o efeito piezoelétrico de transdutores de ecografia com a física dos tubos de vácuo radiológicos.",
      "Opção D é incorreta: o tungsténio natural é um metal estável que não sofre decaimento alfa espontâneo."
    ],
    nursingApplication: "Num tubo de raios X, apenas cerca de 1% da energia cinética dos eletrões é convertida em raios X úteis; os restantes 99% são transformados em calor extremo! Por esta razão física, os equipamentos de radiologia e TC hospitalares possuem sistemas de refrigeração sofisticados a óleo e ânodos giratórios para dissipar o calor, evitando que o ânodo derreta."
  },
  {
    id: 507,
    topicId: 5,
    question: "Cerca de 70% a 80% do volume celular humano é constituído por água. Quando a radiação ionizante atravessa as células vivas, a maior parte dos danos no DNA celular é produzida por ação INDIRETA através de que processo físico-químico?",
    options: [
      "Congelamento instantâneo da água citoplasmática com quebra mecânica das membranas.",
      "Radiólise da água, onde a radiação quebra as moléculas de H₂O gerando radicais livres altamente reativos (como o radical hidroxilo, OH•) que atacam quimicamente as pontes de hidrogénio e bases do DNA.",
      "Transformação das moléculas de água em átomos de chumbo por transmutação quântica.",
      "Evaporação imediata de todo o sangue com desidratação celular explosiva."
    ],
    correctIndex: 1,
    explanation: "A interação da radiação ionizante com a matéria biológica ocorre por dois caminhos: efeito direto (o fotão ou partícula ioniza diretamente a molécula de DNA) e efeito indireto (o mais comum e frequente). No efeito indireto, a radiação ioniza a água celular abundante (H₂O + radiação -> H₂O⁺ + e⁻), desencadeando reações em cadeia que formam espécies reativas de oxigénio e radicais livres (OH•, H•, H₂O₂), moléculas com eletrões desemparelhados que lesam o DNA e as enzimas celulares.",
    distractorAnalysis: [
      "Opção A é falsa: a radiação ionizante deposita energia quântica e não arrefece o meio celular.",
      "Opção C é alquimia fictícia: fotões de raios X não transformam oxigénio ou hidrogénio em chumbo.",
      "Opção D é absurda para as doses de radiação utilizadas em diagnóstico ou terapêutica médica."
    ],
    nursingApplication: "A eficácia da radioterapia no combate a tumores sólidos depende fortemente da presença de oxigénio tecidual (Efeito do Oxigénio), pois o O₂ 'fixa' as lesões químicas causadas pelos radicais livres da radiólise no DNA tumoral. Em doentes anémicos ou com má perfusão tecidual, a hipóxia tumoral torna as células malignas muito mais resistentes à radioterapia."
  },
  {
    id: 508,
    topicId: 5,
    question: "Na dosimetria das radiações hospitalares, existem diferentes grandezas para quantificar a radiação. Qual é o significado físico da grandeza 'Dose Absorvida' e qual é a sua unidade no Sistema Internacional (SI)?",
    options: [
      "Mede a intensidade da luz visível na sala de cirurgia, expressa em lúmens.",
      "Mede a energia média de radiação ionizante depositada por unidade de massa de matéria (1 Joule por quilograma), expressa em Gray (Gy).",
      "Mede o número de enfermeiros presentes no serviço, expresso em unidades per capita.",
      "Mede a percentagem de oxigénio no ar medicinal, expressa em quilopascals."
    ],
    correctIndex: 1,
    explanation: "A Dose Absorvida (D) quantifica a quantidade de energia radiante depositada pela radiação ionizante em qualquer material por unidade de massa (D = dE / dm). No Sistema Internacional de Unidades (SI), é expressa em Gray (1 Gy = 1 J/kg). Para avaliar o risco biológico nos tecidos humanos, multiplica-se a dose absorvida por fatores de ponderação da radiação e do tecido, obtendo-se a Dose Equivalente e Dose Eficaz, expressas em Sievert (Sv).",
    distractorAnalysis: [
      "Opção A descreve a fotometria ótica de iluminação ambiente (lúmens).",
      "Opção C é uma contagem de recursos humanos sem relação com dosimetria de radiação.",
      "Opção D refere a pressão parcial de gases medicinais e não a absorção de energia ionizante."
    ],
    nursingApplication: "Em oncologia radioterápica, a prescrição médica para tratamento de tumores é expressa em Grays (ex: dose total de 60 Gy fracionada em 30 sessões de 2 Gy diárias). O enfermeiro acompanha o doente na gestão dos efeitos secundários locais decorrentes desta dose absorvida nos tecidos sãos adjacentes (radiodermite, xerostomia, disfagia)."
  },
  {
    id: 509,
    topicId: 5,
    question: "Os profissionais de saúde ocupacionalmente expostos a radiações ionizantes (como enfermeiros em salas de hemodinâmica, cardiologia de intervenção ou bloco operatório com arco em C) utilizam obrigatoriamente um Dosímetro Pessoal de lapela. Qual é a finalidade deste dispositivo?",
    options: [
      "Funciona como um escudo ativo que desvia os raios X para longe do corpo do profissional.",
      "Mede e regista retrospetivamente a dose acumulada de radiação ionizante absorvida pelo profissional ao longo do tempo, garantindo que os limites anuais de dose de segurança (20 mSv/ano) não são excedidos.",
      "Emite um choque elétrico preventivo sempre que a máquina de raios X é ligada.",
      "Desinfeta o vestuário cirúrgico através de micro-ondas contínuas."
    ],
    correctIndex: 1,
    explanation: "O dosímetro pessoal (geralmente termoluminescente - TLD ou de luminescência opticamente estimulada - OSL) é um instrumento de monitorização passiva individual: os cristais armazenam a energia da radiação que incide no profissional. Periodicamente, o dosímetro é lido em laboratório de radioproteção para calcular a dose efetiva acumulada, assegurando que o enfermeiro permanece abaixo do limite legal regulamentar de dose ocupacional (20 mSv por ano na média quinquenal).",
    distractorAnalysis: [
      "Opção A é incorreta: o dosímetro não é uma blindagem e não impede a radiação de incidir no corpo.",
      "Opção C é fantasiosa: o dosímetro é um dispositivo passivo de leitura e não emite choques elétricos.",
      "Opção D é incorreta: o dosímetro serve unicamente para medição de dose e não possui função de desinfeção."
    ],
    nursingApplication: "O uso do dosímetro pessoal à altura do tronco (e por baixo do avental de chumbo, ou duplo dosímetro com um exterior) é uma obrigação deontológica e legal do enfermeiro em serviços com radiação. Permite à Comissão de Radioproteção do hospital monitorizar a segurança ocupacional e intervir caso haja quebra nas boas práticas de proteção."
  },
  {
    id: 510,
    topicId: 5,
    question: "A Radioterapia Oncológica divide-se primariamente em Teleterapia (radioterapia por feixe externo) e Braquiterapia. O que caracteriza a modalidade de Braquiterapia em termos físicos e de administração clínica?",
    options: [
      "O doente é colocado dentro de uma câmara hiperbárica sem qualquer fonte radioativa.",
      "Consiste na colocação de fontes radioativas seladas (como sementes ou fios de Iodo-125, Césio-137 ou Irídio-192) diretamente no interior ou em contacto íntimo com o tecido tumoral a tratar.",
      "Utiliza um acelerador linear colocado a vários quilómetros de distância do hospital.",
      "Baseia-se na ingestão de água mineral engarrafada aquecida no micro-ondas."
    ],
    correctIndex: 1,
    explanation: "O termo 'braqui' provém do grego brakhys (curto/próximo). Na braquiterapia, as fontes radioativas encapsuladas seladas são implantadas diretamente no órgão ou leito tumoral (ex: cancro da próstata, útero, colo uterino). Isto permite debitar uma dose de radiação ionizante letal altíssima concentrada no tumor, enquanto a dose nos tecidos saudáveis circundantes decai abruptamente devido à Lei do Inverso do Quadrado da Distância.",
    distractorAnalysis: [
      "Opção A descreve a medicina hiperbárica oxigenada.",
      "Opção C confunde braquiterapia com teleterapia e exagera absurdamente as distâncias (aceleradores lineares ficam a cerca de 1 metro do doente na sala de tratamento).",
      "Opção D não possui qualquer relação com o tratamento oncológico de física nuclear."
    ],
    nursingApplication: "Nos doentes internados submetidos a braquiterapia temporária ginecológica com fontes de alta taxa de dose, o doente torna-se temporariamente uma 'fonte emissora de radiação'. O enfermeiro organiza os cuidados de enfermagem (higiene, sinais vitais, administração de analgesia) de forma extremamente planeada e rápida, mantendo a distância máxima e utilizando biombos plúmbeos móveis para cumprir o princípio ALARA."
  },

  // ==========================================
  // TÓPICO 6: NOVAS QUESTÕES (606 a 610)
  // ==========================================
  {
    id: 606,
    topicId: 6,
    question: "Ao analisar o gráfico da Energia de Ligação por Nucleão em função do Número de Massa (A), observa-se que a curva atinge o seu valor máximo e pico de estabilidade absoluta perto do nuclídeo de Ferro-56 (⁵⁶₂₆Fe, com cerca de 8,8 MeV por nucleão). Que conclusão fundamental da física nuclear se extrai deste gráfico?",
    options: [
      "O ferro é o elemento mais radioativo e instável da natureza.",
      "Núcleos muito leves aumentam a sua estabilidade sofrendo reações de FUSÃO nuclear, enquanto núcleos muito pesados (como o Urânio) aumentam a sua estabilidade sofrendo reações de FISSÃO nuclear, caminhando ambos em direção à região do Ferro.",
      "Todos os núcleos atómicos transformam-se espontaneamente em átomos de oxigénio em meio biológico.",
      "A energia de ligação nuclear é independente do número de nucleões e constante em todos os elementos."
    ],
    correctIndex: 1,
    explanation: "A curva de energia de ligação por nucleão revela a estabilidade intrínseca dos núcleos: o Ferro-56 e o Níquel-62 têm a maior energia de ligação por partícula, sendo os núcleos mais fortemente coesos do universo. Elementos leves à esquerda (como hidrogénio e deutério) ganham estabilidade e libertam colossal energia fundindo-se (Fusão Nuclear); elementos muito pesados à direita (como Urânio-235) ganham estabilidade e libertam energia dividindo-se (Fissão Nuclear).",
    distractorAnalysis: [
      "Opção A inverte o conceito: maior energia de ligação por nucleão significa MAIOR estabilidade e não instabilidade radioativa.",
      "Opção C é falsa: não ocorrem transmutações nucleares espontâneas gerais para oxigénio.",
      "Opção D é incorreta: a energia por nucleão varia significativamente desde ~1 MeV (deutério) até 8,8 MeV (ferro) e ~7,5 MeV (urânio)."
    ],
    nursingApplication: "A fissão nuclear controlada nos reatores baseia-se precisamente nesta caminhada do Urânio pesado em direção a fragmentos médios mais estáveis. É através da fissão nuclear de alvos de Urânio-235 que são produzidos a nível mundial os radioisótopos essenciais usados diariamente em hospitais (como o Molibdénio-99, que dá origem ao Tecnécio-99m)."
  },
  {
    id: 607,
    topicId: 6,
    question: "A Força Nuclear Forte apresenta uma característica denominada 'Saturação Nuclear'. O que significa esta propriedade física das forças que unem os protões e neutrões?",
    options: [
      "Cada nucleão é capaz de interagir simultaneamente com todos os outros biliões de átomos da sala.",
      "Cada nucleão só consegue interagir e exercer atração nuclear forte com os seus nucleões vizinhos mais imediatos, devido ao alcance finito e ultracurto da força forte (~1 a 2 femtómetros).",
      "A força nuclear forte só atua se o núcleo estiver submerso em solução de cloreto de sódio a 0,9%.",
      "A força forte satura quando o átomo atinge a velocidade da luz no sangue."
    ],
    correctIndex: 1,
    explanation: "Ao contrário da força gravitacional ou da força eletrostática de Coulomb (cujo alcance é infinito e cada carga repele todas as outras cargas presentes no sistema com lei 1/r²), a Força Nuclear Forte satura rapidamente. Como o seu alcance é restrito a cerca de 1,5 × 10⁻¹⁵ m, um nucleão atrai apenas os nucleões com os quais está em contacto direto. Isto explica por que adicionar protões além de certo ponto desestabiliza o núcleo (a repulsão de Coulomb atua sobre todo o núcleo, enquanto a força forte não cresce com os nucleões distantes).",
    distractorAnalysis: [
      "Opção A confunde uma força de alcance subatómico de curto alcance com forças de campo infinito macroscópico.",
      "Opção C é incorreta: a força nuclear forte atua no vácuo do núcleo e não depende de soluções salinas externas.",
      "Opção D é absurda: a força forte satura por limites de alcance espacial e não pela velocidade de fluxo sanguíneo."
    ],
    nursingApplication: "A saturação da força nuclear forte é o motivo pelo qual não existem elementos químicos estáveis com número atómico ilimitado (todos os elementos com Z > 82, como o Bismuto, Polónio, Rádio e Urânio, são radioativos e instáveis). Esta instabilidade natural fornece os radionuclídeos terapêuticos utilizados na oncologia."
  },
  {
    id: 608,
    topicId: 6,
    question: "O Tempo de Meia-Vida Física (ou período de semidesintegração, T_1/2) de um radioisótopo é uma constante física fundamental e invariável. Qual é a sua definição exata?",
    options: [
      "O tempo necessário para que um doente internado recupere metade do seu peso corporal.",
      "O intervalo de tempo necessário para que o número de núcleos radioativos de uma amostra (ou a sua atividade radioativa) decaia para metade do seu valor inicial.",
      "O tempo que um feixe de raios X demora a atravessar o tórax de um doente adulto.",
      "O período em que um radiofármaco permanece congelado no frigorífico antes de expirar a validade."
    ],
    correctIndex: 1,
    explanation: "A meia-vida física (T_1/2) é o tempo característico em que a probabilidade de decaimento faz com que metade dos átomos radioativos de uma dada amostra se desintegrem espontaneamente: N(t) = N₀ · (1/2)^(t / T_1/2). É uma constante física intrínseca de cada radionuclídeo, não sendo alterada por temperatura, pressão, reações químicas ou meio biológico.",
    distractorAnalysis: [
      "Opção A descreve a evolução ponderal nutricional do doente e não a física nuclear.",
      "Opção C descreve o tempo de trânsito fotónico (que é de nanossegundos, à velocidade da luz).",
      "Opção D confunde validade farmacológica de estabilidade química com a desintegração radioativa do núcleo."
    ],
    nursingApplication: "O cálculo de decaimento em função do tempo decorrido é indispensável na enfermagem em medicina nuclear: se uma dose de Tecnécio-99m (T_1/2 = 6 horas) tiver uma atividade de 800 MBq às 08h00, às 14h00 (após 6h) a atividade terá caído para 400 MBq, e às 20h00 (após 12h) para 200 MBq. O enfermeiro deve verificar rigorosamente a hora de calibração para garantir que o doente recebe a atividade prescrita."
  },
  {
    id: 609,
    topicId: 6,
    question: "A Atividade Radioativa (A) de uma fonte é definida como o número de desintegrações nucleares espontâneas que ocorrem por unidade de tempo (A = -dN/dt = λ·N). Qual é a unidade de Atividade Radioativa no Sistema Internacional (SI)?",
    options: [
      "Newton (N)",
      "Becquerel (Bq), que corresponde a 1 desintegração nuclear por segundo.",
      "Pascal (Pa)",
      "Volt por metro (V/m)"
    ],
    correctIndex: 1,
    explanation: "A unidade oficial SI para atividade radioativa é o Becquerel (Bq), nomeado em honra de Henri Becquerel (descobridor da radioatividade espontânea). Um Becquerel equivale a uma desintegração nuclear por segundo (1 Bq = 1 s⁻¹). A unidade histórica anterior, ainda frequentemente usada na prática clínica médica, é o Curie (Ci), onde 1 Ci = 3,7 × 10¹⁰ Bq (correspondente à atividade de 1 grama de Rádio-226).",
    distractorAnalysis: [
      "Opção A é a unidade SI de força (Newton).",
      "Opção C é a unidade SI de pressão (Pascal).",
      "Opção D é a unidade SI de intensidade de campo elétrico."
    ],
    nursingApplication: "Nas prescrições hospitalares em serviços de medicina nuclear, as doses administradas aos doentes são prescritas em Megabecquerels (MBq) ou Gigabecquerels (GBq), ou milicuries (mCi) (por exemplo: 370 MBq de ⁹⁹ᵐTc para cintigrafia óssea, ou 3,7 GBq de ¹³¹I para ablação tiroideia). O enfermeiro confere estas unidades no calibrador de doses antes da injeção."
  },
  {
    id: 610,
    topicId: 6,
    question: "Alguns núcleos atómicos resultantes de um decaimento corpuscular prévio ficam retidos temporariamente num estado excitado antes de emitirem a radiação gama de desexcitação, sendo chamados de 'isómeros nucleares' ou estados metastáveis (assinalados com a letra 'm', como no ⁹⁹ᵐTc). Qual é a importância médica deste estado metastável do Tecnécio-99m?",
    options: [
      "Permite que o elemento se transforme em mercúrio tóxico dentro do corpo do doente.",
      "Permite que o núcleo permaneça num estado excitado durante horas (meia-vida de 6 h), tempo suficiente para ser preparado, acoplado a fármacos específicos, transportado, injetado e detetado pela câmara gama na emissão de 140 keV.",
      "Faz com que o núcleo emita partículas alfa pesadas que destroem o fígado do utente.",
      "Impede que o doente emita qualquer tipo de calor biológico durante 3 dias."
    ],
    correctIndex: 1,
    explanation: "Na maioria das desintegrações nucleares, a emissão gama ocorre em frações infinitesimais de segundo (< 10⁻¹² s). No entanto, em certos núcleos como o Tecnécio-99m, a transição isomérica para o estado fundamental é 'quanticamente desfavorecida', conferindo-lhe uma meia-vida metastável excecional de 6,01 horas. Este intervalo de tempo é a janela perfeita para a logística radiofarmacêutica hospitalar e aquisição imagiológica.",
    distractorAnalysis: [
      "Opção A é falsa: o tecnécio desexcita-se emitindo um fotão gama e transforma-se em Tecnécio-99 fundamental estável (Z=43), e não em mercúrio (Z=80).",
      "Opção C é incorreta: o ⁹⁹ᵐTc é um emissor gama puro sem emissão alfa.",
      "Opção D é uma afirmação sem sentido médico ou biológico."
    ],
    nursingApplication: "O estado metastável do ⁹⁹ᵐTc permite que os serviços de enfermagem e medicina nuclear eluam o tecnécio pela manhã a partir do gerador de molibdénio, preparem a medicação radiomarcada na câmara de fluxo laminar e realizem cintigrafias a dezenas de doentes ao longo de todo o turno de trabalho com máxima segurança e eficácia."
  },

  // ==========================================
  // TÓPICO 7: NOVAS QUESTÕES (706 a 710)
  // ==========================================
  {
    id: 706,
    topicId: 7,
    question: "No decaimento radioativo Beta Mais (β⁺), utilizado na tecnologia imagiológica de PET (Tomografia por Emissão de Positrões), que partícula é ejetada do núcleo atómico instável?",
    options: [
      "Um núcleo pesado de Hélio com carga +2 e massa 4.",
      "Um positrão (a antipartícula do eletrão, possuindo a mesma massa minúscula do eletrão, mas carga elétrica positiva +1).",
      "Um neutrão rápido com carga zero e alta capacidade magnética.",
      "Um átomo de hidrogénio gasoso com velocidade lenta."
    ],
    correctIndex: 1,
    explanation: "No decaimento beta positivo (β⁺), típico de núcleos com excesso de protões (razão N/Z demasiado baixa), um protão nuclear transforma-se num neutrão através da força fraca: p⁺ -> n + e⁺ + νe. A partícula emitida (e⁺) é o positrão, que possui carga elétrica positiva (+1) e massa rigorosamente igual à do eletrão ordinário.",
    distractorAnalysis: [
      "Opção A descreve uma partícula alfa.",
      "Opção C descreve a emissão de neutrões em reações de fissão nuclear.",
      "Opção D é incorreta: núcleos emitem partículas subatómicas elementares ou núcleos de hélio, não átomos neutros completos de hidrogénio."
    ],
    nursingApplication: "O principal radiofármaco emissores de positrões em oncologia é a ¹⁸F-FDG. Ao administrar a injeção endovenosa ao doente, o enfermeiro sabe que cada emissão de positrão resultará, frações de milímetro adiante nos tecidos, na criação de dois fotões de aniquilação gama que permitem localizar metástases com resolução milimétrica."
  },
  {
    id: 707,
    topicId: 7,
    question: "Quando a radiação eletromagnética Gama (γ) interage com a matéria tecidual, ela transfere a sua energia através de três mecanismos físicos fundamentais. Qual destes processos predomina nas gamas de energia média utilizadas habitualmente em radiodiagnóstico e medicina nuclear (~100 keV a 1 MeV)?",
    options: [
      "Efeito Compton (ou difusão inelástica Compton), no qual o fotão gama colide com um eletrão da periferia atómica, cedendo parte da sua energia e sendo desviado com menor frequência.",
      "Fissão espontânea dos átomos de oxigénio da água celular.",
      "Solidificação criogénica do plasma sanguíneo com formação de cristais de gelo.",
      "Desintegração total de todos os protões do núcleo biológico."
    ],
    correctIndex: 0,
    explanation: "Nas energias de fotões comuns em imagiologia médica (~100 keV a vários MeV), o mecanismo dominante de interação com tecidos moles é o Efeito Compton: o fotão gama de alta energia colide com um eletrão das camadas externas (fracamente ligado), ejeta o eletrão (eletrão Compton ionizante) e emerge com energia reduzida e trajetória desviada (radiação dispersa/espalhada).",
    distractorAnalysis: [
      "Opção B descreve a quebra de núcleos pesados e não a interação de fotões gama com a matéria tecidual.",
      "Opção C confunde a deposição de energia eletromagnética com hipotermia criogénica.",
      "Opção D é contrária às leis de conservação da física nuclear (fotões gama não aniquilam protões)."
    ],
    nursingApplication: "O Efeito Compton é a principal fonte de radiação de dispersão (scatter) no bloco operatório e salas de hemodinâmica: o feixe que atinge o doente dispersa-se em todas as direções pelo efeito Compton. É esta radiação espalhada a partir do corpo do doente que atinge a equipa de enfermagem, justificando o uso obrigatório de aventais de chumbo e óculos plumbíferos protetores de cristalino."
  },
  {
    id: 708,
    topicId: 7,
    question: "Na blindagem contra a radiação gama e raios X, o parâmetro denominado 'Camada Hemirredutora' (HVL - Half-Value Layer) de um material atenuador é definido como:",
    options: [
      "A espessura de material necessária para reduzir a intensidade do feixe de radiação a metade (50%) do seu valor inicial.",
      "O tempo que a radiação demora a atravessar uma folha de papel dobrada ao meio.",
      "A percentagem de eletrões que permanecem no estado de repouso após a colisão.",
      "O peso em toneladas de uma barreira de chumbo puro de espessura infinita."
    ],
    correctIndex: 0,
    explanation: "A atenuação da radiação gama na matéria segue uma lei exponencial: I(x) = I₀ · e^(-μ·x). A Camada Hemirredutora (HVL) é a espessura x necessária para que I(x) = I₀ / 2 (ou seja, atenuação de 50%). Por exemplo, se a HVL do chumbo para uma determinada energia for de 4 mm, uma placa de 4 mm reduz a radiação a 50%; duas placas (8 mm) reduzem para 25%; e três placas (12 mm) reduzem para 12,5%.",
    distractorAnalysis: [
      "Opção B confunde espessura física de absorção com tempo de trânsito cinético.",
      "Opção C confunde coeficientes de atenuação fotónica com contagem quântica de eletrões.",
      "Opção D é uma descrição sem qualquer relevância matemática para o conceito de HVL."
    ],
    nursingApplication: "O cálculo de HVL orienta o dimensionamento dos biombos plúmbeos nas enfermarias de medicina nuclear e a espessura das portas e paredes dos quartos de doentes tratados com Iodo-131: adicionar camadas calculadas de blindagem reduz a exposição nos corredores e postos de enfermagem para níveis rigorosamente seguros e inferiores aos limites legais."
  },
  {
    id: 709,
    topicId: 7,
    question: "A grandeza biofísica 'Transferência Linear de Energia' (LET - Linear Energy Transfer) mede a energia média depositada pela radiação por unidade de distância percorrida no tecido biológico (keV/μm). Como se comparam as partículas alfa (α) e os fotões gama (γ) quanto ao seu LET?",
    options: [
      "As partículas alfa são radiações de baixo LET e os raios gama são radiações de alto LET.",
      "As partículas alfa são radiações de ALTO LET (depositam muita energia num percurso minúsculo, causando danos densos e irreparáveis no DNA), enquanto os raios gama são de BAIXO LET (as ionizações são esparsas ao longo de um percurso longo, permitindo maior reparação enzimática celular).",
      "Ambas possuem rigorosamente o mesmo valor de LET em todos os tecidos humanos.",
      "O LET de qualquer radiação anula-se na presença de oxigénio gasoso."
    ],
    correctIndex: 1,
    explanation: "Partículas pesadas e com dupla carga elétrica como a partícula alfa (α) possuem alto LET (~100-200 keV/μm): arrancam eletrões em grande densidade linear ao longo de micras, provocando quebras duplas complexas nas duas cadeias do DNA que as enzimas celulares raramente conseguem reparar. Os raios gama (γ) são radiação de baixo LET (~0,2-2 keV/μm), produzindo ionizações esparsas e maior probabilidade de reparação perfeita do DNA pelas polimerases e ligases celulares.",
    distractorAnalysis: [
      "Opção A inverte as propriedades biofísicas fundamentais de LET das radiações.",
      "Opção C é falsa: a diferença de LET entre alfa e gama é de centenas de vezes.",
      "Opção D não tem qualquer fundamento na radiobiologia."
    ],
    nursingApplication: "O alto LET das partículas alfa explica porque novos fármacos oncológicos (terapia alfa direcionada, como o Rádio-223) são tão eficazes na erradicação de metástases tumorais ósseas resistentes a quimioterapia: a alta densidade de ionização destrói as células cancerosas de forma definitiva e independente do ciclo celular."
  },
  {
    id: 710,
    topicId: 7,
    question: "Em caso de acidente ou derrame com líquidos biológicos (urina, vómito) de um doente submetido a terapêutica ablativa com radioisótopos (contaminação radioativa externa da pele do profissional de saúde), qual é a conduta IMEDIATA de descontaminação cutânea recomendada para o enfermeiro?",
    options: [
      "Aplicar lixívia pura e esfregar vigorosamente com escova de cerdas duras até sangrar a epiderme.",
      "Despir de imediato a roupa contaminada (que retém tipicamente a maior parte do contaminante) e lavar a pele afetada com água tépida e sabão neutro suavemente sem friccionar, evitando abrasões que facilitariam a absorção sistémica do radiofármaco.",
      "Ignorar a exposição, pois a pele é imune a qualquer tipo de radiofármaco.",
      "Expor a pele ao calor de um secador de ar quente para queimar a radiação."
    ],
    correctIndex: 1,
    explanation: "O protocolo de emergência para contaminação externa cutânea exige: 1) Remoção imediata das roupas contaminadas (que retêm até 80-90% dos contaminantes radioativos); 2) Lavagem copiosa da pele sob água corrente tépida (nunca quente, para não vasodilatar os capilares dérmicos) com sabão suave neutro; 3) A lavagem deve ser feita sem esfregar agressivamente, pois escoriações na pele quebrariam a barreira do estrato córneo, transformando uma contaminação externa numa gravíssima contaminação interna por absorção capilar.",
    distractorAnalysis: [
      "Opção A é perigosíssima e contraindicada: lacerar a pele cria portas de entrada vascular direta para o radioisótopo no organismo.",
      "Opção C é uma negligência grave perante os riscos de radiolesão cutânea e contaminação cruzada.",
      "Opção D não remove a matéria radioativa e apenas lesaria termicamente a pele."
    ],
    nursingApplication: "Esta conduta é um pilar da segurança nos serviços de internamento de medicina nuclear: após a descontaminação, o enfermeiro mede a atividade residual na pele com um monitor de contaminação de superfície (contador Geiger-Müller com sonda de janela fina) até atingir os níveis basais de segurança antes de retomar a atividade clínica."
  },

  // ==========================================
  // TÓPICO 8: NOVAS QUESTÕES (806 a 810)
  // ==========================================
  {
    id: 806,
    topicId: 8,
    question: "Por definição rigorosa na física atómica e nuclear, os nuclídeos classificados como ISÓTONOS são aqueles que:",
    options: [
      "Possuem o mesmo número atómico Z e o mesmo número de massa A.",
      "Possuem rigorosamente o mesmo número de neutrões (N = A - Z), mas números atómicos Z e números de massa A diferentes (como o ¹⁴₆C, ¹⁵₇N e ¹⁶₈O, todos com N = 8 neutrões).",
      "Possuem a mesma densidade volúmica e a mesma temperatura de fusão.",
      "São exclusivamente gases nobres que não reagem com o oxigénio."
    ],
    correctIndex: 1,
    explanation: "ISÓTONOS têm o mesmo 'N' (mesmo número de Neutrões, N = A - Z). Como possuem números atómicos Z diferentes, são elementos químicos totalmente distintos com propriedades químicas diferentes, mas cujos núcleos contêm a mesma quantidade de neutrões. Exemplo: Carbono-14 (A=14, Z=6 => N=8), Azoto-15 (A=15, Z=7 => N=8) e Oxigénio-16 (A=16, Z=8 => N=8).",
    distractorAnalysis: [
      "Opção A descreve o mesmo nuclídeo idêntico (mesmo elemento e mesmo isótopo).",
      "Opção C confunde propriedades termodinâmicas macroscópicas com a estrutura do núcleo atómico.",
      "Opção D confunde a família de isótonos com o grupo 18 da tabela periódica (gases nobres)."
    ],
    nursingApplication: "Saber distinguir com clareza Isótopos (mesmo Z / mesmo elemento), Isóbaros (mesmo A / mesma massa) e Isótonos (mesmo N / mesmos neutrões) é uma competência basilar exigida nas avaliações universitárias de Biofísica para o 1.º ano de enfermagem, sedimentando a correta nomenclatura de fármacos e reações de desintegração."
  },
  {
    id: 807,
    topicId: 8,
    question: "No organismo de um doente que recebe um radiofármaco, a taxa de desaparecimento da radioatividade decorre simultaneamente da desintegração física nuclear e da eliminação fisiológica (renal e biliar). Como se define a 'Meia-Vida Efetiva' (T_e) e de que forma se relaciona com a meia-vida física (T_f) e biológica (T_b)?",
    options: [
      "T_e é a soma simples de T_f com T_b (T_e = T_f + T_b).",
      "T_e é dada pela média harmónica: 1/T_e = 1/T_f + 1/T_b (sendo a meia-vida efetiva sempre menor do que a menor das meias-vidas individuais).",
      "T_e é independente da excreção renal e depende apenas da fase da lua.",
      "T_e é sempre infinita em doentes jovens com boa saúde."
    ],
    correctIndex: 1,
    explanation: "A meia-vida efetiva (T_e) quantifica a rapidez real com que a radioatividade decresce no corpo do utente. Como os dois processos de eliminação ocorrem em paralelo (decaimento nuclear intrínseco com constante λ_f e depuração biológica com constante λ_b), as taxas somam-se: λ_e = λ_f + λ_b. Como λ = ln 2 / T, tem-se 1/T_e = 1/T_f + 1/T_b => T_e = (T_f · T_b) / (T_f + T_b). Por consequência matemática, T_e é sempre mais curta do que qualquer uma das meias-vidas isoladas.",
    distractorAnalysis: [
      "Opção A comete o erro grave de somar diretamente tempos em vez de taxas de decaimento/depuração.",
      "Opção C é falsa: a depuração de radiofármacos depende da fisiologia renal e hepática do doente.",
      "Opção D é incorreta: a eliminação biológica e o decaimento físico ocorrem continuamente em qualquer faixa etária."
    ],
    nursingApplication: "Esta fórmula tem enorme relevância clínica para o enfermeiro: ao incentivar ativamente a hidratação oral forçada e a micção frequente num doente após exame cintigráfico ou terapêutica radiometabólica, o enfermeiro acelera a depuração renal, encurtando dramaticamente a meia-vida biológica (T_b) e a meia-vida efetiva (T_e), reduzindo substancialmente a dose de radiação absorvida pela bexiga e pelo corpo do utente!"
  },
  {
    id: 808,
    topicId: 8,
    question: "O Rádio-223 (²²³Ra / Xofigo) é um radiofármaco emissor de partículas alfa utilizado na prática oncológica no tratamento de metástases ósseas dolorosas do cancro da próstata resistente. Qual é o fundamento biofísico da sua ação seletiva no esqueleto?",
    options: [
      "O Rádio pertence ao mesmo grupo químico alcalino-terroso que o Cálcio (Grupo 2 da Tabela Periódica), mimetizando o cálcio e integrando-se ativamente nas áreas de elevada renovação óssea (metástases osteoblásticas), onde as suas partículas alfa destroem as células tumorais com alcance ultracurto.",
      "O Rádio liga-se exclusivamente aos glóbulos brancos da circulação cerebral.",
      "O Rádio transforma o osso em ouro coloidal que alivia a dor por compressão mecânica.",
      "O Rádio emite apenas ondas de calor semelhantes às de um saco de água quente hospitalar."
    ],
    correctIndex: 0,
    explanation: "Na tabela periódica, o Rádio (Ra) situa-se no Grupo 2, abaixo do Cálcio (Ca), partilhando propriedades químicas semelhantes de ião divalente (Ra²⁺). O organismo reconhece o Rádio como um análogo do cálcio e incorpora-o avidamente na matriz mineral de hidroxiapatite nos focos de remodelação óssea rápida característicos das metástases tumorais. Uma vez fixado no osso, emite 4 partículas alfa altamente energéticas que provocam quebras duplas letais no DNA das células cancerosas num raio minúsculo (< 100 μm), preservando a medula óssea a distâncias maiores.",
    distractorAnalysis: [
      "Opção B confunde osso com leucócitos cerebrais.",
      "Opção C é alquimia mitológica.",
      "Opção D confunde energia ionizante nuclear com calor termodinâmico macroscópico."
    ],
    nursingApplication: "Ao administrar Rádio-223 endovenoso ou ao prestar cuidados ao doente, o enfermeiro sabe que a via principal de eliminação deste radiofármaco é gastrointestinal/fecal (cerca de 60% nas fezes). O plano de cuidados de enfermagem inclui o manuseamento meticuloso de arrastadeiras, uso de luvas e lavagem das mãos, orientando o utente para descarregar a sanita duas vezes após cada utilização para proteger a sua família."
  },
  {
    id: 809,
    topicId: 8,
    question: "A esmagadora maioria dos serviços hospitalares de medicina nuclear possui um equipamento blindado denominado 'Gerador de Molibdénio-Tecnécio' (conhecido na gíria como a 'vaca de tecnécio'). Como funciona biofisicamente este sistema gerador pai-filho?",
    options: [
      "O gerador funciona com pilhas comuns de lítio que sintetizam tecnécio a partir de água destilada.",
      "O radioisótopo-pai Molibdénio-99 (⁹⁹Mo, T_1/2 ≈ 66 horas) decai por emissão beta para o radioisótopo-filho Tecnécio-99m (⁹⁹ᵐTc, T_1/2 ≈ 6 horas); o enfermeiro ou técnico elui diariamente o tecnécio filho através da passagem de soro fisiológico estéril pela coluna de alumina.",
      "O gerador queima barras de urânio enriquecido diretamente no balcão da farmácia hospitalar.",
      "O gerador congela o molibdénio para evitar qualquer emissão de radiação antes do Natal."
    ],
    correctIndex: 1,
    explanation: "Como a meia-vida do ⁹⁹ᵐTc é de apenas 6 horas, seria logisticamente impossível transportá-lo de reatores distantes todos os dias. O gerador resolve este problema: o ⁹⁹Mo (pai, meia-vida longa de 66h) fica fortemente adsorvido numa coluna de óxido de alumínio (alumina). À medida que decai, gera o ⁹⁹ᵐTc (filho). O ião pertecnetato de tecnécio liga-se fracamente à alumina e é facilmente lavado ('ordenhado' ou eluído) fazendo passar soro fisiológico estéril (NaCl 0,9%), obtendo-se uma solução pura e pronta de ⁹⁹ᵐTc para radiomarcação de fármacos.",
    distractorAnalysis: [
      "Opção A é contrária à física: baterias químicas não realizam transmutações nucleares.",
      "Opção C é perigosa e falsa: a fissão de urânio ocorre em reatores industriais controlados, e não nos serviços clínicos hospitalares.",
      "Opção D não possui fundamentação na física médica."
    ],
    nursingApplication: "A eluição do gerador de ⁹⁹Mo/⁹⁹ᵐTc é um procedimento diário que exige técnica assética rigorosa para manter a esterilidade da solução injetável de pertecnetato de sódio. O enfermeiro ou radiofarmacêutico realiza testes de controlo de qualidade (como a pesquisa de contaminação por molibdénio - breakthrough de ⁹⁹Mo) antes da injeção no doente."
  },
  {
    id: 810,
    topicId: 8,
    question: "No internamento hospitalar, as fraldas, compressas e materiais descartáveis com fluidos de um doente submetido a terapêutica com radioisótopos (como o Iodo-131) tornam-se resíduos radioativos. Qual é o princípio biofísico de segurança adotado na gestão e eliminação destes resíduos hospitalares?",
    options: [
      "São imediatamente deitados no lixo comum ou incinerados no mesmo dia sem proteção.",
      "São armazenados em recipientes devidamente blindados e identificados num abrigo de resíduos radioativos durante pelo menos 10 meias-vidas físicas, até a sua radioatividade decair espontaneamente para níveis residuais inferiores aos limites regulamentares de isenção.",
      "São fervidos com desinfetante para eliminar a radioatividade do núcleo atómico.",
      "São lavados na máquina de lavar roupa da enfermaria com detergente enzimático comum."
    ],
    correctIndex: 1,
    explanation: "Ao contrário dos resíduos químicos ou biológicos patogénicos (que podem ser destruídos por calor ou produtos químicos), a taxa de desintegração radioativa de um núcleo atómico é INALTERÁVEL por processos físicos ou químicos humanos. A única forma de eliminar a radioatividade é esperar pelo decaimento espontâneo no tempo. Como regra geral de radioproteção, após 10 meias-vidas (10 × T_1/2), a atividade residual desce para menos de 0,1% (1/2¹⁰ = 1/1024 ≈ 0,098%) do valor inicial, permitindo a sua desclassificação segura.",
    distractorAnalysis: [
      "Opção A viola gravíssimamente a lei de radioproteção e contaminaria os circuitos de lixo público e trabalhadores camarários.",
      "Opção C é falsa: nem o calor nem os agentes químicos conseguem alterar a meia-vida ou desativar núcleos radioativos.",
      "Opção D espalharia a contaminação radioativa por toda a roupa hospitalar de outros doentes."
    ],
    nursingApplication: "Para o Iodo-131 (T_1/2 = 8 dias), 10 meias-vidas correspondem a cerca de 80 dias (cerca de 2 meses e meio) de armazenamento blindado antes da eliminação como resíduo hospitalar convencional. O enfermeiro assegura a correta separação destes resíduos em contentores plúmbeos dedicados, prevenindo incidentes radiológicos no hospital."
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
