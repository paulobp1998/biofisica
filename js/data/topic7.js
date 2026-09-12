/**
 * Tópico 7: Partículas α, β e Radiações Gama
 * 50 Questões Científicas Rigorosas para o 1.º Ano de Enfermagem
 */

const TOPIC_7_QUESTIONS = [
  {
    id: 701,
    topicId: 7,
    question: "Qual é a constituição física fundamental de uma 'Partícula Alfa' (α) emitida durante o decaimento radioativo de núcleos atómicos pesados?",
    options: [
      "Um núcleo de Hélio-4 (⁴₂He²⁺), composto por 2 protões e 2 neutrões fortemente ligados, com carga elétrica positiva +2e e massa de aproximadamente 4 u.m.a.",
      "Um eletrão de alta velocidade com carga negativa e massa desprezível.",
      "Um fotão de radiação eletromagnética de energia pura sem massa.",
      "Um neutrão isolado em estado gasoso excitado."
    ],
    correctIndex: 0,
    explanation: "A partícula alfa (descoberta e caracterizada por Ernest Rutherford em 1899) é rigorosamente o núcleo desprovido de eletrões de um átomo de Hélio-4 (⁴₂He²⁺): é constituída por 2 protões e 2 neutrões. Apresenta carga elétrica líquida de +2e (+3,204 × 10⁻¹⁹ C) e massa atómica elevada (cerca de 4,0015 u ≈ 6,64 × 10⁻²⁷ kg, mais de 7300 vezes mais massiva do que um eletrão).",
    distractorAnalysis: [
      "Opção B descreve uma partícula beta negativa (β⁻).",
      "Opção C descreve um fotão gama (γ) ou raio X.",
      "Opção D descreve um neutrão livre."
    ],
    nursingApplication: "Na prática clínica, radiofármacos emissores alfa como o Rádio-223 (Xofigo) são administrados por via endovenosa por enfermeiros especializados para tratar metástases ósseas: a partícula alfa ejetada deposita toda a sua energia destrutiva num raio microscópico de poucas células, destruindo o tumor sem irradiar a medula óssea saudável adjacente."
  },
  {
    id: 702,
    topicId: 7,
    question: "O poder de penetração de uma partícula alfa na matéria condensada e no tecido biológico humano é considerado:",
    options: [
      "Extremamente baixo: tem um alcance no ar de apenas 3 a 5 cm e no tecido biológico de apenas 30 a 80 micrómetros (μm), sendo completamente travada pela camada córnea queratinizada morta da epiderme humana ou por uma folha de papel comum.",
      "Altíssimo, atravessando 5 metros de betão armado antes de parar.",
      "Idêntico ao dos raios gama de alta energia.",
      "Infinito no vácuo e nos tecidos corporais."
    ],
    correctIndex: 0,
    explanation: "Devido à sua grande massa (4 u) e elevada carga (+2e), a partícula alfa colide intensamente com os eletrões orbitais dos átomos circundantes, perdendo cerca de 100 keV de energia por cada micrómetro de tecido percorrido (alto LET). A sua energia cinética típica (4 a 8 MeV) esgota-se numa distância microscópica de escassos 40 a 80 μm (o diâmetro de apenas 4 a 6 células biológicas). A camada córnea superficial da pele humana (espessura de ~50 a 100 μm de células queratinizadas mortas) atua como uma blindagem impenetrável contra a radiação alfa externa.",
    distractorAnalysis: [
      "Opção B confunde partículas carregadas pesadas com neutrões de alta energia ou radiação cósmica.",
      "Opção C ignora a diferença abissal de penetração entre iões pesados (alfa) e fotões não-carregados sem massa (gama).",
      "Opção D viola o princípio universal da perda de energia mecânica por colisões coulombianas na matéria."
    ],
    nursingApplication: "Fontes radioativas alfa externas não representam qualquer risco de irradiação cutânea ou visceral através de recipientes intactos: uma folha de papel, o vidro da ampola ou as luvas de procedimento do enfermeiro retêm 100% de todas as partículas alfa emitidas."
  },
  {
    id: 703,
    topicId: 7,
    question: "Se uma partícula alfa é travada pela camada morta da epiderme, por que motivo as substâncias emissoras alfa (como o gás Radão-222 ou o Polónio-210) são consideradas as mais EXTREMAMENTE PERIGOSAS para a saúde humana em caso de 'Contaminação Interna'?",
    options: [
      "Porque, se forem inaladas, ingeridas ou penetrarem através de feridas cutâneas abertas, as partículas alfa são emitidas em contacto direto com células vivas vulneráveis; devido ao seu altíssimo LET (~100 keV/μm), causam quebras duplas complexas irreparáveis no DNA e danos cromossómicos massivos, elevando o risco de cancro e morte celular.",
      "Porque as partículas alfa transformam todas as moléculas de água do sangue em mercúrio tóxico.",
      "Porque as partículas alfa saem do corpo e destroem o prédio do hospital.",
      "Porque o corpo da pessoa se torna magnético e atrai para-raios."
    ],
    correctIndex: 0,
    explanation: "O perigo da radiação alfa inverte-se drasticamente na contaminação interna: no interior dos alvéolos pulmonares ou da mucosa gástrica, não existe camada córnea de queratina morta protetora. As partículas alfa depositam a sua colossal densidade de ionização diretamente sobre o núcleo das células epiteliais vivas. A ICRP atribui à radiação alfa o fator de ponderação máximo w_R = 20: cada Gray de dose alfa equivale a 20 Sieverts de dano biológico, sendo o gás Radão (²²²Rn) a segunda causa principal de cancro do pulmão no mundo a seguir ao tabaco.",
    distractorAnalysis: [
      "Opção B confunde radiobiologia celular com transmutações alquímicas medievais.",
      "Opção C ignora que o alcance alfa é submilimétrico, sendo incapaz de ultrapassar o corpo.",
      "Opção D é uma fantasia estapafúrdia sem qualquer base na física nuclear."
    ],
    nursingApplication: "Na gestão de incidentes radiológicos com emissores alfa, o enfermeiro foca a proteção na prevenção de contaminação interna: uso rigoroso de máscaras respiratórias de alta eficiência (FFP3 / N95), vestuário impermeável integral, proibição estrita de comer ou beber na área e lavagem imediata de qualquer corte ou ferida com água corrente abundante."
  },
  {
    id: 704,
    topicId: 7,
    question: "A emissão de uma partícula alfa por um núcleo radioativo genérico ᴬ_Z X obedece à Primeira Lei do Deslocamento Radioativo (Lei de Soddy e Fajans). Qual é a composição do núcleo filho resultante (Y)?",
    options: [
      "O número de massa diminui em 4 unidades (A - 4) e o número atómico diminui em 2 unidades (Z - 2): ᴬ_Z X -> ᴬ⁻⁴_Z₋₂ Y + ⁴₂He²⁺.",
      "O número atómico aumenta em 1 unidade e a massa mantém-se inalterada.",
      "O número atómico e o número de massa duplicam simultaneamente.",
      "O núcleo divide-se em 50 neutrões livres sem formar qualquer novo elemento."
    ],
    correctIndex: 0,
    explanation: "Pela conservação da carga elétrica (Z) e do número total de nucleões (A): a ejeção de uma partícula alfa (com 2 protões e 2 neutrões, ⁴₂He) remove 2 protões e 4 nucleões do núcleo pai. O núcleo filho resultante transmuta-se num novo elemento químico situado duas posições à esquerda na Tabela Periódica: ᴬ_Z X -> ᴬ⁻⁴_Z₋₂ Y + ⁴₂He. Por exemplo: ²²⁶₈₈Ra (Rádio) decai por alfa para ²²²₈₆Rn (gás Rádon).",
    distractorAnalysis: [
      "Opção B descreve a Lei de Soddy-Fajans para o decaimento beta negativo (β⁻).",
      "Opção C violaria abertamente a lei de conservação de massa e energia de Einstein.",
      "Opção D confunde desintegração alfa com fissão múltipla hipotética impossível."
    ],
    nursingApplication: "Conhecer a Lei de Soddy-Fajans permite ao enfermeiro compreender as séries de decaimento radioativo presentes nos efluentes e resíduos de medicina nuclear: saber que o Rádio-226 decai num gás nobre radioativo (Rádon-222) alerta para a necessidade de ventilação forçada em locais de armazenamento de fontes históricas."
  },
  {
    id: 705,
    topicId: 7,
    question: "Qual é a natureza física de uma 'Partícula Beta Negativa' (β⁻) emitida espontaneamente por núcleos atómicos com excesso de neutrões?",
    options: [
      "É um eletrão de alta energia e velocidade relativista originado no interior do núcleo atómico pela desintegração fraca de um neutrão num protão, eletrão e antineutrino do elétrão (n -> p + e⁻ + ν̄_e).",
      "É um protão que foi repelido pelo núcleo a alta velocidade.",
      "É uma molécula de oxigénio líquido comprimida.",
      "É um fragmento microscópico de plástico radioativo."
    ],
    correctIndex: 0,
    explanation: "Uma partícula beta negativa (β⁻) é, sob todos os aspetos físicos quânticos, idêntica a um eletrão (carga -1e, massa m_e ≈ 9,11 × 10⁻³¹ kg). Contudo, ela NÃO provém das camadas eletrónicas extranucleares do átomo: é criada e ejetada do próprio NÚCLEO atómico no instante do decaimento. Devido à Força Nuclear Fraca, um neutrão instável transforma-se num protão que permanece no núcleo, enquanto o eletrão (β⁻) e um antineutrino são ejetados a velocidades que podem atingir mais de 90% da velocidade da luz.",
    distractorAnalysis: [
      "Opção B violaria a conservação de carga (o protão tem carga positiva +1e e o beta negativo tem carga -1e).",
      "Opção C confunde estados moleculares da química com física de partículas fundamentais.",
      "Opção D é uma afirmação sem qualquer sentido científico."
    ],
    nursingApplication: "O Iodo-131 (¹³¹I), amplamente utilizado em enfermagem no tratamento do hipertiroidismo e cancro diferenciado da tiroide, é um emissor beta negativo (β⁻): os eletrões velozes penetram cerca de 1 a 2 mm no parênquima tiroideu, destruindo as células foliculares malignas por ionização focalizada sem atingir estruturas vitais vizinhas como as paratiroides."
  },
  {
    id: 706,
    topicId: 7,
    question: "Ao contrário das partículas alfa (que são emitidas com energias cinéticas discretas e fixas), as partículas beta são emitidas com um 'Espetro Contínuo de Energia' (desde zero até uma energia máxima E_max). Qual é a explicação biofísica fundamental para este fenómeno?",
    options: [
      "A energia total da desintegração nuclear (Q_beta) é partilhada de forma estatisticamente variável e contínua entre duas partículas ejetadas simultaneamente: a partícula beta e o antineutrino (ou neutrino).",
      "As partículas beta perdem energia ao raspar na pele do enfermeiro antes de sair da seringa.",
      "A velocidade da luz muda a cada microssegundo dentro do núcleo.",
      "A energia do núcleo depende da temperatura do ar condicionado da enfermaria."
    ],
    correctIndex: 0,
    explanation: "Na desintegração beta de 3 corpos (núcleo filho + partícula beta + neutrino): a energia total disponível da reação (Q_beta = Δm · c²) é partilhada continuamente entre a energia cinética da partícula beta e a energia do antineutrino: E_beta + E_neutrino = E_max. O antineutrino pode levar desde 0% até 100% da energia: por isso, a partícula beta exibe um espetro contínuo, com a energia média de emissão a situar-se tipicamente em cerca de um terço da energia máxima (E_média ≈ 1/3 E_max). Foi esta constatação de Wolfgang Pauli em 1930 que levou à previsão teórica da existência do neutrino.",
    distractorAnalysis: [
      "Opção B confunde perda de energia em meio externo com o espetro intrínseco de emissão no vácuo.",
      "Opção C viola a constante universal da velocidade da luz c.",
      "Opção D confunde temperaturas termodinâmicas ambientais insignificantes com energias nucleares de centenas de keV."
    ],
    nursingApplication: "Conhecer a energia média (E_média ≈ 1/3 E_max) é vital para o cálculo dosimétrico efetuado pela equipa de radioproteção: para o Iodo-131, embora E_max seja 606 keV, a energia média real depositada nas células da tiroide pelo feixe beta é de apenas cerca de 190 keV, sendo este o valor utilizado para determinar os dias de isolamento do doente."
  },
  {
    id: 707,
    topicId: 7,
    question: "Na blindagem de seringas e frascos contendo emissores de partículas Beta puras de alta energia (como o Ítrio-90, ⁹⁰Y, ou o Fósforo-32, ³²P), qual é o material de eleição que deve ser utilizado na barreira primária imediata?",
    options: [
      "Materiais plásticos ou acrílicos de BAIXO número atómico Z (como o Perspex, polimetilmetacrilato ou resinas acrílicas transparentes com espessura de 1 a 1,5 cm).",
      "Chumbo puro maciço espesso colocado em contacto direto com a seringa.",
      "Folhas finas de papel toalha hospitalar.",
      "Placas de ouro e platina de alto número atómico."
    ],
    correctIndex: 0,
    explanation: "Quando eletrões de alta velocidade (partículas beta) colidem com materiais de ALTO número atómico Z (como o Chumbo, Z=82), a desaceleração violenta no campo nuclear gera uma grande quantidade de Radiação de Travagem (Bremsstrahlung / Raios X secundários muito penetrantes). Para evitar esta produção indesejada de raios X, a blindagem primária de emissores beta tem de ser feita obrigatoriamente com materiais de BAIXO Z (como o acrílico / Perspex ou plástico, onde a probabilidade de Bremsstrahlung é desprezível). O acrílico trava as partículas beta puras por colisões eletrónicas suaves sem gerar raios X secundários.",
    distractorAnalysis: [
      "Opção B é um erro perigoso clássico: o chumbo direto com partículas beta rápidas produz um feixe secundário de Raios X de travagem que irradia as mãos do enfermeiro.",
      "Opção C é permeável a partículas beta de alta energia (que atravessam o papel com facilidade).",
      "Opção D geraria ainda mais radiação de travagem Bremsstrahlung do que o chumbo devido ao alto Z do ouro (Z=79)."
    ],
    nursingApplication: "Regra de ouro de radioproteção em enfermagem de medicina nuclear: emissores beta puros (como ⁹⁰Y para radioimunoterapia ou ³²P) são SEMPRE aspirados e manipulados com protetores de seringa e caixas de ACRÍLICO transparente grosso, e NUNCA em protetores de chumbo convencionais, protegendo os olhos e as mãos do enfermeiro contra os raios X de travagem."
  },
  {
    id: 708,
    topicId: 7,
    question: "O que é uma 'Partícula Beta Positiva' (β⁺ ou Positrão) e o que sucede no instante em que ela perde a sua energia cinética nos tecidos do doente?",
    options: [
      "É a antipartícula do eletrão (possui a mesma massa do eletrão mas carga positiva +1e); após desacelerar no tecido ao longo de 1 a 3 mm, colide com um eletrão da matéria e ambos sofrem ANIQUILAÇÃO mútua de matéria-antimatéria, convertendo-se em dois fotões gama de 511 keV emitidos em sentidos rigorosamente opostos (180°).",
      "É um protão pesado que se transforma em osso dentro do corpo.",
      "É uma onda sonora ultrassónica que dissolve coágulos sanguíneos.",
      "É um átomo de oxigénio que arrefece a pele do doente a 0 °C."
    ],
    correctIndex: 0,
    explanation: "O positrão (previsto por Paul Dirac e descoberto por Carl Anderson em 1932) é a antimatéria do eletrão (massa = 511 keV/c², carga = +1e). É ejetado no decaimento de núcleos ricos em protões (como o Flúor-18: p -> n + e⁺ + ν_e). No tecido biológico, o positrão viaja alguns milímetros ionizando suavemente até desacelerar ao nível térmico. Quando encontra um eletrão negativo tecidual comum (e⁻), ocorre o fenómeno quântico da Aniquilação: a matéria e a antimatéria deixam de existir, e as suas duas massas de repouso combinadas (2 × 511 keV = 1022 keV) transformam-se puramente em dois fotões de radiação de aniquilação de exatamente 511 keV emitidos em linha reta colinear oposta (180° mútuos por conservação do momento linear).",
    distractorAnalysis: [
      "Opção B confunde um lépton leve de antimatéria com nucleões bariónicos e osteogénese.",
      "Opção C confunde física nuclear de aniquilação com litotripsia ultrassónica mecânica.",
      "Opção D é uma distorção biológica e termodinâmica sem qualquer sentido."
    ],
    nursingApplication: "A aniquilação do positrão em dois fotões opostos de 511 keV é o fundamento da Tomografia por Emissão de Positrões (PET): o scanner deteta os dois fotões em coincidência simultânea temporal, traçando a linha exata onde o radiofármaco glicídico (¹⁸F-FDG) foi consumido com avidez pelo cancro, permitindo ao enfermeiro e médico visualizar metástases milimétricas com precisão ímpar."
  },
  {
    id: 709,
    topicId: 7,
    question: "Em relação ao alcance e poder de penetração, como se compara a Radiação Gama (γ) com as partículas Alfa (α) e Beta (β)?",
    options: [
      "A radiação Gama apresenta o MAIOR poder de penetração de todas (atravessa facilmente o corpo humano e exige espessas barreiras de chumbo ou betão denso para ser atenuada), mas possui o menor poder de ionização linear direto (baixo LET).",
      "A radiação gama é a que tem menor penetração de todas, sendo travada pelo ar.",
      "As partículas alfa penetram mais do que a radiação gama em todas as circunstâncias.",
      "As três radiações têm exatamente a mesma penetração e a mesma massa em repouso."
    ],
    correctIndex: 0,
    explanation: "Por ser radiação eletromagnética constituída por fotões puros desprovidos de carga elétrica e de massa de repouso, a radiação gama não sofre atração coulombiana direta contínua com a nuvem atómica: ela interage apenas por eventos pontuais probabilísticos discretos (Efeito Fotoelétrico, Dispersão Compton e Produção de Pares). Por conseguinte, a sua atenuação é exponencial e lenta, possuindo um alcance gigantesco: dezenas a centenas de metros no ar e facilidade em atravessar todo o organismo de um doente, exigindo espessos escudos de chumbo para proteção.",
    distractorAnalysis: [
      "Opção B é falsa; a radiação gama é extremamente penetrante no ar e na matéria.",
      "Opção C inverte totalmente as leis de penetração (alfa é a MENOS penetrante de todas).",
      "Opção D ignora a física fundamental que divide as emissões em partículas materiais pesadas (alfa), leves (beta) e radiação ondulatória pura sem massa (gama)."
    ],
    nursingApplication: "A alta penetrância da radiação gama exige que o enfermeiro aplique sempre a regra da Distância e da Blindagem ao cuidar de doentes que receberam radioisótopos emissores gama (como o Iodo-131 ou Tecnécio-99m): ao contrário da radiação alfa ou beta, o corpo do doente NÃO bloqueia os fotões gama, que saem livremente pelo tórax e abdómen e atingem quem estiver no quarto."
  },
  {
    id: 710,
    topicId: 7,
    question: "O radioisótopo Iodo-131 (¹³¹₅₃I, T₁/₂ ≈ 8 dias) é classicamente designado como um emissor misto 'Beta-Gama'. Qual é a função de cada uma destas duas emissões no tratamento e seguimento de doentes com cancro da tiroide?",
    options: [
      "A emissão de partículas Beta negativas (β⁻) de alta energia proporciona a ação TERAPÊUTICA destrutiva localizada no tecido tumoral da tiroide (alcance de ~1 a 2 mm); a emissão de fotões Gama (γ, 364 keV) permite a visualização DIAGNÓSTICA externa em câmara gama para cintigrafia de corpo inteiro e rastreio de metástases.",
      "As partículas beta servem apenas para arrefecer o pescoço e a radiação gama para alimentar as células normais.",
      "Ambas as emissões têm exatamente a mesma função de anestesiar a traqueia.",
      "O Iodo-131 não emite qualquer radiação e atua como vitamina mineral oral pura."
    ],
    correctIndex: 0,
    explanation: "O Iodo-131 é o arquétipo da 'teranóstica' médica (terapia + diagnóstico conjugados no mesmo isótopo): cerca de 90% da energia de desintegração é emitida como partículas beta negativas (β⁻ com E_max = 606 keV, alcance médio de 0,8 mm no tecido), que ionizam e quebram irreversivelmente o DNA das células tiroidianas neoplásicas que captaram o iodo, necrosando o tumor por ação local. Os restantes 10% de energia são emitidos como fotões gama penetrantes (pico principal de 364 keV), que escapam do pescoço sem grande dano local e são detetados externamente pela câmara gama para desenhar o mapa cintigráfico de metástases corporais.",
    distractorAnalysis: [
      "Opção B e C são especulações absurdas sem qualquer respaldo radiobiológico.",
      "Opção D nega a natureza radioativa nuclear do Iodo-131 descoberto por Glenn Seaborg."
    ],
    nursingApplication: "Nos quartos de isolamento de radioiodoterapia onde o enfermeiro presta cuidados, a radiação gama de 364 keV do Iodo-131 é a responsável pela dose externa que atinge os profissionais através das paredes e do ar, enquanto a radiação beta é responsável pelas medidas de isolamento das secreções (urina, saliva e suor) do doente, exigindo luvas e calçado protetor descartável."
  },
  {
    id: 711,
    topicId: 7,
    question: "A 'Radiólise da Água' biológica intracelular pela radiação ionizante de baixo LET (raios X e radiação gama) desencadeia a formação de Espécies Reativas de Oxigénio (ROS). Qual é o radical livre mais abundante, reativo e citotóxico gerado na radiólise aquosa?",
    options: [
      "O Radical Hidroxilo (•OH), uma espécie química neutra e altamente oxidante com um eletrão desemparelhado na sua órbita mais externa.",
      "O gás hélio inerte neutro estável.",
      "O ião cloreto do sal de cozinha comum.",
      "O ião bicarbonato alcalinizante."
    ],
    correctIndex: 0,
    explanation: "Como a água compõe 70% a 80% do volume celular, a radiólise primária é: H₂O + radiação -> H₂O⁺ + e⁻. O catião reage instantaneamente com a água vizinha: H₂O⁺ + H₂O -> H₃O⁺ + •OH. O Radical Hidroxilo (•OH) é o oxidante químico biológico mais agressivo que existe na natureza: tem uma semivida ultracurta (nanossegundos) e um raio de difusão de poucos nanómetros, reagindo vorazmente com qualquer molécula biológica próxima, extraindo átomos de hidrogénio das bases azotadas e do anel de desoxirribose do DNA e provocando quebras de cadeia genética.",
    distractorAnalysis: [
      "Opção B é um gás nobre quimicamente inerte e incapaz de reagir com o DNA celular.",
      "Opção C é um anião fisiológico abundante e estável sem reatividade de radical livre.",
      "Opção D é o principal tampão fisiológico extracelular alcalino do sangue humano."
    ],
    nursingApplication: "O ataque por radicais •OH gerados pela radiólise da água é responsável por cerca de 65% a 70% de todas as mortes celulares na radioterapia oncológica. O enfermeiro orienta doentes oncológicos a NÃO consumirem suplementos vitamínicos antioxidantes em megadoses (como vitamina C e E em doses maciças) durante o curso de radioterapia sem ordem médica, pois os antioxidantes exógenos neutralizam os radicais livres e diminuem a eficácia tumoricida da radiação."
  },
  {
    id: 712,
    topicId: 7,
    question: "Na física da interação da radiação com a matéria, qual é o limiar de energia fotónica mínimo indispensável para que possa ocorrer o fenómeno de 'Produção de Pares' (criação de um par eletrão-positrão no campo nuclear)?",
    options: [
      "1,022 MeV (o dobro da energia de massa de repouso de um eletrão, 2 × 511 keV = 1022 keV).",
      "Zero eV a qualquer temperatura ambiente.",
      "10 eV (energia de uma lâmpada comum).",
      "500 GeV exclusivamente."
    ],
    correctIndex: 0,
    explanation: "A Produção de Pares é a materialização pura de energia em massa segundo E = m · c²: um fotão gama de altíssima energia penetra no campo elétrico intenso de um núcleo e desaparece, criando um par matéria-antimatéria (um eletrão e um positrão). Pela conservação de massa-energia, a energia do fotão incidente tem de ser pelo menos igual à soma das energias de massa de repouso das duas partículas criadas: E_limiar = m_e · c² + m_p · c² = 511 keV + 511 keV = 1022 keV = 1,022 MeV. Fotões com energia inferior a 1,022 MeV são fisicamente incapazes de produzir pares.",
    distractorAnalysis: [
      "Opções B e C violariam a conservação relativista de massa de repouso e energia de Einstein.",
      "Opção D situa-se na física de colisores de hádrons pesados (LHC), muito além das energias da radioterapia clínica."
    ],
    nursingApplication: "Em serviços de radioterapia com aceleradores lineares modernos que utilizam feixes de 6 a 18 Megavolts (MV), a produção de pares torna-se um dos principais mecanismos de atenuação e absorção de dose no tumor: o positrão criado desacelera e aniquila-se no próprio tecido tumoral, aumentando a eficácia biológica da dose administrada."
  },
  {
    id: 713,
    topicId: 7,
    question: "O que caracteriza uma 'Quebra Dupla de Cadeia' (Double-Strand Break - DSB) do DNA celular induzida por radiação ionizante em comparação com uma 'Quebra Simples' (Single-Strand Break - SSB)?",
    options: [
      "A quebra dupla envolve a rutura simultânea das duas cadeias complementares da dupla hélice de DNA em pontos muito próximos (a menos de 10 a 20 pares de bases), sendo a lesão biológica mais letal e de difícil reparação pelas enzimas celulares, frequentemente conduzindo a aberrações cromossómicas, apoptose ou mutações carcinogénicas.",
      "A quebra dupla é completamente inofensiva e acelera o crescimento muscular do indivíduo.",
      "A quebra dupla só ocorre em alimentos cozinhados e nunca em seres humanos vivos.",
      "A quebra simples destrói o corpo em minutos e a quebra dupla regenera o corpo instantaneamente."
    ],
    correctIndex: 0,
    explanation: "Numa quebra simples (SSB), apenas uma das fitas fosfodiéster do DNA é cortada: a fita intacta oposta serve de molde perfeito para que a enzima DNA ligase e polimerase reparem o dano com fidelidade quase absoluta (alta taxa de reparação sem erro). Numa quebra dupla (DSB), ambas as fitas adjacentes são seccionadas: a molécula perde a continuidade estrutural e não há fita molde direta intacta. As vias de reparação de emergência da célula (recombinação homóloga e união de extremidades não-homólogas - NHEJ) cometem frequentes erros de junção, originando quebras cromossómicas dicêntricas, anéis e morte celular (mitotic catastrophe).",
    distractorAnalysis: [
      "Opção B é absurda; danos no DNA induzem cancro ou morte celular, nunca ganho de massa muscular saudável.",
      "Opção C é falsa; as DSBs são o alvo central da radiobiologia médica humana.",
      "Opção D inverte completamente a gravidade patológica das lesões genéticas."
    ],
    nursingApplication: "A eficácia da radioterapia no controlo de tumores malignos baseia-se na indução massiva de quebras duplas de cadeia (DSBs) no DNA das células neoplásicas: a incapacidade das células cancerígenas para reparar as DSBs nos intervalos das sessões fracionadas desencadeia a morte do tumor por apoptose e catástrofe mitótica."
  },
  {
    id: 714,
    topicId: 7,
    question: "Na gestão de segurança hospitalar de resíduos radioativos de doentes submetidos a exames com Tecnécio-99m (⁹⁹ᵐTc, semivida T₁/₂ = 6 horas), qual é a regra prática geral de radioproteção para a desclassificação e eliminação segura dos resíduos como lixo hospitalar convencional isento?",
    options: [
      "Aguardar o decurso de 10 meias-vidas físicas (10 × T₁/₂ = 60 horas, ou seja, cerca de 2,5 a 3 dias de decaimento em local blindado próprio), momento no qual a atividade residual desce para menos de 0,1% (1/1024) do valor inicial, confirmando a isenção com monitor de radiação antes do descarte.",
      "Despejar o lixo imediatamente no contentor comum da rua.",
      "Ferver o lixo em água com lixívia para desativar a radiação nuclear dos átomos em 10 minutos.",
      "Incinerar o lixo radioativo no pátio do hospital ao ar livre."
    ],
    correctIndex: 0,
    explanation: "A taxa de desintegração radioativa de um núcleo atómico obedece à lei matemática N(t) = N₀ · (1/2)^(t / T₁/₂). Nenhum processo físico ou químico humano (nem calor, nem autoclave, nem lixívia) consegue acelerar ou travar a semivida nuclear. A regra de ouro internacional de radioproteção determina que após 10 meias-vidas (10 × T₁/₂), a atividade residual é de (1/2)¹⁰ = 1/1024 ≈ 0,098% da atividade original. Para o ⁹⁹ᵐTc (T₁/₂ = 6 h), 10 meias-vidas correspondem a 60 horas (~2,5 dias): após este período de armazenamento no decaimento blindado, mede-se com o detetor Geiger e elimina-se como resíduo biológico comum.",
    distractorAnalysis: [
      "Opção B violaria gravissimamente a lei e contaminaria os circuitos de lixo público urbano com radiação.",
      "Opção C é um erro conceptual crasso: a radioatividade é imune a agentes químicos e térmicos.",
      "Opção D espalharia aerossóis radioativos pela atmosfera da cidade com contaminação ambiental severa."
    ],
    nursingApplication: "O enfermeiro que atua em medicina nuclear e imagiologia garante que frascos de eluição, seringas, agulhas e compressas utilizadas na administração de ⁹⁹ᵐTc são segregados em baldes específicos com blindagem plúmbea identificados com a data e hora do descarte, assegurando o período regulamentar de decaimento de 10 meias-vidas antes da recolha final de resíduos."
  },
  {
    id: 715,
    topicId: 7,
    question: "O contador de radiação 'Geiger-Müller' portátil com sonda externa é um dos aparelhos mais emblemáticos da física médica. Qual é o seu princípio biofísico de funcionamento e em que situações de enfermagem é utilizado?",
    options: [
      "Baseia-se na ionização de um gás inerte contido num tubo metálico sob alta voltagem (regime Geiger): cada radiação incidente gera uma avalanche de Townsend de iões que produz um pulso elétrico amplificado (clique sonoro), sendo utilizado em enfermagem para detetar contaminações de superfícies, roupas ou derrames de radiofármacos.",
      "Mede a pressão arterial do doente através da medição de campos magnéticos.",
      "Utiliza uma câmara de vídeo para fotografar fotões de cor vermelha no ar.",
      "Funciona como um rádio de música ambiente para acalmar o doente antes da injeção."
    ],
    correctIndex: 0,
    explanation: "O tubo Geiger-Müller é preenchido por um gás nobre (néon/árgon) a baixa pressão atravessado por um ânodo central sob alta tensão elétrica (~900 a 1200 V). Quando uma única partícula ionizante (alfa, beta ou fotão gama) penetra na janela fina de mica e ioniza átomos de gás, os eletrões aceleram em direção ao ânodo gerando uma cascata exponencial de ionização secundária por impacto (avalanche de Townsend). Essa descarga elétrica rápida gera um pulso de voltagem registado pelo circuito do monitor sob a forma de um clique audível e deflexão de agulha em contagens por minuto (cpm) ou microSieverts por hora (μSv/h).",
    distractorAnalysis: [
      "Opção B confunde detetores de radiação com transdutores hemodinâmicos de pressão vascular.",
      "Opção C confunde deteção de pulsos de ionização em gás com fotografia ótica visível.",
      "Opção D é uma afirmação sem qualquer sentido biomédico."
    ],
    nursingApplication: "Em caso de extravasamento, quebra de frasco ou derrame acidental de urina radioativa no chão da enfermaria, o enfermeiro delimita a área e utiliza o detetor Geiger-Müller para mapear com precisão os limites da contaminação física na superfície e confirmar a descontaminação completa após a limpeza especializada."
  },
  {
    id: 716,
    topicId: 7,
    question: "O método de imagem diagnóstica SPECT (Single Photon Emission Computed Tomography - Tomografia por Emissão de Fotão Único) baseia-se na deteção de qual tipo de radiação?",
    options: [
      "Na deteção de fotões Gama individuais emitidos por radionuclídeos como o Tecnécio-99m ou Iodo-123 através de colimadores de furos paralelos de chumbo acoplados a cristais de cintilação de iodeto de sódio (NaI:Tl) montados em cabeças de câmara rotatórias que giram 360° em redor do doente.",
      "Na deteção de feixes de partículas alfa aceleradas no vácuo.",
      "Na medição de ondas sonoras refletidas pelas cartilagens do joelho.",
      "Na receção de ondas de rádio FM emitidas pelo cérebro do indivíduo."
    ],
    correctIndex: 0,
    explanation: "Ao contrário do PET (que deteta pares de fotões de aniquilação opostos de 511 keV de emissores de positrões), o SPECT utiliza radioisótopos emissores gama convencionais que libertam um único fotão gama por desintegração (daí o nome 'Single Photon'). A câmara gama rotativa possui colimadores de chumbo que absorvem os raios oblíquos e deixam passar apenas os fotões perpendiculares: estes atingem cristais cintiladores de NaI(Tl) acoplados a tubos fotomultiplicadores, permitindo reconstruir fatias axiais tomográficas tridimensionais da distribuição tecidual do radiofármaco no órgão estudado.",
    distractorAnalysis: [
      "Opção B é falsa; as partículas alfa são travadas no interior do corpo e nunca chegam aos detetores externos.",
      "Opção C descreve a Ecografia médica acústica com transdutor piezoelétrico.",
      "Opção D confunde cintigrafia nuclear com eletroencefalografia ou telecomunicações."
    ],
    nursingApplication: "O SPECT de perfusão miocárdica (com ⁹⁹ᵐTc-Sestamibi ou Tetrofosmina) é um dos exames cardiológicos mais realizados no mundo: o enfermeiro monitoriza o doente durante a prova de esforço em passadeira rolante ou indução farmacológica de stress com adenosina/dipiridamol, administrando o radiofármaco no pico do esforço isquémico para mapear áreas viáveis de miocárdio sob risco de enfarte."
  },
  {
    id: 717,
    topicId: 7,
    question: "Qual das seguintes barreiras físicas é estritamente SUFICIENTE para bloquear e reter 100% de um feixe externo de Partículas Alfa emitidas por uma fonte radioativa de Rádio-226?",
    options: [
      "Uma simples folha de papel de escritório comum (ou uma luva cirúrgica fina de látex).",
      "Um bloco maciço de chumbo com 50 cm de espessura.",
      "Uma parede de betão armado de 2 metros de espessura.",
      "Um lago de água com 10 metros de profundidade."
    ],
    correctIndex: 0,
    explanation: "Devido ao seu colossal poder de paragem e perda contínua de energia por colisões coulombianas (alto LET), a partícula alfa tem um alcance microscópico na matéria sólida: uma folha de papel sulfite comum com espessura de ~0,1 mm (100 μm) contém massa e densidade eletrónica mais do que suficientes para frear e imobilizar integralmente todas as partículas alfa de 4 a 8 MeV antes que atravessem o outro lado da folha.",
    distractorAnalysis: [
      "Opções B, C e D são blindagens gigantescas e dispendiosas indispensáveis contra neutrões ou radiações gama penetrantes de megavoltagem, mas absurdamente desproporcionadas e desnecessárias para travar a baixíssima penetração das partículas alfa."
    ],
    nursingApplication: "Compreender a suficiência de uma folha de papel ou luva de látex para travar a radiação alfa permite ao enfermeiro ter tranquilidade técnica e segurança psicológica no manuseamento de frascos fechados de alfa-terapia (como o ²²³RaCl₂): a radiação emitida está perfeitamente contida pelas paredes do próprio frasco de vidro e pelas luvas descartáveis de procedimento."
  },
  {
    id: 718,
    topicId: 7,
    question: "Durante o decaimento radioativo por Emissão de Positrões (β⁺), o que ocorre com o número atómico (Z) e o número de massa (A) do núcleo pai ao transformar-se no núcleo filho?",
    options: [
      "O número de massa permanece idêntico (ΔA = 0) e o número atómico diminui em 1 unidade (Z - 1), transmutando-se no elemento químico imediatamente à sua esquerda na tabela periódica.",
      "O número de massa diminui em 4 unidades e o número atómico diminui em 2.",
      "O número atómico aumenta em 10 unidades e a massa duplica.",
      "O núcleo divide-se em 3 átomos de hidrogénio gasoso."
    ],
    correctIndex: 0,
    explanation: "Na emissão de positrões (decaimento beta positivo, β⁺): um protão do núcleo rico em protões transforma-se num neutrão, emitindo um positrão e um neutrino: p -> n + e⁺ + ν_e. Como o número total de nucleões permanece constante (um protão desaparece mas surge um neutrão em seu lugar), o número de massa não varia (ΔA = 0). Contudo, como a carga nuclear positiva diminui em 1 unidade de protão, o número atómico passa para Z - 1. Exemplo: ¹⁸₉F (Z=9, A=18) decai por β⁺ no elemento estável ¹⁸₈O (Z=8, A=18, Oxigénio-18).",
    distractorAnalysis: [
      "Opção B descreve a alteração observada exclusivamente no decaimento alfa (ΔA = -4, ΔZ = -2).",
      "Opção C violaria a conservação de número bariónico e carga nuclear.",
      "Opção D descreve uma desintegração hipotética impossível."
    ],
    nursingApplication: "Saber que o Flúor-18 decai em Oxigénio-18 estável não-tóxico garante ao enfermeiro a segurança biológica a longo prazo do exame de PET: o átomo de flúor radioativo transmuta-se num elemento químico inócuo que se incorpora na água endógena do corpo sem qualquer toxicidade residual permanente."
  },
  {
    id: 719,
    topicId: 7,
    question: "O conceito de 'Captura Eletrónica' (CE ou K-capture) é um processo nuclear alternativo e competitivo com a emissão de positrões. Como ocorre este fenómeno no núcleo atómico?",
    options: [
      "O núcleo atómico com excesso de protões captura um eletrão orbital da camada mais interna (camada K); o protão combina-se com esse eletrão transformando-se num neutrão com emissão de um neutrino monoenergético (p + e⁻ -> n + ν_e), e o rearranjo dos eletrões externos emite Raios X característicos ou eletrões Auger.",
      "O núcleo atrai um eletrão da tomada de parede hospitalar à distância de 3 metros.",
      "O núcleo funde-se com o osso do antebraço do doente.",
      "O átomo perde todos os seus protões e transforma-se em luz azul."
    ],
    correctIndex: 0,
    explanation: "A Captura Eletrónica ocorre frequentemente quando a diferença de energia entre o núcleo pai e o filho é insuficiente para a emissão de um positrão (que requer pelo menos 2 m_e c² = 1,022 MeV). Como a função de onda quântica dos eletrões da camada K (mais próxima do núcleo) penetra ligeiramente no volume nuclear, o núcleo 'engole' esse eletrão orbital: p + e⁻ -> n + ν_e. O núcleo filho resultante tem Z - 1 e mesmo A. A vacância deixada na camada K é preenchida por eletrões mais externos, emitindo-se Raios X característicos de fluorescência ou elétrons Auger de curto alcance tecidual.",
    distractorAnalysis: [
      "Opção B confunde captura atómica de eletrões orbitais intrínsecos com eletricidade de rede externa.",
      "Opções C e D são invenções fantasiosas sem base física."
    ],
    nursingApplication: "O Iodo-125 (¹²⁵I, utilizado em sementes permanentes de braquiterapia para o cancro da próstata) decai exclusivamente por Captura Eletrónica (T_1/2 ≈ 59,4 dias), emitindo Raios X característicos de baixa energia (~27 a 35 keV): a radiação é confinada estritamente à próstata, poupando a bexiga e o reto de efeitos secundários graves."
  },
  {
    id: 720,
    topicId: 7,
    question: "Na física das radiações, qual é a principal distinção de 'Origem Física' entre os Raios X e as Radiações Gama (γ), sabendo que ambos são fotões de radiação eletromagnética ionizante?",
    options: [
      "Os Raios X originam-se fora do núcleo atómico (na nuvem eletrónica, por desaceleração de eletrões ou transições atómicas eletrónicas orbitais); as Radiações Gama originam-se no INTERIOR do próprio núcleo atómico (por transições quânticas de desexcitação nuclear entre níveis de energia dos nucleões).",
      "Os raios X são ondas de som e as radiações gama são água pressurizada.",
      "Os raios X são sempre verdes e as radiações gama são sempre amarelas.",
      "Não existe absolutamente nenhuma diferença de origem, sendo ambos produzidos apenas por lâmpadas elétricas."
    ],
    correctIndex: 0,
    explanation: "Embora um fotão de Raios X e um fotão Gama com a mesma energia (por exemplo, 140 keV) possuam propriedades e interações físicas rigorosamente indistinguíveis na matéria biológica, a convenção internacional da física define-os estritamente pela sua origem de geração: 1) Raios X nascem na nuvem eletrónica extranuclear (Bremsstrahlung ou saltos eletrónicos entre camadas K/L); 2) Radiações Gama nascem no interior do NÚCLEO atómico em transições entre estados de excitação nuclear de nucleões.",
    distractorAnalysis: [
      "Opção B confunde ondas acústicas mecânicas com ondas eletromagnéticas da luz.",
      "Opção C confunde a radiação invisível de alta energia com cores do espectro visível humano.",
      "Opção D nega a separação física nuclear consagrada por mais de um século de física atómica."
    ],
    nursingApplication: "Compreender a diferença de origem esclarece os procedimentos de segurança: equipamentos de Raios X (como TAC ou arcos cirúrgicos) só emitem radiação quando ligados à corrente elétrica (desligando a tomada cessa toda a radiação); em contrapartida, fontes de Radiação Gama (como frascos de radiofármacos em medicina nuclear) emitem fotões de forma contínua e ininterrupta por decaimento nuclear espontâneo permanente, exigindo blindagem física em cofre de chumbo a toda a hora."
  },
  {
    id: 721,
    topicId: 7,
    question: "O fenómeno dos 'Eletrões Auger' (efeito fotoelétrico interno ou efeito Auger) tem aplicação promissora em terapia oncológica dirigida. Como se originam estes eletrões?",
    options: [
      "Após a ejeção de um eletrão interno (por captura eletrónica ou conversão interna), a energia de desexcitação libertada pela transição de um eletrão externo é transferida por interação coulombiana sem radiação para outro eletrão orbital, que é ejetado com baixíssima energia cinética e curtíssimo alcance biológico subcelular (nanómetros a micrómetros), gerando alta densidade de ionização no DNA.",
      "São eletrões emitidos por lâmpadas de néon ligadas na enfermaria.",
      "São partículas geradas pelo atrito das rodas das cadeiras de rodas no chão.",
      "São iões pesados de ouro criados por magnetismo."
    ],
    correctIndex: 0,
    explanation: "Descoberto por Lise Meitner e Pierre Auger: quando uma vaga se abre na camada K e um eletrão de camada superior desce para preenchê-la, em vez de emitir um fotão de Raio X característico, a energia é transferida sem radiação direta para um eletrão mais externo, que é ejetado (elétron Auger). Como estes eletrões possuem energias cinéticas baixas (de poucas centenas de eV a poucos keV), o seu alcance no tecido é minúsculo (apenas dezenas de nanómetros), depositando uma densidade de ionização massiva localizada (comportamento de alto LET biológico eficaz).",
    distractorAnalysis: [
      "Opções B, C e D misturam iluminação predial, atrito mecânico de pavimentos e propriedades magnéticas sem qualquer fundamento no efeito quântico atómico de Auger."
    ],
    nursingApplication: "Na 'Terapia com Emissores Auger' (como o Índio-111 ligado a anticorpos monoclonais), o radiofármaco é internalizado diretamente para o núcleo da célula tumoral: os eletrões Auger libertam a sua energia destrutiva a nanómetros de distância das cadeias de DNA, estilhaçando a célula cancerígena com preservação quase total das células saudáveis vizinhas."
  },
  {
    id: 722,
    topicId: 7,
    question: "O conceito de 'Conversão Interna' (CI) na física nuclear concorre com a emissão de radiação gama na desexcitação nuclear. Como ocorre a conversão interna?",
    options: [
      "O núcleo atómico excitado transfere diretamente a sua energia de desexcitação para um dos eletrões das camadas atómicas mais internas (habitualmente da camada K) por acoplamento eletromagnético coulombiano, ejetando esse eletrão com grande velocidade para fora do átomo ('eletrão de conversão interna').",
      "O núcleo atómico transforma-se num vaso sanguíneo por indução magnética.",
      "Todos os neutrões do núcleo escapam para a atmosfera em forma de fumo branco.",
      "A conversão interna consiste em tomar banho quente após um exame com contraste."
    ],
    correctIndex: 0,
    explanation: "Em vez de emitir um fotão gama para o exterior, a densidade de probabilidade da função de onda do eletrão da camada K cruza o volume nuclear, permitindo que a energia de desexcitação nuclear seja transferida diretamente para o eletrão orbital. O eletrão é ejetado com energia cinética E_cinética = E_transição - E_ligação (eletrão de conversão interna monoenergético). O átomo fica ionizado com uma vacância na camada interna, gerando a subsequente cascata de Raios X característicos e elétrons Auger.",
    distractorAnalysis: [
      "Opções B, C e D são afirmações estapafúrdias que violam a anatomia, a física quântica e as rotinas clínicas hospitalares."
    ],
    nursingApplication: "A conversão interna é um dos fatores considerados pelos físicos médicos na dosimetria clínica de radionuclídeos: a emissão de eletrões de conversão interna aumenta a dose local de radiação absorvida pelos tecidos circundantes onde o radioisótopo se aloja, influenciando o cálculo de dose terapêutica administrada pelo enfermeiro."
  },
  {
    id: 723,
    topicId: 7,
    question: "No pós-operatório de doentes submetidos a cirurgia com técnica de 'Biópsia do Gânglio Sentinela' (ex: no cancro da mama ou melanoma), o enfermeiro utiliza na sala cirúrgica uma 'Sonda Gama' (gamma probe). Qual é a sua função biofísica?",
    options: [
      "Detetar através de um cristal cintilador colimado de alta sensibilidade os fotões gama emitidos pelo Tecnécio-99m ligado a nanocolóides de albumina (⁹⁹ᵐTc-nanocoloide) previamente injetado na lesão, guiando acusticamente o cirurgião até ao primeiro gânglio linfático que drena o tumor.",
      "Destruir o tumor com calor elétrico de alta frequência.",
      "Injetar quimioterapia diretamente no nervo axilar.",
      "Medir a temperatura da ferida cirúrgica em graus Fahrenheit."
    ],
    correctIndex: 0,
    explanation: "A biópsia do gânglio sentinela revolucionou a cirurgia oncológica: o primeiro linfonodo que recebe a drenagem linfática do tumor primário é marcado com micropartículas coloidais radiomarcadas com ⁹⁹ᵐTc. Na sala operatória, a 'Gamma Probe' (sonda portátil com cristal cintilador e colimador direcional de chumbo) traduz a taxa de fotões gama de 140 keV captados num som de bips de frequência crescente: quanto mais próximo da sonda o gânglio estiver, maior é a contagem sonora, permitindo ao cirurgião extirpar seletivamente apenas aquele gânglio único para exame anatomopatológico.",
    distractorAnalysis: [
      "Opção B descreve a eletrocauterização com bisturi elétrico ou ablação por radiofrequência térmica.",
      "Opção C seria uma negligência clínica gravíssima que causaria paralisia axonal permanente.",
      "Opção D descreve um termómetro clínico comum de infravermelhos."
    ],
    nursingApplication: "A técnica do gânglio sentinela evita o esvaziamento ganglionar axilar total em milhares de mulheres, prevenindo o linfedema crónico incapacitante do braço ('braço inchado'). O enfermeiro desempenha papel basilar: orientar a doente na injeção intradérmica pré-operatória, calibrar a sonda gama com fonte de controlo e gerir as peças operatórias radiomarcadas enviadas à patologia."
  },
  {
    id: 724,
    topicId: 7,
    question: "Na caracterização de um acidente com 'Contaminação Radioativa Externa' na pele de um trabalhador ou doente, qual é a conduta inicial prioritária de enfermagem antes de iniciar qualquer despenhamento químico invasivo?",
    options: [
      "Remover imediatamente todo o vestuário contaminado (o que elimina de imediato cerca de 80% a 90% de toda a contaminação externa), acondicionando a roupa em sacos plásticos herméticos rotulados, e iniciar a lavagem da pele com água tépida corrente e sabão neutro suave sem fricção agressiva (para não lacerar a epiderme).",
      "Esfregar a pele vigorosamente com lixa de ferro e ácido nítrico concentrado.",
      "Fazer cortes cirúrgicos na pele para deixar sair o sangue contaminado.",
      "Mandar o doente correr à volta do hospital para suar a radiação."
    ],
    correctIndex: 0,
    explanation: "A doutrina internacional de resposta a acidentes radiológicos estabelece passos claros: 1) A simples remoção de sapatos e roupas retém a vasta maioria do material particulado disperso; 2) A lavagem da pele deve ser suave e com sabão de pH neutro: NUNCA esfregar agressivamente com escovas duras, pois a escoriação mecânica da epiderme remove a camada córnea queratinizada protetora e facilita a absorção transdérmica do radioisótopo para a circulação sistémica (transformando uma contaminação externa benigna numa contaminação interna perigosa); 3) A água utilizada deve ser morna (água quente provocaria vasodilatação e absorção; água fria fecharia os poros retendo o agente).",
    distractorAnalysis: [
      "Opções B e C provocariam queimaduras químicas cáusticas, lacerações hemorrágicas graves e entrada direta de radioisótopos na corrente sanguínea.",
      "Opção D provocaria dispersão ambiental descontrolada de partículas radioativas por todo o complexo hospitalar."
    ],
    nursingApplication: "O enfermeiro monitoriza a descontaminação cutânea com o contador Geiger-Müller após cada ciclo suave de lavagem e secagem por toques: o processo repete-se até que a taxa de contagem atinja os níveis basais de fundo do ambiente ou abaixo dos limites de isenção."
  },
  {
    id: 725,
    topicId: 7,
    question: "O radioisótopo Estrôncio-89 (⁸⁹Sr, emissor beta puro com T₁/₂ ≈ 50,5 dias) é utilizado na paliação de dor em metástases ósseas osteoblásticas. A nível biofísico e fisiológico, porque é que o Estrôncio-89 se fixa seletivamente no esqueleto?",
    options: [
      "Porque o Estrôncio pertence à mesma família química dos metais alcalino-terrosos que o Cálcio (Grupo 2 da Tabela Periódica), comportando-se como um análogo biológico do cálcio que é avidamente incorporado pela matriz mineral de hidroxiapatite nas zonas de remodelação óssea tumoral acelerada.",
      "Porque o estrôncio é atraído magneticamente pelo ferro dos glóbulos vermelhos.",
      "Porque o osso humano é constituído exclusivamente por estrôncio gasoso.",
      "Porque o estrôncio é um nutriente sintetizado pelos linfócitos T."
    ],
    correctIndex: 0,
    explanation: "Elementos do mesmo grupo da Tabela Periódica possuem o mesmo número de eletrões de valência e comportamentos químicos semelhantes. O Estrôncio (³⁸Sr) e o Cálcio (²⁰Ca) são ambos metais alcalino-terrosos com iões bivalentes estáveis (Sr²⁺ e Ca²⁺) de raio iónico muito próximo: as células ósseas (osteoblastos) não conseguem distinguir o estrôncio do cálcio, incorporando-o diretamente na rede cristalina da hidroxiapatite [Ca₁₀(PO₄)₆(OH)₂]. Em lesões metastáticas ósseas com proliferação osteoblástica acelerada, o ⁸⁹Sr concentra-se até 10 vezes mais do que no osso são, irradiando com partículas beta o foco doloroso metastático.",
    distractorAnalysis: [
      "Opção B confunde biofísica mineral de afinidade química iónica com atração magnética de dipolos.",
      "Opção C ignora a composição mineral da matriz óssea que é constituída por fosfato de cálcio.",
      "Opção D confunde iões inorgânicos com citocinas do sistema imunitário."
    ],
    nursingApplication: "O enfermeiro sabe que o Estrôncio-89 tem uma ação analgésica prolongada (alívio da dor óssea que surge 1 a 2 semanas após a injeção e dura até 6 meses). Como é um potente mielotóxico, o enfermeiro deve monitorizar hemogramas semanais com contagem de plaquetas e leucócitos antes e após a terapêutica."
  },
  {
    id: 726,
    topicId: 7,
    question: "Na utilização de detectores de cintilação sólidos (como os cristais de NaI:Tl ou BGO utilizados em câmaras gama e scanners de PET), qual é o fenómeno biofísico de conversão de energia que ocorre quando um fotão de radiação gama colide com o cristal?",
    options: [
      "O fotão gama ioniza e excita os átomos da rede cristalina; a desexcitação subsequente emite flashes minúsculos de luz visível ultravioleta/azul (cintilações fotónicas), que são amplificados por um tubo fotomultiplicador (PMT) e convertidos num pulso elétrico proporcional à energia da radiação incidente.",
      "O cristal de cintilação aquece até derreter e queimar o circuito do aparelho.",
      "O cristal de sal transforma-se instantaneamente num bloco de ouro maciço.",
      "A radiação gama é refletida de volta como um espelho comum sem qualquer absorção."
    ],
    correctIndex: 0,
    explanation: "Os cintiladores inorgânicos (como o Iodeto de Sódio ativado com Tálio, NaI:Tl) são a pedra angular da deteção em medicina nuclear: o fotão gama deposita energia no cristal por efeito fotoelétrico ou Compton, promovendo eletrões da banda de valência para a banda de condução. Ao desexcitarem-se através dos centros de luminescência do tálio, emitem impulsos luminosos de luz visível (cerca de 38 fotões de luz por cada 1 keV de energia depositada). Um tubo fotomultiplicador com fotocátodo converte esses fotões de luz em fotoeletrões e amplifica-os por um fator de 10⁶, gerando um sinal elétrico mensurável nos computadores de aquisição.",
    distractorAnalysis: [
      "Opções B, C e D são invenções absurdas que contrariam a ótica quântica e a engenharia de instrumentação de imagem médica."
    ],
    nursingApplication: "Os cristais de cintilação de NaI(Tl) das câmaras gama são extremamente higroscópicos (absorvem água do ar e oxidam tornando-se opacos) e frágeis mecanicamente a choques térmicos: o enfermeiro e técnicos asseguram que a sala de medicina nuclear mantém climatização estrita 24 horas por dia com temperatura (20-22 °C) e humidade controladas."
  },
  {
    id: 727,
    topicId: 7,
    question: "O conceito de 'Rendimento de Fissão' (fission yield curve) descreve a probabilidade percentual com que cada fragmento de fissão é gerado a partir da cisão térmica do Urânio-235. Em relação à simetria da fissão, o que revela a famosa curva em 'Corcova de Camelo' (dois picos de massa)?",
    options: [
      "A fissão nuclear do Urânio-235 é predominantemente ASSIMÉTRICA: o núcleo raramente se divide em duas metades iguais de massa 117, mas divide-se tipicamente num fragmento 'leve' com pico de massa A ≈ 95 (onde se situa o Molibdénio-99) e num fragmento 'pesado' com pico de massa A ≈ 138 (onde se situam o Iodo-131 e o Césio-137).",
      "A fissão divide sempre o urânio em duas metades exatamente iguais a 100% dos casos.",
      "A fissão produz apenas poeira de carvão vegetal sem fragmentos definidos.",
      "A curva indica que a fissão só ocorre no deserto onde existem camelos."
    ],
    correctIndex: 0,
    explanation: "A curva de rendimento de fissão por neutrões térmicos de ²³⁵U tem uma forma bimodal clássica com dois picos pronunciados (conhecida internacionalmente como curva em corcova de camelo): a fissão simétrica em dois fragmentos idênticos (A = 117) tem uma probabilidade inferior a 0,01%. Os núcleos filhos preferem configurações quânticas com camadas quase mágicas: um grupo de massa leve centrado em A = 90 a 100 (rendimento de ~6% para ⁹⁹Mo) e um grupo de massa pesada centrado em A = 130 a 145 (rendimento de ~3% para ¹³¹I e ~6% para ¹³⁷Cs).",
    distractorAnalysis: [
      "Opção B é refutada pela evidência experimental quântica da assimetria de fissão de Weizsäcker-Bohr.",
      "Opção C é um disparate químico sem base na física nuclear de fragmentos de massa.",
      "Opção D é um trocadilho jocoso com a denominação geométrica visual da curva bimodal."
    ],
    nursingApplication: "Esta assimetria natural na produção de fissão em reatores nucleares é a razão pela qual os radioisótopos médicos de diagnóstico (Mo-99 -> Tc-99m) e de terapia (I-131) são obtidos com rendimentos tão elevados e comercializados a custos acessíveis para os hospitais e sistemas de saúde mundiais."
  },
  {
    id: 728,
    topicId: 7,
    question: "Na manipulação de radiofármacos em seringas de plástico comum pelo enfermeiro, por que razão uma seringa contendo 370 MBq (10 mCi) de Tecnécio-99m mantida diretamente entre as pontas dos dedos sem qualquer blindagem plúmbea pode administrar doses perigosas na pele das mãos em escassos minutos?",
    options: [
      "Devido à Lei do Inverso do Quadrado da Distância: a distância entre o lúmen da seringa e a polpa digital do enfermeiro é de apenas 1 a 2 milímetros; a essa distância ínfima, a taxa de dose superficial atinge valores astronómicos de dezenas a centenas de mGy por minuto, podendo provocar doses radiológicas inaceitáveis nos dedos.",
      "Porque o plástico da seringa reage quimicamente com o suor dos dedos criando fogo.",
      "Porque o tecnécio atravessa o plástico da seringa por osmose e entra na corrente sanguínea da mão.",
      "Porque a seringa se torna mais pesada do que 500 quilogramas."
    ],
    correctIndex: 0,
    explanation: "A Lei do Inverso do Quadrado (I ∝ 1/d²) dita que quando a distância d se aproxima de zero (milímetros de contacto da pele com a parede cilíndrica da seringa), o denominador (d²) torna-se minúsculo, catapultando a taxa de dose superficial para valores alarmantes (>100-300 mGy/hora para poucos mililitros de ⁹⁹ᵐTc). Se o enfermeiro empunhar a seringa sem blindagem diariamente ao preparar injeções, a pele dos dedos indicador e polegar pode atingir o limite determinístico anual de extremidades (500 mSv) em poucas semanas.",
    distractorAnalysis: [
      "Opção B confunde radioproteção física com combustão química pirotécnica.",
      "Opção C confunde a passagem de fotões eletromagnéticos com difusão molecular macroscópica através de polímeros estanques.",
      "Opção D viola a conservação de massa clássica."
    ],
    nursingApplication: "O uso inegociável de 'Protetores de Seringa de Tungsténio' (cilindros de tungsténio de alta densidade com visor de vidro plumbífero) durante toda a preparação, transporte e injeção endovenosa de radiofármacos é a salvaguarda primária do enfermeiro: o protetor afasta os dedos e atenua mais de 98% da radiação gama, reduzindo a dose nas mãos para frações insignificantes."
  },
  {
    id: 729,
    topicId: 7,
    question: "O Samário-153 (¹⁵³Sm-lexidronam / Quadramet) é um radiofármaco complexado com fosfonatos utilizado no alívio da dor de metástases ósseas. Como se caracteriza o seu decaimento radioativo duplo?",
    options: [
      "Emite partículas Beta negativas (β⁻, com E_max = 810 keV, responsáveis pela ablação tumoral por radiação local no osso) e fotões Gama de baixa energia (γ de 103 keV, que permitem aquisição de imagens cintigráficas de controlo da distribuição do fármaco).",
      "Emite partículas alfa de 100 MeV e luz laser vermelha.",
      "Decai exclusivamente por emissão de neutrões térmicos lentos.",
      "Não sofre decaimento radioativo, atuando como anestésico local tipo lidocaína."
    ],
    correctIndex: 0,
    explanation: "O Samário-153 (T₁/₂ ≈ 46,3 horas) combina emissão terapêutica e imagiológica simultânea: as partículas beta negativas têm um alcance máximo no tecido biológico de cerca de 3,1 mm (suficiente para irradiar o microambiente da metástase óssea com destruição seletiva de terminações nervosas sensitivas e células cancerígenas), enquanto a emissão simultânea de fotões gama de 103 keV (com 29% de abundância) é detetada de forma clara pelas câmaras gama padrão de medicina nuclear para confirmar a fixação do radiofármaco nas lesões.",
    distractorAnalysis: [
      "Opção B propõe energias alfa astronomicamente impossíveis e confunde radiação com emissão laser coerente.",
      "Opção C descreveria um emissor de fissão perigoso inadequado para administração biológica.",
      "Opção D nega a radiofísica deste lantanídeo radioativo."
    ],
    nursingApplication: "O enfermeiro programa a injeção lenta de ¹⁵³Sm-lexidronam através de linha venosa pérvia e monitoriza a resposta clínica: a maioria dos doentes experimenta uma exacerbação transitória da dor nas primeiras 48 a 72 horas pós-injeção ('flare phenomenon' provocada pela resposta inflamatória inicial à radiação beta), devendo o enfermeiro reforçar a analgesia profilática antes da melhoria sustentada subsequente."
  },
  {
    id: 730,
    topicId: 7,
    question: "No contexto da terapia com anticorpos monoclonais radiomarcados (Radioimunoterapia - RIT), o Ítrio-90 (⁹⁰Y, conjugado por exemplo no Ibritumomab tiuxetan para tratamento de linfomas foliculares refratários) é classificado como qual tipo de emissor radioativo?",
    options: [
      "Um emissor Beta Negativo puro de alta energia (E_max = 2,28 MeV, sem emissão gama apreciável), apresentando um alcance tecidual de até 11 mm e uma semivida física de 64 horas, que produz morte celular tumoral por efeito de fogo cruzado (crossfire effect).",
      "Um emissor alfa puro idêntico ao gás radão.",
      "Um emissor gama puro sem qualquer partícula beta.",
      "Um gás anestésico volátil inalatório de curta duração."
    ],
    correctIndex: 0,
    explanation: "O Ítrio-90 (⁹⁰₃₉Y) decai diretamente para o Zircónio-90 estável (⁹⁰₄₀Zr) por emissão de uma partícula beta negativa muito energética (E_max = 2,28 MeV, energia média de 933 keV) sem emissão de fotões gama primários (emissor beta puro). O longo alcance tecidual dos seus eletrões velozes (alcance médio de 5 mm, máximo de 11 mm) é a sua grande vantagem terapêutica: o 'efeito de fogo cruzado' (crossfire) permite que os eletrões irradiem e destruam células neoplásicas vizinhas que não expressavam o antigénio tumoral ou que não foram atingidas diretamente pelo anticorpo monoclonal.",
    distractorAnalysis: [
      "Opção B confunde um metal de transição emissor beta com gases nobres emissores alfa da série do urânio.",
      "Opção C é falsa; o ⁹⁰Y é desprovido de linhas gama diagnósticas diretas significativas.",
      "Opção D confunde uma molécula de imunoterapia radioativa com anestésicos halogenados voláteis."
    ],
    nursingApplication: "Ao administrar anticorpos marcados com ⁹⁰Y, o enfermeiro manipula seringas com blindagem acrílica grossa (nunca chumbo!) e vigia de perto o hemograma completo durante as semanas seguintes: devido à longa penetrância dos eletrões de 2,28 MeV, a toxicidade limitante de dose é a trombocitopenia e neutropenia tardia transitória decorrente do efeito de radiação sobre a medula óssea adjacente."
  },
  {
    id: 731,
    topicId: 7,
    question: "O conceito biofísico de 'Efeito Espectador' (Bystander Effect) radioinduzido na biologia das radiações refere-se a qual resposta celular inesperada?",
    options: [
      "A ocorrência de danos genéticos, mutações cromossómicas ou apoptose em células vizinhas que NÃO foram diretamente atravessadas pela radiação ionizante, mas que receberam sinais moleculares citotóxicos e citocinas inflamatórias transmitidos através de junções comunicantes (gap junctions) ou fatores secretados no meio extracelular por células irradiadas contíguas.",
      "O riso espontâneo de todas as pessoas que observam uma radiografia.",
      "A alteração da cor da roupa do enfermeiro durante o exame de TAC.",
      "A destruição total de bactérias fora da sala do hospital."
    ],
    correctIndex: 0,
    explanation: "Tradicionalmente, a radiobiologia clássica postulava que o dano celular exigia a passagem física direta do feixe ionizante pelo núcleo ou citoplasma da célula. O Efeito Espectador (Bystander Effect), comprovado nas últimas décadas, demonstra que células diretamente irradiadas libertam espécies reativas de oxigénio (ROS), óxido nítrico e citocinas pró-inflamatórias (como TNF-α e TGF-β) que viajam por canais intercelulares de junções gap ou pelo fluido extracelular, ativando vias de morte celular programada ou instabilidade genómica em células vizinhas 'espectadoras' não-atingidas pelo feixe primário.",
    distractorAnalysis: [
      "Opções B, C e D são formulações fantasiosas e incorretas que não têm respaldo na radiobiologia experimental."
    ],
    nursingApplication: "O efeito espectador amplifica a eficácia da radioterapia e da terapia com radionuclídeos dirigidos (como na alfa e beta terapia administrada por enfermeiros): mesmo que o fármaco radiomarcado não consiga ligar-se a 100% das células de uma massa tumoral heterogénea, a sinalização de dano biológico induz a morte de células tumorais vizinhas não marcadas."
  },
  {
    id: 732,
    topicId: 7,
    question: "No pós-tratamento de um doente submetido a Radioiodoterapia com Iodo-131 em dose ablativa alta (ex: 3700 MBq / 100 mCi), o doente permanece internado num quarto de isolamento radiológico blindado até que a taxa de dose externa a 1 metro de distância desça abaixo de qual patamar legal de segurança para alta hospitalar?",
    options: [
      "Geralmente abaixo de 20 a 25 μSv/hora (correspondendo a uma atividade residual no corpo inferior a cerca de 600 a 800 MBq), garantindo que os familiares não recebam doses superiores aos limites regulamentares do público geral (1 a 5 mSv de restrição de dose para cuidadores).",
      "Abaixo de 500 Sieverts por segundo.",
      "Zero absoluto sem emissão de qualquer fotão único no universo.",
      "Apenas quando o doente perder metade do seu peso corporal."
    ],
    correctIndex: 0,
    explanation: "As normas nacionais e europeias de radioproteção (DGS em Portugal e Diretiva BSS) estipulam que o doente tratado com ¹³¹I em alta atividade só tem autorização de alta do quarto blindado quando a taxa de dose medida pelo físico médico com detetor portátil calibrated a 1 metro do abdómen/pescoço estiver abaixo de um valor pré-definido (tipicamente ≤ 20 a 25 μSv/h). Isto assegura que, seguindo as recomendações de distanciamento e higiene prescritas na alta, os familiares adultos não excedam 1 a 3 mSv de dose acumulada e crianças/grávidas permaneçam abaixo de 1 mSv.",
    distractorAnalysis: [
      "Opção B seria uma taxa de dose letal letalíssima em frações de segundo.",
      "Opção C é impossível devido ao decaimento exponencial gradual assintótico do iodo.",
      "Opção D é um critério clínico estapafúrdio que causaria caquexia extrema e desnutrição severa."
    ],
    nursingApplication: "Na alta hospitalar, o enfermeiro entrega e explica detalhadamente o folheto de instruções personalizadas de segurança radiológica: dormir em cama separada do cônjuge durante 7 a 14 dias, evitar transportes públicos lotados nas primeiras 48h, manter distância de 2 metros de crianças pequenas e mulheres grávidas, dar dupla descarga na sanita e lavar a roupa pessoal em separado."
  },
  {
    id: 733,
    topicId: 7,
    question: "O fenómeno da 'Conversão de Par Inversa' ou Aniquilação de Positrões gera dois fotões gama monoenergéticos de exatamente qual energia matemática?",
    options: [
      "511 keV cada um (0,511 MeV), que corresponde exatamente à energia de massa de repouso de um eletrão calculada por E = m_e · c².",
      "100 eV cada um.",
      "10 MeV cada um.",
      "Energias aleatórias variáveis em cada batimento cardíaco."
    ],
    correctIndex: 0,
    explanation: "A massa de repouso do eletrão (e do positrão) é m_e ≈ 9,109 × 10⁻³¹ kg. Pela equação de equivalência de Einstein: E = m_e · c² = (9,109 × 10⁻³¹ kg) × (2,998 × 10⁸ m/s)² = 8,187 × 10⁻¹⁴ Joules. Convertendo Joules para eletrão-volts (1 eV = 1,602 × 10⁻¹⁹ J): E = (8,187 × 10⁻¹⁴) / (1,602 × 10⁻¹⁹) ≈ 511.000 eV = 511 keV. Como na aniquilação a baixa energia o momento linear inicial do par é quase nulo, a conservação do momento e energia exige a criação de dois fotões rigorosamente idênticos de 511 keV viajando em direções diametralmente opostas (180°).",
    distractorAnalysis: [
      "Opções B e C violariam a conservação estrita de energia de massa de repouso de Einstein.",
      "Opção D é incorreta porque a física quântica fundamental impõe um valor de pico discreto universal imutável de 511 keV."
    ],
    nursingApplication: "A energia invariável de 511 keV é a 'assinatura' quântica que os enfermeiros de medicina nuclear reconhecem: os detetores do tomógrafo PET possuem janelas eletrónicas de seleção de energia ajustadas rigorosamente em torno do pico de 511 keV (ex: 450 a 550 keV), rejeitando qualquer radiação dispersa com energias diferentes para produzir imagens oncológicas de máxima nitidez."
  },
  {
    id: 734,
    topicId: 7,
    question: "Na utilização de blindagens para transporte de radiofármacos emissores de Radiação Gama de alta energia (como os fotões de 511 keV de PET), qual é a diferença entre usar Chumbo (Pb) e Tungsténio (W)?",
    options: [
      "O Tungsténio possui uma densidade significativamente superior à do chumbo (ρ_W ≈ 19,3 g/cm³ vs ρ_Pb ≈ 11,34 g/cm³), permitindo construir contentores e protetores de seringa muito mais compactos e mecanicamente resistentes com a mesma ou superior capacidade de atenuação da radiação.",
      "O chumbo atrai a radiação gama e multiplica a sua velocidade.",
      "O tungsténio é um líquido volátil que se dissolve na água.",
      "O chumbo não atenua radiações eletromagnéticas de qualquer tipo."
    ],
    correctIndex: 0,
    explanation: "A atenuação linear de fotões penetrantes de alta energia (como os 511 keV) depende fundamentalmente da densidade de massa (g/cm³) e da densidade de eletrões do material. O Tungsténio tem uma densidade de quase 19,3 g/cm³ (cerca de 70% mais denso que o chumbo, que tem 11,34 g/cm³). Isto significa que uma parede de tungsténio com menor espessura proporciona a mesma Camada Hemirredutora (HVL) que uma parede grossa de chumbo. Além disso, o tungsténio é extremamente duro e não se deforma, ao contrário do chumbo que é maleável e tóxico por contacto cutâneo contínuo.",
    distractorAnalysis: [
      "Opção B é um disparate físico; blindagens atenuam e absorvem radiação, nunca atraem ou aceleram fotões.",
      "Opção C é falsa; o tungsténio possui um dos pontos de fusão mais altos de todos os metais (>3400 °C).",
      "Opção D nega a propriedade de blindagem histórica clássica do chumbo."
    ],
    nursingApplication: "Em serviços de PET-CT com Flúor-18, os protetores de seringa e os cofres de transporte que o enfermeiro empunha são quase exclusivamente fabricados em ligas pesadas de Tungsténio: proporcionam proteção formidável contra os penetrantes fotões de 511 keV com uma empunhadura ergonómica e sem o risco de contaminação dérmica por chumbo metálico pesado."
  },
  {
    id: 735,
    topicId: 7,
    question: "O Lutece-177 (¹⁷⁷Lu, T₁/₂ ≈ 6,7 dias) é um dos radioisótopos mais inovadores da 'Terapia com Radionuclídeos de Recetores Peptídicos' (PRRT, ex: Lutathera no tratamento de tumores neuroendócrinos e Pluvicto no cancro da próstata). Qual é a sua assinatura de emissão nuclear?",
    options: [
      "Emissor misto de partículas Beta negativas de alcance tecidual curto e moderado (E_max = 498 keV, penetração tecidual de ~1,5 a 2 mm, ideal para destruir micrometástases tumorais com baixa toxicidade medular) e fotões Gama de baixa energia (113 keV e 208 keV) ideais para imagem diagnóstica SPECT e dosimetria personalizada.",
      "Emissor alfa puro com alcance de 50 metros.",
      "Emissor de positrões de 20 MeV sem qualquer elétrão.",
      "Substância não-radioativa puramente biológica sem decaimento nuclear."
    ],
    correctIndex: 0,
    explanation: "O Lutécio-177 tornou-se o padrão de excelência da teranóstica moderna de precisão: as suas partículas beta negativas têm menor energia e menor alcance (~1,5-2 mm) do que o Ítrio-90 (~11 mm), o que reduz drasticamente a irradiação colateral da medula óssea e rins saudáveis. Simultaneamente, as suas emissões gama de 113 e 208 keV são suficientemente penetrantes para serem captadas com excelente nitidez por câmaras gama convencionais SPECT/CT, permitindo ao enfermeiro e médico visualizar exatamente onde o fármaco se ligou e calcular a dose absorvida pelo tumor após cada ciclo.",
    distractorAnalysis: [
      "Opção B confunde emissores beta lantanídeos com emissores alfa pesados e atribui alcances absurdos.",
      "Opção C confunde decaimento beta negativo com emissão de positrões de PET.",
      "Opção D ignora a natureza radioisotópica deste tratamento oncológico de ponta."
    ],
    nursingApplication: "Na administração de ¹⁷⁷Lu-Dotatate pelo enfermeiro oncológico, é administrada concomitantemente uma perfusão intravenosa de aminoácidos específicos (lisina e arginina) durante várias horas: os aminoácidos saturam competitivamente a reabsorção tubular renal proximal, impedindo que o Lutécio-177 se fixe nos rins e prevenindo a toxicidade renal radioinduzida."
  },
  {
    id: 736,
    topicId: 7,
    question: "Qual das seguintes características biofísicas é EXCLUSIVA da radiação eletromagnética Gama (γ) em comparação com as partículas corpusculares Alfa (α) e Beta (β)?",
    options: [
      "Não possui massa de repouso nem carga elétrica e propaga-se no vácuo à velocidade da luz (c ≈ 3 × 10⁸ m/s).",
      "Desvia-se fortemente para o polo positivo quando colocada num campo elétrico uniforme.",
      "Possui carga elétrica dupla positiva +2e.",
      "É travada integralmente por uma simples folha de papel de carta."
    ],
    correctIndex: 0,
    explanation: "Na experiência clássica do campo magnético/elétrico transversal: as partículas alfa (positivas) desviam-se para o polo negativo; as partículas beta negativas desviam-se acentuadamente para o polo positivo; os raios gama (sendo fotões eletromagnéticos sem qualquer carga elétrica e sem massa de repouso) atravessam o campo elétrico em linha reta perfeita sem qualquer deflexão ou desvio da sua trajetória retilínea, propagando-se rigorosamente à velocidade da luz no vácuo (c).",
    distractorAnalysis: [
      "Opção B descreve a deflexão de partículas com carga elétrica negativa, como a partícula beta negativa (β⁻).",
      "Opção C descreve a carga elétrica exclusiva da partícula alfa (⁴₂He²⁺).",
      "Opção D descreve o poder de paragem característico exclusivo da partícula alfa."
    ],
    nursingApplication: "Por não ter carga elétrica e não ser desviada, a radiação gama não é retida por forças eletrostáticas de superfície. Ao cuidar de doentes em unidades de medicina nuclear, o enfermeiro sabe que a única proteção contra fotões gama é a interposição de blindagens de alta densidade atómica e o recuo físico em distância."
  },
  {
    id: 737,
    topicId: 7,
    question: "O fenómeno da 'Dose Profunda' e a ausência de um 'Pico de Bragg' na radiação gama e raios X diferenciam-na marcadamente das partículas pesadas como protões e partículas alfa. O que é o 'Pico de Bragg' característico das partículas carregadas pesadas?",
    options: [
      "O fenómeno biofísico em que a partícula carregada pesada liberta a quase totalidade da sua energia cinética concentrada no final do seu trajeto tecidual (imediatamente antes de parar), permitindo atingir tumores profundos com máxima destruição neoplásica e dose de radiação praticamente nula nos tecidos saudáveis situados para além do tumor.",
      "O pico de temperatura que a pele atinge durante uma queimadura solar.",
      "O aumento da frequência cardíaca provocado pelo medo da máquina de raio-X.",
      "A onda de choque mecânica emitida quando se parte um osso longo."
    ],
    correctIndex: 0,
    explanation: "Descrito por William Henry Bragg em 1904 e formulado na equação de Bethe-Bloch: a taxa de perda de energia de uma partícula carregada pesada (como protões ou iões de carbono na Hadronterapia) é inversamente proporcional ao quadrado da sua velocidade (dE/dx ∝ 1/v²). À medida que a partícula penetra e desacelera no corpo humano, ela deposita pouca energia à entrada; quando atinge uma velocidade muito baixa perto do fim do alcance, a probabilidade de interação dispara, libertando um pico colossal e localizado de ionização (Pico de Bragg) e cessando a radiação imediatamente a seguir com dose zero.",
    distractorAnalysis: [
      "Opções B, C e D referem fenómenos fisiológicos térmicos, psicológicos e traumatológicos sem relação com a física de desaceleração de partículas em radioterapia."
    ],
    nursingApplication: "A terapia com feixes de protões e o estudo do Pico de Bragg revolucionaram o tratamento de tumores pediátricos e tumores cerebrais e oculares próximos do nervo ótico e tronco cerebral: permite ao enfermeiro e equipa de radioterapia administrar doses tumoricidas com preservação absoluta de tecidos neurológicos nobres situados imediatamente atrás do tumor."
  },
  {
    id: 738,
    topicId: 7,
    question: "Na rotura e contaminação acidental de um tubo ou frasco contendo Césio-137 (¹³⁷Cs, emissor beta e gama de meia-vida física de 30 anos), qual é o fármaco de quelação oral administrado para acelerar a excreção biológica deste radionuclídeo do organismo?",
    options: [
      "Azul da Prússia (hexacianoferrato férrico insolúvel), que atua no lúmen intestinal fixando e retendo os iões de césio por troca iónica com potássio, impedindo a sua reabsorção entero-hepática e eliminando-os nas fezes.",
      "Insulina intravenosa em bólus com glicose a 50%.",
      "Adrenalina subcutânea a cada 5 minutos.",
      "Bicarbonato de sódio em pó esfregado nos olhos."
    ],
    correctIndex: 0,
    explanation: "O Césio pertence ao Grupo 1 da Tabela Periódica (metal alcalino quimicamente análogo ao potássio), distribuindo-se amplamente por todos os músculos e tecidos moles do corpo humano com elevada recirculação na circulação entero-hepática. O Azul da Prússia (Prussian Blue / Radiogardase) é um quelante inorgânico de troca iónica não-absorvível administrado por via oral: no intestino, liga-se fortemente aos iões Cs⁺ que são secretados com a bílis e sucos digestivos, formando um complexo insolúvel que é excretado nas fezes, reduzindo a meia-vida biológica do césio de cerca de 110 dias para cerca de 30 dias.",
    distractorAnalysis: [
      "Opção B é o tratamento da hipercaliemia grave, mas não quelaria nem eliminaria césio do trato gastrointestinal.",
      "Opção C é o tratamento da anafilaxia e PCR, sem papel em descorporação radiológica.",
      "Opção D provocaria queimaduras químicas cáusticas e cegueira."
    ],
    nursingApplication: "Em acidentes de contaminação radiológica de massa (como no célebre acidente com Césio-137 em Goiânia em 1987), o enfermeiro desempenha papel primordial na triagem, administração supervisionada de cápsulas orais de Azul da Prússia e colheita diária e pesagem de amostras de fezes e urina com monitorização contínua dosimétrica da carga corporal."
  },
  {
    id: 739,
    topicId: 7,
    question: "O Rádon-222 (²²²Rn) é um gás radioativo nobre natural que se infiltra em caves e edifícios a partir do decaimento do Urânio e Rádio presentes nas rochas graníticas do solo. Porque é que o perigo biológico do radão provém predominantemente dos seus 'Filhos de Meia-Vida Curta' e não do próprio gás radão?",
    options: [
      "Porque o gás radão inerte inalado é em grande parte exalado de volta na respiração seguinte; contudo, os seus produtos de decaimento filhos (como o Polónio-218 e Polónio-214) são metais sólidos radioativos que se agregam a micropartículas de poeira e aerossóis, ficando retidos permanentemente no epitélio brônquico onde emitem partículas alfa de alta energia diretamente no DNA das células basais pulmonares.",
      "Porque o gás radão arde com chamas azuis na traqueia.",
      "Porque o radão dissolve os dentes em poucas horas.",
      "Porque o radão arrefece o ar dos pulmões a temperaturas polares."
    ],
    correctIndex: 0,
    explanation: "O Rádon-222 é um gás nobre quimicamente inerte: a vasta maioria dos átomos de radão inalados entra nos pulmões e é imediatamente expelida na expiração seguinte sem sofrer desintegração (já que a sua meia-vida é de 3,8 dias). O verdadeiro carrasco biológico são os seus filhos radioativos de vida ultracurta: ²¹⁸Po (T_1/2 = 3 min) e ²¹⁴Po (T_1/2 = 164 μs). Sendo metais sólidos com carga elétrica, fixam-se às partículas de poeira inaladas e aderem ao muco das vias aéreas. Ao decaírem nos brônquios, ejetam partículas alfa de altíssimo LET (6,0 a 7,7 MeV) diretamente contra os núcleos das células basais respiratórias, sendo o principal fator de cancro pulmonar em não-fumadores.",
    distractorAnalysis: [
      "Opção B e C são fantasias estapafúrdias de ficção científica.",
      "Opção D confunde mecanismos de radiação ionizante celular com refrigeração criogénica."
    ],
    nursingApplication: "Em regiões de elevado teor de urânio granítico no solo (como na região Centro e Norte de Portugal e maciço Ibérico), o enfermeiro de Saúde Comunitária desempenha um papel de saúde pública crucial: alertar as populações para a ventilação frequente de caves e pisos térreos de habitações graníticas e promover a cessação tabágica, pois o fumo do tabaco e o radão atuam em sinergismo multiplicativo devastador na indução do cancro pulmonar."
  },
  {
    id: 740,
    topicId: 7,
    question: "Qual das seguintes grandezas expressa a 'Atividade Radioativa' (A) de uma amostra radioativa e qual é a sua unidade oficial no Sistema Internacional (SI)?",
    options: [
      "É o número de desintegrações nucleares espontâneas que ocorrem por unidade de tempo na amostra (A = λ · N = -dN/dt); a sua unidade SI é o Becquerel (1 Bq = 1 desintegração por segundo).",
      "É a temperatura em graus Celsius da solução radioativa.",
      "É o volume de líquido medido na proveta graduada em litros.",
      "É a pressão osmótica do sangue expressa em atmosferas."
    ],
    correctIndex: 0,
    explanation: "A Atividade Radioativa (A) quantifica o ritmo com que os núcleos instáveis da amostra decaem no tempo: A = λ · N, onde λ é a constante de decaimento radioativo (λ = ln(2) / T₁/₂) e N o número de núcleos radioativos presentes. A unidade oficial do SI (homenageando Henri Becquerel, descobridor da radioatividade em 1896) é o Becquerel (Bq), que corresponde rigorosamente a 1 desintegração por segundo (1 Bq = 1 s⁻¹). A unidade histórica anterior era o Curie (Ci), onde 1 Ci = 3,7 × 10¹⁰ Bq = 37 GBq.",
    distractorAnalysis: [
      "Opções B, C e D misturam propriedades termodinâmicas, volumétricas e fisiológicas sem qualquer relação com a taxa de desintegrações nucleares atómicas."
    ],
    nursingApplication: "Em Portugal e na União Europeia, todas as prescrições de radiofármacos administradas por enfermeiros são formuladas em múltiplos de Becquerel (Megabecquerel, MBq, ou Gigabecquerel, GBq): por exemplo, uma cintigrafia óssea com ⁹⁹ᵐTc prescreve habitualmente 740 MBq (740 milhões de desintegrações por segundo), cuja atividade é calibrada pelo enfermeiro no ativímetro antes da administração."
  },
  {
    id: 741,
    topicId: 7,
    question: "O ativímetro (ou calibrador de doses) utilizado na câmara quente de medicina nuclear para medir com precisão a atividade em MBq de uma seringa antes da sua injeção no doente é constituído por qual transdutor biofísico?",
    options: [
      "Uma Câmara de Ionização de poço preenchida com gás árgon sob pressão calibrada, onde a corrente elétrica gerada pela ionização dos fotões gama é diretamente proporcional à atividade radioativa da fonte.",
      "Uma balança de precisão de pratos mecânicos.",
      "Um termómetro de mercúrio com graduação decimal.",
      "Um tubo de ensaio aberto para o ar ambiente."
    ],
    correctIndex: 0,
    explanation: "O calibrador de dose (dose calibrator) de poço é uma câmara de ionização cilíndrica blindada com chumbo contendo gás árgon pressurizado (~12 a 15 atmosferas). O enfermeiro introduz a seringa ou frasco no orifício central ('poço'): os fotões gama emitidos ionizam o gás árgon; o campo elétrico atrai os eletrões gerando uma minúscula corrente de ionização (picoamperes a nanoamperes) que é diretamente proporcional à taxa de emissão de radiação. O equipamento converte a corrente e apresenta a atividade instantânea em MBq ou mCi no visor digital.",
    distractorAnalysis: [
      "Opção B mediria a massa total da seringa plástica com soro, que é invariável quer o líquido tenha 1 MBq quer tenha 1000 MBq de radioisótopo.",
      "Opções C e D não possuem capacidade física de captar nem converter ionizações atómicas de fotões gama."
    ],
    nursingApplication: "A medição e calibração de cada dose individual no ativímetro pelo enfermeiro imediatamente antes de administrar o radiofármaco é uma etapa de segurança mandante e indeclinável: garante que o doente não recebe doses subterapêuticas (que invalidariam o exame) nem sobredoses prejudiciais de radiação."
  },
  {
    id: 742,
    topicId: 7,
    question: "O Fósforo-32 (³²P, T₁/₂ ≈ 14,3 dias) é um emissor beta puro de alta energia (E_max = 1,71 MeV) utilizado historicamente no tratamento da Policitemia Vera e em sinoviortese radioativa em doentes com artrite inflamatória. Qual é a via primária de eliminação da radioatividade pelo doente?",
    options: [
      "Excreção urinária predominantemente, sendo uma fração significativa incorporada na fração de fosfatos dos ácidos nucleicos (DNA/RNA) e na hidroxiapatite do esqueleto mineral.",
      "Eliminação exclusiva através da respiração pulmonar em forma de gás hélio.",
      "Eliminação por descamação instantânea de todo o cabelo em 2 horas.",
      "O fósforo não é eliminado e permanece radioativo durante um milhão de anos."
    ],
    correctIndex: 0,
    explanation: "O fósforo é um macroelemento bioquímico fundamental na estrutura do DNA, RNA, fosfolípidos de membrana e mineral ósseo. Após administração intravenosa de ³²P-ortofosfato, cerca de 20% a 50% é rapidamente excretado pelos rins na urina nas primeiras 24 a 48 horas. A fração remanescente é captada e retida nos tecidos hematopoéticos de alta renovação celular e no esqueleto, onde os eletrões beta de alta energia suprimem a proliferação clonal descontrolada de eritrócitos na medula óssea.",
    distractorAnalysis: [
      "Opção B confunde compostos fosfatados com gases inertes voláteis exalados.",
      "Opção C descreveria uma alopecia instantânea inexistente nesta terapêutica.",
      "Opção D ignora a meia-vida física relativamente curta de 14 dias (ao fim de 140 dias a atividade é nula)."
    ],
    nursingApplication: "O enfermeiro orienta o doente tratado com Fósforo-32 sobre os cuidados estritos de higiene sanitária durante a primeira semana pós-tratamento: utilizar a sanita sentado (homens e mulheres) para evitar salpicos, dar descarga duas vezes e lavar cuidadosamente as mãos com sabão abundante após cada micção para prevenir a contaminação da pele."
  },
  {
    id: 743,
    topicId: 7,
    question: "Em caso de derramamento acidental de um líquido contendo radionuclídeos no chão da sala de preparação da câmara quente, qual é o mnemónico e ordem correta de ações de emergência adotada pela equipa de enfermagem?",
    options: [
      "Parar a dispersão / Conter o derrame cobrindo com papel absorvente impermeável imediatamente -> Avisar todas as pessoas presentes na sala -> Isolar a área contaminada e limitar o acesso -> Descontaminar de fora para dentro sob monitorização radiológica -> Notificar o Responsável de Proteção Radiológica (RPR).",
      "Correr para a rua aos gritos sem avisar ninguém.",
      "Passar esfregona molhada por todo o corredor do hospital para espalhar o líquido uniformemente.",
      "Deixar o líquido secar ao ar sem fazer nada durante vários meses."
    ],
    correctIndex: 0,
    explanation: "O protocolo padrão de contenção de derrames radioativos ('SWIMS' ou protocolo de contenção imediata) determina: 1) Conter o líquido derramado imediatamente cobrindo-o com papel absorvente (lado absorvente para baixo, lado plastificado para cima) para evitar que o líquido se espalhe pelo chão; 2) Alertar a sala para evitar que outros profissionais pisem o local; 3) Sinalizar e evacuar a área imediata; 4) Vestir EPI completo e iniciar a limpeza cuidadosa com pinças dos bordos exteriores em direção ao centro (evitando ampliar a mancha); 5) Recolher todo o material em contentor blindado para resíduos e medir a radiação residual.",
    distractorAnalysis: [
      "Opção B geraria pânico injustificado e abandonaria uma área perigosa sem contenção.",
      "Opção C é o pior erro possível: a passagem de esfregona comum espalharia a contaminação radioativa por todo o piso do hospital, contaminando os sapatos de dezenas de pessoas.",
      "Opção D permitiria a secagem do líquido, formando pós radioativos que seriam levantados para o ar pela circulação de pessoas e inalados (contaminação interna grave)."
    ],
    nursingApplication: "O enfermeiro atua com frieza técnica e rapidez na contenção de pequenos derrames: a aplicação imediata de folhas absorventes e a restrição de trânsito pedonal no piso evitam que um pequeno acidente de bancada se transforme num incidente radiológico de grande escala hospitalar."
  },
  {
    id: 744,
    topicId: 7,
    question: "Na avaliação da radiotoxicidade de diferentes tipos de radionuclídeos, por que motivo a radiação Alfa recebe um fator de eficácia biológica relativa (RBE) tão superior ao das radiações Beta e Gama?",
    options: [
      "Porque a deposição de energia em alta densidade linear (alto LET) das partículas alfa produz danos 'agrupados' complexos (clustered DNA lesions) com múltiplas quebras duplas de DNA contíguas que saturam e superam a capacidade de reparação enzimática das células humanas, com probabilidade muito maior de letalidade celular.",
      "Porque a radiação alfa queima a pele por calor de fogo aberto.",
      "Porque as partículas alfa são compostas por veneno de cobra condensado.",
      "Porque a radiação alfa viaja mais depressa do que a luz no vácuo."
    ],
    correctIndex: 0,
    explanation: "A Eficácia Biológica Relativa (RBE) reflete a severidade do dano genético para a mesma dose física absorvida em Grays. Radiações de baixo LET (raios X, beta, gama) depositam energia de modo disperso: grande parte das lesões são quebras simples de cadeia que a célula repara perfeitamente. A partícula alfa deposita centenas de keV em escassos nanómetros de trajeto: quando cruza uma fibra de cromatina, causa dezenas de quebras na hélice do DNA e proteínas associadas num único impacto ('lesões agrupadas ou complexas'). As enzimas de reparação celular colapsam perante danos tão concentrados, resultando em morte celular quase inevitável.",
    distractorAnalysis: [
      "Opções B, C e D são invenções absurdas e fantasiosas sem suporte biofísico ou bioquímico."
    ],
    nursingApplication: "A elevadíssima RBE da radiação alfa fundamenta o entusiasmo clínico da Alfa-Terapia Alvo em oncologia: como não depende da fase do ciclo celular nem do oxigénio tecidual (imune à hipóxia tumoral), uma única partícula alfa que cruze o núcleo de uma célula tumoral é suficiente para esterilizá-la e erradicar o cancro."
  },
  {
    id: 745,
    topicId: 7,
    question: "Qual das seguintes fontes radioativas utilizadas na medicina hospitalar é um exemplo de fonte radioativa 'Não-Selada'?",
    options: [
      "Uma solução líquida oral de Iodeto de Sódio-131 (¹³¹I) administrada numa chávena para o tratamento do carcinoma tiroideu.",
      "Uma semente sólida de Titânio lacrada a laser contendo Iodo-125 no seu interior para implantação prostática permanente.",
      "Um fio metálico flexível de Iridio-192 selado utilizado no pós-carregamento de braquiterapia ginecológica.",
      "A cápsula de aço inoxidável duplamente soldada que encerra o Cobalto-60 de uma unidade de teleterapia."
    ],
    correctIndex: 0,
    explanation: "Em radioproteção e legislação médica: 1) Fonte Selada: a matéria radioativa está permanentemente encerrada dentro de uma cápsula sólida estanque (como aço, titânio ou cerâmica soldada) que impede qualquer dispersão ou derrame do material em condições normais de uso (ex: sementes de ¹²⁵I ou fontes de ¹⁹²Ir); 2) Fonte NÃO-SELADA: a substância radioativa encontra-se em estado líquido, gasoso ou em suspensão aberta (como soluções de ¹³¹I, ¹⁸F-FDG ou ⁹⁹ᵐTc injetáveis), havendo risco iminente de derrame físico, dispersão, contaminação ambiental e incorporação biológica interna.",
    distractorAnalysis: [
      "Opções B, C e D são exemplos clássicos universais de fontes radioativas SELADAS hermeticamente encapsuladas."
    ],
    nursingApplication: "O manuseamento de fontes NÃO-SELADAS é o domínio clínico primordial do enfermeiro de medicina nuclear: exige protocolos rigorosos de assepsia, vestuário de proteção contra salpicos e vigilância de aerossóis, já que qualquer contacto acidental com o líquido acarreta risco direto de contaminação e ingestão inadvertida."
  },
  {
    id: 746,
    topicId: 7,
    question: "Na física médica da imagem molecular PET, qual é a consequência do 'Alcance do Positrão' (positron range) na resolução espacial final das imagens tomográficas?",
    options: [
      "O facto de o positrão ter de percorrer uma distância finita (de 0,5 mm a vários milímetros no tecido dependendo da sua energia máxima inicial) antes de colidir e sofrer aniquilação impõe um limite físico intrínseco fundamental na resolução espacial da imagem PET (pois o ponto de aniquilação detetado não coincide exatamente com a posição anatómica real do átomo radioativo).",
      "O alcance do positrão faz com que a imagem fique de cabeça para baixo no ecrã.",
      "O alcance do positrão impede totalmente a realização de exames em crianças.",
      "O positrão viaja até aos sapatos do doente antes de emitir luz visível."
    ],
    correctIndex: 0,
    explanation: "Na tomografia PET, os detectores captam os dois fotões de 511 keV no local exato onde ocorreu a ANIQUILAÇÃO. Contudo, o que se pretende mapear clinicamente é a posição do radioisótopo emissor. Entre a ejeção do positrão e a sua aniquilação final, ele percorre um trajeto tortuoso de frenagem: para o Flúor-18 (E_max = 635 keV), o alcance médio é muito pequeno (~0,6 mm, excelente resolução); para o Rubídio-82 (E_max = 3,35 MeV), o alcance atinge até 5 a 6 mm, gerando uma indefinição posicional física que limita a nitidez da imagem independentemente da resolução dos detetores.",
    distractorAnalysis: [
      "Opção B confunde limites de resolução quântica com rotações de matriz computacional de software.",
      "Opção C é falsa; exames PET pediátricos são realizados rotineiramente com ajuste dosimétrico cuidadoso.",
      "Opção D descreve uma distância macroscópica impossível para o alcance subcentimétrico de um positrão tecidual."
    ],
    nursingApplication: "O excelente alcance reduzido do Flúor-18 (~0,6 mm) é um dos principais motivos da sua hegemonia mundial na oncologia: permite aos enfermeiros e médicos identificar lesões tumorais e gânglios metastáticos minúsculos de apenas 3 a 4 milímetros de diâmetro na imagem PET-CT combinada."
  },
  {
    id: 747,
    topicId: 7,
    question: "A 'Equação Fundamental do Decaimento Radioativo' de Rutherford e Soddy rege a diminuição do número de núcleos radioativos ao longo do tempo: N(t) = N₀ · e^(-λ·t). Como se relaciona a Constante de Decaimento (λ) com o Tempo de Meia-Vida física (T₁/₂)?",
    options: [
      "λ = ln(2) / T₁/₂ ≈ 0,693 / T₁/₂ (sendo a constante de decaimento inversamente proporcional ao tempo de meia-vida).",
      "λ = T₁/₂ · 100.",
      "λ = (T₁/₂)² / c².",
      "λ é uma constante estritamente igual a zero para todos os elementos radioativos."
    ],
    correctIndex: 0,
    explanation: "Por definição de meia-vida (T₁/₂): é o intervalo de tempo após o qual metade dos núcleos radioativos iniciais se desintegrou, ou seja, N(T₁/₂) = N₀ / 2. Substituindo na equação de decaimento exponencial: N₀ / 2 = N₀ · e^(-λ · T₁/₂) => 1/2 = e^(-λ · T₁/₂) => ln(1/2) = -λ · T₁/₂ => -ln(2) = -λ · T₁/₂ => λ = ln(2) / T₁/₂ ≈ 0,693 / T₁/₂. A constante λ (unidade: s⁻¹ ou h⁻¹) expressa a probabilidade quântica de desintegração de cada núcleo por unidade de tempo.",
    distractorAnalysis: [
      "Opções B e C inventam dependências multiplicativas e quadráticas sem coerência matemática com a função exponencial.",
      "Opção D descreveria núcleos estáveis eternos que nunca sofrem decaimento radioativo (onde λ = 0 e T_1/2 = infinito)."
    ],
    nursingApplication: "Esta fórmula permite ao enfermeiro calcular facilmente a perda de atividade no tempo: sabendo que o Tecnécio-99m tem T₁/₂ = 6 horas (λ ≈ 0,115 h⁻¹), ao fim de 6 horas resta 50% da dose inicial, ao fim de 12 horas resta 25%, e ao fim de 24 horas (4 meias-vidas) resta apenas 6,25% da atividade original."
  },
  {
    id: 748,
    topicId: 7,
    question: "Na gestão de doentes tratados com Radioiodoterapia que apresentam incontinência urinária grave no quarto de isolamento, qual é o dispositivo de contenção de enfermagem de eleição prioritária?",
    options: [
      "Algaliação vesical com sistema de drenagem fechado estanque (sonda de Foley e saco coletor com válvula anti-refluxo), para canalizar 100% da urina radioativa diretamente para recipientes ou circuitos protegidos sem contaminar a pele, lençóis e colchão do doente.",
      "Uso exclusivo de fraldas de pano abertas lavadas à mão na bacia do quarto.",
      "Colocação de toalhas de papel soltas na cama para absorver o derrame livremente.",
      "Proibição absoluta de urinar durante três dias seguidos."
    ],
    correctIndex: 0,
    explanation: "A urina nas primeiras 24 a 48 horas após a toma de Iodo-131 em dose terapêutica concentra a maior taxa de atividade radioativa não-fixada (vários Gigabecquerels). Se um doente com incontinência urinária utilizar apenas fraldas comuns, a saturação rápida da fralda verte urina radioativa para o leito, molhando a pele (causando radiodermite química e contaminação externa severa por contacto íntimo) e contaminando colchões e o chão da enfermaria. A algaliação profilática em circuito fechado assegura a contenção física estanque dos fluidos corporais.",
    distractorAnalysis: [
      "Opção B provocaria contaminação radioativa massiva das mãos do enfermeiro e dos circuitos de lavandaria hospitalar.",
      "Opção C é ineficaz e causaria extravasamento contínuo de urina altamente radioativa.",
      "Opção D é fisiologicamente impossível e provocaria retenção urinária aguda com rutura da bexiga e uremia."
    ],
    nursingApplication: "A inserção da sonda vesical em circuito fechado deve ser planeada e realizada pelo enfermeiro ANTES da administração da cápsula de Iodo-131. O saco coletor é colocado dentro de um balde de chumbo ao nível do solo junto à cama, e a sua manipulação faz-se sempre com luvas duplas e óculos de proteção."
  },
  {
    id: 749,
    topicId: 7,
    question: "O conceito de 'Conversão de Neutrão em Protão' com emissão de um eletrão e um antineutrino no decaimento beta negativo (n -> p + e⁻ + ν̄_e) é mediado por qual partícula intermediária da força nuclear fraca no Modelo Padrão?",
    options: [
      "Pelo Bosão Vetorial W⁻ (um bosão intermediário massivo e carregado negativamente que decai quase instantaneamente num eletrão e num antineutrino do elétrão).",
      "Pelo fotão de luz visível.",
      "Pelo glúon de cor da força forte.",
      "Pelo gravitão quântico hipotético."
    ],
    correctIndex: 0,
    explanation: "Na teoria eletrofraca moderna (Glashow, Salam e Weinberg): a desintegração beta não ocorre por contacto pontual direto instantâneo de 4 partículas (teoria de Fermi). Um quark down (carga -1/3) do neutrão transforma-se num quark up (carga +2/3) emitindo um bosão vetorial pesado W⁻ (massa colossal de ~80,4 GeV/c²). Em escassos 10⁻²⁵ segundos, o bosão W⁻ decai num par lépton-antilepton: um eletrão (partícula beta, e⁻) e um antineutrino do elétrão (ν̄_e), conservando rigorosamente a carga elétrica e o número leptónico.",
    distractorAnalysis: [
      "Opção B é o mediador da força eletromagnética, incapaz de alterar o sabor dos quarks.",
      "Opção C é o mediador da força nuclear forte (confinamento de cor entre quarks sem decaimento beta).",
      "Opção D é o mediador hipotético da gravidade quântica."
    ],
    nursingApplication: "A descoberta do bosão W e da unificação eletrofraca (Prémio Nobel de 1979 e 1984 no CERN) é o ápice da física que sustenta as terapias radioisotópicas que os enfermeiros ministram: comprova que as leis fundamentais que regem o universo subatómico são as mesmas que permitem curar o cancro através da radioterapia dirigida."
  },
  {
    id: 750,
    topicId: 7,
    question: "Na avaliação comparativa global dos três tipos fundamentais de radiação nuclear para a segurança hospitalar de enfermeiros, qual é o resumo biofísico de radioproteção CORRETO?",
    options: [
      "Partículas Alfa: perigo interno extremo em caso de contaminação interna, nulo externamente (barradas por papel/pele); Partículas Beta: perigo intermediário de queimadura cutânea e ocular, blindadas com acrílico/plástico; Radiações Gama: perigo externo permanente de corpo inteiro por alta penetrância, exigindo distanciamento e espessas blindagens de chumbo.",
      "Todas as três radiações atravessam 10 metros de chumbo e nenhuma pode ser travada.",
      "A radiação gama é travada por uma folha de papel e a radiação alfa exige 2 metros de chumbo.",
      "Nenhuma radiação causa qualquer alteração no corpo humano."
    ],
    correctIndex: 0,
    explanation: "Este é o axioma mestre da radioproteção em enfermagem: 1) ALFA: altíssimo LET e ionização destrutiva, penetração microscópica (<80 μm), travada por papel ou luvas, risco quase exclusivamente interno (inalação/ingestão); 2) BETA: penetração moderada (milímetros a centímetros), travada por acrílico/plástico (evitando chumbo para não gerar Bremsstrahlung), risco de queimadura na pele/olhos e interno; 3) GAMA: altíssima penetração em todo o organismo, baixo LET, exige a tríade de ouro Tempo-Distância-Blindagem de chumbo para proteção contra irradiação externa.",
    distractorAnalysis: [
      "Opções B, C e D invertem absurdamente as leis comprovadas de penetração, ionização e efeitos biológicos das radiações."
    ],
    nursingApplication: "Dominar este resumo comparativo capacita o enfermeiro a selecionar instantaneamente o Equipamento de Proteção Individual adequado, a barreira física correta e as regras de segurança postural perante qualquer tipo de radiofármaco ou doente submetido a técnicas de radiologia e medicina nuclear."
  }
];
