/**
 * Tópico 3: Sistema Osteomuscular, Locomoção, Trabalho e Potência
 * 200 Questões Clínicas Rigorosas para o 1.º Ano de Enfermagem (IDs 3001 a 3200)
 */

const TOPIC_3_QUESTIONS = [
  {
    "id": 3001,
    "topicId": 3,
    "question": "O tecido ósseo é um biomaterial compósito bifásico. Quais são as duas fases primárias que o constituem e quais as suas respetivas funções mecânicas predominantes?",
    "options": [
      "Fase celular de osteoblastos calcificados (~80%) associada a uma rede elástica de fibras de elastina hidrofílica (~20%).",
      "Fase inorgânica de cristais de hidroxiapatite (~65%) para rigidez e matriz orgânica de colagénio tipo I (~35%) para tenacidade.",
      "Fase mineral de carbonato de cálcio amorfo (~50%) combinada com filamentos contráteis de actina e miosina pura (~50%).",
      "Fase cristalina de fosfato de magnésio (~70%) envolta por uma matriz gelatinosa acelular rica em ácido hialurónico (~30%)."
    ],
    "correctIndex": 1,
    "explanation": "O osso combina a resistência à compressão e rigidez de uma cerâmica mineral (cristais de hidroxiapatite de cálcio [Ca₁₀(PO₄)₆(OH)₂], ~65% do peso seco) com a flexibilidade e tenacidade à tração de um polímero fibroso (fibras de colagénio tipo I, ~35%). Este arranjo compósito confere ao esqueleto uma resistência mecânica incomparavelmente superior à de qualquer um dos componentes isolados.",
    "distractorAnalysis": [
      "Está incorreta: as células ósseas representam menos de 2% do volume total e a proteína estrutural do osso é o colagénio tipo I.",
      "Está incorreta: o mineral ósseo é a hidroxiapatite de fosfato de cálcio e não o carbonato, e o osso não possui miofilamentos contráteis.",
      "Está incorreta: o principal mineral do osso humano é a hidroxiapatite cálcica e a sua matriz sólida possui organização colagénica densa."
    ],
    "nursingApplication": "Na osteogénese imperfeita ('doença dos ossos de vidro'), há uma mutação genética na síntese do colagénio tipo I: o osso mantém o mineral mas perde a flexibilidade orgânica, tornando-se frágil como porcelana. O enfermeiro deve manusear estes recém-nascidos e crianças com suporte plano acolchoado em bloco, pois a simples rotação ou troca de fralda pode fraturar membros."
  },
  {
    "id": 3002,
    "topicId": 3,
    "question": "Em relação ao tipo de solicitação mecânica, sob que forma de esforço o tecido ósseo cortical humano apresenta a sua MÁXIMA resistência à rotura?",
    "options": [
      "Tração axial pura aplicada no sentido perpendicular à linha de alinhamento das lamelas de colagénio cortical.",
      "Cisalhamento transversal exercido obliquamente através da espessura do periósteo e dos canais de Volkmann.",
      "Compressão longitudinal paralela ao longo eixo das osteonas cilíndricas que compõem o córtex ósseo diafisário.",
      "Torção helicoidal dinâmica associada a momentos fletores de alta frequência gerados durante a desaceleração."
    ],
    "correctIndex": 2,
    "explanation": "Devido à sua matriz mineral de hidroxiapatite e orientação paralela dos sistemas de Havers (ósteons), o osso cortical é mais resistente à compressão longitudinal (suporta tensões de rotura de 130 a 190 MPa), apresenta resistência intermediária à tração (80 a 130 MPa) e é muito vulnerável ao cisalhamento e à torção (rotura a apenas 50 a 70 MPa).",
    "distractorAnalysis": [
      "Está incorreta: a resistência à tração (~130 MPa) é cerca de 30% inferior à resistência suportada sob compressão (~190 MPa).",
      "Está incorreta: as tensões de corte transversais são as menos toleradas pelo osso cortical (resistência crítica de apenas ~60 MPa).",
      "Está incorreta: a torção induz tensões combinadas de cisalhamento e tração oblíqua que provocam fraturas espiroidais com facilidade."
    ],
    "nursingApplication": "Este gradiente de resistência mecânica (Compressão > Tração > Cisalhamento/Torção) é a chave para compreender a traumatologia: uma carga axial moderada é bem tolerada pelo fémur, mas um movimento rotacional violento do pé preso ao solo gera torção com fratura helicoidal imediata da tíbia."
  },
  {
    "id": 3003,
    "topicId": 3,
    "question": "O osso cortical (compacto) e o osso esponjoso (trabecular) desempenham papéis mecânicos distintos. Qual é a principal diferença no Módulo de Young (rigidez elástica) entre estes dois tipos de tecido ósseo?",
    "options": [
      "O osso trabecular é vinte vezes mais rígido que o cortical, garantindo proteção contra forças compressivas axiais diretas nos membros.",
      "O osso cortical apresenta comportamento puramente viscoso sem limite elástico, enquanto o trabecular é frágil como cerâmica pura.",
      "O osso trabecular é perfeitamente rígido sob solicitações dinâmicas, transferindo 100% da energia mecânica diretamente para o córtex diafisário.",
      "O osso cortical tem maior Módulo de Young (~18 GPa) para sustentação; o trabecular tem menor módulo (~1 GPa) para absorver impactos."
    ],
    "correctIndex": 3,
    "explanation": "O osso cortical possui baixa porosidade (5 a 10%), formando a parede externa densa das diáfises com alto Módulo de Young (~14 a 20 GPa). O osso trabecular possui alta porosidade (50 a 90%) preenchida por medula óssea, o que lhe confere um Módulo de Young aparente muito menor (0,1 a 4 GPa), funcionando como uma estrutura celular porosa capaz de absorver grande quantidade de energia de deformação mecânica por esmagamento elástico nas epífises articulares.",
    "distractorAnalysis": [
      "Está incorreta: o osso cortical é muito mais rígido e denso (E ~14-20 GPa) do que o osso esponjoso trabecular (E ~0,5-2 GPa).",
      "Está incorreta: o osso cortical é um sólido viscoelástico com limite elástico bem definido e módulo elástico mensurável.",
      "Está incorreta: a estrutura trabecular porosa deforma-se elasticamente para dissipar e amortecer as cargas articulares aplicadas."
    ],
    "nursingApplication": "A estrutura em favo de mel do osso esponjoso nas vértebras e colo do fémur atua como um 'amortecedor de choques' biológico. Em doentes osteoporóticos com perda severa de trabéculas, cargas compressivas habituais provocam fraturas por afundamento vertebral com cifose dorsal progressiva e dor crónica incapacitante."
  },
  {
    "id": 3004,
    "topicId": 3,
    "question": "Por que razão biomecânica a diáfise dos ossos longos humanos (como o fémur, tíbia e úmero) possui uma arquitetura tubular oca (cilindro oco preenchido por canal medular) em vez de ser uma barra de osso maciço?",
    "options": [
      "O formato tubular oco afasta a massa da linha neutra, aumentando o momento de inércia à flexão e torção com menor peso biológico.",
      "O canal medular central vazio permite a circulação livre de ar para manter o osso arrefecido durante a locomoção do indivíduo.",
      "A forma cilíndrica oca reduz a resistência mecânica do membro para garantir que as fraturas ocorram sempre sem deslocamento ósseo.",
      "A cavidade interna oca foi concebida exclusivamente para diminuir a área de contacto cortical e acelerar a velocidade da marcha."
    ],
    "correctIndex": 0,
    "explanation": "Na flexão e na torção, as tensões mecânicas máximas ocorrem nas fibras mais periféricas e são nulas no centro geométrico (linha neutra). Ao concentrar a densa massa óssea na periferia formando um tubo cilíndrico oco, a natureza maximiza o Momento de Inércia (I) e o Momento Polar (J). Para a mesma quantidade de massa óssea, um osso tubular é muito mais resistente à flexão do que uma haste maciça, poupando energia metabólica vital na locomoção.",
    "distractorAnalysis": [
      "Está incorreta: os ossos não contêm ar nem operam por circulação endotérmica de arrefecimento ventilatório na diáfise.",
      "Está incorreta: a evolução biomecânica do esqueleto otimiza a resistência estrutural máxima para suportar cargas sem partir.",
      "Está incorreta: o aumento do momento de inércia de área reforça a resistência à flexão sem comprometer a eficiência muscular da passada."
    ],
    "nursingApplication": "O conhecimento da geometria tubular dos ossos longos ajuda o enfermeiro a compreender a colocação de cavilhas intramedulares em fraturas femorais: a haste metálica introduzida no canal oco restaura a rigidez estrutural à flexão, permitindo carga precoce no pós-operatório."
  },
  {
    "id": 3005,
    "topicId": 3,
    "question": "A célebre 'Lei de Wolff' formulada pelo cirurgião Julius Wolff no século XIX estabelece qual princípio fundamental da mecanobiologia óssea?",
    "options": [
      "A massa óssea mineral permanece imutável desde o final da puberdade, sendo impermeável a qualquer estímulo mecânico externo.",
      "O tecido ósseo remodela a sua densidade e orientação trabecular adaptando-se continuamente às linhas de tensão mecânica aplicadas.",
      "A aplicação continuada de carga mecânica acelera a reabsorção osteoclástica cortical, enfraquecendo progressivamente o esqueleto humano.",
      "O osso vivo atrofia e perde densidade unicamente em resposta ao aumento continuado de tração exercida pelos tendões musculares."
    ],
    "correctIndex": 1,
    "explanation": "A Lei de Wolff descreve a adaptação funcional do esqueleto: onde o osso é submetido a maiores tensões mecânicas compressivas ou trativas regulares, os osteoblastos sintetizam nova matriz óssea e as trabéculas alinham-se ao longo das linhas principais de tensão. Inversamente, na ausência prolongada de carga mecânica (imobilização, repouso no leito prolongado, microgravidade espacial), os osteoclastos reabsorvem matriz, causando rápida osteopenia.",
    "distractorAnalysis": [
      "Está incorreta: a matriz óssea é metabolicamente ativa e renova-se dinamicamente ao longo de toda a vida adulta do indivíduo.",
      "Está incorreta: a solicitação de carga fisiológica estimula a osteogénese e deposição mineral, aumentando a massa óssea local.",
      "Está incorreta: a tração muscular e as forças articulares estimulam o reforço ósseo adaptativo de acordo com a Lei de Wolff."
    ],
    "nursingApplication": "A Lei de Wolff é o fundamento da prescrição de mobilização precoce e bipedestação pelo enfermeiro: doentes mantidos semanas acamados perdem até 1% de massa óssea trabecular por semana. O levante precoce e a marcha assistida exercem as cargas mecânicas essenciais para estimular a osteogénese e prevenir a osteoporose de desuso e hipercalcemia por reabsorção."
  },
  {
    "id": 3006,
    "topicId": 3,
    "question": "Qual é o fenómeno biofísico intrínseco à matriz óssea colagénica que traduz deformações mecânicas em sinais elétricos celulares (mecanotransdução) para ativação dos osteoblastos?",
    "options": [
      "Condução térmica por ondas de infravermelhos libertadas pela fricção mecânica contínua entre as osteonas no interior do córtex.",
      "Libertação osmótica de cristais de cloreto de sódio que se dissolvem no canal medular para regular a hidratação óssea geral.",
      "Efeito piezoelétrico e potenciais de escoamento gerados pela deformação do colagénio e fluxo de fluido iónico nos canalículos.",
      "Propagação de campos magnéticos permanentes induzidos pelo alinhamento molecular estático das células osteocitárias maduras."
    ],
    "correctIndex": 2,
    "explanation": "Quando o osso é comprimido e deformado elasticamente, as fibras assimétricas de colagénio geram minúsculos potenciais elétricos superficiais de natureza piezoelétrica (cargas negativas nas zonas de compressão, estimulando osteoblastos; cargas positivas em tração, ativando osteoclastos). Adicionalmente, o escoamento do fluido intersticial pelos canalículos dos osteócitos gera potenciais de streaming que abrem canais de cálcio mecano-sensíveis, convertendo estresse mecânico em sinalização celular osteogénica.",
    "distractorAnalysis": [
      "Está incorreta: a mecanotransdução não envolve emissão de radiação infravermelha nem calor de atrito intraósseo relevante.",
      "Está incorreta: o sinal biológico primário decorre de micropotenciais elétricos (piezoeletricidade e streaming potentials) e não salinos.",
      "Está incorreta: o mecanismo não decorre de campos magnéticos estáticos, mas de potenciais eletrocinéticos de fluxo iónico intersticial."
    ],
    "nursingApplication": "A mecanotransdução explica a indicação médica de dispositivos de estimulação eletromagnética pulsátil ou ultrassons de baixa intensidade que o enfermeiro programa e aplica em fraturas com atraso de consolidação ou pseudoartroses, 'mimetizando' os potenciais piezoelétricos naturais para estimular a união do foco de fratura."
  },
  {
    "id": 3007,
    "topicId": 3,
    "question": "Na anatomia biomecânica do colo do fémur, a convergência das trabéculas ósseas de compressão e de tração delimita uma zona central triangular de menor densidade óssea conhecida como:",
    "options": [
      "Linha intertrocantérica, zona hipermineralizada que bloqueia a propagação de qualquer momento de flexão mecânica no colo.",
      "Tubérculo adutor, área de ancoragem muscular isenta de linhas de stresse compressivo ou de forças de corte fisiológicas.",
      "Espinha ilíaca ântero-superior, ponto de convergência trabecular onde a tensão mecânica de flexão se anula espontaneamente.",
      "Triângulo de Ward, uma zona de baixa densidade trabecular vulnerável a fraturas por flexão em doentes com osteoporose senil."
    ],
    "correctIndex": 3,
    "explanation": "No colo femoral, as linhas de tensão organizam-se em dois grandes sistemas trabeculares: o sistema trabecular principal de compressão (que vai da cabeça femoral ao córtex medial/calcar) e o sistema principal de tração (do trocânter maior ao bordo superior do colo). No ponto onde estas trajetórias se cruzam e divergem, forma-se o Triângulo de Ward — uma área central com escassa densidade trabecular que se torna extremamente frágil com a perda óssea senil.",
    "distractorAnalysis": [
      "Está incorreta: a linha intertrocantérica é uma crista cortical anatómica e não a área interna de vazio trabecular vulnerável.",
      "Está incorreta: o tubérculo do adutor situa-se na extremidade distal do fémur (joelho) e não no colo proximal femoral.",
      "Está incorreta: a espinha ilíaca ântero-superior é um acidente ósseo do osso ilíaco na pelve e não do fémur proximal."
    ],
    "nursingApplication": "Na densitometria óssea (DXA), o valor de T-score na área do Triângulo de Ward e colo femoral é um preditor direto do risco de fratura da anca. O enfermeiro utiliza esta avaliação para implementar planos individualizados de prevenção de quedas (calçado antiderrapante, iluminação noturna, retirada de tapetes, uso de protetores de anca)."
  },
  {
    "id": 3008,
    "topicId": 3,
    "question": "Quando um doente idoso sofre uma queda simples da própria altura com impacto direto no grande trocânter da anca, qual é o mecanismo biomecânico primário que desencadeia a fratura do colo femoral?",
    "options": [
      "O colo sofre flexão súbita com tração na cortical superior e compressão na inferior, excedendo a tenacidade óssea reduzida.",
      "O colo do fémur sofre tração pura na cortical inferior que faz deslizar a cabeça femoral para o interior da cavidade pélvica.",
      "A cabeça do fémur perde instantaneamente todo o seu volume mineral por impacto hidrostático contra o osso ilíaco acetabular.",
      "O grande trocânter sofre cisalhamento helicoidal com deslocamento simétrico dos meniscos articulares para a cavidade abdominal."
    ],
    "correctIndex": 0,
    "explanation": "O colo femoral funciona como uma viga em consola (cantilever). No impacto lateral contra o pavimento, a força do impacto atua no grande trocânter enquanto a cabeça do fémur é contida pelo acetábulo. Isto sujeita o colo a um momento fletor colossal com cisalhamento acentuado: o córtex superior é puxado sob tração intensa e o inferior comprimido. Como o osso senil osteoporótico é frágil e tem baixa resistência à tração, o colo rompe-se catastroficamente.",
    "distractorAnalysis": [
      "Está incorreta: no momento fletor da queda a cortical superior entra em tração e a cortical inferior em forte compressão.",
      "Está incorreta: o osso não perde volume mineral instantaneamente por compressão, sofrendo rotura mecânica por ultrapassagem da resistência.",
      "Está incorreta: os meniscos pertencem à articulação do joelho e não à anca ou ao grande trocânter femoral."
    ],
    "nursingApplication": "No pós-operatório de osteossíntese ou artroplastia da anca, os cuidados de enfermagem são cruciais: posicionar o membro operado em ligeira abdução com almofada entre as pernas (evitando adução e rotações que luxam a prótese) e manter vigilância rigorosa de sinais de hemorragia ou síndrome compartimental."
  },
  {
    "id": 3009,
    "topicId": 3,
    "question": "Na curva tensão-deformação característica dos ligamentos articulares e tendões musculares submetidos a tração uniaxial, como se designa a região inicial não-linear caracterizada por baixas tensões mecânicas para alongamentos iniciais substanciais?",
    "options": [
      "Região final de fratura catastrófica onde os filamentos moleculares de colagénio se rompem completamente sob tração axial.",
      "Região inicial de baixa rigidez decorrente da retificação e alinhamento das ondulações em repouso das fibras de colagénio.",
      "Zona de deformação plástica irreversível caracterizada pelo estiramento contínuo das fibras sem recuperação elástica.",
      "Ponto de escoamento mecânico onde o Módulo de Young do tendão atinge subitamente um valor rigorosamente nulo sob carga."
    ],
    "correctIndex": 1,
    "explanation": "Em estado de repouso, as fibras de colagénio tipo I nos ligamentos e tendões apresentam uma ondulação natural microscópica ('crimp pattern'). Quando o tecido começa a ser tracionado, a região inicial da curva (toe region, deformações até 2 a 4%) reflete simplesmente o estiramento suave e alinhamento retilíneo dessas ondas com tensão muito baixa. Só após a retificação de todas as fibras é que a curva se torna retilínea na fase elástica linear com alto Módulo de Young.",
    "distractorAnalysis": [
      "Está incorreta: a rotura final ocorre na região de falha estrutural (tensão máxima) e não na região inicial do 'pé'.",
      "Está incorreta: a toe region é totalmente elástica e reversível, correspondendo apenas ao estiramento das ondulações basais.",
      "Está incorreta: o Módulo de Young aumenta progressivamente durante a toe region até atingir a fase linear de rigidez máxima."
    ],
    "nursingApplication": "A existência da 'toe region' confere aos ligamentos e tendões a complacência mecânica essencial para amortecer solavancos articulares em movimentos normais sem gerar tensões bruscas. Exercícios de aquecimento e mobilização passiva suave orientados pelo enfermeiro retificam o colagénio com segurança antes de esforços mecânicos maiores."
  },
  {
    "id": 3010,
    "topicId": 3,
    "question": "Uma entorse da articulação tibiotársica (tornozelo) é classificada em três graus clínicos de gravidade com base na biomecânica de lesão do ligamento talofibular anterior. O que ocorre estruturalmente numa entorse de Grau II?",
    "options": [
      "Microestiramento puramente elástico das fibras sem qualquer laceração estrutural, preservando a estabilidade articular total.",
      "Secção transversal completa de todos os feixes ligamentares com perda absoluta da congruência mecânica da articulação tibiotársica.",
      "Rotura parcial das fibras com ultrapassagem do limite elástico, originando deformação plástica e instabilidade articular moderada.",
      "Calcificação ectópica instantânea da cápsula sinovial que funde a tíbia e o astrágalo num bloco perfeitamente rígido e anquilosado."
    ],
    "correctIndex": 2,
    "explanation": "Na entorse de Grau I, há microestiramento na região elástica/início plástico sem perda de continuidade estrutural das fibras ligamentares. Na entorse de Grau II, a deformação ultrapassa largamente o limite elástico e ocorrem micro e macrorroturas de uma porção substancial das fibras de colagénio, provocando edema marcado, hematoma e laxidão articular detetável. Na entorse de Grau III, há rotura ligamentar completa com instabilidade severa.",
    "distractorAnalysis": [
      "Está incorreta: o microestiramento microscópico sem instabilidade anatómica carateriza uma entorse ligeira de grau 1.",
      "Está incorreta: a secção transversal ligamentar completa com instabilidade grave define uma entorse de grau 3.",
      "Está incorreta: uma entorse aguda produz edema, hematoma e laxidão mecânica e não anquilose ou fusão óssea imediata."
    ],
    "nursingApplication": "No atendimento e acompanhamento de enfermagem a uma entorse de Grau II do tornozelo, o enfermeiro aplica o protocolo PRICE/POLICE: Proteção e Carga Otimizada, Gelo (vasoconstrição local para conter edema), Compressão com ligadura elástica e Elevação do membro acima do nível cardíaco para favorecer a drenagem veno-linfática."
  },
  {
    "id": 3011,
    "topicId": 3,
    "question": "Os tecidos moles periarticulares (como ligamentos, tendões e cápsulas) são viscoelásticos. Qual das seguintes propriedades NÃO é uma característica típica do comportamento viscoelástico?",
    "options": [
      "Dependência temporal evidente da curva tensão-deformação com presença de histerese elástica e dissipação de energia mecânica.",
      "Fenómeno de relaxamento de tensões caracterizado pela diminuição progressiva da tensão interna sob deformação mantida fixa.",
      "Comportamento de fluência (creep) traduzido pelo aumento gradual da deformação quando submetidos a uma carga constante contínua.",
      "Rigidez mecânica instantânea e invariável que é rigorosamente independente da taxa ou velocidade de aplicação da carga externa."
    ],
    "correctIndex": 3,
    "explanation": "Os materiais viscoelásticos são profundamente dependentes da taxa de deformação (strain rate-dependent): quanto mais rápido um tendão ou ligamento é esticado, mais rígido ele se torna (maior Módulo de Young aparente) e maior é a sua tensão de rotura. Dizer que a sua rigidez é independente da velocidade de deformação é FALSO, sendo essa uma característica exclusiva de sólidos puramente elásticos ideais.",
    "distractorAnalysis": [
      "Está incorreta: a histerese mecânica é uma propriedade universal e diagnóstica de materiais viscoelásticos reais.",
      "Está incorreta: o relaxamento de tensões sob deformação mantida é um comportamento clássico e verificado na viscoelasticidade.",
      "Está incorreta: a fluência (creep) traduz fielmente a resposta viscoelástica dependente do tempo sob tensão constante."
    ],
    "nursingApplication": "Como o osso e os ligamentos são mais rígidos a altas velocidades de impacto, um traumatismo súbito e de alta energia (como num acidente de mota) provoca tipicamente rotura ligamentar em pleno corpo da substância, enquanto um estiramento lento em doentes acamados tende a causar avulsão óssea na inserção periosteal."
  },
  {
    "id": 3012,
    "topicId": 3,
    "question": "A cartilagem articular hialina reveste as extremidades ósseas das articulações sinoviais. Qual é o mecanismo biofísico primário ('weeping lubrication' ou lubrificação por exsudações) que lhe permite suportar pressões colossais com coeficiente de atrito quase nulo (μ ≈ 0,002 a 0,02)?",
    "options": [
      "Matriz poroelástica com proteoglicanos que expele água sob compressão e a reabsorve no alívio, garantindo amortecimento e nutrição.",
      "Tecido puramente vascularizado e inervado que se regenera integralmente em vinte e quatro horas após impactos compressivos severos.",
      "Camada sólida incompressível de queratina anidra que elimina todo o atrito mecânico através de vibrações piezoelétricas contínuas.",
      "Membrana elástica impermeável que retém todo o líquido sinovial no interior do osso subcondral para evitar fricção articular."
    ],
    "correctIndex": 0,
    "explanation": "A cartilagem hialina é um tecido avascular poroelástico: 70 a 80% do seu peso é água, retida por glicosaminoglicanos sulfatados (agrecanos) de carga elétrica negativa fixa. Quando a articulação é comprimida pelo peso corporal, a água é lentamente forçada para fora dos microporos da matriz para o espaço articular (weeping lubrication), criando uma almofada fluida hidrodinâmica que suporta mais de 90% da carga mecânica sem atrito direto entre os sólidos.",
    "distractorAnalysis": [
      "Está incorreta: a cartilagem hialina adulta é avascular e aneural, apresentando capacidade de cicatrização e regeneração muito limitada.",
      "Está incorreta: a cartilagem é formada por colagénio tipo II e agrecanos hidratados e não por queratina anidra seca.",
      "Está incorreta: o líquido sinovial banha o espaço articular exterior à cartilagem e não é retido no osso subcondral."
    ],
    "nursingApplication": "Na osteoartrose, a degradação da matriz de agrecanos e colagénio compromete este mecanismo hidrodinâmico: o fluido já não é retido adequadamente, gerando contacto direto osso-com-osso, atrito abrasivo doloroso, crepitação articular e limitação severa da mobilidade, exigindo intervenções de enfermagem para gestão de dor e exercícios em piscina aquecida (hidroterapia)."
  },
  {
    "id": 3013,
    "topicId": 3,
    "question": "A nível molecular e biomecânico, qual é a unidade funcional contrátil do músculo esquelético responsável pela geração de tensão ativa através da teoria do deslizamento dos miofilamentos?",
    "options": [
      "A miofibrilha primária, composta unicamente por moléculas contráteis de tropomiosina sem qualquer ancoragem estrutural distal.",
      "O sarcómero, delimitado entre duas linhas Z sucessivas, contendo filamentos proteicos interdigitados de actina e miosina.",
      "O túbulo T transverso, que gera força mecânica por expansão osmótica direta de eletrólitos solúveis no citoplasma celular.",
      "A placa motora terminal, constituída exclusivamente por recetores nicotínicos que se contraem sob ação da acetilcolina."
    ],
    "correctIndex": 1,
    "explanation": "O sarcómero é a unidade contrátil elementar do músculo estriado esquelético. Durante a contração muscular, os iões cálcio (Ca²⁺) ligam-se à troponina C, expondo os sítios de ligação na actina; as cabeças globulares de miosina hidrolisam ATP, ligam-se à actina e realizam o golpe de força (power stroke), tracionando os filamentos finos em direção ao centro do sarcómero (linha M) e encurtando a distância entre as linhas Z.",
    "distractorAnalysis": [
      "Está incorreta: a tropomiosina é uma proteína reguladora e o sarcómero possui ancoragens firmes nas linhas Z e linha M.",
      "Está incorreta: os túbulos T propagam o potencial de ação e não produzem trabalho mecânico contrátil por expansão.",
      "Está incorreta: a placa motora é uma sinapse química transmissora do sinal neuromuscular e não a estrutura contrátil muscular."
    ],
    "nursingApplication": "No doente em paragem cardiorrespiratória ou após a morte biológica, o esgotamento total do ATP intracelular impede o desprendimento das cabeças de miosina da actina, fixando o músculo num estado de rigidez mecânica permanente e irreversível (rigor mortis). O enfermeiro deve realizar os cuidados pós-morte ao corpo antes do estabelecimento pleno deste fenómeno cadavérico."
  },
  {
    "id": 3014,
    "topicId": 3,
    "question": "A curva da 'Relação Força-Comprimento' do músculo esquelético estabelece que a força ativa máxima de contração isométrica é obtida em que estado?",
    "options": [
      "No comprimento de encurtamento máximo, onde as linhas Z colidem diretamente com os filamentos grossos de miosina no sarcómero.",
      "No alongamento extremo das fibras, onde a ausência de contacto entre actina e miosina permite contrações de força infinita.",
      "No comprimento de repouso ótimo (L₀), onde ocorre a sobreposição ideal entre as pontes cruzadas de miosina e os filamentos de actina.",
      "Em qualquer comprimento muscular aleatório, visto que a força ativa desenvolvida independe da geometria sarcomérica interna."
    ],
    "correctIndex": 2,
    "explanation": "A geração de força muscular ativa depende estritamente do número de pontes cruzadas funcionais estabelecidas simultaneamente entre actina e miosina. No comprimento de repouso ótimo (L₀, sarcómero entre ~2,0 e 2,2 μm), a sobreposição é máxima. Se o músculo for excessivamente encurtado, os filamentos de actina chocam e interferem entre si; se for excessivamente estirado, os filamentos separam-se e as pontes de miosina deixam de conseguir alcançar a actina.",
    "distractorAnalysis": [
      "Está incorreta: no encurtamento excessivo ocorre sobreposição desfavorável e choque das linhas Z, reduzindo a força ativa gerada.",
      "Está incorreta: no alongamento extremo as pontes cruzadas deixam de conseguir ligar-se à actina, anulando a tensão ativa.",
      "Está incorreta: a tensão muscular ativa varia sensivelmente com o comprimento do sarcómero segundo a relação de Gordon e Huxley."
    ],
    "nursingApplication": "No posicionamento do doente no leito, a manutenção de articulações em posições funcionais neutras (ex: pés a 90° com apoio de suporte para evitar 'pé caído', joelhos e ancas ligeiramente fletidos) garante que os músculos operem próximo de L₀, prevenindo contraturas musculares em encurtamento crónico e preservando a força para a reabilitação."
  },
  {
    "id": 3015,
    "topicId": 3,
    "question": "Na dinâmica das contrações musculares esqueléticas, como se classifica uma contração na qual o músculo gera tensão enquanto é forçado a ALONGAR-SE por uma carga externa superior à sua força interna (ex: fase de descida de uma escada ou apoio de um membro)?",
    "options": [
      "Contração concêntrica, caracterizada pela aproximação das origens e inserções tendinosas com encurtamento efetivo das fibras.",
      "Contração isométrica, na qual o músculo desenvolve força máxima estática sem alteração no comprimento articular total do membro.",
      "Contração isocinética, onde a velocidade angular do segmento ósseo se mantém fixa através de atuadores hidráulicos externos.",
      "Contração excêntrica, onde o músculo gera tensão ativa enquanto é forçado a alongar por uma carga externa superior à sua força."
    ],
    "correctIndex": 3,
    "explanation": "Na contração excêntrica (ou trabalho negativo), o músculo produz força de frenagem enquanto o seu comprimento total aumenta sob ação de uma carga externa que supera a força das pontes cruzadas. Biomecanicamente, a contração excêntrica consegue gerar forças absolutas superiores às contrações concêntricas com menor consumo de oxigénio e ATP, mas impõe enormes tensões de cisalhamento que provocam microlesões ultraestruturais na linha Z dos sarcómeros.",
    "distractorAnalysis": [
      "Está incorreta: a contração concêntrica implica encurtamento muscular durante o levantamento ou aceleração de uma carga.",
      "Está incorreta: na contração isométrica não há variação do comprimento global do músculo nem movimento angular articular.",
      "Está incorreta: o termo isocinético descreve uma contração com velocidade angular constante controlada por equipamento especial."
    ],
    "nursingApplication": "A descida de rampas ou escadas por doentes requer potente ação excêntrica do quadríceps. Em doentes idosos com fraqueza muscular, a incapacidade de sustentar a contração excêntrica é a principal causa de 'falha do joelho' e quedas catastróficas, exigindo que o enfermeiro se posicione sempre abaixo do doente na escada para garantir o apoio de segurança."
  },
  {
    "id": 3016,
    "topicId": 3,
    "question": "Do ponto de vista bioenergético e termodinâmico, qual é o rendimento mecânico médio (eficiência mecânica) do músculo esquelético humano na conversão de energia química (ATP) em trabalho mecânico útil?",
    "options": [
      "Cerca de 20% a 25% convertido em trabalho mecânico externo útil, sendo os restantes 75% a 80% dissipados sob a forma de calor corporal.",
      "Aproximadamente 95% a 99% em trabalho mecânico externo direto, gerando uma dissipação térmica quase indetetável no organismo humano.",
      "Menos de 2% em trabalho mecânico efetivo, convertendo-se a quase totalidade do ATP hidrolisado em ondas eletromagnéticas visíveis.",
      "Exatamente 50% de trabalho mecânico e 50% de absorção endotérmica contínua de calor retirado do ar ambiente circundante do doente."
    ],
    "correctIndex": 0,
    "explanation": "A eficiência mecânica máxima do músculo esquelético varia entre 20% e 25%: de cada 100 Joules de energia livre de Gibbs libertados pela hidrólise de ATP nas pontes de miosina e bombas iónicas, apenas 20 a 25 J são convertidos em trabalho mecânico externo. A grande maioria (75-80%) é dissipada como calor no sarcoplasma, sendo este o pilar fundamental da termorregulação e homeotermia humana.",
    "distractorAnalysis": [
      "Está incorreta: o rendimento muscular humano obedece aos limites termodinâmicos, não ultrapassando cerca de 25% de trabalho útil.",
      "Está incorreta: o rendimento de 2% é excessivamente baixo e a energia muscular degrada-se em calor corporal e não em luz.",
      "Está incorreta: a hidrólise do ATP é uma reação fortemente exotérmica que liberta calor no músculo e não absorve calor ambiental."
    ],
    "nursingApplication": "Este elevado calor residual é vital na clínica: quando um doente pós-cirúrgico acorda hipotérmico no Bloco Operatório ou UCPA, o reflexo fisiológico de tremor muscular (shivering) desencadeia contrações repetidas sem trabalho útil, mobilizando 100% da energia na produção de calor para restabelecer a temperatura corporal central (37 °C). O enfermeiro monitoriza o consumo acrescido de O₂ associado a estes tremores."
  },
  {
    "id": 3017,
    "topicId": 3,
    "question": "Na artroplastia total da anca com prótese metálica tradicional (haste femoral em liga de cobalto-crómio ou titânio), o fenómeno indesejável de 'Stress Shielding' (blindagem contra o estresse) decorre diretamente de qual discordância biofísica?",
    "options": [
      "A haste liberta correntes elétricas alternadas que destroem quimicamente os osteoblastos e aceleram a reabsorção da matriz óssea.",
      "A haste metálica rígida tem Módulo de Young muito superior ao osso, absorvendo as cargas e privando o osso da tensão da Lei de Wolff.",
      "A haste metálica sofre corrosão ácida instantânea que dissolve a hidroxiapatite do fémur através de uma reação endotérmica aguda.",
      "O metal exerce atração gravitacional desmedida sobre os osteoclastos vizinhos, concentrando as células líticas no bordo do implante."
    ],
    "correctIndex": 1,
    "explanation": "Pelas leis da mecânica de compósitos em paralelo, estruturas mais rígidas (maior E) suportam uma fração desproporcionalmente maior da carga total. Como as ligas de Co-Cr (E ≈ 210 GPa) e Titânio (E ≈ 110 GPa) são muito mais rígidas do que o osso cortical (E ≈ 18 GPa), a haste femoral metálica 'blinda' o osso proximal da anca, descarregando o esforço apenas na extremidade distal. Privado de estresse fisiológico, o osso proximal reabsorve-se progressivamente por desuso (Lei de Wolff), podendo causar soltura assética da prótese.",
    "distractorAnalysis": [
      "Está incorreta: as ligas de titânio ou cromo-cobalto são biocompatíveis e não emitem correntes elétricas citotóxicas na medula.",
      "Está incorreta: os implantes ortopédicos são extremamente resistentes à corrosão no fluido biológico e não produzem acidez lítica.",
      "Está incorreta: a reabsorção decorre do desuso mecânico (stress shielding) e não de atração gravítica celular diferenciada."
    ],
    "nursingApplication": "O conhecimento do stress shielding motiva o desenvolvimento de próteses com polímeros modernos de baixo módulo e guias de reabilitação específicas: o enfermeiro educa o doente a cumprir a progressão rigorosa de apoio de peso prescrita pela ortopedia para modular as tensões no membro e assegurar a longevidade funcional da prótese."
  },
  {
    "id": 3018,
    "topicId": 3,
    "question": "O Polietileno de Ultra-Alto Peso Molecular (UHMWPE) é amplamente utilizado como componente de deslizamento acetabular em próteses de anca. Qual é a principal complicação biológica a longo prazo resultante do desgaste mecânico deste biomaterial?",
    "options": [
      "O polietileno funde-se termicamente sob o calor do corpo humano, bloqueando a mobilidade articular por adesão química da anca.",
      "O polímero sofre expansão volumétrica de dez vezes o tamanho original, fraturando o osso ilíaco por sobrepressão hidrostática.",
      "A libertação de micropartículas de desgaste por atrito ativa macrófagos, provocando osteólise periprotésica e descolamento asséptico.",
      "O componente converte-se num condutor de eletricidade estática que interfere com a condução dos potenciais de ação cardíacos."
    ],
    "correctIndex": 2,
    "explanation": "Ao longo de milhões de passos da marcha, o atrito cíclico da cabeça metálica ou cerâmica contra o componente de UHMWPE gera triliões de partículas microscópicas de polietileno (0,1 a 1 μm). Os macrófagos sinoviais fagocitam estas partículas mas não conseguem degradá-las, libertando citocinas pró-inflamatórias (TNF-α, IL-1, IL-6) e mediadores osteoclastogénicos (RANKL). Isto provoca destruição óssea massiva ao redor da prótese (osteólise periprotésica) e soltura assética tardia.",
    "distractorAnalysis": [
      "Está incorreta: o UHMWPE tem temperatura de fusão superior a 130 °C, sendo quimicamente estável e sólido à temperatura de 37 °C.",
      "Está incorreta: o polietileno de ultra-alto peso molecular mantém grande estabilidade dimensional e não sofre expansão volumétrica.",
      "Está incorreta: o polietileno é um isolante elétrico inerte que não interfere com a atividade bioelétrica miocárdica."
    ],
    "nursingApplication": "Em consultas de enfermagem de seguimento a doentes com artroplastias com mais de 10 anos de implantação, a queixa insidiosa de dor na virilha ou na coxa ao caminhar deve alertar o enfermeiro para a suspeita de osteólise por débris de polietileno, exigindo encaminhamento urgente para radiografia de controlo antes que ocorra fratura periprotésica."
  },
  {
    "id": 3019,
    "topicId": 3,
    "question": "Durante a flexão forçada do tronco para levantar um doente pesado sem fletir os joelhos, o disco intervertebral lumbossacrado (L5-S1) é submetido a uma compressão estimada de várias centenas de quilogramas-força (milhares de Newtons). Qual é a estrutura interna do disco responsável por resistir a essa força compressiva e redistribuí-la hidrostática e omnidirecionalmente?",
    "options": [
      "O ligamento longitudinal anterior, que sofre compressão axial pura colapsando contra a parede anterior das vértebras lombares.",
      "As apófises espinhosas vertebrais posteriores, que se fundem sob tração contínua anulando o espaço intervertebral anatómico.",
      "As facetas articulares lombo-sacrais, que se dissolvem temporariamente para permitir a curvatura angular máxima da pelve do doente.",
      "O núcleo pulposo hidratado, que é impulsionado para trás contra as fibras posteriores do ânulo fibroso tensionado pela flexão."
    ],
    "correctIndex": 3,
    "explanation": "O núcleo pulposo comporta-se hidromecanicamente como uma almofada hidráulica incompressível no centro do disco: tem um teor hídrico de 70 a 90% contido por uma malha de colagénio tipo II e agrecanos. Quando a coluna é comprimida axialmente, a pressão interna no núcleo pulposo eleva-se e transmite a tensão uniformemente em todas as direções (princípio de Pascal) contra o anel fibroso periférico e os pratos cartilagíneos vertebrais.",
    "distractorAnalysis": [
      "Está incorreta: a flexão lombar alonga e tensiona o ligamento longitudinal posterior e afasta os arcos anteriores sem comprimir o anterior.",
      "Está incorreta: as apófises espinhosas se afastam durante a flexão do tronco, não sofrendo impacto compressivo de fusão.",
      "Está incorreta: as facetas articulares deslizam no plano sagital e mantêm a sua integridade cartilagínea sem dissolução tecidual."
    ],
    "nursingApplication": "Com o envelhecimento e a desidratação discal, o núcleo pulposo perde a sua capacidade hidrostática elástica de redistribuir pressões. Como resultado, as cargas compressivas concentram-se diretamente nas paredes do anel fibroso, tornando a coluna do adulto e do enfermeiro especialmente propensa a fissuras anulares e hérnias de disco se não forem adotadas posturas adequadas."
  },
  {
    "id": 3020,
    "topicId": 3,
    "question": "Uma fratura do tipo 'Espiroide' (ou helicoidal) numa diáfise óssea longa (como na tíbia ou úmero) é produzida quase invariavelmente por qual mecanismo físico de solicitação mecânica?",
    "options": [
      "Momento de torção em torno do longo eixo longitudinal do osso longo, gerando tensões máximas de tração em plano oblíquo a 45°.",
      "Compressão axial simétrica de alta energia cinética que esmaga uniformemente o osso numa linha transversal pura e plana.",
      "Tração axial pura ao longo do córtex diafisário que arranca os topos ósseos sem produzir qualquer inclinação ou rotação local.",
      "Impacto tangencial rombo direto de baixa velocidade aplicado pontualmente na face anterior desprovida de músculos da tíbia."
    ],
    "correctIndex": 0,
    "explanation": "A solicitação de torção gera tensões de cisalhamento máximas no plano transversal e longitudinal, que por sua vez induzem tensões de tração máxima orientadas a 45° em relação ao eixo longo do osso. Como o tecido ósseo é notavelmente fraco em tração e cisalhamento, a fratura inicia-se e propaga-se ao longo desta espiral a 45°, produzindo a linha de fratura helicoidal característica com extremidades pontiagudas cortantes.",
    "distractorAnalysis": [
      "Está incorreta: a compressão axial pura origina fraturas transversais simples, oblíquas curtas ou por impacção cominutiva.",
      "Está incorreta: a tração pura origina fraturas transversais limpas (típicas de avulsão) e não linhas helicoidais em espiral.",
      "Está incorreta: o impacto direto transversal tende a produzir fraturas transversais ou com fragmento em asa de borboleta por flexão."
    ],
    "nursingApplication": "Nas fraturas espiroides, as pontas ósseas espiculadas afiadas podem facilmente perfurar músculos adjacentes, artérias principais (ex: artéria tibial anterior ou artéria braquial) e a própria pele. O enfermeiro deve imobilizar o membro imediatamente na posição encontrada, sem tentar reduções intempestivas que lacerariam vasos e nervos."
  },
  {
    "id": 3021,
    "topicId": 3,
    "question": "Na síndrome compartimental aguda pós-traumática de um membro (frequente após fraturas diafisárias da perna ou antebraço), qual é o fenómeno biofísico patológico de pressão tecidual interna que conduz à isquemia muscular e necrose?",
    "options": [
      "Redução extrema da pressão nos tecidos musculares para valores negativos de vácuo, provocando o colapso e esvaziamento das veias.",
      "Elevação da pressão hidrostática intracompartimental que excede a pressão capilar arteriolar, gerando isquemia tecidual e necrose.",
      "Aumento da temperatura muscular para 60 °C devido à queima acelerada de lípidos armazenados nas fáscias aponevróticas profundas.",
      "Cristalização instantânea dos fluidos intersticiais que perfuram as membranas dos sarcómeros por formação de gelo mecânico."
    ],
    "correctIndex": 1,
    "explanation": "Os compartimentos anatómicos musculares dos membros são delimitados por fascias aponevróticas extremamente rígidas e inextensíveis (baixo módulo de complacência elástica). O sangramento ou edema pós-fratura eleva a pressão intracompartimental de valores normais (<8-10 mmHg) para mais de 30-40 mmHg, aproximando-se da pressão diastólica arterial. A microcirculação capilar colapsa, cessando a perfusão tecidual com hipóxia celular rápida, necrose muscular irreversível e perda de função neurológica.",
    "distractorAnalysis": [
      "Está incorreta: a patologia carateriza-se por sobrepressão hidrostática positiva fechada e rígida e nunca por vácuo ou pressão negativa.",
      "Está incorreta: a síndrome compartimental não envolve hipertermia destrutiva extrema de 60 °C, decorrendo de isquemia hipóxica.",
      "Está incorreta: não ocorre congelamento ou cristalização no membro traumatizado à temperatura corporal fisiológica normal."
    ],
    "nursingApplication": "A deteção precoce da síndrome compartimental é uma competência crítica do enfermeiro: vigilância dos '6 Ps' (Dor intensa desproporcionada e que não cede a opióides / Pain, Palidez / Pallor, Parestesias / Paresthesia, Paralisia / Paralysis, ausência de Pulsos / Pulselessness e Poiquilotermia / Poikilothermia). Qualquer suspeita exige desaperto imediato de ligaduras e notificação urgente para fasciotomia cirúrgica de descompressão."
  },
  {
    "id": 3022,
    "topicId": 3,
    "question": "A resistência mecânica de um tendão à tração é proporcionada predominantemente por qual molécula proteica fibrilar e por qual tipo de ligações intramoleculares?",
    "options": [
      "Filamentos elásticos de queratina dispostos aleatoriamente numa matriz porosa hidrofóbica com baixo Módulo de Young elástico.",
      "Cristais minerais de hidroxiapatite densamente compactados sem presença de qualquer componente proteico ou fibroso na matriz.",
      "Fibras paralelas de colagénio tipo I organizadas em tripla hélice alinhadas estritamente com a linha de ação da força muscular.",
      "Cadeias peptídicas de proteoglicanos solúveis que deslizam livremente sem transmitir qualquer momento de torção ou força motora."
    ],
    "correctIndex": 2,
    "explanation": "O colagénio tipo I compõe cerca de 70 a 80% do peso seco dos tendões. As suas cadeias polipeptídicas organizam-se numa tripla hélice dextrogira estabilizada por ligações cruzadas covalentes mediadas enzimaticamente pela lisiloxidase. Estas pontes cruzadas intermoleculares e interfibrilares bloqueiam o deslizamento prematuro sob tração, conferindo aos tendões uma resistência mecânica à tração prodigiosa de 50 a 100 MPa (comparável à de alguns cabos metálicos industriais leves).",
    "distractorAnalysis": [
      "Está incorreta: os tendões são estruturas ricas em colagénio tipo I fibrilar e não em queratina (que é a proteína epidérmica e ungueal).",
      "Está incorreta: tendões saudáveis não são mineralizados por hidroxiapatite, possuindo flexibilidade elástica indispensável.",
      "Está incorreta: os proteoglicanos constituem a substância fundamental hidratada, sendo o colagénio o responsável pela tração mecânica."
    ],
    "nursingApplication": "Em doentes submetidos a antibioterapia com fluoroquinolonas (como o ciprofloxacino ou levofloxacino) ou corticoterapia prolongada, ocorre inibição da síntese de colagénio e destruição das ligações cruzadas. O enfermeiro deve alertar para o risco elevado de tendinite e rotura espontânea do tendão de Aquiles, orientando o doente a suspender esforços físicos e comunicar dor no calcanhar imediatamente."
  },
  {
    "id": 3023,
    "topicId": 3,
    "question": "O osso humano apresenta comportamento 'Viscoelástico' demonstrado em ensaios laboratoriais. Isto significa que a sua resposta à fratura depende da velocidade com que a carga mecânica é aplicada (strain rate). Quando o osso é carregado a uma taxa de deformação MUITO ELEVADA (impacto rápido), o que sucede?",
    "options": [
      "O osso deforma-se plasticamente de forma idêntica e constante, quer a carga seja aplicada lentamente em minutos ou num milissegundo.",
      "O osso transforma-se num fluido puramente newtoniano que escoa sem resistência quando submetido a impactos de alta velocidade.",
      "A rigidez elástica diminui para zero quando a velocidade de impacto aumenta, comportando-se a diáfise como borracha flexível.",
      "O Módulo de Young e a resistência mecânica aumentam com a velocidade de carga, absorvendo mais energia antes da fratura cominutiva."
    ],
    "correctIndex": 3,
    "explanation": "Devido à viscoelasticidade (atrito do fluido intersticial que escoa nos canalículos e comportamento dos polímeros de colagénio), o osso comporta-se de forma mais rígida e resistente sob impactos rápidos (alta strain rate, como em acidentes de viação): o seu Módulo de Young pode aumentar até 30-50%. Contudo, isto permite armazenar uma quantidade massiva de energia de deformação que, ao ultrapassar o limite, dissipa-se violentamente estilhaçando o osso em múltiplos fragmentos cominutivos e destruindo os tecidos moles circundantes.",
    "distractorAnalysis": [
      "Está incorreta: o osso é viscoelástico e a sua curva tensão-deformação é fortemente dependente da taxa de deformação (strain rate).",
      "Está incorreta: o osso vivo é um sólido estrutural rígido e mineralizado e não um fluido newtoniano desprovido de rigidez elástica.",
      "Está incorreta: a rigidez e a resistência aumentam com o impacto rápido em vez de diminuírem para um comportamento gomoso."
    ],
    "nursingApplication": "Compreender a biofísica da alta taxa de deformação ajuda o enfermeiro a prever o quadro clínico no acolhimento de urgência: acidentes de alta energia (automóvel, atropelamento) resultam em fraturas cominutivas graves com perda de substância óssea, laceração muscular extensa e choque hemorrágico, ao passo que quedas da própria altura (baixa energia) provocam habitualmente fraturas simples de traço único."
  },
  {
    "id": 3024,
    "topicId": 3,
    "question": "Nos ligamentos da coluna vertebral humana, o 'Ligamento Amarelo' (ligamentum flavum) une as lâminas das vértebras adjacentes e apresenta uma coloração amarelada única. Qual é a sua particularidade biofísica e molecular distintiva?",
    "options": [
      "Contém elevada percentagem de elastina (~60 a 70%), conferindo grande elasticidade para evitar o encurvamento do canal medular.",
      "É formado exclusivamente por tecido ósseo compacto mineralizado com a função mecânica de fundir permanentemente as lâminas vertebrais.",
      "Apresenta rigidez superior ao aço cirúrgico para bloquear qualquer movimento de flexão anterior ou rotação da coluna lombar.",
      "Comporta-se como um elemento puramente plástico que deforma irreversivelmente no primeiro movimento de flexão do indivíduo."
    ],
    "correctIndex": 0,
    "explanation": "Ao contrário da quase totalidade dos ligamentos corporais (onde o colagénio predomina largamente), o ligamento amarelo contém cerca de dois terços de fibras de elastina. Isto confere-lhe uma elasticidade quase pura de borracha: pode esticar até 50% além do seu comprimento de repouso sem sofrer deformação plástica permanente. Durante a flexão da coluna ele alonga-se, e na extensão encurta-se sem enrugar ou projetar-se para dentro do canal vertebral, mantendo a coluna em pré-tensão elástica protetora contínua.",
    "distractorAnalysis": [
      "Está incorreta: o ligamento amarelo é um tecido conjuntivo elástico flexível e não um bloco de osso compacto anquilosado.",
      "Está incorreta: o ligamento permite amplitudes fisiológicas amplas de movimento vertebral e não tem a rigidez extrema do aço.",
      "Está incorreta: a sua alta percentagem de elastina confere resiliência e recuperação elástica imediata na extensão do tronco."
    ],
    "nursingApplication": "Na punção lombar e na anestesia epidural, o enfermeiro auxilia o médico observando a progressão da agulha de Tuohy: o avanço através do ligamento amarelo oferece uma resistência elástica característica ('sensação de borracha densa'), seguida de uma súbita 'perda de resistência' ao entrar no espaço epidural. Conhecer esta biofísica tátil assegura a colaboração serena no procedimento."
  },
  {
    "id": 3025,
    "topicId": 3,
    "question": "A osteoporose é uma patologia óssea metabólica de alta prevalência na população idosa. Do ponto de vista da resistência dos materiais e biomecânica estrutural, qual é a alteração primária observada no tecido ósseo osteoporótico?",
    "options": [
      "Proliferação descontrolada de osteoblastos hiperativos que tornam o esqueleto dez vezes mais denso e pesado que o normal.",
      "Perda de massa óssea e adelgaçamento das trabéculas com perda de conectividade, reduzindo a tenacidade e aumentando a fragilidade.",
      "Substituição integral da hidroxiapatite óssea por ligas de magnésio altamente dúcteis que impedem qualquer fratura do fémur.",
      "Aumento da elasticidade das diáfises ósseas através da conversão biológica das fibras de colagénio em filamentos de silicone puro."
    ],
    "correctIndex": 1,
    "explanation": "Na osteoporose, a atividade de reabsorção dos osteoclastos supera a taxa de síntese dos osteoblastos, resultando na perda de volume trabecular ósseo, perfuração de placas ósseas e perda de conectividade tridimensional trabecular. O osso torna-se uma estrutura porosa frágil: a sua resistência à compressão e tenacidade caem para uma fração dos valores jovens, fraturando com energias de impacto insignificantes (fraturas de fragilidade).",
    "distractorAnalysis": [
      "Está incorreta: a osteoporose carateriza-se pela perda líquida de osso por excesso de reabsorção osteoclástica sobre a síntese.",
      "Está incorreta: o distúrbio não substitui o mineral ósseo por ligas metálicas, antes fragiliza a matriz mineral fisiológica existente.",
      "Está incorreta: a perda de osso reduz a resiliência elástica estrutural e não transforma a matriz proteica em silicone sintético."
    ],
    "nursingApplication": "O doente com osteoporose severa necessita de cuidados de enfermagem minuciosos na mobilização: nunca tracionar os membros com força ou aplicar pressões pontuais com os dedos sobre as costelas ou braços, pois até a técnica incorreta de medição da pressão arterial com insuflação brutal da braçadeira pode provocar desconforto extremo ou microfraturas em ossos osteopénicos."
  },
  {
    "id": 3026,
    "topicId": 3,
    "question": "O fenómeno de 'Histerese Mecânica' na cartilagem articular e nos discos intervertebrais é responsável por qual função fisiológica essencial durante a marcha e salto?",
    "options": [
      "Recuperação elástica instantânea a 100% sem qualquer atraso ou perda de energia mecânica durante o ciclo articular de carga.",
      "Solidificação cerâmica irreversível do tecido cartilagíneo quando a frequência da passada na marcha ultrapassa um hertz.",
      "Amortecimento e dissipação da energia mecânica de choque sob calor, protegendo as superfícies ósseas contra cargas de pico.",
      "Conversão de toda a energia de choque em radiação acústica de alta intensidade que ecoa na cavidade medular diafisária."
    ],
    "correctIndex": 2,
    "explanation": "Quando o pé atinge o solo na corrida ou no salto, ondas de choque mecânico transmitem-se ascendentemente pelo esqueleto. Graças à histerese viscoelástica das cartilagens articulares e dos discos intervertebrais, uma parcela considerável da energia cinética do impacto não é devolvida elasticamente (o que faria o corpo ricochetear como uma bola dura), sendo antes absorvida e dissipada no atrito viscoso do líquido sinovial intersticial sob a forma de calor benigno inofensivo.",
    "distractorAnalysis": [
      "Está incorreta: a histerese implica precisamente um desfasamento entre carga e descarga com dissipação de energia sob calor.",
      "Está incorreta: a cartilagem hialina é viscoelástica e não se converte em cerâmica rígida sob frequências fisiológicas de marcha.",
      "Está incorreta: o amortecimento biológico é térmico e reológico no fluido intersticial e não por emissão de ultrassons acústicos."
    ],
    "nursingApplication": "Em doentes com artroplastia total ou amputação de membros inferiores, as próteses modernas incorporam componentes viscoelásticos de elastómero e fibra de carbono com laços de histerese calculados pelo fabricante. O enfermeiro reabilitador acompanha a adaptação da marcha, verificando se o amortecimento da prótese previne a dor lombar compensatória reflexa."
  },
  {
    "id": 3027,
    "topicId": 3,
    "question": "Na análise biomecânica do salto e corrida, o 'Tendão de Aquiles' (tendão do calcâneo) atua como um acumulador mecânico de energia elástica extraordinário. Como se descreve a sua função no ciclo de alongamento-encurtamento (stretch-shortening cycle)?",
    "options": [
      "Comporta-se como um cabo puramente rígido e inextensível que transmite a força dos gémeos sem qualquer amortecimento elástico.",
      "Dissipa 100% da energia mecânica em calor metabólico imediato para evitar que a tíbia sofra momentos fletores na locomoção.",
      "Atua como alavanca interpotente de 3.ª classe com o ponto de aplicação da força localizado na base dos metatarsos anteriores.",
      "Armazena energia elástica de deformação na fase de apoio que restitui elasticamente na propulsão, economizando trabalho muscular."
    ],
    "correctIndex": 3,
    "explanation": "O tendão do calcâneo funciona como uma mola elástica de alta eficiência biológica: durante o apoio do pé na marcha e corrida, as fibras de colagénio sofrem deformação elástica reversível (armazenando energia mecânica elástica). Na fase de impulsão (push-off), o tendão encurta rapidamente libertando essa energia mecânica acumulada por retorno elástico passivo. Este mecanismo de mola reduz o custo energético metabólico da locomoção humana em até 50% comparado a um sistema puramente muscular ativo.",
    "distractorAnalysis": [
      "Está incorreta: o tendão de Aquiles estica até cerca de 6% sob carga fisiológica, funcionando como uma mola biológica resiliente.",
      "Está incorreta: o tendão armazena e devolve mais de 90% da energia elástica de recuo, minimizando o gasto de ATP muscular.",
      "Está incorreta: a elevação do calcanhar sobre o antepé opera como alavanca inter-resistente de 2.ª classe e não de 3.ª classe."
    ],
    "nursingApplication": "A ruptura do tendão de Aquiles é uma lesão traumática incapacitante súbita. No exame clínico auxiliado pelo enfermeiro, o Teste de Thompson (compressão manual da barriga da perna com o doente em decúbito ventral: a ausência de flexão plantar passiva do pé indica descontinuidade mecânica do tendão) confirma a perda total de transmissão da força do tríceps sural ao calcâneo."
  },
  {
    "id": 3028,
    "topicId": 3,
    "question": "O tecido ósseo possui capacidade ímpar de regeneração estrutural através da formação de 'Calo Ósseo' após uma fratura. Qual é a sucessão de fases biomecânicas e histológicas que restaura a rigidez original do osso?",
    "options": [
      "Hematoma inflamatório inicial, formação de calo mole fibrocartilagíneo, calo ósseo duro mineralizado e remodelação cortical.",
      "Calcificação direta da pele sobrejacente com fusão óssea instantânea sem qualquer fase celular de proliferação vascular.",
      "Reabsorção osteoclástica total de todo o osso longo seguida da injeção de uma prótese biológica sintetizada no fígado do doente.",
      "Conversão puramente cartilagínea permanente do membro que anula a necessidade de deposição mineral de fosfato de cálcio."
    ],
    "correctIndex": 0,
    "explanation": "A consolidação da fratura por via secundária obedece a uma evolução mecânica precisa: 1) O hematoma de fratura fornece fatores de crescimento e citocinas; 2) Proliferação de fibroblastos e condroblastos formando o calo cartilagíneo mole (que tolera altas deformações elásticas iniciais); 3) Ossificação endocondral convertendo o calo mole em calo duro de osso entrançado mineralizado, diminuindo a deformação no foco para menos de 2%; 4) Remodelação orientada por osteoclastos e osteoblastos durante meses a anos, recanalizando a medula e restaurando a geometria cilíndrica ótima.",
    "distractorAnalysis": [
      "Está incorreta: a reparação óssea secundária passa obrigatoriamente por fases biológicas sequenciais bem coordenadas.",
      "Está incorreta: o osso fraturado consolida através de hematoma e diferenciação celular local e não por substituição hepática.",
      "Está incorreta: o calo cartilagíneo inicial é temporário e sofre ossificação endocondral indispensável para a rigidez final."
    ],
    "nursingApplication": "O sucesso da consolidação depende criticamente da estabilidade biomecânica garantida pelo enfermeiro: nas primeiras semanas, movimentações grosseiras ou apoios indevidos no membro gessado geram deformações relativas excessivas (>10-15%) no foco da fratura, que rompem os neovasos capilares e impedem a mineralização do calo mole, evoluindo para não-consolidação (pseudoartrose)."
  },
  {
    "id": 3029,
    "topicId": 3,
    "question": "As fáscias musculares profundas (como a fascia lata na coxa) são tecidos conjuntivos densos e inextensíveis que envolvem grupos musculares em compartimentos fechados. Qual é o seu benefício mecânico durante a marcha na circulação de retorno venoso?",
    "options": [
      "Bloqueiam a transmissão do influxo arterial periférico, mantendo o membro em isquemia controlada durante a atividade física.",
      "Conferem contenção rígida que eleva a pressão intramuscular na contração, comprimindo as veias e acelerando o retorno venoso.",
      "Atuam como placas metálicas condutoras que dissipam o excesso de eletrólitos musculares diretamente através dos poros cutâneos.",
      "Dilatam livremente sem exercer qualquer resistência mecânica, permitindo que o músculo duplique de volume sem gerar pressão."
    ],
    "correctIndex": 1,
    "explanation": "A rigidez mecânica (alto Módulo de Young sob tração) das fáscias aponevróticas impede que os músculos se expandam lateralmente sem resistência quando encurtam durante a contração. Consequentemente, o ventre muscular em expansão gera pressões hidrostáticas internas que comprimem o plexo venoso profundo intramuscular e a veia poplítea/femoral. Graças às válvulas parietais unidirecionais das veias, o sangue é 'espremido' superiormente em direção ao átrio direito, funcionando como um verdadeiro coração periférico.",
    "distractorAnalysis": [
      "Está incorreta: a fáscia aponevrótica profunda é essencial para o mecanismo hemodinâmico da bomba muscular sem causar isquemia.",
      "Está incorreta: as fáscias são tecidos conjuntivos densos de colagénio e não placas metálicas condutoras de eletrólitos dérmicos.",
      "Está incorreta: a fáscia profunda possui baixíssima complacência elástica, limitando a expansão radial do ventre muscular."
    ],
    "nursingApplication": "Em doentes imobilizados no leito cirúrgico ou em UCI, a inatividade muscular elimina o funcionamento desta bomba mecânica fáscio-muscular, provocando estase venosa profunda nas veias dos membros inferiores (Tríade de Virchow). O enfermeiro implementa dispositivos de compressão pneumática intermitente (CPI) que insuflam sequencialmente mangas nas pernas para reproduzir mecanicamente as ondas pressóricas da bomba muscular."
  },
  {
    "id": 3030,
    "topicId": 3,
    "question": "O fenómeno de 'Afrouxamento Assético' de uma prótese articular do joelho ou anca sem qualquer infeção bacteriana é primariamente desencadeado por qual cascata biomecânica?",
    "options": [
      "Infeção fulminante por microrganismos multirresistentes que destroem a haste metálica através de libertação de enzimas líticas.",
      "Adesão química excessiva entre o osso e a haste de titânio que bloqueia totalmente a circulação do sangue na medula femoral.",
      "Desgaste de atrito com libertação de microdetritos fagocitados por macrófagos, desencadeando osteólise osteoclástica na interface.",
      "Fratura catastrófica do componente metálico logo no primeiro passo após a intervenção por esgotamento plástico imediato."
    ],
    "correctIndex": 2,
    "explanation": "O descolamento assético é a causa mais comum de falência a longo prazo das artroplastias articulares: não resulta de bactérias, mas da resposta biológica ao desgaste mecânico contínuo de polietileno, cimento ósseo ou metais. As micropartículas (débris) atraem macrófagos e células gigantes que ativam a reabsorção osteoclástica na interface osso-implante. O osso de suporte desaparece e o implante ganha micromovimentos instáveis dolorosos.",
    "distractorAnalysis": [
      "Está incorreta: o afrouxamento assético é uma reação inflamatória crónica estéril a debris e não uma infeção bacteriana ativa.",
      "Está incorreta: a osteólise periprotésica promove a perda de suporte ósseo e mobilidade da haste e não anquilose hiperaderente.",
      "Está incorreta: a falha mecânica ocorre habitualmente na interface osso-implante por perda óssea e não por quebra súbita da haste."
    ],
    "nursingApplication": "O enfermeiro ensina o doente com artroplastia a evitar atividades de impacto repetitivo de alta energia (como correr ou saltar), incentivando modalidades de baixo impacto articular (natação, bicicleta estática, caminhada regular) para diminuir a taxa anual de desgaste e maximizar a longevidade funcional da prótese."
  },
  {
    "id": 3031,
    "topicId": 3,
    "question": "No contexto da mecânica do traumatismo ósseo infantil, por que motivo as crianças sofrem frequentemente fraturas em 'Ramo Verde' (greenstick fracture) em vez das fraturas cominutivas clássicas observadas nos adultos?",
    "options": [
      "O osso da criança é totalmente mineralizado por cristais de quartzo inorgânico que impedem qualquer fratura transversal completa.",
      "A ausência total de circulação arterial nos ossos infantis anula a propagação de ondas mecânicas de tensão pelo córtex diafisário.",
      "As crianças não possuem momento de inércia esquelético, tornando as suas diáfises ósseas imunes a qualquer momento fletor externo.",
      "O osso em crescimento possui maior proporção de colagénio orgânico e periósteo espesso, permitindo grande deformação plástica."
    ],
    "correctIndex": 3,
    "explanation": "O osso da criança tem menor mineralização de hidroxiapatite e uma matriz de colagénio muito flexível com periósteo espesso e resistente. Quando submetido a uma força de flexão violenta, comporta-se tal como um ramo de árvore jovem e verde: encurva-se plasticamente e sofre fratura incompleta apenas no bordo externo sob tração máxima, mantendo a continuidade óssea e periosteal intacta no lado oposto sob compressão.",
    "distractorAnalysis": [
      "Está incorreta: o osso pediátrico é vascularizado e contém hidroxiapatite biológica e não quartzo geológico inerte.",
      "Está incorreta: a fratura em ramo verde decorre da maior tenacidade e flexibilidade do osso jovem e do periósteo resistente.",
      "Está incorreta: as leis da mecânica clássica e a inércia aplicam-se a todos os corpos, sendo o comportamento regido pelos materiais."
    ],
    "nursingApplication": "Nas fraturas em ramo verde do antebraço ou perna de crianças, o alinhamento anatómico e a integridade funcional são preservados muito mais facilmente pelo periósteo intacto. O enfermeiro orienta a família sobre os cuidados com o gesso e tranquiliza os pais quanto ao excelente prognóstico e rápida remodelação óssea infantil."
  },
  {
    "id": 3032,
    "topicId": 3,
    "question": "A rigidez e resistência de uma placa de osteossíntese metálica aparafusada sobre uma fratura do fémur dependem criticamente da sua espessura. Pela fórmula do momento de inércia retangular de uma viga (I = b · h³ / 12), duplicar a espessura (h) da placa metálica aumenta a sua resistência à flexão em quantas vezes?",
    "options": [
      "Aumenta 8 vezes (2³ = 8), pois a rigidez de flexão da placa é proporcional ao momento de inércia que varia com o cubo da espessura.",
      "Aumenta 2 vezes, visto que a rigidez mecânica de uma placa metálica mantém uma relação puramente linear com a sua espessura.",
      "Aumenta 4 vezes (2² = 4), pois a resistência de materiais planos varia estritamente com o quadrado da dimensão transversal média.",
      "Aumenta 16 vezes (2⁴ = 16), uma vez que a flexão de sólidos metálicos obedece à quarta potência da espessura do perfil laminar."
    ],
    "correctIndex": 0,
    "explanation": "Para uma secção transversal retangular de largura b e espessura/altura h, o Momento de Inércia à flexão é proporcional ao cubo da espessura: I = b · h³ / 12. Se a espessura h for duplicada (multiplicada por 2) mantendo-se a mesma largura b, o momento de inércia e a rigidez à flexão são multiplicados por 2³ = 8. Uma pequena alteração na espessura de um implante produz um impacto gigantesco na sua resistência mecânica.",
    "distractorAnalysis": [
      "Está incorreta: a relação não é linear de 1.ª ordem; o momento de inércia de flexão de uma secção retangular é I = b·h³/12.",
      "Está incorreta: a dependência quadrática aplica-se à tensão máxima na superfície (módulo de secção Z = b·h²/6) e não à rigidez.",
      "Está incorreta: a quarta potência da dimensão aplica-se à flexão de cilindros maciços (I = π·r⁴/4) e não à espessura de placas."
    ],
    "nursingApplication": "Compreender como a espessura governa a rigidez permite ao enfermeiro valorizar a fragilidade de placas de reconstrução maleáveis e finas usadas na clavícula ou fíbula, que não foram desenhadas para suportar carga total imediata de marcha, reforçando com o doente a proibição absoluta de apoiar o pé no solo precocemente."
  },
  {
    "id": 3033,
    "topicId": 3,
    "question": "A 'Fadiga Óssea' (bone fatigue) que conduz a fraturas de stress em recrutas militares, desportistas ou doentes com osteoporose resulta de qual fenómeno microestrutural cumulativo?",
    "options": [
      "Impacto mecânico agudo e pontual de energia superior a dez vezes a resistência estática do córtex da diáfise metatarsal.",
      "Acumulação de microfissuras na matriz mineral sob cargas cíclicas repetitivas que supera a capacidade de reparação osteoblástica.",
      "Descalcificação rápida provocada por contrações musculares reflects que evaporam o cálcio ósseo através da transpiração dérmica.",
      "Aumento súbito da densidade óssea que torna o metatarso excessivamente pesado para a resistência do calçado hospitalar."
    ],
    "correctIndex": 1,
    "explanation": "Em cada passo da marcha e corrida, o osso sofre microlesões mecânicas subclínicas impercetíveis. Em condições normais de repouso intercalado, os osteócitos detetam as microfissuras e ativam unidades de remodelação óssea (BMUs) que reabsorvem a área danificada e depositam osso novo. Se o indivíduo for submetido a esforços repetitivos exaustivos contínuos sem repouso biológico adequado, a taxa de iniciação e propagação de microfissuras supera a taxa de osteogénese, coalescendo numa linha macroscópica de fratura por fadiga (fratura de stress).",
    "distractorAnalysis": [
      "Está incorreta: a fratura de stress é uma patologia de sobrecarga cumulativa submáxima e não um trauma agudo de alta energia.",
      "Está incorreta: o cálcio ósseo não evapora pelo suor nem a fadiga mecânica decorre de desmineralização osmótica podal.",
      "Está incorreta: a fadiga decorre de microdanos mecânicos nas osteonas e não de aumento desproporcionado de densidade mineral."
    ],
    "nursingApplication": "Fraturas de stress nos metatarsos ('fratura de marcha') ou na tíbia manifestam-se inicialmente por dor insidiosa aos esforços que alivia em repouso, frequentemente sem alterações visíveis no raio-X convencional inicial. O enfermeiro que atua em saúde ocupacional ou triagem clínica deve recomendar repouso de carga imediato e encaminhar para ressonância magnética precoce."
  },
  {
    "id": 3034,
    "topicId": 3,
    "question": "O cimento ósseo acrílico utilizado na fixação de próteses ortopédicas de artroplastia é o Polimetilmetacrilato (PMMA). Qual é o seu papel mecânico primário na interface entre a prótese metálica e o tecido ósseo do doente?",
    "options": [
      "Funciona como cola biológica adesiva que estabelece ligações covalentes permanentes com as proteínas do colagénio ósseo.",
      "Constitui uma barreira puramente impermeável que impede a passagem de oxigénio gasoso para o interior do canal medular femoral.",
      "Atua como argamassa de redistribuição uniforme das cargas mecânicas, preenchendo o espaço entre a haste metálica e o fémur.",
      "Substitui integralmente o osso esponjoso metafisário através da proliferação celular rápida de novos osteoblastos acrílicos."
    ],
    "correctIndex": 2,
    "explanation": "O PMMA não é uma 'cola' adesiva no sentido químico tradicional; ele atua puramente como um espaçador mecânico de travamento (interlocking) mecânico tridimensional. Ao polimerizar in situ na cavidade medular, molda-se perfeitamente às irregularidades trabeculares do osso esponjoso e à superfície rugosa do metal. Isso distribui o peso corporal uniformemente por uma ampla área de contacto (σ = F / A), eliminando concentrações perigosas de tensão pontual no osso.",
    "distractorAnalysis": [
      "Está incorreta: o PMMA é uma argamassa mecânica de intertravamento e não uma cola química de ligação covalente.",
      "Está incorreta: o cimento acrílico não tem por finalidade isolar o oxigénio nem atua como barreira estanque respiratória.",
      "Está incorreta: o polimetilmetacrilato é um polímero sintético acelular e não possui capacidade proliferativa osteoblástica."
    ],
    "nursingApplication": "Durante a preparação e cimentação com PMMA na sala operatória, o enfermeiro sabe que a polimerização é uma reação altamente exotérmica (liberta calor, atingindo até 70 a 80 °C na fase de cura). O enfermeiro e cirurgião irrigam o campo cirúrgico copiosamente com soro fisiológico frio para evitar necrose térmica do osso adjacente e queda da tensão arterial (síndrome de implantação do cimento ósseo)."
  },
  {
    "id": 3035,
    "topicId": 3,
    "question": "Qual das seguintes articulações sinoviais humanas possui fibrocartilagens de reforço intra-articulares (Meniscos) cuja função biofísica primária é aumentar a congruência articular e a área de contacto, reduzindo substancialmente as pressões de contacto locais (P = F / A)?",
    "options": [
      "Articulação tibiotársica (tornozelo), que contém dois discos fibrocartilaginosos simétricos entre o maléolo e o astrágalo.",
      "Articulação coxofemoral (anca), na qual um menisco em forma de cunha divide a cavidade cotilóide em duas metades estanques.",
      "Articulação interfalângica do polegar, dotada de meniscos cartilagíneos flutuantes que duplicam a velocidade de oposição manual.",
      "Articulação do joelho (femorotibial), através dos meniscos medial e lateral que aumentam a congruência e absorvem choques."
    ],
    "correctIndex": 3,
    "explanation": "Os côndilos femorais são convexos e os pratos tibiais são quase planos ou ligeiramente convexos lateralmente: a congruência geométrica natural entre eles é mínima, o que geraria minúsculas áreas de contacto e tensões compressivas esmagadoras. Os meniscos medial e lateral de fibrocartilagem aumentam a área de apoio em até 3 vezes, absorvendo cerca de 50 a 70% da carga compressiva axial e transformando tensões verticais em tensões circunferenciais de tração na periferia ('hoop stresses').",
    "distractorAnalysis": [
      "Está incorreta: a tibiotársica é uma tróclea de congruência direta sem meniscos fibrocartilaginosos interpostos.",
      "Está incorreta: a anca possui um labrum (lábio) fibrocartilagíneo periférico de vedação e não meniscos divisores internos.",
      "Está incorreta: as articulações interfalângicas não possuem meniscos, dispondo apenas de placa volar e ligamentos colaterais."
    ],
    "nursingApplication": "Após uma meniscectomia total (extirpação cirúrgica do menisco por lesão complexa), a área de contacto femorotibial diminui drasticamente, multiplicando as pressões de contacto sobre a cartilagem articular remanescente por um fator de 2 a 3. Isso acelera a artrose degenerativa, exigindo reabilitação e reforço muscular do quadríceps coordenados pelo enfermeiro."
  },
  {
    "id": 3036,
    "topicId": 3,
    "question": "A rigidez elástica de um músculo em repouso passivo durante o seu alongamento depende primariamente de qual proteína sarcomérica gigante, considerada a maior cadeia polipeptídica simples do corpo humano?",
    "options": [
      "Titina (ou conectina), uma proteína elástica molecular gigante que ancora a miosina às linhas Z e desenvolve tensão passiva.",
      "Mioglobina, que se estica como borracha no sarcoplasma gerando a força elástica necessária para o retorno da fibra muscular.",
      "Acetilcolina, que polimeriza em filamentos rígidos extracelulares que travam mecanicamente o alongamento excessivo da miofibrilha.",
      "Creatina quinase, enzima que cristaliza nas zonas I do sarcómero para conferir rigidez estrutural às fibras musculares em repouso."
    ],
    "correctIndex": 0,
    "explanation": "A Titina é uma macromolécula gigantesca com peso molecular superior a 3800 kDa que se estende desde a linha Z até à linha M do sarcómero. No músculo estriado relaxado, a titina atua como uma mola elástica passiva molecular bidirecional: impede que o sarcómero seja esticado além dos limites fisiológicos seguros, desenvolve a tensão elástica passiva de repouso e garante a centralização rigorosa dos filamentos grossos de miosina no centro do sarcómero.",
    "distractorAnalysis": [
      "Está incorreta: a mioglobina é uma proteína globular transportadora de oxigénio e não um filamento elástico sarcomérico.",
      "Está incorreta: a acetilcolina é um neurotransmissor sináptico que se degrada rapidamente e não forma filamentos elásticos.",
      "Está incorreta: a creatina quinase é uma enzima citosólica do metabolismo energético e não um componente estrutural de mola."
    ],
    "nursingApplication": "Em doentes acamados ou paralisados por lesão neurológica superior, o encurtamento adaptativo crónico da titina e do colagénio perimicial culmina em espasticidade e contraturas articulares permanentes. O enfermeiro executa mobilizações passivas diárias em toda a amplitude de movimento articular para manter a extensibilidade da titina sarcomérica e do tecido conjuntivo."
  },
  {
    "id": 3037,
    "topicId": 3,
    "question": "Quando um enfermeiro aplica uma tala gessada de imobilização num membro fraturado, é de rigor clínico imperativo verificar se o bordo do gesso não exerce compressão focal mecânica sobre o 'Nervo Fibular Comum' (ciático poplíteo externo) no colo da fíbula. Qual é a complicação biomecânica e motora imediata se este nervo for submetido a isquemia por compressão contínua?",
    "options": [
      "Perda imediata da sensibilidade gustativa lingual devido à transmissão de pressões gessadas pela via do nervo vago periférico.",
      "Paresia ou paralisia dos músculos do compartimento anterior da perna com pé pendente por compressão do nervo fibular comum.",
      "Ruptura espontânea da artéria femoral profunda na prega inguinal por aumento do atrito estático da tala na cabeça da fíbula.",
      "Anquilose rígida definitiva da articulação da anca ipsilateral decorrente da imobilização seletiva dos dedos do membro inferior."
    ],
    "correctIndex": 1,
    "explanation": "O nervo fibular comum contorna superficialmente o colo ósseo da fíbula (peróneo), estando coberto apenas por pele e fáscia fina. Se a tala ou o gesso apertado exercer uma pressão mecânica focal sobre este ponto, a microcirculação intraneural (vasa nervorum) é ocluída com isquemia axonal e desmielinização mecânica (neuropraxia ou axonotmese). O doente perde a inervação dos músculos tibial anterior e fibulares, arrastando a ponta do pé ao caminhar ('pé caído' / drop foot).",
    "distractorAnalysis": [
      "Está incorreta: a compressão na cabeça da fíbula afeta a inervação do membro inferior e não as vias dos nervos cranianos.",
      "Está incorreta: a compressão na cabeça da fíbula é local e não tem repercussão mecânica direta na artéria femoral na virilha.",
      "Está incorreta: a imobilização gessada distal não anquilosa a anca se esta se mantiver livre e fora do aparelho gessado."
    ],
    "nursingApplication": "A vigilância neurovascular periférica é um cuidado de enfermagem elementar nos doentes com talas ou trações: inspecionar o colo da fíbula acolchoando-o com algodão ortopédico e avaliar rotineiramente a capacidade do doente para estender o hálux e levantar a ponta do pé ativamente contra a gravidade."
  },
  {
    "id": 3038,
    "topicId": 3,
    "question": "Em biomecânica, qual é o papel funcional e reológico dos 'Proteoglicanos' (compostos por cadeias de condroitin-sulfato e queratan-sulfato ligadas ao ácido hialurónico) na matriz da cartilagem articular?",
    "options": [
      "Formam uma rede inelástica insolúvel que impede qualquer passagem de nutrientes ou água para o interior da cartilagem articular.",
      "Atuam como filamentos musculares contráteis que realizam trabalho mecânico ativo de extensão articular na ausência de ATP.",
      "Apresentam cargas elétricas negativas fixas que retêm água por pressão osmótica de Donnan, garantindo resistência à compressão.",
      "Convertem-se em sais de fosfato de cálcio insolúvel quando a articulação é imobilizada no leito por mais de doze horas seguidas."
    ],
    "correctIndex": 2,
    "explanation": "As cadeias de glicosaminoglicanos dos proteoglicanos contêm milhões de grupos ionizados SO₃⁻ e COO⁻. Esta 'densidade de carga fixa' negativa atrai catiões móveis (Na⁺) para o interior da cartilagem, criando um forte gradiente osmótico de Donnan que suga água para o tecido. A água tenta expandir a matriz, mas é contida pela malha inextensível de fibras de colagénio tipo II: este equilíbrio cria uma pressão de tumescência elástica permanente (~0,2 a 0,3 MPa) pronta a absorver impactos mecânicos repentinos.",
    "distractorAnalysis": [
      "Está incorreta: a cartilagem hialina é altamente hidratada e depende do fluxo intersticial de fluidos para a sua nutrição.",
      "Está incorreta: os proteoglicanos são moléculas da matriz extracelular passiva e não possuem capacidade contrátil ativa.",
      "Está incorreta: a cartilagem articular sã não mineraliza nem calcifica de forma espontânea após curtos períodos de repouso."
    ],
    "nursingApplication": "Com a idade e o sedentarismo crónico, a síntese de proteoglicanos diminui e as cadeias encurtam-se, reduzindo a capacidade da cartilagem de reter água e resistir a impactos. O enfermeiro encoraja o doente a manter hidratação adequada e atividade física regular de baixo impacto para estimular o metabolismo dos condrócitos por bombeamento de fluidos."
  },
  {
    "id": 3039,
    "topicId": 3,
    "question": "A fixação cirúrgica externa de fraturas expostas graves (Fixador Externo de Ilizarov ou fixadores tubulares) baseia-se em princípios de resistência de materiais para conseguir a união óssea. Qual é o conceito biomecânico de 'Estabilidade Relativa' com micromovimentos controlados promovido por estes fixadores?",
    "options": [
      "Bloquear rigorosamente qualquer deformação mecânica infinitesimal para impedir que as células recebam qualquer sinal da Lei de Wolff.",
      "Injetar soluções desinfetantes diretamente no foco de fratura através dos orifícios dos pinos ósseos transfixantes percutâneos.",
      "Aumentar a rigidez estrutural do fixador até valores cem vezes superiores ao diamante para acelerar a consolidação primária.",
      "Permitir micromovimentos axiais elásticos controlados sob carga, estimulando a osteogénese e a formação do calo ósseo duro."
    ],
    "correctIndex": 3,
    "explanation": "Na biomecânica moderna da fixação óssea (Perren), a rigidez excessiva do implante (estabilidade absoluta, strain < 2%) induz consolidação primária lenta sem calo periosteal visível. Por outro lado, fixadores externos fornecem 'estabilidade relativa': a estrutura é suficientemente rígida para manter o alinhamento axial e rotacional dos ossos, mas suficientemente flexível sob carga fisiológica para permitir microdeformações axiais fisiológicas (strain entre 2% e 10%), que atuam como potente estímulo mecânico para a rápida diferenciação e maturação do calo ósseo.",
    "distractorAnalysis": [
      "Está incorreta: a rigidez excessiva absoluta provoca desuso mecânico (stress shielding) e retarda a consolidação secundária do calo.",
      "Está incorreta: a dinamização mecânica é uma intervenção estrutural biomecânica e não um sistema de lavagem antissética do foco.",
      "Está incorreta: a dinamização reduz a rigidez do fixador externo de forma programada e não a eleva para valores extremos."
    ],
    "nursingApplication": "Nos doentes com fixadores externos, o enfermeiro tem duas missões essenciais: 1) Cuidados estéreis rigorosos no local de inserção dos pinos e fios de Kirschner na pele para evitar infeções bacterianas (flebite de trajeto e osteomielite); 2) Encorajar a carga axial progressiva com muletas conforme autorização do ortopedista, ativando as microdeformações benéficas de consolidação."
  },
  {
    "id": 3040,
    "topicId": 3,
    "question": "Durante a marcha humana normal, a força de reação vertical do solo (Ground Reaction Force, GRF) transmitida através do calcanhar e esqueleto atinge picos de intensidade correspondentes a aproximadamente:",
    "options": [
      "Cerca de 1,1 a 1,3 vezes o peso corporal na marcha lenta, podendo atingir 2,5 a 3 vezes o peso corporal durante a corrida vigorosa.",
      "Rigorosamente constante e igual a 0,1 vezes o peso corporal em qualquer velocidade de deslocamento do indivíduo no pavimento.",
      "Dez a vinte vezes o peso corporal durante a marcha normal, ultrapassando a tensão de rotura do osso cortical em cada passada.",
      "Sempre nula durante o contacto com o solo, visto que a força peso é totalmente neutralizada pela contração dos gémeos na perna."
    ],
    "correctIndex": 0,
    "explanation": "Ao caminhar sobre uma plataforma de forças biomecânica, o registo da força vertical do solo exibe uma curva clássica com duplo pico (em forma de M): o primeiro pico (ao amortecer o calcanhar) e o segundo pico (à impulsão dos dedos) atingem cerca de 110% a 130% do peso corporal do indivíduo (1,1 a 1,3 × PC). Na corrida, o impacto inicial atinge facilmente 2,5 a 3 vezes o peso do corpo, exigindo absorção de energia pelas cartilagens, meniscos e tendões.",
    "distractorAnalysis": [
      "Está incorreta: na fase de apoio da marcha a força de reação vertical excede o peso estático devido às acelerações inerciais normais.",
      "Está incorreta: forças de 10 a 20 vezes o peso corporal na marcha regular seriam destrutivas para a integridade do esqueleto são.",
      "Está incorreta: pela 3.ª Lei de Newton a força de reação exercida pelo solo no pé tem de equilibrar a resultante das forças aplicadas."
    ],
    "nursingApplication": "Num doente obeso pesando 120 kg, cada passo simples descarrega mais de 1400 N de força sobre as cartilagens do joelho e tornozelo. O enfermeiro que realiza educação para a saúde na osteoartrose enfatiza que uma perda modesta de 5 kg de peso corporal reduz em cerca de 15 a 20 kg a carga cumulativa sobre o joelho a cada passo dado ao longo do dia."
  },
  {
    "id": 3041,
    "topicId": 3,
    "question": "Em doentes acamados com tração esquelética transcondiliana (fio de Kirschner transfixando a tíbia proximal com estribo e pesos suspensos), qual é a complicação mecânica que ocorre se os pesos tocarem no chão ou se a cama for encostada à parede do quarto?",
    "options": [
      "A tração exercida sobre o fémur duplica instantaneamente por acumulação da energia potencial elástica gerada na polia ortopédica.",
      "A força efetiva de tração no membro cai para zero, cessando o alinhamento da fratura e favorecendo o espasmo muscular doloroso.",
      "O membro inferior sofre rotação interna forçada decorrente do aumento da aceleração gravítica local exercida sobre o colchão.",
      "O fio de Kirschner desliza espontaneamente para fora do osso devido ao aumento da tensão axial de tração no cabo de suporte."
    ],
    "correctIndex": 1,
    "explanation": "A tração esquelética é um sistema de equilíbrio de forças dinâmico e contínuo. A força de tração longitudinal é fornecida exclusivamente pela força peso do bloco de contrapeso suspenso livremente no ar (P = m · g). Se o peso assentar no solo ou se a roldana encostar à parede, o chão passa a suportar o peso através da força normal (N), a tensão na corda anula-se, e os poderosos músculos da coxa (quadríceps e isquiotibiais) contraem-se em espasmo, cavalgando e desviando os fragmentos ósseos com dor lancinante no doente.",
    "distractorAnalysis": [
      "Está incorreta: se os pesos repousam no chão a corda perde a tensão mecânica, anulando a força de tração longitudinal (F_T = 0).",
      "Está incorreta: a aceleração da gravidade é invariável e o peso apoiado deixa de tracionar o membro em vez de induzir rotação.",
      "Está incorreta: o risco clínico com o peso no solo é o encurtamento da fratura e desalinhamento pela ausência de tração efetiva."
    ],
    "nursingApplication": "A regra de ouro da vigilância de trações esqueléticas em enfermagem é: os pesos de tração devem permanecer SEMPRE livremente suspensos no ar, sem tocar no solo, na estrutura da cama ou em móveis, e a corda deve correr perfeitamente alinhada no sulco da roldana."
  },
  {
    "id": 3042,
    "topicId": 3,
    "question": "O colo cirúrgico do úmero no ombro é um local biomecanicamente frequente de fratura em idosos. Qual é a razão física e anatómica para a grande incidência de fraturas neste ponto após uma queda com o braço estendido?",
    "options": [
      "Constitui uma zona puramente desprovida de qualquer matriz de colagénio ou mineral ósseo no interior da cavidade glenoumeral.",
      "É o ponto de fixação exclusivo de todos os músculos flexores do antebraço que puxam a cabeça umeral contra o gradeamento costal.",
      "Representa uma transição geométrica com redução abrupta de secção que atua como concentrador mecânico de tensões de flexão.",
      "Apresenta um canal medular preenchido por ar que expande termicamente durante o movimento de abdução do membro superior."
    ],
    "correctIndex": 2,
    "explanation": "As junções anatómicas entre segmentos ósseos de diferente geometria e rigidez mecânica são zonas de descontinuidade estrutural: a cabeça do úmero é larga e constituída por osso esponjoso complacente (baixo E), enquanto a diáfise umeral é um cilindro fino de osso cortical rígido (alto E). Ao apoiar a mão no solo numa queda, as ondas de flexão e compressão concentram tensões máximas exatamente nesta zona de transição geométrica (colo cirúrgico), provocando a sua rotura.",
    "distractorAnalysis": [
      "Está incorreta: o colo cirúrgico do úmero possui córtex mineralizado e colagénio, sofrendo fraturas pela sua geometria afunilada.",
      "Está incorreta: os flexores do antebraço inserem-se no cotovelo e antebraço e não no colo cirúrgico da extremidade umeral proximal.",
      "Está incorreta: os ossos do esqueleto apendicular humano contêm medula óssea vermelha ou amarela e não bolsas gasosas internas."
    ],
    "nursingApplication": "Em doentes idosos com fratura do colo do úmero tratada conservadoramente com suspensório braquial (tipo Gilchrist ou velpeau), o enfermeiro vigia a integridade da pele no cotovelo e tórax, orienta a mobilização precoce ativa dos dedos e punho para prevenir o edema e a rigidez articular da mão, e apoia no alívio da dor."
  },
  {
    "id": 3043,
    "topicId": 3,
    "question": "No contexto da biocompatibilidade e osteointegração de implantes metálicos ortopédicos permanentes, qual é o metal mais biocompatível e com menor Módulo de Young relativo (mais próximo do osso humano)?",
    "options": [
      "Aço inoxidável austenítico com Módulo de Young de 500 GPa que se dissolve lentamente libertando iões de chumbo no fluido biológico.",
      "Placas de chumbo puro que se moldam manualmente à forma anatómica do fémur sem necessidade de qualquer parafuso cortical.",
      "Ligas de mercúrio e estanho que permanecem líquidas à temperatura corporal para lubrificar as extremidades da fratura óssea.",
      "Ligas de titânio (como Ti-6Al-4V), com Módulo de Young de cerca de 110 GPa e formação de camada protetora estável de óxido de titânio."
    ],
    "correctIndex": 3,
    "explanation": "As ligas de titânio (especialmente Ti-6Al-4V) são o padrão de ouro na fixação óssea ortopédica: possuem elevada resistência mecânica, excelente resistência à corrosão devido à camada passivadora de TiO₂, biocompatibilidade ímpar (os osteoblastos aderem diretamente à superfície mineralizando osso - osteointegração de Brånemark) e apresentam um Módulo de Young (~105-110 GPa) consideravelmente mais próximo do osso cortical (~18 GPa) do que o aço inoxidável 316L (~200 GPa) ou ligas de Cobalto-Crómio (~210 GPa).",
    "distractorAnalysis": [
      "Está incorreta: o aço cirúrgico tem E ~200 GPa e não contém chumbo tóxico, embora tenha maior rigidez que as ligas de titânio.",
      "Está incorreta: o chumbo é citotóxico e apresenta resistência mecânica insuficiente para servir de implante ortopédico de suporte.",
      "Está incorreta: as ligas de amálgama líquidas de mercúrio são inviáveis e biologicamente tóxicas para uso na osteossíntese óssea."
    ],
    "nursingApplication": "Saber que o implante do doente é de titânio é vital para o enfermeiro na programação de exames: o titânio é um material não-ferromagnético (paramagnético muito fraco), o que permite a realização segura de Ressonância Magnética Nuclear (RMN) sob indicação e parâmetros técnicos radiológicos autorizados, ao contrário de próteses ferromagnéticas antigas."
  },
  {
    "id": 3044,
    "topicId": 3,
    "question": "O fenómeno mecânico de 'Creep' (fluência) é clinicamente observado na perda de estatura dos seres humanos ao longo do dia. Por que motivo um indivíduo mede cerca de 1 a 2 cm a menos à noite quando comparado com a sua altura matinal?",
    "options": [
      "Compressão estática diária prolongada que expele água do núcleo pulposo dos discos, recuperada no decúbito horizontal noturno.",
      "Atrofia rápida do tecido muscular dos quadricípites provocada pela circulação venosa durante o período de trabalho ortostático.",
      "Fratura microscópica de todos os corpos vertebrais lombares que cicatrizam espontaneamente durante o sono em decúbito dorsal.",
      "Perda contínua de massa óssea mineral pela urina que é reposta unicamente através da ingestão de cálcio no pequeno-almoço diário."
    ],
    "correctIndex": 0,
    "explanation": "Os discos intervertebrais são estruturas viscoelásticas bifásicas. Sob a carga compressiva gravitacional mantida ao longo de 16 horas em pé ou sentado, ocorre o escoamento lento dependente do tempo (creep) de água do núcleo pulposo para as vértebras e capilares adjacentes, reduzindo em cerca de 10% a espessura de cada um dos 23 discos intervertebrais somados. Durante o sono em decúbito horizontal (sem carga axial), a pressão de tumescência osmótica dos proteoglicanos suga a água de volta, restaurando a altura normal pela manhã.",
    "distractorAnalysis": [
      "Está incorreta: a perda fisiológica diária de estatura (~1 a 2 cm) deve-se à reologia do disco intervertebral e não a atrofia muscular.",
      "Está incorreta: a diminuição de altura não decorre de fraturas vertebrais diárias, sendo um fenómeno viscoelástico reversível.",
      "Está incorreta: o ciclo circadiano de estatura é governado pela hidratação do núcleo pulposo e não por fluxos urinários agudos de cálcio."
    ],
    "nursingApplication": "Esta desidratação discal diária acentua-se drasticamente com a idade: o idoso tem menor teor de água nos discos e recupera menos espessura à noite. O enfermeiro deve ter este facto em consideração ao aferir a estatura do doente para cálculo de Índice de Massa Corporal (IMC) ou áreas de dosagem quimioterápica, padronizando a medição sempre no mesmo período do dia."
  },
  {
    "id": 3045,
    "topicId": 3,
    "question": "A aponevrose plantar (fáscia plantar) desempenha um papel biomecânico indispensável na marcha através do chamado 'Efeito Molinete' (Windlass mechanism). Como funciona este mecanismo na fase de impulsão do pé?",
    "options": [
      "A flexão plantar dos dedos relaxa a aponevrose e achata completamente o arco plantar medial para dissipar o calor na areia fria.",
      "A dorsiflexão do hálux traciona a fáscia sobre a cabeça do metatarso, elevando o arco plantar e conferindo rigidez ao pé no impulso.",
      "A fáscia plantar atua como um elemento contrátil motor que substitui o tríceps sural durante a aceleração da corrida humana.",
      "A aponevrose desliga-se do calcâneo na impulsão para permitir que os ossos do tarso colapsem livremente contra o pavimento."
    ],
    "correctIndex": 1,
    "explanation": "O mecanismo do guincho/molinete (Windlass mechanism, descrito por Hicks em 1954) compara a fáscia plantar a um cabo preso no calcâneo e nas falanges proximais dos dedos: na fase terminal da marcha, ao elevar o calcanhar e dobrar o hálux em dorsiflexão contra o chão, a fáscia plantar é esticada mecanicamente sobre a 'roldana' da cabeça do 1.º metatarso. Esta tração aproxima o calcâneo dos dedos, tranca os ossos do tarso e eleva a abóbada plantar, criando uma alavanca propulsora rígida e de grande eficiência biomecânica.",
    "distractorAnalysis": [
      "Está incorreta: o mecanismo de guincho (windlass effect) atua na dorsiflexão dos dedos, tensionando a fáscia e elevando o arco.",
      "Está incorreta: a fáscia plantar é um tecido aponevrótico conjuntivo passivo e não possui sarcómeros com contratilidade ativa.",
      "Está incorreta: a avulsão da fáscia no calcâneo constitui uma lesão traumática incapacitante e não um evento fisiológico na marcha."
    ],
    "nursingApplication": "Em doentes com fascite plantar (inflamação e microrroturas na inserção proximal da fáscia no calcâneo por sobrecarga), o enfermeiro recomenda calçado com bom suporte do arco longitudinal medial e ensina exercícios de estiramento suave da fáscia e do tendão de Aquiles antes do levante matinal para prevenir a dor aguda aos primeiros passos."
  },
  {
    "id": 3046,
    "topicId": 3,
    "question": "Na avaliação funcional da marcha de um doente com lesão do nervo glúteo superior ou fraqueza severa do músculo glúteo médio, qual é o sinal biomecânico clássico de desequilíbrio pélvico observado (Marcha de Trendelenburg)?",
    "options": [
      "Elevação exagerada e permanente da hemipelve no lado sem apoio, acompanhada de extensão rígida e espástica do joelho contralateral.",
      "Desvio do tronco em hiperextensão lombar posterior contínua com abolição do impulso gerado pelos músculos gémeos da perna.",
      "Queda da hemipelve contralateral ao membro em apoio, decorrente da incapacidade do abdutor de equilibrar a alavanca da bacia.",
      "Marcha com rotação externa da perna de apoio provocada pela contração involuntária e espástica do músculo adutor longo."
    ],
    "correctIndex": 2,
    "explanation": "Em apoio monopodal (um só pé no chão), o peso de todo o corpo tende a inclinar a bacia para o lado sem apoio por efeito da gravidade. O músculo glúteo médio do lado apoiado contrai-se vigorosamente exercendo um torque abdutor de alavanca de 1.ª classe na anca (articulação coxofemoral) para manter a pelve nivelada horizontalmente. Se houver paresia do glúteo médio ou luxação da anca, a bacia descai para o lado oposto contralateral (Sinal de Trendelenburg positivo).",
    "distractorAnalysis": [
      "Está incorreta: a fraqueza do glúteo médio do lado de apoio provoca a queda (inclinação para baixo) da anca do lado oposto são.",
      "Está incorreta: a hiperextensão do tronco compensa fraquezas do glúteo máximo na fase inicial de apoio e não a lesão dos abdutores.",
      "Está incorreta: o sinal de Trendelenburg decorre da falha do momento de força abdutor no plano frontal da anca em carga."
    ],
    "nursingApplication": "O reconhecimento da marcha de Trendelenburg pelo enfermeiro no pós-operatório de cirurgias da anca é crucial: a instabilidade pélvica eleva exponencialmente o risco de quedas. O enfermeiro prescreve e ensina o uso correto de uma canadiana (muleta) empunhada no lado CONTRALATERAL à lesão, criando uma base alargada de suporte que anula o momento desestabilizador da gravidade."
  },
  {
    "id": 3047,
    "topicId": 3,
    "question": "O ligamento cruzado anterior (LCA) do joelho é uma das estruturas mais sujeitas a rotura em traumatismos desportivos e de tráfego. Biomecanicamente, qual é a principal restrição mecânica que o LCA confere à articulação femorotibial?",
    "options": [
      "Bloqueia qualquer flexão da perna além dos noventa graus, mantendo o membro inferior em extensão rígida durante o repouso.",
      "Atua como canal condutor de líquido sinovial entre o fémur proximal e a cavidade articular do tornozelo no plano coronal.",
      "Impede exclusivamente o deslizamento posterior da tíbia sob o fémur quando o doente se encontra deitado em decúbito ventral.",
      "Restringe primariamente a translação anterior da tíbia e a rotação interna excessiva, estabilizando o joelho na desaceleração."
    ],
    "correctIndex": 3,
    "explanation": "O ligamento cruzado anterior (LCA) insere-se na área intercondilar anterior da tíbia e dirige-se obliquamente para cima e para trás até à face medial do côndilo femoral lateral. A sua função mecânica primária é atuar como o principal travão contra a translação anterior da tíbia relativamente ao fémur (fornecendo cerca de 85% da força de retenção estática anterior) e controlar a estabilidade rotacional femorotibial.",
    "distractorAnalysis": [
      "Está incorreta: o LCA permite amplitude normal de flexão do joelho, atuando como restritor dinâmico de translação anterior e rotação.",
      "Está incorreta: o ligamento é uma estrutura intra-articular sólida com função mecânica de contenção e não um ducto tubular de líquido.",
      "Está incorreta: o restritor primário da translação posterior da tíbia é o ligamento cruzado posterior (LCP) e não o LCA."
    ],
    "nursingApplication": "Na triagem de urgência a um doente com trauma do joelho e hemartrose volumosa imediata (derrame de sangue sob tensão articular), o enfermeiro apoia os testes clínicos de estabilidade (Teste de Lachman e Teste da Gaveta Anterior: o deslizamento anterior anormal da tíbia confirma a perda mecânica do LCA) e aplica crioterapia precoce para alívio sintomático."
  },
  {
    "id": 3048,
    "topicId": 3,
    "question": "A rigidez articular matinal descrita por doentes com Artrite Reumatoide que melhora tipicamente após 30 a 60 minutos de movimento ativo é explicada biofisicamente por qual fenómeno reológico sinovial?",
    "options": [
      "Comportamento tixotrópico do líquido sinovial inflamado, cuja viscosidade aumenta com o repouso e diminui com o movimento.",
      "Fusão química definitiva das cartilagens hialinas articulares induzida pela diminuição fisiológica da temperatura matinal.",
      "Desidratação osmótica total da cápsula articular com perda de todo o volume hídrico através dos capilares fenestrados da derme.",
      "Esgotamento das reservas mitocondriais de cálcio sarcoplasmático que bloqueia a transmissão dos potenciais de ação motores."
    ],
    "correctIndex": 0,
    "explanation": "O líquido sinovial é um fluido biológico não-Newtoniano com comportamento marcadamente tixotrópico (a sua viscosidade η depende inversamente da taxa de cisalhamento e do tempo de repouso). Em repouso estático prolongado durante a noite, a polimerização de complexos proteicos na articulação inflamada torna o fluido altamente viscoso e gelatinoso ('espessamento tixotrópico'). Com o reinício dos movimentos articulares matinais, as tensões de cisalhamento quebram a rede macromolecular temporária, diminuindo drasticamente a viscosidade e aliviando a rigidez mecânica.",
    "distractorAnalysis": [
      "Está incorreta: a rigidez matinal é transitória e alivia com a mobilização, o que contraria uma fusão óssea permanente anquilosante.",
      "Está incorreta: na artrite ocorre inflamação com derrame articular exsudativo (aumento de líquido) e não desidratação da cápsula.",
      "Está incorreta: a rigidez matinal articular tem origem reológica e inflamatória periarticular e não um bloqueio na junção neuromuscular."
    ],
    "nursingApplication": "Ao cuidar de doentes com artrite reumatoide, o enfermeiro programa os cuidados de higiene pessoal (banho morno matinal) para ajudar a fluidificar os tecidos por calor condutivo e orienta o doente a realizar exercícios suaves de mobilização ativa na cama antes de tentar colocar-se em pé, prevenindo quedas no levante matinal."
  },
  {
    "id": 3049,
    "topicId": 3,
    "question": "O tecido ósseo alveolar dos maxilares suporta as raízes dentárias através do 'Ligamento Periodontal' (LPD). Qual é a função biomecânica principal deste ligamento sob as forças de mastigação?",
    "options": [
      "Atua como soldadura metálica mineralizada que impede qualquer micromovimento elástico do dente durante a mastigação habitual.",
      "Funciona como suspensão viscoelástica de amortecimento hidráulico que distribui as pressões oclusais mastigatórias pelo osso alveolar.",
      "Conduz correntes elétricas contínuas de alta frequência que trituram quimicamente os alimentos no interior da cavidade oral.",
      "Comporta-se como um elemento puramente plástico que deforma irreversivelmente após a ingestão do primeiro alimento sólido diário."
    ],
    "correctIndex": 1,
    "explanation": "O ligamento periodontal é constituído por feixes ondulados de fibras colagénicas (fibras principais de Sharpey) imersas num gel viscoso de proteoglicanos e rico plexo vascular. Ao mastigar, o dente é comprimido na cavidade alveolar; o fluido intersticial do LPD é expelido lentamente pelos poros ósseos atuando como um amortecedor hidráulico viscoelástico ('hydraulic damper'), e as fibras oblíquas são colocadas sob tração, transmitindo a carga ao osso alveolar de forma difusa e protetora.",
    "distractorAnalysis": [
      "Está incorreta: o ligamento periodontal é um tecido conjuntivo fibroso e vascularizado que confere mobilidade elástica fisiológica.",
      "Está incorreta: a mastigação e trituração alimentar resultam de forças mecânicas musculares de contacto e não de correntes elétricas.",
      "Está incorreta: as fibras do ligamento periodontal recuperam a sua conformação elástica normal após cada ciclo de mastigação."
    ],
    "nursingApplication": "Em doentes entubados na UCI sob ventilação mecânica invasiva ou submetidos a exames endoscópicos com bocal protetor, o enfermeiro verifica cuidadosamente que o tubo ou bocal não apoia pontualmente sobre incisivos frágeis ou próteses dentárias móveis, prevenindo avulsões traumáticas por sobrecarga mecânica concentrada sobre o ligamento periodontal."
  },
  {
    "id": 3050,
    "topicId": 3,
    "question": "Na reabilitação de doentes com fraqueza muscular após cirurgia ortopédica, qual é a vantagem biofísica dos exercícios em piscina aquecida de hidroterapia sobre a carga esquelética?",
    "options": [
      "A água da piscina anula a aceleração gravítica da Terra, permitindo ao doente flutuar num estado de gravidade estritamente nula.",
      "A densidade da água transfere toda a energia cinética corporal para as paredes da piscina através de ondas sonoras de alta frequência.",
      "A força de impulsão de Arquimedes reduz o peso aparente do corpo, diminuindo as cargas de compressão nas articulações afetadas.",
      "A resistência ao avanço na água é rigorosamente zero em qualquer velocidade de movimento, dispensando qualquer esforço contrátil."
    ],
    "correctIndex": 2,
    "explanation": "Pelo Princípio de Arquimedes, todo o corpo mergulhado num fluido sofre uma impulsão vertical de baixo para cima igual ao peso do volume de fluido deslocado. Num doente imerso até ao nível das cristas ilíacas, o peso aparente nas articulações dos membros inferiores cai para cerca de 50% do peso real; com imersão até ao apêndice xifoide cai para cerca de 25-30%; e imerso até ao pescoço resta apenas cerca de 10% da carga sobre o esqueleto. Isto possibilita treino de marcha e fortalecimento muscular seguro sem risco de dano mecânico ao enxerto ou implante.",
    "distractorAnalysis": [
      "Está incorreta: a gravidade continua a atuar; o alívio articular decorre da força de impulsão hidrostática ascendente (peso aparente menor).",
      "Está incorreta: o trabalho mecânico na água envolve resistência hidrodinâmica viscosa e atrito de arrasto e não ondas sonoras.",
      "Está incorreta: a água oferece resistência hidrodinâmica que aumenta com a velocidade de deslocamento, permitindo treino muscular seguro."
    ],
    "nursingApplication": "A hidroterapia e a hidroginástica orientadas por equipas multidisciplinares de saúde e enfermagem de reabilitação são o recurso de eleição para doentes com artroses graves, fraturas consolidadas em fase de carga ou obesidade mórbida, permitindo trabalhar a musculatura e o equilíbrio com mínimo impacto e máxima segurança física."
  },
  {
    "id": 3051,
    "topicId": 3,
    "question": "Na biofísica do sistema osteomuscular, em relação a 'relação percentual de massa no osso desidratado', qual é a fundamentação científica correta?",
    "options": [
      "Cerca de 95% de matriz aquosa extracelular incompressível associada a 5% de cristais amorfos de carbonato de magnésio hidratado.",
      "Aproximadamente 50% de lípidos intramedulares neutros combinados com 50% de fibras musculares lisas distribuídas nas trabéculas.",
      "Cerca de 85% de cartilagem hialina avascular elástica combinada com 15% de sais de cloreto de sódio dispersos nos canalículos.",
      "Cerca de 65% de fase inorgânica mineral (hidroxiapatite) para rigidez compressiva e 35% de matriz orgânica de colagénio para tenacidade."
    ],
    "correctIndex": 3,
    "explanation": "Em biofísica osteomuscular, relação percentual de massa no osso desidratado explica-se pelo facto de que cerca de 65% de fase mineral inorgânica (hidroxiapatite) e 35% de matriz orgânica (predominantemente colagénio tipo I e proteoglicanos). A fração inorgânica de hidroxiapatite confere rigidez extrema e resistência à compressão mecânica, enquanto o colagénio confere tenacidade e resistência à tração.",
    "distractorAnalysis": [
      "Está incorreta: o osso cortical desidratado é composto predominantemente por mineral fosfocalcítico (~65%) e colagénio (~35%).",
      "Está incorreta: a medula óssea adiposa não compõe a matriz estrutural sólida do osso cortical ou trabecular mineralizado.",
      "Está incorreta: a cartilagem hialina reveste apenas as superfícies articulares, não constituindo a massa estrutural do osso são."
    ],
    "nursingApplication": "O enfermeiro avalia o perfil nutricional de doentes idosos e com fraturas, sabendo que a reparação do calo ósseo requer tanto aminoácidos para síntese de colagénio quanto minerais de cálcio e fosfato."
  },
  {
    "id": 3052,
    "topicId": 3,
    "question": "Durante a prestação de cuidados de enfermagem a um doente com alterações musculoesqueléticas, como se traduz na prática clínica o conceito de 'relação percentual de massa no osso desidratado'?",
    "options": [
      "Avaliar o perfil nutricional de cálcio, vitamina D e proteínas, fundamentais para a renovação equilibrada das duas fases da matriz.",
      "Suprimir a ingestão hídrica oral do doente para evitar que a água em excesso dissolva os cristais minerais de hidroxiapatite óssea.",
      "Prescrever imobilização absoluta no leito durante meses para impedir qualquer solicitação mecânica sobre o esqueleto do doente.",
      "Administrar anti-inflamatórios em doses contínuas para paralisar por completo a atividade celular fisiológica dos osteoblastos."
    ],
    "correctIndex": 0,
    "explanation": "A aplicação de enfermagem para relação percentual de massa no osso desidratado baseia-se no princípio biomecânico: O enfermeiro avalia o perfil nutricional de doentes idosos e com fraturas, sabendo que a reparação do calo ósseo requer tanto aminoácidos para síntese de colagénio quanto minerais de cálcio e fosfato. Este raciocínio assegura intervenções fundamentadas na física biológica.",
    "distractorAnalysis": [
      "Está incorreta: a hidratação adequada é vital para a homeostase e a hidroxiapatite não se dissolve pela ingestão fisiológica de água.",
      "Está incorreta: a imobilização no leito induz desmineralização e perda óssea acelerada por desuso segundo a Lei de Wolff.",
      "Está incorreta: a atividade osteoblástica é indispensável para a manutenção e remodelação contínua da massa esquelética."
    ],
    "nursingApplication": "O enfermeiro avalia o perfil nutricional de doentes idosos e com fraturas, sabendo que a reparação do calo ósseo requer tanto aminoácidos para síntese de colagénio quanto minerais de cálcio e fosfato."
  },
  {
    "id": 3053,
    "topicId": 3,
    "question": "Um enfermeiro analisa o impacto biomecânico das solicitações mecânicas em 'relação percentual de massa no osso desidratado'. Qual das seguintes afirmações apresenta a análise biofísica correta?",
    "options": [
      "A hidroxiapatite confere grande flexibilidade elástica ao membro, permitindo que o osso dobre sem partir sob tração extrema.",
      "A hidroxiapatite garante resistência mecânica à compressão, enquanto o colagénio tipo I absorve energia e previne a fratura frágil.",
      "O colagénio tipo I é o único responsável pela dureza mecânica do osso, atuando a fase mineral como lubrificante intersticial.",
      "Ambas as fases possuem rigidez idêntica ao diamante, impedindo qualquer deformação elástica ou amortecimento pelo esqueleto."
    ],
    "correctIndex": 1,
    "explanation": "Sob o ponto de vista físico e mecanicista, A fração inorgânica de hidroxiapatite confere rigidez extrema e resistência à compressão mecânica, enquanto o colagénio confere tenacidade e resistência à tração. Isto garante a integridade funcional do aparelho locomotor.",
    "distractorAnalysis": [
      "Está incorreta: a rigidez compressiva é dada pelo mineral hidroxiapatite, conferindo o colagénio a flexibilidade e tenacidade.",
      "Está incorreta: a dureza e a resistência à deformação resultam da fase mineral inorgânica e não das fibras proteicas de colagénio.",
      "Está incorreta: o osso é um compósito elástico deformável e não um mineral cristalino perfeitamente rígido com propriedades de diamante."
    ],
    "nursingApplication": "O enfermeiro avalia o perfil nutricional de doentes idosos e com fraturas, sabendo que a reparação do calo ósseo requer tanto aminoácidos para síntese de colagénio quanto minerais de cálcio e fosfato."
  },
  {
    "id": 3054,
    "topicId": 3,
    "question": "Na biofísica do sistema osteomuscular, em relação a 'papel da água na viscoelasticidade da matriz óssea', qual é a fundamentação científica correta?",
    "options": [
      "A água óssea atua como combustível de combustão exotérmica contínua para manter a temperatura do esqueleto fixa nos trinta e sete graus.",
      "A água intralamelar evapora instantaneamente sob compressão para criar bolhas gasosas de arrefecimento na cavidade medular.",
      "A água livre nos canalículos dissipa energia sob carga hidráulica e transporta iões que geram potenciais elétricos de streaming.",
      "A presença de água enfraquece o osso em noventa por cento, tornando-o totalmente vulnerável a impactos mecânicos ligeiros."
    ],
    "correctIndex": 2,
    "explanation": "Em biofísica osteomuscular, papel da água na viscoelasticidade da matriz óssea explica-se pelo facto de que a água ligada e livre representa cerca de 10 a 20% do volume ósseo in vivo, permitindo o escoamento hidrodinâmico nos canalículos e a dissipação viscosa de energia mecânica de choque. A água atua como um lubrificante molecular entre as fibrilhas de colagénio e modula as propriedades viscoelásticas dependentes do tempo e da velocidade de deformação.",
    "distractorAnalysis": [
      "Está incorreta: o osso vivo não opera por reações de combustão térmica, sendo a água um constituinte estrutural viscoelástico.",
      "Está incorreta: não ocorre vaporização biológica de fluidos sob cargas mecânicas nos tecidos musculoesqueléticos humanos.",
      "Está incorreta: a hidratação da matriz é indispensável para a tenacidade do osso in vivo, prevenindo a fragilidade extrema."
    ],
    "nursingApplication": "O enfermeiro incentiva a hidratação hídrica adequada em pessoas acamadas, prevenindo a perda de viscoelasticidade dos tecidos conectivos articulares e discos vertebrais."
  },
  {
    "id": 3055,
    "topicId": 3,
    "question": "Durante a prestação de cuidados de enfermagem a um doente com alterações musculoesqueléticas, como se traduz na prática clínica o conceito de 'papel da água na viscoelasticidade da matriz óssea'?",
    "options": [
      "Restringir os líquidos corporais para aumentar a concentração de cálcio plasmático e endurecer artificialmente o esqueleto.",
      "Recomendar banhos com água fervente para acelerar a deposição de minerais fosfocalcíticos no interior do tecido celular subcutâneo.",
      "Manter o doente em repouso ortostático estático ininterrupto para evitar que a água saia do núcleo pulposo dos discos vertebrais.",
      "Incentivar a hidratação adequada no idoso, preservando as propriedades viscoelásticas da matriz óssea e o amortecimento dos discos."
    ],
    "correctIndex": 3,
    "explanation": "A aplicação de enfermagem para papel da água na viscoelasticidade da matriz óssea baseia-se no princípio biomecânico: O enfermeiro incentiva a hidratação hídrica adequada em pessoas acamadas, prevenindo a perda de viscoelasticidade dos tecidos conectivos articulares e discos vertebrais. Este raciocínio assegura intervenções fundamentadas na física biológica.",
    "distractorAnalysis": [
      "Está incorreta: a desidratação compromete a reologia tecidual e agrava o risco de litíase renal e declínio hemodinâmico.",
      "Está incorreta: a aplicação de calor térmico excessivo é perigosa para a pele e não induz mineralização óssea biológica.",
      "Está incorreta: o ortostatismo contínuo sem alívio provoca compressão discal excessiva por fluência mecânica e fadiga postural."
    ],
    "nursingApplication": "O enfermeiro incentiva a hidratação hídrica adequada em pessoas acamadas, prevenindo a perda de viscoelasticidade dos tecidos conectivos articulares e discos vertebrais."
  },
  {
    "id": 3056,
    "topicId": 3,
    "question": "Um enfermeiro analisa o impacto biomecânico das solicitações mecânicas em 'papel da água na viscoelasticidade da matriz óssea'. Qual das seguintes afirmações apresenta a análise biofísica correta?",
    "options": [
      "O escoamento viscoso de fluido intersticial nos canalículos atenua as cargas de impacto através de amortecimento viscoelástico.",
      "A água comprime-se até um décimo do seu volume basal, funcionando como mola pneumática pura no interior do canal osteónico.",
      "O líquido ósseo solidifica instantaneamente em gelo sob qualquer pressão, impedindo a deformação elástica dos corpos vertebrais.",
      "A movimentação da água anula completamente as forças de atrito entre as osteonas, eliminando a resistência à flexão da tíbia."
    ],
    "correctIndex": 0,
    "explanation": "Sob o ponto de vista físico e mecanicista, A água atua como um lubrificante molecular entre as fibrilhas de colagénio e modula as propriedades viscoelásticas dependentes do tempo e da velocidade de deformação. Isto garante a integridade funcional do aparelho locomotor.",
    "distractorAnalysis": [
      "Está incorreta: a água biológica é essencialmente incompressível, dissipando energia por deslocamento viscoso sob pressão.",
      "Está incorreta: a água intersticial não sofre transição de fase para gelo sob pressões mecânicas biológicas fisiológicas.",
      "Está incorreta: o fluido poroelástico reduz o pico de tensão sem anular a resistência estrutural do osso cortical são."
    ],
    "nursingApplication": "O enfermeiro incentiva a hidratação hídrica adequada em pessoas acamadas, prevenindo a perda de viscoelasticidade dos tecidos conectivos articulares e discos vertebrais."
  },
  {
    "id": 3057,
    "topicId": 3,
    "question": "Na biofísica do sistema osteomuscular, em relação a 'mineralização óssea secundária após o encerramento do calo primário', qual é a fundamentação científica correta?",
    "options": [
      "A deposição mineral de hidroxiapatite ocorre integralmente em vinte e quatro horas após o alinhamento da fratura pelo cirurgião.",
      "A mineralização primária atinge cerca de 70% em poucas semanas, mas a secundária requer meses a anos para a maturação mineral plena.",
      "A maturação do calo ósseo é um processo estritamente celular que dispensa qualquer incorporação de iões de cálcio ou fosfato.",
      "A mineralização secundária diminui a densidade óssea final para permitir que o novo osso dobre livremente como uma cartilagem."
    ],
    "correctIndex": 1,
    "explanation": "Em biofísica osteomuscular, mineralização óssea secundária após o encerramento do calo primário explica-se pelo facto de que a mineralização primária deposita cerca de 70% dos minerais em poucas semanas, mas a mineralização secundária completa dos cristais de hidroxiapatite prolonga-se por meses a anos. Este processo lento de mineralização secundária aumenta progressivamente o Módulo de Young cortical e aproxima o osso remodelado das suas propriedades mecânicas normais.",
    "distractorAnalysis": [
      "Está incorreta: a consolidação óssea e mineralização secundária completa é lenta, exigindo meses para remodelar a cortical.",
      "Está incorreta: a mineralização óssea depende crucialmente da precipitação organizada de sais minerais de fosfato de cálcio.",
      "Está incorreta: a fase secundária aumenta a dureza e o Módulo de Young do osso remodelado até aos níveis fisiológicos basais."
    ],
    "nursingApplication": "O enfermeiro educa o utente pós-fratura a manter a terapêutica de suporte e os cuidados mecânicos mesmo após a remoção do gesso, pois o osso requer meses para atingir a resistência máxima."
  },
  {
    "id": 3058,
    "topicId": 3,
    "question": "Durante a prestação de cuidados de enfermagem a um doente com alterações musculoesqueléticas, como se traduz na prática clínica o conceito de 'mineralização óssea secundária após o encerramento do calo primário'?",
    "options": [
      "Instruir o doente a caminhar imediatamente sem canadianas logo que a dor inicial diminua, dispensando o controlo radiológico.",
      "Estimular a remoção precoce do gesso pelo próprio doente no domicílio logo após a primeira semana de imobilização ortopédica.",
      "Educar o doente que a consolidação é progressiva e que a carga plena requer autorização médica após mineralização secundária segura.",
      "Proibir qualquer contração isométrica muscular dentro do gesso para evitar a ativação mecânica benéfica da circulação venosa."
    ],
    "correctIndex": 2,
    "explanation": "A aplicação de enfermagem para mineralização óssea secundária após o encerramento do calo primário baseia-se no princípio biomecânico: O enfermeiro educa o utente pós-fratura a manter a terapêutica de suporte e os cuidados mecânicos mesmo após a remoção do gesso, pois o osso requer meses para atingir a resistência máxima. Este raciocínio assegura intervenções fundamentadas na física biológica.",
    "distractorAnalysis": [
      "Está incorreta: a ausência precoce de dor não significa consolidação mineral completa, existindo risco de refratura sob carga.",
      "Está incorreta: a imobilização deve ser mantida pelo período clínico prescrito para garantir a integridade do calo ósseo.",
      "Está incorreta: as contrações isométricas no gesso previnem a atrofia muscular e o tromboembolismo venoso sem desviar a fratura."
    ],
    "nursingApplication": "O enfermeiro educa o utente pós-fratura a manter a terapêutica de suporte e os cuidados mecânicos mesmo após a remoção do gesso, pois o osso requer meses para atingir a resistência máxima."
  },
  {
    "id": 3059,
    "topicId": 3,
    "question": "Um enfermeiro analisa o impacto biomecânico das solicitações mecânicas em 'mineralização óssea secundária após o encerramento do calo primário'. Qual das seguintes afirmações apresenta a análise biofísica correta?",
    "options": [
      "O calo ósseo recente é imediatamente vinte vezes mais rígido que o osso cortical são, dispensando qualquer cautela na marcha.",
      "A resistência mecânica do osso atinge o seu valor máximo durante a fase inflamatória inicial antes de qualquer depósito mineral.",
      "A ausência de rigidez inicial permite ao doente dobrar o membro fraturado em ângulo reto sem risco de comprometer a reparação.",
      "A rigidez mecânica aumenta lentamente com a mineralização secundária, exigindo proteção biomecânica do foco contra momentos fletores."
    ],
    "correctIndex": 3,
    "explanation": "Sob o ponto de vista físico e mecanicista, Este processo lento de mineralização secundária aumenta progressivamente o Módulo de Young cortical e aproxima o osso remodelado das suas propriedades mecânicas normais. Isto garante a integridade funcional do aparelho locomotor.",
    "distractorAnalysis": [
      "Está incorreta: o calo jovem fibrocartilagíneo é complacente e tem resistência reduzida em comparação com o osso maduro.",
      "Está incorreta: a fase inflamatória inicial de hematoma possui resistência mecânica quase nula à tração ou flexão.",
      "Está incorreta: deformações angulares no calo precoce provocam consolidação viciosa ou pseudoartrose não consolidada."
    ],
    "nursingApplication": "O enfermeiro educa o utente pós-fratura a manter a terapêutica de suporte e os cuidados mecânicos mesmo após a remoção do gesso, pois o osso requer meses para atingir a resistência máxima."
  },
  {
    "id": 3060,
    "topicId": 3,
    "question": "Na biofísica do sistema osteomuscular, em relação a 'osteogénese imperfeita e a fragilidade óssea mecânica', qual é a fundamentação científica correta?",
    "options": [
      "Mutação no colagénio tipo I que impede a formação da tripla hélice, gerando matriz desestruturada e extrema fragilidade óssea.",
      "Ausência congénita de osteoclastos que conduz à petrificação óssea maciça com obliteração completa dos canais vasculares.",
      "Produção descontrolada de elastina no periósteo que converte todo o esqueleto apendicular em tubos flexíveis indeformáveis.",
      "Substituição espontânea dos minerais fosfocálcicos por cristais puros de diamante que duplicam a tenacidade mecânica do osso."
    ],
    "correctIndex": 0,
    "explanation": "Em biofísica osteomuscular, osteogénese imperfeita e a fragilidade óssea mecânica explica-se pelo facto de que uma alteração estrutural no colagénio tipo I que impede a formação da tripla hélice estável, tornando a matriz orgânica frágil e incapaz de absorver forças de tração. A hidroxiapatite deposita-se sobre uma matriz proteica defeituosa, resultando num osso quebradiço como cerâmica frágil que fratura sob mínimos movimentos articulares.",
    "distractorAnalysis": [
      "Está incorreta: a osteogénese imperfeita decorre de colagénio anómalo e não de carência de osteoclastos (osteopetrose).",
      "Está incorreta: a matriz óssea não é constituída por elastina, sendo a patogénese devida à fragilidade do colagénio tipo I.",
      "Está incorreta: a patologia carateriza-se pela fragilidade e facilidade de fratura (ossos de vidro) e não por dureza de diamante."
    ],
    "nursingApplication": "O enfermeiro em pediatria adota protocolos rigorosos de manipulação mínima, suporte acolchoado total e ausência de trações ao mudar fraldas ou posicionar recém-nascidos com osteogénese imperfeita."
  },
  {
    "id": 3061,
    "topicId": 3,
    "question": "Durante a prestação de cuidados de enfermagem a um doente com alterações musculoesqueléticas, como se traduz na prática clínica o conceito de 'osteogénese imperfeita e a fragilidade óssea mecânica'?",
    "options": [
      "Puxar firmemente os membros pelos tornozelos durante a mudança da fralda para esticar os tendões e alinhar as diáfises dos fémures.",
      "Manusear o recém-nascido com apoio uniforme alargado, evitando trações em alavanca que causariam fraturas por forças mínimas.",
      "Colocar talas gessadas rígidas de alta compressão em todos os membros de forma profilática logo após o nascimento da criança.",
      "Suspender a criança pelos pulsos para estimular o reflexo motor de preensão palmar contra a força de gravidade na enfermaria."
    ],
    "correctIndex": 1,
    "explanation": "A aplicação de enfermagem para osteogénese imperfeita e a fragilidade óssea mecânica baseia-se no princípio biomecânico: O enfermeiro em pediatria adota protocolos rigorosos de manipulação mínima, suporte acolchoado total e ausência de trações ao mudar fraldas ou posicionar recém-nascidos com osteogénese imperfeita. Este raciocínio assegura intervenções fundamentadas na física biológica.",
    "distractorAnalysis": [
      "Está incorreta: puxar pelos membros induz momentos fletores e de tração que fraturam facilmente os ossos osteopénicos da criança.",
      "Está incorreta: gessos profiláticos circulares sem fratura causariam rigidez articular e atrofia muscular sem benefício biomecânico.",
      "Está incorreta: suspender a criança pelos pulsos tracionaria as extremidades, com elevado risco de luxação e fratura diafisária."
    ],
    "nursingApplication": "O enfermeiro em pediatria adota protocolos rigorosos de manipulação mínima, suporte acolchoado total e ausência de trações ao mudar fraldas ou posicionar recém-nascidos com osteogénese imperfeita."
  },
  {
    "id": 3062,
    "topicId": 3,
    "question": "Um enfermeiro analisa o impacto biomecânico das solicitações mecânicas em 'osteogénese imperfeita e a fragilidade óssea mecânica'. Qual das seguintes afirmações apresenta a análise biofísica correta?",
    "options": [
      "O osso ganha ductilidade elástica extraordinária, deformando-se até três vezes o seu comprimento antes de sofrer qualquer fissura.",
      "A ausência de colagénio normal converte a diáfise óssea num fluido incompressível que dissipa choques através de ondas de pressão.",
      "A hidroxiapatite mineral sem o suporte tenaz do colagénio comporta-se como uma cerâmica frágil que estilhaça sob baixo impacto.",
      "O osso torna-se completamente invulnerável a forças de cisalhamento, fraturando unicamente se for sujeito a tração hidrostática."
    ],
    "correctIndex": 2,
    "explanation": "Sob o ponto de vista físico e mecanicista, A hidroxiapatite deposita-se sobre uma matriz proteica defeituosa, resultando num osso quebradiço como cerâmica frágil que fratura sob mínimos movimentos articulares. Isto garante a integridade funcional do aparelho locomotor.",
    "distractorAnalysis": [
      "Está incorreta: a patologia diminui drasticamente a ductilidade e a tenacidade, tornando o osso quebradiço e vulnerável.",
      "Está incorreta: o osso permanece sólido e mineralizado, não se transformando em fluido sob solicitações dinâmicas.",
      "Está incorreta: o osso na osteogénese imperfeita é extremamente vulnerável a fraturas sob qualquer esforço de corte ou flexão."
    ],
    "nursingApplication": "O enfermeiro em pediatria adota protocolos rigorosos de manipulação mínima, suporte acolchoado total e ausência de trações ao mudar fraldas ou posicionar recém-nascidos com osteogénese imperfeita."
  },
  {
    "id": 3063,
    "topicId": 3,
    "question": "Na biofísica do sistema osteomuscular, em relação a 'osteomalácia e raquitismo em adultos e crianças', qual é a fundamentação científica correta?",
    "options": [
      "Proliferação anómala de osteoblastos hiperativos que mineralizam excessivamente a cortical até dobrar o peso do esqueleto.",
      "Destruição autoimune de todas as fibras de colagénio com retenção exclusiva de uma carcaça puramente mineral de fosfato de cálcio.",
      "Conversão do tecido ósseo em cartilagem elástica imune a qualquer deformação sob o peso corporal na marcha diária.",
      "Acumulação de osteoide orgânico desmineralizado por carência de vitamina D ou cálcio, tornando o osso mole e suscetível à flexão."
    ],
    "correctIndex": 3,
    "explanation": "Em biofísica osteomuscular, osteomalácia e raquitismo em adultos e crianças explica-se pelo facto de que acumulação de osteoide orgânico não mineralizado devido a carência severa de vitamina D e cálcio biodisponível. Sem cristais de hidroxiapatite suficientes, o osso perde a sua rigidez à compressão axial, deformando-se plasticamente sob a carga do peso corporal.",
    "distractorAnalysis": [
      "Está incorreta: a osteomalácia carateriza-se pela falha de mineralização do osteoide e não por hipermineralização excessiva.",
      "Está incorreta: o colagénio está presente na osteomalácia, faltando a mineralização adequada com cristais de hidroxiapatite.",
      "Está incorreta: o osso mal mineralizado perde rigidez elástica, arqueando sob a gravidade (como no fémur e tíbia do raquitismo)."
    ],
    "nursingApplication": "O enfermeiro identifica sinais de dores ósseas difusas e fraqueza muscular proximal, promovendo a exposição solar segura e a adesão à suplementação prescrita de colecalciferol."
  },
  {
    "id": 3064,
    "topicId": 3,
    "question": "Durante a prestação de cuidados de enfermagem a um doente com alterações musculoesqueléticas, como se traduz na prática clínica o conceito de 'osteomalácia e raquitismo em adultos e crianças'?",
    "options": [
      "Vigiar dores ósseas e fraqueza proximal, adotando medidas de prevenção de quedas para evitar fraturas em ossos desmineralizados.",
      "Incentivar o treino de corrida rápida em piso rígido para aumentar o impacto compressivo e forçar o alinhamento das pernas arqueadas.",
      "Recomendar dieta pobre em laticínios e vitamina D para evitar que o excesso de cálcio calcifique os vasos sanguíneos musculares.",
      "Manter o doente em posição ortostática unipodal contínua para testar a resistência mecânica do colo femoral sob carga unilateral."
    ],
    "correctIndex": 0,
    "explanation": "A aplicação de enfermagem para osteomalácia e raquitismo em adultos e crianças baseia-se no princípio biomecânico: O enfermeiro identifica sinais de dores ósseas difusas e fraqueza muscular proximal, promovendo a exposição solar segura e a adesão à suplementação prescrita de colecalciferol. Este raciocínio assegura intervenções fundamentadas na física biológica.",
    "distractorAnalysis": [
      "Está incorreta: exercícios de impacto descontrolado em ossos desmineralizados aumentam o risco de fraturas de insuficiência.",
      "Está incorreta: o tratamento da osteomalácia requer justamente suplementação nutricional adequada de cálcio e vitamina D.",
      "Está incorreta: sobrecarregar uma extremidade frágil em apoio unipodal provocaria dor intensa e risco iminente de fratura da anca."
    ],
    "nursingApplication": "O enfermeiro identifica sinais de dores ósseas difusas e fraqueza muscular proximal, promovendo a exposição solar segura e a adesão à suplementação prescrita de colecalciferol."
  },
  {
    "id": 3065,
    "topicId": 3,
    "question": "Um enfermeiro analisa o impacto biomecânico das solicitações mecânicas em 'osteomalácia e raquitismo em adultos e crianças'. Qual das seguintes afirmações apresenta a análise biofísica correta?",
    "options": [
      "O osso torna-se vinte vezes mais rígido que o normal, quebrando de forma puramente catastrófica ao primeiro toque de apoio no solo.",
      "Sem hidroxiapatite suficiente para dar rigidez, o colagénio flexível não resiste à flexão e o osso deforma-se sob a gravidade.",
      "A carência de cálcio mineral anula o momento de inércia da secção transversal, transformando a tíbia numa linha de espessura nula.",
      "As superfícies ósseas sofrem repulsão gravitacional que empurra as extremidades dos membros inferiores em direção ao tórax."
    ],
    "correctIndex": 1,
    "explanation": "Sob o ponto de vista físico e mecanicista, Sem cristais de hidroxiapatite suficientes, o osso perde a sua rigidez à compressão axial, deformando-se plasticamente sob a carga do peso corporal. Isto garante a integridade funcional do aparelho locomotor.",
    "distractorAnalysis": [
      "Está incorreta: a perda mineral reduz o Módulo de Young e a rigidez elástica, gerando deformidades em arco e não rigidez extrema.",
      "Está incorreta: o momento de inércia depende da geometria da secção reta transversal e não desaparece com a desmineralização.",
      "Está incorreta: o arqueamento decorre das forças gravitacionais de compressão do peso corporal sobre um suporte ósseo flexível."
    ],
    "nursingApplication": "O enfermeiro identifica sinais de dores ósseas difusas e fraqueza muscular proximal, promovendo a exposição solar segura e a adesão à suplementação prescrita de colecalciferol."
  },
  {
    "id": 3066,
    "topicId": 3,
    "question": "Na biofísica do sistema osteomuscular, em relação a 'conceito de anisotropia mecânica no osso cortical', qual é a fundamentação científica correta?",
    "options": [
      "O osso apresenta resistência mecânica e Módulo de Young rigorosamente idênticos em qualquer eixo tridimensional do espaço.",
      "O esqueleto suporta cargas exclusivamente se estas forem aplicadas num ângulo de noventa graus com a superfície articular.",
      "As propriedades mecânicas e a resistência variam com a direção da carga em relação à orientação longitudinal das osteonas.",
      "A estrutura óssea é totalmente insensível a esforços de torção, deformando-se apenas sob variações de pressão atmosférica."
    ],
    "correctIndex": 2,
    "explanation": "Em biofísica osteomuscular, conceito de anisotropia mecânica no osso cortical explica-se pelo facto de que as constantes elásticas e os limites de fratura dependem do ângulo e da orientação com que a força incide em relação ao alinhamento dos osteónios longitudinais. O osso resiste muito mais a cargas longitudinais paralelas aos sistemas de Havers do que a cargas oblíquas ou transversais.",
    "distractorAnalysis": [
      "Está incorreta: apresentar o mesmo comportamento em todas as direções espaciais define um material isótropo e não anisótropo.",
      "Está incorreta: o osso suporta solicitações mecânicas em múltiplos ângulos, embora com limites de resistência diferentes.",
      "Está incorreta: o osso é bastante sensível a momentos de torção, que induzem tensões oblíquas de tração e cisalhamento."
    ],
    "nursingApplication": "O enfermeiro assegura que durante transferências e posicionamentos no leito as forças sejam aplicadas longitudinalmente aos membros, evitando forças de torção ou empurrões transversais."
  },
  {
    "id": 3067,
    "topicId": 3,
    "question": "Durante a prestação de cuidados de enfermagem a um doente com alterações musculoesqueléticas, como se traduz na prática clínica o conceito de 'conceito de anisotropia mecânica no osso cortical'?",
    "options": [
      "Aplicar rotação forçada sobre o foco de fratura para verificar a mobilidade óssea antes de colocar o colar cervical ou a tala.",
      "Puxar o membro perpendicularmente ao seu eixo longo para testar a resistência das osteonas transversais contra o cisalhamento.",
      "Mobilizar o doente politraumatizado sem imobilização prévia, confiando na resistência do periósteo contra forças rotacionais.",
      "Manter o alinhamento axial e evitar forças de torção na mobilização, visto que o osso tolera menos os momentos torcionais e de corte."
    ],
    "correctIndex": 3,
    "explanation": "A aplicação de enfermagem para conceito de anisotropia mecânica no osso cortical baseia-se no princípio biomecânico: O enfermeiro assegura que durante transferências e posicionamentos no leito as forças sejam aplicadas longitudinalmente aos membros, evitando forças de torção ou empurrões transversais. Este raciocínio assegura intervenções fundamentadas na física biológica.",
    "distractorAnalysis": [
      "Está incorreta: a rotação intencional agravaria o desvio da fratura, provocando laceração de vasos e nervos periósseos.",
      "Está incorreta: trações transversais aplicam tensões de cisalhamento para as quais o osso e os tecidos têm menor tolerância.",
      "Está incorreta: a imobilização prévia em bloco alinhado é obrigatória para prevenir lesões secundárias neurológicas e vasculares."
    ],
    "nursingApplication": "O enfermeiro assegura que durante transferências e posicionamentos no leito as forças sejam aplicadas longitudinalmente aos membros, evitando forças de torção ou empurrões transversais."
  },
  {
    "id": 3068,
    "topicId": 3,
    "question": "Um enfermeiro analisa o impacto biomecânico das solicitações mecânicas em 'conceito de anisotropia mecânica no osso cortical'. Qual das seguintes afirmações apresenta a análise biofísica correta?",
    "options": [
      "O osso suporta compressão longitudinal muito melhor que tração (~190 vs ~130 MPa) e muito superior ao cisalhamento (~60 MPa).",
      "A resistência ao cisalhamento transversal é três vezes superior à resistência mecânica apresentada sob compressão axial.",
      "A tolerância à tração pura é dez vezes maior que a tolerância à compressão, tornando o osso indestrutível quando tracionado.",
      "Todas as formas de esforço mecânico possuem rigorosamente o mesmo limite de cedência plástica de cinquenta megapascals."
    ],
    "correctIndex": 0,
    "explanation": "Sob o ponto de vista físico e mecanicista, O osso resiste muito mais a cargas longitudinais paralelas aos sistemas de Havers do que a cargas oblíquas ou transversais. Isto garante a integridade funcional do aparelho locomotor.",
    "distractorAnalysis": [
      "Está incorreta: o cisalhamento é o modo de falha com menor resistência no osso cortical (~60 MPa vs ~190 MPa em compressão).",
      "Está incorreta: a resistência à tração (~130 MPa) é inferior à suportada sob compressão (~190 MPa) no longo eixo osteónico.",
      "Está incorreta: a anisotropia óssea determina limites de escoamento e rotura substancialmente díspares entre os modos de esforço."
    ],
    "nursingApplication": "O enfermeiro assegura que durante transferências e posicionamentos no leito as forças sejam aplicadas longitudinalmente aos membros, evitando forças de torção ou empurrões transversais."
  },
  {
    "id": 3069,
    "topicId": 3,
    "question": "Na biofísica do sistema osteomuscular, em relação a 'ensaio de tração pura vs ensaio de compressão pura no osso', qual é a fundamentação científica correta?",
    "options": [
      "A tração fecha instantaneamente as fissuras microscópicas através da polimerização imediata de novos filamentos de queratina.",
      "A compressão compacta as lamelas concêntricas e fecha microfendas, enquanto a tração tende a afastar as interfaces osteónicas.",
      "A compressão dissolve os cristais de hidroxiapatite, permitindo que o osso escoe como um fluido sob pressões muito elevadas.",
      "Não existe qualquer diferença molecular, resultando a disparidade de resistência de erros na calibração das máquinas de ensaio."
    ],
    "correctIndex": 1,
    "explanation": "Em biofísica osteomuscular, ensaio de tração pura vs ensaio de compressão pura no osso explica-se pelo facto de que o limite último de resistência à compressão longitudinal (~190 MPa) é significativamente superior ao limite à tração longitudinal (~130 MPa). Esta diferença reflete a necessidade evolutiva de suportar o peso gravitacional vertical e as fortes contrações musculares axiais.",
    "distractorAnalysis": [
      "Está incorreta: a tração afasta as fibras e expande as fendas interfibrilares, favorecendo a propagação de microfraturas.",
      "Está incorreta: a compressão não dissolve os cristais minerais, antes apoia-se na sua elevada rigidez inorgânica de suporte.",
      "Está incorreta: as diferenças entre tração e compressão são biomecanicamente comprovadas e universais em compósitos lamelados."
    ],
    "nursingApplication": "O enfermeiro compreende porque o uso de muletas auxiliares é vital: descarregar o membro reduz simultaneamente as forças de compressão e os momentos de flexão na tíbia fraturada."
  },
  {
    "id": 3070,
    "topicId": 3,
    "question": "Durante a prestação de cuidados de enfermagem a um doente com alterações musculoesqueléticas, como se traduz na prática clínica o conceito de 'ensaio de tração pura vs ensaio de compressão pura no osso'?",
    "options": [
      "Incentivar o cuidador a fletir o tronco mantendo os joelhos em extensão completa para anular o momento fletor no disco L5-S1.",
      "Ensinar que a coluna lombar suporta muito mais carga sob forças oblíquas de corte transversal do que sob compressão vertical pura.",
      "Compreender que levantar cargas com a coluna fletida induz tensão de tração posterior e cisalhamento, modos frágeis do osso e disco.",
      "Recomendar que as transferências de doentes sejam efetuadas com rotação rápida do tronco enquanto se sustenta o peso no ar."
    ],
    "correctIndex": 2,
    "explanation": "A aplicação de enfermagem para ensaio de tração pura vs ensaio de compressão pura no osso baseia-se no princípio biomecânico: O enfermeiro compreende porque o uso de muletas auxiliares é vital: descarregar o membro reduz simultaneamente as forças de compressão e os momentos de flexão na tíbia fraturada. Este raciocínio assegura intervenções fundamentadas na física biológica.",
    "distractorAnalysis": [
      "Está incorreta: fletir o tronco com pernas esticadas aumenta drasticamente o braço de momento da resistência e o torque no disco L5-S1.",
      "Está incorreta: a coluna é concebida para suportar cargas axiais compressivas, sendo o cisalhamento transversal perigoso para os discos.",
      "Está incorreta: rodar o tronco sob carga associa momentos de torção e corte aos discos intervertebrais, principal causa de hérnia discal."
    ],
    "nursingApplication": "O enfermeiro compreende porque o uso de muletas auxiliares é vital: descarregar o membro reduz simultaneamente as forças de compressão e os momentos de flexão na tíbia fraturada."
  },
  {
    "id": 3071,
    "topicId": 3,
    "question": "Um enfermeiro analisa o impacto biomecânico das solicitações mecânicas em 'ensaio de tração pura vs ensaio de compressão pura no osso'. Qual das seguintes afirmações apresenta a análise biofísica correta?",
    "options": [
      "As osteonas atuam como condutores térmicos que fundem os topos ósseos logo que uma fenda microscópica tenta abrir no córtex.",
      "A ausência total de interfaces entre as lamelas transforma o osso cortical num cristal único perfeitamente transparente à tração.",
      "O alinhamento osteónico foi desenhado para facilitar a quebra do osso ao menor impacto, prevenindo a transmissão de cargas ao cérebro.",
      "A estrutura lamelar concêntrica e as linhas de cimento desviam as fendas de tração, impedindo a sua propagação catastrófica direta."
    ],
    "correctIndex": 3,
    "explanation": "Sob o ponto de vista físico e mecanicista, Esta diferença reflete a necessidade evolutiva de suportar o peso gravitacional vertical e as fortes contrações musculares axiais. Isto garante a integridade funcional do aparelho locomotor.",
    "distractorAnalysis": [
      "Está incorreta: a tenacidade decorre do desvio e paragem de fendas nas linhas de cimento ricas em proteoglicanos e não de calor.",
      "Está incorreta: o osso é um material policristalino e multifásico com inúmeras interfaces lameladas e canais vasculares.",
      "Está incorreta: a arquitetura esquelética evoluiu para maximizar a resistência mecânica e proteger as estruturas vitais do corpo."
    ],
    "nursingApplication": "O enfermeiro compreende porque o uso de muletas auxiliares é vital: descarregar o membro reduz simultaneamente as forças de compressão e os momentos de flexão na tíbia fraturada."
  },
  {
    "id": 3072,
    "topicId": 3,
    "question": "Na biofísica do sistema osteomuscular, em relação a 'fragilidade extrema do osso ao cisalhamento puro', qual é a fundamentação científica correta?",
    "options": [
      "A baixa resistência ao corte transversal (~50-70 MPa) decorre do deslizamento das lamelas nas linhas de cimento interosteónicas.",
      "O cisalhamento é o modo mais resistente do osso, tolerando tensões superiores a mil megapascals sem qualquer fissura estrutural.",
      "As forças de corte provocam a expansão volumétrica elástica instantânea das osteonas, anulando qualquer risco de delaminação laminar.",
      "O osso deforma-se puramente por compressão hidrostática quando sujeito a corte transversal, anulando qualquer tensão tangencial."
    ],
    "correctIndex": 0,
    "explanation": "Em biofísica osteomuscular, fragilidade extrema do osso ao cisalhamento puro explica-se pelo facto de que a resistência ao cisalhamento transversal ronda apenas 50 a 70 MPa, sendo o ponto fraco da estrutura óssea compacta. Forças que tentam fazer deslizar planos transversais de osteónios quebram as ligações de cimento interfibrilar com facilidade relativa.",
    "distractorAnalysis": [
      "Está incorreta: a resistência ao cisalhamento (~60 MPa) é cerca de um terço da resistência compressiva longitudinal do osso cortical.",
      "Está incorreta: o esforço tangencial não vaporiza o mineral ósseo, originando falhas mecânicas por delaminação interlaminar.",
      "Está incorreta: forças tangenciais produzem tensões de cisalhamento que causam deformação angular e deslizamento de planos."
    ],
    "nursingApplication": "O enfermeiro imobiliza traumatismos de perna com talas que abranjam a articulação acima e abaixo, eliminando movimentos laterais de cisalhamento sobre o foco de fratura."
  },
  {
    "id": 3073,
    "topicId": 3,
    "question": "Durante a prestação de cuidados de enfermagem a um doente com alterações musculoesqueléticas, como se traduz na prática clínica o conceito de 'fragilidade extrema do osso ao cisalhamento puro'?",
    "options": [
      "Pedir ao acidentado para apoiar o pé fraturado no solo para testar se a resistência ao cisalhamento ainda se encontra preservada.",
      "Imobilizar o membro suspeito com tala para eliminar momentos de flexão e corte que deslocariam os topos ósseos e lesionariam vasos.",
      "Fazer massagem vigorosa e tração transversal sobre o foco doloroso para tentar realinhar os fragmentos ósseos com as mãos nuas.",
      "Aquecer a extremidade lesada com compressas a oitenta graus para acelerar a cicatrização do hematoma nas primeiras duas horas."
    ],
    "correctIndex": 1,
    "explanation": "A aplicação de enfermagem para fragilidade extrema do osso ao cisalhamento puro baseia-se no princípio biomecânico: O enfermeiro imobiliza traumatismos de perna com talas que abranjam a articulação acima e abaixo, eliminando movimentos laterais de cisalhamento sobre o foco de fratura. Este raciocínio assegura intervenções fundamentadas na física biológica.",
    "distractorAnalysis": [
      "Está incorreta: o apoio do peso corporal sobre um foco instável provocaria desvio imediato da fratura e agravamento da dor.",
      "Está incorreta: a massagem e manipulação intempestiva no local traumatizado aumentam a hemorragia e laceram partes moles.",
      "Está incorreta: a aplicação de calor precoce agrava a vasodilatação, o edema e a dor, estando indicado o gelo local protegido."
    ],
    "nursingApplication": "O enfermeiro imobiliza traumatismos de perna com talas que abranjam a articulação acima e abaixo, eliminando movimentos laterais de cisalhamento sobre o foco de fratura."
  },
  {
    "id": 3074,
    "topicId": 3,
    "question": "Um enfermeiro analisa o impacto biomecânico das solicitações mecânicas em 'fragilidade extrema do osso ao cisalhamento puro'. Qual das seguintes afirmações apresenta a análise biofísica correta?",
    "options": [
      "Forças puras de compressão uniforme axial que encurtam a tíbia em menos de um micrómetro sem qualquer rotação ou desvio.",
      "Deformação puramente elástica reversível da cortical que volta espontaneamente à forma inicial sem qualquer quebra de continuidade.",
      "Tensões de corte tangenciais associadas a forças de tração oblíqua que superam a baixa coesão interlaminar da matriz osteónica.",
      "Aumento súbito da densidade mineral da hidroxiapatite que torna o osso excessivamente denso e pesado para o movimento desportivo."
    ],
    "correctIndex": 2,
    "explanation": "Sob o ponto de vista físico e mecanicista, Forças que tentam fazer deslizar planos transversais de osteónios quebram as ligações de cimento interfibrilar com facilidade relativa. Isto garante a integridade funcional do aparelho locomotor.",
    "distractorAnalysis": [
      "Está incorreta: fraturas por torção e avulsão decorrem de tensões tangenciais de cisalhamento e tração e não de compressão simples.",
      "Está incorreta: a perda respiratória de humidade aérea é fisiológica e não gera forças mecânicas intrínsecas de fratura óssea.",
      "Está incorreta: o trauma decorre da intensidade e modo de aplicação da força mecânica e não de hipermineralização instantânea."
    ],
    "nursingApplication": "O enfermeiro imobiliza traumatismos de perna com talas que abranjam a articulação acima e abaixo, eliminando movimentos laterais de cisalhamento sobre o foco de fratura."
  },
  {
    "id": 3075,
    "topicId": 3,
    "question": "Na biofísica do sistema osteomuscular, em relação a 'viscoelasticidade e taxa de deformação (strain rate)', qual é a fundamentação científica correta?",
    "options": [
      "A rigidez elástica do osso diminui com a velocidade de carga, partindo como giz sob qualquer impacto dinâmico de alta energia.",
      "O osso deforma-se plasticamente de forma ilimitada quando a carga é instantânea, dobrando como borracha sem nunca partir.",
      "A velocidade de aplicação da carga não tem qualquer influência nas propriedades mecânicas, pois o osso é perfeitamente elástico.",
      "O osso torna-se mais rígido e tolera tensões de rotura superiores sob impactos rápidos, absorvendo maior energia mecânica total."
    ],
    "correctIndex": 3,
    "explanation": "Em biofísica osteomuscular, viscoelasticidade e taxa de deformação (strain rate) explica-se pelo facto de que a rigidez e a resistência do osso aumentam consideravelmente quando a carga mecânica é aplicada a alta velocidade em comparação com uma carga lenta. Sob impacto súbito rápido (alta taxa de deformação), o osso comporta-se como um material mais rígido e frágil, absorvendo mais energia total antes da rotura cominutiva.",
    "distractorAnalysis": [
      "Está incorreta: materiais viscoelásticos exibem aumento de rigidez (maior Módulo de Young) com o aumento da taxa de deformação.",
      "Está incorreta: o osso sob impacto rápido quebra de forma mais frágil e cominutiva e não com deformação plástica gomosa ilimitada.",
      "Está incorreta: a resposta do tecido ósseo é viscoelástica e altamente dependente do tempo e da velocidade do carregamento mecânico."
    ],
    "nursingApplication": "O enfermeiro alerta para a gravidade dos acidentes desportivos e de tráfego rápido, onde o impacto a alta velocidade resulta frequentemente em fraturas com múltiplos fragmentos ósseos."
  },
  {
    "id": 3076,
    "topicId": 3,
    "question": "Durante a prestação de cuidados de enfermagem a um doente com alterações musculoesqueléticas, como se traduz na prática clínica o conceito de 'viscoelasticidade e taxa de deformação (strain rate)'?",
    "options": [
      "Impactos de alta velocidade (como acidentes de viação) dissipam grande energia em fraturas cominutivas e grave dano de partes moles.",
      "Traumas rápidos de alta energia nunca provocam fratura óssea, pois a velocidade do impacto converte o córtex num elastómero macio.",
      "Quedas simples em marcha lenta geram fragmentação óssea vinte vezes superior à provocada por embates automobilísticos frontais.",
      "A velocidade de desaceleração num choque não tem qualquer correlação biomecânica com o grau de estilhaçamento do membro lesado."
    ],
    "correctIndex": 0,
    "explanation": "A aplicação de enfermagem para viscoelasticidade e taxa de deformação (strain rate) baseia-se no princípio biomecânico: O enfermeiro alerta para a gravidade dos acidentes desportivos e de tráfego rápido, onde o impacto a alta velocidade resulta frequentemente em fraturas com múltiplos fragmentos ósseos. Este raciocínio assegura intervenções fundamentadas na física biológica.",
    "distractorAnalysis": [
      "Está incorreta: o osso sob alta taxa de deformação acumula enorme energia elástica antes de quebrar em múltiplos estilhaços cominutivos.",
      "Está incorreta: quedas de baixa energia cinética produzem habitualmente traços de fratura simples sem grande cominuição.",
      "Está incorreta: a gravidade da lesão esquelética depende diretamente da energia cinética dissipada (E_cin = 1/2·m·v²)."
    ],
    "nursingApplication": "O enfermeiro alerta para a gravidade dos acidentes desportivos e de tráfego rápido, onde o impacto a alta velocidade resulta frequentemente em fraturas com múltiplos fragmentos ósseos."
  },
  {
    "id": 3077,
    "topicId": 3,
    "question": "Um enfermeiro analisa o impacto biomecânico das solicitações mecânicas em 'viscoelasticidade e taxa de deformação (strain rate)'. Qual das seguintes afirmações apresenta a análise biofísica correta?",
    "options": [
      "O osso deforma-se plasticamente sem quebrar quando a velocidade do impacto excede a velocidade de propagação do som no ar.",
      "Sob impacto rápido o osso absorve grande energia mecânica antes de falhar, fragmentando-se em múltiplos estilhaços corticais.",
      "A energia mecânica do impacto é 100% refletida para fora do corpo sob a forma de radiação luminosa visível na enfermaria.",
      "O córtex diafisário sofre descalcificação instantânea que converte o membro num tubo puramente cartilagíneo e flexível."
    ],
    "correctIndex": 1,
    "explanation": "Sob o ponto de vista físico e mecanicista, Sob impacto súbito rápido (alta taxa de deformação), o osso comporta-se como um material mais rígido e frágil, absorvendo mais energia total antes da rotura cominutiva. Isto garante a integridade funcional do aparelho locomotor.",
    "distractorAnalysis": [
      "Está incorreta: impactos supersónicos ou de alta energia superam amplamente a tenacidade do osso cortical, estilhaçando-o.",
      "Está incorreta: os tecidos musculoesqueléticos dissipam energia cinética sob trabalho de deformação e calor e não emissão de luz.",
      "Está incorreta: a perda de mineral não ocorre no instante do trauma, decorrendo a fratura da rotura mecânica das osteonas."
    ],
    "nursingApplication": "O enfermeiro alerta para a gravidade dos acidentes desportivos e de tráfego rápido, onde o impacto a alta velocidade resulta frequentemente em fraturas com múltiplos fragmentos ósseos."
  },
  {
    "id": 3078,
    "topicId": 3,
    "question": "Na biofísica do sistema osteomuscular, em relação a 'fadiga mecânica óssea e fraturas de stress em recrutas e atletas', qual é a fundamentação científica correta?",
    "options": [
      "Um único esforço ligeiro de sustentação corporal desmineraliza instantaneamente o osso através da drenagem venosa periférica.",
      "A fadiga óssea é causada pela passagem de correntes elétricas alternadas que dissolvem as pontes moleculares de hidroxiapatite.",
      "Cargas cíclicas submáximas repetidas provocam microfraturas cuja acumulação cumulativa supera a taxa de reparação osteoblástica.",
      "O osso ganha flexibilidade ilimitada após longas caminhadas, comportando-se como borracha vulcanizada sem qualquer lesão tecidual."
    ],
    "correctIndex": 2,
    "explanation": "Em biofísica osteomuscular, fadiga mecânica óssea e fraturas de stress em recrutas e atletas explica-se pelo facto de que a aplicação repetitiva de microcargas cíclicas subclínicas ultrapassa a capacidade de reparação biológica dos osteoblastos, originando microrroturas progressivas. Se o tempo de repouso mecânico for insuficiente, as microfissuras coalescem numa fratura de stress completa sem trauma agudo único.",
    "distractorAnalysis": [
      "Está incorreta: a fadiga óssea de stresse é um processo de dano microestrutural repetitivo e não decorre de um trauma ligeiro isolado.",
      "Está incorreta: o mecanismo não tem base elétrica externa nem envolve dissolução espontânea dos cristais inorgânicos de cálcio.",
      "Está incorreta: o osso submetido a fadiga mecânica excessiva sofre rotura por insuficiência e não ganha complacência protetora."
    ],
    "nursingApplication": "O enfermeiro do trabalho e desporto monitoriza dores ósseas insidiosas nos metatarsos e tíbia em indivíduos que iniciaram marchas ou treinos intensos sem progressão gradual."
  },
  {
    "id": 3079,
    "topicId": 3,
    "question": "Durante a prestação de cuidados de enfermagem a um doente com alterações musculoesqueléticas, como se traduz na prática clínica o conceito de 'fadiga mecânica óssea e fraturas de stress em recrutas e atletas'?",
    "options": [
      "Incentivar o treino de marcha contínua de vinte horas diárias sem repouso para obrigar as trabéculas a fundirem-se mais rapidamente.",
      "Prescrever o uso exclusivo de calçado rígido sem qualquer sola amortecedora para aumentar as ondas de impacto nos ossos do tarso.",
      "Orientar a cessação completa e permanente de qualquer atividade física logo ao primeiro sinal de fadiga muscular fisiológica normal.",
      "Recomendar progressão gradual de cargas e pausas ergonómicas, permitindo que a remodelação osteoblástica repare os microdanos da marcha."
    ],
    "correctIndex": 3,
    "explanation": "A aplicação de enfermagem para fadiga mecânica óssea e fraturas de stress em recrutas e atletas baseia-se no princípio biomecânico: O enfermeiro do trabalho e desporto monitoriza dores ósseas insidiosas nos metatarsos e tíbia em indivíduos que iniciaram marchas ou treinos intensos sem progressão gradual. Este raciocínio assegura intervenções fundamentadas na física biológica.",
    "distractorAnalysis": [
      "Está incorreta: a sobrecarga contínua sem repouso esgota a capacidade reparadora dos osteoblastos, precipitando a fratura de stresse.",
      "Está incorreta: a ausência de amortecimento no calçado eleva o pico da força de reação do solo, sobrecarregando os metatarsos.",
      "Está incorreta: o estímulo mecânico progressivo e doseado é indispensável para promover a densidade óssea adaptativa da Lei de Wolff."
    ],
    "nursingApplication": "O enfermeiro do trabalho e desporto monitoriza dores ósseas insidiosas nos metatarsos e tíbia em indivíduos que iniciaram marchas ou treinos intensos sem progressão gradual."
  },
  {
    "id": 3080,
    "topicId": 3,
    "question": "Um enfermeiro analisa o impacto biomecânico das solicitações mecânicas em 'fadiga mecânica óssea e fraturas de stress em recrutas e atletas'. Qual das seguintes afirmações apresenta a análise biofísica correta?",
    "options": [
      "Se o tempo de repouso for insuficiente, a taxa de microlesão supera a de reparação tecidual, culminando em fratura de stresse clínica.",
      "O repouso mecânico prolongado acelera a deposição de colagénio tipo I até transformar a tíbia num sólido totalmente flexível.",
      "O osso vivo repara qualquer fenda microscópica em menos de dez segundos independentemente da magnitude das cargas aplicadas.",
      "A acumulação de microfraturas torna o osso cem vezes mais resistente à flexão mecânica através do endurecimento das trabéculas."
    ],
    "correctIndex": 0,
    "explanation": "Sob o ponto de vista físico e mecanicista, Se o tempo de repouso mecânico for insuficiente, as microfissuras coalescem numa fratura de stress completa sem trauma agudo único. Isto garante a integridade funcional do aparelho locomotor.",
    "distractorAnalysis": [
      "Está incorreta: o repouso por si só não torna o osso gomoso, mas a ausência continuada de pausas sob carga gera fadiga estrutural.",
      "Está incorreta: a remodelação e reparação biológica das osteonas requer semanas e não alguns segundos infinitesimais.",
      "Está incorreta: a coalescência de microfissuras fragiliza a matriz cortical, levando à rotura catastrófica do membro."
    ],
    "nursingApplication": "O enfermeiro do trabalho e desporto monitoriza dores ósseas insidiosas nos metatarsos e tíbia em indivíduos que iniciaram marchas ou treinos intensos sem progressão gradual."
  },
  {
    "id": 3081,
    "topicId": 3,
    "question": "Na biofísica do sistema osteomuscular, em relação a 'papel da esclerostina na mecanotransdução dos osteócitos', qual é a fundamentação científica correta?",
    "options": [
      "A esclerostina é libertada em grandes quantidades sob esforço físico intenso para dissolver as trabéculas e aliviar o peso esquelético.",
      "Sob carga mecânica, os osteócitos inibem a esclerostina, ativando a via Wnt/β-catenina que estimula a osteogénese e formação de osso.",
      "Os osteócitos transformam-se em osteoclastos sob tensão mecânica para eliminar todos os sais minerais da diáfise dos ossos longos.",
      "A ausência de esclerostina converte a matriz óssea em cartilagem hialina avascular que bloqueia a transmissão de forças articulares."
    ],
    "correctIndex": 1,
    "explanation": "Em biofísica osteomuscular, papel da esclerostina na mecanotransdução dos osteócitos explica-se pelo facto de que sob carga mecânica contínua, os osteócitos inibem a secreção de esclerostina, desbloqueando a via anabólica Wnt/β-catenina que ativa a osteogénese. Na ausência de estímulo mecânico (imobilização), os osteócitos libertam altos níveis de esclerostina, suprimindo os osteoblastos e promovendo a reabsorção óssea.",
    "distractorAnalysis": [
      "Está incorreta: a esclerostina é um inibidor da formação óssea cuja secreção diminui com a estimulação mecânica da matriz.",
      "Está incorreta: os osteócitos são células maduras residentes que sinalizam a remodelação e não se desdiferenciam em osteoclastos.",
      "Está incorreta: a inibição da esclerostina resulta no aumento da densidade mineral óssea e reforço cortical adaptativo."
    ],
    "nursingApplication": "O enfermeiro integra na reabilitação exercícios de carga axial, sabendo que a estimulação mecânica diária silencia a esclerostina e promove a síntese de osso novo."
  },
  {
    "id": 3082,
    "topicId": 3,
    "question": "Durante a prestação de cuidados de enfermagem a um doente com alterações musculoesqueléticas, como se traduz na prática clínica o conceito de 'papel da esclerostina na mecanotransdução dos osteócitos'?",
    "options": [
      "Manter o doente em repouso estrito no leito durante todo o programa de reabilitação para impedir a inibição da esclerostina celular.",
      "Proibir qualquer caminhada ao ar livre para proteger os osteócitos contra a estimulação mecânica gerada pela gravidade terrestre.",
      "Prescrever exercícios com carga e impacto controlado para suprimir a esclerostina e potenciar a densidade mineral em osteopénicos.",
      "Estimular a imobilização dos membros inferiores com gessos circulares para ativar a via Wnt/β-catenina sem necessidade de esforço."
    ],
    "correctIndex": 2,
    "explanation": "A aplicação de enfermagem para papel da esclerostina na mecanotransdução dos osteócitos baseia-se no princípio biomecânico: O enfermeiro integra na reabilitação exercícios de carga axial, sabendo que a estimulação mecânica diária silencia a esclerostina e promove a síntese de osso novo. Este raciocínio assegura intervenções fundamentadas na física biológica.",
    "distractorAnalysis": [
      "Está incorreta: a imobilização no leito eleva a esclerostina, bloqueando a formação óssea e acelerando a perda mineral (osteopenia).",
      "Está incorreta: o estímulo gravítico da marcha é justamente o principal desencadeador da mecanotransdução anabólica óssea.",
      "Está incorreta: a contenção gessada sem apoio gera desuso mecânico profundo, promovendo a perda rápida de matriz mineral."
    ],
    "nursingApplication": "O enfermeiro integra na reabilitação exercícios de carga axial, sabendo que a estimulação mecânica diária silencia a esclerostina e promove a síntese de osso novo."
  },
  {
    "id": 3083,
    "topicId": 3,
    "question": "Um enfermeiro analisa o impacto biomecânico das solicitações mecânicas em 'papel da esclerostina na mecanotransdução dos osteócitos'. Qual das seguintes afirmações apresenta a análise biofísica correta?",
    "options": [
      "A falta de gravidade converte o esqueleto num compósito superelástico que dispensa qualquer aporte alimentar de sais de cálcio.",
      "A ausência de estímulo mecânico induz calcificação heterotópica acelerada que fecha completamente os canais medulares diafisários.",
      "O repouso no leito provoca a hipertrofia maciça das trabéculas ósseas que duplicam a espessura da cortical diafisária femoral.",
      "Sem solicitação mecânica, a secreção de esclerostina aumenta, bloqueando os osteoblastos e favorecendo a osteopenia por desuso."
    ],
    "correctIndex": 3,
    "explanation": "Sob o ponto de vista físico e mecanicista, Na ausência de estímulo mecânico (imobilização), os osteócitos libertam altos níveis de esclerostina, suprimindo os osteoblastos e promovendo a reabsorção óssea. Isto garante a integridade funcional do aparelho locomotor.",
    "distractorAnalysis": [
      "Está incorreta: o desuso mecânico causa osteopenia e reabsorção cortical acelerada e não adaptação superelástica.",
      "Está incorreta: não ocorre vaporização mineral na matriz, havendo sim desmineralização mediada por osteoclastos ativados.",
      "Está incorreta: a ausência de carga induz adelgaçamento cortical e atrofia trabecular de acordo com a Lei de Wolff."
    ],
    "nursingApplication": "O enfermeiro integra na reabilitação exercícios de carga axial, sabendo que a estimulação mecânica diária silencia a esclerostina e promove a síntese de osso novo."
  },
  {
    "id": 3084,
    "topicId": 3,
    "question": "Na biofísica do sistema osteomuscular, em relação a 'potenciais elétricos de fluxo (streaming potentials) no osso', qual é a fundamentação científica correta?",
    "options": [
      "O escoamento de fluidos intersticiais com iões sobre a matriz colagénica sob carga gera potenciais eletrocinéticos que atraem osteoblastos.",
      "A polarização puramente magnética dos osteoblastos que repele as moléculas de colagénio em direção à circulação venosa periférica.",
      "O choque mecânico do passo faz explodir os núcleos celulares dos osteócitos, libertando energia nuclear que calcifica a cortical.",
      "As lamelas ósseas comportam-se como isolantes perfeitos que bloqueiam a passagem de qualquer ião ou partícula carregada no tecido."
    ],
    "correctIndex": 0,
    "explanation": "Em biofísica osteomuscular, potenciais elétricos de fluxo (streaming potentials) no osso explica-se pelo facto de que o movimento de fluidos intersticiais carregados de iões sobre a matriz óssea eletronegativa durante a flexão gera correntes elétricas transitórias. Estas correntes iónicas polarizam as superfícies ósseas e ativam os canais de cálcio mecano-dependentes nos osteócitos.",
    "distractorAnalysis": [
      "Está incorreta: os canais ósseos contêm vasos sanguíneos e fluido intersticial condutor e não ar em circulação térmica.",
      "Está incorreta: a mecanotransdução baseia-se em potenciais de streaming eletrocinéticos suaves e não em reações atómicas.",
      "Está incorreta: o osso é um condutor iónico poroso com canalículos intercomunicantes preenchidos por fluido extracelular."
    ],
    "nursingApplication": "O enfermeiro compreende a base dos tratamentos de fisioterapia e bioestimulação elétrica coadjuvantes na consolidação de fraturas complexas."
  },
  {
    "id": 3085,
    "topicId": 3,
    "question": "Durante a prestação de cuidados de enfermagem a um doente com alterações musculoesqueléticas, como se traduz na prática clínica o conceito de 'potenciais elétricos de fluxo (streaming potentials) no osso'?",
    "options": [
      "Administrar correntes galvânicas contínuas de alta amperagem diretamente sobre o foco para queimar quimicamente o tecido conjuntivo mole.",
      "Compreender a base biológica dos estimuladores eletromagnéticos e ultrassons pulsados para acelerar a consolidação em pseudoartroses.",
      "Recomendar a imobilização absoluta do membro em talas metálicas ligadas à rede elétrica da enfermaria para induzir magnetismo.",
      "Proibir qualquer suporte de peso no membro mesmo após a consolidação radiológica completa confirmada pelo médico assistente."
    ],
    "correctIndex": 1,
    "explanation": "A aplicação de enfermagem para potenciais elétricos de fluxo (streaming potentials) no osso baseia-se no princípio biomecânico: O enfermeiro compreende a base dos tratamentos de fisioterapia e bioestimulação elétrica coadjuvantes na consolidação de fraturas complexas. Este raciocínio assegura intervenções fundamentadas na física biológica.",
    "distractorAnalysis": [
      "Está incorreta: correntes intensas causariam queimaduras teciduais graves e necrose sem qualquer benefício na osteogénese.",
      "Está incorreta: os aparelhos clínicos de PEMF utilizam campos magnéticos pulsados de baixa intensidade seguros e calibrados.",
      "Está incorreta: a reintrodução precoce e segura de carga fisiológica estimula a remodelação e retorno funcional pleno do doente."
    ],
    "nursingApplication": "O enfermeiro compreende a base dos tratamentos de fisioterapia e bioestimulação elétrica coadjuvantes na consolidação de fraturas complexas."
  },
  {
    "id": 3086,
    "topicId": 3,
    "question": "Um enfermeiro analisa o impacto biomecânico das solicitações mecânicas em 'potenciais elétricos de fluxo (streaming potentials) no osso'. Qual das seguintes afirmações apresenta a análise biofísica correta?",
    "options": [
      "As correntes iónicas paralisam totalmente o metabolismo dos osteoblastos, impedindo a deposição de nova matriz de colagénio.",
      "Os potenciais de streaming convertem a hidroxiapatite em cristais solúveis que são eliminados pela urina em cada contração muscular.",
      "As correntes eletrocinéticas e micropotenciais negativos nas áreas de compressão funcionam como sinal para a síntese osteoblástica.",
      "Os campos elétricos ósseos neutralizam as leis da gravidade, fazendo com que as trabéculas flutuem no interior da medula óssea."
    ],
    "correctIndex": 2,
    "explanation": "Sob o ponto de vista físico e mecanicista, Estas correntes iónicas polarizam as superfícies ósseas e ativam os canais de cálcio mecano-dependentes nos osteócitos. Isto garante a integridade funcional do aparelho locomotor.",
    "distractorAnalysis": [
      "Está incorreta: os potenciais negativos sob compressão estimulam ativamente os osteoblastos a depositar mineral ósseo.",
      "Está incorreta: o efeito eletrocinético preserva e reforça a matriz mineral e não promove a sua solubilização ou excreção renal.",
      "Está incorreta: o fenómeno é puramente biofísico de sinalização celular e não interfere com o campo gravítico terrestre."
    ],
    "nursingApplication": "O enfermeiro compreende a base dos tratamentos de fisioterapia e bioestimulação elétrica coadjuvantes na consolidação de fraturas complexas."
  },
  {
    "id": 3087,
    "topicId": 3,
    "question": "Na biofísica do sistema osteomuscular, em relação a 'adaptação da espessura cortical no braço dominante de tenistas', qual é a fundamentação científica correta?",
    "options": [
      "O braço dominante atrofia consideravelmente devido ao excesso de esforço físico, reduzindo o seu momento de inércia para metade.",
      "A estrutura óssea do membro dominante torna-se puramente cartilagínea para evitar que as vibrações da raquete partam o cúbito.",
      "O osso do membro ativo perde todo o seu conteúdo mineral por evaporação piezoelétrica provocada pelo atrito da pega da raquete.",
      "O úmero e rádio do braço dominante de jogadores de ténis exibem córtex mais espesso e maior diâmetro externo por estímulo mecânico."
    ],
    "correctIndex": 3,
    "explanation": "Em biofísica osteomuscular, adaptação da espessura cortical no braço dominante de tenistas explica-se pelo facto de que o osso do úmero e rádio do membro superior utilizado para jogar ténis apresenta uma cortical até 30% mais espessa do que o membro contralateral. Este aumento morfológico ilustra a Lei de Wolff em pleno: o osso respondeu hipertrofiando nas zonas que sofrem maiores momentos de flexão e torção repetitivos.",
    "distractorAnalysis": [
      "Está incorreta: o treino de força e impacto desportivo induz hipertrofia óssea adaptativa (córtex mais espesso) pela Lei de Wolff.",
      "Está incorreta: o osso sob impacto torna-se mais denso e mineralizado e não desdiferenciado em cartilagem articular flexível.",
      "Está incorreta: a hidroxiapatite mineral mantém-se estável e ancorada na matriz de colagénio sem fenómenos de evaporação."
    ],
    "nursingApplication": "O enfermeiro aconselha os doentes com osteopenia a praticarem desportos com impacto moderado e tração muscular ativa para promover o reforço cortical segmentar."
  },
  {
    "id": 3088,
    "topicId": 3,
    "question": "Durante a prestação de cuidados de enfermagem a um doente com alterações musculoesqueléticas, como se traduz na prática clínica o conceito de 'adaptação da espessura cortical no braço dominante de tenistas'?",
    "options": [
      "Aconselhar atividade física regular com impacto moderado e força muscular para estimular o ganho adaptativo de massa esquelética.",
      "Instruir o utente a permanecer imóvel na cama o maior número de horas diárias para poupar os ossos contra o desgaste mecânico.",
      "Recomendar a interrupção de toda a locomoção ativa a partir dos cinquenta anos para impedir a formação de novo tecido osteoide.",
      "Orientar o uso contínuo de muletas em indivíduos saudáveis para que os membros inferiores nunca suportem mais de dez por cento do peso."
    ],
    "correctIndex": 0,
    "explanation": "A aplicação de enfermagem para adaptação da espessura cortical no braço dominante de tenistas baseia-se no princípio biomecânico: O enfermeiro aconselha os doentes com osteopenia a praticarem desportos com impacto moderado e tração muscular ativa para promover o reforço cortical segmentar. Este raciocínio assegura intervenções fundamentadas na física biológica.",
    "distractorAnalysis": [
      "Está incorreta: o repouso excessivo acelera a perda óssea por desuso, aumentando a fragilidade e o risco de fraturas futuras.",
      "Está incorreta: a síntese de osteoide e renovação óssea devem ser estimuladas ao longo de toda a vida para preservar a mobilidade.",
      "Está incorreta: descarregar os membros inferiores de forma injustificada atrofia os músculos e desmineraliza o fémur e a tíbia."
    ],
    "nursingApplication": "O enfermeiro aconselha os doentes com osteopenia a praticarem desportos com impacto moderado e tração muscular ativa para promover o reforço cortical segmentar."
  },
  {
    "id": 3089,
    "topicId": 3,
    "question": "Um enfermeiro analisa o impacto biomecânico das solicitações mecânicas em 'adaptação da espessura cortical no braço dominante de tenistas'. Qual das seguintes afirmações apresenta a análise biofísica correta?",
    "options": [
      "O aumento da espessura cortical preenche completamente o canal medular com osso maciço, bloqueando a hematopoiese no adulto.",
      "A aposição de osso no periósteo afasta a cortical do eixo neutro, elevando o momento de inércia e a resistência à flexão e torção.",
      "A remodelação reduz a área de secção reta transversal para que o membro se torne mais leve e rápido durante a corrida desportiva.",
      "O aumento do diâmetro externo torna o osso extremamente frágil, fraturando espontaneamente sob a contração dos músculos extensores."
    ],
    "correctIndex": 1,
    "explanation": "Sob o ponto de vista físico e mecanicista, Este aumento morfológico ilustra a Lei de Wolff em pleno: o osso respondeu hipertrofiando nas zonas que sofrem maiores momentos de flexão e torção repetitivos. Isto garante a integridade funcional do aparelho locomotor.",
    "distractorAnalysis": [
      "Está incorreta: a aposição periosteal é acompanhada de reabsorção endosteal fisiológica, preservando o canal medular central.",
      "Está incorreta: a área transversal e o momento de inércia aumentam com a solicitação mecânica, reforçando a diáfise.",
      "Está incorreta: o diâmetro aumentado confere enorme resistência mecânica adicional contra solicitações de flexão e torção."
    ],
    "nursingApplication": "O enfermeiro aconselha os doentes com osteopenia a praticarem desportos com impacto moderado e tração muscular ativa para promover o reforço cortical segmentar."
  },
  {
    "id": 3090,
    "topicId": 3,
    "question": "Na biofísica do sistema osteomuscular, em relação a 'perda de massa óssea em astronautas em microgravidade', qual é a fundamentação científica correta?",
    "options": [
      "Em gravidade zero a densidade mineral óssea triplica em quarenta e oito horas devido à ausência de forças de atrito atmosférico no espaço.",
      "O esqueleto dos astronautas converte-se numa liga metálica de titânio puro através da radiação cósmica recebida no interior da nave.",
      "Em microgravidade os astronautas perdem cerca de 1% a 1,5% de massa óssea por mês nos membros inferiores por ausência de peso mecânico.",
      "Os ossos da bacia e membros inferiores sofrem ossificação acelerada que anula qualquer movimento articular na estação espacial."
    ],
    "correctIndex": 2,
    "explanation": "Em biofísica osteomuscular, perda de massa óssea em astronautas em microgravidade explica-se pelo facto de que em gravidade zero espacial, os astronautas perdem cerca de 1% a 1,5% de massa óssea trabecular por mês na coluna vertebral e fémur. A falta de gravidade elimina a pressão hidrostática e a carga axial nos canalículos dos osteócitos, ativando uma reabsorção osteoclástica intensa.",
    "distractorAnalysis": [
      "Está incorreta: a ausência de estímulo gravítico de compressão e flexão provoca osteopenia severa por reabsorção e desuso.",
      "Está incorreta: a radiação cósmica não transmuta a matéria biológica humana em ligas metálicas industriais de titânio.",
      "Está incorreta: a imponderabilidade induz perda de densidade óssea e atrofia muscular por desuso e não anquilose hipertrófica."
    ],
    "nursingApplication": "O modelo de astronautas é análogo ao doente em cama de cuidados intensivos: o enfermeiro implementa mobilização passiva e planos inclinados assim que hemodinamicamente tolerado."
  },
  {
    "id": 3091,
    "topicId": 3,
    "question": "Durante a prestação de cuidados de enfermagem a um doente com alterações musculoesqueléticas, como se traduz na prática clínica o conceito de 'perda de massa óssea em astronautas em microgravidade'?",
    "options": [
      "Doentes imobilizados aumentam a rigidez do fémur em cem por cento devido à retenção de sais de cálcio no interior dos canalículos.",
      "O decúbito prolongado no leito previne qualquer perda de massa óssea, tornando o esqueleto do doente imune a fraturas na alta.",
      "A imobilização no leito hospitalar anula a atração gravítica da Terra, permitindo ao doente levitar suavemente sobre o colchão.",
      "Doentes acamados crónicos mimetizam os astronautas, sofrendo perda acelerada de cálcio ósseo e hipercalciúria por falta de carga vertical."
    ],
    "correctIndex": 3,
    "explanation": "A aplicação de enfermagem para perda de massa óssea em astronautas em microgravidade baseia-se no princípio biomecânico: O modelo de astronautas é análogo ao doente em cama de cuidados intensivos: o enfermeiro implementa mobilização passiva e planos inclinados assim que hemodinamicamente tolerado. Este raciocínio assegura intervenções fundamentadas na física biológica.",
    "distractorAnalysis": [
      "Está incorreta: o repouso prolongado induz desmineralização óssea rápida e excreção aumentada de cálcio na urina (hipercalciúria).",
      "Está incorreta: o leito prolongado provoca atrofia óssea e perda de resistência, aumentando o risco de fratura na reabilitação.",
      "Está incorreta: o paciente no leito sofre a atração da gravidade contra o colchão sem qualquer fenómeno de levitação mecânica."
    ],
    "nursingApplication": "O modelo de astronautas é análogo ao doente em cama de cuidados intensivos: o enfermeiro implementa mobilização passiva e planos inclinados assim que hemodinamicamente tolerado."
  },
  {
    "id": 3092,
    "topicId": 3,
    "question": "Um enfermeiro analisa o impacto biomecânico das solicitações mecânicas em 'perda de massa óssea em astronautas em microgravidade'. Qual das seguintes afirmações apresenta a análise biofísica correta?",
    "options": [
      "A falta de forças axiais inibe os osteoblastos e ativa a osteoclastogénese, acelerando a fragilização do colo femoral e vértebras.",
      "A ausência de carga converte os osteoclastos em células produtoras de queratina epitelial densa na cavidade medular diafisária.",
      "O osso reage ao desuso duplicando o Módulo de Young para assegurar que o paciente nunca perca a capacidade de locomoção futura.",
      "A microgravidade ou o leito contínuo eliminam os canais vasculares de Volkmann através da polimerização rápida de elastina pura."
    ],
    "correctIndex": 0,
    "explanation": "Sob o ponto de vista físico e mecanicista, A falta de gravidade elimina a pressão hidrostática e a carga axial nos canalículos dos osteócitos, ativando uma reabsorção osteoclástica intensa. Isto garante a integridade funcional do aparelho locomotor.",
    "distractorAnalysis": [
      "Está incorreta: os osteoclastos são células multinucleadas derivadas da linhagem macrofágica e não sintetizam queratina dérmica.",
      "Está incorreta: o osso em desuso perde densidade mineral e torna-se menos rígido e mais suscetível à fratura por insuficiência.",
      "Está incorreta: os canais vasculares mantêm-se abertos, ocorrendo desequilíbrio na remodelação com excesso de lise osteoclástica."
    ],
    "nursingApplication": "O modelo de astronautas é análogo ao doente em cama de cuidados intensivos: o enfermeiro implementa mobilização passiva e planos inclinados assim que hemodinamicamente tolerado."
  },
  {
    "id": 3093,
    "topicId": 3,
    "question": "Na biofísica do sistema osteomuscular, em relação a 'remodelação osteoclástica no osso alveolar em ortodontia', qual é a fundamentação científica correta?",
    "options": [
      "A tração do fio ortodôntico queima quimicamente a polpa dentária para que o dente deslize instantaneamente sobre a gengiva.",
      "A pressão contínua gera isquemia e reabsorção osteoclástica no lado comprimido, enquanto a tração estimula deposição osteoblástica.",
      "A movimentação dentária é puramente mecânica elástica, retornando o dente à posição original imediatamente após mastigar alimentos.",
      "O aparelho gera campos magnéticos que dissolvem a coroa dentária e reconstroem uma nova raiz no interior do osso maxilar."
    ],
    "correctIndex": 1,
    "explanation": "Em biofísica osteomuscular, remodelação osteoclástica no osso alveolar em ortodontia explica-se pelo facto de que o aparelho dentário aplica uma pressão mecânica contínua na raiz do dente: a face comprimida sofre reabsorção osteoclástica e a face em tração forma osso novo. Este fenómeno guiado por forças mecânicas milimétricas permite a migração do dente através do tecido ósseo maxilar.",
    "distractorAnalysis": [
      "Está incorreta: forças ortodônticas bem calibradas não lesam a polpa, permitindo a translação biológica controlada do dente.",
      "Está incorreta: a movimentação ortodôntica decorre de remodelação óssea permanente do alvéolo e não de simples mola reversível.",
      "Está incorreta: a raiz do dente é mantida e a deslocação decorre da biologia óssea alveolar governada pela Lei de Wolff."
    ],
    "nursingApplication": "O enfermeiro em estomatologia vigia a higiene oral e as dores articulares temporomandibulares em doentes submetidos a forças de tração ortodôntica intensa."
  },
  {
    "id": 3094,
    "topicId": 3,
    "question": "Durante a prestação de cuidados de enfermagem a um doente com alterações musculoesqueléticas, como se traduz na prática clínica o conceito de 'remodelação osteoclástica no osso alveolar em ortodontia'?",
    "options": [
      "Aconselhar o utente a apertar o aparelho com alicates domésticos para acelerar a translação dentária para menos de vinte minutos.",
      "Instruir o utente a mastigar objetos rígidos de aço cirúrgico para estimular a calcificação dos tecidos moles periodontais inflamados.",
      "Compreender que forças contínuas ligeiras ativam remodelação biológica segura, enquanto forças bruscas causam necrose e perda dentária.",
      "Afirmar que a dor e a inflamação pulpar extrema são pré-requisitos obrigatórios para que a hidroxiapatite do maxilar se desloque."
    ],
    "correctIndex": 2,
    "explanation": "A aplicação de enfermagem para remodelação osteoclástica no osso alveolar em ortodontia baseia-se no princípio biomecânico: O enfermeiro em estomatologia vigia a higiene oral e as dores articulares temporomandibulares em doentes submetidos a forças de tração ortodôntica intensa. Este raciocínio assegura intervenções fundamentadas na física biológica.",
    "distractorAnalysis": [
      "Está incorreta: forças excessivas provocam hialinização, isquemia grave do ligamento periodontal e reabsorção radicular irreversível.",
      "Está incorreta: mastigar materiais rígidos traumáticos danifica o aparelho, quebra os braquetes e lesa o ligamento periodontal.",
      "Está incorreta: as forças ortodônticas fisiológicas devem ser ligeiras e constantes para minimizar o desconforto e preservar a polpa."
    ],
    "nursingApplication": "O enfermeiro em estomatologia vigia a higiene oral e as dores articulares temporomandibulares em doentes submetidos a forças de tração ortodôntica intensa."
  },
  {
    "id": 3095,
    "topicId": 3,
    "question": "Um enfermeiro analisa o impacto biomecânico das solicitações mecânicas em 'remodelação osteoclástica no osso alveolar em ortodontia'. Qual das seguintes afirmações apresenta a análise biofísica correta?",
    "options": [
      "Comprova que o osso maxilar é totalmente inerte e desprovido de células vivas, comportando-se como cimento acrílico de prótese.",
      "Evidencia que os dentes se movem unicamente por destruição mecânica da mandíbula que nunca mais volta a regenerar na vida.",
      "Mostra que as forças mecânicas aplicadas na boca são convertidas em impulsos luminosos que orientam a erupção dos molares.",
      "Demonstra que o tecido ósseo é plástico e adaptável, respondendo com aposição mineral sob tração e reabsorção sob compressão."
    ],
    "correctIndex": 3,
    "explanation": "Sob o ponto de vista físico e mecanicista, Este fenómeno guiado por forças mecânicas milimétricas permite a migração do dente através do tecido ósseo maxilar. Isto garante a integridade funcional do aparelho locomotor.",
    "distractorAnalysis": [
      "Está incorreta: o osso alveolar é um dos tecidos esqueléticos com maior taxa de remodelação metabólica dinâmica do organismo.",
      "Está incorreta: a movimentação ortodôntica é acompanhada de regeneração e estabilização óssea tecidual duradoura.",
      "Está incorreta: as vias de mecanotransdução periodontal envolvem mediadores bioquímicos e sinalização celular e não fótons de luz."
    ],
    "nursingApplication": "O enfermeiro em estomatologia vigia a higiene oral e as dores articulares temporomandibulares em doentes submetidos a forças de tração ortodôntica intensa."
  },
  {
    "id": 3096,
    "topicId": 3,
    "question": "Na biofísica do sistema osteomuscular, em relação a 'fratura em 'asa de borboleta' (butterfly fracture)', qual é a fundamentação científica correta?",
    "options": [
      "Resulta de flexão combinada com compressão axial, gerando falha por tração na face convexa e lascamento em cunha na face côncava.",
      "Decorre exclusivamente de tração pura simétrica ao longo do córtex diafisário que arranca dois anéis ósseos perfeitamente planos.",
      "É causada pela mordedura de insetos parasitas que consomem as osteonas no bordo anterior da tíbia de forma geométrica e simétrica.",
      "Provocada por impacto ultrassónico de alta frequência que divide o osso em três cilindros maciços concêntricos indeformáveis."
    ],
    "correctIndex": 0,
    "explanation": "Em biofísica osteomuscular, fratura em 'asa de borboleta' (butterfly fracture) explica-se pelo facto de que produzida por flexão com uma componente de compressão axial, onde a face de tração racha primeiro e a face de compressão liberta um fragmento triangular em cunha. A assimetria das forças na secção transversal produz um terceiro fragmento intermédio característico no lado côncavo comprimido.",
    "distractorAnalysis": [
      "Está incorreta: a fratura com fragmento triangular em asa de borboleta é patognomónica de momentos fletores com componente compressiva.",
      "Está incorreta: a tração pura produz traços de fratura transversais limpos e retos e não desprendimento cuneiforme triangular.",
      "Está incorreta: as fraturas mecânicas traumáticas decorrem da ultrapassagem da resistência física do osso e não de causas parasitárias."
    ],
    "nursingApplication": "O enfermeiro reporta a presença de fragmentos intermediários em cunha, que exigem fixação cirúrgica com placas de neutralização ou parafusos de tração."
  },
  {
    "id": 3097,
    "topicId": 3,
    "question": "Durante a prestação de cuidados de enfermagem a um doente com alterações musculoesqueléticas, como se traduz na prática clínica o conceito de 'fratura em 'asa de borboleta' (butterfly fracture)'?",
    "options": [
      "Tentar empurrar o fragmento triangular pontiagudo com os polegares para o interior da medula para acelerar o calo ósseo primitivo.",
      "Reconhecer a instabilidade biomecânica do fragmento triangular em cunha, exigindo imobilização rigorosa para não lesar partes moles.",
      "Permitir que o doente deambule livremente sem imobilização para que o fragmento solto se una por atrito direto contra o periósteo.",
      "Aplicar compressas aquecidas a noventa graus sobre a fratura para fundir termicamente as extremidades corticais separadas."
    ],
    "correctIndex": 1,
    "explanation": "A aplicação de enfermagem para fratura em 'asa de borboleta' (butterfly fracture) baseia-se no princípio biomecânico: O enfermeiro reporta a presença de fragmentos intermediários em cunha, que exigem fixação cirúrgica com placas de neutralização ou parafusos de tração. Este raciocínio assegura intervenções fundamentadas na física biológica.",
    "distractorAnalysis": [
      "Está incorreta: a manipulação manual intempestiva de fragmentos ósseos pontiagudos pode lacerar artérias e nervos adjacentes.",
      "Está incorreta: a instabilidade mecânica do fragmento em cunha requer contenção rígida e alívio de carga para evitar desvios graves.",
      "Está incorreta: a fusão térmica não ocorre em tecidos vivos, provocando o calor extremo queimaduras e necrose óssea e cutânea."
    ],
    "nursingApplication": "O enfermeiro reporta a presença de fragmentos intermediários em cunha, que exigem fixação cirúrgica com placas de neutralização ou parafusos de tração."
  },
  {
    "id": 3098,
    "topicId": 3,
    "question": "Um enfermeiro analisa o impacto biomecânico das solicitações mecânicas em 'fratura em 'asa de borboleta' (butterfly fracture)'. Qual das seguintes afirmações apresenta a análise biofísica correta?",
    "options": [
      "A compressão atua unicamente na face convexa e a tração na côncava, invertendo espontaneamente as leis da flexão de vigas elásticas.",
      "O fragmento em asa de borboleta é formado por atração osmótica contínua de água que empurra o triângulo ósseo para o exterior.",
      "A tensão de tração abre a fenda transversal inicial na convexidade, enquanto a compressão na concavidade esmaga e destaca a cunha óssea.",
      "A formação do fragmento decorre de um aumento anómalo da pressão osmótica intramedular que expulsa a cunha óssea para o exterior."
    ],
    "correctIndex": 2,
    "explanation": "Sob o ponto de vista físico e mecanicista, A assimetria das forças na secção transversal produz um terceiro fragmento intermédio característico no lado côncavo comprimido. Isto garante a integridade funcional do aparelho locomotor.",
    "distractorAnalysis": [
      "Está incorreta: na flexão mecânica a face convexa fica sob tração axial máxima e a face côncava sob compressão axial máxima.",
      "Está incorreta: a génese do fragmento triangular obedece às leis da mecânica dos materiais compósitos frágeis e não à osmose.",
      "Está incorreta: o mecanismo é clássico de falha elasto-plástica por flexão estrutural e não envolve fenómenos de física nuclear."
    ],
    "nursingApplication": "O enfermeiro reporta a presença de fragmentos intermediários em cunha, que exigem fixação cirúrgica com placas de neutralização ou parafusos de tração."
  },
  {
    "id": 3099,
    "topicId": 3,
    "question": "Na biofísica do sistema osteomuscular, em relação a 'fratura por avulsão ligamentar ou tendinosa', qual é a fundamentação científica correta?",
    "options": [
      "O tendão sofre fusão térmica com a cartilagem adjacente, dissolvendo o osso vizinho por desnaturação proteica instantânea.",
      "O músculo desliga-se espontaneamente da aponevrose para evitar que qualquer tensão chegue ao ponto de fixação periosteal.",
      "A avulsão ocorre exclusivamente quando o osso é cem vezes mais resistente à tração mecânica do que as fibras do próprio tendão.",
      "A resistência mecânica do tendão tracionado excede a resistência de ancoragem no córtex ósseo, arrancando um fragmento da inserção."
    ],
    "correctIndex": 3,
    "explanation": "Em biofísica osteomuscular, fratura por avulsão ligamentar ou tendinosa explica-se pelo facto de que ocorre quando uma forte solicitação de tração transmitida pelo tendão arranca um pedaço ósseo em vez de romper o tendão no meio da substância. Comum no maléolo medial ou na tuberosidade anterior da tíbia quando o ligamento ou tendão resiste mais do que a inserção na cortical óssea.",
    "distractorAnalysis": [
      "Está incorreta: as entorses e avulsões acontecem precisamente porque a junção osso-tendão falha sob tração antes do corpo do tendão.",
      "Está incorreta: o mecanismo é puramente mecânico de sobrecarga tênsil rápida e não envolve dissolução química ou calorífica.",
      "Está incorreta: a contração muscular intensa e vigorosa é a fonte primária da força de tração que arranca o fragmento ósseo cortical."
    ],
    "nursingApplication": "O enfermeiro palpa cuidadosamente as inserções tendinosas e suspeita de avulsão óssea perante dor pontual aguda e impotência funcional pós-entorse articular."
  },
  {
    "id": 3100,
    "topicId": 3,
    "question": "Durante a prestação de cuidados de enfermagem a um doente com alterações musculoesqueléticas, como se traduz na prática clínica o conceito de 'fratura por avulsão ligamentar ou tendinosa'?",
    "options": [
      "Palpar meticulosamente as inserções tendinosas (como maléolos ou base do 5.º metatarso) perante dor aguda e impotência pós-entorse.",
      "Orientar o doente com dor intensa no bordo externo do pé a apoiar todo o peso na marcha desportiva para testar a estabilidade óssea.",
      "Imobilizar o membro inferior em hiperextensão forçada aplicando pesos de tração de cinquenta quilos no tornozelo traumatizado.",
      "Ignorar a dor localizada na apófise óssea, assumindo que qualquer entorse afeta exclusivamente as fibras musculares da panturrilha."
    ],
    "correctIndex": 0,
    "explanation": "A aplicação de enfermagem para fratura por avulsão ligamentar ou tendinosa baseia-se no princípio biomecânico: O enfermeiro palpa cuidadosamente as inserções tendinosas e suspeita de avulsão óssea perante dor pontual aguda e impotência funcional pós-entorse articular. Este raciocínio assegura intervenções fundamentadas na física biológica.",
    "distractorAnalysis": [
      "Está incorreta: forçar a carga sobre uma avulsão óssea (ex.: fratura da base do 5.º metatarso) agrava o desvio do fragmento cortical.",
      "Está incorreta: pesos excessivos e manobras forçadas desestabilizam a lesão osteoligamentar e colocam em risco o aporte vascular.",
      "Está incorreta: as fraturas por avulsão são frequentes nas entorses da tibiotársica, exigindo avaliação e palpação óssea criteriosa."
    ],
    "nursingApplication": "O enfermeiro palpa cuidadosamente as inserções tendinosas e suspeita de avulsão óssea perante dor pontual aguda e impotência funcional pós-entorse articular."
  },
  {
    "id": 3101,
    "topicId": 3,
    "question": "Um enfermeiro analisa o impacto biomecânico das solicitações mecânicas em 'fratura por avulsão ligamentar ou tendinosa'. Qual das seguintes afirmações apresenta a análise biofísica correta?",
    "options": [
      "Ocorre exclusivamente no centro da diáfise femoral, onde forças compressivas puras provocam estilhaçamento cominutivo.",
      "Frequente no maléolo medial ou base do 5.º metatarso, onde a tração do ligamento ou tendão arranca a apófise óssea.",
      "Resulta do amolecimento repentino da substância fundamental por sobrecarga de lactato nos canais vasculares periosteais.",
      "Decorre da fusão celular imediata entre as fibras musculares e o periósteo que anula a mobilidade articular do pé."
    ],
    "correctIndex": 1,
    "explanation": "Sob o ponto de vista físico e mecanicista, Comum no maléolo medial ou na tuberosidade anterior da tíbia quando o ligamento ou tendão resiste mais do que a inserção na cortical óssea. Isto garante a integridade funcional do aparelho locomotor.",
    "distractorAnalysis": [
      "Está incorreta: as fraturas por avulsão ocorrem nas inserções tenoligamentares apofisárias e não no meio da diáfise.",
      "Está incorreta: o mecanismo da avulsão é puramente mecânico de sobretensão tênsil e não químico de evaporação.",
      "Está incorreta: a avulsão óssea produz fragmentação e instabilidade mecânica local e não anquilose ou fusão muscular."
    ],
    "nursingApplication": "O enfermeiro palpa cuidadosamente as inserções tendinosas e suspeita de avulsão óssea perante dor pontual aguda e impotência funcional pós-entorse articular."
  },
  {
    "id": 3102,
    "topicId": 3,
    "question": "Na biofísica do sistema osteomuscular, em relação a 'fratura por compressão dos corpos vertebrais osteoporóticos', qual é a fundamentação científica correta?",
    "options": [
      "Tração axial vigorosa nos discos intervertebrais que alonga a coluna lombar em mais de vinte centímetros num segundo.",
      "Momento de torção helicoidal puro que divide transversalmente a medula espinhal sem qualquer lesão nas trabéculas ósseas.",
      "Forças axiais verticais colapsam as trabéculas enfraquecidas do corpo vertebral, produzindo deformidade anterior em cunha.",
      "Expansão pneumática súbita do núcleo pulposo que projeta os corpos vertebrais para fora da cavidade torácica do doente."
    ],
    "correctIndex": 2,
    "explanation": "Em biofísica osteomuscular, fratura por compressão dos corpos vertebrais osteoporóticos explica-se pelo facto de que resulta de forças axiais verticais que colapsam as trabéculas enfraquecidas do corpo vertebral, produzindo uma vértebra em cunha anterior. A perda de altura na porção anterior da vértebra acentua a cifose dorsal senil ('corcunda da viúva') e projeta o tronco para a frente.",
    "distractorAnalysis": [
      "Está incorreta: a fratura osteoporótica vertebral típica decorre de forças de compressão axial fletora e não de tração elástica.",
      "Está incorreta: as fraturas por compressão colapsam a matriz trabecular do corpo vertebral, gerando cifose dorsal dolorosa.",
      "Está incorreta: o núcleo pulposo é um gel viscoelástico incompressível e não se expande como um gás pneumático explosivo."
    ],
    "nursingApplication": "O enfermeiro vigia queixas agudas de dorsalgia ou lombalgia em idosos após pequenos esforços, evitando a flexão forçada do tronco e promovendo o alívio postural."
  },
  {
    "id": 3103,
    "topicId": 3,
    "question": "Durante a prestação de cuidados de enfermagem a um doente com alterações musculoesqueléticas, como se traduz na prática clínica o conceito de 'fratura por compressão dos corpos vertebrais osteoporóticos'?",
    "options": [
      "Incentivar o doente com dor lombar aguda a efetuar flexões vigorosas do tronco para realinhar as vértebras colapsadas.",
      "Aplicar pesos de tração de cinquenta quilos na cabeça do doente sem supervisão médica para esticar a coluna dorsal.",
      "Desvalorizar a dor vertebral no idoso, assumindo que fraturas compressivas nunca causam limitação funcional ou cifose.",
      "Vigiar dor dorsal súbita após esforço ligeiro e despistar alterações neurológicas por compressão radicular ou medular."
    ],
    "correctIndex": 3,
    "explanation": "A aplicação de enfermagem para fratura por compressão dos corpos vertebrais osteoporóticos baseia-se no princípio biomecânico: O enfermeiro vigia queixas agudas de dorsalgia ou lombalgia em idosos após pequenos esforços, evitando a flexão forçada do tronco e promovendo o alívio postural. Este raciocínio assegura intervenções fundamentadas na física biológica.",
    "distractorAnalysis": [
      "Está incorreta: fletir o tronco aumenta drasticamente o momento fletor compressivo anterior, agravando o colapso vertebral.",
      "Está incorreta: trações cervicais intempestivas pesadas sem indicação colocam em risco a integridade da medula espinhal.",
      "Está incorreta: as fraturas vertebrais por insuficiência causam dor intensa e deformidade progressiva, exigindo intervenção ativa."
    ],
    "nursingApplication": "O enfermeiro vigia queixas agudas de dorsalgia ou lombalgia em idosos após pequenos esforços, evitando a flexão forçada do tronco e promovendo o alívio postural."
  },
  {
    "id": 3104,
    "topicId": 3,
    "question": "Um enfermeiro analisa o impacto biomecânico das solicitações mecânicas em 'fratura por compressão dos corpos vertebrais osteoporóticos'. Qual das seguintes afirmações apresenta a análise biofísica correta?",
    "options": [
      "O colapso anterior das vértebras aumenta a cifose dorsal, deslocando o centro de gravidade corporal para a frente e instabilizando a marcha.",
      "A perda de altura anterior transforma a coluna vertebral numa haste rígida com Módulo de Young cem vezes superior ao normal.",
      "A deformidade em cunha anula completamente a atração da gravidade sobre a caixa torácica, expandindo a capacidade pulmonar.",
      "O colapso vertebral elimina o risco de quedas futuras ao aproximar o centro de massa do pavimento de forma perfeitamente estável."
    ],
    "correctIndex": 0,
    "explanation": "Sob o ponto de vista físico e mecanicista, A perda de altura na porção anterior da vértebra acentua a cifose dorsal senil ('corcunda da viúva') e projeta o tronco para a frente. Isto garante a integridade funcional do aparelho locomotor.",
    "distractorAnalysis": [
      "Está incorreta: o colapso trabecular reduz a rigidez elástica vertebral e aumenta o risco de fraturas em cascata adjacentes.",
      "Está incorreta: a hipercifose comprime a caixa torácica e o abdómen, restringindo a função ventilatória e o equilíbrio postural.",
      "Está incorreta: o deslocamento anterior do centro de gravidade compromete o polígono de sustentação e eleva o risco de quedas."
    ],
    "nursingApplication": "O enfermeiro vigia queixas agudas de dorsalgia ou lombalgia em idosos após pequenos esforços, evitando a flexão forçada do tronco e promovendo o alívio postural."
  },
  {
    "id": 3105,
    "topicId": 3,
    "question": "Na biofísica do sistema osteomuscular, em relação a 'fratura cominutiva em acidentes de trânsito de alta energia', qual é a fundamentação científica correta?",
    "options": [
      "O osso deforma-se elasticamente de forma perfeita, recuperando as suas dimensões originais sem qualquer fragmento fraturário.",
      "A energia cinética extrema excede a tenacidade óssea, dissipando-se na propagação de múltiplas fendas e grande lesão tecidual.",
      "A fratura cominutiva decorre exclusivamente de carência aguda de magnésio que dissolve a matriz óssea em menos de um minuto.",
      "As extremidades ósseas sofrem fusão instantânea sob impacto rápido, formando uma massa mineral contínua e rígida."
    ],
    "correctIndex": 1,
    "explanation": "Em biofísica osteomuscular, fratura cominutiva em acidentes de trânsito de alta energia explica-se pelo facto de que a energia cinética extrema excede a tenacidade máxima do osso, fraturando-o em três ou mais fragmentos ósseos múltiplos e desvitalizados. A grande dissipação de energia causa extensa destruição do periósteo, hemorragia intensa nos tecidos moles e alto risco de síndrome compartimental.",
    "distractorAnalysis": [
      "Está incorreta: na fratura cominutiva a energia de impacto supera largamente o regime elástico, estilhaçando o córtex ósseo.",
      "Está incorreta: o estilhaçamento cominutivo é um fenómeno biomecânico de sobrecarga mecânica e não um défice mineral agudo.",
      "Está incorreta: o choque violento produz descontinuidade e fragmentação cominutiva múltipla e não soldadura do membro."
    ],
    "nursingApplication": "O enfermeiro monitoriza rigorosamente os 6 Ps da síndrome compartimental (Dor desproporcional, Palidez, Parestesia, Paralisia, Pulso ausente e Pressão no compartimento)."
  },
  {
    "id": 3106,
    "topicId": 3,
    "question": "Durante a prestação de cuidados de enfermagem a um doente com alterações musculoesqueléticas, como se traduz na prática clínica o conceito de 'fratura cominutiva em acidentes de trânsito de alta energia'?",
    "options": [
      "Permitir que o doente politraumatizado apoie o membro estilhaçado no solo logo na primeira hora para testar os reflexos nervosos.",
      "Fazer massagem vigorosa sobre os múltiplos fragmentos ósseos soltos para tentar compactá-los manualmente no interior da coxa.",
      "Monitorizar rigorosamente sinais de choque hemorrágico, síndrome compartimental e risco de embolia gorda em fraturas diafisárias.",
      "Envolver o membro lesado em compressas com álcool a 96% aquecido para coagular internamente a medula óssea hemorrágica."
    ],
    "correctIndex": 2,
    "explanation": "A aplicação de enfermagem para fratura cominutiva em acidentes de trânsito de alta energia baseia-se no princípio biomecânico: O enfermeiro monitoriza rigorosamente os 6 Ps da síndrome compartimental (Dor desproporcional, Palidez, Parestesia, Paralisia, Pulso ausente e Pressão no compartimento). Este raciocínio assegura intervenções fundamentadas na física biológica.",
    "distractorAnalysis": [
      "Está incorreta: o apoio de carga num fémur cominutivo agravaria a hemorragia, a dor e o choque hemodinâmico do politraumatizado.",
      "Está incorreta: a massagem sobre esquírolas ósseas provocaria lacerações de vasos femorais profundos e necrose de tecidos.",
      "Está incorreta: a aplicação de álcool aquecido é tóxica, dolorosa e perigosa para os tecidos abertos do membro traumatizado."
    ],
    "nursingApplication": "O enfermeiro monitoriza rigorosamente os 6 Ps da síndrome compartimental (Dor desproporcional, Palidez, Parestesia, Paralisia, Pulso ausente e Pressão no compartimento)."
  },
  {
    "id": 3107,
    "topicId": 3,
    "question": "Um enfermeiro analisa o impacto biomecânico das solicitações mecânicas em 'fratura cominutiva em acidentes de trânsito de alta energia'. Qual das seguintes afirmações apresenta a análise biofísica correta?",
    "options": [
      "A energia do embate converte o osso num fluido puramente gasoso que é eliminado diretamente através da respiração do doente.",
      "A fragmentação diafisária anula qualquer perda de sangue no foco de fratura, mantendo a pressão arterial sistémica perfeitamente estável.",
      "A fragmentação decorre da contração violenta dos vasos sanguíneos que partem a cortical de dentro para fora por tração osmótica.",
      "A libertação maciça de energia cinética rompe os sinusóides medulares e vasos periósteos, favorecendo a passagem de êmbolos lipídicos."
    ],
    "correctIndex": 3,
    "explanation": "Sob o ponto de vista físico e mecanicista, A grande dissipação de energia causa extensa destruição do periósteo, hemorragia intensa nos tecidos moles e alto risco de síndrome compartimental. Isto garante a integridade funcional do aparelho locomotor.",
    "distractorAnalysis": [
      "Está incorreta: as fraturas diafisárias do fémur podem sangrar mais de um litro de sangue para a coxa com risco de choque e embolia.",
      "Está incorreta: a destruição tecidual não envolve vaporização do osso, mas rotura mecânica das trabéculas e estroma vascular.",
      "Está incorreta: o trauma é regido por leis de conservação de energia e trabalho mecânico e não por criogenia tecidual extrema."
    ],
    "nursingApplication": "O enfermeiro monitoriza rigorosamente os 6 Ps da síndrome compartimental (Dor desproporcional, Palidez, Parestesia, Paralisia, Pulso ausente e Pressão no compartimento)."
  },
  {
    "id": 3108,
    "topicId": 3,
    "question": "Na biofísica do sistema osteomuscular, em relação a 'fratura em 'ramo verde' (greenstick fracture) em idade pediátrica', qual é a fundamentação científica correta?",
    "options": [
      "O periósteo espesso e a alta tenacidade do colagénio permitem que um córtex quebre sob tração enquanto o oposto deforma plasticamente.",
      "O osso da criança é puramente cerâmico e parte em milhares de fragmentos microscópicos após qualquer queda da própria altura.",
      "A ausência de fosfato de cálcio no esqueleto pediátrico faz com que os membros dobrem livremente sem qualquer traço de rotura.",
      "A fratura em ramo verde ocorre apenas quando a criança é exposta a temperaturas ambientais inferiores a zero graus Celsius."
    ],
    "correctIndex": 0,
    "explanation": "Em biofísica osteomuscular, fratura em 'ramo verde' (greenstick fracture) em idade pediátrica explica-se pelo facto de que o osso da criança possui periósteo muito espesso e elástico e matriz rica em colagénio, quebrando apenas numa cortical enquanto a oposta se dobra plasticamente. A tenacidade elástica da matriz infantil evita a separação completa dos dois segmentos ósseos, tal como um ramo de árvore verde que não parte na totalidade.",
    "distractorAnalysis": [
      "Está incorreta: o osso jovem é menos mineralizado e mais dúctil que o osso adulto, quebrando de forma incompleta em ramo verde.",
      "Está incorreta: o esqueleto infantil é mineralizado com hidroxiapatite, possuindo tenacidade aumentada devido ao colagénio rico.",
      "Está incorreta: a fratura em ramo verde depende das propriedades intrínsecas do biomaterial ósseo em crescimento e não do frio."
    ],
    "nursingApplication": "O enfermeiro tranquiliza os pais explicando que o elevado potencial de remodelação óssea da criança e o periósteo intacto asseguram uma consolidação rápida sob tala ou gesso."
  },
  {
    "id": 3109,
    "topicId": 3,
    "question": "Durante a prestação de cuidados de enfermagem a um doente com alterações musculoesqueléticas, como se traduz na prática clínica o conceito de 'fratura em 'ramo verde' (greenstick fracture) em idade pediátrica'?",
    "options": [
      "Informar os pais de que o membro permanecerá com deformidade em ângulo reto definitiva por impossibilidade de remodelação no jovem.",
      "Tranquilizar os pais explicando que o periósteo espesso e a remodelação óssea rápida em crianças garantem uma consolidação excelente.",
      "Instruir a família a realizar tração manual violenta no braço da criança em casa para tentar quebrar o córtex ósseo remanescente.",
      "Recomendar a suspensão definitiva da escola e repouso estrito no leito durante dois anos até que ocorra o encerramento das cartilagens."
    ],
    "correctIndex": 1,
    "explanation": "A aplicação de enfermagem para fratura em 'ramo verde' (greenstick fracture) em idade pediátrica baseia-se no princípio biomecânico: O enfermeiro tranquiliza os pais explicando que o elevado potencial de remodelação óssea da criança e o periósteo intacto asseguram uma consolidação rápida sob tala ou gesso. Este raciocínio assegura intervenções fundamentadas na física biológica.",
    "distractorAnalysis": [
      "Está incorreta: o potencial de remodelação óssea na infância é extraordinário, corrigindo frequentemente desvios angulares com o crescimento.",
      "Está incorreta: a manipulação forçada em casa causaria dor intensa e risco de lesão perióstea e vascular desnecessária.",
      "Está incorreta: a consolidação pediátrica é rápida (3 a 6 semanas), permitindo um retorno célere à vida escolar e social normal."
    ],
    "nursingApplication": "O enfermeiro tranquiliza os pais explicando que o elevado potencial de remodelação óssea da criança e o periósteo intacto asseguram uma consolidação rápida sob tala ou gesso."
  },
  {
    "id": 3110,
    "topicId": 3,
    "question": "Um enfermeiro analisa o impacto biomecânico das solicitações mecânicas em 'fratura em 'ramo verde' (greenstick fracture) em idade pediátrica'. Qual das seguintes afirmações apresenta a análise biofísica correta?",
    "options": [
      "A flexibilidade do osso jovem torna o esqueleto pediátrico totalmente incapaz de suportar a força gravitacional na posição de pé.",
      "A tenacidade óssea elevada impede que os músculos das crianças se contraiam voluntariamente durante a corrida ou brincadeira.",
      "A grande capacidade de absorver energia elástica e plástica antes da rotura confere tenacidade e proteção aos órgãos vitais infantis.",
      "A matriz óssea em crescimento comporta-se como um fluido newtoniano puro cuja viscosidade diminui com o calor corporal."
    ],
    "correctIndex": 2,
    "explanation": "Sob o ponto de vista físico e mecanicista, A tenacidade elástica da matriz infantil evita a separação completa dos dois segmentos ósseos, tal como um ramo de árvore verde que não parte na totalidade. Isto garante a integridade funcional do aparelho locomotor.",
    "distractorAnalysis": [
      "Está incorreta: o esqueleto das crianças suporta eficientemente as forças de sustentação gravitacional e dinâmica da locomoção.",
      "Está incorreta: a flexibilidade da matriz óssea é perfeitamente compatível com a função contrátil dos sarcómeros musculares.",
      "Está incorreta: o osso jovem é um compósito elasto-plástico sólido vascularizado e não um fluido newtoniano sem rigidez."
    ],
    "nursingApplication": "O enfermeiro tranquiliza os pais explicando que o elevado potencial de remodelação óssea da criança e o periósteo intacto asseguram uma consolidação rápida sob tala ou gesso."
  },
  {
    "id": 3111,
    "topicId": 3,
    "question": "Na biofísica do sistema osteomuscular, em relação a 'momento de inércia da área (I) e distribuição periférica de massa', qual é a fundamentação científica correta?",
    "options": [
      "O momento de inércia depende exclusivamente da densidade atómica da medula óssea, sendo nulo em qualquer secção tubular oca.",
      "A resistência à flexão diminui quando a massa óssea é afastada da linha neutra, tornando os tubos ocos frágeis como cascas de ovo.",
      "O momento de inércia é uma constante universal invariável que independe totalmente da geometria da secção reta do osso cortical.",
      "O momento de inércia à flexão varia com a quarta potência do raio externo, conferindo ao cilindro oco máxima rigidez com menor massa."
    ],
    "correctIndex": 3,
    "explanation": "Em biofísica osteomuscular, momento de inércia da área (I) e distribuição periférica de massa explica-se pelo facto de que o momento de inércia aumenta com a quarta potência da distância em relação ao eixo central ($R^4$), tornando a parede tubular periférica extremamente resistente à flexão. Ao concentrar a massa no diâmetro exterior, o osso minimiza a quantidade de material biológico necessário para atingir uma rigidez pré-determinada.",
    "distractorAnalysis": [
      "Está incorreta: a medula óssea adiposa não contribui significativamente para o momento de inércia de flexão do osso cortical.",
      "Está incorreta: afastar o material da linha neutra central aumenta o momento de inércia (I = ∫y² dA), elevando a rigidez à flexão.",
      "Está incorreta: o momento de inércia de área é altamente sensível à geometria e distribuição espacial da massa da secção."
    ],
    "nursingApplication": "O enfermeiro compreende que a perda de espessura cortical no idoso reduz drasticamente o $I$ e a rigidez do fémur, exigindo cautela na mobilização."
  },
  {
    "id": 3112,
    "topicId": 3,
    "question": "Durante a prestação de cuidados de enfermagem a um doente com alterações musculoesqueléticas, como se traduz na prática clínica o conceito de 'momento de inércia da área (I) e distribuição periférica de massa'?",
    "options": [
      "Compreender que o cilindro oco é uma solução biomecânica que poupa massa metabólica e maximiza a resistência a momentos fletores.",
      "Explicar ao doente que o osso oco é um defeito congénito perigoso que exige preenchimento cirúrgico de rotina com cimento acrílico.",
      "Ensinar que os ossos deveriam ser cilindros metálicos maciços para que os membros inferiores pudessem suportar o peso da marcha.",
      "Assumir que a diáfise tubular oca enfraquece o fémur em noventa por cento em comparação com um osso plano desprovido de canal."
    ],
    "correctIndex": 0,
    "explanation": "A aplicação de enfermagem para momento de inércia da área (I) e distribuição periférica de massa baseia-se no princípio biomecânico: O enfermeiro compreende que a perda de espessura cortical no idoso reduz drasticamente o $I$ e a rigidez do fémur, exigindo cautela na mobilização. Este raciocínio assegura intervenções fundamentadas na física biológica.",
    "distractorAnalysis": [
      "Está incorreta: o canal medular central oco é uma adaptação fisiológica evolutiva brilhante de otimização mecânica estrutural.",
      "Está incorreta: ossos totalmente maciços seriam excessivamente pesados, exigindo um gasto energético muscular insustentável.",
      "Está incorreta: um cilindro oco apresenta momento de inércia muito superior ao de uma barra sólida maciça com a mesma quantidade de osso."
    ],
    "nursingApplication": "O enfermeiro compreende que a perda de espessura cortical no idoso reduz drasticamente o $I$ e a rigidez do fémur, exigindo cautela na mobilização."
  },
  {
    "id": 3113,
    "topicId": 3,
    "question": "Um enfermeiro analisa o impacto biomecânico das solicitações mecânicas em 'momento de inércia da área (I) e distribuição periférica de massa'. Qual das seguintes afirmações apresenta a análise biofísica correta?",
    "options": [
      "O cilindro oco foi selecionado para permitir a respiração cutânea através de trocas gasosas mantidas no canal medular dos fémures.",
      "Ao afastar o córtex mineralizado da linha neutra central, o osso atinge rigidez flexural máxima com menor gasto biológico de cálcio.",
      "A forma tubular oca reduz a resistência mecânica do membro para garantir que qualquer impacto resulte sempre em luxação articular.",
      "A secção oca elimina completamente a necessidade de irrigação arterial no periósteo através do isolamento térmico central."
    ],
    "correctIndex": 1,
    "explanation": "Sob o ponto de vista físico e mecanicista, Ao concentrar a massa no diâmetro exterior, o osso minimiza a quantidade de material biológico necessário para atingir uma rigidez pré-determinada. Isto garante a integridade funcional do aparelho locomotor.",
    "distractorAnalysis": [
      "Está incorreta: os ossos não realizam respiração ventilatória gasosa interna, contendo tecido hematopoiético ou gorduroso.",
      "Está incorreta: a geometria cilíndrica confere proteção biomecânica máxima contra forças de flexão incidentes em qualquer plano.",
      "Está incorreta: o córtex diafisário tubular é intensamente vascularizado pelos vasos do periósteo e pela artéria nutrícia."
    ],
    "nursingApplication": "O enfermeiro compreende que a perda de espessura cortical no idoso reduz drasticamente o $I$ e a rigidez do fémur, exigindo cautela na mobilização."
  },
  {
    "id": 3114,
    "topicId": 3,
    "question": "Na biofísica do sistema osteomuscular, em relação a 'momento polar de inércia (J) e resistência à torção', qual é a fundamentação científica correta?",
    "options": [
      "O momento polar de inércia é responsável unicamente pela atração magnética estabelecida entre a tíbia e os polos do planeta Terra.",
      "A rigidez de torção de um osso oco é rigorosamente igual a zero, quebrando espontaneamente se o indivíduo rodar o pé no chão.",
      "O momento polar de inércia (J = 2I) governa a rigidez contra momentos de torção, sendo maximizado pela geometria tubular periférica.",
      "O momento polar atinge o seu valor máximo quando toda a massa óssea mineral se concentra estritamente no centro do canal medular."
    ],
    "correctIndex": 2,
    "explanation": "Em biofísica osteomuscular, momento polar de inércia (J) e resistência à torção explica-se pelo facto de que o momento polar de inércia ($J = 2I$) governa a resistência do tubo ósseo aos momentos de torção torsional durante as rotações da perna. Um cilindro oco com diâmetro exterior generoso resiste muito melhor à torção do que uma haste fina e maciça com a mesma quantidade de massa.",
    "distractorAnalysis": [
      "Está incorreta: o momento polar de inércia é uma grandeza geométrica mecânica de rotação (J = ∫r² dA) e não magnética planetária.",
      "Está incorreta: a secção tubular confere elevada rigidez à torção, permitindo as rotações fisiológicas normais da locomoção.",
      "Está incorreta: concentrar a massa no centro diminuiria o raio (r), reduzindo drasticamente o momento polar e a resistência à torção."
    ],
    "nursingApplication": "O enfermeiro ensina doentes com prótese da anca a não cruzarem as pernas nem realizarem movimentos de pivotagem brusca sobre o pé fixo no solo."
  },
  {
    "id": 3115,
    "topicId": 3,
    "question": "Durante a prestação de cuidados de enfermagem a um doente com alterações musculoesqueléticas, como se traduz na prática clínica o conceito de 'momento polar de inércia (J) e resistência à torção'?",
    "options": [
      "Incentivar o doente a girar bruscamente sobre o pé fraturado apoiado no solo para testar a resistência das osteonas à torção helicoidal.",
      "Recomendar sapatos com pitões de borracha aderentes no quarto hospitalar para travar firmemente o pé em qualquer rotação do tronco.",
      "Afirmar que as forças de torção são totalmente inofensivas para a consolidação óssea em comparação com as forças de compressão axial.",
      "Ensinar o doente com fratura em consolidação a rodar o corpo em bloco com passos curtos, evitando torções que sobrecarregam o momento polar."
    ],
    "correctIndex": 3,
    "explanation": "A aplicação de enfermagem para momento polar de inércia (J) e resistência à torção baseia-se no princípio biomecânico: O enfermeiro ensina doentes com prótese da anca a não cruzarem as pernas nem realizarem movimentos de pivotagem brusca sobre o pé fixo no solo. Este raciocínio assegura intervenções fundamentadas na física biológica.",
    "distractorAnalysis": [
      "Está incorreta: girar sobre o pé travado no chão aplica binários de torção elevados que provocam fraturas espiroidais ou desvio do foco.",
      "Está incorreta: solas excessivamente aderentes que fixam o pé aumentam o momento de torção na perna quando o tronco roda.",
      "Está incorreta: as forças de torção induzem tensões tangenciais de corte, sendo um dos modos mais perigosos de falha óssea."
    ],
    "nursingApplication": "O enfermeiro ensina doentes com prótese da anca a não cruzarem as pernas nem realizarem movimentos de pivotagem brusca sobre o pé fixo no solo."
  },
  {
    "id": 3116,
    "topicId": 3,
    "question": "Um enfermeiro analisa o impacto biomecânico das solicitações mecânicas em 'momento polar de inércia (J) e resistência à torção'. Qual das seguintes afirmações apresenta a análise biofísica correta?",
    "options": [
      "Um cilindro oco de mesmo peso e massa possui diâmetro externo maior, gerando momento polar de inércia muito superior ao do maciço.",
      "Uma barra cilíndrica maciça é sempre cem vezes mais resistente à torção do que qualquer tubo oco com o dobro do diâmetro externo.",
      "A remoção da massa central do canal medular elimina toda a resistência à torção, fazendo com que o osso se dobre como uma fita flexível.",
      "O momento polar de um tubo oco é independente do seu diâmetro, variando unicamente com o comprimento longitudinal da diáfise."
    ],
    "correctIndex": 0,
    "explanation": "Sob o ponto de vista físico e mecanicista, Um cilindro oco com diâmetro exterior generoso resiste muito melhor à torção do que uma haste fina e maciça com a mesma quantidade de massa. Isto garante a integridade funcional do aparelho locomotor.",
    "distractorAnalysis": [
      "Está incorreta: para a mesma quantidade de material (massa), o cilindro oco afasta a massa do centro, tendo muito maior momento polar.",
      "Está incorreta: o osso cortical periférico suporta a esmagadora maioria das tensões de torção que se concentram na superfície externa.",
      "Está incorreta: o momento polar varia com a quarta potência do raio (J ∝ R⁴ - r⁴), sendo a dimensão diametral determinante."
    ],
    "nursingApplication": "O enfermeiro ensina doentes com prótese da anca a não cruzarem as pernas nem realizarem movimentos de pivotagem brusca sobre o pé fixo no solo."
  },
  {
    "id": 3117,
    "topicId": 3,
    "question": "Na biofísica do sistema osteomuscular, em relação a 'haste intramedular (encavilhamento) e estabilização de fraturas diafisárias', qual é a fundamentação científica correta?",
    "options": [
      "A haste atua como um elemento que absorve 100% da carga para sempre, impedindo que o osso receba qualquer tensão da Lei de Wolff.",
      "A haste intramedular partilha a carga axial mecânica no centro do osso longo, permitindo apoio precoce sem sobrecarregar o córtex.",
      "O implante endomedular dissolve quimicamente a medula óssea para que os topos fraturários coaplem por vácuo hidrostático puro.",
      "A haste foi concebida unicamente para transmitir correntes elétricas que paralisam os nervos ciáticos durante a fase pós-operatória."
    ],
    "correctIndex": 1,
    "explanation": "Em biofísica osteomuscular, haste intramedular (encavilhamento) e estabilização de fraturas diafisárias explica-se pelo facto de que a haste metálica ocupa o canal medular central vazio, funcionando como um eixo interno que absorve os momentos fletores e alinha os fragmentos ósseos. A haste partilha as cargas mecânicas sem impedir as microdeformações axiais elásticas necessárias para estimular o calo ósseo pela Lei de Wolff.",
    "distractorAnalysis": [
      "Está incorreta: as hastes intramedulares são dispositivos de partilha de carga (load-sharing) que estimulam o calo ósseo pela carga precoce.",
      "Está incorreta: o encavilhamento preserva a biologia periosteal e o hematoma sem destruir quimicamente a cavidade medular.",
      "Está incorreta: o implante é puramente mecânico de estabilização interna e não tem qualquer função condutora elétrica nervosa."
    ],
    "nursingApplication": "O enfermeiro avalia a ferida cirúrgica proximal de inserção da haste e incentiva a marcha precoce com carga parcial de acordo com a estabilidade mecânica do implante."
  },
  {
    "id": 3118,
    "topicId": 3,
    "question": "Durante a prestação de cuidados de enfermagem a um doente com alterações musculoesqueléticas, como se traduz na prática clínica o conceito de 'haste intramedular (encavilhamento) e estabilização de fraturas diafisárias'?",
    "options": [
      "Manter o doente em repouso absoluto no leito sem qualquer apoio durante seis meses para evitar que a haste metálica entre em flexão elástica.",
      "Retirar a haste cirúrgica pelo enfermeiro no penso da ferida ao fim de quarenta e oito horas para verificar a cicatrização do osso.",
      "Avaliar a marcha e promover o apoio precoce de carga com canadianas conforme prescrição, favorecendo a consolidação por partilha de carga.",
      "Proibir qualquer contração muscular na coxa operada para que as células ósseas permaneçam completamente dormentes no pós-operatório."
    ],
    "correctIndex": 2,
    "explanation": "A aplicação de enfermagem para haste intramedular (encavilhamento) e estabilização de fraturas diafisárias baseia-se no princípio biomecânico: O enfermeiro avalia a ferida cirúrgica proximal de inserção da haste e incentiva a marcha precoce com carga parcial de acordo com a estabilidade mecânica do implante. Este raciocínio assegura intervenções fundamentadas na física biológica.",
    "distractorAnalysis": [
      "Está incorreta: a haste intramedular foi concebida precisamente para suportar carga precoce que estimula a ossificação secundária.",
      "Está incorreta: a remoção de material de osteossíntese é um ato cirúrgico que requer ambiente operatório e consolidação completa prévia.",
      "Está incorreta: as contrações musculares e o suporte de peso ativam a circulação e fornecem o estímulo mecânico anabólico da Lei de Wolff."
    ],
    "nursingApplication": "O enfermeiro avalia a ferida cirúrgica proximal de inserção da haste e incentiva a marcha precoce com carga parcial de acordo com a estabilidade mecânica do implante."
  },
  {
    "id": 3119,
    "topicId": 3,
    "question": "Um enfermeiro analisa o impacto biomecânico das solicitações mecânicas em 'haste intramedular (encavilhamento) e estabilização de fraturas diafisárias'. Qual das seguintes afirmações apresenta a análise biofísica correta?",
    "options": [
      "As placas excêntricas são vinte vezes mais seguras porque anulam a necessidade de consolidação biológica do tecido ósseo fraturado.",
      "A haste endomedular bloqueia completamente a formação do calo periosteal, forçando o osso a cicatrizar por substituição cartilagínea.",
      "Não existe qualquer diferença biomecânica entre fixar um osso pelo interior do canal medular ou pela face externa da cortical.",
      "A haste intramedular partilha a carga mecânica longitudinalmente, reduzindo o risco de atrofia óssea em comparação com placas rígidas."
    ],
    "correctIndex": 3,
    "explanation": "Sob o ponto de vista físico e mecanicista, A haste partilha as cargas mecânicas sem impedir as microdeformações axiais elásticas necessárias para estimular o calo ósseo pela Lei de Wolff. Isto garante a integridade funcional do aparelho locomotor.",
    "distractorAnalysis": [
      "Está incorreta: placas rígidas aplicadas na superfície cortical suportam toda a carga (load-bearing), causando maior stress shielding.",
      "Está incorreta: o encavilhamento intramedular com estabilidade relativa estimula ativamente a formação exuberante de calo secundário.",
      "Está incorreta: a localização central da haste diminui o braço de momento fletor, suportando cargas axiais compressivas excelentes."
    ],
    "nursingApplication": "O enfermeiro avalia a ferida cirúrgica proximal de inserção da haste e incentiva a marcha precoce com carga parcial de acordo com a estabilidade mecânica do implante."
  },
  {
    "id": 3120,
    "topicId": 3,
    "question": "Na biofísica do sistema osteomuscular, em relação a 'efeito de concentração de tensões (stress concentration) em orifícios de biópsia ou parafusos', qual é a fundamentação científica correta?",
    "options": [
      "Qualquer furo na cortical atua como concentrador geométrico de tensões que pode reduzir a resistência à torção em até 50% após a remoção.",
      "Os orifícios circulares aumentam a resistência do osso longo em cem por cento, conferindo-lhe proteção contra forças de cisalhamento.",
      "Os furos deixados pelos parafusos são preenchidos por titânio mineral espontâneo nas primeiras vinte e quatro horas pós-operatórias.",
      "A remoção de parafusos não altera em nada o comportamento mecânico do córtex, pois o osso comporta-se como um fluido autorreparador."
    ],
    "correctIndex": 0,
    "explanation": "Em biofísica osteomuscular, efeito de concentração de tensões (stress concentration) em orifícios de biópsia ou parafusos explica-se pelo facto de que qualquer furo ou descontinuidade transversal na cortical tubular do osso atua como um concentrador geométrico que multiplica localmente as tensões mecânicas. Um orifício de parafuso pode reduzir a resistência à torção do osso em até 50% durante as primeiras semanas após a sua remoção.",
    "distractorAnalysis": [
      "Está incorreta: qualquer descontinuidade ou furo circular concentra as linhas de tensão nos seus bordos, reduzindo a tenacidade.",
      "Está incorreta: o preenchimento ósseo dos orifícios de parafusos é um processo biológico lento que leva semanas a meses a cicatrizar.",
      "Está incorreta: o osso é um sólido elasto-frágil estrutural e furos corticais representam zonas de fraqueza transitória pós-remoção."
    ],
    "nursingApplication": "O enfermeiro protege os membros de doentes submetidos a remoção de material de osteossíntese recente, orientando repouso desportivo relativo durante a cicatrização dos túneis ósseos."
  },
  {
    "id": 3121,
    "topicId": 3,
    "question": "Durante a prestação de cuidados de enfermagem a um doente com alterações musculoesqueléticas, como se traduz na prática clínica o conceito de 'efeito de concentração de tensões (stress concentration) em orifícios de biópsia ou parafusos'?",
    "options": [
      "Incentivar o doente a praticar desportos de contacto violento logo no dia seguinte à extração dos parafusos corticais de titânio.",
      "Proteger o membro contra forças bruscas de torção e impacto nas primeiras semanas após a extração da placa, prevenindo refraturas.",
      "Aplicar pesos de tração de vinte quilos no membro acabado de operar para fechar os furos por compressão hidrostática pura.",
      "Imobilizar o doente na cama com gesso circular durante três anos consecutivos para impedir que os osteoblastos migrem do periósteo."
    ],
    "correctIndex": 1,
    "explanation": "A aplicação de enfermagem para efeito de concentração de tensões (stress concentration) em orifícios de biópsia ou parafusos baseia-se no princípio biomecânico: O enfermeiro protege os membros de doentes submetidos a remoção de material de osteossíntese recente, orientando repouso desportivo relativo durante a cicatrização dos túneis ósseos. Este raciocínio assegura intervenções fundamentadas na física biológica.",
    "distractorAnalysis": [
      "Está incorreta: praticar desporto de alto impacto com orifícios corticais recentes comporta risco iminente de fratura catastrófica por stress.",
      "Está incorreta: a tração não encerra orifícios corticais e sobrecarregaria o membro enfraquecido pela remoção do implante metálico.",
      "Está incorreta: a recuperação requer apenas cuidados transitórios de alívio de cargas violentas (cerca de 4 a 8 semanas) e não imobilização perene."
    ],
    "nursingApplication": "O enfermeiro protege os membros de doentes submetidos a remoção de material de osteossíntese recente, orientando repouso desportivo relativo durante a cicatrização dos túneis ósseos."
  },
  {
    "id": 3122,
    "topicId": 3,
    "question": "Um enfermeiro analisa o impacto biomecânico das solicitações mecânicas em 'efeito de concentração de tensões (stress concentration) em orifícios de biópsia ou parafusos'. Qual das seguintes afirmações apresenta a análise biofísica correta?",
    "options": [
      "O orifício absorve todo o impacto mecânico dissipando-o sob a forma de calor que arrefece a perna operada durante a corrida rápida.",
      "A concentração de tensões ocorre exclusivamente em materiais perfeitamente fluidos e nunca em sólidos mineralizados como o osso.",
      "As linhas de tensão desviam-se em redor do orifício, concentrando picos de esforço de tração nos bordos do furo sob momentos de torção.",
      "O furo de parafuso atua como um reforço elástico que impede a propagação de qualquer microfratura através do córtex diafisário."
    ],
    "correctIndex": 2,
    "explanation": "Sob o ponto de vista físico e mecanicista, Um orifício de parafuso pode reduzir a resistência à torção do osso em até 50% durante as primeiras semanas após a sua remoção. Isto garante a integridade funcional do aparelho locomotor.",
    "distractorAnalysis": [
      "Está incorreta: o furo cilíndrico não dissipa choques em calor, mas atua como um entalhe (stress riser) onde as tensões se multiplicam.",
      "Está incorreta: a concentração geométrica de tensões é um fenómeno clássico da mecânica dos sólidos elásticos e biomateriais.",
      "Está incorreta: os bordos dos orifícios corticais são locais prediletos para o início e propagação de fendas mecânicas sob torção."
    ],
    "nursingApplication": "O enfermeiro protege os membros de doentes submetidos a remoção de material de osteossíntese recente, orientando repouso desportivo relativo durante a cicatrização dos túneis ósseos."
  },
  {
    "id": 3123,
    "topicId": 3,
    "question": "Na biofísica do sistema osteomuscular, em relação a 'expansão periosteal compensatória durante o envelhecimento', qual é a fundamentação científica correta?",
    "options": [
      "O osso do idoso diminui de diâmetro externo até se transformar numa barra fina e sólida com densidade dez vezes superior à normal.",
      "A expansão periosteal é uma anomalia patológica que preenche o osso com ar atmosférico para aliviar a carga das pernas na marcha.",
      "O canal medular fecha completamente na velhice, tornando todos os ossos longos humanos em cilindros maciços indeformáveis.",
      "Com a reabsorção endosteal no idoso, o diâmetro externo da diáfise expande por aposição periosteal, preservando o momento de inércia."
    ],
    "correctIndex": 3,
    "explanation": "Em biofísica osteomuscular, expansão periosteal compensatória durante o envelhecimento explica-se pelo facto de que à medida que a medula expande por reabsorção endosteal no idoso, ocorre ligeira aposição periosteal no diâmetro exterior para manter o momento de inércia. Esta adaptação biomecânica tenta compensar a osteopenia aumentando o raio externo $R_{ext}$, atenuando a perda de resistência mecânica à flexão.",
    "distractorAnalysis": [
      "Está incorreta: o diâmetro externo da diáfise aumenta ligeiramente na senescência enquanto o córtex se afina pela reabsorção endosteal.",
      "Está incorreta: os ossos não contêm ar e a expansão subperiosteal é um mecanismo biomecânico compensatório adaptativo da Lei de Wolff.",
      "Está incorreta: o canal medular alarga com o envelhecimento (reabsorção endosteal), reduzindo a espessura da cortical tubular."
    ],
    "nursingApplication": "O enfermeiro reconhece que embora haja aumento discreto do diâmetro externo, o córtex torna-se fino e frágil a impactos diretos concentrados."
  },
  {
    "id": 3124,
    "topicId": 3,
    "question": "Durante a prestação de cuidados de enfermagem a um doente com alterações musculoesqueléticas, como se traduz na prática clínica o conceito de 'expansão periosteal compensatória durante o envelhecimento'?",
    "options": [
      "Reconhecer que apesar do diâmetro externo preservado, o córtex é mais fino e frágil, aumentando o risco de fratura sob impactos ligeiros.",
      "Assumir que a expansão periosteal torna o osso senil totalmente imune a fraturas na anca mesmo após quedas da própria altura no leito.",
      "Recomendar aos doentes idosos que deixem de usar canadianas porque o aumento do diâmetro ósseo duplica a tenacidade mecânica.",
      "Considerar o afinamento da cortical como um sinal de regeneração óssea juvenil que dispensa qualquer precaução contra quedas."
    ],
    "correctIndex": 0,
    "explanation": "A aplicação de enfermagem para expansão periosteal compensatória durante o envelhecimento baseia-se no princípio biomecânico: O enfermeiro reconhece que embora haja aumento discreto do diâmetro externo, o córtex torna-se fino e frágil a impactos diretos concentrados. Este raciocínio assegura intervenções fundamentadas na física biológica.",
    "distractorAnalysis": [
      "Está incorreta: embora o aumento de diâmetro compense parcialmente a flexão, a perda líquida de massa e afilamento tornam o osso quebradiço.",
      "Está incorreta: os apoios de marcha e medidas de prevenção de quedas são indispensáveis para proteger o esqueleto osteopénico do idoso.",
      "Está incorreta: o adelgaçamento cortical é um marcador clássico de osteoporose e fragilidade óssea senil e não de rejuvenescimento."
    ],
    "nursingApplication": "O enfermeiro reconhece que embora haja aumento discreto do diâmetro externo, o córtex torna-se fino e frágil a impactos diretos concentrados."
  },
  {
    "id": 3125,
    "topicId": 3,
    "question": "Um enfermeiro analisa o impacto biomecânico das solicitações mecânicas em 'expansão periosteal compensatória durante o envelhecimento'. Qual das seguintes afirmações apresenta a análise biofísica correta?",
    "options": [
      "Aumenta a rigidez mecânica para valores infinitos que impedem qualquer deformação dos membros sob a aceleração gravítica local.",
      "Aumenta o raio de colocação do material cortical remanescente, atenuando a perda de rigidez à flexão decorrente da osteoporose.",
      "Substitui a hidroxiapatite mineral por uma liga biológica de polietileno de alta complacência que absorve os impactos da corrida.",
      "Anula a necessidade de irrigação vascular nos membros inferiores ao converter a cortical óssea numa estrutura acelular inerte."
    ],
    "correctIndex": 1,
    "explanation": "Sob o ponto de vista físico e mecanicista, Esta adaptação biomecânica tenta compensar a osteopenia aumentando o raio externo $R_{ext}$, atenuando a perda de resistência mecânica à flexão. Isto garante a integridade funcional do aparelho locomotor.",
    "distractorAnalysis": [
      "Está incorreta: a adaptação biomecânica periosteal compensa parcialmente a perda de rigidez (I ∝ r⁴), mas não confere rigidez infinita.",
      "Está incorreta: o tecido ósseo permanece mineralizado com fosfato de cálcio biológico e não é substituído por plásticos sintéticos.",
      "Está incorreta: a vascularização periosteal e o aporte sanguíneo continuam indispensáveis para a viabilidade osteocitária no idoso."
    ],
    "nursingApplication": "O enfermeiro reconhece que embora haja aumento discreto do diâmetro externo, o córtex torna-se fino e frágil a impactos diretos concentrados."
  },
  {
    "id": 3126,
    "topicId": 3,
    "question": "Na biofísica do sistema osteomuscular, em relação a 'triângulo de Ward e zona de fraqueza trabecular no colo femoral', qual é a fundamentação científica correta?",
    "options": [
      "Zona hipermineralizada no grande trocânter que impede a transmissão de momentos fletores para a cabeça do fémur na marcha.",
      "Bolsa serosa acelular externa à cápsula da anca cuja função mecânica consiste unicamente na retenção de ar pressurizado.",
      "Região hipodensa no interior do colo femoral delimitada pelo cruzamento das trabéculas, muito vulnerável à fratura na osteoporose.",
      "Ponto de convergência das fibras do ligamento redondo onde a tensão elástica articular é rigorosamente igual a zero."
    ],
    "correctIndex": 2,
    "explanation": "Em biofísica osteomuscular, triângulo de Ward e zona de fraqueza trabecular no colo femoral explica-se pelo facto de que região hipodensa no interior do colo do fémur delimitada pelo cruzamento dos sistemas trabeculares de compressão principal e de tração. Com a osteoporose, este espaço trabecular torna-se virtualmente oco, transformando-se no local biomecanicamente mais frágil e propício à fratura transcervical.",
    "distractorAnalysis": [
      "Está incorreta: o triângulo de Ward é uma zona de menor densidade trabecular interna e não uma crista hipermineralizada.",
      "Está incorreta: não existem bolsas pneumáticas gasosas no colo femoral, sendo uma área anatómica esponjosa vascularizada.",
      "Está incorreta: o triângulo de Ward situa-se no colo do fémur e é sujeito a elevados momentos fletores durante a locomoção."
    ],
    "nursingApplication": "O enfermeiro reconhece no raio-X a rarefação do triângulo de Ward como um preditor imagiológico de altíssimo risco de fratura da anca."
  },
  {
    "id": 3127,
    "topicId": 3,
    "question": "Durante a prestação de cuidados de enfermagem a um doente com alterações musculoesqueléticas, como se traduz na prática clínica o conceito de 'triângulo de Ward e zona de fraqueza trabecular no colo femoral'?",
    "options": [
      "Orientar o idoso a saltar obstáculos altos para testar a resistência trabecular do triângulo de Ward antes da alta hospitalar.",
      "Imobilizar preventivamente ambas as ancas com gessos pélvicos em todos os doentes com osteopenia sem histórico de fratura.",
      "Desvalorizar a densitometria óssea na anca, assumindo que as fraturas proximais do fémur nunca comprometem a autonomia funcional.",
      "Reconhecer que o colo femoral é um ponto frágil fletor no idoso, implementando medidas de prevenção de quedas e suporte de marcha."
    ],
    "correctIndex": 3,
    "explanation": "A aplicação de enfermagem para triângulo de Ward e zona de fraqueza trabecular no colo femoral baseia-se no princípio biomecânico: O enfermeiro reconhece no raio-X a rarefação do triângulo de Ward como um preditor imagiológico de altíssimo risco de fratura da anca. Este raciocínio assegura intervenções fundamentadas na física biológica.",
    "distractorAnalysis": [
      "Está incorreta: impactos mecânicos descontrolados em osso osteoporótico provocam fratura imediata por insuficiência no colo.",
      "Está incorreta: a imobilização pélvica injustificada aceleraria a perda óssea por desuso e causaria rigidez e escaras de decúbito.",
      "Está incorreta: as fraturas da anca no idoso acarretam elevada morbilidade e mortalidade, sendo a prevenção prioritária."
    ],
    "nursingApplication": "O enfermeiro reconhece no raio-X a rarefação do triângulo de Ward como um preditor imagiológico de altíssimo risco de fratura da anca."
  },
  {
    "id": 3128,
    "topicId": 3,
    "question": "Um enfermeiro analisa o impacto biomecânico das solicitações mecânicas em 'triângulo de Ward e zona de fraqueza trabecular no colo femoral'. Qual das seguintes afirmações apresenta a análise biofísica correta?",
    "options": [
      "Com a osteoporose, a reabsorção trabecular alarga o triângulo de Ward, reduzindo a tenacidade do colo contra momentos de flexão súbita.",
      "A perda trabecular preenche o colo femoral com uma matriz metálica de titânio que bloqueia qualquer flexão do fémur proximal.",
      "O triângulo de Ward converte-se num fluido puramente incompressível que repele a cabeça femoral em direção ao teto do acetábulo.",
      "A reabsorção no colo femoral anula a força de atrito articular, permitindo que a anca rode livremente trezentos e sessenta graus."
    ],
    "correctIndex": 0,
    "explanation": "Sob o ponto de vista físico e mecanicista, Com a osteoporose, este espaço trabecular torna-se virtualmente oco, transformando-se no local biomecanicamente mais frágil e propício à fratura transcervical. Isto garante a integridade funcional do aparelho locomotor.",
    "distractorAnalysis": [
      "Está incorreta: o envelhecimento osteoporótico fragiliza a microarquitetura trabecular sem introduzir ligas metálicas exógenas.",
      "Está incorreta: o osso permanece sólido e poroso, enfraquecido e incapaz de amortecer choques mecânicos por flexão.",
      "Está incorreta: o colo femoral é uma estrutura de sustentação estática e o seu adelgaçamento predispõe à fratura e não a giros anómalos."
    ],
    "nursingApplication": "O enfermeiro reconhece no raio-X a rarefação do triângulo de Ward como um preditor imagiológico de altíssimo risco de fratura da anca."
  },
  {
    "id": 3129,
    "topicId": 3,
    "question": "Na biofísica do sistema osteomuscular, em relação a 'função dos músculos abdutores da anca (glúteo médio e mínimo)', qual é a fundamentação científica correta?",
    "options": [
      "Permanecem totalmente relaxados durante a marcha, deixando que a hemipelve caia livremente por gravidade em direção ao chão.",
      "Contraem vigorosamente no apoio unipodal para nivelar a bacia, gerando forças compressivas na anca de duas a três vezes o peso corporal.",
      "Empurram a bacia para a frente através de impulsos puramente pneumáticos gerados pela evaporação de água na sínfise púbica.",
      "Eliminam por completo a necessidade de força de reação articular na anca através da criação de um campo magnético protetor."
    ],
    "correctIndex": 1,
    "explanation": "Em biofísica osteomuscular, função dos músculos abdutores da anca (glúteo médio e mínimo) explica-se pelo facto de que contraem vigorosamente na marcha para nivelar a bacia e evitar a queda da hemipelve contralateral (sinal de Trendelenburg). A sua contração potente gera uma força compressiva na cabeça do fémur que é o dobro do peso de todo o corpo do utente.",
    "distractorAnalysis": [
      "Está incorreta: os abdutores (glúteo médio e mínimo) contraem intensamente no apoio unipodal para estabilizar a bacia no plano frontal.",
      "Está incorreta: a locomoção humana assenta na transmissão mecânica de forças musculares contráteis e não em pressões pneumáticas.",
      "Está incorreta: a contração muscular necessária para equilibrar a bacia gera cargas compressivas elevadas na cabeça femoral."
    ],
    "nursingApplication": "O enfermeiro treina o reforço muscular do glúteo médio na reabilitação motora para estabilizar a bacia e garantir uma marcha segura e simétrica."
  },
  {
    "id": 3130,
    "topicId": 3,
    "question": "Durante a prestação de cuidados de enfermagem a um doente com alterações musculoesqueléticas, como se traduz na prática clínica o conceito de 'função dos músculos abdutores da anca (glúteo médio e mínimo)'?",
    "options": [
      "Estimular o doente a caminhar inclinando o tronco bruscamente para o lado da anca lesionada para aumentar a dor articular.",
      "Prescrever a imobilização absoluta do membro são na cama para forçar a anca afetada a sustentar o dobro da gravidade sem apoio.",
      "Treinar o fortalecimento do glúteo médio na reabilitação, prevenindo a marcha claudicante de Trendelenburg e a instabilidade da bacia.",
      "Proibir qualquer exercício com os músculos abdutores para impedir que a cabeça femoral receba estímulos de compressão da Lei de Wolff."
    ],
    "correctIndex": 2,
    "explanation": "A aplicação de enfermagem para função dos músculos abdutores da anca (glúteo médio e mínimo) baseia-se no princípio biomecânico: O enfermeiro treina o reforço muscular do glúteo médio na reabilitação motora para estabilizar a bacia e garantir uma marcha segura e simétrica. Este raciocínio assegura intervenções fundamentadas na física biológica.",
    "distractorAnalysis": [
      "Está incorreta: a inclinação compensatória do tronco (marcha de Duchenne) traduz fraqueza muscular grave que deve ser reabilitada.",
      "Está incorreta: sobrecarregar uma articulação inflamada sem suporte muscular agrava a destruição cartilagínea e a dor.",
      "Está incorreta: o fortalecimento controlado e progressivo dos abdutores restabelece o equilíbrio biomecânico da marcha."
    ],
    "nursingApplication": "O enfermeiro treina o reforço muscular do glúteo médio na reabilitação motora para estabilizar a bacia e garantir uma marcha segura e simétrica."
  },
  {
    "id": 3131,
    "topicId": 3,
    "question": "Um enfermeiro analisa o impacto biomecânico das solicitações mecânicas em 'função dos músculos abdutores da anca (glúteo médio e mínimo)'. Qual das seguintes afirmações apresenta a análise biofísica correta?",
    "options": [
      "A força muscular gerada pelos abdutores é sempre cem vezes menor que o peso da perna, dispensando qualquer apoio ósseo.",
      "Os abdutores da anca atuam como alavanca interpotente de 3.ª classe com fulcro articular situado no joelho homolateral.",
      "A musculatura glútea dissipa 100% da carga da bacia em calor de atrito dérmico, mantendo o colo femoral sem qualquer tensão interna.",
      "A contração intensa dos abdutores gera momento de força que equilibra o torque do peso corporal, gerando forte reação articular."
    ],
    "correctIndex": 3,
    "explanation": "Sob o ponto de vista físico e mecanicista, A sua contração potente gera uma força compressiva na cabeça do fémur que é o dobro do peso de todo o corpo do utente. Isto garante a integridade funcional do aparelho locomotor.",
    "distractorAnalysis": [
      "Está incorreta: devido ao braço de momento muscular curto, a força dos abdutores é superior ao peso corporal do tronco.",
      "Está incorreta: o fulcro da alavanca abdutora situa-se na articulação coxofemoral (cabeça do fémur) e não no joelho distal.",
      "Está incorreta: a contração mecânica dos músculos transmite forças de compressão direta através do colo e diáfise femoral."
    ],
    "nursingApplication": "O enfermeiro treina o reforço muscular do glúteo médio na reabilitação motora para estabilizar a bacia e garantir uma marcha segura e simétrica."
  },
  {
    "id": 3132,
    "topicId": 3,
    "question": "Na biofísica do sistema osteomuscular, em relação a 'uso biomecânico da bengala na mão oposta à lesão ortopédica', qual é a fundamentação científica correta?",
    "options": [
      "A bengala na mão oposta à lesão cria um longo braço de momento, reduzindo em até 50% o esforço do glúteo médio e a carga na anca.",
      "A bengala na mão do mesmo lado anula a gravidade corporal, permitindo que a perna lesionada flutue suavemente sobre o solo.",
      "O uso de bengala destina-se unicamente a treinar a coordenação dos olhos sem qualquer efeito no alívio de forças articulares.",
      "Apoiar a bengala na mão contralateral duplica a compressão na cabeça femoral inflamada devido à inversão das leis de Newton."
    ],
    "correctIndex": 0,
    "explanation": "Em biofísica osteomuscular, uso biomecânico da bengala na mão oposta à lesão ortopédica explica-se pelo facto de que a bengala na mão contralateral cria um longo braço de momento que equilibra o peso do corpo com uma pequena força descendente da mão. Isto desativa a necessidade de contração extrema do glúteo médio ipsilateral, diminuindo a carga articular compressiva na cabeça femoral lesada em mais de metade.",
    "distractorAnalysis": [
      "Está incorreta: usar a bengala no mesmo lado (ipsilateral) é biomecanicamente menos eficiente para aliviar o momento abdutor.",
      "Está incorreta: a bengala exerce uma força mecânica ascendente real de suporte que diminui o binário de força na anca oposta.",
      "Está incorreta: o princípio da bengala contralateral baseia-se em alavancas de 1.ª classe para aliviar a carga articular na anca."
    ],
    "nursingApplication": "O enfermeiro corrige imediatamente o utente que tenta usar a bengala na mesma mão da anca operada, demonstrando a redução imediata da dor com a colocação correta contralateral."
  },
  {
    "id": 3133,
    "topicId": 3,
    "question": "Durante a prestação de cuidados de enfermagem a um doente com alterações musculoesqueléticas, como se traduz na prática clínica o conceito de 'uso biomecânico da bengala na mão oposta à lesão ortopédica'?",
    "options": [
      "Insistir que a bengala deve ser sempre transportada na mão do lado doloroso para concentrar todo o peso sobre o fémur inflamado.",
      "Corrigir o doente ensinando a segurar a bengala na mão contralateral ao membro afetado para maximizar o alívio articular na anca.",
      "Retirar a bengala ao doente com coxartrose grave para o forçar a deambular sem qualquer apoio externo nos corredores do serviço.",
      "Instruir o utente a colocar a bengala atrás das costas enquanto caminha para melhorar a flexibilidade da coluna lombar."
    ],
    "correctIndex": 1,
    "explanation": "A aplicação de enfermagem para uso biomecânico da bengala na mão oposta à lesão ortopédica baseia-se no princípio biomecânico: O enfermeiro corrige imediatamente o utente que tenta usar a bengala na mesma mão da anca operada, demonstrando a redução imediata da dor com a colocação correta contralateral. Este raciocínio assegura intervenções fundamentadas na física biológica.",
    "distractorAnalysis": [
      "Está incorreta: a bengala no lado homolateral reduz muito pouco o momento de flexão na anca e favorece posturas viciosas.",
      "Está incorreta: retirar o apoio a um doente com artrose agrava a dor, a claudicação e o desgaste da cartilagem articular.",
      "Está incorreta: o apoio anterior e lateral adequado no solo com a bengala é indispensável para alargar a base de sustentação."
    ],
    "nursingApplication": "O enfermeiro corrige imediatamente o utente que tenta usar a bengala na mesma mão da anca operada, demonstrando a redução imediata da dor com a colocação correta contralateral."
  },
  {
    "id": 3134,
    "topicId": 3,
    "question": "Um enfermeiro analisa o impacto biomecânico das solicitações mecânicas em 'uso biomecânico da bengala na mão oposta à lesão ortopédica'. Qual das seguintes afirmações apresenta a análise biofísica correta?",
    "options": [
      "Aumenta a velocidade do fluxo de sangue na artéria femoral através da condução de calor gerado na ponta de borracha da bengala.",
      "Bloqueia totalmente a regeneração celular da cabeça do fémur através de ondas ultrassónicas emitidas pelo impacto do apoio.",
      "Reduz a necessidade de contração potente dos abdutores, diminuindo a força de reação e o atrito na cartilagem degenerada.",
      "Substitui a cabeça femoral lesada por uma almofada pneumática invisível que flutua no interior da cavidade articular da anca."
    ],
    "correctIndex": 2,
    "explanation": "Sob o ponto de vista físico e mecanicista, Isto desativa a necessidade de contração extrema do glúteo médio ipsilateral, diminuindo a carga articular compressiva na cabeça femoral lesada em mais de metade. Isto garante a integridade funcional do aparelho locomotor.",
    "distractorAnalysis": [
      "Está incorreta: o benefício da bengala contralateral é puramente hemodinâmico-mecânico de redução de carga e não térmico.",
      "Está incorreta: diminuir a sobrecarga compressiva alivia a inflamação mecânica e protege a cartilagem contra o desgaste rápido.",
      "Está incorreta: o alívio pressórico obtido é estritamente físico pelo desvio do momento de força estático na bacia."
    ],
    "nursingApplication": "O enfermeiro corrige imediatamente o utente que tenta usar a bengala na mesma mão da anca operada, demonstrando a redução imediata da dor com a colocação correta contralateral."
  },
  {
    "id": 3135,
    "topicId": 3,
    "question": "Na biofísica do sistema osteomuscular, em relação a 'ângulo cérvico-diafisário: coxa valga vs coxa vara', qual é a fundamentação científica correta?",
    "options": [
      "O ângulo normal é de 45°; na coxa vara atinge 90° e na coxa valga atinge 180°, fundindo o colo do fémur com a bacia óssea.",
      "O ângulo cérvico-diafisário é constante e imutável em qualquer ser humano, sendo impossível qualquer variação anatómica na anca.",
      "A coxa valga anula a transmissão de forças compressivas para o joelho, fazendo com que a tíbia flutue livremente no ar.",
      "O ângulo cérvico-diafisário normal é de 125°-130°; na coxa vara (<120°) aumenta o momento fletor no colo, e na coxa valga diminui."
    ],
    "correctIndex": 3,
    "explanation": "Em biofísica osteomuscular, ângulo cérvico-diafisário: coxa valga vs coxa vara explica-se pelo facto de que o ângulo normal de 125°-130° pode estar aumentado (coxa valga, >135°) ou diminuído (coxa vara, <120°). A coxa vara aumenta o braço de momento e diminui a força requerida dos abdutores, mas aumenta exponencialmente as tensões de flexão e cisalhamento no colo femoral.",
    "distractorAnalysis": [
      "Está incorreta: os valores angulares normais rondam 120° a 130°, sendo valores de 45° ou 180° incompatíveis com a anatomia humana.",
      "Está incorreta: variações do ângulo (coxa vara e coxa valga) são frequentes na prática clínica ortopédica congênita ou adquirida.",
      "Está incorreta: a coxa valga direciona as forças de forma mais vertical, alterando a linha de carga no compartimento do joelho."
    ],
    "nursingApplication": "O enfermeiro identifica alterações no alinhamento dos membros inferiores e adapta os exercícios de posicionamento e marcha ao perfil anatómico do utente."
  },
  {
    "id": 3136,
    "topicId": 3,
    "question": "Durante a prestação de cuidados de enfermagem a um doente com alterações musculoesqueléticas, como se traduz na prática clínica o conceito de 'ângulo cérvico-diafisário: coxa valga vs coxa vara'?",
    "options": [
      "Identificar alterações no alinhamento dos membros e dismetrias que alteram o polígono de sustentação e exigem compensação podológica.",
      "Imobilizar o doente na cama com pesos de tração de cem quilos para dobrar o colo femoral até atingir o ângulo pretendido.",
      "Desvalorizar alterações no ângulo do colo, assumindo que a geometria óssea não tem qualquer influência na biomecânica da marcha.",
      "Prescrever calçado com saltos altos rígidos para que o peso corporal se concentre exclusivamente nos dedos e alivie a anca."
    ],
    "correctIndex": 0,
    "explanation": "A aplicação de enfermagem para ângulo cérvico-diafisário: coxa valga vs coxa vara baseia-se no princípio biomecânico: O enfermeiro identifica alterações no alinhamento dos membros inferiores e adapta os exercícios de posicionamento e marcha ao perfil anatómico do utente. Este raciocínio assegura intervenções fundamentadas na física biológica.",
    "distractorAnalysis": [
      "Está incorreta: a tração não altera a conformação óssea estrutural consolidada e pesos excessivos causariam lesões neurológicas.",
      "Está incorreta: variações no ângulo alteram os braços de momento muscular, influenciando diretamente a estabilidade articular.",
      "Está incorreta: calçado instável com saltos altos prejudica o equilíbrio, agrava a lordose lombar e eleva o risco de quedas."
    ],
    "nursingApplication": "O enfermeiro identifica alterações no alinhamento dos membros inferiores e adapta os exercícios de posicionamento e marcha ao perfil anatómico do utente."
  },
  {
    "id": 3137,
    "topicId": 3,
    "question": "Um enfermeiro analisa o impacto biomecânico das solicitações mecânicas em 'ângulo cérvico-diafisário: coxa valga vs coxa vara'. Qual das seguintes afirmações apresenta a análise biofísica correta?",
    "options": [
      "A coxa vara elimina todo o esforço de flexão no colo do fémur, convertendo a solicitação mecânica em tração pura axial.",
      "A coxa vara aumenta o braço de momento da força peso em relação à cabeça femoral, elevando o momento fletor no colo ósseo.",
      "A coxa vara diminui o braço de alavanca dos abdutores, exigindo que o glúteo médio produza dez vezes mais força contrátil.",
      "A coxa vara transforma o fémur num osso puramente cartilagíneo que dobra como borracha sob o peso corporal na deambulação."
    ],
    "correctIndex": 1,
    "explanation": "Sob o ponto de vista físico e mecanicista, A coxa vara aumenta o braço de momento e diminui a força requerida dos abdutores, mas aumenta exponencialmente as tensões de flexão e cisalhamento no colo femoral. Isto garante a integridade funcional do aparelho locomotor.",
    "distractorAnalysis": [
      "Está incorreta: a inclinação mais horizontal do colo na coxa vara amplia o braço de momento da gravidade e o esforço fletor.",
      "Está incorreta: na coxa vara o braço de momento dos abdutores até aumenta ligeiramente, mas o momento fletor no colo eleva-se.",
      "Está incorreta: a alteração angular é geométrica na arquitetura óssea mineralizada e não envolve conversão em cartilagem."
    ],
    "nursingApplication": "O enfermeiro identifica alterações no alinhamento dos membros inferiores e adapta os exercícios de posicionamento e marcha ao perfil anatómico do utente."
  },
  {
    "id": 3138,
    "topicId": 3,
    "question": "Na biofísica do sistema osteomuscular, em relação a 'deformação elástica da cartilagem hialina na cabeça femoral', qual é a fundamentação científica correta?",
    "options": [
      "A cartilagem comporta-se como aço cirúrgico perfeitamente rígido, concentrando toda a força corporal num único ponto microscópico.",
      "A cartilagem quebra de forma estilhaçada logo no primeiro passo do doente, regenerando-se espontaneamente na fase de balanço.",
      "A cartilagem articular deforma-se sob compressão, aumentando a área de contacto para reduzir a tensão mecânica média (pressão = F/A).",
      "A cartilagem sofre escoamento plástico irreversível total, extinguindo o espaço articular logo no início da fase de apoio na marcha."
    ],
    "correctIndex": 2,
    "explanation": "Em biofísica osteomuscular, deformação elástica da cartilagem hialina na cabeça femoral explica-se pelo facto de que a cartilagem articular hialina deforma-se viscoelasticamente sob carga, aumentando a área de contacto articular de 2 para 8 cm². De acordo com a equação da pressão ($P = F / A$), este aumento quadruplicado da área reduz as pressões de pico para valores toleráveis pelos condrócitos.",
    "distractorAnalysis": [
      "Está incorreta: a complacência elástica da cartilagem amplia a área de contacto para distribuir a carga e evitar pressões focais destrutivas.",
      "Está incorreta: a cartilagem hialina sã deforma-se viscoelasticamente sem fratura sob solicitações mecânicas da marcha.",
      "Está incorreta: a lubrificação articular biológica é hidrodinâmica e limite e não envolve vaporização térmica de fluidos."
    ],
    "nursingApplication": "O enfermeiro enfatiza o controlo rigoroso do peso corporal em doentes com coxartrose, pois cada quilograma a menos diminui 3 kg de carga em cada passo dado."
  },
  {
    "id": 3139,
    "topicId": 3,
    "question": "Durante a prestação de cuidados de enfermagem a um doente com alterações musculoesqueléticas, como se traduz na prática clínica o conceito de 'deformação elástica da cartilagem hialina na cabeça femoral'?",
    "options": [
      "Manter as articulações permanentemente imóveis com gesso circular para impedir que a cartilagem articular sofra qualquer deformação.",
      "Prescrever repouso absoluto no leito sem qualquer flexão articular por períodos superiores a três meses em todas as entorses ligeiras.",
      "Administrar antibióticos diretamente no espaço intra-articular após cada movimento para desinfetar o atrito cartilagíneo normal.",
      "Enfatizar a mobilização articular passiva e ativa suave precoce, essencial para o fluxo de fluido que nutre a cartilagem avascular."
    ],
    "correctIndex": 3,
    "explanation": "A aplicação de enfermagem para deformação elástica da cartilagem hialina na cabeça femoral baseia-se no princípio biomecânico: O enfermeiro enfatiza o controlo rigoroso do peso corporal em doentes com coxartrose, pois cada quilograma a menos diminui 3 kg de carga em cada passo dado. Este raciocínio assegura intervenções fundamentadas na física biológica.",
    "distractorAnalysis": [
      "Está incorreta: a imobilização articular prolongada prejudica a nutrição da cartilagem (imbibição) e provoca atrofia e rigidez.",
      "Está incorreta: o repouso excessivo acelera a perda de proteoglicanos da matriz e favorece a anquilose e fraqueza muscular.",
      "Está incorreta: a infiltração articular desnecessária sem infeção acarreta risco de artrite séptica iatrogénica grave."
    ],
    "nursingApplication": "O enfermeiro enfatiza o controlo rigoroso do peso corporal em doentes com coxartrose, pois cada quilograma a menos diminui 3 kg de carga em cada passo dado."
  },
  {
    "id": 3140,
    "topicId": 3,
    "question": "Um enfermeiro analisa o impacto biomecânico das solicitações mecânicas em 'deformação elástica da cartilagem hialina na cabeça femoral'. Qual das seguintes afirmações apresenta a análise biofísica correta?",
    "options": [
      "Pelo princípio físico pressão = força / área, dobrar a área de contacto articular sob deformação elástica reduz a tensão para metade.",
      "Ao aumentar a área de contacto, a pressão média na cartilagem decuplica devido à perda de líquido sinovial pelo periósteo.",
      "A distribuição de carga pela cartilagem independe da área anatómica de apoio, variando unicamente com o índice de massa corporal.",
      "A cartilagem não se deforma sob carga, transmitindo a pressão diretamente aos nervos sensoriais do canal medular ósseo."
    ],
    "correctIndex": 0,
    "explanation": "Sob o ponto de vista físico e mecanicista, De acordo com a equação da pressão ($P = F / A$), este aumento quadruplicado da área reduz as pressões de pico para valores toleráveis pelos condrócitos. Isto garante a integridade funcional do aparelho locomotor.",
    "distractorAnalysis": [
      "Está incorreta: aumentar a área de contacto (A) diminui a tensão de contacto (P = F/A), protegendo a cartilagem contra o desgaste.",
      "Está incorreta: a tensão de compressão articular é inversamente proporcional à área de apoio do contacto femorotibial ou coxofemoral.",
      "Está incorreta: a cartilagem é poroelástica e deforma-se consideravelmente sob cargas dinâmicas para amortecer choques."
    ],
    "nursingApplication": "O enfermeiro enfatiza o controlo rigoroso do peso corporal em doentes com coxartrose, pois cada quilograma a menos diminui 3 kg de carga em cada passo dado."
  },
  {
    "id": 3141,
    "topicId": 3,
    "question": "Na biofísica do sistema osteomuscular, em relação a 't-score da densitometria óssea (DEXA) e critérios da OMS', qual é a fundamentação científica correta?",
    "options": [
      "Normal se T-score for negativo inferior a -5,0 DP; osteoporose se T-score for positivo superior a +5,0 desvios-padrão.",
      "Normal se T-score ≥ -1,0 DP; osteopenia entre -1,0 e -2,5 DP; osteoporose se T-score ≤ -2,5 DP em relação ao adulto jovem.",
      "O T-score mede a temperatura interna dos canais de Havers e não a densidade mineral do esqueleto do doente avaliado.",
      "O T-score expressa o número exato de fraturas que o doente irá obrigatoriamente sofrer nas próximas quarenta e oito horas de vida."
    ],
    "correctIndex": 1,
    "explanation": "Em biofísica osteomuscular, t-score da densitometria óssea (DEXA) e critérios da OMS explica-se pelo facto de que osteopenia é definida por T-score entre -1,0 e -2,5 desvios-padrão (DP), e osteoporose por T-score inferior a -2,5 DP em relação ao adulto jovem de referência. Cada desvio-padrão negativo abaixo da média dobra ou triplica o risco relativo de sofrer uma fratura por fragilidade na anca ou coluna.",
    "distractorAnalysis": [
      "Está incorreta: valores de T-score negativos inferiores a -2,5 DP definem osteoporose segundo os critérios diagnósticos da OMS.",
      "Está incorreta: o T-score da densitometria DEXA quantifica o desvio da densidade mineral óssea em g/cm² e não a temperatura.",
      "Está incorreta: o T-score é um índice estatístico de densidade e risco relativo e não um contador determinístico de fraturas."
    ],
    "nursingApplication": "O enfermeiro interpreta os resultados da densitometria e aconselha o utente com T-score < -2,5 a adotar rigorosas medidas de prevenção de quedas no domicílio."
  },
  {
    "id": 3142,
    "topicId": 3,
    "question": "Durante a prestação de cuidados de enfermagem a um doente com alterações musculoesqueléticas, como se traduz na prática clínica o conceito de 't-score da densitometria óssea (DEXA) e critérios da OMS'?",
    "options": [
      "Dizer ao utente com T-score de -3,0 que o resultado é excelente e que pode suspender qualquer medicação e proteção na marcha.",
      "Informar o doente de que a densitometria negativa significa que todos os seus ossos já desapareceram completamente do organismo.",
      "Interpretar o T-score para estratificar o risco de fratura, reforçando a adesão à terapêutica, cálcio, vitamina D e prevenção de quedas.",
      "Prescrever repouso estrito e permanente no leito para impedir qualquer movimento corporal em doentes com osteopenia ligeira."
    ],
    "correctIndex": 2,
    "explanation": "A aplicação de enfermagem para t-score da densitometria óssea (DEXA) e critérios da OMS baseia-se no princípio biomecânico: O enfermeiro interpreta os resultados da densitometria e aconselha o utente com T-score < -2,5 a adotar rigorosas medidas de prevenção de quedas no domicílio. Este raciocínio assegura intervenções fundamentadas na física biológica.",
    "distractorAnalysis": [
      "Está incorreta: um T-score de -3,0 DP confirma osteoporose densitométrica com elevado risco de fraturas por fragilidade.",
      "Está incorreta: a osteoporose traduz perda de densidade e microarquitetura óssea e não ausência física total do esqueleto.",
      "Está incorreta: a atividade física adaptada com carga controlada é essencial para estimular a manutenção da massa óssea na osteopenia."
    ],
    "nursingApplication": "O enfermeiro interpreta os resultados da densitometria e aconselha o utente com T-score < -2,5 a adotar rigorosas medidas de prevenção de quedas no domicílio."
  },
  {
    "id": 3143,
    "topicId": 3,
    "question": "Um enfermeiro analisa o impacto biomecânico das solicitações mecânicas em 't-score da densitometria óssea (DEXA) e critérios da OMS'. Qual das seguintes afirmações apresenta a análise biofísica correta?",
    "options": [
      "A variação do T-score não tem qualquer relação com o risco de fratura, sendo apenas uma escala matemática sem aplicação na clínica.",
      "Uma descida de dois desvios-padrão no T-score torna o osso dez vezes mais resistente a momentos fletores durante uma queda.",
      "O risco de fratura só existe se o T-score for estritamente igual a zero, sendo nulo em qualquer outro valor positivo ou negativo.",
      "Cada diminuição de um desvio-padrão no T-score duplica aproximadamente o risco relativo de fratura de fragilidade na anca ou coluna."
    ],
    "correctIndex": 3,
    "explanation": "Sob o ponto de vista físico e mecanicista, Cada desvio-padrão negativo abaixo da média dobra ou triplica o risco relativo de sofrer uma fratura por fragilidade na anca ou coluna. Isto garante a integridade funcional do aparelho locomotor.",
    "distractorAnalysis": [
      "Está incorreta: estudos epidemiológicos demonstram correlação consistente entre a queda do T-score e o aumento exponencial do risco.",
      "Está incorreta: a perda de desvios-padrão reflete menor massa mineral e menor tenacidade óssea, fragilizando o membro.",
      "Está incorreta: T-score de zero representa a média de referência do adulto jovem são, correspondendo a menor risco de fratura."
    ],
    "nursingApplication": "O enfermeiro interpreta os resultados da densitometria e aconselha o utente com T-score < -2,5 a adotar rigorosas medidas de prevenção de quedas no domicílio."
  },
  {
    "id": 3144,
    "topicId": 3,
    "question": "Na biofísica do sistema osteomuscular, em relação a 'fratura da extremidade distal do rádio (fratura de Pouteau-Colles)', qual é a fundamentação científica correta?",
    "options": [
      "Queda sobre a mão espalmada em dorsiflexão que transmite forças compressivas e de flexão, desviando o rádio dorsalmente em garfo.",
      "Queda sobre o dorso da mão em flexão palmar extrema que desvia a extremidade radial distal no sentido estritamente anterior ou volar.",
      "Tração axial rápida e violenta exercida sobre os dedos que arranca o rádio proximal para fora da cápsula articular do cotovelo.",
      "Momento de torção pura que divide transversalmente o cúbito no terço médio sem qualquer alteração na extremidade do rádio distal."
    ],
    "correctIndex": 0,
    "explanation": "Em biofísica osteomuscular, fratura da extremidade distal do rádio (fratura de Pouteau-Colles) explica-se pelo facto de que produzida pela queda sobre a mão espalmada em extensão e pronação, onde a força de impacto transmite compressão e flexão dorsal à metáfise radial osteoporótica. Resulta na clássica deformidade em 'dorso de garfo' pelo desvio dorsal do fragmento distal do rádio.",
    "distractorAnalysis": [
      "Está incorreta: a queda com mão em flexão palmar e desvio anterior do fragmento define a fratura de Smith (Colles invertida).",
      "Está incorreta: a fratura de Colles afeta a metáfise distal do rádio por compressão e hiperextensão e não por avulsão do cotovelo.",
      "Está incorreta: a lesão carateriza-se pela deformidade típica em 'dorso de garfo' no punho decorrente do desvio dorsal do rádio."
    ],
    "nursingApplication": "O enfermeiro vigia a perfusão distal, sensibilidade dos dedos e edema sob a tala gessada no membro superior, prevenindo a compressão do nervo mediano no túnel cárpico."
  },
  {
    "id": 3145,
    "topicId": 3,
    "question": "Durante a prestação de cuidados de enfermagem a um doente com alterações musculoesqueléticas, como se traduz na prática clínica o conceito de 'fratura da extremidade distal do rádio (fratura de Pouteau-Colles)'?",
    "options": [
      "Instruir o doente com gesso a manter a mão permanentemente pendente para baixo para que a gravidade estique o fragmento desviado.",
      "Vigiar perfusão, temperatura e mobilidade dos dedos no gesso antebraquial, promovendo a mobilização dos dedos para drenar o edema.",
      "Molhar diariamente o gesso com água quente para manter a tala maleável e macia sobre o foco da fratura do rádio distal.",
      "Imobilizar o ombro e o cotovelo durante três meses seguidos para evitar qualquer movimento em todas as articulações do membro."
    ],
    "correctIndex": 1,
    "explanation": "A aplicação de enfermagem para fratura da extremidade distal do rádio (fratura de Pouteau-Colles) baseia-se no princípio biomecânico: O enfermeiro vigia a perfusão distal, sensibilidade dos dedos e edema sob a tala gessada no membro superior, prevenindo a compressão do nervo mediano no túnel cárpico. Este raciocínio assegura intervenções fundamentadas na física biológica.",
    "distractorAnalysis": [
      "Está incorreta: manter a mão pendente agrava o edema postural e a congestão venosa dos dedos, aumentando o risco de síndrome compartimental.",
      "Está incorreta: molhar o gesso de Paris amolece e desagrega a sua estrutura rígida e macera a pele por baixo da imobilização.",
      "Está incorreta: imobilizar articulações não afetadas provoca rigidez no ombro e favorece a síndrome de dor regional complexa (Sudeck)."
    ],
    "nursingApplication": "O enfermeiro vigia a perfusão distal, sensibilidade dos dedos e edema sob a tala gessada no membro superior, prevenindo a compressão do nervo mediano no túnel cárpico."
  },
  {
    "id": 3146,
    "topicId": 3,
    "question": "Um enfermeiro analisa o impacto biomecânico das solicitações mecânicas em 'fratura da extremidade distal do rádio (fratura de Pouteau-Colles)'. Qual das seguintes afirmações apresenta a análise biofísica correta?",
    "options": [
      "Resulta da extensão contínua de todos os tendões extensores que se fundem num bloco rígido de colagénio na face palmar da mão.",
      "Traduz a perda de todos os ossos do carpo que se dissolvem no hematoma da fratura nas primeiras horas após o impacto no solo.",
      "Resulta da clássica deformidade em dorso de garfo por desvio dorsal e encurtamento radial com angulação do fragmento articular distal.",
      "Provocada pela luxação anterior pura do cúbito que perfura a pele da região palmar sem qualquer quebra na diáfise radial."
    ],
    "correctIndex": 2,
    "explanation": "Sob o ponto de vista físico e mecanicista, Resulta na clássica deformidade em 'dorso de garfo' pelo desvio dorsal do fragmento distal do rádio. Isto garante a integridade funcional do aparelho locomotor.",
    "distractorAnalysis": [
      "Está incorreta: a deformidade em garfo decorre do deslocamento mecânico do fragmento do rádio distal e não de fusão tendinosa.",
      "Está incorreta: os ossos do carpo mantêm a sua integridade óssea, sofrendo o rádio distal a rotura metafisária com desvio.",
      "Está incorreta: o mecanismo da fratura de Colles é a fratura extra-articular ou intra-articular da extremidade inferior do rádio."
    ],
    "nursingApplication": "O enfermeiro vigia a perfusão distal, sensibilidade dos dedos e edema sob a tala gessada no membro superior, prevenindo a compressão do nervo mediano no túnel cárpico."
  },
  {
    "id": 3147,
    "topicId": 3,
    "question": "Na biofísica do sistema osteomuscular, em relação a 'mecanismo de fratura trocantérica vs fratura subcapital no idoso', qual é a fundamentação científica correta?",
    "options": [
      "A fratura do colo femoral tem menor risco de necrose avascular da cabeça porque a cápsula protege a vascularização dos retináculos.",
      "A fratura trocantérica nunca consolida porque o osso esponjoso é desprovido de qualquer irrigação sanguínea ou osteoblastos ativos.",
      "Não existe qualquer distinção anatómica ou biomecânica entre fraturas extracapsulares pertrocantéricas e intracapsulares do colo.",
      "A pertrocantérica é extracapsular em osso trabecular vascularizado que sangra profusamente, mas tem excelente consolidação biológica."
    ],
    "correctIndex": 3,
    "explanation": "Em biofísica osteomuscular, mecanismo de fratura trocantérica vs fratura subcapital no idoso explica-se pelo facto de que a fratura extracapsular pertrocantérica ocorre através do osso trabecular vascularizado dos trocânteres, enquanto a subcapital é intracapsular e afeta a circulação da cabeça femoral. Nas fraturas subcapitais com desvio, a rutura mecânica das artérias retinaculares do anel pericervical acarreta alto risco de necrose avascular da cabeça femoral.",
    "distractorAnalysis": [
      "Está incorreta: a fratura intracapsular do colo lesa as artérias retinaculares, acarretando alto risco de necrose avascular da cabeça femoral.",
      "Está incorreta: a região trocantérica possui osso esponjoso amplamente irrigado que forma calo ósseo exuberante com consolidação rápida.",
      "Está incorreta: a distinção entre intra e extracapsular é crucial para a conduta cirúrgica (artroplastia vs osteossíntese)."
    ],
    "nursingApplication": "O enfermeiro compreende porque as fraturas subcapitais desviadas no idoso requerem artroplastia (prótese) em vez de osteossíntese com parafusos, devido ao risco de necrose óssea."
  },
  {
    "id": 3148,
    "topicId": 3,
    "question": "Durante a prestação de cuidados de enfermagem a um doente com alterações musculoesqueléticas, como se traduz na prática clínica o conceito de 'mecanismo de fratura trocantérica vs fratura subcapital no idoso'?",
    "options": [
      "Compreender que fraturas pertrocantéricas podem sangrar extensamente para a coxa, exigindo vigilância hemodinâmica de sinais de choque.",
      "Assumir que fraturas da anca não provocam qualquer perda sanguínea interna, dispensando a monitorização da tensão arterial do idoso.",
      "Incentivar o doente com fratura pertrocantérica desviada a caminhar sem apoio logo à entrada no serviço de urgência hospitalar.",
      "Colocar garrote compressivo na virilha de todos os doentes com fratura da anca para estancar a circulação de todo o membro inferior."
    ],
    "correctIndex": 0,
    "explanation": "A aplicação de enfermagem para mecanismo de fratura trocantérica vs fratura subcapital no idoso baseia-se no princípio biomecânico: O enfermeiro compreende porque as fraturas subcapitais desviadas no idoso requerem artroplastia (prótese) em vez de osteossíntese com parafusos, devido ao risco de necrose óssea. Este raciocínio assegura intervenções fundamentadas na física biológica.",
    "distractorAnalysis": [
      "Está incorreta: fraturas do fémur proximal podem acumular 500 a 1000 mL de sangue nos planos musculares, exigindo controlo de volemia.",
      "Está incorreta: apoiar a marcha numa fratura trocantérica instável agrava o desvio, a dor, o sangramento e o choque hemorrágico.",
      "Está incorreta: garrotes na virilha ocluiriam o fluxo arterial sistémico, provocando isquemia aguda e necrose muscular de todo o membro."
    ],
    "nursingApplication": "O enfermeiro compreende porque as fraturas subcapitais desviadas no idoso requerem artroplastia (prótese) em vez de osteossíntese com parafusos, devido ao risco de necrose óssea."
  },
  {
    "id": 3149,
    "topicId": 3,
    "question": "Um enfermeiro analisa o impacto biomecânico das solicitações mecânicas em 'mecanismo de fratura trocantérica vs fratura subcapital no idoso'. Qual das seguintes afirmações apresenta a análise biofísica correta?",
    "options": [
      "O aporte arterial à cabeça femoral é imune a lesões porque o sangue chega unicamente através de difusão de vapor na cavidade pélvica.",
      "Nas fraturas subcapital do colo, o desvio mecânico rompe os vasos retinaculares da cápsula, privando a cabeça femoral de suprimento.",
      "A fratura pertrocantérica é a que acarreta maior risco de necrose avascular por lesão direta da artéria aorta abdominal proximal.",
      "A necrose avascular é revertida espontaneamente através da colocação de sacos de gelo na virilha para congelar o hematoma da fratura."
    ],
    "correctIndex": 1,
    "explanation": "Sob o ponto de vista físico e mecanicista, Nas fraturas subcapitais com desvio, a rutura mecânica das artérias retinaculares do anel pericervical acarreta alto risco de necrose avascular da cabeça femoral. Isto garante a integridade funcional do aparelho locomotor.",
    "distractorAnalysis": [
      "Está incorreta: a cabeça femoral recebe sangue das artérias circunflexas femorais cujos ramos retinaculares ascendem pelo colo ósseo.",
      "Está incorreta: a artéria aorta não é lesada em fraturas pertrocantéricas isoladas, situando-se no interior do retroperitoneu.",
      "Está incorreta: o tratamento da isquemia cefálica femoral exige fixação anatómica precoce ou substituição por prótese articular."
    ],
    "nursingApplication": "O enfermeiro compreende porque as fraturas subcapitais desviadas no idoso requerem artroplastia (prótese) em vez de osteossíntese com parafusos, devido ao risco de necrose óssea."
  },
  {
    "id": 3150,
    "topicId": 3,
    "question": "Na biofísica do sistema osteomuscular, em relação a 'efeito dos bifosfonatos na microarquitetura e remodelação óssea', qual é a fundamentação científica correta?",
    "options": [
      "Estimulam a destruição total da matriz óssea em quarenta e oito horas para que o esqueleto seja substituído por cartilagem hialina pura.",
      "Aumentam a velocidade de condução nervosa do nervo ciático através da libertação contínua de iões de lítio no líquido sinovial.",
      "Ligam-se à hidroxiapatite inibindo osteoclastos; uso prolongado excessivo pode hipermineralizar o osso, favorecendo fraturas atípicas.",
      "Tornam o osso totalmente flexível e elástico como borracha vulcanizada, eliminando qualquer risco de fratura na velhice humana."
    ],
    "correctIndex": 2,
    "explanation": "Em biofísica osteomuscular, efeito dos bifosfonatos na microarquitetura e remodelação óssea explica-se pelo facto de que fármacos que se fixam fortemente aos cristais de hidroxiapatite e induzem apoptose dos osteoclastos, travando a reabsorção óssea descontrolada. Embora aumentem a densidade mineral, o uso prolongado (>5-10 anos) sem 'férias terapêuticas' pode tornar o osso hipermineralizado e excessivamente rígido, favorecendo fraturas atípicas do fémur.",
    "distractorAnalysis": [
      "Está incorreta: os bifosfonatos reduzem a reabsorção óssea aumentando a densidade, sendo fármacos antirreabsortivos de primeira linha.",
      "Está incorreta: o seu alvo biológico são os osteoclastos e a hidroxiapatite mineral e não a velocidade de condução nervosa ciática.",
      "Está incorreta: a supressão prolongada da renovação óssea pode reduzir a tenacidade e aumentar a fragilidade mecânica do córtex."
    ],
    "nursingApplication": "O enfermeiro ensina a toma correta dos bifosfonatos orais: em jejum absoluto com um copo cheio de água pura, mantendo-se na posição sentada ou em pé durante pelo menos 30 minutos."
  },
  {
    "id": 3151,
    "topicId": 3,
    "question": "Durante a prestação de cuidados de enfermagem a um doente com alterações musculoesqueléticas, como se traduz na prática clínica o conceito de 'efeito dos bifosfonatos na microarquitetura e remodelação óssea'?",
    "options": [
      "Triturar o comprimido e dissolvê-lo em leite quente antes de deitar imediatamente o doente em decúbito dorsal plano.",
      "Administrar o bifosfonato juntamente com antiácidos de cálcio e magnésio para acelerar a absorção intestinal do composto.",
      "Instruir o utente a permanecer imóvel na cama sem qualquer ingestão de água durante as vinte e quatro horas seguintes à toma.",
      "Tomar o fármaco em jejum com água simples e manter o tronco ereto por 30 a 60 minutos, vigiando dores prodrómicas na coxa."
    ],
    "correctIndex": 3,
    "explanation": "A aplicação de enfermagem para efeito dos bifosfonatos na microarquitetura e remodelação óssea baseia-se no princípio biomecânico: O enfermeiro ensina a toma correta dos bifosfonatos orais: em jejum absoluto com um copo cheio de água pura, mantendo-se na posição sentada ou em pé durante pelo menos 30 minutos. Este raciocínio assegura intervenções fundamentadas na física biológica.",
    "distractorAnalysis": [
      "Está incorreta: deitar o doente ou tomar com leite causa refluxo e esofagite grave, além de o cálcio quelar o fármaco.",
      "Está incorreta: antiácidos com cálcio e magnésio bloqueiam quase totalmente a absorção oral dos bifosfonatos.",
      "Está incorreta: a ingestão de um copo cheio de água pura em jejum é indispensável para conduzir o comprimido ao estômago."
    ],
    "nursingApplication": "O enfermeiro ensina a toma correta dos bifosfonatos orais: em jejum absoluto com um copo cheio de água pura, mantendo-se na posição sentada ou em pé durante pelo menos 30 minutos."
  },
  {
    "id": 3152,
    "topicId": 3,
    "question": "Um enfermeiro analisa o impacto biomecânico das solicitações mecânicas em 'efeito dos bifosfonatos na microarquitetura e remodelação óssea'. Qual das seguintes afirmações apresenta a análise biofísica correta?",
    "options": [
      "A hipermineralização e supressão da remodelação a longo prazo aumentam a rigidez e favorecem fraturas atípicas na cortical lateral.",
      "Os bifosfonatos dissolvem todo o osso cortical em dois meses, transformando a diáfise femoral num tubo puramente cartilagíneo.",
      "O fármaco elimina completamente qualquer atrito articular, permitindo que a cabeça femoral rode sem apoio no acetábulo.",
      "O osso sob bifosfonatos torna-se imune a qualquer tipo de fratura ao longo de toda a vida humana sem necessidade de pausas."
    ],
    "correctIndex": 0,
    "explanation": "Sob o ponto de vista físico e mecanicista, Embora aumentem a densidade mineral, o uso prolongado (>5-10 anos) sem 'férias terapêuticas' pode tornar o osso hipermineralizado e excessivamente rígido, favorecendo fraturas atípicas do fémur. Isto garante a integridade funcional do aparelho locomotor.",
    "distractorAnalysis": [
      "Está incorreta: os bifosfonatos aumentam a densidade mineral e não dissolvem a matriz cortical ou o osso são.",
      "Está incorreta: o alvo molecular é o osteoclasto no osso e não a lubrificação do líquido sinovial articular da anca.",
      "Está incorreta: o uso muito prolongado (>5 anos) sem férias terapêuticas pode predispor a microfissuras e fraturas subtrocantéricas."
    ],
    "nursingApplication": "O enfermeiro ensina a toma correta dos bifosfonatos orais: em jejum absoluto com um copo cheio de água pura, mantendo-se na posição sentada ou em pé durante pelo menos 30 minutos."
  },
  {
    "id": 3153,
    "topicId": 3,
    "question": "Na biofísica do sistema osteomuscular, em relação a 'protetores trocantéricos acolchoados na prevenção de fraturas', qual é a fundamentação científica correta?",
    "options": [
      "Hastes metálicas externas aparafusadas ao grande trocânter que transmitem as ondas de choque diretamente para o colo do fémur.",
      "Dispositivos têxteis com almofadas que dispersam a força do impacto na queda pelos tecidos moles, reduzindo o pico de pressão no trocânter.",
      "Mangas de chumbo pesado que imobilizam totalmente as duas ancas para impedir que o doente consiga levantar-se da cadeira de rodas.",
      "Faixas elásticas condutoras que emitem choques elétricos contínuos na pele para amortecer a atração gravítica durante o desequilíbrio."
    ],
    "correctIndex": 1,
    "explanation": "Em biofísica osteomuscular, protetores trocantéricos acolchoados na prevenção de fraturas explica-se pelo facto de que dispositivos têxteis colocados sobre os quadris com almofadas elastoméricas que dissipam a energia do impacto de uma queda lateral sobre os tecidos moles circundantes. Reduzem a força de pico transmitida diretamente ao trocânter maior para valores abaixo do limiar de fratura do colo femoral osteoporótico.",
    "distractorAnalysis": [
      "Está incorreta: os protetores trocantéricos são acolchoados externos não invasivos e visam justamente desviar a energia do colo.",
      "Está incorreta: placas pesadas de chumbo causariam imobilidade e lesões cutâneas sem benefício na absorção do impacto da queda.",
      "Está incorreta: os dispositivos funcionam por deformação viscoelástica e distribuição de pressão e não por estimulação elétrica."
    ],
    "nursingApplication": "O enfermeiro avalia a adesão e o conforto no uso de protetores de anca em utentes institucionalizados com demência e marcha instável com risco elevado de queda."
  },
  {
    "id": 3154,
    "topicId": 3,
    "question": "Durante a prestação de cuidados de enfermagem a um doente com alterações musculoesqueléticas, como se traduz na prática clínica o conceito de 'protetores trocantéricos acolchoados na prevenção de fraturas'?",
    "options": [
      "Colocar o protetor trocantérico na região dos joelhos para evitar que os meniscos sofram luxação espontânea durante o sono.",
      "Proibir o uso de protetores trocantéricos porque a almofada elástica aumenta a força de impacto na cabeça do fémur em dez vezes.",
      "Avaliar o posicionamento correto sobre o trocânter e a adesão do utente, promovendo o seu uso em idosos com alto risco de queda.",
      "Instruir o idoso a deitar-se sobre o chão rígido várias vezes ao dia para testar a resistência das espumas do protetor de anca."
    ],
    "correctIndex": 2,
    "explanation": "A aplicação de enfermagem para protetores trocantéricos acolchoados na prevenção de fraturas baseia-se no princípio biomecânico: O enfermeiro avalia a adesão e o conforto no uso de protetores de anca em utentes institucionalizados com demência e marcha instável com risco elevado de queda. Este raciocínio assegura intervenções fundamentadas na física biológica.",
    "distractorAnalysis": [
      "Está incorreta: o protetor deve assentar diretamente sobre o grande trocânter femoral e não sobre a articulação do joelho.",
      "Está incorreta: evidências clínicas comprovam a redução da incidência de fraturas da anca em idosos institucionalizados aderentes.",
      "Está incorreta: testar quedas repetidas deliberadas expõe o idoso a traumatismos cranianos e lesões graves desnecessárias."
    ],
    "nursingApplication": "O enfermeiro avalia a adesão e o conforto no uso de protetores de anca em utentes institucionalizados com demência e marcha instável com risco elevado de queda."
  },
  {
    "id": 3155,
    "topicId": 3,
    "question": "Um enfermeiro analisa o impacto biomecânico das solicitações mecânicas em 'protetores trocantéricos acolchoados na prevenção de fraturas'. Qual das seguintes afirmações apresenta a análise biofísica correta?",
    "options": [
      "Anulam a aceleração gravitacional local da Terra no momento exato em que a bacia do doente colide contra o pavimento.",
      "Convertem a energia mecânica do impacto em impulsos luminosos que estimulam a regeneração celular imediata dos osteócitos.",
      "Impedem que o fémur receba qualquer fluxo de sangue durante a queda para evitar hematomas volumosos no plano muscular.",
      "Reduzem a força de pico abaixo do limiar de fratura do osso senil através do aumento da área de contacto e dissipação de energia."
    ],
    "correctIndex": 3,
    "explanation": "Sob o ponto de vista físico e mecanicista, Reduzem a força de pico transmitida diretamente ao trocânter maior para valores abaixo do limiar de fratura do colo femoral osteoporótico. Isto garante a integridade funcional do aparelho locomotor.",
    "distractorAnalysis": [
      "Está incorreta: o protetor atenua e distribui a força no plano físico mecânico (P = F/A) sem interferir com a gravidade planetária.",
      "Está incorreta: a energia é absorvida pela histerese da espuma ou casca rígida e dissipada em calor e não em radiação de luz.",
      "Está incorreta: o dispositivo atua na superfície externa e não interfere com a circulação arterial femoral profunda."
    ],
    "nursingApplication": "O enfermeiro avalia a adesão e o conforto no uso de protetores de anca em utentes institucionalizados com demência e marcha instável com risco elevado de queda."
  },
  {
    "id": 3156,
    "topicId": 3,
    "question": "Na biofísica do sistema osteomuscular, em relação a 'reversão acelerada da Lei de Wolff no decúbito dorsal estrito', qual é a fundamentação científica correta?",
    "options": [
      "A perda de massa óssea no repouso é muito mais rápida do que a sua recuperação na remobilização, exigindo prevenção do desuso.",
      "O osso recupera toda a massa mineral perdida em apenas vinte e quatro horas logo após o primeiro passo dado na enfermaria.",
      "A remobilização precoce destrói permanentemente o calo ósseo através da indução de osteólise por excesso de oxigenação arterial.",
      "O repouso no leito durante anos aumenta a densidade mineral do esqueleto através da deposição contínua de cristais de quartzo."
    ],
    "correctIndex": 0,
    "explanation": "Em biofísica osteomuscular, reversão acelerada da Lei de Wolff no decúbito dorsal estrito explica-se pelo facto de que na ausência da carga gravitacional axial, a reabsorção óssea supera a formação, perdendo-se tanta massa óssea em 1 mês de leito como num ano de envelhecimento normal. A falta de forças de contração muscular remove o sinal biofísico de mecanotransdução, acelerando a perda de matriz e a fraqueza cortical.",
    "distractorAnalysis": [
      "Está incorreta: a remineralização é lenta (leva meses), ao passo que a desmineralização por desuso ocorre em poucas semanas.",
      "Está incorreta: a carga mecânica estimula a osteogénese e a consolidação do calo e não a sua destruição por oxigénio.",
      "Está incorreta: a imobilização no leito induz osteopenia por desuso e perda acelerada de cálcio mineral segundo a Lei de Wolff."
    ],
    "nursingApplication": "O enfermeiro prioriza planos de verticalização precoce e levante orientado para o cadeirão desde o primeiro dia de estabilidade clínica do doente."
  },
  {
    "id": 3157,
    "topicId": 3,
    "question": "Durante a prestação de cuidados de enfermagem a um doente com alterações musculoesqueléticas, como se traduz na prática clínica o conceito de 'reversão acelerada da Lei de Wolff no decúbito dorsal estrito'?",
    "options": [
      "Manter o doente cirúrgico deitado na mesma posição durante um mês para garantir que nenhum osso receba estímulo mecânico.",
      "Priorizar o levante precoce e mobilização ativa progressiva no pós-operatório para travar a desmineralização e a atrofia muscular.",
      "Prescrever sedação contínua para impedir qualquer movimento voluntário dos membros inferiores nos primeiros três meses da alta.",
      "Proibir que os pés do doente toquem no chão durante a fisioterapia para evitar a ativação dos potenciais de streaming ósseos."
    ],
    "correctIndex": 1,
    "explanation": "A aplicação de enfermagem para reversão acelerada da Lei de Wolff no decúbito dorsal estrito baseia-se no princípio biomecânico: O enfermeiro prioriza planos de verticalização precoce e levante orientado para o cadeirão desde o primeiro dia de estabilidade clínica do doente. Este raciocínio assegura intervenções fundamentadas na física biológica.",
    "distractorAnalysis": [
      "Está incorreta: o levante e marcha precoces previnem a perda óssea, o tromboembolismo venoso e o declínio funcional global.",
      "Está incorreta: a imobilização forçada prolongada debilita gravemente o sistema musculoesquelético e cardiovascular do doente.",
      "Está incorreta: o estímulo do apoio podal e a carga controlada ativam as vias anabólicas osteocitárias fundamentais."
    ],
    "nursingApplication": "O enfermeiro prioriza planos de verticalização precoce e levante orientado para o cadeirão desde o primeiro dia de estabilidade clínica do doente."
  },
  {
    "id": 3158,
    "topicId": 3,
    "question": "Um enfermeiro analisa o impacto biomecânico das solicitações mecânicas em 'reversão acelerada da Lei de Wolff no decúbito dorsal estrito'. Qual das seguintes afirmações apresenta a análise biofísica correta?",
    "options": [
      "Os osteoblastos duplicam de velocidade de síntese na ausência total de gravidade, produzindo osso sem necessidade de cálcio.",
      "A falta de esforço físico elimina os canais vasculares dos ossos, transformando o esqueleto num bloco acelular impermeável.",
      "A ausência de forças mecânicas acelera a reabsorção por osteoclastos, enquanto a aposição por osteoblastos requer meses de estímulo.",
      "O tecido ósseo é o único órgão humano que não sofre qualquer alteração morfológica ou biológica sob repouso prolongado."
    ],
    "correctIndex": 2,
    "explanation": "Sob o ponto de vista físico e mecanicista, A falta de forças de contração muscular remove o sinal biofísico de mecanotransdução, acelerando a perda de matriz e a fraqueza cortical. Isto garante a integridade funcional do aparelho locomotor.",
    "distractorAnalysis": [
      "Está incorreta: a desmineralização osteoclástica sobrepõe-se à síntese quando cessa a carga mecânica de acordo com a Lei de Wolff.",
      "Está incorreta: a vascularização mantém-se e o osso responde dinamicamente com perda de espessura cortical e trabecular.",
      "Está incorreta: o tecido ósseo é extremamente dinâmico e sofre atrofia por desuso de forma rápida e clinicamente documentada."
    ],
    "nursingApplication": "O enfermeiro prioriza planos de verticalização precoce e levante orientado para o cadeirão desde o primeiro dia de estabilidade clínica do doente."
  },
  {
    "id": 3159,
    "topicId": 3,
    "question": "Na biofísica do sistema osteomuscular, em relação a 'hipercalciúria de imobilização e formação de litíase renal', qual é a fundamentação científica correta?",
    "options": [
      "A perda de cálcio ósseo é eliminada exclusivamente através do suor cutâneo sem qualquer passagem pelos rins do doente acamado.",
      "O cálcio libertado na corrente sanguínea transforma-se espontaneamente em ferro metálico no interior da bexiga urinária.",
      "A imobilização no leito reduz os níveis de cálcio na urina para zero, eliminando qualquer risco de litíase renal no doente.",
      "O cálcio mobilizado da matriz óssea reabsorvida sobrecarrega a filtração glomerular, predispondo à formação de cálculos urinários."
    ],
    "correctIndex": 3,
    "explanation": "Em biofísica osteomuscular, hipercalciúria de imobilização e formação de litíase renal explica-se pelo facto de que o cálcio massivamente mobilizado da matriz óssea reabsorvida é filtrado nos glomérulos e satura os túbulos renais. A precipitação de oxalato e fosfato de cálcio na urina estagnada da bexiga em decúbito dorsal favorece infeções urinárias e cálculos nos rins e bexiga.",
    "distractorAnalysis": [
      "Está incorreta: a hipercalciúria de imobilização é renal e constitui um fator de risco major para nefrolitíase em doentes no leito.",
      "Está incorreta: os elementos químicos mantêm a sua identidade atómica no metabolismo celular, não havendo transmutação em ferro.",
      "Está incorreta: a reabsorção óssea descontrolada eleva marcadamente a excreção urinária de cálcio (hipercalciúria)."
    ],
    "nursingApplication": "O enfermeiro monitoriza o balanço hídrico, incentiva a ingestão abundante de água e vigia queixas de cólica renal ou hematúria no doente acamado crónico."
  },
  {
    "id": 3160,
    "topicId": 3,
    "question": "Durante a prestação de cuidados de enfermagem a um doente com alterações musculoesqueléticas, como se traduz na prática clínica o conceito de 'hipercalciúria de imobilização e formação de litíase renal'?",
    "options": [
      "Assegurar hidratação adequada para diluir o filtrado urinário e prevenir a nefrolitíase em doentes imobilizados por tempo prolongado.",
      "Restringir a água a menos de duzentos mililitros diários para evitar que a urina elimine os minerais necessários ao esqueleto.",
      "Incentivar o consumo de suplementos de cálcio em megadoses em doentes totalmente imóveis para forçar a remineralização no leito.",
      "Administrar diuréticos de ansa de alta potência a todos os doentes acamados para esvaziar a bexiga a cada dez minutos contínuos."
    ],
    "correctIndex": 0,
    "explanation": "A aplicação de enfermagem para hipercalciúria de imobilização e formação de litíase renal baseia-se no princípio biomecânico: O enfermeiro monitoriza o balanço hídrico, incentiva a ingestão abundante de água e vigia queixas de cólica renal ou hematúria no doente acamado crónico. Este raciocínio assegura intervenções fundamentadas na física biológica.",
    "distractorAnalysis": [
      "Está incorreta: a desidratação concentra o cálcio na urina, acelerando a nucleação e precipitação de cálculos de fosfato e oxalato.",
      "Está incorreta: sobrecarregar com cálcio oral um doente acamado agravaria a hipercalcemia e a hipercalciúria sem fixar osso.",
      "Está incorreta: diuréticos desnecessários causariam hipovolemia, hipotensão ortostática e distúrbios hidroelétricos graves."
    ],
    "nursingApplication": "O enfermeiro monitoriza o balanço hídrico, incentiva a ingestão abundante de água e vigia queixas de cólica renal ou hematúria no doente acamado crónico."
  },
  {
    "id": 3161,
    "topicId": 3,
    "question": "Um enfermeiro analisa o impacto biomecânico das solicitações mecânicas em 'hipercalciúria de imobilização e formação de litíase renal'. Qual das seguintes afirmações apresenta a análise biofísica correta?",
    "options": [
      "A urina ácida de imobilização dissolve permanentemente os ureteres através de uma reação exotérmica de alta intensidade.",
      "A estase urinária e a elevada concentração de cálcio e fosfato na urina favorecem a nucleação e formação de cálculos renais.",
      "A precipitação de cálcio nos rins converte o parênquima renal em osso cortical funcional com capacidade de sustentação motora.",
      "A hipercalciúria protege as vias urinárias contra infeções ao transformar as bactérias em cristais minerais inofensivos."
    ],
    "correctIndex": 1,
    "explanation": "Sob o ponto de vista físico e mecanicista, A precipitação de oxalato e fosfato de cálcio na urina estagnada da bexiga em decúbito dorsal favorece infeções urinárias e cálculos nos rins e bexiga. Isto garante a integridade funcional do aparelho locomotor.",
    "distractorAnalysis": [
      "Está incorreta: o sedimento urinário com excesso de cálcio e estase vesical predispõe à litíase cálcica e infeções urinárias.",
      "Está incorreta: a litíase lesa os túbulos renais por obstrução e inflamação e não por ossificação funcional da via excretora.",
      "Está incorreta: os cálculos renais favorecem a proliferação bacteriana e urosepse, necessitando de prevenção e hidratação."
    ],
    "nursingApplication": "O enfermeiro monitoriza o balanço hídrico, incentiva a ingestão abundante de água e vigia queixas de cólica renal ou hematúria no doente acamado crónico."
  },
  {
    "id": 3162,
    "topicId": 3,
    "question": "Na biofísica do sistema osteomuscular, em relação a 'rigidez articular e retração capsular por estase de colagénio', qual é a fundamentação científica correta?",
    "options": [
      "A cápsula articular ganha complacência infinita quando imobilizada, permitindo que a articulação se desloque sem qualquer resistência.",
      "O líquido sinovial evapora instantaneamente logo após a colocação de uma tala gessada, sendo substituído por vácuo absoluto.",
      "A imobilização articular prolongada induz proliferação de tecido conjuntivo denso e perda de água com formação de aderências capsulares.",
      "A falta de movimento faz com que a cartilagem hialina se transforme em osso esponjoso vascularizado em menos de doze horas."
    ],
    "correctIndex": 2,
    "explanation": "Em biofísica osteomuscular, rigidez articular e retração capsular por estase de colagénio explica-se pelo facto de que a imobilização de uma articulação por mais de 3 semanas induz proliferação desorganizada de fibras de colagénio na cápsula e ligamentos (cross-linking aberrante). Isto reduz a complacência elástica da cápsula articular, gerando dor mecânica intensa e perda definitiva de graus de amplitude de movimento (artrofibrose).",
    "distractorAnalysis": [
      "Está incorreta: a imobilização reduz a flexibilidade elástica e provoca retração capsular fibrótica com perda de amplitude articular.",
      "Está incorreta: o líquido sinovial não desaparece por evaporação no gesso, mantendo-se a cavidade articular preenchida e húmida.",
      "Está incorreta: a cartilagem hialina perde proteoglicanos e adelgaça sob imobilização, mas não sofre transmutação óssea em 12 horas."
    ],
    "nursingApplication": "O enfermeiro executa mobilizações articulares passivas e ativas-assistidas em todas as articulações dos doentes com défice neurológico ou sedados em UCI."
  },
  {
    "id": 3163,
    "topicId": 3,
    "question": "Durante a prestação de cuidados de enfermagem a um doente com alterações musculoesqueléticas, como se traduz na prática clínica o conceito de 'rigidez articular e retração capsular por estase de colagénio'?",
    "options": [
      "Forçar a extensão violenta de uma articulação retraída com pesos de tração repentinos de trinta quilos sem aquecimento prévio.",
      "Manter todas as articulações dos membros permanentemente imobilizadas em flexão máxima para poupar a energia dos tendões.",
      "Proibir qualquer fisioterapia motora após a retirada do gesso para evitar que as fibras de colagénio da cápsula se movam.",
      "Executar mobilização passiva suave precoce e posicionamento funcional das articulações não imobilizadas para prevenir a rigidez."
    ],
    "correctIndex": 3,
    "explanation": "A aplicação de enfermagem para rigidez articular e retração capsular por estase de colagénio baseia-se no princípio biomecânico: O enfermeiro executa mobilizações articulares passivas e ativas-assistidas em todas as articulações dos doentes com défice neurológico ou sedados em UCI. Este raciocínio assegura intervenções fundamentadas na física biológica.",
    "distractorAnalysis": [
      "Está incorreta: manobras forçadas intempestivas provocam roturas capsulares, hemartrose e ossificação heterotópica secundária.",
      "Está incorreta: o posicionamento em flexão máxima induz contraturas viciosas graves em flexão e incapacidade funcional da marcha.",
      "Está incorreta: a reabilitação funcional progressiva é fundamental para recuperar a amplitude e remodelação das fibras colágenas."
    ],
    "nursingApplication": "O enfermeiro executa mobilizações articulares passivas e ativas-assistidas em todas as articulações dos doentes com défice neurológico ou sedados em UCI."
  },
  {
    "id": 3164,
    "topicId": 3,
    "question": "Um enfermeiro analisa o impacto biomecânico das solicitações mecânicas em 'rigidez articular e retração capsular por estase de colagénio'. Qual das seguintes afirmações apresenta a análise biofísica correta?",
    "options": [
      "Reduz a complacência elástica da cápsula e ligamentos através de ligações cruzadas aleatórias de colagénio que limitam a mobilidade.",
      "Aumenta a elasticidade capsular em trezentos por cento, tornando a articulação imobilizada extremamente laxa e instável no leito.",
      "Substitui a membrana sinovial por placas cerâmicas de hidroxiapatite que impedem o fluxo de qualquer nutriente para a cartilagem.",
      "Elimina todo o atrito articular através da liquefação permanente de todos os componentes proteicos da matriz extracelular."
    ],
    "correctIndex": 0,
    "explanation": "Sob o ponto de vista físico e mecanicista, Isto reduz a complacência elástica da cápsula articular, gerando dor mecânica intensa e perda definitiva de graus de amplitude de movimento (artrofibrose). Isto garante a integridade funcional do aparelho locomotor.",
    "distractorAnalysis": [
      "Está incorreta: a formação desordenada de pontes cruzadas no colagénio capsular reduz a flexibilidade e aumenta a rigidez tecidual.",
      "Está incorreta: a cápsula imobilizada sofre fibrose e espessamento conjuntivo denso e não calcificação cerâmica generalizada.",
      "Está incorreta: a perda de mobilidade compromete a lubrificação hidrodinâmica, aumentando o atrito articular e a dor."
    ],
    "nursingApplication": "O enfermeiro executa mobilizações articulares passivas e ativas-assistidas em todas as articulações dos doentes com défice neurológico ou sedados em UCI."
  },
  {
    "id": 3165,
    "topicId": 3,
    "question": "Na biofísica do sistema osteomuscular, em relação a 'encurtamento muscular e contraturas em flexão (flexion contractures)', qual é a fundamentação científica correta?",
    "options": [
      "O músculo encurtado duplica o número de sarcómeros em série para compensar a diminuição da distância anatómica entre as inserções.",
      "Músculos fixos em posição encurtada perdem sarcómeros em série e desenvolvem fibrose no perimísio, gerando contratura estrutural.",
      "As fibras musculares transformam-se espontaneamente em filamentos condutores de eletricidade estática que impedem a dor tecidual.",
      "O encurtamento muscular aumenta o rendimento mecânico de trabalho em cinquenta por cento, tornando a marcha muito mais rápida."
    ],
    "correctIndex": 1,
    "explanation": "Em biofísica osteomuscular, encurtamento muscular e contraturas em flexão (flexion contractures) explica-se pelo facto de que músculos imobilizados em posição encurtada (como joelhos e quadris dobrados na cama) perdem sarcómeros em série ao longo dos miofilamentos. Ocorre substituição do tecido muscular por tecido conjuntivo fibroso inextensível, fixando a articulação numa atitude viciosa irreversível.",
    "distractorAnalysis": [
      "Está incorreta: a imobilização em encurtamento provoca a reabsorção de sarcómeros em série e proliferação conjuntiva inelástica.",
      "Está incorreta: o tecido muscular imobilizado perde massa e sarcómeros (atrofia estrutural) e não ganha filamentos elétricos anómalos.",
      "Está incorreta: a contratura muscular restringe a amplitude de movimento articular, prejudicando severamente a marcha e postura."
    ],
    "nursingApplication": "O enfermeiro mantém os membros inferiores alinhados em extensão funcional com coxins de posicionamento adequados, evitando o uso prolongado de almofadas sob os joelhos."
  },
  {
    "id": 3166,
    "topicId": 3,
    "question": "Durante a prestação de cuidados de enfermagem a um doente com alterações musculoesqueléticas, como se traduz na prática clínica o conceito de 'encurtamento muscular e contraturas em flexão (flexion contractures)'?",
    "options": [
      "Colocar três almofadas volumosas sob os joelhos dia e noite para garantir que a articulação permaneça em flexão de noventa graus.",
      "Amarrar os pés do doente em flexão plantar extrema contínua para esticar permanentemente as fibras do músculo quadricípete.",
      "Manter o alinhamento postural em extensão neutra no leito, evitando almofadas poplíteas contínuas que perpetuam a flexão do joelho.",
      "Incentivar o doente com AVC a manter o membro parético em flexão forçada no leito para acelerar a recuperação da força motora."
    ],
    "correctIndex": 2,
    "explanation": "A aplicação de enfermagem para encurtamento muscular e contraturas em flexão (flexion contractures) baseia-se no princípio biomecânico: O enfermeiro mantém os membros inferiores alinhados em extensão funcional com coxins de posicionamento adequados, evitando o uso prolongado de almofadas sob os joelhos. Este raciocínio assegura intervenções fundamentadas na física biológica.",
    "distractorAnalysis": [
      "Está incorreta: manter almofadas sob os joelhos de forma permanente induz contratura em flexão do joelho e anca, impedindo a marcha.",
      "Está incorreta: a flexão plantar contínua provoca encurtamento do tendão de Aquiles e tríceps sural, originando pé equino deformado.",
      "Está incorreta: o padrão espástico em flexão no doente neurológico deve ser prevenido com posicionamentos funcionais e orteses."
    ],
    "nursingApplication": "O enfermeiro mantém os membros inferiores alinhados em extensão funcional com coxins de posicionamento adequados, evitando o uso prolongado de almofadas sob os joelhos."
  },
  {
    "id": 3167,
    "topicId": 3,
    "question": "Um enfermeiro analisa o impacto biomecânico das solicitações mecânicas em 'encurtamento muscular e contraturas em flexão (flexion contractures)'. Qual das seguintes afirmações apresenta a análise biofísica correta?",
    "options": [
      "O tecido muscular ganha novas unidades contráteis que se fundem covalentemente com a placa óssea do fémur subjacente.",
      "A atrofia em encurtamento transforma o músculo num órgão puramente elástico que recupera a forma original em menos de um segundo.",
      "As miofibrilhas convertem-se em tecido adiposo vascularizado que quadruplica a força isométrica voluntária desenvolvida na coxa.",
      "Ocorre perda adaptativa de sarcómeros nas extremidades das miofibrilhas e proliferação de colagénio inelástico no epimísio e perimísio."
    ],
    "correctIndex": 3,
    "explanation": "Sob o ponto de vista físico e mecanicista, Ocorre substituição do tecido muscular por tecido conjuntivo fibroso inextensível, fixando a articulação numa atitude viciosa irreversível. Isto garante a integridade funcional do aparelho locomotor.",
    "distractorAnalysis": [
      "Está incorreta: a perda de sarcómeros em série reduz o comprimento ótimo (L₀) e a amplitude funcional da contração ativa do músculo.",
      "Está incorreta: o músculo com contratura perde elasticidade complacente, tornando-se rígido e resistente ao alongamento passivo.",
      "Está incorreta: a infiltração de gordura e tecido fibroso enfraquece o músculo e diminui a força de contração ativa gerada."
    ],
    "nursingApplication": "O enfermeiro mantém os membros inferiores alinhados em extensão funcional com coxins de posicionamento adequados, evitando o uso prolongado de almofadas sob os joelhos."
  },
  {
    "id": 3168,
    "topicId": 3,
    "question": "Na biofísica do sistema osteomuscular, em relação a 'bomba muscular gemelar e retorno venoso durante a marcha', qual é a fundamentação científica correta?",
    "options": [
      "A contração dos gémeos eleva a pressão intramuscular e comprime as veias profundas, impulsionando o sangue contra as válvulas venosas.",
      "Os gémeos atuam como elementos puramente passivos que retêm o sangue nas pernas para impedir que o coração sofra sobrecarga de volume.",
      "A contração muscular da perna empurra o sangue venoso no sentido descendente em direção aos capilares dos dedos do pé do doente.",
      "A bomba dos gémeos funciona unicamente quando o membro inferior é mantido em suspensão mecânica sem qualquer contacto com o solo."
    ],
    "correctIndex": 0,
    "explanation": "Em biofísica osteomuscular, bomba muscular gemelar e retorno venoso durante a marcha explica-se pelo facto de que a contração mecânica dos gémeos espreme as veias profundas da perna contra a fáscia inelástica, impulsionando o sangue para o coração contra a gravidade. Na imobilização no leito, a paragem da bomba muscular origina estase venosa profunda, um dos pilares da tríade de Virchow para o tromboembolismo venoso (TEV).",
    "distractorAnalysis": [
      "Está incorreta: a bomba muscular gemelar é o principal motor do retorno venoso da perna, vencendo a gravidade em direção ao coração.",
      "Está incorreta: as válvulas venosas unidirecionais asseguram que o fluxo sanguíneo progrida apenas no sentido proximal ascendente.",
      "Está incorreta: a bomba atua tanto no apoio da marcha como na dorsiflexão ativa e passiva do tornozelo no leito hospitalar."
    ],
    "nursingApplication": "O enfermeiro aplica meias elásticas de compressão graduada, sistemas de compressão pneumática intermitente e administra rigorosamente a heparina de baixo peso molecular profilática."
  },
  {
    "id": 3169,
    "topicId": 3,
    "question": "Durante a prestação de cuidados de enfermagem a um doente com alterações musculoesqueléticas, como se traduz na prática clínica o conceito de 'bomba muscular gemelar e retorno venoso durante a marcha'?",
    "options": [
      "Manter os pés totalmente imóveis com sacos de areia laterais pesados para impedir qualquer contração muscular da perna no leito.",
      "Incentivar a dorsiflexão e flexão plantar ativa frequente dos pés no leito, associando compressão pneumática intermitente se prescrita.",
      "Colocar ligaduras inelásticas apertadas exclusivamente à volta do joelho para bloquear o sangue venoso na fossa poplítea do doente.",
      "Prescrever o repouso absoluto sem qualquer movimento articular nos membros inferiores durante todo o internamento hospitalar."
    ],
    "correctIndex": 1,
    "explanation": "A aplicação de enfermagem para bomba muscular gemelar e retorno venoso durante a marcha baseia-se no princípio biomecânico: O enfermeiro aplica meias elásticas de compressão graduada, sistemas de compressão pneumática intermitente e administra rigorosamente a heparina de baixo peso molecular profilática. Este raciocínio assegura intervenções fundamentadas na física biológica.",
    "distractorAnalysis": [
      "Está incorreta: a imobilização dos pés e ausência de contração gemelar induzem estase venosa profunda e risco extremo de trombose.",
      "Está incorreta: garrotear a fossa poplítea provocaria estase retrógrada massiva, edema grave e trombose venosa poplítea iatrogénica.",
      "Está incorreta: a mobilização ativa e passiva dos pés e pernas é uma intervenção de enfermagem profilática essencial e segura."
    ],
    "nursingApplication": "O enfermeiro aplica meias elásticas de compressão graduada, sistemas de compressão pneumática intermitente e administra rigorosamente a heparina de baixo peso molecular profilática."
  },
  {
    "id": 3170,
    "topicId": 3,
    "question": "Um enfermeiro analisa o impacto biomecânico das solicitações mecânicas em 'bomba muscular gemelar e retorno venoso durante a marcha'. Qual das seguintes afirmações apresenta a análise biofísica correta?",
    "options": [
      "O sangue venoso acelera a sua velocidade para o triplo na ausência de contração muscular, prevenindo a formação de coágulos na perna.",
      "A inativação da bomba muscular anula a viscosidade sanguínea, convertendo o plasma num fluido puramente newtoniano ideal.",
      "Na imobilização, a ausência de bombeamento muscular provoca estase venosa e acúmulo de sangue desoxigenado, elevando o risco de trombose.",
      "O repouso no leito provoca a dissolução química imediata de todas as plaquetas e proteínas de coagulação da circulação venosa."
    ],
    "correctIndex": 2,
    "explanation": "Sob o ponto de vista físico e mecanicista, Na imobilização no leito, a paragem da bomba muscular origina estase venosa profunda, um dos pilares da tríade de Virchow para o tromboembolismo venoso (TEV). Isto garante a integridade funcional do aparelho locomotor.",
    "distractorAnalysis": [
      "Está incorreta: a estase venosa (estagnação de fluxo) compõe a clássica Tríade de Virchow para a formação de trombos venosos.",
      "Está incorreta: em regimes de baixa velocidade e estase a viscosidade aparente do sangue aumenta pela agregação de hemácias.",
      "Está incorreta: a cascata de coagulação mantém-se ativa e a estase local favorece a deposição de fibrina e formação de trombos."
    ],
    "nursingApplication": "O enfermeiro aplica meias elásticas de compressão graduada, sistemas de compressão pneumática intermitente e administra rigorosamente a heparina de baixo peso molecular profilática."
  },
  {
    "id": 3171,
    "topicId": 3,
    "question": "Na biofísica do sistema osteomuscular, em relação a 'propriedade viscoelástica de fluência (creep) em ligamentos', qual é a fundamentação científica correta?",
    "options": [
      "O ligamento deforma-se instantaneamente no primeiro segundo e nunca mais altera o seu comprimento sob nenhuma circunstância temporal.",
      "A tração prolongada faz com que o ligamento encolha ativamente contra a força aplicada através da combustão térmica de proteoglicanos.",
      "O tecido ligamentar perde toda a sua água em três segundos, transformando-se numa haste metálica de rigidez infinita e indelével.",
      "Sob força de tração constante mantida no tempo, o ligamento sofre deformação progressiva contínua (fluência ou creep viscoelástico)."
    ],
    "correctIndex": 3,
    "explanation": "Em biofísica osteomuscular, propriedade viscoelástica de fluência (creep) em ligamentos explica-se pelo facto de que quando um ligamento é sujeito a uma força de tração constante e mantida ao longo do tempo, o seu comprimento continua a aumentar progressivamente. Esta deformação contínua dependente do tempo reflete o rearranjo molecular lento das cadeias de colagénio e a expulsão de água intersticial.",
    "distractorAnalysis": [
      "Está incorreta: materiais viscoelásticos reais exibem aumento gradual da deformação sob tensão constante ao longo do tempo (creep).",
      "Está incorreta: tecidos biológicos passivos não realizam contração ativa autónoma contra trações mecânicas externas contínuas.",
      "Está incorreta: o ligamento permanece hidratado e maleável, deformando-se progressivamente por rearranjo das fibras colágenas."
    ],
    "nursingApplication": "O enfermeiro utiliza talas dinâmicas e posicionamentos mantidos graduais para vencer contraturas articulares fibrosadas aproveitando o fenómeno biofísico de fluência."
  },
  {
    "id": 3172,
    "topicId": 3,
    "question": "Durante a prestação de cuidados de enfermagem a um doente com alterações musculoesqueléticas, como se traduz na prática clínica o conceito de 'propriedade viscoelástica de fluência (creep) em ligamentos'?",
    "options": [
      "Utilizar o princípio da fluência mecânica no posicionamento e uso de orteses seriadas para ganhar amplitude articular de forma gradual.",
      "Aplicar forças de tração extremas repentinas para esticar ligamentos retraídos em menos de um segundo sem qualquer progressão.",
      "Considerar que a deformação tecidual é instantânea e que nenhuma ortese precisa de ser ajustada ao longo das semanas de tratamento.",
      "Manter as correias das orteses frouxas e desajustadas porque a fluência mecânica não atua nos tecidos moles do corpo humano."
    ],
    "correctIndex": 0,
    "explanation": "A aplicação de enfermagem para propriedade viscoelástica de fluência (creep) em ligamentos baseia-se no princípio biomecânico: O enfermeiro utiliza talas dinâmicas e posicionamentos mantidos graduais para vencer contraturas articulares fibrosadas aproveitando o fenómeno biofísico de fluência. Este raciocínio assegura intervenções fundamentadas na física biológica.",
    "distractorAnalysis": [
      "Está incorreta: forças bruscas de alta intensidade provocam lacerações estruturais e dor, enquanto a carga suave contínua alonga por creep.",
      "Está incorreta: a resposta lenta de fluência exige reajustes periódicos das orteses para continuar a remodelar as fibras capsulares.",
      "Está incorreta: a aplicação correta e calibrada de trações mecânicas baseia-se diretamente nas propriedades viscoelásticas de creep."
    ],
    "nursingApplication": "O enfermeiro utiliza talas dinâmicas e posicionamentos mantidos graduais para vencer contraturas articulares fibrosadas aproveitando o fenómeno biofísico de fluência."
  },
  {
    "id": 3173,
    "topicId": 3,
    "question": "Um enfermeiro analisa o impacto biomecânico das solicitações mecânicas em 'propriedade viscoelástica de fluência (creep) em ligamentos'. Qual das seguintes afirmações apresenta a análise biofísica correta?",
    "options": [
      "A fluência decorre da perda de átomos de carbono da matriz proteica que se evaporam no ar condicionado da sala de enfermagem.",
      "A reorganização temporal das fibras de colagénio e o deslocamento de água na matriz permitem alongamento progressivo e seguro.",
      "O alongamento progressivo traduz a fratura microscópica contínua de todas as células teciduais que nunca mais recuperam a função.",
      "A fluência mecânica atua exclusivamente em fluidos gasosos rarefeitos e não tem qualquer relação com ligamentos ou tendões humanos."
    ],
    "correctIndex": 1,
    "explanation": "Sob o ponto de vista físico e mecanicista, Esta deformação contínua dependente do tempo reflete o rearranjo molecular lento das cadeias de colagénio e a expulsão de água intersticial. Isto garante a integridade funcional do aparelho locomotor.",
    "distractorAnalysis": [
      "Está incorreta: a deformação viscoelástica por creep é um fenómeno físico molecular de rearranjo estrutural sem perda atómica gasosa.",
      "Está incorreta: deformações dentro do regime de fluência fisiológica promovem adaptação e alongamento tecidual sem rotura tecidual.",
      "Está incorreta: ligamentos, tendões, cartilagens e discos são tecidos viscoelásticos clássicos sujeitos ao fenómeno de creep."
    ],
    "nursingApplication": "O enfermeiro utiliza talas dinâmicas e posicionamentos mantidos graduais para vencer contraturas articulares fibrosadas aproveitando o fenómeno biofísico de fluência."
  },
  {
    "id": 3174,
    "topicId": 3,
    "question": "Na biofísica do sistema osteomuscular, em relação a 'propriedade de relaxamento de tensão (stress relaxation)', qual é a fundamentação científica correta?",
    "options": [
      "A tensão interna aumenta de forma contínua e exponencial até que o tendão exploda espontaneamente no interior da articulação.",
      "O tendão transforma-se num fluido puramente gasoso que é expelido através dos poros dérmicos da pele circundante do membro.",
      "Mantendo-se o comprimento esticado fixo e constante, a tensão interna gerada no tecido diminui progressivamente com o tempo decorrido.",
      "A resistência à deformação permanece estritamente constante para sempre, pois a viscoelasticidade não envolve variações de tensão."
    ],
    "correctIndex": 2,
    "explanation": "Em biofísica osteomuscular, propriedade de relaxamento de tensão (stress relaxation) explica-se pelo facto de que se um tendão ou ligamento for deformado até um comprimento fixo e aí mantido, a força elástica que ele exerce diminui progressivamente com o tempo. Ocorre redistribuição interna das tensões viscoelásticas na matriz de proteoglicanos sem alteração do comprimento externo imposto.",
    "distractorAnalysis": [
      "Está incorreta: o relaxamento de tensões (stress relaxation) carateriza-se pela queda progressiva da tensão interna sob deformação mantida.",
      "Está incorreta: o fenómeno decorre da dissipação viscosa interna e alivia a tensão ao longo do tempo em vez de a elevar.",
      "Está incorreta: os tecidos conjuntivos mantêm a sua integridade sólida anatómica sem fenómenos de transição de fase para gás."
    ],
    "nursingApplication": "O enfermeiro reavalia a tensão de ligaduras elásticas compressivas após as primeiras horas, pois o relaxamento de tensão tecidual pode exigir reajuste da compressão externa."
  },
  {
    "id": 3175,
    "topicId": 3,
    "question": "Durante a prestação de cuidados de enfermagem a um doente com alterações musculoesqueléticas, como se traduz na prática clínica o conceito de 'propriedade de relaxamento de tensão (stress relaxation)'?",
    "options": [
      "Apertar as ligaduras compressivas até ao limite máximo no primeiro instante para compensar a diminuição futura da tensão mecânica.",
      "Ignorar o afrouxamento natural das faixas elásticas, assumindo que a pressão de compressão inicial se manterá intacta por semanas.",
      "Prescrever o uso de ligaduras de chumbo rígido inelástico para impedir qualquer fenómeno de relaxamento de tensões no membro.",
      "Reavaliar o aperto e a eficácia de ligaduras e trações, compreendendo que a pressão exercida diminui espontaneamente com o tempo."
    ],
    "correctIndex": 3,
    "explanation": "A aplicação de enfermagem para propriedade de relaxamento de tensão (stress relaxation) baseia-se no princípio biomecânico: O enfermeiro reavalia a tensão de ligaduras elásticas compressivas após as primeiras horas, pois o relaxamento de tensão tecidual pode exigir reajuste da compressão externa. Este raciocínio assegura intervenções fundamentadas na física biológica.",
    "distractorAnalysis": [
      "Está incorreta: apertar excessivamente no início causa isquemia aguda e garroteamento vascular grave do membro periférico.",
      "Está incorreta: o relaxamento viscoelástico do material reduz a pressão terapêutica, exigindo reavaliação e reposicionamento regular.",
      "Está incorreta: as ligaduras elásticas requerem conformabilidade e calibração contínua e não lâminas de metal rígido perigosas."
    ],
    "nursingApplication": "O enfermeiro reavalia a tensão de ligaduras elásticas compressivas após as primeiras horas, pois o relaxamento de tensão tecidual pode exigir reajuste da compressão externa."
  },
  {
    "id": 3176,
    "topicId": 3,
    "question": "Um enfermeiro analisa o impacto biomecânico das solicitações mecânicas em 'propriedade de relaxamento de tensão (stress relaxation)'. Qual das seguintes afirmações apresenta a análise biofísica correta?",
    "options": [
      "Ocorre redistribuição intermolecular lenta com dissipação de energia, aliviando a tensão sob deformação mantida fixa.",
      "As fibras musculares fundem-se com o periósteo do fémur através de uma reação endotérmica que queima o tecido adjacente.",
      "A tensão mecânica interna duplica a cada cinco minutos até que o ligamento atinja a rotura catastrófica imediata no leito.",
      "O tecido ligamentar transforma-se num fluido puramente gasoso que é eliminado diretamente através dos poros cutâneos."
    ],
    "correctIndex": 0,
    "explanation": "Sob o ponto de vista físico e mecanicista, Ocorre redistribuição interna das tensões viscoelásticas na matriz de proteoglicanos sem alteração do comprimento externo imposto. Isto garante a integridade funcional do aparelho locomotor.",
    "distractorAnalysis": [
      "Está incorreta: tecidos moles sofrem relaxamento de tensões (stress relaxation) por fluxo de fluido e deslizamento de fibras.",
      "Está incorreta: a tensão diminui espontaneamente com o tempo mantendo o comprimento esticado fixo e não aumenta até romper.",
      "Está incorreta: os ligamentos preservam a sua matriz sólida de colagénio sem transição de fase para estado gasoso."
    ],
    "nursingApplication": "O enfermeiro reavalia a tensão de ligaduras elásticas compressivas após as primeiras horas, pois o relaxamento de tensão tecidual pode exigir reajuste da compressão externa."
  },
  {
    "id": 3177,
    "topicId": 3,
    "question": "Na biofísica do sistema osteomuscular, em relação a 'histérese mecânica e perda de energia elástica em ciclos repetidos', qual é a fundamentação científica correta?",
    "options": [
      "A trajetória de retorno é rigorosamente idêntica à de estiramento, devolvendo 100% da energia sem qualquer perda térmica.",
      "A curva de carga não coincide com a de descarga, formando um ciclo cuja área interna representa energia dissipada sob calor.",
      "A histerese mecânica converte toda a energia de choque em radiação de raios X de alta energia emitida pela articulação do joelho.",
      "O tendão perde toda a sua integridade molecular logo no primeiro ciclo mecânico de estiramento, estilhaçando-se como vidro."
    ],
    "correctIndex": 1,
    "explanation": "Em biofísica osteomuscular, histérese mecânica e perda de energia elástica em ciclos repetidos explica-se pelo facto de que a curva de deformação durante a carga de tração não coincide com a curva de descarga durante o relaxamento, formando um laço de histérese fechado. A área interna entre as duas curvas representa a energia mecânica dissipada sob a forma de calor térmico na matriz viscoelástica.",
    "distractorAnalysis": [
      "Está incorreta: o retorno pela mesma curva sem perdas carateriza um sólido elástico ideal e não materiais viscoelásticos biológicos.",
      "Está incorreta: a energia mecânica de atrito interno dissipa-se sob a forma de calor biológico suave e não de radiação ionizante.",
      "Está incorreta: tendões e ligamentos saudáveis suportam milhões de ciclos de histerese ao longo da vida sem quebra estrutural."
    ],
    "nursingApplication": "O enfermeiro sabe que exercícios repetitivos intensos sem períodos de arrefecimento acumulam calor nos tendões (como o tendão de Aquiles), aumentando a suscetibilidade a microfissuras."
  },
  {
    "id": 3178,
    "topicId": 3,
    "question": "Durante a prestação de cuidados de enfermagem a um doente com alterações musculoesqueléticas, como se traduz na prática clínica o conceito de 'histérese mecânica e perda de energia elástica em ciclos repetidos'?",
    "options": [
      "O calor local congela instantaneamente as fibras de elastina, tornando o tendão cem vezes mais rígido do que o aço cirúrgico.",
      "Exercícios de alongamento brusco a frio são os mais seguros porque o tendão gelado comporta-se como borracha perfeitamente elástica.",
      "O aquecimento prévio e a mobilização gradual reduzem a viscosidade da matriz, diminuindo o atrito interno e o risco de rotura.",
      "A histerese mecânica é um defeito congénito perigoso que exige a remoção cirúrgica profilática de todos os tendões dos membros."
    ],
    "correctIndex": 2,
    "explanation": "A aplicação de enfermagem para histérese mecânica e perda de energia elástica em ciclos repetidos baseia-se no princípio biomecânico: O enfermeiro sabe que exercícios repetitivos intensos sem períodos de arrefecimento acumulam calor nos tendões (como o tendão de Aquiles), aumentando a suscetibilidade a microfissuras. Este raciocínio assegura intervenções fundamentadas na física biológica.",
    "distractorAnalysis": [
      "Está incorreta: o calor fisiológico aumenta a flexibilidade e a complacência tecidual, reduzindo a rigidez articular e a histerese.",
      "Está incorreta: alongamentos violentos a frio com alta viscosidade aumentam as tensões focais internas e o risco de laceração.",
      "Está incorreta: a histerese é uma propriedade protetora universal essencial para o amortecimento de choques biomecânicos."
    ],
    "nursingApplication": "O enfermeiro sabe que exercícios repetitivos intensos sem períodos de arrefecimento acumulam calor nos tendões (como o tendão de Aquiles), aumentando a suscetibilidade a microfissuras."
  },
  {
    "id": 3179,
    "topicId": 3,
    "question": "Um enfermeiro analisa o impacto biomecânico das solicitações mecânicas em 'histérese mecânica e perda de energia elástica em ciclos repetidos'. Qual das seguintes afirmações apresenta a análise biofísica correta?",
    "options": [
      "A área do ciclo representa o volume exato de sangue arterial que entra no tendão a cada batimento cardíaco do indivíduo.",
      "Quanto maior for a área interna do ciclo, menor é a capacidade de amortecimento de impactos dinâmicos na corrida humana.",
      "A área de histerese é sempre nula em tecidos biológicos humanos, existindo exclusivamente em polímeros sintéticos industriais.",
      "A área interna do ciclo de histerese quantifica a quantidade de energia mecânica absorvida e dissipada no tecido sob forma térmica."
    ],
    "correctIndex": 3,
    "explanation": "Sob o ponto de vista físico e mecanicista, A área interna entre as duas curvas representa a energia mecânica dissipada sob a forma de calor térmico na matriz viscoelástica. Isto garante a integridade funcional do aparelho locomotor.",
    "distractorAnalysis": [
      "Está incorreta: a área da curva tensão-deformação integrada representa energia mecânica por unidade de volume e não fluxo de sangue.",
      "Está incorreta: uma maior área de histerese traduz maior capacidade de absorção e dissipação de energia de choque no membro.",
      "Está incorreta: tendões, discos, cartilagens e fáscias humanas apresentam todos histerese mecânica viscoelástica mensurável."
    ],
    "nursingApplication": "O enfermeiro sabe que exercícios repetitivos intensos sem períodos de arrefecimento acumulam calor nos tendões (como o tendão de Aquiles), aumentando a suscetibilidade a microfissuras."
  },
  {
    "id": 3180,
    "topicId": 3,
    "question": "Na biofísica do sistema osteomuscular, em relação a 'resistência máxima à tração do tendão calcâneo (tendão de Aquiles)', qual é a fundamentação científica correta?",
    "options": [
      "O tendão de Aquiles suporta forças de tração superiores a 4000 a 7000 N, equivalentes a seis a oito vezes o peso corporal na corrida.",
      "O maior tendão do corpo humano rompe-se facilmente com forças de tração inferiores a dez Newtons aplicadas no calcanhar posterior.",
      "O tendão calcâneo não suporta forças de tração mecânica, operando exclusivamente sob regime de compressão hidrostática pura.",
      "A sua resistência tênsil é dez vezes inferior à da pele do antebraço devido à ausência total de colagénio tipo I na sua matriz."
    ],
    "correctIndex": 0,
    "explanation": "Em biofísica osteomuscular, resistência máxima à tração do tendão calcâneo (tendão de Aquiles) explica-se pelo facto de que o maior tendão do corpo humano suporta forças de tração superiores a 4000 a 8000 N durante saltos e corrida de alta intensidade. A sua inserção no calcâneo beneficia de uma transição gradual de tendão para fibrocartilagem mineralizada e depois osso (entese), dissipando o pico de tensão concentrada.",
    "distractorAnalysis": [
      "Está incorreta: o tendão de Aquiles é uma das estruturas mais resistentes do corpo, suportando milhares de Newtons no salto.",
      "Está incorreta: os tendões transmitem essencialmente forças uniaxiais de tração dos ventres musculares para as alavancas ósseas.",
      "Está incorreta: o tendão de Aquiles é densamente preenchido por feixes paralelos de colagénio tipo I com enorme tenacidade."
    ],
    "nursingApplication": "O enfermeiro reconhece o estalido audível súbito ('como uma pedrada no calcanhar') como sinal clássico de rotura do tendão de Aquiles com o teste de Thompson positivo."
  },
  {
    "id": 3181,
    "topicId": 3,
    "question": "Durante a prestação de cuidados de enfermagem a um doente com alterações musculoesqueléticas, como se traduz na prática clínica o conceito de 'resistência máxima à tração do tendão calcâneo (tendão de Aquiles)'?",
    "options": [
      "Instruir o doente com dor tendinosa aguda a saltar repetidamente corda em piso de cimento para acelerar a flexibilidade do calcanhar.",
      "Reconhecer que contrações excêntricas violentas ou dorsiflexão súbita podem romper o tendão, orientando proteção e reabilitação.",
      "Manter o tornozelo em dorsiflexão forçada a noventa graus logo após a rotura aguda para afastar as extremidades rompidas do tendão.",
      "Desvalorizar o estalido audível e a impotência na flexão plantar, assumindo que o tendão calcâneo nunca sofre lesões completas."
    ],
    "correctIndex": 1,
    "explanation": "A aplicação de enfermagem para resistência máxima à tração do tendão calcâneo (tendão de Aquiles) baseia-se no princípio biomecânico: O enfermeiro reconhece o estalido audível súbito ('como uma pedrada no calcanhar') como sinal clássico de rotura do tendão de Aquiles com o teste de Thompson positivo. Este raciocínio assegura intervenções fundamentadas na física biológica.",
    "distractorAnalysis": [
      "Está incorreta: impactos em tendão inflamado (tendinopatia) precipitam a rotura catastrófica do corpo ou junção miotendinosa.",
      "Está incorreta: a dorsiflexão forçada afasta os cotos rompidos; na rotura adota-se posição em equino para aproximar as extremidades.",
      "Está incorreta: o estalido audível (sensação de pedrada) acompanhado de sinal de Thompson positivo confirma rotura do tendão."
    ],
    "nursingApplication": "O enfermeiro reconhece o estalido audível súbito ('como uma pedrada no calcanhar') como sinal clássico de rotura do tendão de Aquiles com o teste de Thompson positivo."
  },
  {
    "id": 3182,
    "topicId": 3,
    "question": "Um enfermeiro analisa o impacto biomecânico das solicitações mecânicas em 'resistência máxima à tração do tendão calcâneo (tendão de Aquiles)'. Qual das seguintes afirmações apresenta a análise biofísica correta?",
    "options": [
      "A inserção calcânea atua como alavanca interpotente com desvantagem mecânica severa que reduz a força aplicada na passada.",
      "O tendão de Aquiles insere-se na face anterior da patela para permitir a extensão do joelho sem qualquer ação no pé.",
      "A inserção no calcâneo posterior confere um longo braço de alavanca motora, maximizando o binário de elevação dos metatarsos.",
      "A fixação óssea do tendão anula completamente o atrito do calcâneo com o solo através de um campo eletrostático dérmico."
    ],
    "correctIndex": 2,
    "explanation": "Sob o ponto de vista físico e mecanicista, A sua inserção no calcâneo beneficia de uma transição gradual de tendão para fibrocartilagem mineralizada e depois osso (entese), dissipando o pico de tensão concentrada. Isto garante a integridade funcional do aparelho locomotor.",
    "distractorAnalysis": [
      "Está incorreta: a elevação do calcanhar opera como alavanca inter-resistente de 2.ª classe com grande vantagem mecânica (VM > 1).",
      "Está incorreta: o tendão de Aquiles insere-se na tuberosidade posterior do calcâneo e não na patela (que recebe o tendão rotuliano).",
      "Está incorreta: a transmissão da força é puramente mecânica clássica através da articulação tibiotársica e antepé no solo."
    ],
    "nursingApplication": "O enfermeiro reconhece o estalido audível súbito ('como uma pedrada no calcanhar') como sinal clássico de rotura do tendão de Aquiles com o teste de Thompson positivo."
  },
  {
    "id": 3183,
    "topicId": 3,
    "question": "Na biofísica do sistema osteomuscular, em relação a 'graus de entorse ligamentar: grau I (ligeiro), grau II (parcial) e grau III (total)', qual é a fundamentação científica correta?",
    "options": [
      "No grau I ocorre secção completa do osso; no grau II luxação de todos os dedos; no grau III cura instantânea sem qualquer lesão tecidual.",
      "A classificação de entorses baseia-se unicamente na cor da pele do doente e não no dano microestrutural sofrido pelas fibras colágenas.",
      "Todas as entorses do tornozelo envolvem obrigatoriamente a fratura transversal da cabeça do fémur na cavidade acetabular da anca.",
      "No grau I há microestiramento elástico; no grau II rotura parcial com deformação plástica; no grau III rotura completa e instabilidade."
    ],
    "correctIndex": 3,
    "explanation": "Em biofísica osteomuscular, graus de entorse ligamentar: grau I (ligeiro), grau II (parcial) e grau III (total) explica-se pelo facto de que no grau I há microrroturas dentro da fase elástica sem instabilidade; no grau II há rotura parcial com relaxamento tecidual; no grau III há rotura completa com perda de estabilidade mecânica. A gravidade correlaciona-se diretamente com a energia mecânica absorvida e o deslocamento angular anormal forçado da articulação.",
    "distractorAnalysis": [
      "Está incorreta: os graus I, II e III definem lesões crescentes nos tecidos moles ligamentares e não alterações ósseas primitivas.",
      "Está incorreta: a graduação clínica e imagiológica reflete a perda de continuidade mecânica e estabilidade da articulação.",
      "Está incorreta: uma entorse do tornozelo é uma lesão articular distal da tibiotársica e não do colo ou cabeça do fémur."
    ],
    "nursingApplication": "O enfermeiro aplica o protocolo PRICE/POLICE na fase aguda (Proteção, Carga Ótima, Gelo/Crioterapia, Compressão e Elevação) para controlar a dor e o edema inflamatório."
  },
  {
    "id": 3184,
    "topicId": 3,
    "question": "Durante a prestação de cuidados de enfermagem a um doente com alterações musculoesqueléticas, como se traduz na prática clínica o conceito de 'graus de entorse ligamentar: grau I (ligeiro), grau II (parcial) e grau III (total)'?",
    "options": [
      "Aplicar o protocolo POLICE (Proteção, Carga Ótima, Gelo, Compressão e Elevação) para limitar o edema e proteger a cicatrização tecidual.",
      "Aplicar calor térmico intenso com compressas húmidas quentes no tornozelo nas primeiras trinta minutos após a entorse aguda.",
      "Incentivar o doente com entorse de grau III e tornozelo instável a correr descalço em terreno pedregoso para alinhar os ligamentos.",
      "Proibir qualquer elevação do membro inferior lesado, mantendo a perna pendente para baixo durante quarenta e oito horas seguidas."
    ],
    "correctIndex": 0,
    "explanation": "A aplicação de enfermagem para graus de entorse ligamentar: grau I (ligeiro), grau II (parcial) e grau III (total) baseia-se no princípio biomecânico: O enfermeiro aplica o protocolo PRICE/POLICE na fase aguda (Proteção, Carga Ótima, Gelo/Crioterapia, Compressão e Elevação) para controlar a dor e o edema inflamatório. Este raciocínio assegura intervenções fundamentadas na física biológica.",
    "distractorAnalysis": [
      "Está incorreta: o calor térmico precoce nas primeiras 48 horas agravaria a vasodilatação, o hematoma e o edema inflamatório.",
      "Está incorreta: a carga descontrolada numa articulação instável com rotura ligamentar total provoca deformidade e lesões ósseas.",
      "Está incorreta: manter a perna pendente aumenta a pressão hidrostática microvascular venosa, exacerbando o edema tecidual."
    ],
    "nursingApplication": "O enfermeiro aplica o protocolo PRICE/POLICE na fase aguda (Proteção, Carga Ótima, Gelo/Crioterapia, Compressão e Elevação) para controlar a dor e o edema inflamatório."
  },
  {
    "id": 3185,
    "topicId": 3,
    "question": "Um enfermeiro analisa o impacto biomecânico das solicitações mecânicas em 'graus de entorse ligamentar: grau I (ligeiro), grau II (parcial) e grau III (total)'. Qual das seguintes afirmações apresenta a análise biofísica correta?",
    "options": [
      "A entorse de grau I destrói permanentemente a capacidade de locomoção humana, exigindo amputação cirúrgica imediata do pé.",
      "A gravidade da entorse correlaciona-se com a perda de continuidade das fibras e a quebra da restrição mecânica passiva articular.",
      "O grau de entorse independe da ultrapassagem do limite elástico do colagénio, decorrendo apenas de espasmos nos vasos linfáticos.",
      "A estabilidade articular depende unicamente da pressão atmosférica externa, sendo os ligamentos estruturas anatomicamente inertes."
    ],
    "correctIndex": 1,
    "explanation": "Sob o ponto de vista físico e mecanicista, A gravidade correlaciona-se diretamente com a energia mecânica absorvida e o deslocamento angular anormal forçado da articulação. Isto garante a integridade funcional do aparelho locomotor.",
    "distractorAnalysis": [
      "Está incorreta: a entorse ligeira de grau I cicatriza em poucos dias com tratamento conservador e preservação funcional plena.",
      "Está incorreta: a transição de grau I para grau II reflete a passagem da zona elástica para a zona plástica com rotura parcial.",
      "Está incorreta: os ligamentos articulares contêm fibras de colagénio densas e constituem os principais restritores passivos da articulação."
    ],
    "nursingApplication": "O enfermeiro aplica o protocolo PRICE/POLICE na fase aguda (Proteção, Carga Ótima, Gelo/Crioterapia, Compressão e Elevação) para controlar a dor e o edema inflamatório."
  },
  {
    "id": 3186,
    "topicId": 3,
    "question": "Na biofísica do sistema osteomuscular, em relação a 'hidrólise de ATP pela miosina ATPase', qual é a fundamentação científica correta?",
    "options": [
      "O ATP atua como lubrificante puramente físico que arrefece os miofilamentos sem qualquer reação química de hidrólise celular.",
      "A quebra do ATP destrói permanentemente os filamentos de miosina em cada contração, sendo necessária a síntese de novo músculo.",
      "A cisão de ATP em ADP e Pi energiza a cabeça da miosina para a ligação à actina, promovendo o golpe de força contrátil do sarcómero.",
      "O ATP converte-se em ar atmosférico pressurizado que empurra as linhas Z para fora da membrana plasmática celular da fibra."
    ],
    "correctIndex": 2,
    "explanation": "Em biofísica osteomuscular, hidrólise de ATP pela miosina ATPase explica-se pelo facto de que a cisão de ATP em ADP e fosfato inorgânico (Pi) energiza e armada a cabeça de miosina numa conformação de alta energia pronta para o golpe de força. A taxa de atividade da miosina ATPase dita a velocidade máxima de encurtamento da fibra muscular (rápida em fibras tipo II e lenta em fibras tipo I).",
    "distractorAnalysis": [
      "Está incorreta: o ATP é a fonte primária de energia bioquímica cuja hidrólise fornece o trabalho mecânico de translação molecular.",
      "Está incorreta: os filamentos de actina e miosina realizam ciclos repetidos de ligação e desacoplamento sem destruição do sarcómero.",
      "Está incorreta: a contração muscular é governada pelo deslizamento de miofilamentos com consumo de ATP e não por expansão de gás."
    ],
    "nursingApplication": "O enfermeiro reconhece a importância do aporte adequado de oxigénio e glicose em doentes respiratórios ou sépticos para manter a síntese mitocondrial de ATP e prevenir fadiga dos músculos ventilatórios."
  },
  {
    "id": 3187,
    "topicId": 3,
    "question": "Durante a prestação de cuidados de enfermagem a um doente com alterações musculoesqueléticas, como se traduz na prática clínica o conceito de 'hidrólise de ATP pela miosina ATPase'?",
    "options": [
      "Assumir que a rigidez cadavérica é uma contração muscular ativa voluntária desencadeada por sonhos motores após a morte cerebral.",
      "Tentar desfazer o rigor mortis com massagem cardíaca vigorosa de cem compressões por minuto num cadáver confirmado na morgue.",
      "Afirmar que a rigidez cadavérica decorre da calcificação cerâmica instantânea de todos os sarcómeros em menos de três segundos.",
      "Reconhecer que na ausência de ATP pós-morte a miosina não se desliga da actina, originando a rigidez cadavérica (rigor mortis)."
    ],
    "correctIndex": 3,
    "explanation": "A aplicação de enfermagem para hidrólise de ATP pela miosina ATPase baseia-se no princípio biomecânico: O enfermeiro reconhece a importância do aporte adequado de oxigénio e glicose em doentes respiratórios ou sépticos para manter a síntese mitocondrial de ATP e prevenir fadiga dos músculos ventilatórios. Este raciocínio assegura intervenções fundamentadas na física biológica.",
    "distractorAnalysis": [
      "Está incorreta: o rigor mortis é um fenómeno passivo celular decorrente do esgotamento total de ATP que impede o desprendimento das pontes.",
      "Está incorreta: em óbito confirmado com rigidez cadavérica instalada as manobras de reanimação estão contraindicadas e são fúteis.",
      "Está incorreta: a rigidez cadavérica instala-se progressivamente em horas e decorre da fixação das pontes cruzadas e não de petrificação."
    ],
    "nursingApplication": "O enfermeiro reconhece a importância do aporte adequado de oxigénio e glicose em doentes respiratórios ou sépticos para manter a síntese mitocondrial de ATP e prevenir fadiga dos músculos ventilatórios."
  },
  {
    "id": 3188,
    "topicId": 3,
    "question": "Um enfermeiro analisa o impacto biomecânico das solicitações mecânicas em 'hidrólise de ATP pela miosina ATPase'. Qual das seguintes afirmações apresenta a análise biofísica correta?",
    "options": [
      "A taxa de atividade da miosina ATPase dita a velocidade de encurtamento, sendo rápida em fibras tipo II e lenta em fibras tipo I.",
      "Todas as fibras musculares humanas possuem rigorosamente a mesma velocidade de hidrólise e idêntica resistência à fadiga mecânica.",
      "As fibras musculares tipo I não hidrolisam ATP, obtendo toda a sua energia mecânica exclusivamente da absorção de luz solar dérmica.",
      "A miosina ATPase atua unicamente no interior dos ossos longos, não tendo qualquer presença nos sarcómeros das fibras musculares."
    ],
    "correctIndex": 0,
    "explanation": "Sob o ponto de vista físico e mecanicista, A taxa de atividade da miosina ATPase dita a velocidade máxima de encurtamento da fibra muscular (rápida em fibras tipo II e lenta em fibras tipo I). Isto garante a integridade funcional do aparelho locomotor.",
    "distractorAnalysis": [
      "Está incorreta: a heterogeneidade das fibras (tipo I lentas oxidativas vs tipo II rápidas glicolíticas) governa o desempenho motor.",
      "Está incorreta: as fibras tipo I dependem da fosforilação oxidativa mitocondrial de substratos e ATP e não de fotossíntese dérmica.",
      "Está incorreta: a miosina ATPase é uma enzima localizada na cabeça da miosina nos sarcómeros do músculo esquelético e cardíaco."
    ],
    "nursingApplication": "O enfermeiro reconhece a importância do aporte adequado de oxigénio e glicose em doentes respiratórios ou sépticos para manter a síntese mitocondrial de ATP e prevenir fadiga dos músculos ventilatórios."
  },
  {
    "id": 3189,
    "topicId": 3,
    "question": "Na biofísica do sistema osteomuscular, em relação a 'contração isométrica vs contração isotónica concêntrica e excêntrica', qual é a fundamentação científica correta?",
    "options": [
      "Na isométrica o músculo encurta até desaparecer; na concêntrica estica vinte vezes; na excêntrica anula qualquer tensão interna.",
      "Na isométrica o músculo gera tensão sem alterar o comprimento; na concêntrica encurta; na excêntrica alonga sob tensão motora.",
      "A contração excêntrica só ocorre quando o músculo é aquecido a cinquenta graus Celsius através de infravermelhos hospitalares.",
      "Não existe qualquer distinção funcional entre tipos de contração, sendo todos os movimentos corporais estritamente isométricos."
    ],
    "correctIndex": 1,
    "explanation": "Em biofísica osteomuscular, contração isométrica vs contração isotónica concêntrica e excêntrica explica-se pelo facto de que na isométrica o músculo gera tensão sem alterar o comprimento macroscópico; na concêntrica encurta gerando movimento; na excêntrica alonga ativamente sob carga travando o movimento. A contração excêntrica gera as maiores tensões mecânicas por unidade de área com menor custo de ATP, mas causa maiores microrroturas nas linhas Z dos sarcómeros.",
    "distractorAnalysis": [
      "Está incorreta: as definições clássicas biomecânicas baseiam-se na variação do comprimento muscular durante o desenvolvimento de tensão.",
      "Está incorreta: a contração excêntrica é um movimento fisiológico diário (ex.: descer escadas, pousar um objeto suavemente).",
      "Está incorreta: os seres humanos executam dinamicamente ações concêntricas, excêntricas e isométricas coordenadas na marcha."
    ],
    "nursingApplication": "O enfermeiro ensina utentes a descer degraus com apoio firme, pois a descida exige trabalho muscular excêntrico do quadríceps com elevado esforço mecânico."
  },
  {
    "id": 3190,
    "topicId": 3,
    "question": "Durante a prestação de cuidados de enfermagem a um doente com alterações musculoesqueléticas, como se traduz na prática clínica o conceito de 'contração isométrica vs contração isotónica concêntrica e excêntrica'?",
    "options": [
      "Proibir qualquer contração muscular isométrica para garantir que os músculos atrofiem e permitam a folga da tala gessada no membro.",
      "Instruir o doente com gesso a saltar com a perna fraturada logo após a cirurgia para testar a resistência das placas metálicas.",
      "Ensinar exercícios isométricos precoces no leito, ativando a bomba muscular e preservando a força sem mover articulações imobilizadas.",
      "Orientar contrações concêntricas violentas contra resistências máximas logo na primeira hora pós-operatória de reparação ligamentar."
    ],
    "correctIndex": 2,
    "explanation": "A aplicação de enfermagem para contração isométrica vs contração isotónica concêntrica e excêntrica baseia-se no princípio biomecânico: O enfermeiro ensina utentes a descer degraus com apoio firme, pois a descida exige trabalho muscular excêntrico do quadríceps com elevado esforço mecânico. Este raciocínio assegura intervenções fundamentadas na física biológica.",
    "distractorAnalysis": [
      "Está incorreta: as contrações isométricas promovem a circulação, reduzem o edema e combatem a atrofia sem mobilizar a fratura.",
      "Está incorreta: o apoio violento precoce sobre o gesso ou placa desestabilizaria a osteossíntese antes da consolidação biológica.",
      "Está incorreta: cargas concêntricas máximas imediatas comprometeriam as suturas de tecidos moles e ligamentos recém-reparados."
    ],
    "nursingApplication": "O enfermeiro ensina utentes a descer degraus com apoio firme, pois a descida exige trabalho muscular excêntrico do quadríceps com elevado esforço mecânico."
  },
  {
    "id": 3191,
    "topicId": 3,
    "question": "Um enfermeiro analisa o impacto biomecânico das solicitações mecânicas em 'contração isométrica vs contração isotónica concêntrica e excêntrica'. Qual das seguintes afirmações apresenta a análise biofísica correta?",
    "options": [
      "A contração excêntrica gasta dez vezes mais oxigénio que a concêntrica, produzindo calor que ferve o sangue nos capilares periféricos.",
      "A ação excêntrica não desenvolve qualquer tensão mecânica, sendo uma manobra puramente passiva de relaxamento muscular completo.",
      "O músculo em contração excêntrica comporta-se como um fluido newtoniano puro cuja resistência independe da velocidade de estiramento.",
      "A contração excêntrica gera forças mecânicas absolutas superiores com menor consumo de ATP, mas induz maior microdano sarcomérico."
    ],
    "correctIndex": 3,
    "explanation": "Sob o ponto de vista físico e mecanicista, A contração excêntrica gera as maiores tensões mecânicas por unidade de área com menor custo de ATP, mas causa maiores microrroturas nas linhas Z dos sarcómeros. Isto garante a integridade funcional do aparelho locomotor.",
    "distractorAnalysis": [
      "Está incorreta: a eficiência energética da contração excêntrica é muito elevada (baixo consumo de ATP para elevada força de retenção).",
      "Está incorreta: a contração excêntrica desenvolve grande tensão mecânica ativa resistente durante o alongamento forçado das fibras.",
      "Está incorreta: o músculo em contração excêntrica exibe comportamento viscoelástico ativo com lesão de sarcómeros e dor muscular tardia."
    ],
    "nursingApplication": "O enfermeiro ensina utentes a descer degraus com apoio firme, pois a descida exige trabalho muscular excêntrico do quadríceps com elevado esforço mecânico."
  },
  {
    "id": 3192,
    "topicId": 3,
    "question": "Na biofísica do sistema osteomuscular, em relação a 'mecanismo biofísico do tremor muscular (shivering thermogenesis)', qual é a fundamentação científica correta?",
    "options": [
      "Contrações musculares assíncronas e rápidas sem produção de trabalho mecânico útil, dissipando quase 100% da energia sob a forma de calor.",
      "Movimento corporal puramente voluntário destinado a acelerar a circulação venosa nas extremidades congeladas do acidentado.",
      "Reação química endotérmica que absorve todo o calor do sangue para arrefecer o cérebro durante a exposição ao frio ambiente.",
      "Propagação de campos magnéticos pulsados gerados pela fricção passiva da pele dos membros superiores contra o lençol do leito."
    ],
    "correctIndex": 0,
    "explanation": "Em biofísica osteomuscular, mecanismo biofísico do tremor muscular (shivering thermogenesis) explica-se pelo facto de que contrações musculares assíncronas e rápidas sem produção de trabalho mecânico externo útil (eficiência mecânica zero), onde 100% da energia do ATP é convertida em calor. O centro termorregulador hipotalâmico ativa os motoneurónios gama e alfa para elevar a taxa metabólica basal em até 4 a 5 vezes em ambiente frio.",
    "distractorAnalysis": [
      "Está incorreta: os tremores de calafrio são involuntários e reflexos mediados pelo hipotálamo anterior e pré-ótico na termorregulação.",
      "Está incorreta: o calafrio é fortemente exotérmico, hidrolisando ATP para produzir calor corporal e combater a hipotermia.",
      "Está incorreta: a vibração muscular dissipa energia sob atrito térmico interno e não sob a forma de ondas de radiofrequência eletromagnética."
    ],
    "nursingApplication": "O enfermeiro aquece o doente pós-cirúrgico com manta térmica de ar forçado aquecido, reduzindo os tremores que aumentam perigosamente o consumo miocárdico de oxigénio em 300%."
  },
  {
    "id": 3193,
    "topicId": 3,
    "question": "Durante a prestação de cuidados de enfermagem a um doente com alterações musculoesqueléticas, como se traduz na prática clínica o conceito de 'mecanismo biofísico do tremor muscular (shivering thermogenesis)'?",
    "options": [
      "Aplicar sacos de gelo sobre o tórax de doentes com calafrios pós-operatórios para acelerar a produção muscular reflexa de calor.",
      "Aquecer ativamente o doente com cobertores térmicos e ar forçado, reduzindo os calafrios que elevam o consumo cardíaco de oxigénio.",
      "Desvalorizar os tremores pós-anestésicos, assumindo que o esforço muscular vigoroso nunca descompensa doentes com patologia coronária.",
      "Prescrever exercício físico extenuante no corredor hospitalar a doentes em recuperação imediata da anestesia geral na sala de recobro."
    ],
    "correctIndex": 1,
    "explanation": "A aplicação de enfermagem para mecanismo biofísico do tremor muscular (shivering thermogenesis) baseia-se no princípio biomecânico: O enfermeiro aquece o doente pós-cirúrgico com manta térmica de ar forçado aquecido, reduzindo os tremores que aumentam perigosamente o consumo miocárdico de oxigénio em 300%. Este raciocínio assegura intervenções fundamentadas na física biológica.",
    "distractorAnalysis": [
      "Está incorreta: arrefecer o doente com gelo agravaria a hipotermia e intensificaria o calafrio reflexo e o stresse metabólico.",
      "Está incorreta: o calafrio aumenta o consumo de oxigénio em até 300% a 400%, podendo precipitar isquemia miocárdica em cardiopatas.",
      "Está incorreta: na fase imediata de recobro anestésico o doente necessita de repouso, monitorização e reaquecimento passivo e ativo."
    ],
    "nursingApplication": "O enfermeiro aquece o doente pós-cirúrgico com manta térmica de ar forçado aquecido, reduzindo os tremores que aumentam perigosamente o consumo miocárdico de oxigénio em 300%."
  },
  {
    "id": 3194,
    "topicId": 3,
    "question": "Um enfermeiro analisa o impacto biomecânico das solicitações mecânicas em 'mecanismo biofísico do tremor muscular (shivering thermogenesis)'. Qual das seguintes afirmações apresenta a análise biofísica correta?",
    "options": [
      "O calafrio é controlado exclusivamente pela medula óssea diafisária que liberta cálcio aquecido na circulação sanguínea venosa.",
      "A resposta ao frio decorre da liquefação da cartilagem articular que escorre pelas veias para aquecer o coração e pulmões.",
      "O centro termorregulador hipotalâmico aciona tremores musculares assíncronos que convertem a energia metabólica em calor homeotérmico.",
      "A temperatura corporal humana é mantida constante através da atração magnética estabelecida entre as miofibrilhas e o ar ambiente."
    ],
    "correctIndex": 2,
    "explanation": "Sob o ponto de vista físico e mecanicista, O centro termorregulador hipotalâmico ativa os motoneurónios gama e alfa para elevar a taxa metabólica basal em até 4 a 5 vezes em ambiente frio. Isto garante a integridade funcional do aparelho locomotor.",
    "distractorAnalysis": [
      "Está incorreta: a termorregulação do tremor muscular é coordenada pelo sistema nervoso central (hipotálamo) e sarcómeros motores.",
      "Está incorreta: a cartilagem hialina é uma estrutura articular avascular estática e não um combustível líquido circulante.",
      "Está incorreta: a homeotermia é garantida pelo balanço termodinâmico entre produção metabólica de calor e perdas corporais."
    ],
    "nursingApplication": "O enfermeiro aquece o doente pós-cirúrgico com manta térmica de ar forçado aquecido, reduzindo os tremores que aumentam perigosamente o consumo miocárdico de oxigénio em 300%."
  },
  {
    "id": 3195,
    "topicId": 3,
    "question": "Na biofísica do sistema osteomuscular, em relação a 'recrutamento de unidades motoras e princípio de Henneman (size principle)', qual é a fundamentação científica correta?",
    "options": [
      "O cérebro recruta sempre todas as unidades motoras de forma simultânea e máxima, gerando força idêntica para segurar uma caneta ou um peso.",
      "As unidades motoras maiores e mais fatigáveis são sempre as primeiras a ser ativadas em esforços de precisão milimétrica e ligeira.",
      "O recrutamento muscular independe do sistema nervoso periférico, atuando cada sarcómero de forma totalmente caótica e autónoma.",
      "O sistema nervoso recruta primeiro as unidades motoras pequenas tipo I (resistentes à fadiga) e só depois as grandes tipo II (rápidas)."
    ],
    "correctIndex": 3,
    "explanation": "Em biofísica osteomuscular, recrutamento de unidades motoras e princípio de Henneman (size principle) explica-se pelo facto de que o sistema nervoso central recruta primeiro as unidades motoras pequenas com fibras tipo I resistentes à fadiga, e só depois as unidades grandes tipo II para esforços máximos. Esta gradação mecânica assegura movimentos suaves e económicos para tarefas diárias de sustentação e precisão.",
    "distractorAnalysis": [
      "Está incorreta: o princípio do tamanho de Henneman garante uma gradação suave e eficiente da força de contração muscular.",
      "Está incorreta: o recrutamento de todas as unidades motoras simultâneas provocaria contrações espásticas descoordenadas de força excessiva.",
      "Está incorreta: as fibras rápidas e fatigáveis tipo II são recrutadas apenas quando a demanda de força ou velocidade é elevada."
    ],
    "nursingApplication": "O enfermeiro na reabilitação pós-AVC estimula movimentos lentos e controlados que reativam o padrão fisiológico de recrutamento de unidades motoras pequenas."
  },
  {
    "id": 3196,
    "topicId": 3,
    "question": "Durante a prestação de cuidados de enfermagem a um doente com alterações musculoesqueléticas, como se traduz na prática clínica o conceito de 'recrutamento de unidades motoras e princípio de Henneman (size principle)'?",
    "options": [
      "Iniciar a reabilitação com exercícios suaves para ativar fibras tipo I resistentes à fadiga, progredindo para maior carga e fibras tipo II.",
      "Exigir levantamento de pesos de cem quilos logo na primeira sessão de fisioterapia de um doente com atrofia muscular grave.",
      "Treinar exclusivamente movimentos de alta velocidade e impacto máximo para que o músculo aprenda a ignorar o princípio de Henneman.",
      "Desvalorizar a progressão de cargas na reabilitação, assumindo que a força muscular não depende do recrutamento de unidades motoras."
    ],
    "correctIndex": 0,
    "explanation": "A aplicação de enfermagem para recrutamento de unidades motoras e princípio de Henneman (size principle) baseia-se no princípio biomecânico: O enfermeiro na reabilitação pós-AVC estimula movimentos lentos e controlados que reativam o padrão fisiológico de recrutamento de unidades motoras pequenas. Este raciocínio assegura intervenções fundamentadas na física biológica.",
    "distractorAnalysis": [
      "Está incorreta: cargas excessivas precoces provocam roturas miotendinosas, exaustão metabólica rápida e dor desmoralizante.",
      "Está incorreta: o princípio de Henneman é uma lei neurofisiológica biológica inviolável do recrutamento do motoneurónio alfa.",
      "Está incorreta: a sobrecarga progressiva estruturada permite adaptar gradualmente a inervação e o tónus funcional do músculo."
    ],
    "nursingApplication": "O enfermeiro na reabilitação pós-AVC estimula movimentos lentos e controlados que reativam o padrão fisiológico de recrutamento de unidades motoras pequenas."
  },
  {
    "id": 3197,
    "topicId": 3,
    "question": "Um enfermeiro analisa o impacto biomecânico das solicitações mecânicas em 'recrutamento de unidades motoras e princípio de Henneman (size principle)'. Qual das seguintes afirmações apresenta a análise biofísica correta?",
    "options": [
      "O recrutamento ordenado serve unicamente para aquecer a pele dos membros através de vibrações acústicas de alta frequência.",
      "Esta ordem de recrutamento assegura uma gradação suave, económica e precisa da força contrátil, prevenindo a fadiga precoce.",
      "A gradação da força decorre da perda contínua de água dos sarcómeros que diminui o volume das pernas durante a locomoção.",
      "O princípio de Henneman impede que qualquer indivíduo consiga produzir forças musculares superiores a cinco Newtons na vida."
    ],
    "correctIndex": 1,
    "explanation": "Sob o ponto de vista físico e mecanicista, Esta gradação mecânica assegura movimentos suaves e económicos para tarefas diárias de sustentação e precisão. Isto garante a integridade funcional do aparelho locomotor.",
    "distractorAnalysis": [
      "Está incorreta: a ativação progressiva de unidades motoras visa a eficiência mecânica e a precisão do movimento motor fino e grosso.",
      "Está incorreta: o trabalho mecânico muscular não tem como objetivo gerar ondas acústicas na derme dos membros.",
      "Está incorreta: o recrutamento completo de todas as unidades motoras permite atingir forças musculares de milhares de Newtons."
    ],
    "nursingApplication": "O enfermeiro na reabilitação pós-AVC estimula movimentos lentos e controlados que reativam o padrão fisiológico de recrutamento de unidades motoras pequenas."
  },
  {
    "id": 3198,
    "topicId": 3,
    "question": "Na biofísica do sistema osteomuscular, em relação a 'fadiga muscular mecânica por acumulação de metabolitos e esgotamento de cálcio', qual é a fundamentação científica correta?",
    "options": [
      "A perda transitória de força deve-se à reabsorção osteoclástica imediata das inserções tendinosas nos primeiros segundos de contração.",
      "A perda transitória de força deve-se à ausência total de gravidade que impede a actina de se aproximar da linha Z do sarcómero.",
      "A acumulação de fosfato inorgânico (Pi) e iões H⁺ reduz a libertação de cálcio e inibe o golpe de força das pontes de miosina.",
      "A fadiga resulta da transformação das fibras musculares em tecido ósseo compacto mineralizado durante a contração repetida."
    ],
    "correctIndex": 2,
    "explanation": "Em biofísica osteomuscular, fadiga muscular mecânica por acumulação de metabolitos e esgotamento de cálcio explica-se pelo facto de que a perda transitória da capacidade de gerar força resulta do acúmulo de fosfato inorgânico (Pi), iões hidrogénio (H⁺) e da falha na libertação de Ca²⁺ pelo retículo sarcoplasmático. O Pi liga-se ao cálcio dentro do retículo e compete com o sítio catalítico da miosina, enfraquecendo o golpe de força das pontes cruzadas.",
    "distractorAnalysis": [
      "Está incorreta: a fadiga muscular periférica é metabólica e resulta da acumulação de metabolitos (Pi, prótons) e perturbação do cálcio.",
      "Está incorreta: os ossos mantêm a sua integridade e o esgotamento é transitório e reversível com o repouso do músculo.",
      "Está incorreta: a atrofia ou ossificação heterotópica são patologias estruturais e não a fadiga muscular transitória normal."
    ],
    "nursingApplication": "O enfermeiro assegura períodos adequados de repouso entre sessões de treino de marcha no doente descondicionado, prevenindo a fadiga exaustiva e quedas acidentais."
  },
  {
    "id": 3199,
    "topicId": 3,
    "question": "Durante a prestação de cuidados de enfermagem a um doente com alterações musculoesqueléticas, como se traduz na prática clínica o conceito de 'fadiga muscular mecânica por acumulação de metabolitos e esgotamento de cálcio'?",
    "options": [
      "Incentivar o doente com respiração paradoxal e taquipneia extrema a realizar exercícios de corrida no quarto para limpar os pulmões.",
      "Considerar que a fadiga dos músculos respiratórios é sempre psicológica e que nunca requer suporte ventilatório mecânico.",
      "Prescrever relaxantes musculares de ação contínua para paralisar o diafragma de todos os doentes com asma ligeira controlada.",
      "Vigiar sinais de exaustão muscular e fadiga do diafragma em doentes ventilados, prevenindo a falência respiratória catastrófica."
    ],
    "correctIndex": 3,
    "explanation": "A aplicação de enfermagem para fadiga muscular mecânica por acumulação de metabolitos e esgotamento de cálcio baseia-se no princípio biomecânico: O enfermeiro assegura períodos adequados de repouso entre sessões de treino de marcha no doente descondicionado, prevenindo a fadiga exaustiva e quedas acidentais. Este raciocínio assegura intervenções fundamentadas na física biológica.",
    "distractorAnalysis": [
      "Está incorreta: a respiração paradoxal e tiragem traduzem fadiga muscular iminente da musculatura inspiratória, exigindo ventilação.",
      "Está incorreta: a fadiga diafragmática conduz à hipoventilação alveolar, retenção de CO₂ e paragem cardiorrespiratória por acidose.",
      "Está incorreta: paralisar os músculos respiratórios sem via aérea artificial e ventilador mecânico causaria asfixia imediata e morte."
    ],
    "nursingApplication": "O enfermeiro assegura períodos adequados de repouso entre sessões de treino de marcha no doente descondicionado, prevenindo a fadiga exaustiva e quedas acidentais."
  },
  {
    "id": 3200,
    "topicId": 3,
    "question": "Um enfermeiro analisa o impacto biomecânico das solicitações mecânicas em 'fadiga muscular mecânica por acumulação de metabolitos e esgotamento de cálcio'. Qual das seguintes afirmações apresenta a análise biofísica correta?",
    "options": [
      "O Pi acumulado inibe a ligação forte da miosina à actina e reduz a sensibilidade das proteínas contráteis ao cálcio sarcoplasmático.",
      "O fosfato inorgânico converte o sarcómero num condutor térmico que queima quimicamente as moléculas de oxigénio arterial.",
      "A presença de Pi cristaliza instantaneamente a membrana celular das fibras musculares num bloco rígido de quartzo inorgânico.",
      "O fosfato acelera a velocidade da contração muscular até que a perna do doente gire trezentos e sessenta graus sobre o quadril."
    ],
    "correctIndex": 0,
    "explanation": "Sob o ponto de vista físico e mecanicista, O Pi liga-se ao cálcio dentro do retículo e compete com o sítio catalítico da miosina, enfraquecendo o golpe de força das pontes cruzadas. Isto garante a integridade funcional do aparelho locomotor.",
    "distractorAnalysis": [
      "Está incorreta: o excesso de Pi gerado pela hidrólise rápida de fosfocreatina e ATP é o principal inibidor do golpe de força molecular.",
      "Está incorreta: o fosfato inorgânico é um metabolito solúvel fisiológico e não queima tecidos nem emite calor destrutivo.",
      "Está incorreta: o efeito do Pi é a atenuação da tensão ativa isométrica e diminuição da força, caraterística da fadiga aguda."
    ],
    "nursingApplication": "O enfermeiro assegura períodos adequados de repouso entre sessões de treino de marcha no doente descondicionado, prevenindo a fadiga exaustiva e quedas acidentais."
  }
];
