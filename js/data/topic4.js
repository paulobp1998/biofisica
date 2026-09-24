/**
 * Tópico 4: Hidrodinâmica e Aplicações ao Sistema Circulatório
 * 200 Questões Clínicas Rigorosas para o 1.º Ano de Enfermagem (IDs 4001 a 4200)
 */

const TOPIC_4_QUESTIONS = [
  {
    "id": 4001,
    "topicId": 4,
    "question": "O caudal ou débito volumétrico (Q) é uma grandeza hidrodinâmica fundamental. Em termos de mecânica dos fluidos, como é definido o caudal de um líquido incompressível em escoamento contínuo num vaso cilíndrico de secção A com velocidade média v?",
    "options": [
      "Q = A · v (produto da área da secção transversal pela velocidade média de escoamento), expressando o volume de fluido que atravessa a secção por unidade de tempo (m³/s ou L/min).",
      "Q = A / v, expressando a densidade linear do fluido por metro de vaso.",
      "Q = m · g · v², sendo proporcional à energia cinética da massa cardíaca.",
      "Q = P · A · t, sendo o produto da pressão pela área e pelo tempo."
    ],
    "correctIndex": 0,
    "explanation": "O caudal volumétrico (Q) mede o volume de fluido que passa através de uma determinada secção transversal por unidade de tempo: Q = ΔV / Δt = (A · Δx) / Δt = A · v. No Sistema Internacional a unidade é o m³/s, mas na fisiologia e enfermagem utiliza-se rotineiramente L/min (débito cardíaco normal em repouso: ~5 L/min) ou mL/h (em bombas infusoras).",
    "distractorAnalysis": [
      "Opção B inverte a velocidade na fração, gerando uma unidade incorreta de m²/(m/s) = m·s.",
      "Opção C mistura energia e forças gravitacionais sem fundamentação na definição de fluxo volumétrico.",
      "Opção D calcula o impulso da força de pressão ao longo do tempo (F · t), não o caudal."
    ],
    "nursingApplication": "Na programação de bombas infusoras de perfusão contínua em enfermagem, converter prescrições de mg/kg/min em caudais volumétricos de mL/h na bomba baseia-se diretamente na conservação do caudal de fluidoterapia."
  },
  {
    "id": 4002,
    "topicId": 4,
    "question": "A Equação da Continuidade para fluidos incompressíveis em regime permanente (A₁ · v₁ = A₂ · v₂ = constante) estabelece uma lei de conservação essencial. Como se aplica esta equação ao sistema cardiovascular humano?",
    "options": [
      "Como o débito cardíaco total que sai do ventrículo esquerdo tem de atravessar cada nível ramificado da circulação, a velocidade do sangue é inversamente proporcional à área da secção transversal TOTAL combinada de cada leito vascular.",
      "A velocidade do sangue é estritamente igual e uniforme em todos os vasos desde a aorta até aos capilares.",
      "A velocidade é máxima onde a área total combinada dos vasos é máxima.",
      "O caudal do sangue diminui em 90% ao passar das artérias para os capilares para poupar energia ao coração."
    ],
    "correctIndex": 0,
    "explanation": "Pelo princípio da continuidade de um fluido incompressível em circuito fechado, o caudal total Q é constante em cada secção do circuito: Q = A_total · v_média. Embora um capilar individual seja microscópico, existem cerca de 10 a 40 mil milhões de capilares em paralelo, perfazendo uma área transversal combinada colossal (~2500 a 4000 cm²), comparada com apenas ~3 a 5 cm² na raiz da aorta. Por isso, a velocidade média é máxima na aorta (~30 a 40 cm/s) e mínima nos capilares (~0,03 cm/s).",
    "distractorAnalysis": [
      "Opção B ignora a gigantesca variação na área transversal combinada entre a aorta e a microcirculação.",
      "Opção C afirma o oposto da equação da continuidade (v = Q / A; maior área implica MENOR velocidade).",
      "Opção D violaria a conservação de massa: o volume que entra nos capilares tem de ser rigorosamente igual ao volume ejetado pelo coração."
    ],
    "nursingApplication": "A velocidade ultralenta do fluxo nos capilares sistémicos (~0,3 mm/s) é um primor biofísico: proporciona o tempo de trânsito necessário (~1 a 2 segundos) para que o oxigénio, glicose e fármacos administrados pelo enfermeiro se difundam eficazmente do sangue para os tecidos periféricos."
  },
  {
    "id": 4003,
    "topicId": 4,
    "question": "O Teorema de Bernoulli para o escoamento estacionário de um fluido ideal não viscoso expressa a conservação da energia mecânica total: P + 1/2 ρ·v² + ρ·g·h = constante. O que prevê o 'Efeito Venturi' decorrente deste teorema quando o sangue atravessa uma estenose vascular parcial (estreitamento localizado da luz de uma artéria)?",
    "options": [
      "No estreitamento, a velocidade do sangue (v) aumenta e a pressão lateral exercida contra a parede do vaso (P) diminui significativamente.",
      "No estreitamento, a velocidade diminui e a pressão lateral atinge o seu valor máximo absoluto.",
      "Tanto a velocidade como a pressão lateral duplicam simultaneamente no interior da estenose.",
      "O fluido para imediatamente e a energia mecânica dissipa-se sob forma de luz visível."
    ],
    "correctIndex": 0,
    "explanation": "Pela equação da continuidade, se a área da secção diminui no estreitamento (A₂ < A₁), a velocidade do fluido tem de aumentar (v₂ > v₁). Pelo Teorema de Bernoulli (P₁ + 1/2 ρ·v₁² = P₂ + 1/2 ρ·v₂²), para manter a soma constante ao mesmo nível gravitacional, um aumento da energia cinética por unidade de volume (1/2 ρ·v²) obriga a uma QUEDA proporcional da pressão estática lateral (P₂ < P₁). Este é o Efeito Venturi.",
    "distractorAnalysis": [
      "Opção B confunde escoamento contínuo de fluidos dinâmicos com o impacto estático de uma barreira bloqueada.",
      "Opção C viola abertamente a lei de conservação de energia do Teorema de Bernoulli.",
      "Opção D é absurda; o sangue continua a escoar na estenose em alta velocidade sem emissão fotónica."
    ],
    "nursingApplication": "O Efeito Venturi tem dupla importância clínica: 1) Nas máscaras de Venturi para oxigenoterapia em doentes com DPOC, o oxigénio a alta velocidade num bocal estreito gera subpressão lateral que arrasta uma proporção fixa e controlada de ar ambiente, garantindo uma FiO₂ precisa (24% a 50%); 2) Em artérias com placas ateroscleróticas, a queda de pressão lateral no estreitamento pode colapsar a parede vascular, facilitando a oclusão trombótica aguda."
  },
  {
    "id": 4004,
    "topicId": 4,
    "question": "A distinção entre 'Regime Laminar' e 'Regime Turbulento' é crítica na hemodinâmica cardiovascular. Qual das seguintes afirmações descreve com precisão o escoamento laminar?",
    "options": [
      "O sangue desloca-se em lâminas cilíndricas concêntricas paralelas sem mistura transversal, exibindo um perfil parabólico de velocidades (velocidade máxima no centro do vaso e nula junto ao endotélio vascular); o fluxo é silencioso e energeticamente eficiente.",
      "O sangue move-se em redemoinhos e vórtices caóticos com grande dissipação de calor e ruído audível.",
      "Todas as hemácias movem-se exatamente à mesma velocidade, raspando a parede vascular com atrito constante.",
      "O escoamento ocorre exclusivamente aos solavancos em sentido retrógrado em todas as veias."
    ],
    "correctIndex": 0,
    "explanation": "No regime laminar, o fluido escoa em linhas de corrente suaves e concêntricas. Devido à viscosidade e às forças de coesão molecular com a parede vascular (condição de não-deslizamento), a camada em contacto com o endotélio tem velocidade zero; a velocidade cresce parabolicamente até atingir o valor máximo no centro axial do lúmen. Não há mistura transversal caótica de fluido, o que torna o fluxo completamente inaudível e minimiza a perda de carga por atrito.",
    "distractorAnalysis": [
      "Opção B é a definição exata de regime turbulento.",
      "Opção C descreveria um perfil plano (plug flow) de fluido não-viscoso ideal sem atrito parietal.",
      "Opção D violaria o sentido fisiológico anterógrado da circulação cardiovascular mantido pelo coração e válvulas."
    ],
    "nursingApplication": "Em condições fisiológicas normais em repouso, a grande maioria da árvore vascular opera em regime laminar silencioso. É por essa razão que, ao colocar o estetoscópio sobre uma artéria braquial ou carótida saudável, o enfermeiro ausculta silêncio absoluto. O aparecimento de ruídos ou sopros vasculares sinaliza a transição patológica para escoamento turbulento."
  },
  {
    "id": 4005,
    "topicId": 4,
    "question": "O Número de Reynolds (Re) é um parâmetro adimensional que prevê se o escoamento de um fluido será laminar ou turbulento. A sua fórmula clássica é Re = (ρ · v · d) / η. O que indica cada uma destas grandezas físicas?",
    "options": [
      "ρ é a massa volúmica (densidade) do fluido, v a velocidade média, d o diâmetro interno do vaso e η a viscosidade dinâmica do sangue.",
      "ρ é a pressão sistólica, v o volume urinário, d a distância ao leito e η a temperatura corporal.",
      "ρ é o raio ao quadrado, v o vetor de força, d a dosagem de heparina e η o hematócrito em percentagem.",
      "Re expressa a percentagem de oxigénio dissolvido no plasma por cada batimento cardíaco."
    ],
    "correctIndex": 0,
    "explanation": "O Número de Reynolds traduz a razão entre as forças de inércia e as forças viscosas de atrito interno: Re = (forças inerciais) / (forças viscosas) = (ρ · v · d) / η. No sistema circulatório humano: para Re < 2000 o fluxo é estavelmente laminar; para Re > 2000 a 3000 o fluxo torna-se instável e predominantemente turbulento com formação de vórtices acústicos.",
    "distractorAnalysis": [
      "Opções B, C e D misturam conceitos clínicos e variáveis arbitrárias sem qualquer sustentação na mecânica dos fluidos universal."
    ],
    "nursingApplication": "Pela fórmula de Reynolds, um aumento na velocidade v ou no diâmetro d eleva Re em direção à turbulência. Da mesma forma, uma queda acentuada na viscosidade η (como na hemodiluição agressiva pós-trauma) faz disparar o número de Reynolds, favorecendo o aparecimento de sopros sistólicos funcionais audíveis pelo enfermeiro."
  },
  {
    "id": 4006,
    "topicId": 4,
    "question": "Em qual das seguintes condições clínicas o Número de Reynolds se eleva marcadamente, predispondo ao surgimento de fluxo turbulento e sopros cardíacos funcionais audíveis sem lesão valvular orgânica prévia?",
    "options": [
      "Anemia grave (onde o hematócrito baixo reduz drasticamente a viscosidade sanguínea η e o débito cardíaco compensatório aumenta a velocidade v).",
      "Policitemia vera (onde o excesso de glóbulos vermelhos triplica a viscosidade do sangue).",
      "Hipotermia profunda com redução extrema da frequência e débito cardíaco.",
      "Desidratação grave com hemoconcentração marcada."
    ],
    "correctIndex": 0,
    "explanation": "Na anemia severa ocorrem dois fatores simultâneos que catapultam o Número de Reynolds: 1) Como a concentração de eritrócitos é muito baixa, a viscosidade dinâmica do sangue (η no denominador) cai para valores próximos da água (~1,5 cP em vez dos normais 3 a 4 cP); 2) Para compensar a menor capacidade de transporte de oxigénio, o coração aumenta o débito cardíaco e a velocidade do sangue (v no numerador). Com v alto e η baixo, Re ultrapassa facilmente 2000, gerando turbulência audível (sopro anémico funcional na auscultação precordial).",
    "distractorAnalysis": [
      "Opção B eleva massivamente a viscosidade η no denominador, o que diminui o número de Reynolds e estabiliza o fluxo laminar (embora aumente a sobrecarga pressórica e o risco trombótico).",
      "Opção C reduz a velocidade v e eleva a viscosidade pelo frio, diminuindo francamente o Número de Reynolds.",
      "Opção D provoca hemoconcentração que eleva a viscosidade, reduzindo Re."
    ],
    "nursingApplication": "Num doente oncológico ou hemorrágico admitido com queixas de cansaço extremo e um novo sopro sistólico na auscultação, o enfermeiro correlaciona a física do sopro com a perda de viscosidade da anemia antes de assumir erroneamente uma patologia valvular primária, priorizando a colheita de hemograma urgente e vigilância de sinais de hipoperfusão."
  },
  {
    "id": 4007,
    "topicId": 4,
    "question": "A Lei de Poiseuille (ou Hagen-Poiseuille) rege o escoamento laminar de fluidos viscosos em tubos cilíndricos retos: Q = (π · r⁴ · ΔP) / (8 · η · L). Qual é o significado biomecânico da dependência do caudal em relação à QUARTA POTÊNCIA do raio do vaso (r⁴)?",
    "options": [
      "Pequeníssimas variações no raio do vaso (vasodilatação ou vasoconstrição) provocam variações gigantescas no caudal sanguíneo e na resistência vascular periférica; por exemplo, duplicar o raio (2r) aumenta o fluxo em 16 vezes (2⁴ = 16) para a mesma pressão.",
      "O raio do vaso não tem qualquer efeito no caudal, dependendo este unicamente do comprimento L.",
      "O caudal é inversamente proporcional ao raio, pelo que vasos mais estreitos conduzem muito mais sangue.",
      "A viscosidade do sangue é anulada se o vaso for quatro vezes mais longo do que largo."
    ],
    "correctIndex": 0,
    "explanation": "A dependência em r⁴ na Lei de Poiseuille é o princípio mais potente da regulação hemodinâmica: a resistência vascular é dada por R = (8 · η · L) / (π · r⁴). Como o expoente é 4: uma redução de apenas 16% no raio do vaso duplica a resistência vascular; uma redução de 50% no raio (r/2) aumenta a resistência em 16 vezes e reduz o fluxo a 1/16 do valor original para o mesmo gradiente de pressão ΔP.",
    "distractorAnalysis": [
      "Opção B é um erro crassíssimo; o raio é de longe o fator mais determinante de todo o sistema.",
      "Opção C afirma o inverso absurdo da física de fluidos.",
      "Opção D é uma afirmação sem base na equação de Poiseuille."
    ],
    "nursingApplication": "A Lei de Poiseuille é o fundamento da ação dos fármacos vasoativos administrados pelo enfermeiro: vasodilatadores potentes como a nitroglicerina ou nitroprussiato produzem aumentos milimétricos no diâmetro arteriolar que, graças ao fator r⁴, reduzem de imediato a pós-carga cardíaca e a pressão arterial de doentes em crise hipertensiva aguda."
  },
  {
    "id": 4008,
    "topicId": 4,
    "question": "Dois cateteres venosos periféricos curtos de teflon possuem o mesmo comprimento, mas o cateter A (calibre 14G) possui o dobro do raio interno do cateter B (calibre 20G). Mantendo-se a mesma pressão de infusão hidrostática, qual é o débito de soro que o cateter A proporciona em relação ao cateter B de acordo com a Lei de Poiseuille?",
    "options": [
      "16 vezes maior (2⁴ = 16).",
      "2 vezes maior apenas.",
      "4 vezes maior (2² = 4).",
      "Exatamente o mesmo débito, pois o comprimento é idêntico."
    ],
    "correctIndex": 0,
    "explanation": "Pela Lei de Poiseuille, o caudal é diretamente proporcional à quarta potência do raio interno do tubo: Q ∝ r⁴. Se o cateter A tem o dobro do raio do cateter B (r_A = 2 · r_B), o caudal de infusão sob a mesma diferença de pressão será: Q_A = (2)⁴ · Q_B = 16 · Q_B. Ou seja, o cateter A permite infundir fluidos a uma taxa dezasseis vezes mais rápida do que o cateter B.",
    "distractorAnalysis": [
      "Opção B considera erroneamente uma proporção linear com o raio (r¹).",
      "Opção C considera erroneamente uma dependência com a área de secção transversal (r²).",
      "Opção D ignora a resistência hidrodinâmica interna do tubo governada pelo calibre interno."
    ],
    "nursingApplication": "Na reanimação de um doente em choque hemorrágico grave após politraumatismo, o enfermeiro cateteriza com urgência duas veias periféricas com cateteres curtos e calibrosos de 14G ou 16G (laranja/cinzento), e NUNCA um cateter fino de 20G ou 22G, permitindo a infusão ultra-rápida de 1 litro de cristalóides ou concentrado de eritrócitos em escassos minutos."
  },
  {
    "id": 4009,
    "topicId": 4,
    "question": "Pela Lei de Poiseuille, a resistência ao escoamento é proporcional ao comprimento do tubo (R ∝ L). Como se reflete este princípio na escolha entre um cateter venoso periférico curto de 16G (comprimento ~3 cm) e um cateter venoso central de inserção periférica longo (PICC de 16G, comprimento ~50 a 60 cm) para reanimação volémica rápida?",
    "options": [
      "O cateter periférico curto oferece uma resistência hidráulica incomparavelmente menor devido ao seu curto comprimento (L pequeno), proporcionando caudais de infusão muito mais elevados do que o PICC longo para a mesma pressão motora.",
      "O PICC longo tem menor resistência porque a água acelera à medida que percorre tubos compridos.",
      "O comprimento do cateter não afeta em nada a resistência de infusão de um fármaco.",
      "O cateter central gera uma pressão de sucção que duplica o caudal sem necessidade de bombas."
    ],
    "correctIndex": 0,
    "explanation": "A resistência hidrodinâmica é diretamente proporcional ao comprimento do lúmen: R = (8 · η · L) / (π · r⁴). Um cateter PICC com 50 cm de comprimento apresenta uma resistência ao fluxo aproximadamente 16 a 20 vezes maior do que um cateter venoso periférico de 3 cm com o mesmo diâmetro interno. Consequentemente, para a mesma pressão, a taxa máxima de perfusão por gravidade é drasticamente inferior no cateter longo.",
    "distractorAnalysis": [
      "Opção B viola as leis do atrito viscoso ao longo das paredes sólidas de um tubo.",
      "Opção C ignora a variável L expressa na fórmula de Poiseuille.",
      "Opção D confunde uma linha de infusão passiva com bombas aspirativas ativas."
    ],
    "nursingApplication": "Erro clínico clássico: tentar ressuscitar um doente chocado com expansão volémica rápida através de um cateter central longo (CVC ou PICC) de lúmen fino. O enfermeiro sabe que acessos venosos centrais compridos destinam-se a aminas vasoativas, quimioterapia e nutrição parentérica, sendo os acessos periféricos curtos os verdadeiros reis da reanimação volémica rápida."
  },
  {
    "id": 4010,
    "topicId": 4,
    "question": "Qual é o principal segmento anatómico da árvore circulatória responsável pela maior queda de pressão hidrostática (gradiente de pressão de ~85 mmHg para ~35 mmHg) e pelo controlo primordial da 'Resistência Vascular Periférica Total' (RPT)?",
    "options": [
      "As Arteríolas, devido à presença de espessa camada muscular lisa circunferencial ricamente inervada que ajusta ativamente o raio vascular (r⁴ na Lei de Poiseuille).",
      "As Veias cavas superior e inferior.",
      "A Aorta torácica ascendente elástica.",
      "Os capilares glomerulares renais exclusivamente."
    ],
    "correctIndex": 0,
    "explanation": "As arteríolas são denominadas os 'vasos de resistência' por excelência do sistema cardiovascular: embora a sua área transversal combinada seja maior que a das grandes artérias, cada arteríola possui um lúmen estreito altamente controlável por tónus simpático e fatores locais endoteliais (óxido nítrico, endotelina). Devido à 4.ª potência do raio na Lei de Poiseuille, é nelas que se concentra a maior resistência hidráulica, amortecendo a pulsatilidade sistólica e protegendo a frágil rede capilar a jusante contra ruturas por alta pressão.",
    "distractorAnalysis": [
      "Opção B refere-se a vasos de capacitância venosa de baixa pressão e alta complacência.",
      "Opção C atua como vaso amortecedor elástico de Windkessel, mas oferece resistência mínima ao fluxo.",
      "Opção D é apenas um leito capilar especializado num único órgão."
    ],
    "nursingApplication": "O conhecimento das arteríolas como epicentro da resistência vascular é fundamental na titulação de infusões contínuas de noradrenalina em choque séptico: o agonismo alfa-1 adrenérgico induz vasoconstrição arteriolar generalizada, elevando a RPT e restabelecendo a Pressão Arterial Média (PAM > 65 mmHg) para perfundir órgãos vitais."
  },
  {
    "id": 4011,
    "topicId": 4,
    "question": "O sangue humano é classificado em mecânica dos fluidos como um 'Fluido Não-Newtoniano'. O que significa esta propriedade reológica específica?",
    "options": [
      "A sua viscosidade aparente (η) não é constante, variando ativamente em função da taxa de deformação por cisalhamento (shear rate), da velocidade de escoamento e do diâmetro do vaso.",
      "A sua viscosidade é rigorosamente idêntica à da água destilada a qualquer temperatura.",
      "O sangue só consegue escoar se estiver na presença de luz solar direta.",
      "O sangue não obedece a nenhuma lei da física moderna, comportando-se como gás nobre."
    ],
    "correctIndex": 0,
    "explanation": "Um fluido Newtoniano (como a água líquida, álcool ou plasma acelular puro) mantém a sua viscosidade rigorosamente constante para uma dada temperatura, independentemente da velocidade ou tensão de cisalhamento aplicada. O sangue total, sendo uma suspensão celular concentrada (40-45% de eritrócitos), é NÃO-NEWTONIANO (comportamento pseudoplástico com tixotropia): a baixas taxas de cisalhamento as hemácias agregam-se em pilhas de moedas ('rouleaux'), elevando a viscosidade; a altas taxas de cisalhamento, os agregados desfazem-se e as hemácias deformam-se e alinham-se com o fluxo, diminuindo a viscosidade aparente.",
    "distractorAnalysis": [
      "Opção B descreve fluidos simples ideais ou a água pura.",
      "Opção C é fisiologicamente absurda; o sangue circula na escuridão do leito vascular interno.",
      "Opção D ignora a biofísica hemoreológica consolidada."
    ],
    "nursingApplication": "Em estados de choque ou hipotensão profunda com estase microvascular (velocidade de fluxo quase nula nos capilares e vénulas), a viscosidade do sangue dispara devido à formação de rouleaux eritrocitários e agregados plaquetários ('sludging'). O enfermeiro previne a trombose microvascular administrando fluidoterapia vigorosa e heparina profilática precocemente."
  },
  {
    "id": 4012,
    "topicId": 4,
    "question": "O que descreve o 'Efeito Fåhræus-Lindqvist' na microcirculação de vasos com diâmetro inferior a cerca de 300 micrómetros (como pequenas artérias e arteríolas)?",
    "options": [
      "A viscosidade aparente do sangue diminui progressivamente à medida que o calibre do microvaso diminui (atingindo um mínimo nos capilares de ~8 a 10 μm), devido à migração axial dos glóbulos vermelhos para o centro do vaso e formação de uma camada marginal plasmática lubrificante junto à parede endotelial.",
      "O sangue congela instantaneamente quando o diâmetro do vaso atinge dimensões microscópicas.",
      "A viscosidade do sangue torna-se infinita em qualquer vaso com diâmetro inferior a 1 milímetro.",
      "Os glóbulos brancos substituem totalmente os glóbulos vermelhos na microcirculação."
    ],
    "correctIndex": 0,
    "explanation": "Descoberto por Robin Fåhræus e Johan Torsten Lindqvist em 1931: em vasos estreitos (<300 μm), as forças hidrodinâmicas empurram os eritrócitos para a linha central de máxima velocidade (migração axial). Junto ao endotélio vascular forma-se uma camada acelular constituída exclusivamente por plasma de baixa viscosidade (~1,2 cP). Como as maiores tensões de cisalhamento ocorrem junto à parede, esta película periférica de plasma atua como um 'lubrificante' hidrodinâmico, reduzindo a viscosidade aparente do sangue e poupando esforço ao coração.",
    "distractorAnalysis": [
      "Opção B provocaria paragem imediata da circulação com morte celular de todos os tecidos.",
      "Opção C é o oposto exato do que comprova a biofísica da microcirculação.",
      "Opção D é uma distorção biológica; as hemácias continuam a ser a vasta maioria das células em trânsito microvascular."
    ],
    "nursingApplication": "O Efeito Fåhræus-Lindqvist permite que o sangue continue a perfundir a microcirculação periférica com um custo pressórico muito inferior ao previsto pela teoria de tubos macroscópicos. Quando as hemácias perdem a sua flexibilidade elástica (como na anemia falciforme com hemoglobina S polimerizada), este efeito é anulado, provocando crises vaso-oclusivas isquémicas lancinantes que o enfermeiro gere com hidratação, analgesia e oxigenoterapia."
  },
  {
    "id": 4013,
    "topicId": 4,
    "question": "Qual é o principal fator biofísico celular determinante da viscosidade intrínseca do sangue total humano e como se correlaciona com o trabalho do coração?",
    "options": [
      "O Hematócrito (percentagem do volume sanguíneo ocupado por hemácias); quanto maior o hematócrito (ex: >55-60%), maior é a viscosidade, elevando exponencialmente a pós-carga cardíaca e o trabalho do miocárdio.",
      "O nível de glicose no plasma exclusivamente, sendo independente dos eritrócitos.",
      "O número de linfócitos T auxiliares na linfa.",
      "A concentração de iões cloreto no suor corporal."
    ],
    "correctIndex": 0,
    "explanation": "A viscosidade sanguínea depende exponencialmente da fração volumétrica celular: o Hematócrito (Ht normal: 40-45% nos homens, 36-46% nas mulheres). Com Ht normal, a viscosidade é cerca de 3 a 4 vezes a da água (3-4 cP). Se o hematócrito subir acima de 60% (policitemia vera, desidratação severa ou doping com eritropoietina/EPO), a viscosidade atinge 8 a 10 cP, multiplicando a resistência vascular periférica e a pressão arterial, sobrecarregando perigosamente o ventrículo esquerdo.",
    "distractorAnalysis": [
      "Opção B tem impacto secundário marginal comparado com o volume celular dos milhares de milhões de hemácias.",
      "Opção C refere-se a células do sistema imunitário presentes em concentrações milhares de vezes inferiores às hemácias.",
      "Opção D é uma variável de excreção exócrina da pele sem influência reológica direta."
    ],
    "nursingApplication": "Num doente com DPOC avançada e hipoxemia crónica, a libertação persistente de EPO induz poliglobulia secundária adaptativa (Ht > 55-60%). O enfermeiro identifica o risco iminente de acidente vascular cerebral isquémico e sobrecarga cardíaca direita (cor pulmonale) associada à hiperviscosidade, participando na realização de flebotomias terapêuticas (sangrias) prescritas para reduzir o hematócrito a níveis seguros (<50%)."
  },
  {
    "id": 4014,
    "topicId": 4,
    "question": "Na medição indireta da Pressão Arterial (PA) por esfigmomanometria auscultatória com estetoscópio sobre a artéria braquial, qual é a génese biofísica do 1.º Ruído de Korotkoff que define a Pressão Arterial Sistólica (PAS)?",
    "options": [
      "Quando a pressão do manguito desce imediatamente abaixo da pressão sistólica máxima ventricular, o sangue irrompe através do lúmen arterial parcialmente comprimido em jatos de alta velocidade, gerando escoamento turbulento com vibrações acústicas nas paredes arteriais audíveis no estetoscópio.",
      "O impacto mecânico das válvulas aórticas a fecharem-se violentamente no tórax.",
      "A expansão gasosa de bolhas de ar geradas pela agulha da braçadeira.",
      "O atrito do tecido de algodão do manguito contra a pele do braço do doente."
    ],
    "correctIndex": 0,
    "explanation": "Durante a insuflação supra-sistólica, a artéria braquial fica completamente ocluída (sem fluxo = silêncio). À medida que o ar é desinsuflado lentamente, no momento em que P_manguito = P_sistólica, o pico pressórico ventricular consegue abrir brevemente a artéria em cada sístole. O sangue é expelido através dessa fenda comprimida a altíssima velocidade num jato turbulento (elevado Número de Reynolds). Este turbilhão choca contra as paredes arteriais distais colapsadas, fazendo-as vibrar e originando o primeiro ruído claro e rítmico de Korotkoff (fase I), definidor da PAS.",
    "distractorAnalysis": [
      "Opção B descreve o 2.º tom cardíaco (S2) na auscultação torácica precordial, não os ruídos de Korotkoff braquiais.",
      "Opção C é absurda; o ar da braçadeira permanece estanque dentro da bolsa pneumática sem contacto intravascular.",
      "Opção D refere ruídos espúrios de artefacto de movimento externo que o enfermeiro treinado sabe distinguir e evitar."
    ],
    "nursingApplication": "A compreensão da física dos ruídos de Korotkoff exige que o enfermeiro desinsufle a pera da braçadeira a uma velocidade rigorosa de 2 a 3 mmHg por segundo: desinsuflações demasiado rápidas saltam o primeiro jato turbulento sistólico, subestimando gravemente a pressão sistólica do doente."
  },
  {
    "id": 4015,
    "topicId": 4,
    "question": "Ainda na esfigmomanometria auscultatória, o desaparecimento completo de todos os ruídos sonoros de Korotkoff (Fase V) marca a Pressão Arterial Diastólica (PAD). Qual é a explicação biofísica para este silêncio auscultatório final?",
    "options": [
      "A pressão do manguito caiu abaixo da pressão mínima intra-arterial durante a diástole, pelo que a artéria braquial permanece totalmente desobstruída e cilíndrica ao longo de todo o ciclo cardíaco, restabelecendo-se o escoamento laminar contínuo e silencioso.",
      "O sangue parou de circular completamente no membro superior devido a espasmo vascular reflexo.",
      "A viscosidade do sangue aumentou para o infinito, impedindo a passagem de ondas acústicas.",
      "O estetoscópio perdeu a sua membrana por desintegração elástica."
    ],
    "correctIndex": 0,
    "explanation": "Na Fase V de Korotkoff, logo que P_manguito cai ligeiramente abaixo da pressão diastólica mais baixa (PAD), a artéria já não é comprimida nem sequer durante o relaxamento ventricular. O vaso retoma o seu diâmetro circular normal desobstruído: o sangue volta a escoar em regime laminar uniforme sem jatos, vórtices ou turbilhões (Re < 2000). Como o fluxo laminar não gera perturbações sonoras audíveis na gama de frequências da auscultação clínica, instala-se o silêncio auscultatório.",
    "distractorAnalysis": [
      "Opção B é o inverso absoluto da realidade; o fluxo sanguíneo está perfeitamente normal e restaurado.",
      "Opção C é um absurdo reológico evidente.",
      "Opção D é uma justificação fantasiosa para falha de equipamento."
    ],
    "nursingApplication": "Em situações hiperdinâmicas especiais (crianças pequenas, febre alta, gravidez, tireotoxicose ou insuficiência da válvula aórtica), a turbulência pode persistir até aos 0 mmHg de pressão do manguito. Nestes doentes, as diretrizes clínicas de enfermagem determinam que a PAD seja registada no abafamento dos sons (Fase IV de Korotkoff) em vez do desaparecimento."
  },
  {
    "id": 4016,
    "topicId": 4,
    "question": "Se um enfermeiro utilizar uma braçadeira de esfigmomanómetro demasiado ESTREITA (pequena) para a circunferência do braço de um doente com obesidade, qual será o erro biofísico sistemático produzido na leitura da pressão arterial?",
    "options": [
      "Leitura falsamente ELEVADA da pressão arterial (hipertensão iatrogénica artefactual), porque a bolsa estreita necessita de uma pressão interna pneumática muito maior para conseguir transmitir a força através do espesso tecido adiposo e colapsar a artéria braquial profunda.",
      "Leitura falsamente diminuída para valores próximos de zero em todas as medições.",
      "Medição perfeitamente exata, pois a pressão do manguito é independente das dimensões do braço.",
      "Destruição imediata da artéria braquial por hipertermia de atrito."
    ],
    "correctIndex": 0,
    "explanation": "A compressão da artéria braquial depende da transmissão da pressão através dos tecidos moles do braço. Se a bolsa inflável for demasiado estreita ou curta para a circunferência do membro, a distribuição de forças mecânicas é deficiente: as bordas da bolsa não sustentam a pressão central, exigindo insuflar a braçadeira a pressões muito mais elevadas do que a pressão real intra-arterial para conseguir colapsar o vaso. O resultado é uma sobrestimação sistemática da PAS e da PAD em até 10 a 20 mmHg.",
    "distractorAnalysis": [
      "Opção B ocorreria com uma braçadeira excessivamente LARGA em braços muito magros (onde a leitura é falsamente subestimada).",
      "Opção C ignora os princípios de transmissão mecânica de pressão nos tecidos corporais.",
      "Opção D é uma afirmação sem base na prática médica."
    ],
    "nursingApplication": "Normas da Sociedade Europeia de Cardiologia exigem que o enfermeiro meça a circunferência do braço do doente e selecione a braçadeira adequada (a câmara pneumática deve cobrir cerca de 40% da largura e 80% a 100% da circunferência do braço). Usar braçadeiras padrão de adulto em doentes obesos gera diagnósticos erróneos de hipertensão e prescrição desnecessária de anti-hipertensores."
  },
  {
    "id": 4017,
    "topicId": 4,
    "question": "Durante a medição da pressão arterial num doente sentado, se o braço do doente for mantido pendente muito ABAIXO do nível do coração (átrio direito), que erro hidrostático ocorre na leitura da PA e por que razão?",
    "options": [
      "A pressão lida será falsamente mais ALTA do que a pressão real ao nível cardíaco, devido ao acréscimo da coluna hidrostática de sangue entre o coração e o manguito (ΔP = ρ · g · h ≈ +0,77 mmHg por cada cm de desnível vertical).",
      "A pressão lida será falsamente mais baixa porque o sangue desce por gravidade e desaparece do braço.",
      "A leitura não se altera em absolutamente nada, pois a gravidade terrestre não atua no interior dos vasos sanguíneos.",
      "A pulsação arterial inverte o sentido e passa a ser exclusivamente venosa."
    ],
    "correctIndex": 0,
    "explanation": "O sistema circulatório obedece ao princípio da hidrostática em colunas de fluido verticais: P_local = P_coração + ρ · g · h. A densidade do sangue é ρ ≈ 1,06 × 10³ kg/m³. Isto traduz-se numa pressão hidrostática de aproximadamente 0,77 mmHg por cada centímetro de altura de coluna vertical. Se o braço estiver 15 cm abaixo do nível do átrio direito, a coluna hidrostática soma artificialmente cerca de +11 a +12 mmHg à pressão medida no manguito.",
    "distractorAnalysis": [
      "Opção B confunde a descida do fluido com uma redução pressórica inexistente.",
      "Opção C nega os princípios elementares da hidrostática e a ação do campo gravítico sobre a massa do sangue.",
      "Opção D viola a anatomia e a fisiologia da circulação sistémica."
    ],
    "nursingApplication": "O enfermeiro deve posicionar e apoiar SEMPRE o braço do doente rigorosamente à altura do 4.º espaço intercostal / linha média axilar (nível do átrio direito). Se o doente estiver deitado, o braço fica nivelado com a cama; se estiver sentado e o braço estiver pousado na coxa sem apoio, a sobrestimação da pressão induzirá erros graves na terapêutica."
  },
  {
    "id": 4018,
    "topicId": 4,
    "question": "A Lei de Laplace aplicada a vasos sanguíneos cilíndricos relaciona a Tensão de Parede circunferencial (T), a Pressão transmural interna (P), o Raio do vaso (r) e a Espessura da parede (w) através da relação: T = (P · r) / w. Qual é a consequência biofísica fatal desta lei na evolução de um Aneurisma da Aorta Abdominal?",
    "options": [
      "À medida que o aneurisma se dilata e o raio (r) aumenta com afilamento da parede elástica (w menor), a tensão na parede (T) cresce drasticamente para a mesma pressão arterial, acelerando o risco iminente de rotura hemorrágica catastrófica.",
      "O aumento do raio faz a tensão mecânica na parede diminuir para zero, estabilizando o aneurisma espontaneamente.",
      "O aneurisma transforma-se num osso sólido que protege a aorta contra qualquer rutura.",
      "A pressão arterial interna cai para valores negativos, sugando ar para o vaso."
    ],
    "correctIndex": 0,
    "explanation": "Pela Lei de Laplace (T = P · r / w): se uma secção da aorta dilata patologicamente aumentando o raio r e a parede adelgaça por destruição de elastina e colagénio (w menor), a tensão circunferencial T de tração suportada pelas fibras remanescentes eleva-se dramaticamente. Isto cria um círculo vicioso: maior tensão -> maior estiramento -> maior raio -> tensão ainda maior. Quando a tensão ultrapassa o limite de resistência dos tecidos da parede aórtica, o aneurisma rompe-se com choque hemorrágico fatal.",
    "distractorAnalysis": [
      "Opção B contradiz a fórmula direta de Laplace; maior raio implica MAIOR tensão parietal.",
      "Opção C confunde calcificação aterosclerótica da placa íntima com proteção esquelética consolidada.",
      "Opção D violaria a mecânica dos fluidos corporais sob pressão do ventrículo esquerdo."
    ],
    "nursingApplication": "No acompanhamento de doentes com aneurisma aórtico conhecido (ex: diâmetro > 5 cm), a intervenção prioritária de enfermagem é o controlo rigoroso e agressivo da pressão arterial (evitando picos hipertensivos de P) e o ensino do doente a evitar manobras de esforço (manobra de Valsalva, levantar pesos), reduzindo as tensões parietais que levam à rotura."
  },
  {
    "id": 4019,
    "topicId": 4,
    "question": "Num sistema de fluidoterapia intravenosa por gravidade simples, a pressão motora hidrostática que impulsiona o líquido para a veia do doente é dada por ΔP = ρ · g · h. Se a pressão na veia periférica do doente for de 10 mmHg (~13,6 cm H₂O), qual é a consequência se o frasco de soro for colocado a uma altura inferior à do braço do doente (h < 0)?",
    "options": [
      "A pressão venosa supera a pressão hidrostática do frasco, cessando a infusão e ocorrendo refluxo imediato de sangue pelo tubo do sistema em direção ao frasco, com risco de coagulação e oclusão do cateter.",
      "O soro é infundido dez vezes mais rapidamente para a circulação venosa.",
      "O cateter venoso periférico salta espontaneamente para fora da veia.",
      "A solução glicosada a 5% transforma-se em sangue tipo O negativo."
    ],
    "correctIndex": 0,
    "explanation": "O escoamento por gravidade depende da diferença de pressão: se a pressão exercida pela coluna de líquido (P_infusão = ρ · g · h) for superior à pressão venosa do doente (P_veia), o líquido entra na veia. Se o frasco for descido abaixo do nível da punção venosa (h < 0 ou P_infusão < P_veia), o gradiente de pressão inverte-se: o sangue venoso é empurrado pela sua própria pressão hidrostática para o interior do cateter e linha de infusão, formando rapidamente um coágulo obstrutivo.",
    "distractorAnalysis": [
      "Opção B viola a lei física que exige gradiente positivo de pressão no sentido do fluxo.",
      "Opção C confunde refluxo hidrodinâmico com forças de ejeção mecânica externa.",
      "Opção D é uma impossibilidade biológica e hematológica elementar."
    ],
    "nursingApplication": "Durante a deambulação do doente com soro ou na transferência entre a maca e a cama hospitalar, o enfermeiro assegura que o suporte de soro mantém o frasco sempre elevado pelo menos 80 a 100 cm acima do ponto de inserção do cateter, prevenindo o refluxo de sangue para a linha de perfusão e a perda do acesso venoso por oclusão trombótica."
  },
  {
    "id": 4020,
    "topicId": 4,
    "question": "Na administração de terapêutica com bombas de infusão volumétrica, o mecanismo motor positivo é acionado por pistões peristálticos. Qual é a principal vantagem biofísica deste sistema ativo em comparação com a perfusão tradicional por gravidade livre?",
    "options": [
      "Capacidade de gerar pressões hidrostáticas ativas controladas suficientes para vencer resistências elevadas de cateteres finos e filtros microbiológicos, garantindo um débito rigorosamente constante e independente da altura do frasco, com sensores que disparam alarmes de oclusão quando a pressão atinge um limite pré-programado de segurança.",
      "Eliminação total da necessidade de qualquer eletricidade ou bateria para operar o motor.",
      "Capacidade de infundir comprimidos sólidos diretamente no sangue sem dissolução prévia.",
      "Aceleração de partículas alfa para destruir bactérias no circuito de infusão."
    ],
    "correctIndex": 0,
    "explanation": "As bombas de infusão volumétricas utilizam tração mecânica peristáltica linear ou rotativa para ejetar volumes milimétricos com precisão de ±5%. Ao contrário da gravidade simples (que oscila com a altura, postura do doente ou espasmos venosos), a bomba ajusta a pressão motora automaticamente para manter o caudal programado (ex: 2 mL/h). Incorpora transdutores de pressão que detetam resistências anormais (infiltração perivascular, dobra do tubo) e bloqueiam o bombeamento por alarme de pressão máxima (evitando extravasamentos lesivos).",
    "distractorAnalysis": [
      "Opção B é falsa; as bombas exigem ligação à rede elétrica e dispõem de baterias recarregáveis internas.",
      "Opção C é um absurdo clínico que causaria embolia pulmonar massiva fatal imediata.",
      "Opção D confunde uma bomba de fluidoterapia com fontes de radiação ionizante de medicina nuclear."
    ],
    "nursingApplication": "A programação de bombas infusoras é uma competência exclusiva e de altíssima responsabilidade do enfermeiro: fármacos de margem terapêutica estreita (como aminas vasoativas, citotóxicos, insulina rápida e propofol) NUNCA podem ser infundidos por gravidade livre devido ao risco de sobredosagem mortal por variação acidental do clamp do equipo."
  },
  {
    "id": 4021,
    "topicId": 4,
    "question": "Na calibração de equipos de infusão por gravidade, qual é a diferença biofísica padronizada entre um sistema de 'Macrogotas' e um sistema de 'Microgotas'?",
    "options": [
      "No sistema de Macrogotas, 1 mL de solução aquosa corresponde a 20 gotas (fator 20 gts/mL); no sistema de Microgotas, 1 mL corresponde exatamente a 60 microgotas (fator 60 microgts/mL, onde 1 gota = 3 microgotas).",
      "No sistema de macrogotas cada gota pesa 1 quilograma e nas microgotas pesa 1 miligrama.",
      "Ambos possuem rigorosamente o mesmo fator de gotejamento de 1000 gotas por mililitro.",
      "O sistema de microgotas é utilizado unicamente para transfundir sangue total espesso."
    ],
    "correctIndex": 0,
    "explanation": "O volume de uma gota depende do diâmetro externo do orifício gotejador na câmara de gotejamento (pela Lei de Tate da tensão superficial). Equipos de macrogotas comuns possuem orifício largo padronizado para fornecer 20 gotas por mL (1 gota ≈ 0,05 mL). Equipos de microgotas (ou equipos pediátricos) possuem uma agulha metálica central fina calibrada para fornecer 60 microgotas por mL (1 microgota ≈ 0,0167 mL).",
    "distractorAnalysis": [
      "Opção B propõe massas gigantescas que romperiam o frasco e matariam o doente.",
      "Opção C propõe um valor irreal que produziria um spray microscópico contínuo.",
      "Opção D inverte a prática clínica; transfusões de sangue utilizam sistemas macrogotas com filtro específico de 170-200 μm para não hemolisar as hemácias."
    ],
    "nursingApplication": "A equivalência biofísica fundamental na enfermagem é: Débito em mL/h = Débito em microgotas/minuto. Para macrogotas: Gotas/minuto = (Volume em mL × 20) / (Tempo em minutos) = Volume em mL / (Tempo em horas × 3). O domínio deste cálculo previne acidentes de hipervolemia em pediatria e nefrologia."
  },
  {
    "id": 4022,
    "topicId": 4,
    "question": "Durante a inserção ou remoção de um Cateter Venoso Central (CVC) na veia jugular interna ou subclávia de um doente, qual é o risco hemodinâmico fatal decorrente da pressão intratorácica negativa gerada durante a inspiração profunda?",
    "options": [
      "Aspiração de ar atmosférico para o interior da veia aberta pelo gradiente de pressão negativa (P_intratorácica < P_atmosférica), originando Embolia Gasosa maciça com oclusão mecânica da circulação pulmonar no ventrículo direito.",
      "Perda de todo o volume sanguíneo do doente através da agulha em menos de 1 segundo.",
      "Elevação instantânea da temperatura arterial para 45 °C.",
      "Transformação do ar atmosférico em líquido cefalorraquidiano dentro do pulmão."
    ],
    "correctIndex": 0,
    "explanation": "As grandes veias intratorácicas (cavas, subclávias, jugulares) estão submetidas à pressão pleural subatmosférica: durante uma inspiração profunda forçada, a pressão dentro da veia pode cair para valores negativos (-2 a -6 cm H₂O). Se a cânula ou luer do cateter estiver aberta ao ar sem oclusão estanque, o gradiente de pressão suga centenas de mililitros de ar ambiente diretamente para o coração direito, formando uma 'armadilha gasosa' que bloqueia a ejeção para a artéria pulmonar (choque obstrutivo letal).",
    "distractorAnalysis": [
      "Opção B exagera grotescamente a taxa de hemorragia venosa.",
      "Opção C é fisiologicamente impossível em fenómenos de embolia mecânica.",
      "Opção D confunde ar ambiente com produção de líquor pelos plexos coróideos."
    ],
    "nursingApplication": "Para prevenir embolia gasosa durante a introdução ou remoção de CVCs, o enfermeiro posiciona o doente em posição de Trendelenburg (cabeceira rebaixada a 15°, elevando a pressão venosa na jugular acima da atmosférica) e instrui o doente a realizar a manobra de Valsalva ou suster a respiração em expiração plena no instante da desconexão."
  },
  {
    "id": 4023,
    "topicId": 4,
    "question": "A complacência ou capacitância venosa (C = ΔV / ΔP) das grandes veias sistémicas é cerca de 20 a 30 vezes superior à das artérias sistémicas. Qual é o papel hemodinâmico deste facto biofísico na circulação humana?",
    "options": [
      "As veias funcionam como o principal 'Reservatório de Volume' da circulação (albergando cerca de 60% a 70% de todo o volume de sangue em repouso), acomodando grandes variações volumétricas com mínimas alterações da pressão venosa.",
      "As veias funcionam como os vasos que geram a pressão sistólica de 120 mmHg.",
      "As veias são tubos rígidos de aço que não sofrem qualquer dilatação elástica.",
      "As veias destinam-se exclusivamente à oxigenação do sangue periférico."
    ],
    "correctIndex": 0,
    "explanation": "Devido às suas paredes finas, ricas em colagénio frouxo e com pouca musculatura lisa elástica, as veias possuem altíssima complacência volumétrica (C = ΔV / ΔP): podem receber grandes volumes de fluido com aumentos quase negligenciáveis de pressão hidrostática interna. Cerca de dois terços do sangue circulante encontra-se alojado no sistema venoso sistémico de capacitância.",
    "distractorAnalysis": [
      "Opção B descreve o papel das artérias musculares e elásticas de alta pressão.",
      "Opção C é contrária à histologia venosa que é extremamente maleável e distensível.",
      "Opção D descreve a hematose pulmonar dos alvéolos e capilares pulmonares."
    ],
    "nursingApplication": "Em estados de choque hipovolémico ou hemorrágico, a estimulação simpática ativa induz venoconstrição generalizada mediada por recetores alfa-1, reduzindo a complacência venosa e 'mobilizando' até 1 litro de sangue do reservatório venoso esplâncnico e cutâneo para a circulação central, garantindo o retorno venoso e o débito cardíaco."
  },
  {
    "id": 4024,
    "topicId": 4,
    "question": "O efeito 'Windkessel' (ou efeito de amortecimento elástico) desempenhado pelas grandes artérias elásticas (como a aorta e artérias carótidas) consiste em qual mecanismo biofísico?",
    "options": [
      "Distensão elástica da parede aórtica rica em elastina durante a sístole ventricular (armazenando cerca de 50% do volume ejetado sob forma de energia elástica potencial); durante a diástole, o recuo elástico passivo da parede impulsiona o sangue para a periferia, transformando o fluxo pulsátil intermitente num fluxo contínuo e contendo a pressão diastólica.",
      "Contração muscular voluntária consciente do endotélio da aorta para sugar o sangue do ventrículo esquerdo.",
      "Encerramento de todas as artérias periféricas durante a diástole para impedir que o sangue circule.",
      "Dissolução de eritrócitos para libertar calor no tórax."
    ],
    "correctIndex": 0,
    "explanation": "Durante a sístole ventricular (~0,3 s), o coração ejeta cerca de 70 mL de sangue subitamente na aorta: se as artérias fossem tubos rígidos de vidro, a pressão sistólica dispararia para valores absurdos (>250 mmHg) e o fluxo pararia instantaneamente a zero durante a diástole. Graças à distensibilidade elástica da aorta (efeito Windkessel, do alemão 'câmara de ar comprimido'), o vaso expande-se absorvendo energia mecânica; na diástole (~0,5 s), as fibras de elastina retraem-se passivamente mantendo a perfusão contínua para as coronárias e tecidos periféricos (mantendo a PAD a ~80 mmHg).",
    "distractorAnalysis": [
      "Opção B confunde parede elástica passiva com contração muscular voluntária somática do músculo esquelético.",
      "Opção C impediria a perfusão diastólica dos tecidos que é contínua e vital.",
      "Opção D é biologicamente absurda."
    ],
    "nursingApplication": "Com o envelhecimento e a arteriosclerose, a aorta perde elastina e deposita colagénio rígido e cálcio: o efeito Windkessel deteriora-se. A aorta perde complacência, resultando na Hipertensão Sistólica Isolada do Idoso (PAS > 160 mmHg com PAD normal ou baixa < 70 mmHg e pressão de pulso alargada), quadro que o enfermeiro vigia estreitamente quanto ao risco de AVC."
  },
  {
    "id": 4025,
    "topicId": 4,
    "question": "A Pressão Arterial Média (PAM) é o parâmetro hemodinâmico de excelência que traduz a pressão de perfusão contínua aos tecidos biológicos. Como se calcula de forma fidedigna a PAM a partir da Pressão Sistólica (PAS) e Diastólica (PAD) em repouso?",
    "options": [
      "PAM = PAD + 1/3 (PAS - PAD) [ou PAM = (2 · PAD + PAS) / 3], refletindo o facto de o ciclo cardíaco passar aproximadamente dois terços do tempo total em diástole.",
      "PAM = (PAS + PAD) / 2, sendo a média aritmética simples clássica.",
      "PAM = PAS · PAD · 0,01.",
      "PAM = PAS - PAD exclusivamente."
    ],
    "correctIndex": 0,
    "explanation": "Na fisiologia cardiovascular normal em repouso (frequência cardíaca de ~75 bpm), o período de sístole dura cerca de um terço do ciclo cardíaco (~0,27 s) e o período de diástole dura cerca de dois terços (~0,53 s). Por isso, a Pressão Arterial Média é uma média ponderada no tempo fortemente desviada para o valor diastólico: PAM = PAD + (PAS - PAD)/3 = (2 · PAD + PAS)/3. Por exemplo, para uma PA de 120/80 mmHg: PAM = 80 + (40/3) ≈ 93,3 mmHg.",
    "distractorAnalysis": [
      "Opção B seria válida apenas se a sístole e a diástole tivessem exatamente a mesma duração temporal (o que só ocorre em taquicardias extremas).",
      "Opção C propõe uma multiplicação adimensional sem lógica de grandezas de pressão.",
      "Opção D define a Pressão de Pulso ou Pressão Diferencial (PP = PAS - PAD)."
    ],
    "nursingApplication": "Nas Unidades de Cuidados Intensivos e Urgência, a titulação de drogas vasoativas (como noradrenalina ou vasopressina) é norteada primordialmente pelo valor da PAM: o enfermeiro ajusta a perfusão para manter uma PAM mínima de 65 mmHg, limiar biofísico comprovado abaixo do qual a autorregulação renal e cerebral colapsa com choque distributivo e falência multiorgânica."
  },
  {
    "id": 4026,
    "topicId": 4,
    "question": "O fenómeno patológico de 'Roubo Subclávio' (subclavian steal syndrome) ilustra a inversão hemodinâmica do sentido de escoamento do sangue provocada por gradientes anómalos de pressão. O que ocorre biofisicamente nesta síndrome?",
    "options": [
      "Uma estenose severa ou oclusão na origem da artéria subclávia proximal gera uma queda de pressão a jusante; durante o esforço do braço, a vasodilatação local reduz ainda mais a pressão, fazendo com que o sangue desça em sentido retrógrado pela artéria vertebral ipsilateral vindo do cérebro para alimentar o braço, provocando isquemia cerebral transitória.",
      "O coração para de bater e o sangue é sugado pelos pulmões.",
      "A subclávia rompe espontaneamente e verte sangue para dentro do estômago.",
      "O sangue transforma-se em linfa devido à falta de pulso radial."
    ],
    "correctIndex": 0,
    "explanation": "Os fluidos circulam sempre da região de maior pressão hidrostática para a de menor pressão (ΔP = P_alta - P_baixa). Numa oclusão da artéria subclávia antes da emergência da artéria vertebral, a pressão no leito arterial do braço cai drasticamente. Pelo polígono de Willis no crânio, a artéria basilar/cerebral tem pressão superior à da subclávia distal estenosada: estabelece-se um gradiente pressórico retrógrado, invertendo o fluxo da artéria vertebral que passa a 'roubar' sangue do encéfalo para irrigar o membro superior em movimento.",
    "distractorAnalysis": [
      "Opção B é absurda; o coração continua a funcionar normalmente no mediastino.",
      "Opção C descreveria uma fístula gastrovascular inexistente no topo do tórax.",
      "Opção D inventa uma transmutação hematológica desprovida de realidade biológica."
    ],
    "nursingApplication": "O enfermeiro deteta precocemente a síndrome do roubo subclávio através da medição comparativa da pressão arterial em AMBOS os braços: uma discrepância superior a 20 mmHg na PAS entre o braço direito e o esquerdo, associada a tonturas ou síncope quando o doente mobiliza o braço afetado, exige comunicação médica imediata."
  },
  {
    "id": 4027,
    "topicId": 4,
    "question": "A pressão osmótica (oncótica ou coloidosmótica, π) exercida pelas proteínas plasmáticas (especialmente a albumina) é de cerca de 25 a 28 mmHg no capilar. Na biofísica da microcirculação, qual é o papel desta pressão na 'Equação de Starling' para a filtração e reabsorção transcapilar?",
    "options": [
      "Atua como uma força osmótica que puxa e retém a água no interior do lúmen capilar, opondo-se à filtração provocada pela pressão hidrostática capilar (P_c).",
      "Empurra ativamente o sangue para fora dos vasos em direção à pele.",
      "Provoca a coagulação imediata de todos os capilares sistémicos.",
      "Elimina a necessidade de circulação linfática no organismo."
    ],
    "correctIndex": 0,
    "explanation": "Pela Equação de Starling, o fluxo de líquido transendotelial é dado por J_v = K_f · [(P_c - P_if) - σ(π_c - π_if)]. Enquanto a pressão hidrostática capilar (P_c ≈ 32 mmHg na extremidade arteriolar e ~15 mmHg na extremidade venular) empurra a água para o espaço intersticial (filtração), a pressão coloidosmótica do plasma (π_c ≈ 28 mmHg), gerada pelas macromoléculas impermeáveis de albumina, suga a água de volta para a corrente sanguínea (reabsorção).",
    "distractorAnalysis": [
      "Opção B descreve a ação da pressão hidrostática capilar, não da pressão oncótica de atração osmótica.",
      "Opção C confunde osmorregulação com a cascata de coagulação da trombina e fibrina.",
      "Opção D ignora a função vital do sistema linfático, que drena os 2 a 4 litros diários de excesso fisiológico de filtração líquida."
    ],
    "nursingApplication": "Em doentes com queimaduras extensas, desnutrição proteico-calórica severa ou síndrome nefrótica (onde a concentração de albumina sérica cai de 4,5 g/dL para <2 g/dL), a pressão oncótica capilar despenca. Sem força de retenção intravascular, a água extravasa massivamente para o interstício, gerando edema periférico anasarca e ascite, que o enfermeiro vigia através de balanços hídricos rigorosos e administração de albumina humana concentrada."
  },
  {
    "id": 4028,
    "topicId": 4,
    "question": "Num doente em decúbito dorsal horizontal na cama, a pressão arterial na aorta, nas artérias carótidas e na artéria pediosa dorsal do pé é praticamente a mesma (~100 mmHg). Contudo, quando o doente se coloca subitamente de pé em posição bípede vertical, o que acontece à pressão hidrostática na artéria do pé?",
    "options": [
      "Eleva-se para cerca de 180 a 200 mmHg, devido à adição da coluna hidrostática líquida vertical entre o coração e o pé (ΔP = ρ · g · h ≈ +80 a +100 mmHg).",
      "Cai para zero Newtons porque a gravidade impede o sangue de descer às pernas.",
      "Permanece rigorosamente a 100 mmHg sem qualquer variação física.",
      "Inverte a polaridade elétrica e torna-se vácuo arterial."
    ],
    "correctIndex": 0,
    "explanation": "Na postura ereta bípede, a gravidade atua sobre toda a coluna de sangue: a distância vertical do coração aos pés num adulto de estatura média é de aproximadamente 1,2 a 1,3 metros. Essa coluna hidrostática gera um acréscimo pressórico de cerca de 90 a 100 mmHg (ΔP = ρ · g · h). Assim, a pressão arterial média nos pés passa de ~100 mmHg para quase 200 mmHg. Inversamente, na cabeça (cerca de 40 a 50 cm acima do coração), a pressão cai para cerca de 60 a 70 mmHg.",
    "distractorAnalysis": [
      "Opção B viola as leis da hidrostática; o peso da coluna de fluido aumenta a pressão nas zonas inferiores.",
      "Opção C só ocorreria em ambiente de microgravidade no espaço sideral.",
      "Opção D é uma formulação fantasiosa sem sentido clínico."
    ],
    "nursingApplication": "O aumento colossal da pressão hidrostática nas extremidades inferiores na bipedestação dilata as veias das pernas (represando até 500 mL de sangue), o que pode reduzir temporariamente o retorno venoso ao coração. Se o reflexo barorrecetor falhar, ocorre 'Hipotensão Ortostática' e síncope: o enfermeiro previne acidentes sentando o doente na beira da cama com os pés apoiados durante alguns minutos antes de o colocar em pé."
  },
  {
    "id": 4029,
    "topicId": 4,
    "question": "A formação de Edema agudo nos membros inferiores de um doente com Insuficiência Cardíaca Congestiva (ICC) direita resulta primariamente de qual perturbação no equilíbrio de Starling?",
    "options": [
      "Aumento acentuado da Pressão Hidrostática Venosa e Capilar (P_c), decorrente da incapacidade do ventrículo direito de ejetar o retorno venoso, provocando extravasamento excessivo de líquido para o espaço intersticial que ultrapassa a capacidade de drenagem linfática.",
      "Aumento da pressão coloidosmótica do plasma para 200 mmHg.",
      "Diminuição da permeabilidade do endotélio a zero.",
      "Transformação das células musculares em esponjas de ar comprimido."
    ],
    "correctIndex": 0,
    "explanation": "Na falência ventricular direita, o sangue acumula-se a montante no átrio direito e veias cavas: a Pressão Venosa Central (PVC) eleva-se de valores fisiológicos (2 a 6 mmHg) para mais de 15 a 20 mmHg. Essa hipertensão venosa transmite-se retrogradamente até à extremidade venular dos capilares periféricos, aumentando a pressão hidrostática capilar P_c ao longo de todo o leito. A filtração supera largamente a reabsorção e a capacidade de transporte dos vasos linfáticos, acumulando fluido no interstício (edema depressível / com fóvea nos membros inferiores).",
    "distractorAnalysis": [
      "Opção B causaria reabsorção excessiva de água para dentro dos vasos, prevenindo o edema em vez de provocá-lo.",
      "Opção C impediria a passagem de líquido transvascular.",
      "Opção D é uma descrição sem sentido biomédico."
    ],
    "nursingApplication": "Na avaliação diária de enfermagem ao doente com ICC, o enfermeiro pesquisa ativamente o sinal de Godet ou fóvea (compressão digital firme contra a face anterior da tíbia por 5 segundos: a persistência de uma depressão confirma a presença de edema por excesso de pressão hidrostática capilar), pesa o doente em jejum e monitoriza o balanço hídrico durante a terapêutica diurética com furosemida."
  },
  {
    "id": 4030,
    "topicId": 4,
    "question": "Nas artérias coronárias que irrigam o músculo cardíaco (miocárdio do ventrículo esquerdo), qual é a peculiaridade biofísica única do seu ciclo de perfusão hidrodinâmica em relação ao restante corpo?",
    "options": [
      "Aproximadamente 70% a 80% do fluxo sanguíneo coronário para o ventrículo esquerdo ocorre durante a DIÁSTOLE, porque durante a sístole a potente contração mecânica do miocárdio comprime os vasos intramurais gerando pressões teciduais que superam a pressão aórtica e ocluem o fluxo coronário.",
      "O fluxo coronário ocorre exclusivamente no pico sistólico a 200 km/h.",
      "As coronárias recebem sangue apenas quando o doente está em apneia voluntária.",
      "Não existe fluxo sanguíneo nas coronárias, sendo o miocárdio nutrido diretamente pelo sangue contido na cavidade ventricular."
    ],
    "correctIndex": 0,
    "explanation": "Na maioria dos órgãos da economia, o pico de perfusão coincide com a sístole. No ventrículo esquerdo, contudo, a sístole miocárdica desenvolve pressões intramurais enormes que comprimem mecanicamente as artérias coronárias subendocárdicas (efeito de garrote mecânico extravascular), colapsando-as e reduzindo o fluxo a valores mínimos. Quando o miocárdio relaxa na DIÁSTOLE, a compressão tecidual cessa, e o sangue flui livremente para as coronárias sob a pressão aórtica diastólica residual.",
    "distractorAnalysis": [
      "Opção B descreve o comportamento de artérias periféricas convencionais (como a renal ou cerebral), não das coronárias intramurais esquerdas.",
      "Opção C é fisiologicamente infundada.",
      "Opção D ignora a espessura da parede miocárdica (que excede a capacidade de difusão simples transendotelial de ~100 μm)."
    ],
    "nursingApplication": "Compreender que o coração esquerdo só se nutre na diástole elucida por que a taquicardia severa (ex: FC > 140 bpm num doente coronário) é tão perigosa: a taquicardia encurta desproporcionalmente o tempo de diástole em cada minuto, reduzindo o tempo de perfusão miocárdica e precipitando isquemia aguda (angina de peito ou enfarte agudo do miocárdio). O enfermeiro reconhece esta urgência administrando betabloqueadores prescritos para desacelerar a FC."
  },
  {
    "id": 4031,
    "topicId": 4,
    "question": "O manómetro mecânico do esfigmomanómetro aneroide utilizado por enfermeiros na avaliação da pressão arterial baseia o seu funcionamento físico em qual transdutor mecânico de pressão?",
    "options": [
      "Numa cápsula metálica corrugada flexível de paredes finas selada a vácuo (Cápsula de Vidie / Bourdon) que se deforma elasticamente sob a pressão do ar, transmitindo o movimento a um ponteiro através de um sistema de engrenagens e alavancas.",
      "Num sensor nuclear de decaimento de carbono-14.",
      "Num tubo de mercúrio líquido que necessita de ser agitado como um termómetro.",
      "Numa turbina eólica miniaturizada acionada pela respiração do profissional."
    ],
    "correctIndex": 0,
    "explanation": "Os esfigmomanómetros aneroides (do grego 'sem líquido') não usam mercúrio. O seu núcleo sensor é uma cápsula metálica elástica de fole (cápsula de Vidie): a pressão do ar proveniente da braçadeira entra no compartimento e deforma a parede metálica de acordo com a Lei de Hooke para membranas flexíveis. Um sistema de alavancas de amplificação e rodas dentadas converte essa microdeformação na rotação angular precisa do ponteiro do mostrador graduado em milímetros de mercúrio (mmHg).",
    "distractorAnalysis": [
      "Opção B mistura instrumentos médicos com métodos de datação radiométrica arqueológica.",
      "Opção C descreve o esfigmomanómetro de coluna de mercúrio clássico (descontinuado em hospitais por razões de toxicidade ambiental).",
      "Opção D é uma afirmação sem base na engenharia biomédica."
    ],
    "nursingApplication": "Ao contrário das colunas de mercúrio calibradas pela própria gravidade invariável, os manómetros aneroides sofrem descalibração mecânica fácil se sofrerem quedas ou pancadas na enfermaria. O enfermeiro deve verificar se o ponteiro assenta rigorosamente no zero quando a braçadeira está completamente vazia e exigir a calibração periódica do aparelho pelo serviço de electromedicina."
  },
  {
    "id": 4032,
    "topicId": 4,
    "question": "Na circulação pulmonar (pequena circulação), as pressões hidrostáticas normais são muito inferiores às da circulação sistémica (Pressão da Artéria Pulmonar média ≈ 15 mmHg vs PAM sistémica ≈ 95 mmHg). Qual é a razão biofísica e o benefício fisiológico dessa baixa pressão?",
    "options": [
      "A vasculatura pulmonar apresenta resistência vascular extremamente baixa devido a vasos muito curtos, de grande diâmetro e altamente complacentes; a baixa pressão capilar pulmonar (~7 a 8 mmHg) é crucial para evitar que a filtração de Starling supere a pressão oncótica plasmática, prevenindo o Edema Pulmonar agudo nos alvéolos.",
      "A circulação pulmonar é de baixa pressão porque os pulmões não necessitam de receber sangue oxigenado.",
      "A pressão é baixa porque a gravidade é 10 vezes menor dentro da cavidade torácica.",
      "A baixa pressão deve-se ao facto de o sangue nos pulmões ser composto unicamente por gás vaporizado."
    ],
    "correctIndex": 0,
    "explanation": "O leito vascular pulmonar recebe 100% do mesmo débito cardíaco que a circulação sistémica (~5 L/min), mas opera com uma Resistência Vascular Pulmonar (RVP) cerca de 6 a 10 vezes menor que a sistémica. Isto é vital para a hematose: a pressão hidrostática no capilar alveolar (P_c ≈ 7 mmHg) é mantida muito abaixo da pressão oncótica plasmática (π_c ≈ 28 mmHg). Deste modo, existe uma força de sucção contínua que mantém os alvéolos secos e livres de líquido para permitir a difusão gasosa de O₂ e CO₂.",
    "distractorAnalysis": [
      "Opção B confunde a hematose com ausência de perfusão celular.",
      "Opção C nega o valor uniforme da aceleração da gravidade terrestre no corpo humano.",
      "Opção D é um disparate; o sangue é um líquido aquoso incompressível em qualquer vaso."
    ],
    "nursingApplication": "Quando a pressão no ventrículo esquerdo se eleva patologicamente (enfarte agudo, estenose mitral severa), a pressão retrograda para os capilares pulmonares: se a pressão capilar pulmonar (PCP) ultrapassar a pressão oncótica (~28 mmHg), o líquido inunda os alvéolos em minutos (Edema Agudo do Pulmão). O enfermeiro identifica a expectoração rosada espumosa característica, hipoxemia severa e ortopneia, posicionando o doente sentado com pernas pendentes para diminuir o retorno venoso."
  },
  {
    "id": 4033,
    "topicId": 4,
    "question": "O fenómeno de 'Cavitação' em sistemas de circulação de fluidos ocorre quando a pressão local do líquido cai abaixo de qual parâmetro físico?",
    "options": [
      "Abaixo da Pressão de Vapor de Saturação do líquido à temperatura do sistema, levando à vaporização espontânea local com formação de microbolhas de gás que colapsam violentamente gerando ondas de choque destrutivas.",
      "Abaixo da pressão gravitacional de Marte.",
      "Abaixo da temperatura de congelamento do nitrogénio líquido.",
      "Abaixo de zero Newtons por centímetro quadrado."
    ],
    "correctIndex": 0,
    "explanation": "A cavitação é um fenómeno hidrodinâmico destrutivo: quando um líquido em escoamento a alta velocidade sofre uma aceleração brutal (por exemplo, na borda de um orifício estenosado ou em próteses valvulares cardíacas mecânicas), a pressão estática lateral pode descer momentaneamente abaixo da pressão de vapor do líquido (à temperatura corporal de 37 °C, a pressão de vapor da água é de ~47 mmHg). O líquido entra em ebulição local a frio formando bolhas gasosas de vapor que, ao entrarem em zonas de maior pressão, implodem violentamente gerando picos pressóricos de milhares de atmosferas que laceram hemácias e tecidos.",
    "distractorAnalysis": [
      "Opção B e C introduzem grandezas astrofísicas e criogénicas desconectadas da termodinâmica de fluidos corporais.",
      "Opção D confunde pressão relativa com escalas absolutas de tensão mecânica."
    ],
    "nursingApplication": "Em doentes portadores de próteses valvulares cardíacas mecânicas antigas de alto gradiente, microfenómenos de cavitação nas margens de fecho dos folhetos mecânicos são responsáveis por hemólise intravascular mecânica crónica (anemia hemolítica traumática com esquizócitos no sangue periférico). O enfermeiro monitoriza níveis de hemoglobina, icterícia e colúria urinária."
  },
  {
    "id": 4034,
    "topicId": 4,
    "question": "Qual é a definição de 'Pressão de Pulso' (ou Pressão Diferencial) e o que reflete primariamente a sua magnitude hemodinâmica?",
    "options": [
      "É a diferença aritmética entre a Pressão Arterial Sistólica e a Diastólica (PP = PAS - PAD); reflete primariamente o volume sistólico ejetado pelo ventrículo esquerdo e a rigidez elástica (complacência inversa) das grandes artérias.",
      "É a soma de todas as pulsações por minuto expressa em Hertz.",
      "É a média do hematócrito dividido pela frequência cardíaca.",
      "É a pressão exercida pelo polegar do enfermeiro sobre a artéria radial."
    ],
    "correctIndex": 0,
    "explanation": "A Pressão de Pulso (Pulse Pressure, PP) é calculada por PP = PAS - PAD. Numa pessoa jovem saudável com PA de 120/80 mmHg, a PP é de 40 mmHg. A sua magnitude depende de dois fatores biomecânicos principais: 1) O volume de ejeção sistólica (quanto maior o volume ejetado subitamente na aorta, maior a elevação da PAS); 2) A complacência aórtica (quanto mais rígida a parede aórtica, menor a sua capacidade de acomodação elástica e maior o pico pressórico gerado).",
    "distractorAnalysis": [
      "Opção B confunde pressão (medida em mmHg) com frequência de batimentos cardíacos (bpm ou Hz).",
      "Opção C propõe uma operação inventada entre variáveis laboratoriais e temporais.",
      "Opção D descreve a palpação manual externa do pulso radial, não a grandeza hemodinâmica."
    ],
    "nursingApplication": "O valor da Pressão de Pulso é um sinal vital precioso na triagem de enfermagem: uma PP estreitada (<25-30 mmHg, como numa PA de 90/70 mmHg) sinaliza choque hipovolémico iminente, insuficiência cardíaca grave ou tamponamento cardíaco; uma PP muito alargada (>60-80 mmHg, como 160/60 mmHg) sugere regurgitação aórtica severa ou arteriosclerose aórtica avançada."
  },
  {
    "id": 4035,
    "topicId": 4,
    "question": "O fenómeno biofísico de 'Aderência Endotelial' ou condição de não-deslizamento (no-slip condition) no escoamento laminar de fluidos viscosos estabelece que:",
    "options": [
      "A camada microscópica infinitesimal de fluido que está em contacto direto com a superfície interna da parede do vaso possui velocidade rigorosamente nula (v = 0) relativamente à parede.",
      "O fluido desliza livremente pela parede sem qualquer atrito ou atração molecular.",
      "A velocidade do fluido é máxima junto à parede e nula no centro do tubo.",
      "As células do sangue aderem e fundem-se no endotélio em cada sístole de forma irreversível."
    ],
    "correctIndex": 0,
    "explanation": "A condição de não-deslizamento é um princípio basilar da mecânica dos fluidos viscosos: devido às forças de atração intermolecular (adesão) entre as moléculas do fluido e a superfície sólida rugosa da parede endotelial, a velocidade da primeira camada molecular de fluido em contacto com o vaso é zero (v = 0). As camadas adjacentes de fluido vão escorregando umas sobre as outras com atrito viscoso interno, gerando o perfil parabólico com velocidade máxima no eixo central.",
    "distractorAnalysis": [
      "Opção B descreve o comportamento de fluidos ideais sem viscosidade ou superfícies super-hidrofóbicas teóricas perfeitas.",
      "Opção C inverte completamente a hidrodinâmica clássica do perfil de Poiseuille.",
      "Opção D descreveria a formação instantânea de trombos estáticos oclusivos em todos os vasos."
    ],
    "nursingApplication": "A condição de não-deslizamento explica por que as bactérias formadoras de biofilme (como Staphylococcus aureus em cateteres vasculares) conseguem colonizar a parede interna de tubos de teflon e poliuretano mesmo sob caudais rápidos de fluidoterapia: junto à parede do cateter, a velocidade do fluido é praticamente zero, permitindo a adesão bacteriana sem ser arrastada pelo fluxo central."
  },
  {
    "id": 4036,
    "topicId": 4,
    "question": "Na administração de Nutrição Parentérica Total (NPT) com alta osmolaridade (>800-900 mOsm/L), porque é que a infusão deve ser feita obrigatoriamente através de um Cateter Venoso Central (CVC) posicionado na Veia Cava Superior e NUNCA através de uma veia periférica da mão ou braço?",
    "options": [
      "Porque a veia cava superior possui um caudal sanguíneo gigantesco (~2000 a 2500 mL/min), diluindo a solução hiperosmolar em escassos segundos e impedindo lesão química osmótica endotelial e tromboflebite extensa (que ocorreria no baixo caudal de ~20-50 mL/min de uma veia periférica).",
      "Porque a veia cava superior é a única veia do corpo que não contém sangue vivo.",
      "Porque o plástico do cateter derreteria se entrasse em veias do braço.",
      "Porque os nutrientes da NPT só são absorvidos se caírem diretamente no átrio esquerdo."
    ],
    "correctIndex": 0,
    "explanation": "A diluição hidrodinâmica rápida depende diretamente do caudal volumétrico de sangue disponível no vaso receptor (Q = A · v). Nas veias periféricas do antebraço (como a veia basílica ou cefálica), o diâmetro é pequeno (~2-4 mm) e o fluxo é modesto (~20 a 50 mL/min): uma solução hiperosmolar desidrata osmoticamente as células endoteliais da parede vascular por contacto concentrado mantido, desencadeando flebite química severa, necrose parietal e trombose. Na veia cava superior (diâmetro ~20 mm, caudal de ~2500 mL/min), a diluição é instantânea e inócua.",
    "distractorAnalysis": [
      "Opção B é anatomicamente absurda; a veia cava é o tronco venoso mestre do corpo.",
      "Opção C confunde resistência química do poliuretano com temperatura corporal.",
      "Opção D contém um erro crasso de rota anatómica (a veia cava desagua no átrio DIREITO, não esquerdo)."
    ],
    "nursingApplication": "A verificação da localização da ponta do cateter venoso central (na junção cavo-atrial por radiografia de tórax) antes de iniciar a infusão de NPT é um procedimento de segurança obrigatório em enfermagem para prevenir tromboses maciças e necrose da parede vascular."
  },
  {
    "id": 4037,
    "topicId": 4,
    "question": "Durante a diálise renal em doentes com insuficiência renal crónica terminal, a criação cirúrgica de uma 'Fístula Arteriovenosa' (FAV, ex: radiocefálica) conecta diretamente uma artéria a uma veia superficial do antebraço. Qual é a repercussão hidrodinâmica local na parede da veia ao longo das semanas seguintes (maturação da FAV)?",
    "options": [
      "A veia é exposta a pressões elevadas e fluxos turbulentos pulsáteis intensos com elevadas tensões de cisalhamento endotelial, sofrendo remodelação estrutural ('arterialização da veia') com hipertrofia da camada média e dilatação massiva do calibre, permitindo punções repetidas com agulhas de grande calibre (15G-16G).",
      "A veia encolhe até desaparecer e transforma-se num nervo periférico.",
      "O sangue para de circular no antebraço e a mão necrosa invariavelmente.",
      "A fístula anula a pressão arterial em todo o sistema cardiovascular humano."
    ],
    "correctIndex": 0,
    "explanation": "Normalmente, as veias transportam sangue sob pressões muito baixas (~5 a 10 mmHg) e escoamento laminar lento. Ao ser anastomosada diretamente à artéria radial (pressão de ~100 mmHg), a veia cefálica é submetida a um caudal prodigioso (>500 a 1000 mL/min). A elevada tensão de cisalhamento tangencial (shear stress) induz a síntese endotelial contínua de óxido nítrico e fatores tróficos: em 6 a 8 semanas, a veia dilata-se amplamente e as suas paredes tornam-se espessas e resistentes como artérias musculares ('maturação da fístula').",
    "distractorAnalysis": [
      "Opção B confunde hipertrofia vascular adaptativa com metaplasia tecidual impossível.",
      "Opção C é uma complicação rara grave de isquemia distal ('roubo da fístula'), mas não o resultado normal esperado da cirurgia.",
      "Opção D violaria a biofísica hemodinâmica global."
    ],
    "nursingApplication": "O enfermeiro avalia diariamente a permeabilidade da FAV através da palpação do 'Thrill' (sensação táctil de vibração contínua de turbulência na veia) e auscultação do 'Bruit' (sopro vascular audível com estetoscópio). A ausência súbita de thrill ou bruit indica trombose aguda da fístula, requerendo desobstrução de urgência por cirurgia vascular."
  },
  {
    "id": 4038,
    "topicId": 4,
    "question": "Na reoxigenação de tecidos e perfusão da microcirculação, por que razão uma solução de Cristalóides (como o Soro Fisiológico a 0,9%) administrada por via endovenosa não permanece integralmente no compartimento intravascular após a infusão?",
    "options": [
      "Porque o endotélio capilar é livremente permeável à água e a pequenos iões eletrólitos (Na⁺, Cl⁻); seguindo o equilíbrio de Starling e a partição dos volumes corporais, cerca de 75% a 80% do volume infundido difunde-se para o espaço intersticial extravascular ao fim de 30 a 60 minutos.",
      "Porque o soro fisiológico é consumido instantaneamente pelas mitocôndrias como combustível celular.",
      "Porque o sal a 0,9% evapora imediatamente através da transpiração pulmonar.",
      "Porque as hemácias engolem todo o líquido por fagocitose."
    ],
    "correctIndex": 0,
    "explanation": "A parede capilar atua como uma membrana semipermeável que retém proteínas (coeficiente de reflexão da albumina σ ≈ 0,95), mas é fenestrada para pequenas moléculas (iões e água líquida, σ ≈ 0). O cloreto de sódio a 0,9% distribui-se uniformemente por todo o compartimento de líquido extracelular (LEC), que é composto por 20% de plasma intravascular e 80% de líquido intersticial. Portanto, de cada 1000 mL de soro fisiológico infundido, apenas cerca de 200 a 250 mL permanecem no interior dos vasos após a redistribuição.",
    "distractorAnalysis": [
      "Opção B confunde solução salina eletrolítica com nutrientes energéticos metabolizáveis como a glicose.",
      "Opção C violaria os princípios de evaporação e equilíbrio térmico fisiológico.",
      "Opção D confunde glóbulos vermelhos com macrófagos e inventa fagocitose de líquidos infinitos."
    ],
    "nursingApplication": "Na reanimação de um doente desidratado ou chocado, o enfermeiro sabe que para restaurar um défice intravascular de 500 mL são necessários cerca de 1500 a 2000 mL de cristalóides por causa dessa redistribuição para o interstício, devendo vigiar o aparecimento de crepitações pulmonares basais que indiquem sobrecarga volémica intersticial."
  },
  {
    "id": 4039,
    "topicId": 4,
    "question": "O gradiente de pressão hidrodinâmica (ΔP) ao longo de um vaso sanguíneo cilíndrico reto decorre da dissipação de energia mecânica por atrito viscoso. Em termos biofísicos, como se expressa a conservação de energia num fluido viscoso real?",
    "options": [
      "A energia total mecânica diminui progressivamente ao longo do sentido do escoamento (P₁ > P₂), sendo a perda de carga hidráulica (head loss) convertida irreversivelmente em calor dissipado no fluido e tecidos circundantes.",
      "A pressão aumenta continuamente à medida que o fluido avança sem necessidade de bomba.",
      "A energia do fluido mantém-se 100% mecânica perpétua sem qualquer aquecimento ou perda.",
      "O fluido acelera espontaneamente até à velocidade da luz."
    ],
    "correctIndex": 0,
    "explanation": "Ao contrário dos fluidos ideais do Teorema de Bernoulli (onde a energia mecânica seria conservada indefinidamente), os fluidos reais possuem viscosidade interna (atrito entre lâminas de fluido e com a parede vascular). Esse atrito dissipa energia mecânica sob a forma de microcalor térmico irreversível, resultando numa queda contínua da pressão no sentido do fluxo (gradiente pressórico ΔP = P_entrada - P_saída > 0). É esta perda contínua que obriga o coração a bombear sem cessar ao longo de toda a vida.",
    "distractorAnalysis": [
      "Opção B violaria o Segundo Princípio da Termodinâmica gerando trabalho do nada.",
      "Opção C ignora a viscosidade universal presente em todos os fluidos biológicos reais.",
      "Opção D viola a Teoria da Relatividade Restrita de Einstein."
    ],
    "nursingApplication": "A perda de carga hidrodinâmica explica por que as artérias periféricas mais distais (como as artérias digitais dos pés e mãos) são as primeiras a sofrer isquemia e necrose em estados de choque ou hipotermia: a energia do fluxo esgota-se antes de conseguir vencer a resistência dos vasos distais, orientando o enfermeiro a monitorizar o tempo de preenchimento capilar distal."
  },
  {
    "id": 4040,
    "topicId": 4,
    "question": "A Pressão Venosa Central (PVC) é medida clinicamente na veia cava superior ou átrio direito através de um cateter venoso central conectado a uma coluna de água ou transdutor de pressão eletrónico. Qual é o valor fisiológico normal da PVC num adulto em decúbito dorsal e o que reflete primariamente?",
    "options": [
      "Normal de 2 a 6 mmHg (ou ~3 a 8 cm H₂O); reflete primariamente a pré-carga do ventrículo direito e a competência do coração para lidar com a volemia circulante de retorno.",
      "Normal de 120 a 140 mmHg, idêntica à pressão aórtica sistólica.",
      "Normal de -50 mmHg em todas as fases da respiração.",
      "Zero rigoroso sem qualquer flutuação temporal."
    ],
    "correctIndex": 0,
    "explanation": "A PVC representa a pressão de enchimento do átrio e ventrículo direitos no final da diástole (pré-carga cardíaca direita). Os valores normais em adultos saudáveis situam-se entre 2 e 6 mmHg (ou 3 a 8 cm H₂O, sabendo que 1 mmHg ≈ 1,36 cm H₂O). Valores inferiores a 2 mmHg indicam hipovolemia severa (desidratação, choque hemorrágico); valores superiores a 10-12 mmHg indicam sobrecarga hídrica, insuficiência cardíaca congestiva ou tamponamento cardíaco.",
    "distractorAnalysis": [
      "Opção B confunde a pressão venosa com a pressão arterial sistólica do circuito sistémico de alta pressão.",
      "Opção C propõe uma pressão subatmosférica letal que colapsaria completamente as câmaras cardíacas direitas.",
      "Opção D ignora a fisiologia da circulação venosa que exige uma pressão motora positiva residual para encher o coração."
    ],
    "nursingApplication": "Na monitorização da PVC por coluna de água em enfermagem, o enfermeiro calibra o nível zero da régua graduada exatamente no ponto flebostático do doente (4.º espaço intercostal na linha média axilar). Um erro de nivelamento de apenas 5 cm para cima ou para baixo altera a leitura em quase 4 mmHg, falseando a decisão médica de administrar mais líquidos ou diuréticos."
  },
  {
    "id": 4041,
    "topicId": 4,
    "question": "Na oxigenoterapia de alto débito, a cânula nasal de alto fluxo (CNAF) aquece e humidifica o gás medicinal antes de o entregar ao doente a fluxos de até 60 L/min. Qual é o fundamento biofísico da regulação da temperatura e viscosidade dos gases neste dispositivo?",
    "options": [
      "Aquece o gás a 37 °C com 100% de humidade relativa, reduzindo o trabalho metabólico respiratório do doente na humidificação e condicionamento do ar e melhorando a depuração mucociliar pelas vias aéreas.",
      "Arrefece o gás a 0 °C para congelar vírus e bactérias na traqueia.",
      "Injeta oxigénio líquido concentrado para queimar as secreções pulmonares.",
      "Transforma o gás num fluido viscoso idêntico ao plasma humano."
    ],
    "correctIndex": 0,
    "explanation": "Quando o ser humano inala ar frio e seco a débitos elevados, a mucosa respiratória gasta uma quantidade massiva de energia térmica e água para aquecer e saturar o gás a 37 °C e 44 mg H₂O/L. O ar seco resseca o muco, imobiliza os cílios respiratórios e induz broncospasmo mecânico. A CNAF entrega gases condicionados na temperatura e humidade exatas do corpo humano, mantendo a reologia ideal das secreções e facilitando a expetoração.",
    "distractorAnalysis": [
      "Opção B causaria hipotermia pulmonar grave e broncospasmo reativo fatal.",
      "Opção C é absurda; o oxigénio líquido causaria queimaduras criogénicas destrutivas imediatas.",
      "Opção D viola a física dos gases ideais administrados na ventilação."
    ],
    "nursingApplication": "A vigilância da CNAF pelo enfermeiro inclui assegurar que o reservatório de água estéril para inalação nunca se esgote e verificar a temperatura na linha aquecida, prevenindo a acumulação de condensado líquido (água no circuito) que poderia ser aspirado acidentalmente pelo doente com risco de asfixia."
  },
  {
    "id": 4042,
    "topicId": 4,
    "question": "Na fisiopatologia do choque hipovolémico, o 'Tempo de Preenchimento Capilar' (TPC) avaliado no leito ungueal de um dedo é um marcador hidrodinâmico vital de perfusão periférica. Qual é o valor fisiológico normal e o que significa um TPC prolongado (>3 segundos)?",
    "options": [
      "O valor fisiológico normal é inferior a 2 segundos; um TPC superior a 3 segundos reflete intensa vasoconstrição arteriolar compensatória com escoamento microvascular lentificado para priorizar a perfusão de órgãos nobres vitais (cérebro e coração).",
      "O normal é de 10 a 15 minutos; tempos rápidos indicam morte celular.",
      "O TPC mede a velocidade de crescimento da lâmina ungueal ao longo do mês.",
      "Um TPC longo significa que o doente tem excesso de água pura no sangue."
    ],
    "correctIndex": 0,
    "explanation": "O teste do preenchimento capilar consiste em comprimir firmemente a polpa digital ou leito ungueal durante 5 segundos (esvaziando o sangue microvascular capilar) e cronometrar o tempo que a pele leva a recuperar a coloração rosada inicial. Em condições normais, a reperfusão capilar ocorre em menos de 2 segundos. Em estados de choque, a resposta simpática induz intensa vasoconstrição adrenérgica na pele e extremidades, diminuindo o fluxo capilar periférico e prolongando o TPC para >3 a 4 segundos.",
    "distractorAnalysis": [
      "Opção B propõe intervalos de tempo aberrantes para a restauração do fluxo capilar.",
      "Opção C confunde a circulação sanguínea imediata com o crescimento biológico crónico da queratina.",
      "Opção D confunde perfusão microvascular com hiper-hidratação simples."
    ],
    "nursingApplication": "O TPC é uma ferramenta de triagem rápida, não-invasiva e de altíssima sensibilidade clínica à cabeceira do doente: um TPC > 3 segundos, associado a extremidades frias e pele mosqueada (livedo reticularis), alerta o enfermeiro para hipoperfusão sistémica grave antes mesmo da queda franca da pressão arterial medida na braçadeira (choque compensado)."
  },
  {
    "id": 4043,
    "topicId": 4,
    "question": "O gradiente de pressão transvalvular através de uma válvula aórtica estenosada é estimado na prática cardiológica através da 'Equação de Bernoulli Modificada': ΔP = 4 · v², onde v é a velocidade máxima do jato de sangue em m/s medida pelo Ecocardiograma Doppler. Se a velocidade máxima do jato na estenose for de 4 m/s, qual é o gradiente de pressão de pico gerado?",
    "options": [
      "64 mmHg (ΔP = 4 · 4² = 4 · 16 = 64 mmHg).",
      "16 mmHg.",
      "8 mmHg.",
      "256 mmHg."
    ],
    "correctIndex": 0,
    "explanation": "A equação simplificada de Bernoulli para ecocardiografia clínica despreza termos menores de atrito e velocidade proximal: ΔP = 1/2 · ρ · v² ≈ 4 · v² (adotando a densidade do sangue em unidades de mmHg). Substituindo v = 4 m/s: ΔP = 4 × (4)² = 4 × 16 = 64 mmHg. Este gradiente representa a sobrecarga de pressão que o ventrículo esquerdo tem de gerar acima da pressão aórtica para conseguir ejetar o sangue através do orifício estenosado estreito.",
    "distractorAnalysis": [
      "Opção B (16 mmHg) esqueceu-se de multiplicar pelo coeficiente biofísico 4 da equação clínica simplificada de Bernoulli.",
      "Opção C (8 mmHg) multiplicou erroneamente a velocidade por 2 em vez de elevar ao quadrado.",
      "Opção D (256 mmHg) elevou ao quadrado o produto (4 × 4)², distorcendo a ordem das operações matemáticas."
    ],
    "nursingApplication": "Um gradiente de pressão aórtica de 64 mmHg classifica a estenose aórtica como severa (>40 mmHg de gradiente médio): o ventrículo esquerdo está submetido a uma sobrecarga pressórica crónica colossal, sofrendo hipertrofia concêntrica. O enfermeiro monitoriza queixas de síncope aos esforços, angina e dispneia, preparando o doente para substituição cirúrgica ou percutânea (TAVI) da válvula."
  },
  {
    "id": 4044,
    "topicId": 4,
    "question": "A manobra de elevação passiva dos membros inferiores (Passive Leg Raising - PLR) a 45° num doente com hipotensão profunda funciona como uma prova de carga hídrica endógena reversível. Qual é o mecanismo biofísico que a fundamenta?",
    "options": [
      "A gravidade mobiliza aproximadamente 300 a 500 mL de sangue venoso represado nas veias de capacitância dos membros inferiores em direção ao coração, aumentando temporariamente a pré-carga do ventrículo direito e o débito cardíaco sem necessidade de infundir fluidos exógenos.",
      "A manobra esvazia o líquido cefalorraquidiano do cérebro para os rins.",
      "A elevação das pernas reduz o peso corporal do doente a zero.",
      "A manobra gera uma corrente magnética que reativa o nó sinusal."
    ],
    "correctIndex": 0,
    "explanation": "Ao elevar passivamente os membros inferiores a 45° com o tronco do doente na horizontal, a coluna de sangue venoso drena caudalmente por gravidade para a veia cava inferior e átrio direito. Isto equivale a uma 'autotransfusão' rápida e instantânea de cerca de 300 a 450 mL de sangue. Se o coração do doente operar na parte ascendente da curva de Frank-Starling (responsivo a fluidos), o volume de ejeção e a pressão arterial sobem temporariamente nos primeiros 60 a 90 segundos; ao baixar as pernas, o efeito reverte-se completamente.",
    "distractorAnalysis": [
      "Opção B confunde a circulação venosa sistémica com a dinâmica do sistema nervoso central.",
      "Opção C viola as leis da massa e gravitação universal.",
      "Opção D inventa mecanismos eletromagnéticos fantasiosos."
    ],
    "nursingApplication": "O teste de elevação passiva das pernas é um dos melhores métodos funcionais aplicados pelo enfermeiro de cuidados intensivos para saber se um doente chocado beneficiará da administração de soros adicionais (evitando a administração deletéria de fluidos a doentes não-responsivos que apenas desenvolveriam edema pulmonar)."
  },
  {
    "id": 4045,
    "topicId": 4,
    "question": "Na terapêutica da Trombose Venosa Profunda (TVP), por que motivo a imobilização prolongada no leito após uma grande cirurgia constitui um dos três fatores fundamentais da Tríade de Virchow para a formação de trombos intravasculares?",
    "options": [
      "Porque a ausência de contrações musculares dos membros inferiores elimina a 'bomba muscular', originando estase venosa profunda com redução drástica da velocidade de escoamento do sangue (v), o que favorece a acumulação local de fatores de coagulação ativados e o contacto de plaquetas com o endotélio.",
      "Porque a imobilização no leito faz o sangue ferver a 100 °C.",
      "Porque os lençóis de algodão emitem radiação que decompõe a heparina do corpo.",
      "Porque o sangue estagnado se transforma espontaneamente em tecido ósseo compacto."
    ],
    "correctIndex": 0,
    "explanation": "A Tríade de Virchow (Rudolf Virchow, 1856) define os três fatores etiológicos da trombose: 1) Estase venosa (lentificação do fluxo); 2) Lesão endotelial; 3) Hipercoagulabilidade. Quando o doente fica imóvel no leito, a falta de bombeamento da fáscia muscular da barriga da perna reduz a velocidade do sangue venoso a valores residuais. A estase elimina a dispersão hidrodinâmica dos fatores de coagulação e a sua neutralização pelo fluxo rápido, permitindo que a trombina e fibrina formem redes que aprisionam eritrócitos (trombo vermelho venoso).",
    "distractorAnalysis": [
      "Opção B é termodinamicamente impossível num organismo vivo.",
      "Opção C é uma fantasia sem suporte físico.",
      "Opção D confunde trombose intravascular com ossificação ectópica patológica."
    ],
    "nursingApplication": "O enfermeiro atua diretamente na prevenção da estase venosa da Tríade de Virchow: estimulação da mobilização precoce no pós-operatório, ensino de exercícios de flexão-extensão ativa dos tornozelos no leito, aplicação rigorosa de meias de compressão elástica graduada e de botas de compressão pneumática intermitente, bem como administração de heparina de baixo peso molecular (HBPM)."
  },
  {
    "id": 4046,
    "topicId": 4,
    "question": "Durante a administração de uma solução por gravidade com um sistema macrogotas padronizado (20 gts/mL), foi prescrito ao doente a infusão de 500 mL de Soro Glicosado a 5% ao longo de 4 horas. Qual é o débito de gotejamento que o enfermeiro deve calibrar manualmente na câmara de gotas?",
    "options": [
      "Aproximadamente 42 gotas por minuto.",
      "100 gotas por minuto.",
      "12 gotas por minuto.",
      "125 gotas por minuto."
    ],
    "correctIndex": 0,
    "explanation": "A fórmula de cálculo de débito em gotas/minuto é: Gotas/min = (Volume em mL × Fator de gotas) / (Tempo em minutos). Substituindo os valores dados: Gotas/min = (500 mL × 20 gotas/mL) / (4 horas × 60 minutos) = 10000 / 240 = 41,66... Arredondando para o número inteiro mais próximo, o enfermeiro calibra o regulador de rolete para 42 gotas por minuto.",
    "distractorAnalysis": [
      "Opção B (100 gts/min) resultaria de uma divisão incorreta do volume por 5 horas ou erro na conversão de tempo.",
      "Opção C (12 gts/min) infundiria o soro em cerca de 14 horas, subdosando gravemente a hidratação do doente.",
      "Opção D (125 gts/min) corresponde ao débito volumétrico em mL/hora (500 mL / 4 h = 125 mL/h), tendo o aluno confundido mL/h com gotas/minuto."
    ],
    "nursingApplication": "O cálculo manual e a titulação rigorosa de gotas/minuto pelo relógio são competências clássicas vitais da prática de enfermagem em contextos onde não existam bombas de infusão elétricas disponíveis, prevenindo quer a hipovolemia por infusão lenta quer a sobrecarga hídrica por desrespeito dos tempos prescritos."
  },
  {
    "id": 4047,
    "topicId": 4,
    "question": "O fenómeno hemodinâmico de 'Hipertensão Renovascular' por estenose da artéria renal ilustra uma resposta sistémica à alteração local da Lei de Poiseuille e do Efeito Venturi. Como reage o rim a este estreitamento arterial?",
    "options": [
      "O estreitamento renal reduz a pressão hidrostática de perfusão a jusante da estenose; o aparelho justa-glomerular interpreta esta queda de pressão local como uma hipovolemia sistémica e secreta maciçamente Renina, desencadeando a cascata Angiotensina II - Aldosterona que produz vasoconstrição sistémica e hipertensão arterial severa.",
      "O rim estenosado desliga a produção de urina e começa a produzir bílis digestiva.",
      "A artéria renal expande-se até atingir o diâmetro da aorta abdominal.",
      "A pressão sistólica corporal cai a zero em menos de 24 horas."
    ],
    "correctIndex": 0,
    "explanation": "Pela Lei de Poiseuille e perda de carga no estreitamento, a estenose mecânica da artéria renal provoca uma queda acentuada na pressão de perfusão intrarrenal. As células justa-glomerulares renais são barorrecetores mecano-sensíveis: ao sentirem baixa pressão hidrostática local, ativam o sistema Renina-Angiotensina-Aldosterona (SRAA). A angiotensina II produz potente vasoconstrição arteriolar generalizada e a aldosterona retém sódio e água nos túbulos, elevando a pressão arterial sistémica em todo o corpo (hipertensão renovascular de Goldblatt).",
    "distractorAnalysis": [
      "Opção B confunde a anatomia e a fisiologia renal com a função hepatocitária.",
      "Opção C é contrária à patologia aterosclerótica ou displasia fibromuscular que estenosa o lúmen vascular.",
      "Opção D descreve colapso circulatório oposto ao quadro clássico de hipertensão refratária grave."
    ],
    "nursingApplication": "Na consulta de enfermagem ou internamento, um doente jovem com hipertensão severa e refratária a múltiplos anti-hipertensores ou um sopro audível no flanco abdominal deve suscitar a suspeita de estenose da artéria renal, cabendo ao enfermeiro registar e encaminhar o achado para ecodoppler arterial das artérias renais."
  },
  {
    "id": 4048,
    "topicId": 4,
    "question": "Na avaliação de doentes com Doença Arterial Periférica (DAP) dos membros inferiores, o enfermeiro utiliza um Doppler vascular portátil para calcular o 'Índice Tornozelo-Braço' (ITB / Ankle-Brachial Index). Como é calculado este índice e qual o seu valor normal?",
    "options": [
      "ITB = Maior Pressão Sistólica no Tornozelo (artéria tibial posterior ou pediosa) / Maior Pressão Sistólica no Braço (artéria braquial); o valor fisiológico normal situa-se entre 0,90 e 1,30.",
      "ITB = Pressão Diastólica do pé dividida pela frequência cardíaca.",
      "ITB = Comprimento da perna em cm dividido pela circunferência do braço.",
      "ITB = Concentração de colesterol no sangue da veia safena."
    ],
    "correctIndex": 0,
    "explanation": "O ITB é o teste de eleição não-invasivo para diagnóstico de insuficiência arterial obstrutiva das pernas. Com uma braçadeira de pressão e sonda de ultrassons Doppler contínuo: mede-se a PAS nas artérias pediosa e tibial posterior de cada perna e nas artérias braquiais de ambos os braços. Em indivíduos saudáveis, a PAS no tornozelo é ligeiramente superior à do braço por reflexão de ondas, pelo que ITB normal varia entre 0,90 e 1,30. Valores inferiores a 0,90 confirmam estenoses arteriais significativas (DAP); valores <0,40 indicam isquemia crítica com risco de amputação.",
    "distractorAnalysis": [
      "Opção B ignora a base de comparação pressórica sistólica do teste hemodinâmico.",
      "Opção C é uma medição antropométrica geométrica que nada avalia sobre a circulação sanguínea.",
      "Opção D é um parâmetro bioquímico laboratorial desconectado da medição física no leito."
    ],
    "nursingApplication": "A medição do ITB pelo enfermeiro é um pré-requisito indispensável de segurança antes de aplicar ligaduras ou meias de compressão elástica no tratamento de úlceras de perna: se o doente tiver um ITB < 0,60 a 0,70, qualquer compressão externa ocluirá o fluxo arterial residual já comprometido, provocando necrose e perda do membro."
  },
  {
    "id": 4049,
    "topicId": 4,
    "question": "O refluxo valvular venoso crónico nos membros inferiores leva ao desenvolvimento de Varizes e Síndrome Pós-Trombótica. Qual é o mecanismo biomecânico subjacente a esta insuficiência?",
    "options": [
      "Incompetência mecânica das válvulas venosas semilunares parietais que perdem a capacidade de coaptação, permitindo o refluxo retrógrado do sangue por gravidade durante a bipedestação, gerando hipertensão venosa ambulatória contínua, estase e dilatação tortuosa da parede vascular.",
      "Calcificação das válvulas que as transforma em rolhas de aço que impedem o sangue de sair do pé.",
      "Aceleração supersónica do fluxo venoso que queima as válvulas por atrito térmico.",
      "Perda de todas as hemácias do sangue que são destruídas pela pressão ambiente."
    ],
    "correctIndex": 0,
    "explanation": "As veias dos membros inferiores possuem válvulas bicúspides que permitem a passagem do sangue apenas em sentido centrípeto/ascendente. Quando a parede da veia dilata por fraqueza hereditária do colagénio ou após lesão trombótica, as cúspides valvulares afastam-se e deixam de vedar. Ao colocar-se de pé, a gravidade faz o sangue refluir inferiormente: a 'bomba muscular' falha, a pressão venosa permanece cronicamente elevada mesmo durante a marcha ('hipertensão venosa ambulatória'), forçando líquido e eritrócitos para a derme com hiperpigmentação ocre e úlceras venosas.",
    "distractorAnalysis": [
      "Opção B descreve uma oclusão total que causaria gangrena aguda em horas, não a insuficiência venosa crónica.",
      "Opção C introduz velocidades aerodinâmicas inexistentes na biologia.",
      "Opção D é uma distorção biológica sem sentido."
    ],
    "nursingApplication": "Na consulta de enfermagem de dermatologia e cuidados a feridas, o enfermeiro atua no epicentro da biofísica da insuficiência venosa: a terapia de compressão elástica multicamadas (gerando pressões controladas de 30 a 40 mmHg no tornozelo) aproxima mecanicamente as paredes das veias dilatadas, restaurando a coaptação valvular, reduzindo o refluxo retrógrado e permitindo a cicatrização das úlceras venosas."
  },
  {
    "id": 4050,
    "topicId": 4,
    "question": "Em doentes ventilados mecanicamente na Unidade de Cuidados Intensivos com pressão positiva expiratória final (PEEP) muito elevada (ex: PEEP > 15 cm H₂O), qual é o efeito hemodinâmico secundário sobre a pré-carga cardíaca e a Pressão Arterial Sistémica?",
    "options": [
      "A elevada pressão positiva intratorácica comprime a veia cava superior e inferior e o átrio direito, reduzindo o retorno venoso (diminui a pré-carga ventricular direita e esquerda), o que culmina na redução do débito cardíaco e queda da pressão arterial (hipotensão iatrogénica).",
      "A PEEP elevada duplica o débito cardíaco porque empurra o sangue com força supersónica para a aorta.",
      "A PEEP elevada transforma o sangue venoso em solução isotónica estéril.",
      "Não ocorre qualquer interação mecânica entre a pressão alveolar nos pulmões e os vasos do mediastino."
    ],
    "correctIndex": 0,
    "explanation": "Na respiração espontânea fisiológica, a inspiração gera pressão pleural subatmosférica (negativa) que atua como uma 'bomba aspirativa' auxiliando o retorno venoso para o tórax. Na ventilação mecânica invasiva sob pressão positiva (especialmente com PEEP elevada), a pressão intratorácica permanece positiva ao longo de todo o ciclo respiratório. Isto comprime as veias cavas e o coração direito, elevando a contrapressão ao retorno venoso. O volume de enchimento diastólico ventricular desaba, provocando queda imediata do débito cardíaco e hipotensão arterial sistémica.",
    "distractorAnalysis": [
      "Opção B afirma o oposto das leis de perfusão e retorno venoso de Guyton.",
      "Opção C é um absurdo hematológico.",
      "Opção D ignora a interação cardiopulmonar direta que ocorre no espaço fechado inextensível do mediastino torácico."
    ],
    "nursingApplication": "Sempre que o médico ou enfermeiro especialista ajusta a PEEP ou a pressão inspiratória no ventilador mecânico em doentes com SDRA (Síndrome de Desconforto Respiratório Agudo), o enfermeiro vigia instantaneamente o monitor hemodinâmico: se ocorrer queda da PA e taquicardia reflexa, pode ser necessária a otimização volémica rápida ou o aumento da perfusão de vasopressores para compensar a perda mecânica de pré-carga."
  },
  {
    "id": 4051,
    "topicId": 4,
    "question": "Na hidrodinâmica circulatória aplicada à enfermagem, em relação a 'equação da continuidade Q = A · v na circulação sistémica', qual é a fundamentação biofísica correta?",
    "options": [
      "em qualquer sistema fechado de fluido incompressível estacionário, o débito volumétrico total (Q) é constante em cada secção transversal, sendo a velocidade (v) inversamente proporcional à área de secção transversal total (A). Como a área de secção transversal somada de todos os capilares sistémicos (~4500 cm²) é cerca de 800 vezes superior à área da aorta (~3 a 4 cm²), a velocidade do sangue cai de 30-40 cm/s na aorta para escassos 0,03 cm/s nos capilares.",
      "O sangue comporta-se como um fluido puramente invisível e sem atrito que viaja a velocidades próximas da luz no interior dos vasos.",
      "Trata-se de um processo onde a viscosidade do sangue é zero absoluto e a densidade é igual à do ar atmosférico rarefeito.",
      "A pressão hidrostática anula instantaneamente todas as leis de conservação de energia e de massa no sistema vascular."
    ],
    "correctIndex": 0,
    "explanation": "Em biofísica circulatória, equação da continuidade Q = A · v na circulação sistémica explica-se pelo facto de que em qualquer sistema fechado de fluido incompressível estacionário, o débito volumétrico total (Q) é constante em cada secção transversal, sendo a velocidade (v) inversamente proporcional à área de secção transversal total (A). Como a área de secção transversal somada de todos os capilares sistémicos (~4500 cm²) é cerca de 800 vezes superior à área da aorta (~3 a 4 cm²), a velocidade do sangue cai de 30-40 cm/s na aorta para escassos 0,03 cm/s nos capilares.",
    "distractorAnalysis": [
      "A primeira opção incorreta atribui ao sangue propriedades físicas fictícias e velocidades relativísticas impossíveis.",
      "A segunda opção incorreta assume viscosidade nula, o que só ocorreria num superfluido hélio quântico a perto de zero Kelvin.",
      "A terceira opção incorreta ignora os princípios fundamentais da conservação de massa e de energia da física clássica."
    ],
    "nursingApplication": "O enfermeiro compreende que a extrema lentidão do sangue nos capilares é uma exigência biofísica vital para permitir o tempo necessário à difusão transcapilar de oxigénio, glicose e dióxido de carbono."
  },
  {
    "id": 4052,
    "topicId": 4,
    "question": "Na avaliação clínica e administração de terapêutica por um enfermeiro, como se manifesta a aplicação prática de 'equação da continuidade Q = A · v na circulação sistémica'?",
    "options": [
      "Implica a medição da pressão arterial apenas com um termómetro de mercúrio colocado na axila sem braçadeira.",
      "Manifesta-se clinicamente da seguinte forma: O enfermeiro compreende que a extrema lentidão do sangue nos capilares é uma exigência biofísica vital para permitir o tempo necessário à difusão transcapilar de oxigénio, glicose e dióxido de carbono.",
      "Exige a administração de água canalizada pura sem sais diretamente numa veia central em bólus de 1 litro em 10 segundos.",
      "Requer que o doente permaneça de cabeça para baixo durante 24 horas consecutivas para impedir o fluxo de sangue no cérebro."
    ],
    "correctIndex": 1,
    "explanation": "A aplicação de enfermagem para equação da continuidade Q = A · v na circulação sistémica baseia-se no princípio: O enfermeiro compreende que a extrema lentidão do sangue nos capilares é uma exigência biofísica vital para permitir o tempo necessário à difusão transcapilar de oxigénio, glicose e dióxido de carbono. Esta intervenção é essencial para a segurança hemodinâmica do doente.",
    "distractorAnalysis": [
      "A primeira opção confunde a medição da temperatura axilar com a avaliação hemodinâmica da pressão com esfigmomanómetro.",
      "A segunda opção incorreta provocaria hemólise maciça hipotónica intravascular fatal imediata.",
      "A terceira opção causaria congestão cerebral perigosa, hipertensão intracraniana e asfixia mecânica."
    ],
    "nursingApplication": "O enfermeiro compreende que a extrema lentidão do sangue nos capilares é uma exigência biofísica vital para permitir o tempo necessário à difusão transcapilar de oxigénio, glicose e dióxido de carbono."
  },
  {
    "id": 4053,
    "topicId": 4,
    "question": "Ao analisar as variáveis físicas que regem 'equação da continuidade Q = A · v na circulação sistémica', qual das seguintes afirmações expressa com rigor a relação hidrodinâmica entre pressão, velocidade e geometria vascular?",
    "options": [
      "A resistência ao fluxo é independente do raio do vaso e depende apenas da fase da Lua e marés oceânicas.",
      "O fluxo turbulento nunca produz ruído nem vibrações mecânicas em nenhuma circunstância biológica.",
      "A relação física correta demonstra que Como a área de secção transversal somada de todos os capilares sistémicos (~4500 cm²) é cerca de 800 vezes superior à área da aorta (~3 a 4 cm²), a velocidade do sangue cai de 30-40 cm/s na aorta para escassos 0,03 cm/s nos capilares.",
      "A velocidade do sangue é máxima nos capilares e mínima na aorta ascendente em repouso."
    ],
    "correctIndex": 2,
    "explanation": "A análise hidrodinâmica correta confirma que Como a área de secção transversal somada de todos os capilares sistémicos (~4500 cm²) é cerca de 800 vezes superior à área da aorta (~3 a 4 cm²), a velocidade do sangue cai de 30-40 cm/s na aorta para escassos 0,03 cm/s nos capilares. O domínio destas leis permite ao enfermeiro interpretar os fenómenos vasculares com rigor científico.",
    "distractorAnalysis": [
      "A primeira opção é uma aberração pseudocientífica que ignora a Lei de Poiseuille e a dependência em r⁴.",
      "A segunda opção é falsa, pois a turbulência é precisamente a geradora física dos sopros e ruídos de Korotkoff.",
      "A terceira opção inverte totalmente a realidade: a velocidade capilar é a mais lenta do sistema cardiovascular."
    ],
    "nursingApplication": "O enfermeiro compreende que a extrema lentidão do sangue nos capilares é uma exigência biofísica vital para permitir o tempo necessário à difusão transcapilar de oxigénio, glicose e dióxido de carbono."
  },
  {
    "id": 4054,
    "topicId": 4,
    "question": "Na hidrodinâmica circulatória aplicada à enfermagem, em relação a 'velocidade sanguínea na aorta vs rede capilar global', qual é a fundamentação biofísica correta?",
    "options": [
      "O sangue comporta-se como um fluido puramente invisível e sem atrito que viaja a velocidades próximas da luz no interior dos vasos.",
      "Trata-se de um processo onde a viscosidade do sangue é zero absoluto e a densidade é igual à do ar atmosférico rarefeito.",
      "A pressão hidrostática anula instantaneamente todas as leis de conservação de energia e de massa no sistema vascular.",
      "a velocidade de escoamento atinge o seu valor máximo na aorta ascendente e o seu valor mínimo absoluto no leito microcirculatório capilar. A enorme ramificação arteriolar e capilar em paralelo expande astronomicamente a área de secção combinada, desacelerando o fluxo sem reduzir o débito cardíaco total (Q = ~5 L/min)."
    ],
    "correctIndex": 3,
    "explanation": "Em biofísica circulatória, velocidade sanguínea na aorta vs rede capilar global explica-se pelo facto de que a velocidade de escoamento atinge o seu valor máximo na aorta ascendente e o seu valor mínimo absoluto no leito microcirculatório capilar. A enorme ramificação arteriolar e capilar em paralelo expande astronomicamente a área de secção combinada, desacelerando o fluxo sem reduzir o débito cardíaco total (Q = ~5 L/min).",
    "distractorAnalysis": [
      "A primeira opção incorreta atribui ao sangue propriedades físicas fictícias e velocidades relativísticas impossíveis.",
      "A segunda opção incorreta assume viscosidade nula, o que só ocorreria num superfluido hélio quântico a perto de zero Kelvin.",
      "A terceira opção incorreta ignora os princípios fundamentais da conservação de massa e de energia da física clássica."
    ],
    "nursingApplication": "O enfermeiro avalia o tempo de recarga capilar (TRC normal < 2 segundos) nas extremidades para estimar a adequação da perfusão microvascular periférica e oxigenação tecidual."
  },
  {
    "id": 4055,
    "topicId": 4,
    "question": "Na avaliação clínica e administração de terapêutica por um enfermeiro, como se manifesta a aplicação prática de 'velocidade sanguínea na aorta vs rede capilar global'?",
    "options": [
      "Manifesta-se clinicamente da seguinte forma: O enfermeiro avalia o tempo de recarga capilar (TRC normal < 2 segundos) nas extremidades para estimar a adequação da perfusão microvascular periférica e oxigenação tecidual.",
      "Implica a medição da pressão arterial apenas com um termómetro de mercúrio colocado na axila sem braçadeira.",
      "Exige a administração de água canalizada pura sem sais diretamente numa veia central em bólus de 1 litro em 10 segundos.",
      "Requer que o doente permaneça de cabeça para baixo durante 24 horas consecutivas para impedir o fluxo de sangue no cérebro."
    ],
    "correctIndex": 0,
    "explanation": "A aplicação de enfermagem para velocidade sanguínea na aorta vs rede capilar global baseia-se no princípio: O enfermeiro avalia o tempo de recarga capilar (TRC normal < 2 segundos) nas extremidades para estimar a adequação da perfusão microvascular periférica e oxigenação tecidual. Esta intervenção é essencial para a segurança hemodinâmica do doente.",
    "distractorAnalysis": [
      "A primeira opção confunde a medição da temperatura axilar com a avaliação hemodinâmica da pressão com esfigmomanómetro.",
      "A segunda opção incorreta provocaria hemólise maciça hipotónica intravascular fatal imediata.",
      "A terceira opção causaria congestão cerebral perigosa, hipertensão intracraniana e asfixia mecânica."
    ],
    "nursingApplication": "O enfermeiro avalia o tempo de recarga capilar (TRC normal < 2 segundos) nas extremidades para estimar a adequação da perfusão microvascular periférica e oxigenação tecidual."
  },
  {
    "id": 4056,
    "topicId": 4,
    "question": "Ao analisar as variáveis físicas que regem 'velocidade sanguínea na aorta vs rede capilar global', qual das seguintes afirmações expressa com rigor a relação hidrodinâmica entre pressão, velocidade e geometria vascular?",
    "options": [
      "A resistência ao fluxo é independente do raio do vaso e depende apenas da fase da Lua e marés oceânicas.",
      "A relação física correta demonstra que A enorme ramificação arteriolar e capilar em paralelo expande astronomicamente a área de secção combinada, desacelerando o fluxo sem reduzir o débito cardíaco total (Q = ~5 L/min).",
      "O fluxo turbulento nunca produz ruído nem vibrações mecânicas em nenhuma circunstância biológica.",
      "A velocidade do sangue é máxima nos capilares e mínima na aorta ascendente em repouso."
    ],
    "correctIndex": 1,
    "explanation": "A análise hidrodinâmica correta confirma que A enorme ramificação arteriolar e capilar em paralelo expande astronomicamente a área de secção combinada, desacelerando o fluxo sem reduzir o débito cardíaco total (Q = ~5 L/min). O domínio destas leis permite ao enfermeiro interpretar os fenómenos vasculares com rigor científico.",
    "distractorAnalysis": [
      "A primeira opção é uma aberração pseudocientífica que ignora a Lei de Poiseuille e a dependência em r⁴.",
      "A segunda opção é falsa, pois a turbulência é precisamente a geradora física dos sopros e ruídos de Korotkoff.",
      "A terceira opção inverte totalmente a realidade: a velocidade capilar é a mais lenta do sistema cardiovascular."
    ],
    "nursingApplication": "O enfermeiro avalia o tempo de recarga capilar (TRC normal < 2 segundos) nas extremidades para estimar a adequação da perfusão microvascular periférica e oxigenação tecidual."
  },
  {
    "id": 4057,
    "topicId": 4,
    "question": "Na hidrodinâmica circulatória aplicada à enfermagem, em relação a 'perfusão e tempo de trânsito capilar para trocas gasosas', qual é a fundamentação biofísica correta?",
    "options": [
      "O sangue comporta-se como um fluido puramente invisível e sem atrito que viaja a velocidades próximas da luz no interior dos vasos.",
      "Trata-se de um processo onde a viscosidade do sangue é zero absoluto e a densidade é igual à do ar atmosférico rarefeito.",
      "o eritrócito demora cerca de 0,75 segundos a percorrer um capilar pulmonar ou periférico de 1 mm de comprimento. Este tempo de trânsito é suficiente para atingir o equilíbrio de saturação de O₂ e CO₂ com os alvéolos pulmonares ou tecidos periféricos sob condições fisiológicas normais.",
      "A pressão hidrostática anula instantaneamente todas as leis de conservação de energia e de massa no sistema vascular."
    ],
    "correctIndex": 2,
    "explanation": "Em biofísica circulatória, perfusão e tempo de trânsito capilar para trocas gasosas explica-se pelo facto de que o eritrócito demora cerca de 0,75 segundos a percorrer um capilar pulmonar ou periférico de 1 mm de comprimento. Este tempo de trânsito é suficiente para atingir o equilíbrio de saturação de O₂ e CO₂ com os alvéolos pulmonares ou tecidos periféricos sob condições fisiológicas normais.",
    "distractorAnalysis": [
      "A primeira opção incorreta atribui ao sangue propriedades físicas fictícias e velocidades relativísticas impossíveis.",
      "A segunda opção incorreta assume viscosidade nula, o que só ocorreria num superfluido hélio quântico a perto de zero Kelvin.",
      "A terceira opção incorreta ignora os princípios fundamentais da conservação de massa e de energia da física clássica."
    ],
    "nursingApplication": "Em estados de débito cardíaco elevado ou febre alta com taquicardia extrema, o enfermeiro sabe que o tempo de trânsito capilar encurta, podendo comprometer a oxigenação em pulmões com fibrose."
  },
  {
    "id": 4058,
    "topicId": 4,
    "question": "Na avaliação clínica e administração de terapêutica por um enfermeiro, como se manifesta a aplicação prática de 'perfusão e tempo de trânsito capilar para trocas gasosas'?",
    "options": [
      "Implica a medição da pressão arterial apenas com um termómetro de mercúrio colocado na axila sem braçadeira.",
      "Exige a administração de água canalizada pura sem sais diretamente numa veia central em bólus de 1 litro em 10 segundos.",
      "Requer que o doente permaneça de cabeça para baixo durante 24 horas consecutivas para impedir o fluxo de sangue no cérebro.",
      "Manifesta-se clinicamente da seguinte forma: Em estados de débito cardíaco elevado ou febre alta com taquicardia extrema, o enfermeiro sabe que o tempo de trânsito capilar encurta, podendo comprometer a oxigenação em pulmões com fibrose."
    ],
    "correctIndex": 3,
    "explanation": "A aplicação de enfermagem para perfusão e tempo de trânsito capilar para trocas gasosas baseia-se no princípio: Em estados de débito cardíaco elevado ou febre alta com taquicardia extrema, o enfermeiro sabe que o tempo de trânsito capilar encurta, podendo comprometer a oxigenação em pulmões com fibrose. Esta intervenção é essencial para a segurança hemodinâmica do doente.",
    "distractorAnalysis": [
      "A primeira opção confunde a medição da temperatura axilar com a avaliação hemodinâmica da pressão com esfigmomanómetro.",
      "A segunda opção incorreta provocaria hemólise maciça hipotónica intravascular fatal imediata.",
      "A terceira opção causaria congestão cerebral perigosa, hipertensão intracraniana e asfixia mecânica."
    ],
    "nursingApplication": "Em estados de débito cardíaco elevado ou febre alta com taquicardia extrema, o enfermeiro sabe que o tempo de trânsito capilar encurta, podendo comprometer a oxigenação em pulmões com fibrose."
  },
  {
    "id": 4059,
    "topicId": 4,
    "question": "Ao analisar as variáveis físicas que regem 'perfusão e tempo de trânsito capilar para trocas gasosas', qual das seguintes afirmações expressa com rigor a relação hidrodinâmica entre pressão, velocidade e geometria vascular?",
    "options": [
      "A relação física correta demonstra que Este tempo de trânsito é suficiente para atingir o equilíbrio de saturação de O₂ e CO₂ com os alvéolos pulmonares ou tecidos periféricos sob condições fisiológicas normais.",
      "A resistência ao fluxo é independente do raio do vaso e depende apenas da fase da Lua e marés oceânicas.",
      "O fluxo turbulento nunca produz ruído nem vibrações mecânicas em nenhuma circunstância biológica.",
      "A velocidade do sangue é máxima nos capilares e mínima na aorta ascendente em repouso."
    ],
    "correctIndex": 0,
    "explanation": "A análise hidrodinâmica correta confirma que Este tempo de trânsito é suficiente para atingir o equilíbrio de saturação de O₂ e CO₂ com os alvéolos pulmonares ou tecidos periféricos sob condições fisiológicas normais. O domínio destas leis permite ao enfermeiro interpretar os fenómenos vasculares com rigor científico.",
    "distractorAnalysis": [
      "A primeira opção é uma aberração pseudocientífica que ignora a Lei de Poiseuille e a dependência em r⁴.",
      "A segunda opção é falsa, pois a turbulência é precisamente a geradora física dos sopros e ruídos de Korotkoff.",
      "A terceira opção inverte totalmente a realidade: a velocidade capilar é a mais lenta do sistema cardiovascular."
    ],
    "nursingApplication": "Em estados de débito cardíaco elevado ou febre alta com taquicardia extrema, o enfermeiro sabe que o tempo de trânsito capilar encurta, podendo comprometer a oxigenação em pulmões com fibrose."
  },
  {
    "id": 4060,
    "topicId": 4,
    "question": "Na hidrodinâmica circulatória aplicada à enfermagem, em relação a 'conservação de massa e fluxo em cateteres de duplo lúmen', qual é a fundamentação biofísica correta?",
    "options": [
      "O sangue comporta-se como um fluido puramente invisível e sem atrito que viaja a velocidades próximas da luz no interior dos vasos.",
      "se um lúmen de infusão estreita de diâmetro à entrada do vaso, a velocidade do jato de fluido infundido tem de aumentar proporcionalmente para manter o débito da bomba perfusora. Este aumento súbito de velocidade gera forças de atrito cinético e jato local contra o endotélio vascular se o lúmen for excessivamente estreito.",
      "Trata-se de um processo onde a viscosidade do sangue é zero absoluto e a densidade é igual à do ar atmosférico rarefeito.",
      "A pressão hidrostática anula instantaneamente todas as leis de conservação de energia e de massa no sistema vascular."
    ],
    "correctIndex": 1,
    "explanation": "Em biofísica circulatória, conservação de massa e fluxo em cateteres de duplo lúmen explica-se pelo facto de que se um lúmen de infusão estreita de diâmetro à entrada do vaso, a velocidade do jato de fluido infundido tem de aumentar proporcionalmente para manter o débito da bomba perfusora. Este aumento súbito de velocidade gera forças de atrito cinético e jato local contra o endotélio vascular se o lúmen for excessivamente estreito.",
    "distractorAnalysis": [
      "A primeira opção incorreta atribui ao sangue propriedades físicas fictícias e velocidades relativísticas impossíveis.",
      "A segunda opção incorreta assume viscosidade nula, o que só ocorreria num superfluido hélio quântico a perto de zero Kelvin.",
      "A terceira opção incorreta ignora os princípios fundamentais da conservação de massa e de energia da física clássica."
    ],
    "nursingApplication": "Ao selecionar um cateter venoso central (CVC), o enfermeiro reserva o lúmen distal de maior calibre (16G) para infusões rápidas de sangue ou fluidos de ressuscitação volémica."
  },
  {
    "id": 4061,
    "topicId": 4,
    "question": "Na avaliação clínica e administração de terapêutica por um enfermeiro, como se manifesta a aplicação prática de 'conservação de massa e fluxo em cateteres de duplo lúmen'?",
    "options": [
      "Implica a medição da pressão arterial apenas com um termómetro de mercúrio colocado na axila sem braçadeira.",
      "Exige a administração de água canalizada pura sem sais diretamente numa veia central em bólus de 1 litro em 10 segundos.",
      "Manifesta-se clinicamente da seguinte forma: Ao selecionar um cateter venoso central (CVC), o enfermeiro reserva o lúmen distal de maior calibre (16G) para infusões rápidas de sangue ou fluidos de ressuscitação volémica.",
      "Requer que o doente permaneça de cabeça para baixo durante 24 horas consecutivas para impedir o fluxo de sangue no cérebro."
    ],
    "correctIndex": 2,
    "explanation": "A aplicação de enfermagem para conservação de massa e fluxo em cateteres de duplo lúmen baseia-se no princípio: Ao selecionar um cateter venoso central (CVC), o enfermeiro reserva o lúmen distal de maior calibre (16G) para infusões rápidas de sangue ou fluidos de ressuscitação volémica. Esta intervenção é essencial para a segurança hemodinâmica do doente.",
    "distractorAnalysis": [
      "A primeira opção confunde a medição da temperatura axilar com a avaliação hemodinâmica da pressão com esfigmomanómetro.",
      "A segunda opção incorreta provocaria hemólise maciça hipotónica intravascular fatal imediata.",
      "A terceira opção causaria congestão cerebral perigosa, hipertensão intracraniana e asfixia mecânica."
    ],
    "nursingApplication": "Ao selecionar um cateter venoso central (CVC), o enfermeiro reserva o lúmen distal de maior calibre (16G) para infusões rápidas de sangue ou fluidos de ressuscitação volémica."
  },
  {
    "id": 4062,
    "topicId": 4,
    "question": "Ao analisar as variáveis físicas que regem 'conservação de massa e fluxo em cateteres de duplo lúmen', qual das seguintes afirmações expressa com rigor a relação hidrodinâmica entre pressão, velocidade e geometria vascular?",
    "options": [
      "A resistência ao fluxo é independente do raio do vaso e depende apenas da fase da Lua e marés oceânicas.",
      "O fluxo turbulento nunca produz ruído nem vibrações mecânicas em nenhuma circunstância biológica.",
      "A velocidade do sangue é máxima nos capilares e mínima na aorta ascendente em repouso.",
      "A relação física correta demonstra que Este aumento súbito de velocidade gera forças de atrito cinético e jato local contra o endotélio vascular se o lúmen for excessivamente estreito."
    ],
    "correctIndex": 3,
    "explanation": "A análise hidrodinâmica correta confirma que Este aumento súbito de velocidade gera forças de atrito cinético e jato local contra o endotélio vascular se o lúmen for excessivamente estreito. O domínio destas leis permite ao enfermeiro interpretar os fenómenos vasculares com rigor científico.",
    "distractorAnalysis": [
      "A primeira opção é uma aberração pseudocientífica que ignora a Lei de Poiseuille e a dependência em r⁴.",
      "A segunda opção é falsa, pois a turbulência é precisamente a geradora física dos sopros e ruídos de Korotkoff.",
      "A terceira opção inverte totalmente a realidade: a velocidade capilar é a mais lenta do sistema cardiovascular."
    ],
    "nursingApplication": "Ao selecionar um cateter venoso central (CVC), o enfermeiro reserva o lúmen distal de maior calibre (16G) para infusões rápidas de sangue ou fluidos de ressuscitação volémica."
  },
  {
    "id": 4063,
    "topicId": 4,
    "question": "Na hidrodinâmica circulatória aplicada à enfermagem, em relação a 'dinâmica circulatória no retorno venoso e veias cavas', qual é a fundamentação biofísica correta?",
    "options": [
      "à medida que as vénulas convergem em veias de maior calibre e finalmente nas veias cavas, a área transversal combinada volta a diminuir, acelerando a velocidade do sangue de regresso à aurícula direita. A velocidade do fluxo venoso passa de 0,5 cm/s nas vénulas para cerca de 10 a 15 cm/s nas veias cavas superior e inferior.",
      "O sangue comporta-se como um fluido puramente invisível e sem atrito que viaja a velocidades próximas da luz no interior dos vasos.",
      "Trata-se de um processo onde a viscosidade do sangue é zero absoluto e a densidade é igual à do ar atmosférico rarefeito.",
      "A pressão hidrostática anula instantaneamente todas as leis de conservação de energia e de massa no sistema vascular."
    ],
    "correctIndex": 0,
    "explanation": "Em biofísica circulatória, dinâmica circulatória no retorno venoso e veias cavas explica-se pelo facto de que à medida que as vénulas convergem em veias de maior calibre e finalmente nas veias cavas, a área transversal combinada volta a diminuir, acelerando a velocidade do sangue de regresso à aurícula direita. A velocidade do fluxo venoso passa de 0,5 cm/s nas vénulas para cerca de 10 a 15 cm/s nas veias cavas superior e inferior.",
    "distractorAnalysis": [
      "A primeira opção incorreta atribui ao sangue propriedades físicas fictícias e velocidades relativísticas impossíveis.",
      "A segunda opção incorreta assume viscosidade nula, o que só ocorreria num superfluido hélio quântico a perto de zero Kelvin.",
      "A terceira opção incorreta ignora os princípios fundamentais da conservação de massa e de energia da física clássica."
    ],
    "nursingApplication": "O enfermeiro posiciona o doente em decúbito com os membros inferiores elevados (posição de Trendelenburg modificada) para favorecer o retorno venoso gravitacional em episódios de hipotensão."
  },
  {
    "id": 4064,
    "topicId": 4,
    "question": "Na avaliação clínica e administração de terapêutica por um enfermeiro, como se manifesta a aplicação prática de 'dinâmica circulatória no retorno venoso e veias cavas'?",
    "options": [
      "Implica a medição da pressão arterial apenas com um termómetro de mercúrio colocado na axila sem braçadeira.",
      "Manifesta-se clinicamente da seguinte forma: O enfermeiro posiciona o doente em decúbito com os membros inferiores elevados (posição de Trendelenburg modificada) para favorecer o retorno venoso gravitacional em episódios de hipotensão.",
      "Exige a administração de água canalizada pura sem sais diretamente numa veia central em bólus de 1 litro em 10 segundos.",
      "Requer que o doente permaneça de cabeça para baixo durante 24 horas consecutivas para impedir o fluxo de sangue no cérebro."
    ],
    "correctIndex": 1,
    "explanation": "A aplicação de enfermagem para dinâmica circulatória no retorno venoso e veias cavas baseia-se no princípio: O enfermeiro posiciona o doente em decúbito com os membros inferiores elevados (posição de Trendelenburg modificada) para favorecer o retorno venoso gravitacional em episódios de hipotensão. Esta intervenção é essencial para a segurança hemodinâmica do doente.",
    "distractorAnalysis": [
      "A primeira opção confunde a medição da temperatura axilar com a avaliação hemodinâmica da pressão com esfigmomanómetro.",
      "A segunda opção incorreta provocaria hemólise maciça hipotónica intravascular fatal imediata.",
      "A terceira opção causaria congestão cerebral perigosa, hipertensão intracraniana e asfixia mecânica."
    ],
    "nursingApplication": "O enfermeiro posiciona o doente em decúbito com os membros inferiores elevados (posição de Trendelenburg modificada) para favorecer o retorno venoso gravitacional em episódios de hipotensão."
  },
  {
    "id": 4065,
    "topicId": 4,
    "question": "Ao analisar as variáveis físicas que regem 'dinâmica circulatória no retorno venoso e veias cavas', qual das seguintes afirmações expressa com rigor a relação hidrodinâmica entre pressão, velocidade e geometria vascular?",
    "options": [
      "A resistência ao fluxo é independente do raio do vaso e depende apenas da fase da Lua e marés oceânicas.",
      "O fluxo turbulento nunca produz ruído nem vibrações mecânicas em nenhuma circunstância biológica.",
      "A relação física correta demonstra que A velocidade do fluxo venoso passa de 0,5 cm/s nas vénulas para cerca de 10 a 15 cm/s nas veias cavas superior e inferior.",
      "A velocidade do sangue é máxima nos capilares e mínima na aorta ascendente em repouso."
    ],
    "correctIndex": 2,
    "explanation": "A análise hidrodinâmica correta confirma que A velocidade do fluxo venoso passa de 0,5 cm/s nas vénulas para cerca de 10 a 15 cm/s nas veias cavas superior e inferior. O domínio destas leis permite ao enfermeiro interpretar os fenómenos vasculares com rigor científico.",
    "distractorAnalysis": [
      "A primeira opção é uma aberração pseudocientífica que ignora a Lei de Poiseuille e a dependência em r⁴.",
      "A segunda opção é falsa, pois a turbulência é precisamente a geradora física dos sopros e ruídos de Korotkoff.",
      "A terceira opção inverte totalmente a realidade: a velocidade capilar é a mais lenta do sistema cardiovascular."
    ],
    "nursingApplication": "O enfermeiro posiciona o doente em decúbito com os membros inferiores elevados (posição de Trendelenburg modificada) para favorecer o retorno venoso gravitacional em episódios de hipotensão."
  },
  {
    "id": 4066,
    "topicId": 4,
    "question": "Na hidrodinâmica circulatória aplicada à enfermagem, em relação a 'conceito de escoamento laminar (ou de Poiseuille)', qual é a fundamentação biofísica correta?",
    "options": [
      "O sangue comporta-se como um fluido puramente invisível e sem atrito que viaja a velocidades próximas da luz no interior dos vasos.",
      "Trata-se de um processo onde a viscosidade do sangue é zero absoluto e a densidade é igual à do ar atmosférico rarefeito.",
      "A pressão hidrostática anula instantaneamente todas as leis de conservação de energia e de massa no sistema vascular.",
      "as partículas de fluido deslocam-se em lâminas cilíndricas coaxiais paralelas ao eixo do vaso, deslizando suavemente umas sobre as outras sem qualquer mistura transversal macroscópica. O perfil de velocidades na secção reta do vaso é parabólico: a velocidade é máxima no eixo central e decresce gradualmente até anular-se junto à parede endotelial fixa (condição de não-deslizamento)."
    ],
    "correctIndex": 3,
    "explanation": "Em biofísica circulatória, conceito de escoamento laminar (ou de Poiseuille) explica-se pelo facto de que as partículas de fluido deslocam-se em lâminas cilíndricas coaxiais paralelas ao eixo do vaso, deslizando suavemente umas sobre as outras sem qualquer mistura transversal macroscópica. O perfil de velocidades na secção reta do vaso é parabólico: a velocidade é máxima no eixo central e decresce gradualmente até anular-se junto à parede endotelial fixa (condição de não-deslizamento).",
    "distractorAnalysis": [
      "A primeira opção incorreta atribui ao sangue propriedades físicas fictícias e velocidades relativísticas impossíveis.",
      "A segunda opção incorreta assume viscosidade nula, o que só ocorreria num superfluido hélio quântico a perto de zero Kelvin.",
      "A terceira opção incorreta ignora os princípios fundamentais da conservação de massa e de energia da física clássica."
    ],
    "nursingApplication": "O enfermeiro sabe que o fluxo fisiológico na maioria das artérias e veias normais é laminar e perfeitamente silencioso, não produzindo qualquer som ou sopro à auscultação com estetoscópio."
  },
  {
    "id": 4067,
    "topicId": 4,
    "question": "Na avaliação clínica e administração de terapêutica por um enfermeiro, como se manifesta a aplicação prática de 'conceito de escoamento laminar (ou de Poiseuille)'?",
    "options": [
      "Manifesta-se clinicamente da seguinte forma: O enfermeiro sabe que o fluxo fisiológico na maioria das artérias e veias normais é laminar e perfeitamente silencioso, não produzindo qualquer som ou sopro à auscultação com estetoscópio.",
      "Implica a medição da pressão arterial apenas com um termómetro de mercúrio colocado na axila sem braçadeira.",
      "Exige a administração de água canalizada pura sem sais diretamente numa veia central em bólus de 1 litro em 10 segundos.",
      "Requer que o doente permaneça de cabeça para baixo durante 24 horas consecutivas para impedir o fluxo de sangue no cérebro."
    ],
    "correctIndex": 0,
    "explanation": "A aplicação de enfermagem para conceito de escoamento laminar (ou de Poiseuille) baseia-se no princípio: O enfermeiro sabe que o fluxo fisiológico na maioria das artérias e veias normais é laminar e perfeitamente silencioso, não produzindo qualquer som ou sopro à auscultação com estetoscópio. Esta intervenção é essencial para a segurança hemodinâmica do doente.",
    "distractorAnalysis": [
      "A primeira opção confunde a medição da temperatura axilar com a avaliação hemodinâmica da pressão com esfigmomanómetro.",
      "A segunda opção incorreta provocaria hemólise maciça hipotónica intravascular fatal imediata.",
      "A terceira opção causaria congestão cerebral perigosa, hipertensão intracraniana e asfixia mecânica."
    ],
    "nursingApplication": "O enfermeiro sabe que o fluxo fisiológico na maioria das artérias e veias normais é laminar e perfeitamente silencioso, não produzindo qualquer som ou sopro à auscultação com estetoscópio."
  },
  {
    "id": 4068,
    "topicId": 4,
    "question": "Ao analisar as variáveis físicas que regem 'conceito de escoamento laminar (ou de Poiseuille)', qual das seguintes afirmações expressa com rigor a relação hidrodinâmica entre pressão, velocidade e geometria vascular?",
    "options": [
      "A resistência ao fluxo é independente do raio do vaso e depende apenas da fase da Lua e marés oceânicas.",
      "A relação física correta demonstra que O perfil de velocidades na secção reta do vaso é parabólico: a velocidade é máxima no eixo central e decresce gradualmente até anular-se junto à parede endotelial fixa (condição de não-deslizamento).",
      "O fluxo turbulento nunca produz ruído nem vibrações mecânicas em nenhuma circunstância biológica.",
      "A velocidade do sangue é máxima nos capilares e mínima na aorta ascendente em repouso."
    ],
    "correctIndex": 1,
    "explanation": "A análise hidrodinâmica correta confirma que O perfil de velocidades na secção reta do vaso é parabólico: a velocidade é máxima no eixo central e decresce gradualmente até anular-se junto à parede endotelial fixa (condição de não-deslizamento). O domínio destas leis permite ao enfermeiro interpretar os fenómenos vasculares com rigor científico.",
    "distractorAnalysis": [
      "A primeira opção é uma aberração pseudocientífica que ignora a Lei de Poiseuille e a dependência em r⁴.",
      "A segunda opção é falsa, pois a turbulência é precisamente a geradora física dos sopros e ruídos de Korotkoff.",
      "A terceira opção inverte totalmente a realidade: a velocidade capilar é a mais lenta do sistema cardiovascular."
    ],
    "nursingApplication": "O enfermeiro sabe que o fluxo fisiológico na maioria das artérias e veias normais é laminar e perfeitamente silencioso, não produzindo qualquer som ou sopro à auscultação com estetoscópio."
  },
  {
    "id": 4069,
    "topicId": 4,
    "question": "Na hidrodinâmica circulatória aplicada à enfermagem, em relação a 'condição de não-deslizamento na parede vascular (no-slip condition)', qual é a fundamentação biofísica correta?",
    "options": [
      "O sangue comporta-se como um fluido puramente invisível e sem atrito que viaja a velocidades próximas da luz no interior dos vasos.",
      "Trata-se de um processo onde a viscosidade do sangue é zero absoluto e a densidade é igual à do ar atmosférico rarefeito.",
      "a camada microscópica de plasma sanguíneo em contacto direto com as células endoteliais tem velocidade rigorosamente nula (v = 0) em relação à parede do vaso. O atrito molecular entre o líquido e o glicocálix endotelial ancora as primeiras moléculas de fluido, gerando um gradiente de velocidade transversal (taxa de cisalhamento, shear rate).",
      "A pressão hidrostática anula instantaneamente todas as leis de conservação de energia e de massa no sistema vascular."
    ],
    "correctIndex": 2,
    "explanation": "Em biofísica circulatória, condição de não-deslizamento na parede vascular (no-slip condition) explica-se pelo facto de que a camada microscópica de plasma sanguíneo em contacto direto com as células endoteliais tem velocidade rigorosamente nula (v = 0) em relação à parede do vaso. O atrito molecular entre o líquido e o glicocálix endotelial ancora as primeiras moléculas de fluido, gerando um gradiente de velocidade transversal (taxa de cisalhamento, shear rate).",
    "distractorAnalysis": [
      "A primeira opção incorreta atribui ao sangue propriedades físicas fictícias e velocidades relativísticas impossíveis.",
      "A segunda opção incorreta assume viscosidade nula, o que só ocorreria num superfluido hélio quântico a perto de zero Kelvin.",
      "A terceira opção incorreta ignora os princípios fundamentais da conservação de massa e de energia da física clássica."
    ],
    "nursingApplication": "A taxa de cisalhamento fisiológica na parede arterial estimula a libertação endotelial de óxido nítrico (NO), um potente vasodilatador endógeno que o enfermeiro sabe ser protetor contra a hipertensão."
  },
  {
    "id": 4070,
    "topicId": 4,
    "question": "Na avaliação clínica e administração de terapêutica por um enfermeiro, como se manifesta a aplicação prática de 'condição de não-deslizamento na parede vascular (no-slip condition)'?",
    "options": [
      "Implica a medição da pressão arterial apenas com um termómetro de mercúrio colocado na axila sem braçadeira.",
      "Exige a administração de água canalizada pura sem sais diretamente numa veia central em bólus de 1 litro em 10 segundos.",
      "Requer que o doente permaneça de cabeça para baixo durante 24 horas consecutivas para impedir o fluxo de sangue no cérebro.",
      "Manifesta-se clinicamente da seguinte forma: A taxa de cisalhamento fisiológica na parede arterial estimula a libertação endotelial de óxido nítrico (NO), um potente vasodilatador endógeno que o enfermeiro sabe ser protetor contra a hipertensão."
    ],
    "correctIndex": 3,
    "explanation": "A aplicação de enfermagem para condição de não-deslizamento na parede vascular (no-slip condition) baseia-se no princípio: A taxa de cisalhamento fisiológica na parede arterial estimula a libertação endotelial de óxido nítrico (NO), um potente vasodilatador endógeno que o enfermeiro sabe ser protetor contra a hipertensão. Esta intervenção é essencial para a segurança hemodinâmica do doente.",
    "distractorAnalysis": [
      "A primeira opção confunde a medição da temperatura axilar com a avaliação hemodinâmica da pressão com esfigmomanómetro.",
      "A segunda opção incorreta provocaria hemólise maciça hipotónica intravascular fatal imediata.",
      "A terceira opção causaria congestão cerebral perigosa, hipertensão intracraniana e asfixia mecânica."
    ],
    "nursingApplication": "A taxa de cisalhamento fisiológica na parede arterial estimula a libertação endotelial de óxido nítrico (NO), um potente vasodilatador endógeno que o enfermeiro sabe ser protetor contra a hipertensão."
  },
  {
    "id": 4071,
    "topicId": 4,
    "question": "Ao analisar as variáveis físicas que regem 'condição de não-deslizamento na parede vascular (no-slip condition)', qual das seguintes afirmações expressa com rigor a relação hidrodinâmica entre pressão, velocidade e geometria vascular?",
    "options": [
      "A relação física correta demonstra que O atrito molecular entre o líquido e o glicocálix endotelial ancora as primeiras moléculas de fluido, gerando um gradiente de velocidade transversal (taxa de cisalhamento, shear rate).",
      "A resistência ao fluxo é independente do raio do vaso e depende apenas da fase da Lua e marés oceânicas.",
      "O fluxo turbulento nunca produz ruído nem vibrações mecânicas em nenhuma circunstância biológica.",
      "A velocidade do sangue é máxima nos capilares e mínima na aorta ascendente em repouso."
    ],
    "correctIndex": 0,
    "explanation": "A análise hidrodinâmica correta confirma que O atrito molecular entre o líquido e o glicocálix endotelial ancora as primeiras moléculas de fluido, gerando um gradiente de velocidade transversal (taxa de cisalhamento, shear rate). O domínio destas leis permite ao enfermeiro interpretar os fenómenos vasculares com rigor científico.",
    "distractorAnalysis": [
      "A primeira opção é uma aberração pseudocientífica que ignora a Lei de Poiseuille e a dependência em r⁴.",
      "A segunda opção é falsa, pois a turbulência é precisamente a geradora física dos sopros e ruídos de Korotkoff.",
      "A terceira opção inverte totalmente a realidade: a velocidade capilar é a mais lenta do sistema cardiovascular."
    ],
    "nursingApplication": "A taxa de cisalhamento fisiológica na parede arterial estimula a libertação endotelial de óxido nítrico (NO), um potente vasodilatador endógeno que o enfermeiro sabe ser protetor contra a hipertensão."
  },
  {
    "id": 4072,
    "topicId": 4,
    "question": "Na hidrodinâmica circulatória aplicada à enfermagem, em relação a 'velocidade média vs velocidade máxima no escoamento laminar', qual é a fundamentação biofísica correta?",
    "options": [
      "O sangue comporta-se como um fluido puramente invisível e sem atrito que viaja a velocidades próximas da luz no interior dos vasos.",
      "num perfil parabólico perfeito em conduta cilíndrica rígida, a velocidade média do fluido é exatamente igual a metade da velocidade máxima observada no centro do vaso (v_média = v_max / 2). Esta relação matemática decorre da integração geométrica do parabolóide de revolução da velocidade ao longo do raio da secção transversal.",
      "Trata-se de um processo onde a viscosidade do sangue é zero absoluto e a densidade é igual à do ar atmosférico rarefeito.",
      "A pressão hidrostática anula instantaneamente todas as leis de conservação de energia e de massa no sistema vascular."
    ],
    "correctIndex": 1,
    "explanation": "Em biofísica circulatória, velocidade média vs velocidade máxima no escoamento laminar explica-se pelo facto de que num perfil parabólico perfeito em conduta cilíndrica rígida, a velocidade média do fluido é exatamente igual a metade da velocidade máxima observada no centro do vaso (v_média = v_max / 2). Esta relação matemática decorre da integração geométrica do parabolóide de revolução da velocidade ao longo do raio da secção transversal.",
    "distractorAnalysis": [
      "A primeira opção incorreta atribui ao sangue propriedades físicas fictícias e velocidades relativísticas impossíveis.",
      "A segunda opção incorreta assume viscosidade nula, o que só ocorreria num superfluido hélio quântico a perto de zero Kelvin.",
      "A terceira opção incorreta ignora os princípios fundamentais da conservação de massa e de energia da física clássica."
    ],
    "nursingApplication": "Na ecografia vascular com Doppler realizada à cabeceira, o enfermeiro compreende que o aparelho mede o espectro de frequências e calcula a velocidade média a partir do pico sistólico central."
  },
  {
    "id": 4073,
    "topicId": 4,
    "question": "Na avaliação clínica e administração de terapêutica por um enfermeiro, como se manifesta a aplicação prática de 'velocidade média vs velocidade máxima no escoamento laminar'?",
    "options": [
      "Implica a medição da pressão arterial apenas com um termómetro de mercúrio colocado na axila sem braçadeira.",
      "Exige a administração de água canalizada pura sem sais diretamente numa veia central em bólus de 1 litro em 10 segundos.",
      "Manifesta-se clinicamente da seguinte forma: Na ecografia vascular com Doppler realizada à cabeceira, o enfermeiro compreende que o aparelho mede o espectro de frequências e calcula a velocidade média a partir do pico sistólico central.",
      "Requer que o doente permaneça de cabeça para baixo durante 24 horas consecutivas para impedir o fluxo de sangue no cérebro."
    ],
    "correctIndex": 2,
    "explanation": "A aplicação de enfermagem para velocidade média vs velocidade máxima no escoamento laminar baseia-se no princípio: Na ecografia vascular com Doppler realizada à cabeceira, o enfermeiro compreende que o aparelho mede o espectro de frequências e calcula a velocidade média a partir do pico sistólico central. Esta intervenção é essencial para a segurança hemodinâmica do doente.",
    "distractorAnalysis": [
      "A primeira opção confunde a medição da temperatura axilar com a avaliação hemodinâmica da pressão com esfigmomanómetro.",
      "A segunda opção incorreta provocaria hemólise maciça hipotónica intravascular fatal imediata.",
      "A terceira opção causaria congestão cerebral perigosa, hipertensão intracraniana e asfixia mecânica."
    ],
    "nursingApplication": "Na ecografia vascular com Doppler realizada à cabeceira, o enfermeiro compreende que o aparelho mede o espectro de frequências e calcula a velocidade média a partir do pico sistólico central."
  },
  {
    "id": 4074,
    "topicId": 4,
    "question": "Ao analisar as variáveis físicas que regem 'velocidade média vs velocidade máxima no escoamento laminar', qual das seguintes afirmações expressa com rigor a relação hidrodinâmica entre pressão, velocidade e geometria vascular?",
    "options": [
      "A resistência ao fluxo é independente do raio do vaso e depende apenas da fase da Lua e marés oceânicas.",
      "O fluxo turbulento nunca produz ruído nem vibrações mecânicas em nenhuma circunstância biológica.",
      "A velocidade do sangue é máxima nos capilares e mínima na aorta ascendente em repouso.",
      "A relação física correta demonstra que Esta relação matemática decorre da integração geométrica do parabolóide de revolução da velocidade ao longo do raio da secção transversal."
    ],
    "correctIndex": 3,
    "explanation": "A análise hidrodinâmica correta confirma que Esta relação matemática decorre da integração geométrica do parabolóide de revolução da velocidade ao longo do raio da secção transversal. O domínio destas leis permite ao enfermeiro interpretar os fenómenos vasculares com rigor científico.",
    "distractorAnalysis": [
      "A primeira opção é uma aberração pseudocientífica que ignora a Lei de Poiseuille e a dependência em r⁴.",
      "A segunda opção é falsa, pois a turbulência é precisamente a geradora física dos sopros e ruídos de Korotkoff.",
      "A terceira opção inverte totalmente a realidade: a velocidade capilar é a mais lenta do sistema cardiovascular."
    ],
    "nursingApplication": "Na ecografia vascular com Doppler realizada à cabeceira, o enfermeiro compreende que o aparelho mede o espectro de frequências e calcula a velocidade média a partir do pico sistólico central."
  },
  {
    "id": 4075,
    "topicId": 4,
    "question": "Na hidrodinâmica circulatória aplicada à enfermagem, em relação a 'ausência de ruído audível no regime laminar estável', qual é a fundamentação biofísica correta?",
    "options": [
      "como as lâminas de fluido não colidem nem formam vórtices caóticos, a energia mecânica dissipa-se apenas por atrito viscoso suave sem vibração mecânica das paredes vasculares. Na ausência de flutuações de pressão acústica na frequência audível (20 Hz a 20 kHz), o fluxo não emite ondas sonoras percetíveis ao estetoscópio.",
      "O sangue comporta-se como um fluido puramente invisível e sem atrito que viaja a velocidades próximas da luz no interior dos vasos.",
      "Trata-se de um processo onde a viscosidade do sangue é zero absoluto e a densidade é igual à do ar atmosférico rarefeito.",
      "A pressão hidrostática anula instantaneamente todas as leis de conservação de energia e de massa no sistema vascular."
    ],
    "correctIndex": 0,
    "explanation": "Em biofísica circulatória, ausência de ruído audível no regime laminar estável explica-se pelo facto de que como as lâminas de fluido não colidem nem formam vórtices caóticos, a energia mecânica dissipa-se apenas por atrito viscoso suave sem vibração mecânica das paredes vasculares. Na ausência de flutuações de pressão acústica na frequência audível (20 Hz a 20 kHz), o fluxo não emite ondas sonoras percetíveis ao estetoscópio.",
    "distractorAnalysis": [
      "A primeira opção incorreta atribui ao sangue propriedades físicas fictícias e velocidades relativísticas impossíveis.",
      "A segunda opção incorreta assume viscosidade nula, o que só ocorreria num superfluido hélio quântico a perto de zero Kelvin.",
      "A terceira opção incorreta ignora os princípios fundamentais da conservação de massa e de energia da física clássica."
    ],
    "nursingApplication": "Ao medir a pressão arterial com a braçadeira do esfigmomanómetro totalmente desinsuflada, o enfermeiro confirma a ausência total de sons na artéria braquial (fluxo laminar silencioso)."
  },
  {
    "id": 4076,
    "topicId": 4,
    "question": "Na avaliação clínica e administração de terapêutica por um enfermeiro, como se manifesta a aplicação prática de 'ausência de ruído audível no regime laminar estável'?",
    "options": [
      "Implica a medição da pressão arterial apenas com um termómetro de mercúrio colocado na axila sem braçadeira.",
      "Manifesta-se clinicamente da seguinte forma: Ao medir a pressão arterial com a braçadeira do esfigmomanómetro totalmente desinsuflada, o enfermeiro confirma a ausência total de sons na artéria braquial (fluxo laminar silencioso).",
      "Exige a administração de água canalizada pura sem sais diretamente numa veia central em bólus de 1 litro em 10 segundos.",
      "Requer que o doente permaneça de cabeça para baixo durante 24 horas consecutivas para impedir o fluxo de sangue no cérebro."
    ],
    "correctIndex": 1,
    "explanation": "A aplicação de enfermagem para ausência de ruído audível no regime laminar estável baseia-se no princípio: Ao medir a pressão arterial com a braçadeira do esfigmomanómetro totalmente desinsuflada, o enfermeiro confirma a ausência total de sons na artéria braquial (fluxo laminar silencioso). Esta intervenção é essencial para a segurança hemodinâmica do doente.",
    "distractorAnalysis": [
      "A primeira opção confunde a medição da temperatura axilar com a avaliação hemodinâmica da pressão com esfigmomanómetro.",
      "A segunda opção incorreta provocaria hemólise maciça hipotónica intravascular fatal imediata.",
      "A terceira opção causaria congestão cerebral perigosa, hipertensão intracraniana e asfixia mecânica."
    ],
    "nursingApplication": "Ao medir a pressão arterial com a braçadeira do esfigmomanómetro totalmente desinsuflada, o enfermeiro confirma a ausência total de sons na artéria braquial (fluxo laminar silencioso)."
  },
  {
    "id": 4077,
    "topicId": 4,
    "question": "Ao analisar as variáveis físicas que regem 'ausência de ruído audível no regime laminar estável', qual das seguintes afirmações expressa com rigor a relação hidrodinâmica entre pressão, velocidade e geometria vascular?",
    "options": [
      "A resistência ao fluxo é independente do raio do vaso e depende apenas da fase da Lua e marés oceânicas.",
      "O fluxo turbulento nunca produz ruído nem vibrações mecânicas em nenhuma circunstância biológica.",
      "A relação física correta demonstra que Na ausência de flutuações de pressão acústica na frequência audível (20 Hz a 20 kHz), o fluxo não emite ondas sonoras percetíveis ao estetoscópio.",
      "A velocidade do sangue é máxima nos capilares e mínima na aorta ascendente em repouso."
    ],
    "correctIndex": 2,
    "explanation": "A análise hidrodinâmica correta confirma que Na ausência de flutuações de pressão acústica na frequência audível (20 Hz a 20 kHz), o fluxo não emite ondas sonoras percetíveis ao estetoscópio. O domínio destas leis permite ao enfermeiro interpretar os fenómenos vasculares com rigor científico.",
    "distractorAnalysis": [
      "A primeira opção é uma aberração pseudocientífica que ignora a Lei de Poiseuille e a dependência em r⁴.",
      "A segunda opção é falsa, pois a turbulência é precisamente a geradora física dos sopros e ruídos de Korotkoff.",
      "A terceira opção inverte totalmente a realidade: a velocidade capilar é a mais lenta do sistema cardiovascular."
    ],
    "nursingApplication": "Ao medir a pressão arterial com a braçadeira do esfigmomanómetro totalmente desinsuflada, o enfermeiro confirma a ausência total de sons na artéria braquial (fluxo laminar silencioso)."
  },
  {
    "id": 4078,
    "topicId": 4,
    "question": "Na hidrodinâmica circulatória aplicada à enfermagem, em relação a 'efeito Fahraeus-Lindqvist e migração axial dos glóbulos vermelhos', qual é a fundamentação biofísica correta?",
    "options": [
      "O sangue comporta-se como um fluido puramente invisível e sem atrito que viaja a velocidades próximas da luz no interior dos vasos.",
      "Trata-se de um processo onde a viscosidade do sangue é zero absoluto e a densidade é igual à do ar atmosférico rarefeito.",
      "A pressão hidrostática anula instantaneamente todas as leis de conservação de energia e de massa no sistema vascular.",
      "em vasos com diâmetro inferior a 300 micrómetros, os eritrócitos tendem a concentrar-se no centro da corrente (onde a velocidade é máxima), deixando uma camada marginal acelular de plasma junto à parede. Esta segregação celular reduz o atrito viscoso aparente do sangue nos microvasos e facilita a passagem de capilares estreitos com menor consumo de energia."
    ],
    "correctIndex": 3,
    "explanation": "Em biofísica circulatória, efeito Fahraeus-Lindqvist e migração axial dos glóbulos vermelhos explica-se pelo facto de que em vasos com diâmetro inferior a 300 micrómetros, os eritrócitos tendem a concentrar-se no centro da corrente (onde a velocidade é máxima), deixando uma camada marginal acelular de plasma junto à parede. Esta segregação celular reduz o atrito viscoso aparente do sangue nos microvasos e facilita a passagem de capilares estreitos com menor consumo de energia.",
    "distractorAnalysis": [
      "A primeira opção incorreta atribui ao sangue propriedades físicas fictícias e velocidades relativísticas impossíveis.",
      "A segunda opção incorreta assume viscosidade nula, o que só ocorreria num superfluido hélio quântico a perto de zero Kelvin.",
      "A terceira opção incorreta ignora os princípios fundamentais da conservação de massa e de energia da física clássica."
    ],
    "nursingApplication": "O enfermeiro compreende que a microcirculação possui adaptações biofísicas que reduzem a viscosidade efetiva do sangue para otimizar o fornecimento de oxigénio celular."
  },
  {
    "id": 4079,
    "topicId": 4,
    "question": "Na avaliação clínica e administração de terapêutica por um enfermeiro, como se manifesta a aplicação prática de 'efeito Fahraeus-Lindqvist e migração axial dos glóbulos vermelhos'?",
    "options": [
      "Manifesta-se clinicamente da seguinte forma: O enfermeiro compreende que a microcirculação possui adaptações biofísicas que reduzem a viscosidade efetiva do sangue para otimizar o fornecimento de oxigénio celular.",
      "Implica a medição da pressão arterial apenas com um termómetro de mercúrio colocado na axila sem braçadeira.",
      "Exige a administração de água canalizada pura sem sais diretamente numa veia central em bólus de 1 litro em 10 segundos.",
      "Requer que o doente permaneça de cabeça para baixo durante 24 horas consecutivas para impedir o fluxo de sangue no cérebro."
    ],
    "correctIndex": 0,
    "explanation": "A aplicação de enfermagem para efeito Fahraeus-Lindqvist e migração axial dos glóbulos vermelhos baseia-se no princípio: O enfermeiro compreende que a microcirculação possui adaptações biofísicas que reduzem a viscosidade efetiva do sangue para otimizar o fornecimento de oxigénio celular. Esta intervenção é essencial para a segurança hemodinâmica do doente.",
    "distractorAnalysis": [
      "A primeira opção confunde a medição da temperatura axilar com a avaliação hemodinâmica da pressão com esfigmomanómetro.",
      "A segunda opção incorreta provocaria hemólise maciça hipotónica intravascular fatal imediata.",
      "A terceira opção causaria congestão cerebral perigosa, hipertensão intracraniana e asfixia mecânica."
    ],
    "nursingApplication": "O enfermeiro compreende que a microcirculação possui adaptações biofísicas que reduzem a viscosidade efetiva do sangue para otimizar o fornecimento de oxigénio celular."
  },
  {
    "id": 4080,
    "topicId": 4,
    "question": "Ao analisar as variáveis físicas que regem 'efeito Fahraeus-Lindqvist e migração axial dos glóbulos vermelhos', qual das seguintes afirmações expressa com rigor a relação hidrodinâmica entre pressão, velocidade e geometria vascular?",
    "options": [
      "A resistência ao fluxo é independente do raio do vaso e depende apenas da fase da Lua e marés oceânicas.",
      "A relação física correta demonstra que Esta segregação celular reduz o atrito viscoso aparente do sangue nos microvasos e facilita a passagem de capilares estreitos com menor consumo de energia.",
      "O fluxo turbulento nunca produz ruído nem vibrações mecânicas em nenhuma circunstância biológica.",
      "A velocidade do sangue é máxima nos capilares e mínima na aorta ascendente em repouso."
    ],
    "correctIndex": 1,
    "explanation": "A análise hidrodinâmica correta confirma que Esta segregação celular reduz o atrito viscoso aparente do sangue nos microvasos e facilita a passagem de capilares estreitos com menor consumo de energia. O domínio destas leis permite ao enfermeiro interpretar os fenómenos vasculares com rigor científico.",
    "distractorAnalysis": [
      "A primeira opção é uma aberração pseudocientífica que ignora a Lei de Poiseuille e a dependência em r⁴.",
      "A segunda opção é falsa, pois a turbulência é precisamente a geradora física dos sopros e ruídos de Korotkoff.",
      "A terceira opção inverte totalmente a realidade: a velocidade capilar é a mais lenta do sistema cardiovascular."
    ],
    "nursingApplication": "O enfermeiro compreende que a microcirculação possui adaptações biofísicas que reduzem a viscosidade efetiva do sangue para otimizar o fornecimento de oxigénio celular."
  },
  {
    "id": 4081,
    "topicId": 4,
    "question": "Na hidrodinâmica circulatória aplicada à enfermagem, em relação a 'características físicas do escoamento turbulento', qual é a fundamentação biofísica correta?",
    "options": [
      "O sangue comporta-se como um fluido puramente invisível e sem atrito que viaja a velocidades próximas da luz no interior dos vasos.",
      "Trata-se de um processo onde a viscosidade do sangue é zero absoluto e a densidade é igual à do ar atmosférico rarefeito.",
      "o movimento das partículas torna-se tridimensional, irregular e caótico, com formação contínua de turbilhões, redemoinhos e vórtices que se misturam transversalmente. O perfil de velocidade deixa de ser parabólico e torna-se quase plano (embotado) com forte gradiente de velocidade confinado a uma fina camada limite junto à parede.",
      "A pressão hidrostática anula instantaneamente todas as leis de conservação de energia e de massa no sistema vascular."
    ],
    "correctIndex": 2,
    "explanation": "Em biofísica circulatória, características físicas do escoamento turbulento explica-se pelo facto de que o movimento das partículas torna-se tridimensional, irregular e caótico, com formação contínua de turbilhões, redemoinhos e vórtices que se misturam transversalmente. O perfil de velocidade deixa de ser parabólico e torna-se quase plano (embotado) com forte gradiente de velocidade confinado a uma fina camada limite junto à parede.",
    "distractorAnalysis": [
      "A primeira opção incorreta atribui ao sangue propriedades físicas fictícias e velocidades relativísticas impossíveis.",
      "A segunda opção incorreta assume viscosidade nula, o que só ocorreria num superfluido hélio quântico a perto de zero Kelvin.",
      "A terceira opção incorreta ignora os princípios fundamentais da conservação de massa e de energia da física clássica."
    ],
    "nursingApplication": "O enfermeiro identifica a presença de turbulência patológica pela deteção de sopros audíveis à auscultação e pela perda de eficiência circulatória."
  },
  {
    "id": 4082,
    "topicId": 4,
    "question": "Na avaliação clínica e administração de terapêutica por um enfermeiro, como se manifesta a aplicação prática de 'características físicas do escoamento turbulento'?",
    "options": [
      "Implica a medição da pressão arterial apenas com um termómetro de mercúrio colocado na axila sem braçadeira.",
      "Exige a administração de água canalizada pura sem sais diretamente numa veia central em bólus de 1 litro em 10 segundos.",
      "Requer que o doente permaneça de cabeça para baixo durante 24 horas consecutivas para impedir o fluxo de sangue no cérebro.",
      "Manifesta-se clinicamente da seguinte forma: O enfermeiro identifica a presença de turbulência patológica pela deteção de sopros audíveis à auscultação e pela perda de eficiência circulatória."
    ],
    "correctIndex": 3,
    "explanation": "A aplicação de enfermagem para características físicas do escoamento turbulento baseia-se no princípio: O enfermeiro identifica a presença de turbulência patológica pela deteção de sopros audíveis à auscultação e pela perda de eficiência circulatória. Esta intervenção é essencial para a segurança hemodinâmica do doente.",
    "distractorAnalysis": [
      "A primeira opção confunde a medição da temperatura axilar com a avaliação hemodinâmica da pressão com esfigmomanómetro.",
      "A segunda opção incorreta provocaria hemólise maciça hipotónica intravascular fatal imediata.",
      "A terceira opção causaria congestão cerebral perigosa, hipertensão intracraniana e asfixia mecânica."
    ],
    "nursingApplication": "O enfermeiro identifica a presença de turbulência patológica pela deteção de sopros audíveis à auscultação e pela perda de eficiência circulatória."
  },
  {
    "id": 4083,
    "topicId": 4,
    "question": "Ao analisar as variáveis físicas que regem 'características físicas do escoamento turbulento', qual das seguintes afirmações expressa com rigor a relação hidrodinâmica entre pressão, velocidade e geometria vascular?",
    "options": [
      "A relação física correta demonstra que O perfil de velocidade deixa de ser parabólico e torna-se quase plano (embotado) com forte gradiente de velocidade confinado a uma fina camada limite junto à parede.",
      "A resistência ao fluxo é independente do raio do vaso e depende apenas da fase da Lua e marés oceânicas.",
      "O fluxo turbulento nunca produz ruído nem vibrações mecânicas em nenhuma circunstância biológica.",
      "A velocidade do sangue é máxima nos capilares e mínima na aorta ascendente em repouso."
    ],
    "correctIndex": 0,
    "explanation": "A análise hidrodinâmica correta confirma que O perfil de velocidade deixa de ser parabólico e torna-se quase plano (embotado) com forte gradiente de velocidade confinado a uma fina camada limite junto à parede. O domínio destas leis permite ao enfermeiro interpretar os fenómenos vasculares com rigor científico.",
    "distractorAnalysis": [
      "A primeira opção é uma aberração pseudocientífica que ignora a Lei de Poiseuille e a dependência em r⁴.",
      "A segunda opção é falsa, pois a turbulência é precisamente a geradora física dos sopros e ruídos de Korotkoff.",
      "A terceira opção inverte totalmente a realidade: a velocidade capilar é a mais lenta do sistema cardiovascular."
    ],
    "nursingApplication": "O enfermeiro identifica a presença de turbulência patológica pela deteção de sopros audíveis à auscultação e pela perda de eficiência circulatória."
  },
  {
    "id": 4084,
    "topicId": 4,
    "question": "Na hidrodinâmica circulatória aplicada à enfermagem, em relação a 'dissipação de energia mecânica e perda de carga no regime turbulento', qual é a fundamentação biofísica correta?",
    "options": [
      "O sangue comporta-se como um fluido puramente invisível e sem atrito que viaja a velocidades próximas da luz no interior dos vasos.",
      "a resistência hidráulica ao fluxo aumenta drasticamente, exigindo um gradiente de pressão muito maior para manter o mesmo débito volumétrico (a perda de carga passa a ser proporcional a v² em vez de v). Grande parte da energia mecânica impulsionada pelo coração dissipa-se na forma de vibração tecidual sonora (sopros) e atrito térmico microscópico.",
      "Trata-se de um processo onde a viscosidade do sangue é zero absoluto e a densidade é igual à do ar atmosférico rarefeito.",
      "A pressão hidrostática anula instantaneamente todas as leis de conservação de energia e de massa no sistema vascular."
    ],
    "correctIndex": 1,
    "explanation": "Em biofísica circulatória, dissipação de energia mecânica e perda de carga no regime turbulento explica-se pelo facto de que a resistência hidráulica ao fluxo aumenta drasticamente, exigindo um gradiente de pressão muito maior para manter o mesmo débito volumétrico (a perda de carga passa a ser proporcional a v² em vez de v). Grande parte da energia mecânica impulsionada pelo coração dissipa-se na forma de vibração tecidual sonora (sopros) e atrito térmico microscópico.",
    "distractorAnalysis": [
      "A primeira opção incorreta atribui ao sangue propriedades físicas fictícias e velocidades relativísticas impossíveis.",
      "A segunda opção incorreta assume viscosidade nula, o que só ocorreria num superfluido hélio quântico a perto de zero Kelvin.",
      "A terceira opção incorreta ignora os princípios fundamentais da conservação de massa e de energia da física clássica."
    ],
    "nursingApplication": "No doente com estenose da válvula aórtica, o enfermeiro monitoriza sinais de sobrecarga ventricular esquerda e cansaço fácil, pois o miocárdio tem de vencer uma perda de carga extrema para ejetar o sangue."
  },
  {
    "id": 4085,
    "topicId": 4,
    "question": "Na avaliação clínica e administração de terapêutica por um enfermeiro, como se manifesta a aplicação prática de 'dissipação de energia mecânica e perda de carga no regime turbulento'?",
    "options": [
      "Implica a medição da pressão arterial apenas com um termómetro de mercúrio colocado na axila sem braçadeira.",
      "Exige a administração de água canalizada pura sem sais diretamente numa veia central em bólus de 1 litro em 10 segundos.",
      "Manifesta-se clinicamente da seguinte forma: No doente com estenose da válvula aórtica, o enfermeiro monitoriza sinais de sobrecarga ventricular esquerda e cansaço fácil, pois o miocárdio tem de vencer uma perda de carga extrema para ejetar o sangue.",
      "Requer que o doente permaneça de cabeça para baixo durante 24 horas consecutivas para impedir o fluxo de sangue no cérebro."
    ],
    "correctIndex": 2,
    "explanation": "A aplicação de enfermagem para dissipação de energia mecânica e perda de carga no regime turbulento baseia-se no princípio: No doente com estenose da válvula aórtica, o enfermeiro monitoriza sinais de sobrecarga ventricular esquerda e cansaço fácil, pois o miocárdio tem de vencer uma perda de carga extrema para ejetar o sangue. Esta intervenção é essencial para a segurança hemodinâmica do doente.",
    "distractorAnalysis": [
      "A primeira opção confunde a medição da temperatura axilar com a avaliação hemodinâmica da pressão com esfigmomanómetro.",
      "A segunda opção incorreta provocaria hemólise maciça hipotónica intravascular fatal imediata.",
      "A terceira opção causaria congestão cerebral perigosa, hipertensão intracraniana e asfixia mecânica."
    ],
    "nursingApplication": "No doente com estenose da válvula aórtica, o enfermeiro monitoriza sinais de sobrecarga ventricular esquerda e cansaço fácil, pois o miocárdio tem de vencer uma perda de carga extrema para ejetar o sangue."
  },
  {
    "id": 4086,
    "topicId": 4,
    "question": "Ao analisar as variáveis físicas que regem 'dissipação de energia mecânica e perda de carga no regime turbulento', qual das seguintes afirmações expressa com rigor a relação hidrodinâmica entre pressão, velocidade e geometria vascular?",
    "options": [
      "A resistência ao fluxo é independente do raio do vaso e depende apenas da fase da Lua e marés oceânicas.",
      "O fluxo turbulento nunca produz ruído nem vibrações mecânicas em nenhuma circunstância biológica.",
      "A velocidade do sangue é máxima nos capilares e mínima na aorta ascendente em repouso.",
      "A relação física correta demonstra que Grande parte da energia mecânica impulsionada pelo coração dissipa-se na forma de vibração tecidual sonora (sopros) e atrito térmico microscópico."
    ],
    "correctIndex": 3,
    "explanation": "A análise hidrodinâmica correta confirma que Grande parte da energia mecânica impulsionada pelo coração dissipa-se na forma de vibração tecidual sonora (sopros) e atrito térmico microscópico. O domínio destas leis permite ao enfermeiro interpretar os fenómenos vasculares com rigor científico.",
    "distractorAnalysis": [
      "A primeira opção é uma aberração pseudocientífica que ignora a Lei de Poiseuille e a dependência em r⁴.",
      "A segunda opção é falsa, pois a turbulência é precisamente a geradora física dos sopros e ruídos de Korotkoff.",
      "A terceira opção inverte totalmente a realidade: a velocidade capilar é a mais lenta do sistema cardiovascular."
    ],
    "nursingApplication": "No doente com estenose da válvula aórtica, o enfermeiro monitoriza sinais de sobrecarga ventricular esquerda e cansaço fácil, pois o miocárdio tem de vencer uma perda de carga extrema para ejetar o sangue."
  },
  {
    "id": 4087,
    "topicId": 4,
    "question": "Na hidrodinâmica circulatória aplicada à enfermagem, em relação a 'génese biofísica dos sopros cardíacos e vasculares à auscultação', qual é a fundamentação biofísica correta?",
    "options": [
      "as flutuações caóticas locais de velocidade e pressão no regime turbulento fazem vibrar as estruturas elásticas das paredes arteriais e folhetos valvulares. Essas vibrações mecânicas propagam-se através dos tecidos torácicos circundantes sob a forma de ondas acústicas percetíveis pelo diafragma do estetoscópio.",
      "O sangue comporta-se como um fluido puramente invisível e sem atrito que viaja a velocidades próximas da luz no interior dos vasos.",
      "Trata-se de um processo onde a viscosidade do sangue é zero absoluto e a densidade é igual à do ar atmosférico rarefeito.",
      "A pressão hidrostática anula instantaneamente todas as leis de conservação de energia e de massa no sistema vascular."
    ],
    "correctIndex": 0,
    "explanation": "Em biofísica circulatória, génese biofísica dos sopros cardíacos e vasculares à auscultação explica-se pelo facto de que as flutuações caóticas locais de velocidade e pressão no regime turbulento fazem vibrar as estruturas elásticas das paredes arteriais e folhetos valvulares. Essas vibrações mecânicas propagam-se através dos tecidos torácicos circundantes sob a forma de ondas acústicas percetíveis pelo diafragma do estetoscópio.",
    "distractorAnalysis": [
      "A primeira opção incorreta atribui ao sangue propriedades físicas fictícias e velocidades relativísticas impossíveis.",
      "A segunda opção incorreta assume viscosidade nula, o que só ocorreria num superfluido hélio quântico a perto de zero Kelvin.",
      "A terceira opção incorreta ignora os princípios fundamentais da conservação de massa e de energia da física clássica."
    ],
    "nursingApplication": "O enfermeiro treina a auscultação cardíaca nos quatro focos principais (aórtico, pulmonar, tricúspide e mitral), correlacionando sopros sistólicos ou diastólicos com turbulência patológica."
  },
  {
    "id": 4088,
    "topicId": 4,
    "question": "Na avaliação clínica e administração de terapêutica por um enfermeiro, como se manifesta a aplicação prática de 'génese biofísica dos sopros cardíacos e vasculares à auscultação'?",
    "options": [
      "Implica a medição da pressão arterial apenas com um termómetro de mercúrio colocado na axila sem braçadeira.",
      "Manifesta-se clinicamente da seguinte forma: O enfermeiro treina a auscultação cardíaca nos quatro focos principais (aórtico, pulmonar, tricúspide e mitral), correlacionando sopros sistólicos ou diastólicos com turbulência patológica.",
      "Exige a administração de água canalizada pura sem sais diretamente numa veia central em bólus de 1 litro em 10 segundos.",
      "Requer que o doente permaneça de cabeça para baixo durante 24 horas consecutivas para impedir o fluxo de sangue no cérebro."
    ],
    "correctIndex": 1,
    "explanation": "A aplicação de enfermagem para génese biofísica dos sopros cardíacos e vasculares à auscultação baseia-se no princípio: O enfermeiro treina a auscultação cardíaca nos quatro focos principais (aórtico, pulmonar, tricúspide e mitral), correlacionando sopros sistólicos ou diastólicos com turbulência patológica. Esta intervenção é essencial para a segurança hemodinâmica do doente.",
    "distractorAnalysis": [
      "A primeira opção confunde a medição da temperatura axilar com a avaliação hemodinâmica da pressão com esfigmomanómetro.",
      "A segunda opção incorreta provocaria hemólise maciça hipotónica intravascular fatal imediata.",
      "A terceira opção causaria congestão cerebral perigosa, hipertensão intracraniana e asfixia mecânica."
    ],
    "nursingApplication": "O enfermeiro treina a auscultação cardíaca nos quatro focos principais (aórtico, pulmonar, tricúspide e mitral), correlacionando sopros sistólicos ou diastólicos com turbulência patológica."
  },
  {
    "id": 4089,
    "topicId": 4,
    "question": "Ao analisar as variáveis físicas que regem 'génese biofísica dos sopros cardíacos e vasculares à auscultação', qual das seguintes afirmações expressa com rigor a relação hidrodinâmica entre pressão, velocidade e geometria vascular?",
    "options": [
      "A resistência ao fluxo é independente do raio do vaso e depende apenas da fase da Lua e marés oceânicas.",
      "O fluxo turbulento nunca produz ruído nem vibrações mecânicas em nenhuma circunstância biológica.",
      "A relação física correta demonstra que Essas vibrações mecânicas propagam-se através dos tecidos torácicos circundantes sob a forma de ondas acústicas percetíveis pelo diafragma do estetoscópio.",
      "A velocidade do sangue é máxima nos capilares e mínima na aorta ascendente em repouso."
    ],
    "correctIndex": 2,
    "explanation": "A análise hidrodinâmica correta confirma que Essas vibrações mecânicas propagam-se através dos tecidos torácicos circundantes sob a forma de ondas acústicas percetíveis pelo diafragma do estetoscópio. O domínio destas leis permite ao enfermeiro interpretar os fenómenos vasculares com rigor científico.",
    "distractorAnalysis": [
      "A primeira opção é uma aberração pseudocientífica que ignora a Lei de Poiseuille e a dependência em r⁴.",
      "A segunda opção é falsa, pois a turbulência é precisamente a geradora física dos sopros e ruídos de Korotkoff.",
      "A terceira opção inverte totalmente a realidade: a velocidade capilar é a mais lenta do sistema cardiovascular."
    ],
    "nursingApplication": "O enfermeiro treina a auscultação cardíaca nos quatro focos principais (aórtico, pulmonar, tricúspide e mitral), correlacionando sopros sistólicos ou diastólicos com turbulência patológica."
  },
  {
    "id": 4090,
    "topicId": 4,
    "question": "Na hidrodinâmica circulatória aplicada à enfermagem, em relação a 'lesão endotelial provocada por fluxo turbulento crónico', qual é a fundamentação biofísica correta?",
    "options": [
      "O sangue comporta-se como um fluido puramente invisível e sem atrito que viaja a velocidades próximas da luz no interior dos vasos.",
      "Trata-se de um processo onde a viscosidade do sangue é zero absoluto e a densidade é igual à do ar atmosférico rarefeito.",
      "A pressão hidrostática anula instantaneamente todas as leis de conservação de energia e de massa no sistema vascular.",
      "as tensões de cisalhamento oscilatórias e caóticas na parede vascular ativam cascatas inflamatórias, suprimem a síntese de óxido nítrico e promovem a adesão de plaquetas e monócitos. Estas zonas com escoamento turbulento (bifurcações arteriais e curvaturas acentuadas) são locais de eleição para o desenvolvimento precoce de placas de ateroma."
    ],
    "correctIndex": 3,
    "explanation": "Em biofísica circulatória, lesão endotelial provocada por fluxo turbulento crónico explica-se pelo facto de que as tensões de cisalhamento oscilatórias e caóticas na parede vascular ativam cascatas inflamatórias, suprimem a síntese de óxido nítrico e promovem a adesão de plaquetas e monócitos. Estas zonas com escoamento turbulento (bifurcações arteriais e curvaturas acentuadas) são locais de eleição para o desenvolvimento precoce de placas de ateroma.",
    "distractorAnalysis": [
      "A primeira opção incorreta atribui ao sangue propriedades físicas fictícias e velocidades relativísticas impossíveis.",
      "A segunda opção incorreta assume viscosidade nula, o que só ocorreria num superfluido hélio quântico a perto de zero Kelvin.",
      "A terceira opção incorreta ignora os princípios fundamentais da conservação de massa e de energia da física clássica."
    ],
    "nursingApplication": "O enfermeiro atua na educação para a saúde e controlo dos fatores de risco cardiovascular (tabagismo, hipertensão, dislipidemia) para prevenir a progressão das placas ateroscleróticas."
  },
  {
    "id": 4091,
    "topicId": 4,
    "question": "Na avaliação clínica e administração de terapêutica por um enfermeiro, como se manifesta a aplicação prática de 'lesão endotelial provocada por fluxo turbulento crónico'?",
    "options": [
      "Manifesta-se clinicamente da seguinte forma: O enfermeiro atua na educação para a saúde e controlo dos fatores de risco cardiovascular (tabagismo, hipertensão, dislipidemia) para prevenir a progressão das placas ateroscleróticas.",
      "Implica a medição da pressão arterial apenas com um termómetro de mercúrio colocado na axila sem braçadeira.",
      "Exige a administração de água canalizada pura sem sais diretamente numa veia central em bólus de 1 litro em 10 segundos.",
      "Requer que o doente permaneça de cabeça para baixo durante 24 horas consecutivas para impedir o fluxo de sangue no cérebro."
    ],
    "correctIndex": 0,
    "explanation": "A aplicação de enfermagem para lesão endotelial provocada por fluxo turbulento crónico baseia-se no princípio: O enfermeiro atua na educação para a saúde e controlo dos fatores de risco cardiovascular (tabagismo, hipertensão, dislipidemia) para prevenir a progressão das placas ateroscleróticas. Esta intervenção é essencial para a segurança hemodinâmica do doente.",
    "distractorAnalysis": [
      "A primeira opção confunde a medição da temperatura axilar com a avaliação hemodinâmica da pressão com esfigmomanómetro.",
      "A segunda opção incorreta provocaria hemólise maciça hipotónica intravascular fatal imediata.",
      "A terceira opção causaria congestão cerebral perigosa, hipertensão intracraniana e asfixia mecânica."
    ],
    "nursingApplication": "O enfermeiro atua na educação para a saúde e controlo dos fatores de risco cardiovascular (tabagismo, hipertensão, dislipidemia) para prevenir a progressão das placas ateroscleróticas."
  },
  {
    "id": 4092,
    "topicId": 4,
    "question": "Ao analisar as variáveis físicas que regem 'lesão endotelial provocada por fluxo turbulento crónico', qual das seguintes afirmações expressa com rigor a relação hidrodinâmica entre pressão, velocidade e geometria vascular?",
    "options": [
      "A resistência ao fluxo é independente do raio do vaso e depende apenas da fase da Lua e marés oceânicas.",
      "A relação física correta demonstra que Estas zonas com escoamento turbulento (bifurcações arteriais e curvaturas acentuadas) são locais de eleição para o desenvolvimento precoce de placas de ateroma.",
      "O fluxo turbulento nunca produz ruído nem vibrações mecânicas em nenhuma circunstância biológica.",
      "A velocidade do sangue é máxima nos capilares e mínima na aorta ascendente em repouso."
    ],
    "correctIndex": 1,
    "explanation": "A análise hidrodinâmica correta confirma que Estas zonas com escoamento turbulento (bifurcações arteriais e curvaturas acentuadas) são locais de eleição para o desenvolvimento precoce de placas de ateroma. O domínio destas leis permite ao enfermeiro interpretar os fenómenos vasculares com rigor científico.",
    "distractorAnalysis": [
      "A primeira opção é uma aberração pseudocientífica que ignora a Lei de Poiseuille e a dependência em r⁴.",
      "A segunda opção é falsa, pois a turbulência é precisamente a geradora física dos sopros e ruídos de Korotkoff.",
      "A terceira opção inverte totalmente a realidade: a velocidade capilar é a mais lenta do sistema cardiovascular."
    ],
    "nursingApplication": "O enfermeiro atua na educação para a saúde e controlo dos fatores de risco cardiovascular (tabagismo, hipertensão, dislipidemia) para prevenir a progressão das placas ateroscleróticas."
  },
  {
    "id": 4093,
    "topicId": 4,
    "question": "Na hidrodinâmica circulatória aplicada à enfermagem, em relação a 'diferenciação clínica entre sopro funcional e sopro orgânico estrutural', qual é a fundamentação biofísica correta?",
    "options": [
      "O sangue comporta-se como um fluido puramente invisível e sem atrito que viaja a velocidades próximas da luz no interior dos vasos.",
      "Trata-se de um processo onde a viscosidade do sangue é zero absoluto e a densidade é igual à do ar atmosférico rarefeito.",
      "o sopro funcional decorre de alterações reológicas ou hiperdinâmicas transitórias (como anemia severa ou febre alta) sem anomalia anatómica das válvulas. Já o sopro orgânico resulta de defeitos estruturais fixos (como estenose valvular por calcificação, insuficiência ou prolapso de folhetos com regurgitação turbulenta).",
      "A pressão hidrostática anula instantaneamente todas as leis de conservação de energia e de massa no sistema vascular."
    ],
    "correctIndex": 2,
    "explanation": "Em biofísica circulatória, diferenciação clínica entre sopro funcional e sopro orgânico estrutural explica-se pelo facto de que o sopro funcional decorre de alterações reológicas ou hiperdinâmicas transitórias (como anemia severa ou febre alta) sem anomalia anatómica das válvulas. Já o sopro orgânico resulta de defeitos estruturais fixos (como estenose valvular por calcificação, insuficiência ou prolapso de folhetos com regurgitação turbulenta).",
    "distractorAnalysis": [
      "A primeira opção incorreta atribui ao sangue propriedades físicas fictícias e velocidades relativísticas impossíveis.",
      "A segunda opção incorreta assume viscosidade nula, o que só ocorreria num superfluido hélio quântico a perto de zero Kelvin.",
      "A terceira opção incorreta ignora os princípios fundamentais da conservação de massa e de energia da física clássica."
    ],
    "nursingApplication": "O enfermeiro vigia o hemograma do doente anémico e observa que a transfusão de concentrado de eritrócitos eleva a viscosidade e atenua ou elimina o sopro funcional de ejeção."
  },
  {
    "id": 4094,
    "topicId": 4,
    "question": "Na avaliação clínica e administração de terapêutica por um enfermeiro, como se manifesta a aplicação prática de 'diferenciação clínica entre sopro funcional e sopro orgânico estrutural'?",
    "options": [
      "Implica a medição da pressão arterial apenas com um termómetro de mercúrio colocado na axila sem braçadeira.",
      "Exige a administração de água canalizada pura sem sais diretamente numa veia central em bólus de 1 litro em 10 segundos.",
      "Requer que o doente permaneça de cabeça para baixo durante 24 horas consecutivas para impedir o fluxo de sangue no cérebro.",
      "Manifesta-se clinicamente da seguinte forma: O enfermeiro vigia o hemograma do doente anémico e observa que a transfusão de concentrado de eritrócitos eleva a viscosidade e atenua ou elimina o sopro funcional de ejeção."
    ],
    "correctIndex": 3,
    "explanation": "A aplicação de enfermagem para diferenciação clínica entre sopro funcional e sopro orgânico estrutural baseia-se no princípio: O enfermeiro vigia o hemograma do doente anémico e observa que a transfusão de concentrado de eritrócitos eleva a viscosidade e atenua ou elimina o sopro funcional de ejeção. Esta intervenção é essencial para a segurança hemodinâmica do doente.",
    "distractorAnalysis": [
      "A primeira opção confunde a medição da temperatura axilar com a avaliação hemodinâmica da pressão com esfigmomanómetro.",
      "A segunda opção incorreta provocaria hemólise maciça hipotónica intravascular fatal imediata.",
      "A terceira opção causaria congestão cerebral perigosa, hipertensão intracraniana e asfixia mecânica."
    ],
    "nursingApplication": "O enfermeiro vigia o hemograma do doente anémico e observa que a transfusão de concentrado de eritrócitos eleva a viscosidade e atenua ou elimina o sopro funcional de ejeção."
  },
  {
    "id": 4095,
    "topicId": 4,
    "question": "Ao analisar as variáveis físicas que regem 'diferenciação clínica entre sopro funcional e sopro orgânico estrutural', qual das seguintes afirmações expressa com rigor a relação hidrodinâmica entre pressão, velocidade e geometria vascular?",
    "options": [
      "A relação física correta demonstra que Já o sopro orgânico resulta de defeitos estruturais fixos (como estenose valvular por calcificação, insuficiência ou prolapso de folhetos com regurgitação turbulenta).",
      "A resistência ao fluxo é independente do raio do vaso e depende apenas da fase da Lua e marés oceânicas.",
      "O fluxo turbulento nunca produz ruído nem vibrações mecânicas em nenhuma circunstância biológica.",
      "A velocidade do sangue é máxima nos capilares e mínima na aorta ascendente em repouso."
    ],
    "correctIndex": 0,
    "explanation": "A análise hidrodinâmica correta confirma que Já o sopro orgânico resulta de defeitos estruturais fixos (como estenose valvular por calcificação, insuficiência ou prolapso de folhetos com regurgitação turbulenta). O domínio destas leis permite ao enfermeiro interpretar os fenómenos vasculares com rigor científico.",
    "distractorAnalysis": [
      "A primeira opção é uma aberração pseudocientífica que ignora a Lei de Poiseuille e a dependência em r⁴.",
      "A segunda opção é falsa, pois a turbulência é precisamente a geradora física dos sopros e ruídos de Korotkoff.",
      "A terceira opção inverte totalmente a realidade: a velocidade capilar é a mais lenta do sistema cardiovascular."
    ],
    "nursingApplication": "O enfermeiro vigia o hemograma do doente anémico e observa que a transfusão de concentrado de eritrócitos eleva a viscosidade e atenua ou elimina o sopro funcional de ejeção."
  },
  {
    "id": 4096,
    "topicId": 4,
    "question": "Na hidrodinâmica circulatória aplicada à enfermagem, em relação a 'fórmula e significado físico do Número de Reynolds', qual é a fundamentação biofísica correta?",
    "options": [
      "O sangue comporta-se como um fluido puramente invisível e sem atrito que viaja a velocidades próximas da luz no interior dos vasos.",
      "Re = (ρ · v · d) / η, representando a razão adimensional entre as forças de inércia (que tendem a desordenar o fluido) e as forças viscosas de atrito (que tendem a amortecer perturbações e manter o fluxo laminar). Onde ρ é a massa volúmica (densidade), v a velocidade média, d o diâmetro da conduta e η a viscosidade dinâmica do fluido.",
      "Trata-se de um processo onde a viscosidade do sangue é zero absoluto e a densidade é igual à do ar atmosférico rarefeito.",
      "A pressão hidrostática anula instantaneamente todas as leis de conservação de energia e de massa no sistema vascular."
    ],
    "correctIndex": 1,
    "explanation": "Em biofísica circulatória, fórmula e significado físico do Número de Reynolds explica-se pelo facto de que Re = (ρ · v · d) / η, representando a razão adimensional entre as forças de inércia (que tendem a desordenar o fluido) e as forças viscosas de atrito (que tendem a amortecer perturbações e manter o fluxo laminar). Onde ρ é a massa volúmica (densidade), v a velocidade média, d o diâmetro da conduta e η a viscosidade dinâmica do fluido.",
    "distractorAnalysis": [
      "A primeira opção incorreta atribui ao sangue propriedades físicas fictícias e velocidades relativísticas impossíveis.",
      "A segunda opção incorreta assume viscosidade nula, o que só ocorreria num superfluido hélio quântico a perto de zero Kelvin.",
      "A terceira opção incorreta ignora os princípios fundamentais da conservação de massa e de energia da física clássica."
    ],
    "nursingApplication": "O enfermeiro aplica esta equação para compreender por que o sangue atinge turbulência facilmente na aorta ascendente durante o pico de ejeção sistólica (onde v e d são máximos)."
  },
  {
    "id": 4097,
    "topicId": 4,
    "question": "Na avaliação clínica e administração de terapêutica por um enfermeiro, como se manifesta a aplicação prática de 'fórmula e significado físico do Número de Reynolds'?",
    "options": [
      "Implica a medição da pressão arterial apenas com um termómetro de mercúrio colocado na axila sem braçadeira.",
      "Exige a administração de água canalizada pura sem sais diretamente numa veia central em bólus de 1 litro em 10 segundos.",
      "Manifesta-se clinicamente da seguinte forma: O enfermeiro aplica esta equação para compreender por que o sangue atinge turbulência facilmente na aorta ascendente durante o pico de ejeção sistólica (onde v e d são máximos).",
      "Requer que o doente permaneça de cabeça para baixo durante 24 horas consecutivas para impedir o fluxo de sangue no cérebro."
    ],
    "correctIndex": 2,
    "explanation": "A aplicação de enfermagem para fórmula e significado físico do Número de Reynolds baseia-se no princípio: O enfermeiro aplica esta equação para compreender por que o sangue atinge turbulência facilmente na aorta ascendente durante o pico de ejeção sistólica (onde v e d são máximos). Esta intervenção é essencial para a segurança hemodinâmica do doente.",
    "distractorAnalysis": [
      "A primeira opção confunde a medição da temperatura axilar com a avaliação hemodinâmica da pressão com esfigmomanómetro.",
      "A segunda opção incorreta provocaria hemólise maciça hipotónica intravascular fatal imediata.",
      "A terceira opção causaria congestão cerebral perigosa, hipertensão intracraniana e asfixia mecânica."
    ],
    "nursingApplication": "O enfermeiro aplica esta equação para compreender por que o sangue atinge turbulência facilmente na aorta ascendente durante o pico de ejeção sistólica (onde v e d são máximos)."
  },
  {
    "id": 4098,
    "topicId": 4,
    "question": "Ao analisar as variáveis físicas que regem 'fórmula e significado físico do Número de Reynolds', qual das seguintes afirmações expressa com rigor a relação hidrodinâmica entre pressão, velocidade e geometria vascular?",
    "options": [
      "A resistência ao fluxo é independente do raio do vaso e depende apenas da fase da Lua e marés oceânicas.",
      "O fluxo turbulento nunca produz ruído nem vibrações mecânicas em nenhuma circunstância biológica.",
      "A velocidade do sangue é máxima nos capilares e mínima na aorta ascendente em repouso.",
      "A relação física correta demonstra que Onde ρ é a massa volúmica (densidade), v a velocidade média, d o diâmetro da conduta e η a viscosidade dinâmica do fluido."
    ],
    "correctIndex": 3,
    "explanation": "A análise hidrodinâmica correta confirma que Onde ρ é a massa volúmica (densidade), v a velocidade média, d o diâmetro da conduta e η a viscosidade dinâmica do fluido. O domínio destas leis permite ao enfermeiro interpretar os fenómenos vasculares com rigor científico.",
    "distractorAnalysis": [
      "A primeira opção é uma aberração pseudocientífica que ignora a Lei de Poiseuille e a dependência em r⁴.",
      "A segunda opção é falsa, pois a turbulência é precisamente a geradora física dos sopros e ruídos de Korotkoff.",
      "A terceira opção inverte totalmente a realidade: a velocidade capilar é a mais lenta do sistema cardiovascular."
    ],
    "nursingApplication": "O enfermeiro aplica esta equação para compreender por que o sangue atinge turbulência facilmente na aorta ascendente durante o pico de ejeção sistólica (onde v e d são máximos)."
  },
  {
    "id": 4099,
    "topicId": 4,
    "question": "Na hidrodinâmica circulatória aplicada à enfermagem, em relação a 'limiar crítico do Número de Reynolds no sistema vascular humano', qual é a fundamentação biofísica correta?",
    "options": [
      "em tubos lisos retos, o fluxo é estritamente laminar para Re < 2000; a zona de transição situa-se entre 2000 e 3000, e acima de 3000 o fluxo é francamente turbulento. No sistema cardiovascular, devido à pulsatilidade cardíaca, ramificações e curvaturas anatómicas, a turbulência local pode surgir precocemente para Re tão baixos quanto 1000 a 1500.",
      "O sangue comporta-se como um fluido puramente invisível e sem atrito que viaja a velocidades próximas da luz no interior dos vasos.",
      "Trata-se de um processo onde a viscosidade do sangue é zero absoluto e a densidade é igual à do ar atmosférico rarefeito.",
      "A pressão hidrostática anula instantaneamente todas as leis de conservação de energia e de massa no sistema vascular."
    ],
    "correctIndex": 0,
    "explanation": "Em biofísica circulatória, limiar crítico do Número de Reynolds no sistema vascular humano explica-se pelo facto de que em tubos lisos retos, o fluxo é estritamente laminar para Re < 2000; a zona de transição situa-se entre 2000 e 3000, e acima de 3000 o fluxo é francamente turbulento. No sistema cardiovascular, devido à pulsatilidade cardíaca, ramificações e curvaturas anatómicas, a turbulência local pode surgir precocemente para Re tão baixos quanto 1000 a 1500.",
    "distractorAnalysis": [
      "A primeira opção incorreta atribui ao sangue propriedades físicas fictícias e velocidades relativísticas impossíveis.",
      "A segunda opção incorreta assume viscosidade nula, o que só ocorreria num superfluido hélio quântico a perto de zero Kelvin.",
      "A terceira opção incorreta ignora os princípios fundamentais da conservação de massa e de energia da física clássica."
    ],
    "nursingApplication": "O enfermeiro sabe que nas bifurcações das grandes artérias (como a bifurcação da carótida comum) a geometria complexa baixa o limiar crítico de Re, favorecendo turbilhões."
  },
  {
    "id": 4100,
    "topicId": 4,
    "question": "Na avaliação clínica e administração de terapêutica por um enfermeiro, como se manifesta a aplicação prática de 'limiar crítico do Número de Reynolds no sistema vascular humano'?",
    "options": [
      "Implica a medição da pressão arterial apenas com um termómetro de mercúrio colocado na axila sem braçadeira.",
      "Manifesta-se clinicamente da seguinte forma: O enfermeiro sabe que nas bifurcações das grandes artérias (como a bifurcação da carótida comum) a geometria complexa baixa o limiar crítico de Re, favorecendo turbilhões.",
      "Exige a administração de água canalizada pura sem sais diretamente numa veia central em bólus de 1 litro em 10 segundos.",
      "Requer que o doente permaneça de cabeça para baixo durante 24 horas consecutivas para impedir o fluxo de sangue no cérebro."
    ],
    "correctIndex": 1,
    "explanation": "A aplicação de enfermagem para limiar crítico do Número de Reynolds no sistema vascular humano baseia-se no princípio: O enfermeiro sabe que nas bifurcações das grandes artérias (como a bifurcação da carótida comum) a geometria complexa baixa o limiar crítico de Re, favorecendo turbilhões. Esta intervenção é essencial para a segurança hemodinâmica do doente.",
    "distractorAnalysis": [
      "A primeira opção confunde a medição da temperatura axilar com a avaliação hemodinâmica da pressão com esfigmomanómetro.",
      "A segunda opção incorreta provocaria hemólise maciça hipotónica intravascular fatal imediata.",
      "A terceira opção causaria congestão cerebral perigosa, hipertensão intracraniana e asfixia mecânica."
    ],
    "nursingApplication": "O enfermeiro sabe que nas bifurcações das grandes artérias (como a bifurcação da carótida comum) a geometria complexa baixa o limiar crítico de Re, favorecendo turbilhões."
  },
  {
    "id": 4101,
    "topicId": 4,
    "question": "Ao analisar as variáveis físicas que regem 'limiar crítico do Número de Reynolds no sistema vascular humano', qual das seguintes afirmações expressa com rigor a relação hidrodinâmica entre pressão, velocidade e geometria vascular?",
    "options": [
      "A resistência ao fluxo é independente do raio do vaso e depende apenas da fase da Lua e marés oceânicas.",
      "O fluxo turbulento nunca produz ruído nem vibrações mecânicas em nenhuma circunstância biológica.",
      "A relação física correta demonstra que No sistema cardiovascular, devido à pulsatilidade cardíaca, ramificações e curvaturas anatómicas, a turbulência local pode surgir precocemente para Re tão baixos quanto 1000 a 1500.",
      "A velocidade do sangue é máxima nos capilares e mínima na aorta ascendente em repouso."
    ],
    "correctIndex": 2,
    "explanation": "A análise hidrodinâmica correta confirma que No sistema cardiovascular, devido à pulsatilidade cardíaca, ramificações e curvaturas anatómicas, a turbulência local pode surgir precocemente para Re tão baixos quanto 1000 a 1500. O domínio destas leis permite ao enfermeiro interpretar os fenómenos vasculares com rigor científico.",
    "distractorAnalysis": [
      "A primeira opção é uma aberração pseudocientífica que ignora a Lei de Poiseuille e a dependência em r⁴.",
      "A segunda opção é falsa, pois a turbulência é precisamente a geradora física dos sopros e ruídos de Korotkoff.",
      "A terceira opção inverte totalmente a realidade: a velocidade capilar é a mais lenta do sistema cardiovascular."
    ],
    "nursingApplication": "O enfermeiro sabe que nas bifurcações das grandes artérias (como a bifurcação da carótida comum) a geometria complexa baixa o limiar crítico de Re, favorecendo turbilhões."
  },
  {
    "id": 4102,
    "topicId": 4,
    "question": "Na hidrodinâmica circulatória aplicada à enfermagem, em relação a 'efeito da velocidade (v) e diâmetro (d) no aumento de Re', qual é a fundamentação biofísica correta?",
    "options": [
      "O sangue comporta-se como um fluido puramente invisível e sem atrito que viaja a velocidades próximas da luz no interior dos vasos.",
      "Trata-se de um processo onde a viscosidade do sangue é zero absoluto e a densidade é igual à do ar atmosférico rarefeito.",
      "A pressão hidrostática anula instantaneamente todas as leis de conservação de energia e de massa no sistema vascular.",
      "o Número de Reynolds é diretamente proporcional à velocidade do fluido e ao diâmetro interno do vaso sanguíneo. Vasos de grande calibre com fluxos de alta velocidade (como a aorta na saída do ventrículo esquerdo) apresentam os maiores valores basais de Re no corpo humano (Re ~ 1500 a 4000 na sístole)."
    ],
    "correctIndex": 3,
    "explanation": "Em biofísica circulatória, efeito da velocidade (v) e diâmetro (d) no aumento de Re explica-se pelo facto de que o Número de Reynolds é diretamente proporcional à velocidade do fluido e ao diâmetro interno do vaso sanguíneo. Vasos de grande calibre com fluxos de alta velocidade (como a aorta na saída do ventrículo esquerdo) apresentam os maiores valores basais de Re no corpo humano (Re ~ 1500 a 4000 na sístole).",
    "distractorAnalysis": [
      "A primeira opção incorreta atribui ao sangue propriedades físicas fictícias e velocidades relativísticas impossíveis.",
      "A segunda opção incorreta assume viscosidade nula, o que só ocorreria num superfluido hélio quântico a perto de zero Kelvin.",
      "A terceira opção incorreta ignora os princípios fundamentais da conservação de massa e de energia da física clássica."
    ],
    "nursingApplication": "Em exercício físico vigoroso, o aumento do débito cardíaco e da velocidade de ejeção dispara o Re na aorta, podendo gerar um sopro sistólico fisiológico benigno de ejeção."
  },
  {
    "id": 4103,
    "topicId": 4,
    "question": "Na avaliação clínica e administração de terapêutica por um enfermeiro, como se manifesta a aplicação prática de 'efeito da velocidade (v) e diâmetro (d) no aumento de Re'?",
    "options": [
      "Manifesta-se clinicamente da seguinte forma: Em exercício físico vigoroso, o aumento do débito cardíaco e da velocidade de ejeção dispara o Re na aorta, podendo gerar um sopro sistólico fisiológico benigno de ejeção.",
      "Implica a medição da pressão arterial apenas com um termómetro de mercúrio colocado na axila sem braçadeira.",
      "Exige a administração de água canalizada pura sem sais diretamente numa veia central em bólus de 1 litro em 10 segundos.",
      "Requer que o doente permaneça de cabeça para baixo durante 24 horas consecutivas para impedir o fluxo de sangue no cérebro."
    ],
    "correctIndex": 0,
    "explanation": "A aplicação de enfermagem para efeito da velocidade (v) e diâmetro (d) no aumento de Re baseia-se no princípio: Em exercício físico vigoroso, o aumento do débito cardíaco e da velocidade de ejeção dispara o Re na aorta, podendo gerar um sopro sistólico fisiológico benigno de ejeção. Esta intervenção é essencial para a segurança hemodinâmica do doente.",
    "distractorAnalysis": [
      "A primeira opção confunde a medição da temperatura axilar com a avaliação hemodinâmica da pressão com esfigmomanómetro.",
      "A segunda opção incorreta provocaria hemólise maciça hipotónica intravascular fatal imediata.",
      "A terceira opção causaria congestão cerebral perigosa, hipertensão intracraniana e asfixia mecânica."
    ],
    "nursingApplication": "Em exercício físico vigoroso, o aumento do débito cardíaco e da velocidade de ejeção dispara o Re na aorta, podendo gerar um sopro sistólico fisiológico benigno de ejeção."
  },
  {
    "id": 4104,
    "topicId": 4,
    "question": "Ao analisar as variáveis físicas que regem 'efeito da velocidade (v) e diâmetro (d) no aumento de Re', qual das seguintes afirmações expressa com rigor a relação hidrodinâmica entre pressão, velocidade e geometria vascular?",
    "options": [
      "A resistência ao fluxo é independente do raio do vaso e depende apenas da fase da Lua e marés oceânicas.",
      "A relação física correta demonstra que Vasos de grande calibre com fluxos de alta velocidade (como a aorta na saída do ventrículo esquerdo) apresentam os maiores valores basais de Re no corpo humano (Re ~ 1500 a 4000 na sístole).",
      "O fluxo turbulento nunca produz ruído nem vibrações mecânicas em nenhuma circunstância biológica.",
      "A velocidade do sangue é máxima nos capilares e mínima na aorta ascendente em repouso."
    ],
    "correctIndex": 1,
    "explanation": "A análise hidrodinâmica correta confirma que Vasos de grande calibre com fluxos de alta velocidade (como a aorta na saída do ventrículo esquerdo) apresentam os maiores valores basais de Re no corpo humano (Re ~ 1500 a 4000 na sístole). O domínio destas leis permite ao enfermeiro interpretar os fenómenos vasculares com rigor científico.",
    "distractorAnalysis": [
      "A primeira opção é uma aberração pseudocientífica que ignora a Lei de Poiseuille e a dependência em r⁴.",
      "A segunda opção é falsa, pois a turbulência é precisamente a geradora física dos sopros e ruídos de Korotkoff.",
      "A terceira opção inverte totalmente a realidade: a velocidade capilar é a mais lenta do sistema cardiovascular."
    ],
    "nursingApplication": "Em exercício físico vigoroso, o aumento do débito cardíaco e da velocidade de ejeção dispara o Re na aorta, podendo gerar um sopro sistólico fisiológico benigno de ejeção."
  },
  {
    "id": 4105,
    "topicId": 4,
    "question": "Na hidrodinâmica circulatória aplicada à enfermagem, em relação a 'efeito inverso da viscosidade (η) no Número de Reynolds', qual é a fundamentação biofísica correta?",
    "options": [
      "O sangue comporta-se como um fluido puramente invisível e sem atrito que viaja a velocidades próximas da luz no interior dos vasos.",
      "Trata-se de um processo onde a viscosidade do sangue é zero absoluto e a densidade é igual à do ar atmosférico rarefeito.",
      "o Número de Reynolds é inversamente proporcional à viscosidade dinâmica (η) do sangue. Quando a viscosidade diminui (como na anemia acentuada ou em hemodiluição massiva com soros cristaloides), o denominador de Re cai, fazendo disparar o valor de Re para além do limiar crítico de 2000.",
      "A pressão hidrostática anula instantaneamente todas as leis de conservação de energia e de massa no sistema vascular."
    ],
    "correctIndex": 2,
    "explanation": "Em biofísica circulatória, efeito inverso da viscosidade (η) no Número de Reynolds explica-se pelo facto de que o Número de Reynolds é inversamente proporcional à viscosidade dinâmica (η) do sangue. Quando a viscosidade diminui (como na anemia acentuada ou em hemodiluição massiva com soros cristaloides), o denominador de Re cai, fazendo disparar o valor de Re para além do limiar crítico de 2000.",
    "distractorAnalysis": [
      "A primeira opção incorreta atribui ao sangue propriedades físicas fictícias e velocidades relativísticas impossíveis.",
      "A segunda opção incorreta assume viscosidade nula, o que só ocorreria num superfluido hélio quântico a perto de zero Kelvin.",
      "A terceira opção incorreta ignora os princípios fundamentais da conservação de massa e de energia da física clássica."
    ],
    "nursingApplication": "O enfermeiro compreende por que doentes com hemoglobina < 7 g/dL desenvolvem frequentemente sopros cardíacos sistólicos audíveis sem qualquer anomalia valvular prévia."
  },
  {
    "id": 4106,
    "topicId": 4,
    "question": "Na avaliação clínica e administração de terapêutica por um enfermeiro, como se manifesta a aplicação prática de 'efeito inverso da viscosidade (η) no Número de Reynolds'?",
    "options": [
      "Implica a medição da pressão arterial apenas com um termómetro de mercúrio colocado na axila sem braçadeira.",
      "Exige a administração de água canalizada pura sem sais diretamente numa veia central em bólus de 1 litro em 10 segundos.",
      "Requer que o doente permaneça de cabeça para baixo durante 24 horas consecutivas para impedir o fluxo de sangue no cérebro.",
      "Manifesta-se clinicamente da seguinte forma: O enfermeiro compreende por que doentes com hemoglobina < 7 g/dL desenvolvem frequentemente sopros cardíacos sistólicos audíveis sem qualquer anomalia valvular prévia."
    ],
    "correctIndex": 3,
    "explanation": "A aplicação de enfermagem para efeito inverso da viscosidade (η) no Número de Reynolds baseia-se no princípio: O enfermeiro compreende por que doentes com hemoglobina < 7 g/dL desenvolvem frequentemente sopros cardíacos sistólicos audíveis sem qualquer anomalia valvular prévia. Esta intervenção é essencial para a segurança hemodinâmica do doente.",
    "distractorAnalysis": [
      "A primeira opção confunde a medição da temperatura axilar com a avaliação hemodinâmica da pressão com esfigmomanómetro.",
      "A segunda opção incorreta provocaria hemólise maciça hipotónica intravascular fatal imediata.",
      "A terceira opção causaria congestão cerebral perigosa, hipertensão intracraniana e asfixia mecânica."
    ],
    "nursingApplication": "O enfermeiro compreende por que doentes com hemoglobina < 7 g/dL desenvolvem frequentemente sopros cardíacos sistólicos audíveis sem qualquer anomalia valvular prévia."
  },
  {
    "id": 4107,
    "topicId": 4,
    "question": "Ao analisar as variáveis físicas que regem 'efeito inverso da viscosidade (η) no Número de Reynolds', qual das seguintes afirmações expressa com rigor a relação hidrodinâmica entre pressão, velocidade e geometria vascular?",
    "options": [
      "A relação física correta demonstra que Quando a viscosidade diminui (como na anemia acentuada ou em hemodiluição massiva com soros cristaloides), o denominador de Re cai, fazendo disparar o valor de Re para além do limiar crítico de 2000.",
      "A resistência ao fluxo é independente do raio do vaso e depende apenas da fase da Lua e marés oceânicas.",
      "O fluxo turbulento nunca produz ruído nem vibrações mecânicas em nenhuma circunstância biológica.",
      "A velocidade do sangue é máxima nos capilares e mínima na aorta ascendente em repouso."
    ],
    "correctIndex": 0,
    "explanation": "A análise hidrodinâmica correta confirma que Quando a viscosidade diminui (como na anemia acentuada ou em hemodiluição massiva com soros cristaloides), o denominador de Re cai, fazendo disparar o valor de Re para além do limiar crítico de 2000. O domínio destas leis permite ao enfermeiro interpretar os fenómenos vasculares com rigor científico.",
    "distractorAnalysis": [
      "A primeira opção é uma aberração pseudocientífica que ignora a Lei de Poiseuille e a dependência em r⁴.",
      "A segunda opção é falsa, pois a turbulência é precisamente a geradora física dos sopros e ruídos de Korotkoff.",
      "A terceira opção inverte totalmente a realidade: a velocidade capilar é a mais lenta do sistema cardiovascular."
    ],
    "nursingApplication": "O enfermeiro compreende por que doentes com hemoglobina < 7 g/dL desenvolvem frequentemente sopros cardíacos sistólicos audíveis sem qualquer anomalia valvular prévia."
  },
  {
    "id": 4108,
    "topicId": 4,
    "question": "Na hidrodinâmica circulatória aplicada à enfermagem, em relação a 'análise dimensional do Número de Reynolds', qual é a fundamentação biofísica correta?",
    "options": [
      "O sangue comporta-se como um fluido puramente invisível e sem atrito que viaja a velocidades próximas da luz no interior dos vasos.",
      "trata-se de uma grandeza física estritamente adimensional, sem unidades no Sistema Internacional (as unidades de densidade kg/m³, velocidade m/s, diâmetro m e viscosidade Pa·s cancelam-se mutuamente). A sua natureza adimensional permite comparar o comportamento de escoamentos de fluidos totalmente distintos em escalas geométricas proporcionais.",
      "Trata-se de um processo onde a viscosidade do sangue é zero absoluto e a densidade é igual à do ar atmosférico rarefeito.",
      "A pressão hidrostática anula instantaneamente todas as leis de conservação de energia e de massa no sistema vascular."
    ],
    "correctIndex": 1,
    "explanation": "Em biofísica circulatória, análise dimensional do Número de Reynolds explica-se pelo facto de que trata-se de uma grandeza física estritamente adimensional, sem unidades no Sistema Internacional (as unidades de densidade kg/m³, velocidade m/s, diâmetro m e viscosidade Pa·s cancelam-se mutuamente). A sua natureza adimensional permite comparar o comportamento de escoamentos de fluidos totalmente distintos em escalas geométricas proporcionais.",
    "distractorAnalysis": [
      "A primeira opção incorreta atribui ao sangue propriedades físicas fictícias e velocidades relativísticas impossíveis.",
      "A segunda opção incorreta assume viscosidade nula, o que só ocorreria num superfluido hélio quântico a perto de zero Kelvin.",
      "A terceira opção incorreta ignora os princípios fundamentais da conservação de massa e de energia da física clássica."
    ],
    "nursingApplication": "O enfermeiro consolida a física básica de grandezas adimensionais ao analisar índices fisiológicos clínicos (como frações de ejeção ou rácios de resistência vascular)."
  },
  {
    "id": 4109,
    "topicId": 4,
    "question": "Na avaliação clínica e administração de terapêutica por um enfermeiro, como se manifesta a aplicação prática de 'análise dimensional do Número de Reynolds'?",
    "options": [
      "Implica a medição da pressão arterial apenas com um termómetro de mercúrio colocado na axila sem braçadeira.",
      "Exige a administração de água canalizada pura sem sais diretamente numa veia central em bólus de 1 litro em 10 segundos.",
      "Manifesta-se clinicamente da seguinte forma: O enfermeiro consolida a física básica de grandezas adimensionais ao analisar índices fisiológicos clínicos (como frações de ejeção ou rácios de resistência vascular).",
      "Requer que o doente permaneça de cabeça para baixo durante 24 horas consecutivas para impedir o fluxo de sangue no cérebro."
    ],
    "correctIndex": 2,
    "explanation": "A aplicação de enfermagem para análise dimensional do Número de Reynolds baseia-se no princípio: O enfermeiro consolida a física básica de grandezas adimensionais ao analisar índices fisiológicos clínicos (como frações de ejeção ou rácios de resistência vascular). Esta intervenção é essencial para a segurança hemodinâmica do doente.",
    "distractorAnalysis": [
      "A primeira opção confunde a medição da temperatura axilar com a avaliação hemodinâmica da pressão com esfigmomanómetro.",
      "A segunda opção incorreta provocaria hemólise maciça hipotónica intravascular fatal imediata.",
      "A terceira opção causaria congestão cerebral perigosa, hipertensão intracraniana e asfixia mecânica."
    ],
    "nursingApplication": "O enfermeiro consolida a física básica de grandezas adimensionais ao analisar índices fisiológicos clínicos (como frações de ejeção ou rácios de resistência vascular)."
  },
  {
    "id": 4110,
    "topicId": 4,
    "question": "Ao analisar as variáveis físicas que regem 'análise dimensional do Número de Reynolds', qual das seguintes afirmações expressa com rigor a relação hidrodinâmica entre pressão, velocidade e geometria vascular?",
    "options": [
      "A resistência ao fluxo é independente do raio do vaso e depende apenas da fase da Lua e marés oceânicas.",
      "O fluxo turbulento nunca produz ruído nem vibrações mecânicas em nenhuma circunstância biológica.",
      "A velocidade do sangue é máxima nos capilares e mínima na aorta ascendente em repouso.",
      "A relação física correta demonstra que A sua natureza adimensional permite comparar o comportamento de escoamentos de fluidos totalmente distintos em escalas geométricas proporcionais."
    ],
    "correctIndex": 3,
    "explanation": "A análise hidrodinâmica correta confirma que A sua natureza adimensional permite comparar o comportamento de escoamentos de fluidos totalmente distintos em escalas geométricas proporcionais. O domínio destas leis permite ao enfermeiro interpretar os fenómenos vasculares com rigor científico.",
    "distractorAnalysis": [
      "A primeira opção é uma aberração pseudocientífica que ignora a Lei de Poiseuille e a dependência em r⁴.",
      "A segunda opção é falsa, pois a turbulência é precisamente a geradora física dos sopros e ruídos de Korotkoff.",
      "A terceira opção inverte totalmente a realidade: a velocidade capilar é a mais lenta do sistema cardiovascular."
    ],
    "nursingApplication": "O enfermeiro consolida a física básica de grandezas adimensionais ao analisar índices fisiológicos clínicos (como frações de ejeção ou rácios de resistência vascular)."
  },
  {
    "id": 4111,
    "topicId": 4,
    "question": "Na hidrodinâmica circulatória aplicada à enfermagem, em relação a 'definição física de viscosidade dinâmica (η)', qual é a fundamentação biofísica correta?",
    "options": [
      "é a propriedade dos fluidos que traduz o atrito interno entre camadas microscópicas adjacentes que se movem com velocidades diferentes (resistência ao escoamento). A sua unidade fundamental no Sistema Internacional é o Pascal-segundo (Pa·s = N·s/m²), sendo frequentemente utilizada na literatura médica a unidade CGS Poise (1 P = 0,1 Pa·s) ou centipoise (1 cP = 1 mPa·s).",
      "O sangue comporta-se como um fluido puramente invisível e sem atrito que viaja a velocidades próximas da luz no interior dos vasos.",
      "Trata-se de um processo onde a viscosidade do sangue é zero absoluto e a densidade é igual à do ar atmosférico rarefeito.",
      "A pressão hidrostática anula instantaneamente todas as leis de conservação de energia e de massa no sistema vascular."
    ],
    "correctIndex": 0,
    "explanation": "Em biofísica circulatória, definição física de viscosidade dinâmica (η) explica-se pelo facto de que é a propriedade dos fluidos que traduz o atrito interno entre camadas microscópicas adjacentes que se movem com velocidades diferentes (resistência ao escoamento). A sua unidade fundamental no Sistema Internacional é o Pascal-segundo (Pa·s = N·s/m²), sendo frequentemente utilizada na literatura médica a unidade CGS Poise (1 P = 0,1 Pa·s) ou centipoise (1 cP = 1 mPa·s).",
    "distractorAnalysis": [
      "A primeira opção incorreta atribui ao sangue propriedades físicas fictícias e velocidades relativísticas impossíveis.",
      "A segunda opção incorreta assume viscosidade nula, o que só ocorreria num superfluido hélio quântico a perto de zero Kelvin.",
      "A terceira opção incorreta ignora os princípios fundamentais da conservação de massa e de energia da física clássica."
    ],
    "nursingApplication": "A água a 20 °C possui viscosidade de aproximadamente 1,0 cP, enquanto o sangue total normal a 37 °C possui uma viscosidade de 3,0 a 4,0 cP (três a quatro vezes superior à da água)."
  },
  {
    "id": 4112,
    "topicId": 4,
    "question": "Na avaliação clínica e administração de terapêutica por um enfermeiro, como se manifesta a aplicação prática de 'definição física de viscosidade dinâmica (η)'?",
    "options": [
      "Implica a medição da pressão arterial apenas com um termómetro de mercúrio colocado na axila sem braçadeira.",
      "Manifesta-se clinicamente da seguinte forma: A água a 20 °C possui viscosidade de aproximadamente 1,0 cP, enquanto o sangue total normal a 37 °C possui uma viscosidade de 3,0 a 4,0 cP (três a quatro vezes superior à da água).",
      "Exige a administração de água canalizada pura sem sais diretamente numa veia central em bólus de 1 litro em 10 segundos.",
      "Requer que o doente permaneça de cabeça para baixo durante 24 horas consecutivas para impedir o fluxo de sangue no cérebro."
    ],
    "correctIndex": 1,
    "explanation": "A aplicação de enfermagem para definição física de viscosidade dinâmica (η) baseia-se no princípio: A água a 20 °C possui viscosidade de aproximadamente 1,0 cP, enquanto o sangue total normal a 37 °C possui uma viscosidade de 3,0 a 4,0 cP (três a quatro vezes superior à da água). Esta intervenção é essencial para a segurança hemodinâmica do doente.",
    "distractorAnalysis": [
      "A primeira opção confunde a medição da temperatura axilar com a avaliação hemodinâmica da pressão com esfigmomanómetro.",
      "A segunda opção incorreta provocaria hemólise maciça hipotónica intravascular fatal imediata.",
      "A terceira opção causaria congestão cerebral perigosa, hipertensão intracraniana e asfixia mecânica."
    ],
    "nursingApplication": "A água a 20 °C possui viscosidade de aproximadamente 1,0 cP, enquanto o sangue total normal a 37 °C possui uma viscosidade de 3,0 a 4,0 cP (três a quatro vezes superior à da água)."
  },
  {
    "id": 4113,
    "topicId": 4,
    "question": "Ao analisar as variáveis físicas que regem 'definição física de viscosidade dinâmica (η)', qual das seguintes afirmações expressa com rigor a relação hidrodinâmica entre pressão, velocidade e geometria vascular?",
    "options": [
      "A resistência ao fluxo é independente do raio do vaso e depende apenas da fase da Lua e marés oceânicas.",
      "O fluxo turbulento nunca produz ruído nem vibrações mecânicas em nenhuma circunstância biológica.",
      "A relação física correta demonstra que A sua unidade fundamental no Sistema Internacional é o Pascal-segundo (Pa·s = N·s/m²), sendo frequentemente utilizada na literatura médica a unidade CGS Poise (1 P = 0,1 Pa·s) ou centipoise (1 cP = 1 mPa·s).",
      "A velocidade do sangue é máxima nos capilares e mínima na aorta ascendente em repouso."
    ],
    "correctIndex": 2,
    "explanation": "A análise hidrodinâmica correta confirma que A sua unidade fundamental no Sistema Internacional é o Pascal-segundo (Pa·s = N·s/m²), sendo frequentemente utilizada na literatura médica a unidade CGS Poise (1 P = 0,1 Pa·s) ou centipoise (1 cP = 1 mPa·s). O domínio destas leis permite ao enfermeiro interpretar os fenómenos vasculares com rigor científico.",
    "distractorAnalysis": [
      "A primeira opção é uma aberração pseudocientífica que ignora a Lei de Poiseuille e a dependência em r⁴.",
      "A segunda opção é falsa, pois a turbulência é precisamente a geradora física dos sopros e ruídos de Korotkoff.",
      "A terceira opção inverte totalmente a realidade: a velocidade capilar é a mais lenta do sistema cardiovascular."
    ],
    "nursingApplication": "A água a 20 °C possui viscosidade de aproximadamente 1,0 cP, enquanto o sangue total normal a 37 °C possui uma viscosidade de 3,0 a 4,0 cP (três a quatro vezes superior à da água)."
  },
  {
    "id": 4114,
    "topicId": 4,
    "question": "Na hidrodinâmica circulatória aplicada à enfermagem, em relação a 'comportamento não-newtoniano e pseudoplástico do sangue', qual é a fundamentação biofísica correta?",
    "options": [
      "O sangue comporta-se como um fluido puramente invisível e sem atrito que viaja a velocidades próximas da luz no interior dos vasos.",
      "Trata-se de um processo onde a viscosidade do sangue é zero absoluto e a densidade é igual à do ar atmosférico rarefeito.",
      "A pressão hidrostática anula instantaneamente todas as leis de conservação de energia e de massa no sistema vascular.",
      "a viscosidade do sangue não é constante para uma dada temperatura, diminuindo progressivamente à medida que a taxa de cisalhamento (shear rate) aumenta (fluido pseudoplástico ou 'shear-thinning'). Em baixas velocidades de escoamento (como na estase venosa), os glóbulos vermelhos agregam-se formando cadeias empilhadas ('rouleaux'), elevando acentuadamente a viscosidade aparente do sangue."
    ],
    "correctIndex": 3,
    "explanation": "Em biofísica circulatória, comportamento não-newtoniano e pseudoplástico do sangue explica-se pelo facto de que a viscosidade do sangue não é constante para uma dada temperatura, diminuindo progressivamente à medida que a taxa de cisalhamento (shear rate) aumenta (fluido pseudoplástico ou 'shear-thinning'). Em baixas velocidades de escoamento (como na estase venosa), os glóbulos vermelhos agregam-se formando cadeias empilhadas ('rouleaux'), elevando acentuadamente a viscosidade aparente do sangue.",
    "distractorAnalysis": [
      "A primeira opção incorreta atribui ao sangue propriedades físicas fictícias e velocidades relativísticas impossíveis.",
      "A segunda opção incorreta assume viscosidade nula, o que só ocorreria num superfluido hélio quântico a perto de zero Kelvin.",
      "A terceira opção incorreta ignora os princípios fundamentais da conservação de massa e de energia da física clássica."
    ],
    "nursingApplication": "O enfermeiro mobiliza precocemente os membros de doentes acamados para elevar a velocidade do fluxo venoso, desagregando os 'rouleaux' de eritrócitos e prevenindo tromboses."
  },
  {
    "id": 4115,
    "topicId": 4,
    "question": "Na avaliação clínica e administração de terapêutica por um enfermeiro, como se manifesta a aplicação prática de 'comportamento não-newtoniano e pseudoplástico do sangue'?",
    "options": [
      "Manifesta-se clinicamente da seguinte forma: O enfermeiro mobiliza precocemente os membros de doentes acamados para elevar a velocidade do fluxo venoso, desagregando os 'rouleaux' de eritrócitos e prevenindo tromboses.",
      "Implica a medição da pressão arterial apenas com um termómetro de mercúrio colocado na axila sem braçadeira.",
      "Exige a administração de água canalizada pura sem sais diretamente numa veia central em bólus de 1 litro em 10 segundos.",
      "Requer que o doente permaneça de cabeça para baixo durante 24 horas consecutivas para impedir o fluxo de sangue no cérebro."
    ],
    "correctIndex": 0,
    "explanation": "A aplicação de enfermagem para comportamento não-newtoniano e pseudoplástico do sangue baseia-se no princípio: O enfermeiro mobiliza precocemente os membros de doentes acamados para elevar a velocidade do fluxo venoso, desagregando os 'rouleaux' de eritrócitos e prevenindo tromboses. Esta intervenção é essencial para a segurança hemodinâmica do doente.",
    "distractorAnalysis": [
      "A primeira opção confunde a medição da temperatura axilar com a avaliação hemodinâmica da pressão com esfigmomanómetro.",
      "A segunda opção incorreta provocaria hemólise maciça hipotónica intravascular fatal imediata.",
      "A terceira opção causaria congestão cerebral perigosa, hipertensão intracraniana e asfixia mecânica."
    ],
    "nursingApplication": "O enfermeiro mobiliza precocemente os membros de doentes acamados para elevar a velocidade do fluxo venoso, desagregando os 'rouleaux' de eritrócitos e prevenindo tromboses."
  },
  {
    "id": 4116,
    "topicId": 4,
    "question": "Ao analisar as variáveis físicas que regem 'comportamento não-newtoniano e pseudoplástico do sangue', qual das seguintes afirmações expressa com rigor a relação hidrodinâmica entre pressão, velocidade e geometria vascular?",
    "options": [
      "A resistência ao fluxo é independente do raio do vaso e depende apenas da fase da Lua e marés oceânicas.",
      "A relação física correta demonstra que Em baixas velocidades de escoamento (como na estase venosa), os glóbulos vermelhos agregam-se formando cadeias empilhadas ('rouleaux'), elevando acentuadamente a viscosidade aparente do sangue.",
      "O fluxo turbulento nunca produz ruído nem vibrações mecânicas em nenhuma circunstância biológica.",
      "A velocidade do sangue é máxima nos capilares e mínima na aorta ascendente em repouso."
    ],
    "correctIndex": 1,
    "explanation": "A análise hidrodinâmica correta confirma que Em baixas velocidades de escoamento (como na estase venosa), os glóbulos vermelhos agregam-se formando cadeias empilhadas ('rouleaux'), elevando acentuadamente a viscosidade aparente do sangue. O domínio destas leis permite ao enfermeiro interpretar os fenómenos vasculares com rigor científico.",
    "distractorAnalysis": [
      "A primeira opção é uma aberração pseudocientífica que ignora a Lei de Poiseuille e a dependência em r⁴.",
      "A segunda opção é falsa, pois a turbulência é precisamente a geradora física dos sopros e ruídos de Korotkoff.",
      "A terceira opção inverte totalmente a realidade: a velocidade capilar é a mais lenta do sistema cardiovascular."
    ],
    "nursingApplication": "O enfermeiro mobiliza precocemente os membros de doentes acamados para elevar a velocidade do fluxo venoso, desagregando os 'rouleaux' de eritrócitos e prevenindo tromboses."
  },
  {
    "id": 4117,
    "topicId": 4,
    "question": "Na hidrodinâmica circulatória aplicada à enfermagem, em relação a 'deformabilidade dos glóbulos vermelhos na microcirculação', qual é a fundamentação biofísica correta?",
    "options": [
      "O sangue comporta-se como um fluido puramente invisível e sem atrito que viaja a velocidades próximas da luz no interior dos vasos.",
      "Trata-se de um processo onde a viscosidade do sangue é zero absoluto e a densidade é igual à do ar atmosférico rarefeito.",
      "o eritrócito normal tem diâmetro de 7 a 8 micrómetros, mas consegue dobrar-se e deformar-se elasticamente para atravessar capilares com apenas 3 a 5 micrómetros de diâmetro. Esta notável flexibilidade da membrana eritrocitária e a fluidez do citoplasma rico em hemoglobina mantêm a viscosidade aparente do sangue baixa no leito capilar.",
      "A pressão hidrostática anula instantaneamente todas as leis de conservação de energia e de massa no sistema vascular."
    ],
    "correctIndex": 2,
    "explanation": "Em biofísica circulatória, deformabilidade dos glóbulos vermelhos na microcirculação explica-se pelo facto de que o eritrócito normal tem diâmetro de 7 a 8 micrómetros, mas consegue dobrar-se e deformar-se elasticamente para atravessar capilares com apenas 3 a 5 micrómetros de diâmetro. Esta notável flexibilidade da membrana eritrocitária e a fluidez do citoplasma rico em hemoglobina mantêm a viscosidade aparente do sangue baixa no leito capilar.",
    "distractorAnalysis": [
      "A primeira opção incorreta atribui ao sangue propriedades físicas fictícias e velocidades relativísticas impossíveis.",
      "A segunda opção incorreta assume viscosidade nula, o que só ocorreria num superfluido hélio quântico a perto de zero Kelvin.",
      "A terceira opção incorreta ignora os princípios fundamentais da conservação de massa e de energia da física clássica."
    ],
    "nursingApplication": "Na anemia falciforme (drepanocitose), os eritrócitos tornam-se rígidos em foice sob hipóxia: o enfermeiro vigia crises vaso-oclusivas dolorosas causadas pelo bloqueio mecânico dos capilares."
  },
  {
    "id": 4118,
    "topicId": 4,
    "question": "Na avaliação clínica e administração de terapêutica por um enfermeiro, como se manifesta a aplicação prática de 'deformabilidade dos glóbulos vermelhos na microcirculação'?",
    "options": [
      "Implica a medição da pressão arterial apenas com um termómetro de mercúrio colocado na axila sem braçadeira.",
      "Exige a administração de água canalizada pura sem sais diretamente numa veia central em bólus de 1 litro em 10 segundos.",
      "Requer que o doente permaneça de cabeça para baixo durante 24 horas consecutivas para impedir o fluxo de sangue no cérebro.",
      "Manifesta-se clinicamente da seguinte forma: Na anemia falciforme (drepanocitose), os eritrócitos tornam-se rígidos em foice sob hipóxia: o enfermeiro vigia crises vaso-oclusivas dolorosas causadas pelo bloqueio mecânico dos capilares."
    ],
    "correctIndex": 3,
    "explanation": "A aplicação de enfermagem para deformabilidade dos glóbulos vermelhos na microcirculação baseia-se no princípio: Na anemia falciforme (drepanocitose), os eritrócitos tornam-se rígidos em foice sob hipóxia: o enfermeiro vigia crises vaso-oclusivas dolorosas causadas pelo bloqueio mecânico dos capilares. Esta intervenção é essencial para a segurança hemodinâmica do doente.",
    "distractorAnalysis": [
      "A primeira opção confunde a medição da temperatura axilar com a avaliação hemodinâmica da pressão com esfigmomanómetro.",
      "A segunda opção incorreta provocaria hemólise maciça hipotónica intravascular fatal imediata.",
      "A terceira opção causaria congestão cerebral perigosa, hipertensão intracraniana e asfixia mecânica."
    ],
    "nursingApplication": "Na anemia falciforme (drepanocitose), os eritrócitos tornam-se rígidos em foice sob hipóxia: o enfermeiro vigia crises vaso-oclusivas dolorosas causadas pelo bloqueio mecânico dos capilares."
  },
  {
    "id": 4119,
    "topicId": 4,
    "question": "Ao analisar as variáveis físicas que regem 'deformabilidade dos glóbulos vermelhos na microcirculação', qual das seguintes afirmações expressa com rigor a relação hidrodinâmica entre pressão, velocidade e geometria vascular?",
    "options": [
      "A relação física correta demonstra que Esta notável flexibilidade da membrana eritrocitária e a fluidez do citoplasma rico em hemoglobina mantêm a viscosidade aparente do sangue baixa no leito capilar.",
      "A resistência ao fluxo é independente do raio do vaso e depende apenas da fase da Lua e marés oceânicas.",
      "O fluxo turbulento nunca produz ruído nem vibrações mecânicas em nenhuma circunstância biológica.",
      "A velocidade do sangue é máxima nos capilares e mínima na aorta ascendente em repouso."
    ],
    "correctIndex": 0,
    "explanation": "A análise hidrodinâmica correta confirma que Esta notável flexibilidade da membrana eritrocitária e a fluidez do citoplasma rico em hemoglobina mantêm a viscosidade aparente do sangue baixa no leito capilar. O domínio destas leis permite ao enfermeiro interpretar os fenómenos vasculares com rigor científico.",
    "distractorAnalysis": [
      "A primeira opção é uma aberração pseudocientífica que ignora a Lei de Poiseuille e a dependência em r⁴.",
      "A segunda opção é falsa, pois a turbulência é precisamente a geradora física dos sopros e ruídos de Korotkoff.",
      "A terceira opção inverte totalmente a realidade: a velocidade capilar é a mais lenta do sistema cardiovascular."
    ],
    "nursingApplication": "Na anemia falciforme (drepanocitose), os eritrócitos tornam-se rígidos em foice sob hipóxia: o enfermeiro vigia crises vaso-oclusivas dolorosas causadas pelo bloqueio mecânico dos capilares."
  },
  {
    "id": 4120,
    "topicId": 4,
    "question": "Na hidrodinâmica circulatória aplicada à enfermagem, em relação a 'temperatura corporal e viscosidade sanguínea na hipotermia', qual é a fundamentação biofísica correta?",
    "options": [
      "O sangue comporta-se como um fluido puramente invisível e sem atrito que viaja a velocidades próximas da luz no interior dos vasos.",
      "a viscosidade dos líquidos varia inversamente com a temperatura: para cada descida de 1 °C na temperatura corporal, a viscosidade do sangue aumenta em cerca de 2% a 2,5%. Na hipotermia acidental profunda (temperatura central < 30 °C), o sangue torna-se espesso e viscoso, dificultando o trabalho mecânico do coração e a perfusão microvascular distal.",
      "Trata-se de um processo onde a viscosidade do sangue é zero absoluto e a densidade é igual à do ar atmosférico rarefeito.",
      "A pressão hidrostática anula instantaneamente todas as leis de conservação de energia e de massa no sistema vascular."
    ],
    "correctIndex": 1,
    "explanation": "Em biofísica circulatória, temperatura corporal e viscosidade sanguínea na hipotermia explica-se pelo facto de que a viscosidade dos líquidos varia inversamente com a temperatura: para cada descida de 1 °C na temperatura corporal, a viscosidade do sangue aumenta em cerca de 2% a 2,5%. Na hipotermia acidental profunda (temperatura central < 30 °C), o sangue torna-se espesso e viscoso, dificultando o trabalho mecânico do coração e a perfusão microvascular distal.",
    "distractorAnalysis": [
      "A primeira opção incorreta atribui ao sangue propriedades físicas fictícias e velocidades relativísticas impossíveis.",
      "A segunda opção incorreta assume viscosidade nula, o que só ocorreria num superfluido hélio quântico a perto de zero Kelvin.",
      "A terceira opção incorreta ignora os princípios fundamentais da conservação de massa e de energia da física clássica."
    ],
    "nursingApplication": "O enfermeiro aquece ativamente os fluidos de perfusão endovenosa a 37-40 °C antes de infundir em doentes em choque ou submetidos a cirurgias prolongadas."
  },
  {
    "id": 4121,
    "topicId": 4,
    "question": "Na avaliação clínica e administração de terapêutica por um enfermeiro, como se manifesta a aplicação prática de 'temperatura corporal e viscosidade sanguínea na hipotermia'?",
    "options": [
      "Implica a medição da pressão arterial apenas com um termómetro de mercúrio colocado na axila sem braçadeira.",
      "Exige a administração de água canalizada pura sem sais diretamente numa veia central em bólus de 1 litro em 10 segundos.",
      "Manifesta-se clinicamente da seguinte forma: O enfermeiro aquece ativamente os fluidos de perfusão endovenosa a 37-40 °C antes de infundir em doentes em choque ou submetidos a cirurgias prolongadas.",
      "Requer que o doente permaneça de cabeça para baixo durante 24 horas consecutivas para impedir o fluxo de sangue no cérebro."
    ],
    "correctIndex": 2,
    "explanation": "A aplicação de enfermagem para temperatura corporal e viscosidade sanguínea na hipotermia baseia-se no princípio: O enfermeiro aquece ativamente os fluidos de perfusão endovenosa a 37-40 °C antes de infundir em doentes em choque ou submetidos a cirurgias prolongadas. Esta intervenção é essencial para a segurança hemodinâmica do doente.",
    "distractorAnalysis": [
      "A primeira opção confunde a medição da temperatura axilar com a avaliação hemodinâmica da pressão com esfigmomanómetro.",
      "A segunda opção incorreta provocaria hemólise maciça hipotónica intravascular fatal imediata.",
      "A terceira opção causaria congestão cerebral perigosa, hipertensão intracraniana e asfixia mecânica."
    ],
    "nursingApplication": "O enfermeiro aquece ativamente os fluidos de perfusão endovenosa a 37-40 °C antes de infundir em doentes em choque ou submetidos a cirurgias prolongadas."
  },
  {
    "id": 4122,
    "topicId": 4,
    "question": "Ao analisar as variáveis físicas que regem 'temperatura corporal e viscosidade sanguínea na hipotermia', qual das seguintes afirmações expressa com rigor a relação hidrodinâmica entre pressão, velocidade e geometria vascular?",
    "options": [
      "A resistência ao fluxo é independente do raio do vaso e depende apenas da fase da Lua e marés oceânicas.",
      "O fluxo turbulento nunca produz ruído nem vibrações mecânicas em nenhuma circunstância biológica.",
      "A velocidade do sangue é máxima nos capilares e mínima na aorta ascendente em repouso.",
      "A relação física correta demonstra que Na hipotermia acidental profunda (temperatura central < 30 °C), o sangue torna-se espesso e viscoso, dificultando o trabalho mecânico do coração e a perfusão microvascular distal."
    ],
    "correctIndex": 3,
    "explanation": "A análise hidrodinâmica correta confirma que Na hipotermia acidental profunda (temperatura central < 30 °C), o sangue torna-se espesso e viscoso, dificultando o trabalho mecânico do coração e a perfusão microvascular distal. O domínio destas leis permite ao enfermeiro interpretar os fenómenos vasculares com rigor científico.",
    "distractorAnalysis": [
      "A primeira opção é uma aberração pseudocientífica que ignora a Lei de Poiseuille e a dependência em r⁴.",
      "A segunda opção é falsa, pois a turbulência é precisamente a geradora física dos sopros e ruídos de Korotkoff.",
      "A terceira opção inverte totalmente a realidade: a velocidade capilar é a mais lenta do sistema cardiovascular."
    ],
    "nursingApplication": "O enfermeiro aquece ativamente os fluidos de perfusão endovenosa a 37-40 °C antes de infundir em doentes em choque ou submetidos a cirurgias prolongadas."
  },
  {
    "id": 4123,
    "topicId": 4,
    "question": "Na hidrodinâmica circulatória aplicada à enfermagem, em relação a 'viscosidade do plasma sanguíneo e proteínas plasmáticas', qual é a fundamentação biofísica correta?",
    "options": [
      "a viscosidade do plasma desprovido de células varia entre 1,2 e 1,5 cP, sendo determinada principalmente pela concentração de macromoléculas assimétricas como o fibrinogénio e imunoglobulinas. No mieloma múltiplo e na macroglobulinemia de Waldenström, a produção maciça de paraproteínas monoclonais causa síndrome de hiperviscosidade plasmática.",
      "O sangue comporta-se como um fluido puramente invisível e sem atrito que viaja a velocidades próximas da luz no interior dos vasos.",
      "Trata-se de um processo onde a viscosidade do sangue é zero absoluto e a densidade é igual à do ar atmosférico rarefeito.",
      "A pressão hidrostática anula instantaneamente todas as leis de conservação de energia e de massa no sistema vascular."
    ],
    "correctIndex": 0,
    "explanation": "Em biofísica circulatória, viscosidade do plasma sanguíneo e proteínas plasmáticas explica-se pelo facto de que a viscosidade do plasma desprovido de células varia entre 1,2 e 1,5 cP, sendo determinada principalmente pela concentração de macromoléculas assimétricas como o fibrinogénio e imunoglobulinas. No mieloma múltiplo e na macroglobulinemia de Waldenström, a produção maciça de paraproteínas monoclonais causa síndrome de hiperviscosidade plasmática.",
    "distractorAnalysis": [
      "A primeira opção incorreta atribui ao sangue propriedades físicas fictícias e velocidades relativísticas impossíveis.",
      "A segunda opção incorreta assume viscosidade nula, o que só ocorreria num superfluido hélio quântico a perto de zero Kelvin.",
      "A terceira opção incorreta ignora os princípios fundamentais da conservação de massa e de energia da física clássica."
    ],
    "nursingApplication": "O enfermeiro monitoriza sintomas de hiperviscosidade como cefaleias, alterações visuais por ingurgitamento da retina, confusão mental e hemorragias mucosas em doentes onco-hematológicos."
  },
  {
    "id": 4124,
    "topicId": 4,
    "question": "Na avaliação clínica e administração de terapêutica por um enfermeiro, como se manifesta a aplicação prática de 'viscosidade do plasma sanguíneo e proteínas plasmáticas'?",
    "options": [
      "Implica a medição da pressão arterial apenas com um termómetro de mercúrio colocado na axila sem braçadeira.",
      "Manifesta-se clinicamente da seguinte forma: O enfermeiro monitoriza sintomas de hiperviscosidade como cefaleias, alterações visuais por ingurgitamento da retina, confusão mental e hemorragias mucosas em doentes onco-hematológicos.",
      "Exige a administração de água canalizada pura sem sais diretamente numa veia central em bólus de 1 litro em 10 segundos.",
      "Requer que o doente permaneça de cabeça para baixo durante 24 horas consecutivas para impedir o fluxo de sangue no cérebro."
    ],
    "correctIndex": 1,
    "explanation": "A aplicação de enfermagem para viscosidade do plasma sanguíneo e proteínas plasmáticas baseia-se no princípio: O enfermeiro monitoriza sintomas de hiperviscosidade como cefaleias, alterações visuais por ingurgitamento da retina, confusão mental e hemorragias mucosas em doentes onco-hematológicos. Esta intervenção é essencial para a segurança hemodinâmica do doente.",
    "distractorAnalysis": [
      "A primeira opção confunde a medição da temperatura axilar com a avaliação hemodinâmica da pressão com esfigmomanómetro.",
      "A segunda opção incorreta provocaria hemólise maciça hipotónica intravascular fatal imediata.",
      "A terceira opção causaria congestão cerebral perigosa, hipertensão intracraniana e asfixia mecânica."
    ],
    "nursingApplication": "O enfermeiro monitoriza sintomas de hiperviscosidade como cefaleias, alterações visuais por ingurgitamento da retina, confusão mental e hemorragias mucosas em doentes onco-hematológicos."
  },
  {
    "id": 4125,
    "topicId": 4,
    "question": "Ao analisar as variáveis físicas que regem 'viscosidade do plasma sanguíneo e proteínas plasmáticas', qual das seguintes afirmações expressa com rigor a relação hidrodinâmica entre pressão, velocidade e geometria vascular?",
    "options": [
      "A resistência ao fluxo é independente do raio do vaso e depende apenas da fase da Lua e marés oceânicas.",
      "O fluxo turbulento nunca produz ruído nem vibrações mecânicas em nenhuma circunstância biológica.",
      "A relação física correta demonstra que No mieloma múltiplo e na macroglobulinemia de Waldenström, a produção maciça de paraproteínas monoclonais causa síndrome de hiperviscosidade plasmática.",
      "A velocidade do sangue é máxima nos capilares e mínima na aorta ascendente em repouso."
    ],
    "correctIndex": 2,
    "explanation": "A análise hidrodinâmica correta confirma que No mieloma múltiplo e na macroglobulinemia de Waldenström, a produção maciça de paraproteínas monoclonais causa síndrome de hiperviscosidade plasmática. O domínio destas leis permite ao enfermeiro interpretar os fenómenos vasculares com rigor científico.",
    "distractorAnalysis": [
      "A primeira opção é uma aberração pseudocientífica que ignora a Lei de Poiseuille e a dependência em r⁴.",
      "A segunda opção é falsa, pois a turbulência é precisamente a geradora física dos sopros e ruídos de Korotkoff.",
      "A terceira opção inverte totalmente a realidade: a velocidade capilar é a mais lenta do sistema cardiovascular."
    ],
    "nursingApplication": "O enfermeiro monitoriza sintomas de hiperviscosidade como cefaleias, alterações visuais por ingurgitamento da retina, confusão mental e hemorragias mucosas em doentes onco-hematológicos."
  },
  {
    "id": 4126,
    "topicId": 4,
    "question": "Na hidrodinâmica circulatória aplicada à enfermagem, em relação a 'relação exponencial entre hematócrito (Ht) e viscosidade', qual é a fundamentação biofísica correta?",
    "options": [
      "O sangue comporta-se como um fluido puramente invisível e sem atrito que viaja a velocidades próximas da luz no interior dos vasos.",
      "Trata-se de um processo onde a viscosidade do sangue é zero absoluto e a densidade é igual à do ar atmosférico rarefeito.",
      "A pressão hidrostática anula instantaneamente todas as leis de conservação de energia e de massa no sistema vascular.",
      "a viscosidade sanguínea aumenta de forma quase exponencial com a percentagem de volume ocupado pelos eritrócitos (hematócrito normal de 40 a 45%). Quando o hematócrito sobe de 40% para 60%, a viscosidade do sangue praticamente duplica, disparando a resistência vascular periférica."
    ],
    "correctIndex": 3,
    "explanation": "Em biofísica circulatória, relação exponencial entre hematócrito (Ht) e viscosidade explica-se pelo facto de que a viscosidade sanguínea aumenta de forma quase exponencial com a percentagem de volume ocupado pelos eritrócitos (hematócrito normal de 40 a 45%). Quando o hematócrito sobe de 40% para 60%, a viscosidade do sangue praticamente duplica, disparando a resistência vascular periférica.",
    "distractorAnalysis": [
      "A primeira opção incorreta atribui ao sangue propriedades físicas fictícias e velocidades relativísticas impossíveis.",
      "A segunda opção incorreta assume viscosidade nula, o que só ocorreria num superfluido hélio quântico a perto de zero Kelvin.",
      "A terceira opção incorreta ignora os princípios fundamentais da conservação de massa e de energia da física clássica."
    ],
    "nursingApplication": "O enfermeiro avalia o valor do hematócrito no pós-operatório e na desidratação, antecipando alterações na fluidez circulatória e no esforço ventricular."
  },
  {
    "id": 4127,
    "topicId": 4,
    "question": "Na avaliação clínica e administração de terapêutica por um enfermeiro, como se manifesta a aplicação prática de 'relação exponencial entre hematócrito (Ht) e viscosidade'?",
    "options": [
      "Manifesta-se clinicamente da seguinte forma: O enfermeiro avalia o valor do hematócrito no pós-operatório e na desidratação, antecipando alterações na fluidez circulatória e no esforço ventricular.",
      "Implica a medição da pressão arterial apenas com um termómetro de mercúrio colocado na axila sem braçadeira.",
      "Exige a administração de água canalizada pura sem sais diretamente numa veia central em bólus de 1 litro em 10 segundos.",
      "Requer que o doente permaneça de cabeça para baixo durante 24 horas consecutivas para impedir o fluxo de sangue no cérebro."
    ],
    "correctIndex": 0,
    "explanation": "A aplicação de enfermagem para relação exponencial entre hematócrito (Ht) e viscosidade baseia-se no princípio: O enfermeiro avalia o valor do hematócrito no pós-operatório e na desidratação, antecipando alterações na fluidez circulatória e no esforço ventricular. Esta intervenção é essencial para a segurança hemodinâmica do doente.",
    "distractorAnalysis": [
      "A primeira opção confunde a medição da temperatura axilar com a avaliação hemodinâmica da pressão com esfigmomanómetro.",
      "A segunda opção incorreta provocaria hemólise maciça hipotónica intravascular fatal imediata.",
      "A terceira opção causaria congestão cerebral perigosa, hipertensão intracraniana e asfixia mecânica."
    ],
    "nursingApplication": "O enfermeiro avalia o valor do hematócrito no pós-operatório e na desidratação, antecipando alterações na fluidez circulatória e no esforço ventricular."
  },
  {
    "id": 4128,
    "topicId": 4,
    "question": "Ao analisar as variáveis físicas que regem 'relação exponencial entre hematócrito (Ht) e viscosidade', qual das seguintes afirmações expressa com rigor a relação hidrodinâmica entre pressão, velocidade e geometria vascular?",
    "options": [
      "A resistência ao fluxo é independente do raio do vaso e depende apenas da fase da Lua e marés oceânicas.",
      "A relação física correta demonstra que Quando o hematócrito sobe de 40% para 60%, a viscosidade do sangue praticamente duplica, disparando a resistência vascular periférica.",
      "O fluxo turbulento nunca produz ruído nem vibrações mecânicas em nenhuma circunstância biológica.",
      "A velocidade do sangue é máxima nos capilares e mínima na aorta ascendente em repouso."
    ],
    "correctIndex": 1,
    "explanation": "A análise hidrodinâmica correta confirma que Quando o hematócrito sobe de 40% para 60%, a viscosidade do sangue praticamente duplica, disparando a resistência vascular periférica. O domínio destas leis permite ao enfermeiro interpretar os fenómenos vasculares com rigor científico.",
    "distractorAnalysis": [
      "A primeira opção é uma aberração pseudocientífica que ignora a Lei de Poiseuille e a dependência em r⁴.",
      "A segunda opção é falsa, pois a turbulência é precisamente a geradora física dos sopros e ruídos de Korotkoff.",
      "A terceira opção inverte totalmente a realidade: a velocidade capilar é a mais lenta do sistema cardiovascular."
    ],
    "nursingApplication": "O enfermeiro avalia o valor do hematócrito no pós-operatório e na desidratação, antecipando alterações na fluidez circulatória e no esforço ventricular."
  },
  {
    "id": 4129,
    "topicId": 4,
    "question": "Na hidrodinâmica circulatória aplicada à enfermagem, em relação a 'policitemia vera e estados de hiperviscosidade', qual é a fundamentação biofísica correta?",
    "options": [
      "O sangue comporta-se como um fluido puramente invisível e sem atrito que viaja a velocidades próximas da luz no interior dos vasos.",
      "Trata-se de um processo onde a viscosidade do sangue é zero absoluto e a densidade é igual à do ar atmosférico rarefeito.",
      "em situações de hematócrito > 55-60%, o sangue torna-se excessivamente viscoso, desacelerando o fluxo nos capilares periféricos e cerebrais. A estase capilar e o atrito intravascular elevado aumentam criticamente o risco de trombose venosa profunda, AVC isquémico e enfarte agudo do miocárdio.",
      "A pressão hidrostática anula instantaneamente todas as leis de conservação de energia e de massa no sistema vascular."
    ],
    "correctIndex": 2,
    "explanation": "Em biofísica circulatória, policitemia vera e estados de hiperviscosidade explica-se pelo facto de que em situações de hematócrito > 55-60%, o sangue torna-se excessivamente viscoso, desacelerando o fluxo nos capilares periféricos e cerebrais. A estase capilar e o atrito intravascular elevado aumentam criticamente o risco de trombose venosa profunda, AVC isquémico e enfarte agudo do miocárdio.",
    "distractorAnalysis": [
      "A primeira opção incorreta atribui ao sangue propriedades físicas fictícias e velocidades relativísticas impossíveis.",
      "A segunda opção incorreta assume viscosidade nula, o que só ocorreria num superfluido hélio quântico a perto de zero Kelvin.",
      "A terceira opção incorreta ignora os princípios fundamentais da conservação de massa e de energia da física clássica."
    ],
    "nursingApplication": "O enfermeiro colabora na execução de flebotomias terapêuticas (sangrias) prescritas, monitorizando os sinais vitais e garantindo a reposição volémica com soro fisiológico."
  },
  {
    "id": 4130,
    "topicId": 4,
    "question": "Na avaliação clínica e administração de terapêutica por um enfermeiro, como se manifesta a aplicação prática de 'policitemia vera e estados de hiperviscosidade'?",
    "options": [
      "Implica a medição da pressão arterial apenas com um termómetro de mercúrio colocado na axila sem braçadeira.",
      "Exige a administração de água canalizada pura sem sais diretamente numa veia central em bólus de 1 litro em 10 segundos.",
      "Requer que o doente permaneça de cabeça para baixo durante 24 horas consecutivas para impedir o fluxo de sangue no cérebro.",
      "Manifesta-se clinicamente da seguinte forma: O enfermeiro colabora na execução de flebotomias terapêuticas (sangrias) prescritas, monitorizando os sinais vitais e garantindo a reposição volémica com soro fisiológico."
    ],
    "correctIndex": 3,
    "explanation": "A aplicação de enfermagem para policitemia vera e estados de hiperviscosidade baseia-se no princípio: O enfermeiro colabora na execução de flebotomias terapêuticas (sangrias) prescritas, monitorizando os sinais vitais e garantindo a reposição volémica com soro fisiológico. Esta intervenção é essencial para a segurança hemodinâmica do doente.",
    "distractorAnalysis": [
      "A primeira opção confunde a medição da temperatura axilar com a avaliação hemodinâmica da pressão com esfigmomanómetro.",
      "A segunda opção incorreta provocaria hemólise maciça hipotónica intravascular fatal imediata.",
      "A terceira opção causaria congestão cerebral perigosa, hipertensão intracraniana e asfixia mecânica."
    ],
    "nursingApplication": "O enfermeiro colabora na execução de flebotomias terapêuticas (sangrias) prescritas, monitorizando os sinais vitais e garantindo a reposição volémica com soro fisiológico."
  },
  {
    "id": 4131,
    "topicId": 4,
    "question": "Ao analisar as variáveis físicas que regem 'policitemia vera e estados de hiperviscosidade', qual das seguintes afirmações expressa com rigor a relação hidrodinâmica entre pressão, velocidade e geometria vascular?",
    "options": [
      "A relação física correta demonstra que A estase capilar e o atrito intravascular elevado aumentam criticamente o risco de trombose venosa profunda, AVC isquémico e enfarte agudo do miocárdio.",
      "A resistência ao fluxo é independente do raio do vaso e depende apenas da fase da Lua e marés oceânicas.",
      "O fluxo turbulento nunca produz ruído nem vibrações mecânicas em nenhuma circunstância biológica.",
      "A velocidade do sangue é máxima nos capilares e mínima na aorta ascendente em repouso."
    ],
    "correctIndex": 0,
    "explanation": "A análise hidrodinâmica correta confirma que A estase capilar e o atrito intravascular elevado aumentam criticamente o risco de trombose venosa profunda, AVC isquémico e enfarte agudo do miocárdio. O domínio destas leis permite ao enfermeiro interpretar os fenómenos vasculares com rigor científico.",
    "distractorAnalysis": [
      "A primeira opção é uma aberração pseudocientífica que ignora a Lei de Poiseuille e a dependência em r⁴.",
      "A segunda opção é falsa, pois a turbulência é precisamente a geradora física dos sopros e ruídos de Korotkoff.",
      "A terceira opção inverte totalmente a realidade: a velocidade capilar é a mais lenta do sistema cardiovascular."
    ],
    "nursingApplication": "O enfermeiro colabora na execução de flebotomias terapêuticas (sangrias) prescritas, monitorizando os sinais vitais e garantindo a reposição volémica com soro fisiológico."
  },
  {
    "id": 4132,
    "topicId": 4,
    "question": "Na hidrodinâmica circulatória aplicada à enfermagem, em relação a 'anemia severa e sopros cardíacos hiperdinâmicos', qual é a fundamentação biofísica correta?",
    "options": [
      "O sangue comporta-se como um fluido puramente invisível e sem atrito que viaja a velocidades próximas da luz no interior dos vasos.",
      "com um hematócrito reduzido (< 25%), a viscosidade do sangue diminui para metade, o que faz baixar a resistência vascular e aumentar o retorno venoso e débito cardíaco. O aumento da velocidade (v) combinado com a descida da viscosidade (η) faz disparar o Número de Reynolds ($Re = \\rho v d / \\eta$), induzindo turbulência na válvula aórtica.",
      "Trata-se de um processo onde a viscosidade do sangue é zero absoluto e a densidade é igual à do ar atmosférico rarefeito.",
      "A pressão hidrostática anula instantaneamente todas as leis de conservação de energia e de massa no sistema vascular."
    ],
    "correctIndex": 1,
    "explanation": "Em biofísica circulatória, anemia severa e sopros cardíacos hiperdinâmicos explica-se pelo facto de que com um hematócrito reduzido (< 25%), a viscosidade do sangue diminui para metade, o que faz baixar a resistência vascular e aumentar o retorno venoso e débito cardíaco. O aumento da velocidade (v) combinado com a descida da viscosidade (η) faz disparar o Número de Reynolds ($Re = \\rho v d / \\eta$), induzindo turbulência na válvula aórtica.",
    "distractorAnalysis": [
      "A primeira opção incorreta atribui ao sangue propriedades físicas fictícias e velocidades relativísticas impossíveis.",
      "A segunda opção incorreta assume viscosidade nula, o que só ocorreria num superfluido hélio quântico a perto de zero Kelvin.",
      "A terceira opção incorreta ignora os princípios fundamentais da conservação de massa e de energia da física clássica."
    ],
    "nursingApplication": "O enfermeiro ausculta um sopro sistólico de ejeção precoce nos focos da base e verifica que o sopro desaparece após a correção da anemia com transfusão ou ferro endovenoso."
  },
  {
    "id": 4133,
    "topicId": 4,
    "question": "Na avaliação clínica e administração de terapêutica por um enfermeiro, como se manifesta a aplicação prática de 'anemia severa e sopros cardíacos hiperdinâmicos'?",
    "options": [
      "Implica a medição da pressão arterial apenas com um termómetro de mercúrio colocado na axila sem braçadeira.",
      "Exige a administração de água canalizada pura sem sais diretamente numa veia central em bólus de 1 litro em 10 segundos.",
      "Manifesta-se clinicamente da seguinte forma: O enfermeiro ausculta um sopro sistólico de ejeção precoce nos focos da base e verifica que o sopro desaparece após a correção da anemia com transfusão ou ferro endovenoso.",
      "Requer que o doente permaneça de cabeça para baixo durante 24 horas consecutivas para impedir o fluxo de sangue no cérebro."
    ],
    "correctIndex": 2,
    "explanation": "A aplicação de enfermagem para anemia severa e sopros cardíacos hiperdinâmicos baseia-se no princípio: O enfermeiro ausculta um sopro sistólico de ejeção precoce nos focos da base e verifica que o sopro desaparece após a correção da anemia com transfusão ou ferro endovenoso. Esta intervenção é essencial para a segurança hemodinâmica do doente.",
    "distractorAnalysis": [
      "A primeira opção confunde a medição da temperatura axilar com a avaliação hemodinâmica da pressão com esfigmomanómetro.",
      "A segunda opção incorreta provocaria hemólise maciça hipotónica intravascular fatal imediata.",
      "A terceira opção causaria congestão cerebral perigosa, hipertensão intracraniana e asfixia mecânica."
    ],
    "nursingApplication": "O enfermeiro ausculta um sopro sistólico de ejeção precoce nos focos da base e verifica que o sopro desaparece após a correção da anemia com transfusão ou ferro endovenoso."
  },
  {
    "id": 4134,
    "topicId": 4,
    "question": "Ao analisar as variáveis físicas que regem 'anemia severa e sopros cardíacos hiperdinâmicos', qual das seguintes afirmações expressa com rigor a relação hidrodinâmica entre pressão, velocidade e geometria vascular?",
    "options": [
      "A resistência ao fluxo é independente do raio do vaso e depende apenas da fase da Lua e marés oceânicas.",
      "O fluxo turbulento nunca produz ruído nem vibrações mecânicas em nenhuma circunstância biológica.",
      "A velocidade do sangue é máxima nos capilares e mínima na aorta ascendente em repouso.",
      "A relação física correta demonstra que O aumento da velocidade (v) combinado com a descida da viscosidade (η) faz disparar o Número de Reynolds ($Re = \\rho v d / \\eta$), induzindo turbulência na válvula aórtica."
    ],
    "correctIndex": 3,
    "explanation": "A análise hidrodinâmica correta confirma que O aumento da velocidade (v) combinado com a descida da viscosidade (η) faz disparar o Número de Reynolds ($Re = \\rho v d / \\eta$), induzindo turbulência na válvula aórtica. O domínio destas leis permite ao enfermeiro interpretar os fenómenos vasculares com rigor científico.",
    "distractorAnalysis": [
      "A primeira opção é uma aberração pseudocientífica que ignora a Lei de Poiseuille e a dependência em r⁴.",
      "A segunda opção é falsa, pois a turbulência é precisamente a geradora física dos sopros e ruídos de Korotkoff.",
      "A terceira opção inverte totalmente a realidade: a velocidade capilar é a mais lenta do sistema cardiovascular."
    ],
    "nursingApplication": "O enfermeiro ausculta um sopro sistólico de ejeção precoce nos focos da base e verifica que o sopro desaparece após a correção da anemia com transfusão ou ferro endovenoso."
  },
  {
    "id": 4135,
    "topicId": 4,
    "question": "Na hidrodinâmica circulatória aplicada à enfermagem, em relação a 'transfusão rápida de concentrado de eritrócitos e vigilância hemodinâmica', qual é a fundamentação biofísica correta?",
    "options": [
      "a administração rápida de múltiplos concentrados de eritrócitos eleva subitamente o hematócrito e a viscosidade do sangue em circulação. Num doente idoso ou com insuficiência cardíaca prévia, o aumento abrupto da pós-carga e resistência periférica pode desencadear edema agudo do pulmão (sobrecarga circulatória TACO).",
      "O sangue comporta-se como um fluido puramente invisível e sem atrito que viaja a velocidades próximas da luz no interior dos vasos.",
      "Trata-se de um processo onde a viscosidade do sangue é zero absoluto e a densidade é igual à do ar atmosférico rarefeito.",
      "A pressão hidrostática anula instantaneamente todas as leis de conservação de energia e de massa no sistema vascular."
    ],
    "correctIndex": 0,
    "explanation": "Em biofísica circulatória, transfusão rápida de concentrado de eritrócitos e vigilância hemodinâmica explica-se pelo facto de que a administração rápida de múltiplos concentrados de eritrócitos eleva subitamente o hematócrito e a viscosidade do sangue em circulação. Num doente idoso ou com insuficiência cardíaca prévia, o aumento abrupto da pós-carga e resistência periférica pode desencadear edema agudo do pulmão (sobrecarga circulatória TACO).",
    "distractorAnalysis": [
      "A primeira opção incorreta atribui ao sangue propriedades físicas fictícias e velocidades relativísticas impossíveis.",
      "A segunda opção incorreta assume viscosidade nula, o que só ocorreria num superfluido hélio quântico a perto de zero Kelvin.",
      "A terceira opção incorreta ignora os princípios fundamentais da conservação de massa e de energia da física clássica."
    ],
    "nursingApplication": "O enfermeiro vigia rigorosamente a frequência respiratória, saturação de O₂, auscultação pulmonar e pressão arterial a cada 15 minutos durante a transfusão sanguínea."
  },
  {
    "id": 4136,
    "topicId": 4,
    "question": "Na avaliação clínica e administração de terapêutica por um enfermeiro, como se manifesta a aplicação prática de 'transfusão rápida de concentrado de eritrócitos e vigilância hemodinâmica'?",
    "options": [
      "Implica a medição da pressão arterial apenas com um termómetro de mercúrio colocado na axila sem braçadeira.",
      "Manifesta-se clinicamente da seguinte forma: O enfermeiro vigia rigorosamente a frequência respiratória, saturação de O₂, auscultação pulmonar e pressão arterial a cada 15 minutos durante a transfusão sanguínea.",
      "Exige a administração de água canalizada pura sem sais diretamente numa veia central em bólus de 1 litro em 10 segundos.",
      "Requer que o doente permaneça de cabeça para baixo durante 24 horas consecutivas para impedir o fluxo de sangue no cérebro."
    ],
    "correctIndex": 1,
    "explanation": "A aplicação de enfermagem para transfusão rápida de concentrado de eritrócitos e vigilância hemodinâmica baseia-se no princípio: O enfermeiro vigia rigorosamente a frequência respiratória, saturação de O₂, auscultação pulmonar e pressão arterial a cada 15 minutos durante a transfusão sanguínea. Esta intervenção é essencial para a segurança hemodinâmica do doente.",
    "distractorAnalysis": [
      "A primeira opção confunde a medição da temperatura axilar com a avaliação hemodinâmica da pressão com esfigmomanómetro.",
      "A segunda opção incorreta provocaria hemólise maciça hipotónica intravascular fatal imediata.",
      "A terceira opção causaria congestão cerebral perigosa, hipertensão intracraniana e asfixia mecânica."
    ],
    "nursingApplication": "O enfermeiro vigia rigorosamente a frequência respiratória, saturação de O₂, auscultação pulmonar e pressão arterial a cada 15 minutos durante a transfusão sanguínea."
  },
  {
    "id": 4137,
    "topicId": 4,
    "question": "Ao analisar as variáveis físicas que regem 'transfusão rápida de concentrado de eritrócitos e vigilância hemodinâmica', qual das seguintes afirmações expressa com rigor a relação hidrodinâmica entre pressão, velocidade e geometria vascular?",
    "options": [
      "A resistência ao fluxo é independente do raio do vaso e depende apenas da fase da Lua e marés oceânicas.",
      "O fluxo turbulento nunca produz ruído nem vibrações mecânicas em nenhuma circunstância biológica.",
      "A relação física correta demonstra que Num doente idoso ou com insuficiência cardíaca prévia, o aumento abrupto da pós-carga e resistência periférica pode desencadear edema agudo do pulmão (sobrecarga circulatória TACO).",
      "A velocidade do sangue é máxima nos capilares e mínima na aorta ascendente em repouso."
    ],
    "correctIndex": 2,
    "explanation": "A análise hidrodinâmica correta confirma que Num doente idoso ou com insuficiência cardíaca prévia, o aumento abrupto da pós-carga e resistência periférica pode desencadear edema agudo do pulmão (sobrecarga circulatória TACO). O domínio destas leis permite ao enfermeiro interpretar os fenómenos vasculares com rigor científico.",
    "distractorAnalysis": [
      "A primeira opção é uma aberração pseudocientífica que ignora a Lei de Poiseuille e a dependência em r⁴.",
      "A segunda opção é falsa, pois a turbulência é precisamente a geradora física dos sopros e ruídos de Korotkoff.",
      "A terceira opção inverte totalmente a realidade: a velocidade capilar é a mais lenta do sistema cardiovascular."
    ],
    "nursingApplication": "O enfermeiro vigia rigorosamente a frequência respiratória, saturação de O₂, auscultação pulmonar e pressão arterial a cada 15 minutos durante a transfusão sanguínea."
  },
  {
    "id": 4138,
    "topicId": 4,
    "question": "Na hidrodinâmica circulatória aplicada à enfermagem, em relação a 'desidratação e hemoconcentração iatrogénica', qual é a fundamentação biofísica correta?",
    "options": [
      "O sangue comporta-se como um fluido puramente invisível e sem atrito que viaja a velocidades próximas da luz no interior dos vasos.",
      "Trata-se de um processo onde a viscosidade do sangue é zero absoluto e a densidade é igual à do ar atmosférico rarefeito.",
      "A pressão hidrostática anula instantaneamente todas as leis de conservação de energia e de massa no sistema vascular.",
      "a perda acentuada de água livre (diarreia profusa, vómitos ou diuréticos em excesso) reduz o volume plasmático, elevando falsamente a concentração de células (hemoconcentração com Ht elevado). Isto torna o sangue transitoriamente hiperviscoso, predispondo idosos acamados a úlceras por pressão isquémicas e tromboflebites de cateteres."
    ],
    "correctIndex": 3,
    "explanation": "Em biofísica circulatória, desidratação e hemoconcentração iatrogénica explica-se pelo facto de que a perda acentuada de água livre (diarreia profusa, vómitos ou diuréticos em excesso) reduz o volume plasmático, elevando falsamente a concentração de células (hemoconcentração com Ht elevado). Isto torna o sangue transitoriamente hiperviscoso, predispondo idosos acamados a úlceras por pressão isquémicas e tromboflebites de cateteres.",
    "distractorAnalysis": [
      "A primeira opção incorreta atribui ao sangue propriedades físicas fictícias e velocidades relativísticas impossíveis.",
      "A segunda opção incorreta assume viscosidade nula, o que só ocorreria num superfluido hélio quântico a perto de zero Kelvin.",
      "A terceira opção incorreta ignora os princípios fundamentais da conservação de massa e de energia da física clássica."
    ],
    "nursingApplication": "O enfermeiro avalia o turgor cutâneo, humidade das mucosas, densidade urinária e diurese horária, promovendo a reidratação endovenosa para restaurar o volume intravascular e a viscosidade ótima."
  },
  {
    "id": 4139,
    "topicId": 4,
    "question": "Na avaliação clínica e administração de terapêutica por um enfermeiro, como se manifesta a aplicação prática de 'desidratação e hemoconcentração iatrogénica'?",
    "options": [
      "Manifesta-se clinicamente da seguinte forma: O enfermeiro avalia o turgor cutâneo, humidade das mucosas, densidade urinária e diurese horária, promovendo a reidratação endovenosa para restaurar o volume intravascular e a viscosidade ótima.",
      "Implica a medição da pressão arterial apenas com um termómetro de mercúrio colocado na axila sem braçadeira.",
      "Exige a administração de água canalizada pura sem sais diretamente numa veia central em bólus de 1 litro em 10 segundos.",
      "Requer que o doente permaneça de cabeça para baixo durante 24 horas consecutivas para impedir o fluxo de sangue no cérebro."
    ],
    "correctIndex": 0,
    "explanation": "A aplicação de enfermagem para desidratação e hemoconcentração iatrogénica baseia-se no princípio: O enfermeiro avalia o turgor cutâneo, humidade das mucosas, densidade urinária e diurese horária, promovendo a reidratação endovenosa para restaurar o volume intravascular e a viscosidade ótima. Esta intervenção é essencial para a segurança hemodinâmica do doente.",
    "distractorAnalysis": [
      "A primeira opção confunde a medição da temperatura axilar com a avaliação hemodinâmica da pressão com esfigmomanómetro.",
      "A segunda opção incorreta provocaria hemólise maciça hipotónica intravascular fatal imediata.",
      "A terceira opção causaria congestão cerebral perigosa, hipertensão intracraniana e asfixia mecânica."
    ],
    "nursingApplication": "O enfermeiro avalia o turgor cutâneo, humidade das mucosas, densidade urinária e diurese horária, promovendo a reidratação endovenosa para restaurar o volume intravascular e a viscosidade ótima."
  },
  {
    "id": 4140,
    "topicId": 4,
    "question": "Ao analisar as variáveis físicas que regem 'desidratação e hemoconcentração iatrogénica', qual das seguintes afirmações expressa com rigor a relação hidrodinâmica entre pressão, velocidade e geometria vascular?",
    "options": [
      "A resistência ao fluxo é independente do raio do vaso e depende apenas da fase da Lua e marés oceânicas.",
      "A relação física correta demonstra que Isto torna o sangue transitoriamente hiperviscoso, predispondo idosos acamados a úlceras por pressão isquémicas e tromboflebites de cateteres.",
      "O fluxo turbulento nunca produz ruído nem vibrações mecânicas em nenhuma circunstância biológica.",
      "A velocidade do sangue é máxima nos capilares e mínima na aorta ascendente em repouso."
    ],
    "correctIndex": 1,
    "explanation": "A análise hidrodinâmica correta confirma que Isto torna o sangue transitoriamente hiperviscoso, predispondo idosos acamados a úlceras por pressão isquémicas e tromboflebites de cateteres. O domínio destas leis permite ao enfermeiro interpretar os fenómenos vasculares com rigor científico.",
    "distractorAnalysis": [
      "A primeira opção é uma aberração pseudocientífica que ignora a Lei de Poiseuille e a dependência em r⁴.",
      "A segunda opção é falsa, pois a turbulência é precisamente a geradora física dos sopros e ruídos de Korotkoff.",
      "A terceira opção inverte totalmente a realidade: a velocidade capilar é a mais lenta do sistema cardiovascular."
    ],
    "nursingApplication": "O enfermeiro avalia o turgor cutâneo, humidade das mucosas, densidade urinária e diurese horária, promovendo a reidratação endovenosa para restaurar o volume intravascular e a viscosidade ótima."
  },
  {
    "id": 4141,
    "topicId": 4,
    "question": "Na hidrodinâmica circulatória aplicada à enfermagem, em relação a 'fórmula e dependência do débito volumétrico na Lei de Poiseuille', qual é a fundamentação biofísica correta?",
    "options": [
      "O sangue comporta-se como um fluido puramente invisível e sem atrito que viaja a velocidades próximas da luz no interior dos vasos.",
      "Trata-se de um processo onde a viscosidade do sangue é zero absoluto e a densidade é igual à do ar atmosférico rarefeito.",
      "Q = (π · ΔP · r⁴) / (8 · η · L), demonstrando que o débito é diretamente proporcional à diferença de pressão (ΔP) e à quarta potência do raio (r⁴), e inversamente proporcional à viscosidade (η) e comprimento (L). A dependência em relação a r⁴ significa que pequenas alterações de calibre vascular produzem variações astronómicas no fluxo sanguíneo local.",
      "A pressão hidrostática anula instantaneamente todas as leis de conservação de energia e de massa no sistema vascular."
    ],
    "correctIndex": 2,
    "explanation": "Em biofísica circulatória, fórmula e dependência do débito volumétrico na Lei de Poiseuille explica-se pelo facto de que Q = (π · ΔP · r⁴) / (8 · η · L), demonstrando que o débito é diretamente proporcional à diferença de pressão (ΔP) e à quarta potência do raio (r⁴), e inversamente proporcional à viscosidade (η) e comprimento (L). A dependência em relação a r⁴ significa que pequenas alterações de calibre vascular produzem variações astronómicas no fluxo sanguíneo local.",
    "distractorAnalysis": [
      "A primeira opção incorreta atribui ao sangue propriedades físicas fictícias e velocidades relativísticas impossíveis.",
      "A segunda opção incorreta assume viscosidade nula, o que só ocorreria num superfluido hélio quântico a perto de zero Kelvin.",
      "A terceira opção incorreta ignora os princípios fundamentais da conservação de massa e de energia da física clássica."
    ],
    "nursingApplication": "O enfermeiro compreende porque uma vasodilatação arteriolar de apenas 19% duplica o fluxo de sangue no leito tecidual ($1,19^4 \\approx 2,0$)."
  },
  {
    "id": 4142,
    "topicId": 4,
    "question": "Na avaliação clínica e administração de terapêutica por um enfermeiro, como se manifesta a aplicação prática de 'fórmula e dependência do débito volumétrico na Lei de Poiseuille'?",
    "options": [
      "Implica a medição da pressão arterial apenas com um termómetro de mercúrio colocado na axila sem braçadeira.",
      "Exige a administração de água canalizada pura sem sais diretamente numa veia central em bólus de 1 litro em 10 segundos.",
      "Requer que o doente permaneça de cabeça para baixo durante 24 horas consecutivas para impedir o fluxo de sangue no cérebro.",
      "Manifesta-se clinicamente da seguinte forma: O enfermeiro compreende porque uma vasodilatação arteriolar de apenas 19% duplica o fluxo de sangue no leito tecidual ($1,19^4 \\approx 2,0$)."
    ],
    "correctIndex": 3,
    "explanation": "A aplicação de enfermagem para fórmula e dependência do débito volumétrico na Lei de Poiseuille baseia-se no princípio: O enfermeiro compreende porque uma vasodilatação arteriolar de apenas 19% duplica o fluxo de sangue no leito tecidual ($1,19^4 \\approx 2,0$). Esta intervenção é essencial para a segurança hemodinâmica do doente.",
    "distractorAnalysis": [
      "A primeira opção confunde a medição da temperatura axilar com a avaliação hemodinâmica da pressão com esfigmomanómetro.",
      "A segunda opção incorreta provocaria hemólise maciça hipotónica intravascular fatal imediata.",
      "A terceira opção causaria congestão cerebral perigosa, hipertensão intracraniana e asfixia mecânica."
    ],
    "nursingApplication": "O enfermeiro compreende porque uma vasodilatação arteriolar de apenas 19% duplica o fluxo de sangue no leito tecidual ($1,19^4 \\approx 2,0$)."
  },
  {
    "id": 4143,
    "topicId": 4,
    "question": "Ao analisar as variáveis físicas que regem 'fórmula e dependência do débito volumétrico na Lei de Poiseuille', qual das seguintes afirmações expressa com rigor a relação hidrodinâmica entre pressão, velocidade e geometria vascular?",
    "options": [
      "A relação física correta demonstra que A dependência em relação a r⁴ significa que pequenas alterações de calibre vascular produzem variações astronómicas no fluxo sanguíneo local.",
      "A resistência ao fluxo é independente do raio do vaso e depende apenas da fase da Lua e marés oceânicas.",
      "O fluxo turbulento nunca produz ruído nem vibrações mecânicas em nenhuma circunstância biológica.",
      "A velocidade do sangue é máxima nos capilares e mínima na aorta ascendente em repouso."
    ],
    "correctIndex": 0,
    "explanation": "A análise hidrodinâmica correta confirma que A dependência em relação a r⁴ significa que pequenas alterações de calibre vascular produzem variações astronómicas no fluxo sanguíneo local. O domínio destas leis permite ao enfermeiro interpretar os fenómenos vasculares com rigor científico.",
    "distractorAnalysis": [
      "A primeira opção é uma aberração pseudocientífica que ignora a Lei de Poiseuille e a dependência em r⁴.",
      "A segunda opção é falsa, pois a turbulência é precisamente a geradora física dos sopros e ruídos de Korotkoff.",
      "A terceira opção inverte totalmente a realidade: a velocidade capilar é a mais lenta do sistema cardiovascular."
    ],
    "nursingApplication": "O enfermeiro compreende porque uma vasodilatação arteriolar de apenas 19% duplica o fluxo de sangue no leito tecidual ($1,19^4 \\approx 2,0$)."
  },
  {
    "id": 4144,
    "topicId": 4,
    "question": "Na hidrodinâmica circulatória aplicada à enfermagem, em relação a 'efeito dramático da redução do raio vascular à quarta potência (r⁴)', qual é a fundamentação biofísica correta?",
    "options": [
      "O sangue comporta-se como um fluido puramente invisível e sem atrito que viaja a velocidades próximas da luz no interior dos vasos.",
      "se o raio interno de uma artéria diminuir para metade (redução de 50% por vasoconstrição ou estenose aterosclerótica), o fluxo cai para 1/16 do valor inicial (apenas 6,25% do fluxo prévio!). Para manter o mesmo débito com metade do raio, seria necessário um aumento de 16 vezes na diferença de pressão impulsora (ΔP).",
      "Trata-se de um processo onde a viscosidade do sangue é zero absoluto e a densidade é igual à do ar atmosférico rarefeito.",
      "A pressão hidrostática anula instantaneamente todas as leis de conservação de energia e de massa no sistema vascular."
    ],
    "correctIndex": 1,
    "explanation": "Em biofísica circulatória, efeito dramático da redução do raio vascular à quarta potência (r⁴) explica-se pelo facto de que se o raio interno de uma artéria diminuir para metade (redução de 50% por vasoconstrição ou estenose aterosclerótica), o fluxo cai para 1/16 do valor inicial (apenas 6,25% do fluxo prévio!). Para manter o mesmo débito com metade do raio, seria necessário um aumento de 16 vezes na diferença de pressão impulsora (ΔP).",
    "distractorAnalysis": [
      "A primeira opção incorreta atribui ao sangue propriedades físicas fictícias e velocidades relativísticas impossíveis.",
      "A segunda opção incorreta assume viscosidade nula, o que só ocorreria num superfluido hélio quântico a perto de zero Kelvin.",
      "A terceira opção incorreta ignora os princípios fundamentais da conservação de massa e de energia da física clássica."
    ],
    "nursingApplication": "O enfermeiro alerta para a gravidade dos espasmos coronários ou oclusões arteriais parciais, que induzem isquemia miocárdica e angina de peito instantânea."
  },
  {
    "id": 4145,
    "topicId": 4,
    "question": "Na avaliação clínica e administração de terapêutica por um enfermeiro, como se manifesta a aplicação prática de 'efeito dramático da redução do raio vascular à quarta potência (r⁴)'?",
    "options": [
      "Implica a medição da pressão arterial apenas com um termómetro de mercúrio colocado na axila sem braçadeira.",
      "Exige a administração de água canalizada pura sem sais diretamente numa veia central em bólus de 1 litro em 10 segundos.",
      "Manifesta-se clinicamente da seguinte forma: O enfermeiro alerta para a gravidade dos espasmos coronários ou oclusões arteriais parciais, que induzem isquemia miocárdica e angina de peito instantânea.",
      "Requer que o doente permaneça de cabeça para baixo durante 24 horas consecutivas para impedir o fluxo de sangue no cérebro."
    ],
    "correctIndex": 2,
    "explanation": "A aplicação de enfermagem para efeito dramático da redução do raio vascular à quarta potência (r⁴) baseia-se no princípio: O enfermeiro alerta para a gravidade dos espasmos coronários ou oclusões arteriais parciais, que induzem isquemia miocárdica e angina de peito instantânea. Esta intervenção é essencial para a segurança hemodinâmica do doente.",
    "distractorAnalysis": [
      "A primeira opção confunde a medição da temperatura axilar com a avaliação hemodinâmica da pressão com esfigmomanómetro.",
      "A segunda opção incorreta provocaria hemólise maciça hipotónica intravascular fatal imediata.",
      "A terceira opção causaria congestão cerebral perigosa, hipertensão intracraniana e asfixia mecânica."
    ],
    "nursingApplication": "O enfermeiro alerta para a gravidade dos espasmos coronários ou oclusões arteriais parciais, que induzem isquemia miocárdica e angina de peito instantânea."
  },
  {
    "id": 4146,
    "topicId": 4,
    "question": "Ao analisar as variáveis físicas que regem 'efeito dramático da redução do raio vascular à quarta potência (r⁴)', qual das seguintes afirmações expressa com rigor a relação hidrodinâmica entre pressão, velocidade e geometria vascular?",
    "options": [
      "A resistência ao fluxo é independente do raio do vaso e depende apenas da fase da Lua e marés oceânicas.",
      "O fluxo turbulento nunca produz ruído nem vibrações mecânicas em nenhuma circunstância biológica.",
      "A velocidade do sangue é máxima nos capilares e mínima na aorta ascendente em repouso.",
      "A relação física correta demonstra que Para manter o mesmo débito com metade do raio, seria necessário um aumento de 16 vezes na diferença de pressão impulsora (ΔP)."
    ],
    "correctIndex": 3,
    "explanation": "A análise hidrodinâmica correta confirma que Para manter o mesmo débito com metade do raio, seria necessário um aumento de 16 vezes na diferença de pressão impulsora (ΔP). O domínio destas leis permite ao enfermeiro interpretar os fenómenos vasculares com rigor científico.",
    "distractorAnalysis": [
      "A primeira opção é uma aberração pseudocientífica que ignora a Lei de Poiseuille e a dependência em r⁴.",
      "A segunda opção é falsa, pois a turbulência é precisamente a geradora física dos sopros e ruídos de Korotkoff.",
      "A terceira opção inverte totalmente a realidade: a velocidade capilar é a mais lenta do sistema cardiovascular."
    ],
    "nursingApplication": "O enfermeiro alerta para a gravidade dos espasmos coronários ou oclusões arteriais parciais, que induzem isquemia miocárdica e angina de peito instantânea."
  },
  {
    "id": 4147,
    "topicId": 4,
    "question": "Na hidrodinâmica circulatória aplicada à enfermagem, em relação a 'calibre e comprimento de cateteres intravenosos periféricos (Abbocath)', qual é a fundamentação biofísica correta?",
    "options": [
      "segundo Poiseuille, o fluxo é maximizado usando cateteres com grande raio interno (grande calibre) e pequeno comprimento (L curto). Um cateter periférico curto 14G (laranja, diâmetro ~2,1 mm) debita mais de 300 mL/min de soro, enquanto um cateter central CVC longo e fino (com L de 20 cm) debita menos de 50 mL/min sob a mesma pressão gravitacional.",
      "O sangue comporta-se como um fluido puramente invisível e sem atrito que viaja a velocidades próximas da luz no interior dos vasos.",
      "Trata-se de um processo onde a viscosidade do sangue é zero absoluto e a densidade é igual à do ar atmosférico rarefeito.",
      "A pressão hidrostática anula instantaneamente todas as leis de conservação de energia e de massa no sistema vascular."
    ],
    "correctIndex": 0,
    "explanation": "Em biofísica circulatória, calibre e comprimento de cateteres intravenosos periféricos (Abbocath) explica-se pelo facto de que segundo Poiseuille, o fluxo é maximizado usando cateteres com grande raio interno (grande calibre) e pequeno comprimento (L curto). Um cateter periférico curto 14G (laranja, diâmetro ~2,1 mm) debita mais de 300 mL/min de soro, enquanto um cateter central CVC longo e fino (com L de 20 cm) debita menos de 50 mL/min sob a mesma pressão gravitacional.",
    "distractorAnalysis": [
      "A primeira opção incorreta atribui ao sangue propriedades físicas fictícias e velocidades relativísticas impossíveis.",
      "A segunda opção incorreta assume viscosidade nula, o que só ocorreria num superfluido hélio quântico a perto de zero Kelvin.",
      "A terceira opção incorreta ignora os princípios fundamentais da conservação de massa e de energia da física clássica."
    ],
    "nursingApplication": "Em situações de paragem cardiorrespiratória ou choque hipovolémico hemorrágico grave, o enfermeiro punciona de imediato dois acessos venosos periféricos curtos de grande calibre (14G ou 16G)."
  },
  {
    "id": 4148,
    "topicId": 4,
    "question": "Na avaliação clínica e administração de terapêutica por um enfermeiro, como se manifesta a aplicação prática de 'calibre e comprimento de cateteres intravenosos periféricos (Abbocath)'?",
    "options": [
      "Implica a medição da pressão arterial apenas com um termómetro de mercúrio colocado na axila sem braçadeira.",
      "Manifesta-se clinicamente da seguinte forma: Em situações de paragem cardiorrespiratória ou choque hipovolémico hemorrágico grave, o enfermeiro punciona de imediato dois acessos venosos periféricos curtos de grande calibre (14G ou 16G).",
      "Exige a administração de água canalizada pura sem sais diretamente numa veia central em bólus de 1 litro em 10 segundos.",
      "Requer que o doente permaneça de cabeça para baixo durante 24 horas consecutivas para impedir o fluxo de sangue no cérebro."
    ],
    "correctIndex": 1,
    "explanation": "A aplicação de enfermagem para calibre e comprimento de cateteres intravenosos periféricos (Abbocath) baseia-se no princípio: Em situações de paragem cardiorrespiratória ou choque hipovolémico hemorrágico grave, o enfermeiro punciona de imediato dois acessos venosos periféricos curtos de grande calibre (14G ou 16G). Esta intervenção é essencial para a segurança hemodinâmica do doente.",
    "distractorAnalysis": [
      "A primeira opção confunde a medição da temperatura axilar com a avaliação hemodinâmica da pressão com esfigmomanómetro.",
      "A segunda opção incorreta provocaria hemólise maciça hipotónica intravascular fatal imediata.",
      "A terceira opção causaria congestão cerebral perigosa, hipertensão intracraniana e asfixia mecânica."
    ],
    "nursingApplication": "Em situações de paragem cardiorrespiratória ou choque hipovolémico hemorrágico grave, o enfermeiro punciona de imediato dois acessos venosos periféricos curtos de grande calibre (14G ou 16G)."
  },
  {
    "id": 4149,
    "topicId": 4,
    "question": "Ao analisar as variáveis físicas que regem 'calibre e comprimento de cateteres intravenosos periféricos (Abbocath)', qual das seguintes afirmações expressa com rigor a relação hidrodinâmica entre pressão, velocidade e geometria vascular?",
    "options": [
      "A resistência ao fluxo é independente do raio do vaso e depende apenas da fase da Lua e marés oceânicas.",
      "O fluxo turbulento nunca produz ruído nem vibrações mecânicas em nenhuma circunstância biológica.",
      "A relação física correta demonstra que Um cateter periférico curto 14G (laranja, diâmetro ~2,1 mm) debita mais de 300 mL/min de soro, enquanto um cateter central CVC longo e fino (com L de 20 cm) debita menos de 50 mL/min sob a mesma pressão gravitacional.",
      "A velocidade do sangue é máxima nos capilares e mínima na aorta ascendente em repouso."
    ],
    "correctIndex": 2,
    "explanation": "A análise hidrodinâmica correta confirma que Um cateter periférico curto 14G (laranja, diâmetro ~2,1 mm) debita mais de 300 mL/min de soro, enquanto um cateter central CVC longo e fino (com L de 20 cm) debita menos de 50 mL/min sob a mesma pressão gravitacional. O domínio destas leis permite ao enfermeiro interpretar os fenómenos vasculares com rigor científico.",
    "distractorAnalysis": [
      "A primeira opção é uma aberração pseudocientífica que ignora a Lei de Poiseuille e a dependência em r⁴.",
      "A segunda opção é falsa, pois a turbulência é precisamente a geradora física dos sopros e ruídos de Korotkoff.",
      "A terceira opção inverte totalmente a realidade: a velocidade capilar é a mais lenta do sistema cardiovascular."
    ],
    "nursingApplication": "Em situações de paragem cardiorrespiratória ou choque hipovolémico hemorrágico grave, o enfermeiro punciona de imediato dois acessos venosos periféricos curtos de grande calibre (14G ou 16G)."
  },
  {
    "id": 4150,
    "topicId": 4,
    "question": "Na hidrodinâmica circulatória aplicada à enfermagem, em relação a 'altura do frasco de soro na infusão por gravidade', qual é a fundamentação biofísica correta?",
    "options": [
      "O sangue comporta-se como um fluido puramente invisível e sem atrito que viaja a velocidades próximas da luz no interior dos vasos.",
      "Trata-se de um processo onde a viscosidade do sangue é zero absoluto e a densidade é igual à do ar atmosférico rarefeito.",
      "A pressão hidrostática anula instantaneamente todas as leis de conservação de energia e de massa no sistema vascular.",
      "a pressão impulsora hidrostática (ΔP) gerada pelo frasco de perfusão depende da altura manométrica segundo a lei de Stevin: ΔP = ρ · g · h. Ao elevar o frasco de soro em relação ao braço do doente (aumentando h), aumenta-se diretamente ΔP, o que faz subir linearmente o débito volumétrico Q pela Lei de Poiseuille."
    ],
    "correctIndex": 3,
    "explanation": "Em biofísica circulatória, altura do frasco de soro na infusão por gravidade explica-se pelo facto de que a pressão impulsora hidrostática (ΔP) gerada pelo frasco de perfusão depende da altura manométrica segundo a lei de Stevin: ΔP = ρ · g · h. Ao elevar o frasco de soro em relação ao braço do doente (aumentando h), aumenta-se diretamente ΔP, o que faz subir linearmente o débito volumétrico Q pela Lei de Poiseuille.",
    "distractorAnalysis": [
      "A primeira opção incorreta atribui ao sangue propriedades físicas fictícias e velocidades relativísticas impossíveis.",
      "A segunda opção incorreta assume viscosidade nula, o que só ocorreria num superfluido hélio quântico a perto de zero Kelvin.",
      "A terceira opção incorreta ignora os princípios fundamentais da conservação de massa e de energia da física clássica."
    ],
    "nursingApplication": "O enfermeiro ajusta a altura do suporte de soro para manter o ritmo prescrito quando não dispõe de bomba infusora volumétrica computorizada."
  },
  {
    "id": 4151,
    "topicId": 4,
    "question": "Na avaliação clínica e administração de terapêutica por um enfermeiro, como se manifesta a aplicação prática de 'altura do frasco de soro na infusão por gravidade'?",
    "options": [
      "Manifesta-se clinicamente da seguinte forma: O enfermeiro ajusta a altura do suporte de soro para manter o ritmo prescrito quando não dispõe de bomba infusora volumétrica computorizada.",
      "Implica a medição da pressão arterial apenas com um termómetro de mercúrio colocado na axila sem braçadeira.",
      "Exige a administração de água canalizada pura sem sais diretamente numa veia central em bólus de 1 litro em 10 segundos.",
      "Requer que o doente permaneça de cabeça para baixo durante 24 horas consecutivas para impedir o fluxo de sangue no cérebro."
    ],
    "correctIndex": 0,
    "explanation": "A aplicação de enfermagem para altura do frasco de soro na infusão por gravidade baseia-se no princípio: O enfermeiro ajusta a altura do suporte de soro para manter o ritmo prescrito quando não dispõe de bomba infusora volumétrica computorizada. Esta intervenção é essencial para a segurança hemodinâmica do doente.",
    "distractorAnalysis": [
      "A primeira opção confunde a medição da temperatura axilar com a avaliação hemodinâmica da pressão com esfigmomanómetro.",
      "A segunda opção incorreta provocaria hemólise maciça hipotónica intravascular fatal imediata.",
      "A terceira opção causaria congestão cerebral perigosa, hipertensão intracraniana e asfixia mecânica."
    ],
    "nursingApplication": "O enfermeiro ajusta a altura do suporte de soro para manter o ritmo prescrito quando não dispõe de bomba infusora volumétrica computorizada."
  },
  {
    "id": 4152,
    "topicId": 4,
    "question": "Ao analisar as variáveis físicas que regem 'altura do frasco de soro na infusão por gravidade', qual das seguintes afirmações expressa com rigor a relação hidrodinâmica entre pressão, velocidade e geometria vascular?",
    "options": [
      "A resistência ao fluxo é independente do raio do vaso e depende apenas da fase da Lua e marés oceânicas.",
      "A relação física correta demonstra que Ao elevar o frasco de soro em relação ao braço do doente (aumentando h), aumenta-se diretamente ΔP, o que faz subir linearmente o débito volumétrico Q pela Lei de Poiseuille.",
      "O fluxo turbulento nunca produz ruído nem vibrações mecânicas em nenhuma circunstância biológica.",
      "A velocidade do sangue é máxima nos capilares e mínima na aorta ascendente em repouso."
    ],
    "correctIndex": 1,
    "explanation": "A análise hidrodinâmica correta confirma que Ao elevar o frasco de soro em relação ao braço do doente (aumentando h), aumenta-se diretamente ΔP, o que faz subir linearmente o débito volumétrico Q pela Lei de Poiseuille. O domínio destas leis permite ao enfermeiro interpretar os fenómenos vasculares com rigor científico.",
    "distractorAnalysis": [
      "A primeira opção é uma aberração pseudocientífica que ignora a Lei de Poiseuille e a dependência em r⁴.",
      "A segunda opção é falsa, pois a turbulência é precisamente a geradora física dos sopros e ruídos de Korotkoff.",
      "A terceira opção inverte totalmente a realidade: a velocidade capilar é a mais lenta do sistema cardiovascular."
    ],
    "nursingApplication": "O enfermeiro ajusta a altura do suporte de soro para manter o ritmo prescrito quando não dispõe de bomba infusora volumétrica computorizada."
  },
  {
    "id": 4153,
    "topicId": 4,
    "question": "Na hidrodinâmica circulatória aplicada à enfermagem, em relação a 'resistência hidráulica de conduta na formulação de Poiseuille', qual é a fundamentação biofísica correta?",
    "options": [
      "O sangue comporta-se como um fluido puramente invisível e sem atrito que viaja a velocidades próximas da luz no interior dos vasos.",
      "Trata-se de um processo onde a viscosidade do sangue é zero absoluto e a densidade é igual à do ar atmosférico rarefeito.",
      "a resistência ao escoamento é dada por R = (8 · η · L) / (π · r⁴), análoga à Lei de Ohm elétrica (ΔP = Q · R ou U = I · R). Esta resistência é dominada quase exclusivamente pelo raio vascular na quarta potência ($1/r^4$), tornando as arteríolas pré-capilares os principais vasos de resistência do corpo humano.",
      "A pressão hidrostática anula instantaneamente todas as leis de conservação de energia e de massa no sistema vascular."
    ],
    "correctIndex": 2,
    "explanation": "Em biofísica circulatória, resistência hidráulica de conduta na formulação de Poiseuille explica-se pelo facto de que a resistência ao escoamento é dada por R = (8 · η · L) / (π · r⁴), análoga à Lei de Ohm elétrica (ΔP = Q · R ou U = I · R). Esta resistência é dominada quase exclusivamente pelo raio vascular na quarta potência ($1/r^4$), tornando as arteríolas pré-capilares os principais vasos de resistência do corpo humano.",
    "distractorAnalysis": [
      "A primeira opção incorreta atribui ao sangue propriedades físicas fictícias e velocidades relativísticas impossíveis.",
      "A segunda opção incorreta assume viscosidade nula, o que só ocorreria num superfluido hélio quântico a perto de zero Kelvin.",
      "A terceira opção incorreta ignora os princípios fundamentais da conservação de massa e de energia da física clássica."
    ],
    "nursingApplication": "O enfermeiro administra anti-hipertensores como vasodilatadores arteriolares diretos, sabendo que o relaxamento da musculatura lisa vascular reduz a resistência periférica e normaliza a PA."
  },
  {
    "id": 4154,
    "topicId": 4,
    "question": "Na avaliação clínica e administração de terapêutica por um enfermeiro, como se manifesta a aplicação prática de 'resistência hidráulica de conduta na formulação de Poiseuille'?",
    "options": [
      "Implica a medição da pressão arterial apenas com um termómetro de mercúrio colocado na axila sem braçadeira.",
      "Exige a administração de água canalizada pura sem sais diretamente numa veia central em bólus de 1 litro em 10 segundos.",
      "Requer que o doente permaneça de cabeça para baixo durante 24 horas consecutivas para impedir o fluxo de sangue no cérebro.",
      "Manifesta-se clinicamente da seguinte forma: O enfermeiro administra anti-hipertensores como vasodilatadores arteriolares diretos, sabendo que o relaxamento da musculatura lisa vascular reduz a resistência periférica e normaliza a PA."
    ],
    "correctIndex": 3,
    "explanation": "A aplicação de enfermagem para resistência hidráulica de conduta na formulação de Poiseuille baseia-se no princípio: O enfermeiro administra anti-hipertensores como vasodilatadores arteriolares diretos, sabendo que o relaxamento da musculatura lisa vascular reduz a resistência periférica e normaliza a PA. Esta intervenção é essencial para a segurança hemodinâmica do doente.",
    "distractorAnalysis": [
      "A primeira opção confunde a medição da temperatura axilar com a avaliação hemodinâmica da pressão com esfigmomanómetro.",
      "A segunda opção incorreta provocaria hemólise maciça hipotónica intravascular fatal imediata.",
      "A terceira opção causaria congestão cerebral perigosa, hipertensão intracraniana e asfixia mecânica."
    ],
    "nursingApplication": "O enfermeiro administra anti-hipertensores como vasodilatadores arteriolares diretos, sabendo que o relaxamento da musculatura lisa vascular reduz a resistência periférica e normaliza a PA."
  },
  {
    "id": 4155,
    "topicId": 4,
    "question": "Ao analisar as variáveis físicas que regem 'resistência hidráulica de conduta na formulação de Poiseuille', qual das seguintes afirmações expressa com rigor a relação hidrodinâmica entre pressão, velocidade e geometria vascular?",
    "options": [
      "A relação física correta demonstra que Esta resistência é dominada quase exclusivamente pelo raio vascular na quarta potência ($1/r^4$), tornando as arteríolas pré-capilares os principais vasos de resistência do corpo humano.",
      "A resistência ao fluxo é independente do raio do vaso e depende apenas da fase da Lua e marés oceânicas.",
      "O fluxo turbulento nunca produz ruído nem vibrações mecânicas em nenhuma circunstância biológica.",
      "A velocidade do sangue é máxima nos capilares e mínima na aorta ascendente em repouso."
    ],
    "correctIndex": 0,
    "explanation": "A análise hidrodinâmica correta confirma que Esta resistência é dominada quase exclusivamente pelo raio vascular na quarta potência ($1/r^4$), tornando as arteríolas pré-capilares os principais vasos de resistência do corpo humano. O domínio destas leis permite ao enfermeiro interpretar os fenómenos vasculares com rigor científico.",
    "distractorAnalysis": [
      "A primeira opção é uma aberração pseudocientífica que ignora a Lei de Poiseuille e a dependência em r⁴.",
      "A segunda opção é falsa, pois a turbulência é precisamente a geradora física dos sopros e ruídos de Korotkoff.",
      "A terceira opção inverte totalmente a realidade: a velocidade capilar é a mais lenta do sistema cardiovascular."
    ],
    "nursingApplication": "O enfermeiro administra anti-hipertensores como vasodilatadores arteriolares diretos, sabendo que o relaxamento da musculatura lisa vascular reduz a resistência periférica e normaliza a PA."
  },
  {
    "id": 4156,
    "topicId": 4,
    "question": "Na hidrodinâmica circulatória aplicada à enfermagem, em relação a 'associação de vasos em paralelo na circulação capilar', qual é a fundamentação biofísica correta?",
    "options": [
      "O sangue comporta-se como um fluido puramente invisível e sem atrito que viaja a velocidades próximas da luz no interior dos vasos.",
      "quando múltiplos vasos se dispõem em paralelo, o inverso da resistência total é a soma dos inversos das resistências individuais (1/R_total = 1/R₁ + 1/R₂ + ... + 1/Rₙ). Apesar de cada capilar individual ter um raio minúsculo e resistência altíssima, a associação em paralelo de milhares de milhões de capilares faz a resistência total da rede capilar desabar.",
      "Trata-se de um processo onde a viscosidade do sangue é zero absoluto e a densidade é igual à do ar atmosférico rarefeito.",
      "A pressão hidrostática anula instantaneamente todas as leis de conservação de energia e de massa no sistema vascular."
    ],
    "correctIndex": 1,
    "explanation": "Em biofísica circulatória, associação de vasos em paralelo na circulação capilar explica-se pelo facto de que quando múltiplos vasos se dispõem em paralelo, o inverso da resistência total é a soma dos inversos das resistências individuais (1/R_total = 1/R₁ + 1/R₂ + ... + 1/Rₙ). Apesar de cada capilar individual ter um raio minúsculo e resistência altíssima, a associação em paralelo de milhares de milhões de capilares faz a resistência total da rede capilar desabar.",
    "distractorAnalysis": [
      "A primeira opção incorreta atribui ao sangue propriedades físicas fictícias e velocidades relativísticas impossíveis.",
      "A segunda opção incorreta assume viscosidade nula, o que só ocorreria num superfluido hélio quântico a perto de zero Kelvin.",
      "A terceira opção incorreta ignora os princípios fundamentais da conservação de massa e de energia da física clássica."
    ],
    "nursingApplication": "O enfermeiro compreende porque a maior queda de pressão arterial ocorre nas arteríolas (vasos de resistência em série prévia) e não no próprio leito capilar em paralelo."
  },
  {
    "id": 4157,
    "topicId": 4,
    "question": "Na avaliação clínica e administração de terapêutica por um enfermeiro, como se manifesta a aplicação prática de 'associação de vasos em paralelo na circulação capilar'?",
    "options": [
      "Implica a medição da pressão arterial apenas com um termómetro de mercúrio colocado na axila sem braçadeira.",
      "Exige a administração de água canalizada pura sem sais diretamente numa veia central em bólus de 1 litro em 10 segundos.",
      "Manifesta-se clinicamente da seguinte forma: O enfermeiro compreende porque a maior queda de pressão arterial ocorre nas arteríolas (vasos de resistência em série prévia) e não no próprio leito capilar em paralelo.",
      "Requer que o doente permaneça de cabeça para baixo durante 24 horas consecutivas para impedir o fluxo de sangue no cérebro."
    ],
    "correctIndex": 2,
    "explanation": "A aplicação de enfermagem para associação de vasos em paralelo na circulação capilar baseia-se no princípio: O enfermeiro compreende porque a maior queda de pressão arterial ocorre nas arteríolas (vasos de resistência em série prévia) e não no próprio leito capilar em paralelo. Esta intervenção é essencial para a segurança hemodinâmica do doente.",
    "distractorAnalysis": [
      "A primeira opção confunde a medição da temperatura axilar com a avaliação hemodinâmica da pressão com esfigmomanómetro.",
      "A segunda opção incorreta provocaria hemólise maciça hipotónica intravascular fatal imediata.",
      "A terceira opção causaria congestão cerebral perigosa, hipertensão intracraniana e asfixia mecânica."
    ],
    "nursingApplication": "O enfermeiro compreende porque a maior queda de pressão arterial ocorre nas arteríolas (vasos de resistência em série prévia) e não no próprio leito capilar em paralelo."
  },
  {
    "id": 4158,
    "topicId": 4,
    "question": "Ao analisar as variáveis físicas que regem 'associação de vasos em paralelo na circulação capilar', qual das seguintes afirmações expressa com rigor a relação hidrodinâmica entre pressão, velocidade e geometria vascular?",
    "options": [
      "A resistência ao fluxo é independente do raio do vaso e depende apenas da fase da Lua e marés oceânicas.",
      "O fluxo turbulento nunca produz ruído nem vibrações mecânicas em nenhuma circunstância biológica.",
      "A velocidade do sangue é máxima nos capilares e mínima na aorta ascendente em repouso.",
      "A relação física correta demonstra que Apesar de cada capilar individual ter um raio minúsculo e resistência altíssima, a associação em paralelo de milhares de milhões de capilares faz a resistência total da rede capilar desabar."
    ],
    "correctIndex": 3,
    "explanation": "A análise hidrodinâmica correta confirma que Apesar de cada capilar individual ter um raio minúsculo e resistência altíssima, a associação em paralelo de milhares de milhões de capilares faz a resistência total da rede capilar desabar. O domínio destas leis permite ao enfermeiro interpretar os fenómenos vasculares com rigor científico.",
    "distractorAnalysis": [
      "A primeira opção é uma aberração pseudocientífica que ignora a Lei de Poiseuille e a dependência em r⁴.",
      "A segunda opção é falsa, pois a turbulência é precisamente a geradora física dos sopros e ruídos de Korotkoff.",
      "A terceira opção inverte totalmente a realidade: a velocidade capilar é a mais lenta do sistema cardiovascular."
    ],
    "nursingApplication": "O enfermeiro compreende porque a maior queda de pressão arterial ocorre nas arteríolas (vasos de resistência em série prévia) e não no próprio leito capilar em paralelo."
  },
  {
    "id": 4159,
    "topicId": 4,
    "question": "Na hidrodinâmica circulatória aplicada à enfermagem, em relação a 'associação de vasos em série na árvore arterial principal', qual é a fundamentação biofísica correta?",
    "options": [
      "na disposição em série ao longo do eixo condutor (aorta -> grandes artérias -> pequenas artérias -> arteríolas), as resistências hidráulicas somam-se linearmente (R_total = R₁ + R₂ + R₃). Qualquer obstrução ou estenose num segmento em série aumenta diretamente a resistência total de todo o órgão irrigado por aquela artéria.",
      "O sangue comporta-se como um fluido puramente invisível e sem atrito que viaja a velocidades próximas da luz no interior dos vasos.",
      "Trata-se de um processo onde a viscosidade do sangue é zero absoluto e a densidade é igual à do ar atmosférico rarefeito.",
      "A pressão hidrostática anula instantaneamente todas as leis de conservação de energia e de massa no sistema vascular."
    ],
    "correctIndex": 0,
    "explanation": "Em biofísica circulatória, associação de vasos em série na árvore arterial principal explica-se pelo facto de que na disposição em série ao longo do eixo condutor (aorta -> grandes artérias -> pequenas artérias -> arteríolas), as resistências hidráulicas somam-se linearmente (R_total = R₁ + R₂ + R₃). Qualquer obstrução ou estenose num segmento em série aumenta diretamente a resistência total de todo o órgão irrigado por aquela artéria.",
    "distractorAnalysis": [
      "A primeira opção incorreta atribui ao sangue propriedades físicas fictícias e velocidades relativísticas impossíveis.",
      "A segunda opção incorreta assume viscosidade nula, o que só ocorreria num superfluido hélio quântico a perto de zero Kelvin.",
      "A terceira opção incorreta ignora os princípios fundamentais da conservação de massa e de energia da física clássica."
    ],
    "nursingApplication": "O enfermeiro vigia doentes com doença arterial periférica obstrutiva dos membros inferiores, onde estenoses em série na artéria femoral reduzem drasticamente o pulso pedioso."
  },
  {
    "id": 4160,
    "topicId": 4,
    "question": "Na avaliação clínica e administração de terapêutica por um enfermeiro, como se manifesta a aplicação prática de 'associação de vasos em série na árvore arterial principal'?",
    "options": [
      "Implica a medição da pressão arterial apenas com um termómetro de mercúrio colocado na axila sem braçadeira.",
      "Manifesta-se clinicamente da seguinte forma: O enfermeiro vigia doentes com doença arterial periférica obstrutiva dos membros inferiores, onde estenoses em série na artéria femoral reduzem drasticamente o pulso pedioso.",
      "Exige a administração de água canalizada pura sem sais diretamente numa veia central em bólus de 1 litro em 10 segundos.",
      "Requer que o doente permaneça de cabeça para baixo durante 24 horas consecutivas para impedir o fluxo de sangue no cérebro."
    ],
    "correctIndex": 1,
    "explanation": "A aplicação de enfermagem para associação de vasos em série na árvore arterial principal baseia-se no princípio: O enfermeiro vigia doentes com doença arterial periférica obstrutiva dos membros inferiores, onde estenoses em série na artéria femoral reduzem drasticamente o pulso pedioso. Esta intervenção é essencial para a segurança hemodinâmica do doente.",
    "distractorAnalysis": [
      "A primeira opção confunde a medição da temperatura axilar com a avaliação hemodinâmica da pressão com esfigmomanómetro.",
      "A segunda opção incorreta provocaria hemólise maciça hipotónica intravascular fatal imediata.",
      "A terceira opção causaria congestão cerebral perigosa, hipertensão intracraniana e asfixia mecânica."
    ],
    "nursingApplication": "O enfermeiro vigia doentes com doença arterial periférica obstrutiva dos membros inferiores, onde estenoses em série na artéria femoral reduzem drasticamente o pulso pedioso."
  },
  {
    "id": 4161,
    "topicId": 4,
    "question": "Ao analisar as variáveis físicas que regem 'associação de vasos em série na árvore arterial principal', qual das seguintes afirmações expressa com rigor a relação hidrodinâmica entre pressão, velocidade e geometria vascular?",
    "options": [
      "A resistência ao fluxo é independente do raio do vaso e depende apenas da fase da Lua e marés oceânicas.",
      "O fluxo turbulento nunca produz ruído nem vibrações mecânicas em nenhuma circunstância biológica.",
      "A relação física correta demonstra que Qualquer obstrução ou estenose num segmento em série aumenta diretamente a resistência total de todo o órgão irrigado por aquela artéria.",
      "A velocidade do sangue é máxima nos capilares e mínima na aorta ascendente em repouso."
    ],
    "correctIndex": 2,
    "explanation": "A análise hidrodinâmica correta confirma que Qualquer obstrução ou estenose num segmento em série aumenta diretamente a resistência total de todo o órgão irrigado por aquela artéria. O domínio destas leis permite ao enfermeiro interpretar os fenómenos vasculares com rigor científico.",
    "distractorAnalysis": [
      "A primeira opção é uma aberração pseudocientífica que ignora a Lei de Poiseuille e a dependência em r⁴.",
      "A segunda opção é falsa, pois a turbulência é precisamente a geradora física dos sopros e ruídos de Korotkoff.",
      "A terceira opção inverte totalmente a realidade: a velocidade capilar é a mais lenta do sistema cardiovascular."
    ],
    "nursingApplication": "O enfermeiro vigia doentes com doença arterial periférica obstrutiva dos membros inferiores, onde estenoses em série na artéria femoral reduzem drasticamente o pulso pedioso."
  },
  {
    "id": 4162,
    "topicId": 4,
    "question": "Na hidrodinâmica circulatória aplicada à enfermagem, em relação a 'vasoconstrição vs vasodilatação arteriolar', qual é a fundamentação biofísica correta?",
    "options": [
      "O sangue comporta-se como um fluido puramente invisível e sem atrito que viaja a velocidades próximas da luz no interior dos vasos.",
      "Trata-se de um processo onde a viscosidade do sangue é zero absoluto e a densidade é igual à do ar atmosférico rarefeito.",
      "A pressão hidrostática anula instantaneamente todas as leis de conservação de energia e de massa no sistema vascular.",
      "as arteríolas contêm uma espessa camada de músculo liso circular inervado pelo sistema nervoso simpático e sensível a mediadores locais. A contração arteriolar reduz o raio vascular, provocando um disparo massivo na Resistência Vascular Periférica Total (RVP) e aumento da pressão arterial média sistémica."
    ],
    "correctIndex": 3,
    "explanation": "Em biofísica circulatória, vasoconstrição vs vasodilatação arteriolar explica-se pelo facto de que as arteríolas contêm uma espessa camada de músculo liso circular inervado pelo sistema nervoso simpático e sensível a mediadores locais. A contração arteriolar reduz o raio vascular, provocando um disparo massivo na Resistência Vascular Periférica Total (RVP) e aumento da pressão arterial média sistémica.",
    "distractorAnalysis": [
      "A primeira opção incorreta atribui ao sangue propriedades físicas fictícias e velocidades relativísticas impossíveis.",
      "A segunda opção incorreta assume viscosidade nula, o que só ocorreria num superfluido hélio quântico a perto de zero Kelvin.",
      "A terceira opção incorreta ignora os princípios fundamentais da conservação de massa e de energia da física clássica."
    ],
    "nursingApplication": "Na administração de aminas vasoativas como a noradrenalina em choque séptico, o enfermeiro monitoriza a subida da PA por vasoconstrição arteriolar sistémica."
  },
  {
    "id": 4163,
    "topicId": 4,
    "question": "Na avaliação clínica e administração de terapêutica por um enfermeiro, como se manifesta a aplicação prática de 'vasoconstrição vs vasodilatação arteriolar'?",
    "options": [
      "Manifesta-se clinicamente da seguinte forma: Na administração de aminas vasoativas como a noradrenalina em choque séptico, o enfermeiro monitoriza a subida da PA por vasoconstrição arteriolar sistémica.",
      "Implica a medição da pressão arterial apenas com um termómetro de mercúrio colocado na axila sem braçadeira.",
      "Exige a administração de água canalizada pura sem sais diretamente numa veia central em bólus de 1 litro em 10 segundos.",
      "Requer que o doente permaneça de cabeça para baixo durante 24 horas consecutivas para impedir o fluxo de sangue no cérebro."
    ],
    "correctIndex": 0,
    "explanation": "A aplicação de enfermagem para vasoconstrição vs vasodilatação arteriolar baseia-se no princípio: Na administração de aminas vasoativas como a noradrenalina em choque séptico, o enfermeiro monitoriza a subida da PA por vasoconstrição arteriolar sistémica. Esta intervenção é essencial para a segurança hemodinâmica do doente.",
    "distractorAnalysis": [
      "A primeira opção confunde a medição da temperatura axilar com a avaliação hemodinâmica da pressão com esfigmomanómetro.",
      "A segunda opção incorreta provocaria hemólise maciça hipotónica intravascular fatal imediata.",
      "A terceira opção causaria congestão cerebral perigosa, hipertensão intracraniana e asfixia mecânica."
    ],
    "nursingApplication": "Na administração de aminas vasoativas como a noradrenalina em choque séptico, o enfermeiro monitoriza a subida da PA por vasoconstrição arteriolar sistémica."
  },
  {
    "id": 4164,
    "topicId": 4,
    "question": "Ao analisar as variáveis físicas que regem 'vasoconstrição vs vasodilatação arteriolar', qual das seguintes afirmações expressa com rigor a relação hidrodinâmica entre pressão, velocidade e geometria vascular?",
    "options": [
      "A resistência ao fluxo é independente do raio do vaso e depende apenas da fase da Lua e marés oceânicas.",
      "A relação física correta demonstra que A contração arteriolar reduz o raio vascular, provocando um disparo massivo na Resistência Vascular Periférica Total (RVP) e aumento da pressão arterial média sistémica.",
      "O fluxo turbulento nunca produz ruído nem vibrações mecânicas em nenhuma circunstância biológica.",
      "A velocidade do sangue é máxima nos capilares e mínima na aorta ascendente em repouso."
    ],
    "correctIndex": 1,
    "explanation": "A análise hidrodinâmica correta confirma que A contração arteriolar reduz o raio vascular, provocando um disparo massivo na Resistência Vascular Periférica Total (RVP) e aumento da pressão arterial média sistémica. O domínio destas leis permite ao enfermeiro interpretar os fenómenos vasculares com rigor científico.",
    "distractorAnalysis": [
      "A primeira opção é uma aberração pseudocientífica que ignora a Lei de Poiseuille e a dependência em r⁴.",
      "A segunda opção é falsa, pois a turbulência é precisamente a geradora física dos sopros e ruídos de Korotkoff.",
      "A terceira opção inverte totalmente a realidade: a velocidade capilar é a mais lenta do sistema cardiovascular."
    ],
    "nursingApplication": "Na administração de aminas vasoativas como a noradrenalina em choque séptico, o enfermeiro monitoriza a subida da PA por vasoconstrição arteriolar sistémica."
  },
  {
    "id": 4165,
    "topicId": 4,
    "question": "Na hidrodinâmica circulatória aplicada à enfermagem, em relação a 'choque distributivo e anafilático com queda da RVP', qual é a fundamentação biofísica correta?",
    "options": [
      "O sangue comporta-se como um fluido puramente invisível e sem atrito que viaja a velocidades próximas da luz no interior dos vasos.",
      "Trata-se de um processo onde a viscosidade do sangue é zero absoluto e a densidade é igual à do ar atmosférico rarefeito.",
      "na anafilaxia grave, a libertação massiva de histamina e mediadores inflamatórios provoca vasodilatação arteriolar generalizada e perda súbita do tónus vascular. A RVP cai para valores extremamente baixos, provocando hipotensão severa e colapso circulatório distributivo com perfusão tecidual inadequada.",
      "A pressão hidrostática anula instantaneamente todas as leis de conservação de energia e de massa no sistema vascular."
    ],
    "correctIndex": 2,
    "explanation": "Em biofísica circulatória, choque distributivo e anafilático com queda da RVP explica-se pelo facto de que na anafilaxia grave, a libertação massiva de histamina e mediadores inflamatórios provoca vasodilatação arteriolar generalizada e perda súbita do tónus vascular. A RVP cai para valores extremamente baixos, provocando hipotensão severa e colapso circulatório distributivo com perfusão tecidual inadequada.",
    "distractorAnalysis": [
      "A primeira opção incorreta atribui ao sangue propriedades físicas fictícias e velocidades relativísticas impossíveis.",
      "A segunda opção incorreta assume viscosidade nula, o que só ocorreria num superfluido hélio quântico a perto de zero Kelvin.",
      "A terceira opção incorreta ignora os princípios fundamentais da conservação de massa e de energia da física clássica."
    ],
    "nursingApplication": "O enfermeiro atua com emergência administrando adrenalina intramuscular precoce (vasto lateral da coxa), revertendo a vasodilatação através da estimulação alfa-1 adrenérgica."
  },
  {
    "id": 4166,
    "topicId": 4,
    "question": "Na avaliação clínica e administração de terapêutica por um enfermeiro, como se manifesta a aplicação prática de 'choque distributivo e anafilático com queda da RVP'?",
    "options": [
      "Implica a medição da pressão arterial apenas com um termómetro de mercúrio colocado na axila sem braçadeira.",
      "Exige a administração de água canalizada pura sem sais diretamente numa veia central em bólus de 1 litro em 10 segundos.",
      "Requer que o doente permaneça de cabeça para baixo durante 24 horas consecutivas para impedir o fluxo de sangue no cérebro.",
      "Manifesta-se clinicamente da seguinte forma: O enfermeiro atua com emergência administrando adrenalina intramuscular precoce (vasto lateral da coxa), revertendo a vasodilatação através da estimulação alfa-1 adrenérgica."
    ],
    "correctIndex": 3,
    "explanation": "A aplicação de enfermagem para choque distributivo e anafilático com queda da RVP baseia-se no princípio: O enfermeiro atua com emergência administrando adrenalina intramuscular precoce (vasto lateral da coxa), revertendo a vasodilatação através da estimulação alfa-1 adrenérgica. Esta intervenção é essencial para a segurança hemodinâmica do doente.",
    "distractorAnalysis": [
      "A primeira opção confunde a medição da temperatura axilar com a avaliação hemodinâmica da pressão com esfigmomanómetro.",
      "A segunda opção incorreta provocaria hemólise maciça hipotónica intravascular fatal imediata.",
      "A terceira opção causaria congestão cerebral perigosa, hipertensão intracraniana e asfixia mecânica."
    ],
    "nursingApplication": "O enfermeiro atua com emergência administrando adrenalina intramuscular precoce (vasto lateral da coxa), revertendo a vasodilatação através da estimulação alfa-1 adrenérgica."
  },
  {
    "id": 4167,
    "topicId": 4,
    "question": "Ao analisar as variáveis físicas que regem 'choque distributivo e anafilático com queda da RVP', qual das seguintes afirmações expressa com rigor a relação hidrodinâmica entre pressão, velocidade e geometria vascular?",
    "options": [
      "A relação física correta demonstra que A RVP cai para valores extremamente baixos, provocando hipotensão severa e colapso circulatório distributivo com perfusão tecidual inadequada.",
      "A resistência ao fluxo é independente do raio do vaso e depende apenas da fase da Lua e marés oceânicas.",
      "O fluxo turbulento nunca produz ruído nem vibrações mecânicas em nenhuma circunstância biológica.",
      "A velocidade do sangue é máxima nos capilares e mínima na aorta ascendente em repouso."
    ],
    "correctIndex": 0,
    "explanation": "A análise hidrodinâmica correta confirma que A RVP cai para valores extremamente baixos, provocando hipotensão severa e colapso circulatório distributivo com perfusão tecidual inadequada. O domínio destas leis permite ao enfermeiro interpretar os fenómenos vasculares com rigor científico.",
    "distractorAnalysis": [
      "A primeira opção é uma aberração pseudocientífica que ignora a Lei de Poiseuille e a dependência em r⁴.",
      "A segunda opção é falsa, pois a turbulência é precisamente a geradora física dos sopros e ruídos de Korotkoff.",
      "A terceira opção inverte totalmente a realidade: a velocidade capilar é a mais lenta do sistema cardiovascular."
    ],
    "nursingApplication": "O enfermeiro atua com emergência administrando adrenalina intramuscular precoce (vasto lateral da coxa), revertendo a vasodilatação através da estimulação alfa-1 adrenérgica."
  },
  {
    "id": 4168,
    "topicId": 4,
    "question": "Na hidrodinâmica circulatória aplicada à enfermagem, em relação a 'pós-carga ventricular esquerda e trabalho cardíaco', qual é a fundamentação biofísica correta?",
    "options": [
      "O sangue comporta-se como um fluido puramente invisível e sem atrito que viaja a velocidades próximas da luz no interior dos vasos.",
      "a pós-carga é a força ou tensão que o ventrículo esquerdo tem de vencer durante a sístole para conseguir ejetar o volume sistólico para a aorta, dependendo criticamente da RVP. Se a RVP estiver cronicamente elevada (como na hipertensão arterial não tratada), o trabalho mecânico do miocárdio aumenta, conduzindo a hipertrofia ventricular concêntrica compensatória.",
      "Trata-se de um processo onde a viscosidade do sangue é zero absoluto e a densidade é igual à do ar atmosférico rarefeito.",
      "A pressão hidrostática anula instantaneamente todas as leis de conservação de energia e de massa no sistema vascular."
    ],
    "correctIndex": 1,
    "explanation": "Em biofísica circulatória, pós-carga ventricular esquerda e trabalho cardíaco explica-se pelo facto de que a pós-carga é a força ou tensão que o ventrículo esquerdo tem de vencer durante a sístole para conseguir ejetar o volume sistólico para a aorta, dependendo criticamente da RVP. Se a RVP estiver cronicamente elevada (como na hipertensão arterial não tratada), o trabalho mecânico do miocárdio aumenta, conduzindo a hipertrofia ventricular concêntrica compensatória.",
    "distractorAnalysis": [
      "A primeira opção incorreta atribui ao sangue propriedades físicas fictícias e velocidades relativísticas impossíveis.",
      "A segunda opção incorreta assume viscosidade nula, o que só ocorreria num superfluido hélio quântico a perto de zero Kelvin.",
      "A terceira opção incorreta ignora os princípios fundamentais da conservação de massa e de energia da física clássica."
    ],
    "nursingApplication": "O enfermeiro educa o utente para o controlo estrito da medicação anti-hipertensora e dieta hipossódica para reduzir a pós-carga e prevenir a falência cardíaca diastólica."
  },
  {
    "id": 4169,
    "topicId": 4,
    "question": "Na avaliação clínica e administração de terapêutica por um enfermeiro, como se manifesta a aplicação prática de 'pós-carga ventricular esquerda e trabalho cardíaco'?",
    "options": [
      "Implica a medição da pressão arterial apenas com um termómetro de mercúrio colocado na axila sem braçadeira.",
      "Exige a administração de água canalizada pura sem sais diretamente numa veia central em bólus de 1 litro em 10 segundos.",
      "Manifesta-se clinicamente da seguinte forma: O enfermeiro educa o utente para o controlo estrito da medicação anti-hipertensora e dieta hipossódica para reduzir a pós-carga e prevenir a falência cardíaca diastólica.",
      "Requer que o doente permaneça de cabeça para baixo durante 24 horas consecutivas para impedir o fluxo de sangue no cérebro."
    ],
    "correctIndex": 2,
    "explanation": "A aplicação de enfermagem para pós-carga ventricular esquerda e trabalho cardíaco baseia-se no princípio: O enfermeiro educa o utente para o controlo estrito da medicação anti-hipertensora e dieta hipossódica para reduzir a pós-carga e prevenir a falência cardíaca diastólica. Esta intervenção é essencial para a segurança hemodinâmica do doente.",
    "distractorAnalysis": [
      "A primeira opção confunde a medição da temperatura axilar com a avaliação hemodinâmica da pressão com esfigmomanómetro.",
      "A segunda opção incorreta provocaria hemólise maciça hipotónica intravascular fatal imediata.",
      "A terceira opção causaria congestão cerebral perigosa, hipertensão intracraniana e asfixia mecânica."
    ],
    "nursingApplication": "O enfermeiro educa o utente para o controlo estrito da medicação anti-hipertensora e dieta hipossódica para reduzir a pós-carga e prevenir a falência cardíaca diastólica."
  },
  {
    "id": 4170,
    "topicId": 4,
    "question": "Ao analisar as variáveis físicas que regem 'pós-carga ventricular esquerda e trabalho cardíaco', qual das seguintes afirmações expressa com rigor a relação hidrodinâmica entre pressão, velocidade e geometria vascular?",
    "options": [
      "A resistência ao fluxo é independente do raio do vaso e depende apenas da fase da Lua e marés oceânicas.",
      "O fluxo turbulento nunca produz ruído nem vibrações mecânicas em nenhuma circunstância biológica.",
      "A velocidade do sangue é máxima nos capilares e mínima na aorta ascendente em repouso.",
      "A relação física correta demonstra que Se a RVP estiver cronicamente elevada (como na hipertensão arterial não tratada), o trabalho mecânico do miocárdio aumenta, conduzindo a hipertrofia ventricular concêntrica compensatória."
    ],
    "correctIndex": 3,
    "explanation": "A análise hidrodinâmica correta confirma que Se a RVP estiver cronicamente elevada (como na hipertensão arterial não tratada), o trabalho mecânico do miocárdio aumenta, conduzindo a hipertrofia ventricular concêntrica compensatória. O domínio destas leis permite ao enfermeiro interpretar os fenómenos vasculares com rigor científico.",
    "distractorAnalysis": [
      "A primeira opção é uma aberração pseudocientífica que ignora a Lei de Poiseuille e a dependência em r⁴.",
      "A segunda opção é falsa, pois a turbulência é precisamente a geradora física dos sopros e ruídos de Korotkoff.",
      "A terceira opção inverte totalmente a realidade: a velocidade capilar é a mais lenta do sistema cardiovascular."
    ],
    "nursingApplication": "O enfermeiro educa o utente para o controlo estrito da medicação anti-hipertensora e dieta hipossódica para reduzir a pós-carga e prevenir a falência cardíaca diastólica."
  },
  {
    "id": 4171,
    "topicId": 4,
    "question": "Na hidrodinâmica circulatória aplicada à enfermagem, em relação a 'fase de insuflação suprassistólica da braçadeira', qual é a fundamentação biofísica correta?",
    "options": [
      "ao insuflar a braçadeira do esfigmomanómetro acima da pressão arterial sistólica do doente (P_cuff > PAS), a artéria braquial é completamente colapsada e ocluída. O fluxo sanguíneo distal cessa completamente e nenhum som é audível ao estetoscópio colocado na fossa cubital (silêncio total).",
      "O sangue comporta-se como um fluido puramente invisível e sem atrito que viaja a velocidades próximas da luz no interior dos vasos.",
      "Trata-se de um processo onde a viscosidade do sangue é zero absoluto e a densidade é igual à do ar atmosférico rarefeito.",
      "A pressão hidrostática anula instantaneamente todas as leis de conservação de energia e de massa no sistema vascular."
    ],
    "correctIndex": 0,
    "explanation": "Em biofísica circulatória, fase de insuflação suprassistólica da braçadeira explica-se pelo facto de que ao insuflar a braçadeira do esfigmomanómetro acima da pressão arterial sistólica do doente (P_cuff > PAS), a artéria braquial é completamente colapsada e ocluída. O fluxo sanguíneo distal cessa completamente e nenhum som é audível ao estetoscópio colocado na fossa cubital (silêncio total).",
    "distractorAnalysis": [
      "A primeira opção incorreta atribui ao sangue propriedades físicas fictícias e velocidades relativísticas impossíveis.",
      "A segunda opção incorreta assume viscosidade nula, o que só ocorreria num superfluido hélio quântico a perto de zero Kelvin.",
      "A terceira opção incorreta ignora os princípios fundamentais da conservação de massa e de energia da física clássica."
    ],
    "nursingApplication": "O enfermeiro insufla a braçadeira cerca de 20 a 30 mmHg acima do desaparecimento do pulso radial palpado, evitando insuflações excessivas que causam dor e espasmo vascular."
  },
  {
    "id": 4172,
    "topicId": 4,
    "question": "Na avaliação clínica e administração de terapêutica por um enfermeiro, como se manifesta a aplicação prática de 'fase de insuflação suprassistólica da braçadeira'?",
    "options": [
      "Implica a medição da pressão arterial apenas com um termómetro de mercúrio colocado na axila sem braçadeira.",
      "Manifesta-se clinicamente da seguinte forma: O enfermeiro insufla a braçadeira cerca de 20 a 30 mmHg acima do desaparecimento do pulso radial palpado, evitando insuflações excessivas que causam dor e espasmo vascular.",
      "Exige a administração de água canalizada pura sem sais diretamente numa veia central em bólus de 1 litro em 10 segundos.",
      "Requer que o doente permaneça de cabeça para baixo durante 24 horas consecutivas para impedir o fluxo de sangue no cérebro."
    ],
    "correctIndex": 1,
    "explanation": "A aplicação de enfermagem para fase de insuflação suprassistólica da braçadeira baseia-se no princípio: O enfermeiro insufla a braçadeira cerca de 20 a 30 mmHg acima do desaparecimento do pulso radial palpado, evitando insuflações excessivas que causam dor e espasmo vascular. Esta intervenção é essencial para a segurança hemodinâmica do doente.",
    "distractorAnalysis": [
      "A primeira opção confunde a medição da temperatura axilar com a avaliação hemodinâmica da pressão com esfigmomanómetro.",
      "A segunda opção incorreta provocaria hemólise maciça hipotónica intravascular fatal imediata.",
      "A terceira opção causaria congestão cerebral perigosa, hipertensão intracraniana e asfixia mecânica."
    ],
    "nursingApplication": "O enfermeiro insufla a braçadeira cerca de 20 a 30 mmHg acima do desaparecimento do pulso radial palpado, evitando insuflações excessivas que causam dor e espasmo vascular."
  },
  {
    "id": 4173,
    "topicId": 4,
    "question": "Ao analisar as variáveis físicas que regem 'fase de insuflação suprassistólica da braçadeira', qual das seguintes afirmações expressa com rigor a relação hidrodinâmica entre pressão, velocidade e geometria vascular?",
    "options": [
      "A resistência ao fluxo é independente do raio do vaso e depende apenas da fase da Lua e marés oceânicas.",
      "O fluxo turbulento nunca produz ruído nem vibrações mecânicas em nenhuma circunstância biológica.",
      "A relação física correta demonstra que O fluxo sanguíneo distal cessa completamente e nenhum som é audível ao estetoscópio colocado na fossa cubital (silêncio total).",
      "A velocidade do sangue é máxima nos capilares e mínima na aorta ascendente em repouso."
    ],
    "correctIndex": 2,
    "explanation": "A análise hidrodinâmica correta confirma que O fluxo sanguíneo distal cessa completamente e nenhum som é audível ao estetoscópio colocado na fossa cubital (silêncio total). O domínio destas leis permite ao enfermeiro interpretar os fenómenos vasculares com rigor científico.",
    "distractorAnalysis": [
      "A primeira opção é uma aberração pseudocientífica que ignora a Lei de Poiseuille e a dependência em r⁴.",
      "A segunda opção é falsa, pois a turbulência é precisamente a geradora física dos sopros e ruídos de Korotkoff.",
      "A terceira opção inverte totalmente a realidade: a velocidade capilar é a mais lenta do sistema cardiovascular."
    ],
    "nursingApplication": "O enfermeiro insufla a braçadeira cerca de 20 a 30 mmHg acima do desaparecimento do pulso radial palpado, evitando insuflações excessivas que causam dor e espasmo vascular."
  },
  {
    "id": 4174,
    "topicId": 4,
    "question": "Na hidrodinâmica circulatória aplicada à enfermagem, em relação a 'fase I de Korotkoff e determinação da Pressão Arterial Sistólica (PAS)', qual é a fundamentação biofísica correta?",
    "options": [
      "O sangue comporta-se como um fluido puramente invisível e sem atrito que viaja a velocidades próximas da luz no interior dos vasos.",
      "Trata-se de um processo onde a viscosidade do sangue é zero absoluto e a densidade é igual à do ar atmosférico rarefeito.",
      "A pressão hidrostática anula instantaneamente todas as leis de conservação de energia e de massa no sistema vascular.",
      "à medida que a pressão da braçadeira desce ligeiramente abaixo da PAS (P_cuff = PAS), o pico de pressão sistólica ventricular consegue forçar a abertura passageira da artéria comprimida. O sangue é ejetado através da fenda estreita a altíssima velocidade sob a forma de jatos turbulentos com Re > 2000, batendo contra a parede vascular distal e gerando o primeiro som nítido e repetitivo (som de Korotkoff Fase I)."
    ],
    "correctIndex": 3,
    "explanation": "Em biofísica circulatória, fase I de Korotkoff e determinação da Pressão Arterial Sistólica (PAS) explica-se pelo facto de que à medida que a pressão da braçadeira desce ligeiramente abaixo da PAS (P_cuff = PAS), o pico de pressão sistólica ventricular consegue forçar a abertura passageira da artéria comprimida. O sangue é ejetado através da fenda estreita a altíssima velocidade sob a forma de jatos turbulentos com Re > 2000, batendo contra a parede vascular distal e gerando o primeiro som nítido e repetitivo (som de Korotkoff Fase I).",
    "distractorAnalysis": [
      "A primeira opção incorreta atribui ao sangue propriedades físicas fictícias e velocidades relativísticas impossíveis.",
      "A segunda opção incorreta assume viscosidade nula, o que só ocorreria num superfluido hélio quântico a perto de zero Kelvin.",
      "A terceira opção incorreta ignora os princípios fundamentais da conservação de massa e de energia da física clássica."
    ],
    "nursingApplication": "O enfermeiro regista a leitura manométrica no exato momento em que ausculta o primeiro som audível da Fase I como a Pressão Arterial Sistólica (PAS)."
  },
  {
    "id": 4175,
    "topicId": 4,
    "question": "Na avaliação clínica e administração de terapêutica por um enfermeiro, como se manifesta a aplicação prática de 'fase I de Korotkoff e determinação da Pressão Arterial Sistólica (PAS)'?",
    "options": [
      "Manifesta-se clinicamente da seguinte forma: O enfermeiro regista a leitura manométrica no exato momento em que ausculta o primeiro som audível da Fase I como a Pressão Arterial Sistólica (PAS).",
      "Implica a medição da pressão arterial apenas com um termómetro de mercúrio colocado na axila sem braçadeira.",
      "Exige a administração de água canalizada pura sem sais diretamente numa veia central em bólus de 1 litro em 10 segundos.",
      "Requer que o doente permaneça de cabeça para baixo durante 24 horas consecutivas para impedir o fluxo de sangue no cérebro."
    ],
    "correctIndex": 0,
    "explanation": "A aplicação de enfermagem para fase I de Korotkoff e determinação da Pressão Arterial Sistólica (PAS) baseia-se no princípio: O enfermeiro regista a leitura manométrica no exato momento em que ausculta o primeiro som audível da Fase I como a Pressão Arterial Sistólica (PAS). Esta intervenção é essencial para a segurança hemodinâmica do doente.",
    "distractorAnalysis": [
      "A primeira opção confunde a medição da temperatura axilar com a avaliação hemodinâmica da pressão com esfigmomanómetro.",
      "A segunda opção incorreta provocaria hemólise maciça hipotónica intravascular fatal imediata.",
      "A terceira opção causaria congestão cerebral perigosa, hipertensão intracraniana e asfixia mecânica."
    ],
    "nursingApplication": "O enfermeiro regista a leitura manométrica no exato momento em que ausculta o primeiro som audível da Fase I como a Pressão Arterial Sistólica (PAS)."
  },
  {
    "id": 4176,
    "topicId": 4,
    "question": "Ao analisar as variáveis físicas que regem 'fase I de Korotkoff e determinação da Pressão Arterial Sistólica (PAS)', qual das seguintes afirmações expressa com rigor a relação hidrodinâmica entre pressão, velocidade e geometria vascular?",
    "options": [
      "A resistência ao fluxo é independente do raio do vaso e depende apenas da fase da Lua e marés oceânicas.",
      "A relação física correta demonstra que O sangue é ejetado através da fenda estreita a altíssima velocidade sob a forma de jatos turbulentos com Re > 2000, batendo contra a parede vascular distal e gerando o primeiro som nítido e repetitivo (som de Korotkoff Fase I).",
      "O fluxo turbulento nunca produz ruído nem vibrações mecânicas em nenhuma circunstância biológica.",
      "A velocidade do sangue é máxima nos capilares e mínima na aorta ascendente em repouso."
    ],
    "correctIndex": 1,
    "explanation": "A análise hidrodinâmica correta confirma que O sangue é ejetado através da fenda estreita a altíssima velocidade sob a forma de jatos turbulentos com Re > 2000, batendo contra a parede vascular distal e gerando o primeiro som nítido e repetitivo (som de Korotkoff Fase I). O domínio destas leis permite ao enfermeiro interpretar os fenómenos vasculares com rigor científico.",
    "distractorAnalysis": [
      "A primeira opção é uma aberração pseudocientífica que ignora a Lei de Poiseuille e a dependência em r⁴.",
      "A segunda opção é falsa, pois a turbulência é precisamente a geradora física dos sopros e ruídos de Korotkoff.",
      "A terceira opção inverte totalmente a realidade: a velocidade capilar é a mais lenta do sistema cardiovascular."
    ],
    "nursingApplication": "O enfermeiro regista a leitura manométrica no exato momento em que ausculta o primeiro som audível da Fase I como a Pressão Arterial Sistólica (PAS)."
  },
  {
    "id": 4177,
    "topicId": 4,
    "question": "Na hidrodinâmica circulatória aplicada à enfermagem, em relação a 'fases intermediárias II, III e IV de Korotkoff', qual é a fundamentação biofísica correta?",
    "options": [
      "O sangue comporta-se como um fluido puramente invisível e sem atrito que viaja a velocidades próximas da luz no interior dos vasos.",
      "Trata-se de um processo onde a viscosidade do sangue é zero absoluto e a densidade é igual à do ar atmosférico rarefeito.",
      "na fase II os sons tornam-se suaves e murmurantes por vórtices contínuos; na fase III tornam-se nítidos e mais altos com a expansão da abertura arterial; na fase IV tornam-se abafados e baços (muffling). Estas transições refletem a alteração geométrica progressiva da secção do vaso e a redução gradual da intensidade da turbulência à medida que a compressão externa diminui.",
      "A pressão hidrostática anula instantaneamente todas as leis de conservação de energia e de massa no sistema vascular."
    ],
    "correctIndex": 2,
    "explanation": "Em biofísica circulatória, fases intermediárias II, III e IV de Korotkoff explica-se pelo facto de que na fase II os sons tornam-se suaves e murmurantes por vórtices contínuos; na fase III tornam-se nítidos e mais altos com a expansão da abertura arterial; na fase IV tornam-se abafados e baços (muffling). Estas transições refletem a alteração geométrica progressiva da secção do vaso e a redução gradual da intensidade da turbulência à medida que a compressão externa diminui.",
    "distractorAnalysis": [
      "A primeira opção incorreta atribui ao sangue propriedades físicas fictícias e velocidades relativísticas impossíveis.",
      "A segunda opção incorreta assume viscosidade nula, o que só ocorreria num superfluido hélio quântico a perto de zero Kelvin.",
      "A terceira opção incorreta ignora os princípios fundamentais da conservação de massa e de energia da física clássica."
    ],
    "nursingApplication": "Em crianças, grávidas ou indivíduos em estado hiperdinâmico, os sons podem ser ouvidos até ao zero: o enfermeiro documenta a Fase IV (abafamento) como referência diastólica nestes grupos."
  },
  {
    "id": 4178,
    "topicId": 4,
    "question": "Na avaliação clínica e administração de terapêutica por um enfermeiro, como se manifesta a aplicação prática de 'fases intermediárias II, III e IV de Korotkoff'?",
    "options": [
      "Implica a medição da pressão arterial apenas com um termómetro de mercúrio colocado na axila sem braçadeira.",
      "Exige a administração de água canalizada pura sem sais diretamente numa veia central em bólus de 1 litro em 10 segundos.",
      "Requer que o doente permaneça de cabeça para baixo durante 24 horas consecutivas para impedir o fluxo de sangue no cérebro.",
      "Manifesta-se clinicamente da seguinte forma: Em crianças, grávidas ou indivíduos em estado hiperdinâmico, os sons podem ser ouvidos até ao zero: o enfermeiro documenta a Fase IV (abafamento) como referência diastólica nestes grupos."
    ],
    "correctIndex": 3,
    "explanation": "A aplicação de enfermagem para fases intermediárias II, III e IV de Korotkoff baseia-se no princípio: Em crianças, grávidas ou indivíduos em estado hiperdinâmico, os sons podem ser ouvidos até ao zero: o enfermeiro documenta a Fase IV (abafamento) como referência diastólica nestes grupos. Esta intervenção é essencial para a segurança hemodinâmica do doente.",
    "distractorAnalysis": [
      "A primeira opção confunde a medição da temperatura axilar com a avaliação hemodinâmica da pressão com esfigmomanómetro.",
      "A segunda opção incorreta provocaria hemólise maciça hipotónica intravascular fatal imediata.",
      "A terceira opção causaria congestão cerebral perigosa, hipertensão intracraniana e asfixia mecânica."
    ],
    "nursingApplication": "Em crianças, grávidas ou indivíduos em estado hiperdinâmico, os sons podem ser ouvidos até ao zero: o enfermeiro documenta a Fase IV (abafamento) como referência diastólica nestes grupos."
  },
  {
    "id": 4179,
    "topicId": 4,
    "question": "Ao analisar as variáveis físicas que regem 'fases intermediárias II, III e IV de Korotkoff', qual das seguintes afirmações expressa com rigor a relação hidrodinâmica entre pressão, velocidade e geometria vascular?",
    "options": [
      "A relação física correta demonstra que Estas transições refletem a alteração geométrica progressiva da secção do vaso e a redução gradual da intensidade da turbulência à medida que a compressão externa diminui.",
      "A resistência ao fluxo é independente do raio do vaso e depende apenas da fase da Lua e marés oceânicas.",
      "O fluxo turbulento nunca produz ruído nem vibrações mecânicas em nenhuma circunstância biológica.",
      "A velocidade do sangue é máxima nos capilares e mínima na aorta ascendente em repouso."
    ],
    "correctIndex": 0,
    "explanation": "A análise hidrodinâmica correta confirma que Estas transições refletem a alteração geométrica progressiva da secção do vaso e a redução gradual da intensidade da turbulência à medida que a compressão externa diminui. O domínio destas leis permite ao enfermeiro interpretar os fenómenos vasculares com rigor científico.",
    "distractorAnalysis": [
      "A primeira opção é uma aberração pseudocientífica que ignora a Lei de Poiseuille e a dependência em r⁴.",
      "A segunda opção é falsa, pois a turbulência é precisamente a geradora física dos sopros e ruídos de Korotkoff.",
      "A terceira opção inverte totalmente a realidade: a velocidade capilar é a mais lenta do sistema cardiovascular."
    ],
    "nursingApplication": "Em crianças, grávidas ou indivíduos em estado hiperdinâmico, os sons podem ser ouvidos até ao zero: o enfermeiro documenta a Fase IV (abafamento) como referência diastólica nestes grupos."
  },
  {
    "id": 4180,
    "topicId": 4,
    "question": "Na hidrodinâmica circulatória aplicada à enfermagem, em relação a 'fase V de Korotkoff e determinação da Pressão Arterial Diastólica (PAD)', qual é a fundamentação biofísica correta?",
    "options": [
      "O sangue comporta-se como um fluido puramente invisível e sem atrito que viaja a velocidades próximas da luz no interior dos vasos.",
      "quando a pressão na braçadeira cai abaixo da pressão diastólica intracelular da artéria (P_cuff < PAD), a artéria permanece totalmente desimpedida e aberta durante todo o ciclo cardíaco. O regime de escoamento laminar suave é inteiramente restaurado (Re < 2000), cessando toda a vibração acústica e ocorrendo o desaparecimento total de qualquer som (silêncio da Fase V).",
      "Trata-se de um processo onde a viscosidade do sangue é zero absoluto e a densidade é igual à do ar atmosférico rarefeito.",
      "A pressão hidrostática anula instantaneamente todas as leis de conservação de energia e de massa no sistema vascular."
    ],
    "correctIndex": 1,
    "explanation": "Em biofísica circulatória, fase V de Korotkoff e determinação da Pressão Arterial Diastólica (PAD) explica-se pelo facto de que quando a pressão na braçadeira cai abaixo da pressão diastólica intracelular da artéria (P_cuff < PAD), a artéria permanece totalmente desimpedida e aberta durante todo o ciclo cardíaco. O regime de escoamento laminar suave é inteiramente restaurado (Re < 2000), cessando toda a vibração acústica e ocorrendo o desaparecimento total de qualquer som (silêncio da Fase V).",
    "distractorAnalysis": [
      "A primeira opção incorreta atribui ao sangue propriedades físicas fictícias e velocidades relativísticas impossíveis.",
      "A segunda opção incorreta assume viscosidade nula, o que só ocorreria num superfluido hélio quântico a perto de zero Kelvin.",
      "A terceira opção incorreta ignora os princípios fundamentais da conservação de massa e de energia da física clássica."
    ],
    "nursingApplication": "O enfermeiro regista a pressão no manómetro no momento do desaparecimento completo dos ruídos (Fase V) como a Pressão Arterial Diastólica (PAD) em adultos."
  },
  {
    "id": 4181,
    "topicId": 4,
    "question": "Na avaliação clínica e administração de terapêutica por um enfermeiro, como se manifesta a aplicação prática de 'fase V de Korotkoff e determinação da Pressão Arterial Diastólica (PAD)'?",
    "options": [
      "Implica a medição da pressão arterial apenas com um termómetro de mercúrio colocado na axila sem braçadeira.",
      "Exige a administração de água canalizada pura sem sais diretamente numa veia central em bólus de 1 litro em 10 segundos.",
      "Manifesta-se clinicamente da seguinte forma: O enfermeiro regista a pressão no manómetro no momento do desaparecimento completo dos ruídos (Fase V) como a Pressão Arterial Diastólica (PAD) em adultos.",
      "Requer que o doente permaneça de cabeça para baixo durante 24 horas consecutivas para impedir o fluxo de sangue no cérebro."
    ],
    "correctIndex": 2,
    "explanation": "A aplicação de enfermagem para fase V de Korotkoff e determinação da Pressão Arterial Diastólica (PAD) baseia-se no princípio: O enfermeiro regista a pressão no manómetro no momento do desaparecimento completo dos ruídos (Fase V) como a Pressão Arterial Diastólica (PAD) em adultos. Esta intervenção é essencial para a segurança hemodinâmica do doente.",
    "distractorAnalysis": [
      "A primeira opção confunde a medição da temperatura axilar com a avaliação hemodinâmica da pressão com esfigmomanómetro.",
      "A segunda opção incorreta provocaria hemólise maciça hipotónica intravascular fatal imediata.",
      "A terceira opção causaria congestão cerebral perigosa, hipertensão intracraniana e asfixia mecânica."
    ],
    "nursingApplication": "O enfermeiro regista a pressão no manómetro no momento do desaparecimento completo dos ruídos (Fase V) como a Pressão Arterial Diastólica (PAD) em adultos."
  },
  {
    "id": 4182,
    "topicId": 4,
    "question": "Ao analisar as variáveis físicas que regem 'fase V de Korotkoff e determinação da Pressão Arterial Diastólica (PAD)', qual das seguintes afirmações expressa com rigor a relação hidrodinâmica entre pressão, velocidade e geometria vascular?",
    "options": [
      "A resistência ao fluxo é independente do raio do vaso e depende apenas da fase da Lua e marés oceânicas.",
      "O fluxo turbulento nunca produz ruído nem vibrações mecânicas em nenhuma circunstância biológica.",
      "A velocidade do sangue é máxima nos capilares e mínima na aorta ascendente em repouso.",
      "A relação física correta demonstra que O regime de escoamento laminar suave é inteiramente restaurado (Re < 2000), cessando toda a vibração acústica e ocorrendo o desaparecimento total de qualquer som (silêncio da Fase V)."
    ],
    "correctIndex": 3,
    "explanation": "A análise hidrodinâmica correta confirma que O regime de escoamento laminar suave é inteiramente restaurado (Re < 2000), cessando toda a vibração acústica e ocorrendo o desaparecimento total de qualquer som (silêncio da Fase V). O domínio destas leis permite ao enfermeiro interpretar os fenómenos vasculares com rigor científico.",
    "distractorAnalysis": [
      "A primeira opção é uma aberração pseudocientífica que ignora a Lei de Poiseuille e a dependência em r⁴.",
      "A segunda opção é falsa, pois a turbulência é precisamente a geradora física dos sopros e ruídos de Korotkoff.",
      "A terceira opção inverte totalmente a realidade: a velocidade capilar é a mais lenta do sistema cardiovascular."
    ],
    "nursingApplication": "O enfermeiro regista a pressão no manómetro no momento do desaparecimento completo dos ruídos (Fase V) como a Pressão Arterial Diastólica (PAD) em adultos."
  },
  {
    "id": 4183,
    "topicId": 4,
    "question": "Na hidrodinâmica circulatória aplicada à enfermagem, em relação a 'gap auscultatório (hiato auscultatório de Korotkoff)', qual é a fundamentação biofísica correta?",
    "options": [
      "desaparecimento transitório e anómalo dos sons de Korotkoff entre as fases I e II com reaparecimento subsequente antes do valor diastólico final em alguns idosos hipertensos. Se o enfermeiro insuflar a braçadeira insuficientemente sem palpação prévia do pulso radial, pode confundir o reaparecimento do som com a verdadeira PAS, subestimando gravemente a pressão sistólica.",
      "O sangue comporta-se como um fluido puramente invisível e sem atrito que viaja a velocidades próximas da luz no interior dos vasos.",
      "Trata-se de um processo onde a viscosidade do sangue é zero absoluto e a densidade é igual à do ar atmosférico rarefeito.",
      "A pressão hidrostática anula instantaneamente todas as leis de conservação de energia e de massa no sistema vascular."
    ],
    "correctIndex": 0,
    "explanation": "Em biofísica circulatória, gap auscultatório (hiato auscultatório de Korotkoff) explica-se pelo facto de que desaparecimento transitório e anómalo dos sons de Korotkoff entre as fases I e II com reaparecimento subsequente antes do valor diastólico final em alguns idosos hipertensos. Se o enfermeiro insuflar a braçadeira insuficientemente sem palpação prévia do pulso radial, pode confundir o reaparecimento do som com a verdadeira PAS, subestimando gravemente a pressão sistólica.",
    "distractorAnalysis": [
      "A primeira opção incorreta atribui ao sangue propriedades físicas fictícias e velocidades relativísticas impossíveis.",
      "A segunda opção incorreta assume viscosidade nula, o que só ocorreria num superfluido hélio quântico a perto de zero Kelvin.",
      "A terceira opção incorreta ignora os princípios fundamentais da conservação de massa e de energia da física clássica."
    ],
    "nursingApplication": "O enfermeiro executa sempre o método palpatório prévio antes do método auscultatório para identificar a verdadeira PAS e não ser enganado pelo hiato auscultatório."
  },
  {
    "id": 4184,
    "topicId": 4,
    "question": "Na avaliação clínica e administração de terapêutica por um enfermeiro, como se manifesta a aplicação prática de 'gap auscultatório (hiato auscultatório de Korotkoff)'?",
    "options": [
      "Implica a medição da pressão arterial apenas com um termómetro de mercúrio colocado na axila sem braçadeira.",
      "Manifesta-se clinicamente da seguinte forma: O enfermeiro executa sempre o método palpatório prévio antes do método auscultatório para identificar a verdadeira PAS e não ser enganado pelo hiato auscultatório.",
      "Exige a administração de água canalizada pura sem sais diretamente numa veia central em bólus de 1 litro em 10 segundos.",
      "Requer que o doente permaneça de cabeça para baixo durante 24 horas consecutivas para impedir o fluxo de sangue no cérebro."
    ],
    "correctIndex": 1,
    "explanation": "A aplicação de enfermagem para gap auscultatório (hiato auscultatório de Korotkoff) baseia-se no princípio: O enfermeiro executa sempre o método palpatório prévio antes do método auscultatório para identificar a verdadeira PAS e não ser enganado pelo hiato auscultatório. Esta intervenção é essencial para a segurança hemodinâmica do doente.",
    "distractorAnalysis": [
      "A primeira opção confunde a medição da temperatura axilar com a avaliação hemodinâmica da pressão com esfigmomanómetro.",
      "A segunda opção incorreta provocaria hemólise maciça hipotónica intravascular fatal imediata.",
      "A terceira opção causaria congestão cerebral perigosa, hipertensão intracraniana e asfixia mecânica."
    ],
    "nursingApplication": "O enfermeiro executa sempre o método palpatório prévio antes do método auscultatório para identificar a verdadeira PAS e não ser enganado pelo hiato auscultatório."
  },
  {
    "id": 4185,
    "topicId": 4,
    "question": "Ao analisar as variáveis físicas que regem 'gap auscultatório (hiato auscultatório de Korotkoff)', qual das seguintes afirmações expressa com rigor a relação hidrodinâmica entre pressão, velocidade e geometria vascular?",
    "options": [
      "A resistência ao fluxo é independente do raio do vaso e depende apenas da fase da Lua e marés oceânicas.",
      "O fluxo turbulento nunca produz ruído nem vibrações mecânicas em nenhuma circunstância biológica.",
      "A relação física correta demonstra que Se o enfermeiro insuflar a braçadeira insuficientemente sem palpação prévia do pulso radial, pode confundir o reaparecimento do som com a verdadeira PAS, subestimando gravemente a pressão sistólica.",
      "A velocidade do sangue é máxima nos capilares e mínima na aorta ascendente em repouso."
    ],
    "correctIndex": 2,
    "explanation": "A análise hidrodinâmica correta confirma que Se o enfermeiro insuflar a braçadeira insuficientemente sem palpação prévia do pulso radial, pode confundir o reaparecimento do som com a verdadeira PAS, subestimando gravemente a pressão sistólica. O domínio destas leis permite ao enfermeiro interpretar os fenómenos vasculares com rigor científico.",
    "distractorAnalysis": [
      "A primeira opção é uma aberração pseudocientífica que ignora a Lei de Poiseuille e a dependência em r⁴.",
      "A segunda opção é falsa, pois a turbulência é precisamente a geradora física dos sopros e ruídos de Korotkoff.",
      "A terceira opção inverte totalmente a realidade: a velocidade capilar é a mais lenta do sistema cardiovascular."
    ],
    "nursingApplication": "O enfermeiro executa sempre o método palpatório prévio antes do método auscultatório para identificar a verdadeira PAS e não ser enganado pelo hiato auscultatório."
  },
  {
    "id": 4186,
    "topicId": 4,
    "question": "Na hidrodinâmica circulatória aplicada à enfermagem, em relação a 'efeito Venturi e variação de pressão na estenose vascular', qual é a fundamentação biofísica correta?",
    "options": [
      "O sangue comporta-se como um fluido puramente invisível e sem atrito que viaja a velocidades próximas da luz no interior dos vasos.",
      "Trata-se de um processo onde a viscosidade do sangue é zero absoluto e a densidade é igual à do ar atmosférico rarefeito.",
      "A pressão hidrostática anula instantaneamente todas as leis de conservação de energia e de massa no sistema vascular.",
      "pelo Teorema de Bernoulli e princípio da continuidade, à medida que a área de secção estreita (estenose), a velocidade do fluido aumenta e a pressão estática lateral diminui. Se a estenose for muito severa, a queda de pressão lateral pode favorecer o colapso transitório das paredes elásticas do vaso a jusante."
    ],
    "correctIndex": 3,
    "explanation": "Em biofísica circulatória, efeito Venturi e variação de pressão na estenose vascular explica-se pelo facto de que pelo Teorema de Bernoulli e princípio da continuidade, à medida que a área de secção estreita (estenose), a velocidade do fluido aumenta e a pressão estática lateral diminui. Se a estenose for muito severa, a queda de pressão lateral pode favorecer o colapso transitório das paredes elásticas do vaso a jusante.",
    "distractorAnalysis": [
      "A primeira opção incorreta atribui ao sangue propriedades físicas fictícias e velocidades relativísticas impossíveis.",
      "A segunda opção incorreta assume viscosidade nula, o que só ocorreria num superfluido hélio quântico a perto de zero Kelvin.",
      "A terceira opção incorreta ignora os princípios fundamentais da conservação de massa e de energia da física clássica."
    ],
    "nursingApplication": "O enfermeiro compreende a física das placas de ateroma e sabe que placas instáveis sofrem forças de cisalhamento extremas que podem provocar rutura e trombose aguda."
  },
  {
    "id": 4187,
    "topicId": 4,
    "question": "Na avaliação clínica e administração de terapêutica por um enfermeiro, como se manifesta a aplicação prática de 'efeito Venturi e variação de pressão na estenose vascular'?",
    "options": [
      "Manifesta-se clinicamente da seguinte forma: O enfermeiro compreende a física das placas de ateroma e sabe que placas instáveis sofrem forças de cisalhamento extremas que podem provocar rutura e trombose aguda.",
      "Implica a medição da pressão arterial apenas com um termómetro de mercúrio colocado na axila sem braçadeira.",
      "Exige a administração de água canalizada pura sem sais diretamente numa veia central em bólus de 1 litro em 10 segundos.",
      "Requer que o doente permaneça de cabeça para baixo durante 24 horas consecutivas para impedir o fluxo de sangue no cérebro."
    ],
    "correctIndex": 0,
    "explanation": "A aplicação de enfermagem para efeito Venturi e variação de pressão na estenose vascular baseia-se no princípio: O enfermeiro compreende a física das placas de ateroma e sabe que placas instáveis sofrem forças de cisalhamento extremas que podem provocar rutura e trombose aguda. Esta intervenção é essencial para a segurança hemodinâmica do doente.",
    "distractorAnalysis": [
      "A primeira opção confunde a medição da temperatura axilar com a avaliação hemodinâmica da pressão com esfigmomanómetro.",
      "A segunda opção incorreta provocaria hemólise maciça hipotónica intravascular fatal imediata.",
      "A terceira opção causaria congestão cerebral perigosa, hipertensão intracraniana e asfixia mecânica."
    ],
    "nursingApplication": "O enfermeiro compreende a física das placas de ateroma e sabe que placas instáveis sofrem forças de cisalhamento extremas que podem provocar rutura e trombose aguda."
  },
  {
    "id": 4188,
    "topicId": 4,
    "question": "Ao analisar as variáveis físicas que regem 'efeito Venturi e variação de pressão na estenose vascular', qual das seguintes afirmações expressa com rigor a relação hidrodinâmica entre pressão, velocidade e geometria vascular?",
    "options": [
      "A resistência ao fluxo é independente do raio do vaso e depende apenas da fase da Lua e marés oceânicas.",
      "A relação física correta demonstra que Se a estenose for muito severa, a queda de pressão lateral pode favorecer o colapso transitório das paredes elásticas do vaso a jusante.",
      "O fluxo turbulento nunca produz ruído nem vibrações mecânicas em nenhuma circunstância biológica.",
      "A velocidade do sangue é máxima nos capilares e mínima na aorta ascendente em repouso."
    ],
    "correctIndex": 1,
    "explanation": "A análise hidrodinâmica correta confirma que Se a estenose for muito severa, a queda de pressão lateral pode favorecer o colapso transitório das paredes elásticas do vaso a jusante. O domínio destas leis permite ao enfermeiro interpretar os fenómenos vasculares com rigor científico.",
    "distractorAnalysis": [
      "A primeira opção é uma aberração pseudocientífica que ignora a Lei de Poiseuille e a dependência em r⁴.",
      "A segunda opção é falsa, pois a turbulência é precisamente a geradora física dos sopros e ruídos de Korotkoff.",
      "A terceira opção inverte totalmente a realidade: a velocidade capilar é a mais lenta do sistema cardiovascular."
    ],
    "nursingApplication": "O enfermeiro compreende a física das placas de ateroma e sabe que placas instáveis sofrem forças de cisalhamento extremas que podem provocar rutura e trombose aguda."
  },
  {
    "id": 4189,
    "topicId": 4,
    "question": "Na hidrodinâmica circulatória aplicada à enfermagem, em relação a 'auscultação de sopro carotídeo em doentes vasculares', qual é a fundamentação biofísica correta?",
    "options": [
      "O sangue comporta-se como um fluido puramente invisível e sem atrito que viaja a velocidades próximas da luz no interior dos vasos.",
      "Trata-se de um processo onde a viscosidade do sangue é zero absoluto e a densidade é igual à do ar atmosférico rarefeito.",
      "uma placa aterosclerótica que estreita o lúmen da artéria carótida interna gera aceleração local do jato sanguíneo e um Número de Reynolds muito acima de 3000 pós-estenose. Isto produz um sopro sistólico rude audível com a campânula do estetoscópio colocada suavemente ao longo do trajeto da carótida no pescoço.",
      "A pressão hidrostática anula instantaneamente todas as leis de conservação de energia e de massa no sistema vascular."
    ],
    "correctIndex": 2,
    "explanation": "Em biofísica circulatória, auscultação de sopro carotídeo em doentes vasculares explica-se pelo facto de que uma placa aterosclerótica que estreita o lúmen da artéria carótida interna gera aceleração local do jato sanguíneo e um Número de Reynolds muito acima de 3000 pós-estenose. Isto produz um sopro sistólico rude audível com a campânula do estetoscópio colocada suavemente ao longo do trajeto da carótida no pescoço.",
    "distractorAnalysis": [
      "A primeira opção incorreta atribui ao sangue propriedades físicas fictícias e velocidades relativísticas impossíveis.",
      "A segunda opção incorreta assume viscosidade nula, o que só ocorreria num superfluido hélio quântico a perto de zero Kelvin.",
      "A terceira opção incorreta ignora os princípios fundamentais da conservação de massa e de energia da física clássica."
    ],
    "nursingApplication": "O enfermeiro ausculta as carótidas durante a avaliação vascular e reporta a presença de sopros carotídeos, que sinalizam risco aumentado de Acidente Vascular Cerebral isquémico."
  },
  {
    "id": 4190,
    "topicId": 4,
    "question": "Na avaliação clínica e administração de terapêutica por um enfermeiro, como se manifesta a aplicação prática de 'auscultação de sopro carotídeo em doentes vasculares'?",
    "options": [
      "Implica a medição da pressão arterial apenas com um termómetro de mercúrio colocado na axila sem braçadeira.",
      "Exige a administração de água canalizada pura sem sais diretamente numa veia central em bólus de 1 litro em 10 segundos.",
      "Requer que o doente permaneça de cabeça para baixo durante 24 horas consecutivas para impedir o fluxo de sangue no cérebro.",
      "Manifesta-se clinicamente da seguinte forma: O enfermeiro ausculta as carótidas durante a avaliação vascular e reporta a presença de sopros carotídeos, que sinalizam risco aumentado de Acidente Vascular Cerebral isquémico."
    ],
    "correctIndex": 3,
    "explanation": "A aplicação de enfermagem para auscultação de sopro carotídeo em doentes vasculares baseia-se no princípio: O enfermeiro ausculta as carótidas durante a avaliação vascular e reporta a presença de sopros carotídeos, que sinalizam risco aumentado de Acidente Vascular Cerebral isquémico. Esta intervenção é essencial para a segurança hemodinâmica do doente.",
    "distractorAnalysis": [
      "A primeira opção confunde a medição da temperatura axilar com a avaliação hemodinâmica da pressão com esfigmomanómetro.",
      "A segunda opção incorreta provocaria hemólise maciça hipotónica intravascular fatal imediata.",
      "A terceira opção causaria congestão cerebral perigosa, hipertensão intracraniana e asfixia mecânica."
    ],
    "nursingApplication": "O enfermeiro ausculta as carótidas durante a avaliação vascular e reporta a presença de sopros carotídeos, que sinalizam risco aumentado de Acidente Vascular Cerebral isquémico."
  },
  {
    "id": 4191,
    "topicId": 4,
    "question": "Ao analisar as variáveis físicas que regem 'auscultação de sopro carotídeo em doentes vasculares', qual das seguintes afirmações expressa com rigor a relação hidrodinâmica entre pressão, velocidade e geometria vascular?",
    "options": [
      "A relação física correta demonstra que Isto produz um sopro sistólico rude audível com a campânula do estetoscópio colocada suavemente ao longo do trajeto da carótida no pescoço.",
      "A resistência ao fluxo é independente do raio do vaso e depende apenas da fase da Lua e marés oceânicas.",
      "O fluxo turbulento nunca produz ruído nem vibrações mecânicas em nenhuma circunstância biológica.",
      "A velocidade do sangue é máxima nos capilares e mínima na aorta ascendente em repouso."
    ],
    "correctIndex": 0,
    "explanation": "A análise hidrodinâmica correta confirma que Isto produz um sopro sistólico rude audível com a campânula do estetoscópio colocada suavemente ao longo do trajeto da carótida no pescoço. O domínio destas leis permite ao enfermeiro interpretar os fenómenos vasculares com rigor científico.",
    "distractorAnalysis": [
      "A primeira opção é uma aberração pseudocientífica que ignora a Lei de Poiseuille e a dependência em r⁴.",
      "A segunda opção é falsa, pois a turbulência é precisamente a geradora física dos sopros e ruídos de Korotkoff.",
      "A terceira opção inverte totalmente a realidade: a velocidade capilar é a mais lenta do sistema cardiovascular."
    ],
    "nursingApplication": "O enfermeiro ausculta as carótidas durante a avaliação vascular e reporta a presença de sopros carotídeos, que sinalizam risco aumentado de Acidente Vascular Cerebral isquémico."
  },
  {
    "id": 4192,
    "topicId": 4,
    "question": "Na hidrodinâmica circulatória aplicada à enfermagem, em relação a 'fístula arteriovenosa (FAV) para hemodiálise e deteção de frémito (thrill)', qual é a fundamentação biofísica correta?",
    "options": [
      "O sangue comporta-se como um fluido puramente invisível e sem atrito que viaja a velocidades próximas da luz no interior dos vasos.",
      "a anastomose cirúrgica direta entre uma artéria de alta pressão e uma veia superficial de baixa resistência cria um fluxo turbulento contínuo de altíssimo débito. A turbulência intensa produz ondas sonoras audíveis contínuas (sopro de maquinaria à auscultação) e vibrações mecânicas de baixa frequência palpáveis com a mão (frémito ou thrill).",
      "Trata-se de um processo onde a viscosidade do sangue é zero absoluto e a densidade é igual à do ar atmosférico rarefeito.",
      "A pressão hidrostática anula instantaneamente todas as leis de conservação de energia e de massa no sistema vascular."
    ],
    "correctIndex": 1,
    "explanation": "Em biofísica circulatória, fístula arteriovenosa (FAV) para hemodiálise e deteção de frémito (thrill) explica-se pelo facto de que a anastomose cirúrgica direta entre uma artéria de alta pressão e uma veia superficial de baixa resistência cria um fluxo turbulento contínuo de altíssimo débito. A turbulência intensa produz ondas sonoras audíveis contínuas (sopro de maquinaria à auscultação) e vibrações mecânicas de baixa frequência palpáveis com a mão (frémito ou thrill).",
    "distractorAnalysis": [
      "A primeira opção incorreta atribui ao sangue propriedades físicas fictícias e velocidades relativísticas impossíveis.",
      "A segunda opção incorreta assume viscosidade nula, o que só ocorreria num superfluido hélio quântico a perto de zero Kelvin.",
      "A terceira opção incorreta ignora os princípios fundamentais da conservação de massa e de energia da física clássica."
    ],
    "nursingApplication": "O enfermeiro de nefrologia palpa obrigatoriamente a presença de frémito ('thrill') ao longo de toda a fístula antes de cada sessão de hemodiálise: a ausência de frémito indica trombose aguda da fístula!"
  },
  {
    "id": 4193,
    "topicId": 4,
    "question": "Na avaliação clínica e administração de terapêutica por um enfermeiro, como se manifesta a aplicação prática de 'fístula arteriovenosa (FAV) para hemodiálise e deteção de frémito (thrill)'?",
    "options": [
      "Implica a medição da pressão arterial apenas com um termómetro de mercúrio colocado na axila sem braçadeira.",
      "Exige a administração de água canalizada pura sem sais diretamente numa veia central em bólus de 1 litro em 10 segundos.",
      "Manifesta-se clinicamente da seguinte forma: O enfermeiro de nefrologia palpa obrigatoriamente a presença de frémito ('thrill') ao longo de toda a fístula antes de cada sessão de hemodiálise: a ausência de frémito indica trombose aguda da fístula!",
      "Requer que o doente permaneça de cabeça para baixo durante 24 horas consecutivas para impedir o fluxo de sangue no cérebro."
    ],
    "correctIndex": 2,
    "explanation": "A aplicação de enfermagem para fístula arteriovenosa (FAV) para hemodiálise e deteção de frémito (thrill) baseia-se no princípio: O enfermeiro de nefrologia palpa obrigatoriamente a presença de frémito ('thrill') ao longo de toda a fístula antes de cada sessão de hemodiálise: a ausência de frémito indica trombose aguda da fístula! Esta intervenção é essencial para a segurança hemodinâmica do doente.",
    "distractorAnalysis": [
      "A primeira opção confunde a medição da temperatura axilar com a avaliação hemodinâmica da pressão com esfigmomanómetro.",
      "A segunda opção incorreta provocaria hemólise maciça hipotónica intravascular fatal imediata.",
      "A terceira opção causaria congestão cerebral perigosa, hipertensão intracraniana e asfixia mecânica."
    ],
    "nursingApplication": "O enfermeiro de nefrologia palpa obrigatoriamente a presença de frémito ('thrill') ao longo de toda a fístula antes de cada sessão de hemodiálise: a ausência de frémito indica trombose aguda da fístula!"
  },
  {
    "id": 4194,
    "topicId": 4,
    "question": "Ao analisar as variáveis físicas que regem 'fístula arteriovenosa (FAV) para hemodiálise e deteção de frémito (thrill)', qual das seguintes afirmações expressa com rigor a relação hidrodinâmica entre pressão, velocidade e geometria vascular?",
    "options": [
      "A resistência ao fluxo é independente do raio do vaso e depende apenas da fase da Lua e marés oceânicas.",
      "O fluxo turbulento nunca produz ruído nem vibrações mecânicas em nenhuma circunstância biológica.",
      "A velocidade do sangue é máxima nos capilares e mínima na aorta ascendente em repouso.",
      "A relação física correta demonstra que A turbulência intensa produz ondas sonoras audíveis contínuas (sopro de maquinaria à auscultação) e vibrações mecânicas de baixa frequência palpáveis com a mão (frémito ou thrill)."
    ],
    "correctIndex": 3,
    "explanation": "A análise hidrodinâmica correta confirma que A turbulência intensa produz ondas sonoras audíveis contínuas (sopro de maquinaria à auscultação) e vibrações mecânicas de baixa frequência palpáveis com a mão (frémito ou thrill). O domínio destas leis permite ao enfermeiro interpretar os fenómenos vasculares com rigor científico.",
    "distractorAnalysis": [
      "A primeira opção é uma aberração pseudocientífica que ignora a Lei de Poiseuille e a dependência em r⁴.",
      "A segunda opção é falsa, pois a turbulência é precisamente a geradora física dos sopros e ruídos de Korotkoff.",
      "A terceira opção inverte totalmente a realidade: a velocidade capilar é a mais lenta do sistema cardiovascular."
    ],
    "nursingApplication": "O enfermeiro de nefrologia palpa obrigatoriamente a presença de frémito ('thrill') ao longo de toda a fístula antes de cada sessão de hemodiálise: a ausência de frémito indica trombose aguda da fístula!"
  },
  {
    "id": 4195,
    "topicId": 4,
    "question": "Na hidrodinâmica circulatória aplicada à enfermagem, em relação a 'estenose da válvula aórtica e hipertrofia ventricular concêntrica', qual é a fundamentação biofísica correta?",
    "options": [
      "o estreitamento da área do orifício da válvula aórtica de 3-4 cm² para menos de 1 cm² obriga o ventrículo esquerdo a gerar gradientes de pressão transvalvulares de 50 a 100 mmHg. O jato de ejeção atinge velocidades superiores a 4 m/s com turbulência extrema pós-valvular, produzindo um sopro sistólico ejetivo em crescendo-decrescendo que irradia para as carótidas.",
      "O sangue comporta-se como um fluido puramente invisível e sem atrito que viaja a velocidades próximas da luz no interior dos vasos.",
      "Trata-se de um processo onde a viscosidade do sangue é zero absoluto e a densidade é igual à do ar atmosférico rarefeito.",
      "A pressão hidrostática anula instantaneamente todas as leis de conservação de energia e de massa no sistema vascular."
    ],
    "correctIndex": 0,
    "explanation": "Em biofísica circulatória, estenose da válvula aórtica e hipertrofia ventricular concêntrica explica-se pelo facto de que o estreitamento da área do orifício da válvula aórtica de 3-4 cm² para menos de 1 cm² obriga o ventrículo esquerdo a gerar gradientes de pressão transvalvulares de 50 a 100 mmHg. O jato de ejeção atinge velocidades superiores a 4 m/s com turbulência extrema pós-valvular, produzindo um sopro sistólico ejetivo em crescendo-decrescendo que irradia para as carótidas.",
    "distractorAnalysis": [
      "A primeira opção incorreta atribui ao sangue propriedades físicas fictícias e velocidades relativísticas impossíveis.",
      "A segunda opção incorreta assume viscosidade nula, o que só ocorreria num superfluido hélio quântico a perto de zero Kelvin.",
      "A terceira opção incorreta ignora os princípios fundamentais da conservação de massa e de energia da física clássica."
    ],
    "nursingApplication": "O enfermeiro monitoriza queixas de síncope aos esforços, dispneia e angina em idosos com estenose aórtica severa, alertando para a necessidade de evitar vasodilatadores agressivos."
  },
  {
    "id": 4196,
    "topicId": 4,
    "question": "Na avaliação clínica e administração de terapêutica por um enfermeiro, como se manifesta a aplicação prática de 'estenose da válvula aórtica e hipertrofia ventricular concêntrica'?",
    "options": [
      "Implica a medição da pressão arterial apenas com um termómetro de mercúrio colocado na axila sem braçadeira.",
      "Manifesta-se clinicamente da seguinte forma: O enfermeiro monitoriza queixas de síncope aos esforços, dispneia e angina em idosos com estenose aórtica severa, alertando para a necessidade de evitar vasodilatadores agressivos.",
      "Exige a administração de água canalizada pura sem sais diretamente numa veia central em bólus de 1 litro em 10 segundos.",
      "Requer que o doente permaneça de cabeça para baixo durante 24 horas consecutivas para impedir o fluxo de sangue no cérebro."
    ],
    "correctIndex": 1,
    "explanation": "A aplicação de enfermagem para estenose da válvula aórtica e hipertrofia ventricular concêntrica baseia-se no princípio: O enfermeiro monitoriza queixas de síncope aos esforços, dispneia e angina em idosos com estenose aórtica severa, alertando para a necessidade de evitar vasodilatadores agressivos. Esta intervenção é essencial para a segurança hemodinâmica do doente.",
    "distractorAnalysis": [
      "A primeira opção confunde a medição da temperatura axilar com a avaliação hemodinâmica da pressão com esfigmomanómetro.",
      "A segunda opção incorreta provocaria hemólise maciça hipotónica intravascular fatal imediata.",
      "A terceira opção causaria congestão cerebral perigosa, hipertensão intracraniana e asfixia mecânica."
    ],
    "nursingApplication": "O enfermeiro monitoriza queixas de síncope aos esforços, dispneia e angina em idosos com estenose aórtica severa, alertando para a necessidade de evitar vasodilatadores agressivos."
  },
  {
    "id": 4197,
    "topicId": 4,
    "question": "Ao analisar as variáveis físicas que regem 'estenose da válvula aórtica e hipertrofia ventricular concêntrica', qual das seguintes afirmações expressa com rigor a relação hidrodinâmica entre pressão, velocidade e geometria vascular?",
    "options": [
      "A resistência ao fluxo é independente do raio do vaso e depende apenas da fase da Lua e marés oceânicas.",
      "O fluxo turbulento nunca produz ruído nem vibrações mecânicas em nenhuma circunstância biológica.",
      "A relação física correta demonstra que O jato de ejeção atinge velocidades superiores a 4 m/s com turbulência extrema pós-valvular, produzindo um sopro sistólico ejetivo em crescendo-decrescendo que irradia para as carótidas.",
      "A velocidade do sangue é máxima nos capilares e mínima na aorta ascendente em repouso."
    ],
    "correctIndex": 2,
    "explanation": "A análise hidrodinâmica correta confirma que O jato de ejeção atinge velocidades superiores a 4 m/s com turbulência extrema pós-valvular, produzindo um sopro sistólico ejetivo em crescendo-decrescendo que irradia para as carótidas. O domínio destas leis permite ao enfermeiro interpretar os fenómenos vasculares com rigor científico.",
    "distractorAnalysis": [
      "A primeira opção é uma aberração pseudocientífica que ignora a Lei de Poiseuille e a dependência em r⁴.",
      "A segunda opção é falsa, pois a turbulência é precisamente a geradora física dos sopros e ruídos de Korotkoff.",
      "A terceira opção inverte totalmente a realidade: a velocidade capilar é a mais lenta do sistema cardiovascular."
    ],
    "nursingApplication": "O enfermeiro monitoriza queixas de síncope aos esforços, dispneia e angina em idosos com estenose aórtica severa, alertando para a necessidade de evitar vasodilatadores agressivos."
  },
  {
    "id": 4198,
    "topicId": 4,
    "question": "Na hidrodinâmica circulatória aplicada à enfermagem, em relação a 'turbulência e predisposição à agregação plaquetária', qual é a fundamentação biofísica correta?",
    "options": [
      "O sangue comporta-se como um fluido puramente invisível e sem atrito que viaja a velocidades próximas da luz no interior dos vasos.",
      "Trata-se de um processo onde a viscosidade do sangue é zero absoluto e a densidade é igual à do ar atmosférico rarefeito.",
      "A pressão hidrostática anula instantaneamente todas as leis de conservação de energia e de massa no sistema vascular.",
      "as elevadas forças de cisalhamento no ponto de estenose alteram a conformação do Fator de von Willebrand (vWF), ativando as glicoproteínas Ib e IIb/IIIa das plaquetas. Isto desencadeia adesão e agregação plaquetária mecânica rápida sobre a placa aterosclerótica mesmo sem exposição total de colagénio subendotelial."
    ],
    "correctIndex": 3,
    "explanation": "Em biofísica circulatória, turbulência e predisposição à agregação plaquetária explica-se pelo facto de que as elevadas forças de cisalhamento no ponto de estenose alteram a conformação do Fator de von Willebrand (vWF), ativando as glicoproteínas Ib e IIb/IIIa das plaquetas. Isto desencadeia adesão e agregação plaquetária mecânica rápida sobre a placa aterosclerótica mesmo sem exposição total de colagénio subendotelial.",
    "distractorAnalysis": [
      "A primeira opção incorreta atribui ao sangue propriedades físicas fictícias e velocidades relativísticas impossíveis.",
      "A segunda opção incorreta assume viscosidade nula, o que só ocorreria num superfluido hélio quântico a perto de zero Kelvin.",
      "A terceira opção incorreta ignora os princípios fundamentais da conservação de massa e de energia da física clássica."
    ],
    "nursingApplication": "O enfermeiro assegura a administração pontual e rigorosa de antiagregantes plaquetários prescritos (como aspirina e clopidogrel) para prevenir a oclusão trombótica aguda pós-estenose."
  },
  {
    "id": 4199,
    "topicId": 4,
    "question": "Na avaliação clínica e administração de terapêutica por um enfermeiro, como se manifesta a aplicação prática de 'turbulência e predisposição à agregação plaquetária'?",
    "options": [
      "Manifesta-se clinicamente da seguinte forma: O enfermeiro assegura a administração pontual e rigorosa de antiagregantes plaquetários prescritos (como aspirina e clopidogrel) para prevenir a oclusão trombótica aguda pós-estenose.",
      "Implica a medição da pressão arterial apenas com um termómetro de mercúrio colocado na axila sem braçadeira.",
      "Exige a administração de água canalizada pura sem sais diretamente numa veia central em bólus de 1 litro em 10 segundos.",
      "Requer que o doente permaneça de cabeça para baixo durante 24 horas consecutivas para impedir o fluxo de sangue no cérebro."
    ],
    "correctIndex": 0,
    "explanation": "A aplicação de enfermagem para turbulência e predisposição à agregação plaquetária baseia-se no princípio: O enfermeiro assegura a administração pontual e rigorosa de antiagregantes plaquetários prescritos (como aspirina e clopidogrel) para prevenir a oclusão trombótica aguda pós-estenose. Esta intervenção é essencial para a segurança hemodinâmica do doente.",
    "distractorAnalysis": [
      "A primeira opção confunde a medição da temperatura axilar com a avaliação hemodinâmica da pressão com esfigmomanómetro.",
      "A segunda opção incorreta provocaria hemólise maciça hipotónica intravascular fatal imediata.",
      "A terceira opção causaria congestão cerebral perigosa, hipertensão intracraniana e asfixia mecânica."
    ],
    "nursingApplication": "O enfermeiro assegura a administração pontual e rigorosa de antiagregantes plaquetários prescritos (como aspirina e clopidogrel) para prevenir a oclusão trombótica aguda pós-estenose."
  },
  {
    "id": 4200,
    "topicId": 4,
    "question": "Ao analisar as variáveis físicas que regem 'turbulência e predisposição à agregação plaquetária', qual das seguintes afirmações expressa com rigor a relação hidrodinâmica entre pressão, velocidade e geometria vascular?",
    "options": [
      "A resistência ao fluxo é independente do raio do vaso e depende apenas da fase da Lua e marés oceânicas.",
      "A relação física correta demonstra que Isto desencadeia adesão e agregação plaquetária mecânica rápida sobre a placa aterosclerótica mesmo sem exposição total de colagénio subendotelial.",
      "O fluxo turbulento nunca produz ruído nem vibrações mecânicas em nenhuma circunstância biológica.",
      "A velocidade do sangue é máxima nos capilares e mínima na aorta ascendente em repouso."
    ],
    "correctIndex": 1,
    "explanation": "A análise hidrodinâmica correta confirma que Isto desencadeia adesão e agregação plaquetária mecânica rápida sobre a placa aterosclerótica mesmo sem exposição total de colagénio subendotelial. O domínio destas leis permite ao enfermeiro interpretar os fenómenos vasculares com rigor científico.",
    "distractorAnalysis": [
      "A primeira opção é uma aberração pseudocientífica que ignora a Lei de Poiseuille e a dependência em r⁴.",
      "A segunda opção é falsa, pois a turbulência é precisamente a geradora física dos sopros e ruídos de Korotkoff.",
      "A terceira opção inverte totalmente a realidade: a velocidade capilar é a mais lenta do sistema cardiovascular."
    ],
    "nursingApplication": "O enfermeiro assegura a administração pontual e rigorosa de antiagregantes plaquetários prescritos (como aspirina e clopidogrel) para prevenir a oclusão trombótica aguda pós-estenose."
  }
];
