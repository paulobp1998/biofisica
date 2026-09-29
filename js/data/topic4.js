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
      "Q = A / v (razão entre a área da secção transversal e a velocidade média), expressando a massa volúmica linear de líquido acumulada por unidade de comprimento.",
      "Q = A · v (produto da área da secção transversal pela velocidade média), expressando o volume de fluido que atravessa o vaso por unidade de tempo.",
      "Q = v / A (razão entre a velocidade média e a área da secção transversal), expressando a aceleração centrífuga do fluido junto ao endotélio vascular periférico.",
      "Q = A · v · ΔP (produto da área pela velocidade e pelo gradiente pressórico), expressando a potência hidráulica dissipada pelo atrito viscoso contra a parede."
    ],
    "correctIndex": 1,
    "explanation": "O caudal volumétrico (Q) mede o volume de fluido que passa através de uma determinada secção transversal por unidade de tempo: Q = ΔV / Δt = (A · Δx) / Δt = A · v. No Sistema Internacional a unidade é o m³/s, mas na fisiologia e enfermagem utiliza-se rotineiramente L/min (débito cardíaco normal em repouso: ~5 L/min) ou mL/h (em bombas infusoras).",
    "distractorAnalysis": [
      "Está incorreta: inverte a relação dimensional com a velocidade, produzindo unidades de m²/(m/s) = m·s, que não correspondem a um caudal volumétrico.",
      "Está incorreta: divide a velocidade pela área da secção transversal em vez de as multiplicar, produzindo uma unidade de (m/s)/m² = 1/(m·s).",
      "Está incorreta: multiplica o caudal pelo gradiente de pressão, o que corresponde dimensionalmente à potência mecânica dissipada e não ao débito volumétrico."
    ],
    "nursingApplication": "Na programação de bombas infusoras de perfusão contínua em enfermagem, converter prescrições de mg/kg/min em caudais volumétricos de mL/h na bomba baseia-se diretamente na conservação do caudal de fluidoterapia."
  },
  {
    "id": 4002,
    "topicId": 4,
    "question": "A Equação da Continuidade para fluidos incompressíveis em regime permanente (A₁ · v₁ = A₂ · v₂ = constante) estabelece uma lei de conservação essencial. Como se aplica esta equação ao sistema cardiovascular humano?",
    "options": [
      "Como cada capilar individual possui um calibre microscópico reduzido, a velocidade do sangue nos capilares atinge o valor mais elevado de toda a grande circulação sistémica.",
      "Como a aorta apresenta a maior secção transversal combinada do organismo, a velocidade do sangue na sua raiz é significativamente menor do que nos capilares periféricos em repouso.",
      "Como o débito é constante em cada nível vascular, a velocidade média do sangue é inversamente proporcional à área transversal total combinada de cada leito microvascular.",
      "Como a pressão arterial decresce continuamente das artérias para as veias, o débito volumétrico total diminui progressivamente em direção às veias cavas para evitar hipervolemia."
    ],
    "correctIndex": 2,
    "explanation": "Pelo princípio da continuidade de um fluido incompressível em circuito fechado, o caudal total Q é constante em cada secção do circuito: Q = A_total · v_média. Embora um capilar individual seja microscópico, existem cerca de 10 a 40 mil milhões de capilares em paralelo, perfazendo uma área transversal combinada colossal (~2500 a 4000 cm²), comparada com apenas ~3 a 5 cm² na raiz da aorta. Por isso, a velocidade média é máxima na aorta (~30 a 40 cm/s) e mínima nos capilares (~0,03 cm/s).",
    "distractorAnalysis": [
      "Está incorreta: confunde o calibre de um único vaso capilar com a secção transversal total combinada de todos os milhões de capilares em paralelo (~500 a 1000 vezes maior que a aorta).",
      "Está incorreta: a aorta tem a menor área de secção transversal combinada (~3-5 cm²), pelo que a velocidade do sangue na aorta é a máxima da circulação sistémica (~30 a 50 cm/s).",
      "Está incorreta: pela conservação da massa num sistema fechado em circuito fechado, o débito volumétrico total que regressa ao coração direito é igual ao que sai do esquerdo."
    ],
    "nursingApplication": "A velocidade ultralenta do fluxo nos capilares sistémicos (~0,3 mm/s) é um primor biofísico: proporciona o tempo de trânsito necessário (~1 a 2 segundos) para que o oxigénio, glicose e fármacos administrados pelo enfermeiro se difundam eficazmente do sangue para os tecidos periféricos."
  },
  {
    "id": 4003,
    "topicId": 4,
    "question": "O Teorema de Bernoulli para o escoamento estacionário de um fluido ideal não viscoso expressa a conservação da energia mecânica total: P + 1/2 ρ·v² + ρ·g·h = constante. O que prevê o 'Efeito Venturi' decorrente deste teorema quando o sangue atravessa uma estenose vascular parcial (estreitamento localizado da luz de uma artéria)?",
    "options": [
      "No estreitamento vascular localizado, a velocidade do sangue (v) diminui por atrito e a pressão lateral exercida na parede (P) aumenta fortemente por compressão hidráulica.",
      "No estreitamento vascular localizado, a velocidade do sangue (v) permanece rigorosamente constante e a pressão lateral (P) duplica para compensar a resistência periférica local.",
      "No estreitamento vascular localizado, tanto a velocidade do sangue (v) como a pressão lateral exercida na parede (P) se elevam em proporção direta à perda de diâmetro luminal.",
      "No estreitamento vascular localizado, a velocidade do sangue (v) aumenta por continuidade e a pressão lateral exercida na parede (P) diminui por conservação de energia."
    ],
    "correctIndex": 3,
    "explanation": "Pela equação da continuidade, se a área da secção diminui no estreitamento (A₂ < A₁), a velocidade do fluido tem de aumentar (v₂ > v₁). Pelo Teorema de Bernoulli (P₁ + 1/2 ρ·v₁² = P₂ + 1/2 ρ·v₂²), para manter a soma constante ao mesmo nível gravitacional, um aumento da energia cinética por unidade de volume (1/2 ρ·v²) obriga a uma QUEDA proporcional da pressão estática lateral (P₂ < P₁). Este é o Efeito Venturi.",
    "distractorAnalysis": [
      "Está incorreta: segundo a equação da continuidade a velocidade tem de aumentar no estreitamento (v = Q/A); pelo teorema de Bernoulli, o aumento de energia cinética reduz a pressão lateral.",
      "Está incorreta: para manter a continuidade do fluxo, a velocidade não pode permanecer inalterada na secção estenosada, tendo de aumentar na proporção inversa da redução da área.",
      "Está incorreta: viola a lei da conservação da energia mecânica de Bernoulli, segundo a qual o aumento de energia cinética (1/2 ρ v²) ocorre à custa da pressão hidrostática lateral (P)."
    ],
    "nursingApplication": "O Efeito Venturi tem dupla importância clínica: 1) Nas máscaras de Venturi para oxigenoterapia em doentes com DPOC, o oxigénio a alta velocidade num bocal estreito gera subpressão lateral que arrasta uma proporção fixa e controlada de ar ambiente, garantindo uma FiO₂ precisa (24% a 50%); 2) Em artérias com placas ateroscleróticas, a queda de pressão lateral no estreitamento pode colapsar a parede vascular, facilitando a oclusão trombótica aguda."
  },
  {
    "id": 4004,
    "topicId": 4,
    "question": "A distinção entre 'Regime Laminar' e 'Regime Turbulento' é crítica na hemodinâmica cardiovascular. Qual das seguintes afirmações descreve com precisão o escoamento laminar?",
    "options": [
      "O sangue desloca-se em lâminas cilíndricas concêntricas coaxiais com perfil parabólico de velocidades (máxima no eixo central e nula na parede), com escoamento silencioso e estável.",
      "O sangue desloca-se em remoinhos caóticos transversais de alta energia com perfil plano de velocidades, gerando vibrações parietais sonoras audíveis na auscultação com estetoscópio.",
      "O sangue desloca-se com velocidade estritamente uniforme em toda a secção transversal do vaso, cessando qualquer atrito viscoso entre as camadas fluidas adjacentes em movimento.",
      "O sangue desloca-se com velocidade máxima junto ao endotélio vascular por repulsão eletrostática e velocidade mínima no centro do lúmen devido à agregação dos glóbulos vermelhos."
    ],
    "correctIndex": 0,
    "explanation": "No regime laminar, o fluido escoa em linhas de corrente suaves e concêntricas. Devido à viscosidade e às forças de coesão molecular com a parede vascular (condição de não-deslizamento), a camada em contacto com o endotélio tem velocidade zero; a velocidade cresce parabolicamente até atingir o valor máximo no centro axial do lúmen. Não há mistura transversal caótica de fluido, o que torna o fluxo completamente inaudível e minimiza a perda de carga por atrito.",
    "distractorAnalysis": [
      "Está incorreta: descreve as características físicas do regime turbulento, que dissipa energia sob a forma de vórtices e ruído audível na auscultação estetoschópica.",
      "Está incorreta: o perfil parabólico de velocidades decorre precisamente do atrito viscoso entre lâminas adjacentes e da adesão das moléculas fluidas ao endotélio (velocidade zero na parede).",
      "Está incorreta: devido à condição de não-deslizamento hidrodinâmico na interface sólida endotelial, a velocidade do fluido junto à parede é nula e máxima no centro do tubo cilíndrico."
    ],
    "nursingApplication": "Em condições fisiológicas normais em repouso, a grande maioria da árvore vascular opera em regime laminar silencioso. É por essa razão que, ao colocar o estetoscópio sobre uma artéria braquial ou carótida saudável, o enfermeiro ausculta silêncio absoluto. O aparecimento de ruídos ou sopros vasculares sinaliza a transição patológica para escoamento turbulento."
  },
  {
    "id": 4005,
    "topicId": 4,
    "question": "O Número de Reynolds (Re) é um parâmetro adimensional que prevê se o escoamento de um fluido será laminar ou turbulento. A sua fórmula clássica é Re = (ρ · v · d) / η. O que indica cada uma destas grandezas físicas?",
    "options": [
      "ρ é a pressão hidrostática intracardíaca, v o volume ventricular telediastólico, d a distância ao miocárdio e η a constante dielétrica do plasma sanguíneo oxigenado.",
      "ρ é a massa volúmica do sangue, v a velocidade média de escoamento, d o diâmetro interno do vaso e η o coeficiente de viscosidade dinâmica do sangue circulante.",
      "ρ é a resistividade elétrica vascular, v a velocidade da onda de pulso aórtica, d a densidade eritrocitária e η o raio capilar médio medido por ultrassonografia com Doppler.",
      "ρ é o coeficiente de tensão superficial plasmática, v o gradiente venoso, d a espessura da camada íntima e η o módulo de elasticidade de Young da parede arterial elástica."
    ],
    "correctIndex": 1,
    "explanation": "O Número de Reynolds traduz a razão entre as forças de inércia e as forças viscosas de atrito interno: Re = (forças inerciais) / (forças viscosas) = (ρ · v · d) / η. No sistema circulatório humano: para Re < 2000 o fluxo é estavelmente laminar; para Re > 2000 a 3000 o fluxo torna-se instável e predominantemente turbulento com formação de vórtices acústicos.",
    "distractorAnalysis": [
      "Está incorreta: confunde a densidade (ρ) com a pressão hidrostática e a viscosidade dinâmica (η) com a permissividade dielétrica elétrica do meio biológico.",
      "Está incorreta: substitui as grandezas hidrodinâmicas do número de Reynolds por propriedades eletrofisiológicas da parede vascular e da velocidade da onda de pulso arterial.",
      "Está incorreta: atribui a ρ a tensão superficial e a η propriedades elastoméricas da parede arterial, descaracterizando o balanço clássico entre forças de inércia e forças viscosas."
    ],
    "nursingApplication": "Pela fórmula de Reynolds, um aumento na velocidade v ou no diâmetro d eleva Re em direção à turbulência. Da mesma forma, uma queda acentuada na viscosidade η (como na hemodiluição agressiva pós-trauma) faz disparar o número de Reynolds, favorecendo o aparecimento de sopros sistólicos funcionais audíveis pelo enfermeiro."
  },
  {
    "id": 4006,
    "topicId": 4,
    "question": "Em qual das seguintes condições clínicas o Número de Reynolds se eleva marcadamente, predispondo ao surgimento de fluxo turbulento e sopros cardíacos funcionais audíveis sem lesão valvular orgânica prévia?",
    "options": [
      "Policitemia vera, na qual o aumento acentuado do hematócrito eleva a viscosidade (η) para valores extremos, desestabilizando as linhas de corrente laminares por excesso de atrito interno.",
      "Hipotermia acidental profunda, na qual a descida da temperatura corporal reduz a velocidade circulatória e diminui o número de Reynolds para valores próximos do limite crítico de transição.",
      "Anemia grave, na qual a redução acentuada do hematócrito diminui a viscosidade (η) e o débito cardíaco compensatório eleva a velocidade (v), facilitando o aparecimento de turbulência.",
      "Desidratação hipernatrémica grave, na qual a hemoconcentração plasmática aumenta a densidade e suprime a formação de quaisquer vórtices acústicos audíveis nos grandes vasos arteriais."
    ],
    "correctIndex": 2,
    "explanation": "Na anemia severa ocorrem dois fatores simultâneos que catapultam o Número de Reynolds: 1) Como a concentração de eritrócitos é muito baixa, a viscosidade dinâmica do sangue (η no denominador) cai para valores próximos da água (~1,5 cP em vez dos normais 3 a 4 cP); 2) Para compensar a menor capacidade de transporte de oxigénio, o coração aumenta o débito cardíaco e a velocidade do sangue (v no numerador). Com v alto e η baixo, Re ultrapassa facilmente 2000, gerando turbulência audível (sopro anémico funcional na auscultação precordial).",
    "distractorAnalysis": [
      "Está incorreta: a policitemia aumenta fortemente a viscosidade sanguínea (η), o que figura no denominador do número de Reynolds (Re = ρ v d / η), tendendo a estabilizar o regime laminar.",
      "Está incorreta: a hipotermia reduz o débito cardíaco (v diminui) e aumenta a viscosidade do sangue (η aumenta), o que reduz drasticamente o número de Reynolds em vez de o elevar.",
      "Está incorreta: a hemoconcentração por desidratação eleva a viscosidade de forma marcante, reduzindo o valor de Reynolds e diminuindo a probabilidade de turbulência vascular."
    ],
    "nursingApplication": "Num doente oncológico ou hemorrágico admitido com queixas de cansaço extremo e um novo sopro sistólico na auscultação, o enfermeiro correlaciona a física do sopro com a perda de viscosidade da anemia antes de assumir erroneamente uma patologia valvular primária, priorizando a colheita de hemograma urgente e vigilância de sinais de hipoperfusão."
  },
  {
    "id": 4007,
    "topicId": 4,
    "question": "A Lei de Poiseuille (ou Hagen-Poiseuille) rege o escoamento laminar de fluidos viscosos em tubos cilíndricos retos: Q = (π · r⁴ · ΔP) / (8 · η · L). Qual é o significado biomecânico da dependência do caudal em relação à QUARTA POTÊNCIA do raio do vaso (r⁴)?",
    "options": [
      "O caudal varia de forma linear e proporcional ao raio do vaso, de modo que duplicar o raio vascular duplica exatamente o débito de perfusão tecidual para o mesmo gradiente pressórico.",
      "A resistência ao escoamento depende essencialmente do comprimento do vaso, tendo as variações do raio vascular um impacto desprezável na regulação da resistência periférica arteriolar.",
      "Duplicar o raio vascular reduz a área transversal para metade por compensação elástica, quadruplicando a perda de carga hidrostática necessária para impulsionar o fluido circulante.",
      "Pequenas alterações no raio vascular provocam variações gigantescas no caudal e na resistência, pois duplicar o raio vascular eleva o débito em 16 vezes para o mesmo gradiente de pressão."
    ],
    "correctIndex": 3,
    "explanation": "A dependência em r⁴ na Lei de Poiseuille é o princípio mais potente da regulação hemodinâmica: a resistência vascular é dada por R = (8 · η · L) / (π · r⁴). Como o expoente é 4: uma redução de apenas 16% no raio do vaso duplica a resistência vascular; uma redução de 50% no raio (r/2) aumenta a resistência em 16 vezes e reduz o fluxo a 1/16 do valor original para o mesmo gradiente de pressão ΔP.",
    "distractorAnalysis": [
      "Está incorreta: confunde a dependência de quarta potência (r⁴) com uma relação de proporcionalidade linear direta (r¹), ignorando a amplificação geométrica da Lei de Poiseuille.",
      "Está incorreta: embora o comprimento influencie a resistência linearmente (R ∝ L), o raio tem impacto dominante de quarta potência (R ∝ 1/r⁴), sendo o principal mecanismo de controlo vascular.",
      "Está incorreta: duplicar o raio de um vaso cilíndrico quadruplica a sua área transversal (A = π r²) e reduz a resistência hidráulica em 16 vezes, aumentando o débito e não a perda de carga."
    ],
    "nursingApplication": "A Lei de Poiseuille é o fundamento da ação dos fármacos vasoativos administrados pelo enfermeiro: vasodilatadores potentes como a nitroglicerina ou nitroprussiato produzem aumentos milimétricos no diâmetro arteriolar que, graças ao fator r⁴, reduzem de imediato a pós-carga cardíaca e a pressão arterial de doentes em crise hipertensiva aguda."
  },
  {
    "id": 4008,
    "topicId": 4,
    "question": "Dois cateteres venosos periféricos curtos de teflon possuem o mesmo comprimento, mas o cateter A (calibre 14G) possui o dobro do raio interno do cateter B (calibre 20G). Mantendo-se a mesma pressão de infusão hidrostática, qual é o débito de soro que o cateter A proporciona em relação ao cateter B de acordo com a Lei de Poiseuille?",
    "options": [
      "16 vezes superior no cateter 14G, visto que pela Lei de Poiseuille o caudal é proporcional à quarta potência do raio interno do conduto para o mesmo comprimento e desnível hidrostático.",
      "2 vezes superior no cateter 14G, visto que o débito volumétrico varia linearmente com o diâmetro luminal do dispositivo de acesso vascular de acordo com a conservação da massa fluida.",
      "4 vezes superior no cateter 14G, visto que o caudal de infusão depende exclusivamente da área da secção transversal circular (proporcional ao quadrado do raio) segundo a equação básica.",
      "8 vezes superior no cateter 14G, visto que a resistência hidráulica diminui com a terceira potência do diâmetro interno devido ao atrito de cisalhamento contra a parede polimérica lisa."
    ],
    "correctIndex": 0,
    "explanation": "Pela Lei de Poiseuille, o caudal é diretamente proporcional à quarta potência do raio interno do tubo: Q ∝ r⁴. Se o cateter A tem o dobro do raio do cateter B (r_A = 2 · r_B), o caudal de infusão sob a mesma diferença de pressão será: Q_A = (2)⁴ · Q_B = 16 · Q_B. Ou seja, o cateter A permite infundir fluidos a uma taxa dezasseis vezes mais rápida do que o cateter B.",
    "distractorAnalysis": [
      "Está incorreta: assume erradamente uma dependência linear direta do fluxo com o raio (2¹ = 2), ignorando o efeito cumulativo das camadas concêntricas de cisalhamento de Poiseuille.",
      "Está incorreta: assume que o fluxo varia apenas com a área transversal (2² = 4), esquecendo que o perfil parabólico de velocidades confere uma dependência em r⁴ e não em r².",
      "Está incorreta: propõe uma dependência cúbica (2³ = 8), contrariando a derivação matemática e experimental da Lei de Poiseuille para escoamento laminar em tubos cilíndricos (r⁴)."
    ],
    "nursingApplication": "Na reanimação de um doente em choque hemorrágico grave após politraumatismo, o enfermeiro cateteriza com urgência duas veias periféricas com cateteres curtos e calibrosos de 14G ou 16G (laranja/cinzento), e NUNCA um cateter fino de 20G ou 22G, permitindo a infusão ultra-rápida de 1 litro de cristalóides ou concentrado de eritrócitos em escassos minutos."
  },
  {
    "id": 4009,
    "topicId": 4,
    "question": "Pela Lei de Poiseuille, a resistência ao escoamento é proporcional ao comprimento do tubo (R ∝ L). Como se reflete este princípio na escolha entre um cateter venoso periférico curto de 16G (comprimento ~3 cm) e um cateter venoso central de inserção periférica longo (PICC de 16G, comprimento ~50 a 60 cm) para reanimação volémica rápida?",
    "options": [
      "O PICC longo proporciona débitos de infusão muito mais rápidos por canalizar o líquido diretamente para a veia cava superior sob pressão negativa torácica, superando a perda de carga linear.",
      "O cateter venoso periférico curto oferece uma resistência hidráulica muito menor (R ∝ L), permitindo taxas de perfusão volémica consideravelmente superiores às obtidas através do PICC longo.",
      "Ambos os cateteres oferecem rigorosamente a mesma resistência ao escoamento porque a resistência hidrodinâmica depende unicamente do calibre interno e independe por completo do comprimento.",
      "O cateter periférico curto gera maior resistência ao fluxo devido à menor complacência das veias periféricas da prega do cotovelo quando comparadas com as veias centrais de grande calibre."
    ],
    "correctIndex": 1,
    "explanation": "A resistência hidrodinâmica é diretamente proporcional ao comprimento do lúmen: R = (8 · η · L) / (π · r⁴). Um cateter PICC com 50 cm de comprimento apresenta uma resistência ao fluxo aproximadamente 16 a 20 vezes maior do que um cateter venoso periférico de 3 cm com o mesmo diâmetro interno. Consequentemente, para a mesma pressão, a taxa máxima de perfusão por gravidade é drasticamente inferior no cateter longo.",
    "distractorAnalysis": [
      "Está incorreta: o comprimento do PICC (~50-60 cm) é cerca de 15 a 20 vezes superior ao de um cateter periférico (~3 cm), aumentando a resistência em 15 a 20 vezes para o mesmo calibre interno.",
      "Está incorreta: a Lei de Poiseuille demonstra inequivocamente que a resistência hidráulica é diretamente proporcional ao comprimento do tubo condutor (R = 8 η L / π r⁴).",
      "Está incorreta: a resistência do cateter propriamente dito depende exclusivamente da sua geometria interna (L e r) e da viscosidade do líquido, sendo o cateter curto o mais favorável à ressuscitação."
    ],
    "nursingApplication": "Erro clínico clássico: tentar ressuscitar um doente chocado com expansão volémica rápida através de um cateter central longo (CVC ou PICC) de lúmen fino. O enfermeiro sabe que acessos venosos centrais compridos destinam-se a aminas vasoativas, quimioterapia e nutrição parentérica, sendo os acessos periféricos curtos os verdadeiros reis da reanimação volémica rápida."
  },
  {
    "id": 4010,
    "topicId": 4,
    "question": "Qual é o principal segmento anatómico da árvore circulatória responsável pela maior queda de pressão hidrostática (gradiente de pressão de ~85 mmHg para ~35 mmHg) e pelo controlo primordial da 'Resistência Vascular Periférica Total' (RPT)?",
    "options": [
      "As grandes artérias elásticas como a aorta, devido ao elevado volume sistólico ejetado que dissipa a maior parte da energia cinética ventricular sob a forma de amortecimento elastomérico.",
      "A rede capilar extensa, devido ao seu diâmetro microscópico individual que gera a maior queda de pressão média de todo o leito vascular apesar da enorme área de secção transversal somada.",
      "As arteríolas, devido à sua espessa camada de músculo liso circunferencial ricamente inervada, que modula ativamente o raio vascular e controla a resistência pré-capilar periférica total.",
      "As veias cavas e grandes veias sistémicas, devido à sua baixa complacência de parede que exige pressões elevadas de retorno venoso para conduzir o sangue de volta à aurícula direita."
    ],
    "correctIndex": 2,
    "explanation": "As arteríolas são denominadas os 'vasos de resistência' por excelência do sistema cardiovascular: embora a sua área transversal combinada seja maior que a das grandes artérias, cada arteríola possui um lúmen estreito altamente controlável por tónus simpático e fatores locais endoteliais (óxido nítrico, endotelina). Devido à 4.ª potência do raio na Lei de Poiseuille, é nelas que se concentra a maior resistência hidráulica, amortecendo a pulsatilidade sistólica e protegendo a frágil rede capilar a jusante contra ruturas por alta pressão.",
    "distractorAnalysis": [
      "Está incorreta: as grandes artérias têm raio muito amplo e oferecem resistência mínima ao escoamento, funcionando como vasos condutores com queda de pressão insignificante (~2-3 mmHg).",
      "Está incorreta: embora cada capilar individual seja estreito, existem milhares de milhões em paralelo, conferindo uma secção transversal combinada imensa que reduz a resistência vascular total do leito capilar.",
      "Está incorreta: o sistema venoso possui grande complacência e opera em níveis de pressão hidrostática muito reduzidos (~2 a 8 mmHg), não participando no controlo ativo da resistência periférica."
    ],
    "nursingApplication": "O conhecimento das arteríolas como epicentro da resistência vascular é fundamental na titulação de infusões contínuas de noradrenalina em choque séptico: o agonismo alfa-1 adrenérgico induz vasoconstrição arteriolar generalizada, elevando a RPT e restabelecendo a Pressão Arterial Média (PAM > 65 mmHg) para perfundir órgãos vitais."
  },
  {
    "id": 4011,
    "topicId": 4,
    "question": "O sangue humano é classificado em mecânica dos fluidos como um 'Fluido Não-Newtoniano'. O que significa esta propriedade reológica específica?",
    "options": [
      "A sua viscosidade dinâmica mantém-se rigorosamente invariável perante quaisquer variações de velocidade, dependendo unicamente da densidade mássica do plasma e da pressão arterial média.",
      "O sangue comporta-se como um fluido puramente viscoelástico linear com relaxamento instantâneo, mantendo uma viscosidade independente das forças de corte endoteliais em repouso.",
      "A sua viscosidade cresce de forma diretamente proporcional à velocidade de circulação nos grandes vasos condutores, tornando o sangue quase sólido durante o pico sistólico ventricular.",
      "A sua viscosidade aparente não é constante, variando ativamente em função da taxa de deformação por cisalhamento, do calibre do vaso sanguíneo e do estado de agregação dos eritrócitos."
    ],
    "correctIndex": 3,
    "explanation": "Um fluido Newtoniano (como a água líquida, álcool ou plasma acelular puro) mantém a sua viscosidade rigorosamente constante para uma dada temperatura, independentemente da velocidade ou tensão de cisalhamento aplicada. O sangue total, sendo uma suspensão celular concentrada (40-45% de eritrócitos), é NÃO-NEWTONIANO (comportamento pseudoplástico com tixotropia): a baixas taxas de cisalhamento as hemácias agregam-se em pilhas de moedas ('rouleaux'), elevando a viscosidade; a altas taxas de cisalhamento, os agregados desfazem-se e as hemácias deformam-se e alinham-se com o fluxo, diminuindo a viscosidade aparente.",
    "distractorAnalysis": [
      "Está incorreta: descreve o comportamento de um fluido newtoniano puro (como a água ou o soro fisiológico), cuja viscosidade independe da taxa de cisalhamento ou do calibre do tubo.",
      "Está incorreta: a viscosidade do sangue não é independente do cisalhamento, sofrendo variações reológicas marcadas devido à deformabilidade e agregação dos eritrócitos.",
      "Está incorreta: o sangue exibe comportamento de pseudoplasticidade (shear-thinning), no qual a viscosidade aparente diminui com o aumento da taxa de cisalhamento e velocidade."
    ],
    "nursingApplication": "Em estados de choque ou hipotensão profunda com estase microvascular (velocidade de fluxo quase nula nos capilares e vénulas), a viscosidade do sangue dispara devido à formação de rouleaux eritrocitários e agregados plaquetários ('sludging'). O enfermeiro previne a trombose microvascular administrando fluidoterapia vigorosa e heparina profilática precocemente."
  },
  {
    "id": 4012,
    "topicId": 4,
    "question": "O que descreve o 'Efeito Fåhræus-Lindqvist' na microcirculação de vasos com diâmetro inferior a cerca de 300 micrómetros (como pequenas artérias e arteríolas)?",
    "options": [
      "A viscosidade aparente do sangue diminui em vasos com diâmetro inferior a 300 μm devido à migração axial das hemácias para o centro do lúmen e formação de uma camada marginal de plasma.",
      "A viscosidade aparente do sangue aumenta de forma exponencial nos microvasos porque as hemácias se aglomeram em rouleaux junto à parede endotelial, bloqueando a perfusão capilar terminal.",
      "O hematócrito capilar eleva-se para o dobro do hematócrito sistémico devido à retenção seletiva de glóbulos vermelhos nos esfíncteres pré-capilares para otimizar as trocas gasosas locais.",
      "A velocidade de escoamento nos pequenos vasos anula-se periodicamente para permitir a absorção ativa de glicose e eletrólitos através das fenestrações endoteliais da barreira capilar."
    ],
    "correctIndex": 0,
    "explanation": "Descoberto por Robin Fåhræus e Johan Torsten Lindqvist em 1931: em vasos estreitos (<300 μm), as forças hidrodinâmicas empurram os eritrócitos para a linha central de máxima velocidade (migração axial). Junto ao endotélio vascular forma-se uma camada acelular constituída exclusivamente por plasma de baixa viscosidade (~1,2 cP). Como as maiores tensões de cisalhamento ocorrem junto à parede, esta película periférica de plasma atua como um 'lubrificante' hidrodinâmico, reduzindo a viscosidade aparente do sangue e poupando esforço ao coração.",
    "distractorAnalysis": [
      "Está incorreta: a formação de aglomerados rouleaux ocorre sob taxas de cisalhamento muito baixas e é desfeita nos microvasos estreitos, onde a viscosidade efetiva diminui e não aumenta.",
      "Está incorreta: o efeito Fåhræus secundário demonstra que o hematócrito nos microvasos (hematócrito dinâmico) é inferior ao hematócrito sistémico, e não o dobro deste.",
      "Está incorreta: a circulação microvascular capilar é contínua e a velocidade nunca se anula sob condições normais de perfusão tecidual em leitos vasculares funcionais."
    ],
    "nursingApplication": "O Efeito Fåhræus-Lindqvist permite que o sangue continue a perfundir a microcirculação periférica com um custo pressórico muito inferior ao previsto pela teoria de tubos macroscópicos. Quando as hemácias perdem a sua flexibilidade elástica (como na anemia falciforme com hemoglobina S polimerizada), este efeito é anulado, provocando crises vaso-oclusivas isquémicas lancinantes que o enfermeiro gere com hidratação, analgesia e oxigenoterapia."
  },
  {
    "id": 4013,
    "topicId": 4,
    "question": "Qual é o principal fator biofísico celular determinante da viscosidade intrínseca do sangue total humano e como se correlaciona com o trabalho do coração?",
    "options": [
      "O hematócrito determina a volemia total mas não afeta a viscosidade, a qual é regulada unicamente pela concentração sérica de iões sódio e pela osmolalidade plasmática extracelular.",
      "O hematócrito é o principal determinante da viscosidade sanguínea; a sua elevação aumenta a viscosidade de modo quase exponencial, sobrecarregando a pós-carga e o trabalho miocárdico.",
      "A concentração de albumina plasmática é o único fator determinante da viscosidade do sangue, sendo o impacto do número de hemácias desprezável em indivíduos normovolémicos em repouso.",
      "A elevação do hematócrito reduz a resistência vascular periférica por aumentar a densidade de transporte de oxigénio, facilitando o débito cardíaco através de vasodilatação reflexa."
    ],
    "correctIndex": 1,
    "explanation": "A viscosidade sanguínea depende exponencialmente da fração volumétrica celular: o Hematócrito (Ht normal: 40-45% nos homens, 36-46% nas mulheres). Com Ht normal, a viscosidade é cerca de 3 a 4 vezes a da água (3-4 cP). Se o hematócrito subir acima de 60% (policitemia vera, desidratação severa ou doping com eritropoietina/EPO), a viscosidade atinge 8 a 10 cP, multiplicando a resistência vascular periférica e a pressão arterial, sobrecarregando perigosamente o ventrículo esquerdo.",
    "distractorAnalysis": [
      "Está incorreta: os eritrócitos constituem elementos figurados suspensos que colidem e atritam entre si, sendo a fração celular (hematócrito) a variável biofísica com maior impacto na viscosidade.",
      "Está incorreta: as proteínas plasmáticas influenciam a viscosidade do plasma, mas a viscosidade do sangue total é dominada pelas interações celulares das hemácias suspensas.",
      "Está incorreta: o aumento do hematócrito eleva a viscosidade e aumenta a resistência vascular periférica (R ∝ η), aumentando e não facilitando a carga de trabalho imposta ao miocárdio."
    ],
    "nursingApplication": "Num doente com DPOC avançada e hipoxemia crónica, a libertação persistente de EPO induz poliglobulia secundária adaptativa (Ht > 55-60%). O enfermeiro identifica o risco iminente de acidente vascular cerebral isquémico e sobrecarga cardíaca direita (cor pulmonale) associada à hiperviscosidade, participando na realização de flebotomias terapêuticas (sangrias) prescritas para reduzir o hematócrito a níveis seguros (<50%)."
  },
  {
    "id": 4014,
    "topicId": 4,
    "question": "Na medição indireta da Pressão Arterial (PA) por esfigmomanometria auscultatória com estetoscópio sobre a artéria braquial, qual é a génese biofísica do 1.º Ruído de Korotkoff que define a Pressão Arterial Sistólica (PAS)?",
    "options": [
      "Quando a braçadeira esvazia, a artéria abre completamente e o escoamento torna-se perfeitamente laminar, gerando ondas sonoras contínuas que ressoam na campânula metálica do estetoscópio.",
      "O som resulta do encerramento mecânico brusco das válvulas aórtica e pulmonar, transmitido retrogradamente ao longo das artérias periféricas até à membrana de auscultação do examinador.",
      "Quando a pressão da braçadeira desce imediatamente abaixo da pressão sistólica, o sangue irrompe pela artéria comprimida a alta velocidade, gerando turbulência e vibrações parietais audíveis.",
      "O ruído corresponde ao atrito mecânico direto entre o tecido muscular braquial e a bolsa de borracha da braçadeira à medida que o ar é desinsuflado lentamente pela válvula manual de escape."
    ],
    "correctIndex": 2,
    "explanation": "Durante a insuflação supra-sistólica, a artéria braquial fica completamente ocluída (sem fluxo = silêncio). À medida que o ar é desinsuflado lentamente, no momento em que P_manguito = P_sistólica, o pico pressórico ventricular consegue abrir brevemente a artéria em cada sístole. O sangue é expelido através dessa fenda comprimida a altíssima velocidade num jato turbulento (elevado Número de Reynolds). Este turbilhão choca contra as paredes arteriais distais colapsadas, fazendo-as vibrar e originando o primeiro ruído claro e rítmico de Korotkoff (fase I), definidor da PAS.",
    "distractorAnalysis": [
      "Está incorreta: o escoamento laminar é perfeitamente silencioso e não gera sons auscultáveis; o ruído surge apenas quando a compressão parcial do vaso induz escoamento turbulento.",
      "Está incorreta: o encerramento das válvulas cardíacas semilunares gera o segundo som cardíaco (S2) na auscultação precordial e não os sons locais de Korotkoff na artéria braquial.",
      "Está incorreta: o som não é artefato mecânico da borracha do manguito, decorrendo exclusivamente das ondas de choque e vibrações da parede arterial colapsada sujeita a jatos turbulentos."
    ],
    "nursingApplication": "A compreensão da física dos ruídos de Korotkoff exige que o enfermeiro desinsufle a pera da braçadeira a uma velocidade rigorosa de 2 a 3 mmHg por segundo: desinsuflações demasiado rápidas saltam o primeiro jato turbulento sistólico, subestimando gravemente a pressão sistólica do doente."
  },
  {
    "id": 4015,
    "topicId": 4,
    "question": "Ainda na esfigmomanometria auscultatória, o desaparecimento completo de todos os ruídos sonoros de Korotkoff (Fase V) marca a Pressão Arterial Diastólica (PAD). Qual é a explicação biofísica para este silêncio auscultatório final?",
    "options": [
      "A pressão da braçadeira comprime totalmente o vaso na diástole, cessando a passagem de qualquer volume sanguíneo e impedindo a produção de vibrações audíveis no estetoscópio clínico.",
      "A velocidade do sangue atinge o seu pico máximo no leito vascular periférico, ultrapassando o limiar auditivo de frequência sonora percetível pelo ouvido humano na auscultação médica.",
      "As paredes arteriais perdem a capacidade elástica pelo efeito compressivo prévio da braçadeira, amortecendo mecanicamente quaisquer vibrações acústicas geradas pelo pulso cardíaco sistólico.",
      "A pressão da braçadeira desce abaixo da pressão diastólica, mantendo a artéria desobstruída em todo o ciclo cardíaco e restabelecendo o regime laminar contínuo e silencioso do sangue."
    ],
    "correctIndex": 3,
    "explanation": "Na Fase V de Korotkoff, logo que P_manguito cai ligeiramente abaixo da pressão diastólica mais baixa (PAD), a artéria já não é comprimida nem sequer durante o relaxamento ventricular. O vaso retoma o seu diâmetro circular normal desobstruído: o sangue volta a escoar em regime laminar uniforme sem jatos, vórtices ou turbilhões (Re < 2000). Como o fluxo laminar não gera perturbações sonoras audíveis na gama de frequências da auscultação clínica, instala-se o silêncio auscultatório.",
    "distractorAnalysis": [
      "Está incorreta: a compressão total com cessação de fluxo ocorre quando a pressão da braçadeira é superior à pressão sistólica, e não quando cai abaixo da pressão diastólica mínima.",
      "Está incorreta: a velocidade não ultrapassa o limiar de audibilidade em frequência; o silêncio ocorre simplesmente porque o escoamento deixou de ser turbulento e voltou a ser laminar.",
      "Está incorreta: a elasticidade arterial não é eliminada pela insuflação transitória da braçadeira, mantendo o vaso as suas propriedades biomecânicas normais de complacência elástica."
    ],
    "nursingApplication": "Em situações hiperdinâmicas especiais (crianças pequenas, febre alta, gravidez, tireotoxicose ou insuficiência da válvula aórtica), a turbulência pode persistir até aos 0 mmHg de pressão do manguito. Nestes doentes, as diretrizes clínicas de enfermagem determinam que a PAD seja registada no abafamento dos sons (Fase IV de Korotkoff) em vez do desaparecimento."
  },
  {
    "id": 4016,
    "topicId": 4,
    "question": "Se um enfermeiro utilizar uma braçadeira de esfigmomanómetro demasiado ESTREITA (pequena) para a circunferência do braço de um doente com obesidade, qual será o erro biofísico sistemático produzido na leitura da pressão arterial?",
    "options": [
      "Leitura falsamente sobrestimada da pressão arterial, porque a bolsa estreita exige maior pressão pneumática interna para transmitir força suficiente aos tecidos moles e ocluir a artéria.",
      "Leitura falsamente subestimada da pressão arterial, porque a bolsa estreita concentra a força numa área reduzida, transmitindo a pressão pneumática à artéria com eficácia excessiva.",
      "A medição não sofre qualquer alteração artefactual mensurável, pois a pressão exercida pelo manómetro de mercúrio ou aneroide é calibrada para ser independente da geometria da braçadeira.",
      "A leitura da pressão sistólica é falsamente baixa enquanto a pressão diastólica é falsamente elevada, resultando num estreitamento artefactado da pressão de pulso diferencial medida."
    ],
    "correctIndex": 0,
    "explanation": "A compressão da artéria braquial depende da transmissão da pressão através dos tecidos moles do braço. Se a bolsa inflável for demasiado estreita ou curta para a circunferência do membro, a distribuição de forças mecânicas é deficiente: as bordas da bolsa não sustentam a pressão central, exigindo insuflar a braçadeira a pressões muito mais elevadas do que a pressão real intra-arterial para conseguir colapsar o vaso. O resultado é uma sobrestimação sistemática da PAS e da PAD em até 10 a 20 mmHg.",
    "distractorAnalysis": [
      "Está incorreta: uma braçadeira estreita não oclui a artéria com excessiva facilidade; pelo contrário, dissipa a pressão nos tecidos moles e requer pressões maiores no manguito para comprimir o vaso.",
      "Está incorreta: as dimensões da bolsa pneumática (comprimento de ~80% e largura de ~40% do perímetro do braço) são determinantes críticos para a transmissão hidrostática precisa de pressão.",
      "Está incorreta: o erro sistemático afeta tanto a pressão sistólica como a diastólica no mesmo sentido de sobrestimação artefactual de ambos os valores obtidos no manómetro."
    ],
    "nursingApplication": "Normas da Sociedade Europeia de Cardiologia exigem que o enfermeiro meça a circunferência do braço do doente e selecione a braçadeira adequada (a câmara pneumática deve cobrir cerca de 40% da largura e 80% a 100% da circunferência do braço). Usar braçadeiras padrão de adulto em doentes obesos gera diagnósticos erróneos de hipertensão e prescrição desnecessária de anti-hipertensores."
  },
  {
    "id": 4017,
    "topicId": 4,
    "question": "Durante a medição da pressão arterial num doente sentado, se o braço do doente for mantido pendente muito ABAIXO do nível do coração (átrio direito), que erro hidrostático ocorre na leitura da PA e por que razão?",
    "options": [
      "A pressão lida é falsamente subestimada em relação ao coração porque a gravidade dificulta o enchimento arterial no braço dependente, diminuindo a resistência vascular periférica local.",
      "A pressão lida é falsamente sobrestimada em relação ao coração devido à pressão hidrostática adicional da coluna vertical de sangue entre a raiz aórtica e o manguito braquial (ΔP = ρ·g·h).",
      "A leitura da pressão arterial mantém-se rigorosamente inalterada porque o sistema cardiovascular atua como um circuito fechado onde a pressão se equilibra instantaneamente por Pascal.",
      "Apenas a pressão diastólica sofre elevação artefactual decorrente da estase venosa local, permanecendo a pressão sistólica rigorosamente concordante com os valores intracardíacos reais."
    ],
    "correctIndex": 1,
    "explanation": "O sistema circulatório obedece ao princípio da hidrostática em colunas de fluido verticais: P_local = P_coração + ρ · g · h. A densidade do sangue é ρ ≈ 1,06 × 10³ kg/m³. Isto traduz-se numa pressão hidrostática de aproximadamente 0,77 mmHg por cada centímetro de altura de coluna vertical. Se o braço estiver 15 cm abaixo do nível do átrio direito, a coluna hidrostática soma artificialmente cerca de +11 a +12 mmHg à pressão medida no manguito.",
    "distractorAnalysis": [
      "Está incorreta: a coluna de líquido abaixo do coração soma pressão hidrostática (cerca de +0,77 mmHg por cada centímetro de desnível vertical), elevando e não diminuindo a pressão lida.",
      "Está incorreta: embora seja um circuito fechado, o sangue está sujeito à gravidade, gerando gradientes de pressão hidrostática verticais mensuráveis entre diferentes planos corporais.",
      "Está incorreta: o acréscimo hidrostático da coluna de sangue (ρ·g·h) afeta igualmente tanto o pico sistólico como o patamar diastólico da pressão arterial no membro pendente."
    ],
    "nursingApplication": "O enfermeiro deve posicionar e apoiar SEMPRE o braço do doente rigorosamente à altura do 4.º espaço intercostal / linha média axilar (nível do átrio direito). Se o doente estiver deitado, o braço fica nivelado com a cama; se estiver sentado e o braço estiver pousado na coxa sem apoio, a sobrestimação da pressão induzirá erros graves na terapêutica."
  },
  {
    "id": 4018,
    "topicId": 4,
    "question": "A Lei de Laplace aplicada a vasos sanguíneos cilíndricos relaciona a Tensão de Parede circunferencial (T), a Pressão transmural interna (P), o Raio do vaso (r) e a Espessura da parede (w) através da relação: T = (P · r) / w. Qual é a consequência biofísica fatal desta lei na evolução de um Aneurisma da Aorta Abdominal?",
    "options": [
      "O aumento do raio luminal reduz a tensão de parede circunferencial de acordo com a Lei de Laplace, proporcionando um mecanismo mecânico de proteção contra a rotura da parede aórtica.",
      "A tensão mecânica exercida sobre a parede aórtica depende unicamente da pressão hidrostática arterial, permanecendo constante independentemente do diâmetro transversal do saco aneurismático.",
      "Com a dilatação e aumento do raio luminal (r) associados ao afilamento parietal (w), a tensão de parede (T = P·r/w) cresce acentuadamente, elevando o risco de rotura da parede aórtica.",
      "A dilatação luminal acelera a velocidade média do sangue no interior da dilatação aneurismática, gerando forças de arrasto friccional que espessam a túnica média por hipertrofia compensatória."
    ],
    "correctIndex": 2,
    "explanation": "Pela Lei de Laplace (T = P · r / w): se uma secção da aorta dilata patologicamente aumentando o raio r e a parede adelgaça por destruição de elastina e colagénio (w menor), a tensão circunferencial T de tração suportada pelas fibras remanescentes eleva-se dramaticamente. Isto cria um círculo vicioso: maior tensão -> maior estiramento -> maior raio -> tensão ainda maior. Quando a tensão ultrapassa o limite de resistência dos tecidos da parede aórtica, o aneurisma rompe-se com choque hemorrágico fatal.",
    "distractorAnalysis": [
      "Está incorreta: a tensão na parede é diretamente proporcional ao raio (T ∝ r); logo, a dilatação do aneurisma aumenta a tensão suportada pela parede fragilizada em vez de a diminuir.",
      "Está incorreta: a Lei de Laplace estabelece que para a mesma pressão transmural, vasos com maior raio sofrem tensões mecânicas parietais significativamente mais elevadas.",
      "Está incorreta: pela equação da continuidade, o alargamento do lúmen diminui a velocidade do sangue no interior do aneurisma (v = Q/A), favorecendo aliás a estase e trombose mural."
    ],
    "nursingApplication": "No acompanhamento de doentes com aneurisma aórtico conhecido (ex: diâmetro > 5 cm), a intervenção prioritária de enfermagem é o controlo rigoroso e agressivo da pressão arterial (evitando picos hipertensivos de P) e o ensino do doente a evitar manobras de esforço (manobra de Valsalva, levantar pesos), reduzindo as tensões parietais que levam à rotura."
  },
  {
    "id": 4019,
    "topicId": 4,
    "question": "Num sistema de fluidoterapia intravenosa por gravidade simples, a pressão motora hidrostática que impulsiona o líquido para a veia do doente é dada por ΔP = ρ · g · h. Se a pressão na veia periférica do doente for de 10 mmHg (~13,6 cm H₂O), qual é a consequência se o frasco de soro for colocado a uma altura inferior à do braço do doente (h < 0)?",
    "options": [
      "O débito de infusão intravenosa mantém-se constante por efeito de sifão capilar, compensando a diferença gravitacional através da pressão atmosférica atuante no respiro do frasco.",
      "A infusão acelera bruscamente devido à sucção gerada pela pressão venosa periférica negativa presente na circulação venosa dos membros superiores em decúbito dorsal horizontal.",
      "Ocorre aspiração imediata de microbolhas de ar para o interior do cateter periférico por inversão das tensões superficiais no orifício calibrador da câmara de gotejamento do equipo.",
      "A pressão na veia do doente supera a pressão hidrostática da linha de infusão, provocando a cessação do débito e o refluxo imediato de sangue venoso pelo cateter com risco de trombose."
    ],
    "correctIndex": 3,
    "explanation": "O escoamento por gravidade depende da diferença de pressão: se a pressão exercida pela coluna de líquido (P_infusão = ρ · g · h) for superior à pressão venosa do doente (P_veia), o líquido entra na veia. Se o frasco for descido abaixo do nível da punção venosa (h < 0 ou P_infusão < P_veia), o gradiente de pressão inverte-se: o sangue venoso é empurrado pela sua própria pressão hidrostática para o interior do cateter e linha de infusão, formando rapidamente um coágulo obstrutivo.",
    "distractorAnalysis": [
      "Está incorreta: o escoamento por gravidade depende da carga hidrostática líquida positiva (P_frasco > P_veia); se o frasco desce abaixo do ponto de inserção, o gradiente inverte-se.",
      "Está incorreta: a pressão venosa periférica num membro superior dependente é positiva (~5-15 mmHg) e não negativa, expulsando o sangue em direção à linha de perfusão mais baixa.",
      "Está incorreta: a câmara de gotejamento retém líquido e o refluxo do sangue venoso ocupa a tubagem distal sem provocar aspiração retrógrada imediata de ar através do filtro do equipo."
    ],
    "nursingApplication": "Durante a deambulação do doente com soro ou na transferência entre a maca e a cama hospitalar, o enfermeiro assegura que o suporte de soro mantém o frasco sempre elevado pelo menos 80 a 100 cm acima do ponto de inserção do cateter, prevenindo o refluxo de sangue para a linha de perfusão e a perda do acesso venoso por oclusão trombótica."
  },
  {
    "id": 4020,
    "topicId": 4,
    "question": "Na administração de terapêutica com bombas de infusão volumétrica, o mecanismo motor positivo é acionado por pistões peristálticos. Qual é a principal vantagem biofísica deste sistema ativo em comparação com a perfusão tradicional por gravidade livre?",
    "options": [
      "Geração de pressão motora ativa controlada para vencer a resistência de cateteres finos e filtros com caudal rigoroso, alertando por alarme de oclusão perante aumentos de pressão interna.",
      "Eliminação completa de qualquer pressão no cateter venoso periférico, permitindo a difusão passiva das moléculas de fármaco através da membrana endotelial sem fluxo hidrodinâmico real.",
      "Aceleração contínua e automática do débito prescrito em caso de hipotensão arterial do doente para restabelecer os valores hemodinâmicos normais sem intervenção dos profissionais de saúde.",
      "Capacidade de administrar qualquer tipo de solução hipertónica sem necessidade de monitorização da permeabilidade venosa, garantindo a ausência de extravasamento tecidual por ultrassons."
    ],
    "correctIndex": 0,
    "explanation": "As bombas de infusão volumétricas utilizam tração mecânica peristáltica linear ou rotativa para ejetar volumes milimétricos com precisão de ±5%. Ao contrário da gravidade simples (que oscila com a altura, postura do doente ou espasmos venosos), a bomba ajusta a pressão motora automaticamente para manter o caudal programado (ex: 2 mL/h). Incorpora transdutores de pressão que detetam resistências anormais (infiltração perivascular, dobra do tubo) e bloqueiam o bombeamento por alarme de pressão máxima (evitando extravasamentos lesivos).",
    "distractorAnalysis": [
      "Está incorreta: as bombas volumétricas operam por infusão forçada sob gradientes de pressão ativa positiva e mensurável, não dependendo de processos lentos de difusão passiva de solutos.",
      "Está incorreta: as bombas volumétricas debitam estritamente o caudal pré-programado pelo enfermeiro, não possuindo sensores hemodinâmicos sistémicos de autorregulação da tensão arterial.",
      "Está incorreta: as bombas podem continuar a perfundir contra resistências teciduais elevadas até atingir o limite do alarme de oclusão, exigindo vigilância de enfermagem para prevenir extravasamento."
    ],
    "nursingApplication": "A programação de bombas infusoras é uma competência exclusiva e de altíssima responsabilidade do enfermeiro: fármacos de margem terapêutica estreita (como aminas vasoativas, citotóxicos, insulina rápida e propofol) NUNCA podem ser infundidos por gravidade livre devido ao risco de sobredosagem mortal por variação acidental do clamp do equipo."
  },
  {
    "id": 4021,
    "topicId": 4,
    "question": "Na calibração de equipos de infusão por gravidade, qual é a diferença biofísica padronizada entre um sistema de 'Macrogotas' e um sistema de 'Microgotas'?",
    "options": [
      "No equipo de macrogotas 1 mL de solução corresponde a 10 gotas de infusão, enquanto no equipo de microgotas 1 mL corresponde a 100 microgotas para permitir titulação em unidades decimais.",
      "No equipo de macrogotas 1 mL de solução aquosa corresponde a 20 gotas (fator 20), enquanto no equipo de microgotas 1 mL corresponde a 60 microgotas (fator 60, onde 1 gota = 3 microgotas).",
      "Os equipos de macrogotas destinam-se exclusivamente à perfusão de soluções oleosas viscogênicas, ao passo que os de microgotas são indicados unicamente para a transfusão de sangue total.",
      "Ambos os sistemas debitam exatamente 30 gotas por cada mililitro de solução aquosa, diferindo apenas na presença de um filtro hidrofóbico esterilizante na câmara de gotejamento proximal."
    ],
    "correctIndex": 1,
    "explanation": "O volume de uma gota depende do diâmetro externo do orifício gotejador na câmara de gotejamento (pela Lei de Tate da tensão superficial). Equipos de macrogotas comuns possuem orifício largo padronizado para fornecer 20 gotas por mL (1 gota ≈ 0,05 mL). Equipos de microgotas (ou equipos pediátricos) possuem uma agulha metálica central fina calibrada para fornecer 60 microgotas por mL (1 microgota ≈ 0,0167 mL).",
    "distractorAnalysis": [
      "Está incorreta: os fatores de calibração padronizados universalmente em enfermagem hospitalar são de 20 gotas/mL para macrogotas e de 60 microgotas/mL para sistemas pediátricos ou de precisão.",
      "Está incorreta: soluções oleosas ou sangue exigem equipos específicos (com filtros de hemotransfusão de 170-200 μm); os equipos comuns de macrogotas são usados em fluidoterapia eletrolítica.",
      "Está incorreta: a geometria do orifício calibrador determina a massa da gota por tensão superficial, conferindo 20 gotas/mL no equipo padrão e 60 microgotas/mL no equipo fino."
    ],
    "nursingApplication": "A equivalência biofísica fundamental na enfermagem é: Débito em mL/h = Débito em microgotas/minuto. Para macrogotas: Gotas/minuto = (Volume em mL × 20) / (Tempo em minutos) = Volume em mL / (Tempo em horas × 3). O domínio deste cálculo previne acidentes de hipervolemia em pediatria e nefrologia."
  },
  {
    "id": 4022,
    "topicId": 4,
    "question": "Durante a inserção ou remoção de um Cateter Venoso Central (CVC) na veia jugular interna ou subclávia de um doente, qual é o risco hemodinâmico fatal decorrente da pressão intratorácica negativa gerada durante a inspiração profunda?",
    "options": [
      "Expulsão explosiva de sangue venoso pelo cateter devido ao aumento abrupto da pressão intratorácica positiva gerada pela descida mecânica do diafragma durante a inspiração espontânea.",
      "Rutura imediata da veia jugular interna por vasodilatação reflexa simpática, decorrente da perda súbita do tónus muscular vasomotor com o doente em decúbito dorsal ou ligeira Trendelenburg.",
      "Aspiração de ar atmosférico para a veia pelo gradiente pressórico negativo intratorácico na inspiração (P_torácica < P_atmosférica), originando embolia gasosa e colapso hemodinâmico.",
      "Coagulação instantânea do sangue no lúmen do cateter provocada pela descida brusca da temperatura do sangue exposto à corrente de ar atmosférico durante a desconexão da linha venosa."
    ],
    "correctIndex": 2,
    "explanation": "As grandes veias intratorácicas (cavas, subclávias, jugulares) estão submetidas à pressão pleural subatmosférica: durante uma inspiração profunda forçada, a pressão dentro da veia pode cair para valores negativos (-2 a -6 cm H₂O). Se a cânula ou luer do cateter estiver aberta ao ar sem oclusão estanque, o gradiente de pressão suga centenas de mililitros de ar ambiente diretamente para o coração direito, formando uma 'armadilha gasosa' que bloqueia a ejeção para a artéria pulmonar (choque obstrutivo letal).",
    "distractorAnalysis": [
      "Está incorreta: a inspiração espontânea reduz a pressão intratorácica para valores subatmosféricos (pressão negativa), o que favorece a aspiração de ar e não a expulsão hemorrágica forçada.",
      "Está incorreta: a veia não sofre rutura espontânea por alterações reflexas de tónus muscular; a posição de Trendelenburg serve aliás para aumentar a pressão venosa central e prevenir a entrada de ar.",
      "Está incorreta: a coagulação sanguínea requer a ativação da cascata de hemostase ao longo de vários minutos, sendo a embolia gasosa por pressão subatmosférica o risco imediato e fatal."
    ],
    "nursingApplication": "Para prevenir embolia gasosa durante a introdução ou remoção de CVCs, o enfermeiro posiciona o doente em posição de Trendelenburg (cabeceira rebaixada a 15°, elevando a pressão venosa na jugular acima da atmosférica) e instrui o doente a realizar a manobra de Valsalva ou suster a respiração em expiração plena no instante da desconexão."
  },
  {
    "id": 4023,
    "topicId": 4,
    "question": "A complacência ou capacitância venosa (C = ΔV / ΔP) das grandes veias sistémicas é cerca de 20 a 30 vezes superior à das artérias sistémicas. Qual é o papel hemodinâmico deste facto biofísico na circulação humana?",
    "options": [
      "As veias atuam como o principal conduto de alta resistência da circulação sistémica, controlando a pós-carga do ventrículo direito mediante vasoconstrição contínua das suas paredes espessas.",
      "As grandes veias mantêm uma pressão hidrostática superior à das artérias sistémicas, assegurando o gradiente propulsor indispensável para o retorno do sangue contra a força da gravidade.",
      "A complacência elevada impede qualquer redistribuição de volume para o coração durante a contração muscular esquelética ativa, estabilizando o débito cardíaco perante esforços intensos.",
      "As veias atuam como reservatório capacitivo de volume (contendo 60-70% do sangue circulante em repouso), acomodando variações volémicas significativas com pequenas alterações na pressão."
    ],
    "correctIndex": 3,
    "explanation": "Devido às suas paredes finas, ricas em colagénio frouxo e com pouca musculatura lisa elástica, as veias possuem altíssima complacência volumétrica (C = ΔV / ΔP): podem receber grandes volumes de fluido com aumentos quase negligenciáveis de pressão hidrostática interna. Cerca de dois terços do sangue circulante encontra-se alojado no sistema venoso sistémico de capacitância.",
    "distractorAnalysis": [
      "Está incorreta: as veias são vasos de baixa resistência e elevada complacência; o controlo da resistência vascular é desempenhado pelas arteríolas pré-capilares sistémicas.",
      "Está incorreta: a pressão no sistema venoso sistémico é substancialmente mais baixa (~2 a 15 mmHg) do que no compartimento arterial sistémico (~70 a 100 mmHg).",
      "Está incorreta: o venotónus e a bomba muscular esquelética comprimem as veias complacentes, mobilizando eficazmente o volume reservado para aumentar o retorno venoso durante o esforço."
    ],
    "nursingApplication": "Em estados de choque hipovolémico ou hemorrágico, a estimulação simpática ativa induz venoconstrição generalizada mediada por recetores alfa-1, reduzindo a complacência venosa e 'mobilizando' até 1 litro de sangue do reservatório venoso esplâncnico e cutâneo para a circulação central, garantindo o retorno venoso e o débito cardíaco."
  },
  {
    "id": 4024,
    "topicId": 4,
    "question": "O efeito 'Windkessel' (ou efeito de amortecimento elástico) desempenhado pelas grandes artérias elásticas (como a aorta e artérias carótidas) consiste em qual mecanismo biofísico?",
    "options": [
      "Distensão elástica aórtica na sístole acumulando energia potencial elástica e retração elástica passiva na diástole impulsionando o sangue, tornando o fluxo capilar contínuo e estável.",
      "Contração muscular ativa e vigorosa da túnica média aórtica durante a diástole ventricular, gerando um segundo batimento peristáltico propulsor que acelera o sangue para os tecidos periféricos.",
      "Abertura reflexa de shunts arteriovenosos aórticos que desviam metade do débito cardíaco sistólico diretamente para as veias cavas, reduzindo a sobrecarga volumétrica dos órgãos abdominais.",
      "Amortecimento passivo puramente viscoso sem qualquer restituição de energia mecânica elástica, dissipando integralmente o pulso de pressão sob a forma de calor metabólico endotelial local."
    ],
    "correctIndex": 0,
    "explanation": "Durante a sístole ventricular (~0,3 s), o coração ejeta cerca de 70 mL de sangue subitamente na aorta: se as artérias fossem tubos rígidos de vidro, a pressão sistólica dispararia para valores absurdos (>250 mmHg) e o fluxo pararia instantaneamente a zero durante a diástole. Graças à distensibilidade elástica da aorta (efeito Windkessel, do alemão 'câmara de ar comprimido'), o vaso expande-se absorvendo energia mecânica; na diástole (~0,5 s), as fibras de elastina retraem-se passivamente mantendo a perfusão contínua para as coronárias e tecidos periféricos (mantendo a PAD a ~80 mmHg).",
    "distractorAnalysis": [
      "Está incorreta: o efeito Windkessel é um fenómeno mecânico passivo baseado na elastina parietal da raiz aórtica e não numa contração muscular ativa peristáltica sincronizada.",
      "Está incorreta: a aorta não possui shunts arteriovenosos imediatos nem desvia sangue para as veias cavas; o seu papel é amortecer a onda de pulso e manter a pressão de perfusão diastólica.",
      "Está incorreta: as paredes elásticas armazenam reversivelmente a energia de deformação sob a forma elástica potencial, restituindo-a ao sangue durante a fase de relaxamento ventricular."
    ],
    "nursingApplication": "Com o envelhecimento e a arteriosclerose, a aorta perde elastina e deposita colagénio rígido e cálcio: o efeito Windkessel deteriora-se. A aorta perde complacência, resultando na Hipertensão Sistólica Isolada do Idoso (PAS > 160 mmHg com PAD normal ou baixa < 70 mmHg e pressão de pulso alargada), quadro que o enfermeiro vigia estreitamente quanto ao risco de AVC."
  },
  {
    "id": 4025,
    "topicId": 4,
    "question": "A Pressão Arterial Média (PAM) é o parâmetro hemodinâmico de excelência que traduz a pressão de perfusão contínua aos tecidos biológicos. Como se calcula de forma fidedigna a PAM a partir da Pressão Sistólica (PAS) e Diastólica (PAD) em repouso?",
    "options": [
      "PAM = (PAS + PAD) / 2, calculada como a média aritmética simples das pressões extremas sob a premissa de que a sístole e a diástole possuem rigorosamente a mesma duração temporal em repouso.",
      "PAM = PAD + 1/3 (PAS - PAD), traduzindo a assimetria do ciclo cardíaco no qual o miocárdio permanece aproximadamente dois terços do tempo total em diástole nas frequências basais normais.",
      "PAM = PAS - PAD, correspondendo à pressão diferencial de pulso que reflete diretamente a resistência vascular arteriolar periférica e a viscosidade intrínseca do sangue no leito terminal.",
      "PAM = 2/3 PAS + 1/3 PAD, calculada com ponderação superior da pressão sistólica para assegurar que a estimativa da perfusão coronária reflete o pico máximo de tensão gerado pelo ventrículo."
    ],
    "correctIndex": 1,
    "explanation": "Na fisiologia cardiovascular normal em repouso (frequência cardíaca de ~75 bpm), o período de sístole dura cerca de um terço do ciclo cardíaco (~0,27 s) e o período de diástole dura cerca de dois terços (~0,53 s). Por isso, a Pressão Arterial Média é uma média ponderada no tempo fortemente desviada para o valor diastólico: PAM = PAD + (PAS - PAD)/3 = (2 · PAD + PAS)/3. Por exemplo, para uma PA de 120/80 mmHg: PAM = 80 + (40/3) ≈ 93,3 mmHg.",
    "distractorAnalysis": [
      "Está incorreta: a média aritmética simples ignora o facto de a diástole durar cerca de duas vezes mais tempo que a sístole em frequências cardíacas normais de repouso.",
      "Está incorreta: a diferença simples entre a pressão sistólica e a diastólica (PAS - PAD) define a Pressão de Pulso ou Pressão Diferencial, e não a Pressão Arterial Média.",
      "Está incorreta: inverte as ponderações temporais do ciclo cardíaco, atribuindo erradamente dois terços do tempo à fase sistólica em vez da fase diastólica de relaxamento."
    ],
    "nursingApplication": "Nas Unidades de Cuidados Intensivos e Urgência, a titulação de drogas vasoativas (como noradrenalina ou vasopressina) é norteada primordialmente pelo valor da PAM: o enfermeiro ajusta a perfusão para manter uma PAM mínima de 65 mmHg, limiar biofísico comprovado abaixo do qual a autorregulação renal e cerebral colapsa com choque distributivo e falência multiorgânica."
  },
  {
    "id": 4026,
    "topicId": 4,
    "question": "O fenómeno patológico de 'Roubo Subclávio' (subclavian steal syndrome) ilustra a inversão hemodinâmica do sentido de escoamento do sangue provocada por gradientes anómalos de pressão. O que ocorre biofisicamente nesta síndrome?",
    "options": [
      "Estenose carotídea bilateral eleva a pressão intracraniana, forçando o sangue arterial a refluir através das veias jugulares internas em direção à cintura escapular ipsilateral.",
      "Rutura traumática da artéria axilar gera um gradiente hidrostático negativo que aspira o sangue do tronco celíaco através da circulação colateral da parede torácica anterior.",
      "Estenose proximal na artéria subclávia reduz a pressão a jusante, invertendo o fluxo da artéria vertebral ipsilateral que drena sangue encefálico para o braço em esforço.",
      "Espasmo fisiológico transitório do arco aórtico desvia o débito cardíaco sistólico preferencialmente para as artérias femorais, colapsando as artérias dos membros superiores."
    ],
    "correctIndex": 2,
    "explanation": "Os fluidos circulam sempre da região de maior pressão hidrostática para a de menor pressão (ΔP = P_alta - P_baixa). Numa oclusão da artéria subclávia antes da emergência da artéria vertebral, a pressão no leito arterial do braço cai drasticamente. Pelo polígono de Willis no crânio, a artéria basilar/cerebral tem pressão superior à da subclávia distal estenosada: estabelece-se um gradiente pressórico retrógrado, invertendo o fluxo da artéria vertebral que passa a 'roubar' sangue do encéfalo para irrigar o membro superior em movimento.",
    "distractorAnalysis": [
      "Está incorreta: o sangue venoso jugular não inverte o fluxo nem perfunde o braço sob pressão carotídea; o roubo subclávio envolve especificamente as artérias vertebrais e subclávia.",
      "Está incorreta: a síndrome decorre de estenose aterosclerótica da subclávia proximal e não de rutura traumática da axilar com aspiração retrógrada celíaca.",
      "Está incorreta: a patologia resulta de uma obstrução anatómica fixa proximal à emergência da vertebral e não de um espasmo aórtico generalizado que redireciona fluxo para as pernas."
    ],
    "nursingApplication": "O enfermeiro deteta precocemente a síndrome do roubo subclávio através da medição comparativa da pressão arterial em AMBOS os braços: uma discrepância superior a 20 mmHg na PAS entre o braço direito e o esquerdo, associada a tonturas ou síncope quando o doente mobiliza o braço afetado, exige comunicação médica imediata."
  },
  {
    "id": 4027,
    "topicId": 4,
    "question": "A pressão osmótica (oncótica ou coloidosmótica, π) exercida pelas proteínas plasmáticas (especialmente a albumina) é de cerca de 25 a 28 mmHg no capilar. Na biofísica da microcirculação, qual é o papel desta pressão na 'Equação de Starling' para a filtração e reabsorção transcapilar?",
    "options": [
      "Atua como pressão mecânica hidrostática que empurra a água e eletrólitos livres através das fendas endoteliais para nutrir a matriz extracelular dos tecidos conjuntivos.",
      "Atua como gradiente eletroquímico celular responsável por repelir ativamente os glóbulos vermelhos do endotélio, eliminando a resistência vascular marginal pré-capilar.",
      "Atua como barreira hidrofóbica impermeável que bloqueia totalmente a passagem de qualquer molécula de água ou soluto entre o plasma e os tecidos extravasculares periféricos.",
      "Atua como força osmótica coloidosmótica gerada pelas proteínas plasmáticas que atrai líquido para o interior capilar, contrabalançando a filtração hidrostática transcapilar."
    ],
    "correctIndex": 3,
    "explanation": "Pela Equação de Starling, o fluxo de líquido transendotelial é dado por J_v = K_f · [(P_c - P_if) - σ(π_c - π_if)]. Enquanto a pressão hidrostática capilar (P_c ≈ 32 mmHg na extremidade arteriolar e ~15 mmHg na extremidade venular) empurra a água para o espaço intersticial (filtração), a pressão coloidosmótica do plasma (π_c ≈ 28 mmHg), gerada pelas macromoléculas impermeáveis de albumina, suga a água de volta para a corrente sanguínea (reabsorção).",
    "distractorAnalysis": [
      "Está incorreta: a força hidrostática capilar (Pc) é a responsável pela filtração para o interstício; a pressão oncótica (πc) opõe-se a essa saída, atraindo água para o vaso.",
      "Está incorreta: a pressão coloidosmótica é determinada termodinamicamente pela concentração de macromoléculas proteicas (como albumina) e não por potenciais de membrana celulares.",
      "Está incorreta: a membrana capilar é altamente permeável à água e cristalóides através das junções intercelulares, não constituindo uma barreira hidrofóbica impermeável."
    ],
    "nursingApplication": "Em doentes com queimaduras extensas, desnutrição proteico-calórica severa ou síndrome nefrótica (onde a concentração de albumina sérica cai de 4,5 g/dL para <2 g/dL), a pressão oncótica capilar despenca. Sem força de retenção intravascular, a água extravasa massivamente para o interstício, gerando edema periférico anasarca e ascite, que o enfermeiro vigia através de balanços hídricos rigorosos e administração de albumina humana concentrada."
  },
  {
    "id": 4028,
    "topicId": 4,
    "question": "Num doente em decúbito dorsal horizontal na cama, a pressão arterial na aorta, nas artérias carótidas e na artéria pediosa dorsal do pé é praticamente a mesma (~100 mmHg). Contudo, quando o doente se coloca subitamente de pé em posição bípede vertical, o que acontece à pressão hidrostática na artéria do pé?",
    "options": [
      "Eleva-se para cerca de 180 a 200 mmHg, devido à adição da coluna hidrostática líquida vertical entre o nível cardíaco e as artérias do pé (ΔP = ρ · g · h ≈ +80 a +100 mmHg).",
      "Mantém-se rigorosamente invariável em 100 mmHg, dado que os reflexos barorrecetores aórticos anulam instantaneamente quaisquer efeitos gravitacionais nos vasos periféricos.",
      "Diminui para cerca de 40 a 50 mmHg, visto que o retorno venoso reduzido em bipedestação deprime a pressão de ejeção sistólica ventricular para os membros inferiores.",
      "Cai imediatamente para zero mmHg por colapso mecânico das arteríolas pediosas sob o peso corporal transmitido diretamente pelas fáscias plantares durante o apoio plantar."
    ],
    "correctIndex": 0,
    "explanation": "Na postura ereta bípede, a gravidade atua sobre toda a coluna de sangue: a distância vertical do coração aos pés num adulto de estatura média é de aproximadamente 1,2 a 1,3 metros. Essa coluna hidrostática gera um acréscimo pressórico de cerca de 90 a 100 mmHg (ΔP = ρ · g · h). Assim, a pressão arterial média nos pés passa de ~100 mmHg para quase 200 mmHg. Inversamente, na cabeça (cerca de 40 a 50 cm acima do coração), a pressão cai para cerca de 60 a 70 mmHg.",
    "distractorAnalysis": [
      "Está incorreta: os barorrecetores modulam o tónus vasomotor sistémico, mas não podem anular a lei física da gravidade que acrescenta a pressão de coluna de sangue vertical (ρ·g·h).",
      "Está incorreta: a gravidade soma pressão à coluna arterial inferior em ortostatismo, elevando marcadamente a pressão na extremidade podálica em vez de a diminuir.",
      "Está incorreta: as artérias pediosas mantêm fluxo pulsátil sob elevada pressão hidrostática, não colapsando em bipedestação num indivíduo com perfusão fisiológica normal."
    ],
    "nursingApplication": "O aumento colossal da pressão hidrostática nas extremidades inferiores na bipedestação dilata as veias das pernas (represando até 500 mL de sangue), o que pode reduzir temporariamente o retorno venoso ao coração. Se o reflexo barorrecetor falhar, ocorre 'Hipotensão Ortostática' e síncope: o enfermeiro previne acidentes sentando o doente na beira da cama com os pés apoiados durante alguns minutos antes de o colocar em pé."
  },
  {
    "id": 4029,
    "topicId": 4,
    "question": "A formação de Edema agudo nos membros inferiores de um doente com Insuficiência Cardíaca Congestiva (ICC) direita resulta primariamente de qual perturbação no equilíbrio de Starling?",
    "options": [
      "Queda acentuada da pressão hidrostática capilar abaixo da pressão intersticial, aspirando líquido dos tecidos periféricos e gerando tumefação por colapso linfático retrógrado.",
      "Aumento substancial da pressão hidrostática venosa e capilar (Pc) retrógrada, forçando o extravasamento intersticial que excede a capacidade de depuração do sistema linfático.",
      "Destruição autoimune direta das proteínas plasmáticas circulantes no interior do fígado, reduzindo a pressão coloidosmótica oncótica plasmática para valores próximos de zero.",
      "Vasoconstrição arteriolar extrema com encerramento dos esfíncteres pré-capilares periféricos, impedindo a entrada de sangue na microcirculação dos membros inferiores."
    ],
    "correctIndex": 1,
    "explanation": "Na falência ventricular direita, o sangue acumula-se a montante no átrio direito e veias cavas: a Pressão Venosa Central (PVC) eleva-se de valores fisiológicos (2 a 6 mmHg) para mais de 15 a 20 mmHg. Essa hipertensão venosa transmite-se retrogradamente até à extremidade venular dos capilares periféricos, aumentando a pressão hidrostática capilar P_c ao longo de todo o leito. A filtração supera largamente a reabsorção e a capacidade de transporte dos vasos linfáticos, acumulando fluido no interstício (edema depressível / com fóvea nos membros inferiores).",
    "distractorAnalysis": [
      "Está incorreta: a falência ventricular direita causa estase venosa retrógrada com elevação marcada e não redução da pressão hidrostática capilar periférica.",
      "Está incorreta: na insuficiência cardíaca congestiva primária a causa inicial é o aumento da pressão hidrostática venosa retrógrada e não a lise autoimune hepática da albumina.",
      "Está incorreta: se houvesse encerramento pré-capilar total o membro tornar-se-ia isquémico e pálido, e não edematoso, congestivo e com sinal de cacifo evidente."
    ],
    "nursingApplication": "Na avaliação diária de enfermagem ao doente com ICC, o enfermeiro pesquisa ativamente o sinal de Godet ou fóvea (compressão digital firme contra a face anterior da tíbia por 5 segundos: a persistência de uma depressão confirma a presença de edema por excesso de pressão hidrostática capilar), pesa o doente em jejum e monitoriza o balanço hídrico durante a terapêutica diurética com furosemida."
  },
  {
    "id": 4030,
    "topicId": 4,
    "question": "Nas artérias coronárias que irrigam o músculo cardíaco (miocárdio do ventrículo esquerdo), qual é a peculiaridade biofísica única do seu ciclo de perfusão hidrodinâmica em relação ao restante corpo?",
    "options": [
      "A perfusão coronária esquerda é estritamente sistólica, aproveitando o pico de pressão máxima na raiz aórtica para forçar a passagem de eritrócitos nos capilares miocárdicos.",
      "O fluxo coronário é absolutamente contínuo e constante ao longo de todo o ciclo, sendo imune a quaisquer forças de compressão mecânica geradas pelas miofibrilhas contráteis.",
      "O fluxo miocárdico esquerdo ocorre predominantemente durante a diástole ventricular, porque a compressão intramiocárdica na sístole colapsa os vasos coronários intramurais.",
      "A irrigação miocárdica ventricular ocorre unicamente durante a fase de ejeção rápida aórtica, cessando por completo durante o relaxamento isovolumétrico do ventrículo esquerdo."
    ],
    "correctIndex": 2,
    "explanation": "Na maioria dos órgãos da economia, o pico de perfusão coincide com a sístole. No ventrículo esquerdo, contudo, a sístole miocárdica desenvolve pressões intramurais enormes que comprimem mecanicamente as artérias coronárias subendocárdicas (efeito de garrote mecânico extravascular), colapsando-as e reduzindo o fluxo a valores mínimos. Quando o miocárdio relaxa na DIÁSTOLE, a compressão tecidual cessa, e o sangue flui livremente para as coronárias sob a pressão aórtica diastólica residual.",
    "distractorAnalysis": [
      "Está incorreta: na sístole as tensões parietais do ventrículo esquerdo igualam ou superam a pressão aórtica cavitária, estrangulando o leito vascular miocárdico profundo.",
      "Está incorreta: os vasos intramurais do ventrículo esquerdo sofrem compressão extrínseca severa pelas fibras musculares ativadas, tornando o fluxo marcadamente fásico e diastólico.",
      "Está incorreta: o fluxo cessa quase totalmente no pico sistólico no miocárdio esquerdo e atinge o seu débito máximo no início da diástole com a descompressão ventricular."
    ],
    "nursingApplication": "Compreender que o coração esquerdo só se nutre na diástole elucida por que a taquicardia severa (ex: FC > 140 bpm num doente coronário) é tão perigosa: a taquicardia encurta desproporcionalmente o tempo de diástole em cada minuto, reduzindo o tempo de perfusão miocárdica e precipitando isquemia aguda (angina de peito ou enfarte agudo do miocárdio). O enfermeiro reconhece esta urgência administrando betabloqueadores prescritos para desacelerar a FC."
  },
  {
    "id": 4031,
    "topicId": 4,
    "question": "O manómetro mecânico do esfigmomanómetro aneroide utilizado por enfermeiros na avaliação da pressão arterial baseia o seu funcionamento físico em qual transdutor mecânico de pressão?",
    "options": [
      "Num tubo de vidro calibrado contendo mercúrio metálico líquido cuja altura vertical varia linearmente de acordo com a aceleração da gravidade e densidade mássica local.",
      "Num cristal piezoelétrico cerâmico polarizado que gera uma diferença de potencial elétrico proporcional à deformação acústica produzida pelos batimentos arteriais.",
      "Num circuito resistivo de ponte de Wheatstone acoplado a uma membrana de silício com amplificadores operacionais analógicos alimentados por baterias alcalinas internas.",
      "Numa cápsula metálica corrugada flexível selada a vácuo (Cápsula de Vidie) que se deforma sob a pressão do ar, acionando o ponteiro através de engrenagens de precisão."
    ],
    "correctIndex": 3,
    "explanation": "Os esfigmomanómetros aneroides (do grego 'sem líquido') não usam mercúrio. O seu núcleo sensor é uma cápsula metálica elástica de fole (cápsula de Vidie): a pressão do ar proveniente da braçadeira entra no compartimento e deforma a parede metálica de acordo com a Lei de Hooke para membranas flexíveis. Um sistema de alavancas de amplificação e rodas dentadas converte essa microdeformação na rotação angular precisa do ponteiro do mostrador graduado em milímetros de mercúrio (mmHg).",
    "distractorAnalysis": [
      "Está incorreta: descreve o esfigmomanómetro clássico de coluna de mercúrio, enquanto o modelo aneroide prescinde inteiramente de mercúrio ou de colunas líquidas verticais.",
      "Está incorreta: descreve o princípio dos sensores de ultrassom piezoelétricos ou oscilométricos digitais, e não o manómetro puramente mecânico de ponteiro aneroide.",
      "Está incorreta: descreve transdutores piezoresistivos eletrónicos de pressão usados em monitores digitais ou linhas arteriais invasivas, não o mecanismo mecânico de Vidie."
    ],
    "nursingApplication": "Ao contrário das colunas de mercúrio calibradas pela própria gravidade invariável, os manómetros aneroides sofrem descalibração mecânica fácil se sofrerem quedas ou pancadas na enfermaria. O enfermeiro deve verificar se o ponteiro assenta rigorosamente no zero quando a braçadeira está completamente vazia e exigir a calibração periódica do aparelho pelo serviço de electromedicina."
  },
  {
    "id": 4032,
    "topicId": 4,
    "question": "Na circulação pulmonar (pequena circulação), as pressões hidrostáticas normais são muito inferiores às da circulação sistémica (Pressão da Artéria Pulmonar média ≈ 15 mmHg vs PAM sistémica ≈ 95 mmHg). Qual é a razão biofísica e o benefício fisiológico dessa baixa pressão?",
    "options": [
      "Baixa resistência vascular em leito complacente mantendo pressão capilar baixa (~7-8 mmHg), prevenindo extravasamento de Starling e formação de edema alveolar pulmonar.",
      "Elevadíssima resistência vascular nas arteríolas pulmonares musculares, retardando o trânsito do sangue para maximizar o tempo de fixação do dióxido de carbono na hemoglobina.",
      "Ausência de túnica adventícia nos ramos da artéria pulmonar, permitindo o colapso dos vasos durante a inspiração para evitar a hiperdistensão mecânica dos lobos pulmonares.",
      "Pressão oncótica nula nos capilares pulmonares por filtração contínua de albumina, exigindo baixas pressões arteriais para manter o equilíbrio osmótico da pleura parietal."
    ],
    "correctIndex": 0,
    "explanation": "O leito vascular pulmonar recebe 100% do mesmo débito cardíaco que a circulação sistémica (~5 L/min), mas opera com uma Resistência Vascular Pulmonar (RVP) cerca de 6 a 10 vezes menor que a sistémica. Isto é vital para a hematose: a pressão hidrostática no capilar alveolar (P_c ≈ 7 mmHg) é mantida muito abaixo da pressão oncótica plasmática (π_c ≈ 28 mmHg). Deste modo, existe uma força de sucção contínua que mantém os alvéolos secos e livres de líquido para permitir a difusão gasosa de O₂ e CO₂.",
    "distractorAnalysis": [
      "Está incorreta: a circulação pulmonar opera com resistência vascular periférica cerca de 6 a 10 vezes menor que a sistémica, facilitando o débito cardíaco com baixas pressões.",
      "Está incorreta: os vasos pulmonares possuem paredes finas e complacentes que distendem facilmente, sem sofrer colapso cíclico inspiratório em condições fisiológicas normais.",
      "Está incorreta: a pressão oncótica capilar pulmonar é semelhante à sistémica (~25 mmHg); uma baixa pressão hidrostática (Pc) garante que a reabsorção supere a filtração alveolar."
    ],
    "nursingApplication": "Quando a pressão no ventrículo esquerdo se eleva patologicamente (enfarte agudo, estenose mitral severa), a pressão retrograda para os capilares pulmonares: se a pressão capilar pulmonar (PCP) ultrapassar a pressão oncótica (~28 mmHg), o líquido inunda os alvéolos em minutos (Edema Agudo do Pulmão). O enfermeiro identifica a expectoração rosada espumosa característica, hipoxemia severa e ortopneia, posicionando o doente sentado com pernas pendentes para diminuir o retorno venoso."
  },
  {
    "id": 4033,
    "topicId": 4,
    "question": "O fenómeno de 'Cavitação' em sistemas de circulação de fluidos ocorre quando a pressão local do líquido cai abaixo de qual parâmetro físico?",
    "options": [
      "Abaixo da pressão atmosférica padrão de referência ao nível do mar (760 mmHg), desencadeando a expansão isotérmica de todos os gases atmosféricos dissolvidos no fluido.",
      "Abaixo da tensão de saturação gasosa do líquido à temperatura de trabalho, gerando bolhas gasosas que colapsam abruptamente e emitem microjatos erosivos de alta pressão.",
      "Abaixo da pressão osmótica efetiva dos eritrócitos circundantes, provocando a rutura imediata da membrana plasmática celular por influxo de água desmineralizada.",
      "Abaixo do ponto de congelação termodinâmico do sangue total, originando a cristalização dendrítica rápida da água plasmática com paragem completa do fluxo laminar."
    ],
    "correctIndex": 1,
    "explanation": "A cavitação é um fenómeno hidrodinâmico destrutivo: quando um líquido em escoamento a alta velocidade sofre uma aceleração brutal (por exemplo, na borda de um orifício estenosado ou em próteses valvulares cardíacas mecânicas), a pressão estática lateral pode descer momentaneamente abaixo da pressão de vapor do líquido (à temperatura corporal de 37 °C, a pressão de vapor da água é de ~47 mmHg). O líquido entra em ebulição local a frio formando bolhas gasosas de vapor que, ao entrarem em zonas de maior pressão, implodem violentamente gerando picos pressóricos de milhares de atmosferas que laceram hemácias e tecidos.",
    "distractorAnalysis": [
      "Está incorreta: pressões abaixo da atmosférica ocorrem rotineiramente na respiração e em tubagens sem cavitação; a cavitação exige que a pressão caia abaixo da tensão de vaporização do líquido.",
      "Está incorreta: a lise celular osmótica é um fenómeno biológico de tonicidade de membrana, enquanto a cavitação é um fenómeno físico puramente hidrodinâmico de transição de fase.",
      "Está incorreta: a cavitação resulta da queda de pressão hidrostática dinâmica (como em válvulas cardíacas mecânicas) e não de arrefecimento térmico para congelação."
    ],
    "nursingApplication": "Em doentes portadores de próteses valvulares cardíacas mecânicas antigas de alto gradiente, microfenómenos de cavitação nas margens de fecho dos folhetos mecânicos são responsáveis por hemólise intravascular mecânica crónica (anemia hemolítica traumática com esquizócitos no sangue periférico). O enfermeiro monitoriza níveis de hemoglobina, icterícia e colúria urinária."
  },
  {
    "id": 4034,
    "topicId": 4,
    "question": "Qual é a definição de 'Pressão de Pulso' (ou Pressão Diferencial) e o que reflete primariamente a sua magnitude hemodinâmica?",
    "options": [
      "Média ponderada entre a pressão sistólica e diastólica ao longo do tempo, indicando a pressão de perfusão capilar contínua disponibilizada aos órgãos vitais sistémicos.",
      "Gradiente de pressão transvalvular aórtico registado durante o período de ejeção máxima, dependendo exclusivamente da frequência cardíaca basal do doente monitorizado.",
      "Diferença entre pressão sistólica e diastólica (PP = PAS - PAD), refletindo primariamente a magnitude do volume de ejeção sistólico e a rigidez elástica das grandes artérias condutoras.",
      "Soma aritmética simples da pressão arterial sistólica com a pressão venosa central, traduzindo a sobrecarga volémica global acumulada nas quatro cavidades cardíacas."
    ],
    "correctIndex": 2,
    "explanation": "A Pressão de Pulso (Pulse Pressure, PP) é calculada por PP = PAS - PAD. Numa pessoa jovem saudável com PA de 120/80 mmHg, a PP é de 40 mmHg. A sua magnitude depende de dois fatores biomecânicos principais: 1) O volume de ejeção sistólica (quanto maior o volume ejetado subitamente na aorta, maior a elevação da PAS); 2) A complacência aórtica (quanto mais rígida a parede aórtica, menor a sua capacidade de acomodação elástica e maior o pico pressórico gerado).",
    "distractorAnalysis": [
      "Está incorreta: a média ponderada ao longo do ciclo cardíaco corresponde à Pressão Arterial Média (PAM) e não à Pressão de Pulso ou diferencial.",
      "Está incorreta: confunde a amplitude de pulso arterial sistémica com o gradiente transvalvular aórtico medido por ecocardiograma na via de saída ventricular.",
      "Está incorreta: a pressão de pulso é a subtração PAS - PAD na artéria periférica e não a soma da pressão arterial sistólica com a pressão venosa central."
    ],
    "nursingApplication": "O valor da Pressão de Pulso é um sinal vital precioso na triagem de enfermagem: uma PP estreitada (<25-30 mmHg, como numa PA de 90/70 mmHg) sinaliza choque hipovolémico iminente, insuficiência cardíaca grave ou tamponamento cardíaco; uma PP muito alargada (>60-80 mmHg, como 160/60 mmHg) sugere regurgitação aórtica severa ou arteriosclerose aórtica avançada."
  },
  {
    "id": 4035,
    "topicId": 4,
    "question": "O fenómeno biofísico de 'Aderência Endotelial' ou condição de não-deslizamento (no-slip condition) no escoamento laminar de fluidos viscosos estabelece que:",
    "options": [
      "O fluido desliza livremente ao longo do endotélio sem qualquer força de atrito superficial, atingindo a velocidade máxima precisamente na camada junto à parede do vaso.",
      "As hemácias sofrem repulsão eletrostática parietal permanente que as força a deslocar-se a uma velocidade superior à de todas as moléculas de água plasmáticas vizinhas.",
      "A velocidade do fluido é rigorosamente uniforme em todos os pontos da secção circular, mantendo-se igual junto ao endotélio e no centro geométrico do lúmen vascular.",
      "A lâmina microscópica de fluido em contacto imediato com a superfície parietal interna do vaso tem velocidade nula (v = 0) relativamente à parede vascular sólida."
    ],
    "correctIndex": 3,
    "explanation": "A condição de não-deslizamento é um princípio basilar da mecânica dos fluidos viscosos: devido às forças de atração intermolecular (adesão) entre as moléculas do fluido e a superfície sólida rugosa da parede endotelial, a velocidade da primeira camada molecular de fluido em contacto com o vaso é zero (v = 0). As camadas adjacentes de fluido vão escorregando umas sobre as outras com atrito viscoso interno, gerando o perfil parabólico com velocidade máxima no eixo central.",
    "distractorAnalysis": [
      "Está incorreta: violaria a física fundamental dos fluidos viscosos, na qual as forças adesivas intermoleculares fixam a primeira camada de líquido à superfície sólida.",
      "Está incorreta: a carga negativa da glicocálix endothelial não anula o atrito viscoso fluido nem gera velocidades supranormais de hemácias junto à superfície endotelial.",
      "Está incorreta: o perfil parabólico de Poiseuille exige que a velocidade varie desde zero na periferia endotelial até ao seu valor máximo no centro do vaso cilíndrico."
    ],
    "nursingApplication": "A condição de não-deslizamento explica por que as bactérias formadoras de biofilme (como Staphylococcus aureus em cateteres vasculares) conseguem colonizar a parede interna de tubos de teflon e poliuretano mesmo sob caudais rápidos de fluidoterapia: junto à parede do cateter, a velocidade do fluido é praticamente zero, permitindo a adesão bacteriana sem ser arrastada pelo fluxo central."
  },
  {
    "id": 4036,
    "topicId": 4,
    "question": "Na administração de Nutrição Parentérica Total (NPT) com alta osmolaridade (>800-900 mOsm/L), porque é que a infusão deve ser feita obrigatoriamente através de um Cateter Venoso Central (CVC) posicionado na Veia Cava Superior e NUNCA através de uma veia periférica da mão ou braço?",
    "options": [
      "O elevado caudal na veia cava superior (~2000-2500 mL/min) dilui a solução hiperosmolar em segundos, prevenindo flebite química e trombose venosa periférica severa.",
      "A veia cava superior possui válvulas espessas e reforçadas que protegem a aurícula direita contra o contacto com soluções nutricionais com alta carga de glicose hipertónica.",
      "A pressão na veia cava superior é marcadamente negativa em todo o ciclo, aspirando a nutrição parentérica sem necessidade de recorrer a bombas volumétricas de infusão.",
      "As veias periféricas possuem endotélio com menor densidade de glicocálix, o que precipita agregados proteicos insolúveis antes da sua distribuição na circulação sistémica."
    ],
    "correctIndex": 0,
    "explanation": "A diluição hidrodinâmica rápida depende diretamente do caudal volumétrico de sangue disponível no vaso receptor (Q = A · v). Nas veias periféricas do antebraço (como a veia basílica ou cefálica), o diâmetro é pequeno (~2-4 mm) e o fluxo é modesto (~20 a 50 mL/min): uma solução hiperosmolar desidrata osmoticamente as células endoteliais da parede vascular por contacto concentrado mantido, desencadeando flebite química severa, necrose parietal e trombose. Na veia cava superior (diâmetro ~20 mm, caudal de ~2500 mL/min), a diluição é instantânea e inócua.",
    "distractorAnalysis": [
      "Está incorreta: as veias cavas não possuem válvulas venosas na sua desembocadura auricular; a segurança assenta unicamente na rápida diluição pelo imenso débito sanguíneo central.",
      "Está incorreta: a pressão na veia cava é positiva em grande parte do ciclo (PVC normal 2-6 mmHg) e a NPT exige obrigatoriamente infusão por bomba volumétrica controlada.",
      "Está incorreta: a justificação biológica é a prevenção de flebite osmótica e trombose endotelial e não qualquer diferença metabólica enzimática de degradação periférica de aminoácidos."
    ],
    "nursingApplication": "A verificação da localização da ponta do cateter venoso central (na junção cavo-atrial por radiografia de tórax) antes de iniciar a infusão de NPT é um procedimento de segurança obrigatório em enfermagem para prevenir tromboses maciças e necrose da parede vascular."
  },
  {
    "id": 4037,
    "topicId": 4,
    "question": "Durante a diálise renal em doentes com insuficiência renal crónica terminal, a criação cirúrgica de uma 'Fístula Arteriovenosa' (FAV, ex: radiocefálica) conecta diretamente uma artéria a uma veia superficial do antebraço. Qual é a repercussão hidrodinâmica local na parede da veia ao longo das semanas seguintes (maturação da FAV)?",
    "options": [
      "A veia colapsa progressivamente devido à elevada pressão circundante, transformando-se num cordão fibroso rígido que impede a formação de aneurismas venosos recidivantes.",
      "A veia é sujeita a elevada pressão e fluxo pulsátil turbulento com cisalhamento elevado, sofrendo arterialização com espessamento da média e dilatação do calibre vascular.",
      "As paredes venosas atrofiam rapidamente por desuso mecânico, reduzindo a espessura endotelial para permitir punções com agulhas finas de insulina sem dor associada.",
      "O fluxo venoso torna-se perfeitamente laminar e estagnado, promovendo a formação deliberada de uma camada protetora de fibrina que reveste a túnica íntima operada."
    ],
    "correctIndex": 1,
    "explanation": "Normalmente, as veias transportam sangue sob pressões muito baixas (~5 a 10 mmHg) e escoamento laminar lento. Ao ser anastomosada diretamente à artéria radial (pressão de ~100 mmHg), a veia cefálica é submetida a um caudal prodigioso (>500 a 1000 mL/min). A elevada tensão de cisalhamento tangencial (shear stress) induz a síntese endotelial contínua de óxido nítrico e fatores tróficos: em 6 a 8 semanas, a veia dilata-se amplamente e as suas paredes tornam-se espessas e resistentes como artérias musculares ('maturação da fístula').",
    "distractorAnalysis": [
      "Está incorreta: a fístula arteriovenosa induz dilatação e hipertrofia marcadas da veia ('arterialização') devido à elevação do fluxo e tensão parietal, e não fibrose atrófica.",
      "Está incorreta: a camada média da veia sofre hiperplasia de células musculares lisas para suportar as elevadas pressões arteriais, aumentando a espessura da parede.",
      "Está incorreta: o fluxo numa FAV é de débito muito elevado com sopro e frémito audíveis e palpáveis (fluxo turbulento de alto caudal) e não estagnação laminar protetora."
    ],
    "nursingApplication": "O enfermeiro avalia diariamente a permeabilidade da FAV através da palpação do 'Thrill' (sensação táctil de vibração contínua de turbulência na veia) e auscultação do 'Bruit' (sopro vascular audível com estetoscópio). A ausência súbita de thrill ou bruit indica trombose aguda da fístula, requerendo desobstrução de urgência por cirurgia vascular."
  },
  {
    "id": 4038,
    "topicId": 4,
    "question": "Na reoxigenação de tecidos e perfusão da microcirculação, por que razão uma solução de Cristalóides (como o Soro Fisiológico a 0,9%) administrada por via endovenosa não permanece integralmente no compartimento intravascular após a infusão?",
    "options": [
      "As hemácias fagocitam ativamente as moléculas de cloreto de sódio infundidas, eliminando o soluto por excreção vesicular acelerada nos capilares sinusóides esplénicos.",
      "O soro fisiológico transforma-se instantaneamente em vapor no interior do átrio direito devido à temperatura corporal basal, sendo exalado pelos alvéolos pulmonares.",
      "O endotélio capilar é altamente permeável a água e eletrólitos livres, fazendo com que 75-80% do volume infundido se redistribua para o espaço intersticial em 30 a 60 minutos.",
      "A totalidade do volume infundido é depurada imediatamente pelos glomérulos renais em escassos cinco minutos através de filtração mecânica direta sem reabsorção tubular."
    ],
    "correctIndex": 2,
    "explanation": "A parede capilar atua como uma membrana semipermeável que retém proteínas (coeficiente de reflexão da albumina σ ≈ 0,95), mas é fenestrada para pequenas moléculas (iões e água líquida, σ ≈ 0). O cloreto de sódio a 0,9% distribui-se uniformemente por todo o compartimento de líquido extracelular (LEC), que é composto por 20% de plasma intravascular e 80% de líquido intersticial. Portanto, de cada 1000 mL de soro fisiológico infundido, apenas cerca de 200 a 250 mL permanecem no interior dos vasos após a redistribuição.",
    "distractorAnalysis": [
      "Está incorreta: os eritrócitos não fagocitam iões sódio nem cloreto; a distribuição volémica segue os equilíbrios osmóticos e hidrostáticos clássicos de Starling.",
      "Está incorreta: as soluções de fluidoterapia líquida aquosa mantêm o estado líquido no organismo, sofrendo distribuição nos compartimentos hídricos corporais.",
      "Está incorreta: a excreção renal de sódio e água é regulada hormonalmente (ADH, aldosterona) e demora horas a equilibrar uma sobrecarga de cristaloides no espaço extracelular."
    ],
    "nursingApplication": "Na reanimação de um doente desidratado ou chocado, o enfermeiro sabe que para restaurar um défice intravascular de 500 mL são necessários cerca de 1500 a 2000 mL de cristalóides por causa dessa redistribuição para o interstício, devendo vigiar o aparecimento de crepitações pulmonares basais que indiquem sobrecarga volémica intersticial."
  },
  {
    "id": 4039,
    "topicId": 4,
    "question": "O gradiente de pressão hidrodinâmica (ΔP) ao longo de um vaso sanguíneo cilíndrico reto decorre da dissipação de energia mecânica por atrito viscoso. Em termos biofísicos, como se expressa a conservação de energia num fluido viscoso real?",
    "options": [
      "A energia mecânica total aumenta espontaneamente ao longo do leito vascular por captação de energia térmica ambiente gerada pelo metabolismo celular periférico vizinho.",
      "A pressão hidrostática mantém-se constante entre a raiz da aorta e os capilares terminais, pois a dissipação viscosa é totalmente compensada pelo potencial elétrico celular.",
      "A perda de carga hidrostática num vaso real é estritamente reversível, recuperando-se integralmente a pressão inicial logo que o sangue penetra no compartimento venoso.",
      "A energia mecânica total diminui continuamente ao longo do fluxo devido ao atrito viscoso intermolecular, sendo a perda de carga convertida em calor dissipado nos tecidos."
    ],
    "correctIndex": 3,
    "explanation": "Ao contrário dos fluidos ideais do Teorema de Bernoulli (onde a energia mecânica seria conservada indefinidamente), os fluidos reais possuem viscosidade interna (atrito entre lâminas de fluido e com a parede vascular). Esse atrito dissipa energia mecânica sob a forma de microcalor térmico irreversível, resultando numa queda contínua da pressão no sentido do fluxo (gradiente pressórico ΔP = P_entrada - P_saída > 0). É esta perda contínua que obriga o coração a bombear sem cessar ao longo de toda a vida.",
    "distractorAnalysis": [
      "Está incorreta: violaria a Primeira e Segunda Leis da Termodinâmica; o escoamento viscoso de fluidos reais dissipa irreversivelmente energia mecânica sob a forma de calor.",
      "Está incorreta: a pressão cai substancialmente desde ~100 mmHg na aorta até ~30 mmHg nos capilares devido à elevada resistência viscosa dissipada nos leitos de escoamento.",
      "Está incorreta: o trabalho de atrito viscoso é termodinamicamente irreversível, exigindo a potência contrátil miocárdica contínua para restabelecer a pressão do circuito."
    ],
    "nursingApplication": "A perda de carga hidrodinâmica explica por que as artérias periféricas mais distais (como as artérias digitais dos pés e mãos) são as primeiras a sofrer isquemia e necrose em estados de choque ou hipotermia: a energia do fluxo esgota-se antes de conseguir vencer a resistência dos vasos distais, orientando o enfermeiro a monitorizar o tempo de preenchimento capilar distal."
  },
  {
    "id": 4040,
    "topicId": 4,
    "question": "A Pressão Venosa Central (PVC) é medida clinicamente na veia cava superior ou átrio direito através de um cateter venoso central conectado a uma coluna de água ou transdutor de pressão eletrónico. Qual é o valor fisiológico normal da PVC num adulto em decúbito dorsal e o que reflete primariamente?",
    "options": [
      "Valores entre 2 e 6 mmHg (~3 a 8 cm H₂O), refletindo primordialmente a pré-carga do ventrículo direito e a adequação do volume intravascular de retorno ao coração.",
      "Valores entre 20 e 35 mmHg (~27 a 48 cm H₂O), refletindo diretamente a resistência vascular sistémica arteriolar e a contratilidade isovolumétrica do miocárdio esquerdo.",
      "Valores invariavelmente negativos entre -10 e -20 mmHg em todas as fases do ciclo, assegurando a aspiração passiva e contínua do sangue venoso das veias femorais.",
      "Valores equivalentes à pressão arterial diastólica periférica sistémica (~80 mmHg), garantindo o equilíbrio pressórico simétrico entre as câmaras direitas e esquerdas."
    ],
    "correctIndex": 0,
    "explanation": "A PVC representa a pressão de enchimento do átrio e ventrículo direitos no final da diástole (pré-carga cardíaca direita). Os valores normais em adultos saudáveis situam-se entre 2 e 6 mmHg (ou 3 a 8 cm H₂O, sabendo que 1 mmHg ≈ 1,36 cm H₂O). Valores inferiores a 2 mmHg indicam hipovolemia severa (desidratação, choque hemorrágico); valores superiores a 10-12 mmHg indicam sobrecarga hídrica, insuficiência cardíaca congestiva ou tamponamento cardíaco.",
    "distractorAnalysis": [
      "Está incorreta: valores de 20 a 35 mmHg indicam hipertensão venosa grave, falência ventricular direita ou sobrecarga hídrica extrema (a PVC basal normal é de 2 a 6 mmHg).",
      "Está incorreta: a PVC não é negativa de -10 a -20 mmHg em decúbito dorsal; tais pressões implicariam colapso hemodinâmico ou risco crítico de embolia gasosa central.",
      "Está incorreta: a circulação venosa central opera a baixas pressões (2-6 mmHg); valores de 80 mmHg igualariam a diastólica arterial sistémica, o que é fisiologicamente impossível."
    ],
    "nursingApplication": "Na monitorização da PVC por coluna de água em enfermagem, o enfermeiro calibra o nível zero da régua graduada exatamente no ponto flebostático do doente (4.º espaço intercostal na linha média axilar). Um erro de nivelamento de apenas 5 cm para cima ou para baixo altera a leitura em quase 4 mmHg, falseando a decisão médica de administrar mais líquidos ou diuréticos."
  },
  {
    "id": 4041,
    "topicId": 4,
    "question": "Na oxigenoterapia de alto débito, a cânula nasal de alto fluxo (CNAF) aquece e humidifica o gás medicinal antes de o entregar ao doente a fluxos de até 60 L/min. Qual é o fundamento biofísico da regulação da temperatura e viscosidade dos gases neste dispositivo?",
    "options": [
      "Arrefecimento do fluxo gasoso a 15 °C para induzir vasoconstrição brônquica reflexa profunda, reduzindo a produção de exsudados exógenos nos doentes com pneumonia bacteriana.",
      "Aquecimento a 37 °C com 100% de humidade relativa, reduzindo o trabalho metabólico respiratório de condicionamento do gás e preservando o transporte mucociliar brônquico.",
      "Secagem total do fluxo de oxigénio gasoso através de filtros dessecantes de sílica, eliminando a resistência viscosa do ar para acelerar a difusão alveolar passiva do O₂.",
      "Insuflação contínua de ar comprimido hiperbárico a 3 atmosferas para dilatar mecanicamente as paredes da traqueia sem necessidade de ventilação mecânica invasiva."
    ],
    "correctIndex": 1,
    "explanation": "Quando o ser humano inala ar frio e seco a débitos elevados, a mucosa respiratória gasta uma quantidade massiva de energia térmica e água para aquecer e saturar o gás a 37 °C e 44 mg H₂O/L. O ar seco resseca o muco, imobiliza os cílios respiratórios e induz broncospasmo mecânico. A CNAF entrega gases condicionados na temperatura e humidade exatas do corpo humano, mantendo a reologia ideal das secreções e facilitando a expetoração.",
    "distractorAnalysis": [
      "Está incorreta: o arrefecimento a 15 °C provocaria broncospasmo, ressecamento e lesão da mucosa respiratória, contrariando o objetivo terapêutico da cânula nasal de alto fluxo.",
      "Está incorreta: administrar fluxos elevados de ar seco desidrataria e necrosaria o epitélio ciliar brônquico, acumulando rolhões de muco espesso e causando atelectasias graves.",
      "Está incorreta: a CNAF opera à pressão atmosférica convencional com débitos elevados de até 60 L/min, não constituindo um sistema de oxigenoterapia hiperbárica fechado."
    ],
    "nursingApplication": "A vigilância da CNAF pelo enfermeiro inclui assegurar que o reservatório de água estéril para inalação nunca se esgote e verificar a temperatura na linha aquecida, prevenindo a acumulação de condensado líquido (água no circuito) que poderia ser aspirado acidentalmente pelo doente com risco de asfixia."
  },
  {
    "id": 4042,
    "topicId": 4,
    "question": "Na fisiopatologia do choque hipovolémico, o 'Tempo de Preenchimento Capilar' (TPC) avaliado no leito ungueal de um dedo é um marcador hidrodinâmico vital de perfusão periférica. Qual é o valor fisiológico normal e o que significa um TPC prolongado (>3 segundos)?",
    "options": [
      "Valor normal entre 5 e 8 segundos; tempo inferior a 2 segundos traduz insuficiência valvular aórtica fulminante com regurgitação retrógrada para a raiz da aorta ascendente.",
      "Valor normal de 10 segundos em repouso; um tempo superior a 15 segundos reflete vasodilatação periférica generalizada mediada por ativação simpática adrenérgica intensa.",
      "Valor normal inferior a 2 segundos; tempo superior a 3 segundos indica vasoconstrição arteriolar compensatória com hipoperfusão periférica por choque ou desidratação.",
      "O teste avalia unicamente o grau de hidratação das lâminas de queratina subungueal, sem qualquer correlação clínica com o estado hemodinâmico sistémico do doente internado."
    ],
    "correctIndex": 2,
    "explanation": "O teste do preenchimento capilar consiste em comprimir firmemente a polpa digital ou leito ungueal durante 5 segundos (esvaziando o sangue microvascular capilar) e cronometrar o tempo que a pele leva a recuperar a coloração rosada inicial. Em condições normais, a reperfusão capilar ocorre em menos de 2 segundos. Em estados de choque, a resposta simpática induz intensa vasoconstrição adrenérgica na pele e extremidades, diminuindo o fluxo capilar periférico e prolongando o TPC para >3 a 4 segundos.",
    "distractorAnalysis": [
      "Está incorreta: o enchimento capilar normal ocorre em menos de 2 segundos; tempos de 5 a 8 segundos são francamente anormais e traduzem colapso da perfusão microvascular.",
      "Está incorreta: tempos longos de reperfusão capilar indicam vasoconstrição arteriolar periférica e lentificação do fluxo, e não vasodilatação por ativação simpática.",
      "Está incorreta: o TPC é um parâmetro hemodinâmico validado de perfusão tecidual periférica, com correlação direta com o débito cardíaco e a gravidade clínica do choque."
    ],
    "nursingApplication": "O TPC é uma ferramenta de triagem rápida, não-invasiva e de altíssima sensibilidade clínica à cabeceira do doente: um TPC > 3 segundos, associado a extremidades frias e pele mosqueada (livedo reticularis), alerta o enfermeiro para hipoperfusão sistémica grave antes mesmo da queda franca da pressão arterial medida na braçadeira (choque compensado)."
  },
  {
    "id": 4043,
    "topicId": 4,
    "question": "O gradiente de pressão transvalvular através de uma válvula aórtica estenosada é estimado na prática cardiológica através da 'Equação de Bernoulli Modificada': ΔP = 4 · v², onde v é a velocidade máxima do jato de sangue em m/s medida pelo Ecocardiograma Doppler. Se a velocidade máxima do jato na estenose for de 4 m/s, qual é o gradiente de pressão de pico gerado?",
    "options": [
      "16 mmHg, correspondendo à aplicação linear simples da velocidade sem ponderação quadrática do fator de conversão de densidade hidrodinâmica (ΔP = 4 · 4 = 16 mmHg).",
      "32 mmHg, calculada pela multiplicação direta do dobro da velocidade pelo coeficiente de atrito laminar do sangue periférico humano (ΔP = 2 · 16 = 32 mmHg).",
      "128 mmHg, aplicando o fator de amplificação geométrica cúbica de Poiseuille para orifícios valvulares estenosados em regime turbulento (ΔP = 2 · 4³ = 128 mmHg).",
      "64 mmHg, aplicando a fórmula simplificada de Bernoulli para o pico de velocidade valvular aórtico registado pelo ecocardiograma (ΔP = 4 · 4² = 4 · 16 = 64 mmHg)."
    ],
    "correctIndex": 3,
    "explanation": "A equação simplificada de Bernoulli para ecocardiografia clínica despreza termos menores de atrito e velocidade proximal: ΔP = 1/2 · ρ · v² ≈ 4 · v² (adotando a densidade do sangue em unidades de mmHg). Substituindo v = 4 m/s: ΔP = 4 × (4)² = 4 × 16 = 64 mmHg. Este gradiente representa a sobrecarga de pressão que o ventrículo esquerdo tem de gerar acima da pressão aórtica para conseguir ejetar o sangue através do orifício estenosado estreito.",
    "distractorAnalysis": [
      "Está incorreta: esquece a potenciação quadrática da velocidade (v²), calculando 4 · 4 em vez de 4 · 4² = 64 mmHg, o que subestimaria gravemente a estenose.",
      "Está incorreta: calcula um valor intermédio sem fundamentação matemática na derivação física da equação de Bernoulli simplificada (ΔP = 1/2 ρ v² ≈ 4 v² para o sangue).",
      "Está incorreta: introduz um expoente cúbico inadequado; a energia cinética depende da velocidade ao quadrado (1/2 m v²), resultando no fator quadrático clássico 4 v²."
    ],
    "nursingApplication": "Um gradiente de pressão aórtica de 64 mmHg classifica a estenose aórtica como severa (>40 mmHg de gradiente médio): o ventrículo esquerdo está submetido a uma sobrecarga pressórica crónica colossal, sofrendo hipertrofia concêntrica. O enfermeiro monitoriza queixas de síncope aos esforços, angina e dispneia, preparando o doente para substituição cirúrgica ou percutânea (TAVI) da válvula."
  },
  {
    "id": 4044,
    "topicId": 4,
    "question": "A manobra de elevação passiva dos membros inferiores (Passive Leg Raising - PLR) a 45° num doente com hipotensão profunda funciona como uma prova de carga hídrica endógena reversível. Qual é o mecanismo biofísico que a fundamenta?",
    "options": [
      "A gravidade desloca cerca de 300-500 mL de sangue venoso das pernas para a circulação central, elevando a pré-carga e o débito cardíaco como prova volémica reversível.",
      "A elevação das pernas aumenta a resistência vascular arterial dos membros inferiores, forçando o coração a bater com maior frequência para vencer a pós-carga gerada.",
      "A manobra induz compressão das artérias femorais pelo ligamento inguinal, aumentando a oxigenação cerebral através de um mecanismo de contrapulsação mecânica externa.",
      "O retorno venoso é bloqueado temporariamente nas veias ilíacas comuns, permitindo ao miocárdio descansar durante cerca de dois a três minutos sem carga volémica."
    ],
    "correctIndex": 0,
    "explanation": "Ao elevar passivamente os membros inferiores a 45° com o tronco do doente na horizontal, a coluna de sangue venoso drena caudalmente por gravidade para a veia cava inferior e átrio direito. Isto equivale a uma 'autotransfusão' rápida e instantânea de cerca de 300 a 450 mL de sangue. Se o coração do doente operar na parte ascendente da curva de Frank-Starling (responsivo a fluidos), o volume de ejeção e a pressão arterial sobem temporariamente nos primeiros 60 a 90 segundos; ao baixar as pernas, o efeito reverte-se completamente.",
    "distractorAnalysis": [
      "Está incorreta: a elevação das pernas mobiliza volume venoso capacitivo para o átrio direito (aumento da pré-carga), não atuando por aumento patológico da resistência arteriolar.",
      "Está incorreta: não envolve compressão oclusiva das artérias femorais nem contrapulsação mecânica; o efeito decorre da translocação do reservatório venoso por gravidade.",
      "Está incorreta: a elevação passiva dos membros inferiores não bloqueia o fluxo venoso; pelo contrário, acelera a drenagem venosa periférica para a veia cava inferior."
    ],
    "nursingApplication": "O teste de elevação passiva das pernas é um dos melhores métodos funcionais aplicados pelo enfermeiro de cuidados intensivos para saber se um doente chocado beneficiará da administração de soros adicionais (evitando a administração deletéria de fluidos a doentes não-responsivos que apenas desenvolveriam edema pulmonar)."
  },
  {
    "id": 4045,
    "topicId": 4,
    "question": "Na terapêutica da Trombose Venosa Profunda (TVP), por que motivo a imobilização prolongada no leito após uma grande cirurgia constitui um dos três fatores fundamentais da Tríade de Virchow para a formação de trombos intravasculares?",
    "options": [
      "O repouso no leito provoca a fragmentação traumática das paredes das grandes artérias, libertando colagénio solúvel que oclui mecanicamente a veia femoral homolateral.",
      "A imobilização no leito anula a ação da bomba muscular da barriga da perna, provocando estase venosa profunda que facilita a ativação local da cascata de coagulação sanguínea.",
      "A posição deitada aumenta a velocidade do sangue nos membros inferiores para valores supersónicos, gerando hemólise mecânica aguda que satura a microcirculação venosa.",
      "O músculo tríceps sural inativo passa a consumir plaquetas de forma desregulada, gerando um estado de trombocitopénia grave com hemorragias espontâneas intramusculares."
    ],
    "correctIndex": 1,
    "explanation": "A Tríade de Virchow (Rudolf Virchow, 1856) define os três fatores etiológicos da trombose: 1) Estase venosa (lentificação do fluxo); 2) Lesão endotelial; 3) Hipercoagulabilidade. Quando o doente fica imóvel no leito, a falta de bombeamento da fáscia muscular da barriga da perna reduz a velocidade do sangue venoso a valores residuais. A estase elimina a dispersão hidrodinâmica dos fatores de coagulação e a sua neutralização pelo fluxo rápido, permitindo que a trombina e fibrina formem redes que aprisionam eritrócitos (trombo vermelho venoso).",
    "distractorAnalysis": [
      "Está incorreta: o repouso no leito não causa laceração arterial nem libertação de colagénio solúvel na circulação; o fator da tríade de Virchow envolvido é a estase venosa.",
      "Está incorreta: a imobilização diminui drasticamente a velocidade do sangue venoso em vez de a aumentar, eliminando o esvaziamento promovido pelas contrações musculares.",
      "Está incorreta: a estase favorece a trombose por acúmulo de fatores ativados e contacto plaquetário com o endotélio íntegro ou inflamado, e não consumo de plaquetas pelo músculo."
    ],
    "nursingApplication": "O enfermeiro atua diretamente na prevenção da estase venosa da Tríade de Virchow: estimulação da mobilização precoce no pós-operatório, ensino de exercícios de flexão-extensão ativa dos tornozelos no leito, aplicação rigorosa de meias de compressão elástica graduada e de botas de compressão pneumática intermitente, bem como administração de heparina de baixo peso molecular (HBPM)."
  },
  {
    "id": 4046,
    "topicId": 4,
    "question": "Durante a administração de uma solução por gravidade com um sistema macrogotas padronizado (20 gts/mL), foi prescrito ao doente a infusão de 500 mL de Soro Glicosado a 5% ao longo de 4 horas. Qual é o débito de gotejamento que o enfermeiro deve calibrar manualmente na câmara de gotas?",
    "options": [
      "Aproximadamente 21 gotas por minuto, calculando Débito = (500 · 10) / (4 · 60), usando o fator de calibração reduzido de transfusão sanguínea para soluções eletrolíticas.",
      "Aproximadamente 63 gotas por minuto, calculando Débito = (500 · 30) / (4 · 60), assumindo erradamente que o equipo macrogotas debita trinta gotas por cada mililitro infundido.",
      "Aproximadamente 42 gotas por minuto, calculando Débito (gts/min) = (Volume em mL · Fator de gotas) / (Tempo em horas · 60 minutos) = (500 · 20) / (4 · 60) ≈ 41,7 gts/min.",
      "Aproximadamente 125 gotas por minuto, dividindo simplesmente o volume total pelo número de horas de infusão sem converter a taxa de tempo em minutos na câmara graduada."
    ],
    "correctIndex": 2,
    "explanation": "A fórmula de cálculo de débito em gotas/minuto é: Gotas/min = (Volume em mL × Fator de gotas) / (Tempo em minutos). Substituindo os valores dados: Gotas/min = (500 mL × 20 gotas/mL) / (4 horas × 60 minutos) = 10000 / 240 = 41,66... Arredondando para o número inteiro mais próximo, o enfermeiro calibra o regulador de rolete para 42 gotas por minuto.",
    "distractorAnalysis": [
      "Está incorreta: utiliza erradamente o fator 10 gts/mL (fator de alguns hemotransfusores) em vez do padrão universal de 20 gotas/mL para equipos macrogotas comuns.",
      "Está incorreta: assume um fator de 30 gotas/mL sem fundamentação na calibração física dos equipos de fluidoterapia utilizados no contexto clínico hospitalar.",
      "Está incorreta: divide 500 mL por 4 horas obtendo 125 mL/h, mas esquece de converter para gotas por minuto através do fator 20 gts/mL e divisão por 60 minutos."
    ],
    "nursingApplication": "O cálculo manual e a titulação rigorosa de gotas/minuto pelo relógio são competências clássicas vitais da prática de enfermagem em contextos onde não existam bombas de infusão elétricas disponíveis, prevenindo quer a hipovolemia por infusão lenta quer a sobrecarga hídrica por desrespeito dos tempos prescritos."
  },
  {
    "id": 4047,
    "topicId": 4,
    "question": "O fenómeno hemodinâmico de 'Hipertensão Renovascular' por estenose da artéria renal ilustra uma resposta sistémica à alteração local da Lei de Poiseuille e do Efeito Venturi. Como reage o rim a este estreitamento arterial?",
    "options": [
      "O rim estenosado aumenta a excreção de sódio e água para reduzir o volume plasmático, gerando hipotensão arterial profunda refratária a fármacos vasopressores endovenosos.",
      "A arteríola aferente renal dilata ao máximo e bloqueia a filtração glomerular, provocando alcalose metabólica severa por retenção contínua de iões bicarbonato no túbulo distal.",
      "O rim contralateral saudável sofre atrofia isquémica imediata devido à migração de anticorpos monoclonais citotóxicos sintetizados pelo endotélio da artéria renal estenosada.",
      "A estenose arterial renal reduz a pressão hidrostática a jusante; o aparelho justaglomerular liberta renina, ativando o eixo aldosterona com vasoconstrição e hipertensão sistémica."
    ],
    "correctIndex": 3,
    "explanation": "Pela Lei de Poiseuille e perda de carga no estreitamento, a estenose mecânica da artéria renal provoca uma queda acentuada na pressão de perfusão intrarrenal. As células justa-glomerulares renais são barorrecetores mecano-sensíveis: ao sentirem baixa pressão hidrostática local, ativam o sistema Renina-Angiotensina-Aldosterona (SRAA). A angiotensina II produz potente vasoconstrição arteriolar generalizada e a aldosterona retém sódio e água nos túbulos, elevando a pressão arterial sistémica em todo o corpo (hipertensão renovascular de Goldblatt).",
    "distractorAnalysis": [
      "Está incorreta: a resposta justaglomerular à hipoperfusão promove a retenção e não a perda de sal e água, ativando o sistema renina-angiotensina-aldosterona que eleva a PA.",
      "Está incorreta: o mecanismo fisiopatológico produz vasoconstrição arteriolar generalizada e retenção de volume via angiotensina II e aldosterona, originando hipertensão grave.",
      "Está incorreta: o rim contralateral sofre sobrecarga pressórica da hipertensão sistémica e não atrofia autoimune por anticorpos endoteliais da estenose."
    ],
    "nursingApplication": "Na consulta de enfermagem ou internamento, um doente jovem com hipertensão severa e refratária a múltiplos anti-hipertensores ou um sopro audível no flanco abdominal deve suscitar a suspeita de estenose da artéria renal, cabendo ao enfermeiro registar e encaminhar o achado para ecodoppler arterial das artérias renais."
  },
  {
    "id": 4048,
    "topicId": 4,
    "question": "Na avaliação de doentes com Doença Arterial Periférica (DAP) dos membros inferiores, o enfermeiro utiliza um Doppler vascular portátil para calcular o 'Índice Tornozelo-Braço' (ITB / Ankle-Brachial Index). Como é calculado este índice e qual o seu valor normal?",
    "options": [
      "ITB = Maior PAS no Tornozelo / Maior PAS no Braço; o intervalo fisiológico de normalidade situa-se habitualmente entre 0,90 e 1,30 em indivíduos adultos saudáveis.",
      "ITB = Maior PAD no Tornozelo / Maior PAD no Braço; o intervalo fisiológico de normalidade situa-se entre 0,50 e 0,70, indicando ausência de calcificação das artérias femorais.",
      "ITB = Pressão de Pulso no Tornozelo multiplicado pela PAS no Braço; o valor fisiológico de referência deve ser sempre superior a 2,50 em repouso nos membros inferiores.",
      "ITB = Média aritmética das pressões diastólicas de todos os membros periféricos; valores normais devem coincidir rigorosamente com a pressão venosa central monitorizada."
    ],
    "correctIndex": 0,
    "explanation": "O ITB é o teste de eleição não-invasivo para diagnóstico de insuficiência arterial obstrutiva das pernas. Com uma braçadeira de pressão e sonda de ultrassons Doppler contínuo: mede-se a PAS nas artérias pediosa e tibial posterior de cada perna e nas artérias braquiais de ambos os braços. Em indivíduos saudáveis, a PAS no tornozelo é ligeiramente superior à do braço por reflexão de ondas, pelo que ITB normal varia entre 0,90 e 1,30. Valores inferiores a 0,90 confirmam estenoses arteriais significativas (DAP); valores <0,40 indicam isquemia crítica com risco de amputação.",
    "distractorAnalysis": [
      "Está incorreta: o cálculo do ITB utiliza exclusivamente as pressões sistólicas (PAS) e não as diastólicas (PAD), e valores entre 0,50 e 0,70 traduzem doença arterial obstrutiva moderada.",
      "Está incorreta: o índice é uma razão adimensional obtida pela divisão da PAS do tornozelo pela do braço, e não um produto multiplicativo com valores superiores a 2,50.",
      "Está incorreta: o índice tornozelo-braço compara pressões arteriais sistólicas segmentares e não médias de pressões diastólicas nem parâmetros da pressão venosa central."
    ],
    "nursingApplication": "A medição do ITB pelo enfermeiro é um pré-requisito indispensável de segurança antes de aplicar ligaduras ou meias de compressão elástica no tratamento de úlceras de perna: se o doente tiver um ITB < 0,60 a 0,70, qualquer compressão externa ocluirá o fluxo arterial residual já comprometido, provocando necrose e perda do membro."
  },
  {
    "id": 4049,
    "topicId": 4,
    "question": "O refluxo valvular venoso crónico nos membros inferiores leva ao desenvolvimento de Varizes e Síndrome Pós-Trombótica. Qual é o mecanismo biomecânico subjacente a esta insuficiência?",
    "options": [
      "Hipertrofia elástica exagerada das válvulas venosas que ocluem permanentemente o lúmen das veias safenas, impedindo qualquer drenagem venosa em direção à veia femoral.",
      "Incompetência das válvulas venosas semilunares parietais, permitindo refluxo retrógrado por gravidade em ortostatismo com hipertensão venosa ambulatória e varizes tortuosas.",
      "Espessamento miogénico primário da parede arterial tibial que desvia fluxo arterial sob alta pressão diretamente para as vénulas dérmicas através de canais anómalos adquiridos.",
      "Degradação autoimune da túnica adventícia das veias profundas mediada por linfócitos T citotóxicos, sem qualquer relação causal com a bipedestação ou forças da gravidade."
    ],
    "correctIndex": 1,
    "explanation": "As veias dos membros inferiores possuem válvulas bicúspides que permitem a passagem do sangue apenas em sentido centrípeto/ascendente. Quando a parede da veia dilata por fraqueza hereditária do colagénio ou após lesão trombótica, as cúspides valvulares afastam-se e deixam de vedar. Ao colocar-se de pé, a gravidade faz o sangue refluir inferiormente: a 'bomba muscular' falha, a pressão venosa permanece cronicamente elevada mesmo durante a marcha ('hipertensão venosa ambulatória'), forçando líquido e eritrócitos para a derme com hiperpigmentação ocre e úlceras venosas.",
    "distractorAnalysis": [
      "Está incorreta: a insuficiência venosa decorre da perda de coaptação (incompetência) das cúspides valvulares e não de hipertrofia oclusiva luminal das válvulas venosas.",
      "Está incorreta: as varizes essenciais dos membros inferiores são uma afeção das veias superficiais e comunicantes/perfurantes sujeitas a hipertensão hidrostática venosa e refluxo.",
      "Está incorreta: a causa biofísica é a perda da função valvular unidirecional sob carga hidrostática gravitacional em indivíduos bípede, e não uma reação autoimune linfocitária isolada."
    ],
    "nursingApplication": "Na consulta de enfermagem de dermatologia e cuidados a feridas, o enfermeiro atua no epicentro da biofísica da insuficiência venosa: a terapia de compressão elástica multicamadas (gerando pressões controladas de 30 a 40 mmHg no tornozelo) aproxima mecanicamente as paredes das veias dilatadas, restaurando a coaptação valvular, reduzindo o refluxo retrógrado e permitindo a cicatrização das úlceras venosas."
  },
  {
    "id": 4050,
    "topicId": 4,
    "question": "Em doentes ventilados mecanicamente na Unidade de Cuidados Intensivos com pressão positiva expiratória final (PEEP) muito elevada (ex: PEEP > 15 cm H₂O), qual é o efeito hemodinâmico secundário sobre a pré-carga cardíaca e a Pressão Arterial Sistémica?",
    "options": [
      "A PEEP elevada expande ativamente o diâmetro da veia cava inferior por efeito de sucção gravitacional, duplicando a pré-carga e induzindo crise hipertensiva severa.",
      "A pressão positiva pulmonar elimina totalmente a resistência vascular da circulação alveolar, aumentando a perfusão tecidual periférica para níveis supranormais contínuos.",
      "A elevada pressão intratorácica comprime as veias cavas e o átrio direito, diminuindo o retorno venoso (pré-carga), o débito cardíaco e a pressão arterial sistémica.",
      "A ventilação mecânica com PEEP elevada estimula a libertação miocárdica maciça de adrenalina, acelerando a frequência cardíaca sem qualquer interferência na pré-carga."
    ],
    "correctIndex": 2,
    "explanation": "Na respiração espontânea fisiológica, a inspiração gera pressão pleural subatmosférica (negativa) que atua como uma 'bomba aspirativa' auxiliando o retorno venoso para o tórax. Na ventilação mecânica invasiva sob pressão positiva (especialmente com PEEP elevada), a pressão intratorácica permanece positiva ao longo de todo o ciclo respiratório. Isto comprime as veias cavas e o coração direito, elevando a contrapressão ao retorno venoso. O volume de enchimento diastólico ventricular desaba, provocando queda imediata do débito cardíaco e hipotensão arterial sistémica.",
    "distractorAnalysis": [
      "Está incorreta: a pressão positiva alveolar e intratorácica colapsa ou comprime as grandes veias de capacitância, diminuindo e não aumentando o retorno venoso ao coração.",
      "Está incorreta: a insuflação com PEEP alta comprime os capilares alveolares e aumenta a pós-carga do ventrículo direito (resistência vascular pulmonar), reduzindo o débito cardíaco.",
      "Está incorreta: a hipotensão induzida pela PEEP é primariamente mecânica-hidrodinâmica (redução da pré-carga das cavidades direitas) e não um efeito bloqueador de adrenalina."
    ],
    "nursingApplication": "Sempre que o médico ou enfermeiro especialista ajusta a PEEP ou a pressão inspiratória no ventilador mecânico em doentes com SDRA (Síndrome de Desconforto Respiratório Agudo), o enfermeiro vigia instantaneamente o monitor hemodinâmico: se ocorrer queda da PA e taquicardia reflexa, pode ser necessária a otimização volémica rápida ou o aumento da perfusão de vasopressores para compensar a perda mecânica de pré-carga."
  },
  {
    "id": 4051,
    "topicId": 4,
    "question": "Na hidrodinâmica circulatória aplicada à enfermagem, em relação a 'equação da continuidade Q = A · v na circulação sistémica', qual é a fundamentação biofísica correta?",
    "options": [
      "A velocidade do sangue é máxima no leito capilar periférico devido ao calibre microscópico de cada vaso individual, atingindo velocidades dez vezes superiores à velocidade de ejeção na aorta torácica.",
      "O débito volumétrico decresce progressivamente em cada bifurcação arterial, permitindo que a velocidade do sangue nos capilares permaneça rigorosamente igual à velocidade na raiz aórtica em repouso.",
      "A área da secção transversal da circulação reduz-se progressivamente da aorta para os capilares terminais, gerando um efeito de afunilamento que acelera o sangue para favorecer as trocas metabólicas.",
      "O débito é constante em cada secção e a velocidade é inversamente proporcional à área combinada; com os capilares a somar ~4500 cm² face aos ~4 cm² aórticos, a velocidade cai de ~35 cm/s para ~0,03 cm/s."
    ],
    "correctIndex": 3,
    "explanation": "Em biofísica circulatória, equação da continuidade Q = A · v na circulação sistémica explica-se pelo facto de que em qualquer sistema fechado de fluido incompressível estacionário, o débito volumétrico total (Q) é constante em cada secção transversal, sendo a velocidade (v) inversamente proporcional à área de secção transversal total (A). Como a área de secção transversal somada de todos os capilares sistémicos (~4500 cm²) é cerca de 800 vezes superior à área da aorta (~3 a 4 cm²), a velocidade do sangue cai de 30-40 cm/s na aorta para escassos 0,03 cm/s nos capilares.",
    "distractorAnalysis": [
      "Está incorreta: confunde a secção transversal de um único vaso capilar com a área transversal total somada de todos os capilares do organismo dispostos em paralelo (~4500 cm² vs ~4 cm² da aorta).",
      "Está incorreta: num circuito hidrodinâmico fechado em regime contínuo, a conservação da massa exige que o débito volumétrico global que atravessa cada nível da árvore vascular seja constante.",
      "Está incorreta: a área total combinada dos microvasos capilares é cerca de 800 a 1000 vezes maior do que a área da aorta, desacelerando o fluxo para valores mínimos e não acelerando por afunilamento."
    ],
    "nursingApplication": "O enfermeiro compreende que a extrema lentidão do sangue nos capilares é uma exigência biofísica vital para permitir o tempo necessário à difusão transcapilar de oxigénio, glicose e dióxido de carbono."
  },
  {
    "id": 4052,
    "topicId": 4,
    "question": "Na avaliação clínica e administração de terapêutica por um enfermeiro, como se manifesta a aplicação prática de 'equação da continuidade Q = A · v na circulação sistémica'?",
    "options": [
      "O enfermeiro compreende que a extrema lentidão do fluxo nos capilares é indispensável para fornecer o tempo de contacto necessário à difusão transcapilar de oxigénio, glicose e metabolitos vitais.",
      "O enfermeiro procura acelerar ativamente o fluxo capilar com infusão rápida de cristalóides em todos os doentes, sob a premissa de que velocidades lentas no leito periférico provocam isquemia iminente.",
      "O enfermeiro assume que a velocidade do sangue deve ser idêntica em qualquer vaso do corpo humano, ajustando a pressão arterial com vasopressores para igualar o fluxo capilar à velocidade aórtica basal.",
      "O enfermeiro utiliza torniquetes garroteadores venosos prolongados para estagnar totalmente o sangue nos membros inferiores, com o intuito de prolongar artificialmente a oxigenação nos tecidos podálicos."
    ],
    "correctIndex": 0,
    "explanation": "A aplicação de enfermagem para equação da continuidade Q = A · v na circulação sistémica baseia-se no princípio: O enfermeiro compreende que a extrema lentidão do sangue nos capilares é uma exigência biofísica vital para permitir o tempo necessário à difusão transcapilar de oxigénio, glicose e dióxido de carbono. Esta intervenção é essencial para a segurança hemodinâmica do doente.",
    "distractorAnalysis": [
      "Está incorreta: a velocidade capilar lenta (~0,3 mm/s) é um requisito biofísico saudável para a difusão molecular, não constituindo patologia isquémica que exija infusão rápida indiscriminada.",
      "Está incorreta: as velocidades sanguíneas variam naturalmente em várias ordens de grandeza entre os grandes vasos condutores e os capilares terminais em razão da equação da continuidade.",
      "Está incorreta: garrotear prolongadamente os membros provoca estase venosa severa, hipóxia, acidose láctica e risco de trombose, sendo estritamente contraindicado em enfermagem."
    ],
    "nursingApplication": "O enfermeiro compreende que a extrema lentidão do sangue nos capilares é uma exigência biofísica vital para permitir o tempo necessário à difusão transcapilar de oxigénio, glicose e dióxido de carbono."
  },
  {
    "id": 4053,
    "topicId": 4,
    "question": "Ao analisar as variáveis físicas que regem 'equação da continuidade Q = A · v na circulação sistémica', qual das seguintes afirmações expressa com rigor a relação hidrodinâmica entre pressão, velocidade e geometria vascular?",
    "options": [
      "A velocidade é inversamente proporcional ao comprimento do vaso condutor, dependendo a velocidade capilar apenas da distância anatómica milimétrica entre a arteríola pré-capilar e a vénula pós-capilar.",
      "A velocidade média é inversamente proporcional à secção transversal total somada, explicando por que razão a velocidade capilar é mínima apesar de cada capilar ter um calibre microscópico diminuto.",
      "A velocidade média independe da área geométrica de escoamento e varia em função direta da densidade de hemácias, sendo máxima onde a concentração celular for superior por estase ou hemoconcentração.",
      "A velocidade de circulação duplica a cada ramificação em virtude da divisão simétrica do fluxo, tornando o trânsito nos capilares muito mais veloz do que em qualquer tronco vascular arterial principal."
    ],
    "correctIndex": 1,
    "explanation": "A análise hidrodinâmica correta confirma que Como a área de secção transversal somada de todos os capilares sistémicos (~4500 cm²) é cerca de 800 vezes superior à área da aorta (~3 a 4 cm²), a velocidade do sangue cai de 30-40 cm/s na aorta para escassos 0,03 cm/s nos capilares. O domínio destas leis permite ao enfermeiro interpretar os fenómenos vasculares com rigor científico.",
    "distractorAnalysis": [
      "Está incorreta: pela equação da continuidade (v = Q/A), a velocidade linear do fluxo depende diretamente da área transversal combinada e não do comprimento longitudinal milimétrico do vaso.",
      "Está incorreta: a conservação da massa fluida incompressível impõe que a velocidade seja estritamente dependente da geometria luminal da secção transversal e do débito, e não da contagem globular.",
      "Está incorreta: ao ramificar-se, a área combinada dos ramos excede largamente a área do tronco de origem, o que provoca a desaceleração e não a duplicação contínua da velocidade."
    ],
    "nursingApplication": "O enfermeiro compreende que a extrema lentidão do sangue nos capilares é uma exigência biofísica vital para permitir o tempo necessário à difusão transcapilar de oxigénio, glicose e dióxido de carbono."
  },
  {
    "id": 4054,
    "topicId": 4,
    "question": "Na hidrodinâmica circulatória aplicada à enfermagem, em relação a 'velocidade sanguínea na aorta vs rede capilar global', qual é a fundamentação biofísica correta?",
    "options": [
      "A velocidade é mínima na aorta ascendente devido à elevada resistência da válvula aórtica e cresce de forma exponencial até aos capilares dérmicos, onde o fluxo atinge o seu valor de pico absoluto.",
      "A velocidade do sangue é perfeitamente homogénea em todas as ordens de vasos do corpo humano, garantindo que o tempo de circulação de um eritrócito seja rigorosamente o mesmo em qualquer órgão-alvo.",
      "A velocidade atinge o máximo na aorta ascendente e o mínimo no leito capilar; a ramificação em paralelo expande astronomicamente a secção somada, desacelerando o sangue sem alterar o débito cardíaco.",
      "A velocidade é máxima nas veias cavas e mínima na aorta abdominal, acelerando progressivamente do compartimento de alta pressão arterial para o compartimento de baixa pressão venosa sistémica."
    ],
    "correctIndex": 2,
    "explanation": "Em biofísica circulatória, velocidade sanguínea na aorta vs rede capilar global explica-se pelo facto de que a velocidade de escoamento atinge o seu valor máximo na aorta ascendente e o seu valor mínimo absoluto no leito microcirculatório capilar. A enorme ramificação arteriolar e capilar em paralelo expande astronomicamente a área de secção combinada, desacelerando o fluxo sem reduzir o débito cardíaco total (Q = ~5 L/min).",
    "distractorAnalysis": [
      "Está incorreta: a velocidade aórtica é a mais rápida (~30-50 cm/s sistólica) e a capilar a mais lenta (~0,03 cm/s); a válvula aórtica normal aberta não oferece resistência obstrutiva significativa.",
      "Está incorreta: os perfis de velocidade variam marcadamente na circulação sistémica, sendo a heterogeneidade das velocidades uma consequência física inevitável das variações de área vascular.",
      "Está incorreta: a aorta possui velocidade superior à das veias cavas (~30-50 cm/s vs ~10-15 cm/s) em virtude da sua menor secção transversal em comparação com a soma das veias cavas."
    ],
    "nursingApplication": "O enfermeiro avalia o tempo de recarga capilar (TRC normal < 2 segundos) nas extremidades para estimar a adequação da perfusão microvascular periférica e oxigenação tecidual."
  },
  {
    "id": 4055,
    "topicId": 4,
    "question": "Na avaliação clínica e administração de terapêutica por um enfermeiro, como se manifesta a aplicação prática de 'velocidade sanguínea na aorta vs rede capilar global'?",
    "options": [
      "O enfermeiro afere a velocidade aórtica através da contagem manual do pulso radial periférico, assumindo que frequências elevadas traduzem obrigatoriamente velocidades capilares aumentadas nos pés.",
      "O enfermeiro posiciona o membro doente sempre abaixo do nível da cama para que a gravidade converta a baixa velocidade capilar fisiológica num fluxo de alta velocidade equivalente ao da raiz aórtica.",
      "O enfermeiro aquece o braço do doente com compressas para forçar a contração arteriolar, reduzindo o calibre capilar para tentar acelerar a velocidade do sangue através de estenose mecânica induzida.",
      "O enfermeiro avalia o tempo de preenchimento capilar nas extremidades (normal < 2 segundos) para estimar a adequação da perfusão microvascular periférica, da vasodilatação e da oxigenação tecidual."
    ],
    "correctIndex": 3,
    "explanation": "A aplicação de enfermagem para velocidade sanguínea na aorta vs rede capilar global baseia-se no princípio: O enfermeiro avalia o tempo de recarga capilar (TRC normal < 2 segundos) nas extremidades para estimar a adequação da perfusão microvascular periférica e oxigenação tecidual. Esta intervenção é essencial para a segurança hemodinâmica do doente.",
    "distractorAnalysis": [
      "Está incorreta: a frequência do pulso radial reflete os ciclos mecânicos de contração cardíaca por minuto e não a velocidade linear real das partículas de sangue na raiz aórtica.",
      "Está incorreta: a posição dependente do membro aumenta a pressão hidrostática local e induz edema por estase venosa, sem alterar a relação fundamental da continuidade capilar.",
      "Está incorreta: o aquecimento cutâneo local promove termorregulação com vasodilatação arteriolar periférica e não vasoconstrição estenosante intencional."
    ],
    "nursingApplication": "O enfermeiro avalia o tempo de recarga capilar (TRC normal < 2 segundos) nas extremidades para estimar a adequação da perfusão microvascular periférica e oxigenação tecidual."
  },
  {
    "id": 4056,
    "topicId": 4,
    "question": "Ao analisar as variáveis físicas que regem 'velocidade sanguínea na aorta vs rede capilar global', qual das seguintes afirmações expressa com rigor a relação hidrodinâmica entre pressão, velocidade e geometria vascular?",
    "options": [
      "A enorme ramificação vascular em paralelo expande a área total somada do leito capilar (~4500 cm²), reduzindo a velocidade linear do sangue para escassos milímetros por segundo em regime contínuo.",
      "A divisão vascular em série diminui a área geométrica combinada, concentrando a pressão hidrostática em cada capilar para gerar velocidades lineares superiores às registadas na crossa aórtica torácica.",
      "O atrito contra o endotélio capilar neutraliza a energia mecânica de ejeção ventricular, fazendo com que o sangue capilar permaneça estagnado até ser aspirado pela pressão negativa do ventrículo direito.",
      "A velocidade linear do sangue depende exclusivamente da complacência elástica da veia cava inferior, mantendo-se constante em qualquer nível arterial ou capilar independentemente da secção de fluxo."
    ],
    "correctIndex": 0,
    "explanation": "A análise hidrodinâmica correta confirma que A enorme ramificação arteriolar e capilar em paralelo expande astronomicamente a área de secção combinada, desacelerando o fluxo sem reduzir o débito cardíaco total (Q = ~5 L/min). O domínio destas leis permite ao enfermeiro interpretar os fenómenos vasculares com rigor científico.",
    "distractorAnalysis": [
      "Está incorreta: a disposição anatómica dos leitos capilares é predominantemente em paralelo, o que soma astronomicamente as áreas e reduz a velocidade de acordo com a continuidade.",
      "Está incorreta: o sangue nos capilares não se encontra estagnado mas sim em escoamento laminar lento e contínuo (~0,3 mm/s), impulsionado pelo gradiente de pressão arteriolar residual.",
      "Está incorreta: a complacência da veia cava afeta a capacitância venosa central, mas a velocidade linear em cada segmento vascular obedece estritamente à razão Q / A local."
    ],
    "nursingApplication": "O enfermeiro avalia o tempo de recarga capilar (TRC normal < 2 segundos) nas extremidades para estimar a adequação da perfusão microvascular periférica e oxigenação tecidual."
  },
  {
    "id": 4057,
    "topicId": 4,
    "question": "Na hidrodinâmica circulatória aplicada à enfermagem, em relação a 'perfusão e tempo de trânsito capilar para trocas gasosas', qual é a fundamentação biofísica correta?",
    "options": [
      "O eritrócito permanece retido durante cerca de 15 a 20 segundos em cada capilar alveolar, sendo este tempo prolongado indispensável para que ocorra a difusão passiva de gases através da membrana respiratória.",
      "O eritrócito demora ~0,75 segundos a percorrer o capilar alveolar de 1 mm, tempo suficiente para atingir o equilíbrio de saturação de O₂ e CO₂ com o ar alveolar sob condições fisiológicas basais.",
      "O trânsito capilar alveolar dura escassos 0,005 segundos em repouso, exigindo mecanismos de transporte ativo primário por bombas de ATP para captar o oxigénio contra gradientes gasosos desfavoráveis.",
      "O tempo de passagem do sangue pelos capilares independe da velocidade do débito cardíaco, permanecendo perfeitamente fixo mesmo durante exercícios físicos extenuantes ou situações de choque hiperdinâmico."
    ],
    "correctIndex": 1,
    "explanation": "Em biofísica circulatória, perfusão e tempo de trânsito capilar para trocas gasosas explica-se pelo facto de que o eritrócito demora cerca de 0,75 segundos a percorrer um capilar pulmonar ou periférico de 1 mm de comprimento. Este tempo de trânsito é suficiente para atingir o equilíbrio de saturação de O₂ e CO₂ com os alvéolos pulmonares ou tecidos periféricos sob condições fisiológicas normais.",
    "distractorAnalysis": [
      "Está incorreta: um tempo de trânsito de 15 a 20 segundos implicaria uma lentificação patológica extrema com estagnação circulatória; o tempo fisiológico normal em repouso é de ~0,75 segundos.",
      "Está incorreta: as trocas gasosas alvéolo-capilares realizam-se por difusão passiva segundo a Lei de Fick e não por transporte ativo dependente de ATP, requerendo cerca de 0,25 s para equilíbrio.",
      "Está incorreta: durante o exercício físico o débito cardíaco pode aumentar 4 a 6 vezes, encurtando o tempo de trânsito capilar pulmonar para até cerca de 0,25 a 0,30 segundos."
    ],
    "nursingApplication": "Em estados de débito cardíaco elevado ou febre alta com taquicardia extrema, o enfermeiro sabe que o tempo de trânsito capilar encurta, podendo comprometer a oxigenação em pulmões com fibrose."
  },
  {
    "id": 4058,
    "topicId": 4,
    "question": "Na avaliação clínica e administração de terapêutica por um enfermeiro, como se manifesta a aplicação prática de 'perfusão e tempo de trânsito capilar para trocas gasosas'?",
    "options": [
      "Em doentes com febre e taquicardia, a oxigenação arterial melhora sempre de forma espontânea porque a circulação rápida força as moléculas de oxigénio a atravessar a barreira alveolar por convecção forçada.",
      "O enfermeiro administra sedativos potentes em todos os doentes hipoxémicos com o objetivo primordial de acelerar o débito cardíaco e reduzir o tempo de trânsito capilar alveolar para menos de 0,1 segundos.",
      "Em doentes com fibrose pulmonar e taquicardia extrema, o encurtamento do tempo de trânsito capilar pelo débito elevado pode impedir o equilíbrio gasoso alveolar completo, agravando a hipoxemia arterial.",
      "A saturação periférica de oxigénio medida por oximetria de pulso independe da velocidade do trânsito capilar, refletindo exclusivamente a concentração de ferro sérico ligado à ferritina nos tecidos periféricos."
    ],
    "correctIndex": 2,
    "explanation": "A aplicação de enfermagem para perfusão e tempo de trânsito capilar para trocas gasosas baseia-se no princípio: Em estados de débito cardíaco elevado ou febre alta com taquicardia extrema, o enfermeiro sabe que o tempo de trânsito capilar encurta, podendo comprometer a oxigenação em pulmões com fibrose. Esta intervenção é essencial para a segurança hemodinâmica do doente.",
    "distractorAnalysis": [
      "Está incorreta: se a membrana alveolar estiver espessada por fibrose, a difusão de O₂ torna-se lenta; se o tempo de trânsito encurtar excessivamente, o sangue abandona o capilar desoxigenado.",
      "Está incorreta: sedativos deprimem o centro respiratório e não visam acelerar perigosamente o débito cardíaco para reduzir o tempo de contacto alvéolo-capilar.",
      "Está incorreta: a oximetria de pulso afere a saturação percentual de oxigénio da hemoglobina arterial (SpO₂), dependendo diretamente da hematose pulmonar e da oxigenação alveolar."
    ],
    "nursingApplication": "Em estados de débito cardíaco elevado ou febre alta com taquicardia extrema, o enfermeiro sabe que o tempo de trânsito capilar encurta, podendo comprometer a oxigenação em pulmões com fibrose."
  },
  {
    "id": 4059,
    "topicId": 4,
    "question": "Ao analisar as variáveis físicas que regem 'perfusão e tempo de trânsito capilar para trocas gasosas', qual das seguintes afirmações expressa com rigor a relação hidrodinâmica entre pressão, velocidade e geometria vascular?",
    "options": [
      "O tempo de trânsito é proporcional ao quadrado do comprimento vascular e independe da velocidade linear de escoamento, sendo determinado unicamente pela viscosidade intrínseca do plasma pulmonar.",
      "O tempo de trânsito cresce de forma diretamente proporcional à frequência cardíaca, permitindo um contacto mais prolongado entre o eritrócito e a parede alveolar durante estados de taquicardia severa.",
      "A velocidade linear do sangue diminui com o aumento do débito cardíaco em virtude da vasodilatação pulmonar passiva, prolongando indefinidamente o tempo de trânsito capilar alveolar em esforço físico.",
      "O tempo de trânsito é dado pela razão entre o comprimento do capilar e a velocidade linear do sangue (t = L / v), encurtando quando a velocidade se eleva por aumento do débito cardíaco sistémico."
    ],
    "correctIndex": 3,
    "explanation": "A análise hidrodinâmica correta confirma que Este tempo de trânsito é suficiente para atingir o equilíbrio de saturação de O₂ e CO₂ com os alvéolos pulmonares ou tecidos periféricos sob condições fisiológicas normais. O domínio destas leis permite ao enfermeiro interpretar os fenómenos vasculares com rigor científico.",
    "distractorAnalysis": [
      "Está incorreta: a relação cinemática clássica estabelece t = L / v; o tempo de trânsito diminui linearmente quando a velocidade linear do fluido aumenta, e não com o quadrado do comprimento.",
      "Está incorreta: taquicardias com aumento de débito aceleram a velocidade de escoamento e, portanto, encurtam (e não aumentam) o tempo de permanência do sangue nos capilares de troca.",
      "Está incorreta: embora haja recrutamento e distensão de capilares pulmonares no esforço, a velocidade linear global do sangue aumenta, resultando em menor tempo de trânsito capilar."
    ],
    "nursingApplication": "Em estados de débito cardíaco elevado ou febre alta com taquicardia extrema, o enfermeiro sabe que o tempo de trânsito capilar encurta, podendo comprometer a oxigenação em pulmões com fibrose."
  },
  {
    "id": 4060,
    "topicId": 4,
    "question": "Na hidrodinâmica circulatória aplicada à enfermagem, em relação a 'conservação de massa e fluxo em cateteres de duplo lúmen', qual é a fundamentação biofísica correta?",
    "options": [
      "Se a secção transversal de um lúmen de cateter diminui, a velocidade do fluido infundido tem de aumentar proporcionalmente para manter o débito programado, gerando maiores forças de cisalhamento endotelial.",
      "A velocidade do jato na ponta do cateter é independente da área do orifício de saída, dependendo unicamente da densidade mássica da solução administrada através da linha venosa em regime contínuo.",
      "O estreitamento do lúmen reduz a velocidade do fluxo na saída do cateter por dissipação friccional, eliminando qualquer risco de traumatismo mecânico na túnica íntima da veia cava receptora.",
      "A pressão hidrostática na ponta do cateter anula-se automaticamente perante estreitamentos luminais, mantendo a velocidade do jato constante por compensação térmica do revestimento de poliuretano."
    ],
    "correctIndex": 0,
    "explanation": "Em biofísica circulatória, conservação de massa e fluxo em cateteres de duplo lúmen explica-se pelo facto de que se um lúmen de infusão estreita de diâmetro à entrada do vaso, a velocidade do jato de fluido infundido tem de aumentar proporcionalmente para manter o débito da bomba perfusora. Este aumento súbito de velocidade gera forças de atrito cinético e jato local contra o endotélio vascular se o lúmen for excessivamente estreito.",
    "distractorAnalysis": [
      "Está incorreta: para um dado débito volumétrico imposto pela bomba de infusão (Q), a velocidade do jato à saída é dada por v = Q / A, sendo inversamente dependente da secção transversal A.",
      "Está incorreta: a bomba de infusão mecânica força o volume a passar pelo orifício estreito; para manter o mesmo débito, o fluido é expelido a maior velocidade, aumentando as tensões de jato parietal.",
      "Está incorreta: o estreitamento luminal aumenta a pressão necessária à infusão e eleva a velocidade de saída, não ocorrendo qualquer anulação hidrostática por compensação térmica."
    ],
    "nursingApplication": "Ao selecionar um cateter venoso central (CVC), o enfermeiro reserva o lúmen distal de maior calibre (16G) para infusões rápidas de sangue ou fluidos de ressuscitação volémica."
  },
  {
    "id": 4061,
    "topicId": 4,
    "question": "Na avaliação clínica e administração de terapêutica por um enfermeiro, como se manifesta a aplicação prática de 'conservação de massa e fluxo em cateteres de duplo lúmen'?",
    "options": [
      "O enfermeiro utiliza preferencialmente o lúmen mais estreito do cateter para a transfusão rápida de concentrado de eritrócitos, visando acelerar a velocidade de perfusão por efeito de afunilamento mecânico.",
      "Ao selecionar as vias de um CVC, o enfermeiro reserva o lúmen distal de maior calibre (16G) para infusões rápidas de sangue ou fluidoterapia, destinando os lúmenes mediais mais finos a aminas e nutrição.",
      "Todas as vias de um cateter multilúmen oferecem rigorosamente o mesmo débito de infusão independentemente do calibre impresso no conector externo, sendo irrelevante a escolha do lúmen para ressuscitação volémica.",
      "O enfermeiro perfunde simultaneamente soluções incompatíveis no mesmo lúmen do cateter para reduzir o número de conexões vasculares e poupar as vias venosas periféricas adicionais do doente crítico."
    ],
    "correctIndex": 1,
    "explanation": "A aplicação de enfermagem para conservação de massa e fluxo em cateteres de duplo lúmen baseia-se no princípio: Ao selecionar um cateter venoso central (CVC), o enfermeiro reserva o lúmen distal de maior calibre (16G) para infusões rápidas de sangue ou fluidos de ressuscitação volémica. Esta intervenção é essencial para a segurança hemodinâmica do doente.",
    "distractorAnalysis": [
      "Está incorreta: infundir sangue rapidamente num lúmen estreito gera hemólise mecânica por atrito cisalhante excessivo e eleva a resistência hidráulica, impedindo a rápida ressuscitação.",
      "Está incorreta: os lúmenes de um cateter venoso central têm calibres diferentes (ex: lúmen distal de 16G e lúmenes mediais de 18G); o de 16G oferece muito menor resistência (R ∝ 1/r⁴).",
      "Está incorreta: fármacos incompatíveis nunca devem ser misturados no mesmo lúmen de infusão para prevenir precipitações químicas e perda de eficácia farmacológica."
    ],
    "nursingApplication": "Ao selecionar um cateter venoso central (CVC), o enfermeiro reserva o lúmen distal de maior calibre (16G) para infusões rápidas de sangue ou fluidos de ressuscitação volémica."
  },
  {
    "id": 4062,
    "topicId": 4,
    "question": "Ao analisar as variáveis físicas que regem 'conservação de massa e fluxo em cateteres de duplo lúmen', qual das seguintes afirmações expressa com rigor a relação hidrodinâmica entre pressão, velocidade e geometria vascular?",
    "options": [
      "A velocidade do fluido no cateter diminui quando a secção transversal é reduzida, visto que o atrito viscoso com a parede plástica absorve a energia motora gerada pela bomba de infusão volumétrica.",
      "A pressão motora necessária para manter o débito é inversamente proporcional ao comprimento do tubo, exigindo linhas venosas mais compridas para reduzir a pressão gerada na ponta distal do cateter vascular.",
      "O aumento localizado de velocidade num orifício estreito (v = Q / A) gera forças cinéticas de cisalhamento e jatos mecânicos que podem lesar o endotélio vascular se o lúmen for excessivamente reduzido.",
      "A conservação da massa fluida aplica-se apenas a gases medicinais em circuito fechado, não sendo válida para soluções aquosas líquidas ou hemoderivados administrados em cateteres venosos centrais."
    ],
    "correctIndex": 2,
    "explanation": "A análise hidrodinâmica correta confirma que Este aumento súbito de velocidade gera forças de atrito cinético e jato local contra o endotélio vascular se o lúmen for excessivamente estreito. O domínio destas leis permite ao enfermeiro interpretar os fenómenos vasculares com rigor científico.",
    "distractorAnalysis": [
      "Está incorreta: numa bomba volumétrica de débito positivo constante, a velocidade do fluido na secção estreita aumenta necessariamente (v = Q / A), não diminuindo.",
      "Está incorreta: a Lei de Poiseuille indica que a pressão necessária é diretamente proporcional ao comprimento do tubo (ΔP ∝ L), pelo que tubos mais longos exigem pressões motrizes maiores.",
      "Está incorreta: a equação da continuidade e a conservação da massa aplicam-se a qualquer fluido incompressível em regime contínuo, incluindo todas as soluções aquosas e o sangue."
    ],
    "nursingApplication": "Ao selecionar um cateter venoso central (CVC), o enfermeiro reserva o lúmen distal de maior calibre (16G) para infusões rápidas de sangue ou fluidos de ressuscitação volémica."
  },
  {
    "id": 4063,
    "topicId": 4,
    "question": "Na hidrodinâmica circulatória aplicada à enfermagem, em relação a 'dinâmica circulatória no retorno venoso e veias cavas', qual é a fundamentação biofísica correta?",
    "options": [
      "A velocidade do sangue venoso decresce continuamente das vénulas para as veias cavas, atingindo a estagnação completa na aurícula direita para permitir o enchimento ventricular passivo durante a diástole.",
      "A área transversal combinada das veias cavas é cem vezes superior à de todo o leito capilar sistémico somado, o que explica a redução drástica da velocidade do retorno venoso junto ao coração direito.",
      "O escoamento venoso nas veias cavas realiza-se sob pressões hidrostáticas superiores às da aorta torácica, garantindo uma ejeção retrógrada forçada de sangue oxigenado para os leitos esplâncnicos.",
      "À medida que as vénulas convergem em veias e nas cavas, a secção transversal combinada volta a diminuir, acelerando a velocidade do sangue de ~0,5 cm/s nas vénulas para ~10-15 cm/s nas veias cavas centrais."
    ],
    "correctIndex": 3,
    "explanation": "Em biofísica circulatória, dinâmica circulatória no retorno venoso e veias cavas explica-se pelo facto de que à medida que as vénulas convergem em veias de maior calibre e finalmente nas veias cavas, a área transversal combinada volta a diminuir, acelerando a velocidade do sangue de regresso à aurícula direita. A velocidade do fluxo venoso passa de 0,5 cm/s nas vénulas para cerca de 10 a 15 cm/s nas veias cavas superior e inferior.",
    "distractorAnalysis": [
      "Está incorreta: o sangue venoso não estagna nas veias cavas nem na aurícula; a convergência das veias reduz a área transversal somada e acelera o sangue para alimentar o enchimento cardíaco.",
      "Está incorreta: a área transversal somada dos capilares (~4500 cm²) é imensamente maior do que a área combinada das duas veias cavas (~6 a 8 cm²), pelo que o sangue acelera nas veias cavas.",
      "Está incorreta: a pressão nas veias cavas situa-se em valores fisiológicos baixos (2-6 mmHg), sendo incomparavelmente menor do que a pressão aórtica (~100 mmHg)."
    ],
    "nursingApplication": "O enfermeiro posiciona o doente em decúbito com os membros inferiores elevados (posição de Trendelenburg modificada) para favorecer o retorno venoso gravitacional em episódios de hipotensão."
  },
  {
    "id": 4064,
    "topicId": 4,
    "question": "Na avaliação clínica e administração de terapêutica por um enfermeiro, como se manifesta a aplicação prática de 'dinâmica circulatória no retorno venoso e veias cavas'?",
    "options": [
      "O enfermeiro posiciona o doente hipotenso com as pernas elevadas (posição de Trendelenburg modificada) para favorecer o retorno venoso gravitacional e elevar a pré-carga cardíaca e o débito ventricular.",
      "O enfermeiro coloca o doente em posição ortostática vertical imediata durante episódios de choque vasoplégico grave para acelerar a drenagem de sangue venoso periférico em direção às cavidades cardíacas.",
      "O enfermeiro aplica torniquetes elásticos compressivos bilaterais nas raízes das coxas para sequestrar volume nos membros inferiores e diminuir o trabalho do ventrículo direito em doentes hipovolémicos.",
      "O enfermeiro mantém o doente sentado com as pernas pendentes da cama durante crises de hipotensão ortostática para evitar a sobrecarga aguda de volume na veia cava inferior e insuficiência coronária."
    ],
    "correctIndex": 0,
    "explanation": "A aplicação de enfermagem para dinâmica circulatória no retorno venoso e veias cavas baseia-se no princípio: O enfermeiro posiciona o doente em decúbito com os membros inferiores elevados (posição de Trendelenburg modificada) para favorecer o retorno venoso gravitacional em episódios de hipotensão. Esta intervenção é essencial para a segurança hemodinâmica do doente.",
    "distractorAnalysis": [
      "Está incorreta: a bipedestação ou ortostatismo no doente em choque agrava drasticamente o sequestro venoso nas pernas pela gravidade, precipitando síncope ou paragem cardiorrespiratória.",
      "Está incorreta: aplicar torniquetes para sequestrar sangue nos membros inferiores reduziria ainda mais o retorno venoso e o débito cardíaco num doente já em choque hipovolémico.",
      "Está incorreta: manter as pernas pendentes da cama favorece o represamento venoso dependente por gravidade, acentuando a hipotensão e reduzindo a perfusão cerebral."
    ],
    "nursingApplication": "O enfermeiro posiciona o doente em decúbito com os membros inferiores elevados (posição de Trendelenburg modificada) para favorecer o retorno venoso gravitacional em episódios de hipotensão."
  },
  {
    "id": 4065,
    "topicId": 4,
    "question": "Ao analisar as variáveis físicas que regem 'dinâmica circulatória no retorno venoso e veias cavas', qual das seguintes afirmações expressa com rigor a relação hidrodinâmica entre pressão, velocidade e geometria vascular?",
    "options": [
      "A convergência das veias diminui a resistência periférica em razão da terceira potência do comprimento, reduzindo a velocidade do sangue venoso à medida que este se aproxima do átrio direito cardíaco.",
      "A redução progressiva da área de secção transversal combinada do sistema venoso periférico para o sistema venoso central acelera a velocidade média do fluxo sanguíneo à entrada da aurícula direita.",
      "O fluxo venoso é mantido unicamente por sucção diastólica ventricular esquerda através do septo interventricular, sendo nula a influência da contração muscular esquelética periférica ou da gravidade.",
      "A pressão venosa sistémica aumenta linearmente com a aproximação ao coração direito, superando a pressão arterial média na raiz aórtica para assegurar o encerramento mecânico da válvula tricúspide."
    ],
    "correctIndex": 1,
    "explanation": "A análise hidrodinâmica correta confirma que A velocidade do fluxo venoso passa de 0,5 cm/s nas vénulas para cerca de 10 a 15 cm/s nas veias cavas superior e inferior. O domínio destas leis permite ao enfermeiro interpretar os fenómenos vasculares com rigor científico.",
    "distractorAnalysis": [
      "Está incorreta: a convergência venosa acelera o sangue em direção à aurícula direita e a resistência vascular não depende de uma terceira potência do comprimento.",
      "Está incorreta: o retorno venoso depende fundamentalmente da bomba muscular esquelética, da bomba tóraco-abdominal respiratória e do tónus venoso, e não apenas de sucção septal.",
      "Está incorreta: a pressão venosa diminui gradualmente da periferia (~15 mmHg nas vénulas) para o átrio direito (~2-6 mmHg), criando o gradiente hidráulico essencial de retorno."
    ],
    "nursingApplication": "O enfermeiro posiciona o doente em decúbito com os membros inferiores elevados (posição de Trendelenburg modificada) para favorecer o retorno venoso gravitacional em episódios de hipotensão."
  },
  {
    "id": 4066,
    "topicId": 4,
    "question": "Na hidrodinâmica circulatória aplicada à enfermagem, em relação a 'conceito de escoamento laminar (ou de Poiseuille)', qual é a fundamentação biofísica correta?",
    "options": [
      "O fluido desloca-se em remoinhos circulares de alta frequência com mistura transversal violenta, apresentando um perfil plano de velocidade e pressão mecânica oscilatória em toda a extensão do lúmen arterial.",
      "O fluido desloca-se com velocidade máxima junto à túnica íntima endotelial por lubrificação hidrofóbica e velocidade estritamente nula no eixo central do vaso devido à repulsão coloidal eritrocitária.",
      "O fluido desloca-se em lâminas cilíndricas coaxiais paralelas sem mistura transversal macroscópica, com perfil parabólico de velocidade (máxima no eixo central e nula junto ao endotélio vascular fixo).",
      "O fluido move-se com velocidade constante e uniforme em toda a área de secção reta, cessando qualquer atrito viscoso interno entre as camadas líquidas adjacentes em escoamento estacionário fisiológico."
    ],
    "correctIndex": 2,
    "explanation": "Em biofísica circulatória, conceito de escoamento laminar (ou de Poiseuille) explica-se pelo facto de que as partículas de fluido deslocam-se em lâminas cilíndricas coaxiais paralelas ao eixo do vaso, deslizando suavemente umas sobre as outras sem qualquer mistura transversal macroscópica. O perfil de velocidades na secção reta do vaso é parabólico: a velocidade é máxima no eixo central e decresce gradualmente até anular-se junto à parede endotelial fixa (condição de não-deslizamento).",
    "distractorAnalysis": [
      "Está incorreta: descreve o regime turbulento caótico, no qual as linhas de corrente se cruzam e formam vórtices dissipadores de energia com perfil rombo de velocidades.",
      "Está incorreta: a condição de não-deslizamento impõe velocidade zero na parede do vaso; a velocidade máxima situa-se no centro do lúmen e não na interface endotelial.",
      "Está incorreta: o atrito viscoso entre camadas fluidas adjacentes gera cisalhamento contínuo, impedindo que a velocidade seja perfeitamente uniforme em toda a secção transversal."
    ],
    "nursingApplication": "O enfermeiro sabe que o fluxo fisiológico na maioria das artérias e veias normais é laminar e perfeitamente silencioso, não produzindo qualquer som ou sopro à auscultação com estetoscópio."
  },
  {
    "id": 4067,
    "topicId": 4,
    "question": "Na avaliação clínica e administração de terapêutica por um enfermeiro, como se manifesta a aplicação prática de 'conceito de escoamento laminar (ou de Poiseuille)'?",
    "options": [
      "O enfermeiro considera que a ausência de sopros na auscultação precordial indica patologia cardiovascular obstrutiva grave, esperando encontrar turbulência audível contínua em artérias sãs normais.",
      "O enfermeiro ausculta sopros intensos em vasos de indivíduos saudáveis em repouso como confirmação biofísica da integridade funcional das válvulas e da correta laminaridade do escoamento sanguíneo.",
      "O enfermeiro sabe que o fluxo laminar produz ruídos contínuos de alta intensidade (som de Korotkoff de fase I) em todos os vasos periféricos mesmo sem a insuflação da braçadeira pneumática de medição.",
      "O enfermeiro sabe que o fluxo fisiológico na grande maioria das artérias e veias normais é laminar e silencioso, não gerando vibrações acústicas nem sopros audíveis na auscultação com o estetoscópio."
    ],
    "correctIndex": 3,
    "explanation": "A aplicação de enfermagem para conceito de escoamento laminar (ou de Poiseuille) baseia-se no princípio: O enfermeiro sabe que o fluxo fisiológico na maioria das artérias e veias normais é laminar e perfeitamente silencioso, não produzindo qualquer som ou sopro à auscultação com estetoscópio. Esta intervenção é essencial para a segurança hemodinâmica do doente.",
    "distractorAnalysis": [
      "Está incorreta: a ausência de sopros é o achado normal em vasos íntegros; a presença de sopros patológicos reflete turbulência gerada por estenoses, insuficiências ou estados hipercinéticos.",
      "Está incorreta: o escoamento laminar normal não emite vibrações sonoras; sopros audíveis em repouso traduzem turbulência localizada e não fluxo laminar saudável.",
      "Está incorreta: os ruídos de Korotkoff surgem apenas quando o manguito comprime a artéria e cria jatos turbulentos de alta velocidade, inexistindo em repouso sem compressão externa."
    ],
    "nursingApplication": "O enfermeiro sabe que o fluxo fisiológico na maioria das artérias e veias normais é laminar e perfeitamente silencioso, não produzindo qualquer som ou sopro à auscultação com estetoscópio."
  },
  {
    "id": 4068,
    "topicId": 4,
    "question": "Ao analisar as variáveis físicas que regem 'conceito de escoamento laminar (ou de Poiseuille)', qual das seguintes afirmações expressa com rigor a relação hidrodinâmica entre pressão, velocidade e geometria vascular?",
    "options": [
      "O perfil de velocidade no regime laminar em tubo cilíndrico é parabólico: máxima no centro e nula na parede em virtude da condição de não-deslizamento decorrente do atrito viscoso intermolecular fluido.",
      "O perfil de velocidade é estritamente cónico com declive invertido: mínima no eixo longitudinal central e máxima na interface sólida parietal endotelial devido a forças de tensão superficial vascular.",
      "A velocidade é inversamente proporcional à distância radial ao centro do vaso, tornando o atrito viscoso insignificante junto à parede e concentrando toda a dissipação de carga no centro geométrico do tubo.",
      "O regime laminar só se manifesta em vasos com diâmetro superior a dois centímetros, transformando-se em escoamento turbulento caótico em todas as pequenas artérias e arteríolas periféricas do corpo humano."
    ],
    "correctIndex": 0,
    "explanation": "A análise hidrodinâmica correta confirma que O perfil de velocidades na secção reta do vaso é parabólico: a velocidade é máxima no eixo central e decresce gradualmente até anular-se junto à parede endotelial fixa (condição de não-deslizamento). O domínio destas leis permite ao enfermeiro interpretar os fenómenos vasculares com rigor científico.",
    "distractorAnalysis": [
      "Está incorreta: a velocidade é zero na parede endotelial fixa e máxima no centro cilíndrico do vaso, formando uma distribuição parabólica simétrica e não cónica invertida.",
      "Está incorreta: a taxa de cisalhamento e o atrito viscoso são máximos junto à parede endotelial (onde o gradiente dv/dr é mais íngreme) e nulos no eixo central.",
      "Está incorreta: o regime laminar predomina nos vasos de menor diâmetro (baixo número de Reynolds); quanto menor o vaso, mais estável e laminar tende a ser o escoamento."
    ],
    "nursingApplication": "O enfermeiro sabe que o fluxo fisiológico na maioria das artérias e veias normais é laminar e perfeitamente silencioso, não produzindo qualquer som ou sopro à auscultação com estetoscópio."
  },
  {
    "id": 4069,
    "topicId": 4,
    "question": "Na hidrodinâmica circulatória aplicada à enfermagem, em relação a 'condição de não-deslizamento na parede vascular (no-slip condition)', qual é a fundamentação biofísica correta?",
    "options": [
      "A camada de líquido em contacto com a parede vascular atinge a velocidade máxima de todo o fluxo em virtude da ausência absoluta de atrito mecânico proporcionada pelas glicoproteínas da membrana celular.",
      "A camada infinitesimal de plasma em contacto direto com o endotélio possui velocidade rigorosamente nula (v = 0), gerando um gradiente transversal de velocidade e taxa de deformação por cisalhamento.",
      "A velocidade junto à parede endotelial é idêntica à velocidade máxima axial, deslizando o sangue como um bloco rígido e inelástico sem qualquer atrito ou gradiente interno de velocidade entre camadas.",
      "A camada periférica de plasma inverte periodicamente o sentido de escoamento junto ao endotélio para lubrificar as células endoteliais contra o atrito gerado pela passagem contínua das hemácias centrais."
    ],
    "correctIndex": 1,
    "explanation": "Em biofísica circulatória, condição de não-deslizamento na parede vascular (no-slip condition) explica-se pelo facto de que a camada microscópica de plasma sanguíneo em contacto direto com as células endoteliais tem velocidade rigorosamente nula (v = 0) em relação à parede do vaso. O atrito molecular entre o líquido e o glicocálix endotelial ancora as primeiras moléculas de fluido, gerando um gradiente de velocidade transversal (taxa de cisalhamento, shear rate).",
    "distractorAnalysis": [
      "Está incorreta: violaria a condição de não-deslizamento fundamental da mecânica dos fluidos viscosos, segundo a qual as moléculas em contacto imediato com a fronteira sólida têm velocidade nula.",
      "Está incorreta: se o sangue deslizasse como bloco rígido sem gradiente interno, a viscosidade seria nula e não haveria dissipação de pressão hidráulica ao longo do leito vascular.",
      "Está incorreta: o plasma marginal não inverte o fluxo em condições fisiológicas estáveis; desloca-se no mesmo sentido axial com velocidade que cresce da parede para o centro."
    ],
    "nursingApplication": "A taxa de cisalhamento fisiológica na parede arterial estimula a libertação endotelial de óxido nítrico (NO), um potente vasodilatador endógeno que o enfermeiro sabe ser protetor contra a hipertensão."
  },
  {
    "id": 4070,
    "topicId": 4,
    "question": "Na avaliação clínica e administração de terapêutica por um enfermeiro, como se manifesta a aplicação prática de 'condição de não-deslizamento na parede vascular (no-slip condition)'?",
    "options": [
      "A taxa de cisalhamento parietal estimula a síntese massiva de colagénio cicatricial luminal, promovendo a oclusão progressiva de artérias normais para elevar a pressão hidrostática coronária de repouso.",
      "O enfermeiro administra anti-hipertensores com a finalidade de anular o atrito parietal em todos os vasos, visando atingir velocidade infinita de escoamento junto às paredes das artérias sistémicas.",
      "A taxa de cisalhamento fisiológica na parede vascular estimula a libertação endotelial de óxido nítrico (NO), um potente vasodilatador endógeno fundamental para o controlo da pressão arterial e hemostase.",
      "A tensão de corte endotelial anula a ação do sistema imunitário e atrai bactérias patogénicas para o glicocálix, exigindo a administração profilática de antibióticos em doentes com débito elevado."
    ],
    "correctIndex": 2,
    "explanation": "A aplicação de enfermagem para condição de não-deslizamento na parede vascular (no-slip condition) baseia-se no princípio: A taxa de cisalhamento fisiológica na parede arterial estimula a libertação endotelial de óxido nítrico (NO), um potente vasodilatador endógeno que o enfermeiro sabe ser protetor contra a hipertensão. Esta intervenção é essencial para a segurança hemodinâmica do doente.",
    "distractorAnalysis": [
      "Está incorreta: o cisalhamento fisiológico laminar normal é protetor e estimula a libertação de NO e prostaciclina (PGI2), inibindo a proliferação miointimal e a oclusão vascular patológica.",
      "Está incorreta: fármacos anti-hipertensores atuam no relaxamento muscular vascular ou na excreção de fluidos, sendo impossível do ponto de vista físico atingir velocidade infinita no endotélio.",
      "Está incorreta: as forças hemodinâmicas fisiológicas não suprimem o sistema imunitário nem exigem antibioterapia profilática indiscriminada em indivíduos com débito preservado."
    ],
    "nursingApplication": "A taxa de cisalhamento fisiológica na parede arterial estimula a libertação endotelial de óxido nítrico (NO), um potente vasodilatador endógeno que o enfermeiro sabe ser protetor contra a hipertensão."
  },
  {
    "id": 4071,
    "topicId": 4,
    "question": "Ao analisar as variáveis físicas que regem 'condição de não-deslizamento na parede vascular (no-slip condition)', qual das seguintes afirmações expressa com rigor a relação hidrodinâmica entre pressão, velocidade e geometria vascular?",
    "options": [
      "A condição de não-deslizamento aplica-se exclusivamente a sólidos elásticos deformáveis sob flexão, sendo desprovida de qualquer aplicação física à hidrodinâmica de fluidos viscosos reais em condutas.",
      "A tensão tangencial de cisalhamento na parede vascular é estritamente nula no regime laminar, acumulando-se todo o esforço de atrito mecânico exclusivamente no centro geométrico do vaso sanguíneo.",
      "A velocidade nula na parede decorre da solidificação imediata do plasma por desnaturação térmica das proteínas circulantes sempre que o sangue entra em contacto com a membrana das células endoteliais.",
      "As forças de adesão intermolecular entre o fluido e o endotélio ancoram a primeira camada (v = 0), estabelecendo um gradiente transversal de velocidade que origina a tensão de cisalhamento parietal."
    ],
    "correctIndex": 3,
    "explanation": "A análise hidrodinâmica correta confirma que O atrito molecular entre o líquido e o glicocálix endotelial ancora as primeiras moléculas de fluido, gerando um gradiente de velocidade transversal (taxa de cisalhamento, shear rate). O domínio destas leis permite ao enfermeiro interpretar os fenómenos vasculares com rigor científico.",
    "distractorAnalysis": [
      "Está incorreta: a condição de não-deslizamento é um dos postulados centrais da mecânica dos fluidos clássica, aplicando-se universalmente a gases e líquidos viscosos em contacto com superfícies sólidas.",
      "Está incorreta: a tensão de cisalhamento parietal é dada por τ = η · (dv/dr) na parede; como o gradiente de velocidade é máximo junto à fronteira endotelial, a tensão atinge aí o seu pico.",
      "Está incorreta: o plasma mantém-se no estado líquido e as proteínas mantêm a sua conformação nativa normal a 37 °C, não ocorrendo qualquer desnaturação térmica no endotélio íntegro."
    ],
    "nursingApplication": "A taxa de cisalhamento fisiológica na parede arterial estimula a libertação endotelial de óxido nítrico (NO), um potente vasodilatador endógeno que o enfermeiro sabe ser protetor contra a hipertensão."
  },
  {
    "id": 4072,
    "topicId": 4,
    "question": "Na hidrodinâmica circulatória aplicada à enfermagem, em relação a 'velocidade média vs velocidade máxima no escoamento laminar', qual é a fundamentação biofísica correta?",
    "options": [
      "Num perfil parabólico em conduta cilíndrica, a velocidade média do fluido é rigorosamente igual a metade da velocidade máxima central (v_média = v_max / 2), decorrente da integração do paraboloide.",
      "Num escoamento laminar perfeito, a velocidade média é exatamente igual a 90% da velocidade máxima observada no centro geométrico do conduto circular em virtude da baixa compressibilidade plasmática.",
      "A velocidade média é sempre o dobro da velocidade máxima axial, visto que o atrito contra a parede vascular acelera cumulativamente as partículas periféricas através de reflexão mecânica elástica.",
      "A velocidade média e a velocidade máxima coincidem perfeitamente em qualquer secção vascular, dado que o sangue incompressível não admite assimetrias de velocidade radial no interior de vasos cilíndricos."
    ],
    "correctIndex": 0,
    "explanation": "Em biofísica circulatória, velocidade média vs velocidade máxima no escoamento laminar explica-se pelo facto de que num perfil parabólico perfeito em conduta cilíndrica rígida, a velocidade média do fluido é exatamente igual a metade da velocidade máxima observada no centro do vaso (v_média = v_max / 2). Esta relação matemática decorre da integração geométrica do parabolóide de revolução da velocidade ao longo do raio da secção transversal.",
    "distractorAnalysis": [
      "Está incorreta: no escoamento laminar parabólico a média ponderada pela área é exatamente 0,5 v_max (50% do pico axial); perfis rombos com média de ~90% surgem apenas em regime turbulento pleno.",
      "Está incorreta: a velocidade média de um conjunto de partículas em escoamento não pode ser superior à sua velocidade pontual máxima observada no centro da corrente.",
      "Está incorreta: a existência de atrito viscoso e a condição de não-deslizamento na parede impedem que a velocidade seja radialmente uniforme num conduto circular cilíndrico."
    ],
    "nursingApplication": "Na ecografia vascular com Doppler realizada à cabeceira, o enfermeiro compreende que o aparelho mede o espectro de frequências e calcula a velocidade média a partir do pico sistólico central."
  },
  {
    "id": 4073,
    "topicId": 4,
    "question": "Na avaliação clínica e administração de terapêutica por um enfermeiro, como se manifesta a aplicação prática de 'velocidade média vs velocidade máxima no escoamento laminar'?",
    "options": [
      "O ecografista utiliza exclusivamente a velocidade máxima de pico para multiplicar pela secção transversal na estimativa do débito, ignorando a curvatura parabólica das camadas laminares periféricas.",
      "No Doppler vascular à cabeceira, o aparelho regista o espectro de velocidades e calcula o débito volumétrico através da velocidade média ponderada no tempo e da área da secção transversal da artéria.",
      "O enfermeiro sabe que a velocidade média obtida por Doppler arterial deve ser sempre igual a zero em artérias saudáveis, indicando ausência de turbulência ou de patologia vascular periférica obstrutiva.",
      "A medição ecográfica com Doppler avalia apenas a densidade acústica do tecido ósseo perivascular, não permitindo qualquer quantificação de velocidades hidrodinâmicas do fluxo sanguíneo em tempo real."
    ],
    "correctIndex": 1,
    "explanation": "A aplicação de enfermagem para velocidade média vs velocidade máxima no escoamento laminar baseia-se no princípio: Na ecografia vascular com Doppler realizada à cabeceira, o enfermeiro compreende que o aparelho mede o espectro de frequências e calcula a velocidade média a partir do pico sistólico central. Esta intervenção é essencial para a segurança hemodinâmica do doente.",
    "distractorAnalysis": [
      "Está incorreta: se o equipamento multiplicasse a velocidade de pico máxima (v_max) diretamente pela área, sobrestimaria o caudal volumétrico para o dobro do valor real no regime laminar.",
      "Está incorreta: a velocidade média nas artérias sistémicas é positiva e reflete a perfusão contínua para a periferia; uma velocidade média de zero traduziria paragem circulatória ou oclusão total.",
      "Está incorreta: a ecografia Doppler mede precisamente o desvio de frequência do feixe sonoro refletido pelas hemácias em movimento, fornecendo a velocidade e direção do sangue em tempo real."
    ],
    "nursingApplication": "Na ecografia vascular com Doppler realizada à cabeceira, o enfermeiro compreende que o aparelho mede o espectro de frequências e calcula a velocidade média a partir do pico sistólico central."
  },
  {
    "id": 4074,
    "topicId": 4,
    "question": "Ao analisar as variáveis físicas que regem 'velocidade média vs velocidade máxima no escoamento laminar', qual das seguintes afirmações expressa com rigor a relação hidrodinâmica entre pressão, velocidade e geometria vascular?",
    "options": [
      "A relação matemática resulta da divisão linear da pressão aórtica pelo volume residual das veias cavas, sendo independente da geometria circular do vaso ou da distribuição radial das velocidades locais.",
      "A velocidade média é obtida pela média aritmética ponderada com a quarta potência do raio vascular, resultando numa velocidade média cerca de dezasseis vezes inferior ao pico de velocidade central.",
      "A relação v_média = v_max / 2 decorre da integração matemática da equação de velocidade parabólica de Poiseuille ao longo de toda a área circular transversal do vaso cilíndrico sob regime laminar.",
      "A velocidade média decorre da conservação da entropia no sistema cardiovascular fechado, no qual a energia térmica gerada pelo atrito compensa a perda de velocidade axial em cada pulsação cardíaca."
    ],
    "correctIndex": 2,
    "explanation": "A análise hidrodinâmica correta confirma que Esta relação matemática decorre da integração geométrica do parabolóide de revolução da velocidade ao longo do raio da secção transversal. O domínio destas leis permite ao enfermeiro interpretar os fenómenos vasculares com rigor científico.",
    "distractorAnalysis": [
      "Está incorreta: a relação v_média = v_max / 2 é uma propriedade puramente geométrica da integração do perfil parabólico de velocidade v(r) = v_max [1 - (r/R)²] em coordenadas polares circulares.",
      "Está incorreta: embora o caudal dependa de R⁴, a razão entre a velocidade média e a máxima numa mesma secção independe do valor absoluto do raio, sendo sempre igual a 1/2 no regime laminar.",
      "Está incorreta: a relação entre velocidades locais e média numa secção não decorre de balanços de entropia termodinâmica mas sim do perfil parabólico de cisalhamento viscoso de Poiseuille."
    ],
    "nursingApplication": "Na ecografia vascular com Doppler realizada à cabeceira, o enfermeiro compreende que o aparelho mede o espectro de frequências e calcula a velocidade média a partir do pico sistólico central."
  },
  {
    "id": 4075,
    "topicId": 4,
    "question": "Na hidrodinâmica circulatória aplicada à enfermagem, em relação a 'ausência de ruído audível no regime laminar estável', qual é a fundamentação biofísica correta?",
    "options": [
      "O regime laminar produz ruído acústico permanente de altíssima intensidade que é completamente bloqueado pelo tecido adiposo e muscular da pele, impedindo a sua transmissão até à membrana do estetoscópio.",
      "A ausência de ruído no regime laminar deve-se ao facto de a velocidade das hemácias ser estritamente superior à velocidade do som no tecido biológico, criando um cone de silêncio acústico perivascular.",
      "O sangue no regime laminar não emite som porque a viscosidade plasmática anula a pressão hidrostática interna do vaso, eliminando qualquer transmissão de energia mecânica às estruturas anatómicas vizinhas.",
      "Como as lâminas de fluido deslizam sem colisão ou turbulência e sem vibração mecânica das paredes vasculares, o fluxo não gera flutuações de pressão acústica na faixa audível ao estetoscópio clínico."
    ],
    "correctIndex": 3,
    "explanation": "Em biofísica circulatória, ausência de ruído audível no regime laminar estável explica-se pelo facto de que como as lâminas de fluido não colidem nem formam vórtices caóticos, a energia mecânica dissipa-se apenas por atrito viscoso suave sem vibração mecânica das paredes vasculares. Na ausência de flutuações de pressão acústica na frequência audível (20 Hz a 20 kHz), o fluxo não emite ondas sonoras percetíveis ao estetoscópio.",
    "distractorAnalysis": [
      "Está incorreta: o escoamento laminar não produz ondas sonoras de elevada intensidade; a energia dissipa-se suavemente por atrito microscópico viscoso sem flutuações acústicas de pressão.",
      "Está incorreta: a velocidade do sangue nos vasos é de dezenas de centímetros por segundo, enquanto a velocidade do som nos tecidos moles é de cerca de 1540 metros por segundo.",
      "Está incorreta: a pressão hidrostática mantém-se no interior do vaso no regime laminar; a ausência de ruído resulta da ausência de vórtices e choques parietais que originem ondas sonoras audíveis."
    ],
    "nursingApplication": "Ao medir a pressão arterial com a braçadeira do esfigmomanómetro totalmente desinsuflada, o enfermeiro confirma a ausência total de sons na artéria braquial (fluxo laminar silencioso)."
  },
  {
    "id": 4076,
    "topicId": 4,
    "question": "Na avaliação clínica e administração de terapêutica por um enfermeiro, como se manifesta a aplicação prática de 'ausência de ruído audível no regime laminar estável'?",
    "options": [
      "Com a braçadeira totalmente desinsuflada, o enfermeiro confirma a ausência de sons na artéria braquial desobstruída devido ao restabelecimento do regime laminar silencioso.",
      "Com a braçadeira desinsuflada, o enfermeiro ausculta um sopro sistólico contínuo na fossa antecubital que serve para confirmar a permeabilidade anatómica da artéria ulnar.",
      "O esvaziamento da braçadeira faz parar a circulação sanguínea no membro superior, gerando silêncio auscultatório por colapso mecânico passivo das arteríolas periféricas.",
      "O silêncio com a braçadeira desinsuflada decorre do amortecimento sonoro pelo manguito vazio, que bloqueia as ondas acústicas geradas pelo escoamento laminar permanente."
    ],
    "correctIndex": 0,
    "explanation": "A aplicação de enfermagem para ausência de ruído audível no regime laminar estável baseia-se no princípio: Ao medir a pressão arterial com a braçadeira do esfigmomanómetro totalmente desinsuflada, o enfermeiro confirma a ausência total de sons na artéria braquial (fluxo laminar silencioso). Esta intervenção é essencial para a segurança hemodinâmica do doente.",
    "distractorAnalysis": [
      "Está incorreta: em vasos normais desobstruídos o fluxo laminar é perfeitamente silencioso; a presença de sopros com a braçadeira vazia sugere estenose patológica ou fístula.",
      "Está incorreta: a circulação arterial do membro superior restaura-se plenamente ao desinsuflar a braçadeira, mantendo fluxo pulsátil contínuo e desobstruído.",
      "Está incorreta: o escoamento laminar fisiológico em si não gera som; o silêncio não resulta de absorção acústica pela tela da braçadeira desinsuflada."
    ],
    "nursingApplication": "Ao medir a pressão arterial com a braçadeira do esfigmomanómetro totalmente desinsuflada, o enfermeiro confirma a ausência total de sons na artéria braquial (fluxo laminar silencioso)."
  },
  {
    "id": 4077,
    "topicId": 4,
    "question": "Ao analisar as variáveis físicas que regem 'ausência de ruído audível no regime laminar estável', qual das seguintes afirmações expressa com rigor a relação hidrodinâmica entre pressão, velocidade e geometria vascular?",
    "options": [
      "As flutuações de pressão acústica no regime laminar situam-se na gama do ultrassom de alta energia (acima de 2 MHz), sendo inaudíveis para o examinador sem transdutor piezoelétrico.",
      "Na ausência de flutuações de pressão acústica na faixa de frequências audíveis pelo ouvido humano, o regime laminar estável não emite ondas sonoras percetíveis ao estetoscópio.",
      "O fluxo laminar emite ruído acústico apenas durante a fase diastólica tardia, sendo abafado pela contração muscular ativa dos músculos flexores superficiais do antebraço.",
      "A energia mecânica do fluxo laminar transforma-se integralmente em radiação eletromagnética infravermelha, impedindo a produção de vibrações elásticas na parede do vaso arterial."
    ],
    "correctIndex": 1,
    "explanation": "A análise hidrodinâmica correta confirma que Na ausência de flutuações de pressão acústica na frequência audível (20 Hz a 20 kHz), o fluxo não emite ondas sonoras percetíveis ao estetoscópio. O domínio destas leis permite ao enfermeiro interpretar os fenómenos vasculares com rigor científico.",
    "distractorAnalysis": [
      "Está incorreta: o escoamento laminar estável não gera frequências ultrassónicas de alta energia; a energia cinética dissipa-se suavemente por viscosidade sem emissão mecânica vibratória.",
      "Está incorreta: o regime laminar mantém-se silencioso em ambas as fases do ciclo cardíaco normal, sem dependência de contração reflexa dos músculos esqueléticos do antebraço.",
      "Está incorreta: a perda de carga viscosa é convertida em calor microscópico dissipado por condução tecidual e não em radiação eletromagnética luminosa ou infravermelha."
    ],
    "nursingApplication": "Ao medir a pressão arterial com a braçadeira do esfigmomanómetro totalmente desinsuflada, o enfermeiro confirma a ausência total de sons na artéria braquial (fluxo laminar silencioso)."
  },
  {
    "id": 4078,
    "topicId": 4,
    "question": "Na hidrodinâmica circulatória aplicada à enfermagem, em relação a 'efeito Fahraeus-Lindqvist e migração axial dos glóbulos vermelhos', qual é a fundamentação biofísica correta?",
    "options": [
      "Nos microvasos capilares, as hemácias concentram-se obrigatoriamente junto à túnica íntima endotelial para acelerar as trocas de glicose por transporte facilitado vesicular.",
      "A viscosidade efetiva do sangue eleva-se progressivamente à medida que o calibre vascular diminui, tornando o sangue num gel semi-sólido no interior de arteríolas de transição.",
      "Em vasos com diâmetro inferior a 300 μm, os eritrócitos migram para o centro axial da corrente, criando uma camada marginal plasmática lubrificante que reduz a viscosidade aparente.",
      "O efeito descreve a separação eletrostática dos leucócitos na parede vascular com migração retrógrada contínua de água plasmática em direção às vácuolas linfáticas teciduais."
    ],
    "correctIndex": 2,
    "explanation": "Em biofísica circulatória, efeito Fahraeus-Lindqvist e migração axial dos glóbulos vermelhos explica-se pelo facto de que em vasos com diâmetro inferior a 300 micrómetros, os eritrócitos tendem a concentrar-se no centro da corrente (onde a velocidade é máxima), deixando uma camada marginal acelular de plasma junto à parede. Esta segregação celular reduz o atrito viscoso aparente do sangue nos microvasos e facilita a passagem de capilares estreitos com menor consumo de energia.",
    "distractorAnalysis": [
      "Está incorreta: as hemácias migram para o centro axial onde a velocidade é maior, deixando a periferia do vaso ocupada por uma camada acelular de plasma com menor viscosidade.",
      "Está incorreta: o efeito Fåhræus-Lindqvist demonstra precisamente o oposto: a viscosidade aparente diminui (e não aumenta) em vasos com diâmetro entre ~10 e 300 micrómetros.",
      "Está incorreta: confunde a migração axial reológica dos glóbulos vermelhos com o rolamento e marginação leucocitária mediados por selectinas em processos inflamatórios."
    ],
    "nursingApplication": "O enfermeiro compreende que a microcirculação possui adaptações biofísicas que reduzem a viscosidade efetiva do sangue para otimizar o fornecimento de oxigénio celular."
  },
  {
    "id": 4079,
    "topicId": 4,
    "question": "Na avaliação clínica e administração de terapêutica por um enfermeiro, como se manifesta a aplicação prática de 'efeito Fahraeus-Lindqvist e migração axial dos glóbulos vermelhos'?",
    "options": [
      "O enfermeiro procura aumentar a viscosidade capilar através da administração de colóides densos para diminuir a velocidade das hemácias e forçar a oxigenação dos tecidos periféricos.",
      "O enfermeiro sabe que as hemácias perdem a sua flexibilidade de membrana ao penetrar na microcirculação, ocluindo temporariamente os capilares para facilitar a captação de solutos.",
      "O enfermeiro considera que a viscosidade sanguínea na microcirculação é idêntica à do sangue total nos grandes vasos, descartando qualquer particularidade hidrodinâmica capilar.",
      "O enfermeiro compreende que a microcirculação possui adaptações biofísicas intrínsecas que reduzem a viscosidade efetiva do sangue para otimizar o fornecimento tecidual de oxigénio."
    ],
    "correctIndex": 3,
    "explanation": "A aplicação de enfermagem para efeito Fahraeus-Lindqvist e migração axial dos glóbulos vermelhos baseia-se no princípio: O enfermeiro compreende que a microcirculação possui adaptações biofísicas que reduzem a viscosidade efetiva do sangue para otimizar o fornecimento de oxigénio celular. Esta intervenção é essencial para a segurança hemodinâmica do doente.",
    "distractorAnalysis": [
      "Está incorreta: aumentar artificialmente a viscosidade microvascular aumentaria a pós-carga e a resistência pré-capilar, prejudicando gravemente a perfusão tecidual.",
      "Está incorreta: as hemácias dependem de uma extraordinária deformabilidade elástica para atravessar capilares de 5-8 μm sem oclusão mecânica da microcirculação.",
      "Está incorreta: a viscosidade efetiva varia em função do calibre do vaso (fluido não-newtoniano), sendo substancialmente menor nos microvasos devido ao efeito Fåhræus-Lindqvist."
    ],
    "nursingApplication": "O enfermeiro compreende que a microcirculação possui adaptações biofísicas que reduzem a viscosidade efetiva do sangue para otimizar o fornecimento de oxigénio celular."
  },
  {
    "id": 4080,
    "topicId": 4,
    "question": "Ao analisar as variáveis físicas que regem 'efeito Fahraeus-Lindqvist e migração axial dos glóbulos vermelhos', qual das seguintes afirmações expressa com rigor a relação hidrodinâmica entre pressão, velocidade e geometria vascular?",
    "options": [
      "A segregação celular para o centro do lúmen reduz o atrito viscoso aparente nos microvasos, permitindo que o sangue flua com menor gradiente de pressão e menor consumo de energia.",
      "A migração axial bloqueia o transporte de oxigénio nos capilares periféricos, pois afasta fisicamente as hemácias da parede endotelial e impede a difusão alveolar ou tecidual.",
      "A camada marginal de plasma atua como um travão hidráulico endotelial que quadruplica a perda de carga e aumenta a resistência vascular arteriolar periférica em repouso.",
      "O efeito Fåhræus-Lindqvist anula a lei de conservação da massa nos microvasos, permitindo que o volume de sangue diminua espontaneamente durante a passagem capilar."
    ],
    "correctIndex": 0,
    "explanation": "A análise hidrodinâmica correta confirma que Esta segregação celular reduz o atrito viscoso aparente do sangue nos microvasos e facilita a passagem de capilares estreitos com menor consumo de energia. O domínio destas leis permite ao enfermeiro interpretar os fenómenos vasculares com rigor científico.",
    "distractorAnalysis": [
      "Está incorreta: a camada marginal de plasma tem espessura microscópica que não impede a difusão gasosa de oxigénio, facilitando sim o trânsito hidrodinâmico das hemácias.",
      "Está incorreta: a camada periférica de plasma (líquido com menor viscosidade que o sangue total) atua como lubrificante, reduzindo a tensão de corte e a resistência ao escoamento.",
      "Está incorreta: nenhuma adaptação biológica viola a lei de conservação da massa fluida incompressível, mantendo-se o débito volumétrico conservado ao longo do leito vascular."
    ],
    "nursingApplication": "O enfermeiro compreende que a microcirculação possui adaptações biofísicas que reduzem a viscosidade efetiva do sangue para otimizar o fornecimento de oxigénio celular."
  },
  {
    "id": 4081,
    "topicId": 4,
    "question": "Na hidrodinâmica circulatória aplicada à enfermagem, em relação a 'características físicas do escoamento turbulento', qual é a fundamentação biofísica correta?",
    "options": [
      "As partículas de fluido alinham-se em trajetórias retilíneas paralelas rigorosamente ordenadas, com perfil de velocidade perfeitamente parabólico e máxima eficiência energética.",
      "O movimento das partículas torna-se tridimensional e caótico, formando vórtices que se misturam transversalmente e gerando um perfil de velocidades rombo e embotado.",
      "O escoamento passa a ocorrer a velocidade perfeitamente nula em todo o vaso, acumulando-se energia mecânica sob a forma de deformação estática da túnica adventícia.",
      "O fluido é repelido pelo centro do conduto vascular, concentrando 100% da sua massa líquida numa película anelar que desliza com velocidade infinita junto ao endotélio."
    ],
    "correctIndex": 1,
    "explanation": "Em biofísica circulatória, características físicas do escoamento turbulento explica-se pelo facto de que o movimento das partículas torna-se tridimensional, irregular e caótico, com formação contínua de turbilhões, redemoinhos e vórtices que se misturam transversalmente. O perfil de velocidade deixa de ser parabólico e torna-se quase plano (embotado) com forte gradiente de velocidade confinado a uma fina camada limite junto à parede.",
    "distractorAnalysis": [
      "Está incorreta: descreve as propriedades clássicas do escoamento laminar ordenado, enquanto a turbulência se caracteriza por desordem tridimensional e perfil de velocidade plano.",
      "Está incorreta: a turbulência é um regime dinâmico de alta energia com velocidades oscilatórias locais intensas e não uma cessação de fluxo hidrodinâmico.",
      "Está incorreta: violaria as leis fundamentais da conservação da massa e da física dos meios contínuos, sendo impossível concentrar toda a massa numa película de velocidade infinita."
    ],
    "nursingApplication": "O enfermeiro identifica a presença de turbulência patológica pela deteção de sopros audíveis à auscultação e pela perda de eficiência circulatória."
  },
  {
    "id": 4082,
    "topicId": 4,
    "question": "Na avaliação clínica e administração de terapêutica por um enfermeiro, como se manifesta a aplicação prática de 'características físicas do escoamento turbulento'?",
    "options": [
      "O enfermeiro presume que o surgimento de um novo sopro sistólico aórtico é um sinal clínico favorável de que a circulação recuperou a sua laminaridade e estabilidade basal.",
      "O enfermeiro considera que a auscultação de silêncio absoluto sobre uma fístula arteriovenosa indica o funcionamento hemodinâmico ideal do acesso vascular para hemodiálise.",
      "O enfermeiro identifica a presença de escoamento turbulento pela deteção de sopros ou frémitos à auscultação e palpação e pela perda de eficiência da perfusão circulatória.",
      "O enfermeiro associa a turbulência circulatória exclusivamente ao consumo de dietas ricas em eletrólitos, descartando causas anatómicas ou estenoses vasculares arteriais."
    ],
    "correctIndex": 2,
    "explanation": "A aplicação de enfermagem para características físicas do escoamento turbulento baseia-se no princípio: O enfermeiro identifica a presença de turbulência patológica pela deteção de sopros audíveis à auscultação e pela perda de eficiência circulatória. Esta intervenção é essencial para a segurança hemodinâmica do doente.",
    "distractorAnalysis": [
      "Está incorreta: o aparecimento de novo sopro aórtico traduz turbulência patológica (ex: estenose aórtica ou insuficiência), e não estabilização fisiológica do regime laminar.",
      "Está incorreta: numa fístula arteriovenosa funcional é obrigatório auscultar um sopro contínuo com frémito palpável (thrill), indicando fluxo turbulento de alto débito essencial à diálise.",
      "Está incorreta: a turbulência resulta de desequilíbrios físicos expressos pelo número de Reynolds (velocidade elevada, calibre, estenoses, anemia grave) e não de consumo eletrolítico dietético."
    ],
    "nursingApplication": "O enfermeiro identifica a presença de turbulência patológica pela deteção de sopros audíveis à auscultação e pela perda de eficiência circulatória."
  },
  {
    "id": 4083,
    "topicId": 4,
    "question": "Ao analisar as variáveis físicas que regem 'características físicas do escoamento turbulento', qual das seguintes afirmações expressa com rigor a relação hidrodinâmica entre pressão, velocidade e geometria vascular?",
    "options": [
      "No regime turbulento, o perfil de velocidades adquire uma curvatura hiperbólica pontiaguda com velocidade no centro axial dez vezes superior ao valor registado no regime laminar.",
      "No regime turbulento, a velocidade anula-se no centro geométrico do conduto vascular e atinge valores máximos em contacto imediato com o glicocálix da parede endotelial.",
      "No regime turbulento, a velocidade oscila unicamente no plano longitudinal do vaso sem qualquer componente de velocidade vetorial transversal ou azimutal mensurável.",
      "No regime turbulento, o perfil de velocidades deixa de ser parabólico e torna-se quase plano (embotado), confinando o forte gradiente de velocidade a uma camada limite parietal fina."
    ],
    "correctIndex": 3,
    "explanation": "A análise hidrodinâmica correta confirma que O perfil de velocidade deixa de ser parabólico e torna-se quase plano (embotado) com forte gradiente de velocidade confinado a uma fina camada limite junto à parede. O domínio destas leis permite ao enfermeiro interpretar os fenómenos vasculares com rigor científico.",
    "distractorAnalysis": [
      "Está incorreta: a intensa mistura transversal e a troca turbulenta de quantidade de movimento uniformizam a velocidade no núcleo central, gerando um perfil plano e não pontiagudo.",
      "Está incorreta: a velocidade máxima continua a situar-se no núcleo central do escoamento, embora o perfil seja aplanado em comparação com a parábola de Poiseuille.",
      "Está incorreta: a turbulência é inerentemente tridimensional, caracterizando-se por flutuações estocásticas de velocidade em todas as direções espaciais (axial, radial e azimutal)."
    ],
    "nursingApplication": "O enfermeiro identifica a presença de turbulência patológica pela deteção de sopros audíveis à auscultação e pela perda de eficiência circulatória."
  },
  {
    "id": 4084,
    "topicId": 4,
    "question": "Na hidrodinâmica circulatória aplicada à enfermagem, em relação a 'dissipação de energia mecânica e perda de carga no regime turbulento', qual é a fundamentação biofísica correta?",
    "options": [
      "A resistência hidráulica aumenta significativamente, exigindo maior gradiente pressórico para manter o débito (perda de carga proporcional a v²), dissipando energia em som e calor.",
      "A resistência hidráulica diminui para valores próximos de zero, facilitando o débito cardíaco com uma redução acentuada do consumo miocárdico de oxigénio em esforço.",
      "A perda de carga hidrostática no regime turbulento varia de forma linear com a viscosidade plasmática pura, sendo totalmente independente da velocidade média do fluido.",
      "A energia mecânica perdida no regime turbulento é totalmente recuperada sob a forma de aumento espontâneo da pressão de pulso nas artérias coronárias esquerdas."
    ],
    "correctIndex": 0,
    "explanation": "Em biofísica circulatória, dissipação de energia mecânica e perda de carga no regime turbulento explica-se pelo facto de que a resistência hidráulica ao fluxo aumenta drasticamente, exigindo um gradiente de pressão muito maior para manter o mesmo débito volumétrico (a perda de carga passa a ser proporcional a v² em vez de v). Grande parte da energia mecânica impulsionada pelo coração dissipa-se na forma de vibração tecidual sonora (sopros) e atrito térmico microscópico.",
    "distractorAnalysis": [
      "Está incorreta: no escoamento turbulento a dissipação viscosa e inercial é muito superior, elevando acentuadamente a resistência e sobrecarregando o trabalho cardíaco.",
      "Está incorreta: a perda de carga no regime turbulento depende predominantemente da densidade e da velocidade ao quadrado (ΔP ∝ v²), e não linearmente da viscosidade.",
      "Está incorreta: a turbulência é um processo termodinamicamente irreversível, dissipando energia mecânica em calor e vibrações acústicas sem qualquer recuperação pressórica espontânea."
    ],
    "nursingApplication": "No doente com estenose da válvula aórtica, o enfermeiro monitoriza sinais de sobrecarga ventricular esquerda e cansaço fácil, pois o miocárdio tem de vencer uma perda de carga extrema para ejetar o sangue."
  },
  {
    "id": 4085,
    "topicId": 4,
    "question": "Na avaliação clínica e administração de terapêutica por um enfermeiro, como se manifesta a aplicação prática de 'dissipação de energia mecânica e perda de carga no regime turbulento'?",
    "options": [
      "Na estenose aórtica, o enfermeiro encoraja o doente a realizar exercício isométrico pesado para aproveitar a perda de carga estenótica como mecanismo tonificante do miocárdio.",
      "Na estenose aórtica, o enfermeiro vigia sinais de sobrecarga ventricular esquerda e intolerância ao esforço, pois o miocárdio tem de vencer uma perda de carga extrema para ejetar o sangue.",
      "O enfermeiro desvaloriza queixas de dispneia ou angina em doentes com sopro sistólico ejetivo aórtico, considerando que a turbulência transvalvular melhora a oxigenação coronária.",
      "O enfermeiro sabe que a estenose valvular reduz o trabalho mecânico do ventrículo esquerdo por diminuir passivamente a velocidade de ejeção durante a fase sistólica inicial."
    ],
    "correctIndex": 1,
    "explanation": "A aplicação de enfermagem para dissipação de energia mecânica e perda de carga no regime turbulento baseia-se no princípio: No doente com estenose da válvula aórtica, o enfermeiro monitoriza sinais de sobrecarga ventricular esquerda e cansaço fácil, pois o miocárdio tem de vencer uma perda de carga extrema para ejetar o sangue. Esta intervenção é essencial para a segurança hemodinâmica do doente.",
    "distractorAnalysis": [
      "Está incorreta: exercícios isométricos severos aumentam a pós-carga e a procura de oxigénio pelo ventrículo já sobrecarregado pela estenose aórtica, com risco iminente de síncope ou arritmia.",
      "Está incorreta: a estenose aórtica provoca hipoperfusão coronária e angina por aumento maciço da tensão parietal ventricular e perda de carga energética no orifício estenosado.",
      "Está incorreta: a estenose aórtica eleva drasticamente a pós-carga ventricular esquerda, exigindo pressões intracavitárias de até 200-250 mmHg para vencer a perda de carga gerada."
    ],
    "nursingApplication": "No doente com estenose da válvula aórtica, o enfermeiro monitoriza sinais de sobrecarga ventricular esquerda e cansaço fácil, pois o miocárdio tem de vencer uma perda de carga extrema para ejetar o sangue."
  },
  {
    "id": 4086,
    "topicId": 4,
    "question": "Ao analisar as variáveis físicas que regem 'dissipação de energia mecânica e perda de carga no regime turbulento', qual das seguintes afirmações expressa com rigor a relação hidrodinâmica entre pressão, velocidade e geometria vascular?",
    "options": [
      "No regime turbulento, toda a energia cinética ventricular é preservada sem qualquer dissipação, sendo integralmente convertida em tensão elástica na raiz da artéria aorta.",
      "A perda de carga hidrodinâmica no regime turbulento independe da rugosidade parietal interna da artéria ou da presença de calcificações ateroscleróticas ulceradas.",
      "No escoamento turbulento, grande parte da energia mecânica útil gerada pelo coração dissipa-se sob a forma de vibração mecânica tecidual sonora (sopros) e atrito térmico microscópico.",
      "O aparecimento de turbulência gera um aumento espontâneo do fluxo volumétrico arterial sem necessidade de qualquer alteração na contratilidade do miocárdio ventricular."
    ],
    "correctIndex": 2,
    "explanation": "A análise hidrodinâmica correta confirma que Grande parte da energia mecânica impulsionada pelo coração dissipa-se na forma de vibração tecidual sonora (sopros) e atrito térmico microscópico. O domínio destas leis permite ao enfermeiro interpretar os fenómenos vasculares com rigor científico.",
    "distractorAnalysis": [
      "Está incorreta: os vórtices caóticos colidem e transferem energia cinética para as escalas microscópicas de Kolmogorov, dissipando-se em calor e ondas acústicas audíveis (sopros).",
      "Está incorreta: a perda de carga no regime turbulento depende fortemente da rugosidade da parede do vaso e das irregularidades parietais induzidas por placas de ateroma.",
      "Está incorreta: a turbulência impõe maior resistência hidráulica ao avanço do fluido, exigindo que o coração trabalhe mais para manter o mesmo débito volumétrico circulatório."
    ],
    "nursingApplication": "No doente com estenose da válvula aórtica, o enfermeiro monitoriza sinais de sobrecarga ventricular esquerda e cansaço fácil, pois o miocárdio tem de vencer uma perda de carga extrema para ejetar o sangue."
  },
  {
    "id": 4087,
    "topicId": 4,
    "question": "Na hidrodinâmica circulatória aplicada à enfermagem, em relação a 'génese biofísica dos sopros cardíacos e vasculares à auscultação', qual é a fundamentação biofísica correta?",
    "options": [
      "Os sopros resultam do contacto direto das moléculas de oxigénio gasoso com a hemoglobina desoxigenada no interior do lúmen arterial durante a fase de contração isovolumétrica.",
      "O som dos sopros cardíacos é produzido pela fricção entre o saco pericárdico seroso e a pleura parietal pulmonar durante os movimentos ventilatórios normais do indivíduo.",
      "Os sopros cardíacos decorrem da passagem rápida de ondas eletromagnéticas produzidas pelo nódulo sinoauricular através das artérias coronárias epicárdicas em repouso.",
      "As flutuações locais de velocidade e pressão no fluxo turbulento fazem vibrar a parede vascular e as válvulas, gerando ondas acústicas que se propagam até à campânula do estetoscópio."
    ],
    "correctIndex": 3,
    "explanation": "Em biofísica circulatória, génese biofísica dos sopros cardíacos e vasculares à auscultação explica-se pelo facto de que as flutuações caóticas locais de velocidade e pressão no regime turbulento fazem vibrar as estruturas elásticas das paredes arteriais e folhetos valvulares. Essas vibrações mecânicas propagam-se através dos tecidos torácicos circundantes sob a forma de ondas acústicas percetíveis pelo diafragma do estetoscópio.",
    "distractorAnalysis": [
      "Está incorreta: o oxigénio no sangue está quimicamente dissolvido ou ligado à hemoglobina em solução líquida e não em fase gasosa livre que produza ruído acústico.",
      "Está incorreta: o atrito pericárdico gera um ruído característico de atrito (pericardite) e não os sopros transvalvulares clássicos que têm origem na turbulência hidrodinâmica interna.",
      "Está incorreta: os sopros são vibrações mecânicas acústicas decorrentes da turbulência de um fluido e não a transmissão de ondas eletromagnéticas da despolarização cardíaca."
    ],
    "nursingApplication": "O enfermeiro treina a auscultação cardíaca nos quatro focos principais (aórtico, pulmonar, tricúspide e mitral), correlacionando sopros sistólicos ou diastólicos com turbulência patológica."
  },
  {
    "id": 4088,
    "topicId": 4,
    "question": "Na avaliação clínica e administração de terapêutica por um enfermeiro, como se manifesta a aplicação prática de 'génese biofísica dos sopros cardíacos e vasculares à auscultação'?",
    "options": [
      "O enfermeiro treina a auscultação cardíaca sistemática nos quatro focos clínicos principais, correlacionando sopros sistólicos ou diastólicos com turbulência intracardíaca patológica.",
      "O enfermeiro limita a auscultação ao foco aórtico acessório porque todas as valvulopatias cardíacas emitem frequências acústicas perfeitamente idênticas no tórax anterior.",
      "O enfermeiro presume que sopros diastólicos são sempre achados fisiológicos normais decorrentes do relaxamento ventricular rápido em adolescentes e jovens adultos saudáveis.",
      "O enfermeiro substitui a auscultação cardíaca pela medição da temperatura axilar periférica, assumindo que a turbulência vascular produz febre sistémica mensurável imediata."
    ],
    "correctIndex": 0,
    "explanation": "A aplicação de enfermagem para génese biofísica dos sopros cardíacos e vasculares à auscultação baseia-se no princípio: O enfermeiro treina a auscultação cardíaca nos quatro focos principais (aórtico, pulmonar, tricúspide e mitral), correlacionando sopros sistólicos ou diastólicos com turbulência patológica. Esta intervenção é essencial para a segurança hemodinâmica do doente.",
    "distractorAnalysis": [
      "Está incorreta: cada válvula projeta as suas vibrações acústicas preferencialmente para o seu foco anatómico específico de auscultação precordial (aórtico, pulmonar, tricúspide e mitral).",
      "Está incorreta: sopros diastólicos (como na estenose mitral ou insuficiência aórtica) são quase invariavelmente patológicos e exigem investigação cardiológica detalhada.",
      "Está incorreta: o atrito térmico gerado pela turbulência vascular é infinitesimal a nível sistémico, não provocando elevação mensurável da temperatura axilar do doente."
    ],
    "nursingApplication": "O enfermeiro treina a auscultação cardíaca nos quatro focos principais (aórtico, pulmonar, tricúspide e mitral), correlacionando sopros sistólicos ou diastólicos com turbulência patológica."
  },
  {
    "id": 4089,
    "topicId": 4,
    "question": "Ao analisar as variáveis físicas que regem 'génese biofísica dos sopros cardíacos e vasculares à auscultação', qual das seguintes afirmações expressa com rigor a relação hidrodinâmica entre pressão, velocidade e geometria vascular?",
    "options": [
      "A amplitude acústica dos sopros é inversamente proporcional à velocidade do jato de sangue estenosado, tornando-se inaudível em gradientes de pressão transvalvulares muito elevados.",
      "As flutuações de pressão mecânica transmural induzidas por turbilhões caóticos propagam-se através dos tecidos vizinhos como ondas elásticas na faixa de frequência audível de 20 Hz a 2 kHz.",
      "A frequência fundamental de um sopro vascular é estritamente independente do diâmetro do vaso condutor e da elasticidade estrutural da parede biológica circundante.",
      "O estetoscópio ausculta o som através da amplificação elétrica ativa dos potenciais de ação despolarizantes emitidos pelos miócitos da parede das artérias estenosadas."
    ],
    "correctIndex": 1,
    "explanation": "A análise hidrodinâmica correta confirma que Essas vibrações mecânicas propagam-se através dos tecidos torácicos circundantes sob a forma de ondas acústicas percetíveis pelo diafragma do estetoscópio. O domínio destas leis permite ao enfermeiro interpretar os fenómenos vasculares com rigor científico.",
    "distractorAnalysis": [
      "Está incorreta: a intensidade sonora e a energia do sopro aumentam exponencialmente com a velocidade do jato e o gradiente de pressão transvalvular (intensidade proporcional a v⁴ ou v⁶).",
      "Está incorreta: a frequência e timbre do sopro dependem diretamente da geometria do orifício, da velocidade do fluxo e da rigidez elástica dos tecidos que entram em ressonância mecânica.",
      "Está incorreta: o estetoscópio clínico padrão é um instrumento puramente acústico mecânico que transmite ondas sonoras aéreas através de tubos de borracha sem transdutores elétricos."
    ],
    "nursingApplication": "O enfermeiro treina a auscultação cardíaca nos quatro focos principais (aórtico, pulmonar, tricúspide e mitral), correlacionando sopros sistólicos ou diastólicos com turbulência patológica."
  },
  {
    "id": 4090,
    "topicId": 4,
    "question": "Na hidrodinâmica circulatória aplicada à enfermagem, em relação a 'lesão endotelial provocada por fluxo turbulento crónico', qual é a fundamentação biofísica correta?",
    "options": [
      "O fluxo turbulento crónico protege o endotélio vascular contra a aterosclerose, limpando mecanicamente quaisquer depósitos lipídicos através de forças de atrito abrasivo elevadas.",
      "A turbulência sanguínea estimula a proliferação ilimitada de elastina pura, tornando as artérias completamente invulneráveis ao envelhecimento e a lesões ateroscleróticas calcificadas.",
      "As tensões de cisalhamento oscilatórias na turbulência ativam cascatas pró-inflamatórias, reduzem a síntese de óxido nítrico e promovem a formação de placas de ateroma em bifurcações.",
      "O cisalhamento caótico arterial induz a apoptose de todos os glóbulos brancos circulantes, impedindo qualquer resposta imunológica celular no interior da parede das artérias sãs."
    ],
    "correctIndex": 2,
    "explanation": "Em biofísica circulatória, lesão endotelial provocada por fluxo turbulento crónico explica-se pelo facto de que as tensões de cisalhamento oscilatórias e caóticas na parede vascular ativam cascatas inflamatórias, suprimem a síntese de óxido nítrico e promovem a adesão de plaquetas e monócitos. Estas zonas com escoamento turbulento (bifurcações arteriais e curvaturas acentuadas) são locais de eleição para o desenvolvimento precoce de placas de ateroma.",
    "distractorAnalysis": [
      "Está incorreta: zonas de cisalhamento oscilatório baixo ou turbulento (como a face externa de bifurcações) são os locais primordiais de adesão plaquetária, inflamação e aterogénese.",
      "Está incorreta: a turbulência não regenera elastina benéfica; pelo contrário, causa fragmentação elástica da túnica média, proliferação miointimal desordenada e rigidez vascular.",
      "Está incorreta: a turbulência promove o recrutamento e adesão endotelial de monócitos e macrófagos, sendo o gatilho biofísico primordial para a cascata da inflamação aterosclerótica."
    ],
    "nursingApplication": "O enfermeiro atua na educação para a saúde e controlo dos fatores de risco cardiovascular (tabagismo, hipertensão, dislipidemia) para prevenir a progressão das placas ateroscleróticas."
  },
  {
    "id": 4091,
    "topicId": 4,
    "question": "Na avaliação clínica e administração de terapêutica por um enfermeiro, como se manifesta a aplicação prática de 'lesão endotelial provocada por fluxo turbulento crónico'?",
    "options": [
      "O enfermeiro instrui o doente a permanecer em repouso absoluto permanente para que o coração pare de ejetar sangue pulsátil e elimine todas as tensões de cisalhamento fisiológicas.",
      "O enfermeiro administra soluções de heparina a 100% por via oral para dissolver quimicamente as placas de ateroma calcificadas situadas nas bifurcações das artérias carótidas.",
      "O enfermeiro encoraja o doente a fumar após as refeições sob a teoria de que a nicotina dilata as arteríolas periféricas e anula a turbulência nas bifurcações arteriais cerebrais.",
      "O enfermeiro atua na educação para a saúde e controlo rigoroso dos fatores de risco cardiovascular (tabagismo, HTA, dislipidemia) para travar a progressão da disfunção endotelial."
    ],
    "correctIndex": 3,
    "explanation": "A aplicação de enfermagem para lesão endotelial provocada por fluxo turbulento crónico baseia-se no princípio: O enfermeiro atua na educação para a saúde e controlo dos fatores de risco cardiovascular (tabagismo, hipertensão, dislipidemia) para prevenir a progressão das placas ateroscleróticas. Esta intervenção é essencial para a segurança hemodinâmica do doente.",
    "distractorAnalysis": [
      "Está incorreta: o repouso absoluto permanente é prejudicial e inviável; o exercício físico regular e aeróbico estimula o fluxo laminar fisiológico com libertação benéfica de óxido nítrico.",
      "Está incorreta: a heparina é um anticoagulante parenteral inativado no trato digestivo e não dissolve placas de ateroma calcificadas consolidadas na árvore arterial.",
      "Está incorreta: o tabagismo lesa gravemente o endotélio vascular, acelera a aterosclerose e aumenta o risco de trombose, sendo estritamente contraindicado pela enfermagem."
    ],
    "nursingApplication": "O enfermeiro atua na educação para a saúde e controlo dos fatores de risco cardiovascular (tabagismo, hipertensão, dislipidemia) para prevenir a progressão das placas ateroscleróticas."
  },
  {
    "id": 4092,
    "topicId": 4,
    "question": "Ao analisar as variáveis físicas que regem 'lesão endotelial provocada por fluxo turbulento crónico', qual das seguintes afirmações expressa com rigor a relação hidrodinâmica entre pressão, velocidade e geometria vascular?",
    "options": [
      "Zonas de fluxo turbulento e tensões de corte oscilatórias baixas ou reversíveis (bifurcações e curvaturas acentuadas) constituem locais de eleição para o desenvolvimento de ateroma.",
      "A aterosclerose desenvolve-se exclusivamente em segmentos retos de capilares microscópicos, sendo as grandes artérias elásticas imunes à deposição lipídica e calcificação.",
      "O fluxo turbulento impede a fixação de monócitos na camada íntima devido à elevada força centrífuga que ejeta todas as células para o centro geométrico do conduto vascular.",
      "A tensão de cisalhamento constante e unidirecional de alto valor é a principal causa da disfunção endotelial e rutura aterotrombótica aguda das placas carotídeas estáveis."
    ],
    "correctIndex": 0,
    "explanation": "A análise hidrodinâmica correta confirma que Estas zonas com escoamento turbulento (bifurcações arteriais e curvaturas acentuadas) são locais de eleição para o desenvolvimento precoce de placas de ateroma. O domínio destas leis permite ao enfermeiro interpretar os fenómenos vasculares com rigor científico.",
    "distractorAnalysis": [
      "Está incorreta: os capilares microscópicos não desenvolvem placas de ateroma; a aterosclerose é uma doença das artérias de grande e médio calibre (aorta, coronárias, carótidas, femorais).",
      "Está incorreta: a perda do fluxo laminar unidirecional nas bifurcações favorece o aumento da permeabilidade endotelial às LDL e a fixação de monócitos na íntima arterial.",
      "Está incorreta: tensões de cisalhamento unidirecionais fisiológicas elevadas promovem a expressão de genes ateroprotetores (eNOS, Krüppel-like factor 2), prevenindo lesões endoteliais."
    ],
    "nursingApplication": "O enfermeiro atua na educação para a saúde e controlo dos fatores de risco cardiovascular (tabagismo, hipertensão, dislipidemia) para prevenir a progressão das placas ateroscleróticas."
  },
  {
    "id": 4093,
    "topicId": 4,
    "question": "Na hidrodinâmica circulatória aplicada à enfermagem, em relação a 'diferenciação clínica entre sopro funcional e sopro orgânico estrutural', qual é a fundamentação biofísica correta?",
    "options": [
      "O sopro funcional ocorre exclusivamente em doentes com insuficiência renal terminal com próteses mecânicas, e o orgânico em recém-nascidos prematuros saudáveis em aleitamento.",
      "O sopro funcional resulta de alterações hemodinâmicas transitórias (anemia ou febre) sem lesão valvular, enquanto o orgânico decorre de defeitos estruturais fixos nas válvulas.",
      "O sopro funcional emite ondas de choque audíveis a vários metros de distância sem estetoscópio, enquanto o sopro orgânico apenas é detetado através de arteriografia invasiva.",
      "O sopro funcional não sofre qualquer alteração perante transfusões de sangue, enquanto o sopro estrutural desaparece imediatamente após a correção da volemia plasmática."
    ],
    "correctIndex": 1,
    "explanation": "Em biofísica circulatória, diferenciação clínica entre sopro funcional e sopro orgânico estrutural explica-se pelo facto de que o sopro funcional decorre de alterações reológicas ou hiperdinâmicas transitórias (como anemia severa ou febre alta) sem anomalia anatómica das válvulas. Já o sopro orgânico resulta de defeitos estruturais fixos (como estenose valvular por calcificação, insuficiência ou prolapso de folhetos com regurgitação turbulenta).",
    "distractorAnalysis": [
      "Está incorreta: o sopro funcional é comum em estados hipercinéticos em indivíduos com válvulas perfeitamente sãs; próteses mecânicas produzem ruídos e sopros estruturais próprios.",
      "Está incorreta: ambos os sopros são habitualmente auscultados com estetoscópio clínico sobre a parede torácica, diferindo pela presença ou ausência de cardiopatia estrutural de base.",
      "Está incorreta: a correção da anemia eleva o hematócrito e a viscosidade, eliminando frequentemente o sopro funcional, ao passo que o sopro orgânico persiste após a transfusão."
    ],
    "nursingApplication": "O enfermeiro vigia o hemograma do doente anémico e observa que a transfusão de concentrado de eritrócitos eleva a viscosidade e atenua ou elimina o sopro funcional de ejeção."
  },
  {
    "id": 4094,
    "topicId": 4,
    "question": "Na avaliação clínica e administração de terapêutica por um enfermeiro, como se manifesta a aplicação prática de 'diferenciação clínica entre sopro funcional e sopro orgânico estrutural'?",
    "options": [
      "O enfermeiro administra diuréticos de ansa de alta potência no doente anémico para diminuir ainda mais o hematócrito e tentar acelerar o fluxo funcional através da válvula aórtica.",
      "O enfermeiro prepara o doente com sopro funcional anémico para cirurgia de substituição valvular de urgência, considerando a lesão anatómica das cúspides como irreversível.",
      "O enfermeiro vigia o hemograma do doente anémico e observa que a transfusão de eritrócitos eleva a viscosidade (η) e atenua ou elimina o sopro funcional de ejeção aórtica.",
      "O enfermeiro desvaloriza a auscultação de sopro num doente pós-operatório com febre de 39 °C, assumindo que a hipertermia elimina qualquer possibilidade física de turbulência vascular."
    ],
    "correctIndex": 2,
    "explanation": "A aplicação de enfermagem para diferenciação clínica entre sopro funcional e sopro orgânico estrutural baseia-se no princípio: O enfermeiro vigia o hemograma do doente anémico e observa que a transfusão de concentrado de eritrócitos eleva a viscosidade e atenua ou elimina o sopro funcional de ejeção. Esta intervenção é essencial para a segurança hemodinâmica do doente.",
    "distractorAnalysis": [
      "Está incorreta: desidratar o doente anémico não resolve a etiologia e pode comprometer a perfusão de órgãos; a transfusão ou correção do défice de ferro restabelece a viscosidade fisiológica.",
      "Está incorreta: o sopro funcional anémico não decorre de lesão anatómica fixa das válvulas, não tendo qualquer indicação para substituição cirúrgica com prótese valvular.",
      "Está incorreta: a febre alta induz um estado circulatório hipercinético (débito cardíaco e velocidade aumentados) que eleva o número de Reynolds, originando frequentemente sopros funcionais."
    ],
    "nursingApplication": "O enfermeiro vigia o hemograma do doente anémico e observa que a transfusão de concentrado de eritrócitos eleva a viscosidade e atenua ou elimina o sopro funcional de ejeção."
  },
  {
    "id": 4095,
    "topicId": 4,
    "question": "Ao analisar as variáveis físicas que regem 'diferenciação clínica entre sopro funcional e sopro orgânico estrutural', qual das seguintes afirmações expressa com rigor a relação hidrodinâmica entre pressão, velocidade e geometria vascular?",
    "options": [
      "O sopro orgânico desaparece invariavelmente logo que o doente atinge a frequência cardíaca de repouso inferior a 60 batimentos por minuto em decúbito horizontal.",
      "O sopro orgânico tem génese puramente psiquiátrica em doentes ansiosos, sendo provocado pela hiperventilação alveolar aguda sem alteração das velocidades cardíacas.",
      "O sopro orgânico caracteriza-se pela ausência de qualquer vetor de turbulência intracardíaca, manifestando-se como um som monofónico contínuo de baixa frequência basal.",
      "O sopro orgânico resulta de defeitos anatómicos consolidados como estenose calcificada, regurgitação por prolapso de folhetos ou comunicações anómalas intercavitárias."
    ],
    "correctIndex": 3,
    "explanation": "A análise hidrodinâmica correta confirma que Já o sopro orgânico resulta de defeitos estruturais fixos (como estenose valvular por calcificação, insuficiência ou prolapso de folhetos com regurgitação turbulenta). O domínio destas leis permite ao enfermeiro interpretar os fenómenos vasculares com rigor científico.",
    "distractorAnalysis": [
      "Está incorreta: sopros orgânicos resultantes de alterações morfológicas fixas (estenose ou insuficiência) persistem mesmo com bradicardia e em repouso basal.",
      "Está incorreta: os sopros orgânicos assentam em lesões anatómicas materiais comprováveis por ecocardiograma e não em distúrbios psicogénicos ou estados puramente emocionais.",
      "Está incorreta: a própria definição biofísica de qualquer sopro audível exige a presença de escoamento turbulento com vórtices e flutuações de pressão acústica audíveis."
    ],
    "nursingApplication": "O enfermeiro vigia o hemograma do doente anémico e observa que a transfusão de concentrado de eritrócitos eleva a viscosidade e atenua ou elimina o sopro funcional de ejeção."
  },
  {
    "id": 4096,
    "topicId": 4,
    "question": "Na hidrodinâmica circulatória aplicada à enfermagem, em relação a 'fórmula e significado físico do Número de Reynolds', qual é a fundamentação biofísica correta?",
    "options": [
      "Re = (ρ · v · d) / η, representando a razão adimensional entre as forças de inércia que desestabilizam o escoamento e as forças viscosas que amortecem as perturbações fluidas.",
      "Re = (η · v) / (ρ · d), representando o produto escalar da pressão osmótica tecidual pela capacitância vascular dos grandes troncos arteriais condutores em decúbito.",
      "Re = (P · r⁴) / (8 · η · L), representando a resistência hidráulica global calculada de acordo com as leis do amortecimento elástico arterial no sistema venoso profundo.",
      "Re = m · a / (g · h), representando a aceleração da gravidade corrigida pelo desnível hidrostático entre a raiz da aorta ascendente e a fossa poplítea dos membros inferiores."
    ],
    "correctIndex": 0,
    "explanation": "Em biofísica circulatória, fórmula e significado físico do Número de Reynolds explica-se pelo facto de que Re = (ρ · v · d) / η, representando a razão adimensional entre as forças de inércia (que tendem a desordenar o fluido) e as forças viscosas de atrito (que tendem a amortecer perturbações e manter o fluxo laminar). Onde ρ é a massa volúmica (densidade), v a velocidade média, d o diâmetro da conduta e η a viscosidade dinâmica do fluido.",
    "distractorAnalysis": [
      "Está incorreta: inverte a razão física colocando a viscosidade no numerador e a densidade e diâmetro no denominador, gerando uma grandeza inversa e dimensionalmente errada.",
      "Está incorreta: confunde o número de Reynolds com a Lei de Poiseuille para a resistência e caudal em regime laminar cilíndrico (Q = π r⁴ ΔP / 8 η L).",
      "Está incorreta: mistura grandezas mecânicas newtonianas de força e energia potencial gravítica sem qualquer correspondência com o critério hidrodinâmico de Reynolds."
    ],
    "nursingApplication": "O enfermeiro aplica esta equação para compreender por que o sangue atinge turbulência facilmente na aorta ascendente durante o pico de ejeção sistólica (onde v e d são máximos)."
  },
  {
    "id": 4097,
    "topicId": 4,
    "question": "Na avaliação clínica e administração de terapêutica por um enfermeiro, como se manifesta a aplicação prática de 'fórmula e significado físico do Número de Reynolds'?",
    "options": [
      "O enfermeiro calcula o número de Reynolds à cabeceira para definir a dose de paracetamol a administrar por via intravenosa em doentes com cefaleias pós-operatórias.",
      "O enfermeiro aplica esta equação para compreender por que o sangue atinge turbulência na aorta ascendente no pico sistólico, momento em que o diâmetro (d) e a velocidade (v) são máximos.",
      "O enfermeiro presume que quanto menor for o diâmetro do vaso sanguíneo, maior será o número de Reynolds, esperando turbulência maciça nos capilares periféricos de 5 μm.",
      "O enfermeiro utiliza o número de Reynolds para ajustar a temperatura do banho de leito, assumindo que a água fria reduz o risco de embolia gasosa durante a higiene matinal."
    ],
    "correctIndex": 1,
    "explanation": "A aplicação de enfermagem para fórmula e significado físico do Número de Reynolds baseia-se no princípio: O enfermeiro aplica esta equação para compreender por que o sangue atinge turbulência facilmente na aorta ascendente durante o pico de ejeção sistólica (onde v e d são máximos). Esta intervenção é essencial para a segurança hemodinâmica do doente.",
    "distractorAnalysis": [
      "Está incorreta: a dosagem de fármacos rege-se por princípios de farmacocinética (peso, depuração renal/hepática) e não pelo número de Reynolds do escoamento arterial.",
      "Está incorreta: como o diâmetro d figura no numerador (Re = ρ v d / η), vasos com calibres microscópicos (capilares) possuem valores de Reynolds minúsculos (Re << 1), garantindo fluxo laminar.",
      "Está incorreta: o número de Reynolds é um parâmetro hidrodinâmico intravascular e não tem relação com o ajuste térmico empírico da higiene corporal do doente."
    ],
    "nursingApplication": "O enfermeiro aplica esta equação para compreender por que o sangue atinge turbulência facilmente na aorta ascendente durante o pico de ejeção sistólica (onde v e d são máximos)."
  },
  {
    "id": 4098,
    "topicId": 4,
    "question": "Ao analisar as variáveis físicas que regem 'fórmula e significado físico do Número de Reynolds', qual das seguintes afirmações expressa com rigor a relação hidrodinâmica entre pressão, velocidade e geometria vascular?",
    "options": [
      "ρ é a resistência periférica, v o volume urinário horário, d a espessura da parede do ventrículo e η o tónus simpático autónomo no nódulo auriculoventricular.",
      "ρ é a permissividade elétrica tecidual, v o potencial de membrana em repouso, d o diâmetro das hemácias e η o coeficiente de difusão de Fick através do endotélio.",
      "ρ é a massa volúmica do sangue, v a velocidade média, d o diâmetro luminal do conduto e η o coeficiente de viscosidade dinâmica do sangue biológico em escoamento.",
      "ρ é a complacência da aorta, v a voltagem de desfibrilhação cardíaca, d a impedância torácica e η a condutância dos eléctrodos adesivos descartáveis do desfibrilhador."
    ],
    "correctIndex": 2,
    "explanation": "A análise hidrodinâmica correta confirma que Onde ρ é a massa volúmica (densidade), v a velocidade média, d o diâmetro da conduta e η a viscosidade dinâmica do fluido. O domínio destas leis permite ao enfermeiro interpretar os fenómenos vasculares com rigor científico.",
    "distractorAnalysis": [
      "Está incorreta: substitui os parâmetros físicos da mecânica dos fluidos clássica por grandezas fisiológicas não relacionadas (volume urinário, espessura ventricular, tónus simpático).",
      "Está incorreta: confunde parâmetros de hidrodinâmica cardiovascular com grandezas de bioeletrogénese e transporte difusional de solutos celulares.",
      "Está incorreta: atribui termos eletrofisiológicos e parâmetros de cardioversão elétrica a uma fórmula hidrodinâmica desenvolvida por Osborne Reynolds para escoamento de fluidos."
    ],
    "nursingApplication": "O enfermeiro aplica esta equação para compreender por que o sangue atinge turbulência facilmente na aorta ascendente durante o pico de ejeção sistólica (onde v e d são máximos)."
  },
  {
    "id": 4099,
    "topicId": 4,
    "question": "Na hidrodinâmica circulatória aplicada à enfermagem, em relação a 'limiar crítico do Número de Reynolds no sistema vascular humano', qual é a fundamentação biofísica correta?",
    "options": [
      "O fluxo é sempre turbulento para qualquer valor de Reynolds superior a 10, exigindo bombas mecânicas axiais para restabelecer a laminaridade em qualquer artéria sistémica.",
      "O limiar crítico no corpo humano é de Re = 50 000, não sendo possível gerar turbulência em vasos com calibre inferior a dez centímetros em nenhuma condição clínica.",
      "O escoamento arterial torna-se turbulento apenas quando o número de Reynolds atinge valores estritamente negativos em doentes em choque séptico distributivo grave.",
      "Em tubos lisos retos, o fluxo é estritamente laminar para Re < 2000 e francamente turbulento para Re > 3000; no sistema vascular, curvaturas e pulsatilidade antecipam a turbulência para Re de 1000-1500."
    ],
    "correctIndex": 3,
    "explanation": "Em biofísica circulatória, limiar crítico do Número de Reynolds no sistema vascular humano explica-se pelo facto de que em tubos lisos retos, o fluxo é estritamente laminar para Re < 2000; a zona de transição situa-se entre 2000 e 3000, e acima de 3000 o fluxo é francamente turbulento. No sistema cardiovascular, devido à pulsatilidade cardíaca, ramificações e curvaturas anatómicas, a turbulência local pode surgir precocemente para Re tão baixos quanto 1000 a 1500.",
    "distractorAnalysis": [
      "Está incorreta: para Re < 2000 o fluxo é invariavelmente estável e laminar; valores tão baixos quanto 10 representam escoamentos estritamente viscosos e silenciosos (creeping flow).",
      "Está incorreta: um limiar de 50 000 é ordens de grandeza superior ao real; no sistema cardiovascular humano a turbulência surge rotineiramente para Re entre 1000 e 2500.",
      "Está incorreta: por ser o quociente de grandezas físicas estritamente positivas (densidade, velocidade, diâmetro e viscosidade), o número de Reynolds nunca assume valores negativos."
    ],
    "nursingApplication": "O enfermeiro sabe que nas bifurcações das grandes artérias (como a bifurcação da carótida comum) a geometria complexa baixa o limiar crítico de Re, favorecendo turbilhões."
  },
  {
    "id": 4100,
    "topicId": 4,
    "question": "Na avaliação clínica e administração de terapêutica por um enfermeiro, como se manifesta a aplicação prática de 'limiar crítico do Número de Reynolds no sistema vascular humano'?",
    "options": [
      "Nas bifurcações das grandes artérias (como a carótida comum), a geometria complexa e a separação de linhas de corrente baixam o limiar crítico de Re, facilitando turbilhões locais.",
      "Nas bifurcações carotídeas, o sangue acelera para a velocidade da luz, estabilizando as linhas de corrente laminares e impedindo qualquer atrito das hemácias contra a íntima.",
      "O enfermeiro sabe que as bifurcações arteriais atuam como filtros biológicos de eritrócitos velhos, destruindo os glóbulos vermelhos com mais de 30 dias de vida circulatória.",
      "A presença de turbilhões nas bifurcações arteriais previne totalmente o aparecimento de aterosclerose por promover a lubrificação contínua da túnica íntima com colagénio solúvel."
    ],
    "correctIndex": 0,
    "explanation": "A aplicação de enfermagem para limiar crítico do Número de Reynolds no sistema vascular humano baseia-se no princípio: O enfermeiro sabe que nas bifurcações das grandes artérias (como a bifurcação da carótida comum) a geometria complexa baixa o limiar crítico de Re, favorecendo turbilhões. Esta intervenção é essencial para a segurança hemodinâmica do doente.",
    "distractorAnalysis": [
      "Está incorreta: a velocidade sanguínea obedece aos limites fisiológicos e hidrodinâmicos normais, sendo as bifurcações zonas de separação de fluxo com vórtices de baixa tensão de cisalhamento.",
      "Está incorreta: a destruição fisiológica dos eritrócitos senescentes realiza-se no baço (cordões de Billroth do sistema reticuloendotelial esplénico) e não nas bifurcações carotídeas.",
      "Está incorreta: a alteração do escoamento nas bifurcações é precisamente o principal fator mecânico desencadeador da deposição de placas ateromatosas carotídeas."
    ],
    "nursingApplication": "O enfermeiro sabe que nas bifurcações das grandes artérias (como a bifurcação da carótida comum) a geometria complexa baixa o limiar crítico de Re, favorecendo turbilhões."
  },
  {
    "id": 4101,
    "topicId": 4,
    "question": "Ao analisar as variáveis físicas que regem 'limiar crítico do Número de Reynolds no sistema vascular humano', qual das seguintes afirmações expressa com rigor a relação hidrodinâmica entre pressão, velocidade e geometria vascular?",
    "options": [
      "A pulsatilidade cardíaca estabiliza o fluxo laminar, elevando o limiar crítico de transição para valores de Reynolds invariavelmente superiores a 15 000 em todos os grandes vasos.",
      "Devido à pulsatilidade do débito cardíaco, ramificações e curvaturas arteriais, a turbulência cardiovascular surge para valores de Reynolds mais baixos (Re entre 1000 e 1500).",
      "O limiar crítico no sistema vascular humano é rigorosamente fixo em Re = 2000, sendo imune a quaisquer irregularidades anatómicas parietais ou bifurcações dos vasos arteriais.",
      "A turbulência no aparelho circulatório só é fisicamente possível se o número de Reynolds for estritamente nulo, indicando a cessação completa de forças viscosas no endotélio."
    ],
    "correctIndex": 1,
    "explanation": "A análise hidrodinâmica correta confirma que No sistema cardiovascular, devido à pulsatilidade cardíaca, ramificações e curvaturas anatómicas, a turbulência local pode surgir precocemente para Re tão baixos quanto 1000 a 1500. O domínio destas leis permite ao enfermeiro interpretar os fenómenos vasculares com rigor científico.",
    "distractorAnalysis": [
      "Está incorreta: o escoamento pulsátil e as curvaturas vasculares geram perturbações que desestabilizam o fluxo mais cedo, baixando (e não elevando) o limiar de Reynolds para 1000-1500.",
      "Está incorreta: o limiar de 2000 é válido apenas para tubos retos e lisos com fluxo estacionário; no sistema cardiovascular as variações geométricas antecipam a transição turbulenta.",
      "Está incorreta: um número de Reynolds nulo traduz ausência total de movimento ou velocidade zero (v = 0), condição na qual não existe qualquer escoamento ou turbulência."
    ],
    "nursingApplication": "O enfermeiro sabe que nas bifurcações das grandes artérias (como a bifurcação da carótida comum) a geometria complexa baixa o limiar crítico de Re, favorecendo turbilhões."
  },
  {
    "id": 4102,
    "topicId": 4,
    "question": "Na hidrodinâmica circulatória aplicada à enfermagem, em relação a 'efeito da velocidade (v) e diâmetro (d) no aumento de Re', qual é a fundamentação biofísica correta?",
    "options": [
      "O Número de Reynolds é inversamente proporcional ao diâmetro do conduto, atingindo os valores mais elevados e perigosos no interior dos capilares microscópicos da circulação renal.",
      "A velocidade do sangue reduz o número de Reynolds por dissipar a inércia do fluido, tornando o escoamento na raiz aórtica muito mais estável do que nas pequenas vénulas periféricas.",
      "O Número de Reynolds é diretamente proporcional à velocidade e ao diâmetro; vasos amplos com alta velocidade (aorta ascendente) apresentam os maiores valores de Re no organismo.",
      "O diâmetro vascular não exerce qualquer influência matemática ou física no número de Reynolds, o qual depende unicamente da temperatura ambiente da enfermaria hospitalar."
    ],
    "correctIndex": 2,
    "explanation": "Em biofísica circulatória, efeito da velocidade (v) e diâmetro (d) no aumento de Re explica-se pelo facto de que o Número de Reynolds é diretamente proporcional à velocidade do fluido e ao diâmetro interno do vaso sanguíneo. Vasos de grande calibre com fluxos de alta velocidade (como a aorta na saída do ventrículo esquerdo) apresentam os maiores valores basais de Re no corpo humano (Re ~ 1500 a 4000 na sístole).",
    "distractorAnalysis": [
      "Está incorreta: o diâmetro d figura no numerador da fórmula (Re = ρ v d / η); logo, vasos de menor diâmetro apresentam números de Reynolds muito mais baixos.",
      "Está incorreta: a velocidade v figura no numerador, pelo que velocidades elevadas aumentam as forças de inércia e elevam o valor de Re, favorecendo a instabilidade turbulenta.",
      "Está incorreta: o diâmetro geométrico é uma das variáveis centrais do número de Reynolds, ditando a escala espacial das forças de inércia face às forças viscosas do fluido."
    ],
    "nursingApplication": "Em exercício físico vigoroso, o aumento do débito cardíaco e da velocidade de ejeção dispara o Re na aorta, podendo gerar um sopro sistólico fisiológico benigno de ejeção."
  },
  {
    "id": 4103,
    "topicId": 4,
    "question": "Na avaliação clínica e administração de terapêutica por um enfermeiro, como se manifesta a aplicação prática de 'efeito da velocidade (v) e diâmetro (d) no aumento de Re'?",
    "options": [
      "No exercício intenso, o aumento da frequência cardíaca reduz o número de Reynolds para zero, transformando a totalidade da circulação sistémica num bloco sólido gelatinoso.",
      "O enfermeiro sabe que a velocidade do sangue diminui durante o esforço físico moderado para permitir que o miocárdio descanse entre cada sístole de ejeção ventricular.",
      "A auscultação de um sopro de ejeção transitório após uma corrida é prova cabal de rotura iminente dos folhetos da válvula aórtica, exigindo internamento em cuidados intensivos.",
      "No exercício físico vigoroso, o aumento do débito e da velocidade de ejeção ventricular eleva o valor de Re na aorta, podendo gerar um sopro sistólico fisiológico de ejeção benigno."
    ],
    "correctIndex": 3,
    "explanation": "A aplicação de enfermagem para efeito da velocidade (v) e diâmetro (d) no aumento de Re baseia-se no princípio: Em exercício físico vigoroso, o aumento do débito cardíaco e da velocidade de ejeção dispara o Re na aorta, podendo gerar um sopro sistólico fisiológico benigno de ejeção. Esta intervenção é essencial para a segurança hemodinâmica do doente.",
    "distractorAnalysis": [
      "Está incorreta: o exercício físico aumenta o débito cardíaco e a velocidade do sangue, elevando o número de Reynolds e mantendo o sangue em estado líquido perfeitamente funcional.",
      "Está incorreta: durante o esforço o débito cardíaco eleva-se até 4 a 6 vezes o valor basal, aumentando acentuadamente a velocidade média do sangue nos grandes vasos de saída.",
      "Está incorreta: sopros sistólicos de ejeção durante esforço ou estados hipercinéticos em indivíduos jovens são frequentemente benignos e funcionais, não indicando lesão mecânica aguda."
    ],
    "nursingApplication": "Em exercício físico vigoroso, o aumento do débito cardíaco e da velocidade de ejeção dispara o Re na aorta, podendo gerar um sopro sistólico fisiológico benigno de ejeção."
  },
  {
    "id": 4104,
    "topicId": 4,
    "question": "Ao analisar as variáveis físicas que regem 'efeito da velocidade (v) e diâmetro (d) no aumento de Re', qual das seguintes afirmações expressa com rigor a relação hidrodinâmica entre pressão, velocidade e geometria vascular?",
    "options": [
      "Vasos de grande calibre com escoamento de alta velocidade (como a aorta torácica na sístole) apresentam valores basais de Re elevados (Re ~1500 a 4000), propensos à turbulência.",
      "A aorta humana opera permanentemente com números de Reynolds inferiores a 10, garantindo um escoamento estritamente laminar mesmo perante débitos de 30 litros por minuto.",
      "As arteríolas pré-capilares possuem os valores mais elevados de Re de todo o organismo devido à sua espessa camada muscular lisa que acelera o sangue para a periferia tecidual.",
      "O Número de Reynolds na aorta torácica ascende a mais de 1 000 000 em repouso basal, gerando cavitação supersónica contínua no lúmen do arco aórtico dos jovens adultos."
    ],
    "correctIndex": 0,
    "explanation": "A análise hidrodinâmica correta confirma que Vasos de grande calibre com fluxos de alta velocidade (como a aorta na saída do ventrículo esquerdo) apresentam os maiores valores basais de Re no corpo humano (Re ~ 1500 a 4000 na sístole). O domínio destas leis permite ao enfermeiro interpretar os fenómenos vasculares com rigor científico.",
    "distractorAnalysis": [
      "Está incorreta: na aorta humana o pico de velocidade sistólica eleva o número de Reynolds para valores próximos ou acima do limiar crítico (1500-4000), gerando vórtices transitórios.",
      "Está incorreta: nas arteríolas o diâmetro é reduzido (~20-50 μm), o que mantém o número de Reynolds em valores muito baixos (Re << 100), assegurando regime estritamente laminar.",
      "Está incorreta: valores de 1 000 000 ocorrem na hidrodinâmica de grandes navios e aeronaves, sendo fisicamente impossíveis e biologicamente letais na circulação humana."
    ],
    "nursingApplication": "Em exercício físico vigoroso, o aumento do débito cardíaco e da velocidade de ejeção dispara o Re na aorta, podendo gerar um sopro sistólico fisiológico benigno de ejeção."
  },
  {
    "id": 4105,
    "topicId": 4,
    "question": "Na hidrodinâmica circulatória aplicada à enfermagem, em relação a 'efeito inverso da viscosidade (η) no Número de Reynolds', qual é a fundamentação biofísica correta?",
    "options": [
      "A redução da viscosidade sanguínea na anemia estabiliza as linhas de corrente laminares, impedindo totalmente o aparecimento de turbulência ou de sopros cardíacos audíveis.",
      "O Número de Reynolds é inversamente proporcional à viscosidade dinâmica (η); a redução da viscosidade na anemia severa eleva o Re para além do limiar crítico de turbulência.",
      "O Número de Reynolds é diretamente proporcional ao quadrado da viscosidade, de modo que fluidos extremamente densos e viscosos são os mais propensos a desenvolver turbilhões.",
      "A viscosidade dinâmica do sangue figura apenas na equação da difusão de solutos capilares, não tendo qualquer interferência na definição matemática do número de Reynolds."
    ],
    "correctIndex": 1,
    "explanation": "Em biofísica circulatória, efeito inverso da viscosidade (η) no Número de Reynolds explica-se pelo facto de que o Número de Reynolds é inversamente proporcional à viscosidade dinâmica (η) do sangue. Quando a viscosidade diminui (como na anemia acentuada ou em hemodiluição massiva com soros cristaloides), o denominador de Re cai, fazendo disparar o valor de Re para além do limiar crítico de 2000.",
    "distractorAnalysis": [
      "Está incorreta: a viscosidade atua como força amortecedora de perturbações fluidas; a sua diminuição (como na anemia) facilita o aparecimento de escoamento turbulento.",
      "Está incorreta: a viscosidade η figura no denominador (Re = ρ v d / η); quanto menor a viscosidade, maior é o valor de Reynolds e maior a propensão à turbulência.",
      "Está incorreta: a viscosidade dinâmica é a grandeza central no denominador do número de Reynolds, representando as forças de atrito interno que contrariam a inércia do fluido."
    ],
    "nursingApplication": "O enfermeiro compreende por que doentes com hemoglobina < 7 g/dL desenvolvem frequentemente sopros cardíacos sistólicos audíveis sem qualquer anomalia valvular prévia."
  },
  {
    "id": 4106,
    "topicId": 4,
    "question": "Na avaliação clínica e administração de terapêutica por um enfermeiro, como se manifesta a aplicação prática de 'efeito inverso da viscosidade (η) no Número de Reynolds'?",
    "options": [
      "O enfermeiro administra soluções de heparina endovenosa para elevar a viscosidade do sangue no doente anémico e suprimir a emissão de ruídos acústicos intracardíacos.",
      "O enfermeiro sabe que a anemia duplica a viscosidade sanguínea, exigindo a administração de sangue total para diminuir o trabalho mecânico do ventrículo esquerdo em repouso.",
      "O enfermeiro compreende por que razão doentes com hemoglobina < 7 g/dL desenvolvem frequentemente sopros cardíacos sistólicos audíveis sem qualquer valvulopatia estrutural de base.",
      "O enfermeiro considera que sopros auscultados em indivíduos anémicos são causados pela calcificação acelerada da válvula tricúspide pela falta de glóbulos vermelhos circulantes."
    ],
    "correctIndex": 2,
    "explanation": "A aplicação de enfermagem para efeito inverso da viscosidade (η) no Número de Reynolds baseia-se no princípio: O enfermeiro compreende por que doentes com hemoglobina < 7 g/dL desenvolvem frequentemente sopros cardíacos sistólicos audíveis sem qualquer anomalia valvular prévia. Esta intervenção é essencial para a segurança hemodinâmica do doente.",
    "distractorAnalysis": [
      "Está incorreta: a heparina é um anticoagulante que não atua elevando a viscosidade reológica do sangue, sendo a reposição de eritrócitos a medida que corrige o hematócrito.",
      "Está incorreta: a anemia diminui a viscosidade do sangue (menos células por volume de plasma), elevando o débito cardíaco compensatório e o número de Reynolds.",
      "Está incorreta: o sopro anémico é estritamente funcional (reológico-hidrodinâmico) decorrente de baixa viscosidade e velocidade elevada, sem calcificação das cúspides valvulares."
    ],
    "nursingApplication": "O enfermeiro compreende por que doentes com hemoglobina < 7 g/dL desenvolvem frequentemente sopros cardíacos sistólicos audíveis sem qualquer anomalia valvular prévia."
  },
  {
    "id": 4107,
    "topicId": 4,
    "question": "Ao analisar as variáveis físicas que regem 'efeito inverso da viscosidade (η) no Número de Reynolds', qual das seguintes afirmações expressa com rigor a relação hidrodinâmica entre pressão, velocidade e geometria vascular?",
    "options": [
      "A diminuição da viscosidade dinâmica induz uma queda proporcional na velocidade média de escoamento, mantendo o número de Reynolds estritamente constante por autorregulação.",
      "A viscosidade atua no numerador da equação de Reynolds, pelo que a sua redução na anemia diminui o número de Reynolds e torna a circulação impercetível à auscultação.",
      "A hemodiluição com soro fisiológico aumenta a viscosidade do sangue em repouso devido ao elevado peso molecular dos iões sódio dissolvidos na solução eletrolítica aquosa.",
      "Quando a viscosidade dinâmica diminui na anemia ou hemodiluição, o denominador de Re cai, fazendo subir o parâmetro adimensional e facilitando a génese de fluxo turbulento."
    ],
    "correctIndex": 3,
    "explanation": "A análise hidrodinâmica correta confirma que Quando a viscosidade diminui (como na anemia acentuada ou em hemodiluição massiva com soros cristaloides), o denominador de Re cai, fazendo disparar o valor de Re para além do limiar crítico de 2000. O domínio destas leis permite ao enfermeiro interpretar os fenómenos vasculares com rigor científico.",
    "distractorAnalysis": [
      "Está incorreta: na anemia o débito cardíaco e a velocidade do sangue aumentam para manter o fornecimento tecidual de oxigénio, somando-se à queda de viscosidade para elevar Re.",
      "Está incorreta: a viscosidade η encontra-se no denominador da relação Re = ρ v d / η; reduzir o denominador aumenta o resultado global do quociente hidrodinâmico.",
      "Está incorreta: o soro fisiológico é um cristaloide aquoso de baixa viscosidade (~1 cP); infundir soro dilui a fração eritrocitária e diminui a viscosidade do sangue total."
    ],
    "nursingApplication": "O enfermeiro compreende por que doentes com hemoglobina < 7 g/dL desenvolvem frequentemente sopros cardíacos sistólicos audíveis sem qualquer anomalia valvular prévia."
  },
  {
    "id": 4108,
    "topicId": 4,
    "question": "Na hidrodinâmica circulatória aplicada à enfermagem, em relação a 'análise dimensional do Número de Reynolds', qual é a fundamentação biofísica correta?",
    "options": [
      "Trata-se de uma grandeza adimensional (kg/m³, m/s, m e Pa·s cancelam-se mutuamente), permitindo comparar escoamentos em geometrias proporcionalmente semelhantes.",
      "A unidade do Número de Reynolds no Sistema Internacional é o Pascal por metro cúbico (Pa/m³), medindo a força de expansão das paredes elásticas dos vasos de grande calibre.",
      "O Número de Reynolds possui dimensões de caudal volumétrico no SI (m³/s), expressando diretamente o volume de sangue ejetado pelo ventrículo em cada ciclo cardíaco.",
      "O parâmetro mede a velocidade linear do fluxo sanguíneo em quilómetros por hora (km/h), permitindo aferir o tempo de reação dos barorrecetores do seio carotídeo humano."
    ],
    "correctIndex": 0,
    "explanation": "Em biofísica circulatória, análise dimensional do Número de Reynolds explica-se pelo facto de que trata-se de uma grandeza física estritamente adimensional, sem unidades no Sistema Internacional (as unidades de densidade kg/m³, velocidade m/s, diâmetro m e viscosidade Pa·s cancelam-se mutuamente). A sua natureza adimensional permite comparar o comportamento de escoamentos de fluidos totalmente distintos em escalas geométricas proporcionais.",
    "distractorAnalysis": [
      "Está incorreta: o número de Reynolds é rigorosamente adimensional; a análise dimensional confirma [ρ][v][d]/[η] = (kg·m⁻³)(m·s⁻¹)(m)/(kg·m⁻¹·s⁻¹) = 1.",
      "Está incorreta: o número de Reynolds não expressa caudal volumétrico nem volume de ejeção, sendo um número puro adimensional que traduz o regime de escoamento.",
      "Está incorreta: Reynolds é adimensional e não uma velocidade expressa em km/h ou m/s, servindo para comparar a dinâmica de escoamento em diferentes escalas físicas."
    ],
    "nursingApplication": "O enfermeiro consolida a física básica de grandezas adimensionais ao analisar índices fisiológicos clínicos (como frações de ejeção ou rácios de resistência vascular)."
  },
  {
    "id": 4109,
    "topicId": 4,
    "question": "Na avaliação clínica e administração de terapêutica por um enfermeiro, como se manifesta a aplicação prática de 'análise dimensional do Número de Reynolds'?",
    "options": [
      "O enfermeiro converte o número de Reynolds em mililitros por hora para poder calibrar a taxa de infusão numa bomba volumétrica de perfusão contínua em cuidados intensivos.",
      "O enfermeiro consolida a física de grandezas adimensionais ao analisar índices clínicos sem unidade física direta, tais como frações de ejeção cardíaca ou índices de resistência.",
      "O enfermeiro multiplica o número de Reynolds pela massa do doente para calcular a dosagem de antibióticos nefrotóxicos em doentes com insuficiência renal aguda oligúrica.",
      "O enfermeiro presume que parâmetros adimensionais não têm qualquer utilidade biológica ou clínica na monitorização e interpretação hemodinâmica do doente crítico."
    ],
    "correctIndex": 1,
    "explanation": "A aplicação de enfermagem para análise dimensional do Número de Reynolds baseia-se no princípio: O enfermeiro consolida a física básica de grandezas adimensionais ao analisar índices fisiológicos clínicos (como frações de ejeção ou rácios de resistência vascular). Esta intervenção é essencial para a segurança hemodinâmica do doente.",
    "distractorAnalysis": [
      "Está incorreta: o número de Reynolds não pode ser convertido em unidades de débito (mL/h) por se tratar de um rácio adimensional entre forças inerciais e viscosas.",
      "Está incorreta: doses terapêuticas de fármacos baseiam-se no peso, área de superfície corporal ou depuração da creatinina, e não no número de Reynolds arterial.",
      "Está incorreta: grandezas adimensionais (como Reynolds, Fração de Ejeção, Índice Tornozelo-Braço) são fundamentais para caracterizar o comportamento funcional biológico."
    ],
    "nursingApplication": "O enfermeiro consolida a física básica de grandezas adimensionais ao analisar índices fisiológicos clínicos (como frações de ejeção ou rácios de resistência vascular)."
  },
  {
    "id": 4110,
    "topicId": 4,
    "question": "Ao analisar as variáveis físicas que regem 'análise dimensional do Número de Reynolds', qual das seguintes afirmações expressa com rigor a relação hidrodinâmica entre pressão, velocidade e geometria vascular?",
    "options": [
      "A ausência de dimensões físicas em Re indica que o escoamento de fluidos reais não consome energia mecânica nem produz atrito viscoso contra o endotélio vascular.",
      "Por ser adimensional, o número de Reynolds tem valor constante de 2000 em qualquer conduto do universo físico independentemente da velocidade e da geometria do tubo.",
      "A natureza adimensional de Re permite transpor resultados de modelos laboratoriais e prever com fidelidade a transição para turbulência em vasos anatómicos reais.",
      "A adimensionalidade de Re decorre da anulação das forças de inércia do fluido pela contração isométrica do miocárdio ventricular esquerdo durante a ejeção rápida."
    ],
    "correctIndex": 2,
    "explanation": "A análise hidrodinâmica correta confirma que A sua natureza adimensional permite comparar o comportamento de escoamentos de fluidos totalmente distintos em escalas geométricas proporcionais. O domínio destas leis permite ao enfermeiro interpretar os fenómenos vasculares com rigor científico.",
    "distractorAnalysis": [
      "Está incorreta: ser adimensional significa apenas que as unidades das grandezas se cancelam na razão; fluidos reais dissipam continuamente energia sob a forma de calor viscoso.",
      "Está incorreta: o valor numérico de Re varia continuamente em função da velocidade, diâmetro, densidade e viscosidade locais em cada segmento da árvore arterial.",
      "Está incorreta: as forças inerciais dependem da massa volúmica e da velocidade do fluido (ρ v²), não sendo anuladas pela sístole ventricular."
    ],
    "nursingApplication": "O enfermeiro consolida a física básica de grandezas adimensionais ao analisar índices fisiológicos clínicos (como frações de ejeção ou rácios de resistência vascular)."
  },
  {
    "id": 4111,
    "topicId": 4,
    "question": "Na hidrodinâmica circulatória aplicada à enfermagem, em relação a 'definição física de viscosidade dinâmica (η)', qual é a fundamentação biofísica correta?",
    "options": [
      "É a propriedade elástica que mede a capacidade de uma artéria expandir o seu diâmetro quando submetida a um aumento súbito de pressão transmural durante a sístole.",
      "É a massa total de solutos inorgânicos dissolvidos por litro de água plasmática, expressando-se no Sistema Internacional de Unidades em miligramas por decilitro (mg/dL).",
      "É a aceleração linear com que os eritrócitos se precipitam num tubo de ensaio sob a ação exclusiva da gravidade, expressando-se no SI em milímetros por hora (mm/h).",
      "É a propriedade que traduz o atrito interno entre lâminas microscópicas fluidas com velocidades distintas, expressando-se no SI em Pascal-segundo (Pa·s) ou Poise (0,1 Pa·s)."
    ],
    "correctIndex": 3,
    "explanation": "Em biofísica circulatória, definição física de viscosidade dinâmica (η) explica-se pelo facto de que é a propriedade dos fluidos que traduz o atrito interno entre camadas microscópicas adjacentes que se movem com velocidades diferentes (resistência ao escoamento). A sua unidade fundamental no Sistema Internacional é o Pascal-segundo (Pa·s = N·s/m²), sendo frequentemente utilizada na literatura médica a unidade CGS Poise (1 P = 0,1 Pa·s) ou centipoise (1 cP = 1 mPa·s).",
    "distractorAnalysis": [
      "Está incorreta: descreve a complacência ou distensibilidade vascular parietal (C = ΔV / ΔP) e não a viscosidade dinâmica intrínseca do fluido em movimento.",
      "Está incorreta: descreve a concentração plasmática de solutos ou osmolaridade e não a resistência ao escoamento gerada pelo atrito interno fluido.",
      "Está incorreta: descreve a Velocidade de Sedimentação Eritrocitária (VSE), um teste laboratorial de fase aguda inflamatória e não a viscosidade dinâmica fundamental."
    ],
    "nursingApplication": "A água a 20 °C possui viscosidade de aproximadamente 1,0 cP, enquanto o sangue total normal a 37 °C possui uma viscosidade de 3,0 a 4,0 cP (três a quatro vezes superior à da água)."
  },
  {
    "id": 4112,
    "topicId": 4,
    "question": "Na avaliação clínica e administração de terapêutica por um enfermeiro, como se manifesta a aplicação prática de 'definição física de viscosidade dinâmica (η)'?",
    "options": [
      "A água a 20 °C possui viscosidade de ~1,0 cP, enquanto o sangue total normal a 37 °C exibe viscosidade de 3,0 a 4,0 cP (cerca de três a quatro vezes superior à da água pura).",
      "A água é quatro vezes mais viscosa do que o sangue total humano normal devido à elevada densidade de pontes de hidrogénio covalentes formadas entre as suas moléculas.",
      "O sangue total possui viscosidade idêntica à do ar atmosférico ao nível do mar (cerca de 0,018 cP), facilitando a circulação através dos capilares fenestrados do fígado.",
      "A viscosidade do sangue total é de aproximadamente 1000 cP em repouso basal, o que lhe confere propriedades reológicas equivalentes às da vaselina sólida comercial."
    ],
    "correctIndex": 0,
    "explanation": "A aplicação de enfermagem para definição física de viscosidade dinâmica (η) baseia-se no princípio: A água a 20 °C possui viscosidade de aproximadamente 1,0 cP, enquanto o sangue total normal a 37 °C possui uma viscosidade de 3,0 a 4,0 cP (três a quatro vezes superior à da água). Esta intervenção é essencial para a segurança hemodinâmica do doente.",
    "distractorAnalysis": [
      "Está incorreta: a presença de hemácias suspensas e macromoléculas proteicas torna o sangue cerca de 3 a 4 vezes mais viscoso do que a água nas condições corporais normais.",
      "Está incorreta: a viscosidade dos líquidos é ordens de grandeza superior à dos gases; o sangue tem viscosidade de ~3 a 4 cP, enquanto o ar tem cerca de 0,018 cP.",
      "Está incorreta: valores de 1000 cP correspondem a líquidos altamente viscosos como xropes densos; o sangue fluido normal opera na faixa fisiológica de 3 a 4 cP."
    ],
    "nursingApplication": "A água a 20 °C possui viscosidade de aproximadamente 1,0 cP, enquanto o sangue total normal a 37 °C possui uma viscosidade de 3,0 a 4,0 cP (três a quatro vezes superior à da água)."
  },
  {
    "id": 4113,
    "topicId": 4,
    "question": "Ao analisar as variáveis físicas que regem 'definição física de viscosidade dinâmica (η)', qual das seguintes afirmações expressa com rigor a relação hidrodinâmica entre pressão, velocidade e geometria vascular?",
    "options": [
      "A unidade SI de viscosidade dinâmica é o Newton por metro quadrado (N/m²), coincidindo exatamente com a unidade mecânica de pressão hidrostática arterial de Pascal.",
      "A unidade SI é o Pascal-segundo (Pa·s = N·s/m² = kg/(m·s)), sendo vulgarmente utilizado na reologia médica o centipoise (1 cP = 10⁻³ Pa·s = 1 mPa·s).",
      "A unidade fundamental de viscosidade no SI é o Joule por segundo (J/s), quantificando a taxa de calor metabólico absorvida pelos glóbulos vermelhos na microcirculação.",
      "A viscosidade dinâmica mede-se no SI em metros quadrados por segundo (m²/s), correspondendo à mesma dimensão física da difusividade térmica de condução dos tecidos."
    ],
    "correctIndex": 1,
    "explanation": "A análise hidrodinâmica correta confirma que A sua unidade fundamental no Sistema Internacional é o Pascal-segundo (Pa·s = N·s/m²), sendo frequentemente utilizada na literatura médica a unidade CGS Poise (1 P = 0,1 Pa·s) ou centipoise (1 cP = 1 mPa·s). O domínio destas leis permite ao enfermeiro interpretar os fenómenos vasculares com rigor científico.",
    "distractorAnalysis": [
      "Está incorreta: N/m² (Pascal) é unidade de pressão ou tensão superficial; a viscosidade dinâmica é a razão tensão/taxa de cisalhamento, tendo unidades de Pascal-segundo (Pa·s).",
      "Está incorreta: J/s (Watt) é unidade de potência mecânica ou taxa de transferência térmica e não coeficiente de viscosidade de um fluido em escoamento.",
      "Está incorreta: m²/s é a unidade de viscosidade cinemática (ν = η / ρ) e não de viscosidade dinâmica absoluta (η), cuja unidade SI é Pa·s."
    ],
    "nursingApplication": "A água a 20 °C possui viscosidade de aproximadamente 1,0 cP, enquanto o sangue total normal a 37 °C possui uma viscosidade de 3,0 a 4,0 cP (três a quatro vezes superior à da água)."
  },
  {
    "id": 4114,
    "topicId": 4,
    "question": "Na hidrodinâmica circulatória aplicada à enfermagem, em relação a 'comportamento não-newtoniano e pseudoplástico do sangue', qual é a fundamentação biofísica correta?",
    "options": [
      "A viscosidade sanguínea aumenta exponencialmente com a velocidade de circulação (comportamento dilatante), tornando o sangue sólido durante o esforço físico intenso.",
      "O sangue humano comporta-se como um fluido puramente newtoniano ideal, mantendo a sua viscosidade inalterada perante quaisquer alterações de cisalhamento ou fluxo.",
      "A viscosidade diminui com o aumento da taxa de cisalhamento (shear-thinning); a baixas velocidades as hemácias agregam-se em rouleaux, elevando a viscosidade na estase.",
      "O comportamento pseudoplástico do sangue resulta da expansão térmica contínua das moléculas de albumina plasmática durante a circulação nos leitos esplâncnicos."
    ],
    "correctIndex": 2,
    "explanation": "Em biofísica circulatória, comportamento não-newtoniano e pseudoplástico do sangue explica-se pelo facto de que a viscosidade do sangue não é constante para uma dada temperatura, diminuindo progressivamente à medida que a taxa de cisalhamento (shear rate) aumenta (fluido pseudoplástico ou 'shear-thinning'). Em baixas velocidades de escoamento (como na estase venosa), os glóbulos vermelhos agregam-se formando cadeias empilhadas ('rouleaux'), elevando acentuadamente a viscosidade aparente do sangue.",
    "distractorAnalysis": [
      "Está incorreta: o sangue é pseudoplástico (shear-thinning) e não dilatante (shear-thickening); a alta velocidade as hemácias deformam-se e alinham-se, reduzindo a viscosidade.",
      "Está incorreta: o sangue é um fluido não-newtoniano complexo cuja viscosidade varia ativamente com a taxa de deformação, o diâmetro vascular e o hematócrito.",
      "Está incorreta: o comportamento pseudoplástico resulta da desagregação dos rouleaux eritrocitários e do alinhamento das hemácias flexíveis ao longo das linhas de corrente."
    ],
    "nursingApplication": "O enfermeiro mobiliza precocemente os membros de doentes acamados para elevar a velocidade do fluxo venoso, desagregando os 'rouleaux' de eritrócitos e prevenindo tromboses."
  },
  {
    "id": 4115,
    "topicId": 4,
    "question": "Na avaliação clínica e administração de terapêutica por um enfermeiro, como se manifesta a aplicação prática de 'comportamento não-newtoniano e pseudoplástico do sangue'?",
    "options": [
      "O enfermeiro mantém o doente estritamente imobilizado no leito durante várias semanas para permitir que as hemácias formem rouleaux estáveis que aumentem a pressão arterial.",
      "O enfermeiro aplica massagem profunda e vigorosa em membros com suspeita de trombose venosa profunda instalada para acelerar a desagregação mecânica do trombo parietal.",
      "O enfermeiro orienta o doente acamado a evitar qualquer contração muscular dos gémeos para reduzir a taxa de cisalhamento venosa e proteger o endotélio vascular.",
      "O enfermeiro mobiliza precocemente doentes acamados para elevar a velocidade venosa, promovendo a desagregação mecânica dos rouleaux de eritrócitos e prevenindo trombose."
    ],
    "correctIndex": 3,
    "explanation": "A aplicação de enfermagem para comportamento não-newtoniano e pseudoplástico do sangue baseia-se no princípio: O enfermeiro mobiliza precocemente os membros de doentes acamados para elevar a velocidade do fluxo venoso, desagregando os 'rouleaux' de eritrócitos e prevenindo tromboses. Esta intervenção é essencial para a segurança hemodinâmica do doente.",
    "distractorAnalysis": [
      "Está incorreta: a imobilização prolongada gera estase, agregação celular maciça e risco muito elevado de trombose venosa profunda e embolia pulmonar fatal.",
      "Está incorreta: massajar um membro com trombose venosa profunda confirmada ou suspeita é absolutamente contraindicado pelo risco iminente de fragmentação e embolia pulmonar.",
      "Está incorreta: a contração dos músculos gémeos aciona a bomba muscular esquelética, essencial para esvaziar as veias profundas e prevenir a estase e trombogénese."
    ],
    "nursingApplication": "O enfermeiro mobiliza precocemente os membros de doentes acamados para elevar a velocidade do fluxo venoso, desagregando os 'rouleaux' de eritrócitos e prevenindo tromboses."
  },
  {
    "id": 4116,
    "topicId": 4,
    "question": "Ao analisar as variáveis físicas que regem 'comportamento não-newtoniano e pseudoplástico do sangue', qual das seguintes afirmações expressa com rigor a relação hidrodinâmica entre pressão, velocidade e geometria vascular?",
    "options": [
      "Em baixas velocidades de escoamento (como na estase venosa), os eritrócitos agregam-se em cadeias empilhadas (rouleaux), aumentando de forma marcada a viscosidade do sangue.",
      "Em baixas velocidades de circulação, as hemácias sofrem repulsão atómica instantânea, reduzindo a viscosidade aparente do sangue para valores inferiores aos da água.",
      "A agregação em rouleaux ocorre apenas no compartimento arterial sistémico de alta pressão, sendo o leito venoso perfeitamente imune à acumulação de aglomerados celulares.",
      "O empilhamento de eritrócitos acelera o fluxo venoso através da formação de pontes cristalinas condutoras que diminuem a perda de carga hidráulica na veia cava inferior."
    ],
    "correctIndex": 0,
    "explanation": "A análise hidrodinâmica correta confirma que Em baixas velocidades de escoamento (como na estase venosa), os glóbulos vermelhos agregam-se formando cadeias empilhadas ('rouleaux'), elevando acentuadamente a viscosidade aparente do sangue. O domínio destas leis permite ao enfermeiro interpretar os fenómenos vasculares com rigor científico.",
    "distractorAnalysis": [
      "Está incorreta: a baixas taxas de cisalhamento as macromoléculas plasmáticas (como o fibrinogénio) facilitam a adesão celular, aumentando a viscosidade aparente na estase.",
      "Está incorreta: a agregação em rouleaux é máxima no sistema venoso de baixa velocidade e baixa pressão, sendo desfeita nas artérias pelas elevadas forças de cisalhamento.",
      "Está incorreta: os rouleaux não aceleram o fluxo nem diminuem a perda de carga; pelo contrário, aumentam a viscosidade interna e a resistência ao escoamento venoso."
    ],
    "nursingApplication": "O enfermeiro mobiliza precocemente os membros de doentes acamados para elevar a velocidade do fluxo venoso, desagregando os 'rouleaux' de eritrócitos e prevenindo tromboses."
  },
  {
    "id": 4117,
    "topicId": 4,
    "question": "Na hidrodinâmica circulatória aplicada à enfermagem, em relação a 'deformabilidade dos glóbulos vermelhos na microcirculação', qual é a fundamentação biofísica correta?",
    "options": [
      "O eritrócito normal comporta-se como uma partícula esférica com rigidez estrutural fixa, dependendo de vasodilatação arteriolar prévia para conseguir transitar no capilar.",
      "O eritrócito de 7-8 μm dobra-se elasticamente para passar em capilares de 3-5 μm; a flexibilidade da membrana e fluidez citoplasmática mantêm a viscosidade baixa nos capilares.",
      "O glóbulo vermelho fragmenta-se em múltiplos pedaços minúsculos ao entrar no capilar, reconstituindo a sua forma de disco bicôncavo logo após atingir o lúmen da vénula.",
      "A passagem capilar das hemácias depende da sua desidratação completa temporária, reduzindo o seu volume celular a cinquenta por cento antes de cada troca gasosa pulmonar."
    ],
    "correctIndex": 1,
    "explanation": "Em biofísica circulatória, deformabilidade dos glóbulos vermelhos na microcirculação explica-se pelo facto de que o eritrócito normal tem diâmetro de 7 a 8 micrómetros, mas consegue dobrar-se e deformar-se elasticamente para atravessar capilares com apenas 3 a 5 micrómetros de diâmetro. Esta notável flexibilidade da membrana eritrocitária e a fluidez do citoplasma rico em hemoglobina mantêm a viscosidade aparente do sangue baixa no leito capilar.",
    "distractorAnalysis": [
      "Está incorreta: as hemácias possuem grande deformabilidade graças à rede de espectrina da sua membrana e ao excesso de área de superfície em relação ao volume celular.",
      "Está incorreta: os eritrócitos mantêm a integridade da sua membrana celular; a fragmentação (esquizócitos) é um fenómeno patológico de anemia hemolítica microangiopática.",
      "Está incorreta: os eritrócitos não se desidratam na circulação capilar normal, preservando o seu volume e osmolalidade intracelular estáveis."
    ],
    "nursingApplication": "Na anemia falciforme (drepanocitose), os eritrócitos tornam-se rígidos em foice sob hipóxia: o enfermeiro vigia crises vaso-oclusivas dolorosas causadas pelo bloqueio mecânico dos capilares."
  },
  {
    "id": 4118,
    "topicId": 4,
    "question": "Na avaliação clínica e administração de terapêutica por um enfermeiro, como se manifesta a aplicação prática de 'deformabilidade dos glóbulos vermelhos na microcirculação'?",
    "options": [
      "Na anemia falciforme, as hemácias tornam-se extremamente elásticas e líquidas, dissolvendo-se no plasma e impedindo qualquer risco de oclusão mecânica da microcirculação.",
      "O enfermeiro sabe que a rigidez eritrocitária falciforme protege os doentes contra a dor isquémica, dado que as células afoiçadas dilatam quimicamente o endotélio capilar.",
      "Na anemia falciforme, a polimerização da hemoglobina S sob hipóxia torna os eritrócitos rígidos e afoiçados: o enfermeiro vigia crises vaso-oclusivas e isquemia tecidual dolorosa.",
      "Na drepanocitose, a transfusão de sangue está contraindicada porque a presença de glóbulos vermelhos normais acelera a falcização de todas as células progenitoras medulares."
    ],
    "correctIndex": 2,
    "explanation": "A aplicação de enfermagem para deformabilidade dos glóbulos vermelhos na microcirculação baseia-se no princípio: Na anemia falciforme (drepanocitose), os eritrócitos tornam-se rígidos em foice sob hipóxia: o enfermeiro vigia crises vaso-oclusivas dolorosas causadas pelo bloqueio mecânico dos capilares. Esta intervenção é essencial para a segurança hemodinâmica do doente.",
    "distractorAnalysis": [
      "Está incorreta: a polimerização de desoxi-HbS forma fibras rígidas que distorcem o eritrócito em forma de foice, perdendo toda a flexibilidade e bloqueando os microvasos.",
      "Está incorreta: as células rígidas ocluem os capilares, gerando isquemia tecidual grave, enfartes ósseos e viscerais e crises álgicas extremamente intensas.",
      "Está incorreta: a hemotransfusão simples ou exsanguinotransfusão é uma intervenção essencial na crise falciforme grave, visando reduzir a percentagem de HbS para valores seguros."
    ],
    "nursingApplication": "Na anemia falciforme (drepanocitose), os eritrócitos tornam-se rígidos em foice sob hipóxia: o enfermeiro vigia crises vaso-oclusivas dolorosas causadas pelo bloqueio mecânico dos capilares."
  },
  {
    "id": 4119,
    "topicId": 4,
    "question": "Ao analisar as variáveis físicas que regem 'deformabilidade dos glóbulos vermelhos na microcirculação', qual das seguintes afirmações expressa com rigor a relação hidrodinâmica entre pressão, velocidade e geometria vascular?",
    "options": [
      "A perda de flexibilidade eritrocitária eleva o número de Reynolds nos capilares acima de 10 000, provocando a rutura imediata da membrana basal dos capilares glomerulares.",
      "A deformação das hemácias é um processo puramente irreversível que impede o eritrócito de recuperar a sua morfologia discoide original após a saída do leito capilar.",
      "Os eritrócitos normais tornam-se rígidos na presença de oxigénio a alta pressão, impedindo a perfusão dos tecidos musculares esqueléticos durante a ventilação mecânica.",
      "A extraordinária deformabilidade dos glóbulos vermelhos preserva a fluidez do sangue na microcirculação e garante uma ampla área de contacto capilar para as trocas gasosas."
    ],
    "correctIndex": 3,
    "explanation": "A análise hidrodinâmica correta confirma que Esta notável flexibilidade da membrana eritrocitária e a fluidez do citoplasma rico em hemoglobina mantêm a viscosidade aparente do sangue baixa no leito capilar. O domínio destas leis permite ao enfermeiro interpretar os fenómenos vasculares com rigor científico.",
    "distractorAnalysis": [
      "Está incorreta: o diâmetro capilar microscópico mantém o número de Reynolds muito baixo (Re << 1); a perda de deformabilidade causa oclusão microvascular e não turbulência de Re = 10 000.",
      "Está incorreta: a deformação mecânica do eritrócito normal é estritamente elástica e reversível, readquirindo a sua forma bicôncava basal logo que regressa a vasos maiores.",
      "Está incorreta: o oxigénio mantém a hemoglobina normal no estado oxigenado solúvel; na anemia falciforme é precisamente a desoxigenação que induz polimerização e rigidez celular."
    ],
    "nursingApplication": "Na anemia falciforme (drepanocitose), os eritrócitos tornam-se rígidos em foice sob hipóxia: o enfermeiro vigia crises vaso-oclusivas dolorosas causadas pelo bloqueio mecânico dos capilares."
  },
  {
    "id": 4120,
    "topicId": 4,
    "question": "Na hidrodinâmica circulatória aplicada à enfermagem, em relação a 'temperatura corporal e viscosidade sanguínea na hipotermia', qual é a fundamentação biofísica correta?",
    "options": [
      "A viscosidade varia inversamente com a temperatura; cada descida de 1 °C eleva a viscosidade do sangue em ~2-2,5%, sobrecarregando o coração e a perfusão distal na hipotermia.",
      "A descida de temperatura reduz drasticamente a viscosidade do sangue humano, tornando o plasma perfeitamente fluido como o éter etílico na hipotermia profunda acidental.",
      "A temperatura corporal não exerce qualquer influência mensurável na viscosidade de fluidos biológicos líquidos, dependendo esta exclusivamente do nível sérico de glicose.",
      "Na hipotermia grave o sangue ferve espontaneamente no interior das grandes veias centrais devido à libertação desregulada de energia cinética pelo miocárdio em paragem."
    ],
    "correctIndex": 0,
    "explanation": "Em biofísica circulatória, temperatura corporal e viscosidade sanguínea na hipotermia explica-se pelo facto de que a viscosidade dos líquidos varia inversamente com a temperatura: para cada descida de 1 °C na temperatura corporal, a viscosidade do sangue aumenta em cerca de 2% a 2,5%. Na hipotermia acidental profunda (temperatura central < 30 °C), o sangue torna-se espesso e viscoso, dificultando o trabalho mecânico do coração e a perfusão microvascular distal.",
    "distractorAnalysis": [
      "Está incorreta: nos líquidos reais a viscosidade aumenta com a descida da temperatura devido ao fortalecimento das forças de coesão intermolecular (atrito interno acrescido).",
      "Está incorreta: a viscosidade é altamente dependente da temperatura em conformidade com relações do tipo Arrhenius; arrefecer o sangue torna-o mais viscoso e espesso.",
      "Está incorreta: a hipotermia reduz drasticamente a energia térmica e a cinética molecular, tornando o sangue mais espesso sem qualquer fenómeno de ebulição biológica."
    ],
    "nursingApplication": "O enfermeiro aquece ativamente os fluidos de perfusão endovenosa a 37-40 °C antes de infundir em doentes em choque ou submetidos a cirurgias prolongadas."
  },
  {
    "id": 4121,
    "topicId": 4,
    "question": "Na avaliação clínica e administração de terapêutica por um enfermeiro, como se manifesta a aplicação prática de 'temperatura corporal e viscosidade sanguínea na hipotermia'?",
    "options": [
      "O enfermeiro administra todas as soluções parentéricas a 4 °C para arrefecer o sangue e acelerar o débito cardíaco através da redução da resistência vascular sistémica.",
      "O enfermeiro aquece ativamente os fluidos de perfusão endovenosa a 37-40 °C antes de infundir em doentes em choque ou pós-operatório para prevenir a hiperviscosidade e coagulopatia.",
      "O enfermeiro suspende o aquecimento corporal em doentes politraumatizados graves com hipotermia acidental, visando manter o sangue espesso para conter hemorragias ativas.",
      "O enfermeiro sabe que a temperatura dos fluidos intravenosos é irrelevante para a homeostase hemodinâmica, desde que o volume seja administrado em menos de cinco minutos."
    ],
    "correctIndex": 1,
    "explanation": "A aplicação de enfermagem para temperatura corporal e viscosidade sanguínea na hipotermia baseia-se no princípio: O enfermeiro aquece ativamente os fluidos de perfusão endovenosa a 37-40 °C antes de infundir em doentes em choque ou submetidos a cirurgias prolongadas. Esta intervenção é essencial para a segurança hemodinâmica do doente.",
    "distractorAnalysis": [
      "Está incorreta: infundir fluidos frios agrava a hipotermia, induz hiperviscosidade sanguínea, disfunção plaquetária severa, coagulopatia de consumo e arritmias ventriculares letais.",
      "Está incorreta: a hipotermia faz parte da 'tríade da morte' do trauma (hipotermia, acidose, coagulopatia); reaquecer o doente é uma prioridade absoluta de enfermagem.",
      "Está incorreta: a administração rápida de grandes volumes de soluções não aquecidas provoca descidas drásticas da temperatura central do doente, com repercussões hemodinâmicas severas."
    ],
    "nursingApplication": "O enfermeiro aquece ativamente os fluidos de perfusão endovenosa a 37-40 °C antes de infundir em doentes em choque ou submetidos a cirurgias prolongadas."
  },
  {
    "id": 4122,
    "topicId": 4,
    "question": "Ao analisar as variáveis físicas que regem 'temperatura corporal e viscosidade sanguínea na hipotermia', qual das seguintes afirmações expressa com rigor a relação hidrodinâmica entre pressão, velocidade e geometria vascular?",
    "options": [
      "Na hipotermia acidental profunda, o sangue perde toda a viscosidade e desliza sem resistência, o que gera hipertensão arterial sistémica descontrolada com hemorragia cerebral.",
      "A viscosidade acrescida na hipotermia neutraliza qualquer perda de carga hidráulica, duplicando a pressão hidrostática em todos os capilares glomerulares dos rins.",
      "Na hipotermia profunda (temperatura central < 30 °C), o aumento acentuado da viscosidade do sangue dificulta o trabalho mecânico cardíaco e lentifica a perfusão microvascular.",
      "O aumento da viscosidade induzido pelo frio protege o cérebro contra o choque distributivo por acelerar as trocas de oxigénio entre a hemoglobina e os astrócitos corticais."
    ],
    "correctIndex": 2,
    "explanation": "A análise hidrodinâmica correta confirma que Na hipotermia acidental profunda (temperatura central < 30 °C), o sangue torna-se espesso e viscoso, dificultando o trabalho mecânico do coração e a perfusão microvascular distal. O domínio destas leis permite ao enfermeiro interpretar os fenómenos vasculares com rigor científico.",
    "distractorAnalysis": [
      "Está incorreta: a hipotermia profunda causa bradicardia extrema, hipotensão, depressão da contratilidade miocárdica e lentificação do fluxo periférico por aumento da viscosidade.",
      "Está incorreta: o aumento da viscosidade eleva a resistência hidráulica vascular (R ∝ η pela Lei de Poiseuille), dissipando mais energia e prejudicando a filtração renal.",
      "Está incorreta: a hipotermia desvia a curva de dissociação da hemoglobina para a esquerda (efeito Bohr invertido), dificultando e não facilitando a libertação de oxigénio para os tecidos."
    ],
    "nursingApplication": "O enfermeiro aquece ativamente os fluidos de perfusão endovenosa a 37-40 °C antes de infundir em doentes em choque ou submetidos a cirurgias prolongadas."
  },
  {
    "id": 4123,
    "topicId": 4,
    "question": "Na hidrodinâmica circulatória aplicada à enfermagem, em relação a 'viscosidade do plasma sanguíneo e proteínas plasmáticas', qual é a fundamentação biofísica correta?",
    "options": [
      "A viscosidade do plasma humano normal é dez vezes superior à viscosidade do sangue total celular em virtude da ausência de eritrócitos lubrificantes na circulação.",
      "O plasma humano normal comporta-se como um óleo mineral de alta densidade sem qualquer correlação físico-química com a concentração sérica de proteínas circulantes.",
      "A concentração plasmática de fibrinogénio não interfere na viscosidade do plasma, sendo a viscosidade regulada exclusivamente pela concentração extracelular de ureia.",
      "A viscosidade do plasma (1,2-1,5 cP) depende de macromoléculas assimétricas como fibrinogénio e imunoglobulinas; no mieloma a produção monoclonal causa hiperviscosidade."
    ],
    "correctIndex": 3,
    "explanation": "Em biofísica circulatória, viscosidade do plasma sanguíneo e proteínas plasmáticas explica-se pelo facto de que a viscosidade do plasma desprovido de células varia entre 1,2 e 1,5 cP, sendo determinada principalmente pela concentração de macromoléculas assimétricas como o fibrinogénio e imunoglobulinas. No mieloma múltiplo e na macroglobulinemia de Waldenström, a produção maciça de paraproteínas monoclonais causa síndrome de hiperviscosidade plasmática.",
    "distractorAnalysis": [
      "Está incorreta: o sangue total celular é mais viscoso (3,0-4,0 cP) do que o plasma desprovido de células (1,2-1,5 cP) devido à resistência ao atrito gerada pelos eritrócitos.",
      "Está incorreta: o plasma é uma solução coloidal aquosa composta por ~92% de água e ~7% de proteínas, diferindo totalmente de hidrocarbonetos ou óleos minerais densos.",
      "Está incorreta: o fibrinogénio, por ser uma macromolécula alongada e de grande peso molecular (~340 kDa), é um dos maiores determinantes proteicos da viscosidade plasmática."
    ],
    "nursingApplication": "O enfermeiro monitoriza sintomas de hiperviscosidade como cefaleias, alterações visuais por ingurgitamento da retina, confusão mental e hemorragias mucosas em doentes onco-hematológicos."
  },
  {
    "id": 4124,
    "topicId": 4,
    "question": "Na avaliação clínica e administração de terapêutica por um enfermeiro, como se manifesta a aplicação prática de 'viscosidade do plasma sanguíneo e proteínas plasmáticas'?",
    "options": [
      "O enfermeiro vigia sintomas de hiperviscosidade (cefaleias, alterações visuais por ingurgitamento retiniano, confusão e sangramento mucoso) em doentes onco-hematológicos.",
      "O enfermeiro prescreve transfusões maciças de plasma fresco congelado no doente com mieloma múltiplo para tentar diluir a concentração de imunoglobulinas anómalas.",
      "O enfermeiro sabe que a hiperviscosidade plasmática nunca interfere com a microcirculação cerebral ou retiniana, manifestando-se apenas por eritema palmar transitório.",
      "O enfermeiro encoraja o doente com síndrome de hiperviscosidade a desidratar-se voluntariamente para concentrar as proteínas no compartimento extravascular intersticial."
    ],
    "correctIndex": 0,
    "explanation": "A aplicação de enfermagem para viscosidade do plasma sanguíneo e proteínas plasmáticas baseia-se no princípio: O enfermeiro monitoriza sintomas de hiperviscosidade como cefaleias, alterações visuais por ingurgitamento da retina, confusão mental e hemorragias mucosas em doentes onco-hematológicos. Esta intervenção é essencial para a segurança hemodinâmica do doente.",
    "distractorAnalysis": [
      "Está incorreta: transfundir plasma fresco agravaria a sobrecarga proteica e a hiperviscosidade; o tratamento de urgência na hiperviscosidade sintomática é a plasmaférese terapêutica.",
      "Está incorreta: a microcirculação cerebral e retiniana é altamente sensível à hiperviscosidade plasmática, provocando papiledema, hemorragias em chama de vela e letargia.",
      "Está incorreta: a desidratação hemoconcentra o plasma e eleva dramaticamente a viscosidade; a hidratação parenteral cuidadosa é essencial para fluidificar a volemia."
    ],
    "nursingApplication": "O enfermeiro monitoriza sintomas de hiperviscosidade como cefaleias, alterações visuais por ingurgitamento da retina, confusão mental e hemorragias mucosas em doentes onco-hematológicos."
  },
  {
    "id": 4125,
    "topicId": 4,
    "question": "Ao analisar as variáveis físicas que regem 'viscosidade do plasma sanguíneo e proteínas plasmáticas', qual das seguintes afirmações expressa com rigor a relação hidrodinâmica entre pressão, velocidade e geometria vascular?",
    "options": [
      "A proliferação de imunoglobulinas monoclonais anula a viscosidade plasmática, tornando o sangue num líquido supercrítico sem qualquer atrito hidrodinâmico interno.",
      "No mieloma múltiplo e macroglobulinemia de Waldenström, o excesso de paraproteínas monoclonais (IgG ou IgM) eleva a viscosidade plasmática para valores perigosos (>4 cP).",
      "As proteínas monoclonais ligam-se aos fosfolípidos endoteliais e transformam as artérias sistémicas em condutas puramente magnéticas de condução de protões livres.",
      "O aumento da viscosidade plasmática por paraproteínas é compensado espontaneamente pela eliminação imediata de todas as plaquetas através dos capilares glomerulares renais."
    ],
    "correctIndex": 1,
    "explanation": "A análise hidrodinâmica correta confirma que No mieloma múltiplo e na macroglobulinemia de Waldenström, a produção maciça de paraproteínas monoclonais causa síndrome de hiperviscosidade plasmática. O domínio destas leis permite ao enfermeiro interpretar os fenómenos vasculares com rigor científico.",
    "distractorAnalysis": [
      "Está incorreta: a produção maciça de anticorpos monoclonais eleva marcadamente a resistência viscosa do plasma, exigindo intervenções de citorredução e plasmaférese.",
      "Está incorreta: não existem fenómenos de supercondutividade magnética ou correntes protónicas em vasos arteriais biológicos; trata-se de um aumento clássico de atrito viscoso.",
      "Está incorreta: as plaquetas não são eliminadas nos glomérulos e a trombocitopenia na gamapatia monoclonal decorre de infiltração medular ou consumo periférico."
    ],
    "nursingApplication": "O enfermeiro monitoriza sintomas de hiperviscosidade como cefaleias, alterações visuais por ingurgitamento da retina, confusão mental e hemorragias mucosas em doentes onco-hematológicos."
  },
  {
    "id": 4126,
    "topicId": 4,
    "question": "Na hidrodinâmica circulatória aplicada à enfermagem, em relação a 'relação exponencial entre hematócrito (Ht) e viscosidade', qual é a fundamentação biofísica correta?",
    "options": [
      "A viscosidade varia linearmente com o hematócrito, de tal modo que uma elevação de 10% no número de eritrócitos tem rigorosamente o mesmo impacto reológico quer o Ht seja 20% ou 70%.",
      "A viscosidade do sangue é inversamente proporcional ao hematócrito, diminuindo drasticamente em doentes com eritrocitose primária devido ao efeito lubrificante das membranas.",
      "A viscosidade sanguínea aumenta de forma quase exponencial com o hematócrito: quando o Ht sobe de 40% para 60%, a viscosidade quase duplica, elevando a pós-carga miocárdica.",
      "O hematócrito influencia unicamente a capacidade de transporte de oxigénio gasoso nos tecidos periféricos, mantendo-se a viscosidade inalterada perante variações celulares."
    ],
    "correctIndex": 2,
    "explanation": "Em biofísica circulatória, relação exponencial entre hematócrito (Ht) e viscosidade explica-se pelo facto de que a viscosidade sanguínea aumenta de forma quase exponencial com a percentagem de volume ocupado pelos eritrócitos (hematócrito normal de 40 a 45%). Quando o hematócrito sobe de 40% para 60%, a viscosidade do sangue praticamente duplica, disparando a resistência vascular periférica.",
    "distractorAnalysis": [
      "Está incorreta: a curva de viscosidade versus hematócrito é marcadamente não-linear (exponencial para Ht > 50%), amplificando exponencialmente o atrito em valores elevados.",
      "Está incorreta: quanto maior o número de hemácias, maior é a interação e atrito intercelular, elevando fortemente a viscosidade efetiva em vez de a diminuir.",
      "Está incorreta: o hematócrito é o principal determinante físico da viscosidade do sangue total, multiplicando a resistência ao escoamento na microcirculação."
    ],
    "nursingApplication": "O enfermeiro avalia o valor do hematócrito no pós-operatório e na desidratação, antecipando alterações na fluidez circulatória e no esforço ventricular."
  },
  {
    "id": 4127,
    "topicId": 4,
    "question": "Na avaliação clínica e administração de terapêutica por um enfermeiro, como se manifesta a aplicação prática de 'relação exponencial entre hematócrito (Ht) e viscosidade'?",
    "options": [
      "O enfermeiro desvaloriza subidas do hematócrito acima de 65% em doentes com doença pulmonar obstrutiva crónica, considerando a hiperviscosidade um mecanismo de proteção renal.",
      "O enfermeiro administra soluções hipertónicas de cloreto de sódio em bólus no doente com hematócrito de 60% para induzir maior hemoconcentração e acelerar a circulação.",
      "O enfermeiro presume que o hematócrito afeta apenas a pressão venosa central na aurícula esquerda, sendo irrelevante para a interpretação da pressão arterial sistémica.",
      "O enfermeiro vigia o valor do hematócrito no pós-operatório e na desidratação, antecipando alterações na fluidez circulatória, na pós-carga ventricular e no risco trombótico."
    ],
    "correctIndex": 3,
    "explanation": "A aplicação de enfermagem para relação exponencial entre hematócrito (Ht) e viscosidade baseia-se no princípio: O enfermeiro avalia o valor do hematócrito no pós-operatório e na desidratação, antecipando alterações na fluidez circulatória e no esforço ventricular. Esta intervenção é essencial para a segurança hemodinâmica do doente.",
    "distractorAnalysis": [
      "Está incorreta: a policitemia secundária na DPOC eleva perigosamente a viscosidade sanguínea, sobrecarregando o ventrículo direito (cor pulmonale) e aumentando o risco de trombose.",
      "Está incorreta: soluções hipertónicas sem hidratação equilibrada agravam a desidratação celular e a hiperosmolaridade, sendo contraindicadas na hiperviscosidade policitémica.",
      "Está incorreta: a viscosidade do sangue afeta a resistência vascular periférica sistémica total (R ∝ η), influenciando diretamente a pressão arterial e a pós-carga cardíaca."
    ],
    "nursingApplication": "O enfermeiro avalia o valor do hematócrito no pós-operatório e na desidratação, antecipando alterações na fluidez circulatória e no esforço ventricular."
  },
  {
    "id": 4128,
    "topicId": 4,
    "question": "Ao analisar as variáveis físicas que regem 'relação exponencial entre hematócrito (Ht) e viscosidade', qual das seguintes afirmações expressa com rigor a relação hidrodinâmica entre pressão, velocidade e geometria vascular?",
    "options": [
      "Quando o hematócrito sobe de 40% para 60%, a viscosidade do sangue praticamente duplica, disparando a resistência vascular periférica e a dissipação de energia por atrito.",
      "Quando o hematócrito sobe de 40% para 60%, a viscosidade reduz-se para metade devido ao alinhamento laminar compulsivo de todos os eritrócitos no centro geométrico do vaso.",
      "A resistência vascular ao fluxo independe da viscosidade sanguínea, sendo determinada exclusivamente pelo comprimento anatómico total das grandes artérias do tórax.",
      "A elevação do hematócrito quadruplica a velocidade média de escoamento capilar através de um fenómeno espontâneo de supercondutividade celular endotelial contínua."
    ],
    "correctIndex": 0,
    "explanation": "A análise hidrodinâmica correta confirma que Quando o hematócrito sobe de 40% para 60%, a viscosidade do sangue praticamente duplica, disparando a resistência vascular periférica. O domínio destas leis permite ao enfermeiro interpretar os fenómenos vasculares com rigor científico.",
    "distractorAnalysis": [
      "Está incorreta: a elevação do hematócrito intensifica as colisões e agregação celular, elevando acentuadamente a viscosidade aparente do sangue circulante.",
      "Está incorreta: pela Lei de Poiseuille (R = 8 η L / π r⁴), a resistência vascular é diretamente proporcional à viscosidade dinâmica (η) do fluido em movimento.",
      "Está incorreta: o aumento da viscosidade desacelera a velocidade capilar e aumenta a resistência pré-capilar, não existindo supercondutividade mecânica no sistema vascular."
    ],
    "nursingApplication": "O enfermeiro avalia o valor do hematócrito no pós-operatório e na desidratação, antecipando alterações na fluidez circulatória e no esforço ventricular."
  },
  {
    "id": 4129,
    "topicId": 4,
    "question": "Na hidrodinâmica circulatória aplicada à enfermagem, em relação a 'policitemia vera e estados de hiperviscosidade', qual é a fundamentação biofísica correta?",
    "options": [
      "Com Ht > 55-60%, a velocidade circulatória atinge valores supersónicos que limpam as placas de ateroma e eliminam qualquer probabilidade de complicações isquémicas coronárias.",
      "Com Ht > 55-60%, o sangue torna-se excessivamente viscoso, gerando estase nos capilares e elevando criticamente o risco de trombose venosa, AVC isquémico e enfarte do miocárdio.",
      "A policitemia vera induz uma perda total de atrito nos vasos sanguíneos, fazendo com que a pressão arterial média desça para valores inferiores a trinta milímetros de mercúrio.",
      "Em doentes com hematócrito elevado, as hemácias transformam-se espontaneamente em plaquetas funcionais, esgotando a reserva celular eritrocitária na medula óssea."
    ],
    "correctIndex": 1,
    "explanation": "Em biofísica circulatória, policitemia vera e estados de hiperviscosidade explica-se pelo facto de que em situações de hematócrito > 55-60%, o sangue torna-se excessivamente viscoso, desacelerando o fluxo nos capilares periféricos e cerebrais. A estase capilar e o atrito intravascular elevado aumentam criticamente o risco de trombose venosa profunda, AVC isquémico e enfarte agudo do miocárdio.",
    "distractorAnalysis": [
      "Está incorreta: a hiperviscosidade policitémica lentifica o fluxo e aumenta a tensão de corte parietal anormal, sendo uma das principais causas de eventos trombóticos arteriais e venosos.",
      "Está incorreta: a elevada viscosidade aumenta a resistência e a pós-carga, associando-se a hipertensão arterial secundária e sobrecarga ventricular em vez de hipotensão extrema.",
      "Está incorreta: eritrócitos e plaquetas derivam de linhagens hematopoiéticas distintas; glóbulos vermelhos maduros anucleados não se convertem em plaquetas periféricas."
    ],
    "nursingApplication": "O enfermeiro colabora na execução de flebotomias terapêuticas (sangrias) prescritas, monitorizando os sinais vitais e garantindo a reposição volémica com soro fisiológico."
  },
  {
    "id": 4130,
    "topicId": 4,
    "question": "Na avaliação clínica e administração de terapêutica por um enfermeiro, como se manifesta a aplicação prática de 'policitemia vera e estados de hiperviscosidade'?",
    "options": [
      "O enfermeiro administra ferro dextrano em doses maciças no doente policitémico para forçar a síntese medular acelerada de novos eritrócitos jovens e flexíveis.",
      "O enfermeiro suspende a ingestão de água no doente com policitemia vera para promover a perda de peso corporal e tentar desidratar o compartimento vascular central.",
      "O enfermeiro colabora na execução de flebotomias terapêuticas prescritas, monitorizando os sinais vitais e garantindo a reposição volémica necessária com soro fisiológico.",
      "O enfermeiro encoraja o repouso absoluto no leito sem qualquer movimentação passiva das pernas para evitar que o sangue viscoso atinja as cavidades cardíacas direitas."
    ],
    "correctIndex": 2,
    "explanation": "A aplicação de enfermagem para policitemia vera e estados de hiperviscosidade baseia-se no princípio: O enfermeiro colabora na execução de flebotomias terapêuticas (sangrias) prescritas, monitorizando os sinais vitais e garantindo a reposição volémica com soro fisiológico. Esta intervenção é essencial para a segurança hemodinâmica do doente.",
    "distractorAnalysis": [
      "Está incorreta: administrar ferro na policitemia agravaria a proliferação eritrocitária; o tratamento visa reduzir o hematócrito para < 45% mediante flebotomias ou citorredução.",
      "Está incorreta: a desidratação reduz o volume plasmático e piora a hemoconcentração e a hiperviscosidade; a hidratação abundante é fundamental na policitemia.",
      "Está incorreta: o repouso absoluto em doentes com sangue espesso e hiperviscoso predispõe à estase e formação de trombos venosos profundos nos membros inferiores."
    ],
    "nursingApplication": "O enfermeiro colabora na execução de flebotomias terapêuticas (sangrias) prescritas, monitorizando os sinais vitais e garantindo a reposição volémica com soro fisiológico."
  },
  {
    "id": 4131,
    "topicId": 4,
    "question": "Ao analisar as variáveis físicas que regem 'policitemia vera e estados de hiperviscosidade', qual das seguintes afirmações expressa com rigor a relação hidrodinâmica entre pressão, velocidade e geometria vascular?",
    "options": [
      "O aumento da viscosidade sanguínea reduz a pressão necessária para perfundir os rins, induzindo uma vasodilatação reflexa que anula o trabalho mecânico do ventrículo esquerdo.",
      "A hiperviscosidade da policitemia provoca a disfunção mecânica do glicocálix endotelial, transformando todas as artérias em condutos rígidos com perda de permeabilidade capilar.",
      "O excesso de eritrócitos no lúmen vascular aumenta a velocidade da onda de pulso para o dobro da velocidade da luz, impedindo o relaxamento diastólico ventricular.",
      "A estase capilar e o atrito intravascular elevado na policitemia aumentam o esforço cardíaco e multiplicam o risco de trombose vascular por hiperviscosidade reológica."
    ],
    "correctIndex": 3,
    "explanation": "A análise hidrodinâmica correta confirma que A estase capilar e o atrito intravascular elevado aumentam criticamente o risco de trombose venosa profunda, AVC isquémico e enfarte agudo do miocárdio. O domínio destas leis permite ao enfermeiro interpretar os fenómenos vasculares com rigor científico.",
    "distractorAnalysis": [
      "Está incorreta: pela hidrodinâmica de Poiseuille, o aumento da viscosidade eleva a perda de carga e exige pressões maiores do miocárdio para manter a mesma taxa de perfusão.",
      "Está incorreta: a hiperviscosidade altera o atrito e a hemostase tecidual, mas não elimina subitamente a integridade funcional de todo o leito vascular sistémico.",
      "Está incorreta: a velocidade da onda de pulso arterial situa-se entre 5 e 15 m/s nos tecidos biológicos, obedecendo às leis físicas da biomecânica vascular elastomérica."
    ],
    "nursingApplication": "O enfermeiro colabora na execução de flebotomias terapêuticas (sangrias) prescritas, monitorizando os sinais vitais e garantindo a reposição volémica com soro fisiológico."
  },
  {
    "id": 4132,
    "topicId": 4,
    "question": "Na hidrodinâmica circulatória aplicada à enfermagem, em relação a 'anemia severa e sopros cardíacos hiperdinâmicos', qual é a fundamentação biofísica correta?",
    "options": [
      "Na anemia acentuada (Ht < 25%), a viscosidade reduz-se para metade e o débito compensatório sobe; com v alta e η baixa, o número de Reynolds dispara, gerando sopros na aorta.",
      "Na anemia grave, a viscosidade sanguínea quadruplica devido ao aumento do tónus venoso, reduzindo o número de Reynolds e impedindo a formação de qualquer ruído acústico audível.",
      "A descida do hematócrito elimina o débito cardíaco por suprimir as forças de propulsão sistólica miocárdica, tornando o fluxo sanguíneo puramente hidrostático e retrógrado.",
      "Na anemia severa, o sangue transforma-se num gás ionizado de baixa condutância que neutraliza a turbulência valvular através da emissão contínua de ondas de radiofrequência."
    ],
    "correctIndex": 0,
    "explanation": "Em biofísica circulatória, anemia severa e sopros cardíacos hiperdinâmicos explica-se pelo facto de que com um hematócrito reduzido (< 25%), a viscosidade do sangue diminui para metade, o que faz baixar a resistência vascular e aumentar o retorno venoso e débito cardíaco. O aumento da velocidade (v) combinado com a descida da viscosidade (η) faz disparar o Número de Reynolds ($Re = \\rho v d / \\eta$), induzindo turbulência na válvula aórtica.",
    "distractorAnalysis": [
      "Está incorreta: a anemia diminui a viscosidade (menos células no plasma), o que eleva o valor do número de Reynolds ($Re = \\rho v d / \\eta$) e facilita a turbulência auscultável.",
      "Está incorreta: o débito cardíaco aumenta na anemia por taquicardia compensatória e aumento do volume sistólico para manter a entrega tecidual de oxigénio aos órgãos vitais.",
      "Está incorreta: o sangue permanece um líquido biológico newtoniano/não-newtoniano; a turbulência é um fenómeno hidrodinâmico mecânico clássico e não emissão de radiofrequência."
    ],
    "nursingApplication": "O enfermeiro ausculta um sopro sistólico de ejeção precoce nos focos da base e verifica que o sopro desaparece após a correção da anemia com transfusão ou ferro endovenoso."
  },
  {
    "id": 4133,
    "topicId": 4,
    "question": "Na avaliação clínica e administração de terapêutica por um enfermeiro, como se manifesta a aplicação prática de 'anemia severa e sopros cardíacos hiperdinâmicos'?",
    "options": [
      "O enfermeiro encaminha imediatamente o doente anémico com sopro sistólico para substituição cirúrgica da válvula aórtica sob circulação extracorpórea em bloco operatório.",
      "O enfermeiro ausculta um sopro sistólico de ejeção funcional nos focos da base e verifica que o sopro atenua ou desaparece após a correção da anemia com transfusão ou ferroterapia.",
      "O enfermeiro considera que o sopro da anemia é um sinal de estenose valvular mitral congénita irreversível que contraindica a administração de concentrados de eritrócitos.",
      "O enfermeiro administra beta-bloqueadores em doses máximas para anular o débito cardíaco em doentes anémicos, com o objetivo de evitar que o sopro seja audível no tórax."
    ],
    "correctIndex": 1,
    "explanation": "A aplicação de enfermagem para anemia severa e sopros cardíacos hiperdinâmicos baseia-se no princípio: O enfermeiro ausculta um sopro sistólico de ejeção precoce nos focos da base e verifica que o sopro desaparece após a correção da anemia com transfusão ou ferro endovenoso. Esta intervenção é essencial para a segurança hemodinâmica do doente.",
    "distractorAnalysis": [
      "Está incorreta: o sopro de ejeção na anemia é funcional e benigno, regredindo com a restauração dos níveis fisiológicos normais de hemoglobina e viscosidade sanguínea.",
      "Está incorreta: o sopro anémico é tipicamente de ejeção aórtica/pulmonar (focos da base) e não estenose mitral diastólica, sendo a transfusão indicada em anemias graves sintomáticas.",
      "Está incorreta: bloquear excessivamente a compensação adrenérgica no doente anémico grave pode precipitar choque cardiogénico e colapso circulatório por hipóxia tecidual."
    ],
    "nursingApplication": "O enfermeiro ausculta um sopro sistólico de ejeção precoce nos focos da base e verifica que o sopro desaparece após a correção da anemia com transfusão ou ferro endovenoso."
  },
  {
    "id": 4134,
    "topicId": 4,
    "question": "Ao analisar as variáveis físicas que regem 'anemia severa e sopros cardíacos hiperdinâmicos', qual das seguintes afirmações expressa com rigor a relação hidrodinâmica entre pressão, velocidade e geometria vascular?",
    "options": [
      "A redução da viscosidade sanguínea reduz o número de Reynolds para valores negativos, provocando a rotação retrógrada das hemácias em direção às artérias carótidas externas.",
      "O aumento da velocidade linear anula a energia cinética ventricular, fazendo com que o gradiente transvalvular aórtico se reduza a zero milímetros de mercúrio em repouso.",
      "O aumento da velocidade de fluxo combinado com a descida da viscosidade dinâmica faz subir o Número de Reynolds ($Re = \\rho v d / \\eta$), induzindo turbulência na raiz da aorta.",
      "O número de Reynolds mantém-se estritamente estável porque a densidade do plasma decresce na razão direta da quarta potência da perda globular eritrocitária total."
    ],
    "correctIndex": 2,
    "explanation": "A análise hidrodinâmica correta confirma que O aumento da velocidade (v) combinado com a descida da viscosidade (η) faz disparar o Número de Reynolds ($Re = \\rho v d / \\eta$), induzindo turbulência na válvula aórtica. O domínio destas leis permite ao enfermeiro interpretar os fenómenos vasculares com rigor científico.",
    "distractorAnalysis": [
      "Está incorreta: grandezas físicas reais no número de Reynolds são estritamente positivas; valores negativos não têm significado físico na hidrodinâmica clássica.",
      "Está incorreta: o aumento da velocidade eleva a energia cinética ($E_k = 1/2 m v^2$), aumentando as forças de inércia que favorecem o desenvolvimento de vórtices turbulentos.",
      "Está incorreta: a densidade plasmática varia minimamente na anemia, sendo a queda acentuada de viscosidade e o aumento de velocidade os motores do disparo de Reynolds."
    ],
    "nursingApplication": "O enfermeiro ausculta um sopro sistólico de ejeção precoce nos focos da base e verifica que o sopro desaparece após a correção da anemia com transfusão ou ferro endovenoso."
  },
  {
    "id": 4135,
    "topicId": 4,
    "question": "Na hidrodinâmica circulatória aplicada à enfermagem, em relação a 'transfusão rápida de concentrado de eritrócitos e vigilância hemodinâmica', qual é a fundamentação biofísica correta?",
    "options": [
      "A transfusão rápida de concentrado de eritrócitos dilui o sangue para valores de viscosidade próximos de zero, provocando hipotensão refratária e hemorragias difusas.",
      "A administração de concentrado eritrocitário elimina a resistência vascular periférica em idosos, permitindo débitos de infusão de três litros por hora em veias periféricas.",
      "O aumento do hematócrito pós-transfusional reduz a pós-carga ventricular esquerda por facilitar o relaxamento elástico passivo da parede da artéria aorta descendente.",
      "A transfusão rápida de múltiplos concentrados de eritrócitos eleva subitamente o Ht e a viscosidade, podendo desencadear edema agudo do pulmão por sobrecarga circulatória (TACO)."
    ],
    "correctIndex": 3,
    "explanation": "Em biofísica circulatória, transfusão rápida de concentrado de eritrócitos e vigilância hemodinâmica explica-se pelo facto de que a administração rápida de múltiplos concentrados de eritrócitos eleva subitamente o hematócrito e a viscosidade do sangue em circulação. Num doente idoso ou com insuficiência cardíaca prévia, o aumento abrupto da pós-carga e resistência periférica pode desencadear edema agudo do pulmão (sobrecarga circulatória TACO).",
    "distractorAnalysis": [
      "Está incorreta: os concentrados de eritrócitos possuem hematócrito elevado (~60-70%), aumentando a viscosidade e o volume intravascular e não diluindo o sangue.",
      "Está incorreta: a rápida infusão em doentes idosos ou cardiopatas eleva a resistência e a pré-carga, requerendo infusão lenta e vigilância de sinais de congestão pulmonar.",
      "Está incorreta: o aumento da viscosidade eleva a resistência vascular periférica e a pós-carga (R ∝ η), aumentando o trabalho mecânico exigido ao miocárdio esquerdo."
    ],
    "nursingApplication": "O enfermeiro vigia rigorosamente a frequência respiratória, saturação de O₂, auscultação pulmonar e pressão arterial a cada 15 minutos durante a transfusão sanguínea."
  },
  {
    "id": 4136,
    "topicId": 4,
    "question": "Na avaliação clínica e administração de terapêutica por um enfermeiro, como se manifesta a aplicação prática de 'transfusão rápida de concentrado de eritrócitos e vigilância hemodinâmica'?",
    "options": [
      "O enfermeiro monitoriza frequência respiratória, saturação de oxigénio, auscultação pulmonar e pressão arterial a cada 15 minutos na fase inicial da transfusão sanguínea.",
      "O enfermeiro ausenta-se do quarto logo que inicia a transfusão de sangue, agendando uma reavaliação única dos sinais vitais para seis horas após o término da infusão.",
      "O enfermeiro perfunde o concentrado de eritrócitos em bólus pressurizado manual em todos os doentes idosos com antecedentes conhecidos de insuficiência cardíaca congestiva.",
      "O enfermeiro infunde simultaneamente soluções hipotónicas de glicose a 5% no mesmo equipo de sangue para acelerar a velocidade de passagem dos eritrócitos no cateter."
    ],
    "correctIndex": 0,
    "explanation": "A aplicação de enfermagem para transfusão rápida de concentrado de eritrócitos e vigilância hemodinâmica baseia-se no princípio: O enfermeiro vigia rigorosamente a frequência respiratória, saturação de O₂, auscultação pulmonar e pressão arterial a cada 15 minutos durante a transfusão sanguínea. Esta intervenção é essencial para a segurança hemodinâmica do doente.",
    "distractorAnalysis": [
      "Está incorreta: a vigilância nos primeiros 15 minutos é imperativa em enfermagem para detetar precocemente reações transfusionais agudas hemolíticas ou sobrecarga volémica (TACO).",
      "Está incorreta: a administração forçada sob pressão em doentes com reserva cardíaca diminuída precipita edema pulmonar agudo cardiogénico por sobrecarga circulatória.",
      "Está incorreta: soluções de glicose a 5% causam hemólise imediata das hemácias no equipo por hipotonia; o único fluido compatível para lavagem da linha de sangue é o soro fisiológico a 0,9%."
    ],
    "nursingApplication": "O enfermeiro vigia rigorosamente a frequência respiratória, saturação de O₂, auscultação pulmonar e pressão arterial a cada 15 minutos durante a transfusão sanguínea."
  },
  {
    "id": 4137,
    "topicId": 4,
    "question": "Ao analisar as variáveis físicas que regem 'transfusão rápida de concentrado de eritrócitos e vigilância hemodinâmica', qual das seguintes afirmações expressa com rigor a relação hidrodinâmica entre pressão, velocidade e geometria vascular?",
    "options": [
      "No idoso, a transfusão de sangue diminui a pressão hidrostática capilar pulmonar abaixo de zero, impedindo qualquer filtração de líquido para os septos interalveolares.",
      "No idoso com reserva cardíaca diminuída, o acréscimo abrupto de viscosidade e volume intravascular aumenta a pós-carga e a pressão capilar pulmonar, predispondo a edema alveolar.",
      "A elevação da viscosidade com a transfusão anula o gradiente pressórico arteriolar, fazendo com que o sangue flua exclusivamente por capilaridade passiva nas extremidades.",
      "A administração de glóbulos vermelhos induz uma contração isométrica irreversível das grandes artérias elásticas que impede a ejeção de sangue durante a fase sistólica."
    ],
    "correctIndex": 1,
    "explanation": "A análise hidrodinâmica correta confirma que Num doente idoso ou com insuficiência cardíaca prévia, o aumento abrupto da pós-carga e resistência periférica pode desencadear edema agudo do pulmão (sobrecarga circulatória TACO). O domínio destas leis permite ao enfermeiro interpretar os fenómenos vasculares com rigor científico.",
    "distractorAnalysis": [
      "Está incorreta: a sobrecarga transfusional (TACO) eleva a pressão na aurícula esquerda e a pressão capilar pulmonar (Pc > 20-25 mmHg), forçando o extravasamento para os alvéolos.",
      "Está incorreta: o aumento da viscosidade eleva o gradiente pressórico necessário para impulsionar o fluido, não operando o sistema cardiovascular por capilaridade estática.",
      "Está incorreta: a parede aórtica mantém a sua distensibilidade biomecânica elástica, sofrendo distensão perante o aumento de volume sistólico ejetado pelo ventrículo."
    ],
    "nursingApplication": "O enfermeiro vigia rigorosamente a frequência respiratória, saturação de O₂, auscultação pulmonar e pressão arterial a cada 15 minutos durante a transfusão sanguínea."
  },
  {
    "id": 4138,
    "topicId": 4,
    "question": "Na hidrodinâmica circulatória aplicada à enfermagem, em relação a 'desidratação e hemoconcentração iatrogénica', qual é a fundamentação biofísica correta?",
    "options": [
      "A desidratação reduz a viscosidade do sangue para valores próximos dos da água destilada, acelerando a circulação capilar e prevenindo qualquer lesão isquémica na pele dos idosos.",
      "A desidratação extracelular provoca a expansão maciça do volume plasmático intravascular através da captação ativa de azoto atmosférico pelos capilares dérmicos superficiais.",
      "A perda de água plasmática na desidratação eleva o hematócrito relativo (hemoconcentração), tornando o sangue hiperviscoso e predispondo a tromboses e úlceras de pressão.",
      "A perda de fluidos orgânicos aumenta a complacência das veias sistémicas, impedindo que a pressão arterial média sofra qualquer variação perante choques hipovolémicos graves."
    ],
    "correctIndex": 2,
    "explanation": "Em biofísica circulatória, desidratação e hemoconcentração iatrogénica explica-se pelo facto de que a perda acentuada de água livre (diarreia profusa, vómitos ou diuréticos em excesso) reduz o volume plasmático, elevando falsamente a concentração de células (hemoconcentração com Ht elevado). Isto torna o sangue transitoriamente hiperviscoso, predispondo idosos acamados a úlceras por pressão isquémicas e tromboflebites de cateteres.",
    "distractorAnalysis": [
      "Está incorreta: a perda de água livre concentra os componentes figurados (hemoconcentração), aumentando substancialmente a viscosidade e o atrito interno do sangue.",
      "Está incorreta: o organismo humano não capta azoto gasoso para expandir o plasma; a desidratação contrai o espaço intravascular e compromete a perfusão tecidual.",
      "Está incorreta: a hipovolemia por desidratação reduz o enchimento venoso e o retorno venoso, culminando em queda do débito cardíaco e hipotensão arterial severa."
    ],
    "nursingApplication": "O enfermeiro avalia o turgor cutâneo, humidade das mucosas, densidade urinária e diurese horária, promovendo a reidratação endovenosa para restaurar o volume intravascular e a viscosidade ótima."
  },
  {
    "id": 4139,
    "topicId": 4,
    "question": "Na avaliação clínica e administração de terapêutica por um enfermeiro, como se manifesta a aplicação prática de 'desidratação e hemoconcentração iatrogénica'?",
    "options": [
      "O enfermeiro restringe totalmente a ingestão de líquidos em doentes com sinais de desidratação, visando manter o sangue espesso para evitar perdas urinárias secundárias.",
      "O enfermeiro assume que a densidade urinária elevada (> 1,025) traduz hiper-hidratação com diluição excessiva do sangue, suspendendo qualquer administração de cristalóides.",
      "O enfermeiro desvaloriza a redução da diurese horária em doentes acamados febris, atribuindo a oligúria à perda fisiológica transitória da função tubular dos nefrónios corticais.",
      "O enfermeiro avalia turgor cutâneo, humidade das mucosas e diurese horária, promovendo a reidratação para restabelecer o volume intravascular e a viscosidade plasmática adequada."
    ],
    "correctIndex": 3,
    "explanation": "A aplicação de enfermagem para desidratação e hemoconcentração iatrogénica baseia-se no princípio: O enfermeiro avalia o turgor cutâneo, humidade das mucosas, densidade urinária e diurese horária, promovendo a reidratação endovenosa para restaurar o volume intravascular e a viscosidade ótima. Esta intervenção é essencial para a segurança hemodinâmica do doente.",
    "distractorAnalysis": [
      "Está incorreta: restringir líquidos no doente desidratado agrava a hemoconcentração, precipita insuficiência renal aguda pré-renal e aumenta o risco de trombose vascular.",
      "Está incorreta: densidade urinária elevada indica urina concentrada pelo rim em resposta à hipovolemia e desidratação, requerendo reposição volémica com cristaloides.",
      "Está incorreta: a oligúria (< 0,5 mL/kg/h) é um sinal de alarme precoce de hipoperfusão renal em doentes desidratados, exigindo avaliação e hidratação imediata de enfermagem."
    ],
    "nursingApplication": "O enfermeiro avalia o turgor cutâneo, humidade das mucosas, densidade urinária e diurese horária, promovendo a reidratação endovenosa para restaurar o volume intravascular e a viscosidade ótima."
  },
  {
    "id": 4140,
    "topicId": 4,
    "question": "Ao analisar as variáveis físicas que regem 'desidratação e hemoconcentração iatrogénica', qual das seguintes afirmações expressa com rigor a relação hidrodinâmica entre pressão, velocidade e geometria vascular?",
    "options": [
      "A hemoconcentração torna o sangue transitoriamente hiperviscoso, desacelerando a microcirculação tecidual e predispondo idosos acamados a úlceras por pressão e tromboflebites.",
      "A hemoconcentração acelera a velocidade do sangue nos capilares periféricos, impedindo a adesão de plaquetas e tornando o endotélio imune a qualquer processo inflamatório.",
      "O aumento da viscosidade por desidratação elimina a necessidade de alternância de decúbitos em doentes acamados, pois a pressão tecidual dissipa-se sem comprimir os vasos dérmicos.",
      "A desidratação aguda suprime a perda de carga hidrostática nos membros inferiores, garantindo oxigenação tecidual contínua mesmo perante oclusões arteriais periféricas completas."
    ],
    "correctIndex": 0,
    "explanation": "A análise hidrodinâmica correta confirma que Isto torna o sangue transitoriamente hiperviscoso, predispondo idosos acamados a úlceras por pressão isquémicas e tromboflebites de cateteres. O domínio destas leis permite ao enfermeiro interpretar os fenómenos vasculares com rigor científico.",
    "distractorAnalysis": [
      "Está incorreta: o sangue espesso flui mais lentamente nos capilares sujeitos a compressão extrínseca, agravando a isquemia local e acelerando a necrose dérmica das úlceras de pressão.",
      "Está incorreta: a imobilização e a hemoconcentração exigem vigilância redobrada e alternância regular de posicionamentos (a cada 2 horas) para aliviar a compressão microvascular.",
      "Está incorreta: a viscosidade acrescida aumenta a perda de carga nos leitos vasculares periféricos, agravando a hipoxemia tecidual distal em doentes com compromisso arterial."
    ],
    "nursingApplication": "O enfermeiro avalia o turgor cutâneo, humidade das mucosas, densidade urinária e diurese horária, promovendo a reidratação endovenosa para restaurar o volume intravascular e a viscosidade ótima."
  },
  {
    "id": 4141,
    "topicId": 4,
    "question": "Na hidrodinâmica circulatória aplicada à enfermagem, em relação a 'fórmula e dependência do débito volumétrico na Lei de Poiseuille', qual é a fundamentação biofísica correta?",
    "options": [
      "Q = (8 · η · L · ΔP) / (π · r²), indicando que o caudal varia com o quadrado do raio e de forma diretamente proporcional ao comprimento total do conduto tubular cilíndrico.",
      "Q = (π · ΔP · r⁴) / (8 · η · L), demonstrando que o caudal depende da 4.ª potência do raio (r⁴); pequenas variações de calibre produzem alterações gigantescas no fluxo tecidual.",
      "Q = (ΔP · r) / (η · L⁴), indicando que o caudal é inversamente proporcional à quarta potência do comprimento e independe da área da secção reta transversal circular.",
      "Q = π · r · v · ΔP, indicando que o débito volumétrico é uma grandeza invariável e imune a quaisquer alterações na viscosidade dinâmica do líquido biológico circulante."
    ],
    "correctIndex": 1,
    "explanation": "Em biofísica circulatória, fórmula e dependência do débito volumétrico na Lei de Poiseuille explica-se pelo facto de que Q = (π · ΔP · r⁴) / (8 · η · L), demonstrando que o débito é diretamente proporcional à diferença de pressão (ΔP) e à quarta potência do raio (r⁴), e inversamente proporcional à viscosidade (η) e comprimento (L). A dependência em relação a r⁴ significa que pequenas alterações de calibre vascular produzem variações astronómicas no fluxo sanguíneo local.",
    "distractorAnalysis": [
      "Está incorreta: inverte a posição das variáveis da Lei de Hagen-Poiseuille; a viscosidade e o comprimento figuram no denominador e o raio elevado à quarta potência no numerador.",
      "Está incorreta: a quarta potência aplica-se ao raio interno do conduto (r⁴) e não ao comprimento (L¹); o comprimento figura linearmente no denominador da resistência.",
      "Está incorreta: a Lei de Poiseuille demonstra que o caudal é altamente dependente da viscosidade (inversamente proporcional) e da geometria transversal do conduto cilíndrico."
    ],
    "nursingApplication": "O enfermeiro compreende porque uma vasodilatação arteriolar de apenas 19% duplica o fluxo de sangue no leito tecidual ($1,19^4 \\approx 2,0$)."
  },
  {
    "id": 4142,
    "topicId": 4,
    "question": "Na avaliação clínica e administração de terapêutica por um enfermeiro, como se manifesta a aplicação prática de 'fórmula e dependência do débito volumétrico na Lei de Poiseuille'?",
    "options": [
      "O enfermeiro presume que para duplicar o caudal sanguíneo para um órgão é estritamente necessário duplicar o raio anatómico da sua artéria nutridora principal.",
      "O enfermeiro sabe que as arteríolas não conseguem regular o fluxo tecidual, sendo a perfusão periférica controlada exclusivamente pela força da gravidade nos membros.",
      "O enfermeiro compreende por que razão uma modesta vasodilatação arteriolar de apenas 19% é suficiente para duplicar o fluxo de sangue num leito tecidual periférico (1,19⁴ ≈ 2,0).",
      "O enfermeiro utiliza torniquetes arteriais compressivos com o objetivo intencional de dilatar as artérias distais através do aumento passivo da resistência vascular."
    ],
    "correctIndex": 2,
    "explanation": "A aplicação de enfermagem para fórmula e dependência do débito volumétrico na Lei de Poiseuille baseia-se no princípio: O enfermeiro compreende porque uma vasodilatação arteriolar de apenas 19% duplica o fluxo de sangue no leito tecidual ($1,19^4 \\approx 2,0$). Esta intervenção é essencial para a segurança hemodinâmica do doente.",
    "distractorAnalysis": [
      "Está incorreta: devido à dependência em r⁴, não é necessário duplicar o raio (2⁴ = 16); basta um aumento de ~19% no raio (1,19⁴ ≈ 2,0) para duplicar o débito volumétrico.",
      "Está incorreta: as arteríolas são os principais vasos de resistência da circulação, ajustando ativamente o raio vascular através de contração ou relaxamento do seu músculo liso.",
      "Está incorreta: garrotes arteriais provocam isquemia aguda a jusante e não promovem a vasodilatação funcional terapêutica em cuidados de enfermagem."
    ],
    "nursingApplication": "O enfermeiro compreende porque uma vasodilatação arteriolar de apenas 19% duplica o fluxo de sangue no leito tecidual ($1,19^4 \\approx 2,0$)."
  },
  {
    "id": 4143,
    "topicId": 4,
    "question": "Ao analisar as variáveis físicas que regem 'fórmula e dependência do débito volumétrico na Lei de Poiseuille', qual das seguintes afirmações expressa com rigor a relação hidrodinâmica entre pressão, velocidade e geometria vascular?",
    "options": [
      "A dependência do raio à quarta potência implica que vasos com raios muito pequenos oferecem menor resistência hidráulica do que vasos arteriais de grande calibre anatómico.",
      "A Lei de Poiseuille aplica-se exclusivamente a regimes de escoamento turbulento com números de Reynolds superiores a 10 000, sendo inválida no fluxo laminar fisiológico.",
      "A resistência vascular calculada por Poiseuille diminui linearmente com o aumento da viscosidade do fluido em virtude do efeito de deslizamento endotelial parietal.",
      "A dependência em relação à 4.ª potência do raio (r⁴) significa que pequeníssimas alterações no calibre dos vasos produzem variações astronómicas na resistência e no débito sanguíneo."
    ],
    "correctIndex": 3,
    "explanation": "A análise hidrodinâmica correta confirma que A dependência em relação a r⁴ significa que pequenas alterações de calibre vascular produzem variações astronómicas no fluxo sanguíneo local. O domínio destas leis permite ao enfermeiro interpretar os fenómenos vasculares com rigor científico.",
    "distractorAnalysis": [
      "Está incorreta: a resistência é inversamente proporcional a r⁴ (R = 8 η L / π r⁴); logo, vasos de menor raio oferecem resistências imensamente superiores ao escoamento.",
      "Está incorreta: a Lei de Hagen-Poiseuille foi deduzida estritamente para escoamento laminar estacionário em tubos cilíndricos retos de secção uniforme e fluido newtoniano.",
      "Está incorreta: a resistência hidráulica é diretamente proporcional à viscosidade do fluido (R ∝ η); aumentar a viscosidade aumenta sempre a resistência ao escoamento."
    ],
    "nursingApplication": "O enfermeiro compreende porque uma vasodilatação arteriolar de apenas 19% duplica o fluxo de sangue no leito tecidual ($1,19^4 \\approx 2,0$)."
  },
  {
    "id": 4144,
    "topicId": 4,
    "question": "Na hidrodinâmica circulatória aplicada à enfermagem, em relação a 'efeito dramático da redução do raio vascular à quarta potência (r⁴)', qual é a fundamentação biofísica correta?",
    "options": [
      "Se o raio de uma artéria reduzir para metade (50% de constrição), o fluxo cai para 1/16 do inicial (apenas 6,25%), exigindo 16 vezes mais pressão motora para manter o débito.",
      "Se o raio diminuir para metade, o fluxo sanguíneo cai exatamente para 50% do valor basal, de acordo com o princípio da proporcionalidade linear simples das canalizações.",
      "Se o raio diminuir para metade, o débito volumétrico aumenta dezasseis vezes por efeito Venturi, compensando instantaneamente a perda de diâmetro luminal arterial.",
      "A diminuição de 50% no raio de um vaso sanguíneo não provoca qualquer efeito no fluxo, dado que o sangue biológico acelera espontaneamente sem necessidade de gradiente pressórico."
    ],
    "correctIndex": 0,
    "explanation": "Em biofísica circulatória, efeito dramático da redução do raio vascular à quarta potência (r⁴) explica-se pelo facto de que se o raio interno de uma artéria diminuir para metade (redução de 50% por vasoconstrição ou estenose aterosclerótica), o fluxo cai para 1/16 do valor inicial (apenas 6,25% do fluxo prévio!). Para manter o mesmo débito com metade do raio, seria necessário um aumento de 16 vezes na diferença de pressão impulsora (ΔP).",
    "distractorAnalysis": [
      "Está incorreta: o fluxo não varia de forma linear com o raio (r¹), mas sim com a quarta potência (r⁴); (1/2)⁴ = 1/16, o que corresponde a uma redução drástica para 6,25%.",
      "Está incorreta: o efeito Venturi descreve a queda de pressão lateral decorrente do aumento de velocidade na estenose, não aumentando o débito volumétrico total do circuito.",
      "Está incorreta: para manter o fluxo num tubo com raio reduzido a metade, a resistência aumenta 16 vezes, exigindo um gradiente de pressão 16 vezes maior para vencer a oclusão."
    ],
    "nursingApplication": "O enfermeiro alerta para a gravidade dos espasmos coronários ou oclusões arteriais parciais, que induzem isquemia miocárdica e angina de peito instantânea."
  },
  {
    "id": 4145,
    "topicId": 4,
    "question": "Na avaliação clínica e administração de terapêutica por um enfermeiro, como se manifesta a aplicação prática de 'efeito dramático da redução do raio vascular à quarta potência (r⁴)'?",
    "options": [
      "O enfermeiro presume que estenoses coronárias de 50% são fisiologicamente irrelevantes em repouso e no esforço, dado que o fluxo distal diminui em apenas dois por cento.",
      "O enfermeiro reconhece o perigo crítico de espasmos coronários ou estenoses parciais, que induzem isquemia miocárdica e dor anginosa súbita devido à queda exponencial do fluxo.",
      "O enfermeiro sabe que as placas de ateroma que ocluem 70% do lúmen vascular aumentam a velocidade e oxigenação tecidual distal através da compressão mecânica do sangue.",
      "O enfermeiro instrui o doente com doença coronária a evitar medicamentos vasodilatadores (como a nitroglicerina), sob a premissa de que a vasodilatação reduz a perfusão."
    ],
    "correctIndex": 1,
    "explanation": "A aplicação de enfermagem para efeito dramático da redução do raio vascular à quarta potência (r⁴) baseia-se no princípio: O enfermeiro alerta para a gravidade dos espasmos coronários ou oclusões arteriais parciais, que induzem isquemia miocárdica e angina de peito instantânea. Esta intervenção é essencial para a segurança hemodinâmica do doente.",
    "distractorAnalysis": [
      "Está incorreta: uma redução de 50% no raio luminal diminui o fluxo potencial em 16 vezes, reduzindo drasticamente a reserva de fluxo coronário perante o aumento de consumo de oxigénio.",
      "Está incorreta: obstruções anatómicas significativas provocam hipoperfusão isquémica severa a jusante, manifestando-se clinicamente como angina de peito aos esforços ou em repouso.",
      "Está incorreta: vasodilatadores coronários (como os nitratos) aumentam o calibre vascular e reduzem a pré-carga, sendo cruciais no alívio da isquemia miocárdica aguda."
    ],
    "nursingApplication": "O enfermeiro alerta para a gravidade dos espasmos coronários ou oclusões arteriais parciais, que induzem isquemia miocárdica e angina de peito instantânea."
  },
  {
    "id": 4146,
    "topicId": 4,
    "question": "Ao analisar as variáveis físicas que regem 'efeito dramático da redução do raio vascular à quarta potência (r⁴)', qual das seguintes afirmações expressa com rigor a relação hidrodinâmica entre pressão, velocidade e geometria vascular?",
    "options": [
      "Para manter o mesmo débito volumétrico com metade do raio, a pressão hidrostática arterial teria de ser reduzida para 1/16 do seu valor basal por relaxamento elástico.",
      "A diferença de pressão motora independe da resistência hidráulica do vaso, dependendo unicamente da quantidade de ar expirado pelos pulmões durante a fase de tosse forçada.",
      "Para manter o mesmo débito com metade do raio vascular, seria necessário um aumento de 16 vezes na diferença de pressão motora impulsora (ΔP = Q · R com R dezasseis vezes maior).",
      "O organismo compensa a redução do raio vascular reduzindo a viscosidade do plasma para valores negativos através da libertação imediata de surfactante pulmonar na aorta."
    ],
    "correctIndex": 2,
    "explanation": "A análise hidrodinâmica correta confirma que Para manter o mesmo débito com metade do raio, seria necessário um aumento de 16 vezes na diferença de pressão impulsora (ΔP). O domínio destas leis permite ao enfermeiro interpretar os fenómenos vasculares com rigor científico.",
    "distractorAnalysis": [
      "Está incorreta: como o débito é Q = ΔP / R e a resistência aumentou 16 vezes ((1/2)⁻⁴ = 16), a pressão teria de aumentar 16 vezes e não diminuir para 1/16.",
      "Está incorreta: a pressão de perfusão rege-se pelo gradiente gerado pelo coração e vasos de resistência pré-capilares e não pelo volume expiratório pulmonar.",
      "Está incorreta: o surfactante atua nos alvéolos pulmonares reduzindo a tensão superficial ar-líquido, não sendo libertado na aorta nem gerando viscosidades negativas no sangue."
    ],
    "nursingApplication": "O enfermeiro alerta para a gravidade dos espasmos coronários ou oclusões arteriais parciais, que induzem isquemia miocárdica e angina de peito instantânea."
  },
  {
    "id": 4147,
    "topicId": 4,
    "question": "Na hidrodinâmica circulatória aplicada à enfermagem, em relação a 'calibre e comprimento de cateteres intravenosos periféricos (Abbocath)', qual é a fundamentação biofísica correta?",
    "options": [
      "O débito de um cateter depende unicamente do seu comprimento linear, debitando um cateter central longo de 30 cm muito mais líquido do que um cateter venoso periférico curto de 3 cm.",
      "Todos os cateteres intravenosos possuem rigorosamente a mesma resistência ao escoamento, debitando o mesmo volume de líquido para um mesmo gradiente gravitacional de perfusão.",
      "Cateteres finos de calibre 24G são os mais indicados para a ressuscitação rápida no choque hemorrágico, visto que a pequena área acelera o líquido por efeito de propulsão a jato.",
      "Pela Lei de Poiseuille, maximiza-se o fluxo com grande calibre (r amplo) e comprimento reduzido (L curto): um cateter 14G curto debita >300 mL/min, enquanto um CVC longo debita <50 mL/min."
    ],
    "correctIndex": 3,
    "explanation": "Em biofísica circulatória, calibre e comprimento de cateteres intravenosos periféricos (Abbocath) explica-se pelo facto de que segundo Poiseuille, o fluxo é maximizado usando cateteres com grande raio interno (grande calibre) e pequeno comprimento (L curto). Um cateter periférico curto 14G (laranja, diâmetro ~2,1 mm) debita mais de 300 mL/min de soro, enquanto um cateter central CVC longo e fino (com L de 20 cm) debita menos de 50 mL/min sob a mesma pressão gravitacional.",
    "distractorAnalysis": [
      "Está incorreta: o fluxo é inversamente proporcional ao comprimento (Q ∝ 1/L); logo, cateteres mais longos impõem maior resistência e debitam menos volume que cateteres curtos.",
      "Está incorreta: a geometria do cateter (comprimento e raio interno) determina a sua resistência hidráulica de acordo com Poiseuille, variando os débitos entre 20 mL/min e 350 mL/min.",
      "Está incorreta: cateteres 24G muito finos possuem resistência hidráulica extremamente elevada (R ∝ 1/r⁴), sendo totalmente desadequados para infusão rápida de volume no choque grave."
    ],
    "nursingApplication": "Em situações de paragem cardiorrespiratória ou choque hipovolémico hemorrágico grave, o enfermeiro punciona de imediato dois acessos venosos periféricos curtos de grande calibre (14G ou 16G)."
  },
  {
    "id": 4148,
    "topicId": 4,
    "question": "Na avaliação clínica e administração de terapêutica por um enfermeiro, como se manifesta a aplicação prática de 'calibre e comprimento de cateteres intravenosos periféricos (Abbocath)'?",
    "options": [
      "No choque hipovolémico hemorrágico ou paragem, o enfermeiro punciona de imediato dois acessos venosos periféricos curtos e de grande calibre (14G ou 16G) para infusão ultrarrápida.",
      "No choque hipovolémico grave, o enfermeiro aguarda a colocação de um cateter venoso central de lúmen fino antes de iniciar qualquer infusão de cristalóides ou sangue.",
      "O enfermeiro utiliza exclusivamente agulhas epicranianas pediátricas do tipo borboleta (25G) para a ressuscitação volémica massiva de doentes politraumatizados graves.",
      "O enfermeiro sabe que cateteres de grande calibre estão formalmente contraindicados em reanimação de emergência devido ao risco de colapso osmótico da veia perfundida."
    ],
    "correctIndex": 0,
    "explanation": "A aplicação de enfermagem para calibre e comprimento de cateteres intravenosos periféricos (Abbocath) baseia-se no princípio: Em situações de paragem cardiorrespiratória ou choque hipovolémico hemorrágico grave, o enfermeiro punciona de imediato dois acessos venosos periféricos curtos de grande calibre (14G ou 16G). Esta intervenção é essencial para a segurança hemodinâmica do doente.",
    "distractorAnalysis": [
      "Está incorreta: cateteres venosos centrais longos possuem resistência hidráulica muito elevada, sendo os cateteres periféricos curtos e calibrosos os mais eficazes na ressuscitação rápida.",
      "Está incorreta: agulhas finas de calibre 25G oferecem resistências imensas, tornando a reposição volémica rápida impossível e levando o doente ao colapso hemodinâmico.",
      "Está incorreta: cateteres de 14G e 16G são a escolha prioritária padrão internacional de ouro no suporte avançado de vida e no choque hemorrágico agudo."
    ],
    "nursingApplication": "Em situações de paragem cardiorrespiratória ou choque hipovolémico hemorrágico grave, o enfermeiro punciona de imediato dois acessos venosos periféricos curtos de grande calibre (14G ou 16G)."
  },
  {
    "id": 4149,
    "topicId": 4,
    "question": "Ao analisar as variáveis físicas que regem 'calibre e comprimento de cateteres intravenosos periféricos (Abbocath)', qual das seguintes afirmações expressa com rigor a relação hidrodinâmica entre pressão, velocidade e geometria vascular?",
    "options": [
      "Um cateter periférico curto e um CVC longo de mesmo diâmetro interno oferecem rigorosamente a mesma taxa de perfusão, visto que o comprimento é compensado pela gravidade.",
      "Um cateter periférico curto 14G (diâmetro ~2,1 mm) debita mais de 300 mL/min de soro, enquanto um lúmen de CVC longo e fino (L de 20 cm) debita menos de 50 mL/min sob a mesma pressão.",
      "O cateter longo de 20 cm atinge débitos cinco vezes superiores aos de um cateter de 3 cm em virtude da coluna hidrostática acumulada no interior da sua própria tubagem flexível.",
      "O débito de infusão através de qualquer cateter venoso é estritamente independente da diferença de pressão hidrostática entre o frasco de soro e a veia do doente puncionado."
    ],
    "correctIndex": 1,
    "explanation": "A análise hidrodinâmica correta confirma que Um cateter periférico curto 14G (laranja, diâmetro ~2,1 mm) debita mais de 300 mL/min de soro, enquanto um cateter central CVC longo e fino (com L de 20 cm) debita menos de 50 mL/min sob a mesma pressão gravitacional. O domínio destas leis permite ao enfermeiro interpretar os fenómenos vasculares com rigor científico.",
    "distractorAnalysis": [
      "Está incorreta: a resistência aumenta proporcionalmente com o comprimento do conduto (R ∝ L); o CVC longo oferece cerca de sete vezes mais resistência do que o cateter curto.",
      "Está incorreta: o comprimento do cateter não acrescenta coluna motora útil quando o circuito está na horizontal ou em veias com retorno; pelo contrário, dissipa carga por atrito viscoso.",
      "Está incorreta: o fluxo volumétrico é diretamente dependente do gradiente de pressão impulsora (ΔP), aumentando quando o frasco de infusão é elevado em relação à veia."
    ],
    "nursingApplication": "Em situações de paragem cardiorrespiratória ou choque hipovolémico hemorrágico grave, o enfermeiro punciona de imediato dois acessos venosos periféricos curtos de grande calibre (14G ou 16G)."
  },
  {
    "id": 4150,
    "topicId": 4,
    "question": "Na hidrodinâmica circulatória aplicada à enfermagem, em relação a 'altura do frasco de soro na infusão por gravidade', qual é a fundamentação biofísica correta?",
    "options": [
      "Elevar o frasco de infusão reduz a pressão hidrostática na linha venosa porque o líquido arrefece ao entrar em contacto com as correntes de convecção do ar da enfermaria hospitalar.",
      "A altura do frasco de soro não exerce qualquer impacto na taxa de infusão, dado que a velocidade de gotejamento na câmara depende unicamente do diâmetro da agulha de respiro.",
      "A pressão hidrostática motora depende da altura segundo a lei de Stevin (ΔP = ρ · g · h); elevar o frasco aumenta ΔP, o que faz subir linearmente o débito volumétrico Q por Poiseuille.",
      "A pressão gerada por um frasco de soro a um metro de altura é de 1000 mmHg, superando em dez vezes a pressão sistólica intracardíaca do ventrículo esquerdo humano."
    ],
    "correctIndex": 2,
    "explanation": "Em biofísica circulatória, altura do frasco de soro na infusão por gravidade explica-se pelo facto de que a pressão impulsora hidrostática (ΔP) gerada pelo frasco de perfusão depende da altura manométrica segundo a lei de Stevin: ΔP = ρ · g · h. Ao elevar o frasco de soro em relação ao braço do doente (aumentando h), aumenta-se diretamente ΔP, o que faz subir linearmente o débito volumétrico Q pela Lei de Poiseuille.",
    "distractorAnalysis": [
      "Está incorreta: a pressão hidrostática da coluna líquida é dada por ρ·g·h; elevar o frasco aumenta a altura h e eleva diretamente a pressão motora de perfusão na veia.",
      "Está incorreta: a altura manométrica da coluna de líquido é o motor físico da infusão por gravidade livre, alterando expressivamente o débito volumétrico calibrado.",
      "Está incorreta: uma coluna de 1 metro de água gera cerca de 74 mmHg (100 cm H₂O ≈ 73,5 mmHg), pressão segura e suficiente para superar a pressão venosa periférica (~5-15 mmHg)."
    ],
    "nursingApplication": "O enfermeiro ajusta a altura do suporte de soro para manter o ritmo prescrito quando não dispõe de bomba infusora volumétrica computorizada."
  },
  {
    "id": 4151,
    "topicId": 4,
    "question": "Na avaliação clínica e administração de terapêutica por um enfermeiro, como se manifesta a aplicação prática de 'altura do frasco de soro na infusão por gravidade'?",
    "options": [
      "O enfermeiro baixa o frasco de soro até ao chão da enfermaria para permitir que a pressão atmosférica exerça um vácuo potente que aspire o líquido diretamente para a veia.",
      "O enfermeiro sabe que a altura do frasco deve ser mantida rigorosamente ao nível do coração para impedir que a solução sofra ionização espontânea pelo campo gravítico da Terra.",
      "O enfermeiro eleva o suporte de soro até quatro metros de altura para induzir a cavitação ultra-acústica das moléculas de água e esterilizar a solução durante a infusão contínua.",
      "O enfermeiro ajusta a altura do suporte de soro para manter o ritmo prescrito por gravidade, garantindo carga hidrostática suficiente para superar a pressão venosa periférica."
    ],
    "correctIndex": 3,
    "explanation": "A aplicação de enfermagem para altura do frasco de soro na infusão por gravidade baseia-se no princípio: O enfermeiro ajusta a altura do suporte de soro para manter o ritmo prescrito quando não dispõe de bomba infusora volumétrica computorizada. Esta intervenção é essencial para a segurança hemodinâmica do doente.",
    "distractorAnalysis": [
      "Está incorreta: baixar o frasco abaixo do nível venoso inverte o gradiente hidrostático, provocando paragem imediata da infusão e refluxo de sangue venoso para a tubagem.",
      "Está incorreta: colocar o frasco ao nível cardíaco anularia a carga hidrostática útil em decúbito; a gravidade não ioniza soluções cristaloides de fluidoterapia aquosa.",
      "Está incorreta: alturas excessivas geram pressões desnecessariamente elevadas e risco de rutura venosa periférica ou extravasamento, sem qualquer efeito esterilizante por cavitação."
    ],
    "nursingApplication": "O enfermeiro ajusta a altura do suporte de soro para manter o ritmo prescrito quando não dispõe de bomba infusora volumétrica computorizada."
  },
  {
    "id": 4152,
    "topicId": 4,
    "question": "Ao analisar as variáveis físicas que regem 'altura do frasco de soro na infusão por gravidade', qual das seguintes afirmações expressa com rigor a relação hidrodinâmica entre pressão, velocidade e geometria vascular?",
    "options": [
      "Ao elevar o frasco de infusão relativamente ao braço do doente (maior h), aumenta-se a pressão manométrica (ΔP = ρ·g·h), o que faz subir o débito volumétrico pela Lei de Poiseuille.",
      "Ao elevar o frasco, a pressão hidrostática diminui por descompressão adiabática, reduzindo o caudal de saída na câmara de gotejamento através de amortecimento viscoso.",
      "O aumento da altura do frasco anula a resistência interna do cateter intravenoso através da aceleração centrípeta gerada pela rotação do campo magnético hospitalar.",
      "A pressão hidrostática da linha de infusão depende unicamente da temperatura ambiente e independe por completo da altura vertical da coluna líquida suspensa no suporte."
    ],
    "correctIndex": 0,
    "explanation": "A análise hidrodinâmica correta confirma que Ao elevar o frasco de soro em relação ao braço do doente (aumentando h), aumenta-se diretamente ΔP, o que faz subir linearmente o débito volumétrico Q pela Lei de Poiseuille. O domínio destas leis permite ao enfermeiro interpretar os fenómenos vasculares com rigor científico.",
    "distractorAnalysis": [
      "Está incorreta: pela Lei de Stevin (ΔP = ρ·g·h), a pressão é diretamente proporcional à altura vertical da coluna líquida, aumentando e não diminuindo com a elevação do frasco.",
      "Está incorreta: a resistência do cateter mantém-se constante (geometria fixa); o aumento do débito resulta puramente do maior gradiente de pressão impulsora hidrostática.",
      "Está incorreta: a pressão hidrostática de qualquer líquido incompressível em repouso depende estritamente da densidade, gravidade e altura vertical da coluna (ρ·g·h)."
    ],
    "nursingApplication": "O enfermeiro ajusta a altura do suporte de soro para manter o ritmo prescrito quando não dispõe de bomba infusora volumétrica computorizada."
  },
  {
    "id": 4153,
    "topicId": 4,
    "question": "Na hidrodinâmica circulatória aplicada à enfermagem, em relação a 'resistência hidráulica de conduta na formulação de Poiseuille', qual é a fundamentação biofísica correta?",
    "options": [
      "A resistência ao escoamento é R = (π · r²) / (8 · η · L), indicando que vasos com raios muito reduzidos oferecem menor resistência ao avanço do sangue circulante em repouso.",
      "A resistência hidráulica é R = (8 · η · L) / (π · r⁴), análoga à Lei de Ohm elétrica (ΔP = Q · R); dominada pelo raio na quarta potência, confere às arteríolas o controlo da RVP.",
      "A resistência hidráulica de um vaso sanguíneo cilíndrico independe do comprimento do conduto, sendo determinada unicamente pela pressão telediastólica do ventrículo direito.",
      "A formulação de Poiseuille estabelece que a resistência vascular diminui na razão direta da viscosidade, facilitando o débito cardíaco em doentes com hiperviscosidade extrema."
    ],
    "correctIndex": 1,
    "explanation": "Em biofísica circulatória, resistência hidráulica de conduta na formulação de Poiseuille explica-se pelo facto de que a resistência ao escoamento é dada por R = (8 · η · L) / (π · r⁴), análoga à Lei de Ohm elétrica (ΔP = Q · R ou U = I · R). Esta resistência é dominada quase exclusivamente pelo raio vascular na quarta potência ($1/r^4$), tornando as arteríolas pré-capilares os principais vasos de resistência do corpo humano.",
    "distractorAnalysis": [
      "Está incorreta: a resistência hidráulica é inversamente proporcional à quarta potência do raio (1/r⁴) e não diretamente proporcional à área (r²), sendo máxima nos vasos estreitos.",
      "Está incorreta: a resistência ao fluxo é diretamente proporcional ao comprimento total do vaso condutor (R ∝ L), conforme deduzido matematicamente por Hagen e Poiseuille.",
      "Está incorreta: a resistência é diretamente proporcional à viscosidade dinâmica (R ∝ η); fluidos mais viscosos impõem maior atrito e maior resistência ao escoamento."
    ],
    "nursingApplication": "O enfermeiro administra anti-hipertensores como vasodilatadores arteriolares diretos, sabendo que o relaxamento da musculatura lisa vascular reduz a resistência periférica e normaliza a PA."
  },
  {
    "id": 4154,
    "topicId": 4,
    "question": "Na avaliação clínica e administração de terapêutica por um enfermeiro, como se manifesta a aplicação prática de 'resistência hidráulica de conduta na formulação de Poiseuille'?",
    "options": [
      "O enfermeiro administra fármacos venotónicos com a expetativa primordial de que a contração das veias cavas reduza a resistência vascular periférica das arteríolas dos membros.",
      "O enfermeiro sabe que as alterações do raio vascular afetam apenas a circulação linfática profunda, mantendo-se a resistência hidrodinâmica arterial imune à ação farmacológica.",
      "O enfermeiro administra vasodilatadores arteriolares prescritos sabendo que o relaxamento da musculatura lisa vascular aumenta o raio luminal e reduz a RVP, normalizando a PA.",
      "O enfermeiro restringe a ingestão hídrica em doentes hipertensos graves com o objetivo intencional de aumentar o raio das arteríolas renais através de atrito celular."
    ],
    "correctIndex": 2,
    "explanation": "A aplicação de enfermagem para resistência hidráulica de conduta na formulação de Poiseuille baseia-se no princípio: O enfermeiro administra anti-hipertensores como vasodilatadores arteriolares diretos, sabendo que o relaxamento da musculatura lisa vascular reduz a resistência periférica e normaliza a PA. Esta intervenção é essencial para a segurança hemodinâmica do doente.",
    "distractorAnalysis": [
      "Está incorreta: a contração venosa aumenta o retorno venoso (pré-carga) e não reduz a resistência arteriolar periférica sistémica (pós-carga ventricular).",
      "Está incorreta: os vasodilatadores arteriolares atuam diretamente sobre o músculo liso pré-capilar, reduzindo a RVP e diminuindo a pressão arterial de forma potente.",
      "Está incorreta: desidratar o doente não dilata as arteríolas renais; pelo contrário, ativa o sistema renina-angiotensina induzindo vasoconstrição renal compensatória."
    ],
    "nursingApplication": "O enfermeiro administra anti-hipertensores como vasodilatadores arteriolares diretos, sabendo que o relaxamento da musculatura lisa vascular reduz a resistência periférica e normaliza a PA."
  },
  {
    "id": 4155,
    "topicId": 4,
    "question": "Ao analisar as variáveis físicas que regem 'resistência hidráulica de conduta na formulação de Poiseuille', qual das seguintes afirmações expressa com rigor a relação hidrodinâmica entre pressão, velocidade e geometria vascular?",
    "options": [
      "A resistência vascular total é controlada unicamente pelas grandes artérias elásticas condutoras, que oferecem noventa por cento de toda a perda de carga da grande circulação.",
      "A dependência em 1/r⁴ indica que vasos de diâmetro capilar possuem a menor resistência hidráulica individual de todo o sistema cardiovascular humano em repouso basal.",
      "A resistência arteriolar é imune ao controlo pelo sistema nervoso autónomo simpático, sendo regulada exclusivamente pelas fases de maré gravitacional astronómica lunar.",
      "Por ser dominada pelo inverso da quarta potência do raio (1/r⁴), a resistência pré-capilar das arteríolas é o principal componente regulador da Resistência Vascular Periférica Total."
    ],
    "correctIndex": 3,
    "explanation": "A análise hidrodinâmica correta confirma que Esta resistência é dominada quase exclusivamente pelo raio vascular na quarta potência ($1/r^4$), tornando as arteríolas pré-capilares os principais vasos de resistência do corpo humano. O domínio destas leis permite ao enfermeiro interpretar os fenómenos vasculares com rigor científico.",
    "distractorAnalysis": [
      "Está incorreta: as grandes artérias condutoras (como a aorta e carótidas) possuem raio muito amplo, oferecendo resistência desprezável e queda de pressão insignificante (~2-3 mmHg).",
      "Está incorreta: cada capilar individual possui raio microscópico diminuto e resistência individual elevadíssima; a baixa resistência do leito capilar decorre da associação em paralelo.",
      "Está incorreta: o músculo liso arteriolar é densamente inervado por fibras simpáticas pós-ganglionares noradrenérgicas (recetores alfa-1), controlando ativamente o tónus vasomotor."
    ],
    "nursingApplication": "O enfermeiro administra anti-hipertensores como vasodilatadores arteriolares diretos, sabendo que o relaxamento da musculatura lisa vascular reduz a resistência periférica e normaliza a PA."
  },
  {
    "id": 4156,
    "topicId": 4,
    "question": "Na hidrodinâmica circulatória aplicada à enfermagem, em relação a 'associação de vasos em paralelo na circulação capilar', qual é a fundamentação biofísica correta?",
    "options": [
      "Na associação em paralelo, o inverso da resistência total é a soma dos inversos das individuais (1/R_total = Σ 1/R_i), fazendo com que a resistência da rede capilar seja muito baixa.",
      "Na associação de vasos em paralelo, a resistência total é dada pela soma direta de todas as resistências individuais, atingindo valores astronómicos na extensa rede capilar periférica.",
      "A disposição de capilares em paralelo bloqueia o fluxo de eritrócitos através de interferência destrutiva de linhas de corrente laminares na entrada de cada vénula de drenagem.",
      "A resistência de múltiplos capilares dispostos em paralelo é estritamente independente do número de canais funcionais abertos, dependendo apenas da pressão da aurícula direita."
    ],
    "correctIndex": 0,
    "explanation": "Em biofísica circulatória, associação de vasos em paralelo na circulação capilar explica-se pelo facto de que quando múltiplos vasos se dispõem em paralelo, o inverso da resistência total é a soma dos inversos das resistências individuais (1/R_total = 1/R₁ + 1/R₂ + ... + 1/Rₙ). Apesar de cada capilar individual ter um raio minúsculo e resistência altíssima, a associação em paralelo de milhares de milhões de capilares faz a resistência total da rede capilar desabar.",
    "distractorAnalysis": [
      "Está incorreta: a soma direta simples aplica-se a condutos em série e não em paralelo; em paralelo a resistência combinada total é sempre menor que a menor das resistências individuais.",
      "Está incorreta: o arranjo em paralelo divide a corrente sanguínea por milhões de canais, distribuindo o débito e facilitando o trânsito com menor dissipação de pressão global.",
      "Está incorreta: o recrutamento de novos capilares em paralelo (abertura de esfíncteres pré-capilares) aumenta o número de vias e reduz significativamente a resistência vascular local."
    ],
    "nursingApplication": "O enfermeiro compreende porque a maior queda de pressão arterial ocorre nas arteríolas (vasos de resistência em série prévia) e não no próprio leito capilar em paralelo."
  },
  {
    "id": 4157,
    "topicId": 4,
    "question": "Na avaliação clínica e administração de terapêutica por um enfermeiro, como se manifesta a aplicação prática de 'associação de vasos em paralelo na circulação capilar'?",
    "options": [
      "O enfermeiro presume que a pressão arterial média cai de 100 mmHg para 5 mmHg exclusivamente no interior da aorta torácica devido à elevada complacência da raiz arterial elástica.",
      "O enfermeiro compreende que a maior queda de pressão ocorre nas arteríolas (vasos de resistência em série prévia) e não no leito capilar, cuja vasta rede em paralelo reduz a resistência.",
      "O enfermeiro sabe que os capilares sistémicos suportam pressões sistólicas de 120 mmHg sem qualquer proteção arteriolar a montante, garantindo taxas ultra-rápidas de filtração aquosa.",
      "O enfermeiro monitoriza a pressão capilar diretamente através do manguito braquial, assumindo que a pressão lida no esfigmomanómetro aneroide reflete a pressão nos tecidos dérmicos."
    ],
    "correctIndex": 1,
    "explanation": "A aplicação de enfermagem para associação de vasos em paralelo na circulação capilar baseia-se no princípio: O enfermeiro compreende porque a maior queda de pressão arterial ocorre nas arteríolas (vasos de resistência em série prévia) e não no próprio leito capilar em paralelo. Esta intervenção é essencial para a segurança hemodinâmica do doente.",
    "distractorAnalysis": [
      "Está incorreta: a pressão na aorta oscila entre 120 e 80 mmHg (PAM ~95 mmHg), ocorrendo a maior dissipação pressórica (~60 mmHg de queda) ao nível das arteríolas pré-capilares.",
      "Está incorreta: se os capilares recebessem a pressão sistólica total aórtica de 120 mmHg, romper-se-iam ou gerariam edema intersticial maciço imediato por extravasamento de Starling.",
      "Está incorreta: a esfigmomanometria mede a pressão na artéria braquial de grande calibre; a pressão hidrostática capilar fisiológica situa-se na faixa de 15 a 35 mmHg."
    ],
    "nursingApplication": "O enfermeiro compreende porque a maior queda de pressão arterial ocorre nas arteríolas (vasos de resistência em série prévia) e não no próprio leito capilar em paralelo."
  },
  {
    "id": 4158,
    "topicId": 4,
    "question": "Ao analisar as variáveis físicas que regem 'associação de vasos em paralelo na circulação capilar', qual das seguintes afirmações expressa com rigor a relação hidrodinâmica entre pressão, velocidade e geometria vascular?",
    "options": [
      "A resistência total do leito capilar é a maior de toda a árvore circulatória, absorvendo noventa por cento de toda a potência mecânica hidrostática produzida pelo miocárdio esquerdo.",
      "A ramificação em paralelo quadruplica a viscosidade aparente do plasma por aprisionamento celular nos esfíncteres pré-capilares, anulando qualquer fluxo para as vénulas de drenagem.",
      "Apesar de cada capilar individual ter resistência elevada pelo seu raio microscópico, a associação em paralelo de milhares de milhões de capilares faz a resistência total da rede desabar.",
      "A associação em paralelo de vasos sanguíneos foi concebida unicamente para aumentar a velocidade linear das hemácias até valores próximos da velocidade do som tecidual."
    ],
    "correctIndex": 2,
    "explanation": "A análise hidrodinâmica correta confirma que Apesar de cada capilar individual ter um raio minúsculo e resistência altíssima, a associação em paralelo de milhares de milhões de capilares faz a resistência total da rede capilar desabar. O domínio destas leis permite ao enfermeiro interpretar os fenómenos vasculares com rigor científico.",
    "distractorAnalysis": [
      "Está incorreta: as arteríolas pré-capilares são o segmento de maior resistência do circuito sistémico (~45-50% da RPT total); o leito capilar somado em paralelo oferece menor resistência (~25%).",
      "Está incorreta: o arranjo em paralelo e o efeito Fåhræus-Lindqvist mantêm a viscosidade aparente baixa e a resistência global contida, facilitando a perfusão.",
      "Está incorreta: a ramificação capilar em paralelo desacelera o sangue para escassos 0,3 mm/s em regime laminar estritamente estável para favorecer a difusão molecular metabólica."
    ],
    "nursingApplication": "O enfermeiro compreende porque a maior queda de pressão arterial ocorre nas arteríolas (vasos de resistência em série prévia) e não no próprio leito capilar em paralelo."
  },
  {
    "id": 4159,
    "topicId": 4,
    "question": "Na hidrodinâmica circulatória aplicada à enfermagem, em relação a 'associação de vasos em série na árvore arterial principal', qual é a fundamentação biofísica correta?",
    "options": [
      "Na disposição de vasos arteriais em série, a resistência total do membro corresponde ao inverso da raiz quadrada do comprimento somado de todas as artérias periféricas comunicantes.",
      "A associação de condutos em série permite que o sangue flua com resistência total nula, sendo a pressão hidrostática final sempre superior à pressão inicial registada na raiz aórtica.",
      "Uma estenose obstrutiva focal numa artéria disposta em série é compensada instantaneamente por retração elástica espontânea, sem qualquer alteração na resistência total do órgão.",
      "Na disposição em série ao longo do eixo condutor arterial, as resistências hidráulicas somam-se linearmente (R_total = Σ R_i); uma estenose arterial aumenta a resistência total do membro."
    ],
    "correctIndex": 3,
    "explanation": "Em biofísica circulatória, associação de vasos em série na árvore arterial principal explica-se pelo facto de que na disposição em série ao longo do eixo condutor (aorta -> grandes artérias -> pequenas artérias -> arteríolas), as resistências hidráulicas somam-se linearmente (R_total = R₁ + R₂ + R₃). Qualquer obstrução ou estenose num segmento em série aumenta diretamente a resistência total de todo o órgão irrigado por aquela artéria.",
    "distractorAnalysis": [
      "Está incorreta: em condutos hidráulicos em série as resistências parciais somam-se algebricamente (R_total = R₁ + R₂ + ...), elevando a resistência global perante qualquer oclusão focal.",
      "Está incorreta: a perda de carga viscosa num circuito em série dissipa pressão irreversivelmente, sendo a pressão distal sempre inferior à proximal (P₂ < P₁).",
      "Está incorreta: uma estenose significativa num vaso em série (como a artéria femoral superficial) reduz drasticamente a pressão e o fluxo distal, provocando claudicação intermitente."
    ],
    "nursingApplication": "O enfermeiro vigia doentes com doença arterial periférica obstrutiva dos membros inferiores, onde estenoses em série na artéria femoral reduzem drasticamente o pulso pedioso."
  },
  {
    "id": 4160,
    "topicId": 4,
    "question": "Na avaliação clínica e administração de terapêutica por um enfermeiro, como se manifesta a aplicação prática de 'associação de vasos em série na árvore arterial principal'?",
    "options": [
      "O enfermeiro vigia doentes com doença arterial periférica obstrutiva, onde estenoses em série na artéria femoral reduzem a pressão a jusante e abafam ou anulam o pulso pedioso.",
      "O enfermeiro aplica compressas frias sobre membros inferiores com isquemia arterial aguda grave para forçar a vasoconstrição das artérias estenosadas e aumentar a oxigenação.",
      "O enfermeiro eleva os membros inferiores de doentes com oclusão arterial periférica grave acima da cabeça para que a gravidade drene o sangue das artérias femorais estenosadas.",
      "O enfermeiro desvaloriza a palpação de pulsos distais simétricos em doentes vasculares, considerando que a ausência de pulso pedioso é o padrão fisiológico normal em adultos."
    ],
    "correctIndex": 0,
    "explanation": "A aplicação de enfermagem para associação de vasos em série na árvore arterial principal baseia-se no princípio: O enfermeiro vigia doentes com doença arterial periférica obstrutiva dos membros inferiores, onde estenoses em série na artéria femoral reduzem drasticamente o pulso pedioso. Esta intervenção é essencial para a segurança hemodinâmica do doente.",
    "distractorAnalysis": [
      "Está incorreta: o frio induz vasoconstrição reflexa, reduzindo ainda mais o raio luminal e agravando perigosamente a isquemia tecidual do membro com obstrução arterial prévia.",
      "Está incorreta: elevar o membro isquémico reduz a pressão de perfusão hidrostática da coluna gravitacional, piorando a dor e a hipóxia distal (o membro deve ficar pendente ou neutro).",
      "Está incorreta: a palpação de pulsos periféricos bilaterais (femoral, poplíteo, tibial posterior e pedioso) é um exame essencial de enfermagem para avaliar a integridade arterial."
    ],
    "nursingApplication": "O enfermeiro vigia doentes com doença arterial periférica obstrutiva dos membros inferiores, onde estenoses em série na artéria femoral reduzem drasticamente o pulso pedioso."
  },
  {
    "id": 4161,
    "topicId": 4,
    "question": "Ao analisar as variáveis físicas que regem 'associação de vasos em série na árvore arterial principal', qual das seguintes afirmações expressa com rigor a relação hidrodinâmica entre pressão, velocidade e geometria vascular?",
    "options": [
      "Uma estenose localizada num vaso condutor em série duplica a pressão hidrostática distal por efeito de acumulação estática de energia mecânica elástica transmural.",
      "Qualquer obstrução ou estenose num segmento vascular disposto em série eleva a resistência total da via condutora, diminuindo a pressão de perfusão e o débito entregue aos tecidos distais.",
      "A resistência de condutos em série varia na razão inversa do número de bifurcações colaterais, tornando o membro com estenose aterosclerótica imune a perdas de carga teciduais.",
      "A soma de resistências em série decorre da geração contínua de bolhas de ar microscópicas que aumentam a pressão motora por expansão termodinâmica no lúmen do vaso."
    ],
    "correctIndex": 1,
    "explanation": "A análise hidrodinâmica correta confirma que Qualquer obstrução ou estenose num segmento em série aumenta diretamente a resistência total de todo o órgão irrigado por aquela artéria. O domínio destas leis permite ao enfermeiro interpretar os fenómenos vasculares com rigor científico.",
    "distractorAnalysis": [
      "Está incorreta: a estenose atua como uma resistência hidráulica elevada em série, provocando uma acentuada queda de pressão a jusante da obstrução (ΔP = Q · R).",
      "Está incorreta: a circulação colateral ajuda a atenuar a isquemia oferecendo vias alternativas em paralelo, mas a resistência do vaso estenosado primário em série mantém-se elevada.",
      "Está incorreta: a dissipação de carga assenta no atrito viscoso e turbilhonamento local de Poiseuille e Bernoulli e não na geração de bolhas gasosas no lúmen vascular arterial."
    ],
    "nursingApplication": "O enfermeiro vigia doentes com doença arterial periférica obstrutiva dos membros inferiores, onde estenoses em série na artéria femoral reduzem drasticamente o pulso pedioso."
  },
  {
    "id": 4162,
    "topicId": 4,
    "question": "Na hidrodinâmica circulatória aplicada à enfermagem, em relação a 'vasoconstrição vs vasodilatação arteriolar', qual é a fundamentação biofísica correta?",
    "options": [
      "A vasodilatação arteriolar duplica a resistência vascular sistémica ao escoamento, forçando o coração a trabalhar com pressões ventriculares esquerdas substancialmente mais elevadas.",
      "A camada muscular arteriolar não tem qualquer capacidade contrátil ativa, sofrendo deformação puramente passiva em resposta às pulsações mecânicas da veia safena magna homolateral.",
      "A espessa camada muscular lisa das arteríolas ajusta o raio vascular; a vasoconstrição reduz o raio, elevando a Resistência Vascular Periférica Total e a Pressão Arterial Média.",
      "A vasoconstrição arteriolar diminui a pressão arterial sistémica em virtude do aprisionamento de hemácias nos órgãos esplâncnicos por ativação parassimpática muscarínica."
    ],
    "correctIndex": 2,
    "explanation": "Em biofísica circulatória, vasoconstrição vs vasodilatação arteriolar explica-se pelo facto de que as arteríolas contêm uma espessa camada de músculo liso circular inervado pelo sistema nervoso simpático e sensível a mediadores locais. A contração arteriolar reduz o raio vascular, provocando um disparo massivo na Resistência Vascular Periférica Total (RVP) e aumento da pressão arterial média sistémica.",
    "distractorAnalysis": [
      "Está incorreta: a vasodilatação aumenta o raio (r), reduzindo fortemente a resistência hidráulica (R ∝ 1/r⁴) e baixando a pós-carga miocárdica e a pressão arterial sistémica.",
      "Está incorreta: o músculo liso arteriolar é o efetor hemodinâmico de excelência na regulação da resistência periférica, respondendo a estímulos neurais, hormonais e locais.",
      "Está incorreta: a vasoconstrição arteriolar generalizada eleva a resistência vascular periférica e a pressão arterial média sistémica (PAM ≈ DC · RVP)."
    ],
    "nursingApplication": "Na administração de aminas vasoativas como a noradrenalina em choque séptico, o enfermeiro monitoriza a subida da PA por vasoconstrição arteriolar sistémica."
  },
  {
    "id": 4163,
    "topicId": 4,
    "question": "Na avaliação clínica e administração de terapêutica por um enfermeiro, como se manifesta a aplicação prática de 'vasoconstrição vs vasodilatação arteriolar'?",
    "options": [
      "O enfermeiro perfunde noradrenalina em bólus não diluído para induzir vasodilatação sistémica maciça e reduzir a pressão arterial de doentes em choque vasoplégico severo.",
      "O enfermeiro suspende a monitorização invasiva da pressão arterial durante a infusão de vasopressores, assumindo que a noradrenalina mantém a PA fixa em 120/80 mmHg por biofeedback.",
      "O enfermeiro aplica bolsas de gelo nas extremidades dos dedos de doentes sob altas doses de noradrenalina para estimular a perfusão microvascular capilar distal.",
      "Na administração de aminas vasoativas (noradrenalina) no choque distributivo, o enfermeiro vigia a subida da PA por vasoconstrição arteriolar e o risco de isquemia periférica distal."
    ],
    "correctIndex": 3,
    "explanation": "A aplicação de enfermagem para vasoconstrição vs vasodilatação arteriolar baseia-se no princípio: Na administração de aminas vasoativas como a noradrenalina em choque séptico, o enfermeiro monitoriza a subida da PA por vasoconstrição arteriolar sistémica. Esta intervenção é essencial para a segurança hemodinâmica do doente.",
    "distractorAnalysis": [
      "Está incorreta: a noradrenalina é um agonista alfa-1 potente que causa intensa vasoconstrição arteriolar, elevando a PA e podendo induzir isquemia nas extremidades se mal titulada.",
      "Está incorreta: fármacos vasopressores em perfusão contínua requerem monitorização rigorosa (frequentemente com linha arterial invasiva) para ajuste milimétrico do débito.",
      "Está incorreta: aplicar frio nas extremidades de doentes sob vasopressores acentua a vasoconstrição local e precipita necrose e gangrena isquémica dos dedos."
    ],
    "nursingApplication": "Na administração de aminas vasoativas como a noradrenalina em choque séptico, o enfermeiro monitoriza a subida da PA por vasoconstrição arteriolar sistémica."
  },
  {
    "id": 4164,
    "topicId": 4,
    "question": "Ao analisar as variáveis físicas que regem 'vasoconstrição vs vasodilatação arteriolar', qual das seguintes afirmações expressa com rigor a relação hidrodinâmica entre pressão, velocidade e geometria vascular?",
    "options": [
      "Pela relação de Poiseuille, a contração arteriolar reduz o raio (r), provocando um aumento exponencial na Resistência Vascular Periférica (R ∝ 1/r⁴) e elevação correspondente da PAM.",
      "A contração arteriolar diminui a resistência ao escoamento em proporção direta à aceleração da gravidade, induzindo hipotensão arterial severa mediada por barorrecetores.",
      "A vasodilatação arteriolar eleva a resistência vascular à quarta potência, permitindo que pressões muito baixas no ventrículo esquerdo ejetem volumes sistólicos superiores a 200 mL.",
      "O raio arteriolar exerce uma influência de primeira ordem na velocidade angular do sangue, sendo neutro em relação à dissipação de pressão hidrostática sistémica basal."
    ],
    "correctIndex": 0,
    "explanation": "A análise hidrodinâmica correta confirma que A contração arteriolar reduz o raio vascular, provocando um disparo massivo na Resistência Vascular Periférica Total (RVP) e aumento da pressão arterial média sistémica. O domínio destas leis permite ao enfermeiro interpretar os fenómenos vasculares com rigor científico.",
    "distractorAnalysis": [
      "Está incorreta: a contração muscular reduz o raio e aumenta drasticamente a resistência hidráulica (R ∝ 1/r⁴), elevando a pressão a montante da árvore circulatória sistémica.",
      "Está incorreta: a vasodilatação reduz a resistência ao escoamento, facilitando o débito cardíaco com menores gradientes pressóricos ventriculares esquerdos.",
      "Está incorreta: o raio vascular arteriolar é a variável biomecânica com maior impacto na resistência e na dissipação de pressão hidrostática ao longo de toda a grande circulação."
    ],
    "nursingApplication": "Na administração de aminas vasoativas como a noradrenalina em choque séptico, o enfermeiro monitoriza a subida da PA por vasoconstrição arteriolar sistémica."
  },
  {
    "id": 4165,
    "topicId": 4,
    "question": "Na hidrodinâmica circulatória aplicada à enfermagem, em relação a 'choque distributivo e anafilático com queda da RVP', qual é a fundamentação biofísica correta?",
    "options": [
      "Na anafilaxia grave, a libertação de histamina provoca vasoconstrição arterial periférica generalizada extrema, elevando a pressão arterial sistólica para mais de 250 mmHg.",
      "Na anafilaxia, a histamina e mediadores mastocitários provocam vasodilatação arteriolar massiva e perda do tónus vascular; a RVP cai abruptamente, gerando choque distributivo e hipotensão.",
      "O choque anafilático decorre da conversão súbita do sangue venoso num gel de alta viscosidade por precipitação imunológica das imunoglobulinas E circulantes.",
      "A anafilaxia caracteriza-se pelo aumento agudo da complacência aórtica que quadruplica o volume sistólico ejetado pelo coração esquerdo em repouso basal."
    ],
    "correctIndex": 1,
    "explanation": "Em biofísica circulatória, choque distributivo e anafilático com queda da RVP explica-se pelo facto de que na anafilaxia grave, a libertação massiva de histamina e mediadores inflamatórios provoca vasodilatação arteriolar generalizada e perda súbita do tónus vascular. A RVP cai para valores extremamente baixos, provocando hipotensão severa e colapso circulatório distributivo com perfusão tecidual inadequada.",
    "distractorAnalysis": [
      "Está incorreta: o choque anafilático é distributivo com vasoplegia profunda e fuga capilar intersticial de líquido, resultando em hipotensão severa e colapso circulatório.",
      "Está incorreta: o sangue mantém o seu estado fluido; o colapso decorre da perda de tónus vasomotor arteriolar e venoso associada a edema por permeabilidade capilar aumentada.",
      "Está incorreta: a anafilaxia compromete criticamente o enchimento ventricular e o débito cardíaco por venodilatação e hipovolemia relativa, com queda do volume sistólico."
    ],
    "nursingApplication": "O enfermeiro atua com emergência administrando adrenalina intramuscular precoce (vasto lateral da coxa), revertendo a vasodilatação através da estimulação alfa-1 adrenérgica."
  },
  {
    "id": 4166,
    "topicId": 4,
    "question": "Na avaliação clínica e administração de terapêutica por um enfermeiro, como se manifesta a aplicação prática de 'choque distributivo e anafilático com queda da RVP'?",
    "options": [
      "O enfermeiro aguarda várias horas antes de atuar na anafilaxia grave, agendando testes cutâneos de alergia antes de qualquer administração de medicação de suporte de vida.",
      "O enfermeiro administra vasodilatadores arteriolares de ação rápida (como nitroprussiato de sódio) no doente em choque anafilático para reduzir ainda mais a resistência vascular.",
      "O enfermeiro atua com emergência administrando adrenalina intramuscular precoce no vasto lateral da coxa, revertendo a vasodilatação sistémica através de estimulação alfa-1 adrenérgica.",
      "O enfermeiro coloca o doente em posição ortostática vertical de pé imediata para drenar o excesso de líquido acumulado no compartimento cefálico em anafilaxia grave."
    ],
    "correctIndex": 2,
    "explanation": "A aplicação de enfermagem para choque distributivo e anafilático com queda da RVP baseia-se no princípio: O enfermeiro atua com emergência administrando adrenalina intramuscular precoce (vasto lateral da coxa), revertendo a vasodilatação através da estimulação alfa-1 adrenérgica. Esta intervenção é essencial para a segurança hemodinâmica do doente.",
    "distractorAnalysis": [
      "Está incorreta: a adrenalina intramuscular na face anterolateral da coxa é o tratamento de primeira linha imediato e salva-vidas da anafilaxia, não devendo sofrer qualquer atraso.",
      "Está incorreta: administrar vasodilatadores num doente com choque vasoplégico distributivo e hipotensão profunda provocaria colapso cardiovascular irreversível e morte.",
      "Está incorreta: levantar o doente em anafilaxia grave pode provocar síncope ou paragem cardiorrespiratória por esvaziamento imediato das cavidades cardíacas direitas."
    ],
    "nursingApplication": "O enfermeiro atua com emergência administrando adrenalina intramuscular precoce (vasto lateral da coxa), revertendo a vasodilatação através da estimulação alfa-1 adrenérgica."
  },
  {
    "id": 4167,
    "topicId": 4,
    "question": "Ao analisar as variáveis físicas que regem 'choque distributivo e anafilático com queda da RVP', qual das seguintes afirmações expressa com rigor a relação hidrodinâmica entre pressão, velocidade e geometria vascular?",
    "options": [
      "A perda de tónus arteriolar na anafilaxia aumenta a pressão de perfusão cerebral, garantindo que o córtex cerebral receba duas vezes mais sangue durante o colapso circulatório.",
      "A RVP cai na anafilaxia porque a viscosidade dinâmica do sangue se reduz a zero devido à destruição imediata de todos os glóbulos vermelhos pelas enzimas dos mastócitos.",
      "A hipotensão no choque anafilático decorre da paragem estática da válvula mitral em posição fechada, impedindo o fluxo sanguíneo do átrio esquerdo para a raiz aórtica.",
      "A queda súbita e desregulada da Resistência Vascular Periférica Total (RVP) na vasodilatação generalizada desaba a pressão de perfusão aos órgãos nobres (cérebro e miocárdio)."
    ],
    "correctIndex": 3,
    "explanation": "A análise hidrodinâmica correta confirma que A RVP cai para valores extremamente baixos, provocando hipotensão severa e colapso circulatório distributivo com perfusão tecidual inadequada. O domínio destas leis permite ao enfermeiro interpretar os fenómenos vasculares com rigor científico.",
    "distractorAnalysis": [
      "Está incorreta: como a pressão arterial depende diretamente da RVP (PA ≈ DC · RVP), a perda de resistência arteriolar reduz criticamente a perfusão dos órgãos vitais.",
      "Está incorreta: a anafilaxia não causa hemólise aguda de todos os eritrócitos; o mecanismo hemodinâmico assenta na vasodilatação profunda e no extravasamento plasmático.",
      "Está incorreta: a falência circulatória é vasoplégica distributiva periférica e não uma anomalia mecânica primária de encerramento da válvula mitral."
    ],
    "nursingApplication": "O enfermeiro atua com emergência administrando adrenalina intramuscular precoce (vasto lateral da coxa), revertendo a vasodilatação através da estimulação alfa-1 adrenérgica."
  },
  {
    "id": 4168,
    "topicId": 4,
    "question": "Na hidrodinâmica circulatória aplicada à enfermagem, em relação a 'pós-carga ventricular esquerda e trabalho cardíaco', qual é a fundamentação biofísica correta?",
    "options": [
      "A pós-carga é a tensão que o ventrículo esquerdo tem de vencer na sístole para ejetar o sangue; se a RVP for cronicamente alta na hipertensão, o miocárdio sofre hipertrofia concêntrica.",
      "A pós-carga ventricular corresponde ao volume de sangue venoso presente na aurícula direita no início da diástole mecânica, dependendo unicamente da complacência das veias femorais.",
      "A elevação crónica da pós-carga miocárdica reduz o consumo de oxigénio pelo ventrículo esquerdo, tornando o coração hipertenso muito mais eficiente em repouso basal.",
      "A pós-carga ventricular é uma grandeza imaginária sem qualquer relação com a resistência arteriolar ou com a tensão desenvolvida pela parede muscular cardíaca durante a ejeção."
    ],
    "correctIndex": 0,
    "explanation": "Em biofísica circulatória, pós-carga ventricular esquerda e trabalho cardíaco explica-se pelo facto de que a pós-carga é a força ou tensão que o ventrículo esquerdo tem de vencer durante a sístole para conseguir ejetar o volume sistólico para a aorta, dependendo criticamente da RVP. Se a RVP estiver cronicamente elevada (como na hipertensão arterial não tratada), o trabalho mecânico do miocárdio aumenta, conduzindo a hipertrofia ventricular concêntrica compensatória.",
    "distractorAnalysis": [
      "Está incorreta: descreve o conceito de pré-carga ventricular (volume ou tensão no final da diástole); a pós-carga é a oposição mecânica à ejeção sistólica ventricular.",
      "Está incorreta: a pós-carga elevada aumenta a tensão parietal do ventrículo (Lei de Laplace) e multiplica a procura miocárdica de oxigénio, predispondo a isquemia e falência cardíaca.",
      "Está incorreta: a pós-carga é um parâmetro hemodinâmico real de enorme importância clínica, determinado primariamente pela resistência vascular periférica e complacência aórtica."
    ],
    "nursingApplication": "O enfermeiro educa o utente para o controlo estrito da medicação anti-hipertensora e dieta hipossódica para reduzir a pós-carga e prevenir a falência cardíaca diastólica."
  },
  {
    "id": 4169,
    "topicId": 4,
    "question": "Na avaliação clínica e administração de terapêutica por um enfermeiro, como se manifesta a aplicação prática de 'pós-carga ventricular esquerda e trabalho cardíaco'?",
    "options": [
      "O enfermeiro instrui o doente com hipertensão arterial a duplicar a ingestão diária de sal de mesa com o objetivo de reduzir a osmolaridade plasmática e dilatar a aorta abdominal.",
      "O enfermeiro educa o utente hipertenso para a adesão terapêutica anti-hipertensora e dieta com restrição de sódio, visando reduzir a pós-carga e prevenir a hipertrofia e insuficiência cardíaca.",
      "O enfermeiro prescreve a interrupção de todos os fármacos inibidores da ECA ou ARA-II logo que a pressão atinge valores normais, sob a premissa de que a hipertensão foi curada.",
      "O enfermeiro desvaloriza leituras mantidas de PA sistólica superiores a 180 mmHg em doentes assintomáticos, considerando a pós-carga elevada um processo fisiológico saudável."
    ],
    "correctIndex": 1,
    "explanation": "A aplicação de enfermagem para pós-carga ventricular esquerda e trabalho cardíaco baseia-se no princípio: O enfermeiro educa o utente para o controlo estrito da medicação anti-hipertensora e dieta hipossódica para reduzir a pós-carga e prevenir a falência cardíaca diastólica. Esta intervenção é essencial para a segurança hemodinâmica do doente.",
    "distractorAnalysis": [
      "Está incorreta: o excesso de sódio retém água livre e eleva a volemia e a contratilidade arteriolar, agravando a hipertensão arterial e sobrecarregando o ventrículo esquerdo.",
      "Está incorreta: a hipertensão arterial é uma condição crónica que requer adesão contínua ao plano medicamentoso e estilo de vida para prevenir complicações vasculares e renais.",
      "Está incorreta: hipertensão arterial mantida de grau 3 (PAS ≥ 180 mmHg) impõe sobrecarga extrema ao ventrículo e aos vasos cerebrais e renais, exigindo vigilância e intervenção médica."
    ],
    "nursingApplication": "O enfermeiro educa o utente para o controlo estrito da medicação anti-hipertensora e dieta hipossódica para reduzir a pós-carga e prevenir a falência cardíaca diastólica."
  },
  {
    "id": 4170,
    "topicId": 4,
    "question": "Ao analisar as variáveis físicas que regem 'pós-carga ventricular esquerda e trabalho cardíaco', qual das seguintes afirmações expressa com rigor a relação hidrodinâmica entre pressão, velocidade e geometria vascular?",
    "options": [
      "Uma RVP elevada diminui a pressão sistólica no interior da câmara ventricular esquerda, permitindo ao miocárdio descontrair com menos esforço e sem necessidade de hipertrofia.",
      "A hipertrofia concêntrica ventricular decorrente da hipertensão aumenta a complacência elástica cavitária, facilitando o enchimento diastólico do ventrículo esquerdo em esforço.",
      "Se a Resistência Vascular Periférica (RVP) permanecer cronicamente elevada, o trabalho mecânico e a tensão parietal miocárdica aumentam, induzindo hipertrofia concêntrica do ventrículo.",
      "O aumento da pós-carga dissipa integralmente a sua energia sob a forma de som audível nos pulmões, sem exercer qualquer esforço mecânico sobre os sarcómeros cardíacos."
    ],
    "correctIndex": 2,
    "explanation": "A análise hidrodinâmica correta confirma que Se a RVP estiver cronicamente elevada (como na hipertensão arterial não tratada), o trabalho mecânico do miocárdio aumenta, conduzindo a hipertrofia ventricular concêntrica compensatória. O domínio destas leis permite ao enfermeiro interpretar os fenómenos vasculares com rigor científico.",
    "distractorAnalysis": [
      "Está incorreta: a RVP elevada exige que o ventrículo esquerdo gere pressões cavitárias sistólicas muito mais altas para abrir a válvula aórtica e ejetar o sangue (trabalho acrescido).",
      "Está incorreta: a hipertrofia concêntrica da parede ventricular reduz a complacência elástica (rigidez parietal aumentada), originando disfunção diastólica e insuficiência cardíaca.",
      "Está incorreta: o aumento da pós-carga gera sobrecarga mecânica direta sobre o miocárdio ventricular, estimulando a síntese de novos sarcómeros em paralelo (hipertrofia)."
    ],
    "nursingApplication": "O enfermeiro educa o utente para o controlo estrito da medicação anti-hipertensora e dieta hipossódica para reduzir a pós-carga e prevenir a falência cardíaca diastólica."
  },
  {
    "id": 4171,
    "topicId": 4,
    "question": "Na hidrodinâmica circulatória aplicada à enfermagem, em relação a 'fase de insuflação suprassistólica da braçadeira', qual é a fundamentação biofísica correta?",
    "options": [
      "Ao insuflar acima da pressão sistólica, o sangue acelera para velocidades supersónicas através da artéria comprimida, gerando um sopro contínuo de intensidade ensurdecedora.",
      "A insuflação da braçadeira com ar comprido dilata ativamente o lúmen da artéria braquial por transmissão transcutânea de calor, acelerando a circulação na mão do doente.",
      "O colapso da artéria sob a braçadeira induz a coagulação intravascular irreversível de todo o sangue do antebraço em escassos três segundos de compressão pneumática.",
      "Ao insuflar a braçadeira acima da pressão sistólica (P_cuff > PAS), a artéria braquial é totalmente colapsada; o fluxo distal cessa por completo, gerando silêncio auscultatório."
    ],
    "correctIndex": 3,
    "explanation": "Em biofísica circulatória, fase de insuflação suprassistólica da braçadeira explica-se pelo facto de que ao insuflar a braçadeira do esfigmomanómetro acima da pressão arterial sistólica do doente (P_cuff > PAS), a artéria braquial é completamente colapsada e ocluída. O fluxo sanguíneo distal cessa completamente e nenhum som é audível ao estetoscópio colocado na fossa cubital (silêncio total).",
    "distractorAnalysis": [
      "Está incorreta: quando a pressão do manguito supera a pressão sistólica intracavitar máxima, o lúmen fecha-se hermeticamente e o fluxo de sangue é interrompido (silêncio total).",
      "Está incorreta: o esfigmomanómetro atua por compressão mecânica extrínseca pura e não por transmissão de calor, comprimindo e ocluindo temporariamente a artéria.",
      "Está incorreta: uma insuflação breve de alguns segundos para medição de PA não provoca trombose irreversível no membro de um indivíduo com coagulação e circulação normais."
    ],
    "nursingApplication": "O enfermeiro insufla a braçadeira cerca de 20 a 30 mmHg acima do desaparecimento do pulso radial palpado, evitando insuflações excessivas que causam dor e espasmo vascular."
  },
  {
    "id": 4172,
    "topicId": 4,
    "question": "Na avaliação clínica e administração de terapêutica por um enfermeiro, como se manifesta a aplicação prática de 'fase de insuflação suprassistólica da braçadeira'?",
    "options": [
      "O enfermeiro insufla a braçadeira 20 a 30 mmHg acima do desaparecimento do pulso radial previamente palpado, evitando sobrepressões desnecessárias que causem dor e espasmo vascular.",
      "O enfermeiro insufla a braçadeira invariavelmente até 300 mmHg em todos os doentes para garantir que qualquer artéria, por mais rígida que seja, fique completamente esmagada.",
      "O enfermeiro insufla a braçadeira apenas até 50 mmHg, auscultando os ruídos de Korotkoff durante a fase de enchimento rápido sem necessidade de desinsuflação controlada.",
      "O enfermeiro palpa o pulso carotídeo para determinar o nível de insuflação da braçadeira colocada no tornozelo de doentes em decúbito dorsal na unidade de internamento."
    ],
    "correctIndex": 0,
    "explanation": "A aplicação de enfermagem para fase de insuflação suprassistólica da braçadeira baseia-se no princípio: O enfermeiro insufla a braçadeira cerca de 20 a 30 mmHg acima do desaparecimento do pulso radial palpado, evitando insuflações excessivas que causam dor e espasmo vascular. Esta intervenção é essencial para a segurança hemodinâmica do doente.",
    "distractorAnalysis": [
      "Está incorreta: insuflar rotineiramente até 300 mmHg é doloroso, desnecessário e prejudicial, provocando hematomas, espasmo arterial e falsas elevações da pressão arterial.",
      "Está incorreta: insuflar até 50 mmHg é insuficiente na grande maioria dos doentes com PAS normal (~120 mmHg), impedindo a oclusão arterial e a identificação do primeiro ruído.",
      "Está incorreta: a estimativa palpatória da pressão sistólica preliminar é realizada no pulso radial da mesma extremidade em que a braçadeira é posicionada no membro superior."
    ],
    "nursingApplication": "O enfermeiro insufla a braçadeira cerca de 20 a 30 mmHg acima do desaparecimento do pulso radial palpado, evitando insuflações excessivas que causam dor e espasmo vascular."
  },
  {
    "id": 4173,
    "topicId": 4,
    "question": "Ao analisar as variáveis físicas que regem 'fase de insuflação suprassistólica da braçadeira', qual das seguintes afirmações expressa com rigor a relação hidrodinâmica entre pressão, velocidade e geometria vascular?",
    "options": [
      "Durante a fase suprassistólica, o sangue continua a fluir normalmente em regime laminar ininterrupto, dado que os ossos do braço protegem a artéria de qualquer compressão externa.",
      "Durante a fase suprassistólica da medição, o fluxo sanguíneo sob a braçadeira cessa totalmente e nenhum som é audível ao estetoscópio colocado na fossa cubital (silêncio absoluto).",
      "A ausência de som na fase suprassistólica deve-se à perda temporária da audição do examinador provocada pelo ruído do ar a entrar na bolsa de borracha da braçadeira.",
      "Durante a fase suprassistólica, a artéria braquial emite frequências ultrassónicas de 40 kHz que danificam o diafragma do estetoscópio de auscultação se for de plástico comum."
    ],
    "correctIndex": 1,
    "explanation": "A análise hidrodinâmica correta confirma que O fluxo sanguíneo distal cessa completamente e nenhum som é audível ao estetoscópio colocado na fossa cubital (silêncio total). O domínio destas leis permite ao enfermeiro interpretar os fenómenos vasculares com rigor científico.",
    "distractorAnalysis": [
      "Está incorreta: a pressão pneumática na bolsa transmite-se através dos tecidos moles até à artéria braquial, colapsando-a completamente contra as estruturas profundas.",
      "Está incorreta: o silêncio auscultatório é um fenómeno puramente hidrodinâmico decorrente da ausência de fluxo arterial distal sob oclusão completa do vaso.",
      "Está incorreta: a artéria ocluída não emite radiações ultrassónicas nem danifica equipamentos de auscultação médica comuns utilizados na prática clínica."
    ],
    "nursingApplication": "O enfermeiro insufla a braçadeira cerca de 20 a 30 mmHg acima do desaparecimento do pulso radial palpado, evitando insuflações excessivas que causam dor e espasmo vascular."
  },
  {
    "id": 4174,
    "topicId": 4,
    "question": "Na hidrodinâmica circulatória aplicada à enfermagem, em relação a 'fase I de Korotkoff e determinação da Pressão Arterial Sistólica (PAS)', qual é a fundamentação biofísica correta?",
    "options": [
      "O primeiro som de Korotkoff resulta da colisão violenta entre os ossos rádio e ulna induzida pela onda de pulso que atravessa o compartimento antebraquial despressurizado.",
      "O primeiro som surge quando a artéria braquial cicatriza espontaneamente da compressão mecânica através da proliferação acelerada de fibras colagénicas na adventícia.",
      "Quando a pressão da braçadeira cai para a PAS, o pico sistólico ventricular força a abertura transitória da artéria, ejetando jatos turbulentos que geram o 1.º som de Korotkoff.",
      "O som de Fase I é produzido pelo encerramento mecânico das válvulas venosas profundas do membro superior que impedem o refluxo retrógrado para os capilares ungueais."
    ],
    "correctIndex": 2,
    "explanation": "Em biofísica circulatória, fase I de Korotkoff e determinação da Pressão Arterial Sistólica (PAS) explica-se pelo facto de que à medida que a pressão da braçadeira desce ligeiramente abaixo da PAS (P_cuff = PAS), o pico de pressão sistólica ventricular consegue forçar a abertura passageira da artéria comprimida. O sangue é ejetado através da fenda estreita a altíssima velocidade sob a forma de jatos turbulentos com Re > 2000, batendo contra a parede vascular distal e gerando o primeiro som nítido e repetitivo (som de Korotkoff Fase I).",
    "distractorAnalysis": [
      "Está incorreta: o som decorre do jato turbulento intravascular de alta velocidade e das vibrações elásticas parietais arteriais, e não de impactos entre ossos do esqueleto.",
      "Está incorreta: a compressão transitória da braçadeira não provoca lesão que exija cicatrização tecidual rápida; a abertura é puramente elástica e hidrodinâmica.",
      "Está incorreta: os ruídos de Korotkoff têm origem na artéria braquial sob regime de fluxo turbulento e não em válvulas venosas do sistema profundo dos membros superiores."
    ],
    "nursingApplication": "O enfermeiro regista a leitura manométrica no exato momento em que ausculta o primeiro som audível da Fase I como a Pressão Arterial Sistólica (PAS)."
  },
  {
    "id": 4175,
    "topicId": 4,
    "question": "Na avaliação clínica e administração de terapêutica por um enfermeiro, como se manifesta a aplicação prática de 'fase I de Korotkoff e determinação da Pressão Arterial Sistólica (PAS)'?",
    "options": [
      "O enfermeiro regista a pressão arterial sistólica apenas após a auscultação de cinquenta batimentos contínuos, calculando a média aritmética entre o primeiro e o último som.",
      "O enfermeiro assume que o primeiro som de Korotkoff representa a pressão diastólica mínima, invertendo a ordem dos valores registados no processo clínico do doente.",
      "O enfermeiro desconsidera a auscultação do primeiro som de Korotkoff, baseando o registo da pressão arterial sistólica exclusivamente na intensidade do rubor cutâneo facial.",
      "O enfermeiro regista a leitura manométrica no exato momento em que ausculta o primeiro som nítido, claro e repetitivo da Fase I como a Pressão Arterial Sistólica (PAS)."
    ],
    "correctIndex": 3,
    "explanation": "A aplicação de enfermagem para fase I de Korotkoff e determinação da Pressão Arterial Sistólica (PAS) baseia-se no princípio: O enfermeiro regista a leitura manométrica no exato momento em que ausculta o primeiro som audível da Fase I como a Pressão Arterial Sistólica (PAS). Esta intervenção é essencial para a segurança hemodinâmica do doente.",
    "distractorAnalysis": [
      "Está incorreta: a PAS corresponde estritamente ao aparecimento do primeiro som nítido auscultado (Fase I de Korotkoff) e não a uma média aritmética tardia.",
      "Está incorreta: o primeiro som marca a pressão sistólica máxima (PAS); o desaparecimento definitivo dos sons (Fase V) marca a pressão diastólica mínima (PAD).",
      "Está incorreta: a auscultação rigorosa dos sons de Korotkoff associada à leitura manométrica calibrada é o padrão estabelecido pelas diretrizes clínicas internacionais de hipertensão."
    ],
    "nursingApplication": "O enfermeiro regista a leitura manométrica no exato momento em que ausculta o primeiro som audível da Fase I como a Pressão Arterial Sistólica (PAS)."
  },
  {
    "id": 4176,
    "topicId": 4,
    "question": "Ao analisar as variáveis físicas que regem 'fase I de Korotkoff e determinação da Pressão Arterial Sistólica (PAS)', qual das seguintes afirmações expressa com rigor a relação hidrodinâmica entre pressão, velocidade e geometria vascular?",
    "options": [
      "O sangue é ejetado pela fenda arterial estreita a altíssima velocidade em jatos turbulentos com Re > 2000, colidindo na parede distal e gerando o primeiro som nítido da Fase I.",
      "O sangue escoa através da artéria braquial em regime puramente laminar e silencioso, produzindo o primeiro som devido à reflexão do feixe de luz ambiente na fossa cubital.",
      "A Fase I de Korotkoff decorre da despressurização súbita da veia basílica do braço, gerando ondas de choque que se transmitem retrogradamente até à aurícula direita.",
      "O primeiro ruído sonoro é produzido pelo atrito térmico gerado pela expansão isotérmica do ar contido no tubo de borracha do estetoscópio clínico do examinador."
    ],
    "correctIndex": 0,
    "explanation": "A análise hidrodinâmica correta confirma que O sangue é ejetado através da fenda estreita a altíssima velocidade sob a forma de jatos turbulentos com Re > 2000, batendo contra a parede vascular distal e gerando o primeiro som nítido e repetitivo (som de Korotkoff Fase I). O domínio destas leis permite ao enfermeiro interpretar os fenómenos vasculares com rigor científico.",
    "distractorAnalysis": [
      "Está incorreta: o escoamento laminar é inaudível; o ruído surge apenas quando a abertura sistólica parcial acelera o sangue e gera jatos turbulentos de Reynolds elevado.",
      "Está incorreta: o fenómeno ocorre na artéria braquial profunda comprimida pelo manguito e não por despressurização das veias superficiais do membro superior.",
      "Está incorreta: o som não é artefato térmico do tubo de borracha, resultando de vibrações mecânicas da parede arterial sujeita a fortes oscilações pressóricas e vórtices."
    ],
    "nursingApplication": "O enfermeiro regista a leitura manométrica no exato momento em que ausculta o primeiro som audível da Fase I como a Pressão Arterial Sistólica (PAS)."
  },
  {
    "id": 4177,
    "topicId": 4,
    "question": "Na hidrodinâmica circulatória aplicada à enfermagem, em relação a 'fases intermediárias II, III e IV de Korotkoff', qual é a fundamentação biofísica correta?",
    "options": [
      "Nas fases intermédias de Korotkoff a velocidade do sangue reduz-se temporariamente para zero em todos os vasos do antebraço, alternando com picos transitórios de velocidade.",
      "Na fase II os sons tornam-se suaves e murmurantes, na III mais nítidos e altos e na IV abafados; estas transições refletem a abertura progressiva e atenuação da turbulência.",
      "As fases intermédias resultam da contração peristáltica ativa do músculo bíceps braquial, que comprime ritmicamente a artéria para bombear o sangue para a mão do doente.",
      "Os sons de fase II, III e IV são artefactos provocados pela respiração do examinador, não guardando qualquer relação física com o calibre da artéria braquial comprimida."
    ],
    "correctIndex": 1,
    "explanation": "Em biofísica circulatória, fases intermediárias II, III e IV de Korotkoff explica-se pelo facto de que na fase II os sons tornam-se suaves e murmurantes por vórtices contínuos; na fase III tornam-se nítidos e mais altos com a expansão da abertura arterial; na fase IV tornam-se abafados e baços (muffling). Estas transições refletem a alteração geométrica progressiva da secção do vaso e a redução gradual da intensidade da turbulência à medida que a compressão externa diminui.",
    "distractorAnalysis": [
      "Está incorreta: a velocidade sanguínea oscila dentro de limites biológicos e físicos normais; o fluxo mantém-se contínuo na microcirculação periférica a jusante.",
      "Está incorreta: a pulsação arterial decorre da ejeção ventricular cardíaca transmitida pelas artérias elásticas e não de contrações peristálticas do músculo esquelético do braço.",
      "Está incorreta: as fases de Korotkoff traduzem a hidrodinâmica real da artéria braquial à medida que a secção se alarga com a desinsuflação progressiva do manguito."
    ],
    "nursingApplication": "Em crianças, grávidas ou indivíduos em estado hiperdinâmico, os sons podem ser ouvidos até ao zero: o enfermeiro documenta a Fase IV (abafamento) como referência diastólica nestes grupos."
  },
  {
    "id": 4178,
    "topicId": 4,
    "question": "Na avaliação clínica e administração de terapêutica por um enfermeiro, como se manifesta a aplicação prática de 'fases intermediárias II, III e IV de Korotkoff'?",
    "options": [
      "Em grávidas e crianças os sons de Korotkoff nunca são audíveis, exigindo sempre a canulação invasiva da artéria femoral para avaliação da pressão arterial de rotina.",
      "O enfermeiro desvaloriza a audição continuada de sons até zero mmHg, assumindo que qualquer som abaixo de 60 mmHg decorre de defeito irreparável do estetoscópio.",
      "Em grávidas, crianças ou estados hiperdinâmicos com débito elevado, os sons podem persistir até aos 0 mmHg; o enfermeiro documenta a Fase IV (abafamento) como PAD de referência.",
      "O enfermeiro insufla a braçadeira com água fria em doentes hiperdinâmicos para forçar o desaparecimento precoce dos ruídos de Korotkoff na fase de compressão braquial."
    ],
    "correctIndex": 2,
    "explanation": "A aplicação de enfermagem para fases intermediárias II, III e IV de Korotkoff baseia-se no princípio: Em crianças, grávidas ou indivíduos em estado hiperdinâmico, os sons podem ser ouvidos até ao zero: o enfermeiro documenta a Fase IV (abafamento) como referência diastólica nestes grupos. Esta intervenção é essencial para a segurança hemodinâmica do doente.",
    "distractorAnalysis": [
      "Está incorreta: métodos auscultatórios são amplamente utilizados em pediatria e obstetrícia, sendo a Fase IV (abafamento) a referência recomendada quando a Fase V atinge o zero.",
      "Está incorreta: a persistência dos sons até ao zero é comum em estados hiperdinâmicos (alta velocidade e vasodilatação periférica) e não defeito do instrumento de auscultação.",
      "Está incorreta: a braçadeira é insuflada com ar à pressão ambiente; insuflar com líquidos frios é inviável, doloroso e distorce completamente a mecânica da medição."
    ],
    "nursingApplication": "Em crianças, grávidas ou indivíduos em estado hiperdinâmico, os sons podem ser ouvidos até ao zero: o enfermeiro documenta a Fase IV (abafamento) como referência diastólica nestes grupos."
  },
  {
    "id": 4179,
    "topicId": 4,
    "question": "Ao analisar as variáveis físicas que regem 'fases intermediárias II, III e IV de Korotkoff', qual das seguintes afirmações expressa com rigor a relação hidrodinâmica entre pressão, velocidade e geometria vascular?",
    "options": [
      "As fases de Korotkoff dependem exclusivamente da temperatura da pele do antebraço, mantendo-se o regime de escoamento perfeitamente invariável ao longo de toda a medição.",
      "O abafamento da Fase IV resulta da calcificação instantânea das túnicas íntima e média da artéria braquial provocada pelo atrito da braçadeira pneumática de nylon.",
      "A passagem entre fases sonoras decorre da alternância periódica entre fluxo de sangue arterial oxigenado e refluxo de sangue venoso não oxigenado sob a braçadeira.",
      "As transições entre as fases II, III e IV refletem a alteração geométrica da secção transversal da artéria e a redução gradual da turbulência com a descompressão externa."
    ],
    "correctIndex": 3,
    "explanation": "A análise hidrodinâmica correta confirma que Estas transições refletem a alteração geométrica progressiva da secção do vaso e a redução gradual da intensidade da turbulência à medida que a compressão externa diminui. O domínio destas leis permite ao enfermeiro interpretar os fenómenos vasculares com rigor científico.",
    "distractorAnalysis": [
      "Está incorreta: a hidrodinâmica sob o manguito muda continuadamente de estenose crítica a abertura total, variando a geometria e a intensidade dos vórtices de Reynolds.",
      "Está incorreta: a compressão mecânica temporária da braçadeira não provoca calcificação parietal; as transições sonoras são puramente hidrodinâmicas e elásticas.",
      "Está incorreta: a circulação sob a braçadeira é puramente arterial unidirecional (anterógrada para a mão), não existindo inversão venosa periódica através da artéria braquial."
    ],
    "nursingApplication": "Em crianças, grávidas ou indivíduos em estado hiperdinâmico, os sons podem ser ouvidos até ao zero: o enfermeiro documenta a Fase IV (abafamento) como referência diastólica nestes grupos."
  },
  {
    "id": 4180,
    "topicId": 4,
    "question": "Na hidrodinâmica circulatória aplicada à enfermagem, em relação a 'fase V de Korotkoff e determinação da Pressão Arterial Diastólica (PAD)', qual é a fundamentação biofísica correta?",
    "options": [
      "Quando a pressão do manguito desce abaixo da PAD (P_cuff < PAD), a artéria permanece aberta em todo o ciclo: o regime laminar silencioso é restaurado (silêncio da Fase V).",
      "A Fase V ocorre quando a pressão do manguito supera a pressão sistólica intracardíaca, cessando a circulação sanguínea no membro superior por colapso mecânico permanente.",
      "O silêncio da Fase V surge porque as hemácias perdem a sua carga eletrostática de membrana, cessando a transmissão de vibrações acústicas às artérias distais do utente.",
      "Na Fase V, o sangue atinge velocidade infinita no leito vascular periférico, ultrapassando o limiar de audibilidade de frequências audíveis do ouvido humano."
    ],
    "correctIndex": 0,
    "explanation": "Em biofísica circulatória, fase V de Korotkoff e determinação da Pressão Arterial Diastólica (PAD) explica-se pelo facto de que quando a pressão na braçadeira cai abaixo da pressão diastólica intracelular da artéria (P_cuff < PAD), a artéria permanece totalmente desimpedida e aberta durante todo o ciclo cardíaco. O regime de escoamento laminar suave é inteiramente restaurado (Re < 2000), cessando toda a vibração acústica e ocorrendo o desaparecimento total de qualquer som (silêncio da Fase V).",
    "distractorAnalysis": [
      "Está incorreta: o silêncio da Fase V ocorre no final da desinsuflação (pressão mínima), quando o vaso deixa de ser comprimido mesmo na diástole e o fluxo volta a ser laminar.",
      "Está incorreta: os eritrócitos permanecem íntegros no escoamento laminar normal; a ausência de som decorre da ausência de turbulência parietal audível.",
      "Está incorreta: a velocidade sanguínea estabiliza em níveis fisiológicos normais de regime laminar (~20-40 cm/s na braquial), não existindo velocidades infinitas."
    ],
    "nursingApplication": "O enfermeiro regista a pressão no manómetro no momento do desaparecimento completo dos ruídos (Fase V) como a Pressão Arterial Diastólica (PAD) em adultos."
  },
  {
    "id": 4181,
    "topicId": 4,
    "question": "Na avaliação clínica e administração de terapêutica por um enfermeiro, como se manifesta a aplicação prática de 'fase V de Korotkoff e determinação da Pressão Arterial Diastólica (PAD)'?",
    "options": [
      "O enfermeiro regista a PAD no momento exato em que ausculta o som mais estridente da Fase III, desconsiderando qualquer leitura posterior na fase de desinsuflação.",
      "O enfermeiro regista a pressão no manómetro no momento do desaparecimento completo dos ruídos de Korotkoff (Fase V) como a Pressão Arterial Diastólica (PAD) em adultos.",
      "O enfermeiro esvazia a braçadeira bruscamente à velocidade de 30 mmHg por segundo para evitar o desconforto do doente, estimando a PAD por aproximação visual empírica.",
      "O enfermeiro adiciona sistematicamente 20 mmHg ao valor lido na Fase V para compensar a absorção acústica dos tecidos adiposos do braço em todos os doentes adultos."
    ],
    "correctIndex": 1,
    "explanation": "A aplicação de enfermagem para fase V de Korotkoff e determinação da Pressão Arterial Diastólica (PAD) baseia-se no princípio: O enfermeiro regista a pressão no manómetro no momento do desaparecimento completo dos ruídos (Fase V) como a Pressão Arterial Diastólica (PAD) em adultos. Esta intervenção é essencial para a segurança hemodinâmica do doente.",
    "distractorAnalysis": [
      "Está incorreta: a Fase III é a fase de sons nítidos e altos; a pressão diastólica em adultos é marcada universalmente pelo desaparecimento completo dos sons (Fase V).",
      "Está incorreta: a desinsuflação deve ser controlada a uma taxa lenta de 2 a 3 mmHg por segundo para garantir precisão e evitar subestimação da PAS ou sobrestimação da PAD.",
      "Está incorreta: a calibração manométrica padrão não requer acréscimos arbitrários de 20 mmHg, devendo registar-se o valor fidedigno no momento do silêncio da Fase V."
    ],
    "nursingApplication": "O enfermeiro regista a pressão no manómetro no momento do desaparecimento completo dos ruídos (Fase V) como a Pressão Arterial Diastólica (PAD) em adultos."
  },
  {
    "id": 4182,
    "topicId": 4,
    "question": "Ao analisar as variáveis físicas que regem 'fase V de Korotkoff e determinação da Pressão Arterial Diastólica (PAD)', qual das seguintes afirmações expressa com rigor a relação hidrodinâmica entre pressão, velocidade e geometria vascular?",
    "options": [
      "O regime turbulento torna-se permanente e supersónico na Fase V, abafando o som por interferência destrutiva entre as ondas emitidas pelas artérias radial e ulnar.",
      "A pressão da braçadeira na Fase V iguala a pressão venosa central, permitindo que o sangue venoso circule na artéria braquial em sentido retrógrado em direção ao tórax.",
      "O restabelecimento do escoamento laminar contínuo e suave (Re < 2000) em todo o ciclo cardíaco elimina vibrações parietais e ruídos acústicos, originando o silêncio da Fase V.",
      "O desaparecimento do som decorre do colapso diastólico forçado da artéria braquial, que impede a passagem de qualquer volume de sangue durante o repouso ventricular."
    ],
    "correctIndex": 2,
    "explanation": "A análise hidrodinâmica correta confirma que O regime de escoamento laminar suave é inteiramente restaurado (Re < 2000), cessando toda a vibração acústica e ocorrendo o desaparecimento total de qualquer som (silêncio da Fase V). O domínio destas leis permite ao enfermeiro interpretar os fenómenos vasculares com rigor científico.",
    "distractorAnalysis": [
      "Está incorreta: o escoamento na artéria aberta desobstruída é puramente laminar e estável (baixo número de Reynolds), cessando a emissão de ondas sonoras audíveis.",
      "Está incorreta: a artéria arterial profunda conduz sangue puramente arterial anterógrado sob pressões substancialmente maiores do que a pressão venosa central da aurícula.",
      "Está incorreta: na Fase V a pressão da braçadeira é inferior à pressão diastólica, mantendo a artéria totalmente patente e desimpedida durante todo o ciclo cardíaco."
    ],
    "nursingApplication": "O enfermeiro regista a pressão no manómetro no momento do desaparecimento completo dos ruídos (Fase V) como a Pressão Arterial Diastólica (PAD) em adultos."
  },
  {
    "id": 4183,
    "topicId": 4,
    "question": "Na hidrodinâmica circulatória aplicada à enfermagem, em relação a 'gap auscultatório (hiato auscultatório de Korotkoff)', qual é a fundamentação biofísica correta?",
    "options": [
      "O hiato auscultatório consiste na interrupção mecânica da circulação cerebral provocada pelo enchimento da câmara de ar do manguito pneumático colocado no braço do doente.",
      "O hiato auscultatório é uma arritmia ventricular letal que ocorre invariavelmente sempre que a braçadeira é insuflada acima de cem milímetros de mercúrio em repouso.",
      "O fenómeno descreve o intervalo temporal de vinte minutos que o enfermeiro deve aguardar entre a medição da pressão no braço direito e no braço esquerdo do utente.",
      "O hiato auscultatório consiste no desaparecimento transitório dos sons entre as fases I e II em alguns idosos hipertensos com rigidez arterial, com reaparecimento antes da PAD."
    ],
    "correctIndex": 3,
    "explanation": "Em biofísica circulatória, gap auscultatório (hiato auscultatório de Korotkoff) explica-se pelo facto de que desaparecimento transitório e anómalo dos sons de Korotkoff entre as fases I e II com reaparecimento subsequente antes do valor diastólico final em alguns idosos hipertensos. Se o enfermeiro insuflar a braçadeira insuficientemente sem palpação prévia do pulso radial, pode confundir o reaparecimento do som com a verdadeira PAS, subestimando gravemente a pressão sistólica.",
    "distractorAnalysis": [
      "Está incorreta: o hiato auscultatório de Korotkoff é um fenómeno hemodinâmico local no braço em artérias rígidas ateroscleróticas e não uma isquemia cerebral central.",
      "Está incorreta: o hiato não é uma arritmia eletrocardiográfica cardíaca, consistindo numa zona temporária de silêncio acústico auscultatório na desinsuflação do manguito.",
      "Está incorreta: o hiato auscultatório ocorre durante o processo contínuo de esvaziamento da braçadeira e não tem qualquer relação com intervalos de descanso entre membros."
    ],
    "nursingApplication": "O enfermeiro executa sempre o método palpatório prévio antes do método auscultatório para identificar a verdadeira PAS e não ser enganado pelo hiato auscultatório."
  },
  {
    "id": 4184,
    "topicId": 4,
    "question": "Na avaliação clínica e administração de terapêutica por um enfermeiro, como se manifesta a aplicação prática de 'gap auscultatório (hiato auscultatório de Korotkoff)'?",
    "options": [
      "O enfermeiro utiliza o método palpatório prévio do pulso radial antes da auscultação para identificar a verdadeira PAS e insuflar a braçadeira acima do hiato auscultatório.",
      "O enfermeiro dispensa o método palpatório prévio por considerá-lo obsoleto, insuflar a braçadeira de forma aleatória e registar o primeiro som que ouvir na auscultação.",
      "O enfermeiro diagnostica hipertensão maligna de urgência sempre que deteta um hiato auscultatório, encaminhando o doente para hemodiálise de urgência imediata.",
      "O enfermeiro posiciona o estetoscópio sob a axila em vez da fossa cubital sempre que suspeita da presença de um hiato auscultatório num doente idoso acamado."
    ],
    "correctIndex": 0,
    "explanation": "A aplicação de enfermagem para gap auscultatório (hiato auscultatório de Korotkoff) baseia-se no princípio: O enfermeiro executa sempre o método palpatório prévio antes do método auscultatório para identificar a verdadeira PAS e não ser enganado pelo hiato auscultatório. Esta intervenção é essencial para a segurança hemodinâmica do doente.",
    "distractorAnalysis": [
      "Está incorreta: estimar a pressão sistólica por palpação do pulso radial antes da auscultação é essencial para evitar insuflação insuficiente e erro por hiato auscultatório.",
      "Está incorreta: o hiato auscultatório decorre de alterações elásticas vasculares crónicas e não traduz necessariamente uma emergência hipertensiva nem indicação para diálise.",
      "Está incorreta: o diafragma do estetoscópio deve ser colocado sobre o trajeto anatómico da artéria braquial na fossa cubital e não na fossa axilar superior."
    ],
    "nursingApplication": "O enfermeiro executa sempre o método palpatório prévio antes do método auscultatório para identificar a verdadeira PAS e não ser enganado pelo hiato auscultatório."
  },
  {
    "id": 4185,
    "topicId": 4,
    "question": "Ao analisar as variáveis físicas que regem 'gap auscultatório (hiato auscultatório de Korotkoff)', qual das seguintes afirmações expressa com rigor a relação hidrodinâmica entre pressão, velocidade e geometria vascular?",
    "options": [
      "Se o enfermeiro insuflar a braçadeira insuficientemente no hiato, sobrestimará a PAS em mais de 80 mmHg por amplificação acústica da onda de pulso refletida periférica.",
      "Se o enfermeiro insuflar a braçadeira insuficientemente no hiato auscultatório, pode confundir o reaparecimento do som com a verdadeira PAS, subestimando gravemente a pressão.",
      "O hiato auscultatório não tem qualquer relevância na determinação da pressão arterial, visto que o manómetro aneroide corrige automaticamente o valor sonoro por software.",
      "O erro induzido pelo hiato auscultatório afeta exclusivamente a pressão venosa periférica, mantendo a leitura da pressão arterial sistólica perfeitamente rigorosa e exata."
    ],
    "correctIndex": 1,
    "explanation": "A análise hidrodinâmica correta confirma que Se o enfermeiro insuflar a braçadeira insuficientemente sem palpação prévia do pulso radial, pode confundir o reaparecimento do som com a verdadeira PAS, subestimando gravemente a pressão sistólica. O domínio destas leis permite ao enfermeiro interpretar os fenómenos vasculares com rigor científico.",
    "distractorAnalysis": [
      "Está incorreta: se a insuflação for interrompida durante o hiato silencioso, o reaparecimento dos sons será lido como a PAS, subestimando falsamente a pressão sistólica em 20-50 mmHg.",
      "Está incorreta: manómetros mecânicos aneroides ou de mercúrio não possuem circuitos digitais nem algoritmos de software para correção automática de sinais acústicos.",
      "Está incorreta: o erro afeta diretamente a medição da pressão arterial sistémica (PAS), podendo levar a diagnósticos incorretos de normotensão em doentes hipertensos graves."
    ],
    "nursingApplication": "O enfermeiro executa sempre o método palpatório prévio antes do método auscultatório para identificar a verdadeira PAS e não ser enganado pelo hiato auscultatório."
  },
  {
    "id": 4186,
    "topicId": 4,
    "question": "Na hidrodinâmica circulatória aplicada à enfermagem, em relação a 'efeito Venturi e variação de pressão na estenose vascular', qual é a fundamentação biofísica correta?",
    "options": [
      "No estreitamento vascular, a velocidade do sangue cai para metade e a pressão lateral sobe proporcionalmente à quarta potência do raio para compensar a resistência tecidual.",
      "O efeito Venturi demonstra que a energia mecânica total aumenta espontaneamente no estreitamento estenosado por absorção direta do campo magnético circundante.",
      "Pelo Teorema de Bernoulli, à medida que a área da secção diminui na estenose, a velocidade aumenta e a pressão lateral exercida na parede diminui, podendo colapsar o vaso pós-estenose.",
      "A estenose arterial mantém a velocidade e a pressão estática estritamente inalteradas em conformidade com o princípio fundamental da continuidade dos fluidos perfeitos."
    ],
    "correctIndex": 2,
    "explanation": "Em biofísica circulatória, efeito Venturi e variação de pressão na estenose vascular explica-se pelo facto de que pelo Teorema de Bernoulli e princípio da continuidade, à medida que a área de secção estreita (estenose), a velocidade do fluido aumenta e a pressão estática lateral diminui. Se a estenose for muito severa, a queda de pressão lateral pode favorecer o colapso transitório das paredes elásticas do vaso a jusante.",
    "distractorAnalysis": [
      "Está incorreta: a equação da continuidade impõe que a velocidade aumente na secção estreita (v = Q/A); por Bernoulli, a pressão estática lateral (P) cai na estenose.",
      "Está incorreta: a energia mecânica não aumenta espontaneamente em fluidos passivos; no estreitamento há conversão reversível de pressão potencial em energia cinética.",
      "Está incorreta: na estenose luminal ocorrem variações marcadas de velocidade (aceleração) e de pressão hidrostática lateral em conformidade com as leis de Bernoulli e Venturi."
    ],
    "nursingApplication": "O enfermeiro compreende a física das placas de ateroma e sabe que placas instáveis sofrem forças de cisalhamento extremas que podem provocar rutura e trombose aguda."
  },
  {
    "id": 4187,
    "topicId": 4,
    "question": "Na avaliação clínica e administração de terapêutica por um enfermeiro, como se manifesta a aplicação prática de 'efeito Venturi e variação de pressão na estenose vascular'?",
    "options": [
      "O enfermeiro sabe que as estenoses ateroscleróticas graves reduzem as forças de corte parietal a zero, tornando as placas de ateroma completamente estáveis e invulneráveis.",
      "O enfermeiro recomenda massagens vigorosas profundas sobre placas carotídeas estenosadas para forçar a dilatação mecânica do lúmen arterial através da pele do pescoço.",
      "O enfermeiro considera que doentes com estenoses coronárias críticas não necessitam de medicação antiagregante porque a queda de pressão de Venturi dissolve os trombos.",
      "O enfermeiro compreende que placas instáveis sofrem forças de cisalhamento e gradientes pressóricos extremos na estenose, predispondo a fissura da capa fibrosa e trombose aguda."
    ],
    "correctIndex": 3,
    "explanation": "A aplicação de enfermagem para efeito Venturi e variação de pressão na estenose vascular baseia-se no princípio: O enfermeiro compreende a física das placas de ateroma e sabe que placas instáveis sofrem forças de cisalhamento extremas que podem provocar rutura e trombose aguda. Esta intervenção é essencial para a segurança hemodinâmica do doente.",
    "distractorAnalysis": [
      "Está incorreta: a aceleração do fluxo na estenose e a turbulência pós-estenótica geram elevadíssimas forças de corte tangencial que podem romper a capa da placa aterosclerótica.",
      "Está incorreta: palpar vigorosamente ou massajar artérias carótidas com estenose pode fragmentar a placa e libertar êmbolos aterotrombóticos para o cérebro, causando AVC agudo.",
      "Está incorreta: as forças hemodinâmicas na estenose ativam a agregação plaquetária em vez de dissolver trombos, sendo os antiagregantes plaquetários indispensáveis."
    ],
    "nursingApplication": "O enfermeiro compreende a física das placas de ateroma e sabe que placas instáveis sofrem forças de cisalhamento extremas que podem provocar rutura e trombose aguda."
  },
  {
    "id": 4188,
    "topicId": 4,
    "question": "Ao analisar as variáveis físicas que regem 'efeito Venturi e variação de pressão na estenose vascular', qual das seguintes afirmações expressa com rigor a relação hidrodinâmica entre pressão, velocidade e geometria vascular?",
    "options": [
      "Na estenose severa, a forte aceleração do sangue reduz a pressão estática lateral (P) a valores que podem favorecer o colapso transitório da parede elástica e turbulência a jusante.",
      "A pressão lateral exercida contra a parede atinge o seu valor máximo absoluto precisamente no ponto mais estreito da estenose arterial por compressão hidrostática pura.",
      "O aumento da velocidade na estenose decorre da criação contínua de um gradiente térmico endotelial ativo que aquece e expande o plasma no lúmen do vaso estenosado.",
      "A velocidade de escoamento no ponto estenosado reduz-se a zero milímetros por segundo para permitir que a pressão transmural recupere a sua integridade fisiológica normal."
    ],
    "correctIndex": 0,
    "explanation": "A análise hidrodinâmica correta confirma que Se a estenose for muito severa, a queda de pressão lateral pode favorecer o colapso transitório das paredes elásticas do vaso a jusante. O domínio destas leis permite ao enfermeiro interpretar os fenómenos vasculares com rigor científico.",
    "distractorAnalysis": [
      "Está incorreta: pelo Teorema de Bernoulli (P + 1/2 ρ v² = constante), o aumento de velocidade cinética (v) reduz a pressão estática lateral (P) na luz estenosada.",
      "Está incorreta: a aceleração do sangue obedece à equação da continuidade da massa num conduto de secção reduzida e não a dilatações térmicas ou gradientes de temperatura locais.",
      "Está incorreta: para assegurar a passagem do mesmo caudal volumétrico através de uma fenda estreita, a velocidade tem obrigatoriamente de aumentar e não de se anular."
    ],
    "nursingApplication": "O enfermeiro compreende a física das placas de ateroma e sabe que placas instáveis sofrem forças de cisalhamento extremas que podem provocar rutura e trombose aguda."
  },
  {
    "id": 4189,
    "topicId": 4,
    "question": "Na hidrodinâmica circulatória aplicada à enfermagem, em relação a 'auscultação de sopro carotídeo em doentes vasculares', qual é a fundamentação biofísica correta?",
    "options": [
      "O sopro carotídeo é produzido pela passagem de ar alveolar através dos músculos esternocleidomastoideus durante as fases de inspiração profunda em doentes com enfisema.",
      "A placa aterosclerótica na carótida interna estreita o lúmen, gerando jato de alta velocidade com Re > 3000 pós-estenose e sopro sistólico rude audível ao longo do pescoço.",
      "A estenose carotídea elimina qualquer probabilidade de turbulência no sangue encefálico por converter a artéria num tubo perfeitamente liso e desprovido de atrito.",
      "O sopro auscultado sobre a artéria carótida reflete a circulação retrógrada forçada de linfa proveniente do ducto torácico sob pressões hidrostáticas de duzentos mmHg."
    ],
    "correctIndex": 1,
    "explanation": "Em biofísica circulatória, auscultação de sopro carotídeo em doentes vasculares explica-se pelo facto de que uma placa aterosclerótica que estreita o lúmen da artéria carótida interna gera aceleração local do jato sanguíneo e um Número de Reynolds muito acima de 3000 pós-estenose. Isto produz um sopro sistólico rude audível com a campânula do estetoscópio colocada suavemente ao longo do trajeto da carótida no pescoço.",
    "distractorAnalysis": [
      "Está incorreta: o sopro carotídeo tem origem estritamente vascular arterial e decorre do fluxo turbulento gerado pela estenose aterosclerótica carotídea.",
      "Está incorreta: a estenose arterial luminal gera aceleração local e desaceleração brusca a jusante com vórtices de Reynolds elevado, que são a génese física do sopro.",
      "Está incorreta: os sopros cervicais auscultados com estetoscópio correspondem ao fluxo turbulento arterial carotídeo e não a circulação linfática sob alta pressão."
    ],
    "nursingApplication": "O enfermeiro ausculta as carótidas durante a avaliação vascular e reporta a presença de sopros carotídeos, que sinalizam risco aumentado de Acidente Vascular Cerebral isquémico."
  },
  {
    "id": 4190,
    "topicId": 4,
    "question": "Na avaliação clínica e administração de terapêutica por um enfermeiro, como se manifesta a aplicação prática de 'auscultação de sopro carotídeo em doentes vasculares'?",
    "options": [
      "O enfermeiro sabe que a auscultação de um sopro carotídeo dispensa qualquer avaliação diagnóstica complementar por se tratar de um achado fisiológico inócuo em idosos.",
      "O enfermeiro palpa as duas artérias carótidas em simultâneo com compressão bilateral profunda e contínua durante dois minutos para testar a permeabilidade do polígono de Willis.",
      "O enfermeiro ausculta as carótidas durante a avaliação vascular e reporta a presença de sopros carotídeos, que sinalizam estenose significativa e risco de Acidente Vascular Cerebral.",
      "O enfermeiro prescreve anti-hipertensores de ação ultrarrápida em bólus no doente assintomático com sopro carotídeo para diminuir bruscamente a pressão sistólica para 70 mmHg."
    ],
    "correctIndex": 2,
    "explanation": "A aplicação de enfermagem para auscultação de sopro carotídeo em doentes vasculares baseia-se no princípio: O enfermeiro ausculta as carótidas durante a avaliação vascular e reporta a presença de sopros carotídeos, que sinalizam risco aumentado de Acidente Vascular Cerebral isquémico. Esta intervenção é essencial para a segurança hemodinâmica do doente.",
    "distractorAnalysis": [
      "Está incorreta: um sopro carotídeo num doente com fatores de risco vascular é um sinal de alarme que exige confirmação ecográfica com eco-Doppler carotídeo para estadiamento.",
      "Está incorreta: a palpação bilateral simultânea das carótidas é absolutamente contraindicada pelo risco de oclusão do fluxo cerebral bilateral, síncope e paragem cardíaca reflexa.",
      "Está incorreta: descidas abruptas e excessivas da pressão arterial em doentes com estenose carotídea grave reduzem a pressão de perfusão cerebral a jusante, precipitando AVC isquémico."
    ],
    "nursingApplication": "O enfermeiro ausculta as carótidas durante a avaliação vascular e reporta a presença de sopros carotídeos, que sinalizam risco aumentado de Acidente Vascular Cerebral isquémico."
  },
  {
    "id": 4191,
    "topicId": 4,
    "question": "Ao analisar as variáveis físicas que regem 'auscultação de sopro carotídeo em doentes vasculares', qual das seguintes afirmações expressa com rigor a relação hidrodinâmica entre pressão, velocidade e geometria vascular?",
    "options": [
      "O sopro carotídeo é originado pela ejeção contínua de gotículas aquecidas aquecido pelas células endoteliais carotídeas em resposta ao atrito exercido pelos leucócitos.",
      "A intensidade acústica do sopro carotídeo independe do diâmetro residual da estenose, apresentando o mesmo volume sonoro numa oclusão de 99% e numa artéria sã sem placa.",
      "O fluxo pós-estenótico carotídeo é um regime de escoamento hiperlaminar onde todas as moléculas de água se deslocam em linha reta perfeita sem qualquer vibração transversal.",
      "A estenose carotídea acelera o sangue e gera turbilhões caóticos pós-estenose que fazem vibrar a parede arterial e estruturas vizinhas, emitindo ondas sonoras audíveis."
    ],
    "correctIndex": 3,
    "explanation": "A análise hidrodinâmica correta confirma que Isto produz um sopro sistólico rude audível com a campânula do estetoscópio colocada suavemente ao longo do trajeto da carótida no pescoço. O domínio destas leis permite ao enfermeiro interpretar os fenómenos vasculares com rigor científico.",
    "distractorAnalysis": [
      "Está incorreta: o sangue líquido não sofre ebulição endotelial nem forma vapor; o sopro decorre puramente da energia mecânica turbulenta e vibrações parietais elásticas.",
      "Está incorreta: estenoses críticas muito apertadas (>90-95%) podem diminuir tanto o débito que o sopro se atenua ou desaparece (estenose silenciosa pré-oclusiva).",
      "Está incorreta: a expansão súbita da secção transversal após a estenose cria separação das linhas de corrente, jatos livres instáveis e vórtices caóticos de alta dissipação energética."
    ],
    "nursingApplication": "O enfermeiro ausculta as carótidas durante a avaliação vascular e reporta a presença de sopros carotídeos, que sinalizam risco aumentado de Acidente Vascular Cerebral isquémico."
  },
  {
    "id": 4192,
    "topicId": 4,
    "question": "Na hidrodinâmica circulatória aplicada à enfermagem, em relação a 'fístula arteriovenosa (FAV) para hemodiálise e deteção de frémito (thrill)', qual é a fundamentação biofísica correta?",
    "options": [
      "A anastomose direta de artéria de alta pressão com veia de baixa resistência cria fluxo turbulento contínuo de alto débito, com sopro audível contínuo e frémito (thrill) palpável.",
      "A criação cirúrgica de uma fístula arteriovenosa transforma o fluxo em regime perfeitamente laminar e estagnado, cessando qualquer movimento de fluido através da anastomose.",
      "O frémito palpável numa fístula arteriovenosa resulta da contração tetânica contínua do músculo braquiorradial do antebraço após a incisão cirúrgica dos nervos periféricos.",
      "A auscultação de uma fístula funcional revela silêncio absoluto em toda a extensão do membro, indicando que a pressão venosa superou a pressão arterial braquial basal."
    ],
    "correctIndex": 0,
    "explanation": "Em biofísica circulatória, fístula arteriovenosa (FAV) para hemodiálise e deteção de frémito (thrill) explica-se pelo facto de que a anastomose cirúrgica direta entre uma artéria de alta pressão e uma veia superficial de baixa resistência cria um fluxo turbulento contínuo de altíssimo débito. A turbulência intensa produz ondas sonoras audíveis contínuas (sopro de maquinaria à auscultação) e vibrações mecânicas de baixa frequência palpáveis com a mão (frémito ou thrill).",
    "distractorAnalysis": [
      "Está incorreta: o shunt arteriovenoso gera um fluxo de débito muito elevado (500 a 1500 mL/min) com acentuada turbulência contínua sistodiastólica e sopro com frémito.",
      "Está incorreta: o frémito ('thrill') é uma vibração tátil hidrodinâmica gerada pela intensa turbulência do sangue na parede da veia dilatada e não espasmo muscular esquelético.",
      "Está incorreta: uma fístula arteriovenosa pérvia e funcional produz obrigatoriamente sopro contínuo em maquinaria e frémito; o silêncio auscultatório indica trombose da FAV."
    ],
    "nursingApplication": "O enfermeiro de nefrologia palpa obrigatoriamente a presença de frémito ('thrill') ao longo de toda a fístula antes de cada sessão de hemodiálise: a ausência de frémito indica trombose aguda da fístula!"
  },
  {
    "id": 4193,
    "topicId": 4,
    "question": "Na avaliação clínica e administração de terapêutica por um enfermeiro, como se manifesta a aplicação prática de 'fístula arteriovenosa (FAV) para hemodiálise e deteção de frémito (thrill)'?",
    "options": [
      "O enfermeiro mede rotineiramente a pressão arterial no braço da fístula arteriovenosa com braçadeira pneumática insuflada até 200 mmHg antes de iniciar a sessão de diálise.",
      "O enfermeiro palpa obrigatoriamente a presença de frémito (thrill) e ausculta o sopro ao longo da fístula antes de puncionar: a ausência destes sinais traduz trombose aguda da via!",
      "O enfermeiro punciona a fístula arteriovenosa mesmo na ausência de frémito ou sopro, assumindo que a paragem do fluxo é uma condição transitória normal durante o repouso.",
      "O enfermeiro aplica garrotes de borracha apertados no braço da fístula durante várias horas após a diálise para manter as veias dilatadas e prontas para a punção seguinte."
    ],
    "correctIndex": 1,
    "explanation": "A aplicação de enfermagem para fístula arteriovenosa (FAV) para hemodiálise e deteção de frémito (thrill) baseia-se no princípio: O enfermeiro de nefrologia palpa obrigatoriamente a presença de frémito ('thrill') ao longo de toda a fístula antes de cada sessão de hemodiálise: a ausência de frémito indica trombose aguda da fístula! Esta intervenção é essencial para a segurança hemodinâmica do doente.",
    "distractorAnalysis": [
      "Está incorreta: nunca se deve medir a pressão arterial nem colocar garrotes no membro de uma fístula arteriovenosa, pois a compressão externa oclui o fluxo e induz trombose do acesso.",
      "Está incorreta: puncionar uma fístula sem frémito ou sopro é estritamente contraindicado; traduz trombose da fístula e requer avaliação cirúrgica vascular urgente para trombectomia.",
      "Está incorreta: garrotes prolongados no membro com fístula causam estase e oclusão trombótica irreversível do acesso vascular essencial à sobrevivência do doente dialítico."
    ],
    "nursingApplication": "O enfermeiro de nefrologia palpa obrigatoriamente a presença de frémito ('thrill') ao longo de toda a fístula antes de cada sessão de hemodiálise: a ausência de frémito indica trombose aguda da fístula!"
  },
  {
    "id": 4194,
    "topicId": 4,
    "question": "Ao analisar as variáveis físicas que regem 'fístula arteriovenosa (FAV) para hemodiálise e deteção de frémito (thrill)', qual das seguintes afirmações expressa com rigor a relação hidrodinâmica entre pressão, velocidade e geometria vascular?",
    "options": [
      "A turbulência na fístula anula o retorno venoso para o coração direito, desviando a totalidade do débito sistólico diretamente para o sistema porta hepático intra-abdominal.",
      "O som da fístula arteriovenosa é gerado pela passagem contínua de potenciais galvânicos induzidos pela agulha metálica de fístula deixada na túnica íntima.",
      "O fluxo turbulento contínuo de alto débito gera ondas sonoras audíveis (sopro de maquinaria contínuo) e vibrações mecânicas de baixa frequência palpáveis com a mão (frémito ou thrill).",
      "A presença de frémito palpável numa fístula indica que o acesso vascular está prestes a rebentar espontaneamente, exigindo laqueação cirúrgica imediata de urgência."
    ],
    "correctIndex": 2,
    "explanation": "A análise hidrodinâmica correta confirma que A turbulência intensa produz ondas sonoras audíveis contínuas (sopro de maquinaria à auscultação) e vibrações mecânicas de baixa frequência palpáveis com a mão (frémito ou thrill). O domínio destas leis permite ao enfermeiro interpretar os fenómenos vasculares com rigor científico.",
    "distractorAnalysis": [
      "Está incorreta: a fístula drena através da veia cefálica/basílica para a veia cava superior e aurícula direita, aumentando o retorno venoso e a pré-carga cardíaca.",
      "Está incorreta: os fenómenos acústicos e mecânicos da FAV decorrem puramente de forças hidrodinâmicas turbulentas do sangue e não de eletricidade ou voltagem galvânica.",
      "Está incorreta: o frémito é o sinal semiológico normal e mandatório de permeabilidade e bom funcionamento da fístula arteriovenosa para realização de hemodiálise."
    ],
    "nursingApplication": "O enfermeiro de nefrologia palpa obrigatoriamente a presença de frémito ('thrill') ao longo de toda a fístula antes de cada sessão de hemodiálise: a ausência de frémito indica trombose aguda da fístula!"
  },
  {
    "id": 4195,
    "topicId": 4,
    "question": "Na hidrodinâmica circulatória aplicada à enfermagem, em relação a 'estenose da válvula aórtica e hipertrofia ventricular concêntrica', qual é a fundamentação biofísica correta?",
    "options": [
      "Na estenose aórtica, o orifício valvular dilata para mais de 10 cm², permitindo que o sangue escoe com resistência nula e sem qualquer sobrecarga de pressão no miocárdio.",
      "O estreitamento da válvula aórtica provoca a atrofia imediata das paredes do ventrículo esquerdo, reduzindo a espessura miocárdica a escassos dois milímetros em adultos.",
      "A estenose aórtica caracteriza-se por um sopro diastólico suave audível exclusivamente na fossa poplítea dos membros inferiores durante a marcha do indivíduo.",
      "Na estenose aórtica severa (orifício < 1 cm²), o ventrículo esquerdo gera gradientes de 50-100 mmHg e jatos de alta velocidade (>4 m/s) com sopro sistólico ejetivo e hipertrofia concêntrica."
    ],
    "correctIndex": 3,
    "explanation": "Em biofísica circulatória, estenose da válvula aórtica e hipertrofia ventricular concêntrica explica-se pelo facto de que o estreitamento da área do orifício da válvula aórtica de 3-4 cm² para menos de 1 cm² obriga o ventrículo esquerdo a gerar gradientes de pressão transvalvulares de 50 a 100 mmHg. O jato de ejeção atinge velocidades superiores a 4 m/s com turbulência extrema pós-valvular, produzindo um sopro sistólico ejetivo em crescendo-decrescendo que irradia para as carótidas.",
    "distractorAnalysis": [
      "Está incorreta: a estenose aórtica consiste no estreitamento do orifício valvular (< 1 cm² na forma severa vs 3-4 cm² normal), impondo enorme barreira obstrutiva mecânica ao ventrículo.",
      "Está incorreta: em resposta à sobrecarga de pressão crónica, o miocárdio ventricular esquerdo sofre hipertrofia concêntrica compensatória (aumento da espessura parietal) e não atrofia.",
      "Está incorreta: o sopro clássico da estenose aórtica é sistólico de ejeção em crescendo-decrescendo, auscultado no 2.º espaço intercostal direito (foco aórtico) e com irradiação carotídea."
    ],
    "nursingApplication": "O enfermeiro monitoriza queixas de síncope aos esforços, dispneia e angina em idosos com estenose aórtica severa, alertando para a necessidade de evitar vasodilatadores agressivos."
  },
  {
    "id": 4196,
    "topicId": 4,
    "question": "Na avaliação clínica e administração de terapêutica por um enfermeiro, como se manifesta a aplicação prática de 'estenose da válvula aórtica e hipertrofia ventricular concêntrica'?",
    "options": [
      "O enfermeiro monitoriza síncope de esforço, angina e dispneia na estenose aórtica grave, evitando vasodilatadores agressivos que reduzam a pré-carga e colapsem a perfusão coronária.",
      "O enfermeiro administra nitratos sublinguais de alta potência em doses repetidas em doentes com estenose aórtica severa sintomática sempre que apresentem dor torácica.",
      "O enfermeiro incentiva a prática de provas desportivas competitivas intensas em utentes diagnosticados com estenose aórtica severa calcificada para dilatar a válvula por esforço.",
      "O enfermeiro considera que a estenose aórtica é uma afeção puramente funcional e auto-limitada, que dispensa qualquer vigilância clínica especializada na velhice."
    ],
    "correctIndex": 0,
    "explanation": "A aplicação de enfermagem para estenose da válvula aórtica e hipertrofia ventricular concêntrica baseia-se no princípio: O enfermeiro monitoriza queixas de síncope aos esforços, dispneia e angina em idosos com estenose aórtica severa, alertando para a necessidade de evitar vasodilatadores agressivos. Esta intervenção é essencial para a segurança hemodinâmica do doente.",
    "distractorAnalysis": [
      "Está incorreta: vasodilatadores potentes (como nitratos) reduzem a pré-carga e a PA num ventrículo que depende de pré-carga elevada para vencer a estenose fixa, causando síncope fatal.",
      "Está incorreta: esforços físicos vigorosos em doentes com estenose aórtica grave podem desencadear síncope súbita, isquemia miocárdica ventricular esquerda fulminante e paragem cardíaca.",
      "Está incorreta: a estenose aórtica severa é uma patologia estrutural progressiva potencialmente fatal se não for corrigida por cirurgia de substituição valvular ou TAVI."
    ],
    "nursingApplication": "O enfermeiro monitoriza queixas de síncope aos esforços, dispneia e angina em idosos com estenose aórtica severa, alertando para a necessidade de evitar vasodilatadores agressivos."
  },
  {
    "id": 4197,
    "topicId": 4,
    "question": "Ao analisar as variáveis físicas que regem 'estenose da válvula aórtica e hipertrofia ventricular concêntrica', qual das seguintes afirmações expressa com rigor a relação hidrodinâmica entre pressão, velocidade e geometria vascular?",
    "options": [
      "A velocidade do jato na estenose aórtica é estritamente inferior a 0,1 m/s, dado que a calcificação das cúspides absorve noventa por cento da energia cinética ventricular.",
      "O jato de ejeção transvalvular atinge velocidades superiores a 4 m/s com turbulência intensa pós-estenose, gerando sopro sistólico ejetivo rude em crescendo-decrescendo que irradia ao pescoço.",
      "O sopro da estenose aórtica decorre do refluxo contínuo de sangue da veia cava superior diretamente para o ventrículo esquerdo através de comunicações teciduais anómalas.",
      "O gradiente de pressão transvalvular na estenose severa é nulo, de acordo com o princípio da equipartição de energia hidrodinâmica nos orifícios circulares valvulares."
    ],
    "correctIndex": 1,
    "explanation": "A análise hidrodinâmica correta confirma que O jato de ejeção atinge velocidades superiores a 4 m/s com turbulência extrema pós-valvular, produzindo um sopro sistólico ejetivo em crescendo-decrescendo que irradia para as carótidas. O domínio destas leis permite ao enfermeiro interpretar os fenómenos vasculares com rigor científico.",
    "distractorAnalysis": [
      "Está incorreta: pela equação da continuidade (v = Q/A), quanto mais estreito o orifício valvular, maior a velocidade do jato (atingindo rotineiramente 4 a 5 m/s na estenose severa).",
      "Está incorreta: o sopro resulta da ejeção anterógrada ventricular esquerda através da válvula aórtica estenosada para a raiz da aorta e não de shunts entre veias cavas e o coração esquerdo.",
      "Está incorreta: o gradiente transvalvular aórtico é a diferença de pressão entre o ventrículo esquerdo e a aorta (ΔP = 4 v²), atingindo valores elevados (50 a 100 mmHg) na estenose."
    ],
    "nursingApplication": "O enfermeiro monitoriza queixas de síncope aos esforços, dispneia e angina em idosos com estenose aórtica severa, alertando para a necessidade de evitar vasodilatadores agressivos."
  },
  {
    "id": 4198,
    "topicId": 4,
    "question": "Na hidrodinâmica circulatória aplicada à enfermagem, em relação a 'turbulência e predisposição à agregação plaquetária', qual é a fundamentação biofísica correta?",
    "options": [
      "A turbulência sanguínea impede qualquer contacto entre as plaquetas e o endotélio, funcionando como um mecanismo biológico protetor contra a formação de trombos intravasculares.",
      "As forças de cisalhamento no ponto estenosado dissolvem os núcleos dos leucócitos e eritrócitos, tornando o sangue imune a qualquer processo de coagulação fisiológica.",
      "Elevadas forças de cisalhamento na estenose ativam o Fator de von Willebrand e os recetores plaquetários Ib e IIb/IIIa, acelerando a agregação plaquetária sobre a placa aterosclerótica.",
      "A agregação plaquetária ocorre unicamente sob fluxo laminar perfeitamente silencioso com número de Reynolds inferior a cem, cessando perante qualquer nível de turbulência vascular."
    ],
    "correctIndex": 2,
    "explanation": "Em biofísica circulatória, turbulência e predisposição à agregação plaquetária explica-se pelo facto de que as elevadas forças de cisalhamento no ponto de estenose alteram a conformação do Fator de von Willebrand (vWF), ativando as glicoproteínas Ib e IIb/IIIa das plaquetas. Isto desencadeia adesão e agregação plaquetária mecânica rápida sobre a placa aterosclerótica mesmo sem exposição total de colagénio subendotelial.",
    "distractorAnalysis": [
      "Está incorreta: tensões de cisalhamento elevadas induzem a mudança conformacional do vWF (desenrolamento multimérico), promovendo a ligação a GPIb e agregação de plaquetas.",
      "Está incorreta: a turbulência e o cisalhamento patológico ativam plaquetas e lesam o endotélio, sendo gatilhos potentes de trombose arterial aguda sobre placas de ateroma.",
      "Está incorreta: os trombos arteriais brancos (ricos em plaquetas e fibrina) formam-se predominantemente sob regimes de alto cisalhamento e turbulência pós-estenótica."
    ],
    "nursingApplication": "O enfermeiro assegura a administração pontual e rigorosa de antiagregantes plaquetários prescritos (como aspirina e clopidogrel) para prevenir a oclusão trombótica aguda pós-estenose."
  },
  {
    "id": 4199,
    "topicId": 4,
    "question": "Na avaliação clínica e administração de terapêutica por um enfermeiro, como se manifesta a aplicação prática de 'turbulência e predisposição à agregação plaquetária'?",
    "options": [
      "O enfermeiro administra anticoagulantes e antiagregantes em conjunto antes de qualquer intervenção cirúrgica sem validação médica para acelerar a hemostase tecidual.",
      "O enfermeiro aconselha o doente com placa carotídea estenosante a suspender toda a medicação antiplaquetária para facilitar a coagulação fisiológica sobre a placa de ateroma.",
      "O enfermeiro sabe que a agregação plaquetária depende unicamente da temperatura dos membros inferiores, sendo os fármacos antiagregantes ineficazes na circulação carotídea.",
      "O enfermeiro assegura a administração rigorosa dos antiagregantes plaquetários prescritos (como aspirina e clopidogrel) para prevenir a oclusão trombótica aguda pós-estenose."
    ],
    "correctIndex": 3,
    "explanation": "A aplicação de enfermagem para turbulência e predisposição à agregação plaquetária baseia-se no princípio: O enfermeiro assegura a administração pontual e rigorosa de antiagregantes plaquetários prescritos (como aspirina e clopidogrel) para prevenir a oclusão trombótica aguda pós-estenose. Esta intervenção é essencial para a segurança hemodinâmica do doente.",
    "distractorAnalysis": [
      "Está incorreta: administrar fármacos anticoagulantes ou antiagregantes antes de cirurgias sem prescrição médica acarreta risco hemorrágico gravíssimo e risco de morte operatória.",
      "Está incorreta: a suspensão inadvertida de antiagregantes plaquetários em doentes com estenoses arteriais críticas precipita enfarte agudo do miocárdio ou AVC aterotrombótico agudo.",
      "Está incorreta: antiagregantes como o ácido acetilsalicílico e antagonistas de recetores P2Y12 (clopidogrel) atuam a nível sistémico, prevenindo eventos isquémicos arteriais cerebrais e coronários."
    ],
    "nursingApplication": "O enfermeiro assegura a administração pontual e rigorosa de antiagregantes plaquetários prescritos (como aspirina e clopidogrel) para prevenir a oclusão trombótica aguda pós-estenose."
  },
  {
    "id": 4200,
    "topicId": 4,
    "question": "Ao analisar as variáveis físicas que regem 'turbulência e predisposição à agregação plaquetária', qual das seguintes afirmações expressa com rigor a relação hidrodinâmica entre pressão, velocidade e geometria vascular?",
    "options": [
      "O cisalhamento hemodinâmico elevado na estenose arterial desencadeia a adesão e agregação plaquetária rápida sobre a placa aterosclerótica mesmo sem exposição total de colagénio.",
      "O cisalhamento elevado destrói irreversivelmente todas as plaquetas do organismo por desnaturação osmótica, provocando diátese hemorrágica generalizada em qualquer estenose.",
      "A agregação plaquetária no ponto estenosado é mantida exclusivamente por atração gravitacional entre as moléculas de glicose plasmática e os eritrócitos circundantes.",
      "A tensão de corte mecânica é incapaz de alterar o Fator de von Willebrand, dependendo a ativação da hemostase arterial exclusivamente de estímulos elétricos transcutâneos."
    ],
    "correctIndex": 0,
    "explanation": "A análise hidrodinâmica correta confirma que Isto desencadeia adesão e agregação plaquetária mecânica rápida sobre a placa aterosclerótica mesmo sem exposição total de colagénio subendotelial. O domínio destas leis permite ao enfermeiro interpretar os fenómenos vasculares com rigor científico.",
    "distractorAnalysis": [
      "Está incorreta: o cisalhamento não destrói o pool sistémico total de plaquetas; ativa-as localmente através da interação vWF-glicoproteínas, culminando na formação de trombo focal.",
      "Está incorreta: a agregação e adesão hemostática são processos moleculares mediados por recetores de superfície celular e ligandos proteicos, e não atração gravítica por glicose.",
      "Está incorreta: o Fator de von Willebrand é um sensor mecanossensível por excelência, estendendo-se e expondo sítios ativos de ligação plaquetária sob altas taxas de cisalhamento."
    ],
    "nursingApplication": "O enfermeiro assegura a administração pontual e rigorosa de antiagregantes plaquetários prescritos (como aspirina e clopidogrel) para prevenir a oclusão trombótica aguda pós-estenose."
  }
];
