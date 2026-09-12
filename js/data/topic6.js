/**
 * Tópico 6: Núcleo Atómico e Propriedades das Forças Nucleares
 * 50 Questões Científicas Rigorosas para o 1.º Ano de Enfermagem
 */

const TOPIC_6_QUESTIONS = [
  {
    id: 601,
    topicId: 6,
    question: "O núcleo atómico é constituído por dois tipos de partículas elementares designadas conjuntamente por 'Nucleões'. Quais são essas partículas e quais as suas respetivas cargas elétricas fundamentais?",
    options: [
      "Protões (com carga elétrica positiva elementar, +e = +1,602 × 10⁻¹⁹ C) e Neutrões (com carga elétrica nula, 0 C).",
      "Eletrões de carga negativa e Fotões de carga positiva.",
      "Apenas neutrões desprovidos de massa ou carga.",
      "Partículas alfa e raios gama em estado gasoso contínuo."
    ],
    correctIndex: 0,
    explanation: "O núcleo atómico dos elementos da tabela periódica é composto exclusivamente por protões (carga +1e) e neutrões (carga 0). A massa do protão (m_p ≈ 1,00728 u) é muito próxima da massa do neutrão (m_n ≈ 1,00866 u), sendo ambos cerca de 1836 vezes mais massivos do que o eletrão orbital circundante (m_e ≈ 0,00055 u). Praticamente 99,95% de toda a massa do átomo concentra-se no núcleo.",
    distractorAnalysis: [
      "Opção B confunde partículas nucleares com a nuvem eletrónica extranuclear e fotões de radiação pura.",
      "Opção C ignora os protões e afirma falsamente que os neutrões não têm massa (possuem ~1,675 × 10⁻²⁷ kg).",
      "Opção D descreve produtos de decaimento radioativo emitidos por núcleos instáveis, não a estrutura fundamental estável."
    ],
    nursingApplication: "A compreensão do número de protões (Z) e neutrões (N) é essencial em medicina nuclear: o comportamento químico de um radiofármaco no corpo do doente (como a captação de iodo pela tiroide) depende unicamente de Z, enquanto a sua radioatividade para diagnóstico ou terapia decorre do desequilíbrio de N no núcleo."
  },
  {
    id: 602,
    topicId: 6,
    question: "Na notação nuclear padrão de um elemento químico genérico representado por ᴬ_Z X (por exemplo, ¹³¹₅₃I ou ⁹⁹ᵐ₄₃Tc), o que representam formalmente as letras Z e A?",
    options: [
      "Z é o Número Atómico (número de protões, definidor do elemento químico) e A é o Número de Massa (número total de nucleões, A = Z + N).",
      "Z é o número de neutrões e A é a carga elétrica em Volts.",
      "Z é a temperatura de fusão em graus Celsius e A a massa do frasco em gramas.",
      "Z é o número de eletrões e A a velocidade de rotação do núcleo."
    ],
    correctIndex: 0,
    explanation: "Na simbologia nuclear padrão: 1) Z (Número Atómico) indica o número de protões no núcleo, determinando a identidade química e a posição do elemento na Tabela Periódica; 2) A (Número de Massa) representa a soma total de protões e neutrões (A = Z + N). O número de neutrões N obtém-se subtraindo N = A - Z. No exemplo do Iodo-131 (¹³¹₅₃I): Z = 53 protões, A = 131 nucleões e N = 131 - 53 = 78 neutrões.",
    distractorAnalysis: [
      "Opções B, C e D misturam conceitos elétricos, termodinâmicos e cinemáticos sem qualquer fundamento na convenção IUPAC/IUPAP da física nuclear."
    ],
    nursingApplication: "Na administração de radiofármacos hospitalares, o enfermeiro valida a prescrição confrontando rigorosamente a notação nuclear no rótulo blindado do frasco: diferenciar Iodo-131 (¹³¹I, emissor beta destrutivo usado em cancro da tiroide) de Iodo-123 (¹²³I, emissor gama puro para cintigrafia de diagnóstico) previne erros terapêuticos graves de sobredosagem radioativa."
  },
  {
    id: 603,
    topicId: 6,
    question: "Em termos de escala dimensional física, qual é a ordem de grandeza aproximada do Raio do Núcleo Atómico em comparação com o Raio do Átomo completo?",
    options: [
      "O raio do núcleo atómico é da ordem do Femtómetro (1 fm = 10⁻¹⁵ m), sendo cerca de 10.000 a 100.000 vezes menor do que o raio do átomo (que é da ordem do Angström, 10⁻¹⁰ m); o átomo é essencialmente constituído por 'espaço vazio'.",
      "O núcleo atómico ocupa 95% do volume total do átomo.",
      "O núcleo atómico mede cerca de 1 milímetro e o átomo mede 1 metro.",
      "O núcleo atómico é muito maior do que a nuvem eletrónica em todos os elementos."
    ],
    correctIndex: 0,
    explanation: "O átomo tem um raio médio da ordem de 10⁻¹⁰ metros (0,1 nm), enquanto o seu núcleo mede apenas cerca de 10⁻¹⁵ a 10⁻¹⁴ metros (1 a 10 fm). Em analogia clássica: se o átomo tivesse o tamanho de um estádio de futebol com 100 metros de diâmetro, o núcleo seria do tamanho de uma pequena formiga ou grão de areia (1 milímetro) no centro do relvado! Toda a matéria dos corpos humanos é, do ponto de vista do volume espacial, esmagadoramente vácuo permeado por campos eletromagnéticos.",
    distractorAnalysis: [
      "Opção B inverte drasticamente as frações volumétricas; o núcleo ocupa menos de 10⁻¹² do volume atómico.",
      "Opções C e D violam as escalas microscópicas subatómicas elementares."
    ],
    nursingApplication: "O facto de o átomo ser quase inteiramente espaço vazio explica a tremenda penetrância dos Raios X e da radiação Gama: a esmagadora maioria dos fotões atravessa triliões de átomos do corpo do doente sem colidir com nenhum núcleo compacto central, sendo atenuados apenas quando interagem com os eletrões da nuvem atómica."
  },
  {
    id: 604,
    topicId: 6,
    question: "A densidade mássica média da matéria nuclear (ρ_nuclear) é uma constante universal surpreendente para praticamente todos os núcleos atómicos. Qual é o seu valor aproximado?",
    options: [
      "Aproximadamente 2 × 10¹⁷ kg/m³ (cerca de 200 a 250 milhões de toneladas por centímetro cúbico).",
      "Aproximadamente 1 kg/m³, exatamente idêntica à densidade do ar respirável.",
      "Cerca de 1000 kg/m³, idêntica à da água líquida pura.",
      "Zero absoluto, pois os nucleões não têm densidade mensurável."
    ],
    correctIndex: 0,
    explanation: "Como o raio nuclear é dado por R = R₀ · A¹/³ (onde R₀ ≈ 1,2 fm), o volume do núcleo é V = 4/3 π R³ ∝ A. A densidade mássica nuclear é a razão entre a massa total (M ≈ A · m_u) e o volume V: ρ = M / V ≈ m_u / (4/3 π R₀³). Como o número de massa A se cancela no numerador e denominador, a densidade nuclear é CONSTANTE para todos os elementos, atingindo o valor colossal de ~2,3 × 10¹⁷ kg/m³ (idêntica à densidade de uma estrela de neutrões).",
    distractorAnalysis: [
      "Opção B confunde a densidade da matéria nuclear condensada com gases à pressão atmosférica.",
      "Opção C confunde a densidade nuclear com a densidade macroscópica de líquidos moleculares.",
      "Opção D viola a definição física de densidade de massa sólida."
    ],
    nursingApplication: "Compreender que o núcleo possui uma densidade de 200 milhões de toneladas/cm³ ajuda o enfermeiro a visualizar a extrema concentração de energia contida no núcleo: qualquer perturbação ou desintegração nessa matéria ultra-densa liberta energias milhões de vezes superiores às das reações químicas convencionais dos medicamentos."
  },
  {
    id: 605,
    topicId: 6,
    question: "Dentro do núcleo atómico, os protões possuem todos carga elétrica positiva e encontram-se comprimidos a distâncias inferiores a 1 femtómetro, gerando forças eletrostáticas repulsivas de Coulomb colossais. Qual é a força física fundamental da natureza que mantém os nucleões firmemente unidos contra essa repulsão elétrica?",
    options: [
      "A Força Nuclear Forte (ou Interação Forte), uma força atrativa de elevadíssima intensidade e curtíssimo alcance (alcance efetivo inferior a ~2 a 3 fm).",
      "A força da Gravidade terrestre exercida pelo centro da Terra.",
      "A força magnética dos polos da Terra que atua nos eletrões.",
      "A tensão superficial da água do citoplasma celular."
    ],
    correctIndex: 0,
    explanation: "A Força Nuclear Forte é a mais potente das quatro forças fundamentais da física: a distâncias nucleares (~1 fm), ela é cerca de 100 vezes mais forte do que a repulsão eletrostática de Coulomb entre protões e 10³⁸ vezes mais intensa do que a gravidade. É uma força puramente atrativa que atua indistintamente entre protões e protões, neutrões e neutrões, ou protões e neutrões. O seu alcance é estritamente limitado: decai exponencialmente para zero a distâncias superiores a 2,5 a 3 femtómetros.",
    distractorAnalysis: [
      "Opção B é um erro de 38 ordens de magnitude; a gravidade entre nucleões microscópicos é totalmente insignificante.",
      "Opção C refere-se ao campo geomagnético planetário, incapaz de estabilizar átomos.",
      "Opção D refere-se a forças intermoleculares de pontes de hidrogénio a nível biológico macroscópico."
    ],
    nursingApplication: "O equilíbrio dinâmico entre a Força Nuclear Forte (atrativa de curto alcance) e a Força Eletrostática de Coulomb (repulsiva de longo alcance) é a chave de toda a física médica: quando um núcleo tem excesso de protões ou neutrões, a força forte não consegue conter a repulsão, originando o decaimento radioativo espontâneo utilizado nos radiofármacos que o enfermeiro administra."
  },
  {
    id: 606,
    topicId: 6,
    question: "Em relação à independência de carga da Força Nuclear Forte, qual das seguintes afirmações é rigorosamente VERDADEIRA?",
    options: [
      "A atração nuclear forte possui rigorosamente a mesma intensidade entre dois protões (p-p), entre dois neutrões (n-n) ou entre um protão e um neutrão (p-n), desde que estejam no mesmo estado quântico de spin e momento angular.",
      "A força nuclear forte só atrai protões e repele neutrões.",
      "A força nuclear forte só existe em elementos gasosos e nunca em sólidos.",
      "A intensidade da força nuclear aumenta quanto mais afastados estiverem os núcleos no espaço."
    ],
    correctIndex: 0,
    explanation: "Experiências de espalhamento nuclear e estrutura de níveis comprovam a propriedade de 'independência de carga' da Força Forte: as forças nucleares fortes f(p-p), f(n-n) e f(p-n) são perfeitamente idênticas na componente nuclear pura (descontando a repulsão eletrostática de Coulomb que só afeta os protões). A nível da cromodinâmica quântica, a força forte entre nucleões decorre da troca de mésons pi (piões) entre os quarks que os constituem.",
    distractorAnalysis: [
      "Opção B é falsa; os neutrões participam plenamente da atração nuclear forte, sendo cruciais para a estabilidade.",
      "Opção C confunde o estado físico termodinâmico da matéria com a física do núcleo atómico.",
      "Opção D violaria o princípio de curto alcance da força forte (que cai a zero a distâncias superiores a 3 fm)."
    ],
    nursingApplication: "A independência de carga explica por que adicionar neutrões a um núcleo de número atómico elevado fornece 'cola nuclear forte' adicional sem aumentar a repulsão eletrostática, estabilizando núcleos pesados que de outro modo seriam instáveis."
  },
  {
    id: 607,
    topicId: 6,
    question: "No gráfico do Número de Neutrões (N) versus Número de Protões (Z) para os isótopos estáveis da natureza ('Faixa de Estabilidade Nuclear'), como evolui a razão N/Z à medida que o número atómico Z aumenta?",
    options: [
      "Para elementos leves (Z ≤ 20), a estabilidade ótima ocorre com N/Z ≈ 1 (número igual de protões e neutrões); para elementos mais pesados (Z > 20 até Z = 82), a razão N/Z necessária para estabilidade sobe progressivamente até atingir N/Z ≈ 1,5 (ex: no Chumbo-208, N/Z = 126/82 ≈ 1,54).",
      "A razão N/Z permanece estritamente constante em 0,1 para todos os núcleos.",
      "Elementos pesados tornam-se estáveis quando possuem zero neutrões no núcleo.",
      "A razão N/Z diminui para menos de 0,5 à medida que o elemento fica mais pesado."
    ],
    correctIndex: 0,
    explanation: "Como a força nuclear forte tem alcance muito curto (~1-2 fm) e só atrai nucleões vizinhos imediatos, enquanto a repulsão coulombiana entre protões tem longo alcance (1/r) e atua entre todos os protões do núcleo simultaneamente, a repulsão elétrica total cresce com Z(Z-1)/2 (crescimento quadrático). Para compensar essa repulsão crescente em núcleos volumosos, o núcleo necessita de um número desproporcionalmente maior de neutrões para diluir a carga positiva e fornecer coesão nuclear forte adicional, elevando N/Z de 1,0 até ~1,5 no chumbo (Z=82).",
    distractorAnalysis: [
      "Opção B violaria a estabilidade observada em toda a tabela dos nuclídeos.",
      "Opção C é um absurdo físico; núcleos pesados sem neutrões explodiriam instantaneamente por repulsão eletrostática pura.",
      "Opção D afirma o oposto da realidade biofísica da estabilidade nuclear."
    ],
    nursingApplication: "Compreender a curva N/Z permite ao enfermeiro prever o tipo de decaimento de um radioisótopo: núcleos com excesso de neutrões (acima da faixa de estabilidade) decaem por emissão beta negativa (β⁻), enquanto núcleos deficientes em neutrões (abaixo da faixa) decaem por emissão de positrões (β⁺) ou captura eletrónica, como o Flúor-18 utilizado no exame PET."
  },
  {
    id: 608,
    topicId: 6,
    question: "Acima de qual Número Atómico (Z) NENHUM elemento químico da tabela periódica possui isótopos estáveis na natureza, sendo todos eles obrigatoriamente radioativos e sujeitos a decaimento espontâneo?",
    options: [
      "Z > 82 (acima do Chumbo, Pb, Z = 82; todos os elementos a partir do Bismuto, Z = 83, e Polónio, Z = 84, até ao Urânio, Z = 92, são radioativos).",
      "Z > 10 (acima do Néon).",
      "Apenas acima de Z = 1000.",
      "Todos os elementos químicos são 100% estáveis e nenhum é radioativo."
    ],
    correctIndex: 0,
    explanation: "O Chumbo-208 (²⁰⁸₈₂Pb) é o nuclídeo estável mais pesado conhecido na natureza (possui uma 'dupla magia' com Z=82 e N=126). Para Z ≥ 83 (começando no Bismuto-209, que tem semivida extremamente longa, e todos os seguintes: Polónio-84, Rádon-86, Rádio-88, Urânio-92), o número colossal de protões gera uma repulsão coulombiana tão avassaladora que a força nuclear forte é incapaz de manter o núcleo estável indefinidamente. Todos sofrem decaimento radioativo espontâneo (sobretudo por emissão de partículas alfa e fissão).",
    distractorAnalysis: [
      "Opção B é falsa; existem centenas de isótopos estáveis entre Z=11 e Z=82 (como Ferro, Cobre, Prata, Ouro).",
      "Opção C é ficção; a tabela periódica termina atualmente no elemento Oganésson (Z=118).",
      "Opção D é uma negação absurda da radioatividade descoberta por Becquerel e o casal Curie."
    ],
    nursingApplication: "Radioisótopos pesados como o Rádio-223 (²²³Ra, emissor de partículas alfa aprovado no tratamento de metástases ósseas no cancro da próstata resistente à castração) situam-se acima de Z=82. O enfermeiro administra este alfa-emissor monitorizando parâmetros hematológicos (vigilância de mielossupressão)."
  },
  {
    id: 609,
    topicId: 6,
    question: "O conceito de 'Defeito de Massa' (Δm) na física nuclear traduz qual facto experimental incontestável?",
    options: [
      "A massa em repouso de um núcleo atómico ligado é rigorosamente MENOR do que a soma das massas individuais dos protões e neutrões livres que o constituem quando separados: Δm = [Z·m_p + N·m_n] - m_núcleo.",
      "A massa do núcleo aumenta em 100 vezes quando os nucleões se juntam.",
      "O defeito de massa refere-se a um erro de calibração das balanças laboratoriais.",
      "Os protões perdem todo o seu volume físico quando entram num núcleo estável."
    ],
    correctIndex: 0,
    explanation: "Se somarmos a massa de 2 protões livres e 2 neutrões livres (como os que formam o núcleo de Hélio-4, partícula alfa), a soma das massas é m_separados = 4,03188 u. Contudo, ao medir a massa real do núcleo de He-4 ligado num espetrómetro de massa de precisão, verifica-se que m_núcleo = 4,00151 u! Há uma perda real de massa de Δm = 0,03037 u (cerca de 0,75% da massa total). Essa 'massa desaparecida' foi convertida em Energia de Ligação Nuclear durante a fusão dos nucleões.",
    distractorAnalysis: [
      "Opção B violaria a conservação de energia e a estabilidade da matéria.",
      "Opção C confunde uma propriedade fundamental quântico-relativista da matéria com erros empíricos de pesagem.",
      "Opção D descreve uma contração geométrica fantasiosa sem sentido físico."
    ],
    nursingApplication: "O defeito de massa é a prova experimental direta da equação de Albert Einstein: ele confirma que a massa e a energia são duas faces da mesma moeda física universal. Na medicina nuclear, é precisamente essa energia de ligação libertada nas transições nucleares que é aproveitada na imagiologia e radioterapia."
  },
  {
    id: 610,
    topicId: 6,
    question: "A célebre equação de Albert Einstein (E = Δm · c²) relaciona o defeito de massa com a 'Energia de Ligação Nuclear' (Binding Energy, B). Qual é o significado físico da energia de ligação nuclear?",
    options: [
      "É a energia total necessária para desagregar e separar completamente todos os nucleões de um núcleo atómico até distâncias infinitas onde deixem de interagir mutuamente (ou, reciprocamente, a energia libertada quando nucleões livres se fundem para formar o núcleo).",
      "É a energia elétrica consumida pela lâmpada da sala de exames por hora.",
      "É a força muscular que o enfermeiro tem de exercer para empurrar uma cama articulada.",
      "É a pressão exercida pelo sangue na parede da aorta durante a sístole."
    ],
    correctIndex: 0,
    explanation: "A Energia de Ligação Nuclear (B = Δm · c²) é a energia de coesão do núcleo. Para estilhaçar um núcleo estável nos seus protões e neutrões constituintes livres, é obrigatório fornecer externamente uma energia igual a B. Como a velocidade da luz ao quadrado é um número gigantesco (c² ≈ 9 × 10¹⁶ m²/s²), uma minúscula fração de grama de defeito de massa liberta energias colossais. No sistema de unidades nucleares: 1 unidade de massa atómica (u) equivale a 931,5 Megaeletrão-Volts (MeV).",
    distractorAnalysis: [
      "Opção B confunde energias nucleares de milhões de eV com consumo elétrico de baixa voltagem.",
      "Opção C confunde mecânica macroscópica musculoesquelética com forças nucleares subatómicas.",
      "Opção D confunde hemodinâmica vascular com a física do núcleo atómico."
    ],
    nursingApplication: "Para o núcleo de Hélio-4, a energia de ligação total é de cerca de 28,3 MeV. Comparativamente, a quebra de uma ligação química de glicose ou ATP liberta apenas alguns eletrão-volts (~2 a 5 eV). As reações nucleares envolvem energias cerca de 1.000.000 de vezes superiores às reações químicas celulares, justificando os cuidados extremos com a proteção contra radiações."
  },
  {
    id: 611,
    topicId: 6,
    question: "O gráfico da 'Energia de Ligação Média por Nucleão' (B / A) em função do Número de Massa (A) exibe um pico máximo absoluto em torno de qual elemento químico e o que significa esse máximo?",
    options: [
      "Em torno do Ferro-56 (⁵⁶₂₆Fe) e Níquel-62 (⁶²₂₈Ni), onde B/A atinge aproximadamente 8,8 MeV por nucleão, representando os núcleos mais fortemente ligados e termodinamicamente mais estáveis de todo o Universo.",
      "No Hidrogénio-1 (¹H), com estabilidade máxima de 1000 MeV.",
      "No Urânio-238 (²³⁸U), sendo o urânio o núcleo mais estável e inerte do cosmos.",
      "A curva é uma linha reta horizontal perfeitamente constante sem qualquer pico."
    ],
    correctIndex: 0,
    explanation: "A curva de B/A vs A parte de valores baixos em núcleos muito leves (ex: Deutério, ²H, com B/A ≈ 1,1 MeV/nucleão), sobe acentuadamente até atingir o patamar máximo na região dos elementos de transição de massa intermediária (⁵⁶Fe com 8,79 MeV/nucleão e ⁶²Ni com 8,8 MeV/nucleão) e depois decai lentamente para os elementos pesados (²³⁸U com ~7,6 MeV/nucleão). Os núcleos de ferro e níquel são os mais firmemente ligados: não libertam energia por fusão nem por fissão.",
    distractorAnalysis: [
      "Opção B é incorreta; o próton isolado de ¹H tem energia de ligação zero (B = 0, pois não tem nucleões adicionais ligados).",
      "Opção C inverte a estabilidade; o Urânio é pesado e instável, encontrando-se na cauda descendente da curva.",
      "Opção D nega a morfologia universal clássica da curva de energia de ligação de Aston."
    ],
    nursingApplication: "A curva de B/A dita as duas grandes fontes de energia nuclear: 1) Núcleos muito leves abaixo do Ferro libertam energia ao fundirem-se (Fusão Nuclear das estrelas); 2) Núcleos muito pesados acima do Ferro libertam energia ao dividirem-se em fragmentos médios (Fissão Nuclear em reatores), processo que produz os radioisótopos médicos utilizados no hospital."
  },
  {
    id: 612,
    topicId: 6,
    question: "No 'Modelo das Camadas Nucleares' (Nuclear Shell Model, formulado por Maria Goeppert Mayer e J. Hans Jensen, Prémio Nobel de 1963), certos números específicos de protões ou neutrões conferem uma estabilidade nuclear extraordinária. Como são denominados estes números e quais são eles?",
    options: [
      "'Números Mágicos', correspondendo a 2, 8, 20, 28, 50, 82 e 126 nucleões, os quais preenchem completamente camadas quânticas nucleares fechadas de energia.",
      "Números primos múltiplos de 7 exclusivamente.",
      "Números quânticos magnéticos fracionários ímpares sem ordem física.",
      "Números inteiros negativos de antibióticos administrados na UCI."
    ],
    correctIndex: 0,
    explanation: "Analogamente às camadas eletrónicas dos gases nobres (2, 10, 18, 36... eletrões que conferem inércia química), o potencial nuclear médio com forte acoplamento spin-órbita organiza os protões e neutrões em níveis quânticos discretos. O preenchimento completo de uma camada ocorre para os Números Mágicos: 2, 8, 20, 28, 50, 82 (e 126 para neutrões). Núcleos com números mágicos de protões e/ou neutrões (como o ⁴₂He com 2p/2n, ¹⁶₈O com 8p/8n, ⁴⁰₂₀Ca com 20p/20n e ²⁰⁸₈₂Pb com 82p/126n) possuem abundância cósmica extraordinária e energia de ligação elevadíssima.",
    distractorAnalysis: [
      "Opções B, C e D propõem termos matemáticos ou clínicos sem qualquer suporte na mecânica quântica nuclear."
    ],
    nursingApplication: "O conhecimento dos números mágicos explica a estabilidade extrema das partículas Alfa (núcleo de ⁴₂He com 2 protões e 2 neutrões, 'duplamente mágico'): a sua coesão nuclear colossal faz com que núcleos pesados e instáveis ejetem preferencialmente aglomerados alfa pré-formados no decaimento radioativo alfa, em vez de ejetarem protões ou neutrões isolados."
  },
  {
    id: 613,
    topicId: 6,
    question: "O que caracteriza biofisicamente um 'Estado Isomérico' ou estado metaestável de um núcleo atómico, designado pela letra 'm' (como no Tecnécio-99m, ⁹⁹ᵐTc)?",
    options: [
      "É um estado nuclear excitado de energia que possui uma semivida longa e mensurável (horas ou dias) antes de decair para o estado fundamental por Transição Isomérica (emissão de radiação gama pura sem alteração de Z ou A).",
      "É um estado em que o núcleo perde todos os seus protões instantaneamente.",
      "É um átomo que se torna magnético e atrai agulhas cirúrgicas de longe.",
      "É um núcleo que se transforma em gás hélio quando arrefecido a 0 °C."
    ],
    correctIndex: 0,
    explanation: "A grande maioria dos estados nucleares excitados desexcita-se quase instantaneamente (em picosssegundos, ~10⁻¹² s) por emissão gama. Contudo, quando há uma grande diferença de spin nuclear e paridade entre o estado excitado e o estado fundamental, a desexcitação é mecanicamente retardada por regras de seleção quântica: o estado torna-se 'metaestável' (isómero nuclear, indicado por 'm'). O ⁹⁹ᵐTc permanece nesse estado excitado com uma semivida física de cerca de 6,01 horas antes de decair por Transição Isomérica para o ⁹⁹Tc, emitindo um fotão gama puro de 140 keV.",
    distractorAnalysis: [
      "Opção B causaria aniquilação do elemento químico, o que não ocorre na transição isomérica (Z e A mantêm-se rigorosamente constantes).",
      "Opção C confunde propriedades nucleares com ferromagnetismo macroscópico.",
      "Opção D é uma distorção dos estados físicos de mudança de fase."
    ],
    nursingApplication: "O Tecnécio-99m é o 'cavalo de batalha' da medicina nuclear mundial (usado em mais de 80% de todas as cintigrafias diagnósticas): a sua semivida metaestável de 6 horas é ideal (tempo suficiente para preparar o radiofármaco, administrar ao doente e adquirir as imagens numa câmara gama, com decaimento rápido subsequente que minimiza a dose de radiação residual para o doente e equipa de enfermagem)."
  },
  {
    id: 614,
    topicId: 6,
    question: "Na produção de radioisótopos médicos para imagiologia em reatores nucleares, como é obtido o Molibdénio-99 (⁹⁹Mo), precursor fundamental a partir do qual é gerado o Tecnécio-99m?",
    options: [
      "Através da Fissão Nuclear induzida do Urânio-235 bombardeado com neutrões térmicos no núcleo de um reator nuclear (com o ⁹⁹Mo a ser produzido com um rendimento de fissão de cerca de 6,1%), seguido de separação e purificação radioquímica rigorosa.",
      "Por simples destilação de água do mar fervida com sal de cozinha.",
      "Por queima química de carvão mineral em caldeiras hospitalares.",
      "Por centrifugação mecânica de sangue humano doado."
    ],
    correctIndex: 0,
    explanation: "O Molibdénio-99 (semivida T_1/2 ≈ 66 horas) é produzido primariamente em reatores nucleares de investigação através da fissão de alvos de Urânio-235: ²³⁵U + n -> fragmentos de fissão (incluindo ⁹⁹Mo) + 2 a 3 neutrões + 200 MeV. Após dissolução do alvo em células quentes blindadas, o ⁹⁹Mo é extraído quimicamente e acondicionado em colunas cromatográficas de alumina para fabrico dos geradores hospitalares de tecnécio.",
    distractorAnalysis: [
      "Opções B, C e D descrevem processos químicos e biológicos incapazes de transmutar elementos atómicos ou gerar reações nucleares de fissão."
    ],
    nursingApplication: "A cadeia global de fornecimento de ⁹⁹Mo depende de poucos reatores nucleares no mundo: quando ocorre paragem técnica de um reator, há escassez imediata de geradores de tecnécio nos hospitais. O enfermeiro de medicina nuclear gere a lista de espera e prioriza os doentes oncológicos e cardiológicos mais críticos para a realização de cintigrafias."
  },
  {
    id: 615,
    topicId: 6,
    question: "O funcionamento do 'Gerador de Radionuclídeos Mo-99/Tc-99m' (popularmente conhecido como 'vaca de tecnécio') baseia-se no princípio físico do 'Equilíbrio Transiente'. Como opera a eluição diária deste gerador pelo serviço hospitalar?",
    options: [
      "O Molibdénio-99 pai (T₁/₂ ≈ 66 h) adsorvido numa coluna de alumina decai continuamente para o Tecnécio-99m filho (T₁/₂ ≈ 6 h); ao passar Soro Fisiológico (NaCl 0,9%) estéril pela coluna, o pertecnetato de tecnécio solúvel é eluído no frasco de recolha ('ordenha'), enquanto o molibdénio insolúvel permanece retido na coluna de alumina.",
      "O gerador é ligado à tomada elétrica de 220V e funde átomos de hidrogénio em tecnécio por arco voltaico.",
      "O tecnécio é obtido por filtração de urina de doentes previamente irradiados.",
      "O gerador tem de ser agitado vigorosamente com a mão como uma garrafa de refrigerante."
    ],
    correctIndex: 0,
    explanation: "Num sistema pai-filho onde a semivida do pai é moderadamente superior à do filho (T_pai = 66 h vs T_filho = 6 h, razão ~11:1), atinge-se o Equilíbrio Transiente após cerca de 23 horas: a atividade do filho atinge o pico máximo e depois decai com a semivida aparente do pai. Como o MoO₄²⁻ (molibdato) liga-se fortemente à resina de óxido de alumínio e o TcO₄⁻ (pertecnetato) tem afinidade muito fraca, a passagem asséptica de NaCl a 0,9% elui seletivamente o pertecnetato de ⁹⁹ᵐTc puro no frasco de vácuo, regenerando-se nova atividade máxima em 24 horas.",
    distractorAnalysis: [
      "Opção B confunde processos nucleares radioquímicos espontâneos com eletricidade de rede.",
      "Opção C violaria todas as normas de radioproteção e higiene farmacêutica estéril.",
      "Opção D é perigosa; os geradores pesam dezenas de quilos devido à blindagem de chumbo e não devem sofrer impactos mecânicos."
    ],
    nursingApplication: "Na manipulação do gerador de tecnécio na câmara de fluxo laminar blindada, o profissional de saúde e o enfermeiro executam a eluição em condições estritas de assepsia para injetáveis (ausência de pirogénios e bactérias) e realizam o teste de controlo de qualidade para 'fuga de molibdénio' (Mo breakthrough): o limite máximo legal de contaminação por Mo-99 na solução de ⁹⁹ᵐTc é de apenas 0,15 kBq por MBq."
  },
  {
    id: 616,
    topicId: 6,
    question: "Os radioisótopos emissores de positrões utilizados na Tomografia por Emissão de Positrões (PET), como o Flúor-18 (¹⁸F, T₁/₂ ≈ 110 minutos), NÃO podem ser produzidos em reatores nucleares convencionais. Que equipamento de física nuclear é utilizado para a sua produção nos centros hospitalares?",
    options: [
      "Um Cíclotron Médico (acelerador circular de partículas), que acelera protões em espiral magnética com radiofrequência até energias de 10 a 18 MeV, bombardeando água enriquecida com Oxigénio-18 para desencadear a reação nuclear ¹⁸O(p, n)¹⁸F.",
      "Um forno micro-ondas industrial de alta potência.",
      "Uma centrifugadora de centrifugação lenta de plasma sanguíneo.",
      "Um detetor Geiger-Müller operando em modo inverso."
    ],
    correctIndex: 0,
    explanation: "Isótopos emissores de positrões (β⁺) são núcleos com 'excesso de protões' (abaixo da faixa de estabilidade): requerem a adição forçada de um protão ao núcleo contra a barreira de Coulomb. Isto só é exequível acelerando protões a altíssima velocidade num Cíclotron. No caso do ¹⁸F: um feixe de protões de alta energia atinge um alvo de água enriquecida com Oxigénio-18 [H₂¹⁸O]; o protão é absorvido e um neutrão é ejetado (reação ¹⁸₈O + p -> ¹⁸₉F + n). O ¹⁸F produzido é de imediato ligado quimicamente à molécula de desoxiglicose num módulo de síntese robotizado para produzir a ¹⁸F-FDG.",
    distractorAnalysis: [
      "Opção B confunde ondas eletromagnéticas domésticas com física de aceleradores de partículas de megavoltagem.",
      "Opção C é um método mecânico de separação densitológica celular.",
      "Opção D confunde um instrumento passivo de medição de radiação com fontes ativas de aceleração nuclear."
    ],
    nursingApplication: "Devido à semivida física ultracurta do Flúor-18 (apenas 110 minutos = menos de 2 horas!), o tempo é ouro na enfermagem de PET: o atraso de apenas 2 horas na administração da ¹⁸F-FDG ao doente reduz a radioatividade da seringa para metade (1 meia-vida) por decaimento físico contínuo dentro da blindagem de tungsténio."
  },
  {
    id: 617,
    topicId: 6,
    question: "O fenómeno de 'Tunelamento Quântico' (quantum tunneling) é indispensável para explicar como as partículas Alfa conseguem escapar do interior do núcleo atómico no decaimento alfa. Como se explica este fenómeno na física moderna?",
    options: [
      "Devido à natureza ondulatória da matéria (função de onda de De Broglie), existe uma probabilidade finita não-nula de a partícula alfa atravessar a barreira de potencial coulombiana repulsiva do núcleo, mesmo sem possuir energia cinética clássica suficiente para 'saltar' por cima da barreira.",
      "A partícula alfa utiliza escavadoras microscópicas para furar os protões do núcleo.",
      "A temperatura do núcleo atinge o zero absoluto e o núcleo dissolve-se espontaneamente.",
      "A gravidade atrai a partícula alfa em direção ao solo com força infinita."
    ],
    correctIndex: 0,
    explanation: "Na física clássica de Newton, se uma partícula não tiver energia suficiente para superar uma barreira de potencial elétrico, fica aprisionada para sempre (probabilidade de escape zero). Na mecânica quântica (resolvida por George Gamow em 1928), a partícula alfa comporta-se como uma onda quântica: a sua função de onda decai exponencialmente dentro da barreira de potencial mas emerge com amplitude diferente de zero do outro lado. Isto permite à partícula alfa 'tunelar' através da barreira proibida, sendo ejetada a alta velocidade.",
    distractorAnalysis: [
      "Opção B é uma metáfora absurda sem sustentação física.",
      "Opção C contradiz a termodinâmica de decaimento espontâneo contínuo a qualquer temperatura corporal.",
      "Opção D é uma afirmação sem sentido físico."
    ],
    nursingApplication: "O tunelamento quântico explica a gigantesca variação das semividas dos emissores alfa na medicina (Lei de Geiger-Nuttall): pequenas variações na energia da partícula alfa alteram a probabilidade de tunelamento em dezenas de ordens de grandeza, fazendo com que o Urânio-238 tenha uma meia-vida de 4,5 mil milhões de anos, enquanto o Polónio-214 decai em escassos microssegundos."
  },
  {
    id: 618,
    topicId: 6,
    question: "Na física das partículas elementares e constituição dos nucleões, os protões e neutrões não são partículas indivisíveis fundamentais, sendo formados por combinações de 'Quarks' mantidos unidos por glúons. Qual é a estrutura de quarks de um Protão e de um Neutrão?",
    options: [
      "Um Protão é composto por 2 quarks 'up' e 1 quark 'down' (uud, com carga 2/3 + 2/3 - 1/3 = +1); um Neutrão é composto por 1 quark 'up' e 2 quarks 'down' (udd, com carga 2/3 - 1/3 - 1/3 = 0).",
      "Um protão é feito de 3 eletrões comprimidos e um neutrão de 4 fotões.",
      "Ambos são constituídos exclusivamente por partículas beta positivas fundidas com água.",
      "Protões e neutrões são esferas maciças de chumbo microscópico sem estrutura interna."
    ],
    correctIndex: 0,
    explanation: "Segundo o Modelo Padrão da física de partículas (Gell-Mann e Zweig): os hádrons bariónicos são formados por três quarks de spin 1/2. O quark 'up' (u) possui carga fracionária +2/3 e o quark 'down' (d) possui carga -1/3. O protão tem a combinação uud: (+2/3) + (+2/3) + (-1/3) = +1e. O neutrão tem a combinação udd: (+2/3) + (-1/3) + (-1/3) = 0e. Os quarks trocam continuamente glúons (os mediadores da Força Forte) mantendo-se em confinamento de cor perpétuo.",
    distractorAnalysis: [
      "Opção B confunde léptons com quarks fermiónicos constitutivos.",
      "Opção C viola a conservação de carga e a física bariónica.",
      "Opção D descreve o modelo atomista indivisível da Grécia Antiga superado no século XX."
    ],
    nursingApplication: "No decaimento beta negativo (β⁻) que o enfermeiro encontra em doentes tratados com Iodo-131, o que ocorre a nível subatómico íntimo é a conversão de um quark down num quark up (d -> u + e⁻ + ν̄_e): o neutrão (udd) transforma-se num protão (uud), emitindo um eletrão rápido (partícula beta) e um antineutrino do elétrão."
  },
  {
    id: 619,
    topicId: 6,
    question: "Qual é a razão pela qual a massa do Neutrão livre (m_n ≈ 939,57 MeV/c²) é ligeiramente SUPERIOR à massa do Protão livre (m_p ≈ 938,27 MeV/c²)?",
    options: [
      "Porque o quark 'down' possui uma massa em repouso ligeiramente superior à do quark 'up', fazendo com que o neutrão livre isolado seja instável fora do núcleo atómico e sofra decaimento radioativo espontâneo beta negativo com uma semivida de cerca de 10 a 15 minutos (n -> p + e⁻ + ν̄_e).",
      "Porque o neutrão engoliu um átomo de ouro durante o Big Bang.",
      "Porque o protão perde massa ao suar dentro do núcleo.",
      "A massa de ambos é rigorosamente idêntica até à centésima casa decimal."
    ],
    correctIndex: 0,
    explanation: "Como a massa do quark d é maior que a do quark u (m_d ≈ 4,7 MeV vs m_u ≈ 2,2 MeV), a massa de repouso do neutrão (udd) é cerca de 1,29 MeV maior que a do protão (uud). Como na física as partículas decaem espontaneamente para estados de menor energia/massa, um neutrão livre isolado no vácuo é INSTÁVEL: desintegra-se espontaneamente por força nuclear fraca em protão, eletrão e antineutrino com uma meia-vida de cerca de 880 segundos (~14,7 minutos). Dentro de núcleos estáveis, a forte energia de ligação inibe este decaimento.",
    distractorAnalysis: [
      "Opção B e C são especulações fantasiosas sem base física.",
      "Opção D nega a diferença de massas medida experimentalmente com alta precisão."
    ],
    nursingApplication: "A instabilidade do neutrão livre fora do núcleo é uma salvaguarda biológica natural: neutrões libertados em reatores ou terapias de captura neutrónica (BNCT) decaem rapidamente em protões e eletrões inócuos se escaparem para o ambiente, reduzindo a permanência de feixes neutrónicos descontrolados."
  },
  {
    id: 620,
    topicId: 6,
    question: "No contexto da Fissão Nuclear em cadeia controlada para produção de energia e radioisótopos médicos, qual é o papel desempenhado pelo 'Moderador de Neutrões' (como a Água Leve, Água Pesada ou Grafite) no núcleo do reator?",
    options: [
      "Desacelerar por colisões elásticas sucessivas os neutrões rápidos altamente energéticos emitidos na fissão (de ~2 MeV para ~0,025 eV, neutrões térmicos lentos), aumentando drasticamente a probabilidade quântica (secção eficaz) de causarem nova fissão no Urânio-235.",
      "Absorver 100% de todos os neutrões para parar o reator imediatamente.",
      "Aquecer os neutrões para que derretam os átomos de chumbo.",
      "Substituir os protões do núcleo por eletrões."
    ],
    correctIndex: 0,
    explanation: "Os neutrões nascem na fissão com energias cinéticas muito elevadas (neutrões rápidos, v ≈ 20.000 km/s). Contudo, a probabilidade quântica (secção eficaz de captura induzida de fissão, σ_fissão) de um átomo de ²³⁵U capturar um neutrão e cindi-lo é centenas de vezes superior para neutrões lentos em equilíbrio térmico à temperatura ambiente (~0,025 eV, v ≈ 2,2 km/s). O moderador é constituído por núcleos de massa atómica semelhante à do neutrão (hidrogénio ou deutério da água): em cada colisão elástica frontal, o neutrão transfere grande parte da sua energia cinética para o núcleo moderador, travando suavemente até ao regime térmico.",
    distractorAnalysis: [
      "Opção B descreve a função das 'barras de controlo' ou de paragem de emergência (feitas de Cádmio ou Boro, que são venenos neutrónicos absorvedores), e não do moderador.",
      "Opção C e D são impossibilidades mecânicas e atómicas."
    ],
    nursingApplication: "A compreensão de que neutrões rápidos podem ser travados por materiais ricos em hidrogénio é o esteio da blindagem contra neutrões: salas com aceleradores lineares médicos de alta energia (>10 MV) onde surgem neutrões secundários por fotoneutrões utilizam portas e paredes com parafina ou polietileno borado (materiais com densos átomos de hidrogénio para moderar e boro para absorver neutrões), protegendo a circulação de enfermeiros."
  },
  {
    id: 621,
    topicId: 6,
    question: "A força nuclear forte é frequentemente descrita como possuindo um caráter de 'Repulsão a Distâncias Extremamente Curtas' (hard core). O que aconteceria ao núcleo atómico se a força forte não se tornasse fortemente repulsiva para distâncias inferiores a cerca de 0,5 femtómetros?",
    options: [
      "Os nucleões colapsariam e fundir-se-iam todos num ponto infinitesimal singular com volume nulo e densidade infinita, impossibilitando a existência do volume nuclear finito e da matéria como a conhecemos.",
      "O núcleo explodiria em partículas de luz visível amarela.",
      "Os eletrões seriam repelidos para fora do planeta Terra.",
      "A gravidade do átomo transformar-se-ia em eletricidade estática."
    ],
    correctIndex: 0,
    explanation: "A Força Forte entre nucleões tem um comportamento fascinante: é fortemente atrativa na faixa de 0,8 a 2,0 fm (mantendo o núcleo coeso), mas torna-se violentamente REPULSIVA a distâncias inferiores a 0,5 fm ('core repulsivo' atribuído à sobreposição das nuvens de quarks e ao Princípio de Exclusão de Pauli entre quarks da mesma cor e sabor). Esta repulsão impede que os protões e neutrões caiam uns para dentro dos outros, garantindo que o núcleo atómico mantenha um volume físico mensurável e impedindo o colapso da matéria cósmica.",
    distractorAnalysis: [
      "Opções B, C e D descrevem cenários fantasiosos sem base nas equações de potencial de Yukawa ou cromodinâmica quântica."
    ],
    nursingApplication: "Este equilíbrio quântico entre atração e repulsão no núcleo assegura a estabilidade mecânica dos elementos químicos que compõem o corpo humano (oxigénio, carbono, hidrogénio, cálcio), garantindo a solidez dos ossos e a integridade de todos os tecidos biológicos monitorizados na prática de enfermagem."
  },
  {
    id: 622,
    topicId: 6,
    question: "O fenómeno de 'Captura Neutrónica' seguida de decaimento beta negativo é utilizado em reatores nucleares para produzir o radioisótopo Cobalto-60 (⁶⁰₂₇Co, fonte clássica de teleterapia em oncologia) a partir do Cobalto-59 estável. Qual é a reação nuclear envolvida?",
    options: [
      "⁵⁹₂₇Co + ¹₀n -> ⁶⁰₂₇Co + γ (captura radiativa de um neutrão térmico pelo núcleo alvo estável de Cobalto-59).",
      "⁵⁹Co funde-se com um átomo de ferro gerando ouro puro.",
      "O cobalto perde 10 protões por centrifugação mecânica.",
      "O núcleo de Cobalto-59 é bombardeado com luz ultravioleta comum."
    ],
    correctIndex: 0,
    explanation: "A ativação neutrónica por captura radiativa (reação do tipo (n, γ)) ocorre quando um núcleo estável absorve um neutrão lento do fluxo do reator: o Cobalto-59 natural (Z=27, A=59) captura um neutrão tornando-se Cobalto-60 (Z=27, A=60). O novo núcleo encontra-se num estado excitado e liberta a energia excedente por emissão de fotões gama de captura. O ⁶⁰Co resultante é um radioisótopo artificial com semivida de cerca de 5,27 anos que decai por emissão β⁻ seguida de dois fotões gama altamente energéticos de 1,17 MeV e 1,33 MeV.",
    distractorAnalysis: [
      "Opção B confunde a alquimia medieval mítica com reações nucleares reais da física.",
      "Opção C violaria o número atómico do cobalto e a mecânica das forças nucleares.",
      "Opção D é incorreta porque a luz ultravioleta possui energia centenas de milhares de vezes inferior à necessária para transmutar núcleos estáveis."
    ],
    nursingApplication: "As bombas de Cobalto-60 foram pioneiras na radioterapia oncológica moderna (teleterapia). Embora amplamente substituídas por aceleradores lineares elétricos (que não utilizam fontes radioativas permanentes), ainda existem unidades de Cobalto em muitos países e no sistema 'Gamma Knife' de radiocirurgia cerebral estocástica, onde o enfermeiro vigia o posicionamento milimétrico do doente."
  },
  {
    id: 623,
    topicId: 6,
    question: "Em física nuclear, o conceito de 'Secção Eficaz' (cross section, representada pela letra grega σ e medida historicamente na unidade Barn, 1 barn = 10⁻²⁸ m²) quantifica qual propriedade física?",
    options: [
      "A probabilidade geométrica e quântica de ocorrência de uma determinada reação nuclear quando um feixe de projéteis (como neutrões ou protões) incide sobre um núcleo alvo.",
      "A área da sala do reator nuclear medida em metros quadrados.",
      "O tempo que o enfermeiro demora a calçar luvas estéreis plúmbeas.",
      "A percentagem de álcool na solução desinfetante hospitalar."
    ],
    correctIndex: 0,
    explanation: "A secção eficaz (cross section, σ) é a área transversal fictícia efetiva com que um núcleo alvo se apresenta à partícula incidente para que ocorra uma reação nuclear específica (espalhamento, captura, fissão): expressa-se em barns (1 b = 10⁻²⁴ cm² = 10⁻²⁸ m², aproximadamente a área geométrica de um núcleo pesado). Quanto maior for a secção eficaz de um núcleo para uma determinada reação, maior é a probabilidade estatística de colisão produtiva.",
    distractorAnalysis: [
      "Opção B confunde uma grandeza subatómica quântica microscópica com dimensões de engenharia civil.",
      "Opção C e D misturam rotinas clínicas hospitalares sem qualquer ligação à física nuclear."
    ],
    nursingApplication: "A secção eficaz governa a escolha de materiais de proteção: o Boro-10 e o Cádmio-113 possuem secções eficazes colossais de captura para neutrões térmicos (milhares de barns), sendo por isso adicionados a plásticos e betões de blindagem para absorver neutrões secundários em salas de radioterapia e proteger o posto de enfermagem."
  },
  {
    id: 624,
    topicId: 6,
    question: "Na estrutura quântica do átomo de acordo com os 'Postulados de Niels Bohr' (1913), como se explica a emissão ou absorção de fotões eletromagnéticos pelos eletrões orbitais?",
    options: [
      "Os eletrões orbitam apenas em órbitas estacionárias quantizadas sem emitir radiação; a emissão ou absorção de um fotão ocorre unicamente quando o eletrão salta (transição quântica) entre dois níveis discretos, com energia do fotão igual à diferença de energias: E = E_final - E_inicial = h · f.",
      "Os eletrões emitem radiação contínua até caírem no núcleo e destruírem o átomo em 1 picosssegundo.",
      "Os eletrões orbitam ao acaso sem qualquer restrição de energia mecânica.",
      "A emissão de fotões decorre exclusivamente do atrito dos eletrões contra o osso do doente."
    ],
    correctIndex: 0,
    explanation: "Pela eletrodinâmica clássica de Maxwell, um eletrão em órbita circular acelerada deveria perder energia continuamente por radiação e espiralar para dentro do núcleo em 10⁻¹¹ segundos (átomo clássico instável). Bohr postulou que: 1) Os eletrões movem-se apenas em órbitas estacionárias permitidas com momento angular quantizado (L = n · ℏ); 2) O átomo não irradia nos estados estacionários; 3) A radiação só é emitida ou absorvida durante uma transição quântica entre dois níveis (ΔE = E₂ - E₁ = h · f).",
    distractorAnalysis: [
      "Opção B descreve a catástrofe eletrodinâmica clássica que a teoria quântica de Bohr veio precisamente resolver.",
      "Opção C ignora a quantização estrita dos níveis de energia atómicos.",
      "Opção D é uma afirmação sem base na física quântica fundamental."
    ],
    nursingApplication: "O modelo de Bohr explica a génese da Radiação X Característica e a base da espectrofotometria utilizada nos oxímetros de pulso que o enfermeiro coloca no dedo do doente: a absorção quantizada de luz vermelha (660 nm) e infravermelha (940 nm) pelos eletrões da oxi-hemoglobina e desoxi-hemoglobina permite calcular a saturação periférica de oxigénio (SpO₂) instantânea."
  },
  {
    id: 625,
    topicId: 6,
    question: "O fenómeno da 'Fissão Nuclear Espontânea' difere da fissão induzida por ocorrer sem a necessidade de bombardeamento por um neutrão externo. Em qual dos seguintes radioisótopos pesados este fenómeno é clinicamente relevante como fonte de neutrões?",
    options: [
      "Califórnio-252 (²⁵²Cf), um transurânico pesado artificial que sofre fissão espontânea com emissão contínua de neutrões de alta energia, utilizado em braquiterapia avançada e calibração de dosímetros.",
      "Hidrogénio-1 leve da água pura.",
      "Carbono-12 estável do tecido muscular.",
      "Sódio-23 do soro fisiológico."
    ],
    correctIndex: 0,
    explanation: "Em núcleos artificiais transurânicos extremamente pesados como o Califórnio-252 (Z=98, T_1/2 ≈ 2,6 anos), a repulsão eletrostática entre os seus 98 protões é tão colossal que a barreira contra a fissão pode ser superada por tunelamento quântico espontâneo: cerca de 3,1% de todas as desintegrações do ²⁵²Cf são fissões espontâneas, cada uma ejetando em média 3,8 neutrões rápidos. Constitui uma fonte de neutrões compacta e potente sem necessidade de reator nuclear.",
    distractorAnalysis: [
      "Opções B, C e D são nuclídeos leves perfeitamente estáveis que nunca sofrem fissão nuclear espontânea."
    ],
    nursingApplication: "Fontes seladas de Califórnio-252 exigem cuidados de radioproteção singulares por parte do enfermeiro: blindagens comuns de chumbo (adequadas para raios gama) são ineficazes contra neutrões rápidos, exigindo contentores volumosos de parafina hidrogenada borada ou água para travar os neutrões antes do chumbo."
  },
  {
    id: 626,
    topicId: 6,
    question: "A estabilidade nuclear de nuclídeos com número ímpar de protões e número ímpar de neutrões (núcleos Ímpar-Ímpar) é extremamente rara na natureza. Dos mais de 250 nuclídeos estáveis conhecidos, quantos são núcleos ímpar-ímpar estáveis?",
    options: [
      "Apenas 4 núcleos leves estáveis na natureza (²₁H - Deutério, ⁶₃Li - Lítio-6, ¹⁰₅B - Boro-10 e ¹⁴₇N - Azoto-14), devido ao efeito de emparelhamento de spin dos nucleões que desfavorece configurações sem pares completos.",
      "Mais de 99% de todos os elementos estáveis do universo.",
      "Exatamente 500 núcleos pesados estáveis de urânio.",
      "Nenhum, não existindo qualquer átomo estável com número ímpar de protões."
    ],
    correctIndex: 0,
    explanation: "A força nuclear forte inclui uma energia de emparelhamento (pairing energy): protões com spins opostos emparelham-se entre si com grande ganho de estabilidade, e o mesmo fazem os neutrões. Núcleos Par-Par (Z par e N par) são os mais estáveis e abundantes (mais de 160 nuclídeos estáveis). Núcleos Par-Ímpar ou Ímpar-Par têm estabilidade intermediária (~100 estáveis). Núcleos Ímpar-Ímpar possuem um protão desemparelhado e um neutrão desemparelhado, sendo energeticamente muito desfavoráveis: existem apenas 4 núcleos ímpar-ímpar leves estáveis em toda a natureza (²H, ⁶Li, ¹⁰B e ¹⁴N).",
    distractorAnalysis: [
      "Opções B e C invertem a física da energia de emparelhamento da fórmula semi-empírica de massa de Weizsäcker.",
      "Opção D é refutada pela abundância de elementos como o Azoto-14 (o gás mais abundante na atmosfera terrestre com Z=7 e N=7)."
    ],
    nursingApplication: "O efeito de emparelhamento de spin explica por que a maioria dos radiofármacos emissores beta instáveis administrados pelo enfermeiro são nuclídeos ímpar-ímpar ou ímpar-par que decaem rapidamente em busca da configuração par-par de menor energia e maior estabilidade termodinâmica."
  },
  {
    id: 627,
    topicId: 6,
    question: "Em termos de radiofísica, o que se entende por 'Transmutação Nuclear'?",
    options: [
      "A conversão espontânea ou artificial de um elemento químico noutro elemento químico diferente, decorrente da alteração do número de protões (Z) no interior do núcleo atómico através de emissão radioativa ou colisão de partículas.",
      "A dissolução de um comprimido de paracetamol num copo com água.",
      "A mudança do estado sólido para líquido sem alteração atómica.",
      "A alteração temporária da frequência cardíaca durante a febre."
    ],
    correctIndex: 0,
    explanation: "A identidade química de um elemento é definida exclusivamente pelo seu Número Atómico Z (número de protões). A Transmutação Nuclear ocorre quando Z se altera: seja por decaimento radioativo espontâneo (ex: emissão alfa onde Z diminui em 2; decaimento beta onde um neutrão vira protão aumentando Z em 1) ou por reações nucleares induzidas em laboratório (descoberta por Rutherford em 1919 ao transmutar azoto em oxigénio: ¹⁴N + α -> ¹⁷O + p). Realizou-se assim o antigo sonho da alquimia de transformar um elemento químico noutro.",
    distractorAnalysis: [
      "Opção B é um fenómeno de dissolução molecular puramente químico sem alteração dos núcleos atómicos.",
      "Opção C descreve uma transição de fase termodinâmica clássica (fusão da água).",
      "Opção D é uma resposta autonómica fisiológica cardiovascular."
    ],
    nursingApplication: "No internamento de um doente com cancro diferenciado da tiroide que toma uma cápsula oral de Iodo-131 (¹³¹₅₃I), ocorre uma transmutação nuclear em tempo real dentro das células neoplásicas: cada átomo de Iodo-131 transmuta-se espontaneamente num átomo de Xénon-131 estável (¹³¹₅₄Xe) ao emitir uma partícula beta negativa que destrói o DNA do tumor."
  },
  {
    id: 628,
    topicId: 6,
    question: "A força nuclear fraca (Interação Fraca) é a quarta força fundamental da natureza. Qual é a sua função exclusiva nos processos nucleares médicos?",
    options: [
      "É responsável pelo decaimento beta (β⁻ e β⁺) e pela captura eletrónica, permitindo que um quark mude de sabor e que protões e neutrões se interconvertam mutuamente no núcleo.",
      "É a força que empurra os ossos do doente para a cama hospitalar.",
      "É a força responsável pelo atrito da borracha do calçado do enfermeiro no chão.",
      "É a força que atrai o ferro para a ponta da agulha de sutura."
    ],
    correctIndex: 0,
    explanation: "A Força Nuclear Fraca é a única interação fundamental capaz de mudar o 'sabor' dos quarks (mediada pelos bosões vetoriais intermediários massivos W⁺, W⁻ e Z⁰). Sem a interação fraca, protões e neutrões não poderiam transformar-se uns nos outros: não existiria decaimento beta negativo (n -> p + e⁻ + ν̄_e) nem emissão de positrões (p -> n + e⁺ + ν_e), e as reações de fusão nuclear que alimentam a luz do Sol não poderiam ocorrer.",
    distractorAnalysis: [
      "Opção B descreve a gravidade newtoniana macroscópica.",
      "Opção C descreve o atrito eletrostático molecular mecânico.",
      "Opção D descreve o ferromagnetismo de dipolos atómicos."
    ],
    nursingApplication: "A força nuclear fraca rege diretamente a emissão do positrão do Flúor-18 no exame PET que o enfermeiro programa e apoia: a transformação fraca p -> n liberta o positrão que colidirá com um eletrão tecidual, gerando os fotões de aniquilação que desenham o mapa metabólico tumoral no monitor."
  },
  {
    id: 629,
    topicId: 6,
    question: "O conceito de 'Pressão de Radiação' foi previsto teoricamente por James Clerk Maxwell. Embora insignificante para a luz visível de uma lâmpada, qual é a relevância da pressão exercida por feixes colimados de fotões de alta energia ou partículas em física médica?",
    options: [
      "Cada fotão transporta momento linear (p = E / c); ao colidir ou ser absorvido por uma célula tumoral, transfere momento mecânico que gera tensões de corte e deformações microscópicas no citoesqueleto celular.",
      "A pressão de radiação empurra o doente para fora da maca durante a radiografia.",
      "A pressão de radiação faz explodir os aparelhos de ar condicionado da enfermaria.",
      "A pressão de radiação é sempre nula porque a luz não tem qualquer energia."
    ],
    correctIndex: 0,
    explanation: "Embora os fotões não possuam massa de repouso (m₀ = 0), eles transportam momento linear relativista dado pela relação de De Broglie / Einstein: p = h / λ = E / c. Quando um feixe intenso de radiação eletromagnética é absorvido ou refletido por um obstáculo, a taxa de transferência de momento por unidade de área por segundo gera uma força real e mensurável (Pressão de Radiação: P = I / c para absorção total). Em biofísica celular moderna, feixes de laser infravermelho concentrados utilizam esta pressão para manipular organelos vivos sem lhes tocar ('pinças óticas', Prémio Nobel de 2018).",
    distractorAnalysis: [
      "Opção B exagera grotescamente uma força microscópica subnanonewtoniana que é impercetível macroscopicamente para o ser humano.",
      "Opção C é um disparate sem relação com a física fotónica.",
      "Opção D nega a equação universal de Einstein que dota os fotões de energia E = h · f e momento linear."
    ],
    nursingApplication: "As pinças óticas baseadas na pressão de radiação fotónica são hoje utilizadas na investigação avançada de enfermagem e hematologia para medir a viscoelasticidade da membrana dos glóbulos vermelhos e a força mecânica de adesão de bactérias patogénicas aos cateteres vasculares."
  },
  {
    id: 630,
    topicId: 6,
    question: "No núcleo atómico, a emissão de um fotão de Radiação Gama (γ) decorre de qual processo de transição quântica?",
    options: [
      "Da desexcitação quântica de um núcleo atómico que se encontrava num nível nuclear excitado de energia, transicionando para um nível de menor energia (ou fundamental) sem qualquer alteração no seu número de protões (Z) ou número de massa (A).",
      "Da fusão espontânea de dois eletrões dentro da camada K.",
      "Da quebra de uma molécula de água em oxigénio líquido.",
      "Do congelamento rápido de um átomo de chumbo."
    ],
    correctIndex: 0,
    explanation: "Após sofrer um decaimento alfa ou beta, o núcleo filho frequentemente não se encontra no seu estado fundamental, mas num estado nuclear excitado com excesso de energia mecânica quântica. A desexcitação ocorre através da emissão de um ou mais fotões de altíssima energia (fotões gama, γ): como o fotão gama é radiação eletromagnética pura (sem massa e sem carga elétrica), o núcleo perde energia sem alterar o seu número atómico (ΔZ = 0) nem o seu número de massa (ΔA = 0). O nuclídeo pai e o filho permanecem sendo o mesmo elemento químico.",
    distractorAnalysis: [
      "Opção B violaria as leis de conservação de carga de férmions léptons.",
      "Opção C descreve a eletrólise química molecular da água, sem relação com transições nucleares.",
      "Opção D descreve uma transição térmica externa que não excita nem desexcita níveis nucleares de MeV."
    ],
    nursingApplication: "Os fotões gama puros emitidos em transições nucleares (como os 140 keV do Tecnécio-99m) possuem altíssima penetrância nos tecidos humanos e são detetados externamente pela câmara gama sem provocar danos teciduais locais severos (baixo LET), tornando-os ideais para diagnósticos imagiológicos seguros em enfermagem e medicina."
  },
  {
    id: 631,
    topicId: 6,
    question: "A estabilidade dos núcleos atómicos é frequentemente representada pela fórmula semi-empírica de massa de Bethe-Weizsäcker (Modelo da Gota Líquida). Quais são os termos que compõem esta fórmula biofísica?",
    options: [
      "Termo de volume (coesão forte), termo de superfície (nucleões na borda têm menos vizinhos), termo de repulsão de Coulomb, termo de assimetria (penalização para N ≠ Z) e termo de emparelhamento de spin.",
      "Termo de pressão atmosférica, termo de cor da pele e termo de temperatura da cama.",
      "Termo de velocidade do vento e humidade relativa do ar hospitalar.",
      "Apenas a multiplicação do peso do doente pela aceleração da gravidade."
    ],
    correctIndex: 0,
    explanation: "Carl Friedrich von Weizsäcker modelou o núcleo como uma gota de fluido incompressível carregada: 1) Energia de volume (+a_v · A): atração forte entre vizinhos; 2) Energia de superfície (-a_s · A²/³): correção para os nucleões superficiais com menos ligações (tensão superficial nuclear); 3) Energia de Coulomb (-a_c · Z²/A¹/³): repulsão elétrica destrutiva entre protões; 4) Energia de assimetria (-a_a · (A-2Z)²/A): penalização quântica quando N se afasta de Z; 5) Energia de emparelhamento (δ): bónus de estabilidade para núcleos Par-Par.",
    distractorAnalysis: [
      "Opções B, C e D são invenções absurdas que misturam meteorologia, clínica geral e mecânica clássica sem relação com a física nuclear."
    ],
    nursingApplication: "O modelo da gota líquida elucida perfeitamente por que a fissão nuclear ocorre em núcleos volumosos: a repulsão de Coulomb supera a tensão superficial da gota, fazendo-a oscilar, estrangular-se e cindir-se em duas gotas menores, princípio que fundamenta a produção dos radiofármacos que o enfermeiro manipula."
  },
  {
    id: 632,
    topicId: 6,
    question: "Em radiofarmácia hospitalar, a 'Pureza Radionuclídica' de um preparado de Tecnécio-99m refere-se a qual parâmetro de controlo de qualidade e segurança do doente?",
    options: [
      "À fração percentual da radioatividade total presente na amostra que é efetivamente devida ao radionuclídeo desejado (⁹⁹ᵐTc), verificando-se a ausência de contaminantes de meia-vida longa como o Molibdénio-99 (⁹⁹Mo).",
      "À percentagem de açúcar dissolvido na ampola.",
      "À transparência visual da solução ao ser observada contra uma lâmpada fluorescente.",
      "À ausência de poeiras no exterior da embalagem de cartão."
    ],
    correctIndex: 0,
    explanation: "A Pureza Radionuclídica define a razão entre a atividade do radionuclídeo correto e a atividade radioativa total do eluato: se uma amostra de ⁹⁹ᵐTc contiver traços de ⁹⁹Mo (Molibdénio-99), o doente receberá uma dose desnecessária e perigosa de radiação beta interna no fígado e medula óssea durante semanas (devido à meia-vida de 66 horas do Mo-99). O teste do eluato na câmara de ionização blindada com chumbo ('Mo-breakthrough test') garante que a contaminação por Mo-99 não ultrapassa 0,15 kBq por MBq de Tc-99m no momento da injeção.",
    distractorAnalysis: [
      "Opção B confunde pureza radioisotópica com aditivos energéticos alimentares.",
      "Opção C descreve uma inspeção visual de partículas macroscópicas límpidas, que avalia o aspeto físico, não a pureza dos núcleos atómicos.",
      "Opção D refere-se a limpeza de embalagens terciárias secundárias de transporte."
    ],
    nursingApplication: "A administração de radiofármacos pelo enfermeiro exige a verificação dos boletins de controlo de qualidade assinados pelo radiofarmacêutico: administrar uma dose com pureza radionuclídica violada submeteria o doente a irradiação interna severa desnecessária por contaminantes radioativos de vida longa."
  },
  {
    id: 633,
    topicId: 6,
    question: "A 'Pureza Radioquímica' difere da pureza radionuclídica. O que avalia a pureza radioquímica numa preparação injectável de ⁹⁹ᵐTc-MDP utilizada para cintigrafia óssea?",
    options: [
      "A fração percentual do radionuclídeo que está rigorosamente ligada à forma química molecular pretendida (ao ligante MDP / metilenodifosfonato), garantindo que não existe excesso de tecnécio livre hidrolisado ou pertecnetato livre que se desviaria para a tiroide e estômago em vez de fixar no osso.",
      "A concentração de iões chumbo na agulha de injeção.",
      "A ausência de bactérias vivas na solução aquosa.",
      "A pressão do gás nitrogénio no interior do frasco."
    ],
    correctIndex: 0,
    explanation: "Na marcação radiofarmacêutica: 1) Pureza Radionuclídica = 100% dos átomos radioativos são ⁹⁹ᵐTc; 2) Pureza Radioquímica = o ⁹⁹ᵐTc está quimicamente quelado na molécula carreadora correta (ex: MDP para osso, DMSA para córtex renal, Sestamibi para miocárdio). Se a ligação química falhar e houver ⁹⁹ᵐTc livre (pertecnetato não-reduzido), o radioisótopo acumula-se no estômago, tiroide e glândulas salivares, arruinando a qualidade diagnóstica da imagem óssea e irradiando órgãos saudáveis.",
    distractorAnalysis: [
      "Opção B refere-se a contaminação por metais pesados tóxicos inorgânicos (pureza química).",
      "Opção C define a 'Esterilidade Microbiológica' ou pureza biológica do injetável.",
      "Opção D é um parâmetro pneumático secundário de acondicionamento sob vácuo estéril."
    ],
    nursingApplication: "Se o enfermeiro detetar captação intensa inesperada de radioatividade na tiroide e no estômago durante uma cintigrafia óssea que deveria concentrar-se exclusivamente no esqueleto, suspeita de falha na pureza radioquímica do kit de marcação (oxidação prematura do cloreto estanoso redutor), registando o incidente para repetição do controlo radioquímico por cromatografia de camada fina (TLC)."
  },
  {
    id: 634,
    topicId: 6,
    question: "O fenómeno da 'Barreira de Potencial de Coulomb' que impede que dois núcleos carregados positivamente se aproximem à distância da força nuclear forte é superado na medicina através de quais energias cinéticas em cíclotrons?",
    options: [
      "Aceleração de protões através de potenciais elétricos de Megavolts, conferindo-lhes energia cinética suficiente (>10 a 15 MeV) para vencer a repulsão eletrostática mútua e colidir com o núcleo alvo à distância de ação da força forte.",
      "Aquecimento da água com uma resistência térmica de café comum a 100 °C.",
      "Aplicação de um íman de frigorífico comum sobre uma placa de vidro.",
      "Injeção de ar comprimido a 2 atmosferas num tubo de ensaio."
    ],
    correctIndex: 0,
    explanation: "Dois núcleos de carga positiva repelem-se com força que cresce assintoticamente com 1/r²: a barreira de Coulomb atinge picos de vários MeV. À temperatura ambiente (energia térmica de ~0,025 eV), a probabilidade de colisão nuclear é zero absoluto. Para transmutar um núcleo num acelerador de partículas (cíclotron), é indispensável acelerar as partículas projéteis a velocidades relativistas (mais de 10% da velocidade da luz) com energias de dezenas de milhões de eletrão-volts (MeV), permitindo vencer a barreira eletrostática e penetrar no raio de alcance da atração nuclear forte.",
    distractorAnalysis: [
      "Opção B fornece frações de eletrão-volt (0,03 eV), milhões de vezes abaixo da barreira de Coulomb.",
      "Opções C e D não possuem a intensidade física necessária para acelerar partículas subatómicas contra campos nucleares."
    ],
    nursingApplication: "Os cíclotrons hospitalares onde se produzem radioisótopos para os exames dos doentes são instalados em 'bunkers' com paredes de betão armado de 1,5 a 2 metros de espessura: o enfermeiro sabe que a aceleração dos feixes a energias de MeV gera campos intensos de radiação e neutrões secundários que exigem blindagem civil maciça."
  },
  {
    id: 635,
    topicId: 6,
    question: "O neutrão foi descoberto experimentalmente por James Chadwick em 1932. Qual foi a experiência biofísica histórica que permitiu comprovar a existência desta partícula neutra sem carga?",
    options: [
      "O bombardeamento de Berílio-9 com partículas alfa ejetadas de uma fonte de Polónio, produzindo uma radiação neutra altamente penetrante que, ao colidir com uma camada de cera de parafina rica em hidrogénio, ejetava protões com elevada energia cinética por colisão mecânica elástica frontal.",
      "A observação de faíscas elétricas num tubo de água com sal.",
      "A medição da temperatura da água fervente numa caldeira a vapor.",
      "A pesagem de um fragmento de madeira num dia de chuva."
    ],
    correctIndex: 0,
    explanation: "Na experiência de Chadwick: partículas alfa atingiram um alvo de berílio (⁹Be + α -> ¹²C + n), emitindo uma radiação desconhecida que atravessava espessos blocos de chumbo sem ser desviada por campos elétricos ou magnéticos (logo, desprovida de carga elétrica). Ao interpor uma placa de parafina (composta por hidrocarbonetos com núcleos de hidrogénio/protões de massa quase idêntica à do neutrão), a transferência mecânica de momento linear em choques elásticos frontais ejetou protões velozes detetados numa câmara de ionização. A aplicação das leis de conservação de energia e momento linear de Newton permitiu a Chadwick calcular com precisão matemática a massa da nova partícula: o Neutrão.",
    distractorAnalysis: [
      "Opções B, C e D descrevem experiências eletroquímicas ou termodinâmicas sem qualquer relevância para a descoberta das partículas subatómicas fundamentais."
    ],
    nursingApplication: "A experiência histórica de Chadwick estabelece um princípio basilar da radioproteção que o enfermeiro utiliza hoje: o melhor material para travar e proteger contra feixes perigosos de neutrões é a água, o polietileno ou a cera de parafina (substâncias ricas em átomos leves de hidrogénio que desaceleram neutrões por colisão de massas idênticas)."
  },
  {
    id: 636,
    topicId: 6,
    question: "No núcleo do átomo de Carbono-14 (¹⁴₆C, utilizado na datação radiométrica de tecidos biológicos e em pesquisas biomédicas com semivida de 5730 anos), qual é a contagem de protões e neutrões presentes?",
    options: [
      "6 protões e 8 neutrões (Z = 6, N = 14 - 6 = 8).",
      "14 protões e zero neutrões.",
      "7 protões e 7 neutrões.",
      "12 protões e 2 neutrões."
    ],
    correctIndex: 0,
    explanation: "O número atómico Z do elemento Carbono é rigorosamente 6 (todo e qualquer átomo de carbono possui obrigatoriamente 6 protões no seu núcleo, definindo a sua química orgânica tetravalente). Como o número de massa A deste isótopo radioativo é 14: o número de neutrões é N = A - Z = 14 - 6 = 8 neutrões. Como tem excesso de neutrões (N/Z = 8/6 ≈ 1,33, quando o estável ¹²C tem N/Z = 1,0), o Carbono-14 é radioativo e decai por emissão de partículas beta negativas para o Azoto-14 estável.",
    distractorAnalysis: [
      "Opção B descreveria um núcleo hipotético impossível de Z=14 (Silício) sem neutrões.",
      "Opção C descreve a composição do átomo de Azoto-14 estável (Z=7, N=7).",
      "Opção D descreveria o elemento Magnésio (Z=12)."
    ],
    nursingApplication: "Em estudos metabólicos de novos fármacos oncológicos ou farmacocinética clínica, moléculas marcadas com Carbono-14 (¹⁴C) são administradas a voluntários para rastrear a distribuição tecidual, excreção renal e vias de biotransformação hepática, monitorizando o enfermeiro a colheita precisa de amostras biológicas cronometradas."
  },
  {
    id: 637,
    topicId: 6,
    question: "A constante da velocidade da luz no vácuo (c ≈ 3 × 10⁸ m/s) surge na equação da energia nuclear E = m · c² elevada ao quadrado (c² ≈ 9 × 10¹⁶ m²/s²). Qual é a consequência prática deste fator de escala gigantesco?",
    options: [
      "A perda de uma fração minúscula e impercetível de massa em reações nucleares (miligramas) traduz-se numa libertação colossal de energia mecânica e térmica (milhões de Joules).",
      "As reações nucleares não libertam energia e necessitam de consumir toda a eletricidade do país.",
      "A luz solar congela instantaneamente qualquer átomo que atinja.",
      "A velocidade da luz diminui para zero quando calculada em MeV."
    ],
    correctIndex: 0,
    explanation: "O fator c² é o multiplicador universal da matéria condensada: como c² = (3 × 10⁸)² = 9 × 10¹⁶ J/kg, a aniquilação completa de apenas 1 grama (0,001 kg) de matéria libertaria uma energia titânica de E = 10⁻³ × 9 × 10¹⁶ = 9 × 10¹³ Joules (equivalente à explosão de mais de 20 mil toneladas de dinamite TNT!). Mesmo no defeito de massa nuclear (onde se converte apenas cerca de 0,1% a 0,7% da massa em energia), alguns gramas de radioisótopos fornecem os feixes de radiação que tratam milhares de doentes com cancro ao longo de anos num hospital.",
    distractorAnalysis: [
      "Opções B, C e D são formulações estapafúrdias que violam a teoria da relatividade e a conservação universal de massa e energia."
    ],
    nursingApplication: "Esta prodigiosa densidade de energia nuclear explica a extrema eficácia e o respeito rigoroso exigido no manuseamento de radiofármacos: uma ampola de poucos mililitros de radioisótopos transporta uma atividade radiológica imensa, exigindo o uso de blindagens plúmbeas espessas e pinças de manuseamento à distância para proteger as mãos do enfermeiro."
  },
  {
    id: 638,
    topicId: 6,
    question: "O fenómeno da 'Barreira de Fissão' em núcleos pesados de Urânio ou Plutónio expressa qual equilíbrio biofísico de forças internas?",
    options: [
      "O equilíbrio entre a força de tensão superficial nuclear atrativa (que tenta manter o núcleo esférico e coeso) e a repulsão eletrostática de Coulomb entre os protões (que tenta deformar e alongar o núcleo em haltere até à rotura).",
      "A resistência da camada de pele do abdómen contra a radiação solar.",
      "A pressão exercida pelos músculos do tórax durante a tosse.",
      "A resistência elétrica do vidro que envolve o termómetro de mercúrio."
    ],
    correctIndex: 0,
    explanation: "Na teoria da fissão de Bohr e Wheeler: o núcleo atómico comporta-se como uma gota de líquido. A Força Nuclear Forte atua como uma 'tensão superficial' nuclear que minimiza a área e força a gota a permanecer esférica e coesa. Por outro lado, a repulsão eletrostática de Coulomb entre todos os seus protões internos empurra a matéria para fora. Para que ocorra a fissão, o núcleo tem de sofrer uma deformação mecânica elipsoidal: se a energia de excitação superar a 'barreira de fissão' (~6 MeV no Urânio-235), o estrangulamento da gota acentua-se e a repulsão elétrica vence, rompendo o núcleo em dois fragmentos principais.",
    distractorAnalysis: [
      "Opções B, C e D referem fenómenos mecânicos e fisiológicos macroscópicos irrelevantes para as forças nucleares íntimas."
    ],
    nursingApplication: "A quebra da barreira de fissão em reatores nucleares de investigação produz os subprodutos medicinais purificados que abastecem diariamente os serviços hospitalares de oncologia e endocrinologia onde os enfermeiros cuidam de doentes com hipertiroidismo e neoplasias malignas."
  },
  {
    id: 639,
    topicId: 6,
    question: "Qual das seguintes partículas nucleares possui a MENOR massa de repouso mensurável?",
    options: [
      "O Neutrino do elétrão (ν_e), com massa em repouso quase nula (inferior a 1 eV/c², milhões de vezes menor do que a do elétrão).",
      "O Protão livre (m ≈ 938,27 MeV/c²).",
      "O Neutrão livre (m ≈ 939,57 MeV/c²).",
      "A Partícula Alfa (m ≈ 3727 MeV/c²)."
    ],
    correctIndex: 0,
    explanation: "O neutrino é um lépton sem carga elétrica que interage exclusivamente através da força nuclear fraca e da gravidade. A sua massa de repouso é tão infinitesimal que durante décadas foi considerada exatamente zero (experiências de oscilação de neutrinos galardoadas com o Prémio Nobel comprovaram que possuem uma massa minúscula mas não-nula, inferior a 0,1-1 eV/c²). Em comparação: o eletrão tem ~511.000 eV/c² e o protão tem ~938.000.000 eV/c².",
    distractorAnalysis: [
      "Opções B, C e D são bárions pesados e aglomerados nucleares com massas milhões a milhares de milhões de vezes superiores à do neutrino."
    ],
    nursingApplication: "Devido à sua secção eficaz de interação quase nula e massa impercetível, os neutrinos emitidos no decaimento beta de radiofármacos hospitalares atravessam o corpo do doente e o próprio planeta Terra sem colidir com nenhum átomo nem causar qualquer ionização celular, não representando qualquer risco de dano radiobiológico para o doente ou equipa de saúde."
  },
  {
    id: 640,
    topicId: 6,
    question: "A energia libertada em cada reação individual de Fissão Nuclear de um átomo de Urânio-235 é de aproximadamente 200 MeV. Sob que forma se manifesta a maior fatia (cerca de 80% a 85%) desta energia libertada?",
    options: [
      "Sob a forma de Energia Cinética dos dois fragmentos de fissão primários pesados que se repelem violentamente a alta velocidade por repulsão eletrostática de Coulomb (convertendo-se rapidamente em calor térmico por colisões com a matéria circundante).",
      "Sob a forma de ondas sonoras audíveis na sala de controlo.",
      "Sob a forma de luz verde fluorescente que brilha na escuridão.",
      "Sob a forma de diminuição da temperatura do reator para -273 °C."
    ],
    correctIndex: 0,
    explanation: "Dos ~200 MeV libertados em cada fissão de ²³⁵U: cerca de 165 a 170 MeV surgem sob a forma de energia cinética dos dois fragmentos pesados de cisão (núcleos filhos de massa média como Bário, Criptónio, Iodo ou Molibdénio). Devido à forte carga positiva de ambos, eles são violentamente repelidos pela força de Coulomb a velocidades gigantescas. Ao colidirem com os átomos vizinhos do combustível, desaceleram em escassos micrómetros, dissipando toda essa energia cinética sob a forma de calor térmico colossal.",
    distractorAnalysis: [
      "Opções B, C e D são distorções grosseiras da termodinâmica e radiofísica da fissão nuclear."
    ],
    nursingApplication: "Os fragmentos de fissão ejetados nessa reação contêm uma enorme riqueza de radioisótopos médicos que são extraídos e purificados quimicamente: o Iodo-131, Molibdénio-99 e Xénon-133 utilizados diariamente em enfermagem derivam diretamente desses fragmentos de fissão de alta energia cinética."
  },
  {
    id: 641,
    topicId: 6,
    question: "O conceito de 'Radioisótopo Carrier-Free' (livre de transportador / No Carrier Added - NCA) em radiofarmácia hospitalar significa que:",
    options: [
      "Todos os átomos do elemento químico em solução são exclusivamente o isótopo radioativo desejado, sem contaminação por átomos estáveis 'frios' do mesmo elemento, permitindo atingir altíssima atividade específica (Bq/mg) com volumes mínimos de injeção.",
      "O radiofármaco é transportado sem necessidade de mala de transporte pelos correios.",
      "O doente pode andar livremente sem acompanhamento do enfermeiro.",
      "O líquido é constituído por 100% de água destilada pura sem radioatividade."
    ],
    correctIndex: 0,
    explanation: "Quando um radioisótopo é produzido com adição de transportador ('carrier-added'), há uma mistura de átomos radioativos e átomos estáveis 'frios' do mesmo elemento que competem pelos mesmos recetores biológicos. Numa preparação 'sem carreador adicionado' (NCA / carrier-free, como o Iodo-131 obtido por irradiação de Telúrio ou Tecnécio-99m de gerador): a quase totalidade dos átomos do elemento químico na solução são radioativos. Isto confere uma Atividade Específica elevadíssima, permitindo que microgramas minúsculos de fármaco saturem os recetores tumorais com doses radioativas massivas sem toxicidade química secundária.",
    distractorAnalysis: [
      "Opção B confunde conceitos de radioquímica analítica com logística postal de estafetas.",
      "Opção C confunde propriedades químicas com deambulação do doente internado.",
      "Opção D descreveria um placebo inócuo sem radioatividade."
    ],
    nursingApplication: "Radiofármacos NCA permitem administrar terapias dirigidas com volumes injetáveis ínfimos (poucos mililitros) no acesso venoso do doente, sem risco de efeitos colaterais farmacológicos de toxicidade ponderal de metais pesados."
  },
  {
    id: 642,
    topicId: 6,
    question: "No contexto da estabilidade do núcleo, o que descreve a chamada 'Linha de Gotejamento' (Drip Line) de protões e neutrões no gráfico de nuclídeos?",
    options: [
      "O limite físico extremo de estabilidade quântica além do qual a energia de separação de um nucleão se torna negativa, fazendo com que qualquer protão ou neutrão adicional simplesmente 'goteje' (seja ejetado espontaneamente de imediato em 10⁻²¹ s) para fora do núcleo por ausência de ligação das forças nucleares.",
      "A linha por onde a água escorre quando o frasco de soro tem uma fuga.",
      "A velocidade com que caem as gotas na câmara de gotejamento do soro.",
      "O limite de humidade da enfermaria para não desenvolver bolor nas paredes."
    ],
    correctIndex: 0,
    explanation: "A 'Drip Line' nuclear (fronteira de gotejamento) define o limite absoluto da existência física de núcleos ligados: 1) Linha de gotejamento de neutrões (neutron drip line): ponto em que o excesso de neutrões é tão colossal que o último neutrão adicionado tem energia de ligação zero (B_n = 0); 2) Linha de gotejamento de protões (proton drip line): onde a repulsão eletrostática supera totalmente a atração forte e expele protões espontaneamente. Para lá destas fronteiras, núcleos atómicos não conseguem existir nem por uma fração de segundo.",
    distractorAnalysis: [
      "Opções B e C confundem a 'drip line' da física nuclear teórica com a câmara de gotejamento de fluidoterapia de enfermagem.",
      "Opção D refere-se a saneamento e manutenção predial hospitalar."
    ],
    nursingApplication: "Os radioisótopos médicos utilizados no hospital situam-se em zonas intermédias bem delineadas entre a linha de estabilidade e as drip lines: isto garante semividas clínicas úteis e mensuráveis (minutos a dias), permitindo a sua administração segura em fluidos corporais."
  },
  {
    id: 643,
    topicId: 6,
    question: "Qual das seguintes afirmações sobre o modelo da 'Gota Líquida' de Bohr-Wheeler para o núcleo atómico é rigorosamente CORRETA?",
    options: [
      "Trata o núcleo como um líquido incompressível de altíssima densidade no qual cada nucleão interage apenas com os seus vizinhos mais próximos (saturação das forças nucleares), apresentando uma tensão superficial nuclear que resiste à deformação da mesma forma que uma gota de água macroscópica.",
      "Assume que os nucleões se encontram todos em estado gasoso a ferver a 5000 °C.",
      "Considera que o núcleo é oco como uma bola de futebol e preenchido por ar frio.",
      "Nega a existência de protões e neutrões no átomo."
    ],
    correctIndex: 0,
    explanation: "O Modelo da Gota Líquida baseia-se na constatação empírica de que a densidade da matéria nuclear e a energia de ligação por nucleão são praticamente constantes para núcleos médios e pesados (propriedade de saturação da força forte: cada nucleão só se liga aos seus vizinhos imediatos, tal como as moléculas de água numa gota líquida). Isto permite aplicar conceitos hidrodinâmicos macroscópicos — como volume, densidade, calor latente de vaporização (energia de separação de nucleões) e tensão superficial — para explicar com grande precisão a fissão nuclear e as massas atómicas.",
    distractorAnalysis: [
      "Opção B confunde modelos de física nuclear condensada com gases ideais térmicos.",
      "Opção C é falsa; o núcleo é um corpo maciço contínuo e ultra-denso.",
      "Opção D é uma negação de toda a estrutura nuclear moderna."
    ],
    nursingApplication: "A analogia da gota líquida auxilia o enfermeiro a visualizar os processos de fissão e decaimento: o núcleo oscila como uma gota líquida instável sob as tensões eletrostáticas internas até que uma perturbação externa o faz cindir em fragmentos menores que emitem radiações ionizantes diagnósticas."
  },
  {
    id: 644,
    topicId: 6,
    question: "O fenómeno da 'Emissão de Neutrões Atrasados' (delayed neutrons) na fissão nuclear representa menos de 1% de todos os neutrões emitidos, mas é de importância vital absoluta para a segurança. Por que razão?",
    options: [
      "Porque estes neutrões são emitidos com um atraso temporal de alguns segundos a minutos após a desintegração beta de determinados fragmentos de fissão (precursores), aumentando o tempo médio de geração neutrónica e permitindo o controlo mecânico suave e estável dos reatores nucleares onde se produzem radioisótopos médicos (evitando excursões críticas incontroláveis).",
      "Porque chegam com atraso às enfermarias por falta de transporte de ambulância.",
      "Porque não possuem energia e não conseguem penetrar na pele humana.",
      "Porque são neutrões frios que arrefecem o hospital durante o verão."
    ],
    correctIndex: 0,
    explanation: "Se todos os neutrões da fissão fossem emitidos instantaneamente ('neutrões imediatos', prompt neutrons, libertados em 10⁻¹⁴ s), o tempo de duplicação da reação em cadeia seria de microssegundos: qualquer variação insignificante na reatividade provocaria uma explosão incontrolável antes que qualquer sistema de controlo mecânico conseguisse mover as barras de absorção. A pequena fração de neutrões atrasados (~0,65% no ²³⁵U), que nascem do decaimento beta de fragmentos como o Bromo-87 com meias-vidas de segundos, eleva o tempo médio de resposta do reator para cerca de 0,1 segundos, permitindo aos computadores e operadores controlar o reator em regime crítico estacionário seguro.",
    distractorAnalysis: [
      "Opção B é um trocadilho grosseiro com atrasos de transporte hospitalar.",
      "Opção C é incorreta; neutrões atrasados possuem energias cinéticas de centenas de keV capazes de atravessar tecidos.",
      "Opção D confunde física de reatores com sistemas de climatização predial."
    ],
    nursingApplication: "A estabilidade proporcionada pelos neutrões atrasados assegura a operação pacífica contínua dos reatores de investigação dedicados à saúde: sem este princípio biofísico fundamental, a produção segura dos radioisótopos diários essenciais para exames de oncologia e cardiologia seria tecnicamente impossível."
  },
  {
    id: 645,
    topicId: 6,
    question: "Em radiofísica médica, qual é a definição de 'Radionuclídeo Primordial'?",
    options: [
      "Um radionuclídeo natural que existe desde a formação do Sistema Solar e do planeta Terra (há cerca de 4,5 mil milhões de anos), devido ao facto de possuir uma semivida física colossal comparável ou superior à idade da Terra (como o Potássio-40, Urânio-238 e Tório-232).",
      "Um radiofármaco sintetizado exclusivamente na farmácia hospitalar todas as manhãs.",
      "O primeiro átomo de oxigénio inalado pelo recém-nascido ao chorar no parto.",
      "Um isótopo radioativo com meia-vida de apenas 1 segundo."
    ],
    correctIndex: 0,
    explanation: "Os radionuclídeos primordiais foram sintetizados em eventos astrofísicos (supernovas e colisões de estrelas de neutrões) antes da formação da Terra: para terem sobrevivido até aos nossos dias (~4,54 × 10⁹ anos), têm de ter meias-vidas de milhares de milhões de anos. Os principais exemplos são: Urânio-238 (T_1/2 = 4,47 × 10⁹ anos), Tório-232 (T_1/2 = 14 × 10⁹ anos) e Potássio-40 (⁴⁰K, T_1/2 = 1,25 × 10⁹ anos), este último presente naturalmente em todos os alimentos ricos em potássio e no próprio corpo humano.",
    distractorAnalysis: [
      "Opção B descreve radionuclídeos artificiais de semivida curta produzidos em cíclotrons ou reatores.",
      "Opção C é uma metáfora poética sem base na radiofísica dos elementos primordiais.",
      "Opção D descreve isótopos efémeros que desapareceriam da Terra em poucos minutos."
    ],
    nursingApplication: "O Potássio-40 (⁴⁰K) natural presente no cloreto de potássio e nos tecidos corporais faz com que todo o ser humano vivo seja ligeiramente radioativo: um adulto de 70 kg emite naturalmente cerca de 4000 desintegrações radioativas por segundo (4000 Bq) devido ao ⁴⁰K dos seus músculos. O enfermeiro usa este facto para tranquilizar doentes: a radioatividade é um fenómeno natural intrínseco à própria biologia."
  },
  {
    id: 646,
    topicId: 6,
    question: "O conceito de 'Isómeros Nucleares' refere-se a núcleos que possuem rigorosamente o mesmo Número Atómico (Z) e o mesmo Número de Massa (A), mas que diferem em qual propriedade quântica fundamental?",
    options: [
      "No seu Estado de Energia Nuclear interno e momento angular (spin nuclear), possuindo o estado metaestável uma energia superior e uma semivida mensurável antes de transicionar para o estado fundamental.",
      "No número de dentes ou ossos do doente.",
      "Na cor da luz que refletem quando iluminados por uma lanterna comum.",
      "Na temperatura de congelação da urina recolhida."
    ],
    correctIndex: 0,
    explanation: "Isómeros nucleares são estados quânticos metaestáveis do mesmo núcleo: partilham o mesmo número de protões Z e mesmo número de neutrões N (logo, mesmo Z e mesmo A). A única diferença física reside na configuração de excitação dos seus nucleões nos níveis quânticos de energia: o isómero metaestável (ex: ⁹⁹ᵐTc) encontra-se num nível de energia superior (~142 keV acima do estado fundamental) e tem spin diferente (spin 1/2- vs 9/2+), decaindo para o estado fundamental (⁹⁹Tc) por emissão gama com semivida de 6 horas.",
    distractorAnalysis: [
      "Opções B, C e D referem atributos anatómicos, óticos e laboratoriais bizarros sem relação com estados quânticos de energia nuclear."
    ],
    nursingApplication: "A compreensão da transição isomérica do ⁹⁹ᵐTc para ⁹⁹Tc assegura ao enfermeiro que a molécula química que guia o radiofármaco no corpo não se altera durante a cintigrafia: o exame baseia-se na emissão do fotão de desexcitação isomérica pura enquanto o fármaco permanece nos tecidos-alvo."
  },
  {
    id: 647,
    topicId: 6,
    question: "A lei de conservação do Número de Nucleões (Conservação do Número Bariónico) estabelece que em qualquer reação nuclear ou decaimento radioativo:",
    options: [
      "A soma total de nucleões (A = Z + N) antes da reação é rigorosamente igual à soma total de nucleões após a reação (os nucleões não podem ser criados do nada nem destruídos em processos nucleares convencionais de baixa energia).",
      "O número de neutrões duplica a cada segundo em todos os hospitais.",
      "O número de protões diminui sempre para zero no final de cada dia.",
      "A matéria transforma-se inteiramente em oxigénio gasoso."
    ],
    correctIndex: 0,
    explanation: "O Número Bariónico (B) é uma quantidade conservada por simetrias fundamentais da física de partículas: em todas as reações de desintegração radioativa (alfa, beta, gama), fissão nuclear ou reações de ativação, o número total de prótons e nêutrons (número de massa total A) permanece RIGOROSAMENTE constante entre os reagentes iniciais e os produtos finais. Por exemplo, na fissão: ²³⁵U (A=235) + n (A=1) -> soma de A = 236; os produtos de cisão combinados com os neutrões emitidos somam sempre exatamente A = 236.",
    distractorAnalysis: [
      "Opções B, C e D são violações impossíveis das leis de conservação de massa atómica e número bariónico."
    ],
    nursingApplication: "O balanço do número de massa A e número atómico Z nas equações nucleares é a ferramenta matemática que permite aos profissionais de enfermagem e físicos médicos calcular a atividade radioativa residual de radiofármacos e garantir a correta rastreabilidade das doses administradas."
  },
  {
    id: 648,
    topicId: 6,
    question: "Em doentes submetidos a exames de Medicina Nuclear que necessitam de algaliação (cateterismo vesical com saco coletor fechado), qual é o cuidado de radioproteção imperativo adotado pelo enfermeiro?",
    options: [
      "Manusear o saco coletor e a urina com luvas duplas de proteção, esvaziar o saco para recipientes dedicados sem salpicos, medir a taxa de dose com monitor de radiação portátil e armazenar a urina em local blindado próprio até ao decaimento radioativo seguro conforme protocolo de medicina nuclear.",
      "Esvaziar a urina radioativa diretamente na pia do lavatório onde os enfermeiros lavam as mãos.",
      "Deixar o saco coletor aberto no chão da enfermaria para evaporar a radiação.",
      "Não esvaziar o saco nunca, deixando-o rebentar por excesso de volume."
    ],
    correctIndex: 0,
    explanation: "A maioria dos radiofármacos emissores gama e beta é excretada em larga escala pelos rins: nas primeiras horas pós-administração, a urina do doente contém concentrações significativas de radioatividade não ligada. O contacto direto, salpicos ou derrames de urina contaminam superfícies e a pele dos profissionais. O enfermeiro deve usar EPI adequado (luvas duplas, avental impermeável), evitar derrames e assegurar que a urina de doentes internados em quartos de radioiodoterapia seja canalizada para tanques de decaimento blindados dedicados.",
    distractorAnalysis: [
      "Opção B provocaria contaminação radioativa severa de áreas limpas de higiene dos profissionais.",
      "Opção C contaminaria o ar e o chão da enfermaria com aerossóis radioativos.",
      "Opção D provocaria rutura catastrófica do saco com contaminação massiva do leito e chão do quarto."
    ],
    nursingApplication: "A manipulação segura de excreções radioativas de doentes algaliados é um procedimento de enfermagem de alta responsabilidade técnica: utilizar sempre técnicas assépticas com barreiras de proteção, inspecionar a estanquicidade das conexões e rotular o saco coletor com o símbolo internacional do trifólio radioativo."
  },
  {
    id: 649,
    topicId: 6,
    question: "O fenómeno da 'Barreira de Potencial Nuclear' (poço de potencial quântico) significa que, no interior do núcleo atómico, cada nucleão se encontra:",
    options: [
      "Num estado ligado de energia potencial negativa (poço de potencial de cerca de 40 a 50 MeV de profundidade), necessitando de absorver energia externa positiva para conseguir escapar para fora do núcleo.",
      "Em repouso absoluto com zero movimento atómico a qualquer temperatura.",
      "Ligado por cordas elásticas de colagénio aos ossos do indivíduo.",
      "Flutuando livremente no ar como uma borboleta num jardim."
    ],
    correctIndex: 0,
    explanation: "A atração da força nuclear forte cria um 'poço quadrado de potencial' profundo no núcleo: os nucleões estão 'aprisionados' numa depressão de energia potencial de ~-40 a -50 MeV. Para que um nucleão se liberte e escape para o exterior, é necessário fornecer-lhe energia igual ou superior à sua 'energia de separação' (correspondente à altura do poço até ao nível zero). É este poço de potencial atrativo que confere estabilidade sólida e imutável aos átomos estáveis que formam o organismo humano.",
    distractorAnalysis: [
      "Opção B violaria o Princípio de Incerteza de Heisenberg (partículas confinadas a 1 fm possuem energia de ponto zero e momentos cinéticos muito elevados).",
      "Opções C e D são metáforas cómicas desprovidas de qualquer rigor físico."
    ],
    nursingApplication: "O poço de potencial nuclear explica por que o esqueleto e os tecidos dos doentes não se desintegram espontaneamente: os átomos estáveis de cálcio, fósforo e oxigénio residem confortavelmente no fundo de poços de potencial estáveis, mantendo a homeostase anatómica e estrutural do corpo humano."
  },
  {
    id: 650,
    topicId: 6,
    question: "A reação nuclear de Fusão que alimenta o núcleo do Sol e das estrelas funde núcleos de hidrogénio em hélio. Por que razão a fusão de dois protões leves liberta uma quantidade colossal de energia?",
    options: [
      "Porque o núcleo de Hélio-4 resultante possui uma energia de ligação por nucleão (B/A ≈ 7,1 MeV/nucleão) muito superior à dos reagentes de hidrogénio leves, ocorrendo um grande defeito de massa que se converte em energia libertada (E = Δm · c²).",
      "Porque o Sol queima oxigénio gasoso e carvão em chamas como uma fogueira de madeira.",
      "Porque a fusão destrói completamente todos os átomos do sistema solar.",
      "Porque a gravidade do sol anula a velocidade da luz no espaço."
    ],
    correctIndex: 0,
    explanation: "Na extremidade esquerda da curva de energia de ligação (A < 20), a curva sobe com declive vertiginoso: os prótons isolados têm B/A = 0, enquanto o núcleo de Hélio-4 (partícula alfa) tem uma energia de ligação prodigiosa de ~28,3 MeV (7,1 MeV por nucleão). Na fusão estelar (ciclo próton-próton: 4 ¹H -> ⁴He + 2 e⁺ + 2 ν_e + 26,7 MeV), cerca de 0,7% de toda a massa do hidrogénio é convertida diretamente em pura energia fotónica e térmica pelo defeito de massa de Einstein (E = Δm · c²).",
    distractorAnalysis: [
      "Opção B confunde combustão química exotérmica simples (que apenas partilha eletrões externos e se esgotaria no Sol em poucos milhares de anos) com reações termonucleares nucleares sustentadas há 4,5 mil milhões de anos.",
      "Opções C e D violam as leis fundamentais de conservação de energia e astrofísica."
    ],
    nursingApplication: "Toda a energia vital que move o planeta Terra e a vida biológica humana (desde os alimentos que os doentes consomem até à luz solar que sintetiza a Vitamina D na pele para fixação de cálcio ósseo) tem a sua origem primordial nas reações de fusão nuclear do Sol governadas pelo defeito de massa e pelas forças nucleares."
  }
];
