/**
 * Tópico 6: Núcleo Atómico e Propriedades das Forças Nucleares
 * 200 Questões Clínicas Rigorosas para o 1.º Ano de Enfermagem (IDs 6001 a 6200)
 */

const TOPIC_6_QUESTIONS = [
  {
    "id": 6001,
    "topicId": 6,
    "question": "O núcleo atómico é constituído por dois tipos de partículas elementares designadas conjuntamente por 'Nucleões'. Quais são essas partículas e quais as suas respetivas cargas elétricas fundamentais?",
    "options": [
      "Eletrões (com carga elementar negativa -e) e protões (com carga positiva), mantendo os neutrões confinamento orbital exclusivo fora da região central nuclear.",
      "Protões (com carga elementar positiva +e = +1,602 × 10⁻¹⁹ C) e neutrões (com carga elétrica nula, 0 C), possuindo ambos massas semelhantes na ordem de 1,67 × 10⁻²⁷ kg.",
      "Protões (com carga elétrica positiva elementar) e positrões (com carga elétrica repulsiva nula), circulando os neutrões em órbitas quânticas extranucleares periféricas.",
      "Neutrões (com carga elétrica negativa elementar) e fotões gama estáveis de repouso, encontrando-se os protões dispersos na nuvem eletrónica periférica do átomo."
    ],
    "correctIndex": 1,
    "explanation": "O núcleo atómico dos elementos da tabela periódica é composto exclusivamente por protões (carga +1e) e neutrões (carga 0). A massa do protão (m_p ≈ 1,00728 u) é muito próxima da massa do neutrão (m_n ≈ 1,00866 u), sendo ambos cerca de 1836 vezes mais massivos do que o eletrão orbital circundante (m_e ≈ 0,00055 u). Praticamente 99,95% de toda a massa do átomo concentra-se no núcleo.",
    "distractorAnalysis": [
      "Está incorreta: eletrões orbitam na eletrosfera extranuclear; o núcleo é composto exclusivamente por protões (positivos) e neutrões (eletricamente neutros), denominados nucleões.",
      "Está incorreta: positrões são antipartículas de antimatéria emitidas no decaimento beta positivo (ex: em PET) e não são constituintes permanentes estáveis do núcleo atómico.",
      "Está incorreta: neutrões têm carga estritamente nula e não negativa; os protões encontram-se firmemente ligados no núcleo e não dispersos na eletrosfera."
    ],
    "nursingApplication": "A compreensão do número de protões (Z) e neutrões (N) é essencial em medicina nuclear: o comportamento químico de um radiofármaco no corpo do doente (como a captação de iodo pela tiroide) depende unicamente de Z, enquanto a sua radioatividade para diagnóstico ou terapia decorre do desequilíbrio de N no núcleo."
  },
  {
    "id": 6002,
    "topicId": 6,
    "question": "Na notação nuclear padrão de um elemento químico genérico representado por ᴬ_Z X (por exemplo, ¹³¹₅₃I ou ⁹⁹ᵐ₄₃Tc), o que representam formalmente as letras Z e A?",
    "options": [
      "Z traduz a massa nuclear expressa em gramas por mole e A representa o número de eletrões em ressonância paramagnética distribuídos na camada de valência mais externa.",
      "Z corresponde ao número de neutrões livres no núcleo atómico e A representa o número de fotões gama emitidos por segundo durante o decaimento radioativo espontâneo.",
      "Z representa o Número Atómico (número de protões, determinante da identidade química do elemento) e A o Número de Massa (total de nucleões, dado pela soma A = Z + N).",
      "Z indica a carga magnética líquida do átomo em teslas e A define o raio geométrico angular da nuvem eletrónica em picómetros em condições normais de temperatura."
    ],
    "correctIndex": 2,
    "explanation": "Na simbologia nuclear padrão: 1) Z (Número Atómico) indica o número de protões no núcleo, determinando a identidade química e a posição do elemento na Tabela Periódica; 2) A (Número de Massa) representa a soma total de protões e neutrões (A = Z + N). O número de neutrões N obtém-se subtraindo N = A - Z. No exemplo do Iodo-131 (¹³¹₅₃I): Z = 53 protões, A = 131 nucleões e N = 131 - 53 = 78 neutrões.",
    "distractorAnalysis": [
      "Está incorreta: Z é o número atómico (número de protões no núcleo que define o elemento) e A é o número de massa (número total de protões mais neutrões: A = Z + N).",
      "Está incorreta: Z não mede massa em g/mol (isso é a massa molar M); A não mede eletrões de valência, mas sim o total de nucleões nucleares.",
      "Está incorreta: o número de neutrões é N (N = A - Z); a taxa de emissão de fotões por segundo é a atividade radioativa (expressa em Becquerels) e não o número de massa A."
    ],
    "nursingApplication": "Na administração de radiofármacos hospitalares, o enfermeiro valida a prescrição confrontando rigorosamente a notação nuclear no rótulo blindado do frasco: diferenciar Iodo-131 (¹³¹I, emissor beta destrutivo usado em cancro da tiroide) de Iodo-123 (¹²³I, emissor gama puro para cintigrafia de diagnóstico) previne erros terapêuticos graves de sobredosagem radioativa."
  },
  {
    "id": 6003,
    "topicId": 6,
    "question": "Em termos de escala dimensional física, qual é a ordem de grandeza aproximada do Raio do Núcleo Atómico em comparação com o Raio do Átomo completo?",
    "options": [
      "O raio do núcleo atómico é rigorosamente idêntico ao raio da nuvem eletrónica externa (cerca de 10⁻¹⁰ m), preenchendo a matéria nuclear a totalidade do volume espacial do átomo neutro.",
      "O raio nuclear situa-se na ordem dos milímetros (10⁻³ m), sendo centenas de vezes maior do que a órbita dos eletrões de valência que circulam confinados no interior do próprio núcleo.",
      "O raio do núcleo atómico oscila em cerca de dez nanómetros (10⁻⁸ m), dependendo a sua dimensão física unicamente da pressão atmosférica externa medida na sala de exames hospitalares.",
      "O raio nuclear situa-se na ordem dos femtómetros (1 fm = 10⁻¹⁵ m), sendo cerca de 10.000 a 100.000 vezes menor do que o raio atómico (da ordem do ángstrom, 10⁻¹⁰ m); o átomo é quase todo vácuo."
    ],
    "correctIndex": 3,
    "explanation": "O átomo tem um raio médio da ordem de 10⁻¹⁰ metros (0,1 nm), enquanto o seu núcleo mede apenas cerca de 10⁻¹⁵ a 10⁻¹⁴ metros (1 a 10 fm). Em analogia clássica: se o átomo tivesse o tamanho de um estádio de futebol com 100 metros de diâmetro, o núcleo seria do tamanho de uma pequena formiga ou grão de areia (1 milímetro) no centro do relvado! Toda a matéria dos corpos humanos é, do ponto de vista do volume espacial, esmagadoramente vácuo permeado por campos eletromagnéticos.",
    "distractorAnalysis": [
      "Está incorreta: a experiência de Rutherford demonstrou que o núcleo (1-10 fm) é minúsculo face ao átomo (~0,1 nm); se o átomo fosse um estádio, o núcleo seria do tamanho de uma berlinde no centro.",
      "Está incorreta: o núcleo não preenche todo o átomo; a eletrosfera ocupa 99,9999999999999% do volume, sendo o átomo esmagadoramente constituído por espaço vazio.",
      "Está incorreta: o raio nuclear é submicroscópico (~10⁻¹⁵ m, dado pela fórmula empírica R ≈ 1,2·A^(1/3) fm) e independe de fatores macroscópicos como pressão atmosférica."
    ],
    "nursingApplication": "O facto de o átomo ser quase inteiramente espaço vazio explica a tremenda penetrância dos Raios X e da radiação Gama: a esmagadora maioria dos fotões atravessa triliões de átomos do corpo do doente sem colidir com nenhum núcleo compacto central, sendo atenuados apenas quando interagem com os eletrões da nuvem atómica."
  },
  {
    "id": 6004,
    "topicId": 6,
    "question": "A densidade mássica média da matéria nuclear (ρ_nuclear) é uma constante universal surpreendente para praticamente todos os núcleos atómicos. Qual é o seu valor aproximado?",
    "options": [
      "É uma constante na ordem de 2 × 10¹⁷ kg/m³ (cerca de 200 a 250 milhões de toneladas por centímetro cúbico), demonstrando que quase toda a massa do átomo está concentrada no volume nuclear ínfimo.",
      "É rigorosamente igual à densidade da água pura à temperatura ambiente (10³ kg/m³), distribuindo-se a massa atómica de forma perfeitamente homogénea por todo o espaço do átomo.",
      "Situa-se na ordem de 1,2 kg/m³, valor correspondente à densidade média do ar atmosférico ambiente ao nível do mar medido em condições laboratoriais padrão de temperatura e pressão.",
      "Varia entre dez e cinquenta quilogramas por metro cúbico consoante o estado físico sólido, líquido ou gasoso em que a substância radioativa se encontra armazenada no serviço clínico."
    ],
    "correctIndex": 0,
    "explanation": "Como o raio nuclear é dado por R = R₀ · A¹/³ (onde R₀ ≈ 1,2 fm), o volume do núcleo é V = 4/3 π R³ ∝ A. A densidade mássica nuclear é a razão entre a massa total (M ≈ A · m_u) e o volume V: ρ = M / V ≈ m_u / (4/3 π R₀³). Como o número de massa A se cancela no numerador e denominador, a densidade nuclear é CONSTANTE para todos os elementos, atingindo o valor colossal de ~2,3 × 10¹⁷ kg/m³ (idêntica à densidade de uma estrela de neutrões).",
    "distractorAnalysis": [
      "Está incorreta: a densidade nuclear é astronómica (~2·10¹⁷ kg/m³), comparável à das estrelas de neutrões; um centímetro cúbico de matéria nuclear pura pesaria centenas de milhões de toneladas.",
      "Está incorreta: a matéria ordinária tem densidade muito menor (~10³ a 10⁴ kg/m³) porque os átomos são quase todo espaço vazio com núcleos minúsculos amplamente espaçados pelas nuvens eletrónicas.",
      "Está incorreta: a densidade nuclear interna é uma propriedade universal e invariável dos núcleos, independente do estado físico de agregação macroscópica (sólido, líquido ou gasoso)."
    ],
    "nursingApplication": "Compreender que o núcleo possui uma densidade de 200 milhões de toneladas/cm³ ajuda o enfermeiro a visualizar a extrema concentração de energia contida no núcleo: qualquer perturbação ou desintegração nessa matéria ultra-densa liberta energias milhões de vezes superiores às das reações químicas convencionais dos medicamentos."
  },
  {
    "id": 6005,
    "topicId": 6,
    "question": "Dentro do núcleo atómico, os protões possuem todos carga elétrica positiva e encontram-se comprimidos a distâncias inferiores a 1 femtómetro, gerando forças eletrostáticas repulsivas de Coulomb colossais. Qual é a força física fundamental da natureza que mantém os nucleões firmemente unidos contra essa repulsão elétrica?",
    "options": [
      "A Força Gravitacional de Newton entre os nucleões, cuja atração de massas supera em milhões de vezes a força repulsiva de Coulomb calculada para cargas elétricas do mesmo sinal.",
      "A Força Nuclear Forte (interação forte), uma força atrativa de enorme intensidade que supera a repulsão eletrostática entre protões a distâncias subnucleares extremamente curtas (<2 a 3 fm).",
      "A Força Magnética de Lorentz induzida pela rotação orbital dos eletrões da camada K, que comprime os protões mecanicamente em direção ao centro geométrico do núcleo atómico.",
      "A Força Eletrofraca de repulsão quântica, que anula a carga elétrica dos protões sempre que estes se aproximam a distâncias inferiores ao raio de Bohr atómico fundamental."
    ],
    "correctIndex": 1,
    "explanation": "A Força Nuclear Forte é a mais potente das quatro forças fundamentais da física: a distâncias nucleares (~1 fm), ela é cerca de 100 vezes mais forte do que a repulsão eletrostática de Coulomb entre protões e 10³⁸ vezes mais intensa do que a gravidade. É uma força puramente atrativa que atua indistintamente entre protões e protões, neutrões e neutrões, ou protões e neutrões. O seu alcance é estritamente limitado: decai exponencialmente para zero a distâncias superiores a 2,5 a 3 femtómetros.",
    "distractorAnalysis": [
      "Está incorreta: a gravidade entre nucleões é cerca de 10³⁶ vezes mais fraca que a repulsão eletrostática de Coulomb, sendo totalmente incapaz de manter o núcleo coeso.",
      "Está incorreta: forças magnéticas geradas por eletrões extranucleares são ordens de grandeza inferiores às forças nucleares e não atuam na estabilidade interna do núcleo.",
      "Está incorreta: a força nuclear forte é a força mais intensa da natureza a distâncias da ordem de 1 fm, sobrepondo-se à violenta repulsão eletrostática entre os protões."
    ],
    "nursingApplication": "O equilíbrio dinâmico entre a Força Nuclear Forte (atrativa de curto alcance) e a Força Eletrostática de Coulomb (repulsiva de longo alcance) é a chave de toda a física médica: quando um núcleo tem excesso de protões ou neutrões, a força forte não consegue conter a repulsão, originando o decaimento radioativo espontâneo utilizado nos radiofármacos que o enfermeiro administra."
  },
  {
    "id": 6006,
    "topicId": 6,
    "question": "Em relação à independência de carga da Força Nuclear Forte, qual das seguintes afirmações é rigorosamente VERDADEIRA?",
    "options": [
      "A força nuclear forte atrai unicamente partículas desprovidas de carga elétrica (n-n), sendo nula entre protões devido à barreira repulsiva eletrostática descrita pela lei de Coulomb.",
      "A força forte exerce atração máxima e exclusiva entre protões e eletrões orbitais, repelindo os neutrões em direção à periferia da eletrosfera com acelerações relativistas elevadas.",
      "A interação forte tem intensidade idêntica entre protão-protão (p-p), neutrão-neutrão (n-n) ou protão-neutrão (p-n), desde que as partículas se encontrem nos mesmos estados quânticos de spin.",
      "A intensidade da atração nuclear entre protões é o dobro da atração entre neutrões, aumentando proporcionalmente com o quadrado da carga elétrica elementar de cada nucleão ligado."
    ],
    "correctIndex": 2,
    "explanation": "Experiências de espalhamento nuclear e estrutura de níveis comprovam a propriedade de 'independência de carga' da Força Forte: as forças nucleares fortes f(p-p), f(n-n) e f(p-n) são perfeitamente idênticas na componente nuclear pura (descontando a repulsão eletrostática de Coulomb que só afeta os protões). A nível da cromodinâmica quântica, a força forte entre nucleões decorre da troca de mésons pi (piões) entre os quarks que os constituem.",
    "distractorAnalysis": [
      "Está incorreta: a força nuclear forte é independente da carga elétrica (charge independence); nucleões sentem a mesma interação forte independentemente de serem protões ou neutrões.",
      "Está incorreta: a força forte não atua sobre os eletrões (que são leptões); atua apenas sobre hadrões (quarks e nucleões mediados por glúons e piões).",
      "Está incorreta: a força forte é puramente nuclear e ignora o valor da carga elétrica; a carga elétrica apenas adiciona a repulsão coulombiana entre protões."
    ],
    "nursingApplication": "A independência de carga explica por que adicionar neutrões a um núcleo de número atómico elevado fornece 'cola nuclear forte' adicional sem aumentar a repulsão eletrostática, estabilizando núcleos pesados que de outro modo seriam instáveis."
  },
  {
    "id": 6007,
    "topicId": 6,
    "question": "No gráfico do Número de Neutrões (N) versus Número de Protões (Z) para os isótopos estáveis da natureza ('Faixa de Estabilidade Nuclear'), como evolui a razão N/Z à medida que o número atómico Z aumenta?",
    "options": [
      "A estabilidade nuclear máxima exige invariavelmente N/Z = 0,5 em todos os elementos da tabela periódica, decrescendo a proporção de neutrões à medida que o núcleo atómico se torna mais pesado.",
      "Todos os núcleos estáveis possuem rigorosamente o dobro de protões em relação aos neutrões (N/Z = 0,5), sendo os neutrões excedentes expelidos espontaneamente sob a forma de radiação beta.",
      "A razão N/Z mantém-se fixa em exatamente 1,00 desde o hidrogénio até ao urânio, não existindo qualquer variação no balanço neutrão-protão ao longo de toda a tabela de isótopos conhecidos.",
      "Em elementos leves (Z ≤ 20) a estabilidade ocorre com N/Z ≈ 1; em elementos pesados (Z > 20 até Z = 82) a razão sobe até N/Z ≈ 1,5 para contrabalançar a repulsão coulombiana entre protões."
    ],
    "correctIndex": 3,
    "explanation": "Como a força nuclear forte tem alcance muito curto (~1-2 fm) e só atrai nucleões vizinhos imediatos, enquanto a repulsão coulombiana entre protões tem longo alcance (1/r) e atua entre todos os protões do núcleo simultaneamente, a repulsão elétrica total cresce com Z(Z-1)/2 (crescimento quadrático). Para compensar essa repulsão crescente em núcleos volumosos, o núcleo necessita de um número desproporcionalmente maior de neutrões para diluir a carga positiva e fornecer coesão nuclear forte adicional, elevando N/Z de 1,0 até ~1,5 no chumbo (Z=82).",
    "distractorAnalysis": [
      "Está incorreta: à medida que Z aumenta, a repulsão coulombiana cresce com Z² (longo alcance), exigindo mais neutrões (N/Z até ~1,5) para diluir a repulsão e adicionar atração forte.",
      "Está incorreta: uma razão N/Z de 0,5 significaria o dobro de protões do que neutrões, o que tornaria qualquer núcleo acima do hélio instantaneamente instável por repulsão eletrostática.",
      "Está incorreta: núcleos pesados estáveis (ex: Pb-208 com Z=82 e N=126) possuem N/Z ≈ 1,54; se N/Z fosse 1,00, a repulsão elétrica despedaçaria o núcleo imediatamente."
    ],
    "nursingApplication": "Compreender a curva N/Z permite ao enfermeiro prever o tipo de decaimento de um radioisótopo: núcleos com excesso de neutrões (acima da faixa de estabilidade) decaem por emissão beta negativa (β⁻), enquanto núcleos deficientes em neutrões (abaixo da faixa) decaem por emissão de positrões (β⁺) ou captura eletrónica, como o Flúor-18 utilizado no exame PET."
  },
  {
    "id": 6008,
    "topicId": 6,
    "question": "Acima de qual Número Atómico (Z) NENHUM elemento químico da tabela periódica possui isótopos estáveis na natureza, sendo todos eles obrigatoriamente radioativos e sujeitos a decaimento espontâneo?",
    "options": [
      "Z > 82 (acima do chumbo, Z = 82, todos os elementos químicos como o bismuto Z = 83, polónio Z = 84 e urânio Z = 92 são instáveis e radioativos, não existindo qualquer isótopo estável).",
      "Z > 20 (acima do cálcio todos os elementos químicos da tabela periódica sofrem decaimento radioativo espontâneo imediato, sendo inviável a sua presença em compostos biológicos).",
      "Z > 118 (todos os elementos químicos naturais até ao oganésson possuem isótopos perfeitamente estáveis na natureza, ocorrendo radioatividade apenas em amostras sintéticas de laboratório).",
      "Z > 53 (acima do iodo todos os núcleos sofrem fissão nuclear espontânea violenta, razão pela qual o contraste iodado é o último composto químico utilizado com segurança diagnóstica)."
    ],
    "correctIndex": 0,
    "explanation": "O Chumbo-208 (²⁰⁸₈₂Pb) é o nuclídeo estável mais pesado conhecido na natureza (possui uma 'dupla magia' com Z=82 e N=126). Para Z ≥ 83 (começando no Bismuto-209, que tem semivida extremamente longa, e todos os seguintes: Polónio-84, Rádon-86, Rádio-88, Urânio-92), o número colossal de protões gera uma repulsão coulombiana tão avassaladora que a força nuclear forte é incapaz de manter o núcleo estável indefinidamente. Todos sofrem decaimento radioativo espontâneo (sobretudo por emissão de partículas alfa e fissão).",
    "distractorAnalysis": [
      "Está incorreta: o chumbo (Z = 82, particularmente o Pb-208 duplamente mágico) é o elemento estável mais pesado; todos os elementos com Z ≥ 83 são radioativos e instáveis.",
      "Está incorreta: elementos vitais com Z > 20 como o ferro (Z=26), zinco (Z=30) e iodo (Z=53) possuem isótopos perfeitamente estáveis fundamentais para a biologia humana.",
      "Está incorreta: elementos como urânio (Z=92), rádio (Z=88) e radão (Z=86) são radioativos naturais; elementos transurânicos (Z>92) são todos instáveis e sintéticos."
    ],
    "nursingApplication": "Radioisótopos pesados como o Rádio-223 (²²³Ra, emissor de partículas alfa aprovado no tratamento de metástases ósseas no cancro da próstata resistente à castração) situam-se acima de Z=82. O enfermeiro administra este alfa-emissor monitorizando parâmetros hematológicos (vigilância de mielossupressão)."
  },
  {
    "id": 6009,
    "topicId": 6,
    "question": "O conceito de 'Defeito de Massa' (Δm) na física nuclear traduz qual facto experimental incontestável?",
    "options": [
      "A massa do núcleo ligado é sempre cinquenta por cento superior à soma das massas dos nucleões isolados devido à acumulação contínua de fotões de luz no interior do poço nuclear.",
      "A massa em repouso de um núcleo atómico ligado é rigorosamente inferior à soma das massas individuais dos protões e neutrões livres que o constituem quando separados: Δm = (Z·m_p + N·m_n) - m_núcleo.",
      "O defeito de massa traduz a perda de eletrões orbitais da camada de valência provocada pela evaporação térmica da amostra radioativa durante a pesagem analítica laboratorial.",
      "A massa dos protões e neutrões anula-se mutuamente quando confinados no núcleo, fazendo com que o átomo ligado apresente uma massa total em repouso estritamente igual a zero gramas."
    ],
    "correctIndex": 1,
    "explanation": "Se somarmos a massa de 2 protões livres e 2 neutrões livres (como os que formam o núcleo de Hélio-4, partícula alfa), a soma das massas é m_separados = 4,03188 u. Contudo, ao medir a massa real do núcleo de He-4 ligado num espetrómetro de massa de precisão, verifica-se que m_núcleo = 4,00151 u! Há uma perda real de massa de Δm = 0,03037 u (cerca de 0,75% da massa total). Essa 'massa desaparecida' foi convertida em Energia de Ligação Nuclear durante a fusão dos nucleões.",
    "distractorAnalysis": [
      "Está incorreta: a massa do núcleo é sempre menor que a massa dos seus constituintes separados; essa massa 'em falta' (defeito de massa Δm) foi convertida na energia de ligação nuclear.",
      "Está incorreta: o núcleo ligado não ganha massa; pelo princípio da equivalência massa-energia (E = mc²), perder energia de ligação ao formar-se implica obrigatoriamente perder massa.",
      "Está incorreta: o defeito de massa refere-se estritamente aos nucleões no núcleo e não a eletrões de valência ou artefactos evaporativos de balanças laboratoriais."
    ],
    "nursingApplication": "O defeito de massa é a prova experimental direta da equação de Albert Einstein: ele confirma que a massa e a energia são duas faces da mesma moeda física universal. Na medicina nuclear, é precisamente essa energia de ligação libertada nas transições nucleares que é aproveitada na imagiologia e radioterapia."
  },
  {
    "id": 6010,
    "topicId": 6,
    "question": "A célebre equação de Albert Einstein (E = Δm · c²) relaciona o defeito de massa com a 'Energia de Ligação Nuclear' (Binding Energy, B). Qual é o significado físico da energia de ligação nuclear?",
    "options": [
      "É a quantidade de energia térmica que um reator nuclear consome por segundo a partir da rede elétrica pública para manter os protões em repouso no interior das barras de combustível.",
      "Corresponde à energia cinética máxima que os eletrões orbitais adquirem quando ejetados por efeito fotoelétrico após colisão com fotões de luz visível na superfície metálica do tubo.",
      "É a energia necessária para desagregar completamente todos os nucleões de um núcleo atómico até distâncias infinitas (ou a energia libertada quando nucleões livres se fundem para formar o núcleo).",
      "Representa a energia necessária para transformar um núcleo atómico num neutrão isolado através da emissão contínua de ondas de som ultrassónico em meio aquoso hospitalar estéril."
    ],
    "correctIndex": 2,
    "explanation": "A Energia de Ligação Nuclear (B = Δm · c²) é a energia de coesão do núcleo. Para estilhaçar um núcleo estável nos seus protões e neutrões constituintes livres, é obrigatório fornecer externamente uma energia igual a B. Como a velocidade da luz ao quadrado é um número gigantesco (c² ≈ 9 × 10¹⁶ m²/s²), uma minúscula fração de grama de defeito de massa liberta energias colossais. No sistema de unidades nucleares: 1 unidade de massa atómica (u) equivale a 931,5 Megaeletrão-Volts (MeV).",
    "distractorAnalysis": [
      "Está incorreta: a energia de ligação nuclear (B = Δm·c²) quantifica a estabilidade do núcleo: quanto maior for B, mais energia é necessária para quebrar o núcleo nos seus nucleões constituintes.",
      "Está incorreta: reatores nucleares geram eletricidade (libertam energia) através da fissão e não consomem energia externa para manter núcleos unidos.",
      "Está incorreta: efeito fotoelétrico envolve energia de ligação eletrónica orbital (eV ou keV); a energia de ligação nuclear atua nos nucleões e mede-se em megaeletrões-volt (MeV)."
    ],
    "nursingApplication": "Para o núcleo de Hélio-4, a energia de ligação total é de cerca de 28,3 MeV. Comparativamente, a quebra de uma ligação química de glicose ou ATP liberta apenas alguns eletrão-volts (~2 a 5 eV). As reações nucleares envolvem energias cerca de 1.000.000 de vezes superiores às reações químicas celulares, justificando os cuidados extremos com a proteção contra radiações."
  },
  {
    "id": 6011,
    "topicId": 6,
    "question": "O gráfico da 'Energia de Ligação Média por Nucleão' (B / A) em função do Número de Massa (A) exibe um pico máximo absoluto em torno de qual elemento químico e o que significa esse máximo?",
    "options": [
      "No Hidrogénio-1, onde atinge mais de cem megaeletrões-volt por nucleão, tornando o protão isolado o elemento com maior rendimento termodinâmico para processos de fissão nuclear pesada.",
      "No Urânio-238, onde atinge um pico de cinquenta megaeletrões-volt por nucleão, sendo este o motivo biofísico pelo qual o urânio é o elemento mais seguro e estável de toda a crosta terrestre.",
      "A energia de ligação média por nucleão é perfeitamente constante e idêntica em todos os isótopos conhecidos (fixada em 5,0 MeV), não apresentando qualquer pico ou variação ao longo de A.",
      "Em torno do Ferro-56 e Níquel-62, onde atinge cerca de 8,8 MeV/nucleão, correspondendo aos núcleos mais fortemente ligados e termodinamicamente mais estáveis da natureza (fusão antes, fissão depois)."
    ],
    "correctIndex": 3,
    "explanation": "A curva de B/A vs A parte de valores baixos em núcleos muito leves (ex: Deutério, ²H, com B/A ≈ 1,1 MeV/nucleão), sobe acentuadamente até atingir o patamar máximo na região dos elementos de transição de massa intermediária (⁵⁶Fe com 8,79 MeV/nucleão e ⁶²Ni com 8,8 MeV/nucleão) e depois decai lentamente para os elementos pesados (²³⁸U com ~7,6 MeV/nucleão). Os núcleos de ferro e níquel são os mais firmemente ligados: não libertam energia por fusão nem por fissão.",
    "distractorAnalysis": [
      "Está incorreta: a curva de B/A sobe rapidamente nos elementos leves até ao pico no Fe-56 (~8,8 MeV/nucleão) e desce suavemente nos pesados (~7,6 MeV no U-238); núcleos leves fundem e pesados cindem em busca do pico.",
      "Está incorreta: o H-1 é um protão isolado sem neutrões, tendo energia de ligação nuclear rigorosamente zero; a fusão de hidrogénio em hélio liberta enorme energia porque o He-4 tem B/A alto (~7,1 MeV).",
      "Está incorreta: o Urânio-238 tem B/A menor (~7,6 MeV) que o ferro devido à repulsão eletrostática dos 92 protões, tornando a sua fissão energeticamente favorável."
    ],
    "nursingApplication": "A curva de B/A dita as duas grandes fontes de energia nuclear: 1) Núcleos muito leves abaixo do Ferro libertam energia ao fundirem-se (Fusão Nuclear das estrelas); 2) Núcleos muito pesados acima do Ferro libertam energia ao dividirem-se em fragmentos médios (Fissão Nuclear em reatores), processo que produz os radioisótopos médicos utilizados no hospital."
  },
  {
    "id": 6012,
    "topicId": 6,
    "question": "No 'Modelo das Camadas Nucleares' (Nuclear Shell Model, formulado por Maria Goeppert Mayer e J. Hans Jensen, Prémio Nobel de 1963), certos números específicos de protões ou neutrões conferem uma estabilidade nuclear extraordinária. Como são denominados estes números e quais são eles?",
    "options": [
      "Números Mágicos (2, 8, 20, 28, 50, 82 e 126 nucleões), correspondentes ao preenchimento completo de camadas quânticas nucleares fechadas dotadas de alta estabilidade e separação energética.",
      "Números Críticos (1, 3, 5, 7, 9, 11 e 13 nucleões), que determinam a transmutação imediata de qualquer átomo num gás nobre inerte quando submetido a campos magnéticos intensos de RMN.",
      "Coeficientes Estocásticos de Planck (10, 25, 50, 75 e 100 nucleões), que quantificam a taxa de decaimento de radiofármacos em medicina nuclear durante a fase de excreção urinária.",
      "Níveis de Valence de Rydberg (4, 16, 32, 64 e 128 nucleões), que regulam a condutividade elétrica dos eletrões livres nas soluções de contraste iodado utilizadas em angiografia digital."
    ],
    "correctIndex": 0,
    "explanation": "Analogamente às camadas eletrónicas dos gases nobres (2, 10, 18, 36... eletrões que conferem inércia química), o potencial nuclear médio com forte acoplamento spin-órbita organiza os protões e neutrões em níveis quânticos discretos. O preenchimento completo de uma camada ocorre para os Números Mágicos: 2, 8, 20, 28, 50, 82 (e 126 para neutrões). Núcleos com números mágicos de protões e/ou neutrões (como o ⁴₂He com 2p/2n, ¹⁶₈O com 8p/8n, ⁴⁰₂₀Ca com 20p/20n e ²⁰⁸₈₂Pb com 82p/126n) possuem abundância cósmica extraordinária e energia de ligação elevadíssima.",
    "distractorAnalysis": [
      "Está incorreta: os 'números mágicos' nucleares refletem camadas fechadas com acoplamento spin-órbita no modelo em camadas; núcleos duplamente mágicos (ex: He-4, O-16, Ca-40, Pb-208) são extraordinariamente estáveis.",
      "Está incorreta: números ímpares não conferem estabilidade mágica (a grande maioria dos núcleos estáveis tem Z par e N par devido ao emparelhamento de nucleões).",
      "Está incorreta: coeficientes de Planck ou níveis de Rydberg relacionam-se com a física quântica atómica/espectroscópica e não com os números mágicos de estabilidade do modelo em camadas nucleares."
    ],
    "nursingApplication": "O conhecimento dos números mágicos explica a estabilidade extrema das partículas Alfa (núcleo de ⁴₂He com 2 protões e 2 neutrões, 'duplamente mágico'): a sua coesão nuclear colossal faz com que núcleos pesados e instáveis ejetem preferencialmente aglomerados alfa pré-formados no decaimento radioativo alfa, em vez de ejetarem protões ou neutrões isolados."
  },
  {
    "id": 6013,
    "topicId": 6,
    "question": "O que caracteriza biofisicamente um 'Estado Isomérico' ou estado metaestável de um núcleo atómico, designado pela letra 'm' (como no Tecnécio-99m, ⁹⁹ᵐTc)?",
    "options": [
      "Uma forma química volátil na qual o elemento radioativo se converte espontaneamente num gás nobre que se difunde rapidamente através das paredes de chumbo do contentor de transporte.",
      "Um estado nuclear excitado de energia com semivida mensurável prolongada (horas ou dias) antes de transitar para o estado fundamental por Transição Isomérica com emissão de gama pura.",
      "Um núcleo atómico que perdeu todos os seus protões, mantendo unicamente uma nuvem de neutrões e eletrões que giram a velocidades superiores à da luz no vácuo intersticial celular.",
      "Uma alteração na qual o radioisótopo emite unicamente partículas alfa altamente penetrantes, dispensando qualquer equipamento de deteção e colimação em câmaras gama hospitalares."
    ],
    "correctIndex": 1,
    "explanation": "A grande maioria dos estados nucleares excitados desexcita-se quase instantaneamente (em picosssegundos, ~10⁻¹² s) por emissão gama. Contudo, quando há uma grande diferença de spin nuclear e paridade entre o estado excitado e o estado fundamental, a desexcitação é mecanicamente retardada por regras de seleção quântica: o estado torna-se 'metaestável' (isómero nuclear, indicado por 'm'). O ⁹⁹ᵐTc permanece nesse estado excitado com uma semivida física de cerca de 6,01 horas antes de decair por Transição Isomérica para o ⁹⁹Tc, emitindo um fotão gama puro de 140 keV.",
    "distractorAnalysis": [
      "Está incorreta: no estado isomérico (ex: Tc-99m, T1/2 = 6 horas), o núcleo excitado permanece 'preso' num nível metaestável devido a restrições de momento angular (spin), decaindo por emissão gama pura de 140 keV.",
      "Está incorreta: a transição isomérica não altera o número atómico Z nem o número de massa A; o tecnécio-99m permanece tecnécio (Tc-99 no estado fundamental) sem se tornar um gás nobre.",
      "Está incorreta: o Tc-99m não emite partículas alfa; a emissão de fotões gama puros de 140 keV sem partículas beta ou alfa associadas é a propriedade ideal para a medicina nuclear diagnóstica."
    ],
    "nursingApplication": "O Tecnécio-99m é o 'cavalo de batalha' da medicina nuclear mundial (usado em mais de 80% de todas as cintigrafias diagnósticas): a sua semivida metaestável de 6 horas é ideal (tempo suficiente para preparar o radiofármaco, administrar ao doente e adquirir as imagens numa câmara gama, com decaimento rápido subsequente que minimiza a dose de radiação residual para o doente e equipa de enfermagem)."
  },
  {
    "id": 6014,
    "topicId": 6,
    "question": "Na produção de radioisótopos médicos para imagiologia em reatores nucleares, como é obtido o Molibdénio-99 (⁹⁹Mo), precursor fundamental a partir do qual é gerado o Tecnécio-99m?",
    "options": [
      "Através da evaporação química de minérios de molibdénio estável em caldeiras térmicas de alta pressão em centrais convencionais alimentadas a gás natural comprimido.",
      "Por eletrólise prolongada de água do mar concentrada em cubas galvânicas industriais, utilizando elétrodos de platina pura sob voltagens contínuas de duzentos e vinte volts.",
      "Por fissão nuclear induzida do Urânio-235 bombardeado com neutrões térmicos em reatores de investigação (rendimento de fissão de ~6,1%), seguido de separação e purificação radioquímica estrita.",
      "Pela exposição de amostras de sal de cozinha comum à luz solar direta no topo de edifícios hospitalares durante os meses de verão com índice de radiação ultravioleta extremo."
    ],
    "correctIndex": 2,
    "explanation": "O Molibdénio-99 (semivida T_1/2 ≈ 66 horas) é produzido primariamente em reatores nucleares de investigação através da fissão de alvos de Urânio-235: ²³⁵U + n -> fragmentos de fissão (incluindo ⁹⁹Mo) + 2 a 3 neutrões + 200 MeV. Após dissolução do alvo em células quentes blindadas, o ⁹⁹Mo é extraído quimicamente e acondicionado em colunas cromatográficas de alumina para fabrico dos geradores hospitalares de tecnécio.",
    "distractorAnalysis": [
      "Está incorreta: o Mo-99 de alta atividade específica é obtido em alvos de U-235 em reatores nucleares de investigação através da reação de fissão U-235(n,f)Mo-99.",
      "Está incorreta: métodos químicos ou térmicos comuns não alteram os núcleos atómicos nem criam isótopos radioativos instáveis a partir de minérios estáveis.",
      "Está incorreta: eletrólise decompõe água em hidrogénio e oxigénio gasoso e não induz reações nucleares de transmutação isotópica para gerar molibdénio-99."
    ],
    "nursingApplication": "A cadeia global de fornecimento de ⁹⁹Mo depende de poucos reatores nucleares no mundo: quando ocorre paragem técnica de um reator, há escassez imediata de geradores de tecnécio nos hospitais. O enfermeiro de medicina nuclear gere a lista de espera e prioriza os doentes oncológicos e cardiológicos mais críticos para a realização de cintigrafias."
  },
  {
    "id": 6015,
    "topicId": 6,
    "question": "O funcionamento do 'Gerador de Radionuclídeos Mo-99/Tc-99m' (popularmente conhecido como 'vaca de tecnécio') baseia-se no princípio físico do 'Equilíbrio Transiente'. Como opera a eluição diária deste gerador pelo serviço hospitalar?",
    "options": [
      "O gerador funciona por centrifugação mecânica manual a alta rotação, que separa o tecnécio líquido do molibdénio gasoso através de um filtro de papel de celulose porosa comum.",
      "A extração do tecnécio exige a lavagem da coluna com soluções ácidas concentradas quentes para dissolver o invólucro de chumbo e recolher os radiofármacos precipitados no fundo do frasco.",
      "O gerador converte eletricidade da rede hospitalar em tecnécio-99m através da ionização de ar comprimido, sem necessidade de qualquer isótopo precursor ou coluna de alumina.",
      "O Mo-99 pai (T₁/₂ ≈ 66 h) adsorvido em coluna de alumina decai para Tc-99m (T₁/₂ ≈ 6 h); a passagem de soro fisiológico estéril elui o pertecnetato solúvel, ficando o molibdénio retido na coluna."
    ],
    "correctIndex": 3,
    "explanation": "Num sistema pai-filho onde a semivida do pai é moderadamente superior à do filho (T_pai = 66 h vs T_filho = 6 h, razão ~11:1), atinge-se o Equilíbrio Transiente após cerca de 23 horas: a atividade do filho atinge o pico máximo e depois decai com a semivida aparente do pai. Como o MoO₄²⁻ (molibdato) liga-se fortemente à resina de óxido de alumínio e o TcO₄⁻ (pertecnetato) tem afinidade muito fraca, a passagem asséptica de NaCl a 0,9% elui seletivamente o pertecnetato de ⁹⁹ᵐTc puro no frasco de vácuo, regenerando-se nova atividade máxima em 24 horas.",
    "distractorAnalysis": [
      "Está incorreta: o molibdato (MoO4²⁻) liga-se fortemente à coluna cromatográfica de alumina (Al2O3); o decaimento gera pertecnetato (TcO4⁻), com menor afinidade, eluído com NaCl a 0,9% estéril.",
      "Está incorreta: a eluição é um processo de separação cromatográfica em fase aquosa e não centrifugação mecânica de gases.",
      "Está incorreta: o pertecnetato de sódio eluído destina-se a injeção endovenosa em seres humanos; o uso de reagentes tóxicos seria letal; utiliza-se solução fisiológica estéril."
    ],
    "nursingApplication": "Na manipulação do gerador de tecnécio na câmara de fluxo laminar blindada, o profissional de saúde e o enfermeiro executam a eluição em condições estritas de assepsia para injetáveis (ausência de pirogénios e bactérias) e realizam o teste de controlo de qualidade para 'fuga de molibdénio' (Mo breakthrough): o limite máximo legal de contaminação por Mo-99 na solução de ⁹⁹ᵐTc é de apenas 0,15 kBq por MBq."
  },
  {
    "id": 6016,
    "topicId": 6,
    "question": "Os radioisótopos emissores de positrões utilizados na Tomografia por Emissão de Positrões (PET), como o Flúor-18 (¹⁸F, T₁/₂ ≈ 110 minutos), NÃO podem ser produzidos em reatores nucleares convencionais. Que equipamento de física nuclear é utilizado para a sua produção nos centros hospitalares?",
    "options": [
      "Um cíclotron biomédico (acelerador circular de partículas) que acelera protões em espiral magnética com alta frequência até 10-18 MeV, bombardeando água com O-18 via reação ¹⁸O(p,n)¹⁸F.",
      "Um reator nuclear de fusão a alta temperatura que funde núcleos de hidrogénio em hélio para produzir isótopos de flúor radioativo por fluxo neutrónico acelerado em cadeia.",
      "Uma câmara de ionização de quartzo que recolhe os positrões emitidos espontaneamente pela decomposição biológica da glicose nos doentes internados na enfermaria oncológica.",
      "Um forno micro-ondas industrial que aquece soluções de ácido fluorídrico a mil graus Celsius para induzir a emissão de positrões por excitação térmica da camada eletrónica de valência."
    ],
    "correctIndex": 0,
    "explanation": "Isótopos emissores de positrões (β⁺) são núcleos com 'excesso de protões' (abaixo da faixa de estabilidade): requerem a adição forçada de um protão ao núcleo contra a barreira de Coulomb. Isto só é exequível acelerando protões a altíssima velocidade num Cíclotron. No caso do ¹⁸F: um feixe de protões de alta energia atinge um alvo de água enriquecida com Oxigénio-18 [H₂¹⁸O]; o protão é absorvido e um neutrão é ejetado (reação ¹⁸₈O + p -> ¹⁸₉F + n). O ¹⁸F produzido é de imediato ligado quimicamente à molécula de desoxiglicose num módulo de síntese robotizado para produzir a ¹⁸F-FDG.",
    "distractorAnalysis": [
      "Está incorreta: radioisótopos emissores de positrões (como F-18, C-11, N-13, O-15) têm excesso de protões e semividas curtas (F-18 ≈ 110 min), sendo produzidos por bombardeamento de protões em ciclotrões.",
      "Está incorreta: a fusão termonuclear não é utilizada na produção hospitalar de radiofármacos para PET; utilizam-se alvos líquidos de água enriquecida com O-18 em ciclotrões médicos compactos.",
      "Está incorreta: o flúor-18 é sintetizado e acoplado quimicamente à desoxiglicose (18F-FDG) num laboratório de radiofarmácia anexo ao ciclotrão antes de ser administrado ao utente."
    ],
    "nursingApplication": "Devido à semivida física ultracurta do Flúor-18 (apenas 110 minutos = menos de 2 horas!), o tempo é ouro na enfermagem de PET: o atraso de apenas 2 horas na administração da ¹⁸F-FDG ao doente reduz a radioatividade da seringa para metade (1 meia-vida) por decaimento físico contínuo dentro da blindagem de tungsténio."
  },
  {
    "id": 6017,
    "topicId": 6,
    "question": "O fenómeno de 'Tunelamento Quântico' (quantum tunneling) é indispensável para explicar como as partículas Alfa conseguem escapar do interior do núcleo atómico no decaimento alfa. Como se explica este fenómeno na física moderna?",
    "options": [
      "A partícula alfa escava mecanicamente um canal cilíndrico através dos protões nucleares por ação abrasiva de rotação centrífuga induzida pelos campos gravitacionais terrestres.",
      "Pela dualidade onda-corpúsculo da matéria, a função de onda da partícula alfa possui probabilidade finita de atravessar a barreira de potencial coulombiana repulsiva do núcleo sem saltar por cima dela.",
      "O tunelamento é a fusão de quatro eletrões que abrem os poros da membrana nuclear da célula para deixar passar os neutrões em direção ao retículo endoplasmático rugoso tecidual.",
      "O fenómeno ocorre apenas se o núcleo atómico for arrefecido a temperaturas criogénicas em câmaras hospitalares dotadas de isolamento térmico por hélio líquido supercondutor."
    ],
    "correctIndex": 1,
    "explanation": "Na física clássica de Newton, se uma partícula não tiver energia suficiente para superar uma barreira de potencial elétrico, fica aprisionada para sempre (probabilidade de escape zero). Na mecânica quântica (resolvida por George Gamow em 1928), a partícula alfa comporta-se como uma onda quântica: a sua função de onda decai exponencialmente dentro da barreira de potencial mas emerge com amplitude diferente de zero do outro lado. Isto permite à partícula alfa 'tunelar' através da barreira proibida, sendo ejetada a alta velocidade.",
    "distractorAnalysis": [
      "Está incorreta: na física clássica a partícula alfa (~5 MeV) não teria energia para superar a barreira de Coulomb (~25 MeV); a mecânica quântica (Gamow, 1928) explica o decaimento por tunelamento da função de onda.",
      "Está incorreta: o tunelamento quântico é um efeito probabilístico puramente ondulatório subatómico e não uma escavação mecânica macroscópica de túneis.",
      "Está incorreta: o decaimento alfa ocorre espontaneamente no interior do núcleo atómico e independe da temperatura do meio, ocorrendo tanto a milhares de graus como a temperaturas ambientes."
    ],
    "nursingApplication": "O tunelamento quântico explica a gigantesca variação das semividas dos emissores alfa na medicina (Lei de Geiger-Nuttall): pequenas variações na energia da partícula alfa alteram a probabilidade de tunelamento em dezenas de ordens de grandeza, fazendo com que o Urânio-238 tenha uma meia-vida de 4,5 mil milhões de anos, enquanto o Polónio-214 decai em escassos microssegundos."
  },
  {
    "id": 6018,
    "topicId": 6,
    "question": "Na física das partículas elementares e constituição dos nucleões, os protões e neutrões não são partículas indivisíveis fundamentais, sendo formados por combinações de 'Quarks' mantidos unidos por glúons. Qual é a estrutura de quarks de um Protão e de um Neutrão?",
    "options": [
      "O protão é composto por quatro eletrões positivos e o neutrão por quatro neutrões microscópicos mantidos unidos por forças gravitacionais no interior de cada nucleão individual.",
      "Protões e neutrões são esferas maciças perfeitamente indivisíveis e desprovidas de estrutura interna, sendo mantidas unidas pela pressão osmótica da água intracelular circundante.",
      "O protão é formado por 2 quarks up e 1 quark down (uud, carga 2/3 + 2/3 - 1/3 = +1); o neutrão é formado por 1 quark up e 2 quarks down (udd, carga 2/3 - 1/3 - 1/3 = 0), unidos por glúons.",
      "O protão contém três quarks down (ddd, carga negativa) e o neutrão contém três quarks up (uuu, carga positiva dupla), compensando-se as cargas elétricas por rotação quântica simétrica."
    ],
    "correctIndex": 2,
    "explanation": "Segundo o Modelo Padrão da física de partículas (Gell-Mann e Zweig): os hadrões bariónicos são formados por três quarks de spin 1/2. O quark 'up' (u) possui carga fracionária +2/3 e o quark 'down' (d) possui carga -1/3. O protão tem a combinação uud: (+2/3) + (+2/3) + (-1/3) = +1e. O neutrão tem a combinação udd: (+2/3) + (-1/3) + (-1/3) = 0e. Os quarks trocam continuamente glúons (os mediadores da Força Forte) mantendo-se em confinamento de cor perpétuo.",
    "distractorAnalysis": [
      "Está incorreta: o Modelo Padrão da física de partículas define os nucleões como bariões compostos por três quarks de valência: protão = uud (carga +1) e neutrão = udd (carga 0).",
      "Está incorreta: nucleões não são compostos por eletrões ou forças gravitacionais; a força nuclear que os mantém unidos é a força forte mediada pela troca de glúons entre os quarks.",
      "Está incorreta: experiências de dispersão inelástica profunda no SLAC nos anos 1960 comprovaram que protões e neutrões possuem estrutura interna constituída por partículas pontuais (quarks)."
    ],
    "nursingApplication": "No decaimento beta negativo (β⁻) que o enfermeiro encontra em doentes tratados com Iodo-131, o que ocorre a nível subatómico íntimo é a conversão de um quark down num quark up (d -> u + e⁻ + ν̄_e): o neutrão (udd) transforma-se num protão (uud), emitindo um eletrão rápido (partícula beta) e um antineutrino do elétrão."
  },
  {
    "id": 6019,
    "topicId": 6,
    "question": "Qual é a razão pela qual a massa do Neutrão livre (m_n ≈ 939,57 MeV/c²) é ligeiramente SUPERIOR à massa do Protão livre (m_p ≈ 938,27 MeV/c²)?",
    "options": [
      "O neutrão livre é mais pesado porque absorve continuamente fotões de luz ambiente da sala, tornando-se perfeitamente estável e incapaz de sofrer qualquer decaimento radioativo.",
      "A massa do protão é superior à do neutrão em qualquer circunstância física, sendo o protão isolado a única partícula elementar que decai espontaneamente em eletrões em dez segundos.",
      "O neutrão e o protão possuem massas rigorosamente idênticas até à trigésima casa decimal, mantendo-se o neutrão isolado perfeitamente estável e inalterado durante milhares de anos.",
      "O quark down é ligeiramente mais pesado que o quark up, tornando o neutrão livre isolado mais pesado e instável fora do núcleo, decaindo por beta menos em protão, eletrão e antineutrino (T₁/₂ ≈ 10-15 min)."
    ],
    "correctIndex": 3,
    "explanation": "Como a massa do quark d é maior que a do quark u (m_d ≈ 4,7 MeV vs m_u ≈ 2,2 MeV), a massa de repouso do neutrão (udd) é cerca de 1,29 MeV maior que a do protão (uud). Como na física as partículas decaem espontaneamente para estados de menor energia/massa, um neutrão livre isolado no vácuo é INSTÁVEL: desintegra-se espontaneamente por força nuclear fraca em protão, eletrão e antineutrino com uma meia-vida de cerca de 880 segundos (~14,7 minutos). Dentro de núcleos estáveis, a forte energia de ligação inibe este decaimento.",
    "distractorAnalysis": [
      "Está incorreta: mn ≈ 939,57 MeV/c² vs mp ≈ 938,27 MeV/c²; como mn > mp + me, o neutrão livre decai espontaneamente por decaimento beta menos (n -> p + e⁻ + ν̄e) com semivida de ~880 segundos.",
      "Está incorreta: se o protão fosse mais pesado que o neutrão, os protões do hidrogénio decairiam em neutrões e o Universo não conteria átomos de hidrogénio nem água ou vida.",
      "Está incorreta: os neutrões só são estáveis quando confinados no interior de núcleos atómicos ligados por energia de ligação nuclear suficiente para proibir o decaimento beta livre."
    ],
    "nursingApplication": "A instabilidade do neutrão livre fora do núcleo é uma salvaguarda biológica natural: neutrões libertados em reatores ou terapias de captura neutrónica (BNCT) decaem rapidamente em protões e eletrões inócuos se escaparem para o ambiente, reduzindo a permanência de feixes neutrónicos descontrolados."
  },
  {
    "id": 6020,
    "topicId": 6,
    "question": "No contexto da Fissão Nuclear em cadeia controlada para produção de energia e radioisótopos médicos, qual é o papel desempenhado pelo 'Moderador de Neutrões' (como a Água Leve, Água Pesada ou Grafite) no núcleo do reator?",
    "options": [
      "Desacelerar por colisões elásticas os neutrões rápidos da fissão (~2 MeV) até energias térmicas lentas (~0,025 eV), aumentando exponencialmente a secção eficaz de nova fissão no Urânio-235.",
      "Acelerar os neutrões emitidos na fissão para velocidades relativistas próximas da velocidade da luz para que consigam perfurar as blindagens de chumbo e betão do reator nuclear.",
      "Neutralizar eletricamente o urânio do combustível para impedir que os átomos de combustível sofram repulsão magnética e saiam disparados do vaso de pressão do reator hospitalar.",
      "Absorver cem por cento de todos os neutrões libertados para extinguir instantaneamente a reação em cadeia e manter a temperatura do reator permanentemente abaixo de zero graus."
    ],
    "correctIndex": 0,
    "explanation": "Os neutrões nascem na fissão com energias cinéticas muito elevadas (neutrões rápidos, v ≈ 20.000 km/s). Contudo, a probabilidade quântica (secção eficaz de captura induzida de fissão, σ_fissão) de um átomo de ²³⁵U capturar um neutrão e cindi-lo é centenas de vezes superior para neutrões lentos em equilíbrio térmico à temperatura ambiente (~0,025 eV, v ≈ 2,2 km/s). O moderador é constituído por núcleos de massa atómica semelhante à do neutrão (hidrogénio ou deutério da água): em cada colisão elástica frontal, o neutrão transfere grande parte da sua energia cinética para o núcleo moderador, travando suavemente até ao regime térmico.",
    "distractorAnalysis": [
      "Está incorreta: neutrões lentos (térmicos, ~0,025 eV) têm secção eficaz de fissão no U-235 centenas de vezes maior que neutrões rápidos; o moderador (água ou grafite) reduz a energia cinética por choques.",
      "Está incorreta: acelerar neutrões torná-los-ia menos propensos a causar fissão no U-235; materiais que capturam neutrões para controlar a reação são as barras de controlo (cádmio/boro) e não o moderador.",
      "Está incorreta: o moderador não absorve todos os neutrões (isso pararia a reação); apenas modera a sua velocidade sem os capturar em excesso para sustentar a reação em cadeia crítica."
    ],
    "nursingApplication": "A compreensão de que neutrões rápidos podem ser travados por materiais ricos em hidrogénio é o esteio da blindagem contra neutrões: salas com aceleradores lineares médicos de alta energia (>10 MV) onde surgem neutrões secundários por fotoneutrões utilizam portas e paredes com parafina ou polietileno borado (materiais com densos átomos de hidrogénio para moderar e boro para absorver neutrões), protegendo a circulação de enfermeiros."
  },
  {
    "id": 6021,
    "topicId": 6,
    "question": "A força nuclear forte é frequentemente descrita como possuindo um caráter de 'Repulsão a Distâncias Extremamente Curtas' (hard core). O que aconteceria ao núcleo atómico se a força forte não se tornasse fortemente repulsiva para distâncias inferiores a cerca de 0,5 femtómetros?",
    "options": [
      "A força forte torna-se puramente gravitacional a curtas distâncias, fazendo com que todos os nucleões se transformem em buracos negros microscópicos no citoplasma celular.",
      "A distâncias inferiores a cerca de 0,5 fm a força forte torna-se intensamente repulsiva (hard core), impedindo que os nucleões colapsem num ponto singular de densidade infinita e volume nulo.",
      "A força forte atrai os nucleões com força infinita a qualquer distância, comprimindo o núcleo atómico até este atingir um diâmetro microscópico perfeitamente nulo e massa zero.",
      "A força forte converte-se em radiação ultravioleta visível a distâncias inferiores a um micrómetro, iluminando o interior do núcleo com cores fluorescentes observáveis ao microscópio."
    ],
    "correctIndex": 1,
    "explanation": "A Força Forte entre nucleões tem um comportamento fascinante: é fortemente atrativa na faixa de 0,8 a 2,0 fm (mantendo o núcleo coeso), mas torna-se violentamente REPULSIVA a distâncias inferiores a 0,5 fm ('core repulsivo' atribuído à sobreposição das nuvens de quarks e ao Princípio de Exclusão de Pauli entre quarks da mesma cor e sabor). Esta repulsão impede que os protões e neutrões caiam uns para dentro dos outros, garantindo que o núcleo atómico mantenha um volume físico mensurável e impedindo o colapso da matéria cósmica.",
    "distractorAnalysis": [
      "Está incorreta: o potencial nuclear possui um núcleo duro repulsivo (hard core repulsivo a r < 0,5 fm); é esta repulsão que dá aos nucleões um volume efetivo e impede o colapso catastrófico da matéria.",
      "Está incorreta: a densidade nuclear é finita e constante justamente devido a este caráter repulsivo a distâncias ultracurtas e atrativo a distâncias médias (1 a 2 fm).",
      "Está incorreta: a força nuclear forte é de curtíssimo alcance e cai para zero acima de 2-3 fm; a distâncias de micrómetros (10⁻⁶ m) a força forte é rigorosamente nula."
    ],
    "nursingApplication": "Este equilíbrio quântico entre atração e repulsão no núcleo assegura a estabilidade mecânica dos elementos químicos que compõem o corpo humano (oxigénio, carbono, hidrogénio, cálcio), garantindo a solidez dos ossos e a integridade de todos os tecidos biológicos monitorizados na prática de enfermagem."
  },
  {
    "id": 6022,
    "topicId": 6,
    "question": "O fenómeno de 'Captura Neutrónica' seguida de decaimento beta negativo é utilizado em reatores nucleares para produzir o radioisótopo Cobalto-60 (⁶⁰₂₇Co, fonte clássica de teleterapia em oncologia) a partir do Cobalto-59 estável. Qual é a reação nuclear envolvida?",
    "options": [
      "⁵⁹₂₇Co + ⁴₂He -> ⁶³₂₉Cu + β⁺ (fusão termonuclear de cobalto com partículas alfa em fornos solares de alta montanha para a síntese biológica de compostos de cobre quelatado).",
      "⁶⁰₂₈Ni -> ⁵⁹₂₇Co + p + e⁻ (emissão alfa espontânea de níquel acelerado em tubos catódicos de vidro de baixa voltagem para radiografias convencionais de extremidades).",
      "⁵⁹₂₇Co + ¹₀n -> ⁶⁰₂₇Co + γ (captura radiativa de um neutrão térmico pelo núcleo estável de Cobalto-59, originando o Cobalto-60 emissor beta e gama usado em radioterapia).",
      "⁵⁹₂₇Co + ⁰₋₁e -> ⁵⁹₂₆Fe + ν (captura eletrónica forçada pela passagem de corrente contínua em fios de cobre condutores estendidos ao longo do chão do serviço de radiologia)."
    ],
    "correctIndex": 2,
    "explanation": "A ativação neutrónica por captura radiativa (reação do tipo (n, γ)) ocorre quando um núcleo estável absorve um neutrão lento do fluxo do reator: o Cobalto-59 natural (Z=27, A=59) captura um neutrão tornando-se Cobalto-60 (Z=27, A=60). O novo núcleo encontra-se num estado excitado e liberta a energia excedente por emissão de fotões gama de captura. O ⁶⁰Co resultante é um radioisótopo artificial com semivida de cerca de 5,27 anos que decai por emissão β⁻ seguida de dois fotões gama altamente energéticos de 1,17 MeV e 1,33 MeV.",
    "distractorAnalysis": [
      "Está incorreta: a produção industrial de Co-60 em reatores nucleares baseia-se na captura neutrónica: pastilhas de Cobalto-59 estável absorvem um neutrão térmico e tornam-se Co-60 radioativo (T1/2 = 5,27 anos).",
      "Está incorreta: fornos solares produzem apenas calor e não reações de fusão nuclear transmutativas de partículas alfa; a produção de radioisótopos médicos requer reatores ou ciclotrões.",
      "Está incorreta: fios de cobre de circuitos elétricos conduzem corrente e não transmutam cobalto estável em ferro; a captura neutrónica requer fluxo elevado de neutrões em reator."
    ],
    "nursingApplication": "As bombas de Cobalto-60 foram pioneiras na radioterapia oncológica moderna (teleterapia). Embora amplamente substituídas por aceleradores lineares elétricos (que não utilizam fontes radioativas permanentes), ainda existem unidades de Cobalto em muitos países e no sistema 'Gamma Knife' de radiocirurgia cerebral estocástica, onde o enfermeiro vigia o posicionamento milimétrico do doente."
  },
  {
    "id": 6023,
    "topicId": 6,
    "question": "Em física nuclear, o conceito de 'Secção Eficaz' (cross section, representada pela letra grega σ e medida historicamente na unidade Barn, 1 barn = 10⁻²⁸ m²) quantifica qual propriedade física?",
    "options": [
      "Mede a área de superfície da sala de tratamento oncológico necessária para instalar uma bomba de cobalto ou acelerador linear sem violar as normas de higiene hospitalar.",
      "Traduz a quantidade de calor em calorias libertada pela queima de um quilograma de madeira seca em caldeiras de aquecimento central de centros de saúde comunitários.",
      "Corresponde ao volume em litros de sangue arterial que um doente politraumatizado pode perder antes de apresentar choque hipovolémico hemorrágico classe IV no internamento.",
      "Quantifica a probabilidade geométrica e quântica de ocorrência de uma determinada reação nuclear quando projéteis (como neutrões) incidem sobre núcleos de um material alvo (1 barn = 10⁻²⁸ m²)."
    ],
    "correctIndex": 3,
    "explanation": "A secção eficaz (cross section, σ) é a área transversal fictícia efetiva com que um núcleo alvo se apresenta à partícula incidente para que ocorra uma reação nuclear específica (espalhamento, captura, fissão): expressa-se em barns (1 b = 10⁻²⁴ cm² = 10⁻²⁸ m², aproximadamente a área geométrica de um núcleo pesado). Quanto maior for a secção eficaz de um núcleo para uma determinada reação, maior é a probabilidade estatística de colisão produtiva.",
    "distractorAnalysis": [
      "Está incorreta: a secção eficaz (cross section σ) tem dimensão de área e expressa a probabilidade efetiva de interação nuclear; 1 barn = 10⁻²⁸ m² (aproximadamente a área transversal de um núcleo pesado).",
      "Está incorreta: secção eficaz nuclear não mede as dimensões arquitetónicas em metros quadrados das instalações de radioterapia ou áreas de circulação clínica.",
      "Está incorreta: a grandeza é estritamente microscópica da física nuclear e não se relaciona com balanço térmico de biomassa ou perdas volémicas hemodinâmicas."
    ],
    "nursingApplication": "A secção eficaz governa a escolha de materiais de proteção: o Boro-10 e o Cádmio-113 possuem secções eficazes colossais de captura para neutrões térmicos (milhares de barns), sendo por isso adicionados a plásticos e betões de blindagem para absorver neutrões secundários em salas de radioterapia e proteger o posto de enfermagem."
  },
  {
    "id": 6024,
    "topicId": 6,
    "question": "Na estrutura quântica do átomo de acordo com os 'Postulados de Niels Bohr' (1913), como se explica a emissão ou absorção de fotões eletromagnéticos pelos eletrões orbitais?",
    "options": [
      "Os eletrões orbitam em níveis discretos estacionários quantizados sem irradiar; a emissão ou absorção de fotão ocorre na transição entre níveis, com E = E_inicial - E_final = h·f.",
      "Os eletrões emitem radiação eletromagnética contínua em espiral descendente até colidirem e se fundirem com o núcleo atómico em escassos picossegundos de funcionamento.",
      "A emissão de fotões pelos eletrões decorre unicamente da fricção mecânica dos eletrões contra as moléculas de oxigénio gasoso retidas na camada de valência mais externa.",
      "Os eletrões saltam aleatoriamente entre átomos vizinhos a cada segundo, emitindo ondas sonoras audíveis que podem ser auscultadas com estetoscópio na pele do doente examinado."
    ],
    "correctIndex": 0,
    "explanation": "Pela eletrodinâmica clássica de Maxwell, um eletrão em órbita circular acelerada deveria perder energia continuamente por radiação e espiralar para dentro do núcleo em 10⁻¹¹ segundos (átomo clássico instável). Bohr postulou que: 1) Os eletrões movem-se apenas em órbitas estacionárias permitidas com momento angular quantizado (L = n · ℏ); 2) O átomo não irradia nos estados estacionários; 3) A radiação só é emitida ou absorvida durante uma transição quântica entre dois níveis (ΔE = E₂ - E₁ = h · f).",
    "distractorAnalysis": [
      "Está incorreta: o modelo clássico previa o colapso do átomo por emissão contínua em espiral; Bohr postulou órbitas estacionárias estáveis e saltos quânticos discretos com absorção/emissão de fotão h·f.",
      "Está incorreta: átomos neutros isolados não contêm moléculas gasosas entre as órbitas; as órbitas eletrónicas ocorrem no vácuo atómico governadas pela mecânica quântica.",
      "Está incorreta: transições eletrónicas atómicas emitem ondas eletromagnéticas (luz visível, UV ou raios X característicos) e não ondas sonoras mecânicas audíveis por estetoscópio."
    ],
    "nursingApplication": "O modelo de Bohr explica a génese da Radiação X Característica e a base da espectrofotometria utilizada nos oxímetros de pulso que o enfermeiro coloca no dedo do doente: a absorção quantizada de luz vermelha (660 nm) e infravermelha (940 nm) pelos eletrões da oxi-hemoglobina e desoxi-hemoglobina permite calcular a saturação periférica de oxigénio (SpO₂) instantânea."
  },
  {
    "id": 6025,
    "topicId": 6,
    "question": "O fenómeno da 'Fissão Nuclear Espontânea' difere da fissão induzida por ocorrer sem a necessidade de bombardeamento por um neutrão externo. Em qual dos seguintes radioisótopos pesados este fenómeno é clinicamente relevante como fonte de neutrões?",
    "options": [
      "Carbono-12 (¹²C), um isótopo perfeitamente estável que sofre fissão espontânea explosiva à temperatura ambiente em todas as moléculas orgânicas de glicose do sangue humano.",
      "Califórnio-252 (²⁵²Cf), um elemento transurânico pesado artificial que sofre fissão espontânea com emissão contínua de neutrões rápidos, usado em braquiterapia especializada e dosimetria.",
      "Chumbo-208 (²⁰⁸Pb), o núcleo duplamente mágico estável mais pesado que decai por fissão espontânea diária na face interna de todos os aventais plumbíferos de radioproteção.",
      "Hélio-4 (⁴He), o gás nobre estável que se cinde espontaneamente em quatro protões livres sempre que inalado para realização de exames espirométricos de função respiratória."
    ],
    "correctIndex": 1,
    "explanation": "Em núcleos artificiais transurânicos extremamente pesados como o Califórnio-252 (Z=98, T_1/2 ≈ 2,6 anos), a repulsão eletrostática entre os seus 98 protões é tão colossal que a barreira contra a fissão pode ser superada por tunelamento quântico espontâneo: cerca de 3,1% de todas as desintegrações do ²⁵²Cf são fissões espontâneas, cada uma ejetando em média 3,8 neutrões rápidos. Constitui uma fonte de neutrões compacta e potente sem necessidade de reator nuclear.",
    "distractorAnalysis": [
      "Está incorreta: o Californio-252 (T1/2 = 2,6 anos) apresenta probabilidade significativa de fissão nuclear espontânea (~3,1% dos decaimentos), emitindo ~3,7 neutrões por fissão como fonte portátil de neutrões.",
      "Está incorreta: o C-12 é estável e a base da vida orgânica; elementos leves não sofrem fissão nuclear espontânea (a fissão espontânea requer barreira de fissão transponível em núcleos muito pesados).",
      "Está incorreta: o Pb-208 é um dos núcleos mais estáveis conhecidos; aventais de chumbo não sofrem fissão nuclear nem emitem neutrões durante o trabalho hospitalar."
    ],
    "nursingApplication": "Fontes seladas de Califórnio-252 exigem cuidados de radioproteção singulares por parte do enfermeiro: blindagens comuns de chumbo (adequadas para raios gama) são ineficazes contra neutrões rápidos, exigindo contentores volumosos de parafina hidrogenada borada ou água para travar os neutrões antes do chumbo."
  },
  {
    "id": 6026,
    "topicId": 6,
    "question": "A estabilidade nuclear de nuclídeos com número ímpar de protões e número ímpar de neutrões (núcleos Ímpar-Ímpar) é extremamente rara na natureza. Dos mais de 250 nuclídeos estáveis conhecidos, quantos são núcleos ímpar-ímpar estáveis?",
    "options": [
      "Todos os núcleos ímpar-ímpar da tabela periódica são perfeitamente estáveis na natureza em virtude da ressonância magnética simétrica estabelecida entre os protões e os neutrões não emparelhados.",
      "A totalidade dos elementos químicos com número atómico superior a dez possui exclusivamente isótopos ímpar-ímpar com abundância natural de noventa por cento em toda a crosta terrestre.",
      "Existem apenas quatro núcleos leves estáveis na natureza com número ímpar de protões e de neutrões (²₁H - Deutério, ⁶₃Li, ¹⁰₅B e ¹⁴₇N), devido ao efeito desestabilizador do emparelhamento nulo.",
      "A estabilidade ímpar-ímpar é a regra biológica geral na matéria orgânica, sendo o Carbono-12 e o Oxigénio-16 constituídos por núcleos com números ímpares de protões e neutrões emparelhados."
    ],
    "correctIndex": 2,
    "explanation": "A força nuclear forte inclui uma energia de emparelhamento (pairing energy): protões com spins opostos emparelham-se entre si com grande ganho de estabilidade, e o mesmo fazem os neutrões. Núcleos Par-Par (Z par e N par) são os mais estáveis e abundantes (mais de 160 nuclídeos estáveis). Núcleos Par-Ímpar ou Ímpar-Par têm estabilidade intermediária (~100 estáveis). Núcleos Ímpar-Ímpar possuem um protão desemparelhado e um neutrão desemparelhado, sendo energeticamente muito desfavoráveis: existem apenas 4 núcleos ímpar-ímpar leves estáveis em toda a natureza (²H, ⁶Li, ¹⁰B e ¹⁴N).",
    "distractorAnalysis": [
      "Está incorreta: o emparelhamento de nucleões (pairing energy) favorece núcleos par-par (mais de 150 estáveis); núcleos ímpar-ímpar estáveis são anomalias raras restritas a 4 elementos muito leves.",
      "Está incorreta: núcleos ímpar-ímpar pesados decaem rapidamente por decaimento beta (positivo ou negativo) para se tornarem núcleos par-par termodinamicamente mais estáveis.",
      "Está incorreta: o C-12 (Z=6, N=6) e o O-16 (Z=8, N=8) são núcleos par-par duplamente simétricos e estáveis, e não núcleos ímpar-ímpar."
    ],
    "nursingApplication": "O efeito de emparelhamento de spin explica por que a maioria dos radiofármacos emissores beta instáveis administrados pelo enfermeiro são nuclídeos ímpar-ímpar ou ímpar-par que decaem rapidamente em busca da configuração par-par de menor energia e maior estabilidade termodinâmica."
  },
  {
    "id": 6027,
    "topicId": 6,
    "question": "Em termos de radiofísica, o que se entende por 'Transmutação Nuclear'?",
    "options": [
      "A transformação mecânica de um líquido radioativo em vapor gasoso através da elevação da temperatura ambiente acima do ponto de ebulição da água destilada hospitalar.",
      "A mudança do estado de oxidação de um ião metálico em solução aquosa por transferência de eletrões de valência periféricos sem qualquer modificação nuclear interna.",
      "A dissolução de pastilhas de sal de iodo em soluções antisséticas cutâneas para promover a esterilização microbiológica de feridas cirúrgicas infetadas no pós-operatório.",
      "A conversão de um elemento químico noutro elemento químico distinto através de alteração do número de protões no núcleo (número atómico Z), por decaimento espontâneo ou reação nuclear induzida."
    ],
    "correctIndex": 3,
    "explanation": "A identidade química de um elemento é definida exclusivamente pelo seu Número Atómico Z (número de protões). A Transmutação Nuclear ocorre quando Z se altera: seja por decaimento radioativo espontâneo (ex: emissão alfa onde Z diminui em 2; decaimento beta onde um neutrão vira protão aumentando Z em 1) ou por reações nucleares induzidas em laboratório (descoberta por Rutherford em 1919 ao transmutar azoto em oxigénio: ¹⁴N + α -> ¹⁷O + p). Realizou-se assim o antigo sonho da alquimia de transformar um elemento químico noutro.",
    "distractorAnalysis": [
      "Está incorreta: transmutação nuclear implica a mudança de Z (mudança de elemento químico), como no decaimento beta (¹³¹₅₃I -> ¹³¹₅₄Xe + β⁻) ou alfa, alterando a identidade atómica.",
      "Está incorreta: evaporação é uma transição de fase física macroscópica que envolve forças intermoleculares sem alterar a estrutura nuclear dos átomos constituintes.",
      "Está incorreta: reações de oxidação-redução envolvem apenas rearranjo de eletrões periféricos na eletrosfera; o núcleo atómico e o número de protões permanecem intactos."
    ],
    "nursingApplication": "No internamento de um doente com cancro diferenciado da tiroide que toma uma cápsula oral de Iodo-131 (¹³¹₅₃I), ocorre uma transmutação nuclear em tempo real dentro das células neoplásicas: cada átomo de Iodo-131 transmuta-se espontaneamente num átomo de Xénon-131 estável (¹³¹₅₄Xe) ao emitir uma partícula beta negativa que destrói o DNA do tumor."
  },
  {
    "id": 6028,
    "topicId": 6,
    "question": "A força nuclear fraca (Interação Fraca) é a quarta força fundamental da natureza. Qual é a sua função exclusiva nos processos nucleares médicos?",
    "options": [
      "É responsável pelos processos de decaimento beta (β⁻ e β⁺) e captura eletrónica, permitindo a transmutação de um quark noutro (mudança de sabor) através da troca de bosões vetoriais W e Z.",
      "Atua mantendo os protões e os neutrões fortemente ligados no interior do núcleo atómico, superando a força de repulsão eletrostática calculada pela lei clássica de Coulomb.",
      "Governa as interações eletromagnéticas entre eletrões orbitais e o campo magnético estático de bobinas supercondutoras em equipamentos de tomografia por emissão de positrões.",
      "É a força atrativa de longo alcance gravitacional que dita a velocidade angular de translação dos satélites artificiais em redor da órbita geoestacionária terrestre."
    ],
    "correctIndex": 0,
    "explanation": "A Força Nuclear Fraca é a única interação fundamental capaz de mudar o 'sabor' dos quarks (mediada pelos bosões vetoriais intermediários massivos W⁺, W⁻ e Z⁰). Sem a interação fraca, protões e neutrões não poderiam transformar-se uns nos outros: não existiria decaimento beta negativo (n -> p + e⁻ + ν̄_e) nem emissão de positrões (p -> n + e⁺ + ν_e), e as reações de fusão nuclear que alimentam a luz do Sol não poderiam ocorrer.",
    "distractorAnalysis": [
      "Está incorreta: a força nuclear fraca é a única interação fundamental capaz de alterar o sabor dos quarks (d -> u no decaimento β⁻ e u -> d no decaimento β⁺), mediada por bosões W± e Z⁰.",
      "Está incorreta: a coesão nuclear que mantém os nucleões unidos contra a repulsão de Coulomb é a força nuclear forte mediada por glúons e piões e não a força fraca.",
      "Está incorreta: interações elétricas e magnéticas são regidas pela força eletromagnética; a gravidade governa órbitas planetárias e é desprezável à escala nuclear."
    ],
    "nursingApplication": "A força nuclear fraca rege diretamente a emissão do positrão do Flúor-18 no exame PET que o enfermeiro programa e apoia: a transformação fraca p -> n liberta o positrão que colidirá com um eletrão tecidual, gerando os fotões de aniquilação que desenham o mapa metabólico tumoral no monitor."
  },
  {
    "id": 6029,
    "topicId": 6,
    "question": "O conceito de 'Pressão de Radiação' foi previsto teoricamente por James Clerk Maxwell. Embora insignificante para a luz visível de uma lâmpada, qual é a relevância da pressão exercida por feixes colimados de fotões de alta energia ou partículas em física médica?",
    "options": [
      "A pressão de radiação é a força hidráulica gerada pela circulação de óleo de arrefecimento através dos tubos de cobre que circundam a cúpula metálica dos aparelhos de raios X.",
      "Cada fotão transporta momento linear (p = E/c); ao ser absorvido ou refletido por uma superfície, transfere esse momento, exercendo uma força mecânica microscópica por unidade de área.",
      "Traduz a pressão arterial sistólica máxima atingida por um doente agitado quando exposto visualmente à luz piloto vermelha da porta de entrada da sala de radiologia intervencional.",
      "A pressão de radiação decorre da libertação de bolhas de oxigénio gasoso a partir da epiderme humana quando esta é iluminada por feixes de luz infravermelha não-ionizante."
    ],
    "correctIndex": 1,
    "explanation": "Embora os fotões não possuam massa de repouso (m₀ = 0), eles transportam momento linear relativista dado pela relação de De Broglie / Einstein: p = h / λ = E / c. Quando um feixe intenso de radiação eletromagnética é absorvido ou refletido por um obstáculo, a taxa de transferência de momento por unidade de área por segundo gera uma força real e mensurável (Pressão de Radiação: P = I / c para absorção total). Em biofísica celular moderna, feixes de laser infravermelho concentrados utilizam esta pressão para manipular organelos vivos sem lhes tocar ('pinças óticas', Prémio Nobel de 2018).",
    "distractorAnalysis": [
      "Está incorreta: pela relatividade e eletrodinâmica (Maxwell), a radiação eletromagnética possui momento p = E/c; a pressão de radiação é a força líquida resultante da transferência desse momento.",
      "Está incorreta: a pressão de radiação é um fenómeno quântico e eletromagnético dos fotões e não uma pressão hidrostática de fluidos mecânicos de refrigeração.",
      "Está incorreta: o conceito não se refere a parâmetros hemodinâmicos humanos (tensão arterial) nem a respostas emocionais do paciente face à sinalética da instalação."
    ],
    "nursingApplication": "As pinças óticas baseadas na pressão de radiação fotónica são hoje utilizadas na investigação avançada de enfermagem e hematologia para medir a viscoelasticidade da membrana dos glóbulos vermelhos e a força mecânica de adesão de bactérias patogénicas aos cateteres vasculares."
  },
  {
    "id": 6030,
    "topicId": 6,
    "question": "No núcleo atómico, a emissão de um fotão de Radiação Gama (γ) decorre de qual processo de transição quântica?",
    "options": [
      "Da travagem de eletrões livres acelerados quando colidem com os eletrões orbitais da camada de valência mais externa dos átomos de azoto presentes no ar hospitalar circundante.",
      "Da expulsão simultânea de dois protões e dois neutrões fortemente ligados a partir do núcleo atómico, com perda de quatro unidades no número de massa e duas unidades em Z.",
      "Da desexcitação quântica de um núcleo atómico que transita de um nível nuclear de energia mais elevado para um nível inferior ou fundamental, sem alterar o número de protões ou neutrões.",
      "Da recombinação de um positrão com um neutrão térmico no interior das mitocôndrias celulares dos tecidos submetidos a exames imagiológicos contrastados de rotina."
    ],
    "correctIndex": 2,
    "explanation": "Após sofrer um decaimento alfa ou beta, o núcleo filho frequentemente não se encontra no seu estado fundamental, mas num estado nuclear excitado com excesso de energia mecânica quântica. A desexcitação ocorre através da emissão de um ou mais fotões de altíssima energia (fotões gama, γ): como o fotão gama é radiação eletromagnética pura (sem massa e sem carga elétrica), o núcleo perde energia sem alterar o seu número atómico (ΔZ = 0) nem o seu número de massa (ΔA = 0). O nuclídeo pai e o filho permanecem sendo o mesmo elemento químico.",
    "distractorAnalysis": [
      "Está incorreta: a radiação gama (γ) é eletromagnética de origem nuclear; decorre da transição quântica entre níveis nucleares excitados (frequentemente após decaimento alfa ou beta prévio).",
      "Está incorreta: desaceleração de eletrões no campo nuclear produz radiação de travagem (raios X Bremsstrahlung) de origem atómica extranuclear e não fotões gama nucleares.",
      "Está incorreta: a ejeção de dois protões e dois neutrões (núcleo de hélio) define o decaimento alfa (α) e não a emissão de fotões de radiação gama pura."
    ],
    "nursingApplication": "Os fotões gama puros emitidos em transições nucleares (como os 140 keV do Tecnécio-99m) possuem altíssima penetrância nos tecidos humanos e são detetados externamente pela câmara gama sem provocar danos teciduais locais severos (baixo LET), tornando-os ideais para diagnósticos imagiológicos seguros em enfermagem e medicina."
  },
  {
    "id": 6031,
    "topicId": 6,
    "question": "A estabilidade dos núcleos atómicos é frequentemente representada pela fórmula semi-empírica de massa de Bethe-Weizsäcker (Modelo da Gota Líquida). Quais são os termos que compõem esta fórmula biofísica?",
    "options": [
      "Termo de dilatação térmica do ar, termo de condutividade elétrica cutânea, termo de permeabilidade osmótica capilar e coeficiente de viscosidade plasmática de repouso.",
      "Termo de atrito hidrodinâmico, termo de gravidade barométrica, constante de capilaridade sanguínea e potencial de ação transmembranar das células musculares estriadas.",
      "Termo de radiação infravermelha celular, coeficiente de atrito cinético do leito hospitalar e termo de dispersão de luz visível na película radiográfica analógica revelada.",
      "Termo de volume (coesão da força forte), termo de superfície (nucleões na borda têm menos vizinhos), repulsão coulombiana, termo de assimetria neutrões/protões e termo de emparelhamento."
    ],
    "correctIndex": 3,
    "explanation": "Carl Friedrich von Weizsäcker modelou o núcleo como uma gota de fluido incompressível carregada: 1) Energia de volume (+a_v · A): atração forte entre vizinhos; 2) Energia de superfície (-a_s · A²/³): correção para os nucleões superficiais com menos ligações (tensão superficial nuclear); 3) Energia de Coulomb (-a_c · Z²/A¹/³): repulsão elétrica destrutiva entre protões; 4) Energia de assimetria (-a_a · (A-2Z)²/A): penalização quântica quando N se afasta de Z; 5) Energia de emparelhamento (δ): bónus de estabilidade para núcleos Par-Par.",
    "distractorAnalysis": [
      "Está incorreta: a fórmula semi-empírica de massa de Bethe-Weizsäcker baseia-se no modelo da gota líquida: B = a_v·A - a_s·A^(2/3) - a_c·Z²/A^(1/3) - a_a·(A-2Z)²/A + δ(A,Z).",
      "Está incorreta: os termos da fórmula descrevem estritamente a física nuclear e forças quânticas subatómicas, não incluindo propriedades fisiológicas humanas ou hemodinâmicas.",
      "Está incorreta: a fórmula calcula a energia de ligação do núcleo atómico e não grandezas de engenharia mecânica hospitalar ou parâmetros de imagiologia analógica."
    ],
    "nursingApplication": "O modelo da gota líquida elucida perfeitamente por que a fissão nuclear ocorre em núcleos volumosos: a repulsão de Coulomb supera a tensão superficial da gota, fazendo-a oscilar, estrangular-se e cindir-se em duas gotas menores, princípio que fundamenta a produção dos radiofármacos que o enfermeiro manipula."
  },
  {
    "id": 6032,
    "topicId": 6,
    "question": "Em radiofarmácia hospitalar, a 'Pureza Radionuclídica' de um preparado de Tecnécio-99m refere-se a qual parâmetro de controlo de qualidade e segurança do doente?",
    "options": [
      "À percentagem da radioatividade total na amostra que é devida exclusivamente ao radionuclídeo pretendido (por exemplo, percentagem de Tc-99m face a contaminantes como o Mo-99).",
      "À proporção de líquido fisiológico de reconstituição que se encontra estéril e desprovido de qualquer bactéria ou endotoxina pirogénica na solução de radiofármaco injetável.",
      "Ao teor percentual de glicose diluída no frasco de eluição utilizado para nutrir as células da tiróide durante a realização de cintigrafias metabólicas funcionais no leito.",
      "À fração de radiação ionizante emitida pelo radioisótopo que é convertida em luz polarizada visível pelos vidros plumbíferos montados na janela da cabina de manipulação."
    ],
    "correctIndex": 0,
    "explanation": "A Pureza Radionuclídica define a razão entre a atividade do radionuclídeo correto e a atividade radioativa total do eluato: se uma amostra de ⁹⁹ᵐTc contiver traços de ⁹⁹Mo (Molibdénio-99), o doente receberá uma dose desnecessária e perigosa de radiação beta interna no fígado e medula óssea durante semanas (devido à meia-vida de 66 horas do Mo-99). O teste do eluato na câmara de ionização blindada com chumbo ('Mo-breakthrough test') garante que a contaminação por Mo-99 não ultrapassa 0,15 kBq por MBq de Tc-99m no momento da injeção.",
    "distractorAnalysis": [
      "Está incorreta: pureza radionuclídica quantifica a ausência de outros isótopos radioativos contaminantes (ex: o limite legal de rutura de molibdénio é <0,15 kBq de Mo-99 por MBq de Tc-99m).",
      "Está incorreta: a ausência de microrganismos viáveis e endotoxinas define a esterilidade e apirogenidade microbiológica da preparação radiofarmacêutica e não a pureza radionuclídica.",
      "Está incorreta: a pureza radionuclídica é uma grandeza física que avalia a identidade nuclear dos átomos emissores na amostra, medida por espectrometria gama com detetor de germânio."
    ],
    "nursingApplication": "A administração de radiofármacos pelo enfermeiro exige a verificação dos boletins de controlo de qualidade assinados pelo radiofarmacêutico: administrar uma dose com pureza radionuclídica violada submeteria o doente a irradiação interna severa desnecessária por contaminantes radioativos de vida longa."
  },
  {
    "id": 6033,
    "topicId": 6,
    "question": "A 'Pureza Radioquímica' difere da pureza radionuclídica. O que avalia a pureza radioquímica numa preparação injectável de ⁹⁹ᵐTc-MDP utilizada para cintigrafia óssea?",
    "options": [
      "A quantidade absoluta de iões cloreto e sódio dissolvidos na ampola estéril de vidro que neutralizam a acidez gástrica durante a ingestão oral de radiofármacos pelo utente.",
      "A percentagem do radionuclídeo que se encontra incorporada na forma química molecular e estado de oxidação desejados (por exemplo, percentagem de ⁹⁹ᵐTc ligado ao difosfonato MDP).",
      "A taxa de eliminação de radioisótopos através da expiração pulmonar avaliada pela medição do fluxo de dióxido de carbono por sensores de capnografia na sala de exames.",
      "A proporção de fotões gama emitidos que conseguem atravessar as paredes de betão da câmara quente sem sofrer qualquer atenuação por dispersão inelástica de Compton."
    ],
    "correctIndex": 1,
    "explanation": "Na marcação radiofarmacêutica: 1) Pureza Radionuclídica = 100% dos átomos radioativos são ⁹⁹ᵐTc; 2) Pureza Radioquímica = o ⁹⁹ᵐTc está quimicamente quelado na molécula carreadora correta (ex: MDP para osso, DMSA para córtex renal, Sestamibi para miocárdio). Se a ligação química falhar e houver ⁹⁹ᵐTc livre (pertecnetato não-reduzido), o radioisótopo acumula-se no estômago, tiroide e glândulas salivares, arruinando a qualidade diagnóstica da imagem óssea e irradiando órgãos saudáveis.",
    "distractorAnalysis": [
      "Está incorreta: pureza radioquímica afere a fração do radioisótopo ligada à molécula transportadora pretendida (avaliada por cromatografia em camada fina / TLC; pertecnetato livre é impureza).",
      "Está incorreta: se a pureza radioquímica for baixa, o radiofármaco livre não se fixará no órgão-alvo (ex: osso), concentrando-se em órgãos indesejados (como estômago ou tiroide), degradando o exame.",
      "Está incorreta: a pureza radioquímica é um parâmetro químico-molecular e não uma taxa ventilatória respiratória ou cálculo de blindagem estrutural de paredes."
    ],
    "nursingApplication": "Se o enfermeiro detetar captação intensa inesperada de radioatividade na tiroide e no estômago durante uma cintigrafia óssea que deveria concentrar-se exclusivamente no esqueleto, suspeita de falha na pureza radioquímica do kit de marcação (oxidação prematura do cloreto estanoso redutor), registando o incidente para repetição do controlo radioquímico por cromatografia de camada fina (TLC)."
  },
  {
    "id": 6034,
    "topicId": 6,
    "question": "O fenómeno da 'Barreira de Potencial de Coulomb' que impede que dois núcleos carregados positivamente se aproximem à distância da força nuclear forte é superado na medicina através de quais energias cinéticas em cíclotrons?",
    "options": [
      "Arrefecimento criogénico dos núcleos atómicos em câmaras térmicas estanques com vista a suprimir a repulsão eletrostática mútua entre protões por abrandamento das vibrações da rede cristalina.",
      "Adição de corantes químicos aromáticos à solução nuclear para neutralizar os campos eletrostáticos de repulsão através de reações de precipitação coloidal nos elétrodos.",
      "Aceleração de partículas carregadas através de potenciais elétricos elevados para conferir energia cinética suficiente para vencer a repulsão e aproximar os núcleos à distância da força forte.",
      "Exposição dos núcleos a feixes contínuos de luz visível amarela para induzir ressonância acústica no núcleo atómico que anula a lei de Coulomb entre partículas do mesmo sinal."
    ],
    "correctIndex": 2,
    "explanation": "Dois núcleos de carga positiva repelem-se com força que cresce assintoticamente com 1/r²: a barreira de Coulomb atinge picos de vários MeV. À temperatura ambiente (energia térmica de ~0,025 eV), a probabilidade de colisão nuclear é zero absoluto. Para transmutar um núcleo num acelerador de partículas (cíclotron), é indispensável acelerar as partículas projéteis a velocidades relativistas (mais de 10% da velocidade da luz) com energias de dezenas de milhões de eletrão-volts (MeV), permitindo vencer a barreira eletrostática e penetrar no raio de alcance da atração nuclear forte.",
    "distractorAnalysis": [
      "Está incorreta: dois núcleos carregados positivamente sofrem repulsão coulombiana mútua; para ocorrer fusão ou reação nuclear induzida, os projéteis devem ser acelerados (ex: em ciclotrão).",
      "Está incorreta: arrefecer reduz a energia cinética, impedindo que as partículas superem a barreira repulsiva; a carga elétrica elementar é uma propriedade quântica invariante com a temperatura.",
      "Está incorreta: reações químicas ou corantes afetam apenas eletrões periféricos de moléculas e não neutralizam a repulsão eletrostática entre núcleos atómicos nus."
    ],
    "nursingApplication": "Os cíclotrons hospitalares onde se produzem radioisótopos para os exames dos doentes são instalados em 'bunkers' com paredes de betão armado de 1,5 a 2 metros de espessura: o enfermeiro sabe que a aceleração dos feixes a energias de MeV gera campos intensos de radiação e neutrões secundários que exigem blindagem civil maciça."
  },
  {
    "id": 6035,
    "topicId": 6,
    "question": "O neutrão foi descoberto experimentalmente por James Chadwick em 1932. Qual foi a experiência biofísica histórica que permitiu comprovar a existência desta partícula neutra sem carga?",
    "options": [
      "A observação de faíscas luminosas produzidas pela fricção de barras de vidro em tecidos de seda em ambiente hospitalar dotado de ar condicionado com humidade relativa inferior a dez por cento.",
      "A separação eletrolítica de soluções aquosas de sulfato de cobre através da passagem de corrente contínua fornecida por baterias galvânicas de zinco e ácido sulfúrico concentrado.",
      "A análise espectrográfica da chama produzida pela queima de gás butano comprimido em bicos de Bunsen no laboratório de análises clínicas durante o período de triagem de amostras.",
      "O bombardeamento de Berílio-9 com partículas alfa ejetadas de uma fonte de Polónio, gerando uma radiação neutra altamente penetrante capaz de ejetar protões a partir de blocos de parafina."
    ],
    "correctIndex": 3,
    "explanation": "Na experiência de Chadwick: partículas alfa atingiram um alvo de berílio (⁹Be + α -> ¹²C + n), emitindo uma radiação desconhecida que atravessava espessos blocos de chumbo sem ser desviada por campos elétricos ou magnéticos (logo, desprovida de carga elétrica). Ao interpor uma placa de parafina (composta por hidrocarbonetos com núcleos de hidrogénio/protões de massa quase idêntica à do neutrão), a transferência mecânica de momento linear em choques elásticos frontais ejetou protões velozes detetados numa câmara de ionização. A aplicação das leis de conservação de energia e momento linear de Newton permitiu a Chadwick calcular com precisão matemática a massa da nova partícula: o Neutrão.",
    "distractorAnalysis": [
      "Está incorreta: Chadwick (1932) utilizou a reação ⁹Be(α,n)¹²C; os neutrões neutros e penetrantes colidiam com núcleos de hidrogénio da parafina, ejetando protões detetados numa câmara de ionização.",
      "Está incorreta: a fricção de vidro com seda demonstra eletricidade estática clássica (experiências de Benjamin Franklin) e não a existência de neutrões no núcleo atómico.",
      "Está incorreta: a eletrólise de sulfato de cobre ilustra as leis de Faraday da eletroquímica a nível molecular e iónico e não reações nucleares subatómicas."
    ],
    "nursingApplication": "A experiência histórica de Chadwick estabelece um princípio basilar da radioproteção que o enfermeiro utiliza hoje: o melhor material para travar e proteger contra feixes perigosos de neutrões é a água, o polietileno ou a cera de parafina (substâncias ricas em átomos leves de hidrogénio que desaceleram neutrões por colisão de massas idênticas)."
  },
  {
    "id": 6036,
    "topicId": 6,
    "question": "No núcleo do átomo de Carbono-14 (¹⁴₆C, utilizado na datação radiométrica de tecidos biológicos e em pesquisas biomédicas com semivida de 5730 anos), qual é a contagem de protões e neutrões presentes?",
    "options": [
      "O núcleo do átomo de Carbono-14 (¹⁴₆C) é composto por 6 protões e 8 neutrões (Z = 6, N = A - Z = 14 - 6 = 8 nucleões neutros), apresentando excesso de neutrões que o torna instável.",
      "O núcleo do Carbono-14 é formado por 14 protões e nenhum neutrão, fazendo com que a carga elétrica nuclear seja quatorze vezes superior à do hidrogénio em repouso.",
      "O núcleo do Carbono-14 possui 8 protões e 6 neutrões, o que o torna quimicamente idêntico a um átomo de oxigénio estável nas reações bioquímicas celulares normais.",
      "O núcleo do Carbono-14 contém exclusivamente catorze eletrões confinados em órbitas estáveis por atração magnética gerada por um protão central imóvel."
    ],
    "correctIndex": 0,
    "explanation": "O número atómico Z do elemento Carbono é rigorosamente 6 (todo e qualquer átomo de carbono possui obrigatoriamente 6 protões no seu núcleo, definindo a sua química orgânica tetravalente). Como o número de massa A deste isótopo radioativo é 14: o número de neutrões é N = A - Z = 14 - 6 = 8 neutrões. Como tem excesso de neutrões (N/Z = 8/6 ≈ 1,33, quando o estável ¹²C tem N/Z = 1,0), o Carbono-14 é radioativo e decai por emissão de partículas beta negativas para o Azoto-14 estável.",
    "distractorAnalysis": [
      "Está incorreta: o carbono é definido por Z = 6 (6 protões); o isótopo Carbono-14 possui A = 14, pelo que contém N = 14 - 6 = 8 neutrões, decaindo por beta menos para Azoto-14 estável.",
      "Está incorreta: um núcleo com 14 protões seria o Silício (Z=14) e não carbono; o número de protões dita a configuração eletrónica e as propriedades químicas do elemento.",
      "Está incorreta: 8 protões definiriam o Oxigénio (Z=8); núcleos atómicos não são formados por eletrões, os quais pertencem à eletrosfera extranuclear do átomo."
    ],
    "nursingApplication": "Em estudos metabólicos de novos fármacos oncológicos ou farmacocinética clínica, moléculas marcadas com Carbono-14 (¹⁴C) são administradas a voluntários para rastrear a distribuição tecidual, excreção renal e vias de biotransformação hepática, monitorizando o enfermeiro a colheita precisa de amostras biológicas cronometradas."
  },
  {
    "id": 6037,
    "topicId": 6,
    "question": "A constante da velocidade da luz no vácuo (c ≈ 3 × 10⁸ m/s) surge na equação da energia nuclear E = m · c² elevada ao quadrado (c² ≈ 9 × 10¹⁶ m²/s²). Qual é a consequência prática deste fator de escala gigantesco?",
    "options": [
      "A velocidade da luz surge na fórmula para indicar que as partículas de radiação nuclear desaceleram até parar quando entram em contacto com tecidos biológicos com elevado teor aquoso.",
      "Como a velocidade da luz ao quadrado (c² ≈ 9 × 10¹⁶ m²/s²) é um número gigantesco, uma perda microscópica de massa converte-se numa quantidade colossal de energia térmica e radiante.",
      "O fator c² representa a velocidade máxima com que os técnicos de farmácia devem transportar os radiofármacos pelas escadas de emergência entre os pisos do hospital.",
      "A constante c² indica que a energia libertada pelas reações nucleares depende exclusivamente do índice de refração do óleo mineral de arrefecimento da ampola radiológica."
    ],
    "correctIndex": 1,
    "explanation": "O fator c² é o multiplicador universal da matéria condensada: como c² = (3 × 10⁸)² = 9 × 10¹⁶ J/kg, a aniquilação completa de apenas 1 grama (0,001 kg) de matéria libertaria uma energia titânica de E = 10⁻³ × 9 × 10¹⁶ = 9 × 10¹³ Joules (equivalente à explosão de mais de 20 mil toneladas de dinamite TNT!). Mesmo no defeito de massa nuclear (onde se converte apenas cerca de 0,1% a 0,7% da massa em energia), alguns gramas de radioisótopos fornecem os feixes de radiação que tratam milhares de doentes com cancro ao longo de anos num hospital.",
    "distractorAnalysis": [
      "Está incorreta: 1 grama de massa pura equivale a E = 10⁻³ kg × (3·10⁸ m/s)² = 9·10¹³ Joules (~25 milhões de kilowatt-hora), explicando a enorme densidade energética das reações nucleares.",
      "Está incorreta: c² é o fator universal de conversão dimensional entre massa e energia na relatividade restrita de Einstein, sendo uma constante física fundamental do espaço-tempo.",
      "Está incorreta: c² não se relaciona com velocidades de deslocamento de operadores clínicos ou propriedades ópticas de óleos lubrificantes industriais."
    ],
    "nursingApplication": "Esta prodigiosa densidade de energia nuclear explica a extrema eficácia e o respeito rigoroso exigido no manuseamento de radiofármacos: uma ampola de poucos mililitros de radioisótopos transporta uma atividade radiológica imensa, exigindo o uso de blindagens plúmbeas espessas e pinças de manuseamento à distância para proteger as mãos do enfermeiro."
  },
  {
    "id": 6038,
    "topicId": 6,
    "question": "O fenómeno da 'Barreira de Fissão' em núcleos pesados de Urânio ou Plutónio expressa qual equilíbrio biofísico de forças internas?",
    "options": [
      "O atrito mecânico gerado pela passagem de eletrões rápidos entre as membranas plasmáticas das células epiteliais do túbulo contornado proximal do rim durante a excreção urinária.",
      "A resistência elétrica oferecida pelas paredes de chumbo da sala de comandos à passagem de fotões de radiação gama emitidos durante a preparação manual de radiofármacos.",
      "O equilíbrio dinâmico entre a força atrativa da tensão superficial nuclear (que tende a manter o núcleo esférico) e a repulsão eletrostática coulombiana (que tende a deformá-lo e parti-lo).",
      "A pressão hidrodinâmica gerada pela água de refrigeração pressurizada que circula no circuito secundário dos condensadores térmicos de centrais nucleares comerciais em funcionamento."
    ],
    "correctIndex": 2,
    "explanation": "Na teoria da fissão de Bohr e Wheeler: o núcleo atómico comporta-se como uma gota de líquido. A Força Nuclear Forte atua como uma 'tensão superficial' nuclear que minimiza a área e força a gota a permanecer esférica e coesa. Por outro lado, a repulsão eletrostática de Coulomb entre todos os seus protões internos empurra a matéria para fora. Para que ocorra a fissão, o núcleo tem de sofrer uma deformação mecânica elipsoidal: se a energia de excitação superar a 'barreira de fissão' (~6 MeV no Urânio-235), o estrangulamento da gota acentua-se e a repulsão elétrica vence, rompendo o núcleo em dois fragmentos principais.",
    "distractorAnalysis": [
      "Está incorreta: no modelo da gota líquida (Bohr e Wheeler), a fissão ocorre quando a repulsão eletrostática coulombiana (∝ Z²/A^(1/3)) supera a tensão superficial atrativa (∝ A^(2/3)).",
      "Está incorreta: a barreira de fissão é uma barreira de energia potencial interna do núcleo atómico e não tem relação com fisiologia renal ou atrito membranar tecidual.",
      "Está incorreta: o conceito descreve a estabilidade quântica do núcleo face à deformação e bipartição espontânea ou induzida, e não a absorção por blindagens arquitetónicas de chumbo."
    ],
    "nursingApplication": "A quebra da barreira de fissão em reatores nucleares de investigação produz os subprodutos medicinais purificados que abastecem diariamente os serviços hospitalares de oncologia e endocrinologia onde os enfermeiros cuidam de doentes com hipertiroidismo e neoplasias malignas."
  },
  {
    "id": 6039,
    "topicId": 6,
    "question": "Qual das seguintes partículas nucleares possui a MENOR massa de repouso mensurável?",
    "options": [
      "O Protão livre, que apresenta a menor massa atómica de repouso de todas as partículas elementares do Universo, sendo mil vezes mais leve do que o eletrão da eletrosfera.",
      "A partícula Alfa, que por ser desprovida de carga elétrica elementar apresenta massa de repouso rigorosamente nula em repouso e no vácuo intersticial celular.",
      "O Neutrão térmico, cuja massa de repouso é rigorosamente zero gramas quando em movimento a temperaturas ambientais em meios aquosos moderadores biológicos.",
      "O Neutrino do eletrão (ν_e), que possui massa de repouso praticamente nula (inferior a um eletrão-volt por c², milhões de vezes menor do que a massa em repouso de um eletrão)."
    ],
    "correctIndex": 3,
    "explanation": "O neutrino é um leptão sem carga elétrica que interage exclusivamente através da força nuclear fraca e da gravidade. A sua massa de repouso é tão infinitesimal que durante décadas foi considerada exatamente zero (experiências de oscilação de neutrinos galardoadas com o Prémio Nobel comprovaram que possuem uma massa minúscula mas não-nula, inferior a 0,1-1 eV/c²). Em comparação: o eletrão tem ~511.000 eV/c² e o protão tem ~938.000.000 eV/c².",
    "distractorAnalysis": [
      "Está incorreta: os neutrinos possuem massa não nula mas infinitesimalmente pequena (<0,8 eV/c²); o eletrão tem ~0,511 MeV/c² e os nucleões (protão e neutrão) têm ~938-940 MeV/c².",
      "Está incorreta: o protão é cerca de 1836 vezes mais pesado que o eletrão; a partícula alfa é composta por 4 nucleões, sendo quase 7300 vezes mais pesada que o eletrão.",
      "Está incorreta: a partícula alfa é um núcleo de Hélio-4 com massa de ~3727 MeV/c² e carga elétrica +2; não possui massa nula."
    ],
    "nursingApplication": "Devido à sua secção eficaz de interação quase nula e massa impercetível, os neutrinos emitidos no decaimento beta de radiofármacos hospitalares atravessam o corpo do doente e o próprio planeta Terra sem colidir com nenhum átomo nem causar qualquer ionização celular, não representando qualquer risco de dano radiobiológico para o doente ou equipa de saúde."
  },
  {
    "id": 6040,
    "topicId": 6,
    "question": "A energia libertada em cada reação individual de Fissão Nuclear de um átomo de Urânio-235 é de aproximadamente 200 MeV. Sob que forma se manifesta a maior fatia (cerca de 80% a 85%) desta energia libertada?",
    "options": [
      "Cerca de 165 a 170 MeV dos cerca de 200 MeV totais libertados na fissão de um núcleo de U-235 são convertidos em energia cinética direta dos dois fragmentos de fissão que se repelem.",
      "A energia da fissão é libertada integralmente sob a forma de ondas sonoras inaudíveis de alta frequência que se dissipam no ar sem gerar qualquer calor na água do reator.",
      "Toda a energia libertada na fissão é consumida instantaneamente na formação de novos eletrões orbitais estáveis, resultando num balanço térmico líquido rigorosamente nulo.",
      "A energia de fissão manifesta-se exclusivamente sob a forma de radiação ultravioleta visível, a qual é absorvida pela película de plástico das barras de combustível atómicas."
    ],
    "correctIndex": 0,
    "explanation": "Dos ~200 MeV libertados em cada fissão de ²³⁵U: cerca de 165 a 170 MeV surgem sob a forma de energia cinética dos dois fragmentos pesados de cisão (núcleos filhos de massa média como Bário, Criptónio, Iodo ou Molibdénio). Devido à forte carga positiva de ambos, eles são violentamente repelidos pela força de Coulomb a velocidades gigantescas. Ao colidirem com os átomos vizinhos do combustível, desaceleram em escassos micrómetros, dissipando toda essa energia cinética sob a forma de calor térmico colossal.",
    "distractorAnalysis": [
      "Está incorreta: a repulsão eletrostática mútua entre os dois fragmentos pesados altamente carregados converte cerca de 80-85% da energia total de fissão em energia cinética que aquece o meio.",
      "Está incorreta: a energia cinética dos fragmentos é travada nos materiais vizinhos por colisões atómicas em micrómetros, transformando-se em calor que ferve a água para mover turbinas.",
      "Está incorreta: os ~200 MeV distribuem-se em energia cinética dos fragmentos (~168 MeV), neutrões de fissão (~5 MeV), raios gama imediatos (~7 MeV), decaimento beta (~8 MeV) e neutrinos (~12 MeV)."
    ],
    "nursingApplication": "Os fragmentos de fissão ejetados nessa reação contêm uma enorme riqueza de radioisótopos médicos que são extraídos e purificados quimicamente: o Iodo-131, Molibdénio-99 e Xénon-133 utilizados diariamente em enfermagem derivam diretamente desses fragmentos de fissão de alta energia cinética."
  },
  {
    "id": 6041,
    "topicId": 6,
    "question": "O conceito de 'Radioisótopo Carrier-Free' (livre de transportador / No Carrier Added - NCA) em radiofarmácia hospitalar significa que:",
    "options": [
      "Significa que o radioisótopo é transportado em embalagens plásticas descartáveis sem necessidade de qualquer contentor de chumbo durante a distribuição hospitalar.",
      "Significa que todos os átomos daquele elemento químico em solução são exclusivamente o isótopo radioativo, sem adição intencional de átomos estáveis 'frios' do mesmo elemento (NCA).",
      "Traduz a ausência total de água ou solventes líquidos na preparação, sendo o radiofármaco administrado sob a forma de pó seco estéril inalado por via oral com aerossol.",
      "Indica que o radiofármaco não se liga a qualquer proteína plasmática no sangue humano, sendo eliminado integralmente pelas glândulas sudoríparas em dois minutos de exame."
    ],
    "correctIndex": 1,
    "explanation": "Quando um radioisótopo é produzido com adição de transportador ('carrier-added'), há uma mistura de átomos radioativos e átomos estáveis 'frios' do mesmo elemento que competem pelos mesmos recetores biológicos. Numa preparação 'sem carreador adicionado' (NCA / carrier-free, como o Iodo-131 obtido por irradiação de Telúrio ou Tecnécio-99m de gerador): a quase totalidade dos átomos do elemento químico na solução são radioativos. Isto confere uma Atividade Específica elevadíssima, permitindo que microgramas minúsculos de fármaco saturem os recetores tumorais com doses radioativas massivas sem toxicidade química secundária.",
    "distractorAnalysis": [
      "Está incorreta: 'carrier-free' ou 'no-carrier-added' (NCA) significa alta atividade específica; a ausência de átomos frios estáveis do mesmo elemento evita competição biológica por recetores celulares.",
      "Está incorreta: o termo não se refere a transportadoras de logística rodoviária ou embalagens físicas de transporte, mas sim à química do elemento na solução radiofarmacêutica.",
      "Está incorreta: radiofármacos carrier-free são soluções líquidas aquosas de concentração química molar ultrabaixa (~10⁻⁹ a 10⁻¹² M) administradas por via endovenosa com alta segurança."
    ],
    "nursingApplication": "Radiofármacos NCA permitem administrar terapias dirigidas com volumes injetáveis ínfimos (poucos mililitros) no acesso venoso do doente, sem risco de efeitos colaterais farmacológicos de toxicidade ponderal de metais pesados."
  },
  {
    "id": 6042,
    "topicId": 6,
    "question": "No contexto da estabilidade do núcleo, o que descreve a chamada 'Linha de Gotejamento' (Drip Line) de protões e neutrões no gráfico de nuclídeos?",
    "options": [
      "A linha geográfica imaginária que delimita a distância mínima de segurança que um enfermeiro deve manter em relação a um camião que transporte geradores de molibdénio.",
      "O ponto exato de saturação em que o filtro de ar condicionado da câmara quente deixa de reter poeiras radioativas e começa a pingar água condensada sobre a bancada estéril.",
      "O limite físico extremo de estabilidade quântica além do qual a energia de separação de um nucleão se torna negativa, fazendo com que o nucleão excedente seja expelido espontaneamente.",
      "A velocidade linear de gotejamento de soro fisiológico prescrita em mililitros por hora para acelerar a depuração de radiofármacos em doentes algaliados no internamento."
    ],
    "correctIndex": 2,
    "explanation": "A 'Drip Line' nuclear (fronteira de gotejamento) define o limite absoluto da existência física de núcleos ligados: 1) Linha de gotejamento de neutrões (neutron drip line): ponto em que o excesso de neutrões é tão colossal que o último neutrão adicionado tem energia de ligação zero (B_n = 0); 2) Linha de gotejamento de protões (proton drip line): onde a repulsão eletrostática supera totalmente a atração forte e expele protões espontaneamente. Para lá destas fronteiras, núcleos atómicos não conseguem existir nem por uma fração de segundo.",
    "distractorAnalysis": [
      "Está incorreta: as 'drip lines' (linhas de gotejamento de neutrões e de protões) marcam as fronteiras teóricas e experimentais da existência nuclear: para além delas, núcleos não se formam (gotejam nucleões).",
      "Está incorreta: o termo 'drip line' provém da física nuclear quântica fundamental e não tem qualquer relação com perímetros de transporte rodoviário ou regulamentos viários.",
      "Está incorreta: o conceito não se refere à condensação mecânica de água em filtros hospitalares ou a débitos de perfusão endovenosa na prática de enfermagem."
    ],
    "nursingApplication": "Os radioisótopos médicos utilizados no hospital situam-se em zonas intermédias bem delineadas entre a linha de estabilidade e as drip lines: isto garante semividas clínicas úteis e mensuráveis (minutos a dias), permitindo a sua administração segura em fluidos corporais."
  },
  {
    "id": 6043,
    "topicId": 6,
    "question": "Qual das seguintes afirmações sobre o modelo da 'Gota Líquida' de Bohr-Wheeler para o núcleo atómico é rigorosamente CORRETA?",
    "options": [
      "Descreve o núcleo atómico como uma gota microscópica de mercúrio metálico líquido que se dissolve instantaneamente sempre que entra em contacto com os lípidos da pele do doente.",
      "Assume que os nucleões flutuam livremente no interior de uma gota de ar comprimido à temperatura de duzentos graus Celsius, sem exercerem forças de atração ou repulsão mútua.",
      "Comprova que os núcleos dos átomos radioativos evaporam espontaneamente para a atmosfera sob a forma de pequenas gotas de água destilada durante a realização de cintigrafias.",
      "Modela o núcleo atómico como uma gota de fluido incompressível de densidade constante, onde a coesão é mantida pela tensão superficial da força forte e perturbada pela repulsão elétrica."
    ],
    "correctIndex": 3,
    "explanation": "O Modelo da Gota Líquida baseia-se na constatação empírica de que a densidade da matéria nuclear e a energia de ligação por nucleão são praticamente constantes para núcleos médios e pesados (propriedade de saturação da força forte: cada nucleão só se liga aos seus vizinhos imediatos, tal como as moléculas de água numa gota líquida). Isto permite aplicar conceitos hidrodinâmicos macroscópicos — como volume, densidade, calor latente de vaporização (energia de separação de nucleões) e tensão superficial — para explicar com grande precisão a fissão nuclear e as massas atómicas.",
    "distractorAnalysis": [
      "Está incorreta: o modelo da gota líquida (desenvolvido por Bohr e Wheeler) explica propriedades macroscópicas nucleares como energias de ligação (fórmula de Bethe-Weizsäcker) e o mecanismo da fissão.",
      "Está incorreta: o núcleo não é composto por mercúrio ou substâncias químicas macroscópicas, mas sim por nucleões ligados pelas quatro forças fundamentais da física.",
      "Está incorreta: os núcleos não evaporam como gotas de água durante exames de medicina nuclear; o decaimento radioativo é um processo quântico de transformação nuclear e emissão de radiação."
    ],
    "nursingApplication": "A analogia da gota líquida auxilia o enfermeiro a visualizar os processos de fissão e decaimento: o núcleo oscila como uma gota líquida instável sob as tensões eletrostáticas internas até que uma perturbação externa o faz cindir em fragmentos menores que emitem radiações ionizantes diagnósticas."
  },
  {
    "id": 6044,
    "topicId": 6,
    "question": "O fenómeno da 'Emissão de Neutrões Atrasados' (delayed neutrons) na fissão nuclear representa menos de 1% de todos os neutrões emitidos, mas é de importância vital absoluta para a segurança. Por que razão?",
    "options": [
      "A emissão de neutrões atrasados (emitidos segundos a minutos após o decaimento beta de fragmentos de fissão) permite o controlo cinético mecânico seguro dos reatores nucleares.",
      "A emissão atrasada de neutrões é um defeito técnico que inviabiliza a produção de radioisótopos médicos, forçando o encerramento definitivo de todos os reatores hospitalares.",
      "Os neutrões atrasados são partículas alfa de longo alcance que permanecem em suspensão no ar ambiente da central nuclear durante três semanas antes de colidirem com o solo.",
      "A fração de neutrões atrasados é absorvida cem por cento pelos dosímetros individuais da equipa de enfermagem, tornando a leitura dosimétrica totalmente inutilizável e imprecisa."
    ],
    "correctIndex": 0,
    "explanation": "Se todos os neutrões da fissão fossem emitidos instantaneamente ('neutrões imediatos', prompt neutrons, libertados em 10⁻¹⁴ s), o tempo de duplicação da reação em cadeia seria de microssegundos: qualquer variação insignificante na reatividade provocaria uma explosão incontrolável antes que qualquer sistema de controlo mecânico conseguisse mover as barras de absorção. A pequena fração de neutrões atrasados (~0,65% no ²³⁵U), que nascem do decaimento beta de fragmentos como o Bromo-87 com meias-vidas de segundos, eleva o tempo médio de resposta do reator para cerca de 0,1 segundos, permitindo aos computadores e operadores controlar o reator em regime crítico estacionário seguro.",
    "distractorAnalysis": [
      "Está incorreta: os neutrões imediatos de fissão saem em 10⁻¹⁴ s, o que tornaria reatores incontroláveis por barras mecânicas; a pequena fração de neutrões atrasados (~0,65%) viabiliza o controlo temporal seguro.",
      "Está incorreta: sem os neutrões atrasados seria impossível operar reatores nucleares com segurança para gerar eletricidade e produzir radioisótopos médicos essenciais (como Mo-99 e I-131).",
      "Está incorreta: neutrões atrasados continuam a ser neutrões emitidos por precursores de fissão ricos em neutrões e não partículas alfa ou interferências na dosimetria hospitalar."
    ],
    "nursingApplication": "A estabilidade proporcionada pelos neutrões atrasados assegura a operação pacífica contínua dos reatores de investigação dedicados à saúde: sem este princípio biofísico fundamental, a produção segura dos radioisótopos diários essenciais para exames de oncologia e cardiologia seria tecnicamente impossível."
  },
  {
    "id": 6045,
    "topicId": 6,
    "question": "Em radiofísica médica, qual é a definição de 'Radionuclídeo Primordial'?",
    "options": [
      "Um radioisótopo sintético de semivida ultracurta produzido em ciclotrão hospitalar e administrado ao utente em escassos dez segundos após a sua eluição na radiofarmácia.",
      "Um radionuclídeo natural que existe desde a formação do planeta Terra e do Sistema Solar (há cerca de 4,5 mil milhões de anos), em virtude da sua semivida extremamente longa.",
      "Um composto radioativo introduzido artificialmente no organismo de recém-nascidos para avaliar a permeabilidade endotelial da barreira hematoencefálica na primeira semana de vida.",
      "O resíduo químico deixado pelas embalagens de desinfetante hospitalar quando armazenadas em armários de aço inoxidável durante o período de validade do produto farmacêutico."
    ],
    "correctIndex": 1,
    "explanation": "Os radionuclídeos primordiais foram sintetizados em eventos astrofísicos (supernovas e colisões de estrelas de neutrões) antes da formação da Terra: para terem sobrevivido até aos nossos dias (~4,54 × 10⁹ anos), têm de ter meias-vidas de milhares de milhões de anos. Os principais exemplos são: Urânio-238 (T_1/2 = 4,47 × 10⁹ anos), Tório-232 (T_1/2 = 14 × 10⁹ anos) e Potássio-40 (⁴⁰K, T_1/2 = 1,25 × 10⁹ anos), este último presente naturalmente em todos os alimentos ricos em potássio e no próprio corpo humano.",
    "distractorAnalysis": [
      "Está incorreta: radionuclídeos primordiais têm semividas comparáveis ou superiores à idade da Terra (ex: Urânio-238 com T1/2 ≈ 4,5·10⁹ anos, Tório-232 com 1,4·10¹⁰ anos e Potássio-40 com 1,25·10⁹ anos).",
      "Está incorreta: radiofármacos hospitalares de ciclotrão (como F-18 ou Tc-99m) têm semividas de horas e não são primordiais, sendo gerados por ativação artificial.",
      "Está incorreta: radionuclídeos primordiais são fontes naturais ubíquas de radiação de fundo na crosta terrestre e no próprio corpo humano (como o Potássio-40 no músculo)."
    ],
    "nursingApplication": "O Potássio-40 (⁴⁰K) natural presente no cloreto de potássio e nos tecidos corporais faz com que todo o ser humano vivo seja ligeiramente radioativo: um adulto de 70 kg emite naturalmente cerca de 4000 desintegrações radioativas por segundo (4000 Bq) devido ao ⁴⁰K dos seus músculos. O enfermeiro usa este facto para tranquilizar doentes: a radioatividade é um fenómeno natural intrínseco à própria biologia."
  },
  {
    "id": 6046,
    "topicId": 6,
    "question": "O conceito de 'Isómeros Nucleares' refere-se a núcleos que possuem rigorosamente o mesmo Número Atómico (Z) e o mesmo Número de Massa (A), mas que diferem em qual propriedade quântica fundamental?",
    "options": [
      "Átomos que apresentam o mesmo número de neutrões mas números atómicos Z diferentes, pertencendo a elementos químicos totalmente distintos na tabela periódica dos elementos.",
      "Moléculas farmacológicas que partilham a mesma fórmula química mas apresentam rotações óticas dextrógiras e levógiras opostas sob luz polarizada plana em polarímetros de bancada.",
      "Núcleos que possuem rigorosamente o mesmo Número Atómico (Z) e Número de Massa (A), mas que diferem no seu estado de energia nuclear e momento angular (spin quântico), com semividas mensuráveis.",
      "Isótopos que possuem a mesma massa molecular mas diferem na sua densidade física macroscópica em virtude da presença de microbolhas de oxigénio gasoso no seu interior."
    ],
    "correctIndex": 2,
    "explanation": "Isómeros nucleares são estados quânticos metaestáveis do mesmo núcleo: partilham o mesmo número de protões Z e mesmo número de neutrões N (logo, mesmo Z e mesmo A). A única diferença física reside na configuração de excitação dos seus nucleões nos níveis quânticos de energia: o isómero metaestável (ex: ⁹⁹ᵐTc) encontra-se num nível de energia superior (~142 keV acima do estado fundamental) e tem spin diferente (spin 1/2- vs 9/2+), decaindo para o estado fundamental (⁹⁹Tc) por emissão gama com semivida de 6 horas.",
    "distractorAnalysis": [
      "Está incorreta: isómeros nucleares são o mesmo nuclídeo em diferentes estados de energia interna (ex: Tc-99m e Tc-99); a transição isomérica liberta apenas um fotão gama.",
      "Está incorreta: núcleos com o mesmo número de neutrões N mas Z diferente denominam-se isótonos; núcleos com o mesmo número de massa A e Z diferente são isóbaros.",
      "Está incorreta: isomeria óptica (enantiómeros) é um conceito da estereoquímica molecular e não da física nuclear quântica de estados excitados de nucleões."
    ],
    "nursingApplication": "A compreensão da transição isomérica do ⁹⁹ᵐTc para ⁹⁹Tc assegura ao enfermeiro que a molécula química que guia o radiofármaco no corpo não se altera durante a cintigrafia: o exame baseia-se na emissão do fotão de desexcitação isomérica pura enquanto o fármaco permanece nos tecidos-alvo."
  },
  {
    "id": 6047,
    "topicId": 6,
    "question": "A lei de conservação do Número de Nucleões (Conservação do Número Bariónico) estabelece que em qualquer reação nuclear ou decaimento radioativo:",
    "options": [
      "O número total de neutrões tem de duplicar obrigatoriamente em cada ciclo de decaimento para que a matéria biológica não perca o seu teor de humidade intersticial nos tecidos.",
      "O número atómico Z de todos os elementos intervenientes é forçado a diminuir para metade no final de cada reação para permitir a conservação do momento dipolar elétrico.",
      "A quantidade de matéria bariónica é convertida integralmente em fotões ultravioleta após qualquer transmutação radioativa, desaparecendo todos os protões e neutrões do sistema atómico.",
      "Em qualquer reação nuclear ou decaimento radioativo, a soma do número de massa (A = Z + N) dos reagentes é rigorosamente igual à soma do número de massa de todos os produtos formados."
    ],
    "correctIndex": 3,
    "explanation": "O Número Bariónico (B) é uma quantidade conservada por simetrias fundamentais da física de partículas: em todas as reações de desintegração radioativa (alfa, beta, gama), fissão nuclear ou reações de ativação, o número total de protões e neutrões (número de massa total A) permanece RIGOROSAMENTE constante entre os reagentes iniciais e os produtos finais. Por exemplo, na fissão: ²³⁵U (A=235) + n (A=1) -> soma de A = 236; os produtos de cisão combinados com os neutrões emitidos somam sempre exatamente A = 236.",
    "distractorAnalysis": [
      "Está incorreta: a conservação do número de nucleões (número bariónico total) é uma lei absoluta: em alfa (A -> A-4 + 4), beta (A -> A + 0) ou fissão (A_total conserva-se rigorosamente).",
      "Está incorreta: neutrões e protões podem interconverter-se (decaimento beta: n -> p ou p -> n), mas a contagem total de nucleões permanece rigorosamente constante.",
      "Está incorreta: a massa e a energia equivalente conservam-se; os nucleões não desaparecem em radiação ultravioleta no decaimento radioativo comum."
    ],
    "nursingApplication": "O balanço do número de massa A e número atómico Z nas equações nucleares é a ferramenta matemática que permite aos profissionais de enfermagem e físicos médicos calcular a atividade radioativa residual de radiofármacos e garantir a correta rastreabilidade das doses administradas."
  },
  {
    "id": 6048,
    "topicId": 6,
    "question": "Em doentes submetidos a exames de Medicina Nuclear que necessitam de algaliação (cateterismo vesical com saco coletor fechado), qual é o cuidado de radioproteção imperativo adotado pelo enfermeiro?",
    "options": [
      "O enfermeiro utiliza luvas duplas de proteção, esvazia o saco coletor para recipientes de resíduos dedicados com técnica fechada e monitoriza a dose de radiação ambiental e na pele.",
      "O enfermeiro deve entornar a urina radioativa diretamente na pia comum da copa do piso hospitalar sem qualquer registo ou uso de equipamento de proteção individual plumbífero.",
      "O enfermeiro orienta a colocação de compressas de algodão comum desnudas sobre o saco coletor, assumindo que o algodão seco absorve a totalidade dos fotões de radiação gama emitidos.",
      "O enfermeiro suspende o esvaziamento do saco de urina durante sete dias consecutivos para permitir que o radiofármaco se dissolva espontaneamente nas paredes plásticas do sistema."
    ],
    "correctIndex": 0,
    "explanation": "A maioria dos radiofármacos emissores gama e beta é excretada em larga escala pelos rins: nas primeiras horas pós-administração, a urina do doente contém concentrações significativas de radioatividade não ligada. O contacto direto, salpicos ou derrames de urina contaminam superfícies e a pele dos profissionais. O enfermeiro deve usar EPI adequado (luvas duplas, avental impermeável), evitar derrames e assegurar que a urina de doentes internados em quartos de radioiodoterapia seja canalizada para tanques de decaimento blindados dedicados.",
    "distractorAnalysis": [
      "Está incorreta: radiofármacos são excretados na sua maioria por via renal; a urina é altamente radioativa nas primeiras horas, exigindo manuseamento com EPI e contentores com blindagem.",
      "Está incorreta: entornar urina em pias comuns causaria contaminação radioativa grave e violação das normas de radioproteção hospitalar e controlo de resíduos radioativos.",
      "Está incorreta: algodão comum não atenua radiação gama (fotões atravessam-no livremente); reter urina por dias aumentaria a dose absorvida na bexiga e o risco de rutura do saco."
    ],
    "nursingApplication": "A manipulação segura de excreções radioativas de doentes algaliados é um procedimento de enfermagem de alta responsabilidade técnica: utilizar sempre técnicas assépticas com barreiras de proteção, inspecionar a estanquicidade das conexões e rotular o saco coletor com o símbolo internacional do trifólio radioativo."
  },
  {
    "id": 6049,
    "topicId": 6,
    "question": "O fenómeno da 'Barreira de Potencial Nuclear' (poço de potencial quântico) significa que, no interior do núcleo atómico, cada nucleão se encontra:",
    "options": [
      "Os nucleões mantêm-se em suspensão eletrodinâmica contínua no volume nuclear, sendo expelidos espontaneamente a cada segundo se o meio biológico não fornecer um aporte constante de sódio.",
      "Os nucleões encontram-se num estado ligado de energia potencial negativa (poço de potencial de cerca de 40 a 50 MeV de profundidade), necessitando de receber energia externa para escapar.",
      "A barreira de potencial indica que o núcleo atómico é envolvido por uma membrana biológica lipídica permeável que deixa entrar água mas impede a passagem de eletrões periféricos.",
      "O poço de potencial nuclear atrai unicamente partículas elétricas de carga negativa, repelindo todos os protões em direção à órbita dos eletrões mais externos do átomo em repouso."
    ],
    "correctIndex": 1,
    "explanation": "A atração da força nuclear forte cria um 'poço quadrado de potencial' profundo no núcleo: os nucleões estão 'aprisionados' numa depressão de energia potencial de ~-40 a -50 MeV. Para que um nucleão se liberte e escape para o exterior, é necessário fornecer-lhe energia igual ou superior à sua 'energia de separação' (correspondente à altura do poço até ao nível zero). É este poço de potencial atrativo que confere estabilidade sólida e imutável aos átomos estáveis que formam o organismo humano.",
    "distractorAnalysis": [
      "Está incorreta: os nucleões estão aprisionados no poço de potencial atrativo gerado pela força nuclear forte; para arrancar um nucleão é necessário fornecer a sua energia de separação.",
      "Está incorreta: o poço de potencial é o resultado quântico das forças nucleares e não de levitação magnética ou dependência nutricional de sódio alimentar.",
      "Está incorreta: o núcleo atómico não possui membranas lipídicas biológicas (estas existem na célula e organelos celulares); a barreira é um campo quântico de forças atómicas."
    ],
    "nursingApplication": "O poço de potencial nuclear explica por que o esqueleto e os tecidos dos doentes não se desintegram espontaneamente: os átomos estáveis de cálcio, fósforo e oxigénio residem confortavelmente no fundo de poços de potencial estáveis, mantendo a homeostase anatómica e estrutural do corpo humano."
  },
  {
    "id": 6050,
    "topicId": 6,
    "question": "A reação nuclear de Fusão que alimenta o núcleo do Sol e das estrelas funde núcleos de hidrogénio em hélio. Por que razão a fusão de dois protões leves liberta uma quantidade colossal de energia?",
    "options": [
      "A fusão liberta energia porque os núcleos de hidrogénio sofrem aniquilação total de matéria, transformando todos os seus protões e eletrões em gás ozono de alta densidade.",
      "A reação no Sol gera energia exclusivamente através da fricção mecânica das órbitas planetárias contra a atmosfera estelar rica em nitrogénio gasoso comprimido.",
      "O núcleo de Hélio-4 resultante possui uma energia de ligação média por nucleão (~7,1 MeV/nucleão) muito superior à dos núcleos de hidrogénio reagentes, libertando o excedente como energia.",
      "A fusão estelar consome mais energia do que aquela que liberta, necessitando que o Sol receba eletricidade por indução magnética contínua a partir de buracos negros vizinhos."
    ],
    "correctIndex": 2,
    "explanation": "Na extremidade esquerda da curva de energia de ligação (A < 20), a curva sobe com declive vertiginoso: os protões isolados têm B/A = 0, enquanto o núcleo de Hélio-4 (partícula alfa) tem uma energia de ligação prodigiosa de ~28,3 MeV (7,1 MeV por nucleão). Na fusão estelar (ciclo protão-protão: 4 ¹H -> ⁴He + 2 e⁺ + 2 ν_e + 26,7 MeV), cerca de 0,7% de toda a massa do hidrogénio é convertida diretamente em pura energia fotónica e térmica pelo defeito de massa de Einstein (E = Δm · c²).",
    "distractorAnalysis": [
      "Está incorreta: a curva de energia de ligação por nucleão tem subida acentuada do H-1 ao He-4; a massa do núcleo de hélio é menor que a soma dos 4 nucleões livres (E = Δm·c² libertada).",
      "Está incorreta: na cadeia próton-próton os protões não são aniquilados em gás ozono; fundem-se em núcleos estáveis de Hélio-4 com emissão de positrões, neutrinos e fotões gama.",
      "Está incorreta: a fusão nuclear termonuclear no núcleo solar é um processo exotérmico autossustentado por confinamento gravitacional a temperaturas de ~15 milhões de Kelvin."
    ],
    "nursingApplication": "Toda a energia vital que move o planeta Terra e a vida biológica humana (desde os alimentos que os doentes consomem até à luz solar que sintetiza a Vitamina D na pele para fixação de cálcio ósseo) tem a sua origem primordial nas reações de fusão nuclear do Sol governadas pelo defeito de massa e pelas forças nucleares."
  },
  {
    "id": 6051,
    "topicId": 6,
    "question": "Na física do núcleo atómico e das forças nucleares aplicada ao contexto dos radiofármacos e saúde, em relação a 'composição do núcleo atómico por protões e neutrões', qual é a fundamentação científica exata?",
    "options": [
      "O núcleo é formado por Z protões e igual número de fotões que neutralizam a carga elétrica positiva por compensação da densidade de fluxo magnético dipolar.",
      "O núcleo contém exclusivamente electrões pesados e positrões emparelhados que orbitam em torno de um neutrão maciço central desprovido de massa própria.",
      "O núcleo atómico consiste numa nuvem difusa de plasma onde protões e neutrões se dissolvem continuamente em radiação térmica infravermelha a baixa pressão.",
      "O núcleo é composto por Z protões (que definem o elemento químico) e N neutrões (que estabilizam o núcleo), unidos a distâncias de femtómetros pela força forte."
    ],
    "correctIndex": 3,
    "explanation": "Em física nuclear médica, composição do núcleo atómico por protões e neutrões explica-se pelo facto de que o núcleo atómico é constituído por protões (carga elétrica positiva +1e e massa ~1,0073 u) e neutrões (carga elétrica nula e massa ~1,0087 u), coletivamente designados por nucleões. O número atómico (Z) define o número de protões e a identidade do elemento químico; o número de neutrões (N) e o número de massa total A = Z + N definem a espécie isotópica específica.",
    "distractorAnalysis": [
      "Está incorreta: o número atómico Z corresponde aos protões e N aos neutrões (A = Z + N); a coesão é assegurada pela força nuclear forte e não por fotões ou campos dipolares.",
      "Está incorreta: o núcleo não contém eletrões nem positrões orbitais estáveis; a sua composição elementar clássica é nucleónica (protões e neutrões ligados).",
      "Está incorreta: os nucleões são partículas bariónicas com massa e estrutura interna bem definida (quarks), mantendo a sua individualidade dentro do poço de potencial nuclear."
    ],
    "nursingApplication": "O enfermeiro identifica a notação nuclear nos radiofármacos (como o Iodo-131, com Z = 53 protões e N = 78 neutrões, totalizando A = 131 nucleões)."
  },
  {
    "id": 6052,
    "topicId": 6,
    "question": "Durante os cuidados de enfermagem e manipulação de radioisótopos hospitalares, como se manifesta na prática clínica o conceito de 'composição do núcleo atómico por protões e neutrões'?",
    "options": [
      "A seleção de radiofármacos hospitalares baseia-se na razão neutrão-protão (N/Z), que determina se o isótopo decai por emissão beta menos, beta mais ou captura.",
      "A composição nucleónica do radiofármaco determina a sua velocidade de circulação venosa no cateter e a viscosidade aparente da solução aquosa injetada no doente.",
      "O número de neutrões do radiofármaco determina a sua capacidade de neutralizar quimicamente agentes bacterianos na pele do doente antes de procedimentos invasivos.",
      "A contagem de protões nucleares altera o pH sanguíneo sistémico para valores alcalinos imediatamente após a injeção endovenosa de traçadores metabólicos no leito."
    ],
    "correctIndex": 0,
    "explanation": "A aplicação na enfermagem para composição do núcleo atómico por protões e neutrões baseia-se no princípio: O enfermeiro identifica a notação nuclear nos radiofármacos (como o Iodo-131, com Z = 53 protões e N = 78 neutrões, totalizando A = 131 nucleões). Esta prática garante a segurança radiológica do doente e da equipa.",
    "distractorAnalysis": [
      "Está incorreta: o desequilíbrio na razão N/Z dita a via de decaimento: núcleos ricos em neutrões sofrem decaimento beta menos; núcleos ricos em protões sofrem beta mais ou captura.",
      "Está incorreta: as propriedades reológicas e hemodinâmicas de soluções radiofarmacêuticas dependem do veículo carreador e solutos químicos, e não da razão N/Z subatómica.",
      "Está incorreta: a desinfeção da pele ou o pH fisiológico dependem de reações químicas moleculares clássicas e da homeostase tecidual, não da composição intrínseca do núcleo atómico."
    ],
    "nursingApplication": "O enfermeiro identifica a notação nuclear nos radiofármacos (como o Iodo-131, com Z = 53 protões e N = 78 neutrões, totalizando A = 131 nucleões)."
  },
  {
    "id": 6053,
    "topicId": 6,
    "question": "Um enfermeiro estuda os fundamentos teóricos da estabilidade da matéria e as propriedades físicas em 'composição do núcleo atómico por protões e neutrões'. Qual das seguintes afirmações expressa a relação física correta?",
    "options": [
      "O número atómico Z varia quando ocorrem transições eletrónicas na camada externa do átomo, alterando a identidade química durante reações bioquímicas normais.",
      "O número de massa A representa o total de nucleões (A = Z + N), sendo a massa atómica ligeiramente inferior à soma das massas livres devido ao defeito de massa.",
      "A massa total de qualquer núcleo ligado é rigorosamente igual à soma aritmética simples das massas dos protões e neutrões livres que o constituem isoladamente.",
      "O número de neutrões N tem de ser sempre estritamente igual ao número de protões Z para que o átomo possa existir na natureza sem sofrer cisão espontânea."
    ],
    "correctIndex": 1,
    "explanation": "A análise teórica e experimental confirma que O número atómico (Z) define o número de protões e a identidade do elemento químico; o número de neutrões (N) e o número de massa total A = Z + N definem a espécie isotópica específica. O domínio destes conceitos permite ao enfermeiro compreender as bases da física nuclear hospitalar.",
    "distractorAnalysis": [
      "Está incorreta: a energia de ligação nuclear reduz a massa do núcleo em relação aos seus constituintes livres isolados, de acordo com a relação relativista E = Δm·c².",
      "Está incorreta: o número atómico Z é fixado exclusivamente pelo número de protões nucleares; processos químicos ou transições eletrónicas periféricas não alteram o valor de Z.",
      "Está incorreta: para elementos médios e pesados estáveis, o número de neutrões N excede substancialmente o número de protões Z (N/Z atinge ~1,5 no Chumbo-208)."
    ],
    "nursingApplication": "O enfermeiro identifica a notação nuclear nos radiofármacos (como o Iodo-131, com Z = 53 protões e N = 78 neutrões, totalizando A = 131 nucleões)."
  },
  {
    "id": 6054,
    "topicId": 6,
    "question": "Na física do núcleo atómico e das forças nucleares aplicada ao contexto dos radiofármacos e saúde, em relação a 'escala dimensional e densidade nuclear extrema', qual é a fundamentação científica exata?",
    "options": [
      "O núcleo atómico possui um raio comparável ao da sua órbita eletrónica externa (10⁻¹⁰ m), apresentando uma densidade uniforme semelhante à da água líquida em repouso.",
      "A densidade da matéria nuclear varia linearmente com o número atómico, sendo dez vezes menor no urânio do que no átomo de hidrogénio em virtude da repulsão iónica.",
      "O núcleo possui dimensões da ordem de femtómetros (10⁻¹⁵ m) e uma densidade colossal constante de aproximadamente 2,3 × 10¹⁷ kg/m³, ocupando fração minúscula do átomo.",
      "O volume nuclear ocupa mais de oitenta por cento do espaço atómico global, concentrando a carga elétrica negativa em contacto com as moléculas do meio aquoso circundante."
    ],
    "correctIndex": 2,
    "explanation": "Em física nuclear médica, escala dimensional e densidade nuclear extrema explica-se pelo facto de que o raio do núcleo atómico é da ordem de 1 a 10 femtómetros (1 fm = 10⁻¹⁵ m), cerca de 100.000 vezes menor do que o raio do átomo completo (10⁻¹⁰ m). Como quase toda a massa do átomo está confinada neste volume minúsculo, a densidade da matéria nuclear é astronómica: cerca de 2,3 · 10¹⁴ g/cm³ (1 cm³ pesaria 230 milhões de toneladas!).",
    "distractorAnalysis": [
      "Está incorreta: o raio nuclear é da ordem de 10⁻¹⁵ m (femtotipos) enquanto o átomo é da ordem de 10⁻¹⁰ m (angstroms); o núcleo concentra >99,9% da massa em volume infinitesimal.",
      "Está incorreta: a densidade nuclear é extraordinariamente elevada (~2,3·10¹⁷ kg/m³ ou ~230 milhões de toneladas por centímetro cúbico), sendo praticamente constante em todos os núcleos.",
      "Está incorreta: o núcleo atómico é positivo e extremamente denso; o volume atómico é dominado pela eletrosfera extranuclear de carga negativa."
    ],
    "nursingApplication": "O enfermeiro compreende que o átomo é essencialmente espaço vazio, o que explica por que radiações de alta energia conseguem atravessar milhares de camadas celulares sem colisão direta."
  },
  {
    "id": 6055,
    "topicId": 6,
    "question": "Durante os cuidados de enfermagem e manipulação de radioisótopos hospitalares, como se manifesta na prática clínica o conceito de 'escala dimensional e densidade nuclear extrema'?",
    "options": [
      "A elevada densidade dos núcleos atómicos faz com que os frascos de radiofármacos pesem vários quilogramas nas mãos do enfermeiro quando contêm doses diagnósticas.",
      "A dimensão microscópica nuclear faz com que os radiofármacos se evaporem espontaneamente através do vidro da ampola se esta não for conservada sob vácuo contínuo.",
      "A densidade nuclear extrema atrai mecanicamente o sangue do utente para o interior do cateter periférico por ação de forças de gravitação quântica aumentada.",
      "A densidade extrema do núcleo impede a alteração da sua taxa de decaimento por fatores clínicos ambientais habituais (temperatura, pressão ou fármacos administrados)."
    ],
    "correctIndex": 3,
    "explanation": "A aplicação na enfermagem para escala dimensional e densidade nuclear extrema baseia-se no princípio: O enfermeiro compreende que o átomo é essencialmente espaço vazio, o que explica por que radiações de alta energia conseguem atravessar milhares de camadas celulares sem colisão direta. Esta prática garante a segurança radiológica do doente e da equipa.",
    "distractorAnalysis": [
      "Está incorreta: as forças e energias nucleares (MeV) são milhões de vezes superiores às energias térmicas e químicas (eV), tornando a taxa de decaimento independente do meio clínico.",
      "Está incorreta: a massa total de radioisótopo administrada é da ordem de nanogramas ou picogramas, pelo que o peso do frasco deve-se exclusivamente ao líquido e ao vidro.",
      "Está incorreta: núcleos atómicos não evaporam através de recipientes sólidos de vidro ou chumbo; as perdas de atividade ocorrem por decaimento radioativo espontâneo."
    ],
    "nursingApplication": "O enfermeiro compreende que o átomo é essencialmente espaço vazio, o que explica por que radiações de alta energia conseguem atravessar milhares de camadas celulares sem colisão direta."
  },
  {
    "id": 6056,
    "topicId": 6,
    "question": "Um enfermeiro estuda os fundamentos teóricos da estabilidade da matéria e as propriedades físicas em 'escala dimensional e densidade nuclear extrema'. Qual das seguintes afirmações expressa a relação física correta?",
    "options": [
      "A matéria nuclear exibe comportamento quase incompressível com densidade central praticamente constante, o que fundamenta o modelo da gota líquida na física nuclear.",
      "A matéria nuclear expande-se indefinidamente à medida que o núcleo arrefece, preenchendo todos os interstícios celulares com neutrões gasosos de alta pressão interna.",
      "A densidade da matéria nuclear anula-se no centro do núcleo atómico devido à presença de uma cavidade de vácuo eletrostático que repele todos os nucleões positivos.",
      "A compressibilidade da matéria nuclear é idêntica à do ar atmosférico, sofrendo contrações de volume de cinquenta por cento quando submetida a ultrassons clínicos."
    ],
    "correctIndex": 0,
    "explanation": "A análise teórica e experimental confirma que Como quase toda a massa do átomo está confinada neste volume minúsculo, a densidade da matéria nuclear é astronómica: cerca de 2,3 · 10¹⁴ g/cm³ (1 cm³ pesaria 230 milhões de toneladas!). O domínio destes conceitos permite ao enfermeiro compreender as bases da física nuclear hospitalar.",
    "distractorAnalysis": [
      "Está incorreta: a saturação da força nuclear forte confere à matéria nuclear uma densidade central constante (~0,16 nucleões/fm³), comportando-se como líquido incompressível.",
      "Está incorreta: os nucleões encontram-se fortemente ligados no poço de potencial nuclear e não se expandem nem comportam como gás sob variações de temperatura biológica.",
      "Está incorreta: medições de dispersão de eletrões mostram que a densidade de carga nuclear é máxima e aproximadamente plana no centro do núcleo, caindo na superfície."
    ],
    "nursingApplication": "O enfermeiro compreende que o átomo é essencialmente espaço vazio, o que explica por que radiações de alta energia conseguem atravessar milhares de camadas celulares sem colisão direta."
  },
  {
    "id": 6057,
    "topicId": 6,
    "question": "Na física do núcleo atómico e das forças nucleares aplicada ao contexto dos radiofármacos e saúde, em relação a 'raio nuclear e a fórmula empírica R = R₀ · A^(1/3)', qual é a fundamentação científica exata?",
    "options": [
      "O raio nuclear cresce de modo quadrático com o número atómico (R ∝ Z²), fazendo com que os núcleos pesados tenham dimensões mil vezes superiores às dos núcleos leves.",
      "O raio nuclear escala com a raiz cúbica do número de massa segundo a fórmula R = R₀ · A^(1/3) (com R₀ ≈ 1,2 fm), demonstrando que o volume é diretamente proporcional a A.",
      "O raio nuclear varia de forma inversamente proporcional à massa atómica (R ∝ 1/A), tornando os núcleos com mais nucleões progressivamente menores e mais comprimidos.",
      "A constante R₀ representa a distância de segurança em metros que o profissional de saúde deve manter em relação a um feixe colimado emitido em braquiterapia direta."
    ],
    "correctIndex": 1,
    "explanation": "Em física nuclear médica, raio nuclear e a fórmula empírica R = R₀ · A^(1/3) explica-se pelo facto de que o raio nuclear (R) cresce com a raiz cúbica do número de massa A: R = R₀ · A^(1/3), onde a constante R₀ vale aproximadamente 1,2 femtómetros. Isto demonstra que o volume do núcleo é diretamente proporcional ao número total de nucleões, mantendo uma densidade nuclear uniforme e constante em todos os elementos da tabela periódica.",
    "distractorAnalysis": [
      "Está incorreta: como V = (4/3)πR³ e V ∝ A (densidade constante), temos R³ ∝ A, ou seja, R = R₀·A^(1/3); por exemplo, para A = 125, R ≈ 1,2 × 5 = 6,0 fm.",
      "Está incorreta: o raio nuclear não cresce com Z², mas com A^(1/3); o núcleo de Chumbo-208 tem apenas cerca de 7,1 fm de raio, pouco maior que o Oxigénio-16 (~3,0 fm).",
      "Está incorreta: o raio aumenta com a massa e não diminui; R₀ é uma constante física fundamental de raio de nucleão (~1,2 × 10⁻¹⁵ m) e não uma distância arquitetónica."
    ],
    "nursingApplication": "O enfermeiro consolida a física subatómica básica que fundamenta a interação da radiação ionizante com a matéria biológica viva."
  },
  {
    "id": 6058,
    "topicId": 6,
    "question": "Durante os cuidados de enfermagem e manipulação de radioisótopos hospitalares, como se manifesta na prática clínica o conceito de 'raio nuclear e a fórmula empírica R = R₀ · A^(1/3)'?",
    "options": [
      "A fórmula do raio nuclear indica a profundidade exata em centímetros a que a agulha de biópsia deve penetrar no tecido muscular para aspirar núcleos atómicos viáveis.",
      "O raio nuclear determina a velocidade angular a que as ampolas de vidro devem ser centrifugadas no laboratório de análises clínicas para decantar resíduos sólidos.",
      "A secção eficaz de interação de neutrões e partículas nucleares depende da área geométrica (πR²), influenciando o rendimento da produção de radiofármacos em alvos.",
      "A relação R = R₀ · A^(1/3) permite prever a espessura em milímetros do avental plumbífero necessária para absorver qualquer emissão de partículas alfa emitidas na sala."
    ],
    "correctIndex": 2,
    "explanation": "A aplicação na enfermagem para raio nuclear e a fórmula empírica R = R₀ · A^(1/3) baseia-se no princípio: O enfermeiro consolida a física subatómica básica que fundamenta a interação da radiação ionizante com a matéria biológica viva. Esta prática garante a segurança radiológica do doente e da equipa.",
    "distractorAnalysis": [
      "Está incorreta: a secção eficaz nuclear microscópica (medida em barns, 1 barn = 10⁻²⁸ m²) relaciona-se com a área nuclear projetada e governa a produção em ciclotrão e reator.",
      "Está incorreta: as agulhas de punção aspiram tecidos e células completas (escala de micrómetros a milímetros), enquanto o raio nuclear é subatómico (escala de femtómetros).",
      "Está incorreta: a centrifugação separa componentes celulares macroscópicos e não núcleos isolados; partículas alfa são barradas por uma folha de papel e não por aventais plumbíferos."
    ],
    "nursingApplication": "O enfermeiro consolida a física subatómica básica que fundamenta a interação da radiação ionizante com a matéria biológica viva."
  },
  {
    "id": 6059,
    "topicId": 6,
    "question": "Um enfermeiro estuda os fundamentos teóricos da estabilidade da matéria e as propriedades físicas em 'raio nuclear e a fórmula empírica R = R₀ · A^(1/3)'. Qual das seguintes afirmações expressa a relação física correta?",
    "options": [
      "Para um núcleo com A = 64 nucleões, o raio nuclear atinge meio milímetro, tornando a sua estrutura visível ao microscópio óptico com iluminação de campo claro.",
      "A constante R₀ é calculada dividindo a velocidade da luz no vácuo pela constante de gravitação universal de Newton em unidades do Sistema Internacional de Medidas.",
      "O valor de R₀ reduz-se para metade sempre que o elemento químico se liga covalentemente a átomos de oxigénio em meio biológico enriquecido com glicose hipertónica.",
      "Para um núcleo com A = 64 nucleões, o raio é de aproximadamente 4,8 fm (R = 1,2 × 64^(1/3) = 1,2 × 4 = 4,8 fm), confirmando a escala subnuclear das forças fortes."
    ],
    "correctIndex": 3,
    "explanation": "A análise teórica e experimental confirma que Isto demonstra que o volume do núcleo é diretamente proporcional ao número total de nucleões, mantendo uma densidade nuclear uniforme e constante em todos os elementos da tabela periódica. O domínio destes conceitos permite ao enfermeiro compreender as bases da física nuclear hospitalar.",
    "distractorAnalysis": [
      "Está incorreta: 64^(1/3) = 4; logo R = 1,2 fm × 4 = 4,8 fm (4,8 × 10⁻¹⁵ m), uma escala milhões de vezes menor que o limite de resolução da microscopia óptica (~0,2 µm).",
      "Está incorreta: um núcleo com raio de 0,5 mm conteria uma quantidade astronómica de nucleões e entraria em colapso gravitacional sob densidades nucleares.",
      "Está incorreta: R₀ é determinado experimentalmente por experiências de dispersão de eletrões de alta energia (dispersão de Hofstadter) e independe de ligações químicas covalentes."
    ],
    "nursingApplication": "O enfermeiro consolida a física subatómica básica que fundamenta a interação da radiação ionizante com a matéria biológica viva."
  },
  {
    "id": 6060,
    "topicId": 6,
    "question": "Na física do núcleo atómico e das forças nucleares aplicada ao contexto dos radiofármacos e saúde, em relação a 'momento dipolar magnético nuclear e o spin dos nucleões', qual é a fundamentação científica exata?",
    "options": [
      "O spin nuclear provém do momento angular intrínseco dos protões e neutrões desemparelhados, originando um momento dipolar magnético nuclear mensurável.",
      "O spin nuclear surge unicamente do movimento orbital mecânico dos eletrões de valência quando estes rodam em torno do núcleo atómico a velocidades supersónicas.",
      "O momento dipolar magnético nuclear existe apenas em núcleos que contêm um número estritamente par de protões e um número estritamente par de neutrões ligados.",
      "O momento magnético do núcleo orienta-se permanentemente em direção ao polo Norte geográfico terrestre, impedindo a rotação dos radionuclídeos no interior do corpo."
    ],
    "correctIndex": 0,
    "explanation": "Em física nuclear médica, momento dipolar magnético nuclear e o spin dos nucleões explica-se pelo facto de que protões e neutrões possuem um momento angular intrínseco (spin = 1/2) que gera um pequeno momento magnético nuclear associado. Núcleos com número ímpar de protões ou neutrões (como o Hidrogénio-1, ¹H, com um único protão) possuem um spin líquido diferente de zero, atuando como microscópicos ímanes.",
    "distractorAnalysis": [
      "Está incorreta: protões e neutrões possuem spin intrínseco s = 1/2; em núcleos com A ímpar ou com número ímpar de protões/neutrões, o spin total I resulta em momento magnético nuclear.",
      "Está incorreta: o spin nuclear é uma propriedade quântica puramente nuclear e independente dos eletrões periféricos de valência ou de movimentos supersónicos.",
      "Está incorreta: núcleos par-par (como ¹²C e ¹⁶O) têm todos os nucleões emparelhados e spin total I = 0, possuindo momento dipolar magnético nulo no estado fundamental."
    ],
    "nursingApplication": "Esta propriedade é a base física indispensável da Imagiologia por Ressonância Magnética (IRM): o enfermeiro sabe que o sinal de ressonância provém da orientação dos spins dos protões de hidrogénio da água corporal sob um campo magnético intenso."
  },
  {
    "id": 6061,
    "topicId": 6,
    "question": "Durante os cuidados de enfermagem e manipulação de radioisótopos hospitalares, como se manifesta na prática clínica o conceito de 'momento dipolar magnético nuclear e o spin dos nucleões'?",
    "options": [
      "O momento magnético nuclear é utilizado para guiar magneticamente as partículas beta através dos vasos sanguíneos até ao tumor utilizando ímanes permanentes de bolso.",
      "O spin e momento magnético de núcleos de hidrogénio (¹H) nos tecidos biológicos constituem a base física essencial da Imagiologia por Ressonância Magnética (IRM).",
      "O spin nuclear é o parâmetro físico que determina a quantidade de desinfetante alcoólico necessária para preparar a pele do doente antes de injeções subcutâneas.",
      "A polarização do spin nuclear faz com que os cateteres venosos de teflon ganhem carga elétrica estática capaz de provocar choques elétricos aos profissionais."
    ],
    "correctIndex": 1,
    "explanation": "A aplicação na enfermagem para momento dipolar magnético nuclear e o spin dos nucleões baseia-se no princípio: Esta propriedade é a base física indispensável da Imagiologia por Ressonância Magnética (IRM): o enfermeiro sabe que o sinal de ressonância provém da orientação dos spins dos protões de hidrogénio da água corporal sob um campo magnético intenso. Esta prática garante a segurança radiológica do doente e da equipa.",
    "distractorAnalysis": [
      "Está incorreta: a IRM explora a precessão de Larmor dos spins nucleares dos protões da água tecidual (¹H) sob campos magnéticos estáticos B₀ e pulsos de radiofrequência.",
      "Está incorreta: partículas beta são eletrões de alta velocidade desacelerados por colisões com a matéria tecidual, não sendo guiadas no corpo por pequenos ímanes de bolso.",
      "Está incorreta: o spin nuclear é um fenómeno quântico subatómico que não tem relação com antissepsia cutânea, reatividade alcoólica ou eletrização de cateteres plásticos."
    ],
    "nursingApplication": "Esta propriedade é a base física indispensável da Imagiologia por Ressonância Magnética (IRM): o enfermeiro sabe que o sinal de ressonância provém da orientação dos spins dos protões de hidrogénio da água corporal sob um campo magnético intenso."
  },
  {
    "id": 6062,
    "topicId": 6,
    "question": "Um enfermeiro estuda os fundamentos teóricos da estabilidade da matéria e as propriedades físicas em 'momento dipolar magnético nuclear e o spin dos nucleões'. Qual das seguintes afirmações expressa a relação física correta?",
    "options": [
      "Núcleos com spin nuclear igual a zero são os únicos capazes de emitir sinais detetáveis em exames de ressonância magnética nuclear de alta resolução diagnóstica.",
      "O momento magnético do neutrão livre é rigorosamente nulo porque a sua carga elétrica líquida total é igual a zero nas experiências laboratoriais de repouso.",
      "Núcleos com número par de protões e número par de neutrões (núcleos par-par) possuem spin nuclear nulo (I = 0) no estado fundamental por emparelhamento antissimétrico.",
      "O valor do spin nuclear pode assumir qualquer número real arbitrário contínuo, variando suavemente entre zero e infinito com a temperatura ambiental da sala."
    ],
    "correctIndex": 2,
    "explanation": "A análise teórica e experimental confirma que Núcleos com número ímpar de protões ou neutrões (como o Hidrogénio-1, ¹H, com um único protão) possuem um spin líquido diferente de zero, atuando como microscópicos ímanes. O domínio destes conceitos permite ao enfermeiro compreender as bases da física nuclear hospitalar.",
    "distractorAnalysis": [
      "Está incorreta: nucleões emparelham-se com spins opostos; logo, todos os núcleos estáveis par-par possuem spin I = 0 e momento magnético nulo no estado fundamental.",
      "Está incorreta: núcleos com I = 0 são invisíveis em RMN; para haver sinal de ressonância magnética é indispensável spin nuclear não nulo (como ¹H com I = 1/2).",
      "Está incorreta: embora o neutrão seja neutro, ele é composto por quarks com carga (u, d, d), possuindo momento magnético intrínseco não nulo (µ_n ≈ -1,91 magnetões nucleares)."
    ],
    "nursingApplication": "Esta propriedade é a base física indispensável da Imagiologia por Ressonância Magnética (IRM): o enfermeiro sabe que o sinal de ressonância provém da orientação dos spins dos protões de hidrogénio da água corporal sob um campo magnético intenso."
  },
  {
    "id": 6063,
    "topicId": 6,
    "question": "Na física do núcleo atómico e das forças nucleares aplicada ao contexto dos radiofármacos e saúde, em relação a 'núcleos espelho e simetria de carga nuclear', qual é a fundamentação científica exata?",
    "options": [
      "Núcleos espelho são núcleos atómicos que refletem totalmente feixes de luz visível sem absorver qualquer fração da radiação eletromagnética incidente na superfície.",
      "Núcleos espelho possuem obrigatoriamente a mesma carga elétrica líquida total, apresentando exatamente o mesmo número de protões e propriedades químicas idênticas.",
      "O fenómeno dos núcleos espelho ocorre apenas quando dois radioisótopos colidem elasticamente numa placa de vidro polido com prata no interior do laboratório.",
      "Núcleos espelho são pares de isóbaros onde o número de protões de um é igual ao de neutrões do outro, comprovando que a força nuclear forte independe da carga elétrica."
    ],
    "correctIndex": 3,
    "explanation": "Em física nuclear médica, núcleos espelho e simetria de carga nuclear explica-se pelo facto de que núcleos espelho são pares de isóbaros onde o número de protões de um é igual ao número de neutrões do outro (por exemplo, Carbono-11 com 6p e 5n vs Boro-11 com 5p e 6n). A comparação das suas massas revela que as forças nucleares entre dois protões, dois neutrões ou um protão e um neutrão são rigorosamente idênticas (independência de carga da força nuclear).",
    "distractorAnalysis": [
      "Está incorreta: exemplos de núcleos espelho incluem ⁷Li (Z=3, N=4) e ⁷Be (Z=4, N=3); as suas pequenas diferenças de energia de ligação devem-se apenas à repulsão coulombiana entre protões.",
      "Está incorreta: o termo 'espelho' é uma analogia quântica formal para a troca simétrica entre protões e neutrões (invariância de isospin), não tendo ligação com reflexão de luz visível.",
      "Está incorreta: núcleos espelho pertencem a elementos químicos diferentes porque têm valores de Z distintos (diferem em exatamente um protão em pares clássicos de núcleos espelho)."
    ],
    "nursingApplication": "O Carbono-11 é um emissor de positrões utilizado em PET neurológico e oncológico que o enfermeiro reconhece nos protocolos avançados de diagnóstico tumoral."
  },
  {
    "id": 6064,
    "topicId": 6,
    "question": "Durante os cuidados de enfermagem e manipulação de radioisótopos hospitalares, como se manifesta na prática clínica o conceito de 'núcleos espelho e simetria de carga nuclear'?",
    "options": [
      "A simetria de carga entre nucleões permite modelar com precisão as energias de transição e a semivida em emissores de positrões usados na imagiologia médica por PET.",
      "O uso de núcleos espelho permite dispensar os protetores de chumbo em salas de tomografia computorizada porque os fotões anulam-se por interferência destrutiva.",
      "A simetria de carga nuclear impede que as soluções de radiofármacos se misturem com o sangue venoso, obrigando à sua administração estritamente por punção intra-arterial.",
      "Os núcleos espelho produzem um campo magnético repulsivo que impede a aderência de microrganismos patogénicos às luvas de látex da equipa de enfermagem."
    ],
    "correctIndex": 0,
    "explanation": "A aplicação na enfermagem para núcleos espelho e simetria de carga nuclear baseia-se no princípio: O Carbono-11 é um emissor de positrões utilizado em PET neurológico e oncológico que o enfermeiro reconhece nos protocolos avançados de diagnóstico tumoral. Esta prática garante a segurança radiológica do doente e da equipa.",
    "distractorAnalysis": [
      "Está incorreta: transições super-permitidas de Fermi entre núcleos espelho (como ¹⁴O -> ¹⁴N*) são fundamentais para testar a universalidade da interação fraca e calibrar modelos nucleares.",
      "Está incorreta: a simetria de carga não elimina a radiação ionizante nem anula fotões de raios X por interferência óptica; blindagens plumbíferas continuam indispensáveis.",
      "Está incorreta: os radiofármacos misturam-se perfeitamente no sangue venoso; a física de núcleos espelho não influencia biocompatibilidade vascular nem propriedades de luvas de látex."
    ],
    "nursingApplication": "O Carbono-11 é um emissor de positrões utilizado em PET neurológico e oncológico que o enfermeiro reconhece nos protocolos avançados de diagnóstico tumoral."
  },
  {
    "id": 6065,
    "topicId": 6,
    "question": "Um enfermeiro estuda os fundamentos teóricos da estabilidade da matéria e as propriedades físicas em 'núcleos espelho e simetria de carga nuclear'. Qual das seguintes afirmações expressa a relação física correta?",
    "options": [
      "A força nuclear forte entre dois protões é cem vezes mais fraca do que a força de atração forte entre dois neutrões livres mantidos à mesma distância espacial.",
      "A diferença de energia de ligação entre núcleos espelho (como ³H e ³He) é atribuível quase exclusivamente à repulsão eletrostática adicional entre os protões.",
      "Em qualquer par de núcleos espelho, o núcleo com maior número de protões é energeticamente mais estável e apresenta semivida de decaimento significativamente mais longa.",
      "A simetria de carga estabelece que protões e neutrões possuem rigorosamente a mesma massa de repouso, sem qualquer diferença detetável na física experimental moderna."
    ],
    "correctIndex": 1,
    "explanation": "A análise teórica e experimental confirma que A comparação das suas massas revela que as forças nucleares entre dois protões, dois neutrões ou um protão e um neutrão são rigorosamente idênticas (independência de carga da força nuclear). O domínio destes conceitos permite ao enfermeiro compreender as bases da física nuclear hospitalar.",
    "distractorAnalysis": [
      "Está incorreta: a força nuclear forte é independente da carga (V_pp = V_nn = V_np na componente forte); as pequenas diferenças de ligação derivam da energia coulombiana extra.",
      "Está incorreta: a interação nuclear forte atua com a mesma intensidade entre p-p, n-n e n-p, desde que nos mesmos estados quânticos de spin e momento angular.",
      "Está incorreta: o núcleo com maior Z tem maior repulsão eletrostática, sendo ligeiramente menos ligado (menor energia de separação) e tipicamente decaindo por beta mais para o seu espelho."
    ],
    "nursingApplication": "O Carbono-11 é um emissor de positrões utilizado em PET neurológico e oncológico que o enfermeiro reconhece nos protocolos avançados de diagnóstico tumoral."
  },
  {
    "id": 6066,
    "topicId": 6,
    "question": "Na física do núcleo atómico e das forças nucleares aplicada ao contexto dos radiofármacos e saúde, em relação a 'Lei de Coulomb aplicada ao confinamento de protões no núcleo', qual é a fundamentação científica exata?",
    "options": [
      "A repulsão coulombiana entre protões é completamente neutralizada no interior do núcleo atómico pela força gravitacional de atração mútua entre as suas massas.",
      "A Lei de Coulomb não se aplica a protões no núcleo porque as partículas elementares deixam de possuir carga elétrica quando entram no volume nuclear restrito.",
      "A Lei de Coulomb (F = k·q₁·q₂/r²) prevê forças de repulsão colossais entre protões a distâncias de femtómetros, que têm de ser superadas pela força forte a curto alcance.",
      "A força eletrostática entre protões atrai as partículas com uma intensidade inversamente proporcional ao quadrado da distância, auxiliando a coesão do núcleo."
    ],
    "correctIndex": 2,
    "explanation": "Em física nuclear médica, Lei de Coulomb aplicada ao confinamento de protões no núcleo explica-se pelo facto de que segundo a Lei de Coulomb ($F_e = k \\cdot \\frac{q_1 \\cdot q_2}{r^2}$), dois protões separados por distâncias nucleares femtométricas (r ≈ 10⁻¹⁵ m) exercem entre si uma força repulsiva colossal superior a 230 Newtons. Aplicada a uma massa tão ínfima quanto a de um protão (1,67 · 10⁻²⁷ kg), esta força geraria uma aceleração repulsiva de 10²⁹ m/s², estilhaçando o núcleo em frações de segundo.",
    "distractorAnalysis": [
      "Está incorreta: a distâncias r ~ 1 fm, a repulsão eletrostática mútua entre dois protões atinge dezenas de Newtons, uma força gigantesca para partículas com massa de 10⁻²⁷ kg.",
      "Está incorreta: a atração gravitacional entre nucleões é cerca de 10³⁶ vezes mais fraca do que a repulsão eletrostática, sendo completamente desprezável no equilíbrio nuclear.",
      "Está incorreta: a carga elétrica dos protões é invariante; a Lei de Coulomb continua válida e a sua repulsão opõe-se continuamente à atração da força nuclear forte."
    ],
    "nursingApplication": "Para que o núcleo exista de forma estável, é estritamente obrigatória a existência de uma força atrativa muito mais potente que contrabalance a repulsão eletrostática: a Força Nuclear Forte."
  },
  {
    "id": 6067,
    "topicId": 6,
    "question": "Durante os cuidados de enfermagem e manipulação de radioisótopos hospitalares, como se manifesta na prática clínica o conceito de 'Lei de Coulomb aplicada ao confinamento de protões no núcleo'?",
    "options": [
      "A Lei de Coulomb dita que os doentes com radiofármacos devem manter-se ligados à terra por fios de cobre condutores para evitar a ignição eletrostática do quarto.",
      "O campo coulombiano do radioisótopo polariza o plástico dos frascos de colheita de urina, impedindo a determinação analítica laboratorial da proteinúria de rotina.",
      "A repulsão entre protões faz com que o soro fisiológico infundido por via intravenosa se decomponha instantaneamente em hidrogénio gasoso e oxigénio explosivo.",
      "A repulsão coulombiana explica por que núcleos pesados (elevado Z) são propensos a fissão e emissão alfa, influenciando os protocolos de segurança radiológica hospitalar."
    ],
    "correctIndex": 3,
    "explanation": "A aplicação na enfermagem para Lei de Coulomb aplicada ao confinamento de protões no núcleo baseia-se no princípio: Para que o núcleo exista de forma estável, é estritamente obrigatória a existência de uma força atrativa muito mais potente que contrabalance a repulsão eletrostática: a Força Nuclear Forte. Esta prática garante a segurança radiológica do doente e da equipa.",
    "distractorAnalysis": [
      "Está incorreta: em núcleos pesados a repulsão coulombiana cumulativa torna o núcleo instável, favorecendo a emissão de partículas alfa (He-4) ou a cisão espontânea.",
      "Está incorreta: as cargas elétricas nucleares estão neutralizadas pelos eletrões atómicos a nível macroscópico; doentes não acumulam carga eletrostática perigosa por radiofármacos.",
      "Está incorreta: radiofármacos não decompõem o soro por efeitos eletrostáticos nem impedem análises urinárias comuns; as precauções focam-se na proteção contra radiação ionizante."
    ],
    "nursingApplication": "Para que o núcleo exista de forma estável, é estritamente obrigatória a existência de uma força atrativa muito mais potente que contrabalance a repulsão eletrostática: a Força Nuclear Forte."
  },
  {
    "id": 6068,
    "topicId": 6,
    "question": "Um enfermeiro estuda os fundamentos teóricos da estabilidade da matéria e as propriedades físicas em 'Lei de Coulomb aplicada ao confinamento de protões no núcleo'. Qual das seguintes afirmações expressa a relação física correta?",
    "options": [
      "Como a força forte tem curto alcance (~1 a 2 fm) e a repulsão coulombiana tem alcance infinito, a repulsão torna-se desestabilizadora à medida que Z aumenta no núcleo.",
      "A força eletrostática entre protões diminui linearmente com a distância, enquanto a força forte diminui com o cubo da distância entre os nucleões vizinhos no volume.",
      "A repulsão coulombiana manifesta-se unicamente entre neutrões em movimento térmico rápido, não exercendo qualquer efeito mecânico sobre os protões nucleares.",
      "A energia eletrostática do núcleo pode ser reduzida a zero adicionando eletrões de condução diretamente ao interior do líquido nuclear através de eletrólise ácida."
    ],
    "correctIndex": 0,
    "explanation": "A análise teórica e experimental confirma que Aplicada a uma massa tão ínfima quanto a de um protão (1,67 · 10⁻²⁷ kg), esta força geraria uma aceleração repulsiva de 10²⁹ m/s², estilhaçando o núcleo em frações de segundo. O domínio destes conceitos permite ao enfermeiro compreender as bases da física nuclear hospitalar.",
    "distractorAnalysis": [
      "Está incorreta: cada protão repele todos os outros Z-1 protões do núcleo (efeito global a longo alcance), enquanto a força forte atrai apenas os vizinhos imediatos (saturação).",
      "Está incorreta: a força coulombiana obedece à lei do inverso do quadrado (1/r²); a força forte residual decai exponencialmente com o potencial de Yukawa (e^(-µr)/r).",
      "Está incorreta: os neutrões têm carga líquida zero e não sofrem repulsão de Coulomb; a repulsão coulombiana ocorre estritamente entre protões carregados positivamente."
    ],
    "nursingApplication": "Para que o núcleo exista de forma estável, é estritamente obrigatória a existência de uma força atrativa muito mais potente que contrabalance a repulsão eletrostática: a Força Nuclear Forte."
  },
  {
    "id": 6069,
    "topicId": 6,
    "question": "Na física do núcleo atómico e das forças nucleares aplicada ao contexto dos radiofármacos e saúde, em relação a 'crescimento quadrático da repulsão coulombiana com Z', qual é a fundamentação científica exata?",
    "options": [
      "A repulsão coulombiana nuclear cresce de modo logarítmico com o número atómico, tornando os elementos superpesados mais estáveis do que o hélio contra a fissão espontânea.",
      "A energia de repulsão coulombiana cresce proporcionalmente a Z(Z - 1) ≈ Z², explicando por que elementos muito pesados exigem mais neutrões ou se tornam instáveis.",
      "O termo coulombiano da energia nuclear depende exclusivamente do número de neutrões N, sendo rigorosamente independente da carga elétrica dos protões presentes.",
      "O crescimento quadrático da repulsão de Coulomb impede a existência de átomos estáveis com mais de dez protões no núcleo em toda a tabela periódica moderna."
    ],
    "correctIndex": 1,
    "explanation": "Em física nuclear médica, crescimento quadrático da repulsão coulombiana com Z explica-se pelo facto de que o número de pares de protões que se repelem no interior do núcleo cresce com o quadrado do número atómico: Pares = Z · (Z - 1) / 2. À medida que avançamos na tabela periódica para elementos pesados (como o Urânio com Z = 92), a repulsão eletrostática acumulada torna-se gigantesca, desestabilizando os núcleos.",
    "distractorAnalysis": [
      "Está incorreta: a energia de Coulomb nuclear é E_C = (3/5)(1/(4πε₀))(Z(Z-1)e²/R) ∝ Z²/A^(1/3); para Z grande, este termo cresce rapidamente, favorecendo o decaimento alfa e a fissão.",
      "Está incorreta: o crescimento com Z² desestabiliza os núcleos pesados; não existe estabilidade infinita e elementos superpesados têm semividas de frações de segundo.",
      "Está incorreta: a energia coulombiana decorre da carga positiva dos protões e independe diretamente dos neutrões, exceto pelo facto de estes aumentarem o raio R."
    ],
    "nursingApplication": "Por esta razão, não existem elementos químicos estáveis na natureza com Z > 82 (Chumbo); todos os elementos com Z ≥ 83 (Bismuto, Rádio, Urânio) são intrinsecamente radioativos."
  },
  {
    "id": 6070,
    "topicId": 6,
    "question": "Durante os cuidados de enfermagem e manipulação de radioisótopos hospitalares, como se manifesta na prática clínica o conceito de 'crescimento quadrático da repulsão coulombiana com Z'?",
    "options": [
      "A repulsão com Z² obriga o enfermeiro a administrar fármacos quelantes em todos os doentes para drenar o excesso de protões através da transpiração cutânea.",
      "O termo Z² faz com que a radiação gama emitida por radiofármacos pesados se transforme espontaneamente em corrente elétrica contínua na pele dos utentes tratados.",
      "Os radioisótopos pesados (como Actínio-225 e Rádio-223) emitem partículas alfa devido ao excesso de repulsão coulombiana, sendo vitais em radioterapia dirigida (TAT).",
      "A repulsão eletrostática nuclear impede o transporte rodoviário de radioisótopos pesados, que explodem espontaneamente se expostos à luz solar hospitalar diurna."
    ],
    "correctIndex": 2,
    "explanation": "A aplicação na enfermagem para crescimento quadrático da repulsão coulombiana com Z baseia-se no princípio: Por esta razão, não existem elementos químicos estáveis na natureza com Z > 82 (Chumbo); todos os elementos com Z ≥ 83 (Bismuto, Rádio, Urânio) são intrinsecamente radioativos. Esta prática garante a segurança radiológica do doente e da equipa.",
    "distractorAnalysis": [
      "Está incorreta: emissores alfa como ²²³Ra e ²²⁵Ac aproveitam a instabilidade coulombiana de núcleos pesados para emitir alfas de alta transferência linear de energia (LET) contra tumores.",
      "Está incorreta: quelantes eliminam iões metálicos químicos e não protões subatómicos; protões não são excretados isoladamente por transpiração.",
      "Está incorreta: radiações nucleares produzem ionizações e excitações microscópicas nos tecidos e não corrente contínua macroscópica nem explosões por luz solar."
    ],
    "nursingApplication": "Por esta razão, não existem elementos químicos estáveis na natureza com Z > 82 (Chumbo); todos os elementos com Z ≥ 83 (Bismuto, Rádio, Urânio) são intrinsecamente radioativos."
  },
  {
    "id": 6071,
    "topicId": 6,
    "question": "Um enfermeiro estuda os fundamentos teóricos da estabilidade da matéria e as propriedades físicas em 'crescimento quadrático da repulsão coulombiana com Z'. Qual das seguintes afirmações expressa a relação física correta?",
    "options": [
      "O termo de Coulomb na fórmula de Bethe-Weizsäcker possui sinal positivo, demonstrando que a repulsão eletrostática aumenta a coesão e a estabilidade do núcleo.",
      "A repulsão coulombiana nuclear anula-se rigorosamente para núcleos que possuem número atómico Z compreendido entre quarenta e cinquenta na tabela periódica.",
      "A energia eletrostática entre protões é totalmente convertida em ondas acústicas de ultrassons contínuos emitidas pelo núcleo atómico a frequências audíveis.",
      "Na fórmula semiempírica de massa, o termo de energia de Coulomb tem coeficiente negativo (-a_C · Z(Z - 1)/A^(1/3)), reduzindo a energia de ligação total do núcleo atómico."
    ],
    "correctIndex": 3,
    "explanation": "A análise teórica e experimental confirma que À medida que avançamos na tabela periódica para elementos pesados (como o Urânio com Z = 92), a repulsão eletrostática acumulada torna-se gigantesca, desestabilizando os núcleos. O domínio destes conceitos permite ao enfermeiro compreender as bases da física nuclear hospitalar.",
    "distractorAnalysis": [
      "Está incorreta: a repulsão eletrostática é desestabilizadora, pelo que subtrai à energia de ligação nuclear B(A,Z) na fórmula da gota líquida com valor a_C ≈ 0,7 MeV.",
      "Está incorreta: a repulsão de Coulomb enfraquece a ligação nuclear (reduz B); apenas os termos de volume e de superfície da força forte contribuem para a coesão atrativa.",
      "Está incorreta: a repulsão coulombiana existe para qualquer Z ≥ 2 e nunca se anula em núcleos atómicos múltiplos, não gerando ondas acústicas audíveis."
    ],
    "nursingApplication": "Por esta razão, não existem elementos químicos estáveis na natureza com Z > 82 (Chumbo); todos os elementos com Z ≥ 83 (Bismuto, Rádio, Urânio) são intrinsecamente radioativos."
  },
  {
    "id": 6072,
    "topicId": 6,
    "question": "Na física do núcleo atómico e das forças nucleares aplicada ao contexto dos radiofármacos e saúde, em relação a 'papel dos neutrões como 'cimento' nuclear e diluidores de carga', qual é a fundamentação científica exata?",
    "options": [
      "Os neutrões adicionam força forte atrativa sem introduzir repulsão eletrostática, aumentando o espaçamento médio entre protões e estabilizando núcleos com Z elevado.",
      "Os neutrões possuem carga elétrica fracionária negativa que neutraliza a carga dos protões em repouso por contacto mecânico permanente no interior do núcleo.",
      "Os neutrões servem apenas para aumentar o peso atómico do elemento sem exercerem qualquer força física de atração forte sobre os protões adjacentes na estrutura.",
      "A presença de neutrões atrai magnões e fotões térmicos do meio circundante, arrefecendo o núcleo até temperaturas criogénicas extremas no interior do núcleo."
    ],
    "correctIndex": 0,
    "explanation": "Em física nuclear médica, papel dos neutrões como 'cimento' nuclear e diluidores de carga explica-se pelo facto de que os neutrões não possuem carga elétrica líquida (não sofrem repulsão coulombiana), mas exercem a potente atração da força nuclear forte com todos os nucleões vizinhos. Ao intercalarem-se entre os protões, os neutrões aumentam a distância média entre cargas positivas, diminuindo a força repulsiva eletrostática ($F \\propto 1/r^2$) e mantendo o núcleo coeso.",
    "distractorAnalysis": [
      "Está incorreta: os neutrões sentem a força forte atrativa mas têm carga líquida nula, atuando como amortecedores/diluidores da repulsão coulombiana entre protões.",
      "Está incorreta: neutrões têm carga elétrica total nula (embora formados por quarks u=+2/3, d=-1/3, d=-1/3); não neutralizam os protões por contacto elétrico.",
      "Está incorreta: a força nuclear forte entre neutrões e protões é fundamental para a existência de núcleos atómicos; sem neutrões, núcleos com Z > 1 não seriam estáveis."
    ],
    "nursingApplication": "O enfermeiro compreende porque núcleos de elementos pesados necessitam de muito mais neutrões do que protões para manter a integridade física."
  },
  {
    "id": 6073,
    "topicId": 6,
    "question": "Durante os cuidados de enfermagem e manipulação de radioisótopos hospitalares, como se manifesta na prática clínica o conceito de 'papel dos neutrões como 'cimento' nuclear e diluidores de carga'?",
    "options": [
      "A quantidade de neutrões do radiofármaco determina a necessidade de manter o doente em jejum hídrico absoluto durante três dias consecutivos após o exame.",
      "A razão neutrão-protão (N/Z) dos radioisótopos em medicina dita a sua instabilidade: excesso de neutrões leva a decaimento beta menos; escassez leva a beta mais.",
      "O papel estabilizador dos neutrões permite que os radiofármacos administrados a idosos neutralizem o ácido láctico acumulado nos músculos após o esforço físico.",
      "Os neutrões do núcleo atómico migram para o plasma sanguíneo, onde atuam como anticorpos naturais contra bactérias multirresistentes adquiridas no hospital."
    ],
    "correctIndex": 1,
    "explanation": "A aplicação na enfermagem para papel dos neutrões como 'cimento' nuclear e diluidores de carga baseia-se no princípio: O enfermeiro compreende porque núcleos de elementos pesados necessitam de muito mais neutrões do que protões para manter a integridade física. Esta prática garante a segurança radiológica do doente e da equipa.",
    "distractorAnalysis": [
      "Está incorreta: nuclídeos acima da linha de estabilidade (excesso de neutrões) convertem n -> p + e⁻ + antineutrino (beta menos); nuclídeos abaixo convertem p -> n + e⁺ + neutrino (beta mais/CE).",
      "Está incorreta: o jejum em exames (ex: 18F-FDG) destina-se a normalizar a glicemia para não competir pelo transportador GLUT, não se relacionando com a física de neutrões.",
      "Está incorreta: neutrões permanecem estritamente ligados aos núcleos dos átomos e não exercem funções de neutralização química muscular ou imunidade antibacteriana."
    ],
    "nursingApplication": "O enfermeiro compreende porque núcleos de elementos pesados necessitam de muito mais neutrões do que protões para manter a integridade física."
  },
  {
    "id": 6074,
    "topicId": 6,
    "question": "Um enfermeiro estuda os fundamentos teóricos da estabilidade da matéria e as propriedades físicas em 'papel dos neutrões como 'cimento' nuclear e diluidores de carga'. Qual das seguintes afirmações expressa a relação física correta?",
    "options": [
      "Todos os núcleos estáveis conhecidos na natureza apresentam uma razão rigorosa N/Z igual a 2,0, independentemente da sua massa atómica ou carga elétrica nuclear.",
      "Os elementos pesados necessitam de menos neutrões do que protões (N < Z) porque a força forte aumenta de intensidade de forma quadrática com a massa nuclear.",
      "Nos núcleos leves estáveis a razão N/Z é próxima de 1 (como ¹²C e ¹⁶O), mas para elementos pesados estáveis como o Chumbo-208 a razão atinge cerca de 1,5.",
      "A razão N/Z nos isótopos estáveis diminui linearmente de 1,0 no hidrogénio para 0,2 no urânio-238 devido à perda contínua de massa bariónica no vácuo estelar."
    ],
    "correctIndex": 2,
    "explanation": "A análise teórica e experimental confirma que Ao intercalarem-se entre os protões, os neutrões aumentam a distância média entre cargas positivas, diminuindo a força repulsiva eletrostática ($F \\propto 1/r^2$) e mantendo o núcleo coeso. O domínio destes conceitos permite ao enfermeiro compreender as bases da física nuclear hospitalar.",
    "distractorAnalysis": [
      "Está incorreta: para Z reduzido, a energia de simetria favorece N ≈ Z; para Z elevado, a repulsão coulombiana (∝ Z²) exige um número crescente de neutrões, elevando N/Z para ~1,5.",
      "Está incorreta: não existem núcleos estáveis com N/Z = 2,0 na região dos elementos leves ou médios; a razão N/Z evolui suavemente ao longo do vale de estabilidade.",
      "Está incorreta: núcleos pesados necessitam de significativamente mais neutrões (N > Z) para diluir a repulsão eletrostática; por exemplo, ²⁰⁸Pb tem 82 protões e 126 neutrões (N/Z ≈ 1,54)."
    ],
    "nursingApplication": "O enfermeiro compreende porque núcleos de elementos pesados necessitam de muito mais neutrões do que protões para manter a integridade física."
  },
  {
    "id": 6075,
    "topicId": 6,
    "question": "Na física do núcleo atómico e das forças nucleares aplicada ao contexto dos radiofármacos e saúde, em relação a 'barreira de potencial coulombiana e reações de fusão nuclear', qual é a fundamentação científica exata?",
    "options": [
      "A barreira de potencial coulombiana é uma barreira mecânica impenetrável que impede rigorosamente qualquer reação nuclear mesmo a energias estelares elevadas.",
      "A barreira coulombiana atrai partículas de mesma carga elétrica com intensidade infinita quando a separação interatómica se aproxima de um micrómetro no ar.",
      "A fusão nuclear ocorre espontaneamente à temperatura ambiente em soluções aquosas sem necessidade de ultrapassar qualquer potencial eletrostático prévio.",
      "Para dois núcleos se fundirem ou interagirem, eles têm de possuir energia cinética suficiente para vencer a repulsão coulombiana ou atravessá-la por efeito de túnel quântico."
    ],
    "correctIndex": 3,
    "explanation": "Em física nuclear médica, barreira de potencial coulombiana e reações de fusão nuclear explica-se pelo facto de que para que dois núcleos positivos se fundam (como no centro do Sol ou num reator de fusão), eles têm de vencer a repulsão coulombiana aproximando-se a menos de 1 femtómetro. Isto exige temperaturas de milhões de graus Celsius para que a energia cinética térmica vença a barreira repulsiva de Coulomb.",
    "distractorAnalysis": [
      "Está incorreta: a barreira de Coulomb atinge MeV de altura; partículas com energia sub-barreira conseguem penetrá-la por efeito de túnel quântico (explicando a fusão solar e decaimento alfa).",
      "Está incorreta: a barreira não é totalmente intransponível nem impenetrável; a física quântica prevê probabilidade finita de penetração por efeito de túnel (Gamow).",
      "Está incorreta: cargas com o mesmo sinal sofrem repulsão de Coulomb; a fusão requer temperaturas extremas (milhões de Kelvin) para vencer a barreira de repulsão."
    ],
    "nursingApplication": "Este princípio explica porque a fusão nuclear emite muito mais energia do que qualquer processo químico, sendo o motor primordial de todo o Universo."
  },
  {
    "id": 6076,
    "topicId": 6,
    "question": "Durante os cuidados de enfermagem e manipulação de radioisótopos hospitalares, como se manifesta na prática clínica o conceito de 'barreira de potencial coulombiana e reações de fusão nuclear'?",
    "options": [
      "Para produzir radioisótopos em ciclotrão hospitalar (como ¹⁸O(p,n)¹⁸F), os protões têm de ser acelerados a MeV para superar a barreira de repulsão coulombiana do alvo.",
      "A barreira de Coulomb exige que os radiofármacos sejam mantidos em congeladores a trinta graus negativos para impedir que os protões escapem do frasco estéril.",
      "A superação da barreira coulombiana ocorre espontaneamente quando o enfermeiro agita vigorosamente o frasco de soro com o radioisótopo antes da administração venosa.",
      "A barreira eletrostática nuclear impede a circulação de sangue no membro cateterizado se o radiofármaco não for previamente neutralizado com bicarbonato de sódio."
    ],
    "correctIndex": 0,
    "explanation": "A aplicação na enfermagem para barreira de potencial coulombiana e reações de fusão nuclear baseia-se no princípio: Este princípio explica porque a fusão nuclear emite muito mais energia do que qualquer processo químico, sendo o motor primordial de todo o Universo. Esta prática garante a segurança radiológica do doente e da equipa.",
    "distractorAnalysis": [
      "Está incorreta: o ciclotrão acelera protões tipicamente a 10-18 MeV para vencer a barreira coulombiana do núcleo de Oxigénio-18 e induzir a reação nuclear geradora de Flúor-18.",
      "Está incorreta: a barreira de Coulomb atua a nível femtométrico nuclear; variações de temperatura física macroscópica em congeladores não afetam o potencial nuclear.",
      "Está incorreta: agitação mecânica manual fornece energias de fração de eletrão-volt (eV), sendo incapaz de influenciar reações nucleares que operam na escala de megaeleatrão-volts (MeV)."
    ],
    "nursingApplication": "Este princípio explica porque a fusão nuclear emite muito mais energia do que qualquer processo químico, sendo o motor primordial de todo o Universo."
  },
  {
    "id": 6077,
    "topicId": 6,
    "question": "Um enfermeiro estuda os fundamentos teóricos da estabilidade da matéria e as propriedades físicas em 'barreira de potencial coulombiana e reações de fusão nuclear'. Qual das seguintes afirmações expressa a relação física correta?",
    "options": [
      "A barreira de Coulomb anula-se completamente sempre que o projétil incidente colide com a nuvem eletrónica periférica do átomo a velocidades inferiores à do som.",
      "A altura da barreira de Coulomb (V_C ≈ k·Z₁·Z₂·e² / (R₁ + R₂)) determina o limiar de energia cinética que o projétil incidente necessita de ter para desencadear reações.",
      "A penetração da barreira nuclear depende exclusivamente da condutividade térmica dos recipientes de vidro utilizados para recolher as amostras biológicas do utente.",
      "A altura da barreira eletrostática nuclear é rigorosamente a mesma para qualquer elemento químico, desde o hidrogénio elementar até aos actinídeos pesados."
    ],
    "correctIndex": 1,
    "explanation": "A análise teórica e experimental confirma que Isto exige temperaturas de milhões de graus Celsius para que a energia cinética térmica vença a barreira repulsiva de Coulomb. O domínio destes conceitos permite ao enfermeiro compreender as bases da física nuclear hospitalar.",
    "distractorAnalysis": [
      "Está incorreta: a barreira coulombiana cresce com o produto das cargas nucleares Z₁·Z₂; para protões sobre Oxigénio-18 a barreira é de ~2,5 MeV, exigindo energia cinética mínima.",
      "Está incorreta: a colisão com a nuvem eletrónica ioniza o átomo mas não anula o potencial nuclear de repulsão eletrostática no centro atómico.",
      "Está incorreta: V_C depende estritamente das cargas nucleares Z e raios nucleares R, sendo independente de condutividade térmica de materiais macroscópicos."
    ],
    "nursingApplication": "Este princípio explica porque a fusão nuclear emite muito mais energia do que qualquer processo químico, sendo o motor primordial de todo o Universo."
  },
  {
    "id": 6078,
    "topicId": 6,
    "question": "Na física do núcleo atómico e das forças nucleares aplicada ao contexto dos radiofármacos e saúde, em relação a 'instabilidade nuclear por excesso de protões e decaimento beta mais (β+)', qual é a fundamentação científica exata?",
    "options": [
      "O decaimento beta mais consiste na ejeção violenta de dois protões e dois neutrões agregados num núcleo de hélio sem produção de qualquer neutrino associado.",
      "No decaimento beta mais, um neutrão do núcleo converte-se num protão com emissão de um eletrão negativo que é absorvido pelas mitocôndrias celulares do tecido.",
      "Em núcleos com excesso de protões em relação ao vale de estabilidade, um protão transmuta-se num neutrão com emissão de um positrão (e⁺) e de um neutrino do eletrão (ν_e).",
      "O excesso de protões no núcleo é corrigido pela absorção espontânea de moléculas de água a partir do citoplasma circundante através de osmose celular ativa."
    ],
    "correctIndex": 2,
    "explanation": "Em física nuclear médica, instabilidade nuclear por excesso de protões e decaimento beta mais (β+) explica-se pelo facto de que núcleos artificiais gerados em aceleradores com excesso relativo de protões sofrem repulsão coulombiana interna excessiva que supera o vale de estabilidade. Para restabelecer o equilíbrio, o núcleo transmuta espontaneamente um protão num neutrão, ejetando um positrão e um neutrino ($p \\rightarrow n + \\beta^+ + \nu_e$).",
    "distractorAnalysis": [
      "Está incorreta: no decaimento beta mais (β+), p -> n + e⁺ + ν_e mediado pela força fraca; conserva carga (+1 -> 0 + 1 + 0), número de nucleões e número leptónico.",
      "Está incorreta: a emissão de um núcleo de Hélio-4 corresponde ao decaimento alfa (α) e não ao decaimento beta mais.",
      "Está incorreta: a conversão de um neutrão num protão com emissão de eletrão (e⁻) e antineutrino define o decaimento beta menos (β-)."
    ],
    "nursingApplication": "Esta é a base física da produção de Flúor-18 e Gálio-68 para exames PET: o enfermeiro manuseia o radiofármaco protegido por blindagens de tungsténio."
  },
  {
    "id": 6079,
    "topicId": 6,
    "question": "Durante os cuidados de enfermagem e manipulação de radioisótopos hospitalares, como se manifesta na prática clínica o conceito de 'instabilidade nuclear por excesso de protões e decaimento beta mais (β+)'?",
    "options": [
      "O enfermeiro deve administrar protetores gástricos porque os positrões emitidos perfuram a mucosa do estômago gerando microúlceras térmicas de contacto imediato.",
      "A emissão beta mais torna a urina do doente fluorescente à luz visível, permitindo que a equipa clínica observe o trajeto de eliminação a olho nu sem aparelhos.",
      "Os positrões emitidos em exames PET são retidos integralmente no interior da seringa plástica de injeção, não atingindo os órgãos do doente após a punção venosa.",
      "O positrão emitido pelo radiofármaco (como o ¹⁸F) aniquila-se com um eletrão tecidual após percorrer 1-2 mm, originando dois fotões de 511 keV detetados em coincidência no PET."
    ],
    "correctIndex": 3,
    "explanation": "A aplicação na enfermagem para instabilidade nuclear por excesso de protões e decaimento beta mais (β+) baseia-se no princípio: Esta é a base física da produção de Flúor-18 e Gálio-68 para exames PET: o enfermeiro manuseia o radiofármaco protegido por blindagens de tungsténio. Esta prática garante a segurança radiológica do doente e da equipa.",
    "distractorAnalysis": [
      "Está incorreta: o positrão dissipa energia cinética nos tecidos (range de ~1 mm para ¹⁸F) e aniquila-se com um eletrão livre (e⁺ + e⁻ -> 2γ de 511 keV a 180°), base do PET.",
      "Está incorreta: a aniquilação liberta fotões gama de 511 keV que penetram o corpo; não ocorrem perfurações mecânicas gástricas nem efeitos térmicos macroscópicos.",
      "Está incorreta: os positrões e fotões de aniquilação são invisíveis ao olho humano, sendo detetados exclusivamente por cristais cintiladores dos anéis de câmaras PET/CT."
    ],
    "nursingApplication": "Esta é a base física da produção de Flúor-18 e Gálio-68 para exames PET: o enfermeiro manuseia o radiofármaco protegido por blindagens de tungsténio."
  },
  {
    "id": 6080,
    "topicId": 6,
    "question": "Um enfermeiro estuda os fundamentos teóricos da estabilidade da matéria e as propriedades físicas em 'instabilidade nuclear por excesso de protões e decaimento beta mais (β+)'. Qual das seguintes afirmações expressa a relação física correta?",
    "options": [
      "Para ocorrer decaimento β⁺, a diferença de massa entre o átomo pai e o átomo filho tem de ser superior ao dobro da massa de repouso do eletrão (Δm·c² > 2 m_e·c² ≈ 1,022 MeV).",
      "O decaimento beta mais pode ocorrer para qualquer diferença de energia infinitesimal, mesmo que a energia disponível seja inferior a dez quiloeleatrão-volts no sistema.",
      "A energia libertada no decaimento beta mais é atribuída integralmente e em exclusivo ao neutrino emitido, ficando o positrão em repouso absoluto no núcleo.",
      "O número atómico Z do núcleo resultante aumenta em duas unidades após um decaimento beta mais devido à criação espontânea de pares de protões secundários."
    ],
    "correctIndex": 0,
    "explanation": "A análise teórica e experimental confirma que Para restabelecer o equilíbrio, o núcleo transmuta espontaneamente um protão num neutrão, ejetando um positrão e um neutrino ($p \\rightarrow n + \\beta^+ + \nu_e$). O domínio destes conceitos permite ao enfermeiro compreender as bases da física nuclear hospitalar.",
    "distractorAnalysis": [
      "Está incorreta: a conservação de massa atómica exige Q_β+ = (M_pai - M_filho - 2m_e)c² > 0; se a energia for < 1,022 MeV, o núcleo apenas pode decair por Captura Eletrónica.",
      "Está incorreta: o limiar de 1,022 MeV é obrigatório para a emissão de positrões; abaixo deste valor o decaimento β+ é energeticamente proibido pela mecânica relativista.",
      "Está incorreta: o espetro beta mais é contínuo; a energia cinética reparte-se entre o positrão e o neutrino; no decaimento β+, Z diminui em uma unidade (Z -> Z - 1)."
    ],
    "nursingApplication": "Esta é a base física da produção de Flúor-18 e Gálio-68 para exames PET: o enfermeiro manuseia o radiofármaco protegido por blindagens de tungsténio."
  },
  {
    "id": 6081,
    "topicId": 6,
    "question": "Na física do núcleo atómico e das forças nucleares aplicada ao contexto dos radiofármacos e saúde, em relação a 'intensidade relativa da Força Nuclear Forte no Universo', qual é a fundamentação científica exata?",
    "options": [
      "A Força Forte é a interação mais débil da natureza, sendo superada pela gravidade mútua entre dois neutrões por um fator de dez milhões de vezes em laboratório.",
      "A Força Nuclear Forte é a mais intensa das quatro forças fundamentais, sendo cerca de 100 vezes mais intensa do que a força eletromagnética a distâncias subatómicas de 1 fm.",
      "A intensidade da força forte é rigorosamente nula a distâncias de um femtómetro, aumentando apenas quando os nucleões se afastam para distâncias superiores a um metro.",
      "A força nuclear forte é idêntica em intensidade à tensão superficial da água destilada à temperatura ambiente quando medida em béqueres de vidro hospitalares."
    ],
    "correctIndex": 1,
    "explanation": "Em física nuclear médica, intensidade relativa da Força Nuclear Forte no Universo explica-se pelo facto de que é a mais intensa de todas as quatro forças fundamentais da natureza, sendo cerca de 100 vezes mais forte do que a força eletromagnética e 10³⁸ vezes mais forte do que a gravidade. Esta enorme magnitude atrativa supera amplamente a repulsão eletrostática dos protões nas distâncias de equilíbrio do interior do núcleo (~1 fm).",
    "distractorAnalysis": [
      "Está incorreta: a escala de intensidades relativas aproximadas a 1 fm é: Forte (1), Eletromagnética (10⁻²), Fraca (10⁻⁵) e Gravítica (10⁻³⁸); a força forte é a mais poderosa do cosmos.",
      "Está incorreta: a gravidade é de longe a força mais fraca de todas as interações fundamentais entre partículas subatómicas, sendo completamente irrelevante na estrutura nuclear.",
      "Está incorreta: a força nuclear atinge a sua intensidade máxima a cerca de 1 fm e diminui dramaticamente até desaparecer para além de 2 a 3 fm (curto alcance)."
    ],
    "nursingApplication": "O enfermeiro reconhece que a quebra ou rearranjo destas ligações na fissão e decaimento nuclear liberta energias milhões de vezes superiores às reações químicas normais."
  },
  {
    "id": 6082,
    "topicId": 6,
    "question": "Durante os cuidados de enfermagem e manipulação de radioisótopos hospitalares, como se manifesta na prática clínica o conceito de 'intensidade relativa da Força Nuclear Forte no Universo'?",
    "options": [
      "A força forte liga os órgãos humanos à maca do hospital, impedindo que o doente caia durante a realização de exames imagiológicos em macas elevadas.",
      "A intensidade da força forte pode ser anulada pelo enfermeiro aplicando uma pomada hidratante à base de ureia sobre o local de punção do radiofármaco.",
      "A colossal intensidade da força forte confere estabilidade aos núcleos biológicos (como carbono e oxigénio), impedindo que o corpo humano se desintegre por repulsão eletrostática.",
      "A força nuclear atua puxando os fios dos equipamentos elétricos do piso hospitalar em direção à parede, facilitando a circulação dos carrinhos de emergência."
    ],
    "correctIndex": 2,
    "explanation": "A aplicação na enfermagem para intensidade relativa da Força Nuclear Forte no Universo baseia-se no princípio: O enfermeiro reconhece que a quebra ou rearranjo destas ligações na fissão e decaimento nuclear liberta energias milhões de vezes superiores às reações químicas normais. Esta prática garante a segurança radiológica do doente e da equipa.",
    "distractorAnalysis": [
      "Está incorreta: a força forte mantém os protões unidos nos núcleos estáveis que constituem todas as biomoléculas corporais; sem ela, a repulsão de Coulomb destruiria a matéria atómica.",
      "Está incorreta: a força forte atua exclusivamente na escala femtométrica dentro dos núcleos atómicos, não se manifestando em forças mecânicas macroscópicas sobre corpos humanos.",
      "Está incorreta: forças nucleares não são influenciadas por compostos tópicos, cosméticos ou agentes químicos externos; cosméticos hidratantes atuam apenas na epiderme."
    ],
    "nursingApplication": "O enfermeiro reconhece que a quebra ou rearranjo destas ligações na fissão e decaimento nuclear liberta energias milhões de vezes superiores às reações químicas normais."
  },
  {
    "id": 6083,
    "topicId": 6,
    "question": "Um enfermeiro estuda os fundamentos teóricos da estabilidade da matéria e as propriedades físicas em 'intensidade relativa da Força Nuclear Forte no Universo'. Qual das seguintes afirmações expressa a relação física correta?",
    "options": [
      "A constante de acoplamento nuclear forte é exatamente igual a zero em qualquer regime de energia, o que permite aos neutrões escaparem livremente de todos os átomos.",
      "A força forte atrai apenas partículas com carga elétrica negativa, repelindo todos os protões e neutrões livres em direção ao meio extracelular vizinho.",
      "A intensidade da interação forte cresce com o quadrado da distância, tornando-se infinita quando dois átomos se encontram separados por um quilómetro.",
      "A constante de acoplamento da força forte (α_s ≈ 1 a distâncias nucleares) é duas ordens de grandeza superior à constante de estrutura fina eletromagnética (α ≈ 1/137)."
    ],
    "correctIndex": 3,
    "explanation": "A análise teórica e experimental confirma que Esta enorme magnitude atrativa supera amplamente a repulsão eletrostática dos protões nas distâncias de equilíbrio do interior do núcleo (~1 fm). O domínio destes conceitos permite ao enfermeiro compreender as bases da física nuclear hospitalar.",
    "distractorAnalysis": [
      "Está incorreta: α_s ~ 1 vs α ≈ 1/137 (~0,0073); esta superioridade de intensidade permite à força forte residual superar com facilidade a repulsão de Coulomb dentro do núcleo.",
      "Está incorreta: se a constante de acoplamento fosse zero, os núcleos atómicos não se formariam e o universo seria composto apenas por um gás rarefeito de partículas livres.",
      "Está incorreta: a força forte é puramente nuclear e atrai nucleões (p-p, p-n, n-n) com a mesma intensidade, decaindo muito rapidamente para distâncias r > 2 fm."
    ],
    "nursingApplication": "O enfermeiro reconhece que a quebra ou rearranjo destas ligações na fissão e decaimento nuclear liberta energias milhões de vezes superiores às reações químicas normais."
  },
  {
    "id": 6084,
    "topicId": 6,
    "question": "Na física do núcleo atómico e das forças nucleares aplicada ao contexto dos radiofármacos e saúde, em relação a 'curtíssimo alcance femtométrico da Força Nuclear Forte', qual é a fundamentação científica exata?",
    "options": [
      "A força nuclear forte residual atua apenas a distâncias da ordem de 1 a 2 femtómetros, anulando-se praticamente para além de 2,5 a 3 fm devido à massa dos mesões pi.",
      "O alcance da força forte é infinito no espaço cósmico, diminuindo com o inverso do quadrado da distância exatamente como a gravidade e o campo eletrostático de Coulomb.",
      "A força forte atua eficazmente a distâncias macroscópicas de vários metros, puxando objetos metálicos em direção às ampolas de radionuclídeos no laboratório.",
      "O alcance da força forte restringe-se estritamente à superfície da pele do doente, impedindo a absorção de luz solar no compartimento de medicina nuclear."
    ],
    "correctIndex": 0,
    "explanation": "Em física nuclear médica, curtíssimo alcance femtométrico da Força Nuclear Forte explica-se pelo facto de que ao contrário da gravidade e da força elétrica (que têm alcance infinito decaindo com 1/r²), a força nuclear forte atua apenas a distâncias inferiores a 2 a 3 femtómetros (10⁻¹⁵ m). A distâncias superiores a 3 fm, a força atrativa decai exponencialmente para zero; a distâncias inferiores a 0,7 fm, torna-se fortemente repulsiva, impedindo o colapso dos nucleões num ponto singular.",
    "distractorAnalysis": [
      "Está incorreta: no modelo de Yukawa, a interação mediada por mesões com massa (m_π ≈ 140 MeV/c²) tem potencial V(r) = -g²(e^(-µr)/r), cujo alcance é R ≈ ħ/(m_π·c) ≈ 1,4 fm.",
      "Está incorreta: interações de alcance infinito exigem mediadores sem massa (como o fotão no eletromagnetismo e o gravitão); a força forte residual tem alcance ultracurto.",
      "Está incorreta: a atração a metros de objetos metálicos é de origem eletromagnética (como em ímanes ou RMN); a força forte está estritamente confinada ao núcleo atómico."
    ],
    "nursingApplication": "Este alcance ultracurto explica por que não sentimos a atração nuclear no dia a dia macroscópico, ficando confinado exclusivamente ao interior do núcleo atómico."
  },
  {
    "id": 6085,
    "topicId": 6,
    "question": "Durante os cuidados de enfermagem e manipulação de radioisótopos hospitalares, como se manifesta na prática clínica o conceito de 'curtíssimo alcance femtométrico da Força Nuclear Forte'?",
    "options": [
      "O curto alcance da força forte impede que os profissionais de saúde se aproximem a menos de dois metros dos doentes sob risco de ficarem magnetizados permanentemente.",
      "Devido ao alcance femtométrico da força forte, os nucleões interagem apenas com os seus vizinhos contíguos, limitando a energia de ligação por nucleão a cerca de 8 MeV.",
      "O alcance da força nuclear faz com que os cateteres intravenosos encurtem de comprimento em cinquenta por cento quando preenchidos com soro glicosado a cinco por cento.",
      "A limitação espacial da força forte obriga o enfermeiro a utilizar estritamente agulhas com comprimento superior a vinte centímetros em todas as injeções intramusculares."
    ],
    "correctIndex": 1,
    "explanation": "A aplicação na enfermagem para curtíssimo alcance femtométrico da Força Nuclear Forte baseia-se no princípio: Este alcance ultracurto explica por que não sentimos a atração nuclear no dia a dia macroscópico, ficando confinado exclusivamente ao interior do núcleo atómico. Esta prática garante a segurança radiológica do doente e da equipa.",
    "distractorAnalysis": [
      "Está incorreta: o curto alcance causa o fenómeno da saturação nuclear: um nucleão apenas se liga aos vizinhos imediatos, ao contrário da repulsão coulombiana que é cumulativa.",
      "Está incorreta: o alcance é subatómico (10⁻¹⁵ m); a distância de 2 metros na radioproteção baseia-se na atenuação geométrica da radiação gama emitida (lei do inverso do quadrado).",
      "Está incorreta: cateteres e agulhas são dispositivos biomédicos macroscópicos cujas dimensões e propriedades mecânicas não sofrem qualquer efeito da força nuclear forte."
    ],
    "nursingApplication": "Este alcance ultracurto explica por que não sentimos a atração nuclear no dia a dia macroscópico, ficando confinado exclusivamente ao interior do núcleo atómico."
  },
  {
    "id": 6086,
    "topicId": 6,
    "question": "Um enfermeiro estuda os fundamentos teóricos da estabilidade da matéria e as propriedades físicas em 'curtíssimo alcance femtométrico da Força Nuclear Forte'. Qual das seguintes afirmações expressa a relação física correta?",
    "options": [
      "A distâncias inferiores a 0,5 fm a força forte anula-se completamente, fazendo com que todos os nucleões atravessem livremente o centro do núcleo atómico sem resistência.",
      "O potencial nuclear atrativo cresce de modo contínuo à medida que a distância inter-nucleónica se aproxima de zero, compactando o núcleo num ponto matemático de volume nulo.",
      "A distâncias inferiores a cerca de 0,5 a 0,7 fm a força forte torna-se fortemente repulsiva ('caroço duro'), impedindo o colapso dos nucleões uns sobre os outros no núcleo.",
      "A força forte transforma-se em repulsão eletrostática apenas se a temperatura da sala de procedimentos hospitalares descer abaixo dos dez graus centígrados."
    ],
    "correctIndex": 2,
    "explanation": "A análise teórica e experimental confirma que A distâncias superiores a 3 fm, a força atrativa decai exponencialmente para zero; a distâncias inferiores a 0,7 fm, torna-se fortemente repulsiva, impedindo o colapso dos nucleões num ponto singular. O domínio destes conceitos permite ao enfermeiro compreender as bases da física nuclear hospitalar.",
    "distractorAnalysis": [
      "Está incorreta: o potencial internucleónico possui uma barreira repulsiva a distâncias r < 0,5 fm (hard-core) devido ao princípio de exclusão de Pauli entre os quarks constituintes.",
      "Está incorreta: a componente repulsiva a distâncias ultracurtas é fundamental para manter o volume finito e a densidade constante da matéria nuclear no cosmos.",
      "Está incorreta: se o potencial fosse atrativo até r = 0, os núcleos colapsariam em singularidades com densidade infinita, o que a mecânica quântica impede."
    ],
    "nursingApplication": "Este alcance ultracurto explica por que não sentimos a atração nuclear no dia a dia macroscópico, ficando confinado exclusivamente ao interior do núcleo atómico."
  },
  {
    "id": 6087,
    "topicId": 6,
    "question": "Na física do núcleo atómico e das forças nucleares aplicada ao contexto dos radiofármacos e saúde, em relação a 'independência de carga elétrica da Força Forte', qual é a fundamentação científica exata?",
    "options": [
      "A força forte atrai exclusivamente protões entre si, repelindo os neutrões em direção ao exterior do núcleo atómico por efeito de polarização magnética dipolar.",
      "A força forte é cinco vezes mais intensa entre neutrões do que entre protões porque os neutrões não possuem massa de repouso nas experiências de física de partículas.",
      "A independência de carga significa que a força nuclear atrai indistintamente eletrões atómicos orbitais e nucleões com o mesmo coeficiente de acoplamento quântico.",
      "A Força Nuclear Forte atua com a mesma intensidade entre dois protões (p-p), dois neutrões (n-n) ou um protão e um neutrão (p-n), demonstrando independência de carga elétrica."
    ],
    "correctIndex": 3,
    "explanation": "Em física nuclear médica, independência de carga elétrica da Força Forte explica-se pelo facto de que a atração nuclear forte é rigorosamente a mesma entre dois protões (p-p), entre dois neutrões (n-n) ou entre um protão e um neutrão (p-n), desde que nos mesmos estados quânticos de spin. Isto confirma que a carga elétrica não desempenha qualquer papel na interação forte primordial.",
    "distractorAnalysis": [
      "Está incorreta: experiências de dispersão a baixas energias provam que a componente nuclear pura da interação p-p, n-n e n-p nos mesmos estados quânticos é estritamente idêntica.",
      "Está incorreta: os neutrões participam ativamente da atração nuclear forte; sem ela, núcleos compostos como o deutério (um protão e um neutrão) seriam impossíveis.",
      "Está incorreta: eletrões são leptões e não interagem pela força forte (interagem apenas pelas forças eletromagnética, fraca e gravítica)."
    ],
    "nursingApplication": "Esta simetria de carga é fundamental para a física de partículas e para o modelo de camadas do núcleo atómico."
  },
  {
    "id": 6088,
    "topicId": 6,
    "question": "Durante os cuidados de enfermagem e manipulação de radioisótopos hospitalares, como se manifesta na prática clínica o conceito de 'independência de carga elétrica da Força Forte'?",
    "options": [
      "A independência de carga simplifica o cálculo de estados quânticos em modelos nucleares usados para prever canais de produção e rendimento de radionuclídeos médicos.",
      "A independência de carga da força forte permite lavar materiais contaminados com água corrente comum da rede pública sem necessidade de monitorização por contadores Geiger.",
      "Essa propriedade física faz com que os radioisótopos hospitalares não reajam com os reagentes químicos durante os testes de glicemia capilar nos doentes internados.",
      "A independência de carga torna desnecessária a utilização de luvas descartáveis durante a administração de radiofármacos injetáveis nas enfermarias de oncologia."
    ],
    "correctIndex": 0,
    "explanation": "A aplicação na enfermagem para independência de carga elétrica da Força Forte baseia-se no princípio: Esta simetria de carga é fundamental para a física de partículas e para o modelo de camadas do núcleo atómico. Esta prática garante a segurança radiológica do doente e da equipa.",
    "distractorAnalysis": [
      "Está incorreta: o conceito de isospin decorre da independência de carga e é essencial para prever reações nucleares e taxas de transição em radioisótopos diagnósticos e terapêuticos.",
      "Está incorreta: efluentes radioativos nunca devem ser descartados sem descontaminação e monitorização radiológica rigorosa; a proteção radiológica é mandatória.",
      "Está incorreta: radioisótopos participam nas mesmas reações químicas que os seus isótopos estáveis; a manipulação segura exige sempre EPI e barreiras de proteção."
    ],
    "nursingApplication": "Esta simetria de carga é fundamental para a física de partículas e para o modelo de camadas do núcleo atómico."
  },
  {
    "id": 6089,
    "topicId": 6,
    "question": "Um enfermeiro estuda os fundamentos teóricos da estabilidade da matéria e as propriedades físicas em 'independência de carga elétrica da Força Forte'. Qual das seguintes afirmações expressa a relação física correta?",
    "options": [
      "O isospin nuclear demonstra que os protões se transformam espontaneamente em neutrões se forem colocados num copo de vidro contendo soro fisiológico aquecido.",
      "No formalismo do isospin de Heisenberg, o protão e o neutrão são tratados como dois estados quânticos diferentes da mesma partícula constituinte fundamental (o nucleão).",
      "A conservação do isospin estabelece que a carga elétrica elementar de todos os núcleos atómicos deve variar aleatoriamente entre valores positivos e negativos.",
      "O formalismo do isospin aplica-se unicamente a eletrões da camada K que rodam no sentido contrário aos ponteiros do relógio em torno do núcleo atómico em repouso."
    ],
    "correctIndex": 1,
    "explanation": "A análise teórica e experimental confirma que Isto confirma que a carga elétrica não desempenha qualquer papel na interação forte primordial. O domínio destes conceitos permite ao enfermeiro compreender as bases da física nuclear hospitalar.",
    "distractorAnalysis": [
      "Está incorreta: o nucleão possui isospin T = 1/2 com projeções T_z = +1/2 (neutrão) e T_z = -1/2 (protão); a invariância sob rotações no espaço de isospin reflete a simetria de carga.",
      "Está incorreta: a transformação de nucleões requer a interação fraca (decaimento beta) e independe de fatores ambientais macroscópicos como soluções salinas aquecidas.",
      "Está incorreta: o isospin é uma simetria aproximada das interações fortes subatómicas e não se aplica a eletrões da eletrosfera atómica."
    ],
    "nursingApplication": "Esta simetria de carga é fundamental para a física de partículas e para o modelo de camadas do núcleo atómico."
  },
  {
    "id": 6090,
    "topicId": 6,
    "question": "Na física do núcleo atómico e das forças nucleares aplicada ao contexto dos radiofármacos e saúde, em relação a 'propriedade de saturação da Força Nuclear', qual é a fundamentação científica exata?",
    "options": [
      "A saturação nuclear significa que o núcleo atómico absorve eletrões da atmosfera até atingir um ponto em que não consegue acolher mais moléculas de ar no seu volume.",
      "A saturação nuclear impede que os radioisótopos se dissolvam em água bidestilada, forçando a sua administração em suspensão oleosa viscosa em todas as situações clínicas.",
      "A saturação nuclear significa que cada nucleão interage apenas com um número limitado de nucleões adjacentes, resultando numa energia de ligação proporcional a A (B ∝ A).",
      "Essa propriedade dita que a força forte atrai todos os nucleões do universo simultaneamente com uma intensidade cumulativa que cresce com o quadrado da massa total."
    ],
    "correctIndex": 2,
    "explanation": "Em física nuclear médica, propriedade de saturação da Força Nuclear explica-se pelo facto de que devido ao seu curto alcance, um nucleão atrai apenas os seus vizinhos mais imediatos em contacto direto, não interagindo com nucleões do lado oposto de um núcleo volumoso. Como resultado, a energia de ligação por nucleão atinge um patamar constante de cerca de 8 MeV por nucleão na maioria dos elementos da tabela periódica.",
    "distractorAnalysis": [
      "Está incorreta: se a força forte não saturasse, cada nucleão interagiria com todos os A-1 nucleões e a energia seria ∝ A(A-1) ≈ A²; devido ao curto alcance, B/A permanece ~8 MeV.",
      "Está incorreta: a saturação é um fenómeno quântico interno do poço de potencial nuclear entre nucleões, não tendo relação com absorção de eletrões ou gases atmosféricos.",
      "Está incorreta: radiofármacos comuns são formulados como soluções aquosas hidrossolúveis de alta pureza e não suspensões oleosas indissolúveis."
    ],
    "nursingApplication": "Em núcleos muito grandes, a atração forte satura localmente, mas a repulsão elétrica (de alcance infinito) atua entre TODOS os protões, tornando os núcleos superpesados instáveis."
  },
  {
    "id": 6091,
    "topicId": 6,
    "question": "Durante os cuidados de enfermagem e manipulação de radioisótopos hospitalares, como se manifesta na prática clínica o conceito de 'propriedade de saturação da Força Nuclear'?",
    "options": [
      "A saturação nuclear permite que os enfermeiros toquem diretamente nas fontes radioativas com as mãos desnudas sem receberem qualquer dose de radiação ionizante externa.",
      "Essa propriedade faz com que os contentores de chumbo fiquem quentes ao toque após dez minutos de acondicionamento de ampolas de tecnécio na câmara quente.",
      "A saturação da força forte elimina a necessidade de cumprir os limites anuais de dose estabelecidos pela legislação de segurança radiológica hospitalar em vigor.",
      "A saturação nuclear garante que a energia média por nucleão seja aproximadamente constante, permitindo prever a energia libertada na fissão ou decaimento de radionuclídeos."
    ],
    "correctIndex": 3,
    "explanation": "A aplicação na enfermagem para propriedade de saturação da Força Nuclear baseia-se no princípio: Em núcleos muito grandes, a atração forte satura localmente, mas a repulsão elétrica (de alcance infinito) atua entre TODOS os protões, tornando os núcleos superpesados instáveis. Esta prática garante a segurança radiológica do doente e da equipa.",
    "distractorAnalysis": [
      "Está incorreta: a estabilidade da curva B/A em ~8 MeV é consequência direta da saturação; isso dita a energética dos processos de decaimento e fissão usados na medicina nuclear.",
      "Está incorreta: tocar em fontes radioativas com as mãos desprotegidas causa doses dérmicas elevadas e viola todas as regras de proteção radiológica; use pinças e blindagens.",
      "Está incorreta: blindagens de chumbo barram fotões mas não aquecem significativamente com doses diagnósticas; os limites de dose continuam estritamente obrigatórios."
    ],
    "nursingApplication": "Em núcleos muito grandes, a atração forte satura localmente, mas a repulsão elétrica (de alcance infinito) atua entre TODOS os protões, tornando os núcleos superpesados instáveis."
  },
  {
    "id": 6092,
    "topicId": 6,
    "question": "Um enfermeiro estuda os fundamentos teóricos da estabilidade da matéria e as propriedades físicas em 'propriedade de saturação da Força Nuclear'. Qual das seguintes afirmações expressa a relação física correta?",
    "options": [
      "Se a força forte não exibisse saturação, a energia de ligação por nucleão cresceria com o número de nucleões A, e núcleos pesados seriam hiperestáveis sem fissão.",
      "A saturação da força forte é causada pela fricção contínua dos protões contra o invólucro membranar proteico que isola o núcleo atómico dos organelos celulares.",
      "A ausência de saturação nuclear tornaria todos os elementos químicos gasosos à temperatura ambiente, impedindo a formação de compostos orgânicos sólidos no corpo.",
      "A propriedade de saturação aplica-se unicamente a átomos de hélio em estado líquido armazenados em tanques criogénicos pressurizados a cem atmosferas."
    ],
    "correctIndex": 0,
    "explanation": "A análise teórica e experimental confirma que Como resultado, a energia de ligação por nucleão atinge um patamar constante de cerca de 8 MeV por nucleão na maioria dos elementos da tabela periódica. O domínio destes conceitos permite ao enfermeiro compreender as bases da física nuclear hospitalar.",
    "distractorAnalysis": [
      "Está incorreta: sem saturação B/A cresceria linearmente com A; núcleos pesados teriam energia de ligação astronómica e não sofreriam decaimento alfa nem fissão nuclear.",
      "Está incorreta: o núcleo atómico não possui membrana proteica física; a saturação provém do alcance femtométrico e do princípio de exclusão de Pauli a distâncias curtas.",
      "Está incorreta: o estado físico da matéria (sólido, líquido, gás) depende das ligações químicas intermoleculares eletrostáticas e não da saturação da força nuclear interna."
    ],
    "nursingApplication": "Em núcleos muito grandes, a atração forte satura localmente, mas a repulsão elétrica (de alcance infinito) atua entre TODOS os protões, tornando os núcleos superpesados instáveis."
  },
  {
    "id": 6093,
    "topicId": 6,
    "question": "Na física do núcleo atómico e das forças nucleares aplicada ao contexto dos radiofármacos e saúde, em relação a 'mediadores da força forte e os quarks constituintes', qual é a fundamentação científica exata?",
    "options": [
      "A força forte é mediada exclusivamente por fotões de raios X de alta frequência que saltam permanentemente de um protão para outro dentro da cavidade nuclear.",
      "A nível fundamental a força forte atua entre quarks e é mediada por glúons (QCD); a força nuclear entre nucleões é uma força residual mediada por mesões leves (piões).",
      "Os quarks constituintes dos neutrões e protões são atraídos por gravitões de alta energia emitidos pelo centro de massa da Terra durante o dia e a noite.",
      "A força nuclear forte é mediada por eletrões pesados que circulam a velocidades ultrassónicas nos espaços vazios entre os diferentes átomos de radioisótopos."
    ],
    "correctIndex": 1,
    "explanation": "Em física nuclear médica, mediadores da força forte e os quarks constituintes explica-se pelo facto de que ao nível subatómico, a força nuclear forte primordial mantém os quarks unidos dentro dos protões e neutrões através da troca de 'glúons' (Cromodinâmica Quântica). A força residual entre nucleões no núcleo é mediada pela troca de 'mesões' (como os mesões pi ou piões), conforme previsto pelo físico japonês Hideki Yukawa.",
    "distractorAnalysis": [
      "Está incorreta: a Cromodinâmica Quântica (QCD) estabelece a força de cor fundamental entre quarks via 8 glúons; a força que une nucleões no núcleo é a força forte residual via piões.",
      "Está incorreta: os fotões são os mediadores da interação eletromagnética e não da força forte; raios X são radiação eletromagnética emitida em transições eletrónicas ou travamento.",
      "Está incorreta: gravitões são os mediadores hipotéticos da gravidade e não da força nuclear; eletrões são leptões extranucleares que não medeiam a coesão nuclear forte."
    ],
    "nursingApplication": "O conhecimento destas interações fundamentais permite aos profissionais de saúde valorizar a física avançada subjacente à imagiologia molecular e terapia com feixes de protões."
  },
  {
    "id": 6094,
    "topicId": 6,
    "question": "Durante os cuidados de enfermagem e manipulação de radioisótopos hospitalares, como se manifesta na prática clínica o conceito de 'mediadores da força forte e os quarks constituintes'?",
    "options": [
      "A estrutura de quarks dos radioisótopos determina a velocidade de gotejamento das perfusões de quimioterapia administradas através de bombas infusoras no hospital.",
      "Os glúons libertados pelos radiofármacos hospitalares são absorvidos pelas paredes do quarto do doente, dispensando a necessidade de recolha de dejetos radioativos.",
      "O conhecimento das interações de partículas a nível de quarks e mesões fundamenta a física dos feixes de protões e iões pesados na moderna radioterapia (hadronterapia).",
      "A manipulação de radiofármacos pelo enfermeiro altera a composição de quarks do seu próprio organismo se este não ingerir cápsulas de carbono ativado na dieta."
    ],
    "correctIndex": 2,
    "explanation": "A aplicação na enfermagem para mediadores da força forte e os quarks constituintes baseia-se no princípio: O conhecimento destas interações fundamentais permite aos profissionais de saúde valorizar a física avançada subjacente à imagiologia molecular e terapia com feixes de protões. Esta prática garante a segurança radiológica do doente e da equipa.",
    "distractorAnalysis": [
      "Está incorreta: a hadronterapia utiliza protões e iões de carbono acelerados para depositar a dose com extrema precisão no pico de Bragg, fundamentada na física nuclear de hadrões.",
      "Está incorreta: débitos de perfusão em bombas infusoras são regulados eletromecanicamente de acordo com prescrições de concentração química e não por quarks subatómicos.",
      "Está incorreta: glúons nunca existem livres (confinamento de cor); os dejetos de doentes submetidos a radiofármacos mantêm-se radioativos e exigem tratamento rigoroso."
    ],
    "nursingApplication": "O conhecimento destas interações fundamentais permite aos profissionais de saúde valorizar a física avançada subjacente à imagiologia molecular e terapia com feixes de protões."
  },
  {
    "id": 6095,
    "topicId": 6,
    "question": "Um enfermeiro estuda os fundamentos teóricos da estabilidade da matéria e as propriedades físicas em 'mediadores da força forte e os quarks constituintes'. Qual das seguintes afirmações expressa a relação física correta?",
    "options": [
      "O protão é constituído por três quarks 'down' com carga unitária negativa, enquanto o neutrão é composto exclusivamente por fotões virtuais sem massa de repouso.",
      "Tanto o protão como o neutrão são partículas fundamentais pontuais indivisíveis, sem qualquer estrutura interna de quarks ou cargas elétricas subjacentes.",
      "O neutrão é composto por um eletrão comprimido no interior de um protão por ação da pressão hidrostática do sangue circulante nas artérias coronárias.",
      "O protão é formado por dois quarks 'up' e um quark 'down' (uud, carga = +1), enquanto o neutrão é composto por um quark 'up' e dois quarks 'down' (udd, carga = 0)."
    ],
    "correctIndex": 3,
    "explanation": "A análise teórica e experimental confirma que A força residual entre nucleões no núcleo é mediada pela troca de 'mesões' (como os mesões pi ou piões), conforme previsto pelo físico japonês Hideki Yukawa. O domínio destes conceitos permite ao enfermeiro compreender as bases da física nuclear hospitalar.",
    "distractorAnalysis": [
      "Está incorreta: quark 'up' tem carga +2/3 e 'down' tem -1/3; logo protão = uud (+2/3 + 2/3 - 1/3 = +1) e neutrão = udd (+2/3 - 1/3 - 1/3 = 0); no decaimento beta um d vira u ou u vira d.",
      "Está incorreta: três quarks down (ddd) formam a partícula Delta menos (Δ⁻) com carga -1 e não um protão estável.",
      "Está incorreta: nucleões são hadrões compostos por 3 quarks de valência, quarks de mar e glúons; o modelo de neutrão como eletrão dentro do protão foi abandonado nos anos 1930."
    ],
    "nursingApplication": "O conhecimento destas interações fundamentais permite aos profissionais de saúde valorizar a física avançada subjacente à imagiologia molecular e terapia com feixes de protões."
  },
  {
    "id": 6096,
    "topicId": 6,
    "question": "Na física do núcleo atómico e das forças nucleares aplicada ao contexto dos radiofármacos e saúde, em relação a 'razão N/Z para núcleos atómicos leves estáveis (Z ≤ 20)', qual é a fundamentação científica exata?",
    "options": [
      "Para elementos leves (Z ≤ 20), a razão N/Z dos núcleos estáveis é rigorosamente próxima de 1,0 (como ¹²C, ¹⁴N, ¹⁶O), refletindo a simetria da energia de ligação forte.",
      "Para elementos leves, a razão N/Z nos isótopos estáveis tem de ser sempre superior a 3,0 para impedir a condensação da eletrosfera no centro do núcleo atómico.",
      "Elementos leves estáveis não possuem neutrões no núcleo atómico, sendo formados exclusivamente por protões ligados diretamente por forças de atração molecular.",
      "A razão N/Z dos elementos leves varia de acordo com as estações do ano, aumentando no inverno e diminuindo no verão em virtude da radiação solar cósmica."
    ],
    "correctIndex": 0,
    "explanation": "Em física nuclear médica, razão N/Z para núcleos atómicos leves estáveis (Z ≤ 20) explica-se pelo facto de que em elementos leves até ao Cálcio (Z = 20), os núcleos mais estáveis possuem um número de neutrões aproximadamente igual ao número de protões, ou seja, N/Z ≈ 1,0. Exemplos clássicos de estabilidade perfeita incluem o Carbono-12 (6p, 6n), o Azoto-14 (7p, 7n) e o Oxigénio-16 (8p, 8n).",
    "distractorAnalysis": [
      "Está incorreta: em núcleos leves a repulsão de Coulomb é pequena face à energia de simetria (que penaliza N ≠ Z); assim, os estados de menor energia ocorrem para N ≈ Z (N/Z = 1).",
      "Está incorreta: uma razão N/Z de 3 em elementos leves corresponderia a isótopos profundamente fora do vale de estabilidade (ex: Hélio-8), os quais decaem em milissegundos.",
      "Está incorreta: com exceção do Hidrogénio-1 comum (protão simples), todos os núcleos estáveis leves contêm neutrões vitais para a sua coesão nuclear forte."
    ],
    "nursingApplication": "Estes elementos constituem mais de 98% da massa dos tecidos do corpo humano, garantindo a extraordinária estabilidade molecular biológica da vida."
  },
  {
    "id": 6097,
    "topicId": 6,
    "question": "Durante os cuidados de enfermagem e manipulação de radioisótopos hospitalares, como se manifesta na prática clínica o conceito de 'razão N/Z para núcleos atómicos leves estáveis (Z ≤ 20)'?",
    "options": [
      "O facto de N/Z ser próximo de 1 em elementos leves significa que a equipa de enfermagem deve administrar sempre o dobro da dose prescrita pelo médico assistente.",
      "Radioisótopos leves usados em PET (como ¹¹C com N/Z = 5/6 e ¹⁵O com N/Z = 7/8) têm deficiência de neutrões face à estabilidade (N/Z < 1), decaindo por beta mais.",
      "A proximidade de N/Z a 1 torna os radioisótopos leves imunes a qualquer emissão radioativa, comportando-se como substâncias frias sem necessidade de blindagens.",
      "Isótopos leves com N/Z = 1 são instáveis e explodem espontaneamente se forem armazenados em ampolas transparentes de vidro borossilicato sob luz fluorescente."
    ],
    "correctIndex": 1,
    "explanation": "A aplicação na enfermagem para razão N/Z para núcleos atómicos leves estáveis (Z ≤ 20) baseia-se no princípio: Estes elementos constituem mais de 98% da massa dos tecidos do corpo humano, garantindo a extraordinária estabilidade molecular biológica da vida. Esta prática garante a segurança radiológica do doente e da equipa.",
    "distractorAnalysis": [
      "Está incorreta: nuclídeos como ¹¹C (Z=6, N=5), ¹³N (Z=7, N=6), ¹⁵O (Z=8, N=7) e ¹⁸F (Z=9, N=9) têm N < Z ou N/Z < 1, pelo que decaem por β⁺ para restabelecer N/Z favorável.",
      "Está incorreta: doses de radiofármacos são calculadas rigorosamente por atividade em MBq com base no peso e protocolo de exame, nunca dobradas por razões nucleares teóricas.",
      "Está incorreta: nuclídeos com N/Z fora da estabilidade emitem radiação ionizante e exigem protocolos rigorosos de radioproteção e blindagem durante o manuseamento."
    ],
    "nursingApplication": "Estes elementos constituem mais de 98% da massa dos tecidos do corpo humano, garantindo a extraordinária estabilidade molecular biológica da vida."
  },
  {
    "id": 6098,
    "topicId": 6,
    "question": "Um enfermeiro estuda os fundamentos teóricos da estabilidade da matéria e as propriedades físicas em 'razão N/Z para núcleos atómicos leves estáveis (Z ≤ 20)'. Qual das seguintes afirmações expressa a relação física correta?",
    "options": [
      "O termo de assimetria nuclear atinge o seu valor máximo positivo quando o núcleo atómico contém exclusivamente protões sem a presença de qualquer neutrão ligado.",
      "A estabilidade de núcleos com N = Z para Z ≤ 20 decorre da atração gravitacional entre as massas dos eletrões orbitais e o centro geométrico do volume nuclear.",
      "O termo de assimetria na fórmula de Weizsäcker (-a_A · (A - 2Z)²/A) atinge o valor mínimo nulo quando N = Z, tornando os núcleos leves com N = Z energeticamente mais favoráveis.",
      "A relação N = Z nos núcleos leves é uma anomalia temporária provocada pela presença de campos eletromagnéticos artificiais gerados por linhas de alta tensão nas cidades."
    ],
    "correctIndex": 2,
    "explanation": "A análise teórica e experimental confirma que Exemplos clássicos de estabilidade perfeita incluem o Carbono-12 (6p, 6n), o Azoto-14 (7p, 7n) e o Oxigénio-16 (8p, 8n). O domínio destes conceitos permite ao enfermeiro compreender as bases da física nuclear hospitalar.",
    "distractorAnalysis": [
      "Está incorreta: o princípio de Pauli obriga protões e neutrões a preencher níveis de energia independentes; desequilíbrios (N ≠ Z) elevam os nucleões para níveis mais altos, penalizando a ligação.",
      "Está incorreta: um núcleo só de protões (como ²He) é altamente desestabilizado pelo termo de assimetria e pela repulsão de Coulomb, sendo não-ligado na natureza.",
      "Está incorreta: as forças gravitacionais são 10³⁸ vezes mais fracas e irrelevantes; N ≈ Z nos núcleos leves é consequência direta da mecânica quântica e do princípio de Pauli."
    ],
    "nursingApplication": "Estes elementos constituem mais de 98% da massa dos tecidos do corpo humano, garantindo a extraordinária estabilidade molecular biológica da vida."
  },
  {
    "id": 6099,
    "topicId": 6,
    "question": "Na física do núcleo atómico e das forças nucleares aplicada ao contexto dos radiofármacos e saúde, em relação a 'desvio da razão N/Z para elementos pesados estáveis (Z > 20)', qual é a fundamentação científica exata?",
    "options": [
      "Para elementos com Z > 20, a razão N/Z diminui para valores inferiores a 0,5 porque os protões pesados convertem-se espontaneamente em eletrões livres de condução.",
      "O desvio de N/Z em núcleos pesados ocorre devido à atração electrostática exercida pelos neutrões sobre os eletrões orbitais das camadas K e L do átomo.",
      "Em elementos pesados estáveis, o número de protões excede sempre o número de neutrões em pelo menos cinquenta unidades na tabela periódica dos elementos químicos.",
      "À medida que Z cresce além de 20, a repulsão eletrostática entre protões (∝ Z²) exige um número desproporcionalmente maior de neutrões para manter o núcleo coeso (N/Z atinge ~1,5)."
    ],
    "correctIndex": 3,
    "explanation": "Em física nuclear médica, desvio da razão N/Z para elementos pesados estáveis (Z > 20) explica-se pelo facto de que à medida que Z aumenta, a repulsão eletrostática coulombiana cresce muito mais depressa do que a atração nuclear; para compensar, o núcleo necessita de uma proporção crescente de neutrões. Nos elementos pesados estáveis (como o Chumbo-208, com 82p e 126n), a razão N/Z sobe gradualmente para cerca de 1,5 a 1,54.",
    "distractorAnalysis": [
      "Está incorreta: a repulsão de Coulomb de longo alcance cresce como Z(Z-1); para compensar, neutrões adicionais fornecem atração forte a curto alcance sem repulsão elétrica extra, elevando N/Z.",
      "Está incorreta: N/Z nunca desce abaixo de 0,5 em núcleos reais; pelo contrário, sobe continuamente de 1,0 (no Cálcio-40) até 1,54 (no Chumbo-208 estável).",
      "Está incorreta: neutrões têm carga elétrica nula e não atraem eletrões por forças de Coulomb; em núcleos pesados N é sempre significativamente superior a Z (N > Z)."
    ],
    "nursingApplication": "Qualquer núcleo que se afaste desta linha ideal ('vale de estabilidade') torna-se radioativo e procura regressar ao vale através de decaimentos nucleares espontâneos."
  },
  {
    "id": 6100,
    "topicId": 6,
    "question": "Durante os cuidados de enfermagem e manipulação de radioisótopos hospitalares, como se manifesta na prática clínica o conceito de 'desvio da razão N/Z para elementos pesados estáveis (Z > 20)'?",
    "options": [
      "A elevada razão N/Z de núcleos pesados faz com que fragmentos de fissão de urânio (como Mo-99 e I-131) nasçam com excesso de neutrões, decaindo por emissão beta menos.",
      "O desvio de N/Z em elementos pesados permite utilizar frascos de plástico comuns sem qualquer tampa de borracha para armazenar iodo-131 na farmácia hospitalar.",
      "Essa propriedade nuclear faz com que os doentes submetidos a radioterapia necessitem de ingerir comprimidos de chumbo metálico para absorver neutrões livres no estômago.",
      "O desvio de N/Z obriga a equipa cirúrgica a suspender a anestesia geral em todos os doentes que tenham realizado cintigrafias ósseas nas últimas vinte e quatro horas."
    ],
    "correctIndex": 0,
    "explanation": "A aplicação na enfermagem para desvio da razão N/Z para elementos pesados estáveis (Z > 20) baseia-se no princípio: Qualquer núcleo que se afaste desta linha ideal ('vale de estabilidade') torna-se radioativo e procura regressar ao vale através de decaimentos nucleares espontâneos. Esta prática garante a segurança radiológica do doente e da equipa.",
    "distractorAnalysis": [
      "Está incorreta: os fragmentos de fissão herdam a alta razão N/Z (~1,55) do urânio, ficando muito acima da linha de estabilidade de núcleos médios (N/Z ~1,3), tornando-se emissores β⁻.",
      "Está incorreta: I-131 é radioativo e volátil; a sua manipulação exige contentores blindados de chumbo e tampas herméticas em hottes com filtros de carvão ativado dedicadas.",
      "Está incorreta: chumbo é um metal pesado altamente nefrotóxico e neurotóxico, absolutamente contraindicado para ingestão humana; blindagens são sempre externas."
    ],
    "nursingApplication": "Qualquer núcleo que se afaste desta linha ideal ('vale de estabilidade') torna-se radioativo e procura regressar ao vale através de decaimentos nucleares espontâneos."
  },
  {
    "id": 6101,
    "topicId": 6,
    "question": "Um enfermeiro estuda os fundamentos teóricos da estabilidade da matéria e as propriedades físicas em 'desvio da razão N/Z para elementos pesados estáveis (Z > 20)'. Qual das seguintes afirmações expressa a relação física correta?",
    "options": [
      "O desvio de N/Z em elementos pesados deve-se ao facto de a força nuclear forte se transformar espontaneamente em atração magnética quando o número de protões ultrapassa dez.",
      "A repulsão coulombiana acumulada entre protões obriga a que os elementos estáveis pesados tenham razão N/Z progressivamente maior, atingindo cerca de 1,54 no Chumbo-208.",
      "Em elementos pesados estáveis, o número de neutrões N é estritamente menor do que o número atómico Z porque os neutrões pesados decaem em protões em escassos segundos.",
      "O desvio na razão N/Z é provocado pela contração do volume dos eletrões periféricos sob o efeito da gravitação exercida pelo equipamento hospitalar da sala de exames."
    ],
    "correctIndex": 1,
    "explanation": "A análise teórica e experimental confirma que Nos elementos pesados estáveis (como o Chumbo-208, com 82p e 126n), a razão N/Z sobe gradualmente para cerca de 1,5 a 1,54. O domínio destes conceitos permite ao enfermeiro compreender as bases da física nuclear hospitalar.",
    "distractorAnalysis": [
      "Está incorreta: como a repulsão de Coulomb atua entre todos os pares de protões (∝ Z²), a estabilidade de núcleos pesados exige um excesso substancial de neutrões (N/Z ~1,5).",
      "Está incorreta: a força nuclear forte permanece uma interação nuclear quântica a curto alcance; não se transforma em atração magnética com o aumento de Z.",
      "Está incorreta: em núcleos pesados N excede sempre Z (ex: ²⁰⁸Pb tem N = 126 e Z = 82); se N fosse menor que Z a repulsão eletrostática provocaria fissão imediata."
    ],
    "nursingApplication": "Qualquer núcleo que se afaste desta linha ideal ('vale de estabilidade') torna-se radioativo e procura regressar ao vale através de decaimentos nucleares espontâneos."
  },
  {
    "id": 6102,
    "topicId": 6,
    "question": "Na física do núcleo atómico e das forças nucleares aplicada ao contexto dos radiofármacos e saúde, em relação a 'decaimento de núcleos com excesso de neutrões (acima da faixa de estabilidade)', qual é a fundamentação científica exata?",
    "options": [
      "Núcleos ricos em neutrões decaem libertando exclusivamente protões livres de alta energia sem qualquer emissão de eletrões ou partículas subatómicas neutras associadas.",
      "O excesso de neutrões é corrigido pela contração mecânica do volume nuclear, forçando os neutrões excedentes a evaporarem sob a forma de moléculas de água ionizada.",
      "Núcleos com excesso de neutrões (acima da faixa de estabilidade) decaem por emissão beta menos (β⁻), transmutando um neutrão num protão, um eletrão e um antineutrino.",
      "Núcleos acima da linha de estabilidade decaem unicamente por captura de eletrões da camada K acompanhada pela emissão de fotões térmicos infravermelhos de baixa frequência."
    ],
    "correctIndex": 2,
    "explanation": "Em física nuclear médica, decaimento de núcleos com excesso de neutrões (acima da faixa de estabilidade) explica-se pelo facto de que núcleos situados acima da faixa de estabilidade possuem neutrões a mais em relação ao número de protões. Decaem preferencialmente por emissão Beta Menos (β⁻), onde um neutrão em excesso converte-se num protão, ejetando um eletrão e um antineutrino ($n \\rightarrow p + \\beta^- + \bar{\nu}_e$), fazendo Z subir e aproximando o núcleo da estabilidade.",
    "distractorAnalysis": [
      "Está incorreta: no decaimento beta menos (β⁻), mediado pela força fraca, um quark down converte-se em up: n -> p + e⁻ + ν̄_e; o número atómico Z aumenta em uma unidade.",
      "Está incorreta: a emissão de protões livres raramente ocorre e apenas em núcleos extremamente deficientes em neutrões ('proton drip line'), nunca em núcleos com excesso de neutrões.",
      "Está incorreta: neutrões não evaporam como névoa de água; a estabilização nuclear ocorre por processos quânticos de transmutação radioativa com emissão de radiação."
    ],
    "nursingApplication": "O Iodo-131 e o Césio-137 são produtos típicos de fissão com excesso de neutrões que decaem por emissão β⁻ utilizada no tratamento do cancro da tiroide."
  },
  {
    "id": 6103,
    "topicId": 6,
    "question": "Durante os cuidados de enfermagem e manipulação de radioisótopos hospitalares, como se manifesta na prática clínica o conceito de 'decaimento de núcleos com excesso de neutrões (acima da faixa de estabilidade)'?",
    "options": [
      "Os emissores beta menos são usados em diagnóstico por ressonância magnética porque os eletrões emitidos aceleram as lâmpadas da sala de observação do piso clínico.",
      "O decaimento beta menos exige que o enfermeiro aplique gelo medicinal sobre o local da injeção para neutralizar a carga elétrica negativa dos eletrões libertados.",
      "A emissão de eletrões pelo radiofármaco obriga o doente a permanecer imóvel numa gaiola metálica para não eletrocutar os monitores de sinais vitais circundantes.",
      "Os emissores beta menos (como ¹³¹I, ¹⁷⁷Lu e ⁹⁰Y) são utilizados em terapia metabólica porque os eletrões rápidos depositam dose ionizante letal a curto alcance nos tumores."
    ],
    "correctIndex": 3,
    "explanation": "A aplicação na enfermagem para decaimento de núcleos com excesso de neutrões (acima da faixa de estabilidade) baseia-se no princípio: O Iodo-131 e o Césio-137 são produtos típicos de fissão com excesso de neutrões que decaem por emissão β⁻ utilizada no tratamento do cancro da tiroide. Esta prática garante a segurança radiológica do doente e da equipa.",
    "distractorAnalysis": [
      "Está incorreta: os eletrões beta menos têm alcance milimétrico em tecidos (1 a 10 mm), depositando energia localizada ideal para destruir células tumorais em terapêutica oncológica.",
      "Está incorreta: a ressonância magnética não utiliza radiação ionizante nem emissores beta; a radiação beta é usada em terapia e não para iluminar salas hospitalares.",
      "Está incorreta: a carga dos eletrões beta é neutralizada a nível atómico nos tecidos biológicos por iões locais sem risco de choque elétrico ou necessidade de gelo tópico."
    ],
    "nursingApplication": "O Iodo-131 e o Césio-137 são produtos típicos de fissão com excesso de neutrões que decaem por emissão β⁻ utilizada no tratamento do cancro da tiroide."
  },
  {
    "id": 6104,
    "topicId": 6,
    "question": "Um enfermeiro estuda os fundamentos teóricos da estabilidade da matéria e as propriedades físicas em 'decaimento de núcleos com excesso de neutrões (acima da faixa de estabilidade)'. Qual das seguintes afirmações expressa a relação física correta?",
    "options": [
      "Na transmutação beta menos, o número de massa A permanece constante (isóbaros) enquanto o número atómico aumenta em uma unidade (Z -> Z + 1, como ¹³¹₅₃I -> ¹³¹₅₄Xe + e⁻ + ν̄_e).",
      "Na emissão beta menos, tanto o número de massa como o número atómico diminuem obrigatoriamente para metade em virtude da conversão de matéria em fotões visíveis.",
      "A energia libertada no decaimento beta menos manifesta-se sob a forma de um espetro de riscas discretas e monoenergéticas com valor fixo para todos os eletrões.",
      "O decaimento beta menos viola a lei de conservação da carga elétrica total porque cria um eletrão negativo sem originar qualquer partícula positiva de compensação."
    ],
    "correctIndex": 0,
    "explanation": "A análise teórica e experimental confirma que Decaem preferencialmente por emissão Beta Menos (β⁻), onde um neutrão em excesso converte-se num protão, ejetando um eletrão e um antineutrino ($n \\rightarrow p + \\beta^- + \bar{\nu}_e$), fazendo Z subir e aproximando o núcleo da estabilidade. O domínio destes conceitos permite ao enfermeiro compreender as bases da física nuclear hospitalar.",
    "distractorAnalysis": [
      "Está incorreta: o decaimento beta é isobárico (A constante); como um neutrão neutro se converte em protão positivo e eletrão negativo, a carga conserva-se e Z passa a Z+1.",
      "Está incorreta: a massa total e a energia conservam-se rigorosamente; o espetro de energia dos eletrões beta é contínuo devido à partilha tridimensional com o antineutrino.",
      "Está incorreta: a conservação da carga é estrita: a carga inicial do neutrão (0) iguala a carga final do protão (+1) mais a do eletrão (-1) mais a do antineutrino (0)."
    ],
    "nursingApplication": "O Iodo-131 e o Césio-137 são produtos típicos de fissão com excesso de neutrões que decaem por emissão β⁻ utilizada no tratamento do cancro da tiroide."
  },
  {
    "id": 6105,
    "topicId": 6,
    "question": "Na física do núcleo atómico e das forças nucleares aplicada ao contexto dos radiofármacos e saúde, em relação a 'decaimento de núcleos com excesso de protões (abaixo da faixa de estabilidade)', qual é a fundamentação científica exata?",
    "options": [
      "Núcleos deficientes em neutrões decaem exclusivamente através da emissão contínua de feixes de fotões de luz verde que iluminam o citoplasma celular adjacente.",
      "Núcleos com excesso de protões decaem por emissão beta mais (β⁺) ou por Captura Eletrónica (CE), transformando um protão num neutrão e reduzindo o número atómico (Z -> Z - 1).",
      "O excesso de protões faz com que o núcleo atómico absorva instantaneamente dez neutrões a partir dos átomos de azoto dissolvidos no ar ambiente hospitalar.",
      "No decaimento de núcleos ricos em protões, o número de massa A diminui sempre em quatro unidades por fragmentação explosiva de nucleões periféricos da periferia."
    ],
    "correctIndex": 1,
    "explanation": "Em física nuclear médica, decaimento de núcleos com excesso de protões (abaixo da faixa de estabilidade) explica-se pelo facto de que núcleos localizados abaixo da faixa de estabilidade possuem protões a mais em relação aos neutrões. Decaem por emissão Beta Mais (β⁺, ejetando um positrão) ou por Captura Eletrónica (CE, capturando um eletrão da camada K), convertendo um protão num neutrão e fazendo Z descer uma unidade.",
    "distractorAnalysis": [
      "Está incorreta: núcleos abaixo da faixa de estabilidade estabilizam-se convertendo p -> n: via β⁺ (p -> n + e⁺ + ν_e) ou via CE (p + e⁻_orbital -> n + ν_e), ambos com Z -> Z-1.",
      "Está incorreta: a desexcitação ou transmutação não emite luz visível verde; emite positrões, neutrinos e fotões de aniquilação gama de alta energia (511 keV).",
      "Está incorreta: núcleos não capturam neutrões do ar à temperatura ambiente; a diminuição de A em quatro unidades é a assinatura do decaimento alfa e não de beta mais/CE."
    ],
    "nursingApplication": "O Flúor-18 (¹⁸F, 9p e 9n, N/Z = 1,0 quando o oxigénio estável requer N/Z maior) decai por β⁺ com semivida de 110 minutos para Oxigénio-18 estável."
  },
  {
    "id": 6106,
    "topicId": 6,
    "question": "Durante os cuidados de enfermagem e manipulação de radioisótopos hospitalares, como se manifesta na prática clínica o conceito de 'decaimento de núcleos com excesso de protões (abaixo da faixa de estabilidade)'?",
    "options": [
      "Os radiofármacos emissores de positrões devem ser guardados em caixas de cartão simples sem chumbo porque os positrões não conseguem atravessar películas de papel.",
      "A injeção de emissores beta mais provoca a magnetização transitória do sangue do doente, obrigando a retirar próteses dentárias de ouro antes de qualquer exame.",
      "Os radionuclídeos emissores de positrões (como ¹⁸F, ¹¹C e ⁶⁸Ga) são essenciais na tomografia PET para diagnóstico metabólico e estadiamento oncológico em tempo real.",
      "Os doentes que recebem emissores de positrões devem ser submetidos a lavagem gástrica com carvão ativado após duas horas de repouso na sala de preparação."
    ],
    "correctIndex": 2,
    "explanation": "A aplicação na enfermagem para decaimento de núcleos com excesso de protões (abaixo da faixa de estabilidade) baseia-se no princípio: O Flúor-18 (¹⁸F, 9p e 9n, N/Z = 1,0 quando o oxigénio estável requer N/Z maior) decai por β⁺ com semivida de 110 minutos para Oxigénio-18 estável. Esta prática garante a segurança radiológica do doente e da equipa.",
    "distractorAnalysis": [
      "Está incorreta: a tomografia por emissão de positrões (PET) deteta em coincidência os dois fotões de 511 keV gerados pela aniquilação do positrão com um eletrão tecidual.",
      "Está incorreta: os fotões de aniquilação de 511 keV são altamente penetrantes e exigem blindagens pesadas de tungsténio ou chumbo em seringas e contentores.",
      "Está incorreta: os radiofármacos PET não magnetizam o sangue nem interagem com ouro biocompatível; lavagens gástricas não removem radiofármacos distribuídos por via venosa."
    ],
    "nursingApplication": "O Flúor-18 (¹⁸F, 9p e 9n, N/Z = 1,0 quando o oxigénio estável requer N/Z maior) decai por β⁺ com semivida de 110 minutos para Oxigénio-18 estável."
  },
  {
    "id": 6107,
    "topicId": 6,
    "question": "Um enfermeiro estuda os fundamentos teóricos da estabilidade da matéria e as propriedades físicas em 'decaimento de núcleos com excesso de protões (abaixo da faixa de estabilidade)'. Qual das seguintes afirmações expressa a relação física correta?",
    "options": [
      "A Captura Eletrónica ocorre exclusivamente em átomos gasosos a temperaturas muito elevadas, sendo impossível de se verificar na matéria condensada hospitalar.",
      "No processo de Captura Eletrónica, o eletrão capturado pelo núcleo atómico é repelido com velocidade superior à da luz no vácuo em direção à córnea do utente.",
      "A Captura Eletrónica resulta obrigatoriamente no aumento do número de massa A do elemento filho em virtude da absorção física do eletrão no volume do núcleo.",
      "A Captura Eletrónica compete com o decaimento β⁺, sendo o único processo energeticamente permitido quando a diferença de massa atómica é inferior a 1,022 MeV (2 m_e·c²)."
    ],
    "correctIndex": 3,
    "explanation": "A análise teórica e experimental confirma que Decaem por emissão Beta Mais (β⁺, ejetando um positrão) ou por Captura Eletrónica (CE, capturando um eletrão da camada K), convertendo um protão num neutrão e fazendo Z descer uma unidade. O domínio destes conceitos permite ao enfermeiro compreender as bases da física nuclear hospitalar.",
    "distractorAnalysis": [
      "Está incorreta: a emissão β⁺ requer Q > 1,022 MeV; para Q < 1,022 MeV apenas a CE é possível (ex: ⁵⁷Co, ¹²⁵I), onde um eletrão da camada K é capturado com emissão de um neutrino monoenergético.",
      "Está incorreta: a CE é um modo comum de decaimento em radionuclídeos médios e pesados em soluções líquidas ou sólidos comuns (ex: Cr-51, Ga-67, In-111, I-123).",
      "Está incorreta: o eletrão capturado desaparece na reação p + e⁻ -> n + ν_e; a vacância orbital origina raios X característicos e eletrões Auger; nada viaja acima de c."
    ],
    "nursingApplication": "O Flúor-18 (¹⁸F, 9p e 9n, N/Z = 1,0 quando o oxigénio estável requer N/Z maior) decai por β⁺ com semivida de 110 minutos para Oxigénio-18 estável."
  },
  {
    "id": 6108,
    "topicId": 6,
    "question": "Na física do núcleo atómico e das forças nucleares aplicada ao contexto dos radiofármacos e saúde, em relação a 'decaimento de núcleos pesados com excesso global de nucleões (Z > 83)', qual é a fundamentação científica exata?",
    "options": [
      "Todos os núcleos com número atómico Z > 83 (acima do Bismuto) são intrinsecamente instáveis, sofrendo predominantemente decaimento alfa e fissão espontânea por repulsão eletrostática.",
      "Elementos com Z > 83 são completamente estáveis contra qualquer tipo de decaimento radioativo desde que se encontrem sob temperaturas inferiores a vinte graus Celsius.",
      "O excesso de nucleões em núcleos muito pesados é resolvido pela perda contínua de gravidade quântica, permitindo ao átomo flutuar livremente na atmosfera ambiente.",
      "A instabilidade em elementos pesados deve-se à atração magnética exercida pelo manto terrestre sobre os eletrões das camadas mais exteriores da eletrosfera atómica."
    ],
    "correctIndex": 0,
    "explanation": "Em física nuclear médica, decaimento de núcleos pesados com excesso global de nucleões (Z > 83) explica-se pelo facto de que núcleos gigantescos com excesso absoluto de nucleões e massa total elevada não conseguem atingir a estabilidade apenas por decaimentos beta. Aliviam a sua massa e carga expelindo blocos compactos de 2 protões e 2 neutrões sob a forma de partículas Alfa (núcleos de Hélio-4, ⁴He²⁺), reduzindo Z em 2 e A em 4 unidades.",
    "distractorAnalysis": [
      "Está incorreta: o Bismuto-209 é o último nuclídeo quase estável; para Z > 83 a repulsão de Coulomb supera a força forte a longo alcance, forçando a emissão de partículas alfa (He-4) ou fissão.",
      "Está incorreta: não existem núcleos estáveis acima de Z = 83; a sua semivida independe da temperatura e a instabilidade é uma propriedade intrínseca da mecânica quântica nuclear.",
      "Está incorreta: a gravidade é totalmente desprezável em física nuclear; a instabilidade decorre do balanço desfavorável entre a força nuclear forte e a repulsão coulombiana."
    ],
    "nursingApplication": "O Rádio-223 é um emissor alfa utilizado na enfermagem oncológica para tratar metástases ósseas dolorosas em cancro da próstata resistente à castração."
  },
  {
    "id": 6109,
    "topicId": 6,
    "question": "Durante os cuidados de enfermagem e manipulação de radioisótopos hospitalares, como se manifesta na prática clínica o conceito de 'decaimento de núcleos pesados com excesso global de nucleões (Z > 83)'?",
    "options": [
      "Os emissores alfa administrados no hospital devem ser aspirados com seringas de vidro comum sem proteção porque as partículas alfa atravessam facilmente paredes de chumbo.",
      "A alfa-imunoterapia utiliza emissores alfa pesados (como ²²³Ra e ²²⁵Ac) conjugados com vetores moleculares para induzir quebras duplas de ADN irreparáveis nas células neoplásicas.",
      "O enfermeiro deve orientar o doente que recebeu emissor alfa a evitar o consumo de sal iodado para não aumentar a radioatividade na glândula tiróide durante o internamento.",
      "O decaimento alfa de radiofármacos pesados neutraliza as bactérias da flora intestinal do doente, dispensando a necessidade de administração de antibióticos orais."
    ],
    "correctIndex": 1,
    "explanation": "A aplicação na enfermagem para decaimento de núcleos pesados com excesso global de nucleões (Z > 83) baseia-se no princípio: O Rádio-223 é um emissor alfa utilizado na enfermagem oncológica para tratar metástases ósseas dolorosas em cancro da próstata resistente à castração. Esta prática garante a segurança radiológica do doente e da equipa.",
    "distractorAnalysis": [
      "Está incorreta: partículas alfa (He-4) têm altíssima transferência linear de energia (~100 keV/µm) e curto alcance tecidual (<100 µm), destruindo seletivamente células tumorais com alta eficácia.",
      "Está incorreta: embora as alfas sejam barradas por uma folha de papel ou plástico, fontes alfa emitem frequentemente gamas e raios X secundários que exigem blindagem plumbífera.",
      "Está incorreta: sal iodado bloqueia a tiróide contra radioisótopos de iodo e não contra emissores alfa como rádio ou actínio; a terapia alfa não elimina a necessidade de antibióticos."
    ],
    "nursingApplication": "O Rádio-223 é um emissor alfa utilizado na enfermagem oncológica para tratar metástases ósseas dolorosas em cancro da próstata resistente à castração."
  },
  {
    "id": 6110,
    "topicId": 6,
    "question": "Um enfermeiro estuda os fundamentos teóricos da estabilidade da matéria e as propriedades físicas em 'decaimento de núcleos pesados com excesso global de nucleões (Z > 83)'. Qual das seguintes afirmações expressa a relação física correta?",
    "options": [
      "No decaimento alfa, o núcleo pesado ejeta apenas neutrões individuais isolados, mantendo rigorosamente inalterado o seu número atómico original na tabela periódica.",
      "A partícula alfa emitida por núcleos pesados é composta por quatro protões ligados sem a presença de neutrões, apresentando carga elétrica quadruplicada (+4).",
      "No decaimento alfa de um núcleo pesado (A, Z), são ejetados dois protões e dois neutrões coligados (⁴₂He), diminuindo o número de massa em 4 e o atómico em 2 (A-4, Z-2).",
      "A emissão alfa é acompanhada pela desaparição definitiva de cinquenta por cento dos eletrões orbitais do átomo pai no vácuo interatómico intersticial tecidual."
    ],
    "correctIndex": 2,
    "explanation": "A análise teórica e experimental confirma que Aliviam a sua massa e carga expelindo blocos compactos de 2 protões e 2 neutrões sob a forma de partículas Alfa (núcleos de Hélio-4, ⁴He²⁺), reduzindo Z em 2 e A em 4 unidades. O domínio destes conceitos permite ao enfermeiro compreender as bases da física nuclear hospitalar.",
    "distractorAnalysis": [
      "Está incorreta: a partícula alfa é um núcleo de Hélio-4 (dois protões e dois neutrões com carga +2); a reação é ^A_Z X -> ^(A-4)_(Z-2) Y + ⁴₂He; conservam-se nucleões e carga.",
      "Está incorreta: a emissão de partícula alfa altera profundamente a identidade química do elemento porque reduz o número de protões Z em duas unidades.",
      "Está incorreta: o núcleo de He-4 contém dois protões e dois neutrões (altamente ligado com B ≈ 28,3 MeV); não existem partículas alfa formadas exclusivamente por quatro protões."
    ],
    "nursingApplication": "O Rádio-223 é um emissor alfa utilizado na enfermagem oncológica para tratar metástases ósseas dolorosas em cancro da próstata resistente à castração."
  },
  {
    "id": 6111,
    "topicId": 6,
    "question": "Na física do núcleo atómico e das forças nucleares aplicada ao contexto dos radiofármacos e saúde, em relação a 'conceito de Defeito de Massa (Δm)', qual é a fundamentação científica exata?",
    "options": [
      "O Defeito de Massa representa a quantidade de líquido biológico que se evapora quando uma solução de radiofármaco é aquecida em banho-maria no laboratório.",
      "O Defeito de Massa define o erro percentual cometido pelos enfermeiros na pesagem do doente durante a admissão hospitalar na enfermaria de endocrinologia.",
      "O Defeito de Massa é a perda de massa experimentada pelos contentores de chumbo após vinte anos de armazenamento contínuo de radionuclídeos em bancada seca.",
      "O Defeito de Massa (Δm = Z·m_p + N·m_n - M_núcleo) é a diferença entre a soma das massas dos nucleões isolados e a massa real do núcleo ligado, equivalente à energia de ligação."
    ],
    "correctIndex": 3,
    "explanation": "Em física nuclear médica, conceito de Defeito de Massa (Δm) explica-se pelo facto de que a massa real em repouso de qualquer núcleo atómico estável ligado é sempre rigorosamente INFERIOR à soma das massas individuais de todos os seus protões e neutrões livres constituintes. A diferença matemática $\\Delta m = [Z \\cdot m_p + (A - Z) \\cdot m_n] - M_{núcleo}$ é denominada Defeito de Massa.",
    "distractorAnalysis": [
      "Está incorreta: quando os nucleões se unem para formar um núcleo estável, é libertada a energia de ligação nuclear B; pela relatividade restrita, a massa do sistema diminui por Δm = B/c².",
      "Está incorreta: o defeito de massa é uma grandeza da física nuclear fundamental em escala subatómica e não evaporação de solvente líquido ou perda ponderal macroscópica.",
      "Está incorreta: não se relaciona com erros de balanças antropométricas de enfermagem ou degradação mecânica de blindagens de chumbo na radiofarmácia."
    ],
    "nursingApplication": "Esta massa 'desaparecida' não se aniquilou no nada: foi convertida em energia pura durante a formação do núcleo, de acordo com a teoria da relatividade."
  },
  {
    "id": 6112,
    "topicId": 6,
    "question": "Durante os cuidados de enfermagem e manipulação de radioisótopos hospitalares, como se manifesta na prática clínica o conceito de 'conceito de Defeito de Massa (Δm)'?",
    "options": [
      "O defeito de massa explica a origem das energias colossais (na ordem dos MeV) libertadas nas reações nucleares utilizadas para produzir radiofármacos hospitalares.",
      "O defeito de massa dita que as doses de radiofármacos injetadas diminuam o peso corporal do doente em vários quilos imediatamente após a administração endovenosa.",
      "Essa propriedade física permite aos profissionais de saúde descartar agulhas e seringas usadas no lixo doméstico indiferenciado sem risco de contaminação.",
      "O defeito de massa faz com que as soluções radioativas se tornem visíveis sob a forma de cristais brilhantes quando expostas à luz fluorescente do quarto."
    ],
    "correctIndex": 0,
    "explanation": "A aplicação na enfermagem para conceito de Defeito de Massa (Δm) baseia-se no princípio: Esta massa 'desaparecida' não se aniquilou no nada: foi convertida em energia pura durante a formação do núcleo, de acordo com a teoria da relatividade. Esta prática garante a segurança radiológica do doente e da equipa.",
    "distractorAnalysis": [
      "Está incorreta: a conversão do defeito de massa em energia através de E = Δm·c² gera a energia das partículas e fotões usados em imagiologia e radioterapia hospitalar.",
      "Está incorreta: o defeito de massa numa dose diagnóstica de radiofármaco corresponde a picogramas de matéria, sendo totalmente indetetável numa balança humana macroscópica.",
      "Está incorreta: agulhas e seringas com resíduos radioativos são resíduos perigosos e exigem contentores para cortoperfurantes e decaimento em instalações dedicadas."
    ],
    "nursingApplication": "Esta massa 'desaparecida' não se aniquilou no nada: foi convertida em energia pura durante a formação do núcleo, de acordo com a teoria da relatividade."
  },
  {
    "id": 6113,
    "topicId": 6,
    "question": "Um enfermeiro estuda os fundamentos teóricos da estabilidade da matéria e as propriedades físicas em 'conceito de Defeito de Massa (Δm)'. Qual das seguintes afirmações expressa a relação física correta?",
    "options": [
      "A massa do núcleo atómico é sempre rigorosamente superior à soma dos seus nucleões livres em virtude da pressão eletrostática gerada pelos eletrões periféricos.",
      "A massa real de qualquer núcleo atómico estável é sempre estritamente inferior à soma das massas individuais dos protões e neutrões livres que o constituem isoladamente.",
      "O defeito de massa atinge o valor zero em todos os isótopos conhecidos porque a massa total da matéria no universo é estritamente invariante em qualquer processo.",
      "A grandeza Δm pode assumir valores negativos em núcleos estáveis, demonstrando que a sua formação absorve energia térmica contínua do meio aquoso biológico."
    ],
    "correctIndex": 1,
    "explanation": "A análise teórica e experimental confirma que A diferença matemática $\\Delta m = [Z \\cdot m_p + (A - Z) \\cdot m_n] - M_{núcleo}$ é denominada Defeito de Massa. O domínio destes conceitos permite ao enfermeiro compreender as bases da física nuclear hospitalar.",
    "distractorAnalysis": [
      "Está incorreta: a formação de um estado ligado requer libertação de energia (poço de potencial negativo); portanto M_núcleo < Σ m_nucleões livres, gerando Δm > 0.",
      "Está incorreta: a massa do núcleo ligado é menor e não maior; se fosse maior, o núcleo cindir-se-ia espontaneamente nos seus constituintes livres.",
      "Está incorreta: na física relativista nuclear a massa converte-se em energia e vice-versa; Δm > 0 para todos os sistemas ligados da física subatómica."
    ],
    "nursingApplication": "Esta massa 'desaparecida' não se aniquilou no nada: foi convertida em energia pura durante a formação do núcleo, de acordo com a teoria da relatividade."
  },
  {
    "id": 6114,
    "topicId": 6,
    "question": "Na física do núcleo atómico e das forças nucleares aplicada ao contexto dos radiofármacos e saúde, em relação a 'equação de equivalência massa-energia de Einstein (E = Δm · c²)', qual é a fundamentação científica exata?",
    "options": [
      "A fórmula E = mc² indica que qualquer corpo em repouso perde metade da sua massa a cada segundo se for exposto a correntes de ar na sala de triagem hospitalar.",
      "A equação de Einstein dita que a energia das reações nucleares depende da viscosidade hidrodinâmica do sangue venoso e do calibre do cateter periférico utilizado.",
      "A equação de Einstein estabelece que a massa é uma forma condensada de energia, onde uma variação de massa Δm liberta ou absorve uma energia E = Δm · c² nas reações nucleares.",
      "A relação E = mc² comprova que a velocidade dos fotões gama emitidos em medicina nuclear aumenta proporcionalmente com a dose em milisieverts prescrita ao utente."
    ],
    "correctIndex": 2,
    "explanation": "Em física nuclear médica, equação de equivalência massa-energia de Einstein (E = Δm · c²) explica-se pelo facto de que a energia e a massa são manifestações equivalentes da mesma grandeza física fundamental, relacionadas pela constante c² (onde c ≈ 3 · 10⁸ m/s, sendo c² ≈ 9 · 10¹⁶ m²/s²). Mesmo um defeito de massa microscópico da ordem de miligramas liberta uma quantidade colossal de energia: 1 grama de massa pura equivale a cerca de 9 · 10¹³ Joules (equivalente à explosão de 21 mil toneladas de TNT).",
    "distractorAnalysis": [
      "Está incorreta: c² é o fator universal de proporcionalidade (c ≈ 3 × 10⁸ m/s, c² ≈ 9 × 10¹⁶ m²/s²); mesmo uma perda ínfima de massa converte-se numa quantidade colossal de energia.",
      "Está incorreta: a massa não se perde por exposição a correntes de ar; corpos em repouso conservam a sua massa a menos que sofram reações nucleares ou químicas mensuráveis.",
      "Está incorreta: E = mc² é uma lei da relatividade restrita fundamental do espaço-tempo e independe da viscosidade sanguínea ou de parâmetros hemodinâmicos humanos."
    ],
    "nursingApplication": "O enfermeiro compreende a física que governa a imensa energia libertada nos reatores nucleares que sintetizam os radioisótopos hospitalares diários."
  },
  {
    "id": 6115,
    "topicId": 6,
    "question": "Durante os cuidados de enfermagem e manipulação de radioisótopos hospitalares, como se manifesta na prática clínica o conceito de 'equação de equivalência massa-energia de Einstein (E = Δm · c²)'?",
    "options": [
      "A equação E = mc² exige que os enfermeiros utilizem óculos de sol polarizados no interior do quarto do doente para evitar a vaporização das lentes oculares.",
      "Essa relação permite calcular o tempo exato em minutos que a equipa cirúrgica tem para transferir o utente da maca para a mesa de operações sem perda de peso.",
      "A fórmula de Einstein é utilizada na enfermagem para determinar a quantidade de sabão cirúrgico necessária para a desinfeção pré-operatória das mãos dos cirurgiões.",
      "A perda de massa que ocorre na produção de radioisótopos em alvos nucleares manifesta-se sob a forma de radiação ionizante com energias cinéticas precisamente calculáveis."
    ],
    "correctIndex": 3,
    "explanation": "A aplicação na enfermagem para equação de equivalência massa-energia de Einstein (E = Δm · c²) baseia-se no princípio: O enfermeiro compreende a física que governa a imensa energia libertada nos reatores nucleares que sintetizam os radioisótopos hospitalares diários. Esta prática garante a segurança radiológica do doente e da equipa.",
    "distractorAnalysis": [
      "Está incorreta: o cálculo do valor Q de uma reação nuclear (Q = Δm·c²) determina as energias dos fotões e partículas emitidas, servindo de base para a dosimetria clínica.",
      "Está incorreta: as lentes oculares não sofrem vaporização por radiofármacos; o controlo radiológico baseia-se em blindagens, dosimetria e cálculo de tempos de exposição.",
      "Está incorreta: a física relativista de E = mc² não se aplica a transferências posturais de macas nem ao doseamento químico de sabões cirúrgicos na prática hospitalar."
    ],
    "nursingApplication": "O enfermeiro compreende a física que governa a imensa energia libertada nos reatores nucleares que sintetizam os radioisótopos hospitalares diários."
  },
  {
    "id": 6116,
    "topicId": 6,
    "question": "Um enfermeiro estuda os fundamentos teóricos da estabilidade da matéria e as propriedades físicas em 'equação de equivalência massa-energia de Einstein (E = Δm · c²)'. Qual das seguintes afirmações expressa a relação física correta?",
    "options": [
      "Como a velocidade da luz ao quadrado c² é aproximadamente 9 × 10¹⁶ J/kg, uma conversão de apenas 1 micrograma de matéria liberta 90 megajoules de energia radiante.",
      "A velocidade da luz c² representa uma barreira térmica em graus Celsius acima da qual os radioisótopos deixam de emitir partículas ionizantes no organismo.",
      "A constante c² faz com que a energia libertada nas reações nucleares seja estritamente idêntica à energia libertada na combustão química do gás de cozinha comum.",
      "A equação E = mc² aplica-se exclusivamente a partículas desprovidas de qualquer carga elétrica, anulando-se sempre que a matéria possui iões positivos ou negativos."
    ],
    "correctIndex": 0,
    "explanation": "A análise teórica e experimental confirma que Mesmo um defeito de massa microscópico da ordem de miligramas liberta uma quantidade colossal de energia: 1 grama de massa pura equivale a cerca de 9 · 10¹³ Joules (equivalente à explosão de 21 mil toneladas de TNT). O domínio destes conceitos permite ao enfermeiro compreender as bases da física nuclear hospitalar.",
    "distractorAnalysis": [
      "Está incorreta: 1 µg = 10⁻⁹ kg; E = 10⁻⁹ kg × (3 × 10⁸ m/s)² = 9 × 10⁷ Joules = 90 MJ (equivalente à combustão de cerca de 2000 litros de gasolina).",
      "Está incorreta: c² é uma constante cinemática universal expressa em m²/s² e não uma barreira térmica em graus Celsius.",
      "Está incorreta: a energia nuclear é cerca de um milhão de vezes mais densa por unidade de massa do que as reações químicas comuns; aplica-se a partículas carregadas ou neutras."
    ],
    "nursingApplication": "O enfermeiro compreende a física que governa a imensa energia libertada nos reatores nucleares que sintetizam os radioisótopos hospitalares diários."
  },
  {
    "id": 6117,
    "topicId": 6,
    "question": "Na física do núcleo atómico e das forças nucleares aplicada ao contexto dos radiofármacos e saúde, em relação a 'unidade de massa atómica (u) e conversão para MeV', qual é a fundamentação científica exata?",
    "options": [
      "Uma unidade de massa atómica (u) é equivalente a exatamente um quilograma de chumbo metálico puro armazenado à temperatura padrão em câmara frigorífica selada.",
      "Uma unidade de massa atómica (1 u = 1/12 da massa do átomo de ¹²C ≈ 1,66054 × 10⁻²⁷ kg) equivale relativisticamente a uma energia de repouso de 931,494 MeV.",
      "A conversão de 1 u em energia resulta em 0,511 keV, que corresponde à energia do eletrão em repouso no espaço vazio entre os tecidos biológicos do corpo humano.",
      "A unidade de massa atómica foi abolida dos cálculos da física nuclear moderna, sendo substituída pelo centímetro cúbico de água destilada a quatro graus centígrados."
    ],
    "correctIndex": 1,
    "explanation": "Em física nuclear médica, unidade de massa atómica (u) e conversão para MeV explica-se pelo facto de que uma unidade de massa atómica unificada (1 u) é definida como exatamente 1/12 da massa de um átomo neutro de Carbono-12 em repouso ($1 u \\approx 1,66054 \\cdot 10^{-27}$ kg). Pela relação $E = m \\cdot c^2$, a conversão de 1 u de massa equivale a exatamente 931,5 Megaeletrão-Volts (MeV) de energia.",
    "distractorAnalysis": [
      "Está incorreta: E = m·c² = (1,66054 × 10⁻²⁷ kg) × (2,99792 × 10⁸ m/s)² / (1,60218 × 10⁻¹³ J/MeV) ≈ 931,494 MeV/c²; facilita a conversão direta de Δm em u para MeV.",
      "Está incorreta: 1 u é a escala microscópica atómica (~1,66 × 10⁻²⁷ kg) e não uma massa macroscópica de um quilograma.",
      "Está incorreta: 0,511 MeV (e não keV) é a massa de repouso do eletrão (~0,0005486 u); 1 u equivale a ~931,5 MeV, quase 1820 vezes superior."
    ],
    "nursingApplication": "Esta conversão direta permite calcular instantaneamente a energia libertada em qualquer reação de decaimento nuclear a partir das massas atómicas tabeladas."
  },
  {
    "id": 6118,
    "topicId": 6,
    "question": "Durante os cuidados de enfermagem e manipulação de radioisótopos hospitalares, como se manifesta na prática clínica o conceito de 'unidade de massa atómica (u) e conversão para MeV'?",
    "options": [
      "Serve para calcular a quantidade de soro fisiológico em mililitros a infundir pelo enfermeiro dividindo a massa do doente pela constante de Planck na unidade u.",
      "A equivalência 1 u ≈ 931,5 MeV dita a velocidade máxima de rotação dos ventiladores mecânicos utilizados no serviço de medicina intensiva hospitalar.",
      "Permite calcular instantaneamente a energia libertada (valor Q em MeV) numa reação ou decaimento radioativo multiplicando o balanço de massa em unidades 'u' por 931,5.",
      "A constante de conversão determina a dosagem de analgésicos opióides administrados por via subcutânea no pós-operatório de cirurgia ortopédica."
    ],
    "correctIndex": 2,
    "explanation": "A aplicação na enfermagem para unidade de massa atómica (u) e conversão para MeV baseia-se no princípio: Esta conversão direta permite calcular instantaneamente a energia libertada em qualquer reação de decaimento nuclear a partir das massas atómicas tabeladas. Esta prática garante a segurança radiológica do doente e da equipa.",
    "distractorAnalysis": [
      "Está incorreta: na física médica e nuclear, Q = (m_inicial - m_final) × 931,494 MeV/u; se uma reação perde 0,005 u de massa, liberta Q = 0,005 × 931,5 ≈ 4,66 MeV.",
      "Está incorreta: débitos de perfusão e volemia baseiam-se em fórmulas fisiológicas em ml/kg/h e não em unidades de massa atómica ou física relativista.",
      "Está incorreta: parâmetros de ventilação mecânica ou dosagens de opióides baseiam-se em farmacologia clínica e gasometrias, sem ligação à constante de conversão nuclear."
    ],
    "nursingApplication": "Esta conversão direta permite calcular instantaneamente a energia libertada em qualquer reação de decaimento nuclear a partir das massas atómicas tabeladas."
  },
  {
    "id": 6119,
    "topicId": 6,
    "question": "Um enfermeiro estuda os fundamentos teóricos da estabilidade da matéria e as propriedades físicas em 'unidade de massa atómica (u) e conversão para MeV'. Qual das seguintes afirmações expressa a relação física correta?",
    "options": [
      "Um defeito de massa de 0,01 u equivale a uma libertação de energia de dez joules de eletricidade estática acumulada no cobertor de lã da cama do doente internado.",
      "Para converter unidades de massa atómica em MeV é necessário multiplicar o valor de massa pela constante universal dos gases perfeitos elevada à terceira potência.",
      "A relação 1 u = 931,5 MeV é válida unicamente para protões livres, deixando de se aplicar a neutrões ou eletrões que sofram processos de aceleração cinética.",
      "Um defeito de massa de 0,01 u num decaimento radioativo corresponde a uma energia libertada de aproximadamente 9,315 MeV (Q = 0,01 × 931,5 MeV = 9,315 MeV)."
    ],
    "correctIndex": 3,
    "explanation": "A análise teórica e experimental confirma que Pela relação $E = m \\cdot c^2$, a conversão de 1 u de massa equivale a exatamente 931,5 Megaeletrão-Volts (MeV) de energia. O domínio destes conceitos permite ao enfermeiro compreender as bases da física nuclear hospitalar.",
    "distractorAnalysis": [
      "Está incorreta: a conversão é linear: Q = Δm (em u) × 931,494 MeV/u; para Δm = 0,01 u obtemos 9,315 MeV de energia repartida entre produtos e radiações.",
      "Está incorreta: 9,315 MeV equivalem a ~1,49 × 10⁻¹² Joules a nível microscópico (uma energia colossal para uma única transformação atómica, mas sub-joule por átomo).",
      "Está incorreta: a equivalência massa-energia decorre diretamente da equação fundamental E = mc² e aplica-se universalmente a qualquer forma de matéria e energia."
    ],
    "nursingApplication": "Esta conversão direta permite calcular instantaneamente a energia libertada em qualquer reação de decaimento nuclear a partir das massas atómicas tabeladas."
  },
  {
    "id": 6120,
    "topicId": 6,
    "question": "Na física do núcleo atómico e das forças nucleares aplicada ao contexto dos radiofármacos e saúde, em relação a 'conservação relativística de energia-massa em decaimentos nucleares', qual é a fundamentação científica exata?",
    "options": [
      "A conservação relativística de energia-momento exige que a energia total inicial (massa de repouso mais cinética) iguale com precisão a energia total final dos produtos.",
      "No decaimento radioativo a energia total não se conserva, existindo uma perda contínua e irreversível de energia que desaparece em dimensões espaciais ocultas.",
      "A conservação relativística aplica-se apenas quando o núcleo atómico decai sob a ação de campos magnéticos exteriores com indução magnética superior a dez Tesla.",
      "A energia mecânica clássica de Newton é rigorosamente conservada no decaimento nuclear, sendo desnecessário incluir a massa de repouso no balanço termodinâmico."
    ],
    "correctIndex": 0,
    "explanation": "Em física nuclear médica, conservação relativística de energia-massa em decaimentos nucleares explica-se pelo facto de que num decaimento nuclear espontâneo, a massa total dos produtos finais é ligeiramente menor do que a massa do núcleo original pai. Essa diferença de massa ($\\Delta m$) surge como energia cinética partilhada entre a partícula ejetada (alfa, beta), a partícula neutra (neutrino) e o fotão gama emitido.",
    "distractorAnalysis": [
      "Está incorreta: na física relativista, E² = (pc)² + (m₀c²)²; a conservação do quadrivetor energia-momento governa todos os decaimentos e reações nucleares sem exceção.",
      "Está incorreta: o princípio da conservação da energia e do momento linear é uma das leis fundamentais e invioláveis de toda a física moderna.",
      "Está incorreta: na física nuclear, a conservação não-relativista clássica falha porque a massa varia (Δm converte-se em energia cinética e fotões); é obrigatório usar E_total relativista."
    ],
    "nursingApplication": "O enfermeiro reconhece que a energia cinética das partículas emitidas dita o seu alcance físico e o poder de penetração nos tecidos biológicos humanos."
  },
  {
    "id": 6121,
    "topicId": 6,
    "question": "Durante os cuidados de enfermagem e manipulação de radioisótopos hospitalares, como se manifesta na prática clínica o conceito de 'conservação relativística de energia-massa em decaimentos nucleares'?",
    "options": [
      "A conservação de energia-massa permite ao enfermeiro prescindir do uso de protetores de tiroide plumbíferos em procedimentos de hemodinâmica intervencionista.",
      "A conservação do momento linear no decaimento alfa e beta determina a distribuição de energia cinética e o recuo do núcleo filho, influenciando o dano tecidual microscópico.",
      "A conservação relativística faz com que as soluções de radiofármacos administradas a idosos neutralizem a acidez da urina nas primeiras vinte e quatro horas.",
      "Essa lei física impede que os doentes submetidos a medicina nuclear emitam qualquer tipo de radiação ionizante para os profissionais que deles cuidam no leito."
    ],
    "correctIndex": 1,
    "explanation": "A aplicação na enfermagem para conservação relativística de energia-massa em decaimentos nucleares baseia-se no princípio: O enfermeiro reconhece que a energia cinética das partículas emitidas dita o seu alcance físico e o poder de penetração nos tecidos biológicos humanos. Esta prática garante a segurança radiológica do doente e da equipa.",
    "distractorAnalysis": [
      "Está incorreta: o recuo do núcleo filho (conservação de momento p_filho = -p_α) quebra ligações químicas (efeito Szilard-Chalmers), aumentando a lesão biológica celular local.",
      "Está incorreta: o cumprimento das leis físicas de conservação não dispensa o uso de equipamentos de proteção individual plumbíferos em radiologia e cardiologia de intervenção.",
      "Está incorreta: os doentes que recebem radiofármacos emitem radiações ionizantes (como fotões gama); a conservação relativista quantifica essas emissões com rigor."
    ],
    "nursingApplication": "O enfermeiro reconhece que a energia cinética das partículas emitidas dita o seu alcance físico e o poder de penetração nos tecidos biológicos humanos."
  },
  {
    "id": 6122,
    "topicId": 6,
    "question": "Um enfermeiro estuda os fundamentos teóricos da estabilidade da matéria e as propriedades físicas em 'conservação relativística de energia-massa em decaimentos nucleares'. Qual das seguintes afirmações expressa a relação física correta?",
    "options": [
      "No decaimento de dois corpos, as partículas emitidas assumem uma distribuição de energias inteiramente aleatória e contínua que varia com a humidade do ar.",
      "A conservação do momento linear no decaimento nuclear é válida unicamente se as partículas resultantes se moverem a velocidades inferiores a dez quilómetros por hora.",
      "No decaimento de dois corpos (como emissão alfa simples), a conservação de energia e momento fixa as energias cinéticas de forma monoenergética e unívoca no referencial de repouso.",
      "O núcleo filho resultante de uma transmutação alfa permanece sempre em repouso estático absoluto no espaço, sem adquirir qualquer energia cinética de recuo."
    ],
    "correctIndex": 2,
    "explanation": "A análise teórica e experimental confirma que Essa diferença de massa ($\\Delta m$) surge como energia cinética partilhada entre a partícula ejetada (alfa, beta), a partícula neutra (neutrino) e o fotão gama emitido. O domínio destes conceitos permite ao enfermeiro compreender as bases da física nuclear hospitalar.",
    "distractorAnalysis": [
      "Está incorreta: como E_α + E_filho = Q e p_α = p_filho, resulta que E_α = Q × M_filho / (M_filho + M_α); logo, as partículas alfa são monoenergéticas (linhas discretas).",
      "Está incorreta: no decaimento de 3 corpos (como decaimento beta com neutrino) o espetro é contínuo; mas no decaimento de 2 corpos (alfa, emissão gama) as energias são estritamente discretas.",
      "Está incorreta: a conservação do momento é uma lei vetorial universal e relativista, válida para qualquer velocidade, desde repouso até à velocidade da luz."
    ],
    "nursingApplication": "O enfermeiro reconhece que a energia cinética das partículas emitidas dita o seu alcance físico e o poder de penetração nos tecidos biológicos humanos."
  },
  {
    "id": 6123,
    "topicId": 6,
    "question": "Na física do núcleo atómico e das forças nucleares aplicada ao contexto dos radiofármacos e saúde, em relação a 'balanço de massa na aniquilação positrão-eletrão em PET', qual é a fundamentação científica exata?",
    "options": [
      "Na aniquilação positrão-eletrão, a massa das duas partículas é convertida em quatro neutrões lentos que permanecem em repouso no espaço intracelular vizinho.",
      "O balanço de massa da aniquilação origina um único fotão de luz visível azul que se dissipa na epiderme do doente sem emitir radiação ionizante no exame.",
      "Na aniquilação em exames PET, a massa do eletrão é destruída mas a massa do positrão permanece intacta sob a forma de um fragmento metálico microscópico.",
      "Na aniquilação, a massa em repouso do positrão e do eletrão (2 × 0,511 MeV/c²) é convertida inteiramente na energia de dois fotões gama colineares de 511 keV emitidos a 180°."
    ],
    "correctIndex": 3,
    "explanation": "Em física nuclear médica, balanço de massa na aniquilação positrão-eletrão em PET explica-se pelo facto de que quando um positrão ($\\beta^+$) colide com um eletrão ($e^-$) do tecido do doente, ambas as massas de repouso (2 $\\times$ 0,511 MeV/c²) são integralmente aniquiladas. O defeito de massa total converte-se em dois fotões gama monocromáticos colineares de exatamente 511 keV de energia cada, emitidos a 180° um do outro.",
    "distractorAnalysis": [
      "Está incorreta: e⁺ + e⁻ -> 2γ; a massa total em repouso é 2 × 511 keV/c² = 1,022 MeV/c²; no referencial do centro de massa, emitem-se dois fotões de 511 keV em direções opostas (180°).",
      "Está incorreta: a aniquilação matéria-antimatéria leptónica produz radiação eletromagnética gama e não neutrões bariónicos.",
      "Está incorreta: a conservação do momento linear proíbe a emissão de um único fotão no vácuo; a conservação exige no mínimo dois fotões colineares emitidos costas com costas."
    ],
    "nursingApplication": "O enfermeiro sabe que a câmara PET deteta estes dois fotões em coincidência temporal estrita para reconstruir a localização exata do tumor metabólico."
  },
  {
    "id": 6124,
    "topicId": 6,
    "question": "Durante os cuidados de enfermagem e manipulação de radioisótopos hospitalares, como se manifesta na prática clínica o conceito de 'balanço de massa na aniquilação positrão-eletrão em PET'?",
    "options": [
      "A emissão coincidente de dois fotões de 511 keV a 180° permite a colimação eletrónica por deteção em linha de resposta (LOR) nos anéis do detetor PET sem colimadores mecânicos.",
      "A aniquilação obriga o enfermeiro a administrar fármacos anticoagulantes para dissolver os pequenos coágulos de eletrões formados no trajeto da veia periférica.",
      "O fenómeno da aniquilação torna desnecessária a utilização de computadores para reconstruir as imagens diagnósticas porque as fotos são impressas por transparência.",
      "A aniquilação positrão-eletrão neutraliza a radioatividade do quarto do doente em cinco segundos, permitindo a entrada livre de visitas de crianças e grávidas."
    ],
    "correctIndex": 0,
    "explanation": "A aplicação na enfermagem para balanço de massa na aniquilação positrão-eletrão em PET baseia-se no princípio: O enfermeiro sabe que a câmara PET deteta estes dois fotões em coincidência temporal estrita para reconstruir a localização exata do tumor metabólico. Esta prática garante a segurança radiológica do doente e da equipa.",
    "distractorAnalysis": [
      "Está incorreta: os detetores do anel PET identificam eventos coincidentes (janela de nanossegundos) numa LOR; a interseção de múltiplas LORs reconstrói a imagem 3D com alta sensibilidade.",
      "Está incorreta: eletrões teciduais continuam a fazer parte dos átomos normais; a aniquilação não causa coágulos mecânicos nem exige anticoagulação terapêutica.",
      "Está incorreta: doentes submetidos a PET emitem radiação de 511 keV que decai com a semivida do radiofármaco (ex: 110 min no ¹⁸F); visitas e pessoal devem respeitar radioproteção."
    ],
    "nursingApplication": "O enfermeiro sabe que a câmara PET deteta estes dois fotões em coincidência temporal estrita para reconstruir a localização exata do tumor metabólico."
  },
  {
    "id": 6125,
    "topicId": 6,
    "question": "Um enfermeiro estuda os fundamentos teóricos da estabilidade da matéria e as propriedades físicas em 'balanço de massa na aniquilação positrão-eletrão em PET'. Qual das seguintes afirmações expressa a relação física correta?",
    "options": [
      "A aniquilação positrão-eletrão viola o princípio da conservação da energia porque converte partículas sólidas pesadas em radiação eletromagnética imaterial e etérea.",
      "Para conservar simultaneamente a energia total e o momento linear no referencial em que o par positrão-eletrão está em repouso relativo, a emissão tem de ser de pelo menos dois fotões.",
      "A emissão de dois fotões de 511 keV ocorre exclusivamente se o positrão colidir com um núcleo de chumbo a temperaturas superiores a cem graus centígrados na sala.",
      "A energia de cada fotão de aniquilação varia entre zero e dez megajoules em função do índice glicémico dos alimentos ingeridos pelo doente antes do procedimento clínico."
    ],
    "correctIndex": 1,
    "explanation": "A análise teórica e experimental confirma que O defeito de massa total converte-se em dois fotões gama monocromáticos colineares de exatamente 511 keV de energia cada, emitidos a 180° um do outro. O domínio destes conceitos permite ao enfermeiro compreender as bases da física nuclear hospitalar.",
    "distractorAnalysis": [
      "Está incorreta: se fosse emitido apenas um fotão, o momento final seria p = E/c ≠ 0, violando a conservação do momento linear no referencial do centro de massa (onde p_total = 0).",
      "Está incorreta: a conservação da energia-massa é estrita: a energia total dos fotões (2 × 511 keV = 1,022 MeV) iguala a energia de repouso mais cinética do par antes da colisão.",
      "Está incorreta: a aniquilação ocorre espontaneamente com qualquer eletrão biológico tecidual; a energia de cada fotão é de 511 keV no repouso, independendo da glicemia do doente."
    ],
    "nursingApplication": "O enfermeiro sabe que a câmara PET deteta estes dois fotões em coincidência temporal estrita para reconstruir a localização exata do tumor metabólico."
  },
  {
    "id": 6126,
    "topicId": 6,
    "question": "Na física do núcleo atómico e das forças nucleares aplicada ao contexto dos radiofármacos e saúde, em relação a 'definição de Energia de Ligação Nuclear (Eb)', qual é a fundamentação científica exata?",
    "options": [
      "A Energia de Ligação Nuclear representa a força mecânica de adesão que cola os recipientes de radiofármacos à bancada de chumbo na câmara quente hospitalar.",
      "A Energia de Ligação corresponde à quantidade de calor gerada pela fricção do sangue venoso contra as paredes internas do cateter durante a perfusão de soluções.",
      "A Energia de Ligação Nuclear (E_b) é a energia mínima necessária para desagregar completamente um núcleo atómico nos seus protões e neutrões livres constituintes.",
      "Essa grandeza define a percentagem de moléculas de água estéril que se evaporam da ampola sempre que esta é exposta à luz fluorescente do posto de enfermagem."
    ],
    "correctIndex": 2,
    "explanation": "Em física nuclear médica, definição de Energia de Ligação Nuclear (Eb) explica-se pelo facto de que é a quantidade mínima de energia externa que seria necessário fornecer a um núcleo atómico para separar completamente todos os seus nucleões constituintes até ao infinito em repouso. Calcula-se diretamente multiplicando o defeito de massa por c²: $E_b = \\Delta m \\cdot c^2$.",
    "distractorAnalysis": [
      "Está incorreta: E_b = Δm·c² mede a profundidade do poço de potencial nuclear; equivale à energia libertada quando os nucleões livres se unem para formar o núcleo.",
      "Está incorreta: a energia de ligação nuclear é uma grandeza subatómica interna de escala femtométrica e MeV, sem qualquer relação com adesão macroscópica de frascos.",
      "Está incorreta: não se relaciona com a reologia do fluxo sanguíneo venoso nem com taxas de evaporação de solventes em ampolas farmacêuticas."
    ],
    "nursingApplication": "Quanto maior for a energia de ligação total, mais fortemente unidos e compactos estão os nucleões no interior do poço de potencial nuclear."
  },
  {
    "id": 6127,
    "topicId": 6,
    "question": "Durante os cuidados de enfermagem e manipulação de radioisótopos hospitalares, como se manifesta na prática clínica o conceito de 'definição de Energia de Ligação Nuclear (Eb)'?",
    "options": [
      "A energia de ligação nuclear indica a quantidade de analgésicos que o enfermeiro deve administrar ao doente antes de realizar uma colheita de sangue arterial.",
      "Essa energia é absorvida pelos dosímetros termoluminescentes para emitir um alarme sonoro contínuo sempre que o profissional entra no quarto do doente tratado.",
      "A energia de ligação nuclear é diretamente convertida em glicose pelos hepatócitos do doente durante a realização de cintigrafias da árvore biliar.",
      "A magnitude da energia de ligação determina a estabilidade do radioisótopo e a energia cinética dos produtos emitidos nas técnicas diagnósticas e terapêuticas."
    ],
    "correctIndex": 3,
    "explanation": "A aplicação na enfermagem para definição de Energia de Ligação Nuclear (Eb) baseia-se no princípio: Quanto maior for a energia de ligação total, mais fortemente unidos e compactos estão os nucleões no interior do poço de potencial nuclear. Esta prática garante a segurança radiológica do doente e da equipa.",
    "distractorAnalysis": [
      "Está incorreta: diferenças de energia de ligação entre núcleos pai e filhos governam o balanço energético (Q) e as energias das partículas e fotões detetados ou usados na terapia.",
      "Está incorreta: colheitas de sangue arterial dependem de técnicas assépticas e indicação clínica, não tendo relação com a energia de ligação dos radioisótopos.",
      "Está incorreta: dosímetros TLD acumulam dose por ionização cristalina e são lidos termicamente em laboratório especializado, não emitindo alarmes sonoros mecânicos."
    ],
    "nursingApplication": "Quanto maior for a energia de ligação total, mais fortemente unidos e compactos estão os nucleões no interior do poço de potencial nuclear."
  },
  {
    "id": 6128,
    "topicId": 6,
    "question": "Um enfermeiro estuda os fundamentos teóricos da estabilidade da matéria e as propriedades físicas em 'definição de Energia de Ligação Nuclear (Eb)'. Qual das seguintes afirmações expressa a relação física correta?",
    "options": [
      "A energia de ligação é quantificada pela diferença entre a massa dos nucleões livres e a massa do núcleo: E_b = (Z·m_p + N·m_n - M_núcleo) · c² = Δm · c².",
      "A energia de ligação é calculada multiplicando a massa total do doente pela aceleração da gravidade e pela altitude do hospital acima do nível do mar.",
      "A energia de ligação nuclear resulta da soma linear das energias orbitais dos eletrões periféricos que ocupam as camadas de valência mais externas do átomo.",
      "A grandeza E_b é inversamente proporcional ao quadrado da constante de Planck, anulando-se sempre que a temperatura do núcleo atinge zero graus centígrados."
    ],
    "correctIndex": 0,
    "explanation": "A análise teórica e experimental confirma que Calcula-se diretamente multiplicando o defeito de massa por c²: $E_b = \\Delta m \\cdot c^2$. O domínio destes conceitos permite ao enfermeiro compreender as bases da física nuclear hospitalar.",
    "distractorAnalysis": [
      "Está incorreta: a relação relativista E_b = Δm·c² expressa rigorosamente a equivalência entre o defeito de massa e a energia de coesão nucleónica no núcleo atómico.",
      "Está incorreta: a energia potencial gravítica macroscópica (E = mgh) não tem qualquer relevância na física das forças nucleares fortes subatómicas.",
      "Está incorreta: energias eletrónicas orbitais situam-se na escala de eletrão-volts (eV), enquanto as energias de ligação nuclear situam-se na escala de MeV (um milhão de vezes superior)."
    ],
    "nursingApplication": "Quanto maior for a energia de ligação total, mais fortemente unidos e compactos estão os nucleões no interior do poço de potencial nuclear."
  },
  {
    "id": 6129,
    "topicId": 6,
    "question": "Na física do núcleo atómico e das forças nucleares aplicada ao contexto dos radiofármacos e saúde, em relação a 'Energia de Ligação por Nucleão (Eb / A) como índice de estabilidade', qual é a fundamentação científica exata?",
    "options": [
      "A estabilidade do núcleo é determinada unicamente pela energia de ligação total E_b, sendo os núcleos mais pesados sempre os mais estáveis contra o decaimento radioativo.",
      "A Energia de Ligação por Nucleão (E_b / A) é o verdadeiro indicador de estabilidade nuclear: quanto maior for o valor de E_b / A, mais fortemente ligado e estável é o núcleo.",
      "A razão E_b / A indica a percentagem de neutrões que se transformam em protões a cada segundo quando a ampola de radiofármaco é agitada manualmente.",
      "O valor de E_b / A mede a condutividade elétrica do citoplasma celular quando submetido a campos elétricos de radiofrequência em imagiologia médica."
    ],
    "correctIndex": 1,
    "explanation": "Em física nuclear médica, Energia de Ligação por Nucleão (Eb / A) como índice de estabilidade explica-se pelo facto de que a estabilidade relativa de um núcleo não depende da energia de ligação total bruta, mas sim da Energia de Ligação dividida pelo número de massa: $E_b / A$. Representa a energia média necessária para arrancar um único nucleão do interior daquele núcleo específico.",
    "distractorAnalysis": [
      "Está incorreta: embora o Urânio-238 tenha E_b total muito maior que o Hélio-4, a sua E_b/A (~7,6 MeV) é menor que a do Ferro-56 (~8,8 MeV), tornando-o instável e radioativo.",
      "Está incorreta: a estabilidade relativa depende da energia média por constituinte (E_b/A) e não do total agregado de energia no núcleo volumoso.",
      "Está incorreta: E_b/A é uma propriedade fundamental e estática do estado quântico nuclear, sem ligação com agitação de frascos ou condutividade do citoplasma."
    ],
    "nursingApplication": "Núcleos com maior valor de $E_b / A$ são os mais firmemente ligados e os mais resistentes à desintegração espontânea na natureza."
  },
  {
    "id": 6130,
    "topicId": 6,
    "question": "Durante os cuidados de enfermagem e manipulação de radioisótopos hospitalares, como se manifesta na prática clínica o conceito de 'Energia de Ligação por Nucleão (Eb / A) como índice de estabilidade'?",
    "options": [
      "Permite aos enfermeiros calcular o volume de urina residual na bexiga do doente através da medição da temperatura da pele da região hipogástrica.",
      "Serve para determinar o número de compressas esterilizadas necessárias para realizar o penso cirúrgico em doentes intervencionados na tiroide.",
      "Permite compreender por que radioisótopos pesados (com menor E_b / A) decaem espontaneamente por emissão alfa ou fissão para atingir estados com maior E_b / A.",
      "Indica que radioisótopos com baixo valor de E_b / A devem ser administrados exclusivamente através de inalação de vapores aquecidos a sessenta graus."
    ],
    "correctIndex": 2,
    "explanation": "A aplicação na enfermagem para Energia de Ligação por Nucleão (Eb / A) como índice de estabilidade baseia-se no princípio: Núcleos com maior valor de $E_b / A$ são os mais firmemente ligados e os mais resistentes à desintegração espontânea na natureza. Esta prática garante a segurança radiológica do doente e da equipa.",
    "distractorAnalysis": [
      "Está incorreta: qualquer processo espontâneo caminha no sentido de maior estabilidade (maior E_b/A); por isso actinídeos pesados transmutam-se em nuclídeos mais leves e ligados.",
      "Está incorreta: o volume residual vesical avalia-se por ecografia clínica à beira do leito (bladderscan) ou algaliação, e não por física de energia por nucleão.",
      "Está incorreta: pensos cirúrgicos e administração farmacológica seguem protocolos de enfermagem e guias terapêuticos específicos, não dependendo de inalações aquecidas."
    ],
    "nursingApplication": "Núcleos com maior valor de $E_b / A$ são os mais firmemente ligados e os mais resistentes à desintegração espontânea na natureza."
  },
  {
    "id": 6131,
    "topicId": 6,
    "question": "Um enfermeiro estuda os fundamentos teóricos da estabilidade da matéria e as propriedades físicas em 'Energia de Ligação por Nucleão (Eb / A) como índice de estabilidade'. Qual das seguintes afirmações expressa a relação física correta?",
    "options": [
      "A energia de ligação por nucleão cresce linearmente sem limite com o número de massa, atingindo mais de dez mil MeV no átomo de chumbo estável em repouso.",
      "O valor de E_b / A é idêntico a zero para todos os elementos químicos conhecidos exceto quando estes se encontram dissolvidos em soluções aquosas de dextrose.",
      "A razão E_b / A diminui drasticamente para zero nos elementos de massa média devido ao desaparecimento espontâneo dos neutrões centrais do núcleo.",
      "Para a maioria dos núcleos com A entre 30 e 150, a energia de ligação por nucleão permanece notavelmente constante em cerca de 8 a 8,5 MeV por nucleão."
    ],
    "correctIndex": 3,
    "explanation": "A análise teórica e experimental confirma que Representa a energia média necessária para arrancar um único nucleão do interior daquele núcleo específico. O domínio destes conceitos permite ao enfermeiro compreender as bases da física nuclear hospitalar.",
    "distractorAnalysis": [
      "Está incorreta: a constância de E_b/A (~8 MeV/nucleão) no planalto da curva de estabilidade é o reflexo experimental direto da saturação da força nuclear forte.",
      "Está incorreta: se E_b/A crescesse linearmente, os núcleos pesados não fissurariam e teriam energias de ligação astronómicas, contrariando as medições físicas.",
      "Está incorreta: E_b/A atinge valores entre 7,5 e 8,8 MeV para quase todos os núcleos da tabela periódica (exceto os mais leves como o deutério com ~1,1 MeV)."
    ],
    "nursingApplication": "Núcleos com maior valor de $E_b / A$ são os mais firmemente ligados e os mais resistentes à desintegração espontânea na natureza."
  },
  {
    "id": 6132,
    "topicId": 6,
    "question": "Na física do núcleo atómico e das forças nucleares aplicada ao contexto dos radiofármacos e saúde, em relação a 'curva de energia de ligação por nucleão e o pico do Ferro-56', qual é a fundamentação científica exata?",
    "options": [
      "A curva de E_b / A sobe rapidamente nos núcleos leves, atinge o máximo absoluto em torno de ⁵⁶Fe e ⁶²Ni (~8,8 MeV/nucleão) e declina lentamente nos núcleos pesados.",
      "A curva de E_b / A apresenta a forma de uma linha reta horizontal perfeita desde o hidrogénio até aos transuranianos, demonstrando invariância estrutural total.",
      "O Ferro-56 apresenta a menor energia de ligação por nucleão de todos os elementos estáveis, tornando-se altamente radioativo em condições atmosféricas normais.",
      "O pico de máxima estabilidade nuclear ocorre no átomo de Urânio-235, o qual é o nuclídeo mais estável e abundante em toda a crosta terrestre e no cosmos."
    ],
    "correctIndex": 0,
    "explanation": "Em física nuclear médica, curva de energia de ligação por nucleão e o pico do Ferro-56 explica-se pelo facto de que a curva de $E_b / A$ começa em valores baixos para o deutério (~1,1 MeV/nucleão), sobe rapidamente nos núcleos leves, atinge um pico máximo absoluto de ~8,79 MeV/nucleão no Ferro-56 (⁵⁶Fe) e Níquel-62, e desce suavemente para ~7,6 MeV/nucleão no Urânio-238. O Ferro-56 é o núcleo termodinamicamente mais estável de todo o Universo conhecido.",
    "distractorAnalysis": [
      "Está incorreta: o pico da curva localiza-se na região do ferro/níquel (~8,8 MeV/nucleão); núcleos mais leves ganham energia por fusão e núcleos mais pesados por fissão.",
      "Está incorreta: a curva é altamente assimétrica, com forte inclinação inicial nos leves, máximo em A ≈ 56-62 e descida gradual até ~7,6 MeV/nucleão no urânio devido a Coulomb.",
      "Está incorreta: o Ferro-56 e o Níquel-62 possuem a maior energia de ligação por nucleão da natureza, sendo o ponto de estabilidade nuclear máxima no Universo."
    ],
    "nursingApplication": "Todos os processos nucleares cósmicos tendem energeticamente para a região central do Ferro."
  },
  {
    "id": 6133,
    "topicId": 6,
    "question": "Durante os cuidados de enfermagem e manipulação de radioisótopos hospitalares, como se manifesta na prática clínica o conceito de 'curva de energia de ligação por nucleão e o pico do Ferro-56'?",
    "options": [
      "A curva da estabilidade nuclear obriga os hospitais a revestir as camas dos doentes internados com placas de ferro maciço para evitar a fuga de neutrões cósmicos.",
      "A curva explica por que os reatores produzem radionuclídeos médicos por fissão de pesados (à direita do pico) e por que os ciclotrões usam reações de fusão/bombardeamento de leves.",
      "O pico do Ferro-56 determina que os doentes com carência de ferro no sangue desenvolvam radioatividade espontânea nos glóbulos vermelhos das artérias periféricas.",
      "Essa curva física é utilizada na enfermagem para calcular o tempo de coagulação sanguínea do utente antes da colocação de cateteres venosos centrais."
    ],
    "correctIndex": 1,
    "explanation": "A aplicação na enfermagem para curva de energia de ligação por nucleão e o pico do Ferro-56 baseia-se no princípio: Todos os processos nucleares cósmicos tendem energeticamente para a região central do Ferro. Esta prática garante a segurança radiológica do doente e da equipa.",
    "distractorAnalysis": [
      "Está incorreta: a posição na curva define os processos energéticos: cisão de actinídeos pesados gera subprodutos ricos em neutrões (Mo-99); reações com alvos leves em ciclotrão geram emissores PET.",
      "Está incorreta: o ferro não é utilizado como blindagem contra neutrões em camas; neutrões exigem moderadores hidrogenados (parafina, água) e absorventes como boro ou cádmio.",
      "Está incorreta: a anemia ferropénica é um distúrbio hematológico metabólico clássico, sem qualquer manifestação de radioatividade nuclear intrínseca."
    ],
    "nursingApplication": "Todos os processos nucleares cósmicos tendem energeticamente para a região central do Ferro."
  },
  {
    "id": 6134,
    "topicId": 6,
    "question": "Um enfermeiro estuda os fundamentos teóricos da estabilidade da matéria e as propriedades físicas em 'curva de energia de ligação por nucleão e o pico do Ferro-56'. Qual das seguintes afirmações expressa a relação física correta?",
    "options": [
      "A fusão de dois núcleos de ferro liberta centenas de megajoules de energia radiante, constituindo o combustível de funcionamento primário dos reatores clínicos.",
      "A fissão nuclear de núcleos leves como o carbono liberta mais energia por grama do que a fissão de núcleos pesados de urânio em ensaios laboratoriais.",
      "Como o pico situa-se em A ≈ 56-62, a fusão de elementos mais leves liberta energia (exotérmica) e a fissão de elementos mais pesados também liberta energia exotérmica.",
      "A forma da curva impede rigorosamente qualquer reação nuclear que envolva emissão de fotões gama ou absorção de neutrões térmicos por núcleos de massa média."
    ],
    "correctIndex": 2,
    "explanation": "A análise teórica e experimental confirma que O Ferro-56 é o núcleo termodinamicamente mais estável de todo o Universo conhecido. O domínio destes conceitos permite ao enfermeiro compreender as bases da física nuclear hospitalar.",
    "distractorAnalysis": [
      "Está incorreta: mover-se em direção ao topo da curva (Fe/Ni) aumenta E_b/A, libertando a diferença como energia; fusão além do ferro ou fissão de leves é endotérmica.",
      "Está incorreta: fundir núcleos da região do ferro consome energia em vez de libertar (processo endotérmico), razão pela qual estrelas colapsam quando formam núcleos de ferro.",
      "Está incorreta: a cisão de núcleos leves exigiria fornecimento massivo de energia; apenas núcleos pesados (A > 200) libertam energia líquida por fissão nuclear."
    ],
    "nursingApplication": "Todos os processos nucleares cósmicos tendem energeticamente para a região central do Ferro."
  },
  {
    "id": 6135,
    "topicId": 6,
    "question": "Na física do núcleo atómico e das forças nucleares aplicada ao contexto dos radiofármacos e saúde, em relação a 'mecanismo energético da Fusão Nuclear em núcleos leves', qual é a fundamentação científica exata?",
    "options": [
      "A fusão de núcleos leves decorre da evaporação completa dos seus protões no vácuo, libertando ondas sonoras ultrassónicas que aquecem o tecido circundante.",
      "O processo de fusão nuclear é endotérmico em todos os elementos químicos conhecidos, exigindo fornecimento contínuo de energia elétrica externa para manter a ligação.",
      "A fusão ocorre quando os eletrões das camadas atómicas externas se aglutinam no núcleo para anular permanentemente a carga elétrica dos neutrões livres.",
      "Na fusão nuclear, dois núcleos leves unem-se para formar um núcleo mais pesado com maior E_b / A, convertendo o defeito de massa resultante em energia cinética e radiante."
    ],
    "correctIndex": 3,
    "explanation": "Em física nuclear médica, mecanismo energético da Fusão Nuclear em núcleos leves explica-se pelo facto de que quando dois núcleos muito leves com baixo $E_b / A$ (como isótopos de hidrogénio: deutério e trítio) se fundem para formar um núcleo mais pesado (Hélio-4 com $E_b / A \\approx 7,1$ MeV), o novo núcleo é muito mais estável. A subida na curva de $E_b / A$ liberta a diferença de energia sob a forma de calor e radiação limpa de fusão.",
    "distractorAnalysis": [
      "Está incorreta: a subida rápida de E_b/A do hidrogénio para o hélio significa que a massa do He-4 é muito menor que os 4 nucleões separados, libertando ~28 MeV por reação.",
      "Está incorreta: nucleões conservam-se rigorosamente na fusão (número bariónico total); a libertação de energia ocorre por radiação eletromagnética e energia cinética.",
      "Está incorreta: a fusão de núcleos com A < 56 é fortemente exotérmica, constituindo a fonte de energia das estrelas e do nosso Sol (cadeia p-p)."
    ],
    "nursingApplication": "A fusão nuclear é a fonte que alimenta as estrelas e é a meta da futura produção de energia limpa na Terra."
  },
  {
    "id": 6136,
    "topicId": 6,
    "question": "Durante os cuidados de enfermagem e manipulação de radioisótopos hospitalares, como se manifesta na prática clínica o conceito de 'mecanismo energético da Fusão Nuclear em núcleos leves'?",
    "options": [
      "Embora a fusão não seja fonte clínica direta, reatores de fusão em desenvolvimento visam a produção limpa de radioisótopos médicos sem gerar resíduos de actinídeos pesados.",
      "A fusão nuclear é realizada habitualmente dentro de seringas plásticas de vidro pelo enfermeiro imediatamente antes de injetar o contraste no doente.",
      "Os doentes que recebem radiofármacos sofrem reações de fusão nuclear no interior do miocárdio, o que fortalece as contrações musculares cardíacas em idosos.",
      "A tecnologia de fusão é utilizada nos hospitais para desinfetar o vestuário cirúrgico através da compressão magnética de átomos de oxigénio à temperatura ambiente."
    ],
    "correctIndex": 0,
    "explanation": "A aplicação na enfermagem para mecanismo energético da Fusão Nuclear em núcleos leves baseia-se no princípio: A fusão nuclear é a fonte que alimenta as estrelas e é a meta da futura produção de energia limpa na Terra. Esta prática garante a segurança radiológica do doente e da equipa.",
    "distractorAnalysis": [
      "Está incorreta: geradores de neutrões baseados em reações de fusão D-T ou futuros reatores de fusão prometem fontes intensas de neutrões para produzir radioisótopos como Mo-99 sem queimar urânio.",
      "Está incorreta: a fusão requer temperaturas de dezenas de milhões de graus Celsius para vencer a barreira de Coulomb, sendo impossível de ocorrer em seringas hospitalares ou no corpo humano.",
      "Está incorreta: organismos biológicos mantêm homeostase a ~37 °C; reações termonucleares de fusão não ocorrem em tecidos humanos nem em desinfeção têxtil."
    ],
    "nursingApplication": "A fusão nuclear é a fonte que alimenta as estrelas e é a meta da futura produção de energia limpa na Terra."
  },
  {
    "id": 6137,
    "topicId": 6,
    "question": "Um enfermeiro estuda os fundamentos teóricos da estabilidade da matéria e as propriedades físicas em 'mecanismo energético da Fusão Nuclear em núcleos leves'. Qual das seguintes afirmações expressa a relação física correta?",
    "options": [
      "A fusão termonuclear entre núcleos leves ocorre espontaneamente na água da torneira à temperatura de vinte graus centígrados sem necessidade de qualquer energia de ativação.",
      "A fusão de deutério e trítio (²H + ³H -> ⁴He + n) liberta 17,6 MeV de energia por evento, correspondendo a uma densidade energética por massa ordens de magnitude superior à combustão.",
      "A reação de fusão D-T resulta no desaparecimento de três neutrões do cosmos, violando propositadamente as leis de conservação quântica de números bariónicos.",
      "A fusão de núcleos de hidrogénio produz obrigatoriamente fragmentos radioativos pesados como o chumbo-206 e o mercúrio metálico em estado líquido no final."
    ],
    "correctIndex": 1,
    "explanation": "A análise teórica e experimental confirma que A subida na curva de $E_b / A$ liberta a diferença de energia sob a forma de calor e radiação limpa de fusão. O domínio destes conceitos permite ao enfermeiro compreender as bases da física nuclear hospitalar.",
    "distractorAnalysis": [
      "Está incorreta: a reação D-T gera He-4 (3,5 MeV) e um neutrão rápido de 14,1 MeV (total 17,6 MeV); 1 grama de combustível D-T liberta energia equivalente a cerca de 10 toneladas de carvão.",
      "Está incorreta: a repulsão de Coulomb impede a fusão à temperatura ambiente; são necessárias energias cinéticas térmicas elevadíssimas para alcançar o regime de efeito de túnel.",
      "Está incorreta: conservam-se nucleões: 2 + 3 = 4 + 1 = 5; conservam-se protões (1 + 1 = 2) e neutrões (1 + 2 = 2 + 1 = 3); os produtos são hélio estável e um neutrão."
    ],
    "nursingApplication": "A fusão nuclear é a fonte que alimenta as estrelas e é a meta da futura produção de energia limpa na Terra."
  },
  {
    "id": 6138,
    "topicId": 6,
    "question": "Na física do núcleo atómico e das forças nucleares aplicada ao contexto dos radiofármacos e saúde, em relação a 'mecanismo energético da Fissão Nuclear em núcleos pesados', qual é a fundamentação científica exata?",
    "options": [
      "A fissão nuclear consiste na fusão mecânica de dois átomos de urânio para formar um átomo hiperpesado que atrai os eletrões dos tecidos biológicos por magnetismo.",
      "A energia de fissão provém da destruição total de todos os protões e neutrões dos núcleos intervenientes, os quais se transformam em gás hélio comprimido e frio.",
      "Na fissão, um núcleo pesado cinde-se em dois fragmentos médios que possuem maior E_b / A (~8,5 vs ~7,6 MeV/nucleão), libertando o excedente (~200 MeV) como calor e radiação.",
      "O mecanismo de fissão em núcleos pesados absorve duzentos MeV de calor do meio circundante, congelando instantaneamente a água de arrefecimento dos reatores."
    ],
    "correctIndex": 2,
    "explanation": "Em física nuclear médica, mecanismo energético da Fissão Nuclear em núcleos pesados explica-se pelo facto de que quando um núcleo superpesado com menor $E_b / A$ (como o Urânio-235 ou Plutónio-239) se divide em dois núcleos de tamanho médio, os fragmentos resultantes possuem maior $E_b / A$ (~8,5 MeV). A subida na curva liberta cerca de 200 MeV de energia pura por cada núcleo cindido, além de neutrões rápidos adicionais.",
    "distractorAnalysis": [
      "Está incorreta: a diferença de energia de ligação por nucleão (~0,9 MeV/nucleão) multiplicada pelos ~235 nucleões resulta em ~200 MeV libertados por fissão individual de U-235.",
      "Está incorreta: fissão é divisão/ruptura e não fusão; o núcleo pesado fragmenta-se em dois núcleos mais leves no meio da tabela periódica (como Cs-137, I-131, Mo-99).",
      "Está incorreta: nucleões não são destruídos; o número bariónico total conserva-se estritamente; a fissão é fortemente exotérmica e gera calor intenso."
    ],
    "nursingApplication": "Este processo em reatores nucleares é o responsável direto pela geração do Molibdénio-99, o isótopo-pai de onde a enfermagem obtém o Tecnécio-99m hospitalar."
  },
  {
    "id": 6139,
    "topicId": 6,
    "question": "Durante os cuidados de enfermagem e manipulação de radioisótopos hospitalares, como se manifesta na prática clínica o conceito de 'mecanismo energético da Fissão Nuclear em núcleos pesados'?",
    "options": [
      "A fissão nuclear é induzida diretamente na corrente sanguínea do doente para dissolver placas de ateroma calcificadas nas artérias carótidas e coronárias.",
      "Os fragmentos de fissão hospitalares são misturados em cremes hidratantes para aplicação cutânea tópica com vista a acelerar a cicatrização de escaras de decúbito.",
      "A fissão de núcleos nos reatores gera resíduos inócuos que podem ser utilizados diretamente como água destilada para preparar soluções de medicação oral.",
      "A fissão induzida por neutrões de alvos de Urânio-235 em reatores nucleares é o principal método de produção em larga escala de Molibdénio-99 (gerador de Tc-99m) e Iodo-131."
    ],
    "correctIndex": 3,
    "explanation": "A aplicação na enfermagem para mecanismo energético da Fissão Nuclear em núcleos pesados baseia-se no princípio: Este processo em reatores nucleares é o responsável direto pela geração do Molibdénio-99, o isótopo-pai de onde a enfermagem obtém o Tecnécio-99m hospitalar. Esta prática garante a segurança radiológica do doente e da equipa.",
    "distractorAnalysis": [
      "Está incorreta: alvos de U-235 enriquecido são irradiados com neutrões térmicos num reator nuclear; a separação radioquímica dos fragmentos isola Mo-99 e I-131 para a medicina nuclear mundial.",
      "Está incorreta: a fissão nunca é administrada no corpo humano; produtos de fissão contêm radioisótopos com atividade intensa que exigem isolamento em instalações nucleares.",
      "Está incorreta: produtos de fissão não purificados são resíduos radioativos de alto nível e nunca produtos cosméticos ou de cicatrização dérmica."
    ],
    "nursingApplication": "Este processo em reatores nucleares é o responsável direto pela geração do Molibdénio-99, o isótopo-pai de onde a enfermagem obtém o Tecnécio-99m hospitalar."
  },
  {
    "id": 6140,
    "topicId": 6,
    "question": "Um enfermeiro estuda os fundamentos teóricos da estabilidade da matéria e as propriedades físicas em 'mecanismo energético da Fissão Nuclear em núcleos pesados'. Qual das seguintes afirmações expressa a relação física correta?",
    "options": [
      "A absorção de um neutrão térmico pelo ²³⁵U forma um estado composto excitado (²³⁶U*) que ultrapassa a barreira de fissão, cindindo-se assimetricamente com emissão de 2-3 neutrões.",
      "A fissão do Urânio-235 exige o bombardeamento prévio do núcleo com partículas alfa ultraenergéticas com energias superiores a cem gigaelectrão-volts em aceleradores lineares.",
      "Na fissão nuclear, os dois fragmentos formados possuem rigorosamente o mesmo número de protões e neutrões, partindo-se o núcleo atómico sempre em metades geométricas perfeitas.",
      "A emissão de neutrões imediatos na fissão ocorre apenas quando o reator nuclear se encontra totalmente desprovido de qualquer barra de controlo ou refrigerante."
    ],
    "correctIndex": 0,
    "explanation": "A análise teórica e experimental confirma que A subida na curva liberta cerca de 200 MeV de energia pura por cada núcleo cindido, além de neutrões rápidos adicionais. O domínio destes conceitos permite ao enfermeiro compreender as bases da física nuclear hospitalar.",
    "distractorAnalysis": [
      "Está incorreta: ²³⁵U tem secção eficaz muito alta para neutrões térmicos (~0,025 eV); a energia de ligação do neutrão adicionado excita o núcleo acima da barreira de fissão (~5,7 MeV).",
      "Está incorreta: a fissão térmica ocorre com neutrões lentos/térmicos à temperatura ambiente sem necessidade de feixes de partículas alfa ou energias de GeV.",
      "Está incorreta: a fissão térmica de actinídeos é predominantemente assimétrica, com picos de massa perto de A ≈ 95 e A ≈ 140; neutrões imediatos saem em ~10⁻¹⁴ segundos."
    ],
    "nursingApplication": "Este processo em reatores nucleares é o responsável direto pela geração do Molibdénio-99, o isótopo-pai de onde a enfermagem obtém o Tecnécio-99m hospitalar."
  },
  {
    "id": 6141,
    "topicId": 6,
    "question": "Na física do núcleo atómico e das forças nucleares aplicada ao contexto dos radiofármacos e saúde, em relação a 'quantização dos níveis energéticos nucleares', qual é a fundamentação científica exata?",
    "options": [
      "A energia dos núcleos atómicos pode variar continuamente assumindo qualquer valor numérico fracionário sem obedecer a quaisquer regras quânticas de seleção de spin.",
      "Os nucleões no núcleo ocupam níveis quânticos discretos de energia determinados pelo potencial nuclear e acoplamento spin-órbita, segundo o Modelo em Camadas (Shell Model).",
      "A quantização dos níveis nucleares significa que os protões se deslocam ao longo de calhas condutoras metálicas circulares soldadas no interior do núcleo atómico.",
      "Os estados excitados do núcleo atómico possuem todos rigorosamente a mesma energia e a mesma semivida de desexcitação em qualquer elemento químico da tabela."
    ],
    "correctIndex": 1,
    "explanation": "Em física nuclear médica, quantização dos níveis energéticos nucleares explica-se pelo facto de que tal como os eletrões orbitais ocupam níveis quânticos discretos de energia no átomo, também os protões e neutrões no interior do núcleo ocupam níveis de energia quânticos bem definidos (modelo de camadas nuclear). No entanto, enquanto as transições eletrónicas orbitais envolvem energias na escala de alguns eV a keV (luz e Raios X), as transições entre estados nucleares envolvem energias na escala de centenas de keV a vários MeV.",
    "distractorAnalysis": [
      "Está incorreta: a mecânica quântica governa os estados dos nucleões; o modelo em camadas de Mayer e Jensen introduziu o acoplamento spin-órbita explicando os 'números mágicos' (2, 8, 20, 28, 50, 82, 126).",
      "Está incorreta: energias nucleares são rigorosamente discretas/quantizadas; transições entre níveis emitem radiação com energias específicas características de cada nuclídeo.",
      "Está incorreta: não existem estruturas mecânicas nem calhas metálicas no interior do núcleo; os nucleões movem-se num campo de potencial médio quântico auto-consistente."
    ],
    "nursingApplication": "O enfermeiro compreende a razão pela qual a radiação gama de origem nuclear é incomparavelmente mais energética do que a luz visível."
  },
  {
    "id": 6142,
    "topicId": 6,
    "question": "Durante os cuidados de enfermagem e manipulação de radioisótopos hospitalares, como se manifesta na prática clínica o conceito de 'quantização dos níveis energéticos nucleares'?",
    "options": [
      "A quantização nuclear impede que os enfermeiros leiam o rótulo dos frascos de radiofármacos sem utilizar lupas especiais de aumento óptico polarizadas no escuro.",
      "Essa propriedade física faz com que a temperatura corporal do doente aumente dez graus Celsius imediatamente após a realização de uma cintigrafia pulmonar no leito.",
      "A quantização dos níveis nucleares faz com que cada radionuclídeo emita fotões gama com energias bem definidas, permitindo a sua identificação precisa por espectrometria gama.",
      "A quantização dos níveis nucleares permite dispensar a calibração periódica dos ativímetros e detetores de cintilação usados no serviço de medicina nuclear."
    ],
    "correctIndex": 2,
    "explanation": "A aplicação na enfermagem para quantização dos níveis energéticos nucleares baseia-se no princípio: O enfermeiro compreende a razão pela qual a radiação gama de origem nuclear é incomparavelmente mais energética do que a luz visível. Esta prática garante a segurança radiológica do doente e da equipa.",
    "distractorAnalysis": [
      "Está incorreta: fotões gama emitidos têm energias monoenergéticas características (ex: 140 keV no 99mTc, 364 keV no 131I), funcionando como 'impressões digitais' inequívocas em detetores.",
      "Está incorreta: a quantização quântica não impede a leitura de rótulos impressos; rótulos de radiofármacos são inspecionados visualmente com boa iluminação e proteção plumbífera.",
      "Está incorreta: exames de medicina nuclear utilizam doses traçadoras mínimas sem qualquer efeito pirogénico; ativímetros exigem calibrações de controlo de qualidade obrigatórias."
    ],
    "nursingApplication": "O enfermeiro compreende a razão pela qual a radiação gama de origem nuclear é incomparavelmente mais energética do que a luz visível."
  },
  {
    "id": 6143,
    "topicId": 6,
    "question": "Um enfermeiro estuda os fundamentos teóricos da estabilidade da matéria e as propriedades físicas em 'quantização dos níveis energéticos nucleares'. Qual das seguintes afirmações expressa a relação física correta?",
    "options": [
      "A transição entre dois níveis energéticos nucleares é sempre acompanhada pela destruição definitiva de três protões do núcleo para gerar radiação térmica visível.",
      "A energia dos fotões gama emitidos em transições nucleares é contínua e indistinguível do espetro contínuo de radiação de travamento gerado em ampolas radiológicas.",
      "A diferença de energia entre estados nucleares é da ordem de frações de microeletrão-volt, sendo menor do que a energia das transições entre órbitas moleculares térmicas.",
      "A desexcitação eletromagnética entre níveis quânticos nucleares ocorre com emissão de um fotão gama com energia E_γ = E_inicial - E_final (subtraída a ínfima energia de recuo nuclear)."
    ],
    "correctIndex": 3,
    "explanation": "A análise teórica e experimental confirma que No entanto, enquanto as transições eletrónicas orbitais envolvem energias na escala de alguns eV a keV (luz e Raios X), as transições entre estados nucleares envolvem energias na escala de centenas de keV a vários MeV. O domínio destes conceitos permite ao enfermeiro compreender as bases da física nuclear hospitalar.",
    "distractorAnalysis": [
      "Está incorreta: a conservação de energia dita E_γ ≈ ΔE = E_i - E_f; devido à grande massa nuclear, a energia de recuo E_R = E_γ²/(2Mc²) é tipicamente desprezável face a ΔE.",
      "Está incorreta: na transição gama não há transmutação ou destruição de nucleões (Z e A mantêm-se constantes); apenas a configuração quântica do núcleo se rearranja para o estado de menor energia.",
      "Está incorreta: o espetro gama é estritamente discreto (linhas de energia fixas), ao contrário do espetro contínuo de Bremsstrahlung de raios X."
    ],
    "nursingApplication": "O enfermeiro compreende a razão pela qual a radiação gama de origem nuclear é incomparavelmente mais energética do que a luz visível."
  },
  {
    "id": 6144,
    "topicId": 6,
    "question": "Na física do núcleo atómico e das forças nucleares aplicada ao contexto dos radiofármacos e saúde, em relação a 'mecanismo da emissão de radiação gama (γ)', qual é a fundamentação científica exata?",
    "options": [
      "A emissão de radiação gama (γ) é a transição radiativa eletromagnética entre dois estados nucleares excitados do mesmo nuclídeo, mantendo inalterados tanto Z como A.",
      "A emissão gama consiste na ejeção de um neutrão rápido a partir da periferia do núcleo atómico, transformando o átomo original num isótopo de massa atómica inferior.",
      "A radiação gama é composta por partículas carregadas positivamente que possuem massa de repouso quatro vezes superior à do protão livre nas experiências laboratoriais.",
      "A emissão gama é gerada exclusivamente pela passagem de corrente alternada através de resistências elétricas montadas no interior dos detetores de cintilação clínica."
    ],
    "correctIndex": 0,
    "explanation": "Em física nuclear médica, mecanismo da emissão de radiação gama (γ) explica-se pelo facto de que após um decaimento alfa ou beta, o núcleo filho resultante fica frequentemente num estado nuclear excitado de maior energia ($^A_Z\\text{X}^*$). A transição do núcleo excitado para o seu estado fundamental ocorre quase instantaneamente (em 10⁻¹² segundos), com a emissão da energia excedente sob a forma de um fotão gama puramente eletromagnético.",
    "distractorAnalysis": [
      "Está incorreta: os raios gama são fotões de alta energia (radiação eletromagnética, sem carga nem massa de repouso); como nenhum nucleão é ejetado, Z e A não sofrem alteração.",
      "Está incorreta: radiação gama não contém neutrões nem partículas com massa de repouso; neutrões são emissões corpusculares de reações nucleares ou fissão.",
      "Está incorreta: a emissão gama é um processo nuclear intrínseco de desexcitação e não um artefacto de circuitos de corrente alternada em detetores."
    ],
    "nursingApplication": "A emissão gama não altera nem o número de protões Z nem o número de massa A do elemento químico original."
  },
  {
    "id": 6145,
    "topicId": 6,
    "question": "Durante os cuidados de enfermagem e manipulação de radioisótopos hospitalares, como se manifesta na prática clínica o conceito de 'mecanismo da emissão de radiação gama (γ)'?",
    "options": [
      "O elevado poder ionizante das emissões gama superficiais queima a pele do doente em poucos segundos se este não for mergulhado em água fria após o exame.",
      "A ausência de carga elétrica e a alta energia dos fotões gama conferem-lhe grande poder de penetração, permitindo a deteção externa do traçador no corpo com câmaras gama.",
      "A radiação gama é completamente bloqueada por uma simples folha de papel de filtro, dispensando a colocação de biombos de chumbo nas salas de administração.",
      "A emissão gama faz com que os cateteres venosos fiquem opacos à passagem de líquidos, impedindo a lavagem do lúmen com soro fisiológico heparinizado."
    ],
    "correctIndex": 1,
    "explanation": "A aplicação na enfermagem para mecanismo da emissão de radiação gama (γ) baseia-se no princípio: A emissão gama não altera nem o número de protões Z nem o número de massa A do elemento químico original. Esta prática garante a segurança radiológica do doente e da equipa.",
    "distractorAnalysis": [
      "Está incorreta: por serem neutros, os fotões gama interagem por efeito fotoelétrico, Compton e formação de pares; atravessam tecidos biológicos e saem do corpo para formar imagens.",
      "Está incorreta: a radiação gama tem baixa LET comparada com alfas ou betas; não produz queimaduras agudas imediatas com doses de diagnóstico imagiológico.",
      "Está incorreta: a folha de papel barra apenas partículas alfa; fotões gama exigem centímetros de chumbo para atenuação substancial; cateteres funcionam normalmente."
    ],
    "nursingApplication": "A emissão gama não altera nem o número de protões Z nem o número de massa A do elemento químico original."
  },
  {
    "id": 6146,
    "topicId": 6,
    "question": "Um enfermeiro estuda os fundamentos teóricos da estabilidade da matéria e as propriedades físicas em 'mecanismo da emissão de radiação gama (γ)'. Qual das seguintes afirmações expressa a relação física correta?",
    "options": [
      "A emissão gama ocorre unicamente se o núcleo atómico for bombardeado por feixes contínuos de luz solar concentrada por lentes convergentes na câmara quente.",
      "A radiação gama dissipa a sua energia nos tecidos biológicos transformando-se instantaneamente em ondas acústicas de ultrassons audíveis pelo profissional de saúde.",
      "A emissão gama compete com a Conversão Interna (CI), processo alternativo no qual a energia de excitação nuclear é transferida diretamente por Coulomb para um eletrão orbital.",
      "A velocidade de propagação dos fotões de radiação gama no vácuo é cem vezes inferior à velocidade da luz visível devido à elevada densidade do campo gravítico nuclear."
    ],
    "correctIndex": 2,
    "explanation": "A análise teórica e experimental confirma que A transição do núcleo excitado para o seu estado fundamental ocorre quase instantaneamente (em 10⁻¹² segundos), com a emissão da energia excedente sob a forma de um fotão gama puramente eletromagnético. O domínio destes conceitos permite ao enfermeiro compreender as bases da física nuclear hospitalar.",
    "distractorAnalysis": [
      "Está incorreta: na Conversão Interna, a energia ΔE ejeta um eletrão atómico (geralmente da camada K) com energia E_c = ΔE - B_e; a razão de conversão interna α = N_e / N_γ mede a competição.",
      "Está incorreta: a transição gama é um processo de decaimento espontâneo quântico que não necessita de iluminação solar externa ou lentes ópticas.",
      "Está incorreta: fotões gama viajam à velocidade da luz no vácuo (c ≈ 3 × 10⁸ m/s) e interagem por processos quânticos ionizantes com os eletrões do meio tecidual."
    ],
    "nursingApplication": "A emissão gama não altera nem o número de protões Z nem o número de massa A do elemento químico original."
  },
  {
    "id": 6147,
    "topicId": 6,
    "question": "Na física do núcleo atómico e das forças nucleares aplicada ao contexto dos radiofármacos e saúde, em relação a 'conceito de Isómero Nuclear e estados metaestáveis (m)', qual é a fundamentação científica exata?",
    "options": [
      "Um isómero nuclear é um composto químico orgânico que possui a mesma rotação óptica dextrógira mas difere no número de moléculas de glicose ligadas à sua cadeia carbónica.",
      "Estados metaestáveis são núcleos atómicos que explodem invariavelmente decorridos exatamente dez segundos após a sua síntese química em laboratórios farmacêuticos.",
      "Isómeros nucleares apresentam número atómico Z diferente e número de massa A diferente do seu estado fundamental, correspondendo a elementos químicos totalmente distintos.",
      "Um isómero nuclear é um estado excitado metaestável com semivida mensurável (superior a nanossegundos), denotado por 'm' (como ⁹⁹ᵐTc), resultante de transição com proibição quântica."
    ],
    "correctIndex": 3,
    "explanation": "Em física nuclear médica, conceito de Isómero Nuclear e estados metaestáveis (m) explica-se pelo facto de que em alguns núcleos atómicos específicos, a desexcitação gama é atrasada por regras de seleção quântica de spin, resultando num estado excitado metaestável com semivida mensurável em minutos ou horas. Estes estados excitados de longa duração são designados por 'isómeros nucleares' e identificados pela letra minúscula 'm' a seguir ao número de massa (por exemplo, ⁹⁹ᵐTc).",
    "distractorAnalysis": [
      "Está incorreta: se a transição entre o estado excitado e o fundamental exigir grande variação de spin (ΔI grande) e pequena energia (ΔE pequena), a probabilidade cai e a semivida alonga-se (isomerismo).",
      "Está incorreta: isomeria óptica e química são conceitos de orbitais moleculares; isómeros nucleares partilham rigorosamente os mesmos Z e A, diferindo no estado de energia nuclear.",
      "Está incorreta: estados metaestáveis têm decaimento puramente estatístico governado pela lei exponencial e emitem fotões por transição isomérica suave sem explosão."
    ],
    "nursingApplication": "O Tecnécio-99m possui semivida de 6 horas, o que permite o tempo ideal para radiomarcação, injeção pelo enfermeiro e aquisição imagiológica em câmara gama antes do decaimento total."
  },
  {
    "id": 6148,
    "topicId": 6,
    "question": "Durante os cuidados de enfermagem e manipulação de radioisótopos hospitalares, como se manifesta na prática clínica o conceito de 'conceito de Isómero Nuclear e estados metaestáveis (m)'?",
    "options": [
      "A metaestabilidade do ⁹⁹ᵐTc (T₁/₂ = 6,0 horas) permite preparar e eluir o radiofármaco na radiofarmácia, administrá-lo ao doente e realizar cintigrafias com dose mínima.",
      "O estado metaestável do tecnécio exige que o enfermeiro administre a injeção em menos de um décimo de segundo sob risco de coagulação imediata do fármaco na seringa.",
      "Os isómeros nucleares hospitalares devem ser conservados em recipientes de madeira maciça para evitar que o campo gravitacional do quarto perturbe os spins nucleares.",
      "A presença do estado 'm' impede a eliminação renal do radiofármaco, exigindo a realização de hemodiálise em todos os utentes no final de exames de medicina nuclear."
    ],
    "correctIndex": 0,
    "explanation": "A aplicação na enfermagem para conceito de Isómero Nuclear e estados metaestáveis (m) baseia-se no princípio: O Tecnécio-99m possui semivida de 6 horas, o que permite o tempo ideal para radiomarcação, injeção pelo enfermeiro e aquisição imagiológica em câmara gama antes do decaimento total. Esta prática garante a segurança radiológica do doente e da equipa.",
    "distractorAnalysis": [
      "Está incorreta: a semivida de 6 horas do ⁹⁹ᵐTc é perfeita do ponto de vista logístico e dosimétrico: permite manipulação, biodistribuição e aquisição de imagem sem irradiar o doente por dias.",
      "Está incorreta: a semivida é de 6 horas e não de décimos de segundo; a injeção realiza-se com técnica asséptica e velocidade venosa normal sem qualquer risco de coagulação física súbita.",
      "Está incorreta: blindagens de chumbo ou tungsténio são essenciais; madeira não atenua radiação gama de 140 keV; a eliminação renal ocorre espontaneamente sem necessidade de diálise."
    ],
    "nursingApplication": "O Tecnécio-99m possui semivida de 6 horas, o que permite o tempo ideal para radiomarcação, injeção pelo enfermeiro e aquisição imagiológica em câmara gama antes do decaimento total."
  },
  {
    "id": 6149,
    "topicId": 6,
    "question": "Um enfermeiro estuda os fundamentos teóricos da estabilidade da matéria e as propriedades físicas em 'conceito de Isómero Nuclear e estados metaestáveis (m)'. Qual das seguintes afirmações expressa a relação física correta?",
    "options": [
      "A longa semivida dos estados metaestáveis resulta da atração eletrostática exercida pelos eletrões da camada de condução sobre os protões livres do núcleo atómico.",
      "O atraso na transição do estado metaestável decorre de elevados valores de variação de momento angular (ΔI) e baixas energias de transição, que reduzem a probabilidade de emissão.",
      "Os estados metaestáveis mantêm-se excitados porque o núcleo atómico absorve continuamente fotões de infravermelhos a partir do ar condicionado da sala de exames.",
      "A existência de isómeros nucleares é impedida em todos os núcleos que contenham um número ímpar de nucleões devido ao princípio de exclusão de Pauli."
    ],
    "correctIndex": 1,
    "explanation": "A análise teórica e experimental confirma que Estes estados excitados de longa duração são designados por 'isómeros nucleares' e identificados pela letra minúscula 'm' a seguir ao número de massa (por exemplo, ⁹⁹ᵐTc). O domínio destes conceitos permite ao enfermeiro compreender as bases da física nuclear hospitalar.",
    "distractorAnalysis": [
      "Está incorreta: as fórmulas de transição de multipolo de Weisskopf mostram que a probabilidade de transição cai drasticamente com a ordem do multipolo L e potências de ΔE (λ ∝ (ΔE)^(2L+1)).",
      "Está incorreta: a transição isomérica é um fenómeno puramente intranuclear mediado pelas interações eletromagnéticas internas, independente de eletrões de condução ou temperatura ambiente.",
      "Está incorreta: muitos isómeros nucleares importantes possuem A ímpar (como o próprio ⁹⁹ᵐTc com A = 99 nucleões), onde nucleões desemparelhados geram estados de spin contrastantes."
    ],
    "nursingApplication": "O Tecnécio-99m possui semivida de 6 horas, o que permite o tempo ideal para radiomarcação, injeção pelo enfermeiro e aquisição imagiológica em câmara gama antes do decaimento total."
  },
  {
    "id": 6150,
    "topicId": 6,
    "question": "Na física do núcleo atómico e das forças nucleares aplicada ao contexto dos radiofármacos e saúde, em relação a 'vantagem clínica ímpar do Tecnécio-99m em diagnóstico', qual é a fundamentação científica exata?",
    "options": [
      "O Tecnécio-99m é ideal porque emite partículas alfa de alta energia que destroem as células tumorais superficiais da pele sem gerar qualquer radiação eletromagnética gama.",
      "A principal vantagem do ⁹⁹ᵐTc reside no facto de não emitir qualquer tipo de radiação ionizante, permitindo realizar cintigrafias com segurança idêntica à de fotografias ópticas.",
      "O ⁹⁹ᵐTc conjuga emissão gama quase pura de 140 keV (excelente penetração e resolução na câmara gama, sem dose beta associada) com semivida de 6 h e fácil eluição diária.",
      "O Tecnécio-99m apresenta uma semivida física de quatrocentos anos, permitindo que a mesma dose injetada seja monitorizada ao longo de toda a vida do doente sem decaimento."
    ],
    "correctIndex": 2,
    "explanation": "Em física nuclear médica, vantagem clínica ímpar do Tecnécio-99m em diagnóstico explica-se pelo facto de que o ⁹⁹ᵐTc emite fotões gama monocromáticos de 140 keV com ausência praticamente total de partículas beta corpusculares associadas. Os 140 keV têm energia suficiente para escapar do corpo do doente e atingir os cristais detetores da câmara gama, mas não causam a dose desnecessária de radiação tecidual local que partículas beta causariam.",
    "distractorAnalysis": [
      "Está incorreta: 140 keV é ideal para cristais de NaI(Tl) das gama-câmaras; sem emissão beta primária a dose absorvida no doente é mínima; T1/2 = 6,0 h é compatível com a rotina clínica diária.",
      "Está incorreta: o ⁹⁹ᵐTc não é um emissor alfa; é um emissor gama puro por transição isomérica (98,6% de fotões de 140,5 keV); emissores alfa são usados em terapia e não no SPECT comum.",
      "Está incorreta: o ⁹⁹ᵐTc emite radiação ionizante (fotões gama de 140 keV); a sua semivida é de 6 horas (e não 400 anos), decaindo para o estado quase estável ⁹⁹Tc (T1/2 = 2,1·10⁵ anos)."
    ],
    "nursingApplication": "O enfermeiro sabe que o ⁹⁹ᵐTc é o radiofármaco 'cavalo de batalha' da medicina nuclear, usado em mais de 80% de todos os exames cintigráficos cardíacos, ósseos e renais."
  },
  {
    "id": 6151,
    "topicId": 6,
    "question": "Durante os cuidados de enfermagem e manipulação de radioisótopos hospitalares, como se manifesta na prática clínica o conceito de 'vantagem clínica ímpar do Tecnécio-99m em diagnóstico'?",
    "options": [
      "A energia do tecnécio exige que os enfermeiros utilizem escafandros espaciais pressurizados com oxigénio para evitar a contaminação radioativa dos alvéolos pulmonares.",
      "O uso de ⁹⁹ᵐTc permite dispensar o consentimento informado e as regras de radioproteção hospitalar porque a radiação emitida não interage com células humanas vivas.",
      "A principal vantagem do tecnécio na enfermaria é a sua capacidade de eliminar a dor articular em idosos quando aplicado por fricção tópica na pele dos membros inferiores.",
      "A energia de 140 keV do ⁹⁹ᵐTc minimiza a dose absorvida pelo doente (sem radiação particulada beta primária) e permite aos profissionais manuseamento seguro com blindagens leves."
    ],
    "correctIndex": 3,
    "explanation": "A aplicação na enfermagem para vantagem clínica ímpar do Tecnécio-99m em diagnóstico baseia-se no princípio: O enfermeiro sabe que o ⁹⁹ᵐTc é o radiofármaco 'cavalo de batalha' da medicina nuclear, usado em mais de 80% de todos os exames cintigráficos cardíacos, ósseos e renais. Esta prática garante a segurança radiológica do doente e da equipa.",
    "distractorAnalysis": [
      "Está incorreta: 140 keV é facilmente atenuado por pequenas espessuras de chumbo ou tungsténio (~0,3 mm de camada hemirredutora), permitindo excelente radioproteção do pessoal.",
      "Está incorreta: o ⁹⁹ᵐTc é administrado por via venosa em solução aquosa; não volatiliza nem exige escafandros pressurizados, bastando luvas, avental e proteção de seringa.",
      "Está incorreta: trata-se de radiação ionizante; o consentimento informado, a justificação do exame e a otimização dosimétrica continuam a ser imperativos legais e éticos."
    ],
    "nursingApplication": "O enfermeiro sabe que o ⁹⁹ᵐTc é o radiofármaco 'cavalo de batalha' da medicina nuclear, usado em mais de 80% de todos os exames cintigráficos cardíacos, ósseos e renais."
  },
  {
    "id": 6152,
    "topicId": 6,
    "question": "Um enfermeiro estuda os fundamentos teóricos da estabilidade da matéria e as propriedades físicas em 'vantagem clínica ímpar do Tecnécio-99m em diagnóstico'. Qual das seguintes afirmações expressa a relação física correta?",
    "options": [
      "O ⁹⁹ᵐTc decai por transição isomérica (98,6%) emitindo fotões de 140,5 keV para o estado quase estável ⁹⁹Tc, que apresenta semivida física de duzentos e dez mil anos.",
      "O decaimento do ⁹⁹ᵐTc ocorre por emissão alfa de alta velocidade, reduzindo o seu número atómico em duas unidades para formar um isótopo estável de nióbio metálico.",
      "A semivida de seis horas do ⁹⁹ᵐTc é determinada pela velocidade a que o soro fisiológico é infundido através da torneira de três vias do cateter venoso periférico.",
      "O núcleo do ⁹⁹ᵐTc atinge o estado fundamental através da absorção de protões livres que circulam na corrente sanguínea do doente durante a fase de circulação sistémica."
    ],
    "correctIndex": 0,
    "explanation": "A análise teórica e experimental confirma que Os 140 keV têm energia suficiente para escapar do corpo do doente e atingir os cristais detetores da câmara gama, mas não causam a dose desnecessária de radiação tecidual local que partículas beta causariam. O domínio destes conceitos permite ao enfermeiro compreender as bases da física nuclear hospitalar.",
    "distractorAnalysis": [
      "Está incorreta: a transição isomérica ⁹⁹ᵐTc -> ⁹⁹Tc liberta 140,5 keV; o ⁹⁹Tc resultante tem semivida extremamente longa (2,1 × 10⁵ anos), conferindo atividade residual desprezável no organismo.",
      "Está incorreta: o ⁹⁹ᵐTc não decai por emissão alfa; é um estado excitado do tecnécio que liberta energia sob a forma de radiação gama pura sem alterar Z (Z = 43).",
      "Está incorreta: a semivida física é uma propriedade quântica nuclear intrínseca invariante com perfusões de soro ou variáveis fisiológicas macroscópicas."
    ],
    "nursingApplication": "O enfermeiro sabe que o ⁹⁹ᵐTc é o radiofármaco 'cavalo de batalha' da medicina nuclear, usado em mais de 80% de todos os exames cintigráficos cardíacos, ósseos e renais."
  },
  {
    "id": 6153,
    "topicId": 6,
    "question": "Na física do núcleo atómico e das forças nucleares aplicada ao contexto dos radiofármacos e saúde, em relação a 'conversão interna (CI) como alternativa à emissão gama', qual é a fundamentação científica exata?",
    "options": [
      "A Conversão Interna consiste na transformação de um neutrão do núcleo num eletrão livre sem a intervenção de forças nucleares ou conservação da carga elétrica total.",
      "Na Conversão Interna, a energia de excitação nuclear é transferida diretamente por acoplamento eletromagnético a um eletrão orbital (K ou L), que é ejetado com energia cinética.",
      "Nesse processo, a energia do núcleo é integralmente convertida em fotões de luz ultravioleta que estimulam a síntese de melanina na epiderme dos profissionais de saúde.",
      "A Conversão Interna é um processo puramente mecânico no qual o núcleo atómico colapsa sobre si mesmo gerando um microburaco negro estável no interior da célula biológica."
    ],
    "correctIndex": 1,
    "explanation": "Em física nuclear médica, conversão interna (CI) como alternativa à emissão gama explica-se pelo facto de que em vez de emitir um fotão gama, o núcleo excitado transfere diretamente a sua energia de desexcitação para um eletrão orbital da camada K mais interna, ejetando-o do átomo (eletrão de conversão interna). A vacância criada na camada K é preenchida por eletrões superiores, originando emissão secundária de Raios X característicos ou eletrões de Auger de baixíssima energia e alto dano celular local.",
    "distractorAnalysis": [
      "Está incorreta: a energia de excitação nuclear ΔE é transferida para o eletrão orbital: E_cinética = ΔE - B_eletrão; o eletrão de conversão é monoenergético.",
      "Está incorreta: a conversão interna não transmuta nucleões; é um processo eletromagnético que compete com a emissão gama entre estados quânticos do mesmo nuclídeo.",
      "Está incorreta: a CI não gera luz ultravioleta nem buracos negros; a ejeção do eletrão orbital deixa uma vacância atómica que origina raios X característicos e eletrões Auger."
    ],
    "nursingApplication": "Eletrões de Auger gerados por conversão interna têm sido explorados para terapia radionuclídica dirigida ao DNA celular de células tumorais."
  },
  {
    "id": 6154,
    "topicId": 6,
    "question": "Durante os cuidados de enfermagem e manipulação de radioisótopos hospitalares, como se manifesta na prática clínica o conceito de 'conversão interna (CI) como alternativa à emissão gama'?",
    "options": [
      "A ocorrência de conversão interna impede a realização de cintigrafias porque neutraliza todos os detetores eletrónicos das gama-câmaras através de descargas estáticas.",
      "O enfermeiro deve administrar agentes quelantes orais para recolher os eletrões de conversão interna que flutuam no ar ambiente da enfermaria de oncologia médica.",
      "Os eletrões de conversão interna e os eletrões Auger resultantes aumentam a dose biológica local absorvida pelo tecido, sendo explorados na terapia celular dirigida.",
      "A conversão interna faz com que as luvas cirúrgicas de nitrilo derretam instantaneamente quando o profissional toca na pele do doente após a injeção do traçador."
    ],
    "correctIndex": 2,
    "explanation": "A aplicação na enfermagem para conversão interna (CI) como alternativa à emissão gama baseia-se no princípio: Eletrões de Auger gerados por conversão interna têm sido explorados para terapia radionuclídica dirigida ao DNA celular de células tumorais. Esta prática garante a segurança radiológica do doente e da equipa.",
    "distractorAnalysis": [
      "Está incorreta: a emissão de eletrões de curto alcance (conversão e cascatas Auger) deposita densidade ionizante intensa na vizinhança imediata (ex: ¹¹¹In ou ¹²⁵I dirigidos ao ADN tumoral).",
      "Está incorreta: a CI compete com o gama; embora reduza ligeiramente o número de fotões gama úteis para imagem, não interfere eletrostaticamente com as gama-câmaras.",
      "Está incorreta: eletrões emitidos têm alcance microscópico em tecidos e não flutuam no ar nem danificam luvas hospitalares por efeitos térmicos."
    ],
    "nursingApplication": "Eletrões de Auger gerados por conversão interna têm sido explorados para terapia radionuclídica dirigida ao DNA celular de células tumorais."
  },
  {
    "id": 6155,
    "topicId": 6,
    "question": "Um enfermeiro estuda os fundamentos teóricos da estabilidade da matéria e as propriedades físicas em 'conversão interna (CI) como alternativa à emissão gama'. Qual das seguintes afirmações expressa a relação física correta?",
    "options": [
      "O coeficiente de conversão interna é rigorosamente constante e igual a 1,0 para todos os núcleos atómicos e níveis de excitação da física nuclear moderna.",
      "A conversão interna ocorre com maior probabilidade em núcleos leves com baixo número atómico e energias de transição extremamente elevadas na escala dos GeV.",
      "O eletrão ejetado por conversão interna apresenta uma distribuição de energia cinética contínua que varia de forma proporcional à pressão atmosférica da sala.",
      "O coeficiente de conversão interna (α = N_e / N_γ) cresce acentuadamente com o número atómico Z (aproximadamente como Z³) e diminui com o aumento da energia de transição ΔE."
    ],
    "correctIndex": 3,
    "explanation": "A análise teórica e experimental confirma que A vacância criada na camada K é preenchida por eletrões superiores, originando emissão secundária de Raios X característicos ou eletrões de Auger de baixíssima energia e alto dano celular local. O domínio destes conceitos permite ao enfermeiro compreender as bases da física nuclear hospitalar.",
    "distractorAnalysis": [
      "Está incorreta: α ∝ Z³ / (ΔE)^(L+5/2); logo a conversão interna é muito mais provável em nuclídeos pesados (Z elevado) e para transições de baixa energia e alta multipolaridade.",
      "Está incorreta: o coeficiente α varia entre valores insignificantes (<10⁻⁴) em transições dipolares de alta energia até valores superiores a 100 em transições de baixa energia.",
      "Está incorreta: o eletrão de conversão é estritamente monoenergético (E_c = ΔE - B), uma vez que tanto os estados nucleares como as órbitas eletrónicas são quantizados."
    ],
    "nursingApplication": "Eletrões de Auger gerados por conversão interna têm sido explorados para terapia radionuclídica dirigida ao DNA celular de células tumorais."
  },
  {
    "id": 6156,
    "topicId": 6,
    "question": "Na física do núcleo atómico e das forças nucleares aplicada ao contexto dos radiofármacos e saúde, em relação a 'mecanismo da fissão nuclear induzida por neutrões térmicos', qual é a fundamentação científica exata?",
    "options": [
      "Neutrões térmicos (com energia cinética de ~0,025 eV à temperatura ambiente) apresentam elevada secção eficaz de captura pelo ²³⁵U, induzindo a sua cisão com rendimento ótimo.",
      "A fissão nuclear induzida por neutrões térmicos exige que estes viajem à velocidade da luz no vácuo para que possam penetrar na cavidade central do átomo pesado.",
      "Os neutrões térmicos provocam a fusão imediata de dois núcleos de urânio, formando um elemento superpesado instável que emite exclusivamente luz infravermelha.",
      "A interação de neutrões térmicos com o combustível nuclear congela instantaneamente a água pesada utilizada como moderador nos circuitos primários de arrefecimento."
    ],
    "correctIndex": 0,
    "explanation": "Em física nuclear médica, mecanismo da fissão nuclear induzida por neutrões térmicos explica-se pelo facto de que um neutrão de baixa energia (neutrão térmico, ~0,025 eV) colide e é absorvido por um núcleo físsil de Urânio-235, formando o estado instável ²³⁶U*, que oscila e divide-se em dois núcleos filhos menores e 2 a 3 neutrões rápidos. A reação em cadeia auto-sustentada é controlada em reatores nucleares através de barras absorventes de cádmio ou boro que absorvem o excesso de neutrões.",
    "distractorAnalysis": [
      "Está incorreta: a secção eficaz de fissão do U-235 para neutrões térmicos (~0,025 eV) é de cerca de 585 barns, cerca de mil vezes maior do que para neutrões rápidos de 1 MeV (lei 1/v).",
      "Está incorreta: neutrões térmicos são extremamente lentos (velocidade ~2200 m/s); a sua baixa velocidade aumenta o tempo de interação com o núcleo alvo, facilitando a captura.",
      "Está incorreta: o processo é de cisão/fissão e não fusão; liberta calor massivo por energia cinética dos fragmentos de fissão (~168 MeV), aquecendo o fluido de arrefecimento."
    ],
    "nursingApplication": "Esta fissão controlada é a fábrica primordial que abastece os hospitais mundiais com radioisótopos cruciais."
  },
  {
    "id": 6157,
    "topicId": 6,
    "question": "Durante os cuidados de enfermagem e manipulação de radioisótopos hospitalares, como se manifesta na prática clínica o conceito de 'mecanismo da fissão nuclear induzida por neutrões térmicos'?",
    "options": [
      "A fissão por neutrões térmicos é realizada na sala de espera de radiologia para manter o ambiente aquecido e confortável para os familiares dos doentes idosos.",
      "Os reatores nucleares de investigação utilizam neutrões térmicos para fissurar alvos de ²³⁵U e produzir os radioisótopos precursores usados na rotina dos hospitais mundiais.",
      "O mecanismo de fissão térmica obriga o enfermeiro a utilizar roupas impermeáveis de borracha espessa para evitar a absorção cutânea de neutrões livres no piso.",
      "Os neutrões térmicos são administrados por via endovenosa direta em doentes com insuficiência renal para restaurar a filtração glomerular nos nefrónios."
    ],
    "correctIndex": 1,
    "explanation": "A aplicação na enfermagem para mecanismo da fissão nuclear induzida por neutrões térmicos baseia-se no princípio: Esta fissão controlada é a fábrica primordial que abastece os hospitais mundiais com radioisótopos cruciais. Esta prática garante a segurança radiológica do doente e da equipa.",
    "distractorAnalysis": [
      "Está incorreta: reatores de investigação dedicados (ex: BR2 na Bélgica, Safari-1 na África do Sul, OPAL na Austrália) produzem a quase totalidade do Mo-99 e I-131 para a medicina nuclear.",
      "Está incorreta: a fissão ocorre estritamente no núcleo de reatores nucleares com barreiras de contenção rigorosas, nunca em salas hospitalares ou perto de doentes.",
      "Está incorreta: borracha não absorve neutrões eficientemente; neutrões nunca são injetados em circulação venosa; a BNCT usa feixes externos colimados sob condições ultraespecíficas."
    ],
    "nursingApplication": "Esta fissão controlada é a fábrica primordial que abastece os hospitais mundiais com radioisótopos cruciais."
  },
  {
    "id": 6158,
    "topicId": 6,
    "question": "Um enfermeiro estuda os fundamentos teóricos da estabilidade da matéria e as propriedades físicas em 'mecanismo da fissão nuclear induzida por neutrões térmicos'. Qual das seguintes afirmações expressa a relação física correta?",
    "options": [
      "A fissão induzida por neutrões térmicos é um processo que absorve mais de quatrocentos megajoules de energia do ambiente exterior para manter a integridade dos fragmentos.",
      "Na fissão térmica do urânio, todos os produtos formados são núcleos atómicos estáveis com semivida infinita, não se gerando qualquer tipo de resíduo radioativo.",
      "A energia de ligação do neutrão adicionado excita o núcleo de ²³⁶U* acima da barreira de fissão (~5,7 MeV), provocando oscilações de deformação que culminam na bipartição.",
      "A secção eficaz de fissão do Urânio-235 é inversamente proporcional ao volume de líquido extracelular presente nos tecidos musculares dos animais mamíferos."
    ],
    "correctIndex": 2,
    "explanation": "A análise teórica e experimental confirma que A reação em cadeia auto-sustentada é controlada em reatores nucleares através de barras absorventes de cádmio ou boro que absorvem o excesso de neutrões. O domínio destes conceitos permite ao enfermeiro compreender as bases da física nuclear hospitalar.",
    "distractorAnalysis": [
      "Está incorreta: a captura de um neutrão pelo ²³⁵U liberta cerca de 6,5 MeV de energia de ligação, superando a barreira de fissão (~5,7 MeV) e permitindo a cisão térmica imediata.",
      "Está incorreta: a fissão liberta energia (~200 MeV por evento); os fragmentos herdam a alta razão N/Z do urânio, nascendo fortemente radioativos e emissores beta menos.",
      "Está incorreta: secções eficazes nucleares dependem estritamente da estrutura quântica do núcleo alvo e da energia dos neutrões, sem ligação a líquidos biológicos mamíferos."
    ],
    "nursingApplication": "Esta fissão controlada é a fábrica primordial que abastece os hospitais mundiais com radioisótopos cruciais."
  },
  {
    "id": 6159,
    "topicId": 6,
    "question": "Na física do núcleo atómico e das forças nucleares aplicada ao contexto dos radiofármacos e saúde, em relação a 'produção de Molibdénio-99 (⁹⁹Mo) como produto de fissão do ²³⁵U', qual é a fundamentação científica exata?",
    "options": [
      "O Molibdénio-99 é extraído diretamente de pedreiras de granito natural através da filtração de poeiras minerais por membranas de acetato de celulose hospitalares.",
      "O Molibdénio-99 é sintetizado através da queima de barras de carvão mineral puro em fornos industriais mantidos à temperatura de quinhentos graus Celsius.",
      "A produção de ⁹⁹Mo por fissão gera exclusivamente átomos estáveis que não sofrem qualquer tipo de decaimento ou emissão radioativa durante a armazenagem.",
      "O Molibdénio-99 é produzido com elevado rendimento de fissão (~6,1%) na cisão do ²³⁵U, sendo separado quimicamente com altíssima atividade específica (carrier-free)."
    ],
    "correctIndex": 3,
    "explanation": "Em física nuclear médica, produção de Molibdénio-99 (⁹⁹Mo) como produto de fissão do ²³⁵U explica-se pelo facto de que alvos de Urânio-235 são bombardeados com neutrões térmicos no núcleo de reatores nucleares de investigação, gerando Molibdénio-99 com um rendimento de fissão de cerca de 6%. O ⁹⁹Mo é quimicamente extraído e purificado em laboratórios de alta segurança radiológica e transferido para colunas cromatográficas de alumina em geradores comerciais.",
    "distractorAnalysis": [
      "Está incorreta: o Mo-99 de fissão é obtido com alta pureza radioquímica e elevada atividade específica, sendo indispensável para carregar as colunas de alumina dos geradores clínicos.",
      "Está incorreta: o Mo-99 não existe na natureza em minerais (a sua semivida é de apenas 66 horas); tem de ser produzido artificialmente em reatores nucleares.",
      "Está incorreta: reações químicas ou fornos de combustão de carvão não alteram núcleos atómicos; a transmutação nuclear requer reatores ou aceleradores de partículas."
    ],
    "nursingApplication": "O enfermeiro reconhece que eventuais paragens em reatores nucleares internacionais provocam escassez imediata de tecnécio nos serviços de medicina nuclear hospitalares."
  },
  {
    "id": 6160,
    "topicId": 6,
    "question": "Durante os cuidados de enfermagem e manipulação de radioisótopos hospitalares, como se manifesta na prática clínica o conceito de 'produção de Molibdénio-99 (⁹⁹Mo) como produto de fissão do ²³⁵U'?",
    "options": [
      "Como o ⁹⁹Mo tem semivida de 66 horas, ele decai por emissão β⁻ para ⁹⁹ᵐTc, permitindo o transporte internacional seguro do gerador para os serviços hospitalares de medicina nuclear.",
      "O enfermeiro deve guardar o Molibdénio-99 no frigorífico de medicamentos comuns ao lado das vacinas sem necessidade de blindagem plumbífera adicional.",
      "A semivida de 66 horas obriga a equipa clínica a substituir o gerador de tecnécio a cada dez minutos durante a realização de exames complementares de diagnóstico.",
      "O decaimento do Molibdénio-99 no gerador hospitalar emite vapores de mercúrio tóxicos que devem ser aspirados com máscaras de carvão ativado pelos doentes."
    ],
    "correctIndex": 0,
    "explanation": "A aplicação na enfermagem para produção de Molibdénio-99 (⁹⁹Mo) como produto de fissão do ²³⁵U baseia-se no princípio: O enfermeiro reconhece que eventuais paragens em reatores nucleares internacionais provocam escassez imediata de tecnécio nos serviços de medicina nuclear hospitalares. Esta prática garante a segurança radiológica do doente e da equipa.",
    "distractorAnalysis": [
      "Está incorreta: T1/2 = 66 h (~2,75 dias) é logisticamente ideal: permite a síntese, purificação, montagem do gerador e transporte por via aérea para qualquer hospital do mundo.",
      "Está incorreta: o gerador contém gigabecquerels de atividade de Mo-99 (emissor β⁻ e gama de alta energia como 740/780 keV) e requer blindagem pesada de chumbo ou urânio empobrecido.",
      "Está incorreta: o gerador é concebido para durar cerca de uma a duas semanas clínicas (com eluições diárias); não liberta mercúrio nem vapores tóxicos."
    ],
    "nursingApplication": "O enfermeiro reconhece que eventuais paragens em reatores nucleares internacionais provocam escassez imediata de tecnécio nos serviços de medicina nuclear hospitalares."
  },
  {
    "id": 6161,
    "topicId": 6,
    "question": "Um enfermeiro estuda os fundamentos teóricos da estabilidade da matéria e as propriedades físicas em 'produção de Molibdénio-99 (⁹⁹Mo) como produto de fissão do ²³⁵U'. Qual das seguintes afirmações expressa a relação física correta?",
    "options": [
      "O Molibdénio-99 decai por emissão de positrões diretamente para o estado fundamental do Ruténio estável sem passar por qualquer estado intermediário de tecnécio.",
      "O decaimento beta menos do ⁹⁹Mo (Z = 42) povoa seletivamente o estado excitado metaestável do ⁹⁹ᵐTc (Z = 43) em cerca de 87% das transições, alimentando o gerador.",
      "A ramificação do decaimento do ⁹⁹Mo resulta exclusivamente na formação de partículas alfa pesadas com energia cinética de trinta megaeletrão-volts no vácuo.",
      "A transmutação do ⁹⁹Mo em ⁹⁹ᵐTc viola a lei da conservação do momento angular quântico em virtude da ausência de antineutrinos no balanço dos produtos."
    ],
    "correctIndex": 1,
    "explanation": "A análise teórica e experimental confirma que O ⁹⁹Mo é quimicamente extraído e purificado em laboratórios de alta segurança radiológica e transferido para colunas cromatográficas de alumina em geradores comerciais. O domínio destes conceitos permite ao enfermeiro compreender as bases da física nuclear hospitalar.",
    "distractorAnalysis": [
      "Está incorreta: no decaimento β⁻ do ⁹⁹Mo, 87% das transições vão para o nível excitado de 142,7 keV do ⁹⁹ᵐTc, permitindo a extração deste isómero ideal para a medicina.",
      "Está incorreta: como ⁹⁹Mo tem excesso de neutrões (N = 57, Z = 42), decai por β⁻ (Z -> Z+1 = 43, Tecnécio) e não por emissão de positrões β⁺ (que exigiria deficiência de neutrões).",
      "Está incorreta: ⁹⁹Mo é um emissor β⁻/γ e não emite partículas alfa; o decaimento conserva estritamente carga, energia, momento linear e momento angular (com emissão de ν̄_e)."
    ],
    "nursingApplication": "O enfermeiro reconhece que eventuais paragens em reatores nucleares internacionais provocam escassez imediata de tecnécio nos serviços de medicina nuclear hospitalares."
  },
  {
    "id": 6162,
    "topicId": 6,
    "question": "Na física do núcleo atómico e das forças nucleares aplicada ao contexto dos radiofármacos e saúde, em relação a 'produção de radioisótopos por captura neutrónica (reações n, γ)', qual é a fundamentação científica exata?",
    "options": [
      "A reação de captura neutrónica (n, γ) transforma invariavelmente o elemento alvo num elemento químico com número atómico Z duas unidades superior na tabela periódica.",
      "As reações (n, γ) geram exclusivamente emissores de positrões de semivida ultracurta utilizados para exames cerebrais de tomografia por emissão de positrões.",
      "Na reação (n, γ), um núcleo absorve um neutrão térmico e desexcita-se emitindo fotões gama imediatos, produzindo um isótopo radioativo do mesmo elemento químico com A+1.",
      "A captura de neutrões por núcleos estáveis resulta na perda instantânea de todos os eletrões da eletrosfera do átomo devido ao campo gravitacional do reator."
    ],
    "correctIndex": 2,
    "explanation": "Em física nuclear médica, produção de radioisótopos por captura neutrónica (reações n, γ) explica-se pelo facto de que ao irradiar elementos estáveis com o fluxo intenso de neutrões de um reator, os núcleos absorvem um neutrão e emitem um fotão gama prontamente, transmutando-se no isótopo seguinte. Exemplos clínicos incluem a produção de Cobalto-60 a partir de Cobalto-59 estável ($^{59}\\text{Co} + n \\rightarrow ^{60}\\text{Co}$) para teleterapia, e Iodo-131 a partir de Telúrio-130.",
    "distractorAnalysis": [
      "Está incorreta: em reações (n, γ) o projétil é um neutrão (ΔZ = 0, ΔA = +1); como Z se mantém constante, o produto é quimicamente idêntico ao alvo (ex: ⁹⁸Mo(n,γ)⁹⁹Mo ou ¹⁷⁶Lu(n,γ)¹⁷⁷Lu).",
      "Está incorreta: Z não se altera na captura neutrónica radiativa simples; alterações de Z exigem emissão de partículas carregadas (n, p) ou decaimento radioativo subsequente.",
      "Está incorreta: a adição de um neutrão move o núcleo para cima na faixa de estabilidade (excesso de neutrões), gerando habitualmente emissores beta menos (β⁻) e não beta mais (β⁺)."
    ],
    "nursingApplication": "O enfermeiro identifica fontes seladas de Cobalto-60 históricas em radioterapia e sabe das elevadas medidas de blindagem que exigem."
  },
  {
    "id": 6163,
    "topicId": 6,
    "question": "Durante os cuidados de enfermagem e manipulação de radioisótopos hospitalares, como se manifesta na prática clínica o conceito de 'produção de radioisótopos por captura neutrónica (reações n, γ)'?",
    "options": [
      "A reação (n, γ) permite obter radiofármacos que se purificam a si próprios através da filtração em compressas esterilizadas de gaze de algodão no posto de saúde.",
      "A captura neutrónica radiativa obriga os hospitais a evacuar os andares superiores do edifício durante a chegada dos transportes de radioisótopos médicos.",
      "Essa reação nuclear impede a administração de medicamentos por via intravenosa nos doentes internados na unidade de cuidados intensivos coronários.",
      "Como o produto da reação (n, γ) é isotopicamente idêntico ao alvo, não é possível separá-los quimicamente, resultando em menor atividade específica ('carrier-added')."
    ],
    "correctIndex": 3,
    "explanation": "A aplicação na enfermagem para produção de radioisótopos por captura neutrónica (reações n, γ) baseia-se no princípio: O enfermeiro identifica fontes seladas de Cobalto-60 históricas em radioterapia e sabe das elevadas medidas de blindagem que exigem. Esta prática garante a segurança radiológica do doente e da equipa.",
    "distractorAnalysis": [
      "Está incorreta: métodos químicos não separam isótopos do mesmo elemento (mesmo Z); logo, o radioisótopo fica diluído em muitos átomos frios estáveis, limitando a atividade específica.",
      "Está incorreta: a separação isotópica não é possível por simples gazes ou filtros comuns; em terapia dirigida (ex: Lu-177) prefere-se frequentemente a rota indireta carrier-free (via Yb-176).",
      "Está incorreta: os transportes de radioisótopos cumprem as normas de transporte seguro da AIEA com contentores certificados tipo A ou B, sem necessidade de evacuações hospitalares."
    ],
    "nursingApplication": "O enfermeiro identifica fontes seladas de Cobalto-60 históricas em radioterapia e sabe das elevadas medidas de blindagem que exigem."
  },
  {
    "id": 6164,
    "topicId": 6,
    "question": "Um enfermeiro estuda os fundamentos teóricos da estabilidade da matéria e as propriedades físicas em 'produção de radioisótopos por captura neutrónica (reações n, γ)'. Qual das seguintes afirmações expressa a relação física correta?",
    "options": [
      "Exemplos clínicos de produção por captura (n, γ) incluem a síntese de Cobalto-60 para teleterapia (⁵⁹Co(n,γ)⁶⁰Co) e de Lutécio-177 para terapia de tumores neuroendócrinos.",
      "A reação (n, γ) é o método exclusivo utilizado nos hospitais para sintetizar gás oxigénio medicinal puro a partir do bombardeamento de água corrente da torneira.",
      "A secção eficaz de captura de neutrões é nula em todos os materiais estáveis conhecidos, tornando a reação (n, γ) uma impossibilidade teórica na física quântica.",
      "A energia libertada na captura neutrónica é consumida integralmente na rotação mecânica do reator nuclear em torno do eixo magnético da Terra."
    ],
    "correctIndex": 0,
    "explanation": "A análise teórica e experimental confirma que Exemplos clínicos incluem a produção de Cobalto-60 a partir de Cobalto-59 estável ($^{59}\\text{Co} + n \\rightarrow ^{60}\\text{Co}$) para teleterapia, e Iodo-131 a partir de Telúrio-130. O domínio destes conceitos permite ao enfermeiro compreender as bases da física nuclear hospitalar.",
    "distractorAnalysis": [
      "Está incorreta: ⁶⁰Co (para esterilização e radioterapia) e ¹⁷⁷Lu (para terapia com análogos da somatostatina PRRT) são produzidos com elevada secção eficaz de neutrões em reatores nucleares.",
      "Está incorreta: oxigénio medicinal hospitalar é obtido por destilação criogénica do ar atmosférico ou concentradores moleculares (PSA), processos estritamente físicos e não nucleares.",
      "Está incorreta: a secção eficaz de captura térmica (σ_γ) atinge centenas ou milhares de barns em muitos núcleos (como Cd-113, Sm-149, Lu-176), sendo amplamente utilizada na indústria nuclear."
    ],
    "nursingApplication": "O enfermeiro identifica fontes seladas de Cobalto-60 históricas em radioterapia e sabe das elevadas medidas de blindagem que exigem."
  },
  {
    "id": 6165,
    "topicId": 6,
    "question": "Na física do núcleo atómico e das forças nucleares aplicada ao contexto dos radiofármacos e saúde, em relação a 'gerador hospitalar de Tecnécio (gerador de Molibdénio/Tecnécio)', qual é a fundamentação científica exata?",
    "options": [
      "O gerador hospitalar de tecnécio é um dínamo mecânico rotativo alimentado por baterias de lítio que gera partículas radioativas através de indução eletrostática contínua.",
      "O gerador de ⁹⁹Mo/⁹⁹ᵐTc opera em equilíbrio transiente: o ⁹⁹Mo (pai, T₁/₂ = 66 h) adsorvido em coluna de alumina é eluído com soro fisiológico NaCl 0,9%, extraindo o ⁹⁹ᵐTc solúvel.",
      "O gerador de tecnécio funciona através da ebulição contínua de água pesada em pequenos recipientes de porcelana instalados sobre a secretária médica do serviço.",
      "O sistema do gerador baseia-se na dissolução de lâminas de chumbo radioativo em ácido nítrico concentrado imediatamente antes da administração da dose ao utente."
    ],
    "correctIndex": 1,
    "explanation": "Em física nuclear médica, gerador hospitalar de Tecnécio (gerador de Molibdénio/Tecnécio) explica-se pelo facto de que dispositivo blindado ('vaca de tecnécio') contendo ⁹⁹Mo (pai, T₁/₂ = 66 horas) adsorvido numa coluna de óxido de alumínio; o ⁹⁹Mo decai por emissão β⁻ para ⁹⁹ᵐTc (filho, T₁/₂ = 6 horas). Como o tecnécio tem propriedades químicas diferentes do molibdénio, é facilmente eluído passando uma solução estéril de soro fisiológico a 0,9% (NaCl) através da coluna.",
    "distractorAnalysis": [
      "Está incorreta: o gerador é um sistema cromatográfico fechado estéril: o molibdato (⁹⁹MoO₄²⁻) liga-se fortemente à alumina (Al₂O₃), enquanto o pertecnetato (⁹⁹ᵐTcO₄⁻) é facilmente eluído com salina.",
      "Está incorreta: o gerador não possui partes móveis ou motores elétricos; opera com base no decaimento radioativo espontâneo do isótopo pai retido quimicamente.",
      "Está incorreta: a eluição é um processo asséptico à temperatura ambiente com frascos sob vácuo; não utiliza ebulição térmica, porcelana ou dissolução ácida de chumbo."
    ],
    "nursingApplication": "O enfermeiro ou técnico elui o gerador diariamente em condições estéreis sob campânula de fluxo laminar blindada com chumbo na câmara quente."
  },
  {
    "id": 6166,
    "topicId": 6,
    "question": "Durante os cuidados de enfermagem e manipulação de radioisótopos hospitalares, como se manifesta na prática clínica o conceito de 'gerador hospitalar de Tecnécio (gerador de Molibdénio/Tecnécio)'?",
    "options": [
      "O gerador deve ser descartado no lixo hospitalar comum imediatamente após a primeira eluição porque a coluna de alumina perde permanentemente a sua capacidade física.",
      "A eluição do gerador exige que o profissional de saúde aspire o líquido com uma seringa plástica manual sem recorrer a recipientes de vácuo protegidos por chumbo.",
      "Após a eluição, a atividade de ⁹⁹ᵐTc volta a crescer na coluna, atingindo o máximo de acumulação teórica cerca de 23 horas depois, permitindo eluições diárias convenientes.",
      "O gerador de tecnécio emite radiação exclusivamente durante os três segundos em que o soro fisiológico passa através da coluna cromatográfica de resina iónica."
    ],
    "correctIndex": 2,
    "explanation": "A aplicação na enfermagem para gerador hospitalar de Tecnécio (gerador de Molibdénio/Tecnécio) baseia-se no princípio: O enfermeiro ou técnico elui o gerador diariamente em condições estéreis sob campânula de fluxo laminar blindada com chumbo na câmara quente. Esta prática garante a segurança radiológica do doente e da equipa.",
    "distractorAnalysis": [
      "Está incorreta: o pico de atividade de ⁹⁹ᵐTc ocorre em t_max = ln(λ_filho / λ_pai) / (λ_filho - λ_pai) ≈ 22,9 horas; eluições a cada 24 horas retiram praticamente o rendimento máximo diário.",
      "Está incorreta: o gerador fornece doses úteis durante cerca de 1 a 2 semanas, perdendo cerca de metade da atividade a cada 66 horas em conformidade com o decaimento do Mo-99.",
      "Está incorreta: a eluição utiliza frascos de vácuo esterilizados pré-calibrados dentro de recipientes de chumbo de eluição para garantir a radioproteção do operador."
    ],
    "nursingApplication": "O enfermeiro ou técnico elui o gerador diariamente em condições estéreis sob campânula de fluxo laminar blindada com chumbo na câmara quente."
  },
  {
    "id": 6167,
    "topicId": 6,
    "question": "Um enfermeiro estuda os fundamentos teóricos da estabilidade da matéria e as propriedades físicas em 'gerador hospitalar de Tecnécio (gerador de Molibdénio/Tecnécio)'. Qual das seguintes afirmações expressa a relação física correta?",
    "options": [
      "A retenção seletiva no gerador ocorre porque os átomos de tecnécio são repelidos magneticamente pelo chumbo da blindagem exterior em direção ao frasco de recolha.",
      "O soro fisiológico utilizado na eluição atua fundindo termicamente a coluna de alumina, a qual tem de ser substituída por nova cerâmica após cada extração hospitalar.",
      "O ião pertecnetato elui sob a forma de gás inflamável que deve ser condensado em gelo seco antes de ser dissolvido em água destilada para uso parenteral.",
      "Na coluna do gerador, o molibdato (⁹⁹MoO₄²⁻) com carga -2 liga-se firmemente à alumina ácida, enquanto o pertecnetato (⁹⁹ᵐTcO₄⁻) monovalente é fracamente retido e arrastado pelo NaCl."
    ],
    "correctIndex": 3,
    "explanation": "A análise teórica e experimental confirma que Como o tecnécio tem propriedades químicas diferentes do molibdénio, é facilmente eluído passando uma solução estéril de soro fisiológico a 0,9% (NaCl) através da coluna. O domínio destes conceitos permite ao enfermeiro compreender as bases da física nuclear hospitalar.",
    "distractorAnalysis": [
      "Está incorreta: a separação é baseada na química de coordenação de iões: a alumina ácida (Al₂O₃) possui afinidade muito superior por aniões divalentes (MoO₄²⁻) do que monovalentes (TcO₄⁻).",
      "Está incorreta: o processo de separação é puramente cromatográfico líquido-sólido e não eletromagnético; a blindagem de chumbo limita-se a atenuar a radiação ionizante externa.",
      "Está incorreta: a coluna de alumina sólida permanece intacta e estável ao longo de dezenas de eluições com NaCl 0,9%; o pertecnetato é um soluto aquoso líquido e límpido."
    ],
    "nursingApplication": "O enfermeiro ou técnico elui o gerador diariamente em condições estéreis sob campânula de fluxo laminar blindada com chumbo na câmara quente."
  },
  {
    "id": 6168,
    "topicId": 6,
    "question": "Na física do núcleo atómico e das forças nucleares aplicada ao contexto dos radiofármacos e saúde, em relação a 'controlo de qualidade do eluído: teste de fuga de Molibdénio (breakthrough)', qual é a fundamentação científica exata?",
    "options": [
      "O teste de fuga de Molibdénio avalia a pureza radionuclídica do eluído, garantindo que a atividade de ⁹⁹Mo contaminante não ultrapassa 0,15 kBq de ⁹⁹Mo por MBq de ⁹⁹ᵐTc.",
      "O teste de fuga destina-se a verificar se existem fendas mecânicas visíveis no plástico do manípulo de transporte da caixa exterior do gerador hospitalar de tecnécio.",
      "O teste de fuga de Molibdénio serve para medir a concentração de cloreto de sódio dissolvido na amostra através da determinação do índice de refração com um refratómetro.",
      "Esse teste laboratorial é realizado para garantir que a solução de radiofármaco não contém bactérias aeróbias viáveis antes de ser administrada aos doentes no leito."
    ],
    "correctIndex": 0,
    "explanation": "Em física nuclear médica, controlo de qualidade do eluído: teste de fuga de Molibdénio (breakthrough) explica-se pelo facto de que o ⁹⁹Mo é um emissor beta e gama de longa semivida e muito tóxico se injetado no doente; o eluído de ⁹⁹ᵐTc não pode conter mais de 0,15 kBq de ⁹⁹Mo por MBq de ⁹⁹ᵐTc. O teste é medido num ativímetro (calibrador de dose) usando uma câmara blindada com paredes espessas de chumbo que travam os fotões de 140 keV do Tc e deixam passar apenas os fotões de 740 keV do Mo.",
    "distractorAnalysis": [
      "Está incorreta: a contaminação por Mo-99 (radionuclídeo pai de 66 h com emissão beta dura e gamas de alta energia) depositaria dose excessiva indesejada na medula e fígado do doente.",
      "Está incorreta: o teste mede a presença física de átomos radioativos de Mo-99 no eluído e não a integridade mecânica de pegas plásticas de transporte exterior.",
      "Está incorreta: o índice de refração mede solutos químicos macroscópicos; a esterilidade microbiológica é controlada por processos de fabrico farmacêutico estéreis validados."
    ],
    "nursingApplication": "O enfermeiro confirma que o controlo de qualidade de radiofármacos foi formalmente aprovado antes da administração do radiofármaco por via endovenosa."
  },
  {
    "id": 6169,
    "topicId": 6,
    "question": "Durante os cuidados de enfermagem e manipulação de radioisótopos hospitalares, como se manifesta na prática clínica o conceito de 'controlo de qualidade do eluído: teste de fuga de Molibdénio (breakthrough)'?",
    "options": [
      "A presença de ⁹⁹Mo no eluído aumenta a nitidez da imagem cintigráfica porque os seus fotões de 740 keV iluminam os cristais de NaI(Tl) das câmaras com maior brilho.",
      "A deteção de fuga de ⁹⁹Mo protege o doente contra sobre-irradiação desnecessária dos órgãos de captação (especialmente o parênquima hepático e a medula óssea hematopoiética).",
      "O enfermeiro realiza o teste para determinar se a solução injetável de tecnécio necessita de ser aromatizada com essência de menta antes da injeção no braço do utente.",
      "A contaminação por molibdénio faz com que o radiofármaco se torne azulado à luz do dia, permitindo dispensar medições no ativímetro do laboratório de radiofarmácia."
    ],
    "correctIndex": 1,
    "explanation": "A aplicação na enfermagem para controlo de qualidade do eluído: teste de fuga de Molibdénio (breakthrough) baseia-se no princípio: O enfermeiro confirma que o controlo de qualidade de radiofármacos foi formalmente aprovado antes da administração do radiofármaco por via endovenosa. Esta prática garante a segurança radiológica do doente e da equipa.",
    "distractorAnalysis": [
      "Está incorreta: o Mo-99 metaboliza-se e acumula-se no fígado e medula óssea, emitindo eletrões beta ionizantes de alta energia (E_max ≈ 1,2 MeV) que elevam a dose absorvida.",
      "Está incorreta: os fotões de alta energia do Mo-99 (740 e 778 keV) degradam a imagem por penetração septal nos colimadores e aumentam o ruído de fundo da gama-câmara.",
      "Está incorreta: radiofármacos parenterais devem ser rigorosamente apirogénicos, estéreis e sem aditivos ou aromatizantes; o teste é mandatório antes da libertação clínica."
    ],
    "nursingApplication": "O enfermeiro confirma que o controlo de qualidade de radiofármacos foi formalmente aprovado antes da administração do radiofármaco por via endovenosa."
  },
  {
    "id": 6170,
    "topicId": 6,
    "question": "Um enfermeiro estuda os fundamentos teóricos da estabilidade da matéria e as propriedades físicas em 'controlo de qualidade do eluído: teste de fuga de Molibdénio (breakthrough)'. Qual das seguintes afirmações expressa a relação física correta?",
    "options": [
      "O teste físico realiza-se através da pesagem da amostra numa balança analítica de precisão para comparar o peso molecular relativo do molibdénio e do tecnécio aquoso.",
      "A quantificação da fuga de molibdénio é realizada por observação direta da fluorescência verde emitida pela solução quando iluminada por uma lanterna comum de bolso.",
      "O método físico utiliza uma blindagem de chumbo específica no calibrador de dose (ativímetro) que bloqueia os gamas de 140 keV do ⁹⁹ᵐTc e deixa passar os gamas duros de 740-780 keV do ⁹⁹Mo.",
      "O teste fundamenta-se na medição da condutividade elétrica da ampola de vidro com um multímetro digital calibrado em ohms na bancada de trabalho estéril."
    ],
    "correctIndex": 2,
    "explanation": "A análise teórica e experimental confirma que O teste é medido num ativímetro (calibrador de dose) usando uma câmara blindada com paredes espessas de chumbo que travam os fotões de 140 keV do Tc e deixam passar apenas os fotões de 740 keV do Mo. O domínio destes conceitos permite ao enfermeiro compreender as bases da física nuclear hospitalar.",
    "distractorAnalysis": [
      "Está incorreta: com a blindagem de chumbo com cerca de 6 mm de espessura, os fotões de 140 keV do Tc-99m são atenuados por um fator >10⁴, permitindo ler seletivamente os gamas penetrantes do Mo-99.",
      "Está incorreta: as massas envolvidas situam-se na escala de picogramas/nanogramas, sendo totalmente impercetíveis em balanças analíticas comuns ou multímetros elétricos.",
      "Está incorreta: as soluções de pertecnetato com vestígios de molibdénio são perfeitamente incolores e límpidas, sendo necessária deteção radiométrica de precisão com câmara de ionização."
    ],
    "nursingApplication": "O enfermeiro confirma que o controlo de qualidade de radiofármacos foi formalmente aprovado antes da administração do radiofármaco por via endovenosa."
  },
  {
    "id": 6171,
    "topicId": 6,
    "question": "Na física do núcleo atómico e das forças nucleares aplicada ao contexto dos radiofármacos e saúde, em relação a 'princípio de aceleração circular no Cíclotron de Lawrence', qual é a fundamentação científica exata?",
    "options": [
      "O ciclotrão acelera partículas carregadas disparando jatos de ar comprimido a alta velocidade através de condutas metálicas fechadas em espiral horizontal.",
      "No ciclotrão de Lawrence, os protões são acelerados exclusivamente pela gravidade ao descerem por uma rampa de madeira polida com cem metros de extensão no solo.",
      "O princípio do ciclotrão baseia-se no aquecimento de água destilada até atingir a temperatura crítica de vaporização espontânea em autoclaves de pressão elevada.",
      "No ciclotrão, um campo magnético estático B curva as partículas carregadas em semicírculos, enquanto um campo elétrico oscilante de alta frequência nos elétrodos acelera as partículas."
    ],
    "correctIndex": 3,
    "explanation": "Em física nuclear médica, princípio de aceleração circular no Cíclotron de Lawrence explica-se pelo facto de que utiliza um forte campo magnético estático perpendicular para curvar as partículas carregadas (protões) em trajetórias circulares e um campo elétrico oscilante de alta radiofrequência entre dois elétrodos em forma de 'D' (Dee) para as acelerar a cada meia volta. À medida que ganham energia cinética, as partículas descrevem uma espiral para fora até atingirem o raio exterior com energias de 10 a 20 MeV.",
    "distractorAnalysis": [
      "Está incorreta: a força de Lorentz (F = q·v × B) fornece a força centrípeta m·v²/r = q·v·B, mantendo o raio em r = mv/(qB); o campo elétrico alternado acelera a partícula na folga entre os 'Dees'.",
      "Está incorreta: a aceleração nuclear opera no vácuo elevado (~10⁻⁶ mbar) para evitar colisões com moléculas de ar; não utiliza ar comprimido ou rampas gravitacionais de madeira.",
      "Está incorreta: a gravidade é 10³⁸ vezes mais fraca que as forças eletromagnéticas; os ciclotrões utilizam eletroímanes gigantes e geradores de radiofrequência em vácuo estrito."
    ],
    "nursingApplication": "O feixe de protões de alta energia é ejetado contra alvos específicos para desencadear reações nucleares de transmutação artificial."
  },
  {
    "id": 6172,
    "topicId": 6,
    "question": "Durante os cuidados de enfermagem e manipulação de radioisótopos hospitalares, como se manifesta na prática clínica o conceito de 'princípio de aceleração circular no Cíclotron de Lawrence'?",
    "options": [
      "A proximidade de ciclotrões hospitalares é vital para a prática clínica do enfermeiro em PET, dado que radioisótopos emissores de positrões têm semividas muito curtas (ex: ¹⁸F com 110 min).",
      "O ciclotrão hospitalar é utilizado para esterilizar os sapatos dos enfermeiros à entrada da unidade de internamento de cuidados intensivos polivalentes.",
      "A operação do ciclotrão exige que a equipa de enfermagem acompanhe os doentes ao interior do feixe de protões durante as sessões de reabilitação fisiátrica.",
      "O ciclotrão funciona como gerador de energia elétrica de reserva para manter as luzes da sala de operações acesas durante cortes de eletricidade da rede pública."
    ],
    "correctIndex": 0,
    "explanation": "A aplicação na enfermagem para princípio de aceleração circular no Cíclotron de Lawrence baseia-se no princípio: O feixe de protões de alta energia é ejetado contra alvos específicos para desencadear reações nucleares de transmutação artificial. Esta prática garante a segurança radiológica do doente e da equipa.",
    "distractorAnalysis": [
      "Está incorreta: radionuclídeos PET comuns (¹⁸F com 110 min, ¹¹C com 20 min, ¹³N com 10 min, ¹⁵O com 2 min) decaem rapidamente; a produção local ou regional em ciclotrão é mandatória.",
      "Está incorreta: o ciclotrão situa-se num bunker de betão de alta densidade; durante o feixe os níveis de radiação são letais, pelo que nenhuma pessoa pode permanecer no interior.",
      "Está incorreta: o ciclotrão não é gerador de eletricidade mas sim consumidor de energia elétrica; o seu propósito exclusivo é produzir radioisótopos acelerando partículas nucleares."
    ],
    "nursingApplication": "O feixe de protões de alta energia é ejetado contra alvos específicos para desencadear reações nucleares de transmutação artificial."
  },
  {
    "id": 6173,
    "topicId": 6,
    "question": "Um enfermeiro estuda os fundamentos teóricos da estabilidade da matéria e as propriedades físicas em 'princípio de aceleração circular no Cíclotron de Lawrence'. Qual das seguintes afirmações expressa a relação física correta?",
    "options": [
      "A frequência de ressonância do ciclotrão depende exclusivamente da temperatura do fluido de arrefecimento dos sistemas de ventilação mecânica da sala de controlo.",
      "A frequência do ciclotrão f = q·B / (2π·m) é independente do raio e da velocidade no regime não-relativista, permitindo que a aceleração por radiofrequência opere com frequência constante.",
      "No ciclotrão clássico, a velocidade final das partículas é estritamente limitada a cem metros por segundo devido à resistência aerodinâmica das moléculas de oxigénio.",
      "A trajetória das partículas no ciclotrão é uma linha reta perfeita orientada para o zénite celeste, independente da presença de campos magnéticos transversais aplicados."
    ],
    "correctIndex": 1,
    "explanation": "A análise teórica e experimental confirma que À medida que ganham energia cinética, as partículas descrevem uma espiral para fora até atingirem o raio exterior com energias de 10 a 20 MeV. O domínio destes conceitos permite ao enfermeiro compreender as bases da física nuclear hospitalar.",
    "distractorAnalysis": [
      "Está incorreta: o período T = 2πr/v = 2πm/(qB) é constante enquanto a massa m for constante (isocronismo clássico); a altas energias os efeitos relativistas exigem sincrocíclotrons ou isócronos.",
      "Está incorreta: a frequência angular ω = qB/m deriva diretamente das leis do eletromagnetismo de Maxwell e da mecânica de Newton, independente de parâmetros térmicos de ar condicionado.",
      "Está incorreta: os protões num ciclotrão hospitalar atingem cerca de 15% a 20% da velocidade da luz (dezenas de milhares de quilómetros por segundo) numa trajetória espiralada."
    ],
    "nursingApplication": "O feixe de protões de alta energia é ejetado contra alvos específicos para desencadear reações nucleares de transmutação artificial."
  },
  {
    "id": 6174,
    "topicId": 6,
    "question": "Na física do núcleo atómico e das forças nucleares aplicada ao contexto dos radiofármacos e saúde, em relação a 'síntese de Flúor-18 via reação nuclear ¹⁸O(p, n)¹⁸F', qual é a fundamentação científica exata?",
    "options": [
      "O Flúor-18 é sintetizado através da trituração mecânica de rochas vulcânicas enriquecidas com sal marinho iodado em moinhos de bolas hospitalares estéreis.",
      "A síntese do Flúor-18 decorre do aquecimento de soluções de glicose comum em fornos micro-ondas durante três minutos à potência máxima no refeitório.",
      "Na reação ¹⁸O(p, n)¹⁸F, protões acelerados a ~10-18 MeV bombardeiam um alvo de água enriquecida em Oxigénio-18 [¹⁸O]H₂O, ejetando um neutrão e formando Flúor-18 em solução aquosa.",
      "A reação nuclear do ¹⁸F ocorre espontaneamente no ar atmosférico sempre que os níveis de humidade relativa ultrapassam os noventa por cento em dias de chuva intensa."
    ],
    "correctIndex": 2,
    "explanation": "Em física nuclear médica, síntese de Flúor-18 via reação nuclear ¹⁸O(p, n)¹⁸F explica-se pelo facto de que o feixe de protões acelerados no cíclotron atinge um alvo de água enriquecida com Oxigénio-18 ([H₂¹⁸O]); o protão penetra no núcleo do Oxigénio-18 e ejeta um neutrão, transmutando-o em Flúor-18. O Flúor-18 obtido como ião fluoreto [¹⁸F⁻] é imediatamente transportado por tubagens blindadas até ao sintetizador químico robotizado para marcar a desoxiglicose (¹⁸F-FDG).",
    "distractorAnalysis": [
      "Está incorreta: a reação endotérmica ¹⁸O(p,n)¹⁸F (limiar cinético ~2,57 MeV) atinge secção eficaz máxima a ~5-10 MeV de energia dos protões, produzindo [¹⁸F]fluoreto carrier-free.",
      "Está incorreta: o Flúor-18 é um radioisótopo sintético de semivida muito curta (109,8 min) que não existe em minerais vulcânicos nem se sintetiza por trituração mecânica.",
      "Está incorreta: processos químicos domésticos ou micro-ondas não afetam núcleos atómicos; a transmutação requer aceleração de protões num ciclotrão com alvos de [¹⁸O]H₂O."
    ],
    "nursingApplication": "Devido à semivida física do ¹⁸F de apenas 110 minutos, o cíclotron tem de operar diariamente perto dos centros hospitalares de imagiologia PET."
  },
  {
    "id": 6175,
    "topicId": 6,
    "question": "Durante os cuidados de enfermagem e manipulação de radioisótopos hospitalares, como se manifesta na prática clínica o conceito de 'síntese de Flúor-18 via reação nuclear ¹⁸O(p, n)¹⁸F'?",
    "options": [
      "O Flúor-18 acabado de produzir no ciclotrão é administrado diretamente por via oral sem qualquer controlo prévio de pureza radioquímica ou esterilidade na enfermaria.",
      "A injeção de Flúor-18 obriga o enfermeiro a manter o doente algemado à cama para impedir a fuga espontânea de eletrões secundários através dos dedos das mãos.",
      "O radiofármaco ¹⁸F-FDG perde a totalidade da sua atividade radioativa em exatamente dois segundos após o contacto físico com os glóbulos vermelhos da circulação venosa.",
      "O [¹⁸F]fluoreto produzido é recuperado em resina de troca aniónica e conjugado quimicamente na molécula de glicose para sintetizar a ¹⁸F-FDG usada nos exames PET oncológicos."
    ],
    "correctIndex": 3,
    "explanation": "A aplicação na enfermagem para síntese de Flúor-18 via reação nuclear ¹⁸O(p, n)¹⁸F baseia-se no princípio: Devido à semivida física do ¹⁸F de apenas 110 minutos, o cíclotron tem de operar diariamente perto dos centros hospitalares de imagiologia PET. Esta prática garante a segurança radiológica do doente e da equipa.",
    "distractorAnalysis": [
      "Está incorreta: a ¹⁸F-FDG (2-desoxi-2-[¹⁸F]fluoro-D-glicose) é o radiofármaco PET mais utilizado no mundo, acumulando-se avidamente em tecidos com elevado consumo glicolítico (tumores).",
      "Está incorreta: a síntese em módulos automatizados segue rigorosas Boas Práticas de Fabrico (BPF/GMP) com testes de controlo de qualidade obrigatórios (pureza, esterilidade, pH, endotoxinas).",
      "Está incorreta: os doentes repousam confortavelmente num quarto calmo sem algemas; o ¹⁸F decai com semivida de ~110 min (e não 2 segundos), sendo seguro e bem tolerado."
    ],
    "nursingApplication": "Devido à semivida física do ¹⁸F de apenas 110 minutos, o cíclotron tem de operar diariamente perto dos centros hospitalares de imagiologia PET."
  },
  {
    "id": 6176,
    "topicId": 6,
    "question": "Um enfermeiro estuda os fundamentos teóricos da estabilidade da matéria e as propriedades físicas em 'síntese de Flúor-18 via reação nuclear ¹⁸O(p, n)¹⁸F'. Qual das seguintes afirmações expressa a relação física correta?",
    "options": [
      "A reação ¹⁸O(p, n)¹⁸F é endotérmica com valor Q = -2,44 MeV, exigindo que os protões possuam um limiar mínimo de energia cinética de cerca de 2,57 MeV para ocorrer no laboratório.",
      "A reação de produção de Flúor-18 liberta mais de cem megajoules de calor espontâneo sem necessidade de conferir qualquer energia cinética inicial ao feixe de protões.",
      "Na reação do Flúor-18, o núcleo de oxigénio transmuta-se num elemento metálico pesado que decai por emissão contínua de partículas alfa com semivida de dez anos.",
      "O bombardeamento de água com protões resulta na destruição definitiva de cinquenta por cento dos electrões orbitais de todos os átomos presentes no alvo enriquecido."
    ],
    "correctIndex": 0,
    "explanation": "A análise teórica e experimental confirma que O Flúor-18 obtido como ião fluoreto [¹⁸F⁻] é imediatamente transportado por tubagens blindadas até ao sintetizador químico robotizado para marcar a desoxiglicose (¹⁸F-FDG). O domínio destes conceitos permite ao enfermeiro compreender as bases da física nuclear hospitalar.",
    "distractorAnalysis": [
      "Está incorreta: o valor Q negativo (-2,44 MeV) e a conservação de momento no centro de massa fixam o limiar cinético E_th = |Q|·(1 + m_p/M_alvo) ≈ 2,57 MeV para iniciar a reação.",
      "Está incorreta: reações nucleares endotérmicas exigem fornecimento externo de energia cinética; no ciclotrão usam-se tipicamente protões de 10-18 MeV para maximizar o rendimento.",
      "Está incorreta: o produto é o Flúor-18 (halogéneo, Z = 9), emissor de positrões (β⁺) com semivida física de 109,8 minutos, decaindo para o estável Oxigénio-18."
    ],
    "nursingApplication": "Devido à semivida física do ¹⁸F de apenas 110 minutos, o cíclotron tem de operar diariamente perto dos centros hospitalares de imagiologia PET."
  },
  {
    "id": 6177,
    "topicId": 6,
    "question": "Na física do núcleo atómico e das forças nucleares aplicada ao contexto dos radiofármacos e saúde, em relação a 'produção de outros emissores ultracurtos: ¹¹C, ¹³N e ¹⁵O', qual é a fundamentação científica exata?",
    "options": [
      "O Carbono-11 e o Oxigénio-15 são radioisótopos naturais extraídos da água do mar através de processos de osmose inversa industrial em centrais de dessalinização costeiras.",
      "Os radionuclídeos ¹¹C (T₁/₂ = 20,4 min), ¹³N (T₁/₂ = 9,97 min) e ¹⁵O (T₁/₂ = 2,04 min) são sintetizados em ciclotrão por bombardeamento de alvos gasosos ou líquidos dedicados.",
      "Esses três emissores ultracurtos são produzidos exclusivamente por decaimento alfa de minérios de tório e urânio armazenados em depósitos geológicos profundos de granito.",
      "A produção de ¹¹C, ¹³N e ¹⁵O ocorre espontaneamente no interior das embalagens plásticas de soro glicosado quando estas são iluminadas por lâmpadas de luz néon hospitalar."
    ],
    "correctIndex": 1,
    "explanation": "Em física nuclear médica, produção de outros emissores ultracurtos: ¹¹C, ¹³N e ¹⁵O explica-se pelo facto de que o Carbono-11 tem semivida de 20 minutos, o Azoto-13 de 10 minutos e o Oxigénio-15 de apenas 2 minutos. Para utilizar estes isótopos (como a água marcada com Oxigénio-15 para perfusão cerebral ou amónia com Azoto-13 para fluxo miocárdico), o cíclotron tem de estar instalado obrigatoriamente no próprio hospital.",
    "distractorAnalysis": [
      "Está incorreta: alvos específicos como ¹⁴N(p,α)¹¹C, ¹⁶O(p,α)¹³N e ¹⁴N(d,n)¹⁵O produzem estes emissores biológicos de positrões essenciais em centros avançados de PET.",
      "Está incorreta: ¹¹C, ¹³N e ¹⁵O não existem na água do mar (as suas semividas medem-se em escassos minutos); são produzidos artificialmente sob demanda por ciclotrões.",
      "Está incorreta: actinídeos como urânio e tório produzem séries radioativas pesadas (rádio, radão, chumbo) e não os elementos leves biológicos de curta duração da tabela periódica."
    ],
    "nursingApplication": "O enfermeiro de medicina nuclear coordena a receção cronometrada ao minuto do radiofármaco, com o doente já posicionado na marquesa do tomógrafo PET."
  },
  {
    "id": 6178,
    "topicId": 6,
    "question": "Durante os cuidados de enfermagem e manipulação de radioisótopos hospitalares, como se manifesta na prática clínica o conceito de 'produção de outros emissores ultracurtos: ¹¹C, ¹³N e ¹⁵O'?",
    "options": [
      "A semivida de dois minutos do Oxigénio-15 permite ao hospital armazenar o radiofármaco em armários convencionais durante três semanas antes da sua administração aos doentes.",
      "O enfermeiro deve diluir o Carbono-11 em baldes de plástico abertos e esperar vinte e quatro horas para que o traçador arrefeça antes de puncionar a veia do utente.",
      "Devido às semividas ultracurtas (2 a 20 minutos), estes traçadores exigem um ciclotrão on-site e sistemas automatizados de transferência rápida por capilares até à sala de exames.",
      "Os emissores ultracurtos tornam os doentes imunes à radiação gama, permitindo que estes realizem radiografias de tórax sem qualquer tipo de proteção plumbífera."
    ],
    "correctIndex": 2,
    "explanation": "A aplicação na enfermagem para produção de outros emissores ultracurtos: ¹¹C, ¹³N e ¹⁵O baseia-se no princípio: O enfermeiro de medicina nuclear coordena a receção cronometrada ao minuto do radiofármaco, com o doente já posicionado na marquesa do tomógrafo PET. Esta prática garante a segurança radiológica do doente e da equipa.",
    "distractorAnalysis": [
      "Está incorreta: com T1/2 de minutos, a síntese, purificação, controlo de qualidade e injeção (ex: ¹³N-amónia para perfusão cardíaca ou ¹⁵O-H₂O) ocorrem em minutos junto ao PET.",
      "Está incorreta: após 10 semividas a atividade decai para menos de 0,1% da inicial; armazenar por semanas resultaria em atividade estritamente nula e perda total do radiofármaco.",
      "Está incorreta: a manipulação é 100% automatizada em módulos fechados blindados para proteger os profissionais contra altas taxas de dose de radiação de aniquilação."
    ],
    "nursingApplication": "O enfermeiro de medicina nuclear coordena a receção cronometrada ao minuto do radiofármaco, com o doente já posicionado na marquesa do tomógrafo PET."
  },
  {
    "id": 6179,
    "topicId": 6,
    "question": "Um enfermeiro estuda os fundamentos teóricos da estabilidade da matéria e as propriedades físicas em 'produção de outros emissores ultracurtos: ¹¹C, ¹³N e ¹⁵O'. Qual das seguintes afirmações expressa a relação física correta?",
    "options": [
      "A utilização de Carbono-11 altera a estrutura do ADN humano de forma permanente, transformando os doentes em fontes contínuas de emissão de neutrões térmicos lentos.",
      "Os núcleos de ¹³N e ¹⁵O são desprovidos de carga elétrica positiva, circulando livremente pelos tecidos biológicos sem interagir com as biomoléculas celulares do hospedeiro.",
      "O decaimento destes três radioisótopos produz exclusivamente partículas alfa que atravessam livremente paredes de chumbo com trinta centímetros de espessura de blindagem.",
      "A incorporação de ¹¹C, ¹³N e ¹⁵O em moléculas orgânicas nativas (glicose, aminoácidos, água) permite estudar o metabolismo humano in vivo sem alterar a identidade bioquímica."
    ],
    "correctIndex": 3,
    "explanation": "A análise teórica e experimental confirma que Para utilizar estes isótopos (como a água marcada com Oxigénio-15 para perfusão cerebral ou amónia com Azoto-13 para fluxo miocárdico), o cíclotron tem de estar instalado obrigatoriamente no próprio hospital. O domínio destes conceitos permite ao enfermeiro compreender as bases da física nuclear hospitalar.",
    "distractorAnalysis": [
      "Está incorreta: carbono, azoto e oxigénio são os blocos construtores da vida orgânica; a sua substituição isotópica permite criar traçadores fisiologicamente perfeitos e indistinguíveis.",
      "Está incorreta: as doses diagnósticas em PET utilizam quantidades molares minúsculas (picomolares) que não alteram a função genética nem emitem neutrões.",
      "Está incorreta: ¹³N e ¹⁵O possuem cargas nucleares Z = 7 e Z = 8; decaem por emissão de positrões (β⁺), os quais originam fotões gama de 511 keV por aniquilação."
    ],
    "nursingApplication": "O enfermeiro de medicina nuclear coordena a receção cronometrada ao minuto do radiofármaco, com o doente já posicionado na marquesa do tomógrafo PET."
  },
  {
    "id": 6180,
    "topicId": 6,
    "question": "Na física do núcleo atómico e das forças nucleares aplicada ao contexto dos radiofármacos e saúde, em relação a 'geradores de radionuclídeos sem cíclotron local: o gerador de ⁶⁸Ge/⁶⁸Ga', qual é a fundamentação científica exata?",
    "options": [
      "O gerador ⁶⁸Ge/⁶⁸Ga utiliza Germânio-68 (pai, T₁/₂ = 271 dias) que decai por captura eletrónica para Gálio-68 (filho, T₁/₂ = 67,7 min, emissor β⁺), operando em equilíbrio secular.",
      "O gerador de ⁶⁸Ge/⁶⁸Ga funciona através da combustão contínua de gás propano num reator catalítico montado sobre rodas de borracha na sala de preparação dos doentes.",
      "O Gálio-68 é um emissor alfa puro extraído de colunas de mercúrio líquido através da passagem de soluções saturadas de ácido sulfúrico concentrado e quente.",
      "A semivida do Germânio-68 é de apenas dois segundos, o que obriga o serviço de saúde a encomendar um novo gerador hospitalar a cada minuto da jornada de trabalho."
    ],
    "correctIndex": 0,
    "explanation": "Em física nuclear médica, geradores de radionuclídeos sem cíclotron local: o gerador de ⁶⁸Ge/⁶⁸Ga explica-se pelo facto de que para centros hospitalares que não possuem cíclotron próprio, utilizam-se geradores portáteis onde o Germânio-68 (pai, T₁/₂ = 271 dias) decai gerando Gálio-68 (filho, emissor de positrões com T₁/₂ = 68 minutos). O Gálio-68 é utilizado na marcação de péptidos como o DOTA-TOC para diagnóstico de tumores neuroendócrinos e PSMA para cancro da próstata.",
    "distractorAnalysis": [
      "Está incorreta: como T_pai (271 dias) >> T_filho (68 min), estabelece-se equilíbrio secular (A_filho ≈ A_pai); o gerador fornece Gálio-68 diariamente durante cerca de um ano.",
      "Está incorreta: o gerador é um sistema de coluna cromatográfica de dióxido de titânio ou estanho eluído com ácido clorídrico diluído (HCl 0,1 M) sem combustão química.",
      "Está incorreta: ⁶⁸Ga decai por emissão de positrões (89%) para o estável ⁶⁸Zn; não emite partículas alfa nem utiliza colunas tóxicas de mercúrio."
    ],
    "nursingApplication": "O enfermeiro administra o radiofármaco de ⁶⁸Ga respeitando a semivida de 68 minutos, promovendo a hidratação e micção frequente para reduzir a dose na bexiga."
  },
  {
    "id": 6181,
    "topicId": 6,
    "question": "Durante os cuidados de enfermagem e manipulação de radioisótopos hospitalares, como se manifesta na prática clínica o conceito de 'geradores de radionuclídeos sem cíclotron local: o gerador de ⁶⁸Ge/⁶⁸Ga'?",
    "options": [
      "O gerador de Gálio-68 substitui a necessidade de esterilização do instrumental cirúrgico através da emissão contínua de calor por convecção térmica na enfermaria.",
      "Permite a hospitais sem ciclotrão realizar exames PET de ponta com ⁶⁸Ga-DOTATATE (para tumores neuroendócrinos) e ⁶⁸Ga-PSMA (para diagnóstico do carcinoma da próstata).",
      "A presença deste gerador dispensa o uso de recipientes blindados de chumbo durante a eluição e a administração de radiofármacos aos doentes oncológicos no leito.",
      "O enfermeiro deve administrar o eluído de Gálio-68 misturado com sumo de laranja natural para acelerar a absorção intestinal do radioisótopo pelo organismo do utente."
    ],
    "correctIndex": 1,
    "explanation": "A aplicação na enfermagem para geradores de radionuclídeos sem cíclotron local: o gerador de ⁶⁸Ge/⁶⁸Ga baseia-se no princípio: O enfermeiro administra o radiofármaco de ⁶⁸Ga respeitando a semivida de 68 minutos, promovendo a hidratação e micção frequente para reduzir a dose na bexiga. Esta prática garante a segurança radiológica do doente e da equipa.",
    "distractorAnalysis": [
      "Está incorreta: os péptidos marcados com ⁶⁸Ga revolucionaram a teranóstica: diagnóstico preciso por PET-CT acoplado à subsequente terapia com ¹⁷⁷Lu (como ¹⁷⁷Lu-PSMA).",
      "Está incorreta: geradores de radionuclídeos não são autoclaves de esterilização; a sua finalidade é estritamente a extração de radiofármacos diagnósticos.",
      "Está incorreta: o Gálio-68 emite positrões de alta energia (E_max ≈ 1,9 MeV) que aniquilam em gamas de 511 keV, exigindo blindagens espessas de chumbo e tungsténio."
    ],
    "nursingApplication": "O enfermeiro administra o radiofármaco de ⁶⁸Ga respeitando a semivida de 68 minutos, promovendo a hidratação e micção frequente para reduzir a dose na bexiga."
  },
  {
    "id": 6182,
    "topicId": 6,
    "question": "Um enfermeiro estuda os fundamentos teóricos da estabilidade da matéria e as propriedades físicas em 'geradores de radionuclídeos sem cíclotron local: o gerador de ⁶⁸Ge/⁶⁸Ga'. Qual das seguintes afirmações expressa a relação física correta?",
    "options": [
      "No equilíbrio secular, a atividade do radionuclídeo filho diminui para metade a cada trinta segundos após a conclusão do procedimento de eluição com ácido clorídrico.",
      "A regeneração da atividade de Gálio-68 na coluna depende exclusivamente da intensidade da luz solar que incide sobre a janela do laboratório de radiofarmácia.",
      "No equilíbrio secular do gerador ⁶⁸Ge/⁶⁸Ga (λ_pai << λ_filho), a atividade do filho regenera-se quase totalmente após 4 a 5 horas, permitindo múltiplas eluições no mesmo dia.",
      "A constante de decaimento do Germânio-68 é cem vezes superior à do Gálio-68, violando o princípio fundamental da conservação da energia na física relativista."
    ],
    "correctIndex": 2,
    "explanation": "A análise teórica e experimental confirma que O Gálio-68 é utilizado na marcação de péptidos como o DOTA-TOC para diagnóstico de tumores neuroendócrinos e PSMA para cancro da próstata. O domínio destes conceitos permite ao enfermeiro compreender as bases da física nuclear hospitalar.",
    "distractorAnalysis": [
      "Está incorreta: a curva de crescimento é A_Ga(t) = A_Ge · (1 - e^(-λ_Ga·t)); para t ≈ 3 a 4 semividas (~4 h), atinge-se >95% da atividade máxima teórica para nova eluição.",
      "Está incorreta: o Gálio-68 eluido decai com a sua semivida física característica de 67,7 minutos, sem qualquer relação com intervalos de 30 segundos.",
      "Está incorreta: decaimentos nucleares e equilíbrio radiativo dependem de propriedades quânticas intranucleares, sendo completamente independentes da luz solar ambiente."
    ],
    "nursingApplication": "O enfermeiro administra o radiofármaco de ⁶⁸Ga respeitando a semivida de 68 minutos, promovendo a hidratação e micção frequente para reduzir a dose na bexiga."
  },
  {
    "id": 6183,
    "topicId": 6,
    "question": "Na física do núcleo atómico e das forças nucleares aplicada ao contexto dos radiofármacos e saúde, em relação a 'vantagem diagnóstica da tomografia PET sobre a SPECT convencional', qual é a fundamentação científica exata?",
    "options": [
      "O PET apresenta menor sensibilidade do que a SPECT porque os fotões de aniquilação são absorvidos em cem por cento pelas roupas de algodão do doente durante o exame.",
      "A tomografia PET é superior porque utiliza feixes contínuos de raios laser que atravessam o corpo humano sem sofrer qualquer desvio óptico ou reflexão tecidual.",
      "A única vantagem do PET em relação à câmara gama convencional reside no facto de os equipamentos PET não consumirem qualquer tipo de energia elétrica da rede.",
      "O PET utiliza colimação eletrónica (deteção em coincidência de dois fotões de 511 keV a 180°), eliminando colimadores mecânicos de chumbo e aumentando a sensibilidade em 100 a 1000 vezes."
    ],
    "correctIndex": 3,
    "explanation": "Em física nuclear médica, vantagem diagnóstica da tomografia PET sobre a SPECT convencional explica-se pelo facto de que a deteção em coincidência a 180° dos fotões de aniquilação no PET elimina a necessidade de colimadores físicos de chumbo que bloqueiam mais de 99% da radiação útil na SPECT. Isto confere à imagem PET uma sensibilidade centenas de vezes superior e uma resolução espacial subcentimétrica muito mais nítida para detetar micrometástases tumorais.",
    "distractorAnalysis": [
      "Está incorreta: a SPECT rejeita >99,9% dos fotões no colimador mecânico para definir o ângulo; o PET não precisa de colimador mecânico, alcançando altíssima sensibilidade e resolução.",
      "Está incorreta: tecidos e roupas comuns são quase transparentes a fotões de 511 keV (comprimento de atenuação em tecidos moles ~10 cm); o PET tem sensibilidade muitíssimo superior.",
      "Está incorreta: o PET é uma técnica tomográfica baseada na emissão de positrões nucleares e deteção cintilográfica em anel, não utilizando lasers ópticos no corpo."
    ],
    "nursingApplication": "O enfermeiro apoia o utente na preparação para o PET-CT oncológico, garantindo o repouso absoluto num quarto calmo e escuro após a injeção da ¹⁸F-FDG para evitar a captação muscular indesejada."
  },
  {
    "id": 6184,
    "topicId": 6,
    "question": "Durante os cuidados de enfermagem e manipulação de radioisótopos hospitalares, como se manifesta na prática clínica o conceito de 'vantagem diagnóstica da tomografia PET sobre a SPECT convencional'?",
    "options": [
      "A superior sensibilidade e resolução espacial do PET (~4 mm vs ~10 mm na SPECT) permite detetar lesões tumorais milimétricas e quantificar com rigor a concentração regional de traçador (SUV).",
      "A vantagem do PET obriga o enfermeiro a manter o doente em repouso na posição de decúbito ventral estrito durante quarenta e oito horas consecutivas após a injeção.",
      "A tecnologia PET permite realizar diagnósticos oncológicos instantâneos sem necessidade de administrar qualquer radiofármaco ou substância de contraste ao utente.",
      "O uso do PET impede que os doentes realizem colheitas de sangue nos trinta dias seguintes ao exame sob risco de precipitação irreversível da hemoglobina livre."
    ],
    "correctIndex": 0,
    "explanation": "A aplicação na enfermagem para vantagem diagnóstica da tomografia PET sobre a SPECT convencional baseia-se no princípio: O enfermeiro apoia o utente na preparação para o PET-CT oncológico, garantindo o repouso absoluto num quarto calmo e escuro após a injeção da ¹⁸F-FDG para evitar a captação muscular indesejada. Esta prática garante a segurança radiológica do doente e da equipa.",
    "distractorAnalysis": [
      "Está incorreta: a quantificação precisa em Bq/ml e o cálculo do SUV (Standardized Uptake Value) tornam o PET a ferramenta de eleição no estadiamento e resposta tumoral precoce.",
      "Está incorreta: após o período de captação em repouso confortável (~60 min para ¹⁸F-FDG) a aquisição dura cerca de 15 a 20 min, sem repousos prolongados de 48 h.",
      "Está incorreta: o PET requer obrigatoriamente a administração intravenosa de um radiofármaco emissor de positrões; colheitas sanguíneas de rotina podem ser feitas com segurança."
    ],
    "nursingApplication": "O enfermeiro apoia o utente na preparação para o PET-CT oncológico, garantindo o repouso absoluto num quarto calmo e escuro após a injeção da ¹⁸F-FDG para evitar a captação muscular indesejada."
  },
  {
    "id": 6185,
    "topicId": 6,
    "question": "Um enfermeiro estuda os fundamentos teóricos da estabilidade da matéria e as propriedades físicas em 'vantagem diagnóstica da tomografia PET sobre a SPECT convencional'. Qual das seguintes afirmações expressa a relação física correta?",
    "options": [
      "A linha de resposta na tecnologia PET é traçada manualmente pelo enfermeiro utilizando uma régua metálica graduada e uma caneta de feltro indelével sobre o tórax do doente.",
      "A determinação precisa da Linha de Resposta (LOR) entre dois detetores ativados simultaneamente no anel PET possibilita reconstruções tomográficas tridimensionais de alta fidelidade.",
      "A deteção em coincidência no PET ocorre apenas se os dois fotões chegarem aos detetores com um intervalo de tempo superior a duas horas entre a primeira e a segunda colisão.",
      "A colimação eletrónica do PET depende exclusivamente da presença de campos magnéticos constantes gerados por ímanes permanentes instalados no chão da sala de exames."
    ],
    "correctIndex": 1,
    "explanation": "A análise teórica e experimental confirma que Isto confere à imagem PET uma sensibilidade centenas de vezes superior e uma resolução espacial subcentimétrica muito mais nítida para detetar micrometástases tumorais. O domínio destes conceitos permite ao enfermeiro compreender as bases da física nuclear hospitalar.",
    "distractorAnalysis": [
      "Está incorreta: circuitos eletrónicos de tempo de voo (Time-of-Flight / TOF) e coincidência temporal em janela de nanossegundos (ex: 4-6 ns) registam a LOR automaticamente no anel.",
      "Está incorreta: a reconstrução é puramente computacional através de algoritmos matemáticos iterativos (ex: OSEM) a partir de milhões de linhas de resposta captadas.",
      "Está incorreta: a janela temporal de coincidência é de poucos nanossegundos (10⁻⁹ s); intervalos de horas correspondem a eventos aleatórios espúrios sem qualquer relação."
    ],
    "nursingApplication": "O enfermeiro apoia o utente na preparação para o PET-CT oncológico, garantindo o repouso absoluto num quarto calmo e escuro após a injeção da ¹⁸F-FDG para evitar a captação muscular indesejada."
  },
  {
    "id": 6186,
    "topicId": 6,
    "question": "Na física do núcleo atómico e das forças nucleares aplicada ao contexto dos radiofármacos e saúde, em relação a 'paradoxo clássico da partícula alfa presa no núcleo atómico', qual é a fundamentação científica exata?",
    "options": [
      "O paradoxo da partícula alfa consiste no facto de esta possuir massa negativa quando se encontra no interior de núcleos atómicos em repouso no espaço vazio.",
      "Segundo a mecânica clássica, a partícula alfa deveria ser expelida do núcleo a uma velocidade cem vezes superior à velocidade da luz no vácuo cósmico.",
      "Classicamente, a partícula alfa (com energia cinética de ~4 a 8 MeV) está confinada num poço por uma barreira de Coulomb de ~25 a 30 MeV, sendo impossível escapar segundo Newton.",
      "O paradoxo reside na observação de que as partículas alfa se transformam espontaneamente em moléculas de gás hélio líquido ao entrarem em contacto com a água."
    ],
    "correctIndex": 2,
    "explanation": "Em física nuclear médica, paradoxo clássico da partícula alfa presa no núcleo atómico explica-se pelo facto de que pela física clássica, a partícula alfa dentro de um núcleo pesado possui energia cinética de cerca de 4 a 9 MeV, enquanto a barreira de repulsão coulombiana das bordas do núcleo atinge cerca de 25 a 30 MeV. Mecanicamente, seria impossível para a partícula alfa 'saltar por cima' de uma barreira três vezes superior à sua energia, prevendo que nenhum núcleo deveria sofrer decaimento alfa.",
    "distractorAnalysis": [
      "Está incorreta: no modelo clássico uma partícula com E < V_barreira não tem energia cinética para subir a colina potencial; a barreira repulsiva de Coulomb deveria aprisioná-la para sempre.",
      "Está incorreta: nucleões e partículas alfa possuem massas positivas bem determinadas; o paradoxo decorre estritamente da barreira de potencial e da conservação da energia mecânica.",
      "Está incorreta: a relatividade proíbe velocidades superiores a c; na física clássica de Newton a energia insuficiente (E < V) impede qualquer escape (probabilidade estritamente nula)."
    ],
    "nursingApplication": "A resolução deste enigma histórico por George Gamow em 1928 foi um dos maiores triunfos da física quântica moderna."
  },
  {
    "id": 6187,
    "topicId": 6,
    "question": "Durante os cuidados de enfermagem e manipulação de radioisótopos hospitalares, como se manifesta na prática clínica o conceito de 'paradoxo clássico da partícula alfa presa no núcleo atómico'?",
    "options": [
      "O paradoxo da partícula alfa obriga a equipa de enfermagem a administrar doses maciças de vitaminas antioxidantes aos doentes antes de qualquer cintigrafia de rotina.",
      "Essa questão física faz com que os contentores de transporte de radionuclídeos fiquem carregados com alta tensão eletrostática perigosa ao toque humano desprotegido.",
      "O paradoxo impede a medição da pressão arterial nos doentes internados que tenham realizado tratamentos com radiofármacos nas últimas quarenta e oito horas de internamento.",
      "A resolução quântica do paradoxo explica por que nuclídeos alfa-emissores (como ²²³Ra e ²²⁵Ac) conseguem decair e ser utilizados com eficácia letal na radioterapia oncológica."
    ],
    "correctIndex": 3,
    "explanation": "A aplicação na enfermagem para paradoxo clássico da partícula alfa presa no núcleo atómico baseia-se no princípio: A resolução deste enigma histórico por George Gamow em 1928 foi um dos maiores triunfos da física quântica moderna. Esta prática garante a segurança radiológica do doente e da equipa.",
    "distractorAnalysis": [
      "Está incorreta: sem o escape quântico por efeito de túnel, a radioatividade alfa não existiria na natureza e radiofármacos terapêuticos inovadores (TAT) não seriam viáveis.",
      "Está incorreta: a administração de antioxidantes não afeta as taxas de decaimento nuclear; protocolos clínicos baseiam-se em dosimetria e avaliação de funções hematológica e renal.",
      "Está incorreta: blindagens de transporte são neutras e aterradas; parâmetros fisiológicos como pressão arterial são monitorizados normalmente pela equipa de enfermagem."
    ],
    "nursingApplication": "A resolução deste enigma histórico por George Gamow em 1928 foi um dos maiores triunfos da física quântica moderna."
  },
  {
    "id": 6188,
    "topicId": 6,
    "question": "Um enfermeiro estuda os fundamentos teóricos da estabilidade da matéria e as propriedades físicas em 'paradoxo clássico da partícula alfa presa no núcleo atómico'. Qual das seguintes afirmações expressa a relação física correta?",
    "options": [
      "A física clássica previa que a probabilidade de escape da partícula alfa com energia inferior à barreira de potencial fosse rigorosamente zero, tornando o decaimento alfa incompreensível.",
      "A mecânica clássica previa que todos os núcleos atómicos com mais de cinquenta nucleões deveriam explodir instantaneamente no momento da sua formação física.",
      "Na física de Newton, as partículas alfa viajavam ao longo de órbitas elípticas fechadas em torno dos eletrões periféricos sem nunca colidirem com o núcleo atómico.",
      "A teoria clássica afirmava que a emissão alfa ocorria apenas quando a temperatura do núcleo atómico descia abaixo do limite físico de congelamento do nitrogénio."
    ],
    "correctIndex": 0,
    "explanation": "A análise teórica e experimental confirma que Mecanicamente, seria impossível para a partícula alfa 'saltar por cima' de uma barreira três vezes superior à sua energia, prevendo que nenhum núcleo deveria sofrer decaimento alfa. O domínio destes conceitos permite ao enfermeiro compreender as bases da física nuclear hospitalar.",
    "distractorAnalysis": [
      "Está incorreta: na física clássica a região sob a barreira tem energia cinética negativa (impossível); apenas a mecânica quântica ondulatória permitiu explicar a penetração de barreira.",
      "Está incorreta: as previsões clássicas erravam ao assumir determinismo rígido de trajetórias e impossibilidade de transposição de barreiras de potencial mais altas do que a energia.",
      "Está incorreta: partículas alfa constituem o próprio núcleo ou são ejetadas dele, não orbitando eletrões da periferia atómica."
    ],
    "nursingApplication": "A resolução deste enigma histórico por George Gamow em 1928 foi um dos maiores triunfos da física quântica moderna."
  },
  {
    "id": 6189,
    "topicId": 6,
    "question": "Na física do núcleo atómico e das forças nucleares aplicada ao contexto dos radiofármacos e saúde, em relação a 'mecanismo quântico de Tunelamento (Quantum Tunneling)', qual é a fundamentação científica exata?",
    "options": [
      "O tunelamento quântico é a abertura de orifícios mecânicos microscópicos nas paredes de chumbo da câmara quente provocada pelo atrito contínuo do feixe de radiação.",
      "No Tunelamento Quântico (Gamow, 1928), a função de onda da partícula alfa penetra na barreira de Coulomb com caimento exponencial, conferindo uma probabilidade finita de atravessamento.",
      "Esse mecanismo consiste na transformação da partícula alfa numa onda sonora de baixa frequência que se propaga através dos tecidos celulares sem ionizar os átomos.",
      "O tunelamento ocorre quando os protões do núcleo atómico absorvem fotões de luz visível amarela para neutralizar temporariamente o campo elétrico dipolar da matéria."
    ],
    "correctIndex": 1,
    "explanation": "Em física nuclear médica, mecanismo quântico de Tunelamento (Quantum Tunneling) explica-se pelo facto de que como a matéria tem comportamento ondulatório (equação de onda de Schrödinger e comprimento de onda de De Broglie), a função de onda da partícula alfa não se anula na barreira. Existe uma probabilidade matemática finita e não-nula de a função de onda atravessar a barreira de potencial proibida e emergir do outro lado, permitindo que a partícula alfa escape do núcleo.",
    "distractorAnalysis": [
      "Está incorreta: a solução da equação de Schrödinger na barreira revela que a amplitude da função de onda diminui exponencialmente (|ψ|² ∝ e^(-2G)), resultando em probabilidade finita de emergência.",
      "Está incorreta: tunelamento é um fenómeno ondulatório quântico subatómico na barreira de energia potencial do núcleo, sem qualquer perfuração física mecânica em blindagens.",
      "Está incorreta: a partícula alfa mantém a sua natureza de pacote de onda quântico carregado (+2e); não se converte em onda acústica nem depende de luz amarela."
    ],
    "nursingApplication": "Este fenómeno de penetração de barreira quântica é a base física universal de todos os decaimentos alfa espontâneos."
  },
  {
    "id": 6190,
    "topicId": 6,
    "question": "Durante os cuidados de enfermagem e manipulação de radioisótopos hospitalares, como se manifesta na prática clínica o conceito de 'mecanismo quântico de Tunelamento (Quantum Tunneling)'?",
    "options": [
      "O tunelamento quântico obriga o enfermeiro a utilizar luvas magnéticas especiais para recolher as agulhas utilizadas na punção de cateteres venosos centrais.",
      "Essa propriedade quântica faz com que os radiofármacos administrados por via parenteral desapareçam do organismo sem deixar qualquer rasto metabólico na urina.",
      "O tunelamento determina a semivida dos emissores alfa: uma pequena variação na energia cinética da alfa altera a probabilidade do túnel em muitas ordens de magnitude.",
      "O tunelamento permite aos profissionais de saúde atravessar paredes de betão armado sem abrir as portas durante situações de emergência radiológica no hospital."
    ],
    "correctIndex": 2,
    "explanation": "A aplicação na enfermagem para mecanismo quântico de Tunelamento (Quantum Tunneling) baseia-se no princípio: Este fenómeno de penetração de barreira quântica é a base física universal de todos os decaimentos alfa espontâneos. Esta prática garante a segurança radiológica do doente e da equipa.",
    "distractorAnalysis": [
      "Está incorreta: a probabilidade de penetração é exponencialmente sensível à largura e altura da barreira; energias ligeiramente maiores resultam em semividas milhões de vezes mais curtas.",
      "Está incorreta: agulhas cirúrgicas de punção são de aço inoxidável médico manuseadas com luvas de proteção estéreis comuns e descartadas em recipientes para cortoperfurantes rígidos.",
      "Está incorreta: o tunelamento atua na escala quântica subatómica dos núcleos atómicos; objetos macroscópicos e corpos humanos têm probabilidade de tunelamento rigorosamente nula."
    ],
    "nursingApplication": "Este fenómeno de penetração de barreira quântica é a base física universal de todos os decaimentos alfa espontâneos."
  },
  {
    "id": 6191,
    "topicId": 6,
    "question": "Um enfermeiro estuda os fundamentos teóricos da estabilidade da matéria e as propriedades físicas em 'mecanismo quântico de Tunelamento (Quantum Tunneling)'. Qual das seguintes afirmações expressa a relação física correta?",
    "options": [
      "A probabilidade de tunelamento quântico é diretamente proporcional à massa do doente e inversamente proporcional ao volume de soro infundido por via intravenosa.",
      "O mecanismo de tunelamento viola a lei de conservação da carga elétrica total, criando protões adicionais no interior do núcleo atómico durante a transição radiativa.",
      "A probabilidade de tunelamento quântico é estritamente independente da energia da partícula alfa, sendo rigorosamente idêntica em todos os radionuclídeos existentes.",
      "O fator de Gamow G = ∫ √(2m(V(r) - E))/ħ dr determina a transparência da barreira (P ≈ e^(-2G)), demonstrando que a probabilidade de escape depende criticamente de E_cinética."
    ],
    "correctIndex": 3,
    "explanation": "A análise teórica e experimental confirma que Existe uma probabilidade matemática finita e não-nula de a função de onda atravessar a barreira de potencial proibida e emergir do outro lado, permitindo que a partícula alfa escape do núcleo. O domínio destes conceitos permite ao enfermeiro compreender as bases da física nuclear hospitalar.",
    "distractorAnalysis": [
      "Está incorreta: o fator de penetração WKB de Gamow integra o momento imaginário dentro da barreira; como G depende de 1/√E, pequenas variações em E amplificam drasticamente P.",
      "Está incorreta: o fator de Gamow depende unicamente de constantes fundamentais (massa da partícula alfa m, carga do núcleo Z, energia E e constante de Planck reduzida ħ).",
      "Está incorreta: a carga elétrica, o número de nucleões e a energia total conservam-se estritamente em todos os decaimentos por tunelamento quântico."
    ],
    "nursingApplication": "Este fenómeno de penetração de barreira quântica é a base física universal de todos os decaimentos alfa espontâneos."
  },
  {
    "id": 6192,
    "topicId": 6,
    "question": "Na física do núcleo atómico e das forças nucleares aplicada ao contexto dos radiofármacos e saúde, em relação a 'Lei de Geiger-Nuttall e a dependência exponencial da semivida', qual é a fundamentação científica exata?",
    "options": [
      "A Lei de Geiger-Nuttall estabelece uma relação linear empírica entre o logaritmo da constante de decaimento (ln λ) e o inverso da raiz quadrada da energia alfa (E^(-1/2)).",
      "A Lei de Geiger-Nuttall dita que a semivida de qualquer radiofármaco diminui linearmente com a temperatura ambiente da sala de armazenamento da radiofarmácia hospitalar.",
      "Essa lei física estabelece que o alcance das partículas alfa no ar é rigorosamente igual a dez metros para qualquer radionuclídeo emissor alfa conhecido no mundo.",
      "A relação de Geiger-Nuttall comprova que a velocidade dos protões emitidos pelos núcleos pesados é diretamente proporcional ao índice de massa corporal do utente."
    ],
    "correctIndex": 0,
    "explanation": "Em física nuclear médica, Lei de Geiger-Nuttall e a dependência exponencial da semivida explica-se pelo facto de que a probabilidade de tunelamento quântico depende de forma extremamente sensível da energia da partícula alfa e da espessura da barreira coulombiana. Uma pequena variação na energia alfa (de 4 para 8 MeV) faz a semivida física do elemento radioativo desabar de milhares de milhões de anos (como no ²³⁸U) para escassos microssegundos (como no ²¹⁴Po).",
    "distractorAnalysis": [
      "Está incorreta: log₁₀ λ = C₁ - C₂ / √E_α; esta fórmula reflete com enorme precisão a física do tunelamento de Gamow através da barreira eletrostática de Coulomb.",
      "Está incorreta: a semivida independe da temperatura macroscópica da sala; a lei de Geiger-Nuttall relaciona a taxa de decaimento nuclear com a energia da partícula alfa ejetada.",
      "Está incorreta: o alcance da partícula alfa no ar é de poucos centímetros (~2 a 8 cm em ar ambiente à pressão normal), sendo facilmente travada por uma folha de papel."
    ],
    "nursingApplication": "Esta dependência exponencial explica por que diferentes emissores alfa apresentam tempos de vida tão vastamente heterogéneos na natureza."
  },
  {
    "id": 6193,
    "topicId": 6,
    "question": "Durante os cuidados de enfermagem e manipulação de radioisótopos hospitalares, como se manifesta na prática clínica o conceito de 'Lei de Geiger-Nuttall e a dependência exponencial da semivida'?",
    "options": [
      "Permite aos enfermeiros calcular a dosagem de antibióticos orais necessária para tratar infeções respiratórias agudas em doentes internados na enfermaria médica.",
      "Explica por que emissores alfa com energias ligeiramente diferentes têm semividas dramaticamente díspares (por exemplo, ²¹²Po com E = 8,8 MeV tem T₁/₂ = 0,3 µs e ²³⁸U com E = 4,2 MeV tem 4,5 mil milhões de anos).",
      "A lei indica que o enfermeiro deve substituir as luvas cirúrgicas a cada dois segundos para evitar a absorção de calor por condução térmica direta da pele.",
      "Essa relação empírica dita que a radiação alfa emitida por radiofármacos hospitalares perde o seu poder ionizante quando entra em contacto com soro glucosado."
    ],
    "correctIndex": 1,
    "explanation": "A aplicação na enfermagem para Lei de Geiger-Nuttall e a dependência exponencial da semivida baseia-se no princípio: Esta dependência exponencial explica por que diferentes emissores alfa apresentam tempos de vida tão vastamente heterogéneos na natureza. Esta prática garante a segurança radiológica do doente e da equipa.",
    "distractorAnalysis": [
      "Está incorreta: uma diferença de apenas um fator 2 na energia da partícula alfa (4,2 MeV vs 8,8 MeV) traduz-se numa variação da semivida de mais de 23 ordens de magnitude.",
      "Está incorreta: dosagens de antibióticos baseiam-se em farmacocinética/farmacodinâmica médica e microbiologia clínica, sem relação com a lei nuclear de Geiger-Nuttall.",
      "Está incorreta: luvas cirúrgicas são trocadas por critérios assépticos e de integridade física; o poder ionizante das alfas decorre da interação coulombiana com os eletrões do meio."
    ],
    "nursingApplication": "Esta dependência exponencial explica por que diferentes emissores alfa apresentam tempos de vida tão vastamente heterogéneos na natureza."
  },
  {
    "id": 6194,
    "topicId": 6,
    "question": "Um enfermeiro estuda os fundamentos teóricos da estabilidade da matéria e as propriedades físicas em 'Lei de Geiger-Nuttall e a dependência exponencial da semivida'. Qual das seguintes afirmações expressa a relação física correta?",
    "options": [
      "A dependência observada na lei de Geiger-Nuttall resulta da fricção mecânica das partículas alfa contra as membranas plasmáticas das células epiteliais do pulmão.",
      "A fórmula empírica de Geiger-Nuttall viola o princípio da conservação da energia mecânica ao criar massa espontânea durante a travessia das partículas ionizantes.",
      "A extrema sensibilidade exponencial da constante λ face à energia E decorre diretamente da probabilidade de penetração por efeito de túnel da mecânica quântica ondulatória.",
      "A relação logarítmica é um artefacto estatístico que desaparece quando os ensaios de deteção nuclear são efetuados no interior de câmaras hiperbáricas hospitalares."
    ],
    "correctIndex": 2,
    "explanation": "A análise teórica e experimental confirma que Uma pequena variação na energia alfa (de 4 para 8 MeV) faz a semivida física do elemento radioativo desabar de milhares de milhões de anos (como no ²³⁸U) para escassos microssegundos (como no ²¹⁴Po). O domínio destes conceitos permite ao enfermeiro compreender as bases da física nuclear hospitalar.",
    "distractorAnalysis": [
      "Está incorreta: a integração da barreira WKB fornece ln λ ∝ -Z_filho / √E; assim, a teoria de Gamow deduziu teoricamente a lei empírica de Geiger-Nuttall descoberta em 1911.",
      "Está incorreta: a lei governa a ejeção intranuclear da partícula alfa a partir do núcleo atómico, ocorrendo muito antes de qualquer interação com tecidos biológicos exteriores.",
      "Está incorreta: a relação é um facto físico fundamental comprovado experimentalmente em todos os laboratórios do mundo, válido em qualquer pressão ambiente."
    ],
    "nursingApplication": "Esta dependência exponencial explica por que diferentes emissores alfa apresentam tempos de vida tão vastamente heterogéneos na natureza."
  },
  {
    "id": 6195,
    "topicId": 6,
    "question": "Na física do núcleo atómico e das forças nucleares aplicada ao contexto dos radiofármacos e saúde, em relação a 'natureza intrinsecamente estocástica e probabilística do decaimento radioativo', qual é a fundamentação científica exata?",
    "options": [
      "O decaimento é um processo mecânico estritamente determinista onde todos os átomos de uma amostra decaem rigorosamente ao mesmo milissegundo por sincronização acústica.",
      "A taxa de decaimento de um núcleo individual cresce à medida que o núcleo envelhece, fazendo com que núcleos antigos decaiam muito mais depressa do que núcleos jovens.",
      "A natureza estocástica do decaimento radioativo significa que os radiofármacos hospitalares podem deixar de emitir qualquer tipo de radiação ionizante se o doente orar com fé.",
      "O decaimento radioativo é um processo puramente estocástico: é impossível prever quando um núcleo individual vai decair, mas a probabilidade de decaimento por unidade de tempo (λ) é constante."
    ],
    "correctIndex": 3,
    "explanation": "Em física nuclear médica, natureza intrinsecamente estocástica e probabilística da desintegração radioativa explica-se pelo facto de que é absolutamente impossível prever em que momento exato um núcleo atómico instável específico e individual irá desintegrar-se. Cada núcleo tem uma probabilidade constante de decair por unidade de tempo ($\\lambda$, constante de decaimento), independentemente da sua idade anterior ('os núcleos atómicos não envelhecem').",
    "distractorAnalysis": [
      "Está incorreta: o decaimento é um fenómeno quântico sem memória ('memoryless'); cada núcleo mantém a mesma probabilidade infinitesimal dP = λ·dt de decair a cada instante.",
      "Está incorreta: átomos radioativos não decaem em uníssono; o processo é estatístico e gradual, seguindo a lei exponencial macroscópica N(t) = N₀·e^(-λt).",
      "Está incorreta: núcleos atómicos não têm envelhecimento biológico ou mecânico; um núcleo de Urânio-238 formado há 4 mil milhões de anos tem a mesma probabilidade de decair que um recém-criado."
    ],
    "nursingApplication": "A física nuclear lida rigorosamente com leis estatísticas de grandes números de átomos ($N(t) = N_0 \\cdot e^{-\\lambda t}$)."
  },
  {
    "id": 6196,
    "topicId": 6,
    "question": "Durante os cuidados de enfermagem e manipulação de radioisótopos hospitalares, como se manifesta na prática clínica o conceito de 'natureza intrinsecamente estocástica e probabilística do decaimento radioativo'?",
    "options": [
      "A natureza aleatória do decaimento faz com que a contagem de impulsos em detetores de radiação siga a estatística de Poisson, com incerteza padrão proporcional à raiz quadrada de N (σ = √N).",
      "O comportamento probabilístico do decaimento impede a realização de cálculos dosimétricos seguros, tornando a administração de radiofármacos uma roleta russa clínica imprevisível.",
      "A aleatoriedade do processo permite ao profissional de saúde escolher livremente se quer usar ou não o dosímetro individual de radiação durante o seu turno de trabalho.",
      "A probabilidade de decaimento é influenciada pelo estado emocional do enfermeiro, acelerando sempre que este se encontra sob stress intenso no serviço de urgência."
    ],
    "correctIndex": 0,
    "explanation": "A aplicação na enfermagem para natureza intrinsecamente estocástica e probabilística da desintegração radioativa baseia-se no princípio: A física nuclear lida rigorosamente com leis estatísticas de grandes números de átomos ($N(t) = N_0 \\cdot e^{-\\lambda t}$). Esta prática garante a segurança radiológica do doente e da equipa.",
    "distractorAnalysis": [
      "Está incorreta: na distribuição de Poisson o desvio-padrão é σ = √N e o erro relativo é σ/N = 1/√N; para obter precisão de 1% é necessário registar no mínimo 10 000 contagens no detetor.",
      "Está incorreta: para números astronómicos de átomos (1 MBq = 10⁶ decaimentos/segundo) a lei dos grandes números torna o comportamento macroscópico perfeitamente previsível e dosável.",
      "Está incorreta: o uso do dosímetro individual é uma obrigação legal e técnica permanente de segurança no trabalho para todos os profissionais ocupacionalmente expostos."
    ],
    "nursingApplication": "A física nuclear lida rigorosamente com leis estatísticas de grandes números de átomos ($N(t) = N_0 \\cdot e^{-\\lambda t}$)."
  },
  {
    "id": 6197,
    "topicId": 6,
    "question": "Um enfermeiro estuda os fundamentos teóricos da estabilidade da matéria e as propriedades físicas em 'natureza intrinsecamente estocástica e probabilística do decaimento radioativo'. Qual das seguintes afirmações expressa a relação física correta?",
    "options": [
      "A equação que rege a transmutação radioativa de radionuclídeos é uma função polinomial do terceiro grau cujo valor final depende do teor de glicose da solução injetável de perfusão.",
      "Para uma amostra radioativa contendo N núcleos, a taxa média de decaimentos por unidade de tempo é dN/dt = -λ·N, cuja integração resulta na lei exponencial universal N(t) = N₀ · e^(-λt).",
      "A integração da probabilidade de decaimento demonstra que a quantidade de átomos radioativos oscila sinusoidalmente no tempo entre zero e o dobro do valor inicial de massa.",
      "A lei de decaimento estabelece que cem por cento dos núcleos atómicos de qualquer amostra decaem radioativamente logo que é ultrapassado o tempo correspondente a uma semivida."
    ],
    "correctIndex": 1,
    "explanation": "A análise teórica e experimental confirma que Cada núcleo tem uma probabilidade constante de decair por unidade de tempo ($\\lambda$, constante de decaimento), independentemente da sua idade anterior ('os núcleos atómicos não envelhecem'). O domínio destes conceitos permite ao enfermeiro compreender as bases da física nuclear hospitalar.",
    "distractorAnalysis": [
      "Está incorreta: a premissa de que a probabilidade por núcleo é constante (λ) conduz diretamente à equação diferencial linear de primeira ordem e à solução exponencial clássica de Rutherford e Soddy.",
      "Está incorreta: o decaimento radioativo é estritamente monoexponencial para um nuclídeo simples e independe de fatores químicos ou formulações de glicose.",
      "Está incorreta: ao fim de uma semivida (t = T1/2) restam exatamente 50% dos núcleos originais; ao fim de 2 semividas restam 25%, e assim sucessivamente em progressão geométrica."
    ],
    "nursingApplication": "A física nuclear lida rigorosamente com leis estatísticas de grandes números de átomos ($N(t) = N_0 \\cdot e^{-\\lambda t}$)."
  },
  {
    "id": 6198,
    "topicId": 6,
    "question": "Na física do núcleo atómico e das forças nucleares aplicada ao contexto dos radiofármacos e saúde, em relação a 'relevância clínica da natureza estocástica da radiação na dosimetria', qual é a fundamentação científica exata?",
    "options": [
      "Os efeitos estocásticos da radiação ocorrem apenas quando o indivíduo é submetido a doses catastróficas agudas superiores a dez Gray de corpo inteiro num único segundo.",
      "A radiação ionizante não tem qualquer efeito probabilístico a longo prazo nos tecidos biológicos, causando unicamente queimaduras térmicas imediatas semelhantes ao calor de ferro de engomar.",
      "Na dosimetria de proteção radiológica, os efeitos estocásticos (como indução de neoplasias ou mutações genéticas) não têm dose limiar, e a probabilidade de ocorrência cresce com a dose (modelo LNT).",
      "Na radioproteção hospitalar considera-se que qualquer dose inferior a cem milisieverts confere imunidade permanente e previne o aparecimento de qualquer tipo de cancro."
    ],
    "correctIndex": 2,
    "explanation": "Em física nuclear médica, relevância clínica da natureza estocástica da radiação na dosimetria explica-se pelo facto de que como o decaimento e a subsequente interação com o DNA celular são processos aleatórios estocásticos governados pela probabilidade estatística quântica, qualquer dose pode teoricamente induzir uma alteração genética. Não existe uma dose mágica abaixo da qual a probabilidade de dano estocástico seja garantidamente zero.",
    "distractorAnalysis": [
      "Está incorreta: os efeitos estocásticos não possuem limiar de segurança comprovado; a sua gravidade é independente da dose, mas a probabilidade de ocorrer aumenta com a dose efetiva (Sievert).",
      "Está incorreta: efeitos com dose limiar e gravidade proporcional à dose são efeitos determinísticos (ou reações teciduais, ex: eritema, cataratas, síndrome aguda da radiação a >1-2 Gy).",
      "Está incorreta: a radiação provoca quebras no ADN celular que podem originar mutações oncogénicas décadas após a exposição, fundamentando a prudência do modelo Linear Sem Limiar (LNT)."
    ],
    "nursingApplication": "Esta constatação física reforça a responsabilidade profissional do enfermeiro em aplicar rigorosamente a radioproteção ALARA em todos os atos clínicos diários."
  },
  {
    "id": 6199,
    "topicId": 6,
    "question": "Durante os cuidados de enfermagem e manipulação de radioisótopos hospitalares, como se manifesta na prática clínica o conceito de 'relevância clínica da natureza estocástica da radiação na dosimetria'?",
    "options": [
      "O enfermeiro deve orientar o doente a permanecer de pé no centro do quarto sem comer nem beber durante vinte e quatro horas para evitar a disseminação de efeitos estocásticos.",
      "A aplicação clínica do modelo estocástico autoriza os profissionais a manusear seringas radioativas sem qualquer proteção de chumbo desde que trabalhem rapidamente.",
      "A equipa de enfermagem deve utilizar aventais de lã pura grossa para se proteger eficazmente contra a radiação ionizante emitida durante a administração de radioisótopos.",
      "O enfermeiro aplica o princípio ALARA ('As Low As Reasonably Achievable') na prática diária, minimizando o tempo de contacto, maximizando a distância e utilizando blindagens protetoras."
    ],
    "correctIndex": 3,
    "explanation": "A aplicação na enfermagem para relevância clínica da natureza estocástica da radiação na dosimetria baseia-se no princípio: Esta constatação física reforça a responsabilidade profissional do enfermeiro em aplicar rigorosamente a radioproteção ALARA em todos os atos clínicos diários. Esta prática garante a segurança radiológica do doente e da equipa.",
    "distractorAnalysis": [
      "Está incorreta: a tríade fundamental da proteção radiológica operacional é: Tempo (o mais curto), Distância (a maior possível, lei do inverso do quadrado) e Blindagem (adequada ao tipo de radiação).",
      "Está incorreta: doentes devem ser confortavelmente acomodados, hidratados e orientados a urinar com frequência para reduzir a dose na bexiga; a hidratação é altamente benéfica.",
      "Está incorreta: protetores de seringa em tungsténio ou chumbo reduzem a dose nas pontas dos dedos dos operadores por fatores superiores a 80-90%; lã comum não atenua radiação ionizante."
    ],
    "nursingApplication": "Esta constatação física reforça a responsabilidade profissional do enfermeiro em aplicar rigorosamente a radioproteção ALARA em todos os atos clínicos diários."
  },
  {
    "id": 6200,
    "topicId": 6,
    "question": "Um enfermeiro estuda os fundamentos teóricos da estabilidade da matéria e as propriedades físicas em 'relevância clínica da natureza estocástica da radiação na dosimetria'. Qual das seguintes afirmações expressa a relação física correta?",
    "options": [
      "A distinção entre efeitos estocásticos (sem limiar, probabilísticos, cancro/hereditários) e determinísticos (com limiar, severidade dose-dependente, eritema/necrose) fundamenta os limites regulamentares de dose.",
      "Efeitos estocásticos e determinísticos são termos sinónimos que descrevem a sensação psicológica de ansiedade manifestada pelos doentes antes de exames de medicina nuclear.",
      "Os limites de dose ocupacionais de vinte milisieverts por ano destinam-se exclusivamente a prevenir queimaduras térmicas visíveis na pele dos profissionais de saúde.",
      "A legislação hospitalar autoriza a receção de qualquer nível arbitrário de dose de radiação pelo pessoal médico desde que este assine uma declaração pessoal de renúncia de responsabilidade."
    ],
    "correctIndex": 0,
    "explanation": "A análise teórica e experimental confirma que Não existe uma dose mágica abaixo da qual a probabilidade de dano estocástico seja garantidamente zero. O domínio destes conceitos permite ao enfermeiro compreender as bases da física nuclear hospitalar.",
    "distractorAnalysis": [
      "Está incorreta: a filosofia da radioproteção (ICRP/CIPR) visa prevenir totalmente os efeitos determinísticos (mantendo as doses abaixo dos respetivos limiares) e limitar a probabilidade dos efeitos estocásticos a níveis aceitáveis.",
      "Está incorreta: estes conceitos provêm da radiobiologia e física médica fundamental, categorizando com rigor os mecanismos de dano celular e tecidual da radiação ionizante.",
      "Está incorreta: o limite ocupacional de dose efetiva (20 mSv/ano em média) visa reduzir o risco estocástico de indução de cancro a níveis comparáveis aos de indústrias seguras; é intransmissível e irrenunciável."
    ],
    "nursingApplication": "Esta constatação física reforça a responsabilidade profissional do enfermeiro em aplicar rigorosamente a radioproteção ALARA em todos os atos clínicos diários."
  }
];
