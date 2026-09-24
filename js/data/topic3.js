/**
 * Tópico 3: Aplicação da Elasticidade e Resistência ao Sistema Osteomuscular
 * 200 Questões Clínicas Rigorosas para o 1.º Ano de Enfermagem (IDs 3001 a 3200)
 */

const TOPIC_3_QUESTIONS = [
  {
    "id": 3001,
    "topicId": 3,
    "question": "O tecido ósseo é um biomaterial compósito bifásico. Quais são as duas fases primárias que o constituem e quais as suas respetivas funções mecânicas predominantes?",
    "options": [
      "Uma fase inorgânica mineral (cristais de hidroxiapatite, ~65%) que confere dureza e resistência à compressão, e uma fase orgânica (~35%, principalmente colagénio tipo I) que confere flexibilidade e resistência à tração.",
      "Uma fase lipídica pura (90%) para amortecimento hidrostático e uma fase celular de osteócitos rígidos (10%).",
      "Uma fase mineral de carbonato de cálcio puro sem colagénio e uma fase gasosa de azoto sob pressão.",
      "Uma matriz líquida de plasma ósseo sem componentes minerais sólidos."
    ],
    "correctIndex": 0,
    "explanation": "O osso combina a resistência à compressão e rigidez de uma cerâmica mineral (cristais de hidroxiapatite de cálcio [Ca₁₀(PO₄)₆(OH)₂], ~65% do peso seco) com a flexibilidade e tenacidade à tração de um polímero fibroso (fibras de colagénio tipo I, ~35%). Este arranjo compósito confere ao esqueleto uma resistência mecânica incomparavelmente superior à de qualquer um dos componentes isolados.",
    "distractorAnalysis": [
      "Está incorreta: confunde medula óssea amarela com a matriz óssea estrutural.",
      "Está incorreta: ignora o papel estrutural fulcral do colagénio e confunde hidroxiapatite com carbonato de cálcio simples.",
      "Está incorreta: descreve um fluido sem estrutura esquelética sólida."
    ],
    "nursingApplication": "Na osteogénese imperfeita ('doença dos ossos de vidro'), há uma mutação genética na síntese do colagénio tipo I: o osso mantém o mineral mas perde a flexibilidade orgânica, tornando-se frágil como porcelana. O enfermeiro deve manusear estes recém-nascidos e crianças com suporte plano acolchoado em bloco, pois a simples rotação ou troca de fralda pode fraturar membros."
  },
  {
    "id": 3002,
    "topicId": 3,
    "question": "Em relação ao tipo de solicitação mecânica, sob que forma de esforço o tecido ósseo cortical humano apresenta a sua MÁXIMA resistência à rotura?",
    "options": [
      "Compressão longitudinal (ao longo do eixo dos ósteons).",
      "Tração transversal pura.",
      "Cisalhamento (corte) perpendicular.",
      "Torção axial rápida."
    ],
    "correctIndex": 0,
    "explanation": "Devido à sua matriz mineral de hidroxiapatite e orientação paralela dos sistemas de Havers (ósteons), o osso cortical é mais resistente à compressão longitudinal (suporta tensões de rotura de 130 a 190 MPa), apresenta resistência intermediária à tração (80 a 130 MPa) e é muito vulnerável ao cisalhamento e à torção (rotura a apenas 50 a 70 MPa).",
    "distractorAnalysis": [
      "Está incorreta porque ; o osso resiste significativamente menos à tração do que à compressão.",
      "Está incorreta porque ; o cisalhamento é uma das solicitações mais destrutivas para o osso.",
      "Está incorreta porque ; a torção gera tensões de cisalhamento que fraturam o osso com torques relativamente baixos."
    ],
    "nursingApplication": "Este gradiente de resistência mecânica (Compressão > Tração > Cisalhamento/Torção) é a chave para compreender a traumatologia: uma carga axial moderada é bem tolerada pelo fémur, mas um movimento rotacional violento do pé preso ao solo gera torção com fratura helicoidal imediata da tíbia."
  },
  {
    "id": 3003,
    "topicId": 3,
    "question": "O osso cortical (compacto) e o osso esponjoso (trabecular) desempenham papéis mecânicos distintos. Qual é a principal diferença no Módulo de Young (rigidez elástica) entre estes dois tipos de tecido ósseo?",
    "options": [
      "O osso cortical possui um Módulo de Young muito superior (~14 a 20 GPa), enquanto o osso esponjoso tem Módulo de Young muito inferior (~0,1 a 4 GPa) devido à sua elevada porosidade trabecular.",
      "O osso esponjoso é dez vezes mais rígido do que o osso cortical em todas as direções.",
      "Ambos possuem rigorosamente o mesmo Módulo de Young de 200 GPa, idêntico ao do aço cirúrgico.",
      "O Módulo de Young do osso cortical é nulo porque o osso compacto não sofre qualquer deformação elástica."
    ],
    "correctIndex": 0,
    "explanation": "O osso cortical possui baixa porosidade (5 a 10%), formando a parede externa densa das diáfises com alto Módulo de Young (~14 a 20 GPa). O osso trabecular possui alta porosidade (50 a 90%) preenchida por medula óssea, o que lhe confere um Módulo de Young aparente muito menor (0,1 a 4 GPa), funcionando como uma estrutura celular porosa capaz de absorver grande quantidade de energia de deformação mecânica por esmagamento elástico nas epífises articulares.",
    "distractorAnalysis": [
      "Está incorreta: inverte os valores; o osso compacto é muito mais rígido do que o trabecular.",
      "Está incorreta: confunde os valores biológicos com os de metais industriais como o aço.",
      "Está incorreta: violaria a física dos sólidos; o osso deforma-se elasticamente em cada passo da marcha."
    ],
    "nursingApplication": "A estrutura em favo de mel do osso esponjoso nas vértebras e colo do fémur atua como um 'amortecedor de choques' biológico. Em doentes osteoporóticos com perda severa de trabéculas, cargas compressivas habituais provocam fraturas por afundamento vertebral com cifose dorsal progressiva e dor crónica incapacitante."
  },
  {
    "id": 3004,
    "topicId": 3,
    "question": "Por que razão biomecânica a diáfise dos ossos longos humanos (como o fémur, tíbia e úmero) possui uma arquitetura tubular oca (cilindro oco preenchido por canal medular) em vez de ser uma barra de osso maciço?",
    "options": [
      "Porque um cilindro oco afasta a massa da linha neutra central, maximizando o Momento de Inércia da secção transversal e oferecendo máxima resistência à flexão e torção com o mínimo peso ósseo possível.",
      "Porque o vazio interno serve exclusivamente para diminuir a temperatura dos membros inferiores.",
      "Para permitir que o ar ambiente circule livremente no interior dos membros.",
      "Porque o osso maciço seria incapaz de suportar forças de compressão axial simples."
    ],
    "correctIndex": 0,
    "explanation": "Na flexão e na torção, as tensões mecânicas máximas ocorrem nas fibras mais periféricas e são nulas no centro geométrico (linha neutra). Ao concentrar a densa massa óssea na periferia formando um tubo cilíndrico oco, a natureza maximiza o Momento de Inércia (I) e o Momento Polar (J). Para a mesma quantidade de massa óssea, um osso tubular é muito mais resistente à flexão do que uma haste maciça, poupando energia metabólica vital na locomoção.",
    "distractorAnalysis": [
      "Está incorreta: confunde a biologia medular com um sistema de refrigeração térmico inexistente.",
      "Está incorreta porque ; os ossos são vascularizados e contêm medula hemato-adiposa, sem qualquer espaço gasoso.",
      "Está incorreta porque ; uma barra maciça suporta bem a compressão axial, mas seria excessivamente pesada e metabolicamente dispendiosa para o organismo."
    ],
    "nursingApplication": "O conhecimento da geometria tubular dos ossos longos ajuda o enfermeiro a compreender a colocação de cavilhas intramedulares em fraturas femorais: a haste metálica introduzida no canal oco restaura a rigidez estrutural à flexão, permitindo carga precoce no pós-operatório."
  },
  {
    "id": 3005,
    "topicId": 3,
    "question": "A célebre 'Lei de Wolff' formulada pelo cirurgião Julius Wolff no século XIX estabelece qual princípio fundamental da mecanobiologia óssea?",
    "options": [
      "O osso vivo remodela a sua microarquitetura e densidade em resposta direta às cargas e solicitações mecânicas funcionais a que é submetido (aumento de massa sob carga, reabsorção por desuso).",
      "O tecido ósseo atinge a maturidade biológica aos 20 anos e nunca mais sofre alterações celulares até à morte.",
      "O osso regenera-se exclusivamente através da secreção contínua de cartilagem hialina sem mineralização.",
      "A fratura óssea é um processo puramente inorgânico independente da circulação sanguínea."
    ],
    "correctIndex": 0,
    "explanation": "A Lei de Wolff descreve a adaptação funcional do esqueleto: onde o osso é submetido a maiores tensões mecânicas compressivas ou trativas regulares, os osteoblastos sintetizam nova matriz óssea e as trabéculas alinham-se ao longo das linhas principais de tensão. Inversamente, na ausência prolongada de carga mecânica (imobilização, repouso no leito prolongado, microgravidade espacial), os osteoclastos reabsorvem matriz, causando rápida osteopenia.",
    "distractorAnalysis": [
      "Está incorreta: ignora o turnover ósseo celular permanente ao longo de toda a vida humana.",
      "Está incorreta: confunde ossificação endocondral fetal com os processos gerais de remodelação óssea lamelar.",
      "Está incorreta: ignora a vascularização fundamental do periósteo e endósteo na consolidação de fraturas."
    ],
    "nursingApplication": "A Lei de Wolff é o fundamento da prescrição de mobilização precoce e bipedestação pelo enfermeiro: doentes mantidos semanas acamados perdem até 1% de massa óssea trabecular por semana. O levante precoce e a marcha assistida exercem as cargas mecânicas essenciais para estimular a osteogénese e prevenir a osteoporose de desuso e hipercalcemia por reabsorção."
  },
  {
    "id": 3006,
    "topicId": 3,
    "question": "Qual é o fenómeno biofísico intrínseco à matriz óssea colagénica que traduz deformações mecânicas em sinais elétricos celulares (mecanotransdução) para ativação dos osteoblastos?",
    "options": [
      "Efeito Piezoelétrico e potenciais de streaming eletrocinéticos gerados pelo escoamento do fluido intersticial lacuno-canalicular sob compressão.",
      "Efeito Fotoelétrico produzido pela radiação infravermelha do sangue.",
      "Efeito Doppler acústico emitido pela cartilagem articular.",
      "Emissão termiónica de positrões pela medula amarela."
    ],
    "correctIndex": 0,
    "explanation": "Quando o osso é comprimido e deformado elasticamente, as fibras assimétricas de colagénio geram minúsculos potenciais elétricos superficiais de natureza piezoelétrica (cargas negativas nas zonas de compressão, estimulando osteoblastos; cargas positivas em tração, ativando osteoclastos). Adicionalmente, o escoamento do fluido intersticial pelos canalículos dos osteócitos gera potenciais de streaming que abrem canais de cálcio mecano-sensíveis, convertendo estresse mecânico em sinalização celular osteogénica.",
    "distractorAnalysis": [
      "Está incorreta: confunde mecanotransdução com o efeito fotoelétrico de Einstein em superfícies metálicas sob luz ultravioleta/raios X.",
      "Está incorreta: refere-se à variação aparente de frequência ondulatória por movimento de fontes sonoras.",
      "Está incorreta: descreve fenómenos de física nuclear totalmente inexistentes no tecido ósseo fisiológico."
    ],
    "nursingApplication": "A mecanotransdução explica a indicação médica de dispositivos de estimulação eletromagnética pulsátil ou ultrassons de baixa intensidade que o enfermeiro programa e aplica em fraturas com atraso de consolidação ou pseudoartroses, 'mimetizando' os potenciais piezoelétricos naturais para estimular a união do foco de fratura."
  },
  {
    "id": 3007,
    "topicId": 3,
    "question": "Na anatomia biomecânica do colo do fémur, a convergência das trabéculas ósseas de compressão e de tração delimita uma zona central triangular de menor densidade óssea conhecida como:",
    "options": [
      "Triângulo de Ward, local de grande vulnerabilidade a fraturas de stress e fraturas osteoporóticas da anca.",
      "Canal de Volkmann proximal.",
      "Espaço de Disse perissinusoidal.",
      "Forame magno trocantérico."
    ],
    "correctIndex": 0,
    "explanation": "No colo femoral, as linhas de tensão organizam-se em dois grandes sistemas trabeculares: o sistema trabecular principal de compressão (que vai da cabeça femoral ao córtex medial/calcar) e o sistema principal de tração (do trocânter maior ao bordo superior do colo). No ponto onde estas trajetórias se cruzam e divergem, forma-se o Triângulo de Ward — uma área central com escassa densidade trabecular que se torna extremamente frágil com a perda óssea senil.",
    "distractorAnalysis": [
      "Está incorreta: é um canal vascular microscópico que perfura o osso compacto transversalmente.",
      "Está incorreta: é um espaço anatómico e histológico no parênquima hepático.",
      "Está incorreta: é uma combinação incorreta de termos anatómicos."
    ],
    "nursingApplication": "Na densitometria óssea (DXA), o valor de T-score na área do Triângulo de Ward e colo femoral é um preditor direto do risco de fratura da anca. O enfermeiro utiliza esta avaliação para implementar planos individualizados de prevenção de quedas (calçado antiderrapante, iluminação noturna, retirada de tapetes, uso de protetores de anca)."
  },
  {
    "id": 3008,
    "topicId": 3,
    "question": "Quando um doente idoso sofre uma queda simples da própria altura com impacto direto no grande trocânter da anca, qual é o mecanismo biomecânico primário que desencadeia a fratura do colo femoral?",
    "options": [
      "O colo do fémur é submetido a uma flexão aguda violenta com forças de cisalhamento e tração excessivas no córtex superior, ultrapassando a baixa resistência à tração do osso osteoporótico.",
      "A pressão hidrostática da urina na bexiga faz explodir a cavidade acetabular.",
      "A rotação puramente concêntrica do músculo psoas-ilíaco corta o fémur sem qualquer força externa.",
      "A diminuição instantânea da gravidade local provoca descompressão explosiva do canal medular."
    ],
    "correctIndex": 0,
    "explanation": "O colo femoral funciona como uma viga em consola (cantilever). No impacto lateral contra o pavimento, a força do impacto atua no grande trocânter enquanto a cabeça do fémur é contida pelo acetábulo. Isto sujeita o colo a um momento fletor colossal com cisalhamento acentuado: o córtex superior é puxado sob tração intensa e o inferior comprimido. Como o osso senil osteoporótico é frágil e tem baixa resistência à tração, o colo rompe-se catastroficamente.",
    "distractorAnalysis": [
      "Está incorreta: é anatomicamente e fisiologicamente descabida.",
      "Está incorreta: exagera o papel dos músculos internos na ausência de forças traumáticas externas de impacto.",
      "Está incorreta: é fisicamente absurda."
    ],
    "nursingApplication": "No pós-operatório de osteossíntese ou artroplastia da anca, os cuidados de enfermagem são cruciais: posicionar o membro operado em ligeira abdução com almofada entre as pernas (evitando adução e rotações que luxam a prótese) e manter vigilância rigorosa de sinais de hemorragia ou síndrome compartimental."
  },
  {
    "id": 3009,
    "topicId": 3,
    "question": "Na curva tensão-deformação característica dos ligamentos articulares e tendões musculares submetidos a tração uniaxial, como se designa a região inicial não-linear caracterizada por baixas tensões mecânicas para alongamentos iniciais substanciais?",
    "options": [
      "Região do 'Pé' (toe region), resultante da desondulação e retificação progressiva das fibras onduladas (crimp) de colagénio de repouso.",
      "Região de rotura cominutiva plástica.",
      "Região de escoamento isotrópico de Bingham.",
      "Região de endurecimento por choque supersónico."
    ],
    "correctIndex": 0,
    "explanation": "Em estado de repouso, as fibras de colagénio tipo I nos ligamentos e tendões apresentam uma ondulação natural microscópica ('crimp pattern'). Quando o tecido começa a ser tracionado, a região inicial da curva (toe region, deformações até 2 a 4%) reflete simplesmente o estiramento suave e alinhamento retilíneo dessas ondas com tensão muito baixa. Só após a retificação de todas as fibras é que a curva se torna retilínea na fase elástica linear com alto Módulo de Young.",
    "distractorAnalysis": [
      "Está incorreta: confunde a fase inicial reversível de adaptação com o ponto final de rotura destrutiva.",
      "Está incorreta: refere-se a fluidos de tensão de cedência em reologia química.",
      "Está incorreta: introduz termos de aerodinâmica militar sem relação com tecidos biológicos."
    ],
    "nursingApplication": "A existência da 'toe region' confere aos ligamentos e tendões a complacência mecânica essencial para amortecer solavancos articulares em movimentos normais sem gerar tensões bruscas. Exercícios de aquecimento e mobilização passiva suave orientados pelo enfermeiro retificam o colagénio com segurança antes de esforços mecânicos maiores."
  },
  {
    "id": 3010,
    "topicId": 3,
    "question": "Uma entorse da articulação tibiotársica (tornozelo) é classificada em três graus clínicos de gravidade com base na biomecânica de lesão do ligamento talofibular anterior. O que ocorre estruturalmente numa entorse de Grau II?",
    "options": [
      "Rotura parcial das fibras de colagénio com ultrapassagem do limite elástico, resultando em frouxidão articular moderada, edema, equimose e dor significativa.",
      "Alongamento microscópico benigno estritamente contido na região elástica linear, sem qualquer rotura de fibras nem frouxidão.",
      "Secção anatómica completa de 100% dos ligamentos com luxação articular total imediata.",
      "Calcificação óssea instantânea do tendão de Aquiles sem lesão ligamentar."
    ],
    "correctIndex": 0,
    "explanation": "Na entorse de Grau I, há microestiramento na região elástica/início plástico sem perda de continuidade estrutural das fibras ligamentares. Na entorse de Grau II, a deformação ultrapassa largamente o limite elástico e ocorrem micro e macrorroturas de uma porção substancial das fibras de colagénio, provocando edema marcado, hematoma e laxidão articular detetável. Na entorse de Grau III, há rotura ligamentar completa com instabilidade severa.",
    "distractorAnalysis": [
      "Está incorreta: descreve estritamente a entorse de Grau I (ligeira).",
      "Está incorreta: descreve a entorse de Grau III (rotura total).",
      "Está incorreta: é uma condição patológica crónica inexistente como mecanismo agudo de entorse."
    ],
    "nursingApplication": "No atendimento e acompanhamento de enfermagem a uma entorse de Grau II do tornozelo, o enfermeiro aplica o protocolo PRICE/POLICE: Proteção e Carga Otimizada, Gelo (vasoconstrição local para conter edema), Compressão com ligadura elástica e Elevação do membro acima do nível cardíaco para favorecer a drenagem veno-linfática."
  },
  {
    "id": 3011,
    "topicId": 3,
    "question": "Os tecidos moles periarticulares (como ligamentos, tendões e cápsulas) são viscoelásticos. Qual das seguintes propriedades NÃO é uma característica típica do comportamento viscoelástico?",
    "options": [
      "Rigidez mecânica instantânea estritamente independente da taxa ou velocidade de deformação (strain rate).",
      "Fluência mecânica (creep, deformação progressiva sob carga constante no tempo).",
      "Relaxamento de tensões (queda da resistência mecânica sob deformação constante).",
      "Histerese elástica (dissipação de energia térmica durante ciclos de carga e descarga)."
    ],
    "correctIndex": 0,
    "explanation": "Os materiais viscoelásticos são profundamente dependentes da taxa de deformação (strain rate-dependent): quanto mais rápido um tendão ou ligamento é esticado, mais rígido ele se torna (maior Módulo de Young aparente) e maior é a sua tensão de rotura. Dizer que a sua rigidez é independente da velocidade de deformação é FALSO, sendo essa uma característica exclusiva de sólidos puramente elásticos ideais.",
    "distractorAnalysis": [
      "Está incorreta: são manifestações universais comprovadas da viscoelasticidade dos tecidos biológicos ricos em colagénio e água ligada a proteoglicanos.",
      "Está incorreta: são manifestações universais comprovadas da viscoelasticidade dos tecidos biológicos ricos em colagénio e água ligada a proteoglicanos.",
      "Está incorreta: são manifestações universais comprovadas da viscoelasticidade dos tecidos biológicos ricos em colagénio e água ligada a proteoglicanos."
    ],
    "nursingApplication": "Como o osso e os ligamentos são mais rígidos a altas velocidades de impacto, um traumatismo súbito e de alta energia (como num acidente de mota) provoca tipicamente rotura ligamentar em pleno corpo da substância, enquanto um estiramento lento em doentes acamados tende a causar avulsão óssea na inserção periosteal."
  },
  {
    "id": 3012,
    "topicId": 3,
    "question": "A cartilagem articular hialina reveste as extremidades ósseas das articulações sinoviais. Qual é o mecanismo biofísico primário ('weeping lubrication' ou lubrificação por exsudações) que lhe permite suportar pressões colossais com coeficiente de atrito quase nulo (μ ≈ 0,002 a 0,02)?",
    "options": [
      "A sua matriz poroelástica de agrecanos hidrofílicos expele água e eletrólitos sob compressão articular, formando uma película fluida pressurizada entre as superfícies em contacto que suporta a carga; na descompressão, o fluido é reabsorvido.",
      "A presença de uma camada espessa de teflon sintetizada pelas células endoteliais dos vasos cartilagíneos.",
      "A rotação de micro-esferas de titânio segregadas pela membrana sinovial.",
      "A combustão contínua de glicose na cavidade articular que elimina qualquer contacto físico."
    ],
    "correctIndex": 0,
    "explanation": "A cartilagem hialina é um tecido avascular poroelástico: 70 a 80% do seu peso é água, retida por glicosaminoglicanos sulfatados (agrecanos) de carga elétrica negativa fixa. Quando a articulação é comprimida pelo peso corporal, a água é lentamente forçada para fora dos microporos da matriz para o espaço articular (weeping lubrication), criando uma almofada fluida hidrodinâmica que suporta mais de 90% da carga mecânica sem atrito direto entre os sólidos.",
    "distractorAnalysis": [
      "Está incorreta: confunde tecidos vivos com polímeros industriais de flúor; a cartilagem adulta é avascular.",
      "Está incorreta: é ficção científica; não existem esferas metálicas na sinóvia biológica.",
      "Está incorreta: descreveria uma inflamação destrutiva impossível, já que a queima com chamas destruiria a articulação."
    ],
    "nursingApplication": "Na osteoartrose, a degradação da matriz de agrecanos e colagénio compromete este mecanismo hidrodinâmico: o fluido já não é retido adequadamente, gerando contacto direto osso-com-osso, atrito abrasivo doloroso, crepitação articular e limitação severa da mobilidade, exigindo intervenções de enfermagem para gestão de dor e exercícios em piscina aquecida (hidroterapia)."
  },
  {
    "id": 3013,
    "topicId": 3,
    "question": "A nível molecular e biomecânico, qual é a unidade funcional contrátil do músculo esquelético responsável pela geração de tensão ativa através da teoria do deslizamento dos miofilamentos?",
    "options": [
      "O Sarcómero, delimitado entre duas linhas Z sucessivas, contendo filamentos finos de actina e filamentos grossos de miosina.",
      "A fibra colagénica de Sharpey do periósteo.",
      "O canal central de Havers do osso cortical.",
      "O eritrócito desnucleado do capilar perimicial."
    ],
    "correctIndex": 0,
    "explanation": "O sarcómero é a unidade contrátil elementar do músculo estriado esquelético. Durante a contração muscular, os iões cálcio (Ca²⁺) ligam-se à troponina C, expondo os sítios de ligação na actina; as cabeças globulares de miosina hidrolisam ATP, ligam-se à actina e realizam o golpe de força (power stroke), tracionando os filamentos finos em direção ao centro do sarcómero (linha M) e encurtando a distância entre as linhas Z.",
    "distractorAnalysis": [
      "Está incorreta: refere-se a fibras de fixação do periósteo à matriz óssea, sem função contrátil ativa.",
      "Está incorreta: é o canal de passagem de vasos e nervos no osso compacto.",
      "Está incorreta: é uma célula sanguínea anucleada de transporte de oxigénio."
    ],
    "nursingApplication": "No doente em paragem cardiorrespiratória ou após a morte biológica, o esgotamento total do ATP intracelular impede o desprendimento das cabeças de miosina da actina, fixando o músculo num estado de rigidez mecânica permanente e irreversível (rigor mortis). O enfermeiro deve realizar os cuidados pós-morte ao corpo antes do estabelecimento pleno deste fenómeno cadavérico."
  },
  {
    "id": 3014,
    "topicId": 3,
    "question": "A curva da 'Relação Força-Comprimento' do músculo esquelético estabelece que a força ativa máxima de contração isométrica é obtida em que estado?",
    "options": [
      "No comprimento de repouso ótimo (L₀), onde ocorre a sobreposição geométrica máxima entre as pontes cruzadas de miosina e os sítios de ligação dos filamentos de actina.",
      "No encurtamento extremo do músculo até a 20% do comprimento de repouso.",
      "No estiramento hiper-máximo onde os filamentos de miosina e actina se separam completamente.",
      "Apenas quando o músculo está completamente desnervado e paralisado."
    ],
    "correctIndex": 0,
    "explanation": "A geração de força muscular ativa depende estritamente do número de pontes cruzadas funcionais estabelecidas simultaneamente entre actina e miosina. No comprimento de repouso ótimo (L₀, sarcómero entre ~2,0 e 2,2 μm), a sobreposição é máxima. Se o músculo for excessivamente encurtado, os filamentos de actina chocam e interferem entre si; se for excessivamente estirado, os filamentos separam-se e as pontes de miosina deixam de conseguir alcançar a actina.",
    "distractorAnalysis": [
      "Está incorreta: provoca declínio da força por colisão mútua dos filamentos finos no centro da banda H.",
      "Está incorreta: anula a força ativa porque a separação física impede a formação de pontes cruzadas.",
      "Está incorreta: descreve atrofia por denervação flácida com perda progressiva de força muscular."
    ],
    "nursingApplication": "No posicionamento do doente no leito, a manutenção de articulações em posições funcionais neutras (ex: pés a 90° com apoio de suporte para evitar 'pé caído', joelhos e ancas ligeiramente fletidos) garante que os músculos operem próximo de L₀, prevenindo contraturas musculares em encurtamento crónico e preservando a força para a reabilitação."
  },
  {
    "id": 3015,
    "topicId": 3,
    "question": "Na dinâmica das contrações musculares esqueléticas, como se classifica uma contração na qual o músculo gera tensão enquanto é forçado a ALONGAR-SE por uma carga externa superior à sua força interna (ex: fase de descida de uma escada ou apoio de um membro)?",
    "options": [
      "Contração Excêntrica.",
      "Contração Concêntrica.",
      "Contração Isométrica pura.",
      "Contração Isocinética estática."
    ],
    "correctIndex": 0,
    "explanation": "Na contração excêntrica (ou trabalho negativo), o músculo produz força de frenagem enquanto o seu comprimento total aumenta sob ação de uma carga externa que supera a força das pontes cruzadas. Biomecanicamente, a contração excêntrica consegue gerar forças absolutas superiores às contrações concêntricas com menor consumo de oxigénio e ATP, mas impõe enormes tensões de cisalhamento que provocam microlesões ultraestruturais na linha Z dos sarcómeros.",
    "distractorAnalysis": [
      "Está incorreta: descreve a contração na qual o músculo encurta à medida que vence a carga (trabalho positivo).",
      "Está incorreta: define a contração na qual a tensão aumenta mas o comprimento muscular externo permanece inalterado.",
      "Está incorreta: descreve um exercício executado a velocidade angular estritamente constante por equipamento robotizado."
    ],
    "nursingApplication": "A descida de rampas ou escadas por doentes requer potente ação excêntrica do quadríceps. Em doentes idosos com fraqueza muscular, a incapacidade de sustentar a contração excêntrica é a principal causa de 'falha do joelho' e quedas catastróficas, exigindo que o enfermeiro se posicione sempre abaixo do doente na escada para garantir o apoio de segurança."
  },
  {
    "id": 3016,
    "topicId": 3,
    "question": "Do ponto de vista bioenergético e termodinâmico, qual é o rendimento mecânico médio (eficiência mecânica) do músculo esquelético humano na conversão de energia química (ATP) em trabalho mecânico útil?",
    "options": [
      "Aproximadamente 20% a 25% de trabalho mecânico, dissipando-se os restantes 75% a 80% sob a forma de calor corporal.",
      "Praticamente 100%, operando como uma máquina térmica de Carnot perfeita sem libertação de calor.",
      "Menos de 0,5%, sendo o músculo um órgão termicamente inerte.",
      "Mais de 95% em forma de ondas de rádio para comunicação neural."
    ],
    "correctIndex": 0,
    "explanation": "A eficiência mecânica máxima do músculo esquelético varia entre 20% e 25%: de cada 100 Joules de energia livre de Gibbs libertados pela hidrólise de ATP nas pontes de miosina e bombas iónicas, apenas 20 a 25 J são convertidos em trabalho mecânico externo. A grande maioria (75-80%) é dissipada como calor no sarcoplasma, sendo este o pilar fundamental da termorregulação e homeotermia humana.",
    "distractorAnalysis": [
      "Está incorreta: violaria o Segundo Princípio da Termodinâmica e o ciclo de Carnot.",
      "Está incorreta: subestima grosseiramente o trabalho muscular real do coração e locomoção.",
      "Está incorreta: é uma fantasia sem base em biofísica muscular."
    ],
    "nursingApplication": "Este elevado calor residual é vital na clínica: quando um doente pós-cirúrgico acorda hipotérmico no Bloco Operatório ou UCPA, o reflexo fisiológico de tremor muscular (shivering) desencadeia contrações repetidas sem trabalho útil, mobilizando 100% da energia na produção de calor para restabelecer a temperatura corporal central (37 °C). O enfermeiro monitoriza o consumo acrescido de O₂ associado a estes tremores."
  },
  {
    "id": 3017,
    "topicId": 3,
    "question": "Na artroplastia total da anca com prótese metálica tradicional (haste femoral em liga de cobalto-crómio ou titânio), o fenómeno indesejável de 'Stress Shielding' (blindagem contra o estresse) decorre diretamente de qual discordância biofísica?",
    "options": [
      "Do facto de a haste metálica apresentar um Módulo de Young muito mais elevado (110 a 210 GPa) do que o osso cortical circundante (~18 GPa), absorvendo a maior parte das cargas mecânicas e privando o osso da tensão necessária para a sua manutenção pela Lei de Wolff.",
      "Da passagem de corrente elétrica alternada de alta voltagem da prótese para a medula óssea.",
      "Da dissolução imediata do osso devido ao pH ácido do metal estéril.",
      "Da atração gravitacional superior que o metal exerce sobre os osteoclastos."
    ],
    "correctIndex": 0,
    "explanation": "Pelas leis da mecânica de compósitos em paralelo, estruturas mais rígidas (maior E) suportam uma fração desproporcionalmente maior da carga total. Como as ligas de Co-Cr (E ≈ 210 GPa) e Titânio (E ≈ 110 GPa) são muito mais rígidas do que o osso cortical (E ≈ 18 GPa), a haste femoral metálica 'blinda' o osso proximal da anca, descarregando o esforço apenas na extremidade distal. Privado de estresse fisiológico, o osso proximal reabsorve-se progressivamente por desuso (Lei de Wolff), podendo causar soltura assética da prótese.",
    "distractorAnalysis": [
      "Está incorreta porque ; as próteses são passivas e não conduzem correntes elétricas externas.",
      "Está incorreta: confunde corrosão química com a resposta biológica de remodelação por perda de estresse mecânico.",
      "Está incorreta: inventa uma força gravitacional impossível a nível celular."
    ],
    "nursingApplication": "O conhecimento do stress shielding motiva o desenvolvimento de próteses com polímeros modernos de baixo módulo e guias de reabilitação específicas: o enfermeiro educa o doente a cumprir a progressão rigorosa de apoio de peso prescrita pela ortopedia para modular as tensões no membro e assegurar a longevidade funcional da prótese."
  },
  {
    "id": 3018,
    "topicId": 3,
    "question": "O Polietileno de Ultra-Alto Peso Molecular (UHMWPE) é amplamente utilizado como componente de deslizamento acetabular em próteses de anca. Qual é a principal complicação biológica a longo prazo resultante do desgaste mecânico deste biomaterial?",
    "options": [
      "A libertação contínua de partículas microscópicas de desgaste (débris) que ativam macrófagos, desencadeando osteólise periprotésica inflamatória e eventual descolamento da prótese.",
      "A produção de insulina não controlada pelos tecidos articulares circundantes.",
      "A transformação do polietileno em gás hélio tóxico no interior da articulação.",
      "A calcificação completa de todas as veias profundas do membro inferior."
    ],
    "correctIndex": 0,
    "explanation": "Ao longo de milhões de passos da marcha, o atrito cíclico da cabeça metálica ou cerâmica contra o componente de UHMWPE gera triliões de partículas microscópicas de polietileno (0,1 a 1 μm). Os macrófagos sinoviais fagocitam estas partículas mas não conseguem degradá-las, libertando citocinas pró-inflamatórias (TNF-α, IL-1, IL-6) e mediadores osteoclastogénicos (RANKL). Isto provoca destruição óssea massiva ao redor da prótese (osteólise periprotésica) e soltura assética tardia.",
    "distractorAnalysis": [
      "Está incorreta: confunde patologias endócrinas pancreáticas com desgaste articular local.",
      "Está incorreta: é quimicamente absurda, pois o polietileno consiste em cadeias de carbono e hidrogénio sem hélio.",
      "Está incorreta: confunde descolamento assético com trombose venosa profunda."
    ],
    "nursingApplication": "Em consultas de enfermagem de seguimento a doentes com artroplastias com mais de 10 anos de implantação, a queixa insidiosa de dor na virilha ou na coxa ao caminhar deve alertar o enfermeiro para a suspeita de osteólise por débris de polietileno, exigindo encaminhamento urgente para radiografia de controlo antes que ocorra fratura periprotésica."
  },
  {
    "id": 3019,
    "topicId": 3,
    "question": "Durante a flexão forçada do tronco para levantar um doente pesado sem fletir os joelhos, o disco intervertebral lumbossacrado (L5-S1) é submetido a uma compressão estimada de várias centenas de quilogramas-força (milhares de Newtons). Qual é a estrutura interna do disco responsável por resistir a essa força compressiva e redistribuí-la hidrostática e omnidirecionalmente?",
    "options": [
      "O Núcleo Pulposo (nucleus pulposus), rico em proteoglicanos hidrofílicos que retêm água sob elevada pressão osmótica e hidrostática.",
      "A apófise espinhosa posterior da vértebra dorsal.",
      "O ligamento amarelo situado posteriormente ao canal raquidiano.",
      "A dura-máter espinhal e as raízes da cauda equina."
    ],
    "correctIndex": 0,
    "explanation": "O núcleo pulposo comporta-se hidromecanicamente como uma almofada hidráulica incompressível no centro do disco: tem um teor hídrico de 70 a 90% contido por uma malha de colagénio tipo II e agrecanos. Quando a coluna é comprimida axialmente, a pressão interna no núcleo pulposo eleva-se e transmite a tensão uniformemente em todas as direções (princípio de Pascal) contra o anel fibroso periférico e os pratos cartilagíneos vertebrais.",
    "distractorAnalysis": [
      "Está incorreta: é uma projeção óssea posterior para fixação ligamentar e muscular, sem função de amortecimento intersomático.",
      "Está incorreta: une as lâminas vertebrais posteriormente, conferindo resistência elástica à flexão mas sem absorver compressão axial intervertebral direta.",
      "Está incorreta: são estruturas neurológicas e meníngeas extremamente frágeis e suscetíveis a compressão patológica."
    ],
    "nursingApplication": "Com o envelhecimento e a desidratação discal, o núcleo pulposo perde a sua capacidade hidrostática elástica de redistribuir pressões. Como resultado, as cargas compressivas concentram-se diretamente nas paredes do anel fibroso, tornando a coluna do adulto e do enfermeiro especialmente propensa a fissuras anulares e hérnias de disco se não forem adotadas posturas adequadas."
  },
  {
    "id": 3020,
    "topicId": 3,
    "question": "Uma fratura do tipo 'Espiroide' (ou helicoidal) numa diáfise óssea longa (como na tíbia ou úmero) é produzida quase invariavelmente por qual mecanismo físico de solicitação mecânica?",
    "options": [
      "Torção pura ou combinada em torno do eixo longitudinal do osso.",
      "Compressão axial pura perfeitamente simétrica.",
      "Impacto contundente estritamente paralelo ao bordo da tíbia.",
      "Exposição a campos elétricos estáticos durante exames de eletrocardiograma."
    ],
    "correctIndex": 0,
    "explanation": "A solicitação de torção gera tensões de cisalhamento máximas no plano transversal e longitudinal, que por sua vez induzem tensões de tração máxima orientadas a 45° em relação ao eixo longo do osso. Como o tecido ósseo é notavelmente fraco em tração e cisalhamento, a fratura inicia-se e propaga-se ao longo desta espiral a 45°, produzindo a linha de fratura helicoidal característica com extremidades pontiagudas cortantes.",
    "distractorAnalysis": [
      "Está incorreta: produz fraturas impactadas transversas ou fraturas cominutivas por esmagamento trabecular.",
      "Está incorreta: (impacto direto perpendicular) produz tipicamente fraturas transversas ou com terceiro fragmento em asa de borboleta por flexão pura.",
      "Está incorreta: é uma impossibilidade física absoluta; o ECG utiliza apenas registos passivos de microvoltagens cardíacas."
    ],
    "nursingApplication": "Nas fraturas espiroides, as pontas ósseas espiculadas afiadas podem facilmente perfurar músculos adjacentes, artérias principais (ex: artéria tibial anterior ou artéria braquial) e a própria pele. O enfermeiro deve imobilizar o membro imediatamente na posição encontrada, sem tentar reduções intempestivas que lacerariam vasos e nervos."
  },
  {
    "id": 3021,
    "topicId": 3,
    "question": "Na síndrome compartimental aguda pós-traumática de um membro (frequente após fraturas diafisárias da perna ou antebraço), qual é o fenómeno biofísico patológico de pressão tecidual interna que conduz à isquemia muscular e necrose?",
    "options": [
      "A elevação contínua da pressão hidrostática no interior de um compartimento muscular osteofascial rígido e inextensível, superando a pressão de perfusão capilar arteriolar e colapsando a microcirculação veno-capilar.",
      "A diminuição da pressão intracompartimental até atingir o vácuo absoluto de Torricelli.",
      "A calcificação imediata de todos os músculos do compartimento em menos de 10 minutos.",
      "A perda total de massa óssea do membro através dos poros da pele."
    ],
    "correctIndex": 0,
    "explanation": "Os compartimentos anatómicos musculares dos membros são delimitados por fascias aponevróticas extremamente rígidas e inextensíveis (baixo módulo de complacência elástica). O sangramento ou edema pós-fratura eleva a pressão intracompartimental de valores normais (<8-10 mmHg) para mais de 30-40 mmHg, aproximando-se da pressão diastólica arterial. A microcirculação capilar colapsa, cessando a perfusão tecidual com hipóxia celular rápida, necrose muscular irreversível e perda de função neurológica.",
    "distractorAnalysis": [
      "Está incorreta: é o oposto da patologia; a pressão atinge valores patologicamente elevados, nunca vácuo.",
      "Está incorreta: confunde necrose isquémica aguda com miosite ossificante crónica tardia.",
      "Está incorreta: viola a conservação de massa e a integridade anatómica cutânea."
    ],
    "nursingApplication": "A deteção precoce da síndrome compartimental é uma competência crítica do enfermeiro: vigilância dos '6 Ps' (Dor intensa desproporcionada e que não cede a opióides / Pain, Palidez / Pallor, Parestesias / Paresthesia, Paralisia / Paralysis, ausência de Pulsos / Pulselessness e Poiquilotermia / Poikilothermia). Qualquer suspeita exige desaperto imediato de ligaduras e notificação urgente para fasciotomia cirúrgica de descompressão."
  },
  {
    "id": 3022,
    "topicId": 3,
    "question": "A resistência mecânica de um tendão à tração é proporcionada predominantemente por qual molécula proteica fibrilar e por qual tipo de ligações intramoleculares?",
    "options": [
      "Fibras de Colagénio tipo I organizadas em tripla hélice paralelamente ao eixo longitudinal, reforçadas por ligações cruzadas covalentes (cross-links) intermoleculares de piridinolina e lisiloxidase.",
      "Moléculas de albumina globular livre dispersas em líquido sinovial aquoso.",
      "Proteínas contráteis de actina sem qualquer ligação transversal.",
      "Polímeros inorgânicos de sílica cristalina pura."
    ],
    "correctIndex": 0,
    "explanation": "O colagénio tipo I compõe cerca de 70 a 80% do peso seco dos tendões. As suas cadeias polipeptídicas organizam-se numa tripla hélice dextrogira estabilizada por ligações cruzadas covalentes mediadas enzimaticamente pela lisiloxidase. Estas pontes cruzadas intermoleculares e interfibrilares bloqueiam o deslizamento prematuro sob tração, conferindo aos tendões uma resistência mecânica à tração prodigiosa de 50 a 100 MPa (comparável à de alguns cabos metálicos industriais leves).",
    "distractorAnalysis": [
      "Está incorreta: é a principal proteína plasmática circulante solúvel, sem qualquer função elástica estrutural.",
      "Está incorreta: é um componente do citoesqueleto intracelular e sarcómero, não da matriz extracelular tendinosa.",
      "Está incorreta: descreve minerais de quartzo/areia inexistentes na bioquímica humana."
    ],
    "nursingApplication": "Em doentes submetidos a antibioterapia com fluoroquinolonas (como o ciprofloxacino ou levofloxacino) ou corticoterapia prolongada, ocorre inibição da síntese de colagénio e destruição das ligações cruzadas. O enfermeiro deve alertar para o risco elevado de tendinite e rotura espontânea do tendão de Aquiles, orientando o doente a suspender esforços físicos e comunicar dor no calcanhar imediatamente."
  },
  {
    "id": 3023,
    "topicId": 3,
    "question": "O osso humano apresenta comportamento 'Viscoelástico' demonstrado em ensaios laboratoriais. Isto significa que a sua resposta à fratura depende da velocidade com que a carga mecânica é aplicada (strain rate). Quando o osso é carregado a uma taxa de deformação MUITO ELEVADA (impacto rápido), o que sucede?",
    "options": [
      "O Módulo de Young e a resistência à rotura do osso aumentam significativamente, acumulando muito maior energia elástica antes de partir numa fratura altamente cominutiva com múltiplos fragmentos.",
      "O osso transforma-se instantaneamente num líquido gelatinoso sem qualquer fragmentação.",
      "O osso quebra a uma tensão próxima de zero como se fosse algodão desfiado.",
      "O osso perde todo o seu teor mineral por evaporação piezoelétrica instantânea."
    ],
    "correctIndex": 0,
    "explanation": "Devido à viscoelasticidade (atrito do fluido intersticial que escoa nos canalículos e comportamento dos polímeros de colagénio), o osso comporta-se de forma mais rígida e resistente sob impactos rápidos (alta strain rate, como em acidentes de viação): o seu Módulo de Young pode aumentar até 30-50%. Contudo, isto permite armazenar uma quantidade massiva de energia de deformação que, ao ultrapassar o limite, dissipa-se violentamente estilhaçando o osso em múltiplos fragmentos cominutivos e destruindo os tecidos moles circundantes.",
    "distractorAnalysis": [
      "Está incorreta: é contrária à realidade; o osso torna-se mais rígido e vítreo, nunca líquido.",
      "Está incorreta: inverte a resposta reológica; a resistência aumenta com a velocidade de carga, nunca diminui.",
      "Está incorreta: é uma afirmação fantasiosa sem qualquer sentido físico."
    ],
    "nursingApplication": "Compreender a biofísica da alta taxa de deformação ajuda o enfermeiro a prever o quadro clínico no acolhimento de urgência: acidentes de alta energia (automóvel, atropelamento) resultam em fraturas cominutivas graves com perda de substância óssea, laceração muscular extensa e choque hemorrágico, ao passo que quedas da própria altura (baixa energia) provocam habitualmente fraturas simples de traço único."
  },
  {
    "id": 3024,
    "topicId": 3,
    "question": "Nos ligamentos da coluna vertebral humana, o 'Ligamento Amarelo' (ligamentum flavum) une as lâminas das vértebras adjacentes e apresenta uma coloração amarelada única. Qual é a sua particularidade biofísica e molecular distintiva?",
    "options": [
      "Apresenta uma percentagem invulgarmente elevada de Elastina (~60 a 70%) em relação ao Colagénio, conferindo-lhe uma extensibilidade elástica enorme com retorno rápido e tensão de pré-tensão elástica contínua.",
      "É constituído por 100% de hidroxiapatite inorgânica fundida sem qualquer proteína.",
      "É um vaso sanguíneo oco que drena a circulação coronária para a medula raquidiana.",
      "Não possui elasticidade mecânica, atuando como uma barra de ferro imutável."
    ],
    "correctIndex": 0,
    "explanation": "Ao contrário da quase totalidade dos ligamentos corporais (onde o colagénio predomina largamente), o ligamento amarelo contém cerca de dois terços de fibras de elastina. Isto confere-lhe uma elasticidade quase pura de borracha: pode esticar até 50% além do seu comprimento de repouso sem sofrer deformação plástica permanente. Durante a flexão da coluna ele alonga-se, e na extensão encurta-se sem enrugar ou projetar-se para dentro do canal vertebral, mantendo a coluna em pré-tensão elástica protetora contínua.",
    "distractorAnalysis": [
      "Está incorreta: descreveria um osso totalmente mineralizado, o que impediria qualquer flexão vertebral.",
      "Está incorreta: confunde um ligamento da coluna com anastomoses cardiovasculares sistémicas.",
      "Está incorreta: nega a propriedade fundamental da elastina (a proteína mais elástica do corpo humano)."
    ],
    "nursingApplication": "Na punção lombar e na anestesia epidural, o enfermeiro auxilia o médico observando a progressão da agulha de Tuohy: o avanço através do ligamento amarelo oferece uma resistência elástica característica ('sensação de borracha densa'), seguida de uma súbita 'perda de resistência' ao entrar no espaço epidural. Conhecer esta biofísica tátil assegura a colaboração serena no procedimento."
  },
  {
    "id": 3025,
    "topicId": 3,
    "question": "A osteoporose é uma patologia óssea metabólica de alta prevalência na população idosa. Do ponto de vista da resistência dos materiais e biomecânica estrutural, qual é a alteração primária observada no tecido ósseo osteoporótico?",
    "options": [
      "Redução da massa óssea total e degradação da microarquitetura trabecular (com afilamento e desconexão das trabéculas e adelgaçamento do córtex), reduzindo drasticamente o Módulo de Young aparente e a energia necessária para a fratura.",
      "Aumento colossal da quantidade de hidroxiapatite que torna o osso mais pesado e indestrutível.",
      "Substituição de todo o cálcio esquelético por átomos de ferro e cobre.",
      "Desaparecimento dos canais vasculares com retenção de líquido sob pressão gasosa."
    ],
    "correctIndex": 0,
    "explanation": "Na osteoporose, a atividade de reabsorção dos osteoclastos supera a taxa de síntese dos osteoblastos, resultando na perda de volume trabecular ósseo, perfuração de placas ósseas e perda de conectividade tridimensional trabecular. O osso torna-se uma estrutura porosa frágil: a sua resistência à compressão e tenacidade caem para uma fração dos valores jovens, fraturando com energias de impacto insignificantes (fraturas de fragilidade).",
    "distractorAnalysis": [
      "Está incorreta: descreveria a osteopetrose ('ossos de mármore'), que é uma doença genética rara completamente diferente.",
      "Está incorreta: é biologicamente impossível e contraria o metabolismo mineral fosfocálcico.",
      "Está incorreta: inventa fenómenos vasculares que não correspondem à patogénese osteometabólica."
    ],
    "nursingApplication": "O doente com osteoporose severa necessita de cuidados de enfermagem minuciosos na mobilização: nunca tracionar os membros com força ou aplicar pressões pontuais com os dedos sobre as costelas ou braços, pois até a técnica incorreta de medição da pressão arterial com insuflação brutal da braçadeira pode provocar desconforto extremo ou microfraturas em ossos osteopénicos."
  },
  {
    "id": 3026,
    "topicId": 3,
    "question": "O fenómeno de 'Histerese Mecânica' na cartilagem articular e nos discos intervertebrais é responsável por qual função fisiológica essencial durante a marcha e salto?",
    "options": [
      "Amortecimento e dissipação de energia mecânica de choque sob a forma de calor no líquido sinovial e matriz colagénica, protegendo o cérebro e as articulações axiais de picos perigosos de aceleração.",
      "Geração de impulsos elétricos para acionar o marcapasso sinusal cardíaco.",
      "Evaporação da água corporal para reduzir o peso do esqueleto em 50%.",
      "Eliminação total de todas as forças de gravidade durante o contacto do pé com o solo."
    ],
    "correctIndex": 0,
    "explanation": "Quando o pé atinge o solo na corrida ou no salto, ondas de choque mecânico transmitem-se ascendentemente pelo esqueleto. Graças à histerese viscoelástica das cartilagens articulares e dos discos intervertebrais, uma parcela considerável da energia cinética do impacto não é devolvida elasticamente (o que faria o corpo ricochetear como uma bola dura), sendo antes absorvida e dissipada no atrito viscoso do líquido sinovial intersticial sob a forma de calor benigno inofensivo.",
    "distractorAnalysis": [
      "Está incorreta: confunde a condução mecânica espinhal com a eletrofisiologia autónoma do nó sinoauricular.",
      "Está incorreta: violaria a homeostase hídrica e a conservação de energia elementar.",
      "Está incorreta: nega as leis da gravitação de Newton."
    ],
    "nursingApplication": "Em doentes com artroplastia total ou amputação de membros inferiores, as próteses modernas incorporam componentes viscoelásticos de elastómero e fibra de carbono com laços de histerese calculados pelo fabricante. O enfermeiro reabilitador acompanha a adaptação da marcha, verificando se o amortecimento da prótese previne a dor lombar compensatória reflexa."
  },
  {
    "id": 3027,
    "topicId": 3,
    "question": "Na análise biomecânica do salto e corrida, o 'Tendão de Aquiles' (tendão do calcâneo) atua como um acumulador mecânico de energia elástica extraordinário. Como se descreve a sua função no ciclo de alongamento-encurtamento (stretch-shortening cycle)?",
    "options": [
      "Durante a fase de contacto inicial e dorsiflexão do tornozelo, o tendão é esticado passivamente armazenando energia elástica potencial de deformação (U = 1/2 k·x²); essa energia é subitamente restituída na descompressão (recoil elástico) impulsionando o corpo para a frente com enorme poupança de ATP metabólico.",
      "O tendão contrai-se ativamente hidrolisando ATP como se fosse um sarcómero muscular.",
      "O tendão quebra propositadamente em cada passo e reconstitui-se em microssegundos.",
      "O tendão permanece completamente rígido como uma barra de aço fundido sem qualquer alongamento mensurável."
    ],
    "correctIndex": 0,
    "explanation": "O tendão do calcâneo funciona como uma mola elástica de alta eficiência biológica: durante o apoio do pé na marcha e corrida, as fibras de colagénio sofrem deformação elástica reversível (armazenando energia mecânica elástica). Na fase de impulsão (push-off), o tendão encurta rapidamente libertando essa energia mecânica acumulada por retorno elástico passivo. Este mecanismo de mola reduz o custo energético metabólico da locomoção humana em até 50% comparado a um sistema puramente muscular ativo.",
    "distractorAnalysis": [
      "Está incorreta: confunde tecido conjuntivo tendinoso passivo com sarcómeros contráteis de miofibrilhas.",
      "Está incorreta: é absurda; roturas de tendão exigem cirurgia ou imobilização de meses e impedem a marcha.",
      "Está incorreta: ignora a deformação elástica fisiológica documentada do tendão (alongamento de 4 a 8% sob carga máxima)."
    ],
    "nursingApplication": "A ruptura do tendão de Aquiles é uma lesão traumática incapacitante súbita. No exame clínico auxiliado pelo enfermeiro, o Teste de Thompson (compressão manual da barriga da perna com o doente em decúbito ventral: a ausência de flexão plantar passiva do pé indica descontinuidade mecânica do tendão) confirma a perda total de transmissão da força do tríceps sural ao calcâneo."
  },
  {
    "id": 3028,
    "topicId": 3,
    "question": "O tecido ósseo possui capacidade ímpar de regeneração estrutural através da formação de 'Calo Ósseo' após uma fratura. Qual é a sucessão de fases biomecânicas e histológicas que restaura a rigidez original do osso?",
    "options": [
      "Fase inflamatória com hematoma de fratura -> Calo mole fibrocartilagíneo (baixa rigidez elástica, união inicial) -> Calo duro de osso trabecular imaturo / tecido ósseo entrançado (mineralização) -> Remodelação lamelar contínua pela Lei de Wolff orientando os novos ósteons ao longo das linhas de carga.",
      "Fusão instantânea por calor gerado pelo atrito dos fragmentos sem qualquer proliferação celular.",
      "Formação de uma camada permanente de cartilagem que nunca se mineraliza ao longo da vida.",
      "Necrose avascular total com absorção do membro residual."
    ],
    "correctIndex": 0,
    "explanation": "A consolidação da fratura por via secundária obedece a uma evolução mecânica precisa: 1) O hematoma de fratura fornece fatores de crescimento e citocinas; 2) Proliferação de fibroblastos e condroblastos formando o calo cartilagíneo mole (que tolera altas deformações elásticas iniciais); 3) Ossificação endocondral convertendo o calo mole em calo duro de osso entrançado mineralizado, diminuindo a deformação no foco para menos de 2%; 4) Remodelação orientada por osteoclastos e osteoblastos durante meses a anos, recanalizando a medula e restaurando a geometria cilíndrica ótima.",
    "distractorAnalysis": [
      "Está incorreta: descreve um processo mecânico industrial de soldadura por fricção inexistente na biologia.",
      "Está incorreta: descreveria uma pseudoartrose fibrocartilagínea patológica que requer nova intervenção cirúrgica.",
      "Está incorreta: descreve uma catástrofe isquémica gangrenosa pós-traumática."
    ],
    "nursingApplication": "O sucesso da consolidação depende criticamente da estabilidade biomecânica garantida pelo enfermeiro: nas primeiras semanas, movimentações grosseiras ou apoios indevidos no membro gessado geram deformações relativas excessivas (>10-15%) no foco da fratura, que rompem os neovasos capilares e impedem a mineralização do calo mole, evoluindo para não-consolidação (pseudoartrose)."
  },
  {
    "id": 3029,
    "topicId": 3,
    "question": "As fáscias musculares profundas (como a fascia lata na coxa) são tecidos conjuntivos densos e inextensíveis que envolvem grupos musculares em compartimentos fechados. Qual é o seu benefício mecânico durante a marcha na circulação de retorno venoso?",
    "options": [
      "Ao conterem rigidamente os músculos em contração, transformam o aumento do diâmetro muscular em elevadas pressões hidrostáticas transitórias no compartimento, comprimindo as veias profundas e ejetando o sangue em direção ao coração através de válvulas unidirecionais ('Bomba Muscular da Barriga da Perna').",
      "Impedem a passagem de impulsos nervosos do cérebro para os músculos.",
      "Absorvem o ácido láctico convertendo-o instantaneamente em oxigénio gasoso.",
      "Servem exclusivamente como isolador térmico contra o ar condicionado hospitalar."
    ],
    "correctIndex": 0,
    "explanation": "A rigidez mecânica (alto Módulo de Young sob tração) das fáscias aponevróticas impede que os músculos se expandam lateralmente sem resistência quando encurtam durante a contração. Consequentemente, o ventre muscular em expansão gera pressões hidrostáticas internas que comprimem o plexo venoso profundo intramuscular e a veia poplítea/femoral. Graças às válvulas parietais unidirecionais das veias, o sangue é 'espremido' superiormente em direção ao átrio direito, funcionando como um verdadeiro coração periférico.",
    "distractorAnalysis": [
      "Está incorreta: seria letal, paralisando a condução motora axonal dos nervos periféricos.",
      "Está incorreta: viola as vias metabólicas bioquímicas do ciclo de Cori no fígado.",
      "Está incorreta: confunde tecido conjuntivo de tração com tecido adiposo subcutâneo isolante."
    ],
    "nursingApplication": "Em doentes imobilizados no leito cirúrgico ou em UCI, a inatividade muscular elimina o funcionamento desta bomba mecânica fáscio-muscular, provocando estase venosa profunda nas veias dos membros inferiores (Tríade de Virchow). O enfermeiro implementa dispositivos de compressão pneumática intermitente (CPI) que insuflam sequencialmente mangas nas pernas para reproduzir mecanicamente as ondas pressóricas da bomba muscular."
  },
  {
    "id": 3030,
    "topicId": 3,
    "question": "O fenómeno de 'Afrouxamento Assético' de uma prótese articular do joelho ou anca sem qualquer infeção bacteriana é primariamente desencadeado por qual cascata biomecânica?",
    "options": [
      "Desgaste mecânico cíclico de superfícies de atrito -> libertação de micropartículas de desgaste -> reação inflamatória mediada por osteoclastos -> reabsorção óssea periprotésica (osteólise) -> perda de fixação mecânica do implante.",
      "Perda súbita de gravidade dentro da cápsula articular que faz o metal flutuar.",
      "Oxidação imediata do titânio pela presença de oxigénio molecular no ar inalado.",
      "Ataque direto do sistema imunitário contra os átomos de titânio por produção de anticorpos anti-titânio específicos."
    ],
    "correctIndex": 0,
    "explanation": "O descolamento assético é a causa mais comum de falência a longo prazo das artroplastias articulares: não resulta de bactérias, mas da resposta biológica ao desgaste mecânico contínuo de polietileno, cimento ósseo ou metais. As micropartículas (débris) atraem macrófagos e células gigantes que ativam a reabsorção osteoclástica na interface osso-implante. O osso de suporte desaparece e o implante ganha micromovimentos instáveis dolorosos.",
    "distractorAnalysis": [
      "Está incorreta: é absurda do ponto de vista da física gravitacional.",
      "Está incorreta porque ; o titânio forma uma camada passivadora de dióxido de titânio (TiO₂) altamente estável e biocompatível.",
      "Está incorreta porque ; o titânio é biologicamente inerte e não atua como antigénio na síntese clássica de anticorpos humorais."
    ],
    "nursingApplication": "O enfermeiro ensina o doente com artroplastia a evitar atividades de impacto repetitivo de alta energia (como correr ou saltar), incentivando modalidades de baixo impacto articular (natação, bicicleta estática, caminhada regular) para diminuir a taxa anual de desgaste e maximizar a longevidade funcional da prótese."
  },
  {
    "id": 3031,
    "topicId": 3,
    "question": "No contexto da mecânica do traumatismo ósseo infantil, por que motivo as crianças sofrem frequentemente fraturas em 'Ramo Verde' (greenstick fracture) em vez das fraturas cominutivas clássicas observadas nos adultos?",
    "options": [
      "Porque o osso em crescimento possui maior proporção de colagénio orgânico hidratado e menor teor de mineralização inorgânica, conferindo-lhe maior ductilidade e deformabilidade plástica (o córtex flete e rompe apenas no bordo convexo sob tração, enquanto o bordo côncavo permanece contínuo sob compressão).",
      "Porque os ossos das crianças são constituídos exclusivamente por cartilagem elástica sem qualquer vaso sanguíneo.",
      "Porque a membrana de periósteo das crianças é extremamente frágil e desaparece antes da puberdade.",
      "Porque a gravidade atua com menos de metade da aceleração sobre corpos com peso inferior a 30 kg."
    ],
    "correctIndex": 0,
    "explanation": "O osso da criança tem menor mineralização de hidroxiapatite e uma matriz de colagénio muito flexível com periósteo espesso e resistente. Quando submetido a uma força de flexão violenta, comporta-se tal como um ramo de árvore jovem e verde: encurva-se plasticamente e sofre fratura incompleta apenas no bordo externo sob tração máxima, mantendo a continuidade óssea e periosteal intacta no lado oposto sob compressão.",
    "distractorAnalysis": [
      "Está incorreta: confunde os núcleos de ossificação diafisários consolidados com a cartilagem de crescimento puramente fisária.",
      "Está incorreta: inverte a realidade anatómica; o periósteo pediátrico é notavelmente espesso, altamente vascularizado e osteogénico.",
      "Está incorreta: viola a Lei da Gravitação Universal de Newton."
    ],
    "nursingApplication": "Nas fraturas em ramo verde do antebraço ou perna de crianças, o alinhamento anatómico e a integridade funcional são preservados muito mais facilmente pelo periósteo intacto. O enfermeiro orienta a família sobre os cuidados com o gesso e tranquiliza os pais quanto ao excelente prognóstico e rápida remodelação óssea infantil."
  },
  {
    "id": 3032,
    "topicId": 3,
    "question": "A rigidez e resistência de uma placa de osteossíntese metálica aparafusada sobre uma fratura do fémur dependem criticamente da sua espessura. Pela fórmula do momento de inércia retangular de uma viga (I = b · h³ / 12), duplicar a espessura (h) da placa metálica aumenta a sua resistência à flexão em quantas vezes?",
    "options": [
      "8 vezes (2³ = 8).",
      "2 vezes apenas.",
      "4 vezes (2² = 4).",
      "16 vezes (2⁴ = 16)."
    ],
    "correctIndex": 0,
    "explanation": "Para uma secção transversal retangular de largura b e espessura/altura h, o Momento de Inércia à flexão é proporcional ao cubo da espessura: I = b · h³ / 12. Se a espessura h for duplicada (multiplicada por 2) mantendo-se a mesma largura b, o momento de inércia e a rigidez à flexão são multiplicados por 2³ = 8. Uma pequena alteração na espessura de um implante produz um impacto gigantesco na sua resistência mecânica.",
    "distractorAnalysis": [
      "Está incorreta: assume erroneamente uma dependência linear que violaria a teoria de flexão de vigas de Euler-Bernoulli.",
      "Está incorreta: seria a variação da área de secção ou da resistência à torção circular plana.",
      "Está incorreta: (16 vezes) aplica-se a cilindros circulares maciços onde o raio varia à 4.ª potência (r⁴), não a vigas retangulares finas."
    ],
    "nursingApplication": "Compreender como a espessura governa a rigidez permite ao enfermeiro valorizar a fragilidade de placas de reconstrução maleáveis e finas usadas na clavícula ou fíbula, que não foram desenhadas para suportar carga total imediata de marcha, reforçando com o doente a proibição absoluta de apoiar o pé no solo precocemente."
  },
  {
    "id": 3033,
    "topicId": 3,
    "question": "A 'Fadiga Óssea' (bone fatigue) que conduz a fraturas de stress em recrutas militares, desportistas ou doentes com osteoporose resulta de qual fenómeno microestrutural cumulativo?",
    "options": [
      "Acumulação progressiva de microfissuras na matriz mineral e lamelas ósseas decorrente de ciclos repetidos de carga mecânica diária a uma velocidade superior à capacidade biológica de reparação e remodelação celular pelos osteoblastos.",
      "Infiltração de ar gasoso nos canais de Havers através de poros da epiderme durante a respiração.",
      "Perda súbita de todos os eletrões do cálcio metálico devido ao atrito de tecidos.",
      "Combustão espontânea de fosfatos na medula óssea provocada pelo ácido láctico."
    ],
    "correctIndex": 0,
    "explanation": "Em cada passo da marcha e corrida, o osso sofre microlesões mecânicas subclínicas impercetíveis. Em condições normais de repouso intercalado, os osteócitos detetam as microfissuras e ativam unidades de remodelação óssea (BMUs) que reabsorvem a área danificada e depositam osso novo. Se o indivíduo for submetido a esforços repetitivos exaustivos contínuos sem repouso biológico adequado, a taxa de iniciação e propagação de microfissuras supera a taxa de osteogénese, coalescendo numa linha macroscópica de fratura por fadiga (fratura de stress).",
    "distractorAnalysis": [
      "Está incorreta: violaria a estanquicidade tecidual e as leis fisiológicas de barreira cutânea e hematose.",
      "Está incorreta: é uma afirmação quimicamente incorreta e desprovida de sentido biológico.",
      "Está incorreta: inventa reações de combustão endotérmica/exotérmica impossíveis nos tecidos vivos."
    ],
    "nursingApplication": "Fraturas de stress nos metatarsos ('fratura de marcha') ou na tíbia manifestam-se inicialmente por dor insidiosa aos esforços que alivia em repouso, frequentemente sem alterações visíveis no raio-X convencional inicial. O enfermeiro que atua em saúde ocupacional ou triagem clínica deve recomendar repouso de carga imediato e encaminhar para ressonância magnética precoce."
  },
  {
    "id": 3034,
    "topicId": 3,
    "question": "O cimento ósseo acrílico utilizado na fixação de próteses ortopédicas de artroplastia é o Polimetilmetacrilato (PMMA). Qual é o seu papel mecânico primário na interface entre a prótese metálica e o tecido ósseo do doente?",
    "options": [
      "Funciona como uma argamassa de redistribuição uniforme de tensões mecânicas, preenchendo todos os interstícios entre o implante e as trabéculas ósseas para evitar picos concentrados de tensão (stress concentrations) que fraturariam o osso.",
      "Atua como uma cola biológica covalente que se funde quimicamente no DNA dos osteoblastos.",
      "Serve para acelerar a decomposição biológica do osso para dar espaço a um fémur 100% plástico.",
      "Gera uma corrente elétrica galvânica para manter a circulação sanguínea artificial."
    ],
    "correctIndex": 0,
    "explanation": "O PMMA não é uma 'cola' adesiva no sentido químico tradicional; ele atua puramente como um espaçador mecânico de travamento (interlocking) mecânico tridimensional. Ao polimerizar in situ na cavidade medular, molda-se perfeitamente às irregularidades trabeculares do osso esponjoso e à superfície rugosa do metal. Isso distribui o peso corporal uniformemente por uma ampla área de contacto (σ = F / A), eliminando concentrações perigosas de tensão pontual no osso.",
    "distractorAnalysis": [
      "Está incorreta: confunde intertravamento mecânico macroscópico com reações químicas genéticas covalentes.",
      "Está incorreta: é contrária ao objetivo clínico ortopédico de preservação e sustentação óssea duradoura.",
      "Está incorreta: inventa correntes galvânicas prejudiciais que provocariam necrose e osteólise."
    ],
    "nursingApplication": "Durante a preparação e cimentação com PMMA na sala operatória, o enfermeiro sabe que a polimerização é uma reação altamente exotérmica (liberta calor, atingindo até 70 a 80 °C na fase de cura). O enfermeiro e cirurgião irrigam o campo cirúrgico copiosamente com soro fisiológico frio para evitar necrose térmica do osso adjacente e queda da tensão arterial (síndrome de implantação do cimento ósseo)."
  },
  {
    "id": 3035,
    "topicId": 3,
    "question": "Qual das seguintes articulações sinoviais humanas possui fibrocartilagens de reforço intra-articulares (Meniscos) cuja função biofísica primária é aumentar a congruência articular e a área de contacto, reduzindo substancialmente as pressões de contacto locais (P = F / A)?",
    "options": [
      "A articulação do Joelho (femorotibial).",
      "A articulação interfalângica distal dos dedos das mãos.",
      "A sutura sagital craniana entre os ossos parietais.",
      "A articulação tibiofibular média sindesmótica."
    ],
    "correctIndex": 0,
    "explanation": "Os côndilos femorais são convexos e os pratos tibiais são quase planos ou ligeiramente convexos lateralmente: a congruência geométrica natural entre eles é mínima, o que geraria minúsculas áreas de contacto e tensões compressivas esmagadoras. Os meniscos medial e lateral de fibrocartilagem aumentam a área de apoio em até 3 vezes, absorvendo cerca de 50 a 70% da carga compressiva axial e transformando tensões verticais em tensões circunferenciais de tração na periferia ('hoop stresses').",
    "distractorAnalysis": [
      "Está incorreta: possui articulações trocleares pequenas e congruentes estabilizadas por ligamentos colaterais sem meniscos.",
      "Está incorreta: é uma sinartrose/sutura fibrosa fixa do crânio sem qualquer movimento sinovial.",
      "Está incorreta: é uma membrana fibrosa sindesmótica interóssea sem cavidade articular meniscal."
    ],
    "nursingApplication": "Após uma meniscectomia total (extirpação cirúrgica do menisco por lesão complexa), a área de contacto femorotibial diminui drasticamente, multiplicando as pressões de contacto sobre a cartilagem articular remanescente por um fator de 2 a 3. Isso acelera a artrose degenerativa, exigindo reabilitação e reforço muscular do quadríceps coordenados pelo enfermeiro."
  },
  {
    "id": 3036,
    "topicId": 3,
    "question": "A rigidez elástica de um músculo em repouso passivo durante o seu alongamento depende primariamente de qual proteína sarcomérica gigante, considerada a maior cadeia polipeptídica simples do corpo humano?",
    "options": [
      "Titina (ou conectina), que funciona como uma mola molecular que ancora a miosina à linha Z do sarcómero.",
      "Mioglobina globular sarcoplasmática.",
      "Hemoglobina tetramérica intravascular.",
      "Tropomiosina reguladora filamentar."
    ],
    "correctIndex": 0,
    "explanation": "A Titina é uma macromolécula gigantesca com peso molecular superior a 3800 kDa que se estende desde a linha Z até à linha M do sarcómero. No músculo estriado relaxado, a titina atua como uma mola elástica passiva molecular bidirecional: impede que o sarcómero seja esticado além dos limites fisiológicos seguros, desenvolve a tensão elástica passiva de repouso e garante a centralização rigorosa dos filamentos grossos de miosina no centro do sarcómero.",
    "distractorAnalysis": [
      "Está incorreta: é uma proteína de transporte intracelular de oxigénio no miócito, sem propriedades elásticas de mola estrutural.",
      "Está incorreta: é uma proteína do sangue no interior dos glóbulos vermelhos.",
      "Está incorreta: é uma molécula reguladora que bloqueia os sítios de ligação da actina na ausência de cálcio, sem atuar como a mola passiva longitudinal principal."
    ],
    "nursingApplication": "Em doentes acamados ou paralisados por lesão neurológica superior, o encurtamento adaptativo crónico da titina e do colagénio perimicial culmina em espasticidade e contraturas articulares permanentes. O enfermeiro executa mobilizações passivas diárias em toda a amplitude de movimento articular para manter a extensibilidade da titina sarcomérica e do tecido conjuntivo."
  },
  {
    "id": 3037,
    "topicId": 3,
    "question": "Quando um enfermeiro aplica uma tala gessada de imobilização num membro fraturado, é de rigor clínico imperativo verificar se o bordo do gesso não exerce compressão focal mecânica sobre o 'Nervo Fibular Comum' (ciático poplíteo externo) no colo da fíbula. Qual é a complicação biomecânica e motora imediata se este nervo for submetido a isquemia por compressão contínua?",
    "options": [
      "Paresia ou paralisia dos músculos do compartimento anterior e lateral da perna, manifestando-se por incapacidade de realizar dorsiflexão e eversão do pé ('Pé Caído' ou pé pendente).",
      "Perda irreversível da visão e da audição bilateral.",
      "Paragem respiratória súbita por colapso do diafragma.",
      "Aumento imediato da frequência de pulso para 300 bpm."
    ],
    "correctIndex": 0,
    "explanation": "O nervo fibular comum contorna superficialmente o colo ósseo da fíbula (peróneo), estando coberto apenas por pele e fáscia fina. Se a tala ou o gesso apertado exercer uma pressão mecânica focal sobre este ponto, a microcirculação intraneural (vasa nervorum) é ocluída com isquemia axonal e desmielinização mecânica (neuropraxia ou axonotmese). O doente perde a inervação dos músculos tibial anterior e fibulares, arrastando a ponta do pé ao caminhar ('pé caído' / drop foot).",
    "distractorAnalysis": [
      "Está incorreta: afetam órgãos sensoriais centrais e troncos autonómicos vitais do tronco encefálico sem qualquer relação com a fíbula.",
      "Está incorreta: descreve uma arritmia cardíaca grave não relacionada com lesão de nervos periféricos do membro inferior.",
      "Está incorreta: descreve uma arritmia cardíaca grave não relacionada com lesão de nervos periféricos do membro inferior."
    ],
    "nursingApplication": "A vigilância neurovascular periférica é um cuidado de enfermagem elementar nos doentes com talas ou trações: inspecionar o colo da fíbula acolchoando-o com algodão ortopédico e avaliar rotineiramente a capacidade do doente para estender o hálux e levantar a ponta do pé ativamente contra a gravidade."
  },
  {
    "id": 3038,
    "topicId": 3,
    "question": "Em biomecânica, qual é o papel funcional e reológico dos 'Proteoglicanos' (compostos por cadeias de condroitin-sulfato e queratan-sulfato ligadas ao ácido hialurónico) na matriz da cartilagem articular?",
    "options": [
      "Apresentam elevadíssima densidade de cargas elétricas negativas fixas (iões sulfato e carboxilo) que se repelem mutuamente e atraem osmoticamente grandes volumes de água, gerando uma pressão de intumescência interna (swelling pressure) que resiste à compressão axial.",
      "Atuam como placas metálicas rígidas que impedem a deformação do colagénio.",
      "Destroem continuamente a cartilagem articular para impedir que as articulações se mexam.",
      "São enzimas proteolíticas destinadas a degradar as proteínas do sangue extravasado."
    ],
    "correctIndex": 0,
    "explanation": "As cadeias de glicosaminoglicanos dos proteoglicanos contêm milhões de grupos ionizados SO₃⁻ e COO⁻. Esta 'densidade de carga fixa' negativa atrai catiões móveis (Na⁺) para o interior da cartilagem, criando um forte gradiente osmótico de Donnan que suga água para o tecido. A água tenta expandir a matriz, mas é contida pela malha inextensível de fibras de colagénio tipo II: este equilíbrio cria uma pressão de tumescência elástica permanente (~0,2 a 0,3 MPa) pronta a absorver impactos mecânicos repentinos.",
    "distractorAnalysis": [
      "Está incorreta: confunde matriz biológica hidrofílica com blindagens metálicas inorgânicas.",
      "Está incorreta: descreveria uma ação patológica destrutiva contrária à sobrevivência da articulação.",
      "Está incorreta: descreve proteases ativadas na fibrinólise ou inflamação, não elementos estruturais da matriz."
    ],
    "nursingApplication": "Com a idade e o sedentarismo crónico, a síntese de proteoglicanos diminui e as cadeias encurtam-se, reduzindo a capacidade da cartilagem de reter água e resistir a impactos. O enfermeiro encoraja o doente a manter hidratação adequada e atividade física regular de baixo impacto para estimular o metabolismo dos condrócitos por bombeamento de fluidos."
  },
  {
    "id": 3039,
    "topicId": 3,
    "question": "A fixação cirúrgica externa de fraturas expostas graves (Fixador Externo de Ilizarov ou fixadores tubulares) baseia-se em princípios de resistência de materiais para conseguir a união óssea. Qual é o conceito biomecânico de 'Estabilidade Relativa' com micromovimentos controlados promovido por estes fixadores?",
    "options": [
      "Permitir uma ligeira flexão elástica controlada no foco de fratura sob carga axial (deformação relativa de 2% a 10%), estimulando ativamente a osteogénese e a formação exuberante de calo ósseo periosteal pela Lei de Wolff.",
      "Exigir imobilização molecular absoluta com zero micromovimentos, porque qualquer movimento nanométrico destrói imediatamente o osso.",
      "Manter o membro em rotação perpétua por intermédio de motores elétricos.",
      "Dissolver completamente os fragmentos ósseos e substituí-los por ar comprimido."
    ],
    "correctIndex": 0,
    "explanation": "Na biomecânica moderna da fixação óssea (Perren), a rigidez excessiva do implante (estabilidade absoluta, strain < 2%) induz consolidação primária lenta sem calo periosteal visível. Por outro lado, fixadores externos fornecem 'estabilidade relativa': a estrutura é suficientemente rígida para manter o alinhamento axial e rotacional dos ossos, mas suficientemente flexível sob carga fisiológica para permitir microdeformações axiais fisiológicas (strain entre 2% e 10%), que atuam como potente estímulo mecânico para a rápida diferenciação e maturação do calo ósseo.",
    "distractorAnalysis": [
      "Está incorreta: confunde estabilidade relativa com os requisitos estritos de placas rígidas de compressão interfragmentar (AO clássica).",
      "Está incorreta: é ficção sem respaldo terapêutico.",
      "Está incorreta: é um disparate biológico."
    ],
    "nursingApplication": "Nos doentes com fixadores externos, o enfermeiro tem duas missões essenciais: 1) Cuidados estéreis rigorosos no local de inserção dos pinos e fios de Kirschner na pele para evitar infeções bacterianas (flebite de trajeto e osteomielite); 2) Encorajar a carga axial progressiva com muletas conforme autorização do ortopedista, ativando as microdeformações benéficas de consolidação."
  },
  {
    "id": 3040,
    "topicId": 3,
    "question": "Durante a marcha humana normal, a força de reação vertical do solo (Ground Reaction Force, GRF) transmitida através do calcanhar e esqueleto atinge picos de intensidade correspondentes a aproximadamente:",
    "options": [
      "1,1 a 1,3 vezes o peso corporal na marcha regular, podendo ultrapassar 2,5 a 3 vezes o peso corporal na corrida e salto.",
      "Exatamente 0,01 vezes o peso corporal, pois os músculos anulam quase toda a gravidade.",
      "Cerca de 100 vezes o peso corporal em cada passo normal da marcha.",
      "Zero Newtons devido à sustentação magnética do ar atmosférico."
    ],
    "correctIndex": 0,
    "explanation": "Ao caminhar sobre uma plataforma de forças biomecânica, o registo da força vertical do solo exibe uma curva clássica com duplo pico (em forma de M): o primeiro pico (ao amortecer o calcanhar) e o segundo pico (à impulsão dos dedos) atingem cerca de 110% a 130% do peso corporal do indivíduo (1,1 a 1,3 × PC). Na corrida, o impacto inicial atinge facilmente 2,5 a 3 vezes o peso do corpo, exigindo absorção de energia pelas cartilagens, meniscos e tendões.",
    "distractorAnalysis": [
      "Está incorreta: subestima grosseiramente as forças dinâmicas reais que desaceleram a massa do corpo.",
      "Está incorreta: é um valor catastrófico irreal que esmagaria instantaneamente o fémur e a bacia.",
      "Está incorreta: violaria as leis fundamentais de Newton de contacto corpo-solo."
    ],
    "nursingApplication": "Num doente obeso pesando 120 kg, cada passo simples descarrega mais de 1400 N de força sobre as cartilagens do joelho e tornozelo. O enfermeiro que realiza educação para a saúde na osteoartrose enfatiza que uma perda modesta de 5 kg de peso corporal reduz em cerca de 15 a 20 kg a carga cumulativa sobre o joelho a cada passo dado ao longo do dia."
  },
  {
    "id": 3041,
    "topicId": 3,
    "question": "Em doentes acamados com tração esquelética transcondiliana (fio de Kirschner transfixando a tíbia proximal com estribo e pesos suspensos), qual é a complicação mecânica que ocorre se os pesos tocarem no chão ou se a cama for encostada à parede do quarto?",
    "options": [
      "A força de tração F_T cai a zero (ou diminui drasticamente), cessando o alinhamento mecânico contínuo da fratura e permitindo que o espasmo muscular encurte e desvie os fragmentos ósseos.",
      "O fio metálico de Kirschner aquece até aos 100 °C por condução térmica.",
      "A fratura consolida duas vezes mais depressa por ausência de peso.",
      "O doente desenvolve automaticamente hipertensão intracraniana aguda."
    ],
    "correctIndex": 0,
    "explanation": "A tração esquelética é um sistema de equilíbrio de forças dinâmico e contínuo. A força de tração longitudinal é fornecida exclusivamente pela força peso do bloco de contrapeso suspenso livremente no ar (P = m · g). Se o peso assentar no solo ou se a roldana encostar à parede, o chão passa a suportar o peso através da força normal (N), a tensão na corda anula-se, e os poderosos músculos da coxa (quadríceps e isquiotibiais) contraem-se em espasmo, cavalgando e desviando os fragmentos ósseos com dor lancinante no doente.",
    "distractorAnalysis": [
      "Está incorreta: inventa um fenómeno de transferência de calor inexistente no sistema puramente mecânico.",
      "Está incorreta: é contrária à medicina ortopédica; o desalinhamento dos topos ósseos impede a união anatómica adequada.",
      "Está incorreta: associa patologias neurológicas centrais que nada têm a ver com a tração mecânica do membro inferior."
    ],
    "nursingApplication": "A regra de ouro da vigilância de trações esqueléticas em enfermagem é: os pesos de tração devem permanecer SEMPRE livremente suspensos no ar, sem tocar no solo, na estrutura da cama ou em móveis, e a corda deve correr perfeitamente alinhada no sulco da roldana."
  },
  {
    "id": 3042,
    "topicId": 3,
    "question": "O colo cirúrgico do úmero no ombro é um local biomecanicamente frequente de fratura em idosos. Qual é a razão física e anatómica para a grande incidência de fraturas neste ponto após uma queda com o braço estendido?",
    "options": [
      "Representa a transição geométrica e estrutural entre o osso esponjoso trabecular da cabeça umeral e o osso cortical tubular rígido e denso da diáfise, gerando uma zona de concentração natural de tensões de cisalhamento e flexão.",
      "Porque o colo do úmero é desprovido de qualquer célula viva osteocítica.",
      "Porque o úmero é o único osso do corpo humano que não contém cálcio.",
      "Porque os músculos deltoide e peitoral maior empurram o osso para o interior da cavidade torácica."
    ],
    "correctIndex": 0,
    "explanation": "As junções anatómicas entre segmentos ósseos de diferente geometria e rigidez mecânica são zonas de descontinuidade estrutural: a cabeça do úmero é larga e constituída por osso esponjoso complacente (baixo E), enquanto a diáfise umeral é um cilindro fino de osso cortical rígido (alto E). Ao apoiar a mão no solo numa queda, as ondas de flexão e compressão concentram tensões máximas exatamente nesta zona de transição geométrica (colo cirúrgico), provocando a sua rotura.",
    "distractorAnalysis": [
      "Está incorreta porque ; o colo é profusamente vascularizado pelas artérias circunflexas umerais.",
      "Está incorreta: é absurda; o úmero possui a mineralização padrão de hidroxiapatite como qualquer osso longo.",
      "Está incorreta: descreve vetores musculares descontextualizados da fratura por queda."
    ],
    "nursingApplication": "Em doentes idosos com fratura do colo do úmero tratada conservadoramente com suspensório braquial (tipo Gilchrist ou velpeau), o enfermeiro vigia a integridade da pele no cotovelo e tórax, orienta a mobilização precoce ativa dos dedos e punho para prevenir o edema e a rigidez articular da mão, e apoia no alívio da dor."
  },
  {
    "id": 3043,
    "topicId": 3,
    "question": "No contexto da biocompatibilidade e osteointegração de implantes metálicos ortopédicos permanentes, qual é o metal mais biocompatível e com menor Módulo de Young relativo (mais próximo do osso humano)?",
    "options": [
      "Ligas de Titânio (como Ti-6Al-4V), com Módulo de Young de cerca de 100 a 110 GPa e excelente capacidade de osteointegração direta.",
      "Chumbo puro (Pb) com Módulo de Young de 16 GPa.",
      "Mercúrio líquido (Hg) à temperatura ambiente.",
      "Aço carbono não inoxidável comum de construção civil."
    ],
    "correctIndex": 0,
    "explanation": "As ligas de titânio (especialmente Ti-6Al-4V) são o padrão de ouro na fixação óssea ortopédica: possuem elevada resistência mecânica, excelente resistência à corrosão devido à camada passivadora de TiO₂, biocompatibilidade ímpar (os osteoblastos aderem diretamente à superfície mineralizando osso - osteointegração de Brånemark) e apresentam um Módulo de Young (~105-110 GPa) consideravelmente mais próximo do osso cortical (~18 GPa) do que o aço inoxidável 316L (~200 GPa) ou ligas de Cobalto-Crómio (~210 GPa).",
    "distractorAnalysis": [
      "Está incorreta: é um metal altamente tóxico e deformável plasticamente que provocaria saturnismo letal no doente.",
      "Está incorreta: é um líquido tóxico à temperatura corporal totalmente inadequado para implantes estruturais.",
      "Está incorreta: oxida e corrói com libertação de ferrugem tóxica em meio salino biológico."
    ],
    "nursingApplication": "Saber que o implante do doente é de titânio é vital para o enfermeiro na programação de exames: o titânio é um material não-ferromagnético (paramagnético muito fraco), o que permite a realização segura de Ressonância Magnética Nuclear (RMN) sob indicação e parâmetros técnicos radiológicos autorizados, ao contrário de próteses ferromagnéticas antigas."
  },
  {
    "id": 3044,
    "topicId": 3,
    "question": "O fenómeno mecânico de 'Creep' (fluência) é clinicamente observado na perda de estatura dos seres humanos ao longo do dia. Por que motivo um indivíduo mede cerca de 1 a 2 cm a menos à noite quando comparado com a sua altura matinal?",
    "options": [
      "Devido à compressão axial estática contínua do peso corporal sobre os discos intervertebrais durante o dia em posição bípede, que expulsa lentamente o fluido intersticial do núcleo pulposo através dos microporos cartilagíneos (fluência com perda de espessura discal); à noite em decúbito, o fluido é reabsorvido osmoticamente.",
      "Porque as vértebras encolhem por desidratação mineral irreversível e são reconstruídas a cada madrugada.",
      "Porque os músculos das pernas dissolvem o colagénio durante as horas de sol.",
      "Devido à dilatação térmica provocada pelo calor das lâmpadas elétricas do teto."
    ],
    "correctIndex": 0,
    "explanation": "Os discos intervertebrais são estruturas viscoelásticas bifásicas. Sob a carga compressiva gravitacional mantida ao longo de 16 horas em pé ou sentado, ocorre o escoamento lento dependente do tempo (creep) de água do núcleo pulposo para as vértebras e capilares adjacentes, reduzindo em cerca de 10% a espessura de cada um dos 23 discos intervertebrais somados. Durante o sono em decúbito horizontal (sem carga axial), a pressão de tumescência osmótica dos proteoglicanos suga a água de volta, restaurando a altura normal pela manhã.",
    "distractorAnalysis": [
      "Está incorreta: confunde escoamento de fluidos discais com reabsorção e síntese óssea de vértebras sólidas.",
      "Está incorreta: é uma afirmação biologicamente falsa.",
      "Está incorreta: é uma especulação térmica sem sentido físico nos tecidos corporais."
    ],
    "nursingApplication": "Esta desidratação discal diária acentua-se drasticamente com a idade: o idoso tem menor teor de água nos discos e recupera menos espessura à noite. O enfermeiro deve ter este facto em consideração ao aferir a estatura do doente para cálculo de Índice de Massa Corporal (IMC) ou áreas de dosagem quimioterápica, padronizando a medição sempre no mesmo período do dia."
  },
  {
    "id": 3045,
    "topicId": 3,
    "question": "A aponevrose plantar (fáscia plantar) desempenha um papel biomecânico indispensável na marcha através do chamado 'Efeito Molinete' (Windlass mechanism). Como funciona este mecanismo na fase de impulsão do pé?",
    "options": [
      "A dorsiflexão dos dedos (especialmente do hálux) traciona e enrola a fáscia plantar em redor das cabeças dos metatarsos, encurtando a fáscia e elevando o arco longitudinal medial do pé, transformando o pé numa alavanca rígida e estável para a impulsão.",
      "A flexão plantar amolece a fáscia transformando o pé num saco de líquido inerte.",
      "O tendão de Aquiles desliga-se temporariamente da tíbia para permitir o movimento.",
      "A gravidade inverte a sua direção sobre a planta do pé durante 0,1 segundos."
    ],
    "correctIndex": 0,
    "explanation": "O mecanismo do guincho/molinete (Windlass mechanism, descrito por Hicks em 1954) compara a fáscia plantar a um cabo preso no calcâneo e nas falanges proximais dos dedos: na fase terminal da marcha, ao elevar o calcanhar e dobrar o hálux em dorsiflexão contra o chão, a fáscia plantar é esticada mecanicamente sobre a 'roldana' da cabeça do 1.º metatarso. Esta tração aproxima o calcâneo dos dedos, tranca os ossos do tarso e eleva a abóbada plantar, criando uma alavanca propulsora rígida e de grande eficiência biomecânica.",
    "distractorAnalysis": [
      "Está incorreta: contraria a função da fáscia que visa rigidez estrutural, não amolecimento.",
      "Está incorreta: é um absurdo anatómico de descontinuidade estrutural tendinosa.",
      "Está incorreta: é uma violação grosseira das leis da gravidade."
    ],
    "nursingApplication": "Em doentes com fascite plantar (inflamação e microrroturas na inserção proximal da fáscia no calcâneo por sobrecarga), o enfermeiro recomenda calçado com bom suporte do arco longitudinal medial e ensina exercícios de estiramento suave da fáscia e do tendão de Aquiles antes do levante matinal para prevenir a dor aguda aos primeiros passos."
  },
  {
    "id": 3046,
    "topicId": 3,
    "question": "Na avaliação funcional da marcha de um doente com lesão do nervo glúteo superior ou fraqueza severa do músculo glúteo médio, qual é o sinal biomecânico clássico de desequilíbrio pélvico observado (Marcha de Trendelenburg)?",
    "options": [
      "A queda (inclinação para baixo) da hemipelve oposta (lado são sem carga) durante a fase de apoio unilateral no membro afetado, decorrente da incapacidade do glúteo médio de gerar o torque abdutor necessário para estabilizar a bacia na horizontal.",
      "A extensão espasmódica forçada dos dois membros superiores em direção ao teto.",
      "A rotação da cabeça em 180° sobre o atlas.",
      "O aumento imediato da temperatura corporal em 5 graus Celsius."
    ],
    "correctIndex": 0,
    "explanation": "Em apoio monopodal (um só pé no chão), o peso de todo o corpo tende a inclinar a bacia para o lado sem apoio por efeito da gravidade. O músculo glúteo médio do lado apoiado contrai-se vigorosamente exercendo um torque abdutor de alavanca de 1.ª classe na anca (articulação coxofemoral) para manter a pelve nivelada horizontalmente. Se houver paresia do glúteo médio ou luxação da anca, a bacia descai para o lado oposto contralateral (Sinal de Trendelenburg positivo).",
    "distractorAnalysis": [
      "Está incorreta: são manifestações neurológicas e anatómicas estapafúrdias sem qualquer relação com a marcha de Trendelenburg.",
      "Está incorreta: introduz variáveis metabólicas/infecciosas sem sentido biomecânico.",
      "Está incorreta: introduz variáveis metabólicas/infecciosas sem sentido biomecânico."
    ],
    "nursingApplication": "O reconhecimento da marcha de Trendelenburg pelo enfermeiro no pós-operatório de cirurgias da anca é crucial: a instabilidade pélvica eleva exponencialmente o risco de quedas. O enfermeiro prescreve e ensina o uso correto de uma canadiana (muleta) empunhada no lado CONTRALATERAL à lesão, criando uma base alargada de suporte que anula o momento desestabilizador da gravidade."
  },
  {
    "id": 3047,
    "topicId": 3,
    "question": "O ligamento cruzado anterior (LCA) do joelho é uma das estruturas mais sujeitas a rotura em traumatismos desportivos e de tráfego. Biomecanicamente, qual é a principal restrição mecânica que o LCA confere à articulação femorotibial?",
    "options": [
      "Impede a translação anterior excessiva da tíbia em relação ao fémur e restringe a rotação interna da tíbia.",
      "Impede que a rótula se funda com a fíbula.",
      "Bloqueia completamente o fluxo de sangue na artéria femoral.",
      "Mantém o joelho permanentemente em hiperextensão a 180° sem permitir qualquer flexão."
    ],
    "correctIndex": 0,
    "explanation": "O ligamento cruzado anterior (LCA) insere-se na área intercondilar anterior da tíbia e dirige-se obliquamente para cima e para trás até à face medial do côndilo femoral lateral. A sua função mecânica primária é atuar como o principal travão contra a translação anterior da tíbia relativamente ao fémur (fornecendo cerca de 85% da força de retenção estática anterior) e controlar a estabilidade rotacional femorotibial.",
    "distractorAnalysis": [
      "Está incorreta: refere-se a estruturas que nem sequer se articulam diretamente (a patela articula com o fémur, não com a cabeça da fíbula).",
      "Está incorreta: descreveria uma oclusão vascular letal.",
      "Está incorreta: impediria a marcha e a flexão normal do joelho."
    ],
    "nursingApplication": "Na triagem de urgência a um doente com trauma do joelho e hemartrose volumosa imediata (derrame de sangue sob tensão articular), o enfermeiro apoia os testes clínicos de estabilidade (Teste de Lachman e Teste da Gaveta Anterior: o deslizamento anterior anormal da tíbia confirma a perda mecânica do LCA) e aplica crioterapia precoce para alívio sintomático."
  },
  {
    "id": 3048,
    "topicId": 3,
    "question": "A rigidez articular matinal descrita por doentes com Artrite Reumatoide que melhora tipicamente após 30 a 60 minutos de movimento ativo é explicada biofisicamente por qual fenómeno reológico sinovial?",
    "options": [
      "A tixotropia e aumento da viscosidade do líquido sinovial inflamado e dos tecidos periarticulares durante o repouso noturno; com o início dos movimentos e o atrito cinético, a taxa de cisalhamento fluidifica a sinóvia (diminui a viscosidade), facilitando o deslizamento articular.",
      "A calcificação completa do osso durante o sono que se desfaz com o nascer do sol.",
      "A diminuição da gravidade dentro do quarto durante a noite.",
      "A paragem total da circulação venosa até que o doente se levante."
    ],
    "correctIndex": 0,
    "explanation": "O líquido sinovial é um fluido biológico não-Newtoniano com comportamento marcadamente tixotrópico (a sua viscosidade η depende inversamente da taxa de cisalhamento e do tempo de repouso). Em repouso estático prolongado durante a noite, a polimerização de complexos proteicos na articulação inflamada torna o fluido altamente viscoso e gelatinoso ('espessamento tixotrópico'). Com o reinício dos movimentos articulares matinais, as tensões de cisalhamento quebram a rede macromolecular temporária, diminuindo drasticamente a viscosidade e aliviando a rigidez mecânica.",
    "distractorAnalysis": [
      "Está incorreta: é uma afirmação mitológica sem fundamentação patológica.",
      "Está incorreta: nega as leis da astrofísica e da gravidade constante na Terra.",
      "Está incorreta: levaria a gangrena venosa de todos os seres humanos durante o sono."
    ],
    "nursingApplication": "Ao cuidar de doentes com artrite reumatoide, o enfermeiro programa os cuidados de higiene pessoal (banho morno matinal) para ajudar a fluidificar os tecidos por calor condutivo e orienta o doente a realizar exercícios suaves de mobilização ativa na cama antes de tentar colocar-se em pé, prevenindo quedas no levante matinal."
  },
  {
    "id": 3049,
    "topicId": 3,
    "question": "O tecido ósseo alveolar dos maxilares suporta as raízes dentárias através do 'Ligamento Periodontal' (LPD). Qual é a função biomecânica principal deste ligamento sob as forças de mastigação?",
    "options": [
      "Funciona como um sistema viscoelástico de suspensão elástica hidráulica que amortece as cargas compressivas oclusais, convertendo-as em tensões de tração fisiológicas sobre o osso alveolar circundante.",
      "Bloqueia qualquer penetração de cálcio no esmalte dentário.",
      "Impede que a saliva entre na cavidade oral.",
      "Transforma todos os alimentos sólidos em vapor gasoso."
    ],
    "correctIndex": 0,
    "explanation": "O ligamento periodontal é constituído por feixes ondulados de fibras colagénicas (fibras principais de Sharpey) imersas num gel viscoso de proteoglicanos e rico plexo vascular. Ao mastigar, o dente é comprimido na cavidade alveolar; o fluido intersticial do LPD é expelido lentamente pelos poros ósseos atuando como um amortecedor hidráulico viscoelástico ('hydraulic damper'), e as fibras oblíquas são colocadas sob tração, transmitindo a carga ao osso alveolar de forma difusa e protetora.",
    "distractorAnalysis": [
      "Está incorreta: confunde biofísica de amortecimento mastigatório com homeostase da mineralização.",
      "Está incorreta: confunde o ligamento perirradicular oculto no osso com os ductos das glândulas salivares.",
      "Está incorreta: é uma impossibilidade termodinâmica evidente."
    ],
    "nursingApplication": "Em doentes entubados na UCI sob ventilação mecânica invasiva ou submetidos a exames endoscópicos com bocal protetor, o enfermeiro verifica cuidadosamente que o tubo ou bocal não apoia pontualmente sobre incisivos frágeis ou próteses dentárias móveis, prevenindo avulsões traumáticas por sobrecarga mecânica concentrada sobre o ligamento periodontal."
  },
  {
    "id": 3050,
    "topicId": 3,
    "question": "Na reabilitação de doentes com fraqueza muscular após cirurgia ortopédica, qual é a vantagem biofísica dos exercícios em piscina aquecida de hidroterapia sobre a carga esquelética?",
    "options": [
      "A força de impulsão hidrostática de Arquimedes (E = ρ_líquido · V_submerso · g) atua verticalmente de baixo para cima, reduzindo o peso aparente do doente suportado pelos ossos e articulações em até 90% (quando imerso até ao pescoço), permitindo mobilização ativa precoce sem sobrecarga compressiva no foco cirúrgico.",
      "A água elimina a massa atómica de todos os músculos do doente.",
      "A água quente anula a resistência do atrito e permite que o doente flutue no vácuo.",
      "A piscina converte todo o tecido ósseo em titânio por osmose."
    ],
    "correctIndex": 0,
    "explanation": "Pelo Princípio de Arquimedes, todo o corpo mergulhado num fluido sofre uma impulsão vertical de baixo para cima igual ao peso do volume de fluido deslocado. Num doente imerso até ao nível das cristas ilíacas, o peso aparente nas articulações dos membros inferiores cai para cerca de 50% do peso real; com imersão até ao apêndice xifoide cai para cerca de 25-30%; e imerso até ao pescoço resta apenas cerca de 10% da carga sobre o esqueleto. Isto possibilita treino de marcha e fortalecimento muscular seguro sem risco de dano mecânico ao enxerto ou implante.",
    "distractorAnalysis": [
      "Está incorreta: viola a lei de conservação da massa de Lavoisier.",
      "Está incorreta: confunde a densidade da água (que gera atrito e viscosidade resistente) com ausência de resistência e vácuo.",
      "Está incorreta: é uma fantasia quimicamente impossível."
    ],
    "nursingApplication": "A hidroterapia e a hidroginástica orientadas por equipas multidisciplinares de saúde e enfermagem de reabilitação são o recurso de eleição para doentes com artroses graves, fraturas consolidadas em fase de carga ou obesidade mórbida, permitindo trabalhar a musculatura e o equilíbrio com mínimo impacto e máxima segurança física."
  },
  {
    "id": 3051,
    "topicId": 3,
    "question": "Na biofísica do sistema osteomuscular, em relação a 'relação percentual de massa no osso desidratado', qual é a fundamentação científica correta?",
    "options": [
      "cerca de 65% de fase mineral inorgânica (hidroxiapatite) e 35% de matriz orgânica (predominantemente colagénio tipo I e proteoglicanos). A fração inorgânica de hidroxiapatite confere rigidez extrema e resistência à compressão mecânica, enquanto o colagénio confere tenacidade e resistência à tração.",
      "Trata-se de um processo estritamente passivo e inerte onde não ocorrem quaisquer trocas metabólicas nem variações de propriedades elásticas.",
      "Corresponde a uma anulação instantânea das forças da gravidade e eliminação das leis de Newton nos tecidos biológicos.",
      "Resulta de uma reação química de oxidação que decompõe a matriz colagénica em vapor e água à temperatura corporal de 37 °C."
    ],
    "correctIndex": 0,
    "explanation": "Em biofísica osteomuscular, relação percentual de massa no osso desidratado explica-se pelo facto de que cerca de 65% de fase mineral inorgânica (hidroxiapatite) e 35% de matriz orgânica (predominantemente colagénio tipo I e proteoglicanos). A fração inorgânica de hidroxiapatite confere rigidez extrema e resistência à compressão mecânica, enquanto o colagénio confere tenacidade e resistência à tração.",
    "distractorAnalysis": [
      "Está incorreta: desconsidera a intensa atividade biológica, dinâmica e mecano-dependente do tecido osteomuscular.",
      "Está incorreta: invoca uma anulação impossível da gravidade física.",
      "Está incorreta: confunde a fisiologia da matriz com combustão química ou evaporação fictícia."
    ],
    "nursingApplication": "O enfermeiro avalia o perfil nutricional de doentes idosos e com fraturas, sabendo que a reparação do calo ósseo requer tanto aminoácidos para síntese de colagénio quanto minerais de cálcio e fosfato."
  },
  {
    "id": 3052,
    "topicId": 3,
    "question": "Durante a prestação de cuidados de enfermagem a um doente com alterações musculoesqueléticas, como se traduz na prática clínica o conceito de 'relação percentual de massa no osso desidratado'?",
    "options": [
      "Exige a imobilização absoluta e perpétua do doente no leito sem qualquer mobilização para impedir que os ossos recebam forças mecânicas.",
      "Traduz-se no seguinte cuidado e evidência: O enfermeiro avalia o perfil nutricional de doentes idosos e com fraturas, sabendo que a reparação do calo ósseo requer tanto aminoácidos para síntese de colagénio quanto minerais de cálcio e fosfato.",
      "Implica a aplicação de compressas ferventes a 100 °C para acelerar a fundição dos cristais de hidroxiapatite.",
      "Requer a suspensão de toda a alimentação oral e hidratação para forçar o organismo a reabsorver os seus próprios músculos."
    ],
    "correctIndex": 1,
    "explanation": "A aplicação de enfermagem para relação percentual de massa no osso desidratado baseia-se no princípio biomecânico: O enfermeiro avalia o perfil nutricional de doentes idosos e com fraturas, sabendo que a reparação do calo ósseo requer tanto aminoácidos para síntese de colagénio quanto minerais de cálcio e fosfato. Este raciocínio assegura intervenções fundamentadas na física biológica.",
    "distractorAnalysis": [
      "Está incorreta: é prejudicial, pois a ausência total de carga acelera a atrofia por desuso e a osteopenia.",
      "Está incorreta: causaria queimaduras graves de 3.º grau nos tecidos corporais.",
      "Está incorreta: provocaria desidratação fatal e desnutrição grave."
    ],
    "nursingApplication": "O enfermeiro avalia o perfil nutricional de doentes idosos e com fraturas, sabendo que a reparação do calo ósseo requer tanto aminoácidos para síntese de colagénio quanto minerais de cálcio e fosfato."
  },
  {
    "id": 3053,
    "topicId": 3,
    "question": "Um enfermeiro analisa o impacto biomecânico das solicitações mecânicas em 'relação percentual de massa no osso desidratado'. Qual das seguintes afirmações apresenta a análise biofísica correta?",
    "options": [
      "A resistência mecânica nesta estrutura é estritamente infinita e insuscetível a qualquer tipo de fadiga, rotura ou deformação plástica.",
      "As propriedades mecânicas dependem exclusivamente de campos eletrostáticos externos de alta frequência gerados por telemóveis.",
      "A correta caracterização física demonstra que A fração inorgânica de hidroxiapatite confere rigidez extrema e resistência à compressão mecânica, enquanto o colagénio confere tenacidade e resistência à tração.",
      "A estrutura perde a totalidade da sua rigidez quando o doente assume a posição de decúbito lateral direito."
    ],
    "correctIndex": 2,
    "explanation": "Sob o ponto de vista físico e mecanicista, A fração inorgânica de hidroxiapatite confere rigidez extrema e resistência à compressão mecânica, enquanto o colagénio confere tenacidade e resistência à tração. Isto garante a integridade funcional do aparelho locomotor.",
    "distractorAnalysis": [
      "Está incorreta: desrespeita os limites de resistência dos materiais biológicos e a realidade clínica das fraturas e entorses.",
      "Está incorreta: inventa uma correlação inverosímil com radiações de telecomunicações.",
      "Está incorreta: confunde a rotação postural de decúbito com perda intrínseca da rigidez do material ósseo."
    ],
    "nursingApplication": "O enfermeiro avalia o perfil nutricional de doentes idosos e com fraturas, sabendo que a reparação do calo ósseo requer tanto aminoácidos para síntese de colagénio quanto minerais de cálcio e fosfato."
  },
  {
    "id": 3054,
    "topicId": 3,
    "question": "Na biofísica do sistema osteomuscular, em relação a 'papel da água na viscoelasticidade da matriz óssea', qual é a fundamentação científica correta?",
    "options": [
      "Trata-se de um processo estritamente passivo e inerte onde não ocorrem quaisquer trocas metabólicas nem variações de propriedades elásticas.",
      "Corresponde a uma anulação instantânea das forças da gravidade e eliminação das leis de Newton nos tecidos biológicos.",
      "Resulta de uma reação química de oxidação que decompõe a matriz colagénica em vapor e água à temperatura corporal de 37 °C.",
      "a água ligada e livre representa cerca de 10 a 20% do volume ósseo in vivo, permitindo o escoamento hidrodinâmico nos canalículos e a dissipação viscosa de energia mecânica de choque. A água atua como um lubrificante molecular entre as fibrilhas de colagénio e modula as propriedades viscoelásticas dependentes do tempo e da velocidade de deformação."
    ],
    "correctIndex": 3,
    "explanation": "Em biofísica osteomuscular, papel da água na viscoelasticidade da matriz óssea explica-se pelo facto de que a água ligada e livre representa cerca de 10 a 20% do volume ósseo in vivo, permitindo o escoamento hidrodinâmico nos canalículos e a dissipação viscosa de energia mecânica de choque. A água atua como um lubrificante molecular entre as fibrilhas de colagénio e modula as propriedades viscoelásticas dependentes do tempo e da velocidade de deformação.",
    "distractorAnalysis": [
      "Está incorreta: desconsidera a intensa atividade biológica, dinâmica e mecano-dependente do tecido osteomuscular.",
      "Está incorreta: invoca uma anulação impossível da gravidade física.",
      "Está incorreta: confunde a fisiologia da matriz com combustão química ou evaporação fictícia."
    ],
    "nursingApplication": "O enfermeiro incentiva a hidratação hídrica adequada em pessoas acamadas, prevenindo a perda de viscoelasticidade dos tecidos conectivos articulares e discos vertebrais."
  },
  {
    "id": 3055,
    "topicId": 3,
    "question": "Durante a prestação de cuidados de enfermagem a um doente com alterações musculoesqueléticas, como se traduz na prática clínica o conceito de 'papel da água na viscoelasticidade da matriz óssea'?",
    "options": [
      "Traduz-se no seguinte cuidado e evidência: O enfermeiro incentiva a hidratação hídrica adequada em pessoas acamadas, prevenindo a perda de viscoelasticidade dos tecidos conectivos articulares e discos vertebrais.",
      "Exige a imobilização absoluta e perpétua do doente no leito sem qualquer mobilização para impedir que os ossos recebam forças mecânicas.",
      "Implica a aplicação de compressas ferventes a 100 °C para acelerar a fundição dos cristais de hidroxiapatite.",
      "Requer a suspensão de toda a alimentação oral e hidratação para forçar o organismo a reabsorver os seus próprios músculos."
    ],
    "correctIndex": 0,
    "explanation": "A aplicação de enfermagem para papel da água na viscoelasticidade da matriz óssea baseia-se no princípio biomecânico: O enfermeiro incentiva a hidratação hídrica adequada em pessoas acamadas, prevenindo a perda de viscoelasticidade dos tecidos conectivos articulares e discos vertebrais. Este raciocínio assegura intervenções fundamentadas na física biológica.",
    "distractorAnalysis": [
      "Está incorreta: é prejudicial, pois a ausência total de carga acelera a atrofia por desuso e a osteopenia.",
      "Está incorreta: causaria queimaduras graves de 3.º grau nos tecidos corporais.",
      "Está incorreta: provocaria desidratação fatal e desnutrição grave."
    ],
    "nursingApplication": "O enfermeiro incentiva a hidratação hídrica adequada em pessoas acamadas, prevenindo a perda de viscoelasticidade dos tecidos conectivos articulares e discos vertebrais."
  },
  {
    "id": 3056,
    "topicId": 3,
    "question": "Um enfermeiro analisa o impacto biomecânico das solicitações mecânicas em 'papel da água na viscoelasticidade da matriz óssea'. Qual das seguintes afirmações apresenta a análise biofísica correta?",
    "options": [
      "A resistência mecânica nesta estrutura é estritamente infinita e insuscetível a qualquer tipo de fadiga, rotura ou deformação plástica.",
      "A correta caracterização física demonstra que A água atua como um lubrificante molecular entre as fibrilhas de colagénio e modula as propriedades viscoelásticas dependentes do tempo e da velocidade de deformação.",
      "As propriedades mecânicas dependem exclusivamente de campos eletrostáticos externos de alta frequência gerados por telemóveis.",
      "A estrutura perde a totalidade da sua rigidez quando o doente assume a posição de decúbito lateral direito."
    ],
    "correctIndex": 1,
    "explanation": "Sob o ponto de vista físico e mecanicista, A água atua como um lubrificante molecular entre as fibrilhas de colagénio e modula as propriedades viscoelásticas dependentes do tempo e da velocidade de deformação. Isto garante a integridade funcional do aparelho locomotor.",
    "distractorAnalysis": [
      "Está incorreta: desrespeita os limites de resistência dos materiais biológicos e a realidade clínica das fraturas e entorses.",
      "Está incorreta: inventa uma correlação inverosímil com radiações de telecomunicações.",
      "Está incorreta: confunde a rotação postural de decúbito com perda intrínseca da rigidez do material ósseo."
    ],
    "nursingApplication": "O enfermeiro incentiva a hidratação hídrica adequada em pessoas acamadas, prevenindo a perda de viscoelasticidade dos tecidos conectivos articulares e discos vertebrais."
  },
  {
    "id": 3057,
    "topicId": 3,
    "question": "Na biofísica do sistema osteomuscular, em relação a 'mineralização óssea secundária após o encerramento do calo primário', qual é a fundamentação científica correta?",
    "options": [
      "Trata-se de um processo estritamente passivo e inerte onde não ocorrem quaisquer trocas metabólicas nem variações de propriedades elásticas.",
      "Corresponde a uma anulação instantânea das forças da gravidade e eliminação das leis de Newton nos tecidos biológicos.",
      "a mineralização primária deposita cerca de 70% dos minerais em poucas semanas, mas a mineralização secundária completa dos cristais de hidroxiapatite prolonga-se por meses a anos. Este processo lento de mineralização secundária aumenta progressivamente o Módulo de Young cortical e aproxima o osso remodelado das suas propriedades mecânicas normais.",
      "Resulta de uma reação química de oxidação que decompõe a matriz colagénica em vapor e água à temperatura corporal de 37 °C."
    ],
    "correctIndex": 2,
    "explanation": "Em biofísica osteomuscular, mineralização óssea secundária após o encerramento do calo primário explica-se pelo facto de que a mineralização primária deposita cerca de 70% dos minerais em poucas semanas, mas a mineralização secundária completa dos cristais de hidroxiapatite prolonga-se por meses a anos. Este processo lento de mineralização secundária aumenta progressivamente o Módulo de Young cortical e aproxima o osso remodelado das suas propriedades mecânicas normais.",
    "distractorAnalysis": [
      "Está incorreta: desconsidera a intensa atividade biológica, dinâmica e mecano-dependente do tecido osteomuscular.",
      "Está incorreta: invoca uma anulação impossível da gravidade física.",
      "Está incorreta: confunde a fisiologia da matriz com combustão química ou evaporação fictícia."
    ],
    "nursingApplication": "O enfermeiro educa o utente pós-fratura a manter a terapêutica de suporte e os cuidados mecânicos mesmo após a remoção do gesso, pois o osso requer meses para atingir a resistência máxima."
  },
  {
    "id": 3058,
    "topicId": 3,
    "question": "Durante a prestação de cuidados de enfermagem a um doente com alterações musculoesqueléticas, como se traduz na prática clínica o conceito de 'mineralização óssea secundária após o encerramento do calo primário'?",
    "options": [
      "Exige a imobilização absoluta e perpétua do doente no leito sem qualquer mobilização para impedir que os ossos recebam forças mecânicas.",
      "Implica a aplicação de compressas ferventes a 100 °C para acelerar a fundição dos cristais de hidroxiapatite.",
      "Requer a suspensão de toda a alimentação oral e hidratação para forçar o organismo a reabsorver os seus próprios músculos.",
      "Traduz-se no seguinte cuidado e evidência: O enfermeiro educa o utente pós-fratura a manter a terapêutica de suporte e os cuidados mecânicos mesmo após a remoção do gesso, pois o osso requer meses para atingir a resistência máxima."
    ],
    "correctIndex": 3,
    "explanation": "A aplicação de enfermagem para mineralização óssea secundária após o encerramento do calo primário baseia-se no princípio biomecânico: O enfermeiro educa o utente pós-fratura a manter a terapêutica de suporte e os cuidados mecânicos mesmo após a remoção do gesso, pois o osso requer meses para atingir a resistência máxima. Este raciocínio assegura intervenções fundamentadas na física biológica.",
    "distractorAnalysis": [
      "Está incorreta: é prejudicial, pois a ausência total de carga acelera a atrofia por desuso e a osteopenia.",
      "Está incorreta: causaria queimaduras graves de 3.º grau nos tecidos corporais.",
      "Está incorreta: provocaria desidratação fatal e desnutrição grave."
    ],
    "nursingApplication": "O enfermeiro educa o utente pós-fratura a manter a terapêutica de suporte e os cuidados mecânicos mesmo após a remoção do gesso, pois o osso requer meses para atingir a resistência máxima."
  },
  {
    "id": 3059,
    "topicId": 3,
    "question": "Um enfermeiro analisa o impacto biomecânico das solicitações mecânicas em 'mineralização óssea secundária após o encerramento do calo primário'. Qual das seguintes afirmações apresenta a análise biofísica correta?",
    "options": [
      "A correta caracterização física demonstra que Este processo lento de mineralização secundária aumenta progressivamente o Módulo de Young cortical e aproxima o osso remodelado das suas propriedades mecânicas normais.",
      "A resistência mecânica nesta estrutura é estritamente infinita e insuscetível a qualquer tipo de fadiga, rotura ou deformação plástica.",
      "As propriedades mecânicas dependem exclusivamente de campos eletrostáticos externos de alta frequência gerados por telemóveis.",
      "A estrutura perde a totalidade da sua rigidez quando o doente assume a posição de decúbito lateral direito."
    ],
    "correctIndex": 0,
    "explanation": "Sob o ponto de vista físico e mecanicista, Este processo lento de mineralização secundária aumenta progressivamente o Módulo de Young cortical e aproxima o osso remodelado das suas propriedades mecânicas normais. Isto garante a integridade funcional do aparelho locomotor.",
    "distractorAnalysis": [
      "Está incorreta: desrespeita os limites de resistência dos materiais biológicos e a realidade clínica das fraturas e entorses.",
      "Está incorreta: inventa uma correlação inverosímil com radiações de telecomunicações.",
      "Está incorreta: confunde a rotação postural de decúbito com perda intrínseca da rigidez do material ósseo."
    ],
    "nursingApplication": "O enfermeiro educa o utente pós-fratura a manter a terapêutica de suporte e os cuidados mecânicos mesmo após a remoção do gesso, pois o osso requer meses para atingir a resistência máxima."
  },
  {
    "id": 3060,
    "topicId": 3,
    "question": "Na biofísica do sistema osteomuscular, em relação a 'osteogénese imperfeita e a fragilidade óssea mecânica', qual é a fundamentação científica correta?",
    "options": [
      "Trata-se de um processo estritamente passivo e inerte onde não ocorrem quaisquer trocas metabólicas nem variações de propriedades elásticas.",
      "uma alteração estrutural no colagénio tipo I que impede a formação da tripla hélice estável, tornando a matriz orgânica frágil e incapaz de absorver forças de tração. A hidroxiapatite deposita-se sobre uma matriz proteica defeituosa, resultando num osso quebradiço como cerâmica frágil que fratura sob mínimos movimentos articulares.",
      "Corresponde a uma anulação instantânea das forças da gravidade e eliminação das leis de Newton nos tecidos biológicos.",
      "Resulta de uma reação química de oxidação que decompõe a matriz colagénica em vapor e água à temperatura corporal de 37 °C."
    ],
    "correctIndex": 1,
    "explanation": "Em biofísica osteomuscular, osteogénese imperfeita e a fragilidade óssea mecânica explica-se pelo facto de que uma alteração estrutural no colagénio tipo I que impede a formação da tripla hélice estável, tornando a matriz orgânica frágil e incapaz de absorver forças de tração. A hidroxiapatite deposita-se sobre uma matriz proteica defeituosa, resultando num osso quebradiço como cerâmica frágil que fratura sob mínimos movimentos articulares.",
    "distractorAnalysis": [
      "Está incorreta: desconsidera a intensa atividade biológica, dinâmica e mecano-dependente do tecido osteomuscular.",
      "Está incorreta: invoca uma anulação impossível da gravidade física.",
      "Está incorreta: confunde a fisiologia da matriz com combustão química ou evaporação fictícia."
    ],
    "nursingApplication": "O enfermeiro em pediatria adota protocolos rigorosos de manipulação mínima, suporte acolchoado total e ausência de trações ao mudar fraldas ou posicionar recém-nascidos com osteogénese imperfeita."
  },
  {
    "id": 3061,
    "topicId": 3,
    "question": "Durante a prestação de cuidados de enfermagem a um doente com alterações musculoesqueléticas, como se traduz na prática clínica o conceito de 'osteogénese imperfeita e a fragilidade óssea mecânica'?",
    "options": [
      "Exige a imobilização absoluta e perpétua do doente no leito sem qualquer mobilização para impedir que os ossos recebam forças mecânicas.",
      "Implica a aplicação de compressas ferventes a 100 °C para acelerar a fundição dos cristais de hidroxiapatite.",
      "Traduz-se no seguinte cuidado e evidência: O enfermeiro em pediatria adota protocolos rigorosos de manipulação mínima, suporte acolchoado total e ausência de trações ao mudar fraldas ou posicionar recém-nascidos com osteogénese imperfeita.",
      "Requer a suspensão de toda a alimentação oral e hidratação para forçar o organismo a reabsorver os seus próprios músculos."
    ],
    "correctIndex": 2,
    "explanation": "A aplicação de enfermagem para osteogénese imperfeita e a fragilidade óssea mecânica baseia-se no princípio biomecânico: O enfermeiro em pediatria adota protocolos rigorosos de manipulação mínima, suporte acolchoado total e ausência de trações ao mudar fraldas ou posicionar recém-nascidos com osteogénese imperfeita. Este raciocínio assegura intervenções fundamentadas na física biológica.",
    "distractorAnalysis": [
      "Está incorreta: é prejudicial, pois a ausência total de carga acelera a atrofia por desuso e a osteopenia.",
      "Está incorreta: causaria queimaduras graves de 3.º grau nos tecidos corporais.",
      "Está incorreta: provocaria desidratação fatal e desnutrição grave."
    ],
    "nursingApplication": "O enfermeiro em pediatria adota protocolos rigorosos de manipulação mínima, suporte acolchoado total e ausência de trações ao mudar fraldas ou posicionar recém-nascidos com osteogénese imperfeita."
  },
  {
    "id": 3062,
    "topicId": 3,
    "question": "Um enfermeiro analisa o impacto biomecânico das solicitações mecânicas em 'osteogénese imperfeita e a fragilidade óssea mecânica'. Qual das seguintes afirmações apresenta a análise biofísica correta?",
    "options": [
      "A resistência mecânica nesta estrutura é estritamente infinita e insuscetível a qualquer tipo de fadiga, rotura ou deformação plástica.",
      "As propriedades mecânicas dependem exclusivamente de campos eletrostáticos externos de alta frequência gerados por telemóveis.",
      "A estrutura perde a totalidade da sua rigidez quando o doente assume a posição de decúbito lateral direito.",
      "A correta caracterização física demonstra que A hidroxiapatite deposita-se sobre uma matriz proteica defeituosa, resultando num osso quebradiço como cerâmica frágil que fratura sob mínimos movimentos articulares."
    ],
    "correctIndex": 3,
    "explanation": "Sob o ponto de vista físico e mecanicista, A hidroxiapatite deposita-se sobre uma matriz proteica defeituosa, resultando num osso quebradiço como cerâmica frágil que fratura sob mínimos movimentos articulares. Isto garante a integridade funcional do aparelho locomotor.",
    "distractorAnalysis": [
      "Está incorreta: desrespeita os limites de resistência dos materiais biológicos e a realidade clínica das fraturas e entorses.",
      "Está incorreta: inventa uma correlação inverosímil com radiações de telecomunicações.",
      "Está incorreta: confunde a rotação postural de decúbito com perda intrínseca da rigidez do material ósseo."
    ],
    "nursingApplication": "O enfermeiro em pediatria adota protocolos rigorosos de manipulação mínima, suporte acolchoado total e ausência de trações ao mudar fraldas ou posicionar recém-nascidos com osteogénese imperfeita."
  },
  {
    "id": 3063,
    "topicId": 3,
    "question": "Na biofísica do sistema osteomuscular, em relação a 'osteomalácia e raquitismo em adultos e crianças', qual é a fundamentação científica correta?",
    "options": [
      "acumulação de osteoide orgânico não mineralizado devido a carência severa de vitamina D e cálcio biodisponível. Sem cristais de hidroxiapatite suficientes, o osso perde a sua rigidez à compressão axial, deformando-se plasticamente sob a carga do peso corporal.",
      "Trata-se de um processo estritamente passivo e inerte onde não ocorrem quaisquer trocas metabólicas nem variações de propriedades elásticas.",
      "Corresponde a uma anulação instantânea das forças da gravidade e eliminação das leis de Newton nos tecidos biológicos.",
      "Resulta de uma reação química de oxidação que decompõe a matriz colagénica em vapor e água à temperatura corporal de 37 °C."
    ],
    "correctIndex": 0,
    "explanation": "Em biofísica osteomuscular, osteomalácia e raquitismo em adultos e crianças explica-se pelo facto de que acumulação de osteoide orgânico não mineralizado devido a carência severa de vitamina D e cálcio biodisponível. Sem cristais de hidroxiapatite suficientes, o osso perde a sua rigidez à compressão axial, deformando-se plasticamente sob a carga do peso corporal.",
    "distractorAnalysis": [
      "Está incorreta: desconsidera a intensa atividade biológica, dinâmica e mecano-dependente do tecido osteomuscular.",
      "Está incorreta: invoca uma anulação impossível da gravidade física.",
      "Está incorreta: confunde a fisiologia da matriz com combustão química ou evaporação fictícia."
    ],
    "nursingApplication": "O enfermeiro identifica sinais de dores ósseas difusas e fraqueza muscular proximal, promovendo a exposição solar segura e a adesão à suplementação prescrita de colecalciferol."
  },
  {
    "id": 3064,
    "topicId": 3,
    "question": "Durante a prestação de cuidados de enfermagem a um doente com alterações musculoesqueléticas, como se traduz na prática clínica o conceito de 'osteomalácia e raquitismo em adultos e crianças'?",
    "options": [
      "Exige a imobilização absoluta e perpétua do doente no leito sem qualquer mobilização para impedir que os ossos recebam forças mecânicas.",
      "Traduz-se no seguinte cuidado e evidência: O enfermeiro identifica sinais de dores ósseas difusas e fraqueza muscular proximal, promovendo a exposição solar segura e a adesão à suplementação prescrita de colecalciferol.",
      "Implica a aplicação de compressas ferventes a 100 °C para acelerar a fundição dos cristais de hidroxiapatite.",
      "Requer a suspensão de toda a alimentação oral e hidratação para forçar o organismo a reabsorver os seus próprios músculos."
    ],
    "correctIndex": 1,
    "explanation": "A aplicação de enfermagem para osteomalácia e raquitismo em adultos e crianças baseia-se no princípio biomecânico: O enfermeiro identifica sinais de dores ósseas difusas e fraqueza muscular proximal, promovendo a exposição solar segura e a adesão à suplementação prescrita de colecalciferol. Este raciocínio assegura intervenções fundamentadas na física biológica.",
    "distractorAnalysis": [
      "Está incorreta: é prejudicial, pois a ausência total de carga acelera a atrofia por desuso e a osteopenia.",
      "Está incorreta: causaria queimaduras graves de 3.º grau nos tecidos corporais.",
      "Está incorreta: provocaria desidratação fatal e desnutrição grave."
    ],
    "nursingApplication": "O enfermeiro identifica sinais de dores ósseas difusas e fraqueza muscular proximal, promovendo a exposição solar segura e a adesão à suplementação prescrita de colecalciferol."
  },
  {
    "id": 3065,
    "topicId": 3,
    "question": "Um enfermeiro analisa o impacto biomecânico das solicitações mecânicas em 'osteomalácia e raquitismo em adultos e crianças'. Qual das seguintes afirmações apresenta a análise biofísica correta?",
    "options": [
      "A resistência mecânica nesta estrutura é estritamente infinita e insuscetível a qualquer tipo de fadiga, rotura ou deformação plástica.",
      "As propriedades mecânicas dependem exclusivamente de campos eletrostáticos externos de alta frequência gerados por telemóveis.",
      "A correta caracterização física demonstra que Sem cristais de hidroxiapatite suficientes, o osso perde a sua rigidez à compressão axial, deformando-se plasticamente sob a carga do peso corporal.",
      "A estrutura perde a totalidade da sua rigidez quando o doente assume a posição de decúbito lateral direito."
    ],
    "correctIndex": 2,
    "explanation": "Sob o ponto de vista físico e mecanicista, Sem cristais de hidroxiapatite suficientes, o osso perde a sua rigidez à compressão axial, deformando-se plasticamente sob a carga do peso corporal. Isto garante a integridade funcional do aparelho locomotor.",
    "distractorAnalysis": [
      "Está incorreta: desrespeita os limites de resistência dos materiais biológicos e a realidade clínica das fraturas e entorses.",
      "Está incorreta: inventa uma correlação inverosímil com radiações de telecomunicações.",
      "Está incorreta: confunde a rotação postural de decúbito com perda intrínseca da rigidez do material ósseo."
    ],
    "nursingApplication": "O enfermeiro identifica sinais de dores ósseas difusas e fraqueza muscular proximal, promovendo a exposição solar segura e a adesão à suplementação prescrita de colecalciferol."
  },
  {
    "id": 3066,
    "topicId": 3,
    "question": "Na biofísica do sistema osteomuscular, em relação a 'conceito de anisotropia mecânica no osso cortical', qual é a fundamentação científica correta?",
    "options": [
      "Trata-se de um processo estritamente passivo e inerte onde não ocorrem quaisquer trocas metabólicas nem variações de propriedades elásticas.",
      "Corresponde a uma anulação instantânea das forças da gravidade e eliminação das leis de Newton nos tecidos biológicos.",
      "Resulta de uma reação química de oxidação que decompõe a matriz colagénica em vapor e água à temperatura corporal de 37 °C.",
      "as constantes elásticas e os limites de fratura dependem do ângulo e da orientação com que a força incide em relação ao alinhamento dos osteónios longitudinais. O osso resiste muito mais a cargas longitudinais paralelas aos sistemas de Havers do que a cargas oblíquas ou transversais."
    ],
    "correctIndex": 3,
    "explanation": "Em biofísica osteomuscular, conceito de anisotropia mecânica no osso cortical explica-se pelo facto de que as constantes elásticas e os limites de fratura dependem do ângulo e da orientação com que a força incide em relação ao alinhamento dos osteónios longitudinais. O osso resiste muito mais a cargas longitudinais paralelas aos sistemas de Havers do que a cargas oblíquas ou transversais.",
    "distractorAnalysis": [
      "Está incorreta: desconsidera a intensa atividade biológica, dinâmica e mecano-dependente do tecido osteomuscular.",
      "Está incorreta: invoca uma anulação impossível da gravidade física.",
      "Está incorreta: confunde a fisiologia da matriz com combustão química ou evaporação fictícia."
    ],
    "nursingApplication": "O enfermeiro assegura que durante transferências e posicionamentos no leito as forças sejam aplicadas longitudinalmente aos membros, evitando forças de torção ou empurrões transversais."
  },
  {
    "id": 3067,
    "topicId": 3,
    "question": "Durante a prestação de cuidados de enfermagem a um doente com alterações musculoesqueléticas, como se traduz na prática clínica o conceito de 'conceito de anisotropia mecânica no osso cortical'?",
    "options": [
      "Traduz-se no seguinte cuidado e evidência: O enfermeiro assegura que durante transferências e posicionamentos no leito as forças sejam aplicadas longitudinalmente aos membros, evitando forças de torção ou empurrões transversais.",
      "Exige a imobilização absoluta e perpétua do doente no leito sem qualquer mobilização para impedir que os ossos recebam forças mecânicas.",
      "Implica a aplicação de compressas ferventes a 100 °C para acelerar a fundição dos cristais de hidroxiapatite.",
      "Requer a suspensão de toda a alimentação oral e hidratação para forçar o organismo a reabsorver os seus próprios músculos."
    ],
    "correctIndex": 0,
    "explanation": "A aplicação de enfermagem para conceito de anisotropia mecânica no osso cortical baseia-se no princípio biomecânico: O enfermeiro assegura que durante transferências e posicionamentos no leito as forças sejam aplicadas longitudinalmente aos membros, evitando forças de torção ou empurrões transversais. Este raciocínio assegura intervenções fundamentadas na física biológica.",
    "distractorAnalysis": [
      "Está incorreta: é prejudicial, pois a ausência total de carga acelera a atrofia por desuso e a osteopenia.",
      "Está incorreta: causaria queimaduras graves de 3.º grau nos tecidos corporais.",
      "Está incorreta: provocaria desidratação fatal e desnutrição grave."
    ],
    "nursingApplication": "O enfermeiro assegura que durante transferências e posicionamentos no leito as forças sejam aplicadas longitudinalmente aos membros, evitando forças de torção ou empurrões transversais."
  },
  {
    "id": 3068,
    "topicId": 3,
    "question": "Um enfermeiro analisa o impacto biomecânico das solicitações mecânicas em 'conceito de anisotropia mecânica no osso cortical'. Qual das seguintes afirmações apresenta a análise biofísica correta?",
    "options": [
      "A resistência mecânica nesta estrutura é estritamente infinita e insuscetível a qualquer tipo de fadiga, rotura ou deformação plástica.",
      "A correta caracterização física demonstra que O osso resiste muito mais a cargas longitudinais paralelas aos sistemas de Havers do que a cargas oblíquas ou transversais.",
      "As propriedades mecânicas dependem exclusivamente de campos eletrostáticos externos de alta frequência gerados por telemóveis.",
      "A estrutura perde a totalidade da sua rigidez quando o doente assume a posição de decúbito lateral direito."
    ],
    "correctIndex": 1,
    "explanation": "Sob o ponto de vista físico e mecanicista, O osso resiste muito mais a cargas longitudinais paralelas aos sistemas de Havers do que a cargas oblíquas ou transversais. Isto garante a integridade funcional do aparelho locomotor.",
    "distractorAnalysis": [
      "Está incorreta: desrespeita os limites de resistência dos materiais biológicos e a realidade clínica das fraturas e entorses.",
      "Está incorreta: inventa uma correlação inverosímil com radiações de telecomunicações.",
      "Está incorreta: confunde a rotação postural de decúbito com perda intrínseca da rigidez do material ósseo."
    ],
    "nursingApplication": "O enfermeiro assegura que durante transferências e posicionamentos no leito as forças sejam aplicadas longitudinalmente aos membros, evitando forças de torção ou empurrões transversais."
  },
  {
    "id": 3069,
    "topicId": 3,
    "question": "Na biofísica do sistema osteomuscular, em relação a 'ensaio de tração pura vs ensaio de compressão pura no osso', qual é a fundamentação científica correta?",
    "options": [
      "Trata-se de um processo estritamente passivo e inerte onde não ocorrem quaisquer trocas metabólicas nem variações de propriedades elásticas.",
      "Corresponde a uma anulação instantânea das forças da gravidade e eliminação das leis de Newton nos tecidos biológicos.",
      "o limite último de resistência à compressão longitudinal (~190 MPa) é significativamente superior ao limite à tração longitudinal (~130 MPa). Esta diferença reflete a necessidade evolutiva de suportar o peso gravitacional vertical e as fortes contrações musculares axiais.",
      "Resulta de uma reação química de oxidação que decompõe a matriz colagénica em vapor e água à temperatura corporal de 37 °C."
    ],
    "correctIndex": 2,
    "explanation": "Em biofísica osteomuscular, ensaio de tração pura vs ensaio de compressão pura no osso explica-se pelo facto de que o limite último de resistência à compressão longitudinal (~190 MPa) é significativamente superior ao limite à tração longitudinal (~130 MPa). Esta diferença reflete a necessidade evolutiva de suportar o peso gravitacional vertical e as fortes contrações musculares axiais.",
    "distractorAnalysis": [
      "Está incorreta: desconsidera a intensa atividade biológica, dinâmica e mecano-dependente do tecido osteomuscular.",
      "Está incorreta: invoca uma anulação impossível da gravidade física.",
      "Está incorreta: confunde a fisiologia da matriz com combustão química ou evaporação fictícia."
    ],
    "nursingApplication": "O enfermeiro compreende porque o uso de muletas auxiliares é vital: descarregar o membro reduz simultaneamente as forças de compressão e os momentos de flexão na tíbia fraturada."
  },
  {
    "id": 3070,
    "topicId": 3,
    "question": "Durante a prestação de cuidados de enfermagem a um doente com alterações musculoesqueléticas, como se traduz na prática clínica o conceito de 'ensaio de tração pura vs ensaio de compressão pura no osso'?",
    "options": [
      "Exige a imobilização absoluta e perpétua do doente no leito sem qualquer mobilização para impedir que os ossos recebam forças mecânicas.",
      "Implica a aplicação de compressas ferventes a 100 °C para acelerar a fundição dos cristais de hidroxiapatite.",
      "Requer a suspensão de toda a alimentação oral e hidratação para forçar o organismo a reabsorver os seus próprios músculos.",
      "Traduz-se no seguinte cuidado e evidência: O enfermeiro compreende porque o uso de muletas auxiliares é vital: descarregar o membro reduz simultaneamente as forças de compressão e os momentos de flexão na tíbia fraturada."
    ],
    "correctIndex": 3,
    "explanation": "A aplicação de enfermagem para ensaio de tração pura vs ensaio de compressão pura no osso baseia-se no princípio biomecânico: O enfermeiro compreende porque o uso de muletas auxiliares é vital: descarregar o membro reduz simultaneamente as forças de compressão e os momentos de flexão na tíbia fraturada. Este raciocínio assegura intervenções fundamentadas na física biológica.",
    "distractorAnalysis": [
      "Está incorreta: é prejudicial, pois a ausência total de carga acelera a atrofia por desuso e a osteopenia.",
      "Está incorreta: causaria queimaduras graves de 3.º grau nos tecidos corporais.",
      "Está incorreta: provocaria desidratação fatal e desnutrição grave."
    ],
    "nursingApplication": "O enfermeiro compreende porque o uso de muletas auxiliares é vital: descarregar o membro reduz simultaneamente as forças de compressão e os momentos de flexão na tíbia fraturada."
  },
  {
    "id": 3071,
    "topicId": 3,
    "question": "Um enfermeiro analisa o impacto biomecânico das solicitações mecânicas em 'ensaio de tração pura vs ensaio de compressão pura no osso'. Qual das seguintes afirmações apresenta a análise biofísica correta?",
    "options": [
      "A correta caracterização física demonstra que Esta diferença reflete a necessidade evolutiva de suportar o peso gravitacional vertical e as fortes contrações musculares axiais.",
      "A resistência mecânica nesta estrutura é estritamente infinita e insuscetível a qualquer tipo de fadiga, rotura ou deformação plástica.",
      "As propriedades mecânicas dependem exclusivamente de campos eletrostáticos externos de alta frequência gerados por telemóveis.",
      "A estrutura perde a totalidade da sua rigidez quando o doente assume a posição de decúbito lateral direito."
    ],
    "correctIndex": 0,
    "explanation": "Sob o ponto de vista físico e mecanicista, Esta diferença reflete a necessidade evolutiva de suportar o peso gravitacional vertical e as fortes contrações musculares axiais. Isto garante a integridade funcional do aparelho locomotor.",
    "distractorAnalysis": [
      "Está incorreta: desrespeita os limites de resistência dos materiais biológicos e a realidade clínica das fraturas e entorses.",
      "Está incorreta: inventa uma correlação inverosímil com radiações de telecomunicações.",
      "Está incorreta: confunde a rotação postural de decúbito com perda intrínseca da rigidez do material ósseo."
    ],
    "nursingApplication": "O enfermeiro compreende porque o uso de muletas auxiliares é vital: descarregar o membro reduz simultaneamente as forças de compressão e os momentos de flexão na tíbia fraturada."
  },
  {
    "id": 3072,
    "topicId": 3,
    "question": "Na biofísica do sistema osteomuscular, em relação a 'fragilidade extrema do osso ao cisalhamento puro', qual é a fundamentação científica correta?",
    "options": [
      "Trata-se de um processo estritamente passivo e inerte onde não ocorrem quaisquer trocas metabólicas nem variações de propriedades elásticas.",
      "a resistência ao cisalhamento transversal ronda apenas 50 a 70 MPa, sendo o ponto fraco da estrutura óssea compacta. Forças que tentam fazer deslizar planos transversais de osteónios quebram as ligações de cimento interfibrilar com facilidade relativa.",
      "Corresponde a uma anulação instantânea das forças da gravidade e eliminação das leis de Newton nos tecidos biológicos.",
      "Resulta de uma reação química de oxidação que decompõe a matriz colagénica em vapor e água à temperatura corporal de 37 °C."
    ],
    "correctIndex": 1,
    "explanation": "Em biofísica osteomuscular, fragilidade extrema do osso ao cisalhamento puro explica-se pelo facto de que a resistência ao cisalhamento transversal ronda apenas 50 a 70 MPa, sendo o ponto fraco da estrutura óssea compacta. Forças que tentam fazer deslizar planos transversais de osteónios quebram as ligações de cimento interfibrilar com facilidade relativa.",
    "distractorAnalysis": [
      "Está incorreta: desconsidera a intensa atividade biológica, dinâmica e mecano-dependente do tecido osteomuscular.",
      "Está incorreta: invoca uma anulação impossível da gravidade física.",
      "Está incorreta: confunde a fisiologia da matriz com combustão química ou evaporação fictícia."
    ],
    "nursingApplication": "O enfermeiro imobiliza traumatismos de perna com talas que abranjam a articulação acima e abaixo, eliminando movimentos laterais de cisalhamento sobre o foco de fratura."
  },
  {
    "id": 3073,
    "topicId": 3,
    "question": "Durante a prestação de cuidados de enfermagem a um doente com alterações musculoesqueléticas, como se traduz na prática clínica o conceito de 'fragilidade extrema do osso ao cisalhamento puro'?",
    "options": [
      "Exige a imobilização absoluta e perpétua do doente no leito sem qualquer mobilização para impedir que os ossos recebam forças mecânicas.",
      "Implica a aplicação de compressas ferventes a 100 °C para acelerar a fundição dos cristais de hidroxiapatite.",
      "Traduz-se no seguinte cuidado e evidência: O enfermeiro imobiliza traumatismos de perna com talas que abranjam a articulação acima e abaixo, eliminando movimentos laterais de cisalhamento sobre o foco de fratura.",
      "Requer a suspensão de toda a alimentação oral e hidratação para forçar o organismo a reabsorver os seus próprios músculos."
    ],
    "correctIndex": 2,
    "explanation": "A aplicação de enfermagem para fragilidade extrema do osso ao cisalhamento puro baseia-se no princípio biomecânico: O enfermeiro imobiliza traumatismos de perna com talas que abranjam a articulação acima e abaixo, eliminando movimentos laterais de cisalhamento sobre o foco de fratura. Este raciocínio assegura intervenções fundamentadas na física biológica.",
    "distractorAnalysis": [
      "Está incorreta: é prejudicial, pois a ausência total de carga acelera a atrofia por desuso e a osteopenia.",
      "Está incorreta: causaria queimaduras graves de 3.º grau nos tecidos corporais.",
      "Está incorreta: provocaria desidratação fatal e desnutrição grave."
    ],
    "nursingApplication": "O enfermeiro imobiliza traumatismos de perna com talas que abranjam a articulação acima e abaixo, eliminando movimentos laterais de cisalhamento sobre o foco de fratura."
  },
  {
    "id": 3074,
    "topicId": 3,
    "question": "Um enfermeiro analisa o impacto biomecânico das solicitações mecânicas em 'fragilidade extrema do osso ao cisalhamento puro'. Qual das seguintes afirmações apresenta a análise biofísica correta?",
    "options": [
      "A resistência mecânica nesta estrutura é estritamente infinita e insuscetível a qualquer tipo de fadiga, rotura ou deformação plástica.",
      "As propriedades mecânicas dependem exclusivamente de campos eletrostáticos externos de alta frequência gerados por telemóveis.",
      "A estrutura perde a totalidade da sua rigidez quando o doente assume a posição de decúbito lateral direito.",
      "A correta caracterização física demonstra que Forças que tentam fazer deslizar planos transversais de osteónios quebram as ligações de cimento interfibrilar com facilidade relativa."
    ],
    "correctIndex": 3,
    "explanation": "Sob o ponto de vista físico e mecanicista, Forças que tentam fazer deslizar planos transversais de osteónios quebram as ligações de cimento interfibrilar com facilidade relativa. Isto garante a integridade funcional do aparelho locomotor.",
    "distractorAnalysis": [
      "Está incorreta: desrespeita os limites de resistência dos materiais biológicos e a realidade clínica das fraturas e entorses.",
      "Está incorreta: inventa uma correlação inverosímil com radiações de telecomunicações.",
      "Está incorreta: confunde a rotação postural de decúbito com perda intrínseca da rigidez do material ósseo."
    ],
    "nursingApplication": "O enfermeiro imobiliza traumatismos de perna com talas que abranjam a articulação acima e abaixo, eliminando movimentos laterais de cisalhamento sobre o foco de fratura."
  },
  {
    "id": 3075,
    "topicId": 3,
    "question": "Na biofísica do sistema osteomuscular, em relação a 'viscoelasticidade e taxa de deformação (strain rate)', qual é a fundamentação científica correta?",
    "options": [
      "a rigidez e a resistência do osso aumentam consideravelmente quando a carga mecânica é aplicada a alta velocidade em comparação com uma carga lenta. Sob impacto súbito rápido (alta taxa de deformação), o osso comporta-se como um material mais rígido e frágil, absorvendo mais energia total antes da rotura cominutiva.",
      "Trata-se de um processo estritamente passivo e inerte onde não ocorrem quaisquer trocas metabólicas nem variações de propriedades elásticas.",
      "Corresponde a uma anulação instantânea das forças da gravidade e eliminação das leis de Newton nos tecidos biológicos.",
      "Resulta de uma reação química de oxidação que decompõe a matriz colagénica em vapor e água à temperatura corporal de 37 °C."
    ],
    "correctIndex": 0,
    "explanation": "Em biofísica osteomuscular, viscoelasticidade e taxa de deformação (strain rate) explica-se pelo facto de que a rigidez e a resistência do osso aumentam consideravelmente quando a carga mecânica é aplicada a alta velocidade em comparação com uma carga lenta. Sob impacto súbito rápido (alta taxa de deformação), o osso comporta-se como um material mais rígido e frágil, absorvendo mais energia total antes da rotura cominutiva.",
    "distractorAnalysis": [
      "Está incorreta: desconsidera a intensa atividade biológica, dinâmica e mecano-dependente do tecido osteomuscular.",
      "Está incorreta: invoca uma anulação impossível da gravidade física.",
      "Está incorreta: confunde a fisiologia da matriz com combustão química ou evaporação fictícia."
    ],
    "nursingApplication": "O enfermeiro alerta para a gravidade dos acidentes desportivos e de tráfego rápido, onde o impacto a alta velocidade resulta frequentemente em fraturas com múltiplos fragmentos ósseos."
  },
  {
    "id": 3076,
    "topicId": 3,
    "question": "Durante a prestação de cuidados de enfermagem a um doente com alterações musculoesqueléticas, como se traduz na prática clínica o conceito de 'viscoelasticidade e taxa de deformação (strain rate)'?",
    "options": [
      "Exige a imobilização absoluta e perpétua do doente no leito sem qualquer mobilização para impedir que os ossos recebam forças mecânicas.",
      "Traduz-se no seguinte cuidado e evidência: O enfermeiro alerta para a gravidade dos acidentes desportivos e de tráfego rápido, onde o impacto a alta velocidade resulta frequentemente em fraturas com múltiplos fragmentos ósseos.",
      "Implica a aplicação de compressas ferventes a 100 °C para acelerar a fundição dos cristais de hidroxiapatite.",
      "Requer a suspensão de toda a alimentação oral e hidratação para forçar o organismo a reabsorver os seus próprios músculos."
    ],
    "correctIndex": 1,
    "explanation": "A aplicação de enfermagem para viscoelasticidade e taxa de deformação (strain rate) baseia-se no princípio biomecânico: O enfermeiro alerta para a gravidade dos acidentes desportivos e de tráfego rápido, onde o impacto a alta velocidade resulta frequentemente em fraturas com múltiplos fragmentos ósseos. Este raciocínio assegura intervenções fundamentadas na física biológica.",
    "distractorAnalysis": [
      "Está incorreta: é prejudicial, pois a ausência total de carga acelera a atrofia por desuso e a osteopenia.",
      "Está incorreta: causaria queimaduras graves de 3.º grau nos tecidos corporais.",
      "Está incorreta: provocaria desidratação fatal e desnutrição grave."
    ],
    "nursingApplication": "O enfermeiro alerta para a gravidade dos acidentes desportivos e de tráfego rápido, onde o impacto a alta velocidade resulta frequentemente em fraturas com múltiplos fragmentos ósseos."
  },
  {
    "id": 3077,
    "topicId": 3,
    "question": "Um enfermeiro analisa o impacto biomecânico das solicitações mecânicas em 'viscoelasticidade e taxa de deformação (strain rate)'. Qual das seguintes afirmações apresenta a análise biofísica correta?",
    "options": [
      "A resistência mecânica nesta estrutura é estritamente infinita e insuscetível a qualquer tipo de fadiga, rotura ou deformação plástica.",
      "As propriedades mecânicas dependem exclusivamente de campos eletrostáticos externos de alta frequência gerados por telemóveis.",
      "A correta caracterização física demonstra que Sob impacto súbito rápido (alta taxa de deformação), o osso comporta-se como um material mais rígido e frágil, absorvendo mais energia total antes da rotura cominutiva.",
      "A estrutura perde a totalidade da sua rigidez quando o doente assume a posição de decúbito lateral direito."
    ],
    "correctIndex": 2,
    "explanation": "Sob o ponto de vista físico e mecanicista, Sob impacto súbito rápido (alta taxa de deformação), o osso comporta-se como um material mais rígido e frágil, absorvendo mais energia total antes da rotura cominutiva. Isto garante a integridade funcional do aparelho locomotor.",
    "distractorAnalysis": [
      "Está incorreta: desrespeita os limites de resistência dos materiais biológicos e a realidade clínica das fraturas e entorses.",
      "Está incorreta: inventa uma correlação inverosímil com radiações de telecomunicações.",
      "Está incorreta: confunde a rotação postural de decúbito com perda intrínseca da rigidez do material ósseo."
    ],
    "nursingApplication": "O enfermeiro alerta para a gravidade dos acidentes desportivos e de tráfego rápido, onde o impacto a alta velocidade resulta frequentemente em fraturas com múltiplos fragmentos ósseos."
  },
  {
    "id": 3078,
    "topicId": 3,
    "question": "Na biofísica do sistema osteomuscular, em relação a 'fadiga mecânica óssea e fraturas de stress em recrutas e atletas', qual é a fundamentação científica correta?",
    "options": [
      "Trata-se de um processo estritamente passivo e inerte onde não ocorrem quaisquer trocas metabólicas nem variações de propriedades elásticas.",
      "Corresponde a uma anulação instantânea das forças da gravidade e eliminação das leis de Newton nos tecidos biológicos.",
      "Resulta de uma reação química de oxidação que decompõe a matriz colagénica em vapor e água à temperatura corporal de 37 °C.",
      "a aplicação repetitiva de microcargas cíclicas subclínicas ultrapassa a capacidade de reparação biológica dos osteoblastos, originando microrroturas progressivas. Se o tempo de repouso mecânico for insuficiente, as microfissuras coalescem numa fratura de stress completa sem trauma agudo único."
    ],
    "correctIndex": 3,
    "explanation": "Em biofísica osteomuscular, fadiga mecânica óssea e fraturas de stress em recrutas e atletas explica-se pelo facto de que a aplicação repetitiva de microcargas cíclicas subclínicas ultrapassa a capacidade de reparação biológica dos osteoblastos, originando microrroturas progressivas. Se o tempo de repouso mecânico for insuficiente, as microfissuras coalescem numa fratura de stress completa sem trauma agudo único.",
    "distractorAnalysis": [
      "Está incorreta: desconsidera a intensa atividade biológica, dinâmica e mecano-dependente do tecido osteomuscular.",
      "Está incorreta: invoca uma anulação impossível da gravidade física.",
      "Está incorreta: confunde a fisiologia da matriz com combustão química ou evaporação fictícia."
    ],
    "nursingApplication": "O enfermeiro do trabalho e desporto monitoriza dores ósseas insidiosas nos metatarsos e tíbia em indivíduos que iniciaram marchas ou treinos intensos sem progressão gradual."
  },
  {
    "id": 3079,
    "topicId": 3,
    "question": "Durante a prestação de cuidados de enfermagem a um doente com alterações musculoesqueléticas, como se traduz na prática clínica o conceito de 'fadiga mecânica óssea e fraturas de stress em recrutas e atletas'?",
    "options": [
      "Traduz-se no seguinte cuidado e evidência: O enfermeiro do trabalho e desporto monitoriza dores ósseas insidiosas nos metatarsos e tíbia em indivíduos que iniciaram marchas ou treinos intensos sem progressão gradual.",
      "Exige a imobilização absoluta e perpétua do doente no leito sem qualquer mobilização para impedir que os ossos recebam forças mecânicas.",
      "Implica a aplicação de compressas ferventes a 100 °C para acelerar a fundição dos cristais de hidroxiapatite.",
      "Requer a suspensão de toda a alimentação oral e hidratação para forçar o organismo a reabsorver os seus próprios músculos."
    ],
    "correctIndex": 0,
    "explanation": "A aplicação de enfermagem para fadiga mecânica óssea e fraturas de stress em recrutas e atletas baseia-se no princípio biomecânico: O enfermeiro do trabalho e desporto monitoriza dores ósseas insidiosas nos metatarsos e tíbia em indivíduos que iniciaram marchas ou treinos intensos sem progressão gradual. Este raciocínio assegura intervenções fundamentadas na física biológica.",
    "distractorAnalysis": [
      "Está incorreta: é prejudicial, pois a ausência total de carga acelera a atrofia por desuso e a osteopenia.",
      "Está incorreta: causaria queimaduras graves de 3.º grau nos tecidos corporais.",
      "Está incorreta: provocaria desidratação fatal e desnutrição grave."
    ],
    "nursingApplication": "O enfermeiro do trabalho e desporto monitoriza dores ósseas insidiosas nos metatarsos e tíbia em indivíduos que iniciaram marchas ou treinos intensos sem progressão gradual."
  },
  {
    "id": 3080,
    "topicId": 3,
    "question": "Um enfermeiro analisa o impacto biomecânico das solicitações mecânicas em 'fadiga mecânica óssea e fraturas de stress em recrutas e atletas'. Qual das seguintes afirmações apresenta a análise biofísica correta?",
    "options": [
      "A resistência mecânica nesta estrutura é estritamente infinita e insuscetível a qualquer tipo de fadiga, rotura ou deformação plástica.",
      "A correta caracterização física demonstra que Se o tempo de repouso mecânico for insuficiente, as microfissuras coalescem numa fratura de stress completa sem trauma agudo único.",
      "As propriedades mecânicas dependem exclusivamente de campos eletrostáticos externos de alta frequência gerados por telemóveis.",
      "A estrutura perde a totalidade da sua rigidez quando o doente assume a posição de decúbito lateral direito."
    ],
    "correctIndex": 1,
    "explanation": "Sob o ponto de vista físico e mecanicista, Se o tempo de repouso mecânico for insuficiente, as microfissuras coalescem numa fratura de stress completa sem trauma agudo único. Isto garante a integridade funcional do aparelho locomotor.",
    "distractorAnalysis": [
      "Está incorreta: desrespeita os limites de resistência dos materiais biológicos e a realidade clínica das fraturas e entorses.",
      "Está incorreta: inventa uma correlação inverosímil com radiações de telecomunicações.",
      "Está incorreta: confunde a rotação postural de decúbito com perda intrínseca da rigidez do material ósseo."
    ],
    "nursingApplication": "O enfermeiro do trabalho e desporto monitoriza dores ósseas insidiosas nos metatarsos e tíbia em indivíduos que iniciaram marchas ou treinos intensos sem progressão gradual."
  },
  {
    "id": 3081,
    "topicId": 3,
    "question": "Na biofísica do sistema osteomuscular, em relação a 'papel da esclerostina na mecanotransdução dos osteócitos', qual é a fundamentação científica correta?",
    "options": [
      "Trata-se de um processo estritamente passivo e inerte onde não ocorrem quaisquer trocas metabólicas nem variações de propriedades elásticas.",
      "Corresponde a uma anulação instantânea das forças da gravidade e eliminação das leis de Newton nos tecidos biológicos.",
      "sob carga mecânica contínua, os osteócitos inibem a secreção de esclerostina, desbloqueando a via anabólica Wnt/β-catenina que ativa a osteogénese. Na ausência de estímulo mecânico (imobilização), os osteócitos libertam altos níveis de esclerostina, suprimindo os osteoblastos e promovendo a reabsorção óssea.",
      "Resulta de uma reação química de oxidação que decompõe a matriz colagénica em vapor e água à temperatura corporal de 37 °C."
    ],
    "correctIndex": 2,
    "explanation": "Em biofísica osteomuscular, papel da esclerostina na mecanotransdução dos osteócitos explica-se pelo facto de que sob carga mecânica contínua, os osteócitos inibem a secreção de esclerostina, desbloqueando a via anabólica Wnt/β-catenina que ativa a osteogénese. Na ausência de estímulo mecânico (imobilização), os osteócitos libertam altos níveis de esclerostina, suprimindo os osteoblastos e promovendo a reabsorção óssea.",
    "distractorAnalysis": [
      "Está incorreta: desconsidera a intensa atividade biológica, dinâmica e mecano-dependente do tecido osteomuscular.",
      "Está incorreta: invoca uma anulação impossível da gravidade física.",
      "Está incorreta: confunde a fisiologia da matriz com combustão química ou evaporação fictícia."
    ],
    "nursingApplication": "O enfermeiro integra na reabilitação exercícios de carga axial, sabendo que a estimulação mecânica diária silencia a esclerostina e promove a síntese de osso novo."
  },
  {
    "id": 3082,
    "topicId": 3,
    "question": "Durante a prestação de cuidados de enfermagem a um doente com alterações musculoesqueléticas, como se traduz na prática clínica o conceito de 'papel da esclerostina na mecanotransdução dos osteócitos'?",
    "options": [
      "Exige a imobilização absoluta e perpétua do doente no leito sem qualquer mobilização para impedir que os ossos recebam forças mecânicas.",
      "Implica a aplicação de compressas ferventes a 100 °C para acelerar a fundição dos cristais de hidroxiapatite.",
      "Requer a suspensão de toda a alimentação oral e hidratação para forçar o organismo a reabsorver os seus próprios músculos.",
      "Traduz-se no seguinte cuidado e evidência: O enfermeiro integra na reabilitação exercícios de carga axial, sabendo que a estimulação mecânica diária silencia a esclerostina e promove a síntese de osso novo."
    ],
    "correctIndex": 3,
    "explanation": "A aplicação de enfermagem para papel da esclerostina na mecanotransdução dos osteócitos baseia-se no princípio biomecânico: O enfermeiro integra na reabilitação exercícios de carga axial, sabendo que a estimulação mecânica diária silencia a esclerostina e promove a síntese de osso novo. Este raciocínio assegura intervenções fundamentadas na física biológica.",
    "distractorAnalysis": [
      "Está incorreta: é prejudicial, pois a ausência total de carga acelera a atrofia por desuso e a osteopenia.",
      "Está incorreta: causaria queimaduras graves de 3.º grau nos tecidos corporais.",
      "Está incorreta: provocaria desidratação fatal e desnutrição grave."
    ],
    "nursingApplication": "O enfermeiro integra na reabilitação exercícios de carga axial, sabendo que a estimulação mecânica diária silencia a esclerostina e promove a síntese de osso novo."
  },
  {
    "id": 3083,
    "topicId": 3,
    "question": "Um enfermeiro analisa o impacto biomecânico das solicitações mecânicas em 'papel da esclerostina na mecanotransdução dos osteócitos'. Qual das seguintes afirmações apresenta a análise biofísica correta?",
    "options": [
      "A correta caracterização física demonstra que Na ausência de estímulo mecânico (imobilização), os osteócitos libertam altos níveis de esclerostina, suprimindo os osteoblastos e promovendo a reabsorção óssea.",
      "A resistência mecânica nesta estrutura é estritamente infinita e insuscetível a qualquer tipo de fadiga, rotura ou deformação plástica.",
      "As propriedades mecânicas dependem exclusivamente de campos eletrostáticos externos de alta frequência gerados por telemóveis.",
      "A estrutura perde a totalidade da sua rigidez quando o doente assume a posição de decúbito lateral direito."
    ],
    "correctIndex": 0,
    "explanation": "Sob o ponto de vista físico e mecanicista, Na ausência de estímulo mecânico (imobilização), os osteócitos libertam altos níveis de esclerostina, suprimindo os osteoblastos e promovendo a reabsorção óssea. Isto garante a integridade funcional do aparelho locomotor.",
    "distractorAnalysis": [
      "Está incorreta: desrespeita os limites de resistência dos materiais biológicos e a realidade clínica das fraturas e entorses.",
      "Está incorreta: inventa uma correlação inverosímil com radiações de telecomunicações.",
      "Está incorreta: confunde a rotação postural de decúbito com perda intrínseca da rigidez do material ósseo."
    ],
    "nursingApplication": "O enfermeiro integra na reabilitação exercícios de carga axial, sabendo que a estimulação mecânica diária silencia a esclerostina e promove a síntese de osso novo."
  },
  {
    "id": 3084,
    "topicId": 3,
    "question": "Na biofísica do sistema osteomuscular, em relação a 'potenciais elétricos de fluxo (streaming potentials) no osso', qual é a fundamentação científica correta?",
    "options": [
      "Trata-se de um processo estritamente passivo e inerte onde não ocorrem quaisquer trocas metabólicas nem variações de propriedades elásticas.",
      "o movimento de fluidos intersticiais carregados de iões sobre a matriz óssea eletronegativa durante a flexão gera correntes elétricas transitórias. Estas correntes iónicas polarizam as superfícies ósseas e ativam os canais de cálcio mecano-dependentes nos osteócitos.",
      "Corresponde a uma anulação instantânea das forças da gravidade e eliminação das leis de Newton nos tecidos biológicos.",
      "Resulta de uma reação química de oxidação que decompõe a matriz colagénica em vapor e água à temperatura corporal de 37 °C."
    ],
    "correctIndex": 1,
    "explanation": "Em biofísica osteomuscular, potenciais elétricos de fluxo (streaming potentials) no osso explica-se pelo facto de que o movimento de fluidos intersticiais carregados de iões sobre a matriz óssea eletronegativa durante a flexão gera correntes elétricas transitórias. Estas correntes iónicas polarizam as superfícies ósseas e ativam os canais de cálcio mecano-dependentes nos osteócitos.",
    "distractorAnalysis": [
      "Está incorreta: desconsidera a intensa atividade biológica, dinâmica e mecano-dependente do tecido osteomuscular.",
      "Está incorreta: invoca uma anulação impossível da gravidade física.",
      "Está incorreta: confunde a fisiologia da matriz com combustão química ou evaporação fictícia."
    ],
    "nursingApplication": "O enfermeiro compreende a base dos tratamentos de fisioterapia e bioestimulação elétrica coadjuvantes na consolidação de fraturas complexas."
  },
  {
    "id": 3085,
    "topicId": 3,
    "question": "Durante a prestação de cuidados de enfermagem a um doente com alterações musculoesqueléticas, como se traduz na prática clínica o conceito de 'potenciais elétricos de fluxo (streaming potentials) no osso'?",
    "options": [
      "Exige a imobilização absoluta e perpétua do doente no leito sem qualquer mobilização para impedir que os ossos recebam forças mecânicas.",
      "Implica a aplicação de compressas ferventes a 100 °C para acelerar a fundição dos cristais de hidroxiapatite.",
      "Traduz-se no seguinte cuidado e evidência: O enfermeiro compreende a base dos tratamentos de fisioterapia e bioestimulação elétrica coadjuvantes na consolidação de fraturas complexas.",
      "Requer a suspensão de toda a alimentação oral e hidratação para forçar o organismo a reabsorver os seus próprios músculos."
    ],
    "correctIndex": 2,
    "explanation": "A aplicação de enfermagem para potenciais elétricos de fluxo (streaming potentials) no osso baseia-se no princípio biomecânico: O enfermeiro compreende a base dos tratamentos de fisioterapia e bioestimulação elétrica coadjuvantes na consolidação de fraturas complexas. Este raciocínio assegura intervenções fundamentadas na física biológica.",
    "distractorAnalysis": [
      "Está incorreta: é prejudicial, pois a ausência total de carga acelera a atrofia por desuso e a osteopenia.",
      "Está incorreta: causaria queimaduras graves de 3.º grau nos tecidos corporais.",
      "Está incorreta: provocaria desidratação fatal e desnutrição grave."
    ],
    "nursingApplication": "O enfermeiro compreende a base dos tratamentos de fisioterapia e bioestimulação elétrica coadjuvantes na consolidação de fraturas complexas."
  },
  {
    "id": 3086,
    "topicId": 3,
    "question": "Um enfermeiro analisa o impacto biomecânico das solicitações mecânicas em 'potenciais elétricos de fluxo (streaming potentials) no osso'. Qual das seguintes afirmações apresenta a análise biofísica correta?",
    "options": [
      "A resistência mecânica nesta estrutura é estritamente infinita e insuscetível a qualquer tipo de fadiga, rotura ou deformação plástica.",
      "As propriedades mecânicas dependem exclusivamente de campos eletrostáticos externos de alta frequência gerados por telemóveis.",
      "A estrutura perde a totalidade da sua rigidez quando o doente assume a posição de decúbito lateral direito.",
      "A correta caracterização física demonstra que Estas correntes iónicas polarizam as superfícies ósseas e ativam os canais de cálcio mecano-dependentes nos osteócitos."
    ],
    "correctIndex": 3,
    "explanation": "Sob o ponto de vista físico e mecanicista, Estas correntes iónicas polarizam as superfícies ósseas e ativam os canais de cálcio mecano-dependentes nos osteócitos. Isto garante a integridade funcional do aparelho locomotor.",
    "distractorAnalysis": [
      "Está incorreta: desrespeita os limites de resistência dos materiais biológicos e a realidade clínica das fraturas e entorses.",
      "Está incorreta: inventa uma correlação inverosímil com radiações de telecomunicações.",
      "Está incorreta: confunde a rotação postural de decúbito com perda intrínseca da rigidez do material ósseo."
    ],
    "nursingApplication": "O enfermeiro compreende a base dos tratamentos de fisioterapia e bioestimulação elétrica coadjuvantes na consolidação de fraturas complexas."
  },
  {
    "id": 3087,
    "topicId": 3,
    "question": "Na biofísica do sistema osteomuscular, em relação a 'adaptação da espessura cortical no braço dominante de tenistas', qual é a fundamentação científica correta?",
    "options": [
      "o osso do úmero e rádio do membro superior utilizado para jogar ténis apresenta uma cortical até 30% mais espessa do que o membro contralateral. Este aumento morfológico ilustra a Lei de Wolff em pleno: o osso respondeu hipertrofiando nas zonas que sofrem maiores momentos de flexão e torção repetitivos.",
      "Trata-se de um processo estritamente passivo e inerte onde não ocorrem quaisquer trocas metabólicas nem variações de propriedades elásticas.",
      "Corresponde a uma anulação instantânea das forças da gravidade e eliminação das leis de Newton nos tecidos biológicos.",
      "Resulta de uma reação química de oxidação que decompõe a matriz colagénica em vapor e água à temperatura corporal de 37 °C."
    ],
    "correctIndex": 0,
    "explanation": "Em biofísica osteomuscular, adaptação da espessura cortical no braço dominante de tenistas explica-se pelo facto de que o osso do úmero e rádio do membro superior utilizado para jogar ténis apresenta uma cortical até 30% mais espessa do que o membro contralateral. Este aumento morfológico ilustra a Lei de Wolff em pleno: o osso respondeu hipertrofiando nas zonas que sofrem maiores momentos de flexão e torção repetitivos.",
    "distractorAnalysis": [
      "Está incorreta: desconsidera a intensa atividade biológica, dinâmica e mecano-dependente do tecido osteomuscular.",
      "Está incorreta: invoca uma anulação impossível da gravidade física.",
      "Está incorreta: confunde a fisiologia da matriz com combustão química ou evaporação fictícia."
    ],
    "nursingApplication": "O enfermeiro aconselha os doentes com osteopenia a praticarem desportos com impacto moderado e tração muscular ativa para promover o reforço cortical segmentar."
  },
  {
    "id": 3088,
    "topicId": 3,
    "question": "Durante a prestação de cuidados de enfermagem a um doente com alterações musculoesqueléticas, como se traduz na prática clínica o conceito de 'adaptação da espessura cortical no braço dominante de tenistas'?",
    "options": [
      "Exige a imobilização absoluta e perpétua do doente no leito sem qualquer mobilização para impedir que os ossos recebam forças mecânicas.",
      "Traduz-se no seguinte cuidado e evidência: O enfermeiro aconselha os doentes com osteopenia a praticarem desportos com impacto moderado e tração muscular ativa para promover o reforço cortical segmentar.",
      "Implica a aplicação de compressas ferventes a 100 °C para acelerar a fundição dos cristais de hidroxiapatite.",
      "Requer a suspensão de toda a alimentação oral e hidratação para forçar o organismo a reabsorver os seus próprios músculos."
    ],
    "correctIndex": 1,
    "explanation": "A aplicação de enfermagem para adaptação da espessura cortical no braço dominante de tenistas baseia-se no princípio biomecânico: O enfermeiro aconselha os doentes com osteopenia a praticarem desportos com impacto moderado e tração muscular ativa para promover o reforço cortical segmentar. Este raciocínio assegura intervenções fundamentadas na física biológica.",
    "distractorAnalysis": [
      "Está incorreta: é prejudicial, pois a ausência total de carga acelera a atrofia por desuso e a osteopenia.",
      "Está incorreta: causaria queimaduras graves de 3.º grau nos tecidos corporais.",
      "Está incorreta: provocaria desidratação fatal e desnutrição grave."
    ],
    "nursingApplication": "O enfermeiro aconselha os doentes com osteopenia a praticarem desportos com impacto moderado e tração muscular ativa para promover o reforço cortical segmentar."
  },
  {
    "id": 3089,
    "topicId": 3,
    "question": "Um enfermeiro analisa o impacto biomecânico das solicitações mecânicas em 'adaptação da espessura cortical no braço dominante de tenistas'. Qual das seguintes afirmações apresenta a análise biofísica correta?",
    "options": [
      "A resistência mecânica nesta estrutura é estritamente infinita e insuscetível a qualquer tipo de fadiga, rotura ou deformação plástica.",
      "As propriedades mecânicas dependem exclusivamente de campos eletrostáticos externos de alta frequência gerados por telemóveis.",
      "A correta caracterização física demonstra que Este aumento morfológico ilustra a Lei de Wolff em pleno: o osso respondeu hipertrofiando nas zonas que sofrem maiores momentos de flexão e torção repetitivos.",
      "A estrutura perde a totalidade da sua rigidez quando o doente assume a posição de decúbito lateral direito."
    ],
    "correctIndex": 2,
    "explanation": "Sob o ponto de vista físico e mecanicista, Este aumento morfológico ilustra a Lei de Wolff em pleno: o osso respondeu hipertrofiando nas zonas que sofrem maiores momentos de flexão e torção repetitivos. Isto garante a integridade funcional do aparelho locomotor.",
    "distractorAnalysis": [
      "Está incorreta: desrespeita os limites de resistência dos materiais biológicos e a realidade clínica das fraturas e entorses.",
      "Está incorreta: inventa uma correlação inverosímil com radiações de telecomunicações.",
      "Está incorreta: confunde a rotação postural de decúbito com perda intrínseca da rigidez do material ósseo."
    ],
    "nursingApplication": "O enfermeiro aconselha os doentes com osteopenia a praticarem desportos com impacto moderado e tração muscular ativa para promover o reforço cortical segmentar."
  },
  {
    "id": 3090,
    "topicId": 3,
    "question": "Na biofísica do sistema osteomuscular, em relação a 'perda de massa óssea em astronautas em microgravidade', qual é a fundamentação científica correta?",
    "options": [
      "Trata-se de um processo estritamente passivo e inerte onde não ocorrem quaisquer trocas metabólicas nem variações de propriedades elásticas.",
      "Corresponde a uma anulação instantânea das forças da gravidade e eliminação das leis de Newton nos tecidos biológicos.",
      "Resulta de uma reação química de oxidação que decompõe a matriz colagénica em vapor e água à temperatura corporal de 37 °C.",
      "em gravidade zero espacial, os astronautas perdem cerca de 1% a 1,5% de massa óssea trabecular por mês na coluna vertebral e fémur. A falta de gravidade elimina a pressão hidrostática e a carga axial nos canalículos dos osteócitos, ativando uma reabsorção osteoclástica intensa."
    ],
    "correctIndex": 3,
    "explanation": "Em biofísica osteomuscular, perda de massa óssea em astronautas em microgravidade explica-se pelo facto de que em gravidade zero espacial, os astronautas perdem cerca de 1% a 1,5% de massa óssea trabecular por mês na coluna vertebral e fémur. A falta de gravidade elimina a pressão hidrostática e a carga axial nos canalículos dos osteócitos, ativando uma reabsorção osteoclástica intensa.",
    "distractorAnalysis": [
      "Está incorreta: desconsidera a intensa atividade biológica, dinâmica e mecano-dependente do tecido osteomuscular.",
      "Está incorreta: invoca uma anulação impossível da gravidade física.",
      "Está incorreta: confunde a fisiologia da matriz com combustão química ou evaporação fictícia."
    ],
    "nursingApplication": "O modelo de astronautas é análogo ao doente em cama de cuidados intensivos: o enfermeiro implementa mobilização passiva e planos inclinados assim que hemodinamicamente tolerado."
  },
  {
    "id": 3091,
    "topicId": 3,
    "question": "Durante a prestação de cuidados de enfermagem a um doente com alterações musculoesqueléticas, como se traduz na prática clínica o conceito de 'perda de massa óssea em astronautas em microgravidade'?",
    "options": [
      "Traduz-se no seguinte cuidado e evidência: O modelo de astronautas é análogo ao doente em cama de cuidados intensivos: o enfermeiro implementa mobilização passiva e planos inclinados assim que hemodinamicamente tolerado.",
      "Exige a imobilização absoluta e perpétua do doente no leito sem qualquer mobilização para impedir que os ossos recebam forças mecânicas.",
      "Implica a aplicação de compressas ferventes a 100 °C para acelerar a fundição dos cristais de hidroxiapatite.",
      "Requer a suspensão de toda a alimentação oral e hidratação para forçar o organismo a reabsorver os seus próprios músculos."
    ],
    "correctIndex": 0,
    "explanation": "A aplicação de enfermagem para perda de massa óssea em astronautas em microgravidade baseia-se no princípio biomecânico: O modelo de astronautas é análogo ao doente em cama de cuidados intensivos: o enfermeiro implementa mobilização passiva e planos inclinados assim que hemodinamicamente tolerado. Este raciocínio assegura intervenções fundamentadas na física biológica.",
    "distractorAnalysis": [
      "Está incorreta: é prejudicial, pois a ausência total de carga acelera a atrofia por desuso e a osteopenia.",
      "Está incorreta: causaria queimaduras graves de 3.º grau nos tecidos corporais.",
      "Está incorreta: provocaria desidratação fatal e desnutrição grave."
    ],
    "nursingApplication": "O modelo de astronautas é análogo ao doente em cama de cuidados intensivos: o enfermeiro implementa mobilização passiva e planos inclinados assim que hemodinamicamente tolerado."
  },
  {
    "id": 3092,
    "topicId": 3,
    "question": "Um enfermeiro analisa o impacto biomecânico das solicitações mecânicas em 'perda de massa óssea em astronautas em microgravidade'. Qual das seguintes afirmações apresenta a análise biofísica correta?",
    "options": [
      "A resistência mecânica nesta estrutura é estritamente infinita e insuscetível a qualquer tipo de fadiga, rotura ou deformação plástica.",
      "A correta caracterização física demonstra que A falta de gravidade elimina a pressão hidrostática e a carga axial nos canalículos dos osteócitos, ativando uma reabsorção osteoclástica intensa.",
      "As propriedades mecânicas dependem exclusivamente de campos eletrostáticos externos de alta frequência gerados por telemóveis.",
      "A estrutura perde a totalidade da sua rigidez quando o doente assume a posição de decúbito lateral direito."
    ],
    "correctIndex": 1,
    "explanation": "Sob o ponto de vista físico e mecanicista, A falta de gravidade elimina a pressão hidrostática e a carga axial nos canalículos dos osteócitos, ativando uma reabsorção osteoclástica intensa. Isto garante a integridade funcional do aparelho locomotor.",
    "distractorAnalysis": [
      "Está incorreta: desrespeita os limites de resistência dos materiais biológicos e a realidade clínica das fraturas e entorses.",
      "Está incorreta: inventa uma correlação inverosímil com radiações de telecomunicações.",
      "Está incorreta: confunde a rotação postural de decúbito com perda intrínseca da rigidez do material ósseo."
    ],
    "nursingApplication": "O modelo de astronautas é análogo ao doente em cama de cuidados intensivos: o enfermeiro implementa mobilização passiva e planos inclinados assim que hemodinamicamente tolerado."
  },
  {
    "id": 3093,
    "topicId": 3,
    "question": "Na biofísica do sistema osteomuscular, em relação a 'remodelação osteoclástica no osso alveolar em ortodontia', qual é a fundamentação científica correta?",
    "options": [
      "Trata-se de um processo estritamente passivo e inerte onde não ocorrem quaisquer trocas metabólicas nem variações de propriedades elásticas.",
      "Corresponde a uma anulação instantânea das forças da gravidade e eliminação das leis de Newton nos tecidos biológicos.",
      "o aparelho dentário aplica uma pressão mecânica contínua na raiz do dente: a face comprimida sofre reabsorção osteoclástica e a face em tração forma osso novo. Este fenómeno guiado por forças mecânicas milimétricas permite a migração do dente através do tecido ósseo maxilar.",
      "Resulta de uma reação química de oxidação que decompõe a matriz colagénica em vapor e água à temperatura corporal de 37 °C."
    ],
    "correctIndex": 2,
    "explanation": "Em biofísica osteomuscular, remodelação osteoclástica no osso alveolar em ortodontia explica-se pelo facto de que o aparelho dentário aplica uma pressão mecânica contínua na raiz do dente: a face comprimida sofre reabsorção osteoclástica e a face em tração forma osso novo. Este fenómeno guiado por forças mecânicas milimétricas permite a migração do dente através do tecido ósseo maxilar.",
    "distractorAnalysis": [
      "Está incorreta: desconsidera a intensa atividade biológica, dinâmica e mecano-dependente do tecido osteomuscular.",
      "Está incorreta: invoca uma anulação impossível da gravidade física.",
      "Está incorreta: confunde a fisiologia da matriz com combustão química ou evaporação fictícia."
    ],
    "nursingApplication": "O enfermeiro em estomatologia vigia a higiene oral e as dores articulares temporomandibulares em doentes submetidos a forças de tração ortodôntica intensa."
  },
  {
    "id": 3094,
    "topicId": 3,
    "question": "Durante a prestação de cuidados de enfermagem a um doente com alterações musculoesqueléticas, como se traduz na prática clínica o conceito de 'remodelação osteoclástica no osso alveolar em ortodontia'?",
    "options": [
      "Exige a imobilização absoluta e perpétua do doente no leito sem qualquer mobilização para impedir que os ossos recebam forças mecânicas.",
      "Implica a aplicação de compressas ferventes a 100 °C para acelerar a fundição dos cristais de hidroxiapatite.",
      "Requer a suspensão de toda a alimentação oral e hidratação para forçar o organismo a reabsorver os seus próprios músculos.",
      "Traduz-se no seguinte cuidado e evidência: O enfermeiro em estomatologia vigia a higiene oral e as dores articulares temporomandibulares em doentes submetidos a forças de tração ortodôntica intensa."
    ],
    "correctIndex": 3,
    "explanation": "A aplicação de enfermagem para remodelação osteoclástica no osso alveolar em ortodontia baseia-se no princípio biomecânico: O enfermeiro em estomatologia vigia a higiene oral e as dores articulares temporomandibulares em doentes submetidos a forças de tração ortodôntica intensa. Este raciocínio assegura intervenções fundamentadas na física biológica.",
    "distractorAnalysis": [
      "Está incorreta: é prejudicial, pois a ausência total de carga acelera a atrofia por desuso e a osteopenia.",
      "Está incorreta: causaria queimaduras graves de 3.º grau nos tecidos corporais.",
      "Está incorreta: provocaria desidratação fatal e desnutrição grave."
    ],
    "nursingApplication": "O enfermeiro em estomatologia vigia a higiene oral e as dores articulares temporomandibulares em doentes submetidos a forças de tração ortodôntica intensa."
  },
  {
    "id": 3095,
    "topicId": 3,
    "question": "Um enfermeiro analisa o impacto biomecânico das solicitações mecânicas em 'remodelação osteoclástica no osso alveolar em ortodontia'. Qual das seguintes afirmações apresenta a análise biofísica correta?",
    "options": [
      "A correta caracterização física demonstra que Este fenómeno guiado por forças mecânicas milimétricas permite a migração do dente através do tecido ósseo maxilar.",
      "A resistência mecânica nesta estrutura é estritamente infinita e insuscetível a qualquer tipo de fadiga, rotura ou deformação plástica.",
      "As propriedades mecânicas dependem exclusivamente de campos eletrostáticos externos de alta frequência gerados por telemóveis.",
      "A estrutura perde a totalidade da sua rigidez quando o doente assume a posição de decúbito lateral direito."
    ],
    "correctIndex": 0,
    "explanation": "Sob o ponto de vista físico e mecanicista, Este fenómeno guiado por forças mecânicas milimétricas permite a migração do dente através do tecido ósseo maxilar. Isto garante a integridade funcional do aparelho locomotor.",
    "distractorAnalysis": [
      "Está incorreta: desrespeita os limites de resistência dos materiais biológicos e a realidade clínica das fraturas e entorses.",
      "Está incorreta: inventa uma correlação inverosímil com radiações de telecomunicações.",
      "Está incorreta: confunde a rotação postural de decúbito com perda intrínseca da rigidez do material ósseo."
    ],
    "nursingApplication": "O enfermeiro em estomatologia vigia a higiene oral e as dores articulares temporomandibulares em doentes submetidos a forças de tração ortodôntica intensa."
  },
  {
    "id": 3096,
    "topicId": 3,
    "question": "Na biofísica do sistema osteomuscular, em relação a 'fratura em 'asa de borboleta' (butterfly fracture)', qual é a fundamentação científica correta?",
    "options": [
      "Trata-se de um processo estritamente passivo e inerte onde não ocorrem quaisquer trocas metabólicas nem variações de propriedades elásticas.",
      "produzida por flexão com uma componente de compressão axial, onde a face de tração racha primeiro e a face de compressão liberta um fragmento triangular em cunha. A assimetria das forças na secção transversal produz um terceiro fragmento intermédio característico no lado côncavo comprimido.",
      "Corresponde a uma anulação instantânea das forças da gravidade e eliminação das leis de Newton nos tecidos biológicos.",
      "Resulta de uma reação química de oxidação que decompõe a matriz colagénica em vapor e água à temperatura corporal de 37 °C."
    ],
    "correctIndex": 1,
    "explanation": "Em biofísica osteomuscular, fratura em 'asa de borboleta' (butterfly fracture) explica-se pelo facto de que produzida por flexão com uma componente de compressão axial, onde a face de tração racha primeiro e a face de compressão liberta um fragmento triangular em cunha. A assimetria das forças na secção transversal produz um terceiro fragmento intermédio característico no lado côncavo comprimido.",
    "distractorAnalysis": [
      "Está incorreta: desconsidera a intensa atividade biológica, dinâmica e mecano-dependente do tecido osteomuscular.",
      "Está incorreta: invoca uma anulação impossível da gravidade física.",
      "Está incorreta: confunde a fisiologia da matriz com combustão química ou evaporação fictícia."
    ],
    "nursingApplication": "O enfermeiro reporta a presença de fragmentos intermediários em cunha, que exigem fixação cirúrgica com placas de neutralização ou parafusos de tração."
  },
  {
    "id": 3097,
    "topicId": 3,
    "question": "Durante a prestação de cuidados de enfermagem a um doente com alterações musculoesqueléticas, como se traduz na prática clínica o conceito de 'fratura em 'asa de borboleta' (butterfly fracture)'?",
    "options": [
      "Exige a imobilização absoluta e perpétua do doente no leito sem qualquer mobilização para impedir que os ossos recebam forças mecânicas.",
      "Implica a aplicação de compressas ferventes a 100 °C para acelerar a fundição dos cristais de hidroxiapatite.",
      "Traduz-se no seguinte cuidado e evidência: O enfermeiro reporta a presença de fragmentos intermediários em cunha, que exigem fixação cirúrgica com placas de neutralização ou parafusos de tração.",
      "Requer a suspensão de toda a alimentação oral e hidratação para forçar o organismo a reabsorver os seus próprios músculos."
    ],
    "correctIndex": 2,
    "explanation": "A aplicação de enfermagem para fratura em 'asa de borboleta' (butterfly fracture) baseia-se no princípio biomecânico: O enfermeiro reporta a presença de fragmentos intermediários em cunha, que exigem fixação cirúrgica com placas de neutralização ou parafusos de tração. Este raciocínio assegura intervenções fundamentadas na física biológica.",
    "distractorAnalysis": [
      "Está incorreta: é prejudicial, pois a ausência total de carga acelera a atrofia por desuso e a osteopenia.",
      "Está incorreta: causaria queimaduras graves de 3.º grau nos tecidos corporais.",
      "Está incorreta: provocaria desidratação fatal e desnutrição grave."
    ],
    "nursingApplication": "O enfermeiro reporta a presença de fragmentos intermediários em cunha, que exigem fixação cirúrgica com placas de neutralização ou parafusos de tração."
  },
  {
    "id": 3098,
    "topicId": 3,
    "question": "Um enfermeiro analisa o impacto biomecânico das solicitações mecânicas em 'fratura em 'asa de borboleta' (butterfly fracture)'. Qual das seguintes afirmações apresenta a análise biofísica correta?",
    "options": [
      "A resistência mecânica nesta estrutura é estritamente infinita e insuscetível a qualquer tipo de fadiga, rotura ou deformação plástica.",
      "As propriedades mecânicas dependem exclusivamente de campos eletrostáticos externos de alta frequência gerados por telemóveis.",
      "A estrutura perde a totalidade da sua rigidez quando o doente assume a posição de decúbito lateral direito.",
      "A correta caracterização física demonstra que A assimetria das forças na secção transversal produz um terceiro fragmento intermédio característico no lado côncavo comprimido."
    ],
    "correctIndex": 3,
    "explanation": "Sob o ponto de vista físico e mecanicista, A assimetria das forças na secção transversal produz um terceiro fragmento intermédio característico no lado côncavo comprimido. Isto garante a integridade funcional do aparelho locomotor.",
    "distractorAnalysis": [
      "Está incorreta: desrespeita os limites de resistência dos materiais biológicos e a realidade clínica das fraturas e entorses.",
      "Está incorreta: inventa uma correlação inverosímil com radiações de telecomunicações.",
      "Está incorreta: confunde a rotação postural de decúbito com perda intrínseca da rigidez do material ósseo."
    ],
    "nursingApplication": "O enfermeiro reporta a presença de fragmentos intermediários em cunha, que exigem fixação cirúrgica com placas de neutralização ou parafusos de tração."
  },
  {
    "id": 3099,
    "topicId": 3,
    "question": "Na biofísica do sistema osteomuscular, em relação a 'fratura por avulsão ligamentar ou tendinosa', qual é a fundamentação científica correta?",
    "options": [
      "ocorre quando uma forte solicitação de tração transmitida pelo tendão arranca um pedaço ósseo em vez de romper o tendão no meio da substância. Comum no maléolo medial ou na tuberosidade anterior da tíbia quando o ligamento ou tendão resiste mais do que a inserção na cortical óssea.",
      "Trata-se de um processo estritamente passivo e inerte onde não ocorrem quaisquer trocas metabólicas nem variações de propriedades elásticas.",
      "Corresponde a uma anulação instantânea das forças da gravidade e eliminação das leis de Newton nos tecidos biológicos.",
      "Resulta de uma reação química de oxidação que decompõe a matriz colagénica em vapor e água à temperatura corporal de 37 °C."
    ],
    "correctIndex": 0,
    "explanation": "Em biofísica osteomuscular, fratura por avulsão ligamentar ou tendinosa explica-se pelo facto de que ocorre quando uma forte solicitação de tração transmitida pelo tendão arranca um pedaço ósseo em vez de romper o tendão no meio da substância. Comum no maléolo medial ou na tuberosidade anterior da tíbia quando o ligamento ou tendão resiste mais do que a inserção na cortical óssea.",
    "distractorAnalysis": [
      "Está incorreta: desconsidera a intensa atividade biológica, dinâmica e mecano-dependente do tecido osteomuscular.",
      "Está incorreta: invoca uma anulação impossível da gravidade física.",
      "Está incorreta: confunde a fisiologia da matriz com combustão química ou evaporação fictícia."
    ],
    "nursingApplication": "O enfermeiro palpa cuidadosamente as inserções tendinosas e suspeita de avulsão óssea perante dor pontual aguda e impotência funcional pós-entorse articular."
  },
  {
    "id": 3100,
    "topicId": 3,
    "question": "Durante a prestação de cuidados de enfermagem a um doente com alterações musculoesqueléticas, como se traduz na prática clínica o conceito de 'fratura por avulsão ligamentar ou tendinosa'?",
    "options": [
      "Exige a imobilização absoluta e perpétua do doente no leito sem qualquer mobilização para impedir que os ossos recebam forças mecânicas.",
      "Traduz-se no seguinte cuidado e evidência: O enfermeiro palpa cuidadosamente as inserções tendinosas e suspeita de avulsão óssea perante dor pontual aguda e impotência funcional pós-entorse articular.",
      "Implica a aplicação de compressas ferventes a 100 °C para acelerar a fundição dos cristais de hidroxiapatite.",
      "Requer a suspensão de toda a alimentação oral e hidratação para forçar o organismo a reabsorver os seus próprios músculos."
    ],
    "correctIndex": 1,
    "explanation": "A aplicação de enfermagem para fratura por avulsão ligamentar ou tendinosa baseia-se no princípio biomecânico: O enfermeiro palpa cuidadosamente as inserções tendinosas e suspeita de avulsão óssea perante dor pontual aguda e impotência funcional pós-entorse articular. Este raciocínio assegura intervenções fundamentadas na física biológica.",
    "distractorAnalysis": [
      "Está incorreta: é prejudicial, pois a ausência total de carga acelera a atrofia por desuso e a osteopenia.",
      "Está incorreta: causaria queimaduras graves de 3.º grau nos tecidos corporais.",
      "Está incorreta: provocaria desidratação fatal e desnutrição grave."
    ],
    "nursingApplication": "O enfermeiro palpa cuidadosamente as inserções tendinosas e suspeita de avulsão óssea perante dor pontual aguda e impotência funcional pós-entorse articular."
  },
  {
    "id": 3101,
    "topicId": 3,
    "question": "Um enfermeiro analisa o impacto biomecânico das solicitações mecânicas em 'fratura por avulsão ligamentar ou tendinosa'. Qual das seguintes afirmações apresenta a análise biofísica correta?",
    "options": [
      "A resistência mecânica nesta estrutura é estritamente infinita e insuscetível a qualquer tipo de fadiga, rotura ou deformação plástica.",
      "As propriedades mecânicas dependem exclusivamente de campos eletrostáticos externos de alta frequência gerados por telemóveis.",
      "A correta caracterização física demonstra que Comum no maléolo medial ou na tuberosidade anterior da tíbia quando o ligamento ou tendão resiste mais do que a inserção na cortical óssea.",
      "A estrutura perde a totalidade da sua rigidez quando o doente assume a posição de decúbito lateral direito."
    ],
    "correctIndex": 2,
    "explanation": "Sob o ponto de vista físico e mecanicista, Comum no maléolo medial ou na tuberosidade anterior da tíbia quando o ligamento ou tendão resiste mais do que a inserção na cortical óssea. Isto garante a integridade funcional do aparelho locomotor.",
    "distractorAnalysis": [
      "Está incorreta: desrespeita os limites de resistência dos materiais biológicos e a realidade clínica das fraturas e entorses.",
      "Está incorreta: inventa uma correlação inverosímil com radiações de telecomunicações.",
      "Está incorreta: confunde a rotação postural de decúbito com perda intrínseca da rigidez do material ósseo."
    ],
    "nursingApplication": "O enfermeiro palpa cuidadosamente as inserções tendinosas e suspeita de avulsão óssea perante dor pontual aguda e impotência funcional pós-entorse articular."
  },
  {
    "id": 3102,
    "topicId": 3,
    "question": "Na biofísica do sistema osteomuscular, em relação a 'fratura por compressão dos corpos vertebrais osteoporóticos', qual é a fundamentação científica correta?",
    "options": [
      "Trata-se de um processo estritamente passivo e inerte onde não ocorrem quaisquer trocas metabólicas nem variações de propriedades elásticas.",
      "Corresponde a uma anulação instantânea das forças da gravidade e eliminação das leis de Newton nos tecidos biológicos.",
      "Resulta de uma reação química de oxidação que decompõe a matriz colagénica em vapor e água à temperatura corporal de 37 °C.",
      "resulta de forças axiais verticais que colapsam as trabéculas enfraquecidas do corpo vertebral, produzindo uma vértebra em cunha anterior. A perda de altura na porção anterior da vértebra acentua a cifose dorsal senil ('corcunda da viúva') e projeta o tronco para a frente."
    ],
    "correctIndex": 3,
    "explanation": "Em biofísica osteomuscular, fratura por compressão dos corpos vertebrais osteoporóticos explica-se pelo facto de que resulta de forças axiais verticais que colapsam as trabéculas enfraquecidas do corpo vertebral, produzindo uma vértebra em cunha anterior. A perda de altura na porção anterior da vértebra acentua a cifose dorsal senil ('corcunda da viúva') e projeta o tronco para a frente.",
    "distractorAnalysis": [
      "Está incorreta: desconsidera a intensa atividade biológica, dinâmica e mecano-dependente do tecido osteomuscular.",
      "Está incorreta: invoca uma anulação impossível da gravidade física.",
      "Está incorreta: confunde a fisiologia da matriz com combustão química ou evaporação fictícia."
    ],
    "nursingApplication": "O enfermeiro vigia queixas agudas de dorsalgia ou lombalgia em idosos após pequenos esforços, evitando a flexão forçada do tronco e promovendo o alívio postural."
  },
  {
    "id": 3103,
    "topicId": 3,
    "question": "Durante a prestação de cuidados de enfermagem a um doente com alterações musculoesqueléticas, como se traduz na prática clínica o conceito de 'fratura por compressão dos corpos vertebrais osteoporóticos'?",
    "options": [
      "Traduz-se no seguinte cuidado e evidência: O enfermeiro vigia queixas agudas de dorsalgia ou lombalgia em idosos após pequenos esforços, evitando a flexão forçada do tronco e promovendo o alívio postural.",
      "Exige a imobilização absoluta e perpétua do doente no leito sem qualquer mobilização para impedir que os ossos recebam forças mecânicas.",
      "Implica a aplicação de compressas ferventes a 100 °C para acelerar a fundição dos cristais de hidroxiapatite.",
      "Requer a suspensão de toda a alimentação oral e hidratação para forçar o organismo a reabsorver os seus próprios músculos."
    ],
    "correctIndex": 0,
    "explanation": "A aplicação de enfermagem para fratura por compressão dos corpos vertebrais osteoporóticos baseia-se no princípio biomecânico: O enfermeiro vigia queixas agudas de dorsalgia ou lombalgia em idosos após pequenos esforços, evitando a flexão forçada do tronco e promovendo o alívio postural. Este raciocínio assegura intervenções fundamentadas na física biológica.",
    "distractorAnalysis": [
      "Está incorreta: é prejudicial, pois a ausência total de carga acelera a atrofia por desuso e a osteopenia.",
      "Está incorreta: causaria queimaduras graves de 3.º grau nos tecidos corporais.",
      "Está incorreta: provocaria desidratação fatal e desnutrição grave."
    ],
    "nursingApplication": "O enfermeiro vigia queixas agudas de dorsalgia ou lombalgia em idosos após pequenos esforços, evitando a flexão forçada do tronco e promovendo o alívio postural."
  },
  {
    "id": 3104,
    "topicId": 3,
    "question": "Um enfermeiro analisa o impacto biomecânico das solicitações mecânicas em 'fratura por compressão dos corpos vertebrais osteoporóticos'. Qual das seguintes afirmações apresenta a análise biofísica correta?",
    "options": [
      "A resistência mecânica nesta estrutura é estritamente infinita e insuscetível a qualquer tipo de fadiga, rotura ou deformação plástica.",
      "A correta caracterização física demonstra que A perda de altura na porção anterior da vértebra acentua a cifose dorsal senil ('corcunda da viúva') e projeta o tronco para a frente.",
      "As propriedades mecânicas dependem exclusivamente de campos eletrostáticos externos de alta frequência gerados por telemóveis.",
      "A estrutura perde a totalidade da sua rigidez quando o doente assume a posição de decúbito lateral direito."
    ],
    "correctIndex": 1,
    "explanation": "Sob o ponto de vista físico e mecanicista, A perda de altura na porção anterior da vértebra acentua a cifose dorsal senil ('corcunda da viúva') e projeta o tronco para a frente. Isto garante a integridade funcional do aparelho locomotor.",
    "distractorAnalysis": [
      "Está incorreta: desrespeita os limites de resistência dos materiais biológicos e a realidade clínica das fraturas e entorses.",
      "Está incorreta: inventa uma correlação inverosímil com radiações de telecomunicações.",
      "Está incorreta: confunde a rotação postural de decúbito com perda intrínseca da rigidez do material ósseo."
    ],
    "nursingApplication": "O enfermeiro vigia queixas agudas de dorsalgia ou lombalgia em idosos após pequenos esforços, evitando a flexão forçada do tronco e promovendo o alívio postural."
  },
  {
    "id": 3105,
    "topicId": 3,
    "question": "Na biofísica do sistema osteomuscular, em relação a 'fratura cominutiva em acidentes de trânsito de alta energia', qual é a fundamentação científica correta?",
    "options": [
      "Trata-se de um processo estritamente passivo e inerte onde não ocorrem quaisquer trocas metabólicas nem variações de propriedades elásticas.",
      "Corresponde a uma anulação instantânea das forças da gravidade e eliminação das leis de Newton nos tecidos biológicos.",
      "a energia cinética extrema excede a tenacidade máxima do osso, fraturando-o em três ou mais fragmentos ósseos múltiplos e desvitalizados. A grande dissipação de energia causa extensa destruição do periósteo, hemorragia intensa nos tecidos moles e alto risco de síndrome compartimental.",
      "Resulta de uma reação química de oxidação que decompõe a matriz colagénica em vapor e água à temperatura corporal de 37 °C."
    ],
    "correctIndex": 2,
    "explanation": "Em biofísica osteomuscular, fratura cominutiva em acidentes de trânsito de alta energia explica-se pelo facto de que a energia cinética extrema excede a tenacidade máxima do osso, fraturando-o em três ou mais fragmentos ósseos múltiplos e desvitalizados. A grande dissipação de energia causa extensa destruição do periósteo, hemorragia intensa nos tecidos moles e alto risco de síndrome compartimental.",
    "distractorAnalysis": [
      "Está incorreta: desconsidera a intensa atividade biológica, dinâmica e mecano-dependente do tecido osteomuscular.",
      "Está incorreta: invoca uma anulação impossível da gravidade física.",
      "Está incorreta: confunde a fisiologia da matriz com combustão química ou evaporação fictícia."
    ],
    "nursingApplication": "O enfermeiro monitoriza rigorosamente os 6 Ps da síndrome compartimental (Dor desproporcional, Palidez, Parestesia, Paralisia, Pulso ausente e Pressão no compartimento)."
  },
  {
    "id": 3106,
    "topicId": 3,
    "question": "Durante a prestação de cuidados de enfermagem a um doente com alterações musculoesqueléticas, como se traduz na prática clínica o conceito de 'fratura cominutiva em acidentes de trânsito de alta energia'?",
    "options": [
      "Exige a imobilização absoluta e perpétua do doente no leito sem qualquer mobilização para impedir que os ossos recebam forças mecânicas.",
      "Implica a aplicação de compressas ferventes a 100 °C para acelerar a fundição dos cristais de hidroxiapatite.",
      "Requer a suspensão de toda a alimentação oral e hidratação para forçar o organismo a reabsorver os seus próprios músculos.",
      "Traduz-se no seguinte cuidado e evidência: O enfermeiro monitoriza rigorosamente os 6 Ps da síndrome compartimental (Dor desproporcional, Palidez, Parestesia, Paralisia, Pulso ausente e Pressão no compartimento)."
    ],
    "correctIndex": 3,
    "explanation": "A aplicação de enfermagem para fratura cominutiva em acidentes de trânsito de alta energia baseia-se no princípio biomecânico: O enfermeiro monitoriza rigorosamente os 6 Ps da síndrome compartimental (Dor desproporcional, Palidez, Parestesia, Paralisia, Pulso ausente e Pressão no compartimento). Este raciocínio assegura intervenções fundamentadas na física biológica.",
    "distractorAnalysis": [
      "Está incorreta: é prejudicial, pois a ausência total de carga acelera a atrofia por desuso e a osteopenia.",
      "Está incorreta: causaria queimaduras graves de 3.º grau nos tecidos corporais.",
      "Está incorreta: provocaria desidratação fatal e desnutrição grave."
    ],
    "nursingApplication": "O enfermeiro monitoriza rigorosamente os 6 Ps da síndrome compartimental (Dor desproporcional, Palidez, Parestesia, Paralisia, Pulso ausente e Pressão no compartimento)."
  },
  {
    "id": 3107,
    "topicId": 3,
    "question": "Um enfermeiro analisa o impacto biomecânico das solicitações mecânicas em 'fratura cominutiva em acidentes de trânsito de alta energia'. Qual das seguintes afirmações apresenta a análise biofísica correta?",
    "options": [
      "A correta caracterização física demonstra que A grande dissipação de energia causa extensa destruição do periósteo, hemorragia intensa nos tecidos moles e alto risco de síndrome compartimental.",
      "A resistência mecânica nesta estrutura é estritamente infinita e insuscetível a qualquer tipo de fadiga, rotura ou deformação plástica.",
      "As propriedades mecânicas dependem exclusivamente de campos eletrostáticos externos de alta frequência gerados por telemóveis.",
      "A estrutura perde a totalidade da sua rigidez quando o doente assume a posição de decúbito lateral direito."
    ],
    "correctIndex": 0,
    "explanation": "Sob o ponto de vista físico e mecanicista, A grande dissipação de energia causa extensa destruição do periósteo, hemorragia intensa nos tecidos moles e alto risco de síndrome compartimental. Isto garante a integridade funcional do aparelho locomotor.",
    "distractorAnalysis": [
      "Está incorreta: desrespeita os limites de resistência dos materiais biológicos e a realidade clínica das fraturas e entorses.",
      "Está incorreta: inventa uma correlação inverosímil com radiações de telecomunicações.",
      "Está incorreta: confunde a rotação postural de decúbito com perda intrínseca da rigidez do material ósseo."
    ],
    "nursingApplication": "O enfermeiro monitoriza rigorosamente os 6 Ps da síndrome compartimental (Dor desproporcional, Palidez, Parestesia, Paralisia, Pulso ausente e Pressão no compartimento)."
  },
  {
    "id": 3108,
    "topicId": 3,
    "question": "Na biofísica do sistema osteomuscular, em relação a 'fratura em 'ramo verde' (greenstick fracture) em idade pediátrica', qual é a fundamentação científica correta?",
    "options": [
      "Trata-se de um processo estritamente passivo e inerte onde não ocorrem quaisquer trocas metabólicas nem variações de propriedades elásticas.",
      "o osso da criança possui periósteo muito espesso e elástico e matriz rica em colagénio, quebrando apenas numa cortical enquanto a oposta se dobra plasticamente. A tenacidade elástica da matriz infantil evita a separação completa dos dois segmentos ósseos, tal como um ramo de árvore verde que não parte na totalidade.",
      "Corresponde a uma anulação instantânea das forças da gravidade e eliminação das leis de Newton nos tecidos biológicos.",
      "Resulta de uma reação química de oxidação que decompõe a matriz colagénica em vapor e água à temperatura corporal de 37 °C."
    ],
    "correctIndex": 1,
    "explanation": "Em biofísica osteomuscular, fratura em 'ramo verde' (greenstick fracture) em idade pediátrica explica-se pelo facto de que o osso da criança possui periósteo muito espesso e elástico e matriz rica em colagénio, quebrando apenas numa cortical enquanto a oposta se dobra plasticamente. A tenacidade elástica da matriz infantil evita a separação completa dos dois segmentos ósseos, tal como um ramo de árvore verde que não parte na totalidade.",
    "distractorAnalysis": [
      "Está incorreta: desconsidera a intensa atividade biológica, dinâmica e mecano-dependente do tecido osteomuscular.",
      "Está incorreta: invoca uma anulação impossível da gravidade física.",
      "Está incorreta: confunde a fisiologia da matriz com combustão química ou evaporação fictícia."
    ],
    "nursingApplication": "O enfermeiro tranquiliza os pais explicando que o elevado potencial de remodelação óssea da criança e o periósteo intacto asseguram uma consolidação rápida sob tala ou gesso."
  },
  {
    "id": 3109,
    "topicId": 3,
    "question": "Durante a prestação de cuidados de enfermagem a um doente com alterações musculoesqueléticas, como se traduz na prática clínica o conceito de 'fratura em 'ramo verde' (greenstick fracture) em idade pediátrica'?",
    "options": [
      "Exige a imobilização absoluta e perpétua do doente no leito sem qualquer mobilização para impedir que os ossos recebam forças mecânicas.",
      "Implica a aplicação de compressas ferventes a 100 °C para acelerar a fundição dos cristais de hidroxiapatite.",
      "Traduz-se no seguinte cuidado e evidência: O enfermeiro tranquiliza os pais explicando que o elevado potencial de remodelação óssea da criança e o periósteo intacto asseguram uma consolidação rápida sob tala ou gesso.",
      "Requer a suspensão de toda a alimentação oral e hidratação para forçar o organismo a reabsorver os seus próprios músculos."
    ],
    "correctIndex": 2,
    "explanation": "A aplicação de enfermagem para fratura em 'ramo verde' (greenstick fracture) em idade pediátrica baseia-se no princípio biomecânico: O enfermeiro tranquiliza os pais explicando que o elevado potencial de remodelação óssea da criança e o periósteo intacto asseguram uma consolidação rápida sob tala ou gesso. Este raciocínio assegura intervenções fundamentadas na física biológica.",
    "distractorAnalysis": [
      "Está incorreta: é prejudicial, pois a ausência total de carga acelera a atrofia por desuso e a osteopenia.",
      "Está incorreta: causaria queimaduras graves de 3.º grau nos tecidos corporais.",
      "Está incorreta: provocaria desidratação fatal e desnutrição grave."
    ],
    "nursingApplication": "O enfermeiro tranquiliza os pais explicando que o elevado potencial de remodelação óssea da criança e o periósteo intacto asseguram uma consolidação rápida sob tala ou gesso."
  },
  {
    "id": 3110,
    "topicId": 3,
    "question": "Um enfermeiro analisa o impacto biomecânico das solicitações mecânicas em 'fratura em 'ramo verde' (greenstick fracture) em idade pediátrica'. Qual das seguintes afirmações apresenta a análise biofísica correta?",
    "options": [
      "A resistência mecânica nesta estrutura é estritamente infinita e insuscetível a qualquer tipo de fadiga, rotura ou deformação plástica.",
      "As propriedades mecânicas dependem exclusivamente de campos eletrostáticos externos de alta frequência gerados por telemóveis.",
      "A estrutura perde a totalidade da sua rigidez quando o doente assume a posição de decúbito lateral direito.",
      "A correta caracterização física demonstra que A tenacidade elástica da matriz infantil evita a separação completa dos dois segmentos ósseos, tal como um ramo de árvore verde que não parte na totalidade."
    ],
    "correctIndex": 3,
    "explanation": "Sob o ponto de vista físico e mecanicista, A tenacidade elástica da matriz infantil evita a separação completa dos dois segmentos ósseos, tal como um ramo de árvore verde que não parte na totalidade. Isto garante a integridade funcional do aparelho locomotor.",
    "distractorAnalysis": [
      "Está incorreta: desrespeita os limites de resistência dos materiais biológicos e a realidade clínica das fraturas e entorses.",
      "Está incorreta: inventa uma correlação inverosímil com radiações de telecomunicações.",
      "Está incorreta: confunde a rotação postural de decúbito com perda intrínseca da rigidez do material ósseo."
    ],
    "nursingApplication": "O enfermeiro tranquiliza os pais explicando que o elevado potencial de remodelação óssea da criança e o periósteo intacto asseguram uma consolidação rápida sob tala ou gesso."
  },
  {
    "id": 3111,
    "topicId": 3,
    "question": "Na biofísica do sistema osteomuscular, em relação a 'momento de inércia da área (I) e distribuição periférica de massa', qual é a fundamentação científica correta?",
    "options": [
      "o momento de inércia aumenta com a quarta potência da distância em relação ao eixo central ($R^4$), tornando a parede tubular periférica extremamente resistente à flexão. Ao concentrar a massa no diâmetro exterior, o osso minimiza a quantidade de material biológico necessário para atingir uma rigidez pré-determinada.",
      "Trata-se de um processo estritamente passivo e inerte onde não ocorrem quaisquer trocas metabólicas nem variações de propriedades elásticas.",
      "Corresponde a uma anulação instantânea das forças da gravidade e eliminação das leis de Newton nos tecidos biológicos.",
      "Resulta de uma reação química de oxidação que decompõe a matriz colagénica em vapor e água à temperatura corporal de 37 °C."
    ],
    "correctIndex": 0,
    "explanation": "Em biofísica osteomuscular, momento de inércia da área (I) e distribuição periférica de massa explica-se pelo facto de que o momento de inércia aumenta com a quarta potência da distância em relação ao eixo central ($R^4$), tornando a parede tubular periférica extremamente resistente à flexão. Ao concentrar a massa no diâmetro exterior, o osso minimiza a quantidade de material biológico necessário para atingir uma rigidez pré-determinada.",
    "distractorAnalysis": [
      "Está incorreta: desconsidera a intensa atividade biológica, dinâmica e mecano-dependente do tecido osteomuscular.",
      "Está incorreta: invoca uma anulação impossível da gravidade física.",
      "Está incorreta: confunde a fisiologia da matriz com combustão química ou evaporação fictícia."
    ],
    "nursingApplication": "O enfermeiro compreende que a perda de espessura cortical no idoso reduz drasticamente o $I$ e a rigidez do fémur, exigindo cautela na mobilização."
  },
  {
    "id": 3112,
    "topicId": 3,
    "question": "Durante a prestação de cuidados de enfermagem a um doente com alterações musculoesqueléticas, como se traduz na prática clínica o conceito de 'momento de inércia da área (I) e distribuição periférica de massa'?",
    "options": [
      "Exige a imobilização absoluta e perpétua do doente no leito sem qualquer mobilização para impedir que os ossos recebam forças mecânicas.",
      "Traduz-se no seguinte cuidado e evidência: O enfermeiro compreende que a perda de espessura cortical no idoso reduz drasticamente o $I$ e a rigidez do fémur, exigindo cautela na mobilização.",
      "Implica a aplicação de compressas ferventes a 100 °C para acelerar a fundição dos cristais de hidroxiapatite.",
      "Requer a suspensão de toda a alimentação oral e hidratação para forçar o organismo a reabsorver os seus próprios músculos."
    ],
    "correctIndex": 1,
    "explanation": "A aplicação de enfermagem para momento de inércia da área (I) e distribuição periférica de massa baseia-se no princípio biomecânico: O enfermeiro compreende que a perda de espessura cortical no idoso reduz drasticamente o $I$ e a rigidez do fémur, exigindo cautela na mobilização. Este raciocínio assegura intervenções fundamentadas na física biológica.",
    "distractorAnalysis": [
      "Está incorreta: é prejudicial, pois a ausência total de carga acelera a atrofia por desuso e a osteopenia.",
      "Está incorreta: causaria queimaduras graves de 3.º grau nos tecidos corporais.",
      "Está incorreta: provocaria desidratação fatal e desnutrição grave."
    ],
    "nursingApplication": "O enfermeiro compreende que a perda de espessura cortical no idoso reduz drasticamente o $I$ e a rigidez do fémur, exigindo cautela na mobilização."
  },
  {
    "id": 3113,
    "topicId": 3,
    "question": "Um enfermeiro analisa o impacto biomecânico das solicitações mecânicas em 'momento de inércia da área (I) e distribuição periférica de massa'. Qual das seguintes afirmações apresenta a análise biofísica correta?",
    "options": [
      "A resistência mecânica nesta estrutura é estritamente infinita e insuscetível a qualquer tipo de fadiga, rotura ou deformação plástica.",
      "As propriedades mecânicas dependem exclusivamente de campos eletrostáticos externos de alta frequência gerados por telemóveis.",
      "A correta caracterização física demonstra que Ao concentrar a massa no diâmetro exterior, o osso minimiza a quantidade de material biológico necessário para atingir uma rigidez pré-determinada.",
      "A estrutura perde a totalidade da sua rigidez quando o doente assume a posição de decúbito lateral direito."
    ],
    "correctIndex": 2,
    "explanation": "Sob o ponto de vista físico e mecanicista, Ao concentrar a massa no diâmetro exterior, o osso minimiza a quantidade de material biológico necessário para atingir uma rigidez pré-determinada. Isto garante a integridade funcional do aparelho locomotor.",
    "distractorAnalysis": [
      "Está incorreta: desrespeita os limites de resistência dos materiais biológicos e a realidade clínica das fraturas e entorses.",
      "Está incorreta: inventa uma correlação inverosímil com radiações de telecomunicações.",
      "Está incorreta: confunde a rotação postural de decúbito com perda intrínseca da rigidez do material ósseo."
    ],
    "nursingApplication": "O enfermeiro compreende que a perda de espessura cortical no idoso reduz drasticamente o $I$ e a rigidez do fémur, exigindo cautela na mobilização."
  },
  {
    "id": 3114,
    "topicId": 3,
    "question": "Na biofísica do sistema osteomuscular, em relação a 'momento polar de inércia (J) e resistência à torção', qual é a fundamentação científica correta?",
    "options": [
      "Trata-se de um processo estritamente passivo e inerte onde não ocorrem quaisquer trocas metabólicas nem variações de propriedades elásticas.",
      "Corresponde a uma anulação instantânea das forças da gravidade e eliminação das leis de Newton nos tecidos biológicos.",
      "Resulta de uma reação química de oxidação que decompõe a matriz colagénica em vapor e água à temperatura corporal de 37 °C.",
      "o momento polar de inércia ($J = 2I$) governa a resistência do tubo ósseo aos momentos de torção torsional durante as rotações da perna. Um cilindro oco com diâmetro exterior generoso resiste muito melhor à torção do que uma haste fina e maciça com a mesma quantidade de massa."
    ],
    "correctIndex": 3,
    "explanation": "Em biofísica osteomuscular, momento polar de inércia (J) e resistência à torção explica-se pelo facto de que o momento polar de inércia ($J = 2I$) governa a resistência do tubo ósseo aos momentos de torção torsional durante as rotações da perna. Um cilindro oco com diâmetro exterior generoso resiste muito melhor à torção do que uma haste fina e maciça com a mesma quantidade de massa.",
    "distractorAnalysis": [
      "Está incorreta: desconsidera a intensa atividade biológica, dinâmica e mecano-dependente do tecido osteomuscular.",
      "Está incorreta: invoca uma anulação impossível da gravidade física.",
      "Está incorreta: confunde a fisiologia da matriz com combustão química ou evaporação fictícia."
    ],
    "nursingApplication": "O enfermeiro ensina doentes com prótese da anca a não cruzarem as pernas nem realizarem movimentos de pivotagem brusca sobre o pé fixo no solo."
  },
  {
    "id": 3115,
    "topicId": 3,
    "question": "Durante a prestação de cuidados de enfermagem a um doente com alterações musculoesqueléticas, como se traduz na prática clínica o conceito de 'momento polar de inércia (J) e resistência à torção'?",
    "options": [
      "Traduz-se no seguinte cuidado e evidência: O enfermeiro ensina doentes com prótese da anca a não cruzarem as pernas nem realizarem movimentos de pivotagem brusca sobre o pé fixo no solo.",
      "Exige a imobilização absoluta e perpétua do doente no leito sem qualquer mobilização para impedir que os ossos recebam forças mecânicas.",
      "Implica a aplicação de compressas ferventes a 100 °C para acelerar a fundição dos cristais de hidroxiapatite.",
      "Requer a suspensão de toda a alimentação oral e hidratação para forçar o organismo a reabsorver os seus próprios músculos."
    ],
    "correctIndex": 0,
    "explanation": "A aplicação de enfermagem para momento polar de inércia (J) e resistência à torção baseia-se no princípio biomecânico: O enfermeiro ensina doentes com prótese da anca a não cruzarem as pernas nem realizarem movimentos de pivotagem brusca sobre o pé fixo no solo. Este raciocínio assegura intervenções fundamentadas na física biológica.",
    "distractorAnalysis": [
      "Está incorreta: é prejudicial, pois a ausência total de carga acelera a atrofia por desuso e a osteopenia.",
      "Está incorreta: causaria queimaduras graves de 3.º grau nos tecidos corporais.",
      "Está incorreta: provocaria desidratação fatal e desnutrição grave."
    ],
    "nursingApplication": "O enfermeiro ensina doentes com prótese da anca a não cruzarem as pernas nem realizarem movimentos de pivotagem brusca sobre o pé fixo no solo."
  },
  {
    "id": 3116,
    "topicId": 3,
    "question": "Um enfermeiro analisa o impacto biomecânico das solicitações mecânicas em 'momento polar de inércia (J) e resistência à torção'. Qual das seguintes afirmações apresenta a análise biofísica correta?",
    "options": [
      "A resistência mecânica nesta estrutura é estritamente infinita e insuscetível a qualquer tipo de fadiga, rotura ou deformação plástica.",
      "A correta caracterização física demonstra que Um cilindro oco com diâmetro exterior generoso resiste muito melhor à torção do que uma haste fina e maciça com a mesma quantidade de massa.",
      "As propriedades mecânicas dependem exclusivamente de campos eletrostáticos externos de alta frequência gerados por telemóveis.",
      "A estrutura perde a totalidade da sua rigidez quando o doente assume a posição de decúbito lateral direito."
    ],
    "correctIndex": 1,
    "explanation": "Sob o ponto de vista físico e mecanicista, Um cilindro oco com diâmetro exterior generoso resiste muito melhor à torção do que uma haste fina e maciça com a mesma quantidade de massa. Isto garante a integridade funcional do aparelho locomotor.",
    "distractorAnalysis": [
      "Está incorreta: desrespeita os limites de resistência dos materiais biológicos e a realidade clínica das fraturas e entorses.",
      "Está incorreta: inventa uma correlação inverosímil com radiações de telecomunicações.",
      "Está incorreta: confunde a rotação postural de decúbito com perda intrínseca da rigidez do material ósseo."
    ],
    "nursingApplication": "O enfermeiro ensina doentes com prótese da anca a não cruzarem as pernas nem realizarem movimentos de pivotagem brusca sobre o pé fixo no solo."
  },
  {
    "id": 3117,
    "topicId": 3,
    "question": "Na biofísica do sistema osteomuscular, em relação a 'haste intramedular (encavilhamento) e estabilização de fraturas diafisárias', qual é a fundamentação científica correta?",
    "options": [
      "Trata-se de um processo estritamente passivo e inerte onde não ocorrem quaisquer trocas metabólicas nem variações de propriedades elásticas.",
      "Corresponde a uma anulação instantânea das forças da gravidade e eliminação das leis de Newton nos tecidos biológicos.",
      "a haste metálica ocupa o canal medular central vazio, funcionando como um eixo interno que absorve os momentos fletores e alinha os fragmentos ósseos. A haste partilha as cargas mecânicas sem impedir as microdeformações axiais elásticas necessárias para estimular o calo ósseo pela Lei de Wolff.",
      "Resulta de uma reação química de oxidação que decompõe a matriz colagénica em vapor e água à temperatura corporal de 37 °C."
    ],
    "correctIndex": 2,
    "explanation": "Em biofísica osteomuscular, haste intramedular (encavilhamento) e estabilização de fraturas diafisárias explica-se pelo facto de que a haste metálica ocupa o canal medular central vazio, funcionando como um eixo interno que absorve os momentos fletores e alinha os fragmentos ósseos. A haste partilha as cargas mecânicas sem impedir as microdeformações axiais elásticas necessárias para estimular o calo ósseo pela Lei de Wolff.",
    "distractorAnalysis": [
      "Está incorreta: desconsidera a intensa atividade biológica, dinâmica e mecano-dependente do tecido osteomuscular.",
      "Está incorreta: invoca uma anulação impossível da gravidade física.",
      "Está incorreta: confunde a fisiologia da matriz com combustão química ou evaporação fictícia."
    ],
    "nursingApplication": "O enfermeiro avalia a ferida cirúrgica proximal de inserção da haste e incentiva a marcha precoce com carga parcial de acordo com a estabilidade mecânica do implante."
  },
  {
    "id": 3118,
    "topicId": 3,
    "question": "Durante a prestação de cuidados de enfermagem a um doente com alterações musculoesqueléticas, como se traduz na prática clínica o conceito de 'haste intramedular (encavilhamento) e estabilização de fraturas diafisárias'?",
    "options": [
      "Exige a imobilização absoluta e perpétua do doente no leito sem qualquer mobilização para impedir que os ossos recebam forças mecânicas.",
      "Implica a aplicação de compressas ferventes a 100 °C para acelerar a fundição dos cristais de hidroxiapatite.",
      "Requer a suspensão de toda a alimentação oral e hidratação para forçar o organismo a reabsorver os seus próprios músculos.",
      "Traduz-se no seguinte cuidado e evidência: O enfermeiro avalia a ferida cirúrgica proximal de inserção da haste e incentiva a marcha precoce com carga parcial de acordo com a estabilidade mecânica do implante."
    ],
    "correctIndex": 3,
    "explanation": "A aplicação de enfermagem para haste intramedular (encavilhamento) e estabilização de fraturas diafisárias baseia-se no princípio biomecânico: O enfermeiro avalia a ferida cirúrgica proximal de inserção da haste e incentiva a marcha precoce com carga parcial de acordo com a estabilidade mecânica do implante. Este raciocínio assegura intervenções fundamentadas na física biológica.",
    "distractorAnalysis": [
      "Está incorreta: é prejudicial, pois a ausência total de carga acelera a atrofia por desuso e a osteopenia.",
      "Está incorreta: causaria queimaduras graves de 3.º grau nos tecidos corporais.",
      "Está incorreta: provocaria desidratação fatal e desnutrição grave."
    ],
    "nursingApplication": "O enfermeiro avalia a ferida cirúrgica proximal de inserção da haste e incentiva a marcha precoce com carga parcial de acordo com a estabilidade mecânica do implante."
  },
  {
    "id": 3119,
    "topicId": 3,
    "question": "Um enfermeiro analisa o impacto biomecânico das solicitações mecânicas em 'haste intramedular (encavilhamento) e estabilização de fraturas diafisárias'. Qual das seguintes afirmações apresenta a análise biofísica correta?",
    "options": [
      "A correta caracterização física demonstra que A haste partilha as cargas mecânicas sem impedir as microdeformações axiais elásticas necessárias para estimular o calo ósseo pela Lei de Wolff.",
      "A resistência mecânica nesta estrutura é estritamente infinita e insuscetível a qualquer tipo de fadiga, rotura ou deformação plástica.",
      "As propriedades mecânicas dependem exclusivamente de campos eletrostáticos externos de alta frequência gerados por telemóveis.",
      "A estrutura perde a totalidade da sua rigidez quando o doente assume a posição de decúbito lateral direito."
    ],
    "correctIndex": 0,
    "explanation": "Sob o ponto de vista físico e mecanicista, A haste partilha as cargas mecânicas sem impedir as microdeformações axiais elásticas necessárias para estimular o calo ósseo pela Lei de Wolff. Isto garante a integridade funcional do aparelho locomotor.",
    "distractorAnalysis": [
      "Está incorreta: desrespeita os limites de resistência dos materiais biológicos e a realidade clínica das fraturas e entorses.",
      "Está incorreta: inventa uma correlação inverosímil com radiações de telecomunicações.",
      "Está incorreta: confunde a rotação postural de decúbito com perda intrínseca da rigidez do material ósseo."
    ],
    "nursingApplication": "O enfermeiro avalia a ferida cirúrgica proximal de inserção da haste e incentiva a marcha precoce com carga parcial de acordo com a estabilidade mecânica do implante."
  },
  {
    "id": 3120,
    "topicId": 3,
    "question": "Na biofísica do sistema osteomuscular, em relação a 'efeito de concentração de tensões (stress concentration) em orifícios de biópsia ou parafusos', qual é a fundamentação científica correta?",
    "options": [
      "Trata-se de um processo estritamente passivo e inerte onde não ocorrem quaisquer trocas metabólicas nem variações de propriedades elásticas.",
      "qualquer furo ou descontinuidade transversal na cortical tubular do osso atua como um concentrador geométrico que multiplica localmente as tensões mecânicas. Um orifício de parafuso pode reduzir a resistência à torção do osso em até 50% durante as primeiras semanas após a sua remoção.",
      "Corresponde a uma anulação instantânea das forças da gravidade e eliminação das leis de Newton nos tecidos biológicos.",
      "Resulta de uma reação química de oxidação que decompõe a matriz colagénica em vapor e água à temperatura corporal de 37 °C."
    ],
    "correctIndex": 1,
    "explanation": "Em biofísica osteomuscular, efeito de concentração de tensões (stress concentration) em orifícios de biópsia ou parafusos explica-se pelo facto de que qualquer furo ou descontinuidade transversal na cortical tubular do osso atua como um concentrador geométrico que multiplica localmente as tensões mecânicas. Um orifício de parafuso pode reduzir a resistência à torção do osso em até 50% durante as primeiras semanas após a sua remoção.",
    "distractorAnalysis": [
      "Está incorreta: desconsidera a intensa atividade biológica, dinâmica e mecano-dependente do tecido osteomuscular.",
      "Está incorreta: invoca uma anulação impossível da gravidade física.",
      "Está incorreta: confunde a fisiologia da matriz com combustão química ou evaporação fictícia."
    ],
    "nursingApplication": "O enfermeiro protege os membros de doentes submetidos a remoção de material de osteossíntese recente, orientando repouso desportivo relativo durante a cicatrização dos túneis ósseos."
  },
  {
    "id": 3121,
    "topicId": 3,
    "question": "Durante a prestação de cuidados de enfermagem a um doente com alterações musculoesqueléticas, como se traduz na prática clínica o conceito de 'efeito de concentração de tensões (stress concentration) em orifícios de biópsia ou parafusos'?",
    "options": [
      "Exige a imobilização absoluta e perpétua do doente no leito sem qualquer mobilização para impedir que os ossos recebam forças mecânicas.",
      "Implica a aplicação de compressas ferventes a 100 °C para acelerar a fundição dos cristais de hidroxiapatite.",
      "Traduz-se no seguinte cuidado e evidência: O enfermeiro protege os membros de doentes submetidos a remoção de material de osteossíntese recente, orientando repouso desportivo relativo durante a cicatrização dos túneis ósseos.",
      "Requer a suspensão de toda a alimentação oral e hidratação para forçar o organismo a reabsorver os seus próprios músculos."
    ],
    "correctIndex": 2,
    "explanation": "A aplicação de enfermagem para efeito de concentração de tensões (stress concentration) em orifícios de biópsia ou parafusos baseia-se no princípio biomecânico: O enfermeiro protege os membros de doentes submetidos a remoção de material de osteossíntese recente, orientando repouso desportivo relativo durante a cicatrização dos túneis ósseos. Este raciocínio assegura intervenções fundamentadas na física biológica.",
    "distractorAnalysis": [
      "Está incorreta: é prejudicial, pois a ausência total de carga acelera a atrofia por desuso e a osteopenia.",
      "Está incorreta: causaria queimaduras graves de 3.º grau nos tecidos corporais.",
      "Está incorreta: provocaria desidratação fatal e desnutrição grave."
    ],
    "nursingApplication": "O enfermeiro protege os membros de doentes submetidos a remoção de material de osteossíntese recente, orientando repouso desportivo relativo durante a cicatrização dos túneis ósseos."
  },
  {
    "id": 3122,
    "topicId": 3,
    "question": "Um enfermeiro analisa o impacto biomecânico das solicitações mecânicas em 'efeito de concentração de tensões (stress concentration) em orifícios de biópsia ou parafusos'. Qual das seguintes afirmações apresenta a análise biofísica correta?",
    "options": [
      "A resistência mecânica nesta estrutura é estritamente infinita e insuscetível a qualquer tipo de fadiga, rotura ou deformação plástica.",
      "As propriedades mecânicas dependem exclusivamente de campos eletrostáticos externos de alta frequência gerados por telemóveis.",
      "A estrutura perde a totalidade da sua rigidez quando o doente assume a posição de decúbito lateral direito.",
      "A correta caracterização física demonstra que Um orifício de parafuso pode reduzir a resistência à torção do osso em até 50% durante as primeiras semanas após a sua remoção."
    ],
    "correctIndex": 3,
    "explanation": "Sob o ponto de vista físico e mecanicista, Um orifício de parafuso pode reduzir a resistência à torção do osso em até 50% durante as primeiras semanas após a sua remoção. Isto garante a integridade funcional do aparelho locomotor.",
    "distractorAnalysis": [
      "Está incorreta: desrespeita os limites de resistência dos materiais biológicos e a realidade clínica das fraturas e entorses.",
      "Está incorreta: inventa uma correlação inverosímil com radiações de telecomunicações.",
      "Está incorreta: confunde a rotação postural de decúbito com perda intrínseca da rigidez do material ósseo."
    ],
    "nursingApplication": "O enfermeiro protege os membros de doentes submetidos a remoção de material de osteossíntese recente, orientando repouso desportivo relativo durante a cicatrização dos túneis ósseos."
  },
  {
    "id": 3123,
    "topicId": 3,
    "question": "Na biofísica do sistema osteomuscular, em relação a 'expansão periosteal compensatória durante o envelhecimento', qual é a fundamentação científica correta?",
    "options": [
      "à medida que a medula expande por reabsorção endosteal no idoso, ocorre ligeira aposição periosteal no diâmetro exterior para manter o momento de inércia. Esta adaptação biomecânica tenta compensar a osteopenia aumentando o raio externo $R_{ext}$, atenuando a perda de resistência mecânica à flexão.",
      "Trata-se de um processo estritamente passivo e inerte onde não ocorrem quaisquer trocas metabólicas nem variações de propriedades elásticas.",
      "Corresponde a uma anulação instantânea das forças da gravidade e eliminação das leis de Newton nos tecidos biológicos.",
      "Resulta de uma reação química de oxidação que decompõe a matriz colagénica em vapor e água à temperatura corporal de 37 °C."
    ],
    "correctIndex": 0,
    "explanation": "Em biofísica osteomuscular, expansão periosteal compensatória durante o envelhecimento explica-se pelo facto de que à medida que a medula expande por reabsorção endosteal no idoso, ocorre ligeira aposição periosteal no diâmetro exterior para manter o momento de inércia. Esta adaptação biomecânica tenta compensar a osteopenia aumentando o raio externo $R_{ext}$, atenuando a perda de resistência mecânica à flexão.",
    "distractorAnalysis": [
      "Está incorreta: desconsidera a intensa atividade biológica, dinâmica e mecano-dependente do tecido osteomuscular.",
      "Está incorreta: invoca uma anulação impossível da gravidade física.",
      "Está incorreta: confunde a fisiologia da matriz com combustão química ou evaporação fictícia."
    ],
    "nursingApplication": "O enfermeiro reconhece que embora haja aumento discreto do diâmetro externo, o córtex torna-se fino e frágil a impactos diretos concentrados."
  },
  {
    "id": 3124,
    "topicId": 3,
    "question": "Durante a prestação de cuidados de enfermagem a um doente com alterações musculoesqueléticas, como se traduz na prática clínica o conceito de 'expansão periosteal compensatória durante o envelhecimento'?",
    "options": [
      "Exige a imobilização absoluta e perpétua do doente no leito sem qualquer mobilização para impedir que os ossos recebam forças mecânicas.",
      "Traduz-se no seguinte cuidado e evidência: O enfermeiro reconhece que embora haja aumento discreto do diâmetro externo, o córtex torna-se fino e frágil a impactos diretos concentrados.",
      "Implica a aplicação de compressas ferventes a 100 °C para acelerar a fundição dos cristais de hidroxiapatite.",
      "Requer a suspensão de toda a alimentação oral e hidratação para forçar o organismo a reabsorver os seus próprios músculos."
    ],
    "correctIndex": 1,
    "explanation": "A aplicação de enfermagem para expansão periosteal compensatória durante o envelhecimento baseia-se no princípio biomecânico: O enfermeiro reconhece que embora haja aumento discreto do diâmetro externo, o córtex torna-se fino e frágil a impactos diretos concentrados. Este raciocínio assegura intervenções fundamentadas na física biológica.",
    "distractorAnalysis": [
      "Está incorreta: é prejudicial, pois a ausência total de carga acelera a atrofia por desuso e a osteopenia.",
      "Está incorreta: causaria queimaduras graves de 3.º grau nos tecidos corporais.",
      "Está incorreta: provocaria desidratação fatal e desnutrição grave."
    ],
    "nursingApplication": "O enfermeiro reconhece que embora haja aumento discreto do diâmetro externo, o córtex torna-se fino e frágil a impactos diretos concentrados."
  },
  {
    "id": 3125,
    "topicId": 3,
    "question": "Um enfermeiro analisa o impacto biomecânico das solicitações mecânicas em 'expansão periosteal compensatória durante o envelhecimento'. Qual das seguintes afirmações apresenta a análise biofísica correta?",
    "options": [
      "A resistência mecânica nesta estrutura é estritamente infinita e insuscetível a qualquer tipo de fadiga, rotura ou deformação plástica.",
      "As propriedades mecânicas dependem exclusivamente de campos eletrostáticos externos de alta frequência gerados por telemóveis.",
      "A correta caracterização física demonstra que Esta adaptação biomecânica tenta compensar a osteopenia aumentando o raio externo $R_{ext}$, atenuando a perda de resistência mecânica à flexão.",
      "A estrutura perde a totalidade da sua rigidez quando o doente assume a posição de decúbito lateral direito."
    ],
    "correctIndex": 2,
    "explanation": "Sob o ponto de vista físico e mecanicista, Esta adaptação biomecânica tenta compensar a osteopenia aumentando o raio externo $R_{ext}$, atenuando a perda de resistência mecânica à flexão. Isto garante a integridade funcional do aparelho locomotor.",
    "distractorAnalysis": [
      "Está incorreta: desrespeita os limites de resistência dos materiais biológicos e a realidade clínica das fraturas e entorses.",
      "Está incorreta: inventa uma correlação inverosímil com radiações de telecomunicações.",
      "Está incorreta: confunde a rotação postural de decúbito com perda intrínseca da rigidez do material ósseo."
    ],
    "nursingApplication": "O enfermeiro reconhece que embora haja aumento discreto do diâmetro externo, o córtex torna-se fino e frágil a impactos diretos concentrados."
  },
  {
    "id": 3126,
    "topicId": 3,
    "question": "Na biofísica do sistema osteomuscular, em relação a 'triângulo de Ward e zona de fraqueza trabecular no colo femoral', qual é a fundamentação científica correta?",
    "options": [
      "Trata-se de um processo estritamente passivo e inerte onde não ocorrem quaisquer trocas metabólicas nem variações de propriedades elásticas.",
      "Corresponde a uma anulação instantânea das forças da gravidade e eliminação das leis de Newton nos tecidos biológicos.",
      "Resulta de uma reação química de oxidação que decompõe a matriz colagénica em vapor e água à temperatura corporal de 37 °C.",
      "região hipodensa no interior do colo do fémur delimitada pelo cruzamento dos sistemas trabeculares de compressão principal e de tração. Com a osteoporose, este espaço trabecular torna-se virtualmente oco, transformando-se no local biomecanicamente mais frágil e propício à fratura transcervical."
    ],
    "correctIndex": 3,
    "explanation": "Em biofísica osteomuscular, triângulo de Ward e zona de fraqueza trabecular no colo femoral explica-se pelo facto de que região hipodensa no interior do colo do fémur delimitada pelo cruzamento dos sistemas trabeculares de compressão principal e de tração. Com a osteoporose, este espaço trabecular torna-se virtualmente oco, transformando-se no local biomecanicamente mais frágil e propício à fratura transcervical.",
    "distractorAnalysis": [
      "Está incorreta: desconsidera a intensa atividade biológica, dinâmica e mecano-dependente do tecido osteomuscular.",
      "Está incorreta: invoca uma anulação impossível da gravidade física.",
      "Está incorreta: confunde a fisiologia da matriz com combustão química ou evaporação fictícia."
    ],
    "nursingApplication": "O enfermeiro reconhece no raio-X a rarefação do triângulo de Ward como um preditor imagiológico de altíssimo risco de fratura da anca."
  },
  {
    "id": 3127,
    "topicId": 3,
    "question": "Durante a prestação de cuidados de enfermagem a um doente com alterações musculoesqueléticas, como se traduz na prática clínica o conceito de 'triângulo de Ward e zona de fraqueza trabecular no colo femoral'?",
    "options": [
      "Traduz-se no seguinte cuidado e evidência: O enfermeiro reconhece no raio-X a rarefação do triângulo de Ward como um preditor imagiológico de altíssimo risco de fratura da anca.",
      "Exige a imobilização absoluta e perpétua do doente no leito sem qualquer mobilização para impedir que os ossos recebam forças mecânicas.",
      "Implica a aplicação de compressas ferventes a 100 °C para acelerar a fundição dos cristais de hidroxiapatite.",
      "Requer a suspensão de toda a alimentação oral e hidratação para forçar o organismo a reabsorver os seus próprios músculos."
    ],
    "correctIndex": 0,
    "explanation": "A aplicação de enfermagem para triângulo de Ward e zona de fraqueza trabecular no colo femoral baseia-se no princípio biomecânico: O enfermeiro reconhece no raio-X a rarefação do triângulo de Ward como um preditor imagiológico de altíssimo risco de fratura da anca. Este raciocínio assegura intervenções fundamentadas na física biológica.",
    "distractorAnalysis": [
      "Está incorreta: é prejudicial, pois a ausência total de carga acelera a atrofia por desuso e a osteopenia.",
      "Está incorreta: causaria queimaduras graves de 3.º grau nos tecidos corporais.",
      "Está incorreta: provocaria desidratação fatal e desnutrição grave."
    ],
    "nursingApplication": "O enfermeiro reconhece no raio-X a rarefação do triângulo de Ward como um preditor imagiológico de altíssimo risco de fratura da anca."
  },
  {
    "id": 3128,
    "topicId": 3,
    "question": "Um enfermeiro analisa o impacto biomecânico das solicitações mecânicas em 'triângulo de Ward e zona de fraqueza trabecular no colo femoral'. Qual das seguintes afirmações apresenta a análise biofísica correta?",
    "options": [
      "A resistência mecânica nesta estrutura é estritamente infinita e insuscetível a qualquer tipo de fadiga, rotura ou deformação plástica.",
      "A correta caracterização física demonstra que Com a osteoporose, este espaço trabecular torna-se virtualmente oco, transformando-se no local biomecanicamente mais frágil e propício à fratura transcervical.",
      "As propriedades mecânicas dependem exclusivamente de campos eletrostáticos externos de alta frequência gerados por telemóveis.",
      "A estrutura perde a totalidade da sua rigidez quando o doente assume a posição de decúbito lateral direito."
    ],
    "correctIndex": 1,
    "explanation": "Sob o ponto de vista físico e mecanicista, Com a osteoporose, este espaço trabecular torna-se virtualmente oco, transformando-se no local biomecanicamente mais frágil e propício à fratura transcervical. Isto garante a integridade funcional do aparelho locomotor.",
    "distractorAnalysis": [
      "Está incorreta: desrespeita os limites de resistência dos materiais biológicos e a realidade clínica das fraturas e entorses.",
      "Está incorreta: inventa uma correlação inverosímil com radiações de telecomunicações.",
      "Está incorreta: confunde a rotação postural de decúbito com perda intrínseca da rigidez do material ósseo."
    ],
    "nursingApplication": "O enfermeiro reconhece no raio-X a rarefação do triângulo de Ward como um preditor imagiológico de altíssimo risco de fratura da anca."
  },
  {
    "id": 3129,
    "topicId": 3,
    "question": "Na biofísica do sistema osteomuscular, em relação a 'função dos músculos abdutores da anca (glúteo médio e mínimo)', qual é a fundamentação científica correta?",
    "options": [
      "Trata-se de um processo estritamente passivo e inerte onde não ocorrem quaisquer trocas metabólicas nem variações de propriedades elásticas.",
      "Corresponde a uma anulação instantânea das forças da gravidade e eliminação das leis de Newton nos tecidos biológicos.",
      "contraem vigorosamente na marcha para nivelar a bacia e evitar a queda da hemipelve contralateral (sinal de Trendelenburg). A sua contração potente gera uma força compressiva na cabeça do fémur que é o dobro do peso de todo o corpo do utente.",
      "Resulta de uma reação química de oxidação que decompõe a matriz colagénica em vapor e água à temperatura corporal de 37 °C."
    ],
    "correctIndex": 2,
    "explanation": "Em biofísica osteomuscular, função dos músculos abdutores da anca (glúteo médio e mínimo) explica-se pelo facto de que contraem vigorosamente na marcha para nivelar a bacia e evitar a queda da hemipelve contralateral (sinal de Trendelenburg). A sua contração potente gera uma força compressiva na cabeça do fémur que é o dobro do peso de todo o corpo do utente.",
    "distractorAnalysis": [
      "Está incorreta: desconsidera a intensa atividade biológica, dinâmica e mecano-dependente do tecido osteomuscular.",
      "Está incorreta: invoca uma anulação impossível da gravidade física.",
      "Está incorreta: confunde a fisiologia da matriz com combustão química ou evaporação fictícia."
    ],
    "nursingApplication": "O enfermeiro treina o reforço muscular do glúteo médio na reabilitação motora para estabilizar a bacia e garantir uma marcha segura e simétrica."
  },
  {
    "id": 3130,
    "topicId": 3,
    "question": "Durante a prestação de cuidados de enfermagem a um doente com alterações musculoesqueléticas, como se traduz na prática clínica o conceito de 'função dos músculos abdutores da anca (glúteo médio e mínimo)'?",
    "options": [
      "Exige a imobilização absoluta e perpétua do doente no leito sem qualquer mobilização para impedir que os ossos recebam forças mecânicas.",
      "Implica a aplicação de compressas ferventes a 100 °C para acelerar a fundição dos cristais de hidroxiapatite.",
      "Requer a suspensão de toda a alimentação oral e hidratação para forçar o organismo a reabsorver os seus próprios músculos.",
      "Traduz-se no seguinte cuidado e evidência: O enfermeiro treina o reforço muscular do glúteo médio na reabilitação motora para estabilizar a bacia e garantir uma marcha segura e simétrica."
    ],
    "correctIndex": 3,
    "explanation": "A aplicação de enfermagem para função dos músculos abdutores da anca (glúteo médio e mínimo) baseia-se no princípio biomecânico: O enfermeiro treina o reforço muscular do glúteo médio na reabilitação motora para estabilizar a bacia e garantir uma marcha segura e simétrica. Este raciocínio assegura intervenções fundamentadas na física biológica.",
    "distractorAnalysis": [
      "Está incorreta: é prejudicial, pois a ausência total de carga acelera a atrofia por desuso e a osteopenia.",
      "Está incorreta: causaria queimaduras graves de 3.º grau nos tecidos corporais.",
      "Está incorreta: provocaria desidratação fatal e desnutrição grave."
    ],
    "nursingApplication": "O enfermeiro treina o reforço muscular do glúteo médio na reabilitação motora para estabilizar a bacia e garantir uma marcha segura e simétrica."
  },
  {
    "id": 3131,
    "topicId": 3,
    "question": "Um enfermeiro analisa o impacto biomecânico das solicitações mecânicas em 'função dos músculos abdutores da anca (glúteo médio e mínimo)'. Qual das seguintes afirmações apresenta a análise biofísica correta?",
    "options": [
      "A correta caracterização física demonstra que A sua contração potente gera uma força compressiva na cabeça do fémur que é o dobro do peso de todo o corpo do utente.",
      "A resistência mecânica nesta estrutura é estritamente infinita e insuscetível a qualquer tipo de fadiga, rotura ou deformação plástica.",
      "As propriedades mecânicas dependem exclusivamente de campos eletrostáticos externos de alta frequência gerados por telemóveis.",
      "A estrutura perde a totalidade da sua rigidez quando o doente assume a posição de decúbito lateral direito."
    ],
    "correctIndex": 0,
    "explanation": "Sob o ponto de vista físico e mecanicista, A sua contração potente gera uma força compressiva na cabeça do fémur que é o dobro do peso de todo o corpo do utente. Isto garante a integridade funcional do aparelho locomotor.",
    "distractorAnalysis": [
      "Está incorreta: desrespeita os limites de resistência dos materiais biológicos e a realidade clínica das fraturas e entorses.",
      "Está incorreta: inventa uma correlação inverosímil com radiações de telecomunicações.",
      "Está incorreta: confunde a rotação postural de decúbito com perda intrínseca da rigidez do material ósseo."
    ],
    "nursingApplication": "O enfermeiro treina o reforço muscular do glúteo médio na reabilitação motora para estabilizar a bacia e garantir uma marcha segura e simétrica."
  },
  {
    "id": 3132,
    "topicId": 3,
    "question": "Na biofísica do sistema osteomuscular, em relação a 'uso biomecânico da bengala na mão oposta à lesão ortopédica', qual é a fundamentação científica correta?",
    "options": [
      "Trata-se de um processo estritamente passivo e inerte onde não ocorrem quaisquer trocas metabólicas nem variações de propriedades elásticas.",
      "a bengala na mão contralateral cria um longo braço de momento que equilibra o peso do corpo com uma pequena força descendente da mão. Isto desativa a necessidade de contração extrema do glúteo médio ipsilateral, diminuindo a carga articular compressiva na cabeça femoral lesada em mais de metade.",
      "Corresponde a uma anulação instantânea das forças da gravidade e eliminação das leis de Newton nos tecidos biológicos.",
      "Resulta de uma reação química de oxidação que decompõe a matriz colagénica em vapor e água à temperatura corporal de 37 °C."
    ],
    "correctIndex": 1,
    "explanation": "Em biofísica osteomuscular, uso biomecânico da bengala na mão oposta à lesão ortopédica explica-se pelo facto de que a bengala na mão contralateral cria um longo braço de momento que equilibra o peso do corpo com uma pequena força descendente da mão. Isto desativa a necessidade de contração extrema do glúteo médio ipsilateral, diminuindo a carga articular compressiva na cabeça femoral lesada em mais de metade.",
    "distractorAnalysis": [
      "Está incorreta: desconsidera a intensa atividade biológica, dinâmica e mecano-dependente do tecido osteomuscular.",
      "Está incorreta: invoca uma anulação impossível da gravidade física.",
      "Está incorreta: confunde a fisiologia da matriz com combustão química ou evaporação fictícia."
    ],
    "nursingApplication": "O enfermeiro corrige imediatamente o utente que tenta usar a bengala na mesma mão da anca operada, demonstrando a redução imediata da dor com a colocação correta contralateral."
  },
  {
    "id": 3133,
    "topicId": 3,
    "question": "Durante a prestação de cuidados de enfermagem a um doente com alterações musculoesqueléticas, como se traduz na prática clínica o conceito de 'uso biomecânico da bengala na mão oposta à lesão ortopédica'?",
    "options": [
      "Exige a imobilização absoluta e perpétua do doente no leito sem qualquer mobilização para impedir que os ossos recebam forças mecânicas.",
      "Implica a aplicação de compressas ferventes a 100 °C para acelerar a fundição dos cristais de hidroxiapatite.",
      "Traduz-se no seguinte cuidado e evidência: O enfermeiro corrige imediatamente o utente que tenta usar a bengala na mesma mão da anca operada, demonstrando a redução imediata da dor com a colocação correta contralateral.",
      "Requer a suspensão de toda a alimentação oral e hidratação para forçar o organismo a reabsorver os seus próprios músculos."
    ],
    "correctIndex": 2,
    "explanation": "A aplicação de enfermagem para uso biomecânico da bengala na mão oposta à lesão ortopédica baseia-se no princípio biomecânico: O enfermeiro corrige imediatamente o utente que tenta usar a bengala na mesma mão da anca operada, demonstrando a redução imediata da dor com a colocação correta contralateral. Este raciocínio assegura intervenções fundamentadas na física biológica.",
    "distractorAnalysis": [
      "Está incorreta: é prejudicial, pois a ausência total de carga acelera a atrofia por desuso e a osteopenia.",
      "Está incorreta: causaria queimaduras graves de 3.º grau nos tecidos corporais.",
      "Está incorreta: provocaria desidratação fatal e desnutrição grave."
    ],
    "nursingApplication": "O enfermeiro corrige imediatamente o utente que tenta usar a bengala na mesma mão da anca operada, demonstrando a redução imediata da dor com a colocação correta contralateral."
  },
  {
    "id": 3134,
    "topicId": 3,
    "question": "Um enfermeiro analisa o impacto biomecânico das solicitações mecânicas em 'uso biomecânico da bengala na mão oposta à lesão ortopédica'. Qual das seguintes afirmações apresenta a análise biofísica correta?",
    "options": [
      "A resistência mecânica nesta estrutura é estritamente infinita e insuscetível a qualquer tipo de fadiga, rotura ou deformação plástica.",
      "As propriedades mecânicas dependem exclusivamente de campos eletrostáticos externos de alta frequência gerados por telemóveis.",
      "A estrutura perde a totalidade da sua rigidez quando o doente assume a posição de decúbito lateral direito.",
      "A correta caracterização física demonstra que Isto desativa a necessidade de contração extrema do glúteo médio ipsilateral, diminuindo a carga articular compressiva na cabeça femoral lesada em mais de metade."
    ],
    "correctIndex": 3,
    "explanation": "Sob o ponto de vista físico e mecanicista, Isto desativa a necessidade de contração extrema do glúteo médio ipsilateral, diminuindo a carga articular compressiva na cabeça femoral lesada em mais de metade. Isto garante a integridade funcional do aparelho locomotor.",
    "distractorAnalysis": [
      "Está incorreta: desrespeita os limites de resistência dos materiais biológicos e a realidade clínica das fraturas e entorses.",
      "Está incorreta: inventa uma correlação inverosímil com radiações de telecomunicações.",
      "Está incorreta: confunde a rotação postural de decúbito com perda intrínseca da rigidez do material ósseo."
    ],
    "nursingApplication": "O enfermeiro corrige imediatamente o utente que tenta usar a bengala na mesma mão da anca operada, demonstrando a redução imediata da dor com a colocação correta contralateral."
  },
  {
    "id": 3135,
    "topicId": 3,
    "question": "Na biofísica do sistema osteomuscular, em relação a 'ângulo cérvico-diafisário: coxa valga vs coxa vara', qual é a fundamentação científica correta?",
    "options": [
      "o ângulo normal de 125°-130° pode estar aumentado (coxa valga, >135°) ou diminuído (coxa vara, <120°). A coxa vara aumenta o braço de momento e diminui a força requerida dos abdutores, mas aumenta exponencialmente as tensões de flexão e cisalhamento no colo femoral.",
      "Trata-se de um processo estritamente passivo e inerte onde não ocorrem quaisquer trocas metabólicas nem variações de propriedades elásticas.",
      "Corresponde a uma anulação instantânea das forças da gravidade e eliminação das leis de Newton nos tecidos biológicos.",
      "Resulta de uma reação química de oxidação que decompõe a matriz colagénica em vapor e água à temperatura corporal de 37 °C."
    ],
    "correctIndex": 0,
    "explanation": "Em biofísica osteomuscular, ângulo cérvico-diafisário: coxa valga vs coxa vara explica-se pelo facto de que o ângulo normal de 125°-130° pode estar aumentado (coxa valga, >135°) ou diminuído (coxa vara, <120°). A coxa vara aumenta o braço de momento e diminui a força requerida dos abdutores, mas aumenta exponencialmente as tensões de flexão e cisalhamento no colo femoral.",
    "distractorAnalysis": [
      "Está incorreta: desconsidera a intensa atividade biológica, dinâmica e mecano-dependente do tecido osteomuscular.",
      "Está incorreta: invoca uma anulação impossível da gravidade física.",
      "Está incorreta: confunde a fisiologia da matriz com combustão química ou evaporação fictícia."
    ],
    "nursingApplication": "O enfermeiro identifica alterações no alinhamento dos membros inferiores e adapta os exercícios de posicionamento e marcha ao perfil anatómico do utente."
  },
  {
    "id": 3136,
    "topicId": 3,
    "question": "Durante a prestação de cuidados de enfermagem a um doente com alterações musculoesqueléticas, como se traduz na prática clínica o conceito de 'ângulo cérvico-diafisário: coxa valga vs coxa vara'?",
    "options": [
      "Exige a imobilização absoluta e perpétua do doente no leito sem qualquer mobilização para impedir que os ossos recebam forças mecânicas.",
      "Traduz-se no seguinte cuidado e evidência: O enfermeiro identifica alterações no alinhamento dos membros inferiores e adapta os exercícios de posicionamento e marcha ao perfil anatómico do utente.",
      "Implica a aplicação de compressas ferventes a 100 °C para acelerar a fundição dos cristais de hidroxiapatite.",
      "Requer a suspensão de toda a alimentação oral e hidratação para forçar o organismo a reabsorver os seus próprios músculos."
    ],
    "correctIndex": 1,
    "explanation": "A aplicação de enfermagem para ângulo cérvico-diafisário: coxa valga vs coxa vara baseia-se no princípio biomecânico: O enfermeiro identifica alterações no alinhamento dos membros inferiores e adapta os exercícios de posicionamento e marcha ao perfil anatómico do utente. Este raciocínio assegura intervenções fundamentadas na física biológica.",
    "distractorAnalysis": [
      "Está incorreta: é prejudicial, pois a ausência total de carga acelera a atrofia por desuso e a osteopenia.",
      "Está incorreta: causaria queimaduras graves de 3.º grau nos tecidos corporais.",
      "Está incorreta: provocaria desidratação fatal e desnutrição grave."
    ],
    "nursingApplication": "O enfermeiro identifica alterações no alinhamento dos membros inferiores e adapta os exercícios de posicionamento e marcha ao perfil anatómico do utente."
  },
  {
    "id": 3137,
    "topicId": 3,
    "question": "Um enfermeiro analisa o impacto biomecânico das solicitações mecânicas em 'ângulo cérvico-diafisário: coxa valga vs coxa vara'. Qual das seguintes afirmações apresenta a análise biofísica correta?",
    "options": [
      "A resistência mecânica nesta estrutura é estritamente infinita e insuscetível a qualquer tipo de fadiga, rotura ou deformação plástica.",
      "As propriedades mecânicas dependem exclusivamente de campos eletrostáticos externos de alta frequência gerados por telemóveis.",
      "A correta caracterização física demonstra que A coxa vara aumenta o braço de momento e diminui a força requerida dos abdutores, mas aumenta exponencialmente as tensões de flexão e cisalhamento no colo femoral.",
      "A estrutura perde a totalidade da sua rigidez quando o doente assume a posição de decúbito lateral direito."
    ],
    "correctIndex": 2,
    "explanation": "Sob o ponto de vista físico e mecanicista, A coxa vara aumenta o braço de momento e diminui a força requerida dos abdutores, mas aumenta exponencialmente as tensões de flexão e cisalhamento no colo femoral. Isto garante a integridade funcional do aparelho locomotor.",
    "distractorAnalysis": [
      "Está incorreta: desrespeita os limites de resistência dos materiais biológicos e a realidade clínica das fraturas e entorses.",
      "Está incorreta: inventa uma correlação inverosímil com radiações de telecomunicações.",
      "Está incorreta: confunde a rotação postural de decúbito com perda intrínseca da rigidez do material ósseo."
    ],
    "nursingApplication": "O enfermeiro identifica alterações no alinhamento dos membros inferiores e adapta os exercícios de posicionamento e marcha ao perfil anatómico do utente."
  },
  {
    "id": 3138,
    "topicId": 3,
    "question": "Na biofísica do sistema osteomuscular, em relação a 'deformação elástica da cartilagem hialina na cabeça femoral', qual é a fundamentação científica correta?",
    "options": [
      "Trata-se de um processo estritamente passivo e inerte onde não ocorrem quaisquer trocas metabólicas nem variações de propriedades elásticas.",
      "Corresponde a uma anulação instantânea das forças da gravidade e eliminação das leis de Newton nos tecidos biológicos.",
      "Resulta de uma reação química de oxidação que decompõe a matriz colagénica em vapor e água à temperatura corporal de 37 °C.",
      "a cartilagem articular hialina deforma-se viscoelasticamente sob carga, aumentando a área de contacto articular de 2 para 8 cm². De acordo com a equação da pressão ($P = F / A$), este aumento quadruplicado da área reduz as pressões de pico para valores toleráveis pelos condrócitos."
    ],
    "correctIndex": 3,
    "explanation": "Em biofísica osteomuscular, deformação elástica da cartilagem hialina na cabeça femoral explica-se pelo facto de que a cartilagem articular hialina deforma-se viscoelasticamente sob carga, aumentando a área de contacto articular de 2 para 8 cm². De acordo com a equação da pressão ($P = F / A$), este aumento quadruplicado da área reduz as pressões de pico para valores toleráveis pelos condrócitos.",
    "distractorAnalysis": [
      "Está incorreta: desconsidera a intensa atividade biológica, dinâmica e mecano-dependente do tecido osteomuscular.",
      "Está incorreta: invoca uma anulação impossível da gravidade física.",
      "Está incorreta: confunde a fisiologia da matriz com combustão química ou evaporação fictícia."
    ],
    "nursingApplication": "O enfermeiro enfatiza o controlo rigoroso do peso corporal em doentes com coxartrose, pois cada quilograma a menos diminui 3 kg de carga em cada passo dado."
  },
  {
    "id": 3139,
    "topicId": 3,
    "question": "Durante a prestação de cuidados de enfermagem a um doente com alterações musculoesqueléticas, como se traduz na prática clínica o conceito de 'deformação elástica da cartilagem hialina na cabeça femoral'?",
    "options": [
      "Traduz-se no seguinte cuidado e evidência: O enfermeiro enfatiza o controlo rigoroso do peso corporal em doentes com coxartrose, pois cada quilograma a menos diminui 3 kg de carga em cada passo dado.",
      "Exige a imobilização absoluta e perpétua do doente no leito sem qualquer mobilização para impedir que os ossos recebam forças mecânicas.",
      "Implica a aplicação de compressas ferventes a 100 °C para acelerar a fundição dos cristais de hidroxiapatite.",
      "Requer a suspensão de toda a alimentação oral e hidratação para forçar o organismo a reabsorver os seus próprios músculos."
    ],
    "correctIndex": 0,
    "explanation": "A aplicação de enfermagem para deformação elástica da cartilagem hialina na cabeça femoral baseia-se no princípio biomecânico: O enfermeiro enfatiza o controlo rigoroso do peso corporal em doentes com coxartrose, pois cada quilograma a menos diminui 3 kg de carga em cada passo dado. Este raciocínio assegura intervenções fundamentadas na física biológica.",
    "distractorAnalysis": [
      "Está incorreta: é prejudicial, pois a ausência total de carga acelera a atrofia por desuso e a osteopenia.",
      "Está incorreta: causaria queimaduras graves de 3.º grau nos tecidos corporais.",
      "Está incorreta: provocaria desidratação fatal e desnutrição grave."
    ],
    "nursingApplication": "O enfermeiro enfatiza o controlo rigoroso do peso corporal em doentes com coxartrose, pois cada quilograma a menos diminui 3 kg de carga em cada passo dado."
  },
  {
    "id": 3140,
    "topicId": 3,
    "question": "Um enfermeiro analisa o impacto biomecânico das solicitações mecânicas em 'deformação elástica da cartilagem hialina na cabeça femoral'. Qual das seguintes afirmações apresenta a análise biofísica correta?",
    "options": [
      "A resistência mecânica nesta estrutura é estritamente infinita e insuscetível a qualquer tipo de fadiga, rotura ou deformação plástica.",
      "A correta caracterização física demonstra que De acordo com a equação da pressão ($P = F / A$), este aumento quadruplicado da área reduz as pressões de pico para valores toleráveis pelos condrócitos.",
      "As propriedades mecânicas dependem exclusivamente de campos eletrostáticos externos de alta frequência gerados por telemóveis.",
      "A estrutura perde a totalidade da sua rigidez quando o doente assume a posição de decúbito lateral direito."
    ],
    "correctIndex": 1,
    "explanation": "Sob o ponto de vista físico e mecanicista, De acordo com a equação da pressão ($P = F / A$), este aumento quadruplicado da área reduz as pressões de pico para valores toleráveis pelos condrócitos. Isto garante a integridade funcional do aparelho locomotor.",
    "distractorAnalysis": [
      "Está incorreta: desrespeita os limites de resistência dos materiais biológicos e a realidade clínica das fraturas e entorses.",
      "Está incorreta: inventa uma correlação inverosímil com radiações de telecomunicações.",
      "Está incorreta: confunde a rotação postural de decúbito com perda intrínseca da rigidez do material ósseo."
    ],
    "nursingApplication": "O enfermeiro enfatiza o controlo rigoroso do peso corporal em doentes com coxartrose, pois cada quilograma a menos diminui 3 kg de carga em cada passo dado."
  },
  {
    "id": 3141,
    "topicId": 3,
    "question": "Na biofísica do sistema osteomuscular, em relação a 't-score da densitometria óssea (DEXA) e critérios da OMS', qual é a fundamentação científica correta?",
    "options": [
      "Trata-se de um processo estritamente passivo e inerte onde não ocorrem quaisquer trocas metabólicas nem variações de propriedades elásticas.",
      "Corresponde a uma anulação instantânea das forças da gravidade e eliminação das leis de Newton nos tecidos biológicos.",
      "osteopenia é definida por T-score entre -1,0 e -2,5 desvios-padrão (DP), e osteoporose por T-score inferior a -2,5 DP em relação ao adulto jovem de referência. Cada desvio-padrão negativo abaixo da média dobra ou triplica o risco relativo de sofrer uma fratura por fragilidade na anca ou coluna.",
      "Resulta de uma reação química de oxidação que decompõe a matriz colagénica em vapor e água à temperatura corporal de 37 °C."
    ],
    "correctIndex": 2,
    "explanation": "Em biofísica osteomuscular, t-score da densitometria óssea (DEXA) e critérios da OMS explica-se pelo facto de que osteopenia é definida por T-score entre -1,0 e -2,5 desvios-padrão (DP), e osteoporose por T-score inferior a -2,5 DP em relação ao adulto jovem de referência. Cada desvio-padrão negativo abaixo da média dobra ou triplica o risco relativo de sofrer uma fratura por fragilidade na anca ou coluna.",
    "distractorAnalysis": [
      "Está incorreta: desconsidera a intensa atividade biológica, dinâmica e mecano-dependente do tecido osteomuscular.",
      "Está incorreta: invoca uma anulação impossível da gravidade física.",
      "Está incorreta: confunde a fisiologia da matriz com combustão química ou evaporação fictícia."
    ],
    "nursingApplication": "O enfermeiro interpreta os resultados da densitometria e aconselha o utente com T-score < -2,5 a adotar rigorosas medidas de prevenção de quedas no domicílio."
  },
  {
    "id": 3142,
    "topicId": 3,
    "question": "Durante a prestação de cuidados de enfermagem a um doente com alterações musculoesqueléticas, como se traduz na prática clínica o conceito de 't-score da densitometria óssea (DEXA) e critérios da OMS'?",
    "options": [
      "Exige a imobilização absoluta e perpétua do doente no leito sem qualquer mobilização para impedir que os ossos recebam forças mecânicas.",
      "Implica a aplicação de compressas ferventes a 100 °C para acelerar a fundição dos cristais de hidroxiapatite.",
      "Requer a suspensão de toda a alimentação oral e hidratação para forçar o organismo a reabsorver os seus próprios músculos.",
      "Traduz-se no seguinte cuidado e evidência: O enfermeiro interpreta os resultados da densitometria e aconselha o utente com T-score < -2,5 a adotar rigorosas medidas de prevenção de quedas no domicílio."
    ],
    "correctIndex": 3,
    "explanation": "A aplicação de enfermagem para t-score da densitometria óssea (DEXA) e critérios da OMS baseia-se no princípio biomecânico: O enfermeiro interpreta os resultados da densitometria e aconselha o utente com T-score < -2,5 a adotar rigorosas medidas de prevenção de quedas no domicílio. Este raciocínio assegura intervenções fundamentadas na física biológica.",
    "distractorAnalysis": [
      "Está incorreta: é prejudicial, pois a ausência total de carga acelera a atrofia por desuso e a osteopenia.",
      "Está incorreta: causaria queimaduras graves de 3.º grau nos tecidos corporais.",
      "Está incorreta: provocaria desidratação fatal e desnutrição grave."
    ],
    "nursingApplication": "O enfermeiro interpreta os resultados da densitometria e aconselha o utente com T-score < -2,5 a adotar rigorosas medidas de prevenção de quedas no domicílio."
  },
  {
    "id": 3143,
    "topicId": 3,
    "question": "Um enfermeiro analisa o impacto biomecânico das solicitações mecânicas em 't-score da densitometria óssea (DEXA) e critérios da OMS'. Qual das seguintes afirmações apresenta a análise biofísica correta?",
    "options": [
      "A correta caracterização física demonstra que Cada desvio-padrão negativo abaixo da média dobra ou triplica o risco relativo de sofrer uma fratura por fragilidade na anca ou coluna.",
      "A resistência mecânica nesta estrutura é estritamente infinita e insuscetível a qualquer tipo de fadiga, rotura ou deformação plástica.",
      "As propriedades mecânicas dependem exclusivamente de campos eletrostáticos externos de alta frequência gerados por telemóveis.",
      "A estrutura perde a totalidade da sua rigidez quando o doente assume a posição de decúbito lateral direito."
    ],
    "correctIndex": 0,
    "explanation": "Sob o ponto de vista físico e mecanicista, Cada desvio-padrão negativo abaixo da média dobra ou triplica o risco relativo de sofrer uma fratura por fragilidade na anca ou coluna. Isto garante a integridade funcional do aparelho locomotor.",
    "distractorAnalysis": [
      "Está incorreta: desrespeita os limites de resistência dos materiais biológicos e a realidade clínica das fraturas e entorses.",
      "Está incorreta: inventa uma correlação inverosímil com radiações de telecomunicações.",
      "Está incorreta: confunde a rotação postural de decúbito com perda intrínseca da rigidez do material ósseo."
    ],
    "nursingApplication": "O enfermeiro interpreta os resultados da densitometria e aconselha o utente com T-score < -2,5 a adotar rigorosas medidas de prevenção de quedas no domicílio."
  },
  {
    "id": 3144,
    "topicId": 3,
    "question": "Na biofísica do sistema osteomuscular, em relação a 'fratura da extremidade distal do rádio (fratura de Pouteau-Colles)', qual é a fundamentação científica correta?",
    "options": [
      "Trata-se de um processo estritamente passivo e inerte onde não ocorrem quaisquer trocas metabólicas nem variações de propriedades elásticas.",
      "produzida pela queda sobre a mão espalmada em extensão e pronação, onde a força de impacto transmite compressão e flexão dorsal à metáfise radial osteoporótica. Resulta na clássica deformidade em 'dorso de garfo' pelo desvio dorsal do fragmento distal do rádio.",
      "Corresponde a uma anulação instantânea das forças da gravidade e eliminação das leis de Newton nos tecidos biológicos.",
      "Resulta de uma reação química de oxidação que decompõe a matriz colagénica em vapor e água à temperatura corporal de 37 °C."
    ],
    "correctIndex": 1,
    "explanation": "Em biofísica osteomuscular, fratura da extremidade distal do rádio (fratura de Pouteau-Colles) explica-se pelo facto de que produzida pela queda sobre a mão espalmada em extensão e pronação, onde a força de impacto transmite compressão e flexão dorsal à metáfise radial osteoporótica. Resulta na clássica deformidade em 'dorso de garfo' pelo desvio dorsal do fragmento distal do rádio.",
    "distractorAnalysis": [
      "Está incorreta: desconsidera a intensa atividade biológica, dinâmica e mecano-dependente do tecido osteomuscular.",
      "Está incorreta: invoca uma anulação impossível da gravidade física.",
      "Está incorreta: confunde a fisiologia da matriz com combustão química ou evaporação fictícia."
    ],
    "nursingApplication": "O enfermeiro vigia a perfusão distal, sensibilidade dos dedos e edema sob a tala gessada no membro superior, prevenindo a compressão do nervo mediano no túnel cárpico."
  },
  {
    "id": 3145,
    "topicId": 3,
    "question": "Durante a prestação de cuidados de enfermagem a um doente com alterações musculoesqueléticas, como se traduz na prática clínica o conceito de 'fratura da extremidade distal do rádio (fratura de Pouteau-Colles)'?",
    "options": [
      "Exige a imobilização absoluta e perpétua do doente no leito sem qualquer mobilização para impedir que os ossos recebam forças mecânicas.",
      "Implica a aplicação de compressas ferventes a 100 °C para acelerar a fundição dos cristais de hidroxiapatite.",
      "Traduz-se no seguinte cuidado e evidência: O enfermeiro vigia a perfusão distal, sensibilidade dos dedos e edema sob a tala gessada no membro superior, prevenindo a compressão do nervo mediano no túnel cárpico.",
      "Requer a suspensão de toda a alimentação oral e hidratação para forçar o organismo a reabsorver os seus próprios músculos."
    ],
    "correctIndex": 2,
    "explanation": "A aplicação de enfermagem para fratura da extremidade distal do rádio (fratura de Pouteau-Colles) baseia-se no princípio biomecânico: O enfermeiro vigia a perfusão distal, sensibilidade dos dedos e edema sob a tala gessada no membro superior, prevenindo a compressão do nervo mediano no túnel cárpico. Este raciocínio assegura intervenções fundamentadas na física biológica.",
    "distractorAnalysis": [
      "Está incorreta: é prejudicial, pois a ausência total de carga acelera a atrofia por desuso e a osteopenia.",
      "Está incorreta: causaria queimaduras graves de 3.º grau nos tecidos corporais.",
      "Está incorreta: provocaria desidratação fatal e desnutrição grave."
    ],
    "nursingApplication": "O enfermeiro vigia a perfusão distal, sensibilidade dos dedos e edema sob a tala gessada no membro superior, prevenindo a compressão do nervo mediano no túnel cárpico."
  },
  {
    "id": 3146,
    "topicId": 3,
    "question": "Um enfermeiro analisa o impacto biomecânico das solicitações mecânicas em 'fratura da extremidade distal do rádio (fratura de Pouteau-Colles)'. Qual das seguintes afirmações apresenta a análise biofísica correta?",
    "options": [
      "A resistência mecânica nesta estrutura é estritamente infinita e insuscetível a qualquer tipo de fadiga, rotura ou deformação plástica.",
      "As propriedades mecânicas dependem exclusivamente de campos eletrostáticos externos de alta frequência gerados por telemóveis.",
      "A estrutura perde a totalidade da sua rigidez quando o doente assume a posição de decúbito lateral direito.",
      "A correta caracterização física demonstra que Resulta na clássica deformidade em 'dorso de garfo' pelo desvio dorsal do fragmento distal do rádio."
    ],
    "correctIndex": 3,
    "explanation": "Sob o ponto de vista físico e mecanicista, Resulta na clássica deformidade em 'dorso de garfo' pelo desvio dorsal do fragmento distal do rádio. Isto garante a integridade funcional do aparelho locomotor.",
    "distractorAnalysis": [
      "Está incorreta: desrespeita os limites de resistência dos materiais biológicos e a realidade clínica das fraturas e entorses.",
      "Está incorreta: inventa uma correlação inverosímil com radiações de telecomunicações.",
      "Está incorreta: confunde a rotação postural de decúbito com perda intrínseca da rigidez do material ósseo."
    ],
    "nursingApplication": "O enfermeiro vigia a perfusão distal, sensibilidade dos dedos e edema sob a tala gessada no membro superior, prevenindo a compressão do nervo mediano no túnel cárpico."
  },
  {
    "id": 3147,
    "topicId": 3,
    "question": "Na biofísica do sistema osteomuscular, em relação a 'mecanismo de fratura trocantérica vs fratura subcapital no idoso', qual é a fundamentação científica correta?",
    "options": [
      "a fratura extracapsular pertrocantérica ocorre através do osso trabecular vascularizado dos trocânteres, enquanto a subcapital é intracapsular e afeta a circulação da cabeça femoral. Nas fraturas subcapitais com desvio, a rutura mecânica das artérias retinaculares do anel pericervical acarreta alto risco de necrose avascular da cabeça femoral.",
      "Trata-se de um processo estritamente passivo e inerte onde não ocorrem quaisquer trocas metabólicas nem variações de propriedades elásticas.",
      "Corresponde a uma anulação instantânea das forças da gravidade e eliminação das leis de Newton nos tecidos biológicos.",
      "Resulta de uma reação química de oxidação que decompõe a matriz colagénica em vapor e água à temperatura corporal de 37 °C."
    ],
    "correctIndex": 0,
    "explanation": "Em biofísica osteomuscular, mecanismo de fratura trocantérica vs fratura subcapital no idoso explica-se pelo facto de que a fratura extracapsular pertrocantérica ocorre através do osso trabecular vascularizado dos trocânteres, enquanto a subcapital é intracapsular e afeta a circulação da cabeça femoral. Nas fraturas subcapitais com desvio, a rutura mecânica das artérias retinaculares do anel pericervical acarreta alto risco de necrose avascular da cabeça femoral.",
    "distractorAnalysis": [
      "Está incorreta: desconsidera a intensa atividade biológica, dinâmica e mecano-dependente do tecido osteomuscular.",
      "Está incorreta: invoca uma anulação impossível da gravidade física.",
      "Está incorreta: confunde a fisiologia da matriz com combustão química ou evaporação fictícia."
    ],
    "nursingApplication": "O enfermeiro compreende porque as fraturas subcapitais desviadas no idoso requerem artroplastia (prótese) em vez de osteossíntese com parafusos, devido ao risco de necrose óssea."
  },
  {
    "id": 3148,
    "topicId": 3,
    "question": "Durante a prestação de cuidados de enfermagem a um doente com alterações musculoesqueléticas, como se traduz na prática clínica o conceito de 'mecanismo de fratura trocantérica vs fratura subcapital no idoso'?",
    "options": [
      "Exige a imobilização absoluta e perpétua do doente no leito sem qualquer mobilização para impedir que os ossos recebam forças mecânicas.",
      "Traduz-se no seguinte cuidado e evidência: O enfermeiro compreende porque as fraturas subcapitais desviadas no idoso requerem artroplastia (prótese) em vez de osteossíntese com parafusos, devido ao risco de necrose óssea.",
      "Implica a aplicação de compressas ferventes a 100 °C para acelerar a fundição dos cristais de hidroxiapatite.",
      "Requer a suspensão de toda a alimentação oral e hidratação para forçar o organismo a reabsorver os seus próprios músculos."
    ],
    "correctIndex": 1,
    "explanation": "A aplicação de enfermagem para mecanismo de fratura trocantérica vs fratura subcapital no idoso baseia-se no princípio biomecânico: O enfermeiro compreende porque as fraturas subcapitais desviadas no idoso requerem artroplastia (prótese) em vez de osteossíntese com parafusos, devido ao risco de necrose óssea. Este raciocínio assegura intervenções fundamentadas na física biológica.",
    "distractorAnalysis": [
      "Está incorreta: é prejudicial, pois a ausência total de carga acelera a atrofia por desuso e a osteopenia.",
      "Está incorreta: causaria queimaduras graves de 3.º grau nos tecidos corporais.",
      "Está incorreta: provocaria desidratação fatal e desnutrição grave."
    ],
    "nursingApplication": "O enfermeiro compreende porque as fraturas subcapitais desviadas no idoso requerem artroplastia (prótese) em vez de osteossíntese com parafusos, devido ao risco de necrose óssea."
  },
  {
    "id": 3149,
    "topicId": 3,
    "question": "Um enfermeiro analisa o impacto biomecânico das solicitações mecânicas em 'mecanismo de fratura trocantérica vs fratura subcapital no idoso'. Qual das seguintes afirmações apresenta a análise biofísica correta?",
    "options": [
      "A resistência mecânica nesta estrutura é estritamente infinita e insuscetível a qualquer tipo de fadiga, rotura ou deformação plástica.",
      "As propriedades mecânicas dependem exclusivamente de campos eletrostáticos externos de alta frequência gerados por telemóveis.",
      "A correta caracterização física demonstra que Nas fraturas subcapitais com desvio, a rutura mecânica das artérias retinaculares do anel pericervical acarreta alto risco de necrose avascular da cabeça femoral.",
      "A estrutura perde a totalidade da sua rigidez quando o doente assume a posição de decúbito lateral direito."
    ],
    "correctIndex": 2,
    "explanation": "Sob o ponto de vista físico e mecanicista, Nas fraturas subcapitais com desvio, a rutura mecânica das artérias retinaculares do anel pericervical acarreta alto risco de necrose avascular da cabeça femoral. Isto garante a integridade funcional do aparelho locomotor.",
    "distractorAnalysis": [
      "Está incorreta: desrespeita os limites de resistência dos materiais biológicos e a realidade clínica das fraturas e entorses.",
      "Está incorreta: inventa uma correlação inverosímil com radiações de telecomunicações.",
      "Está incorreta: confunde a rotação postural de decúbito com perda intrínseca da rigidez do material ósseo."
    ],
    "nursingApplication": "O enfermeiro compreende porque as fraturas subcapitais desviadas no idoso requerem artroplastia (prótese) em vez de osteossíntese com parafusos, devido ao risco de necrose óssea."
  },
  {
    "id": 3150,
    "topicId": 3,
    "question": "Na biofísica do sistema osteomuscular, em relação a 'efeito dos bifosfonatos na microarquitetura e remodelação óssea', qual é a fundamentação científica correta?",
    "options": [
      "Trata-se de um processo estritamente passivo e inerte onde não ocorrem quaisquer trocas metabólicas nem variações de propriedades elásticas.",
      "Corresponde a uma anulação instantânea das forças da gravidade e eliminação das leis de Newton nos tecidos biológicos.",
      "Resulta de uma reação química de oxidação que decompõe a matriz colagénica em vapor e água à temperatura corporal de 37 °C.",
      "fármacos que se fixam fortemente aos cristais de hidroxiapatite e induzem apoptose dos osteoclastos, travando a reabsorção óssea descontrolada. Embora aumentem a densidade mineral, o uso prolongado (>5-10 anos) sem 'férias terapêuticas' pode tornar o osso hipermineralizado e excessivamente rígido, favorecendo fraturas atípicas do fémur."
    ],
    "correctIndex": 3,
    "explanation": "Em biofísica osteomuscular, efeito dos bifosfonatos na microarquitetura e remodelação óssea explica-se pelo facto de que fármacos que se fixam fortemente aos cristais de hidroxiapatite e induzem apoptose dos osteoclastos, travando a reabsorção óssea descontrolada. Embora aumentem a densidade mineral, o uso prolongado (>5-10 anos) sem 'férias terapêuticas' pode tornar o osso hipermineralizado e excessivamente rígido, favorecendo fraturas atípicas do fémur.",
    "distractorAnalysis": [
      "Está incorreta: desconsidera a intensa atividade biológica, dinâmica e mecano-dependente do tecido osteomuscular.",
      "Está incorreta: invoca uma anulação impossível da gravidade física.",
      "Está incorreta: confunde a fisiologia da matriz com combustão química ou evaporação fictícia."
    ],
    "nursingApplication": "O enfermeiro ensina a toma correta dos bifosfonatos orais: em jejum absoluto com um copo cheio de água pura, mantendo-se na posição sentada ou em pé durante pelo menos 30 minutos."
  },
  {
    "id": 3151,
    "topicId": 3,
    "question": "Durante a prestação de cuidados de enfermagem a um doente com alterações musculoesqueléticas, como se traduz na prática clínica o conceito de 'efeito dos bifosfonatos na microarquitetura e remodelação óssea'?",
    "options": [
      "Traduz-se no seguinte cuidado e evidência: O enfermeiro ensina a toma correta dos bifosfonatos orais: em jejum absoluto com um copo cheio de água pura, mantendo-se na posição sentada ou em pé durante pelo menos 30 minutos.",
      "Exige a imobilização absoluta e perpétua do doente no leito sem qualquer mobilização para impedir que os ossos recebam forças mecânicas.",
      "Implica a aplicação de compressas ferventes a 100 °C para acelerar a fundição dos cristais de hidroxiapatite.",
      "Requer a suspensão de toda a alimentação oral e hidratação para forçar o organismo a reabsorver os seus próprios músculos."
    ],
    "correctIndex": 0,
    "explanation": "A aplicação de enfermagem para efeito dos bifosfonatos na microarquitetura e remodelação óssea baseia-se no princípio biomecânico: O enfermeiro ensina a toma correta dos bifosfonatos orais: em jejum absoluto com um copo cheio de água pura, mantendo-se na posição sentada ou em pé durante pelo menos 30 minutos. Este raciocínio assegura intervenções fundamentadas na física biológica.",
    "distractorAnalysis": [
      "Está incorreta: é prejudicial, pois a ausência total de carga acelera a atrofia por desuso e a osteopenia.",
      "Está incorreta: causaria queimaduras graves de 3.º grau nos tecidos corporais.",
      "Está incorreta: provocaria desidratação fatal e desnutrição grave."
    ],
    "nursingApplication": "O enfermeiro ensina a toma correta dos bifosfonatos orais: em jejum absoluto com um copo cheio de água pura, mantendo-se na posição sentada ou em pé durante pelo menos 30 minutos."
  },
  {
    "id": 3152,
    "topicId": 3,
    "question": "Um enfermeiro analisa o impacto biomecânico das solicitações mecânicas em 'efeito dos bifosfonatos na microarquitetura e remodelação óssea'. Qual das seguintes afirmações apresenta a análise biofísica correta?",
    "options": [
      "A resistência mecânica nesta estrutura é estritamente infinita e insuscetível a qualquer tipo de fadiga, rotura ou deformação plástica.",
      "A correta caracterização física demonstra que Embora aumentem a densidade mineral, o uso prolongado (>5-10 anos) sem 'férias terapêuticas' pode tornar o osso hipermineralizado e excessivamente rígido, favorecendo fraturas atípicas do fémur.",
      "As propriedades mecânicas dependem exclusivamente de campos eletrostáticos externos de alta frequência gerados por telemóveis.",
      "A estrutura perde a totalidade da sua rigidez quando o doente assume a posição de decúbito lateral direito."
    ],
    "correctIndex": 1,
    "explanation": "Sob o ponto de vista físico e mecanicista, Embora aumentem a densidade mineral, o uso prolongado (>5-10 anos) sem 'férias terapêuticas' pode tornar o osso hipermineralizado e excessivamente rígido, favorecendo fraturas atípicas do fémur. Isto garante a integridade funcional do aparelho locomotor.",
    "distractorAnalysis": [
      "Está incorreta: desrespeita os limites de resistência dos materiais biológicos e a realidade clínica das fraturas e entorses.",
      "Está incorreta: inventa uma correlação inverosímil com radiações de telecomunicações.",
      "Está incorreta: confunde a rotação postural de decúbito com perda intrínseca da rigidez do material ósseo."
    ],
    "nursingApplication": "O enfermeiro ensina a toma correta dos bifosfonatos orais: em jejum absoluto com um copo cheio de água pura, mantendo-se na posição sentada ou em pé durante pelo menos 30 minutos."
  },
  {
    "id": 3153,
    "topicId": 3,
    "question": "Na biofísica do sistema osteomuscular, em relação a 'protetores trocantéricos acolchoados na prevenção de fraturas', qual é a fundamentação científica correta?",
    "options": [
      "Trata-se de um processo estritamente passivo e inerte onde não ocorrem quaisquer trocas metabólicas nem variações de propriedades elásticas.",
      "Corresponde a uma anulação instantânea das forças da gravidade e eliminação das leis de Newton nos tecidos biológicos.",
      "dispositivos têxteis colocados sobre os quadris com almofadas elastoméricas que dissipam a energia do impacto de uma queda lateral sobre os tecidos moles circundantes. Reduzem a força de pico transmitida diretamente ao trocânter maior para valores abaixo do limiar de fratura do colo femoral osteoporótico.",
      "Resulta de uma reação química de oxidação que decompõe a matriz colagénica em vapor e água à temperatura corporal de 37 °C."
    ],
    "correctIndex": 2,
    "explanation": "Em biofísica osteomuscular, protetores trocantéricos acolchoados na prevenção de fraturas explica-se pelo facto de que dispositivos têxteis colocados sobre os quadris com almofadas elastoméricas que dissipam a energia do impacto de uma queda lateral sobre os tecidos moles circundantes. Reduzem a força de pico transmitida diretamente ao trocânter maior para valores abaixo do limiar de fratura do colo femoral osteoporótico.",
    "distractorAnalysis": [
      "Está incorreta: desconsidera a intensa atividade biológica, dinâmica e mecano-dependente do tecido osteomuscular.",
      "Está incorreta: invoca uma anulação impossível da gravidade física.",
      "Está incorreta: confunde a fisiologia da matriz com combustão química ou evaporação fictícia."
    ],
    "nursingApplication": "O enfermeiro avalia a adesão e o conforto no uso de protetores de anca em utentes institucionalizados com demência e marcha instável com risco elevado de queda."
  },
  {
    "id": 3154,
    "topicId": 3,
    "question": "Durante a prestação de cuidados de enfermagem a um doente com alterações musculoesqueléticas, como se traduz na prática clínica o conceito de 'protetores trocantéricos acolchoados na prevenção de fraturas'?",
    "options": [
      "Exige a imobilização absoluta e perpétua do doente no leito sem qualquer mobilização para impedir que os ossos recebam forças mecânicas.",
      "Implica a aplicação de compressas ferventes a 100 °C para acelerar a fundição dos cristais de hidroxiapatite.",
      "Requer a suspensão de toda a alimentação oral e hidratação para forçar o organismo a reabsorver os seus próprios músculos.",
      "Traduz-se no seguinte cuidado e evidência: O enfermeiro avalia a adesão e o conforto no uso de protetores de anca em utentes institucionalizados com demência e marcha instável com risco elevado de queda."
    ],
    "correctIndex": 3,
    "explanation": "A aplicação de enfermagem para protetores trocantéricos acolchoados na prevenção de fraturas baseia-se no princípio biomecânico: O enfermeiro avalia a adesão e o conforto no uso de protetores de anca em utentes institucionalizados com demência e marcha instável com risco elevado de queda. Este raciocínio assegura intervenções fundamentadas na física biológica.",
    "distractorAnalysis": [
      "Está incorreta: é prejudicial, pois a ausência total de carga acelera a atrofia por desuso e a osteopenia.",
      "Está incorreta: causaria queimaduras graves de 3.º grau nos tecidos corporais.",
      "Está incorreta: provocaria desidratação fatal e desnutrição grave."
    ],
    "nursingApplication": "O enfermeiro avalia a adesão e o conforto no uso de protetores de anca em utentes institucionalizados com demência e marcha instável com risco elevado de queda."
  },
  {
    "id": 3155,
    "topicId": 3,
    "question": "Um enfermeiro analisa o impacto biomecânico das solicitações mecânicas em 'protetores trocantéricos acolchoados na prevenção de fraturas'. Qual das seguintes afirmações apresenta a análise biofísica correta?",
    "options": [
      "A correta caracterização física demonstra que Reduzem a força de pico transmitida diretamente ao trocânter maior para valores abaixo do limiar de fratura do colo femoral osteoporótico.",
      "A resistência mecânica nesta estrutura é estritamente infinita e insuscetível a qualquer tipo de fadiga, rotura ou deformação plástica.",
      "As propriedades mecânicas dependem exclusivamente de campos eletrostáticos externos de alta frequência gerados por telemóveis.",
      "A estrutura perde a totalidade da sua rigidez quando o doente assume a posição de decúbito lateral direito."
    ],
    "correctIndex": 0,
    "explanation": "Sob o ponto de vista físico e mecanicista, Reduzem a força de pico transmitida diretamente ao trocânter maior para valores abaixo do limiar de fratura do colo femoral osteoporótico. Isto garante a integridade funcional do aparelho locomotor.",
    "distractorAnalysis": [
      "Está incorreta: desrespeita os limites de resistência dos materiais biológicos e a realidade clínica das fraturas e entorses.",
      "Está incorreta: inventa uma correlação inverosímil com radiações de telecomunicações.",
      "Está incorreta: confunde a rotação postural de decúbito com perda intrínseca da rigidez do material ósseo."
    ],
    "nursingApplication": "O enfermeiro avalia a adesão e o conforto no uso de protetores de anca em utentes institucionalizados com demência e marcha instável com risco elevado de queda."
  },
  {
    "id": 3156,
    "topicId": 3,
    "question": "Na biofísica do sistema osteomuscular, em relação a 'reversão acelerada da Lei de Wolff no decúbito dorsal estrito', qual é a fundamentação científica correta?",
    "options": [
      "Trata-se de um processo estritamente passivo e inerte onde não ocorrem quaisquer trocas metabólicas nem variações de propriedades elásticas.",
      "na ausência da carga gravitacional axial, a reabsorção óssea supera a formação, perdendo-se tanta massa óssea em 1 mês de leito como num ano de envelhecimento normal. A falta de forças de contração muscular remove o sinal biofísico de mecanotransdução, acelerando a perda de matriz e a fraqueza cortical.",
      "Corresponde a uma anulação instantânea das forças da gravidade e eliminação das leis de Newton nos tecidos biológicos.",
      "Resulta de uma reação química de oxidação que decompõe a matriz colagénica em vapor e água à temperatura corporal de 37 °C."
    ],
    "correctIndex": 1,
    "explanation": "Em biofísica osteomuscular, reversão acelerada da Lei de Wolff no decúbito dorsal estrito explica-se pelo facto de que na ausência da carga gravitacional axial, a reabsorção óssea supera a formação, perdendo-se tanta massa óssea em 1 mês de leito como num ano de envelhecimento normal. A falta de forças de contração muscular remove o sinal biofísico de mecanotransdução, acelerando a perda de matriz e a fraqueza cortical.",
    "distractorAnalysis": [
      "Está incorreta: desconsidera a intensa atividade biológica, dinâmica e mecano-dependente do tecido osteomuscular.",
      "Está incorreta: invoca uma anulação impossível da gravidade física.",
      "Está incorreta: confunde a fisiologia da matriz com combustão química ou evaporação fictícia."
    ],
    "nursingApplication": "O enfermeiro prioriza planos de verticalização precoce e levante orientado para o cadeirão desde o primeiro dia de estabilidade clínica do doente."
  },
  {
    "id": 3157,
    "topicId": 3,
    "question": "Durante a prestação de cuidados de enfermagem a um doente com alterações musculoesqueléticas, como se traduz na prática clínica o conceito de 'reversão acelerada da Lei de Wolff no decúbito dorsal estrito'?",
    "options": [
      "Exige a imobilização absoluta e perpétua do doente no leito sem qualquer mobilização para impedir que os ossos recebam forças mecânicas.",
      "Implica a aplicação de compressas ferventes a 100 °C para acelerar a fundição dos cristais de hidroxiapatite.",
      "Traduz-se no seguinte cuidado e evidência: O enfermeiro prioriza planos de verticalização precoce e levante orientado para o cadeirão desde o primeiro dia de estabilidade clínica do doente.",
      "Requer a suspensão de toda a alimentação oral e hidratação para forçar o organismo a reabsorver os seus próprios músculos."
    ],
    "correctIndex": 2,
    "explanation": "A aplicação de enfermagem para reversão acelerada da Lei de Wolff no decúbito dorsal estrito baseia-se no princípio biomecânico: O enfermeiro prioriza planos de verticalização precoce e levante orientado para o cadeirão desde o primeiro dia de estabilidade clínica do doente. Este raciocínio assegura intervenções fundamentadas na física biológica.",
    "distractorAnalysis": [
      "Está incorreta: é prejudicial, pois a ausência total de carga acelera a atrofia por desuso e a osteopenia.",
      "Está incorreta: causaria queimaduras graves de 3.º grau nos tecidos corporais.",
      "Está incorreta: provocaria desidratação fatal e desnutrição grave."
    ],
    "nursingApplication": "O enfermeiro prioriza planos de verticalização precoce e levante orientado para o cadeirão desde o primeiro dia de estabilidade clínica do doente."
  },
  {
    "id": 3158,
    "topicId": 3,
    "question": "Um enfermeiro analisa o impacto biomecânico das solicitações mecânicas em 'reversão acelerada da Lei de Wolff no decúbito dorsal estrito'. Qual das seguintes afirmações apresenta a análise biofísica correta?",
    "options": [
      "A resistência mecânica nesta estrutura é estritamente infinita e insuscetível a qualquer tipo de fadiga, rotura ou deformação plástica.",
      "As propriedades mecânicas dependem exclusivamente de campos eletrostáticos externos de alta frequência gerados por telemóveis.",
      "A estrutura perde a totalidade da sua rigidez quando o doente assume a posição de decúbito lateral direito.",
      "A correta caracterização física demonstra que A falta de forças de contração muscular remove o sinal biofísico de mecanotransdução, acelerando a perda de matriz e a fraqueza cortical."
    ],
    "correctIndex": 3,
    "explanation": "Sob o ponto de vista físico e mecanicista, A falta de forças de contração muscular remove o sinal biofísico de mecanotransdução, acelerando a perda de matriz e a fraqueza cortical. Isto garante a integridade funcional do aparelho locomotor.",
    "distractorAnalysis": [
      "Está incorreta: desrespeita os limites de resistência dos materiais biológicos e a realidade clínica das fraturas e entorses.",
      "Está incorreta: inventa uma correlação inverosímil com radiações de telecomunicações.",
      "Está incorreta: confunde a rotação postural de decúbito com perda intrínseca da rigidez do material ósseo."
    ],
    "nursingApplication": "O enfermeiro prioriza planos de verticalização precoce e levante orientado para o cadeirão desde o primeiro dia de estabilidade clínica do doente."
  },
  {
    "id": 3159,
    "topicId": 3,
    "question": "Na biofísica do sistema osteomuscular, em relação a 'hipercalciúria de imobilização e formação de litíase renal', qual é a fundamentação científica correta?",
    "options": [
      "o cálcio massivamente mobilizado da matriz óssea reabsorvida é filtrado nos glomérulos e satura os túbulos renais. A precipitação de oxalato e fosfato de cálcio na urina estagnada da bexiga em decúbito dorsal favorece infeções urinárias e cálculos nos rins e bexiga.",
      "Trata-se de um processo estritamente passivo e inerte onde não ocorrem quaisquer trocas metabólicas nem variações de propriedades elásticas.",
      "Corresponde a uma anulação instantânea das forças da gravidade e eliminação das leis de Newton nos tecidos biológicos.",
      "Resulta de uma reação química de oxidação que decompõe a matriz colagénica em vapor e água à temperatura corporal de 37 °C."
    ],
    "correctIndex": 0,
    "explanation": "Em biofísica osteomuscular, hipercalciúria de imobilização e formação de litíase renal explica-se pelo facto de que o cálcio massivamente mobilizado da matriz óssea reabsorvida é filtrado nos glomérulos e satura os túbulos renais. A precipitação de oxalato e fosfato de cálcio na urina estagnada da bexiga em decúbito dorsal favorece infeções urinárias e cálculos nos rins e bexiga.",
    "distractorAnalysis": [
      "Está incorreta: desconsidera a intensa atividade biológica, dinâmica e mecano-dependente do tecido osteomuscular.",
      "Está incorreta: invoca uma anulação impossível da gravidade física.",
      "Está incorreta: confunde a fisiologia da matriz com combustão química ou evaporação fictícia."
    ],
    "nursingApplication": "O enfermeiro monitoriza o balanço hídrico, incentiva a ingestão abundante de água e vigia queixas de cólica renal ou hematúria no doente acamado crónico."
  },
  {
    "id": 3160,
    "topicId": 3,
    "question": "Durante a prestação de cuidados de enfermagem a um doente com alterações musculoesqueléticas, como se traduz na prática clínica o conceito de 'hipercalciúria de imobilização e formação de litíase renal'?",
    "options": [
      "Exige a imobilização absoluta e perpétua do doente no leito sem qualquer mobilização para impedir que os ossos recebam forças mecânicas.",
      "Traduz-se no seguinte cuidado e evidência: O enfermeiro monitoriza o balanço hídrico, incentiva a ingestão abundante de água e vigia queixas de cólica renal ou hematúria no doente acamado crónico.",
      "Implica a aplicação de compressas ferventes a 100 °C para acelerar a fundição dos cristais de hidroxiapatite.",
      "Requer a suspensão de toda a alimentação oral e hidratação para forçar o organismo a reabsorver os seus próprios músculos."
    ],
    "correctIndex": 1,
    "explanation": "A aplicação de enfermagem para hipercalciúria de imobilização e formação de litíase renal baseia-se no princípio biomecânico: O enfermeiro monitoriza o balanço hídrico, incentiva a ingestão abundante de água e vigia queixas de cólica renal ou hematúria no doente acamado crónico. Este raciocínio assegura intervenções fundamentadas na física biológica.",
    "distractorAnalysis": [
      "Está incorreta: é prejudicial, pois a ausência total de carga acelera a atrofia por desuso e a osteopenia.",
      "Está incorreta: causaria queimaduras graves de 3.º grau nos tecidos corporais.",
      "Está incorreta: provocaria desidratação fatal e desnutrição grave."
    ],
    "nursingApplication": "O enfermeiro monitoriza o balanço hídrico, incentiva a ingestão abundante de água e vigia queixas de cólica renal ou hematúria no doente acamado crónico."
  },
  {
    "id": 3161,
    "topicId": 3,
    "question": "Um enfermeiro analisa o impacto biomecânico das solicitações mecânicas em 'hipercalciúria de imobilização e formação de litíase renal'. Qual das seguintes afirmações apresenta a análise biofísica correta?",
    "options": [
      "A resistência mecânica nesta estrutura é estritamente infinita e insuscetível a qualquer tipo de fadiga, rotura ou deformação plástica.",
      "As propriedades mecânicas dependem exclusivamente de campos eletrostáticos externos de alta frequência gerados por telemóveis.",
      "A correta caracterização física demonstra que A precipitação de oxalato e fosfato de cálcio na urina estagnada da bexiga em decúbito dorsal favorece infeções urinárias e cálculos nos rins e bexiga.",
      "A estrutura perde a totalidade da sua rigidez quando o doente assume a posição de decúbito lateral direito."
    ],
    "correctIndex": 2,
    "explanation": "Sob o ponto de vista físico e mecanicista, A precipitação de oxalato e fosfato de cálcio na urina estagnada da bexiga em decúbito dorsal favorece infeções urinárias e cálculos nos rins e bexiga. Isto garante a integridade funcional do aparelho locomotor.",
    "distractorAnalysis": [
      "Está incorreta: desrespeita os limites de resistência dos materiais biológicos e a realidade clínica das fraturas e entorses.",
      "Está incorreta: inventa uma correlação inverosímil com radiações de telecomunicações.",
      "Está incorreta: confunde a rotação postural de decúbito com perda intrínseca da rigidez do material ósseo."
    ],
    "nursingApplication": "O enfermeiro monitoriza o balanço hídrico, incentiva a ingestão abundante de água e vigia queixas de cólica renal ou hematúria no doente acamado crónico."
  },
  {
    "id": 3162,
    "topicId": 3,
    "question": "Na biofísica do sistema osteomuscular, em relação a 'rigidez articular e retração capsular por estase de colagénio', qual é a fundamentação científica correta?",
    "options": [
      "Trata-se de um processo estritamente passivo e inerte onde não ocorrem quaisquer trocas metabólicas nem variações de propriedades elásticas.",
      "Corresponde a uma anulação instantânea das forças da gravidade e eliminação das leis de Newton nos tecidos biológicos.",
      "Resulta de uma reação química de oxidação que decompõe a matriz colagénica em vapor e água à temperatura corporal de 37 °C.",
      "a imobilização de uma articulação por mais de 3 semanas induz proliferação desorganizada de fibras de colagénio na cápsula e ligamentos (cross-linking aberrante). Isto reduz a complacência elástica da cápsula articular, gerando dor mecânica intensa e perda definitiva de graus de amplitude de movimento (artrofibrose)."
    ],
    "correctIndex": 3,
    "explanation": "Em biofísica osteomuscular, rigidez articular e retração capsular por estase de colagénio explica-se pelo facto de que a imobilização de uma articulação por mais de 3 semanas induz proliferação desorganizada de fibras de colagénio na cápsula e ligamentos (cross-linking aberrante). Isto reduz a complacência elástica da cápsula articular, gerando dor mecânica intensa e perda definitiva de graus de amplitude de movimento (artrofibrose).",
    "distractorAnalysis": [
      "Está incorreta: desconsidera a intensa atividade biológica, dinâmica e mecano-dependente do tecido osteomuscular.",
      "Está incorreta: invoca uma anulação impossível da gravidade física.",
      "Está incorreta: confunde a fisiologia da matriz com combustão química ou evaporação fictícia."
    ],
    "nursingApplication": "O enfermeiro executa mobilizações articulares passivas e ativas-assistidas em todas as articulações dos doentes com défice neurológico ou sedados em UCI."
  },
  {
    "id": 3163,
    "topicId": 3,
    "question": "Durante a prestação de cuidados de enfermagem a um doente com alterações musculoesqueléticas, como se traduz na prática clínica o conceito de 'rigidez articular e retração capsular por estase de colagénio'?",
    "options": [
      "Traduz-se no seguinte cuidado e evidência: O enfermeiro executa mobilizações articulares passivas e ativas-assistidas em todas as articulações dos doentes com défice neurológico ou sedados em UCI.",
      "Exige a imobilização absoluta e perpétua do doente no leito sem qualquer mobilização para impedir que os ossos recebam forças mecânicas.",
      "Implica a aplicação de compressas ferventes a 100 °C para acelerar a fundição dos cristais de hidroxiapatite.",
      "Requer a suspensão de toda a alimentação oral e hidratação para forçar o organismo a reabsorver os seus próprios músculos."
    ],
    "correctIndex": 0,
    "explanation": "A aplicação de enfermagem para rigidez articular e retração capsular por estase de colagénio baseia-se no princípio biomecânico: O enfermeiro executa mobilizações articulares passivas e ativas-assistidas em todas as articulações dos doentes com défice neurológico ou sedados em UCI. Este raciocínio assegura intervenções fundamentadas na física biológica.",
    "distractorAnalysis": [
      "Está incorreta: é prejudicial, pois a ausência total de carga acelera a atrofia por desuso e a osteopenia.",
      "Está incorreta: causaria queimaduras graves de 3.º grau nos tecidos corporais.",
      "Está incorreta: provocaria desidratação fatal e desnutrição grave."
    ],
    "nursingApplication": "O enfermeiro executa mobilizações articulares passivas e ativas-assistidas em todas as articulações dos doentes com défice neurológico ou sedados em UCI."
  },
  {
    "id": 3164,
    "topicId": 3,
    "question": "Um enfermeiro analisa o impacto biomecânico das solicitações mecânicas em 'rigidez articular e retração capsular por estase de colagénio'. Qual das seguintes afirmações apresenta a análise biofísica correta?",
    "options": [
      "A resistência mecânica nesta estrutura é estritamente infinita e insuscetível a qualquer tipo de fadiga, rotura ou deformação plástica.",
      "A correta caracterização física demonstra que Isto reduz a complacência elástica da cápsula articular, gerando dor mecânica intensa e perda definitiva de graus de amplitude de movimento (artrofibrose).",
      "As propriedades mecânicas dependem exclusivamente de campos eletrostáticos externos de alta frequência gerados por telemóveis.",
      "A estrutura perde a totalidade da sua rigidez quando o doente assume a posição de decúbito lateral direito."
    ],
    "correctIndex": 1,
    "explanation": "Sob o ponto de vista físico e mecanicista, Isto reduz a complacência elástica da cápsula articular, gerando dor mecânica intensa e perda definitiva de graus de amplitude de movimento (artrofibrose). Isto garante a integridade funcional do aparelho locomotor.",
    "distractorAnalysis": [
      "Está incorreta: desrespeita os limites de resistência dos materiais biológicos e a realidade clínica das fraturas e entorses.",
      "Está incorreta: inventa uma correlação inverosímil com radiações de telecomunicações.",
      "Está incorreta: confunde a rotação postural de decúbito com perda intrínseca da rigidez do material ósseo."
    ],
    "nursingApplication": "O enfermeiro executa mobilizações articulares passivas e ativas-assistidas em todas as articulações dos doentes com défice neurológico ou sedados em UCI."
  },
  {
    "id": 3165,
    "topicId": 3,
    "question": "Na biofísica do sistema osteomuscular, em relação a 'encurtamento muscular e contraturas em flexão (flexion contractures)', qual é a fundamentação científica correta?",
    "options": [
      "Trata-se de um processo estritamente passivo e inerte onde não ocorrem quaisquer trocas metabólicas nem variações de propriedades elásticas.",
      "Corresponde a uma anulação instantânea das forças da gravidade e eliminação das leis de Newton nos tecidos biológicos.",
      "músculos imobilizados em posição encurtada (como joelhos e quadris dobrados na cama) perdem sarcómeros em série ao longo dos miofilamentos. Ocorre substituição do tecido muscular por tecido conjuntivo fibroso inextensível, fixando a articulação numa atitude viciosa irreversível.",
      "Resulta de uma reação química de oxidação que decompõe a matriz colagénica em vapor e água à temperatura corporal de 37 °C."
    ],
    "correctIndex": 2,
    "explanation": "Em biofísica osteomuscular, encurtamento muscular e contraturas em flexão (flexion contractures) explica-se pelo facto de que músculos imobilizados em posição encurtada (como joelhos e quadris dobrados na cama) perdem sarcómeros em série ao longo dos miofilamentos. Ocorre substituição do tecido muscular por tecido conjuntivo fibroso inextensível, fixando a articulação numa atitude viciosa irreversível.",
    "distractorAnalysis": [
      "Está incorreta: desconsidera a intensa atividade biológica, dinâmica e mecano-dependente do tecido osteomuscular.",
      "Está incorreta: invoca uma anulação impossível da gravidade física.",
      "Está incorreta: confunde a fisiologia da matriz com combustão química ou evaporação fictícia."
    ],
    "nursingApplication": "O enfermeiro mantém os membros inferiores alinhados em extensão funcional com coxins de posicionamento adequados, evitando o uso prolongado de almofadas sob os joelhos."
  },
  {
    "id": 3166,
    "topicId": 3,
    "question": "Durante a prestação de cuidados de enfermagem a um doente com alterações musculoesqueléticas, como se traduz na prática clínica o conceito de 'encurtamento muscular e contraturas em flexão (flexion contractures)'?",
    "options": [
      "Exige a imobilização absoluta e perpétua do doente no leito sem qualquer mobilização para impedir que os ossos recebam forças mecânicas.",
      "Implica a aplicação de compressas ferventes a 100 °C para acelerar a fundição dos cristais de hidroxiapatite.",
      "Requer a suspensão de toda a alimentação oral e hidratação para forçar o organismo a reabsorver os seus próprios músculos.",
      "Traduz-se no seguinte cuidado e evidência: O enfermeiro mantém os membros inferiores alinhados em extensão funcional com coxins de posicionamento adequados, evitando o uso prolongado de almofadas sob os joelhos."
    ],
    "correctIndex": 3,
    "explanation": "A aplicação de enfermagem para encurtamento muscular e contraturas em flexão (flexion contractures) baseia-se no princípio biomecânico: O enfermeiro mantém os membros inferiores alinhados em extensão funcional com coxins de posicionamento adequados, evitando o uso prolongado de almofadas sob os joelhos. Este raciocínio assegura intervenções fundamentadas na física biológica.",
    "distractorAnalysis": [
      "Está incorreta: é prejudicial, pois a ausência total de carga acelera a atrofia por desuso e a osteopenia.",
      "Está incorreta: causaria queimaduras graves de 3.º grau nos tecidos corporais.",
      "Está incorreta: provocaria desidratação fatal e desnutrição grave."
    ],
    "nursingApplication": "O enfermeiro mantém os membros inferiores alinhados em extensão funcional com coxins de posicionamento adequados, evitando o uso prolongado de almofadas sob os joelhos."
  },
  {
    "id": 3167,
    "topicId": 3,
    "question": "Um enfermeiro analisa o impacto biomecânico das solicitações mecânicas em 'encurtamento muscular e contraturas em flexão (flexion contractures)'. Qual das seguintes afirmações apresenta a análise biofísica correta?",
    "options": [
      "A correta caracterização física demonstra que Ocorre substituição do tecido muscular por tecido conjuntivo fibroso inextensível, fixando a articulação numa atitude viciosa irreversível.",
      "A resistência mecânica nesta estrutura é estritamente infinita e insuscetível a qualquer tipo de fadiga, rotura ou deformação plástica.",
      "As propriedades mecânicas dependem exclusivamente de campos eletrostáticos externos de alta frequência gerados por telemóveis.",
      "A estrutura perde a totalidade da sua rigidez quando o doente assume a posição de decúbito lateral direito."
    ],
    "correctIndex": 0,
    "explanation": "Sob o ponto de vista físico e mecanicista, Ocorre substituição do tecido muscular por tecido conjuntivo fibroso inextensível, fixando a articulação numa atitude viciosa irreversível. Isto garante a integridade funcional do aparelho locomotor.",
    "distractorAnalysis": [
      "Está incorreta: desrespeita os limites de resistência dos materiais biológicos e a realidade clínica das fraturas e entorses.",
      "Está incorreta: inventa uma correlação inverosímil com radiações de telecomunicações.",
      "Está incorreta: confunde a rotação postural de decúbito com perda intrínseca da rigidez do material ósseo."
    ],
    "nursingApplication": "O enfermeiro mantém os membros inferiores alinhados em extensão funcional com coxins de posicionamento adequados, evitando o uso prolongado de almofadas sob os joelhos."
  },
  {
    "id": 3168,
    "topicId": 3,
    "question": "Na biofísica do sistema osteomuscular, em relação a 'bomba muscular gemelar e retorno venoso durante a marcha', qual é a fundamentação científica correta?",
    "options": [
      "Trata-se de um processo estritamente passivo e inerte onde não ocorrem quaisquer trocas metabólicas nem variações de propriedades elásticas.",
      "a contração mecânica dos gémeos espreme as veias profundas da perna contra a fáscia inelástica, impulsionando o sangue para o coração contra a gravidade. Na imobilização no leito, a paragem da bomba muscular origina estase venosa profunda, um dos pilares da tríade de Virchow para o tromboembolismo venoso (TEV).",
      "Corresponde a uma anulação instantânea das forças da gravidade e eliminação das leis de Newton nos tecidos biológicos.",
      "Resulta de uma reação química de oxidação que decompõe a matriz colagénica em vapor e água à temperatura corporal de 37 °C."
    ],
    "correctIndex": 1,
    "explanation": "Em biofísica osteomuscular, bomba muscular gemelar e retorno venoso durante a marcha explica-se pelo facto de que a contração mecânica dos gémeos espreme as veias profundas da perna contra a fáscia inelástica, impulsionando o sangue para o coração contra a gravidade. Na imobilização no leito, a paragem da bomba muscular origina estase venosa profunda, um dos pilares da tríade de Virchow para o tromboembolismo venoso (TEV).",
    "distractorAnalysis": [
      "Está incorreta: desconsidera a intensa atividade biológica, dinâmica e mecano-dependente do tecido osteomuscular.",
      "Está incorreta: invoca uma anulação impossível da gravidade física.",
      "Está incorreta: confunde a fisiologia da matriz com combustão química ou evaporação fictícia."
    ],
    "nursingApplication": "O enfermeiro aplica meias elásticas de compressão graduada, sistemas de compressão pneumática intermitente e administra rigorosamente a heparina de baixo peso molecular profilática."
  },
  {
    "id": 3169,
    "topicId": 3,
    "question": "Durante a prestação de cuidados de enfermagem a um doente com alterações musculoesqueléticas, como se traduz na prática clínica o conceito de 'bomba muscular gemelar e retorno venoso durante a marcha'?",
    "options": [
      "Exige a imobilização absoluta e perpétua do doente no leito sem qualquer mobilização para impedir que os ossos recebam forças mecânicas.",
      "Implica a aplicação de compressas ferventes a 100 °C para acelerar a fundição dos cristais de hidroxiapatite.",
      "Traduz-se no seguinte cuidado e evidência: O enfermeiro aplica meias elásticas de compressão graduada, sistemas de compressão pneumática intermitente e administra rigorosamente a heparina de baixo peso molecular profilática.",
      "Requer a suspensão de toda a alimentação oral e hidratação para forçar o organismo a reabsorver os seus próprios músculos."
    ],
    "correctIndex": 2,
    "explanation": "A aplicação de enfermagem para bomba muscular gemelar e retorno venoso durante a marcha baseia-se no princípio biomecânico: O enfermeiro aplica meias elásticas de compressão graduada, sistemas de compressão pneumática intermitente e administra rigorosamente a heparina de baixo peso molecular profilática. Este raciocínio assegura intervenções fundamentadas na física biológica.",
    "distractorAnalysis": [
      "Está incorreta: é prejudicial, pois a ausência total de carga acelera a atrofia por desuso e a osteopenia.",
      "Está incorreta: causaria queimaduras graves de 3.º grau nos tecidos corporais.",
      "Está incorreta: provocaria desidratação fatal e desnutrição grave."
    ],
    "nursingApplication": "O enfermeiro aplica meias elásticas de compressão graduada, sistemas de compressão pneumática intermitente e administra rigorosamente a heparina de baixo peso molecular profilática."
  },
  {
    "id": 3170,
    "topicId": 3,
    "question": "Um enfermeiro analisa o impacto biomecânico das solicitações mecânicas em 'bomba muscular gemelar e retorno venoso durante a marcha'. Qual das seguintes afirmações apresenta a análise biofísica correta?",
    "options": [
      "A resistência mecânica nesta estrutura é estritamente infinita e insuscetível a qualquer tipo de fadiga, rotura ou deformação plástica.",
      "As propriedades mecânicas dependem exclusivamente de campos eletrostáticos externos de alta frequência gerados por telemóveis.",
      "A estrutura perde a totalidade da sua rigidez quando o doente assume a posição de decúbito lateral direito.",
      "A correta caracterização física demonstra que Na imobilização no leito, a paragem da bomba muscular origina estase venosa profunda, um dos pilares da tríade de Virchow para o tromboembolismo venoso (TEV)."
    ],
    "correctIndex": 3,
    "explanation": "Sob o ponto de vista físico e mecanicista, Na imobilização no leito, a paragem da bomba muscular origina estase venosa profunda, um dos pilares da tríade de Virchow para o tromboembolismo venoso (TEV). Isto garante a integridade funcional do aparelho locomotor.",
    "distractorAnalysis": [
      "Está incorreta: desrespeita os limites de resistência dos materiais biológicos e a realidade clínica das fraturas e entorses.",
      "Está incorreta: inventa uma correlação inverosímil com radiações de telecomunicações.",
      "Está incorreta: confunde a rotação postural de decúbito com perda intrínseca da rigidez do material ósseo."
    ],
    "nursingApplication": "O enfermeiro aplica meias elásticas de compressão graduada, sistemas de compressão pneumática intermitente e administra rigorosamente a heparina de baixo peso molecular profilática."
  },
  {
    "id": 3171,
    "topicId": 3,
    "question": "Na biofísica do sistema osteomuscular, em relação a 'propriedade viscoelástica de fluência (creep) em ligamentos', qual é a fundamentação científica correta?",
    "options": [
      "quando um ligamento é sujeito a uma força de tração constante e mantida ao longo do tempo, o seu comprimento continua a aumentar progressivamente. Esta deformação contínua dependente do tempo reflete o rearranjo molecular lento das cadeias de colagénio e a expulsão de água intersticial.",
      "Trata-se de um processo estritamente passivo e inerte onde não ocorrem quaisquer trocas metabólicas nem variações de propriedades elásticas.",
      "Corresponde a uma anulação instantânea das forças da gravidade e eliminação das leis de Newton nos tecidos biológicos.",
      "Resulta de uma reação química de oxidação que decompõe a matriz colagénica em vapor e água à temperatura corporal de 37 °C."
    ],
    "correctIndex": 0,
    "explanation": "Em biofísica osteomuscular, propriedade viscoelástica de fluência (creep) em ligamentos explica-se pelo facto de que quando um ligamento é sujeito a uma força de tração constante e mantida ao longo do tempo, o seu comprimento continua a aumentar progressivamente. Esta deformação contínua dependente do tempo reflete o rearranjo molecular lento das cadeias de colagénio e a expulsão de água intersticial.",
    "distractorAnalysis": [
      "Está incorreta: desconsidera a intensa atividade biológica, dinâmica e mecano-dependente do tecido osteomuscular.",
      "Está incorreta: invoca uma anulação impossível da gravidade física.",
      "Está incorreta: confunde a fisiologia da matriz com combustão química ou evaporação fictícia."
    ],
    "nursingApplication": "O enfermeiro utiliza talas dinâmicas e posicionamentos mantidos graduais para vencer contraturas articulares fibrosadas aproveitando o fenómeno biofísico de fluência."
  },
  {
    "id": 3172,
    "topicId": 3,
    "question": "Durante a prestação de cuidados de enfermagem a um doente com alterações musculoesqueléticas, como se traduz na prática clínica o conceito de 'propriedade viscoelástica de fluência (creep) em ligamentos'?",
    "options": [
      "Exige a imobilização absoluta e perpétua do doente no leito sem qualquer mobilização para impedir que os ossos recebam forças mecânicas.",
      "Traduz-se no seguinte cuidado e evidência: O enfermeiro utiliza talas dinâmicas e posicionamentos mantidos graduais para vencer contraturas articulares fibrosadas aproveitando o fenómeno biofísico de fluência.",
      "Implica a aplicação de compressas ferventes a 100 °C para acelerar a fundição dos cristais de hidroxiapatite.",
      "Requer a suspensão de toda a alimentação oral e hidratação para forçar o organismo a reabsorver os seus próprios músculos."
    ],
    "correctIndex": 1,
    "explanation": "A aplicação de enfermagem para propriedade viscoelástica de fluência (creep) em ligamentos baseia-se no princípio biomecânico: O enfermeiro utiliza talas dinâmicas e posicionamentos mantidos graduais para vencer contraturas articulares fibrosadas aproveitando o fenómeno biofísico de fluência. Este raciocínio assegura intervenções fundamentadas na física biológica.",
    "distractorAnalysis": [
      "Está incorreta: é prejudicial, pois a ausência total de carga acelera a atrofia por desuso e a osteopenia.",
      "Está incorreta: causaria queimaduras graves de 3.º grau nos tecidos corporais.",
      "Está incorreta: provocaria desidratação fatal e desnutrição grave."
    ],
    "nursingApplication": "O enfermeiro utiliza talas dinâmicas e posicionamentos mantidos graduais para vencer contraturas articulares fibrosadas aproveitando o fenómeno biofísico de fluência."
  },
  {
    "id": 3173,
    "topicId": 3,
    "question": "Um enfermeiro analisa o impacto biomecânico das solicitações mecânicas em 'propriedade viscoelástica de fluência (creep) em ligamentos'. Qual das seguintes afirmações apresenta a análise biofísica correta?",
    "options": [
      "A resistência mecânica nesta estrutura é estritamente infinita e insuscetível a qualquer tipo de fadiga, rotura ou deformação plástica.",
      "As propriedades mecânicas dependem exclusivamente de campos eletrostáticos externos de alta frequência gerados por telemóveis.",
      "A correta caracterização física demonstra que Esta deformação contínua dependente do tempo reflete o rearranjo molecular lento das cadeias de colagénio e a expulsão de água intersticial.",
      "A estrutura perde a totalidade da sua rigidez quando o doente assume a posição de decúbito lateral direito."
    ],
    "correctIndex": 2,
    "explanation": "Sob o ponto de vista físico e mecanicista, Esta deformação contínua dependente do tempo reflete o rearranjo molecular lento das cadeias de colagénio e a expulsão de água intersticial. Isto garante a integridade funcional do aparelho locomotor.",
    "distractorAnalysis": [
      "Está incorreta: desrespeita os limites de resistência dos materiais biológicos e a realidade clínica das fraturas e entorses.",
      "Está incorreta: inventa uma correlação inverosímil com radiações de telecomunicações.",
      "Está incorreta: confunde a rotação postural de decúbito com perda intrínseca da rigidez do material ósseo."
    ],
    "nursingApplication": "O enfermeiro utiliza talas dinâmicas e posicionamentos mantidos graduais para vencer contraturas articulares fibrosadas aproveitando o fenómeno biofísico de fluência."
  },
  {
    "id": 3174,
    "topicId": 3,
    "question": "Na biofísica do sistema osteomuscular, em relação a 'propriedade de relaxamento de tensão (stress relaxation)', qual é a fundamentação científica correta?",
    "options": [
      "Trata-se de um processo estritamente passivo e inerte onde não ocorrem quaisquer trocas metabólicas nem variações de propriedades elásticas.",
      "Corresponde a uma anulação instantânea das forças da gravidade e eliminação das leis de Newton nos tecidos biológicos.",
      "Resulta de uma reação química de oxidação que decompõe a matriz colagénica em vapor e água à temperatura corporal de 37 °C.",
      "se um tendão ou ligamento for deformado até um comprimento fixo e aí mantido, a força elástica que ele exerce diminui progressivamente com o tempo. Ocorre redistribuição interna das tensões viscoelásticas na matriz de proteoglicanos sem alteração do comprimento externo imposto."
    ],
    "correctIndex": 3,
    "explanation": "Em biofísica osteomuscular, propriedade de relaxamento de tensão (stress relaxation) explica-se pelo facto de que se um tendão ou ligamento for deformado até um comprimento fixo e aí mantido, a força elástica que ele exerce diminui progressivamente com o tempo. Ocorre redistribuição interna das tensões viscoelásticas na matriz de proteoglicanos sem alteração do comprimento externo imposto.",
    "distractorAnalysis": [
      "Está incorreta: desconsidera a intensa atividade biológica, dinâmica e mecano-dependente do tecido osteomuscular.",
      "Está incorreta: invoca uma anulação impossível da gravidade física.",
      "Está incorreta: confunde a fisiologia da matriz com combustão química ou evaporação fictícia."
    ],
    "nursingApplication": "O enfermeiro reavalia a tensão de ligaduras elásticas compressivas após as primeiras horas, pois o relaxamento de tensão tecidual pode exigir reajuste da compressão externa."
  },
  {
    "id": 3175,
    "topicId": 3,
    "question": "Durante a prestação de cuidados de enfermagem a um doente com alterações musculoesqueléticas, como se traduz na prática clínica o conceito de 'propriedade de relaxamento de tensão (stress relaxation)'?",
    "options": [
      "Traduz-se no seguinte cuidado e evidência: O enfermeiro reavalia a tensão de ligaduras elásticas compressivas após as primeiras horas, pois o relaxamento de tensão tecidual pode exigir reajuste da compressão externa.",
      "Exige a imobilização absoluta e perpétua do doente no leito sem qualquer mobilização para impedir que os ossos recebam forças mecânicas.",
      "Implica a aplicação de compressas ferventes a 100 °C para acelerar a fundição dos cristais de hidroxiapatite.",
      "Requer a suspensão de toda a alimentação oral e hidratação para forçar o organismo a reabsorver os seus próprios músculos."
    ],
    "correctIndex": 0,
    "explanation": "A aplicação de enfermagem para propriedade de relaxamento de tensão (stress relaxation) baseia-se no princípio biomecânico: O enfermeiro reavalia a tensão de ligaduras elásticas compressivas após as primeiras horas, pois o relaxamento de tensão tecidual pode exigir reajuste da compressão externa. Este raciocínio assegura intervenções fundamentadas na física biológica.",
    "distractorAnalysis": [
      "Está incorreta: é prejudicial, pois a ausência total de carga acelera a atrofia por desuso e a osteopenia.",
      "Está incorreta: causaria queimaduras graves de 3.º grau nos tecidos corporais.",
      "Está incorreta: provocaria desidratação fatal e desnutrição grave."
    ],
    "nursingApplication": "O enfermeiro reavalia a tensão de ligaduras elásticas compressivas após as primeiras horas, pois o relaxamento de tensão tecidual pode exigir reajuste da compressão externa."
  },
  {
    "id": 3176,
    "topicId": 3,
    "question": "Um enfermeiro analisa o impacto biomecânico das solicitações mecânicas em 'propriedade de relaxamento de tensão (stress relaxation)'. Qual das seguintes afirmações apresenta a análise biofísica correta?",
    "options": [
      "A resistência mecânica nesta estrutura é estritamente infinita e insuscetível a qualquer tipo de fadiga, rotura ou deformação plástica.",
      "A correta caracterização física demonstra que Ocorre redistribuição interna das tensões viscoelásticas na matriz de proteoglicanos sem alteração do comprimento externo imposto.",
      "As propriedades mecânicas dependem exclusivamente de campos eletrostáticos externos de alta frequência gerados por telemóveis.",
      "A estrutura perde a totalidade da sua rigidez quando o doente assume a posição de decúbito lateral direito."
    ],
    "correctIndex": 1,
    "explanation": "Sob o ponto de vista físico e mecanicista, Ocorre redistribuição interna das tensões viscoelásticas na matriz de proteoglicanos sem alteração do comprimento externo imposto. Isto garante a integridade funcional do aparelho locomotor.",
    "distractorAnalysis": [
      "Está incorreta: desrespeita os limites de resistência dos materiais biológicos e a realidade clínica das fraturas e entorses.",
      "Está incorreta: inventa uma correlação inverosímil com radiações de telecomunicações.",
      "Está incorreta: confunde a rotação postural de decúbito com perda intrínseca da rigidez do material ósseo."
    ],
    "nursingApplication": "O enfermeiro reavalia a tensão de ligaduras elásticas compressivas após as primeiras horas, pois o relaxamento de tensão tecidual pode exigir reajuste da compressão externa."
  },
  {
    "id": 3177,
    "topicId": 3,
    "question": "Na biofísica do sistema osteomuscular, em relação a 'histérese mecânica e perda de energia elástica em ciclos repetidos', qual é a fundamentação científica correta?",
    "options": [
      "Trata-se de um processo estritamente passivo e inerte onde não ocorrem quaisquer trocas metabólicas nem variações de propriedades elásticas.",
      "Corresponde a uma anulação instantânea das forças da gravidade e eliminação das leis de Newton nos tecidos biológicos.",
      "a curva de deformação durante a carga de tração não coincide com a curva de descarga durante o relaxamento, formando um laço de histérese fechado. A área interna entre as duas curvas representa a energia mecânica dissipada sob a forma de calor térmico na matriz viscoelástica.",
      "Resulta de uma reação química de oxidação que decompõe a matriz colagénica em vapor e água à temperatura corporal de 37 °C."
    ],
    "correctIndex": 2,
    "explanation": "Em biofísica osteomuscular, histérese mecânica e perda de energia elástica em ciclos repetidos explica-se pelo facto de que a curva de deformação durante a carga de tração não coincide com a curva de descarga durante o relaxamento, formando um laço de histérese fechado. A área interna entre as duas curvas representa a energia mecânica dissipada sob a forma de calor térmico na matriz viscoelástica.",
    "distractorAnalysis": [
      "Está incorreta: desconsidera a intensa atividade biológica, dinâmica e mecano-dependente do tecido osteomuscular.",
      "Está incorreta: invoca uma anulação impossível da gravidade física.",
      "Está incorreta: confunde a fisiologia da matriz com combustão química ou evaporação fictícia."
    ],
    "nursingApplication": "O enfermeiro sabe que exercícios repetitivos intensos sem períodos de arrefecimento acumulam calor nos tendões (como o tendão de Aquiles), aumentando a suscetibilidade a microfissuras."
  },
  {
    "id": 3178,
    "topicId": 3,
    "question": "Durante a prestação de cuidados de enfermagem a um doente com alterações musculoesqueléticas, como se traduz na prática clínica o conceito de 'histérese mecânica e perda de energia elástica em ciclos repetidos'?",
    "options": [
      "Exige a imobilização absoluta e perpétua do doente no leito sem qualquer mobilização para impedir que os ossos recebam forças mecânicas.",
      "Implica a aplicação de compressas ferventes a 100 °C para acelerar a fundição dos cristais de hidroxiapatite.",
      "Requer a suspensão de toda a alimentação oral e hidratação para forçar o organismo a reabsorver os seus próprios músculos.",
      "Traduz-se no seguinte cuidado e evidência: O enfermeiro sabe que exercícios repetitivos intensos sem períodos de arrefecimento acumulam calor nos tendões (como o tendão de Aquiles), aumentando a suscetibilidade a microfissuras."
    ],
    "correctIndex": 3,
    "explanation": "A aplicação de enfermagem para histérese mecânica e perda de energia elástica em ciclos repetidos baseia-se no princípio biomecânico: O enfermeiro sabe que exercícios repetitivos intensos sem períodos de arrefecimento acumulam calor nos tendões (como o tendão de Aquiles), aumentando a suscetibilidade a microfissuras. Este raciocínio assegura intervenções fundamentadas na física biológica.",
    "distractorAnalysis": [
      "Está incorreta: é prejudicial, pois a ausência total de carga acelera a atrofia por desuso e a osteopenia.",
      "Está incorreta: causaria queimaduras graves de 3.º grau nos tecidos corporais.",
      "Está incorreta: provocaria desidratação fatal e desnutrição grave."
    ],
    "nursingApplication": "O enfermeiro sabe que exercícios repetitivos intensos sem períodos de arrefecimento acumulam calor nos tendões (como o tendão de Aquiles), aumentando a suscetibilidade a microfissuras."
  },
  {
    "id": 3179,
    "topicId": 3,
    "question": "Um enfermeiro analisa o impacto biomecânico das solicitações mecânicas em 'histérese mecânica e perda de energia elástica em ciclos repetidos'. Qual das seguintes afirmações apresenta a análise biofísica correta?",
    "options": [
      "A correta caracterização física demonstra que A área interna entre as duas curvas representa a energia mecânica dissipada sob a forma de calor térmico na matriz viscoelástica.",
      "A resistência mecânica nesta estrutura é estritamente infinita e insuscetível a qualquer tipo de fadiga, rotura ou deformação plástica.",
      "As propriedades mecânicas dependem exclusivamente de campos eletrostáticos externos de alta frequência gerados por telemóveis.",
      "A estrutura perde a totalidade da sua rigidez quando o doente assume a posição de decúbito lateral direito."
    ],
    "correctIndex": 0,
    "explanation": "Sob o ponto de vista físico e mecanicista, A área interna entre as duas curvas representa a energia mecânica dissipada sob a forma de calor térmico na matriz viscoelástica. Isto garante a integridade funcional do aparelho locomotor.",
    "distractorAnalysis": [
      "Está incorreta: desrespeita os limites de resistência dos materiais biológicos e a realidade clínica das fraturas e entorses.",
      "Está incorreta: inventa uma correlação inverosímil com radiações de telecomunicações.",
      "Está incorreta: confunde a rotação postural de decúbito com perda intrínseca da rigidez do material ósseo."
    ],
    "nursingApplication": "O enfermeiro sabe que exercícios repetitivos intensos sem períodos de arrefecimento acumulam calor nos tendões (como o tendão de Aquiles), aumentando a suscetibilidade a microfissuras."
  },
  {
    "id": 3180,
    "topicId": 3,
    "question": "Na biofísica do sistema osteomuscular, em relação a 'resistência máxima à tração do tendão calcâneo (tendão de Aquiles)', qual é a fundamentação científica correta?",
    "options": [
      "Trata-se de um processo estritamente passivo e inerte onde não ocorrem quaisquer trocas metabólicas nem variações de propriedades elásticas.",
      "o maior tendão do corpo humano suporta forças de tração superiores a 4000 a 8000 N durante saltos e corrida de alta intensidade. A sua inserção no calcâneo beneficia de uma transição gradual de tendão para fibrocartilagem mineralizada e depois osso (entese), dissipando o pico de tensão concentrada.",
      "Corresponde a uma anulação instantânea das forças da gravidade e eliminação das leis de Newton nos tecidos biológicos.",
      "Resulta de uma reação química de oxidação que decompõe a matriz colagénica em vapor e água à temperatura corporal de 37 °C."
    ],
    "correctIndex": 1,
    "explanation": "Em biofísica osteomuscular, resistência máxima à tração do tendão calcâneo (tendão de Aquiles) explica-se pelo facto de que o maior tendão do corpo humano suporta forças de tração superiores a 4000 a 8000 N durante saltos e corrida de alta intensidade. A sua inserção no calcâneo beneficia de uma transição gradual de tendão para fibrocartilagem mineralizada e depois osso (entese), dissipando o pico de tensão concentrada.",
    "distractorAnalysis": [
      "Está incorreta: desconsidera a intensa atividade biológica, dinâmica e mecano-dependente do tecido osteomuscular.",
      "Está incorreta: invoca uma anulação impossível da gravidade física.",
      "Está incorreta: confunde a fisiologia da matriz com combustão química ou evaporação fictícia."
    ],
    "nursingApplication": "O enfermeiro reconhece o estalido audível súbito ('como uma pedrada no calcanhar') como sinal clássico de rotura do tendão de Aquiles com o teste de Thompson positivo."
  },
  {
    "id": 3181,
    "topicId": 3,
    "question": "Durante a prestação de cuidados de enfermagem a um doente com alterações musculoesqueléticas, como se traduz na prática clínica o conceito de 'resistência máxima à tração do tendão calcâneo (tendão de Aquiles)'?",
    "options": [
      "Exige a imobilização absoluta e perpétua do doente no leito sem qualquer mobilização para impedir que os ossos recebam forças mecânicas.",
      "Implica a aplicação de compressas ferventes a 100 °C para acelerar a fundição dos cristais de hidroxiapatite.",
      "Traduz-se no seguinte cuidado e evidência: O enfermeiro reconhece o estalido audível súbito ('como uma pedrada no calcanhar') como sinal clássico de rotura do tendão de Aquiles com o teste de Thompson positivo.",
      "Requer a suspensão de toda a alimentação oral e hidratação para forçar o organismo a reabsorver os seus próprios músculos."
    ],
    "correctIndex": 2,
    "explanation": "A aplicação de enfermagem para resistência máxima à tração do tendão calcâneo (tendão de Aquiles) baseia-se no princípio biomecânico: O enfermeiro reconhece o estalido audível súbito ('como uma pedrada no calcanhar') como sinal clássico de rotura do tendão de Aquiles com o teste de Thompson positivo. Este raciocínio assegura intervenções fundamentadas na física biológica.",
    "distractorAnalysis": [
      "Está incorreta: é prejudicial, pois a ausência total de carga acelera a atrofia por desuso e a osteopenia.",
      "Está incorreta: causaria queimaduras graves de 3.º grau nos tecidos corporais.",
      "Está incorreta: provocaria desidratação fatal e desnutrição grave."
    ],
    "nursingApplication": "O enfermeiro reconhece o estalido audível súbito ('como uma pedrada no calcanhar') como sinal clássico de rotura do tendão de Aquiles com o teste de Thompson positivo."
  },
  {
    "id": 3182,
    "topicId": 3,
    "question": "Um enfermeiro analisa o impacto biomecânico das solicitações mecânicas em 'resistência máxima à tração do tendão calcâneo (tendão de Aquiles)'. Qual das seguintes afirmações apresenta a análise biofísica correta?",
    "options": [
      "A resistência mecânica nesta estrutura é estritamente infinita e insuscetível a qualquer tipo de fadiga, rotura ou deformação plástica.",
      "As propriedades mecânicas dependem exclusivamente de campos eletrostáticos externos de alta frequência gerados por telemóveis.",
      "A estrutura perde a totalidade da sua rigidez quando o doente assume a posição de decúbito lateral direito.",
      "A correta caracterização física demonstra que A sua inserção no calcâneo beneficia de uma transição gradual de tendão para fibrocartilagem mineralizada e depois osso (entese), dissipando o pico de tensão concentrada."
    ],
    "correctIndex": 3,
    "explanation": "Sob o ponto de vista físico e mecanicista, A sua inserção no calcâneo beneficia de uma transição gradual de tendão para fibrocartilagem mineralizada e depois osso (entese), dissipando o pico de tensão concentrada. Isto garante a integridade funcional do aparelho locomotor.",
    "distractorAnalysis": [
      "Está incorreta: desrespeita os limites de resistência dos materiais biológicos e a realidade clínica das fraturas e entorses.",
      "Está incorreta: inventa uma correlação inverosímil com radiações de telecomunicações.",
      "Está incorreta: confunde a rotação postural de decúbito com perda intrínseca da rigidez do material ósseo."
    ],
    "nursingApplication": "O enfermeiro reconhece o estalido audível súbito ('como uma pedrada no calcanhar') como sinal clássico de rotura do tendão de Aquiles com o teste de Thompson positivo."
  },
  {
    "id": 3183,
    "topicId": 3,
    "question": "Na biofísica do sistema osteomuscular, em relação a 'graus de entorse ligamentar: grau I (ligeiro), grau II (parcial) e grau III (total)', qual é a fundamentação científica correta?",
    "options": [
      "no grau I há microrroturas dentro da fase elástica sem instabilidade; no grau II há rotura parcial com relaxamento tecidual; no grau III há rotura completa com perda de estabilidade mecânica. A gravidade correlaciona-se diretamente com a energia mecânica absorvida e o deslocamento angular anormal forçado da articulação.",
      "Trata-se de um processo estritamente passivo e inerte onde não ocorrem quaisquer trocas metabólicas nem variações de propriedades elásticas.",
      "Corresponde a uma anulação instantânea das forças da gravidade e eliminação das leis de Newton nos tecidos biológicos.",
      "Resulta de uma reação química de oxidação que decompõe a matriz colagénica em vapor e água à temperatura corporal de 37 °C."
    ],
    "correctIndex": 0,
    "explanation": "Em biofísica osteomuscular, graus de entorse ligamentar: grau I (ligeiro), grau II (parcial) e grau III (total) explica-se pelo facto de que no grau I há microrroturas dentro da fase elástica sem instabilidade; no grau II há rotura parcial com relaxamento tecidual; no grau III há rotura completa com perda de estabilidade mecânica. A gravidade correlaciona-se diretamente com a energia mecânica absorvida e o deslocamento angular anormal forçado da articulação.",
    "distractorAnalysis": [
      "Está incorreta: desconsidera a intensa atividade biológica, dinâmica e mecano-dependente do tecido osteomuscular.",
      "Está incorreta: invoca uma anulação impossível da gravidade física.",
      "Está incorreta: confunde a fisiologia da matriz com combustão química ou evaporação fictícia."
    ],
    "nursingApplication": "O enfermeiro aplica o protocolo PRICE/POLICE na fase aguda (Proteção, Carga Ótima, Gelo/Crioterapia, Compressão e Elevação) para controlar a dor e o edema inflamatório."
  },
  {
    "id": 3184,
    "topicId": 3,
    "question": "Durante a prestação de cuidados de enfermagem a um doente com alterações musculoesqueléticas, como se traduz na prática clínica o conceito de 'graus de entorse ligamentar: grau I (ligeiro), grau II (parcial) e grau III (total)'?",
    "options": [
      "Exige a imobilização absoluta e perpétua do doente no leito sem qualquer mobilização para impedir que os ossos recebam forças mecânicas.",
      "Traduz-se no seguinte cuidado e evidência: O enfermeiro aplica o protocolo PRICE/POLICE na fase aguda (Proteção, Carga Ótima, Gelo/Crioterapia, Compressão e Elevação) para controlar a dor e o edema inflamatório.",
      "Implica a aplicação de compressas ferventes a 100 °C para acelerar a fundição dos cristais de hidroxiapatite.",
      "Requer a suspensão de toda a alimentação oral e hidratação para forçar o organismo a reabsorver os seus próprios músculos."
    ],
    "correctIndex": 1,
    "explanation": "A aplicação de enfermagem para graus de entorse ligamentar: grau I (ligeiro), grau II (parcial) e grau III (total) baseia-se no princípio biomecânico: O enfermeiro aplica o protocolo PRICE/POLICE na fase aguda (Proteção, Carga Ótima, Gelo/Crioterapia, Compressão e Elevação) para controlar a dor e o edema inflamatório. Este raciocínio assegura intervenções fundamentadas na física biológica.",
    "distractorAnalysis": [
      "Está incorreta: é prejudicial, pois a ausência total de carga acelera a atrofia por desuso e a osteopenia.",
      "Está incorreta: causaria queimaduras graves de 3.º grau nos tecidos corporais.",
      "Está incorreta: provocaria desidratação fatal e desnutrição grave."
    ],
    "nursingApplication": "O enfermeiro aplica o protocolo PRICE/POLICE na fase aguda (Proteção, Carga Ótima, Gelo/Crioterapia, Compressão e Elevação) para controlar a dor e o edema inflamatório."
  },
  {
    "id": 3185,
    "topicId": 3,
    "question": "Um enfermeiro analisa o impacto biomecânico das solicitações mecânicas em 'graus de entorse ligamentar: grau I (ligeiro), grau II (parcial) e grau III (total)'. Qual das seguintes afirmações apresenta a análise biofísica correta?",
    "options": [
      "A resistência mecânica nesta estrutura é estritamente infinita e insuscetível a qualquer tipo de fadiga, rotura ou deformação plástica.",
      "As propriedades mecânicas dependem exclusivamente de campos eletrostáticos externos de alta frequência gerados por telemóveis.",
      "A correta caracterização física demonstra que A gravidade correlaciona-se diretamente com a energia mecânica absorvida e o deslocamento angular anormal forçado da articulação.",
      "A estrutura perde a totalidade da sua rigidez quando o doente assume a posição de decúbito lateral direito."
    ],
    "correctIndex": 2,
    "explanation": "Sob o ponto de vista físico e mecanicista, A gravidade correlaciona-se diretamente com a energia mecânica absorvida e o deslocamento angular anormal forçado da articulação. Isto garante a integridade funcional do aparelho locomotor.",
    "distractorAnalysis": [
      "Está incorreta: desrespeita os limites de resistência dos materiais biológicos e a realidade clínica das fraturas e entorses.",
      "Está incorreta: inventa uma correlação inverosímil com radiações de telecomunicações.",
      "Está incorreta: confunde a rotação postural de decúbito com perda intrínseca da rigidez do material ósseo."
    ],
    "nursingApplication": "O enfermeiro aplica o protocolo PRICE/POLICE na fase aguda (Proteção, Carga Ótima, Gelo/Crioterapia, Compressão e Elevação) para controlar a dor e o edema inflamatório."
  },
  {
    "id": 3186,
    "topicId": 3,
    "question": "Na biofísica do sistema osteomuscular, em relação a 'hidrólise de ATP pela miosina ATPase', qual é a fundamentação científica correta?",
    "options": [
      "Trata-se de um processo estritamente passivo e inerte onde não ocorrem quaisquer trocas metabólicas nem variações de propriedades elásticas.",
      "Corresponde a uma anulação instantânea das forças da gravidade e eliminação das leis de Newton nos tecidos biológicos.",
      "Resulta de uma reação química de oxidação que decompõe a matriz colagénica em vapor e água à temperatura corporal de 37 °C.",
      "a cisão de ATP em ADP e fosfato inorgânico (Pi) energiza e armada a cabeça de miosina numa conformação de alta energia pronta para o golpe de força. A taxa de atividade da miosina ATPase dita a velocidade máxima de encurtamento da fibra muscular (rápida em fibras tipo II e lenta em fibras tipo I)."
    ],
    "correctIndex": 3,
    "explanation": "Em biofísica osteomuscular, hidrólise de ATP pela miosina ATPase explica-se pelo facto de que a cisão de ATP em ADP e fosfato inorgânico (Pi) energiza e armada a cabeça de miosina numa conformação de alta energia pronta para o golpe de força. A taxa de atividade da miosina ATPase dita a velocidade máxima de encurtamento da fibra muscular (rápida em fibras tipo II e lenta em fibras tipo I).",
    "distractorAnalysis": [
      "Está incorreta: desconsidera a intensa atividade biológica, dinâmica e mecano-dependente do tecido osteomuscular.",
      "Está incorreta: invoca uma anulação impossível da gravidade física.",
      "Está incorreta: confunde a fisiologia da matriz com combustão química ou evaporação fictícia."
    ],
    "nursingApplication": "O enfermeiro reconhece a importância do aporte adequado de oxigénio e glicose em doentes respiratórios ou sépticos para manter a síntese mitocondrial de ATP e prevenir fadiga dos músculos ventilatórios."
  },
  {
    "id": 3187,
    "topicId": 3,
    "question": "Durante a prestação de cuidados de enfermagem a um doente com alterações musculoesqueléticas, como se traduz na prática clínica o conceito de 'hidrólise de ATP pela miosina ATPase'?",
    "options": [
      "Traduz-se no seguinte cuidado e evidência: O enfermeiro reconhece a importância do aporte adequado de oxigénio e glicose em doentes respiratórios ou sépticos para manter a síntese mitocondrial de ATP e prevenir fadiga dos músculos ventilatórios.",
      "Exige a imobilização absoluta e perpétua do doente no leito sem qualquer mobilização para impedir que os ossos recebam forças mecânicas.",
      "Implica a aplicação de compressas ferventes a 100 °C para acelerar a fundição dos cristais de hidroxiapatite.",
      "Requer a suspensão de toda a alimentação oral e hidratação para forçar o organismo a reabsorver os seus próprios músculos."
    ],
    "correctIndex": 0,
    "explanation": "A aplicação de enfermagem para hidrólise de ATP pela miosina ATPase baseia-se no princípio biomecânico: O enfermeiro reconhece a importância do aporte adequado de oxigénio e glicose em doentes respiratórios ou sépticos para manter a síntese mitocondrial de ATP e prevenir fadiga dos músculos ventilatórios. Este raciocínio assegura intervenções fundamentadas na física biológica.",
    "distractorAnalysis": [
      "Está incorreta: é prejudicial, pois a ausência total de carga acelera a atrofia por desuso e a osteopenia.",
      "Está incorreta: causaria queimaduras graves de 3.º grau nos tecidos corporais.",
      "Está incorreta: provocaria desidratação fatal e desnutrição grave."
    ],
    "nursingApplication": "O enfermeiro reconhece a importância do aporte adequado de oxigénio e glicose em doentes respiratórios ou sépticos para manter a síntese mitocondrial de ATP e prevenir fadiga dos músculos ventilatórios."
  },
  {
    "id": 3188,
    "topicId": 3,
    "question": "Um enfermeiro analisa o impacto biomecânico das solicitações mecânicas em 'hidrólise de ATP pela miosina ATPase'. Qual das seguintes afirmações apresenta a análise biofísica correta?",
    "options": [
      "A resistência mecânica nesta estrutura é estritamente infinita e insuscetível a qualquer tipo de fadiga, rotura ou deformação plástica.",
      "A correta caracterização física demonstra que A taxa de atividade da miosina ATPase dita a velocidade máxima de encurtamento da fibra muscular (rápida em fibras tipo II e lenta em fibras tipo I).",
      "As propriedades mecânicas dependem exclusivamente de campos eletrostáticos externos de alta frequência gerados por telemóveis.",
      "A estrutura perde a totalidade da sua rigidez quando o doente assume a posição de decúbito lateral direito."
    ],
    "correctIndex": 1,
    "explanation": "Sob o ponto de vista físico e mecanicista, A taxa de atividade da miosina ATPase dita a velocidade máxima de encurtamento da fibra muscular (rápida em fibras tipo II e lenta em fibras tipo I). Isto garante a integridade funcional do aparelho locomotor.",
    "distractorAnalysis": [
      "Está incorreta: desrespeita os limites de resistência dos materiais biológicos e a realidade clínica das fraturas e entorses.",
      "Está incorreta: inventa uma correlação inverosímil com radiações de telecomunicações.",
      "Está incorreta: confunde a rotação postural de decúbito com perda intrínseca da rigidez do material ósseo."
    ],
    "nursingApplication": "O enfermeiro reconhece a importância do aporte adequado de oxigénio e glicose em doentes respiratórios ou sépticos para manter a síntese mitocondrial de ATP e prevenir fadiga dos músculos ventilatórios."
  },
  {
    "id": 3189,
    "topicId": 3,
    "question": "Na biofísica do sistema osteomuscular, em relação a 'contração isométrica vs contração isotónica concêntrica e excêntrica', qual é a fundamentação científica correta?",
    "options": [
      "Trata-se de um processo estritamente passivo e inerte onde não ocorrem quaisquer trocas metabólicas nem variações de propriedades elásticas.",
      "Corresponde a uma anulação instantânea das forças da gravidade e eliminação das leis de Newton nos tecidos biológicos.",
      "na isométrica o músculo gera tensão sem alterar o comprimento macroscópico; na concêntrica encurta gerando movimento; na excêntrica alonga ativamente sob carga travando o movimento. A contração excêntrica gera as maiores tensões mecânicas por unidade de área com menor custo de ATP, mas causa maiores microrroturas nas linhas Z dos sarcómeros.",
      "Resulta de uma reação química de oxidação que decompõe a matriz colagénica em vapor e água à temperatura corporal de 37 °C."
    ],
    "correctIndex": 2,
    "explanation": "Em biofísica osteomuscular, contração isométrica vs contração isotónica concêntrica e excêntrica explica-se pelo facto de que na isométrica o músculo gera tensão sem alterar o comprimento macroscópico; na concêntrica encurta gerando movimento; na excêntrica alonga ativamente sob carga travando o movimento. A contração excêntrica gera as maiores tensões mecânicas por unidade de área com menor custo de ATP, mas causa maiores microrroturas nas linhas Z dos sarcómeros.",
    "distractorAnalysis": [
      "Está incorreta: desconsidera a intensa atividade biológica, dinâmica e mecano-dependente do tecido osteomuscular.",
      "Está incorreta: invoca uma anulação impossível da gravidade física.",
      "Está incorreta: confunde a fisiologia da matriz com combustão química ou evaporação fictícia."
    ],
    "nursingApplication": "O enfermeiro ensina utentes a descer degraus com apoio firme, pois a descida exige trabalho muscular excêntrico do quadríceps com elevado esforço mecânico."
  },
  {
    "id": 3190,
    "topicId": 3,
    "question": "Durante a prestação de cuidados de enfermagem a um doente com alterações musculoesqueléticas, como se traduz na prática clínica o conceito de 'contração isométrica vs contração isotónica concêntrica e excêntrica'?",
    "options": [
      "Exige a imobilização absoluta e perpétua do doente no leito sem qualquer mobilização para impedir que os ossos recebam forças mecânicas.",
      "Implica a aplicação de compressas ferventes a 100 °C para acelerar a fundição dos cristais de hidroxiapatite.",
      "Requer a suspensão de toda a alimentação oral e hidratação para forçar o organismo a reabsorver os seus próprios músculos.",
      "Traduz-se no seguinte cuidado e evidência: O enfermeiro ensina utentes a descer degraus com apoio firme, pois a descida exige trabalho muscular excêntrico do quadríceps com elevado esforço mecânico."
    ],
    "correctIndex": 3,
    "explanation": "A aplicação de enfermagem para contração isométrica vs contração isotónica concêntrica e excêntrica baseia-se no princípio biomecânico: O enfermeiro ensina utentes a descer degraus com apoio firme, pois a descida exige trabalho muscular excêntrico do quadríceps com elevado esforço mecânico. Este raciocínio assegura intervenções fundamentadas na física biológica.",
    "distractorAnalysis": [
      "Está incorreta: é prejudicial, pois a ausência total de carga acelera a atrofia por desuso e a osteopenia.",
      "Está incorreta: causaria queimaduras graves de 3.º grau nos tecidos corporais.",
      "Está incorreta: provocaria desidratação fatal e desnutrição grave."
    ],
    "nursingApplication": "O enfermeiro ensina utentes a descer degraus com apoio firme, pois a descida exige trabalho muscular excêntrico do quadríceps com elevado esforço mecânico."
  },
  {
    "id": 3191,
    "topicId": 3,
    "question": "Um enfermeiro analisa o impacto biomecânico das solicitações mecânicas em 'contração isométrica vs contração isotónica concêntrica e excêntrica'. Qual das seguintes afirmações apresenta a análise biofísica correta?",
    "options": [
      "A correta caracterização física demonstra que A contração excêntrica gera as maiores tensões mecânicas por unidade de área com menor custo de ATP, mas causa maiores microrroturas nas linhas Z dos sarcómeros.",
      "A resistência mecânica nesta estrutura é estritamente infinita e insuscetível a qualquer tipo de fadiga, rotura ou deformação plástica.",
      "As propriedades mecânicas dependem exclusivamente de campos eletrostáticos externos de alta frequência gerados por telemóveis.",
      "A estrutura perde a totalidade da sua rigidez quando o doente assume a posição de decúbito lateral direito."
    ],
    "correctIndex": 0,
    "explanation": "Sob o ponto de vista físico e mecanicista, A contração excêntrica gera as maiores tensões mecânicas por unidade de área com menor custo de ATP, mas causa maiores microrroturas nas linhas Z dos sarcómeros. Isto garante a integridade funcional do aparelho locomotor.",
    "distractorAnalysis": [
      "Está incorreta: desrespeita os limites de resistência dos materiais biológicos e a realidade clínica das fraturas e entorses.",
      "Está incorreta: inventa uma correlação inverosímil com radiações de telecomunicações.",
      "Está incorreta: confunde a rotação postural de decúbito com perda intrínseca da rigidez do material ósseo."
    ],
    "nursingApplication": "O enfermeiro ensina utentes a descer degraus com apoio firme, pois a descida exige trabalho muscular excêntrico do quadríceps com elevado esforço mecânico."
  },
  {
    "id": 3192,
    "topicId": 3,
    "question": "Na biofísica do sistema osteomuscular, em relação a 'mecanismo biofísico do tremor muscular (shivering thermogenesis)', qual é a fundamentação científica correta?",
    "options": [
      "Trata-se de um processo estritamente passivo e inerte onde não ocorrem quaisquer trocas metabólicas nem variações de propriedades elásticas.",
      "contrações musculares assíncronas e rápidas sem produção de trabalho mecânico externo útil (eficiência mecânica zero), onde 100% da energia do ATP é convertida em calor. O centro termorregulador hipotalâmico ativa os motoneurónios gama e alfa para elevar a taxa metabólica basal em até 4 a 5 vezes em ambiente frio.",
      "Corresponde a uma anulação instantânea das forças da gravidade e eliminação das leis de Newton nos tecidos biológicos.",
      "Resulta de uma reação química de oxidação que decompõe a matriz colagénica em vapor e água à temperatura corporal de 37 °C."
    ],
    "correctIndex": 1,
    "explanation": "Em biofísica osteomuscular, mecanismo biofísico do tremor muscular (shivering thermogenesis) explica-se pelo facto de que contrações musculares assíncronas e rápidas sem produção de trabalho mecânico externo útil (eficiência mecânica zero), onde 100% da energia do ATP é convertida em calor. O centro termorregulador hipotalâmico ativa os motoneurónios gama e alfa para elevar a taxa metabólica basal em até 4 a 5 vezes em ambiente frio.",
    "distractorAnalysis": [
      "Está incorreta: desconsidera a intensa atividade biológica, dinâmica e mecano-dependente do tecido osteomuscular.",
      "Está incorreta: invoca uma anulação impossível da gravidade física.",
      "Está incorreta: confunde a fisiologia da matriz com combustão química ou evaporação fictícia."
    ],
    "nursingApplication": "O enfermeiro aquece o doente pós-cirúrgico com manta térmica de ar forçado aquecido, reduzindo os tremores que aumentam perigosamente o consumo miocárdico de oxigénio em 300%."
  },
  {
    "id": 3193,
    "topicId": 3,
    "question": "Durante a prestação de cuidados de enfermagem a um doente com alterações musculoesqueléticas, como se traduz na prática clínica o conceito de 'mecanismo biofísico do tremor muscular (shivering thermogenesis)'?",
    "options": [
      "Exige a imobilização absoluta e perpétua do doente no leito sem qualquer mobilização para impedir que os ossos recebam forças mecânicas.",
      "Implica a aplicação de compressas ferventes a 100 °C para acelerar a fundição dos cristais de hidroxiapatite.",
      "Traduz-se no seguinte cuidado e evidência: O enfermeiro aquece o doente pós-cirúrgico com manta térmica de ar forçado aquecido, reduzindo os tremores que aumentam perigosamente o consumo miocárdico de oxigénio em 300%.",
      "Requer a suspensão de toda a alimentação oral e hidratação para forçar o organismo a reabsorver os seus próprios músculos."
    ],
    "correctIndex": 2,
    "explanation": "A aplicação de enfermagem para mecanismo biofísico do tremor muscular (shivering thermogenesis) baseia-se no princípio biomecânico: O enfermeiro aquece o doente pós-cirúrgico com manta térmica de ar forçado aquecido, reduzindo os tremores que aumentam perigosamente o consumo miocárdico de oxigénio em 300%. Este raciocínio assegura intervenções fundamentadas na física biológica.",
    "distractorAnalysis": [
      "Está incorreta: é prejudicial, pois a ausência total de carga acelera a atrofia por desuso e a osteopenia.",
      "Está incorreta: causaria queimaduras graves de 3.º grau nos tecidos corporais.",
      "Está incorreta: provocaria desidratação fatal e desnutrição grave."
    ],
    "nursingApplication": "O enfermeiro aquece o doente pós-cirúrgico com manta térmica de ar forçado aquecido, reduzindo os tremores que aumentam perigosamente o consumo miocárdico de oxigénio em 300%."
  },
  {
    "id": 3194,
    "topicId": 3,
    "question": "Um enfermeiro analisa o impacto biomecânico das solicitações mecânicas em 'mecanismo biofísico do tremor muscular (shivering thermogenesis)'. Qual das seguintes afirmações apresenta a análise biofísica correta?",
    "options": [
      "A resistência mecânica nesta estrutura é estritamente infinita e insuscetível a qualquer tipo de fadiga, rotura ou deformação plástica.",
      "As propriedades mecânicas dependem exclusivamente de campos eletrostáticos externos de alta frequência gerados por telemóveis.",
      "A estrutura perde a totalidade da sua rigidez quando o doente assume a posição de decúbito lateral direito.",
      "A correta caracterização física demonstra que O centro termorregulador hipotalâmico ativa os motoneurónios gama e alfa para elevar a taxa metabólica basal em até 4 a 5 vezes em ambiente frio."
    ],
    "correctIndex": 3,
    "explanation": "Sob o ponto de vista físico e mecanicista, O centro termorregulador hipotalâmico ativa os motoneurónios gama e alfa para elevar a taxa metabólica basal em até 4 a 5 vezes em ambiente frio. Isto garante a integridade funcional do aparelho locomotor.",
    "distractorAnalysis": [
      "Está incorreta: desrespeita os limites de resistência dos materiais biológicos e a realidade clínica das fraturas e entorses.",
      "Está incorreta: inventa uma correlação inverosímil com radiações de telecomunicações.",
      "Está incorreta: confunde a rotação postural de decúbito com perda intrínseca da rigidez do material ósseo."
    ],
    "nursingApplication": "O enfermeiro aquece o doente pós-cirúrgico com manta térmica de ar forçado aquecido, reduzindo os tremores que aumentam perigosamente o consumo miocárdico de oxigénio em 300%."
  },
  {
    "id": 3195,
    "topicId": 3,
    "question": "Na biofísica do sistema osteomuscular, em relação a 'recrutamento de unidades motoras e princípio de Henneman (size principle)', qual é a fundamentação científica correta?",
    "options": [
      "o sistema nervoso central recruta primeiro as unidades motoras pequenas com fibras tipo I resistentes à fadiga, e só depois as unidades grandes tipo II para esforços máximos. Esta gradação mecânica assegura movimentos suaves e económicos para tarefas diárias de sustentação e precisão.",
      "Trata-se de um processo estritamente passivo e inerte onde não ocorrem quaisquer trocas metabólicas nem variações de propriedades elásticas.",
      "Corresponde a uma anulação instantânea das forças da gravidade e eliminação das leis de Newton nos tecidos biológicos.",
      "Resulta de uma reação química de oxidação que decompõe a matriz colagénica em vapor e água à temperatura corporal de 37 °C."
    ],
    "correctIndex": 0,
    "explanation": "Em biofísica osteomuscular, recrutamento de unidades motoras e princípio de Henneman (size principle) explica-se pelo facto de que o sistema nervoso central recruta primeiro as unidades motoras pequenas com fibras tipo I resistentes à fadiga, e só depois as unidades grandes tipo II para esforços máximos. Esta gradação mecânica assegura movimentos suaves e económicos para tarefas diárias de sustentação e precisão.",
    "distractorAnalysis": [
      "Está incorreta: desconsidera a intensa atividade biológica, dinâmica e mecano-dependente do tecido osteomuscular.",
      "Está incorreta: invoca uma anulação impossível da gravidade física.",
      "Está incorreta: confunde a fisiologia da matriz com combustão química ou evaporação fictícia."
    ],
    "nursingApplication": "O enfermeiro na reabilitação pós-AVC estimula movimentos lentos e controlados que reativam o padrão fisiológico de recrutamento de unidades motoras pequenas."
  },
  {
    "id": 3196,
    "topicId": 3,
    "question": "Durante a prestação de cuidados de enfermagem a um doente com alterações musculoesqueléticas, como se traduz na prática clínica o conceito de 'recrutamento de unidades motoras e princípio de Henneman (size principle)'?",
    "options": [
      "Exige a imobilização absoluta e perpétua do doente no leito sem qualquer mobilização para impedir que os ossos recebam forças mecânicas.",
      "Traduz-se no seguinte cuidado e evidência: O enfermeiro na reabilitação pós-AVC estimula movimentos lentos e controlados que reativam o padrão fisiológico de recrutamento de unidades motoras pequenas.",
      "Implica a aplicação de compressas ferventes a 100 °C para acelerar a fundição dos cristais de hidroxiapatite.",
      "Requer a suspensão de toda a alimentação oral e hidratação para forçar o organismo a reabsorver os seus próprios músculos."
    ],
    "correctIndex": 1,
    "explanation": "A aplicação de enfermagem para recrutamento de unidades motoras e princípio de Henneman (size principle) baseia-se no princípio biomecânico: O enfermeiro na reabilitação pós-AVC estimula movimentos lentos e controlados que reativam o padrão fisiológico de recrutamento de unidades motoras pequenas. Este raciocínio assegura intervenções fundamentadas na física biológica.",
    "distractorAnalysis": [
      "Está incorreta: é prejudicial, pois a ausência total de carga acelera a atrofia por desuso e a osteopenia.",
      "Está incorreta: causaria queimaduras graves de 3.º grau nos tecidos corporais.",
      "Está incorreta: provocaria desidratação fatal e desnutrição grave."
    ],
    "nursingApplication": "O enfermeiro na reabilitação pós-AVC estimula movimentos lentos e controlados que reativam o padrão fisiológico de recrutamento de unidades motoras pequenas."
  },
  {
    "id": 3197,
    "topicId": 3,
    "question": "Um enfermeiro analisa o impacto biomecânico das solicitações mecânicas em 'recrutamento de unidades motoras e princípio de Henneman (size principle)'. Qual das seguintes afirmações apresenta a análise biofísica correta?",
    "options": [
      "A resistência mecânica nesta estrutura é estritamente infinita e insuscetível a qualquer tipo de fadiga, rotura ou deformação plástica.",
      "As propriedades mecânicas dependem exclusivamente de campos eletrostáticos externos de alta frequência gerados por telemóveis.",
      "A correta caracterização física demonstra que Esta gradação mecânica assegura movimentos suaves e económicos para tarefas diárias de sustentação e precisão.",
      "A estrutura perde a totalidade da sua rigidez quando o doente assume a posição de decúbito lateral direito."
    ],
    "correctIndex": 2,
    "explanation": "Sob o ponto de vista físico e mecanicista, Esta gradação mecânica assegura movimentos suaves e económicos para tarefas diárias de sustentação e precisão. Isto garante a integridade funcional do aparelho locomotor.",
    "distractorAnalysis": [
      "Está incorreta: desrespeita os limites de resistência dos materiais biológicos e a realidade clínica das fraturas e entorses.",
      "Está incorreta: inventa uma correlação inverosímil com radiações de telecomunicações.",
      "Está incorreta: confunde a rotação postural de decúbito com perda intrínseca da rigidez do material ósseo."
    ],
    "nursingApplication": "O enfermeiro na reabilitação pós-AVC estimula movimentos lentos e controlados que reativam o padrão fisiológico de recrutamento de unidades motoras pequenas."
  },
  {
    "id": 3198,
    "topicId": 3,
    "question": "Na biofísica do sistema osteomuscular, em relação a 'fadiga muscular mecânica por acumulação de metabolitos e esgotamento de cálcio', qual é a fundamentação científica correta?",
    "options": [
      "Trata-se de um processo estritamente passivo e inerte onde não ocorrem quaisquer trocas metabólicas nem variações de propriedades elásticas.",
      "Corresponde a uma anulação instantânea das forças da gravidade e eliminação das leis de Newton nos tecidos biológicos.",
      "Resulta de uma reação química de oxidação que decompõe a matriz colagénica em vapor e água à temperatura corporal de 37 °C.",
      "a perda transitória da capacidade de gerar força resulta do acúmulo de fosfato inorgânico (Pi), iões hidrogénio (H⁺) e da falha na libertação de Ca²⁺ pelo retículo sarcoplasmático. O Pi liga-se ao cálcio dentro do retículo e compete com o sítio catalítico da miosina, enfraquecendo o golpe de força das pontes cruzadas."
    ],
    "correctIndex": 3,
    "explanation": "Em biofísica osteomuscular, fadiga muscular mecânica por acumulação de metabolitos e esgotamento de cálcio explica-se pelo facto de que a perda transitória da capacidade de gerar força resulta do acúmulo de fosfato inorgânico (Pi), iões hidrogénio (H⁺) e da falha na libertação de Ca²⁺ pelo retículo sarcoplasmático. O Pi liga-se ao cálcio dentro do retículo e compete com o sítio catalítico da miosina, enfraquecendo o golpe de força das pontes cruzadas.",
    "distractorAnalysis": [
      "Está incorreta: desconsidera a intensa atividade biológica, dinâmica e mecano-dependente do tecido osteomuscular.",
      "Está incorreta: invoca uma anulação impossível da gravidade física.",
      "Está incorreta: confunde a fisiologia da matriz com combustão química ou evaporação fictícia."
    ],
    "nursingApplication": "O enfermeiro assegura períodos adequados de repouso entre sessões de treino de marcha no doente descondicionado, prevenindo a fadiga exaustiva e quedas acidentais."
  },
  {
    "id": 3199,
    "topicId": 3,
    "question": "Durante a prestação de cuidados de enfermagem a um doente com alterações musculoesqueléticas, como se traduz na prática clínica o conceito de 'fadiga muscular mecânica por acumulação de metabolitos e esgotamento de cálcio'?",
    "options": [
      "Traduz-se no seguinte cuidado e evidência: O enfermeiro assegura períodos adequados de repouso entre sessões de treino de marcha no doente descondicionado, prevenindo a fadiga exaustiva e quedas acidentais.",
      "Exige a imobilização absoluta e perpétua do doente no leito sem qualquer mobilização para impedir que os ossos recebam forças mecânicas.",
      "Implica a aplicação de compressas ferventes a 100 °C para acelerar a fundição dos cristais de hidroxiapatite.",
      "Requer a suspensão de toda a alimentação oral e hidratação para forçar o organismo a reabsorver os seus próprios músculos."
    ],
    "correctIndex": 0,
    "explanation": "A aplicação de enfermagem para fadiga muscular mecânica por acumulação de metabolitos e esgotamento de cálcio baseia-se no princípio biomecânico: O enfermeiro assegura períodos adequados de repouso entre sessões de treino de marcha no doente descondicionado, prevenindo a fadiga exaustiva e quedas acidentais. Este raciocínio assegura intervenções fundamentadas na física biológica.",
    "distractorAnalysis": [
      "Está incorreta: é prejudicial, pois a ausência total de carga acelera a atrofia por desuso e a osteopenia.",
      "Está incorreta: causaria queimaduras graves de 3.º grau nos tecidos corporais.",
      "Está incorreta: provocaria desidratação fatal e desnutrição grave."
    ],
    "nursingApplication": "O enfermeiro assegura períodos adequados de repouso entre sessões de treino de marcha no doente descondicionado, prevenindo a fadiga exaustiva e quedas acidentais."
  },
  {
    "id": 3200,
    "topicId": 3,
    "question": "Um enfermeiro analisa o impacto biomecânico das solicitações mecânicas em 'fadiga muscular mecânica por acumulação de metabolitos e esgotamento de cálcio'. Qual das seguintes afirmações apresenta a análise biofísica correta?",
    "options": [
      "A resistência mecânica nesta estrutura é estritamente infinita e insuscetível a qualquer tipo de fadiga, rotura ou deformação plástica.",
      "A correta caracterização física demonstra que O Pi liga-se ao cálcio dentro do retículo e compete com o sítio catalítico da miosina, enfraquecendo o golpe de força das pontes cruzadas.",
      "As propriedades mecânicas dependem exclusivamente de campos eletrostáticos externos de alta frequência gerados por telemóveis.",
      "A estrutura perde a totalidade da sua rigidez quando o doente assume a posição de decúbito lateral direito."
    ],
    "correctIndex": 1,
    "explanation": "Sob o ponto de vista físico e mecanicista, O Pi liga-se ao cálcio dentro do retículo e compete com o sítio catalítico da miosina, enfraquecendo o golpe de força das pontes cruzadas. Isto garante a integridade funcional do aparelho locomotor.",
    "distractorAnalysis": [
      "Está incorreta: desrespeita os limites de resistência dos materiais biológicos e a realidade clínica das fraturas e entorses.",
      "Está incorreta: inventa uma correlação inverosímil com radiações de telecomunicações.",
      "Está incorreta: confunde a rotação postural de decúbito com perda intrínseca da rigidez do material ósseo."
    ],
    "nursingApplication": "O enfermeiro assegura períodos adequados de repouso entre sessões de treino de marcha no doente descondicionado, prevenindo a fadiga exaustiva e quedas acidentais."
  }
];
